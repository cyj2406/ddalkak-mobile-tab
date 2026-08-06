import React, { useEffect, useRef, useState } from "react";
import { ArrowLeft, ChevronDown, Check, Download, Pencil, Share2, X } from "lucide-react";

/**
 * 태블릿(768~1024px, 터치) 전용 전체화면 에디터 셸.
 *
 * - 상단바 56px 고정: 뒤로가기 / 파일명+드롭다운 / 다운로드·공유·닫기
 * - 상단바 아래는 children 슬롯. children이 없으면 회색 플레이스홀더만 보여준다.
 * - 우 → 좌 슬라이드인으로 진입, 하단 safe-area 여백 반영
 * - 모든 아이콘 버튼은 터치 타겟 44x44 이상
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
  /** 파일명 정렬. 기본은 가운데. 프로덕션 영상 뷰어처럼 왼쪽 정렬이 필요하면 "left". */
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

/** 상단바 아이콘 버튼 — 44x44 터치 타겟, 라운드 12px */
function IconButton({
  label,
  onClick,
  primary = false,
  children,
}: {
  label: string;
  onClick?: () => void;
  primary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center transition-colors ${
        primary ? "active:opacity-90" : "active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
      }`}
      style={primary ? { background: C.primary, color: "#FFFFFF" } : { color: C.text }}
    >
      {children}
    </button>
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
  titleAlign = "center",
  extraActions,
  bleed = false,
  emphasizeDownload = false,
  toolbar,
  bottomBar,
  children,
}: TabletEditorShellProps) {
  const [current, setCurrent] = useState(fileName ?? files[0] ?? "");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 외부에서 파일명을 바꾸면 따라간다.
  useEffect(() => {
    if (fileName) setCurrent(fileName);
  }, [fileName]);

  // ESC로 드롭다운 닫기
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const pick = (name: string) => {
    setCurrent(name);
    setMenuOpen(false);
    onSelectFile?.(name);
  };

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

        {/* 파일명 + 드롭다운 — 길면 말줄임 */}
        <div className={`flex-1 min-w-0 flex ${titleAlign === "left" ? "justify-start pl-1" : "justify-center"}`}>
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

        <div className="shrink-0 flex items-center gap-1">
          {extraActions}
          {onEdit && (
            <IconButton label="편집" onClick={onEdit}>
              <Pencil size={19} strokeWidth={1.8} />
            </IconButton>
          )}
          <IconButton label="다운로드" onClick={onDownload} primary={emphasizeDownload}>
            <Download size={21} strokeWidth={1.8} />
          </IconButton>
          <IconButton label="공유" onClick={onShare}>
            <Share2 size={20} strokeWidth={1.8} />
          </IconButton>
          <IconButton label="닫기" onClick={onClose}>
            <X size={22} strokeWidth={1.8} />
          </IconButton>
        </div>

        {/* 파일 드롭다운 */}
        {menuOpen && (
          <>
            <div className="fixed inset-0 z-[1]" onClick={() => setMenuOpen(false)} />
            <div
              ref={menuRef}
              role="listbox"
              className="tablet-editor-menu absolute z-[2] left-1/2 -translate-x-1/2 top-[60px] p-1.5 rounded-[16px] overflow-hidden"
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
    </div>
  );
}
