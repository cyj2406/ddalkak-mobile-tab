import { useCallback, useEffect, useMemo, useRef, useState } from "react";

/**
 * 이미지 텍스트 분리 — 상태와 규칙.
 *
 * 화면을 그리는 일은 TextSplitModal · TabletEditorSidebar · TabletMiniEditor 가 나눠 맡고,
 * "무엇이 지금 어떤 상태인가"는 전부 여기 한 곳에 모은다.
 *
 * ── 이 기능이 지키는 약속 넷 ─────────────────────────────────────────
 *
 * 1. 확인은 한 번만 받는다.
 *    이미지가 몇 장이든 고르는 패널이 뜨고, 그 패널이 곧 확인 단계다 — 고르고 나서
 *    "정말요?"를 또 묻지 않는다. 슬라이드마다 이미지가 한 장뿐인 문서(카드뉴스 등)라도
 *    패널을 건너뛰고 곧장 실행하지 않는다 — 그러면 그 한 번뿐인 확인 기회까지 사라진다.
 *    단, 20장을 넘는 대량 선택은 예외로 한 번 더 확인한다(아래 4번).
 *
 * 2. 목록은 하나다. 탭으로 범위를 가르지 않는다.
 *    문서 전체 슬라이드를 한 목록에서 이미지 단위로 고른다. "현재 슬라이드만"은
 *    목록을 열 때의 초기 체크 상태로만 존재하고, 별도의 범위 선택 UI는 없다.
 *
 * 3. 기다리는 동안 화면을 잡아두지 않는다.
 *    20장 이하는 실행하면 패널이 즉시 닫히고 진행은 캔버스 스켈레톤과 상단 배지가 알린다.
 *    여러 장을 걸면 끝나는 것부터 하나씩 풀린다.
 *
 * 4. 완료된 것은 되돌릴 수 없다.
 *    실행 취소를 두지 않는다 — 소량이든 BULK_THRESHOLD 를 넘는 대량이든, 실행한 순간
 *    크레딧이 확정된다. 되돌릴 수 있는 척하며 짧은 되돌리기 창을 흉내 내느니, 처음부터
 *    "되돌릴 수 없다"고 분명히 하는 쪽을 택한다. 그래서 신중함은 실행 전으로 옮겨 둔다 —
 *    패널이 곧 확인 단계이고, 20장을 넘으면 확인 다이얼로그에서 크레딧을 한 번 더 크게 적는다.
 *
 * ── [목업] 이 파일의 처리 과정은 전부 setTimeout 이다 ────────────────
 * 성공·실패는 난수가 아니라 이미지마다 정해 둔 값(mockFails)으로 갈린다 —
 * 목업은 볼 때마다 같은 화면이 나와야 디자인을 두고 이야기할 수 있다.
 */

/* ── 값 ───────────────────────────────────────────────────────────── */

/** 이미지 한 장을 분리하는 데 드는 크레딧. 범위(현재/전체)와 무관하게 단가는 하나다. */
export const CREDIT_PER_IMAGE = 300;

/** [목업] 크레딧 잔액 */
export const START_BALANCE = 906_431;

/**
 * "고액"으로 보는 기준 — 예상 크레딧이 잔액의 이 비율을 넘으면 크레딧 표기를
 * muted 12px 에서 primary 13px 로 올린다.
 *
 * 절대 금액이 아니라 잔액 대비인 이유: 같은 1,500 크레딧도 잔액 90만인 사람에게는
 * 반올림 오차고 잔액 3천인 사람에게는 절반이다. 소액은 조용히, 고액은 분명히 —
 * 그 경계는 사람마다 다르므로 사람마다 다르게 잡는다.
 */
export const HIGH_COST_RATIO = 0.01;

/**
 * 완전 성공 토스트가 스스로 닫히기까지의 시간. 실패가 하나라도 섞인 토스트에는
 * 적용하지 않는다 — 재시도할 시간을 뺏지 않도록 그런 토스트는 스스로 닫히지 않는다.
 */
