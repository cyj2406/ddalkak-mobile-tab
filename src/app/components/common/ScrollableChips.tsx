import { useEffect, useRef } from "react";

import { cn } from "@/app/components/ui/utils";

const CHIP_FONT = { fontFamily: "'Pretendard Variable', sans-serif" } as const;

type Variant = "solid" | "outline";

export interface ScrollableChipsProps {
  items: string[];
  activeIndex: number;
  onChange: (index: number) => void;
  /**
   * solid: 선택 시 검정 채움 + 흰 텍스트 (크레딧/템플릿 필터)
   * outline: 선택 시 파란 테두리 + 파란 텍스트 (상세 프롬프트 섹션 칩)
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
}

/**
 * 한 줄 가로 스크롤 pill 칩 그룹 (크레딧 사용 내역 · 템플릿 목록 · 상세 프롬프트 섹션 공용).
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
}: ScrollableChipsProps) {
  const activeRef = useRef<HTMLButtonElement>(null);
  const mounted = useRef(false);

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

  return (
    <div
      className={cn(
        "flex items-center gap-2 py-1 overflow-x-auto overscroll-x-contain whitespace-nowrap [&::-webkit-scrollbar]:hidden",
        edgeClassName,
        className,
      )}
      style={{ scrollbarWidth: "none" }}
    >
      {items.map((label, i) => {
        const selected = i === activeIndex;
        if (variant === "outline") {
          // 파란 테두리 pill — 기존 섹션 칩 값을 그대로 유지
          return (
            <button
              key={label}
              ref={selected ? activeRef : undefined}
              onClick={() => onChange(i)}
              className="h-9 px-3.5 rounded-full shrink-0"
              style={{
                ...CHIP_FONT,
                fontSize: 12.5,
                fontWeight: 600,
                border: `1.5px solid ${selected ? "#3B5BFE" : "#E3E6EB"}`,
                background: selected ? "#ECEFFE" : "white",
                color: selected ? "#3B5BFE" : "#4B5262",
              }}
            >
              {label}
            </button>
          );
        }
        return (
          <button
            key={label}
            ref={selected ? activeRef : undefined}
            onClick={() => onChange(i)}
            style={CHIP_FONT}
            className={cn(
              "shrink-0 h-8 rounded-full px-4 text-[13px] font-semibold whitespace-nowrap",
              selected
                ? "bg-foreground text-background"
                : "bg-background border border-border text-foreground",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
