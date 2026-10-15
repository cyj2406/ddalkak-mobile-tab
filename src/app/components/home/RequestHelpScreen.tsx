import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, ChevronDown, FileText, HelpCircle, Link2, Paperclip, RotateCcw, X } from "lucide-react";
import { color, f, SUBTITLE_COLOR } from "@/app/styleTokens";
import { TASK_GROUPS, getTaskById, templateKey, visibleTasksOf, type Task, type TaskTemplate } from "@/app/data/tasks";
import { rankTemplatesForTopic } from "@/app/data/templateRanking";
import { clampNumberField, formatForTask, formatSummary, optionText, resolveFormat, type FormatField } from "@/app/data/requestCards";
import { isTemplatePreviewMode, previewSamplesFor } from "@/app/data/templatePreviewSamples";
import { SelectedTemplateCard } from "@/app/components/home/SelectedTemplateCard";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/app/components/ui/tooltip";
import { Button } from "@/app/components/common/Button";
import { AutoGrowTextarea } from "@/app/components/common/AutoGrowTextarea";
import { Modal } from "@/app/components/common/Modal";
import { showToast } from "@/app/components/common/Toast";
import type { WorkspaceCategory } from "@/app/App";

const DRAFT_KEY = "ddalkkak.requestHelp.draft";

/** 요청 작성 도우미에서만 고를 수 없는 작업 — 홈 등 다른 목록에는 그대로 남는다. */
const EXCLUDED_TASK_IDS = new Set(["typo"]);
const helperTasksOf = (g: (typeof TASK_GROUPS)[number]) => visibleTasksOf(g).filter((t) => !EXCLUDED_TASK_IDS.has(t.id));

/** 주제가 이보다 짧으면 "조금 더 자세히" 힌트를 보여 준다(업종·문서 종류를 주제에서 추론하므로) */
const TOPIC_HINT_UNDER = 8;

/**
 * 요청 작성 4행(2026-10-15 최종): 만들 작업 / 주제(*) / 꼭 담아야 할 내용(선택) / 형식축 + 참고 자료.
 * 형식축은 작업마다 하나(requestCards.ts FORMAT_BY_TASK), 대상·목적·문구 톤은 워크스페이스 카드가
 * 템플릿을 정한 뒤 후보와 함께 묻는다(같은 질문을 두 번 하지 않는다).
 */
type Draft = {
  taskId: string | null;
  topic: string;
  /** 작업별 형식축 값(필드 key → 값). 없는 키는 그 필드의 기본값 */
  format: Record<string, string>;
  /** 꼭 담아야 할 내용(선택) — 사용자만 아는 실제 값이 결과물에 들어가는 통로. AI가 채우지 않는다. */
  content: string;
  /** 참고 자료 — 파일 이름 또는 URL. 파일 업로드 연결 전이라 이름만 넘긴다. */
  references: string[];
};

const EMPTY_DRAFT: Draft = { taskId: null, topic: "", format: {}, content: "", references: [] };

function loadDraft(): Draft {
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return EMPTY_DRAFT;
    const parsed = JSON.parse(raw);
    return {
      taskId: typeof parsed.taskId === "string" && !EXCLUDED_TASK_IDS.has(parsed.taskId) ? parsed.taskId : null,
      topic: typeof parsed.topic === "string" ? parsed.topic : "",
      format: parsed.format && typeof parsed.format === "object"
        ? Object.fromEntries(Object.entries(parsed.format).filter((e): e is [string, string] => typeof e[1] === "string"))
        : {},
      content: typeof parsed.content === "string" ? parsed.content : "",
      references: Array.isArray(parsed.references) ? parsed.references.filter((x: unknown): x is string => typeof x === "string") : [],
    };
  } catch {
    return EMPTY_DRAFT;
  }
}

const STEPS = [
  { label: "요청 작성" },
  { label: "템플릿·요청 확인" },
] as const;

const STEP_COPY = [
  { title: "어떤 내용을 만들까요?", sub: "만들 작업과 주제만 정하면 시작할 수 있어요." },
  { title: "템플릿과 요청 내용을 확인해 주세요.", sub: "선택한 템플릿과 내용을 확인해 주세요. 필요한 내용은 이전 단계에서 바꿀 수 있어요." },
] as const;

/** 두 단계가 공유하는 본문 너비 — 기존 3단계 화면이 쓰던 값 그대로. */
const STEP_MAX_WIDTH = "var(--home-container)";
/** 아래 여백은 하단 고정 CTA 바가 맡는다. */
const STEP_PADDING = "32px var(--gap-screen-x) 0";

/** 요청 작성 → 워크스페이스로 넘기는 값. 카드 답변은 워크스페이스에서 이어 붙인다. */
export interface RequestHandoff {
  taskId: string;
  topic: string;
  /** null — 템플릿 없이(빈 템플릿) 시작 */
  templateTitle: string | null;
  /** 형식축 값(기본값 포함) — 워크스페이스 후보가 이 값에 맞춰진다(예: 영상 길이 → 장면 수) */
  format: Record<string, string>;
  /** 꼭 담아야 할 내용 — 워크스페이스에서 해당 ★ 카드(contentCard)를 미리 채운다. 빈 문자열이면 카드에서 다시 묻는다. */
  content: string;
  /** 요청 작성 단계까지의 요청문(buildRequestText) */
  baseText: string;
}

/**
 * 요청 작성 단계까지의 요청문 — 화면의 "정리한 요청"과 넘기는 값이 모두 같은 draft 에서
 * 나온다. 형식 값은 템플릿이 정하지 않으므로 템플릿 유무와 관계없이 항상 넣는다.
 * 수치·가격·날짜를 지어내지 말라는 문장은 붙이지 않는다 — 그건 워크스페이스의 적는 카드가
 * 비면 해당 영역을 결과물에서 빼는 구조로 보장한다.
 */