export const SUCCESS_TOAST_MS = 4000;

/** 재시도가 허용되는 총 시도 횟수. 이만큼 실패하면 "텍스트를 찾지 못했어요"로 넘어간다. */
export const MAX_ATTEMPTS = 3;

/** [목업] 이미지 한 장을 처리하는 데 걸리는 시간 — 장마다 달라야 하나씩 풀리는 게 보인다 */
const WORK_MS = [1500, 2300, 1900, 2800, 2100];

/**
 * 이 장수를 넘는 회차는 "대량 선택"으로 본다 — 확인 다이얼로그를 거치고,
 * 실행 취소를 내보이지 않으며, 한꺼번에 풀리지 않고 하나씩 순서대로 처리된다.
 */
export const BULK_THRESHOLD = 20;
/** [목업] 대량 회차에서 이미지 하나가 다음 이미지보다 얼마나 늦게 시작하는지.
 *  진행 화면의 "N/M장 완료 · 약 N초 남음"이 뜻을 가지려면 한꺼번에 끝나면 안 된다. */
const BULK_STAGGER_MS = 400;

/* ── 형 ───────────────────────────────────────────────────────────── */

/**
 * 이미지 한 장의 상태.
 *   idle      아직 손대지 않음(원본 이미지)
 *   pending   처리 중(스켈레톤)
 *   done      텍스트 레이어로 교체됨
 *   failed    실패 — 원본 그대로 두고 경고를 얹는다. 재시도할 수 있다.
 *   exhausted 재시도를 다 썼다 — 더 권하지 않고 이유만 남긴다.
 */
export type ImageStatus = "idle" | "pending" | "done" | "failed" | "exhausted";

export interface EditorImage {
  id: string;
  /** 썸네일·스크린리더에 쓰는 이름 */
  label: string;
  /** 이 이미지가 놓인 슬라이드 번호 (1부터) */
  slide: number;
  /** 아트보드 안에서의 자리 — 0~1 비율이라 배율이 바뀌어도 그대로 쓴다 */
  rect: { x: number; y: number; w: number; h: number };
  /** [목업] 썸네일 대신 쓰는 색 */
  tone: string;
  /** [목업] 몇 번째 시도까지 실패할지. 0 이면 늘 성공, Infinity 면 늘 실패. */
  mockFails: number;
  /** [목업] 열자마자 "분리 완료" 상태로 시작 — 재분리 확인 흐름을 보여주기 위한 시딩 값 */
  mockAlreadySplit?: boolean;
  /** [목업] 목록에서 "방금 추가" 태그를 다는 이미지 */
  mockRecentlyAdded?: boolean;
}

export interface Slide {
  no: number;
  /** 목록 왼쪽의 24px 썸네일에 쓰는 색 */
  tone: string;
  images: EditorImage[];
}

/* ── [목업] 문서 ──────────────────────────────────────────────────── */

// 여러 이미지를 한 슬라이드에 늘어놓는 프리셋(B/D 등, buildPresetSlides 아래)이 쓰는
// 자리·색·이름 — 슬라이드 하나에 이미지가 여럿인 "PPT형" 레이아웃을 흉내 낸다.
const RECTS = [
  { x: 0.06, y: 0.10, w: 0.40, h: 0.34 },
  { x: 0.52, y: 0.10, w: 0.42, h: 0.34 },
  { x: 0.06, y: 0.52, w: 0.40, h: 0.36 },
  { x: 0.52, y: 0.52, w: 0.18, h: 0.16 },
  { x: 0.74, y: 0.52, w: 0.20, h: 0.36 },
];
const TONES = ["#C7D2E8", "#D8CFE6", "#CFE0D6", "#E6D9C6", "#D4DCE6"];
const NAMES = ["표지 사진", "도표 캡처", "인포그래픽", "로고", "배경 사진"];

