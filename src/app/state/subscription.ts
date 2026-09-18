import { useSyncExternalStore } from "react";

import { getCreditBalance, setCreditBalance, subscribeCreditBalance } from "./creditBalance";
import { PLAN_EXAMPLES, type PlanExample, type CreditPackage } from "@/app/components/pricing/pricingData";

/**
 * 구독·결제(전부 mock) — 프로필/설정/요금제 화면이 공유하는 단일 스토어.
 *
 * 이 앱에는 실제 결제 백엔드가 없다. 여기서 "결제 완료"는 전부 로컬 상태만 바꾸는
 * 시뮬레이션이다 — 실제 카드 승인·환불·정기결제는 어디서도 일어나지 않는다.
 *
 * 크레딧은 두 버킷으로 나눈다: 구독으로 매달 지급되는 monthlyCredits*, 별도로
 * 구매한 topupCredits*. `creditBalance.ts`(총액, AI 에디터가 실시간으로 차감하는
 * 값)는 건드리지 않고 그대로 단일 총액 출처로 둔다 — 이 스토어는 그 총액이 밖에서
 * (AI 편집 등으로) 줄어들 때 "구독분부터 소진" 규칙으로 두 버킷에 나눠 반영한다.
 *
 * 아직 구독/충전을 한 번도 하지 않은 "미구독" 상태에서는 기존 총액을 구독분/충전분
 * 으로 임의로 나누지 않는다(이전 크레딧 페이지 작업에서 정한 원칙 유지) — 첫 구독
 * 또는 첫 충전이 실제로 일어나는 순간에만 그 시점의 총액을 "충전분"으로 간주해
 * 버킷 추적을 시작한다(그 전까지 쌓여 있던 잔액의 출처를 알 수 없어 가장 가까운
 * 근사치로 처리하는 것 — docs/design-system.md 에 기록).
 */

export type SubscriptionStatus = "none" | "active" | "cancel_scheduled" | "expired";

/**
 * 화면에 필요한 표시용 결제수단 정보 — 카드번호 전체·CVC·billingKey는 여기 없다.
 * 실제 연동 시 서버가 내려주는 필드에 맞춰 이름만 조정하면 된다(billingKey/customerKey
 * 같은 민감 정보는 서버에만 두고 프론트 상태에는 절대 넣지 않는다).
 */
export interface PaymentMethod {
  /** 서버가 부여하는 결제수단 식별자 — 마스킹 번호만으로는 같은 카드사·같은 끝자리
   *  카드가 여러 장일 수 있어(가족카드 등) 이걸로 구분한다. */
  paymentMethodId: string;
  brand: string;
  last4: string;
  /** 다음 정기결제에 실제로 쓰이는 결제수단인지. 목록에서 정확히 하나만 true다. */
  isDefault: boolean;
  status: "active";
}

/** Toss Payments 카드 등록/인증 결과로 받는 표시용 정보 — paymentMethodId·isDefault는
 *  Toss가 아니라 이 앱이 목록에 추가하면서 부여한다(addPaymentMethod 참고). */
export interface RegisteredCardInfo {
  brand: string;
  last4: string;
}

export interface PaymentRecord {
  id: string;
  dateLabel: string;
  type: "subscription" | "topup" | "refund";
  label: string;
  amount: number;
  status: "완료" | "실패" | "취소" | "환불" | "부분환불";
  /** 결제 대행사(토스페이먼츠)가 제공하는 실제 영수증 URL. 없으면 "영수증 보기"를 아예
   *  보여주지 않는다 — 가짜 링크를 만들어 열 수 있게 하지 않는다. */
  receiptUrl?: string | null;
}

