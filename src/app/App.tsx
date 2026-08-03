import React, { useState, useRef, useEffect } from "react";
import { HelpCircle, Settings as SettingsIcon, Users, Mail, LogOut, Palette, Bell, Brain, Coins, Monitor, Sun, Moon, RefreshCw, FileText, FileVideo, Compass, Image as ImageIcon, Download, X as XIcon, ChevronDown, Play, Volume2, Maximize2, BookOpen } from "lucide-react";

// ── 공통 에셋 ──────────────────────────────────────────────────────────────────
import svgPaths from "@/imports/새대화딸깍/svg-yz49hawimu";
import svgCard from "@/imports/Container/svg-n3rzud15nf";
// Frame svg paths are identical to Container's — svgCard covers all keys
import imgImageNet from "@/imports/새대화딸깍/70598a9173139973c519fbc9c881094e41ef9297.png";
import imgUserAvatar from "@/imports/새대화딸깍/ec4bf4c83826b512a10ccb46952ef28cdb24b8d8.png";

import { MobileEditorNotice } from "@/app/components/viewer/MobileEditorNotice";
import { ScrollableChips } from "@/app/components/common/ScrollableChips";


// ─── 타입 ──────────────────────────────────────────────────────────────────────
type Screen = "home" | "image-ai" | "landing-ai" | "forms-ai" | "docs-ai" | "audio-ai" | "ppt-ai" | "video-ai" | "favorites" | "mywork" | "credit-history" | "notifications-all";
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
function IconHome() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p275d2400} stroke="#1E293B" strokeWidth="1.66667" /><P d={svgPaths.p1db6d780} stroke="#1E293B" strokeWidth="1.66667" /></svg>;
}
function IconHomeBlue() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p275d2400} stroke="#155DFC" strokeWidth="1.66667" /><P d={svgPaths.p1db6d780} stroke="#155DFC" strokeWidth="1.66667" /></svg>;
}
function IconWork() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p178dcc00} stroke="#1E293B" strokeWidth="1.66667" /></svg>;
}
function IconWorkBlue() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p178dcc00} stroke="#4F7BFF" strokeWidth="1.66667" /></svg>;
}
function IconStar() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.pa6d0980} stroke="#1E293B" strokeWidth="1.66667" /></svg>;
}
function IconStarBlue() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.pa6d0980} stroke="#4F7BFF" strokeWidth="1.66667" /></svg>;
}
function IconFileDoc() {
  return <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><P d={svgPaths.p232b1d80} stroke="#90A1B9" strokeWidth="1.66667" /><P d={svgPaths.p3abdf300} stroke="#90A1B9" strokeWidth="1.66667" /><P d="M8.33333 7.5H6.66667" stroke="#90A1B9" strokeWidth="1.66667" /><P d="M13.3333 10.8333H6.66667" stroke="#90A1B9" strokeWidth="1.66667" /><P d="M13.3333 14.1667H6.66667" stroke="#90A1B9" strokeWidth="1.66667" /></svg>;
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
function IconFilter() {
  return <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><P d="M2 4h12M4 8h8M6 12h4" stroke="#334155" strokeWidth="1.33333" /></svg>;
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

const formsCards = [
  { title: "강제퇴거명령에대한이의신청서", category: "외국인 비자 서식", count: 20, date: "2026. 2. 12." },
  { title: "거소신고(신청)서", category: "외국인 비자 서식", count: 54, date: "2026. 2. 12." },
  { title: "거주소재공사실확인서(명문병기)", category: "외국인 비자 서식", count: 35, date: "2026. 1. 23." },
  { title: "거주소재공사실확인서(중문병기)", category: "외국인 비자 서식", count: 35, date: "2026. 1. 23." },
  { title: "건강확인서", category: "외국인 비자 서식", count: 40, date: "2026. 1. 23." },
  { title: "결혼이민자 부모 등 가족 초청장(F-1-5)", category: "외국인 비자 서식", count: 157, date: "2026. 1. 23." },
  { title: "강점퇴거명령서", category: "외국인 비자 서식", count: 12, date: "2026. 1. 15." },
  { title: "거소신고 사실증명 신청서", category: "외국인 비자 서식", count: 28, date: "2026. 1. 10." },
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

// ─── 공통 컴포넌트 ────────────────────────────────────────────────────────────

const f = { fontFamily: "'Pretendard Variable', sans-serif" };

// 마우스 hover가 가능한 기기인지 여부(데스크톱 true / 터치폰 false).
// 터치 기기에서는 hover 이벤트가 없으므로 카드의 버튼들을 항상 노출/탭 동작으로 대체한다.
const HAS_HOVER =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(hover: hover)").matches;

// ─── 설정 모달 ────────────────────────────────────────────────────────────────

type SettingsTab = "외관" | "알림" | "메모리" | "크레딧";

function SettingsModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<SettingsTab>("외관");
  const [theme, setTheme] = useState<"시스템" | "라이트" | "다크">("시스템");
  const [notifEnabled, setNotifEnabled] = useState(false);

  const tabs: SettingsTab[] = ["외관", "알림", "메모리", "크레딧"];

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
      `}</style>
      {/* backdrop */}
      <div onClick={onClose} className="fixed inset-0 z-[70] bg-black/40" />

      {/* modal panel */}
      <div
        className="fixed left-0 right-0 bottom-0 z-[71] bg-white flex flex-col"
        style={{
          borderRadius: "24px 24px 0 0",
          maxHeight: "92vh",
          animation: "settingsSlideUp 280ms cubic-bezier(0.32,0.72,0,1)",
          boxShadow: "0px -8px 40px rgba(0,0,0,0.18)",
        }}
      >
        {/* drag handle */}
        <div className="flex justify-center pt-3 pb-1 shrink-0">
          <div className="w-9 h-1 rounded-full bg-[#d1d5db]" />
        </div>

        {/* header */}
        <div className="flex items-start justify-between px-5 pt-2 pb-4 shrink-0">
          <div>
            <p style={{ ...f, fontWeight: 700, fontSize: 20, color: "#0a0a0a", letterSpacing: "-0.6px" }}>설정</p>
            <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", marginTop: 3, letterSpacing: "-0.2px" }}>딸깍의 외관과 동작을 설정합니다.</p>
          </div>
          <button onClick={onClose}
            className="size-9 rounded-full bg-[#f1f5f9] flex items-center justify-center shrink-0 mt-0.5">
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M4 4L12 12M12 4L4 12" stroke="#374151" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* tab bar */}
        <div className="shrink-0 px-4 pb-3">
          <div className="flex bg-[#f1f5f9] rounded-[16px] p-1 gap-0.5">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="flex-1 flex flex-col items-center gap-1 py-2.5 rounded-[12px] transition-all duration-150"
                style={{
                  background: tab === t ? "white" : "transparent",
                  boxShadow: tab === t ? "0px 1px 4px rgba(0,0,0,0.1)" : "none",
                  color: tab === t ? "#0a0a0a" : "#9ca3af",
                }}
              >
                {tabIcons[t]}
                <span style={{ ...f, fontWeight: tab === t ? 600 : 500, fontSize: 11 }}>{t}</span>
              </button>
            ))}
          </div>
        </div>

        {/* content */}
        <div className="flex-1 overflow-y-auto px-4 pb-8" style={{ scrollbarWidth: "none" }}>

          {/* ── 외관 ── */}
          {tab === "외관" && (
            <div className="flex flex-col gap-6">
              <div>
                <p style={{ ...f, fontWeight: 700, fontSize: 16, color: "#0a0a0a", letterSpacing: "-0.4px", marginBottom: 6 }}>테마</p>
                <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", letterSpacing: "-0.2px", marginBottom: 14 }}>인터페이스가 기기를 따르도록 하거나 고정된 테마를 선택합니다.</p>
                <div className="flex gap-2.5">
                  {themeCards.map((tc) => (
                    <button
                      key={tc.id}
                      onClick={() => setTheme(tc.id)}
                      className="flex-1 flex flex-col rounded-[16px] overflow-hidden border-2 transition-all duration-150"
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
              </div>

              <div>
                <p style={{ ...f, fontWeight: 700, fontSize: 16, color: "#0a0a0a", letterSpacing: "-0.4px", marginBottom: 6 }}>언어</p>
                <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", letterSpacing: "-0.2px", marginBottom: 12 }}>언어를 전환합니다.</p>
                <div className="relative">
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
              </div>
            </div>
          )}

          {/* ── 알림 ── */}
          {tab === "알림" && (
            <div className="flex flex-col gap-5">
              <div className="flex items-start justify-between gap-3">
                <p style={{ ...f, fontWeight: 400, fontSize: 13.5, color: "#374151", letterSpacing: "-0.2px", lineHeight: 1.6, flex: 1 }}>
                  딸깍는 창이 활성 상태가 아닐 때만 완료 알림을 보냅니다. 장시간 작업에 특히 유용하여 다른 작업을 하다가 완료 알림을 받을 수 있습니다.
                </p>
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
              <button
                className="w-full h-12 rounded-[14px] flex items-center justify-center gap-2"
                style={{ background: "#0a0a0a" }}
              >
                <Bell size={16} strokeWidth={1.8} color="white" />
                <span style={{ ...f, fontWeight: 600, fontSize: 14, color: "white", letterSpacing: "-0.3px" }}>알림 권한 요청</span>
              </button>
            </div>
          )}

          {/* ── 메모리 ── */}
          {tab === "메모리" && (
            <div className="flex flex-col gap-4">
              <p style={{ ...f, fontWeight: 400, fontSize: 13.5, color: "#374151", letterSpacing: "-0.2px", lineHeight: 1.65 }}>
                딸깍는 백그라운드에서 대화를 자동으로 학습합니다. 이러한 기억은 딸깍가 사용자를 더 잘 이해하고 개인화된 경험을 제공하는 데 도움이 됩니다.
              </p>
              <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", letterSpacing: "-0.2px" }}>로딩 중...</p>
            </div>
          )}

          {/* ── 크레딧 ── */}
          {tab === "크레딧" && (
            <div className="flex flex-col gap-5">
              <div>
                <p style={{ ...f, fontWeight: 700, fontSize: 16, color: "#0a0a0a", letterSpacing: "-0.4px", marginBottom: 4 }}>크레딧 사용량</p>
                <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", letterSpacing: "-0.2px", marginBottom: 16 }}>API 사용 비용을 추적합니다.</p>
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
              <div className="flex justify-end">
                <button
                  className="flex items-center gap-1.5 h-9 px-4 rounded-[12px] border border-[#e2e8f0] bg-white"
                  style={{ boxShadow: "0px 1px 2px rgba(0,0,0,0.06)" }}>
                  <RefreshCw size={14} strokeWidth={1.7} color="#6b7280" />
                  <span style={{ ...f, fontWeight: 500, fontSize: 13, color: "#6b7280" }}>새로고침</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* footer */}
        <div className="shrink-0 border-t border-[#f1f5f9] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <img alt="딸깍.net" className="h-4 w-auto object-contain" src={imgImageNet} />
            <span style={{ ...f, fontWeight: 500, fontSize: 11, color: "#9ca3af" }}>v1.0.242</span>
            <span style={{ ...f, fontWeight: 400, fontSize: 11, color: "#d1d5db" }}>4cc9c46</span>
          </div>
          <span style={{ ...f, fontWeight: 400, fontSize: 10, color: "#d1d5db" }}>Build: 2026. 07. 23. 오전 10:26</span>
        </div>
      </div>
    </>
  );
}

// ─── SidebarDrawer ────────────────────────────────────────────────────────────

function SidebarDrawer({ open, onClose, currentScreen, onNavigate, onSettingsOpen }: {
  open: boolean; onClose: () => void;
  currentScreen: Screen; onNavigate: (s: Screen) => void;
  onSettingsOpen: () => void;
}) {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const nav = (s: Screen) => { onNavigate(s); onClose(); };
  const openSettings = () => { setProfileMenuOpen(false); onClose(); onSettingsOpen(); };
  const isHomeVariant = ["image-ai", "landing-ai", "forms-ai", "docs-ai", "audio-ai", "ppt-ai", "video-ai"].includes(currentScreen);
  const active = (s: Screen) => s === currentScreen || (isHomeVariant && s === "home");

  return (
    <>
      <div onClick={onClose} className="fixed inset-0 z-40 bg-black/30 transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }} />
      <div className="fixed top-0 left-0 h-full z-50 w-[280px] bg-white border-r border-[#dfe6ed] flex flex-col transition-transform duration-300"
        style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-[60px] shrink-0">
          <img alt="딸깍.net" className="h-6 w-auto object-contain" src={imgImageNet} />
          <button onClick={onClose} className="flex items-center justify-center size-9 rounded-[10px]"><IconClose /></button>
        </div>
        {/* Nav */}
        <div className="flex flex-col gap-1 px-2 shrink-0">
          {[
            { s: "home" as Screen, icon: <IconHome />, label: "홈", activeIcon: <IconHomeBlue /> },
            { s: "mywork" as Screen, icon: <IconWork />, label: "내 작업", activeIcon: <IconWorkBlue /> },
            { s: "favorites" as Screen, icon: <IconStar />, label: "즐겨찾기", activeIcon: <IconStarBlue /> },
          ].map(({ s, icon, label, activeIcon }) => (
            <button key={s} onClick={() => nav(s)}
              className={`h-11 rounded-[14px] flex items-center gap-3 px-3 w-full ${active(s) ? "bg-[#f1f5f9]" : ""}`}>
              {active(s) ? activeIcon : icon}
              <span style={{ ...f, fontWeight: active(s) ? 600 : 500, fontSize: 14, color: active(s) ? "#155dfc" : "#1e293b", letterSpacing: "-0.35px" }}>
                {label}
              </span>
            </button>
          ))}
        </div>
        {/* Scrollable */}
        <div className="flex-1 overflow-y-auto mt-1" style={{ scrollbarWidth: "none" }}>
          <div className="px-2 pt-1">
            <div className="h-8 flex items-center px-2">
              <span style={{ ...f, fontWeight: 500, fontSize: 12, color: "#90a1b9" }}>최근 서식</span>
            </div>
            {recentTemplates.map((t) => (
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
        {/* User */}
        <div className="shrink-0 border-t border-[#dfe6ed] p-2 relative">
          {/* 프로필 팝업 */}
          {profileMenuOpen && (
            <>
              <div onClick={() => setProfileMenuOpen(false)} className="fixed inset-0 z-[60]" />
              <div className="absolute left-2 right-2 z-[61] bg-white rounded-[20px] border border-[#e2e8f0] overflow-hidden"
                style={{ bottom: "calc(100% - 8px)", boxShadow: "0px 8px 32px rgba(0,0,0,0.14)", animation: "slideUp 180ms cubic-bezier(0.32,0.72,0,1)" }}>
                {/* 프로필 헤더 */}
                <div className="px-5 pt-5 pb-4">
                  <p style={{ ...f, fontWeight: 700, fontSize: 17, color: "#0a0a0a", letterSpacing: "-0.5px" }}>최유정</p>
                  <p style={{ ...f, fontWeight: 400, fontSize: 13, color: "#9ca3af", marginTop: 2 }}>cyj2406@gmail.com</p>
                </div>
                <div className="h-px bg-[#f1f5f9] mx-0" />
                {/* 메뉴 그룹 1 */}
                {[
                  { icon: <HelpCircle size={20} strokeWidth={1.6} color="#9ca3af" />, label: "튜토리얼 다시 보기", onClick: undefined as (() => void) | undefined },
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
          {/* 프로필 바 */}
          <button className="w-full h-[50px] rounded-[18px] flex items-center gap-2.5 px-2"
            onClick={() => setProfileMenuOpen((v) => !v)}>
            <div className="bg-[#e0e7ff] border border-[#c7d2fe] rounded-full size-8 overflow-hidden shrink-0">
              <img alt="최유정" className="size-full object-cover" src={imgUserAvatar} />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="truncate" style={{ ...f, fontWeight: 600, fontSize: 13, color: "#0a0a0a", lineHeight: "18.6px" }}>최유정</div>
              <div className="truncate" style={{ ...f, fontWeight: 400, fontSize: 11, color: "#737373", lineHeight: "15.7px" }}>cyj2406@gmail.com</div>
            </div>
            <div className="shrink-0 flex flex-col gap-[3px] items-center justify-center size-6">
              {[0,1,2].map(i => <div key={i} className="size-[3.5px] rounded-full bg-[#9ca3af]" />)}
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

function TopBar({ onMenuOpen, onBack, showBack, onCreditClick, onBellClick }: {
  onMenuOpen: () => void; onBack?: () => void; showBack?: boolean;
  onCreditClick?: () => void; onBellClick?: () => void;
}) {
  return (
    <header className="h-14 flex items-center justify-between px-4 shrink-0 bg-[#f8fafc]">
      <div className="flex items-center gap-2">
        {showBack && onBack ? (
          <button onClick={onBack} className="flex items-center justify-center size-9 rounded-[10px]"><IconChevronLeft /></button>
        ) : (
          <button onClick={onMenuOpen} className="flex items-center justify-center size-9 rounded-[10px] opacity-80"><IconMenu /></button>
        )}
        <img alt="딸깍.net" className="h-[22px] w-auto object-contain" src={imgImageNet} />
      </div>
      <div className="flex items-center gap-2">
        <button onClick={onCreditClick} className="bg-[#f8fafc] h-9 rounded-[20px] border border-[#dfe6ed] flex items-center gap-2 px-3"
          style={{ boxShadow: "0px 1px 1.5px rgba(0,0,0,0.1)" }}>
          <div className="bg-[#4f7bff] rounded-full size-5 flex items-center justify-center">
            <span style={{ ...f, fontWeight: 700, fontSize: 10, color: "white" }}>C</span>
          </div>
          <span style={{ ...f, fontWeight: 600, fontSize: 14, color: "#0a0a0a" }}>{CREDIT_BALANCE.toLocaleString()}</span>
        </button>
        <button onClick={onBellClick} className="relative size-9 flex items-center justify-center">
          <IconBell />
          <div className="absolute top-[6px] left-[22px] bg-[#2b7fff] rounded-full size-2" />
        </button>
      </div>
    </header>
  );
}

function ChatInputBox() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-[20px] border-2 border-[#4f7bff]" style={{ boxShadow: "0px 8px 32px 0px rgba(79,123,255,0.1)" }}>
        <div className="bg-[rgba(255,255,255,0.8)] rounded-[17px] border border-[rgba(223,230,237,0.5)] m-0.5" style={{ boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)" }}>
          <div className="px-5 pt-4 pb-2" style={{ minHeight: 80 }}>
            <p style={{ ...f, fontWeight: 400, fontSize: 13.5, color: "#a7b3c7", lineHeight: 1.6 }}>
              무엇을 만들까요? 대화로 자연스럽게 요청하거나 템플릿을 선택해 바로 생성해보세요!
            </p>
          </div>
          <div className="flex items-center gap-1.5 px-3.5 pb-3.5 pt-2">
            <div className="flex items-center gap-1 flex-1 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              <button className="bg-white border border-[#e2e8f0] rounded-full size-[32px] flex items-center justify-center shrink-0"><IconAttach /></button>
              <button className="bg-[#eff6ff] border border-[rgba(79,123,255,0.25)] rounded-full size-[32px] flex items-center justify-center shrink-0"><IconSparkle /></button>
              <button className="bg-white border border-[#e2e8f0] rounded-full h-[32px] flex items-center gap-1 px-2.5 shrink-0">
                <IconAutoPrompt />
                <span style={{ ...f, fontWeight: 600, fontSize: 11, color: "#62748e" }}>자동 프롬프트</span>
              </button>
              <button className="bg-white border border-[#e2e8f0] rounded-full h-[32px] flex items-center gap-1 px-2.5 shrink-0">
                <IconDocRef />
                <span style={{ ...f, fontWeight: 600, fontSize: 11, color: "#62748e" }}>원문 적용</span>
              </button>
            </div>
            <button className="bg-[#4f7bff] rounded-full size-[32px] flex items-center justify-center shrink-0"><IconSend /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

function TemplateCard({ title, isVideo = false, ratio = "66%", onApply }: { title: string; isVideo?: boolean; ratio?: string; onApply?: () => void }) {
  const [isFav, setIsFav] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="group flex flex-col rounded-[14px] overflow-hidden bg-white border border-[#e2e8f0] cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      // 데스크톱은 hover로 오버레이를 노출한다. 터치 기기는 hover가 없으므로 카드를 탭하면 오버레이(적용 버튼·별)를 노출한다.
      onClick={() => { if (!HAS_HOVER) setHovered((v) => !v); }}
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

function SearchFilterBar({ placeholder = "검색어를 입력해 주세요" }: { placeholder?: string }) {
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
      <button className="h-10 bg-white border border-[#e2e8f0] rounded-[14px] flex items-center gap-1.5 px-3 shrink-0">
        <IconFilter />
        <span style={{ ...f, fontWeight: 600, fontSize: 13, color: "#334155" }}>필터</span>
      </button>
    </div>
  );
}

function FormsCard({ title, category, count, date }: { title: string; category: string; count: number; date: string }) {
  return (
    <div className="bg-white rounded-[18px] px-4 pt-4 pb-[18px] border border-[#ebebf0]"
      style={{ boxShadow: "0px 1px 4px rgba(0,0,0,0.05)" }}>
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
    </div>
  );
}

function FormsAIScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const [sortOption, setSortOption] = useState<SortOption>("인기순");
  const [sortSheetOpen, setSortSheetOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const sentinelRef = React.useRef<HTMLDivElement>(null);
  const sortActive = sortOption !== "인기순";
  const filterTabs = ["전체", "외국인 비자 서식", "법무 서식", "관공서 양식"];

  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), { threshold: 0 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
    <main className="flex-1 flex flex-col overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div style={{ paddingTop: "var(--gap-hero-top)", paddingLeft: "var(--gap-screen-x)", paddingRight: "var(--gap-screen-x)" }}>
        <p className="text-center leading-[1.3]" style={{ ...f, fontWeight: 700, fontSize: 22, letterSpacing: "-1.1px", wordBreak: "keep-all", marginBottom: "var(--gap-title-sub)" }}>
          <span style={{ color: "#4f7bff" }}>서식</span>
          <span style={{ color: "#0a0a0a" }}>, 한 줄이면 충분해요</span>
        </p>
        <p className="text-center" style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#737373", letterSpacing: "-0.3px", lineHeight: 1.6, wordBreak: "keep-all", marginBottom: "var(--gap-sub-composer)" }}>
          원하는 서식을 고르거나 직접 설명해 바로 만들어 보세요.
        </p>
        <ChatInputBox />
      </div>

      <div ref={sentinelRef} style={{ marginTop: "var(--gap-composer-chips)", height: 1 }} />

      {/* 필터 바 */}
      <div className="flex items-center" style={{ position: "sticky", top: 0, zIndex: 20, background: "#f8fafc", height: 44, borderBottom: stuck ? "1px solid #e2e8f0" : "1px solid transparent", transition: "border-color 150ms ease" }}>
        <div className="flex-1 overflow-x-auto flex items-center" style={{ scrollbarWidth: "none", height: "100%" }}>
          <div className="flex items-center shrink-0" style={{ gap: 8, paddingLeft: "var(--gap-screen-x)", paddingRight: 4 }}>
            {filterTabs.map((tab, i) => (
              <button key={tab} onClick={() => setActiveTab(i)} className="shrink-0 h-9 rounded-full px-4 flex items-center"
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
          <button className="flex items-center justify-center relative" style={{ width: 36, height: 36 }} onClick={() => setSortSheetOpen(true)}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" /></svg>
            {sortActive && <span style={{ position: "absolute", top: 5, right: 5, width: 6, height: 6, borderRadius: "50%", background: "#4f7bff" }} />}
          </button>
        </div>
      </div>

      {/* 서식 개수 */}
      <div style={{ padding: "var(--gap-chips-grid) var(--gap-screen-x) 12px" }}>
        <span style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#90a1b9" }}>134개의 서식</span>
      </div>

      {/* 서식 카드 목록 */}
      <div className="flex flex-col" style={{ gap: 14, padding: `0 var(--gap-screen-x) var(--gap-grid-bottom)` }}>
        {formsCards.map((card, i) => (
          <FormsCard key={i} {...card} />
        ))}
      </div>
    </main>

    {sortSheetOpen && (
      <SortBottomSheet selected={sortOption} onSelect={setSortOption} onClose={() => setSortSheetOpen(false)} />
    )}
    </>
  );
}

// ─── 화면 컴포넌트 ────────────────────────────────────────────────────────────

function HomeScreen({ onNavigate }: { onNavigate: (s: Screen) => void }) {
  return (
    <main className="flex-1 flex flex-col px-4 pb-6 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div className="flex-[2_0_0] min-h-[24px] max-h-[72px]" />
      {/* Heading */}
      <div className="mb-10 text-center">
        <p className="leading-[1.25] whitespace-nowrap" style={{ ...f, fontWeight: 700, fontSize: 26, letterSpacing: "-1.5px" }}>
          <span style={{ color: "#4f7bff" }}>딸깍</span>
          <span style={{ color: "#0a0a0a" }}> 한 번이면, 작업은 더 빠르게</span>
        </p>
        <p className="mt-2" style={{ ...f, fontWeight: 500, fontSize: 13, color: "#737373", letterSpacing: "-0.3px", lineHeight: 1.6 }}>
          이미지, 문서, 발표자료, 검수까지 필요한 AI 작업을 한 곳에서.
        </p>
      </div>
      <ChatInputBox />
      <div className="flex-[1_0_0] min-h-[20px] max-h-[40px]" />
      {/* Categories */}
      <div className="grid grid-cols-4 gap-x-3 gap-y-5">
        {homeCategories.map((cat) => (
          <button key={cat.label} onClick={() => onNavigate(cat.screen)} className="flex flex-col items-center gap-2.5">
            <div className="bg-[#f1f5f9] rounded-full size-[56px] flex items-center justify-center"
              style={{ filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.04))" }}>
              {cat.icon}
            </div>
            <span className="text-center w-full" style={{ ...f, fontWeight: 600, fontSize: 11.5, color: "#334155", letterSpacing: "-0.25px", lineHeight: 1.3 }}>{cat.label}</span>
          </button>
        ))}
      </div>
      <div className="flex-[1_0_0] min-h-[16px] max-h-[32px]" />
    </main>
  );
}

const SORT_OPTIONS = ["인기순", "최신순", "이름순"] as const;
type SortOption = typeof SORT_OPTIONS[number];

function SortBottomSheet({ selected, onSelect, onClose }: {
  selected: SortOption;
  onSelect: (v: SortOption) => void;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 50,
          background: "rgba(0,0,0,0.35)",
          animation: "fadeIn 180ms ease",
        }}
      />
      {/* Sheet */}
      <div
        style={{
          position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 51,
          background: "white",
          borderRadius: "20px 20px 0 0",
          paddingBottom: "env(safe-area-inset-bottom, 16px)",
          boxShadow: "0px -4px 24px rgba(0,0,0,0.1)",
          animation: "slideUp 220ms cubic-bezier(0.32,0.72,0,1)",
        }}
      >
        {/* 드래그 핸들 */}
        <div className="flex justify-center pt-3 pb-1">
          <div style={{ width: 36, height: 4, borderRadius: 2, background: "#dfe6ed" }} />
        </div>
        {/* 정렬 라벨 */}
        <div style={{ padding: "14px 20px 6px" }}>
          <span style={{ ...f, fontWeight: 600, fontSize: 13, color: "#90a1b9", letterSpacing: "-0.3px" }}>정렬</span>
        </div>
        {/* 옵션 목록 */}
        {SORT_OPTIONS.map((opt) => {
          const active = opt === selected;
          return (
            <button
              key={opt}
              onClick={() => { onSelect(opt); onClose(); }}
              className="w-full flex items-center justify-between"
              style={{ padding: "15px 20px" }}
            >
              <span style={{ ...f, fontWeight: active ? 600 : 500, fontSize: 16, color: active ? "#4f7bff" : "#1e293b", letterSpacing: "-0.4px" }}>
                {opt}
              </span>
              {active && (
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12l5 5L19 7" stroke="#4f7bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          );
        })}
        <div style={{ height: 16 }} />
      </div>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp { from { transform: translateY(100%) } to { transform: translateY(0) } }
      `}</style>
    </>
  );
}