// 기본 문서(buildMockSlides)가 쓰는 자리·색·이름 — 슬라이드 하나가 곧 이미지 한 장인
// "카드뉴스형" 레이아웃이라 위 RECTS/TONES/NAMES(다중 이미지용)와는 따로 둔다.
const CARD_RECT = { x: 0, y: 0, w: 1, h: 1 };
const CARD_TONES = ["#C7D2E8", "#D8CFE6", "#CFE0D6", "#E6D9C6"];
const CARD_NAMES = ["표지", "본문 1", "본문 2", "마무리"];
// 슬라이드 1에만 겹쳐 올리는 두 번째 이미지 — 배경 위 가로로 넓은 밴드, 배경과 뚜렷이
// 다른 색이라야 캔버스에서 두 이미지가 겹쳐 있어도 구분된다.
const CARD_OVERLAY_RECT = { x: 0.12, y: 0.40, w: 0.76, h: 0.20 };
const CARD_OVERLAY_TONE = "#F4A261";

/**
 * [목업] 문서를 만든다. 실제 문서 모델이 붙으면 이 함수만 걷어내면 된다.
 *
 * 이미지로 만든 카드뉴스를 흉내 낸다 — 슬라이드 하나에 이미지가 기본 한 장씩인
 * "슬라이드 = 이미지" 구조다. 다만 1번 슬라이드만 두 장(배경 + 그 위에 겹친 이미지)을
 * 둔다 — 목록에서 "이미지 여럿인 슬라이드" 펼침·부분 선택을 문서를 갈아 끼우지 않고도
 * 바로 확인하려면 기본 문서 안에 그 경우가 하나는 있어야 한다. pages 가 CARD_NAMES 보다
 * 길면(사용자가 슬라이드를 더한 경우 등) 이름·색을 그대로 순환한다. 실패·이미 분리됨
 * 같은 상태는 여기 심어 두지 않는다 — 그런 상태를 보고 싶을 때는 개발 패널의 문서
 * 프리셋(buildPresetSlides, 아래)을 쓴다. 기본 문서는 늘 "손대지 않은 문서 그대로"다.
 */
export function buildMockSlides(pages: number): Slide[] {
  return Array.from({ length: Math.max(0, pages) }, (_, i) => {
    const no = i + 1;
    const tone = CARD_TONES[i % CARD_TONES.length];
    if (no === 1) {
      return {
        no,
        tone,
        images: [
          { id: "s1-img1", label: "카드 배경", slide: no, rect: CARD_RECT, tone, mockFails: 0 },
          { id: "s1-img2", label: "추가 이미지", slide: no, rect: CARD_OVERLAY_RECT, tone: CARD_OVERLAY_TONE, mockFails: 0 },
        ],
      };
    }
    return {
      no,
      tone,
      images: [{
        id: `s${no}-img1`,
        label: CARD_NAMES[i % CARD_NAMES.length],
        slide: no,
        rect: CARD_RECT,
        tone,
        mockFails: 0,
      }],
    };
  });
}

/**
 * [목업] 슬라이드에 이미지 레이어 한 장을 더한다. 실제 업로드 파이프라인이 없어
 * TONES 를 순환해 색 블록으로 만든다 — 캔버스가 이미 이 색 블록을 "이미지"로
 * 그리고 있어(BoardImage) 썸네일도 자동으로 같은 방식으로 보인다.
 *
 * 자리는 RECTS(5칸짜리 고정 레이아웃)를 재사용하지 않고 3열 격자로 새로 계산한다 —
 * RECTS 를 그대로 순환하면 6번째 이미지부터 이미 있는 이미지와 완전히 겹쳐 보이지
 * 않는다. 격자는 슬라이드당 9장까지는 안 겹치고, 그 이상은 마지막 칸에 쌓인다
 * (목업 수준에서 굳이 더 정교한 배치 알고리즘을 둘 필요는 없다).
 *
 * seq 는 호출부(TabletMiniEditor)가 들고 있는 단조증가 카운터 — 같은 밀리초에
 * 여러 장을 추가해도 id 가 겹치지 않게 한다.
 */
