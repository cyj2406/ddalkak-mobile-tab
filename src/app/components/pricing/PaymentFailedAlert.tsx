import { AlertCircle } from "lucide-react";

import { Button } from "@/app/components/common/Button";
import { color, f } from "@/app/styleTokens";
import { findPlan, type SubscriptionSnapshot } from "@/app/state/subscription";

/**
 * 정기결제 실패 알림 — 설정 크레딧 탭과 구독 및 결제 관리 화면 양쪽에서 쓴다.
 * "결제 문제를 우선적으로 안내"해야 해서 그 화면의 다른 정보보다 먼저(맨 위) 둔다.
 */
export function PaymentFailedAlert({ subscription, onFixPayment }: { subscription: SubscriptionSnapshot; onFixPayment: () => void }) {
  const plan = findPlan(subscription.planId);
  return (
    <div className="flex flex-col gap-3 px-4 py-4" style={{ background: "#fef2f2", border: "1px solid rgba(239,68,68,0.28)", borderRadius: 14 }}>
      <div className="flex items-start gap-2.5">
        <AlertCircle size={18} strokeWidth={1.8} color="#ef4444" style={{ flexShrink: 0, marginTop: 1 }} />
        <div className="min-w-0">
          <p style={{ ...f, fontWeight: 700, fontSize: 14.5, color: color.text.primary, letterSpacing: "-0.3px" }}>결제를 완료하지 못했어요</p>
          <p style={{ ...f, fontWeight: 500, fontSize: 12.5, color: color.text.secondary, marginTop: 2 }}>등록된 결제 수단을 확인해주세요.</p>
          {plan && (
            <p style={{ ...f, fontWeight: 600, fontSize: 12.5, color: color.text.secondary, marginTop: 6 }}>
              {plan.name} · {plan.priceLabel} <span style={{ color: "#ef4444", fontWeight: 700 }}>결제 실패</span>
            </p>
          )}
        </div>
      </div>
      <Button variant="dark" size="md" onClick={onFixPayment}>결제 수단 변경</Button>
    </div>
  );
}
