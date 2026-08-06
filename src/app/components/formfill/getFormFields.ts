import { F4_FORM } from "./mockFields";
import type { FormDetail } from "./types";

/**
 * 서식 id → 빈칸 스키마 조회.
 *
 * 목록 카드의 `count`(빈칸 20·54·157개…)는 **표시용 요약값**이라 화면 구성에 쓰지 않는다.
 * 실제로 몇 개의 빈칸을 어떤 타입·위치로 그릴지는 항상 이 함수가 돌려주는 fields 가 결정한다.
 * 목록과 상세가 서로 다른 개수를 말하게 두면 진행률·완료 판정이 전부 어긋나기 때문.
 *
 * TODO(api): 서식 상세 API가 붙으면 이 함수 본문을 `GET /forms/:id` 호출로 교체한다.
 *   시그니처(formId → FormDetail)는 그대로 두고 내부만 바꾸면 화면 코드는 손댈 필요가 없다.
 *   지금은 API가 없어 **어떤 formId를 넣어도 F-4 통합신청서의 16개 필드**를 그대로 돌려준다.
 */
export function getFormFields(formId: string): FormDetail {
  // TODO(api): 임시 — 서식별 스키마가 없어 전부 F-4 16개 필드로 대체한다.
  return { ...F4_FORM, id: formId };
}
