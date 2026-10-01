import { useEffect, useMemo, useRef, useState } from "react";
import { Maximize2, Search } from "lucide-react";

import { color, f, radius, SUBTITLE_COLOR } from "@/app/styleTokens";
import { templateKey, type TaskTemplate } from "@/app/data/tasks";
import blank1x1 from "@/assets/home/templates/blank-start/blank-1x1.png";
import blank16x9 from "@/assets/home/templates/blank-start/blank-16x9.png";
import blank9x16 from "@/assets/home/templates/blank-start/blank-9x16.png";

/**
 * "템플릿 없이 시작" 카드 — 갤러리 첫 번째 항목. 다른 템플릿 카드와 같은 카드 컴포넌트를 쓰되
 * 크게 보기만 없다. 이미지는 선택 UI용일 뿐 요청 데이터로 전달되지 않는다(선택값은 null=자유 구성).
 * 출력 비율이 정해져 있으면(outputRatio) 그 비율의 이미지를, 아니면 1:1을 쓴다 — 세 이미지는
 * 별개 템플릿이 아니라 한 카드의 비율별 변형이다.
 */
export type BlankRatio = "1:1" | "16:9" | "9:16";
const BLANK_IMAGES: Record<BlankRatio, { cover: string; coverSize: { width: number; height: number } }> = {
  "1:1": { cover: blank1x1, coverSize: { width: 1254, height: 1254 } },
  "16:9": { cover: blank16x9, coverSize: { width: 1672, height: 941 } },
  "9:16": { cover: blank9x16, coverSize: { width: 941, height: 1672 } },
};
export function blankTemplateFor(ratio: BlankRatio = "1:1"): TaskTemplate {
  return { taskId: "__blank__", title: "템플릿 없이 시작", use: "", meta: "요청 내용에 맞춰 자유롭게 구성해요", format: "", ...BLANK_IMAGES[ratio] };
}
export const BLANK_KEY = templateKey(blankTemplateFor());
const isBlank = (t: TaskTemplate) => t.taskId === "__blank__";

const GAP = 16;
const MIN_CARD = 200;
const MAX_CARD = 240;
const MAX_COLS = 5;
/** 이 개수를 넘으면 검색창을 보여 주고, 한 번에 이만큼씩만 그린 뒤 "더 보기"로 늘린다. */
const SEARCH_THRESHOLD = 8;
const PAGE_SIZE = 20;

/** 목록 너비 → 열 수와 카드 너비. 카드 너비는 200~240px을 목표로 하고, 240을 넘지 않게 제한해
 *  카드가 적어도 왼쪽부터 놓인다. 모바일(좁은 폭)은 2열, 그보다 좁으면 1열. */
function layoutFor(width: number) {
  if (width <= 0) return { cols: 2, colW: MAX_CARD };
  let cols = Math.min(MAX_COLS, Math.floor((width + GAP) / (MIN_CARD + GAP)));
  if (cols < 2) cols = width >= 296 ? 2 : 1; // 모바일: 카드 약 140px까지 허용해 2열 유지
  const colW = Math.min(MAX_CARD, Math.floor((width - GAP * (cols - 1)) / cols));
  return { cols, colW: cols === 1 ? Math.min(width, MAX_CARD * 1.5) : colW };
}

/** 목록에 쓰는 이미지 — 별도 대표 썸네일이 있으면 그것, 없으면 cover 원본을 그대로(자르지 않고). */
function listImage(t: TaskTemplate) {
  if (t.thumb) return { src: t.thumb, size: t.thumbSize };
  if (t.cover) return { src: t.cover, size: t.coverSize };
  return null;
}

/**
 * 카드 하나 — 이미지·제목 영역 전체가 선택 버튼(aria-pressed) 하나이고, "크게 보기"는
 * 그 버튼 바깥의 형제 버튼이라(중첩·이벤트 전파 없음) 선택과 확대가 동시에 실행되지 않는다.
 * 선택 표시(테두리·체크 배지)는 크기를 바꾸지 않는다: 테두리는 항상 2px, 배지는 이미지 위 오버레이.
 */
