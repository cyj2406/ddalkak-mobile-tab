import { useState } from "react";

import { Button } from "@/app/components/common/Button";
import { color, f, radius, shadow, typography } from "@/app/styleTokens";

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
  const pkg = CREDIT_PACKAGES[selected];

  return (
    <div className="flex flex-col gap-5">
      <p style={typography.body}>크레딧이 더 필요할 때 원하는 만큼 추가로 충전하세요.</p>

      <div className="flex flex-col md:flex-row gap-5 md:gap-6 items-start">
        {/* 패키지 선택 — 라디오형 선택 카드는 Button 과 역할이 달라(고르고 나서도 눌린 채로
            남는다) 공용 버튼으로 합치지 않고 그대로 둔다. */}
        <div className="w-full md:flex-1 flex flex-col gap-2.5 min-w-0">
          {CREDIT_PACKAGES.map((p, i) => {
            const isSelected = i === selected;
            return (
              <button
                key={p.amount}
                type="button"
                onClick={() => setSelected(i)}
                aria-pressed={isSelected}
                className="w-full flex items-center justify-between px-4 py-3.5 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff]"
                style={{
                  borderRadius: radius.control,
                  border: `1.5px solid ${isSelected ? color.border.focus : color.border.default}`,
                  background: isSelected ? "#f0f5ff" : "white",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div className="size-6 rounded-full flex items-center justify-center shrink-0" style={{ background: color.surface.accent }}>
                    <span style={{ ...f, fontWeight: 700, fontSize: 9, color: color.brand }}>C</span>
                  </div>
                  <span style={{ ...f, fontWeight: 700, fontSize: 15, color: color.text.primary, letterSpacing: "-0.4px" }}>
                    {p.amount.toLocaleString()} <span style={{ fontWeight: 500, fontSize: 13, color: color.text.faint }}>크레딧</span>
                  </span>
                </div>
                <span style={{ ...f, fontWeight: 600, fontSize: 14, color: "#334155" }}>{p.price}</span>
              </button>
            );
          })}
        </div>

        {/* 결제 요약 */}
        <div
          className="w-full md:w-[280px] md:shrink-0 flex flex-col gap-4 bg-white border p-5"
          style={{ borderColor: color.border.default, borderRadius: radius.card, boxShadow: shadow.card }}
        >
          <p style={typography.sectionTitle}>결제 요약</p>
          <div className="flex items-center justify-between gap-3">
            <span style={typography.caption}>충전 크레딧</span>
            <span style={{ ...f, fontWeight: 700, fontSize: 14, color: color.text.primary }}>{pkg.amount.toLocaleString()} 크레딧</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span style={typography.caption}>결제 금액</span>
            <span style={{ ...f, fontWeight: 700, fontSize: 16, color: color.text.primary }}>{pkg.price}</span>
          </div>

          <div className="h-px bg-[#f1f5f9]" />

          <p style={{ ...typography.caption, lineHeight: 1.5 }}>월 구독과 별도로 구매하는 일회성 충전입니다.</p>

          <Button variant="primary" size="lg" fullWidth onClick={() => onConfirmPurchase(pkg)}>
            {pkg.price} 충전하기
          </Button>
        </div>
      </div>
    </div>
  );
}
