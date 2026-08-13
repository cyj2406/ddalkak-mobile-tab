import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Check, ChevronDown, ChevronLeft, ChevronRight, Clock, Download, Eraser, Fullscreen, History, Loader2,
  Image as ImageIcon, Layers, LayoutTemplate, Maximize2, Minimize2, Minus, MousePointer2, Pencil, PenTool,
  Plus, Redo2, Save, Scissors, Search, Share2, Sparkles, Square, Type, Undo2, Wand2, X,
} from "lucide-react";

import TabletEditorSidebar, { type EditorTab } from "./TabletEditorSidebar";
import { useShareToast, ViewerToast } from "./ShareToast";
import { IconTooltip } from "./IconTooltip";
import { useSplitView } from "./splitView";
import {
  CanvasLoadingOverlay, EditorSkeleton, LoadingAnnouncer, useDelayedLoading,
} from "./LoadingState";

/**
 * 미니 에디터 — 이미지·랜딩페이지·프레젠테이션 결과를 여는 편집 화면.
 *
 * 상단바(56px) · 좌측 도구 레일 · 눈금자 + 체커보드 캔버스 · 우측 사이드바 · 하단 페이지 바.
 * 닫기(X)를 누르면 결과 화면을 벗어난다.
 *
 * 상단바는 왼쪽에 편집 조작(실행취소·다시실행 · 확대축소 · 화면에 맞추기),
 * 오른쪽에 문서 조작(찾기 · 공유 · 저장 · 저장 이력 · 다운로드 │ 전체화면 · 닫기)을 둔다.
 * 이 구성은 태블릿과 데스크톱이 똑같다. 단 하나 전체화면만 2단 구성일 때 붙는다
 * — 접을 채팅 열이 없으면 누를 것이 없어서다.
 * 면(배경·테두리)을 가진 요소는 다운로드 하나뿐이고, 나머지는 TONE 색 위계와
 * hover 배경으로만 구분한다. 같은 그룹 안은 12px, 그룹 사이는 24px 간격을 쓴다
 * — 찾기·공유·저장·다운로드는 한 그룹이라 모두 12px 로 이어진다.
 * 문서 조작은 다운로드까지 포함해 전부 아이콘 전용이고, 라벨은 hover 툴팁이 맡는다
 * (aria-label 은 항상 붙는다). 뷰포트에 따라 글자가 붙었다 떨어졌다 하지 않으므로
 * 툴바의 폭과 모양이 어디서나 같다.
 * 저장은 누르는 즉시 실행된다(⌘S 와 같은 동작). 기본 동작이 하나뿐이라 메뉴를 열 이유가
 * 없어서다 — 가끔 쓰는 저장 이력은 저장 바로 옆의 아이콘(개수 배지 포함)이 맡는다.
 * 반면 다운로드는 "이 파일 / 전체 파일"처럼 대등한 선택지가 있어 옵션 팝오버를 연다.
 *
 * 확대축소(zoom)는 아트보드의 실제 배율이다 — 캔버스 크기(canvasSize)에 그대로 곱해
 * 픽셀 크기를 정하고, 같은 배율로 눈금자 눈금 간격을 계산한다.
 *
 * 우측 사이드바(디자인·레이어·테마·이력)는 창 폭에 따라 배치만 달라지고 내용은 같다
 * (TabletEditorSidebar).
 *  - 데스크톱(1200px 이상): 자리를 차지하는 고정 컬럼. 접는 수단을 두지 않는다.
 *  - 그보다 좁으면: 캔버스 위로 미끄러져 들어오는 패널. 우측 가장자리 토글과 아트보드
 *    클릭으로 열리고, 빈 캔버스나 토글을 누르면 접힌다.
 */

const C = {
  primary: "#3B5BFF",
  primarySoft: "#EEF1FF",
  bg: "#F5F7FA",
  card: "#FFFFFF",
  text: "#1A1D29",
  sub: "#8A90A2",
  line: "#E7EAF0",
  danger: "#E5484D",
} as const;

const font = { fontFamily: "'Pretendard Variable', Pretendard, sans-serif" };

/**
 * 상단바 색 위계 — 기본(base) → 보조(muted) → 흐림(faint), hover 시 한 단계 진하게.
 * 면(배경·테두리)을 가진 요소는 다운로드 버튼 하나뿐이고, 나머지는 색으로만 위계를 만든다.
 *
 * 세 단계 모두 앱 본문 색(#1A1D29)과 같은 슬레이트 계열이고, 가장 흐린 단계도
 * 비활성(opacity .3)과 뚜렷이 구분되는 명도를 유지한다 — 위계는 두되
 * "꺼진 버튼"으로 읽히지 않게 하기 위함이다.
 */
const TONE = {
  base: { rest: "#1A1D29", hover: "#0B0D14" },  // 찾기·공유·저장
  muted: { rest: "#4E5566", hover: "#1A1D29" }, // 실행취소·다시실행·줌 컨트롤
  faint: { rest: "#6B7180", hover: "#2B3141" }, // 전체화면·닫기
} as const;
type ToneKey = keyof typeof TONE;

/** 줌 배율 숫자 등 강조 텍스트 */
const TONE_STRONG = "#1A1D29";
/** 면 없는 버튼이 hover 때만 갖는 배경 */
const HOVER_BG = "#F2F4F8";
/** 그룹 경계 세로 구분선 */
const DIVIDER = "#E7EAF0";
/** 좌측 그룹 묶음(편집 이력 + 화면 표시)이 갖는 옅은 면 */
const GROUP_PILL_BG = "#F1F3F7";

/**
 * 상단바 규격 — 바 56px 기준. 라운드 9 / 아이콘 19px.
 *
 * 상단바의 모든 버튼은 클릭 영역 높이가 같고 세로 중앙 정렬된다.
 * 높이만 입력 방식에 따라 갈리고, 아이콘 글리프 크기는 두 경우 모두 같다.
 *  - 터치(1200px 미만): 44px (아이콘 전용은 44×44 정사각)
 *  - 데스크톱(1200px 이상): 36px (아이콘 전용은 36×36)
 *
 * 다만 채워진 다운로드 버튼은 클릭 영역보다 작은 면(BTN_FILL)을 그린다.
 * 나머지는 19px 글리프만 보여 상하 여백이 넉넉한데, 파란 면까지 클릭 영역을
 * 꽉 채우면 그 버튼만 상단바 위아래에 붙어 보이기 때문이다.
 *
 * 데스크톱의 좌우 패딩 16 과 그룹 안 간격 12 로 창 제어 그룹은
 * 16 + 36(닫기) + 12 + 36(전체화면) = 100px 을 차지한다.
 * 사이드바 탭이 셋일 때는 이 100px 이 마지막 탭("테마", 300/3) 폭과 정확히 겹쳤는데,
 * "이력" 탭이 붙어 탭 폭이 75px(300/4)이 되면서 그 우연은 깨졌다.
 * 지금 이 값들을 붙잡고 있는 것은 탭 정렬이 아니라 버튼 사이 리듬이다.
 */
const BAR_H = 56;
/** 터치 기기 클릭 영역 표준 */
const BTN_TOUCH = 44;
const BAR_PAD_X = 16;
/** 그룹 안 버튼 간격 / 그룹과 그룹 사이 (12 : 24) */
const GAP_IN = 12;
const GAP_GROUP = 24;
/** 데스크톱 버튼 높이(아이콘 전용은 정사각) / 공통 반경 */
const BTN_ICON = 36;
const BTN_R = 9;
/**
 * 채워진 버튼(다운로드)이 그리는 파란 면의 높이 — 터치·데스크톱 모두 36px.
 * 터치에서는 클릭 영역(BTN_TOUCH 44px)보다 작아 56px 상단바 안에서 위아래 여백이
 * 눈에 보이고, 데스크톱에서는 클릭 영역(BTN_ICON)과 같아 면이 그 영역을 꽉 채운다.
 */
const BTN_FILL = 36;
/** 상단바 아이콘 크기 */
const ICON = 19;

type ToolId =
  | "select" | "text" | "shape" | "image" | "background" | "draw" | "eraser"
  | "ai-create" | "ai-edit" | "remove-bg" | "vectorize";

const TOOLS: { id: ToolId; label: string; icon: React.ReactNode; needsSelection?: boolean }[] = [
  { id: "select", label: "선택", icon: <MousePointer2 size={19} strokeWidth={1.7} /> },
  { id: "text", label: "텍스트", icon: <Type size={19} strokeWidth={1.7} /> },
  { id: "shape", label: "도형", icon: <Square size={19} strokeWidth={1.7} /> },
  { id: "image", label: "이미지", icon: <ImageIcon size={19} strokeWidth={1.7} /> },
  { id: "background", label: "배경", icon: <Layers size={19} strokeWidth={1.7} /> },
  { id: "draw", label: "그리기", icon: <Pencil size={19} strokeWidth={1.7} />, needsSelection: true },
  { id: "eraser", label: "지우개", icon: <Eraser size={19} strokeWidth={1.7} />, needsSelection: true },
  { id: "ai-create", label: "AI 생성", icon: <Wand2 size={19} strokeWidth={1.7} /> },
  { id: "ai-edit", label: "AI 수정", icon: <Sparkles size={19} strokeWidth={1.7} /> },
  { id: "remove-bg", label: "배경제거", icon: <Scissors size={19} strokeWidth={1.7} />, needsSelection: true },
  { id: "vectorize", label: "벡터화", icon: <PenTool size={19} strokeWidth={1.7} /> },
];

const ZOOM_MIN = 10;
const ZOOM_MAX = 200;

/** 눈금자 두께 — 위·왼쪽 공통 */
const RULER = 24;
/** 캔버스가 아트보드 둘레에 남기는 최소 여백 */
const CANVAS_PAD = 24;

/**
 * 데스크톱 경계(창 폭 기준). 앱의 다른 화면과 같은 값이며, 우측 사이드바가
 * 고정 컬럼이 되는 기준이기도 하다.
 *
 * 창 폭으로 재고 에디터 열의 폭으로 재지 않는다. 2단 구성에서 에디터는 창의 60%
 * (최소 EDITOR_MIN_W = 880px)만 쓰므로 레일 76 + 사이드바 300 을 빼면 캔버스에
 * 500px 남짓만 남지만, 그래도 사이드바는 접지 않는다 — 데스크톱에서 속성 패널은
 * 항상 자리를 지키는 컬럼이어야 하고, 좁아지는 쪽은 캔버스다.
 */
const DESKTOP_MIN = 1200;
/** 태블릿 경계 — 이 아래에서는 버전 목록이 팝오버 대신 바텀시트로 뜬다 */
const TABLET_MIN = 768;
const SIDEBAR_W = 300;

/** 다운로드 팝오버 선택지 — 목업 */
const DL_FORMATS = ["PNG", "JPG", "PDF", "SVG"];
const DL_SCALES = ["1배", "2배", "3배"];

/** 좌측 도구 레일 폭 */
const RAIL_W = 76;

/** 하단 페이지 바 높이 — 개발 패널이 이 위에 선다 */
const PAGEBAR_H = 88;

/**
 * [목업] 편집기 진입 로딩 시간 — 실제로는 편집기 번들과 문서를 받아 오는 구간이다.
 * 이 값이 LOADING_DELAY_MS(200ms)보다 짧아지면 스켈레톤은 아예 뜨지 않는다(의도된 동작).
 */
const EDITOR_BOOT_MS = 600;
/** [목업] 되돌리기 — 고른 버전을 받아 캔버스에 얹는 데 걸리는 시간 */
const REVERT_MS = 500;

/** 저장 완료 표시(체크 아이콘)를 유지하는 시간 */
const SAVED_HINT_MS = 1600;

