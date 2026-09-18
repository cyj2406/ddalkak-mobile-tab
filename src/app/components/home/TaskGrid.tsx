import { useState } from "react";
import { Check } from "lucide-react";
import { color, f, homeSectionTitleClassName, homeSectionTitleStyle, SUBTITLE_COLOR, taskGroupTitleClassName, taskGroupTitleStyle } from "@/app/styleTokens";
import { TASK_GROUPS, visibleTasksOf, type Task } from "@/app/data/tasks";

/** 분류별 카드 색 — 배경 틴트(bg)·아이콘/포인트 색(fg) 짝. 계산된 알파값이 아니라
 * 분류마다 고정된 파스텔 톤을 쓴다(이미지=보라, 문서=파랑, 발표자료=주황, …). */
export const GROUP_COLORS: Record<string, { bg: string; fg: string }> = {
  image: { bg: "#F1EEFE", fg: "#6D28D9" },
  doc: { bg: "#EEF1FF", fg: "#2B44D4" },
  deck: { bg: "#FEF3E2", fg: "#B45309" },
  data: { bg: "#E8F7EC", fg: "#15803D" },
  video: { bg: "#FDECEC", fg: "#B91C1C" },
  audio: { bg: "#EFE9FB", fg: "#5B21B6" },
  web: { bg: "#E4F4F1", fg: "#0F766E" },
};

/**
 * 카테고리 선택 시 펼쳐지는 세부 기능 줄(CategoryFeatureStrip)과 "요청 작성 도움받기"
 * 1단계 작업 선택 화면(RequestHelpScreen)도 이 카드를 그대로 쓴다 — "기존 일러스트
 * 카드 재사용" 요구를 새 컴포넌트를 또 만들지 않고 지킨다. 두 화면 모두 스타일·이미지
 * 매핑을 여기 한 곳에서만 가져가므로, 홈 카드를 고치면 두 화면이 함께 바뀐다.
 *
 * variant "grid"(기본, 전체 기능) = 이름+설명, variant "strip"(세부 기능 줄) = 이름만 ·
 * 일러스트가 더 크게, variant "compact"("요청 작성 도움받기" 1단계 작업 선택) = 이름만 ·
 * 훨씬 낮은 높이 — 참고 디자인의 여러 카드 형태를 값만 다르게 재사용한 것과 같다.
 *
 * `selected`를 넘기면(undefined가 아니면) "선택 카드" 모드가 된다 — 클릭이 페이지 이동이
 * 아니라 라디오처럼 하나만 고르는 동작이 되고, 브랜드 테두리·체크 배지·hover/focus 구분이
 * 추가된다. 홈에서는 이 prop을 넘기지 않아 기존 동작·모양이 그대로다. 테두리는 선택 여부와
 * 무관하게 항상 같은 굵기(1.5px)를 그려 선택 전후 카드 크기가 흔들리지 않게 한다.
 */
