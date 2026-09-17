import type { LucideIcon } from "lucide-react";
import {
  Image,
  Images,
  ShoppingBag,
  GalleryHorizontal,
  FileText,
  FileSignature,
  Newspaper,
  GraduationCap,
  IdCard,
  Presentation,
  MonitorPlay,
  SpellCheck,
  Languages,
  Table2,
  Clapperboard,
  Youtube,
  Music2,
  Mic2,
  Smartphone,
  Store,
  CalendarDays,
} from "lucide-react";

import type { WorkspaceCategory } from "@/app/App";

export type TaskStatus = "available" | "soon";

export interface Task {
  id: string;
  label: string;
  desc: string;
  status: TaskStatus;
  icon: LucideIcon;
  /** 템플릿을 고르면 이어질 기존 콘텐츠 작성 화면(WorkspaceScreen)의 카테고리. 준비 중 작업엔 없다. */
  wsCategory?: WorkspaceCategory;
  /** openWorkspace 에 넘길 필터 탭 라벨 — 결과물 확장자를 결정한다 (viewerChrome.ts 의 TAB_FILE_TYPE 참고) */
  tabLabel?: string;
}

export interface TaskGroup {
  id: string;
  name: string;
  tasks: Task[];
}

export const TASK_GROUPS: TaskGroup[] = [
  {
    id: "image",
    name: "이미지",
    tasks: [
      { id: "photo", label: "사진·그림", desc: "사진과 일러스트", status: "available", icon: Image, wsCategory: "image", tabLabel: "전체" },
      { id: "cardnews", label: "카드뉴스", desc: "여러 장의 SNS 소식", status: "available", icon: GalleryHorizontal, wsCategory: "image", tabLabel: "전체" },
      { id: "product", label: "상품 상세페이지", desc: "상품 소개와 판매", status: "available", icon: ShoppingBag, wsCategory: "detail", tabLabel: "전체" },
      { id: "imgslide", label: "이미지 슬라이드", desc: "이미지로 보는 발표", status: "available", icon: Images, wsCategory: "image", tabLabel: "전체" },
    ],
  },
  {
    id: "doc",
    name: "문서",
    tasks: [
      { id: "word", label: "워드 문서", desc: "보고서와 제안서", status: "available", icon: FileText, wsCategory: "docs", tabLabel: "워드" },
      { id: "hangul", label: "한글 문서", desc: "공문과 신청서", status: "available", icon: FileSignature, wsCategory: "docs", tabLabel: "한글" },
      { id: "leaflet", label: "홍보 안내문", desc: "한 장으로 전하는 소개", status: "available", icon: Newspaper, wsCategory: "docs", tabLabel: "전체" },
      { id: "thesis", label: "논문 초안", desc: "논문 구성과 초안", status: "available", icon: GraduationCap, wsCategory: "docs", tabLabel: "논문" },
      { id: "visa", label: "비자·체류 서류", desc: "비자와 체류 신청서", status: "available", icon: IdCard, wsCategory: "docs", tabLabel: "전체" },
    ],
  },
  {
    id: "deck",
    name: "발표자료",
    tasks: [
      { id: "ppt", label: "PPT 발표자료", desc: "파워포인트 발표", status: "available", icon: Presentation, wsCategory: "ppt", tabLabel: "전체" },
      { id: "webppt", label: "웹 발표자료", desc: "웹에서 넘기는 발표", status: "available", icon: MonitorPlay, wsCategory: "ppt", tabLabel: "전체" },
      { id: "typo", label: "PPT 오타 확인", desc: "틀린 글자 찾기", status: "soon", icon: SpellCheck },
      { id: "ppttrans", label: "PPT 번역", desc: "다른 언어로 바꾸기", status: "soon", icon: Languages },
    ],
  },
  {
    id: "data",
    name: "표·데이터",
    tasks: [
      { id: "excel", label: "엑셀 표", desc: "표와 계산 자료", status: "available", icon: Table2, wsCategory: "docs", tabLabel: "엑셀" },
    ],
  },
  {
    id: "video",
    name: "영상",
    tasks: [
      { id: "shortform", label: "숏폼·홍보 영상", desc: "짧은 홍보 영상", status: "available", icon: Clapperboard, wsCategory: "video", tabLabel: "영상" },
      { id: "youtube", label: "유튜브 영상", desc: "가로형 설명 영상", status: "available", icon: Youtube, wsCategory: "video", tabLabel: "유튜브영상" },
    ],
  },
  {
    id: "audio",
    name: "오디오",
    tasks: [
      { id: "bgm", label: "배경음악", desc: "분위기에 맞는 음악", status: "soon", icon: Music2 },
      { id: "podcast", label: "팟캐스트", desc: "목소리로 전하기", status: "soon", icon: Mic2 },
    ],
  },
  {
    id: "web",
    name: "웹페이지",
    tasks: [
      { id: "appintro", label: "앱 소개 페이지", desc: "앱 기능과 장점", status: "soon", icon: Smartphone },
      { id: "bizpage", label: "업체 홍보 페이지", desc: "업체와 서비스 소개", status: "soon", icon: Store },
      { id: "eventpage", label: "행사 안내 페이지", desc: "일정과 참여 방법", status: "soon", icon: CalendarDays },
    ],
  },
];

export const ALL_TASKS: Task[] = TASK_GROUPS.flatMap((g) => g.tasks);

export function getTaskById(id: string): Task | undefined {
  return ALL_TASKS.find((t) => t.id === id);
}