function buildRequestText(task: Task | undefined, template: TaskTemplate | undefined, d: Draft): string {
  const lines: (string | null)[] = [
    `${task ? task.label : "작업"} 작업을 부탁드려요.`,
    template ? `템플릿: ${template.title}` : "템플릿: 빈 템플릿",
    "",
    `주제: ${d.topic.trim()}`,
    d.references.length > 0 ? `참고 자료: ${d.references.join(", ")}` : null,
  ];
  const def = d.taskId ? formatForTask(d.taskId) : undefined;
  if (def) lines.push(`${def.label}: ${formatSummary(def, d.format)}`);
  return lines.filter((l) => l !== null).join("\n");
}

const QUESTION_LABEL_STYLE = { ...f, fontWeight: 600, fontSize: 14, color: "#0a0a0a" } as const;
/** 필수 표시 — 필수 칸이 주제 하나뿐이라 *도 주제에만 붙는다. */
const REQUIRED_MARK_STYLE = { ...f, fontWeight: 700, fontSize: 15, color: color.brand, lineHeight: 1 } as const;
const FIELD_ERROR_STYLE = { ...f, fontWeight: 600, fontSize: 12, color: "#d4183d" } as const;
/** 작업 선택·비율/장수 드롭다운이 함께 쓰는 트리거 모양(기존 작업 선택 트리거 그대로). */
const FIELD_BOX_STYLE = { height: 46, background: "#fbfcfe", borderRadius: 12 } as const;

/**
 * 작업 선택 — 드롭다운은 유지하되(선택지가 늘어도 높이가 변하지 않는다), 펼친 목록 위에
 * 카테고리 칩을 둬 1차로 거른다. 준비 중 작업은 보여 주지 않는다.
 */
