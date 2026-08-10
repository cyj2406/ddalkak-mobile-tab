/**
 * 결과물 뷰어 상단바 — 파일 형식별 구성표.
 *
 * 뷰어 상단바는 형식과 무관한 공통 요소(파일명 + 드롭다운, 우측 아이콘 액션)를 공유하고,
 * 중앙 페이지네이션 유무·미리보기/편집 토글·아이콘 세트만 형식에 따라 달라진다.
 * 그 차이를 컴포넌트 안의 조건문으로 흩뿌리지 않고 이 표 한 곳에 모아 둔다.
 *
 * 결과물의 형식은 사용자가 "템플릿 적용하기"로 들어온 카테고리(필터 탭)를 따른다.
 * 워드 → .docx / 한글 → .hwpx / 엑셀 → .xlsx / 논문 → .pdf / 영상 → .mp4
 */

export type ViewerFileType = "docx" | "hwpx" | "xlsx" | "pdf" | "pptx" | "mp4" | "html" | "png";

/** 상단바 우측에 놓이는 아이콘 액션. 순서가 곧 렌더 순서다. */
export type ViewerActionKey = "download" | "structure" | "share" | "edit" | "expand" | "close";

/**
 * 결과물 뷰어의 공통 아이콘 순서 — 형식과 무관하게 이 하나로 통일한다.
 * 다운로드(버전 드롭다운) · 공유 · 구분선 · 확대 · 닫기.
 * 중앙 페이지네이션 유무는 통일 대상이 아니라 형식별 구성(VIEWER_CHROME)을 그대로 따른다.
 * 편집기(에디터)에는 적용하지 않는다 — fileType 을 넘기지 않으므로 자연히 제외된다.
 */
export const RESULT_ACTIONS: (ViewerActionKey | "divider")[] = [
  "download", "share", "divider", "expand", "close",
];

/** 결과물 뷰어 상단바가 데스크톱 구성을 쓰는 최소 폭 */
export const DESKTOP_MIN = 1200;

/**
 * 폭에 따른 결과물 뷰어 아이콘 순서.
 * 태블릿(1200px 미만)에서는 전체화면(확대)을 빼고, 나머지는 데스크톱과 같다.
 */
export function resultActions(isDesktop: boolean): (ViewerActionKey | "divider")[] {
  return isDesktop ? RESULT_ACTIONS : RESULT_ACTIONS.filter((a) => a !== "expand");
}

/** 다운로드 드롭다운에 표시할 결과물 버전 정보 */
export interface ResultVersionInfo {
  /** 현재 버전 표기 (예: "2.0") */
  version: string;
  /** 전체 버전 개수 — "전체 버전 (N개)" */
  count: number;
}

export interface ViewerChromeSpec {
  /** 중앙 페이지네이션(◀ n/N ▶) 렌더 여부. false면 영역 자체를 렌더하지 않는다. */
  paginated: boolean;
  /** 목업 초기 페이지 — 화면 캡처와 같은 값 */
  initialPage: number;
  /** 목업 전체 페이지 수 */
  totalPages: number;
  /** 페이지네이션 옆 미리보기·편집 토글 (엑셀 전용) */
  viewToggle: boolean;
  /** 본문 상단 "N페이지" 라벨 + 줌 컨트롤 툴바 (논문/PDF 전용) */
  zoomToolbar: boolean;
}

// 우측 아이콘 세트는 형식별로 갈리지 않는다(RESULT_ACTIONS 로 통일).
// 여기 남은 값들은 형식마다 실제로 다른 것 — 페이지네이션·토글·줌 툴바뿐이다.
const GENERIC: ViewerChromeSpec = {
  paginated: false,
  initialPage: 1,
  totalPages: 1,
  viewToggle: false,
  zoomToolbar: false,
};

export const VIEWER_CHROME: Record<ViewerFileType, ViewerChromeSpec> = {
  docx: { ...GENERIC, paginated: true, initialPage: 1, totalPages: 6 },
  // PDF는 본문 줌 툴바로 배율을 다룬다.
  pdf: { ...GENERIC, paginated: true, initialPage: 2, totalPages: 6, zoomToolbar: true },
  xlsx: { ...GENERIC, paginated: true, initialPage: 2, totalPages: 2, viewToggle: true },
  pptx: { ...GENERIC, paginated: true, initialPage: 2, totalPages: 4 },
  // 한글(hwpx)·영상(mp4)은 페이지 단위로 끊어 읽지 않는다.
  hwpx: GENERIC,
  mp4: GENERIC,
  html: GENERIC,
  png: GENERIC,
};

export const FILE_TYPE_META: Record<ViewerFileType, { ext: string; label: string }> = {
  docx: { ext: "docx", label: "Word 파일" },
  hwpx: { ext: "hwpx", label: "한글 파일" },
  xlsx: { ext: "xlsx", label: "엑셀 파일" },
  pdf:  { ext: "pdf",  label: "PDF 파일" },
  pptx: { ext: "pptx", label: "PPT 파일" },
  mp4:  { ext: "mp4",  label: "MP4 파일" },
  html: { ext: "html", label: "HTML 파일" },
  png:  { ext: "png",  label: "PNG 파일" },
};

/**
 * 템플릿 목록의 필터 탭 라벨 → 결과물 형식.
 * 탭이 "전체"거나 표에 없으면 화면 카테고리의 기본값(CATEGORY_FILE_TYPE)을 쓴다.
 */
export const TAB_FILE_TYPE: Record<string, ViewerFileType> = {
  "워드": "docx",
  "한글": "hwpx",
  "엑셀": "xlsx",
  "논문": "pdf",
  "영상": "mp4",
  "유튜브영상": "mp4",
};

export function resolveFileType(tabLabel: string | undefined, fallback: ViewerFileType): ViewerFileType {
  return (tabLabel && TAB_FILE_TYPE[tabLabel]) || fallback;
}

/** 파일명 slug + 형식 → 최종 파일명 */
export function fileNameFor(slug: string, fileType: ViewerFileType) {
  return `${slug}.${FILE_TYPE_META[fileType].ext}`;
}
