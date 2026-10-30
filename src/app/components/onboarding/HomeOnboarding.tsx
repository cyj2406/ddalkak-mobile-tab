import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "@/app/components/common/Button";
import { color, f, radius, shadow } from "@/app/styleTokens";
import { ONBOARDING_STEPS, START_DELAY_MS, TYPING_EXAMPLES, resolveStep, type OnboardingStepView, type Placement } from "./onboardingSteps";
import { ONBOARDING_SEEN_KEY, readFlag, setOnboardingState, writeFlag } from "./onboardingStore";
import { track } from "./track";

/**
 * 홈 첫 방문 온보딩 — 스포트라이트 + 말풍선(코치마크) 4단계. 단계 데이터는 onboardingSteps.ts.
 *
 * - 첫 방문 1회(localStorage). 홈이 다 그려지고(load·글꼴·첫 대상) START_DELAY_MS 쉰 뒤 띄운다.
 * - replayToken 이 바뀌면(프로필 메뉴 '튜토리얼 다시 보기') 처음부터 다시.
 * - 대상이 화면 밖이면 부드럽게 스크롤하고, 위치가 멈춘 뒤에 말풍선을 띄운다.
 * - 오버레이(말풍선 바깥)를 누르면 다음 단계, ESC 는 건너뛰기와 같다.
 * - 단계는 페이지 순서대로 위→아래 한 방향. 완주하면 스크롤하지 않고 오버레이만 걷는다 — 마지막 단계(작업별로 시작하기)가
 *   그대로 펼쳐져 있어 끝나는 자리가 곧 고를 수 있는 자리.
 * - 1단계 동안 검색창 placeholder 에 예시를 타이핑해 보인다(값은 넣지 않는다, onboardingStore 경유).
 */

const SPOT_PAD = 8;
const GAP = 14;
const MARGIN = 12;
const TOOLTIP_W = 320;
const TOTAL = ONBOARDING_STEPS.length;
/** extendToViewportBottom 단계 — 밝은 영역 아래 끝이 흐려지는 길이 */
const FADE_LEN = 120;
const DIM = "rgba(15, 23, 42, 0.58)";

const sel = (name: string) => `[data-onboarding="${name}"]`;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function measure(target: string | string[]): DOMRect | null {
  const rects = (Array.isArray(target) ? target : [target])
    .map((s) => document.querySelector(s)?.getBoundingClientRect())
    .filter((r): r is DOMRect => !!r && (r.width > 0 || r.height > 0));
  if (!rects.length) return null;
  const top = Math.min(...rects.map((r) => r.top));
  const left = Math.min(...rects.map((r) => r.left));
  const bottom = Math.max(...rects.map((r) => r.bottom));
  const right = Math.max(...rects.map((r) => r.right));
  return new DOMRect(left, top, right - left, bottom - top);
}

/** 대상이 들어 있는 세로 스크롤 영역(홈은 window 가 아니라 <main class="overflow-y-auto">) */
function scrollParentOf(el: Element): HTMLElement {
  let p = el.parentElement;
  while (p) {
    const oy = getComputedStyle(p).overflowY;
    if ((oy === "auto" || oy === "scroll") && p.scrollHeight > p.clientHeight) return p;
    p = p.parentElement;
  }
  return (document.scrollingElement as HTMLElement) ?? document.documentElement;
}

function scrollToStep(view: OnboardingStepView) {
  if (view.scroll === "none") return;
  const first = document.querySelector(Array.isArray(view.target) ? view.target[0]! : view.target);
  if (!first) return;
  const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";
  if (view.scroll === "center") {
    first.scrollIntoView({ block: "center", behavior });
    return;
  }
  // "top": 대상 맨 위를 스크롤 영역 위에서 24px 아래로
  const parent = scrollParentOf(first);
  const top = parent.scrollTop + (first.getBoundingClientRect().top - parent.getBoundingClientRect().top) - 24;
  parent.scrollTo({ top, behavior });
}

