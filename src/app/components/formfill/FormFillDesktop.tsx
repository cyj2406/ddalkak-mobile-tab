import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
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
 * 서식 채우기 — 데스크톱 3단 레이아웃 (1200px 이상 기준).
 *
 * 디자인 원본: EditorLightDark / DoneLightDark 의 1440×900 구성.
 *   좌 236px 앱 사이드바 │ 중앙 flex(헤더 60 + 툴바 48 + A4) │ 우 420px 대화 패널
 *
 * 이 화면이 이후 태블릿·모바일 축소의 기준점이다. 1199px 이하 대응은 아직 없다.
 *
 * 상태 규칙
 * - 빈칸 상태(답변·현재 위치)는 전부 FormFillProvider 가 들고 있다.
 *   컬럼 구조를 어떻게 바꾸든 Provider 만 언마운트되지 않으면 답변이 유지된다.
 * - 줌·페이지·패널 개폐는 레이아웃 고유 상태라 Provider 바깥이 아니라
 *   Provider 안쪽 Body 에 둔다(패널을 닫았다 열어도 답변이 살아있어야 하므로).
 */

const A4_W = 794;

/** 툴바 ± 로 오가는 줌 단계. 원본 툴바가 이산 단계라 배열로 고정한다. */
const ZOOM_STEPS = [0.5, 0.75, 0.9, 1, 1.25, 1.5, 2];
const ZOOM_DEFAULT = ZOOM_STEPS.indexOf(1);

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
      {/* 좌: 앱 공용 사이드바 — Provider 바깥. 서식 상태에 의존하지 않는다. */}
      {sidebar}
      <FormFillProvider key={formId} fields={detail.fields}>
        <FormFillDesktopBody totalPages={detail.totalPages} {...rest} />
      </FormFillProvider>
    </div>
  );
}

function FormFillDesktopBody({
  formTitle,
  credits,
  totalPages,
  onBack,
}: Omit<FormFillDesktopProps, "formId" | "sidebar"> & { totalPages: number }) {
  const ff = useFormFill();
  const [zoomIdx, setZoomIdx] = useState(ZOOM_DEFAULT);
  const [page, setPage] = useState(1);
  const [panelOpen, setPanelOpen] = useState(true);
  const [inLang, setInLang] = useState("vi");
  const [outLang, setOutLang] = useState("ko");

  const zoom = ZOOM_STEPS[zoomIdx];
  const lastIdx = ff.fields.length - 1;
  const currentPage = ff.field?.anchor.page;

  // 질문이 다른 페이지의 빈칸으로 넘어가면 문서도 그 페이지로 따라간다.
  useEffect(() => {
    if (currentPage) setPage(currentPage);
  }, [currentPage]);

  /** 툴바 "가이드 채우기" — 모든 빈칸을 예시값으로 채워 완성본을 미리 보여준다. */
  const fillGuide = () => {
    ff.fields.forEach((field) => {
      if (field.example) ff.setAnswer(field.id, field.example);
    });
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
              disabled={zoomIdx === 0}
              onClick={() => setZoomIdx((i) => Math.max(0, i - 1))}
              style={segBtn(zoomIdx === 0)}
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
              disabled={zoomIdx === ZOOM_STEPS.length - 1}
              onClick={() => setZoomIdx((i) => Math.min(ZOOM_STEPS.length - 1, i + 1))}
              style={segBtn(zoomIdx === ZOOM_STEPS.length - 1)}
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
        <div style={{ flex: 1, minHeight: 0, overflow: "auto", background: "var(--ff-app)" }}>
          <div
            style={{
              minWidth: "100%",
              width: "max-content",
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
              padding: "28px 32px 40px",
            }}
          >
            <div style={{ width: A4_W * zoom, flexShrink: 0 }}>
              <DocumentViewer
                title={formTitle}
                fields={ff.fields}
                answers={ff.answers}
                page={page}
                currentFieldId={ff.done ? null : ff.field?.id}
                onSelectField={(field) => {
                  // 문서 칸을 누르면 그 질문으로 이동한다. 패널이 닫혀 있으면 함께 연다.
                  ff.goTo(ff.fields.findIndex((f) => f.id === field.id));
                  setPanelOpen(true);
                }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* ── 우: 대화 사이드바 420px ───────────────────────────────────────── */}
      {panelOpen && (
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

      {/* 패널을 닫았을 때만 노출되는 재오픈 FAB */}
      {!panelOpen && (
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
