import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/app/components/ui/tooltip";

/**
 * 아이콘 전용 버튼용 툴팁 — 뷰어·편집기 상단바가 함께 쓴다.
 *
 * 프로젝트에 이미 있는 shadcn/Radix 툴팁(components/ui/tooltip)을 그대로 감싼 것이라
 * 색(--tooltip 근검정 + 흰 글자)·여백·테두리·그림자·등장 모션이 앱의 다른 툴팁과 같다.
 * 어두운 배경(영상 뷰어) 위에서도 묻히지 않는 건 theme.css 의 --tooltip-border /
 * --tooltip-shadow 가 담당하므로, 여기서 배경별로 색을 갈아끼우지 않는다.
 *
 * - 라벨이 눈에 보이는 버튼에는 쓰지 않는다. 아이콘만 있는 버튼 전용.
 * - 400ms 지연 후 노출 — 마우스가 스쳐 지나갈 때 깜빡이지 않게 한다.
 * - 기본 위치는 버튼 아래. 화면 경계에 걸리면 Radix 가 위로 자동으로 뒤집는다.
 * - 뷰어·편집기 루트가 z-95 라, 본문(body)으로 포탈되는 툴팁은 그보다 위로 올린다.
 */
export function IconTooltip({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Tooltip delayDuration={400}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={6} className="z-[120]">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