function TemplateCard({
  template, colW, selected, onSelect, onPreview,
}: {
  template: TaskTemplate;
  colW: number;
  selected: boolean;
  onSelect: () => void;
  onPreview: (opener: HTMLElement) => void;
}) {
  const img = listImage(template);
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const showPlaceholder = !img || status === "error";
  const canPreview = !!img && status !== "error";
  const blank = isBlank(template);

  return (
    <article className="relative overflow-hidden" style={{ width: colW, background: color.surface.default, border: `2px solid ${selected ? color.border.focus : color.border.default}`, borderRadius: radius.card }}>
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={selected}
        className="block w-full p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#334155]"
        style={{ border: 0, background: "transparent", cursor: "pointer" }}
      >
        {/* 선택 표시는 카드 테두리(항상 2px, 색만 변경)뿐이다 — 배지·체크·오버레이 없음. 키보드 포커스 링은 선택색(브랜드 블루)과 구분되는 진한 슬레이트. */}
        {/* 썸네일 영역 — 모든 카드가 4:3 고정. 이미지는 contain이라 비율 그대로 전체가 보인다(자르거나 늘리지 않음). */}
        <span className="block relative overflow-hidden" style={{ aspectRatio: "4 / 3", background: color.surface.subtle }}>
          {showPlaceholder ? (
            <span className="absolute inset-0 flex items-center justify-center text-center px-2" style={{ ...f, fontWeight: 500, fontSize: 12, color: "#94a3b8" }}>
              {img ? "이미지를 불러오지 못했어요" : "미리보기 준비 중"}
            </span>
          ) : (
            <img
              src={img.src}
              alt=""
              width={img.size?.width}
              height={img.size?.height}
              loading="lazy"
              draggable={false}
              onLoad={() => setStatus("loaded")}
              onError={() => setStatus("error")}
              className="absolute inset-0 w-full h-full"
              style={{ objectFit: "contain", opacity: status === "loaded" ? 1 : 0.4, transition: "opacity 160ms ease" }}
            />
          )}
        </span>
        {/* 제목 영역 — 최대 2줄, 높이 고정(1줄이어도 같은 높이). */}
        <span className="block" style={{ padding: "9px 11px", height: 56 }}>
          <span style={{ ...f, fontWeight: 600, fontSize: 13.5, lineHeight: "19px", color: color.text.primary, letterSpacing: "-0.2px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
            {template.title}
          </span>
        </span>
      </button>

      {/* 오른쪽 위에 항상 보이는 작은 버튼(이미지 위 오버레이라 카드 크기에 영향 없음). 빈 템플릿에는 없다. */}
      {!blank && (
        <button
          type="button"
          disabled={!canPreview}
          onClick={(e) => onPreview(e.currentTarget)}
          aria-label={`${template.title} 크게 보기`}
          title={canPreview ? "크게 보기" : "미리볼 이미지가 없어요"}
          className="absolute inline-flex items-center gap-1 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#4f7bff] disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ top: 8, right: 8, height: 26, padding: "0 9px 0 7px", background: "rgba(255,255,255,0.92)", border: `1px solid ${color.border.default}`, color: "#334155", ...f, fontWeight: 600, fontSize: 12, cursor: "pointer" }}
        >
          <Maximize2 size={12} aria-hidden /> 크게 보기
        </button>
      )}
    </article>
  );
}

/**
 * 선택창 본문 갤러리 — 너비·썸네일(4:3)·제목 영역 높이가 모두 같은 카드 그리드(행 단위, DOM 순서 = 시각 순서).
 * 썸네일은 4:3 상자 안에 object-fit:contain으로 넣어 원본 비율 그대로 전체가 보인다(자르거나 늘리지 않는다).
 * 선택값은 상위(선택창)가 들고 있다.
 * 템플릿이 SEARCH_THRESHOLD개를 넘을 때만 검색을, PAGE_SIZE개를 넘을 때만 "더 보기"를 보여 준다.
 */
export function TemplateGrid({
  templates, selectedKey, onSelect, onPreview, blank,
}: {
  templates: TaskTemplate[];
  /** 첫 카드로 둘 "템플릿 없이 시작"(검색·더 보기와 무관하게 항상 맨 앞) */
  blank?: TaskTemplate;
  selectedKey: string | null | undefined;
  onSelect: (key: string) => void;
  onPreview: (key: string, opener: HTMLElement) => void;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [query, setQuery] = useState("");
  const [shown, setShown] = useState(PAGE_SIZE);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [templates.length]);

  const showSearch = templates.length > SEARCH_THRESHOLD;
  const q = query.trim().toLowerCase();
  const filtered = useMemo(() => (q ? templates.filter((t) => t.title.toLowerCase().includes(q)) : templates), [templates, q]);
  const visible = useMemo(() => [...(blank ? [blank] : []), ...filtered.slice(0, shown)], [blank, filtered, shown]);

  const { cols, colW } = layoutFor(width);

  return (
    <div>
      {showSearch && (
        <label className="mb-4 flex items-center gap-2 rounded-xl" style={{ height: 40, padding: "0 12px", border: `1px solid ${color.border.default}`, background: color.surface.default, maxWidth: 360 }}>
          <Search size={15} color="#94a3b8" aria-hidden />
          <input
            value={query}
            onChange={(e) => { setQuery(e.target.value); setShown(PAGE_SIZE); }}
            placeholder="템플릿 이름 검색"
            aria-label="템플릿 이름 검색"
            className="flex-1 min-w-0 outline-none bg-transparent"
            style={{ ...f, fontWeight: 500, fontSize: 13.5, color: color.text.primary }}
          />
        </label>
      )}
      <div ref={wrapRef}>
        {templates.length === 0 ? (
          <p style={{ ...f, fontWeight: 500, fontSize: 13, color: SUBTITLE_COLOR, lineHeight: 1.6 }}>이 작업에 맞는 템플릿이 아직 없어요. 템플릿 없이 진행할 수 있어요.</p>
        ) : filtered.length === 0 ? (
          <p role="status" style={{ ...f, fontWeight: 500, fontSize: 13, color: SUBTITLE_COLOR }}>“{query.trim()}”에 해당하는 템플릿이 없어요.</p>
        ) : (
          <>
            <div className="grid" style={{ gap: GAP, gridTemplateColumns: `repeat(${cols}, ${colW}px)` }}>
              {visible.map((t) => {
                const key = templateKey(t);
                return (
                  <TemplateCard key={key} template={t} colW={colW} selected={key === selectedKey} onSelect={() => onSelect(key)} onPreview={(opener) => onPreview(key, opener)} />
                );
              })}
            </div>
            {filtered.length > shown && (
              <button
                type="button"
                onClick={() => setShown((n) => n + PAGE_SIZE)}
                className="mt-4 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-[#4f7bff]"
                style={{ ...f, fontWeight: 600, fontSize: 13.5, height: 40, padding: "0 18px", background: color.surface.default, border: `1px solid ${color.border.default}`, color: "#334155", cursor: "pointer" }}
              >
                더 보기 ({filtered.length - shown}개 남음)
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
