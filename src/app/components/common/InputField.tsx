import { Fragment, forwardRef, useCallback, useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties, InputHTMLAttributes, ReactNode, Ref } from "react";

import { color, f, fieldOverflow } from "@/app/styleTokens";
import { AutoGrowTextarea, type AutoGrowTextareaProps } from "@/app/components/common/AutoGrowTextarea";

/**
 * 공용 입력 필드 — 긴 입력이 들어갈 수 있는 칸의 넘침 규칙을 variant 하나로 고른다(2026-10-16).
 * 개별 필드에서 넘침 CSS 를 따로 붙이지 않는다. 새 폼 필드도 이 컴포넌트를 쓰면 같은 규칙이 자동으로 걸린다.
 * 줄 수·폭·개수는 styleTokens.ts `fieldOverflow` 에서 온다.
 *
 *   multiline  — 여러 줄 서술. 높이는 내용 길이로만 정해진다 — 3줄에서 시작해 8줄까지 늘고, 넘치면 칸 안 세로 스크롤(그때만 스크롤바).
 *                포커스가 들어오고 나가도 높이는 그대로, 테두리·링만 바뀐다. 접기·"더 보기"·글자 수 제한 없음.
 *   singleline — 한 줄 값(주제, 링크). 줄바꿈·말줄임 없이 가로 스크롤(URL 이 중간에 잘리면 알아볼 수 없다).
 *                키보드로 들어오면 커서를 끝에 두고 그 위치까지 스크롤, 포커스가 없을 때 넘치면 오른쪽 끝 페이드로 "더 있음"을 알린다.
 *   list       — 늘어나는 항목(첨부 링크·파일 등). visibleCount 개까지 보이고 나머지는 "+N개 더"로 접는다.
 *                감싸는 상자 없이 항목을 그대로 내보내, 부모의 배치(칩 줄바꿈·세로 목록)를 그대로 따른다.
 *
 * 모바일 키보드: 포커스한 칸이 커지거나 키보드가 올라와 화면(visualViewport)이 줄면, 칸 아래 끝이 보이도록
 * 가장 가까운 스크롤 영역을 그만큼 올린다 — 입력 중인 줄이 키보드에 가려지지 않게.
 */

/** 모든 입력 상자(셀렉트·한 줄·여러 줄)의 공통 바탕 — 값이 있어도, 포커스여도 바뀌지 않는다 */
export const FIELD_SURFACE = { background: color.surface.subtle } as const;
/** 포커스 표시 클래스(theme.css) — 자기 자신이 상자인 요소 / 안에 입력을 품은 상자 */
export const FIELD_CLASS = "ui-field";
export const FIELD_WITHIN_CLASS = "ui-field-within";

type MultilineProps = {
  variant: "multiline";
  /** 줄 수 범위 — 기본 fieldOverflow.multiline(3~8줄). 제목 성격(주제)은 fieldOverflow.title(1~3줄) */
  rows?: { minRows: number; maxRows: number };
} & Omit<
  AutoGrowTextareaProps,
  "maxRows" | "lineHeight" | "paddingY" | "minRows" | "collapsedRows" | "collapse"
>;

