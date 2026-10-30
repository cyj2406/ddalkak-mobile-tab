/**
 * 이벤트 기록 — 프로젝트에 아직 분석 도구가 없어 한 군데로만 모아 둔다.
 * 분석 도구(GA·Amplitude 등)를 붙일 때는 이 함수 안만 바꾸면 된다.
 *
 * 지금은 ① window 에 "ddalkkak:track" CustomEvent 를 보내고 ② 개발 모드에서만 콘솔과
 * window.__ddalkkakTrackLog 에 남긴다(QA·자동 테스트가 읽는다).
 */
export type TrackEvent =
  | "onboarding_start"
  | "onboarding_step_view"
  | "onboarding_next"
  | "onboarding_prev"
  | "onboarding_skip"
  | "onboarding_complete"
  | "helper_hint_view"
  | "helper_hint_click"
  | "helper_hint_dismiss";

export type TrackProps = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    __ddalkkakTrackLog?: { event: TrackEvent; props: TrackProps; ts: number }[];
  }
}

export function track(event: TrackEvent, props: TrackProps = {}) {
  const entry = { event, props, ts: Date.now() };
  try {
    window.dispatchEvent(new CustomEvent("ddalkkak:track", { detail: entry }));
  } catch {
    /* CustomEvent 를 못 만드는 환경 — 기록만 건너뛴다 */
  }
  if (import.meta.env.DEV) {
    (window.__ddalkkakTrackLog ??= []).push(entry);
    console.debug("[track]", event, props);
  }
}
