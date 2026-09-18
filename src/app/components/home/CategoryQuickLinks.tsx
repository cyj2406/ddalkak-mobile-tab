import { useState } from "react";
import { ChevronRight } from "lucide-react";

import { categoryButtonClassName, color, f, motion, typography } from "@/app/styleTokens";
import { TASK_GROUPS } from "@/app/data/tasks";

/** 홈 대표 카테고리로 노출할 5개 — 나머지(오디오/웹페이지)는 바로가기 없이 "전체 기능"에서만 보인다.
 *  이름·아이콘·이동 경로는 여기서 새로 적지 않고 TASK_GROUPS(전체 기능과 같은 원본)에서 가져온다.
 *  각 대표 카테고리의 일러스트는 그 분류의 첫 작업 카드 것을 그대로 쓴다(참고 디자인의 REP 매핑과 동일:
 *  이미지→사진·그림, 문서→워드 문서, 발표자료→AI 발표자료, 표·데이터→엑셀, 영상→유튜브 영상). */
const QUICK_GROUP_IDS = ["image", "doc", "deck", "data", "video"];

/** 홈은 window 가 아니라 <main class="overflow-y-auto">가 실제 스크롤 컨테이너다 —
 *  window.scrollTo는 아무 일도 하지 않는다(body 높이가 뷰포트와 같아 window 자체는
 *  스크롤되지 않음). 실제 스크롤 조상을 찾아 그 안에서 스크롤한다. */
function scrollToAllFeatures() {
  const el = document.getElementById("all-features");
  if (!el) return;
  const scrollParent = (el.closest("main") as HTMLElement | null) ?? (document.scrollingElement as HTMLElement | null) ?? document.documentElement;
  const reduceMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const elRect = el.getBoundingClientRect();
  const parentRect = scrollParent.getBoundingClientRect();
  const top = scrollParent.scrollTop + (elRect.top - parentRect.top) - 24;
  scrollParent.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
}

/**
 * 카테고리 버튼 하나 — hover는 배경·테두리·그림자만 한 단계 진해지고, 글자 굵기·크기는
 * 선택 여부와 무관하게 항상 같다(2026-09-18) — 굵기가 바뀌면 같은 글자라도 렌더링
 * 폭이 달라져 버튼이 흔들린다. 선택 시에만 기존 브랜드 테두리·그림자·텍스트 색으로
 * 바뀐다(변경 없음). 텍스트 색은 그룹 제목과 같은 이유로 `typography.body.color`를
 * 쓴다(선택되면 `color.brand`).
 */
function CategoryButton({
  label,
  illustration,
  selected,
  onClick,
}: {
  label: string;
  illustration: string;
  selected: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center gap-2.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] transition-colors"
      style={{
        height: 48,
        padding: "0 18px 0 13px",
        background: "#fff",
        border: selected ? `1.5px solid ${color.brand}` : `1px solid ${hovered ? "#c7d2fe" : "#e1e7ff"}`,
        boxShadow: selected ? "0 6px 16px rgba(79,123,255,.14)" : hovered ? "0 4px 10px rgba(26,29,41,.08)" : "0 1px 6px rgba(26,29,41,.04)",
        transition: `border-color ${motion.fast}, box-shadow ${motion.fast}`,
      }}
    >
      <img src={illustration} alt="" draggable={false} className="block shrink-0" style={{ width: 30, height: 30, objectFit: "contain" }} />
      <span className={categoryButtonClassName} style={{ ...f, fontWeight: 500, color: selected ? color.brand : typography.body.color, letterSpacing: "-0.2px" }}>
        {label}
      </span>
    </button>
  );
}

export function CategoryQuickLinks({
  selectedGroupId,
  onToggle,
}: {
  selectedGroupId: string | null;
  onToggle: (groupId: string) => void;
}) {
  const groups = TASK_GROUPS.filter((g) => QUICK_GROUP_IDS.includes(g.id));
  const [allHovered, setAllHovered] = useState(false);

  return (
    <nav
      data-tutorial="categories"
      aria-label="대표 작업 분류"
      className="flex items-center justify-center flex-wrap gap-2.5"
    >
      {groups.map((group) => (
        <CategoryButton
          key={group.id}
          label={group.name}
          illustration={group.tasks[0].illustration}
          selected={selectedGroupId === group.id}
          onClick={() => onToggle(group.id)}
        />
      ))}
      <button
        type="button"
        onClick={scrollToAllFeatures}
        onMouseEnter={() => setAllHovered(true)}
        onMouseLeave={() => setAllHovered(false)}
        className="flex items-center gap-1.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] transition-colors"
        style={{
          height: 48,
          padding: "0 18px",
          background: "#fff",
          border: `1px solid ${allHovered ? "#c7d2fe" : "#e1e7ff"}`,
          boxShadow: allHovered ? "0 4px 10px rgba(26,29,41,.08)" : "0 1px 6px rgba(26,29,41,.04)",
          transition: `border-color ${motion.fast}, box-shadow ${motion.fast}`,
        }}
      >
        <span className={categoryButtonClassName} style={{ ...f, fontWeight: 500, color: typography.body.color, letterSpacing: "-0.2px" }}>
          전체 보기
        </span>
        <ChevronRight size={15} aria-hidden />
      </button>
    </nav>
  );
}

export default CategoryQuickLinks;
