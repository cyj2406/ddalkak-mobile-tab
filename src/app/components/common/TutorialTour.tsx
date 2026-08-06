import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { X } from "lucide-react";

/**
 * 단계별 스포트라이트 투어.
 * 딸깍넷 본 서비스(ddalkkak-redesign-v2)의 TutorialTour와 같은 구조/동작을 이 프로토타입에 맞춰 옮긴 것.
 *
 * - target 셀렉터의 위치를 재측정해 스포트라이트를 씌운다(모달 열림 애니메이션 대비 여러 프레임 측정)
 * - 대상이 화면 밖이면 스크롤해서 보여주고, 못 찾으면 화면 중앙 안내로 안전하게 진행한다
 * - 리사이즈·스크롤 시 위치 재계산, 안내 카드는 항상 뷰포트 안에 배치
 * - ESC 종료 / Enter 다음 단계 / 투어 중 배경 스크롤 잠금
 */

export interface TutorialStepConfig {
  /** CSS 셀렉터. 배열이면 모든 대상을 감싸는 영역을 강조. null이면 화면 중앙 안내. */
  target: string | string[] | null;
  title: string;
  description: string;
  /** 단계 진입 시 실행 (예: 화면 이동) */
  onEnter?: () => void;
  /** 단계 이탈 시 실행 (예: 원래 화면 복귀) */
  onExit?: () => void;
}

function measureTarget(target: string | string[]): DOMRect | null {
  const selectors = Array.isArray(target) ? target : [target];
  const rects = selectors
    .map((sel) => document.querySelector(sel)?.getBoundingClientRect())
    .filter((r): r is DOMRect => !!r);
  if (rects.length === 0) return null;
  const top = Math.min(...rects.map((r) => r.top));
  const left = Math.min(...rects.map((r) => r.left));
  const bottom = Math.max(...rects.map((r) => r.bottom));
  const right = Math.max(...rects.map((r) => r.right));
  return new DOMRect(left, top, right - left, bottom - top);
}

const SPOTLIGHT_PADDING = 8;
const TOOLTIP_WIDTH = 300;
const TOOLTIP_GAP = 16;
const VIEWPORT_MARGIN = 12;

