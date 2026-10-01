import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { color, f, shadow, SUBTITLE_COLOR } from "@/app/styleTokens";
import { templateKey, type TaskTemplate } from "@/app/data/tasks";
import { Button } from "@/app/components/common/Button";
import { TemplateGrid, BLANK_KEY, blankTemplateFor, type BlankRatio } from "@/app/components/home/TemplateGallery";
import { TemplateViewer, trapTab } from "@/app/components/home/TemplatePreviewDialog";

/**
 * "템플릿 변경" 선택창 — 데스크톱은 화면 너비 90%(최대 1280px), 모바일은 전체 화면.
 * 카드를 누르면 임시 선택(draft)만 바뀌고 창은 닫히지 않는다. 하단 "이 템플릿 적용"을 눌러야 상위에
 * 반영되고, 취소·닫기·Escape는 기존 선택을 그대로 둔다. "크게 보기"는 모달을 겹치지 않고 같은 창의
 * 상세 화면으로 전환하며, "목록으로"를 누르면 목록 스크롤 위치와 임시 선택이 그대로 돌아온다.
 * 모달 크기는 화면 기준으로 고정(데스크톱 최대 1280×910(카드 약 3줄), 화면 좌우·상하 24px 여백, 모바일 전체 화면)이라 항목 수·검색
 * 결과·선택 상태가 바뀌어도 변하지 않는다. 헤더/하단 액션은 스크롤 밖, 본문만 스크롤(scrollbar-gutter:stable로
 * 스크롤바가 생겨도 카드 너비 불변). 목록은 숨기기만 하고(hidden) 언마운트하지 않아 검색어·더 보기 상태도 유지된다.
 */
export function TemplatePickerDialog({
  templates, current, onApply, onClose, opener, outputRatio,
}: {
  /** 출력 비율이 정해져 있으면 그 비율의 빈 템플릿 이미지를 쓴다(없으면 1:1) */
  outputRatio?: BlankRatio;
  templates: TaskTemplate[];
  /** 지금 적용된 선택: null=템플릿 없이 시작, 문자열=templateKey */
  current: string | null;
  onApply: (key: string | null) => void;
  onClose: () => void;
  opener: HTMLElement | null;
}) {
  const [draft, setDraft] = useState<string | null>(current);
  const [detail, setDetail] = useState<{ key: string; opener: HTMLElement } | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const scrollTop = useRef(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const backRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    onClose();
    requestAnimationFrame(() => opener?.focus({ preventScroll: true }));
  }, [onClose, opener]);

  const closeDetail = useCallback(() => {
    const o = detail?.opener;
    setDetail(null);
    requestAnimationFrame(() => o?.focus({ preventScroll: true }));
  }, [detail]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { e.stopPropagation(); if (detail) closeDetail(); else close(); return; }
      trapTab(e, dialogRef.current);
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [close, closeDetail, detail]);

  // 상세로 갈 때 목록 스크롤 위치를 저장하고, 돌아오면 복원한다(hidden은 스크롤을 잃을 수 있다).
  useLayoutEffect(() => {
    if (!detail && listRef.current) listRef.current.scrollTop = scrollTop.current;
  }, [detail]);
  useEffect(() => { if (detail) backRef.current?.focus({ preventScroll: true }); }, [detail]);

  const detailTemplate = detail ? templates.find((t) => templateKey(t) === detail.key) : undefined;
  const draftTemplate = draft === null ? null : templates.find((t) => templateKey(t) === draft) ?? null;
  const draftName = draftTemplate ? draftTemplate.title : "템플릿 없이 시작";

  return createPortal(
    <div onClick={close} className="fixed inset-0 z-[80] flex items-center justify-center sm:p-6" style={{ background: "rgba(15,23,42,0.45)" }}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="템플릿 선택"
        onClick={(e) => e.stopPropagation()}
        className="w-full h-[100dvh] sm:w-[min(1280px,calc(100vw_-_48px))] sm:h-[min(910px,calc(100dvh_-_48px))] sm:rounded-[20px] flex flex-col overflow-hidden"
        style={{ background: color.surface.default, boxShadow: shadow.modal }}
      >
        {detail && detailTemplate && (
          <TemplateViewer
            template={detailTemplate}
            selected={draft === detail.key}
            onSelect={() => { setDraft(detail.key); closeDetail(); }}
            onBack={closeDetail}
            backLabel="목록으로"
            closeRef={backRef}
          />
        )}

        <div className="flex-1 min-h-0 flex-col" style={{ display: detail ? "none" : "flex" }}>
          <div className="flex items-center gap-3 shrink-0" style={{ padding: "calc(14px + env(safe-area-inset-top)) 20px 14px", borderBottom: `1px solid ${color.border.default}` }}>
            <p className="flex-1 min-w-0" style={{ ...f, fontWeight: 700, fontSize: 17, color: color.text.primary, letterSpacing: "-0.3px" }}>
              템플릿 선택 <span style={{ fontWeight: 600, fontSize: 14, color: SUBTITLE_COLOR }}>템플릿 {templates.length}개 · 자유 구성</span>
            </p>
            <button ref={closeRef} type="button" onClick={close} aria-label="닫기" className="inline-flex items-center justify-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#4f7bff]" style={{ width: 36, height: 36, background: color.surface.default, border: `1px solid ${color.border.default}`, color: "#334155", cursor: "pointer" }}>
              <X size={18} aria-hidden />
            </button>
          </div>

          <div ref={listRef} onScroll={(e) => { if (!detail) scrollTop.current = e.currentTarget.scrollTop; }} className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden" style={{ padding: 20, overscrollBehavior: "contain", scrollbarGutter: "stable" }}>
            <TemplateGrid
              templates={templates}
              blank={blankTemplateFor(outputRatio)}
              selectedKey={draft === null ? BLANK_KEY : draft}
              onSelect={(key) => setDraft(key === BLANK_KEY ? null : key)}
              onPreview={(key, o) => { scrollTop.current = listRef.current?.scrollTop ?? 0; setDetail({ key, opener: o }); }}
            />
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap" style={{ padding: "12px 20px calc(12px + env(safe-area-inset-bottom))", borderTop: `1px solid ${color.border.default}` }}>
            <p className="flex-1 min-w-0 truncate" aria-live="polite" style={{ ...f, fontWeight: 500, fontSize: 13, color: SUBTITLE_COLOR }}>
              선택: <span style={{ fontWeight: 700, color: color.text.primary }}>{draftName}</span>
              {draft === null && <span> · 요청 내용에 맞춰 자유롭게 구성해요</span>}
            </p>
            <Button variant="secondary" size="md" onClick={close}>취소</Button>
            <Button variant="primary" size="md" onClick={() => { onApply(draft); close(); }}>이 템플릿 적용</Button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
