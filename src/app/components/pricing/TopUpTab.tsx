import { useState } from "react";

import { Button } from "@/app/components/common/Button";
import { color, f, motion, radius, shadow, typography } from "@/app/styleTokens";

import { CREDIT_PACKAGES, type CreditPackage } from "./pricingData";

/**
 * 추가 크레딧 충전 탭 — 기존 CreditModal(768px 이상 중앙 모달)의 패키지 목록·결제 요약
 * 레이아웃을 페이지 안 탭 콘텐츠로 옮긴 것. 패키지 값(CREDIT_PACKAGES)은 그대로 재사용한다.
 *
 * 데스크톱은 패키지 목록과 결제 요약을 나란히(flex-row), 모바일은 세로로(flex-col)
 * 배치한다 — 훅 없이 CSS(md: 브레이크포인트)만으로 처리한다.
 */
export function TopUpTab({ onConfirmPurchase }: { onConfirmPurchase: (pkg: CreditPackage) => void }) {
  const [selected, setSelected] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);
  const pkg = CREDIT_PACKAGES[selected];

  return (
    <div className="flex flex-col gap-5">
      {/* 안내 문구는 상위(PricingPage)의 PageHeader 설명이 이미 말하므로 여기서는 반복하지 않는다. */}
      <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-stretch">
        {/* 패키지 선택 — 라디오형 선택 카드는 Button 과 역할이 달라(고르고 나서도 눌린 채로
            남는다) 공용 버튼으로 합치지 않고 그대로 둔다. */}
        <div className="w-full md:flex-1 flex flex-col gap-2.5 min-w-0">
          {CREDIT_PACKAGES.map((p, i) => {
            const isSelected = i === selected;
            const isHovered = hoveredIndex === i;
            const isPressed = pressedIndex === i;
            // Selected(파란 채움)와 Hover/Pressed(선택 전 "고를 수 있다" 신호)는 다른
            // 개념이라 색을 겹치지 않게 한다 — 선택되지 않은 행에서만 hover/pressed 톤을 준다.
            const borderColor = isSelected ? color.border.focus : isPressed ? "#c7d2fe" : isHovered ? "#d6ddf0" : color.border.default;
            const background = isSelected ? "#f0f5ff" : isPressed ? "#f1f5f9" : isHovered ? "#f8fafc" : "white";
            return (
              <button
                key={p.amount}
                type="button"
                onClick={() => setSelected(i)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => { setHoveredIndex((v) => (v === i ? null : v)); setPressedIndex((v) => (v === i ? null : v)); }}
                onMouseDown={() => setPressedIndex(i)}
                onMouseUp={() => setPressedIndex((v) => (v === i ? null : v))}
                aria-pressed={isSelected}
                className="w-full flex items-center justify-between px-4 py-3.5 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff]"
                style={{
                  borderRadius: radius.control,
                  border: `1.5px solid ${borderColor}`,
                  background,
                  transition: `background-color ${motion.fast}, border-color ${motion.fast}`,
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="size-6 rounded-full flex items-center justify-center shrink-0" style={{ background: color.surface.accent }}>
                    <span style={{ ...f, fontWeight: 700, fontSize: 9, color: color.brand }}>C</span>
                  </div>
                  <span style={{ ...f, fontWeight: 700, fontSize: 15, color: color.text.primary, letterSpacing: "-0.4px" }}>
                    {p.amount.toLocaleString()} <span style={{ fontWeight: 500, fontSize: 13, color: color.text.secondary }}>크레딧</span>
                  </span>
                </div>
                <span style={{ ...f, fontWeight: 600, fontSize: 14, color: "#334155" }}>{p.price}</span>
              </button>
            );
          })}
        </div>

        {/* 결제 요약 — items-stretch로 왼쪽 패키지 목록과 높이를 맞추고, 내용은 위/버튼은
            아래로 고정(justify-between)해 카드가 늘어나도 가운데에 빈 공간만 남지 않게 한다. */}
        <div
          className="w-full md:w-[280px] md:shrink-0 flex flex-col justify-between gap-4 bg-white border p-5"
          style={{ borderColor: color.border.default, borderRadius: radius.card, boxShadow: shadow.card }}
        >
          <div className="flex flex-col gap-4">
            <p style={typography.sectionTitle}>결제 요약</p>
            <div className="flex items-center justify-between gap-3">
              <span style={typography.caption}>충전 크레딧</span>
              <span style={{ ...f, fontWeight: 700, fontSize: 14, color: color.text.primary }}>{pkg.amount.toLocaleString()} 크레딧</span>
            </div>
            <div className="flex items-center justify-between gap-3">
              <span style={typography.caption}>결제 금액</span>
              <span style={{ ...f, fontWeight: 700, fontSize: 16, color: color.text.primary }}>{pkg.price}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="h-px bg-[#f1f5f9]" />
            <p style={{ ...typography.caption, lineHeight: 1.5 }}>월 구독과 별도로 구매하는 일회성 충전입니다.</p>
            <Button variant="primary" size="lg" fullWidth onClick={() => onConfirmPurchase(pkg)}>
              {pkg.price} 충전하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
