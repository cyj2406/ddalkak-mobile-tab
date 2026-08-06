/**
 * 모든 항목을 채운 뒤의 완료 화면.
 * 부모 폭 100%를 채우며 자체 max-width를 두지 않는다.
 */
export interface CompletionPanelProps {
  /** 서식 이름. 안내 문구에 들어간다. */
  formTitle: string;
  /** 반영된 항목 수 */
  filled: number;
  onReview: () => void;
  onDownload: () => void;
}

export default function CompletionPanel({ formTitle, filled, onReview, onDownload }: CompletionPanelProps) {
  return (
    <section
      style={{
        width: "100%",
        boxSizing: "border-box",
        background: "var(--ff-card)",
        border: "1px solid var(--ff-border)",
        borderRadius: "var(--ff-radius-card)",
        boxShadow: "var(--ff-shadow-card)",
        padding: "44px 24px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 26,
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: 72,
          height: 72,
          borderRadius: "50%",
          background: "var(--ff-success-bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="var(--ff-success-strong)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13 l4 4 L19 7" />
        </svg>
      </div>

      <div>
        <div style={{ fontSize: 23, fontWeight: 800, color: "var(--ff-text)", letterSpacing: "-0.2px" }}>
          모든 항목을 채웠어요!
        </div>
        <div style={{ fontSize: 14, color: "var(--ff-text-3)", marginTop: 10, lineHeight: 1.75 }}>
          {formTitle} {filled}개 항목이<br />
          전부 반영됐어요. 서식에서 확인해 보세요.
        </div>
      </div>

      <div style={{ width: "100%", display: "flex", gap: 12 }}>
        <button
          type="button"
          onClick={onReview}
          style={{
            flex: 1,
            height: 54,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            fontFamily: "inherit",
            fontSize: 14,
            fontWeight: 700,
            color: "var(--ff-text-2)",
            background: "var(--ff-sub-2)",
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
          }}
        >
          ↺ 답변 다시 확인
        </button>
        <button
          type="button"
          onClick={onDownload}
          style={{
            flex: 1.4,
            height: 54,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            fontFamily: "inherit",
            fontSize: 14.5,
            fontWeight: 700,
            color: "#fff",
            background: "var(--ff-brand)",
            border: "none",
            borderRadius: 12,
            cursor: "pointer",
          }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4 v11 M8 11.5 l4 4 l4 -4" />
            <path d="M5 20 h14" />
          </svg>
          PDF 다운로드
        </button>
      </div>
    </section>
  );
}
