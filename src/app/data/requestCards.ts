/**
 * 요청 작성 도우미 → 워크스페이스 "확인이 필요해요" 카드 정의.
 *
 * 원칙(2026-10-15 개편):
 * - 템플릿은 디자인(레이아웃·색·그래픽 스타일)만 정한다. 문구 어조와 비율·장수는 정하지 않는다 —
 *   그래서 형식 값(비율·장수·분량 등)은 요청 작성에서 항상 받고(FORMAT_BY_TASK), 문구 어조는
 *   워크스페이스 톤 카드에서 후보와 함께 받는다.
 * - 요청 작성 화면은 주제·만들 작업·형식축·꼭 담아야 할 내용(선택)·참고 자료만 묻는다.
 * - 구체적인 내용은 템플릿이 정해진 뒤 여기 정의한 카드에서 묻는다.
 * - 카드 종류
 *   · ◆ 고르는 카드(pick): AI 후보 3개(candidates) 또는 정해진 선택지(options, 드롭다운) + 직접 입력.
 *     비울 수 없고, 첫 후보가 기본 선택이다.
 *   · ★ 적는 카드(write): 후보·예시 없이 빈 칸 하나. 비울 수 있고 기본은 비어 있다.
 *     가격·주소·수치·날짜처럼 지어낼 수 없는 사실 값만 여기 둔다 — 비우면 결과물에서도
 *     그 영역을 뺀다(요청문에 "지어내지 마세요"를 덧붙이는 대신 구조로 보장한다).
 * - 후보 문구에는 수치·가격·날짜·주소를 넣지 않는다. 후보는 주제·앞 카드의 답만 써서 만든다.
 * - 순서는 스펙 그대로(★는 뒤로 모은다). 연속한 짧은 ★(한 줄 값)는 화면에서 한 카드에 2열로 묶는다.
 *
 * 후보 문구는 전부 목업이다 — 실제 AI 후보 생성이 연결되면 candidates 를 교체한다.
 */

export type CardKind = "pick" | "write";


/** 후보를 만들 때 쓸 수 있는 값 — 주제, ★ 이름 카드의 값, 앞 카드들의 답(id → 값). */
export interface CardContext {
  topic: string;
  name: string;
  answers: Record<string, string>;
  /** 요청 작성에서 고른 형식축 값(필드 key → 값). 예: 영상 { ratio: "세로", length: "10초" } */
  format: Record<string, string>;
}

export interface RequestCardDef {
  id: string;
  title: string;
  kind: CardKind;
  /** ◆ AI 후보 3개 */
  candidates?: (ctx: CardContext) => [string, string, string];
  /** ◆ 정해진 선택지(문서 종류·청중 등) — AI 후보 대신 이 목록을 후보로 쓴다 */
  options?: string[];
  /** ◆ 직접 입력 칸의 최대 줄 수 — 짧은 서술 3, 긴 서술 8 */
  customRows?: number;
  /** ★ 입력 형식 안내(값 예시가 아니라 "무엇을 적는지"만) */
  placeholder?: string;
  /** ★ 여러 줄 서술(최대 8줄 자동 확장). 아니면 40자 한 줄 칸 */
  multiline?: boolean;
  /** 이 ★ 카드 값이 뒤 카드 후보의 이름(ctx.name)으로 쓰인다 */
  nameCard?: boolean;
  /** 질문 아래 회색 한 줄 안내(분량 제한 등) — 형식축 값에 따라 달라지면 함수로 */
  hint?: string | ((ctx: CardContext) => string);
  /** 요청 작성의 "꼭 담아야 할 내용"을 받아 미리 채우는 ★ 카드 — 같은 걸 두 번 묻지 않기 위해서다 */
  contentCard?: boolean;
}

/** 주제 끝에 붙은 결과물 형식 이름("… 카드뉴스", "… 상세페이지")은 후보 문장에서 떼어 낸다. */
const FORMAT_SUFFIX = /\s*(카드뉴스|상세페이지|브로셔|안내문|랜딩페이지|페이지|이미지 슬라이드|슬라이드|웹 발표자료|발표자료|숏폼 영상|홍보 영상|영상|이미지)$/;
const subject = (c: CardContext) => c.name.trim() || c.topic.trim().replace(FORMAT_SUFFIX, "") || c.topic.trim() || "이 내용";

