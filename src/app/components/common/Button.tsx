import { forwardRef, useState } from "react";
import type { ButtonHTMLAttributes } from "react";
import { Loader2 } from "lucide-react";

import { color, controlHeight, f, radius } from "@/app/styleTokens";

/**
 * 공용 버튼 — 요금제/크레딧 페이지와 프로필·설정 진입점에서 반복되던
 * "브랜드 블루 채움 / 진한 무채색 채움 / 흰 배경 + 테두리" 세 가지를 하나로 모았다.
 *
 * 기존 shadcn `components/ui/button.tsx` 를 확장하지 않고 새로 만든 이유:
 * 그 프리미티브는 --primary 등 theme.css 의 CSS 변수(shadcn 전용, 실제 화면 어디서도
 * 쓰이지 않음)에 묶여 있어서, 그대로 쓰면 브랜드 블루가 아니라 --primary(#030213 근처
 * 무채색)가 나온다. 값을 다시 매핑하느니, 실제로 쓰던 인라인 스타일 값을 그대로
 * 옮겨 하나의 컴포넌트로 굳히는 쪽이 더 적은 위험으로 더 정확하다.
 *
 * hover 배경은 Tailwind `hover:bg-[...]` 클래스가 아니라 상태로 계산한다 — 배경색을
 * (variant/disabled 에 따라 달라져야 해서) 인라인 style 로 주는데, 인라인 style 은
 * 항상 클래스보다 우선하므로 `hover:` 클래스를 얹어도 절대 적용되지 않는다(직접
 * Playwright 로 hover 전후 backgroundColor 를 찍어 확인한 실제 버그).
 *
 * "선택됨" 상태는 여기 없다 — 요금제 카드/충전 패키지처럼 "골라 두는" 요소는 버튼이
 * 아니라 각 화면의 선택형 카드 자체가 테두리·배경으로 표현한다(하나의 거대한
 * 컴포넌트로 억지로 합치지 않는다).
 */

export type ButtonVariant = "primary" | "dark" | "secondary";
export type ButtonSize = "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  /** 카드 안에서 버튼 하나가 가로 전체를 차지해야 할 때(플랜 카드 CTA, 프로필 메뉴 CTA 등) */
  fullWidth?: boolean;
  /** true면 라벨 대신 스피너를 보여주고 클릭을 막는다(disabled 와 별개로 관리) */
  loading?: boolean;
  /**
   * 완전히 둥근 pill 모양(프로필 메뉴의 "요금제 및 크레딧" 처럼 좁은 팝오버 안에 놓이는
   * CTA가 기존에 이 모양이었다). 기본은 radius.control(14px, 대부분의 화면형 버튼).
   */
  pill?: boolean;
}

const VARIANT_STYLE: Record<ButtonVariant, { bg: string; hoverBg: string; text: string; border?: string }> = {
  primary: { bg: color.brand, hoverBg: color.brandHover, text: "#ffffff" },
  dark: { bg: color.text.primary, hoverBg: "#1f1f1f", text: "#ffffff" },
  secondary: { bg: color.surface.default, hoverBg: color.surface.subtle, text: "#334155", border: color.border.default },
};

/** disabled 일 때는 variant 와 무관하게 같은 "비활성" 톤 하나로 통일한다(요금제 카드의 "현재 이용 중" 등). */
const DISABLED_STYLE: { bg: string; text: string; border?: string } = { bg: "#f1f5f9", text: "#9ca3af" };

/**
 * 포커스 링 — `focus-visible:outline-*` 대신 `ring`(box-shadow 기반)을 쓴다.
 * 이 레포의 theme.css 전역 규칙(`* { @apply outline-ring/50 }`)과 Tailwind 의
 * `outline-none` 유틸이 outline 속성을 두고 캐스케이드 순서 문제를 일으켜(직접 확인:
 * outline-style 이 항상 "none"으로 덮여 focus-visible 상태에서도 안 보였다) outline 계열은
 * 신뢰할 수 없었다. 이미 있는 components/ui/button.tsx 의 shadcn 버튼도 같은 이유로
 * ring 을 쓰고 있어, 그 관례를 그대로 따른다. ring 은 box-shadow 라 인라인 background
 * 와 충돌하지 않는다.
 */
const FOCUS_RING_CLASS = "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff]";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "lg", fullWidth, loading, pill, disabled, className, style, children, onMouseEnter, onMouseLeave, ...props },
  ref,
) {
  const [hovered, setHovered] = useState(false);
  const isDisabled = !!disabled || !!loading;
  const variantStyle = VARIANT_STYLE[variant];
  const tone = isDisabled ? DISABLED_STYLE : variantStyle;
  const height = controlHeight[size];
  const bg = !isDisabled && hovered ? variantStyle.hoverBg : tone.bg;

  return (
    <button
      ref={ref}
      type="button"
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onMouseEnter={(e) => { setHovered(true); onMouseEnter?.(e); }}
      onMouseLeave={(e) => { setHovered(false); onMouseLeave?.(e); }}
      className={["outline-none transition-colors duration-150", FOCUS_RING_CLASS, fullWidth ? "w-full" : "", className]
        .filter(Boolean).join(" ")}
      style={{
        ...f,
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        height,
        padding: "0 20px",
        borderRadius: pill ? radius.full : radius.control,
        border: tone.border ? `1px solid ${tone.border}` : "none",
        background: bg,
        color: tone.text,
        fontWeight: 700,
        fontSize: size === "lg" ? 14 : 13.5,
        letterSpacing: "-0.3px",
        cursor: isDisabled ? "default" : "pointer",
        ...style,
      }}
      {...props}
    >
      {/* 라벨을 지우고 스피너로 바꾸면(예전 구현) loading 이 켜지고 꺼질 때마다 버튼
          너비가 바뀐다 — 라벨은 visibility:hidden 으로 자리만 차지하게 두고 스피너는
          그 위에 겹쳐 그린다. 보조기술에는 aria-busy 만으로 부족해 sr-only 문구를 더한다. */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center" aria-hidden>
          <Loader2 size={16} strokeWidth={1.8} className="animate-spin" />
        </span>
      )}
      <span
        className="inline-flex items-center justify-center gap-2"
        style={{ visibility: loading ? "hidden" : "visible" }}
      >
        {children}
      </span>
      {loading && <span className="sr-only">처리 중</span>}
    </button>
  );
});

export default Button;
