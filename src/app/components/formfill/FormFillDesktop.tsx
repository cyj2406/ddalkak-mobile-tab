import { useCallback, useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import {
  AlertCircle,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Minus,
  Plus,
  MoreHorizontal,
  Pencil,
  RotateCcw,
  Save,
  Sparkles,
  X,
} from "lucide-react";

import CreditBadge from "@/app/components/common/CreditBadge";

import ActionButtons from "./ActionButtons";
import CompletionPanel from "./CompletionPanel";
import DocumentViewer from "./DocumentViewer";
import LanguageSelect from "./LanguageSelect";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import { FormFillProvider, useFormFill } from "./FormFillContext";
import { getFormFields } from "./getFormFields";
import type { Answers } from "./types";

/**
 * 서식 채우기 — 데스크톱 3단 / 태블릿 2단 레이아웃.
 *
 * 디자인 원본: EditorLightDark / DoneLightDark 의 1440×900 구성.
 *
 * ≥1200px  좌 사이드바 │ 중앙(헤더 60 + 툴바 48 + A4) │ 우 420px 대화 패널
 * 768–1199 사이드바 숨김 │ 문서 가로 전체(fit-to-width) │ 하단 시트
 *
 * 두 레이아웃은 **같은 트리**를 공유한다. <main> 의 위치가 고정이라 브레이크포인트를
 * 넘나들어도 DocumentViewer 가 언마운트되지 않고(스크롤·줌 유지), FormFillProvider 도
 * 그대로라 답변·진행 상태가 살아남는다. 회전으로 폭이 바뀌어도 마찬가지다.
 *
 * 상태 규칙
 * - 빈칸 상태(답변·현재 위치)는 전부 FormFillProvider 가 들고 있다.
 * - 줌·페이지·패널/시트 상태는 레이아웃 고유 상태라 Provider 안쪽 Body 에 둔다.
 */

const A4_W = 794;
const A4_H = 1123;

/** 데스크톱 3단을 유지하는 최소 폭. 이 아래로는 사이드바를 숨기고 하단 시트로 바꾼다. */
const DESKTOP_MIN = 1200;
/** 태블릿 하한. 이 아래는 모바일 헤더(52px, 대부분 ⋯ 메뉴로) 로 바뀐다. */
const TABLET_MIN = 768;

/** 문서 스테이지 상하 여백 — 자동 스크롤 위치 계산에도 쓰이므로 상수로 뺀다. */
const STAGE_PAD_TOP = 28;

/** 툴바 ± 로 오가는 줌 단계. 원본 툴바가 이산 단계라 배열로 고정한다. */
const ZOOM_STEPS = [0.5, 0.75, 0.9, 1, 1.25, 1.5, 2];

/**
 * 하단 시트 스냅 — 닫힘 / 반열림 / 전체.
 *
 * 닫힘은 시트가 화면 밖으로 내려간 상태이고, 그때만 FAB 이 뜬다.
 * 반열림은 화면 높이에 비례(45vh)하되 300~420px 로 묶어, 낮은 화면에서 질문이
 * 잘리거나 높은 화면에서 문서를 다 덮어버리는 일이 없게 한다.
 */
type SheetSnap = "closed" | "half" | "full";
const sheetHalf = (vh: number) => Math.min(420, Math.max(300, Math.round(vh * 0.45)));
const sheetFull = (vh: number) => Math.round(vh * 0.85);
/** 아래로 끌었을 때 닫힘으로 떨어지는 지점 — 반열림 높이의 절반. */
const closeThreshold = (vh: number) => sheetHalf(vh) * 0.5;

/** 헤더 저장 버튼의 상태. */
type SaveState = "idle" | "saving" | "saved" | "error";
/** 저장 완료 표시를 유지하는 시간(ms). */
const SAVED_HOLD_MS = 1500;

/**
 * 초안 저장 (목업).
 *
 * TODO(api): 저장 API가 붙으면 이 함수 본문을 `POST /forms/:id/draft` 로 교체한다.
 *   시그니처를 유지하면 호출부(헤더 저장 버튼)는 손댈 필요가 없다.
 *   localStorage 는 용량 초과·사파리 비공개 모드에서 실제로 던지므로,
 *   예외를 삼키지 않고 그대로 올려 보내 실패 상태가 화면에 드러나게 한다.
 */
async function saveDraft(formId: string, answers: Answers) {
  // 목업 지연 — 즉시 끝나면 저장 중 표시가 보이지 않아 눌린 느낌이 나지 않는다.
  await new Promise((resolve) => setTimeout(resolve, 420));
  window.localStorage.setItem(
    `formfill:draft:${formId}`,
    JSON.stringify({ answers, savedAt: new Date().toISOString() }),
  );
}

/** 애니메이션 최소화 설정. 스피너·전환을 즉시 교체로 바꾼다. */
function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduce(mq.matches);
    mq.addEventListener("change", on);
    on();
    return () => mq.removeEventListener("change", on);
  }, []);
  return reduce;
}

