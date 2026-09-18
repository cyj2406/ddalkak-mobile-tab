import { ArrowRight, Check } from "lucide-react";
import { color, f } from "@/app/styleTokens";
import type { TaskTemplate } from "@/app/data/tasks";

/** 서식 카드 — hover·focus 시에만 "이 템플릿 사용" CTA 가 뜬다. 검색 결과·작업별 템플릿 목록이 함께 쓴다.
 *  `selected`를 주면(요청 작성 도우미의 "다른 템플릿 선택" 후보 목록처럼 여러 장 중 하나를 고르는
 *  자리에서) 브랜드 테두리 + 체크 배지로 현재 선택된 카드를 표시한다 — 넘기지 않으면(기존 화면들)
 *  이전과 동일하게 아무 표시도 없다. */
export default function TemplateResultCard({ template, onOpen, ctaLabel = "이 템플릿 사용", selected }: {
  template: TaskTemplate;
  onOpen: () => void;
  ctaLabel?: string;
  selected?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative flex flex-col text-left rounded-[14px] overflow-hidden bg-white"
      style={{ border: selected ? `1.5px solid ${color.brand}` : "1px solid #e2e8f0" }}
    >
      {selected && (
        <span
          aria-hidden
          className="absolute top-2 left-2 z-[1] flex items-center justify-center rounded-full"
          style={{ width: 20, height: 20, background: color.brand, color: "#fff" }}
        >
          <Check size={12} strokeWidth={3} />
        </span>
      )}
      <div
        className="relative w-full flex items-center justify-center"
        style={{ aspectRatio: "4 / 3", background: "repeating-linear-gradient(135deg,#EEF0FF 0 8px,#E4E9FF 8px 16px)" }}
      >
        <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10.5, color: "#94a3b8", padding: "0 12px", textAlign: "center" }}>
          {template.meta}
        </span>
        <span
          className="absolute top-2 right-2 rounded-full"
          style={{ background: "rgba(10,10,10,.72)", color: "#fff", fontSize: 10, fontWeight: 600, padding: "3px 7px" }}
        >
          표지 예시
        </span>
        <span
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
          style={{ background: "rgba(10,10,10,.42)", transition: "opacity 150ms ease" }}
        >
          <span
            className="flex items-center gap-1.5 rounded-full bg-white"
            style={{ color: color.brand, padding: "9px 15px", fontSize: 12.5, fontWeight: 700, boxShadow: "0 6px 18px rgba(10,10,10,.2)" }}
          >
            {ctaLabel} <ArrowRight size={14} aria-hidden />
          </span>
        </span>
      </div>
      <div className="px-0.5 pt-2.5">
        <div className="truncate" style={{ ...f, fontWeight: 700, fontSize: 13.5, color: "#0a0a0a" }}>{template.title}</div>
        <div className="mt-1.5 flex items-center gap-1.5">
          <span style={{ ...f, fontWeight: 500, fontSize: 11.5, color: "#94a3b8" }}>{template.meta}</span>
          <span aria-hidden style={{ color: "#cbd5e1" }}>·</span>
          <span style={{ ...f, fontWeight: 700, fontSize: 11, color: color.brand }}>{template.format}</span>
        </div>
      </div>
    </button>
  );
}
