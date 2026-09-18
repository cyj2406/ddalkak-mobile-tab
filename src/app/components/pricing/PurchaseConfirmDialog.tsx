import { useRef, useState } from "react";
import { CreditCard, Plus } from "lucide-react";

import { Button } from "@/app/components/common/Button";
import { Modal } from "@/app/components/common/Modal";
import { color, f, radius } from "@/app/styleTokens";
import { addPaymentMethod, fetchPaymentMethods, registerCardWithTossPayments, type PaymentMethod } from "@/app/state/subscription";

import { PaymentMethodRow } from "./PaymentMethodSwitchModal";
import type { PurchaseIntent } from "./pricingData";

export interface PurchaseConfirmResult {
  success: boolean;
  /** 실패했을 때만 — 사용자 취소는 message 없이 success:false로 조용히 돌아온다(오류로 과장하지 않음). */
  message?: string;
}

/** 그룹(①변경할 요금제/②결제 수단/③결제 및 동의) 제목 — 모달 제목보다 작고, 그 안의
 *  label(캡션)보다는 진하게 — 정보 위계에서 "Section title" 한 단만 차지한다. */
const SECTION_TITLE_STYLE = { ...f, fontWeight: 700, fontSize: 13, color: color.text.primary, letterSpacing: "-0.2px" } as const;
/** label(상품/구독 크레딧/변경 후 결제 금액/다음 결제 예정일 등 왼쪽 이름표) — 항상 secondary. */
const LABEL_STYLE = { ...f, fontWeight: 500, fontSize: 12.5, color: color.text.secondary, letterSpacing: "-0.2px" } as const;
/** PG 고지 문구 — 예전엔 아이콘+옅은 배경의 독립 박스였다. 삭제하는 대신 "결제 수단"
 *  아래(구독) 또는 결제 및 동의 안(충전)에 배경·테두리·아이콘 없는 작은 보조 문구로만
 *  남긴다 — 내용은 그대로, 무게만 낮췄다. */
const PG_NOTICE_STYLE = { ...f, fontWeight: 500, fontSize: 11.5, color: color.text.muted, lineHeight: 1.5 } as const;

/** "₩9,900" → "9,900원" — 정기결제 동의 문구에 실제 월 결제 금액을 그대로 넣는다. */
function wonFormat(priceLabel: string): string {
  return `${priceLabel.replace("₩", "")}원`;
}

/**
 * 구독하기 / 요금제 변경 / 크레딧 충전 버튼을 눌렀을 때 뜨는 확인 UI.
 *
 * 정보를 3개 그룹(①변경할 요금제 ②결제 수단 ③결제 및 동의)으로 나눠 위계를 준다 —
 * 항목마다 박스를 두지 않고, 그룹 사이만 얇은 구분선 + 넉넉한 간격으로 나눈다.
 *
 * "결제하고 구독 시작"/"결제하고 충전하기"를 누르면 `onConfirm`이 실제 결제 승인
 * 흐름(지금은 mock, 나중엔 Toss Payments)을 기다린 뒤 결과를 돌려준다. 성공해야만
 * 모달이 닫힌다 — 실패하면 이 안에서 에러 문구를 보여주고 재시도할 수 있게 둔다.
 * 구독 확인 시 정기결제 동의 체크 전에는 버튼을 누를 수 없다(임의로 결제가 실행되지
 * 않게 하는 최소한의 안전장치).
 *
 * 결제 수단 선택(구독일 때만, 2026-09-18 재정리) — "변경"은 더 이상 설정 화면으로
 * 보내지 않는다(카드 삭제 등 "관리"는 여전히 설정 > 구독·결제에만 있지만, "이번
 * 결제에 어떤 카드를 쓸지 고르는 것"은 이 모달 안에서 끝낸다). 같은 `<Modal>` 안에서
 * `view` state로 "확인"/"결제 수단 선택" 두 내용만 갈아 끼운다 — 모달을 중첩하거나
 * 배경 딤을 새로 추가하지 않는다. 목록에서 카드를 고르고 "선택 완료"를 눌러야 실제로
 * 반영된다(라디오 선택 자체는 아직 아무것도 바꾸지 않는다 — 결제 실행도, 계정의 기본
 * 결제수단 변경도 아니다). 그 선택은 로컬 state(selectedMethod)에만 머물다가, 최종
 * "결제하고 구독 시작/변경"을 눌러 결제가 실제로 성공했을 때만 PricingPage가 그 카드를
 * 이 구독의 기본 결제수단으로 커밋한다(handleConfirmSubscription, 다른 구독이라는
 * 개념 자체가 이 앱엔 없어 "다른 구독에 영향 없음"은 자동으로 성립한다). 카드가
 * 없으면(첫 구독자) 여전히 목록 UI 없이 "결제하고 구독 시작"을 누르는 즉시 Toss 카드
 * 등록·인증으로 넘어간다(PricingPage 로직, 변경 없음).
 */
