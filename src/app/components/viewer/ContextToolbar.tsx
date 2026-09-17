import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Check, ChevronDown, CircleHelp, Image as ImageIcon, ImagePlus, Loader2, Palette,
  Plus, RotateCcw, Shapes, Sparkles, SquareDashedMousePointer, X,
} from "lucide-react";

import { IconTooltip } from "./IconTooltip";
import { AI_CREATE_KINDS, AI_REGION_EDIT_COST, type AICreateKind, type EditRegion, type UseAIStudio } from "./aiStudio";
import { type EditorImage, formatCreditShort } from "./textSplit";

/**
 * 캔버스 상단 AI 바 — 생성과 수정을 "입력은 하나, 대상만 바꿔 끼운다"는 원칙으로 합쳤다.
 *
 * 입력은 대상에 따라 정확히 한 곳에만 있다 — 절대 두 곳에 동시에 있지 않는다:
 *   새로 만들기 / 이미지 전체  → 이 바 안의 프롬프트 입력
 *   영역 지정                → 캔버스 점선 박스 옆 인라인 말풍선(TabletMiniEditor 의
 *                              RegionEditOverlay). 그래서 "영역 지정" 대상일 때 이
 *                              바는 프롬프트 입력·레퍼런스를 아예 그리지 않는다 —
 *                              같은 내용을 두 군데서 받으면 어디에 써야 할지
 *                              헷갈리기 때문이다.
 *
 * 바는 어떤 상태에서도 56px 한 줄을 유지한다. 적용 대상 안내("현재 슬라이드의
 * 배경으로 적용돼요" 등)는 바 자신에 넣지 않고 대상 드롭다운의 각 항목 아래 작은
 * 설명으로 옮겨 바가 2층이 되는 일을 막는다.
 *
 * 타이포·라운드·그림자는 에디터 메인 디자인 톤(굵기 400/500만, 컨트롤 라운드 8px,
 * 바 12px, 팝오버 12px)에 맞춘다 — SHADOW_BAR/SHADOW_POPOVER 로 그림자 2단계를 못박는다.
 *
 * 팝오버 셸(FloatingPopover)은 스크림을 쓰지 않는다 — "영역 지정" 목록 팝오버가
 * 열려 있어도 캔버스 드래그가 그대로 시작돼야 하기 때문이다.
 *
 * z-index 순서(이 파일 범위): 바 자신은 호출부(TabletMiniEditor)가 z-20 으로 앵커하고,
 * 그 안에서 뜨는 드롭다운·팝오버는 전부 z-30 — 바보다 항상 위에 뜨게 한다.
 */

const C = {
  primary: "#3B5BFF",
  /** CTA 전용 — 메인 프라이머리를 그대로 쓰지 않고 살짝 톤을 낮췄다. 바가 캔버스
   *  위에 떠 있어서, 순도 100% 파랑이면 아래 콘텐츠와 부딪혀 튀어 보인다. */
  ctaPrimary: "#4A5FD6",
  primarySoft: "#EEF1FF",
  card: "#FFFFFF",
  text: "#1A1D29",
  sub: "#8A90A2",
  line: "#E7EAF0",
  surface: "#F1F3F7",
  success: "#16A34A",
  off: "#C2C7D2",
} as const;

const font = { fontFamily: "'Pretendard Variable', Pretendard, sans-serif" };

/** 그림자 1단계 — 바 자신(기존 진행 배지와 같은 톤) */
const SHADOW_BAR = "0 4px 16px rgba(16,24,40,0.10)";
/** 그림자 2단계 — 드롭다운·팝오버(기존 Popover 컴포넌트와 같은 톤, 바보다 한 단 무겁다) */
const SHADOW_POPOVER = "0 14px 38px rgba(16,24,40,0.16)";

const BAR_H = 56;
/** 바의 위아래 여백 — 다른 컨트롤(칩·CTA·도움말 등, 전부 36px 높이)이 이 여백만큼
 *  아래로 밀려 56px 첫 줄의 세로 중앙에 놓인다. 입력만 이 여백 아래로 자란다. */
const BAR_PAD_V = 10;
/** 입력 한 줄의 높이(다른 36px 컨트롤과 맞춘 값)와, 3줄까지 자랄 때의 상한 —
 *  기존 확장 팝오버가 쓰던 3줄 상한(76px, Round 7/8)을 그대로 재사용한다. */
const PROMPT_LINE_H = 36;
const PROMPT_MAX_H = 76;

export type AITargetKind = "icon" | "illustration" | "background" | "edit-whole" | "edit-region";

const isCreateTarget = (t: AITargetKind): t is AICreateKind => t === "icon" || t === "illustration" || t === "background";

const TARGET_ICON: Record<AITargetKind, React.ReactNode> = {
  icon: <Shapes size={15} strokeWidth={1.8} />,
  illustration: <Palette size={15} strokeWidth={1.8} />,
  background: <ImagePlus size={15} strokeWidth={1.8} />,
  "edit-whole": <ImageIcon size={15} strokeWidth={1.8} />,
  "edit-region": <SquareDashedMousePointer size={15} strokeWidth={1.8} />,
};

const TARGET_LABEL: Record<AITargetKind, string> = {
  icon: "아이콘",
  illustration: "일러스트",
  background: "배경",
  "edit-whole": "이미지 전체",
  "edit-region": "영역 지정",
};

/** 실행 결과가 어디에 적용되는지 — 대상 드롭다운의 각 항목 아래 한 줄로 붙는다.
 *  이전엔 바 하단에 캡션으로 따로 뒀었는데, 그러면 바가 2층이 됐다. */
const PLACEMENT_HINT: Record<AITargetKind, string> = {
  icon: "캔버스 중앙에 추가돼요",
  illustration: "캔버스 중앙에 추가돼요",
  background: "현재 슬라이드의 배경으로 적용돼요",
  "edit-whole": "선택한 이미지가 교체돼요",
  "edit-region": "지정한 영역만 다시 그려져요",
};

/* ── 캔버스 드래그와 공존해야 하는 팝오버 전용 셸(스크림 없음) ─────────── */

