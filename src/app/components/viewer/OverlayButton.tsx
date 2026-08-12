import React from "react";

/**
 * 결과물 본문(영상·문서 미리보기) 위에 얹는 알약 버튼.
 *
 * 확대뷰와 인라인뷰가 같은 컴포넌트를 쓰게 해 "같은 기능 = 같은 색·모양"이 학습되도록 한다
 * — 뷰어마다 따로 구현하면 높이·반경·그림자가 조금씩 갈린다.
 *
 * variant 가 곧 위계다.
 *  - primary : 앱 브랜드 블루 솔리드. 상단바 다운로드·폼 전송 버튼과 같은 계열이라
 *              "이 앱의 주 액션"으로 읽히고, 불투명이라 어떤 영상 위에서도 묻히지 않는다.
 *  - surface : 흰 면 + 옅은 테두리. 밝은 문서 미리보기 위의 보조 동작.
 *
 * 반경은 뷰어 상단바 버튼·메뉴와 같은 12px 로 통일한다.
 */

const C = {
  /** 앱 브랜드 블루 — 뷰어·편집기 공통 primary 와 같은 값 */
  primary: "#3B5BFF",
  card: "#FFFFFF",
  line: "#E7EAF0",
  text: "#1A1D29",
} as const;

export type OverlayButtonVariant = "primary" | "surface";

const VARIANT: Record<OverlayButtonVariant, { style: React.CSSProperties; className: string }> = {
  primary: {
    // 흰 텍스트 + 옅은 섀도우 — 검은 영상 위에서 면이 떠 보이게 하는 최소한의 그림자만 둔다.
    style: { background: C.primary, color: "#FFFFFF", boxShadow: "0px 4px 12px rgba(0,0,0,0.28)" },
    className: "hover:brightness-95 active:brightness-90",
  },
  surface: {
    style: {
      background: C.card,
      color: C.text,
      border: `1px solid ${C.line}`,
      boxShadow: "0px 1px 3px rgba(16,24,40,0.08)",
    },
    className: "active:bg-[#EDF0F5] hover:bg-[#F2F4F8]",
  },
};

export default function OverlayButton({
  label, icon, variant = "surface", size = "md", onClick, disabled = false,
}: {
  label: string;
  icon: React.ReactNode;
  variant?: OverlayButtonVariant;
  /** md: 영상 위 40px / sm: 문서 위 36px */
  size?: "md" | "sm";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const v = VARIANT[variant];
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`shrink-0 rounded-[12px] flex items-center transition-all disabled:opacity-40 ${
        size === "md" ? "h-10 px-3.5 gap-2" : "h-9 px-3 gap-1.5"
      } ${v.className}`}
      style={v.style}
    >
      <span className="shrink-0" style={{ display: "flex" }}>{icon}</span>
      <span style={{ fontSize: size === "md" ? 13.5 : 13, fontWeight: 600, whiteSpace: "nowrap" }}>{label}</span>
    </button>
  );
}
