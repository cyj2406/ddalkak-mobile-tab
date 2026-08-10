import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ChevronDown, ChevronLeft, ChevronRight, Clock, Download, Eraser, Fullscreen,
  History, Image as ImageIcon, Layers, LayoutTemplate, Maximize2, Minus, MousePointer2, Pencil, PenTool,
  Plus, Redo2, Save, Scissors, Search, Share2, Sparkles, Square, Type, Undo2, Wand2, X,
} from "lucide-react";

import TabletEditorSidebar, { type EditorTab } from "./TabletEditorSidebar";
import { useShareToast, ViewerToast } from "./ShareToast";
import { IconTooltip } from "./IconTooltip";

/**
 * 미니 에디터 — 이미지·랜딩페이지·프레젠테이션 결과를 여는 편집 화면.
 *
 * 상단바(56px) · 좌측 도구 레일 · 눈금자 + 체커보드 캔버스 · 우측 사이드바 · 하단 페이지 바.
 * 닫기(X)를 누르면 결과 화면을 벗어난다.
 *
 * 상단바는 왼쪽에 편집 조작(실행취소·다시실행 · 확대축소 · 화면에 맞추기),
 * 오른쪽에 문서 조작(찾기 · 공유 · 저장 · 다운로드 │ 전체화면 · 닫기)을 둔다.
 * 면(배경·테두리)을 가진 요소는 다운로드 하나뿐이고, 나머지는 TONE 색 위계와
 * hover 배경으로만 구분한다. 같은 그룹 안은 12px, 그룹 사이는 24px 간격을 쓴다
 * — 찾기·공유·저장·다운로드는 한 그룹이라 모두 12px 로 이어진다.
 * 데스크톱(1200px 이상)은 라벨을 함께 보여주고, 태블릿은 라벨만 빼고
 * 순서·색은 그대로 둔 아이콘 버튼으로 렌더한다.
 * 저장은 드롭다운(저장 · 저장 이력), 다운로드는 옵션 팝오버를 연다.
 *
 * 확대축소(zoom)는 아트보드의 실제 배율이다 — 캔버스 크기(canvasSize)에 그대로 곱해
 * 픽셀 크기를 정하고, 같은 배율로 눈금자 눈금 간격을 계산한다.
 *
 * 우측 사이드바는 폭에 따라 배치만 달라지고 내용은 같다(TabletEditorSidebar).
 *  - 1200px 이상: 자리를 차지하는 고정 컬럼
 *  - 768~1199px: 캔버스 위로 미끄러져 들어오는 패널. 아트보드를 누르면 열리고
 *    빈 캔버스를 누르거나 닫기/토글을 누르면 접힌다.
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
 * 데스크톱의 좌우 패딩 16 과 그룹 안 간격 12 는 정렬 때문에 고정이다:
 * 16 + 36(닫기) + 12 + 36(전체화면) = 100px 이라 창 제어 그룹이
 * 속성 패널의 마지막 탭("테마", 300/3 = 100px) 컬럼과 정확히 겹친다.
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
 * 채워진 버튼(다운로드)이 그리는 파란 면의 크기.
 * 클릭 영역(BTN_TOUCH / BTN_ICON)보다 작게 잡아 56px 상단바 안에서
 * 위아래 여백이 눈에 보이도록 한다 — 터치 10px, 데스크톱 12px.
 */
const BTN_FILL = 36;
const BTN_FILL_DESKTOP = 32;
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
 * 데스크톱 경계. 앱의 다른 화면과 같은 값이며, 두 가지가 함께 바뀐다
 * — 상단바 라벨 노출, 우측 사이드바 고정 컬럼 여부.
 */
const DESKTOP_MIN = 1200;
const SIDEBAR_W = 300;

/** 다운로드 팝오버 선택지 — 목업 */
const DL_FORMATS = ["PNG", "JPG", "PDF", "SVG"];
const DL_SCALES = ["1배", "2배", "3배"];

/** 좌측 도구 레일 폭 */
const RAIL_W = 76;

