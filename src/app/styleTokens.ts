/**
 * App.tsx 와 홈 화면 하위 컴포넌트가 함께 쓰는 최소 스타일 상수.
 * 인라인 스타일 기반 화면들이 공통으로 참조하는 값이라 한 곳에서만 관리한다.
 *
 * 이 파일이 화면 대부분을 그리는 "진짜" 디자인 토큰이다. src/styles/theme.css 의
 * shadcn 계열 CSS 변수(--primary, --secondary, --accent, --muted, --popover, --card,
 * --destructive, --input, --sidebar-* 등)와 그 값을 쓰는 components/ui/* 프리미티브
 * 대부분(button/card/dialog/badge/select/...)은 실제로 어디서도 import 되지 않는다
 * (2026-09-17 재확인: 코드 전체 검색 기준).
 *
 * 단, 전부는 아니다 — 아래 세 곳은 theme.css 의 CSS 변수를 지금도 실제로 쓰고 있다.
 *   1) components/ui/tooltip.tsx → IconTooltip.tsx 를 통해 TabletMiniEditor·
 *      ContextToolbar·TabletEditorSidebar·TabletEditorShell 네 곳에서 쓰인다.
 *      --tooltip/--tooltip-foreground/--tooltip-border/--tooltip-shadow/--tooltip-padding
 *      는 이 툴팁 전용으로 설계된 값이라 계속 유지해야 한다.
 *   2) components/common/ScrollableChips.tsx 의 "solid" variant(크레딧 사용 내역
 *      필터 등)가 Tailwind의 bg-foreground/text-background/border-border/text-foreground
 *      클래스를 그대로 쓴다 — --foreground/--background/--border 참조.
 *   3) components/viewer/MobileEditorNotice.tsx 가 border-border, bg-brand/[0.06] 를 쓴다.
 * 그 외 --primary/--secondary/--muted/--accent/--popover/--card/--destructive/--input,
 * --sidebar 계열, --radius 계열(sm/md/lg/xl 계산값)은 미사용으로 확인됐지만, 당장 지울
 * 이유가 없어 theme.css 에 그대로 남겨 뒀다(docs/design-system.md 참고).
 *
 * 값을 추가할 때 theme.css 에도 비슷한 이름의 변수가 있는지 먼저 확인하고, 있다면
 * 여기서 그 값을 가져다 쓰거나(중복 정의 방지) 왜 다른 값이 필요한지 주석으로 남길 것.
 *
 * 자세한 사용법·근거는 docs/design-system.md 참고.
 */

export const f = { fontFamily: "'Pretendard Variable', Pretendard, 'Noto Sans KR', sans-serif" };

/**
 * 색상 — 값이 아니라 역할로 고른다(text-primary, surface, border 식).
 * 브랜드 블루(#4f7bff)는 theme.css 의 --brand 와 같은 값이다(단일 출처 유지).
 *
 * [2026-09-17 브랜드 블루 정리] 서비스 안에서 같은 "브랜드 채움/강조" 역할로 #2563eb 를
 * 따로 쓰던 곳(HomeSearch, SearchResultsScreen, RequestHelpScreen, TaskTemplateScreen,
 * TemplateResultCard, RecommendedCarousel, App.tsx 홈 히어로의 "딸깍" 글자색)을 이 토큰
 * 값으로 통일했다. hover 짝인 #1d4ed8 도 color.brandHover 로 통일했다.
 * 랜딩페이지(xn--il0b54k.net)의 CTA 블루(#155dfc)는 랜딩 전용이라 그대로 두었다 —
 * docs/design-system.md 의 "서비스/랜딩 색상 적용 경계" 참고.
 */