// ── 여러 작업이 같이 쓰는 카드 ─────────────────────────────────────────────
/** 문구 어조 — 템플릿이 정하지 않으므로 여기서 후보와 함께 받는다. */
const TONE: RequestCardDef = {
  id: "tone",
  title: "톤",
  kind: "pick",
  customRows: 3,
  candidates: () => ["친근하고 가볍게", "신뢰감 있게", "차분하고 고급스럽게"],
};
const TARGET: RequestCardDef = {
  id: "target",
  title: "타깃 고객",
  kind: "pick",
  customRows: 3,
  candidates: () => ["처음 알게 된 잠재 고객", "이미 관심을 보인 기존 고객", "SNS로 정보를 찾아보는 20~30대"],
};

// ── 작업 묶음별 카드 ────────────────────────────────────────────────────────
const PHOTO: RequestCardDef[] = [
  {
    id: "message",
    title: "핵심 메시지",
    kind: "pick",
    customRows: 3,
    candidates: (c) => [`${subject(c)}, 지금 만나보세요`, `일상을 바꾸는 ${subject(c)}`, `${subject(c)}의 새로운 시작`],
  },
  TARGET,
  TONE,
  { id: "must", contentCard: true, title: "이미지에 꼭 들어갈 내용", kind: "write", multiline: true, placeholder: "상호·가격·주소·영업시간 등 이미지에 그대로 넣을 내용을 적어주세요" },
];

const CARDNEWS: RequestCardDef[] = [
  {
    id: "headings",
    title: "카드별 소제목",
    kind: "pick",
    customRows: 8,
    candidates: (c) => [
      `왜 지금 ${subject(c)}일까? → 핵심 한눈에 보기 → 이렇게 해보세요 → 정리`,
      `${subject(c)}, 이것만 알면 돼요 → 자주 묻는 질문 → 놓치기 쉬운 점 → 정리`,
      `문제 상황 → ${subject(c)} 소개 → 달라지는 점 → 시작하는 법`,
    ],
  },
  TARGET,
  {
    id: "cta",
    title: "마지막 카드 CTA",
    kind: "pick",
    customRows: 3,
    candidates: () => ["저장해 두고 필요할 때 다시 보세요", "더 궁금하면 프로필 링크를 확인하세요", "도움이 됐다면 주변에 공유해 주세요"],
  },
  TONE,
  { id: "facts", contentCard: true, title: "인용 수치와 출처", kind: "write", multiline: true, placeholder: "카드에 넣을 수치와 그 출처를 적어주세요" },
];

const PRODUCT: RequestCardDef[] = [
  {
    id: "features",
    title: "핵심 특징",
    kind: "pick",
    customRows: 8,
    candidates: (c) => [`${subject(c)}의 소재와 품질을 먼저 보여주기`, `${subject(c)}을(를) 쓰는 장면과 편리함 강조`, `${subject(c)}만의 디자인과 감성 강조`],
  },
  TARGET,
  TONE,
  { id: "name", title: "상품명", kind: "write", nameCard: true, placeholder: "판매 페이지에 쓸 상품명을 그대로 적어주세요" },
  { id: "price", title: "가격·옵션", kind: "write", multiline: true, placeholder: "판매가와 옵션(색상·용량 등)을 적어주세요" },
  { id: "shipping", title: "배송·교환 정책", kind: "write", multiline: true, placeholder: "배송 기간, 교환·반품 조건을 적어주세요" },
];

const LANDING: RequestCardDef[] = [
  {
    id: "value",
    title: "핵심 가치",
    kind: "pick",
    customRows: 8,
    candidates: (c) => [`${subject(c)}로 시간을 아끼세요`, `복잡한 일을 쉽게, ${subject(c)}`, `${subject(c)}와 함께 더 나은 결과를`],
  },
  TARGET,
  { id: "cta", title: "CTA 문구", kind: "pick", customRows: 3, candidates: () => ["무료로 시작하기", "지금 신청하기", "자세히 알아보기"] },
  TONE,
  { id: "contact", title: "서비스명·연락처", kind: "write", multiline: true, placeholder: "페이지에 쓸 서비스명과 연락처를 적어주세요" },
  { id: "pricing", title: "가격 플랜", kind: "write", multiline: true, placeholder: "플랜 이름과 가격을 적어주세요" },
];