function FloatingPopover({
  anchorRef, onClose, width, align = "left", caret = false, flip = false, children,
}: {
  anchorRef: React.RefObject<HTMLElement>;
  onClose: () => void;
  width: number;
  align?: "left" | "right";
  /** 위쪽에 작은 삼각 꼬리를 붙여 트리거와의 관계를 명시한다(온보딩 힌트 전용) */
  caret?: boolean;
  /** 아래로 펼쳤을 때 뷰포트 아래로 넘치면 위로 뒤집는다 — 도움말 팝오버가 프롬프트
   *  입력을 덮거나, 참고 이미지 팝오버가 캔버스 상단을 덮던 문제의 처방. 팝오버는
   *  열릴 때마다 새로 마운트되므로 마운트 시 한 번만 재본다(드래그 중 실시간 추적은
   *  필요 없다) — 정확한 "캔버스 영역" 경계 대신 뷰포트 경계로 재는 근사치를 쓴다
   *  (바가 캔버스 상단 가까이 떠 있어 실질적으로 거의 같은 판정이 나온다). */
  flip?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  useLayoutEffect(() => {
    if (!flip) return;
    const el = ref.current;
    const anchor = anchorRef.current;
    if (!el || !anchor) return;
    const anchorRect = anchor.getBoundingClientRect();
    const needed = el.getBoundingClientRect().height;
    setFlipped(anchorRect.bottom + 8 + needed > window.innerHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flip]);

  useEffect(() => {
    const onDocMouseDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (ref.current?.contains(t)) return;
      if (anchorRef.current?.contains(t)) return;
      onClose();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("mousedown", onDocMouseDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouseDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [anchorRef, onClose]);

  return (
    <div
      ref={ref}
      role="dialog"
      className="absolute z-30 rounded-[12px] overflow-visible"
      style={{
        ...(flipped ? { bottom: "calc(100% + 8px)" } : { top: "calc(100% + 8px)" }),
        [align]: 0,
        width,
        background: C.card,
        border: `1px solid ${C.line}`,
        boxShadow: SHADOW_POPOVER,
        ...font,
      }}
    >
      {caret && (
        <span
          aria-hidden="true"
          className="absolute rounded-[2px]"
          style={flipped ? {
            [align]: 16,
            bottom: -5,
            width: 9,
            height: 9,
            background: C.card,
            borderBottom: `1px solid ${C.line}`,
            borderRight: `1px solid ${C.line}`,
            transform: "rotate(45deg)",
          } as React.CSSProperties : {
            [align]: 16,
            top: -5,
            width: 9,
            height: 9,
            background: C.card,
            borderTop: `1px solid ${C.line}`,
            borderLeft: `1px solid ${C.line}`,
            transform: "rotate(45deg)",
          } as React.CSSProperties}
        />
      )}
      <div className="relative rounded-[12px] overflow-hidden" style={{ background: C.card }}>
        {children}
      </div>
    </div>
  );
}

/* ── 대상 칩 ──────────────────────────────────────────────────────── */

/** 인라인으로 보여줄 영역 칩의 최대 개수 — 그 이상은 "+M" 칩 하나로 묶고, 그 칩을
 *  누르면 전체 목록 팝오버(RegionListPopoverContent, 인라인 입력까지 되는 자리)를 연다. */
const INLINE_REGION_CHIPS = 5;

function TargetChip({
  target, compactLevel = 0, onTargetChange, selectedImage,
  hoverRegionId, onHoverRegion, regions, onChangeInstruction, onRemoveRegion, onReopenRegion,
  onFocusRegion, onDropdownOpenChange,
}: {
  target: AITargetKind;
  compactLevel?: 0 | 1 | 2 | 3 | 4;
  onTargetChange: (k: AITargetKind) => void;
  selectedImage: EditorImage | null;
  hoverRegionId: string | null;
  onHoverRegion: (id: string | null) => void;
  regions: EditRegion[];
  onChangeInstruction: (regionId: string, v: string) => void;
  onRemoveRegion: (regionId: string) => void;
  onReopenRegion: (regionId: string) => void;
  /** 영역 칩을 누르면 그 영역의 말풍선을 연다. */
  onFocusRegion?: (regionId: string) => void;
  /** 드롭다운이 열려 있는 동안 캔버스 이미지에 "여기서 고를 수 있어요" 외곽선을 띄우려면
   *  호출부(TabletMiniEditor)가 이 열림 여부를 알아야 한다. */
  onDropdownOpenChange?: (open: boolean) => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [flash, setFlash] = useState(false);
  const chipRef = useRef<HTMLButtonElement>(null);
  const moreRef = useRef<HTMLButtonElement>(null);
  const prevTarget = useRef(target);

  useEffect(() => { onDropdownOpenChange?.(dropdownOpen); }, [dropdownOpen, onDropdownOpenChange]);

  // 자동 전환됐다는 걸 인지시키는 짧은 하이라이트 — 사용자가 직접 눌러 연 경우와
  // 구분할 필요는 없다(어느 쪽이든 "지금 이걸로 바뀌었다"는 신호는 같다).
  useEffect(() => {
    if (prevTarget.current === target) return;
    prevTarget.current = target;
    setFlash(true);
    const t = window.setTimeout(() => setFlash(false), 200);
    return () => window.clearTimeout(t);
  }, [target]);

  const shownRegions = regions.slice(0, INLINE_REGION_CHIPS);
  const overflowCount = regions.length - shownRegions.length;

  return (
    <div className="shrink-0 flex items-center gap-1">
      <div className="relative shrink-0">
        {/* 왼쪽 슬롯은 항상 [아이콘][모드명][⌄] 로 고정한다 — 예전엔 여기가 모드
            아이콘과 대상 썸네일 사이를 오갔는데, 전자만 남긴다. 이미지 전체·영역
            지정 모두 "무엇을 어떻게 바꾸는가"가 캔버스의 딤+마스크로 이미 보이므로
            칩에 썸네일까지 얹을 필요가 없었다(오히려 "전체가 대상"이라는 신호만
            더했다). */}
        {/* 2단계 압축부터 모드명 텍스트를 접는다(아이콘 + ⌄ 만) — 이름은 툴팁으로
            여전히 닿을 수 있다. IconTooltip 은 레이블이 있을 때만 감싼다. */}
        {(() => {
          const chipButton = (
            <button
              ref={chipRef}
              type="button"
              aria-label={compactLevel >= 2 ? TARGET_LABEL[target] : undefined}
              onClick={() => setDropdownOpen((v) => !v)}
              className="shrink-0 flex items-center gap-1.5 rounded-[8px] pl-2 pr-2 h-9 transition-colors hover:bg-[#F4F6FA]"
              style={{ background: flash ? C.primarySoft : undefined, transition: "background-color 200ms ease" }}
            >
              <span className="shrink-0" style={{ color: C.primary }}>{TARGET_ICON[target]}</span>
              {compactLevel < 2 && (
                <span style={{ fontSize: 14, fontWeight: 500, color: C.text, whiteSpace: "nowrap" }}>
                  {TARGET_LABEL[target]}
                </span>
              )}
              <ChevronDown size={14} strokeWidth={2} color={C.sub} />
            </button>
          );
          return compactLevel >= 2 ? <IconTooltip label={TARGET_LABEL[target]}>{chipButton}</IconTooltip> : chipButton;
        })()}
        {dropdownOpen && (
          <FloatingPopover anchorRef={chipRef} onClose={() => setDropdownOpen(false)} width={380} flip>
            <TargetDropdownContent
              target={target}
              hasImage={!!selectedImage}
              onSelect={(k) => { onTargetChange(k); setDropdownOpen(false); }}
            />
          </FloatingPopover>
        )}
      </div>

      {/* 대상 썸네일이 빠진 자리에 지정된 영역을 직접 칩으로 늘어놓는다 — 개수만
          말하던 "· N개"보다, 어느 영역인지 하나하나 가리키고 hover·삭제까지 되는
          쪽이 실제 대상을 훨씬 더 잘 전달한다. */}
      {target === "edit-region" && shownRegions.length > 0 && (
        <div className="shrink-0 flex items-center gap-1">
          {shownRegions.map((region, i) => (
            <RegionChip
              key={region.id}
              index={i}
              region={region}
              hovered={hoverRegionId === region.id}
              onHoverRegion={onHoverRegion}
              onFocusRegion={onFocusRegion}
              onRemoveRegion={onRemoveRegion}
            />
          ))}
          {overflowCount > 0 && (
            <div className="relative shrink-0">
              <button
                ref={moreRef}
                type="button"
                onClick={() => setListOpen((v) => !v)}
                className="shrink-0 flex items-center justify-center rounded-full transition-colors hover:bg-[#F4F6FA]"
                style={{ width: 22, height: 22, fontSize: 11, fontWeight: 500, color: C.sub, border: `1px solid ${C.line}` }}
              >
                +{overflowCount}
              </button>
              {listOpen && (
                <FloatingPopover anchorRef={moreRef} onClose={() => setListOpen(false)} width={320} flip>
                  <RegionListPopoverContent
                    imageTone={selectedImage?.tone ?? C.surface}
                    regions={regions}
                    hoverRegionId={hoverRegionId}
                    onHoverRegion={onHoverRegion}
                    onChangeInstruction={onChangeInstruction}
                    onRemoveRegion={onRemoveRegion}
                    onReopenRegion={onReopenRegion}
                  />
                </FloatingPopover>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** 영역 칩 하나 — 캔버스 번호 배지와 같은 색 규칙(회색/파랑/초록)을 그대로 쓴다.
 *  hover 하면 캔버스의 해당 영역이 같이 강조되고(onHoverRegion 재사용), 클릭하면
 *  그 영역 말풍선이 열리며, hover 중에만 뜨는 × 로 바로 지울 수 있다. */
function RegionChip({
  index, region, hovered, onHoverRegion, onFocusRegion, onRemoveRegion,
}: {
  index: number;
  region: EditRegion;
  hovered: boolean;
  onHoverRegion: (id: string | null) => void;
  onFocusRegion?: (id: string) => void;
  onRemoveRegion: (id: string) => void;
}) {
  const done = region.status === "done";
  const filled = region.instruction.trim().length > 0;
  return (
    <span
      className="relative shrink-0 flex items-center justify-center rounded-full transition-transform"
      onMouseEnter={() => onHoverRegion(region.id)}
      onMouseLeave={() => onHoverRegion(null)}
      style={{ width: 22, height: 22 }}
    >
      <button
        type="button"
        aria-label={`${index + 1}번 영역`}
        onClick={() => onFocusRegion?.(region.id)}
        className="w-full h-full flex items-center justify-center rounded-full transition-transform hover:scale-110"
        style={{
          fontSize: 10.5, fontWeight: 500, color: "#FFFFFF",
          background: done ? "#16A34A" : filled ? C.primary : "#94A3C4",
          outline: hovered ? `2px solid ${C.primarySoft}` : "none",
        }}
      >
        {region.status === "processing"
          ? <Loader2 size={11} strokeWidth={2.6} className="animate-spin" />
          : done ? <Check size={11} strokeWidth={3} /> : index + 1}
      </button>
      {hovered && region.status === "idle" && (
        <button
          type="button"
          aria-label="영역 삭제"
          onClick={(e) => { e.stopPropagation(); onRemoveRegion(region.id); }}
          className="absolute flex items-center justify-center rounded-full"
          style={{ right: -4, top: -4, width: 14, height: 14, background: "#FFFFFF", border: `1px solid ${C.line}`, boxShadow: "0 1px 3px rgba(16,24,40,0.2)", color: C.sub }}
        >
          <X size={9} strokeWidth={2.6} />
        </button>
      )}
    </span>
  );
}

/** 비활성 항목에 hover 하면 왜 못 쓰는지 알려준다 — 아이콘 전용 버튼이 아니라
 *  IconTooltip 관례(아이콘 단독 전용) 밖이므로 가벼운 네이티브 title 로 충분하다. */
const DISABLED_EDIT_TIP = "수정할 이미지를 캔버스에서 선택해 주세요";

function TargetDropdownContent({
  target, hasImage, onSelect,
}: { target: AITargetKind; hasImage: boolean; onSelect: (k: AITargetKind) => void }) {
  const Row = ({ kind, cost }: { kind: AITargetKind; cost: string }) => {
    const disabled = (kind === "edit-whole" || kind === "edit-region") && !hasImage;
    const active = kind === target;
    return (
      <button
        type="button"
        disabled={disabled}
        title={disabled ? DISABLED_EDIT_TIP : undefined}
        onClick={() => onSelect(kind)}
        className="w-full flex items-center gap-3 rounded-[8px] px-2.5 transition-colors enabled:hover:bg-[#F5F7FA] disabled:cursor-default"
        style={{ height: 56, background: active ? C.primarySoft : "transparent" }}
      >
        <span className="shrink-0" style={{ color: disabled ? C.off : active ? C.primary : C.sub }}>
          {/* 칩 트리거는 15px 아이콘을 그대로 쓰지만, 드롭다운 행은 시선이 더 오래
              머무는 자리라 20px 로 키운다 — TARGET_ICON 은 공유 레코드라 크기만
              복제해 덮어쓴다. */}
          {React.cloneElement(TARGET_ICON[kind] as React.ReactElement<{ size?: number }>, { size: 20 })}
        </span>
        <span className="flex-1 min-w-0 flex flex-col items-start text-left">
          <span style={{ fontSize: 14, fontWeight: 500, color: disabled ? C.off : C.text }}>
            {TARGET_LABEL[kind]}
          </span>
          <span style={{ fontSize: 12, fontWeight: 400, color: disabled ? C.off : C.sub, wordBreak: "keep-all" }}>
            {PLACEMENT_HINT[kind]}
          </span>
        </span>
        <span className="shrink-0" style={{ fontSize: 12, fontWeight: 400, color: disabled ? C.off : C.sub }}>
          {cost}
        </span>
      </button>
    );
  };

  return (
    <div className="p-2 flex flex-col gap-2">
      <div className="flex flex-col gap-0.5">
        <p className="px-2.5" style={{ fontSize: 12, fontWeight: 500, color: C.sub }}>새로 만들기</p>
        {AI_CREATE_KINDS.map((k) => (
          <Row key={k.id} kind={k.id} cost={formatCreditShort(k.cost)} />
        ))}
      </div>
      <div style={{ height: 1, background: C.line }} />
      <div className="flex flex-col gap-0.5">
        <div className="flex flex-col gap-1 px-2.5">
          <p style={{ fontSize: 12, fontWeight: 500, color: C.sub }}>고치기</p>
          {!hasImage && (
            <p style={{ fontSize: 12, fontWeight: 400, color: C.sub, wordBreak: "keep-all" }}>이미지를 선택하면 사용할 수 있어요</p>
          )}
        </div>
        <Row kind="edit-whole" cost={formatCreditShort(AI_REGION_EDIT_COST)} />
        <Row kind="edit-region" cost={`${formatCreditShort(AI_REGION_EDIT_COST)}/개`} />
      </div>
    </div>
  );
}

/* ── 레퍼런스 버튼 + 팝오버 ───────────────────────────────────────── */

const REF_TONES = ["#C7D2E8", "#D8CFE6", "#CFE0D6", "#E6D9C6", "#F4A261"];

/**
 * "참고 이미지" — 입력 필드 바깥, CTA 앞에 자리한다. 텍스트 라벨은 없다 — 아이콘
 * 하나로 고정 폭을 유지해야 프롬프트 입력에 폭을 최대한 돌려줄 수 있다(라벨이
 * 있을 때보다 약 100px 절약된다). 대신 붙은 게 있으면 아이콘 대신 그 썸네일들을
 * 버튼 얼굴로 직접 보여준다 — 몇 장 붙었는지 숫자 대신 실제 톤으로 바로 보인다.
 *
 * 체크박스로 붙인 "선택 이미지"는 몇 번째로 들어갔는지 selfRefIndex 에 기억해 뒀다가
 * 해제하면 정확히 그 항목만 뗀다 — 마지막 항목을 그냥 지우면 그사이 사용자가 "+"로
 * 다른 레퍼런스를 더 붙였을 때 엉뚱한 걸 지우게 된다. 그 항목을 썸네일 목록에서
 * 직접 ✕ 로 지운 경우까지 완벽히 동기화하진 않는다 — 톤 블록만 오가는 목업에서
 * 그 정도 어긋남은 감수할 만하다.
 */
function ReferenceControl({
  target, selectedImage, aiStudio,
}: { target: AITargetKind; selectedImage: EditorImage | null; aiStudio: UseAIStudio }) {
  const [open, setOpen] = useState(false);
  const [attachSelected, setAttachSelected] = useState(false);
  const selfRefIndex = useRef<number | null>(null);
  const ref = useRef<HTMLButtonElement>(null);
  const count = aiStudio.referenceTones.length;
  const showAttachCheckbox = isCreateTarget(target) && !!selectedImage;

  // 체크박스 자체가 사라지면(이미지 선택 해제 등) 추적하던 인덱스도 잊는다 — 남겨두면
  // 나중에 다시 나타났을 때 엉뚱한 항목을 지울 근거로 쓰이게 된다.
  useEffect(() => {
    if (!showAttachCheckbox) { setAttachSelected(false); selfRefIndex.current = null; }
  }, [showAttachCheckbox]);

  const removeAt = (i: number) => {
    aiStudio.removeReferenceAt(i);
    if (selfRefIndex.current === i) { selfRefIndex.current = null; setAttachSelected(false); }
    else if (selfRefIndex.current !== null && i < selfRefIndex.current) selfRefIndex.current -= 1;
  };

  return (
    <div className="relative shrink-0">
      {/* count > 0 일 때는 툴팁 문구 자체가 "AI가 참고한다"는 설명이 된다 — 이 설명을
          팝오버를 열어야만 보이게 가둬 두지 않고, hover 만으로 늘 닿을 수 있게 한다. */}
      <IconTooltip label={count > 0 ? "AI가 이 이미지들의 스타일을 참고해서 그려요" : "참고 이미지"}>
        <button
          ref={ref}
          type="button"
          aria-label="참고 이미지"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 flex items-center justify-center rounded-[8px] h-9 transition-colors hover:bg-[#F4F6FA]"
          style={{ color: "#5B6475", width: count > 0 ? undefined : 36, padding: count > 0 ? "0 6px" : 0 }}
        >
          {count === 0 ? (
            <ImagePlus size={20} strokeWidth={1.8} />
          ) : (
            <span className="flex items-center gap-1">
              {aiStudio.referenceTones.slice(0, 3).map((tone, i) => (
                <span key={i} className="shrink-0 rounded-[4px]" style={{ width: 24, height: 24, background: tone, border: `1px solid ${C.line}` }} />
              ))}
              {count > 3 && (
                <span
                  className="shrink-0 flex items-center justify-center rounded-[4px]"
                  style={{ width: 24, height: 24, background: C.line, fontSize: 10, fontWeight: 500, color: C.sub }}
                >
                  +{count - 3}
                </span>
              )}
            </span>
          )}
        </button>
      </IconTooltip>
      {open && (
        <FloatingPopover anchorRef={ref} onClose={() => setOpen(false)} width={320} align="right" caret flip>
          <div className="p-3 flex flex-col gap-2.5">
            <p style={{ fontSize: 13, fontWeight: 500, color: C.text }}>참고 이미지</p>
            <p style={{ fontSize: 12, fontWeight: 400, color: C.sub, lineHeight: 1.5, wordBreak: "keep-all" }}>
              AI가 이 이미지들의 스타일을 참고해서 그려요
            </p>
            <div className="flex flex-wrap gap-2">
              {aiStudio.referenceTones.map((tone, i) => (
                // 대상 썸네일(사각·직각)과 겹쳐 보이지 않도록 더 둥글게(pill에 가깝게)
                // + 강조색 테두리를 줘 "참고용"이라는 걸 형태로도 구분한다.
                <span key={i} className="group relative shrink-0 overflow-hidden" style={{ width: 40, height: 40, borderRadius: 14, background: tone, border: `1.5px solid ${C.primary}` }}>
                  <button
                    type="button"
                    aria-label="레퍼런스 삭제"
                    onClick={() => removeAt(i)}
                    className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100"
                    style={{ background: "rgba(0,0,0,0.5)" }}
                  >
                    <X size={13} strokeWidth={2.8} color="#FFFFFF" />
                  </button>
                </span>
              ))}
              <button
                type="button"
                onClick={() => aiStudio.addReferenceTone(REF_TONES[aiStudio.referenceTones.length % REF_TONES.length])}
                aria-label="레퍼런스 이미지 추가"
                className="shrink-0 flex items-center justify-center rounded-[8px] transition-colors hover:bg-[#F5F7FA]"
                style={{ width: 40, height: 40, border: "1.5px dashed #C9CFDA" }}
              >
                <Plus size={16} strokeWidth={2} color={C.sub} />
              </button>
            </div>

            {showAttachCheckbox && (
              <>
                <div style={{ height: 1, background: C.line }} />
                <button
                  type="button"
                  onClick={() => {
                    if (attachSelected) {
                      if (selfRefIndex.current !== null) removeAt(selfRefIndex.current);
                    } else {
                      selfRefIndex.current = aiStudio.referenceTones.length;
                      aiStudio.addReferenceTone(selectedImage!.tone);
                      setAttachSelected(true);
                    }
                  }}
                  className="flex items-center gap-2 rounded-[8px] px-1 py-1 -mx-1 transition-colors hover:bg-[#F5F7FA]"
                >
                  <span
                    className="shrink-0 inline-flex items-center justify-center rounded-[5px]"
                    style={{ width: 16, height: 16, background: attachSelected ? C.primary : C.card, border: `1px solid ${attachSelected ? C.primary : "#CBD2DE"}` }}
                  >
                    {attachSelected && <Check size={11} strokeWidth={3} color="#FFFFFF" />}
                  </span>
                  <span className="flex-1 min-w-0 text-left" style={{ fontSize: 13, fontWeight: 400, color: C.text }}>
                    캔버스에서 선택한 이미지 쓰기
                  </span>
                  <span className="shrink-0 rounded-[4px]" style={{ width: 24, height: 24, background: selectedImage!.tone, border: `1px solid ${C.line}` }} />
                </button>
              </>
            )}
          </div>
        </FloatingPopover>
      )}
    </div>
  );
}

/* ── 도움말 버튼 ──────────────────────────────────────────────────── */

function HelpButton({
  open, onToggle, triggerRef, dot,
}: { open: boolean; onToggle: () => void; triggerRef: React.RefObject<HTMLButtonElement>; dot?: boolean }) {
  return (
    <IconTooltip label="사용법">
      <button
        ref={triggerRef}
        type="button"
        aria-label="사용법"
        aria-pressed={open}
        onClick={onToggle}
        className="relative shrink-0 flex items-center justify-center rounded-[8px] w-9 h-9 transition-colors hover:bg-[#F4F6FA]"
        style={{ color: open ? C.primary : "#8A90A2" }}
      >
        <CircleHelp size={20} strokeWidth={1.7} />
        {/* 아직 안 열어 본 "크레딧 없이 아이콘 바꾸기" 안내가 있다는 신호 — 한 번 열면
            사라진다. 아이콘 바깥 모서리에 걸치면 시스템 알림 뱃지처럼 보여서(CTA 바로
            옆이라 더 그렇다), 아이콘 안쪽 모서리에 작게 넣고 색도 채도를 낮춘 보조
            강조색을 쓴다. */}
        {dot && (
          <span aria-hidden="true" className="absolute rounded-full" style={{ top: 8, right: 8, width: 4, height: 4, background: "#8DA0EF" }} />
        )}
      </button>
    </IconTooltip>
  );
}

/* ── 영역 목록 팝오버 내용 ────────────────────────────────────────── */

function RegionListPopoverContent({
  imageTone, regions, hoverRegionId, onHoverRegion, onChangeInstruction, onRemoveRegion, onReopenRegion,
}: {
  imageTone: string;
  regions: EditRegion[];
  hoverRegionId: string | null;
  onHoverRegion: (id: string | null) => void;
  onChangeInstruction: (regionId: string, v: string) => void;
  onRemoveRegion: (regionId: string) => void;
  onReopenRegion: (regionId: string) => void;
}) {
  return (
    <div className="p-3 flex flex-col gap-2" style={{ maxHeight: 320, overflowY: "auto" }}>
      <p style={{ fontSize: 13, fontWeight: 500, color: C.text }}>지정한 영역 {regions.length}개</p>
      {regions.length === 0 ? (
        <p style={{ fontSize: 12, color: C.sub, lineHeight: 1.6, wordBreak: "keep-all" }}>
          캔버스에서 고칠 부분을 드래그로 지정해주세요.
        </p>
      ) : (
        <ul className="flex flex-col gap-2">
          {regions.map((region, i) => {
            const filled = region.instruction.trim().length > 0;
            const done = region.status === "done";
            return (
              <li
                key={region.id}
                onMouseEnter={() => onHoverRegion(region.id)}
                onMouseLeave={() => onHoverRegion(null)}
                className="flex items-center gap-2 rounded-[8px] px-2 py-2 transition-colors"
                style={{
                  background: hoverRegionId === region.id ? "#F5F7FA" : "transparent",
                  border: `1px solid ${done ? C.success : C.line}`,
                }}
              >
                <span
                  className="shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: 22, height: 22, fontSize: 11, fontWeight: 500, color: "#FFFFFF",
                    background: done ? C.success : filled ? C.primary : C.off,
                  }}
                >
                  {region.status === "processing"
                    ? <Loader2 size={12} strokeWidth={2.6} className="animate-spin" />
                    : done ? <Check size={12} strokeWidth={3} /> : i + 1}
                </span>
                <span className="shrink-0 rounded-[5px]" style={{ width: 30, height: 24, background: imageTone, border: `1px solid ${C.line}` }} />
                <input
                  value={region.instruction}
                  onChange={(e) => onChangeInstruction(region.id, e.target.value)}
                  placeholder="이 영역을 어떻게 바꿀까요"
                  readOnly={done}
                  disabled={region.status === "processing"}
                  className="flex-1 min-w-0 h-8 rounded-[6px] px-2"
                  style={{ border: `1px solid ${C.line}`, fontSize: 12.5, color: C.text, ...font }}
                />
                {region.status === "idle" && (
                  <button
                    type="button"
                    aria-label="영역 삭제"
                    onClick={() => onRemoveRegion(region.id)}
                    className="shrink-0 w-7 h-7 rounded-[6px] flex items-center justify-center transition-colors hover:bg-[#F2F4F8]"
                    style={{ color: C.sub }}
                  >
                    <X size={13} strokeWidth={2.2} />
                  </button>
                )}
                {done && (
                  <button
                    type="button"
                    aria-label="결과 되돌리기"
                    title="결과를 되돌리고 다시 수정할 수 있어요"
                    onClick={() => onReopenRegion(region.id)}
                    className="shrink-0 w-7 h-7 rounded-[6px] flex items-center justify-center transition-colors hover:bg-[#F2F4F8]"
                    style={{ color: C.sub }}
                  >
                    <RotateCcw size={13} strokeWidth={2.2} />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

const GUIDE_STEPS = [
  "캔버스에 드래그해 영역을 그려요",
  "영역 옆 칸에 바꿀 내용을 적어요",
  "위 버튼을 눌러 적용해요",
];

function RegionHintPopoverContent({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="p-3.5 flex flex-col gap-2.5">
      <ol className="flex flex-col gap-1.5">
        {GUIDE_STEPS.map((step, i) => (
          <li key={i} className="flex items-start gap-2">
            <span style={{ fontSize: 12.5, fontWeight: 500, color: C.primary }}>{i + 1}</span>
            <span style={{ fontSize: 12.5, color: C.text, lineHeight: 1.5, wordBreak: "keep-all" }}>{step}</span>
          </li>
        ))}
      </ol>
      <button
        type="button"
        onClick={onDismiss}
        className="self-end"
        style={{ fontSize: 12.5, fontWeight: 500, color: C.primary }}
      >
        알겠어요
      </button>
    </div>
  );
}

/**
 * 도움말(?) 팝오버 — 대상에 따라 내용이 갈린다. 예전엔 "영역 지정" 사용법 3단계만
 * 있었는데, 그걸 다른 대상에서 열어도 그대로 보여 줘서(영역 얘기가 아이콘 만들 때
 * 뜨는 식으로) 맥락에 안 맞았다.
 *   영역 지정  → 기존 3단계 그대로.
 *   아이콘     → "픽토그램을 우측 패널에서 무료로 바꿀 수 있다"는, 크레딧을 안 쓰는
 *               대안 안내(구버전 모달 하단에 있었는데 이번 통합 과정에서 빠졌다).
 *   그 외      → [가정] 스펙에 없는 대상들 — 도움말 버튼이 빈 팝오버를 여는 걸
 *               막을 최소한의 한 줄만 채운다.
 */
function HelpPopoverContent({ target, onDismiss }: { target: AITargetKind; onDismiss: () => void }) {
  if (target === "edit-region") return <RegionHintPopoverContent onDismiss={onDismiss} />;

  if (target === "icon") {
    return (
      <div className="p-3.5 flex flex-col gap-1.5">
        <p style={{ fontSize: 12.5, fontWeight: 500, color: C.text }}>크레딧 없이 아이콘 바꾸기</p>
        <p style={{ fontSize: 12.5, color: C.sub, lineHeight: 1.6, wordBreak: "keep-all" }}>
          픽토그램을 선택한 뒤 우측 패널에서 무료로 교체할 수 있어요
        </p>
      </div>
    );
  }

  return (
    <div className="p-3.5">
      <p style={{ fontSize: 12.5, color: C.sub, lineHeight: 1.6, wordBreak: "keep-all" }}>
        프롬프트를 적고 실행 버튼을 누르면 만들어져요
      </p>
    </div>
  );
}

/* ── 결과 팝오버(생성 계열) ───────────────────────────────────────── */

function CreateResultPopover({
  tone, kindLabel, cost, onAdd, onRegenerate, onDiscard,
}: { tone: string; kindLabel: string; cost: number; onAdd: () => void; onRegenerate: () => void; onDiscard: () => void }) {
  return (
    <div className="p-3 flex flex-col gap-3" style={{ width: 240 }}>
      <div className="flex items-center gap-2.5">
        <span className="shrink-0 rounded-[8px]" style={{ width: 48, height: 48, background: tone, border: `1px solid ${C.line}` }} />
        <div className="min-w-0">
          <p style={{ fontSize: 13, fontWeight: 500, color: C.text }}>{kindLabel} 생성 완료</p>
          <p style={{ fontSize: 12, color: C.sub }}>{formatCreditShort(cost)} 사용</p>
        </div>
      </div>
      <button
        type="button"
        onClick={onAdd}
        className="w-full h-9 rounded-[8px] transition-[filter] hover:brightness-[0.97]"
        style={{ background: C.ctaPrimary, color: "#FFFFFF", fontSize: 13, fontWeight: 500 }}
      >
        캔버스에 넣기
      </button>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onRegenerate}
          className="flex-1 h-8 rounded-[8px] transition-colors hover:bg-[#F5F7FA]"
          style={{ border: `1px solid ${C.line}`, color: C.text, fontSize: 12.5, fontWeight: 400 }}
        >
          다시 만들기
        </button>
        <button
          type="button"
          onClick={onDiscard}
          className="flex-1 h-8 rounded-[8px] transition-colors hover:bg-[#F5F7FA]"
          style={{ color: C.sub, fontSize: 12.5, fontWeight: 400 }}
        >
          버리기
        </button>
      </div>
    </div>
  );
}

/* ── AI 바 ────────────────────────────────────────────────────────── */

/** 대상별 예시 프롬프트 — 예전엔 유형마다 다른 예시가 있었는데(placeholder 로),
 *  전부 "무엇을 그릴지 적어주세요"로 통일되며 그 힌트가 사라졌었다. 되살린다. */
const PROMPT_PLACEHOLDER: Record<AITargetKind, string> = {
  icon: "예: 파란 로켓 픽토그램, 미니멀 라인",
  illustration: "예: 회의 중인 비즈니스 팀, 플랫 일러스트",
  background: "예: 부드러운 파란 그라데이션 추상 배경",
  "edit-whole": "예: 배경을 노을 지는 하늘로 바꿔줘",
  "edit-region": "",
};

/** 입력이 비어 있을 때 바 아래 칩으로 보여줄 예시 — placeholder 와 같은 문구 하나 +
 *  짧은 변형 하나씩. "영역 지정"은 바에 입력 자체가 없어 칩도 없다. */
const EXAMPLE_CHIPS: Record<AICreateKind | "edit-whole", string[]> = {
  icon: ["파란 로켓 픽토그램, 미니멀 라인", "체크마크 원형 아이콘, 플랫"],
  illustration: ["회의 중인 비즈니스 팀, 플랫 일러스트", "노트북 보는 사람, 파스텔톤"],
  background: ["부드러운 파란 그라데이션 추상 배경", "옅은 그리드 패턴 배경"],
  "edit-whole": ["배경을 노을 지는 하늘로 바꿔줘", "전체적으로 더 밝게 보정해줘"],
};

export interface AIBarProps {
  target: AITargetKind;
  /**
   * 좁은 폭 압축 단계 — 뷰포트가 아니라 캔버스 컨테이너의 실제 폭(호출부의
   * useElementWidth)을 기준으로 호출부가 판정해 내려준다. 우선순위대로 하나씩
   * 떨어뜨린다:
   *   0 (≥760px) 기본 — placeholder 전체 문구, 예시 칩 2개, 모드명 전체 텍스트,
   *     입력 최소폭 320px, CTA 전체 텍스트, 도움말 노출
   *   1 (620~760) placeholder "무엇을 만들까요" 로 축약, 예시 칩 1개, 입력
   *     최소폭 260px
   *   2 (520~620) 예시 칩 숨김, 모드명 텍스트 숨김(아이콘+⌄ 만, 툴팁으로 이름),
   *     입력 최소폭 200px
   *   3 (440~520) 입력 최소폭 160px
   *   4 (<440) 입력 최소폭 120px, CTA 텍스트를 "동사 생략, 아이콘+크레딧"만으로,
   *     도움말 버튼을 숨김(참고 이미지는 이미 아이콘 전용이라 더 줄일 게 없다)
   */
  compactLevel?: 0 | 1 | 2 | 3 | 4;
  onTargetChange: (k: AITargetKind) => void;
  selectedImage: EditorImage | null;
  aiStudio: UseAIStudio;
  regions: EditRegion[];
  hoverRegionId: string | null;
  onHoverRegion: (id: string | null) => void;
  onChangeInstruction: (regionId: string, v: string) => void;
  onRemoveRegion: (regionId: string) => void;
  /** 완료된 영역을 다시 손볼 수 있게 대기 상태로 되돌린다(영역 목록 팝오버의
   *  "다시 수정하기"가 쓴다 — 박스 자체의 되돌리기는 RegionEditOverlay 가 직접 처리). */
  onReopenRegion: (regionId: string) => void;
  ctaLabel: string;
  ctaDisabled: boolean;
  ctaBusy: boolean;
  onRun: () => void;
  onAddImage: () => void;
  /** 생성 결과를 캔버스에 넣는 완료 토스트에 한 번만 덧붙일 문구 — 이미 보여준 뒤엔
   *  호출부가 undefined 로 내려보낸다. */
  dragHint?: string;
  onClose: () => void;
  hintDismissed: boolean;
  onDismissHint: () => void;
  /** 대상 드롭다운이 열려 있는 동안 호출부가 캔버스 이미지에 "고를 수 있어요" 외곽선을
   *  띄울 수 있도록 열림 여부를 올려보낸다. */
  onTargetPickerOpenChange?: (open: boolean) => void;
  /** "N번 영역에 바꿀 내용을 적어주세요" 경고를 눌렀을 때 그 영역의 말풍선을 열어
   *  달라고 호출부(TabletMiniEditor)에 부탁한다 — 말풍선 상태는 캔버스 쪽(RegionEditOverlay)에 있다. */
  onFocusRegion?: (regionId: string) => void;
}

export function AIBar({
  target, compactLevel = 0, onTargetChange, selectedImage, aiStudio, regions, hoverRegionId, onHoverRegion,
  onChangeInstruction, onRemoveRegion, onReopenRegion, ctaLabel, ctaDisabled, ctaBusy, onRun, onAddImage,
  dragHint, onClose, hintDismissed, onDismissHint, onTargetPickerOpenChange, onFocusRegion,
}: AIBarProps) {
  const [promptFocused, setPromptFocused] = useState(false);
  const [hintOpen, setHintOpen] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  /** "크레딧 없이 아이콘 바꾸기" 안내를 아이콘 대상에서 한 번이라도 열어 봤는지 —
   *  열면 도움말 버튼의 점이 사라진다. */
  const [iconTipSeen, setIconTipSeen] = useState(false);
  const helpRef = useRef<HTMLButtonElement>(null);
  const promptInputRef = useRef<HTMLTextAreaElement>(null);
  const isRegion = target === "edit-region";

  /**
   * 프롬프트는 이제 별도 레이어로 뜨는 확장 팝오버가 아니라, 바 자신을 아래로 늘려
   * 보여준다(입력 필드와 폭·위치가 어긋나던 문제, placeholder 가 두 번 뜨던 문제가
   * 둘 다 이 구조 자체에서 비롯됐었다 — 팝오버를 없애면 원천적으로 사라진다).
   *
   * textarea 높이는 내용에 맞춰 스스로 잰다(포커스 여부와 무관 — 짧으면 항상 한 줄,
   * 길게 썼다면 포커스를 잃어도 계속 보인다. 타이핑 도중에만 커지고 눈을 떼면
   * 줄어드는 쪽이 오히려 방금 쓴 걸 숨기는 나쁜 경험이다). scrollHeight 를 재려면
   * 먼저 height 를 auto 로 풀어야 하므로 커밋 전에 그 값을 읽어 state 로 못박는다.
   */
  const [promptH, setPromptH] = useState(PROMPT_LINE_H);
  useLayoutEffect(() => {
    const el = promptInputRef.current;
    if (!el) return;
    el.style.height = "auto";
    const needed = Math.min(Math.max(el.scrollHeight, PROMPT_LINE_H), PROMPT_MAX_H);
    setPromptH(needed);
  }, [aiStudio.prompt, target]);
  // "영역 지정"은 입력 자체가 없어 바가 늘 56px 한 줄이다.
  const barHeight = isRegion ? BAR_H : BAR_PAD_V * 2 + promptH;

  useEffect(() => {
    if (isRegion && !hintDismissed) setHintOpen(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRegion, hintDismissed]);

  const closeHint = () => {
    setHintOpen(false);
    // "영역 지정" 온보딩만 세션 동안 한 번 본 걸로 기록해 둔다(호출부가 그 여부로
    // 자동 재오픈을 막는다) — 아이콘 무료 팁은 그 자동-오픈 매커니즘이 아니라 뱃지
    // 점으로만 "안 봤다"를 표시하므로 별도로 로컬에서만 끈다.
    if (isRegion) onDismissHint();
    if (target === "icon") setIconTipSeen(true);
  };

  const showUndo = !!(aiStudio.lastEditUndo && selectedImage && aiStudio.lastEditUndo.imageId === selectedImage.id);

  // 지시문이 빈 영역 중 가장 첫 번째 — 바 아래 안내 캡션과 그 클릭 대상이 함께 쓴다.
  // 이미 처리 중이거나 끝난 영역은 대상에서 뺀다 — "지금 이대로 실행하면"이라는 경고의
  // 전제 자체가 실행이 아직 안 끝난 영역에만 성립한다.
  const emptyRegionIndex = isRegion ? regions.findIndex((r) => r.status === "idle" && !r.instruction.trim()) : -1;

  // 바 아래에 뜨는 안내 한 줄 — 세 조건 중 하나만 해당한다(대상이 서로 겹치지 않는다).
  // "위치 지정" 토글 관련 조건은 그 기능 자체가 아직 없어 이번 범위에서 뺐다.
  const barHint: { text: string; onClick?: () => void } | null = isRegion
    ? (regions.length === 0
      ? { text: "캔버스에 드래그해서 바꿀 곳을 표시해 주세요" }
      : emptyRegionIndex >= 0
        ? { text: `${emptyRegionIndex + 1}번 영역에 바꿀 내용을 적어주세요`, onClick: () => onFocusRegion?.(regions[emptyRegionIndex].id) }
        : null)
    : (target === "edit-whole" && !selectedImage)
      ? { text: "수정할 이미지를 캔버스에서 선택해 주세요" }
      : null;

  // 만들기 대상, 그리고 이미지가 선택된 "이미지 전체" + 빈 프롬프트일 때 예시 칩을
  // 보여준다(선택이 없는 "이미지 전체"는 barHint 가 "이미지를 선택해주세요"를 이미
  // 보여주므로 칩까지 겹칠 이유가 없다). 결과 팝오버가 떠 있거나 프롬프트가 펼쳐진
  // 동안은 같은 자리(바 아래)를 두고 부딪히니 양보한다.
  const chipTarget: AICreateKind | "edit-whole" | null =
    isCreateTarget(target) ? target : (target === "edit-whole" && selectedImage) ? "edit-whole" : null;
  // 압축 2단계부터는 칩이 설 자리부터 없다고 보고 먼저 접는다(우선순위표 2번째 줄).
  const showChips = compactLevel < 2 && !!chipTarget && !aiStudio.createResult && !promptFocused && aiStudio.prompt.trim() === "";
  const visibleChipCount = compactLevel >= 1 ? 1 : 2;

  // 입력 최소폭 — 압축 단계마다 한 단씩 줄인다(우선순위표 1번째 줄과 짝지어, 폭이
  // 진짜로 좁아지는 만큼만 줄어들게). 320 은 그대로 두고(A-6/A-9 라운드에서 정한 값),
  // 그 아래 네 단계만 새로 추가한다.
  const promptMinWidth = [320, 260, 200, 160, 120][compactLevel];
  // CTA 는 4단계에서만 동사를 생략하고 "아이콘 + 크레딧"만 남긴다 — 지금 라벨
  // 포맷이 전부 "{동사} · {크레딧}C" 로 통일돼 있어(A-6/A-7) " · " 뒤쪽만 뽑으면
  // 안전하게 크레딧만 남는다. "완료"/"크레딧이 부족해요"처럼 그 구분자가 없는
  // 상태 라벨은 이미 짧으니 그대로 둔다.
  const ctaCompactSuffix = ctaLabel.includes(" · ") ? ctaLabel.split(" · ")[1] : null;
  const ctaShown = compactLevel >= 4 && ctaCompactSuffix ? ctaCompactSuffix : ctaLabel;

  // 레퍼런스 드래그앤드롭 — 바(과 그 안의 팝오버)를 통째로 드롭 영역으로 쓴다. 캔버스의
  // 이미지 객체를 끌어오면 BoardImage 가 dragstart 에 실어 둔 톤 값을 그대로 쓰고, 그 외
  // (OS 파일 등)는 "+" 버튼과 같은 목업 톤 순환으로 채운다. "영역 지정" 대상에는 레퍼런스
  // 자체가 없으니 이 핸들러들도 그 상태에서는 아무 일도 하지 않는다.
  const handleDrop = (e: React.DragEvent) => {
    if (isRegion) return;
    e.preventDefault();
    setDragOver(false);
    const tone = e.dataTransfer.getData("application/x-board-image-tone");
    if (tone) { aiStudio.addReferenceTone(tone); return; }
    if (e.dataTransfer.files.length > 0) {
      aiStudio.addReferenceTone(REF_TONES[aiStudio.referenceTones.length % REF_TONES.length]);
    }
  };

  return (
    <div className="relative">
      <div
        className="flex w-full"
        style={{
          height: barHeight,
          transitionProperty: "height, width",
          transitionDuration: "150ms",
          transitionTimingFunction: "ease-out",
          // 상단 y좌표는 호출부(TabletMiniEditor)가 고정해 앵커한다 — 이 안에서는
          // alignItems 를 flex-start 로 두고 아래 padding 만큼을 모든 컨트롤의
          // 공통 상단 여백으로 써서, 바가 커져도 다들 첫 줄 자리에 그대로 머문다.
          alignItems: "flex-start",
          background: C.card,
          borderRadius: 12,
          boxShadow: dragOver ? `0 0 0 2px ${C.primary} inset, ${SHADOW_BAR}` : SHADOW_BAR,
          padding: `${BAR_PAD_V}px 12px`,
          gap: 8,
          ...font,
        }}
        onDragOver={isRegion ? undefined : (e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={isRegion ? undefined : () => setDragOver(false)}
        onDrop={isRegion ? undefined : handleDrop}
      >
        <TargetChip
          target={target}
          compactLevel={compactLevel}
          onTargetChange={onTargetChange}
          selectedImage={selectedImage}
          hoverRegionId={hoverRegionId}
          onHoverRegion={onHoverRegion}
          regions={regions}
          onChangeInstruction={onChangeInstruction}
          onRemoveRegion={onRemoveRegion}
          onReopenRegion={onReopenRegion}
          onFocusRegion={onFocusRegion}
          onDropdownOpenChange={onTargetPickerOpenChange}
        />

        {/* "영역 지정"일 때는 이 바에 프롬프트를 아예 그리지 않는다 — 입력은 캔버스의
            인라인 말풍선 한 곳에서만 받는다. 대신 CTA 앞에 구분선을 둬 칩 그룹과
            실행 그룹을 가른다(다른 대상에서는 입력창 자체가 그 구분 역할을 한다). */}
        {isRegion ? (
          <span aria-hidden="true" className="shrink-0" style={{ width: 1, height: 36, marginTop: 0, background: C.line }} />
        ) : (
          <>
            {/* 입력이 남는 폭을 전부 가져간다 — 이 바에서 가장 중요한 컨트롤인데
                예전엔 가장 좁았다. 확장은 더 이상 별도 레이어가 아니라 이 칸 자신이
                textarea 로 아래까지 자라는 것뿐이라, 폭·위치가 어긋날 여지 자체가
                없다(예전엔 그게 실제 버그였다). */}
            <div
              className="flex-1 flex items-center rounded-[8px] transition-colors"
              style={{
                minWidth: promptMinWidth,
                transition: "min-width 150ms ease-out, border-color 150ms ease",
                border: `1px solid ${promptFocused ? C.primary : C.line}`,
                background: promptFocused ? C.card : C.surface,
              }}
            >
              <textarea
                ref={promptInputRef}
                value={aiStudio.prompt}
                onChange={(e) => aiStudio.setPrompt(e.target.value)}
                onFocus={() => setPromptFocused(true)}
                onBlur={() => setPromptFocused(false)}
                placeholder={compactLevel >= 1 ? "무엇을 만들까요" : PROMPT_PLACEHOLDER[target]}
                rows={1}
                className="w-full resize-none outline-none bg-transparent"
                style={{
                  height: promptH,
                  overflowY: promptH >= PROMPT_MAX_H ? "auto" : "hidden",
                  transition: "height 150ms ease-out",
                  border: "none",
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: "20px",
                  color: C.text,
                  padding: "8px 10px",
                  ...font,
                }}
              />
            </div>

            <ReferenceControl target={target} selectedImage={selectedImage} aiStudio={aiStudio} />
          </>
        )}

        {showUndo && (
          <button
            type="button"
            onClick={aiStudio.undoLastEdit}
            className="shrink-0 rounded-[8px] px-2 h-9 transition-colors hover:bg-[#F5F7FA]"
            style={{ fontSize: 12.5, fontWeight: 500, color: C.primary, whiteSpace: "nowrap" }}
          >
            되돌리기
          </button>
        )}

        <button
          type="button"
          onClick={onRun}
          disabled={ctaDisabled}
          className="shrink-0 flex items-center gap-2 rounded-[8px] px-3.5 h-9 transition-[filter] enabled:hover:brightness-[0.97] disabled:cursor-default"
          style={{
            background: !ctaDisabled ? C.ctaPrimary : "#E7EAF0",
            color: !ctaDisabled ? "#FFFFFF" : C.sub,
          }}
        >
          {ctaBusy && <Loader2 size={14} strokeWidth={2.4} className="animate-spin" />}
          {/* 4단계 압축에서는 동사를 생략하고 아이콘 + 크레딧만 남긴다 — 라벨이
              "{동사} · {크레딧}C" 로 통일돼 있어(A-6/A-7) 뒤쪽만 안전하게 뽑힌다. */}
          {compactLevel >= 4 && ctaShown !== ctaLabel && <Sparkles size={14} strokeWidth={2} />}
          <span style={{ fontSize: 14, fontWeight: 500, whiteSpace: "nowrap" }}>{ctaShown}</span>
        </button>

        {/* 4단계 압축에서는 도움말을 숨긴다 — 참고 이미지는 이미 아이콘 전용이라
            더 줄일 게 없고, 도움말이 이 바에서 가장 부차적인 기능이다. */}
        {compactLevel < 4 && (
          <>
            <HelpButton
              open={hintOpen}
              onToggle={() => {
                setHintOpen((v) => !v);
                if (target === "icon") setIconTipSeen(true);
              }}
              triggerRef={helpRef}
              dot={target === "icon" && !iconTipSeen}
            />

            {/* "기능"(도움말)과 "닫기"를 시각적으로 가른다 — 성격이 다른 버튼이 바로
                붙어 있으면 실수로 바를 통째로 닫기 쉽다. */}
            <span aria-hidden="true" className="shrink-0" style={{ width: 1, height: 36, background: C.line }} />
          </>
        )}

        <IconTooltip label="닫기">
          <button
            type="button"
            aria-label="닫기"
            onClick={onClose}
            className="shrink-0 flex items-center justify-center rounded-[8px] w-9 h-9 transition-colors hover:bg-[#F4F6FA]"
            style={{ color: "#8A90A2" }}
          >
            <X size={17} strokeWidth={1.8} />
          </button>
        </IconTooltip>
      </div>

      {hintOpen && compactLevel < 4 && (
        <FloatingPopover anchorRef={helpRef} onClose={closeHint} width={260} align="right" caret flip>
          <HelpPopoverContent target={target} onDismiss={closeHint} />
        </FloatingPopover>
      )}

      {/* 바 아래 안내 한 줄 — 빈 상태에서 다음에 뭘 해야 하는지 알려준다. 클릭 대상이
          있으면(지시문 누락 케이스) 버튼으로, 아니면 그냥 텍스트로 그린다. */}
      {barHint && (
        barHint.onClick ? (
          <button
            type="button"
            onClick={barHint.onClick}
            className="absolute text-left transition-colors hover:brightness-[0.9]"
            style={{ top: "calc(100% + 8px)", left: 0, fontSize: 12, fontWeight: 400, color: C.sub, whiteSpace: "nowrap", ...font }}
          >
            {barHint.text}
          </button>
        ) : (
          <p
            className="absolute"
            style={{ top: "calc(100% + 8px)", left: 0, fontSize: 12, fontWeight: 400, color: C.sub, whiteSpace: "nowrap", ...font }}
          >
            {barHint.text}
          </p>
        )
      )}

      {/* 예시 프롬프트 칩 — 만들기 대상 + 빈 입력일 때만. 누르면 그 문구로 채우고
          입력에 포커스를 넣어 바로 이어 쓸 수 있게 한다. */}
      {showChips && chipTarget && (
        <div className="absolute flex items-center gap-1.5 flex-wrap" style={{ top: "calc(100% + 8px)", left: 0, right: 0 }}>
          {EXAMPLE_CHIPS[chipTarget].slice(0, visibleChipCount).map((text, i) => (
            <button
              key={i}
              type="button"
              onClick={() => { aiStudio.setPrompt(text); promptInputRef.current?.focus(); }}
              className="rounded-full transition-colors hover:bg-[#EEF1FF]"
              style={{
                padding: "4px 10px", background: C.surface, border: `1px solid ${C.line}`,
                fontSize: 12, fontWeight: 400, color: C.sub, whiteSpace: "nowrap", ...font,
              }}
            >
              {text}
            </button>
          ))}
        </div>
      )}

      {aiStudio.createResult && (
        <div className="absolute z-30" style={{ top: "calc(100% + 8px)", left: 0 }}>
          <div
            className="rounded-[12px] overflow-hidden"
            style={{ background: C.card, border: `1px solid ${C.line}`, boxShadow: SHADOW_POPOVER, ...font }}
          >
            <CreateResultPopover
              tone={aiStudio.createResult.tone}
              kindLabel={AI_CREATE_KINDS.find((k) => k.id === aiStudio.createResult!.kind)?.label ?? ""}
              cost={aiStudio.createResult.cost}
              onAdd={() => aiStudio.commitCreateResult(onAddImage, dragHint)}
              onRegenerate={aiStudio.regenerate}
              onDiscard={aiStudio.discardCreateResult}
            />
          </div>
        </div>
      )}
    </div>
  );
}
