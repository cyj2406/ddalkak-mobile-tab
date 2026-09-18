import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, CheckCircle2, ChevronDown, FileText } from "lucide-react";
import { color, f, SUBTITLE_COLOR } from "@/app/styleTokens";
import { TASK_GROUPS, getTaskById, templatesForTask, visibleTasksOf, type Task, type TaskTemplate } from "@/app/data/tasks";
import { Button } from "@/app/components/common/Button";
import { Modal } from "@/app/components/common/Modal";
import { Badge } from "@/app/components/common/Badge";
import TemplateResultCard from "./TemplateResultCard";
import type { WorkspaceCategory } from "@/app/App";

const DRAFT_KEY = "ddalkkak.requestHelp.draft";

const LIMITS = { topic: 100, audience: 120, purpose: 120, content: 3000, notes: 1000 } as const;

/** 5개 공통 질문 답변 + 고른 작업. taskId 와 답변은 서로 다른 필드라, 1단계에서 작업을
 *  바꿔도(호환 안 되는 이전 템플릿만 해제될 뿐) 답변은 조용히 지워지지 않는다. */
type Draft = {
  taskId: string | null;
  topic: string;
  audience: string;
  purpose: string;
  content: string;
  notes: string;
};

function loadDraft(): Draft {
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return { taskId: null, topic: "", audience: "", purpose: "", content: "", notes: "" };
    const parsed = JSON.parse(raw);
    const str = (v: unknown) => (typeof v === "string" ? v : "");
    return {
      taskId: typeof parsed.taskId === "string" ? parsed.taskId : null,
      topic: str(parsed.topic),
      audience: str(parsed.audience),
      purpose: str(parsed.purpose),
      content: str(parsed.content),
      notes: str(parsed.notes),
    };
  } catch {
    return { taskId: null, topic: "", audience: "", purpose: "", content: "", notes: "" };
  }
}

const STEPS = [
  { label: "요청 작성" },
  { label: "템플릿·요청 확인" },
] as const;

const STEP_COPY = [
  { title: "어떤 내용을 만들까요?", sub: "주제와 꼭 담을 내용만 적어도 시작할 수 있어요." },
  { title: "템플릿과 요청 내용을 확인해 주세요.", sub: "선택한 템플릿과 내용을 확인해 주세요. 필요한 내용은 이전 단계에서 바꿀 수 있어요." },
] as const;

/** 두 단계가 공유하는 본문 너비 — 기존 3단계 화면이 쓰던 값 그대로. */
const STEP_MAX_WIDTH = "var(--home-container)";
const STEP_PADDING = "32px var(--gap-screen-x) 60px";

interface Example {
  id: string;
  label: string;
  topic: string;
  content: string;
  audience: string;
}

/**
 * 작업(taskId)별 작성 예시 — 딱 이 한 곳에서만 관리한다(기존 그대로 재사용). 예시가
 * 없는 작업은 키 자체를 두지 않는다 — 관련 없는 기본 예시로 채우지 않기 위해서다.
 * 예시 데이터에 목적(purpose)·형식(notes) 항목은 없어, "예시 채우기"는 주제·내용·
 * 대상 세 필드만 채운다.
 */
