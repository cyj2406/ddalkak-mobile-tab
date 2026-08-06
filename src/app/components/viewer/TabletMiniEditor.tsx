import React, { useEffect, useState } from "react";
import {
  Baseline, ChevronLeft, ChevronRight, Code2, Download, Eraser, History, Image as ImageIcon, Layers,
  Maximize2, Minus, MousePointer2, Pencil, PenTool, Plus, Redo2, Save, Scissors, Search, Share2,
  Sparkles, Square, Type, Undo2, Wand2, X,
} from "lucide-react";

import TabletEditorSidebar, { type EditorTab } from "./TabletEditorSidebar";

/**
 * 태블릿(768px 이상) 미니 에디터 — 이미지·랜딩페이지·프레젠테이션 결과를 여는 편집 화면.
 *
 * 상단바(56px) · 좌측 도구 레일 · 체커보드 캔버스 · 우측 사이드바 · 하단 페이지 썸네일 바
 * 닫기(X)를 누르면 결과 화면을 벗어난다.
 *
 * 우측 사이드바는 폭에 따라 배치만 달라지고 내용은 같다(TabletEditorSidebar).
 *  - 1200px 이상: 자리를 차지하는 고정 컬럼
 *  - 768~1199px: 캔버스 위로 미끄러져 들어오는 패널. 아트보드를 누르면 열리고
 *    빈 캔버스를 누르거나 닫기/토글을 누르면 접힌다.
 * 좌측 도구 레일의 접기 토글과는 별개다.
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

type ToolId =
  | "select" | "text" | "shape" | "image" | "background" | "draw" | "eraser"
  | "ai-create" | "ai-edit" | "remove-bg" | "vectorize" | "split-text" | "to-html";

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
  { id: "vectorize", label: "벡터화", icon: <PenTool size={19} strokeWidth={1.7} />, needsSelection: true },
  { id: "split-text", label: "텍스트 분리", icon: <Baseline size={19} strokeWidth={1.7} />, needsSelection: true },
  { id: "to-html", label: "HTML 변환", icon: <Code2 size={19} strokeWidth={1.7} /> },
];

const ZOOM_MIN = 10;
const ZOOM_MAX = 200;

/** 우측 사이드바를 고정 컬럼으로 두는 최소 폭. 앱의 다른 화면과 같은 경계다. */
const SIDEBAR_DOCK_MIN = 1200;
const SIDEBAR_W = 300;

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
  fileName?: string;
  /** 캔버스 아트보드 비율 (예: "16 / 9") */
  ratio?: string;
  /** 아트보드 실제 크기 표기 */
  canvasSize?: string;
  /** 페이지(슬라이드) 수 */
  pages?: number;
  /** 아트보드 안에 렌더할 결과물 */
  children?: React.ReactNode;
  onClose?: () => void;
}