/** 말풍선 위치 — 선호 방향부터 자리가 나는 쪽을 고르고, 어디에도 안 들어가면 화면 아래에 띄운다(대상 일부를 덮는다). */
function placeTooltip(r: DOMRect, w: number, h: number, pref: Placement) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const clampX = (x: number) => Math.min(Math.max(x, MARGIN), vw - w - MARGIN);
  const clampY = (y: number) => Math.min(Math.max(y, MARGIN), vh - h - MARGIN);
  const cx = r.left + r.width / 2;
  const cy = r.top + r.height / 2;
  const order: Placement[] =
    pref === "bottom" ? ["bottom", "top", "right", "left"]
    : pref === "top" ? ["top", "bottom", "right", "left"]
    : pref === "right" ? ["right", "left", "bottom", "top"]
    : ["left", "right", "bottom", "top"];
  for (const p of order) {
    if (p === "bottom" && r.bottom + GAP + h <= vh - MARGIN) return { top: r.bottom + GAP, left: clampX(cx - w / 2) };
    if (p === "top" && r.top - GAP - h >= MARGIN) return { top: r.top - GAP - h, left: clampX(cx - w / 2) };
    if (p === "right" && r.right + GAP + w <= vw - MARGIN) return { top: clampY(cy - h / 2), left: r.right + GAP };
    if (p === "left" && r.left - GAP - w >= MARGIN) return { top: clampY(cy - h / 2), left: r.left - GAP - w };
  }
  return { top: vh - h - MARGIN, left: clampX(cx - w / 2) };
}

