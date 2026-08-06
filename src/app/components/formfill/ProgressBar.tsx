/**
 * 진행률 바 + "N / M" + 채운 개수.
 * 부모 폭을 100% 채우며 자체 max-width를 두지 않는다.
 */
export interface ProgressBarProps {
  /** 현재 위치 (1-based) */
  position: number;
  /** 전체 빈칸 수 */
  total: number;
  /** 채운 빈칸 수 */
  filled: number;
  /** 0~100. 생략하면 filled/total 로 계산한다. */
  percent?: number;
  /** 좌측 라벨. 기본 "빈칸 채우기" */
  label?: string;
}

export default function ProgressBar({
  position,
  total,
  filled,
  percent,
  label = "빈칸 채우기",
}: ProgressBarProps) {
  const pct = percent ?? (total === 0 ? 0 : Math.round((filled / total) * 100));

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: "var(--ff-text)" }}>{label}</span>
        <span style={{ marginLeft: "auto", fontSize: 13, fontWeight: 700, color: "var(--ff-brand)" }}>
          {position} / {total}
        </span>
        <span style={{ fontSize: 12, color: "var(--ff-text-3)" }}>채움 {filled}</span>
      </div>

      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label={`${total}개 중 ${filled}개 채움`}
        style={{
          width: "100%",
          height: 6,
          background: "var(--ff-border)",
          borderRadius: 4,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: "var(--ff-brand)",
            borderRadius: 4,
            transition: "width 0.4s ease",
          }}
        />
      </div>
    </div>
  );
}
