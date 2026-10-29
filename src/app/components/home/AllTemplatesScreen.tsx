import { ArrowLeft } from "lucide-react";
import { color, f, homeSectionTitleClassName, homeSectionTitleStyle, SUBTITLE_COLOR } from "@/app/styleTokens";
import { getTaskGroupOf, TASK_GROUPS, TASK_TEMPLATES, type TaskTemplate } from "@/app/data/tasks";
import TemplateResultCard from "./TemplateResultCard";

/** 분류(TASK_GROUPS) 순서대로 템플릿을 묶는다. 어느 분류에도 없는 작업의 템플릿은 맨 끝 "기타"로 모은다. */
function groupTemplates(): { id: string; name: string; templates: TaskTemplate[] }[] {
  const groups = TASK_GROUPS.map((g) => ({ id: g.id, name: g.name, templates: [] as TaskTemplate[] }));
  const etc = { id: "etc", name: "기타", templates: [] as TaskTemplate[] };
  for (const t of TASK_TEMPLATES) {
    const gid = getTaskGroupOf(t.taskId)?.id;
    (groups.find((g) => g.id === gid) ?? etc).templates.push(t);
  }
  return [...groups, etc].filter((g) => g.templates.length > 0);
}

/**
 * 전체 템플릿 화면(2026-10-29) — 홈 "인기 템플릿으로 시작하기"의 "전체 보기"로 들어온다.
 * 검색 결과 화면과 같은 폭·카드(TemplateResultCard)·그리드를 쓰고, 분류별로 나눠 보여준다.
 */
export default function AllTemplatesScreen({ onBack, onOpenTemplate }: {
  onBack: () => void;
  onOpenTemplate: (t: TaskTemplate) => void;
}) {
  const groups = groupTemplates();

  return (
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div className="w-full mx-auto" style={{ maxWidth: "var(--home-container)", padding: "32px var(--gap-screen-x) 40px" }}>
        <button type="button" onClick={onBack} className="flex items-center gap-1.5 mb-5" style={{ ...f, fontWeight: 600, fontSize: 13, color: SUBTITLE_COLOR }}>
          <ArrowLeft size={16} aria-hidden /> 홈으로 돌아가기
        </button>

        <div className="flex items-center flex-wrap gap-2.5 mb-8">
          <h1 style={{ ...f, fontWeight: 800, fontSize: 22, color: "#0a0a0a" }}>전체 템플릿</h1>
          <span style={{ ...f, fontWeight: 500, fontSize: 12.5, color: SUBTITLE_COLOR }}>{TASK_TEMPLATES.length}개 템플릿</span>
        </div>

        <div className="flex flex-col" style={{ gap: 40 }}>
          {groups.map((g) => (
            <section key={g.id} aria-labelledby={`all-templates-${g.id}`}>
              <h2 id={`all-templates-${g.id}`} className={`${homeSectionTitleClassName} mb-4`} style={homeSectionTitleStyle}>
                {g.name}
                <span className="ml-2" style={{ ...f, fontWeight: 500, fontSize: 13, letterSpacing: 0, color: color.text.secondary }}>{g.templates.length}</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 wide:grid-cols-4 gap-x-4 gap-y-6">
                {g.templates.map((t, i) => (
                  <TemplateResultCard key={`${t.taskId}-${i}`} template={t} onOpen={() => onOpenTemplate(t)} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
