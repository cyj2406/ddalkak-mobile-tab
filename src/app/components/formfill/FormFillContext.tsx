import { createContext, useContext, type ReactNode } from "react";
import type { FormField } from "./types";
import { useFormFillState, type FormFillState } from "./useFormFillState";

const FormFillContext = createContext<FormFillState | null>(null);

/**
 * 서식 채우기 상태를 서브트리 전체에 공급한다.
 *
 * 레이아웃(3단 컬럼 / 하단 시트 / 탭)은 이 Provider **안쪽**에서만 갈아끼울 것.
 * Provider 자체가 언마운트되면 fieldIdx·answers가 통째로 날아간다.
 */
export function FormFillProvider({
  fields,
  children,
}: {
  fields: FormField[];
  children: ReactNode;
}) {
  const state = useFormFillState(fields);
  return <FormFillContext.Provider value={state}>{children}</FormFillContext.Provider>;
}

export function useFormFill(): FormFillState {
  const ctx = useContext(FormFillContext);
  if (!ctx) throw new Error("useFormFill 은 FormFillProvider 안에서만 쓸 수 있습니다.");
  return ctx;
}
