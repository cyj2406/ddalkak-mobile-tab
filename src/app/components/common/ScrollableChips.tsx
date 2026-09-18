import { useEffect, useRef, useState, type KeyboardEvent } from "react";

import { cn } from "@/app/components/ui/utils";
import { color, motion } from "@/app/styleTokens";

const CHIP_FONT = { fontFamily: "'Pretendard Variable', sans-serif" } as const;
/** outline variant는 배경/테두리를 인라인 style로 계산해서 Tailwind hover: 클래스가 안 먹는다
 *  (Button.tsx와 같은 이유) — hover/pressed도 같은 방식(JS 상태)으로 계산한다. */
const CHIP_TRANSITION = `background-color ${motion.fast}, border-color ${motion.fast}, color ${motion.fast}`;

type Variant = "solid" | "outline" | "underline";

/** 포커스 링 — Button.tsx와 같은 이유로 outline 대신 ring 을 쓴다(theme.css 전역
 *  outline-ring/50 규칙과 Tailwind outline-none 이 캐스케이드 순서를 두고 충돌해
 *  outline-style 이 항상 "none"으로 덮인다는 걸 확인했다). 선택 상태(파란 테두리/배경)와
 *  겹쳐도 육안으로 구분되도록 offset 을 둔다. */
const FOCUS_RING_CLASS = "outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#4f7bff]";

export interface ScrollableChipsProps {
  items: string[];
  activeIndex: number;
  onChange: (index: number) => void;
  /**
   * solid: 선택 시 검정 채움 + 흰 텍스트 (크레딧/템플릿 필터)
   * outline: 선택 시 파란 테두리 + 파란 텍스트 (상세 프롬프트 섹션 칩) — 칩마다 각자
   *   테두리가 있어 "독립된 버튼 여러 개"로 보인다.
   * underline: 배경 채움이 전혀 없는 순수 텍스트 탭 — 선택된 항목만 진한 텍스트 +
   *   brand 밑줄로 표시한다. 값이 같은 옵션을 고르는 toggle/switch가 아니라 서로 다른
   *   화면(콘텐츠)으로 이동하는 navigation임을 보여줘야 할 때 쓴다(요금제 페이지의
   *   "월 구독 요금제 / 추가 크레딧 충전"). 회색 트랙·pill·둥근 배경을 두지 않는다.
   */
  variant?: Variant;
  /**
   * true면 activeIndex 변경 시마다 선택 칩을 부드럽게 가운데로 스크롤.
   * false(기본)면 마운트 1회만 정렬하고 이후 스크롤 위치는 유지.
   */
  centerActiveOnChange?: boolean;
  /**
   * 부모의 좌우 패딩을 상쇄하는 엣지 블리드 클래스.
   * 부모 패딩값에 맞춰 전달한다 (기본은 px-4 부모 기준). 예) 카드 px-[18px] → "-mx-[18px] px-[18px]"
   */
  edgeClassName?: string;
  className?: string;
  /**
   * "tablist" 로 주면 콘텐츠 패널을 완전히 갈아 끼우는 진짜 탭으로 동작한다 —
   * role="tablist"/"tab", aria-selected, roving tabIndex, 방향키·Home/End 이동을 추가한다.
   * 생략(기본값)하면 지금까지의 필터 칩 그대로다(각 버튼이 독립적으로 Tab 순서에 들어가고
   * 방향키 이동은 없음) — 크레딧 사용 내역의 "사용 내역/환불·충전 내역"처럼 같은 목록을
   * 좁히는 필터에는 tab 역할을 강제하지 않는다.
   *
   * 시각적으로는 두 모드가 완전히 동일하다 — 접근성 트리와 키보드 동작만 갈린다.
   */
  role?: "tablist";
  /**
   * role="tablist" 일 때, 각 탭이 제어하는 패널의 id(선택 사항). 주면 각 탭 버튼에
   * `aria-controls`를 붙이고, 탭 자신의 id는 `${panelIds[i]}-tab` 로 자동 생성해
   * 패널 쪽 `aria-labelledby`와 연결할 수 있게 한다.
   */
  panelIds?: string[];
}