export interface SubscriptionSnapshot {
  status: SubscriptionStatus;
  planId: string | null;
  /** "active"일 때만 의미 있음 */
  nextBillingDateLabel: string | null;
  /** "cancel_scheduled" | "expired"일 때만 의미 있음 — 이용 종료(됐)일 */
  endDateLabel: string | null;
  monthlyCreditsGranted: number | null;
  monthlyCreditsRemaining: number | null;
  /** 구독/충전을 한 번도 안 했으면 null("—" 표시), 이후로는 항상 숫자 */
  topupCreditsRemaining: number | null;
  /** 다음 정기결제에 쓰이는 기본 결제수단 — paymentMethods.find(isDefault)와 항상 같다.
   *  기존 화면들이 이미 이 단일 필드를 읽고 있어서(메인 카드 요약 등) 계속 유지한다. */
  paymentMethod: PaymentMethod | null;
  /** Toss Payments에 등록된 전체 결제수단 목록 — "결제 수단 변경" 모달이 보여준다. */
  paymentMethods: PaymentMethod[];
  paymentHistory: PaymentRecord[];
  lastPaymentFailed: boolean;
  cancelReason?: string;
}

function pad2(n: number) {
  return String(n).padStart(2, "0");
}
function formatDate(d: Date) {
  return `${d.getFullYear()}.${pad2(d.getMonth() + 1)}.${pad2(d.getDate())}`;
}
/** 다음 결제일 = 한 달 뒤 같은 날짜. 그 날짜가 다음 달에 없으면(예: 1/31 → 2월)
 *  말일로 청구한다는 정책 초안에 맞춰 그 달의 마지막 날로 clamp한다 — 이전에는
 *  Date.setMonth()의 기본 오버플로 동작(2월이 없으면 3월로 밀림) 그대로였다. */
function addOneMonth(d: Date): Date {
  const day = d.getDate();
  const firstOfNextMonth = new Date(d.getFullYear(), d.getMonth() + 1, 1);
  const daysInNextMonth = new Date(firstOfNextMonth.getFullYear(), firstOfNextMonth.getMonth() + 1, 0).getDate();
  firstOfNextMonth.setDate(Math.min(day, daysInNextMonth));
  return firstOfNextMonth;
}
/** "₩19,900" → 19900 */
function parseWon(priceLabel: string): number {
  return Number(priceLabel.replace(/[^0-9]/g, "")) || 0;
}
let seq = 0;
function nextId() {
  seq += 1;
  return `pay-${Date.now()}-${seq}`;
}

/**
 * 토스페이먼츠 연동 결과 타입 — "카드 등록"과 "결제 승인"은 실제 Toss에서도 서로 다른
 * API(빌링키 발급 authorizations/card vs 승인 confirm)라 결과 타입도 분리해 둔다.
 * 셋 다 사용자가 창을 닫아 취소한 경우("cancelled")를 실패("failure")와 구분한다 —
 * 취소는 오류가 아니라서 화면에서 에러로 과장하지 않기 위해서다.
 */
export type TossCardResult = { status: "success"; card: RegisteredCardInfo } | { status: "failure" } | { status: "cancelled" };
export type TossChargeResult = { status: "success" } | { status: "failure" } | { status: "cancelled" };

/**
 * [개발용] 다음 호출 결과를 강제로 지정 — 실제 서버 콜백을 재현할 수 없는 프로토타입에서
 * "실패"·"사용자 취소"·"조회 실패" 화면을 확인하려면 결정적으로 트리거할 방법이 필요하다.
 * 기본은 전부 "success"(정상 흐름)이고, ?devpanel=1 UI에서만 바꿀 수 있다.
 */
export interface DevForcedOutcomes {
  cardRegistration: "success" | "failure" | "cancelled";
  firstPayment: "success" | "failure" | "cancelled";
  topupPayment: "success" | "failure" | "cancelled";
  cancelSubscription: "success" | "failure";
  historyFetch: "success" | "failure";
  paymentMethodFetch: "success" | "failure";
  paymentMethodSwitch: "success" | "failure";
}
let devForced: DevForcedOutcomes = {
  cardRegistration: "success",
  firstPayment: "success",
  topupPayment: "success",
  cancelSubscription: "success",
  historyFetch: "success",
  paymentMethodFetch: "success",
  paymentMethodSwitch: "success",
};
export function getDevForcedOutcomes(): DevForcedOutcomes {
  return devForced;
}
export function setDevForcedOutcome<K extends keyof DevForcedOutcomes>(key: K, value: DevForcedOutcomes[K]): void {
  devForced = { ...devForced, [key]: value };
  listeners.forEach((l) => l()); // devpanel UI가 현재 선택값을 리렌더할 수 있게
}

