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
    /** 입력칸 placeholder — muted 보다 한 톤 연하게 둬 입력 전/후가 갈린다(요청 작성 폼) */
    placeholder: "#b0b8c4",
  },
  surface: {
    default: "#ffffff",
    /** 카드 안 보조 박스, 새로고침 버튼 배경 등 */
    subtle: "#f8fafc",
    /** 브랜드 톤 옅은 배경 — 선택된 패키지/배지 등 */
    accent: "#eff6ff",
    /** 중립 hover 배경 — 배경 위 항목에 마우스를 올렸을 때(홈 에디터 아이콘 줄 등). Badge neutral 배경과 같은 값 */
    hover: "#f1f5f9",
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
  /**
   * 입력 폼 글자(요청 작성 폼) — 크기는 원래 화면(dev 요청 작성 도우미) 비율 그대로 14px(2026-10-16, 16px로 키웠다가 되돌림).
   * 라벨·고른 값은 600, 타이핑한 글자는 500. 입력 전/후 구분은 placeholder 색(한 톤 연한 회색)이 맡는다.
   */
  formLabel: { ...f, fontWeight: 600, fontSize: 14, color: color.text.primary },
  /** 고른 값(셀렉트) — 라벨과 같은 크기·굵기 */
  formSelectValue: { ...f, fontWeight: 600, fontSize: 14, color: color.text.primary },
  /** 타이핑한 글자 — 보통 굵기 */
  formValue: { ...f, fontWeight: 500, fontSize: 14, color: color.text.primary },
  formPlaceholder: { ...f, fontWeight: 500, fontSize: 14, color: color.text.placeholder },
} as const;

/**
 * 홈 화면 섹션 제목("템플릿으로 시작하기", "AI에게 맡기기") 전용 — 위 typography 항목들과
 * 달리 PC/모바일 크기가 달라야 해서(PC 22px·행간 30px / 모바일 20px·행간 28px, 둘 다
 * fontWeight 600 — 2026-09-18에 24/32·700에서 한 단계 낮췄다) 반응형 className과 고정
 * 스타일을 나눠 내보낸다. 두 섹션 제목이 항상 같은 값을 쓰도록 이 상수 하나만 참조한다 —
 * 각자 값을 따로 적지 않는다. `wide` 브레이크포인트(1200px)는 홈 히어로 타이틀
 * (theme.css --hero-title-size)과 같은 PC 기준이다. Pretendard Variable은 45~920 전
 * 구간을 지원하는 가변 폰트라(design-system.md "Pretendard 800/900 확인 결과" 참고,
 * 600은 그보다 훨씬 안전한 굵기) 합성 볼드 걱정 없이 600을 그대로 쓴다.
 */
export const homeSectionTitleClassName = "text-[20px] wide:text-[22px] leading-[28px] wide:leading-[30px]";
export const homeSectionTitleStyle = { ...f, fontWeight: 700, letterSpacing: "-0.5px", color: color.text.primary } as const;

/**
 * 홈 섹션 제목 아래 보조문구("고르고 바로 편집하면 끝" 등, 2026-10-16) — 제목(700·primary)보다
 * 한 톤 연한 `color.text.secondary`, 보통 굵기. 섹션 제목은 이때 600 → 700(bold)으로 올렸다.
 * 제목과 보조문구 사이 4px, 보조문구 아래 → 섹션 내용은 기존 제목 아래 간격(24px) 그대로.
 */
export const homeSectionSubtitleClassName = "text-[14px] wide:text-[15px] leading-[20px] wide:leading-[22px]";
export const homeSectionSubtitleStyle = { ...f, fontWeight: 400, letterSpacing: "-0.2px", color: color.text.secondary } as const;

/**
 * 홈 "AI에게 맡기기" 그룹 제목("이미지", "문서", "발표자료"...) 전용(2026-09-18) — 섹션
 * 제목(위)보다 한 단계 낮은 위계라 크기를 더 낮췄다(PC 18px·행간 26px / 모바일 16px·
 * 행간 24px, 둘 다 600). `typography.sectionTitle`(17px/700, 플랜 카드·프로필 팝오버 등
 * 다른 화면에서도 쓰는 공용 토큰)을 그대로 손대지 않고 홈 전용으로 새로 뺐다 — 값을
 * 바꾸면 그 다른 화면들까지 흔들린다. 색은 `color.text.primary`(순검정, 제목·숫자용)
 * 대신 이미 "본문"용으로 쓰던 진한 중성~쿨 그레이(`typography.body.color`, #4b5262)를
 * 재사용해 primary보다 한 단계 낮은 무게를 낸다 — 새 회색 값을 만들지 않는다.
 */
export const taskGroupTitleClassName = "text-[16px] wide:text-[18px] leading-[24px] wide:leading-[26px]";
export const taskGroupTitleStyle = { ...f, fontWeight: 600, letterSpacing: "-0.3px", color: typography.body.color } as const;