function AIAgentScreen({ title, category, filterTabs, cards, cardRatio = "66%", wsCategory, onWorkspace }: {
  title: string; category: string;
  filterTabs: string[];
  cards: { title: string }[];
  cardRatio?: string;
  wsCategory?: WorkspaceCategory;
  onWorkspace?: (templateName: string) => void;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [sortOption, setSortOption] = useState<SortOption>("인기순");
  const [sortSheetOpen, setSortSheetOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const sentinelRef = React.useRef<HTMLDivElement>(null);

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
      <div style={{ paddingTop: "var(--gap-hero-top)", paddingLeft: "var(--gap-screen-x)", paddingRight: "var(--gap-screen-x)" }}>
        <p className="text-center leading-[1.3]" style={{ ...f, fontWeight: 700, fontSize: 22, letterSpacing: "-1.1px", wordBreak: "keep-all", marginBottom: "var(--gap-title-sub)" }}>
          <span style={{ color: "#4f7bff" }}>{category}</span>
          <span style={{ color: "#0a0a0a" }}>{title}</span>
        </p>
        <p className="text-center" style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#737373", letterSpacing: "-0.3px", lineHeight: 1.6, wordBreak: "keep-all", marginBottom: "var(--gap-sub-composer)" }}>
          원하는 템플릿을 고르거나 직접 설명해 바로 만들어 보세요.
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
              {/* 정렬 아이콘 (배지 포함) */}
              <button className="flex items-center justify-center relative" style={{ width: 36, height: 36 }}
                onClick={() => setSortSheetOpen(true)}>
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
            </div>
          </>
        )}
      </div>

      {/* Card grid */}
      {visibleCards.length > 0 ? (
        <div
          className="grid grid-cols-2"
          style={{
            gap: "var(--gap-card-y) var(--gap-card-x)",
            padding: `var(--gap-chips-grid) var(--gap-screen-x) var(--gap-grid-bottom)`,
          }}
        >
          {visibleCards.map((card, i) => (
            <TemplateCard key={i} title={card.title} ratio={cardRatio} onApply={wsCategory ? () => onWorkspace?.(card.title) : undefined} />
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

    {/* 정렬 바텀시트 */}
    {sortSheetOpen && (
      <SortBottomSheet
        selected={sortOption}
        onSelect={setSortOption}
        onClose={() => setSortSheetOpen(false)}
      />
    )}
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
      <div className="grid grid-cols-2 gap-3 px-4 pb-6">
        {favoritesCards.map((card, i) => (
          <TemplateCard key={i} title={card.title} />
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
        {/* 헤더 */}
        <div className="flex items-center justify-between px-5 pt-2 pb-3">
          <span style={{ ...f, fontWeight: 700, fontSize: 18, color: "#0a0a0a", letterSpacing: "-0.5px" }}>크레딧 충전</span>
          <button onClick={onClose} className="size-8 flex items-center justify-center rounded-full bg-[#f1f5f9]">
            <IconClose />
          </button>
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
                  <p className="line-clamp-2" style={{ ...f, fontWeight: 400, fontSize: 12, color: "#737373", lineHeight: 1.6, letterSpacing: "-0.2px" }}>{item.body}</p>
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
                <p style={{ ...f, fontWeight: 400, fontSize: 12.5, color: "#737373", lineHeight: 1.65, letterSpacing: "-0.2px" }}>
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
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

function WorkspaceDrawer({ open, onClose, onGoHome }: { open: boolean; onClose: () => void; onGoHome: () => void }) {
  return (
    <>
      <div onClick={onClose} className="fixed inset-0 z-[92] bg-black/30 transition-opacity duration-300"
        style={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }} />
      <div className="fixed top-0 left-0 h-full z-[93] w-[280px] bg-white border-r border-[#dfe6ed] flex flex-col transition-transform duration-300"
        style={{ transform: open ? "translateX(0)" : "translateX(-100%)" }}>
        <div className="flex items-center justify-between px-4 h-[60px] shrink-0">
          <img alt="딸깍.net" className="h-6 w-auto object-contain" src={imgImageNet} />
          <button onClick={onClose} className="size-9 rounded-[10px] flex items-center justify-center"><IconClose /></button>
        </div>
        <div className="flex flex-col gap-1 px-2 shrink-0">
          {[
            { icon: <IconHome />, label: "홈", onClick: () => { onGoHome(); onClose(); } },
            { icon: <IconWork />, label: "내 작업", onClick: onClose },
            { icon: <IconStar />, label: "즐겨찾기", onClick: onClose },
          ].map(({ icon, label, onClick }) => (
            <button key={label} onClick={onClick} className="h-11 rounded-[14px] flex items-center gap-3 px-3 w-full">
              {icon}
              <span style={{ ...f, fontWeight: 500, fontSize: 14, color: "#1e293b", letterSpacing: "-0.35px" }}>{label}</span>
            </button>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto mt-1 px-2" style={{ scrollbarWidth: "none" }}>
          <div className="h-8 flex items-center px-2"><span style={{ ...f, fontWeight: 600, fontSize: 11, color: "#90a1b9", letterSpacing: "0.275px" }}>최근 대화</span></div>
          <div className="h-9 rounded-[12px] bg-[#f1f5f9] flex items-center pl-3 pr-4 mb-1">
            <span className="truncate" style={{ ...f, fontWeight: 600, fontSize: 13, color: "#155dfc" }}>주택임대차 표준계약서 작성 안내</span>
          </div>
          {recentChats.slice(0, 8).map((c) => (
            <div key={c} className="h-8 rounded-[14px] flex items-center pl-3 pr-4">
              <span className="truncate" style={{ ...f, fontWeight: 500, fontSize: 13, color: "#45556c" }}>{c}</span>
            </div>
          ))}
        </div>
        <div className="shrink-0 border-t border-[#dfe6ed] p-2">
          <button className="w-full h-[50px] rounded-[18px] flex items-center gap-2.5 px-2">
            <div className="bg-[#e0e7ff] border border-[#c7d2fe] rounded-full size-8 overflow-hidden shrink-0">
              <img alt="최유정" className="size-full object-cover" src={imgUserAvatar} />
            </div>
            <div className="flex-1 min-w-0 text-left">
              <div className="truncate" style={{ ...f, fontWeight: 600, fontSize: 13, color: "#0a0a0a" }}>최유정</div>
              <div className="truncate" style={{ ...f, fontWeight: 400, fontSize: 11, color: "#737373" }}>cyj2406@gmail.com</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

function WsChatInput({ onGenerate }: { onGenerate: () => void }) {
  return (
    <div className="px-4 pb-5 pt-2" style={{ background: "#f8fafc" }}>
      <div className="bg-white rounded-[22px]" style={{ boxShadow: "0px 2px 20px rgba(0,0,0,0.09)", border: "1px solid #e8ecf2" }}>

        {/* 텍스트 입력 영역 */}
        <div className="relative px-4 pt-4 pb-3" style={{ minHeight: 80 }}>
          <p style={{ ...f, fontWeight: 400, fontSize: 14, color: "#adb8c9", lineHeight: 1.65, paddingRight: 32 }}>
            무엇을 만들까요? 대화로 자연스럽게 요청하거나 템플릿을 선택해 바로 생성해보세요!
          </p>
          {/* 확장(↗↙) 아이콘 — 우상단 */}
          <button className="absolute top-3.5 right-3.5 size-6 flex items-center justify-center" style={{ opacity: 0.38 }}>
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path d="M10 2H14V6M2 14L6 10M6 14H2V10M14 2L10 6" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* 하단 툴바 — 홈 ChatInputBox와 동일한 버튼(가로 스크롤 + 고정 전송 버튼 레이아웃 유지) */}
        <div className="flex items-center px-3 pb-3 gap-2">

          {/* 가로 스크롤 영역 */}
          <div className="flex items-center gap-1.5 flex-1 min-w-0 overflow-x-auto" style={{ scrollbarWidth: "none" }}>

            {/* 클립 첨부 */}
            <button className="bg-white border border-[#e2e8f0] rounded-full size-[32px] flex items-center justify-center shrink-0"><IconAttach /></button>

            {/* 스파클 — 연파랑 배경 */}
            <button className="bg-[#eff6ff] border border-[rgba(79,123,255,0.25)] rounded-full size-[32px] flex items-center justify-center shrink-0"><IconSparkle /></button>

            {/* 자동 프롬프트 pill */}
            <button className="bg-white border border-[#e2e8f0] rounded-full h-[32px] flex items-center gap-1 px-2.5 shrink-0">
              <IconAutoPrompt />
              <span style={{ ...f, fontWeight: 600, fontSize: 11, color: "#62748e" }}>자동 프롬프트</span>
            </button>

            {/* 원문 적용 pill */}
            <button className="bg-white border border-[#e2e8f0] rounded-full h-[32px] flex items-center gap-1 px-2.5 shrink-0">
              <IconDocRef />
              <span style={{ ...f, fontWeight: 600, fontSize: 11, color: "#62748e" }}>원문 적용</span>
            </button>

          </div>

          {/* 전송 버튼 — 스크롤 밖 고정 (onGenerate 동작 유지) */}
          <button
            onClick={onGenerate}
            className="bg-[#4f7bff] rounded-full size-[32px] flex items-center justify-center shrink-0"
          >
            <IconSend />
          </button>

        </div>
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
      <div className="flex flex-wrap gap-x-[11px] gap-y-0 items-center pb-[17px] pt-[16px] px-[18px]">
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
    <div className="relative rounded-[15px] w-full overflow-hidden" style={{ border: "1px solid #ECEEF2" }}>
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

function FcTextarea({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div className="relative bg-white rounded-[14px] w-full" style={{ border: "1px solid #E3E6EB" }}>
      <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        rows={3}
        className="w-full outline-none resize-none bg-transparent px-[17px] pt-[14px] pb-[14px]"
        style={{ ...f, fontSize: 14.5, color: "#1B2440", lineHeight: "22.48px", minHeight: 60 }} />
    </div>
  );
}

function FcInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <div className="relative bg-white rounded-[14px] w-full min-h-[48px] flex items-center" style={{ border: "1px solid #E3E6EB" }}>
      <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full outline-none bg-transparent px-[17px] py-[15px]"
        style={{ ...f, fontSize: 14.5, color: "#1B2440" }} />
    </div>
  );
}

function FcSelect({ value, label }: { value: string; label?: string }) {
  return (
    <div className="relative bg-white rounded-[14px] w-full min-h-[48px] flex items-center justify-between px-[17px] py-[15.5px]"
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

function FcPrimaryBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="flex-1 min-w-0 flex items-center justify-center gap-[9px] rounded-[14px] p-[15px]"
      style={{ background: "#3B5BFE", boxShadow: "0px 4px 6px rgba(59,91,254,0.18)" }}>
      <svg className="shrink-0 size-[17px]" fill="none" viewBox="0 0 17 17">
        <path d={svgCard.p31151900} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.417" />
        <path d={svgCard.p249be200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.417" />
      </svg>
      <span style={{ fontFamily: "'Arial Black', 'Noto Sans KR', sans-serif", fontSize: 15, color: "white" }}>{label}</span>
    </button>
  );
}

function FcSecondaryBtn({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick}
      className="shrink-0 flex items-center justify-center rounded-[14px] px-5 py-[15px]"
      style={{ border: "1.5px solid #E3E6EB", color: "#4B5262", ...f, fontWeight: 700, fontSize: 14 }}>
      {label}
    </button>
  );
}

// ─── Image Form Card ──────────────────────────────────────────────────────────
interface ImageFormState {
  topic: string;
  autoPrompt: boolean;
  origText: boolean;
  card1: string;
  card2: string;
  banner: string;
  font: string;
  color: string;
}

// ── 공통 카드 Shell ───────────────────────────────────────────────────────────
const CARD_SHELL: React.CSSProperties = {
  background: "white", borderRadius: 22, border: "1px solid #ECEEF2",
  boxShadow: "0px 1px 2px rgba(16,24,40,0.04), 0px 12px 32px rgba(16,24,40,0.06)",
  display: "flex", flexDirection: "column", overflow: "hidden",
  width: "100%", maxWidth: 380,
  maxHeight: "calc(100dvh - 120px)",
};
function CardBody({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ flex: 1, overflowY: "auto", scrollbarWidth: "none" } as React.CSSProperties}
         className="flex flex-col gap-5 px-[18px] pt-[18px] pb-6">
      {children}
    </div>
  );
}
function CardFooter({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 px-[18px] pb-[14px] pt-[15px]" style={{ borderTop: "1px solid #EEF0F3", flexShrink: 0 }}>
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
    <div style={CARD_SHELL}>
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
    <div style={CARD_SHELL}>
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
    <div style={CARD_SHELL}>
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
    <div style={CARD_SHELL}>
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
    <div style={CARD_SHELL}>
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
    <div style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["주제 입력","장면 편집","생성"]} activeStep={1} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="주제에 맞춰 장면을 만들었어요. 확인하고 다듬은 뒤 생성하세요." />
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-1 flex-1">
            <FcLabel label="주제" />
            <span style={{ ...f, fontSize:14, color:"#1B2440", fontWeight:500 }}>{s.topic || "여름철 자연재해 대비"}</span>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 rounded-[10px]" style={{ border:"1.5px solid #E3E6EB", ...f, fontSize:12.5, fontWeight:600, color:"#4B5262", flexShrink:0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>
            재생성
          </button>
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
    <div style={CARD_SHELL}>
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
        {/* 2. 스타일 힌트 (선택) */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-1.5">
            <FcLabel label="스타일 힌트" />
            <span style={{ ...f, fontSize:12, color:"#98A2B3" }}>(선택)</span>
          </div>
          <FcInput value={s.styleHint} onChange={v=>set("styleHint",v)} placeholder="예) 시네마틱 다크 우주" />
        </div>
        {/* 3. 섹션 수 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="섹션 수" />
          <FcSelect value={s.sectionCount} />
        </div>
      </CardBody>
      <CardFooter><FcPrimaryBtn label="내용 생성" onClick={() => setStep(2)} /></CardFooter>
    </div>
  );
  return (
    <div style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["주제 입력","내용 편집","생성"]} activeStep={1} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="섹션별 내용을 확인하고 편집하세요" />
        {/* 섹션 탭 — 카드 좌우 끝선까지 흐르는 가로 스크롤 (공용 컴포넌트) */}
        <ScrollableChips
          variant="outline"
          centerActiveOnChange
          edgeClassName="-mx-[18px] px-[18px]"
          items={LANDING_SECTIONS}
          activeIndex={s.activeSection}
          onChange={(i) => set("activeSection", i)}
        />
        {/* 제목 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="제목" />
          <FcInput value={s.sectionTitle} onChange={v=>set("sectionTitle",v)} placeholder="예) 딸깍" />
        </div>
        {/* 서브 카피 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="서브 카피" />
          <FcTextarea value={s.subCopy} onChange={v=>set("subCopy",v)} placeholder="예) 클릭 한 번으로 AI가 실행합니다." />
        </div>
        {/* 버튼 */}
        <div className="flex flex-col gap-[10px]">
          <FcLabel label="버튼" />
          <FcInput value={s.ctaBtn} onChange={v=>set("ctaBtn",v)} placeholder="예) 시작하기" />
        </div>
      </CardBody>
      <CardFooter>
        <FcSecondaryBtn label="이전" onClick={() => setStep(1)} />
        <FcPrimaryBtn label="랜딩페이지 생성" onClick={onGenerate} />
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
    <div style={CARD_SHELL}>
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
    <div style={CARD_SHELL}>
      <div style={{ flexShrink: 0 }}><FcHeader steps={["제품 입력","내용 편집","생성"]} activeStep={1} /></div>
      <CardBody>
        <FcPreview open={prevOpen} onToggle={() => setPrevOpen(v=>!v)}><Preview /></FcPreview>
        <FcHelper text="섹션별 내용을 확인하고 편집하세요" />
        {/* 섹션 탭 — 카드 좌우 끝선까지 흐르는 가로 스크롤 (공용 컴포넌트) */}
        <ScrollableChips
          variant="outline"
          centerActiveOnChange
          edgeClassName="-mx-[18px] px-[18px]"
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
type ResultCardVariant = "slides" | "word" | "mp4" | "html" | "png";

function WsResultCard({ variant, filename, onOpen }: { variant: ResultCardVariant; filename: string; onOpen: () => void }) {
  const meta: Record<Exclude<ResultCardVariant, "slides">, { sub: string; icon: React.ReactNode }> = {
    word: { sub: "Word 파일", icon: <FileText size={24} color="#0a0a0a" strokeWidth={1.6} /> },
    mp4:  { sub: "MP4 파일",  icon: <FileVideo size={24} color="#0a0a0a" strokeWidth={1.6} /> },
    html: { sub: "HTML 파일", icon: <Compass size={24} color="#0a0a0a" strokeWidth={1.6} /> },
    png:  { sub: "PNG 파일",  icon: <ImageIcon size={24} color="#0a0a0a" strokeWidth={1.6} /> },
  };
  const isSlides = variant === "slides";
  const m = isSlides ? null : meta[variant];

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

const RESULT_CONFIG: Record<WorkspaceCategory, {
  intro: string;
  summary: [string, string][];
  variant: ResultCardVariant;
  file: (slug: string) => string;
  credit: number;
  agent: string;
}> = {
  ppt: {
    intro: "요청하신 디자인 톤앤매너를 반영하여 투자자의 시선을 사로잡는 고품질 슬라이드 덱을 구성하였습니다.",
    summary: [
      ["온라인 슬라이드 덱", "presentation.html (슬라이드 뷰어/에디터 통합 파일)"],
      ["오프라인 발표자료", "발표 및 배포용 PPTX 파일"],
      ["슬라이드별 이미지", "각 슬라이드의 원본 디자인 이미지 7장"],
    ],
    variant: "slides",
    file: () => "",
    credit: 623,
    agent: "image-ppt",
  },
  docs: {
    intro: "표준 서식과 필수 조항을 반영하여 바로 사용할 수 있는 문서를 작성하였습니다.",
    summary: [
      ["편집용 문서", "Word에서 편집 가능한 .docx 파일"],
      ["서식", "표준 계약 서식 및 조항 자동 반영"],
    ],
    variant: "word",
    file: (s) => `${s}.docx`,
    credit: 48,
    agent: "document-generation",
  },
  video: {
    intro: "요청하신 콘셉트와 톤앤매너를 반영하여 완성도 높은 영상을 제작하였습니다.",
    summary: [
      ["영상 파일", "1080p 해상도의 MP4 파일"],
      ["구성", "인트로 · 본문 · 아웃트로 자동 편집"],
    ],
    variant: "mp4",
    file: (s) => `${s}.mp4`,
    credit: 340,
    agent: "video-generation",
  },
  landing: {
    intro: "전환에 최적화된 반응형 랜딩페이지를 제작하였습니다.",
    summary: [
      ["웹 페이지", "반응형 HTML 파일 (모바일·데스크톱 대응)"],
      ["구성", "히어로 · 기능 · 후기 · CTA 섹션 포함"],
    ],
    variant: "html",
    file: () => "presentation.html",
    credit: 185,
    agent: "landing-generation",
  },
  image: {
    intro: "요청하신 콘셉트를 반영하여 고해상도 이미지를 생성하였습니다.",
    summary: [
      ["이미지 파일", "고해상도 PNG 파일"],
      ["구성", "메인 비주얼 및 카피 자동 배치"],
    ],
    variant: "png",
    file: (s) => `${s}.png`,
    credit: 120,
    agent: "image-generation",
  },
  detail: {
    intro: "제품의 매력을 강조한 반응형 상세페이지를 제작하였습니다.",
    summary: [
      ["웹 페이지", "반응형 HTML 파일"],
      ["구성", "제품 소개 · 특징 · 리뷰 섹션 포함"],
    ],
    variant: "html",
    file: () => "detail_page.html",
    credit: 160,
    agent: "detail-generation",
  },
};

function WsResult({ category, templateName }: { category: WorkspaceCategory; templateName: string }) {
  const r = RESULT_CONFIG[category];
  const slug = templateName.trim().replace(/\s+/g, "_").replace(/[()]/g, "");
  const filename = r.file(slug);
  const viewerName = r.variant === "slides" ? "presentation.html" : filename;
  const [viewerOpen, setViewerOpen] = useState(false);

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
          {r.summary.map(([label, value], i) => (
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
      <WsResultCard variant={r.variant} filename={filename} onOpen={() => setViewerOpen(true)} />

      {/* 사용 크레딧 배지 — 맨 아래 */}
      <div className="flex items-center gap-2 px-1">
        <span className="flex items-center gap-1.5 rounded-full pl-1.5 pr-3 py-1" style={{ background: "#eef2ff" }}>
          <span className="size-4 rounded-full bg-[#4f7bff] flex items-center justify-center shrink-0"><span style={{ ...f, fontWeight: 700, fontSize: 8, color: "white" }}>C</span></span>
          <span style={{ ...f, fontWeight: 700, fontSize: 12.5, color: "#4f7bff" }}>크레딧 차감: {r.credit.toLocaleString()}</span>
        </span>
        <span style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "#94a3b8" }}>{r.agent}</span>
      </div>

      {/* 결과 확인하기 → 전체화면 뷰어 */}
      {viewerOpen && (
        <ResultViewer variant={r.variant} filename={viewerName} templateName={templateName} onClose={() => setViewerOpen(false)} />
      )}
    </div>
  );
}

// ─── 결과물 뷰어 (전체화면) ────────────────────────────────────────────────────
function ResultViewer({ variant, filename, templateName, onClose }: {
  variant: ResultCardVariant; filename: string; templateName: string; onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[95] bg-white flex flex-col" style={{ animation: "wsFadeIn 200ms ease" }}>
      {/* 헤더 */}
      <header className="h-14 flex items-center gap-1 px-3 shrink-0 bg-white">
        <div className="flex-1 min-w-0 flex items-center gap-1">
          <span className="truncate" style={{ ...f, fontWeight: 600, fontSize: 14, color: "#0a0a0a", letterSpacing: "-0.3px" }}>{filename}</span>
          <ChevronDown size={15} color="#94a3b8" className="shrink-0" />
        </div>
        <button className="size-9 rounded-[10px] flex items-center justify-center shrink-0"><Download size={18} color="#475569" /></button>
        <button onClick={onClose} className="size-9 rounded-[10px] flex items-center justify-center shrink-0"><XIcon size={19} color="#475569" /></button>
      </header>

      {/* PC 에디터 안내 — 모바일에서만, 헤더 아래 full-bleed 스트립으로 고정 (모든 카테고리 공통) */}
      <MobileEditorNotice />

      {/* 콘텐츠 스크롤 영역 */}
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col" style={{ scrollbarWidth: "none" }}>
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

      {/* ── 문서 (Word/HWP) ── */}
      {variant === "word" && (
        <div className="flex-1 bg-[#e9ecf0] py-4 px-4">
          <div className="mx-auto bg-white" style={{ maxWidth: 520, boxShadow: "0 2px 14px rgba(0,0,0,0.1)", padding: "34px 24px", minHeight: 660 }}>
            <p className="text-center" style={{ ...f, fontWeight: 700, fontSize: 18, color: "#111", letterSpacing: "-0.3px", marginBottom: 26, lineHeight: 1.4 }}>{templateName}</p>
            {["민원인 인적사항", "수용자 인적사항", "신청 사유"].map((h, i) => (
              <div key={i} style={{ marginBottom: 22 }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="size-2 bg-black shrink-0" />
                  <span style={{ ...f, fontWeight: 700, fontSize: 13.5, color: "#111" }}>{h}</span>
                </div>
                <div className="border border-[#c9ccd2]">
                  {[0, 1, 2].map((rw) => (
                    <div key={rw} className="flex" style={{ borderBottom: rw < 2 ? "1px solid #d5d8dd" : "none" }}>
                      <div className="w-[32%] px-2.5 py-3 bg-[#f3f4f6] shrink-0" style={{ borderRight: "1px solid #d5d8dd" }}>
                        <div className="h-2 rounded bg-[#cfd3d9]" style={{ width: "70%" }} />
                      </div>
                      <div className="flex-1 px-2.5 py-3"><div className="h-2 rounded bg-[#e5e7eb]" style={{ width: `${75 - rw * 12}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p style={{ ...f, fontWeight: 500, fontSize: 12.5, color: "#333", marginTop: 22, lineHeight: 1.75 }}>
              본인은 위 내용이 사실과 다름이 없음을 확인하며, 신청서 제출에 동의합니다.
            </p>
          </div>
        </div>
      )}

      {/* ── 슬라이드 ── */}
      {variant === "slides" && (
        <div className="flex-1 bg-[#0f1216] flex flex-col items-center justify-center p-4 gap-5">
          <div className="w-full rounded-[10px] overflow-hidden relative" style={{ aspectRatio: "16/9", background: "radial-gradient(120% 120% at 25% 20%, #24304c 0%, #0a0e18 70%)" }}>
            <div className="absolute inset-0 p-5 flex flex-col justify-end">
              <div className="h-2.5 rounded-full mb-3" style={{ width: "38%", background: "rgba(236,72,153,0.85)" }} />
              <div className="h-4 rounded bg-white/85 mb-2.5" style={{ width: "72%" }} />
              <div className="h-2 rounded bg-white/40" style={{ width: "56%" }} />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="size-9 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M10 3L5 8l5 5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <span style={{ ...f, fontWeight: 600, fontSize: 12.5, color: "white" }}>1 / 7</span>
            <button className="size-9 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M6 3l5 5-5 5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* ── 웹 페이지 (랜딩/상세) ── */}
      {variant === "html" && (
        <div className="flex-1 bg-[#f1f5f9] p-4">
          <div className="mx-auto bg-white rounded-[14px] overflow-hidden border border-[#e2e8f0]" style={{ maxWidth: 480, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
            <div className="relative" style={{ aspectRatio: "16/11", background: "linear-gradient(135deg,#1e293b 0%,#0f172a 100%)" }}>
              <div className="absolute inset-0 p-6 flex flex-col justify-center gap-2.5">
                <div className="h-2 rounded bg-white/45" style={{ width: "28%" }} />
                <div className="h-5 rounded bg-white/85" style={{ width: "74%" }} />
                <div className="h-2.5 rounded bg-white/40" style={{ width: "58%" }} />
                <div className="h-7 rounded-full mt-2" style={{ width: "40%", background: "#4f7bff" }} />
              </div>
            </div>
            <div className="p-6 flex flex-col gap-5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="h-3 rounded bg-[#cbd5e1]" style={{ width: "45%" }} />
                  <div className="h-2 rounded bg-[#e2e8f0]" style={{ width: "92%" }} />
                  <div className="h-2 rounded bg-[#e2e8f0]" style={{ width: "80%" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

// ─── Workspace ────────────────────────────────────────────────────────────────
function WorkspaceScreen({ category, templateName, onBack, onCreditClick, onBellClick }: {
  category: WorkspaceCategory; templateName: string;
  onBack: () => void; onCreditClick: () => void; onBellClick: () => void;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [stepsOpen, setStepsOpen] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

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
    <div className="fixed inset-0 z-[90] bg-[#f8fafc] flex flex-col">
      <style>{`
        @keyframes wsFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes wsSlideRight { from { opacity:0; transform:translateX(-6px); } to { opacity:1; transform:translateX(0); } }
        @keyframes wsDot { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-4px); } }
      `}</style>
      <WorkspaceDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} onGoHome={onBack} />

      {/* TopBar */}
      <header className="h-14 flex items-center gap-3 px-4 shrink-0 bg-[#f8fafc] z-10">
        <button onClick={() => setDrawerOpen(true)} className="flex items-center justify-center size-9 rounded-[10px] opacity-80 shrink-0"><IconMenu /></button>
        <p className="flex-1 truncate" style={{ ...f, fontWeight: 600, fontSize: 15, color: "#0a0a0a", letterSpacing: "-0.4px" }}>{templateName}</p>
      </header>

      {/* Chat scroll */}
      <div ref={chatScrollRef} className="flex-1 overflow-y-auto px-4 pb-4" style={{ paddingBottom: `calc(${promptBottom === "0px" ? "130px" : promptBottom} + 80px)`, scrollbarWidth: "none" }}>
        <div className="flex flex-col gap-3.5" style={{ animation: "wsFadeIn 300ms ease" }}>
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
          {generated && <WsResult category={category} templateName={templateName} />}

        </div>
      </div>

      {/* Fixed prompt input */}
      <div className="fixed left-0 right-0 z-[89]" style={{ bottom: promptBottom }}>
        <WsChatInput onGenerate={handleGenerate} />
      </div>
    </div>
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

export default function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [screen, setScreen] = useState<Screen>("home");
  const [creditOpen, setCreditOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [workspace, setWorkspace] = useState<{ category: WorkspaceCategory; templateName: string } | null>(null);

  const isSubScreen = ["image-ai", "landing-ai", "forms-ai", "docs-ai", "audio-ai", "ppt-ai", "video-ai", "credit-history", "notifications-all"].includes(screen);

  return (
    <div className="bg-[#f8fafc] h-[100dvh] w-full flex flex-col overflow-hidden" style={f}>
      <SidebarDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} currentScreen={screen} onNavigate={setScreen} onSettingsOpen={() => setSettingsOpen(true)} />
      <TopBar
        onMenuOpen={() => setDrawerOpen(true)}
        onBack={() => setScreen("home")}
        showBack={isSubScreen}
        onCreditClick={() => setCreditOpen(true)}
        onBellClick={() => setNotifOpen((v) => !v)}
      />
      {screen === "home" && <HomeScreen onNavigate={setScreen} />}
      {screen === "image-ai" && (
        <AIAgentScreen
          category="이미지"
          title=", 한 줄이면 충분해요"
          filterTabs={["전체", "이미지", "카드뉴스", "상세페이지"]}
          cards={imageAICards}
          wsCategory="image"
          onWorkspace={(t) => setWorkspace({ category: "image", templateName: t })}
        />
      )}
      {screen === "landing-ai" && (
        <AIAgentScreen
          category="랜딩페이지"
          title=", 한 줄이면 충분해요"
          filterTabs={["전체", "SaaS", "서비스", "이벤트"]}
          cards={landingAICards}
          wsCategory="landing"
          onWorkspace={(t) => setWorkspace({ category: "landing", templateName: t })}
        />
      )}
      {screen === "forms-ai" && <FormsAIScreen />}
      {screen === "docs-ai" && (
        <AIAgentScreen
          category="문서"
          title=", 한 줄이면 충분해요"
          filterTabs={["전체", "워드", "한글", "엑셀", "논문"]}
          cards={docsCards}
          cardRatio="140%"
          wsCategory="docs"
          onWorkspace={(t) => setWorkspace({ category: "docs", templateName: t })}
        />
      )}
      {screen === "audio-ai" && (
        <AIAgentScreen
          category="오디오"
          title=", 한 줄이면 충분해요"
          filterTabs={["전체", "음악", "팟캐스트"]}
          cards={[]}
        />
      )}
      {screen === "ppt-ai" && (
        <AIAgentScreen
          category="프레젠테이션"
          title=", 한 줄이면 충분해요"
          filterTabs={["전체", "비즈니스", "교육", "포트폴리오"]}
          cards={pptAICards}
          cardRatio="81%"
          wsCategory="ppt"
          onWorkspace={(t) => setWorkspace({ category: "ppt", templateName: t })}
        />
      )}
      {screen === "video-ai" && (
        <AIAgentScreen
          category="동영상"
          title=", 한 줄이면 충분해요"
          filterTabs={["전체", "영상", "유튜브영상"]}
          cards={videoAICards}
          cardRatio="203%"
          wsCategory="video"
          onWorkspace={(t) => setWorkspace({ category: "video", templateName: t })}
        />
      )}
      {screen === "favorites" && <FavoritesScreen />}
      {screen === "mywork" && <MyWorkScreen />}
      {screen === "home" && <Footer />}
      {screen === "notifications-all" && <NotificationsAllScreen />}
      {screen === "credit-history" && (
        <CreditHistoryScreen onCharge={() => { setScreen("home"); setCreditOpen(true); }} />
      )}
      {notifOpen && <NotificationsPanel onClose={() => setNotifOpen(false)} onViewAll={() => { setNotifOpen(false); setScreen("notifications-all"); }} />}
      {creditOpen && <CreditBottomSheet onClose={() => setCreditOpen(false)} onHistoryClick={() => setScreen("credit-history")} />}
      {settingsOpen && <SettingsModal onClose={() => setSettingsOpen(false)} />}
      {workspace && (
        <WorkspaceScreen
          category={workspace.category}
          templateName={workspace.templateName}
          onBack={() => setWorkspace(null)}
          onCreditClick={() => setCreditOpen(true)}
          onBellClick={() => setNotifOpen(true)}
        />
      )}
    </div>
  );
}
