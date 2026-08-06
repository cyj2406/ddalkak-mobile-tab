import React, { useEffect, useRef, useState } from "react";

interface ClampedTextProps {
  /** 표시할 본문 */
  text: string;
  /** 접혔을 때 보여줄 최대 줄 수 */
  lines?: number;
  /** 본문 <p>에 적용할 클래스 */
  className?: string;
  /** 본문 <p>에 적용할 인라인 스타일 */
  style?: React.CSSProperties;
  /** 더보기/접기 버튼에 적용할 인라인 스타일 */
  toggleStyle?: React.CSSProperties;
  expandLabel?: string;
  collapseLabel?: string;
}

/**
 * 본문을 기본 N줄로 말줄임 처리하고, 실제로 잘린 경우에만 더보기/접기 토글을 노출한다.
 * 펼침 상태는 이 컴포넌트 내부에서 관리되므로 항목마다 독립적으로 동작한다.
 *
 * 알림 카드처럼 행 전체가 클릭 대상인 곳에서 쓰이므로, 토글 클릭은 부모로 전파하지 않는다.
 */
export default function ClampedText({
  text,
  lines = 2,
  className = "",
  style,
  toggleStyle,
  expandLabel = "더보기",
  collapseLabel = "접기",
}: ClampedTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);

  // 접힌 상태에서만 측정한다 (펼친 상태에서는 넘침이 사라져 판단할 수 없음)
  useEffect(() => {
    if (isExpanded) return;
    const el = textRef.current;
    if (!el) return;

    const measure = () => setIsClamped(el.scrollHeight > el.clientHeight + 1);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [text, lines, isExpanded]);

  const clampStyle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: lines,
    overflow: "hidden",
  };

  return (
    <>
      <p
        ref={textRef}
        className={className}
        style={isExpanded ? style : { ...style, ...clampStyle }}
      >
        {text}
      </p>
      {isClamped && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded((prev) => !prev);
          }}
          style={toggleStyle}
        >
          {isExpanded ? collapseLabel : expandLabel}
        </button>
      )}
    </>
  );
}
