import { Button } from "@/app/components/common/Button";
import { color, f, radius, shadow, typography } from "@/app/styleTokens";
import type { SubscriptionSnapshot } from "@/app/state/subscription";

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
 * 설정 > 크레딧·사용 내역 상단 잔액 카드 — "지금 쓸 수 있는 크레딧이 얼마인지"만
 * 답한다. 현재 플랜 카드·구독 상태·구독 관리 링크는 여기 없다(설정 > 구독·결제로
 * 이동). "구독 크레딧"/"추가 충전 크레딧" 명칭을 다른 화면과 통일해서 쓴다.
 *
 * 총잔액(liveBalance)은 항상 실제 서버 정의 값 그대로 쓰고, 세부 잔액은 subscription
 * 스토어가 그 구분을 실제로 시작한 적이 있을 때만(topupCreditsRemaining !== null)
 * 보여준다 — 근거 없이 0으로 나누지 않는다. "구독 크레딧 만료일"은 서버가 내려주는
 * 값(예: expiresAt)이 있어야 정확히 표시할 수 있는데 지금 스토어에는 그 필드가
 * 없다 — 다음 결제일로 임의 대체하지 않고 정직하게 "—"(미정)로 남겨 둔다.
 */
export function CreditBalanceCard({
  liveBalance,
  subscription,
  onTopUp,
}: {
  liveBalance: number;
  subscription: SubscriptionSnapshot;
  onTopUp: () => void;
}) {
  const hasBreakdown = subscription.topupCreditsRemaining !== null;

  return (
    <div
      className="bg-white border px-5 py-5 md:px-6 md:py-6 flex flex-col gap-4"
      style={{ borderColor: color.border.default, borderRadius: radius.cardEmphasis, boxShadow: shadow.cardEmphasis }}
    >
      {/* 상단 — 왼쪽 총잔액, 오른쪽 충전 버튼. 단위(" 크레딧")는 작게 붙여 총액 숫자만
          강조 스타일을 쓰게 한다. */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p style={typography.caption}>사용 가능 크레딧</p>
          <p
            className="truncate"
            style={{ ...f, fontWeight: 800, fontSize: 32, color: color.text.primary, letterSpacing: "-1.2px", lineHeight: 1.2, marginTop: 4 }}
          >
            {liveBalance.toLocaleString()}
            <span style={{ fontWeight: 500, fontSize: 15, color: color.text.secondary, letterSpacing: "-0.2px" }}> 크레딧</span>
          </p>
        </div>
        <Button variant="primary" size="md" onClick={onTopUp} className="shrink-0">크레딧 충전</Button>
      </div>

      <div className="h-px bg-[#f1f5f9]" />

      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        <StatBlock
          label="구독 크레딧 잔액"
          value={hasBreakdown && subscription.monthlyCreditsGranted !== null ? (subscription.monthlyCreditsRemaining ?? 0).toLocaleString() : EMPTY}
        />
        <StatBlock label="구독 크레딧 만료일" value={EMPTY} />
        <StatBlock
          label="추가 충전 크레딧 잔액"
          value={hasBreakdown ? (subscription.topupCreditsRemaining ?? 0).toLocaleString() : EMPTY}
        />
        <StatBlock label="이번 달 사용" value={`${CREDIT_MONTHLY_USED_EXAMPLE.toLocaleString()}`} />
      </div>

      {/* 구독분/충전분의 만료 정책 차이를 짧게만 설명한다 — 정확한 소멸 시점(달력
          월말 기준인지 결제 주기 종료 기준인지)은 아직 확정 전이라 여기서 단정하지 않는다. */}
      <p style={{ ...f, fontWeight: 500, fontSize: 11.5, color: color.text.muted, lineHeight: 1.6 }}>
        구독 크레딧은 결제 주기마다 소멸되며 이월되지 않을 예정입니다. 추가 충전 크레딧은 이 소멸 대상이 아닙니다. 정확한 소멸 시점은 확정 후 표시됩니다.
      </p>
    </div>
  );
}

/**
 * [예시] 이번 달 사용량 — 실제 집계 로직이 아직 없는 고정 예시 값. 화면마다 다른
 * 숫자가 보이지 않게 한 곳(이 카드)에서만 관리한다.
 */
export const CREDIT_MONTHLY_USED_EXAMPLE = 2480;

export default CreditBalanceCard;
