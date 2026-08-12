import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, Check, Download, Eye,
  Maximize2, Package, Pencil, Share2, X,
} from "lucide-react";
import {
  DESKTOP_MIN, resultActions, VIEWER_CHROME,
  type ViewerActionKey, type ViewerFileType,
} from "./viewerChrome";
import { useShareToast, ViewerToast } from "./ShareToast";
import { IconTooltip } from "./IconTooltip";

/**
 * 태블릿(768~1024px, 터치) 전용 전체화면 에디터 셸.
 *
 * - 상단바 56px 고정: 뒤로가기 / 파일명+드롭다운 / (중앙 페이지네이션) / 우측 아이콘 액션
 * - 상단바 아래는 children 슬롯. children이 없으면 회색 플레이스홀더만 보여준다.
 * - 우 → 좌 슬라이드인으로 진입, 하단 safe-area 여백 반영
 * - 모든 아이콘 버튼은 터치 타겟 44x44 이상
 *
 * 상단바 구성은 fileType 하나로 결정된다(viewerChrome.ts의 VIEWER_CHROME).
 * 파일명 + 드롭다운과 우측 아이콘 액션은 모든 형식이 공유하고,
 * 페이지네이션 유무·미리보기/편집 토글·아이콘 세트만 형식에 따라 갈린다.
 * fileType을 주지 않으면 기존 호출부와 동일한 구성(편집·다운로드·공유·닫기)을 그대로 쓴다.
 *
 * fileType 은 결과물 뷰어만 넘긴다 — 편집기(TabletDocEditorViewer)는 넘기지 않으므로
 * 아래 결과물 뷰어 전용 구성에서 자연히 제외된다.
 * 결과물 뷰어는 형식과 무관하게 아이콘 순서를 RESULT_ACTIONS 로 통일한다.
 * 폭에 따른 차이는 전체화면(확대) 하나뿐 — 태블릿(1200px 미만)에서는 렌더하지 않는다.
 *
 * 상단바에 셰브론은 파일명 옆 하나뿐이다. 다운로드는 아이콘 하나가 곧 트리거이고,
 * 눌렀을 때 열리는 메뉴는 전 뷰포트 동일한 드롭다운이다(트리거 아래 우측 정렬).
 * 받을 파일이 하나뿐이면 메뉴 없이 바로 내려받는다.
 *
 * 페이지네이션은 600px 초과에서는 상단바 가운데, 600px 이하에서는 본문 위에 뜨는
 * 플로팅 pill(화면 하단 가운데)로 내려간다 — 좁은 폭에서 파일명이 통째로 사라지지 않게
 * 하려는 것이고, 버튼 모양·표기·동작은 그대로다.
 */

const C = {
  primary: "#3B5BFF",
  bg: "#F5F7FA",
  card: "#FFFFFF",
  text: "#1A1D29",
  sub: "#8A90A2",
  line: "#E7EAF0",
} as const;

const font = { fontFamily: "'Pretendard Variable', Pretendard, sans-serif" };

// 목업 데이터 — 파일명 드롭다운에 그대로 사용된다.
const MOCK_FILES = [
  "presentation.html",
  "2026 사업계획 발표자료.pptx",
  "2026년 상반기 브랜드 리뉴얼 랜딩페이지 최종 시안 v3 (검수 완료).html",
  "교통사고 합의서_최종.docx",
];

