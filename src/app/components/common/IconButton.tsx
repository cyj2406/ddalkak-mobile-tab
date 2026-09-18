import { forwardRef, useState } from "react";
import type { ButtonHTMLAttributes } from "react";

import { motion } from "@/app/styleTokens";

/**
 * 아이콘만 있는 버튼(뒤로가기·햄버거·닫기·벨 등) — 지금까지 className만으로
 * 그려져서 클릭 가능한 요소인데도 Hover/Pressed/Focus가 전혀 없었다. Button.tsx와
 * 같은 이유로 배경을 인라인 style로 계산한다(Tailwind hover: 클래스는 이미 있는
 * className과 충돌하지 않지만, 굳이 두 방식을 섞지 않고 Button.tsx의 관례를 그대로
 * 따른다 — 한 곳에서 하나의 패턴만 쓰면 유지보수가 쉽다).
 *
 * 색/크기/모양은 호출부의 className으로 그대로 두고, 이 컴포넌트는 상태 배경·포커스
 * 링·pressed 피드백만 추가한다 — 새 시각 언어를 만들지 않는다.
 */
export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 원형(size-9 rounded-full 계열)인지 각진 사각(rounded-[10px] 계열)인지 — hover 배경 모양만 바뀐다. */
  shape?: "circle" | "square";
}

const FOCUS_RING_CLASS = "outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#4f7bff]";

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { shape = "square", disabled, className, style, children, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, ...props },
  ref,
) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);
  const bg = disabled ? "transparent" : pressed ? "#e2e8f0" : hovered ? "#f1f5f9" : "transparent";

  return (
    <button
      ref={ref}
      type="button"
      disabled={disabled}
      onMouseEnter={(e) => { setHovered(true); onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHovered(false); setPressed(false); onMouseLeave?.(e); }}
      onMouseDown={(e) => { setPressed(true); onMouseDown?.(e); }}
      onMouseUp={(e) => { setPressed(false); onMouseUp?.(e); }}
      className={[FOCUS_RING_CLASS, className].filter(Boolean).join(" ")}
      style={{
        background: bg,
        borderRadius: shape === "circle" ? 9999 : 10,
        transition: `background-color ${motion.fast}`,
        cursor: disabled ? "default" : "pointer",
        ...style,
      }}
      {...props}
    >
      {children}
    </button>
  );
});

export default IconButton;
