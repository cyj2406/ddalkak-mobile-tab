import React, { useState, useRef, useEffect, useCallback, useLayoutEffect, useMemo, type ReactNode } from "react";
import { HelpCircle, Settings as SettingsIcon, Users, Mail, LogOut, Palette, Bell, Brain, Coins, Monitor, Sun, Moon, RefreshCw, FileText, FileVideo, FileSpreadsheet, FileType2, Compass, Image as ImageIcon, X as XIcon, Play, Volume2, Maximize2, Minimize2, BookOpen, Search, Plus, Upload, Check } from "lucide-react";

// ── 공통 에셋 ──────────────────────────────────────────────────────────────────
import svgPaths from "@/imports/새대화딸깍/svg-yz49hawimu";
import svgCard from "@/imports/Container/svg-n3rzud15nf";
// Frame svg paths are identical to Container's — svgCard covers all keys
import imgImageNet from "@/imports/새대화딸깍/70598a9173139973c519fbc9c881094e41ef9297.png";
import imgUserAvatar from "@/imports/새대화딸깍/ec4bf4c83826b512a10ccb46952ef28cdb24b8d8.png";

import TabletEditorShell from "@/app/components/viewer/TabletEditorShell";
import TabletVideoResultViewer from "@/app/components/viewer/TabletVideoResultViewer";
import TabletDocEditorViewer from "@/app/components/viewer/TabletDocEditorViewer";
import TabletMiniEditor from "@/app/components/viewer/TabletMiniEditor";
import TabletResultViewer from "@/app/components/viewer/TabletResultViewer";
import {
  CHAT_COL_BASIS, EDITOR_MIN_W, SPLIT_ANIM_MS, SPLIT_EASE, SplitViewContext,
} from "@/app/components/viewer/splitView";
import {
  FILE_TYPE_META, fileNameFor, resolveFileType,
  type ViewerFileType,
} from "@/app/components/viewer/viewerChrome";
import TutorialTour, { type TutorialStepConfig } from "@/app/components/common/TutorialTour";
import { MobileEditorNotice } from "@/app/components/viewer/MobileEditorNotice";
import { ScrollableChips } from "@/app/components/common/ScrollableChips";
import ClampedText from "@/app/components/common/ClampedText";
import CreditBadge from "@/app/components/common/CreditBadge";
import { COMPOSER_PLACEHOLDER } from "@/app/copy";
import FormFillDesktop from "@/app/components/formfill/FormFillDesktop";
// [formfill 임시] ?formfill=1 확인용. 컴포넌트 단품 확인 화면이라 3단 레이아웃과 별개로 남겨둔다.
import FormFillPlayground from "@/app/components/formfill/__dev__/FormFillPlayground";


// ─── 타입 ──────────────────────────────────────────────────────────────────────
type Screen = "home" | "image-ai" | "landing-ai" | "forms-ai" | "forms-fill" | "docs-ai" | "audio-ai" | "ppt-ai" | "video-ai" | "favorites" | "mywork" | "credit-history" | "notifications-all";
type WorkspaceCategory = "docs" | "ppt" | "video" | "landing" | "image" | "detail";
const WS_LABEL: Record<WorkspaceCategory, string> = { docs: "문서", ppt: "PPT", video: "영상", landing: "랜딩페이지", image: "이미지", detail: "상세페이지" };
const WS_COLOR: Record<WorkspaceCategory, string> = { docs: "#3B82F6", ppt: "#8B5CF6", video: "#EF4444", landing: "#22C55E", image: "#F59E0B", detail: "#EC4899" };

// ─── 아이콘 ────────────────────────────────────────────────────────────────────
const P = (props: React.SVGProps<SVGPathElement>) => <path strokeLinecap="round" strokeLinejoin="round" {...props} />;

function IconMenu() {
  return <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><P d="M3 3.75H15" stroke="#0A0A0A" strokeWidth="1.5" /><P d="M3 9H15" stroke="#0A0A0A" strokeWidth="1.5" /><P d="M3 14.25H15" stroke="#0A0A0A" strokeWidth="1.5" /></svg>;
}
function IconClose() {
  return <svg width="18" height="18" fill="none" viewBox="0 0 18 18"><P d="M4 4L14 14" stroke="#0A0A0A" strokeWidth="1.5" /><P d="M14 4L4 14" stroke="#0A0A0A" strokeWidth="1.5" /></svg>;
}
function IconChevronLeft() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d="M12.5 15L7.5 10L12.5 5" stroke="#0A0A0A" strokeWidth="1.5" /></svg>;
}
function IconBell() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p1c3efea0} stroke="#737373" strokeWidth="1.5" /><P d={svgPaths.p25877f40} stroke="#737373" strokeWidth="1.5" /></svg>;
}
// 사이드바 메뉴 아이콘은 상태(비활성/호버/활성)에 따라 색이 바뀌므로 currentColor 를 쓴다.
// 다른 곳에서 쓸 때는 감싸는 요소에 color 를 지정하면 된다.
function IconHome() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p275d2400} stroke="currentColor" strokeWidth="1.66667" /><P d={svgPaths.p1db6d780} stroke="currentColor" strokeWidth="1.66667" /></svg>;
}
function IconHomeBlue() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p275d2400} stroke="#4F7BFF" strokeWidth="1.66667" /><P d={svgPaths.p1db6d780} stroke="#4F7BFF" strokeWidth="1.66667" /></svg>;
}
function IconWork() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p178dcc00} stroke="currentColor" strokeWidth="1.66667" /></svg>;
}
function IconWorkBlue() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p178dcc00} stroke="#4F7BFF" strokeWidth="1.66667" /></svg>;
}
function IconStar() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.pa6d0980} stroke="currentColor" strokeWidth="1.66667" /></svg>;
}
function IconStarBlue() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.pa6d0980} stroke="#4F7BFF" strokeWidth="1.66667" /></svg>;
}
function IconFileDoc() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p232b1d80} stroke="#90A1B9" strokeWidth="1.66667" /><P d={svgPaths.p3abdf300} stroke="#90A1B9" strokeWidth="1.66667" /><P d="M8.33333 7.5H6.66667" stroke="#90A1B9" strokeWidth="1.66667" /><P d="M13.3333 10.8333H6.66667" stroke="#90A1B9" strokeWidth="1.66667" /><P d="M13.3333 14.1667H6.66667" stroke="#90A1B9" strokeWidth="1.66667" /></svg>;
}
function IconFileDocBlue() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p232b1d80} stroke="#4F7BFF" strokeWidth="1.66667" /><P d={svgPaths.p3abdf300} stroke="#4F7BFF" strokeWidth="1.66667" /><P d="M8.33333 7.5H6.66667" stroke="#4F7BFF" strokeWidth="1.66667" /><P d="M13.3333 10.8333H6.66667" stroke="#4F7BFF" strokeWidth="1.66667" /><P d="M13.3333 14.1667H6.66667" stroke="#4F7BFF" strokeWidth="1.66667" /></svg>;
}
function IconSettings() {
  return <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><P d={svgPaths.p36e45a00} stroke="#737373" strokeWidth="1.33333" /><P d={svgPaths.p150f5b00} stroke="#737373" strokeWidth="1.33333" /><P d={svgPaths.p2d6e5280} stroke="#737373" strokeWidth="1.33333" /></svg>;
}
function IconAttach() {
  return <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p3cb14e80} stroke="#62748E" strokeWidth="1.66667" /></svg>;
}
function IconSparkle() {
  return <svg width="15" height="15" fill="none" viewBox="0 0 16 16"><g clipPath="url(#sp1)"><P d={svgPaths.p15ab3e60} stroke="#4F7BFF" strokeWidth="1.33333" /><P d="M13.3333 1.33333V4" stroke="#4F7BFF" strokeWidth="1.33333" /><P d="M14.6667 2.66667H12" stroke="#4F7BFF" strokeWidth="1.33333" /><P d={svgPaths.p22966600} stroke="#4F7BFF" strokeWidth="1.33333" /></g><defs><clipPath id="sp1"><rect fill="white" width="16" height="16" /></clipPath></defs></svg>;
}
function IconAutoPrompt() {
  return <svg width="13" height="13" fill="none" viewBox="0 0 14 14"><g clipPath="url(#ap1)"><P d={svgPaths.p1e61df00} stroke="#62748E" strokeWidth="1.16667" /><P d={svgPaths.p883e500} stroke="#62748E" strokeWidth="1.16667" /><P d="M2.91667 3.5V5.83333" stroke="#62748E" strokeWidth="1.16667" /><P d="M11.0833 8.16667V10.5" stroke="#62748E" strokeWidth="1.16667" /><P d="M5.83333 1.16667V2.33333" stroke="#62748E" strokeWidth="1.16667" /><P d="M4.08333 4.66667H1.75" stroke="#62748E" strokeWidth="1.16667" /><P d="M12.25 9.33333H9.91667" stroke="#62748E" strokeWidth="1.16667" /><P d="M6.41667 1.75H5.25" stroke="#62748E" strokeWidth="1.16667" /></g><defs><clipPath id="ap1"><rect fill="white" width="14" height="14" /></clipPath></defs></svg>;
}
function IconDocRef() {
  return <svg width="13" height="13" fill="none" viewBox="0 0 14 14"><P d={svgPaths.p12d5c871} stroke="#62748E" strokeWidth="1.16667" /><P d={svgPaths.p12ed6cc0} stroke="#62748E" strokeWidth="1.16667" /><P d="M5.83333 5.25H4.66667" stroke="#62748E" strokeWidth="1.16667" /><P d="M9.33333 7.58333H4.66667" stroke="#62748E" strokeWidth="1.16667" /><P d="M9.33333 9.91667H4.66667" stroke="#62748E" strokeWidth="1.16667" /></svg>;
}
function IconSend() {
  return <svg width="15" height="15" fill="none" viewBox="0 0 16 16"><P d={svgPaths.p82fb540} stroke="white" strokeWidth="1.33333" /><P d="M8 12.6667V3.33333" stroke="white" strokeWidth="1.33333" /></svg>;
}
function IconSearch() {
  return <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><P d="M14 14L11.1067 11.1067" stroke="#737373" strokeWidth="1.33333" /><circle cx="6.5" cy="6.5" r="4.5" stroke="#737373" strokeWidth="1.33333" /></svg>;
}
/** 필터 버튼 아이콘 — 깔때기(funnel). 색은 열림 상태에 따라 호출부가 넘긴다. */
function IconFilter({ color = "#334155" }: { color?: string }) {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
      <P d="M2 3h12l-4.6 5.4V13L6.6 11.5V8.4L2 3z" stroke={color} strokeWidth="1.33333" strokeLinejoin="round" />
    </svg>
  );
}
function IconApply() {
  return <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><P d="M2.5 7L5.5 10L11.5 4" stroke="white" strokeWidth="1.5" /></svg>;
}

// ─── 데이터 ───────────────────────────────────────────────────────────────────
const recentTemplates = [
  "거주숙소제공사실확인서(영문병기)",
  "거주숙소제공사실확인서(중문병기)",
  "강제퇴거명령에대한이의신청서",
  "거소신고(신청)서",
];
const recentChats = [
  "고양이 등장 장면", "여름철 학교 안전 PPT 제작", "주택임대차 표준계약서 작성 안내",
  "템플릿 다운로드 및 작성 방법", "출근하기 싫은 운동화 영상 제작", "건강확인서 작성 요망",
  "템플릿 기반 자기소개서 작성 요청", "회사 소개서 작성 요청", "Flowly 랜딩페이지 제작",
  "딸깍넷 카드뉴스 프롬프트 제작", "이사 전 체크리스트 카드뉴스",
];

const imageAICards = [
  { title: "뷰티 제품 광고" },
  { title: "마케팅 카드 (대학생용)" },
  { title: "테크 제품 소개" },
  { title: "마케팅 카드 (직장인용)" },
  { title: "SNS 광고 배너" },
  { title: "할인 이벤트" },
  { title: "단색 카드형 카드뉴스" },
  { title: "포토 Q&A 카드뉴스" },
];

const landingAICards = [
  { title: "스타트업 IR 피치덱 (다크 레드)" },
  { title: "뷰티 제품 광고" },
  { title: "성형외과 광고 (가로)" },
  { title: "예비창업패키지 사업계획서" },
  { title: "럭셔리 다크 블루 랜딩페이지" },
  { title: "커뮤니티 게시글 스타일" },
  { title: "네온 K-뷰티 포스터" },
  { title: "크리에이티브 포트폴리오" },
];

const favoritesCards = [
  { title: "뷰티 제품 광고", isVideo: false },
  { title: "스타트업 IR 피치덱", isVideo: false },
  { title: "전체 화면 오버레이", isVideo: false },
  { title: "예비창업패키지 사업계획서", isVideo: false },
  { title: "성형외과 광고 (가로)", isVideo: true },
  { title: "럭셔리 다크 블루 랜딩페이지", isVideo: false },
  { title: "크리에이티브 포트폴리오", isVideo: false },
  { title: "커뮤니티 게시글 스타일", isVideo: false },
];

// count 는 목록 카드에 보여주는 요약값일 뿐이다.
// 실제 빈칸 스키마는 서식 채우기 화면이 id 로 getFormFields(id) 를 조회해서 가져간다.
const formsCards = [
  { id: "deport-objection", title: "강제퇴거명령에대한이의신청서", category: "외국인 비자 서식", count: 20, date: "2026. 2. 12." },
  { id: "residence-report", title: "거소신고(신청)서", category: "외국인 비자 서식", count: 54, date: "2026. 2. 12." },
  { id: "residence-confirm-ko", title: "거주소재공사실확인서(명문병기)", category: "외국인 비자 서식", count: 35, date: "2026. 1. 23." },
  { id: "residence-confirm-cn", title: "거주소재공사실확인서(중문병기)", category: "외국인 비자 서식", count: 35, date: "2026. 1. 23." },
  { id: "health-confirm", title: "건강확인서", category: "외국인 비자 서식", count: 40, date: "2026. 1. 23." },
  { id: "family-invite-f15", title: "결혼이민자 부모 등 가족 초청장(F-1-5)", category: "외국인 비자 서식", count: 157, date: "2026. 1. 23." },
  { id: "deport-order", title: "강점퇴거명령서", category: "외국인 비자 서식", count: 12, date: "2026. 1. 15." },
  { id: "residence-proof", title: "거소신고 사실증명 신청서", category: "외국인 비자 서식", count: 28, date: "2026. 1. 10." },
];

const docsCards = [
  { title: "이의신청서 양식" },
  { title: "내용증명서 양식" },
  { title: "정보공개 청구서" },
  { title: "위임장 양식" },
  { title: "근로계약서 양식" },
  { title: "임대차계약서" },
  { title: "각서 양식" },
  { title: "진술서 양식" },
];

const audioAICards = [
  { title: "잔잔한 피아노 배경음악" },
  { title: "에너지 넘치는 팝 비트" },
  { title: "포디캐스트 인트로 음악" },
  { title: "명상·힐링 앰비언트" },
  { title: "광고용 경쾌한 BGM" },
  { title: "영화 예고편 스타일" },
  { title: "로파이 스터디 비트" },
  { title: "재즈 카페 분위기" },
];

const pptAICards = [
  { title: "스타트업 IR 피치덱 (다크)" },
  { title: "비즈니스 연간 보고서" },
  { title: "프로젝트 제안서 (모던)" },
  { title: "교육용 강의 슬라이드" },
  { title: "포트폴리오 프레젠테이션" },
  { title: "마케팅 전략 발표" },
  { title: "신제품 런칭 덱" },
  { title: "팀 소개 슬라이드" },
];

const videoAICards = [
  { title: "유튜브 쇼츠 – 제품 소개" },
  { title: "인스타그램 릴스 광고" },
  { title: "기업 홍보 영상" },
  { title: "이벤트 하이라이트" },
  { title: "교육 강의 영상" },
  { title: "요리 레시피 쇼츠" },
  { title: "부동산 매물 소개" },
  { title: "뷰티 튜토리얼" },
];

type Tag = { label: string; color: string; bg: string };
const tagMap: Record<string, Tag> = {
  "프레젠테이션": { label: "프레젠테이션", color: "#9810fa", bg: "#faf5ff" },
  "동영상": { label: "동영상", color: "#e7000b", bg: "#fef2f2" },
  "이미지": { label: "이미지", color: "#e17100", bg: "#fffbeb" },
  "랜딩페이지": { label: "랜딩페이지", color: "#00a63e", bg: "#f0fdf4" },
};
const myWorkItems = [
  { title: "고양이 등장 장면", tag: null, date: "2026. 7. 22." },
  { title: "여름철 학교 안전 PPT 제작", tag: "프레젠테이션", date: "2026. 7. 21." },
  { title: "주택임대차 표준계약서 작성 안내", tag: null, date: "2026. 7. 21." },
  { title: "템플릿 다운로드 및 작성 방법", tag: null, date: "2026. 7. 8." },
  { title: "출근하기 싫은 운동화 영상 제작", tag: "동영상", date: "2026. 7. 8." },
  { title: "건강확인서 작성 요망", tag: null, date: "2026. 7. 7." },
  { title: "템플릿 기반 자기소개서 작성 요청", tag: null, date: "2026. 7. 7." },
  { title: "회사 소개서 작성 요청", tag: null, date: "2026. 7. 7." },
  { title: "회사소개서 제작 요청", tag: null, date: "2026. 7. 7." },
  { title: "카드뉴스 템플릿 작성 방법 문의", tag: null, date: "2026. 7. 7." },
  { title: "Flowly 랜딩페이지 제작", tag: "랜딩페이지", date: "2026. 7. 3." },
  { title: "딸깍넷 카드뉴스 프롬프트 제작", tag: null, date: "2026. 7. 3." },
  { title: "이사 전 체크리스트 카드뉴스", tag: "이미지", date: "2026. 7. 2." },
];

const homeCategories = [
  { label: "이미지", screen: "image-ai" as Screen, icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><P d={svgPaths.p11d16a80} stroke="#F59E0B" strokeWidth="1.8" /><P d={svgPaths.p1b53d300} stroke="#F59E0B" strokeWidth="1.8" /><P d={svgPaths.p1c7c380} stroke="#F59E0B" strokeWidth="1.8" /></svg> },
  { label: "랜딩페이지", screen: "landing-ai" as Screen, icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><P d={svgPaths.p111d5080} stroke="#22C55E" strokeWidth="1.8" /><P d={svgPaths.p2ca2ecb0} stroke="#22C55E" strokeWidth="1.8" /><P d={svgPaths.p3a313e00} stroke="#22C55E" strokeWidth="1.8" /></svg> },
  { label: "동영상", screen: "video-ai" as Screen, icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><P d={svgPaths.p30fea100} stroke="#EF4444" strokeWidth="1.8" /><P d="M6.2 5.3L9.3 9.2" stroke="#EF4444" strokeWidth="1.8" /><P d="M12.4 3.4L15.5 7.4" stroke="#EF4444" strokeWidth="1.8" /><P d={svgPaths.p1ae59200} stroke="#EF4444" strokeWidth="1.8" /></svg> },
  { label: "프레젠테이션", screen: "ppt-ai" as Screen, icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><P d="M2 3H22" stroke="#8B5CF6" strokeWidth="1.8" /><P d={svgPaths.p21109e00} stroke="#8B5CF6" strokeWidth="1.8" /><P d="M7 21L12 16L17 21" stroke="#8B5CF6" strokeWidth="1.8" /></svg> },
  { label: "오디오", screen: "audio-ai" as Screen, icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><P d="M2 10V13" stroke="#D946EF" strokeWidth="1.8" /><P d="M6 6V17" stroke="#D946EF" strokeWidth="1.8" /><P d="M10 3V21" stroke="#D946EF" strokeWidth="1.8" /><P d="M14 8V15" stroke="#D946EF" strokeWidth="1.8" /><P d="M18 5V18" stroke="#D946EF" strokeWidth="1.8" /><P d="M22 10V13" stroke="#D946EF" strokeWidth="1.8" /></svg> },
  { label: "문서", screen: "docs-ai" as Screen, icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><P d={svgPaths.pb007f00} stroke="#3B82F6" strokeWidth="1.8" /><P d={svgPaths.p1b58ab00} stroke="#3B82F6" strokeWidth="1.8" /><P d="M10 9H8" stroke="#3B82F6" strokeWidth="1.8" /><P d="M16 13H8" stroke="#3B82F6" strokeWidth="1.8" /><P d="M16 17H8" stroke="#3B82F6" strokeWidth="1.8" /></svg> },
  { label: "서식", screen: "forms-ai" as Screen, icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><P d={svgPaths.p37c73510} stroke="#10B981" strokeWidth="1.8" /><P d="M15 5L19 9" stroke="#10B981" strokeWidth="1.8" /></svg> },
  { label: "PPT 검수", screen: "home" as Screen, icon: <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><P d={svgPaths.pace200} stroke="#F59E0B" strokeWidth="1.8" /><P d="M9 12L11 14L15 10" stroke="#F59E0B" strokeWidth="1.8" /></svg> },
];

// 서비스 화면 히어로의 부제 문구. 화면 컴포넌트가 아니라 여기서만 고친다.
// (다른 목 데이터와 같은 방식 — API 가 붙으면 이 상수만 응답으로 교체한다)
const SERVICE_COPY = {
  image: "썸네일·포스터·카드뉴스·상세페이지까지, SNS 홍보 이미지를 한 곳에서.",
  landing: "코딩 없이, 배포 링크까지 자동으로 만들어지는 웹페이지.",
  video: "릴스·숏츠·유튜브 영상을 템플릿으로 빠르게 제작해 보세요.",
  ppt: "가로·세로 PPT를 AI로 생성하고 자유롭게 편집하세요.",
  audio: "프롬프트로 만드는 나만의 배경음악, 제작물에 바로 삽입하세요.",
  docs: "워드·한글(HWP)·엑셀 문서를 별도 툴 없이 한 번에 작성하세요.",
  forms: "외국인도 쉽게 쓰는 공공서식, 다국어 번역과 가이드까지.",
  // PPT 검수는 아직 전용 화면이 없어(홈 카테고리가 home 으로 연결됨) 쓰이지 않는다.
  // 화면이 생기면 그대로 desc 로 넘기면 된다.
  pptCheck: "완성된 PPT를 넣으면 오타·띄어쓰기부터 번역까지 자동 정리.",
} as const;

// 헤드라인 아래 부제의 공통 글자색.
const SUBTITLE_COLOR = "#64748b";

// ─── 공통 컴포넌트 ────────────────────────────────────────────────────────────

const f = { fontFamily: "'Pretendard Variable', sans-serif" };

// 마우스 hover가 가능한 기기인지 여부(데스크톱 true / 터치폰 false).
// 터치 기기에서는 hover 이벤트가 없으므로 카드의 버튼들을 항상 노출/탭 동작으로 대체한다.
const HAS_HOVER =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(hover: hover)").matches;

// ─── 설정 · 메모리 데이터 ─────────────────────────────────────────────────────
// 이 프로젝트에는 아직 API 계층이 없어 화면 데이터는 모두 모듈 상수(목 데이터)로 들어온다.
// (recentChats·imageAICards·creditHistoryData 등과 같은 방식)
// 실제 서버가 붙으면 아래 두 상수를 응답으로 교체하면 UI는 그대로 동작한다.

type MemoryFact = { id: string; text: string; updatedAt: string };
type MemorySummarySection = { id: string; title: string; paragraphs: string[]; updatedAt: string };

const memoryLastUpdated = "15일 전";

const memoryFacts: MemoryFact[] = [
  { id: "f1", text: "주로 한국어로 소통합니다.", updatedAt: "7일 전" },
  { id: "f2", text: "출력 파일 포맷은 고해상도 PNG를 기본으로 선호합니다.", updatedAt: "12일 전" },
  { id: "f3", text: "이전 작업 시안에는 블루·웜톤 계열 색상이 사용되었습니다.", updatedAt: "18일 전" },
  { id: "f4", text: "카드뉴스 제작 시 여백과 정렬 규칙을 먼저 확인합니다.", updatedAt: "23일 전" },
  { id: "f5", text: "발표자료는 16:9 비율과 12장 내외 구성을 자주 사용합니다.", updatedAt: "약 1개월 전" },
];

const memorySummary: MemorySummarySection[] = [
  {
    id: "s1",
    title: "사용자 컨텍스트",
    paragraphs: [
      "대화와 결과물 요청은 한국어로 진행하며, 영문 프롬프트가 필요한 경우에만 영어를 함께 사용합니다.",
      "요청을 한 번에 길게 설명하기보다 템플릿을 먼저 고른 뒤 세부 조건을 덧붙이는 방식을 선호합니다.",
      "디자인은 블루·웜톤 계열의 차분한 팔레트와 여백이 넉넉한 레이아웃을 반복적으로 선택했고, 결과물은 고해상도 PNG로 내려받습니다.",
    ],
    updatedAt: "15일 전",
  },
  {
    id: "s2",
    title: "업무",
    paragraphs: [
      "서비스 기획 담당자로서 문서 자동화 템플릿과 랜딩페이지, 업무용 스프레드시트, 사내 발표자료를 함께 관리합니다.",
      "카드뉴스·상세페이지 이미지 제작과 문서 서식 정리가 가장 자주 수행하는 작업이며, 생성 결과를 검수한 뒤 팀에 공유합니다.",
    ],
    updatedAt: "약 1개월 전",
  },
  {
    id: "s3",
    title: "최근 관심사",
    paragraphs: [
      "문서 생성 서비스의 베타 테스트 준비에 집중하고 있습니다. 문서 분석 품질 개선과 스프레드시트 지원 범위 정리, 에디터에서 사용자가 수정한 내용이 유지되도록 하는 이슈를 주로 확인합니다.",
      "랜딩페이지 A/B 테스트 결과를 추적하며 개발·디자인·QA 담당자와 일정 조율을 이어가고 있습니다.",
    ],
    updatedAt: "29일 전",
  },
  {
    id: "s4",
    title: "히스토리",
    paragraphs: [
      "최근 두 달간 제품 기획과 사내 문서 생성 작업을 병행했습니다. 초반에는 계약서·양식류 등 정형 문서를 정리했고, 이후 문서 생성 서비스의 베타 준비로 초점을 옮겼습니다.",
      "서비스 개선 회의를 통해 정리된 항목들을 우선순위대로 반영했으며, 12장 분량의 안전 관리 발표자료처럼 실제 사용 사례를 만들어 템플릿 품질을 검증했습니다.",
    ],
    updatedAt: "약 1개월 전",
  },
];

// ─── 설정 모달 ────────────────────────────────────────────────────────────────

/**
 * 설정 푸터의 글자색 — 이 화면에서 각주에 쓰는 흐린 회색.
 * 프로젝트에 --text-muted 토큰은 없고, 가장 가까운 --muted-foreground(#717182)는
 * 각주로 쓰기엔 진해서 이 파일이 보조 설명에 쓰는 회색과 같은 값을 쓴다.
 */
const FOOTER_MUTED = "#9ca3af";

type SettingsTab = "외관" | "알림" | "메모리" | "크레딧";
type MemoryFilter = "전체" | "사실" | "요약";

// 설정 콘텐츠의 공통 섹션 헤더(제목 → 설명 → 컨트롤 순서를 모든 탭에서 동일하게 유지).
// 모듈 스코프에 두어야 리렌더 때 입력 포커스가 끊기지 않는다.
function SettingsSectionHead({ title, desc }: { title: string; desc?: string }) {
  return (
    <div>
      <p style={{ ...f, fontWeight: 700, fontSize: 16, color: "#0a0a0a", letterSpacing: "-0.4px" }}>{title}</p>
      {desc && (
        <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", letterSpacing: "-0.2px", lineHeight: 1.6, marginTop: 6 }}>{desc}</p>
      )}
    </div>
  );
}

// 업데이트 시점 칩 (기존 태그 칩과 동일한 톤)
function MemoryTimeChip({ value }: { value: string }) {
  return (
    <span className="inline-flex items-center rounded-full px-2 py-0.5" style={{ background: "#f1f5f9" }}>
      <span style={{ ...f, fontWeight: 500, fontSize: 11.5, color: "#64748b" }}>{value}</span>
    </span>
  );
}

