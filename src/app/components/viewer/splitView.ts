import { createContext, useContext } from "react";

/**
 * 데스크톱 2단 구성 — 좌측 채팅 패널 + 우측 에디터.
 *
 * 두 영역은 형제로 폭을 나눠 갖고, 폭은 두 상태만 오간다.
 *   기본     채팅 40% / 에디터 60%
 *   전체화면 채팅  0% / 에디터 100%
 *
 * 중간값(드래그 리사이즈)은 두지 않는다. 에디터 상단바는 좌측 pill 과 액션 6개가
 * 들어 있어 폭이 일정 이하로 줄면 먼저 깨지는데, 자유 리사이즈를 열어 두면
 * 사용자가 그 지점까지 끌 수 있기 때문이다. 대신 에디터 열에 EDITOR_MIN_W 를 걸어
 * 창이 좁아져도 상단바가 온전한 폭을 먼저 가져가게 한다.
 *
 * 토글 진입점은 둘(경계 버튼 · 상단바 전체화면 버튼)이지만 상태는 이 컨텍스트 하나다.
 */

/** 채팅 열의 기본 폭 (flex-basis) */
export const CHAT_COL_BASIS = "40%";

/**
 * 에디터 열이 절대 이 아래로 줄지 않는 폭.
 * 데스크톱 상단바(라벨 포함)가 실제로 필요로 하는 폭 ~790px 보다 한 뼘 위에 잡았다.
 * 창이 좁아 40/60 으로 이 값을 못 맞추면 채팅 열이 먼저 양보한다.
 */
export const EDITOR_MIN_W = 880;

/** 접기·펴기 전환 시간. 캔버스 리센터가 이 전환이 끝난 뒤 동작한다. */
export const SPLIT_ANIM_MS = 220;
export const SPLIT_EASE = "cubic-bezier(0.32,0.72,0,1)";

export interface SplitViewState {
  /** 채팅 열이 접혀 에디터가 100% 를 쓰는 상태 */
  chatCollapsed: boolean;
  toggle: () => void;
}

/**
 * 2단 구성 안에서만 값이 있다. null 이면 에디터가 단독(전체화면 오버레이)으로 열린
 * 상황이라는 뜻이고, 이때 상단바의 전체화면 버튼은 지금처럼 아무 일도 하지 않는다.
 */
export const SplitViewContext = createContext<SplitViewState | null>(null);

export function useSplitView() {
  return useContext(SplitViewContext);
}
