import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { CreditCard } from "lucide-react";

import { Badge, type BadgeTone } from "@/app/components/common/Badge";
import { Button } from "@/app/components/common/Button";
import { showToast } from "@/app/components/common/Toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { color, controlHeight, f, radius, shadow, typography } from "@/app/styleTokens";
import {
  addPaymentMethod, expireSubscriptionForDev, fetchPaymentHistory, fetchPaymentMethod, findPlan,
  getDevForcedOutcomes, registerCardWithTossPayments, resetSubscriptionForDev, setDevForcedOutcome,
  simulatePaymentFailureForDev, undoCancel, useSubscription,
  type DevForcedOutcomes, type PaymentMethod, type PaymentRecord, type SubscriptionSnapshot,
} from "@/app/state/subscription";

import { CancelSubscriptionDialog } from "./CancelSubscriptionDialog";
import { PaymentFailedAlert } from "./PaymentFailedAlert";
import { PaymentMethodSwitchModal } from "./PaymentMethodSwitchModal";

/**
 * ?devpanel=1(+ 개발 빌드)에서만 보이는 상태 전환 지름길 — "결제 실패"·"구독 만료"는
 * 실제로는 시간이 지나거나 결제 대행사 콜백이 와야 재현되는 상태라, 프로토타입에서
 * 데모하려면 이렇게 강제로 트리거하는 길이 필요하다.
 */
const DEV_PANEL = import.meta.env.DEV
  && typeof window !== "undefined"
  && new URLSearchParams(window.location.search).get("devpanel") === "1";

/** "₩29,900" → "29,900원" — 이 탭에서만 쓰는 표기(요금제 카드 등 다른 화면은 ₩ 표기 그대로 둔다). */
function wonFormat(priceLabel: string): string {
  return `${priceLabel.replace("₩", "")}원`;
}

/** 섹션 카드 — 왼쪽 제목, 오른쪽 보조 액션 하나. 모든 섹션이 같은 자리·같은 크기의
 *  버튼을 쓰게 해서(요금제 변경) 버튼 위치가 섹션마다 달라 보이지 않게 한다.
 *  emphasis로 정보 중요도에 따른 시각적 위계를 준다 — "strong"(현재 구독, 가장 중요한
 *  정보)만 그림자를 갖고, "soft"(결제 수단·결제 내역, 관리·기록 정보)는 같은 테두리·
 *  radius를 쓰되 그림자를 없애 상대적으로 강조를 낮춘다. 카드 자체를 없애거나 배경을
 *  바꾸지는 않는다 — 셋 다 여전히 카드로 인지되되, 무게감만 다르다. */
function SectionCard({ title, headerAction, children, emphasis = "strong" }: { title: string; headerAction?: ReactNode; children: ReactNode; emphasis?: "strong" | "soft" }) {
  return (
    <div className="flex flex-col gap-4 bg-white p-6" style={{ border: `1px solid ${color.border.default}`, borderRadius: radius.card, boxShadow: emphasis === "strong" ? shadow.card : "none" }}>
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p style={typography.sectionTitle}>{title}</p>
        {headerAction}
      </div>
      {children}
    </div>
  );
}

const STATUS_BADGE: Partial<Record<SubscriptionSnapshot["status"], { label: string; tone: BadgeTone }>> = {
  active: { label: "이용 중", tone: "brand" },
  cancel_scheduled: { label: "해지 예약", tone: "warning" },
};

const PAYMENT_STATUS_TONE: Record<PaymentRecord["status"], BadgeTone> = {
  완료: "neutral",
  실패: "danger",
  취소: "neutral",
  환불: "neutral",
  부분환불: "warning",
};

const PAYMENT_TYPE_LABEL: Record<PaymentRecord["type"], string> = {
  subscription: "구독 결제",
  topup: "크레딧 충전",
  refund: "환불",
};