/** 브로셔 장수(요청 작성 스테퍼) — 없으면 6 */
const leafletPages = (c: CardContext) => Math.max(1, Number.parseInt(c.format.value ?? "6", 10) || 6);

/** 장수에 맞춘 장별 구성 — 2장과 8장은 담을 수 있는 양이 네 배 차이라 후보 분량을 장수에 맞춘다. */
function pageOutlines(pages: number, use: string): [string, string, string] {
  const body = use === "행사 안내" ? ["행사 소개", "프로그램", "오시는 길", "참가 안내", "후원·협력", "지난 행사", "자주 묻는 질문"]
    : use === "제품 소개" ? ["제품 소개", "핵심 특징", "사용 장면", "사양", "구매 안내", "고객 후기", "자주 묻는 질문"]
    : ["회사 소개", "서비스", "강점", "실적", "고객사", "연혁", "팀 소개"];
  // 1~2장은 앞·뒤로 나눠 적고, 3장부터는 표지 → 본문 n−2장 → 연락처로 잡는다. 같은 후보가 겹치지 않게 본문 순서를 바꿔 만든다.
  if (pages === 1) return [`표지 + ${body[0]} + 연락처`, `${body[0]} + ${body[1]} + 연락처`, `표지 + ${body[1]} + 문의·지도`];
  if (pages === 2) return [`앞: 표지 · 뒤: ${body[0]} + 연락처`, `앞: 표지 + ${body[0]} · 뒤: ${body[1]} + 연락처`, `앞: 표지·인사말 · 뒤: ${body[1]} + 문의·지도`];
  const middle = pages - 2;
  const pick = (list: string[]) => Array.from({ length: middle }, (_, i) => list[i % list.length]);
  return [
    ["표지", ...pick(body), "연락처"].join(" → "),
    ["표지", ...pick([...body.slice(1), body[0]]), "연락처"].join(" → "),
    ["표지·인사말", ...pick([...body].reverse()), "문의·지도"].join(" → "),
  ];
}

const LEAFLET: RequestCardDef[] = [
  { id: "use", title: "용도", kind: "pick", options: ["회사 소개", "제품 소개", "행사 안내"] },
  {
    id: "intro",
    title: "소개 문구",
    kind: "pick",
    customRows: 3,
    // 장수가 적으면 한 줄, 많으면 두 문장 분량으로 — 담을 수 있는 양에 맞춘다.
    hint: (c) => (leafletPages(c) <= 2 ? `${leafletPages(c)}장이라 소개 문구는 한 줄로 짧게 잡았어요` : `${leafletPages(c)}장이라 소개 문구를 조금 넉넉하게 잡았어요`),
    candidates: (c) => {
      const s = subject(c);
      const short: [string, string, string] = c.answers.use === "행사 안내"
        ? [`${s}에 초대합니다`, `함께 즐기는 ${s}`, `${s}, 놓치지 마세요`]
        : c.answers.use === "제품 소개"
          ? [`새로워진 ${s}를 소개합니다`, `${s}, 이렇게 달라졌어요`, `일상에 필요한 ${s}`]
          : [`${s}가 함께합니다`, `믿을 수 있는 선택, ${s}`, `${s}, 가까이에서 시작하세요`];
      if (leafletPages(c) <= 2) return short;
      return [
        `${short[0]}. 처음 만나는 분도 쉽게 이해할 수 있도록 핵심만 담았어요.`,
        `${short[1]}. 왜 지금 ${s}인지, 무엇이 다른지 차근차근 보여 드려요.`,
        `${short[2]}. 필요한 정보를 한곳에 모아 한눈에 살펴볼 수 있어요.`,
      ];
    },
  },
  {
    id: "pages",
    title: "장별 구성",
    kind: "pick",
    customRows: 8,
    hint: (c) => `${leafletPages(c)}장에 맞춰 나눴어요`,
    candidates: (c) => pageOutlines(leafletPages(c), c.answers.use),
  },
  TONE,
  { id: "contact", title: "회사명·연락처", kind: "write", multiline: true, placeholder: "회사명, 전화번호, 주소, 홈페이지 등을 적어주세요" },
  { id: "record", title: "실적 수치", kind: "write", multiline: true, placeholder: "고객 수, 경력 연수 등 넣고 싶은 실적을 적어주세요" },
];

