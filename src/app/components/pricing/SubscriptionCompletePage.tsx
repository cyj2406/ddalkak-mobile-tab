import { Button } from "@/app/components/common/Button";
import { color, f, radius, shadow, typography } from "@/app/styleTokens";
import { findPlan, useSubscription } from "@/app/state/subscription";

/**
 * 구독 직후 완료 화면 — 결제(mock)가 확정된 그 순간 바로 보여주는 화면이다.
 * "구독이 시작되었어요"만 말하고 세부 관리(결제 수단, 해지 등)는 다루지 않는다 —
 * 그건 보조 버튼("구독 정보 확인")을 눌러 구독 및 결제 관리 화면으로 넘어가서 본다.
 */
export function SubscriptionCompletePage({
  isPlanChange,
  onStart,
  onViewDetails,
}: {
  /** 미구독 상태에서 새로 시작한 것이 아니라, 이미 구독 중이던 플랜을 바꾼 것이면 true —
   *  "시작되었어요"와 "변경되었어요"는 사용자에게 다른 의미라 같은 문구로 두지 않는다. */
  isPlanChange?: boolean;
  onStart: () => void;
  onViewDetails: () => void;
}) {
  const subscription = useSubscription();
  const plan = findPlan(subscription.planId);
  if (!plan) return null;

  return (
    <main className="flex-1 overflow-y-auto flex items-center justify-center" style={{ scrollbarWidth: "none" }}>
      <div
        className="w-full mx-4 flex flex-col gap-5 bg-white p-6"
        style={{ maxWidth: 420, border: `1px solid ${color.border.default}`, borderRadius: radius.cardEmphasis, boxShadow: shadow.cardEmphasis }}
      >
        <div>
          <h1 style={typography.pageTitle}>{isPlanChange ? "요금제가 변경되었어요" : "구독이 시작되었어요"}</h1>
          <p style={{ ...f, fontWeight: 400, fontSize: 13.5, color: color.text.secondary, marginTop: 6, lineHeight: 1.6 }}>
            {isPlanChange ? `${plan.name} 플랜으로 변경되었습니다.` : `${plan.name} 플랜을 이용할 수 있습니다.`}
          </p>
        </div>

        <div className="flex flex-col gap-2.5 px-4 py-4" style={{ background: color.surface.subtle, borderRadius: 12 }}>
          <Row label="현재 플랜" value={plan.name} />
          <Row label="결제 금액" value={`월 ${plan.priceLabel}`} />
          <Row label="다음 결제일" value={subscription.nextBillingDateLabel ?? "—"} />
          <Row label="지급 크레딧" value={plan.monthlyCredits !== null ? `+${plan.monthlyCredits.toLocaleString()}` : "원가 검토 후 확정"} />
        </div>

        <div className="flex flex-col gap-2.5">
          <Button variant="primary" size="lg" fullWidth onClick={onStart}>딸깍넷 시작하기</Button>
          <Button variant="secondary" size="lg" fullWidth onClick={onViewDetails}>구독 정보 확인</Button>
        </div>
      </div>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span style={typography.caption}>{label}</span>
      <span style={{ ...f, fontWeight: 700, fontSize: 14, color: color.text.primary, letterSpacing: "-0.2px" }}>{value}</span>
    </div>
  );
}
