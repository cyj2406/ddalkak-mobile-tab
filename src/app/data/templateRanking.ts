import { templateKey, templatesForTask, type TaskTemplate } from "@/app/data/tasks";

/**
 * 요청 작성 도우미 2단계 "사용할 템플릿" 추천 — 주제에 업종·주제 키워드가 들어 있는 템플릿을 1순위로 올린다
 * (고깃집 요청에 베이커리 템플릿이 붙지 않게). 마음에 안 들면 "템플릿 변경"에서 같은 순서의 목록으로 바꾼다.
 *
 * 키워드는 기존 템플릿(TASK_TEMPLATES)의 templateKey 로 붙인다. 없는 템플릿은 키워드 없음(원래 순서 유지).
 * 키워드 값은 목업이라 실제 템플릿 메타데이터가 생기면 교체한다.
 */
const TAGS: Record<string, string[]> = {
  "photo::뷰티 제품 광고 이미지": ["뷰티", "화장품", "코스메틱", "스킨케어"],
  "photo::버터떡 유튜브 썸네일": ["유튜브", "썸네일", "먹방", "디저트", "떡"],
  "photo::SNS 광고 배너": ["광고", "배너", "SNS"],
  "cardnews::단색 카드형 카드뉴스": ["정보", "소식", "안내"],
  "cardnews::포토 Q&A 카드뉴스": ["Q&A", "인터뷰", "질문"],
  "product::01_hero (1)": ["캔들", "향", "리빙", "인테리어"],
  "product::01_hero (2)": ["전자", "가전", "테크"],
  "product::01_hero (3)": ["식품", "간식", "음료"],
  "product::스마트스토어 상세페이지": ["스마트스토어", "쇼핑몰"],
  "product::쿠팡 상품 상세페이지": ["쿠팡", "쇼핑몰", "할인"],
  "word::월간 업무 보고서": ["보고", "업무", "월간", "실적"],
  "word::입찰 제안서": ["입찰", "제안", "공공"],
  "hangul::협조 요청 공문": ["공문", "협조", "기관"],
  "leaflet::행사 홍보 안내문": ["행사", "축제", "이벤트"],
  "ppt::사업계획 발표자료": ["사업", "투자", "IR", "스타트업"],
  "ppt::분기 실적 보고": ["실적", "분기", "보고"],
  "excel::거래처 견적 표": ["견적", "거래처"],
  "shortform::숏폼 홍보 영상": ["홍보", "신제품", "릴스"],
};

/** 작업의 템플릿을 주제 기준으로 정렬한다 — 키워드가 맞는 템플릿을 앞으로 올리기만 하고(거르지 않음), 같은 그룹 안에서는 원래 순서를 지킨다. */
export function rankTemplatesForTopic(taskId: string, topic: string, extra: TaskTemplate[] = []): TaskTemplate[] {
  const q = topic.replace(/\s+/g, "").toLowerCase();
  return [...templatesForTask(taskId), ...extra]
    .map((template, i) => {
      const tags = TAGS[templateKey(template)] ?? [];
      const score = tags.filter((tag) => q.includes(tag.replace(/\s+/g, "").toLowerCase())).length;
      return { template, score, i };
    })
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .map((r) => r.template);
}
