import React, { useEffect, useRef, useState } from "react";

/**
 * 로딩 표시 공용 부품 — 뷰어·편집기가 함께 쓴다.
 *
 * 원칙 셋:
 *  1. 진행 중 표시는 화면에 하나만 둔다. 진행률을 알면 진행바, 모르면 스피너나 스켈레톤이고
 *     둘을 겹쳐 쓰지 않는다 — 같은 말을 두 번 하는 것이라 정보가 늘지 않는다.
 *  2. 최종 화면의 뼈대를 알면 스켈레톤을 쓴다. 빈 화면에서 도는 스피너보다
 *     "무엇이 어디에 올지"가 미리 보이는 편이 기다림이 짧게 느껴진다.
 *  3. 짧게 끝나는 로딩은 아예 보여주지 않는다 — useDelayedLoading 주석 참고.
 */

const C = {
  card: "#FFFFFF",
  line: "#E7EAF0",
  bg: "#F5F7FA",
  sub: "#8A90A2",
  text: "#1A1D29",
} as const;

const font = { fontFamily: "'Pretendard Variable', Pretendard, sans-serif" };

/** 이 시간 안에 끝나면 로딩 UI 를 아예 띄우지 않는다 */
export const LOADING_DELAY_MS = 200;
/** 한 번 띄웠으면 최소 이만큼은 유지한다 */
export const LOADING_MIN_SHOW_MS = 300;

/**
 * "깜빡임 없는" 로딩 표시 여부.
 *
 * 로딩이 곧바로 끝나면 스켈레톤이 한 프레임 번쩍이고 사라져 오히려 어수선하다.
 * 그래서 두 가지를 건다 —
 *   · 지연 표시: LOADING_DELAY_MS 안에 끝나면 아예 뜨지 않는다.
 *   · 최소 유지: 일단 떴으면 LOADING_MIN_SHOW_MS 는 유지하고 내려간다.
 *
 * 반환값은 "지금 로딩 UI 를 그릴지"이며, 인자 active(실제 작업 중인지)와는 다르다.
 */
export function useDelayedLoading(
  active: boolean,
  opts?: { delay?: number; minShow?: number },
): boolean {
  const delay = opts?.delay ?? LOADING_DELAY_MS;
  const minShow = opts?.minShow ?? LOADING_MIN_SHOW_MS;
  const [visible, setVisible] = useState(false);
  const shownAt = useRef(0);

  useEffect(() => {
    if (active) {
      if (visible) return;
      const t = window.setTimeout(() => {
        shownAt.current = Date.now();
        setVisible(true);
      }, delay);
      return () => window.clearTimeout(t);
    }
    // 작업은 끝났다. 아직 아무것도 안 띄웠으면 그대로 끝내고,
    // 이미 떠 있으면 최소 유지 시간을 채운 뒤 내린다.
    if (!visible) return;
    const left = Math.max(0, minShow - (Date.now() - shownAt.current));
    const t = window.setTimeout(() => setVisible(false), left);
    return () => window.clearTimeout(t);
  }, [active, visible, delay, minShow]);

  return visible;
}

/**
 * 로딩이 끝났다는 사실만 스크린리더에 알린다.
 *
 * 스켈레톤은 aria-hidden 이라 낭독되지 않으므로, 화면을 못 보는 사용자에게는
 * 기다림이 끝난 시점이 전달되지 않는다. 이 한 줄이 그 자리를 메운다.
 * 끝난 "순간"만 알리면 되므로 잠시 뒤 비운다 — 계속 물고 있으면 다음 알림이 묻힌다.
 */
export function LoadingAnnouncer({ loading, message }: { loading: boolean; message: string }) {
  const [text, setText] = useState("");
  const wasLoading = useRef(false);

  useEffect(() => {
    if (loading) {
      wasLoading.current = true;
      setText("");
      return;
    }
    if (!wasLoading.current) return;
    wasLoading.current = false;
    setText(message);
    const t = window.setTimeout(() => setText(""), 2000);
    return () => window.clearTimeout(t);
  }, [loading, message]);

  return <span className="sr-only" role="status" aria-live="polite">{text}</span>;
}

/** 스켈레톤 공용 CSS — 스켈레톤을 쓰는 화면이 한 번만 심으면 된다 */
export function SkeletonStyles() {
  return (
    <style>{`
      .dk-skel { position: relative; overflow: hidden; background: ${C.line}; }
      .dk-skel::after {
        content: "";
        position: absolute;
        inset: 0;
        transform: translateX(-100%);
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent);
        animation: dkSkelShimmer 1400ms ease-in-out infinite;
      }
      /* 은은하게만 — 셔머가 강하면 그 자체가 볼거리가 되어 시선을 붙든다 */
      @media (prefers-reduced-motion: reduce) {
        .dk-skel::after { animation: none; }
      }
      @keyframes dkSkelShimmer { 100% { transform: translateX(100%); } }
    `}</style>
  );
}

