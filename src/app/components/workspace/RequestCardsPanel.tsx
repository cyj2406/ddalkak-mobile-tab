import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Info } from "lucide-react";
import { f } from "@/app/styleTokens";
import { getTaskById } from "@/app/data/tasks";
import { AutoGrowTextarea } from "@/app/components/common/AutoGrowTextarea";
import { cardsForTask, type CardContext, type RequestCardDef } from "@/app/data/requestCards";
import type { RequestHandoff } from "@/app/components/home/RequestHelpScreen";

/**
 * 워크스페이스 "확인이 필요해요" 카드 — 요청 작성 도우미로 들어왔을 때 기존 상세 프롬프트
 * 폼 대신 이 카드를 띄운다. 카드 정의·순서는 data/requestCards.ts.
 *
 * - ◆ 고르는 카드: AI 후보 3개 또는 정해진 선택지 + 직접 입력을 드롭다운으로 고른다. 첫 후보가 기본이고 비울 수 없다.
 *   후보가 전부 12자 이하(톤·어투·청중·용도)면 드롭다운이 반 폭(2열)이고, 긴 문장 후보는 전폭이다.
 * - ★ 적는 카드: 후보 없이 빈 칸 하나. 비워도 되고, 비우면 그 영역을 결과물에서 뺀다
 *   (result.excluded) — 요청문에 "지어내지 마세요"를 덧붙이는 대신 구조로 보장한다.
 *   연속한 짧은 ★(한 줄 값: 기업명·일자·기간 등)는 한 장에 2열로 묶어 카드 수를 줄인다.
 *
 * 상단에는 주제 한 줄(수정 가능)을 고정해 주제 확인 카드를 따로 두지 않는다.
 *
 * 생김새는 같은 화면의 상세 프롬프트 카드(App.tsx CARD_SHELL·FcHeader·CardFooter)와 같은
 * 값을 쓴다. 그 컴포넌트들은 App.tsx 안에 있어 순환 import 를 피하려고 값만 맞췄다.
 */

export interface RequestCardsResult {
  /** 생성에 넘길 최종 요청문 */
  text: string;
  /** 비워 둔 적는 카드 — 결과물에서 이 영역을 뺀다 */
  excluded: string[];
}

type PickAnswer = { choice: number | "custom"; custom: string };

const BRAND = "#3B5BFE";
const INK = "#1B2440";
const MUTED = "#98A2B3";
const LINE = "#E3E6EB";
/** 기간·연락처처럼 짧은 값만 받는 한 줄 칸 — 넘으면 입력을 막는다(가로로 잘려 안 보이는 긴 글을 막기 위해). */
const SHORT_LIMIT = 40;
/** 후보가 모두 이 길이 이하면 2열로 깐다 */
const SHORT_CHOICE = 12;

const SHELL: React.CSSProperties = {
  background: "white", borderRadius: 22, border: "1px solid #ECEEF2",
  boxShadow: "0px 1px 2px rgba(16,24,40,0.04), 0px 12px 32px rgba(16,24,40,0.06)",
  display: "flex", flexDirection: "column", overflow: "hidden", width: "100%", boxSizing: "border-box",
  maxHeight: "var(--fc-card-max-h, calc(100dvh - 226px))",
};

const BOX: React.CSSProperties = { ...f, fontSize: 14.5, color: INK, background: "white", border: `1px solid ${LINE}`, borderRadius: 14 };

const isShortWrite = (c: RequestCardDef) => c.kind === "write" && !c.multiline;

/** 화면에 한 장씩 넘기는 단위 — 연속한 짧은 ★ 카드는 한 장으로 묶는다. */
function groupSteps(cards: RequestCardDef[]): RequestCardDef[][] {
  const steps: RequestCardDef[][] = [];
  for (const c of cards) {
    const last = steps[steps.length - 1];
    if (last && isShortWrite(c) && last.every(isShortWrite)) last.push(c);
    else steps.push([c]);
  }
  return steps;
}

/** 고르는 카드가 내놓는 선택지 — 정해진 선택지 또는 AI 후보 3개 */
function choicesOf(card: RequestCardDef, ctx: CardContext): string[] {
  return card.options ?? card.candidates?.(ctx) ?? [];
}

function pickValue(card: RequestCardDef, a: PickAnswer | undefined, ctx: CardContext): string {
  if (!a) return "";
  if (a.choice === "custom") return a.custom.trim();
  return choicesOf(card, ctx)[a.choice] ?? "";
}