function TaskSelectField({
  taskId,
  onSelect,
  error,
  triggerRef,
}: {
  taskId: string | null;
  onSelect: (id: string) => void;
  error?: string;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const [open, setOpen] = useState(false);
  const [groupFilter, setGroupFilter] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const selectedTask = taskId ? getTaskById(taskId) : undefined;

  const groups = useMemo(
    () => TASK_GROUPS.map((g) => ({ group: g, tasks: helperTasksOf(g) })).filter((x) => x.tasks.some((t) => t.status !== "soon")),
    [],
  );
  const shownGroups = groupFilter ? groups.filter((x) => x.group.id === groupFilter) : groups;
  const selectableIds = shownGroups.flatMap((x) => x.tasks.filter((t) => t.status !== "soon").map((t) => t.id));

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => { if (!wrapRef.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); triggerRef.current?.focus(); } };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, triggerRef]);

  const moveFocus = (fromId: string, dir: 1 | -1) => {
    if (selectableIds.length === 0) return;
    const curPos = selectableIds.indexOf(fromId);
    const nextPos = ((curPos === -1 ? 0 : curPos + dir) + selectableIds.length) % selectableIds.length;
    document.getElementById(`task-option-${selectableIds[nextPos]}`)?.focus();
  };

  const renderOption = (task: Task) => {
    const isSelected = taskId === task.id;
    return (
      <button
        key={task.id}
        id={`task-option-${task.id}`}
        type="button"
        role="option"
        aria-selected={isSelected}
        onClick={() => { onSelect(task.id); setOpen(false); triggerRef.current?.focus(); }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") { e.preventDefault(); moveFocus(task.id, 1); }
          if (e.key === "ArrowUp") { e.preventDefault(); moveFocus(task.id, -1); }
        }}
        className="w-full flex items-center gap-2.5 text-left outline-none transition-colors hover:bg-[#f8fafc] focus-visible:bg-[#f1f5f9]"
        style={{ padding: "9px 14px", background: isSelected ? color.surface.accent : undefined, }}
      >
        <task.icon size={16} color={isSelected ? color.brand : "#64748b"} className="shrink-0" aria-hidden />
        <span style={{ ...f, fontWeight: isSelected ? 700 : 500, fontSize: 13.5, color: "#0a0a0a" }}>{task.label}</span>
        <span className="flex-1" />
        {isSelected && <Check size={14} color={color.brand} strokeWidth={3} aria-hidden />}
      </button>
    );
  };

  const chip = (id: string | null, label: string) => {
    const active = groupFilter === id;
    return (
      <button
        key={id ?? "all"}
        type="button"
        aria-pressed={active}
        onClick={() => setGroupFilter(id)}
        className="shrink-0 rounded-full outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[#4f7bff]"
        style={{
          ...f, fontWeight: active ? 700 : 500, fontSize: 12.5, height: 28, padding: "0 11px",
          background: active ? color.surface.accent : "#fff",
          color: active ? color.brand : "#475569",
          border: `1px solid ${active ? "#c7d4ff" : "#e2e8f0"}`,
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <div ref={wrapRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-invalid={!!error}
        className="w-full flex items-center gap-2.5 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff]"
        style={{ ...FIELD_BOX_STYLE, padding: "0 14px", border: `1px solid ${error ? "#fca5a5" : "#e2e8f0"}` }}
      >
        {selectedTask ? (
          <>
            <selectedTask.icon size={17} color={color.brand} className="shrink-0" aria-hidden />
            <span className="flex-1 min-w-0 truncate text-left" style={{ ...f, fontWeight: 600, fontSize: 14, color: "#0a0a0a" }}>
              {selectedTask.label}
            </span>
          </>
        ) : (
          <span className="flex-1 text-left" style={{ ...f, fontWeight: 500, fontSize: 14, color: "#94a3b8" }}>
            만들 작업을 선택해 주세요
          </span>
        )}
        <ChevronDown size={16} color="#94a3b8" className="shrink-0" style={{ transform: open ? "rotate(180deg)" : "none" }} aria-hidden />
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 mt-1.5 rounded-xl z-20 flex flex-col"
          style={{ maxHeight: 360, background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0px 8px 32px rgba(0,0,0,0.14)" }}
        >
          <div role="group" aria-label="카테고리" className="flex gap-1.5 overflow-x-auto shrink-0" style={{ padding: "10px 12px", borderBottom: "1px solid #f1f5f9", scrollbarWidth: "none" }}>
            {chip(null, "전체")}
            {groups.map(({ group }) => chip(group.id, group.name))}
          </div>
          <div role="listbox" aria-label="만들 작업 선택" className="overflow-y-auto">
            {shownGroups.map(({ group, tasks }) => (
              <div key={group.id}>
                <p style={{ ...f, fontWeight: 700, fontSize: 11, color: "#94a3b8", padding: "8px 14px 4px" }}>{group.name}</p>
                {tasks.filter((t) => t.status !== "soon").map(renderOption)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * 형식축 — 4행 왼쪽(참고 자료와 2열)의 드롭다운. 선택형은 전부 드롭다운이다(라디오·칩을 쓰지 않는다 — 선택지가
 * 늘어도 높이가 고정). 모양은 만들 작업 트리거와 같다. 항상 기본값이 선택돼 있고 빈 선택지는 없다.
 */
function FormatSelect({ id, field, value, onChange }: { id: string; field: Extract<FormatField, { kind: "select" }>; value: string; onChange: (v: string) => void }) {
  return (
    <div className="relative min-w-0">
      <select
        id={id}
        aria-label={field.label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff]"
        style={{ ...FIELD_BOX_STYLE, ...f, fontWeight: 600, fontSize: 14, color: "#0a0a0a", padding: "0 38px 0 14px", border: "1px solid #e2e8f0", cursor: "pointer" }}
      >
        {field.options.map((o) => (
          <option key={o.value} value={o.value}>{optionText(field, o.value)}</option>
        ))}
      </select>
      <ChevronDown size={16} color="#94a3b8" className="absolute pointer-events-none" style={{ right: 14, top: 15 }} aria-hidden />
    </div>
  );
}

type NumberField = Extract<FormatField, { kind: "number" }>;

/**
 * 스테퍼 — 연속 수치(브로셔 면수·영상 길이)용. 숫자를 직접 타이핑할 수 있고(화살표로만 올리게 막지 않는다),
 * 타이핑 도중에는 범위 밖 값도 그대로 둔다(1을 치고 5를 치려는 순간을 막으면 15를 못 쓴다) — 범위 보정은
 * blur·화살표·↑↓ 때만 하고, 보정했으면 아래 회색 한 줄로 알린다. 빈 값은 기본값으로 되돌린다.
 * 높이·테두리·라운드·폰트는 드롭다운(FormatSelect)과 같다. 브라우저 기본 스피너는 숨기고, 오른쪽 끝에 위아래로 쌓은 작은 ▲▼(회색 상자, 각 22×14)를 쓴다.
 */
function NumberStepper({ id, field, value, onChange, onNotice }: {
  id: string; field: NumberField; value: string; onChange: (v: string) => void;
  /** 넘기면 안내 문구를 직접 그리지 않고 위로 올린다 — 좁은 칸(영상 길이)에서 문구가 줄바꿈되지 않게 두 칸 아래에 한 줄로 그린다 */
  onNotice?: (text: string | null) => void;
}) {
  const [text, setText] = useState(value);
  const [notice, setNotice] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { setText(value); }, [value]);

  const commit = (raw: string) => {
    const { value: next, notice: why } = clampNumberField(field, raw);
    setText(next);
    // 보정 안내는 다음 입력 전까지 남긴다 — 범위 안의 같은 값으로 칸을 벗어날 때(blur) 지우지 않는다.
    if (why) setNotice(why);
    else if (next !== value) setNotice(null);
    if (next !== value) onChange(next);
  };
  const step = (d: 1 | -1) => {
    const cur = Number.parseInt(text, 10);
    commit(String((Number.isNaN(cur) ? Number(field.defaultValue) : cur) + d));
  };
  const n = Number.parseInt(value, 10);
  const largeNotice = field.large && n >= field.large.from ? field.large.notice : null;
  const shownNotice = notice ?? largeNotice;
  useEffect(() => {
    onNotice?.(shownNotice);
  }, [shownNotice]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => () => onNotice?.(null), []); // eslint-disable-line react-hooks/exhaustive-deps
  const range = field.max !== undefined ? `${field.min}에서 ${field.max}${field.unit ?? ""}` : `${field.min} 이상`;
  const arrowBtn: React.CSSProperties = { width: 22, height: 14, background: "transparent", border: 0, color: "#475569", cursor: "pointer", padding: 0 };

  // 단위는 입력칸 안쪽, 숫자 바로 뒤에 회색 suffix 로 둔다(칸 밖에 두면 다음 칸의 글자처럼 읽힌다).
  // 그래서 입력 폭을 숫자 길이에 맞추고, 빈 곳을 눌러도 입력에 포커스가 가도록 상자 전체를 누를 수 있게 한다.
  return (
    <div className="min-w-0">
      <div
        onClick={(e) => { if (!(e.target as HTMLElement).closest("button, input")) inputRef.current?.focus(); }}
        className="relative min-w-0 flex items-center focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#4f7bff]"
        style={{ ...FIELD_BOX_STYLE, border: "1px solid #e2e8f0", cursor: "text" }}
      >
          <input
            ref={inputRef}
            id={id}
            type="number"
            inputMode="numeric"
            min={field.min}
            max={field.max}
            value={text}
            onChange={(e) => { setText(e.target.value); setNotice(null); }}
            onBlur={(e) => commit(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") { e.preventDefault(); step(1); }
              if (e.key === "ArrowDown") { e.preventDefault(); step(-1); }
              if (e.key === "Enter") commit(e.currentTarget.value);
            }}
            aria-label={`${field.label}, ${range}`}
            className="h-full bg-transparent [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            style={{
              ...f, fontWeight: 600, fontSize: 14, color: "#0a0a0a", border: 0, outline: "none", boxShadow: "none",
              padding: field.unit ? "0 0 0 14px" : "0 6px 0 14px",
              // 단위가 있으면 숫자 폭만큼만 차지해 단위가 숫자 바로 뒤에 붙는다
              ...(field.unit ? { width: `calc(${Math.max(1, text.length)}ch + 16px)`, flex: "none" } : { flex: 1, minWidth: 0 }),
            }}
          />
          {field.unit && <span aria-hidden style={{ ...f, fontWeight: 500, fontSize: 14, color: "#94a3b8", marginLeft: 3 }}>{field.unit}</span>}
          {field.unit && <span className="flex-1 self-stretch" />}
          {/* ▲▼ — 오른쪽 끝에 위아래로 쌓은 작은 회색 상자(브라우저 기본 스피너와 같은 모양, 서비스 색으로) */}
          <div className="flex flex-col shrink-0 overflow-hidden" style={{ marginRight: 12, borderRadius: 4, background: "#eef1f5" }}>
            <button type="button" tabIndex={-1} aria-label={`${field.label} 늘리기`} onClick={() => step(1)} className="flex items-center justify-center hover:bg-[#e2e8f0]" style={arrowBtn}>
              <svg width="9" height="6" viewBox="0 0 9 6" aria-hidden><path d="M4.5 0L9 6H0z" fill="currentColor" /></svg>
            </button>
            <button type="button" tabIndex={-1} aria-label={`${field.label} 줄이기`} onClick={() => step(-1)} className="flex items-center justify-center hover:bg-[#e2e8f0]" style={arrowBtn}>
              <svg width="9" height="6" viewBox="0 0 9 6" aria-hidden><path d="M4.5 6L9 0H0z" fill="currentColor" /></svg>
            </button>
          </div>
      </div>
      {!onNotice && shownNotice && (
        <p role="status" className="mt-1.5" style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#94a3b8" }}>{shownNotice}</p>
      )}
    </div>
  );
}

/**
 * 참고 자료(선택) — 2열 절반 폭에 들어가는 한 칸. 파일 첨부는 별도 버튼이 아니라 입력칸 안쪽 오른쪽 끝의
 * 클립 아이콘이다(바깥 버튼이면 절반 폭에서 입력 영역이 너무 좁아진다). 붙인 링크·파일은 입력칸 안에 칩으로
 * 표시하고 ×로 뺀다. 링크는 Enter 또는 칸을 벗어날 때 추가된다. 파일 업로드가 아직 연결되지 않아 이름만 기록한다.
 */
function ReferenceField({ items, onChange }: { items: string[]; onChange: (items: string[]) => void }) {
  const [url, setUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const add = (next: string[]) => onChange([...items, ...next.filter((x) => x && !items.includes(x))].slice(0, 10));
  const addUrl = () => {
    const v = url.trim();
    if (!v) return;
    add([v]);
    setUrl("");
  };
  const isUrl = (v: string) => /^https?:\/\/|^www\./i.test(v);

  return (
    <div
      className="relative flex flex-wrap items-center gap-1.5 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#4f7bff]"
      style={{ minHeight: FIELD_BOX_STYLE.height, background: FIELD_BOX_STYLE.background, borderRadius: FIELD_BOX_STYLE.borderRadius, border: "1px solid #e2e8f0", padding: "6px 44px 6px 8px" }}
    >
      {items.map((item) => (
        <span key={item} className="inline-flex items-center gap-1 rounded-lg min-w-0" style={{ maxWidth: "100%", background: "#f1f5f9", padding: "3px 3px 3px 8px" }}>
          {isUrl(item) ? <Link2 size={13} color="#64748b" className="shrink-0" aria-hidden /> : <FileText size={13} color="#64748b" className="shrink-0" aria-hidden />}
          <span className="truncate" style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#334155", maxWidth: 180 }}>{item}</span>
          <button
            type="button"
            onClick={() => onChange(items.filter((x) => x !== item))}
            aria-label={`${item} 빼기`}
            className="shrink-0 flex items-center justify-center rounded-md outline-none hover:bg-[#e2e8f0] focus-visible:ring-2 focus-visible:ring-[#4f7bff]"
            style={{ width: 20, height: 20, background: "transparent", border: 0, color: "#64748b", cursor: "pointer" }}
          >
            <X size={12} aria-hidden />
          </button>
        </span>
      ))}
      <input
        id="req-ref"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.nativeEvent.isComposing) { e.preventDefault(); addUrl(); }
          if (e.key === "Backspace" && !url && items.length > 0) onChange(items.slice(0, -1));
        }}
        onBlur={addUrl}
        maxLength={500}
        placeholder={items.length > 0 ? "" : "링크를 붙여 넣거나 파일 첨부"}
        className="flex-1 bg-transparent placeholder:text-[#9ca3af]"
        // 포커스 표시는 바깥 상자(focus-within 링)가 맡는다 — 안쪽 입력에는 테두리·outline·그림자를 두지 않는다.
        style={{ ...f, fontWeight: 500, fontSize: 14, color: "#0a0a0a", minWidth: items.length > 0 ? 60 : 120, height: 32, padding: "0 6px", border: 0, outline: "none", boxShadow: "none" }}
      />
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        aria-label="파일 첨부"
        title="파일 첨부"
        className="absolute flex items-center justify-center rounded-lg outline-none hover:bg-[#f1f5f9] focus-visible:ring-2 focus-visible:ring-[#4f7bff]"
        style={{ right: 7, top: 7, width: 32, height: 32, background: "transparent", border: 0, color: "#64748b", cursor: "pointer" }}
      >
        <Paperclip size={16} aria-hidden />
      </button>
      <input
        ref={fileRef}
        type="file"
        multiple
        hidden
        onChange={(e) => { add(Array.from(e.target.files ?? []).map((file) => file.name)); e.target.value = ""; }}
      />
    </div>
  );
}

/** 2단계 "템플릿 / 정리한 요청" — 데스크톱은 35% + 65% 가로 분할, 그 아래는 세로로 쌓인다. */
function useIsDesktopSplit() {
  const [match, setMatch] = useState(() => typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setMatch(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return match;
}

/** "정리한 요청" 안의 항목 하나 — 라벨(작은 회색) + 값, `big`이면 주제 전용 크기. */
function SummaryField({ label, value, big }: { label: string; value: string; big?: boolean }) {
  return (
    <div className="min-w-0">
      <p style={{ ...f, fontWeight: 600, fontSize: 13.5, color: "#64748b", letterSpacing: "-0.2px" }}>{label}</p>
      <p
        className="mt-1.5 whitespace-pre-line break-words"
        style={{ ...f, fontWeight: big ? 700 : 500, fontSize: big ? 18 : 15.5, color: "#1e293b", lineHeight: big ? 1.4 : 1.6, letterSpacing: big ? "-0.3px" : "-0.1px" }}
      >
        {value}
      </p>
    </div>
  );
}

/**
 * "정리한 요청" — 요청 작성에서 받은 값을 항목별로 보여 준다(값을 새로 짓지 않는다).
 * 형식 값은 필드마다 한 항목(영상은 비율·길이 2열), 꼭 담을 내용·참고 자료는 적었을 때만 보인다.
 */
function RequestSummary({ task, template, draft }: { task: Task; template: TaskTemplate | undefined; draft: Draft }) {
  const def = formatForTask(task.id);
  const values = resolveFormat(def, draft.format);
  return (
    <div className="flex flex-col gap-5">
      <SummaryField label="주제" value={draft.topic.trim()} big />
      <div>
        <p style={{ ...f, fontWeight: 600, fontSize: 13.5, color: "#64748b", letterSpacing: "-0.2px" }}>작업 · 템플릿</p>
        <p className="mt-1.5" style={{ ...f, fontWeight: 500, fontSize: 13.5, color: "#64748b" }}>
          {task.label} · {template ? template.title : "템플릿 없이 시작"}
        </p>
      </div>
      {def && (
        <div className={def.fields.length > 1 ? "grid sm:grid-cols-2 gap-4" : undefined}>
          {def.fields.map((fd) => <SummaryField key={fd.key} label={fd.label} value={optionText(fd, values[fd.key])} />)}
        </div>
      )}
      {draft.content.trim() && <SummaryField label="꼭 담을 내용" value={draft.content.trim()} />}
      {draft.references.length > 0 && <SummaryField label="참고 자료" value={draft.references.join("\n")} />}
    </div>
  );
}

/**
 * 요청 작성 도움받기 — 2단계(요청 작성 → 템플릿·요청 확인).
 *
 * 1단계는 4행이다 — 만들 작업 / 주제(*) / 꼭 담아야 할 내용(선택) / 형식축 + 참고 자료.
 * 완료하면 고른 작업·주제·템플릿을 onComplete 로 넘기고, 세부 내용은 워크스페이스의
 * "확인이 필요해요" 카드(RequestCardsPanel)가 이어서 묻는다 — 여기서 실제 생성이나 크레딧
 * 차감은 일어나지 않는다.
 *
 * 새로고침·이전 단계 이동에도 입력이 남아 있도록 매 변경마다 localStorage 에 저장한다.
 * 특정 작업을 이미 고르고 들어오는 진입(initialTaskId)은 항상 빈 폼에서 시작한다.
 */
export default function RequestHelpScreen({
  onBack,
  onComplete,
  initialTaskId,
}: {
  onBack: () => void;
  onComplete: (handoff: RequestHandoff, wsCategory: WorkspaceCategory) => void;
  initialTaskId?: string;
}) {
  const [draft, setDraft] = useState<Draft>(() =>
    initialTaskId ? { ...EMPTY_DRAFT, taskId: initialTaskId } : loadDraft()
  );
  const [step, setStep] = useState(0);
  // 영상처럼 한 라벨 아래 두 칸이 있을 때 스테퍼 안내를 두 칸 아래에 한 줄로 그린다
  const [pairNotice, setPairNotice] = useState<string | null>(null);
  const isDesktopSplit = useIsDesktopSplit();
  const [errors, setErrors] = useState<{ task?: string; topic?: string }>({});
  // 선택한 템플릿 — undefined: 아직 안 고름(첫 템플릿이 기본), null: 자유 구성, 문자열: templateKey.
  const [selectedKey, setSelectedKey] = useState<string | null | undefined>(undefined);
  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);
  const resetBtnRef = useRef<HTMLButtonElement>(null);
  const [submitting, setSubmitting] = useState(false);

  const taskTriggerRef = useRef<HTMLButtonElement>(null);
  const topicRef = useRef<HTMLTextAreaElement>(null);

  const selectedTask = draft.taskId ? getTaskById(draft.taskId) : undefined;
  // "사용할 템플릿"에는 주제와 업종 키워드가 맞는 실제 템플릿을 추천으로 먼저 보여 주고(목록 1순위),
  // 마음에 안 들면 "템플릿 변경"에서 같은 순서의 목록으로 바꾼다. 2단계에 들어갈 때의 주제로 정렬한다.
  const templates = useMemo(
    () => (draft.taskId
      ? rankTemplatesForTopic(draft.taskId, draft.topic, isTemplatePreviewMode() ? previewSamplesFor(draft.taskId) : [])
      : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draft.taskId, step],
  );
  const template = selectedKey === null ? undefined : templates.find((t) => templateKey(t) === selectedKey) ?? templates[0];
  const formatDef = draft.taskId ? formatForTask(draft.taskId) : undefined;
  const hasAnyInput = !!draft.topic.trim() || Object.keys(draft.format).length > 0 || !!draft.content.trim() || draft.references.length > 0;
  const topicLen = draft.topic.trim().length;
  const missingHint = !draft.taskId ? "만들 작업을 골라주세요" : !draft.topic.trim() ? "주제를 적어주세요" : null;

  useEffect(() => {
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch {
      // 저장 공간이 없거나 접근이 막힌 환경 — 입력 자체는 계속 동작해야 하므로 조용히 넘어간다.
    }
  }, [draft]);

  // 작업이 바뀌면 그 작업 기준으로 다시 골라야 하는 템플릿만 해제한다(주제는 보존).
  useEffect(() => {
    setSelectedKey(undefined);
  }, [draft.taskId]);

  const setTopic = (value: string) => {
    setDraft((d) => ({ ...d, topic: value }));
    if (value.trim()) setErrors((e) => ({ ...e, topic: undefined }));
  };


  // 형식 값은 작업마다 달라, 작업을 바꾸면 새 작업의 기본값으로 돌아간다.
  const selectTask = (taskId: string) => {
    setDraft((d) => (d.taskId === taskId ? d : { ...d, taskId, format: {} }));
    setErrors((e) => ({ ...e, task: undefined }));
  };

  const goNextFromStep0 = () => {
    const next: typeof errors = {};
    if (!draft.taskId) next.task = "만들 작업을 선택해 주세요.";
    if (!draft.topic.trim()) next.topic = "주제를 입력해 주세요.";
    setErrors(next);
    if (next.task) { taskTriggerRef.current?.focus(); return; }
    if (next.topic) { topicRef.current?.focus(); return; }
    setStep(1);
  };

  // 초기화 — 주제·꼭 담을 내용·참고 자료를 비우고 형식축은 기본값으로 돌린다(고른 작업은 유지).
  const resetInputs = () => {
    setDraft((d) => ({ ...d, topic: "", format: {}, content: "", references: [] }));
    setErrors({});
    setResetConfirmOpen(false);
    requestAnimationFrame(() => topicRef.current?.focus({ preventScroll: true }));
    showToast("입력한 내용을 초기화했어요.");
  };

  const finish = () => {
    if (submitting || !selectedTask?.wsCategory || !draft.taskId) return;
    setSubmitting(true);
    onComplete(
      {
        taskId: draft.taskId,
        topic: draft.topic.trim(),
        templateTitle: template?.title ?? null,
        format: resolveFormat(formatDef, draft.format),
        content: draft.content.trim(),
        baseText: buildRequestText(selectedTask, template, draft),
      },
      selectedTask.wsCategory,
    );
    try { window.localStorage.removeItem(DRAFT_KEY); } catch { /* noop */ }
  };


  return (
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div className="w-full mx-auto flex-1 flex flex-col" style={{ maxWidth: STEP_MAX_WIDTH, padding: STEP_PADDING }}>
        {/* 단계 표시는 상단에 고정한다 — 칸이 늘어나 페이지가 스크롤돼도 지금 어느 단계인지 보인다. */}
        <div className="sticky top-0 z-10 flex items-center gap-2 mb-5 flex-wrap" role="group" aria-label="진행 단계" style={{ background: "#f8fafc", padding: "12px 0 10px", marginTop: -12 }}>
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

        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="min-w-0">
            <h1 className="mb-2" style={{ ...f, fontWeight: 800, fontSize: 22, color: "#0a0a0a", letterSpacing: "-0.5px" }}>
              {STEP_COPY[step].title}
            </h1>
            <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: SUBTITLE_COLOR }}>
              {STEP_COPY[step].sub}
            </p>
          </div>
          {step === 0 && (
            <Button
              ref={resetBtnRef}
              type="button"
              variant="secondary"
              size="md"
              className="shrink-0 whitespace-nowrap"
              disabled={!hasAnyInput}
              onClick={() => setResetConfirmOpen(true)}
              style={{ height: 40, padding: "0 14px", fontSize: 13.5 }}
            >
              <RotateCcw size={15} aria-hidden />
              초기화
            </Button>
          )}
        </div>

        {step === 0 && (
          <div className="rounded-[26px]" style={{ background: "#fff", border: "1px solid #e2e8f0", padding: 24 }}>
            <div className="flex flex-col gap-6">
              {/* 1행 — 만들 작업(전폭). 아이콘 + 라벨이 들어가고 선택지가 14종이라 넓게 둔다. */}
              <div>
                <div className="mb-2.5">
                  <span style={QUESTION_LABEL_STYLE}>만들 작업</span>
                </div>
                <TaskSelectField taskId={draft.taskId} onSelect={selectTask} error={errors.task} triggerRef={taskTriggerRef} />
                {errors.task && <span role="alert" className="block mt-1.5" style={FIELD_ERROR_STYLE}>{errors.task}</span>}
              </div>

              {/* 2행 — 주제(유일한 필수). */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <label htmlFor="req-topic" style={QUESTION_LABEL_STYLE}>어떤 주제로 만들까요?</label>
                  {/* * 하나만으로는 필수인지 모를 수 있어, 마우스를 올리거나 키보드로 포커스하면 이유까지 알려 준다. */}
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span
                        tabIndex={0}
                        aria-label="필수 항목"
                        className="inline-flex items-center justify-center rounded outline-none focus-visible:ring-2 focus-visible:ring-[#4f7bff]"
                        style={{ ...REQUIRED_MARK_STYLE, width: 16, height: 18, cursor: "help" }}
                      >
                        *
                      </span>
                    </TooltipTrigger>
                    <TooltipContent>필수 항목이에요. 주제를 적어야 다음 단계로 넘어갈 수 있어요.</TooltipContent>
                  </Tooltip>
                </div>
                {/* 서술형이라 한 줄 input 대신 1줄 시작·최대 3줄 자동 확장(넘으면 칸 안 스크롤). */}
                <AutoGrowTextarea
                  id="req-topic"
                  ref={topicRef}
                  value={draft.topic}
                  onChange={setTopic}
                  maxRows={3}
                  singleLine
                  aria-required
                  aria-invalid={!!errors.topic}
                  // 주제는 한 덩어리 문장 — Enter는 줄바꿈 대신 다음 칸(꼭 담아야 할 내용)으로 이동한다.
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.nativeEvent.isComposing) document.getElementById("req-content")?.focus();
                  }}
                  placeholder="예: 성수동 고깃집 숙성 삼겹살 런치 홍보"
                  lineHeight={21}
                  paddingY={13}
                  style={{
                    ...f, fontWeight: 500, fontSize: 14, color: "#0a0a0a", width: "100%",
                    border: `1px solid ${errors.topic ? "#fca5a5" : "#e2e8f0"}`, borderRadius: 12, padding: "13px 14px", background: "#fbfcfe",
                  }}
                />
                {errors.topic && <span role="alert" style={FIELD_ERROR_STYLE}>{errors.topic}</span>}
                {!errors.topic && topicLen > 0 && topicLen < TOPIC_HINT_UNDER && (
                  <span aria-live="polite" style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#94a3b8" }}>조금 더 자세히 적으면 추천이 정확해져요</span>
                )}
              </div>

              {/* 3행 — 꼭 담아야 할 내용(선택). 사용자만 아는 실제 값의 통로라 AI가 채우지 않는다(테두리는 다른 칸과 같다). 필수 표시는 주제에만 있으므로 "선택" 표기는 두지 않는다.
                  비워 두면 워크스페이스 ★ 카드에서 다시 묻고, 적으면 그 카드에 미리 채워진다. */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1.5">
                  <label htmlFor="req-content" style={QUESTION_LABEL_STYLE}>꼭 담아야 할 내용</label>
                </div>
                <AutoGrowTextarea
                  id="req-content"
                  value={draft.content}
                  onChange={(v) => setDraft((d) => ({ ...d, content: v }))}
                  maxRows={8}
                  placeholder="예) 9월 매출 1억 2천, 신규 거래처 3곳. 비워두면 빈 양식만 만들어 드려요"
                  lineHeight={21}
                  paddingY={13}
                  style={{
                    ...f, fontWeight: 500, fontSize: 14, color: "#0a0a0a", width: "100%",
                    border: "1px solid #e2e8f0", borderRadius: 12, padding: "13px 14px", background: "#fbfcfe",
                  }}
                />
              </div>

              {/* 4행 — 형식 값 + 참고 자료(2열, 둘 다 짧은 칸). 형식 값이 없는 작업은 참고 자료가
                  왼쪽 절반에 오고 오른쪽은 비운다(전폭으로 늘리지 않는다). 두 라벨 줄은 높이 22px로 맞춘다. */}
              {/* 열 간격(16px)을 영상 형식 안 두 칸 간격(6px)보다 넓게 둬, 비율·길이가 한 그룹으로 읽힌다. */}
              <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2">
                {formatDef && (
                  <div className="min-w-0">
                    <div className="mb-2.5 flex items-center gap-1" style={{ height: 22 }}>
                      <label htmlFor="req-format" className="truncate" style={QUESTION_LABEL_STYLE}>{formatDef.label}</label>
                      {formatDef.tooltip && (
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <button type="button" aria-label={`${formatDef.label} 안내`} className="shrink-0 flex items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#4f7bff]" style={{ width: 20, height: 20, background: "transparent", border: 0, color: "#94a3b8", cursor: "help" }}>
                              <HelpCircle size={14} aria-hidden />
                            </button>
                          </TooltipTrigger>
                          <TooltipContent>{formatDef.tooltip}</TooltipContent>
                        </Tooltip>
                      )}
                    </div>
                    {/* 필드가 둘이면(영상: 비율 + 길이) 한 라벨 아래 두 드롭다운을 나란히 — 행이 늘지 않는다. */}
                    <div className={formatDef.fields.length > 1 ? "grid gap-1.5 items-start grid-cols-[minmax(0,1fr)_112px]" : undefined}>
                      {formatDef.fields.map((field, i) => {
                        const id = i === 0 ? "req-format" : `req-format-${field.key}`;
                        const value = draft.format[field.key] ?? field.defaultValue;
                        const onChange = (v: string) => setDraft((d) => ({ ...d, format: { ...d.format, [field.key]: v } }));
                        return field.kind === "select"
                          ? <FormatSelect key={field.key} id={id} field={field} value={value} onChange={onChange} />
                          : <NumberStepper key={field.key} id={id} field={field} value={value} onChange={onChange} onNotice={formatDef.fields.length > 1 ? setPairNotice : undefined} />;
                      })}
                    </div>
                    {formatDef.fields.length > 1 && pairNotice && (
                      <p role="status" className="mt-1.5" style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#94a3b8" }}>{pairNotice}</p>
                    )}
                    {formatDef.helper && (
                      <p className="mt-1.5" style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#94a3b8" }}>{formatDef.helper}</p>
                    )}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="mb-2.5 flex items-center gap-1.5" style={{ height: 22 }}>
                    <label htmlFor="req-ref" style={QUESTION_LABEL_STYLE}>참고 자료</label>
                  </div>
                  <ReferenceField items={draft.references} onChange={(references) => setDraft((d) => ({ ...d, references }))} />
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 1 && selectedTask && (
          // PC: 왼쪽 "사용할 템플릿"(추천 1개 + 템플릿 변경) 35% + 오른쪽 "정리한 요청" 65%. 모바일은 세로로 쌓인다.
          <div className={isDesktopSplit ? "grid gap-5 items-start" : "flex flex-col gap-5"} style={isDesktopSplit ? { gridTemplateColumns: "minmax(0,35fr) minmax(0,65fr)" } : undefined}>
            <SelectedTemplateCard templates={templates} template={template} onApply={setSelectedKey} />
            <div className="rounded-[22px]" style={{ background: "#fff", border: "1px solid #e2e8f0", padding: 20 }}>
              <p style={{ ...f, fontWeight: 700, fontSize: 18, color: "#0a0a0a", letterSpacing: "-0.3px" }}>정리한 요청</p>
              <div className="mt-5">
                <RequestSummary task={selectedTask} template={template} draft={draft} />
              </div>
              <div className="h-px bg-[#f1f5f9] mt-6" />
              <p className="mt-3" style={{ ...f, fontWeight: 500, fontSize: 12, color: "#94a3b8", lineHeight: 1.6 }}>
                입력하지 않은 수치·가격·날짜는 임의로 추가하지 말고, 필요한 경우 비워 두거나 확인을 요청해 주세요.
              </p>
            </div>
          </div>
        )}

        <div className="flex-1" />

        {/* 하단 CTA — 스크롤과 무관하게 화면 아래에 고정한다. 필수 칸이 비면 버튼 옆에 무엇이 빠졌는지 알려 준다. */}
        <div className="sticky bottom-0 z-10 flex items-center gap-3 mt-6" style={{ background: "#f8fafc", borderTop: "1px solid #eef2f6", padding: "14px 0 20px" }}>
          {step === 0 ? (
            <>
              <button
                type="button"
                onClick={onBack}
                className="rounded-xl"
                style={{ ...f, fontWeight: 700, fontSize: 13.5, color: SUBTITLE_COLOR, background: "#fff", border: "1px solid #e2e8f0", padding: "13px 20px", cursor: "pointer" }}
              >
                홈으로 돌아가기
              </button>
              <span className="flex-1" />
              {missingHint && (
                <span aria-live="polite" style={{ ...f, fontWeight: 600, fontSize: 13, color: "#94a3b8" }}>{missingHint}</span>
              )}
              <button
                type="button"
                onClick={goNextFromStep0}
                className="inline-flex items-center gap-2 rounded-2xl transition-colors bg-[#4f7bff] hover:bg-[#3d68e8]"
                style={{ ...f, fontWeight: 700, fontSize: 14, color: "#fff", border: 0, padding: "13px 22px", cursor: "pointer" }}
              >
                템플릿·요청 확인 <ArrowRight size={16} aria-hidden />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setStep(0)}
                className="rounded-xl"
                style={{ ...f, fontWeight: 700, fontSize: 13.5, color: SUBTITLE_COLOR, background: "#fff", border: "1px solid #e2e8f0", padding: "13px 20px", cursor: "pointer" }}
              >
                내용 수정하기
              </button>
              <span className="flex-1" />
              <button
                type="button"
                onClick={finish}
                disabled={submitting}
                className="rounded-xl bg-[#4f7bff] hover:bg-[#3d68e8] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ ...f, fontWeight: 700, fontSize: 14, color: "#fff", border: 0, padding: "14px 24px", cursor: submitting ? "default" : "pointer" }}
              >
                이 요청으로 시작하기
              </button>
            </>
          )}
        </div>
      </div>

      {resetConfirmOpen && (
        <Modal onClose={() => { setResetConfirmOpen(false); resetBtnRef.current?.focus({ preventScroll: true }); }} ariaLabel="입력 초기화 확인" maxWidth={400}>
          {(close) => (
            <div style={{ padding: "24px 26px 22px" }}>
              <p style={{ ...f, fontWeight: 800, fontSize: 17, color: "#0a0a0a", letterSpacing: "-0.4px" }}>입력한 내용을 초기화할까요?</p>
              <p className="mt-2.5" style={{ ...f, fontWeight: 500, fontSize: 13, color: SUBTITLE_COLOR, lineHeight: 1.6 }}>
                주제·꼭 담을 내용·참고 자료가 지워지고 형식은 기본값으로 돌아가요. 선택한 작업은 그대로 유지돼요.
              </p>
              <div className="flex gap-2.5 mt-5">
                <Button variant="secondary" fullWidth onClick={close}>취소</Button>
                <Button variant="primary" fullWidth onClick={resetInputs}>초기화</Button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </main>
  );
}