/** 회색 블록 하나. 장식이므로 스크린리더에서는 통째로 빠진다. */
export function Skel({
  w, h, r = 8, style,
}: { w?: number | string; h: number | string; r?: number; style?: React.CSSProperties }) {
  return (
    <div className="dk-skel" aria-hidden="true" style={{ width: w ?? "100%", height: h, borderRadius: r, ...style }} />
  );
}

/**
 * 편집기 진입 스켈레톤 — 상단 툴바 · 좌측 도구 레일 · 캔버스 · 우측 패널.
 * 실제 편집기와 같은 자리에 같은 크기의 블록을 둔다. 자리가 어긋나면
 * 로딩이 끝나는 순간 화면이 튀어, 스켈레톤을 쓰는 이유가 사라진다.
 */
export function EditorSkeleton({
  railW = 76, sidebarW = 300, barH = 56, showSidebar = true,
}: { railW?: number; sidebarW?: number; barH?: number; showSidebar?: boolean }) {
  return (
    <div className="absolute inset-0 flex flex-col" aria-busy="true" style={{ background: C.bg, ...font }}>
      <SkeletonStyles />

      {/* 상단 툴바 */}
      <div
        className="shrink-0 flex items-center px-4"
        style={{ height: barH, background: C.card, borderBottom: `1px solid ${C.line}` }}
      >
        <Skel w={132} h={28} r={9} />
        <div className="flex-1" />
        <div className="flex items-center gap-3">
          {[0, 1, 2, 3].map((i) => <Skel key={i} w={28} h={28} r={9} />)}
          <Skel w={72} h={28} r={9} />
        </div>
      </div>

      <div className="flex-1 min-h-0 flex">
        {/* 좌측 도구 레일 */}
        <div
          className="shrink-0 flex flex-col items-center gap-4 pt-4"
          style={{ width: railW, background: C.card, borderRight: `1px solid ${C.line}` }}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => <Skel key={i} w={40} h={40} r={11} />)}
        </div>

        {/* 캔버스 — 가운데 아트보드 한 장 */}
        <div className="flex-1 min-w-0 flex items-center justify-center p-8">
          <Skel w="min(72%, 520px)" h="min(58%, 360px)" r={12} />
        </div>

        {/* 우측 속성 패널 */}
        {showSidebar && (
          <div
            className="shrink-0 flex flex-col gap-3 p-4"
            style={{ width: sidebarW, background: C.card, borderLeft: `1px solid ${C.line}` }}
          >
            <Skel h={36} r={10} />
            <Skel h={64} r={10} />
            <Skel h={44} r={10} />
            <Skel h={44} r={10} />
            <Skel h={120} r={10} />
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * 결과물 뷰어 스켈레톤 — 헤더 한 줄 + 본문 블록.
 * 상단바는 뷰어 껍데기(TabletEditorShell)가 이미 그리므로, 여기서는 본문 영역만 채운다.
 */
export function ViewerSkeleton({ message }: { message?: string }) {
  return (
    <div className="flex-1 min-h-0 flex flex-col items-center px-6 py-8 gap-4" aria-busy="true" style={font}>
      <SkeletonStyles />
      <div className="w-full flex flex-col gap-3" style={{ maxWidth: 720 }}>
        {/* 헤더 */}
        <Skel w="42%" h={26} r={8} />
        <Skel w="66%" h={14} r={7} />
        <div style={{ height: 10 }} />
        {/* 본문 */}
        <Skel h={220} r={12} />
        <Skel w="92%" h={14} r={7} />
        <Skel w="78%" h={14} r={7} />
        <Skel w="85%" h={14} r={7} />
      </div>
      {message && (
        <span style={{ fontSize: 14, fontWeight: 600, color: C.sub, marginTop: 4 }}>{message}</span>
      )}
    </div>
  );
}

/**
 * 캔버스 위에 잠깐 덮는 스피너 — 되돌리기처럼 "화면 한 곳만 바뀌는" 작업에 쓴다.
 * 화면 전체를 스켈레톤으로 갈아치우면 이미 보고 있던 맥락까지 사라진다.
 */
export function CanvasLoadingOverlay({ message }: { message: string }) {
  return (
    <div
      className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-3"
      aria-busy="true"
      style={{ background: "rgba(245,247,250,0.72)", backdropFilter: "blur(1px)", ...font }}
    >
      <style>{`
        @keyframes dkSpin { to { transform: rotate(360deg); } }
        .dk-spinner { animation: dkSpin 900ms linear infinite; }
        @media (prefers-reduced-motion: reduce) { .dk-spinner { animation-duration: 2400ms; } }
      `}</style>
      <span
        className="dk-spinner rounded-full"
        aria-hidden="true"
        style={{ width: 30, height: 30, border: `3px solid ${C.line}`, borderTopColor: C.sub, display: "block" }}
      />
      <span style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{message}</span>
    </div>
  );
}