const OUTLINES: Record<string, [string, string, string]> = {
  보고서: ["개요 → 현황 → 문제점 → 개선 방안 → 결론", "요약 → 주요 성과 → 이슈 → 다음 계획", "배경 → 추진 내용 → 결과 → 향후 계획"],
  공문: ["관련 근거 → 요청 사항 → 세부 내용 → 붙임", "목적 → 주요 내용 → 협조 요청", "관련 → 내용 → 일정 → 문의처"],
  제안서: ["제안 배경 → 목표 → 추진 방안 → 기대 효과", "현황 분석 → 제안 내용 → 일정 → 예산", "문제 정의 → 해결 방안 → 차별점 → 실행 계획"],
  계획서: ["목적 → 추진 체계 → 세부 일정 → 예산 → 기대 효과", "배경 → 목표 → 실행 방안 → 점검 계획", "개요 → 단계별 계획 → 역할 분담 → 위험 관리"],
  회의록: ["회의 개요 → 안건 → 논의 내용 → 결정 사항 → 후속 조치", "참석자 → 안건별 요약 → 결정 사항", "안건 → 의견 → 결론 → 담당자"],
};

const DOCUMENT: RequestCardDef[] = [
  { id: "doctype", title: "어떤 문서인가요?", kind: "pick", options: ["보고서", "공문", "제안서", "계획서", "회의록"] },
  {
    id: "outline",
    title: "목차 구성",
    kind: "pick",
    customRows: 8,
    candidates: (c) => OUTLINES[c.answers.doctype] ?? OUTLINES["보고서"],
  },
  { id: "tone", title: "어투", kind: "pick", options: ["격식체", "보통체", "설명체"] },
  { id: "recipient", title: "기업명·수신처·직함", kind: "write", placeholder: "기업명, 받는 기관·부서, 직함" },
  { id: "dates", title: "일자·기한·문서번호", kind: "write", placeholder: "문서 일자, 기한, 문서번호" },
  { id: "body", contentCard: true, title: "업무 내용·포함할 수치", kind: "write", multiline: true, placeholder: "문서에 들어갈 업무 내용과 수치를 적어주세요" },
];

const THESIS: RequestCardDef[] = [
  {
    id: "title",
    title: "제목안",
    kind: "pick",
    customRows: 3,
    candidates: (c) => [`${subject(c)}에 관한 연구`, `${subject(c)}의 영향 요인 분석`, `${subject(c)}: 현황과 과제`],
  },
  {
    id: "question",
    title: "연구 질문",
    kind: "pick",
    customRows: 3,
    candidates: (c) => [`${subject(c)}은(는) 어떤 요인과 관련이 있는가?`, `${subject(c)}의 현재 양상은 어떠한가?`, `${subject(c)}을(를) 개선하려면 무엇이 필요한가?`],
  },
  {
    id: "sections",
    title: "섹션 구성",
    kind: "pick",
    customRows: 8,
    candidates: () => ["서론 → 이론적 배경 → 연구 방법 → 결과 → 논의 → 결론", "서론 → 선행연구 검토 → 분석 → 결론", "서론 → 연구 설계 → 결과 및 해석 → 시사점"],
  },
  { id: "prior", title: "선행연구 목록", kind: "write", multiline: true, placeholder: "인용할 논문의 저자·연도·제목을 적어주세요" },
  { id: "data", title: "데이터·표본·소속", kind: "write", multiline: true, placeholder: "사용한 데이터, 표본 규모, 소속 기관을 적어주세요" },
];