function SettingsModal({ onClose, onCreditHistory }: { onClose: () => void; onCreditHistory: () => void }) {
  const [tab, setTab] = useState<SettingsTab>("외관");
  const [theme, setTheme] = useState<"시스템" | "라이트" | "다크">("시스템");
  const [notifEnabled, setNotifEnabled] = useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  // 메모리 탭 — 검색어 / 필터 / 사실 목록(개별·전체 삭제, 추가)
  const [memQuery, setMemQuery] = useState("");
  const [memFilter, setMemFilter] = useState<MemoryFilter>("전체");
  const [facts, setFacts] = useState<MemoryFact[]>(memoryFacts);
  const [factDraft, setFactDraft] = useState("");
  const [addingFact, setAddingFact] = useState(false);

  const tabs: SettingsTab[] = ["외관", "알림", "메모리", "크레딧"];

  const memq = memQuery.trim();
  const visibleFacts = memFilter === "요약" ? [] : facts.filter((it) => !memq || it.text.includes(memq));
  const visibleSummary = memFilter === "사실" ? [] : memorySummary.filter(
    (s) => !memq || s.title.includes(memq) || s.paragraphs.some((p) => p.includes(memq))
  );
  const memoryEmpty = visibleFacts.length === 0 && visibleSummary.length === 0;

  const addFact = () => {
    const text = factDraft.trim();
    if (!text) return;
    setFacts((prev) => [{ id: `f-${Date.now()}`, text, updatedAt: "방금 전" }, ...prev]);
    setFactDraft("");
    setAddingFact(false);
  };

  // 모달이 열려 있는 동안 바깥 페이지 스크롤을 잠근다.
  React.useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  // 탭 전환 시 콘텐츠 스크롤을 처음으로 되돌려 위치가 튀지 않게 한다.
  React.useEffect(() => { contentRef.current?.scrollTo({ top: 0 }); }, [tab]);

  // Esc로 닫기 — 데스크톱 모달의 X와 짝을 이루는 표준 닫기.
  // (모바일 바텀시트는 그랩 핸들과 바깥 탭으로 닫으므로 X를 두지 않는다)
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const tabIcons: Record<SettingsTab, React.ReactNode> = {
    "외관": <Palette size={17} strokeWidth={1.7} />,
    "알림": <Bell size={17} strokeWidth={1.7} />,
    "메모리": <Brain size={17} strokeWidth={1.7} />,
    "크레딧": <Coins size={17} strokeWidth={1.7} />,
  };

  const themeCards = [
    {
      id: "시스템" as const,
      label: "시스템",
      desc: "운영체제 설정을\n자동으로 따릅니다.",
      icon: <Monitor size={18} strokeWidth={1.7} />,
    },
    {
      id: "라이트" as const,
      label: "라이트",
      desc: "낮 시간에 적합한 밝은 색상 팔레트입니다.",
      icon: <Sun size={18} strokeWidth={1.7} />,
    },
    {
      id: "다크" as const,
      label: "다크",
      desc: "눈의 피로를 줄여주는 어두운 색상 팔레트입니다.",
      icon: <Moon size={18} strokeWidth={1.7} />,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes settingsSlideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes settingsFadeIn {
          from { transform: scale(0.98); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        /* 모바일·태블릿은 바텀시트로 올라오고, 데스크톱(중앙 정렬)에서는 페이드로 나타난다. */
        .settings-shell { animation: settingsSlideUp 280ms cubic-bezier(0.32,0.72,0,1); }
        @media (min-width: 1200px) {
          .settings-shell { animation: settingsFadeIn 180ms ease-out; }
        }
      `}</style>
      {/* backdrop */}
      <div onClick={onClose} className="fixed inset-0 z-[70] bg-black/40" />

      {/* 위치 래퍼 — 767px 이하·태블릿은 화면 하단에 붙는 바텀시트, 1200px 이상은 화면 중앙 다이얼로그.
          pointer-events-none 이라 셸 바깥을 누르면 backdrop이 그대로 닫기를 받는다. */}
      <div className="fixed inset-0 z-[71] flex flex-col justify-end pointer-events-none wide:items-center wide:justify-center wide:p-8">

      {/* modal shell — 네 탭이 공유하는 단일 셸.
          높이를 뷰포트 기준(dvh)으로 고정해 탭 콘텐츠 양과 무관하게 상·하단 위치가 항상 같다.
          dvh를 쓰므로 모바일 주소창이 접히고 펼쳐져도 함께 대응된다.
          폭 구간별 높이 — 모바일 min(82dvh,760px) / 태블릿 min(86dvh,880px) / 데스크톱 min(78dvh,760px),
          각 구간의 max-height로 화면 위아래에 항상 여백이 남게 한다. */}
      <div
        className={
          "settings-shell pointer-events-auto w-full bg-white flex flex-col overflow-hidden " +
          "rounded-t-[24px] wide:rounded-[24px] wide:max-w-[1040px] " +
          // md와 wide의 출력 순서에 기대지 않도록 태블릿 높이는 768~1199 범위로 못박는다
          "h-[min(82dvh,760px)] max-h-[calc(100dvh-64px)] " +
          "md:max-wide:h-[min(86dvh,880px)] md:max-wide:max-h-[calc(100dvh-48px)] " +
          // 데스크톱은 좌측 탭 메뉴에 빈 공간이 많이 남는 반면 우측 콘텐츠가 먼저 넘친다.
          // (외관 탭의 마지막 "언어" 셀렉트가 하단 경계에 물리던 원인)
          // 세로를 태블릿과 같은 여유로 올려 콘텐츠 쪽 높이를 벌어준다.
          "wide:h-[min(86dvh,880px)] wide:max-h-[calc(100dvh-80px)]"
        }
        style={{ boxShadow: "0px -8px 40px rgba(0,0,0,0.18)" }}
      >
        {/* drag handle — 바텀시트일 때만 노출(데스크톱 중앙 다이얼로그에는 끌 손잡이가 없다) */}
        <div className="flex justify-center pt-4 pb-1 shrink-0 wide:hidden">
          <div className="w-9 h-1 rounded-full bg-[#d1d5db]" />
        </div>

        {/* header — 제목/설명/닫기. 모든 폭에서 고정 */}
        <div className="flex items-start justify-between px-5 pt-4 pb-4 shrink-0 wide:px-7 wide:pt-6 wide:pb-5 wide:border-b wide:border-[#f1f5f9]">
          <div>
            <p style={{ ...f, fontWeight: 700, fontSize: 20, color: "#0a0a0a", letterSpacing: "-0.6px" }}>설정</p>
            <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", marginTop: 3, letterSpacing: "-0.2px" }}>딸깍의 외관과 동작을 설정합니다.</p>
          </div>
          {/* 닫기 — 데스크톱 모달 전용.
              바텀시트에는 그랩 핸들과 바깥 탭(backdrop)·Esc 가 이미 있어 X가 중복이고,
              원형 면에 담긴 X가 "설정" 제목과 시각적 무게를 나눠 가진다. */}
          <button onClick={onClose} aria-label="닫기"
            className="hidden wide:flex size-9 rounded-full bg-[#f1f5f9] items-center justify-center shrink-0 mt-0.5">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M4 4L12 12M12 4L4 12" stroke="#374151" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* body — 767px 이하·태블릿: 가로 탭 + 아래 콘텐츠 / 1200px 이상: 좌측 사이드 메뉴 + 우측 콘텐츠 */}
        <div className="flex-1 min-h-0 flex flex-col wide:flex-row">

          {/* 탭 메뉴 (같은 버튼을 방향만 바꿔 사용 — 색·그림자·아이콘은 동일) */}
          <div className="shrink-0 px-4 pb-3 wide:w-[212px] wide:px-4 wide:py-5">
            <div className="flex wide:flex-col bg-[#f1f5f9] rounded-[16px] p-1 gap-0.5 wide:gap-1">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className="flex-1 wide:flex-none flex flex-col wide:flex-row items-center wide:justify-start gap-1 wide:gap-2.5 py-2.5 wide:px-3 rounded-[12px] transition-all duration-150"
                  style={{
                    background: tab === t ? "white" : "transparent",
                    boxShadow: tab === t ? "0px 1px 4px rgba(0,0,0,0.1)" : "none",
                    color: tab === t ? "#0a0a0a" : "#9ca3af",
                  }}
                >
                  {tabIcons[t]}
                  <span className="wide:text-[13px]" style={{ ...f, fontWeight: tab === t ? 600 : 500, fontSize: 11 }}>{t}</span>
                </button>
              ))}
            </div>
          </div>

          {/* content — 헤더/탭바/푸터를 뺀 남은 높이를 차지하고, 넘칠 때 이 영역만 스크롤한다.
              minHeight:0 이 없으면 flex 자식이 콘텐츠 높이만큼 밀려 셸이 늘어난다.
              하단 여백은 마지막 요소(외관 탭의 "언어" 셀렉트)가 푸터 구분선에 붙지 않게 하는 몫이다. */}
          <div
            ref={contentRef}
            className="flex-1 overflow-y-auto px-4 pb-10 wide:px-8 wide:pb-12 wide:border-l wide:border-[#f1f5f9]"
            style={{ scrollbarWidth: "none", minHeight: 0, overscrollBehavior: "contain" }}
          >
          {/* 본문은 읽기 좋은 너비로 제한하고 좌측 시작선을 통일한다.
              상단 여백은 스크롤 컨테이너가 아니라 이 래퍼가 갖는다 —
              스크롤 컨테이너에 padding-top이 있으면 sticky 요소가 그만큼 아래에 붙어 콘텐츠가 비친다. */}
          <div className="w-full wide:max-w-[720px] wide:pt-4">

          {/* ── 외관 ── */}
          {tab === "외관" && (
            <div className="flex flex-col gap-7">
              <section className="flex flex-col gap-3.5">
                <SettingsSectionHead title="테마" desc="인터페이스가 기기를 따르도록 하거나 고정된 테마를 선택합니다." />
                {/* 3열 균등 배치 — grid라 카드 폭이 같고, stretch로 높이도 같아진다 */}
                <div className="grid grid-cols-3 gap-2.5 items-stretch">
                  {themeCards.map((tc) => (
                    <button
                      key={tc.id}
                      onClick={() => setTheme(tc.id)}
                      className="h-full flex flex-col rounded-[16px] overflow-hidden border-2 transition-all duration-150"
                      style={{
                        borderColor: theme === tc.id ? "#0a0a0a" : "#e2e8f0",
                        background: theme === tc.id ? "#fafafa" : "white",
                      }}
                    >
                      {/* preview */}
                      <div className="w-full bg-[#f1f5f9] relative" style={{ paddingBottom: "80%" }}>
                        <div className="absolute inset-0 p-2 flex flex-col gap-1.5">
                          <div className="flex items-center gap-1">
                            <div className="size-2 rounded-full bg-[#22c55e]" />
                            <div className="h-1.5 rounded bg-[#cbd5e1]" style={{ width: "55%" }} />
                            <div className="h-1.5 rounded bg-[#cbd5e1] ml-auto" style={{ width: "18%" }} />
                          </div>
                          <div className="flex gap-1.5 flex-1">
                            <div className="w-[32%] rounded-[6px] bg-white border border-[#e2e8f0] flex flex-col gap-1 p-1">
                              <div className="h-1.5 rounded bg-[#e2e8f0] w-full" />
                              <div className="h-1.5 rounded bg-[#e2e8f0] w-3/4" />
                            </div>
                            <div className="flex-1 rounded-[6px] bg-white border border-[#e2e8f0] flex flex-col gap-1 p-1">
                              <div className="h-1.5 rounded bg-[#e2e8f0] w-4/5" />
                              <div className="h-1.5 rounded bg-[#e2e8f0] w-2/3" />
                              <div className="h-1 rounded bg-[#e2e8f0] w-1/2" style={{ marginTop: 2 }} />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* label */}
                      <div className="px-2 py-2.5 flex items-center gap-1.5">
                        <span style={{ color: theme === tc.id ? "#0a0a0a" : "#9ca3af" }}>{tc.icon}</span>
                        <span style={{ ...f, fontWeight: 600, fontSize: 12, color: theme === tc.id ? "#0a0a0a" : "#6b7280", letterSpacing: "-0.2px" }}>{tc.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </section>

              {/* 언어 — 테마와 분리된 별도 섹션 */}
              <section className="flex flex-col gap-3.5">
                <SettingsSectionHead title="언어" desc="언어를 전환합니다." />
                <div className="relative wide:max-w-[360px]">
                  <select
                    className="w-full h-11 bg-white border border-[#e2e8f0] rounded-[14px] px-4 pr-10 appearance-none outline-none"
                    style={{ ...f, fontWeight: 500, fontSize: 14, color: "#0a0a0a" }}
                    defaultValue="한국어"
                  >
                    <option>한국어</option>
                    <option>English</option>
                    <option>日本語</option>
                    <option>中文</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                      <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#6b7280" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* ── 알림 ── */}
          {tab === "알림" && (
            <div className="flex flex-col gap-4">
              <SettingsSectionHead
                title="실시간 알림 제어"
                desc="딸깍는 창이 활성 상태가 아닐 때만 완료 알림을 보냅니다. 장시간 작업에 특히 유용하여 다른 작업을 하다가 완료 알림을 받을 수 있습니다."
              />
              {/* 설정 항목 카드 — 왼쪽 설정명·보조 설명 / 오른쪽 토글 */}
              <div className="bg-white border border-[#e2e8f0] rounded-[16px] px-4 py-4 flex items-start justify-between gap-4"
                style={{ boxShadow: "0px 1px 3px rgba(0,0,0,0.05)" }}>
                <div className="min-w-0">
                  <p style={{ ...f, fontWeight: 600, fontSize: 14, color: "#0a0a0a", letterSpacing: "-0.3px" }}>작업 완료 알림</p>
                  <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", letterSpacing: "-0.2px", lineHeight: 1.6, marginTop: 4 }}>
                    이미지·문서·랜딩페이지 등 생성 작업이 끝나면 알려드립니다.
                  </p>
                </div>
                {/* toggle */}
                <button
                  onClick={() => setNotifEnabled((v) => !v)}
                  className="shrink-0 relative w-11 h-6 rounded-full transition-colors duration-200 mt-1"
                  style={{ background: notifEnabled ? "#0a0a0a" : "#d1d5db" }}
                >
                  <div
                    className="absolute top-0.5 size-5 rounded-full bg-white shadow transition-transform duration-200"
                    style={{ left: 2, transform: notifEnabled ? "translateX(18px)" : "translateX(0)" }}
                  />
                </button>
              </div>
              {/* 권한 요청 — 데스크톱에서는 내용 폭을 전부 차지하지 않는다 */}
              <button
                className="w-full wide:w-auto wide:self-start wide:px-6 h-12 rounded-[14px] flex items-center justify-center gap-2"
                style={{ background: "#0a0a0a" }}
              >
                <Bell size={16} strokeWidth={1.8} color="white" />
                <span style={{ ...f, fontWeight: 600, fontSize: 14, color: "white", letterSpacing: "-0.3px" }}>알림 권한 요청</span>
              </button>
            </div>
          )}

          {/* ── 메모리 ── */}
          {tab === "메모리" && (
            <div className="flex flex-col">
              <SettingsSectionHead
                title="메모리"
                desc="딸깍는 백그라운드에서 대화를 자동으로 학습합니다. 이러한 기억은 딸깍가 사용자를 더 잘 이해하고 개인화된 경험을 제공하는 데 도움이 됩니다."
              />
              {/* 검색·필터·액션만 상단 고정 — 목록을 스크롤해도 바로 접근할 수 있게 한다 */}
              <div className="sticky top-0 z-10 bg-white pt-3.5 pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  {/* 검색 */}
                  <div className="relative flex-1 min-w-[150px]">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <Search size={15} strokeWidth={1.8} color="#9ca3af" />
                    </div>
                    <input
                      value={memQuery}
                      onChange={(e) => setMemQuery(e.target.value)}
                      placeholder="메모리 검색"
                      className="w-full h-10 bg-white border border-[#e2e8f0] rounded-[14px] pl-9 pr-3 outline-none"
                      style={{ ...f, fontWeight: 400, fontSize: 13, color: "#0a0a0a" }}
                    />
                  </div>
                  {/* 필터 */}
                  <div className="flex bg-[#f1f5f9] rounded-[14px] p-1 gap-0.5 shrink-0">
                    {(["전체", "사실", "요약"] as MemoryFilter[]).map((k) => (
                      <button key={k} onClick={() => setMemFilter(k)}
                        className="h-8 px-3 rounded-[10px] transition-all duration-150"
                        style={{
                          background: memFilter === k ? "white" : "transparent",
                          boxShadow: memFilter === k ? "0px 1px 4px rgba(0,0,0,0.1)" : "none",
                        }}>
                        <span style={{ ...f, fontWeight: memFilter === k ? 600 : 500, fontSize: 12.5, color: memFilter === k ? "#0a0a0a" : "#9ca3af" }}>{k}</span>
                      </button>
                    ))}
                  </div>
                  {/* 액션 */}
                  <button onClick={() => setAddingFact((v) => !v)}
                    className="h-10 px-3.5 rounded-[14px] border border-[#e2e8f0] bg-white flex items-center gap-1.5 shrink-0"
                    style={{ boxShadow: "0px 1px 2px rgba(0,0,0,0.06)" }}>
                    <Plus size={14} strokeWidth={1.8} color="#6b7280" />
                    <span style={{ ...f, fontWeight: 500, fontSize: 13, color: "#6b7280" }}>사실 추가</span>
                  </button>
                  <button onClick={() => setFacts([])} disabled={facts.length === 0}
                    className="h-10 px-3.5 rounded-[14px] border border-[#e2e8f0] bg-white flex items-center shrink-0"
                    style={{ boxShadow: "0px 1px 2px rgba(0,0,0,0.06)", opacity: facts.length === 0 ? 0.45 : 1 }}>
                    <span style={{ ...f, fontWeight: 600, fontSize: 13, color: "#e7000b" }}>메모리 전체 삭제</span>
                  </button>
                </div>
                {/* 사실 추가 입력 */}
                {addingFact && (
                  <div className="flex items-center gap-2 mt-2">
                    <input
                      value={factDraft}
                      onChange={(e) => setFactDraft(e.target.value)}
                      onKeyDown={(e) => { if (e.key === "Enter") addFact(); }}
                      placeholder="기억할 내용을 입력해 주세요"
                      autoFocus
                      className="flex-1 h-10 bg-white border border-[#e2e8f0] rounded-[14px] px-3.5 outline-none"
                      style={{ ...f, fontWeight: 400, fontSize: 13, color: "#0a0a0a" }}
                    />
                    <button onClick={addFact} className="h-10 px-4 rounded-[14px] shrink-0" style={{ background: "#0a0a0a" }}>
                      <span style={{ ...f, fontWeight: 600, fontSize: 13, color: "white" }}>추가</span>
                    </button>
                    <button onClick={() => { setAddingFact(false); setFactDraft(""); }} className="h-10 px-2 shrink-0">
                      <span style={{ ...f, fontWeight: 500, fontSize: 13, color: "#9ca3af" }}>취소</span>
                    </button>
                  </div>
                )}
              </div>

              {/* 메모리 본문 */}
              <div className="flex flex-col gap-5 pt-1">
                {/* 개요 — 검색 중에는 결과에 집중할 수 있도록 감춘다 */}
                {!memq && memFilter === "전체" && (
                  <div className="bg-white border border-[#e2e8f0] rounded-[16px] px-4 py-4"
                    style={{ boxShadow: "0px 1px 3px rgba(0,0,0,0.05)" }}>
                    <p style={{ ...f, fontWeight: 600, fontSize: 14, color: "#0a0a0a", letterSpacing: "-0.3px" }}>개요</p>
                    <div className="flex items-center gap-2 mt-2.5">
                      <span style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af" }}>최종 업데이트</span>
                      <MemoryTimeChip value={memoryLastUpdated} />
                    </div>
                    <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", lineHeight: 1.6, marginTop: 8 }}>
                      사실 {facts.length}개와 요약 {memorySummary.length}개 섹션이 저장되어 있습니다.
                    </p>
                  </div>
                )}

                {/* 사실 — 개별 삭제 가능 */}
                {visibleFacts.length > 0 && (
                  <section className="flex flex-col gap-2.5">
                    <p style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#9ca3af", letterSpacing: "-0.2px" }}>사실</p>
                    {visibleFacts.map((fact) => (
                      <div key={fact.id}
                        className="bg-white border border-[#e2e8f0] rounded-[14px] px-4 py-3 flex items-start justify-between gap-3"
                        style={{ boxShadow: "0px 1px 3px rgba(0,0,0,0.05)" }}>
                        <div className="min-w-0">
                          <p style={{ ...f, fontWeight: 500, fontSize: 13.5, color: "#0a0a0a", letterSpacing: "-0.2px", lineHeight: 1.6 }}>{fact.text}</p>
                          <div className="flex items-center gap-1.5 mt-1.5">
                            <span style={{ ...f, fontWeight: 400, fontSize: 12, color: "#9ca3af" }}>업데이트</span>
                            <MemoryTimeChip value={fact.updatedAt} />
                          </div>
                        </div>
                        <button onClick={() => setFacts((prev) => prev.filter((x) => x.id !== fact.id))}
                          className="shrink-0 h-7 px-2 flex items-center">
                          <span style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#e7000b" }}>삭제</span>
                        </button>
                      </div>
                    ))}
                  </section>
                )}

                {/* 요약 — 섹션 제목 / 본문 문단 / 업데이트 시점을 구분하고 사이에 구분선 */}
                {visibleSummary.map((s, i) => (
                  <React.Fragment key={s.id}>
                    {(i > 0 || visibleFacts.length > 0) && <div className="h-px bg-[#f1f5f9]" />}
                    <section className="flex flex-col gap-2">
                      <p style={{ ...f, fontWeight: 700, fontSize: 15, color: "#0a0a0a", letterSpacing: "-0.35px" }}>{s.title}</p>
                      {s.paragraphs.map((p, idx) => (
                        <p key={idx} style={{ ...f, fontWeight: 400, fontSize: 13.5, color: "#374151", letterSpacing: "-0.2px", lineHeight: 1.7 }}>{p}</p>
                      ))}
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span style={{ ...f, fontWeight: 400, fontSize: 12, color: "#9ca3af" }}>업데이트 시간</span>
                        <MemoryTimeChip value={s.updatedAt} />
                      </div>
                    </section>
                  </React.Fragment>
                ))}

                {/* 빈 상태 — 검색 결과 없음 / 저장된 메모리 없음 */}
                {memoryEmpty && (
                  <div className="flex flex-col items-center justify-center text-center gap-2 py-14">
                    <Brain size={28} strokeWidth={1.5} color="#cbd5e1" />
                    <p style={{ ...f, fontWeight: 600, fontSize: 14, color: "#374151", letterSpacing: "-0.3px" }}>
                      {memq ? "검색 결과가 없습니다" : "저장된 메모리가 없습니다"}
                    </p>
                    <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", lineHeight: 1.6 }}>
                      {memq ? "다른 검색어로 찾아보세요." : "대화를 나누면 딸깍가 자동으로 기억을 만들어요."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── 크레딧 ── */}
          {tab === "크레딧" && (
            <div className="flex flex-col gap-4">
              <SettingsSectionHead
                title="크레딧 계정 상태 요약"
                desc="보유한 크레딧 잔액과 이번 달 사용량입니다. 상세 내역과 충전은 크레딧 사용 내역 페이지에서 확인할 수 있습니다."
              />

              {/* 요약 카드 — 잔액을 가장 크게, 이번 달 사용량은 구분선 아래 */}
              <div className="bg-white border border-[#e2e8f0] rounded-[16px] px-5 py-5"
                style={{ boxShadow: "0px 1px 3px rgba(0,0,0,0.05)" }}>
                <p style={{ ...f, fontWeight: 500, fontSize: 12, color: "#9ca3af", letterSpacing: "-0.2px" }}>남은 크레딧 잔액</p>
                <p style={{ ...f, fontWeight: 700, fontSize: 28, color: "#0a0a0a", letterSpacing: "-1.1px", lineHeight: 1.2, marginTop: 4 }}>
                  {CREDIT_BALANCE.toLocaleString()}
                  <span style={{ fontWeight: 500, fontSize: 14, color: "#737373", letterSpacing: "-0.2px" }}> 크레딧</span>
                </p>
                <div className="h-px bg-[#f1f5f9] my-4" />
                <div className="flex items-center justify-between gap-3">
                  <span style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af" }}>이번 달 사용 요약</span>
                  <span style={{ ...f, fontWeight: 600, fontSize: 13, color: "#0a0a0a" }}>
                    {CREDIT_MONTHLY_USED.toLocaleString()} 크레딧 차감
                  </span>
                </div>
              </div>

              {/* 사용량 상세 */}
              <div className="flex flex-col gap-3">
                <SettingsSectionHead title="크레딧 사용량" desc="API 사용 비용을 추적합니다." />
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { label: "총 작업 수", value: "···" },
                    { label: "예상 비용", value: "$···" },
                    { label: "실제 비용", value: "$···" },
                    { label: "총 토큰", value: "···" },
                  ].map(({ label, value }) => (
                    <div key={label}
                      className="bg-white border border-[#e2e8f0] rounded-[16px] p-4"
                      style={{ boxShadow: "0px 1px 3px rgba(0,0,0,0.05)" }}>
                      <p style={{ ...f, fontWeight: 500, fontSize: 12, color: "#9ca3af", letterSpacing: "-0.2px", marginBottom: 8 }}>{label}</p>
                      <p style={{ ...f, fontWeight: 700, fontSize: 20, color: "#0a0a0a", letterSpacing: "-0.5px" }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 하단 액션 — 새로고침(보조) / 상세 내역·충전 이동(주요) */}
              <div className="flex flex-col-reverse gap-2.5 wide:flex-row wide:items-center wide:justify-between">
                <button
                  className="flex items-center justify-center gap-1.5 h-11 px-4 rounded-[12px] border border-[#e2e8f0] bg-white wide:h-9"
                  style={{ boxShadow: "0px 1px 2px rgba(0,0,0,0.06)" }}>
                  <RefreshCw size={14} strokeWidth={1.7} color="#6b7280" />
                  <span style={{ ...f, fontWeight: 500, fontSize: 13, color: "#6b7280" }}>새로고침</span>
                </button>
                <button onClick={onCreditHistory}
                  className="h-11 px-5 rounded-[14px] flex items-center justify-center gap-2"
                  style={{ background: "#0a0a0a" }}>
                  <Coins size={15} strokeWidth={1.8} color="white" />
                  <span style={{ ...f, fontWeight: 600, fontSize: 13.5, color: "white", letterSpacing: "-0.3px" }}>크레딧 상세 내역 및 충전</span>
                </button>
              </div>
            </div>
          )}
          </div>
          </div>
        </div>

        {/* footer — 모든 탭에서 같은 하단 위치에 고정.
            설정 화면의 각주라, 어느 폭에서도 콘텐츠보다 눈에 띄지 않게 둔다:
            로고는 모노톤으로 눌러 두고, 버전·해시는 mono pill 로 감싸 "기술 정보" 신호만 준다.
            항목 구성은 전 뷰포트 공통이고 밀도만 다르다 —
            빌드 시각은 좁은 폭에서 줄바꿈을 만드는데다 커밋 해시로 같은 빌드를 특정할 수 있어
            데스크톱에서만 덧붙인다. 구분선도 여백이 넉넉한 데스크톱에서만 쓴다. */}
        <div
          className="shrink-0 px-5 pt-2 wide:px-7 wide:pt-4 wide:border-t wide:border-[#f1f5f9] flex items-center gap-2"
          style={{ paddingBottom: "calc(16px + env(safe-area-inset-bottom, 0px))" }}
        >
          <img alt="딸깍.net" className="h-3.5 w-auto object-contain grayscale opacity-40" src={imgImageNet} />
          <span className="font-mono rounded-[6px] px-1.5 py-0.5 bg-[#f1f5f9]"
            style={{ fontSize: 12, lineHeight: 1.4, color: FOOTER_MUTED }}>v1.0.242</span>
          <span className="font-mono rounded-[6px] px-1.5 py-0.5 bg-[#f1f5f9]"
            style={{ fontSize: 12, lineHeight: 1.4, color: FOOTER_MUTED }}>4cc9c46</span>
          <span className="hidden wide:inline" style={{ ...f, fontWeight: 400, fontSize: 12, color: FOOTER_MUTED }}>
            Build: 2026. 07. 23. 오전 10:26
          </span>
        </div>
      </div>
      </div>
    </>
  );
}

// ─── SidebarDrawer ────────────────────────────────────────────────────────────

/** 도킹 사이드바가 펼쳐졌을 때 / 접혔을 때(아이콘 레일)의 폭 */
const SIDEBAR_W = 280;
const SIDEBAR_RAIL_W = 76;

/**
 * 좌측 사이드바. 두 가지 배치를 한 컴포넌트로 처리한다.
 *
 * - variant="drawer" (기본): 오버레이 드로어. 백드롭 + translateX 슬라이드.
 *   데스크톱보다 좁은 화면에서 쓴다 — 상시 노출할 가로 폭이 없기 때문이다.
 * - variant="docked": 상시 노출되는 in-flow 컬럼. 백드롭·슬라이드가 없고,
 *   닫는 대신 collapsed 로 아이콘 레일(76px)까지만 접힌다.
 *
 * 도킹 상태에서 "닫기"를 두지 않는 이유: 사이드바가 레이아웃의 한 컬럼이라
 * 완전히 사라지면 본문이 통째로 밀린다. 대신 레일로 접어 이동 수단은 남긴다.
 *
 * recentForms 를 넘기면 "최근 서식"이 클릭 가능한 목록으로 바뀌고 currentFormId 가
 * 활성 표시된다. 안 넘기면 기존처럼 recentTemplates 를 정적으로 렌더한다.
 */
function SidebarDrawer({ open, onClose, currentScreen, onNavigate, onSettingsOpen, onStartTutorial, variant = "drawer", collapsed = false, onToggleCollapsed, recentForms, currentFormId, onSelectForm }: {
  open: boolean; onClose: () => void;
  currentScreen: Screen; onNavigate: (s: Screen) => void;
  onSettingsOpen: () => void;
  onStartTutorial: () => void;
  variant?: "drawer" | "docked";
  /** 도킹일 때만 의미가 있다 — 아이콘 레일로 접힌 상태 */
  collapsed?: boolean;
  onToggleCollapsed?: () => void;
  recentForms?: { id: string; title: string }[];
  currentFormId?: string;
  onSelectForm?: (id: string, title: string) => void;
}) {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const nav = (s: Screen) => { onNavigate(s); onClose(); };
  const openSettings = () => { setProfileMenuOpen(false); onClose(); onSettingsOpen(); };
  const isHomeVariant = ["image-ai", "landing-ai", "forms-ai", "docs-ai", "audio-ai", "ppt-ai", "video-ai"].includes(currentScreen);
  const active = (s: Screen) => s === currentScreen || (isHomeVariant && s === "home");
  const docked = variant === "docked";
  // 접기는 도킹 컬럼에서만 일어난다. 오버레이 드로어는 열림/닫힘만 있다.
  const railed = docked && collapsed;

  // 접는 순간 열려 있던 프로필 팝업은 닫는다 — 폭이 줄면서 팝업만 허공에 뜬 것처럼 남는다.
  useEffect(() => { if (railed) setProfileMenuOpen(false); }, [railed]);

  return (
    <>
      {!docked && (
        <div onClick={onClose} className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-300"
          style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }} />
      )}
      <div className={docked
        ? "h-full shrink-0 bg-white border-r border-[#dfe6ed] flex flex-col transition-[width] duration-300"
        : "fixed top-0 left-0 h-full z-50 bg-white border-r border-[#dfe6ed] flex flex-col transition-transform duration-300"}
        style={docked
          ? { width: railed ? SIDEBAR_RAIL_W : SIDEBAR_W }
          : { width: SIDEBAR_W, transform: open ? "translateX(0)" : "translateX(-100%)" }}>
        {/* Header — 로고 + 토글. 접힌 레일에는 토글만 남는다(로고가 들어갈 폭이 없다). */}
        <div className={`flex items-center h-[60px] shrink-0 ${railed ? "justify-center px-0" : "justify-between px-4"}`}>
          {!railed && <img alt="딸깍.net" className="h-6 w-auto object-contain" src={imgImageNet} />}
          {docked ? (
            <button onClick={onToggleCollapsed}
              aria-label={railed ? "사이드바 펼치기" : "사이드바 접기"}
              aria-expanded={!railed}
              className="flex items-center justify-center size-9 rounded-[10px] opacity-80"><IconMenu /></button>
          ) : (
            <button onClick={onClose} aria-label="사이드바 닫기" className="flex items-center justify-center size-9 rounded-[10px]"><IconClose /></button>
          )}
        </div>
        {/* Nav */}
        <div className="flex flex-col gap-1 px-2 shrink-0">
          {[
            { s: "home" as Screen, icon: <IconHome />, label: "홈" },
            { s: "mywork" as Screen, icon: <IconWork />, label: "내 작업" },
            { s: "favorites" as Screen, icon: <IconStar />, label: "즐겨찾기" },
          ].map(({ s, icon, label }) => (
            <button key={s} onClick={() => nav(s)}
              aria-current={active(s) ? "page" : undefined}
              aria-label={railed ? label : undefined}
              title={railed ? label : undefined}
              className={`dk-nav-item h-11 rounded-[14px] flex items-center w-full ${railed ? "justify-center" : "gap-3 px-3"} ${active(s) ? "is-active" : ""}`}>
              {/* 아이콘·라벨 색 모두 CSS 가 담당한다(인라인 style 은 :hover 를 이긴다).
                  아이콘은 currentColor 라 버튼의 color 를 따라간다. */}
              {icon}
              {!railed && (
                <span className="dk-nav-item__label" style={{ ...f, fontWeight: active(s) ? 600 : 500, fontSize: 14, letterSpacing: "-0.35px" }}>
                  {label}
                </span>
              )}
            </button>
          ))}
        </div>
        {/* Scrollable — 레일에서는 목록을 접고 빈 공간만 남긴다(제목·파일명이 76px 에 들어가지 않는다) */}
        {railed ? <div className="flex-1" /> : (
        <div className="flex-1 overflow-y-auto mt-1" style={{ scrollbarWidth: "none" }}>
          <div className="px-2 pt-1">
            <div className="h-8 flex items-center px-2">
              <span style={{ ...f, fontWeight: 500, fontSize: 12, color: "#90a1b9" }}>최근 서식</span>
            </div>
            {/* recentForms 가 오면 클릭 가능한 목록, 없으면 지금까지의 정적 목록 그대로. */}
            {recentForms
              ? recentForms.map((form) => {
                  const isCurrent = form.id === currentFormId;
                  return (
                    <button key={form.id} type="button"
                      onClick={() => onSelectForm?.(form.id, form.title)}
                      aria-current={isCurrent ? "page" : undefined}
                      className={`dk-nav-item dk-nav-item--sub h-8 rounded-[14px] flex items-center gap-3 px-3 w-full ${isCurrent ? "is-active" : ""}`}>
                      <div className="shrink-0">{isCurrent ? <IconFileDocBlue /> : <IconFileDoc />}</div>
                      <span className="dk-nav-item__label truncate" style={{ ...f, fontWeight: isCurrent ? 600 : 500, fontSize: 13, letterSpacing: "-0.35px" }}>{form.title}</span>
                    </button>
                  );
                })
              : recentTemplates.map((t) => (
                  <div key={t} className="h-8 rounded-[14px] flex items-center gap-3 px-3">
                    <div className="shrink-0"><IconFileDoc /></div>
                    <span className="truncate" style={{ ...f, fontWeight: 500, fontSize: 13, color: "#45556c", letterSpacing: "-0.35px" }}>{t}</span>
                  </div>
                ))}
          </div>
          <div className="px-2 mt-2">
            <div className="h-8 flex items-center px-2">
              <span style={{ ...f, fontWeight: 600, fontSize: 11, color: "#90a1b9", letterSpacing: "0.275px" }}>최근 대화</span>
            </div>
            {recentChats.map((c) => (
              <div key={c} className="h-8 rounded-[14px] flex items-center pl-3 pr-4">
                <span className="truncate" style={{ ...f, fontWeight: 500, fontSize: 13, color: "#45556c", letterSpacing: "-0.35px" }}>{c}</span>
              </div>
            ))}
            <div className="flex items-center justify-center py-1.5">
              <span style={{ ...f, fontWeight: 400, fontSize: 12, color: "#737373" }}>이전 대화 더 보기</span>
            </div>
          </div>
        </div>
        )}
        {/* User */}
        <div className="shrink-0 border-t border-[#dfe6ed] p-2 relative">
          {/* 프로필 팝업 */}
          {profileMenuOpen && (
            <>
              <div onClick={() => setProfileMenuOpen(false)} className="fixed inset-0 z-[60]" />
              {/* 레일에서는 right-2 로 폭을 잡으면 76px 안에 갇혀 읽을 수 없다 — 컬럼 밖으로 넘겨 편다 */}
              <div className={`absolute z-[61] bg-white rounded-[20px] border border-[#e2e8f0] overflow-hidden ${railed ? "left-2 w-[260px]" : "left-2 right-2"}`}
                style={{ bottom: "calc(100% - 8px)", boxShadow: "0px 8px 32px rgba(0,0,0,0.14)", animation: "slideUp 180ms cubic-bezier(0.32,0.72,0,1)" }}>
                {/* 프로필 헤더 */}
                <div className="px-5 pt-5 pb-4">
                  <p style={{ ...f, fontWeight: 700, fontSize: 17, color: "#0a0a0a", letterSpacing: "-0.5px" }}>최유정</p>
                  <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", marginTop: 2 }}>cyj2406@gmail.com</p>
                </div>
                <div className="h-px bg-[#f1f5f9] mx-0" />
                {/* 메뉴 그룹 1 */}
                {[
                  { icon: <HelpCircle size={20} strokeWidth={1.6} color="#9ca3af" />, label: "튜토리얼 다시 보기", onClick: (() => { setProfileMenuOpen(false); onClose(); onStartTutorial(); }) as (() => void) | undefined },
                  { icon: <SettingsIcon size={20} strokeWidth={1.6} color="#9ca3af" />, label: "설정", onClick: openSettings },
                ].map(({ icon, label, onClick }) => (
                  <button key={label} onClick={onClick} className="w-full flex items-center gap-3.5 px-5 py-3.5">
                    <div className="shrink-0">{icon}</div>
                    <span style={{ ...f, fontWeight: 500, fontSize: 15, color: "#1e293b", letterSpacing: "-0.3px" }}>{label}</span>
                  </button>
                ))}
                <div className="h-px bg-[#f1f5f9]" />
                {/* 메뉴 그룹 2 */}
                {[
                  { icon: <Users size={20} strokeWidth={1.6} color="#9ca3af" />, label: "커뮤니티" },
                  { icon: <Mail size={20} strokeWidth={1.6} color="#9ca3af" />, label: "문의하기" },
                ].map(({ icon, label }) => (
                  <button key={label} className="w-full flex items-center gap-3.5 px-5 py-3.5">
                    <div className="shrink-0">{icon}</div>
                    <span style={{ ...f, fontWeight: 500, fontSize: 15, color: "#1e293b", letterSpacing: "-0.3px" }}>{label}</span>
                  </button>
                ))}
                <div className="h-px bg-[#f1f5f9]" />
                {/* 로그아웃 */}
                <button className="w-full flex items-center gap-3.5 px-5 py-3.5 pb-5">
                  <LogOut size={20} strokeWidth={1.6} color="#9ca3af" />
                  <span style={{ ...f, fontWeight: 500, fontSize: 15, color: "#1e293b", letterSpacing: "-0.3px" }}>로그아웃</span>
                </button>
              </div>
            </>
          )}
          {/* 프로필 바 — 레일에서는 아바타만 남고, 이름·메일·점 세 개는 접힌다 */}
          <button className={`w-full h-[50px] rounded-[18px] flex items-center ${railed ? "justify-center px-0" : "gap-2.5 px-2"}`}
            aria-label={railed ? "최유정 계정 메뉴" : undefined}
            title={railed ? "최유정" : undefined}
            onClick={() => setProfileMenuOpen((v) => !v)}>
            <div className="bg-[#e0e7ff] border border-[#c7d2fe] rounded-full size-8 overflow-hidden shrink-0">
              <img alt="최유정" className="size-full object-cover" src={imgUserAvatar} />
            </div>
            {!railed && (
              <>
                <div className="flex-1 min-w-0 text-left">
                  <div className="truncate" style={{ ...f, fontWeight: 600, fontSize: 13, color: "#0a0a0a", lineHeight: "18.6px" }}>최유정</div>
                  <div className="truncate" style={{ ...f, fontWeight: 400, fontSize: 11, color: "#737373", lineHeight: "15.7px" }}>cyj2406@gmail.com</div>
                </div>
                <div className="shrink-0 flex flex-col gap-[3px] items-center justify-center size-6">
                  {[0,1,2].map(i => <div key={i} className="size-[3.5px] rounded-full bg-[#9ca3af]" />)}
                </div>
              </>
            )}
          </button>
        </div>
      </div>
      <style>{`
        /* 사이드바 메뉴 — 배경·이동·색만 전이시킨다(폰트/굵기/크기는 그대로).
           아이콘은 currentColor 라 버튼의 color 를 따라간다. */
        .dk-nav-item {
          background-color: transparent;
          color: #64748b;
          transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
        }
        .dk-nav-item .dk-nav-item__label { color: #1e293b; transition: color 160ms ease; }
        /* 하위 목록(최근 서식) — 기본 글자색만 기존 목록과 맞추고 hover/활성은 메뉴와 동일하게 쓴다. */
        .dk-nav-item--sub .dk-nav-item__label { color: #45556c; }
        /* 현재 페이지 — 브랜드 블루 텍스트/아이콘 + 블루 틴트 배경. 이동은 주지 않는다. */
        .dk-nav-item.is-active { background-color: #eef3ff; color: #4f7bff; }
        .dk-nav-item.is-active .dk-nav-item__label { color: #4f7bff; }

        /* 호버는 마우스 환경에서만. 터치에서 탭 뒤 호버 잔상이 남으면 활성 상태와 헷갈린다.
           태블릿에서 호버가 보이지 않는 것은 의도된 동작이고, 그쪽은 아래 :active 가 맡는다. */
        @media (hover: hover) and (pointer: fine) {
          .dk-nav-item:hover { background-color: #f1f5f9; color: #475569; transform: translateX(3px); }
          .dk-nav-item:hover .dk-nav-item__label { color: #0f172a; }
          .dk-nav-item.is-active:hover { background-color: #e3ebff; color: #4f7bff; transform: none; }
          .dk-nav-item.is-active:hover .dk-nav-item__label { color: #4f7bff; }
        }

        /* 터치 — 누르고 있는 동안만. 배경을 호버보다 한 단계 진하게(#e2e8f0) 해서
           손가락에 가려도 눌린 것이 보이게 한다. */
        .dk-nav-item:active { background-color: #e2e8f0; color: #475569; transform: translateX(2px); }
        .dk-nav-item:active .dk-nav-item__label { color: #0f172a; }
        .dk-nav-item.is-active:active { background-color: #dbe4ff; color: #4f7bff; transform: none; }
        .dk-nav-item.is-active:active .dk-nav-item__label { color: #4f7bff; }

        /* 터치에서는 들어갈 때도 빠질 때도 80ms — 손을 떼면 곧바로 원래대로 돌아온다. */
        @media (pointer: coarse) {
          .dk-nav-item, .dk-nav-item .dk-nav-item__label { transition-duration: 80ms; }
        }

        @media (prefers-reduced-motion: reduce) {
          .dk-nav-item { transition: none; }
          .dk-nav-item:hover, .dk-nav-item:active { transform: none; }
        }
      `}</style>
    </>
  );
}

function TopBar({ onMenuOpen, onBack, showBack, onCreditClick, onBellClick, bellRef, brand = true }: {
  onMenuOpen: () => void; onBack?: () => void; showBack?: boolean;
  onCreditClick?: () => void; onBellClick?: () => void;
  bellRef?: React.RefObject<HTMLButtonElement | null>;
  /**
   * 좌측의 햄버거 + 로고를 그릴지. 사이드바가 도킹된 데스크톱에서는 false —
   * 브랜드와 여닫기 토글을 사이드바가 이미 갖고 있어 나란히 두면 둘 다 중복이다.
   * 뒤로가기는 화면 맥락이라 brand 와 무관하게 showBack 이 정한다.
   */
  brand?: boolean;
}) {
  return (
    <header className="h-14 flex items-center justify-between px-4 shrink-0 bg-[#f8fafc]">
      <div className="flex items-center gap-2">
        {showBack && onBack ? (
          <button onClick={onBack} className="flex items-center justify-center size-9 rounded-[10px]"><IconChevronLeft /></button>
        ) : brand ? (
          <button onClick={onMenuOpen} className="flex items-center justify-center size-9 rounded-[10px] opacity-80"><IconMenu /></button>
        ) : null}
        {brand && <img alt="딸깍.net" className="h-[22px] w-auto object-contain" src={imgImageNet} />}
      </div>
      <div className="flex items-center gap-2">
        <CreditBadge amount={CREDIT_BALANCE} onClick={onCreditClick} />
        <button ref={bellRef} onClick={onBellClick} className="relative size-9 flex items-center justify-center">
          <IconBell />
          <div className="absolute top-[6px] left-[22px] bg-[#2b7fff] rounded-full size-2" />
        </button>
      </div>
    </header>
  );
}

// ─── 컴포저 칩 툴바 (홈·워크스페이스 공용) ─────────────────────────────────────
// 데스크톱과 동일하게 "양식 업로드"를 포함하고, 토글 칩에는 설명 툴팁을 붙인다.
// 자리가 모자라면 줄바꿈으로 내리지 않고 가로 슬라이드로 가려뒀다가 밀어서 볼 수 있게 한다.
const CHIP_TOOLTIP = {
  upload: "올린 양식과 똑같은 형식으로 문서를 만들어줍니다.",
  auto: "질문에 맞게 프롬프트를 자동으로 최적화하여 더 정확한 답변을 생성합니다.",
  doc: "참고문서 원문 전체를 AI 입력에 포함합니다. 입력 크기가 증가하여 처리 비용과 응답 시간이 증가할 수 있습니다.",
} as const;

function ComposerChips({ showUpload = true }: { showUpload?: boolean }) {
  const [autoOn, setAutoOn] = useState(true);
  const [docOn, setDocOn] = useState(false);
  const [tip, setTip] = useState<{ text: string; left: number; width: number; arrowX: number } | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const scRef = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ left: false, right: false });
  const tipTimer = useRef<number | undefined>(undefined);

  // 좌우 끝에 가려진 칩이 있는지 — 페이드로 "더 있다"는 걸 알린다
  const updateEdges = useCallback(() => {
    const el = scRef.current;
    if (!el) return;
    setEdge({
      left: el.scrollLeft > 2,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 2,
    });
  }, []);

  useEffect(() => {
    updateEdges();
    const el = scRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(updateEdges);
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateEdges]);

  useEffect(() => () => window.clearTimeout(tipTimer.current), []);

  // 데스크톱은 hover로, 터치 기기(hover 없음)는 탭으로 툴팁을 띄운다.
  const showTip = (el: HTMLElement, text: string, autoHide: boolean) => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const r = el.getBoundingClientRect();
    const w = wrap.getBoundingClientRect();
    // 말풍선은 컨테이너 안에 가두고, 화살표만 칩 중앙을 가리키게 한다
    const width = Math.min(280, w.width);
    const center = r.left + r.width / 2 - w.left;
    const left = Math.min(Math.max(center, width / 2), w.width - width / 2);
    const arrowX = Math.min(Math.max(center, left - width / 2 + 12), left + width / 2 - 12);
    setTip({ text, left, width, arrowX });
    window.clearTimeout(tipTimer.current);
    if (autoHide) tipTimer.current = window.setTimeout(() => setTip(null), 2800);
  };

  // 칩 하나에 붙일 툴팁 핸들러 묶음 — 포인터 종류로 그때그때 판단한다.
  // 마우스는 hover로, 터치·펜은 탭으로 (자동 숨김) 띄운다.
  const lastPointer = useRef<string>("mouse");
  const tipHandlers = (text: string) => ({
    onPointerEnter: (e: React.PointerEvent<HTMLButtonElement>) => {
      if (e.pointerType === "mouse") showTip(e.currentTarget, text, false);
    },
    onPointerLeave: (e: React.PointerEvent<HTMLButtonElement>) => {
      if (e.pointerType === "mouse") setTip(null);
    },
    onPointerDown: (e: React.PointerEvent<HTMLButtonElement>) => {
      lastPointer.current = e.pointerType || "mouse";
    },
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
      if (lastPointer.current !== "mouse") showTip(e.currentTarget, text, true);
    },
  });

  const chipStyle = (on: boolean) => ({
    background: on ? "#eff6ff" : "white",
    border: `1px solid ${on ? "rgba(79,123,255,0.35)" : "#e2e8f0"}`,
  });
  const chipText = (on: boolean) => ({ ...f, fontWeight: 600, fontSize: 11, color: on ? "#4f7bff" : "#62748e" });

  return (
    <div ref={wrapRef} className="relative flex-1 min-w-0">
      {/* 툴팁 — 스크롤 컨테이너 밖에 그려야 잘리지 않는다 */}
      {tip && (
        <>
          <div
            className="absolute z-20 rounded-[12px] px-4 py-2.5 pointer-events-none"
            style={{
              bottom: "calc(100% + 9px)",
              left: tip.left,
              transform: "translateX(-50%)",
              width: tip.width,
              // 아이콘 툴팁과 같은 면·테두리·그림자를 쓴다(theme.css --tooltip-*).
              background: "var(--tooltip)",
              border: "1px solid var(--tooltip-border)",
              boxShadow: "var(--tooltip-shadow)",
            }}
          >
            <p style={{ ...f, fontWeight: 700, fontSize: 12, color: "white", lineHeight: 1.6, letterSpacing: "-0.2px", textAlign: "center" }}>
              {tip.text}
            </p>
          </div>
          <div
            className="absolute z-20 pointer-events-none"
            style={{
              bottom: "calc(100% + 3px)",
              left: tip.arrowX,
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "7px solid transparent",
              borderRight: "7px solid transparent",
              borderTop: "7px solid var(--tooltip)",
            }}
          />
        </>
      )}

      {/* 가로 슬라이드 영역 */}
      <div
        ref={scRef}
        onScroll={() => { updateEdges(); setTip(null); }}
        className="composer-chips-scroll flex items-center gap-1.5 overflow-x-auto"
        style={{ scrollbarWidth: "none", flexWrap: "nowrap", WebkitOverflowScrolling: "touch" }}
      >
        <button data-tutorial="attach" className="bg-white border border-[#e2e8f0] rounded-full size-[32px] flex items-center justify-center shrink-0" aria-label="파일 첨부"><IconAttach /></button>
        <button data-tutorial="skill" className="bg-[#eff6ff] border border-[rgba(79,123,255,0.25)] rounded-full size-[32px] flex items-center justify-center shrink-0" aria-label="스킬"><IconSparkle /></button>

        {/* 양식 업로드 — 홈 컴포저에만. 워크스페이스에서는 숨긴다(구분선도 함께). */}
        {showUpload && (
          <>
            <span className="shrink-0 w-px h-5 bg-[#e2e8f0]" />
            <button
              data-tutorial="upload"
              {...tipHandlers(CHIP_TOOLTIP.upload)}
              className="rounded-full h-[32px] flex items-center gap-1 px-2.5 shrink-0"
              style={chipStyle(false)}
            >
              <Upload size={13} strokeWidth={1.9} color="#62748e" />
              <span style={{ ...chipText(false), whiteSpace: "nowrap" }}>양식 업로드</span>
            </button>
            <span className="shrink-0 w-px h-5 bg-[#e2e8f0]" />
          </>
        )}

        {/* 자동 프롬프트 — 토글 + 툴팁 */}
        <button
          data-tutorial="auto-prompt"
          {...tipHandlers(CHIP_TOOLTIP.auto)}
          onClick={(e) => { setAutoOn((v) => !v); if (lastPointer.current !== "mouse") showTip(e.currentTarget, CHIP_TOOLTIP.auto, true); }}
          aria-pressed={autoOn}
          className="rounded-full h-[32px] flex items-center gap-1 px-2.5 shrink-0"
          style={chipStyle(autoOn)}
        >
          {autoOn ? <Check size={13} strokeWidth={2.6} color="#4f7bff" /> : <IconAutoPrompt />}
          <span style={{ ...chipText(autoOn), whiteSpace: "nowrap" }}>자동 프롬프트</span>
        </button>

        {/* 원문 사용 — 토글 + 툴팁 */}
        <button
          data-tutorial="doc-source"
          {...tipHandlers(CHIP_TOOLTIP.doc)}
          onClick={(e) => { setDocOn((v) => !v); if (lastPointer.current !== "mouse") showTip(e.currentTarget, CHIP_TOOLTIP.doc, true); }}
          aria-pressed={docOn}
          className="rounded-full h-[32px] flex items-center gap-1 px-2.5 shrink-0"
          style={chipStyle(docOn)}
        >
          {docOn ? <Check size={13} strokeWidth={2.6} color="#4f7bff" /> : <IconDocRef />}
          <span style={{ ...chipText(docOn), whiteSpace: "nowrap" }}>원문 사용</span>
        </button>
      </div>

      {/* 가려진 칩이 있음을 알리는 페이드 */}
      {edge.left && (
        <div className="absolute inset-y-0 left-0 w-6 pointer-events-none"
          style={{ background: "linear-gradient(to right, white, rgba(255,255,255,0))" }} />
      )}
      {edge.right && (
        <div className="absolute inset-y-0 right-0 w-6 pointer-events-none"
          style={{ background: "linear-gradient(to left, white, rgba(255,255,255,0))" }} />
      )}
    </div>
  );
}

