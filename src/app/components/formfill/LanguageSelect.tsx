import { useState } from "react";

/**
 * 작성 언어 → 출력 언어.
 * 사용자는 모국어로 답하고, 서식에는 지정한 언어로 들어간다.
 * 부모 폭 100%를 채우며 두 드롭다운이 폭을 절반씩 나눠 갖는다.
 */
export interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

export const DEFAULT_LANGUAGES: LanguageOption[] = [
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "uz", name: "Oʻzbekcha", flag: "🇺🇿" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
];

export interface LanguageSelectProps {
  input: string;
  output: string;
  onChangeInput: (code: string) => void;
  onChangeOutput: (code: string) => void;
  languages?: LanguageOption[];
}

export default function LanguageSelect({
  input,
  output,
  onChangeInput,
  onChangeOutput,
  languages = DEFAULT_LANGUAGES,
}: LanguageSelectProps) {
  const [open, setOpen] = useState<"in" | "out" | null>(null);
  const find = (code: string) => languages.find((l) => l.code === code) ?? languages[0];

  const helper =
    input === output
      ? "작성한 그대로 서식에 들어가요."
      : `${find(input).name}로 적으면 ${find(output).name}로 바꿔서 서식에 넣어드려요.`;

  return (
    <div
      style={{
        width: "100%",
        boxSizing: "border-box",
        background: "var(--ff-sub)",
        border: "1px solid var(--ff-border)",
        borderRadius: 14,
        padding: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
        <Dropdown
          label="작성 언어"
          selected={find(input)}
          languages={languages}
          open={open === "in"}
          onToggle={() => setOpen(open === "in" ? null : "in")}
          onPick={(code) => {
            onChangeInput(code);
            setOpen(null);
          }}
        />

        <div style={{ paddingBottom: 9, color: "var(--ff-text-4)", flexShrink: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--ff-brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12 H19 M14 7 l5 5 l-5 5" />
          </svg>
        </div>

        <Dropdown
          label="출력 언어"
          selected={find(output)}
          languages={languages}
          open={open === "out"}
          onToggle={() => setOpen(open === "out" ? null : "out")}
          onPick={(code) => {
            onChangeOutput(code);
            setOpen(null);
          }}
        />
      </div>

      <div style={{ fontSize: 11.5, color: "var(--ff-text-3)", marginTop: 9, display: "flex", alignItems: "center", gap: 5 }}>
        <span style={{ color: "var(--ff-brand)" }}>✦</span>
        {helper}
      </div>
    </div>
  );
}

function Dropdown({
  label,
  selected,
  languages,
  open,
  onToggle,
  onPick,
}: {
  label: string;
  selected: LanguageOption;
  languages: LanguageOption[];
  open: boolean;
  onToggle: () => void;
  onPick: (code: string) => void;
}) {
  return (
    <div style={{ flex: 1, minWidth: 0, position: "relative" }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: "var(--ff-text-3)", marginBottom: 5 }}>{label}</div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        style={{
          width: "100%",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "var(--ff-panel)",
          border: `1.5px solid ${open ? "var(--ff-brand)" : "var(--ff-border)"}`,
          borderRadius: 10,
          padding: "9px 11px",
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        <span style={{ fontSize: 17, lineHeight: 1 }}>{selected.flag}</span>
        <span
          style={{
            flex: 1,
            minWidth: 0,
            fontSize: 12.5,
            fontWeight: 600,
            color: "var(--ff-text)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            textAlign: "left",
          }}
        >
          {selected.name}
        </span>
        <span style={{ color: "var(--ff-text-4)", fontSize: 10 }}>▾</span>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            background: "var(--ff-panel)",
            border: "1px solid var(--ff-border)",
            borderRadius: 12,
            boxShadow: "var(--ff-shadow-pop)",
            padding: 6,
            zIndex: 60,
            maxHeight: 260,
            overflowY: "auto",
          }}
        >
          {languages.map((lg) => {
            const on = lg.code === selected.code;
            return (
              <button
                key={lg.code}
                type="button"
                onClick={() => onPick(lg.code)}
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  alignItems: "center",
                  gap: 9,
                  padding: "8px 9px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                  background: on ? "var(--ff-sub-2)" : "transparent",
                  fontFamily: "inherit",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: 16 }}>{lg.flag}</span>
                <span style={{ flex: 1, fontSize: 13, fontWeight: on ? 700 : 500, color: "var(--ff-text)" }}>
                  {lg.name}
                </span>
                {on && <span style={{ color: "var(--ff-brand)", fontWeight: 700 }}>✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
