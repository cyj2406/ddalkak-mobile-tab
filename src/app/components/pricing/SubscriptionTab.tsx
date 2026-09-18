import { Check } from "lucide-react";

import { Badge } from "@/app/components/common/Badge";
import { Button } from "@/app/components/common/Button";
import { color, f, motion, radius, typography } from "@/app/styleTokens";

import { PLAN_EXAMPLES, type PlanExample } from "./pricingData";

export function SubscriptionTab({
  currentPlanId,
  onSelectPlan,
}: {
  currentPlanId: string | null;
  onSelectPlan: (plan: PlanExample) => void;
}) {
  return (
    <div>
      {/* 4장을 한 줄로 — 이전엔 wide(1200px)부터 4열이라 일반적인 데스크톱 창(1024~1199px)
          에서 2×2로 먼저 떨어졌다. lg(1024px)부터 4열로 올려 "충분히 넓은 데스크톱인데
          2×2"인 상태가 안 생기게 한다. 태블릿(sm~lg, 640~1023px)은 2열, 그 아래는 1열 —
          순서(라이트→스탠다드→프로→맥스)는 항상 DOM 순서 그대로라 반응형과 무관하다.
          grid를 쓰면(flex-wrap이 아니라) 같은 행의 카드 높이가 자동으로 맞춰진다. 그 안에서
          이름/설명/가격/버튼/구분선/목록이 카드마다 같은 기준선에 오도록, 설명 영역에 2줄
          높이를 미리 확보해 둔다(빈 줄을 추가하거나 텍스트를 자르지 않고, 순수 레이아웃
          여백만 예약). */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PLAN_EXAMPLES.map((plan) => {
          const isCurrent = currentPlanId === plan.id;
          const label = isCurrent ? "현재 이용 중" : currentPlanId === null ? `${plan.name} 선택` : "요금제 변경";
          // 카드 배경은 항상 흰색 — "추천"도 "현재 이용 중"도 카드 전체를 색으로 채우지
          // 않는다. 추천은 브랜드 테두리 + 작은 배지로만, 현재 이용 중은 CTA 버튼이
          // disabled 스타일(Button.tsx가 이미 neutral gray로 처리)로만 구분한다 — 두
          // 신호가 겹쳐도(추천이면서 현재 이용 중) 카드 자체가 파랗게 칠해지지 않는다.
          const creditText = plan.monthlyCredits === null ? "원가 검토 후 확정" : `${plan.monthlyCredits.toLocaleString()} 크레딧`;
          return (
            <div
              key={plan.id}
              className="flex flex-col p-5"
              style={{
                background: "white",
                border: `${plan.recommended ? 1.5 : 1}px solid ${plan.recommended ? color.border.focus : color.border.default}`,
                borderRadius: radius.card,
                transition: `border-color ${motion.normal}`,
              }}
            >
              <div className="flex items-center gap-2">
                <p style={typography.sectionTitle}>{plan.name}</p>
                {plan.recommended && <Badge tone="brand">추천</Badge>}
              </div>

              {/* 가격을 카드에서 가장 먼저 읽히는 핵심 정보로 — 숫자는 크고 진하게,
                  "/ 월"은 작고 보조색으로 숫자 옆에 자연스러운 baseline으로 붙인다
                  (같은 줄, inline span이라 baseline이 자동으로 맞는다). "부가세 포함
                  가정"은 그보다 확실히 낮은 위계(캡션 톤)로 붙인다. */}
              <p className="mt-2.5" style={{ ...f, fontWeight: 800, fontSize: 24, color: color.text.primary, letterSpacing: "-0.7px", lineHeight: 1.2 }}>
                {plan.priceLabel}
                <span style={{ fontWeight: 500, fontSize: 13, color: color.text.secondary, letterSpacing: "-0.2px" }}> / 월</span>
              </p>
              <p className="mt-1" style={typography.caption}>부가세 포함 가정</p>

              {/* 설명 — 1줄/2줄로 길이가 달라져도 그 아래(기능 목록·CTA·구분선·크레딧)
                  기준선이 카드마다 어긋나지 않도록 2줄 높이를 미리 예약해 둔다(빈 줄
                  추가나 텍스트 자르기 없이 순수 레이아웃 여백만). */}
              <p className="mt-4" style={{ ...typography.caption, minHeight: 12 * 1.5 * 2, lineHeight: 1.5 }}>{plan.description}</p>

              {/* 기능 목록 — 전부 같은 굵기(500)로 통일한다. 체크 아이콘만 brand 색으로
                  두고 텍스트를 과도하게 강조하지 않는다. */}
              <ul className="flex flex-col gap-2.5 mt-4">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Check size={15} strokeWidth={1.8} color={color.brand} style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ ...f, fontWeight: 500, fontSize: 13, color: "#334155", letterSpacing: "-0.2px" }}>{perk}</span>
                  </li>
                ))}
              </ul>

              {/* 세로형 카드에서는 카드 전체 너비를 꽉 채우는 lg 버튼이 다소 무겁다 —
                  높이만 44(md)로 줄이고, 너비(fullWidth)·문구·브랜드 primary 스타일·
                  클릭 동작은 그대로 유지한다. */}
              <Button variant="primary" size="md" fullWidth disabled={isCurrent} onClick={() => onSelectPlan(plan)} className="mt-6">
                {label}
              </Button>

              <div className="h-px bg-[#f1f5f9] mt-6" />

              {/* 월 제공 크레딧 — 기능 목록의 정성적 문구와 다른 "요금제의 정량 정보"라
                  bullet 안에 섞지 않고 구분선 아래 전용 자리를 둔다. plan.monthlyCredits
                  필드를 그대로 기준 삼아서, 실제 값이 정해지면 이 UI를 건드리지 않고도
                  숫자만 자동으로 반영된다 — "원가 검토 후 확정"을 화면에 직접 박아두지
                  않는다. 값이 아직 없다는 이유로 가격만큼 강조하지 않되(secondary 톤),
                  읽기 어려울 만큼 흐리게 두지도 않는다. */}
              <div className="mt-4">
                <p style={{ ...f, fontWeight: 600, fontSize: 12.5, color: color.text.secondary, letterSpacing: "-0.2px" }}>월 제공 크레딧</p>
                <p className="mt-1" style={{ ...f, fontWeight: 500, fontSize: 13, color: color.text.secondary, letterSpacing: "-0.2px" }}>{creditText}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
