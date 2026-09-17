import { useState } from "react";
import { ArrowLeft, Search } from "lucide-react";
import { color, f, SUBTITLE_COLOR } from "@/app/styleTokens";
import { searchTemplates, type TaskTemplate } from "@/app/data/tasks";
import TemplateResultCard from "./TemplateResultCard";

/**
 * 검색 결과 화면 — 홈 검색창에서 Enter/검색 버튼으로 넘어온다.
 * 검색어는 항상 텍스트로만 되비춘다(JSX 자식으로 렌더 — dangerouslySetInnerHTML 사용 금지).
 */
export default function SearchResultsScreen({
  initialQuery,
  onBack,
  onOpenTemplate,
}: {
  initialQuery: string;
  onBack: () => void;
  onOpenTemplate: (t: TaskTemplate) => void;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [submitted, setSubmitted] = useState(initialQuery);
  const results = searchTemplates(submitted);

  const submit = () => setSubmitted(query.trim());

  return (
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div className="w-full mx-auto" style={{ maxWidth: "var(--home-container)", padding: "32px var(--gap-screen-x) 0" }}>
        <button type="button" onClick={onBack} className="flex items-center gap-1.5 mb-5" style={{ ...f, fontWeight: 600, fontSize: 13, color: SUBTITLE_COLOR }}>
          <ArrowLeft size={16} aria-hidden /> 홈으로 돌아가기
        </button>

        <div
          className="flex items-center gap-2 rounded-full mb-6"
          style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "6px 6px 6px 14px" }}
        >
          <Search size={18} color="#94a3b8" aria-hidden className="shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
            aria-label="서식 검색어"
            placeholder="용도와 형식으로 찾아보세요 (예: 협조 요청 공문, 카드뉴스 5장, PPTX)"
            className="flex-1 min-w-0 outline-none bg-transparent"
            style={{ ...f, fontWeight: 500, fontSize: 14, color: "#0a0a0a", padding: "9px 0", border: 0 }}
          />
          <button type="button" onClick={submit} className="rounded-full shrink-0 bg-[#4f7bff] hover:bg-[#3d68e8] transition-colors" style={{ ...f, fontWeight: 700, fontSize: 13.5, color: "#fff", padding: "10px 20px", border: 0 }}>
            검색
          </button>
        </div>

        <div className="flex items-center flex-wrap gap-2.5 mb-5">
          <h1 style={{ ...f, fontWeight: 800, fontSize: 22, color: "#0a0a0a" }}>
            &lsquo;{submitted}&rsquo; 검색 결과
          </h1>
          <span style={{ ...f, fontWeight: 500, fontSize: 12.5, color: SUBTITLE_COLOR }}>{results.length}개 서식</span>
          <div className="flex-1" />
          <button
            type="button"
            onClick={onBack}
            className="rounded-full"
            style={{ ...f, fontWeight: 600, fontSize: 12, color: SUBTITLE_COLOR, background: "#fff", border: "1px solid #e2e8f0", padding: "7px 13px" }}
          >
            검색 지우기
          </button>
        </div>

        {results.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 wide:grid-cols-4 gap-x-4 gap-y-6 pb-10">
            {results.map((t, i) => (
              <TemplateResultCard key={`${t.taskId}-${i}`} template={t} onOpen={() => onOpenTemplate(t)} ctaLabel="이 서식 사용" />
            ))}
          </div>
        ) : (
          <div className="rounded-[20px] text-center" style={{ border: "1px dashed #cbd5e1", background: "#fff", padding: "52px 24px" }}>
            <p style={{ ...f, fontWeight: 800, fontSize: 16, color: "#0a0a0a" }}>일치하는 서식을 찾지 못했어요</p>
            <p className="mt-2.5" style={{ ...f, fontWeight: 500, fontSize: 13.5, color: SUBTITLE_COLOR }}>
              다른 검색어로 찾아보거나 홈으로 돌아가 다른 작업을 골라 주세요.
            </p>
            <button
              type="button"
              onClick={() => { setQuery(""); setSubmitted(""); }}
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