export const color = {
  brand: "#4f7bff",
  /**
   * 브랜드 블루 위에 hover 할 때 쓰는 어두운 톤. Button.tsx의 primary variant뿐 아니라
   * 홈 화면의 검색/CTA 버튼(HomeSearch, SearchResultsScreen, RequestHelpScreen)도
   * 같은 "브랜드 채움 위 hover" 역할로 이 값을 쓴다 — 세 곳 이상 반복되는 역할이라
   * 토큰으로 뺐다(2026-09-17 브랜드 블루 정리에서 #2563eb/#1d4ed8 를 이 값으로 통일).
   */
  brandHover: "#3d68e8",
  text: {
    /** 제목, 강조 숫자 등 가장 진한 텍스트 */
    primary: "#0a0a0a",
    /** 라벨, 설명 등 보조 텍스트 — 기존 SUBTITLE_COLOR 와 동일 값 */
    secondary: "#64748b",
    /** 더 옅은 보조 텍스트(카드 라벨 등) */
    muted: "#9ca3af",
    /** 캡션류에 쓰던 또 다른 회색 — muted 와 톤이 미묘하게 달라 그대로 유지 */
    faint: "#737373",
  },
  surface: {
    default: "#ffffff",
    /** 카드 안 보조 박스, 새로고침 버튼 배경 등 */
    subtle: "#f8fafc",
    /** 브랜드 톤 옅은 배경 — 선택된 패키지/배지 등 */
    accent: "#eff6ff",
  },
  border: {
    /** 가장 흔한 테두리 — 랜딩페이지 실측값과도 동일(xn--il0b54k.net 비교 결과) */
    default: "#e2e8f0",
    /** 배지류 전용으로 쓰던 테두리. default 와 통합할지는 후속 과제 */
    subtle: "#dfe6ed",
    /** 선택/포커스 상태 테두리 — brand 와 동일 값 */
    focus: "#4f7bff",
  },
} as const;

/** 기존 코드 다수가 참조하므로 이름은 유지하고 값만 color.text.secondary 로 통일한다. */
export const SUBTITLE_COLOR = color.text.secondary;

/**
 * 타이포그래피 — 요금제/크레딧 페이지와 프로필·설정 진입점에서 실제 쓰던 조합을 그대로 이름 붙였다.
 * 랜딩페이지의 헤드라인 스케일(52px/800 등)은 포함하지 않는다 — 마케팅 페이지 전용 규칙이라
 * 서비스 화면에 그대로 가져오지 않기로 했다(docs/design-system.md "용도별 규칙" 참고).
 */
export const typography = {
  /** 화면 최상단 제목. 예: "요금제 및 크레딧", "크레딧 사용 내역" */
  pageTitle: { ...f, fontWeight: 700, fontSize: 24, color: color.text.primary, letterSpacing: "-0.8px" },
  /** 카드/섹션 제목. 예: 플랜 카드 이름, 프로필 팝오버 이름 */
  sectionTitle: { ...f, fontWeight: 700, fontSize: 17, color: color.text.primary, letterSpacing: "-0.4px" },
  /** 본문 — 안내 문구 등 */
  body: { ...f, fontWeight: 500, fontSize: 13.5, color: "#4b5262", letterSpacing: "-0.2px" },
  /** 보조 설명 — 라벨 아래 짧은 설명 */
  caption: { ...f, fontWeight: 500, fontSize: 12, color: color.text.muted, letterSpacing: "-0.2px" },
  /** 버튼 라벨(lg 사이즈 기준 — md 는 컴포넌트가 자체 축소) */
  button: { ...f, fontWeight: 700, fontSize: 14, letterSpacing: "-0.3px" },
} as const;

/**
 * 라운드 — 요금제 페이지 기준 값. 버튼·입력창 등 "조작 가능한 요소"는 control 하나로
 * 통일돼 있었고(14px), 카드는 강조도에 따라 두 단계(16 / 20)로 이미 나뉘어 있었다.
 */
export const radius = {
  control: 14,
  card: 16,
  cardEmphasis: 20,
  full: 9999,
} as const;

/** 그림자 — 화면에서 실제 쓰던 4가지 그대로. 랜딩페이지처럼 크고 부드러운 그림자는 쓰지 않는다. */
export const shadow = {
  card: "0px 1px 3px rgba(0,0,0,0.05)",
  cardEmphasis: "0px 2px 10px rgba(0,0,0,0.05)",
  popover: "0px 8px 32px rgba(0,0,0,0.14)",
  modal: "0px 24px 64px rgba(16,24,40,0.24)",
} as const;

/** 버튼 높이 — 요금제 페이지의 주요 CTA는 48, 프로필/설정의 보조 액션은 44. */
export const controlHeight = {
  md: 44,
  lg: 48,
} as const;

/** 페이지 콘텐츠 최대 폭 — 홈 화면의 --home-container(theme.css) 데스크톱 상한과 같은 값. */
export const pageContainerWidth = 1120;
