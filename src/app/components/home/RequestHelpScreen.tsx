import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { color, f, SUBTITLE_COLOR } from "@/app/styleTokens";
import { TASK_GROUPS, getTaskById, templatesForTask, type Task, type TaskTemplate } from "@/app/data/tasks";
import { GROUP_COLORS } from "./TaskGrid";
import type { WorkspaceCategory } from "@/app/App";

const DRAFT_KEY = "ddalkkak.requestHelp.draft";

const LIMITS = { topic: 100, content: 3000, audience: 120 } as const;

type Draft = { taskId: string | null; topic: string; content: string; audience: string };

function loadDraft(): Draft {
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return { taskId: null, topic: "", content: "", audience: "" };
    const parsed = JSON.parse(raw);
    return {
      taskId: typeof parsed.taskId === "string" ? parsed.taskId : null,
      topic: typeof parsed.topic === "string" ? parsed.topic : "",
      content: typeof parsed.content === "string" ? parsed.content : "",
      audience: typeof parsed.audience === "string" ? parsed.audience : "",
    };
  } catch {
    return { taskId: null, topic: "", content: "", audience: "" };
  }
}

const STEPS = [
  { label: "작업 선택" },
  { label: "내용 입력" },
  { label: "요청 확인" },
] as const;

const STEP_COPY = [
  { title: "어떤 자료를 만들고 싶으세요?", sub: "작업을 골라 주세요. 내용을 정리하는 건 함께 도와드릴게요." },
  { title: "담고 싶은 내용을 알려 주세요", sub: "두 가지만 적으면 돼요. 짧게 메모하듯 써도 괜찮아요." },
  { title: "이렇게 요청하면 돼요", sub: "선택한 템플릿과 내용을 확인해 주세요. 필요한 내용은 이전 단계에서 바꿀 수 있어요." },
] as const;

/** 작업 분류별 예시 — "막막하다면 예시를 넣어 보세요" 버튼이 채워 주는 연습용 값. */
const EXAMPLES: Record<string, { topic: string; content: string; audience: string }> = {
  image: { topic: "가을 축제 홍보 카드뉴스", content: "10월 12일부터 이틀간 여의도공원에서 열려요. 무료 입장이고, 야간 공연은 오후 7시에 시작해요.", audience: "축제를 처음 찾는 20~30대 시민" },
  doc: { topic: "체류 관련 신청서 작성", content: "신청서 항목별로 필요한 정보를 알려 주세요.\n이름과 체류 기간 등 제공하지 않은 정보는 빈칸으로 남겨 주세요.", audience: "신청서를 작성하는 본인" },
  deck: { topic: "3분기 실적 보고", content: "매출은 전분기 대비 12% 늘었고, 신규 고객은 240명 늘었어요.\n다음 분기 목표와 계획도 함께 넣어 주세요.", audience: "팀 내부 보고 대상" },
  data: { topic: "거래처 견적 표", content: "품목별 단가와 수량, 합계 금액을 정리해 주세요.\n부가세는 별도로 표시해 주세요.", audience: "거래처 담당자" },
  video: { topic: "신제품 홍보 숏폼 영상", content: "제품의 핵심 기능 3가지를 15초 안에 보여주세요.\n마지막 장면에 구매 링크를 안내해 주세요.", audience: "SNS를 즐겨 보는 20대" },
};
const GENERIC_EXAMPLE = EXAMPLES.image;

function buildRequestText(task: Task | undefined, template: TaskTemplate | undefined, d: Draft): string {
  const lines = [
    `${task ? task.label : "작업"} 작업을 부탁드려요.`,
    template ? `템플릿: ${template.title}` : null,
    "",
    `주제: ${d.topic.trim()}`,
    `보는 사람: ${d.audience.trim() || "(선택 사항)"}`,
    "",
    "꼭 담을 내용:",
    d.content.trim(),
  ].filter((l) => l !== null);
  return lines.join("\n");
}