/**
 * 홈 상단 에디터 진입 아이콘 줄(2026-10-16, 2026-10-22 재구성) — 크기·간격은 여기서만 정한다.
 * 구조: [── 무료 편집기 바로 열기 ──] 아래 [이미지 워드 한글 PPT 엑셀 영상] | [레이어 분리](2026-10-29 전체 템플릿 제거).
 * 세로 합계는 이전 줄과 같은 130px로 고정한다(아래 섹션이 밀리지 않게):
 *   captionLineHeight 16 + captionGap 10 + (pad 6 + icon 64 + space 8 + labelLineHeight 20 + pad 6) = 130.
 *   icon        : 아이콘 칸 크기. 모든 항목이 같다.
 *   item        : 항목(=클릭 영역·hover 배경) 폭. 아이콘 좌우 안쪽 여백 (item − icon) / 2 = pad 와 같다.
 *   pad         : 항목 안쪽 여백(상하좌우 동일) — hover 배경이 아이콘·이름을 고르게 감싼다.
 *   space       : 아이콘 ↔ 이름, 항목 ↔ 항목 간격(같은 값 하나).
 *   groupGap    : 그룹 ↔ 구분선 간격(구분선 양옆). space 보다 넓다.
 *   captionGap  : "무료 편집기 바로 열기" 라벨 ↔ 아이콘 줄 — space 보다 넓다.
 *   모서리는 radius.card(hover 배경 16)를 그대로 쓴다.
 *   badgeTop/badgeRight: NEW 배지를 아이콘 칸 우상단 기준으로 고정하는 거리.
 */
export const editorEntry = {
  icon: 64,
  item: 76,
  pad: 6,
  space: 8,
  groupGap: 16,
  captionGap: 10,
  /** 이름 글자 — 500·본문 회색, 크기는 좁은 칸에 맞춰 14px 고정 */
  labelSize: 14,
  labelLineHeight: 20,
  /** 설명 라벨 — typography.caption(12px·500) 크기에 color.text.secondary */
  captionLineHeight: 16,
  dividerHeight: 48,
  badgeTop: -6,
  badgeRight: -12,
  /** 검색창 ↔ 아이콘 줄 — 부모 세로 간격(24px, App HomeScreen)에 더하는 값. 합 48px */
  searchGapExtra: 24,
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

/**
 * 입력 넘침 규칙 — 공용 InputField 의 세 variant 가 쓰는 줄 수·폭·개수(2026-10-16).
 *   multiline  : 높이는 내용 길이로만 — minRows 줄(22×3 + 24 + 2 = 92px)에서 시작해 maxRows 줄(202px)까지 늘고, 넘치면 칸 안 세로 스크롤
 *                (그때만 스크롤바). 포커스 여부와 무관(들어오고 나가도 높이 그대로). 접기·"더 보기"·글자 수 제한 없음.
 *   singleline : 줄바꿈·말줄임 없이 가로 스크롤. 포커스가 없을 때 넘치면 오른쪽 끝 fadeWidth 폭 페이드.
 *   list       : 항목 visibleCount 개까지 보이고 나머지는 "+N개 더"로 접는다.
 * lineHeight·paddingY 는 글자 1줄이 48px 상자(controlHeight.lg) 가운데 오도록 맞춘 값 — (48 − 2 − 22) / 2 = 12.
 */
export const fieldOverflow = {
  lineHeight: 22,
  paddingY: 12,
  multiline: { minRows: 3, maxRows: 8 },
  /** 주제처럼 제목 성격의 서술 — 1줄에서 시작해 3줄(22×3 + 24 + 2 = 92px)에서 멈추고 세로 스크롤. 더 길게 쓰면 스크롤이 길이 신호가 된다 */
  title: { minRows: 1, maxRows: 3 },
  singleline: { fadeWidth: 32 },
  list: { visibleCount: 3 },
} as const;

/** 페이지 콘텐츠 최대 폭 — 홈 화면의 --home-container(theme.css) 데스크톱 상한과 같은 값. */
export const pageContainerWidth = 1120;

/**
 * Motion — Interaction Layer 전체가 공유하는 유일한 두 값. 컴포넌트마다 임의의
 * duration/easing을 새로 정하지 않고 이 둘 중 하나를 쓴다.
 *   fast:   hover/pressed/tab·chip 전환 같은 즉각적인 micro-interaction (120~200ms)
 *   normal: modal/dropdown/popover/accordion처럼 레이어가 열리고 닫히는 전환 (180~240ms)
 * easing은 과장 없는 ease-out 계열 하나로 고정한다(진입은 감속, 퇴장은 살짝 더 빠르게
 * 느껴지되 같은 커브를 재사용).
 */
export const motion = {
  fast: "160ms cubic-bezier(0.4, 0, 0.2, 1)",
  normal: "200ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;
