import { useCallback, useMemo, useState } from "react";
import type { Answers, FormField } from "./types";

export interface FormFillProgress {
  /** 전체 빈칸 수 */
  total: number;
  /** 채운 빈칸 수 (선택 항목 포함) */
  filled: number;
  /** 완료 판정에 필요한 빈칸 수 (optional 제외) */
  required: number;
  /** 그중 채운 수 */
  requiredFilled: number;
  /** 현재 위치 (1-based) — "N / M" 표기용 */
  position: number;
  /** 0~100 */
  percent: number;
}

export interface FormFillState {
  fields: FormField[];
  fieldIdx: number;
  /** 현재 필드. 인덱스가 범위를 벗어나면 null */
  field: FormField | null;
  answers: Answers;
  done: boolean;
  progress: FormFillProgress;

  isFilled: (id: string) => boolean;
  setAnswer: (id: string, value: string, opts?: { advance?: boolean }) => void;
  clearAnswer: (id: string) => void;
  next: () => void;
  prev: () => void;
  skip: () => void;
  goTo: (idx: number) => void;
  /** 완료 화면에서 "답변 다시 확인" — 마지막 필드로 돌아간다 */
  review: () => void;
  reset: () => void;
}

const hasValue = (v: string | undefined): v is string => v != null && v.trim() !== "";

/**
 * 서식 채우기 화면의 단일 진실 공급원.
 *
 * 이 훅은 레이아웃보다 **위**에서 호출되어야 한다. 3단 컬럼 / 하단 시트 / 탭 중
 * 무엇으로 바꾸든 훅을 들고 있는 컴포넌트가 언마운트되지 않아야 답변이 유지된다.
 * 프롭 드릴링 없이 쓰려면 FormFillProvider 로 감싸고 useFormFill() 로 꺼내 쓴다.
 */
export function useFormFillState(fields: FormField[]): FormFillState {
  const [fieldIdx, setFieldIdx] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  // "완료 화면을 보고 있는가"는 답변 충족 여부와 별개다.
  // 전부 채웠더라도 "답변 다시 확인"을 누르면 작성 화면으로 돌아가야 하기 때문.
  const [reviewing, setReviewing] = useState(false);

  const total = fields.length;
  const lastIdx = Math.max(0, total - 1);

  const requiredIds = useMemo(
    () => fields.filter((f) => !f.optional).map((f) => f.id),
    [fields],
  );

  const isFilled = useCallback((id: string) => hasValue(answers[id]), [answers]);

  const progress = useMemo<FormFillProgress>(() => {
    const filled = fields.filter((f) => hasValue(answers[f.id])).length;
    const requiredFilled = requiredIds.filter((id) => hasValue(answers[id])).length;
    const required = requiredIds.length;
    return {
      total,
      filled,
      required,
      requiredFilled,
      position: Math.min(fieldIdx + 1, Math.max(total, 1)),
      percent: total === 0 ? 0 : Math.round((filled / total) * 100),
    };
  }, [fields, answers, requiredIds, fieldIdx, total]);

  const allRequiredFilled = progress.required > 0 && progress.requiredFilled === progress.required;
  const done = allRequiredFilled && !reviewing;

  const goTo = useCallback(
    (idx: number) => {
      setReviewing(true);
      setFieldIdx(Math.max(0, Math.min(idx, lastIdx)));
    },
    [lastIdx],
  );

  // 자동 진행(choice 선택 등)은 setAnswer 이후의 인덱스 이동을 같은 배치에서 처리한다.
  const setAnswer = useCallback<FormFillState["setAnswer"]>(
    (id, value, opts) => {
      setAnswers((prevAnswers) => ({ ...prevAnswers, [id]: value }));
      // 답을 채우는 순간 "다시 확인 중" 상태는 해제된다.
      // 마지막 남은 필수 항목을 채우면 곧바로 완료 화면으로 넘어가야 하기 때문.
      setReviewing(false);
      if (opts?.advance) {
        setFieldIdx((cur) => {
          const at = fields.findIndex((f) => f.id === id);
          // 현재 보고 있는 필드를 채웠을 때만 다음으로 넘어간다.
          // 문서에서 이전 칸을 눌러 고친 경우에는 위치를 건드리지 않는다.
          return at === cur ? Math.min(cur + 1, lastIdx) : cur;
        });
      }
    },
    [fields, lastIdx],
  );

  const clearAnswer = useCallback((id: string) => {
    setAnswers(({ [id]: _removed, ...rest }) => rest);
  }, []);

  const next = useCallback(() => {
    setReviewing(false);
    setFieldIdx((cur) => Math.min(cur + 1, lastIdx));
  }, [lastIdx]);

  const prev = useCallback(() => {
    setReviewing(true);
    setFieldIdx((cur) => Math.max(cur - 1, 0));
  }, []);

  // 건너뛰기는 답변을 남기지 않고 위치만 이동한다.
  const skip = next;

  const review = useCallback(() => {
    setReviewing(true);
    setFieldIdx(lastIdx);
  }, [lastIdx]);

  const reset = useCallback(() => {
    setAnswers({});
    setFieldIdx(0);
    setReviewing(false);
  }, []);

  return {
    fields,
    fieldIdx,
    field: fields[fieldIdx] ?? null,
    answers,
    done,
    progress,
    isFilled,
    setAnswer,
    clearAnswer,
    next,
    prev,
    skip,
    goTo,
    review,
    reset,
  };
}
