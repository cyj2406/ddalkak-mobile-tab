import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Coins,
  Download,
  Minus,
  Plus,
  RotateCcw,
  Sparkles,
  Wand2,
  X,
} from "lucide-react";

import ActionButtons from "./ActionButtons";
import CompletionPanel from "./CompletionPanel";
import DocumentViewer from "./DocumentViewer";
import LanguageSelect from "./LanguageSelect";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import { FormFillProvider, useFormFill } from "./FormFillContext";
import { getFormFields } from "./getFormFields";

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

/** 문서 스테이지 상하 여백 — 자동 스크롤 위치 계산에도 쓰이므로 상수로 뺀다. */
const STAGE_PAD_TOP = 28;

/** 툴바 ± 로 오가는 줌 단계. 원본 툴바가 이산 단계라 배열로 고정한다. */
const ZOOM_STEPS = [0.5, 0.75, 0.9, 1, 1.25, 1.5, 2];

/** 하단 시트 스냅 — 접힘 / 반열림 / 전체(70vh). */
type SheetSnap = "collapsed" | "half" | "full";
const SHEET_COLLAPSED = 72;
const SHEET_HALF = 320;
const sheetFull = (vh: number) => Math.round(vh * 0.7);

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
        <FormFillDesktopBody totalPages={detail.totalPages} isDesktop={isDesktop} {...rest} />
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
}: Omit<FormFillDesktopProps, "formId" | "sidebar"> & { totalPages: number; isDesktop: boolean }) {
  const ff = useFormFill();
  // null = 자동 배율. 데스크톱은 100%, 태블릿은 fit-to-width.
  // 사용자가 ± 를 누른 뒤에는 그 값이 우선한다.
  const [manualZoom, setManualZoom] = useState<number | null>(null);
  const [page, setPage] = useState(1);
  const [panelOpen, setPanelOpen] = useState(true);
  const [inLang, setInLang] = useState("vi");
  const [outLang, setOutLang] = useState("ko");

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

  const snapH = snap === "collapsed" ? SHEET_COLLAPSED : snap === "half" ? SHEET_HALF : sheetFull(vh);
  const sheetH = dragH ?? snapH;
  /** 시트에 가려지는 높이 — 자동 스크롤 오프셋 보정에 쓴다. */
  const obscured = isDesktop ? 0 : sheetH;

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
    const viewH = stage.clientHeight - obscured;
    if (viewH <= 0) return;

    const rel = top - stage.scrollTop;
    // 이미 가려지지 않은 영역에 온전히 보이면 그대로 둔다.
    if (rel >= 0 && rel + h <= viewH) return;

    stage.scrollTo({ top: Math.max(0, top - Math.max(24, (viewH - h) / 3)), behavior: "smooth" });
  }, [currentFieldId, zoom, obscured, ff.done, ff.fields, isDesktop]);

  /** 툴바 "가이드 채우기" — 모든 빈칸을 예시값으로 채워 완성본을 미리 보여준다. */
  const fillGuide = () => {
    ff.fields.forEach((field) => {
      if (field.example) ff.setAnswer(field.id, field.example);
    });
  };

  // 현재 배율에서 한 단계 위/아래로. 자동 배율(fit)에서 눌러도 자연스럽게 이어지도록
  // 인덱스가 아니라 "현재 값보다 큰/작은 첫 단계"를 찾는다.
  const zoomOut = () => {
    const prev = [...ZOOM_STEPS].reverse().find((z) => z < zoom - 0.001);
    if (prev) setManualZoom(prev);
  };
  const zoomIn = () => {
    const next = ZOOM_STEPS.find((z) => z > zoom + 0.001);
    if (next) setManualZoom(next);
  };
  const canZoomOut = zoom > ZOOM_STEPS[0] + 0.001;
  const canZoomIn = zoom < ZOOM_STEPS[ZOOM_STEPS.length - 1] - 0.001;

  /** 문서 빈칸 탭 — 해당 질문으로 이동하고 작성 영역을 연다. */
  const selectField = (fieldId: string) => {
    ff.goTo(ff.fields.findIndex((f) => f.id === fieldId));
    if (isDesktop) setPanelOpen(true);
    else setSnap((s) => (s === "collapsed" ? "half" : s));
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
    setDragH(Math.max(SHEET_COLLAPSED, Math.min(sheetFull(vh), d.startH + dy)));
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
    const candidates: [SheetSnap, number][] = [
      ["collapsed", SHEET_COLLAPSED],
      ["half", SHEET_HALF],
      ["full", sheetFull(vh)],
    ];
    const nearest = candidates.reduce((a, b) => (Math.abs(b[1] - h) < Math.abs(a[1] - h) ? b : a));
    setDragH(null);
    setSnap(nearest[0]);
  };
  const onHandleClick = () => {
    // 드래그 직후의 click 은 무시한다.
    if (draggedRef.current) {
      draggedRef.current = false;
      return;
    }
    setSnap((s) => (s === "collapsed" ? "half" : "collapsed"));
  };

  return (
    <>
      {/* ── 중앙: 헤더 60 + 툴바 48 + A4 ──────────────────────────────────── */}
      <main style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        {/* 헤더 60px */}
        <header
          style={{
            height: 60,
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "0 18px",
            background: "var(--ff-panel)",
            borderBottom: "1px solid var(--ff-border)",
          }}
        >
          <button type="button" onClick={onBack} style={ghostBtn}>
            <ChevronLeft size={16} strokeWidth={2.2} />
            서식 목록
          </button>

          <div style={{ width: 1, height: 20, background: "var(--ff-border)", flexShrink: 0 }} />

          <span
            style={{
              fontSize: 14.5,
              fontWeight: 700,
              letterSpacing: "-0.3px",
              color: "var(--ff-text)",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {formTitle}
          </span>

          {/* N개 완료 배지 — 목록의 count 가 아니라 스키마 기준 진행 상황 */}
          <span
            style={{
              flexShrink: 0,
              display: "inline-flex",
              alignItems: "center",
              height: 24,
              padding: "0 10px",
              borderRadius: 999,
              fontSize: 12,
              fontWeight: 700,
              background: ff.done ? "var(--ff-success-bg)" : "var(--ff-sub)",
              color: ff.done ? "var(--ff-success)" : "var(--ff-text-2)",
            }}
          >
            {ff.progress.filled}/{ff.progress.total}개 완료
          </span>

          <div style={{ flex: 1 }} />

          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              height: 32,
              padding: "0 12px",
              borderRadius: 999,
              background: "var(--ff-sub)",
              color: "var(--ff-text-2)",
              fontSize: 12.5,
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            <Coins size={15} strokeWidth={1.9} style={{ color: "var(--ff-warn)" }} />
            {credits.toLocaleString()}
          </span>

          <button type="button" onClick={() => window.alert("PDF 다운로드 — 백엔드 연결 예정")} style={primaryBtn}>
            <Download size={15} strokeWidth={2} />
            PDF 다운로드
          </button>
        </header>

        {/* 툴바 48px */}
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
          {/* 줌 */}
          <div style={segGroup}>
            <button
              type="button"
              aria-label="축소"
              disabled={!canZoomOut}
              onClick={zoomOut}
              style={segBtn(!canZoomOut)}
            >
              <Minus size={14} strokeWidth={2.4} />
            </button>
            <span
              style={{
                minWidth: 46,
                textAlign: "center",
                fontSize: 12.5,
                fontWeight: 700,
                color: "var(--ff-text-2)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {Math.round(zoom * 100)}%
            </span>
            <button
              type="button"
              aria-label="확대"
              disabled={!canZoomIn}
              onClick={zoomIn}
              style={segBtn(!canZoomIn)}
            >
              <Plus size={14} strokeWidth={2.4} />
            </button>
          </div>

          <div style={{ width: 1, height: 20, background: "var(--ff-border)" }} />

          {/* 페이지 네비 */}
          <div style={segGroup}>
            <button
              type="button"
              aria-label="이전 페이지"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              style={segBtn(page <= 1)}
            >
              <ChevronLeft size={14} strokeWidth={2.4} />
            </button>
            <span
              style={{
                minWidth: 40,
                textAlign: "center",
                fontSize: 12.5,
                fontWeight: 700,
                color: "var(--ff-text-2)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {page} / {totalPages}
            </span>
            <button
              type="button"
              aria-label="다음 페이지"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              style={segBtn(page >= totalPages)}
            >
              <ChevronRight size={14} strokeWidth={2.4} />
            </button>
          </div>

          <div style={{ flex: 1 }} />

          <button type="button" onClick={fillGuide} style={softBtn}>
            <Wand2 size={14} strokeWidth={2} />
            가이드 채우기
          </button>
          <button type="button" onClick={ff.reset} style={ghostBtn}>
            <RotateCcw size={14} strokeWidth={2} />
            초기화
          </button>
        </div>

        {/* A4 문서 — 794×1123 을 zoom 배율로 그린다.
            폭이 컨테이너를 넘어가도 가운데 정렬이 유지되도록 max-content 래퍼를 쓴다. */}
        <div ref={stageRef} style={{ flex: 1, minHeight: 0, overflow: "auto", background: "var(--ff-app)" }}>
          <div
            style={{
              minWidth: "100%",
              width: "max-content",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              // 태블릿에서는 시트에 가리는 만큼 아래 여백을 더해 마지막 빈칸까지 끌어올릴 수 있게 한다.
              padding: `${STAGE_PAD_TOP}px 32px ${40 + obscured}px`,
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
                onDownload={() => window.alert("PDF 다운로드 — 백엔드 연결 예정")}
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

      {/* 패널을 닫았을 때만 노출되는 재오픈 FAB (데스크톱 전용 — 태블릿은 시트가 대신한다) */}
      {isDesktop && !panelOpen && (
        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          style={{
            position: "absolute",
            right: 28,
            bottom: 28,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            height: 48,
            padding: "0 20px",
            borderRadius: 999,
            border: "none",
            background: "var(--ff-brand)",
            color: "var(--ff-on-brand)",
            fontFamily: "inherit",
            fontSize: 14,
            fontWeight: 700,
            letterSpacing: "-0.3px",
            boxShadow: "var(--ff-shadow-pop)",
            cursor: "pointer",
          }}
        >
          <Sparkles size={17} strokeWidth={2} />
          딸깍이와 빈칸 채우기
          <ChevronRight size={16} strokeWidth={2.4} />
        </button>
      )}

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
            display: "flex",
            flexDirection: "column",
            background: "var(--ff-panel)",
            borderTop: "1px solid var(--ff-border)",
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            boxShadow: "var(--ff-shadow-pop)",
            // 드래그 중에는 전이를 끄고 손가락을 그대로 따라가게 한다.
            transition: dragH == null ? "height 220ms cubic-bezier(0.32,0.72,0,1)" : "none",
            overflow: "hidden",
          }}
        >
          {/* 드래그 핸들 — 탭하면 접힘 ↔ 반열림 토글, 끌면 자유 높이 후 스냅 */}
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
              height: 22,
              display: "grid",
              placeItems: "center",
              cursor: "grab",
              touchAction: "none",
            }}
          >
            <span style={{ width: 40, height: 4, borderRadius: 999, background: "var(--ff-border-strong)" }} />
          </div>

          {snap === "collapsed" && !ff.done ? (
            /* 접힘 72px — 진행률 + 위치 + 현재 질문 1줄 */
            <button
              type="button"
              onClick={() => setSnap("half")}
              style={{
                flex: 1,
                minHeight: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 6,
                padding: "0 16px 8px",
                border: "none",
                background: "transparent",
                textAlign: "left",
                fontFamily: "inherit",
                cursor: "pointer",
              }}
            >
              <ProgressBar
                position={ff.progress.position}
                total={ff.progress.total}
                filled={ff.progress.filled}
                percent={ff.progress.percent}
              />
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--ff-text-2)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {ff.field?.question ?? ff.field?.label ?? ""}
              </div>
            </button>
          ) : (
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
                    onDownload={() => window.alert("PDF 다운로드 — 백엔드 연결 예정")}
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
          )}
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
  height: 34,
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
  height: 32,
  padding: "0 4px",
  borderRadius: "var(--ff-radius-ctl)",
  background: "var(--ff-sub)",
  border: "1px solid var(--ff-border)",
};

const segBtn = (disabled: boolean): CSSProperties => ({
  display: "grid",
  placeItems: "center",
  width: 24,
  height: 24,
  borderRadius: 7,
  border: "none",
  background: "transparent",
  color: "var(--ff-text-2)",
  cursor: disabled ? "default" : "pointer",
  opacity: disabled ? 0.35 : 1,
});