export default function HomeOnboarding({ enabled, isDesktop, replayToken }: {
  /** 홈이 보이는 동안만 true — 다른 화면에서는 시작하지 않고, 떠 있다면 조용히 닫는다 */
  enabled: boolean;
  /** 사이드바가 도킹되는 폭(1200px 이상)인지 — 아니면 단계의 mobile 값을 쓴다 */
  isDesktop: boolean;
  /** 0 이 아닌 값으로 바뀔 때마다 처음부터 다시 */
  replayToken: number;
}) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [settled, setSettled] = useState(false);
  const [tipH, setTipH] = useState(180);
  const tipRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const step = ONBOARDING_STEPS[index]!;
  const view = resolveStep(step, isDesktop);
  const variant = isDesktop ? "desktop" : "mobile";

  // ── 시작 ────────────────────────────────────────────────
  const scheduleStart = useCallback((source: "auto" | "replay") => {
    let cancelled = false;
    let timer = 0;
    void (async () => {
      if (document.readyState !== "complete") {
        await new Promise((res) => window.addEventListener("load", res, { once: true }));
      }
      try { await document.fonts?.ready; } catch { /* 글꼴 대기 실패 — 그대로 진행 */ }
      // 홈 첫 대상이 실제로 그려질 때까지(최대 3초)
      const t0 = performance.now();
      while (!cancelled && !document.querySelector(sel("search")) && performance.now() - t0 < 3000) {
        await new Promise((res) => requestAnimationFrame(res));
      }
      if (cancelled) return;
      timer = window.setTimeout(() => {
        if (cancelled) return;
        writeFlag("local", ONBOARDING_SEEN_KEY);
        setIndex(0);
        setRect(null);
        setSettled(false);
        setOpen(true);
        track("onboarding_start", { source, variant });
      }, START_DELAY_MS);
    })();
    return () => { cancelled = true; window.clearTimeout(timer); };
  }, [variant]);

  // 첫 방문 자동 시작
  useEffect(() => {
    if (!enabled || open || readFlag("local", ONBOARDING_SEEN_KEY)) return;
    return scheduleStart("auto");
    // 홈에 들어올 때만 판단한다
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  // 다시 보기
  useEffect(() => {
    if (!replayToken || !enabled) return;
    setOpen(false);
    return scheduleStart("replay");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replayToken, enabled]);

  // 홈을 벗어나면 조용히 닫는다
  useEffect(() => {
    if (!enabled && open) setOpen(false);
  }, [enabled, open]);

  useEffect(() => {
    setOnboardingState({ active: open });
    if (!open) setOnboardingState({ typingPlaceholder: null, stepId: null });
  }, [open]);
  useEffect(() => () => setOnboardingState({ active: false, typingPlaceholder: null, stepId: null }), []);
  useEffect(() => {
    if (open) setOnboardingState({ stepId: step.id });
  }, [open, step.id]);

  // ── 단계 진입: 스크롤 → 위치가 멈출 때까지 측정 → 말풍선 ──
  useEffect(() => {
    if (!open) return;
    setSettled(false);
    track("onboarding_step_view", { step: index + 1, id: step.id, variant });
    scrollToStep(view);
    let raf = 0;
    let last: DOMRect | null = null;
    let still = 0;
    const t0 = performance.now();
    const tick = () => {
      const r = measure(view.target);
      setRect(r);
      const same = !!r && !!last && Math.abs(r.top - last.top) < 0.5 && Math.abs(r.left - last.left) < 0.5 && Math.abs(r.height - last.height) < 0.5;
      still = same ? still + 1 : 0;
      last = r;
      if (still >= 6 || performance.now() - t0 > 1400) { setSettled(true); return; }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // view 는 index·isDesktop 로 정해진다
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index, isDesktop]);

  // 리사이즈·스크롤 때 다시 잰다
  useEffect(() => {
    if (!open) return;
    const re = () => setRect(measure(view.target));
    window.addEventListener("resize", re);
    window.addEventListener("scroll", re, true);
    return () => { window.removeEventListener("resize", re); window.removeEventListener("scroll", re, true); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, index, isDesktop]);

  // 1단계: 검색창 placeholder 타이핑(실제 값은 넣지 않는다). 벗어나면 원래 placeholder.
  useEffect(() => {
    if (!open || step.id !== "search") return;
    if (prefersReducedMotion()) {
      setOnboardingState({ typingPlaceholder: TYPING_EXAMPLES[0]! });
      return () => setOnboardingState({ typingPlaceholder: null });
    }
    let timer = 0;
    let word = 0;
    let len = 0;
    let deleting = false;
    const loop = () => {
      const text = TYPING_EXAMPLES[word % TYPING_EXAMPLES.length]!;
      len += deleting ? -1 : 1;
      setOnboardingState({ typingPlaceholder: text.slice(0, Math.max(len, 0)) || "​" });
      let wait = deleting ? 40 : 90;
      if (!deleting && len >= text.length) { deleting = true; wait = 1300; }
      else if (deleting && len <= 0) { deleting = false; word += 1; wait = 350; }
      timer = window.setTimeout(loop, wait);
    };
    timer = window.setTimeout(loop, 300);
    return () => { window.clearTimeout(timer); setOnboardingState({ typingPlaceholder: null }); };
  }, [open, step.id]);

  // ── 이동 ────────────────────────────────────────────────
  const close = () => setOpen(false);

  // 마무리: 스크롤하지 않고 오버레이만 걷는다 — 마지막 단계('작업별로 시작하기')가 눈앞에 펼쳐진 채 남아 바로 고를 수 있다
  const finish = () => {
    track("onboarding_complete", { variant });
    close();
  };

  const next = (via: "button" | "overlay" | "keyboard") => {
    track("onboarding_next", { step: index + 1, id: step.id, via, variant });
    if (index >= TOTAL - 1) finish();
    else setIndex((i) => i + 1);
  };
  const prev = () => {
    if (index === 0) return;
    track("onboarding_prev", { step: index + 1, id: step.id, variant });
    setIndex((i) => i - 1);
  };
  const skip = (via: "button" | "esc") => {
    track("onboarding_skip", { step: index + 1, id: step.id, via, variant });
    close();
  };

  // ESC = 건너뛰기, Tab 은 말풍선 안에서만
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.preventDefault(); skip("esc"); return; }
      if (e.key === "Tab" && tipRef.current) {
        const items = Array.from(tipRef.current.querySelectorAll<HTMLElement>("button:not([disabled])"));
        if (!items.length) return;
        const i = items.indexOf(document.activeElement as HTMLElement);
        e.preventDefault();
        const nextI = i < 0 ? 0 : (i + (e.shiftKey ? -1 : 1) + items.length) % items.length;
        items[nextI]!.focus();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  });

  // 말풍선이 뜨면 '다음'에 포커스
  useEffect(() => {
    if (open && settled) nextRef.current?.focus({ preventScroll: true });
  }, [open, settled, index]);

  useLayoutEffect(() => {
    const h = tipRef.current?.offsetHeight;
    if (h && Math.abs(h - tipH) > 1) setTipH(h);
  });

  if (!open) return null;

  const width = Math.min(TOOLTIP_W, window.innerWidth - MARGIN * 2);
  let spot = rect
    ? new DOMRect(rect.left - SPOT_PAD, rect.top - SPOT_PAD, rect.width + SPOT_PAD * 2, rect.height + SPOT_PAD * 2)
    : null;
  let pos: { top: number; left: number };
  /** 아래쪽을 흐리게 처리하는 띠(extendToViewportBottom) — 위 FADE_LEN 은 투명→어둡게, 그 아래는 말풍선이 앉는 어두운 자리 */
  let fade: { top: number; left: number; width: number; height: number } | null = null;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  if (spot && view.extendToViewportBottom) {
    // 대상 맨 위부터 화면 아래 끝(+여유)까지 밝힌다 — 아래 경계선은 화면 밖이라 보이지 않는다
    spot = new DOMRect(spot.left, spot.top, spot.width, vh - spot.top + 40);
    const bandH = FADE_LEN + tipH + MARGIN * 2;
    fade = { top: vh - bandH, left: spot.left - 2, width: spot.width + 4, height: bandH + 2 };
    // 말풍선은 흐려진 띠 안, 밝은 영역 오른쪽 아래 — 밝게 보이는 카드들을 가리지 않는다
    const left = isDesktop ? spot.right - width - 16 : spot.left + (spot.width - width) / 2;
    pos = { top: vh - tipH - MARGIN, left: Math.min(Math.max(left, MARGIN), vw - width - MARGIN) };
  } else {
    // 대상이 화면보다 커서 말풍선이 어느 쪽에도 안 들어가면, 보이는 만큼만 밝히고 아래에 말풍선 자리를 남긴다
    if (spot) {
      const room = vh - tipH - GAP - MARGIN;
      const fitsSide = spot.right + GAP + width <= vw - MARGIN || spot.left - GAP - width >= MARGIN;
      const fitsVert = spot.bottom + GAP + tipH <= vh - MARGIN || spot.top - GAP - tipH >= MARGIN;
      if (!fitsSide && !fitsVert && room - Math.max(spot.top, 0) >= 120) {
        const top = Math.max(spot.top, MARGIN);
        spot = new DOMRect(spot.left, top, spot.width, room - top);
      }
    }
    pos = spot ? placeTooltip(spot, width, tipH, view.placement) : { top: (vh - tipH) / 2, left: (vw - width) / 2 };
  }
  const showTip = settled;
  const titleId = "onboarding-title";
  const bodyId = "onboarding-body";

  return createPortal(
    <div className="fixed inset-0 z-[120]" style={f}>
      {/* 오버레이 — 바깥(대상 포함)을 누르면 다음 단계 */}
      <div className="fixed inset-0" onClick={() => next("overlay")} aria-hidden />
      {spot ? (
        <div
          aria-hidden
          className="fixed pointer-events-none"
          style={{
            top: spot.top, left: spot.left, width: spot.width, height: spot.height,
            borderRadius: radius.card,
            boxShadow: `0 0 0 9999px ${DIM}`,
            outline: "2px solid rgba(255,255,255,0.9)",
            // 위치 전환 애니메이션은 두지 않는다 — 스크롤 중 매 프레임 다시 시작돼 대상을 늦게 따라간다
          }}
        />
      ) : (
        <div aria-hidden className="fixed inset-0 pointer-events-none" style={{ background: DIM }} />
      )}
      {fade && (
        // 밝은 영역 아래쪽을 잘린 선 대신 서서히 흐리게 — 테두리 선(outline)도 함께 덮어 같이 사라진다
        <div
          aria-hidden
          data-onboarding-fade=""
          className="fixed pointer-events-none"
          style={{ ...fade, background: `linear-gradient(to bottom, rgba(15,23,42,0) 0px, ${DIM} ${FADE_LEN}px, ${DIM} 100%)` }}
        />
      )}

      {/* 말풍선 */}
      <div
        ref={tipRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={bodyId}
        data-onboarding-tooltip=""
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed", top: pos.top, left: pos.left, width,
          background: color.surface.default, borderRadius: radius.card, boxShadow: shadow.modal,
          padding: "16px 18px 18px",
          opacity: showTip ? 1 : 0,
          transform: showTip ? "translateY(0)" : "translateY(4px)",
          transition: prefersReducedMotion() ? undefined : "opacity 160ms ease, transform 160ms ease",
          pointerEvents: showTip ? "auto" : "none",
        }}
      >
        {/* 머리줄 — 단계 표시 · 건너뛰기(모든 단계에서 같은 자리) */}
        <div className="flex items-center justify-between" style={{ height: 24 }}>
          <span className="flex items-center gap-2" aria-label={`${TOTAL}단계 중 ${index + 1}단계`}>
            <span aria-hidden className="flex gap-1">
              {ONBOARDING_STEPS.map((s, i) => (
                <span key={s.id} style={{ width: i === index ? 14 : 6, height: 6, borderRadius: 3, background: i <= index ? color.brand : color.border.default, transition: "width 160ms ease" }} />
              ))}
            </span>
            <span aria-hidden style={{ fontSize: 12, fontWeight: 600, color: color.text.secondary, fontVariantNumeric: "tabular-nums" }}>{index + 1}/{TOTAL}</span>
          </span>
          <button
            type="button"
            onClick={() => skip("button")}
            className="rounded-md px-1.5 py-0.5 outline-none hover:bg-[#f1f5f9] focus-visible:ring-2 focus-visible:ring-[#4f7bff]"
            style={{ ...f, fontSize: 12.5, fontWeight: 600, color: color.text.secondary }}
          >
            건너뛰기
          </button>
        </div>

        <h2 id={titleId} style={{ fontSize: 16, fontWeight: 700, color: color.text.primary, letterSpacing: "-0.3px", marginTop: 10, wordBreak: "keep-all" }}>{view.title}</h2>
        <p id={bodyId} style={{ fontSize: 13.5, fontWeight: 500, color: "#475569", lineHeight: 1.6, marginTop: 6, wordBreak: "keep-all" }}>{view.body}</p>

        <div className="flex items-center justify-end gap-2" style={{ marginTop: 16 }}>
          {/* 1단계에서도 자리는 지켜 '다음' 위치가 흔들리지 않게 한다 */}
          <Button
            variant="secondary"
            size="md"
            onClick={prev}
            disabled={index === 0}
            aria-hidden={index === 0 || undefined}
            tabIndex={index === 0 ? -1 : undefined}
            style={{ height: 36, padding: "0 14px", fontSize: 13, visibility: index === 0 ? "hidden" : "visible" }}
          >
            이전
          </Button>
          <Button ref={nextRef} variant="primary" size="md" onClick={() => next("button")} style={{ height: 36, padding: "0 16px", fontSize: 13 }}>
            {index === TOTAL - 1 ? "시작하기" : "다음"}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
