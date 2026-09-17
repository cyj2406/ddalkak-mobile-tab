import { Check } from "lucide-react";

import { Button } from "@/app/components/common/Button";
import { color, f, radius, shadow, typography } from "@/app/styleTokens";

import { PLAN_EXAMPLES, PRICING_EXAMPLE_NOTICE, type PlanExample } from "./pricingData";

export function SubscriptionTab({
  currentPlanId,
  onSelectPlan,
}: {
  currentPlanId: string | null;
  onSelectPlan: (plan: PlanExample) => void;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p style={typography.body}>매월 제공되는 크레딧으로 꾸준히 작업하세요.</p>
        {/* 별도 박스로 두면 안내문·플랜 카드 사이에 카드가 하나 더 끼는 것처럼 보여서,
            옅은 본문 텍스트 한 줄로만 표시한다(카드 중첩 최소화). */}
        <p style={{ ...typography.caption, marginTop: 4 }}>{PRICING_EXAMPLE_NOTICE}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PLAN_EXAMPLES.map((plan) => {
          const isCurrent = currentPlanId === plan.id;
          const label = isCurrent ? "현재 이용 중" : currentPlanId === null ? "구독하기" : "요금제 변경";
          return (
            <div
              key={plan.id}
              className="flex flex-col gap-4 bg-white p-5"
              style={{
                border: `${isCurrent ? 1.5 : 1}px solid ${isCurrent ? color.border.focus : color.border.default}`,
                borderRadius: radius.card,
                boxShadow: shadow.card,
              }}
            >
              <div>
                <p style={typography.sectionTitle}>{plan.name}</p>
                <p style={{ ...f, fontWeight: 800, fontSize: 26, color: color.text.primary, letterSpacing: "-0.8px", marginTop: 6 }}>
                  {plan.priceLabel}
                  <span style={{ fontWeight: 500, fontSize: 13, color: color.text.faint }}> / 월</span>
                </p>
                <p style={{ ...f, fontWeight: 600, fontSize: 13, color: color.brand, marginTop: 4 }}>
                  매월 {plan.monthlyCredits.toLocaleString()} 크레딧 제공
                </p>
              </div>

              <div className="h-px bg-[#f1f5f9]" />

              <ul className="flex flex-col gap-2">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Check size={15} strokeWidth={1.8} color={color.brand} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ ...f, fontWeight: 500, fontSize: 13, color: "#334155", letterSpacing: "-0.2px" }}>{perk}</span>
                  </li>
                ))}
              </ul>

              <Button variant="primary" size="lg" fullWidth disabled={isCurrent} onClick={() => onSelectPlan(plan)} className="mt-auto">
                {label}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
