import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Minus, Plus, X } from "lucide-react";

import { color, f, shadow, SUBTITLE_COLOR } from "@/app/styleTokens";
import type { TaskTemplate } from "@/app/data/tasks";
import { Button } from "@/app/components/common/Button";

const ZOOM_STEPS = [1, 1.5, 2, 3, 4];
/** 세로로 이만큼보다 길면(높이/너비) "화면에 맞춤"을 가로 기준으로 잡고 세로 스크롤로 본다. */
const TALL_RATIO = 2;

export const FOCUSABLE = 'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/** 열린 레이어 안에서 Tab 포커스를 순환시킨다(첫↔마지막). */
export function trapTab(e: KeyboardEvent, root: HTMLElement | null) {
  if (e.key !== "Tab" || !root) return;
  const items = Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((el) => el.offsetParent !== null);
  if (items.length === 0) return;
  const first = items[0];
  const last = items[items.length - 1];
  const active = document.activeElement;
  if (!root.contains(active)) { e.preventDefault(); first.focus(); }
  else if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
}

const iconBtn = "inline-flex items-center justify-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#4f7bff] disabled:opacity-40 disabled:cursor-not-allowed";
const iconBtnStyle = { width: 36, height: 36, background: color.surface.default, border: `1px solid ${color.border.default}`, color: "#334155", cursor: "pointer" } as const;

/**
 * 원본 이미지 뷰어 — 헤더(제목+뒤로/닫기) · 확대·축소·화면에 맞추기 · (여러 페이지일 때만) 페이지 이동 ·
 * 스크롤 영역 · 하단 선택 영역. 독립 모달(TemplatePreviewDialog)과 선택창 안의 상세 화면(embedded)이 같이 쓴다.
 * `onSelect`가 없으면 하단 선택 영역을 그리지 않는다.
 */
