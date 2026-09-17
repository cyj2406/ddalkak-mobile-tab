/**
 * 요금제 및 크레딧 페이지 — 예시 데이터.
 *
 * 이 파일의 값(요금제명·가격·제공 크레딧·혜택, 구독자 예시 스냅샷)은 전부 UI 검토용
 * 예시다. 실제 요금 정책(가격, 제공량, 유효기간, 이월·소진 규칙)은 아직 정해지지
 * 않았으므로, 화면에는 반드시 PRICING_EXAMPLE_NOTICE 문구를 함께 노출한다.
 *
 * CREDIT_PACKAGES 만 예외다 — 기존 크레딧 충전 모달(App.tsx 의 CreditModal/
 * CreditBottomSheet)이 쓰던 값을 그대로 옮겨 온 것이라 가격·제공량을 바꾸지 않았다.
 * 다만 그 모달이 붙여 두었던 "BEST" 배지는 여기 옮기며 뺐다 — 어떤 패키지가 왜
 * 추천인지 근거(크레딧당 단가 비교, 실제 판매 데이터 등)가 코드 어디에도 없는
 * 임의 표시였다.
 */

export const PRICING_EXAMPLE_NOTICE = "요금제 정보는 예시입니다.";

/** 추가 크레딧 충전 패키지 — 기존 CreditModal/CreditBottomSheet 의 CREDIT_PACKAGES 를 그대로 이전. */
export const CREDIT_PACKAGES = [
  { amount: 1000, price: "₩1,000" },
  { amount: 5000, price: "₩5,000" },
  { amount: 10000, price: "₩10,000" },
  { amount: 50000, price: "₩50,000" },
  { amount: 100000, price: "₩100,000" },
] as const;

export type CreditPackage = (typeof CREDIT_PACKAGES)[number];

/** [예시] 월 구독 요금제 — 요금제명·가격·제공량·혜택 전부 미정. UI 검토용 placeholder. */
export interface PlanExample {
  id: string;
  name: string;
  priceLabel: string;
  monthlyCredits: number;
  perks: string[];
}

export const PLAN_EXAMPLES: PlanExample[] = [
  {
    id: "light",
    name: "라이트 플랜",
    priceLabel: "₩9,900",
    monthlyCredits: 3000,
    perks: ["매월 크레딧 자동 지급", "기본 작업 도구 이용"],
  },
  {
    id: "standard",
    name: "스탠다드 플랜",
    priceLabel: "₩19,900",
    monthlyCredits: 7000,
    perks: ["매월 크레딧 자동 지급", "기본 작업 도구 이용", "우선 처리 큐"],
  },
  {
    id: "pro",
    name: "프로 플랜",
    priceLabel: "₩39,900",
    monthlyCredits: 15000,
    perks: ["매월 크레딧 자동 지급", "기본 작업 도구 이용", "우선 처리 큐", "고급 편집 기능"],
  },
];

/**
 * "내 이용 현황"의 구독 상세 구분(월 제공분/추가 충전분/다음 지급일)은 실제 잔액을
 * 임의로 나눠 만들 수 없어, 개발 확인용 예시 상태로만 보여준다(?devpanel=1 로만 노출).
 * 기본 화면(unsubscribed)은 항상 실제 공유 잔액을 그대로 쓴다.
 */
export type UsageExampleState = "unsubscribed" | "subscribed" | "monthly-exhausted" | "fully-exhausted";

export interface UsageExampleSnapshot {
  /** null 이면 "미구독" — PLAN_EXAMPLES 중 하나를 가리킨다. */
  planId: string | null;
  monthlyGrant: number | null;
  monthlyRemaining: number | null;
  topupRemaining: number | null;
  /** 화면 표시용 문자열. 실제 정책 미정이므로 날짜 계산 없이 예시 값을 그대로 적는다. */
  nextBillingDateLabel: string | null;
}

export const USAGE_EXAMPLE_SNAPSHOTS: Record<UsageExampleState, UsageExampleSnapshot> = {
  unsubscribed: {
    planId: null,
    monthlyGrant: null,
    monthlyRemaining: null,
    topupRemaining: null,
    nextBillingDateLabel: null,
  },
  subscribed: {
    planId: "standard",
    monthlyGrant: 7000,
    monthlyRemaining: 4200,
    topupRemaining: 1200,
    nextBillingDateLabel: "2026. 10. 15.",
  },
  "monthly-exhausted": {
    planId: "standard",
    monthlyGrant: 7000,
    monthlyRemaining: 0,
    topupRemaining: 800,
    nextBillingDateLabel: "2026. 10. 15.",
  },
  "fully-exhausted": {
    planId: "standard",
    monthlyGrant: 7000,
    monthlyRemaining: 0,
    topupRemaining: 0,
    nextBillingDateLabel: "2026. 10. 15.",
  },
};

/** 구독/충전 버튼을 눌렀을 때 여는 "결제 미리보기" 확인 UI에 넘기는 값 — 실제 결제로 이어지지 않는다. */
export interface PurchaseIntent {
  kind: "subscription" | "topup";
  title: string;
  credits: number;
  priceLabel: string;
  /** 구독일 때만 — "매월" 같은 결제 주기 표기 */
  periodLabel?: string;
}

export const USAGE_EXAMPLE_LABELS: Record<UsageExampleState, string> = {
  unsubscribed: "미구독(기본)",
  subscribed: "구독 중",
  "monthly-exhausted": "월 제공분 소진 · 추가 잔액 있음",
  "fully-exhausted": "전체 소진",
};