/** 탭 버튼 id — 패널 쪽 aria-labelledby 가 참조할 수 있는 안정적인 값. */
export function tabIdFor(panelId: string) {
  return `${panelId}-tab`;
}

/**
 * 한 줄 가로 스크롤 pill 칩 그룹 (크레딧 사용 내역 · 템플릿 목록 · 상세 프롬프트 섹션 · 요금제 탭 공용).
 * - 줄바꿈 없이 좌우 스크롤, 스크롤바 숨김, overscroll-x-contain으로 부모 스크롤 충돌 방지
 * - `-mx px` 엣지 블리드로 칩이 부모 안쪽 패딩이 아니라 좌우 끝선까지 흘러가 "더 있다"를 인지시킴
 * - py-1로 선택 칩의 테두리가 세로로 잘리지 않도록 여유 확보
 * - 선택 칩이 뷰포트 밖이면 가운데로 스크롤 (centerActiveOnChange로 전환 시 동작까지 확장)
 */
export function ScrollableChips({
  items,
  activeIndex,
  onChange,
  variant = "solid",
  centerActiveOnChange = false,
  edgeClassName = "-mx-4 px-4",
  className,
  role,
  panelIds,
}: ScrollableChipsProps) {
  const isTablist = role === "tablist";
  const activeRef = useRef<HTMLButtonElement>(null);
  const mounted = useRef(false);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  // 롤빙 tabIndex 는 "포커스"를 따라가지 "선택"을 따라가지 않는다(수동 활성화 패턴) —
  // 방향키로 옮겨 다니는 동안은 선택이 바뀌지 않고, Enter/Space(네이티브 버튼 클릭)를
  // 눌러야 실제로 onChange 가 불린다. 그래서 "포커스된 탭"과 "선택된 탭"이 다를 수 있고,
  // 그 둘을 시각적으로 구분해야 한다(focus-visible 링 vs 선택 배경/테두리).
  const [focusedIndex, setFocusedIndex] = useState(activeIndex);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);

  useEffect(() => {
    const el = activeRef.current;
    if (el && (!mounted.current || centerActiveOnChange)) {
      el.scrollIntoView({
        inline: "center",
        block: "nearest",
        behavior: mounted.current ? "smooth" : "auto",
      });
    }
    mounted.current = true;
  }, [activeIndex, centerActiveOnChange]);

  // 외부에서 activeIndex 가 바뀌면(예: 다른 진입점에서 특정 탭으로 바로 열기) 롤빙 포커스 기준도 맞춘다.
  useEffect(() => { setFocusedIndex(activeIndex); }, [activeIndex]);

  const moveFocus = (nextIndex: number) => {
    const clamped = Math.max(0, Math.min(items.length - 1, nextIndex));
    setFocusedIndex(clamped);
    buttonRefs.current[clamped]?.focus();
    if (centerActiveOnChange) {
      buttonRefs.current[clamped]?.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" });
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    if (!isTablist) return;
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        moveFocus(i + 1);
        break;
      case "ArrowLeft":
        e.preventDefault();
        moveFocus(i - 1);
        break;
      case "Home":
        e.preventDefault();
        moveFocus(0);
        break;
      case "End":
        e.preventDefault();
        moveFocus(items.length - 1);
        break;
      // Enter/Space 는 <button> 네이티브 동작이 onClick(=onChange)을 그대로 불러 준다.
    }
  };

  return (
    <div
      role={isTablist ? "tablist" : undefined}
      aria-orientation={isTablist ? "horizontal" : undefined}
      className={cn(
        "flex items-center overflow-x-auto overscroll-x-contain whitespace-nowrap [&::-webkit-scrollbar]:hidden",
        variant === "underline" ? "gap-8" : "gap-2 py-1",
        edgeClassName,
        className,
      )}
      style={{ scrollbarWidth: "none" }}
    >
      {items.map((label, i) => {
        const selected = i === activeIndex;
        const panelId = panelIds?.[i];
        const tabProps = isTablist
          ? {
              role: "tab" as const,
              "aria-selected": selected,
              id: panelId ? tabIdFor(panelId) : undefined,
              "aria-controls": panelId,
              tabIndex: i === focusedIndex ? 0 : -1,
              onKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => onKeyDown(e, i),
              onFocus: () => setFocusedIndex(i),
            }
          : {};

        const hovered = hoveredIndex === i;
        const isPressed = pressedIndex === i;
        const clearPress = () => setPressedIndex((v) => (v === i ? null : v));

        if (variant === "underline") {
          // 배경·테두리 채움이 전혀 없다 — 선택 여부는 텍스트 색·굵기와 밑줄(bottom
          // border)만으로 나타낸다. 비선택 탭도 항상 같은 두께의 투명 밑줄을 깔아 둬서
          // 선택이 바뀔 때 밑줄이 생기고 사라지며 높이가 흔들리지 않게 한다. hover는
          // 비선택 탭의 텍스트만 살짝 진해질 뿐 배경은 그대로 비워 둔다.
          const textColor = selected ? color.text.primary : hovered || isPressed ? "#475569" : "#64748b";
          return (
            <button
              key={label}
              ref={(el) => {
                buttonRefs.current[i] = el;
                if (selected) activeRef.current = el;
              }}
              onClick={() => onChange(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => { setHoveredIndex((v) => (v === i ? null : v)); clearPress(); }}
              onMouseDown={() => setPressedIndex(i)}
              onMouseUp={clearPress}
              className={cn("shrink-0", FOCUS_RING_CLASS)}
              style={{
                ...CHIP_FONT,
                fontSize: 14.5,
                fontWeight: selected ? 700 : 500,
                color: textColor,
                background: "transparent",
                border: "none",
                borderBottom: `2px solid ${selected ? color.brand : "transparent"}`,
                padding: "0 0 9px",
                transition: CHIP_TRANSITION,
              }}
              {...tabProps}
            >
              {label}
            </button>
          );
        }

        if (variant === "outline") {
          // 선택되지 않은 칩의 hover/pressed는 선택 상태(파란 배경)와 겹치지 않도록
          // 테두리·배경만 한 단계 진하게 한다 — "골랐다"가 아니라 "누를 수 있다"는 신호.
          const borderColor = selected ? "#3B5BFE" : isPressed ? "#B7C2E0" : hovered ? "#C7D0E8" : "#E3E6EB";
          const background = selected ? "#ECEFFE" : isPressed ? "#EEF1FA" : hovered ? "#F5F7FD" : "white";
          const textColor = selected ? "#3B5BFE" : hovered || isPressed ? "#334155" : "#4B5262";
          return (
            <button
              key={label}
              ref={(el) => {
                buttonRefs.current[i] = el;
                if (selected) activeRef.current = el;
              }}
              onClick={() => onChange(i)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => { setHoveredIndex((v) => (v === i ? null : v)); clearPress(); }}
              onMouseDown={() => setPressedIndex(i)}
              onMouseUp={clearPress}
              className={cn("h-9 px-3.5 rounded-full shrink-0", FOCUS_RING_CLASS)}
              style={{
                ...CHIP_FONT,
                fontSize: 12.5,
                fontWeight: 600,
                border: `1.5px solid ${borderColor}`,
                background,
                color: textColor,
                transition: CHIP_TRANSITION,
              }}
              {...tabProps}
            >
              {label}
            </button>
          );
        }
        return (
          <button
            key={label}
            ref={(el) => {
              buttonRefs.current[i] = el;
              if (selected) activeRef.current = el;
            }}
            onClick={() => onChange(i)}
            style={{ ...CHIP_FONT, transition: CHIP_TRANSITION }}
            className={cn(
              "shrink-0 h-8 rounded-full px-4 text-[13px] font-semibold whitespace-nowrap",
              FOCUS_RING_CLASS,
              selected
                ? "bg-foreground text-background active:bg-foreground/80"
                : "bg-background border border-border text-foreground hover:bg-muted active:bg-muted",
            )}
            {...tabProps}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
