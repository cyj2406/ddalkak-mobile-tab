import type { ReactNode } from "react";
import { homeSectionSubtitleClassName, homeSectionSubtitleStyle, homeSectionTitleClassName, homeSectionTitleStyle } from "@/app/styleTokens";

/** 홈 섹션 머리 — 제목(bold) + 그 아래 한 톤 연한 보조문구. "인기 템플릿으로 시작하기"·"작업별로 시작하기"가 함께 쓴다. 간격은 theme.css --home-title-sub · --home-sub-content.
 *  action(선택) — 제목과 같은 줄 오른쪽 끝에 붙는 링크("전체 보기" 등). 보조문구 줄에는 영향이 없다. */
export function HomeSectionHeader({ id, title, subtitle, action }: { id?: string; title: string; subtitle: string; action?: ReactNode }) {
  return (
    <div className="min-w-0" style={{ marginBottom: "var(--home-sub-content)", wordBreak: "keep-all" }}>
      <div className="flex items-center justify-between gap-4">
        <h2 id={id} className={`${homeSectionTitleClassName} min-w-0`} style={homeSectionTitleStyle}>{title}</h2>
        {action}
      </div>
      <p className={homeSectionSubtitleClassName} style={{ ...homeSectionSubtitleStyle, marginTop: "var(--home-title-sub)" }}>{subtitle}</p>
    </div>
  );
}

export default HomeSectionHeader;