/** 개발 단계 전용 — 실제 Toss Payments 응답이 오기 전까지 여러 카드 등록 시나리오를
 *  확인하기 위한 목업 풀. "+ 새 카드 등록"을 누를 때마다 다음 카드를 돌려주고,
 *  풀을 다 쓰면 임의의 끝자리로 새 카드를 계속 만든다 — 카드사를 화면에서 미리
 *  고르게 하지 않으면서도(금지 사항) 여러 장 등록 흐름을 테스트할 수 있게 한다. */
const DEV_MOCK_CARD_POOL: RegisteredCardInfo[] = [
  { brand: "신한카드", last4: "1234" },
  { brand: "현대카드", last4: "5678" },
  { brand: "국민카드", last4: "9012" },
];
let devMockCardPoolIndex = 0;
function nextDevMockCard(): RegisteredCardInfo {
  if (devMockCardPoolIndex < DEV_MOCK_CARD_POOL.length) {
    return DEV_MOCK_CARD_POOL[devMockCardPoolIndex++];
  }
  const last4 = String(1000 + Math.floor(Math.random() * 9000));
  return { brand: "새 카드", last4 };
}

/**
 * [Toss Payments 연결 지점] 카드 등록/인증 — 실제로는 여기서 Toss Payments 결제창
 * (카드 등록·빌링키 발급) SDK를 열고 그 결과를 받아야 한다. 아직 연동 전이라 실제
 * 요청은 보내지 않는다 — API Key/Secret도 추가하지 않는다. 연동 시 이 함수 내부만
 * 실제 SDK 호출로 바꾸면 되고, 호출부는 그대로 둔다(Promise<TossCardResult> 계약 유지).
 *
 * 이 함수는 "카드사+마스킹번호"만 돌려준다 — paymentMethodId 발급·목록 추가·기본
 * 결제수단 지정은 이 함수의 책임이 아니다(addPaymentMethod가 한다). Toss에서도
 * "카드 인증"과 "그 결과를 우리 시스템 목록에 반영"은 다른 책임이라 그대로 나눴다.
 */
export function registerCardWithTossPayments(): Promise<TossCardResult> {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      const outcome = devForced.cardRegistration;
      resolve(outcome === "success" ? { status: "success", card: nextDevMockCard() } : { status: outcome });
    }, 700);
  });
}

/**
 * [Toss Payments 연결 지점] 구독 첫 결제 승인 — 카드 등록(빌링키 발급)과는 별개의
 * API 호출이다. 카드 등록이 성공해도 이 승인이 실패하면 구독은 활성화되지 않는다
 * (subscribeToPlan을 부르지 않는다) — "첫 결제 성공 확인 후에만 구독 활성화" 원칙.
 */
export function chargeFirstPaymentWithTossPayments(_plan: PlanExample): Promise<TossChargeResult> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ status: devForced.firstPayment }), 700);
  });
}

/**
 * [Toss Payments 연결 지점] 크레딧 추가 충전 결제 — 구독 빌링키와 무관한 일회성 결제
 * 창이다(구독용으로 등록된 카드를 임의로 재사용한다고 가정하지 않는다).
 */
export function chargeTopupWithTossPayments(_pkg: CreditPackage): Promise<TossChargeResult> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ status: devForced.topupPayment }), 700);
  });
}

/**
 * [서버 연결 지점] 구독 해지 — 다음 자동결제 중단은 서버(스케줄러)의 책임이라, 클라이언트가
 * "해지됨"으로 바로 표시하지 않고 서버 확인을 거친 뒤에만 scheduleCancel()로 반영한다.
 * 실패하면 기존 구독 상태를 그대로 두고 재시도할 수 있어야 한다.
 */