/**
 * "해지 및 크레딧 정책 보기" — 구독 해지 영역의 기본 안내는 확정된 두 가지(다음 결제
 * 중단, 이미 지급된 크레딧 즉시 회수 안 함)만 짧게 보여주고, 크레딧 소멸 시점·환불처럼
 * 아직 확정되지 않은 내용은 이 안에서만 펼쳐 보여준다. 여기 적힌 "소멸 예정"/"확정되지
 * 않았다"는 문구는 실제로 미정이라는 뜻 그대로다 — 확정된 정책처럼 다시 쓰지 않는다.
 * 카드 형태(PurchasePolicyAccordion)를 그대로 쓰지 않고 같은 Accordion 프리미티브를
 * 테두리 없는 텍스트 링크 모양으로만 다시 스타일링했다 — 이 영역엔 큰 박스를 두지 않는다.
 */
function CancelPolicyDisclosure() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="cancel-policy" className="border-b-0">
        <AccordionTrigger
          className="hover:no-underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] rounded-none flex-none justify-start self-start py-0 gap-1 [&>svg]:size-3.5"
          style={{ ...f, fontWeight: 600, fontSize: 12.5, color: color.brand, letterSpacing: "-0.2px" }}
        >
          해지 및 크레딧 정책 보기
        </AccordionTrigger>
        <AccordionContent className="pt-2 pb-0">
          <p style={{ ...f, fontWeight: 400, fontSize: 12, color: color.text.secondary, lineHeight: 1.65 }}>
            해지 신청만으로 이미 지급된 구독 크레딧을 즉시 회수하지 않습니다. 구독 크레딧은
            결제 주기마다 소멸 예정이며, 정확한 소멸 시점은 아직 확정 전입니다.
            해지 이후에도 구독 크레딧은 이 원래 정책에 따라 계속 처리되고, 추가 충전 크레딧은
            해지와 무관하게 별도 정책을 따릅니다. 환불 가능 조건과 금액도 아직 확정 전이며,
            필요하면 고객센터로 문의해주세요.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

/**
 * "구독 해지" 버튼 — destructive지만 페이지의 primary action처럼 보이면 안 된다.
 * 강한 solid red 대신, 기본은 흰 배경 + 중립 테두리(+ 빨간 글자)만으로 조용히 있다가
 * hover에서만 아주 옅은 빨강 배경·테두리로 명확해진다. Button.tsx에는 destructive
 * variant가 없어(primary/dark/secondary뿐) 여기서만 같은 토큰(controlHeight.md,
 * radius.control, typography.button)으로 직접 만든다 — secondary variant를 그대로
 * 쓰면 hover가 회색으로만 바뀌어 "위험한 동작"이라는 신호를 주지 못한다.
 */
function CancelSubscriptionButton({ onClick }: { onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const bg = pressed ? "#fee2e2" : hovered ? "#fef2f2" : "white";
  const borderColor = hovered || pressed ? "#fecaca" : color.border.default;
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPressed(false); }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      className="shrink-0 self-start whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] transition-colors"
      style={{
        ...typography.button,
        height: controlHeight.md,
        padding: "0 20px",
        borderRadius: radius.control,
        border: `1px solid ${borderColor}`,
        background: bg,
        color: "#ef4444",
        cursor: "pointer",
      }}
    >
      구독 해지
    </button>
  );
}

/**
 * 구독·결제 탭 — "요금제 및 크레딧" 페이지의 두 번째 탭 콘텐츠. 예전에는 별도 화면
 * (BillingManagementPage, 자체 PageContainer/PageHeader 보유)이었지만, 같은 내용을
 * 보여주는 화면을 두 곳에 복제하지 않기 위해 이 탭 하나로 합쳤다 — 페이지 chrome은
 * 상위 PricingPage가 이미 그리므로 여기서는 섹션 내용만 반환한다.
 *
 * "요금제 변경"은 구매 화면(플랜 목록)으로 가는 별도 화면 전환이라 상위(PricingPage)가
 * 그 전환을 담당한다 — 이 컴포넌트는 `onChangePlan` 콜백만 부른다.
 */