export default function TabletMiniEditor({
  fileName = "presentation.html",
  ratio = "16 / 9",
  canvasSize = "1536 × 1024 px",
  pages = 1,
  children,
  onClose,
}: TabletMiniEditorProps) {
  const [tool, setTool] = useState<ToolId>("select");
  const [zoom, setZoom] = useState(60);
  const [page, setPage] = useState(1);
  const [sidebarTab, setSidebarTab] = useState<EditorTab>("design");
  // 캔버스 요소 선택 — 아직 요소 모델이 없어 아트보드 단위로만 다룬다.
  const [selected, setSelected] = useState(false);
  // 선택된 요소가 있어야 쓸 수 있는 도구는 비활성 (데스크톱과 동일)
  const hasSelection = selected;

  const docked = useMinWidth(SIDEBAR_DOCK_MIN);
  // 고정 컬럼일 때는 항상 열려 있고, 슬라이드일 때만 여닫는다.
  const [panelOpen, setPanelOpen] = useState(false);
  const sidebarOpen = docked || panelOpen;

  return (
    <div className="fixed inset-0 z-[95] flex flex-col" style={{ ...font, background: C.bg, color: C.text, fontSize: 15 }}>
      <style>{`
        @keyframes miniEditorIn { from { opacity: 0; transform: scale(0.99); } to { opacity: 1; transform: scale(1); } }
        .mini-editor { animation: miniEditorIn 180ms ease-out; }
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
      `}</style>

      <div className="mini-editor flex flex-col h-full">
        {/* ── 상단바 56px ─────────────────────────────────── */}
        <header
          className="shrink-0 h-14 flex items-center gap-1.5 px-2.5"
          style={{ background: C.card, borderBottom: `1px solid ${C.line}` }}
        >
          {/* 편집 모드 표시 */}
          <span className="shrink-0 h-9 px-3 rounded-full flex items-center gap-1.5" style={{ background: "#EEF1FF" }}>
            <span className="rounded-full" style={{ width: 7, height: 7, background: C.primary }} />
            <span style={{ fontSize: 12.5, fontWeight: 700, color: C.primary, whiteSpace: "nowrap" }}>미니 에디터 · 편집 모드</span>
          </span>

          <button className="shrink-0 h-9 px-3 rounded-[12px] flex items-center gap-1.5" style={{ background: C.primary }}>
            <Save size={14} strokeWidth={2} color="#FFFFFF" />
            <span style={{ fontSize: 12.5, fontWeight: 700, color: "#FFFFFF" }}>저장</span>
          </button>

          <button className="shrink-0 h-9 px-3 rounded-[12px] hidden min-[1100px]:flex items-center gap-1.5" style={{ background: C.bg }}>
            <History size={14} strokeWidth={1.9} color={C.sub} />
            <span style={{ fontSize: 12.5, fontWeight: 600, color: C.text, whiteSpace: "nowrap" }}>저장 이력</span>
            <span className="rounded-full px-1.5" style={{ background: C.card, fontSize: 11, fontWeight: 700, color: C.sub }}>1</span>
          </button>

          <div className="flex-1 min-w-0" />

          {/* 실행취소 / 다시실행 */}
          <button aria-label="실행취소" disabled className="shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center disabled:opacity-35">
            <Undo2 size={18} strokeWidth={1.9} />
          </button>
          <button aria-label="다시실행" disabled className="shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center disabled:opacity-35">
            <Redo2 size={18} strokeWidth={1.9} />
          </button>

          {/* 확대축소 */}
          <div className="shrink-0 flex items-center">
            <button aria-label="축소" onClick={() => setZoom((z) => Math.max(ZOOM_MIN, z - 10))}
              className="w-11 h-11 rounded-[12px] flex items-center justify-center active:bg-[#EDF0F5]">
              <Minus size={18} strokeWidth={2.2} />
            </button>
            <button onClick={() => setZoom(60)} className="min-w-[52px] h-11 rounded-[12px] tabular-nums active:bg-[#EDF0F5]"
              style={{ fontSize: 13.5, fontWeight: 700 }}>
              {zoom}%
            </button>
            <button aria-label="확대" onClick={() => setZoom((z) => Math.min(ZOOM_MAX, z + 10))}
              className="w-11 h-11 rounded-[12px] flex items-center justify-center active:bg-[#EDF0F5]">
              <Plus size={18} strokeWidth={2.2} />
            </button>
          </div>

          <button aria-label="전체화면" className="shrink-0 w-11 h-11 rounded-[12px] hidden min-[960px]:flex items-center justify-center active:bg-[#EDF0F5]">
            <Maximize2 size={17} strokeWidth={1.9} />
          </button>
          <button aria-label="찾기/바꾸기" className="shrink-0 w-11 h-11 rounded-[12px] hidden min-[960px]:flex items-center justify-center active:bg-[#EDF0F5]">
            <Search size={17} strokeWidth={1.9} />
          </button>
          <button aria-label="공유" className="shrink-0 w-11 h-11 rounded-[12px] hidden min-[960px]:flex items-center justify-center active:bg-[#EDF0F5]">
            <Share2 size={17} strokeWidth={1.9} />
          </button>

          <button className="shrink-0 h-9 px-3 rounded-[12px] flex items-center gap-1.5" style={{ background: C.primary }}>
            <Download size={14} strokeWidth={2} color="#FFFFFF" />
            <span style={{ fontSize: 12.5, fontWeight: 700, color: "#FFFFFF", whiteSpace: "nowrap" }}>내보내기</span>
          </button>

          <button aria-label="닫기" onClick={onClose}
            className="shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center active:bg-[#EDF0F5]">
            <X size={20} strokeWidth={1.9} />
          </button>
        </header>

        {/* ── 본문: 좌측 도구 레일 + 캔버스 + 우측 사이드바 ─── */}
        <div className="flex-1 min-h-0 flex relative">
          {/* 도구 레일 */}
          <nav
            className="shrink-0 w-[76px] overflow-y-auto py-2 flex flex-col items-center gap-0.5"
            style={{ background: C.card, borderRight: `1px solid ${C.line}`, scrollbarWidth: "none" }}
          >
            {TOOLS.map((t) => {
              const disabled = !!t.needsSelection && !hasSelection;
              const active = tool === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => !disabled && setTool(t.id)}
                  disabled={disabled}
                  aria-pressed={active}
                  className="w-[64px] min-h-[56px] rounded-[12px] flex flex-col items-center justify-center gap-1 disabled:opacity-35 active:bg-[#EDF0F5]"
                  style={{ background: active ? "#EEF1FF" : "transparent", color: active ? C.primary : C.text }}
                >
                  {t.icon}
                  <span style={{ fontSize: 11, fontWeight: active ? 700 : 500, color: active ? C.primary : C.sub, whiteSpace: "nowrap" }}>
                    {t.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* 캔버스 — 빈 곳을 누르면 선택 해제(패널 접힘) */}
          <div
            className="mini-editor-canvas flex-1 min-w-0 overflow-auto flex items-center justify-center p-6"
            onClick={() => {
              setSelected(false);
              if (!docked) setPanelOpen(false);
            }}
          >
            {/* 아트보드 — 누르면 요소 선택으로 보고 속성 패널을 연다.
                아직 요소 모델이 없어 아트보드 단위로만 다룬다. */}
            <div
              role="button"
              tabIndex={0}
              aria-label="캔버스 요소 선택"
              onClick={(e) => {
                e.stopPropagation();
                setSelected(true);
                setSidebarTab("design");
                if (!docked) setPanelOpen(true);
              }}
              className="shrink-0 overflow-hidden"
              style={{
                width: `${zoom}%`,
                aspectRatio: ratio,
                background: C.card,
                boxShadow: "0 10px 30px rgba(16,24,40,0.28)",
                outline: selected ? `2px solid ${C.primary}` : "none",
                outlineOffset: 2,
              }}
            >
              {children ?? <div className="w-full h-full" style={{ background: "#E7EAF0" }} />}
            </div>
          </div>

          {/* ── 우측 사이드바 ────────────────────────────────
              1200px 이상은 자리를 차지하는 고정 컬럼, 그 아래는 캔버스 위로 미끄러지는 패널. */}
          {docked ? (
            <aside className="shrink-0 h-full" style={{ width: SIDEBAR_W, borderLeft: `1px solid ${C.line}` }}>
              <TabletEditorSidebar tab={sidebarTab} onTabChange={setSidebarTab} selected={selected} />
            </aside>
          ) : (
            <>
              {/* 우측 가장자리 전용 토글. 좌측 도구 레일의 접기 버튼과는 별개다. */}
              <button
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
                <TabletEditorSidebar tab={sidebarTab} onTabChange={setSidebarTab} selected={selected} />
              </aside>
            </>
          )}
        </div>

        {/* ── 하단 페이지 썸네일 바 ───────────────────────── */}
        <div
          className="shrink-0 h-[76px] flex items-center gap-2 px-3 overflow-x-auto"
          style={{
            background: C.card,
            borderTop: `1px solid ${C.line}`,
            scrollbarWidth: "none",
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
          }}
        >
          <button
            className="shrink-0 w-[64px] h-[52px] rounded-[10px] flex flex-col items-center justify-center gap-1"
            style={{ background: C.bg, border: `1.5px solid ${C.line}` }}
          >
            <Square size={15} strokeWidth={1.8} color={C.sub} />
            <span style={{ fontSize: 11, fontWeight: 600, color: C.sub }}>마스터</span>
          </button>

          {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              aria-label={`${n}페이지`}
              aria-pressed={page === n}
              className="shrink-0 w-[72px] h-[52px] rounded-[10px] overflow-hidden flex items-center justify-center"
              style={{
                background: C.bg,
                border: `2px solid ${page === n ? C.primary : C.line}`,
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 700, color: page === n ? C.primary : C.sub }}>{n}</span>
            </button>
          ))}

          <button
            aria-label="페이지 추가"
            className="shrink-0 w-[52px] h-[52px] rounded-[10px] flex items-center justify-center"
            style={{ border: `1.5px dashed #C9CFDA`, background: C.card }}
          >
            <Plus size={18} strokeWidth={2} color={C.sub} />
          </button>

          <div className="flex-1 min-w-0" />
          <span className="shrink-0 rounded-full px-2.5 py-1" style={{ background: C.bg, fontSize: 12, fontWeight: 600, color: C.sub, whiteSpace: "nowrap" }}>
            {canvasSize}
          </span>
        </div>
      </div>
    </div>
  );
}