export function addMockImageLayer(slides: Slide[], slideNo: number, seq: number): Slide[] {
  return slides.map((s) => {
    if (s.no !== slideNo) return s;
    const slot = Math.min(s.images.length, 8);
    const col = slot % 3;
    const row = Math.floor(slot / 3);
    const newImage: EditorImage = {
      id: `added-${seq}`,
      label: "새 이미지",
      slide: slideNo,
      rect: { x: 0.04 + col * 0.32, y: 0.04 + row * 0.32, w: 0.28, h: 0.28 },
      tone: TONES[s.images.length % TONES.length],
      mockFails: 0,
    };
    return { ...s, images: [...s.images, newImage] };
  });
}

/** [목업] 이미지 레이어를 문서 어디에 있든 찾아 지운다. */
export function removeImageLayer(slides: Slide[], imageId: string): Slide[] {
  return slides.map((s) => (
    s.images.some((i) => i.id === imageId)
      ? { ...s, images: s.images.filter((i) => i.id !== imageId) }
      : s
  ));
}

/* ── 토스트 ───────────────────────────────────────────────────────── */

/** 완료 토스트 — 성공만 있을 때와 실패가 섞였을 때의 말이 다르다. */
export interface SplitToast {
  done: number;
  failed: number;
  /** 이번 회차에서 실패해 재시도할 수 있는 이미지들 */
  retryIds: string[];
}

/** 지금 돌고 있는 회차의 진행 상황. 회차가 끝나면(toast 가 채워지면) null 로 정리된다. */
export interface RunProgress {
  total: number;
  doneCount: number;
}

/**
 * [개발용] 결과 토스트 3종·진행 화면을 골라 미리 보기 위한 강제 시나리오.
 * 지정하면 이미지별 mockFails 를 무시하고 이 값대로 성공/실패를 정한다.
 * TabletMiniEditor 의 개발 패널(?devpanel=1, import.meta.env.DEV 한정)에서만 넘어온다.
 */
export type SplitMockScenario = "success" | "partial" | "fail" | "loading";

/* ── 셈 ───────────────────────────────────────────────────────────── */

export const creditFor = (imageCount: number) => imageCount * CREDIT_PER_IMAGE;
export const formatCredit = (n: number) => n.toLocaleString("ko-KR");

/* ── 상태 ─────────────────────────────────────────────────────────── */

export interface UseTextSplit {
  slides: Slide[];
  /** 지금 보고 있는 슬라이드의 이미지 — 캔버스와 패널이 같이 쓴다 */
  currentImages: EditorImage[];
  status: Record<string, ImageStatus>;
  /** 슬라이드 안의 이미지 중 하나라도 처리 중이면 그 슬라이드 번호가 들어 있다 (하단 썸네일 스피너용) */
  slidePending: Set<number>;
  attempts: Record<string, number>;
  balance: number;
  toast: SplitToast | null;
  runProgress: RunProgress | null;
  /** 스크린리더에 흘려보내는 진행 안내 */
  liveMessage: string;
  /** 처리 중인 이미지가 하나라도 있는지 */
  busy: boolean;
  /** 이미지 단위 실행. 20장을 넘으면 하나씩 순서대로 풀린다. 완료되면 되돌릴 수 없다. */
  run: (ids: string[]) => void;
  /** 실패분 재시도 — 크레딧을 새로 걷지 않는다 */
  retry: (ids: string[]) => void;
  dismissToast: () => void;
  /** [개발용] 새 문서(프리셋)로 갈아탈 때 status/toast/진행 상태를 그 문서 기준으로 다시 시딩한다 */
  resetDocument: (newSlides: Slide[]) => void;
}