/**
 * 컴포저 본문 영역 높이 — 접힘 / 펼침.
 *
 * 카드 전체 높이는 여기에 칩 줄과 테두리가 더해진 값이다(접힘 144 / 펼침 680).
 * 카드가 아니라 본문 영역의 높이를 바꾼다. 양쪽 다 확정값이라야 height 전이가 걸리고,
 * 카드에 auto → 고정px 를 주면 애니메이션이 붙지 않는다.
 */
const COMPOSER_H = { collapsed: 80, expanded: 616 } as const;
/** 확대/축소 전이 시간. 홈과 워크스페이스가 같은 값을 쓴다. */
const COMPOSER_ANIM = "height 200ms ease";

/**
 * 컴포저 카드 껍데기 — 배경·테두리·그림자. 안쪽 여백은 화면마다 달라 각자 둔다.
 *
 * - focus(기본): 파란 테두리로 강조하는 원래 모습. 메인과 각 서비스 화면이 쓴다.
 *   바깥 흰 카드 + 파란 2px 테두리, 안쪽에 80% 흰색 층을 한 겹 더 얹는 두 겹 구성이다.
 * - plain: 워크스페이스 전용. 이미 작업 중인 화면이라 입력창을 파랗게 강조하지 않고
 *   옅은 회색 테두리만 둔다. 파란 테두리가 없으면 흰 배경 위의 80% 흰색 층이
 *   아무 차이도 만들지 않으므로 한 겹으로 둔다.
 */
function ComposerCard({ variant = "focus", children }: { variant?: "focus" | "plain"; children: ReactNode }) {
  if (variant === "plain") {
    return (
      <div
        className="bg-white rounded-[20px]"
        style={{ border: "1px solid #e8ecf2", boxShadow: "0px 2px 20px rgba(0,0,0,0.09)" }}
      >
        {children}
      </div>
    );
  }
  return (
    <div className="bg-white rounded-[20px] border-2 border-[#4f7bff]" style={{ boxShadow: "0px 8px 32px 0px rgba(79,123,255,0.1)" }}>
      <div className="bg-[rgba(255,255,255,0.8)] rounded-[17px] border border-[rgba(223,230,237,0.5)] m-0.5" style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
        {children}
      </div>
    </div>
  );
}

/** 컴포저 우상단 확대/축소 토글. 두 컴포저가 같은 버튼을 쓴다. */
function ComposerExpandToggle({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={expanded ? "입력창 축소" : "입력창 확대"}
      aria-expanded={expanded}
      className="absolute top-2.5 right-2.5 size-8 rounded-[10px] flex items-center justify-center shrink-0"
      style={{ color: "#475569", opacity: 0.45 }}
    >
      {expanded ? <Minimize2 size={16} strokeWidth={1.8} /> : <Maximize2 size={16} strokeWidth={1.8} />}
    </button>
  );
}

/** 컴포저 본문 영역 최소 높이 — 빈 상태의 현재 높이를 그대로 유지한다. */
const COMPOSER_MIN_BODY = 80;
/** 확대 버튼을 눌렀을 때의 본문 높이. 카드 전체로는 680px 이 된다. */
const COMPOSER_EXPANDED_BODY = 616;

function ChatInputBox() {
  const [value, setValue] = useState("");
  // 우상단 확대/축소. 자동 높이와 별개로, 눌러서 한 번에 크게 펼쳐 쓰는 용도다.
  const [expanded, setExpanded] = useState(false);
  const taRef = useRef<HTMLTextAreaElement>(null);
  // 내부 스크롤이 생겼고 아직 맨 아래가 아닐 때만 하단 페이드를 띄운다.
  const [fade, setFade] = useState(false);
  // 접힌 상태에서 상한을 넘겼는지. 여기 걸려야 확대 버튼이 의미가 있다.
  const [overflowing, setOverflowing] = useState(false);

  const syncFade = useCallback(() => {
    const el = taRef.current;
    if (!el) return;
    const canScroll = el.scrollHeight > el.clientHeight + 1;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
    setFade(canScroll && !atBottom);
  }, []);

  /**
   * 높이를 내용에 맞춘다. auto 로 한 번 접었다 scrollHeight 로 다시 펴야
   * 글자를 지웠을 때도 정확히 줄어든다. max-height(CSS 변수)에 걸리면 내부 스크롤로 넘긴다.
   * 전이(transition)는 주지 않는다 — 타이핑 중 높이가 출렁여 보인다.
   */
  const resize = useCallback(() => {
    const el = taRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
    const over = el.scrollHeight > el.clientHeight + 1;
    el.style.overflowY = over ? "auto" : "hidden";
    // 확대 가능 여부는 "접힌 상태에서 넘쳤는가"로만 판단한다.
    // 펼친 상태의 상한(592)으로 재면 거의 항상 false 가 되어 버튼이 사라진다.
    if (!expanded) setOverflowing(over);
    syncFade();
  }, [syncFade, expanded]);

  // 초기 렌더와 값이 바뀔 때(외부 주입 포함) 모두 다시 계산한다.
  // 확대/축소로 상한이 바뀔 때도 같이 다시 잰다.
  useLayoutEffect(() => { resize(); }, [value, expanded, resize]);

  // 폭이 바뀌면 줄바꿈 위치가 달라지고, 브레이크포인트가 넘어가면 max-height 도 바뀐다.
  useEffect(() => {
    const on = () => resize();
    window.addEventListener("resize", on);
    window.addEventListener("orientationchange", on);
    return () => {
      window.removeEventListener("resize", on);
      window.removeEventListener("orientationchange", on);
    };
  }, [resize]);

  /** 모바일·태블릿에서 키보드가 올라오면 입력창이 가리지 않도록 화면 안으로 끌어온다. */
  const keepVisible = useCallback(() => {
    taRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, []);

  useEffect(() => {
    const vv = window.visualViewport;
    if (!vv) return;
    const on = () => {
      if (document.activeElement === taRef.current) keepVisible();
    };
    vv.addEventListener("resize", on);
    return () => vv.removeEventListener("resize", on);
  }, [keepVisible]);

  return (
    <div className="w-full" data-tutorial="composer">
      <ComposerCard>
          {/* 본문 — 빈 상태 높이는 지금과 같고, 3줄째부터 내용만큼 커진다.
              확대 상태에서는 바닥 높이만 크게 잡고, 그 안에서 자동 높이가 그대로 동작한다.
              전이는 min-height 에만 건다. 타이핑으로 바뀌는 건 textarea 높이라 흔들리지 않는다. */}
          <div
            className="relative px-5 pt-4 pb-2"
            style={{
              minHeight: expanded ? COMPOSER_EXPANDED_BODY : COMPOSER_MIN_BODY,
              transition: "min-height 200ms ease",
            }}
          >
            <textarea
              ref={taRef}
              rows={1}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onScroll={syncFade}
              onFocus={keepVisible}
              placeholder={COMPOSER_PLACEHOLDER}
              className="composer-textarea w-full block resize-none bg-transparent outline-none border-0 p-0"
              style={{
                ...f,
                fontWeight: 400,
                fontSize: "var(--composer-ph-size)",
                color: "#0a0a0a",
                lineHeight: 1.6,
                minHeight: 24,
                // 확대 상태에서는 상한을 본문 높이까지 올려, 펼친 만큼 그대로 쓸 수 있게 한다.
                maxHeight: expanded ? COMPOSER_EXPANDED_BODY - 24 : "var(--composer-max-h)",
                paddingRight: 34,
                overflowY: "hidden",
              }}
            />
            {/* 빈 상태나 짧은 입력에서는 펼쳐도 보여줄 게 없다. 자동 높이가 이미 전부 보여주는 구간에서는
                버튼 자체를 내보내지 않는다. 펼친 뒤에는 되돌릴 수 있어야 하므로 계속 남긴다. */}
            {(expanded || overflowing) && (
              <ComposerExpandToggle expanded={expanded} onToggle={() => setExpanded((v) => !v)} />
            )}
            {/* 최대 높이에 걸려 아래에 더 있을 때만 뜨는 페이드 */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: 20,
                right: 20,
                bottom: 8,
                height: 16,
                pointerEvents: "none",
                opacity: fade ? 1 : 0,
                background: "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0.95))",
              }}
            />
          </div>
          <div className="flex items-center gap-1.5 px-3.5 pb-3.5 pt-2">
            <ComposerChips />
            <button className="bg-[#4f7bff] rounded-full size-[32px] flex items-center justify-center shrink-0"><IconSend /></button>
          </div>
      </ComposerCard>
      <style>{`
        .composer-textarea::placeholder { color: #a7b3c7; }
        /* 스크롤바는 숨기고 스크롤은 살린다 */
        .composer-textarea { scrollbar-width: none; }
        .composer-textarea::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

function TemplateCard({ title, isVideo = false, ratio = "66%", onApply, favorited = false }: { title: string; isVideo?: boolean; ratio?: string; onApply?: () => void; favorited?: boolean }) {
  // 즐겨찾기 화면의 카드는 처음부터 즐겨찾기 상태(노란 별)로 표시된다.
  const [isFav, setIsFav] = useState(favorited);
  const [hovered, setHovered] = useState(false);
  // 마지막으로 카드를 건드린 포인터 종류. 모듈 로드 시점의 hover 판정(HAS_HOVER)에 의존하면
  // 기기 에뮬레이션을 켜고 끄거나 마우스·터치를 섞어 쓸 때 값이 어긋나므로 이벤트마다 판단한다.
  const lastPointer = useRef<string>("mouse");

  return (
    <div
      className="group flex flex-col rounded-[14px] overflow-hidden bg-white border border-[#e2e8f0] cursor-pointer"
      // 마우스: 올리면 바로 노출, 벗어나면 숨김
      onPointerEnter={(e) => { if (e.pointerType === "mouse") setHovered(true); }}
      onPointerLeave={(e) => { if (e.pointerType === "mouse") setHovered(false); }}
      onPointerDown={(e) => { lastPointer.current = e.pointerType || "mouse"; }}
      // 터치·펜: hover가 없으므로 탭하면 오버레이(적용 버튼·별)를 토글한다
      onClick={() => { if (lastPointer.current !== "mouse") setHovered((v) => !v); }}
      style={{
        boxShadow: hovered
          ? "0px 8px 24px rgba(0,0,0,0.13)"
          : "0px 1px 3px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "box-shadow 180ms ease, transform 180ms ease",
      }}
    >
      <div className="relative w-full bg-[#e8ecf0]" style={{ paddingBottom: ratio }}>
        {/* 딤 오버레이 */}
        <div
          className="absolute inset-0 bg-black/30 rounded-t-[13px]"
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 180ms ease" }}
        />

        {/* 템플릿 적용하기 pill (데스크톱: hover 노출 / 터치: 카드 탭으로 노출) */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ opacity: hovered ? 1 : 0, transition: "opacity 180ms ease", pointerEvents: hovered ? "auto" : "none" }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); onApply?.(); }}
            className="bg-white rounded-full h-7 flex items-center gap-1 px-2.5"
            style={{ boxShadow: "0px 4px 12px rgba(0,0,0,0.18)" }}
          >
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" stroke="#4f7bff" strokeWidth="2.6" strokeLinecap="round" /></svg>
            <span style={{ ...f, fontWeight: 700, fontSize: 11, color: "#0a0a0a", letterSpacing: "-0.3px" }}>템플릿 적용하기</span>
          </button>
        </div>

        {/* 동영상 태그 */}
        {isVideo && (
          <div className="absolute top-2 left-2 bg-[#e7000b] rounded px-1.5 py-0.5 z-10">
            <span style={{ ...f, fontWeight: 700, fontSize: 10, color: "white" }}>동영상</span>
          </div>
        )}

        {/* 즐겨찾기 버튼 */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsFav(!isFav); }}
          className="group/star absolute top-2 right-2 rounded-full size-7 flex items-center justify-center z-10"
          style={{
            background: isFav ? "#ffb900" : "white",
            boxShadow: "0px 2px 6px rgba(0,0,0,0.18)",
            opacity: isFav || hovered ? 1 : 0,
            // 숨겨진 상태에서는 탭이 카드로 전달되어 오버레이가 먼저 노출되도록 한다.
            pointerEvents: isFav || hovered ? "auto" : "none",
            transform: "scale(1)",
            transition: "opacity 180ms ease, background 180ms ease, transform 150ms ease",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.15)"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
        >
          {isFav ? (
            /* 즐겨찾기 ON: 흰색 채워진 별 */
            <svg width="14" height="14" fill="white" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ) : (
            /* 즐겨찾기 OFF: 회색 테두리 별, 버튼 호버 시 노란 채움 미리보기 */
            <span className="relative size-[14px] flex items-center justify-center">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" className="absolute group-hover/star:opacity-0 transition-opacity duration-150">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="#9ca3af" strokeWidth="1.5" />
              </svg>
              <svg width="14" height="14" fill="#ffb900" viewBox="0 0 24 24" className="absolute opacity-0 group-hover/star:opacity-100 transition-opacity duration-150">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </span>
          )}
        </button>
      </div>

      <div style={{ padding: "var(--gap-card-padding)" }}>
        <p className="truncate" style={{ ...f, fontWeight: 600, fontSize: 12, color: "#1e293b", letterSpacing: "-0.25px" }}>{title}</p>
      </div>
    </div>
  );
}

/** 내 작업·즐겨찾기 필터 항목. 순서가 곧 메뉴 순서다. */
const FILTER_OPTIONS = ["전체", "이미지", "랜딩페이지", "동영상", "프레젠테이션", "오디오", "문서"] as const;
type FilterOption = typeof FILTER_OPTIONS[number];

/** 앱 전반의 브랜드 블루 — 선택 항목과 열림 상태 테두리에 쓴다(theme.css 의 --brand 와 같은 값). */
const ACCENT = "#4f7bff";

/**
 * 검색창 + 필터 버튼 (내 작업 · 즐겨찾기 공용).
 *
 * 필터는 전 뷰포트가 같은 앵커 드롭다운이다 — 좁은 화면이라고 바텀시트로 바뀌지 않고,
 * 항목 문구도 선택 표시(액센트 글자색 + 우측 체크)도 폭에 따라 달라지지 않는다.
 * 폭으로 갈리는 것은 항목 높이 하나뿐이고, 그마저 브레이크포인트가 아니라
 * 입력 방식(pointer: coarse — 손가락 48px / 마우스 44px)으로 나눈다. → theme.css 의 .filter-menu
 */
function SearchFilterBar({ placeholder = "검색어를 입력해 주세요", value, onChange }: {
  placeholder?: string;
  /** 선택된 필터. 넘기지 않으면 컴포넌트가 직접 들고 있는다. */
  value?: FilterOption;
  onChange?: (v: FilterOption) => void;
}) {
  const [own, setOwn] = useState<FilterOption>("전체");
  const selected = value ?? own;
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  }, []);

  // 열리면 첫 항목으로 포커스를 옮긴다 — 방향키 이동의 시작점.
  useEffect(() => {
    if (!open) return;
    menuRef.current?.querySelector<HTMLButtonElement>('[role="menuitemradio"]')?.focus();
  }, [open]);

  // Esc로 닫고 포커스는 트리거로 돌려보낸다.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(true); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  /** 방향키(↑↓·Home·End) 이동. Tab 으로 벗어나면 닫는다. */
  const onMenuKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Tab") { setOpen(false); return; }
    const items = Array.from(
      menuRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]') ?? [],
    );
    if (!items.length) return;
    const at = items.indexOf(document.activeElement as HTMLButtonElement);
    const to =
      e.key === "ArrowDown" ? (at + 1) % items.length
        : e.key === "ArrowUp" ? (at - 1 + items.length) % items.length
          : e.key === "Home" ? 0
            : e.key === "End" ? items.length - 1
              : -1;
    if (to < 0) return;
    e.preventDefault();
    items[to].focus();
  };

  const pick = (opt: FilterOption) => {
    if (value === undefined) setOwn(opt);
    onChange?.(opt);
    close(true);
  };

  return (
    <div className="flex items-center gap-2 px-4 pb-3">
      <div className="flex-1 relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2"><IconSearch /></div>
        <input
          className="w-full h-10 bg-white rounded-[14px] pl-9 pr-3 outline-none border border-[#e2e8f0]"
          placeholder={placeholder}
          style={{ ...f, fontWeight: 400, fontSize: 13, color: "#0a0a0a" }}
        />
      </div>
      {/* 메뉴가 이 래퍼 기준으로 버튼 바로 아래에 붙는다 */}
      <div className="relative shrink-0">
        <button
          ref={triggerRef}
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="h-10 bg-white rounded-[14px] flex items-center gap-1.5 px-3"
          style={{ border: `1px solid ${open ? ACCENT : "#e2e8f0"}`, transition: "border-color 120ms ease" }}
        >
          <IconFilter color={open ? ACCENT : "#334155"} />
          <span style={{ ...f, fontWeight: 600, fontSize: 13, color: open ? ACCENT : "#334155" }}>필터</span>
        </button>

        {open && (
          <>
            <div className="fixed inset-0 z-50" onClick={() => close(false)} />
            <div ref={menuRef} role="menu" aria-label="필터" onKeyDown={onMenuKeyDown} className="filter-menu">
              {FILTER_OPTIONS.map((opt) => {
                const active = opt === selected;
                return (
                  <button
                    key={opt}
                    type="button"
                    role="menuitemradio"
                    aria-checked={active}
                    onClick={() => pick(opt)}
                    className="filter-menu-item"
                  >
                    <span
                      className="filter-menu-label"
                      style={{ ...f, fontWeight: active ? 700 : 500, color: active ? ACCENT : "#1e293b" }}
                    >
                      {opt}
                    </span>
                    {active && (
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" className="shrink-0" aria-hidden="true">
                        <path d="M5 12l5 5L19 7" stroke={ACCENT} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function FormsCard({ title, category, count, date, onClick }: { title: string; category: string; count: number; date: string; onClick?: () => void }) {
  return (
    <button type="button" onClick={onClick}
      className="w-full text-left bg-white rounded-[18px] px-4 pt-4 pb-[18px] border border-[#ebebf0]"
      style={{ boxShadow: "0px 1px 4px rgba(0,0,0,0.05)", cursor: onClick ? "pointer" : "default" }}>
      {/* 상단: 아이콘 + 빈칸 배지 */}
      <div className="flex items-start justify-between mb-3">
        <div className="size-[52px] rounded-[14px] bg-[#fff7ed] flex items-center justify-center">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="#f59e0b" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M14 2v6h6" stroke="#f59e0b" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M9 13h6M9 17h4" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex items-center gap-1">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" stroke="#b0bec5" strokeWidth="1.5" />
            <path d="M9 12l2 2 4-4" stroke="#b0bec5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ ...f, fontWeight: 500, fontSize: 13, color: "#b0bec5" }}>{count} 빈칸</span>
        </div>
      </div>
      {/* 제목 */}
      <p style={{ ...f, fontWeight: 700, fontSize: 16, color: "#0a0a0a", letterSpacing: "-0.4px", lineHeight: 1.35, marginBottom: 8 }}>{title}</p>
      {/* 카테고리 태그 */}
      <div className="inline-flex items-center px-2.5 py-1 rounded-full mb-4" style={{ background: "#f1f5f9" }}>
        <span style={{ ...f, fontWeight: 500, fontSize: 12, color: "#64748b" }}>{category}</span>
      </div>
      {/* 날짜 */}
      <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#b0bec5" }}>{date}</p>
    </button>
  );
}

/**
 * 서식 목록.
 *
 * 필터칩·정렬·스크롤 위치는 App 이 들고 있다. 서식 채우기 화면으로 넘어가면
 * 이 컴포넌트는 언마운트되므로, 내부 state 로 두면 목록 복귀 시 전부 초기화된다.
 */
function FormsAIScreen({ activeTab, onTabChange, sortOption, onSortChange, scrollTopRef, onOpenForm }: {
  activeTab: number;
  onTabChange: (i: number) => void;
  sortOption: SortOption;
  onSortChange: (s: SortOption) => void;
  /** 스크롤 위치 보관함. 언마운트되어도 App 의 ref 에 남는다. */
  scrollTopRef: { current: number };
  onOpenForm: (formId: string, title: string) => void;
}) {
  const [sortSheetOpen, setSortSheetOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const sentinelRef = React.useRef<HTMLDivElement>(null);
  const mainRef = React.useRef<HTMLElement>(null);
  const sortTriggerRef = React.useRef<HTMLButtonElement>(null);
  const sortActive = sortOption !== "인기순";
  const filterTabs = ["전체", "외국인 비자 서식", "법무 서식", "관공서 양식"];

  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // 페인트 전에 복원해야 목록이 맨 위에서 튀지 않는다.
  useLayoutEffect(() => {
    if (mainRef.current) mainRef.current.scrollTop = scrollTopRef.current;
  }, [scrollTopRef]);

  return (
    <>
    <main ref={mainRef} onScroll={(e) => { scrollTopRef.current = e.currentTarget.scrollTop; }}
      className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      {/* 히어로(헤드라인·부제·입력창) — 태블릿에서만 --svc-hero-max(720px) 축을 따른다 */}
      <div className="w-full mx-auto" style={{ maxWidth: "var(--svc-hero-max)", paddingTop: "var(--gap-hero-top)", paddingLeft: "var(--gap-screen-x)", paddingRight: "var(--gap-screen-x)" }}>
        <p className="text-center leading-[1.3]" style={{ ...f, fontWeight: 700, fontSize: "var(--svc-title-size)", letterSpacing: "var(--svc-title-tracking)", wordBreak: "keep-all", marginBottom: "var(--gap-title-sub)" }}>
          <span style={{ color: "#4f7bff" }}>서식</span>
          <span style={{ color: "#0a0a0a" }}>, 한 줄이면 충분해요</span>
        </p>
        <p className="text-center" style={{ ...f, fontWeight: 500, fontSize: "var(--svc-sub-size)", color: SUBTITLE_COLOR, letterSpacing: "-0.3px", lineHeight: 1.6, wordBreak: "keep-all", marginBottom: "var(--gap-sub-composer)" }}>
          {SERVICE_COPY.forms}
        </p>
        <ChatInputBox />
      </div>

      <div ref={sentinelRef} style={{ marginTop: "var(--gap-composer-chips)", height: 1 }} />

      {/* 필터 바 */}
      <div className="flex items-center" style={{ position: "sticky", top: 0, zIndex: 20, background: "#f8fafc", height: 44, borderBottom: stuck ? "1px solid #e2e8f0" : "1px solid transparent", transition: "border-color 150ms ease" }}>
        <div className="flex-1 overflow-x-auto flex items-center" style={{ scrollbarWidth: "none", height: "100%" }}>
          <div className="flex items-center shrink-0" style={{ gap: 8, paddingLeft: "var(--gap-screen-x)", paddingRight: 4 }}>
            {filterTabs.map((tab, i) => (
              <button key={tab} onClick={() => onTabChange(i)} className="shrink-0 h-9 rounded-full px-4 flex items-center"
                style={{ background: i === activeTab ? "#0a0a0a" : "white", border: i === activeTab ? "none" : "1px solid #e2e8f0" }}>
                <span style={{ ...f, fontWeight: 600, fontSize: 13, color: i === activeTab ? "white" : "#334155", whiteSpace: "nowrap" }}>{tab}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center shrink-0" style={{ position: "relative", paddingRight: 12 }}>
          <div style={{ position: "absolute", left: -28, top: 0, width: 28, height: "100%", background: "linear-gradient(to right, transparent, #f8fafc)", pointerEvents: "none" }} />
          <button className="flex items-center justify-center" style={{ width: 36, height: 36 }}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="#334155" strokeWidth="1.8" /><path d="M20 20L16.5 16.5" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" /></svg>
          </button>
          {/* 정렬 — 팝오버가 이 래퍼 기준으로 아래에 붙는다(모바일은 바텀시트라 무관) */}
          <div style={{ position: "relative" }}>
            <button
              ref={sortTriggerRef}
              aria-label="정렬"
              aria-haspopup="menu"
              aria-expanded={sortSheetOpen}
              className="flex items-center justify-center relative rounded-[10px]"
              style={{ width: 36, height: 36, background: sortSheetOpen ? "#e8edf3" : "transparent", transition: "background-color 120ms ease" }}
              onClick={() => setSortSheetOpen((v) => !v)}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" /></svg>
              {sortActive && <span style={{ position: "absolute", top: 5, right: 5, width: 6, height: 6, borderRadius: "50%", background: "#4f7bff" }} />}
            </button>
            {sortSheetOpen && (
              <SortMenu selected={sortOption} onSelect={onSortChange} onClose={() => setSortSheetOpen(false)} triggerRef={sortTriggerRef} />
            )}
          </div>
        </div>
      </div>

      {/* 서식 개수 */}
      <div style={{ padding: "var(--gap-chips-grid) var(--gap-screen-x) 12px" }}>
        <span style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#90a1b9" }}>134개의 서식</span>
      </div>

      {/* 서식 카드 목록 — 모바일 1열, 768px 이상 2열 */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 14, padding: `0 var(--gap-screen-x) var(--gap-grid-bottom)` }}>
        {formsCards.map((card) => (
          <FormsCard key={card.id} {...card} onClick={() => onOpenForm(card.id, card.title)} />
        ))}
      </div>
    </main>

    </>
  );
}

// ─── 화면 컴포넌트 ────────────────────────────────────────────────────────────

function HomeScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  // 태블릿에서는 푸터가 화면 하단 고정이 아니라 콘텐츠 흐름 끝에 와야 하므로
  // 셸(App)이 아니라 스크롤 컨테이너인 이 main 안에서 렌더한다.
  const isTabletRange = useIsTabletRange();
  return (
    <main
      className="flex-1 flex flex-col pb-6 overflow-y-auto"
      style={{ scrollbarWidth: "none", paddingLeft: "var(--gap-screen-x)", paddingRight: "var(--gap-screen-x)" }}
    >
      {/* 비율 스페이서 — 모바일·데스크톱 배치용. 태블릿에서는 CSS 로 숨기고 중앙 정렬로 대체한다. */}
      <div className="home-spacer flex-[2_0_0] min-h-[24px] max-h-[72px]" />
      {/* .home-stack — 모바일·데스크톱에서는 display:contents 라 아래 두 블록이 main 의 flex 흐름에
          그대로 참여한다(기존 배치 유지). 태블릿에서만 720px 축의 세로 중앙 정렬 컨테이너가 된다. */}
      <div className="home-stack">
        {/* Heading */}
        <div className="home-heading text-center">
          <p className="leading-[1.25] whitespace-nowrap" style={{ ...f, fontWeight: 700, fontSize: "var(--hero-title-size)", letterSpacing: "var(--hero-title-tracking)" }}>
            <span style={{ color: "#4f7bff" }}>딸깍</span>
            <span style={{ color: "#0a0a0a" }}> 한 번이면, 작업은 더 빠르게</span>
          </p>
          <p className="home-sub" style={{ ...f, fontWeight: 500, fontSize: "var(--hero-sub-size)", color: SUBTITLE_COLOR, letterSpacing: "-0.3px", lineHeight: 1.6, wordBreak: "keep-all" }}>
            이미지, 문서, 발표자료, 검수까지 필요한 AI 작업을 한 곳에서.
          </p>
        </div>
        {/* 프롬프트 입력창 + 카테고리 공통 컨테이너.
            두 영역 모두 width:100%로 이 컨테이너를 채우므로 좌우 정렬선이 항상 일치한다.
            flex 값은 .home-body 로 옮겼다(태블릿에서 늘어나지 않게 덮어쓰기 위함). */}
        <div className="home-body w-full mx-auto flex flex-col" style={{ maxWidth: "var(--home-container)" }}>
          <ChatInputBox />
          <div className="home-spacer flex-[1_0_0] min-h-[20px] max-h-[40px]" />
          {/* Categories — <1200px: 4열(태블릿 전 구간 4열 x 2행), ≥1200px: 8열 */}
          <div data-tutorial="categories" className="home-grid grid grid-cols-4 wide:grid-cols-8 gap-x-3 gap-y-5">
            {homeCategories.map((cat) => (
              <button key={cat.label} onClick={() => onNavigate(cat.screen)} className="flex flex-col items-center gap-2.5">
                <div className="bg-[#f1f5f9] rounded-full flex items-center justify-center shrink-0"
                  style={{ width: "var(--cat-circle)", height: "var(--cat-circle)", filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.04))" }}>
                  {cat.icon}
                </div>
                <span className="text-center w-full" style={{ ...f, fontWeight: 600, fontSize: "var(--cat-label-size)", color: "#334155", letterSpacing: "-0.25px", lineHeight: 1.3 }}>{cat.label}</span>
              </button>
            ))}
          </div>
          <div className="home-spacer flex-[1_0_0] min-h-[16px] max-h-[32px]" />
        </div>
      </div>
      {isTabletRange && <Footer />}
    </main>
  );
}

const SORT_OPTIONS = ["인기순", "최신순", "이름순"] as const;
type SortOption = typeof SORT_OPTIONS[number];

/**
 * 정렬 메뉴 — 인기순 / 최신순 / 이름순.
 *
 * 표현은 전 뷰포트가 같다: 체크 아이콘이 글자 왼쪽, 선택 항목도 같은 글자색
 * (선택 표시는 체크 하나로 끝낸다), 섹션 레이블 없음, 항목 높이 48px.
 * 담는 그릇만 폭에 따라 갈린다 — 600px 미만은 바텀시트(트리거가 화면 위쪽이라
 * 한 손으로 닿지 않는다), 그 이상은 트리거에 앵커된 팝오버. 분기는 theme.css 의
 * .sort-menu 미디어쿼리가 전부라 컴포넌트는 하나뿐이다.
 *
 * 트리거를 감싸는 요소가 position:relative 여야 팝오버가 그 아래에 붙는다.
 */
function SortMenu({ selected, onSelect, onClose, triggerRef }: {
  selected: SortOption;
  onSelect: (v: SortOption) => void;
  onClose: () => void;
  /** 닫힐 때 포커스를 되돌릴 트리거 버튼 */
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const menuRef = React.useRef<HTMLDivElement>(null);

  const close = React.useCallback((returnFocus: boolean) => {
    onClose();
    if (returnFocus) triggerRef.current?.focus();
  }, [onClose, triggerRef]);

  // 열리면 첫 항목으로 포커스를 옮긴다 — 방향키 이동의 시작점.
  React.useEffect(() => {
    menuRef.current?.querySelector<HTMLButtonElement>('[role="menuitemradio"]')?.focus();
  }, []);

  // Esc로 닫고 포커스는 트리거로 돌려보낸다.
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(true); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  /** 방향키(↑↓·Home·End) 이동. Tab 으로 벗어나면 닫는다. */
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Tab") { onClose(); return; }
    const items = Array.from(
      menuRef.current?.querySelectorAll<HTMLButtonElement>('[role="menuitemradio"]') ?? [],
    );
    if (!items.length) return;
    const at = items.indexOf(document.activeElement as HTMLButtonElement);
    const to =
      e.key === "ArrowDown" ? (at + 1) % items.length
        : e.key === "ArrowUp" ? (at - 1 + items.length) % items.length
          : e.key === "Home" ? 0
            : e.key === "End" ? items.length - 1
              : -1;
    if (to < 0) return;
    e.preventDefault();
    items[to].focus();
  };

  return (
    <>
      <div className="sort-menu-backdrop" onClick={() => close(false)} />
      <div ref={menuRef} role="menu" aria-label="정렬" onKeyDown={onKeyDown} className="sort-menu">
        {/* 바텀시트일 때만 보이는 손잡이 */}
        <div className="sort-menu-handle" />
        {SORT_OPTIONS.map((opt) => {
          const active = opt === selected;
          return (
            <button
              key={opt}
              type="button"
              role="menuitemradio"
              aria-checked={active}
              onClick={() => { onSelect(opt); close(true); }}
              className="sort-menu-item"
            >
              <span className="sort-menu-check">
                {active && (
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12l5 5L19 7" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="sort-menu-label" style={{ ...f, fontWeight: active ? 600 : 500 }}>
                {opt}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}

function AIAgentScreen({ title, category, desc, filterTabs, cards, cardRatio = "66%", wsCategory, onWorkspace }: {
  title: string; category: string;
  /** 헤드라인 아래 부제. 문구는 SERVICE_COPY 에서 가져온다. */
  desc: string;
  filterTabs: string[];
  cards: { title: string }[];
  cardRatio?: string;
  wsCategory?: WorkspaceCategory;
  /** 템플릿 적용 — 템플릿명과 함께 진입 시점의 필터 탭 라벨(워드·한글·엑셀·논문·영상…)을 넘긴다.
      이 값이 결과물의 확장자와 뷰어 상단바 구성을 결정한다. */
  onWorkspace?: (templateName: string, tabLabel: string) => void;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [sortOption, setSortOption] = useState<SortOption>("인기순");
  const [sortSheetOpen, setSortSheetOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const sentinelRef = React.useRef<HTMLDivElement>(null);
  const sortTriggerRef = React.useRef<HTMLButtonElement>(null);

  const sortActive = sortOption !== "인기순";
  const q = query.trim();
  const visibleCards = q ? cards.filter((c) => c.title.includes(q)) : cards;

  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setStuck(!e.isIntersecting),
      { threshold: 0, rootMargin: "0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      {/* Hero */}
      {/* 히어로(헤드라인·부제·입력창) — 태블릿에서만 --svc-hero-max(720px) 축을 따른다 */}
      <div className="w-full mx-auto" style={{ maxWidth: "var(--svc-hero-max)", paddingTop: "var(--gap-hero-top)", paddingLeft: "var(--gap-screen-x)", paddingRight: "var(--gap-screen-x)" }}>
        <p className="text-center leading-[1.3]" style={{ ...f, fontWeight: 700, fontSize: "var(--svc-title-size)", letterSpacing: "var(--svc-title-tracking)", wordBreak: "keep-all", marginBottom: "var(--gap-title-sub)" }}>
          <span style={{ color: "#4f7bff" }}>{category}</span>
          <span style={{ color: "#0a0a0a" }}>{title}</span>
        </p>
        <p className="text-center" style={{ ...f, fontWeight: 500, fontSize: "var(--svc-sub-size)", color: SUBTITLE_COLOR, letterSpacing: "-0.3px", lineHeight: 1.6, wordBreak: "keep-all", marginBottom: "var(--gap-sub-composer)" }}>
          {desc}
        </p>
        <ChatInputBox />
      </div>

      {/* sticky sentinel — sits just above the filter bar */}
      <div ref={sentinelRef} style={{ marginTop: "var(--gap-composer-chips)", height: 1 }} />

      {/* Filter bar — sticky */}
      <div
        className="flex items-center"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "#f8fafc",
          height: 44,
          borderBottom: stuck ? "1px solid #e2e8f0" : "1px solid transparent",
          transition: "border-color 150ms ease",
        }}
      >
        {searchOpen ? (
          /* 검색 입력 모드 — 검색 아이콘 탭 시 펼쳐짐 */
          <div className="flex-1 flex items-center gap-2" style={{ paddingLeft: "var(--gap-screen-x)", paddingRight: 12 }}>
            <div className="flex-1 relative">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" stroke="#94a3b8" strokeWidth="1.8" />
                  <path d="M20 20L16.5 16.5" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="템플릿 검색..."
                className="w-full h-9 bg-white rounded-full pl-9 pr-3 outline-none border border-[#e2e8f0]"
                style={{ ...f, fontWeight: 500, fontSize: 13, color: "#0a0a0a" }}
              />
            </div>
            <button onClick={() => { setSearchOpen(false); setQuery(""); }}
              className="flex items-center justify-center shrink-0" style={{ width: 36, height: 36 }}>
              <XIcon size={19} color="#475569" />
            </button>
          </div>
        ) : (
          <>
            {/* 가로 스크롤 칩 영역 */}
            <div className="flex-1 overflow-x-auto flex items-center" style={{ scrollbarWidth: "none", height: "100%" }}>
              <div className="flex items-center shrink-0" style={{ gap: 8, paddingLeft: "var(--gap-screen-x)", paddingRight: 4 }}>
                {filterTabs.map((tab, i) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(i)}
                    className="shrink-0 h-9 rounded-full px-4 flex items-center"
                    style={{
                      background: i === activeTab ? "#0a0a0a" : "white",
                      border: i === activeTab ? "none" : "1px solid #e2e8f0",
                    }}
                  >
                    <span style={{ ...f, fontWeight: 600, fontSize: 13, color: i === activeTab ? "white" : "#334155", whiteSpace: "nowrap" }}>{tab}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 고정 아이콘 영역 (페이드 + 아이콘) */}
            <div className="flex items-center shrink-0" style={{ position: "relative", paddingRight: 12 }}>
              {/* 칩 영역 → 투명 그라데이션 페이드 */}
              <div style={{
                position: "absolute",
                left: -28,
                top: 0,
                width: 28,
                height: "100%",
                background: "linear-gradient(to right, transparent, #f8fafc)",
                pointerEvents: "none",
              }} />
              {/* 검색 아이콘 → 검색 입력 펼치기 */}
              <button onClick={() => setSearchOpen(true)} className="flex items-center justify-center" style={{ width: 36, height: 36 }}>
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="7" stroke="#334155" strokeWidth="1.8" />
                  <path d="M20 20L16.5 16.5" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
              {/* 정렬 아이콘 (배지 포함) — 팝오버가 이 래퍼 기준으로 아래에 붙는다 */}
              <div style={{ position: "relative" }}>
                <button
                  ref={sortTriggerRef}
                  aria-label="정렬"
                  aria-haspopup="menu"
                  aria-expanded={sortSheetOpen}
                  className="flex items-center justify-center relative rounded-[10px]"
                  style={{ width: 36, height: 36, background: sortSheetOpen ? "#e8edf3" : "transparent", transition: "background-color 120ms ease" }}
                  onClick={() => setSortSheetOpen((v) => !v)}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M4 6h16M7 12h10M10 18h4" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                  {sortActive && (
                    <span style={{
                      position: "absolute", top: 5, right: 5,
                      width: 6, height: 6, borderRadius: "50%",
                      background: "#4f7bff",
                    }} />
                  )}
                </button>
                {sortSheetOpen && (
                  <SortMenu selected={sortOption} onSelect={setSortOption} onClose={() => setSortSheetOpen(false)} triggerRef={sortTriggerRef} />
                )}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Card grid */}
      {visibleCards.length > 0 ? (
        <div
          data-tutorial="template-grid"
          /* 모바일 2열, 태블릿(768~1199px) 3열, 1200px 이상 4열 — 즐겨찾기 화면과 동일한 기준.
             카드 비율(cardRatio)은 폭에 맞춰 그대로 유지된다 */
          className="grid grid-cols-2 md:max-wide:grid-cols-3 wide:grid-cols-4"
          style={{
            gap: "var(--gap-card-y) var(--gap-card-x)",
            padding: `var(--gap-chips-grid) var(--gap-screen-x) var(--gap-grid-bottom)`,
          }}
        >
          {visibleCards.map((card, i) => (
            <TemplateCard key={i} title={card.title} ratio={cardRatio} onApply={wsCategory ? () => onWorkspace?.(card.title, filterTabs[activeTab]) : undefined} />
          ))}
        </div>
      ) : cards.length === 0 ? (
        /* 템플릿 자체가 없는 카테고리 — 준비 중 */
        <div className="flex flex-col items-center justify-center gap-3 px-8" style={{ paddingTop: 72, paddingBottom: 72 }}>
          <svg width="44" height="44" fill="none" viewBox="0 0 24 24">
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" stroke="#cbd5e1" strokeWidth="1.6" strokeLinejoin="round" />
            <path d="M14 3v5h5" stroke="#cbd5e1" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
          <p style={{ ...f, fontWeight: 700, fontSize: 16, color: "#475569", letterSpacing: "-0.3px" }}>준비 중</p>
          <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#94a3b8", textAlign: "center" }}>해당 카테고리의 템플릿을 준비하고 있습니다.</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 px-8" style={{ paddingTop: 48, paddingBottom: 48 }}>
          <p style={{ ...f, fontWeight: 600, fontSize: 14, color: "#64748b" }}>검색 결과가 없어요</p>
          <p style={{ ...f, fontWeight: 400, fontSize: 12.5, color: "#94a3b8", textAlign: "center" }}>'{q}'와 일치하는 템플릿을 찾지 못했어요.</p>
        </div>
      )}
    </main>

    </>
  );
}

function FavoritesScreen() {
  return (
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      {/* Page header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-4">
        <div className="bg-[#eff6ff] rounded-[14px] size-10 flex items-center justify-center shrink-0">
          <IconStarBlue />
        </div>
        <span style={{ ...f, fontWeight: 700, fontSize: 22, color: "#0a0a0a", letterSpacing: "-0.6px" }}>즐겨찾기</span>
      </div>
      <SearchFilterBar />
      {/* Card grid */}
      {/* 카테고리 화면과 동일한 반응형 — 768px 이상 3열, 1200px 이상 4열 */}
      <div className="grid grid-cols-2 md:max-wide:grid-cols-3 wide:grid-cols-4 gap-3 px-4 pb-6">
        {favoritesCards.map((card, i) => (
          <TemplateCard key={i} title={card.title} favorited />
        ))}
      </div>
    </main>
  );
}

function MyWorkScreen() {
  return (
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      {/* Page header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-4">
        <div className="bg-[#eff6ff] rounded-[14px] size-10 flex items-center justify-center shrink-0">
          <IconWorkBlue />
        </div>
        <span style={{ ...f, fontWeight: 700, fontSize: 22, color: "#0a0a0a", letterSpacing: "-0.6px" }}>내 작업</span>
      </div>
      <SearchFilterBar />
      {/* List (흰색 카드 컨테이너 안에 행을 담는다) */}
      <div className="mx-4 mb-6 bg-white rounded-[20px] border border-[#e2e8f0] overflow-hidden"
        style={{ boxShadow: "0px 1px 4px rgba(0,0,0,0.04)" }}>
        {myWorkItems.map((item, i) => {
          const tag = item.tag ? tagMap[item.tag] : null;
          return (
            <div key={i} className="flex items-center gap-2 px-4 py-4"
              style={{ borderBottom: i < myWorkItems.length - 1 ? "1px solid #f1f5f9" : "none" }}>
              {/* 제목 */}
              <span className="truncate flex-1" style={{ ...f, fontWeight: 600, fontSize: 14, color: "#0a0a0a", letterSpacing: "-0.35px" }}>{item.title}</span>
              {/* 태그 배지 (날짜 앞, 우측 정렬) */}
              {tag && (
                <span className="shrink-0 rounded-full px-2 py-0.5" style={{ background: tag.bg }}>
                  <span style={{ ...f, fontWeight: 700, fontSize: 10, color: tag.color }}>{tag.label}</span>
                </span>
              )}
              {/* 날짜 */}
              <span className="shrink-0" style={{ ...f, fontWeight: 400, fontSize: 12.5, color: "#90a1b9", whiteSpace: "nowrap" }}>{item.date}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}

// ─── 크레딧 충전 바텀시트 ────────────────────────────────────────────────────────

const CREDIT_PACKAGES = [
  { amount: 1000, price: "₩1,000" },
  { amount: 5000, price: "₩5,000" },
  { amount: 10000, price: "₩10,000" },
  { amount: 50000, price: "₩50,000", best: true },
  { amount: 100000, price: "₩100,000" },
];

function CreditBottomSheet({ onClose, onHistoryClick }: { onClose: () => void; onHistoryClick: () => void }) {
  const [selected, setSelected] = useState(0);
  const pkg = CREDIT_PACKAGES[selected];

  return (
    <>
      <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 50, background: "rgba(0,0,0,0.35)", animation: "fadeIn 180ms ease" }} />
      <div style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 51, background: "white", borderRadius: "20px 20px 0 0", paddingBottom: "env(safe-area-inset-bottom, 20px)", boxShadow: "0px -4px 24px rgba(0,0,0,0.12)", animation: "slideUp 220ms cubic-bezier(0.32,0.72,0,1)" }}>
        {/* 드래그 핸들 */}
        <div className="flex justify-center pt-3 pb-1">
          <div style={{ width: 36, height: 4, borderRadius: 2, background: "#dfe6ed" }} />
        </div>
        {/* 헤더 — 바텀시트에는 닫기(X)를 두지 않는다.
            위에 그랩 핸들이 있고 바깥(backdrop)을 눌러도 닫히므로 X 는 중복이고,
            원형 면에 담긴 X 가 "크레딧 충전" 제목과 시각적 무게를 나눠 가진다.
            (데스크톱 중앙 모달 CreditModal 의 X 는 그대로 둔다 — 그쪽은 스와이프가 없다) */}
        <div className="flex items-center px-5 pt-2 pb-3">
          <span style={{ ...f, fontWeight: 700, fontSize: 18, color: "#0a0a0a", letterSpacing: "-0.5px" }}>크레딧 충전</span>
        </div>
        {/* 현재 잔액 */}
        <div className="px-5 pb-4">
          <p style={{ ...f, fontWeight: 500, fontSize: 12, color: "#90a1b9", marginBottom: 4 }}>현재 잔액</p>
          <p style={{ ...f, fontWeight: 700, fontSize: 22, color: "#0a0a0a", letterSpacing: "-0.8px" }}>
            {CREDIT_BALANCE.toLocaleString()} <span style={{ fontWeight: 500, fontSize: 14, color: "#737373" }}>크레딧</span>
          </p>
        </div>
        {/* 충전 패키지 */}
        <div className="px-5 pb-2">
          <p style={{ ...f, fontWeight: 600, fontSize: 12, color: "#90a1b9", marginBottom: 10 }}>충전 패키지</p>
          <div className="flex flex-col gap-2.5">
            {CREDIT_PACKAGES.map((pkg, i) => (
              <button key={i} onClick={() => setSelected(i)}
                className="w-full flex items-center justify-between rounded-[14px] px-4 py-3"
                style={{ border: i === selected ? "1.5px solid #4f7bff" : "1.5px solid #e2e8f0", background: i === selected ? "#f0f5ff" : "white" }}>
                <div className="flex items-center gap-2.5">
                  <div className="size-6 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0">
                    <span style={{ ...f, fontWeight: 700, fontSize: 9, color: "#4f7bff" }}>C</span>
                  </div>
                  <span style={{ ...f, fontWeight: 700, fontSize: 15, color: "#0a0a0a", letterSpacing: "-0.4px" }}>
                    {pkg.amount.toLocaleString()} <span style={{ fontWeight: 500, fontSize: 13, color: "#737373" }}>크레딧</span>
                  </span>
                  {pkg.best && (
                    <span className="rounded-full px-2 py-0.5" style={{ background: "#4f7bff", ...f, fontWeight: 700, fontSize: 10, color: "white" }}>BEST</span>
                  )}
                </div>
                <span style={{ ...f, fontWeight: 600, fontSize: 14, color: "#334155" }}>{pkg.price}</span>
              </button>
            ))}
          </div>
        </div>
        {/* 충전 버튼 */}
        <div className="px-5 pt-4 pb-2">
          <button className="w-full h-13 rounded-[14px] flex items-center justify-center" style={{ height: 52, background: "#4f7bff" }}>
            <span style={{ ...f, fontWeight: 700, fontSize: 16, color: "white", letterSpacing: "-0.4px" }}>
              {pkg.price} 충전하기
            </span>
          </button>
        </div>
        <div className="flex justify-center pb-4 pt-2">
          <button onClick={() => { onClose(); onHistoryClick(); }} style={{ ...f, fontWeight: 500, fontSize: 13, color: "#737373" }}>사용 내역 보기 →</button>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
      `}</style>
    </>
  );
}