export interface TabletEditorShellProps {
  /** 현재 파일명. 없으면 목업 목록의 첫 항목을 사용한다. */
  fileName?: string;
  /** 드롭다운에 표시할 파일 목록. */
  files?: string[];
  onSelectFile?: (name: string) => void;
  onBack?: () => void;
  onDownload?: () => void;
  onShare?: () => void;
  onClose?: () => void;
  /** 전달하면 상단바에 편집(연필) 버튼이 추가된다. 문서 결과 → 편집기 진입용. */
  onEdit?: () => void;
  /** 구조보기(문서 구조 패널). fileType 구성에 structure가 있을 때만 렌더된다. */
  onStructure?: () => void;
  /** 확대(전체화면). fileType 구성에 expand가 있을 때만 렌더된다. */
  onExpand?: () => void;
  /**
   * 결과물 파일 형식. 주면 VIEWER_CHROME[fileType] 구성으로 상단바를 그린다.
   * 주지 않으면 기존 구성(편집·다운로드·공유·닫기 + 가운데 파일명)을 유지한다.
   */
  fileType?: ViewerFileType;
  /** 중앙 페이지네이션 상태. fileType 구성이 paginated일 때만 쓰인다. */
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  /** 미리보기·편집 토글 상태 (엑셀). fileType 구성이 viewToggle일 때만 쓰인다. */
  viewMode?: "preview" | "edit";
  onViewModeChange?: (mode: "preview" | "edit") => void;
  /**
   * 내려받을 수 있는 파일 개수 — "전체 파일 받기 (N개)"의 N.
   * 결과물이 파일 여러 개로 이뤄져 있을 때 그 개수를 준다.
   * 주지 않으면 상단바 파일 목록(files)의 개수를 쓴다.
   * 2 이상이어야 다운로드 메뉴가 열리고, 1이면 고를 것이 없어 즉시 내려받는다.
   */
  downloadFileCount?: number;
  /**
   * 다운로드 메뉴 선택 — "current"는 이 파일, "all"은 전체 파일.
   * 없으면 onDownload로 떨어진다. 파일이 하나뿐이면 메뉴 없이 바로 여기로 온다.
   */
  onDownloadVersion?: (kind: "current" | "all") => void;
  /** 파일명 정렬. 기본은 가운데(fileType을 주면 왼쪽). */
  titleAlign?: "center" | "left";
  /** 다운로드 왼쪽에 끼워 넣을 추가 아이콘 버튼들. */
  extraActions?: React.ReactNode;
  /** true면 본문 슬롯의 좌우/상하 패딩을 없앤다(영상처럼 화면을 꽉 채우는 콘텐츠용). */
  bleed?: boolean;
  /** 상단바 바로 아래에 붙는 full-bleed 슬롯(예: 48px 편집 툴바). */
  toolbar?: React.ReactNode;
  /** 화면 하단에 고정되는 full-bleed 슬롯(예: 페이지·확대축소 바). safe-area는 여기서 처리한다. */
  bottomBar?: React.ReactNode;
  /** 상단바 아래 본문 슬롯. 비우면 회색 플레이스홀더가 렌더된다. */
  children?: React.ReactNode;
}

/** 다운로드 메뉴 항목 — 보조 설명줄·아이콘 없이 문구 한 줄. */
function DownloadMenuItem({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      role="menuitem"
      onClick={onClick}
      className="viewer-dl-item viewer-focus active:bg-[#EDF0F5] hover:bg-[#F5F7FA]"
      style={{ fontSize: 15, fontWeight: 600, color: C.text }}
    >
      {label}
    </button>
  );
}

/** 최소 폭 미디어쿼리 구독. 서버에는 window가 없으므로 false로 시작한다. */
function useMinWidth(px: number) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(`(min-width: ${px}px)`).matches,
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(`(min-width: ${px}px)`);
    const on = () => setMatches(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, [px]);
  return matches;
}

/**
 * 상단바 아이콘 버튼 — 크기는 .viewer-action-btn 이 정한다.
 * 손가락으로 누르는 환경(pointer: coarse — 모바일·태블릿)은 44×44,
 * 마우스 환경은 34×34. 폭이 아니라 입력 방식으로 갈리므로 브레이크포인트를 쓰지 않는다.
 *
 * 면(배경·테두리) 없는 맨 아이콘이 기본이다 — 다운로드만 강조하지 않는다.
 * 라벨이 보이지 않는 버튼이므로 hover 시 같은 문구를 툴팁으로 띄우고,
 * aria-label 에도 같은 문구를 넣는다.
 */
