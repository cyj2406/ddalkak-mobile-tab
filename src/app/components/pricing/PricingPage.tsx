import { useRef, useState } from "react";

import { PageContainer, PageHeader } from "@/app/components/common/PageContainer";
import { showToast } from "@/app/components/common/Toast";
import { Tabs, tabPanelProps, type TabItem } from "@/app/components/common/Tabs";
import {
  addPaymentMethod, addTopup, chargeFirstPaymentWithTossPayments, chargeTopupWithTossPayments,
  commitDefaultPaymentMethod, findPlan, previewNextBillingDateLabel, registerCardWithTossPayments,
  subscribeToPlan, switchDefaultPaymentMethod, useSubscription,
} from "@/app/state/subscription";

import { PurchasePolicyAccordion } from "./PolicyAccordion";
import { PurchaseConfirmDialog, type PurchaseConfirmResult } from "./PurchaseConfirmDialog";
import { SubscriptionTab } from "./SubscriptionTab";
import { TopUpTab } from "./TopUpTab";
import { SUBSCRIPTION_POLICY_ITEMS, TOPUP_POLICY_ITEMS, type CreditPackage, type PlanExample, type PurchaseIntent } from "./pricingData";

/**
 * 요금제 및 크레딧 — 상품 비교·구매 "전용" 페이지(프로필 > 요금제 및 크레딧).
 * 관리 기능(잔액·내역·구독·결제 수단·해지)은 여기 없다 — 전부 설정
 * (크레딧·사용 내역 / 구독·결제 탭)으로 옮겼다. 이 페이지는 "무엇을 살지 고르고
 * 결제 확인까지" 만 다룬다 — 그래서 큰 잔액 카드나 결제 수단 관리, 해지가 본문에
 * 길게 나열되지 않는다.
 */
export type PricingTab = "subscription" | "topup";

const TABS: TabItem[] = [
  { value: "subscription", label: "월 구독 요금제" },
  { value: "topup", label: "추가 크레딧 충전" },
];