type SinglelineProps = {
  variant: "singleline";
  value: string;
  onChange: (value: string) => void;
  style?: CSSProperties;
  /** placeholder 글자 스타일(크기·굵기·색) */
  placeholderStyle?: CSSProperties;
  /** 페이드 색 — 칸 배경과 같아야 한다. 없으면 style.background */
  fadeColor?: string;
  /** 테두리 없이 바깥 상자(FIELD_WITHIN_CLASS) 안에 들어가는 입력 — 바탕·포커스 표시는 바깥 상자가 맡는다 */
  bare?: boolean;
  /** 바깥 래퍼 — 부모가 flex 일 때 늘어나는 비율·최소 폭 등을 여기로 */
  containerClassName?: string;
  containerStyle?: CSSProperties;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "style">;

type ListProps = {
  variant: "list";
  items: { key: string; node: ReactNode }[];
  visibleCount?: number;
  /** "+N개 더 / 접기" 버튼 모양 — 항목과 어울리게(칩이면 칩 모양) */
  toggleStyle?: CSSProperties;
};

export type InputFieldProps = MultilineProps | SinglelineProps | ListProps;

const KEYBOARD_MARGIN = 12;

/** el 의 아래 끝이 실제로 보이는 영역(visualViewport) 안에 들도록 가장 가까운 스크롤 영역을 올린다. */
function keepInView(el: HTMLElement) {
  const vv = window.visualViewport;
  const bottom = (vv ? vv.offsetTop + vv.height : window.innerHeight) - KEYBOARD_MARGIN;
  const dy = el.getBoundingClientRect().bottom - bottom;
  if (dy <= 1) return;
  let p = el.parentElement;
  while (p && !(/(auto|scroll)/.test(getComputedStyle(p).overflowY) && p.scrollHeight > p.clientHeight)) p = p.parentElement;
  (p ?? document.scrollingElement)?.scrollBy({ top: dy });
}

/** 포커스 동안 키보드(visualViewport 축소)나 칸 높이 변화에 맞춰 keepInView 를 다시 건다. */
function useKeepInView(getEl: () => HTMLElement | null, focused: boolean, dep: unknown) {
  useEffect(() => {
    if (!focused) return;
    const run = () => { const el = getEl(); if (el) keepInView(el); };
    // 칸 높이 transition(motion.fast) 이 끝난 뒤의 크기로 잰다
    const t = window.setTimeout(run, 200);
    const vv = window.visualViewport;
    vv?.addEventListener("resize", run);
    return () => { window.clearTimeout(t); vv?.removeEventListener("resize", run); };
  }, [focused, dep, getEl]);
}

const MultilineField = forwardRef<HTMLTextAreaElement, Omit<MultilineProps, "variant">>(function MultilineField(
  { rows, onFocus, onBlur, value, className, style, ...props },
  ref,
) {
  const inner = useRef<HTMLTextAreaElement>(null);
  useImperativeHandle(ref, () => inner.current!, []);
  const [focused, setFocused] = useState(false);
  const getEl = useCallback(() => inner.current, []);
  useKeepInView(getEl, focused, value);
  const { lineHeight, paddingY, multiline } = fieldOverflow;
  return (
    <AutoGrowTextarea
      ref={inner}
      {...props}
      className={`${FIELD_CLASS} ${className ?? ""}`}
      style={{ ...style, ...FIELD_SURFACE }}
      value={value}
      lineHeight={lineHeight}
      paddingY={paddingY}
      minRows={(rows ?? multiline).minRows}
      maxRows={(rows ?? multiline).maxRows}
      collapse="none"
      onFocus={(e) => { setFocused(true); onFocus?.(e); }}
      onBlur={(e) => { setFocused(false); onBlur?.(e); }}
    />
  );
});

/** "#rrggbb" → 같은 색의 완전 투명(그라데이션 시작점). 그 외 형식은 transparent. */
const clearOf = (c: string) => (/^#[0-9a-f]{6}$/i.test(c) ? `${c}00` : "transparent");

const SinglelineField = forwardRef<HTMLInputElement, Omit<SinglelineProps, "variant">>(function SinglelineField(
  { value, onChange, style, placeholderStyle, fadeColor, bare, containerClassName, containerStyle, className, onFocus, onBlur, onPointerDown, onScroll, ...props },
  ref,
) {
  const inner = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inner.current!, []);
  const [focused, setFocused] = useState(false);
  const [more, setMore] = useState(false);
  const fromPointer = useRef(false);
  const getEl = useCallback(() => inner.current, []);
  useKeepInView(getEl, focused, null);

  // 오른쪽에 가려진 글자가 남아 있는지 — 값·폭·스크롤 위치가 바뀔 때마다 다시 잰다
  const measure = useCallback(() => {
    const el = inner.current;
    if (el) setMore(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);
  useLayoutEffect(measure, [value, measure]);
  useEffect(() => {
    const el = inner.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const boxStyle: CSSProperties | undefined = bare ? style : { ...style, ...FIELD_SURFACE };
  const bg = fadeColor ?? (typeof boxStyle?.background === "string" ? boxStyle.background : color.surface.default);
  const radius = typeof style?.borderRadius === "number" ? Math.max(0, style.borderRadius - 1) : 0;
  const phVars = placeholderStyle
    ? ({ "--ph-size": placeholderStyle.fontSize != null ? `${placeholderStyle.fontSize}px` : undefined, "--ph-weight": placeholderStyle.fontWeight, "--ph-color": placeholderStyle.color } as CSSProperties)
    : undefined;

  return (
    <div className={`relative min-w-0 ${containerClassName ?? ""}`} style={containerStyle}>
      <input
        ref={inner}
        // 브라우저 자동 완성 끔 — 크롬이 이전 입력으로 채우며 칸을 파랗게 칠한다(theme.css 에서도 막는다)
        autoComplete="off"
        {...props}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onPointerDown={(e) => { fromPointer.current = true; onPointerDown?.(e); }}
        onFocus={(e) => {
          setFocused(true);
          // 키보드(Tab)로 들어오면 커서를 끝에 두고 그 위치까지 스크롤 — 마우스·터치는 누른 곳에 커서가 놓인다
          if (!fromPointer.current) {
            const el = e.currentTarget;
            const end = el.value.length;
            el.setSelectionRange(end, end);
            el.scrollLeft = el.scrollWidth;
          }
          fromPointer.current = false;
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          // 떠나면 처음부터 보이게 되돌리고, 넘치면 오른쪽 페이드가 "더 있음"을 알린다
          e.currentTarget.scrollLeft = 0;
          measure();
          onBlur?.(e);
        }}
        onScroll={(e) => { measure(); onScroll?.(e); }}
        className={`ui-field-ph w-full ${bare ? "" : FIELD_CLASS} ${className ?? ""}`}
        // 값은 말줄임 없이 잘리지 않게(clip + 가로 스크롤). 비어 있을 때의 placeholder 만 좁은 칸에서 "…"로 줄인다.
        style={{ ...boxStyle, ...phVars, textOverflow: value ? "clip" : "ellipsis" }}
      />
      {!focused && more && (
        <span
          aria-hidden
          className="pointer-events-none absolute"
          style={{
            top: 1, bottom: 1, right: 1, width: fieldOverflow.singleline.fadeWidth,
            background: `linear-gradient(to right, ${clearOf(bg)}, ${bg})`,
            borderTopRightRadius: radius, borderBottomRightRadius: radius,
          }}
        />
      )}
    </div>
  );
});

function OverflowList({ items, visibleCount = fieldOverflow.list.visibleCount, toggleStyle }: Omit<ListProps, "variant">) {
  const [open, setOpen] = useState(false);
  const hidden = items.length - visibleCount;
  // 펼친 채로 항목이 줄어 기준 이하가 되면 다시 접힌 상태로 둔다
  useEffect(() => { if (hidden <= 0) setOpen(false); }, [hidden]);
  const shown = open || hidden <= 0 ? items : items.slice(0, visibleCount);
  return (
    <>
      {shown.map((it) => <Fragment key={it.key}>{it.node}</Fragment>)}
      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="shrink-0 inline-flex items-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#4f7bff]"
          style={{ ...f, fontWeight: 600, fontSize: 12.5, color: color.text.secondary, background: "transparent", border: 0, padding: "4px 6px", cursor: "pointer", ...toggleStyle }}
        >
          {open ? "접기" : `+${hidden}개 더`}
        </button>
      )}
    </>
  );
}

export const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>(function InputField(props, ref) {
  if (props.variant === "multiline") {
    const { variant: _v, ...rest } = props;
    return <MultilineField ref={ref as Ref<HTMLTextAreaElement>} {...rest} />;
  }
  if (props.variant === "singleline") {
    const { variant: _v, ...rest } = props;
    return <SinglelineField ref={ref as Ref<HTMLInputElement>} {...rest} />;
  }
  const { variant: _v, ...rest } = props;
  return <OverflowList {...rest} />;
});
