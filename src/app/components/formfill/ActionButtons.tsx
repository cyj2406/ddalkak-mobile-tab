import type { CSSProperties } from "react";

/**
 * 이전 / 건너뛰기 / 다음.
 * 부모 폭 100%를 채우며 세 버튼이 폭을 나눠 갖는다 (다음 버튼만 1.3배).
 */
export interface ActionButtonsProps {
  onPrev: () => void;
  onSkip: () => void;
  onNext: () => void;
  /** 첫 빈칸이면 "이전"을 흐리게 */
  prevDisabled?: boolean;
  /** 다음으로 넘어갈 수 없는 상태 (예: 필수인데 아직 안 채움) */
  nextDisabled?: boolean;
  /** 마지막 빈칸에서는 "완료"처럼 바꿔 쓸 수 있다 */
  nextLabel?: string;
}

export default function ActionButtons({
  onPrev,
  onSkip,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
  nextLabel = "다음",
}: ActionButtonsProps) {
  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        display: "flex",
        alignItems: "center",
        gap: 6,
        background: "var(--ff-sub)",
        border: "1px solid var(--ff-border)",
        borderRadius: 11,
        padding: 6,
      }}
    >
      <button type="button" onClick={onPrev} disabled={prevDisabled} style={{ ...ghost, flex: 1, opacity: prevDisabled ? 0.4 : 1 }}>
        ← 이전
      </button>
      <button type="button" onClick={onSkip} style={{ ...ghost, flex: 1, color: "var(--ff-text-3)" }}>
        건너뛰기
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        style={{
          flex: 1.3,
          height: 34,
          fontFamily: "inherit",
          fontSize: 12.5,
          fontWeight: 700,
          color: "#fff",
          background: "var(--ff-brand)",
          border: "1px solid var(--ff-brand)",
          borderRadius: 8,
          cursor: nextDisabled ? "default" : "pointer",
          opacity: nextDisabled ? 0.45 : 1,
          whiteSpace: "nowrap",
        }}
      >
        {nextLabel}
      </button>
    </div>
  );
}

const ghost: CSSProperties = {
  height: 34,
  fontFamily: "inherit",
  fontSize: 12.5,
  fontWeight: 600,
  color: "var(--ff-text-2)",
  background: "var(--ff-panel)",
  border: "1px solid var(--ff-border)",
  borderRadius: 8,
  cursor: "pointer",
  whiteSpace: "nowrap",
};
