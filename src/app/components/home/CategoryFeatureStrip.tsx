import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { f } from "@/app/styleTokens";
import { visibleTasksOf, type TaskGroup } from "@/app/data/tasks";
import { TaskCard } from "./TaskGrid";

const CARD_W = 244;
const GAP = 14;

/**
 * 카테고리를 선택하면 그 아래 나타나는 세부 기능 줄 — 기존 TaskCard를 그대로 재사용해
 * "왼쪽 이름, 오른쪽 일러스트" 카드가 새로 생기지 않게 한다. 지금 쓸 수 있는(status
 * "available") 기능만 보여준다 — 준비 중 항목은 전체 기능 쪽에서만 다룬다.
 *
 * 카드가 1~2개뿐이라도 가로 전체로 늘리지 않고(각 카드 CARD_W 고정폭) 왼쪽부터 채운다.
 * 실제로 넘칠 때만 좌우 화살표가 나타나고, 스크롤 끝에서는 그 방향 버튼이 사라진다.
 */
export function CategoryFeatureStrip({ group, onSelectTask }: { group: TaskGroup; onSelectTask: (taskId: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const availableTasks = visibleTasksOf(group).filter((t) => t.status === "available");

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group.id]);

  const scrollBy = (dir: 1 | -1) => {
    const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    scrollRef.current?.scrollBy({ left: dir * (CARD_W + GAP) * 2, behavior: reduceMotion ? "auto" : "smooth" });
  };

  if (availableTasks.length === 0) return null;

  return (
    <div aria-label={`${group.name} 세부 기능`} className="relative">
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          aria-label="이전 기능"
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full bg-white"
          style={{ width: 36, height: 36, boxShadow: "0 4px 12px rgba(10,10,10,.12)", border: "1px solid #e2e8f0" }}
        >
          <ChevronLeft size={18} aria-hidden />
        </button>
      )}
      <div
        ref={scrollRef}
        role="group"
        aria-label={`${group.name} 세부 기능, 좌우 화살표 키로 이동`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") { e.preventDefault(); scrollBy(1); }
          if (e.key === "ArrowLeft") { e.preventDefault(); scrollBy(-1); }
        }}
        className="flex overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] rounded-2xl"
        style={{ gap: GAP, scrollbarWidth: "none", scrollSnapType: "x proximity" }}
      >
        {availableTasks.map((task) => (
          <div key={task.id} className="shrink-0" style={{ width: CARD_W, scrollSnapAlign: "start" }}>
            <TaskCard task={task} groupId={group.id} onSelect={onSelectTask} variant="strip" />
          </div>
        ))}
      </div>
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scrollBy(1)}
          aria-label="다음 기능"
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full bg-white"
          style={{ width: 36, height: 36, boxShadow: "0 4px 12px rgba(10,10,10,.12)", border: "1px solid #e2e8f0" }}
        >
          <ChevronRight size={18} aria-hidden />
        </button>
      )}
      <span className="sr-only" style={f}>{group.name} 세부 기능 {availableTasks.length}개</span>
    </div>
  );
}

export default CategoryFeatureStrip;
