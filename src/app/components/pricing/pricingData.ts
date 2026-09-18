/**
 * 요금제 및 크레딧 페이지 — 예시 데이터.
 *
 * 이 파일의 값(요금제명·가격·제공 크레딧·혜택)은 전부 UI 검토용 예시다. 실제 요금
 * 정책(가격, 제공량, 유효기간, 이월·소진 규칙)은 아직 정해지지 않았다 — 화면 전용
 * 고지 문구("요금제 정보는 예시입니다.")는 2026-09-18에 제거했지만(문구·위계 정리
 * 작업), 이 파일의 값 자체가 확정된 것은 아니다. 새 값을 추가하거나 기존 값을
 * "진짜"로 착각해 다른 화면에 그대로 노출하지 않는다.
 *
 * CREDIT_PACKAGES 만 예외다 — 기존 크레딧 충전 모달(App.tsx 의 CreditModal/
 * CreditBottomSheet)이 쓰던 값을 그대로 옮겨 온 것이라 가격·제공량을 바꾸지 않았다.
 *
 * 구독/결제 상태(구독중·해지예정·결제수단·결제내역)는 이 파일이 아니라
 * `src/app/state/subscription.ts` 가 관리한다 — 예전에는 여기 있던 UsageExampleState류
 * 개발용 가짜 스냅샷을 실제로 동작하는 구독 스토어로 대체했다(2026-09-17).
 */

/** 추가 크레딧 충전 패키지 — 기존 CreditModal/CreditBottomSheet 의 CREDIT_PACKAGES 를 그대로 이전. */
export const CREDIT_PACKAGES = [
  { amount: 1000, price: "₩1,000" },
  { amount: 5000, price: "₩5,000" },
  { amount: 10000, price: "₩10,000" },
  { amount: 50000, price: "₩50,000" },
  { amount: 100000, price: "₩100,000" },
] as const;

export type CreditPackage = (typeof CREDIT_PACKAGES)[number];

/**
 * [예시] 월 구독 요금제 — 요금제명·가격·설명·혜택은 이용 안내 시안 기준.
 * monthlyCredits 는 아직 원가 검토 전이라 null(미정)로 둔다 — 임의의 숫자를
 * 만들어 넣지 않고, 화면에는 "원가 검토 후 확정"으로 그대로 노출한다.
 */
export interface PlanExample {
  id: string;
  name: string;
  /** 카드 상단, 이름 아래 한 줄 설명 (예: "필요할 때 가볍게 사용하는 분") */
  description: string;
  priceLabel: string;
  monthlyCredits: number | null;
  perks: string[];
  /** true면 카드에 "추천" 배지를 단다. 최대 1개 플랜에만 둔다. */
  recommended?: boolean;
}

/**
 * 4단계 구성(라이트/스탠다드/프로/맥스) — 월 구독·기업용 이용 안내 시안 기준
 * (2026-09-17). "Free"는 플랜 카드가 아니라 미구독 상태 자체를 뜻해 여기 목록에
 * 넣지 않는다.
 */
export const PLAN_EXAMPLES: PlanExample[] = [
  {
    id: "light",
    name: "라이트",
    description: "필요할 때 가볍게 사용하는 분",
    priceLabel: "₩9,900",
    monthlyCredits: null,
    perks: ["문서·콘텐츠 제작 시작", "기본 월 크레딧 제공 예정", "크레딧 범위 내 기능 이용"],
  },
  {
    id: "standard",
    name: "스탠다드",
    description: "매주 문서와 콘텐츠를 만드는 분",
    priceLabel: "₩29,900",
    monthlyCredits: null,
    perks: ["일상 업무와 콘텐츠 제작", "라이트보다 넉넉한 제공량", "크레딧 범위 내 기능 이용"],
    recommended: true,
  },
  {
    id: "pro",
    name: "프로",
    description: "여러 작업을 꾸준히 진행하는 분",
    priceLabel: "₩49,900",
    monthlyCredits: null,
    perks: ["문서·발표·홍보물 집중 제작", "스탠다드보다 높은 제공량", "크레딧 범위 내 기능 이용"],
  },
  {
    id: "max",
    name: "맥스",
    description: "많은 결과물을 제작하는 분",
    priceLabel: "₩79,900",
    monthlyCredits: null,
    perks: ["많은 작업량을 위한 플랜", "4개 플랜 중 가장 높은 제공량", "크레딧 범위 내 기능 이용"],
  },
];

