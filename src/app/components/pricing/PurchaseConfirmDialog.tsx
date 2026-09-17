import { useEffect } from "react";

import { Button } from "@/app/components/common/Button";
import { color, f, radius, shadow, typography } from "@/app/styleTokens";

import type { PurchaseIntent } from "./pricingData";

/**
 * 구독하기 / 요금제 변경 / 크레딧 충전 버튼을 눌렀을 때 뜨는 확인 UI.
 *
 * 기존 CreditModal 의 중앙 모달 톤(둥근 카드·backdrop blur·ESC 닫기)을 그대로 따르되,
 * 실제 결제를 진행하지 않는다는 문구를 반드시 보여준다. "확인"을 눌러도 잔액·구독
 * 상태는 바뀌지 않고 그냥 닫힌다 — 화면 전체에서 실제 결제 성공 처리는 어디에도 없다.
 */
export function PurchaseConfirmDialog({ intent, onClose }: { intent: PurchaseIntent; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const actionLabel = intent.kind === "subscription" ? "구독" : "충전";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.35)", backdropFilter: "blur(6px)" }}
    >
      <div
        role="dialog"
        aria-label="결제 미리보기"
        onClick={(e) => e.stopPropagation()}
        className="w-full flex flex-col"
        style={{ maxWidth: 400, background: "white", borderRadius: radius.cardEmphasis, boxShadow: shadow.modal }}
      >
        <div className="px-6 pt-6 pb-1">
          <span style={{ ...f, fontWeight: 700, fontSize: 18, color: color.text.primary, letterSpacing: "-0.5px" }}>
            {actionLabel} 확인
          </span>
        </div>

        <div className="px-6 pt-4 pb-2 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-3">
            <span style={typography.caption}>상품</span>
            <span style={{ ...f, fontWeight: 700, fontSize: 14, color: color.text.primary, letterSpacing: "-0.3px" }}>{intent.title}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span style={typography.caption}>
              {intent.kind === "subscription" ? "매월 제공 크레딧" : "충전 크레딧"}
            </span>
            <span style={{ ...f, fontWeight: 700, fontSize: 14, color: color.text.primary, letterSpacing: "-0.3px" }}>
              {intent.credits.toLocaleString()} 크레딧
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span style={typography.caption}>결제 금액</span>
            <span style={{ ...f, fontWeight: 700, fontSize: 16, color: color.text.primary, letterSpacing: "-0.4px" }}>
              {intent.priceLabel}
              {intent.periodLabel ? ` / ${intent.periodLabel}` : ""}
            </span>
          </div>
        </div>

        <div className="mx-6 mt-2 mb-1 px-3.5 py-3" style={{ background: color.surface.subtle, border: `1px solid ${color.border.default}`, borderRadius: 12 }}>
          <p style={{ ...typography.caption, color: "#6b7280", lineHeight: 1.5 }}>
            결제 미리보기이며 실제 결제는 진행되지 않습니다.
          </p>
        </div>

        <div className="flex gap-2.5 px-6 pt-4 pb-6">
          <Button variant="secondary" size="lg" fullWidth onClick={onClose}>닫기</Button>
          <Button variant="primary" size="lg" fullWidth onClick={onClose}>확인</Button>
        </div>
      </div>
    </div>
  );
}
