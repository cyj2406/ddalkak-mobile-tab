import type { ReactNode } from "react";

import { f, color } from "@/app/styleTokens";

/**
 * 공용 배지 — 화면마다 따로 그리던 pill 색 쌍(배경+텍스트)을 톤으로 묶었다.
 * 새 색을 만들지 않고 이미 앱에서 쓰던 쌍을 그대로 가져왔다:
 *   - brand: "현재 요금제" 배지(UsageSummary.tsx)가 쓰던 accent 배경 + brand 텍스트
 *   - neutral: 크레딧 사용 내역의 "사용" 유형 배지가 쓰던 중립 회색 쌍
 *   - warning: 요금제 페이지 개발용 안내 박스가 쓰던 amber 쌍
 *   - danger: 크레딧 사용 내역의 음수 금액 색(#ef4444)에 옅은 배경만 새로 짝지었다
 *     (같은 값의 badge용 배경 쌍이 없었다 — 다른 톤과 같은 "옅은 배경 + 진한 텍스트"
 *     패턴을 그대로 따랐을 뿐 색 자체는 새로 만들지 않았다).
 */
export type BadgeTone = "brand" | "brandSolid" | "neutral" | "warning" | "danger";

const TONE_STYLE: Record<BadgeTone, { bg: string; text: string }> = {
  brand: { bg: color.surface.accent, text: color.brand },
  /** 채움형 — "NEW"처럼 작은 공간에서 눈에 띄어야 하는 표시(홈 에디터 아이콘 줄). brand 채움 + 흰 글자 */
  brandSolid: { bg: color.brand, text: "#ffffff" },
  neutral: { bg: "#f1f5f9", text: "#475569" },
  warning: { bg: "#fffbeb", text: "#92400e" },
  danger: { bg: "#fef2f2", text: "#ef4444" },
};

/** size "sm" — 아이콘 모서리에 얹는 작은 배지(10px · 높이 16). 기본 "md"는 기존 그대로. */
export function Badge({ tone = "neutral", size = "md", children }: { tone?: BadgeTone; size?: "md" | "sm"; children: ReactNode }) {
  const t = TONE_STYLE[tone];
  const sm = size === "sm";
  return (
    <span
      className={`inline-flex items-center rounded-full whitespace-nowrap ${sm ? "px-1.5" : "px-2.5 py-0.5"}`}
      style={{ ...f, fontWeight: 700, fontSize: sm ? 10 : 12, lineHeight: sm ? "16px" : undefined, letterSpacing: sm ? "0.2px" : "-0.2px", background: t.bg, color: t.text }}
    >
      {children}
    </span>
  );
}

export default Badge;
