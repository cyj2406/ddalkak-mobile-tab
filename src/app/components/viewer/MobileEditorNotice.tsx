import { Monitor } from "lucide-react";

/**
 * 결과물 뷰어(파일 프리뷰) 상단 안내 스트립 (full-bleed 한 줄).
 * - 모바일 뷰포트(md 미만)에서만 노출
 * - 헤더 바로 아래에 sticky로 고정, 프리뷰는 이 스트립 높이만큼 밀림
 * - 하단 border-b로 헤더와 콘텐츠 구분 (구분선을 헤더에서 이 스트립 아래로 이동)
 * - 상태/props 없는 순수 표시용. 닫기·링크 복사 없음, 저장소 미사용 → 뷰어를 열 때마다 항상 노출
 * - 색상은 브랜드 블루 토큰(--brand)만 사용 (primary는 이 테마에서 근검정이라 사용 금지)
 */
export function MobileEditorNotice() {
  return (
    <div className="md:hidden shrink-0 sticky top-0 z-10 flex items-center gap-2 px-4 py-2.5 bg-brand/[0.06] border-b border-border">
      <Monitor size={14} className="shrink-0 text-brand" />
      <p className="flex-1 min-w-0 truncate whitespace-nowrap text-xs font-medium text-brand/90">
        PC 에디터에서 결과물을 직접 수정할 수 있어요
      </p>
    </div>
  );
}
