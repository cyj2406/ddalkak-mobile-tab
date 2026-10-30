import { useId, type ReactNode } from "react";
import { color, editorEntry, f, motion, radius, typography } from "@/app/styleTokens";
import { Badge } from "@/app/components/common/Badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/app/components/ui/tooltip";
import { useOnboardingState } from "@/app/components/onboarding/onboardingStore";
import artImage from "@/assets/home/editor/image.png";
import artWord from "@/assets/home/editor/word.png";
import artHangul from "@/assets/home/editor/hangul.png";
import artPpt from "@/assets/home/editor/ppt.png";
import artExcel from "@/assets/home/editor/excel.png";
import artVideo from "@/assets/home/editor/video.png";
import artLayer from "@/assets/home/editor/layer.png";

/** 홈 아이콘 줄이 여는 에디터 — App이 워크스페이스 카테고리·결과 형식으로 바꿔 연다. */
export type EditorKind = "image" | "word" | "hangul" | "ppt" | "excel" | "video" | "layer";

/** 순서 = 화면 순서. hint = hover 툴팁 한 줄 — 일곱 개가 한 덩어리로 읽히게 모두 "… 편집"으로 끝낸다(워드·한글·PPT·엑셀은 파일 포맷을 앞에 붙인다). 레이어 분리는 이미지 에디터로 열리지만 입구를 따로 둔다(NEW). */
const EDITORS: { kind: Exclude<EditorKind, "layer">; label: string; hint: string; art: string }[] = [
  { kind: "image", label: "이미지", hint: "이미지 편집", art: artImage },
  { kind: "word", label: "워드", hint: "DOCX 문서 편집", art: artWord },
  { kind: "hangul", label: "한글", hint: "HWP·HWPX 편집", art: artHangul },
  { kind: "ppt", label: "PPT", hint: "PPTX 발표자료 편집", art: artPpt },
  { kind: "excel", label: "엑셀", hint: "XLSX 스프레드시트 편집", art: artExcel },
  { kind: "video", label: "영상", hint: "영상 편집", art: artVideo },
];
const LAYER = { kind: "layer" as const, label: "레이어 분리", hint: "이미지 속 글자·요소 편집", art: artLayer };

/**
 * 항목 하나 — 클릭 영역(item × 전체 높이)이 hover 배경 영역과 같고, 모든 항목이 같은 크기다.
 * 아이콘 칸(icon) + 아래 이름. 기본 상태는 배경 없음, hover 는 color.surface.hover 배경(전 항목 동일).
 * hover/포커스 때 한 줄 용도를 툴팁으로 보여준다. 포커스 링은 inset 이라 가로 스크롤 줄에서 잘리지 않는다.
 * 스크린리더: 이름은 aria-label("○○ 편집기 열기"), 툴팁 문구는 설명으로 aria-describedby 에 따로 건다(이름에 합치지 않는다).
 * Radix 툴팁 본문은 열려 있을 때만 DOM 에 있어 그 id 로는 항상 연결할 수 없으므로, 같은 문구를 hidden 요소(고유 id)로
 * 늘 렌더링해 연결한다 — hidden 이어도 aria-describedby 참조로는 읽힌다. 버튼에 직접 준 aria-describedby 가 Radix 가
 * 열릴 때만 넣는 값보다 우선하므로 hover 여부와 관계없이 연결이 유지된다.
 */
function EntryButton({ label, hint, onClick, children, badge, ariaLabel }: {
  label: string;
  hint: string;
  onClick: () => void;
  children: ReactNode;
  badge?: string;
  ariaLabel?: string;
}) {
  const hintId = `editor-hint-${useId()}`;
  return (
    <>
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={onClick}
          aria-label={ariaLabel}
          aria-describedby={hintId}
          className="editor-entry shrink-0 flex flex-col items-center outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4f7bff]"
          style={{ width: editorEntry.item, padding: editorEntry.pad, gap: editorEntry.space, borderRadius: radius.card, transition: `background-color ${motion.fast}`, scrollSnapAlign: "start" }}
        >
          <span className="relative flex items-center justify-center" style={{ width: editorEntry.icon, height: editorEntry.icon }}>
            {children}
            {badge && (
              <span aria-hidden className="absolute" style={{ top: editorEntry.badgeTop, right: editorEntry.badgeRight }}>
                <Badge tone="brandSolid" size="sm">{badge}</Badge>
              </span>
            )}
          </span>
          <span
            className="whitespace-nowrap"
            style={{ ...f, fontWeight: 500, fontSize: editorEntry.labelSize, lineHeight: `${editorEntry.labelLineHeight}px`, letterSpacing: "-0.2px", color: typography.body.color }}
          >
            {label}
          </span>
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" align="center" sideOffset={6} collisionPadding={8}>{hint}</TooltipContent>
    </Tooltip>
    <span id={hintId} hidden>{hint}</span>
    </>
  );
}

/** 그룹 사이 세로 구분선 — 아이콘 칸의 세로 가운데에 맞춘다(항목 위 여백 pad + (icon − 높이) / 2). */
function GroupDivider() {
  return (
    <span
      aria-hidden
      className="shrink-0 self-start"
      style={{ width: 1, height: editorEntry.dividerHeight, marginTop: editorEntry.pad + (editorEntry.icon - editorEntry.dividerHeight) / 2, marginInline: editorEntry.groupGap - editorEntry.space, background: color.border.default }}
    />
  );
}

