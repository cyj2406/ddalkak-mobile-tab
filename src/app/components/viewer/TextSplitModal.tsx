import React, {
  useCallback, useEffect, useId, useMemo, useRef, useState,
} from "react";
import {
  AlertTriangle, Check, ChevronRight, ImageOff, Loader2, Minus, X,
} from "lucide-react";

import {
  BULK_THRESHOLD, HIGH_COST_RATIO, type EditorImage, type ImageStatus, type RunProgress,
  type Slide, creditFor, formatCredit, statusOfMap,
} from "./textSplit";

/**
 * 텍스트 분리할 이미지를 고르는 화면 — 우측에서 슬라이드 인/아웃 하는 패널 하나다.
 *
 * ── 왜 중앙 다이얼로그가 아니라 우측 패널인가 ────────────────────────
 * 목록 행에 마우스를 올리면 뒤쪽 캔버스에서 그 이미지가 하이라이트되어야 한다.
 * 화면 전체를 어둡게 덮는 다이얼로그로는 "뒤쪽"이 존재하지 않는다. 속성 패널과
 * 같은 자리·같은 방식으로 우측에서 슬라이드해 들어오게 해, 캔버스가 항상 보이고
 * 캔버스 쪽 클릭·호버가 그대로 살아 있게 한다.
 *
 * ── 탭이 없는 이유 ────────────────────────────────────────────────
 * 목록은 문서 전체 슬라이드 하나뿐이다. "현재 슬라이드만" 하고 싶은 경우는
 * 열릴 때의 초기 체크 상태(SplitOpenMode)로만 존재하고, 별도의 범위 탭은 없다 —
 * 탭마다 세는 단위가 달라지는 것이 이전 버전의 가장 큰 혼란이었다.
 *
 * ── 20장을 넘는 대량 선택 ─────────────────────────────────────────
 * 확인 다이얼로그(phase="confirm") → 진행 화면(phase="progress") → 부분 실패 요약
 * (phase="summary") 순으로 이 패널 안에서 이어진다. 20장 이하는 이 과정 없이
 * 곧바로 시작하고 패널이 즉시 닫힌다 — 진행은 캔버스와 상단 배지가 이어받는다.
 */

const C = {
  primary: "#3B5BFF",
  primarySoft: "#EEF1FF",
  card: "#FFFFFF",
  text: "#1A1D29",
  sub: "#8A90A2",
  line: "#E7EAF0",
  surface: "#F1F3F7",
  danger: "#E5484D",
} as const;

const font = { fontFamily: "'Pretendard Variable', Pretendard, sans-serif" };

/** 우측 패널의 고정 폭 — 부모(TabletMiniEditor)가 캔버스 오른쪽 여백을 계산할 때도 이 값을 쓴다. */
export const SPLIT_PANEL_W = 400;

const THUMB_W = 66;
const THUMB_H = 48;
const SUB_THUMB_W = 40;
const SUB_THUMB_H = 30;

/**
 * 패널이 열릴 때의 초기 체크 상태 세 가지.
 *   focus   캔버스에서 이미지를 선택한 채 열림 — 그 이미지만 체크
 *   current 아무것도 선택하지 않고 열림 — 지금 보고 있는 슬라이드만 체크
 *   all     "전체 선택" 진입 — 이미 분리한 것을 제외한 전체 체크
 */
export type SplitOpenMode =
  | { kind: "current" }
  | { kind: "all" }
  | { kind: "focus"; imageId: string };

/** 캔버스에서 이미지를 클릭할 때마다 부모가 nonce 를 올려 보낸다 — 같은 이미지를 다시
 *  클릭해도 effect 가 다시 반응하게 하려면 id 만으로는 부족하기 때문이다. */
export interface FocusRequest {
  id: string;
  nonce: number;
}

type Phase = "pick" | "confirm" | "progress" | "summary";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';

/* ── 체크 표시 ────────────────────────────────────────────────────── */

function CheckBox({
  state, size = 18, disabled = false,
}: { state: "off" | "on" | "mixed"; size?: number; disabled?: boolean }) {
  const on = state !== "off";
  return (
    <span
      aria-hidden="true"
      className="shrink-0 inline-flex items-center justify-center rounded-[5px]"
      style={{
        width: size,
        height: size,
        background: disabled ? "#F1F3F7" : on ? C.primary : C.card,
        border: `1px solid ${disabled ? "#DDE2EA" : on ? C.primary : "#CBD2DE"}`,
      }}
    >
      {state === "on" && <Check size={size - 6} strokeWidth={3} color="#FFFFFF" />}
      {state === "mixed" && <Minus size={size - 6} strokeWidth={3} color="#FFFFFF" />}
    </span>
  );
}

