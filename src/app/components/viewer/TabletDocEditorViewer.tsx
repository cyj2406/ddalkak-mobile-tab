import React, { useEffect, useState } from "react";
import {
  AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, ChevronLeft, ChevronRight,
  Highlighter, Image as ImageIcon, Indent, Italic, Link2, List, ListOrdered, Minus,
  MoreHorizontal, MessageSquare, Palette, Plus, Redo2, Search, Table, Type, Underline, X,
} from "lucide-react";
import TabletEditorShell from "@/app/components/viewer/TabletEditorShell";

/**
 * 태블릿(768~1024px, 터치) 문서 편집기 화면.
 * 1단계 TabletEditorShell을 그대로 감싸 상단바·규격·진입 애니메이션을 공유한다.
 *
 * 데스크톱 ONLYOFFICE의 리본 탭(파일/홈/삽입/그리기/레이아웃/참조/협업/보호/보기/플러그인)은
 * 전부 렌더하지 않고, 자주 쓰는 6개만 48px 한 줄 툴바로 축약한다.
 * 나머지 기능은 "더보기(…)" → 하단 시트로 뺀다.
 * 실제 편집 영역은 iframe이 들어갈 자리이므로 #editor-root 회색 박스로만 표시한다.
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

type Align = "left" | "center" | "right" | "justify";
type ListKind = "none" | "bullet" | "number";

const ALIGN_ORDER: Align[] = ["left", "center", "right", "justify"];
const ALIGN_ICON: Record<Align, React.ReactNode> = {
  left: <AlignLeft size={20} strokeWidth={1.9} />,
  center: <AlignCenter size={20} strokeWidth={1.9} />,
  right: <AlignRight size={20} strokeWidth={1.9} />,
  justify: <AlignJustify size={20} strokeWidth={1.9} />,
};
const LIST_ORDER: ListKind[] = ["none", "bullet", "number"];

// 하단 시트로 뺀 나머지 기능 — 목업
const MORE_ITEMS: { icon: React.ReactNode; label: string }[] = [
  { icon: <Type size={20} strokeWidth={1.8} />, label: "글꼴·크기" },
  { icon: <Palette size={20} strokeWidth={1.8} />, label: "글자색" },
  { icon: <Highlighter size={20} strokeWidth={1.8} />, label: "형광펜" },
  { icon: <Indent size={20} strokeWidth={1.8} />, label: "들여쓰기" },
  { icon: <Table size={20} strokeWidth={1.8} />, label: "표 삽입" },
  { icon: <ImageIcon size={20} strokeWidth={1.8} />, label: "이미지" },
  { icon: <Link2 size={20} strokeWidth={1.8} />, label: "링크" },
  { icon: <MessageSquare size={20} strokeWidth={1.8} />, label: "댓글" },
  { icon: <Search size={20} strokeWidth={1.8} />, label: "찾기·바꾸기" },
];

export interface TabletDocEditorViewerProps {
  fileName?: string;
  totalPages?: number;
  onBack?: () => void;
  onDownload?: () => void;
  onShare?: () => void;
  onClose?: () => void;
  /** 편집 영역(#editor-root) 안에 렌더할 문서. 비우면 회색 플레이스홀더(iframe 자리). */
  children?: React.ReactNode;
}

/** 툴바 버튼 — 44x44 터치 타겟, 48px 바 안에 들어간다 */
function ToolButton({
  label, active = false, disabled = false, onClick, children,
}: {
  label: string; active?: boolean; disabled?: boolean; onClick?: () => void; children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      disabled={disabled}
      onClick={onClick}
      className="shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center transition-colors disabled:opacity-35 active:bg-[#EDF0F5]"
      style={{
        background: active ? "#E8ECFF" : "transparent",
        color: disabled ? C.sub : active ? C.primary : C.text,
      }}
    >
      {children}
    </button>
  );
}