/** 미디어쿼리 구독. 회전·리사이즈에 바로 반응한다. */
function useMinWidth(px: number) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(`(min-width: ${px}px)`).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${px}px)`);
    const on = () => setMatches(mq.matches);
    mq.addEventListener("change", on);
    on();
    return () => mq.removeEventListener("change", on);
  }, [px]);
  return matches;
}

/** 뷰포트 높이 — 70vh 스냅을 픽셀로 계산하려면 숫자가 필요하다. */
function useViewportHeight() {
  const [vh, setVh] = useState(() => (typeof window === "undefined" ? 900 : window.innerHeight));
  useEffect(() => {
    const on = () => setVh(window.innerHeight);
    window.addEventListener("resize", on);
    window.addEventListener("orientationchange", on);
    return () => {
      window.removeEventListener("resize", on);
      window.removeEventListener("orientationchange", on);
    };
  }, []);
  return vh;
}

export interface FormFillDesktopProps {
  /** 목록에서 넘어온 서식 id. 이 값으로 빈칸 스키마를 조회한다. */
  formId: string;
  /** 헤더·문서 제목. 목록 카드의 제목을 그대로 쓴다. */
  formTitle: string;
  /** 보유 크레딧 — 헤더 우측 표시용 */
  credits: number;
  /**
   * 좌측 컬럼. 앱 공용 사이드바(SidebarDrawer variant="docked")를 그대로 받는다.
   * 여기서 사이드바를 자체 구현하면 앱의 다른 화면과 구성·스타일이 갈라지므로,
   * 마크업을 소유하지 않고 주입받는다.
   */
  sidebar?: ReactNode;
  /** 헤더 ← 서식 목록 */
  onBack: () => void;
}

export default function FormFillDesktop({ formId, sidebar, ...rest }: FormFillDesktopProps) {
  // 서식이 바뀌면 스키마를 다시 조회한다.
  // key 로 Provider 를 새로 마운트해 이전 서식의 답변이 남지 않게 한다.
  const detail = getFormFields(formId);
  const isDesktop = useMinWidth(DESKTOP_MIN);
  const isTabletUp = useMinWidth(TABLET_MIN);

  return (
    <div
      className="ff-root"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        display: "flex",
        background: "var(--ff-app)",
        overflow: "hidden",
      }}
    >
      {/* 좌: 앱 공용 사이드바 — Provider 바깥. 서식 상태에 의존하지 않는다.
          1199px 이하에서는 숨긴다. 목록 복귀는 헤더의 ← 만 쓴다. */}
      {isDesktop && sidebar}
      <FormFillProvider key={formId} fields={detail.fields}>
        <FormFillDesktopBody formId={formId} totalPages={detail.totalPages} isDesktop={isDesktop} isTabletUp={isTabletUp} {...rest} />
      </FormFillProvider>
    </div>
  );
}

function FormFillDesktopBody({
  formTitle,
  credits,
  totalPages,
  onBack,
  isDesktop,
  isTabletUp,
  formId,
}: Omit<FormFillDesktopProps, "sidebar"> & { totalPages: number; isDesktop: boolean; isTabletUp: boolean }) {
  const ff = useFormFill();
  // null = 자동 배율. 데스크톱은 100%, 태블릿은 fit-to-width.
  // 사용자가 ± 를 누른 뒤에는 그 값이 우선한다.
  const [manualZoom, setManualZoom] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [panelOpen, setPanelOpen] = useState(true);
  const [inLang, setInLang] = useState("vi");
  const [outLang, setOutLang] = useState("ko");
  // 헤더 ⋯ 오버플로 메뉴 — 좁은 폭에서 PDF 다운로드·초기화를 담는다.
  const [menuOpen, setMenuOpen] = useState(false);
  const [saveState, setSaveState] = useState<SaveState>("idle");
  const [leaveOpen, setLeaveOpen] = useState(false);
  // 마지막으로 저장에 성공한 시점의 답변. 이것과 다르면 미저장 변경이 있는 상태다.
  const savedSnapshotRef = useRef("{}");
  const savedTimerRef = useRef<number | null>(null);
  const reduceMotion = usePrefersReducedMotion();
  // 플로팅 컨트롤 자동 흐려짐 — 조작 후 2초 지나면 흐려지고, 문서를 만지면 즉시 돌아온다.
  const [dimmed, setDimmed] = useState(false);
  const dimTimerRef = useRef<number | null>(null);
  // 핀치 중에만 뜨는 배율 표시.
  const [zoomHudOn, setZoomHudOn] = useState(false);
  const hudTimerRef = useRef<number | null>(null);

  const stageRef = useRef<HTMLDivElement>(null);
  const [stageW, setStageW] = useState(0);
  const vh = useViewportHeight();

  // 하단 시트 — 태블릿 전용. 기본 진입은 반열림.
  const [snap, setSnap] = useState<SheetSnap>("half");
  // 드래그 중의 실시간 높이. 놓으면 null 로 돌아가고 스냅 높이가 적용된다.
  const [dragH, setDragH] = useState<number | null>(null);

  // 문서 스테이지 실제 폭 — fit-to-width 배율의 기준.
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => setStageW(el.clientWidth);
    measure();
    const obs = new ResizeObserver(measure);
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // 좌우 패딩(32*2)을 뺀 폭에 A4 를 맞춘다.
  const fitZoom = stageW > 0 ? Math.max(0.25, (stageW - 64) / A4_W) : 1;
  const zoom = manualZoom ?? (isDesktop ? 1 : fitZoom);
  // 터치 리스너는 한 번만 붙이고 최신 값을 ref 로 읽는다. zoom 을 의존성에 넣으면
  // 핀치 도중 리스너가 재등록되어 제스처가 끊긴다.
  const zoomRef = useRef(zoom);
  zoomRef.current = zoom;
  const fitRef = useRef(fitZoom);
  fitRef.current = fitZoom;

  const snapH = snap === "closed" ? 0 : snap === "half" ? sheetHalf(vh) : sheetFull(vh);
  const sheetH = dragH ?? snapH;
  /** 시트에 가려지는 높이 — 자동 스크롤 오프셋 보정에 쓴다. */
  const obscured = isDesktop ? 0 : sheetH;
  // 스냅이 바뀌었다고 문서를 다시 스크롤하면 사용자가 보던 위치를 잃는다.
  // 오프셋 보정에는 최신값이 필요하지만 effect 의 트리거가 되어서는 안 되므로 ref 로 읽는다.
  const obscuredRef = useRef(obscured);
  obscuredRef.current = obscured;

  // 문서 아래 여백은 **현재** 시트 높이가 아니라 반열림 높이로 고정한다.
  // 여백이 스냅을 따라 변하면 스크롤 가능 높이가 같이 변해, 시트를 접는 순간
  // 브라우저가 scrollTop 을 잘라 사용자가 보던 위치를 잃는다.
  const stagePadBottom = 40 + (isDesktop ? 0 : sheetHalf(vh));

  const lastIdx = ff.fields.length - 1;
  const currentPage = ff.field?.anchor.page;
  const currentFieldId = ff.field?.id;

  // 질문이 다른 페이지의 빈칸으로 넘어가면 문서도 그 페이지로 따라간다.
  useEffect(() => {
    if (currentPage) setPage(currentPage);
  }, [currentPage]);

  // 현재 빈칸이 바뀌면 문서를 그 위치로 스크롤한다. 태블릿 전용 —
  // 데스크톱은 문서와 패널이 나란히 보여 스크롤을 가로챌 이유가 없고, 기존 동작을 유지한다.
  // 하단 시트가 덮는 만큼(obscured) 빼고 판단해야 활성 빈칸이 시트 뒤에 숨지 않는다.
  useEffect(() => {
    if (isDesktop) return;
    const stage = stageRef.current;
    const field = ff.fields.find((f) => f.id === currentFieldId);
    if (!stage || !field || ff.done) return;

    const docH = A4_H * zoom;
    const top = STAGE_PAD_TOP + field.anchor.y * docH;
    const h = Math.max(field.anchor.h * docH, 24);
    const viewH = stage.clientHeight - obscuredRef.current;
    if (viewH <= 0) return;

    const rel = top - stage.scrollTop;
    // 이미 가려지지 않은 영역에 온전히 보이면 그대로 둔다.
    if (rel >= 0 && rel + h <= viewH) return;

    stage.scrollTo({ top: Math.max(0, top - Math.max(24, (viewH - h) / 3)), behavior: "smooth" });
  }, [currentFieldId, zoom, ff.done, ff.fields, isDesktop]);

  // 현재 배율에서 한 단계 위/아래로. 자동 배율(fit)에서 눌러도 자연스럽게 이어지도록
  // 인덱스가 아니라 "현재 값보다 큰/작은 첫 단계"를 찾는다.
  const zoomOut = () => {
    wakeControls();
    const prev = [...ZOOM_STEPS].reverse().find((z) => z < zoom - 0.001);
    if (prev) setManualZoom(prev);
  };
  const zoomIn = () => {
    wakeControls();
    const next = ZOOM_STEPS.find((z) => z > zoom + 0.001);
    if (next) setManualZoom(next);
  };
  /**
   * 핀치줌 · 2손가락 팬 · 더블탭.
   *
   * 스테이지는 touch-action: pan-x pan-y 라 한 손가락 스크롤은 브라우저가 그대로 처리하고,
   * pinch-zoom 은 목록에 없어 브라우저가 페이지를 확대하지 않는다. 두 손가락일 때만
   * preventDefault 로 스크롤을 막고 배율을 직접 바꾼다.
   */
  useEffect(() => {
    if (isDesktop) return;
    const el = stageRef.current;
    if (!el) return;

    let startDist = 0;
    let startZoom = 1;
    let startMid = { x: 0, y: 0 };
    let startScroll = { left: 0, top: 0 };
    let pinching = false;
    let lastTapAt = 0;

    const dist = (t: TouchList) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const mid = (t: TouchList) => ({ x: (t[0].clientX + t[1].clientX) / 2, y: (t[0].clientY + t[1].clientY) / 2 });

    const showHud = () => {
      if (hudTimerRef.current) window.clearTimeout(hudTimerRef.current);
      setZoomHudOn(true);
    };
    const hideHudSoon = () => {
      if (hudTimerRef.current) window.clearTimeout(hudTimerRef.current);
      hudTimerRef.current = window.setTimeout(() => setZoomHudOn(false), 800);
    };

    const onStart = (e: TouchEvent) => {
      if (e.touches.length !== 2) return;
      pinching = true;
      startDist = dist(e.touches);
      startZoom = zoomRef.current;
      startMid = mid(e.touches);
      startScroll = { left: el.scrollLeft, top: el.scrollTop };
      showHud();
    };

    const onMove = (e: TouchEvent) => {
      if (!pinching || e.touches.length !== 2) return;
      e.preventDefault(); // 두 손가락일 때만 네이티브 스크롤을 막는다.
      const ratio = dist(e.touches) / (startDist || 1);
      const next = Math.min(3, Math.max(0.25, startZoom * ratio));
      setManualZoom(next);
      // 2손가락 팬 — 손가락 중점이 움직인 만큼 스크롤을 되민다.
      const m = mid(e.touches);
      el.scrollLeft = startScroll.left - (m.x - startMid.x);
      el.scrollTop = startScroll.top - (m.y - startMid.y);
      showHud();
    };

    const onEnd = (e: TouchEvent) => {
      if (pinching && e.touches.length < 2) {
        pinching = false;
        hideHudSoon();
        return;
      }
      // 더블탭 → fit-to-width ↔ 100% 토글. 빈칸(버튼) 위에서는 무시한다.
      // 마지막 손가락이 떨어진 순간만 본다.
      if (e.touches.length !== 0) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest("button")) return;
      const now = Date.now();
      if (now - lastTapAt < 300) {
        lastTapAt = 0;
        const cur = zoomRef.current;
        setManualZoom(Math.abs(cur - fitRef.current) < 0.01 ? 1 : null);
        showHud();
        hideHudSoon();
      } else {
        lastTapAt = now;
      }
    };

    el.addEventListener("touchstart", onStart, { passive: false });
    el.addEventListener("touchmove", onMove, { passive: false });
    el.addEventListener("touchend", onEnd, { passive: false });
    el.addEventListener("touchcancel", onEnd, { passive: false });
    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("touchend", onEnd);
      el.removeEventListener("touchcancel", onEnd);
      if (hudTimerRef.current) window.clearTimeout(hudTimerRef.current);
    };
  }, [isDesktop]);

  /** 컨트롤을 다시 또렷하게 만들고 2초 타이머를 새로 건다. */
  const wakeControls = useCallback(() => {
    setDimmed(false);
    if (dimTimerRef.current) window.clearTimeout(dimTimerRef.current);
    dimTimerRef.current = window.setTimeout(() => setDimmed(true), 2000);
  }, []);

  useEffect(() => {
    wakeControls();
    return () => {
      if (dimTimerRef.current) window.clearTimeout(dimTimerRef.current);
    };
  }, [wakeControls]);

  const dimTransition = reduceMotion ? "none" : "opacity 220ms ease, bottom 220ms cubic-bezier(0.32,0.72,0,1)";

  const canZoomOut = zoom > ZOOM_STEPS[0] + 0.001;
  const canZoomIn = zoom < ZOOM_STEPS[ZOOM_STEPS.length - 1] - 0.001;

  const onDownload = () => window.alert("PDF 다운로드 — 백엔드 연결 예정");

  /* ── 저장 ─────────────────────────────────────────────────────────────
     아이콘만 있는 버튼이라 누른 뒤 아무 변화가 없으면 동작하지 않은 것처럼 보인다.
     저장 중 → 완료(✓) → 원복 순으로 상태를 눈에 보이게 바꾼다. */
  const savedSnapshot = savedSnapshotRef.current;
  const dirty = JSON.stringify(ff.answers) !== savedSnapshot;

  const doSave = async () => {
    if (saveState === "saving") return;
    setSaveState("saving");
    const attempt = JSON.stringify(ff.answers);
    try {
      await saveDraft(formId, ff.answers);
      // 저장 시점의 답변을 기준선으로 삼는다. 저장 도중 더 입력했다면 여전히 dirty 다.
      savedSnapshotRef.current = attempt;
      setSaveState("saved");
      if (savedTimerRef.current) window.clearTimeout(savedTimerRef.current);
      savedTimerRef.current = window.setTimeout(() => setSaveState("idle"), SAVED_HOLD_MS);
    } catch {
      // 실패는 자동으로 사라지지 않는다. 다시 누르면 재시도한다.
      setSaveState("error");
    }
  };

  useEffect(() => () => {
    if (savedTimerRef.current) window.clearTimeout(savedTimerRef.current);
  }, []);

  /** ← 이탈 방어 — 마지막 저장 이후 바뀐 게 있으면 확인부터 받는다. */
  const handleBack = () => {
    if (dirty) setLeaveOpen(true);
    else onBack();
  };

  /* 줌·페이지 컨트롤 — 데스크톱 툴바와 태블릿·모바일 플로팅이 같은 마크업을 쓴다.
     bare 는 플로팅 독 안에 들어갈 때. 독이 이미 pill 이라 자체 배경·테두리를 지운다. */
  const zoomGroup = (bare: boolean) => (
    <div style={bare ? segGroupBare : segGroup}>
      <button type="button" aria-label="축소" disabled={!canZoomOut} onClick={zoomOut} style={segBtn(!canZoomOut)}>
        <Minus size={14} strokeWidth={2.4} />
      </button>
      <span style={segLabel(46)}>{Math.round(zoom * 100)}%</span>
      <button type="button" aria-label="확대" disabled={!canZoomIn} onClick={zoomIn} style={segBtn(!canZoomIn)}>
        <Plus size={14} strokeWidth={2.4} />
      </button>
    </div>
  );

  const pageGroup = (bare: boolean) => (
    <div style={bare ? segGroupBare : segGroup}>
      <button
        type="button"
        aria-label="이전 페이지"
        disabled={page <= 1}
        onClick={() => { wakeControls(); setPage((p) => Math.max(1, p - 1)); }}
        style={segBtn(page <= 1)}
      >
        <ChevronLeft size={14} strokeWidth={2.4} />
      </button>
      <span style={segLabel(40)}>
        {page} / {totalPages}
      </span>
      <button
        type="button"
        aria-label="다음 페이지"
        disabled={page >= totalPages}
        onClick={() => { wakeControls(); setPage((p) => Math.min(totalPages, p + 1)); }}
        style={segBtn(page >= totalPages)}
      >
        <ChevronRight size={14} strokeWidth={2.4} />
      </button>
    </div>
  );

  /** 문서 빈칸 탭 — 해당 질문으로 이동하고 작성 영역을 연다. */
  const selectField = (fieldId: string) => {
    ff.goTo(ff.fields.findIndex((f) => f.id === fieldId));
    if (isDesktop) setPanelOpen(true);
    // 태블릿·모바일에서 닫혀 있었다면 반열림까지 올려 질문이 바로 보이게 한다.
    else setSnap((s) => (s === "closed" ? "half" : s));
  };

  /* 시트 드래그 — 핸들에서 포인터를 잡고 높이를 직접 움직인 뒤 가까운 스냅으로 붙인다. */
  const dragRef = useRef<{ startY: number; startH: number } | null>(null);
  // 드래그로 끝난 제스처인지. pointerup 뒤에 click 이 이어 발생하므로,
  // 이 플래그가 없으면 스냅시킨 높이를 곧바로 탭 토글이 되돌려버린다.
  const draggedRef = useRef(false);

  const onHandleDown = (e: ReactPointerEvent) => {
    dragRef.current = { startY: e.clientY, startH: sheetH };
    draggedRef.current = false;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onHandleMove = (e: ReactPointerEvent) => {
    const d = dragRef.current;
    if (!d) return;
    const dy = d.startY - e.clientY;
    // 손떨림을 탭으로 오인하지 않도록 4px 이상 움직여야 드래그로 본다.
    if (Math.abs(dy) > 4) draggedRef.current = true;
    // 위로 끌면 커진다.
    // 0 까지 내려갈 수 있다. 끝까지 끌면 닫힘.
    setDragH(Math.max(0, Math.min(sheetFull(vh), d.startH + dy)));
  };
  const onHandleUp = (e: ReactPointerEvent) => {
    if (!dragRef.current) return;
    dragRef.current = null;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    if (!draggedRef.current) {
      setDragH(null);
      return; // 움직이지 않았으면 탭으로 처리한다(onClick 이 받는다).
    }
    const h = dragH ?? snapH;
    setDragH(null);
    // 충분히 내려왔으면 닫는다. 그 위로는 반열림/전체 중 가까운 쪽으로 붙인다.
    if (h < closeThreshold(vh)) {
      setSnap("closed");
      return;
    }
    const candidates: [SheetSnap, number][] = [
      ["half", sheetHalf(vh)],
      ["full", sheetFull(vh)],
    ];
    const nearest = candidates.reduce((a, b) => (Math.abs(b[1] - h) < Math.abs(a[1] - h) ? b : a));
    setSnap(nearest[0]);
  };
  const onHandleClick = () => {
    // 드래그 직후의 click 은 무시한다.
    if (draggedRef.current) {
      draggedRef.current = false;
      return;
    }
    // 탭은 반열림 ↔ 전체 토글. 닫기는 아래로 끝까지 끄는 동작만으로 한다.
    setSnap((s) => (s === "full" ? "half" : "full"));
  };

  return (
    <>
      {/* ── 중앙: 헤더 60 + 툴바 48 + A4 ──────────────────────────────────── */}
      <main style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {/* 헤더 60px */}
        <header
          style={{
            height: isDesktop ? 60 : isTabletUp ? 56 : 52,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: isTabletUp ? 10 : 4,
            padding: isTabletUp ? "0 14px 0 8px" : "0 8px",
            background: "var(--ff-panel)",
            borderBottom: "1px solid var(--ff-border)",
            touchAction: "manipulation",
          }}
        >
          {/* ← 아이콘만. "서식 목록" 텍스트와 구분선은 원본에 없다. */}
          <button type="button" onClick={handleBack} aria-label="서식 목록으로" style={{ ...iconBtn44, color: "var(--ff-icon)" }}>
            <ChevronLeft size={20} strokeWidth={2.2} />
          </button>

          {/* flex:1 + minWidth:0 — 제목이 길어도 우측 버튼을 밀어내지 않고 자기만 말줄임된다. */}
          <span
            style={{
              flex: 1,
              minWidth: 0,
              fontSize: isTabletUp ? 14.5 : 14,
              fontWeight: 700,
              letterSpacing: "-0.3px",
              color: "var(--ff-text)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {formTitle}
          </span>

          {/* 1200px 이상은 기존 구성 유지 — 크레딧 + 저장(텍스트) + PDF(텍스트) */}
          {isDesktop ? (
            <>
              <CreditBadge amount={credits} />
              <button type="button" onClick={doSave} style={{ ...softBtn, height: 36 }}>
                <Save size={15} strokeWidth={2} />
                저장
              </button>
              <button type="button" onClick={onDownload} style={{ ...primaryBtn, height: 36 }}>
                <Download size={15} strokeWidth={2} />
                PDF 다운로드
              </button>
            </>
          ) : (
            /* 1199px 이하 — 저장 아이콘 하나만. PDF·초기화는 ⋯ 로 내린다.
               평소에는 배경·테두리 없이 ⋯ 버튼과 같은 형태이고,
               저장 결과일 때만 원형 배경이 잠깐 들어온다. */
            <button
              type="button"
              aria-label="저장"
              onClick={doSave}
              style={{
                ...iconBtn44,
                borderRadius: 999,
                background:
                  saveState === "saved"
                    ? "var(--ff-ok-bg)"
                    : saveState === "error"
                      ? "var(--ff-err-bg)"
                      : "transparent",
                color:
                  saveState === "saved"
                    ? "var(--ff-success)"
                    : saveState === "error"
                      ? "var(--ff-err)"
                      : "var(--ff-icon)",
                transition: reduceMotion ? "none" : "background 140ms ease, color 140ms ease",
              }}
            >
              {saveState === "saving" ? (
                <span className={reduceMotion ? "ff-spinner ff-spinner--static" : "ff-spinner"} />
              ) : saveState === "saved" ? (
                <Check size={20} strokeWidth={2.4} />
              ) : saveState === "error" ? (
                <AlertCircle size={20} strokeWidth={2.2} />
              ) : (
                <Save size={20} strokeWidth={2} />
              )}
            </button>
          )}

          {/* ⋯ 오버플로 — 태블릿은 초기화만, 모바일은 크레딧·저장·초기화까지 */}
          {!isDesktop && (
            <div style={{ position: "relative", flexShrink: 0 }}>
              <button
                type="button"
                aria-label="더 보기"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                style={{ ...iconBtn44, color: "var(--ff-icon)" }}
              >
                <MoreHorizontal size={20} strokeWidth={2.2} />
              </button>
              {menuOpen && (
                <>
                  <div
                    onClick={() => setMenuOpen(false)}
                    style={{ position: "fixed", inset: 0, zIndex: 10 }}
                  />
                  <div
                    role="menu"
                    style={{
                      position: "absolute",
                      top: "calc(100% + 4px)",
                      right: 0,
                      zIndex: 11,
                      minWidth: 200,
                      padding: 6,
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      background: "var(--ff-panel)",
                      border: "1px solid var(--ff-border)",
                      borderRadius: "var(--ff-radius-card)",
                      boxShadow: "var(--ff-shadow-pop)",
                    }}
                  >
                    <button type="button" style={menuItem} onClick={() => { setMenuOpen(false); onDownload(); }}>
                      <Download size={16} strokeWidth={2} />
                      PDF 다운로드
                    </button>
                    <button type="button" style={menuItem} onClick={() => { setMenuOpen(false); ff.reset(); }}>
                      <RotateCcw size={16} strokeWidth={2} />
                      초기화
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </header>

        {/* 툴바 48px — 데스크톱 전용. 태블릿·모바일에서는 줄을 없애고
            줌·페이지 네비를 문서 우상단 플로팅으로 옮긴다. */}
        {isDesktop && (
          <div
            style={{
              height: 48,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "0 18px",
              background: "var(--ff-panel)",
              borderBottom: "1px solid var(--ff-border)",
            }}
          >
            {zoomGroup(false)}
            <div style={{ width: 1, height: 20, background: "var(--ff-border)" }} />
            {pageGroup(false)}
            <button type="button" onClick={ff.reset} aria-label="답변 초기화" style={iconBtn44}>
              <RotateCcw size={16} strokeWidth={2} />
            </button>
          </div>
        )}

        {/* A4 문서 — 794×1123 을 zoom 배율로 그린다.
            폭이 컨테이너를 넘어가도 가운데 정렬이 유지되도록 max-content 래퍼를 쓴다. */}
        <div style={{ position: "relative", flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>
          <div
            ref={stageRef}
            onScroll={wakeControls}
            onPointerDown={wakeControls}
            style={{
              flex: 1,
              minHeight: 0,
              overflow: "auto",
              background: "var(--ff-app)",
              // pinch-zoom 을 빼서 브라우저가 페이지 전체를 확대하지 않게 하고,
              // 한 손가락 스크롤은 네이티브로 그대로 둔다.
              touchAction: "pan-x pan-y",
            }}
          >
            <div
              style={{
                minWidth: "100%",
                width: "max-content",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "center",
                // 시트에 가리는 만큼 아래 여백을 더해 마지막 빈칸까지 끌어올릴 수 있게 한다.
                padding: `${STAGE_PAD_TOP}px 32px ${stagePadBottom}px`,
              }}
            >
              <div style={{ width: A4_W * zoom, flexShrink: 0 }}>
                <DocumentViewer
                  title={formTitle}
                  fields={ff.fields}
                  answers={ff.answers}
                  page={page}
                  currentFieldId={ff.done ? null : ff.field?.id}
                  onSelectField={(field) => selectField(field.id)}
                />
              </div>
            </div>
          </div>

          {/* 줌 버튼은 두지 않는다. 태블릿·모바일에서는 핀치줌과 더블탭이 자연스러운 조작이라
              버튼이 화면만 차지한다. 페이지 네비만 여러 장짜리 서식에서 우하단에 남긴다. */}
          {!isDesktop && snap !== "full" && totalPages > 1 && (
            <div style={{ ...floatDock, right: 16, bottom: obscured + 16, opacity: dimmed ? 0.4 : 1, transition: dimTransition }}>
              {pageGroup(true)}
            </div>
          )}

          {/* 핀치 중에만 뜨는 배율 표시 */}
          {!isDesktop && (
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 6,
                padding: "8px 16px",
                borderRadius: 999,
                background: "var(--ff-scrim)",
                color: "var(--ff-on-brand)",
                fontSize: 15,
                fontWeight: 700,
                fontVariantNumeric: "tabular-nums",
                pointerEvents: "none",
                opacity: zoomHudOn ? 1 : 0,
                transition: reduceMotion ? "none" : "opacity 260ms ease",
              }}
            >
              {Math.round(zoom * 100)}%
            </div>
          )}
        </div>
      </main>

      {/* ── 우: 대화 사이드바 420px (1200px 이상) ─────────────────────────── */}
      {isDesktop && panelOpen && (
        <aside
          style={{
            width: 420,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            background: "var(--ff-panel)",
            borderLeft: "1px solid var(--ff-border)",
          }}
        >
          {/* 패널 헤더 */}
          <div
            style={{
              flexShrink: 0,
              display: "flex",
              alignItems: "flex-start",
              gap: 10,
              padding: "16px 16px 14px",
              borderBottom: "1px solid var(--ff-border)",
            }}
          >
            <span
              style={{
                flexShrink: 0,
                width: 34,
                height: 34,
                borderRadius: 11,
                display: "grid",
                placeItems: "center",
                background: "var(--ff-brand)",
                color: "var(--ff-on-brand)",
              }}
            >
              <Sparkles size={17} strokeWidth={2} />
            </span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14.5, fontWeight: 800, letterSpacing: "-0.3px", color: "var(--ff-text)" }}>
                딸깍 빈칸 가이드
              </div>
              <div style={{ fontSize: 12, color: "var(--ff-text-3)", marginTop: 3 }}>
                빈칸 {ff.progress.total}개를 감지했어요. 하나씩 여쭤볼게요.
              </div>
            </div>
            <button
              type="button"
              aria-label="가이드 닫기"
              onClick={() => setPanelOpen(false)}
              style={{ ...iconBtn, flexShrink: 0 }}
            >
              <X size={16} strokeWidth={2.2} />
            </button>
          </div>

          <div style={{ flexShrink: 0, padding: "14px 16px 0" }}>
            <ProgressBar
              position={ff.progress.position}
              total={ff.progress.total}
              filled={ff.progress.filled}
              percent={ff.progress.percent}
            />
          </div>

          {ff.done ? (
            /* 완료 — 작성 영역을 CompletionPanel 로 교체 */
            <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "14px 16px 18px" }}>
              <CompletionPanel
                formTitle={formTitle}
                filled={ff.progress.filled}
                onReview={ff.review}
                onDownload={onDownload}
              />
            </div>
          ) : (
            <>
              <div style={{ flexShrink: 0, padding: "12px 16px 0" }}>
                <LanguageSelect
                  input={inLang}
                  output={outLang}
                  onChangeInput={setInLang}
                  onChangeOutput={setOutLang}
                />
              </div>

              {/* 질문 영역만 스크롤 */}
              <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "14px 16px 16px" }}>
                {ff.field && (
                  <QuestionCard
                    key={ff.field.id}
                    field={ff.field}
                    value={ff.answers[ff.field.id] ?? ""}
                    position={ff.progress.position}
                    total={ff.progress.total}
                    onChange={(v, opts) => ff.setAnswer(ff.field!.id, v, opts)}
                    onSubmit={ff.next}
                  />
                )}
              </div>

              {/* 하단 고정 — 스크롤과 무관하게 항상 보인다.
                  text 타입의 AnswerInput·AiSuggestButton 은 QuestionCard 가 카드 안에서
                  직접 렌더하므로(TextBody) 여기서 또 그리지 않는다. 입력창이 둘로 갈라진다. */}
              <div
                style={{
                  flexShrink: 0,
                  padding: "12px 16px 16px",
                  borderTop: "1px solid var(--ff-border)",
                  background: "var(--ff-panel)",
                }}
              >
                <ActionButtons
                  onPrev={ff.prev}
                  onSkip={ff.skip}
                  onNext={ff.next}
                  prevDisabled={ff.fieldIdx === 0}
                  nextLabel={ff.fieldIdx >= lastIdx ? "완료" : "다음"}
                />
              </div>
            </>
          )}
        </aside>
      )}

      {/* 가이드를 닫았을 때만 뜨는 재오픈 FAB. 데스크톱(패널 닫힘)과
          태블릿·모바일(시트 닫힘)이 같은 컴포넌트를 쓰고 크기만 달라진다. */}
      <GuideFab
        visible={isDesktop ? !panelOpen : snap === "closed"}
        compact={isDesktop}
        reduceMotion={reduceMotion}
        onClick={() => {
          if (isDesktop) setPanelOpen(true);
          else setSnap("half");
        }}
      />

      {/* 저장 결과 안내 — 화면에는 보이지 않고 스크린리더만 읽는다. */}
      <div
        aria-live="polite"
        style={{ position: "absolute", width: 1, height: 1, margin: -1, padding: 0, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0 }}
      >
        {saveState === "saved" ? "저장됨" : saveState === "error" ? "저장하지 못했습니다. 다시 시도해 주세요." : ""}
      </div>

      {/* 이탈 방어 — 마지막 저장 이후 바뀐 내용이 있을 때만 뜬다. */}
      {leaveOpen && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 80,
            display: "grid",
            placeItems: "center",
            padding: 20,
            background: "rgba(15, 20, 32, 0.4)",
          }}
          onClick={() => setLeaveOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="저장되지 않은 내용"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 340,
              padding: 20,
              background: "var(--ff-panel)",
              borderRadius: "var(--ff-radius-card)",
              boxShadow: "var(--ff-shadow-pop)",
            }}
          >
            <p style={{ fontSize: 14.5, fontWeight: 700, color: "var(--ff-text)", lineHeight: 1.5 }}>
              저장되지 않은 내용이 있어요. 나가시겠어요?
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
              <button
                type="button"
                onClick={() => setLeaveOpen(false)}
                style={{ ...softBtn, flex: 1, height: 44 }}
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => { setLeaveOpen(false); onBack(); }}
                style={{ ...primaryBtn, flex: 1, height: 44 }}
              >
                나가기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 저장 중 스피너 — 인라인 스타일로는 keyframes 를 만들 수 없어 여기서 정의한다. */}
      <style>{`
        .ff-spinner {
          width: 18px; height: 18px; border-radius: 50%;
          border: 2px solid var(--ff-border-strong);
          border-top-color: var(--ff-brand);
          animation: ffSpin 640ms linear infinite;
        }
        .ff-spinner--static { animation: none; border-top-color: var(--ff-brand); }
        @keyframes ffSpin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .ff-spinner { animation: none; } }
      `}</style>

      {/* ── 하단 시트 (768–1199px) ────────────────────────────────────────
          문서 위에 얹히는 오버레이라 <main> 을 밀어내지 않는다.
          DocumentViewer 가 언마운트되지 않으므로 스크롤·줌이 그대로 유지된다. */}
      {!isDesktop && (
        <section
          aria-label="딸깍 빈칸 가이드"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: sheetH,
            // 플로팅 컨트롤(z 5)보다 위. 문서 위·시트 아래 순서를 명시적으로 고정한다.
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            background: "var(--ff-panel)",
            // 닫힘(높이 0)일 때 테두리가 화면 하단에 1px 선으로 남지 않게 한다.
            borderTop: sheetH > 0 ? "1px solid var(--ff-border)" : "none",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            touchAction: "manipulation",
            boxShadow: "var(--ff-shadow-pop)",
            // 드래그 중에는 전이를 끄고 손가락을 그대로 따라가게 한다.
            transition: dragH == null ? "height 220ms cubic-bezier(0.32,0.72,0,1)" : "none",
            overflow: "hidden",
          }}
        >
          {/* 드래그 핸들 — 탭하면 접힘 ↔ 반열림 토글, 끌면 자유 높이 후 스냅.
              닫기 버튼은 두지 않는다. 접힘(72px)이 닫힘 역할을 겸한다. */}
          <div
            role="button"
            tabIndex={0}
            aria-label="가이드 시트 크기 조절"
            onPointerDown={onHandleDown}
            onPointerMove={onHandleMove}
            onPointerUp={onHandleUp}
            onPointerCancel={onHandleUp}
            onClick={onHandleClick}
            style={{
              flexShrink: 0,
              paddingTop: 12,
              paddingBottom: 8,
              display: "grid",
              placeItems: "center",
              cursor: "grab",
              touchAction: "none",
            }}
          >
            <span style={{ width: 40, height: 4, borderRadius: 999, background: "var(--ff-border-strong)" }} />
          </div>

          <>
              <div style={{ flexShrink: 0, padding: "2px 16px 0" }}>
                <ProgressBar
                  position={ff.progress.position}
                  total={ff.progress.total}
                  filled={ff.progress.filled}
                  percent={ff.progress.percent}
                />
              </div>

              {ff.done ? (
                <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "12px 16px 16px" }}>
                  <CompletionPanel
                    formTitle={formTitle}
                    filled={ff.progress.filled}
                    onReview={ff.review}
                    onDownload={onDownload}
                  />
                </div>
              ) : (
                <>
                  {/* 전체 높이에서만 언어 선택을 노출한다. 반열림에서는 질문에 자리를 준다. */}
                  {snap === "full" && (
                    <div style={{ flexShrink: 0, padding: "10px 16px 0" }}>
                      <LanguageSelect
                        input={inLang}
                        output={outLang}
                        onChangeInput={setInLang}
                        onChangeOutput={setOutLang}
                      />
                    </div>
                  )}

                  <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "12px 16px 12px" }}>
                    {ff.field && (
                      <QuestionCard
                        key={ff.field.id}
                        field={ff.field}
                        value={ff.answers[ff.field.id] ?? ""}
                        position={ff.progress.position}
                        total={ff.progress.total}
                        onChange={(v, opts) => ff.setAnswer(ff.field!.id, v, opts)}
                        onSubmit={ff.next}
                      />
                    )}

                    {/* 전체 높이에서만 지금까지 채운 답변을 보여준다. 누르면 그 빈칸으로 이동. */}
                    {snap === "full" && ff.progress.filled > 0 && (
                      <div style={{ marginTop: 14 }}>
                        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3px", color: "var(--ff-text-4)", marginBottom: 6 }}>
                          입력한 항목 {ff.progress.filled}개
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                          {ff.fields
                            .filter((field) => ff.isFilled(field.id))
                            .map((field) => (
                              <button
                                key={field.id}
                                type="button"
                                onClick={() => selectField(field.id)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 8,
                                  padding: "7px 10px",
                                  borderRadius: "var(--ff-radius-sm)",
                                  border: "1px solid var(--ff-border)",
                                  background: "var(--ff-sub)",
                                  fontFamily: "inherit",
                                  textAlign: "left",
                                  cursor: "pointer",
                                }}
                              >
                                <Check size={13} strokeWidth={2.6} style={{ flexShrink: 0, color: "var(--ff-success)" }} />
                                <span style={{ flexShrink: 0, fontSize: 11.5, fontWeight: 600, color: "var(--ff-text-3)" }}>
                                  {field.label}
                                </span>
                                <span
                                  style={{
                                    flex: 1,
                                    minWidth: 0,
                                    fontSize: 12.5,
                                    fontWeight: 600,
                                    color: "var(--ff-text)",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  {ff.answers[field.id]?.startsWith("data:image") ? "(이미지)" : ff.answers[field.id]}
                                </span>
                              </button>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      flexShrink: 0,
                      padding: "10px 16px 14px",
                      borderTop: "1px solid var(--ff-border)",
                      background: "var(--ff-panel)",
                    }}
                  >
                    <ActionButtons
                      onPrev={ff.prev}
                      onSkip={ff.skip}
                      onNext={ff.next}
                      prevDisabled={ff.fieldIdx === 0}
                      nextLabel={ff.fieldIdx >= lastIdx ? "완료" : "다음"}
                    />
                  </div>
                </>
              )}
            </>
        </section>
      )}
    </>
  );
}

/* ── 버튼 스타일 (인라인 hex 없이 --ff-* 토큰만) ─────────────────────────── */

const btnBase: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  height: 36,
  padding: "0 13px",
  borderRadius: "var(--ff-radius-ctl)",
  fontFamily: "inherit",
  fontSize: 12.5,
  fontWeight: 700,
  letterSpacing: "-0.2px",
  cursor: "pointer",
  flexShrink: 0,
  whiteSpace: "nowrap",
};

const primaryBtn: CSSProperties = {
  ...btnBase,
  border: "none",
  background: "var(--ff-brand)",
  color: "var(--ff-on-brand)",
};

const softBtn: CSSProperties = {
  ...btnBase,
  border: "1px solid var(--ff-border-strong)",
  background: "var(--ff-sub)",
  color: "var(--ff-text-2)",
};

const ghostBtn: CSSProperties = {
  ...btnBase,
  border: "1px solid transparent",
  background: "transparent",
  color: "var(--ff-text-2)",
};

/**
 * 가이드 재오픈 FAB — 흰 pill 라벨 + 그 옆에 떨어져 있는 파란 원형 연필 버튼.
 *
 * 원이 pill 보다 크고 살짝 떨어져 있는 형태다(원본 시안). 그래서 바깥 button 은
 * 배경 없는 flex 컨테이너이고, 흰 pill 과 파란 원이 각각 자기 배경을 갖는다.
 *
 * 하나의 컴포넌트로 두 크기를 낸다. compact(=데스크톱)보다 태블릿·모바일을 키워
 * 터치 목표를 확보한다(원 지름 60px).
 *
 * 원 안 아이콘은 연필이다. 이 버튼의 동작은 이동이 아니라 "빈칸 채우기 패널 열기"이고,
 * 화살표를 쓰면 라벨 끝의 → 와 겹친다.
 *
 * 항상 렌더하고 opacity 로만 여닫는다. 조건부 렌더로 두면 눌리는 순간 사라져
 * 페이드아웃을 볼 수 없다.
 */
function GuideFab({
  visible,
  compact,
  reduceMotion,
  onClick,
}: {
  visible: boolean;
  compact: boolean;
  reduceMotion: boolean;
  onClick: () => void;
}) {
  const pillH = compact ? 40 : 48;
  const circle = compact ? 52 : 60;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="딸깍이와 빈칸 채우기"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      style={{
        position: "absolute",
        right: compact ? 24 : 16,
        bottom: compact ? 24 : "calc(16px + env(safe-area-inset-bottom, 0px))",
        // 문서(z 0)와 플로팅 독(z 5) 위, 시트·패널(z 10) 아래.
        zIndex: 8,
        display: "inline-flex",
        alignItems: "center",
        gap: compact ? 10 : 12,
        padding: 0,
        border: "none",
        background: "transparent",
        fontFamily: "inherit",
        cursor: "pointer",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: reduceMotion ? "none" : "opacity 180ms ease",
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          height: pillH,
          padding: compact ? "0 20px" : "0 24px",
          borderRadius: 999,
          background: "var(--ff-panel)",
          color: "var(--ff-text)",
          fontSize: compact ? 13 : 15,
          fontWeight: 600,
          letterSpacing: "-0.3px",
          whiteSpace: "nowrap",
          boxShadow: "var(--ff-shadow-pop)",
        }}
      >
        딸깍이와 빈칸 채우기 →
      </span>
      <span
        aria-hidden
        style={{
          display: "grid",
          placeItems: "center",
          width: circle,
          height: circle,
          borderRadius: "50%",
          background: "var(--ff-brand)",
          color: "var(--ff-on-brand)",
          boxShadow: "var(--ff-shadow-pop)",
          flexShrink: 0,
        }}
      >
        <Pencil size={compact ? 20 : 24} strokeWidth={2} />
      </span>
    </button>
  );
}

/** 문서 위에 떠 있는 컨트롤 독 — pill, 높이 44. */
const floatDock: CSSProperties = {
  position: "absolute",
  zIndex: 5,
  display: "flex",
  alignItems: "center",
  height: 44,
  background: "var(--ff-panel)",
  border: "1px solid var(--ff-border)",
  borderRadius: 999,
  boxShadow: "var(--ff-shadow-card)",
};

/** 오버플로 메뉴 항목 */
const menuItem: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  width: "100%",
  height: 44,
  padding: "0 12px",
  borderRadius: "var(--ff-radius-sm)",
  border: "none",
  background: "transparent",
  color: "var(--ff-text)",
  fontFamily: "inherit",
  fontSize: 13.5,
  fontWeight: 600,
  whiteSpace: "nowrap",
  textAlign: "left",
  cursor: "pointer",
};

/** 세그먼트 컨트롤의 가운데 라벨(배율·페이지). compact 는 폭과 글자만 줄인다. */
const segLabel = (minWidth: number): CSSProperties => ({
  minWidth,
  textAlign: "center",
  fontSize: 12.5,
  fontWeight: 700,
  color: "var(--ff-text-2)",
  fontVariantNumeric: "tabular-nums",
  whiteSpace: "nowrap",
});

/** 아이콘만 있는 강조 버튼 — 모바일 헤더의 PDF 다운로드 */
const primaryIconBtn: CSSProperties = {
  display: "grid",
  placeItems: "center",
  width: 44,
  height: 44,
  flexShrink: 0,
  borderRadius: "var(--ff-radius-ctl)",
  border: "none",
  background: "var(--ff-brand)",
  color: "var(--ff-on-brand)",
  whiteSpace: "nowrap",
  cursor: "pointer",
};

/** 아이콘 단독 버튼 — 접근성 최소 터치 영역 44×44 를 만족시킨다. */
const iconBtn44: CSSProperties = {
  display: "grid",
  placeItems: "center",
  width: 44,
  height: 44,
  flexShrink: 0,
  borderRadius: "var(--ff-radius-ctl)",
  border: "none",
  background: "transparent",
  color: "var(--ff-text-2)",
  whiteSpace: "nowrap",
  cursor: "pointer",
};

const iconBtn: CSSProperties = {
  display: "grid",
  placeItems: "center",
  width: 30,
  height: 30,
  borderRadius: "var(--ff-radius-sm)",
  border: "none",
  background: "transparent",
  color: "var(--ff-text-3)",
  cursor: "pointer",
};

const segGroup: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 2,
  height: 44,
  padding: "0 4px",
  borderRadius: "var(--ff-radius-ctl)",
  background: "var(--ff-sub)",
  border: "1px solid var(--ff-border)",
};

/** 플로팅 독 안에 들어가는 세그먼트 — 독이 이미 pill 이라 자체 배경·테두리를 지운다. */
const segGroupBare: CSSProperties = {
  ...segGroup,
  background: "transparent",
  border: "none",
  borderRadius: 999,
};

const segBtn = (disabled: boolean): CSSProperties => ({
  display: "grid",
  placeItems: "center",
  width: 44,
  height: 44,
  borderRadius: 10,
  border: "none",
  background: "transparent",
  color: "var(--ff-text-2)",
  cursor: disabled ? "default" : "pointer",
  opacity: disabled ? 0.35 : 1,
});