function Tag({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <span
      className="shrink-0 rounded-full px-1.5"
      style={{
        fontSize: 10.5,
        fontWeight: 700,
        lineHeight: 1.7,
        color: accent ? C.primary : C.sub,
        background: accent ? C.primarySoft : C.surface,
      }}
    >
      {children}
    </span>
  );
}

/** 문서 전체에 이미지 레이어가 하나도 없을 때 — 목록 대신 이유를 보여준다.
 *  분리 버튼은 이미 picked.size===0 조건으로 비활성되므로 여기서 따로 끌 것이 없다. */
function EmptyState() {
  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
      <span
        className="flex items-center justify-center rounded-[18px]"
        style={{ width: 48, height: 48, background: C.surface, color: C.sub }}
      >
        <ImageOff size={22} strokeWidth={1.8} />
      </span>
      <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginTop: 6 }}>분리할 이미지가 없어요</p>
      <p style={{ fontSize: 12.5, color: C.sub, lineHeight: 1.6, wordBreak: "keep-all" }}>
        슬라이드에 이미지를 추가하면 여기서 골라 분리할 수 있어요.
      </p>
    </div>
  );
}

/* ── 셈 도우미 ────────────────────────────────────────────────────── */

const isDone = (status: Record<string, ImageStatus>, id: string) => statusOfMap(status, id) === "done";

/** 지금 이 패널에서 "고를 수 있는" 이미지 — 이미 분리됐지만 재분리를 확정한 것까지 포함한다. */
const activeImagesOf = (slide: Slide, status: Record<string, ImageStatus>, picked: Set<string>) => (
  slide.images.filter((img) => !isDone(status, img.id) || picked.has(img.id))
);

function initialPicked(
  mode: SplitOpenMode, slides: Slide[], currentSlide: number, status: Record<string, ImageStatus>,
): Set<string> {
  if (mode.kind === "focus") {
    return isDone(status, mode.imageId) ? new Set() : new Set([mode.imageId]);
  }
  if (mode.kind === "current") {
    const slide = slides.find((s) => s.no === currentSlide);
    return new Set(slide ? slide.images.filter((i) => !isDone(status, i.id)).map((i) => i.id) : []);
  }
  const ids: string[] = [];
  slides.forEach((s) => s.images.forEach((i) => { if (!isDone(status, i.id)) ids.push(i.id); }));
  return new Set(ids);
}

function initialExpanded(mode: SplitOpenMode, slides: Slide[]): Set<number> {
  if (mode.kind !== "focus") return new Set();
  const slide = slides.find((s) => s.images.some((i) => i.id === mode.imageId));
  return slide && slide.images.length > 1 ? new Set([slide.no]) : new Set();
}

/* ── 패널 ─────────────────────────────────────────────────────────── */

