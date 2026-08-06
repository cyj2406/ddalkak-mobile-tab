import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import AnswerInput from "./AnswerInput";
import AiSuggestButton from "./AiSuggestButton";
import type { FormField } from "./types";

/**
 * 현재 빈칸 하나를 묻는 카드.
 * 5종 타입(choice / number / text / sign / photo)을 field.type 으로 분기하는 단일 컴포넌트다.
 * 부모 폭 100%를 채우며 자체 max-width를 두지 않는다.
 */
export interface QuestionCardProps {
  field: FormField;
  /** 현재 답변값. 아직 없으면 "" */
  value: string;
  /** advance: true 면 답변 후 다음 빈칸으로 자동 진행한다 (choice·sign·photo) */
  onChange: (value: string, opts?: { advance?: boolean }) => void;
  /** 텍스트형에서 Enter로 확정할 때 */
  onSubmit?: () => void;
  /** N번째 / 전체 M개 — 카드 상단 배지 */
  position?: number;
  total?: number;
  /** AI 자동작성 주입. 없으면 목업으로 동작한다. */
  aiGenerate?: (prompt: string, field: FormField) => Promise<string>;
}

export default function QuestionCard({
  field,
  value,
  onChange,
  onSubmit,
  position,
  total,
  aiGenerate,
}: QuestionCardProps) {
  const badge =
    position != null && total != null
      ? `${position} / ${total}${field.optional ? " · 선택 항목" : ""}`
      : field.optional
        ? "선택 항목"
        : "";

  return (
    <section
      style={{
        width: "100%",
        boxSizing: "border-box",
        background: "var(--ff-card)",
        border: "1px solid var(--ff-border)",
        borderRadius: "var(--ff-radius-card)",
        boxShadow: "var(--ff-shadow-card)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      {badge && <div style={{ fontSize: 12, fontWeight: 500, color: "var(--ff-text-3)" }}>{badge}</div>}

      <h3 style={{ fontSize: 21, fontWeight: 700, color: "var(--ff-text)", margin: "5px 0 0", lineHeight: 1.25 }}>
        {field.label}
      </h3>

      {(field.question || field.hint) && (
        <p style={{ fontSize: 14, color: "var(--ff-text-2)", lineHeight: 1.55, margin: "7px 0 0" }}>
          {field.question ?? field.hint}
        </p>
      )}

      <div style={{ marginTop: 12, width: "100%" }}>
        {field.type === "choice" && <ChoiceBody field={field} value={value} onChange={onChange} />}
        {field.type === "number" && <NumberBody key={field.id} field={field} value={value} onChange={onChange} />}
        {field.type === "text" && (
          <TextBody field={field} value={value} onChange={onChange} onSubmit={onSubmit} aiGenerate={aiGenerate} />
        )}
        {field.type === "sign" && <SignBody key={field.id} value={value} onChange={onChange} />}
        {field.type === "photo" && <PhotoBody value={value} onChange={onChange} />}
      </div>
    </section>
  );
}

/* ── choice: 선택 시 자동 진행 ─────────────────────────────────────────────── */

function ChoiceBody({
  field,
  value,
  onChange,
}: {
  field: FormField;
  value: string;
  onChange: QuestionCardProps["onChange"];
}) {
  return (
    <div role="radiogroup" aria-label={field.label} style={{ display: "flex", flexDirection: "column", gap: 7 }}>
      {(field.options ?? []).map((opt) => {
        const on = value === opt;
        return (
          <button
            key={opt}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(opt, { advance: true })}
            style={{
              width: "100%",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: on ? "var(--ff-sub)" : "transparent",
              border: `1px solid ${on ? "var(--ff-brand)" : "var(--ff-border)"}`,
              borderRadius: 10,
              padding: "12px 13px",
              cursor: "pointer",
              textAlign: "left",
              fontFamily: "inherit",
            }}
          >
            <span
              style={{
                width: 17,
                height: 17,
                borderRadius: "50%",
                border: `2px solid ${on ? "var(--ff-brand)" : "var(--ff-text-4)"}`,
                background: on
                  ? "radial-gradient(circle, var(--ff-brand) 0 45%, transparent 46%)"
                  : "transparent",
                flexShrink: 0,
                boxSizing: "border-box",
              }}
            />
            <span style={{ fontSize: 13.5, color: "var(--ff-text)" }}>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ── number: mask 자릿수 칸 분할 입력 ──────────────────────────────────────── */

/** '####-##-##' → ['#','#','#','#','-','#','#','-','#','#'] */
function parseMask(mask: string) {
  return mask.split("");
}

function assemble(mask: string, digits: string[]) {
  let out = "";
  let p = 0;
  for (const ch of parseMask(mask)) {
    if (ch === "#") {
      out += digits[p] ?? "";
      p += 1;
    } else {
      out += ch;
    }
  }
  return out;
}

function NumberBody({
  field,
  value,
  onChange,
}: {
  field: FormField;
  value: string;
  onChange: QuestionCardProps["onChange"];
}) {
  const mask = field.mask ?? "##########";
  const slots = parseMask(mask);
  const need = slots.filter((c) => c === "#").length;

  // 마스크 칸은 로컬로 들고 있다가, 전부 채워졌을 때만 상위 answers 에 커밋한다.
  // (부분 입력이 "채움"으로 집계되면 진행률이 틀어지기 때문)
  const [digits, setDigits] = useState<string[]>(() => value.replace(/\D/g, "").split("").slice(0, need));
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const commit = (nextDigits: string[]) => {
    setDigits(nextDigits);
    const filled = nextDigits.filter((d) => d !== "" && d != null).length;
    onChange(filled === need ? assemble(mask, nextDigits) : "", {
      advance: filled === need,
    });
  };

  let cursor = -1;
  return (
    <div
      style={{
        background: "var(--ff-sub)",
        border: "1px solid var(--ff-border)",
        borderRadius: "var(--ff-radius-ctl)",
        padding: 14,
      }}
    >
      <div style={{ textAlign: "center", fontSize: 12, color: "var(--ff-text-3)", marginBottom: 10 }}>
        각 칸에 숫자를 입력하세요 {field.hint ? `· ${field.hint}` : ""}
      </div>
      <div style={{ display: "flex", gap: 4, alignItems: "center", justifyContent: "center", flexWrap: "nowrap" }}>
        {slots.map((ch, i) => {
          if (ch !== "#") {
            return (
              <span key={i} style={{ flex: "0 0 auto", color: "var(--ff-text-4)", fontWeight: 700, padding: "0 1px" }}>
                {ch}
              </span>
            );
          }
          cursor += 1;
          const at = cursor;
          return (
            <input
              key={i}
              ref={(el) => {
                inputs.current[at] = el;
              }}
              value={digits[at] ?? ""}
              inputMode="numeric"
              maxLength={1}
              aria-label={`${field.label} ${at + 1}번째 자리`}
              onChange={(e) => {
                const d = e.target.value.replace(/\D/g, "").slice(-1);
                const nextDigits = [...digits];
                nextDigits[at] = d;
                commit(nextDigits);
                if (d) inputs.current[at + 1]?.focus();
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace" && !digits[at]) inputs.current[at - 1]?.focus();
              }}
              style={{
                flex: "1 1 0",
                minWidth: 0,
                width: "100%",
                boxSizing: "border-box",
                height: 40,
                textAlign: "center",
                fontFamily: "inherit",
                fontSize: 16,
                fontWeight: 600,
                color: "var(--ff-text)",
                border: "1px solid var(--ff-input-border)",
                borderRadius: 8,
                background: "var(--ff-input-bg)",
                padding: 0,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ── text: 입력 + AI 자동작성 ──────────────────────────────────────────────── */

function TextBody({
  field,
  value,
  onChange,
  onSubmit,
  aiGenerate,
}: {
  field: FormField;
  value: string;
  onChange: QuestionCardProps["onChange"];
  onSubmit?: () => void;
  aiGenerate?: QuestionCardProps["aiGenerate"];
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
      <AnswerInput
        value={value}
        onChange={(v) => onChange(v)}
        onSubmit={onSubmit}
        placeholder={field.placeholder ?? "여기에 입력해 주세요"}
      />
      {field.aiEnabled && (
        <AiSuggestButton
          placeholder={field.aiPlaceholder}
          fallback={field.example}
          generate={aiGenerate ? (p) => aiGenerate(p, field) : undefined}
          onAccept={(v) => onChange(v)}
        />
      )}
    </div>
  );
}

/* ── sign: 캔버스 드로잉 ───────────────────────────────────────────────────── */

function SignBody({ value, onChange }: { value: string; onChange: QuestionCardProps["onChange"] }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const last = useRef<{ x: number; y: number } | null>(null);
  const [empty, setEmpty] = useState(value === "");

  // 캔버스 백버퍼를 실제 표시 크기 × DPR 로 맞춘다. 안 하면 선이 흐려진다.
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = c.getBoundingClientRect();
    c.width = rect.width * dpr;
    c.height = rect.height * dpr;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    ctx.lineWidth = 2.2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#1c2434";
  }, []);

  const pointFrom = (e: ReactPointerEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 9, width: "100%" }}>
      <div
        style={{
          width: "100%",
          border: "1.5px dashed var(--ff-sign)",
          borderRadius: "var(--ff-radius-ctl)",
          background: "var(--ff-panel)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            drawing.current = true;
            last.current = pointFrom(e);
          }}
          onPointerMove={(e) => {
            if (!drawing.current) return;
            const ctx = canvasRef.current?.getContext("2d");
            const pt = pointFrom(e);
            if (!ctx || !last.current) return;
            ctx.beginPath();
            ctx.moveTo(last.current.x, last.current.y);
            ctx.lineTo(pt.x, pt.y);
            ctx.stroke();
            last.current = pt;
            if (empty) setEmpty(false);
          }}
          onPointerUp={() => {
            drawing.current = false;
            last.current = null;
            const url = canvasRef.current?.toDataURL("image/png");
            if (url && !empty) onChange(url);
          }}
          style={{ display: "block", width: "100%", height: 150, touchAction: "none", cursor: "crosshair" }}
        />
        {empty && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              pointerEvents: "none",
            }}
          >
            <span style={{ fontSize: 24, color: "var(--ff-sign)" }}>✎</span>
            <span style={{ fontSize: 12.5, color: "var(--ff-text-3)" }}>이 영역에 서명해 주세요</span>
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={() => {
          const c = canvasRef.current;
          const ctx = c?.getContext("2d");
          if (c && ctx) ctx.clearRect(0, 0, c.width, c.height);
          setEmpty(true);
          onChange("");
        }}
        style={{
          alignSelf: "flex-start",
          height: 34,
          padding: "0 14px",
          fontFamily: "inherit",
          fontSize: 12.5,
          fontWeight: 600,
          color: "var(--ff-text-2)",
          background: "var(--ff-sub-2)",
          border: "none",
          borderRadius: "var(--ff-radius-sm)",
          cursor: "pointer",
        }}
      >
        ↺ 다시 서명
      </button>
    </div>
  );
}

/* ── photo: 사진 업로드 ────────────────────────────────────────────────────── */

function PhotoBody({ value, onChange }: { value: string; onChange: QuestionCardProps["onChange"] }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const pick = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onChange(String(reader.result), { advance: true });
    reader.readAsDataURL(file);
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 9 }}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={(e) => pick(e.target.files?.[0])}
        style={{ display: "none" }}
      />
      <div
        onClick={() => inputRef.current?.click()}
        style={{
          width: "100%",
          boxSizing: "border-box",
          border: "1.5px dashed var(--ff-photo)",
          borderRadius: "var(--ff-radius-ctl)",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          cursor: "pointer",
        }}
      >
        {value ? (
          <img
            src={value}
            alt="첨부한 사진 미리보기"
            style={{ width: 96, height: 123, objectFit: "cover", borderRadius: 6 }}
          />
        ) : (
          <span style={{ fontSize: 26, color: "var(--ff-photo)" }}>🖼</span>
        )}
        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--ff-photo)" }}>
          {value ? "다른 사진으로 바꾸기" : "클릭하여 이미지 업로드"}
        </span>
        <span style={{ fontSize: 12, color: "var(--ff-text-3)", textAlign: "center" }}>
          여권용 사진(35㎜×45㎜)을 선택하거나 여기에 드래그하세요
        </span>
      </div>
    </div>
  );
}