export function TemplateViewer({
  template, selected, onSelect, onBack, backLabel, closeRef,
}: {
  template: TaskTemplate;
  selected?: boolean;
  onSelect?: () => void;
  /** 모달이면 닫기(X), 선택창 안이면 "목록으로" */
  onBack: () => void;
  backLabel?: string;
  closeRef?: React.RefObject<HTMLButtonElement | null>;
}) {
  const pages = template.pages && template.pages.length > 0 ? template.pages : template.cover ? [template.cover] : [];
  const multi = pages.length > 1;
  const [page, setPage] = useState(0);
  const [zoomIdx, setZoomIdx] = useState(0);
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(
    template.coverSize ? { w: template.coverSize.width, h: template.coverSize.height } : null,
  );
  const [failed, setFailed] = useState(false);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const scrollerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => setBox({ w: el.clientWidth, h: el.clientHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => { setZoomIdx(0); setFailed(false); scrollerRef.current?.scrollTo({ top: 0, left: 0 }); }, [page]);

  useEffect(() => {
    if (!multi) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setPage((p) => Math.max(0, p - 1));
      if (e.key === "ArrowRight") setPage((p) => Math.min(pages.length - 1, p + 1));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [multi, pages.length]);

  const PAD = 16;
  const availW = Math.max(0, box.w - PAD * 2);
  const availH = Math.max(0, box.h - PAD * 2);
  let fitW = availW;
  if (natural) {
    const ratio = natural.h / natural.w;
    fitW = ratio > TALL_RATIO ? availW : Math.min(availW, availH / ratio);
  }
  const zoom = ZOOM_STEPS[zoomIdx];
  const imgW = Math.round(fitW * zoom);
  const embedded = !!backLabel;

  return (
    <>
      <div className="flex items-center gap-3 shrink-0" style={{ padding: "12px 16px", borderBottom: `1px solid ${color.border.default}` }}>
        {embedded && (
          <button ref={closeRef} type="button" onClick={onBack} className="inline-flex items-center gap-1.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#4f7bff]" style={{ ...f, fontWeight: 600, fontSize: 13.5, height: 36, padding: "0 12px 0 8px", background: color.surface.default, border: `1px solid ${color.border.default}`, color: "#334155", cursor: "pointer" }}>
            <ArrowLeft size={16} aria-hidden /> {backLabel}
          </button>
        )}
        <p className="flex-1 min-w-0 truncate" style={{ ...f, fontWeight: 700, fontSize: 16, color: color.text.primary }}>{template.title}</p>
        {!embedded && (
          <button ref={closeRef} type="button" onClick={onBack} aria-label="닫기" className={iconBtn} style={iconBtnStyle}>
            <X size={18} aria-hidden />
          </button>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0 flex-wrap" style={{ padding: "8px 16px", borderBottom: `1px solid ${color.border.default}`, background: color.surface.subtle }}>
        <button type="button" onClick={() => setZoomIdx((i) => Math.max(0, i - 1))} disabled={zoomIdx === 0} aria-label="축소" className={iconBtn} style={iconBtnStyle}><Minus size={16} aria-hidden /></button>
        <span aria-live="polite" style={{ ...f, fontWeight: 600, fontSize: 13, color: SUBTITLE_COLOR, minWidth: 44, textAlign: "center" }}>{Math.round(zoom * 100)}%</span>
        <button type="button" onClick={() => setZoomIdx((i) => Math.min(ZOOM_STEPS.length - 1, i + 1))} disabled={zoomIdx === ZOOM_STEPS.length - 1} aria-label="확대" className={iconBtn} style={iconBtnStyle}><Plus size={16} aria-hidden /></button>
        <button
          type="button"
          onClick={() => { setZoomIdx(0); scrollerRef.current?.scrollTo({ top: 0, left: 0 }); }}
          disabled={zoomIdx === 0}
          className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#4f7bff] disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ ...f, fontWeight: 600, fontSize: 13, height: 36, padding: "0 12px", background: color.surface.default, border: `1px solid ${color.border.default}`, color: "#334155", cursor: "pointer" }}
        >
          화면에 맞추기
        </button>
        {multi && (
          <div className="flex items-center gap-2 ml-auto">
            <button type="button" onClick={() => setPage((p) => p - 1)} disabled={page === 0} aria-label="이전 페이지" className={iconBtn} style={iconBtnStyle}><ChevronLeft size={16} aria-hidden /></button>
            <span aria-live="polite" style={{ ...f, fontWeight: 600, fontSize: 13, color: SUBTITLE_COLOR }}>{page + 1} / {pages.length}</span>
            <button type="button" onClick={() => setPage((p) => p + 1)} disabled={page === pages.length - 1} aria-label="다음 페이지" className={iconBtn} style={iconBtnStyle}><ChevronRight size={16} aria-hidden /></button>
          </div>
        )}
      </div>

      <div ref={scrollerRef} className="flex-1 min-h-0 overflow-auto" style={{ background: color.surface.subtle, overscrollBehavior: "contain", padding: PAD }}>
        {pages[page] && !failed ? (
          <img
            key={pages[page]}
            src={pages[page]}
            alt={`${template.title}${multi ? ` ${page + 1}페이지` : ""}`}
            draggable={false}
            onLoad={(e) => setNatural({ w: e.currentTarget.naturalWidth, h: e.currentTarget.naturalHeight })}
            onError={() => setFailed(true)}
            style={{ display: "block", margin: "0 auto", width: imgW || undefined, maxWidth: "none", height: "auto", borderRadius: 8 }}
          />
        ) : (
          <div className="h-full flex items-center justify-center" style={{ ...f, fontWeight: 500, fontSize: 13, color: SUBTITLE_COLOR }}>
            {failed ? "이미지를 불러오지 못했어요." : "미리보기 준비 중"}
          </div>
        )}
      </div>

      {onSelect && (
        <div className="flex items-center gap-3 shrink-0" style={{ padding: "12px 16px", borderTop: `1px solid ${color.border.default}` }}>
          <span className="hidden sm:block flex-1 min-w-0 truncate" style={{ ...f, fontWeight: 500, fontSize: 12.5, color: SUBTITLE_COLOR }}>{template.meta}</span>
          <div className="w-full sm:w-auto sm:min-w-[180px]">
            {selected ? (
              <Button variant="secondary" fullWidth disabled><Check size={16} strokeWidth={3} aria-hidden /> 선택됨</Button>
            ) : (
              <Button variant="primary" fullWidth onClick={onSelect}>이 템플릿 선택</Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

/**
 * 독립 크게 보기 모달 — 왼쪽 "사용할 템플릿" 카드의 "크게 보기"가 연다. 데스크톱은 큰 모달,
 * 모바일(<640px)은 전체 화면. 열고 닫는 것은 선택을 바꾸지 않는다. 닫으면 opener로 포커스 복귀.
 */
export function TemplatePreviewDialog({ template, onClose, opener }: { template: TaskTemplate; onClose: () => void; opener: HTMLElement | null }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    onClose();
    requestAnimationFrame(() => opener?.focus({ preventScroll: true }));
  }, [onClose, opener]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.stopPropagation(); close(); return; }
      trapTab(e, dialogRef.current);
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [close]);

  return createPortal(
    <div onClick={close} className="fixed inset-0 z-[80] flex items-center justify-center sm:p-6" style={{ background: "rgba(15,23,42,0.45)" }}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${template.title} 크게 보기`}
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full sm:max-w-[1080px] sm:h-[90vh] sm:rounded-[20px] flex flex-col overflow-hidden"
        style={{ background: color.surface.default, boxShadow: shadow.modal }}
      >
        <TemplateViewer template={template} onBack={close} closeRef={closeRef} />
      </div>
    </div>,
    document.body,
  );
}