export function TextSplitModal({
  slides, currentSlide, balance, unit = "슬라이드", mode,
  status, runProgress, hoverImageId, onHoverImage, focusRequest,
  onClose, onStart, onRetry,
}: {
  slides: Slide[];
  currentSlide: number;
  balance: number;
  /** 낱장을 부르는 이름. 호출부(TabletMiniEditor)가 정한 값이 그대로 내려온다. */
  unit?: string;
  mode: SplitOpenMode;
  status: Record<string, ImageStatus>;
  runProgress: RunProgress | null;
  hoverImageId: string | null;
  onHoverImage: (id: string | null) => void;
  focusRequest: FocusRequest | null;
  onClose: () => void;
  /** 회차를 시작만 한다 — 패널을 닫는 것은 이 컴포넌트가 스스로 판단한다(20장 기준). */
  onStart: (ids: string[]) => void;
  onRetry: (ids: string[]) => void;
}) {
  const titleId = useId().replace(/:/g, "_");

  const [picked, setPicked] = useState<Set<string>>(() => initialPicked(mode, slides, currentSlide, status));
  const [expanded, setExpanded] = useState<Set<number>>(() => initialExpanded(mode, slides));
  const [confirmingIds, setConfirmingIds] = useState<Set<string>>(new Set());

  const [phase, setPhase] = useState<Phase>("pick");
  const [bulkIds, setBulkIds] = useState<string[] | null>(null);
  const [retrying, setRetrying] = useState(false);
  const startedAtRef = useRef<number | null>(null);

  const rowRefs = useRef<Map<string, HTMLElement>>(new Map());
  const registerRef = useCallback((id: string, el: HTMLElement | null) => {
    if (el) rowRefs.current.set(id, el); else rowRefs.current.delete(id);
  }, []);

  /* 캔버스에서 이미지를 클릭 → 목록에서 그 슬라이드를 펼치고, 체크하고, 그 자리로 스크롤 */
  useEffect(() => {
    if (!focusRequest || phase !== "pick") return;
    const { id } = focusRequest;
    const slide = slides.find((s) => s.images.some((i) => i.id === id));
    if (!slide) return;
    if (slide.images.length > 1) setExpanded((s) => new Set(s).add(slide.no));
    setPicked((s) => (isDone(status, id) ? s : new Set(s).add(id)));
    requestAnimationFrame(() => {
      rowRefs.current.get(id)?.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusRequest]);

  const totalImages = useMemo(() => slides.reduce((n, s) => n + s.images.length, 0), [slides]);

  /* 문서에서 이미지·슬라이드가 사라지면(삭제) 더 이상 존재하지 않는 id 를 선택·재분리 확인·
     펼침 상태에서도 걷어낸다 — 그래야 "선택된 이미지가 삭제되면 카운트가 즉시 갱신"이 된다. */
  useEffect(() => {
    const liveImageIds = new Set<string>();
    const liveSlideNos = new Set<number>();
    slides.forEach((s) => { liveSlideNos.add(s.no); s.images.forEach((i) => liveImageIds.add(i.id)); });

    setPicked((s) => {
      const next = new Set([...s].filter((id) => liveImageIds.has(id)));
      return next.size === s.size ? s : next;
    });
    setConfirmingIds((s) => {
      const next = new Set([...s].filter((id) => liveImageIds.has(id)));
      return next.size === s.size ? s : next;
    });
    setExpanded((s) => {
      const next = new Set([...s].filter((no) => liveSlideNos.has(no)));
      return next.size === s.size ? s : next;
    });
  }, [slides]);

  const allSelectableIds = useMemo(() => {
    const ids: string[] = [];
    slides.forEach((s) => s.images.forEach((i) => { if (!isDone(status, i.id)) ids.push(i.id); }));
    return ids;
  }, [slides, status]);
  // on/off/mixed 는 목록에 보이는 분모(totalImages, 이미 분리된 것 포함)와 같은 기준으로 센다 —
  // "선택 가능한 것"만으로 세면 이미 분리된 항목이 섞여 있을 때 "1/5 선택"인데 체크박스는
  // 꽉 찬 것처럼 보이는 불일치가 생긴다. 실제로 고를 수 있는 대상(allSelectableIds)은
  // toggleAll 이 무엇을 켜고 끌지 정할 때만 쓴다.
  const allOn = totalImages > 0 && picked.size === totalImages;
  const someOn = !allOn && picked.size > 0;
  // 문서의 이미지가 전부 분리 완료라 더 고를 것이 없는 상태 — "전체 선택"을 꺼 두고
  // 목록 위에 안내를 띄운다. totalImages===0(이미지 자체가 없음)과는 다른 상태다.
  const allDone = totalImages > 0 && allSelectableIds.length === 0;
  const toggleAll = useCallback(() => {
    if (allSelectableIds.length === 0) return;
    setPicked(allOn ? new Set() : new Set(allSelectableIds));
  }, [allOn, allSelectableIds]);

  const toggleImage = useCallback((id: string) => {
    if (isDone(status, id) && !picked.has(id)) {
      setConfirmingIds((s) => new Set(s).add(id));
      return;
    }
    setPicked((s) => {
      const next = new Set(s);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, [status, picked]);

  const confirmResplit = useCallback((id: string) => {
    setConfirmingIds((s) => { const n = new Set(s); n.delete(id); return n; });
    setPicked((s) => new Set(s).add(id));
  }, []);
  const cancelResplit = useCallback((id: string) => {
    setConfirmingIds((s) => { const n = new Set(s); n.delete(id); return n; });
  }, []);

  const toggleSlide = useCallback((slide: Slide) => {
    const active = activeImagesOf(slide, status, picked).map((i) => i.id);
    if (active.length === 0) return;
    const allChecked = active.every((id) => picked.has(id));
    setPicked((s) => {
      const next = new Set(s);
      active.forEach((id) => (allChecked ? next.delete(id) : next.add(id)));
      return next;
    });
  }, [status, picked]);

  const toggleExpand = useCallback((no: number) => {
    setExpanded((s) => {
      const next = new Set(s);
      if (next.has(no)) next.delete(no); else next.add(no);
      return next;
    });
  }, []);

  /* 회차가 끝났는지(=runProgress 가 다시 null 이 됐는지) 지켜보다가, 여전히 실패가 남아 있으면
     요약 화면으로, 전부 끝났으면 패널을 닫는다. toast 가 아니라 status 를 직접 본다 —
     재시도 회차의 toast 는 그 회차만의 결과라 이전 회차의 exhausted 항목을 놓친다. */
  useEffect(() => {
    if (phase !== "progress" || runProgress !== null || !bulkIds) return;
    const stillFailed = bulkIds.some((id) => status[id] === "failed" || status[id] === "exhausted");
    if (stillFailed) { setPhase("summary"); setRetrying(false); } else { onClose(); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, runProgress, bulkIds, status]);

  const cost = creditFor(picked.size);
  const short = cost > balance;
  const high = !short && cost > balance * HIGH_COST_RATIO;

  const handleConfirmClick = () => {
    if (picked.size === 0 || short) return;
    const ids = [...picked];
    if (ids.length > BULK_THRESHOLD) { setPhase("confirm"); return; }
    onStart(ids);
    onClose();
  };

  const startBulk = () => {
    const ids = [...picked];
    setBulkIds(ids);
    startedAtRef.current = Date.now();
    onStart(ids);
    setPhase("progress");
  };

  const handleRetry = (ids: string[]) => {
    setRetrying(true);
    startedAtRef.current = Date.now();
    onRetry(ids);
    setPhase("progress");
  };

  return (
    <PanelShell labelledBy={titleId} onClose={onClose}>
      {phase === "progress" ? (
        <ProgressView runProgress={runProgress} retrying={retrying} startedAt={startedAtRef.current} onBackground={onClose} />
      ) : phase === "summary" && bulkIds ? (
        <SummaryView bulkIds={bulkIds} status={status} slides={slides} onRetry={handleRetry} onClose={onClose} />
      ) : (
        <>
          <div className="shrink-0 flex items-center justify-between px-4 pt-4 pb-3">
            <h2 id={titleId} tabIndex={-1} style={{ fontSize: 15.5, fontWeight: 700, color: C.text, outline: "none" }}>
              텍스트 분리
            </h2>
            <button
              type="button"
              aria-label="닫기"
              onClick={onClose}
              className="w-8 h-8 rounded-[8px] flex items-center justify-center transition-colors hover:bg-[#F5F7FA]"
              style={{ color: C.sub }}
            >
              <X size={16} strokeWidth={2.2} />
            </button>
          </div>

          {totalImages === 0 ? (
            <EmptyState />
          ) : (
            <>
              <div
                className="shrink-0 px-4 py-2.5 flex items-center justify-between"
                style={{ borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}
              >
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={allOn ? "true" : someOn ? "mixed" : "false"}
                  disabled={allDone}
                  onClick={toggleAll}
                  className="flex items-center gap-2 rounded-[8px] px-1 py-1 -mx-1 transition-colors enabled:hover:bg-[#F5F7FA] disabled:cursor-default"
                >
                  <CheckBox state={allOn ? "on" : someOn ? "mixed" : "off"} disabled={allDone} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: allDone ? C.sub : C.text }}>전체 선택</span>
                </button>
                <span className="tabular-nums" style={{ fontSize: 12.5, fontWeight: 600, color: C.sub }}>
                  {picked.size} / {totalImages}장
                </span>
              </div>

              {allDone && (
                <div
                  className="shrink-0 px-4 py-2.5"
                  style={{ background: C.surface, borderBottom: `1px solid ${C.line}` }}
                >
                  <p style={{ fontSize: 12.5, fontWeight: 600, color: C.sub }}>
                    이 문서의 이미지를 모두 분리했어요
                  </p>
                </div>
              )}

              <div className="flex-1 min-h-0 overflow-y-auto px-3 py-3 flex flex-col gap-0.5" style={{ scrollbarWidth: "none" }}>
                {slides.map((s) => (
                  <SlideRow
                    key={s.no}
                    slide={s}
                    unit={unit}
                    currentSlide={currentSlide}
                    status={status}
                    picked={picked}
                    expanded={expanded.has(s.no)}
                    confirmingIds={confirmingIds}
                    hoverImageId={hoverImageId}
                    onToggleImage={toggleImage}
                    onToggleSlide={toggleSlide}
                    onToggleExpand={toggleExpand}
                    onConfirmResplit={confirmResplit}
                    onCancelResplit={cancelResplit}
                    onHoverImage={onHoverImage}
                    registerRef={registerRef}
                  />
                ))}
              </div>
            </>
          )}

          <div className="shrink-0 px-4 py-3.5 flex items-end gap-3" style={{ borderTop: `1px solid ${C.line}` }}>
            <div className="flex-1 min-w-0">
              <CreditLine cost={cost} balance={balance} short={short} high={high} />
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="h-10 px-4 rounded-[10px] transition-colors hover:bg-[#F5F7FA]"
                style={{ border: `1px solid ${C.line}`, color: C.text, fontSize: 13.5, fontWeight: 600 }}
              >
                취소
              </button>
              <button
                type="button"
                onClick={handleConfirmClick}
                disabled={picked.size === 0 || short}
                className="h-10 px-4 rounded-[10px] transition-[filter] enabled:hover:brightness-[0.97] disabled:cursor-default"
                style={{
                  background: picked.size === 0 || short ? "#E7EAF0" : C.primary,
                  color: picked.size === 0 || short ? C.sub : "#FFFFFF",
                  fontSize: 13.5,
                  fontWeight: 700,
                }}
              >
                {picked.size}장 분리하기
              </button>
            </div>
          </div>
        </>
      )}

      {phase === "confirm" && (
        <BulkConfirmDialog
          count={picked.size}
          cost={cost}
          balance={balance}
          onCancel={() => setPhase("pick")}
          onConfirm={startBulk}
        />
      )}
    </PanelShell>
  );
}

/* ── 셸 — 우측 슬라이드 패널, 포커스 트랩 + Esc ──────────────────────── */

function PanelShell({
  labelledBy, onClose, children,
}: { labelledBy: string; onClose: () => void; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.querySelector<HTMLElement>(`#${CSS.escape(labelledBy)}`)?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.stopPropagation(); onClose(); return; }
      if (e.key !== "Tab") return;
      const items = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE))
        .filter((n) => n.offsetParent !== null);
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && (active === first || active === el || !el.contains(active))) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault(); first.focus();
      }
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [labelledBy, onClose]);

  return (
    <>
      <style>{`
        @keyframes textSplitPanelIn { from { transform: translateX(100%) } to { transform: translateX(0) } }
        .text-split-panel { animation: textSplitPanelIn 220ms cubic-bezier(0.32,0.72,0,1); }
        @media (prefers-reduced-motion: reduce) { .text-split-panel { animation: none; } }
      `}</style>
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="text-split-panel absolute top-0 bottom-0 right-0 z-30 flex flex-col"
        style={{
          width: SPLIT_PANEL_W,
          background: C.card,
          borderLeft: `1px solid ${C.line}`,
          boxShadow: "-8px 0 24px rgba(16,24,40,0.14)",
          ...font,
        }}
      >
        {children}
      </div>
    </>
  );
}

