/**
 * 서식 채우기 — 필드 스키마
 *
 * 서식 상세 API가 이 형태로 빈칸 목록을 내려주는 것을 전제로 한다.
 * 서식마다 빈칸이 20~157개로 제각각이므로 필드는 전부 데이터이고,
 * 컴포넌트는 어떤 서식이 와도 그대로 렌더할 수 있어야 한다.
 */

export type FormFieldType = "choice" | "number" | "text" | "sign" | "photo";

/**
 * 문서 안에서 이 빈칸이 놓이는 위치.
 *
 * x·y·w·h 는 해당 페이지 크기 대비 **0~1 정규화 비율**이다.
 * (x, y = 좌상단, 원점은 페이지 좌상단)
 * px 가 아니라 비율이므로 줌 배율·태블릿 폭이 바뀌어도 좌표를 다시 계산할 필요가 없다.
 * API가 px로 준다면 페이지 폭/높이로 나눠서 넣으면 된다.
 */
export interface FieldAnchor {
  page: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface FormField {
  id: string;
  type: FormFieldType;
  label: string;
  page: number;
  /** true 면 완료 판정에서 제외된다 (건너뛰어도 "모든 항목 완료"가 됨) */
  optional?: boolean;
  /** type: 'choice' — 선택지 */
  options?: string[];
  /** type: 'number' — '#'은 숫자 칸, 나머지 문자는 구분자. 예: '####-##-##' */
  mask?: string;
  anchor: FieldAnchor;

  /* ── 아래는 선택 항목. API가 함께 주면 쓰고, 없으면 label로 폴백한다 ── */
  /** 질문 카드 본문에 뜨는 안내 문장 */
  question?: string;
  /** 라벨 아래 작은 보조 설명 */
  hint?: string;
  /** 입력창 placeholder */
  placeholder?: string;
  /** AI 자동작성 버튼 노출 여부 */
  aiEnabled?: boolean;
  /** AI 자동작성 프롬프트 입력창의 예시 문구 */
  aiPlaceholder?: string;
  /** 예시값 — AI 목업 응답과 문서 미리보기 힌트에 쓰인다 */
  example?: string;
}

/** 빈칸 id → 사용자가 채운 값. 아직 안 채웠으면 키 자체가 없다. */
export type Answers = Record<string, string>;

/** 서식 상세 API 응답의 최소 형태 */
export interface FormDetail {
  id: string;
  title: string;
  category: string;
  totalPages: number;
  fields: FormField[];
}
