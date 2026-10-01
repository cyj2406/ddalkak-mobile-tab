import type { TaskTemplate } from "@/app/data/tasks";

import sample2 from "@/assets/home/car/c16.png";
import sample4 from "@/assets/home/templates/samples/slide-01-4.png";
import sample5 from "@/assets/home/templates/samples/slide-01-5.png";
import sample6 from "@/assets/home/templates/samples/slide-01-6.png";
import sample7 from "@/assets/home/templates/samples/slide-01-7.png";

/**
 * 카드 목록(TemplateGallery) 미리보기 전용 샘플 — 실제 템플릿이 아니다.
 *
 * 첨부 이미지 6장 중 slide-01 (3)은 기존 "SNS 광고 배너" 표지(c15)와 바이트까지 같아 이미 연결돼 있고,
 * (2)는 "유튜브 설명 영상" 표지(c16)와 같은 파일이지만 사진·그림 작업과는 무관하므로(같은 이미지를
 * 다른 작업의 실제 템플릿으로 옮기지 않으려고) 여기서는 예시용으로만 한 번 더 쓴다. 나머지 4장((4)~(7))은 어느
 * 템플릿의 표지인지 확인되지 않아 실제 템플릿 ID와 연결하지 않고 여기에 따로 둔다.
 * 제목은 파일명 그대로이고, 설명은 만들어 넣지 않는다.
 *
 * 평소에는 목록에 나오지 않고 주소에 `?templatePreview=1`이 있을 때만 현재 작업의
 * 템플릿 뒤에 덧붙는다 — 실제 요청에 쓰이는 데이터가 아니다.
 */
const S = (title: string, cover: string, width: number, height: number): TaskTemplate => ({
  taskId: "",
  title,
  use: "",
  meta: "미리보기 샘플",
  format: "PNG",
  cover,
  coverSize: { width, height },
});

const SAMPLES = [
  S("slide-01 (2)", sample2, 1335, 860),
  S("slide-01 (4)", sample4, 640, 1143),
  S("slide-01 (5)", sample5, 640, 640),
  S("slide-01 (6)", sample6, 640, 360),
  S("slide-01 (7)", sample7, 640, 360),
];

function previewParam(): string | null {
  try {
    return new URLSearchParams(window.location.search).get("templatePreview");
  } catch {
    return null;
  }
}

export function isTemplatePreviewMode(): boolean {
  const v = previewParam();
  return v === "1" || v === "many";
}

/** 스크롤·여러 줄 배치 검증용 — `?templatePreview=many`일 때만 이미지 없는 "[검증용] 예시 N" 카드를 더 붙인다
 *  (같은 이미지를 반복해 개수를 늘리지 않는다). 실제 템플릿·제출 데이터와 무관하다. */
const FILLERS: TaskTemplate[] = Array.from({ length: 16 }, (_, i) => ({
  taskId: "", title: `[검증용] 예시 ${i + 1}`, use: "", meta: "검증용 예시", format: "",
}));

/** 현재 작업에 덧붙일 샘플 — taskId만 채워 같은 목록 코드를 탄다. */
export function previewSamplesFor(taskId: string): TaskTemplate[] {
  const all = previewParam() === "many" ? [...SAMPLES, ...FILLERS] : SAMPLES;
  return all.map((s) => ({ ...s, taskId: `sample:${taskId}` }));
}
