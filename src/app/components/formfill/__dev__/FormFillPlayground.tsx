import { useState, type ReactNode } from "react";
import ActionButtons from "../ActionButtons";
import CompletionPanel from "../CompletionPanel";
import DocumentViewer from "../DocumentViewer";
import LanguageSelect from "../LanguageSelect";
import ProgressBar from "../ProgressBar";
import QuestionCard from "../QuestionCard";
import { FormFillProvider, useFormFill } from "../FormFillContext";
import { F4_FORM } from "../mockFields";
import type { FormFieldType } from "../types";

/**
 * ⚠ 개발용 임시 화면 — `?formfill=1` 로만 열린다.
 *
 * 레이아웃은 2단계 작업이라 여기서는 컴포넌트를 세로로 단순 나열만 한다.
 * 다만 DocumentViewer ↔ QuestionCard ↔ ActionButtons 는 실제로 연동되어,
 * 답을 채우면 문서 칸에 즉시 반영되고 문서 칸을 누르면 그 질문으로 이동한다.
 *
 * 2단계에서 실제 레이아웃을 붙이면 이 폴더(__dev__)는 통째로 지우면 된다.
 */
export default function FormFillPlayground() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={`ff-root${dark ? " ff-dark" : ""}`}
      style={{ minHeight: "100vh", background: "var(--ff-app)", padding: "20px 16px 64px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <header style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: "var(--ff-text)" }}>
              서식 채우기 · 컴포넌트 확인용
            </div>
            <div style={{ fontSize: 12, color: "var(--ff-text-3)", marginTop: 2 }}>
              {F4_FORM.title} · 빈칸 {F4_FORM.fields.length}개
            </div>
          </div>
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            style={{
              marginLeft: "auto",
              height: 34,
              padding: "0 14px",
              fontFamily: "inherit",
              fontSize: 12.5,
              fontWeight: 700,
              color: "var(--ff-text-2)",
              background: "var(--ff-panel)",
              border: "1px solid var(--ff-border)",
              borderRadius: 999,
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            {dark ? "☾ 다크" : "☀ 라이트"}
          </button>
        </header>

        {/* Provider 는 레이아웃보다 위. 여기가 언마운트되면 답변이 날아간다. */}
        <FormFillProvider fields={F4_FORM.fields}>
          <PlaygroundBody />
        </FormFillProvider>
      </div>
    </div>
  );
}

const TYPE_LABEL: Record<FormFieldType, string> = {
  choice: "choice",
  number: "number",
  text: "text",
  sign: "sign",
  photo: "photo",
};

function PlaygroundBody() {
  const ff = useFormFill();
  const [inLang, setInLang] = useState("vi");
  const [outLang, setOutLang] = useState("ko");

  // 5종 타입별로 첫 번째 필드 인덱스 — 타입 점프 칩용
  const typeJumps = (Object.keys(TYPE_LABEL) as FormFieldType[]).map((t) => ({
    type: t,
    idx: ff.fields.findIndex((f) => f.type === t),
  }));

  const lastIdx = ff.fields.length - 1;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Block label="ProgressBar">
        <ProgressBar
          position={ff.progress.position}
          total={ff.progress.total}
          filled={ff.progress.filled}
          percent={ff.progress.percent}
        />
      </Block>

      <Block label="LanguageSelect">
        <LanguageSelect input={inLang} output={outLang} onChangeInput={setInLang} onChangeOutput={setOutLang} />
      </Block>

      <Block label="DocumentViewer — 칸을 누르면 그 질문으로 이동합니다">
        <DocumentViewer
          title={F4_FORM.title}
          fields={ff.fields}
          answers={ff.answers}
          currentFieldId={ff.done ? null : ff.field?.id}
          onSelectField={(field) => ff.goTo(ff.fields.findIndex((f) => f.id === field.id))}
        />
      </Block>

      <Block label="타입 점프 — 5종 카드를 모두 눌러볼 수 있습니다">
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {typeJumps.map(({ type, idx }) => (
            <button
              key={type}
              type="button"
              disabled={idx < 0}
              onClick={() => ff.goTo(idx)}
              style={{
                height: 32,
                padding: "0 12px",
                fontFamily: "inherit",
                fontSize: 12.5,
                fontWeight: 700,
                color: ff.field?.type === type ? "#fff" : "var(--ff-text-2)",
                background: ff.field?.type === type ? "var(--ff-brand)" : "var(--ff-panel)",
                border: "1px solid var(--ff-border)",
                borderRadius: 999,
                cursor: idx < 0 ? "default" : "pointer",
                opacity: idx < 0 ? 0.4 : 1,
              }}
            >
              {TYPE_LABEL[type]}
            </button>
          ))}
          <button
            type="button"
            onClick={ff.reset}
            style={{
              height: 32,
              padding: "0 12px",
              fontFamily: "inherit",
              fontSize: 12.5,
              fontWeight: 700,
              color: "var(--ff-text-3)",
              background: "transparent",
              border: "1px dashed var(--ff-border)",
              borderRadius: 999,
              cursor: "pointer",
            }}
          >
            ↺ 전체 초기화
          </button>
        </div>
      </Block>

      {ff.done ? (
        <Block label="CompletionPanel">
          <CompletionPanel
            formTitle={F4_FORM.title}
            filled={ff.progress.filled}
            onReview={ff.review}
            onDownload={() => window.alert("PDF 다운로드 — 2단계에서 연결")}
          />
        </Block>
      ) : (
        <>
          <Block label={`QuestionCard — type: ${ff.field?.type ?? "-"}`}>
            {ff.field && (
              <QuestionCard
                field={ff.field}
                value={ff.answers[ff.field.id] ?? ""}
                position={ff.progress.position}
                total={ff.progress.total}
                onChange={(v, opts) => ff.setAnswer(ff.field!.id, v, opts)}
                onSubmit={ff.next}
              />
            )}
          </Block>

          <Block label="ActionButtons">
            <ActionButtons
              onPrev={ff.prev}
              onSkip={ff.skip}
              onNext={ff.next}
              prevDisabled={ff.fieldIdx === 0}
              nextLabel={ff.fieldIdx >= lastIdx ? "완료" : "다음"}
            />
          </Block>
        </>
      )}
    </div>
  );
}

/** 컴포넌트 경계를 눈으로 구분하기 위한 개발용 래퍼. 실제 화면에는 쓰지 않는다. */
function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section style={{ width: "100%" }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.4px",
          color: "var(--ff-text-4)",
          marginBottom: 7,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      {children}
    </section>
  );
}
