import { useSyncExternalStore, type Dispatch, type SetStateAction } from "react";

/**
 * 크레딧 잔액 — 앱 전체가 공유하는 단일 값.
 *
 * 이전에는 App.tsx 의 `CREDIT_BALANCE` 상수(프로필·설정·크레딧 내역 표시용)와
 * TabletMiniEditor 의 로컬 state(뷰어 AI 편집 차감용, 초기값은 textSplit.ts 의
 * `START_BALANCE`)가 서로 다른 값으로 따로 존재했다 — 뷰어에서 크레딧을 써도
 * 프로필 메뉴 잔액은 그대로였다. 이 모듈이 그 둘을 하나로 합친 값이다.
 *
 * React 밖에서도 읽고 쓸 수 있도록 모듈 스코프 변수 + 구독자 목록으로 구현한다
 * (React state 로는 컴포넌트 트리 밖에서 갱신할 수 없다). `useCreditBalance()` 가
 * 반환하는 setter 는 기존 `useState` 의 `Dispatch<SetStateAction<number>>` 와
 * 시그니처가 같아서, 이미 그 타입을 기대하는 useAIStudio/useTextSplit/usePageConvert
 * 호출부를 그대로 바꿔 끼울 수 있다.
 */

/** [예시] 실제 서비스 정책이 정해지기 전까지의 초기 예시 잔액 — 기존 App.tsx CREDIT_BALANCE 값을 그대로 가져왔다. */
export const INITIAL_CREDIT_BALANCE = 11_974_710;

let balance = INITIAL_CREDIT_BALANCE;
const listeners = new Set<() => void>();

export function getCreditBalance(): number {
  return balance;
}

export function setCreditBalance(update: SetStateAction<number>): void {
  const next = typeof update === "function" ? (update as (prev: number) => number)(balance) : update;
  if (next === balance) return;
  balance = next;
  listeners.forEach((listener) => listener());
}

export function subscribeCreditBalance(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** 컴포넌트에서 useState 처럼 쓰되, 값과 setter 를 모든 구독 컴포넌트가 공유한다. */
export function useCreditBalance(): [number, Dispatch<SetStateAction<number>>] {
  const value = useSyncExternalStore(subscribeCreditBalance, getCreditBalance, getCreditBalance);
  return [value, setCreditBalance];
}
