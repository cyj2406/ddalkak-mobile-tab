import { f, SUBTITLE_COLOR } from "@/app/styleTokens";
import { TASK_GROUPS, type Task } from "@/app/data/tasks";

/** 분류별 카드 색 — 배경 틴트(bg)·아이콘/포인트 색(fg) 짝. 계산된 알파값이 아니라
 * 분류마다 고정된 파스텔 톤을 쓴다(이미지=보라, 문서=파랑, 발표자료=주황, …). */
export const GROUP_COLORS: Record<string, { bg: string; fg: string }> = {
  image: { bg: "#F1EEFE", fg: "#6D28D9" },
  doc: { bg: "#EEF1FF", fg: "#2B44D4" },
  deck: { bg: "#FEF3E2", fg: "#B45309" },
  data: { bg: "#E8F7EC", fg: "#15803D" },
  video: { bg: "#FDECEC", fg: "#B91C1C" },
  audio: { bg: "#EEEFF4", fg: "#4B5163" },
  web: { bg: "#E7EBF3", fg: "#3B4A66" },
};

function TaskCard({ task, groupId, onSelect }: { task: Task; groupId: string; onSelect: (taskId: string) => void }) {
  const soon = task.status === "soon";
  const Icon = task.icon;
  const { bg, fg } = GROUP_COLORS[groupId] ?? { bg: "#f1f5f9", fg: "#334155" };

  return (
    <button
      type="button"
      aria-disabled={soon}
      onClick={soon ? undefined : () => onSelect(task.id)}
      className="flex items-center gap-4 rounded-[20px] text-left w-full"
      style={{
        minHeight: 128,
        padding: "22px 20px",
        background: soon ? "#fff" : bg,
        border: soon ? "1px dashed #d8dee8" : "none",
        cursor: soon ? "default" : "pointer",
      }}
    >
      <div className="min-w-0 flex-1">
        <span className="block" style={{ ...f, fontWeight: 800, fontSize: 16, color: soon ? "#94a3b8" : "#0a0a0a", letterSpacing: "-0.3px" }}>
          {task.label}
        </span>
        <p className="mt-1" style={{ ...f, fontWeight: 500, fontSize: 13, color: soon ? "#94a3b8" : SUBTITLE_COLOR, lineHeight: 1.45 }}>
          {task.desc}
        </p>
        {soon && (
          <span
            className="inline-block mt-2.5 rounded-full"
            style={{ ...f, fontWeight: 700, fontSize: 10, color: "#94a3b8", background: "#fff", border: "1px solid #e2e8f0", padding: "2px 9px" }}
          >
            준비 중
          </span>
        )}
      </div>
      <div className="relative shrink-0" style={{ width: 56, height: 56 }}>
        {!soon && (
          <div
            aria-hidden
            className="absolute"
            style={{
              inset: 0, borderRadius: 14,
              background: "rgba(255,255,255,.6)",
              transform: "translate(-7px, 5px) rotate(-6deg)",
              boxShadow: "0 3px 8px rgba(90,70,160,.05)",
            }}
          />
        )}
        <div
          aria-hidden
          className="absolute"
          style={{
            inset: 0, borderRadius: soon ? 16 : 14,
            background: "#fff",
            border: soon ? "1px dashed #d8dee8" : "none",
            transform: soon ? "none" : "rotate(4deg)",
            boxShadow: soon ? "none" : "0 6px 16px rgba(90,70,160,.07)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={22} color={soon ? "#c2c7d2" : fg} aria-hidden />
        </div>
      </div>
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
    <section aria-label="작업 고르기" data-tutorial="categories">
      <h2 className="mb-1" style={{ ...f, fontWeight: 800, fontSize: 22, color: "#0a0a0a", letterSpacing: "-0.5px" }}>
        무엇을 만들까요?
      </h2>
      <p className="mb-5" style={{ ...f, fontWeight: 500, fontSize: 13.5, color: SUBTITLE_COLOR }}>
        작업을 고르면 어울리는 서식을 보여드려요.
      </p>
      <div className="flex flex-col gap-8">
        {TASK_GROUPS.map((group) => (
          <div key={group.id}>
            <div className="flex items-center gap-2.5 mb-2">
              <h3 style={{ ...f, fontWeight: 800, fontSize: 15, color: "#0a0a0a", letterSpacing: "-0.3px" }}>{group.name}</h3>
              <span className="flex-1 h-px" style={{ background: "#e2e8f0" }} aria-hidden />
            </div>
            <div className="grid grid-cols-2 md:max-wide:grid-cols-3 wide:grid-cols-4" style={{ gap: "var(--gap-card-y) var(--gap-card-x)" }}>
              {group.tasks.map((task) => (
                <TaskCard key={task.id} task={task} groupId={group.id} onSelect={onSelectTask} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