const TASK_EXAMPLES: Record<string, Example[]> = {
  photo: [{ id: "photo-1", label: "기본 예시", topic: "브랜드 로고 배경 이미지", content: "로고 색상에 맞춘 심플한 그라데이션 배경으로 만들어 주세요.\n텍스트 없이 이미지만 필요해요.", audience: "SNS 프로필과 배너에 쓸 예정" }],
  cardnews: [{ id: "cardnews-1", label: "기본 예시", topic: "가을 축제 홍보 카드뉴스", content: "10월 12일부터 이틀간 여의도공원에서 열려요. 무료 입장이고, 야간 공연은 오후 7시에 시작해요.", audience: "축제를 처음 찾는 20~30대 시민" }],
  product: [{ id: "product-1", label: "기본 예시", topic: "핸드메이드 캔들 상세페이지", content: "천연 소이왁스를 쓰고, 연소 시간은 40시간이에요.\n향은 라벤더·시트러스·우드 3종이라는 점을 강조해 주세요.", audience: "온라인 쇼핑몰 방문 고객" }],
  imgslide: [{ id: "imgslide-1", label: "기본 예시", topic: "신제품 소개 이미지 슬라이드", content: "제품 특징 4가지를 한 장씩 순서대로 보여주세요.\n마지막 장에는 구매 링크 안내를 넣어 주세요.", audience: "SNS에서 넘겨보는 잠재 고객" }],
  word: [{ id: "word-1", label: "기본 예시", topic: "월간 업무 보고서", content: "매출은 전월 대비 12% 늘었고, 신규 고객은 240명 늘었어요.\n다음 달 목표와 계획도 함께 넣어 주세요.", audience: "팀 내부 보고 대상" }],
  hangul: [{ id: "hangul-1", label: "기본 예시", topic: "체류 관련 신청서 작성", content: "신청서 항목별로 필요한 정보를 알려 주세요.\n이름과 체류 기간 등 제공하지 않은 정보는 빈칸으로 남겨 주세요.", audience: "신청서를 작성하는 본인" }],
  leaflet: [{ id: "leaflet-1", label: "기본 예시", topic: "동네 카페 오픈 안내문", content: "오픈 날짜와 위치, 오픈 기념 할인 정보를 한 장에 담아 주세요.", audience: "동네 주민" }],
  thesis: [{ id: "thesis-1", label: "기본 예시", topic: "졸업 논문 서론 초안", content: "연구 주제는 청소년 스마트폰 사용과 수면의 관계예요.\n선행 연구 2~3개를 간단히 언급해 주세요.", audience: "지도 교수" }],
  visa: [{ id: "visa-1", label: "기본 예시", topic: "결혼이민 비자 신청서", content: "신청인 기본 정보와 배우자 정보를 항목별로 정리해 주세요.\n제공하지 않은 정보는 빈칸으로 남겨 주세요.", audience: "출입국사무소 제출용" }],
  ppt: [{ id: "ppt-1", label: "기본 예시", topic: "3분기 실적 보고", content: "매출은 전분기 대비 12% 늘었고, 신규 고객은 240명 늘었어요.\n다음 분기 목표와 계획도 함께 넣어 주세요.", audience: "팀 내부 보고 대상" }],
  webppt: [{ id: "webppt-1", label: "기본 예시", topic: "제품 소개 웹 발표자료", content: "제품 핵심 기능 3가지와 가격 정책을 순서대로 보여주세요.", audience: "잠재 고객사 담당자" }],
  excel: [{ id: "excel-1", label: "기본 예시", topic: "거래처 견적 표", content: "품목별 단가와 수량, 합계 금액을 정리해 주세요.\n부가세는 별도로 표시해 주세요.", audience: "거래처 담당자" }],
  shortform: [{ id: "shortform-1", label: "기본 예시", topic: "신제품 홍보 숏폼 영상", content: "제품의 핵심 기능 3가지를 15초 안에 보여주세요.\n마지막 장면에 구매 링크를 안내해 주세요.", audience: "SNS를 즐겨 보는 20대" }],
  youtube: [{ id: "youtube-1", label: "기본 예시", topic: "제품 사용법 안내 영상", content: "설치부터 사용까지 순서대로 3분 안에 설명해 주세요.", audience: "제품을 막 구매한 사용자" }],
};

/**
 * 실제 생성 요청으로 전달되는 텍스트 — 화면에 보여주는 "정리한 요청"과 완료 시
 * onComplete 으로 넘기는 텍스트가 항상 이 함수 하나에서 나오므로 "화면에 표시한
 * 요청과 실제 전달되는 요청이 다르다" 같은 불일치가 생기지 않는다.
 *
 * 입력하지 않은 선택 항목(대상/목적/형식·주의사항)은 줄 자체를 만들지 않는다 —
 * "미입력" 같은 문구를 반복해서 보여주지 않기 위해서다. 이름·날짜·수치 등은 사용자가
 * 적은 원문 그대로만 옮기고, 여기서 새로 지어내지 않는다.
 */
function buildRequestText(task: Task | undefined, template: TaskTemplate | undefined, d: Draft): string {
  const lines: (string | null)[] = [
    `${task ? task.label : "작업"} 작업을 부탁드려요.`,
    template ? `템플릿: ${template.title}` : null,
    "",
    `주제: ${d.topic.trim()}`,
    d.audience.trim() ? `대상: ${d.audience.trim()}` : null,
    d.purpose.trim() ? `목적: ${d.purpose.trim()}` : null,
    "",
    "꼭 담을 내용:",
    d.content.trim(),
  ];
  if (d.notes.trim()) {
    lines.push("", "형식·주의사항:", d.notes.trim());
  }
  lines.push("", "입력하지 않은 수치·가격·날짜는 임의로 추가하지 말고, 확인이 필요한 부분을 알려 주세요.");
  return lines.filter((l) => l !== null).join("\n");
}

/** 작업 선택 콤보박스에서 쓰는, 분류 순서 그대로 편 목록(방향키 이동·초기 포커스 계산용). */
const FLAT_TASKS = TASK_GROUPS.flatMap((g) => visibleTasksOf(g).map((task) => ({ task, groupId: g.id })));
const SELECTABLE_TASK_IDS = FLAT_TASKS.filter((x) => x.task.status !== "soon").map((x) => x.task.id);

/** 2단계 "템플릿/정리한 요청" 카드 — 데스크톱은 1/3+2/3 가로 분할, 그 아래는 세로로 접힌다. */
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

const QUESTION_LABEL_STYLE = { ...f, fontWeight: 600, fontSize: 14, color: "#0a0a0a" } as const;
/** 필수 표시 — "필수" 글자 대신 작은 * 하나로 줄인다(2026-09-18). 의미는 폼 상단에서
 *  한 번만 설명하고, 항목마다 반복하지 않는다. */
