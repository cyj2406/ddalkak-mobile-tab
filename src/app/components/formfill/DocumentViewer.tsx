import type { Answers, FormField } from "./types";

/**
 * A4 문서 미리보기 — 현재 빈칸 하이라이트(glow) + 입력 즉시 ✓ 반영.
 *
 * · 부모 폭을 100% 채우고 A4 비율(794:1123)로 높이를 잡는다. 자체 max-width 없음.
 * · 빈칸 위치는 anchor 의 0~1 정규화 비율을 그대로 % 로 환산해 얹는다.
 *   폭이 바뀌어도 좌표를 다시 계산할 필요가 없다.
 * · 문서 안쪽 글자·선 색은 --ff-doc-* 고정 토큰만 쓴다. 다크모드에서도 흰 종이 그대로.
 * · 문서 글자 크기는 cqw(컨테이너 폭 기준) 단위라 종이 크기에 비례해 함께 줄고 는다.
 */
export interface DocumentViewerProps {
  title: string;
  fields: FormField[];
  answers: Answers;
  /** 하이라이트할 빈칸 id */
  currentFieldId?: string | null;
  /** 표시할 페이지 (1-based). 생략하면 현재 빈칸의 페이지. */
  page?: number;
  /** 빈칸을 눌러 해당 질문으로 이동 */
  onSelectField?: (field: FormField) => void;
}

const isImage = (v: string) => v.startsWith("data:image");

export default function DocumentViewer({
  title,
  fields,
  answers,
  currentFieldId,
  page,
  onSelectField,
}: DocumentViewerProps) {
  const current = fields.find((f) => f.id === currentFieldId) ?? null;
  const shownPage = page ?? current?.page ?? 1;
  const onPage = fields.filter((f) => f.anchor.page === shownPage);

  return (
    <div
      style={{
        width: "100%",
        aspectRatio: "794 / 1123",
        position: "relative",
        background: "var(--ff-doc-paper)",
        boxShadow: "var(--ff-doc-shadow)",
        containerType: "inline-size",
        overflow: "hidden",
      }}
    >
      {/* 서식 머리말 — 실제 서식 이미지가 들어오기 전까지의 자리표시 */}
      <div style={{ position: "absolute", inset: 0, padding: "5cqw 5.5cqw", boxSizing: "border-box" }}>
        <div style={{ fontSize: "1.45cqw", color: "var(--ff-doc-sub)" }}>
          ■ 재외동포의 출입국과 법적 지위에 관한 법률 시행규칙 [별지 제1호서식]
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "3cqw",
            fontWeight: 800,
            color: "var(--ff-doc-title)",
            marginTop: "1.8cqw",
            letterSpacing: "0.12cqw",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: "0.6cqw",
            borderBottom: "0.19cqw solid var(--ff-doc-line)",
          }}
        />
      </div>

      {/* 빈칸 레이어 */}
      {onPage.map((field) => {
        const value = answers[field.id] ?? "";
        const filled = value.trim() !== "";
        const active = field.id === currentFieldId;

        return (
          <button
            key={field.id}
            type="button"
            onClick={() => onSelectField?.(field)}
            aria-label={`${field.label}${filled ? " — 입력됨" : " — 비어 있음"}`}
            style={{
              position: "absolute",
              left: `${field.anchor.x * 100}%`,
              top: `${field.anchor.y * 100}%`,
              width: `${field.anchor.w * 100}%`,
              height: `${field.anchor.h * 100}%`,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              gap: "0.5cqw",
              padding: "0 0.8cqw",
              textAlign: "left",
              fontFamily: "inherit",
              cursor: onSelectField ? "pointer" : "default",
              // 채움/현재/빈칸 3단계. 문서 위에 얹히는 상태색이라 브랜드 토큰을 쓴다.
              background: active
                ? "rgba(47,107,255,0.10)"
                : filled
                  ? "rgba(22,163,74,0.07)"
                  : "rgba(120,131,151,0.06)",
              border: `0.13cqw solid ${
                active ? "var(--ff-brand)" : filled ? "var(--ff-success)" : "var(--ff-doc-rule)"
              }`,
              boxShadow: active ? "0 0 0 0.4cqw var(--ff-focus-ring)" : "none",
              borderRadius: "0.3cqw",
              transition: "background 160ms ease, box-shadow 160ms ease, border-color 160ms ease",
            }}
          >
            {filled && isImage(value) ? (
              <img
                src={value}
                alt=""
                style={{ maxHeight: "100%", maxWidth: "70%", objectFit: "contain" }}
              />
            ) : (
              <span
                style={{
                  flex: 1,
                  minWidth: 0,
                  fontSize: "1.6cqw",
                  fontWeight: filled ? 600 : 400,
                  color: filled ? "var(--ff-doc-line)" : "var(--ff-doc-rule)",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {filled ? value : field.label}
              </span>
            )}
            {filled && (
              <span style={{ color: "var(--ff-success)", fontWeight: 700, fontSize: "1.5cqw", flexShrink: 0 }}>
                ✓
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