export function useTextSplit(
  slides: Slide[],
  currentSlide: number,
  initialBalance: number = START_BALANCE,
  /** 지정되면 이미지별 mockFails 대신 이 시나리오로 성공/실패를 강제한다 (개발 패널 전용). */
  mockScenario?: SplitMockScenario,
): UseTextSplit {
  const [status, setStatus] = useState<Record<string, ImageStatus>>(() => {
    const init: Record<string, ImageStatus> = {};
    slides.forEach((s) => s.images.forEach((i) => { if (i.mockAlreadySplit) init[i.id] = "done"; }));
    return init;
  });
  const [attempts, setAttempts] = useState<Record<string, number>>({});
  const [balance, setBalance] = useState(initialBalance);
  const [toast, setToast] = useState<SplitToast | null>(null);
  const [runProgress, setRunProgress] = useState<RunProgress | null>(null);
  const [liveMessage, setLiveMessage] = useState("");

  // 돌고 있는 타이머 전부. 화면이 사라질 때 남겨 두면 없는 컴포넌트에 setState 가 날아간다.
  const timers = useRef<number[]>([]);
  const after = useCallback((ms: number, fn: () => void) => {
    timers.current.push(window.setTimeout(fn, ms));
  }, []);
  useEffect(() => () => { timers.current.forEach(window.clearTimeout); }, []);

  const byId = useMemo(() => {
    const m = new Map<string, EditorImage>();
    slides.forEach((s) => s.images.forEach((i) => m.set(i.id, i)));
    return m;
  }, [slides]);

  const currentImages = useMemo(
    () => slides.find((s) => s.no === currentSlide)?.images ?? [],
    [slides, currentSlide],
  );

  const slidePending = useMemo(() => {
    const set = new Set<number>();
    slides.forEach((s) => { if (s.images.some((img) => status[img.id] === "pending")) set.add(s.no); });
    return set;
  }, [slides, status]);

  const busy = useMemo(() => Object.values(status).some((s) => s === "pending"), [status]);

  /**
   * 이미지 한 회차를 돌린다. charge=false 면 크레딧을 걷지 않는다(재시도).
   *
   * 20장 이하는 이미지마다 따로 타이머를 걸어 끝나는 것부터 상태가 바뀐다 — 거의 동시에 풀린다.
   * 20장을 넘으면 순서대로 하나씩 시작하도록 시차를 둔다 — 그래야 진행 화면의
   * "N/M장 완료 · 약 N초 남음"이 뜻을 가진다. 대량 회차는 실행 취소도 내보이지 않는다.
   */
  const start = useCallback((ids: string[], charge: boolean) => {
    if (ids.length === 0) return;
    const bulk = ids.length > BULK_THRESHOLD;

    // 크레딧은 hold(예약)다. 실패분은 자동 반환되고, 실행 취소는 성공분까지 반환한다.
    if (charge) setBalance((b) => b - creditFor(ids.length));

    setStatus((s) => {
      const next = { ...s };
      ids.forEach((id) => { next[id] = "pending"; });
      return next;
    });
    setToast(null);
    setRunProgress({ total: ids.length, doneCount: 0 });
    setLiveMessage(`이미지 ${ids.length}장의 텍스트를 분리하고 있어요`);

    // [개발용] "진행 중" 시나리오 — 완료 타이머를 아예 걸지 않는다. pending 상태로
    // 영원히 머물러 진행 배지·스켈레톤을 그대로 미리 볼 수 있다.
    if (mockScenario === "loading") return;

    const done: string[] = [];
    const failed: string[] = [];
    let left = ids.length;

    ids.forEach((id, i) => {
      const delay = (bulk ? i * BULK_STAGGER_MS : 0) + WORK_MS[i % WORK_MS.length];
      after(delay, () => {
        const tried = (attempts[id] ?? 0) + 1;
        const img = byId.get(id);
        // [개발용] 시나리오가 지정되면 mockFails 대신 이걸로 성공/실패를 정한다.
        const ok = mockScenario === "success" ? true
          : mockScenario === "fail" ? false
            : mockScenario === "partial" ? i % 2 === 0
              : !img || tried > img.mockFails;
        const exhausted = !ok && tried >= MAX_ATTEMPTS;

        setAttempts((a) => ({ ...a, [id]: tried }));
        setStatus((s) => ({ ...s, [id]: ok ? "done" : exhausted ? "exhausted" : "failed" }));
        setRunProgress((p) => (p ? { ...p, doneCount: p.doneCount + 1 } : p));

        if (ok) done.push(id);
        else {
          failed.push(id);
          // 실패분 크레딧은 묻지 않고 곧바로 되돌린다. 재시도가 무료인 것도 같은 이유다 —
          // 결과를 못 받은 요청에 값을 매기면 사용자가 여러 장 고르기를 주저한다.
          if (charge) setBalance((b) => b + CREDIT_PER_IMAGE);
        }

        left -= 1;
        if (left > 0) return;

        const retryIds = failed.filter((f) => (attempts[f] ?? 0) + 1 < MAX_ATTEMPTS);
        setRunProgress(null);
        setToast({ done: done.length, failed: failed.length, retryIds });
        setLiveMessage(
          failed.length === 0
            ? `${done.length}장 분리 완료`
            : `${done.length}장 완료, ${failed.length}장 실패`,
        );
      });
    });
  }, [after, attempts, byId, mockScenario]);

  const run = useCallback((ids: string[]) => start(ids, true), [start]);
  const retry = useCallback((ids: string[]) => start(ids, false), [start]);

  const dismissToast = useCallback(() => setToast(null), []);

  /**
   * [개발용] 새 문서(프리셋)를 올릴 때 세션을 통째로 새로 시작한다. slides 자체는
   * 호출부(TabletMiniEditor)가 별도로 setSlides 하고, 여기서는 이 훅이 들고 있는
   * status/attempts/toast/진행 상태를 그 문서 기준으로 다시 시딩한다 — 그러지 않으면
   * 이전 문서에서 쓰던 done/실패 상태가 새 문서의 (id 가 다른) 이미지에 엉뚱하게 남는다.
   */
  const resetDocument = useCallback((newSlides: Slide[]) => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
    const seeded: Record<string, ImageStatus> = {};
    newSlides.forEach((s) => s.images.forEach((i) => { if (i.mockAlreadySplit) seeded[i.id] = "done"; }));
    setStatus(seeded);
    setAttempts({});
    setToast(null);
    setRunProgress(null);
    setLiveMessage("");
  }, []);

  // 완전 성공(실패 0)인 토스트만 시간이 지나면 스스로 닫힌다. 실패가 하나라도 섞이면
  // 재시도할 시간을 뺏지 않도록 스스로 닫히지 않는다.
  useEffect(() => {
    if (!toast || toast.failed > 0) return;
    const t = window.setTimeout(() => setToast(null), SUCCESS_TOAST_MS);
    return () => window.clearTimeout(t);
  }, [toast]);

  return {
    slides, currentImages, status, slidePending, attempts, balance, toast, runProgress,
    liveMessage, busy, run, retry, dismissToast, resetDocument,
  };
}