const FLOWS: Record<string, [string, string, string]> = {
  "사내 보고": ["요약 → 현황 → 이슈 → 다음 계획", "결론 먼저 → 근거 → 요청 사항", "목표 대비 실적 → 원인 → 대응"],
  "외부 제안": ["문제 → 해결 방법 → 기대 효과 → 제안 조건", "고객 상황 → 우리 제안 → 사례 → 다음 단계", "핵심 가치 → 기능 → 도입 절차 → 문의"],
  강의: ["학습 목표 → 개념 → 예시 → 정리 퀴즈", "질문 던지기 → 설명 → 실습 → 요약", "개요 → 단계별 설명 → 사례 → 마무리"],
  투자자: ["문제 → 해결책 → 시장 → 비즈니스 모델 → 팀 → 투자 요청", "비전 → 제품 → 성장 지표 → 경쟁 → 자금 계획", "시장 기회 → 제품 → 고객 반응 → 로드맵 → 투자 요청"],
};

const DECK: RequestCardDef[] = [
  { id: "audience", title: "청중", kind: "pick", options: ["사내 보고", "외부 제안", "강의", "투자자"] },
  {
    id: "flow",
    title: "슬라이드 흐름",
    kind: "pick",
    customRows: 8,
    candidates: (c) => FLOWS[c.answers.audience] ?? FLOWS["사내 보고"],
  },
  {
    id: "cover",
    title: "표지 문구",
    kind: "pick",
    customRows: 3,
    candidates: (c) => [subject(c), `${subject(c)}: 핵심 정리`, `${subject(c)}, 무엇이 달라지나`],
  },
  TONE,
  { id: "facts", contentCard: true, title: "핵심 수치·일정·담당자", kind: "write", multiline: true, placeholder: "슬라이드에 넣을 수치, 일정, 담당자를 적어주세요" },
];

const SHEETS: Record<string, [string, string, string]> = {
  집계표: ["입력 시트(날짜 · 항목 · 수량 · 금액) + 월별 요약 시트", "시트 1개(구분 · 항목 · 합계)", "항목별 시트 + 전체 합계 시트"],
  일정표: ["시트 1개(날짜 · 업무 · 담당자 · 상태)", "월별 시트(주차 · 업무 · 진행률)", "간트형 시트(업무 · 시작일 · 종료일 · 담당자)"],
  견적서: ["시트 1개(품목 · 규격 · 수량 · 단가 · 금액)", "견적 시트 + 품목 단가표 시트", "견적 시트(품목 · 수량 · 단가 · 공급가 · 세액)"],
  대시보드: ["원본 데이터 시트 + 요약 대시보드 시트", "월별 지표 시트 + 차트 시트", "항목별 데이터 시트 + 핵심 지표 요약 시트"],
};

const EXCEL: RequestCardDef[] = [
  { id: "kind", title: "무엇을 만들까요?", kind: "pick", options: ["집계표", "일정표", "견적서", "대시보드"] },
  { id: "sheets", title: "시트·열 구성", kind: "pick", customRows: 8, candidates: (c) => SHEETS[c.answers.kind] ?? SHEETS["집계표"] },
  { id: "company", title: "기업명", kind: "write", placeholder: "표에 넣을 기업명" },
  { id: "period", title: "기간", kind: "write", placeholder: "표가 다루는 기간" },
  { id: "calc", contentCard: true, title: "계산할 항목", kind: "write", multiline: true, placeholder: "합계·세율·할인율 등 계산할 항목과 방식을 적어주세요" },
];