export function PricingPage({
  initialTab = "subscription",
  onSubscribed,
}: {
  initialTab?: PricingTab;
  /** 구독하기/요금제 변경 결제가 확정된 직후(로컬 mock) 호출 — 구독 완료 화면으로
   *  이동시키는 데 쓴다. isPlanChange로 "신규 시작"과 "기존 변경"을 구분해 전달한다. */
  onSubscribed: (result: { isPlanChange: boolean }) => void;
}) {
  const [tab, setTab] = useState<PricingTab>(initialTab);
  const [confirmIntent, setConfirmIntent] = useState<PurchaseIntent | null>(null);
  const policyAccordionRef = useRef<HTMLDivElement>(null);

  /** 구독 확인창의 "구독·해지·환불 정책 보기" — 새 페이지/모달을 만들지 않고, 이미
   *  이 페이지에 있는 "결제 전에 확인해 주세요" 정책 아코디언으로 스크롤한다. 확인창을
   *  먼저 닫고(겹쳐서 뜬 채로 배경이 스크롤되면 어색하다) 다음 프레임에 스크롤한다. */
  const handleViewPolicy = () => {
    setConfirmIntent(null);
    requestAnimationFrame(() => {
      policyAccordionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const subscription = useSubscription();
  const currentPlanId = subscription.status === "active" || subscription.status === "cancel_scheduled" ? subscription.planId : null;

  const handleSelectPlan = (plan: PlanExample) => {
    if (currentPlanId === plan.id) return;
    setConfirmIntent({
      kind: "subscription", title: plan.name, credits: plan.monthlyCredits, priceLabel: plan.priceLabel,
      periodLabel: "매월", nextBillingDateLabel: previewNextBillingDateLabel(), planId: plan.id,
      isPlanChange: currentPlanId !== null,
    });
  };

  const handleConfirmTopUp = (pkg: CreditPackage) => {
    setConfirmIntent({ kind: "topup", title: `${pkg.amount.toLocaleString()} 크레딧 패키지`, credits: pkg.amount, priceLabel: pkg.price, package: pkg });
  };

  /**
   * 구독 시작/변경 — 카드 등록(빌링키 발급)과 첫 결제 승인은 서로 다른 서버 응답이다.
   * 카드가 없으면 확인창의 CTA를 누른 이 시점에 곧바로 Toss 카드 등록·인증 흐름으로
   * 연결한다(성공해도 아직 구독 아님), 그다음 첫 결제를 승인받아야만 subscribeToPlan()
   * 으로 실제 구독을 활성화한다 — 카드 등록 성공 자체를 구독/결제 성공으로 취급하지
   * 않는다. 확인창에서 기본 카드가 아닌 다른(이미 등록됐거나 방금 새로 등록한) 카드를
   * 골랐으면(selectedPaymentMethodId) 실제 청구 전에 그 카드를 이 구독의 기본
   * 결제수단으로 먼저 확정한다 — "카드를 고르는 것"과 "그 카드로 실제 청구·커밋하는
   * 것"을 분리해 confirm 버튼을 누르기 전까지는 아무것도 바뀌지 않는다. 이 앱엔 구독이
   * 하나뿐이라(다중 구독 없음) 다른 구독에 영향을 줄 여지 자체가 없다. isPlanChange는
   * 확인 시점(currentPlanId 유무)에 미리 정해 두고 완료 콜백까지 그대로 들고 간다.
   */
  const handleConfirmSubscription = async (planId: string, isPlanChange: boolean, selectedPaymentMethodId?: string): Promise<PurchaseConfirmResult> => {
    const plan = findPlan(planId);
    if (!plan) return { success: false, message: "요금제 정보를 찾을 수 없습니다." };

    if (!subscription.paymentMethod) {
      const cardResult = await registerCardWithTossPayments();
      if (cardResult.status === "cancelled") return { success: false };
      if (cardResult.status === "failure") return { success: false, message: "카드 등록에 실패했습니다. 다시 시도해주세요." };
      addPaymentMethod(cardResult.card, { makeDefault: true });
    } else if (selectedPaymentMethodId && selectedPaymentMethodId !== subscription.paymentMethod.paymentMethodId) {
      const switchResult = await switchDefaultPaymentMethod(selectedPaymentMethodId);
      if (!switchResult.success) return { success: false, message: "결제 수단을 변경하지 못했습니다. 다시 시도해주세요." };
      commitDefaultPaymentMethod(selectedPaymentMethodId);
    }

    const chargeResult = await chargeFirstPaymentWithTossPayments(plan);
    if (chargeResult.status === "cancelled") return { success: false };
    if (chargeResult.status === "failure") return { success: false, message: "결제에 실패했습니다. 다시 시도해주세요." };

    subscribeToPlan(planId);
    setConfirmIntent(null);
    onSubscribed({ isPlanChange });
    return { success: true };
  };

  const handleConfirmTopup = async (pkg: CreditPackage): Promise<PurchaseConfirmResult> => {
    const chargeResult = await chargeTopupWithTossPayments(pkg);
    if (chargeResult.status === "cancelled") return { success: false };
    if (chargeResult.status === "failure") return { success: false, message: "결제에 실패했습니다. 다시 시도해주세요." };

    addTopup(pkg);
    setConfirmIntent(null);
    showToast("크레딧이 충전되었습니다");
    return { success: true };
  };

  const handleConfirm = (selectedPaymentMethodId?: string): Promise<PurchaseConfirmResult> => {
    if (!confirmIntent) return Promise.resolve({ success: false });
    if (confirmIntent.kind === "subscription" && confirmIntent.planId) return handleConfirmSubscription(confirmIntent.planId, !!confirmIntent.isPlanChange, selectedPaymentMethodId);
    if (confirmIntent.kind === "topup" && confirmIntent.package) return handleConfirmTopup(confirmIntent.package);
    return Promise.resolve({ success: false });
  };

  return (
    <>
      <PageContainer>
        <PageHeader title="요금제 및 크레딧" description="필요한 요금제와 크레딧을 골라 구매하세요." />

        <Tabs items={TABS} value={tab} onChange={(v) => setTab(v as PricingTab)} />

        {/* gap-14(56px) — 카드/패키지 목록과 "결제(구매) 전에 확인해 주세요" 사이 간격.
            이 정책 안내는 pricing 선택의 핵심 UI가 아니라 결제 전 보조 정보라, 카드
            묶음과 같은 그룹처럼 붙어 보이지 않도록 충분한 section 간격(48~64px 범위)을
            둔다 — 이 div의 자식은 정확히 둘(카드 영역, 정책 아코디언)뿐이라 gap 하나로
            그 사이 간격만 관리해도 다른 곳과 중복 합산되지 않는다. */}
        <div {...tabPanelProps(tab)} className="flex flex-col gap-14">
          {tab === "subscription" ? (
            <>
              <SubscriptionTab currentPlanId={currentPlanId} onSelectPlan={handleSelectPlan} />
              <div ref={policyAccordionRef}>
                <PurchasePolicyAccordion title="결제 전에 확인해 주세요" items={SUBSCRIPTION_POLICY_ITEMS} />
              </div>
            </>
          ) : (
            <>
              <TopUpTab onConfirmPurchase={handleConfirmTopUp} />
              <PurchasePolicyAccordion title="구매 전에 확인해 주세요" items={TOPUP_POLICY_ITEMS} />
            </>
          )}
        </div>
      </PageContainer>

      {confirmIntent && (
        <PurchaseConfirmDialog
          intent={confirmIntent}
          currentPaymentMethod={subscription.paymentMethod}
          onClose={() => setConfirmIntent(null)}
          onConfirm={handleConfirm}
          onViewPolicy={confirmIntent.kind === "subscription" ? handleViewPolicy : undefined}
        />
      )}
    </>
  );
}

export default PricingPage;
