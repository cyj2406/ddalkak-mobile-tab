import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { color, f, SUBTITLE_COLOR } from "@/app/styleTokens";
import { RECOMMENDED_TEMPLATES } from "@/app/data/tasks";

const CARD_W = 158;
const GAP = 16;
const STEP = CARD_W + GAP;
const LOOP = RECOMMENDED_TEMPLATES.length * STEP;

/**
 * 추천 서식 롤링 배너 — 오른쪽으로 자동 순환하는 마퀴.
 *
 * 재생 중에는 CSS 애니메이션이 transform 을 맡고, 드래그·키보드·정지 버튼 중 하나라도
 * 건드리면 그 순간의 위치를 읽어 수동 모드로 전환한다(트랙을 직접 DOM 에 써서 60fps 로
 * 반응하고, React state 는 재생/정지 전환에만 관여한다).
 */
export default function RecommendedCarousel({ onSelectTemplate }: { onSelectTemplate: (taskId: string) => void }) {
  const [playing, setPlaying] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const dragRef = useRef<{ x: number; start: number; moved: boolean } | null>(null);
  const suppressClickRef = useRef(false);
  // 정지 버튼으로 직접 멈춘 상태인지 — 호버/포커스가 풀려도 다시 재생하면 안 된다.
  const userPausedRef = useRef(false);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduceMotionRef.current) setPlaying(true);
  }, []);

  const applyOffset = () => {
    let o = offsetRef.current;
    if (o < 0) o += LOOP;
    if (o >= LOOP) o -= LOOP;
    offsetRef.current = o;
    const el = trackRef.current;
    if (el) el.style.transform = `translateX(${-o}px)`;
  };

  const toManual = () => {
    const el = trackRef.current;
    if (!playing || !el) return;
    const m = new DOMMatrixReadOnly(getComputedStyle(el).transform);
    offsetRef.current = -m.m41;
    setPlaying(false);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    toManual();
    userPausedRef.current = true;
    dragRef.current = { x: e.clientX, start: offsetRef.current, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag) return;
    const dx = e.clientX - drag.x;
    if (Math.abs(dx) > 4) drag.moved = true;
    offsetRef.current = drag.start - dx;
    applyOffset();
  };
  const onPointerUp = () => {
    if (dragRef.current?.moved) {
      suppressClickRef.current = true;
      // 클릭 이벤트는 pointerup 직후 발생하므로, 그 다음 tick 에서 플래그를 내린다.
      setTimeout(() => { suppressClickRef.current = false; }, 0);
    }
    dragRef.current = null;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    toManual();
    userPausedRef.current = true;
    offsetRef.current += e.key === "ArrowRight" ? STEP : -STEP;
    applyOffset();
    e.preventDefault();
  };

  const togglePlay = () => {
    if (playing) {
      toManual();
      userPausedRef.current = true;
    } else {
      userPausedRef.current = false;
      setPlaying(true);
    }
  };

  const pauseForHover = () => toManual();
  const resumeAfterHover = () => {
    if (!userPausedRef.current && !reduceMotionRef.current) setPlaying(true);
  };

  const step = (dir: 1 | -1) => {
    toManual();
    userPausedRef.current = true;
    offsetRef.current += dir * STEP;
    applyOffset();
  };

  const items = [...RECOMMENDED_TEMPLATES, ...RECOMMENDED_TEMPLATES];

  return (
    <section aria-label="추천 서식" className="rounded-[26px]" style={{ padding: "20px 20px 22px", background: "linear-gradient(135deg, #EEF0FF 0%, #E4E9FF 100%)" }}>
      <div className="flex items-baseline gap-2.5 mb-4">
        <h2 style={{ ...f, fontWeight: 700, fontSize: 13.5, color: "#0a0a0a" }}>추천 서식</h2>
        <span style={{ ...f, fontWeight: 500, fontSize: 12, color: SUBTITLE_COLOR }}>지금 많이 쓰는 서식 10개</span>
        <div className="flex-1" />
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "자동 재생 정지" : "자동 재생 시작"}
          className="flex items-center justify-center rounded-full bg-white shrink-0"
          style={{ width: 34, height: 34, border: "1px solid #e2e8f0", color: SUBTITLE_COLOR }}
        >
          {playing ? <Pause size={14} aria-hidden /> : <Play size={14} aria-hidden />}
        </button>
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="이전 서식"
          className="flex items-center justify-center rounded-full bg-white shrink-0"
          style={{ width: 34, height: 34, border: "1px solid #e2e8f0", color: SUBTITLE_COLOR }}
        >
          <ChevronLeft size={16} aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="다음 서식"
          className="flex items-center justify-center rounded-full bg-white shrink-0"
          style={{ width: 34, height: 34, border: "1px solid #e2e8f0", color: SUBTITLE_COLOR }}
        >
          <ChevronRight size={16} aria-hidden />
        </button>
      </div>
      <div
        tabIndex={0}
        role="group"
        aria-label="추천 서식 캐러셀, 좌우 화살표 키로 이동"
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={pauseForHover}
        onMouseLeave={resumeAfterHover}
        onFocus={pauseForHover}
        onBlur={resumeAfterHover}
        style={{ overflow: "hidden", cursor: "grab", touchAction: "pan-y" }}
      >
        <div
          ref={trackRef}
          data-track
          className="flex"
          style={{
            gap: GAP,
            width: "max-content",
            animation: playing ? "home-carousel-marquee 42s linear infinite" : "none",
          }}
        >
          {items.map((t, i) => (
            <button
              type="button"
              key={`${t.taskId}-${i}`}
              onClick={() => { if (suppressClickRef.current) return; onSelectTemplate(t.taskId); }}
              className="flex-none rounded-[18px] bg-white overflow-hidden text-left"
              style={{ width: CARD_W, boxShadow: "0 4px 16px rgba(10,10,10,.08)" }}
            >
              <div
                className="relative w-full flex items-center justify-center"
                style={{ aspectRatio: "4 / 3", background: "repeating-linear-gradient(135deg,#EEF0FF 0 8px,#E4E9FF 8px 16px)" }}
              >
                <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10, color: "#94a3b8", padding: "0 10px", textAlign: "center" }}>
                  {t.meta}
                </span>
                <span
                  className="absolute top-2 right-2 rounded-full"
                  style={{ background: "rgba(10,10,10,.72)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 7px" }}
                >
                  표지 예시
                </span>
              </div>
              <div style={{ padding: "9px 11px 11px" }}>
                <div className="truncate" style={{ ...f, fontWeight: 700, fontSize: 12.5, color: "#0a0a0a" }}>{t.title}</div>
                <div className="mt-1.5 flex gap-1.5">
                  <span className="rounded-[6px]" style={{ ...f, fontWeight: 600, fontSize: 10.5, color: SUBTITLE_COLOR, background: "#f1f5f9", padding: "3px 7px" }}>
                    {t.meta.split(" · ")[0]}
                  </span>
                  <span className="rounded-[6px]" style={{ ...f, fontWeight: 600, fontSize: 10.5, color: color.brand, background: color.surface.accent, padding: "3px 7px" }}>
                    {t.format}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
