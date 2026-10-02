import { useEffect, useState } from "react";
import { CreditCard, Plus, Trash2 } from "lucide-react";

import { Button } from "@/app/components/common/Button";
import { Modal } from "@/app/components/common/Modal";
import { showToast } from "@/app/components/common/Toast";
import { color, f, motion, typography } from "@/app/styleTokens";
import {
  cardIssuerName,
  cardLastDigits,
  fetchPaymentMethods, registerCardWithTossPayments, addPaymentMethod, switchDefaultPaymentMethod,
  commitDefaultPaymentMethod, deletePaymentMethodWithServer, removePaymentMethod, getSubscription, type PaymentMethod,
} from "@/app/state/subscription";

/**
 * 결제 수단 변경 모달 — 카드사를 먼저 고르게 하지 않는다. 이미 Toss Payments로 등록된
 * 결제수단 목록에서 다음 정기결제에 쓸 카드를 라디오로 고르거나("결제수단 변경"),
 * 그 목록 자체를 늘리려면 "+ 새 카드 등록"으로 Toss 등록/인증을 새로 거친다("새 카드
 * 등록"). 두 동작은 분리돼 있다 — 새로 등록한 카드는 목록에 더해지고 이 모달 안에서
 * 선택 상태가 될 뿐, "선택한 카드로 변경"을 눌러야만 실제 기본 결제수단이 바뀐다.
 *
 * 카드 삭제(2026-10-02) — 각 행 오른쪽 휴지통. 모달을 겹치지 않고 같은 모달 안에서 확인 화면으로
 * 전환한다. 구독 중 다음 정기결제에 쓰이는 카드는 지울 수 없다고 안내만 하고(다른 카드로 변경 후 삭제),
 * 그 외 카드는 "삭제할까요?" 확인 뒤 서버 성공 응답이 와야 목록에서 지운다.
 */
