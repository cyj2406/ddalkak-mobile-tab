import { useState } from "react";

import { Button } from "@/app/components/common/Button";
import { Modal } from "@/app/components/common/Modal";
import { showToast } from "@/app/components/common/Toast";
import { color, f, typography } from "@/app/styleTokens";
import { cancelSubscriptionWithServer, scheduleCancel, type SubscriptionSnapshot } from "@/app/state/subscription";

/**
 * 구독 해지 확인 모달 — "구독 해지"를 눌러도 즉시 해지되지 않고 이 확인을 거친다.
 * 반복적인 해지 방어 화면(여러 데이터 포인트로 붙잡는 UI)을 만들지 않는다 — 제목·본문·
 * 이용 종료일 안내 한 줄·버튼 두 개가 전부다.
 *
 * 서버 확인(cancelSubscriptionWithServer, 지금은 mock) 후에만 scheduleCancel()로
 * 실제 해지 예약 상태를 반영한다 — 실패하면 기존 구독 상태를 그대로 두고 재시도할 수
 * 있다(모달이 닫히지 않고 에러 문구만 보인다).
 */
export function CancelSubscriptionDialog({
  subscription,
  onClose,
  onCancelled,
}: {
  subscription: SubscriptionSnapshot;
  onClose: () => void;
  onCancelled: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCancel = () => {
    if (loading) return;
    setLoading(true);
    setError(null);
    cancelSubscriptionWithServer().then(({ success }) => {
      setLoading(false);
      if (!success) {
        setError("구독을 해지하지 못했습니다. 다시 시도해주세요.");
        return;
      }
      scheduleCancel();
      showToast("구독 해지가 예약되었습니다");
      onCancelled();
    });
  };

  return (
    <Modal onClose={onClose} ariaLabel="구독을 해지하시겠어요?" maxWidth={400}>
      {(close) => (
        <>
          <div className="px-6 pt-6 pb-1">
            <p style={{ ...f, fontWeight: 700, fontSize: 18, color: color.text.primary, letterSpacing: "-0.5px" }}>
              구독을 해지하시겠어요?
            </p>
          </div>
          <div className="px-6 pt-2">
            <p style={{ ...f, fontWeight: 400, fontSize: 13.5, color: color.text.secondary, lineHeight: 1.6 }}>
              해지하면 다음 정기결제가 진행되지 않습니다.
            </p>
          </div>

          <div className="mx-6 mt-4 px-4 py-3.5 flex flex-col gap-2" style={{ background: color.surface.subtle, borderRadius: 12 }}>
            <p style={{ ...typography.caption, color: color.text.secondary, lineHeight: 1.6 }}>
              현재 플랜은 <span style={{ fontWeight: 700, color: color.text.primary }}>{subscription.nextBillingDateLabel ?? "—"}</span>까지 이용할 수 있습니다.
            </p>
            <p style={{ ...typography.caption, color: color.text.secondary, lineHeight: 1.6 }}>
              해지 신청만으로 이미 지급된 구독 크레딧을 즉시 회수하지 않으며, 정책에 따라 처리됩니다.
            </p>
          </div>

          {error && (
            <div className="mx-6 mt-3 px-3.5 py-2.5" style={{ background: "#fef2f2", border: "1px solid rgba(239,68,68,0.28)", borderRadius: 10 }}>
              <p style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#ef4444" }}>{error}</p>
            </div>
          )}

          <div className="flex gap-2.5 px-6 pt-5 pb-6">
            <Button variant="secondary" size="lg" fullWidth onClick={close} disabled={loading}>구독 유지</Button>
            <Button variant="secondary" size="lg" fullWidth loading={loading} onClick={handleCancel} style={{ color: "#ef4444" }}>
              구독 해지
            </Button>
          </div>
        </>
      )}
    </Modal>
  );
}
