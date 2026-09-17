import { color, f, radius, shadow, typography } from "@/app/styleTokens";

import { PLAN_EXAMPLES, type UsageExampleSnapshot } from "./pricingData";

const EMPTY = "—";

function StatBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 min-w-0">
      <span style={typography.caption}>{label}</span>
      <span
        className="truncate"
        style={{ ...f, fontWeight: 700, fontSize: 15, color: value === EMPTY ? "#c2c8d1" : color.text.primary, letterSpacing: "-0.3px" }}
      >
        {value}
      </span>
    </div>
  );
}

/**
 * 내 이용 현황 — 탭이 바뀌어도 화면 상단에 그대로 유지되는 요약 카드.
 *
 * `snapshot.planId` 가 null(=미구독/기본 상태)이면 월 제공분·추가 충전분·다음 지급일은
 * 전부 "—"로 가려지고, 총 사용 가능 크레딧만 `liveBalance`(실제 공유 잔액)를 그대로
 * 보여준다 — 지금은 잔액을 월 제공분/추가 충전분으로 나눌 근거가 없기 때문이다.
 * planId 가 있는(개발용 구독자 예시 상태) 경우에만 그 구분을 보여주며, 이때 총 잔액도
 * "월 제공 잔여 + 추가 충전 잔여"로 계산한 예시 값이다(실제 잔액과는 무관).
 */
export function UsageSummary({ liveBalance, snapshot }: { liveBalance: number; snapshot: UsageExampleSnapshot }) {
  const plan = PLAN_EXAMPLES.find((p) => p.id === snapshot.planId) ?? null;
  const hasBreakdown = snapshot.planId !== null;

  const totalBalance = hasBreakdown
    ? (snapshot.monthlyRemaining ?? 0) + (snapshot.topupRemaining ?? 0)
    : liveBalance;

  const monthlyUsedRatio =
    snapshot.monthlyGrant && snapshot.monthlyGrant > 0
      ? Math.min(1, Math.max(0, (snapshot.monthlyRemaining ?? 0) / snapshot.monthlyGrant))
      : null;

  return (
    <div
      className="bg-white border px-5 py-5 md:px-6 md:py-6 flex flex-col gap-4"
      style={{ borderColor: color.border.default, borderRadius: radius.cardEmphasis, boxShadow: shadow.cardEmphasis }}
    >
      {/* 현재 요금제 */}
      <div className="flex items-center gap-2">
        <span style={typography.caption}>현재 요금제</span>
        <span
          className="rounded-full px-2.5 py-0.5"
          style={{
            ...f, fontWeight: 700, fontSize: 12, letterSpacing: "-0.2px",
            color: plan ? color.brand : "#6b7280",
            background: plan ? color.surface.accent : "#f1f5f9",
          }}
        >
          {plan ? plan.name : "무료(미구독)"}
        </span>
      </div>

      {/* 총 사용 가능 크레딧 — 가장 강조 */}
      <div>
        <p style={typography.caption}>총 사용 가능 크레딧</p>
        <p
          className="truncate"
          style={{ ...f, fontWeight: 800, fontSize: 32, color: color.text.primary, letterSpacing: "-1.2px", lineHeight: 1.2, marginTop: 4 }}
        >
          {totalBalance.toLocaleString()}
          <span style={{ fontWeight: 500, fontSize: 15, color: color.text.faint, letterSpacing: "-0.2px" }}> 크레딧</span>
        </p>
      </div>

      {/* 월 제공분 사용량 막대 — 제공량(monthlyGrant)이 있을 때만, 추가 충전분은 계산에서 뺀다 */}
      {monthlyUsedRatio !== null && (
        <div className="flex flex-col gap-1.5">
          <div className="h-2 rounded-full overflow-hidden" style={{ background: "#f1f5f9" }}>
            <div
              className="h-full rounded-full"
              style={{ width: `${monthlyUsedRatio * 100}%`, background: color.brand, transition: "width 200ms ease" }}
            />
          </div>
          <span style={{ ...f, fontWeight: 500, fontSize: 11.5, color: color.text.secondary }}>
            월 제공 크레딧 {(snapshot.monthlyRemaining ?? 0).toLocaleString()} / {(snapshot.monthlyGrant ?? 0).toLocaleString()} 남음
          </span>
        </div>
      )}

      <div className="h-px bg-[#f1f5f9]" />

      {/* 보조 정보 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-3">
        <StatBlock
          label="월 제공 크레딧 잔여량"
          value={hasBreakdown ? `${(snapshot.monthlyRemaining ?? 0).toLocaleString()}` : EMPTY}
        />
        <StatBlock
          label="추가 충전 크레딧 잔여량"
          value={hasBreakdown ? `${(snapshot.topupRemaining ?? 0).toLocaleString()}` : EMPTY}
        />
        <StatBlock
          label="다음 크레딧 지급일"
          value={snapshot.nextBillingDateLabel ?? EMPTY}
        />
      </div>
    </div>
  );
}