/** 고른 영상 길이(초). 요청 작성의 스테퍼 값 — 없으면 15 */
const videoSeconds = (c: CardContext) => Math.min(15, Math.max(5, Number.parseInt(c.format.length ?? "15", 10) || 15));
/** 장면 수 상한 = 길이 ÷ 3초(최소 1) — 5초에 장면 5개 구성안을 내지 않는다 */
const maxScenes = (c: CardContext) => Math.max(1, Math.floor(videoSeconds(c) / 3));
/** 장면 수별 장면 흐름 후보 — 상한 이하 중 가장 큰 구성을 쓴다 */
const SCENES_BY_COUNT: Record<number, [string, string, string]> = {
  1: ["핵심 한 컷 + 자막", "제품 클로즈업 + 로고", "한 문장 훅 + CTA 자막"],
  2: ["훅 → CTA", "제품 한 컷 → CTA", "비포 → 애프터"],
  3: ["훅 → 핵심 하나 → CTA", "문제 → 해결 → CTA", "비포 → 애프터 → CTA"],
  4: ["훅 → 문제 → 해결 → CTA", "훅 → 핵심 둘 → CTA", "비포 → 과정 → 애프터 → CTA"],
  5: ["훅 → 문제 → 해결 → 증거 → CTA", "훅 → 핵심 셋 → CTA", "비포 → 과정 → 애프터 → 후기 → CTA"],
};

const VIDEO: RequestCardDef[] = [
  {
    id: "hook",
    title: "훅 문장",
    kind: "pick",
    customRows: 3,
    candidates: (c) => [`아직도 ${subject(c)} 모르세요?`, `${subject(c)}, 짧게 정리해 드려요`, `이걸 보면 ${subject(c)}이(가) 달라 보여요`],
  },
  {
    id: "scenes",
    title: "장면 흐름",
    kind: "pick",
    customRows: 8,
    // 고른 영상 길이 안에 들어가는 구성만 제시한다(5초에 장면 5개 구성안을 내지 않는다).
    hint: (c) => `${videoSeconds(c)}초 영상이라 ${maxScenes(c)}장면 이내로 구성해요`,
    candidates: (c) => SCENES_BY_COUNT[Math.min(5, maxScenes(c))],
  },
  TONE,
  { id: "caption", contentCard: true, title: "자막 필수 문구", kind: "write", multiline: true, hint: (c) => `${videoSeconds(c)}초 영상이라 ${videoSeconds(c) <= 5 ? "한 줄" : "2~3줄"} 이내가 좋아요. 영상에 박힌 글자는 나중에 고치기 어려워요.`, placeholder: "자막에 꼭 그대로 넣어야 할 문구를 적어주세요" },
];

const CARDS_BY_TASK: Record<string, RequestCardDef[]> = {
  photo: PHOTO,
  cardnews: CARDNEWS,
  product: PRODUCT,
  leaflet: LEAFLET,
  appintro: LANDING,
  word: DOCUMENT,
  hangul: DOCUMENT,
  visa: DOCUMENT,
  thesis: THESIS,
  imgslide: DECK,
  ppt: DECK,
  webppt: DECK,
  excel: EXCEL,
  shortform: VIDEO,
  youtube: VIDEO,
};

export function cardsForTask(taskId: string): RequestCardDef[] {
  return CARDS_BY_TASK[taskId] ?? [];
}

// ── 요청 작성 화면의 형식 값 ───────────────────────────────────────────────
// 생성 툴이 실제로 소비하는 인자만 둔다(받아도 무시되는 값은 못 지킬 약속이 된다). 작업별 근거는 FORMAT_BY_TASK 위 주석.
// 작업마다 최대 한 라벨(입력 1~2개). 소수의 서로 다른 선택지는 드롭다운, 연속 수치는 스테퍼(카드 수·섹션 수·장수·영상 길이).
// 라디오·칩·"선택 안 함" 같은 빈 기본값은 쓰지 않는다.
// 워크스페이스 카드는 여기서 정한 값을 다시 묻지 않는다.

export interface FormatOption {
  value: string;
  /** 괄호에 붙이는 생김새(비율). 엔진이 못 지키는 수치나 플랫폼 이름은 넣지 않는다. */
  note?: string;
}

/**
 * 형식축 안의 입력 하나 — 영상처럼 한 라벨 아래 두 개(비율 + 길이)를 둘 수 있다.
 * 컴포넌트 선택 규칙: 값끼리 의미가 다른 소수(2~5개) 선택지 → 드롭다운(select),
 * 연속된 수치·상한이 열린 값 → 스테퍼(number: 숫자 입력 + ▲▼, 타이핑 허용, 범위 밖은 blur 때 보정).
 */