/** 구독/충전 버튼을 눌렀을 때 여는 "결제 미리보기" 확인 UI에 넘기는 값 — 실제 결제로 이어지지 않는다. */
export interface PurchaseIntent {
  kind: "subscription" | "topup";
  title: string;
  /** 구독 플랜의 월 제공 크레딧이 아직 미정(원가 검토 전)이면 null. */
  credits: number | null;
  priceLabel: string;
  /** 구독일 때만 — "매월" 같은 결제 주기 표기 */
  periodLabel?: string;
  /** 구독일 때만 — 오늘 구독하면 처음 언제 청구될지 미리보기(확정된 결제일이 아니다) */
  nextBillingDateLabel?: string;
  /** 구독일 때만 — 확인 시 어느 플랜을 적용할지 */
  planId?: string;
  /** 충전일 때만 — 확인 시 적용할 패키지 */
  package?: CreditPackage;
  /**
   * 구독일 때만 — 이미 유료 구독 중인 상태에서 다른 플랜으로 "변경"하는 것이면 true,
   * 미구독 상태에서 처음 "시작"하는 것이면 false. 모의 결제 로직(오늘 즉시 결제)은
   * 두 경우가 같지만, 화면 문구(제목·버튼)는 같은 일로 뭉뚱그리지 않는다 — 신규 구독과
   * 요금제 변경은 사용자에게 다른 의미이기 때문이다.
   */
  isPlanChange?: boolean;
}

/** 구매 확인 화면 아래 정책 아코디언 항목 — 실제로 확정됐거나(자동결제·해지 문구는
 *  기존 화면에서 이미 쓰던 문구를 그대로 재사용) 아직 미정임을 그대로 밝힌 항목만 둔다.
 *  가격·제공량처럼 검토 전인 값을 여기서 임의로 확정 짓지 않는다. */
export interface PolicyItem {
  id: string;
  title: string;
  body: string;
}

export const SUBSCRIPTION_POLICY_ITEMS: PolicyItem[] = [
  { id: "billing", title: "자동결제", body: "매월 같은 날짜에 등록된 결제 수단으로 자동 결제됩니다. 카드 등록·결제 승인은 토스페이먼츠를 통해 처리됩니다. 결제일 정확한 계산 규칙(예: 그 날짜가 없는 달의 처리)과 결제 실패 시 재시도 횟수·간격은 확정 전입니다." },
  { id: "credits", title: "구독 크레딧 지급·소멸", body: "매월 제공되는 구독 크레딧 수량은 원가 검토 후 확정됩니다. 구독 크레딧은 결제 주기마다 새로 지급되며 다음 주기로 이월되지 않을 예정이나, 정확한 소멸 시점(달력 월말 기준인지 결제 주기 종료 기준인지)은 아직 확정되지 않았습니다. 추가로 충전한 크레딧은 이 소멸 대상이 아닙니다." },
  { id: "cancel", title: "해지", body: "구독을 해지하면 다음 결제일부터 자동 결제가 진행되지 않습니다. 해지 시점까지 남은 이용 기간이 있다면 그 기간이 끝날 때까지 계속 이용할 수 있고, 해지 신청만으로 이미 지급된 크레딧을 즉시 회수하지 않습니다." },
  { id: "no-auto-extra", title: "추가 청구 없음", body: "크레딧이 부족해도 확인 없이 자동으로 추가 결제되지 않습니다." },
];

export const TOPUP_POLICY_ITEMS: PolicyItem[] = [
  { id: "onetime", title: "일회성 결제", body: "추가 충전은 구독과 별도로 청구되는 일회성 결제입니다. 카드 등록·결제 승인은 토스페이먼츠를 통해 처리됩니다." },
  { id: "expiry", title: "유효기간", body: "추가 충전 크레딧은 구독 크레딧과 달리 매월 소멸되지 않을 예정이나, 정확한 유효기간·이월 규칙은 아직 확정되지 않았습니다." },
  { id: "refund", title: "환불", body: "환불 가능 조건과 금액은 아직 확정되지 않았습니다. 환불이 필요하면 고객센터로 문의해주세요." },
];
