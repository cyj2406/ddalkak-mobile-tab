import { useState } from "react";

import { color, f, pageContainerWidth, typography } from "@/app/styleTokens";
import { Tabs, tabPanelProps, type TabItem } from "@/app/components/common/Tabs";
import { useCreditBalance } from "@/app/state/creditBalance";

import { UsageSummary } from "./UsageSummary";
import { SubscriptionTab } from "./SubscriptionTab";
import { TopUpTab } from "./TopUpTab";
import { PurchaseConfirmDialog } from "./PurchaseConfirmDialog";
import {
  USAGE_EXAMPLE_SNAPSHOTS, USAGE_EXAMPLE_LABELS, type UsageExampleState,
  type PurchaseIntent, type PlanExample, type CreditPackage,
} from "./pricingData";

export type PricingTab = "subscription" | "topup";

const TABS: TabItem[] = [
  { value: "subscription", label: "월 구독 요금제" },
  { value: "topup", label: "추가 크레딧 충전" },
];

/**
 * 구독자 예시 상태 스위처 노출 조건 — TabletMiniEditor.tsx 의 DEV_PANEL 과 달리
 * `import.meta.env.DEV` 를 함께 걸어 둔다. 그쪽은 배포된 미리보기 링크에서도
 * ?devpanel=1 로 확인해야 해서 의도적으로 프로덕션 번들에 남겨 두지만, 여기는
 * 프로덕션 빌드에서는 ?devpanel=1 을 붙여도 절대 나타나면 안 된다는 요구가 있어
 * 빌드 시점 조건을 반드시 함께 건다 — `vite build` 결과물에서는 import.meta.env.DEV
 * 가 false 로 정적 치환되어 이 스위처 코드 자체가 트리셰이킹으로 빠진다.
 */
const DEV_PANEL = import.meta.env.DEV
  && typeof window !== "undefined"
  && new URLSearchParams(window.location.search).get("devpanel") === "1";

function UsageExampleDevPanel({ state, onChange }: { state: UsageExampleState; onChange: (s: UsageExampleState) => void }) {
  const states = Object.keys(USAGE_EXAMPLE_LABELS) as UsageExampleState[];
  return (
    <div className="rounded-[12px] px-3.5 py-3 flex flex-col gap-2" style={{ background: "#fffbeb", border: "1px solid #fde68a" }}>
      <span style={{ ...f, fontWeight: 700, fontSize: 11.5, color: "#92400e" }}>
        [개발용] 이용 현황 예시 상태 — ?devpanel=1 일 때만 보임
      </span>
      <div className="flex flex-wrap gap-1.5">
        {states.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onChange(s)}
            className="rounded-full px-3 py-1"
            style={{
              ...f, fontWeight: 600, fontSize: 11.5,
              border: `1px solid ${state === s ? color.brand : color.border.default}`,
              background: state === s ? color.surface.accent : "white",
              color: state === s ? color.brand : "#6b7280",
            }}
          >
            {USAGE_EXAMPLE_LABELS[s]}
          </button>
        ))}
      </div>
    </div>
  );
}

export function PricingPage({
  initialTab = "subscription",
  onHistoryClick,
}: {
  initialTab?: PricingTab;
  onHistoryClick: () => void;
}) {
  const [tab, setTab] = useState<PricingTab>(initialTab);
  const [confirmIntent, setConfirmIntent] = useState<PurchaseIntent | null>(null);
  // 개발용 구독자 예시 상태 — 기본값은 항상 "미구독"(=실제 공유 잔액을 그대로 보여주는 상태).
  const [usageExampleState, setUsageExampleState] = useState<UsageExampleState>("unsubscribed");

  const [liveBalance] = useCreditBalance();
  const snapshot = USAGE_EXAMPLE_SNAPSHOTS[usageExampleState];

  const handleSelectPlan = (plan: PlanExample) => {
    if (snapshot.planId === plan.id) return;
    setConfirmIntent({ kind: "subscription", title: plan.name, credits: plan.monthlyCredits, priceLabel: plan.priceLabel, periodLabel: "매월" });
  };

  const handleConfirmTopUp = (pkg: CreditPackage) => {
    setConfirmIntent({ kind: "topup", title: `${pkg.amount.toLocaleString()} 크레딧 패키지`, credits: pkg.amount, priceLabel: pkg.price });
  };

  return (
    <main className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      {/* 컨테이너 폭 — 홈 화면이 데스크톱(1200px 이상)에서 쓰는 --home-container 상한과
          같은 값(pageContainerWidth)을 쓴다. 760px 고정이던 첫 버전은 1440px 화면에서
          카드 3개가 좁게 눌리고 오른쪽에 빈 공간만 넓게 남았다. */}
      <div
        className="w-full mx-auto px-4 md:px-6 pt-5 pb-12 flex flex-col gap-6"
        style={{ maxWidth: pageContainerWidth }}
      >
        {/* ① 제목 */}
        <div>
          <h1 style={typography.pageTitle}>요금제 및 크레딧</h1>
          <p style={{ ...f, fontWeight: 400, fontSize: 13.5, color: color.text.faint, marginTop: 4 }}>
            내 요금제와 크레딧을 한곳에서 관리하세요.
          </p>
        </div>

        {/* ② 내 이용 현황 — 탭이 바뀌어도 유지 */}
        <UsageSummary liveBalance={liveBalance} snapshot={snapshot} />

        {/* ③ 탭 */}
        <Tabs items={TABS} value={tab} onChange={(v) => setTab(v as PricingTab)} />

        {/* ④ 탭 콘텐츠 — tabPanelProps 가 role="tabpanel"/id/aria-labelledby 를 탭 버튼과 맞물린다. */}
        <div {...tabPanelProps(tab)}>
          {tab === "subscription" ? (
            <SubscriptionTab currentPlanId={snapshot.planId} onSelectPlan={handleSelectPlan} />
          ) : (
            <TopUpTab onConfirmPurchase={handleConfirmTopUp} />
          )}
        </div>

        {/* ⑤ 크레딧 사용 내역 링크 */}
        <button
          type="button"
          onClick={onHistoryClick}
          className="self-start"
          style={{ ...f, fontWeight: 600, fontSize: 13, color: color.brand, letterSpacing: "-0.2px" }}
        >
          크레딧 사용 내역 보기 →
        </button>

        {DEV_PANEL && <UsageExampleDevPanel state={usageExampleState} onChange={setUsageExampleState} />}
      </div>

      {confirmIntent && (
        <PurchaseConfirmDialog intent={confirmIntent} onClose={() => setConfirmIntent(null)} />
      )}
    </main>
  );
}