export function RequestCardsPanel({ handoff, onGenerate }: { handoff: RequestHandoff; onGenerate: (result: RequestCardsResult) => void }) {
  const cards = useMemo(() => cardsForTask(handoff.taskId), [handoff.taskId]);
  const steps = useMemo(() => groupSteps(cards), [cards]);
  const [idx, setIdx] = useState(0);
  const [visited, setVisited] = useState<Set<number>>(() => new Set([0]));
  const [picks, setPicks] = useState<Record<string, PickAnswer>>(() =>
    Object.fromEntries(cards.filter((c) => c.kind === "pick").map((c) => [c.id, { choice: 0, custom: "" }])),
  );
  // 요청 작성의 "꼭 담아야 할 내용"은 그 작업의 내용 ★ 카드(contentCard)에 미리 채운다 — 같은 걸 다시 묻지 않는다.
  const contentCard = cards.find((c) => c.contentCard);
  const [writes, setWrites] = useState<Record<string, string>>(() =>
    contentCard && handoff.content ? { [contentCard.id]: handoff.content } : {},
  );
  const [topic, setTopic] = useState(handoff.topic);
  const [topicDraft, setTopicDraft] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [requestOpen, setRequestOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const customRef = useRef<HTMLTextAreaElement>(null);
  const topicEditRef = useRef<HTMLTextAreaElement>(null);

  const nameCard = cards.find((c) => c.nameCard);
  const name = nameCard ? writes[nameCard.id] ?? "" : "";

  /** 카드 순서대로 값을 확정한다 — 뒤 카드의 후보가 앞 카드의 답(문서 종류·청중 등)에 따라 달라진다. */
  const resolved = useMemo(() => {
    const answers: Record<string, string> = {};
    const ctxs: Record<string, CardContext> = {};
    for (const c of cards) {
      const ctx: CardContext = { topic, name, answers: { ...answers }, format: handoff.format };
      ctxs[c.id] = ctx;
      answers[c.id] = c.kind === "pick" ? pickValue(c, picks[c.id], ctx) : (writes[c.id] ?? "").trim();
    }
    return { answers, ctxs };
  }, [cards, picks, writes, topic, name, handoff.format]);

  const step = steps[idx];
  const isLast = idx === steps.length - 1;
  const hasPick = cards.some((c) => c.kind === "pick");

  useEffect(() => { setError(null); bodyRef.current?.scrollTo({ top: 0 }); }, [idx]);
  useEffect(() => { if (topicDraft !== null) topicEditRef.current?.focus(); }, [topicDraft !== null]); // eslint-disable-line react-hooks/exhaustive-deps

  const go = (to: number) => {
    setIdx(to);
    setVisited((v) => new Set(v).add(to));
  };

  /** 직접 입력을 골라 놓고 비워 둔 고르는 카드 — 고르는 카드는 비울 수 없다. */
  const invalidAt = (i: number) =>
    steps[i].some((c) => c.kind === "pick" && picks[c.id]?.choice === "custom" && !picks[c.id].custom.trim());

  const buildResult = (): RequestCardsResult => {
    const base = topic === handoff.topic ? handoff.baseText : handoff.baseText.replace(`주제: ${handoff.topic}`, `주제: ${topic}`);
    const lines = [base, ""];
    // 내용 카드가 없는 작업은 요청 작성에서 적은 내용을 그대로 붙인다.
    if (!contentCard && handoff.content) lines.push(`꼭 담을 내용:\n${handoff.content}`, "");
    const excluded: string[] = [];
    for (const c of cards) {
      const v = resolved.answers[c.id];
      if (v) lines.push(c.multiline || v.includes("\n") ? `${c.title}:\n${v}` : `${c.title}: ${v}`);
      else if (c.kind === "write") excluded.push(c.title);
    }
    return { text: lines.join("\n"), excluded };
  };

  const next = () => {
    if (invalidAt(idx)) { setError("직접 입력할 내용을 적어주세요."); customRef.current?.focus(); return; }
    if (!isLast) { go(idx + 1); return; }
    const firstInvalid = steps.findIndex((_, i) => invalidAt(i));
    if (firstInvalid !== -1) { go(firstInvalid); return; }
    onGenerate(buildResult());
  };

  // 전부 추천대로 — ◆ 카드를 모두 첫 후보로 채우고, 남은 ★(적는 카드)로 이동한다.
  const acceptAll = () => {
    setPicks(Object.fromEntries(cards.filter((c) => c.kind === "pick").map((c) => [c.id, { choice: 0, custom: picks[c.id]?.custom ?? "" }])));
    setVisited((v) => {
      const s = new Set(v);
      steps.forEach((st, i) => { if (st.some((c) => c.kind === "pick")) s.add(i); });
      return s;
    });
    const firstWrite = steps.findIndex((st) => st.every((c) => c.kind === "write"));
    go(firstWrite === -1 ? steps.length - 1 : firstWrite);
  };

  const saveTopic = () => {
    const v = (topicDraft ?? "").trim();
    if (v) setTopic(v);
    setTopicDraft(null);
  };

  if (!step) return null;
  const preview = buildResult();
  const taskLabel = getTaskById(handoff.taskId)?.label ?? "";
  const allWrite = step.every((c) => c.kind === "write");
  const stepTitle = step.map((c) => c.title).join(" · ");
  const stepEmpty = allWrite && step.every((c) => !(writes[c.id] ?? "").trim());

  // ◆ 고르는 카드 — 선택형은 전부 드롭다운이다(라디오·칩을 쓰지 않는다). 후보가 전부 12자 이하면 드롭다운이
  // 반 폭(2열)이고, 긴 문장 후보는 전폭이다. 마지막 선택지 "직접 입력"을 고르면 아래에 입력칸이 열린다.
  const renderPick = (card: RequestCardDef) => {
    const ctx = resolved.ctxs[card.id];
    const answer = picks[card.id];
    const customOn = answer?.choice === "custom";
    const choices = choicesOf(card, ctx);
    const twoCol = choices.every((c) => c.length <= SHORT_CHOICE);
    const setPick = (patch: Partial<PickAnswer>) => setPicks((p) => ({ ...p, [card.id]: { ...(p[card.id] ?? { choice: 0, custom: "" }), ...patch } }));

    return (
      <div className="flex flex-col gap-2.5">
        <div className={twoCol ? "grid sm:grid-cols-2 gap-2.5" : undefined}>
          <div className="relative">
            <select
              aria-labelledby="rc-q"
              value={customOn ? "__custom__" : String(answer?.choice ?? 0)}
              onChange={(e) => {
                const v = e.target.value;
                if (v === "__custom__") { setPick({ choice: "custom" }); requestAnimationFrame(() => customRef.current?.focus()); }
                else { setPick({ choice: Number(v) }); setError(null); }
              }}
              className="w-full appearance-none outline-none truncate focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3B5BFE]"
              style={{ ...BOX, fontWeight: 600, height: 48, padding: "0 40px 0 16px", cursor: "pointer" }}
            >
              {choices.map((cand, i) => <option key={i} value={i}>{i === 0 ? `${cand} (추천)` : cand}</option>)}
              <option value="__custom__">직접 입력</option>
            </select>
            <ChevronDown size={16} color={MUTED} className="absolute pointer-events-none" style={{ right: 16, top: 16 }} aria-hidden />
          </div>
        </div>
        {customOn && (
          <AutoGrowTextarea
            ref={customRef}
            value={answer.custom}
            onChange={(v) => { setPick({ custom: v }); if (v.trim()) setError(null); }}
            maxRows={card.customRows ?? 3}
            singleLine={(card.customRows ?? 3) <= 3}
            lineHeight={22}
            paddingY={13}
            placeholder={`${card.title}을(를) 직접 적어주세요`}
            aria-label={`${card.title} 직접 입력`}
            aria-invalid={!!error}
            style={{ ...BOX, padding: "13px 16px", borderColor: error ? "#fca5a5" : LINE }}
          />
        )}
        {error && <span role="alert" style={{ ...f, fontWeight: 600, fontSize: 12, color: "#d4183d" }}>{error}</span>}
      </div>
    );
  };

  const renderWrite = (card: RequestCardDef, grouped: boolean) => (
    <div key={card.id} className="flex flex-col gap-2 min-w-0">
      {grouped && <label htmlFor={`rc-${card.id}`} style={{ ...f, fontWeight: 600, fontSize: 13, color: "#4B5262" }}>{card.title}</label>}
      {card.multiline ? (
        <AutoGrowTextarea
          id={`rc-${card.id}`}
          value={writes[card.id] ?? ""}
          onChange={(v) => setWrites((w) => ({ ...w, [card.id]: v }))}
          maxRows={8}
          placeholder={card.placeholder}
          aria-labelledby="rc-q"
          lineHeight={22}
          paddingY={13}
          style={{ ...BOX, padding: "13px 17px" }}
        />
      ) : (
        <input
          id={`rc-${card.id}`}
          value={writes[card.id] ?? ""}
          onChange={(e) => setWrites((w) => ({ ...w, [card.id]: e.target.value }))}
          maxLength={SHORT_LIMIT}
          placeholder={card.placeholder}
          aria-labelledby={grouped ? undefined : "rc-q"}
          className="w-full outline-none px-[17px] py-[13px]"
          style={BOX}
        />
      )}
      {!card.multiline && (writes[card.id] ?? "").length >= SHORT_LIMIT && (
        <span role="status" style={{ ...f, fontWeight: 600, fontSize: 12, color: "#64748b" }}>{SHORT_LIMIT}자까지 적을 수 있어요.</span>
      )}
    </div>
  );

  return (
    <div className="w-full min-w-0 self-stretch" style={SHELL} aria-label={`${taskLabel} 세부 내용 확인`} role="group">
      {/* 헤더 — 제목 · 진행 점 · 전부 추천대로 · 주제 한 줄(고정) */}
      <div className="shrink-0 flex flex-col gap-3 px-[18px] md:px-6 pt-4 pb-[14px]" style={{ borderBottom: "1px solid #F0F2F5" }}>
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0 flex flex-col gap-2">
            <p style={{ ...f, fontWeight: 800, fontSize: 16, color: INK, letterSpacing: "-0.16px" }}>확인이 필요해요</p>
            {/* 1 / 4 텍스트 대신 점 — 눌러서 바로 이동한다. 현재 = 길쭉한 파란 점, 이미 본 카드 = 연한 파란 점, 안 간 카드 = 회색 점 */}
            <div className="flex items-center gap-1.5" role="tablist" aria-label="카드 이동">
              {steps.map((st, i) => {
                const current = i === idx;
                const label = st.map((c) => c.title).join(" · ");
                return (
                  <button
                    key={st[0].id}
                    type="button"
                    role="tab"
                    aria-selected={current}
                    aria-label={`${i + 1}번째 카드: ${label}`}
                    title={label}
                    onClick={() => go(i)}
                    className="rounded-full outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#3B5BFE] transition-all"
                    style={{ width: current ? 18 : 6, height: 6, padding: 0, border: 0, cursor: "pointer", background: current ? BRAND : visited.has(i) ? "#C5D3FF" : LINE }}
                  />
                );
              })}
            </div>
          </div>
          {hasPick && (
            <button
              type="button"
              onClick={acceptAll}
              className="shrink-0 rounded-[12px] outline-none transition-colors hover:bg-[#F8F9FC] focus-visible:ring-2 focus-visible:ring-[#3B5BFE]"
              style={{ ...f, fontWeight: 700, fontSize: 13, color: "#4B5262", border: `1.5px solid ${LINE}`, background: "white", padding: "8px 12px" }}
            >
              전부 추천대로
            </button>
          )}
        </div>

        {topicDraft === null ? (
          <p className="flex items-center gap-1.5 min-w-0" style={{ ...f, fontSize: 13.5, color: "#4B5262" }}>
            <span className="shrink-0" style={{ fontWeight: 600, color: MUTED }}>주제</span>
            <span className="truncate" style={{ fontWeight: 600, color: INK }}>{topic}</span>
            <button
              type="button"
              onClick={() => setTopicDraft(topic)}
              className="shrink-0 rounded outline-none hover:underline underline-offset-2 focus-visible:ring-2 focus-visible:ring-[#3B5BFE]"
              style={{ ...f, fontWeight: 600, fontSize: 13, color: BRAND, background: "transparent", border: 0, padding: "0 2px", cursor: "pointer" }}
            >
              수정
            </button>
          </p>
        ) : (
          <div className="flex items-start gap-2">
            <div className="flex-1 min-w-0">
              <AutoGrowTextarea
                ref={topicEditRef}
                value={topicDraft}
                onChange={setTopicDraft}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.nativeEvent.isComposing) saveTopic();
                  if (e.key === "Escape") setTopicDraft(null);
                }}
                maxRows={3}
                singleLine
                lineHeight={20}
                paddingY={7}
                aria-label="주제 수정"
                style={{ ...BOX, fontSize: 13.5, borderRadius: 10, padding: "7px 12px" }}
              />
            </div>
            <button type="button" onClick={saveTopic} className="shrink-0 rounded-[10px] outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BFE]" style={{ ...f, fontWeight: 700, fontSize: 13, color: "white", background: BRAND, border: 0, height: 36, padding: "0 12px" }}>저장</button>
            <button type="button" onClick={() => setTopicDraft(null)} className="shrink-0 rounded-[10px] outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BFE]" style={{ ...f, fontWeight: 700, fontSize: 13, color: "#4B5262", background: "white", border: `1.5px solid ${LINE}`, height: 36, padding: "0 12px" }}>취소</button>
          </div>
        )}
      </div>

      {/* 본문 — 카드 한 장 */}
      <div ref={bodyRef} className="flex flex-col gap-4 px-[18px] md:px-6 pt-[18px] pb-5" style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" }}>
        <div className="flex items-center gap-2">
          <p id="rc-q" style={{ ...f, fontWeight: 700, fontSize: 15, color: INK, letterSpacing: "-0.2px" }}>
            {allWrite && <span aria-hidden style={{ color: BRAND, marginRight: 4 }}>★</span>}
            {stepTitle}
          </p>
          {allWrite && (
            <span className="rounded-full" style={{ ...f, fontWeight: 600, fontSize: 11.5, color: "#64748b", background: "#F1F5F9", padding: "2px 8px" }}>비워도 돼요</span>
          )}
        </div>

        {step.length === 1 && step[0].hint && (
          <p className="-mt-2" style={{ ...f, fontWeight: 500, fontSize: 12.5, color: MUTED, lineHeight: 1.6 }}>
            {typeof step[0].hint === "function" ? step[0].hint(resolved.ctxs[step[0].id]) : step[0].hint}
          </p>
        )}

        {step[0].kind === "pick" && renderPick(step[0])}

        {allWrite && (
          <div className="flex flex-col gap-2.5">
            {/* 짧은 사실 값 여러 개는 2열로 한 장에 모은다 */}
            <div className={step.length > 1 ? "grid sm:grid-cols-2 gap-3" : undefined}>
              {step.map((c) => renderWrite(c, step.length > 1))}
            </div>
            <p className="flex items-start gap-1.5" style={{ ...f, fontWeight: 500, fontSize: 12.5, color: MUTED, lineHeight: 1.6 }}>
              <Info size={14} className="shrink-0 mt-[2px]" aria-hidden />
              이건 지어낼 수 없는 값이라 추천을 띄우지 않아요. 모르면 비워두세요. 결과물에서도 빠집니다.
            </p>
          </div>
        )}

        {/* 요청 본문 — 기본 접힘. 펼치면 지금까지 고른 값으로 만든 요청문을 그대로 보여 준다. */}
        <div>
          <button
            type="button"
            aria-expanded={requestOpen}
            onClick={() => setRequestOpen((v) => !v)}
            className="inline-flex items-center gap-1 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[#3B5BFE]"
            style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#64748b", background: "transparent", border: 0, padding: "2px 0", cursor: "pointer" }}
          >
            요청 내용 보기
            <ChevronDown size={14} style={{ transform: requestOpen ? "rotate(180deg)" : "none" }} aria-hidden />
          </button>
          {requestOpen && (
            <div className="mt-2 rounded-[12px] whitespace-pre-line" style={{ ...f, fontWeight: 500, fontSize: 13, color: "#4B5262", lineHeight: 1.65, background: "#F8F9FC", border: "1px solid #ECEEF2", padding: "12px 14px" }}>
              {preview.text}
              {preview.excluded.length > 0 && (
                <span style={{ display: "block", marginTop: 8, color: MUTED }}>결과물에서 빠지는 영역: {preview.excluded.join(", ")}</span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* 하단 — 이전 / 다음(마지막 카드에서는 생성하기) */}
      <div className="shrink-0 flex gap-3 px-[18px] md:px-6 pb-[14px] pt-[15px]" style={{ borderTop: "1px solid #EEF0F3" }}>
        <button
          type="button"
          onClick={() => go(idx - 1)}
          disabled={idx === 0}
          className="shrink-0 flex items-center justify-center rounded-[14px] px-5 py-[13px] disabled:opacity-40 disabled:cursor-not-allowed"
          style={{ border: `1.5px solid ${LINE}`, color: "#4B5262", ...f, fontWeight: 700, fontSize: 14, background: "white" }}
        >
          이전
        </button>
        <button
          type="button"
          onClick={next}
          className="flex-1 min-w-0 flex items-center justify-center rounded-[14px] p-[13px]"
          style={{ background: BRAND, boxShadow: "0px 4px 6px rgba(59,91,254,0.18)", ...f, fontWeight: 700, fontSize: 15, color: "white" }}
        >
          {isLast ? "생성하기" : stepEmpty ? "비워두고 다음" : "다음"}
        </button>
      </div>
    </div>
  );
}
