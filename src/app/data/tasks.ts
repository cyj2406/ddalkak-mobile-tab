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

import artPhoto from "@/assets/home/art/photo.png";
import artCardnews from "@/assets/home/art/cardnews.png";
import artProduct from "@/assets/home/art/product.png";
import artImgslide from "@/assets/home/art/imgslide.png";
import artWord from "@/assets/home/art/word.png";
import artHangul from "@/assets/home/art/hangul.png";
import artLeaflet from "@/assets/home/art/leaflet.png";
import artThesis from "@/assets/home/art/thesis.png";
import artVisa from "@/assets/home/art/visa.png";
import artPpt from "@/assets/home/art/ppt.png";
import artWebppt from "@/assets/home/art/webppt.png";
import artTypo from "@/assets/home/art/typo.png";
import artPpttrans from "@/assets/home/art/ppttrans.png";
import artExcel from "@/assets/home/art/excel.png";
import artShortform from "@/assets/home/art/shortform.png";
import artYoutube from "@/assets/home/art/youtube.png";
import artBgm from "@/assets/home/art/bgm.png";
import artPodcast from "@/assets/home/art/podcast.png";
import artAppintro from "@/assets/home/art/appintro.png";
import artBizpage from "@/assets/home/art/bizpage.png";
import artEventpage from "@/assets/home/art/eventpage.png";

import car1 from "@/assets/home/car/c1.png";
import car2 from "@/assets/home/car/c2.png";
import car3 from "@/assets/home/car/c3.png";
import car4 from "@/assets/home/car/c4.png";
import car5 from "@/assets/home/car/c5.png";
import car6 from "@/assets/home/car/c6.png";
import car7 from "@/assets/home/car/c7.png";
import car8 from "@/assets/home/car/c8.png";
import car9 from "@/assets/home/car/c9.png";
import car10 from "@/assets/home/car/c10.png";
import car11 from "@/assets/home/car/c11.png";
import car12 from "@/assets/home/car/c12.png";
import car13 from "@/assets/home/car/c13.png";
import car14 from "@/assets/home/car/c14.png";
import car15 from "@/assets/home/car/c15.png";
import car16 from "@/assets/home/car/c16.png";

// 4개는 "바로 시작하기 좋은 템플릿" 캐러셀(car13~16, 위)이 이미 같은 원본 이미지를
// 쓰고 있어 새 파일로 중복 저장하지 않고 그 import를 그대로 재사용한다(번들에도
// 같은 파일이 중복 포함되지 않는다) — 아래 TASK_TEMPLATES에서 car13~16을 cover로 쓴다.
import templatePptProposal from "@/assets/home/templates/ppt-proposal.jpeg";

export type TaskStatus = "available" | "soon";