const REQUIRED_MARK_STYLE = { ...f, fontWeight: 700, fontSize: 15, color: color.brand, lineHeight: 1 } as const;
const FIELD_ERROR_STYLE = { ...f, fontWeight: 600, fontSize: 12, color: "#d4183d" } as const;

/** 작업 선택 — 큰 이미지 카드 나열 대신, 클릭하면 카테고리별 텍스트 목록이 펼쳐지는
 *  콤보박스 하나로 줄였다. 선택 값은 draft.taskId 그대로라 기능 연결은 그대로다. */
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
  const wrapRef = useRef<HTMLDivElement>(null);
  const selectedTask = taskId ? getTaskById(taskId) : undefined;

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
    if (SELECTABLE_TASK_IDS.length === 0) return;
    const curPos = SELECTABLE_TASK_IDS.indexOf(fromId);
    const nextPos = ((curPos === -1 ? 0 : curPos + dir) + SELECTABLE_TASK_IDS.length) % SELECTABLE_TASK_IDS.length;
    document.getElementById(`task-option-${SELECTABLE_TASK_IDS[nextPos]}`)?.focus();
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
        className="w-full flex items-center gap-2.5 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff]"
        style={{ height: 46, padding: "0 14px", background: "#fbfcfe", border: `1px solid ${error ? "#fca5a5" : "#e2e8f0"}` }}
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
          role="listbox"
          aria-label="만들 작업 선택"
          className="absolute left-0 right-0 mt-1.5 rounded-xl overflow-y-auto z-20"
          style={{ maxHeight: 320, background: "#fff", border: "1px solid #e2e8f0", boxShadow: "0px 8px 32px rgba(0,0,0,0.14)" }}
        >
          {TASK_GROUPS.map((group) => {
            const tasks = visibleTasksOf(group);
            if (tasks.length === 0) return null;
            return (
              <div key={group.id}>
                <p style={{ ...f, fontWeight: 700, fontSize: 11, color: "#94a3b8", background: "#fff", padding: "8px 14px 4px" }}>
                  {group.name}
                </p>
                {tasks.map((task) => {
                  const soon = task.status === "soon";
                  const isSelected = taskId === task.id;
                  return (
                    <button
                      key={task.id}
                      id={`task-option-${task.id}`}
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      disabled={soon}
                      onClick={() => { onSelect(task.id); setOpen(false); triggerRef.current?.focus(); }}
                      onKeyDown={(e) => {
                        if (e.key === "ArrowDown") { e.preventDefault(); moveFocus(task.id, 1); }
                        if (e.key === "ArrowUp") { e.preventDefault(); moveFocus(task.id, -1); }
                      }}
                      className="w-full flex items-center gap-2.5 text-left outline-none disabled:cursor-not-allowed transition-colors"
                      style={{ padding: "9px 14px", background: isSelected ? color.surface.accent : "transparent", opacity: soon ? 0.55 : 1 }}
                    >
                      <task.icon size={16} color={isSelected ? color.brand : "#64748b"} className="shrink-0" aria-hidden />
                      <span style={{ ...f, fontWeight: isSelected ? 700 : 500, fontSize: 13.5, color: "#0a0a0a" }}>{task.label}</span>
                      <span className="flex-1" />
                      {soon && <Badge tone="neutral">준비 중</Badge>}
                      {isSelected && <Check size={14} color={color.brand} strokeWidth={3} aria-hidden />}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/** 공통 질문 한 줄 — 라벨(+필수·선택 표시)은 입력 후에도 항상 보이고, 입력 안내는
 *  placeholder로만 준다(입력창 아래 같은 설명을 반복하지 않는다). 여러 줄 입력은
 *  내용에 맞게 자동으로 늘어난다(처음부터 크게 잡아두지 않는다). */
function QuestionField({
  id,
  label,
  required,
  value,
  onChange,
  placeholder,
  multiline,
  maxLength,
  error,
  inputRef,
}: {
  id: string;
  label: string;
  required: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  multiline?: boolean;
  maxLength: number;
  error?: string;
  inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
}) {
  const baseStyle = {
    ...f, fontWeight: 500, fontSize: 14, color: "#0a0a0a", width: "100%",
    border: `1px solid ${error ? "#fca5a5" : "#e2e8f0"}`, borderRadius: 12, padding: "13px 14px", background: "#fbfcfe",
  } as const;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <label htmlFor={id} style={QUESTION_LABEL_STYLE}>{label}</label>
        {required && <span aria-hidden style={REQUIRED_MARK_STYLE}>*</span>}
      </div>
      {multiline ? (
        <textarea
          id={id}
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
          maxLength={maxLength}
          aria-required={required}
          aria-invalid={!!error}
          placeholder={placeholder}
          rows={3}
          className="outline-none resize-none placeholder:text-[#9ca3af]"
          style={{ ...baseStyle, lineHeight: 1.6, minHeight: 88 }}
        />
      ) : (
        <input
          id={id}
          ref={inputRef as React.RefObject<HTMLInputElement>}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          aria-required={required}
          aria-invalid={!!error}
          placeholder={placeholder}
          className="outline-none placeholder:text-[#9ca3af]"
          style={baseStyle}
        />
      )}
      {error && <span role="alert" style={FIELD_ERROR_STYLE}>{error}</span>}
    </div>
  );
}

/** "다른 템플릿 선택" — 기존 TemplateResultCard(썸네일+이름+형식)를 그대로 재사용해
 *  후보를 보여주고, 카드를 누르면 그 자리에서 바로 선택·닫힘까지 끝난다(별도 확정
 *  버튼 없음 — 다른 화면들이 이미 "누르면 바로 적용"으로 동작하는 것과 같은 패턴).
 *  닫기(X·바깥 클릭)만으로는 아무것도 바뀌지 않으니 취소 시 기존 선택이 유지된다. */
function TemplatePickerModal({
  templates,
  selectedIdx,
  onSelect,
  onClose,
}: {
  templates: TaskTemplate[];
  selectedIdx: number;
  onSelect: (idx: number) => void;
  onClose: () => void;
}) {
  return (
    <Modal onClose={onClose} ariaLabel="템플릿 선택" maxWidth={640}>
      {() => (
        <div style={{ padding: "24px 26px 26px" }}>
          <p style={{ ...f, fontWeight: 800, fontSize: 17, color: "#0a0a0a", letterSpacing: "-0.4px" }}>다른 템플릿 선택</p>
          <p className="mt-1.5 mb-5" style={{ ...f, fontWeight: 500, fontSize: 13, color: SUBTITLE_COLOR }}>
            원하는 템플릿을 고르면 바로 적용돼요.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {templates.map((t, i) => (
              <TemplateResultCard key={t.title} template={t} selected={i === selectedIdx} ctaLabel="선택" onOpen={() => onSelect(i)} />
            ))}
          </div>
        </div>
      )}
    </Modal>
  );
}

/** 예시 채우기 — 중립 회색(옅은 배경+회색 텍스트) 조합이 활성 상태에서도 비활성처럼
 *  보인다는 피드백에 따라 브랜드 보조(옅은 브랜드 배경 + 브랜드 텍스트 + 얇은 브랜드
 *  테두리) 톤으로 바꿨다 — Badge의 tone="brand"(surface.accent 배경 + brand 텍스트)와
 *  같은 기존 토큰 짝을 그대로 재사용한다. 그래도 "템플릿·요청 확인"(다음 단계, 진한
 *  brand 채움)보다는 확실히 낮은 강조를 유지해야 해서 채움 버튼으로 바꾸지 않는다 —
 *  옅은 배경 + 얇은 테두리 조합 자체가 이미 그 위계 차이를 만든다. 진짜 비활성(작업
 *  미선택·예시 없음)일 때만 opacity로 흐려지고, 그 외엔 항상 이 브랜드 톤 그대로다. */
function ExampleFillButton({ disabled, onClick }: { disabled: boolean; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);
  const active = !disabled && hovered;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="inline-flex items-center gap-1.5 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] transition-colors disabled:cursor-not-allowed disabled:opacity-50"
      style={{
        height: 38, padding: "0 14px",
        background: active ? "rgba(79,123,255,0.12)" : color.surface.accent,
        border: `1px solid ${active ? color.border.focus : "rgba(79,123,255,0.35)"}`,
        color: color.brand,
        cursor: disabled ? "default" : "pointer",
      }}
    >
      <FileText size={15} strokeWidth={1.8} aria-hidden />
      <span style={{ ...f, fontWeight: 500, fontSize: 14 }}>예시 채우기</span>
    </button>
  );
}

/** "정리한 요청" 안의 항목 하나 — 라벨(작은 중간 회색) + 값(읽기 쉬운 진한 중립색),
 *  `big`이면 값을 한 단계 크게(주제 전용) 보여준다. */
function SummaryField({ label, value, big }: { label: string; value: string; big?: boolean }) {
  return (
    <div>
      <p style={{ ...f, fontWeight: 600, fontSize: 13.5, color: "#64748b", letterSpacing: "-0.2px" }}>{label}</p>
      <p
        className="mt-1.5 whitespace-pre-line"
        style={{
          ...f,
          fontWeight: big ? 700 : 500,
          fontSize: big ? 18 : 15.5,
          color: "#1e293b",
          lineHeight: big ? 1.4 : 1.6,
          letterSpacing: big ? "-0.3px" : "-0.1px",
        }}
      >
        {value}
      </p>
    </div>
  );
}

/**
 * "정리한 요청" 본문 — 굵기가 똑같은 긴 문장 나열 대신 항목별로 묶어 보여준다. 실제
 * 전달 텍스트(buildRequestText, finish()에서 그대로 사용)와 "같은 문자열"일 필요는
 * 없지만 "같은 입력 데이터"에서 나와야 하므로, 이 컴포넌트도 draft/selectedTask/
 * template을 그대로 받아 화면에 맞게 구조만 다르게 배치한다 — 값 자체를 새로 짓지
 * 않는다. "OO 작업을 부탁드려요" 같은, 아래 "작업 · 템플릿" 줄과 중복되는 도입
 * 문장은 화면 요약에서만 생략한다(실제 전달 텍스트에는 그대로 남는다).
 * 비어 있는 선택 항목(대상/목적/형식·주의사항)은 라벨째 렌더링하지 않는다.
 */
function RequestSummary({ task, template, draft }: { task: Task; template: TaskTemplate | undefined; draft: Draft }) {
  const audience = draft.audience.trim();
  const purpose = draft.purpose.trim();
  const hasAudienceOrPurpose = !!audience || !!purpose;

  return (
    <div className="flex flex-col gap-5">
      <SummaryField label="주제" value={draft.topic.trim()} big />

      <div>
        <p style={{ ...f, fontWeight: 600, fontSize: 13.5, color: "#64748b", letterSpacing: "-0.2px" }}>작업 · 템플릿</p>
        <p className="mt-1.5" style={{ ...f, fontWeight: 500, fontSize: 13.5, color: "#64748b" }}>
          {task.label}{template ? ` · ${template.title}` : ""}
        </p>
      </div>

      {hasAudienceOrPurpose && (
        <div className={audience && purpose ? "grid sm:grid-cols-2 gap-4" : undefined}>
          {audience && <SummaryField label="대상" value={audience} />}
          {purpose && <SummaryField label="목적" value={purpose} />}
        </div>
      )}

      <SummaryField label="꼭 담을 내용" value={draft.content.trim()} />

      {draft.notes.trim() && <SummaryField label="형식·주의사항" value={draft.notes.trim()} />}

      {/* 참고 자료 — 실제 첨부 기능이 이 화면에 연결돼 있지 않아(기존 코드베이스 전체
          확인 결과 실제 생성 요청에 연결된 첨부 기능이 없음) 항상 비어 있다. 데이터가
          생기면 이 자리에 파일명·링크를 추가하면 된다. */}
    </div>
  );
}

/**
 * 요청 작성 도움받기 — 2단계(요청 작성 → 템플릿·요청 확인). 이전엔 "작업 선택"이
 * 큰 이미지 카드로 가득한 별도 화면이었지만, 그 화면을 없애고 작업 선택을 콤보박스로
 * 줄여 1단계 폼 위에 얹었다 — 작업 선택과 5개 질문 입력을 한 화면에서 끝낸다.
 *
 * UI·검증까지만 맡고, 완료되면 정리된 요청문과 선택한 작업의 wsCategory 를 onComplete
 * 으로 넘겨 해당 AI 작업 화면(컴포저)에 이어 붙인다 — 여기서 실제 생성이나 크레딧
 * 차감은 일어나지 않는다("이 요청으로 시작하기"가 정확한 표현인 이유).
 *
 * 새로고침·이전 단계 이동에도 입력이 남아 있도록 매 변경마다 localStorage 에 저장한다
 * ("일반 진입"의 진행 중 초안 복귀). 반면 특정 작업을 이미 고르고 들어오는 진입
 * (initialTaskId)은 이전 초안과 무관한 새 요청으로 보고 항상 빈 폼에서 시작한다 —
 * 지금은 이 화면을 여는 진입점이 전부 일반 진입이라 실제로 이 값을 넘기는 곳은 없지만,
 * 특정 작업에서 바로 들어오는 진입이 생기면 이 prop만 넘기면 되도록 미리 지원해 둔다.
 */
export default function RequestHelpScreen({
  onBack,
  onComplete,
  initialTaskId,
}: {
  onBack: () => void;
  onComplete: (text: string, wsCategory: WorkspaceCategory) => void;
  initialTaskId?: string;
}) {
  const [draft, setDraft] = useState<Draft>(() =>
    initialTaskId
      ? { taskId: initialTaskId, topic: "", audience: "", purpose: "", content: "", notes: "" }
      : loadDraft()
  );
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<{ task?: string; topic?: string; content?: string }>({});
  const [templateIdx, setTemplateIdx] = useState(0);
  const [templatePickerOpen, setTemplatePickerOpen] = useState(false);
  const [applyChoiceOpen, setApplyChoiceOpen] = useState(false);
  const [appliedBannerOpen, setAppliedBannerOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const undoSnapshotRef = useRef<Omit<Draft, "taskId"> | null>(null);
  const bannerTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const isDesktopSplit = useIsDesktopSplit();
  const taskTriggerRef = useRef<HTMLButtonElement>(null);
  const topicRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const selectedTask = draft.taskId ? getTaskById(draft.taskId) : undefined;
  const templates = useMemo(() => (draft.taskId ? templatesForTask(draft.taskId) : []), [draft.taskId]);
  const template = templates[templateIdx] ?? templates[0];
  const examples = draft.taskId ? TASK_EXAMPLES[draft.taskId] ?? [] : [];

  useEffect(() => {
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch {
      // 저장 공간이 없거나 접근이 막힌 환경 — 입력 자체는 계속 동작해야 하므로 조용히 넘어간다.
    }
  }, [draft]);

  // 작업이 바뀌면 그 작업 기준으로 다시 골라야 하는 것만 초기화한다(호환 안 되는 이전
  // 템플릿 해제 → 새 작업의 템플릿으로 다시 추천) — topic/audience/purpose/content/notes
  // 는 여기서 건드리지 않는다(답변 보존).
  useEffect(() => {
    setTemplateIdx(0);
    setTemplatePickerOpen(false);
    setAppliedBannerOpen(false);
    undoSnapshotRef.current = null;
  }, [draft.taskId]);

  useEffect(() => () => clearTimeout(bannerTimer.current), []);

  const setField = (key: "topic" | "audience" | "purpose" | "content" | "notes") => (value: string) =>
    setDraft((d) => ({ ...d, [key]: value.slice(0, LIMITS[key]) }));

  const selectTask = (taskId: string) => {
    setDraft((d) => ({ ...d, taskId }));
    setErrors((e) => ({ ...e, task: undefined }));
  };

  const goNextFromStep0 = () => {
    const next: typeof errors = {};
    if (!draft.taskId) next.task = "만들 작업을 선택해 주세요.";
    if (!draft.topic.trim()) next.topic = "주제를 입력해 주세요.";
    if (!draft.content.trim()) next.content = "꼭 담을 내용을 입력해 주세요.";
    setErrors(next);
    if (next.task) { taskTriggerRef.current?.focus(); return; }
    if (next.topic) { topicRef.current?.focus(); return; }
    if (next.content) { contentRef.current?.focus(); return; }
    setStep(1);
  };

  // "빈 항목만 채우기"는 없앴다 — 기존 내용이 있으면 항상 확인을 먼저 거치고, 확인하면
  // 전체를 예시로 바꾼다(부분적으로 섞지 않는다. 즉시 덮어쓰지도 않는다).
  const applyExample = () => {
    const active = examples[0];
    if (!active) return;
    undoSnapshotRef.current = { topic: draft.topic, audience: draft.audience, purpose: draft.purpose, content: draft.content, notes: draft.notes };
    setDraft((d) => ({ ...d, topic: active.topic, content: active.content, audience: active.audience }));
    setErrors({});
    setApplyChoiceOpen(false);
    setAppliedBannerOpen(true);
    clearTimeout(bannerTimer.current);
    bannerTimer.current = setTimeout(() => setAppliedBannerOpen(false), 8000);
  };

  const requestApplyExample = () => {
    if (!draft.taskId || examples.length === 0) return;
    const hasContent = !!(draft.topic.trim() || draft.content.trim() || draft.audience.trim() || draft.purpose.trim() || draft.notes.trim());
    if (hasContent) setApplyChoiceOpen(true);
    else applyExample();
  };

  const undoApply = () => {
    if (!undoSnapshotRef.current) return;
    setDraft((d) => ({ ...d, ...undoSnapshotRef.current! }));
    undoSnapshotRef.current = null;
    setAppliedBannerOpen(false);
    clearTimeout(bannerTimer.current);
  };

  const finish = () => {
    if (submitting || !selectedTask?.wsCategory) return;
    setSubmitting(true);
    onComplete(buildRequestText(selectedTask, template, draft), selectedTask.wsCategory);
    try { window.localStorage.removeItem(DRAFT_KEY); } catch { /* noop */ }
  };

  return (
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div className="w-full mx-auto" style={{ maxWidth: STEP_MAX_WIDTH, padding: STEP_PADDING }}>
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
        {/* * 필수 입력의 의미는 여기 한 번만 설명한다 — 항목마다 반복하지 않는다(1단계에만 해당). */}
        <p className="mb-6" style={{ ...f, fontWeight: 500, fontSize: 13.5, color: SUBTITLE_COLOR }}>
          {STEP_COPY[step].sub}
          {step === 0 && (
            <span style={{ color: "#94a3b8" }}> · <span style={{ ...f, fontWeight: 700, color: color.brand }}>*</span> 표시는 필수 입력이에요.</span>
          )}
        </p>

        {step === 0 && (
          <div className="rounded-[26px]" style={{ background: "#fff", border: "1px solid #e2e8f0", padding: 24 }}>
            {/* 예시 사이드바 없이 한 열 — 최대 폭은 이 카드 자체(STEP_MAX_WIDTH)가
                이미 읽기 좋은 너비로 잡혀 있어 추가 제한을 두지 않는다. */}
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex items-center justify-between gap-3 flex-wrap mb-2.5">
                  <div className="flex items-center gap-2">
                    <span style={QUESTION_LABEL_STYLE}>만들 작업</span>
                  </div>
                  {/* 예시 채우기 — 작업 미선택 시 비활성, 이미 입력이 있으면 확인 모달을 거친다. */}
                  <ExampleFillButton disabled={!draft.taskId || examples.length === 0} onClick={requestApplyExample} />
                </div>
                <TaskSelectField taskId={draft.taskId} onSelect={selectTask} error={errors.task} triggerRef={taskTriggerRef} />
                {errors.task && <span role="alert" className="block mt-1.5" style={FIELD_ERROR_STYLE}>{errors.task}</span>}
              </div>

              {appliedBannerOpen && (
                <div className="flex items-center gap-2.5 rounded-xl" style={{ background: color.surface.accent, border: "1px solid #bfdbfe", padding: "10px 14px" }}>
                  <CheckCircle2 size={16} color={color.brand} className="shrink-0" aria-hidden />
                  <span style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#0a0a0a" }}>예시를 채웠어요. 실제 내용에 맞게 바꿔 주세요.</span>
                  <span className="flex-1" />
                  <button type="button" onClick={undoApply} style={{ ...f, fontWeight: 700, fontSize: 12.5, color: color.brand, background: "transparent", border: 0, cursor: "pointer" }}>
                    되돌리기
                  </button>
                </div>
              )}

              <QuestionField
                id="req-topic"
                label="어떤 주제로 만들까요?"
                required
                value={draft.topic}
                onChange={setField("topic")}
                placeholder="만들고 싶은 내용이나 주제를 한 줄로 적어주세요."
                maxLength={LIMITS.topic}
                error={errors.topic}
                inputRef={topicRef}
              />
              <QuestionField
                id="req-audience"
                label="누가 보게 되나요?"
                required={false}
                value={draft.audience}
                onChange={setField("audience")}
                placeholder="고객, 학생, 직장 동료 등 이 결과물을 보게 될 사람을 알려주세요."
                maxLength={LIMITS.audience}
              />
              <QuestionField
                id="req-purpose"
                label="어떤 목적으로 만드나요?"
                required={false}
                value={draft.purpose}
                onChange={setField("purpose")}
                placeholder="제품 소개, 정보 전달, 사용법 안내, 구매 유도 등 원하는 목적을 알려주세요."
                maxLength={LIMITS.purpose}
              />
              <QuestionField
                id="req-content"
                label="꼭 담아야 할 내용은 무엇인가요?"
                required
                multiline
                value={draft.content}
                onChange={setField("content")}
                placeholder="핵심 내용과 반드시 들어가야 할 이름·날짜·숫자 등을 적어주세요. 참고 자료가 있다면 함께 첨부해 주세요."
                maxLength={LIMITS.content}
                error={errors.content}
                inputRef={contentRef}
              />
              <QuestionField
                id="req-notes"
                label="원하는 형식이나 주의할 점이 있나요?"
                required={false}
                multiline
                value={draft.notes}
                onChange={setField("notes")}
                placeholder="분량, 분위기, 스타일, 제외할 내용 등을 알려주세요. 정해진 것이 없다면 비워두셔도 돼요."
                maxLength={LIMITS.notes}
              />
            </div>
          </div>
        )}

        {step === 1 && selectedTask && (
          // PC: grid + items-stretch로 두 카드의 상하 테두리를 맞춘다(내용이 더 긴 "정리한
          // 요청" 카드 기준). 모바일은 세로로 쌓이고 각 카드가 내용만큼의 높이를 갖는다.
          <div className={isDesktopSplit ? "grid gap-5 items-stretch" : "flex flex-col gap-5"} style={isDesktopSplit ? { gridTemplateColumns: "1fr 2fr" } : undefined}>
            {/* A. 추천 템플릿 — 실제 미리보기·이름·형식 정보만, 긴 설명은 없앴다.
                h-full + flex-col로 늘어난 카드 높이 안에서 버튼을 항상 하단에 고정한다
                (미리보기 이미지를 늘려서 높이를 맞추지 않는다). */}
            <div className="rounded-[22px] flex flex-col h-full" style={{ background: "#fff", border: "1px solid #e2e8f0", padding: 20 }}>
              <p style={{ ...f, fontWeight: 700, fontSize: 15, color: "#0a0a0a" }}>추천 템플릿</p>
              {templates.length > 0 && template ? (
                <>
                  {/* 실제 표지 이미지가 없는 서식(현재 모든 템플릿이 이 상태)은 큰 사선
                      패턴 대신 작은 중립 배경 + 안내 문구만 준다 — 카드 높이도 그만큼
                      줄어든다. */}
                  <div
                    className="mt-3 flex items-center justify-center shrink-0"
                    style={{ height: 96, borderRadius: 12, background: color.surface.subtle, border: `1px solid ${color.border.default}` }}
                  >
                    <span style={{ ...f, fontWeight: 500, fontSize: 12, color: "#94a3b8" }}>미리보기 준비 중</span>
                  </div>
                  <div className="mt-3.5">
                    <p style={{ ...f, fontWeight: 700, fontSize: 13.5, color: "#0a0a0a" }}>{template.title}</p>
                    <p className="mt-1" style={{ ...f, fontWeight: 500, fontSize: 12, color: SUBTITLE_COLOR }}>{template.meta} · {template.format}</p>
                  </div>
                  {templates.length > 1 && (
                    <Button variant="secondary" size="md" fullWidth onClick={() => setTemplatePickerOpen(true)} className="mt-auto pt-3.5">
                      다른 템플릿 선택
                    </Button>
                  )}
                </>
              ) : (
                <p className="mt-3" style={{ ...f, fontWeight: 500, fontSize: 13, color: SUBTITLE_COLOR, lineHeight: 1.6 }}>
                  이 작업에 맞는 템플릿이 아직 없어요. 템플릿 없이 진행할 수 있어요.
                </p>
              )}
            </div>

            {/* B. 정리한 요청 — 같은 굵기로 나열하던 문장을 항목별(주제/작업·템플릿/
                대상·목적/꼭 담을 내용/형식·주의사항)로 정리한다. 실제 전달 텍스트는
                아래에서 그대로 buildRequestText(동일 draft/selectedTask/template)로
                만든다 — 화면 표시 형태만 다를 뿐 같은 입력 데이터에서 나온다. */}
            <div className="rounded-[22px] h-full" style={{ background: "#fff", border: "1px solid #e2e8f0", padding: 20 }}>
              <p style={{ ...f, fontWeight: 700, fontSize: 18, color: "#0a0a0a", letterSpacing: "-0.3px" }}>정리한 요청</p>
              <div className="mt-5">
                <RequestSummary task={selectedTask} template={template} draft={draft} />
              </div>
              <div className="h-px bg-[#f1f5f9] mt-6" />
              <p className="mt-3" style={{ ...f, fontWeight: 500, fontSize: 12, color: "#94a3b8", lineHeight: 1.6 }}>
                입력하지 않은 수치·가격·날짜는 임의로 추가하지 말고, 확인이 필요한 부분을 알려 주세요.
              </p>
            </div>
          </div>
        )}

        {/* 하단 액션 — 공통 컨테이너의 직속 자식으로 둬서 두 단계가 같은 좌우 시작선·폭을 갖는다. */}
        {step === 0 && (
          <div className="flex items-center gap-3 mt-6">
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl"
              style={{ ...f, fontWeight: 700, fontSize: 13.5, color: SUBTITLE_COLOR, background: "#fff", border: "1px solid #e2e8f0", padding: "13px 20px", cursor: "pointer" }}
            >
              홈으로 돌아가기
            </button>
            <span className="flex-1" />
            <button
              type="button"
              onClick={goNextFromStep0}
              className="inline-flex items-center gap-2 rounded-2xl transition-colors bg-[#4f7bff] hover:bg-[#3d68e8]"
              style={{ ...f, fontWeight: 700, fontSize: 14, color: "#fff", border: 0, padding: "13px 22px", cursor: "pointer" }}
            >
              템플릿·요청 확인 <ArrowRight size={16} aria-hidden />
            </button>
          </div>
        )}

        {step === 1 && selectedTask && (
          <div className="flex items-center gap-3 mt-6">
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
          </div>
        )}
      </div>

      {applyChoiceOpen && (
        <Modal onClose={() => setApplyChoiceOpen(false)} ariaLabel="예시 적용 확인" maxWidth={400}>
          {(close) => (
            <div style={{ padding: "24px 26px 22px" }}>
              <p style={{ ...f, fontWeight: 800, fontSize: 17, color: "#0a0a0a", letterSpacing: "-0.4px" }}>
                작성한 내용을 선택한 작업의 예시로 바꿀까요?
              </p>
              <p className="mt-2.5" style={{ ...f, fontWeight: 500, fontSize: 13, color: SUBTITLE_COLOR, lineHeight: 1.6 }}>
                지금까지 적은 주제·내용·대상이 예시 내용으로 바뀌어요. 적용 후에도 되돌릴 수 있어요.
              </p>
              <div className="flex gap-2.5 mt-5">
                <Button variant="secondary" fullWidth onClick={close}>취소</Button>
                <Button variant="primary" fullWidth onClick={applyExample}>예시로 바꾸기</Button>
              </div>
            </div>
          )}
        </Modal>
      )}

      {templatePickerOpen && templates.length > 0 && (
        <TemplatePickerModal
          templates={templates}
          selectedIdx={templateIdx}
          onSelect={(i) => { setTemplateIdx(i); setTemplatePickerOpen(false); }}
          onClose={() => setTemplatePickerOpen(false)}
        />
      )}
    </main>
  );
}
