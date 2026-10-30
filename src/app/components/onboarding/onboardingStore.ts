import { useSyncExternalStore } from "react";

/**
 * 온보딩 ↔ 홈 화면이 주고받는 작은 상태.
 * - active: 튜토리얼이 떠 있는 동안 true(요청 도우미 힌트가 겹쳐 뜨지 않게)
 * - typingPlaceholder: 1단계 동안 검색창에 보여 줄 '타이핑 중' placeholder(실제 입력값이 아니다). null 이면 원래 placeholder.
 * - stepId: 지금 떠 있는 단계 id(튜토리얼이 꺼져 있으면 null) — 대상 쪽이 그 단계 동안만 모양을 바꿀 때 쓴다(2단계 '무료' 강조).
 */
type State = { active: boolean; typingPlaceholder: string | null; stepId: string | null };

let state: State = { active: false, typingPlaceholder: null, stepId: null };
const listeners = new Set<() => void>();

export function setOnboardingState(patch: Partial<State>) {
  state = { ...state, ...patch };
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useOnboardingState() {
  return useSyncExternalStore(subscribe, () => state, () => state);
}

/** 저장 키 — 프로젝트 관례("ddalkkak.<영역>.<이름>")를 따른다. */
export const ONBOARDING_SEEN_KEY = "ddalkkak.onboarding.homeSeen"; // localStorage — 첫 방문 1회
export const HELPER_HINT_SHOWN_KEY = "ddalkkak.onboarding.helperHintShown"; // sessionStorage — 세션당 1회

/** localStorage/sessionStorage 는 사파리 비공개 모드 등에서 던질 수 있다 — 실패하면 '안 본 것'으로 본다. */
export function readFlag(storage: "local" | "session", key: string): boolean {
  try {
    return (storage === "local" ? window.localStorage : window.sessionStorage).getItem(key) === "1";
  } catch {
    return false;
  }
}
export function writeFlag(storage: "local" | "session", key: string) {
  try {
    (storage === "local" ? window.localStorage : window.sessionStorage).setItem(key, "1");
  } catch {
    /* 저장 불가 환경 — 이번 화면 상태만 유지 */
  }
}
