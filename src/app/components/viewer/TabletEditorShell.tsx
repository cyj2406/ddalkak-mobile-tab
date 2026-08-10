import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft, ChevronDown, ChevronLeft, ChevronRight, Check, Download, Eye, FileText,
  Maximize2, Package, Pencil, Share2, X,
} from "lucide-react";
import {
  DESKTOP_MIN, FILE_TYPE_META, resultActions, VIEWER_CHROME,
  type ResultVersionInfo, type ViewerActionKey, type ViewerFileType,
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
 * 결과물 뷰어는 형식과 무관하게 아이콘 순서를 RESULT_ACTIONS 로 통일하고 다운로드에 버전 드롭다운을 붙인다.
 * 폭에 따른 차이는 전체화면(확대) 하나뿐 — 태블릿(1200px 미만)에서는 렌더하지 않는다.
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
  /** 다운로드 버전 드롭다운(결과물 뷰어 공통)에 채울 값. 없으면 드롭다운 없이 다운로드만 렌더한다. */
  versions?: ResultVersionInfo;
  /** 버전 드롭다운 선택 — 없으면 onDownload로 떨어진다. */
  onDownloadVersion?: (kind: "current" | "all") => void;
  /** 파일명 정렬. 기본은 가운데(fileType을 주면 왼쪽). */
  titleAlign?: "center" | "left";
  /** 다운로드 왼쪽에 끼워 넣을 추가 아이콘 버튼들. */
  extraActions?: React.ReactNode;
  /** true면 본문 슬롯의 좌우/상하 패딩을 없앤다(영상처럼 화면을 꽉 채우는 콘텐츠용). */
  bleed?: boolean;
  /** 다운로드를 주요 동작으로 강조한다(결과 뷰어처럼 편집이 없는 화면용). */
  emphasizeDownload?: boolean;
  /** 상단바 바로 아래에 붙는 full-bleed 슬롯(예: 48px 편집 툴바). */
  toolbar?: React.ReactNode;
  /** 화면 하단에 고정되는 full-bleed 슬롯(예: 페이지·확대축소 바). safe-area는 여기서 처리한다. */
  bottomBar?: React.ReactNode;
  /** 상단바 아래 본문 슬롯. 비우면 회색 플레이스홀더가 렌더된다. */
  children?: React.ReactNode;
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
 * 상단바 아이콘 버튼 — 터치 기준 44×44, 라운드 12px.
 * 데스크톱(wide = 1200px 이상)은 마우스 조작이라 높이만 36px 로 줄여
 * 56px 상단바 안에서 상하 여백을 확보한다. 아이콘 글리프 크기는 그대로다.
 *
 * 라벨이 보이지 않는 버튼이므로 hover 시 같은 문구를 툴팁으로 띄우고,
 * aria-label 에도 같은 문구를 넣는다.
 */
function IconButton({
  label,
  onClick,
  primary = false,
  disabled = false,
  children,
}: {
  label: string;
  onClick?: () => void;
  primary?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <IconTooltip label={label}>
      <button
        type="button"
        aria-label={label}
        onClick={onClick}
        disabled={disabled}
        className={`shrink-0 w-11 h-11 wide:h-9 rounded-[12px] flex items-center justify-center transition-colors disabled:opacity-35 ${
          primary ? "active:opacity-90" : "active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
        }`}
        style={primary ? { background: C.primary, color: "#FFFFFF" } : { color: C.text }}
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
  versions,
  onDownloadVersion,
  titleAlign,
  extraActions,
  bleed = false,
  emphasizeDownload = false,
  toolbar,
  bottomBar,
  children,
}: TabletEditorShellProps) {
  const [current, setCurrent] = useState(fileName ?? files[0] ?? "");
  const [menuOpen, setMenuOpen] = useState(false);
  const [dlMenuOpen, setDlMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isDesktop = useMinWidth(DESKTOP_MIN);
  // 공유 — 링크를 복사하고 편집기와 같은 안내 문구를 띄운다.
  const { message: shareMessage, share } = useShareToast();

  // 외부에서 파일명을 바꾸면 따라간다.
  useEffect(() => {
    if (fileName) setCurrent(fileName);
  }, [fileName]);

  // ESC로 드롭다운 닫기
  useEffect(() => {
    if (!menuOpen && !dlMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      setDlMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, dlMenuOpen]);

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
  // 버전 드롭다운은 결과물 뷰어에서 버전 정보가 있을 때만 붙는다.
  const showVersionMenu = resultChrome && !!versions;
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

        {/* 파일명 + 드롭다운 — 모든 폭·형식 공통. 길면 말줄임 */}
        {/* 데스크톱 결과물 뷰어는 좌·우 그룹을 flex-1로 나눠 중앙 페이지네이션을 가운데에 둔다 */}
        <div className={
          resultChrome ? "flex-1 min-w-0 flex justify-start pl-1"
            : alignTitle === "left" ? "min-w-0 shrink flex justify-start pl-1"
              : "flex-1 min-w-0 flex justify-center"
        }>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-haspopup="listbox"
            aria-expanded={menuOpen}
            className="max-w-full min-w-0 h-11 px-3 rounded-[12px] flex items-center gap-1.5 transition-colors active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
          >
            <span
              className="truncate"
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

        {/* 중앙 페이지네이션 — 페이지 개념이 있는 형식(docx·pdf·xlsx·pptx)에서만 렌더한다 */}
        {spec?.paginated && (
          <div className="shrink-0 flex items-center gap-0.5 pl-1">
            <IconButton label="이전 페이지" onClick={() => goPage(page - 1)} disabled={page <= 1}>
              <ChevronLeft size={19} strokeWidth={2.2} />
            </IconButton>
            <span className="tabular-nums px-0.5" style={{ fontSize: 14.5, fontWeight: 600, color: C.text }}>
              {page}/{totalPages}
            </span>
            <IconButton label="다음 페이지" onClick={() => goPage(page + 1)} disabled={page >= totalPages}>
              <ChevronRight size={19} strokeWidth={2.2} />
            </IconButton>
          </div>
        )}

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

        {/* 파일명을 왼쪽에 붙였을 때 우측 액션을 끝으로 밀어내는 여백 */}
        {alignTitle === "left" && !resultChrome && <div className="flex-1 min-w-0" />}

        {/* 우측 아이콘 액션 —
            결과물 뷰어는 RESULT_ACTIONS 통일 순서(태블릿은 확대 제외),
            그 외에는 형식별 세트(VIEWER_CHROME) 순서 그대로 */}
        <div className={`flex items-center gap-1 ${resultChrome ? "flex-1 min-w-0 justify-end" : "shrink-0"}`}>
          {extraActions}
          {actions.map((key, i) => {
            if (key === "divider") {
              return <span key={`divider-${i}`} className="shrink-0 w-px h-6 mx-1.5" style={{ background: C.line }} />;
            }
            // 다운로드 — 데스크톱 결과물 뷰어에서는 버전 드롭다운(⌄)을 함께 연다
            if (key === "download" && showVersionMenu) {
              return (
                <div key={key} className="relative shrink-0">
                  <IconTooltip label="다운로드">
                    <button
                      type="button"
                      aria-label="다운로드"
                      aria-haspopup="menu"
                      aria-expanded={dlMenuOpen}
                      onClick={() => setDlMenuOpen((v) => !v)}
                      className="h-11 wide:h-9 px-2 rounded-[12px] flex items-center gap-0.5 transition-colors active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
                      style={{ color: C.text }}
                    >
                      <Download size={21} strokeWidth={1.8} />
                      <ChevronDown
                        size={15}
                        strokeWidth={2}
                        className="transition-transform"
                        style={{ color: C.sub, transform: dlMenuOpen ? "rotate(180deg)" : "none" }}
                      />
                    </button>
                  </IconTooltip>

                  {dlMenuOpen && (
                    <>
                      <div className="fixed inset-0 z-[1]" onClick={() => setDlMenuOpen(false)} />
                      <div
                        role="menu"
                        aria-label="다운로드 버전"
                        className="tablet-editor-menu absolute z-[2] right-0 top-[52px] p-1.5 rounded-[16px]"
                        style={{
                          width: 260,
                          background: C.card,
                          border: `1px solid ${C.line}`,
                          boxShadow: "0px 12px 32px rgba(16,24,40,0.14)",
                        }}
                      >
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => downloadVersion("current")}
                          className="w-full min-h-[52px] px-3 rounded-[12px] flex items-center gap-3 text-left transition-colors active:bg-[#EDF0F5] hover:bg-[#F5F7FA]"
                        >
                          <FileText size={20} strokeWidth={1.7} className="shrink-0" style={{ color: C.text }} />
                          <span className="flex-1 min-w-0">
                            <span className="block truncate" style={{ fontSize: 15, fontWeight: 600, color: C.text }}>현재 버전</span>
                            <span className="block truncate" style={{ fontSize: 13, color: C.sub }}>
                              ver {versions!.version}
                              {fileType ? ` · ${FILE_TYPE_META[fileType].ext}` : ""}
                            </span>
                          </span>
                        </button>
                        <button
                          type="button"
                          role="menuitem"
                          onClick={() => downloadVersion("all")}
                          className="w-full min-h-[52px] px-3 rounded-[12px] flex items-center gap-3 text-left transition-colors active:bg-[#EDF0F5] hover:bg-[#F5F7FA]"
                        >
                          <Package size={20} strokeWidth={1.7} className="shrink-0" style={{ color: C.text }} />
                          <span className="flex-1 min-w-0">
                            <span className="block truncate" style={{ fontSize: 15, fontWeight: 600, color: C.text }}>
                              전체 버전 ({versions!.count}개)
                            </span>
                            <span className="block truncate" style={{ fontSize: 13, color: C.sub }}>ZIP</span>
                          </span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              );
            }
            return (
              <IconButton
                key={key}
                label={ACTION_LABEL[key]}
                onClick={ACTION_HANDLER[key]}
                primary={key === "download" && emphasizeDownload}
              >
                {ACTION_ICON[key]}
              </IconButton>
            );
          })}
        </div>

        {/* 파일 드롭다운 */}
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-[1]" onClick={() => setMenuOpen(false)} />
            <div
              ref={menuRef}
              role="listbox"
              className={`tablet-editor-menu absolute z-[2] top-[60px] p-1.5 rounded-[16px] overflow-hidden ${
                alignTitle === "left" ? "left-2" : "left-1/2 -translate-x-1/2"
              }`}
              style={{
                width: "min(420px, calc(100vw - 32px))",
                background: C.card,
                border: `1px solid ${C.line}`,
                boxShadow: "0px 12px 32px rgba(16,24,40,0.14)",
              }}
            >
              {files.map((name) => {
                const active = name === current;
                return (
                  <button
                    key={name}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => pick(name)}
                    className="w-full min-h-[44px] px-3 rounded-[12px] flex items-center gap-2.5 text-left transition-colors active:bg-[#EDF0F5] hover:bg-[#F5F7FA]"
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

      {/* ── 상단바 아래 full-bleed 툴바 슬롯 ──────────────────── */}
      {toolbar && <div className="shrink-0">{toolbar}</div>}

      {/* ── 본문 슬롯 (하단바가 없으면 여기서 safe-area 여백 처리) ── */}
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