/**
 * 사용자가 방금 더한 빈 슬라이드.
 *
 * buildMockSlides 의 이미지 패턴을 이어 쓰지 않는다 — 새로 만든 슬라이드에
 * 목업 이미지가 딸려 오면 "내가 넣지도 않은 사진이 들어 있다"가 되어 버린다.
 * 새 슬라이드는 비어 있는 것이 맞고, 그래서 텍스트 분리 목록에도 "이미지 없음"으로 선다.
 */
export function emptySlide(no: number): Slide {
  return { no, tone: "#EEF0F4", images: [] };
}

/* ── [개발용] 문서 프리셋 ──────────────────────────────────────────── */

/**
 * 상태를 하나씩 손으로 재현하기 어렵다는 문제를 풀기 위한 미리 만든 문서 6종.
 * buildMockSlides 와 같은 TONES/NAMES/RECTS 를 재사용해 캔버스에서 같은 방식으로 보인다.
 *
 * 성공/부분 실패/전체 실패는 이제 개발 패널의 "분리 결과" 스위치(SplitMockScenario)가
 * 실행 시점에 강제로 정하므로, 프리셋 쪽에 mockFails 를 미리 심어 둘 필요가 없다 —
 * 프리셋은 "문서의 모양"만, 스위치는 "실행 결과"만 맡아 둘이 섞이지 않는다.
 * D/E 만 mockAlreadySplit 을 미리 켜 둔다 — "이미 분리된 문서"는 실행 결과가 아니라
 * 문서 자체의 모양이기 때문이다.
 */