export function cancelSubscriptionWithServer(_reason?: string): Promise<{ success: boolean }> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ success: devForced.cancelSubscription === "success" }), 500);
  });
}

/** [서버 연결 지점] 결제 내역 조회 — 지금은 로컬 상태를 그대로 반환하지만, 실제로는
 *  이 자리에서 서버 API를 불러야 한다. 실패 시 화면이 "조회 실패" 상태를 보여줄 수
 *  있도록 reject 한다. */
export function fetchPaymentHistory(): Promise<PaymentRecord[]> {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (devForced.historyFetch === "success") resolve(state.paymentHistory);
      else reject(new Error("결제 내역을 불러오지 못했습니다."));
    }, 500);
  });
}

/** [서버 연결 지점] 기본 결제수단 조회 — "카드가 없다"(정상적으로 조회했는데 등록된
 *  카드가 없음)와 "조회 자체에 실패했다"(네트워크/서버 오류)는 서로 다른 화면이어야
 *  한다. 지금은 로컬 상태를 그대로 반환하지만, 실제로는 이 자리에서 서버 API를
 *  불러야 한다. 구독 및 결제 관리 페이지의 "결제 수단" 카드 요약이 이걸 쓴다. */
export function fetchPaymentMethod(): Promise<PaymentMethod | null> {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (devForced.paymentMethodFetch === "success") resolve(state.paymentMethod);
      else reject(new Error("결제 수단 정보를 불러오지 못했습니다."));
    }, 500);
  });
}

/** [서버 연결 지점] 등록된 결제수단 전체 목록 조회 — "결제 수단 변경" 모달이 연다.
 *  기본 결제수단 조회와 같은 실패 토글(paymentMethodFetch)을 공유한다(실제로도 같은
 *  백엔드 리소스를 조회하는 것이라 자연스럽다). */
export function fetchPaymentMethods(): Promise<PaymentMethod[]> {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (devForced.paymentMethodFetch === "success") resolve(state.paymentMethods);
      else reject(new Error("결제 수단 목록을 불러오지 못했습니다."));
    }, 500);
  });
}

/** 다음 결제 예정일 미리보기 — 구독 확인 다이얼로그에서 "아직 구독 전"인 시점에 보여줄 값.
 *  실제 확정된 다음 결제일(subscription.nextBillingDateLabel)과는 별개로, 오늘 구독하면
 *  언제 처음 청구되는지 보여주는 용도다. */
export function previewNextBillingDateLabel(): string {
  return formatDate(addOneMonth(new Date()));
}

let state: SubscriptionSnapshot = {
  status: "none",
  planId: null,
  nextBillingDateLabel: null,
  endDateLabel: null,
  monthlyCreditsGranted: null,
  monthlyCreditsRemaining: null,
  topupCreditsRemaining: null,
  paymentMethod: null,
  paymentMethods: [],
  paymentHistory: [],
  lastPaymentFailed: false,
};

let paymentMethodSeq = 0;
function nextPaymentMethodId() {
  paymentMethodSeq += 1;
  return `pm-${Date.now()}-${paymentMethodSeq}`;
}

const listeners = new Set<() => void>();
function set(patch: Partial<SubscriptionSnapshot>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}
function notifyOnly() {
  listeners.forEach((l) => l());
}