export function SubscriptionBillingTab({ onChangePlan }: { onChangePlan: () => void }) {
  const subscription = useSubscription();
  const [cancelOpen, setCancelOpen] = useState(false);
  const [switchModalOpen, setSwitchModalOpen] = useState(false);
  const [cardLoading, setCardLoading] = useState(false);
  const [showAllHistory, setShowAllHistory] = useState(false);
  const [historyState, setHistoryState] = useState<"loading" | "ready" | "error">("loading");
  const [historyItems, setHistoryItems] = useState<PaymentRecord[]>([]);
  // 결제 수단은 "조회 실패"와 "미등록"을 구분해야 해서, subscription.paymentMethod를
  // 그대로 쓰지 않고 fetchPaymentMethod()를 거친 값을 따로 들고 있는다.
  const [cardState, setCardState] = useState<"loading" | "ready" | "error">("loading");
  const [cardMethod, setCardMethod] = useState<PaymentMethod | null>(null);

  const plan = findPlan(subscription.planId);
  const hasSubscription = subscription.status === "active" || subscription.status === "cancel_scheduled";
  // 결제 실패는 "이용 중/해지 예약"보다 우선 노출한다 — 지금 가장 확인이 필요한 상태라서다.
  const statusBadge = subscription.lastPaymentFailed
    ? { label: "결제 확인 필요", tone: "danger" as BadgeTone }
    : STATUS_BADGE[subscription.status];
  const visibleHistory = showAllHistory ? historyItems : historyItems.slice(0, 3);

  const loadHistory = () => {
    setHistoryState("loading");
    fetchPaymentHistory()
      .then((records) => { setHistoryItems(records); setHistoryState("ready"); })
      .catch(() => setHistoryState("error"));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadHistory, [subscription.paymentHistory]);

  const loadCardStatus = () => {
    setCardState("loading");
    fetchPaymentMethod()
      .then((method) => { setCardMethod(method); setCardState("ready"); })
      .catch(() => setCardState("error"));
  };
  // 최초 진입 시 한 번만 조회한다 — 등록/변경 성공 시에는 그 응답을 그대로 반영하므로
  // (아래 handleRegisterCard) 다시 조회할 필요가 없다(성공 직후 "불러오는 중"이 잠깐
  // 다시 뜨는 어색함을 피한다).
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadCardStatus, []);

  /** 카드가 하나도 없을 때만 쓴다 — 곧바로 Toss 등록/인증으로 보낸다(카드사 선택 Demo
   *  없음). 카드가 이미 있으면 "결제 수단 변경" 모달을 거친다(handleOpenPaymentMethodFlow). */
  const handleRegisterFirstCard = () => {
    if (cardLoading) return;
    setCardLoading(true);
    registerCardWithTossPayments().then((result) => {
      setCardLoading(false);
      if (result.status === "success") {
        const method = addPaymentMethod(result.card, { makeDefault: true });
        setCardMethod(method);
        setCardState("ready");
        showToast("결제 수단이 등록되었습니다.");
      } else if (result.status === "failure") {
        showToast("결제 수단을 등록하지 못했습니다. 다시 시도해주세요.", "error");
      }
      // cancelled: 사용자가 등록창을 닫은 것 — 오류로 과장하지 않고 조용히 기존 화면으로 복귀.
    });
  };

  /** 헤더/결제 실패 배너 공용 진입점 — 카드가 있으면 목록에서 고르는 모달을,
   *  없으면 곧바로 최초 등록을 연다. 둘 다 "결제 수단을 확인해달라"는 같은 요청이라
   *  진입점 하나로 합쳤다. */
  const handleOpenPaymentMethodFlow = () => {
    if (cardMethod) setSwitchModalOpen(true);
    else handleRegisterFirstCard();
  };

  // 현재 구독 카드 헤더 버튼 — 상태별로 문구만 다를 뿐 자리·크기는 항상 같다(body에 중복 배치하지 않음).
  const currentSubscriptionHeaderAction = hasSubscription ? (
    <Button variant="secondary" size="md" onClick={onChangePlan}>요금제 변경</Button>
  ) : (
    <Button variant="secondary" size="md" onClick={onChangePlan}>
      {subscription.status === "expired" ? "다시 구독하기" : "요금제 보기"}
    </Button>
  );

  // 결제 수단 카드 헤더 버튼 — 조회 중/실패일 땐 아직 등록 여부를 모르므로 버튼을 보이지 않는다
  // (본문 쪽에 "다시 시도"만 둔다). 카드가 있으면 모달, 없으면 곧바로 등록으로 분기한다.
  const paymentMethodHeaderAction = cardState === "ready" ? (
    <Button variant="secondary" size="md" loading={cardLoading} onClick={handleOpenPaymentMethodFlow}>
      {cardMethod ? "결제 수단 변경" : "카드 등록"}
    </Button>
  ) : null;

  return (
    <>
      <div className="flex flex-col gap-6">
        {subscription.lastPaymentFailed && (
          <PaymentFailedAlert subscription={subscription} onFixPayment={handleOpenPaymentMethodFlow} />
        )}

        {/* Section 01. 현재 구독 — Free/유료 구독 중/해지 예약/결제 확인 필요 4가지 표시를 구분한다. */}
        <SectionCard title="현재 구독" headerAction={currentSubscriptionHeaderAction}>
          {hasSubscription && plan ? (
            <>
              <div className="flex items-center gap-2 flex-wrap">
                <span style={{ ...f, fontWeight: 700, fontSize: 16, color: color.text.primary, letterSpacing: "-0.4px" }}>{plan.name}</span>
                {statusBadge && <Badge tone={statusBadge.tone}>{statusBadge.label}</Badge>}
              </div>
              <p style={{ ...f, fontWeight: 700, fontSize: 22, color: color.text.primary, letterSpacing: "-0.6px" }}>
                {wonFormat(plan.priceLabel)} <span style={{ fontWeight: 500, fontSize: 13, color: color.text.secondary }}>/ 월</span>
              </p>
              {/* 다음 결제일 + 예정 금액을 한 줄 보조 정보로 묶는다 — 예전처럼 두 칸짜리
                  큰 그리드로 나누지 않아 빈 공간과 구분선이 줄었다. */}
              <p style={{ ...typography.caption, lineHeight: 1.6 }}>
                {subscription.status === "active" ? (
                  <>다음 결제일 <strong style={{ color: color.text.primary, fontWeight: 700 }}>{subscription.nextBillingDateLabel ?? "—"}</strong> · 예정 금액 <strong style={{ color: color.text.primary, fontWeight: 700 }}>{wonFormat(plan.priceLabel)}</strong></>
                ) : (
                  <>이용 종료일 <strong style={{ color: color.text.primary, fontWeight: 700 }}>{subscription.endDateLabel ?? "—"}</strong></>
                )}
              </p>
              {subscription.monthlyCreditsGranted !== null && (
                <div className="flex flex-col gap-1.5">
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: "#f1f5f9" }}>
                    <div className="h-full rounded-full" style={{
                      width: `${Math.min(100, Math.max(0, ((subscription.monthlyCreditsRemaining ?? 0) / subscription.monthlyCreditsGranted) * 100))}%`,
                      background: color.brand,
                    }} />
                  </div>
                  <span style={{ ...f, fontWeight: 500, fontSize: 11.5, color: color.text.secondary }}>
                    이번 달 크레딧 {(subscription.monthlyCreditsRemaining ?? 0).toLocaleString()} / {subscription.monthlyCreditsGranted.toLocaleString()}
                  </span>
                </div>
              )}
              {subscription.status === "cancel_scheduled" && (
                <p style={{ ...f, fontWeight: 500, fontSize: 12.5, color: color.text.secondary, lineHeight: 1.6 }}>
                  {subscription.endDateLabel}까지 현재 플랜을 이용할 수 있으며, 다음 자동 결제는 진행되지 않습니다.
                </p>
              )}
              {subscription.lastPaymentFailed && (
                <p style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#ef4444", lineHeight: 1.6 }}>
                  정기결제가 처리되지 않았습니다. 결제 수단을 확인해주세요.
                </p>
              )}
              {/* 해지 예약 상태에서만 나오는 복구 액션 — "요금제 변경"(헤더)과 다른 목적이라
                  같이 표시돼도 상태에 안 맞는 버튼이 겹치는 게 아니다. */}
              {subscription.status === "cancel_scheduled" && (
                <Button variant="primary" size="md" onClick={() => { undoCancel(); showToast("구독을 계속 이용합니다"); }} className="self-start">
                  구독 계속 이용
                </Button>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <span style={{ ...f, fontWeight: 700, fontSize: 16, color: color.text.primary }}>Free</span>
              </div>
              <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: color.text.secondary }}>무료 플랜 이용 중</p>
              {/* Free는 정기결제 예정 정보를 표시하지 않는다(표시할 결제 일정 자체가 없다).
                  이동 버튼은 헤더의 "요금제 보기/다시 구독하기" 하나뿐이다. */}
            </>
          )}
        </SectionCard>

        {/* Section 02. 결제 수단 — 카드사 선택 UI 없음. "결제 수단 변경/카드 등록" 버튼은
            제목 옆이 아니라 카드 정보 행 오른쪽에 둔다(카드 정보 묶음과 같은 행, 세로 중앙
            정렬) — 모바일에서는 겹치지 않도록 정보 아래로 내려간다.
            "조회 실패"(cardState==="error")와 "미등록"(cardState==="ready" && cardMethod===null)은
            서로 다른 화면이다 — 전자는 재시도를, 후자는 등록을 유도한다. */}
        <SectionCard title="결제 수단" emphasis="soft">
          {cardState === "loading" ? (
            <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: color.text.muted }}>결제 수단 정보를 불러오는 중입니다…</p>
          ) : cardState === "error" ? (
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: "#ef4444" }}>결제 수단 정보를 불러오지 못했습니다.</p>
              <Button variant="secondary" size="md" onClick={loadCardStatus}>다시 시도</Button>
            </div>
          ) : cardMethod ? (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="shrink-0 flex items-center justify-center rounded-full" style={{ width: 40, height: 40, background: color.surface.subtle }} aria-hidden>
                  <CreditCard size={18} strokeWidth={1.8} color={color.text.secondary} />
                </span>
                <div className="min-w-0">
                  <p style={{ ...f, fontWeight: 700, fontSize: 14.5, color: color.text.primary }}>
                    {cardMethod.brand} <span style={{ fontWeight: 500, color: color.text.secondary }}>•••• {cardMethod.last4}</span>
                  </p>
                  <p style={{ ...f, fontWeight: 500, fontSize: 12, color: color.text.muted, marginTop: 3 }}>
                    다음 정기결제에 사용할 결제 수단입니다.
                  </p>
                </div>
              </div>
              <div className="shrink-0">{paymentMethodHeaderAction}</div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="min-w-0">
                <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: color.text.secondary }}>등록된 결제 수단이 없습니다.</p>
                <p style={{ ...f, fontWeight: 500, fontSize: 12.5, color: color.text.muted, marginTop: 4, lineHeight: 1.6 }}>
                  구독 자동결제에 사용할 카드를 등록해주세요. 카드 정보 입력과 인증은 토스페이먼츠에서 진행됩니다.
                </p>
              </div>
              <div className="shrink-0">{paymentMethodHeaderAction}</div>
            </div>
          )}
        </SectionCard>

        {/* Section 03. 결제 내역 — 크레딧 사용 내역과는 별개 목록이다(원칙: 결제 ≠ 크레딧 사용,
            실제 돈으로 결제한 구독료·크레딧 구매·환불만 여기 나온다).
            PC는 결제일/상품명/금액/상태(+영수증) 4열, 모바일은 상품명+금액 한 줄 / 날짜+유형/상태 한 줄. */}
        <SectionCard title="결제 내역" emphasis="soft">
          {historyState === "loading" ? (
            <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: color.text.muted }}>결제 내역을 불러오는 중입니다…</p>
          ) : historyState === "error" ? (
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: "#ef4444" }}>결제 내역을 불러오지 못했습니다.</p>
              <Button variant="secondary" size="md" onClick={loadHistory}>다시 시도</Button>
            </div>
          ) : historyItems.length === 0 ? (
            <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: color.text.muted }}>아직 결제 내역이 없습니다.</p>
          ) : (
            <>
              <div className="flex flex-col">
                {visibleHistory.map((record, i) => (
                  <div key={record.id} style={{ borderTop: i === 0 ? "none" : "1px solid #f1f5f9" }}>
                    {/* 데스크톱: 결제일 / 결제 상품(+유형 배지) / 금액(오른쪽 정렬) / 상태(+영수증, 카드
                        오른쪽 여백에 맞춰 끝 정렬) 4열 grid. 열 폭은 auto/1fr만 써서 행마다 같은
                        위치를 자동으로 맞춘다 — 영수증 유무로 폭이 흔들리지 않도록 상태 칼럼 안에서
                        justify-end로 오른쪽에 붙인다(영수증 없는 행 뒤에 빈 칼럼을 남기지 않는다). */}
                    <div className="hidden md:grid items-center gap-3 py-4" style={{ gridTemplateColumns: "auto 1fr auto auto" }}>
                      <span style={{ ...f, fontWeight: 500, fontSize: 12.5, color: color.text.muted }}>{record.dateLabel}</span>
                      <div className="min-w-0 flex items-center gap-1.5">
                        <p className="truncate" style={{ ...f, fontWeight: 600, fontSize: 13.5, color: color.text.primary, letterSpacing: "-0.2px" }}>{record.label}</p>
                        <Badge tone="neutral">{PAYMENT_TYPE_LABEL[record.type]}</Badge>
                      </div>
                      <span className="text-right shrink-0" style={{ ...f, fontWeight: 700, fontSize: 13.5, color: color.text.primary }}>{record.amount.toLocaleString()}원</span>
                      <div className="flex items-center justify-end gap-2.5 shrink-0">
                        <Badge tone={PAYMENT_STATUS_TONE[record.status]}>{record.status}</Badge>
                        {record.receiptUrl && (
                          <a href={record.receiptUrl} target="_blank" rel="noopener noreferrer" style={{ ...f, fontWeight: 600, fontSize: 12.5, color: color.brand }}>
                            영수증
                          </a>
                        )}
                      </div>
                    </div>
                    {/* 모바일: 1행 상품명/금액, 2행 결제일·유형 묶음 / 상태(+영수증) */}
                    <div className="flex md:hidden flex-col gap-1.5 py-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="truncate min-w-0" style={{ ...f, fontWeight: 600, fontSize: 13.5, color: color.text.primary, letterSpacing: "-0.2px" }}>{record.label}</p>
                        <span className="shrink-0" style={{ ...f, fontWeight: 700, fontSize: 13.5, color: color.text.primary }}>{record.amount.toLocaleString()}원</span>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0 flex items-center gap-1.5">
                          <span className="shrink-0" style={{ ...f, fontWeight: 500, fontSize: 12, color: color.text.muted }}>{record.dateLabel}</span>
                          <Badge tone="neutral">{PAYMENT_TYPE_LABEL[record.type]}</Badge>
                        </div>
                        <div className="flex items-center gap-2.5 shrink-0">
                          <Badge tone={PAYMENT_STATUS_TONE[record.status]}>{record.status}</Badge>
                          {record.receiptUrl && (
                            <a href={record.receiptUrl} target="_blank" rel="noopener noreferrer" style={{ ...f, fontWeight: 600, fontSize: 12.5, color: color.brand }}>
                              영수증
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {historyItems.length > 3 && (
                <button
                  type="button"
                  onClick={() => setShowAllHistory((v) => !v)}
                  className="self-start"
                  style={{ ...f, fontWeight: 600, fontSize: 13, color: color.brand, letterSpacing: "-0.2px" }}
                >
                  {showAllHistory ? "접기" : "전체 결제 내역 보기 →"}
                </button>
              )}
            </>
          )}
        </SectionCard>

        {/* Section 04. 구독 관리(구독 해지) — 위 세 카드와 다른, 더 낮은 강조의 "계정 관리"
            영역이다. 카드로 감싸지 않고 얇은 구분선 + 작은 section title("구독 관리")로만
            구분하고, 위아래 여백을 넉넉히 둬 결제 정보 카드들과 시각적으로 분리한다.
            미구독(none/expired)일 땐 해지할 대상이 없으므로 섹션 자체를 표시하지 않는다 —
            조회 중·실패를 이 상태로 착각해 숨기지 않도록 hasSubscription(=active/
            cancel_scheduled만 true)으로만 판단한다(이미 그렇게 돼 있던 조건을 그대로 유지).
            해지 예약 상태에서는 버튼을 다시 보여주지 않는다(중복 해지 요청 방지) — 그
            상태를 되돌리는 액션(구독 계속 이용)은 위 "현재 구독" 카드에 이미 있다. */}
        {hasSubscription && (
          <>
            <div className="h-px" style={{ background: color.border.default }} />
            {/* px-6 — SectionCard 내부 패딩(24px)과 같은 값이라 카드 안 제목·본문과 왼쪽
                시작선이, sm:너비 100%라 오른쪽 끝선도 함께 맞는다. py-2 대신 위아래 여백을
                늘려(pt-6 pb-2) 위 결제 카드들과 더 뚜렷하게 구분한다. */}
            <div className="flex flex-col gap-5 px-6 pt-6 pb-2">
              <p style={{ ...f, fontWeight: 700, fontSize: 12, color: color.text.muted, letterSpacing: "0.02em" }}>구독 관리</p>

              {/* PC(sm 이상)에서는 왼쪽 제목+설명(max-width로 너무 길게 늘어지지 않게),
                  오른쪽 버튼을 items-start로 위쪽 정렬한 2열 구조. 모바일은 세로로 쌓인다.
                  정책 accordion은 이 행과 별개로 아래에서 전체 폭을 쓴다. */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="min-w-0 flex-1 flex flex-col gap-2" style={{ maxWidth: 480 }}>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p style={{ ...f, fontWeight: 700, fontSize: 14, color: color.text.primary }}>구독 해지</p>
                    {subscription.status === "cancel_scheduled" && statusBadge && <Badge tone={statusBadge.tone}>{statusBadge.label}</Badge>}
                  </div>
                  {/* 첫 화면엔 반드시 알아야 하는 핵심(자동결제 중단 시점 · 남은 기간 계속
                      이용 가능)만 남기고, 크레딧 회수·소멸·환불 같은 상세는 정책 accordion
                      으로 옮겼다 — 문구를 지운 게 아니라 옮긴 것이다(아래 accordion 본문 참고). */}
                  <p style={{ ...f, fontWeight: 400, fontSize: 12.5, color: color.text.secondary, lineHeight: 1.6 }}>
                    {subscription.status === "cancel_scheduled" ? (
                      <>{subscription.endDateLabel ?? "—"}까지 이용할 수 있으며, 다음 자동 결제는 진행되지 않습니다.</>
                    ) : (
                      <>구독을 해지하면 다음 결제일({subscription.nextBillingDateLabel ?? "—"})부터 자동 결제가 진행되지 않습니다. 현재 이용 기간까지는 계속 서비스를 이용할 수 있습니다.</>
                    )}
                  </p>
                </div>
                {subscription.status === "active" && <CancelSubscriptionButton onClick={() => setCancelOpen(true)} />}
              </div>

              <CancelPolicyDisclosure />
            </div>
          </>
        )}

        {DEV_PANEL && <DevPanel subscription={subscription} />}
      </div>

      {cancelOpen && (
        <CancelSubscriptionDialog subscription={subscription} onClose={() => setCancelOpen(false)} onCancelled={() => setCancelOpen(false)} />
      )}
      {switchModalOpen && (
        <PaymentMethodSwitchModal
          onClose={() => setSwitchModalOpen(false)}
          onChanged={(method) => setCardMethod(method)}
        />
      )}
    </>
  );
}

const OUTCOME_OPTIONS = ["success", "failure", "cancelled"] as const;
const OUTCOME_LABEL: Record<string, string> = { success: "성공", failure: "실패", cancelled: "취소" };

function DevOutcomeSelect<K extends keyof DevForcedOutcomes>({
  label, forcedKey, options,
}: {
  label: string;
  forcedKey: K;
  options: readonly DevForcedOutcomes[K][];
}) {
  const current = getDevForcedOutcomes()[forcedKey];
  return (
    <div className="flex items-center gap-1.5">
      <span style={{ ...f, fontWeight: 700, fontSize: 11, color: "#92400e" }}>{label}</span>
      {options.map((opt) => (
        <button
          key={String(opt)}
          type="button"
          aria-label={`${label} - ${OUTCOME_LABEL[String(opt)]}`}
          onClick={() => setDevForcedOutcome(forcedKey, opt)}
          className="rounded-full px-2.5 py-0.5"
          style={{
            ...f, fontWeight: 700, fontSize: 10.5,
            border: "1px solid #fde68a",
            background: current === opt ? "#92400e" : "white",
            color: current === opt ? "white" : "#92400e",
          }}
        >
          {OUTCOME_LABEL[String(opt)]}
        </button>
      ))}
    </div>
  );
}

function DevPanel({ subscription }: { subscription: SubscriptionSnapshot }) {
  return (
    <div className="rounded-[12px] px-3.5 py-3 flex flex-col gap-2.5" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
      <span style={{ ...f, fontWeight: 700, fontSize: 11.5, color: "#92400e" }}>[개발용] 상태 전환 — ?devpanel=1 일 때만 보임</span>
      <div className="flex flex-wrap gap-1.5">
        <DevButton label="정기결제 실패 시뮬레이션" onClick={simulatePaymentFailureForDev} />
        <DevButton label="이용 기간 즉시 만료(해지 예정 → 종료)" onClick={expireSubscriptionForDev} disabled={subscription.status !== "cancel_scheduled"} />
        <DevButton label="미구독으로 초기화" onClick={resetSubscriptionForDev} />
      </div>
      <div className="h-px bg-[#fde68a]" />
      <div className="flex flex-col gap-1.5">
        <DevOutcomeSelect label="다음 카드 등록 결과" forcedKey="cardRegistration" options={OUTCOME_OPTIONS} />
        <DevOutcomeSelect label="다음 구독 첫 결제 결과" forcedKey="firstPayment" options={OUTCOME_OPTIONS} />
        <DevOutcomeSelect label="다음 크레딧 충전 결과" forcedKey="topupPayment" options={OUTCOME_OPTIONS} />
        <DevOutcomeSelect label="다음 구독 해지 요청 결과" forcedKey="cancelSubscription" options={["success", "failure"] as const} />
        <DevOutcomeSelect label="다음 결제 내역 조회 결과" forcedKey="historyFetch" options={["success", "failure"] as const} />
        <DevOutcomeSelect label="다음 결제 수단 조회 결과" forcedKey="paymentMethodFetch" options={["success", "failure"] as const} />
      </div>
    </div>
  );
}

function DevButton({ label, onClick, disabled }: { label: string; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-full px-3 py-1"
      style={{ ...f, fontWeight: 600, fontSize: 11.5, border: "1px solid #fde68a", background: "white", color: disabled ? "#d1d5db" : "#92400e", cursor: disabled ? "default" : "pointer" }}
    >
      {label}
    </button>
  );
}

export default SubscriptionBillingTab;
