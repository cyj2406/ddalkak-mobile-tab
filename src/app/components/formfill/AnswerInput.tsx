import { useState } from "react";

/**
 * 답변 입력창 — 텍스트형 빈칸의 "쓰는 곳".
 * 포커스 시 브랜드 컬러 테두리 + 포커스링. Enter로 제출(Shift+Enter는 줄바꿈).
 */
export interface AnswerInputProps {
  value: string;
  onChange: (v: string) => void;
  /** Enter 또는 외부 버튼에서 확정할 때 */
  onSubmit?: () => void;
  placeholder?: string;
  rows?: number;
  /** 우하단 힌트. 기본 "Enter로 다음" */
  enterHint?: string;
}

export default function AnswerInput({
  value,
  onChange,
  onSubmit,
  placeholder = "여기에 입력해 주세요",
  rows = 4,
  enterHint = "Enter로 다음",
}: AnswerInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        border: `1.5px solid ${focused ? "var(--ff-brand)" : "var(--ff-border)"}`,
        boxShadow: focused ? "0 0 0 3px var(--ff-focus-ring)" : "none",
        borderRadius: "var(--ff-radius-ctl)",
        background: "var(--ff-sub)",
        padding: "14px 13px 10px 13px",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        transition: "border-color 150ms ease, box-shadow 150ms ease",
      }}
    >
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && onSubmit) {
            e.preventDefault();
            onSubmit();
          }
        }}
        placeholder={placeholder}
        rows={rows}
        style={{
          width: "100%",
          boxSizing: "border-box",
          fontFamily: "inherit",
          fontSize: 14,
          lineHeight: 1.55,
          color: "var(--ff-text)",
          border: "none",
          background: "transparent",
          padding: 0,
          resize: "none",
          outline: "none",
        }}
      />
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
          gap: 5,
          fontSize: 11.5,
          color: "var(--ff-text-4)",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 20,
            height: 18,
            padding: "0 4px",
            border: "1px solid var(--ff-border-strong)",
            borderRadius: 5,
            fontSize: 11,
            fontWeight: 600,
            color: "var(--ff-text-3)",
          }}
        >
          ↵
        </span>
        {enterHint}
      </div>
    </div>
  );
}