export function getSubscription(): SubscriptionSnapshot {
  return state;
}
export function subscribeSubscription(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
export function useSubscription(): SubscriptionSnapshot {
  return useSyncExternalStore(subscribeSubscription, getSubscription, getSubscription);
}

/** 총액(구독분+충전분)을 creditBalance 쪽에도 반영한다 — 단일 출처 유지. */
function pushTotalToCreditBalance() {
  const total = (state.monthlyCreditsRemaining ?? 0) + (state.topupCreditsRemaining ?? 0);
  setCreditBalance(total);
}

/** 첫 구독/충전 시점에만 1회 — 그 전까지 쌓인 총액을 "충전분"의 시작값으로 간주한다. */
function ensureBreakdownStarted() {
  if (state.topupCreditsRemaining === null) {
    state = { ...state, topupCreditsRemaining: getCreditBalance() };
  }
}

/** AI 에디터 등 이 스토어를 모르는 곳에서 총액이 바뀌면(크레딧 사용) 구독분부터 소진해 맞춘다. */
subscribeCreditBalance(() => {
  if (state.topupCreditsRemaining === null) return; // 버킷 추적 시작 전이면 할 일 없음
  const newTotal = getCreditBalance();
  const trackedTotal = (state.monthlyCreditsRemaining ?? 0) + (state.topupCreditsRemaining ?? 0);
  const delta = newTotal - trackedTotal;
  if (delta === 0) return;
  if (delta < 0) {
    let spend = -delta;
    const fromMonthly = Math.min(state.monthlyCreditsRemaining ?? 0, spend);
    const monthlyRemaining = (state.monthlyCreditsRemaining ?? 0) - fromMonthly;
    spend -= fromMonthly;
    const topupRemaining = Math.max(0, (state.topupCreditsRemaining ?? 0) - spend);
    state = { ...state, monthlyCreditsRemaining: monthlyRemaining, topupCreditsRemaining: topupRemaining };
  } else {
    // 외부에서 총액이 늘어난 드문 경우(환불 등) — 충전분으로 귀속
    state = { ...state, topupCreditsRemaining: (state.topupCreditsRemaining ?? 0) + delta };
  }
  notifyOnly();
});

export function findPlan(planId: string | null): PlanExample | null {
  return PLAN_EXAMPLES.find((p) => p.id === planId) ?? null;
}

/** 구독하기 / 요금제 변경 — 둘 다 "지금부터 이 플랜, 크레딧 즉시 지급"으로 동일하게 처리한다. */
export function subscribeToPlan(planId: string): void {
  const plan = findPlan(planId);
  if (!plan) return;
  ensureBreakdownStarted();
  const next = addOneMonth(new Date());
  set({
    status: "active",
    planId,
    nextBillingDateLabel: formatDate(next),
    endDateLabel: null,
    monthlyCreditsGranted: plan.monthlyCredits,
    monthlyCreditsRemaining: plan.monthlyCredits,
    lastPaymentFailed: false,
    cancelReason: undefined,
    paymentHistory: [
      { id: nextId(), dateLabel: formatDate(new Date()), type: "subscription", label: `${plan.name} 월 구독`, amount: parseWon(plan.priceLabel), status: "완료" },
      ...state.paymentHistory,
    ],
  });
  pushTotalToCreditBalance();
}

export function addTopup(pkg: CreditPackage): void {
  ensureBreakdownStarted();
  set({
    topupCreditsRemaining: (state.topupCreditsRemaining ?? 0) + pkg.amount,
    paymentHistory: [
      { id: nextId(), dateLabel: formatDate(new Date()), type: "topup", label: "크레딧 추가 충전", amount: parseWon(pkg.price), status: "완료" },
      ...state.paymentHistory,
    ],
  });
  pushTotalToCreditBalance();
}

/** 구독 해지 예약 — 다음 결제일까지는 그대로 쓸 수 있다(즉시 정지 아님). */
export function scheduleCancel(reason?: string): void {
  if (state.status !== "active") return;
  set({ status: "cancel_scheduled", endDateLabel: state.nextBillingDateLabel, cancelReason: reason });
}

export function undoCancel(): void {
  if (state.status !== "cancel_scheduled") return;
  set({ status: "active", endDateLabel: null, cancelReason: undefined });
}

/** [개발용] 이용 기간 만료 시뮬레이션 — 실제로는 다음 결제일이 지나야 일어나는 일. */
export function expireSubscriptionForDev(): void {
  if (state.status !== "cancel_scheduled") return;
  set({
    status: "expired",
    monthlyCreditsRemaining: 0,
    nextBillingDateLabel: null,
  });
  pushTotalToCreditBalance();
}

/**
 * 새 결제수단을 목록에 추가한다 — "새 카드 등록"과 "결제수단 변경(기본 지정)"은 서로
 * 다른 동작이라 분리했다: 등록은 여기서 목록에 추가만 하고, `makeDefault`가 없으면
 * 기존 기본 결제수단을 바꾸지 않는다(목록이 비어 있던 경우엔 등록되는 즉시 유일한
 * 카드이므로 자동으로 기본이 된다). 기존 카드를 지우지 않는다 — 새 카드 등록이
 * 기존 등록 카드를 대체하지 않는다.
 *
 * 미납(lastPaymentFailed)은 여기서 건드리지 않는다 — "카드를 등록/변경했다"와 "밀린
 * 결제가 해결됐다"는 다른 사실이라, 카드 등록만으로 결제 실패 상태를 지우지 않는다
 * (재청구가 실제로 성공해야 지워진다 — 이번 범위에서는 그 재청구 흐름 자체는 정책
 * 미정이라 구현하지 않았다).
 */
export function addPaymentMethod(card: RegisteredCardInfo, opts: { makeDefault: boolean }): PaymentMethod {
  const makeDefault = opts.makeDefault || state.paymentMethods.length === 0;
  const newMethod: PaymentMethod = {
    paymentMethodId: nextPaymentMethodId(),
    brand: card.brand,
    last4: card.last4,
    isDefault: makeDefault,
    status: "active",
  };
  const nextList = makeDefault
    ? [...state.paymentMethods.map((m) => ({ ...m, isDefault: false })), newMethod]
    : [...state.paymentMethods, newMethod];
  set({ paymentMethods: nextList, paymentMethod: nextList.find((m) => m.isDefault) ?? null });
  return newMethod;
}

/**
 * [서버 연결 지점] 이미 등록된 결제수단 중 하나를 다음 정기결제의 기본 결제수단으로
 * 지정 — 실제로는 서버가 이 결제수단이 여전히 유효한지 확인한 뒤 승인해야 한다.
 * 성공 응답을 받은 뒤에만 commitDefaultPaymentMethod로 로컬 상태에 반영한다(그 전엔
 * 화면에 아직 기존 기본 결제수단이 보여야 한다).
 */
export function switchDefaultPaymentMethod(_paymentMethodId: string): Promise<{ success: boolean }> {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve({ success: devForced.paymentMethodSwitch === "success" }), 600);
  });
}