export type DocPreset = "A" | "B" | "C" | "D" | "E" | "F";

export const DOC_PRESETS: { id: DocPreset; label: string }[] = [
  { id: "A", label: "A·기본" },
  { id: "B", label: "B·다중 이미지" },
  { id: "C", label: "C·대량(30)" },
  { id: "D", label: "D·일부 완료" },
  { id: "E", label: "E·전부 완료" },
  { id: "F", label: "F·빈 문서" },
];

function presetImage(slideNo: number, k: number, alreadySplit?: boolean): EditorImage {
  return {
    id: `preset-s${slideNo}-i${k}`,
    label: NAMES[k % NAMES.length],
    slide: slideNo,
    rect: RECTS[k % RECTS.length],
    tone: TONES[k % TONES.length],
    mockFails: 0,
    mockAlreadySplit: alreadySplit,
  };
}

function presetSlide(no: number, imageCount: number, alreadySplit?: boolean): Slide {
  return {
    no,
    tone: TONES[(no - 1) % TONES.length],
    images: Array.from({ length: imageCount }, (_, k) => presetImage(no, k, alreadySplit)),
  };
}

export function buildPresetSlides(preset: DocPreset): Slide[] {
  switch (preset) {
    case "A":
      // 기본 케이스 — 슬라이드 3개, 각 이미지 1장.
      return [1, 2, 3].map((no) => presetSlide(no, 1));
    case "B":
      // 다중 이미지 케이스 — 슬라이드 1에 5장, 나머지 7개 슬라이드는 1장씩.
      return [presetSlide(1, 5), ...Array.from({ length: 7 }, (_, i) => presetSlide(i + 2, 1))];
    case "C":
      // 대량 케이스 — 30장 전부 선택하면 BULK_THRESHOLD(20)를 넘어 대량 확인 흐름을 그대로 탄다.
      return Array.from({ length: 30 }, (_, i) => presetSlide(i + 1, 1));
    case "D":
      // 일부 완료 — 슬라이드 1은 통째로 완료, 슬라이드 2는 2장 중 1장만 완료(혼합 슬라이드도 확인).
      return [
        presetSlide(1, 1, true),
        { no: 2, tone: TONES[1], images: [presetImage(2, 0, true), presetImage(2, 1)] },
        presetSlide(3, 1),
        presetSlide(4, 1),
      ];
    case "E":
      // 전부 완료 — 고를 것이 하나도 없을 때 목록·전체 선택·실행 버튼이 어떻게 보이는지.
      return [1, 2, 3].map((no) => presetSlide(no, 2, true));
    case "F":
      // 빈 문서 — 슬라이드는 있지만 이미지 레이어가 하나도 없다.
      return [1, 2, 3].map((no) => emptySlide(no));
    default:
      return [];
  }
}

/** 아직 손대지 않은 이미지는 상태 표에 없다 — 그 경우를 한 곳에서만 다룬다. */
export function statusOfMap(status: Record<string, ImageStatus>, id: string): ImageStatus {
  return status[id] ?? "idle";
}