/**
 * 홈 상단 에디터 진입 줄(2026-10-22 재구성) — 위 검색창(AI로 시작)의 대안 경로.
 *   [──── 무료 편집기 바로 열기 ────]
 *   [이미지 워드 한글 PPT 엑셀 영상] | [레이어 분리]
 * 각 항목은 해당 포맷의 에디터를 바로 연다(2026-10-29 전체 템플릿 버튼과 첫 구분선 제거).
 * 묶음(.editor-row-inner, w-max)을 홈 공통 컨테이너 안에서 margin-inline:auto 로 가운데 둔다 — 검색창과 같은 중심축.
 * 넘칠 때 justify-center 는 왼쪽이 잘리므로 쓰지 않는다(auto 마진은 0 이 되어 왼쪽 여백부터 가로 스크롤).
 * 라벨 줄은 가로 스크롤 영역 밖(최대 폭 = 묶음 폭)이라 묶음 정렬에 끼어들지 않고, 좁은 화면에서도 보이는 영역 가운데에 남는다.
 * NEW 배지는 absolute 라 정렬에 영향이 없다.
 * 세로 합계는 이전과 같은 130px(styleTokens editorEntry 주석 참고). 모바일에선 페이지 좌우 여백 밖까지 펼친다.
 */
/**
 * 아이콘 묶음 폭 — 항목 7개 + 구분선 1개(1px + 양옆 groupGap − space 마진) + 자식 8개 사이 space 7칸.
 * 라벨 줄의 최대 폭으로 쓴다: 넓은 화면에선 라벨 양옆 선이 묶음 폭과 같고, 묶음이 넘치는 좁은 화면에선
 * 보이는 컨테이너 폭에 맞춰 가운데에 남는다(라벨 줄은 가로 스크롤 영역 밖에 있다).
 */
const BUNDLE_WIDTH = 7 * editorEntry.item + 7 * editorEntry.space + (1 + 2 * (editorEntry.groupGap - editorEntry.space));

export function EditorQuickLinks({ onOpenEditor }: { onOpenEditor: (kind: EditorKind) => void }) {
  const rule = <span aria-hidden className="flex-1 h-px" style={{ background: color.border.default }} />;
  // 홈 온보딩 2단계('열고 고치는 건 무료예요')가 떠 있는 동안만 라벨의 '무료'를 브랜드 배지로 — 끝나면 원래 글자로 돌아간다
  const freeEmphasis = useOnboardingState().stepId === "editor-row";
  return (
    <nav
      data-tutorial="categories"
      data-onboarding="editor-row"
      aria-labelledby="editor-row-label"
      className="flex flex-col self-stretch"
      style={{ marginTop: editorEntry.searchGapExtra, gap: editorEntry.captionGap, ["--row-gutter" as string]: "var(--gap-screen-x)" }}
    >
      <style>{`
        .editor-row {
          margin-left: calc(-1 * var(--row-gutter)); margin-right: calc(-1 * var(--row-gutter));
          padding: 0 var(--row-gutter);
          scroll-padding-inline: var(--row-gutter); scroll-snap-type: x proximity;
          scrollbar-width: none; -webkit-overflow-scrolling: touch; overscroll-behavior-x: contain;
        }
        .editor-row::-webkit-scrollbar { display: none; }
        .editor-entry:hover { background: ${color.surface.hover}; }
      `}</style>
      <div className="w-full mx-auto flex items-center" style={{ maxWidth: BUNDLE_WIDTH, gap: editorEntry.space }}>
          {rule}
          <p
            id="editor-row-label"
            className="whitespace-nowrap"
            style={{ ...typography.caption, color: color.text.secondary, lineHeight: `${editorEntry.captionLineHeight}px` }}
          >
            {freeEmphasis ? <><Badge tone="brandSolid" size="sm">무료</Badge> 편집기 바로 열기</> : "무료 편집기 바로 열기"}
          </p>
          {rule}
      </div>
      <div className="editor-row overflow-x-auto">
        <div className="editor-row-inner w-max mx-auto flex items-start" style={{ gap: editorEntry.space }}>
          {EDITORS.map((e) => (
            <EntryButton key={e.kind} label={e.label} hint={e.hint} ariaLabel={`${e.label} 편집기 열기`} onClick={() => onOpenEditor(e.kind)}>
              <img src={e.art} alt="" draggable={false} className="block" style={{ width: editorEntry.icon, height: editorEntry.icon, objectFit: "contain" }} />
            </EntryButton>
          ))}
          <GroupDivider />
          <EntryButton label={LAYER.label} hint={LAYER.hint} badge="NEW" ariaLabel={`${LAYER.label} 편집기 열기 (새 기능)`} onClick={() => onOpenEditor(LAYER.kind)}>
            <img src={LAYER.art} alt="" draggable={false} className="block" style={{ width: editorEntry.icon, height: editorEntry.icon, objectFit: "contain" }} />
          </EntryButton>
        </div>
      </div>
    </nav>
  );
}

export default EditorQuickLinks;