export interface Task {
  id: string;
  label: string;
  desc: string;
  status: TaskStatus;
  icon: LucideIcon;
  /** 홈 "전체 기능"·"대표 카테고리"·세부 기능 카드에 함께 쓰는 실제 일러스트(21종, 원본 참고 디자인에서 추출). */
  illustration: string;
  /** 카드마다 일러스트 확대·축소 보정값(1이 아니면 살짝 다른 비율로 보인다) — 원본 디자인 값 그대로. */
  illustrationScale?: number;
  /**
   * "전체 기능" 카드(grid variant) 전용 일러스트 배치값 — 2026-09-18에 "카드 밖으로
   * 자연스럽게 걸쳐 잘리는" 이전 방식(bleed)을 버리고, 모든 카드가 같은 규칙으로 보이도록
   * 다시 계산했다. 각 원본 PNG(300×300, 투명 배경)의 실제 그림 영역(투명 여백 제외)을
   * Python/PIL로 측정해(알파 채널 bbox), 세로형은 높이·가로형은 너비가 공통 기준
   * (CONTENT_CAP=92px)에 맞춰지도록 배율을 구하고, 그 실제 그림의 오른쪽·아래쪽 끝이
   * 카드 우하단에서 항상 같은 여백(MARGIN=16px)에 오도록 w(정사각 박스 한 변)·right·
   * bottom을 역산했다 — illustrationScale이 이미 걸려 있는 항목(비자·AI 발표자료 등)은
   * 그 배율까지 반영해 계산했다(값 자체는 strip·compact 변형도 같이 쓰므로 건드리지
   * 않았다). 그 결과 일부 항목은 right/bottom이 여전히 음수지만(예: 숏폼 -17.6), 이는
   * 그림 주변의 투명 여백만 카드 경계를 살짝 넘어가는 것이라 실제로 보이는 그림은
   * 잘리지 않는다 — Word/한글/Excel의 배지 같은 핵심 식별 요소가 잘리던 문제가 이
   * 방식에서는 애초에 생기지 않는다(더 이상 "얼마나 잘리게 둘지"를 조정하는 값이
   * 아니다). 이미지 자체가 바뀌면 같은 스크립트로 다시 계산해야 한다 — 임의로 손으로
   * 조정하지 않는다.
   */
  illustrationArt?: { w: number; right: number; bottom: number };
  /** 템플릿을 고르면 이어질 기존 콘텐츠 작성 화면(WorkspaceScreen)의 카테고리. 준비 중 작업엔 없다. */
  wsCategory?: WorkspaceCategory;
  /** openWorkspace 에 넘길 필터 탭 라벨 — 결과물 확장자를 결정한다 (viewerChrome.ts 의 TAB_FILE_TYPE 참고) */
  tabLabel?: string;
  /** true면 "전체 기능"·"작업 선택" 등 목록 노출에서만 숨긴다 — 데이터·기존 기능 연결(템플릿,
   *  추천 캐러셀 등)은 그대로 유지한다. 목록에서 이 작업을 완전히 지우면 taskId를 참조하는
   *  다른 데이터(TASK_TEMPLATES/RECOMMENDED_TEMPLATES 등)가 끊어지므로 삭제 대신 이 플래그로 가린다. */
  hiddenFromListing?: boolean;
}

export interface TaskGroup {
  id: string;
  name: string;
  /** 홈 "대표 카테고리" 바로가기·전체 기능 그룹 헤더가 함께 쓰는 대표 아이콘 —
   *  카테고리 데이터를 여기 한 곳에서만 정의해 다른 곳에서 중복 작성하지 않는다. */
  icon: LucideIcon;
  tasks: Task[];
}