// ─── 크레딧 충전 — 768px 이상: 중앙 모달 ──────────────────────────────────────
function CreditModal({ onClose, onHistoryClick }: { onClose: () => void; onHistoryClick: () => void }) {
  const [selected, setSelected] = useState(0);
  const pkg = CREDIT_PACKAGES[selected];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.35)", backdropFilter: "blur(6px)", animation: "fadeIn 180ms ease" }}
    >
      <div
        role="dialog"
        aria-label="크레딧 충전"
        onClick={(e) => e.stopPropagation()}
        className="w-full flex flex-col"
        style={{
          maxWidth: 440, background: "white", borderRadius: 20,
          boxShadow: "0px 24px 64px rgba(16,24,40,0.24)",
          animation: "creditModalIn 200ms cubic-bezier(0.32,0.72,0,1)",
          maxHeight: "calc(100dvh - 48px)", overflowY: "auto", scrollbarWidth: "none",
        }}
      >
        {/* 헤더 */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4">
          <span style={{ ...f, fontWeight: 700, fontSize: 20, color: "#0a0a0a", letterSpacing: "-0.5px" }}>크레딧 충전</span>
          <button onClick={onClose} aria-label="닫기" className="size-9 flex items-center justify-center rounded-full bg-[#f1f5f9] shrink-0">
            <IconClose />
          </button>
        </div>
        {/* 현재 잔액 */}
        <div className="px-6 pb-5">
          <p style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#90a1b9", marginBottom: 4 }}>현재 잔액</p>
          <p style={{ ...f, fontWeight: 700, fontSize: 26, color: "#0a0a0a", letterSpacing: "-1px" }}>
            {CREDIT_BALANCE.toLocaleString()} <span style={{ fontWeight: 500, fontSize: 15, color: "#737373" }}>크레딧</span>
          </p>
        </div>
        {/* 충전 패키지 */}
        <div className="px-6">
          <p style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#90a1b9", marginBottom: 10 }}>충전 패키지</p>
          <div className="flex flex-col gap-2.5">
            {CREDIT_PACKAGES.map((p, i) => (
              <button key={i} onClick={() => setSelected(i)} aria-pressed={i === selected}
                className="w-full flex items-center justify-between rounded-[14px] px-4 py-3.5"
                style={{ border: i === selected ? "1.5px solid #4f7bff" : "1.5px solid #e2e8f0", background: i === selected ? "#f0f5ff" : "white" }}>
                <div className="flex items-center gap-2.5">
                  <div className="size-6 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0">
                    <span style={{ ...f, fontWeight: 700, fontSize: 9, color: "#4f7bff" }}>C</span>
                  </div>
                  <span style={{ ...f, fontWeight: 700, fontSize: 15, color: "#0a0a0a", letterSpacing: "-0.4px" }}>
                    {p.amount.toLocaleString()} <span style={{ fontWeight: 500, fontSize: 13, color: "#737373" }}>크레딧</span>
                  </span>
                  {p.best && (
                    <span className="rounded-full px-2 py-0.5" style={{ background: "#eff6ff", ...f, fontWeight: 700, fontSize: 10, color: "#4f7bff" }}>BEST</span>
                  )}
                </div>
                <span style={{ ...f, fontWeight: 600, fontSize: 14, color: "#334155" }}>{p.price}</span>
              </button>
            ))}
          </div>
        </div>
        {/* CTA */}
        <div className="px-6 pt-5">
          <button className="w-full rounded-[14px] flex items-center justify-center" style={{ height: 52, background: "#4f7bff" }}>
            <span style={{ ...f, fontWeight: 700, fontSize: 16, color: "white", letterSpacing: "-0.4px" }}>{pkg.price} 충전하기</span>
          </button>
        </div>
        <div className="flex justify-center pt-4 pb-6">
          <button onClick={() => { onClose(); onHistoryClick(); }} style={{ ...f, fontWeight: 500, fontSize: 13, color: "#737373" }}>사용 내역 보기 →</button>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes creditModalIn { from { transform: scale(0.97); opacity: 0 } to { transform: scale(1); opacity: 1 } }
      `}</style>
    </div>
  );
}

// ─── 알림 화면 ────────────────────────────────────────────────────────────────

const notificationItems = [
  {
    title: "비디오 제작 퍼포먼스 분석",
    body: "요청하신 대용 광고의 Veo 비디오 제작을 완성하였습니다. 영상에 이미지를 활용하여 비디오도 성공적으로 생성되었습니다. 두 개의 각각 비디오도 성공적으로 생성하였습니다.",
    time: "1시간 전",
    read: false,
  },
  {
    title: "<uploaded_files> The following files...",
    body: "요청하신 무거운 광고의 정보가 기반의 비디오가 완성 되었습니다. 광고 이미지에 이런저런 파일을 첨부하고 영상을 감상해 보세요.",
    time: "2시간 전",
    read: false,
  },
  {
    title: "이미지 생성 완료",
    body: "요청하신 '발 춤 속 이름들을 담은 정성 생성'이 완료되었습니다. 총 4개의 이미지 작업이 완성되었습니다. 이미지를 확인하고 다운로드해 보세요.",
    time: "3시간 전",
    read: true,
  },
  {
    title: "크레딧 충전 완료",
    body: "5,000 크레딧이 성공적으로 충전되었습니다. 현재 잔액: 11,974,710 크레딧",
    time: "어제",
    read: true,
  },
];

function NotificationsPanel({ onClose, onViewAll }: { onClose: () => void; onViewAll: () => void }) {
  const [items, setItems] = useState(notificationItems);

  const markAllRead = () => setItems(items.map((it) => ({ ...it, read: true })));

  return (
    <>
      {/* 배경 딤 (탭하면 닫힘) */}
      <div
        onClick={onClose}
        style={{ position: "fixed", inset: 0, top: 56, zIndex: 40, background: "rgba(0,0,0,0.25)", animation: "fadeIn 180ms ease" }}
      />
      {/* 패널 */}
      <div
        style={{
          position: "fixed", left: 0, right: 0, top: 56, zIndex: 41,
          background: "white",
          borderRadius: "0 0 20px 20px",
          maxHeight: "calc(100vh - 56px - 72px)",
          display: "flex", flexDirection: "column",
          boxShadow: "0px 8px 32px rgba(0,0,0,0.12)",
          animation: "slideDown 220ms cubic-bezier(0.32,0.72,0,1)",
        }}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3 shrink-0">
          <span style={{ ...f, fontWeight: 700, fontSize: 18, color: "#0a0a0a", letterSpacing: "-0.5px" }}>알림</span>
          <button onClick={markAllRead} style={{ ...f, fontWeight: 500, fontSize: 12, color: "#90a1b9" }}>모두 읽음으로 표시</button>
        </div>

        {/* 알림 목록 (스크롤) */}
        <div className="overflow-y-auto flex-1" style={{ scrollbarWidth: "none" }}>
          <div className="flex flex-col px-4">
            {items.map((item, i) => (
              <div key={i}
                onClick={() => setItems(items.map((it, j) => j === i ? { ...it, read: true } : it))}
                className="flex gap-3 py-3.5 cursor-pointer"
                style={{ borderBottom: i < items.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                {/* 아이콘 */}
                <div className="shrink-0 mt-0.5">
                  <div className="size-8 rounded-full flex items-center justify-center" style={{ background: item.read ? "#f1f5f9" : "#eff6ff" }}>
                    <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
                      <path d={svgPaths.p1c3efea0} stroke={item.read ? "#90a1b9" : "#4f7bff"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      <path d={svgPaths.p25877f40} stroke={item.read ? "#90a1b9" : "#4f7bff"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                {/* 내용 */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-0.5">
                    <p className="flex-1" style={{ ...f, fontWeight: item.read ? 500 : 700, fontSize: 13, color: "#0a0a0a", letterSpacing: "-0.3px", lineHeight: 1.4 }}>{item.title}</p>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span style={{ ...f, fontWeight: 400, fontSize: 11, color: "#b0bec5", whiteSpace: "nowrap" }}>{item.time}</span>
                      {!item.read && <div className="size-2 rounded-full bg-[#4f7bff]" />}
                    </div>
                  </div>
                  <ClampedText
                    text={item.body}
                    lines={2}
                    style={{ ...f, fontWeight: 400, fontSize: 12, color: "#737373", lineHeight: 1.6, letterSpacing: "-0.2px" }}
                    toggleStyle={{ ...f, fontWeight: 600, fontSize: 11.5, color: "#4f7bff", letterSpacing: "-0.2px", marginTop: 4 }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center py-4">
            <button onClick={() => { onClose(); onViewAll(); }} style={{ ...f, fontWeight: 500, fontSize: 13, color: "#90a1b9" }}>과거 알림 전체 보기</button>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideDown { from { transform: translateY(-12px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
      `}</style>
    </>
  );
}

// ─── 알림 — 768px 이상: 벨 버튼에 붙는 드롭다운 팝오버 ────────────────────────
function NotificationsPopover({ anchorRef, onClose, onViewAll }: {
  anchorRef?: React.RefObject<HTMLButtonElement | null>;
  onClose: () => void;
  onViewAll: () => void;
}) {
  const [items, setItems] = useState(notificationItems);
  const [pos, setPos] = useState({ top: 64, right: 16, maxHeight: 560 });
  const boxRef = useRef<HTMLDivElement>(null);

  const markAllRead = () => setItems(items.map((it) => ({ ...it, read: true })));

  // 벨 버튼 기준 배치 — 오른쪽 끝을 벨에 맞추고, 화면 밖으로 나가면 보정한다
  const place = useCallback(() => {
    const W = 400, M = 12;
    const vw = window.innerWidth, vh = window.innerHeight;
    const r = anchorRef?.current?.getBoundingClientRect();
    const top = r ? r.bottom + 8 : 64;
    let right = r ? Math.max(M, vw - r.right) : M;
    if (vw - right - W < M) right = Math.max(M, vw - W - M); // 왼쪽으로 넘칠 때 보정
    setPos({ top, right, maxHeight: Math.max(200, Math.min(560, vh - top - M)) });
  }, [anchorRef]);

  useLayoutEffect(place, [place]);
  useEffect(() => {
    window.addEventListener("resize", place);
    window.addEventListener("orientationchange", place);
    window.addEventListener("scroll", place, true);
    return () => {
      window.removeEventListener("resize", place);
      window.removeEventListener("orientationchange", place);
      window.removeEventListener("scroll", place, true);
    };
  }, [place]);

  // 바깥 클릭 / ESC로 닫힘 (오버레이 없음)
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (boxRef.current?.contains(t)) return;
      if (anchorRef?.current?.contains(t)) return; // 벨은 토글이므로 제외
      onClose();
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, anchorRef]);

  return (
    <div
      ref={boxRef}
      role="dialog"
      aria-label="알림"
      className="fixed z-[60] rounded-2xl flex flex-col overflow-hidden"
      style={{
        top: pos.top, right: pos.right, width: 400, maxHeight: pos.maxHeight,
        background: "white", boxShadow: "0px 12px 32px rgba(16,24,40,0.16)",
        animation: "notifPopIn 160ms cubic-bezier(0.32,0.72,0,1)",
      }}
    >
      {/* 헤더 — 고정 */}
      <div className="shrink-0 flex items-center justify-between px-5 pt-4 pb-3">
        <span style={{ ...f, fontWeight: 700, fontSize: 17, color: "#0a0a0a", letterSpacing: "-0.4px" }}>알림</span>
        <button onClick={markAllRead} style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#4f7bff" }}>모두 읽음으로 표시</button>
      </div>

      {/* 리스트 — 이 영역만 스크롤 */}
      <div className="flex-1 min-h-0 overflow-y-auto" style={{ scrollbarWidth: "thin", borderTop: "1px solid #f1f5f9" }}>
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => setItems(items.map((it, j) => (j === i ? { ...it, read: true } : it)))}
            className="flex gap-3 px-5 py-4 cursor-pointer"
            style={{ borderBottom: i < items.length - 1 ? "1px solid #f1f5f9" : "none", background: item.read ? "white" : "#f8fbff" }}
          >
            <div className="shrink-0 size-10 rounded-full flex items-center justify-center" style={{ background: item.read ? "#f1f5f9" : "#eff6ff" }}>
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p1c3efea0} stroke={item.read ? "#90a1b9" : "#4f7bff"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d={svgPaths.p25877f40} stroke={item.read ? "#90a1b9" : "#4f7bff"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="flex-1 truncate" style={{ ...f, fontWeight: 700, fontSize: 14, color: "#0a0a0a", letterSpacing: "-0.3px" }}>{item.title}</p>
                <div className="flex items-center gap-1.5 shrink-0">
                  <span style={{ ...f, fontWeight: 400, fontSize: 12, color: "#b0bec5", whiteSpace: "nowrap" }}>{item.time}</span>
                  {!item.read && <span className="size-2 rounded-full bg-[#4f7bff]" />}
                </div>
              </div>
              <ClampedText
                text={item.body}
                lines={2}
                style={{ ...f, fontWeight: 400, fontSize: 12.5, color: "#737373", lineHeight: 1.6, letterSpacing: "-0.2px", marginTop: 3 }}
                toggleStyle={{ ...f, fontWeight: 600, fontSize: 12, color: "#4f7bff", letterSpacing: "-0.2px", marginTop: 5 }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* 푸터 — 고정 */}
      <div className="shrink-0 flex justify-center py-3.5" style={{ borderTop: "1px solid #f1f5f9" }}>
        <button onClick={() => { onClose(); onViewAll(); }} style={{ ...f, fontWeight: 600, fontSize: 13.5, color: "#334155" }}>과거 알림 전체 보기</button>
      </div>

      <style>{`@keyframes notifPopIn { from { transform: translateY(-6px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }`}</style>
    </div>
  );
}

// ─── 알림 전체 화면 ───────────────────────────────────────────────────────────

const allNotificationItems = [
  {
    title: "비디오 제작 브리프 분석",
    body: "요청하신 캐릭터 대용 광고의 Veo 비디오 제작을 진행중입니다. 완료 시 이미지를 활용하여 비디오도 성공적으로 생성되었습니다. 두 개의 각각 비디오도 성공적으로 생성하였습니다. 공격적 표현이 확인 후 충전 인력이 잘 완비되었습니다.",
    time: "1시간 전",
    read: false,
  },
  {
    title: "<uploaded_files> The following files...",
    body: "요청하신 무거운 광고의 정보가 기반의 비디오가 완성되었습니다. 마찰을 이렇게 통해 아름다움을 촉추는 지리적인 스스로의 당신 생상을 감상해 보세요!",
    time: "2시간 전",
    read: false,
  },
  {
    title: "<uploaded_files> The following files...",
    body: "요청하신 무거운 광고의 정보가 기반의 비디오가 완성되었습니다. 파공콘 격력 사용이 이전에 이런저런 파일을 첨부하고 영상을 감상해 보세요! 이전에 이런저런 파일을 첨부하고 영상을 감상하세요.",
    time: "2시간 전",
    read: false,
  },
  {
    title: "총추는 리다이라면 영상 제작 요청",
    body: "요청하신 트리배트산 트리배트산 링고를 성공적으로 완료했습니다. 생성된 생상은 지정하신 고성 트레인 파일이 PPTX 등의 파일도 생성이다 포함하여 완성이 되었습니다.",
    time: "24시간 전",
    read: true,
  },
  {
    title: "고양이 막번 이미지 요청",
    body: "요청하신 대용 고양이가 막번을 즐기는 이미지 및 그 생성이 완료되었습니다. 완료된 이미지를 다운로드 혹은 공유할 수 있습니다.",
    time: "22시간 전",
    read: true,
  },
  {
    title: "플랫폼의 2026 제전사 감사",
    body: "제전사의 발 벡터 이러기도 생각이다는 이러기도 벡터로 작업한 PPTX 제전 기입한 반영하여다는 반영됩니다. 이러 테트라 파트의 낙구 부분 생성 사항은 스타일을 스타일이 완성이 잘 반영되었습니다.",
    time: "23시간 전",
    read: true,
  },
];