export function TaskCard({
  task,
  groupId,
  onSelect,
  variant = "grid",
  selected,
  tabIndex,
  onFocus,
  onKeyDown,
  id,
}: {
  task: Task;
  groupId: string;
  onSelect: (taskId: string) => void;
  variant?: "grid" | "strip" | "compact";
  selected?: boolean;
  tabIndex?: number;
  onFocus?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  id?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const soon = task.status === "soon";
  const { bg } = GROUP_COLORS[groupId] ?? { bg: "#f1f5f9", fg: "#334155" };
  const scale = task.illustrationScale ?? 1;
  const strip = variant === "strip";
  const compact = variant === "compact";
  const hideDesc = strip || compact;
  const selectable = selected !== undefined;

  const baseBorderColor = soon ? "#dde1ea" : strip ? "transparent" : "rgba(26,29,41,.05)";
  const borderColor = selected ? color.brand : hovered && selectable && !soon ? "#c7cee6" : baseBorderColor;
  // 선택 가능 모드에서만 테두리를 항상 1.5px로 고정한다(선택 전후 카드 크기가 흔들리지
  // 않도록). 홈(선택 불가) 카드는 기존 굵기·스타일을 그대로 둔다.
  const border = selectable
    ? `1.5px solid ${borderColor}`
    : soon ? "1px dashed #dde1ea" : strip ? "none" : "1px solid rgba(26,29,41,.05)";
  // grid(전체 기능)·활성 카드는 boxShadow를 var()로 내려 hover 시 CSS(theme.css
  // .task-illustration-hover)가 값을 채울 여지를 남긴다 — prefers-reduced-motion에서
  // 일러스트 흔들림 대신 쓰는 그림자 신호(인라인이 클래스보다 항상 우선하므로, 인라인
  // 자체를 var() 참조로 만들어야 CSS 쪽에서 채울 수 있다). 평소엔 폴백값 none 그대로다.
  const gridActive = variant === "grid" && !soon;
  const boxShadow = !selectable
    ? gridActive ? "var(--task-hover-shadow, none)" : "none"
    : selected
      ? "0 4px 14px rgba(79,123,255,.18)"
      : hovered && !soon
        ? "0 3px 10px rgba(26,29,41,.08)"
        : "none";
  // strip(세부 기능 줄)·compact(1단계 작업 선택)는 기존 그대로 유지한다 — 이번 정리는
  // grid(전체 기능)에만 적용한다.
  // grid(전체 기능, 2026-09-18 재정리): 예전엔 박스를 카드보다 크게 두고 right/bottom을
  // 음수로 내보내 카드 밖으로 "자연스럽게 걸쳐 잘리는" 느낌을 냈는데, 이미지마다 투명
  // 여백 비율이 달라 같은 값이어도 실제로 보이는 그림 크기·잘림량이 들쭉날쭉했다(엑셀
  // 배지가 잘리는 문제도 여기서 왔다). 지금은 task.illustrationArt의 w/right/bottom이
  // 전부 "실제 그림 크기(투명 여백 제외)" 기준으로 미리 계산된 값이라(Task 인터페이스
  // 주석 참고) 그대로 꽂아 쓰기만 하면 모든 카드의 그림이 같은 여백 규칙으로 카드 오른쪽
  // 아래에 자리잡는다 — bottom을 w에서 역산하지 않는다. 오버라이드가 없는(향후 새 작업)
  // 경우에만 안전한 기본값을 쓴다.
  const gridArtOverride = !strip && !compact ? task.illustrationArt : undefined;
  const art = compact
    ? { w: 76, h: 68, right: -8, bottom: -6, zoom: 1 }
    // bottom = h - 카드 minHeight → 이미지 위쪽은 카드 안에 꽉 차고(위쪽 잘림 없음),
    // 아래쪽·오른쪽만 카드 경계에서 자연스럽게 잘리게 한다.
    : strip
      ? { w: 152, h: 152, right: -18, bottom: -(152 - 136), zoom: 1 }
      : gridArtOverride
        ? { w: gridArtOverride.w, h: gridArtOverride.w, right: gridArtOverride.right, bottom: gridArtOverride.bottom, zoom: 1 }
        : { w: 92, h: 92, right: 16, bottom: 16, zoom: 1 };

  return (
    <button
      type="button"
      id={id}
      role={selectable ? "radio" : undefined}
      aria-checked={selectable ? selected : undefined}
      aria-disabled={soon}
      tabIndex={tabIndex}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={soon ? undefined : () => onSelect(task.id)}
      className={`relative flex items-start text-left w-full overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] transition-shadow${gridActive ? " task-illustration-hover" : ""}`}
      style={{
        minHeight: compact ? 124 : strip ? 136 : 140,
        padding: compact ? "16px 18px" : strip ? "20px 18px" : "20px 22px",
        borderRadius: compact ? 16 : strip ? 18 : 20,
        background: soon ? "#FAFBFD" : bg,
        border,
        boxShadow,
        cursor: soon ? "default" : "pointer",
      }}
    >
      <span
        className="relative z-[1] min-w-0 block"
        style={{ maxWidth: compact ? undefined : "56%" }}
      >
        {/* 이름 — "전체 기능"(grid)만 2026-09-18에 16px/500/line-height 24px로 낮췄다
            (기존 15px/700은 다른 텍스트보다 과하게 굵어 보였다). strip("세부 기능 줄")·
            compact(요청 작성 도우미 1단계, 이번 범위 밖)는 기존 값(16px/800, 14.5px/800)
            그대로 둔다. */}
        <span
          className="block"
          style={{
            ...f,
            fontWeight: strip || compact ? 800 : 500,
            fontSize: compact ? 14.5 : 16,
            color: soon ? "#6b7280" : "#0a0a0a",
            letterSpacing: "-0.2px",
            lineHeight: strip || compact ? "1.4" : "24px",
          }}
        >
          {task.label}
        </span>
        {/* 설명 — grid에서만 렌더링된다(hideDesc는 strip·compact에서만 true). 2026-09-18:
            12.5px/500 → 14px/400/line-height 20px, 색은 기존 그대로 secondary
            (SUBTITLE_COLOR)다. */}
        {!hideDesc && (
          <p className="mt-1.5" style={{ ...f, fontWeight: 400, fontSize: 14, color: soon ? "#8A90A2" : SUBTITLE_COLOR, lineHeight: "20px" }}>
            {task.desc}
          </p>
        )}
        {soon && (
          <span
            className="inline-block rounded-full"
            style={{ ...f, fontWeight: 700, fontSize: compact ? 9.5 : 10.5, color: "#8A90A2", background: "#fff", border: "1px solid #e1e5ee", padding: compact ? "2px 7px" : "3px 9px", marginTop: hideDesc ? 6 : 10 }}
          >
            준비 중
          </span>
        )}
      </span>
      <span
        aria-hidden
        className="absolute pointer-events-none"
        style={{ right: art.right, bottom: art.bottom, width: art.w, height: art.h, opacity: soon ? 0.72 : 1 }}
      >
        {/* task-illustration-wobble(theme.css) — 호버 시 흔들리는 대상은 이 래퍼뿐이다.
            원본 <img>의 scale 보정(위치·크기)은 그대로 두고, 회전은 별도 요소의 transform
            으로 얹어 두 보정이 서로 지우지 않는다. */}
        <span className="task-illustration-wobble">
          <img
            src={task.illustration}
            alt=""
            draggable={false}
            className="block w-full h-full"
            style={{ objectFit: "contain", transform: `scale(${scale * art.zoom})` }}
          />
        </span>
      </span>
      {selected && (
        <span
          aria-hidden
          className="absolute flex items-center justify-center rounded-full z-[2]"
          style={{ top: compact ? 10 : 12, right: compact ? 10 : 12, width: compact ? 18 : 22, height: compact ? 18 : 22, background: color.brand, color: "#fff" }}
        >
          <Check size={compact ? 10 : 13} strokeWidth={3} />
        </span>
      )}
    </button>
  );
}

/**
 * 무엇을 만들까요? — 7개 분류 × 21개 작업 카드.
 *
 * 분류 이름은 카드 묶음 위에 붙고, 카드는 auto-fill 그리드로 흐른다(1200px 4열 ·
 * 768~1199px 3열 · 그 아래 2열 — 템플릿 카드 그리드와 같은 기준).
 * 작업 카드는 선택 컨트롤이 아니라 링크다 — 누르면 곧바로 해당 작업의 템플릿 목록으로 이동한다.
 * 색은 분류 구분을 거들 뿐이다: 분류 이름과 설명 문구가 같은 정보를 글자로도 전달한다.
 */
export default function TaskGrid({ onSelectTask }: { onSelectTask: (taskId: string) => void }) {
  return (
    <section id="all-features" aria-label="전체 기능" className="mt-10 wide:mt-16">
      <h2 className={`mb-6 min-w-0 ${homeSectionTitleClassName}`} style={{ ...homeSectionTitleStyle, wordBreak: "keep-all" }}>
        전체 기능
      </h2>
      <div className="flex flex-col gap-8">
        {TASK_GROUPS.map((group) => (
          <div key={group.id}>
            <div className="flex items-center gap-2.5 mb-4">
              <h3 className={taskGroupTitleClassName} style={taskGroupTitleStyle}>{group.name}</h3>
              <span className="flex-1 h-px" style={{ background: "#e2e8f0" }} aria-hidden />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:max-wide:grid-cols-3! wide:grid-cols-4!" style={{ gap: "var(--gap-card-y) var(--gap-card-x)" }}>
              {visibleTasksOf(group).map((task) => (
                <TaskCard key={task.id} task={task} groupId={group.id} onSelect={onSelectTask} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