export function PurchaseConfirmDialog({
  intent,
  currentPaymentMethod,
  onClose,
  onConfirm,
  onViewPolicy,
}: {
  intent: PurchaseIntent;
  /** 구독일 때만 의미 있음 — 현재 기본 결제수단(없으면 null). */
  currentPaymentMethod?: PaymentMethod | null;
  onClose: () => void;
  onConfirm: (selectedPaymentMethodId?: string) => Promise<PurchaseConfirmResult>;
  /** "구독·해지·환불 정책 보기" 링크 — 누르면 이 모달을 닫고 PricingPage에 이미 있는
   *  "결제 전에 확인해 주세요" 정책 아코디언으로 스크롤한다(정책 문구를 여기서 새로
   *  만들지 않고 기존 걸 그대로 가리킨다). 구독일 때만 의미가 있어 그때만 렌더링한다. */
  onViewPolicy?: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);
  const isSubscription = intent.kind === "subscription";
  // 신규 구독과 기존 요금제 변경을 같은 문구로 뭉뚱그리지 않는다 — 실제 모의 결제는
  // 둘 다 오늘 즉시 승인하지만(진짜 비례 정산 로직은 없음), 사용자에게는 "새로 시작"과
  // "바꾸기"가 다른 일이라 제목·버튼 문구만이라도 구분한다.
  const isPlanChange = isSubscription && !!intent.isPlanChange;
  const actionLabel = isSubscription ? (isPlanChange ? "요금제 변경" : "구독") : "충전";
  // 금액은 바로 위 "오늘 결제할 총금액"/"결제 금액" 줄에 이미 크게 보이므로 버튼에서는
  // 반복하지 않는다 — 가격이 커질수록(₩79,900 등) 버튼 문구가 두 줄로 밀리던 문제 해결.
  const ctaLabel = isSubscription ? (isPlanChange ? "결제하고 요금제 변경" : "결제하고 구독 시작") : "결제하고 충전하기";

  // 화면 전환 — "확인"/"결제 수단 선택" 두 내용만 갈아 끼운다(모달은 하나 그대로).
  const [view, setView] = useState<"confirm" | "selectMethod">("confirm");
  const changeBtnRef = useRef<HTMLButtonElement>(null);

  // 이번 결제(성공 시엔 이 구독의 기본 결제수단으로도 커밋)에 실제로 쓸 카드 — 최종
  // "결제하고 구독 시작/변경"을 눌러야만 의미가 생긴다. 화면을 오가는 동안(view 전환)
  // 에도 이 state와 agreed/intent는 그대로 유지된다(컴포넌트가 언마운트되지 않는다).
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(currentPaymentMethod ?? null);
  const hasPaymentMethod = isSubscription && !!selectedMethod;

  // 결제 수단 선택 화면 전용 state — 목록 조회 상태, 라디오로 "찜해 둔" 후보(아직 확정 아님),
  // 새 카드 등록 진행 상태.
  const [methodsState, setMethodsState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [methods, setMethods] = useState<PaymentMethod[]>([]);
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [registering, setRegistering] = useState(false);
  const [registerError, setRegisterError] = useState<string | null>(null);

  const openSelectMethod = () => {
    setView("selectMethod");
    setPendingId(selectedMethod?.paymentMethodId ?? null);
    setRegisterError(null);
    if (methodsState !== "idle") return;
    setMethodsState("loading");
    fetchPaymentMethods()
      .then((list) => { setMethods(list); setMethodsState("ready"); })
      .catch(() => setMethodsState("error"));
  };

  const restoreFocusToChangeButton = () => {
    requestAnimationFrame(() => changeBtnRef.current?.focus());
  };

  /** 취소·뒤로 이동 — 변경 전 선택(selectedMethod)을 그대로 둔다. */
  const cancelSelectMethod = () => {
    setView("confirm");
    restoreFocusToChangeButton();
  };

  /** 선택 완료 — 라디오로 찜해 둔 후보를 이제서야 selectedMethod에 반영한다. 여기서도
   *  결제나 계정의 기본 결제수단 자체를 바꾸지 않는다 — 그건 아래 "결제하고 구독
   *  시작/변경"이 실제로 성공했을 때 PricingPage가 한다. */
  const confirmSelectMethod = () => {
    const picked = methods.find((m) => m.paymentMethodId === pendingId) ?? null;
    if (picked) setSelectedMethod(picked);
    setView("confirm");
    restoreFocusToChangeButton();
  };

  const handleRegisterNewCard = () => {
    if (registering) return;
    setRegistering(true);
    setRegisterError(null);
    registerCardWithTossPayments().then((result) => {
      setRegistering(false);
      if (result.status === "success") {
        // 등록만 됐을 뿐 계정의 기본 결제수단으로 확정하지 않는다(makeDefault:false) —
        // "결제하고 구독 시작/변경"이 실제로 성공해야 이 구독의 결제수단으로 커밋된다.
        const newMethod = addPaymentMethod(result.card, { makeDefault: false });
        setMethods((prev) => [...prev, newMethod]);
        // 등록 직후엔 방금 만든 카드를 바로 골라 확인 화면으로 돌아간다 — 등록 →
        // 목록에서 다시 라디오를 고르는 한 단계를 더 거치게 하지 않는다.
        setSelectedMethod(newMethod);
        setView("confirm");
        restoreFocusToChangeButton();
      } else if (result.status === "failure") {
        setRegisterError("카드를 등록하지 못했습니다. 다시 시도해주세요.");
      }
      // cancelled: 사용자가 등록창을 닫은 것 — 오류로 과장하지 않고 조용히 선택 화면에 머문다.
    });
  };

  const canConfirm = !loading && (!isSubscription || agreed);

  const handleConfirm = () => {
    if (!canConfirm) return;
    setLoading(true);
    setError(null);
    onConfirm(isSubscription ? (selectedMethod?.paymentMethodId ?? undefined) : undefined).then((result) => {
      setLoading(false);
      if (!result.success && result.message) setError(result.message);
      // success:false, message 없음 = 사용자 취소 → 조용히 그대로 둔다(오류 표시 없음).
    });
  };

  return (
    <Modal onClose={onClose} ariaLabel={view === "confirm" ? "결제 미리보기" : "결제 수단 선택"} maxWidth={440}>
      {(close) =>
        view === "selectMethod" ? (
          <>
            <div className="px-6 pt-6 pb-1">
              <p style={{ ...f, fontWeight: 700, fontSize: 18, color: color.text.primary, letterSpacing: "-0.5px" }}>결제 수단 선택</p>
              <p style={{ ...f, fontWeight: 500, fontSize: 12.5, color: color.text.secondary, marginTop: 6, lineHeight: 1.5 }}>
                이번 결제와 앞으로의 자동결제에 사용할 카드를 선택해 주세요.
              </p>
            </div>

            <div className="px-6 pt-4 pb-2">
              {methodsState === "loading" ? (
                <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: color.text.muted, padding: "12px 0" }}>결제 수단을 불러오는 중입니다…</p>
              ) : methodsState === "error" ? (
                <div className="flex items-center justify-between gap-3 py-2">
                  <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: "#ef4444" }}>결제 수단을 불러오지 못했습니다.</p>
                  <Button
                    variant="secondary"
                    size="md"
                    onClick={() => {
                      setMethodsState("loading");
                      fetchPaymentMethods().then((list) => { setMethods(list); setMethodsState("ready"); }).catch(() => setMethodsState("error"));
                    }}
                  >
                    다시 시도
                  </Button>
                </div>
              ) : methods.length === 0 ? (
                <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: color.text.secondary, padding: "12px 0" }}>등록된 결제 수단이 없습니다.</p>
              ) : (
                <div role="radiogroup" aria-label="결제 수단 목록" className="flex flex-col gap-2">
                  {methods.map((m) => (
                    <PaymentMethodRow
                      key={m.paymentMethodId}
                      method={m}
                      selected={pendingId === m.paymentMethodId}
                      isCurrentDefault={m.paymentMethodId === currentPaymentMethod?.paymentMethodId}
                      onSelect={() => setPendingId(m.paymentMethodId)}
                    />
                  ))}
                </div>
              )}

              {methodsState === "ready" && (
                <div className="pt-2">
                  {/* 새 카드 등록 — 카드 입력·인증 자체는 기존 Toss 흐름 그대로다. 카드
                      "삭제" 등 관리 기능은 여기 두지 않는다(설정 > 구독·결제에만 있다). */}
                  <button
                    type="button"
                    onClick={handleRegisterNewCard}
                    disabled={registering}
                    className="w-full flex items-center justify-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff]"
                    style={{
                      ...f, fontWeight: 600, fontSize: 12.5, color: color.brand, height: 38, borderRadius: radius.control,
                      border: `1px solid ${color.border.default}`, opacity: registering ? 0.6 : 1,
                    }}
                  >
                    <Plus size={14} aria-hidden />
                    {registering ? "카드 등록 중…" : "다른 카드 등록"}
                  </button>
                  {registerError && (
                    <p style={{ ...f, fontWeight: 600, fontSize: 12, color: "#ef4444", marginTop: 8 }}>{registerError}</p>
                  )}
                </div>
              )}
            </div>

            <div className="flex gap-2.5 px-6 pt-4 pb-6">
              <Button variant="secondary" size="lg" fullWidth onClick={cancelSelectMethod}>취소</Button>
              <Button variant="primary" size="lg" fullWidth disabled={!pendingId || methodsState !== "ready"} onClick={confirmSelectMethod}>
                선택 완료
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="px-6 pt-6 pb-4">
              <span style={{ ...f, fontWeight: 700, fontSize: 18, color: color.text.primary, letterSpacing: "-0.5px" }}>
                {actionLabel} 확인
              </span>
            </div>

            {/* ① 변경할 요금제 — 가격이 그룹 안에서 가장 강한 값이고, 플랜명이 그다음,
                미확정 값("원가 검토 후 확정")은 오히려 muted로 낮춘다. label은 전부 secondary. */}
            <div className="px-6 flex flex-col gap-3">
              <p style={SECTION_TITLE_STYLE}>{isSubscription ? "변경할 요금제" : "충전할 크레딧"}</p>
              <div className="flex items-center justify-between gap-3">
                <span style={LABEL_STYLE}>상품</span>
                <span style={{ ...f, fontWeight: 700, fontSize: 15, color: color.text.primary, letterSpacing: "-0.3px" }}>{intent.title}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span style={LABEL_STYLE}>{isSubscription ? "구독 크레딧" : "추가 충전 크레딧"}</span>
                <span
                  style={{
                    ...f,
                    fontWeight: intent.credits === null ? 500 : 700,
                    fontSize: 14,
                    color: intent.credits === null ? color.text.muted : color.text.primary,
                    letterSpacing: "-0.3px",
                  }}
                >
                  {intent.credits === null ? "원가 검토 후 확정" : `${intent.credits.toLocaleString()} 크레딧`}
                </span>
              </div>
              {/* 오늘 실제로 청구되는 금액만 보여준다 — "/매월" 표기를 붙여 월 정기금액과
                  섞어 보여주지 않는다(둘이 항상 같은 값이더라도 "오늘 낼 돈"과 "매달 낼
                  돈"은 다른 사실이라 따로 적는다). */}
              <div className="flex items-center justify-between gap-3">
                <span style={LABEL_STYLE}>{isSubscription ? (isPlanChange ? "변경 후 결제 금액" : "오늘 결제할 총금액") : "결제 금액"}</span>
                <span style={{ ...f, fontWeight: 800, fontSize: 19, color: color.text.primary, letterSpacing: "-0.5px" }}>
                  {intent.priceLabel}
                </span>
              </div>
              {isSubscription && (
                <div className="flex items-center justify-between gap-3">
                  <span style={LABEL_STYLE}>월 정기결제 금액</span>
                  <span style={{ ...f, fontWeight: 700, fontSize: 14, color: color.text.primary, letterSpacing: "-0.3px" }}>{intent.priceLabel} / 월</span>
                </div>
              )}
              {isSubscription && intent.nextBillingDateLabel && (
                <div className="flex items-center justify-between gap-3">
                  <span style={LABEL_STYLE}>다음 결제 예정일</span>
                  <span style={{ ...f, fontWeight: 700, fontSize: 14, color: color.text.primary, letterSpacing: "-0.3px" }}>{intent.nextBillingDateLabel}</span>
                </div>
              )}
            </div>

            {/* ② 결제 수단 — 구독일 때만. "변경"은 이 모달 안에서 결제 수단 선택
                화면으로 전환한다(설정 이동 없음). 없으면(첫 구독자) 그 사실만 알린다 —
                실제 등록은 아래 CTA를 누른 뒤 이어지는 Toss 흐름에서 한다. */}
            {isSubscription && (
              <div className="px-6 mt-6 flex flex-col gap-3">
                <div className="h-px" style={{ background: "#f1f5f9" }} />
                <div className="flex items-center justify-between gap-3">
                  <p style={SECTION_TITLE_STYLE}>결제 수단</p>
                  {hasPaymentMethod && (
                    <button
                      ref={changeBtnRef}
                      type="button"
                      onClick={openSelectMethod}
                      className="outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] rounded"
                      style={{ ...f, fontWeight: 700, fontSize: 12.5, color: color.brand, cursor: "pointer" }}
                    >
                      변경
                    </button>
                  )}
                </div>

                {hasPaymentMethod && selectedMethod ? (
                  <div className="flex items-center gap-2">
                    <CreditCard size={16} strokeWidth={1.8} color={color.text.secondary} aria-hidden />
                    <span style={{ ...f, fontWeight: 700, fontSize: 14, color: color.text.primary }}>
                      {selectedMethod.brand} <span style={{ fontWeight: 500, color: color.text.secondary }}>•••• {selectedMethod.last4}</span>
                    </span>
                  </div>
                ) : (
                  <span style={{ ...f, fontWeight: 500, fontSize: 12.5, color: color.text.secondary }}>등록된 결제 수단이 없습니다.</span>
                )}

                <p style={PG_NOTICE_STYLE}>카드 등록·결제 승인은 토스페이먼츠를 통해 처리됩니다. 결제 승인이 확인된 뒤에만 구독이 시작됩니다.</p>
              </div>
            )}

            {/* ③ 결제 및 동의 — Toss 안내 박스를 없앴다(구독이면 위 "결제 수단" 아래로
                옮겼고, 충전이면 여기 작은 보조 문구로만 남는다). 정기결제 동의는 실제
                청구 금액을 그대로 문구에 넣고, 바로 옆에 정책 링크를 둬 "확인 → 정책
                확인 → 동의 → 결제"가 한 흐름으로 읽히게 한다. */}
            <div className="px-6 mt-6 flex flex-col gap-3">
              <div className="h-px" style={{ background: "#f1f5f9" }} />
              <p style={SECTION_TITLE_STYLE}>결제 및 동의</p>

              {!isSubscription && (
                <p style={PG_NOTICE_STYLE}>일회성 결제이며 구독과 별도로 청구됩니다. 카드 등록·결제 승인은 토스페이먼츠를 통해 처리됩니다.</p>
              )}

              {isSubscription && (
                <>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-0.5 shrink-0"
                      style={{ width: 16, height: 16, accentColor: color.brand }}
                    />
                    <span style={{ ...f, fontWeight: 500, fontSize: 12.5, color: color.text.secondary, lineHeight: 1.5 }}>
                      매월 {wonFormat(intent.priceLabel)} 자동결제에 동의합니다.
                    </span>
                  </label>
                  {onViewPolicy && (
                    <button
                      type="button"
                      onClick={onViewPolicy}
                      className="self-start outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] rounded"
                      style={{ ...f, fontWeight: 600, fontSize: 12, color: color.brand }}
                    >
                      구독·해지·환불 정책 보기
                    </button>
                  )}
                </>
              )}

              {error && (
                <div className="px-3.5 py-2.5" style={{ background: "#fef2f2", border: "1px solid rgba(239,68,68,0.28)", borderRadius: 10 }}>
                  <p style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#ef4444" }}>{error}</p>
                </div>
              )}
            </div>

            {/* 첫 구독자(등록된 결제 수단 없음) 안내 — 버튼을 누르면 곧바로 카드 등록
                흐름으로 넘어간다는 사실을 그 자리에서 미리 알린다. 카드 등록이 끝난
                뒤에 같은 내용을 한 번 더 확인시키는 단계는 따로 두지 않는다. */}
            {isSubscription && !hasPaymentMethod && (
              <p className="px-6 mt-3" style={PG_NOTICE_STYLE}>다음 단계에서 결제 수단을 등록합니다.</p>
            )}

            {/* "닫기"는 짧은 고정 폭, CTA가 나머지 공간을 다 쓰게 해서 문구가 줄바꿈되지 않게 한다.
                두 버튼 모두 size="lg"라 높이가 같다. */}
            <div className="flex gap-2.5 px-6 pt-5 pb-6">
              <Button variant="secondary" size="lg" onClick={close} disabled={loading} className="shrink-0" style={{ whiteSpace: "nowrap" }}>닫기</Button>
              <Button variant="primary" size="lg" loading={loading} disabled={!canConfirm} onClick={handleConfirm} className="flex-1" style={{ whiteSpace: "nowrap" }}>
                {ctaLabel}
              </Button>
            </div>
          </>
        )
      }
    </Modal>
  );
}