export default function TabletDocEditorViewer({
  fileName = "셀트리온_실사용_원료대마_출처_및_객관성_QA_보고서.docx",
  totalPages = 6,
  onBack,
  onDownload,
  onShare,
  onClose,
  children,
}: TabletDocEditorViewerProps) {
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [align, setAlign] = useState<Align>("left");
  const [list, setList] = useState<ListKind>("none");
  const [moreOpen, setMoreOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);
  // 목업 편집 히스토리 — 서식을 바꾸면 실행취소가 활성화된다
  const [historyCount, setHistoryCount] = useState(0);
  const [redoCount, setRedoCount] = useState(0);

  useEffect(() => {
    if (!moreOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMoreOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [moreOpen]);

  const pushHistory = () => {
    setHistoryCount((n) => n + 1);
    setRedoCount(0);
  };
  const undo = () => { setHistoryCount((n) => Math.max(0, n - 1)); setRedoCount((n) => n + 1); };
  const redo = () => { setRedoCount((n) => Math.max(0, n - 1)); setHistoryCount((n) => n + 1); };

  const cycleAlign = () => {
    setAlign((a) => ALIGN_ORDER[(ALIGN_ORDER.indexOf(a) + 1) % ALIGN_ORDER.length]);
    pushHistory();
  };
  const cycleList = () => {
    setList((l) => LIST_ORDER[(LIST_ORDER.indexOf(l) + 1) % LIST_ORDER.length]);
    pushHistory();
  };

  // ── 48px 한 줄 툴바 ────────────────────────────────────────────
  const toolbar = (
    <div
      className="h-12 flex items-center gap-0.5 px-2 overflow-x-auto"
      style={{ background: C.card, borderBottom: `1px solid ${C.line}`, scrollbarWidth: "none", ...font }}
    >
      <ToolButton label="실행취소" disabled={historyCount === 0} onClick={undo}>
        <Redo2 size={20} strokeWidth={1.9} style={{ transform: "scaleX(-1)" }} />
      </ToolButton>
      <ToolButton label="다시실행" disabled={redoCount === 0} onClick={redo}>
        <Redo2 size={20} strokeWidth={1.9} />
      </ToolButton>

      <span className="shrink-0 w-px h-6 mx-1" style={{ background: C.line }} />

      <ToolButton label="굵게" active={bold} onClick={() => { setBold((v) => !v); pushHistory(); }}>
        <Bold size={20} strokeWidth={2.2} />
      </ToolButton>
      <ToolButton label="기울임" active={italic} onClick={() => { setItalic((v) => !v); pushHistory(); }}>
        <Italic size={20} strokeWidth={2.2} />
      </ToolButton>
      <ToolButton label="밑줄" active={underline} onClick={() => { setUnderline((v) => !v); pushHistory(); }}>
        <Underline size={20} strokeWidth={2.2} />
      </ToolButton>

      <span className="shrink-0 w-px h-6 mx-1" style={{ background: C.line }} />

      <ToolButton label={`정렬 · ${align}`} active={align !== "left"} onClick={cycleAlign}>
        {ALIGN_ICON[align]}
      </ToolButton>
      <ToolButton label="목록" active={list !== "none"} onClick={cycleList}>
        {list === "number" ? <ListOrdered size={20} strokeWidth={1.9} /> : <List size={20} strokeWidth={1.9} />}
      </ToolButton>

      <div className="flex-1 min-w-0" />

      <ToolButton label="더보기" active={moreOpen} onClick={() => setMoreOpen(true)}>
        <MoreHorizontal size={20} strokeWidth={2.2} />
      </ToolButton>
    </div>
  );

  // ── 하단 고정 바: 페이지 네비게이션 + 확대축소 ──────────────────
  const bottomBar = (
    <div className="h-14 flex items-center justify-between px-3" style={font}>
      <div className="flex items-center gap-1">
        <ToolButton label="이전 페이지" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>
          <ChevronLeft size={20} strokeWidth={2.2} />
        </ToolButton>
        <span className="tabular-nums px-1" style={{ fontSize: 15, fontWeight: 700, color: C.text }}>
          {page}/{totalPages}
        </span>
        <ToolButton label="다음 페이지" disabled={page >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>
          <ChevronRight size={20} strokeWidth={2.2} />
        </ToolButton>
      </div>

      <div className="flex items-center gap-1">
        <ToolButton label="축소" disabled={zoom <= 50} onClick={() => setZoom((z) => Math.max(50, z - 10))}>
          <Minus size={20} strokeWidth={2.2} />
        </ToolButton>
        <button
          type="button"
          onClick={() => setZoom(100)}
          className="min-w-[56px] h-11 px-2 rounded-[12px] tabular-nums active:bg-[#EDF0F5]"
          style={{ fontSize: 15, fontWeight: 700, color: C.text }}
        >
          {zoom}%
        </button>
        <ToolButton label="확대" disabled={zoom >= 200} onClick={() => setZoom((z) => Math.min(200, z + 10))}>
          <Plus size={20} strokeWidth={2.2} />
        </ToolButton>
      </div>
    </div>
  );

  return (
    <TabletEditorShell
      fileName={fileName}
      files={[fileName, "2026 사업계획 발표자료.pptx", "교통사고 합의서_최종.docx"]}
      toolbar={toolbar}
      bottomBar={bottomBar}
      onBack={onBack}
      onDownload={onDownload}
      onShare={onShare}
      onClose={onClose}
    >
      {/* 편집 영역 — 실제 편집기(iframe)가 들어갈 자리.
          문서를 children으로 넘기면 확대축소 값에 맞춰 배율이 적용된다. */}
      <div
        id="editor-root"
        className="w-full h-full min-h-[320px] rounded-[16px] overflow-hidden"
        style={{ background: "#E7EAF0", ...font }}
      >
        {children ? (
          <div
            className="mx-auto"
            style={{
              width: `${(100 / zoom) * 100}%`,
              transform: `scale(${zoom / 100})`,
              transformOrigin: "top center",
            }}
          >
            {children}
          </div>
        ) : (
          <div className="w-full h-full min-h-[320px] flex items-center justify-center">
            <span style={{ fontSize: 15, fontWeight: 600, color: C.sub }}>편집 영역 (iframe)</span>
          </div>
        )}
      </div>

      {/* ── 더보기 하단 시트 ─────────────────────────────────── */}
      {moreOpen && (
        <>
          <style>{`
            @keyframes docSheetUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
            .doc-more-sheet { animation: docSheetUp 240ms cubic-bezier(0.32,0.72,0,1); }
            @media (prefers-reduced-motion: reduce) { .doc-more-sheet { animation: none; } }
          `}</style>
          <div
            className="fixed inset-0 z-[96]"
            style={{ background: "rgba(11,13,18,0.4)" }}
            onClick={() => setMoreOpen(false)}
          />
          <div
            role="dialog"
            aria-label="더보기"
            className="doc-more-sheet fixed left-0 right-0 bottom-0 z-[97] rounded-t-[16px]"
            style={{
              background: C.card,
              boxShadow: "0px -8px 32px rgba(16,24,40,0.16)",
              paddingBottom: "calc(12px + env(safe-area-inset-bottom, 0px))",
              ...font,
            }}
          >
            <div className="flex justify-center pt-2.5 pb-1">
              <div className="w-9 h-1 rounded-full" style={{ background: "#D6DAE3" }} />
            </div>
            <div className="h-12 px-3 flex items-center justify-between">
              <span style={{ fontSize: 16, fontWeight: 700, color: C.text }}>더보기</span>
              <button
                type="button"
                aria-label="닫기"
                onClick={() => setMoreOpen(false)}
                className="w-11 h-11 rounded-[12px] flex items-center justify-center active:bg-[#EDF0F5]"
                style={{ color: C.text }}
              >
                <X size={20} strokeWidth={1.9} />
              </button>
            </div>
            <div className="px-3 pt-1 grid grid-cols-4 gap-1.5">
              {MORE_ITEMS.map((it) => (
                <button
                  key={it.label}
                  type="button"
                  onClick={() => { pushHistory(); setMoreOpen(false); }}
                  className="min-h-[72px] rounded-[12px] flex flex-col items-center justify-center gap-1.5 active:bg-[#EDF0F5]"
                  style={{ background: C.bg, color: C.text }}
                >
                  {it.icon}
                  <span style={{ fontSize: 12.5, fontWeight: 600, color: C.text }}>{it.label}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </TabletEditorShell>
  );
}
