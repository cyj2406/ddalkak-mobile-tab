import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

import { compactUrl } from "@/app/components/common/middleEllipsis";

let canvas: HTMLCanvasElement | null = null;

/**
 * 실제 폭에 맞춰 가운데를 줄여 보여 주는 한 줄 글자(칩 이름 등). 고정 글자 수가 아니라 이 요소가 차지할 수 있는 폭을
 * 재서(같은 글꼴로 canvas measureText) 그만큼만 줄인다 — 칸에 여유가 있으면 끝까지 다 보인다.
 *
 * 폭은 원문 전체(보이지 않게 깔아 둔)가 정한다 — 줄인 글자로 폭을 재면 줄일수록 폭이 줄어드는 순환이 생기므로,
 * 레이아웃은 원문으로 잡고 그 위에 줄인 글자를 겹쳐 그린다. 부모가 flex 면 이 요소는 min-width 0 으로 줄어든다.
 * 전체 값은 부모가 title(데스크톱 툴팁)·탭 펼치기로 보여 준다.
 */
export function MiddleEllipsisText({ text, className, style }: { text: string; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(text);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const run = () => {
      const width = el.clientWidth;
      if (!width) return;
      canvas ??= document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const cs = getComputedStyle(el);
      ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      // 폭에 제약이 없으면 이 요소 폭 = 원문 폭(정수로 올림)이라 원문은 항상 맞는다 — 여유를 빼면 다 들어갈 칸에서도 한 글자씩 잘린다
      setShown(compactUrl(text, (c) => ctx.measureText(c).width <= width + 0.5));
    };
    run();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(run) : null;
    ro?.observe(el);
    // 웹폰트가 늦게 로드되면 글자 폭이 달라진다
    document.fonts?.ready.then(run).catch(() => {});
    return () => ro?.disconnect();
  }, [text]);
  return (
    <span ref={ref} className={`relative block min-w-0 overflow-hidden whitespace-nowrap ${className ?? ""}`} style={style}>
      <span aria-hidden style={{ visibility: "hidden" }}>{text}</span>
      <span aria-hidden className="absolute inset-0">{shown}</span>
    </span>
  );
}
