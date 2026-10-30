import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import { color, f, radius, shadow } from "@/app/styleTokens";
import { HELPER_HINT_DELAY_MS, HELPER_HINT_TEXT } from "./onboardingSteps";
import { HELPER_HINT_SHOWN_KEY, readFlag, useOnboardingState, writeFlag } from "./onboardingStore";
import { track } from "./track";

/**
 * 요청 도우미 힌트 — 튜토리얼 단계가 아니라 따로 동작한다.
 * 검색창이 비어 있고 포커스된 채 HELPER_HINT_DELAY_MS 가 지나면 검색창 아래에 한 번 띄운다.
 * 세션당 1회(sessionStorage) — 띄운 순간 기록하므로 닫거나 넘어간 뒤 그 세션에서는 다시 뜨지 않는다.
 * 글자를 입력하면 사라지고, 튜토리얼이 떠 있는 동안에는 뜨지 않는다.
 * 부모(검색창 묶음)가 position:relative 여야 한다 — 레이아웃을 밀지 않게 absolute 로 겹쳐 띄운다.
 */
export default function RequestHelperHint({ inputRef, query, onHelp }: {
  inputRef: React.RefObject<HTMLInputElement | null>;
  query: string;
  onHelp: () => void;
}) {
  const { active: onboardingActive } = useOnboardingState();
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(0);

  // 포커스·빈 값이 이어지는 동안만 타이머를 돌린다
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    const clear = () => window.clearTimeout(timerRef.current);
    const arm = () => {
      clear();
      if (readFlag("session", HELPER_HINT_SHOWN_KEY) || input.value.trim()) return;
      timerRef.current = window.setTimeout(() => {
        if (document.activeElement !== input || input.value.trim() || readFlag("session", HELPER_HINT_SHOWN_KEY)) return;
        writeFlag("session", HELPER_HINT_SHOWN_KEY);
        setVisible(true);
        track("helper_hint_view");
      }, HELPER_HINT_DELAY_MS);
    };
    input.addEventListener("focus", arm);
    input.addEventListener("blur", clear);
    if (document.activeElement === input) arm();
    return () => { clear(); input.removeEventListener("focus", arm); input.removeEventListener("blur", clear); };
  }, [inputRef]);

  // 입력이 생기면 타이머·힌트 모두 끝
  useEffect(() => {
    if (!query.trim()) return;
    window.clearTimeout(timerRef.current);
    setVisible(false);
  }, [query]);

  // 튜토리얼 중에는 타이머를 끊는다(마지막에 검색창에 포커스가 오면 그때부터 다시 잰다)
  useEffect(() => {
    if (onboardingActive) window.clearTimeout(timerRef.current);
  }, [onboardingActive]);

  if (!visible || onboardingActive) return null;

  const dismiss = () => { setVisible(false); track("helper_hint_dismiss"); };

  return (
    <div
      role="status"
      data-onboarding="helper-hint"
      className="absolute left-1/2 z-20 flex items-center gap-1"
      style={{
        ...f, top: "calc(100% + 10px)", transform: "translateX(-50%)", maxWidth: "calc(100vw - 32px)",
        background: color.text.primary, color: "#fff", borderRadius: radius.control, boxShadow: shadow.popover,
        padding: "8px 6px 8px 14px", fontSize: 13, fontWeight: 500, whiteSpace: "nowrap",
      }}
      // 힌트를 눌러도 입력칸 포커스를 뺏지 않게(링크·닫기는 click 으로 처리)
      onMouseDown={(e) => e.preventDefault()}
    >
      <span aria-hidden className="absolute" style={{ top: -5, left: "50%", marginLeft: -5, width: 10, height: 10, background: color.text.primary, transform: "rotate(45deg)", borderRadius: 2 }} />
      <span>
        {HELPER_HINT_TEXT.before}
        <button
          type="button"
          onClick={() => { track("helper_hint_click"); setVisible(false); onHelp(); }}
          className="underline underline-offset-2 outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-sm"
          style={{ ...f, fontWeight: 700, color: "#9db5ff" }}
        >
          {HELPER_HINT_TEXT.link}
        </button>
        {HELPER_HINT_TEXT.after}
      </span>
      <button type="button" onClick={dismiss} aria-label="힌트 닫기" className="ml-1 flex size-7 items-center justify-center rounded-full outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/70">
        <X size={14} aria-hidden />
      </button>
    </div>
  );
}