/** 1단계 — 작업 선택 타일. TaskGrid 의 카드와 같은 색·타일 규칙을 쓰되, 링크가 아니라 라디오처럼 하나만 고른다. */
function SelectableTaskTile({ task, groupId, selected, onSelect }: { task: Task; groupId: string; selected: boolean; onSelect: () => void }) {
  const soon = task.status === "soon";
  const Icon = task.icon;
  const { bg, fg } = GROUP_COLORS[groupId] ?? { bg: "#f1f5f9", fg: "#334155" };

  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-disabled={soon}
      onClick={soon ? undefined : onSelect}
      className="relative flex flex-col items-center text-center rounded-2xl"
      style={{
        padding: "18px 12px 16px",
        background: soon ? "#fff" : bg,
        border: selected ? `1.5px solid ${color.brand}` : soon ? "1px dashed #d8dee8" : "1px solid transparent",
        boxShadow: selected ? "0 4px 14px rgba(79,123,255,.18)" : "none",
        cursor: soon ? "default" : "pointer",
      }}
    >
      {selected && (
        <span
          className="absolute flex items-center justify-center rounded-full"
          style={{ top: 10, right: 10, width: 20, height: 20, background: color.brand, color: "#fff" }}
          aria-hidden
        >
          <Check size={12} strokeWidth={3} />
        </span>
      )}
      <div className="relative" style={{ width: 44, height: 44 }}>
        {!soon && (
          <div
            aria-hidden
            className="absolute"
            style={{
              inset: 0, borderRadius: 11,
              background: "rgba(255,255,255,.6)",
              transform: "translate(-5px, 4px) rotate(-6deg)",
              boxShadow: "0 3px 7px rgba(90,70,160,.05)",
            }}
          />
        )}
        <div
          aria-hidden
          className="absolute"
          style={{
            inset: 0, borderRadius: soon ? 16 : 11,
            background: "#fff",
            border: soon ? "1px dashed #d8dee8" : "none",
            transform: soon ? "none" : "rotate(4deg)",
            boxShadow: soon ? "none" : "0 5px 12px rgba(90,70,160,.06)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon size={20} color={soon ? "#c2c7d2" : fg} aria-hidden />
        </div>
      </div>
      <span className="mt-3" style={{ ...f, fontWeight: 800, fontSize: 13.5, color: soon ? "#94a3b8" : "#0a0a0a", letterSpacing: "-0.2px" }}>
        {task.label}
      </span>
      <span className="mt-1" style={{ ...f, fontWeight: 500, fontSize: 11.5, color: soon ? "#94a3b8" : SUBTITLE_COLOR, lineHeight: 1.4 }}>
        {task.desc}
      </span>
      {soon && (
        <span
          className="inline-block mt-2 rounded-full"
          style={{ ...f, fontWeight: 700, fontSize: 10, color: "#94a3b8", background: "#fff", border: "1px solid #e2e8f0", padding: "2px 8px" }}
        >
          준비 중
        </span>
      )}
    </button>
  );
}

/**
 * 요청 작성 도움받기 — 3단계(작업 선택 → 내용 입력 → 요청 확인). UI·검증까지만 맡고,
 * 완료되면 정리된 요청문과 선택한 작업의 wsCategory 를 onComplete 으로 넘겨 해당 AI
 * 작업 화면(컴포저)에 이어 붙인다.
 *
 * 새로고침·이전 단계 이동에도 입력이 남아 있도록 매 변경마다 localStorage 에 저장한다.
 */
export default function RequestHelpScreen({ onBack, onComplete }: { onBack: () => void; onComplete: (text: string, wsCategory: WorkspaceCategory) => void }) {
  const [draft, setDraft] = useState<Draft>(loadDraft);
  const [step, setStep] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [templateIdx, setTemplateIdx] = useState(0);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const topicRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const selectedTask = draft.taskId ? getTaskById(draft.taskId) : undefined;
  const templates = useMemo(() => (draft.taskId ? templatesForTask(draft.taskId) : []), [draft.taskId]);
  const template = templates[templateIdx] ?? templates[0];

  useEffect(() => {
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch {
      // 저장 공간이 없거나 접근이 막힌 환경 — 입력 자체는 계속 동작해야 하므로 조용히 넘어간다.
    }
  }, [draft]);

  useEffect(() => setTemplateIdx(0), [draft.taskId]);
  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const setField = (key: "topic" | "content" | "audience") => (value: string) =>
    setDraft((d) => ({ ...d, [key]: value.slice(0, LIMITS[key]) }));

  const goBack = () => {
    setError(null);
    if (step === 0) onBack();
    else setStep(step - 1);
  };

  const selectTask = (taskId: string) => setDraft((d) => ({ ...d, taskId }));

  const goNextFromStep1 = () => {
    if (!selectedTask) return;
    setStep(1);
  };

  const goNextFromStep2 = () => {
    if (!draft.topic.trim()) { setError("주제를 입력해 주세요."); topicRef.current?.focus(); return; }
    if (!draft.content.trim()) { setError("꼭 담을 내용을 입력해 주세요."); contentRef.current?.focus(); return; }
    setError(null);
    setStep(2);
  };

  const doFill = () => {
    const example = EXAMPLES[groupIdOf(selectedTask)] ?? GENERIC_EXAMPLE;
    setDraft((d) => ({ ...d, ...example }));
    setConfirmOpen(false);
    setToastOpen(true);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToastOpen(false), 4000);
  };

  const askExample = () => {
    if (draft.topic.trim() || draft.content.trim() || draft.audience.trim()) setConfirmOpen(true);
    else doFill();
  };

  const finish = () => {
    if (!selectedTask?.wsCategory) return;
    onComplete(buildRequestText(selectedTask, template, draft), selectedTask.wsCategory);
    try { window.localStorage.removeItem(DRAFT_KEY); } catch { /* noop */ }
  };

  return (
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div className="w-full mx-auto" style={{ maxWidth: step === 2 ? "var(--home-container)" : 720, padding: "32px var(--gap-screen-x) 60px" }}>
        <div className="flex items-center gap-2 mb-7 flex-wrap" role="group" aria-label="진행 단계">
          {STEPS.map((s, i) => (
            <div key={s.label} className="flex items-center gap-2">
              <span
                className="flex items-center justify-center rounded-full shrink-0"
                style={{
                  width: 22, height: 22, fontSize: 11.5, fontWeight: 700,
                  background: i <= step ? color.brand : color.surface.accent,
                  color: i <= step ? "#fff" : "#94a3b8",
                }}
                aria-hidden
              >
                {i < step ? <Check size={12} strokeWidth={3} /> : i + 1}
              </span>
              <span style={{ ...f, fontWeight: i === step ? 700 : 500, fontSize: 12.5, color: i === step ? "#0a0a0a" : "#94a3b8" }}>
                {s.label}
              </span>
              {i < STEPS.length - 1 && <span style={{ width: 16, height: 1, background: "#e2e8f0" }} aria-hidden />}
            </div>
          ))}
        </div>

        <h1 className="mb-2" style={{ ...f, fontWeight: 800, fontSize: 22, color: "#0a0a0a", letterSpacing: "-0.5px" }}>
          {STEP_COPY[step].title}
        </h1>
        <p className="mb-6" style={{ ...f, fontWeight: 500, fontSize: 13.5, color: SUBTITLE_COLOR }}>
          {STEP_COPY[step].sub}
        </p>

        {step === 0 && (
          <>
            <div className="rounded-[26px]" style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "20px 20px 4px" }}>
              {TASK_GROUPS.map((group, gi) => (
                <div key={group.id} style={{ paddingTop: gi === 0 ? 0 : 18, paddingBottom: 18, borderTop: gi === 0 ? "none" : "1px solid #f1f5f9" }}>
                  <h3 className="mb-3" style={{ ...f, fontWeight: 800, fontSize: 12, color: "#94a3b8", letterSpacing: "0.3px" }}>{group.name}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4" style={{ gap: 10 }}>
                    {group.tasks.map((task) => (
                      <SelectableTaskTile key={task.id} task={task} groupId={group.id} selected={draft.taskId === task.id} onSelect={() => selectTask(task.id)} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-6">
              <button
                type="button"
                onClick={goBack}
                className="rounded-xl"
                style={{ ...f, fontWeight: 700, fontSize: 13.5, color: SUBTITLE_COLOR, background: "#fff", border: "1px solid #e2e8f0", padding: "13px 20px", cursor: "pointer" }}
              >
                홈으로 돌아가기
              </button>
              <span className="flex-1" />
              <button
                type="button"
                disabled={!selectedTask}
                onClick={goNextFromStep1}
                className={`inline-flex items-center gap-2 rounded-2xl transition-colors ${selectedTask ? "bg-[#4f7bff] hover:bg-[#3d68e8]" : "bg-[#bfdbfe]"}`}
                style={{ ...f, fontWeight: 700, fontSize: 14, color: "#fff", border: 0, padding: "13px 22px", cursor: selectedTask ? "pointer" : "not-allowed" }}
              >
                내용 입력하기 <ArrowRight size={16} aria-hidden />
              </button>
            </div>
          </>
        )}

        {step === 1 && selectedTask && (
          <div className="rounded-[26px] relative" style={{ background: "#fff", border: "1px solid #e2e8f0", padding: 24 }}>
            <div className="flex items-center gap-2.5 rounded-2xl" style={{ background: color.surface.accent, padding: "12px 16px" }}>
              <span className="flex items-center justify-center rounded-xl shrink-0" style={{ width: 32, height: 32, background: "#fff", color: color.brand }}>
                <selectedTask.icon size={17} aria-hidden />
              </span>
              <span style={{ ...f, fontWeight: 700, fontSize: 13.5, color: "#0a0a0a" }}>{selectedTask.label}</span>
              <span className="flex-1" />
              <button type="button" onClick={() => setStep(0)} style={{ ...f, fontWeight: 700, fontSize: 12.5, color: color.brand, background: "transparent", border: 0, cursor: "pointer" }}>
                작업 바꾸기
              </button>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <label htmlFor="req-topic" style={{ ...f, fontWeight: 800, fontSize: 15, color: "#0a0a0a" }}>무엇에 관한 자료인가요?</label>
                <span style={{ ...f, fontWeight: 700, fontSize: 11.5, color: color.brand }}>필수</span>
              </div>
              <input
                id="req-topic"
                ref={topicRef}
                value={draft.topic}
                onChange={(e) => setField("topic")(e.target.value)}
                maxLength={LIMITS.topic}
                aria-invalid={!!error && !draft.topic.trim()}
                placeholder="예: 가을 축제 홍보 카드뉴스"
                className="w-full rounded-xl outline-none mt-2.5"
                style={{ ...f, fontWeight: 500, fontSize: 14, color: "#0a0a0a", border: "1px solid #e2e8f0", padding: "13px 14px", background: "#fbfcfe" }}
              />
              <p className="mt-2" style={{ ...f, fontWeight: 500, fontSize: 12, color: "#94a3b8" }}>주제나 제목을 한 줄로 적어 주세요.</p>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <label htmlFor="req-body" style={{ ...f, fontWeight: 800, fontSize: 15, color: "#0a0a0a" }}>꼭 담아야 할 내용이 있나요?</label>
                <span style={{ ...f, fontWeight: 700, fontSize: 11.5, color: color.brand }}>필수</span>
              </div>
              <textarea
                id="req-body"
                ref={contentRef}
                value={draft.content}
                onChange={(e) => setField("content")(e.target.value)}
                maxLength={LIMITS.content}
                aria-invalid={!!error && !draft.content.trim()}
                placeholder="예: 10월 12일부터 이틀간 여의도공원. 무료 입장, 야간 공연은 오후 7시 시작."
                rows={6}
                className="w-full rounded-xl outline-none mt-2.5 resize-none"
                style={{ ...f, fontWeight: 500, fontSize: 14, color: "#0a0a0a", border: "1px solid #e2e8f0", padding: "13px 14px", background: "#fbfcfe", lineHeight: 1.6 }}
              />
              <p className="mt-2" style={{ ...f, fontWeight: 500, fontSize: 12, color: "#94a3b8" }}>특징, 일정, 전하고 싶은 말 등 확인된 내용을 적어 주세요.</p>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2">
                <label htmlFor="req-audience" style={{ ...f, fontWeight: 800, fontSize: 15, color: "#0a0a0a" }}>누가 보게 되나요?</label>
                <span style={{ ...f, fontWeight: 700, fontSize: 11.5, color: "#94a3b8" }}>선택</span>
              </div>
              <input
                id="req-audience"
                value={draft.audience}
                onChange={(e) => setField("audience")(e.target.value)}
                maxLength={LIMITS.audience}
                placeholder="예: 축제를 처음 찾는 20~30대 시민"
                className="w-full rounded-xl outline-none mt-2.5"
                style={{ ...f, fontWeight: 500, fontSize: 14, color: "#0a0a0a", border: "1px solid #e2e8f0", padding: "13px 14px", background: "#fbfcfe" }}
              />
            </div>

            <button
              type="button"
              onClick={askExample}
              className="mt-5"
              style={{ ...f, fontWeight: 700, fontSize: 13, color: color.brand, background: "transparent", border: 0, borderBottom: "1px solid #bfdbfe", padding: "2px 0", cursor: "pointer" }}
            >
              아직 막막하다면, 예시를 넣어 보세요
            </button>

            <div className="flex items-center justify-between mt-3">
              <span aria-live="polite" style={{ ...f, fontWeight: 600, fontSize: 12, color: error ? "#d4183d" : "transparent" }}>
                {error ?? "-"}
              </span>
            </div>

            <div className="flex items-center gap-3 mt-5 pt-5" style={{ borderTop: "1px solid #f1f5f9" }}>
              <button
                type="button"
                onClick={goBack}
                className="rounded-xl"
                style={{ ...f, fontWeight: 700, fontSize: 13.5, color: SUBTITLE_COLOR, background: "#fff", border: "1px solid #e2e8f0", padding: "13px 20px", cursor: "pointer" }}
              >
                이전
              </button>
              <span className="flex-1" />
              <button
                type="button"
                onClick={goNextFromStep2}
                className="inline-flex items-center gap-2 rounded-xl bg-[#4f7bff] hover:bg-[#3d68e8] transition-colors"
                style={{ ...f, fontWeight: 700, fontSize: 13.5, color: "#fff", border: 0, padding: "13px 20px", cursor: "pointer" }}
              >
                요청 확인하기 <ArrowRight size={16} aria-hidden />
              </button>
            </div>

            {confirmOpen && (
              <div
                role="dialog"
                aria-modal="true"
                aria-label="입력한 내용을 예시로 바꿀까요?"
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "rgba(10,10,10,.34)", borderRadius: 26, padding: 24, zIndex: 40 }}
              >
                <div className="w-full rounded-[22px]" style={{ maxWidth: 420, background: "#fff", padding: "24px 26px 22px", boxShadow: "0 24px 60px rgba(10,10,10,.22)" }}>
                  <p style={{ ...f, fontWeight: 800, fontSize: 17, color: "#0a0a0a", letterSpacing: "-0.4px" }}>입력한 내용을 예시로 바꿀까요?</p>
                  <p className="mt-2.5" style={{ ...f, fontWeight: 500, fontSize: 13, color: SUBTITLE_COLOR, lineHeight: 1.6 }}>
                    지금 적은 주제와 내용, 보는 사람을 연습용 예시로 바꿔요.
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <button
                      type="button"
                      onClick={() => setConfirmOpen(false)}
                      className="rounded-xl"
                      style={{ ...f, fontWeight: 700, fontSize: 13, color: "#0a0a0a", background: "#fff", border: "1px solid #e2e8f0", height: 44, padding: "0 18px", cursor: "pointer" }}
                    >
                      돌아가기
                    </button>
                    <span className="flex-1" />
                    <button
                      type="button"
                      onClick={doFill}
                      className="rounded-xl bg-[#4f7bff] hover:bg-[#3d68e8] transition-colors"
                      style={{ ...f, fontWeight: 700, fontSize: 13, color: "#fff", border: 0, height: 44, padding: "0 20px", cursor: "pointer" }}
                    >
                      예시 넣기
                    </button>
                  </div>
                </div>
              </div>
            )}

            {toastOpen && (
              <div
                role="status"
                className="absolute left-1/2"
                style={{ transform: "translateX(-50%)", bottom: -18, background: "#0a0a0a", color: "#fff", borderRadius: 12, padding: "12px 18px", fontSize: 13, fontWeight: 600, boxShadow: "0 12px 28px rgba(10,10,10,.24)", whiteSpace: "nowrap", zIndex: 41, ...f }}
              >
                연습용 예시예요. 실제 내용에 맞게 바꿔 주세요.
              </div>
            )}
          </div>
        )}

        {step === 2 && selectedTask && (
          <>
            <div className="flex flex-wrap gap-5 items-stretch">
              <div className="rounded-[22px]" style={{ background: "#fff", border: "1px solid #e2e8f0", padding: 20, flex: "0 1 320px", minWidth: 260 }}>
                <p style={{ ...f, fontWeight: 800, fontSize: 15, color: "#0a0a0a" }}>사용할 템플릿</p>
                {templates.length > 0 && template ? (
                  <>
                    <div className="relative mt-3.5">
                      <select
                        aria-label="템플릿 선택"
                        value={templateIdx}
                        onChange={(e) => setTemplateIdx(Number(e.target.value))}
                        className="w-full rounded-xl appearance-none"
                        style={{ ...f, fontWeight: 600, fontSize: 13.5, color: "#0a0a0a", border: "1px solid #e2e8f0", height: 46, padding: "0 36px 0 13px", background: "#fbfcfe", cursor: "pointer" }}
                      >
                        {templates.map((t, i) => (
                          <option key={t.title} value={i}>{t.title}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute pointer-events-none" style={{ right: 13, top: 15, color: "#94a3b8" }} aria-hidden />
                    </div>
                    <div
                      className="mt-4 flex items-center justify-center"
                      style={{ aspectRatio: "1 / 1", borderRadius: 14, background: "repeating-linear-gradient(135deg,#EEF0FF 0 8px,#E4E9FF 8px 16px)" }}
                    >
                      <span style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 10.5, color: "#94a3b8", textAlign: "center", padding: "0 14px" }}>
                        서식 표지 예시
                      </span>
                    </div>
                    <p className="mt-3.5" style={{ ...f, fontWeight: 700, fontSize: 13.5, color: "#0a0a0a" }}>{template.title}</p>
                    <p className="mt-1" style={{ ...f, fontWeight: 500, fontSize: 12, color: SUBTITLE_COLOR }}>{template.meta} · {template.format}</p>
                    <p className="mt-2.5" style={{ ...f, fontWeight: 500, fontSize: 11.5, color: "#94a3b8", lineHeight: 1.6 }}>
                      표지는 예시 이미지예요. 실제 결과와 다를 수 있어요.
                    </p>
                  </>
                ) : (
                  <p className="mt-3.5" style={{ ...f, fontWeight: 500, fontSize: 13, color: SUBTITLE_COLOR }}>선택한 작업에 맞는 서식을 함께 골라 드려요.</p>
                )}
              </div>

              <div className="rounded-[22px]" style={{ background: "#fff", border: "1px solid #e2e8f0", padding: 20, flex: "1 1 380px", minWidth: 280 }}>
                <p style={{ ...f, fontWeight: 800, fontSize: 15, color: "#0a0a0a" }}>정리한 요청</p>
                <div className="mt-3.5" style={{ ...f, fontWeight: 500, fontSize: 13.5, lineHeight: 1.9, color: "#0a0a0a", whiteSpace: "pre-line" }}>
                  {buildRequestText(selectedTask, template, draft)}
                </div>
                <div className="mt-4 pt-3.5" style={{ borderTop: "1px solid #e8eaf0", ...f, fontWeight: 700, fontSize: 12.5, lineHeight: 1.7, color: "#0a0a0a" }}>
                  입력하지 않은 수치·가격·날짜는 임의로 추가하지 말고, 확인이 필요한 부분을 알려 주세요.
                </div>
                <p className="mt-2.5" style={{ ...f, fontWeight: 500, fontSize: 11.5, color: "#94a3b8" }}>작성한 내용은 다음 화면에 그대로 이어져요.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6 pt-5" style={{ borderTop: "1px solid #e2e8f0" }}>
              <button
                type="button"
                onClick={goBack}
                className="rounded-xl"
                style={{ ...f, fontWeight: 700, fontSize: 13.5, color: SUBTITLE_COLOR, background: "#fff", border: "1px solid #e2e8f0", padding: "13px 20px", cursor: "pointer" }}
              >
                내용 수정하기
              </button>
              <span className="flex-1" />
              <button
                type="button"
                onClick={finish}
                className="rounded-xl bg-[#4f7bff] hover:bg-[#3d68e8] transition-colors"
                style={{ ...f, fontWeight: 700, fontSize: 14, color: "#fff", border: 0, padding: "14px 24px", cursor: "pointer" }}
              >
                완료 — 초안 만들기
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function groupIdOf(task: Task | undefined): string {
  if (!task) return "image";
  for (const g of TASK_GROUPS) if (g.tasks.some((t) => t.id === task.id)) return g.id;
  return "image";
}
