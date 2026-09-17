import { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { color, f, SUBTITLE_COLOR } from "@/app/styleTokens";
import { getTaskById, templatesForTask, type TaskTemplate } from "@/app/data/tasks";
import TemplateResultCard from "./TemplateResultCard";

/**
 * 작업별 템플릿 목록 — 홈의 작업 카드를 누르면 곧바로 여기로 온다.
 * 카드는 선택 컨트롤이 아니라 링크다: 누르면 바로 내용 작성 화면으로 이어지고,
 * 여기서의 검색은 이 작업 안에서만 찾는다(전체 템플릿을 뒤지지 않는다).
 */
export default function TaskTemplateScreen({
  taskId,
  onBack,
  onOpenTemplate,
}: {
  taskId: string;
  onBack: () => void;
  onOpenTemplate: (t: TaskTemplate) => void;
}) {
  const [query, setQuery] = useState("");
  const task = getTaskById(taskId);
  const all = templatesForTask(taskId);
  const q = query.trim().toLowerCase();
  const results = q
    ? all.filter((t) => [t.title, t.use, t.meta, t.format].join(" ").toLowerCase().includes(q))
    : all;

  if (!task) return null;

  return (
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div className="w-full mx-auto" style={{ maxWidth: "var(--home-container)", padding: "32px var(--gap-screen-x) 0" }}>
        <button type="button" onClick={onBack} className="flex items-center gap-1.5 mb-5" style={{ ...f, fontWeight: 600, fontSize: 13, color: SUBTITLE_COLOR }}>
          <ArrowLeft size={16} aria-hidden /> 만들기로 돌아가기
        </button>

        <h1 className="mb-1.5" style={{ ...f, fontWeight: 800, fontSize: 22, color: "#0a0a0a", letterSpacing: "-0.5px" }}>
          {task.label} 템플릿을 골라 주세요
        </h1>
        <p className="mb-6" style={{ ...f, fontWeight: 500, fontSize: 13.5, color: SUBTITLE_COLOR }}>
          마음에 드는 템플릿을 누르면 내용 작성으로 이어져요.
        </p>

        <div
          className="flex items-center gap-2 rounded-full mb-6"
          style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "6px 6px 6px 14px" }}
        >
          <Search size={18} color="#94a3b8" aria-hidden className="shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={`${task.label} 템플릿 검색어`}
            placeholder="템플릿 이름이나 용도로 검색해 보세요"
            className="flex-1 min-w-0 outline-none bg-transparent"
            style={{ ...f, fontWeight: 500, fontSize: 14, color: "#0a0a0a", padding: "9px 0", border: 0 }}
          />
        </div>

        <p className="mb-4" style={{ ...f, fontWeight: 500, fontSize: 12.5, color: SUBTITLE_COLOR }}>{results.length}개 템플릿</p>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 wide:grid-cols-4 gap-x-4 gap-y-6 pb-10">
            {results.map((t, i) => (
              <TemplateResultCard key={`${t.taskId}-${i}`} template={t} onOpen={() => onOpenTemplate(t)} ctaLabel="이 템플릿 사용" />
            ))}
          </div>
        ) : (
          <div className="rounded-[20px] text-center" style={{ border: "1px dashed #cbd5e1", background: "#fff", padding: "52px 24px" }}>
            <p style={{ ...f, fontWeight: 800, fontSize: 16, color: "#0a0a0a" }}>일치하는 템플릿을 찾지 못했어요</p>
            <p className="mt-2.5" style={{ ...f, fontWeight: 500, fontSize: 13.5, color: SUBTITLE_COLOR }}>
              다른 검색어로 바꿔 보세요.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-5 rounded-xl"
              style={{ ...f, fontWeight: 700, fontSize: 13.5, color: color.brand, background: "#fff", border: "1px solid #e2e8f0", padding: "11px 20px" }}
            >
              검색어 지우기
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