/** switchDefaultPaymentMethod가 성공을 확인해준 뒤에만 부른다 — 로컬 상태에 실제로 반영한다. */
export function commitDefaultPaymentMethod(paymentMethodId: string): void {
  const nextList = state.paymentMethods.map((m) => ({ ...m, isDefault: m.paymentMethodId === paymentMethodId }));
  set({ paymentMethods: nextList, paymentMethod: nextList.find((m) => m.isDefault) ?? null });
}

/** [개발용] 정기결제 실패 상태 재현 — 실제로는 결제 대행사 콜백에서 오는 상태다. */
export function simulatePaymentFailureForDev(): void {
  if (!state.planId) return;
  const plan = findPlan(state.planId);
  set({
    lastPaymentFailed: true,
    paymentHistory: [
      { id: nextId(), dateLabel: formatDate(new Date()), type: "subscription", label: `${plan?.name ?? "구독"} 월 구독`, amount: plan ? parseWon(plan.priceLabel) : 0, status: "실패" },
      ...state.paymentHistory,
    ],
  });
}

/** [개발용] 전체 초기화 — 미구독 상태로 되돌린다(크레딧 총액은 건드리지 않음). */
export function resetSubscriptionForDev(): void {
  set({
    status: "none", planId: null, nextBillingDateLabel: null, endDateLabel: null,
    monthlyCreditsGranted: null, monthlyCreditsRemaining: null, lastPaymentFailed: false, cancelReason: undefined,
  });
}
