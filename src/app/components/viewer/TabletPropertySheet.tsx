import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Crop, FlipHorizontal2, FlipVertical2, RotateCcw, RotateCw, Sparkles, Trash2,
} from "lucide-react";

/**
 * 태블릿(768~1024px, 터치) 편집기 속성 패널 — 데스크톱 우측 패널을 하단 시트로 옮긴 것.
 *
 * - 3단계 높이: 접힘 56px / 반열림 300px / 전체 560px (드래그 핸들로 전환, 놓으면 가까운 단계로 스냅)
 * - 접힘 상태에는 선택된 객체명 + 주요 액션 2개만 노출
 * - 섹션: 크기·위치(X/Y/W/H) · 회전 · 정렬 · 변형 · 조정(밝기·대비·채도·흐림)
 * - 슬라이더 트랙 4px / 손잡이 28px, 숫자 입력은 탭하면 숫자 키패드
 * - 선택된 객체가 없으면 자동으로 접힘 상태
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

const SNAPS = [56, 300, 560] as const;
type SheetStep = 0 | 1 | 2;

export interface SelectedObject {
  name: string;
  x: number;
  y: number;
  w: number;
  h: number;
  rotation: number;
  brightness: number;
  contrast: number;
  saturation: number;
  blur: number;
}

// 목업 — 첨부된 데스크톱 패널의 값과 동일
const MOCK_SELECTED: SelectedObject = {
  name: "이미지",
  x: 0, y: 0, w: 200, h: 1125,
  rotation: 0,
  brightness: 100, contrast: 100, saturation: 100, blur: 0,
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));
const nearestSnap = (h: number) =>
  SNAPS.reduce((best, s) => (Math.abs(s - h) < Math.abs(best - h) ? s : best), SNAPS[0]);

/** 숫자 입력 — 탭하면 숫자 키패드가 뜬다 */
function NumberField({
  label, value, unit, onChange,
}: { label: string; value: number; unit?: string; onChange: (v: number) => void }) {
  return (
    <label className="flex-1 min-w-0 h-11 rounded-[12px] flex items-center gap-1.5 px-3" style={{ background: C.bg }}>
      <span className="shrink-0" style={{ fontSize: 12.5, fontWeight: 700, color: C.sub }}>{label}</span>
      <input
        type="text"
        inputMode="decimal"
        pattern="[0-9]*"
        value={value}
        onChange={(e) => {
          const n = Number(e.target.value.replace(/[^\d.-]/g, ""));
          if (!Number.isNaN(n)) onChange(n);
        }}
        className="w-full min-w-0 bg-transparent outline-none text-right"
        style={{ ...font, fontSize: 15, fontWeight: 600, color: C.text }}
      />
      {unit && <span className="shrink-0" style={{ fontSize: 12, color: C.sub }}>{unit}</span>}
    </label>
  );
}

/** 슬라이더 — 트랙 4px, 손잡이 28px */
function Slider({
  label, value, min, max, unit, onChange,
}: { label: string; value: number; min: number; max: number; unit: string; onChange: (v: number) => void }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex items-center gap-3">
      <span className="shrink-0" style={{ width: 40, fontSize: 13, fontWeight: 600, color: C.text }}>{label}</span>
      <div className="relative flex-1 min-w-0 h-11 flex items-center">
        {/* 트랙 4px */}
        <div className="w-full rounded-full" style={{ height: 4, background: C.line }}>
          <div className="h-full rounded-full" style={{ width: `${pct}%`, background: C.primary }} />
        </div>
        {/* 손잡이 28px */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 28, height: 28, background: C.card, border: `2px solid ${C.primary}`,
            boxShadow: "0 2px 6px rgba(16,24,40,0.18)",
            left: `calc(${pct}% - ${(pct / 100) * 28}px)`,
          }}
        />
        <input
          type="range"
          aria-label={label}
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <span className="shrink-0 text-right tabular-nums" style={{ width: 52, fontSize: 13, fontWeight: 700, color: C.text }}>
        {value}{unit}
      </span>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 12.5, fontWeight: 700, color: C.sub, letterSpacing: "-0.1px" }}>{children}</p>;
}

/** 보조 액션 버튼 — 44x44 터치 타겟 */
function GhostButton({ label, onClick, children }: { label: string; onClick?: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex-1 min-w-[44px] h-11 rounded-[12px] flex items-center justify-center gap-1.5 active:opacity-70"
      style={{ background: C.bg, color: C.text }}
    >
      {children}
    </button>
  );
}