function IconButton({
  label,
  onClick,
  disabled = false,
  inactive = false,
  children,
}: {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  /**
   * disabled 와 달리 포커스·툴팁은 살려 두고 눌러도 아무 일이 없게만 한다.
   * 페이지 이동처럼 "끝에 닿았다"를 알려야 하는 버튼에 쓴다.
   */
  inactive?: boolean;
  children: React.ReactNode;
}) {
  return (
    <IconTooltip label={label}>
      <button
        type="button"
        aria-label={label}
        aria-disabled={inactive || undefined}
        onClick={inactive ? undefined : onClick}
        disabled={disabled}
        className="viewer-action-btn viewer-focus shrink-0 flex items-center justify-center transition-colors disabled:opacity-35 active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
        style={{ color: C.text, opacity: inactive ? 0.35 : undefined }}
      >
        {children}
      </button>
    </IconTooltip>
  );
}

export default function TabletEditorShell({
  fileName,
  files = MOCK_FILES,
  onSelectFile,
  onBack,
  onDownload,
  onShare,
  onClose,
  onEdit,
  onStructure,
  onExpand,
  fileType,
  page = 1,
  totalPages = 1,
  onPageChange,
  viewMode = "preview",
  onViewModeChange,
  downloadFileCount,
  onDownloadVersion,
  titleAlign,
  extraActions,
  bleed = false,
  toolbar,
  bottomBar,
  children,
}: TabletEditorShellProps) {
  // 같은 파일명이 두 번 들어와도 한 번만 그린다.
  // (중복이 들어오면 key 가 겹쳐 같은 항목이 반복 렌더되던 문제를 여기서 막는다)
  const fileList = useMemo(() => Array.from(new Set(files)), [files]);
  // 다운로드 대상 개수 — 호출부가 알려주면 그 값을, 아니면 파일 목록 길이를 쓴다.
  const fileCount = downloadFileCount ?? fileList.length;

  const [current, setCurrent] = useState(fileName ?? fileList[0] ?? "");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dlMenuOpen, setDlMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dlMenuRef = useRef<HTMLDivElement>(null);
  const dlTriggerRef = useRef<HTMLButtonElement>(null);
  const contentWrapRef = useRef<HTMLDivElement>(null);
  const [scrolling, setScrolling] = useState(false);
  const isDesktop = useMinWidth(DESKTOP_MIN);
  // 600px 이하 — 상단바에 페이지 네비까지 넣으면 파일명이 통째로 사라진다.
  const isCompact = !useMinWidth(601);
  // 공유 — 링크를 복사하고 편집기와 같은 안내 문구를 띄운다.
  const { message: shareMessage, share } = useShareToast();

  // 외부에서 파일명을 바꾸면 따라간다.
  useEffect(() => {
    if (fileName) setCurrent(fileName);
  }, [fileName]);

  // 다운로드 메뉴를 닫는다. 키보드로 닫을 때는 포커스를 트리거로 되돌린다.
  const closeDlMenu = (returnFocus = false) => {
    setDlMenuOpen(false);
    if (returnFocus) dlTriggerRef.current?.focus();
  };

  // ESC로 드롭다운 닫기 — 다운로드 메뉴는 포커스를 트리거(다운로드 버튼)로 되돌린다.
  useEffect(() => {
    if (!menuOpen && !dlMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      if (dlMenuOpen) closeDlMenu(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, dlMenuOpen]);

  // 메뉴가 열리면 첫 항목으로 포커스를 옮긴다 — 방향키 이동의 시작점.
  useEffect(() => {
    if (!dlMenuOpen) return;
    dlMenuRef.current?.querySelector<HTMLButtonElement>('[role="menuitem"]')?.focus();
  }, [dlMenuOpen]);

  /** 메뉴 안 방향키 이동(↑↓·Home·End). Tab 으로 벗어나면 메뉴를 닫는다. */
  const onDlMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Tab") {
      setDlMenuOpen(false);
      return;
    }
    const items = Array.from(
      dlMenuRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitem"]') ?? [],
    );
    if (!items.length) return;
    const at = items.indexOf(document.activeElement as HTMLButtonElement);
    const move =
      e.key === "ArrowDown" ? (at + 1) % items.length
        : e.key === "ArrowUp" ? (at - 1 + items.length) % items.length
          : e.key === "Home" ? 0
            : e.key === "End" ? items.length - 1
              : -1;
    if (move < 0) return;
    e.preventDefault();
    items[move].focus();
  };

  const pick = (name: string) => {
    setCurrent(name);
    setMenuOpen(false);
    onSelectFile?.(name);
  };

  // ── 상단바 구성 ────────────────────────────────────────────────
  // fileType이 있으면 형식별 구성표를, 없으면 기존 구성(편집·다운로드·공유·닫기)을 쓴다.
  const spec = fileType ? VIEWER_CHROME[fileType] : null;
  // 결과물 뷰어(fileType 있음)는 형식과 무관하게 아이콘 순서를 통일하고 버전 드롭다운을 붙인다.
  // 폭에 따른 차이는 전체화면(확대) 하나뿐 — 태블릿에서는 뺀다.
  const resultChrome = !!spec;
  const actions: (ViewerActionKey | "divider")[] = resultChrome
    ? resultActions(isDesktop)
    : [...(onEdit ? (["edit"] as ViewerActionKey[]) : []), "download", "share", "close"];
  const alignTitle = titleAlign ?? (spec ? "left" : "center");
  // 다운로드는 아이콘 하나가 전부다 — 셰브론도, 분할 버튼도 없다.
  // 받을 파일이 여러 개일 때만 "이 파일 / 전체 파일"을 고르는 메뉴가 열리고,
  // 한 개뿐이면 고를 것이 없으므로 누르는 즉시 내려받는다.
  const showDownloadMenu = resultChrome && fileCount > 1;
  const downloadVersion = (kind: "current" | "all") => {
    setDlMenuOpen(false);
    if (onDownloadVersion) onDownloadVersion(kind);
    else onDownload?.();
  };

  const ACTION_ICON: Record<ViewerActionKey, React.ReactNode> = {
    download: <Download size={21} strokeWidth={1.8} />,
    structure: <Package size={20} strokeWidth={1.8} />,
    share: <Share2 size={20} strokeWidth={1.8} />,
    edit: <Pencil size={19} strokeWidth={1.8} />,
    expand: <Maximize2 size={19} strokeWidth={1.8} />,
    close: <X size={22} strokeWidth={1.8} />,
  };
  const ACTION_LABEL: Record<ViewerActionKey, string> = {
    download: "다운로드", structure: "구조보기", share: "공유",
    edit: "편집", expand: "전체화면", close: "닫기",
  };
  const ACTION_HANDLER: Record<ViewerActionKey, (() => void) | undefined> = {
    download: onDownload,
    structure: onStructure,
    // 호출부 동작이 있으면 함께 실행하고, 안내 문구는 항상 띄운다.
    share: () => { onShare?.(); void share(); },
    edit: onEdit,
    expand: onExpand,
    close: onClose,
  };

  const goPage = (next: number) => onPageChange?.(Math.min(totalPages, Math.max(1, next)));

  // 페이지 네비게이션 — 상단바와 상단바 아래 줄이 같은 것을 쓴다.
  // 페이지가 하나뿐이면 고를 것이 없으므로 아예 만들지 않는다(빈 줄도 남지 않는다).
  // 페이지가 하나뿐이면 고를 것이 없으므로 네비 자체를 만들지 않는다(빈 줄·빈 pill 도 남지 않는다).
  const hasPageNav = !!spec?.paginated && totalPages > 1;
  const pageNav = hasPageNav ? (
    <div className="shrink-0 flex items-center gap-0.5">
      <IconButton label="이전 페이지" onClick={() => goPage(page - 1)} inactive={page <= 1}>
        <ChevronLeft size={19} strokeWidth={2.2} />
      </IconButton>
      <span
        className="tabular-nums px-0.5"
        aria-live="polite"
        style={{ fontSize: 14.5, fontWeight: 600, color: C.text }}
      >
        {page}/{totalPages}
      </span>
      <IconButton label="다음 페이지" onClick={() => goPage(page + 1)} inactive={page >= totalPages}>
        <ChevronRight size={19} strokeWidth={2.2} />
      </IconButton>
    </div>
  ) : null;
  const compactPageNav = isCompact ? pageNav : null;

  // 플로팅 pill 은 스크롤 중에 흐려진다.
  // 실제로 스크롤되는 요소는 본문 슬롯 안쪽(호출부가 만든 스크롤러)일 수 있어,
  // 래퍼에서 캡처 단계로 듣는다 — scroll 은 버블링하지 않지만 캡처는 내려간다.
  //
  // 의존성은 반드시 boolean 이어야 한다. pageNav(JSX 엘리먼트)를 넣으면 매 렌더마다
  // 새 객체라 effect 가 재구독되고, 그때마다 cleanup 이 "멈춤" 타이머를 지워
  // 한 번 흐려진 pill 이 다시 나타나지 못한다.
  const showPagePill = isCompact && hasPageNav;
  useEffect(() => {
    const el = contentWrapRef.current;
    if (!el || !showPagePill) return;
    let idle: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      setScrolling(true);
      clearTimeout(idle);
      idle = setTimeout(() => setScrolling(false), 280);
    };
    el.addEventListener("scroll", onScroll, true);
    return () => { el.removeEventListener("scroll", onScroll, true); clearTimeout(idle); };
  }, [showPagePill]);

  return (
    <div
      className="tablet-editor-shell fixed inset-0 z-[95] flex flex-col"
      style={{ ...font, background: C.bg, color: C.text, fontSize: 15 }}
    >
      <style>{`
        @keyframes tabletShellSlideIn {
          from { transform: translateX(100%); opacity: 0.4; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        .tablet-editor-shell { animation: tabletShellSlideIn 300ms cubic-bezier(0.32, 0.72, 0, 1); }
        @media (prefers-reduced-motion: reduce) {
          .tablet-editor-shell { animation: none; }
        }
        @keyframes tabletShellMenuIn {
          from { transform: translateY(-6px); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .tablet-editor-menu { animation: tabletShellMenuIn 160ms ease-out; }

        /* 상단바 컨트롤 공통 —
           탭 타깃은 폭이 아니라 입력 방식으로 갈린다. 손가락(모바일·태블릿)은 44,
           마우스는 34. 면·테두리는 어느 쪽에도 없고 hover 에서만 옅은 틴트가 생긴다. */
        .viewer-action-btn { width: 34px; height: 34px; border-radius: 10px; }
        .viewer-title-btn  { height: 34px; border-radius: 10px; }
        @media (pointer: coarse) {
          .viewer-action-btn { width: 44px; height: 44px; border-radius: 12px; }
          .viewer-title-btn  { height: 44px; border-radius: 12px; }
        }
        .viewer-focus:focus-visible {
          outline: 2px solid ${C.primary};
          outline-offset: 2px;
        }

        /* 우측 액션 묶음 — 버튼 사이 간격도 탭 타깃과 같은 기준(입력 방식)으로 갈린다.
           마우스는 8px, 손가락은 12px. 버튼 자체는 .viewer-action-btn 이 34/44px 를 잡으므로
           아이콘 글리프 크기는 그대로 두고 여백만 늘어난다. */
        .viewer-actions { gap: 8px; }
        /* 구분선 좌우는 버튼 사이 간격보다 넓게 둔다 — gap 이 이미 양쪽에 붙으므로
           margin 6px 이 그 위에 더해져 실제 분리 폭은 마우스 14px / 손가락 18px 가 된다. */
        .viewer-action-divider { margin-inline: 6px; }
        @media (pointer: coarse) {
          .viewer-actions { gap: 12px; }
        }

        /* 파일명 — 모바일에서만 말줄임하고, 그 위로는 전체를 드러낸다.
           모바일에서는 최소 폭을 박아 둔다. 이게 없으면 상단바가 비좁을 때
           파일명이 0까지 줄어 셰브론만 남고 무슨 파일인지 알 수 없게 된다. */
        .viewer-file-name { white-space: nowrap; }
        @media (max-width: 600px) {
          .viewer-file-name {
            overflow: hidden;
            text-overflow: ellipsis;
            min-width: 7rem;
          }
        }

        /* 페이지 네비 pill — 본문 위에 떠서 화면 하단 가운데에 선다.
           safe-area(홈 인디케이터) 위로 16px 을 띄우고, 뒤 콘텐츠가 비치도록 반투명 + blur.
           스크롤하는 동안에는 흐려져 읽기를 방해하지 않는다. */
        .viewer-page-pill {
          position: absolute;
          left: 50%;
          bottom: calc(16px + env(safe-area-inset-bottom, 0px));
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          align-items: center;
          padding: 2px 6px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.72);
          -webkit-backdrop-filter: blur(14px) saturate(1.5);
          backdrop-filter: blur(14px) saturate(1.5);
          border: 1px solid rgba(16, 24, 40, 0.08);
          box-shadow: 0 6px 20px rgba(16, 24, 40, 0.14);
          transition: opacity 200ms ease;
        }
        .viewer-page-pill[data-scrolling] {
          opacity: 0;
          pointer-events: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .viewer-page-pill { transition: none; }
        }

        /* 다운로드 메뉴 — 전 뷰포트 동일하게 트리거(다운로드 아이콘) 아래 우측 정렬 드롭다운.
           항목이 둘뿐이고 문구도 짧아 화면을 덮는 시트가 필요하지 않다.
           폭은 문구에 맞춰 잡고(max-content), 좁은 화면에서만 화면 안으로 묶는다. */
        .viewer-dl-menu {
          position: absolute;
          top: calc(100% + 6px);
          right: 0;
          width: max-content;
          min-width: 180px;
          max-width: calc(100vw - 16px);
          border-radius: 14px;
        }
        /* 항목 — 터치 기준을 만족하는 48px 고정. 정렬 메뉴(.sort-menu-item)와 같은 밀도다. */
        .viewer-dl-item {
          display: flex;
          align-items: center;
          width: 100%;
          height: 48px;
          padding: 0 12px;
          border-radius: 10px;
          text-align: left;
          white-space: nowrap;
          transition: background-color 120ms ease;
        }
        @media (prefers-reduced-motion: reduce) {
          .viewer-dl-menu { animation: none; }
        }
      `}</style>

      {/* ── 상단바 (56px 고정) ─────────────────────────────── */}
      <header
        className="relative shrink-0 h-14 flex items-center gap-1 px-2"
        style={{ background: C.card, borderBottom: `1px solid ${C.line}` }}
      >
        {onBack && (
          <IconButton label="뒤로 가기" onClick={onBack}>
            <ArrowLeft size={22} strokeWidth={1.8} />
          </IconButton>
        )}

        {/* 파일명 + 드롭다운 — 모든 폭·형식 공통.
            파일명 그룹은 제 폭을 그대로 갖고, 남는 자리는 아래 스페이서와 액션 그룹의
            margin-left:auto 가 가져간다. 예전처럼 파일명 쪽도 flex-1 이면 액션 그룹과
            남는 폭을 반씩 나눠 가져 이름이 필요 이상으로 일찍 잘렸다. */}
        <div className={
          alignTitle === "left" || resultChrome
            ? "min-w-0 shrink flex justify-start pl-1"
            : "flex-1 min-w-0 flex justify-center"
        }>
          {/* 파일명과 셰브론이 하나의 버튼이다 — 파일명 글자 자체가 탭 영역에 들어간다.
              상단바에 남은 유일한 셰브론이라 "목록이 열린다"는 뜻이 이 하나로 확정된다.
              말줄임된 이름의 전체 텍스트는 title/aria-label 로 준다. */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={menuOpen}
            aria-label={`파일 선택: ${current}`}
            title={current}
            className="viewer-title-btn viewer-focus max-w-full min-w-0 px-3 flex items-center gap-1.5 transition-colors active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
          >
            <span
              className="viewer-file-name min-w-0"
              style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.3px", color: C.text }}
            >
              {current}
            </span>
            <ChevronDown
              size={18}
              strokeWidth={2}
              className="shrink-0 transition-transform"
              style={{ color: C.sub, transform: menuOpen ? "rotate(180deg)" : "none" }}
            />
          </button>
        </div>

        {/* 페이지네이션 — 600px 초과에서만 상단바 가운데에 선다.
            같은 크기의 스페이서로 좌우를 밀어 가운데에 세운다. 파일명이 길어 자리가 모자라면
            스페이서가 먼저 0으로 줄어들고, 그다음에야 파일명이 줄어든다.
            600px 이하에서는 여기서 빠지고 상단바 아래 줄로 내려간다(아래 pageNavRow). */}
        {pageNav && !isCompact && <div className="flex-1 min-w-0" />}
        {pageNav && !isCompact && pageNav}
        {pageNav && !isCompact && <div className="flex-1 min-w-0" />}

        {/* 미리보기·편집 토글 — 엑셀 전용 */}
        {spec?.viewToggle && (
          <div
            className="shrink-0 flex items-center gap-0.5 ml-1 p-0.5 rounded-[12px]"
            style={{ background: C.bg, border: `1px solid ${C.line}` }}
          >
            {(["preview", "edit"] as const).map((mode) => {
              const active = viewMode === mode;
              const modeLabel = mode === "preview" ? "미리보기" : "편집";
              return (
                <IconTooltip key={mode} label={modeLabel}>
                  <button
                    type="button"
                    aria-label={modeLabel}
                    aria-pressed={active}
                    onClick={() => onViewModeChange?.(mode)}
                    className="w-10 h-9 rounded-[10px] flex items-center justify-center transition-colors"
                    style={{
                      background: active ? C.card : "transparent",
                      color: active ? C.text : C.sub,
                      boxShadow: active ? "0px 1px 3px rgba(16,24,40,0.12)" : "none",
                    }}
                  >
                    {mode === "preview" ? <Eye size={18} strokeWidth={1.9} /> : <Pencil size={17} strokeWidth={1.9} />}
                  </button>
                </IconTooltip>
              );
            })}
          </div>
        )}


        {/* 우측 아이콘 액션 —
            결과물 뷰어는 RESULT_ACTIONS 통일 순서(태블릿은 확대 제외),
            그 외에는 형식별 세트(VIEWER_CHROME) 순서 그대로 */}
        {/* 액션 아이콘끼리는 붙여서(gap 2px) 한 그룹으로 읽히게 하고,
            파일명 그룹과는 margin-left:auto 로만 벌린다. */}
        <div className="viewer-actions shrink-0 ml-auto flex items-center">
          {extraActions}
          {actions.map((key, i) => {
            if (key === "divider") {
              return <span key={`divider-${i}`} className="viewer-action-divider shrink-0 w-px h-6" style={{ background: C.line }} />;
            }
            // 다운로드 — 아이콘 하나가 곧 트리거다. 누르면 무조건 메뉴가 열리므로
            // 셰브론이 따로 알려줄 정보가 없고, 본체/화살표를 나눈 분할 버튼도 쓰지 않는다.
            // 열려 있다는 사실은 aria-expanded 가 전한다.
            if (key === "download" && showDownloadMenu) {
              return (
                <div key={key} className="relative shrink-0">
                  <IconTooltip label="다운로드">
                    <button
                      ref={dlTriggerRef}
                      type="button"
                      aria-label="다운로드"
                      aria-haspopup="menu"
                      aria-expanded={dlMenuOpen}
                      onClick={() => setDlMenuOpen((v) => !v)}
                      onKeyDown={(e) => {
                        if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
                        e.preventDefault();
                        setDlMenuOpen(true);
                      }}
                      className="viewer-action-btn viewer-focus flex items-center justify-center transition-colors active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
                      style={{ color: C.text, background: dlMenuOpen ? "#EDF0F5" : undefined }}
                    >
                      <Download size={21} strokeWidth={1.8} />
                    </button>
                  </IconTooltip>

                  {dlMenuOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-[30]"
                        onClick={() => setDlMenuOpen(false)}
                      />
                      {/* 전 뷰포트 같은 드롭다운 — 뷰포트 분기 없음(.viewer-dl-menu) */}
                      <div
                        ref={dlMenuRef}
                        role="menu"
                        aria-label="다운로드"
                        onKeyDown={onDlMenuKeyDown}
                        className="viewer-dl-menu tablet-editor-menu z-[31] p-1.5"
                        style={{
                          background: C.card,
                          border: `1px solid ${C.line}`,
                          boxShadow: "0px 12px 32px rgba(16,24,40,0.14)",
                        }}
                      >
                        <DownloadMenuItem label="이 파일 받기" onClick={() => downloadVersion("current")} />
                        <DownloadMenuItem
                          label={`전체 파일 받기 (${fileCount}개)`}
                          onClick={() => downloadVersion("all")}
                        />
                      </div>
                    </>
                  )}
                </div>
              );
            }
            return (
              <IconButton key={key} label={ACTION_LABEL[key]} onClick={ACTION_HANDLER[key]}>
                {ACTION_ICON[key]}
              </IconButton>
            );
          })}
        </div>

        {/* 파일 드롭다운 */}
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-[30]" onClick={() => setMenuOpen(false)} />
            <div
              ref={menuRef}
              role="listbox"
              className={`tablet-editor-menu absolute z-[31] top-[60px] p-1.5 rounded-[16px] overflow-hidden ${
                alignTitle === "left" ? "left-2" : "left-1/2 -translate-x-1/2"
              }`}
              style={{
                width: "min(420px, calc(100vw - 32px))",
                background: C.card,
                border: `1px solid ${C.line}`,
                boxShadow: "0px 12px 32px rgba(16,24,40,0.14)",
              }}
            >
              {fileList.map((name) => {
                const active = name === current;
                return (
                  <button
                    key={name}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => pick(name)}
                    className="viewer-focus w-full min-h-[44px] px-3 rounded-[12px] flex items-center gap-2.5 text-left transition-colors active:bg-[#EDF0F5] hover:bg-[#F5F7FA]"
                  >
                    <span
                      className="flex-1 min-w-0 truncate"
                      style={{ fontSize: 15, fontWeight: active ? 700 : 500, color: active ? C.primary : C.text }}
                    >
                      {name}
                    </span>
                    {active && <Check size={17} strokeWidth={2.2} className="shrink-0" style={{ color: C.primary }} />}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </header>

      {/* ── 상단바 아래 full-bleed 툴바 슬롯 — 안내 배너가 한 줄을 온전히 쓴다 ── */}
      {toolbar && <div className="shrink-0">{toolbar}</div>}

      {/* ── 본문 슬롯 (하단바가 없으면 여기서 safe-area 여백 처리) ──
          600px 이하에서는 페이지 네비가 이 영역 위에 플로팅 pill 로 뜬다 —
          그래서 본문과 pill 을 한 relative 래퍼로 묶는다. */}
      <div ref={contentWrapRef} className="relative flex-1 min-h-0 flex flex-col">
        <main
          className={`flex-1 min-h-0 overflow-y-auto ${bleed ? "" : "px-5 pt-5"}`}
          style={{
            paddingBottom: bleed ? 0 : bottomBar ? 20 : "calc(20px + env(safe-area-inset-bottom, 0px))",
          }}
        >
          {children ?? (
            <div
              className="w-full h-full min-h-[320px] rounded-[16px] flex items-center justify-center"
              style={{ background: "#E7EAF0" }}
            >
              <span style={{ fontSize: 15, fontWeight: 600, color: C.sub }}>콘텐츠 영역</span>
            </div>
          )}
        </main>

        {/* 페이지 네비 — 화면 하단 가운데에 뜨는 반투명 pill.
            콘텐츠를 읽는 동안에는 방해가 되지 않도록 스크롤 중에는 흐려지고,
            멈추면 다시 나타난다. 버튼·표기·동작은 상단바에 있을 때와 같은 것을 쓴다. */}
        {compactPageNav && (
          <div className="viewer-page-pill" data-scrolling={scrolling || undefined}>
            {compactPageNav}
          </div>
        )}
      </div>

      {/* ── 하단 고정 바 슬롯 (safe-area 여백 포함) ─────────────── */}
      {bottomBar && (
        <div
          className="shrink-0"
          style={{
            background: C.card,
            borderTop: `1px solid ${C.line}`,
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
          }}
        >
          {bottomBar}
        </div>
      )}

      {/* 공유 안내 문구 — 상단바(56px) 바로 아래 가운데 */}
      {shareMessage && <ViewerToast message={shareMessage} />}
    </div>
  );
}