export function getTaskGroupOf(taskId: string): TaskGroup | undefined {
  return TASK_GROUPS.find((g) => g.tasks.some((t) => t.id === taskId));
}

/** 작업별 템플릿 목록 화면(TaskTemplateScreen)과 홈 검색에서 함께 쓰는 목업 템플릿. */
export interface TaskTemplate {
  taskId: string;
  title: string;
  /** 검색 대상(용도) — 카드에는 표시하지 않는다 */
  use: string;
  /** 카드 하단 1행 — "분류 · 규격" */
  meta: string;
  /** 출력 형식 */
  format: string;
}

const T = (taskId: string, title: string, use: string, meta: string, format: string): TaskTemplate =>
  ({ taskId, title, use, meta, format });

export const TASK_TEMPLATES: TaskTemplate[] = [
  T("photo", "뷰티 제품 광고 이미지", "제품을 SNS 광고 이미지로 알릴 때", "이미지 · 정사각형", "PNG"),
  T("photo", "버터떡 유튜브 썸네일", "영상 썸네일을 눈에 띄게 만들 때", "이미지 · 정사각형", "PNG"),
  T("photo", "SNS 광고 배너", "가로형 광고 배너가 필요할 때", "이미지 · 가로형", "JPG"),
  T("cardnews", "단색 카드형 카드뉴스", "간결한 소식을 여러 장으로 전할 때", "카드뉴스 · 정사각형", "PNG"),
  T("cardnews", "포토 Q&A 카드뉴스", "질문과 답을 사진과 함께 전할 때", "카드뉴스 · 정사각형", "PNG"),
  T("product", "스마트스토어 상세페이지", "상품 특징을 길게 설명할 때", "상세페이지 · 세로형", "JPG"),
  T("product", "쿠팡 상품 상세페이지", "쇼핑몰 상세페이지를 빠르게 만들 때", "상세페이지 · 세로형", "JPG"),
  T("imgslide", "제품 소개 이미지 슬라이드", "이미지로 넘겨 보여줄 때", "슬라이드 · 정사각형", "PNG"),
  T("word", "월간 업무 보고서", "한 달 성과를 정리해 보고할 때", "문서 · 세로형", "DOCX"),
  T("word", "입찰 제안서", "공공 입찰에 제출할 때", "문서 · 세로형", "DOCX"),
  T("hangul", "협조 요청 공문", "타 기관에 협조를 구할 때", "문서 · 세로형", "HWPX"),
  T("hangul", "강제퇴거명령에 대한 이의신청서", "행정 처분에 이의를 신청할 때", "문서 · 세로형", "HWPX"),
  T("leaflet", "행사 홍보 안내문", "행사를 한 장으로 알릴 때", "안내문 · 정사각형", "PDF"),
  T("thesis", "논문 초록 초안", "논문 구성과 초록을 잡을 때", "문서 · 세로형", "PDF"),
  T("visa", "결혼이민자 가족 초청장", "가족을 국내로 초청할 때", "서류 · 세로형", "DOCX"),
  T("ppt", "사업계획 발표자료", "투자자에게 사업을 설명할 때", "발표자료 · 와이드", "PPTX"),
  T("ppt", "분기 실적 보고", "분기 성과를 팀에 보고할 때", "발표자료 · 와이드", "PPTX"),
  T("webppt", "제품 소개 웹 발표자료", "링크 하나로 발표를 공유할 때", "발표자료 · 와이드", "PPTX"),
  T("excel", "거래처 견적 표", "금액과 항목을 정리해 보낼 때", "표 · 가로형", "XLSX"),
  T("shortform", "숏폼 홍보 영상", "짧게 눈길을 끄는 홍보가 필요할 때", "영상 · 세로형", "MP4"),
  T("youtube", "유튜브 설명 영상", "가로형으로 차분히 설명할 때", "영상 · 가로형", "MP4"),
];

export function templatesForTask(taskId: string): TaskTemplate[] {
  return TASK_TEMPLATES.filter((t) => t.taskId === taskId);
}

/** 홈 검색 — 서식 이름 · 용도 · 서비스(분류) 이름 · 출력 형식을 대상으로 한다. */
export function searchTemplates(query: string): TaskTemplate[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return TASK_TEMPLATES.filter((t) => {
    const task = getTaskById(t.taskId);
    const group = getTaskGroupOf(t.taskId);
    const haystack = [t.title, t.use, t.meta, t.format, task?.label, group?.name].join(" ").toLowerCase();
    return haystack.includes(q);
  });
}

/** 추천 서식 롤링 배너 — 서로 다른 서식 10개, 표지 4:3. */
export const RECOMMENDED_TEMPLATES: TaskTemplate[] = [
  TASK_TEMPLATES.find((t) => t.title === "협조 요청 공문")!,
  TASK_TEMPLATES.find((t) => t.title === "월간 업무 보고서")!,
  TASK_TEMPLATES.find((t) => t.title === "스마트스토어 상세페이지")!,
  TASK_TEMPLATES.find((t) => t.title === "사업계획 발표자료")!,
  TASK_TEMPLATES.find((t) => t.title === "입찰 제안서")!,
  TASK_TEMPLATES.find((t) => t.title === "행사 홍보 안내문")!,
  TASK_TEMPLATES.find((t) => t.title === "거래처 견적 표")!,
  TASK_TEMPLATES.find((t) => t.title === "제품 소개 이미지 슬라이드")!,
  TASK_TEMPLATES.find((t) => t.title === "단색 카드형 카드뉴스")!,
  TASK_TEMPLATES.find((t) => t.title === "숏폼 홍보 영상")!,
];
