import { useEffect } from "react";
import type { RefObject } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * 팝오버/드롭다운용 최소 focus trap — 프로필 메뉴·알림 팝오버가 지금까지 마우스로만
 * 열고 닫을 수 있었다(Tab을 눌러도 팝오버 밖 배경 콘텐츠로 포커스가 새어나갔다 —
 * Playwright로 직접 확인한 버그). 열리면 안의 첫 포커스 가능한 요소로 옮기고,
 * Tab/Shift+Tab이 팝오버 경계를 벗어나지 않게만 가둔다 — 그 이상의 동작(ESC 닫기,
 * 바깥 클릭 닫기)은 각 컴포넌트가 이미 따로 구현하고 있어 건드리지 않는다.
 */
export function useFocusTrap(containerRef: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;

    const focusables = () => Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
    const first = focusables()[0];
    first?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const items = focusables();
      if (items.length === 0) return;
      const firstEl = items[0];
      const lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };
    container.addEventListener("keydown", onKeyDown);
    return () => container.removeEventListener("keydown", onKeyDown);
  }, [active, containerRef]);
}