export type FormatField =
  | {
      kind: "select";
      key: string;
      /** 스크린리더·요청문용 이름(화면 라벨은 FormatDef.label 하나) */
      label: string;
      options: FormatOption[];
      defaultValue: string;
    }
  | {
      kind: "number";
      key: string;
      label: string;
      min: number;
      /** 없으면 상한 없음 */
      max?: number;
      defaultValue: string;
      /** 입력칸 바깥 오른쪽 회색 단위 — 라벨이 이미 단위를 말하면(장수·카드 수) 두지 않는다 */
      unit?: string;
      /** 요청문·요약에 붙일 단위(화면에 단위를 안 보일 때도 요약은 "4면"처럼 읽혀야 한다) */
      summaryUnit: string;
      /** 상한 초과로 보정할 때 안내 */
      overMaxNotice?: string;
      /** 하한 미만으로 보정할 때 안내 */
      underMinNotice: string;
      /** 막지는 않지만 이 값 이상이면 띄우는 안내 */
      large?: { from: number; notice: string };
    };

export interface FormatDef {
  label: string;
  fields: FormatField[];
  /** 라벨 옆 ? 툴팁 */
  tooltip?: string;
  /** 드롭다운 아래 회색 한 줄 */
  helper?: string;
}

const opts = (...values: string[]): FormatOption[] => values.map((value) => ({ value }));
const single = (label: string, options: FormatOption[], defaultValue: string, extra: Partial<FormatDef> = {}): FormatDef => ({
  label,
  fields: [{ kind: "select", key: "value", label, options, defaultValue }],
  ...extra,
});

/** 브로셔 장수 — 연속 수치라 스테퍼 */
const pages = (defaultValue: string): FormatDef => ({
  label: "장수",
  fields: [{
    kind: "number", key: "value", label: "장수", min: 1, defaultValue, summaryUnit: "장",
    underMinNotice: "장수는 1 이상이라 1로 맞췄어요",
    large: { from: 50, notice: "장수가 많으면 생성이 오래 걸려요" },
  }],
});

/*
 * 기준(코드 검증 결과, 2026-10-15): 생성 툴이 실제로 소비하는 인자만 둔다. 받아도 무시되는 값은 묻지 않는다.
 *   카드뉴스 카드 수 1~20(기본 5) — slide_count 실소비. 상한 20.
 *   영상 길이 5~15초(기본 15) + 비율 9:16·1:1·16:9 — duration·aspect_ratio 실소비. 비율은 빈 템플릿(video-blank)일 때만 적용. 해상도는 묻지 않는다.
 *   랜딩 섹션 수 1~30(기본 8) — landing_generate 가 --section-count 로 전달.
 *   사진·그림 비율 1:1·16:9·9:16 — 빈 템플릿 모드에서만 실소비(템플릿 모드는 템플릿 JSON이 결정). 4:5는 소비되지 않아 뺐다.
 *   이미지형 발표자료 슬라이드 수 기본 6. PPT·웹 발표는 ppt_generate 에 슬라이드 수 인자가 없고 템플릿이 장수를 고정해 묻지 않는다.
 *   브로셔 장수 기본 6. 브로셔는 9:16 강제라 비율을 묻지 않는다.
 *   없음: PPT·웹 발표 · 상품 상세페이지 · 워드·한글 · 엑셀 · 논문 초안.
 */
/** 이미지형 발표자료 슬라이드 수 — 연속 수치라 스테퍼 */
const slides = (defaultValue: string): FormatDef => ({
  label: "슬라이드 수",
  fields: [{
    kind: "number", key: "value", label: "슬라이드 수", min: 1, defaultValue, summaryUnit: "장",
    underMinNotice: "슬라이드는 1장 이상이라 1로 맞췄어요",
    large: { from: 50, notice: "슬라이드가 많으면 생성이 오래 걸려요" },
  }],
});