/** 저장 이력 보관 개수 */
const HISTORY_MAX = 10;

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
  label, tone = "muted", onClick, disabled = false, children,
}: {
  label: string; tone?: ToneKey; onClick?: () => void; disabled?: boolean; children: React.ReactNode;
}) {
  return (
    <IconTooltip label={label}>
      <button
        type="button"
        aria-label={label}
        onClick={onClick}
        disabled={disabled}
        className="bar-btn bar-icon shrink-0 flex items-center justify-center"
        style={{ ...toneVars(tone), borderRadius: BTN_R }}
      >
        {children}
      </button>
    </IconTooltip>
  );
}

/**
 * 상단바 문서 조작 버튼.
 * 테두리·배경 없이 색으로만 위계를 두고, hover 때만 옅은 배경이 생긴다.
 * 다운로드(primary)만 파란 면을 유지한다 — 상단바에서 면을 가진 유일한 요소.
 * 데스크톱은 아이콘 + 라벨, 태블릿은 라벨만 빠지고 순서·색은 동일하다.
 *
 * 채워진 버튼은 클릭 영역과 그려지는 면을 분리한다.
 * 버튼 자체는 옆 아이콘 버튼과 같은 클릭 영역을 유지하고, 파란 면은 그보다 작은
 * 안쪽 span(.bar-fill)이 그린다 — 면이 상단바 높이를 꽉 채워 답답해 보이지 않게
 * 위아래 여백을 남기기 위함이다.
 */