function NotificationsAllScreen() {
  const [items, setItems] = useState(allNotificationItems);

  const markAllRead = () => setItems(items.map((it) => ({ ...it, read: true })));
  const deleteAll = () => setItems([]);

  return (
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      {/* 본문 읽기 폭 제한 — 태블릿 이상에서 전폭을 쓰면 한 줄이 650px 을 넘어가 읽기 힘들고,
          본문이 2줄 안에 다 들어가버려 2줄 말줄임·더보기가 아무 일도 하지 않게 된다.
          640 은 본문 컬럼이 약 528px 이 되는 값 — 한 줄 55자 안팎의 읽기 좋은 길이다. */}
      <div className="flex-1 flex flex-col w-full mx-auto" style={{ maxWidth: 640 }}>
      {/* 헤더 */}
      <div className="flex items-center justify-between px-4 pt-5 pb-4">
        <span style={{ ...f, fontWeight: 700, fontSize: 20, color: "#0a0a0a", letterSpacing: "-0.5px" }}>알림</span>
        <div className="flex items-center gap-2">
          <button onClick={markAllRead}
            className="h-8 px-3 rounded-full border border-[#e2e8f0]"
            style={{ ...f, fontWeight: 500, fontSize: 12, color: "#334155" }}>
            모두 읽기
          </button>
          <button onClick={deleteAll}
            className="h-8 px-3 rounded-full border border-[#e2e8f0]"
            style={{ ...f, fontWeight: 500, fontSize: 12, color: "#e7000b" }}>
            전체 삭제
          </button>
        </div>
      </div>

      {/* 알림 리스트 */}
      {items.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center gap-3 pb-20">
          <div className="size-14 rounded-full bg-[#f1f5f9] flex items-center justify-center">
            <IconBell />
          </div>
          <p style={{ ...f, fontWeight: 500, fontSize: 14, color: "#90a1b9" }}>알림이 없습니다</p>
        </div>
      ) : (
        <div className="flex flex-col mx-4 mb-6 bg-white rounded-[20px] border border-[#e2e8f0] overflow-hidden"
          style={{ boxShadow: "0px 1px 4px rgba(0,0,0,0.04)" }}>
          {items.map((item, i) => (
            <div key={i}
              onClick={() => setItems(items.map((it, j) => j === i ? { ...it, read: true } : it))}
              className="flex gap-3 px-4 py-4 cursor-pointer"
              style={{
                borderBottom: i < items.length - 1 ? "1px solid #f1f5f9" : "none",
                background: item.read ? "white" : "#fafbff",
              }}>
              {/* 아이콘 */}
              <div className="shrink-0 mt-0.5">
                <div className="size-9 rounded-full flex items-center justify-center"
                  style={{ background: item.read ? "#f1f5f9" : "#eff6ff" }}>
                  <svg width="17" height="17" fill="none" viewBox="0 0 24 24">
                    <path d={svgPaths.p1c3efea0} stroke={item.read ? "#90a1b9" : "#4f7bff"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    <path d={svgPaths.p25877f40} stroke={item.read ? "#90a1b9" : "#4f7bff"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              {/* 내용 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p style={{ ...f, fontWeight: item.read ? 500 : 700, fontSize: 13.5, color: "#0a0a0a", letterSpacing: "-0.35px", lineHeight: 1.4, flex: 1 }}>
                    {item.title}
                  </p>
                  <div className="flex items-center gap-1.5 shrink-0 mt-0.5">
                    <span style={{ ...f, fontWeight: 400, fontSize: 11, color: "#b0bec5", whiteSpace: "nowrap" }}>{item.time}</span>
                    {!item.read && <div className="size-2 rounded-full bg-[#4f7bff] shrink-0" />}
                  </div>
                </div>
                <ClampedText
                  text={item.body}
                  lines={2}
                  style={{ ...f, fontWeight: 400, fontSize: 12.5, color: "#737373", lineHeight: 1.65, letterSpacing: "-0.2px" }}
                  toggleStyle={{ ...f, fontWeight: 600, fontSize: 12, color: "#4f7bff", letterSpacing: "-0.2px", marginTop: 5 }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </main>
  );
}

// ─── 크레딧 사용 내역 화면 ───────────────────────────────────────────────────────

// 데스크톱(CardnewsWorkspaceV2)의 크레딧 사용 내역과 동일한 정의 — 탭 2종 · 유형 9종 · 목데이터
const USAGE_FILTER = "사용 내역";
const BALANCE_FILTER = "환불·충전 내역";
const CREDIT_FILTERS = [USAGE_FILTER, BALANCE_FILTER];

// 사용 유형 7가지 + 충전/환불 유형
const USAGE_TYPES = ["이미지", "랜딩페이지", "동영상", "프레젠테이션", "오디오", "문서", "서식"] as const;
const BALANCE_TYPES = ["충전", "환불"] as const;
type CreditType = (typeof USAGE_TYPES)[number] | (typeof BALANCE_TYPES)[number];

const CREDIT_BALANCE = 11974710;
const CREDIT_MONTHLY_USED = 2480;

const creditHistoryData: {
  date: string;
  type: CreditType;
  details: string;
  change: number;
  balance: number;
}[] = [
  { date: "2026. 06. 22. 오전 10:02:11", type: "환불",         details: "동영상 생성 실패 크레딧 환불",   change: 1780,   balance: 11974710 },
  { date: "2026. 06. 22. 오전 9:49:06",  type: "이미지",       details: "월급 빼고 다 오르는 물가 카드뉴스", change: -69,   balance: 11972930 },
  { date: "2026. 06. 15. 오후 5:13:59",  type: "프레젠테이션", details: "2026 금융 트렌드 PPT 생성",      change: -185,   balance: 11972999 },
  { date: "2026. 06. 15. 오후 5:13:36",  type: "문서",         details: "졸업논문 템플릿 작성 안내",       change: -74,    balance: 11973184 },
  { date: "2026. 06. 15. 오후 5:13:33",  type: "동영상",       details: "브랜드 홍보 숏폼 영상 생성",      change: -106,   balance: 11973258 },
  { date: "2026. 06. 15. 오후 5:13:29",  type: "이미지",       details: "이미지 템플릿 편집 정보",         change: -224,   balance: 11973364 },
  { date: "2026. 06. 15. 오후 5:12:58",  type: "랜딩페이지",   details: "딸깍넷 랜딩페이지 생성",          change: -122,   balance: 11973588 },
  { date: "2026. 06. 15. 오후 5:12:47",  type: "서식",         details: "세금계산서 템플릿 작성 내용 문의", change: -98,   balance: 11973710 },
  { date: "2026. 06. 15. 오후 5:12:40",  type: "오디오",       details: "브랜드 BGM 30s 생성",             change: -119,   balance: 11973808 },
  { date: "2026. 06. 15. 오후 5:12:19",  type: "충전",         details: "크레딧 카드 충전 (VVIP 패키지)",  change: 100000, balance: 11973927 },
  { date: "2026. 06. 15. 오후 5:12:14",  type: "서식",         details: "내용증명서 템플릿 작성 문의",     change: -67,    balance: 11973997 },
];



function CreditHistoryScreen({ onCharge }: { onCharge: () => void }) {
  const [activeTab, setActiveTab] = useState(0);

  // 데스크톱과 동일하게 크레딧 변동 부호로 사용/환불·충전을 가른다
  const filtered = creditHistoryData.filter(it =>
    CREDIT_FILTERS[activeTab] === BALANCE_FILTER ? it.change > 0 : it.change < 0
  );

  return (
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      {/* 페이지 타이틀 */}
      <div className="px-4 pt-5 pb-4">
        <h1 style={{ ...f, fontWeight: 700, fontSize: 24, color: "#0a0a0a", letterSpacing: "-0.8px" }}>크레딧 사용 내역</h1>
      </div>

      {/* 잔액 카드 */}
      <div className="mx-4 mb-4 bg-white rounded-[20px] border border-[#e2e8f0] px-5 py-5"
        style={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.05)" }}>
        <p style={{ ...f, fontWeight: 500, fontSize: 12, color: "#9ca3af", marginBottom: 2 }}>사용 가능한 크레딧</p>
        <div className="flex items-center justify-between gap-3 mt-1">
          <div>
            <p style={{ ...f, fontWeight: 700, fontSize: 28, color: "#0a0a0a", letterSpacing: "-1.1px", lineHeight: 1.1 }}>
              {CREDIT_BALANCE.toLocaleString()}
            </p>
            <p style={{ ...f, fontWeight: 400, fontSize: 12, color: "#9ca3af", marginTop: 5 }}>
              이번 달 사용한 크레딧: <span style={{ fontWeight: 600 }}>{CREDIT_MONTHLY_USED.toLocaleString()}</span>
            </p>
          </div>
          <button onClick={onCharge}
            className="shrink-0 rounded-[12px] px-4 flex items-center gap-1"
            style={{ height: 40, background: "#0a0a0a" }}>
            <span style={{ ...f, fontWeight: 700, fontSize: 13, color: "white", whiteSpace: "nowrap" }}>+ 크레딧 충전</span>
          </button>
        </div>
      </div>

      {/* 필터 탭 + 총 건수 (데스크톱의 CATEGORY FILTERS 행) */}
      <div className="mx-4 mb-3 pb-2 flex items-center justify-between gap-3 border-b border-[#e2e8f0]">
        <ScrollableChips items={CREDIT_FILTERS} activeIndex={activeTab} onChange={setActiveTab} edgeClassName="" className="min-w-0" />
        <span className="shrink-0" style={{ ...f, fontWeight: 700, fontSize: 11, color: "#9ca3af", whiteSpace: "nowrap" }}>
          총 {filtered.length}건
        </span>
      </div>

      {/* 내역 리스트 */}
      <div className="flex flex-col mx-4 mb-6 bg-white rounded-[20px] border border-[#e2e8f0] overflow-hidden"
        style={{ boxShadow: "0px 1px 4px rgba(0,0,0,0.04)" }}>
        {filtered.map((item, i) => {
          const positive = item.change > 0;
          return (
            <div key={i} className="px-4 py-4"
              style={{ borderBottom: i < filtered.length - 1 ? "1px solid #f1f5f9" : "none" }}>
              {/* 1행: 상세 내용 + 크레딧 변동 */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <p className="flex-1" style={{ ...f, fontWeight: 600, fontSize: 14, color: "#3b63f6", letterSpacing: "-0.35px", lineHeight: 1.3 }}>{item.details}</p>
                <span style={{ ...f, fontWeight: 800, fontSize: 15, color: positive ? "#3b63f6" : "#ef4444", letterSpacing: "-0.4px", whiteSpace: "nowrap" }}>
                  {positive ? "+" : ""}{item.change.toLocaleString()}
                </span>
              </div>
              {/* 2행: 유형 뱃지 + 일시 + 잔액 */}
              <div className="flex items-center gap-2">
                <span className="shrink-0 inline-flex items-center rounded px-1.5 py-0.5"
                  style={{
                    ...f, fontWeight: 800, fontSize: 10, letterSpacing: "0.3px",
                    background: positive ? "#eff6ff" : "#f1f5f9",
                    color: positive ? "#3b63f6" : "#475569",
                  }}>
                  {item.type}
                </span>
                <span className="truncate" style={{ ...f, fontWeight: 400, fontSize: 11.5, color: "#9ca3af" }}>{item.date}</span>
                <span className="shrink-0" style={{ ...f, fontWeight: 700, fontSize: 12, color: "#0a0a0a", marginLeft: "auto" }}>
                  {item.balance.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

// ─── 워크스페이스 ────────────────────────────────────────────────────────────

function WsChatInput({ onGenerate }: { onGenerate: () => void }) {
  const [expanded, setExpanded] = useState(false);
  return (
    // 입력창은 콘텐츠 위에 고정으로 떠 있다. 이 띠를 불투명하게 두면 뒤 내용이
    // 가로로 뚝 잘려 보이므로, 반투명 + 배경 블러로 뒤가 살짝 비치게 한다.
    <div
      className="pb-5 pt-2"
      style={{
        background: "rgba(248, 250, 252, 0.72)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {/* 채팅 영역과 같은 정렬 축 — 카드와 입력창의 좌우 끝선이 일치한다 */}
      <div className="mx-auto w-full max-w-[900px] px-4 md:px-6">
      <ComposerCard variant="plain">

        {/* 텍스트 입력 영역 */}
        <div
          className="relative px-4 pt-4 pb-3 overflow-y-auto"
          style={{ height: expanded ? COMPOSER_H.expanded : COMPOSER_H.collapsed, transition: COMPOSER_ANIM }}
        >
          <p style={{ ...f, fontWeight: 400, fontSize: 14, color: "#adb8c9", lineHeight: 1.65, paddingRight: 34 }}>
            {COMPOSER_PLACEHOLDER}
          </p>
          <ComposerExpandToggle expanded={expanded} onToggle={() => setExpanded((v) => !v)} />
        </div>

        {/* 하단 툴바 — 홈 ChatInputBox와 동일한 버튼(가로 스크롤 + 고정 전송 버튼 레이아웃 유지) */}
        <div className="flex items-center px-3 pb-3 gap-2">

          {/* 가로 슬라이드 칩 — 워크스페이스에서는 양식 업로드 없이 기존 구성 유지 */}
          <ComposerChips showUpload={false} />

          {/* 전송 버튼 — 스크롤 밖 고정 (onGenerate 동작 유지) */}
          <button
            onClick={onGenerate}
            className="bg-[#4f7bff] rounded-full size-[32px] flex items-center justify-center shrink-0"
          >
            <IconSend />
          </button>

        </div>
      </ComposerCard>
      </div>
    </div>
  );
}

function WsForm({ category }: { category: WorkspaceCategory }) {
  const [videoMode, setVideoMode] = useState<"ai" | "manual">("ai");
  const color = WS_COLOR[category];

  if (category === "docs") return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-1.5">
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>내용 / 요청사항</label>
        <textarea className="w-full rounded-[12px] border border-[#e2e8f0] bg-white px-3.5 py-3 resize-none outline-none"
          style={{ ...f, fontSize: 13, color: "#0a0a0a", minHeight: 72, lineHeight: 1.6 }}
          placeholder="예: 강제퇴거명령에 대한 이의신청서를 작성해주세요" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>스타일</label>
        <div className="flex gap-2 flex-wrap">
          {["비즈니스", "법률"].map((t) => <button key={t} className="h-8 px-3 rounded-full border-2 border-[#0a0a0a] flex items-center" style={{ ...f, fontSize: 12, fontWeight: 600, color: "#0a0a0a" }}>{t}</button>)}
          {["학술", "일반"].map((t) => <button key={t} className="h-8 px-3 rounded-full border border-[#e2e8f0] flex items-center" style={{ ...f, fontSize: 12, color: "#6b7280" }}>{t}</button>)}
        </div>
      </div>
    </div>
  );

  if (category === "ppt") return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center gap-1 mb-0.5">
        {["주제별", "내용별", "마지막 단계"].map((s, i) => (
          <React.Fragment key={s}>
            {i > 0 && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l4 3-4 3" stroke="#d1d5db" strokeWidth="1.2" strokeLinecap="round"/></svg>}
            <span style={{ ...f, fontSize: 11, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? color : "#9ca3af" }}>{s}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>발표 주제</label>
        <textarea className="w-full rounded-[12px] border border-[#e2e8f0] bg-white px-3.5 py-3 resize-none outline-none"
          style={{ ...f, fontSize: 13, minHeight: 60, lineHeight: 1.6 }} placeholder="예: 2026 AI 트렌드 및 시장 전망" />
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex flex-col gap-1.5">
          <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>톤</label>
          <input className="w-full h-10 rounded-[12px] border border-[#e2e8f0] bg-white px-3 outline-none" style={{ ...f, fontSize: 13 }} placeholder="전문적" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>청중 <span style={{ color: "#9ca3af", fontWeight: 400 }}>(선택)</span></label>
          <input className="w-full h-10 rounded-[12px] border border-[#e2e8f0] bg-white px-3 outline-none" style={{ ...f, fontSize: 13 }} placeholder="예: 투자자" />
        </div>
      </div>
      <details className="border border-[#e2e8f0] rounded-[14px] overflow-hidden">
        <summary className="px-4 py-3 cursor-pointer flex items-center justify-between" style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151", listStyle: "none" }}>
          <span>🎨 브랜드 설정 <span style={{ color: "#9ca3af", fontWeight: 400 }}>(선택)</span></span>
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#9ca3af" strokeWidth="1.4" strokeLinecap="round"/></svg>
        </summary>
        <div className="px-4 pb-4 pt-3 flex flex-col gap-2.5 border-t border-[#f1f5f9]">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1"><label style={{ ...f, fontSize: 12, fontWeight: 600, color: "#374151" }}>주색</label><input className="h-9 rounded-[10px] border border-[#e2e8f0] bg-white px-3 outline-none" style={{ ...f, fontSize: 12 }} placeholder="#2563EB" /></div>
            <div className="flex flex-col gap-1"><label style={{ ...f, fontSize: 12, fontWeight: 600, color: "#374151" }}>강조색</label><input className="h-9 rounded-[10px] border border-[#e2e8f0] bg-white px-3 outline-none" style={{ ...f, fontSize: 12 }} placeholder="#00D488" /></div>
          </div>
          <div className="flex flex-col gap-1"><label style={{ ...f, fontSize: 12, fontWeight: 600, color: "#374151" }}>폰트</label><input className="h-9 rounded-[10px] border border-[#e2e8f0] bg-white px-3 outline-none" style={{ ...f, fontSize: 12 }} placeholder="폰트명 입력" /></div>
        </div>
      </details>
    </div>
  );

  if (category === "video") return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center gap-1 mb-0.5">
        {["주제별", "내용별", "마지막 단계"].map((s, i) => (
          <React.Fragment key={s}>
            {i > 0 && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l4 3-4 3" stroke="#d1d5db" strokeWidth="1.2" strokeLinecap="round"/></svg>}
            <span style={{ ...f, fontSize: 11, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? color : "#9ca3af" }}>{s}</span>
          </React.Fragment>
        ))}
      </div>
      <div>
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151", display: "block", marginBottom: 8 }}>주제</label>
        <div className="flex rounded-[12px] border border-[#e2e8f0] overflow-hidden">
          <button onClick={() => setVideoMode("ai")} className="flex-1 h-10 flex items-center justify-center transition-colors"
            style={{ ...f, fontSize: 13, fontWeight: videoMode === "ai" ? 700 : 500, background: videoMode === "ai" ? "#0a0a0a" : "white", color: videoMode === "ai" ? "white" : "#9ca3af" }}>AI 버전</button>
          <button onClick={() => setVideoMode("manual")} className="flex-1 h-10 flex items-center justify-center transition-colors"
            style={{ ...f, fontSize: 13, fontWeight: videoMode === "manual" ? 700 : 500, background: videoMode === "manual" ? "#0a0a0a" : "white", color: videoMode === "manual" ? "white" : "#9ca3af" }}>그대로 생성</button>
        </div>
        {videoMode === "ai" && <p style={{ ...f, fontSize: 11.5, color: "#9ca3af", marginTop: 6 }}>AI가 주제 한 번 입력으로 나머지를 모두 채워드립니다.</p>}
      </div>
      <div className="flex flex-col gap-1.5">
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>영상 주제</label>
        <textarea className="w-full rounded-[12px] border border-[#e2e8f0] bg-white px-3.5 py-3 resize-none outline-none"
          style={{ ...f, fontSize: 13, minHeight: 56, lineHeight: 1.6 }} placeholder="영상 주제를 입력하세요" />
      </div>
      <div className="flex items-center justify-between bg-white border border-[#e2e8f0] rounded-[12px] px-3.5 h-11">
        <span style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>컷 개수</span>
        <span style={{ ...f, fontSize: 13, color: "#9ca3af" }}>자동</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="flex flex-col gap-1.5"><label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>폰트</label><input className="w-full h-10 rounded-[12px] border border-[#e2e8f0] bg-white px-3 outline-none" style={{ ...f, fontSize: 13 }} /></div>
        <div className="flex flex-col gap-1.5"><label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>주색</label><input className="w-full h-10 rounded-[12px] border border-[#e2e8f0] bg-white px-3 outline-none" style={{ ...f, fontSize: 13 }} placeholder="#383839" /></div>
      </div>
      <div className="flex items-center justify-between bg-white border border-[#e2e8f0] rounded-[12px] px-3.5 h-11">
        <span style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>영상 길이</span>
        <span style={{ ...f, fontSize: 13, color: "#4f7bff", fontWeight: 700 }}>10초</span>
      </div>
      <div className="flex flex-col gap-2">
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>TTS 음성</label>
        {[{ name: "친구", type: "남·성인" }, { name: "준기", type: "남·성인" }].map(({ name, type }) => (
          <div key={name} className="flex items-center justify-between h-11 px-3.5 rounded-[12px] border border-[#e2e8f0] bg-white">
            <div className="flex items-center gap-2"><span style={{ ...f, fontSize: 13, fontWeight: 600, color: "#374151" }}>{name}</span><span style={{ ...f, fontSize: 11, color: "#9ca3af" }}>{type}</span></div>
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12"><path d="M3 6l3 3 3-3" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        ))}
      </div>
    </div>
  );

  if (category === "landing") return (
    <div className="flex flex-col gap-3.5">
      <div className="flex items-center gap-1 mb-0.5">
        {["주제별", "내용별", "마지막 단계"].map((s, i) => (
          <React.Fragment key={s}>
            {i > 0 && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M3 2l4 3-4 3" stroke="#d1d5db" strokeWidth="1.2" strokeLinecap="round"/></svg>}
            <span style={{ ...f, fontSize: 11, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? color : "#9ca3af" }}>{s}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-col gap-1.5">
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>주제 / 서비스 소개</label>
        <textarea className="w-full rounded-[12px] border border-[#e2e8f0] bg-white px-3.5 py-3 resize-none outline-none"
          style={{ ...f, fontSize: 13, minHeight: 80, lineHeight: 1.6 }}
          placeholder="예: 딸깍.net — AI 문서 자동생성 서비스, 누구나 쉽게 전문 문서를 만들 수 있습니다." />
      </div>
      <div className="flex flex-col gap-1.5">
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>스타일 톤 <span style={{ color: "#9ca3af", fontWeight: 400 }}>(선택)</span></label>
        <div className="flex gap-2 flex-wrap">
          {["시네마틱 다크 우주", "클린 모던", "화사한 그라디언트"].map((s, i) => (
            <button key={s} className="h-8 px-3 rounded-full flex items-center"
              style={{ border: i === 0 ? "2px solid #0a0a0a" : "1px solid #e2e8f0", background: i === 0 ? "#0a0a0a" : "white", ...f, fontSize: 12, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? "white" : "#6b7280" }}>
              {s}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  // image
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-1.5">
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>전체 비주얼 설명</label>
        <textarea className="w-full rounded-[12px] border border-[#e2e8f0] bg-white px-3.5 py-3 resize-none outline-none"
          style={{ ...f, fontSize: 13, minHeight: 80, lineHeight: 1.6 }}
          placeholder="예: 전체 벤토 그리드 비주얼 (카드 2개 + 하단 배너) 뷰티 마케팅 이미지 생성..." />
      </div>
      <div className="flex flex-col gap-1.5">
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>카드 1 텍스트 <span style={{ color: "#EF4444", fontSize: 11, fontWeight: 500 }}>필수</span></label>
        <input className="w-full h-10 rounded-[12px] border border-[#e2e8f0] bg-white px-3 outline-none" style={{ ...f, fontSize: 13 }} placeholder="브랜드 & 미디어 마케팅" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>카드 2 텍스트 <span style={{ color: "#9ca3af", fontSize: 11 }}>선택</span></label>
        <input className="w-full h-10 rounded-[12px] border border-[#e2e8f0] bg-white px-3 outline-none" style={{ ...f, fontSize: 13 }} placeholder="SNS 트렌드 분석 리포트" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>하단 배너 텍스트</label>
        <input className="w-full h-10 rounded-[12px] border border-[#e2e8f0] bg-white px-3 outline-none" style={{ ...f, fontSize: 13 }} placeholder="색상 그라디언트 배너 메시지" />
      </div>
    </div>
  );
}

// ── 결과 패널 ──

function DocsResult() {
  const [page, setPage] = useState(1);
  const total = 3;
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-4 flex justify-center" style={{ scrollbarWidth: "none" }}>
        <div className="bg-white rounded-[8px] w-full max-w-[300px] px-7 py-8"
          style={{ boxShadow: "0px 2px 16px rgba(0,0,0,0.1)", minHeight: 380 }}>
          <h2 className="text-center mb-5" style={{ ...f, fontWeight: 800, fontSize: 15, color: "#0a0a0a" }}>합의서</h2>
          <div className="flex flex-col gap-3.5">
            <p style={{ ...f, fontSize: 11.5, color: "#374151", lineHeight: 1.8 }}>본 합의서는 아래 당사자 간의 합의사항을 증명합니다.</p>
            <div>
              <p style={{ ...f, fontWeight: 700, fontSize: 12, color: "#0a0a0a" }}>제 1 조 (목적)</p>
              <p style={{ ...f, fontSize: 11.5, color: "#374151", lineHeight: 1.8, marginTop: 4 }}>이 합의서는 당사자 간 분쟁을 원만히 해결하기 위한 목적으로 작성되었습니다.</p>
            </div>
            <div>
              <p style={{ ...f, fontWeight: 700, fontSize: 12, color: "#0a0a0a" }}>제 2 조 (합의 내용)</p>
              <p style={{ ...f, fontSize: 11.5, color: "#374151", lineHeight: 1.8, marginTop: 4 }}>1. 갑은 을에게 금 5,000,000원을 지급한다.<br />2. 을은 모든 민·형사상 청구를 포기한다.<br />3. 양 당사자는 본 합의 내용을 외부에 공개하지 않는다.</p>
            </div>
            <div>
              <p style={{ ...f, fontWeight: 700, fontSize: 12, color: "#0a0a0a" }}>제 3 조 (이행기한)</p>
              <p style={{ ...f, fontSize: 11.5, color: "#374151", lineHeight: 1.8, marginTop: 4 }}>갑은 합의서 체결일로부터 7일 이내에 위 금액을 을의 계좌로 이체한다.</p>
            </div>
            <div className="border-t border-[#e2e8f0] pt-4">
              <p style={{ ...f, fontSize: 11.5, color: "#374151" }}>2026년 7월 23일</p>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div><p style={{ ...f, fontSize: 11, color: "#9ca3af" }}>갑 (서명)</p><div className="border-b border-[#374151] mt-5" /></div>
                <div><p style={{ ...f, fontSize: 11, color: "#9ca3af" }}>을 (서명)</p><div className="border-b border-[#374151] mt-5" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 px-4 pb-4 flex items-center justify-between border-t border-[#f1f5f9] pt-3">
        <div className="flex items-center gap-3">
          <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
            className="size-8 rounded-full border border-[#e2e8f0] flex items-center justify-center disabled:opacity-30">
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M8.75 10.5L5.25 7l3.5-3.5" stroke="#374151" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </button>
          <span style={{ ...f, fontSize: 13, color: "#374151", fontWeight: 500 }}>{page} / {total}</span>
          <button onClick={() => setPage(p => Math.min(total, p + 1))} disabled={page === total}
            className="size-8 rounded-full border border-[#e2e8f0] flex items-center justify-center disabled:opacity-30">
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M5.25 3.5L8.75 7l-3.5 3.5" stroke="#374151" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </button>
        </div>
        <button className="h-9 px-4 rounded-[12px] flex items-center gap-1.5" style={{ background: "#0a0a0a" }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M7 2v7M4 7l3 3 3-3M2 11.5h10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span style={{ ...f, fontWeight: 700, fontSize: 12, color: "white" }}>다운로드</span>
        </button>
      </div>
    </div>
  );
}

function PptResult() {
  const [slide, setSlide] = useState(0);
  const slides = [
    { bg: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)", title: "포트폴리오 프레젠테이션", sub: "2026 • 디자인 & 개발" },
    { bg: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", title: "경력 요약", sub: "5년 경력 | UI/UX · 프론트엔드" },
    { bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)", title: "주요 프로젝트", sub: "딸깍.net · Flowly · 기타" },
    { bg: "linear-gradient(135deg, #0d1117 0%, #21262d 100%)", title: "기술 스택", sub: "React · TypeScript · Figma" },
    { bg: "linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)", title: "연락처", sub: "cyj2406@gmail.com" },
  ];
  const s = slides[slide];
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 px-4 py-4 flex flex-col items-center justify-center gap-4">
        <div className="w-full rounded-[14px] overflow-hidden flex items-center justify-center relative" style={{ background: s.bg, aspectRatio: "16/9", boxShadow: "0px 4px 20px rgba(0,0,0,0.3)" }}>
          <div className="flex flex-col items-center gap-2.5 p-6 text-center">
            <p style={{ ...f, fontWeight: 800, fontSize: 17, color: "white", letterSpacing: "-0.5px", lineHeight: 1.3 }}>{s.title}</p>
            <div className="w-8 h-0.5 bg-white/40 rounded" />
            <p style={{ ...f, fontWeight: 400, fontSize: 11.5, color: "rgba(255,255,255,0.7)" }}>{s.sub}</p>
            {slide === 1 && (
              <div className="mt-2 flex flex-col gap-2 w-full max-w-[200px]">
                {["UI/UX 디자인", "프론트엔드", "기획"].map((label, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span style={{ ...f, fontSize: 9, color: "rgba(255,255,255,0.7)" }}>{label}</span>
                    <span style={{ ...f, fontSize: 9, color: "rgba(255,255,255,0.5)" }}>{[5, 4, 3][i]}년</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} className="rounded-full transition-all duration-150"
              style={{ width: i === slide ? 20 : 6, height: 6, background: i === slide ? "#8B5CF6" : "#d1d5db" }} />
          ))}
        </div>
      </div>
      <div className="shrink-0 px-4 pb-4 flex items-center justify-between border-t border-[#f1f5f9] pt-3">
        <button onClick={() => setSlide(s => Math.max(0, s - 1))} disabled={slide === 0}
          className="flex items-center gap-1.5 h-9 px-3 rounded-[12px] border border-[#e2e8f0] disabled:opacity-40"
          style={{ ...f, fontSize: 13, color: "#374151" }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M8.75 10.5L5.25 7l3.5-3.5" stroke="#374151" strokeWidth="1.4" strokeLinecap="round"/></svg>이전
        </button>
        <span style={{ ...f, fontSize: 13, color: "#9ca3af", fontWeight: 500 }}>{slide + 1} / {slides.length}</span>
        <div className="flex gap-2">
          <button className="h-9 px-3 rounded-[12px] border border-[#e2e8f0] flex items-center gap-1.5" style={{ ...f, fontSize: 13, color: "#374151" }}>
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M7 2v7M4 7l3 3 3-3M2 11.5h10" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/></svg>저장
          </button>
          <button onClick={() => setSlide(s => Math.min(slides.length - 1, s + 1))} disabled={slide === slides.length - 1}
            className="flex items-center gap-1.5 h-9 px-3 rounded-[12px] border border-[#e2e8f0] disabled:opacity-40"
            style={{ ...f, fontSize: 13, color: "#374151" }}>
            다음<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M5.25 3.5L8.75 7l-3.5 3.5" stroke="#374151" strokeWidth="1.4" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function VideoResult() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setProgress(p => { if (p >= 100) { setPlaying(false); return 100; } return p + 1; }), 100);
    return () => clearInterval(t);
  }, [playing]);
  const elapsed = Math.floor(progress / 10);
  return (
    <div className="flex flex-col h-full bg-[#0a0a0a]">
      <div className="flex-1 flex items-center justify-center px-6 py-4">
        <div className="w-full max-w-[180px] relative rounded-[12px] overflow-hidden"
          style={{ aspectRatio: "9/16", background: "linear-gradient(180deg, #1a1a2e 0%, #0d0d1a 60%, #1a0a00 100%)" }}>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
            <div className="w-14 h-20 rounded-[8px] bg-white/10 border border-white/20 flex items-center justify-center">
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect x="2" y="4" width="14" height="18" rx="2" stroke="white" strokeWidth="1.5"/><path d="M18 8l4 2-4 2V8z" fill="white"/></svg>
            </div>
            <p style={{ ...f, fontSize: 9, color: "rgba(255,255,255,0.6)", textAlign: "center" }}>삼성 Z 트라이폴드</p>
          </div>
          <button onClick={() => setPlaying(p => !p)}
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-150"
            style={{ opacity: playing ? 0 : 1, background: "rgba(0,0,0,0.3)" }}>
            <div className="size-12 rounded-full bg-white/25 flex items-center justify-center">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </button>
        </div>
      </div>
      <div className="shrink-0 px-4 pb-4">
        <div className="flex items-center gap-2 mb-3">
          <span style={{ ...f, fontSize: 12, color: "rgba(255,255,255,0.7)" }}>0:{String(elapsed).padStart(2, "0")}</span>
          <div className="flex-1 relative h-1 bg-white/20 rounded-full cursor-pointer" onClick={(e) => {
            const r = e.currentTarget.getBoundingClientRect();
            setProgress(Math.min(100, Math.max(0, (e.clientX - r.left) / r.width * 100)));
          }}>
            <div className="absolute left-0 top-0 h-full bg-white rounded-full" style={{ width: `${progress}%` }} />
            <div className="absolute top-1/2 size-3 rounded-full bg-white" style={{ left: `${progress}%`, transform: "translateX(-50%) translateY(-50%)" }} />
          </div>
          <span style={{ ...f, fontSize: 12, color: "rgba(255,255,255,0.7)" }}>0:10</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button onClick={() => setProgress(0)}><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm.5 6L20 3v18z"/></svg></button>
            <button onClick={() => setPlaying(p => !p)} className="size-11 rounded-full bg-white flex items-center justify-center">
              {playing ? <svg width="18" height="18" fill="#0a0a0a" viewBox="0 0 24 24"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>
                : <svg width="18" height="18" fill="#0a0a0a" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>}
            </button>
            <button onClick={() => setProgress(100)}><svg width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zm10-12v12h2V6z"/></svg></button>
          </div>
          <div className="flex items-center gap-3">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <button className="size-8 rounded-lg border border-white/20 flex items-center justify-center">
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        </div>
        <div className="flex gap-2 mt-3">
          <button className="flex-1 h-9 rounded-[12px] flex items-center justify-center gap-1.5 border border-white/20">
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M7 2v7M4 7l3 3 3-3M2 11.5h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <span style={{ ...f, fontSize: 12, color: "white", fontWeight: 600 }}>다운로드</span>
          </button>
          <button className="flex-1 h-9 rounded-[12px] flex items-center justify-center gap-1.5 bg-white">
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><circle cx="10.5" cy="3.5" r="1.5" stroke="#0a0a0a" strokeWidth="1.3"/><circle cx="10.5" cy="10.5" r="1.5" stroke="#0a0a0a" strokeWidth="1.3"/><circle cx="3.5" cy="7" r="1.5" stroke="#0a0a0a" strokeWidth="1.3"/><path d="M5 6.2l4.2-2M5 7.8l4.2 2" stroke="#0a0a0a" strokeWidth="1.3"/></svg>
            <span style={{ ...f, fontSize: 12, color: "#0a0a0a", fontWeight: 600 }}>공유</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function LandingResult() {
  const [device, setDevice] = useState<"mobile" | "desktop">("mobile");
  return (
    <div className="flex flex-col h-full">
      <div className="shrink-0 px-4 pt-2 pb-2 border-b border-[#f1f5f9] flex items-center justify-between">
        <span style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151" }}>미리보기</span>
        <div className="flex bg-[#f1f5f9] rounded-[10px] p-1 gap-0.5">
          {(["mobile", "desktop"] as const).map((d) => (
            <button key={d} onClick={() => setDevice(d)}
              className="px-3 h-7 rounded-[8px] flex items-center gap-1.5 transition-all duration-150"
              style={{ background: device === d ? "white" : "transparent", boxShadow: device === d ? "0px 1px 3px rgba(0,0,0,0.08)" : "none" }}>
              {d === "mobile"
                ? <svg width="12" height="14" fill="none" viewBox="0 0 12 14"><rect x="1" y="1" width="10" height="12" rx="2" stroke={device === d ? "#0a0a0a" : "#9ca3af"} strokeWidth="1.3"/><path d="M4.5 11h3" stroke={device === d ? "#0a0a0a" : "#9ca3af"} strokeWidth="1.3" strokeLinecap="round"/></svg>
                : <svg width="14" height="12" fill="none" viewBox="0 0 14 12"><rect x="1" y="1" width="12" height="8" rx="1.5" stroke={device === d ? "#0a0a0a" : "#9ca3af"} strokeWidth="1.3"/><path d="M5 11h4M7 9v2" stroke={device === d ? "#0a0a0a" : "#9ca3af"} strokeWidth="1.3" strokeLinecap="round"/></svg>
              }
              <span style={{ ...f, fontSize: 11, fontWeight: device === d ? 600 : 400, color: device === d ? "#0a0a0a" : "#9ca3af" }}>{d === "mobile" ? "모바일" : "데스크톱"}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto flex justify-center py-3 px-4" style={{ scrollbarWidth: "none" }}>
        <div className="rounded-[12px] overflow-hidden border border-[#e2e8f0] transition-all duration-300"
          style={{ width: device === "mobile" ? 160 : "100%", background: "#0a0a14" }}>
          <div className="flex flex-col items-center py-8 px-4 gap-3.5" style={{ background: "linear-gradient(180deg, #0a0a14 0%, #0d0d2e 50%, #0a1428 100%)", minHeight: 300 }}>
            <div className="w-full flex items-center justify-between mb-1">
              <div className="w-10 h-1.5 rounded bg-white/30" />
              <div className="flex gap-1.5">{[0,1,2].map(i => <div key={i} className="w-5 h-1.5 rounded bg-white/20" />)}</div>
            </div>
            <div className="flex gap-1">{[...Array(6)].map((_, i) => <div key={i} className="size-1 rounded-full bg-white/40" />)}</div>
            <p style={{ ...f, fontWeight: 800, fontSize: 20, color: "white", textAlign: "center", letterSpacing: "-0.5px" }}>말깍</p>
            <div className="flex flex-col items-center gap-1.5">
              {[80, 65, 50].map((w, i) => <div key={i} className="h-1.5 rounded bg-white/20" style={{ width: w }} />)}
            </div>
            <div className="h-7 px-5 rounded-full flex items-center" style={{ background: "rgba(79,123,255,0.8)" }}>
              <div className="w-14 h-1.5 rounded bg-white/70" />
            </div>
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round"/></svg>
            <div className="w-full grid grid-cols-2 gap-1.5 mt-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="rounded-[8px] p-2 flex flex-col gap-1" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div className="size-3 rounded bg-blue-500/40" />
                  <div className="w-full h-1 rounded bg-white/20" />
                  <div className="w-3/4 h-1 rounded bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 px-4 pb-4 flex gap-2 border-t border-[#f1f5f9] pt-3">
        <button className="flex-1 h-9 rounded-[12px] border border-[#e2e8f0] flex items-center justify-center gap-1.5" style={{ ...f, fontSize: 13, color: "#374151" }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><rect x="2" y="2" width="10" height="8" rx="1.5" stroke="#374151" strokeWidth="1.3"/><path d="M2 12h10M5 10v2M9 10v2" stroke="#374151" strokeWidth="1.3" strokeLinecap="round"/></svg>배포하기
        </button>
        <button className="flex-1 h-9 rounded-[12px] flex items-center justify-center gap-1.5" style={{ background: "#0a0a0a", ...f, fontSize: 13, color: "white" }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M7 2v7M4 7l3 3 3-3M2 11.5h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>다운로드
        </button>
      </div>
    </div>
  );
}

function ImageResult() {
  const [idx, setIdx] = useState(0);
  const imgs = [
    { bg: "linear-gradient(135deg, #FF6B35 0%, #F7931E 50%, #FFD700 100%)", badge: "AI 카피라이터", title: "뷰티 제품 광고", desc: "브랜드 & 미디어 마케팅" },
    { bg: "linear-gradient(135deg, #1a1a2e 0%, #2d3436 100%)", badge: "분석 리포트", title: "SNS 트렌드", desc: "SNS 트렌드 분석 리포트" },
    { bg: "linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)", badge: "하단 배너", title: "색상 그라디언트", desc: "프로모션 배너" },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 py-4" style={{ scrollbarWidth: "none" }}>
        <div className="relative overflow-hidden rounded-[16px]" style={{ aspectRatio: "1/1" }}>
          {imgs.map((img, i) => (
            <div key={i} className="absolute inset-0 transition-opacity duration-300 flex flex-col items-center justify-center p-6 gap-3"
              style={{ opacity: i === idx ? 1 : 0, background: img.bg }}>
              <div className="px-2.5 py-1 rounded-full bg-white/20 border border-white/30">
                <span style={{ ...f, fontSize: 10, fontWeight: 700, color: "white" }}>{img.badge}</span>
              </div>
              <p style={{ ...f, fontWeight: 800, fontSize: 22, color: "white", textAlign: "center", letterSpacing: "-0.5px", lineHeight: 1.2 }}>{img.title}</p>
              <p style={{ ...f, fontWeight: 500, fontSize: 12, color: "rgba(255,255,255,0.8)", textAlign: "center" }}>{img.desc}</p>
              {i === 0 && <div className="mt-1 w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center"><div className="size-11 rounded-full bg-white/20" /></div>}
              {i === 1 && (
                <div className="mt-2 flex flex-col gap-1.5 w-full">
                  {["인스타그램", "틱톡", "유튜브"].map((ch, j) => (
                    <div key={j} className="flex items-center justify-between">
                      <span style={{ ...f, fontSize: 10, color: "rgba(255,255,255,0.7)" }}>{ch}</span>
                      <span style={{ ...f, fontSize: 10, color: "rgba(255,255,255,0.5)" }}>{["↑32%", "↑18%", "↑9%"][j]}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {imgs.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className="rounded-full transition-all duration-150"
              style={{ width: i === idx ? 20 : 6, height: 6, background: i === idx ? "#4f7bff" : "#d1d5db" }} />
          ))}
        </div>
      </div>
      <div className="shrink-0 px-4 pb-4 border-t border-[#f1f5f9] pt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {imgs.map((img, i) => (
            <button key={i} onClick={() => setIdx(i)} className="size-11 rounded-[10px]"
              style={{ background: img.bg, border: i === idx ? "2px solid #4f7bff" : "2px solid #e2e8f0" }} />
          ))}
        </div>
        <button className="h-9 px-4 rounded-[12px] flex items-center gap-1.5" style={{ background: "#0a0a0a" }}>
          <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M7 2v7M4 7l3 3 3-3M2 11.5h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span style={{ ...f, fontSize: 12, color: "white", fontWeight: 700 }}>전체 저장</span>
        </button>
      </div>
    </div>
  );
}

function ResultSheet({ category, sheetPos, onSheetChange }: {
  category: WorkspaceCategory;
  sheetPos: "mini" | "half" | "full";
  onSheetChange: (p: "mini" | "half" | "full") => void;
}) {
  const isVideo = category === "video";
  const sheetHeight = sheetPos === "full" ? "calc(100vh - 56px)" : sheetPos === "half" ? "55vh" : "44px";
  return (
    <div className="fixed left-0 right-0 bottom-0 z-[88] flex flex-col"
      style={{ height: sheetHeight, borderRadius: "20px 20px 0 0", background: isVideo ? "#0a0a0a" : "white", boxShadow: "0px -4px 32px rgba(0,0,0,0.15)", overflow: "hidden", transition: "height 300ms cubic-bezier(0.32,0.72,0,1)" }}>
      {/* Drag handle */}
      <div className="shrink-0 pt-2.5 pb-1 flex flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => onSheetChange(sheetPos === "half" ? "full" : sheetPos === "full" ? "mini" : "half")}>
        <div className="w-9 h-1 rounded-full" style={{ background: isVideo ? "rgba(255,255,255,0.25)" : "#d1d5db" }} />
        {sheetPos === "mini" && <p style={{ ...f, fontSize: 12, color: isVideo ? "rgba(255,255,255,0.5)" : "#9ca3af" }}>{WS_LABEL[category]} 결과 보기 ↑</p>}
      </div>
      {sheetPos !== "mini" && (
        <>
          <div className="shrink-0 flex items-center justify-between px-4 pb-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full" style={{ background: WS_COLOR[category], ...f, fontSize: 11, fontWeight: 700, color: "white" }}>{WS_LABEL[category]}</span>
              <span style={{ ...f, fontSize: 13, fontWeight: 600, color: isVideo ? "white" : "#0a0a0a" }}>결과</span>
            </div>
            <button onClick={() => onSheetChange("mini")} className="size-7 rounded-full flex items-center justify-center"
              style={{ background: isVideo ? "rgba(255,255,255,0.1)" : "#f1f5f9" }}>
              <svg width="12" height="12" fill="none" viewBox="0 0 12 12"><path d="M3 9l6-6M9 9L3 3" stroke={isVideo ? "white" : "#374151"} strokeWidth="1.4" strokeLinecap="round"/></svg>
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            {category === "docs" && <DocsResult />}
            {category === "ppt" && <PptResult />}
            {category === "video" && <VideoResult />}
            {category === "landing" && <LandingResult />}
            {category === "image" && <ImageResult />}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Form Card System ─────────────────────────────────────────────────────────

// Shared card shell primitives
function FcHeader({ steps, activeStep }: { steps: string[]; activeStep: number }) {
  return (
    <div className="relative shrink-0 w-full" style={{ borderBottom: "1px solid #F0F2F5" }}>
      <div className="flex flex-wrap gap-x-[11px] gap-y-0 items-center pb-[17px] pt-[16px] px-[18px] md:px-6">
        {/* Icon */}
        <div className="shrink-0 rounded-[10px] size-[34px] flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #EEF0FF 0%, #E4E9FF 100%)" }}>
          <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
            <path d={svgCard.p2535ca80} stroke="#5B73FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgCard.pf238580} stroke="#5B73FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgCard.p27453880} stroke="#5B73FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d={svgCard.p9e34f00} stroke="#5B73FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
        {/* Title */}
        <div className="flex-1 min-w-0">
          <p style={{ ...f, fontWeight: 800, fontSize: 16, color: "#1B2440", letterSpacing: "-0.16px" }}>상세 프롬프트</p>
        </div>
        {/* Breadcrumbs */}
        <div className="flex gap-[6px] items-center">
          {steps.map((s, i) => (
            <React.Fragment key={s}>
              {i > 0 && <span style={{ ...f, fontWeight: 700, fontSize: 12.5, color: "#C2C7D0" }}>›</span>}
              <span style={{ ...f, fontWeight: 700, fontSize: 12.5, color: i === activeStep ? "#3B5BFE" : "#98A2B3" }}>{s}</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function FcPreview({ open, onToggle, children }: { open: boolean; onToggle: () => void; children?: React.ReactNode }) {
  return (
    // md 이상에서만 아래 항목과의 간격을 24px로 벌린다(모바일 간격 유지)
    <div className="relative rounded-[15px] w-full overflow-hidden md:mb-1" style={{ border: "1px solid #ECEEF2" }}>
      <button onClick={onToggle}
        className="bg-[#f8f9fc] min-h-[48px] w-full flex items-center gap-[10px] px-[15px] py-[13px] text-left">
        <svg className="shrink-0 size-[18px]" fill="none" viewBox="0 0 18 18">
          <path d={svgCard.p32ed3480} stroke="#3B5BFE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
          <path d={svgCard.p254f3200} stroke="#3B5BFE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </svg>
        <span className="flex-1" style={{ ...f, fontWeight: 700, fontSize: 13.5, color: "#1B2440" }}>미리보기 보기</span>
        <div style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s", paddingBottom: 4 }}>
          <svg className="size-[18px]" fill="none" viewBox="0 0 18 18">
            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="#98A2B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
          </svg>
        </div>
      </button>
      {open && children && (
        <div className="border-t border-[#ECEEF2] flex items-center justify-center py-6 px-4"
          style={{ background: "#BFC3C9" }}>
          {children}
        </div>
      )}
    </div>
  );
}

function FcHelper({ text }: { text: string }) {
  return (
    <div className="flex gap-[7px] items-start w-full">
      <div className="pt-px shrink-0 size-[15px]">
        <svg className="size-full" fill="none" viewBox="0 0 15 15">
          <path d={svgCard.p6195900} stroke="#98A2B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M7.5 10V7.5M7.5 5H7.50625" stroke="#98A2B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </svg>
      </div>
      <p style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#98A2B3", lineHeight: "18.75px" }}>{text}</p>
    </div>
  );
}

function FcLabel({ label }: { label: string }) {
  return <p style={{ ...f, fontWeight: 600, fontSize: 13, color: "#4B5262" }}>{label}</p>;
}

function FcToggleRow({ autoOn, onToggleAuto, onToggleOriginal, origOn }: {
  autoOn: boolean; onToggleAuto: () => void; origOn: boolean; onToggleOriginal: () => void;
}) {
  return (
    <div className="flex flex-wrap gap-[6px] items-center">
      <button onClick={onToggleAuto} className="flex gap-[6px] h-8 items-center px-3 rounded-full"
        style={{ background: autoOn ? "#E8EEFF" : "#F4F5F7", border: `1px solid ${autoOn ? "#C5D3FF" : "#E8EBF0"}` }}>
        <span style={{ ...f, fontWeight: 600, fontSize: 12, color: autoOn ? "#3B5BFE" : "#8A93A6" }}>자동 프롬프트</span>
        <div className="relative rounded-full" style={{ width: 30, height: 18, background: autoOn ? "#3B5BFE" : "#CBD0D8", flexShrink: 0 }}>
          <div className="absolute top-[2px] rounded-full bg-white shadow-sm" style={{ width: 14, height: 14, left: autoOn ? 14 : 2, transition: "left .18s" }} />
        </div>
      </button>
      <button onClick={onToggleOriginal} className="flex gap-[6px] h-8 items-center px-3 rounded-full"
        style={{ background: origOn ? "#E8EEFF" : "#F4F5F7", border: `1px solid ${origOn ? "#C5D3FF" : "#E8EBF0"}` }}>
        <span style={{ ...f, fontWeight: 600, fontSize: 12, color: origOn ? "#3B5BFE" : "#8A93A6" }}>원문 사용</span>
        <div className="relative rounded-full" style={{ width: 30, height: 18, background: origOn ? "#3B5BFE" : "#CBD0D8", flexShrink: 0 }}>
          <div className="absolute top-[2px] rounded-full bg-white shadow-sm" style={{ width: 14, height: 14, left: origOn ? 14 : 2, transition: "left .18s" }} />
        </div>
      </button>
    </div>
  );
}

function FcTextarea({ value, onChange, placeholder, minHeight = 60 }: { value: string; onChange: (v: string) => void; placeholder?: string; minHeight?: number }) {
  return (
    <div className="relative bg-white rounded-[14px] w-full" style={{ border: "1px solid #E3E6EB" }}>
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        rows={3}
        className="w-full outline-none resize-none bg-transparent px-[17px] pt-[14px] pb-[14px]"
        style={{ ...f, fontSize: 14.5, color: "#1B2440", lineHeight: "22.48px", minHeight }} />
    </div>
  );
}

/**
 * 단일 행 입력. filled 는 앞 단계에서 넘어와 이미 채워진 값을 뜻한다
 * — 박스 규격(반경·테두리·높이·좌우 여백)은 빈 필드와 똑같이 두고,
 * 면만 이 화면의 보조 배경(#F8F9FC)으로 한 단계 낮춰 "완료된 값"으로 읽히게 한다.
 * 여전히 수정 가능한 입력이므로 읽기 전용 표시(회색 글자)는 쓰지 않는다.
 */
function FcInput({ value, onChange, placeholder, filled = false }: { value: string; onChange: (v: string) => void; placeholder?: string; filled?: boolean }) {
  return (
    <div className={`fc-single relative rounded-[14px] w-full min-h-[48px] flex items-center ${filled ? "" : "bg-white"}`}
      style={{ border: "1px solid #E3E6EB", background: filled ? "#F8F9FC" : undefined }}>
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full outline-none bg-transparent px-[17px] py-[15px]"
        style={{ ...f, fontSize: 14.5, fontWeight: filled ? 500 : undefined, color: "#1B2440" }} />
    </div>
  );
}

function FcSelect({ value, label }: { value: string; label?: string }) {
  return (
    <div className="fc-single relative bg-white rounded-[14px] w-full min-h-[48px] flex items-center justify-between px-[17px] py-[15.5px]"
      style={{ border: "1px solid #E3E6EB" }}>
      <span style={{ ...f, fontWeight: 500, fontSize: 14.5, color: "#1B2440" }}>{value}</span>
      <svg className="shrink-0 size-4" fill="none" viewBox="0 0 16 16">
        <path d="M4 6L8 10L12 6" stroke="#98A2B3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.467" />
      </svg>
    </div>
  );
}

function FcColorField({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex gap-3 items-center w-full">
      <div className="shrink-0 h-[48px] w-[54px] rounded-[12px] p-px" style={{ background: value || "#3B63F6", border: "1px solid #E3E6EB" }} />
      <div className="relative flex-1 bg-white rounded-[12px] min-h-[48px] flex items-center" style={{ border: "1px solid #E3E6EB" }}>
        <input value={value} onChange={e => onChange(e.target.value)}
          className="w-full outline-none bg-transparent px-[17px] py-[15px]"
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: 13.4, color: "#1B2440" }} />
      </div>
    </div>
  );
}

function FcPrimaryBtn({ label, onClick, minHeight }: { label: string; onClick: () => void; minHeight?: number }) {
  return (
    <button onClick={onClick}
      className="flex-1 min-w-0 flex items-center justify-center gap-[9px] rounded-[14px] p-[15px]"
      style={{ background: "#3B5BFE", boxShadow: "0px 4px 6px rgba(59,91,254,0.18)", minHeight }}>
      <svg className="shrink-0 size-[17px]" fill="none" viewBox="0 0 17 17">
        <path d={svgCard.p31151900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.417" />
        <path d={svgCard.p249be200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.417" />
      </svg>
      <span style={{ fontFamily: "'Arial Black', 'Noto Sans KR', sans-serif", fontSize: 15, color: "white" }}>{label}</span>
    </button>
  );
}

function FcSecondaryBtn({ label, onClick, minHeight }: { label: string; onClick: () => void; minHeight?: number }) {
  return (
    <button onClick={onClick}
      className="shrink-0 flex items-center justify-center rounded-[14px] px-5 py-[15px]"
      style={{ border: "1.5px solid #E3E6EB", color: "#4B5262", ...f, fontWeight: 700, fontSize: 14, minHeight }}>
      {label}
    </button>
  );
}

// ─── Image Form Card ──────────────────────────────────────────────────────────

// ── 공통 카드 Shell ───────────────────────────────────────────────────────────
// 폭 상한 없이 부모 콘텐츠 영역을 그대로 채운다(모든 화면 크기 공통).
// 좌우 여백은 부모(채팅 스크롤 영역)의 페이지 패딩만 사용한다.
const CARD_SHELL: React.CSSProperties = {
  background: "white", borderRadius: 22, border: "1px solid #ECEEF2",
  boxShadow: "0px 1px 2px rgba(16,24,40,0.04), 0px 12px 32px rgba(16,24,40,0.06)",
  display: "flex", flexDirection: "column", overflow: "hidden",
  width: "100%", boxSizing: "border-box",
  // 화면에 실제로 보이는 채팅 영역 높이 — 호출부(워크스페이스)가 하단 입력창 높이를 재서 넣어 준다.
  // 폴백은 상단바 56 + 입력창 약 146 + 여백 24. 이 값을 넘기면 CardBody 가 안에서 스크롤되고,
  // 카드 하단(이전·생성 버튼)은 언제나 입력창 위에 남는다.
  maxHeight: "var(--fc-card-max-h, calc(100dvh - 226px))",
};
// 부모가 세로 flex 컨테이너이므로 자식은 기본적으로 가로로 stretch된다.
// min-w-0 은 긴 내용이 카드를 밀어 가로 스크롤을 만들지 않게 하는 안전장치.
const CARD_SHELL_CLASS = "w-full min-w-0 self-stretch";
function CardBody({ children }: { children: React.ReactNode }) {
  // fc-body: 모든 입력 항목이 본문 전체 폭을 쓰는 1열 레이아웃(theme.css).
  // FcInput·FcTextarea·FcSelect 가 같은 좌우 정렬선을 공유하도록 폭 기준을 full-width 로 통일했다.
  return (
    <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" } as React.CSSProperties}
         className="fc-body flex flex-col gap-5 px-[18px] md:px-6 pt-[18px] pb-6">
      {children}
    </div>
  );
}
function CardFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 px-[18px] md:px-6 pb-[14px] pt-[15px]" style={{ borderTop: "1px solid #EEF0F3", flexShrink: 0 }}>
      {children}
    </div>
  );
}
// 파일 업로드 버튼 공통 UI
function FcUpload({ label, note }: { label: string; note?: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-[14px] py-4 cursor-pointer" style={{ border: "1.5px dashed #C9CFDA", background: "#FBFCFD" }}>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#98A2B3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V4m0 0L8 8m4-4l4 4M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/></svg>
      <span style={{ ...f, fontSize: 13, fontWeight: 600, color: "#4B5262" }}>{label}</span>
      {note && <span style={{ ...f, fontSize: 11.5, color: "#98A2B3" }}>{note}</span>}
    </div>
  );
}
// 슬라이드 고퀄리티 토글 행
function FcQualityToggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <div className="flex items-center justify-between">
      <span style={{ ...f, fontSize: 13, fontWeight: 600, color: "#4B5262" }}>슬라이드 고퀄리티로 제작</span>
      <div className="flex items-center gap-2 cursor-pointer" onClick={onToggle}>
        <span style={{ ...f, fontSize: 12, color: "#98A2B3" }}>{on ? "켜기 · 크레딧 사용" : "끄기 · 크레딧 절약"}</span>
        <div className="rounded-full flex items-center" style={{ width: 30, height: 18, background: on ? "#3B5BFE" : "#CBD0D8", padding: "2px", justifyContent: on ? "flex-end" : "flex-start" }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: "white", boxShadow: "0 1px 2px rgba(0,0,0,0.25)" }} />
        </div>
      </div>
    </div>
  );
}

// ─── Image Form Card (이미지 · 1단계) ─────────────────────────────────────────
interface ImageFormState {
  desc: string; autoPrompt: boolean; origText: boolean;
  card1: string; card2: string; banner: string;
  font: string; color: string;
}
function ImageFormCard({ onGenerate }: { onGenerate: () => void }) {
  const [prevOpen, setPrevOpen] = useState(false);
  const [s, setS] = useState<ImageFormState>({
    desc: "", autoPrompt: true, origText: false,
    card1: "", card2: "", banner: "", font: "기본 (템플릿 폰트)", color: "#3B5BFE",
  });
  const set = <K extends keyof ImageFormState>(k: K, v: ImageFormState[K]) => setS(p => ({ ...p, [k]: v }));
  const Preview = () => (
    <div className="grid grid-cols-2 gap-2 mx-auto" style={{ width: 180 }}>
      {(["#C9A77C","#6E5436","#9AA2B1","#646C7D"] as const).map((c, i) => (
        <div key={i} className="rounded-[10px]" style={{ height: 80, background: `linear-gradient(150deg,${c},${["#6E5436","#C9A77C","#646C7D","#9AA2B1"][i]})` }} />
      ))}
    </div>
  );
  return (
    <div className={CARD_SHELL_CLASS} style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["설명 입력", "스타일", "생성"]} activeStep={0} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v => !v)}><Preview /></FcPreview>
        <FcHelper text="이미지 설명을 적으면 AI가 이미지를 만들어드려요" />
        {/* 이미지 설명 (영문 프롬프트) */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <FcLabel label="이미지 설명" />
              <span style={{ ...f, fontSize: 12, color: "#98A2B3" }}>(영문 프롬프트)</span>
            </div>
            <FcToggleRow autoOn={s.autoPrompt} onToggleAuto={() => set("autoPrompt", !s.autoPrompt)} origOn={s.origText} onToggleOriginal={() => set("origText", !s.origText)} />
          </div>
          <FcTextarea value={s.desc} onChange={v => set("desc", v)} placeholder="예) A book on the window sill with warm sunlight" />
        </div>
        {/* 카드 1 텍스트 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="카드 1 텍스트" />
          <FcInput value={s.card1} onChange={v => set("card1", v)} placeholder="예) 올해의 필독서" />
        </div>
        {/* 카드 2 텍스트 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="카드 2 텍스트" />
          <FcInput value={s.card2} onChange={v => set("card2", v)} placeholder="예) EDITOR'S PICK" />
        </div>
        {/* 하단 배너 텍스트 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="하단 배너 텍스트" />
          <FcInput value={s.banner} onChange={v => set("banner", v)} placeholder="예) 지금 서점에서 만나보세요" />
        </div>
        {/* 폰트 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="폰트" />
          <FcSelect value={s.font} />
        </div>
        {/* 포인트 색 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="포인트 색" />
          <FcColorField value={s.color} onChange={v => set("color", v)} />
        </div>
      </CardBody>
      <CardFooter><FcPrimaryBtn label="이미지 생성하기" onClick={onGenerate} /></CardFooter>
    </div>
  );
}

// ─── Docs Form Card (문서 · 1단계) ───────────────────────────────────────────
interface DocsFormState {
  injurer: string; injurerContact: string;
  victim: string; victimContact: string;
  accidentDate: string; accidentPlace: string;
  vehicleNo: string; settlement: string;
  payMethod: string; agreementDate: string;
}
function DocsFormCard({ onGenerate }: { onGenerate: () => void }) {
  const [prevOpen, setPrevOpen] = useState(false);
  const [s, setS] = useState<DocsFormState>({ injurer:"", injurerContact:"", victim:"", victimContact:"", accidentDate:"", accidentPlace:"", vehicleNo:"", settlement:"", payMethod:"", agreementDate:"" });
  const set = (k: keyof DocsFormState, v: string) => setS(p => ({ ...p, [k]: v }));
  const Preview = () => (
    <div className="bg-white rounded-[10px] mx-auto px-5 py-5 flex flex-col gap-2.5" style={{ width: 160, boxShadow: "0 4px 16px rgba(0,0,0,.12)" }}>
      <div className="h-2 rounded-full bg-[#c8d0de] mx-4" />
      {[90,78,95,72,88,65,82,58,70,80].map((w,i) => <div key={i} className="h-1.5 rounded-full bg-[#dde2ec]" style={{ width:`${w}%` }} />)}
    </div>
  );
  const fields: { label: string; key: keyof DocsFormState; ph: string }[] = [
    { label:"가해자(갑) 성명", key:"injurer", ph:"예) 홍길동" },
    { label:"가해자 주소 및 연락처", key:"injurerContact", ph:"예) 서울시 강남구 … / 010-1234-5678" },
    { label:"피해자(을) 성명", key:"victim", ph:"예) 김철수" },
    { label:"피해자 주소 및 연락처", key:"victimContact", ph:"예) 서울시 마포구 … / 010-9876-5432" },
    { label:"사고 일시", key:"accidentDate", ph:"예) 2026년 6월 23일 오후 2시" },
    { label:"사고 장소", key:"accidentPlace", ph:"예) 서울시 강남구 테헤란로 123" },
    { label:"사고 차량 번호", key:"vehicleNo", ph:"예) 12가 3456" },
    { label:"합의금 금액", key:"settlement", ph:"예) 5,000,000원" },
    { label:"지급 일자 및 방법", key:"payMethod", ph:"예) 2026-07-01 / 계좌이체" },
    { label:"합의 일자", key:"agreementDate", ph:"예) 2026-06-23" },
  ];
  return (
    <div className={CARD_SHELL_CLASS} style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["정보 입력","생성"]} activeStep={0} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="빈칸만 채우면 문서가 완성돼요" />
        {fields.map(({ label, key, ph }) => (
          <div key={key} className="flex flex-col gap-[10px]">
            <FcLabel label={label} />
            <FcInput value={s[key]} onChange={v => set(key, v)} placeholder={ph} />
          </div>
        ))}
      </CardBody>
      <CardFooter><FcPrimaryBtn label="문서 생성" onClick={onGenerate} /></CardFooter>
    </div>
  );
}

// ─── PPT Form Card (PPT · 2단계) ──────────────────────────────────────────────
interface PptFormState {
  topic: string; autoPrompt: boolean; origOn: boolean;
  tone: string; audience: string; hiQuality: boolean;
  pointColor: string; accentColor: string;
  activeSlide: number; slideTitle: string; slideBullet: string;
}
const PPT_SLIDES = ["1. 표지","2. 목차","3. 문제","4. 솔루션","5. 제품","6. 시장","7. BM","8. 경쟁력","9. 성과","10. 팀","11. 로드맵","12. 마무리"];
function PptFormCard({ onGenerate }: { onGenerate: () => void }) {
  const [step, setStep] = useState<1|2>(1);
  const [prevOpen, setPrevOpen] = useState(false);
  const [s, setS] = useState<PptFormState>({ topic:"", autoPrompt:true, origOn:false, tone:"프로페셔널", audience:"", hiQuality:false, pointColor:"#2563EB", accentColor:"#0D9488", activeSlide:0, slideTitle:"", slideBullet:"" });
  const set = <K extends keyof PptFormState>(k: K, v: PptFormState[K]) => setS(p => ({ ...p, [k]: v }));
  const Preview = () => (
    <div className="rounded-[10px] overflow-hidden mx-auto relative flex flex-col justify-center px-5 py-4" style={{ width:200, aspectRatio:"16/9", background:"#fff", boxShadow:"0 8px 24px rgba(0,0,0,.2)" }}>
      <div className="absolute left-0 top-0 bottom-0 w-1.5" style={{ background: s.pointColor }} />
      <div style={{ ...f, fontSize:7, fontWeight:800, color: s.pointColor, marginBottom:5 }}>딸깍.NET PRESENTATION</div>
      <div style={{ ...f, fontSize:14, fontWeight:900, color:"#161B26", lineHeight:1.2 }}>제목 슬라이드</div>
    </div>
  );
  if (step === 1) return (
    <div className={CARD_SHELL_CLASS} style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["주제 입력","내용 편집","생성"]} activeStep={0} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="주제만 적으면 AI가 슬라이드를 만들어드려요" />
        {/* 1. 발표 주제 */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <FcLabel label="발표 주제" />
            <FcToggleRow autoOn={s.autoPrompt} onToggleAuto={() => set("autoPrompt",!s.autoPrompt)} origOn={s.origOn} onToggleOriginal={() => set("origOn",!s.origOn)} />
          </div>
          <FcTextarea value={s.topic} onChange={v=>set("topic",v)} placeholder="예) 2026 AI 트렌드 및 시장 전망" />
        </div>
        {/* 2. 톤 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="톤" />
          <FcSelect value={s.tone} />
        </div>
        {/* 3. 청중 (선택) */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-1.5">
            <FcLabel label="청중" />
            <span style={{ ...f, fontSize:12, color:"#98A2B3" }}>(선택)</span>
          </div>
          <FcInput value={s.audience} onChange={v=>set("audience",v)} placeholder="예) 투자자, 임원진" />
        </div>
        {/* 4. 참고문서 (선택) */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-1.5">
            <FcLabel label="참고문서" />
            <span style={{ ...f, fontSize:12, color:"#98A2B3" }}>(선택)</span>
          </div>
          <FcUpload label="문서 첨부 · 여러 개 가능" />
        </div>
        {/* 5. 슬라이드 고퀄리티로 제작 */}
        <FcQualityToggle on={s.hiQuality} onToggle={() => set("hiQuality", !s.hiQuality)} />
        {/* 6. 포인트 색 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="포인트 색" />
          <FcColorField value={s.pointColor} onChange={v=>set("pointColor",v)} />
        </div>
        {/* 7. 강조색 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="강조색" />
          <FcColorField value={s.accentColor} onChange={v=>set("accentColor",v)} />
        </div>
      </CardBody>
      <CardFooter><FcPrimaryBtn label="내용 생성" onClick={() => setStep(2)} /></CardFooter>
    </div>
  );
  return (
    <div className={CARD_SHELL_CLASS} style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["주제 입력","내용 편집","생성"]} activeStep={1} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="슬라이드별 제목과 내용을 확인하고 편집하세요" />
        {/* 슬라이드 탭 */}
        <div className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          <div className="flex gap-2 pb-1" style={{ minWidth: "max-content" }}>
            {PPT_SLIDES.map((sl, i) => (
              <button key={i} onClick={() => set("activeSlide", i)}
                className="h-9 px-3.5 rounded-full shrink-0 whitespace-nowrap"
                style={{ ...f, fontSize: 12.5, fontWeight: 600, border: `1.5px solid ${s.activeSlide===i?"#3B5BFE":"#E3E6EB"}`, background: s.activeSlide===i?"#ECEFFE":"white", color: s.activeSlide===i?"#3B5BFE":"#4B5262" }}>
                {sl}
              </button>
            ))}
          </div>
        </div>
        {/* 슬라이드 제목 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="슬라이드 제목" />
          <FcInput value={s.slideTitle} onChange={v=>set("slideTitle",v)} placeholder="예) 딸깍넷 투자 유치 IR" />
        </div>
        {/* 본문 / 불릿 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="본문 / 불릿" />
          <FcTextarea value={s.slideBullet} onChange={v=>set("slideBullet",v)} placeholder="• 핵심 내용을 입력하세요&#10;• 불릿 포인트 형식 권장" />
        </div>
      </CardBody>
      <CardFooter>
        <FcSecondaryBtn label="이전" onClick={() => setStep(1)} />
        <FcPrimaryBtn label="슬라이드 생성" onClick={onGenerate} />
      </CardFooter>
    </div>
  );
}

// ─── Video Form Card (영상 · 2단계) ───────────────────────────────────────────
interface VideoFormState {
  topic: string; autoPrompt: boolean; origOn: boolean; desc: string;
  ratio: string; quality: string; duration: number; scenes: number;
  voice: string; noTts: boolean;
  startMethod: string; mood: string;
}
const VIDEO_VOICES = [
  { name:"소진", meta:"여 · 성인" }, { name:"준기", meta:"남 · 성인" },
  { name:"공철", meta:"남 · 성인" }, { name:"서연", meta:"여 · 성인" }, { name:"민호", meta:"남 · 청년" },
];
function VideoFormCard({ onGenerate }: { onGenerate: () => void }) {
  const [step, setStep] = useState<1|2>(1);
  const [prevOpen, setPrevOpen] = useState(false);
  const [s, setS] = useState<VideoFormState>({ topic:"", autoPrompt:true, origOn:false, desc:"", ratio:"16:9 (가로)", quality:"1080p", duration:10, scenes:3, voice:"소진", noTts:false, startMethod:"새로 만들기", mood:"" });
  const set = <K extends keyof VideoFormState>(k: K, v: VideoFormState[K]) => setS(p => ({ ...p, [k]: v }));
  const Preview = () => (
    <div className="rounded-[12px] overflow-hidden mx-auto flex flex-col items-center justify-center p-3" style={{ width:90, aspectRatio:"9/16", background:"#04060C", boxShadow:"0 8px 24px rgba(0,0,0,.3)" }}>
      <div style={{ ...f, fontSize:11, fontWeight:900, color:"#fff", textAlign:"center", lineHeight:1.2 }}>아무도 몰랐던</div>
      <div className="px-1 rounded mt-0.5 mb-2" style={{ background:"#38E1D6", ...f, fontSize:9, fontWeight:900, color:"#04060C" }}>비하인드</div>
      <div className="w-full flex-1 rounded-[6px]" style={{ background:"linear-gradient(160deg,#3A2D28,#171013)" }} />
    </div>
  );
  if (step === 1) return (
    <div className={CARD_SHELL_CLASS} style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["주제 입력","장면 편집","생성"]} activeStep={0} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="주제만 적으면 AI가 영상을 만들어드려요" />
        {/* 1. 주제 */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <FcLabel label="주제" />
            <FcToggleRow autoOn={s.autoPrompt} onToggleAuto={() => set("autoPrompt",!s.autoPrompt)} origOn={s.origOn} onToggleOriginal={() => set("origOn",!s.origOn)} />
          </div>
          <FcInput value={s.topic} onChange={v=>set("topic",v)} placeholder="예) 군고구마 먹는 강아지" />
        </div>
        {/* 2. 추가 설명 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="추가 설명" />
          <FcTextarea value={s.desc} onChange={v=>set("desc",v)} placeholder="분위기, 등장 요소, 흐름을 자유롭게 적어주세요" />
        </div>
        {/* 3. 화면 비율 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="화면 비율" />
          <FcSelect value={s.ratio} />
        </div>
        {/* 4. 화질 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="화질" />
          <FcSelect value={s.quality} />
        </div>
        {/* 5. 영상 길이 */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center justify-between">
            <FcLabel label="영상 길이" />
            <span style={{ ...f, fontSize:18, fontWeight:800, color:"#3B5BFE" }}>{s.duration}<span style={{ fontSize:12 }}>초</span></span>
          </div>
          <input type="range" min={4} max={15} value={s.duration} onChange={e=>set("duration",+e.target.value)} className="w-full" style={{ accentColor:"#3B5BFE" }} />
          <div className="flex justify-between">
            <span style={{ ...f, fontSize:11.5, color:"#98A2B3" }}>4초</span>
            <span style={{ ...f, fontSize:11.5, color:"#98A2B3" }}>15초</span>
          </div>
        </div>
        {/* 6. 장면 수 */}
        <div className="flex items-center justify-between">
          <FcLabel label="장면 수" />
          <div className="flex items-center rounded-[11px] overflow-hidden" style={{ border:"1.5px solid #E3E6EB" }}>
            <button onClick={() => set("scenes",Math.max(1,s.scenes-1))} className="flex items-center justify-center" style={{ width:40,height:40,color:"#4B5262" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M5 12h14"/></svg></button>
            <div style={{ width:40, ...f, fontSize:15, fontWeight:800, color:"#1B2440", textAlign:"center", borderLeft:"1px solid #EEF0F3", borderRight:"1px solid #EEF0F3", padding:"10px 0" }}>{s.scenes}</div>
            <button onClick={() => set("scenes",Math.min(5,s.scenes+1))} className="flex items-center justify-center" style={{ width:40,height:40,color:"#4B5262" }}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg></button>
          </div>
        </div>
        {/* 7. 음성 (AI 목소리) */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <FcLabel label="음성" />
              <span style={{ ...f, fontSize:12, color:"#98A2B3" }}>(AI 목소리)</span>
            </div>
            <label className="flex items-center gap-2 cursor-pointer" onClick={() => set("noTts",!s.noTts)}>
              <div className="rounded-[5px] flex items-center justify-center" style={{ width:18,height:18,border:`1.5px solid ${s.noTts?"#3B5BFE":"#D9DEE7"}`,background:s.noTts?"#3B5BFE":"white" }}>
                {s.noTts && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>}
              </div>
              <span style={{ ...f, fontSize:12.5, fontWeight:600, color:"#4B5262" }}>음성 없이 만들기</span>
            </label>
          </div>
          {!s.noTts && (
            <div className="rounded-[13px] overflow-hidden border border-[#EEF0F3]">
              {VIDEO_VOICES.map((v, i) => (
                <div key={v.name} className="flex items-center gap-3 px-4 cursor-pointer" style={{ minHeight:46, borderBottom:i<VIDEO_VOICES.length-1?"1px solid #F4F6F9":"none", background:s.voice===v.name?"#F4F7FF":"white" }} onClick={() => set("voice",v.name)}>
                  {s.voice===v.name && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#3B5BFE" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>}
                  <span style={{ ...f, fontSize:14, fontWeight:800, color:s.voice===v.name?"#3B5BFE":"#1B2440" }}>{v.name}</span>
                  <span style={{ ...f, fontSize:12, color:"#98A2B3" }}>{v.meta}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* 8. 영상 시작 방법 (선택) */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-1.5">
            <FcLabel label="영상 시작 방법" />
            <span style={{ ...f, fontSize:12, color:"#98A2B3" }}>(선택)</span>
          </div>
          <div className="flex flex-col gap-2">
            {["새로 만들기","영상에 이어 붙이기","이미지로 시작"].map(m => (
              <button key={m} onClick={() => set("startMethod",m)}
                className="flex items-center gap-3 px-4 rounded-[14px]" style={{ minHeight:48, border:`1.5px solid ${s.startMethod===m?"#3B5BFE":"#E3E6EB"}`, background:s.startMethod===m?"#F4F7FF":"white" }}>
                <div style={{ width:16,height:16,borderRadius:8,border:`2px solid ${s.startMethod===m?"#3B5BFE":"#D9DEE7"}`,background:s.startMethod===m?"#3B5BFE":"white",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                  {s.startMethod===m && <div style={{ width:6,height:6,borderRadius:3,background:"white" }} />}
                </div>
                <span style={{ ...f, fontSize:13.5, fontWeight:600, color:s.startMethod===m?"#3B5BFE":"#4B5262" }}>{m}</span>
              </button>
            ))}
          </div>
        </div>
        {/* 9. 참고 자료 (선택) */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-1.5">
            <FcLabel label="참고 자료" />
            <span style={{ ...f, fontSize:12, color:"#98A2B3" }}>(선택)</span>
          </div>
          <FcUpload label="참고 영상 올리기" note="영상은 1개만 첨부할 수 있어요" />
          <FcUpload label="참고 이미지 올리기" note="이미지는 최대 5개까지 첨부할 수 있어요" />
        </div>
      </CardBody>
      <CardFooter><FcPrimaryBtn label="다음 · 장면 편집" onClick={() => setStep(2)} /></CardFooter>
    </div>
  );
  return (
    <div className={CARD_SHELL_CLASS} style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["주제 입력","장면 편집","생성"]} activeStep={1} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="주제에 맞춰 장면을 만들었어요. 확인하고 다듬은 뒤 생성하세요." />
        {/* 주제 — 앞 단계에서 넘어온 값이라 아래 필드들과 같은 박스를 쓰되 면만 옅게 깐다.
            재생성은 1단계 주제의 FcToggleRow 와 같은 자리(라벨 행 우측)에 두어 이 필드의 동작임을 보인다. */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <FcLabel label="주제" />
            <button className="flex items-center gap-1.5 px-3 py-2 rounded-[10px]" style={{ border:"1.5px solid #E3E6EB", ...f, fontSize:12.5, fontWeight:600, color:"#4B5262", flexShrink:0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
              재생성
            </button>
          </div>
          {/* 목업 기본값 — 1단계를 건너뛰고 이 화면만 보는 경우를 위한 예시 문구 */}
          <FcInput filled value={s.topic || "여름철 자연재해 대비"} onChange={v=>set("topic",v)} placeholder="영상 주제" />
        </div>
        {/* 분위기 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="전체 분위기" />
          <FcInput value={s.mood} onChange={v=>set("mood",v)} placeholder="예) 차분한 긴장감, 따뜻한 일상" />
        </div>
        {/* 장면 탭 */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <FcLabel label={`장면 편집 / ${s.scenes}`} />
          </div>
          <div className="flex gap-2">
            {Array.from({length:s.scenes}, (_,i) => (
              <button key={i} className="size-9 rounded-[10px] flex items-center justify-center" style={{ ...f, fontSize:14, fontWeight:700, border:`1.5px solid ${i===0?"#3B5BFE":"#E3E6EB"}`, background:i===0?"#ECEFFE":"white", color:i===0?"#3B5BFE":"#4B5262" }}>{i+1}</button>
            ))}
          </div>
          {/* 장면 1 필드들 */}
          <div className="flex flex-col gap-4 rounded-[14px] p-4" style={{ border:"1px solid #EEF0F3", background:"#FBFCFD" }}>
            <div className="flex flex-col gap-[10px]">
              <FcLabel label="장면 설명 — 무엇이 어떻게 움직이는지" />
              <FcTextarea value="" onChange={()=>{}} placeholder="예) 창문을 점검하는 사람, 차분한 긴장감" />
            </div>
            <div className="flex flex-col gap-[10px]">
              <FcLabel label="카메라 움직임" />
              <FcInput value="" onChange={()=>{}} placeholder="예) 천천히 인물에게 다가가는 줌인" />
            </div>
            <div className="flex items-center justify-between">
              <FcLabel label="이 장면 길이" />
              <span style={{ ...f, fontSize:14, fontWeight:700, color:"#3B5BFE" }}>5초</span>
            </div>
            <div className="flex flex-col gap-[10px]">
              <FcLabel label="키워드 — 분위기·디테일" />
              <FcInput value="" onChange={()=>{}} placeholder="예) 태풍 대비, 창문 잠금, 차분한 긴장감" />
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <FcSecondaryBtn label="이전" onClick={() => setStep(1)} />
        <FcPrimaryBtn label="영상 생성 시작" onClick={onGenerate} />
      </CardFooter>
    </div>
  );
}

// ─── Landing Form Card (랜딩페이지 · 2단계) ───────────────────────────────────
interface LandingFormState {
  intro: string; autoPrompt: boolean; origOn: boolean;
  styleHint: string; sectionCount: string;
  activeSection: number; sectionTitle: string; subCopy: string; ctaBtn: string;
}
const LANDING_SECTIONS = ["히어로","기능","동작방식","후기","요금제","CTA"];
function LandingFormCard({ onGenerate }: { onGenerate: () => void }) {
  const [step, setStep] = useState<1|2>(1);
  const [prevOpen, setPrevOpen] = useState(false);
  const [s, setS] = useState<LandingFormState>({ intro:"", autoPrompt:true, origOn:false, styleHint:"", sectionCount:"6개 섹션", activeSection:0, sectionTitle:"", subCopy:"", ctaBtn:"" });
  const set = <K extends keyof LandingFormState>(k: K, v: LandingFormState[K]) => setS(p => ({ ...p, [k]: v }));
  const Preview = () => (
    <div className="rounded-[10px] overflow-hidden mx-auto" style={{ width:180, boxShadow:"0 8px 24px rgba(0,0,0,.28)", background:"#05070D" }}>
      <div className="h-5 flex items-center px-3 gap-2" style={{ background:"#0B0E16" }}>
        <span style={{ ...f, fontSize:7, fontWeight:800, color:"#fff" }}>딸깍</span>
        <span className="flex-1" />
        <span className="px-2 py-0.5 rounded-full" style={{ ...f, fontSize:5, fontWeight:700, color:"#fff", background:"rgba(255,255,255,.12)" }}>시작하기</span>
      </div>
      <div className="px-4 py-5" style={{ background:"radial-gradient(120% 80% at 70% 0%,#1A2740,#0A0E18 45%,#04050A)" }}>
        <div style={{ ...f, fontSize:16, fontWeight:900, color:"#fff" }}>딸깍</div>
        <div style={{ ...f, fontSize:5.5, color:"#B9C0CE", lineHeight:1.5, marginTop:4 }}>클릭 한 번으로 AI가 실행합니다.</div>
      </div>
    </div>
  );
  if (step === 1) return (
    <div className={CARD_SHELL_CLASS} style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["주제 입력","내용 편집","생성"]} activeStep={0} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="주제만 적으면 AI가 랜딩페이지를 만들어드려요" />
        {/* 1. 주제 / 제품 소개 */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <FcLabel label="주제 / 제품 소개" />
            <FcToggleRow autoOn={s.autoPrompt} onToggleAuto={() => set("autoPrompt",!s.autoPrompt)} origOn={s.origOn} onToggleOriginal={() => set("origOn",!s.origOn)} />
          </div>
          <FcTextarea value={s.intro} onChange={v=>set("intro",v)} placeholder="예) 딸깍.net — AI 문서 자동생성 서비스. 누구나 쉽게 전문 문서를 만들 수 있습니다." />
        </div>
        {/* 2·3. 스타일 힌트 + 섹션 수 — 합쳐서 100% (오른쪽 끝이 위 textarea와 일치) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-[10px] min-w-0">
            <div className="flex items-center gap-1.5">
              <FcLabel label="스타일 힌트" />
              <span style={{ ...f, fontSize:12, color:"#98A2B3" }}>(선택)</span>
            </div>
            <FcInput value={s.styleHint} onChange={v=>set("styleHint",v)} placeholder="예) 시네마틱 다크 우주" />
          </div>
          <div className="flex flex-col gap-[10px] min-w-0">
            <FcLabel label="섹션 수" />
            <FcSelect value={s.sectionCount} />
          </div>
        </div>
      </CardBody>
      <CardFooter><FcPrimaryBtn label="내용 생성" onClick={() => setStep(2)} /></CardFooter>
    </div>
  );
  return (
    <div className={CARD_SHELL_CLASS} style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["주제 입력","내용 편집","생성"]} activeStep={1} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="섹션별 내용을 확인하고 편집하세요" />
        {/* 섹션 탭 — 카드 좌우 끝선까지 흐르는 가로 스크롤 (공용 컴포넌트) */}
        <ScrollableChips
          variant="outline"
          centerActiveOnChange
          edgeClassName="-mx-[18px] px-[18px] md:-mx-6 md:px-6"
          items={LANDING_SECTIONS}
          activeIndex={s.activeSection}
          onChange={(i) => set("activeSection", i)}
        />
        {/* 섹션 입력 — 모바일 1열(제목 → 서브 카피 → 버튼 순서 그대로),
            768px 이상에서는 제목·버튼을 한 줄에 나란히 두고 서브 카피가 아래 전체 폭을 쓴다.
            DOM 순서는 건드리지 않고 md 이상에서 배치만 지정해 모바일 순서를 보존한다. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* 제목 */}
          <div className="flex flex-col gap-[10px] min-w-0 md:col-start-1 md:row-start-1">
            <FcLabel label="제목" />
            <FcInput value={s.sectionTitle} onChange={v=>set("sectionTitle",v)} placeholder="예) 딸깍" />
          </div>
          {/* 서브 카피 — 항상 전체 폭 */}
          <div className="flex flex-col gap-[10px] min-w-0 md:col-span-2 md:row-start-2">
            <FcLabel label="서브 카피" />
            <FcTextarea value={s.subCopy} onChange={v=>set("subCopy",v)} placeholder="예) 클릭 한 번으로 AI가 실행합니다." minHeight={120} />
          </div>
          {/* 버튼 */}
          <div className="flex flex-col gap-[10px] min-w-0 md:col-start-2 md:row-start-1">
            <FcLabel label="버튼" />
            <FcInput value={s.ctaBtn} onChange={v=>set("ctaBtn",v)} placeholder="예) 시작하기" />
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <FcSecondaryBtn label="이전" onClick={() => setStep(1)} minHeight={52} />
        <FcPrimaryBtn label="랜딩페이지 생성" onClick={onGenerate} minHeight={52} />
      </CardFooter>
    </div>
  );
}

// ─── Detail Form Card (상세페이지 · 2단계) ────────────────────────────────────
interface DetailFormState {
  productName: string; autoPrompt: boolean; origOn: boolean;
  desc: string; font: string;
  activeSection: number; sectionTitle: string; sectionBody: string;
}
const DETAIL_SECTIONS = ["히어로","공감","특징","효과","사용방법","FAQ"];
function DetailFormCard({ onGenerate }: { onGenerate: () => void }) {
  const [step, setStep] = useState<1|2>(1);
  const [prevOpen, setPrevOpen] = useState(false);
  const [s, setS] = useState<DetailFormState>({ productName:"", autoPrompt:true, origOn:false, desc:"", font:"기본 (템플릿 폰트)", activeSection:0, sectionTitle:"", sectionBody:"" });
  const set = <K extends keyof DetailFormState>(k: K, v: DetailFormState[K]) => setS(p => ({ ...p, [k]: v }));
  const Preview = () => (
    <div className="rounded-[12px] overflow-hidden mx-auto flex flex-col items-center py-4 px-3" style={{ width:90, aspectRatio:"9/16", background:"#F7DAD6", boxShadow:"0 8px 24px rgba(0,0,0,.2)" }}>
      <div style={{ ...f, fontSize:6, fontWeight:700, color:"#C0594E", textAlign:"center" }}>청년농부 새벽이슬 꿀부사 5kg</div>
      <div style={{ ...f, fontSize:10, fontWeight:900, color:"#C5302B", textAlign:"center", lineHeight:1.2, marginTop:4 }}>껍질째 한 입</div>
      <div className="mt-auto rounded-[8px]" style={{ width:70, height:70, background:"radial-gradient(circle at 40% 35%,#F0857A,#D94C3D 70%)" }} />
    </div>
  );
  if (step === 1) return (
    <div className={CARD_SHELL_CLASS} style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["제품 입력","내용 편집","생성"]} activeStep={0} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="제품 정보만 넣으면 AI가 상세페이지를 만들어드려요" />
        {/* 1. 제품명 */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <FcLabel label="제품명" />
            <FcToggleRow autoOn={s.autoPrompt} onToggleAuto={() => set("autoPrompt",!s.autoPrompt)} origOn={s.origOn} onToggleOriginal={() => set("origOn",!s.origOn)} />
          </div>
          <FcTextarea value={s.productName} onChange={v=>set("productName",v)} placeholder="예) 에어핏 365 밴딩 와이드 슬랙스" />
        </div>
        {/* 2. 제품 설명 (선택) */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-1.5">
            <FcLabel label="제품 설명" />
            <span style={{ ...f, fontSize:12, color:"#98A2B3" }}>(선택)</span>
          </div>
          <FcTextarea value={s.desc} onChange={v=>set("desc",v)} placeholder="예) 면 100% 밴딩 와이드핏 사계절용 슬랙스" />
        </div>
        {/* 3. 제품 이미지 (선택) */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-1.5">
            <FcLabel label="제품 이미지" />
            <span style={{ ...f, fontSize:12, color:"#98A2B3" }}>(선택)</span>
          </div>
          <FcUpload label="제품 이미지 업로드 (없으면 AI가 자동 생성)" />
        </div>
        {/* 4. 폰트 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="폰트" />
          <FcSelect value={s.font} />
        </div>
      </CardBody>
      <CardFooter><FcPrimaryBtn label="내용 생성" onClick={() => setStep(2)} /></CardFooter>
    </div>
  );
  return (
    <div className={CARD_SHELL_CLASS} style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["제품 입력","내용 편집","생성"]} activeStep={1} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="섹션별 내용을 확인하고 편집하세요" />
        {/* 섹션 탭 — 카드 좌우 끝선까지 흐르는 가로 스크롤 (공용 컴포넌트) */}
        <ScrollableChips
          variant="outline"
          centerActiveOnChange
          edgeClassName="-mx-[18px] px-[18px] md:-mx-6 md:px-6"
          items={DETAIL_SECTIONS}
          activeIndex={s.activeSection}
          onChange={(i) => set("activeSection", i)}
        />
        {/* 제목 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="제목" />
          <FcInput value={s.sectionTitle} onChange={v=>set("sectionTitle",v)} placeholder="예) 껍질째 한 입, 꿀이 터집니다" />
        </div>
        {/* 설명 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="설명" />
          <FcTextarea value={s.sectionBody} onChange={v=>set("sectionBody",v)} placeholder="섹션 설명을 입력하세요" />
        </div>
      </CardBody>
      <CardFooter>
        <FcSecondaryBtn label="이전" onClick={() => setStep(1)} />
        <FcPrimaryBtn label="상세페이지 생성" onClick={onGenerate} />
      </CardFooter>
    </div>
  );
}

// ─── Form Card Slot (카테고리 → 카드 매핑) ───────────────────────────────────
function FormCardSlot({ category, onGenerate }: { category: WorkspaceCategory; onGenerate: () => void }) {
  if (category === "image")   return <ImageFormCard   onGenerate={onGenerate} />;
  if (category === "docs")    return <DocsFormCard    onGenerate={onGenerate} />;
  if (category === "ppt")     return <PptFormCard     onGenerate={onGenerate} />;
  if (category === "video")   return <VideoFormCard   onGenerate={onGenerate} />;
  if (category === "landing") return <LandingFormCard onGenerate={onGenerate} />;
  if (category === "detail")  return <DetailFormCard  onGenerate={onGenerate} />;
  return null;
}

// ─── 생성 결과물 카드 ─────────────────────────────────────────────────────────
// 미리보기 본문의 생김새를 고르는 값. 파일 형식(ViewerFileType)과 1:1은 아니다
// — 예를 들어 docx·hwpx·xlsx·pdf 는 모두 문서 페이지 미리보기를 쓴다.
type ResultCardVariant = "slides" | "word" | "mp4" | "html" | "png";

/** 파일 형식 → 결과물 카드/미리보기 아이콘 */
const FILE_TYPE_ICON: Record<ViewerFileType, React.ReactNode> = {
  docx: <FileText size={24} color="#0a0a0a" strokeWidth={1.6} />,
  hwpx: <FileText size={24} color="#0a0a0a" strokeWidth={1.6} />,
  xlsx: <FileSpreadsheet size={24} color="#0a0a0a" strokeWidth={1.6} />,
  pdf:  <FileType2 size={24} color="#0a0a0a" strokeWidth={1.6} />,
  pptx: <FileText size={24} color="#0a0a0a" strokeWidth={1.6} />,
  mp4:  <FileVideo size={24} color="#0a0a0a" strokeWidth={1.6} />,
  html: <Compass size={24} color="#0a0a0a" strokeWidth={1.6} />,
  png:  <ImageIcon size={24} color="#0a0a0a" strokeWidth={1.6} />,
};

function WsResultCard({ variant, fileType, filename, onOpen }: {
  variant: ResultCardVariant; fileType: ViewerFileType; filename: string; onOpen: () => void;
}) {
  const isSlides = variant === "slides";
  const m = isSlides ? null : { sub: FILE_TYPE_META[fileType].label, icon: FILE_TYPE_ICON[fileType] };

  return (
    <div className="bg-white rounded-[18px] border border-[#e8ecf2] flex items-center gap-3 px-3.5 py-3.5"
      style={{ boxShadow: "0px 1px 6px rgba(0,0,0,0.06)" }}>
      {/* 아이콘/썸네일 */}
      {isSlides ? (
        <div className="shrink-0 flex items-center">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-8 h-10 rounded-[7px] bg-[#eef1f7] border border-[#e2e8f0]" style={{ marginLeft: i === 0 ? 0 : -7 }} />
          ))}
        </div>
      ) : (
        <div className="shrink-0 size-[52px] rounded-[13px] bg-[#f6f8fb] border border-[#e8ecf2] flex items-center justify-center">
          {m!.icon}
        </div>
      )}
      {/* 텍스트 */}
      <div className="flex-1 min-w-0">
        <p className="truncate" style={{ ...f, fontWeight: 700, fontSize: 14, color: "#0a0a0a", letterSpacing: "-0.3px" }}>
          {isSlides ? "슬라이드 7장" : filename}
        </p>
        <p className="truncate" style={{ ...f, fontWeight: 400, fontSize: 12.5, color: "#94a3b8", marginTop: 3 }}>
          {isSlides ? "클릭하여 에디터에서 편집" : m!.sub}
        </p>
      </div>
      {/* 결과 확인하기 버튼 */}
      <button onClick={onOpen} className="shrink-0 h-9 px-3 rounded-[11px] flex items-center gap-1" style={{ background: "#eef2ff" }}>
        <span style={{ ...f, fontWeight: 700, fontSize: 12.5, color: "#4f7bff", whiteSpace: "nowrap" }}>결과 확인하기</span>
        <svg width="13" height="13" fill="none" viewBox="0 0 16 16"><path d="M6 4l4 4-4 4" stroke="#4f7bff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    </div>
  );
}

// PPT 생성 결과 — 슬라이드 썸네일 그리드 (완료 배지 포함)
const PPT_SLIDE_TITLES = ["인트로", "시장 분석", "솔루션", "비즈니스 모델", "핵심 지표 (KPI)", "성장 로드맵", "투자 제안"];

function PptSlidesPanel({ templateName }: { templateName: string }) {
  return (
    <div className="bg-white rounded-[18px] border border-[#e8ecf2] p-4" style={{ boxShadow: "0px 1px 6px rgba(0,0,0,0.06)" }}>
      <div className="flex items-center justify-between mb-3">
        <p className="truncate" style={{ ...f, fontWeight: 700, fontSize: 15, color: "#0a0a0a", letterSpacing: "-0.3px" }}>{templateName}</p>
        <span className="shrink-0 ml-2" style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#94a3b8" }}>{PPT_SLIDE_TITLES.length} / {PPT_SLIDE_TITLES.length}</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {PPT_SLIDE_TITLES.map((title, i) => (
          <div key={i} className="relative rounded-[10px] overflow-hidden border border-[#241a33]"
            style={{ aspectRatio: "16/10", background: "linear-gradient(135deg,#1c1030 0%,#0a0a12 100%)" }}>
            <span className="absolute top-1.5 left-2" style={{ ...f, fontWeight: 800, fontSize: 9, color: "#f472b6", letterSpacing: "0.3px" }}>{String(i + 1).padStart(2, "0")}</span>
            <p className="absolute left-2 right-2 truncate" style={{ top: 15, ...f, fontWeight: 700, fontSize: 9.5, color: "rgba(255,255,255,0.88)" }}>{title}</p>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex items-center gap-1 rounded-full px-2.5 py-1" style={{ background: "#22c55e", boxShadow: "0 2px 8px rgba(0,0,0,0.35)" }}>
                <svg width="11" height="11" fill="none" viewBox="0 0 14 14"><path d="M3 7.5L6 10.5L11 4.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span style={{ ...f, fontWeight: 700, fontSize: 11, color: "white" }}>완료</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * 결과물을 이루는 파일 목록 — 목업. 한 번의 요청으로 결과물 2개가 나온 상황을 가정한다.
 *
 * 상단바 파일 드롭다운과 다운로드 메뉴의 "전체 파일 받기 (N개)"가 이 목록 하나를 함께 본다.
 * 개수를 따로 넘기면 목록에는 1개인데 메뉴에는 2개라고 뜨는 식으로 어긋나므로,
 * 출처를 목록 하나로 묶어 둔다.
 */
function resultFileNames(filename: string): string[] {
  const dot = filename.lastIndexOf(".");
  const base = dot > 0 ? filename.slice(0, dot) : filename;
  const ext = dot > 0 ? filename.slice(dot) : "";
  return [filename, `${base}_2${ext}`];
}

/** 필터 탭이 "전체"일 때 쓰는 카테고리별 기본 결과물 형식 */
const CATEGORY_FILE_TYPE: Record<WorkspaceCategory, ViewerFileType> = {
  docs: "docx", ppt: "pptx", video: "mp4", landing: "html", image: "png", detail: "html",
};

/** 문서 계열(docx·hwpx·xlsx·pdf)은 미리보기 본문을 문서 페이지로 공유한다. */
const FILE_TYPE_VARIANT: Record<ViewerFileType, ResultCardVariant> = {
  docx: "word", hwpx: "word", xlsx: "word", pdf: "word",
  pptx: "slides", mp4: "mp4", html: "html", png: "png",
};

const RESULT_CONFIG: Record<WorkspaceCategory, {
  intro: string;
  /** 산출물 요약 — 확장자 문구가 결과물 형식을 따라가도록 형식을 받는다 */
  summary: (t: ViewerFileType) => [string, string][];
  /** 템플릿명과 무관하게 이름이 고정된 결과물(웹 페이지·슬라이드 덱) */
  fixedName?: string;
  /**
   * 슬라이드형 결과물이면 장수. 확장자가 .html 이어도 내용은 여러 장짜리 덱이라,
   * 한 장짜리 웹 문서와 달리 세로로 이어 스크롤해서 본다.
   * 값이 없으면(기본) 지금까지처럼 한 장짜리 웹 페이지로 다룬다.
   */
  deckPages?: number;
  credit: number;
  agent: string;
}> = {
  ppt: {
    intro: "요청하신 디자인 톤앤매너를 반영하여 투자자의 시선을 사로잡는 고품질 슬라이드 덱을 구성하였습니다.",
    summary: () => [
      ["온라인 슬라이드 덱", "presentation.html (슬라이드 뷰어/에디터 통합 파일)"],
      ["오프라인 발표자료", "발표 및 배포용 PPTX 파일"],
      ["슬라이드별 이미지", "각 슬라이드의 원본 디자인 이미지 7장"],
    ],
    fixedName: "presentation.pptx",
    credit: 623,
    agent: "image-ppt",
  },
  docs: {
    intro: "표준 서식과 필수 조항을 반영하여 바로 사용할 수 있는 문서를 작성하였습니다.",
    summary: (t) => [
      ["편집용 문서", `${FILE_TYPE_META[t].label} — .${FILE_TYPE_META[t].ext} 형식으로 편집 가능`],
      ["서식", "표준 계약 서식 및 조항 자동 반영"],
    ],
    credit: 48,
    agent: "document-generation",
  },
  video: {
    intro: "요청하신 콘셉트와 톤앤매너를 반영하여 완성도 높은 영상을 제작하였습니다.",
    summary: () => [
      ["영상 파일", "1080p 해상도의 MP4 파일"],
      ["구성", "인트로 · 본문 · 아웃트로 자동 편집"],
    ],
    credit: 340,
    agent: "video-generation",
  },
  landing: {
    intro: "전환에 최적화된 반응형 랜딩페이지를 제작하였습니다.",
    summary: () => [
      ["웹 페이지", "반응형 HTML 파일 (모바일·데스크톱 대응)"],
      ["구성", "히어로 · 기능 · 후기 · CTA 섹션 포함"],
    ],
    fixedName: "presentation.html",
    credit: 185,
    agent: "landing-generation",
  },
  image: {
    intro: "요청하신 콘셉트를 반영하여 고해상도 이미지를 생성하였습니다.",
    summary: () => [
      ["이미지 파일", "고해상도 PNG 파일"],
      ["구성", "메인 비주얼 및 카피 자동 배치"],
    ],
    credit: 120,
    agent: "image-generation",
  },
  detail: {
    intro: "제품의 매력을 강조한 반응형 상세페이지를 제작하였습니다.",
    summary: () => [
      ["웹 페이지", "반응형 HTML 파일"],
      ["구성", "제품 소개 · 특징 · 리뷰 섹션 포함"],
    ],
    fixedName: "detail_page.html",
    credit: 160,
    agent: "detail-generation",
  },
};

/**
 * "결과 확인하기"가 여는 결과물 — 채팅 안이 아니라 화면(WorkspaceScreen)이 렌더한다.
 *
 * 데스크톱에서는 결과물 뷰어·편집기가 채팅의 형제 열로 서야 하는데, 채팅 스크롤 안쪽
 * 카드가 직접 렌더하면 그 자리를 잡을 수 없다. 그래서 카드는 "이걸 열어 달라"고
 * 요청만 하고, 실제 렌더는 두 열을 모두 쥐고 있는 화면이 맡는다.
 */
interface ResultViewerRequest {
  variant: ResultCardVariant;
  fileType: ViewerFileType;
  filename: string;
  templateName: string;
  /** 슬라이드형 결과물의 장수. 없으면 한 장짜리다. */
  deckPages?: number;
}
const OpenResultViewerContext = React.createContext<((r: ResultViewerRequest) => void) | null>(null);

function WsResult({ category, templateName, fileType }: {
  category: WorkspaceCategory; templateName: string; fileType: ViewerFileType;
}) {
  const r = RESULT_CONFIG[category];
  const slug = templateName.trim().replace(/\s+/g, "_").replace(/[()]/g, "");
  // 파일명 확장자는 진입한 카테고리(필터 탭)가 정한 결과물 형식을 따른다.
  const filename = r.fixedName ?? fileNameFor(slug, fileType);
  const variant = FILE_TYPE_VARIANT[fileType];
  const openViewer = React.useContext(OpenResultViewerContext);

  return (
    <div className="flex flex-col gap-3.5" style={{ animation: "wsFadeIn 450ms ease" }}>
      {/* 완료 안내 텍스트 (글자가 쭉 이어지는 형식) */}
      <div className="px-1">
        <p style={{ ...f, fontWeight: 400, fontSize: 14.5, color: "#0a0a0a", lineHeight: 1.7 }}>
          <b style={{ fontWeight: 700 }}>'{templateName}'</b> 제작이 완료되었습니다.
        </p>
        <p style={{ ...f, fontWeight: 400, fontSize: 14, color: "#374151", lineHeight: 1.75, marginTop: 10 }}>{r.intro}</p>

        <p style={{ ...f, fontWeight: 700, fontSize: 15, color: "#0a0a0a", letterSpacing: "-0.3px", marginTop: 18, marginBottom: 8 }}>📄 생성된 산출물 요약</p>
        <div className="flex flex-col gap-2">
          {r.summary(fileType).map(([label, value], i) => (
            <div key={i} className="flex gap-2" style={{ ...f, fontSize: 13.5, lineHeight: 1.6 }}>
              <span style={{ color: "#94a3b8" }}>•</span>
              <p style={{ color: "#374151" }}>
                <b style={{ fontWeight: 700, color: "#0a0a0a" }}>{label}</b>: {value}
              </p>
            </div>
          ))}
        </div>

        <p style={{ ...f, fontWeight: 400, fontSize: 13.5, color: "#64748b", lineHeight: 1.75, marginTop: 18 }}>
          아래 파일 카드를 통해 웹 브라우저에서 바로 결과물을 확인하시거나 파일을 다운로드해 활용하실 수 있습니다. 추가로 수정이 필요한 부분이 있다면 편하게 말씀해 주세요!
        </p>
      </div>

      {/* PPT — 생성된 슬라이드 그리드(미리보기) */}
      {category === "ppt" && <PptSlidesPanel templateName={templateName} />}

      {/* 결과물 카드 (카테고리별) */}
      <WsResultCard
        variant={variant}
        fileType={fileType}
        filename={filename}
        onOpen={() => openViewer?.({ variant, fileType, filename, templateName, deckPages: r.deckPages })}
      />

      {/* 사용 크레딧 배지 — 맨 아래 */}
      <div className="flex items-center gap-2 px-1">
        <span className="flex items-center gap-1.5 rounded-full pl-1.5 pr-3 py-1" style={{ background: "#eef2ff" }}>
          <span className="size-4 rounded-full bg-[#4f7bff] flex items-center justify-center shrink-0"><span style={{ ...f, fontWeight: 700, fontSize: 8, color: "white" }}>C</span></span>
          <span style={{ ...f, fontWeight: 700, fontSize: 12.5, color: "#4f7bff" }}>크레딧 차감: {r.credit.toLocaleString()}</span>
        </span>
        <span style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#94a3b8" }}>{r.agent}</span>
      </div>
    </div>
  );
}

// 뷰포트 분기용 공통 훅.
// 서버에는 window가 없으므로 false(모바일 기준)로 시작하고, 클라이언트에서 즉시 실제 값으로 맞춘다.
// change + orientationchange를 모두 구독해 창 크기 변경·기기 회전에 실시간으로 반응한다.
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    window.addEventListener("orientationchange", update);
    return () => {
      mq.removeEventListener("change", update);
      window.removeEventListener("orientationchange", update);
    };
  }, [query]);
  return matches;
}

// 768px 이상(태블릿) — 결과 뷰어·알림 팝오버·크레딧 모달의 분기 기준
function useIsTabletUp() {
  return useMediaQuery("(min-width: 768px)");
}

// 1200px 이상을 데스크톱으로 본다. 서식 채우기 화면(DESKTOP_MIN)과 같은 경계다.
function useIsDesktop() {
  return useMediaQuery("(min-width: 1200px)");
}

// 768~1199px — 태블릿 전용 홈 레이아웃(세로 중앙 정렬 + 푸터를 콘텐츠 흐름 끝에 배치)의 분기 기준.
// 나머지 크기 조정은 theme.css 의 같은 범위 미디어 블록이 담당한다.
function useIsTabletRange() {
  return useMediaQuery("(min-width: 768px) and (max-width: 1199px)");
}

// ─── 결과물 뷰어 (전체화면) ────────────────────────────────────────────────────
// 상단바 구성은 파일 형식(fileType)이 정한다 — viewerChrome.ts의 VIEWER_CHROME.
// 여기서는 형식에 맞는 뷰어 컴포넌트를 고르고, 편집(연필)이 열 편집기를 연결한다.
function ResultViewer({ variant, fileType, filename, templateName, deckPages, embedded = false, onClose }: {
  variant: ResultCardVariant; fileType: ViewerFileType;
  filename: string; templateName: string;
  /** 슬라이드형 결과물의 장수 — 있으면 폭과 무관하게 세로 스크롤 미리보기로 연다 */
  deckPages?: number;
  /** 데스크톱 2단 구성의 오른쪽 열 안에서 렌더될 때 true — 화면을 덮지 않고 열을 채운다. */
  embedded?: boolean;
  onClose: () => void;
}) {
  const isTabletUp = useIsTabletUp();
  // 뷰어에서 편집(연필)을 누르면 형식에 맞는 편집기로 넘어간다.
  const [editing, setEditing] = useState(false);
  // 파일 드롭다운과 다운로드 메뉴가 함께 보는 결과물 파일 목록.
  const files = React.useMemo(() => resultFileNames(filename), [filename]);

  // 슬라이드형 결과물인지 — 확장자가 아니라 결과물 구성(RESULT_CONFIG.deckPages)이 정한다.
  const isDeck = (deckPages ?? 0) > 1;

  const miniEditorMeta = {
    png: { ratio: "4 / 5", size: "1024 × 1280 px", pages: 1 },
    html: { ratio: "3 / 4", size: "1440 × 1920 px", pages: 1 },
    slides: { ratio: "16 / 9", size: "1536 × 1024 px", pages: 7 },
  } as const;

  // 태블릿 이상: 공통 태블릿 셸(56px 상단바 + safe-area)로 감싼다.
  if (isTabletUp) {
    // 영상 — 커스텀 컨트롤 플레이어 전용 뷰어
    if (fileType === "mp4") {
      return (
        <TabletVideoResultViewer fileName={filename} files={files} embedded={embedded} onClose={onClose} />
      );
    }

    /* 이미지 · 웹 페이지 — 편집이 곧 결과 확인이라 미니 에디터로 바로 연다.
       단, 슬라이드형 html(덱)은 예외다. 여러 장을 이어 훑어보는 것이 먼저라
       아래 결과물 뷰어로 내려보내 세로 스크롤 미리보기를 쓴다. */
    if (fileType === "png" || (fileType === "html" && !isDeck)) {
      const meta = miniEditorMeta[variant as keyof typeof miniEditorMeta];
      return (
        <TabletMiniEditor
          fileName={filename}
          ratio={meta.ratio}
          canvasSize={meta.size}
          pages={meta.pages}
          embedded={embedded}
          onClose={onClose}
        >
          <div className="w-full h-full flex flex-col">
            <ResultPreview variant={variant} templateName={templateName} />
          </div>
        </TabletMiniEditor>
      );
    }

    // 프레젠테이션 — 뷰어의 편집은 미니 에디터로 이어진다
    if (editing && fileType === "pptx") {
      const meta = miniEditorMeta.slides;
      return (
        <TabletMiniEditor
          fileName={filename}
          ratio={meta.ratio}
          canvasSize={meta.size}
          pages={meta.pages}
          embedded={embedded}
          onClose={() => setEditing(false)}
        >
          <div className="w-full h-full flex flex-col">
            <ResultPreview variant="slides" templateName={templateName} />
          </div>
        </TabletMiniEditor>
      );
    }

    // 문서 계열(docx·hwpx·xlsx·pdf) — 편집은 문서 편집기로 이어진다
    if (editing) {
      return (
        <TabletDocEditorViewer fileName={filename} embedded={embedded} onBack={() => setEditing(false)} onClose={onClose}>
          <ResultPreview variant={variant} templateName={templateName} />
        </TabletDocEditorViewer>
      );
    }

    // 문서 계열 · 프레젠테이션 · 슬라이드형 html — 형식별 상단바를 가진 결과물 뷰어
    return (
      <TabletResultViewer
        fileType={fileType}
        fileName={filename}
        files={files}
        deckPages={deckPages}
        embedded={embedded}
        /* html 덱은 편집기가 없어 편집 진입을 주지 않는다. pptx 는 편집기가 있으므로 그대로 둔다. */
        onEdit={isDeck && fileType !== "pptx" ? undefined : () => setEditing(true)}
        onClose={onClose}
      >
        <ResultPreview variant={isDeck ? "slides" : variant} templateName={templateName} />
      </TabletResultViewer>
    );
  }

  // 767px 이하 — 상단바는 태블릿·데스크톱과 같은 구성을 그대로 쓰고,
  // 상단바 아래에 "PC 에디터" 안내 스트립만 덧붙인다.
  // 모바일에서는 편집기로 들어가지 않으므로 onEdit 은 넘기지 않는다.
  if (fileType === "mp4") {
    return (
      <TabletVideoResultViewer
        fileName={filename}
        files={files}
        notice={<MobileEditorNotice />}
        onClose={onClose}
      />
    );
  }
  return (
    <TabletResultViewer
      fileType={fileType}
      fileName={filename}
      files={files}
      /* HTML 은 모바일에서 안내 스트립을 걷는다 — 화면 폭을 꽉 쓰는 결과물 위에
         고정 띠가 얹히면 좁은 화면이 더 좁아진다. 편집은 어차피 PC 에서만 된다는 사실은
         편집 진입점이 없는 것으로 이미 드러난다. */
      notice={fileType === "html" ? undefined : <MobileEditorNotice />}
      deckPages={deckPages}
      onClose={onClose}
    >
      <ResultPreview variant={isDeck ? "slides" : variant} templateName={templateName} />
    </TabletResultViewer>
  );
}

// ── 문서 미리보기 본문 (목업) ────────────────────────────────────────────────
// 자리표시자 막대 대신 실제 문서 텍스트를 그대로 렌더한다.
const DOC_SECTIONS: { heading: string; rows: [string, string][] }[] = [
  {
    heading: "민원인 인적사항",
    rows: [
      ["성명", "홍길동"],
      ["생년월일", "1988. 04. 12."],
      ["연락처 / 주소", "010-1234-5678 / 서울특별시 강남구 테헤란로 123"],
    ],
  },
  {
    heading: "수용자 인적사항",
    rows: [
      ["성명", "김철수"],
      ["민원인과의 관계", "형제"],
      ["수용 기관", "서울남부교도소"],
    ],
  },
  {
    heading: "신청 사유",
    rows: [
      ["처분 일자", "2026. 06. 23."],
      ["처분 내용", "접견 제한 처분 (30일)"],
      ["신청 사유", "처분 사유에 사실관계 오인이 있어 재심사를 요청합니다."],
    ],
  },
];

function DocumentPagePreview({ templateName }: { templateName: string }) {
  return (
    <div className="flex-1 bg-[#e9ecf0] py-5 px-4">
      <div
        className="mx-auto bg-white"
        style={{
          width: "100%",
          maxWidth: 720,
          boxShadow: "0 2px 14px rgba(0,0,0,0.12)",
          padding: "clamp(28px, 6%, 56px) clamp(22px, 7%, 60px)",
          minHeight: 660,
        }}
      >
        {/* 표제 */}
        <p className="text-center" style={{ ...f, fontWeight: 800, fontSize: 22, color: "#1B2440", letterSpacing: "-0.5px", lineHeight: 1.35 }}>
          {templateName}
        </p>
        <p className="text-center" style={{ ...f, fontWeight: 500, fontSize: 13.5, color: "#4B5262", lineHeight: 1.7, marginTop: 10 }}>
          행정처분에 대한 이의신청 및 권리 구제 신청서
        </p>
        <div className="mx-auto" style={{ width: 56, height: 2, background: "#1B2440", margin: "18px auto 26px" }} />

        {/* 본문 섹션 */}
        {DOC_SECTIONS.map((sec) => (
          <div key={sec.heading} style={{ marginBottom: 24 }}>
            <div className="flex items-center gap-2 mb-3">
              <span className="size-2 bg-black shrink-0" />
              <span style={{ ...f, fontWeight: 700, fontSize: 14, color: "#111" }}>{sec.heading}</span>
            </div>
            <div className="border border-[#c9ccd2]">
              {sec.rows.map(([label, value], rw) => (
                <div key={label} className="flex" style={{ borderBottom: rw < sec.rows.length - 1 ? "1px solid #d5d8dd" : "none" }}>
                  <div className="w-[32%] px-3 py-2.5 bg-[#f3f4f6] shrink-0 flex items-center" style={{ borderRight: "1px solid #d5d8dd" }}>
                    <span style={{ ...f, fontWeight: 600, fontSize: 13, color: "#374151", lineHeight: 1.5 }}>{label}</span>
                  </div>
                  <div className="flex-1 min-w-0 px-3 py-2.5">
                    <span style={{ ...f, fontWeight: 400, fontSize: 13, color: "#111", lineHeight: 1.6 }}>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* 확인 문구 · 서명란 */}
        <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#111", marginTop: 26, lineHeight: 1.8 }}>
          본인은 위 내용이 사실과 다름이 없음을 확인하며, 신청서 제출에 동의합니다.
        </p>
        <p className="text-center" style={{ ...f, fontWeight: 500, fontSize: 13, color: "#374151", marginTop: 26 }}>
          2026년 8월 5일
        </p>
        <p className="text-right" style={{ ...f, fontWeight: 500, fontSize: 13, color: "#111", marginTop: 14 }}>
          신청인: 홍길동 &nbsp;(인)
        </p>
      </div>
    </div>
  );
}

// 결과물 미리보기 — 모바일 뷰어와 태블릿 셸이 함께 쓰는 콘텐츠(마크업 그대로)
function ResultPreview({ variant, templateName }: { variant: ResultCardVariant; templateName: string }) {
  return (
    <>
      {/* ── 영상 ── */}
      {variant === "mp4" && (
        <div className="flex-1 bg-black flex items-center justify-center">
          <div className="relative w-full aspect-video bg-[#0d0d0f] overflow-hidden">
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,#7f92a8 0%,#3a4756 55%,#1c2430 100%)" }} />
            <button className="absolute inset-0 flex items-center justify-center">
              <span className="size-16 rounded-full bg-black/45 flex items-center justify-center">
                <Play size={26} color="white" fill="white" />
              </span>
            </button>
            <div className="absolute bottom-0 left-0 right-0 px-3 pb-2.5 pt-8" style={{ background: "linear-gradient(180deg,transparent,rgba(0,0,0,0.55))" }}>
              <div className="h-1 rounded-full bg-white/30 mb-2.5"><div className="h-full w-[8%] rounded-full bg-white" /></div>
              <div className="flex items-center gap-3">
                <Play size={16} color="white" fill="white" />
                <span style={{ ...f, fontWeight: 500, fontSize: 11.5, color: "white" }}>0:00 / 0:10</span>
                <div className="ml-auto flex items-center gap-3.5">
                  <Volume2 size={16} color="white" />
                  <Maximize2 size={15} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── 이미지 ── */}
      {variant === "png" && (
        <div className="flex-1 bg-[#f1f5f9] flex items-center justify-center p-4">
          <div className="w-full rounded-[14px] overflow-hidden border border-[#e2e8f0]"
            style={{ aspectRatio: "4/5", background: "linear-gradient(135deg,#fde68a 0%,#fca5a5 50%,#c4b5fd 100%)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 text-center">
              <ImageIcon size={30} color="rgba(255,255,255,0.92)" />
              <p style={{ ...f, fontWeight: 700, fontSize: 15, color: "white", letterSpacing: "-0.3px" }}>{templateName}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── 문서 (Word/HWP) ── 실제 문서 페이지처럼 텍스트를 그대로 렌더한다 */}
      {variant === "word" && <DocumentPagePreview templateName={templateName} />}

      {/* ── 슬라이드 ── */}
      {/* 슬라이드 한 장 — 담기는 틀(덱의 16:9 칸, 편집기의 아트보드)을 그대로 채운다.
          예전에는 검은 매트 위에 16:9 카드를 스스로 얹었는데, 이미 16:9 인 틀 안에 들어가면
          매트가 이중으로 겹쳐 슬라이드 주위가 넓게 비어 보였다. */}
      {variant === "slides" && (
        <div
          className="flex-1 min-h-0 relative overflow-hidden"
          style={{ background: "radial-gradient(120% 120% at 25% 20%, #24304c 0%, #0a0e18 70%)" }}
        >
          <div className="absolute inset-0 p-5 flex flex-col justify-end">
            <div className="h-2.5 rounded-full mb-3" style={{ width: "38%", background: "rgba(236,72,153,0.85)" }} />
            <div className="h-4 rounded bg-white/85 mb-2.5" style={{ width: "72%" }} />
            <div className="h-2 rounded bg-white/40" style={{ width: "56%" }} />
          </div>
        </div>
      )}

      {/* ── 웹 페이지 (랜딩/상세) ── */}
      {variant === "html" && <HtmlPagePreview />}
    </>
  );
}

/**
 * 웹 페이지 결과물 미리보기.
 *
 * 태블릿 이상에서는 흰 카드를 회색 바탕 위에 올려 "브라우저 안의 페이지"처럼 보여 주고,
 * 모바일에서는 그 껍데기를 전부 걷어낸다 — 웹 페이지는 원래 화면 폭을 그대로 쓰는 것이고,
 * 좁은 화면에서 좌우 여백 + 테두리 + 라운드까지 얹으면 볼 수 있는 폭만 줄어든다.
 *
 * 본문이 짧아도 흰 면이 아래까지 이어지도록 flex-1 을 준다. 그러지 않으면 콘텐츠가
 * 위쪽에만 몰리고 그 아래로 회색 바탕이 넓게 남아, 결과물이 잘린 것처럼 보인다.
 */
function HtmlPagePreview() {
  const isTabletUp = useIsTabletUp();

  const body = (
    <>
      <div className="relative shrink-0" style={{ aspectRatio: "16/11", background: "linear-gradient(135deg,#1e293b 0%,#0f172a 100%)" }}>
        <div className="absolute inset-0 p-6 flex flex-col justify-center gap-2.5">
          <div className="h-2 rounded bg-white/45" style={{ width: "28%" }} />
          <div className="h-5 rounded bg-white/85" style={{ width: "74%" }} />
          <div className="h-2.5 rounded bg-white/40" style={{ width: "58%" }} />
          <div className="h-7 rounded-full mt-2" style={{ width: "40%", background: "#4f7bff" }} />
        </div>
      </div>
      <div className="flex-1 p-6 flex flex-col gap-5">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="h-3 rounded bg-[#cbd5e1]" style={{ width: "45%" }} />
            <div className="h-2 rounded bg-[#e2e8f0]" style={{ width: "92%" }} />
            <div className="h-2 rounded bg-[#e2e8f0]" style={{ width: "80%" }} />
          </div>
        ))}
      </div>
    </>
  );

  if (!isTabletUp) {
    // 모바일 — full-bleed. 감싸는 카드 없이 결과물이 곧 화면이다.
    return <div className="flex-1 flex flex-col bg-white">{body}</div>;
  }

  return (
    <div className="flex-1 bg-[#f1f5f9] p-4">
      <div
        className="mx-auto bg-white rounded-[14px] overflow-hidden border border-[#e2e8f0] flex flex-col"
        style={{ maxWidth: 480, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
      >
        {body}
      </div>
    </div>
  );
}

// ─── Workspace ────────────────────────────────────────────────────────────────

function WorkspaceScreen({ category, templateName, fileType, onBack, onCreditClick, onBellClick }: {
  category: WorkspaceCategory; templateName: string;
  /** 진입한 카테고리(필터 탭)가 정한 결과물 형식 — 확장자와 뷰어 상단바를 함께 결정한다 */
  fileType: ViewerFileType;
  onBack: () => void; onCreditClick: () => void; onBellClick: () => void;
}) {
  const [generated, setGenerated] = useState(false);
  const [stepsOpen, setStepsOpen] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();

  // ── 결과물 뷰어·에디터 ────────────────────────────────────────────────────
  // "결과 확인하기"가 여는 대상. 데스크톱에서는 채팅의 형제 열로, 그보다 좁은 화면에서는
  // 지금처럼 화면을 덮는 오버레이로 렌더한다.
  const [viewerReq, setViewerReq] = useState<ResultViewerRequest | null>(null);
  const openViewer = useCallback((r: ResultViewerRequest) => setViewerReq(r), []);
  const closeViewer = useCallback(() => setViewerReq(null), []);

  // 2단 구성일 때의 접기 상태 — 경계 토글과 에디터 상단바의 전체화면 버튼이 함께 본다.
  const [chatCollapsed, setChatCollapsed] = useState(false);
  const split = useMemo(
    () => ({ chatCollapsed, toggle: () => setChatCollapsed((v) => !v) }),
    [chatCollapsed],
  );
  // 결과물을 닫으면 다음 번에 다시 2단으로 열리도록 접기 상태를 되돌린다.
  useEffect(() => { if (!viewerReq) setChatCollapsed(false); }, [viewerReq]);

  const splitActive = isDesktop && !!viewerReq;
  // 2단 구성이 아닐 때(오버레이로 열린 뒤 창을 줄인 경우 등)는 접기 상태를 무시한다.
  const chatHidden = splitActive && chatCollapsed;

  // 하단 입력창은 fixed라 채팅 스크롤 위에 겹쳐 뜬다.
  // 그 높이를 실제로 재서 (1) 스크롤 하단 여백과 (2) 폼 카드의 최대 높이에 쓴다.
  // 예전에는 둘 다 상수(130px / 120px)로 잡혀 있었는데, 입력창이 그보다 높아지면
  // 상세 프롬프트 카드가 화면에 보이는 높이보다 커져 카드 하단(이전·생성 버튼)이
  // 입력창 뒤로 잘려 들어갔다.
  const [promptH, setPromptH] = useState(130);
  useEffect(() => {
    const el = promptRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setPromptH(entry.contentRect.height));
    ro.observe(el);
    setPromptH(el.getBoundingClientRect().height);
    return () => ro.disconnect();
  }, []);

  const wsSteps: { type: "read" | "help"; text: string; file: boolean }[] = [
    { type: "read", text: "이미지 생성 스킬의 워크플로우를 확인하기 위해 SKILL.md 파일을 읽습니다.", file: true },
    { type: "read", text: "템플릿의 프롬프트 구조를 확인하기 위해 'img-31' 템플릿의 prompt.json 파일을 읽습니다.", file: true },
    { type: "help", text: "도움이 필요합니다", file: false },
  ];

  const handleGenerate = () => setGenerated(true);

  // 결과물이 렌더된 뒤 스크롤을 맨 아래로 이동
  useEffect(() => {
    if (!generated) return;
    const t = setTimeout(() => {
      chatScrollRef.current?.scrollTo({ top: chatScrollRef.current.scrollHeight, behavior: "smooth" });
    }, 80);
    return () => clearTimeout(t);
  }, [generated]);

  const promptBottom = "0px";

  return (
    <OpenResultViewerContext.Provider value={openViewer}>
    <div
      /* 본문 컬럼 안에서만 덮는다 — 왼쪽 도킹 사이드바는 가리지 않는다.
         (화면 전체를 덮던 fixed 시절에는 워크스페이스 전용 드로어가 따로 필요했다) */
      className="absolute inset-0 z-[90] bg-[#f8fafc] flex"
      /* 상단바(56px) + 하단 입력창 + 숨 쉴 여백을 뺀, 카드가 실제로 쓸 수 있는 높이.
         CARD_SHELL 이 이 값을 max-height 로 받는다. */
      style={{ "--fc-card-max-h": `calc(100dvh - ${56 + promptH + 24}px)` } as React.CSSProperties}
    >
      <style>{`
        @keyframes wsFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes wsSlideRight { from { opacity:0; transform:translateX(-6px); } to { opacity:1; transform:translateX(0); } }
        @keyframes wsDot { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-4px); } }
      `}</style>
      {/* ── 채팅 열 ─────────────────────────────────────────────────────────
          결과물이 열리지 않았을 때는 화면 전체를, 2단 구성에서는 왼쪽 40% 를 쓴다.
          폭은 두 상태(40% · 0%)만 오가고 중간값은 없다 — 드래그 리사이즈를 두지 않는 이유는
          splitView.ts 주석 참고. 오른쪽 열의 min-width 때문에 창이 좁으면 이 열이 먼저 양보한다. */}
      <div
        className="relative min-h-0 flex flex-col overflow-hidden"
        style={{
          flex: splitActive ? `0 1 ${chatHidden ? "0px" : CHAT_COL_BASIS}` : "1 1 100%",
          minWidth: 0,
          borderRight: splitActive && !chatHidden ? "1px solid #e5e9ef" : undefined,
          /* 접히는 동안에는 보이다가, 폭이 0이 된 뒤에야 숨는다.
             visibility 로 감춰야 접힌 패널의 버튼이 탭 순서와 스크린리더에서도 함께 빠진다. */
          visibility: chatHidden ? "hidden" : "visible",
          transition:
            `flex-basis ${SPLIT_ANIM_MS}ms ${SPLIT_EASE}, ` +
            `visibility 0s linear ${chatHidden ? SPLIT_ANIM_MS : 0}ms`,
        }}
      >
      {/* TopBar */}
      <header className="h-14 flex items-center gap-3 px-4 shrink-0 bg-[#f8fafc] z-10">
        {/* 좁은 화면에서만 직전 화면으로 돌아가는 ←. 데스크톱에서는 옆에 도킹된
            사이드바가 이동을 맡으므로 이 자리를 비운다.
            히스토리(back)가 아니라 onBack 을 쓴다 — 이 앱은 라우터가 없어
            화면 전환이 히스토리에 쌓이지 않으므로 history.back() 은 앱 밖으로 나간다. */}
        {!isDesktop && (
          <button onClick={onBack} aria-label="뒤로 가기" className="flex items-center justify-center size-9 rounded-[10px] shrink-0"><IconChevronLeft /></button>
        )}
        <p className="flex-1 truncate" style={{ ...f, fontWeight: 600, fontSize: 15, color: "#0a0a0a", letterSpacing: "-0.4px" }}>{templateName}</p>
      </header>

      {/* Chat scroll */}
      <div ref={chatScrollRef} className="flex-1 overflow-y-auto pb-4" style={{ paddingBottom: `${promptH + 80}px`, scrollbarWidth: "none" }}>
        {/* 채팅 정렬 축 — 말풍선·단계 아코디언·상세 프롬프트 카드·결과가 모두 이 래퍼 안에서 같은 좌우 끝선을 쓴다 */}
        <div className="mx-auto w-full max-w-[900px] px-4 md:px-6 flex flex-col gap-3.5" style={{ animation: "wsFadeIn 300ms ease" }}>
          {/* Template preview card — 사용자 메시지처럼 오른쪽 정렬 + 축소 */}
          <div className="flex justify-end">
            <div className="rounded-[16px] overflow-hidden" style={{ width: "66%", background: "#eef1f7", boxShadow: "0px 2px 10px rgba(0,0,0,0.06)" }}>
              <div className="px-3 pt-3 pb-2.5">
                <div className="bg-white rounded-[10px] px-3 pt-3 pb-3 flex flex-col items-center gap-0" style={{ boxShadow: "0px 1px 4px rgba(0,0,0,0.07)", minHeight: 92 }}>
                  <div className="h-[7px] rounded-full bg-[#c8d0de] self-stretch mx-2 mb-2.5" />
                  <div className="w-full flex flex-col gap-[5px]">
                    {[72, 90, 82, 66, 54].map((w, i) => (
                      <div key={i} className="h-[5px] rounded-full bg-[#dde2ec]" style={{ width: `${w}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              {/* 선택한 템플릿 라벨 + 제목 */}
              <div className="px-3 pb-3">
                <p style={{ ...f, fontWeight: 700, fontSize: 11, color: "#9aa7bd", letterSpacing: "-0.2px", marginBottom: 3 }}>선택한 템플릿</p>
                <p style={{ ...f, fontWeight: 700, fontSize: 14, color: "#0a0a0a", letterSpacing: "-0.4px", lineHeight: 1.3 }}>{templateName}</p>
              </div>
            </div>
          </div>

          {/* 사용자 말풍선 — 오른쪽 정렬 */}
          <div className="flex justify-end">
            <div className="rounded-[18px] rounded-tr-[6px] px-4 py-3" style={{ background: "#e5e9f0", maxWidth: "82%" }}>
              <p style={{ ...f, fontSize: 14.5, color: "#0a0a0a", lineHeight: 1.6, fontWeight: 400 }}>이 템플릿으로 시작할게요. 어떤 내용을 채워야 하는지 알려주세요.</p>
            </div>
          </div>

          {/* 단계 목록 — 접기/펼치기 */}
          <div className="w-full bg-white rounded-[16px] border border-[#e5e9ef] overflow-hidden">
            <button onClick={() => setStepsOpen((v) => !v)} className="w-full flex items-center gap-3 px-5 py-4">
              {stepsOpen ? (
                <svg width="16" height="16" fill="none" viewBox="0 0 18 18"><path d="M5 7l4 4 4-4" stroke="#8a96a8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              ) : (
                <svg width="16" height="16" fill="none" viewBox="0 0 18 18"><path d="M5 11l4-4 4 4" stroke="#8a96a8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              )}
              <span style={{ ...f, fontWeight: 400, fontSize: 15, color: "#8a96a8" }}>{stepsOpen ? "단계 숨기기" : `${wsSteps.length}개 단계 더 보기`}</span>
            </button>

            {stepsOpen && (
              <div className="px-5 pb-5 flex flex-col gap-4" style={{ animation: "wsFadeIn 200ms ease" }}>
                {wsSteps.map((s, i) =>
                  s.type === "help" ? (
                    <div key={i} className="flex items-center gap-2.5">
                      <HelpCircle size={18} color="#64748b" strokeWidth={1.7} className="shrink-0" />
                      <p style={{ ...f, fontWeight: 400, fontSize: 14, color: "#64748b" }}>{s.text}</p>
                    </div>
                  ) : (
                    <div key={i}>
                      <div className="flex items-start gap-2.5">
                        <BookOpen size={18} color="#64748b" strokeWidth={1.7} className="shrink-0 mt-0.5" />
                        <p style={{ ...f, fontWeight: 400, fontSize: 14, color: "#475569", lineHeight: 1.55 }}>{s.text}</p>
                      </div>
                      {s.file && (
                        <div className="flex mt-2" style={{ paddingLeft: 9 }}>
                          <div style={{ width: 1.5, background: "#e2e8f0", marginRight: 14, borderRadius: 1 }} />
                          <span className="rounded-full px-2.5 py-1" style={{ background: "#eef1f5", ...f, fontWeight: 600, fontSize: 12, color: "#64748b" }}>생성된 파일</span>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            )}
          </div>

          {/* Form card — category-specific slot */}
          <FormCardSlot category={category} onGenerate={handleGenerate} />

          {/* 생성 결과물 — 생성하기 클릭 후 노출 */}
          {generated && <WsResult category={category} templateName={templateName} fileType={fileType} />}

        </div>
      </div>

      {/* 하단 입력창 — 채팅 열 안쪽에 고정된다(2단 구성에서 에디터 열까지 넘어가지 않도록 absolute) */}
      <div ref={promptRef} className="absolute left-0 right-0 z-[89]" style={{ bottom: promptBottom }}>
        <WsChatInput onGenerate={handleGenerate} />
      </div>
      </div>

      {/* ── 에디터 열 ───────────────────────────────────────────────────────
          채팅과 형제로 폭을 나눠 갖는다(오버레이 아님).
          min-width 로 상단바가 깨지는 폭 아래로는 절대 내려가지 않게 못박는다. */}
      {splitActive && (
        <div
          className="relative min-h-0 flex"
          style={{ flex: "1 1 auto", minWidth: EDITOR_MIN_W }}
        >
          {/* 접혔을 때 토글이 설 자리.
              펼쳐져 있으면 토글은 채팅과의 경계에 반쯤 걸쳐 서므로 자리가 필요 없지만,
              접히면 걸칠 경계가 없어 이 홈이 대신 자리를 내준다 — 이게 없으면
              토글이 에디터의 좌측 도구 레일 위에 그대로 얹힌다. */}
          <div
            className="shrink-0"
            style={{
              width: chatHidden ? 14 : 0,
              background: "#f8fafc",
              transition: `width ${SPLIT_ANIM_MS}ms ${SPLIT_EASE}`,
            }}
          />

          <div className="relative flex-1 min-w-0">
            <SplitViewContext.Provider value={split}>
              <ResultViewer
                variant={viewerReq!.variant}
                fileType={viewerReq!.fileType}
                filename={viewerReq!.filename}
                templateName={viewerReq!.templateName}
                deckPages={viewerReq!.deckPages}
                embedded
                onClose={closeViewer}
              />
            </SplitViewContext.Provider>
          </div>
        </div>
      )}

      {/* 데스크톱보다 좁은 화면 — 결과물은 지금처럼 화면을 덮는 전체화면으로 연다 */}
      {viewerReq && !isDesktop && (
        <ResultViewer
          variant={viewerReq.variant}
          fileType={viewerReq.fileType}
          filename={viewerReq.filename}
          templateName={viewerReq.templateName}
          deckPages={viewerReq.deckPages}
          onClose={closeViewer}
        />
      )}
    </div>
    </OpenResultViewerContext.Provider>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="shrink-0 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 pb-6 pt-2">
      {[
        ["딸깍.net · AI 통합 서비스 · © 2026", "rgba(115,115,115,0.7)"],
        ["·", "rgba(115,115,115,0.3)"],
        ["고객센터", "rgba(115,115,115,0.7)"],
        ["|", "rgba(115,115,115,0.3)"],
        ["이용약관", "rgba(115,115,115,0.7)"],
        ["|", "rgba(115,115,115,0.3)"],
        ["개인정보처리방침", "rgba(115,115,115,0.7)"],
      ].map(([text, color], i) => (
        <span key={i} style={{ ...f, fontWeight: 500, fontSize: 11, color: color as string, whiteSpace: "nowrap" }}>{text}</span>
      ))}
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

// [formfill 임시] 모듈 로드 시 1회만 판정 — 렌더 중에 값이 바뀌지 않아 훅 순서에 영향이 없다.
const FORMFILL_DEV = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("formfill") === "1";

export default function App() {
  if (FORMFILL_DEV) return <FormFillPlayground />; // [formfill 임시] 이 줄과 위 2줄, import 1줄만 지우면 원상 복구

  const [drawerOpen, setDrawerOpen] = useState(false);
  // 데스크톱의 도킹 사이드바가 아이콘 레일로 접혀 있는지. 오버레이 드로어(좁은 화면)와는
  // 별개의 상태다 — 창을 줄였다 늘려도 접기 선택이 그대로 남는다.
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [screen, setScreen] = useState<Screen>("home");
  const [creditOpen, setCreditOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  // fileType — "템플릿 적용하기"로 들어온 카테고리(필터 탭)가 정한 결과물 형식.
  // 워드 → .docx / 한글 → .hwpx / 엑셀 → .xlsx / 논문 → .pdf / 영상 → .mp4
  const [workspace, setWorkspace] = useState<
    { category: WorkspaceCategory; templateName: string; fileType: ViewerFileType } | null
  >(null);
  const openWorkspace = (category: WorkspaceCategory) => (templateName: string, tabLabel: string) =>
    setWorkspace({
      category,
      templateName,
      fileType: resolveFileType(tabLabel, CATEGORY_FILE_TYPE[category]),
    });

  // 서식 채우기 — screen 문자열만으로는 "어떤 서식인지"를 담을 수 없어 대상만 따로 든다.
  const [fillTarget, setFillTarget] = useState<{ id: string; title: string } | null>(null);
  // 서식 목록의 필터칩·정렬·스크롤. 목록이 언마운트돼도 유지되도록 App 이 보관한다.
  const [formsTab, setFormsTab] = useState(0);
  const [formsSort, setFormsSort] = useState<SortOption>("인기순");
  const formsScrollTop = useRef(0);

  const [tutorialOpen, setTutorialOpen] = useState(false);
  // 알림 팝오버의 앵커(헤더 벨 버튼)
  const bellRef = useRef<HTMLButtonElement>(null);
  const isTabletRange = useIsTabletRange();
  // 768px 이상에서는 알림·크레딧을 팝오버/모달로 바꿔 렌더한다(컴포넌트 자체를 교체 — CSS 숨김 아님)
  const isTabletUp = useIsTabletUp();
  // 1200px 이상 — 사이드바가 오버레이 드로어가 아니라 도킹 컬럼이 된다.
  const isDesktop = useIsDesktop();

  /**
   * 사이드바 이동. 워크스페이스는 screen 과 별개의 상태로 본문을 덮고 있어,
   * 함께 지우지 않으면 "홈"을 눌러도 워크스페이스가 그대로 남는다.
   * (예전에는 워크스페이스 전용 드로어가 onGoHome 으로 같은 일을 했다.)
   */
  const navigate = (s: Screen) => { setWorkspace(null); setScreen(s); };

  /**
   * 워크스페이스에 들어가면 사이드바를 아이콘 레일로 접고, 나오면 다시 편다.
   * 워크스페이스는 채팅 열과 에디터 열이 가로 폭을 나눠 쓰는 화면이라 280px 을
   * 이동 메뉴에 내주기 아깝다 — 다른 화면에서는 펼친 쪽이 기본이다.
   *
   * "들어갈 때/나올 때" 한 번씩만 건드리므로, 그 사이에 사용자가 직접 펴거나 접은
   * 선택은 그대로 남는다.
   */
  const inWorkspace = !!workspace;
  useEffect(() => { setSidebarCollapsed(inWorkspace); }, [inWorkspace]);

  const isSubScreen = ["image-ai", "landing-ai", "forms-ai", "docs-ai", "audio-ai", "ppt-ai", "video-ai", "credit-history", "notifications-all"].includes(screen);

  // 튜토리얼 다시 보기 — 홈으로 돌아가 1단계부터 다시 실행한다(중복 실행 방지)
  const startTutorial = () => {
    if (tutorialOpen) return;
    setDrawerOpen(false);
    setSettingsOpen(false);
    setWorkspace(null);
    setScreen("home");
    requestAnimationFrame(() => setTutorialOpen(true));
  };

  const tutorialSteps: TutorialStepConfig[] = [
    {
      target: '[data-tutorial="composer"]',
      title: "메시지 입력",
      description: "만들고 싶은 작업을 자유롭게 적고 전송 버튼으로 대화를 시작하세요.",
    },
    {
      target: '[data-tutorial="attach"]',
      title: "파일 첨부",
      description: "이미지·PDF·엑셀 등 파일을 첨부하면 AI가 함께 분석합니다.",
    },
    {
      target: '[data-tutorial="skill"]',
      title: "스킬 선택",
      description: "전문 스킬을 선택하면 더 정확하고 풍부한 결과를 얻을 수 있어요.",
    },
    {
      target: '[data-tutorial="upload"]',
      title: "양식 업로드",
      description: "올린 양식과 똑같은 형식으로 문서를 만들어줍니다.",
    },
    {
      target: ['[data-tutorial="auto-prompt"]', '[data-tutorial="doc-source"]'],
      title: "자동 프롬프트 · 원문 사용",
      description: "자동 프롬프트는 질문을 최적화하고, 원문 사용은 참고문서 전체를 AI 입력에 포함합니다.",
    },
    {
      target: '[data-tutorial="categories"]',
      title: "카테고리",
      description: "이미지·랜딩페이지·동영상·문서 등 원하는 작업을 골라 바로 시작할 수 있어요.",
    },
    {
      target: '[data-tutorial="template-grid"]',
      title: "템플릿 선택",
      description: "카테고리를 열면 바로 쓸 수 있는 템플릿이 나와요. 카드를 눌러 템플릿을 적용해 보세요.",
      onEnter: () => setScreen("image-ai"),
      onExit: () => setScreen("home"),
    },
    {
      target: null,
      title: "결과 확인하기 (보너스)",
      description: "작업이 끝나면 파일 카드의 '결과 확인하기'로 결과물을 바로 열어보고 다운로드할 수 있습니다.",
    },
  ];

  return (
    /* 데스크톱은 가로 2단 — 도킹 사이드바 + 본문 컬럼. 그보다 좁으면 사이드바가
       오버레이 드로어라 자리를 차지하지 않고, 본문 컬럼 혼자 폭을 전부 쓴다. */
    <div className="bg-[#f8fafc] h-[100dvh] w-full flex overflow-hidden" style={f}>
      <SidebarDrawer
        variant={isDesktop ? "docked" : "drawer"}
        open={isDesktop || drawerOpen}
        onClose={() => setDrawerOpen(false)}
        collapsed={sidebarCollapsed}
        onToggleCollapsed={() => setSidebarCollapsed((v) => !v)}
        currentScreen={screen}
        onNavigate={navigate}
        onSettingsOpen={() => setSettingsOpen(true)}
        onStartTutorial={startTutorial}
      />
      {/* 본문 컬럼 — 워크스페이스가 이 안에서 absolute 로 덮으므로 relative 가 필요하다 */}
      <div className="flex-1 min-w-0 relative flex flex-col overflow-hidden">
      <TopBar
        onMenuOpen={() => setDrawerOpen(true)}
        onBack={() => setScreen("home")}
        showBack={isSubScreen}
        brand={!isDesktop}
        onCreditClick={() => setCreditOpen(true)}
        onBellClick={() => setNotifOpen((v) => !v)}
        bellRef={bellRef}
      />
      {screen === "home" && <HomeScreen onNavigate={setScreen} />}
      {screen === "image-ai" && (
        <AIAgentScreen
          category="이미지"
          title=", 한 줄이면 충분해요"
          desc={SERVICE_COPY.image}
          filterTabs={["전체", "이미지", "카드뉴스", "상세페이지"]}
          cards={imageAICards}
          wsCategory="image"
          onWorkspace={openWorkspace("image")}
        />
      )}
      {screen === "landing-ai" && (
        <AIAgentScreen
          category="랜딩페이지"
          title=", 한 줄이면 충분해요"
          desc={SERVICE_COPY.landing}
          filterTabs={["전체", "SaaS", "서비스", "이벤트"]}
          cards={landingAICards}
          wsCategory="landing"
          onWorkspace={openWorkspace("landing")}
        />
      )}
      {screen === "forms-ai" && (
        <FormsAIScreen
          activeTab={formsTab}
          onTabChange={setFormsTab}
          sortOption={formsSort}
          onSortChange={setFormsSort}
          scrollTopRef={formsScrollTop}
          onOpenForm={(id, title) => { setFillTarget({ id, title }); setScreen("forms-fill"); }}
        />
      )}
      {screen === "docs-ai" && (
        <AIAgentScreen
          category="문서"
          title=", 한 줄이면 충분해요"
          desc={SERVICE_COPY.docs}
          filterTabs={["전체", "워드", "한글", "엑셀", "논문"]}
          cards={docsCards}
          cardRatio="140%"
          wsCategory="docs"
          onWorkspace={openWorkspace("docs")}
        />
      )}
      {screen === "audio-ai" && (
        <AIAgentScreen
          category="오디오"
          title=", 한 줄이면 충분해요"
          desc={SERVICE_COPY.audio}
          filterTabs={["전체", "음악", "팟캐스트"]}
          cards={[]}
        />
      )}
      {screen === "ppt-ai" && (
        <AIAgentScreen
          category="프레젠테이션"
          title=", 한 줄이면 충분해요"
          desc={SERVICE_COPY.ppt}
          filterTabs={["전체", "비즈니스", "교육", "포트폴리오"]}
          cards={pptAICards}
          cardRatio="81%"
          wsCategory="ppt"
          onWorkspace={openWorkspace("ppt")}
        />
      )}
      {screen === "video-ai" && (
        <AIAgentScreen
          category="동영상"
          title=", 한 줄이면 충분해요"
          desc={SERVICE_COPY.video}
          filterTabs={["전체", "영상", "유튜브영상"]}
          cards={videoAICards}
          cardRatio="203%"
          wsCategory="video"
          onWorkspace={openWorkspace("video")}
        />
      )}
      {screen === "favorites" && <FavoritesScreen />}
      {screen === "mywork" && <MyWorkScreen />}
      {/* 태블릿(768~1199px)에서는 HomeScreen 이 스크롤 흐름 끝에서 직접 렌더한다. */}
      {screen === "home" && !isTabletRange && <Footer />}
      {screen === "notifications-all" && <NotificationsAllScreen />}
      {screen === "credit-history" && (
        <CreditHistoryScreen onCharge={() => { setScreen("home"); setCreditOpen(true); }} />
      )}
      {/* 워크스페이스 — 본문 컬럼만 덮는다(사이드바는 옆에 그대로 남는다).
          TopBar 까지 덮는 것은 지금과 같다. */}
      {workspace && (
        <WorkspaceScreen
          category={workspace.category}
          templateName={workspace.templateName}
          fileType={workspace.fileType}
          onBack={() => setWorkspace(null)}
          onCreditClick={() => setCreditOpen(true)}
          onBellClick={() => setNotifOpen(true)}
        />
      )}
      </div>
      {notifOpen && (isTabletUp ? (
        <NotificationsPopover anchorRef={bellRef} onClose={() => setNotifOpen(false)} onViewAll={() => { setNotifOpen(false); setScreen("notifications-all"); }} />
      ) : (
        <NotificationsPanel onClose={() => setNotifOpen(false)} onViewAll={() => { setNotifOpen(false); setScreen("notifications-all"); }} />
      ))}
      {creditOpen && (isTabletUp ? (
        <CreditModal onClose={() => setCreditOpen(false)} onHistoryClick={() => setScreen("credit-history")} />
      ) : (
        <CreditBottomSheet onClose={() => setCreditOpen(false)} onHistoryClick={() => setScreen("credit-history")} />
      ))}
      <TutorialTour isOpen={tutorialOpen} steps={tutorialSteps} onClose={() => { setTutorialOpen(false); setScreen("home"); }} />
      {settingsOpen && (
        <SettingsModal
          onClose={() => setSettingsOpen(false)}
          onCreditHistory={() => { setSettingsOpen(false); setScreen("credit-history"); }}
        />
      )}
      {/* 서식 채우기 — 데스크톱 3단. TopBar·사이드바까지 덮는 전체 화면이라 최상단에 얹는다.
          좌측 컬럼은 앱 공용 SidebarDrawer 를 docked 로 주입한다(서식 화면 전용 사이드바 없음). */}
      {screen === "forms-fill" && fillTarget && (
        <FormFillDesktop
          formId={fillTarget.id}
          formTitle={fillTarget.title}
          credits={CREDIT_BALANCE}
          onBack={() => setScreen("forms-ai")}
          sidebar={
            <SidebarDrawer
              variant="docked"
              open
              onClose={() => {}}
              collapsed={sidebarCollapsed}
              onToggleCollapsed={() => setSidebarCollapsed((v) => !v)}
              currentScreen={screen}
              onNavigate={navigate}
              onSettingsOpen={() => setSettingsOpen(true)}
              onStartTutorial={startTutorial}
              recentForms={formsCards.slice(0, 4).map((c) => ({ id: c.id, title: c.title }))}
              currentFormId={fillTarget.id}
              onSelectForm={(id, title) => setFillTarget({ id, title })}
            />
          }
        />
      )}
    </div>
  );
}