/* ─── [목업] 저장 지연 시뮬레이션 ──────────────────────────────────────────────
 * 저장이 즉시 끝나면 "저장 중" 상태를 눈으로 확인할 수 없어서 넣은 장치다.
 * 프로덕션에서는 실제 저장 API 의 응답 시간이 이 자리를 대신한다.
 *
 * 지연이 생기는 곳은 saveNow() 안의 setTimeout 하나뿐이다. 실제 API 를 붙일 때
 * 그 setTimeout 을 호출로 바꾸고, 아래 세 상수와 SaveDelayPanel 을 지우면 된다.
 * ────────────────────────────────────────────────────────────────────────── */
const SAVE_DELAY_DEFAULT = 700;
const SAVE_DELAY_PRESETS: { label: string; ms: number }[] = [
  { label: "0ms", ms: 0 },
  { label: "800ms", ms: 800 },
  { label: "3초", ms: 3000 },
];
/**
 * ?devpanel=1 을 붙이면 저장 상태 점검 패널이 뜬다 (App 의 FORMFILL_DEV 와 같은 방식).
 *
 * ⚠️ 서비스 오픈 전에 반드시 처리할 것 ⚠️
 *
 * 빌드 시점 조건(import.meta.env.DEV 등)이 일부러 없다. 배포된 링크로 패널을 확인해야
 * 해서 프로덕션 번들에도 그대로 들어간다 — 즉 이 파일이 나간 곳이면 어디서든,
 * 주소에 ?devpanel=1 만 붙이면 누구나 열 수 있다. 저장 실패·오프라인 같은 상태를
 * 임의로 만들 수 있으므로 실사용자에게 노출되어서는 안 된다.
 *
 * 오픈 전에 둘 중 하나를 할 것:
 *   1) `import.meta.env.DEV && ...` 를 앞에 붙여 개발 빌드로 한정한다
 *   2) 이 상수와 SaveDevPanel, SAVE_STATES / SAVE_DELAY_PRESETS / HISTORY_COUNT_PRESETS 를 함께 지운다
 */
const DEV_PANEL = typeof window !== "undefined"
  && new URLSearchParams(window.location.search).get("devpanel") === "1";

/**
 * [목업] 개발 패널이 강제로 밀어 넣는 저장 상태.
 *
 * 실제로는 문서 모델·네트워크·권한이 각자 만들어 낼 상황들이지만, 아직 어느 것도
 * 없어서 눈으로 확인할 방법이 없다. 패널에서 골라 그 상황을 만든다.
 *
 * blocked 가 있는 상태는 저장 버튼이 눌리지 않고, 그 이유가 툴팁에 뜬다.
 * "error"만 예외로, 눌리기는 하되 실패로 끝난다.
 */
type SaveState = "normal" | "no-changes" | "error" | "offline" | "readonly";

const SAVE_STATES: { id: SaveState; label: string; blocked?: string }[] = [
  { id: "normal", label: "정상" },
  { id: "no-changes", label: "변경 없음", blocked: "변경사항이 없어요" },
  { id: "error", label: "실패" },
  { id: "offline", label: "오프라인", blocked: "인터넷 연결을 확인해 주세요" },
  { id: "readonly", label: "읽기 전용", blocked: "읽기 전용 문서예요" },
];

/** 이력 개수 프리셋 — 빈 상태와 스크롤을 눈으로 확인하려고 둔다 */
const HISTORY_COUNT_PRESETS = [0, 1, 3, 10];


/** 저장 이력 보관 개수 */
const HISTORY_MAX = 10;

/** 목록이 스크롤을 시작하는 높이 — 카드 세 장 남짓이 보여 "더 있다"가 읽힌다 */
const VERSION_LIST_MAX_H = 300;

export interface SaveEntry {
  id: number;
  /** 몇 번째 수동 저장본인지 — 목록과 트리거에 "저장본 6"으로 쓴다 */
  no: number;
  /** 전체 시각(연·월·일 포함). 줄에는 좁아서 다 못 넣고 title 로만 붙인다 */
  time: string;
  /** 줄에 보이는 시각. 초까지 쓴다 — 같은 분에 여러 번 저장하면 분 단위로는 전부 같아 보인다 */
  clock: string;
  /** 날짜만. 목록에서 날짜가 바뀌는 지점의 항목에만 시각 앞에 붙는다 */
  day: string;
  /** 무엇이 바뀌었는지 한 줄. 시각만 나열하면 어느 버전으로 돌아갈지 고를 수 없다 */
  summary: string;
}

/**
 * 변경 요약 자리표시 — 아직 문서 모델이 없어 실제 diff 를 낼 수 없다.
 * 편집 내용을 추적하게 되면 이 배열 대신 진짜 요약이 들어간다.
 * (LAYERS·DL_FORMATS 와 같은 성격의 목업이다)
 */
const SAVE_SUMMARIES = [
  "3개 요소 수정됨",
  "이미지 1개 추가",
  "텍스트 2개 수정됨",
  "도형 색상 변경",
  "레이아웃 정렬 변경",
  "페이지 1개 추가",
  "배경 이미지 교체",
  "제목 텍스트 수정됨",
];

/** "1536 × 1024 px" → { w: 1536, h: 1024 } */
function parseCanvasSize(text: string, fallbackRatio: string) {
  const m = text.match(/(\d+)\s*[×x]\s*(\d+)/);
  if (m) return { w: Number(m[1]), h: Number(m[2]) };
  // 크기 표기가 없으면 비율만으로 가로 1000 기준을 잡는다.
  const r = fallbackRatio.match(/([\d.]+)\s*\/\s*([\d.]+)/);
  const ratio = r ? Number(r[1]) / Number(r[2]) : 1;
  return { w: 1000, h: Math.round(1000 / ratio) };
}

