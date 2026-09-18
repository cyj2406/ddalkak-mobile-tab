import { SubscriptionBillingTab } from "@/app/components/pricing/SubscriptionBillingTab";
import { color, f } from "@/app/styleTokens";

function SectionHead({ title, desc }: { title: string; desc?: string }) {
  return (
    <div>
      <p style={{ ...f, fontWeight: 700, fontSize: 16, color: color.text.primary, letterSpacing: "-0.4px" }}>{title}</p>
      {desc && <p style={{ ...f, fontWeight: 400, fontSize: 13, color: color.text.muted, letterSpacing: "-0.2px", lineHeight: 1.6, marginTop: 6 }}>{desc}</p>}
    </div>
  );
}

/**
 * 설정 > 구독·결제 — 예전 별도 화면("구독 및 결제 관리")이 하던 일(현재 구독, 결제
 * 수단, 결제 내역, 구독 해지)을 그대로 이어받는다. 실제 내용·상태·결제 로직은
 * SubscriptionBillingTab에 있고 여기서는 설정 탭 제목만 얹는다 — 같은 내용을
 * 보여주는 화면을 두 곳에 두지 않는다.
 */
export function SettingsBillingTab({ onChangePlan }: { onChangePlan: () => void }) {
  return (
    <div className="flex flex-col gap-5">
      <SectionHead title="구독 및 결제" desc="현재 이용 중인 플랜과 결제 정보를 관리할 수 있습니다." />
      <SubscriptionBillingTab onChangePlan={onChangePlan} />
    </div>
  );
}

export default SettingsBillingTab;