/* ── 크레딧 한 줄 ─────────────────────────────────────────────────── */

function CreditLine({
  cost, balance, short, high,
}: { cost: number; balance: number; short: boolean; high: boolean }) {
  if (short) {
    return (
      <span style={{ fontSize: 13, fontWeight: 600, color: C.danger }}>
        크레딧이 부족해요 (약 {formatCredit(cost)} 필요 · 잔액 {formatCredit(balance)})
      </span>
    );
  }
  return (
    <span
      style={high
        ? { fontSize: 13, fontWeight: 700, color: C.primary }
        : { fontSize: 12, color: C.sub }}
    >
      약 {formatCredit(cost)} 크레딧
    </span>
  );
}

/* ── 재분리 인라인 확인 ───────────────────────────────────────────── */

function ResplitConfirm({
  indent, onConfirm, onCancel,
}: { indent: number; onConfirm: () => void; onCancel: () => void }) {
  return (
    <div
      className="flex items-start gap-2 rounded-[8px] px-2.5 py-2 mb-1"
      style={{ marginLeft: indent, background: "#FFF6F6", border: "1px solid #F6D9DA" }}
    >
      <AlertTriangle size={13} strokeWidth={2} color={C.danger} className="shrink-0" style={{ marginTop: 2 }} />
      <div className="flex-1 min-w-0 flex flex-col gap-1.5">
        <p style={{ fontSize: 11.5, fontWeight: 700, color: C.text }}>이미 분리한 이미지예요</p>
        <p style={{ fontSize: 11.5, color: C.text, lineHeight: 1.5, wordBreak: "keep-all" }}>
          다시 분리하면 크레딧이 또 사용되고, 손으로 고친 텍스트가 덮어써집니다
        </p>
        <div className="flex items-center gap-3">
          <button type="button" onClick={onCancel} style={{ fontSize: 11.5, fontWeight: 600, color: C.sub }}>
            그대로 두기
          </button>
          <button type="button" onClick={onConfirm} style={{ fontSize: 11.5, fontWeight: 700, color: C.danger }}>
            다시 분리
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── 목록 행 ──────────────────────────────────────────────────────── */

interface SlideRowProps {
  slide: Slide;
  unit: string;
  currentSlide: number;
  status: Record<string, ImageStatus>;
  picked: Set<string>;
  expanded: boolean;
  confirmingIds: Set<string>;
  hoverImageId: string | null;
  onToggleImage: (id: string) => void;
  onToggleSlide: (slide: Slide) => void;
  onToggleExpand: (no: number) => void;
  onConfirmResplit: (id: string) => void;
  onCancelResplit: (id: string) => void;
  onHoverImage: (id: string | null) => void;
  registerRef: (id: string, el: HTMLElement | null) => void;
}

function SlideRow({
  slide, unit, currentSlide, status, picked, expanded, confirmingIds, hoverImageId,
  onToggleImage, onToggleSlide, onToggleExpand, onConfirmResplit, onCancelResplit,
  onHoverImage, registerRef,
}: SlideRowProps) {
  const isCurrent = slide.no === currentSlide;
  const images = slide.images;

  if (images.length === 0) {
    return (
      <div className="flex items-center gap-2.5 rounded-[8px] px-2 py-2">
        <CheckBox state="off" disabled />
        <span
          className="shrink-0 rounded-[6px]"
          style={{ width: THUMB_W, height: THUMB_H, background: "#F1F3F7", border: `1px solid ${C.line}` }}
        />
        <span style={{ fontSize: 13, fontWeight: 600, color: C.sub }}>{unit} {slide.no}</span>
      </div>
    );
  }

  if (images.length === 1) {
    const img = images[0];
    const done = isDone(status, img.id);
    const checked = picked.has(img.id);
    const muted = done && !checked;
    return (
      <div className="flex flex-col">
        <div
          ref={(n) => registerRef(img.id, n)}
          role="checkbox"
          aria-checked={checked}
          tabIndex={0}
          onClick={() => onToggleImage(img.id)}
          onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); onToggleImage(img.id); } }}
          onMouseEnter={() => onHoverImage(img.id)}
          onMouseLeave={() => onHoverImage(null)}
          className="flex items-center gap-2.5 rounded-[8px] px-2 py-2 cursor-pointer transition-colors hover:bg-[#F5F7FA]"
        >
          <CheckBox state={checked ? "on" : "off"} disabled={muted} />
          <span
            className="shrink-0 rounded-[6px]"
            style={{ width: THUMB_W, height: THUMB_H, background: img.tone, border: `1px solid ${C.line}`, opacity: muted ? 0.55 : 1 }}
          />
          <span className="flex-1 min-w-0 flex items-center gap-1.5">
            <span className="truncate" style={{ fontSize: 13, fontWeight: 600, color: muted ? C.sub : C.text }}>
              {unit} {slide.no}
            </span>
            {isCurrent && <Tag>현재</Tag>}
          </span>
          {muted && <span className="shrink-0" style={{ fontSize: 11.5, fontWeight: 600, color: C.sub }}>분리 완료</span>}
        </div>
        {confirmingIds.has(img.id) && (
          <ResplitConfirm indent={THUMB_W + 34} onConfirm={() => onConfirmResplit(img.id)} onCancel={() => onCancelResplit(img.id)} />
        )}
      </div>
    );
  }

  // 토글 대상(무엇을 켜고 끌지)은 실제로 고를 수 있는 이미지(active)만 본다 — 이미 분리된
  // 항목은 헤더 일괄 토글로는 건드리지 않는다. 하지만 on/off/mixed 표시는 "N장"과 같은
  // 분모(slide.images 전체)로 세야 한다. active 만으로 세면 이미 분리된 항목이 섞였을 때
  // "일부만 선택"인데 체크박스가 꽉 찬 것처럼 보이는 불일치가 생긴다.
  const active = activeImagesOf(slide, status, picked);
  const checkedCount = images.filter((i) => picked.has(i.id)).length;
  const headerState: "on" | "mixed" | "off" = images.length === 0
    ? "off"
    : checkedCount === images.length ? "on" : checkedCount > 0 ? "mixed" : "off";
  // 하나라도 이미 분리됐으면 "N장" 대신 "완료 몇 개인지"를 적는다 — 개수만 봐서는
  // 그 슬라이드에 이미 손댈 수 없는 항목이 섞여 있다는 걸 알 길이 없다.
  const doneCount = images.filter((i) => isDone(status, i.id)).length;

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1.5 rounded-[8px] px-1.5 py-1.5 transition-colors hover:bg-[#F5F7FA]">
        <div
          role="checkbox"
          aria-checked={headerState === "on" ? "true" : headerState === "mixed" ? "mixed" : "false"}
          tabIndex={0}
          onClick={() => onToggleSlide(slide)}
          onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); onToggleSlide(slide); } }}
          className="flex-1 min-w-0 flex items-center gap-2.5 cursor-pointer"
        >
          <CheckBox state={headerState} disabled={active.length === 0} />
          <span
            className="shrink-0 rounded-[6px]"
            style={{ width: THUMB_W, height: THUMB_H, background: slide.tone, border: `1px solid ${C.line}` }}
          />
          <span className="flex-1 min-w-0 flex items-center gap-1.5">
            <span className="truncate" style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{unit} {slide.no}</span>
            {isCurrent && <Tag>현재</Tag>}
          </span>
        </div>

        <button
          type="button"
          aria-expanded={expanded}
          aria-label={`${unit} ${slide.no} 이미지 목록`}
          onClick={() => onToggleExpand(slide.no)}
          className="shrink-0 flex items-center gap-1 rounded-[6px] px-1.5 py-1 transition-colors hover:bg-[#E9EEF9]"
        >
          <span style={{ fontSize: 12, fontWeight: 600, color: C.sub }}>
            {doneCount > 0 ? `${doneCount}/${images.length} 완료` : `${images.length}장`}
          </span>
          <ChevronRight
            size={14}
            strokeWidth={2.2}
            color={C.sub}
            style={{ transform: expanded ? "rotate(90deg)" : "none", transition: "transform 140ms ease" }}
          />
        </button>
      </div>

      {expanded && (
        <ul className="flex flex-col gap-1 pb-1.5" style={{ paddingLeft: THUMB_W + 34 }}>
          {images.map((img) => {
            const done = isDone(status, img.id);
            const checked = picked.has(img.id);
            const muted = done && !checked;
            return (
              <li key={img.id} className="flex flex-col">
                <div
                  ref={(n) => registerRef(img.id, n)}
                  role="checkbox"
                  aria-checked={checked}
                  tabIndex={0}
                  onClick={() => onToggleImage(img.id)}
                  onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); onToggleImage(img.id); } }}
                  onMouseEnter={() => onHoverImage(img.id)}
                  onMouseLeave={() => onHoverImage(null)}
                  className="flex items-center gap-2 rounded-[6px] px-1.5 py-1.5 cursor-pointer transition-colors hover:bg-[#F5F7FA]"
                >
                  <CheckBox state={checked ? "on" : "off"} size={16} disabled={muted} />
                  <span
                    className="shrink-0 rounded-[4px]"
                    style={{ width: SUB_THUMB_W, height: SUB_THUMB_H, background: img.tone, border: `1px solid ${C.line}`, opacity: muted ? 0.55 : 1 }}
                  />
                  <span className="flex-1 min-w-0 flex items-center gap-1.5">
                    <span className="truncate" style={{ fontSize: 12, fontWeight: 500, color: muted ? C.sub : C.text }}>
                      {img.label}
                    </span>
                    {img.mockRecentlyAdded && <Tag accent>방금 추가</Tag>}
                  </span>
                  {muted && <span className="shrink-0" style={{ fontSize: 11, fontWeight: 600, color: C.sub }}>분리 완료</span>}
                </div>
                {confirmingIds.has(img.id) && (
                  <ResplitConfirm indent={SUB_THUMB_W + 28} onConfirm={() => onConfirmResplit(img.id)} onCancel={() => onCancelResplit(img.id)} />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/* ── 대량 선택 확인 다이얼로그 ────────────────────────────────────── */

function BulkConfirmDialog({
  count, cost, balance, onCancel, onConfirm,
}: { count: number; cost: number; balance: number; onCancel: () => void; onConfirm: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.querySelector<HTMLElement>("button")?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { e.stopPropagation(); onCancel(); } };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  const after = balance - cost;

  return (
    <>
      <div className="fixed inset-0 z-[110]" style={{ background: "rgba(16,24,40,0.35)" }} onClick={onCancel} />
      <div className="fixed inset-0 z-[111] flex items-center justify-center p-4" style={{ pointerEvents: "none" }}>
        <div
          ref={ref}
          role="alertdialog"
          aria-modal="true"
          aria-label="대량 분리 확인"
          className="rounded-[16px] flex flex-col gap-4 p-5"
          style={{ pointerEvents: "auto", width: "min(340px, 100%)", background: C.card, boxShadow: "0 18px 48px rgba(16,24,40,0.22)", ...font }}
        >
          <p style={{ fontSize: 15, fontWeight: 700, color: C.text }}>{count}장을 분리할까요?</p>
          <div className="flex flex-col gap-1.5">
            <ConfirmRow label="사용 크레딧" value={formatCredit(cost)} />
            <ConfirmRow label="보유 잔액" value={formatCredit(balance)} />
            <ConfirmRow label="분리 후 잔액" value={formatCredit(after)} strong />
          </div>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onCancel}
              className="h-9 px-3.5 rounded-[8px] transition-colors hover:bg-[#F5F7FA]"
              style={{ border: `1px solid ${C.line}`, color: C.text, fontSize: 13, fontWeight: 600 }}
            >
              취소
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="h-9 px-3.5 rounded-[8px] transition-[filter] hover:brightness-[0.97]"
              style={{ background: C.primary, color: "#FFFFFF", fontSize: 13, fontWeight: 700 }}
            >
              분리 시작
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function ConfirmRow({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span style={{ fontSize: 12.5, color: C.sub }}>{label}</span>
      <span className="tabular-nums" style={{ fontSize: 12.5, fontWeight: strong ? 700 : 600, color: C.text }}>{value}</span>
    </div>
  );
}

/* ── 진행 화면 ────────────────────────────────────────────────────── */

function ProgressView({
  runProgress, retrying, startedAt, onBackground,
}: { runProgress: RunProgress | null; retrying: boolean; startedAt: number | null; onBackground: () => void }) {
  // 500ms 마다 다시 그려 남은 시간 추정치를 갱신한다 (실시간 타이머가 아니라 목업 추정용).
  const [, tick] = useState(0);
  useEffect(() => {
    const t = window.setInterval(() => tick((n) => n + 1), 500);
    return () => window.clearInterval(t);
  }, []);

  const total = runProgress?.total ?? 0;
  const done = runProgress?.doneCount ?? 0;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  const remainingLabel = (() => {
    if (done === 0 || !startedAt) return "계산 중";
    const perItem = (Date.now() - startedAt) / done;
    const remainSec = Math.round(Math.max(0, perItem * (total - done)) / 1000);
    return remainSec <= 0 ? "곧 끝나요" : `약 ${remainSec}초 남음`;
  })();

  return (
    <div className="flex-1 min-h-0 flex flex-col items-center justify-center gap-4 px-6 py-8 text-center">
      <Loader2 size={22} strokeWidth={2.2} color={C.primary} className="animate-spin" />
      <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
        {retrying ? "실패한 이미지를 다시 분리하고 있어요" : "텍스트를 분리하고 있어요"}
      </p>
      <p className="tabular-nums" style={{ fontSize: 13, fontWeight: 600, color: C.sub }}>
        {done} / {total}장 완료 · {remainingLabel}
      </p>
      <div className="w-full rounded-full overflow-hidden" style={{ height: 6, background: C.surface }}>
        <div style={{ width: `${pct}%`, height: "100%", background: C.primary, transition: "width 200ms ease" }} />
      </div>
      <button
        type="button"
        onClick={onBackground}
        className="rounded-[8px] px-3 py-2 transition-colors hover:bg-[#F5F7FA]"
        style={{ fontSize: 12.5, fontWeight: 600, color: C.primary }}
      >
        백그라운드로 전환
      </button>
    </div>
  );
}

/* ── 부분 실패 요약 ───────────────────────────────────────────────── */

function SummaryView({
  bulkIds, status, slides, onRetry, onClose,
}: {
  bulkIds: string[];
  status: Record<string, ImageStatus>;
  slides: Slide[];
  onRetry: (ids: string[]) => void;
  onClose: () => void;
}) {
  const byId = useMemo(() => {
    const m = new Map<string, EditorImage>();
    slides.forEach((s) => s.images.forEach((i) => m.set(i.id, i)));
    return m;
  }, [slides]);

  const successCount = bulkIds.filter((id) => status[id] === "done").length;
  const failedIds = bulkIds.filter((id) => status[id] === "failed" || status[id] === "exhausted");
  const retryableIds = bulkIds.filter((id) => status[id] === "failed");

  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <div className="shrink-0 flex items-center justify-between px-4 pt-4 pb-3">
        <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>
          성공 {successCount}장 · 실패 {failedIds.length}장
        </p>
        <button
          type="button"
          aria-label="닫기"
          onClick={onClose}
          className="w-8 h-8 rounded-[8px] flex items-center justify-center transition-colors hover:bg-[#F5F7FA]"
          style={{ color: C.sub }}
        >
          <X size={16} strokeWidth={2.2} />
        </button>
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto px-4 pb-4">
        {failedIds.length > 0 && (
          <div className="rounded-[10px] px-3 py-2.5 flex flex-col gap-1.5" style={{ background: "#FFF6F6", border: "1px solid #F6D9DA" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: C.danger }}>
              실패한 {failedIds.length}장 (크레딧 미차감)
            </p>
            <ul className="flex flex-col gap-1">
              {failedIds.map((id) => {
                const img = byId.get(id);
                return (
                  <li key={id} style={{ fontSize: 12, color: C.text }}>
                    · {img ? `슬라이드 ${img.slide} - ${img.label}` : id}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="shrink-0 px-4 py-3.5 flex items-center gap-2" style={{ borderTop: `1px solid ${C.line}` }}>
        {retryableIds.length > 0 && (
          <button
            type="button"
            onClick={() => onRetry(retryableIds)}
            className="h-10 px-4 rounded-[10px] transition-[filter] hover:brightness-[0.97]"
            style={{ background: C.primary, color: "#FFFFFF", fontSize: 13.5, fontWeight: 700 }}
          >
            실패분만 재시도
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          className="h-10 px-4 rounded-[10px] transition-colors hover:bg-[#F5F7FA]"
          style={{ border: `1px solid ${C.line}`, color: C.text, fontSize: 13.5, fontWeight: 600 }}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