const FORMAT_BY_TASK: Record<string, FormatDef> = {
  photo: single(
    "비율",
    [
      { value: "정사각", note: "1:1" },
      { value: "가로", note: "16:9" },
      { value: "세로", note: "9:16" },
    ],
    "정사각",
    { tooltip: "정사각(1:1)은 피드, 가로(16:9)는 블로그·웹 배너, 세로(9:16)는 스토리·릴스 전체 화면에 맞아요. 빈 템플릿으로 시작할 때 적용되고, 템플릿을 고르면 템플릿 비율을 따라요." },
  ),
  // 카드뉴스는 비율을 묻지 않는다 — 템플릿이 가진다. 카드 수는 1~20 스테퍼.
  cardnews: {
    label: "카드 수",
    fields: [{
      kind: "number", key: "value", label: "카드 수", min: 1, max: 20, defaultValue: "5", summaryUnit: "장",
      overMaxNotice: "최대 20장까지 만들 수 있어요",
      underMinNotice: "카드는 1장 이상이라 1로 맞췄어요",
    }],
  },
  // 브로셔 — 장수. 9:16 강제라 비율 필드는 두지 않는다.
  leaflet: pages("6"),
  appintro: {
    label: "섹션 수",
    fields: [{
      kind: "number", key: "value", label: "섹션 수", min: 1, max: 30, defaultValue: "8", summaryUnit: "개",
      overMaxNotice: "최대 30개까지 만들 수 있어요",
      underMinNotice: "섹션은 1개 이상이라 1로 맞췄어요",
    }],
  },
  // 이미지형 발표자료만 슬라이드 수(기본 6). PPT·웹 발표는 템플릿이 장수를 고정해 묻지 않는다.
  imgslide: slides("6"),
  // 비율(드롭다운)과 길이(스테퍼, 5~15초, 기본 15)를 한 라벨("영상 형식") 아래 나란히 — 행이 늘지 않는다.
  shortform: {
    label: "영상 형식",
    fields: [
      { kind: "select", key: "ratio", label: "비율", options: [{ value: "세로", note: "9:16" }, { value: "정사각", note: "1:1" }, { value: "가로", note: "16:9" }], defaultValue: "세로" },
      {
        kind: "number", key: "length", label: "영상 길이", min: 5, max: 15, defaultValue: "15", unit: "초", summaryUnit: "초",
        overMaxNotice: "최대 15초까지 만들 수 있어요",
        underMinNotice: "최소 5초부터 만들 수 있어요",
      },
    ],
    tooltip: "세로는 릴스·쇼츠, 가로는 유튜브에 적합해요. 비율은 빈 템플릿으로 시작할 때 적용돼요.",
  },
};

export function formatForTask(taskId: string): FormatDef | undefined {
  return FORMAT_BY_TASK[taskId];
}

/** 선택지 표시 — "값 (생김새)" */
export function optionText(field: FormatField, value: string): string {
  if (field.kind === "number") return `${value}${field.summaryUnit}`;
  const note = field.options.find((o) => o.value === value)?.note;
  return note ? `${value} (${note})` : value;
}

/** 스테퍼 값 보정 — 빈 값은 기본값, 범위 밖은 경계로. 보정했으면 안내 문구를 함께 돌려준다. */
export function clampNumberField(field: Extract<FormatField, { kind: "number" }>, raw: string): { value: string; notice: string | null } {
  const n = Number.parseInt(raw, 10);
  if (!raw.trim() || Number.isNaN(n)) return { value: field.defaultValue, notice: null };
  if (n < field.min) return { value: String(field.min), notice: field.underMinNotice };
  if (field.max !== undefined && n > field.max) return { value: String(field.max), notice: field.overMaxNotice ?? null };
  return { value: String(n), notice: null };
}

/** 고른 값(없으면 기본값)을 필드 key → 값으로 */
export function resolveFormat(def: FormatDef | undefined, chosen: Record<string, string>): Record<string, string> {
  if (!def) return {};
  return Object.fromEntries(def.fields.map((fd) => [fd.key, chosen[fd.key] ?? fd.defaultValue]));
}

/** 요청문·요약에 쓰는 한 줄 — "세로 (9:16) · 15초" */
export function formatSummary(def: FormatDef, chosen: Record<string, string>): string {
  const values = resolveFormat(def, chosen);
  return def.fields.map((fd) => optionText(fd, values[fd.key])).join(" · ");
}
