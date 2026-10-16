import { forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, TextareaHTMLAttributes } from "react";

import { motion } from "@/app/styleTokens";

/**
 * 서술형 입력 칸 — 1줄로 시작해 입력하는 만큼 늘어나고, maxRows 를 넘으면 칸 안에서 세로
 * 스크롤된다(한 줄 input 에 긴 글을 넣어 가로로 잘리는 일을 막는다).
 *
 * 넘침 규칙(2026-10-15):
 *   - 짧은 서술(주제·대상 등)        maxRows 3
 *   - 긴 서술(꼭 담을 내용 등)       maxRows 8
 *   - 기간·비율처럼 짧은 값은 이 컴포넌트가 아니라 40자 제한 input 을 쓴다.
 *
 * 포커스가 떠났을 때 내용이 2줄을 넘으면 2줄로 접고 넘치는 부분은 "…"로 자른다 — 다 쓴 긴 칸이
 * 아래 칸으로 내려간 뒤에도 화면을 계속 차지하지 않게 한다. 접힌 칸을 누르면 바로 펼쳐져 이어서 쓴다
 * ("더 보기" 같은 별도 버튼은 두지 않는다 — 입력칸은 읽는 곳이 아니라 쓰는 곳이다).
 *
 * singleLine 이면 Enter 로 줄바꿈을 넣지 않는다(주제처럼 "한 줄"로 쓰는 값 — 길면 줄바꿈 없이 감겨 보인다).
 *
 * 높이 계산을 위해 lineHeight·paddingY 는 px 숫자로 받는다(테두리 1px 포함, border-box).
 * 칸 폭이 바뀔 때(반응형)도 다시 재서, 줄 수에 맞춰 늘거나 줄어든다(최대 줄 수까지).
 * 높이는 보이지 않는 거울 textarea 로 잰다 — 실제 칸의 높이를 "auto"로 풀었다가 다시 재면 transition 이
 * 매번 처음부터 시작돼 애니메이션이 안 되므로, 실제 칸은 px → px 로만 바뀌게 해 아래 칸이 부드럽게 밀린다.
 */
export interface AutoGrowTextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange" | "rows" | "style"> {
  value: string;
  onChange: (value: string) => void;
  maxRows: number;
  singleLine?: boolean;
  /** 줄 높이(px) */
  lineHeight?: number;
  /** 위아래 안쪽 여백(px) */
  paddingY?: number;
  style?: CSSProperties;
}

const COLLAPSED_ROWS = 2;
const BORDER = 1;

