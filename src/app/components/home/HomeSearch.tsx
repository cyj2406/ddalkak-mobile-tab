import { useState } from "react";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { color, f, SUBTITLE_COLOR } from "@/app/styleTokens";

/**
 * 서식 검색창 + 요청 작성 도움받기 배너.
 *
 * 검색은 한 줄 입력이다 — 여러 줄 textarea 나 파일 첨부·전송 버튼은 없다.
 * Enter 또는 검색 버튼을 누르면 홈에 결과를 깔지 않고 onSearch 로 상위에 알려
 * 별도 검색 결과 화면을 연다.
 */
export default function HomeSearch({ onSearch, onHelp }: { onSearch: (query: string) => void; onHelp: () => void }) {
  const [query, setQuery] = useState("");

  const submit = () => {
    const q = query.trim();
    if (q) onSearch(q);
  };

  return (
    <section aria-label="서식 검색" className="flex flex-col" style={{ gap: "var(--home-cluster-gap)" }}>
      <div
        className="flex items-center gap-2 rounded-full"
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
        <button
          type="button"
          onClick={submit}
          className="rounded-full shrink-0 bg-[#4f7bff] hover:bg-[#3d68e8] transition-colors"
          style={{ ...f, fontWeight: 700, fontSize: 13.5, color: "#fff", padding: "10px 20px", border: 0 }}
        >
          검색
        </button>
      </div>

      <button
        type="button"
        onClick={onHelp}
        className="flex items-center gap-4 w-full rounded-[18px] text-left"
        style={{ background: color.surface.accent, border: "1px solid #e2e8f0", padding: "18px 22px" }}
      >
        <span
          className="rounded-2xl flex items-center justify-center shrink-0"
          style={{ width: 56, height: 56, background: "#fff", color: color.brand, boxShadow: "0 2px 8px rgba(26,29,41,.06)" }}
          aria-hidden
        >
          <Sparkles size={24} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block" style={{ ...f, fontWeight: 800, fontSize: 16, color: "#0a0a0a", letterSpacing: "-0.3px" }}>
            무엇부터 쓸지 막막하다면 딸깍이에게 맡기세요
          </span>
          <span className="block mt-1.5" style={{ ...f, fontWeight: 500, fontSize: 13.5, color: SUBTITLE_COLOR }}>
            내용만 알려 주시면 서식 추천부터 초안까지 만들어 드려요
          </span>
        </span>
        <span style={{ color: color.brand }} aria-hidden className="shrink-0">
          <ArrowRight size={22} />
        </span>
      </button>
    </section>
  );
}