export default function TutorialTour({
  isOpen, steps, onClose,
}: { isOpen: boolean; steps: TutorialStepConfig[]; onClose: () => void }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [tooltipHeight, setTooltipHeight] = useState(160);

  const step = steps[stepIndex];
  const total = steps.length;

  // 다시 열릴 때마다 1단계로 되돌린다(렌더 중 조정 — React 권장 패턴)
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) setStepIndex(0);
  }

  // 단계 진입/이탈 사이드이펙트
  useEffect(() => {
    if (!isOpen) return;
    steps[stepIndex]?.onEnter?.();
    return () => { steps[stepIndex]?.onExit?.(); };
  }, [isOpen, stepIndex, steps]);

  // 대상 측정 — 화면 전환/애니메이션을 감안해 몇 프레임 반복
  useEffect(() => {
    if (!isOpen || !step?.target) return;
    let frame = 0;
    let raf = 0;
    const measure = () => {
      const next = measureTarget(step.target as string | string[]);
      if (next) {
        document
          .querySelector(Array.isArray(step.target) ? step.target[0] : (step.target as string))
          ?.scrollIntoView({ block: "center", behavior: "smooth" });
      }
      setRect(next);
      frame += 1;
      if (frame < 14) raf = requestAnimationFrame(measure);
    };
    measure();
    return () => cancelAnimationFrame(raf);
  }, [isOpen, stepIndex, step?.target]);

  // 리사이즈·스크롤 시 재계산
  useEffect(() => {
    if (!isOpen || !step?.target) return;
    const recalc = () => setRect(measureTarget(step.target as string | string[]));
    window.addEventListener("resize", recalc);
    window.addEventListener("scroll", recalc, true);
    return () => {
      window.removeEventListener("resize", recalc);
      window.removeEventListener("scroll", recalc, true);
    };
  }, [isOpen, step?.target]);

  // ESC 종료 / Enter 다음 단계
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); onClose(); return; }
      if (e.key === "Enter") {
        if ((e.target as HTMLElement | null)?.closest("button")) return;
        e.preventDefault();
        if (stepIndex >= total - 1) onClose();
        else setStepIndex((i) => i + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, stepIndex, total, onClose]);

  // 투어 중 배경 스크롤 잠금
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [isOpen]);

  useLayoutEffect(() => {
    const next = tooltipRef.current?.offsetHeight;
    if (next && next !== tooltipHeight) setTooltipHeight(next);
  }, [stepIndex, step?.title, step?.description, rect, tooltipHeight]);

  if (!isOpen || !step) return null;

  // 이전 단계의 좌표가 남아 있으면 무시
  const activeRect = step.target ? rect : null;

  const handleNext = () => { if (stepIndex === total - 1) onClose(); else setStepIndex((i) => i + 1); };
  const handlePrev = () => setStepIndex((i) => Math.max(0, i - 1));

  const viewportW = window.innerWidth;
  const viewportH = window.innerHeight;
  const width = Math.min(TOOLTIP_WIDTH, viewportW - VIEWPORT_MARGIN * 2);

  let tooltipStyle: React.CSSProperties;
  if (activeRect) {
    const spaceBelow = viewportH - activeRect.bottom;
    const spaceAbove = activeRect.top;
    const spaceRight = viewportW - activeRect.right;

    let top: number;
    let left: number;
    if (spaceBelow >= tooltipHeight + TOOLTIP_GAP) {
      top = activeRect.bottom + TOOLTIP_GAP;
      left = activeRect.left + activeRect.width / 2 - width / 2;
    } else if (spaceAbove >= tooltipHeight + TOOLTIP_GAP) {
      top = activeRect.top - tooltipHeight - TOOLTIP_GAP;
      left = activeRect.left + activeRect.width / 2 - width / 2;
    } else if (spaceRight >= width + TOOLTIP_GAP) {
      top = activeRect.top + activeRect.height / 2 - tooltipHeight / 2;
      left = activeRect.right + TOOLTIP_GAP;
    } else {
      top = activeRect.top + activeRect.height / 2 - tooltipHeight / 2;
      left = activeRect.left - width - TOOLTIP_GAP;
    }
    left = Math.min(Math.max(left, VIEWPORT_MARGIN), viewportW - width - VIEWPORT_MARGIN);
    top = Math.min(Math.max(top, VIEWPORT_MARGIN), viewportH - tooltipHeight - VIEWPORT_MARGIN);
    tooltipStyle = { position: "fixed", top, left, width };
  } else {
    tooltipStyle = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width };
  }

  const f = { fontFamily: "'Pretendard Variable', Pretendard, sans-serif" };

  return (
    <div className="fixed inset-0 z-[120]" style={f}>
      {/* 클릭 차단 — 투어 중에는 배경 조작 금지 */}
      <div className="fixed inset-0" />

      {/* 스포트라이트 (대상 없으면 전체 딤) */}
      {activeRect ? (
        <div
          className="fixed rounded-2xl transition-all duration-200 ease-out pointer-events-none"
          style={{
            top: activeRect.top - SPOTLIGHT_PADDING,
            left: activeRect.left - SPOTLIGHT_PADDING,
            width: activeRect.width + SPOTLIGHT_PADDING * 2,
            height: activeRect.height + SPOTLIGHT_PADDING * 2,
            boxShadow: "0 0 0 9999px rgba(15, 23, 42, 0.55)",
            border: "2px solid rgba(255,255,255,0.9)",
          }}
        />
      ) : (
        <div className="fixed inset-0 pointer-events-none" style={{ background: "rgba(15,23,42,0.55)" }} />
      )}

      {/* 안내 카드 */}
      <div
        ref={tooltipRef}
        style={tooltipStyle}
        className="relative bg-white rounded-2xl border border-slate-100 p-5 text-left"
      >
        <button
          onClick={onClose}
          aria-label="튜토리얼 닫기"
          className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X size={14} />
        </button>

        <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", letterSpacing: "-0.3px", paddingRight: 24 }}>{step.title}</h3>
        <p style={{ fontSize: 13, color: "#475569", lineHeight: 1.65, marginTop: 8 }}>{step.description}</p>

        <div className="flex items-center justify-between mt-5">
          <span style={{ fontSize: 12, fontWeight: 600, color: "#94a3b8" }}>{stepIndex + 1} of {total}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={stepIndex === 0}
              className={`px-3 py-1.5 rounded-lg border transition-colors ${
                stepIndex === 0 ? "border-slate-100 text-slate-300" : "border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
              style={{ fontSize: 12.5, fontWeight: 600 }}
            >
              ← 이전
            </button>
            <button
              onClick={handleNext}
              className="px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-700 transition-colors"
              style={{ fontSize: 12.5, fontWeight: 600 }}
            >
              {stepIndex === total - 1 ? "완료" : "다음 →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