function useMinWidth(px: number) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(`(min-width: ${px}px)`).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${px}px)`);
    const on = () => setMatches(mq.matches);
    mq.addEventListener("change", on);
    on();
    return () => mq.removeEventListener("change", on);
  }, [px]);
  return matches;
}

export interface TabletMiniEditorProps {
  /** 호출부가 넘기는 현재 파일명. 편집 화면 상단바는 파일명을 두지 않으므로 표시에는 쓰지 않는다
      (파일명 + 드롭다운은 결과물 뷰어 상단바의 몫이다). */
  fileName?: string;
  /** 캔버스 아트보드 비율 (예: "16 / 9") — canvasSize 표기가 없을 때만 쓰인다. */
  ratio?: string;
  /** 아트보드 실제 크기 표기. 여기서 픽셀 크기를 읽어 배율 계산에 쓴다. */
  canvasSize?: string;
  /** 페이지(슬라이드) 수 */
  pages?: number;
  /** 아트보드 안에 렌더할 결과물 */
  children?: React.ReactNode;
  onClose?: () => void;
  /**
   * 2단 구성(좌측 채팅 + 우측 에디터)의 오른쪽 열 안에서 렌더될 때 true.
   * 화면 전체를 덮는 오버레이(fixed)가 아니라 열을 채우는 absolute 로 바뀐다.
   */
  embedded?: boolean;
}

/** 색 위계를 CSS 변수로 넘긴다 — hover 한 단계 진하게는 .bar-btn:hover 가 처리한다. */
function toneVars(tone: ToneKey) {
  return { "--bar-rest": TONE[tone].rest, "--bar-hover": TONE[tone].hover } as React.CSSProperties;
}

/**
 * 상단바 아이콘 전용 버튼 — 터치 44×44 / 데스크톱 36×36, 아이콘 19px, 면 없음.
 * 라벨이 보이지 않으므로 hover 시 툴팁으로 같은 문구를 띄우고 aria-label 도 맞춘다.
 */
function BarIcon({
  label, tone = "muted", onClick, disabled = false, active, children,
}: {
  label: string; tone?: ToneKey; onClick?: () => void; disabled?: boolean;
  /** 켜짐/꺼짐이 있는 버튼(전체화면)에만 준다 — 옅은 액센트 면으로 활성 상태를 드러낸다. */
  active?: boolean; children: React.ReactNode;
}) {
  return (
    <IconTooltip label={label}>
      <button
        type="button"
        aria-label={label}
        aria-pressed={active === undefined ? undefined : active}
        onClick={onClick}
        disabled={disabled}
        className="bar-btn bar-icon shrink-0 flex items-center justify-center"
        style={{
          ...toneVars(tone),
          borderRadius: BTN_R,
          ...(active ? { background: C.primarySoft, "--bar-rest": C.primary, "--bar-hover": C.primary } : null),
        } as React.CSSProperties}
      >
        {children}
      </button>
    </IconTooltip>
  );
}

/**
 * 상단바 문서 조작 버튼 — 전부 아이콘 전용이다.
 * 테두리·배경 없이 색으로만 위계를 두고, hover 때만 옅은 배경이 생긴다.
 * 다운로드(primary)만 파란 면을 유지한다 — 상단바에서 면을 가진 유일한 요소.
 *
 * 라벨은 눈에 보이지 않고 hover 툴팁이 대신하며, aria-label 은 항상 붙는다.
 * 예전에는 데스크톱에서만 아이콘 옆에 글자가 붙어, 같은 툴바가 뷰포트마다 다른
 * 모양으로 읽혔다. 다운로드도 예외를 두지 않아 이제 폭이 어디서나 같다.
 *
 * 채워진 버튼은 클릭 영역과 그려지는 면을 분리한다.
 * 버튼 자체는 옆 아이콘 버튼과 같은 클릭 영역을 유지하고, 파란 면은 그보다 작은
 * 안쪽 span(.bar-fill)이 그린다 — 면이 상단바 높이를 꽉 채워 답답해 보이지 않게
 * 위아래 여백을 남기기 위함이다.
 */
function BarButton({
  label, icon, primary = false, onClick, disabled = false, busy = false, tooltip,
}: {
  label: string; icon: React.ReactNode; primary?: boolean;
  onClick?: () => void;
  /** 처리 중이라 지금은 누를 수 없는 상태 — 연타로 같은 작업이 겹쳐 들어가는 것을 막는다 */
  disabled?: boolean; busy?: boolean;
  /**
   * 툴팁에만 다른 문구를 띄우고 싶을 때. 누를 수 없는 버튼이 "왜" 못 누르는지는
   * 이름(aria-label)이 아니라 여기서 말한다 — 이름은 버튼의 정체라 상황에 따라 바뀌면 안 된다.
   */
  tooltip?: string;
}) {
  const withTooltip = (node: React.ReactNode) => <IconTooltip label={tooltip ?? label}>{node}</IconTooltip>;
  const content = <span className="shrink-0 flex">{icon}</span>;

  if (primary) {
    return withTooltip(
      <button
        type="button"
        aria-label={label}
        onClick={onClick}
        disabled={disabled}
        aria-busy={busy || undefined}
        className="bar-btn-primary bar-icon shrink-0 flex items-center justify-center"
        style={{ background: "transparent", padding: 0 }}
      >
        <span
          className="bar-fill bar-fill-square flex items-center justify-center"
          style={{ background: C.primary, color: "#FFFFFF", borderRadius: BTN_R }}
        >
          {content}
        </span>
      </button>,
    );
  }

  return withTooltip(
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      aria-busy={busy || undefined}
      className="bar-btn bar-icon shrink-0 flex items-center justify-center"
      style={{ ...toneVars("base"), borderRadius: BTN_R }}
    >
      {content}
    </button>,
  );
}

/** 그룹 경계 세로 구분선 — 높이 18px */
function BarDivider({ style }: { style?: React.CSSProperties }) {
  return <span className="shrink-0" style={{ width: 1, height: 18, background: DIVIDER, ...style }} />;
}

/** 찾기 팝오버의 입력칸 */
function FindInput({
  value, placeholder, onChange,
}: { value: string; placeholder: string; onChange: (v: string) => void }) {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-12 rounded-[12px] px-3.5 outline-none focus:border-[#3B5BFF]"
      style={{ border: `1px solid ${C.line}`, background: C.card, fontSize: 14.5, color: C.text }}
    />
  );
}

/** 찾기·다운로드·버전 목록이 여는 팝오버의 공통 껍데기 — 버튼 아래 오른쪽 맞춤으로 붙는다 */
function Popover({
  width, top = 48, onClose, children,
}: { width: number; top?: number; onClose: () => void; children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 z-[1]" onClick={onClose} />
      <div
        className="editor-popover absolute z-[2] right-0 rounded-[16px]"
        style={{
          top,
          width,
          background: C.card,
          border: `1px solid ${C.line}`,
          boxShadow: "0px 14px 38px rgba(16,24,40,0.16)",
        }}
      >
        {children}
      </div>
    </>
  );
}

/** 다운로드 팝오버의 선택 필드 */
function DlField({
  label, value, options, onChange,
}: { label: string; value: string; options: string[]; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <span style={{ fontSize: 13.5, fontWeight: 700, color: C.text }}>{label}</span>
      <div className="relative">
        <select
          aria-label={label}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-12 rounded-[12px] pl-3.5 pr-9 appearance-none cursor-pointer outline-none"
          style={{ border: `1px solid ${C.line}`, background: C.card, fontSize: 14, fontWeight: 500, color: C.text }}
        >
          {options.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown
          size={17}
          strokeWidth={1.9}
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none"
          style={{ color: C.sub }}
        />
      </div>
    </div>
  );
}

/**
 * 눈금자 — 아트보드 왼쪽 위 모서리를 0으로 두고 캔버스 단위를 표시한다.
 * 배율이 낮아 눈금이 촘촘해지면 간격을 100 → 500 → 1000 단위로 넓힌다.
 */
function Ruler({
  axis, origin, length, scale,
}: { axis: "x" | "y"; origin: number; length: number; scale: number }) {
  if (length <= 0) return null;
  const step = 100 * scale >= 46 ? 100 : 100 * scale >= 12 ? 500 : 1000;
  const stepPx = step * scale;
  const first = Math.ceil((0 - origin) / stepPx) * stepPx + origin;

  const ticks: { pos: number; label: number }[] = [];
  for (let pos = first; pos <= length; pos += stepPx) {
    ticks.push({ pos, label: Math.round((pos - origin) / scale) });
  }

  return (
    <div
      className="relative overflow-hidden"
      style={
        axis === "x"
          ? { ...font, background: C.card, height: RULER, borderBottom: `1px solid ${C.line}` }
          : { ...font, background: C.card, width: RULER, height: "100%", borderRight: `1px solid ${C.line}` }
      }
    >
      {ticks.map((t) => (
        <span
          key={t.pos}
          className="absolute tabular-nums"
          style={
            axis === "x"
              ? {
                left: t.pos, top: 0, height: RULER, paddingLeft: 3,
                borderLeft: `1px solid ${t.label === 0 ? C.primary : "#D9DEE7"}`,
                fontSize: 9, lineHeight: `${RULER}px`, color: t.label === 0 ? C.primary : C.sub,
              }
              : {
                top: t.pos, left: 0, width: RULER, paddingTop: 2,
                borderTop: `1px solid ${t.label === 0 ? C.primary : "#D9DEE7"}`,
                fontSize: 9, lineHeight: "10px", color: t.label === 0 ? C.primary : C.sub,
                writingMode: "vertical-rl" as const,
              }
          }
        >
          {t.label}
        </span>
      ))}
    </div>
  );
}

/**
 * 버전 목록의 한 항목 — 두 줄이 전부다.
 *   1줄 — 버전명(좌) ··· 저장 시각(우)
 *   2줄 — 변경 요약(좌) ··· 되돌리기(우, hover 때 드러남)
 *
 * 예전에는 한 항목에 날짜·배지·원형 아이콘·구분선·액션 링크까지 다섯 가지가 들어가
 * 높이가 과했고, 무엇이 중요한지도 뭉개졌다. 지금은 테두리도 구분선도 없이
 * 배경 틴트 하나로 항목을 가른다.
 *
 * 날짜는 기본적으로 쓰지 않는다 — 대부분 같은 날 저장본이라 시각만으로 충분하고,
 * 날짜가 바뀌는 지점의 항목에만 붙는다(showDate).
 *
 * 되돌리기는 2줄 오른쪽에 자리를 늘 잡아 두고 투명도만 바꾼다. 절대 배치로 띄우면
 * 1줄의 시각을 덮고, 자리를 hover 때만 만들면 글자가 밀린다.
 *
 * 누르면 확인 없이 바로 적용된다 — 새 저장본을 만들지도 기존 것을 지우지도 않아
 * 되돌아올 길이 늘 열려 있다. 저장하지 않은 편집이 있을 때만 호출부가 한 번 묻는다.
 */
function VersionRow({
  entry, applied, showDate, onSelect,
}: {
  entry: SaveEntry;
  applied: boolean;
  showDate: boolean;
  onSelect: () => void;
}) {
  const tint = applied ? C.primarySoft : "transparent";
  const nameColor = applied ? C.primary : C.text;

  // 1줄 — 어느 상태에서나 같다.
  const head = (
    <div className="flex items-center gap-1.5">
      <span className="shrink-0" style={{ fontSize: 12.5, fontWeight: 700, color: nameColor }}>
        저장본 {entry.no}
      </span>
      {applied && (
        <span
          className="shrink-0 rounded-full px-1.5"
          style={{ background: C.primary, color: "#FFFFFF", fontSize: 10, fontWeight: 700, lineHeight: "15px" }}
        >
          현재
        </span>
      )}
      <span className="flex-1 min-w-0" />
      <span
        className="shrink-0 tabular-nums"
        style={{ fontSize: 11.5, color: applied ? C.primary : C.sub }}
      >
        {showDate ? `${entry.day} ${entry.clock}` : entry.clock}
      </span>
    </div>
  );

  return (
    <li style={{ background: tint, borderLeft: `3px solid ${applied ? C.primary : "transparent"}` }}>
      {applied ? (
        /* 지금 올라와 있는 버전 — 되돌릴 것이 없으니 누를 수도 없다.
           "현재 에디터에 적용됨" 같은 줄은 두지 않는다. 틴트·보더·배지가 이미 같은 말을 한다. */
        <div className="px-3 py-2">
          {head}
          <p className="truncate" style={{ fontSize: 11.5, color: C.sub, marginTop: 2 }}>
            {entry.summary}
          </p>
        </div>
      ) : (
        /* 항목 전체가 버튼이다 — 별도의 액션 링크 줄을 두지 않는다 */
        <button
          type="button"
          onClick={onSelect}
          className="version-item w-full text-left px-3 py-2 transition-colors"
        >
          {head}
          <div className="flex items-center gap-2" style={{ marginTop: 2 }}>
            <p className="flex-1 min-w-0 truncate" style={{ fontSize: 11.5, color: C.sub }}>
              {entry.summary}
            </p>
            <span
              className="version-item__action shrink-0"
              style={{ fontSize: 11.5, fontWeight: 700, color: C.primary }}
            >
              되돌리기
            </span>
          </div>
        </button>
      )}
    </li>
  );
}

/**
 * 버전 목록 본문 — 팝오버(데스크톱·태블릿)와 바텀시트(모바일)가 이것 하나를 함께 쓴다.
 * 뷰포트가 달라지는 것은 담는 그릇뿐이고, 항목 구성·문구·강조 방식은 어디서나 같다.
 */
function VersionList({
  entries, appliedId, onRevert,
}: {
  entries: SaveEntry[];
  appliedId: number | null;
  onRevert: (e: SaveEntry) => void;
}) {
  return (
    <>
      <div className="shrink-0 px-3 pt-3 pb-2">
        <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>저장 이력</p>
        {/* 자동 저장이 없으므로 "수동"이라고 구분해 부를 이유가 없다.
            빈 상태에서는 아래 안내가 같은 말을 하므로 이 줄을 접는다. */}
        {entries.length > 0 && (
          <p style={{ fontSize: 12, color: C.sub, marginTop: 2 }}>최근 저장본으로 돌아갈 수 있어요</p>
        )}
      </div>

      {entries.length === 0 ? (
        /* 빈 상태 — 아이콘은 그대로 있고 여기서 왜 비어 있는지 알려 준다 */
        <div className="px-3 pb-4 pt-1">
          <p style={{ fontSize: 12.5, fontWeight: 700, color: C.text }}>아직 저장본이 없어요</p>
          <p style={{ fontSize: 11.5, color: C.sub, marginTop: 3 }}>저장하면 여기에 기록돼요</p>
        </div>
      ) : (
        <ul
          className="min-h-0 overflow-y-auto pb-1"
          style={{ maxHeight: VERSION_LIST_MAX_H, scrollbarWidth: "none" }}
        >
          {entries.map((e, i) => (
            <VersionRow
              key={e.id}
              entry={e}
              applied={e.id === appliedId}
              showDate={i > 0 && entries[i - 1].day !== e.day}
              onSelect={() => onRevert(e)}
            />
          ))}
        </ul>
      )}

      {/* 안내 문구는 목록 스크롤 밖에 고정한다 — 열 개를 다 내려야 규칙을 읽게 둘 이유가 없다.
          저장본이 하나도 없으면 보관 개수를 안내할 이유도 없어 함께 접는다. */}
      {entries.length > 0 && (
        <div className="shrink-0 px-3 py-2.5" style={{ borderTop: `1px solid ${C.line}` }}>
          <p style={{ fontSize: 11.5, color: C.sub }}>최근 {HISTORY_MAX}개까지 보관돼요</p>
        </div>
      )}
    </>
  );
}

/**
 * 저장하지 않은 변경사항이 있을 때만 뜨는 확인 — 되돌리기의 유일한 예외다.
 *
 * 되돌리기 자체는 되돌릴 수 있는 동작이라 평소에는 묻지 않는다. 다만 아직 저장하지
 * 않은 편집은 어느 저장본에도 없어서, 그것만은 사라지면 되찾을 길이 없다.
 * 그래서 "저장하고 이동"을 첫 번째 선택지로 둔다 — 아무것도 잃지 않는 유일한 길이다.
 */
function UnsavedRevertDialog({
  target, embedded, onSaveAndGo, onDiscardAndGo, onCancel,
}: {
  target: SaveEntry;
  embedded?: boolean;
  onSaveAndGo: () => void;
  onDiscardAndGo: () => void;
  onCancel: () => void;
}) {
  const pos = embedded ? "absolute" : "fixed";
  return (
    <>
      <div className={`${pos} inset-0 z-[100]`} style={{ background: "rgba(16,24,40,0.35)" }} onClick={onCancel} />
      <div className={`${pos} inset-0 z-[101] flex items-center justify-center p-4`} style={{ pointerEvents: "none" }}>
        <div
          role="alertdialog"
          aria-modal="true"
          aria-label="저장하지 않은 변경사항"
          className="rounded-[16px] flex flex-col"
          style={{
            pointerEvents: "auto",
            width: "min(360px, 100%)",
            background: C.card,
            boxShadow: "0 18px 48px rgba(16,24,40,0.22)",
            ...font,
          }}
        >
          <div className="px-5 pt-5 pb-4">
            <p style={{ fontSize: 15.5, fontWeight: 700, color: C.text }}>저장하지 않은 변경사항이 사라져요</p>
            <p style={{ fontSize: 13, color: C.sub, lineHeight: 1.6, marginTop: 6 }}>
              저장본 {target.no}로 이동하면 지금까지의 편집은 어느 저장본에도 남지 않아요.
            </p>
          </div>
          <div className="px-3 pb-3 flex flex-col gap-1.5">
            <button
              type="button"
              onClick={onSaveAndGo}
              className="w-full h-11 rounded-[10px] transition-colors hover:brightness-[0.97]"
              style={{ background: C.primary, color: "#FFFFFF", fontSize: 13.5, fontWeight: 700 }}
            >
              저장하고 이동
            </button>
            <button
              type="button"
              onClick={onDiscardAndGo}
              className="w-full h-11 rounded-[10px] transition-colors hover:bg-[#F5F7FA]"
              style={{ border: `1px solid ${C.line}`, color: C.text, fontSize: 13.5, fontWeight: 600 }}
            >
              그냥 이동
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="w-full h-10 rounded-[10px] transition-colors hover:bg-[#F5F7FA]"
              style={{ color: C.sub, fontSize: 13, fontWeight: 600 }}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/**
 * 저장 실패 안내 — 성공 토스트(ViewerToast)와 달리 저절로 사라지지 않는다.
 * 저장이 안 됐다는 사실은 사용자가 무언가 할 때까지 남아 있어야 하고,
 * 할 수 있는 일("다시 시도")을 같은 자리에서 바로 내민다.
 */
function SaveErrorToast({ onRetry, onDismiss }: { onRetry: () => void; onDismiss: () => void }) {
  return (
    <div
      role="alert"
      /* 껍데기는 성공 토스트(ViewerToast)와 같은 값을 쓴다 — 흰 면, 같은 라운드·그림자,
         같은 세로 규격. 실패라고 다른 부품처럼 보이면 같은 앱의 알림으로 읽히지 않는다.
         성공과 실패를 가르는 것은 원형 아이콘의 색 하나뿐이다. */
      className="viewer-toast absolute z-[98] flex items-center gap-3 rounded-[14px]"
      style={{
        top: BAR_H + 16,
        left: "50%",
        transform: "translateX(-50%)",
        minHeight: 56,
        padding: "0 12px 0 22px",
        background: C.card,
        boxShadow: "0px 10px 34px rgba(16,24,40,0.16)",
        ...font,
      }}
    >
      {/* 성공 토스트의 검은 원형 체크와 같은 형태(22px 채운 원) — 색만 빨강이다 */}
      <span
        className="shrink-0 flex items-center justify-center rounded-full"
        aria-hidden="true"
        style={{ width: 22, height: 22, background: C.danger }}
      >
        <span style={{ fontSize: 13, fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>!</span>
      </span>

      {/* 위계의 맨 위 — 무슨 일이 있었는지가 가장 먼저 읽혀야 한다 */}
      <span style={{ fontSize: 15, fontWeight: 600, color: C.text, whiteSpace: "nowrap" }}>
        저장하지 못했어요
      </span>

      {/* 두 번째 — 면 없는 텍스트 링크. 토스트는 알림이지 주요 액션이 서는 자리가 아니라,
          채운 버튼을 두면 화면에서 가장 강한 요소가 되어 메시지를 눌러 버린다. */}
      <button
        type="button"
        onClick={onRetry}
        className="shrink-0 rounded-[6px] px-1 transition-opacity hover:opacity-70"
        style={{
          color: C.primary,
          fontSize: 14,
          fontWeight: 700,
          textDecoration: "underline",
          textUnderlineOffset: 3,
        }}
      >
        다시 시도
      </button>

      {/* 가장 약하게 — 회색 아이콘 하나 */}
      <button
        type="button"
        aria-label="닫기"
        onClick={onDismiss}
        className="shrink-0 w-8 h-8 rounded-[8px] flex items-center justify-center transition-colors hover:bg-[#F2F4F8]"
        style={{ color: C.sub }}
      >
        <X size={16} strokeWidth={2.2} />
      </button>
    </div>
  );
}

/**
 * [목업] 저장 상태 점검 패널 — ?devpanel=1 로만 뜬다.
 *
 * 저장은 지연·실패·오프라인·권한처럼 눈으로 확인해야 할 상태가 여럿인데, 실제
 * 문서 모델도 서버도 없어서 그 상황을 만들 방법이 없다. 여기서 골라 만든다.
 * 프로덕션에는 나갈 일이 없고, 서버가 붙으면 통째로 지우면 된다.
 */
function SaveDevPanel({
  delay, onDelay, state, onState, historyCount, onHistoryCount,
}: {
  delay: number;
  onDelay: (ms: number) => void;
  state: SaveState;
  onState: (s: SaveState) => void;
  historyCount: number;
  onHistoryCount: (n: number) => void;
}) {
  const [open, setOpen] = useState(true);

  const chip = (active: boolean): React.CSSProperties => ({
    height: 24,
    paddingInline: 8,
    borderRadius: 7,
    fontSize: 11,
    fontWeight: 700,
    background: active ? "#FFFFFF" : "rgba(255,255,255,0.12)",
    color: active ? "#12131A" : "#D6DBE4",
  });

  return (
    <div
      className="absolute z-[99] rounded-[12px] overflow-hidden"
      style={{
        left: 8,
        bottom: PAGEBAR_H + 8,
        width: open ? 218 : "auto",
        background: "rgba(18,19,26,0.92)",
        boxShadow: "0 10px 30px rgba(16,24,40,0.28)",
        ...font,
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-2 px-2.5 py-2 transition-colors hover:bg-white/10"
      >
        <span style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: "0.4px", color: "#8AA0FF" }}>DEV</span>
        <span style={{ fontSize: 11.5, fontWeight: 700, color: "#FFFFFF" }}>저장 상태</span>
        <span className="flex-1" />
        <ChevronDown
          size={14}
          strokeWidth={2.4}
          color="#D6DBE4"
          style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 140ms ease" }}
        />
      </button>

      {open && (
        <div className="px-2.5 pb-2.5 flex flex-col gap-2.5">
          <div className="flex flex-col gap-1">
            <span style={{ fontSize: 10, fontWeight: 700, color: "#9AA2B4" }}>지연</span>
            <div className="flex flex-wrap gap-1">
              {SAVE_DELAY_PRESETS.map((d) => (
                <button key={d.ms} type="button" onClick={() => onDelay(d.ms)} style={chip(delay === d.ms)}>
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span style={{ fontSize: 10, fontWeight: 700, color: "#9AA2B4" }}>상태</span>
            <div className="flex flex-wrap gap-1">
              {SAVE_STATES.map((x) => (
                <button key={x.id} type="button" onClick={() => onState(x.id)} style={chip(state === x.id)}>
                  {x.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span style={{ fontSize: 10, fontWeight: 700, color: "#9AA2B4" }}>이력 개수</span>
            <div className="flex flex-wrap gap-1">
              {HISTORY_COUNT_PRESETS.map((n) => (
                <button key={n} type="button" onClick={() => onHistoryCount(n)} style={chip(historyCount === n)}>
                  {n}개
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** 선택 핸들 — 네 모서리 + 네 변 중앙 + 위쪽 회전 핸들 */
function SelectionHandles() {
  const dot = (style: React.CSSProperties) => (
    <span
      className="absolute"
      style={{
        width: 8, height: 8, background: C.card, border: `1.5px solid ${C.primary}`,
        borderRadius: 2, ...style,
      }}
    />
  );
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ outline: `1.5px solid ${C.primary}`, outlineOffset: 0 }}>
      {/* 회전 핸들 */}
      <span className="absolute" style={{ left: "50%", top: -26, width: 1, height: 22, background: C.primary }} />
      <span
        className="absolute"
        style={{
          left: "50%", top: -32, width: 9, height: 9, marginLeft: -4.5,
          background: C.card, border: `1.5px solid ${C.primary}`, borderRadius: "50%",
        }}
      />
      {dot({ left: -4, top: -4 })}
      {dot({ left: "calc(50% - 4px)", top: -4 })}
      {dot({ right: -4, top: -4 })}
      {dot({ left: -4, top: "calc(50% - 4px)" })}
      {dot({ right: -4, top: "calc(50% - 4px)" })}
      {dot({ left: -4, bottom: -4 })}
      {dot({ left: "calc(50% - 4px)", bottom: -4 })}
      {dot({ right: -4, bottom: -4 })}
    </div>
  );
}

export default function TabletMiniEditor({
  ratio = "16 / 9",
  canvasSize = "1536 × 1024 px",
  pages = 1,
  children,
  onClose,
  embedded = false,
}: TabletMiniEditorProps) {
  const board = parseCanvasSize(canvasSize, ratio);

  // 2단 구성의 접기 상태. 상단바 전체화면 버튼과 경계 토글이 이 하나를 함께 본다.
  // 단독(오버레이)으로 열렸을 때는 null 이라 전체화면 버튼은 지금처럼 아무 일도 하지 않는다.
  const split = useSplitView();
  const chatCollapsed = !!split?.chatCollapsed;

  /**
   * [목업] 저장하지 않은 변경사항이 있는지.
   *
   * 실제 문서 모델이 없어 "편집으로 볼 만한 조작"이 일어나면 켜 두는 자리표시다.
   * 문서 모델이 붙으면 이 상태 대신 모델의 dirty 플래그를 그대로 쓰면 된다.
   * 저장이 끝나거나 다른 버전을 불러오면 꺼진다.
   */
  const [dirty, setDirty] = useState(false);
  const markDirty = useCallback(() => setDirty(true), []);

  // ── 진입 로딩 ─────────────────────────────────────────────────────────
  // [목업] 편집기 번들·문서를 받아 오는 구간. 뼈대가 정해진 화면이라 스피너 대신 스켈레톤을 쓴다.
  const [booting, setBooting] = useState(true);
  useEffect(() => {
    const t = window.setTimeout(() => setBooting(false), EDITOR_BOOT_MS);
    return () => window.clearTimeout(t);
  }, []);
  const showBootSkeleton = useDelayedLoading(booting);

  // ── 되돌리기 로딩 ─────────────────────────────────────────────────────
  // 화면 전체를 스켈레톤으로 갈지 않는다 — 바뀌는 곳은 캔버스뿐이고,
  // 목록을 보며 고른 맥락은 그대로 남아 있어야 한다.
  const [reverting, setReverting] = useState(false);
  const showRevertOverlay = useDelayedLoading(reverting);
  const revertTimerRef = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(revertTimerRef.current), []);

  const [tool, setTool] = useState<ToolId>("image");
  const [zoom, setZoom] = useState(24);
  const [page, setPage] = useState(1);
  const [master, setMaster] = useState(false);
  const [sidebarTab, setSidebarTab] = useState<EditorTab>("design");
  // 캔버스 요소 선택 — 아직 요소 모델이 없어 아트보드 단위로만 다룬다.
  const [selected, setSelected] = useState(true);
  // 선택된 요소가 있어야 쓸 수 있는 도구는 비활성 (데스크톱과 동일)
  const hasSelection = selected;

  // 데스크톱(창 1200px 이상) — 우측 속성 패널이 접히지 않는 고정 컬럼이 된다.
  // 2단 구성이라 에디터 열이 좁아도 마찬가지다: 양보하는 쪽은 캔버스이지 패널이 아니다.
  const isDesktop = useMinWidth(DESKTOP_MIN);
  // 768px 이상 — 버전 목록이 트리거에 앵커된 팝오버로 뜬다. 그보다 좁으면 바텀시트.
  const isTabletUp = useMinWidth(TABLET_MIN);
  const docked = isDesktop;
  // 고정 컬럼일 때는 항상 열려 있고(접는 수단 자체가 없다), 슬라이드일 때만 여닫는다.
  const [panelOpen, setPanelOpen] = useState(false);
  const sidebarOpen = docked || panelOpen;
  // 속성 패널이 캔버스를 덮는 폭. 고정 컬럼(데스크톱)일 때는 캔버스가 실제로 줄어드니 0.
  const coveredByPanel = docked ? 0 : panelOpen ? SIDEBAR_W : 0;

  // 상단바 팝오버 — 찾기 / 다운로드 옵션. 저장은 메뉴 없이 바로 실행된다.
  const [findOpen, setFindOpen] = useState(false);
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [matchCase, setMatchCase] = useState(false);
  const [dlOpen, setDlOpen] = useState(false);
  const [history, setHistory] = useState<SaveEntry[]>([]);
  // 지금 에디터에 올라와 있는 저장본. 저장하거나 되돌릴 때마다 방금 쌓인 것으로 옮겨간다.
  const [appliedId, setAppliedId] = useState<number | null>(null);
  // 방금 저장했다는 표시 — 버튼 아이콘이 잠깐 체크로 바뀐다.
  const [justSaved, setJustSaved] = useState(false);
  // 저장 진행 중 — 아이콘이 스피너로 바뀌고 그동안 다시 누를 수 없다.
  const [saving, setSaving] = useState(false);
  const savingRef = useRef(false);
  const saveTimerRef = useRef<number | undefined>(undefined);
  // [목업] 저장에 걸리는 시간. 개발용 패널에서 바꿔 가며 확인한다.
  const [saveDelay, setSaveDelay] = useState(SAVE_DELAY_DEFAULT);
  // [목업] 개발 패널이 고르는 저장 상태. 패널을 안 열면 계속 "normal" 이다.
  const [saveState, setSaveState] = useState<SaveState>("normal");
  // 저장에 실패해 아직 사용자가 손대지 않은 상태 — 토스트와 "다시 시도"가 여기 달린다.
  const [saveFailed, setSaveFailed] = useState(false);
  // 저장 도중에 에디터를 닫으면 타이머만 남는다 — 언마운트 때 정리한다.
  useEffect(() => () => { if (saveTimerRef.current) clearTimeout(saveTimerRef.current); }, []);
  // 버전 목록(팝오버/바텀시트) 열림 상태와, 방금 되돌아간 버전 번호(라이브 영역용).
  const [versionsOpen, setVersionsOpen] = useState(false);
  const [revertedTo, setRevertedTo] = useState<number | null>(null);
  // 저장하지 않은 변경사항 때문에 확인을 기다리고 있는 되돌리기 대상.
  const [pendingRevert, setPendingRevert] = useState<SaveEntry | null>(null);
  // 닫을 때 포커스를 트리거로 돌려놓기 위한 참조 — 바깥 클릭·Esc·되돌리기 확정 모두 이 길로 닫는다.
  const versionsBtnRef = useRef<HTMLButtonElement>(null);
  const closeVersions = useCallback(() => {
    setVersionsOpen(false);
    versionsBtnRef.current?.focus();
  }, []);

  // 공유 — 결과물 뷰어 상단바와 같은 안내 문구를 쓴다.
  const { message: toast, share } = useShareToast();

  // 수동 저장 — 최신본이 맨 위에 쌓이고 HISTORY_MAX 개까지만 남는다.
  // 방금 저장한 것이 곧 에디터에 올라와 있는 버전이므로 적용본도 함께 옮긴다.
  // 확인 단계 없이 바로 실행되므로, 저장됐다는 사실은 버튼의 체크 표시 · 개수 배지 ·
  // 라이브 영역 세 곳이 함께 전한다.
  // 저장이 끝난 뒤 한 번만 실행할 일 — "저장하고 이동"이 여기에 되돌리기를 걸어 둔다.
  const afterSaveRef = useRef<(() => void) | null>(null);

  // 저장을 막는 이유(없으면 null). 개발 패널이 고른 상태에서만 생긴다.
  const saveBlocked = SAVE_STATES.find((x) => x.id === saveState)?.blocked ?? null;
  // saveNow 의 타이머 콜백은 만들어질 때의 값을 물고 있으므로, 늦게 읽어야 하는 것은 ref 로 둔다.
  const saveBlockedRef = useRef<string | null>(null);
  const saveStateRef = useRef<SaveState>("normal");
  saveBlockedRef.current = saveBlocked;
  saveStateRef.current = saveState;

  const saveNow = useCallback(() => {
    // 저장 중에는 다시 시작하지 않는다. 버튼은 disabled 로 막히지만 ⌘S 는 그 밖에서
    // 들어오므로, 상태가 아니라 ref 로 막아야 같은 틱에 두 번 눌러도 새지 않는다.
    if (savingRef.current) return;
    // 저장할 수 없는 상태(변경 없음·오프라인·읽기 전용)에서는 시작하지 않는다.
    if (saveBlockedRef.current) return;
    savingRef.current = true;
    setSaving(true);
    setSaveFailed(false);
    // 되돌리기 알림이 남아 있으면 지운다 — 그 직후의 평범한 저장까지
    // "되돌렸습니다"로 읽히면 안 된다.
    setRevertedTo(null);

    // [목업] 지연은 여기 한 곳에서만 생긴다 — 실제 저장 API 가 붙으면
    // 이 setTimeout 이 그 호출로 바뀌고 콜백 내용은 그대로 응답 핸들러가 된다.
    saveTimerRef.current = window.setTimeout(() => {
      // [목업] 실패 상태 — 이력에 아무것도 쌓지 않고 dirty 도 그대로 둔다.
      // 저장되지 않았으므로 되돌아갈 지점이 생기지 않는 것이 맞다.
      if (saveStateRef.current === "error") {
        savingRef.current = false;
        setSaving(false);
        setSaveFailed(true);
        afterSaveRef.current = null;
        return;
      }
    setHistory((prev) => {
      const no = (prev[0]?.no ?? 0) + 1;
      // 줄에는 "오전 11:59:07"만 보이고, 전체 시각은 title 로 붙는다(SaveEntry 주석 참고).
      const now = new Date();
      const time = now.toLocaleString("ko-KR", {
        year: "numeric", month: "2-digit", day: "2-digit",
        hour: "numeric", minute: "2-digit", second: "2-digit",
      });
      const clock = now.toLocaleTimeString("ko-KR", {
        hour: "numeric", minute: "2-digit", second: "2-digit",
      });
      const day = now.toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" });
      setAppliedId(no);
      const next: SaveEntry = {
        id: no, no, time, clock, day,
        summary: SAVE_SUMMARIES[(no - 1) % SAVE_SUMMARIES.length],
      };
      return [next, ...prev].slice(0, HISTORY_MAX);
    });
      savingRef.current = false;
      setSaving(false);
      setJustSaved(true);
      setDirty(false);
      // 저장을 기다리고 있던 일(있다면)을 이어서 한다 — 한 번 쓰면 비운다.
      const next = afterSaveRef.current;
      afterSaveRef.current = null;
      next?.();
    }, saveDelay);
  }, [saveDelay]);

  /**
   * 되돌리기 — 고른 버전을 캔버스에 얹기만 하고, 이력에는 아무것도 더하지 않는다.
   *
   * 예전에는 되돌리기가 새 저장본을 쌓았다. 그러면 되돌릴 때마다 목록이 길어지고,
   * 방금 고른 항목은 "현재"인데도 새로 쌓인 항목 아래에 있어 순서가 어긋나 보였다.
   * 지금은 "현재" 표시만 그 항목으로 옮겨 가고 목록의 시간 순서는 그대로다.
   *
   * 되돌린 지점 이후의 저장본도 지우지 않는다 — 되돌리기가 곧 버림이 되면
   * 앞 버전을 한 번 구경하는 것조차 위험한 일이 된다. 언제든 다시 앞으로 갈 수 있다.
   * 이후에 편집하고 저장하면 그때 새 저장본이 맨 위에 쌓인다.
   */
  /**
   * [목업] 개발 패널의 "이력 개수" — 빈 상태와 스크롤을 눈으로 보려고 목록을 통째로 갈아 끼운다.
   * 시각은 지금부터 1분 간격으로 거슬러 올라가게 만들어, 최신이 위에 오는 순서를 지킨다.
   */
  const setHistoryCount = useCallback((n: number) => {
    const now = Date.now();
    const next: SaveEntry[] = Array.from({ length: n }, (_, i) => {
      const no = n - i;
      const at = new Date(now - i * 60_000);
      return {
        id: no,
        no,
        time: at.toLocaleString("ko-KR", {
          year: "numeric", month: "2-digit", day: "2-digit",
          hour: "numeric", minute: "2-digit", second: "2-digit",
        }),
        clock: at.toLocaleTimeString("ko-KR", { hour: "numeric", minute: "2-digit", second: "2-digit" }),
        day: at.toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }),
        summary: SAVE_SUMMARIES[(no - 1) % SAVE_SUMMARIES.length],
      };
    });
    setHistory(next);
    setAppliedId(next[0]?.id ?? null);
  }, []);

  const applyRevert = useCallback((e: SaveEntry) => {
    setReverting(true);
    // [목업] 고른 버전을 받아 오는 구간 — 실제 API 가 붙으면 이 setTimeout 이 그 요청이 된다.
    revertTimerRef.current = window.setTimeout(() => {
      setAppliedId(e.id);
      setRevertedTo(e.no);
      // 저장된 버전을 그대로 얹었으니 저장하지 않은 변경사항은 남아 있지 않다.
      setDirty(false);
      setReverting(false);
    }, REVERT_MS);
  }, []);

  /**
   * 목록에서 항목을 고른 순간.
   *
   * 확인 단계는 두지 않는다 — 되돌리기는 새 저장본을 만들지도, 기존 저장본을 지우지도
   * 않아서 언제든 되돌아올 수 있다. 매번 물으면 버전을 오가며 비교하는 일이 번거로워진다.
   *
   * 딱 한 경우만 예외다: 저장하지 않은 편집이 있으면 그것만은 되살릴 수 없으므로 먼저 묻는다.
   */
  const requestRevert = useCallback((e: SaveEntry) => {
    if (dirty) { setPendingRevert(e); return; }
    applyRevert(e);
  }, [dirty, applyRevert]);

  // 체크 표시는 잠깐만 머문다. 연달아 저장하면 타이머가 다시 시작된다.
  useEffect(() => {
    if (!justSaved) return;
    const t = setTimeout(() => setJustSaved(false), SAVED_HINT_MS);
    return () => clearTimeout(t);
  }, [justSaved, history.length]);

  // 되돌리기 알림도 잠깐만 머문다. 라이브 영역이 같은 문장을 계속 물고 있으면
  // 다음 알림이 "내용이 안 바뀌었다"고 판단돼 아예 읽히지 않는다.
  useEffect(() => {
    if (revertedTo === null) return;
    const t = setTimeout(() => setRevertedTo(null), SAVED_HINT_MS);
    return () => clearTimeout(t);
  }, [revertedTo]);

  // 라이브 영역이 가리키는 "지금 이 버전". 되돌리면 맨 위가 아닌 항목이 현재가 되므로
  // 목록 순서가 아니라 appliedId 로 찾아야 한다.
  const currentVersion = history.find((e) => e.id === appliedId) ?? history[0];

  // ⌘S / Ctrl+S — 브라우저의 "페이지 저장"을 막고 에디터 저장으로 돌린다.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "s" && e.key !== "S") return;
      if (!(e.metaKey || e.ctrlKey) || e.altKey) return;
      e.preventDefault();
      saveNow();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [saveNow]);
  const [dlFormat, setDlFormat] = useState(DL_FORMATS[0]);
  const [dlScale, setDlScale] = useState(DL_SCALES[0]);
  const [dlPages, setDlPages] = useState("all");

  const pageOptions = [`모든 페이지 (1~${pages})`, `현재 페이지 (${page})`];
  const dlPageLabel = dlPages === "all" ? pageOptions[0] : pageOptions[1];
  const dlPageCount = dlPages === "all" ? pages : 1;

  useEffect(() => {
    if (!findOpen && !dlOpen && !versionsOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setFindOpen(false);
      setDlOpen(false);
      if (versionsOpen) closeVersions();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [findOpen, dlOpen, versionsOpen, closeVersions]);

  const scale = zoom / 100;
  const boardW = Math.round(board.w * scale);
  const boardH = Math.round(board.h * scale);

  // ── 눈금자 원점 — 아트보드 왼쪽 위 모서리가 캔버스 뷰포트 안에서 어디에 있는지 ──
  const canvasRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [view, setView] = useState({ x: 0, y: 0, w: 0, h: 0 });

  const measure = useCallback(() => {
    const c = canvasRef.current;
    const b = boardRef.current;
    if (!c || !b) return;
    const cr = c.getBoundingClientRect();
    const br = b.getBoundingClientRect();
    const next = { x: br.left - cr.left, y: br.top - cr.top, w: cr.width, h: cr.height };
    // 스크롤 중에도 매 픽셀 리렌더되지 않도록 값이 실제로 바뀔 때만 반영한다.
    setView((prev) =>
      prev.x === next.x && prev.y === next.y && prev.w === next.w && prev.h === next.h ? prev : next,
    );
  }, []);

  useLayoutEffect(() => { measure(); }, [measure, zoom, boardW, boardH, sidebarOpen, docked]);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ro = new ResizeObserver(measure);
    ro.observe(c);
    window.addEventListener("resize", measure);
    return () => { ro.disconnect(); window.removeEventListener("resize", measure); };
  }, [measure]);

  // ── 패널 여닫을 때 / 채팅 열을 접었다 펼 때 캔버스 리센터 ──────────────────
  // 태블릿의 속성 패널은 캔버스 위를 덮고 미끄러지므로 스크롤 영역 자체는 그대로다.
  // 그래서 "보이는 폭"(clientWidth − 가려진 폭)을 따로 계산해 그 한가운데로 맞춘다.
  // 선택된 요소가 있으면 그 요소를, 없으면 캔버스 콘텐츠 중심을 기준으로 삼는다.
  // 배율(zoom)은 건드리지 않고 스크롤(팬)만 옮긴다.
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    // 패널 슬라이드(220ms)가 끝난 뒤의 최종 배치를 기준으로 맞춘다.
    const t = setTimeout(() => {
      const visibleW = Math.max(1, c.clientWidth - coveredByPanel);

      // 기준점 — 캔버스 스크롤 좌표계에서의 중심.
      // offsetParent 에 기대지 않도록 화면 좌표에서 되돌려 계산한다.
      const b = boardRef.current;
      let cx = c.scrollWidth / 2;
      let cy = c.scrollHeight / 2;
      if (selected && b) {
        const cr = c.getBoundingClientRect();
        const br = b.getBoundingClientRect();
        cx = br.left - cr.left + c.scrollLeft + br.width / 2;
        cy = br.top - cr.top + c.scrollTop + br.height / 2;
      }

      const clamp = (v: number, max: number) => Math.max(0, Math.min(v, Math.max(0, max)));
      const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      c.scrollTo({
        left: clamp(cx - visibleW / 2, c.scrollWidth - c.clientWidth),
        top: clamp(cy - c.clientHeight / 2, c.scrollHeight - c.clientHeight),
        behavior: smooth ? "smooth" : "auto",
      });
      // 스크롤이 실제로 움직이지 않는 경우(넘치지 않을 때)에도 눈금자 원점은 갱신해야 한다.
      measure();
    }, 240);
    return () => clearTimeout(t);
    // chatCollapsed — 채팅 열 접기/펴기로 에디터 폭이 바뀌면 배율은 그대로 두고 팬만 다시 맞춘다.
  }, [panelOpen, coveredByPanel, selected, measure, chatCollapsed]);

  return (
    <div
      className={`${embedded ? "absolute" : "fixed"} inset-0 z-[95] flex flex-col`}
      style={{ ...font, background: C.bg, color: C.text, fontSize: 15 }}
    >
      <style>{`
        @keyframes miniEditorIn { from { opacity: 0; transform: scale(0.99); } to { opacity: 1; transform: scale(1); } }
        .mini-editor { animation: miniEditorIn 180ms ease-out; }
        @keyframes versionSheetIn { from { transform: translateY(100%); } to { transform: translateY(0); } }
        /* 항목 전체가 버튼이다. 되돌리기 글자는 자리를 늘 차지하고 투명도만 바뀐다
           — hover 때 자리를 만들면 옆 요약 글자가 밀린다.
           마우스가 없는 환경에는 hover 가 없어 처음부터 보인다. */
        .version-item__action { opacity: 1; }
        @media (hover: hover) and (pointer: fine) {
          .version-item__action { opacity: 0; transition: opacity 120ms ease; }
          .version-item:hover { background-color: #F2F4F8; }
          .version-item:hover .version-item__action,
          .version-item:focus-visible .version-item__action { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mini-editor { animation: none; }
          .editor-panel, .editor-panel-toggle { transition: none !important; }
        }
        .mini-editor-canvas {
          background-image:
            linear-gradient(45deg, #d8dce4 25%, transparent 25%),
            linear-gradient(-45deg, #d8dce4 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #d8dce4 75%),
            linear-gradient(-45deg, transparent 75%, #d8dce4 75%);
          background-size: 16px 16px;
          background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
          background-color: #c9ced8;
        }
        /* 클릭 영역 — 터치는 44px 표준, 데스크톱은 마우스 기준으로 줄여 56px 바 안에 여백을 남긴다.
           아이콘 글리프 크기는 두 경우 모두 같다. */
        .bar-icon, .bar-label, .bar-pill { height: ${BTN_TOUCH}px; }
        .bar-icon { width: ${BTN_TOUCH}px; }
        /* 채워진 버튼이 실제로 그리는 면 — 36px 고정. 터치에서는 클릭 영역보다 작아 위아래 여백이 남는다 */
        .bar-fill { height: ${BTN_FILL}px; }
        .bar-fill-square { width: ${BTN_FILL}px; }
        @media (min-width: ${DESKTOP_MIN}px) {
          .bar-icon, .bar-label, .bar-pill { height: ${BTN_ICON}px; }
          .bar-icon { width: ${BTN_ICON}px; }
        }
        /* 면 없는 상단바 버튼 — 색은 CSS 변수로 받고, hover 때만 옅은 배경이 생긴다 */
        .bar-btn {
          background: transparent;
          color: var(--bar-rest);
          transition: color 120ms ease, background-color 120ms ease;
        }
        .bar-btn:hover:not(:disabled) { background: ${HOVER_BG}; color: var(--bar-hover); }
        /* 좌측 묶음(pill) — 툴바 56px 에서 위아래 8px 씩 뺀 40px 로 못박는다.
           안쪽 버튼은 클릭 영역(터치 44)이 아니라 면 크기(36)를 쓰고 세로 패딩은 2px 만 남긴다.
           이 고정이 없으면 터치 규격에서 44 + 패딩 8 = 52px 이 되어 툴바 위아래에 2px 밖에
           남지 않고, 묶음이 창 경계와 툴바 구분선에 닿아 보인다. */
        .bar-group-pill { height: 40px; padding: 2px; }
        .bar-group-pill .bar-icon,
        .bar-group-pill .bar-pill { height: 36px; }
        .bar-group-pill .bar-icon { width: 36px; }
        /* 묶음 안에서는 hover 배경(${HOVER_BG})이 면 색과 거의 같아 눌린 티가 나지 않는다.
           흰 면으로 한 단계 띄워 세그먼트 컨트롤처럼 읽히게 한다. */
        .bar-group-pill .bar-btn:hover:not(:disabled) { background: #FFFFFF; }
        .bar-group-pill .bar-btn:active:not(:disabled) { background: #E9EDF3; }
        .bar-btn:active:not(:disabled) { background: #E9EDF3; }
        /* 비활성은 색이 아니라 투명도로 구분한다 — 활성 색과 확실히 갈리도록 낮게 잡는다 */
        .bar-btn:disabled { opacity: 0.32; }
        .bar-btn-primary { transition: filter 120ms ease; }
        .bar-btn-primary:hover { filter: brightness(0.97); }
        .bar-btn-primary:active { filter: brightness(0.94); }
        @keyframes editorPopIn { from { transform: translateY(-6px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .editor-popover { animation: editorPopIn 150ms ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .editor-popover { animation: none; }
        }
      `}</style>

      <div className="mini-editor flex flex-col h-full">
        {/* ── 상단바 56px ─────────────────────────────────── */}
        <header
          className="relative z-30 shrink-0 flex items-center"
          style={{
            height: BAR_H,
            paddingLeft: BAR_PAD_X,
            background: C.card,
            borderBottom: `1px solid ${C.line}`,
          }}
        >
          {/* 편집 이력 + 화면 표시 — 상단바에서 유일하게 면을 갖는 묶음.
              두 그룹은 안쪽 세로 구분선 하나로만 나눈다. 나머지 그룹(문서 액션·창 제어)에는
              면을 주지 않는다 — 알약이 여러 개 뜨면 그룹 구분이 오히려 시끄러워진다. */}
          <div className="bar-group-pill flex items-center shrink-0" style={{ gap: 2, borderRadius: BTN_R + 5, background: GROUP_PILL_BG }}>
            {/* 편집 이력 — 실행취소 · 다시 실행 */}
            <BarIcon label="실행취소" disabled><Undo2 size={ICON} strokeWidth={1.9} /></BarIcon>
            <BarIcon label="다시 실행" disabled><Redo2 size={ICON} strokeWidth={1.9} /></BarIcon>

            <BarDivider style={{ marginInline: 5 }} />

            {/* 화면 표시 — 축소 · 배율 · 확대 · 화면에 맞추기 */}
            <BarIcon label="축소" onClick={() => setZoom((z) => Math.max(ZOOM_MIN, z - 2))} disabled={zoom <= ZOOM_MIN}>
              <Minus size={ICON} strokeWidth={2.2} />
            </BarIcon>
            <button
              type="button"
              onClick={() => setZoom(24)}
              className="bar-btn bar-pill shrink-0 px-2 tabular-nums"
              style={{ borderRadius: BTN_R, minWidth: 50, fontSize: 14.5, fontWeight: 600, "--bar-rest": TONE_STRONG, "--bar-hover": TONE_STRONG } as React.CSSProperties}
            >
              {zoom}%
            </button>
            <BarIcon label="확대" onClick={() => setZoom((z) => Math.min(ZOOM_MAX, z + 2))} disabled={zoom >= ZOOM_MAX}>
              <Plus size={ICON} strokeWidth={2.2} />
            </BarIcon>
            <BarIcon label="화면에 맞추기"><Fullscreen size={ICON} strokeWidth={1.8} /></BarIcon>
          </div>

          {/* 좌측 묶음과 문서 액션 사이 — 구분선 없이 남는 폭 전부를 여백으로 쓴다.
*/}
          <div className="flex-1 min-w-0" />

          {/* ── 우측 액션 그룹 — 찾기부터 닫기까지 하나로 묶는다.
              그룹의 우측 끝을 화면 오른쪽에서 16px 안쪽에 고정하고,
              안쪽 간격은 전부 고정값이라 늘어나지 않는다
              (남는 공간은 위 flex-1 하나에서만 흡수된다). */}
          <div className="shrink-0 flex items-center" style={{ paddingRight: BAR_PAD_X }}>

          {/* 문서 조작 — 찾기 · 공유 · 저장 */}
          <div className="flex items-center" style={{ gap: GAP_IN }}>
            {/* 찾기 — 텍스트 찾기 / 바꾸기 팝오버 */}
            <div className="relative shrink-0">
              <BarButton
                label="찾기"
                icon={<Search size={ICON} strokeWidth={1.9} />}
                onClick={() => { setFindOpen((v) => !v); setDlOpen(false); }}
              />
              {findOpen && (
                <Popover width={360} onClose={() => setFindOpen(false)}>
                  <div className="p-5 flex flex-col gap-3.5">
                    <div className="flex items-center">
                      <span className="flex-1" style={{ fontSize: 18, fontWeight: 700, color: C.text }}>
                        텍스트 찾기 / 바꾸기
                      </span>
                      <button
                        type="button"
                        aria-label="닫기"
                        onClick={() => setFindOpen(false)}
                        className="shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center transition-colors hover:bg-[#F2F4F8]"
                        style={{ color: C.sub }}
                      >
                        <X size={ICON} strokeWidth={1.9} />
                      </button>
                    </div>

                    <FindInput value={findText} placeholder="찾을 텍스트" onChange={setFindText} />
                    <FindInput value={replaceText} placeholder="바꿀 텍스트" onChange={setReplaceText} />

                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={matchCase}
                        onChange={(e) => setMatchCase(e.target.checked)}
                        className="shrink-0 w-[18px] h-[18px] rounded-[5px] cursor-pointer"
                        style={{ accentColor: C.primary }}
                      />
                      <span style={{ fontSize: 14.5, color: C.text }}>대소문자 구분</span>
                    </label>

                    <div className="flex justify-end pt-1">
                      <button
                        type="button"
                        disabled={!findText}
                        onClick={() => setFindOpen(false)}
                        className="h-12 px-5 rounded-[12px] transition-colors disabled:opacity-45 disabled:cursor-not-allowed enabled:hover:brightness-[0.97]"
                        style={{ background: C.primary, color: "#FFFFFF", fontSize: 15, fontWeight: 700 }}
                      >
                        모두 바꾸기
                      </button>
                    </div>
                  </div>
                </Popover>
              )}
            </div>

            <BarButton label="공유" icon={<Share2 size={ICON} strokeWidth={1.9} />} onClick={share} />

            {/* 저장 — 누르는 즉시 저장. 메뉴도, 본체/화살표를 나눈 분할 버튼도 없다.
                저장은 반복 빈도가 높고 기본 동작이 하나뿐이라 한 번의 클릭으로 끝나야 한다.
                방금 저장했다는 사실은 아이콘(체크) · 옆 이력 아이콘의 개수 배지 · 라이브 영역이 함께 전한다. */}
            <BarButton
              label={saving ? "저장 중" : "저장"}
              tooltip={saveBlocked ?? undefined}
              disabled={saving || !!saveBlocked}
              busy={saving}
              icon={saving
                ? <Loader2 size={ICON} strokeWidth={2.2} className="animate-spin" />
                : justSaved
                  ? <Check size={ICON} strokeWidth={2.2} style={{ color: C.primary }} />
                  : <Save size={ICON} strokeWidth={1.9} />}
              onClick={() => saveNow()}
            />

            {/* 저장 이력 — 저장 바로 오른쪽의 별개 아이콘이다.
                저장(쓰기)과 이력(읽기·되돌리기)은 성격이 달라 한 드롭다운으로 합치지 않는다.
                저장본이 0개여도 아이콘은 그대로 둔다 — 사라지면 옆 아이콘들의 자리가 밀리고,
                무엇보다 "이런 기능이 있다"는 사실 자체를 알 수 없게 된다. 비활성도 아니다. */}
            <div className="relative shrink-0">
              <IconTooltip label="저장 이력">
                <button
                  ref={versionsBtnRef}
                  type="button"
                  onClick={() => {
                    setVersionsOpen((v) => !v);
                    setFindOpen(false);
                    setDlOpen(false);
                  }}
                  aria-haspopup="dialog"
                  aria-expanded={versionsOpen}
                  aria-label="저장 이력"
                  className="bar-btn bar-icon relative shrink-0 flex items-center justify-center"
                  style={{
                    ...toneVars("base"),
                    borderRadius: BTN_R,
                    // 툴바의 다른 아이콘과 같은 맨 아이콘이고, 열려 있을 때만 틴트가 붙는다.
                    ...(versionsOpen
                      ? { background: C.primarySoft, "--bar-rest": C.primary, "--bar-hover": C.primary }
                      : null),
                  } as React.CSSProperties}
                >
                  <History size={ICON} strokeWidth={1.9} />

                  {/* 개수 배지 — 아이콘 우측 상단. 버튼 "안쪽"에 둔다.
                      버튼 바깥에 절대 배치하면 레이아웃 폭에 잡히지 않아 옆 버튼과의
                      간격이 다른 곳보다 좁아 보이고, 툴팁의 기준 상자도 눈대중과 어긋난다.
                      0개면 렌더하지 않는다 — 빈 배지는 눌러야 할 것이 남은 것처럼 읽힌다. */}
                  {history.length > 0 && (
                    <span
                      className="absolute pointer-events-none rounded-full flex items-center justify-center tabular-nums"
                      aria-hidden="true"
                      style={{
                        top: 4, right: 4,
                        minWidth: 14, height: 14, paddingInline: 3,
                        background: C.primarySoft, color: C.primary,
                        fontSize: 10, fontWeight: 700, lineHeight: "14px",
                      }}
                    >
                      {history.length}
                    </span>
                  )}
                </button>
              </IconTooltip>

              {versionsOpen && isTabletUp && (
                <Popover width={300} top={isDesktop ? 54 : 58} onClose={closeVersions}>
                  {/* 목록이 스크롤되므로 팝오버의 둥근 모서리 안쪽으로 잘라 준다 */}
                  <div className="flex flex-col overflow-hidden rounded-[16px]">
                    <VersionList entries={history} appliedId={appliedId} onRevert={requestRevert} />
                  </div>
                </Popover>
              )}
            </div>

            {/* 저장 완료 알림 — 눈에는 보이지 않고 스크린리더에만 읽힌다.
                메뉴가 사라져 "저장을 눌렀다"는 실감이 약해진 자리를 이 한 줄이 메운다. */}
            <span className="sr-only" role="status" aria-live="polite">
              {saving
                ? "저장 중"
                : revertedTo !== null
                  ? `저장본 ${revertedTo}로 되돌렸습니다.`
                  : justSaved ? `저장되었습니다. 저장본 ${currentVersion?.no ?? 0}.` : ""}
            </span>
          </div>

          {/* 다운로드 — 형식·크기·페이지 옵션 팝오버. 상단바에서 면을 가진 유일한 요소.
              찾기·공유·저장과 같은 문서 조작이라 간격도 같은 12px를 쓴다. */}
          <div className="relative shrink-0" style={{ marginLeft: GAP_IN }}>
            <BarButton
              label="다운로드"
              primary
              icon={<Download size={ICON} strokeWidth={2} />}
              onClick={() => { setDlOpen((v) => !v); setFindOpen(false); }}
            />
            {dlOpen && (
              <Popover width={360} onClose={() => setDlOpen(false)}>
                <div className="p-5 flex flex-col gap-4">
                  <div className="flex items-center">
                    <span className="flex-1" style={{ fontSize: 18, fontWeight: 700, color: C.text }}>다운로드</span>
                    <button
                      type="button"
                      aria-label="닫기"
                      onClick={() => setDlOpen(false)}
                      className="shrink-0 w-9 h-9 rounded-[10px] flex items-center justify-center transition-colors hover:bg-[#F2F4F8]"
                      style={{ color: C.sub }}
                    >
                      <X size={ICON} strokeWidth={1.9} />
                    </button>
                  </div>

                  <DlField label="파일 형식" value={dlFormat} options={DL_FORMATS} onChange={setDlFormat} />
                  <DlField label="크기" value={dlScale} options={DL_SCALES} onChange={setDlScale} />
                  <DlField
                    label="페이지 선택"
                    value={dlPageLabel}
                    options={pageOptions}
                    onChange={(v) => setDlPages(v === pageOptions[0] ? "all" : "current")}
                  />

                  <p style={{ fontSize: 12.5, color: C.sub }}>
                    다운로드 정보 · {dlFormat} · {dlScale} · {dlPageCount}페이지
                  </p>

                  <button
                    type="button"
                    onClick={() => setDlOpen(false)}
                    className="w-full h-12 rounded-[12px] flex items-center justify-center gap-2 transition-colors hover:brightness-[0.97] active:brightness-95"
                    style={{ background: C.primary, color: "#FFFFFF" }}
                  >
                    <Download size={17} strokeWidth={2} />
                    <span style={{ fontSize: 14.5, fontWeight: 700 }}>다운로드</span>
                  </button>
                </div>
              </Popover>
            )}
          </div>

          {/* 다운로드 ↔ 창 제어 사이 20px — 구분선을 그 한가운데(10px / 1px / 10px)에 둔다 */}
          <BarDivider style={{ marginInline: GAP_GROUP / 2 }} />

          {/* 창 제어 — 아이콘만 쓰는 그룹이다. 라벨을 달지 않는 이유는
              전체화면·닫기가 문서를 다루는 액션이 아니라 창을 다루는 액션이라,
              찾기·공유·저장·다운로드와 같은 줄에 서되 다른 층으로 읽혀야 하기 때문이다. */}
          <div className="flex items-center" style={{ gap: GAP_IN }}>
            {/* 전체화면 — 채팅 열을 접었다 편다.
                기준은 창 폭이 아니라 "2단 구성 안에 있는가"(split)다. 접을 채팅 열이 없으면
                누를 것도 없기 때문이다. 그래서 태블릿에는 아예 나오지 않고, 데스크톱이라도
                에디터가 단독으로 열렸을 때는 나오지 않는다
                — 예전에는 창 폭만 보고 그려서, 단독으로 열면 눌러도 아무 일도 없는 버튼이 서 있었다. */}
            {split && (
              <BarIcon
                label={chatCollapsed ? "전체화면 해제" : "전체화면"}
                tone="faint"
                active={chatCollapsed}
                onClick={split.toggle}
              >
                {chatCollapsed
                  ? <Minimize2 size={ICON} strokeWidth={1.9} />
                  : <Maximize2 size={ICON} strokeWidth={1.9} />}
              </BarIcon>
            )}
            <BarIcon label="닫기" tone="faint" onClick={onClose}><X size={ICON} strokeWidth={1.9} /></BarIcon>
          </div>

          </div>
        </header>

        {/* ── 본문: 좌측 도구 레일 + 캔버스 + 우측 사이드바 ─── */}
        <div className="flex-1 min-h-0 flex relative">
          {/* 도구 레일 */}
          <nav
            className="shrink-0 overflow-y-auto py-2 flex flex-col items-center gap-0.5"
            style={{ width: RAIL_W, background: C.card, borderRight: `1px solid ${C.line}`, scrollbarWidth: "none" }}
          >
            {TOOLS.map((t) => {
              const disabled = !!t.needsSelection && !hasSelection;
              const active = tool === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => { if (disabled) return; setTool(t.id); markDirty(); }}
                  disabled={disabled}
                  aria-pressed={active}
                  className="w-16 min-h-[56px] rounded-[12px] flex flex-col items-center justify-center gap-1 disabled:opacity-35 transition-colors active:bg-[#EDF0F5] hover:bg-[#F5F7FA]"
                  style={{
                    background: active ? C.primarySoft : "transparent",
                    color: active ? C.primary : C.text,
                  }}
                >
                  {t.icon}
                  <span style={{ fontSize: 11, fontWeight: active ? 700 : 500, color: active ? C.primary : C.sub, whiteSpace: "nowrap" }}>
                    {t.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* 캔버스 영역 — 눈금자 + 체커보드. 코드 모드에서는 소스가 이 자리를 대신한다. */}
          <div className="relative flex-1 min-w-0 flex flex-col">
            {/* 되돌리기 — 캔버스 영역만 덮는다. 레일·사이드바까지 덮으면
                "지금 무엇이 바뀌는 중인지"가 흐려진다. */}
            {showRevertOverlay && <CanvasLoadingOverlay message="버전을 불러오고 있어요" />}

            {/* 위 눈금자 (왼쪽 모서리 칸 포함) */}
            <div className="shrink-0 flex" style={{ height: RULER }}>
              <div
                className="shrink-0"
                style={{ width: RULER, background: C.card, borderRight: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}
              />
              <div className="flex-1 min-w-0">
                <Ruler axis="x" origin={view.x} length={view.w} scale={scale} />
              </div>
            </div>

            <div className="flex-1 min-h-0 flex">
              {/* 왼쪽 눈금자 */}
              <div className="shrink-0" style={{ width: RULER }}>
                <Ruler axis="y" origin={view.y} length={view.h} scale={scale} />
              </div>

              {/* 캔버스 — 빈 곳을 누르면 선택 해제(패널 접힘) */}
              <div
                ref={canvasRef}
                className="mini-editor-canvas flex-1 min-w-0 overflow-auto flex"
                /* 패널이 덮는 폭만큼 오른쪽 안여백을 준다.
                   아트보드는 m-auto 로 가운데 서므로, 이 여백이 있어야 "캔버스 전체"가 아니라
                   "실제로 보이는 영역"의 한가운데에 선다. 넘칠 때는 스크롤 영역도 그만큼 넓어져
                   아래 리센터가 선택된 요소를 보이는 영역 가운데로 끌어올 수 있다. */
                style={{
                  padding: CANVAS_PAD,
                  paddingRight: CANVAS_PAD + coveredByPanel,
                  transition: "padding-right 220ms cubic-bezier(0.32,0.72,0,1)",
                }}
                onScroll={measure}
                onClick={() => {
                  setSelected(false);
                  if (!docked) setPanelOpen(false);
                }}
              >
                {/* 아트보드 — 누르면 요소 선택으로 보고 속성 패널을 연다.
                    m-auto 는 내용이 넘칠 때도 시작 지점이 잘리지 않게 한다. */}
                <div
                  ref={boardRef}
                  role="button"
                  tabIndex={0}
                  aria-label="캔버스 요소 선택"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelected(true);
                    setSidebarTab("design");
                    if (!docked) setPanelOpen(true);
                  }}
                  className="relative shrink-0 m-auto"
                  style={{
                    width: boardW,
                    height: boardH,
                    background: C.card,
                    boxShadow: "0 10px 30px rgba(16,24,40,0.28)",
                  }}
                >
                  <div className="w-full h-full overflow-hidden">
                    {children ?? <div className="w-full h-full" style={{ background: "#E7EAF0" }} />}
                  </div>
                  {selected && <SelectionHandles />}
                </div>
              </div>
            </div>
          </div>

          {/* ── 우측 사이드바 ────────────────────────────────
              데스크톱은 자리를 차지하는 고정 컬럼 — 여기에는 접는 토글을 두지 않는다.
              그보다 좁으면 캔버스 위로 미끄러지는 패널이고, 가장자리 토글로 여닫는다. */}
          {docked ? (
            <aside className="shrink-0 h-full" style={{ width: SIDEBAR_W, borderLeft: `1px solid ${C.line}` }}>
              <TabletEditorSidebar
                tab={sidebarTab}
                onTabChange={setSidebarTab}
                selected={selected}
              />
            </aside>
          ) : (
            <>
              {/* 우측 가장자리 토글 — 접힌 패널을 여는 유일한 상시 진입점이다.
                  이것이 없으면 패널은 캔버스의 요소를 클릭해야만 열려, 그 안에 든
                  "이력" 탭은 사실상 닿을 수 없는 기능이 된다(디자인·레이어·테마도 마찬가지).
                  좌측 채팅 경계의 토글과는 다른 것이다 — 저쪽은 채팅 열을 접는 버튼이었다. */}
              <button
                type="button"
                aria-label={panelOpen ? "속성 사이드바 닫기" : "속성 사이드바 열기"}
                aria-expanded={panelOpen}
                onClick={() => setPanelOpen((v) => !v)}
                className="editor-panel-toggle absolute z-20 flex items-center justify-center"
                style={{
                  top: "50%",
                  right: panelOpen ? SIDEBAR_W : 0,
                  transform: "translateY(-50%)",
                  width: 28,
                  height: 64,
                  background: C.card,
                  border: `1px solid ${C.line}`,
                  borderRight: "none",
                  borderRadius: "10px 0 0 10px",
                  color: C.sub,
                  transition: "right 220ms cubic-bezier(0.32,0.72,0,1)",
                }}
              >
                {panelOpen ? <ChevronRight size={16} strokeWidth={2} /> : <ChevronLeft size={16} strokeWidth={2} />}
              </button>

              <aside
                className="editor-panel absolute top-0 bottom-0 right-0 z-10"
                aria-hidden={!panelOpen}
                style={{
                  width: SIDEBAR_W,
                  borderLeft: `1px solid ${C.line}`,
                  boxShadow: "-8px 0 24px rgba(16,24,40,0.10)",
                  transform: panelOpen ? "translateX(0)" : "translateX(100%)",
                  transition: "transform 220ms cubic-bezier(0.32,0.72,0,1)",
                }}
              >
                {/* 닫기는 우측 가장자리 토글과 빈 캔버스 탭이 맡는다. 패널 안에 X 를 또 두지 않는다. */}
                <TabletEditorSidebar
                tab={sidebarTab}
                onTabChange={setSidebarTab}
                selected={selected}
              />
              </aside>
            </>
          )}
        </div>

        {/* ── 하단 페이지 바 ─────────────────────────────── */}
        <div
          className="shrink-0 flex items-center gap-2.5 px-3 overflow-x-auto"
          style={{
            height: PAGEBAR_H,
            background: C.card,
            borderTop: `1px solid ${C.line}`,
            scrollbarWidth: "none",
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
          }}
        >
          <button
            type="button"
            onClick={() => { setMaster((v) => !v); markDirty(); }}
            aria-pressed={master}
            className="shrink-0 w-[72px] h-[62px] rounded-[10px] flex flex-col items-center justify-center gap-1.5 transition-colors"
            style={{
              background: master ? C.primary : C.primarySoft,
              border: `1.5px solid ${master ? C.primary : "#D6DDFF"}`,
              color: master ? "#FFFFFF" : C.primary,
            }}
          >
            <LayoutTemplate size={17} strokeWidth={1.8} />
            <span style={{ fontSize: 11, fontWeight: 700 }}>마스터</span>
          </button>

          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => { setPage(n); setMaster(false); }}
              aria-label={`${n}페이지`}
              aria-pressed={page === n && !master}
              className="shrink-0 relative rounded-[10px] overflow-hidden"
              style={{
                width: 88,
                height: 62,
                background: C.bg,
                border: `2px solid ${page === n && !master ? C.primary : C.line}`,
              }}
            >
              {/* 페이지 축소 미리보기 — 아트보드와 같은 비율의 자리표시 */}
              <span className="absolute inset-0 flex items-center justify-center" style={{ background: "#E7EAF0" }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: page === n && !master ? C.primary : C.sub }}>{n}</span>
              </span>
            </button>
          ))}

          <button
            type="button"
            aria-label="페이지 추가"
            onClick={markDirty}
            className="shrink-0 w-[62px] h-[62px] rounded-[10px] flex items-center justify-center transition-colors hover:bg-[#F5F7FA]"
            style={{ border: `1.5px dashed #C9CFDA`, background: C.card }}
          >
            <Plus size={18} strokeWidth={2} color={C.sub} />
          </button>

          <div className="flex-1 min-w-0" />
          <span
            className="shrink-0 rounded-full px-3 py-1.5 tabular-nums"
            style={{ background: C.bg, fontSize: 12.5, fontWeight: 600, color: C.sub, whiteSpace: "nowrap" }}
          >
            {board.w} × {board.h} px
          </span>
        </div>
      </div>

      {/* ── 진입 스켈레톤 ─────────────────────────────────
          최종 화면과 같은 자리에 같은 크기의 블록을 둔다. 다 불러오면 그대로 대체되므로
          화면이 튀지 않는다. 200ms 안에 끝나면 아예 뜨지 않는다(useDelayedLoading). */}
      {showBootSkeleton && (
        <EditorSkeleton railW={RAIL_W} sidebarW={SIDEBAR_W} barH={BAR_H} showSidebar={docked} />
      )}
      <LoadingAnnouncer loading={showBootSkeleton} message="편집기를 불러왔어요" />

      {/* ── 안내 문구 ─────────────────────────────────────── */}
      {toast && <ViewerToast message={toast} top={BAR_H + 16} />}

      {/* ── [목업] 저장 상태 점검 패널 ─────────────────────── */}
      {DEV_PANEL && (
        <SaveDevPanel
          delay={saveDelay}
          onDelay={setSaveDelay}
          state={saveState}
          onState={setSaveState}
          historyCount={history.length}
          onHistoryCount={setHistoryCount}
        />
      )}

      {/* ── 저장 실패 ─────────────────────────────────────
          성공 토스트와 달리 저절로 사라지지 않는다 — 실패는 사용자가 처리할 때까지 남는다. */}
      {saveFailed && (
        <SaveErrorToast onRetry={() => saveNow()} onDismiss={() => setSaveFailed(false)} />
      )}

      {/* ── 저장하지 않은 변경사항 확인 ─────────────────────
          되돌리기는 평소 확인 없이 즉시 적용된다. 이 창은 dirty 일 때만 끼어든다. */}
      {pendingRevert && (
        <UnsavedRevertDialog
          target={pendingRevert}
          embedded={embedded}
          onSaveAndGo={() => {
            const target = pendingRevert;
            setPendingRevert(null);
            // 저장이 끝난 뒤에 옮겨간다 — 저장 중에는 saveNow 가 새 요청을 받지 않는다.
            afterSaveRef.current = () => applyRevert(target);
            saveNow();
          }}
          onDiscardAndGo={() => { const t = pendingRevert; setPendingRevert(null); applyRevert(t); }}
          onCancel={() => setPendingRevert(null)}
        />
      )}

      {/* ── 버전 목록(모바일) ───────────────────────────────
          좁은 화면에서는 트리거에 앵커된 팝오버가 화면 밖으로 나가므로 바텀시트로 올린다.
          담는 그릇만 다르고 안에 든 VersionList 는 팝오버와 같은 것이다. */}
      {versionsOpen && !isTabletUp && (
        <>
          <div
            className={`${embedded ? "absolute" : "fixed"} inset-0 z-[98]`}
            style={{ background: "rgba(16,24,40,0.35)" }}
            onClick={closeVersions}
          />
          <div
            role="dialog"
            aria-label="저장 이력"
            className={`${embedded ? "absolute" : "fixed"} left-0 right-0 bottom-0 z-[99] flex flex-col`}
            style={{
              background: C.card,
              borderRadius: "16px 16px 0 0",
              boxShadow: "0 -8px 32px rgba(16,24,40,0.18)",
              paddingBottom: "env(safe-area-inset-bottom, 0px)",
              animation: "versionSheetIn 220ms cubic-bezier(0.32,0.72,0,1)",
            }}
          >
            {/* 손잡이 — 끌어올린 시트라는 것을 알리는 표시 */}
            <div className="shrink-0 flex justify-center pt-2.5 pb-1">
              <span className="rounded-full" style={{ width: 36, height: 4, background: "#D6DBE4" }} />
            </div>
            <VersionList entries={history} appliedId={appliedId} onRevert={requestRevert} />
          </div>
        </>
      )}
    </div>
  );
}
