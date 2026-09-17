import { ScrollableChips, tabIdFor } from "@/app/components/common/ScrollableChips";

/**
 * 공용 탭 — 콘텐츠를 완전히 갈아 끼우는 2~3개짜리 상단 탭(요금제 페이지의
 * "월 구독 요금제 / 추가 크레딧 충전" 등)에 쓴다.
 *
 * 새로 그리지 않고 기존 ScrollableChips(outline variant)를 그대로 감쌌다 — 필터 칩과
 * 같은 렌더링 로직을 중복 구현하지 않기 위해서다. `role="tablist"`를 넘겨 진짜 탭
 * 접근성(role=tablist/tab, aria-selected, 롤빙 tabIndex, 방향키/Home/End 이동)을 켠다 —
 * 구현은 ScrollableChips 안에 있고, 그 컴포넌트를 필터 용도로 쓰는 다른 화면(크레딧
 * 사용 내역 등)은 `role`을 넘기지 않으므로 기존 동작이 그대로 유지된다.
 *
 * `items[].value`를 패널 id로도 그대로 쓴다 — 호출부는 탭 콘텐츠를 감싼 요소에
 * `{...tabPanelProps(item.value)}`를 펼쳐 넣기만 하면 `aria-labelledby`/`id`/`role`이
 * 자동으로 맞물린다(예: PricingPage.tsx).
 */
export interface TabItem {
  value: string;
  label: string;
}

export function tabPanelProps(value: string) {
  return {
    role: "tabpanel" as const,
    id: value,
    "aria-labelledby": tabIdFor(value),
    tabIndex: 0,
  };
}

export function Tabs({
  items,
  value,
  onChange,
}: {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
}) {
  const activeIndex = Math.max(0, items.findIndex((item) => item.value === value));

  return (
    <ScrollableChips
      items={items.map((item) => item.label)}
      activeIndex={activeIndex}
      onChange={(i) => onChange(items[i].value)}
      variant="outline"
      edgeClassName=""
      role="tablist"
      panelIds={items.map((item) => item.value)}
      centerActiveOnChange
    />
  );
}

export default Tabs;