function BarButton({
  label, icon, wide, primary = false, onClick, trailing,
}: {
  label: string; icon: React.ReactNode; wide: boolean; primary?: boolean;
  onClick?: () => void; trailing?: React.ReactNode;
}) {
  // 라벨이 눈에 보이는 데스크톱에서는 툴팁을 달지 않는다.
  const withTooltip = (node: React.ReactNode) =>
    wide ? <>{node}</> : <IconTooltip label={label}>{node}</IconTooltip>;
  const hasLabel = wide || !!trailing;
  const content = (
    <>
      <span className="shrink-0 flex">{icon}</span>
      {wide && <span style={{ fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>{label}</span>}
      {trailing}
    </>
  );

  if (primary) {
    return withTooltip(
      <button
        type="button"
        aria-label={label}
        onClick={onClick}
        className={`bar-btn-primary ${hasLabel ? "bar-label" : "bar-icon"} shrink-0 flex items-center justify-center`}
        style={{ background: "transparent", padding: 0 }}
      >
        <span
          className={`bar-fill ${hasLabel ? "" : "bar-fill-square"} flex items-center justify-center ${hasLabel ? "gap-1.5" : ""}`}
          style={{
            background: C.primary,
            color: "#FFFFFF",
            borderRadius: BTN_R,
            paddingInline: hasLabel ? 12 : 0,
          }}
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
      className={`bar-btn ${hasLabel ? "bar-label" : "bar-icon"} shrink-0 flex items-center justify-center ${
        hasLabel ? "gap-1.5" : ""
      }`}
      style={{ ...toneVars("base"), borderRadius: BTN_R, paddingInline: hasLabel ? 12 : 0 }}
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

/** 저장·다운로드가 여는 팝오버의 공통 껍데기 — 버튼 아래 오른쪽 맞춤으로 붙는다 */
function Popover({
  width, onClose, children,
}: { width: number; onClose: () => void; children: React.ReactNode }) {
  return (
    <>
      <div className="fixed inset-0 z-[1]" onClick={onClose} />
      <div
        className="editor-popover absolute z-[2] top-[48px] right-0 rounded-[16px]"
        style={{
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

export interface SaveEntry {
  id: number;
  /** 몇 번째 수동 저장본인지 */
  no: number;
  /** 저장 시각 표기 */
  time: string;
}

/**
 * 저장 이력 — 화면 오른쪽에서 밀려 들어오는 사이드 패널.
 * 수동 저장본만 쌓이고, 최근 HISTORY_MAX 개까지 보관한다.
 */
function SaveHistoryPanel({
  entries, onRestore, onClose,
}: { entries: SaveEntry[]; onRestore: (e: SaveEntry) => void; onClose: () => void }) {
  return (
    <>
      {/* 어둡게 덮지 않고, 바깥을 누르면 닫히기만 한다 */}
      <div className="fixed inset-0 z-[96]" onClick={onClose} />
      <aside
        role="dialog"
        aria-label="저장 이력"
        className="editor-history fixed inset-y-0 right-0 z-[97] flex flex-col"
        style={{
          width: "min(420px, calc(100vw - 48px))",
          background: C.card,
          borderLeft: `1px solid ${C.line}`,
          boxShadow: "-10px 0 34px rgba(16,24,40,0.14)",
          ...font,
        }}
      >
        {/* 머리말 */}
        <div className="shrink-0 px-5 pt-5 pb-4" style={{ borderBottom: `1px solid ${C.line}` }}>
          <div className="flex items-start gap-3">
            <span
              className="shrink-0 flex items-center justify-center rounded-[12px]"
              style={{ width: 40, height: 40, background: C.primarySoft, color: C.primary }}
            >
              <History size={20} strokeWidth={1.9} />
            </span>
            <span className="flex-1 min-w-0" style={{ fontSize: 19, fontWeight: 700, color: C.text, lineHeight: "40px" }}>
              저장 이력
            </span>
            <button
              type="button"
              aria-label="닫기"
              onClick={onClose}
              className="shrink-0 w-10 h-10 rounded-[10px] flex items-center justify-center transition-colors hover:bg-[#F2F4F8] active:bg-[#EDF0F5]"
              style={{ color: C.sub }}
            >
              <X size={20} strokeWidth={1.9} />
            </button>
          </div>
          <p style={{ fontSize: 14.5, color: C.sub, lineHeight: 1.6, marginTop: 10 }}>
            최근 수동 저장본을 확인하고 원하는 버전으로 돌아갈 수 있어요.
          </p>
        </div>

        {/* 목록 */}
        <div className="flex-1 min-h-0 overflow-y-auto p-5" style={{ scrollbarWidth: "none" }}>
          {entries.length === 0 ? (
            <div
              className="flex flex-col items-center justify-center text-center rounded-[16px] px-6"
              style={{ minHeight: 420, border: `1.5px dashed #D6DBE4`, background: "#FAFBFC" }}
            >
              <Clock size={30} strokeWidth={1.6} style={{ color: C.sub }} />
              <p style={{ fontSize: 16, fontWeight: 700, color: C.text, marginTop: 18 }}>아직 저장 이력이 없어요</p>
              <p style={{ fontSize: 14, color: C.sub, marginTop: 8, lineHeight: 1.6 }}>
                에디터 상단의 저장 버튼을 누르면 이곳에 버전이 기록됩니다.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {entries.map((e, i) => (
                <div
                  key={e.id}
                  className="flex items-center gap-3 rounded-[12px] px-3.5 py-3"
                  style={{ border: `1px solid ${C.line}` }}
                >
                  <span
                    className="shrink-0 flex items-center justify-center rounded-[10px]"
                    style={{ width: 34, height: 34, background: C.bg, color: C.sub }}
                  >
                    <Clock size={17} strokeWidth={1.8} />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block truncate" style={{ fontSize: 14.5, fontWeight: 700, color: C.text }}>
                      저장본 {e.no}
                      {i === 0 && (
                        <span
                          className="ml-1.5 rounded-full px-1.5"
                          style={{ background: C.primarySoft, fontSize: 11, fontWeight: 700, color: C.primary }}
                        >
                          최신
                        </span>
                      )}
                    </span>
                    <span className="block truncate" style={{ fontSize: 13, color: C.sub, marginTop: 2 }}>{e.time}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => onRestore(e)}
                    className="shrink-0 h-9 px-3 rounded-[10px] transition-colors hover:bg-[#F5F7FA] active:bg-[#EDF0F5]"
                    style={{ border: `1px solid ${C.line}`, fontSize: 13, fontWeight: 600, color: C.text }}
                  >
                    되돌리기
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 꼬리말 */}
        <div
          className="shrink-0 px-5 py-4"
          style={{ borderTop: `1px solid ${C.line}`, paddingBottom: "calc(16px + env(safe-area-inset-bottom, 0px))" }}
        >
          <p style={{ fontSize: 13.5, color: C.sub, lineHeight: 1.6 }}>
            새로 저장하면 최신본이 맨 위에 추가되며 최근 {HISTORY_MAX}개까지 보관됩니다.
          </p>
        </div>
      </aside>
    </>
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
}: TabletMiniEditorProps) {
  const board = parseCanvasSize(canvasSize, ratio);

  const [tool, setTool] = useState<ToolId>("image");
  const [zoom, setZoom] = useState(24);
  const [page, setPage] = useState(1);
  const [master, setMaster] = useState(false);
  const [sidebarTab, setSidebarTab] = useState<EditorTab>("design");
  // 캔버스 요소 선택 — 아직 요소 모델이 없어 아트보드 단위로만 다룬다.
  const [selected, setSelected] = useState(true);
  // 선택된 요소가 있어야 쓸 수 있는 도구는 비활성 (데스크톱과 동일)
  const hasSelection = selected;

  // 데스크톱(1200px 이상): 상단바에 라벨이 붙고, 우측 사이드바가 고정 컬럼이 된다.
  const isDesktop = useMinWidth(DESKTOP_MIN);
  const docked = isDesktop;
  // 고정 컬럼일 때는 항상 열려 있고, 슬라이드일 때만 여닫는다.
  const [panelOpen, setPanelOpen] = useState(false);
  const sidebarOpen = docked || panelOpen;

  // 상단바 팝오버 — 찾기 / 저장 드롭다운 / 다운로드 옵션 / 저장 이력 사이드 패널
  const [findOpen, setFindOpen] = useState(false);
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  const [matchCase, setMatchCase] = useState(false);
  const [saveOpen, setSaveOpen] = useState(false);
  const [dlOpen, setDlOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  const [history, setHistory] = useState<SaveEntry[]>([]);

  // 공유 — 결과물 뷰어 상단바와 같은 안내 문구를 쓴다.
  const { message: toast, share } = useShareToast();

  // 수동 저장 — 최신본이 맨 위에 쌓이고 HISTORY_MAX 개까지만 남는다.
  const saveNow = () => {
    setSaveOpen(false);
    setHistory((prev) => {
      const no = (prev[0]?.no ?? 0) + 1;
      const time = new Date().toLocaleString("ko-KR", {
        month: "long", day: "numeric", hour: "numeric", minute: "2-digit",
      });
      return [{ id: no, no, time }, ...prev].slice(0, HISTORY_MAX);
    });
  };
  const [dlFormat, setDlFormat] = useState(DL_FORMATS[0]);
  const [dlScale, setDlScale] = useState(DL_SCALES[0]);
  const [dlPages, setDlPages] = useState("all");

  const pageOptions = [`모든 페이지 (1~${pages})`, `현재 페이지 (${page})`];
  const dlPageLabel = dlPages === "all" ? pageOptions[0] : pageOptions[1];
  const dlPageCount = dlPages === "all" ? pages : 1;

  useEffect(() => {
    if (!findOpen && !saveOpen && !dlOpen && !historyOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setFindOpen(false);
      setSaveOpen(false);
      setDlOpen(false);
      setHistoryOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [findOpen, saveOpen, dlOpen, historyOpen]);

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
        /* 클릭 영역 — 터치는 44px 표준, 데스크톱은 마우스 기준으로 줄여 56px 바 안에 여백을 남긴다.
           아이콘 글리프 크기는 두 경우 모두 같다. */
        .bar-icon, .bar-label, .bar-pill { height: ${BTN_TOUCH}px; }
        .bar-icon { width: ${BTN_TOUCH}px; }
        /* 채워진 버튼이 실제로 그리는 면 — 클릭 영역보다 작게 잡아 상단바 위아래 여백을 남긴다 */
        .bar-fill { height: ${BTN_FILL}px; }
        .bar-fill-square { width: ${BTN_FILL}px; }
        @media (min-width: ${DESKTOP_MIN}px) {
          .bar-icon, .bar-label, .bar-pill { height: ${BTN_ICON}px; }
          .bar-icon { width: ${BTN_ICON}px; }
          .bar-fill { height: ${BTN_FILL_DESKTOP}px; }
          .bar-fill-square { width: ${BTN_FILL_DESKTOP}px; }
        }
        /* 면 없는 상단바 버튼 — 색은 CSS 변수로 받고, hover 때만 옅은 배경이 생긴다 */
        .bar-btn {
          background: transparent;
          color: var(--bar-rest);
          transition: color 120ms ease, background-color 120ms ease;
        }
        .bar-btn:hover:not(:disabled) { background: ${HOVER_BG}; color: var(--bar-hover); }
        .bar-btn:active:not(:disabled) { background: #E9EDF3; }
        /* 비활성은 색이 아니라 투명도로 구분한다 — 활성 색과 확실히 갈리도록 낮게 잡는다 */
        .bar-btn:disabled { opacity: 0.32; }
        .bar-btn-primary { transition: filter 120ms ease; }
        .bar-btn-primary:hover { filter: brightness(0.97); }
        .bar-btn-primary:active { filter: brightness(0.94); }
        @keyframes editorPopIn { from { transform: translateY(-6px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .editor-popover { animation: editorPopIn 150ms ease-out; }
        @keyframes editorHistoryIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .editor-history { animation: editorHistoryIn 240ms cubic-bezier(0.32,0.72,0,1); }
        @media (prefers-reduced-motion: reduce) {
          .editor-popover, .editor-history { animation: none; }
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
          {/* 편집 조작 — 실행취소 · 다시 실행 */}
          <div className="flex items-center" style={{ gap: GAP_IN }}>
            <BarIcon label="실행취소" disabled><Undo2 size={ICON} strokeWidth={1.9} /></BarIcon>
            <BarIcon label="다시 실행" disabled><Redo2 size={ICON} strokeWidth={1.9} /></BarIcon>
          </div>

          {/* 확대축소 · 화면에 맞추기 — 감싸는 면 없이 색으로만 묶는다 */}
          <div className="flex items-center" style={{ gap: GAP_IN, marginLeft: GAP_GROUP }}>
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

          <div className="flex-1 min-w-0" />

          {/* ── 우측 액션 그룹 — 찾기부터 닫기까지 하나로 묶는다.
              그룹의 우측 끝을 화면 오른쪽에서 16px 안쪽에 고정하고,
              안쪽 간격은 전부 고정값이라 늘어나지 않는다
              (남는 공간은 위 flex-1 하나에서만 흡수된다).
              그 결과 전체화면·닫기가 아래 속성 패널의 "테마" 탭과 같은 세로선 안에 든다. */}
          <div className="shrink-0 flex items-center" style={{ paddingRight: BAR_PAD_X }}>

          {/* 문서 조작 — 찾기 · 공유 · 저장 */}
          <div className="flex items-center" style={{ gap: GAP_IN }}>
            {/* 찾기 — 텍스트 찾기 / 바꾸기 팝오버 */}
            <div className="relative shrink-0">
              <BarButton
                label="찾기"
                wide={isDesktop}
                icon={<Search size={ICON} strokeWidth={1.9} />}
                onClick={() => { setFindOpen((v) => !v); setSaveOpen(false); setDlOpen(false); }}
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

            <BarButton label="공유" wide={isDesktop} icon={<Share2 size={ICON} strokeWidth={1.9} />} onClick={share} />

          {/* 저장 — 배지 + 드롭다운(저장 · 저장 이력) */}
          <div className="relative shrink-0">
            <BarButton
              label="저장"
              wide={isDesktop}
              icon={<Save size={ICON} strokeWidth={1.9} />}
              onClick={() => { setSaveOpen((v) => !v); setDlOpen(false); }}
              trailing={
                <>
                  {history.length > 0 && (
                    <span
                      className="shrink-0 rounded-full px-1.5"
                      style={{ background: C.bg, fontSize: 11.5, fontWeight: 700, color: C.sub, lineHeight: "18px" }}
                    >
                      {history.length}
                    </span>
                  )}
                  <ChevronDown
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 transition-transform"
                    style={{ transform: saveOpen ? "rotate(180deg)" : "none" }}
                  />
                </>
              }
            />
            {saveOpen && (
              <Popover width={230} onClose={() => setSaveOpen(false)}>
                <div className="p-1.5 flex flex-col">
                  <button
                    type="button"
                    onClick={saveNow}
                    className="w-full h-12 px-3 rounded-[12px] flex items-center gap-2.5 transition-colors hover:bg-[#F5F7FA] active:bg-[#EDF0F5]"
                  >
                    <Save size={17} strokeWidth={1.8} style={{ color: C.text }} />
                    <span className="flex-1 text-left" style={{ fontSize: 14, fontWeight: 600, color: C.text }}>저장</span>
                    <span style={{ fontSize: 12.5, color: C.sub }}>⌘S</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => { setSaveOpen(false); setHistoryOpen(true); }}
                    className="w-full h-12 px-3 rounded-[12px] flex items-center gap-2.5 transition-colors hover:bg-[#F5F7FA] active:bg-[#EDF0F5]"
                  >
                    <History size={17} strokeWidth={1.8} style={{ color: C.text }} />
                    <span className="flex-1 text-left" style={{ fontSize: 14, fontWeight: 600, color: C.text }}>저장 이력</span>
                    <span
                      className="rounded-full px-1.5"
                      style={{ background: C.bg, fontSize: 11.5, fontWeight: 700, color: C.sub, lineHeight: "18px" }}
                    >
                      {history.length}
                    </span>
                  </button>
                </div>
              </Popover>
            )}
          </div>

          </div>

          {/* 다운로드 — 형식·크기·페이지 옵션 팝오버. 상단바에서 면을 가진 유일한 요소.
              찾기·공유·저장과 같은 문서 조작이라 간격도 같은 12px를 쓴다. */}
          <div className="relative shrink-0" style={{ marginLeft: GAP_IN }}>
            <BarButton
              label="다운로드"
              wide={isDesktop}
              primary
              icon={<Download size={ICON} strokeWidth={2} />}
              onClick={() => { setDlOpen((v) => !v); setSaveOpen(false); }}
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

          {/* 창 제어 */}
          <div className="flex items-center" style={{ gap: GAP_IN }}>
            <BarIcon label="전체화면" tone="faint"><Maximize2 size={ICON} strokeWidth={1.9} /></BarIcon>
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
                  onClick={() => !disabled && setTool(t.id)}
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

          {/* 캔버스 영역 — 눈금자 + 체커보드 */}
          <div className="flex-1 min-w-0 flex flex-col">
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
                style={{ padding: CANVAS_PAD }}
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

        {/* ── 하단 페이지 바 ─────────────────────────────── */}
        <div
          className="shrink-0 h-[88px] flex items-center gap-2.5 px-3 overflow-x-auto"
          style={{
            background: C.card,
            borderTop: `1px solid ${C.line}`,
            scrollbarWidth: "none",
            paddingBottom: "env(safe-area-inset-bottom, 0px)",
          }}
        >
          <button
            type="button"
            onClick={() => setMaster((v) => !v)}
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

      {/* ── 안내 문구 ─────────────────────────────────────── */}
      {toast && <ViewerToast message={toast} top={BAR_H + 16} />}

      {/* ── 저장 이력 — 오른쪽 사이드 패널 ─────────────────── */}
      {historyOpen && (
        <SaveHistoryPanel
          entries={history}
          onRestore={() => setHistoryOpen(false)}
          onClose={() => setHistoryOpen(false)}
        />
      )}
    </div>
  );
}