export const AutoGrowTextarea = forwardRef<HTMLTextAreaElement, AutoGrowTextareaProps>(function AutoGrowTextarea(
  { value, onChange, maxRows, singleLine, lineHeight = 22, paddingY = 13, style, placeholder, onFocus, onBlur, onKeyDown, ...props },
  ref,
) {
  const innerRef = useRef<HTMLTextAreaElement>(null);
  const mirrorRef = useRef<HTMLTextAreaElement>(null);
  useImperativeHandle(ref, () => innerRef.current!, []);
  const [focused, setFocused] = useState(false);
  const [overflowsCollapsed, setOverflowsCollapsed] = useState(false);
  // 칸 폭이 바뀌면(창 크기·반응형 레이아웃) 같은 글도 줄 수가 달라지므로 높이를 다시 잰다.
  // 값이 바뀔 때만 재면 좁아진 화면에서 2줄이 된 글이 1줄 높이에 잘려 보인다.
  const wrapRef = useRef<HTMLDivElement>(null);
  const [, setWidthTick] = useState(0);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    let lastWidth = el.clientWidth;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      if (w !== lastWidth) { lastWidth = w; setWidthTick((t) => t + 1); }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const heightFor = (rows: number) => rows * lineHeight + paddingY * 2 + BORDER * 2;
  const collapsed = !focused && overflowsCollapsed;

  useLayoutEffect(() => {
    const el = innerRef.current;
    const mirror = mirrorRef.current;
    if (!el || !mirror) return;
    if (collapsed) return; // 접힌 동안엔 아래 미리보기가 대신 보인다(높이 측정은 펼칠 때 다시 한다)
    mirror.value = value || " ";
    const content = mirror.scrollHeight + BORDER * 2;
    setOverflowsCollapsed(content > heightFor(COLLAPSED_ROWS) + 1);
    const max = heightFor(maxRows);
    el.style.height = `${Math.min(content, max)}px`;
    el.style.overflowY = content > max ? "auto" : "hidden";
  });

  const boxStyle: CSSProperties = { ...style, lineHeight: `${lineHeight}px`, paddingTop: paddingY, paddingBottom: paddingY, boxSizing: "border-box" };

  return (
    <div ref={wrapRef} className="relative flex flex-col items-start gap-1 w-full">
      {/* 높이 측정용 거울 — 실제 칸과 같은 폭·글꼴·여백, 화면·스크린리더·탭 순서에서 모두 빠진다 */}
      <textarea
        ref={mirrorRef}
        rows={1}
        readOnly
        tabIndex={-1}
        aria-hidden
        className="w-full resize-none"
        style={{ ...boxStyle, position: "absolute", top: 0, left: 0, height: "auto", minHeight: 0, maxHeight: "none", overflow: "hidden", visibility: "hidden", pointerEvents: "none" }}
      />
      <textarea
        ref={innerRef}
        rows={1}
        value={value}
        onChange={(e) => onChange(singleLine ? e.target.value.replace(/\r?\n/g, " ") : e.target.value)}
        onKeyDown={(e) => {
          if (singleLine && e.key === "Enter" && !e.nativeEvent.isComposing) e.preventDefault();
          onKeyDown?.(e);
        }}
        onFocus={(e) => { setFocused(true); onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); onBlur?.(e); }}
        placeholder={placeholder}
        // 실제 placeholder 는 투명하게 두고(스크린리더용) 아래 한 줄 오버레이로 그린다 — textarea placeholder 는 "…" 말줄임이 안 된다.
        className="w-full outline-none resize-none placeholder:text-transparent"
        style={{
          ...boxStyle,
          transition: `height ${motion.fast}`,
          // 접힌 동안엔 화면에서만 빼 둔다 — 값·포커스·폼 연결은 그대로 유지된다.
          ...(collapsed ? { position: "absolute", opacity: 0, pointerEvents: "none", height: 0, overflow: "hidden" } : null),
        }}
        {...props}
      />
      {/* placeholder 오버레이 — 비어 있을 때 한 줄로, 넘치면 "…"로 줄인다(칸이 좁아져도 2줄로 넘쳐 잘리지 않게). */}
      {!value && placeholder && !collapsed && (
        <span
          aria-hidden
          className="ag-placeholder"
          style={{
            ...style, lineHeight: `${lineHeight}px`, paddingTop: paddingY, paddingBottom: paddingY, boxSizing: "border-box",
            position: "absolute", top: 0, left: 0, width: "100%", height: heightFor(1),
            border: "1px solid transparent", background: "transparent", color: "#9ca3af",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", pointerEvents: "none",
          }}
        >
          {placeholder}
        </span>
      )}
      {/* 접힌 미리보기 — 같은 상자 모양에 2줄 말줄임. 누르면 바로 이어서 편집한다.
          textarea 는 안쪽 여백까지 글자가 비쳐 3번째 줄이 반쯤 보이므로 별도 블록으로 그린다. */}
      {collapsed && (
        <div
          aria-hidden
          onClick={() => innerRef.current?.focus()}
          className="w-full"
          style={{ ...style, lineHeight: `${lineHeight}px`, paddingTop: paddingY, paddingBottom: paddingY, boxSizing: "border-box", cursor: "text", whiteSpace: "pre-wrap", wordBreak: "break-word" }}
        >
          <span style={{ display: "-webkit-box", WebkitLineClamp: COLLAPSED_ROWS, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{value}</span>
        </div>
      )}
    </div>
  );
});
