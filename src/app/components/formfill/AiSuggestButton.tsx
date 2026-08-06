import { useState } from "react";

/**
 * AI 자동작성 — 접힘/펼침.
 *
 * 접힘: "AI 자동작성" 칩 하나
 * 펼침: 자유 서술 입력 + 생성 버튼
 * 생성 후: 결과 카드 + [이대로 쓰기] [다시 생성]
 *
 * 실제 LLM 호출은 generate 프롭으로 주입한다. 주지 않으면 목업으로 동작한다.
 */
export interface AiSuggestButtonProps {
  /** 사용자가 적은 자유 서술을 서식 표현으로 정리해 돌려준다. */
  generate?: (prompt: string) => Promise<string>;
  /** "이대로 쓰기"를 누르면 호출된다. */
  onAccept: (value: string) => void;
  /** 펼쳤을 때 입력창 placeholder */
  placeholder?: string;
  /** generate 미주입 시 목업이 돌려줄 값 */
  fallback?: string;
}

export default function AiSuggestButton({
  generate,
  onAccept,
  placeholder = "무엇을 적을지 편하게 말씀해 주세요",
  fallback = "",
}: AiSuggestButtonProps) {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const run = async () => {
    setBusy(true);
    setResult(null);
    try {
      const value = generate
        ? await generate(prompt)
        : await new Promise<string>((r) => setTimeout(() => r(fallback || prompt.trim()), 600));
      setResult(value);
    } finally {
      setBusy(false);
    }
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        style={{
          alignSelf: "flex-start",
          height: 32,
          display: "flex",
          alignItems: "center",
          gap: 5,
          padding: "0 12px",
          border: "1px solid var(--ff-border-strong)",
          borderRadius: "var(--ff-radius-sm)",
          background: "transparent",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: 12.5,
          fontWeight: 600,
          color: "var(--ff-text-2)",
        }}
      >
        <SparkleIcon />
        AI 자동작성
      </button>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        background: "var(--ff-sub)",
        border: "1px solid var(--ff-border)",
        borderRadius: "var(--ff-radius-ctl)",
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 9,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <span style={{ color: "var(--ff-brand)", display: "inline-flex" }}>
          <SparkleIcon />
        </span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--ff-text-2)" }}>AI 자동작성</span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="AI 자동작성 접기"
          style={{
            marginLeft: "auto",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: 12.5,
            color: "var(--ff-text-3)",
          }}
        >
          접기
        </button>
      </div>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder={placeholder}
        rows={3}
        style={{
          width: "100%",
          boxSizing: "border-box",
          fontFamily: "inherit",
          fontSize: 13.5,
          lineHeight: 1.55,
          color: "var(--ff-text)",
          background: "var(--ff-input-bg)",
          border: "1px solid var(--ff-input-border)",
          borderRadius: 10,
          padding: 10,
          resize: "none",
        }}
      />

      {result == null ? (
        <button
          type="button"
          onClick={run}
          disabled={busy || prompt.trim() === ""}
          style={{
            height: 36,
            fontFamily: "inherit",
            fontSize: 12.5,
            fontWeight: 700,
            color: "#fff",
            background: "var(--ff-brand)",
            border: "none",
            borderRadius: "var(--ff-radius-sm)",
            cursor: busy || prompt.trim() === "" ? "default" : "pointer",
            opacity: busy || prompt.trim() === "" ? 0.5 : 1,
          }}
        >
          {busy ? "딸깍이가 작성 중…" : "생성하기"}
        </button>
      ) : (
        <div
          style={{
            background: "var(--ff-panel)",
            border: "1px solid var(--ff-border)",
            borderRadius: "var(--ff-radius-ctl)",
            padding: 12,
            display: "flex",
            flexDirection: "column",
            gap: 9,
          }}
        >
          <div style={{ fontSize: 11.5, fontWeight: 700, color: "var(--ff-text-3)" }}>✨ 생성 결과</div>
          <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ff-text)", lineHeight: 1.5 }}>
            {result}
          </div>
          <div style={{ display: "flex", gap: 7 }}>
            <button
              type="button"
              onClick={() => {
                onAccept(result);
                setOpen(false);
                setResult(null);
                setPrompt("");
              }}
              style={{
                flex: 1.4,
                height: 36,
                fontFamily: "inherit",
                fontSize: 12.5,
                fontWeight: 700,
                color: "#fff",
                background: "var(--ff-success-strong)",
                border: "none",
                borderRadius: "var(--ff-radius-sm)",
                cursor: "pointer",
              }}
            >
              ✓ 이대로 쓰기
            </button>
            <button
              type="button"
              onClick={run}
              disabled={busy}
              style={{
                flex: 1,
                height: 36,
                fontFamily: "inherit",
                fontSize: 12.5,
                fontWeight: 600,
                color: "var(--ff-text-2)",
                background: "var(--ff-sub-2)",
                border: "none",
                borderRadius: "var(--ff-radius-sm)",
                cursor: busy ? "default" : "pointer",
              }}
            >
              ↻ 다시 생성
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function SparkleIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 l1.6 5.4 L19 10 l-5.4 1.6 L12 17 l-1.6 -5.4 L5 10 l5.4 -1.6 Z" />
    </svg>
  );
}