export interface TabletPropertySheetProps {
  /** 선택된 객체. null이면 시트가 자동으로 접힌다. */
  selected?: SelectedObject | null;
  onChange?: (next: SelectedObject) => void;
  onVectorize?: () => void;
  onCrop?: () => void;
  onDelete?: () => void;
}

export default function TabletPropertySheet({
  selected = MOCK_SELECTED,
  onChange,
  onVectorize,
  onCrop,
  onDelete,
}: TabletPropertySheetProps) {
  const [obj, setObj] = useState<SelectedObject | null>(selected);
  const [height, setHeight] = useState<number>(SNAPS[0]);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ startY: 0, startH: 56, moved: false });

  useEffect(() => setObj(selected), [selected]);

  // 선택 해제되면 자동으로 접힘
  useEffect(() => {
    if (!selected) setHeight(SNAPS[0]);
  }, [selected]);

  const set = useCallback(
    <K extends keyof SelectedObject>(k: K, v: SelectedObject[K]) => {
      setObj((prev) => {
        if (!prev) return prev;
        const next = { ...prev, [k]: v };
        onChange?.(next);
        return next;
      });
    },
    [onChange]
  );

  const step: SheetStep = (SNAPS.indexOf(nearestSnap(height) as (typeof SNAPS)[number]) as SheetStep) ?? 0;
  const collapsed = step === 0;

  // ── 드래그 핸들 ──────────────────────────────────────────────
  const onPointerDown = (e: React.PointerEvent) => {
    if (!obj) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    drag.current = { startY: e.clientY, startH: height, moved: false };
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const delta = drag.current.startY - e.clientY;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    setHeight(clamp(drag.current.startH + delta, SNAPS[0], SNAPS[2]));
  };
  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (drag.current.moved) {
      setHeight(nearestSnap(height));
    } else {
      // 탭하면 다음 단계로 순환
      const i = SNAPS.indexOf(nearestSnap(height) as (typeof SNAPS)[number]);
      setHeight(SNAPS[(i + 1) % SNAPS.length]);
    }
  };

  const alignCells = ["좌측 상단", "상단 중앙", "우측 상단", "좌측 중앙", "정중앙", "우측 중앙", "좌측 하단", "하단 중앙", "우측 하단"];

  return (
    <div
      className="tablet-prop-sheet fixed left-0 right-0 bottom-0 z-[98] flex flex-col rounded-t-[16px]"
      style={{
        ...font,
        height,
        maxHeight: "80dvh",
        background: C.card,
        boxShadow: "0px -8px 32px rgba(16,24,40,0.16)",
        transition: dragging ? "none" : "height 220ms cubic-bezier(0.32,0.72,0,1)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
        color: C.text,
        fontSize: 15,
      }}
    >
      {/* 드래그 핸들 */}
      <div
        role="separator"
        aria-label="속성 패널 높이 조절"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="shrink-0 h-5 flex items-center justify-center cursor-grab touch-none"
        style={{ cursor: dragging ? "grabbing" : "grab" }}
      >
        <div className="w-9 h-1 rounded-full" style={{ background: "#D6DAE3" }} />
      </div>

      {/* 헤더 — 객체명 + 주요 액션 2개 (접힘 상태에서 보이는 전부) */}
      <div className="shrink-0 h-9 px-3 flex items-center gap-2">
        <div className="flex-1 min-w-0 flex items-center gap-1.5">
          <span
            className="shrink-0 rounded-full"
            style={{ width: 8, height: 8, background: obj ? C.primary : "#D6DAE3" }}
          />
          <span className="truncate" style={{ fontSize: 15, fontWeight: 700, color: obj ? C.text : C.sub }}>
            {obj ? obj.name : "선택된 객체 없음"}
          </span>
        </div>

        {obj && (
          <div className="shrink-0 flex items-center gap-1.5">
            <button
              type="button"
              onClick={onVectorize}
              className="h-9 px-3 rounded-[12px] flex items-center gap-1.5 active:opacity-90"
              style={{ background: C.primary }}
            >
              <Sparkles size={15} strokeWidth={2} color="#FFFFFF" />
              <span style={{ fontSize: 13, fontWeight: 700, color: "#FFFFFF" }}>벡터화</span>
            </button>
            <button
              type="button"
              aria-label="삭제"
              onClick={onDelete}
              className="w-11 h-9 rounded-[12px] flex items-center justify-center active:opacity-70"
              style={{ background: C.bg }}
            >
              <Trash2 size={17} strokeWidth={1.8} color={C.text} />
            </button>
          </div>
        )}
      </div>

      {/* 본문 — 반열림/전체에서만 스크롤 노출 */}
      {obj && !collapsed && (
        <div
          className="flex-1 min-h-0 overflow-y-auto px-3 pt-2 pb-4 flex flex-col gap-5"
          style={{ scrollbarWidth: "none", overscrollBehavior: "contain" }}
        >
          {/* 크기 / 위치 */}
          <section className="flex flex-col gap-2">
            <SectionTitle>크기 / 위치</SectionTitle>
            <div className="flex gap-2">
              <NumberField label="X" value={obj.x} onChange={(v) => set("x", v)} />
              <NumberField label="Y" value={obj.y} onChange={(v) => set("y", v)} />
            </div>
            <div className="flex gap-2">
              <NumberField label="W" value={obj.w} onChange={(v) => set("w", v)} />
              <NumberField label="H" value={obj.h} onChange={(v) => set("h", v)} />
            </div>
          </section>

          {/* 회전 */}
          <section className="flex flex-col gap-2">
            <SectionTitle>회전</SectionTitle>
            <Slider label="각도" value={obj.rotation} min={-180} max={180} unit="°" onChange={(v) => set("rotation", v)} />
          </section>

          {/* 정렬 — 3x3 */}
          <section className="flex flex-col gap-2">
            <SectionTitle>정렬</SectionTitle>
            {/* 셀 안 사각형 위치가 곧 정렬 방향을 나타낸다 */}
            <div className="grid grid-cols-3 gap-1.5" style={{ maxWidth: 180 }}>
              {alignCells.map((cell, i) => {
                const row = Math.floor(i / 3);
                const col = i % 3;
                const justify = ["flex-start", "center", "flex-end"][col];
                const alignItems = ["flex-start", "center", "flex-end"][row];
                return (
                  <button
                    key={cell}
                    type="button"
                    aria-label={cell}
                    className="h-11 rounded-[12px] flex p-2 active:opacity-70"
                    style={{ background: C.bg, justifyContent: justify, alignItems }}
                  >
                    <span className="rounded-[3px]" style={{ width: 11, height: 11, background: C.sub }} />
                  </button>
                );
              })}
            </div>
          </section>

          {/* 변형 */}
          <section className="flex flex-col gap-2">
            <SectionTitle>변형</SectionTitle>
            <div className="flex gap-1.5">
              <GhostButton label="왼쪽으로 회전" onClick={() => set("rotation", clamp(obj.rotation - 90, -180, 180))}>
                <RotateCcw size={18} strokeWidth={1.8} />
              </GhostButton>
              <GhostButton label="오른쪽으로 회전" onClick={() => set("rotation", clamp(obj.rotation + 90, -180, 180))}>
                <RotateCw size={18} strokeWidth={1.8} />
              </GhostButton>
              <GhostButton label="좌우 반전">
                <FlipHorizontal2 size={18} strokeWidth={1.8} />
              </GhostButton>
              <GhostButton label="상하 반전">
                <FlipVertical2 size={18} strokeWidth={1.8} />
              </GhostButton>
            </div>
            <div className="flex gap-1.5">
              <GhostButton label="변형 초기화" onClick={() => set("rotation", 0)}>
                <RotateCcw size={17} strokeWidth={1.8} />
                <span style={{ fontSize: 13.5, fontWeight: 600 }}>변형 초기화</span>
              </GhostButton>
              <GhostButton label="자르기" onClick={onCrop}>
                <Crop size={17} strokeWidth={1.8} />
                <span style={{ fontSize: 13.5, fontWeight: 600 }}>자르기</span>
              </GhostButton>
            </div>
          </section>

          {/* 조정 */}
          <section className="flex flex-col gap-1">
            <SectionTitle>조정</SectionTitle>
            <Slider label="밝기" value={obj.brightness} min={0} max={200} unit="%" onChange={(v) => set("brightness", v)} />
            <Slider label="대비" value={obj.contrast} min={0} max={200} unit="%" onChange={(v) => set("contrast", v)} />
            <Slider label="채도" value={obj.saturation} min={0} max={200} unit="%" onChange={(v) => set("saturation", v)} />
            <Slider label="흐림" value={obj.blur} min={0} max={20} unit="px" onChange={(v) => set("blur", v)} />
          </section>
        </div>
      )}
    </div>
  );
}
