import { useEffect, useState } from "react";
import { CreditCard, Plus } from "lucide-react";

import { Badge } from "@/app/components/common/Badge";
import { Button } from "@/app/components/common/Button";
import { Modal } from "@/app/components/common/Modal";
import { showToast } from "@/app/components/common/Toast";
import { color, f, motion, typography } from "@/app/styleTokens";
import {
  fetchPaymentMethods, registerCardWithTossPayments, addPaymentMethod, switchDefaultPaymentMethod,
  commitDefaultPaymentMethod, type PaymentMethod,
} from "@/app/state/subscription";

/**
 * 결제 수단 변경 모달 — 카드사를 먼저 고르게 하지 않는다. 이미 Toss Payments로 등록된
 * 결제수단 목록에서 다음 정기결제에 쓸 카드를 라디오로 고르거나("결제수단 변경"),
 * 그 목록 자체를 늘리려면 "+ 새 카드 등록"으로 Toss 등록/인증을 새로 거친다("새 카드
 * 등록"). 두 동작은 분리돼 있다 — 새로 등록한 카드는 목록에 더해지고 이 모달 안에서
 * 선택 상태가 될 뿐, "선택한 카드로 변경"을 눌러야만 실제 기본 결제수단이 바뀐다.
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
    <Modal onClose={onClose} ariaLabel="결제 수단 변경" maxWidth={440}>
      {(close) => (
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
                    isCurrentDefault={m.paymentMethodId === currentDefaultId}
                    onSelect={() => setSelectedId(m.paymentMethodId)}
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
  method, selected, isCurrentDefault, onSelect,
}: {
  method: PaymentMethod;
  selected: boolean;
  isCurrentDefault: boolean;
  onSelect: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <label
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // has-[:focus-visible] — 클릭으로 라디오를 선택해도 브라우저가 그 input에 포커스를
      // 주기 때문에(마우스 클릭 포함) focus-within을 쓰면 선택 시마다 테두리(선택 표시) +
      // 링(포커스 표시)이 겹쳐 "두 줄"로 보였다. 키보드 포커스(focus-visible)일 때만 링을
      // 보여줘 선택 표시와 분리한다.
      className="flex items-center gap-3 rounded-[14px] cursor-pointer has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-offset-1 has-[:focus-visible]:ring-[#4f7bff]"
      style={{
        padding: "13px 14px",
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
      <span className="flex-1 min-w-0 flex items-center gap-2 flex-wrap">
        <span style={{ ...f, fontWeight: 600, fontSize: 14, color: color.text.primary }}>
          {method.brand} <span style={{ fontWeight: 500, color: color.text.secondary }}>•••• {method.last4}</span>
        </span>
        {/* "현재 결제 수단"은 선택 여부와 다른 개념이라(라디오 선택은 border/배경으로 이미
            표시된다) brand 배지 대신 눈에 덜 띄는 neutral 배지로 낮춰서 새로 고른 카드와
            혼동되지 않게 한다. */}
        {isCurrentDefault && <Badge tone="neutral">현재 결제 수단</Badge>}
      </span>
    </label>
  );
}

export default PaymentMethodSwitchModal;
