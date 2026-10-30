/**
 * 홈 온보딩 단계 정의 — 문구·대상·위치는 여기서만 고친다.
 *
 * 요소를 훑는 투어가 아니라 "내 상황이면 어디로 가나"를 갈라 주는 3단계다(2026-10-30 4 → 3단계).
 * 순서는 페이지 순서 그대로(검색창 → 무료 편집기 줄 → 작업별로 시작하기) — 화면이 위아래로 튀지 않고 한 방향으로만 내려간다.
 * 인기 템플릿(썸네일이 설명을 대신함)·요청 도우미(검색창 힌트로 따로 안내)·내 작업(사이드바에 이름이 그대로 있고,
 * 첫 방문자에겐 비어 있다 — 빈 화면 안내로 대신함)은 일부러 단계에 넣지 않았다.
 *
 * target  : data-onboarding 속성 선택자. 배열이면 모두를 감싸는 영역을 밝힌다.
 * scroll  : "center" = 화면 가운데로 · "top" = 대상 맨 위가 스크롤 영역 위에서 24px 아래 오도록 · "none" = 스크롤 안 함
 * placement: 말풍선을 먼저 놓아 볼 쪽. 자리가 없으면 반대쪽 → 옆 → 화면 아래 순으로 다시 계산한다.
 * mobile  : 사이드바가 접히는 폭(1200px 미만)에서 덮어쓸 값(지금은 쓰는 단계 없음 — 필요할 때 넣는다).
 */
export type Placement = "top" | "bottom" | "left" | "right";

export interface OnboardingStepView {
  target: string | string[];
  title: string;
  body: string;
  scroll: "center" | "top" | "none";
  placement: Placement;
  /** true 면 대상 맨 위부터 화면 아래 끝까지 밝히고 아래쪽을 흐리게(fade) 처리한다. 말풍선은 흐려지는 띠 위, 오른쪽에 둔다 */
  extendToViewportBottom?: boolean;
}

export interface OnboardingStep extends OnboardingStepView {
  id: "search" | "editor-row" | "task-grid";
  mobile?: Partial<OnboardingStepView>;
}

const sel = (name: string) => `[data-onboarding="${name}"]`;

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    id: "search",
    target: sel("search"),
    // 적은 내용에 맞는 템플릿·서식을 찾아 보여 주는 동작 — '만들어 준다'로 읽히지 않게, '검색'이라는 말 없이.
    // 예시는 입력칸 placeholder 가 타이핑으로 보여 주므로 본문에는 따로 들지 않는다.
    title: "한 줄이면 찾아드려요",
    body: "보고서·카드뉴스·홍보 이미지까지, 적은 대로 바로 고쳐 쓸 수 있는 걸 보여드려요.",
    scroll: "center",
    placement: "bottom",
  },
  {
    id: "editor-row",
    target: sel("editor-row"),
    // 이 단계 동안만 섹션 라벨의 '무료'가 브랜드 배지로 강조된다(EditorQuickLinks — onboardingStore.stepId)
    // 편집기 안의 AI 기능은 유료 — '전부 무료'가 아니라 무료 범위를 '열고 고치는 것'으로 한정한다
    title: "열고 고치는 건 무료예요",
    body: "워드·한글·PPT·엑셀을 설치 없이 웹에서 바로 편집하세요.",
    scroll: "center",
    placement: "bottom",
  },
  {
    // 마지막 단계 — 끝나면 오버레이만 사라지고 이 섹션이 눈앞에 펼쳐진 채 남는다(끝나는 자리 = 고를 수 있는 자리)
    id: "task-grid",
    target: sel("task-grid-title"),
    title: "뭘 쓸지 애매하면 여기서 고르세요",
    body: "카드뉴스·보고서·발표자료처럼 만들 작업을 고르면, 맞는 템플릿만 보여드려요.",
    scroll: "top",
    placement: "bottom",
    // 섹션이 화면보다 길다 — 제목부터 화면 아래 끝까지 밝히고, 아래쪽은 잘린 선 대신 서서히 흐려지게
    extendToViewportBottom: true,
  },
];

/** 1단계 동안 검색창 placeholder 에 차례로 타이핑해 보여 줄 예시 — 문서·이미지·카드뉴스·안내문처럼 서로 다른 종류가 섞이게 */
export const TYPING_EXAMPLES = ["주간 업무 보고서", "카페 홍보 이미지", "신제품 소개 카드뉴스", "행사 안내문"];

/** 요청 도우미 힌트 — 검색창이 비어 있고 포커스된 채 이만큼 지나면 한 번 띄운다 */
export const HELPER_HINT_DELAY_MS = 3000;
export const HELPER_HINT_TEXT = { before: "뭘 쓸지 모르겠다면 ", link: "요청 도우미", after: "를 써보세요" };

/** 홈이 다 그려진 뒤 한 박자 쉬고 띄운다 */
export const START_DELAY_MS = 600;

export function resolveStep(step: OnboardingStep, isDesktop: boolean): OnboardingStepView {
  const base: OnboardingStepView = { target: step.target, title: step.title, body: step.body, scroll: step.scroll, placement: step.placement, extendToViewportBottom: step.extendToViewportBottom };
  return isDesktop || !step.mobile ? base : { ...base, ...step.mobile };
}