export const TASK_GROUPS: TaskGroup[] = [
  {
    id: "image",
    name: "이미지",
    icon: Image,
    tasks: [
      { id: "photo", label: "사진·그림", desc: "사진과 일러스트", status: "available", icon: Image, illustration: artPhoto, illustrationArt: { w: 123, right: 2.9, bottom: -3.2 }, wsCategory: "image", tabLabel: "전체" },
      { id: "cardnews", label: "카드뉴스", desc: "여러 장의 SNS 소식", status: "available", icon: GalleryHorizontal, illustration: artCardnews, illustrationArt: { w: 131, right: -2.4, bottom: -5.5 }, wsCategory: "image", tabLabel: "전체" },
      { id: "product", label: "상품 상세페이지", desc: "상품 소개와 판매", status: "available", icon: ShoppingBag, illustration: artProduct, illustrationArt: { w: 120, right: -6.4, bottom: 4.0 }, wsCategory: "detail", tabLabel: "전체" },
      { id: "imgslide", label: "이미지 슬라이드", desc: "이미지로 보는 발표", status: "available", icon: Images, illustration: artImgslide, wsCategory: "image", tabLabel: "전체", hiddenFromListing: true },
    ],
  },
  {
    id: "doc",
    name: "문서",
    icon: FileText,
    tasks: [
      { id: "word", label: "워드 문서", desc: "보고서와 제안서", status: "available", icon: FileText, illustration: artWord, illustrationArt: { w: 132, right: -6.0, bottom: -2.5 }, wsCategory: "docs", tabLabel: "워드" },
      { id: "hangul", label: "한글 문서", desc: "공문과 신청서", status: "available", icon: FileSignature, illustration: artHangul, illustrationArt: { w: 122, right: -3.9, bottom: 2.6 }, wsCategory: "docs", tabLabel: "한글" },
      { id: "leaflet", label: "홍보 안내문", desc: "한 장으로 전하는 소개", status: "available", icon: Newspaper, illustration: artLeaflet, wsCategory: "docs", tabLabel: "전체", hiddenFromListing: true },
      { id: "thesis", label: "논문 초안", desc: "논문 구성과 초안", status: "available", icon: GraduationCap, illustration: artThesis, illustrationArt: { w: 127, right: -3.9, bottom: -0.5 }, wsCategory: "docs", tabLabel: "논문" },
      { id: "visa", label: "비자·체류 서류", desc: "비자와 체류 신청서", status: "available", icon: IdCard, illustration: artVisa, illustrationScale: 1.04, illustrationArt: { w: 104, right: 12.7, bottom: 2.9 }, wsCategory: "docs", tabLabel: "전체" },
    ],
  },
  {
    id: "deck",
    name: "발표자료",
    icon: Presentation,
    tasks: [
      { id: "ppt", label: "AI 발표자료", desc: "AI로 만드는 발표자료", status: "available", icon: Presentation, illustration: artPpt, illustrationArt: { w: 124, right: 2.6, bottom: -10.9 }, illustrationScale: 1.06, wsCategory: "ppt", tabLabel: "전체" },
      { id: "webppt", label: "웹 발표자료", desc: "웹에서 넘기는 발표", status: "available", icon: MonitorPlay, illustration: artWebppt, illustrationScale: 1.04, illustrationArt: { w: 123, right: 1.4, bottom: -2.1 }, wsCategory: "ppt", tabLabel: "전체" },
      { id: "typo", label: "PPT 오타 확인", desc: "틀린 글자 찾기", status: "soon", icon: SpellCheck, illustration: artTypo, illustrationArt: { w: 138, right: -3.8, bottom: -12.5 } },
      { id: "ppttrans", label: "PPT 번역", desc: "다른 언어로 바꾸기", status: "soon", icon: Languages, illustration: artPpttrans, illustrationArt: { w: 118, right: 4.6, bottom: 0.3 } },
    ],
  },
  {
    id: "data",
    name: "표·데이터",
    icon: Table2,
    tasks: [
      { id: "excel", label: "엑셀", desc: "표와 계산 자료", status: "available", icon: Table2, illustration: artExcel, illustrationArt: { w: 127, right: -2.1, bottom: -0.9 }, wsCategory: "docs", tabLabel: "엑셀" },
    ],
  },
  {
    id: "video",
    name: "영상",
    icon: Clapperboard,
    tasks: [
      { id: "shortform", label: "숏폼·홍보 영상", desc: "짧은 홍보 영상", status: "available", icon: Clapperboard, illustration: artShortform, illustrationScale: 0.94, illustrationArt: { w: 130, right: -17.6, bottom: -0.9 }, wsCategory: "video", tabLabel: "영상" },
      { id: "youtube", label: "유튜브 영상", desc: "가로형 설명 영상", status: "available", icon: Youtube, illustration: artYoutube, illustrationScale: 1.08, illustrationArt: { w: 105, right: 10.0, bottom: -0.5 }, wsCategory: "video", tabLabel: "유튜브영상" },
    ],
  },
  {
    id: "web",
    name: "웹페이지",
    icon: Smartphone,
    tasks: [
      { id: "appintro", label: "앱 소개 페이지", desc: "앱 기능과 장점", status: "soon", icon: Smartphone, illustration: artAppintro, illustrationScale: 1.04, illustrationArt: { w: 113, right: 8.8, bottom: -1.8 } },
      { id: "bizpage", label: "업체 홍보 페이지", desc: "업체와 서비스 소개", status: "soon", icon: Store, illustration: artBizpage, hiddenFromListing: true },
      { id: "eventpage", label: "행사 안내 페이지", desc: "일정과 참여 방법", status: "soon", icon: CalendarDays, illustration: artEventpage, hiddenFromListing: true },
    ],
  },
  {
    id: "audio",
    name: "오디오",
    icon: Music2,
    tasks: [
      { id: "bgm", label: "배경음악", desc: "분위기에 맞는 음악", status: "soon", icon: Music2, illustration: artBgm, illustrationArt: { w: 124, right: 1.5, bottom: 2.7 } },
      { id: "podcast", label: "팟캐스트", desc: "목소리로 전하기", status: "soon", icon: Mic2, illustration: artPodcast, illustrationArt: { w: 135, right: -10.9, bottom: -4.6 } },
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

/** 그룹의 작업 중 목록에 노출할 것만 — hiddenFromListing인 작업은 "전체 기능"·"작업 선택"
 *  등 카드 목록에서만 걸러내고, getTaskById/템플릿 등 다른 기능 연결은 건드리지 않는다. */
export function visibleTasksOf(group: TaskGroup): Task[] {
  return group.tasks.filter((t) => !t.hiddenFromListing);
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
  /** 실제 표지 미리보기 이미지 — 지금은 전 템플릿이 undefined다(실제 표지 자산이
   *  프로젝트 어디에도 없다, 2026-09-17 확인). 값이 생기면 이 필드만 채우면
   *  "요청 작성 도우미"의 미리보기가 자동으로 실제 이미지를 쓰게 된다 — "미리보기
   *  준비 중"을 화면에 직접 박아두지 않는다. */
  cover?: string;
  /** cover가 실제 결과물이 아니라 참고용 예시 표지일 때만 true — 이때만 "표지는
   *  예시 이미지예요" 안내를 보여준다. cover가 없으면(현재 전부) 의미 없다. */
  coverIsExample?: boolean;
  /** cover의 실제 가로:세로 비율("9:16"/"1:1"/"3:2"/"16:9" 등) — meta의 "정사각형/
   *  세로형/가로형" 문구와 항상 같은 형태를 가리켜야 한다(2026-09-18, 예시 표지
   *  5개를 붙이면서 추가). cover가 없으면 의미 없다. */
  aspectRatio?: string;
}

const T = (
  taskId: string, title: string, use: string, meta: string, format: string,
  extra?: { cover?: string; coverIsExample?: boolean; aspectRatio?: string },
): TaskTemplate => ({ taskId, title, use, meta, format, ...extra });

export const TASK_TEMPLATES: TaskTemplate[] = [
  T("photo", "뷰티 제품 광고 이미지", "제품을 SNS 광고 이미지로 알릴 때", "이미지 · 정사각형", "PNG"),
  T("photo", "버터떡 유튜브 썸네일", "영상 썸네일을 눈에 띄게 만들 때", "이미지 · 정사각형", "PNG"),
  T("photo", "SNS 광고 배너", "가로형 광고 배너가 필요할 때", "이미지 · 가로형", "JPG", { cover: car15, coverIsExample: true, aspectRatio: "3:2" }),
  T("cardnews", "단색 카드형 카드뉴스", "간결한 소식을 여러 장으로 전할 때", "카드뉴스 · 정사각형", "PNG", { cover: car14, coverIsExample: true, aspectRatio: "1:1" }),
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
  T("ppt", "사업계획 발표자료", "투자자에게 사업을 설명할 때", "발표자료 · 와이드", "PPTX", { cover: templatePptProposal, coverIsExample: true, aspectRatio: "16:9" }),
  T("ppt", "분기 실적 보고", "분기 성과를 팀에 보고할 때", "발표자료 · 와이드", "PPTX"),
  T("webppt", "제품 소개 웹 발표자료", "링크 하나로 발표를 공유할 때", "발표자료 · 와이드", "PPTX"),
  T("excel", "거래처 견적 표", "금액과 항목을 정리해 보낼 때", "표 · 가로형", "XLSX"),
  T("shortform", "숏폼 홍보 영상", "짧게 눈길을 끄는 홍보가 필요할 때", "영상 · 세로형", "MP4", { cover: car13, coverIsExample: true, aspectRatio: "9:16" }),
  T("youtube", "유튜브 설명 영상", "가로형으로 차분히 설명할 때", "영상 · 가로형", "MP4", { cover: car16, coverIsExample: true, aspectRatio: "3:2" }),
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

/**
 * 홈 "바로 시작하기 좋은 템플릿" 캐러셀 — 참고 디자인의 실제 표지 이미지 9장(원본 비율 그대로).
 *
 * 참고 디자인엔 이 9장에 실제 작업(taskId) 연결 정보가 없어(표지 전용 데이터), 이름·분류가
 * 가장 가까운 기존 작업으로 최선 매칭했다 — 완전히 동일한 서식 데이터는 아니므로 클릭하면
 * 해당 작업의 시작 화면(서식 목록)으로 연결된다.
 */
export interface CarouselCover {
  taskId: string;
  title: string;
  cat: string;
  format: string;
  cover: string;
  /** 원본 표지 원본 비율(가로/세로) — 카드 폭을 여기서 계산해 자르지 않는다. */
  ratio: number;
}

export const CAROUSEL_COVERS: CarouselCover[] = [
  { taskId: "photo", title: "기획전 홍보 이미지", cat: "이미지", format: "JPG", cover: car1, ratio: 700 / 700 },
  { taskId: "cardnews", title: "트렌드 소개 카드뉴스", cat: "이미지", format: "PNG", cover: car2, ratio: 560 / 700 },
  { taskId: "ppt", title: "사업 제안 발표자료", cat: "발표자료", format: "PPTX", cover: car3, ratio: 700 / 394 },
  { taskId: "product", title: "상품 상세페이지", cat: "이미지", format: "JPG", cover: car4, ratio: 461 / 700 },
  { taskId: "word", title: "회사소개서", cat: "문서", format: "PDF", cover: car5, ratio: 470 / 674 },
  { taskId: "shortform", title: "숏폼 홍보 영상", cat: "영상", format: "MP4", cover: car6, ratio: 360 / 640 },
  { taskId: "cardnews", title: "홈트 가이드 카드뉴스", cat: "이미지", format: "PNG", cover: car7, ratio: 560 / 700 },
  { taskId: "ppt", title: "IR 발표자료", cat: "발표자료", format: "PPTX", cover: car8, ratio: 700 / 394 },
  { taskId: "word", title: "서비스 소개서", cat: "문서", format: "PDF", cover: car9, ratio: 496 / 700 },
  { taskId: "ppt", title: "AI 솔루션 제안서", cat: "발표자료", format: "PPTX", cover: car10, ratio: 640 / 360 },
  { taskId: "word", title: "주간 업무 보고서", cat: "문서", format: "DOCX", cover: car11, ratio: 480 / 672 },
  { taskId: "youtube", title: "인기 먹방 리뷰 영상", cat: "영상", format: "MP4", cover: car12, ratio: 1671 / 940 },
  { taskId: "shortform", title: "집중 공부 브이로그", cat: "영상", format: "MP4", cover: car13, ratio: 360 / 640 },
  { taskId: "cardnews", title: "봄맞이 간식 추천 카드뉴스", cat: "이미지", format: "PNG", cover: car14, ratio: 1080 / 1080 },
  { taskId: "leaflet", title: "클리닉 이벤트 홍보물", cat: "문서", format: "PDF", cover: car15, ratio: 1536 / 1024 },
  { taskId: "youtube", title: "K-POP 인기곡 모음 영상", cat: "영상", format: "MP4", cover: car16, ratio: 1335 / 860 },
];