export function PaymentMethodSwitchModal({
  onClose,
  onChanged,
}: {
  onClose: () => void;
  /** 기본 결제수단이 실제로(서버 확인 후) 바뀐 뒤 호출 — 호출부가 자기 화면의 카드 요약을 갱신한다. */
  onChanged: (method: PaymentMethod) => void;
}) {
  const [listState, setListState] = useState<"loading" | "ready" | "error">("loading");
  const [methods, setMethods] = useState<PaymentMethod[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const [registering, setRegistering] = useState(false);
  const [registerError, setRegisterError] = useState<string | null>(null);

  const [deleteTarget, setDeleteTarget] = useState<PaymentMethod | null>(null);
  const [deleting, setDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const [switching, setSwitching] = useState(false);
  const [switchError, setSwitchError] = useState<string | null>(null);

  const loadList = () => {
    setListState("loading");
    fetchPaymentMethods()
      .then((list) => {
        setMethods(list);
        setSelectedId(list.find((m) => m.isDefault)?.paymentMethodId ?? list[0]?.paymentMethodId ?? null);
        setListState("ready");
      })
      .catch(() => setListState("error"));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(loadList, []);

  const currentDefaultId = methods.find((m) => m.isDefault)?.paymentMethodId ?? null;
  const canSwitch = selectedId !== null && selectedId !== currentDefaultId;

  const handleRegisterNewCard = () => {
    if (registering) return;
    setRegistering(true);
    setRegisterError(null);
    registerCardWithTossPayments().then((result) => {
      setRegistering(false);
      if (result.status === "success") {
        const newMethod = addPaymentMethod(result.card, { makeDefault: false });
        setMethods((prev) => [...prev, newMethod]);
        setSelectedId(newMethod.paymentMethodId); // 등록만 됐을 뿐, 확정은 "선택한 카드로 변경"을 눌러야 한다.
      } else if (result.status === "failure") {
        setRegisterError("카드를 등록하지 못했습니다. 다시 시도해주세요.");
      }
      // cancelled: 사용자가 Toss 등록창을 닫은 것 — 오류로 과장하지 않고 조용히 되돌아간다.
    });
  };

  const isBillingCard = (m: PaymentMethod) => m.isDefault && getSubscription().status === "active";

  const handleDelete = () => {
    if (!deleteTarget || deleting) return;
    setDeleting(true);
    setDeleteError(null);
    deletePaymentMethodWithServer(deleteTarget.paymentMethodId).then(({ success }) => {
      setDeleting(false);
      if (!success) { setDeleteError("카드를 삭제하지 못했습니다. 다시 시도해주세요."); return; }
      removePaymentMethod(deleteTarget.paymentMethodId);
      const rest = methods.filter((m) => m.paymentMethodId !== deleteTarget.paymentMethodId);
      setMethods(rest);
      if (selectedId === deleteTarget.paymentMethodId) {
        setSelectedId(rest.find((m) => m.isDefault)?.paymentMethodId ?? rest[0]?.paymentMethodId ?? null);
      }
      setDeleteTarget(null);
      showToast("카드가 삭제되었습니다.");
    });
  };

  const handleConfirmSwitch = (close: () => void) => {
    if (!canSwitch || switching || !selectedId) return;
    setSwitching(true);
    setSwitchError(null);
    switchDefaultPaymentMethod(selectedId).then(({ success }) => {
      setSwitching(false);
      if (!success) {
        setSwitchError("결제 수단을 변경하지 못했습니다. 다시 시도해주세요.");
        return;
      }
      commitDefaultPaymentMethod(selectedId);
      const changed = methods.find((m) => m.paymentMethodId === selectedId);
      if (changed) onChanged({ ...changed, isDefault: true });
      showToast("결제 수단이 변경되었습니다.");
      close();
    });
  };

  return (
    <Modal onClose={onClose} ariaLabel={deleteTarget ? "카드 삭제" : "결제 수단 변경"} maxWidth={440}>
      {(close) => deleteTarget ? (
        isBillingCard(deleteTarget) ? (
          <div className="px-6 pt-6 pb-6">
            <p style={{ ...f, fontWeight: 700, fontSize: 18, color: color.text.primary, letterSpacing: "-0.5px" }}>이 카드는 삭제할 수 없어요</p>
            <p style={{ ...f, fontWeight: 400, fontSize: 13, color: color.text.secondary, marginTop: 8, lineHeight: 1.6 }}>
              <span style={{ fontWeight: 600, color: color.text.primary }}>{cardIssuerName(deleteTarget.brand)} •••• {cardLastDigits(deleteTarget.last4)}</span><br />다음 정기결제에 사용 중인 카드예요. 다른 카드로 변경한 뒤 삭제해 주세요.
            </p>
            <div className="mt-5">
              <Button variant="secondary" size="lg" fullWidth onClick={() => setDeleteTarget(null)}>확인</Button>
            </div>
          </div>
        ) : (
          <div className="px-6 pt-6 pb-6">
            <p style={{ ...f, fontWeight: 700, fontSize: 18, color: color.text.primary, letterSpacing: "-0.5px" }}>카드를 삭제할까요?</p>
            <p style={{ ...f, fontWeight: 400, fontSize: 13, color: color.text.secondary, marginTop: 8, lineHeight: 1.6 }}>
              <span style={{ fontWeight: 600, color: color.text.primary }}>{cardIssuerName(deleteTarget.brand)} •••• {cardLastDigits(deleteTarget.last4)}</span><br />결제 수단 목록에서 삭제합니다. 다시 쓰려면 새로 등록해야 해요.
            </p>
            {deleteError && <p style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#ef4444", marginTop: 10 }}>{deleteError}</p>}
            <div className="flex gap-2.5 mt-5">
              <Button variant="secondary" size="lg" fullWidth onClick={() => { setDeleteTarget(null); setDeleteError(null); }} disabled={deleting}>취소</Button>
              <Button variant="primary" size="lg" fullWidth loading={deleting} onClick={handleDelete}>삭제</Button>
            </div>
          </div>
        )
      ) : (
        <>
          <div className="px-6 pt-6 pb-1">
            <p style={{ ...f, fontWeight: 700, fontSize: 18, color: color.text.primary, letterSpacing: "-0.5px" }}>결제 수단 변경</p>
            <p style={{ ...typography.caption, marginTop: 6, lineHeight: 1.5 }}>다음 정기결제에 사용할 결제 수단을 선택해주세요.</p>
          </div>

          <div className="px-6 pt-4 pb-2">
            {listState === "loading" ? (
              <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: color.text.muted, padding: "12px 0" }}>결제 수단을 불러오는 중입니다…</p>
            ) : listState === "error" ? (
              <div className="flex items-center justify-between gap-3 py-2">
                <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: "#ef4444" }}>결제 수단을 불러오지 못했습니다.</p>
                <Button variant="secondary" size="md" onClick={loadList}>다시 시도</Button>
              </div>
            ) : (
              <div role="radiogroup" aria-label="결제 수단 목록" className="flex flex-col gap-2">
                {methods.map((m) => (
                  <PaymentMethodRow
                    key={m.paymentMethodId}
                    method={m}
                    selected={selectedId === m.paymentMethodId}
                    onSelect={() => setSelectedId(m.paymentMethodId)}
                    onDelete={() => { setDeleteError(null); setDeleteTarget(m); }}
                  />
                ))}
              </div>
            )}

            {listState === "ready" && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleRegisterNewCard}
                  disabled={registering}
                  className="w-full flex items-center justify-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff]"
                  style={{
                    ...f, fontWeight: 600, fontSize: 13.5, color: color.brand, height: 44, borderRadius: 12,
                    border: `1.5px dashed ${color.border.default}`, opacity: registering ? 0.6 : 1,
                  }}
                >
                  <Plus size={16} aria-hidden />
                  {registering ? "카드 등록 중…" : "새 카드 등록"}
                </button>
                {registerError && (
                  <p style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#ef4444", marginTop: 8 }}>{registerError}</p>
                )}
              </div>
            )}

            {switchError && (
              <div className="mt-3 px-3.5 py-2.5" style={{ background: "#fef2f2", border: "1px solid rgba(239,68,68,0.28)", borderRadius: 10 }}>
                <p style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#ef4444" }}>{switchError}</p>
              </div>
            )}
          </div>

          <div className="flex gap-2.5 px-6 pt-4 pb-6">
            <Button variant="secondary" size="lg" fullWidth onClick={close} disabled={switching}>취소</Button>
            <Button variant="primary" size="lg" fullWidth loading={switching} disabled={!canSwitch} onClick={() => handleConfirmSwitch(close)}>
              선택한 카드로 변경
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
}

export function PaymentMethodRow({
  method, selected, onSelect, onDelete,
}: {
  method: PaymentMethod;
  selected: boolean;
  /** @deprecated "현재 결제 수단" 배지는 없앴다(2026-10-02) — 호출부 호환용으로만 남긴다. */
  isCurrentDefault?: boolean;
  onSelect: () => void;
  /** 있을 때만 오른쪽에 삭제 버튼을 그린다(설정 > 결제 수단 변경). */
  onDelete?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const label = `${cardIssuerName(method.brand)} •••• ${cardLastDigits(method.last4)}`;
  return (
    <label
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // has-[:focus-visible] — 클릭으로 라디오를 선택해도 브라우저가 그 input에 포커스를
      // 주기 때문에(마우스 클릭 포함) focus-within을 쓰면 선택 시마다 테두리(선택 표시) +
      // 링(포커스 표시)이 겹쳐 "두 줄"로 보였다. 키보드 포커스(focus-visible)일 때만 링을
      // 보여줘 선택 표시와 분리한다.
      className="flex items-center gap-3 rounded-[14px] cursor-pointer has-[input:focus-visible]:ring-2 has-[input:focus-visible]:ring-offset-1 has-[input:focus-visible]:ring-[#4f7bff]"
      style={{
        padding: onDelete ? "4px 4px 4px 14px" : "13px 14px",
        minHeight: 50,
        border: `1.5px solid ${selected ? color.border.focus : color.border.default}`,
        background: selected ? color.surface.accent : hovered ? "#f8fafc" : "white",
        transition: `background-color ${motion.fast}, border-color ${motion.fast}`,
      }}
    >
      <input
        type="radio"
        name="payment-method"
        checked={selected}
        onChange={onSelect}
        className="shrink-0 outline-none"
        style={{ width: 17, height: 17, accentColor: color.brand }}
      />
      <CreditCard size={18} strokeWidth={1.8} color={selected ? color.brand : color.text.secondary} className="shrink-0" aria-hidden />
      <span className="flex-1 min-w-0 truncate" style={{ ...f, fontWeight: 600, fontSize: 14, color: color.text.primary }}>
        {cardIssuerName(method.brand)} <span style={{ fontWeight: 500, color: color.text.secondary }}>•••• {cardLastDigits(method.last4)}</span>
      </span>
      {onDelete && (
        // 라디오 행(label) 안이지만 선택을 바꾸지 않도록 기본 동작·전파를 막는다. 터치 영역 40×40.
        <button
          type="button"
          aria-label={`${label} 삭제`}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); onDelete(); }}
          className="shrink-0 size-10 inline-flex items-center justify-center rounded-[10px] outline-none hover:bg-[#f1f5f9] focus-visible:ring-2 focus-visible:ring-[#4f7bff]"
          style={{ color: color.text.secondary, cursor: "pointer" }}
        >
          <Trash2 size={17} strokeWidth={1.8} aria-hidden />
        </button>
      )}
    </label>
  );
}

export default PaymentMethodSwitchModal;
