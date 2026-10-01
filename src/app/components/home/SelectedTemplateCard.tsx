import { useRef, useState } from "react";
import { Maximize2, Replace } from "lucide-react";

import { color, f, SUBTITLE_COLOR } from "@/app/styleTokens";
import type { TaskTemplate } from "@/app/data/tasks";
import { Button } from "@/app/components/common/Button";
import { TemplatePickerDialog } from "@/app/components/home/TemplatePickerDialog";
import { TemplatePreviewDialog } from "@/app/components/home/TemplatePreviewDialog";
import { templateKey } from "@/app/data/tasks";
import { blankTemplateFor } from "@/app/components/home/TemplateGallery";

/**
 * 2단계 왼쪽 "사용할 템플릿" — 지금 적용된 템플릿 하나(이미지·이름·짧은 설명)만 보여 주고,
 * 여러 개를 비교해 바꾸는 일은 "템플릿 변경" 선택창(TemplatePickerDialog)이 맡는다.
 * 이미지는 카드 너비에 맞춰 원본 비율대로(width:100%, height:auto) 그려 높이가 이미지마다 달라진다.
 * 목록용 대표 썸네일(thumb)이 있으면 그것을, 없으면 cover를 자르지 않고 쓴다.
 * 자유 구성(template 없음)에는 빈 미리보기 박스를 두지 않고 작은 한 줄만 보여 준다.
 */
export function SelectedTemplateCard({
  templates, template, onApply,
}: {
  templates: TaskTemplate[];
  template: TaskTemplate | undefined;
  onApply: (key: string | null) => void;
}) {
  const [picker, setPicker] = useState<HTMLElement | null>(null);
  const [view, setView] = useState<HTMLElement | null>(null);
  const [imgFailed, setImgFailed] = useState<string | null>(null);
  const changeRef = useRef<HTMLButtonElement>(null);

  // 자유 구성도 일반 템플릿과 같은 형식(썸네일+이름+설명)으로 보여 준다 — 썸네일은 선택 모달의
  // "템플릿 없이 시작" 카드와 같은 이미지(blankTemplateFor)이고 요청 데이터로는 전달되지 않는다.
  const blank = !template && templates.length > 0;
  const shown = template ?? (blank ? blankTemplateFor() : undefined);
  const src = shown ? shown.thumb ?? shown.cover : undefined;
  const size = shown ? (shown.thumb ? shown.thumbSize : shown.coverSize) : undefined;
  const showImg = !!src && imgFailed !== src;

  return (
    <div className="rounded-[22px]" style={{ background: "#fff", border: "1px solid #e2e8f0", padding: 20 }}>
      <div className="flex items-center justify-between gap-3">
        <p style={{ ...f, fontWeight: 700, fontSize: 15, color: "#0a0a0a" }}>사용할 템플릿</p>
        {templates.length > 0 && (
          <Button ref={changeRef} variant="secondary" size="md" style={{ height: 36, padding: "0 12px", fontSize: 13 }} onClick={(e) => setPicker(e.currentTarget)}>
            <Replace size={14} aria-hidden /> 템플릿 변경
          </Button>
        )}
      </div>

      {shown ? (
        <div className="mt-3.5">
          <div className="relative overflow-hidden" style={{ borderRadius: 12, border: `1px solid ${color.border.default}`, background: color.surface.subtle }}>
            {showImg ? (
              <img
                src={src}
                alt={shown.title}
                width={size?.width}
                height={size?.height}
                draggable={false}
                onError={() => setImgFailed(src ?? null)}
                style={{ display: "block", width: "100%", height: "auto" }}
              />
            ) : (
              <div className="flex items-center justify-center" style={{ height: 112, ...f, fontWeight: 500, fontSize: 12, color: "#94a3b8" }}>
                {src ? "이미지를 불러오지 못했어요" : "미리보기 준비 중"}
              </div>
            )}
          </div>
          <div className="mt-3 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p style={{ ...f, fontWeight: 700, fontSize: 13.5, color: "#0a0a0a" }}>{shown.title}</p>
              <p className="mt-1" style={{ ...f, fontWeight: 500, fontSize: 12, color: SUBTITLE_COLOR }}>{shown.meta}</p>
            </div>
            {showImg && !blank && (
              <button
                type="button"
                onClick={(e) => setView(e.currentTarget)}
                className="shrink-0 inline-flex items-center gap-1 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-[#4f7bff]"
                style={{ ...f, fontWeight: 600, fontSize: 12.5, height: 32, padding: "0 10px", background: color.surface.default, border: `1px solid ${color.border.default}`, color: "#334155", cursor: "pointer" }}
              >
                <Maximize2 size={13} aria-hidden /> 크게 보기
              </button>
            )}
          </div>
        </div>
      ) : (
        <p className="mt-3" style={{ ...f, fontWeight: 500, fontSize: 13, color: SUBTITLE_COLOR, lineHeight: 1.6 }}>
          이 작업에 맞는 템플릿이 아직 없어요. 템플릿 없이 진행할 수 있어요.
        </p>
      )}

      {picker && (
        <TemplatePickerDialog
          templates={templates}
          current={template ? templateKey(template) : null}
          onApply={onApply}
          onClose={() => setPicker(null)}
          opener={picker}
        />
      )}
      {view && template && <TemplatePreviewDialog template={template} onClose={() => setView(null)} opener={view} />}
    </div>
  );
}
