import React, { useState } from "react";
import {
  ArrowDown, ArrowUp, Copy, Crop, Eye, FileText, FlipHorizontal2, FlipVertical2,
  Heading, Image as ImageIcon, Lock, MousePointer2, RotateCcw, RotateCw, Square, Trash2, Type, Upload,
} from "lucide-react";

import { IconTooltip } from "./IconTooltip";

/**
 * 미니 에디터 우측 사이드바 — 디자인 / 레이어 / 테마.
 *
 * 태블릿(768~1199px)에서는 캔버스 위로 미끄러져 들어오는 패널이고,
 * 1200px 이상에서는 자리를 차지하는 고정 컬럼이다. 내용은 두 경우 모두 같다.
 * 여닫는 방식만 부모(TabletMiniEditor)가 정하고, 이 컴포넌트는 내용만 그린다.
 */

const C = {
  primary: "#3B5BFF",
  bg: "#F5F7FA",
  card: "#FFFFFF",
  text: "#1A1D29",
  sub: "#8A90A2",
  line: "#E7EAF0",
} as const;

export type EditorTab = "design" | "layers" | "theme";

const TABS: { id: EditorTab; label: string }[] = [
  { id: "design", label: "디자인" },
  { id: "layers", label: "레이어" },
  { id: "theme", label: "테마" },
];

/** 레이어 목록 목업 — 실제 문서 모델이 붙기 전까지의 자리표시. */
const LAYERS = [
  { name: "01", size: 26 },
  { name: "AI活用の基礎 | Basics of AI", size: 16 },
  { name: "AIを業務の日常的なパートナーへ", size: 36 },
  { name: "AI導入のステップや 成功事例", size: 16 },
  { name: "導入ガイド", size: 30 },
  { name: "データを価値に変える 分析", size: 16 },
  { name: "データ分析", size: 30 },
  { name: "AIを活用して業務プロセスを", size: 16 },
  { name: "業務自動化", size: 30 },
  { name: "最新のAIトレンドや 市場動向", size: 16 },
  { name: "トレンド把握", size: 30 },
  { name: "業務生産性を高める実践的", size: 34 },
  { name: "AI", size: 53 },
  { name: "AI활용의 기초", size: 120 },
];

const PALETTE = ["#003366", "#333333", "#ffffff", "#0088cc"];

export interface TabletEditorSidebarProps {
  tab: EditorTab;
  onTabChange: (t: EditorTab) => void;
  /** 캔버스에서 요소가 선택된 상태인지. 디자인 탭이 속성 편집으로 바뀐다. */
  selected: boolean;
}

export default function TabletEditorSidebar({ tab, onTabChange, selected }: TabletEditorSidebarProps) {
  return (
    <div className="h-full flex flex-col" style={{ background: C.card }}>
      {/* 탭 */}
      <div className="shrink-0 flex items-center" style={{ borderBottom: `1px solid ${C.line}` }}>
        {TABS.map((t) => {
          const on = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onTabChange(t.id)}
              aria-selected={on}
              role="tab"
              className="flex-1 h-12 flex items-center justify-center"
              style={{
                color: on ? C.primary : C.sub,
                fontSize: 13.5,
                fontWeight: on ? 700 : 500,
                borderBottom: `2px solid ${on ? C.primary : "transparent"}`,
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {tab === "design" && (selected ? <PropertyPanel /> : <DesignPanel />)}
        {tab === "layers" && <LayersPanel />}
        {tab === "theme" && <ThemePanel />}
      </div>
    </div>
  );
}

/* ── 디자인 탭 — 선택된 요소가 없을 때 ───────────────────────────── */
function DesignPanel() {
  return (
    <div className="p-4 flex flex-col gap-2.5">
      <div className="flex flex-col items-center text-center py-6 gap-2">
        <span
          className="flex items-center justify-center rounded-[18px]"
          style={{ width: 56, height: 56, background: "#EEF1FF", color: C.primary }}
        >
          <MousePointer2 size={24} strokeWidth={1.8} />
        </span>
        <p style={{ fontSize: 14, fontWeight: 700, color: C.text, marginTop: 6 }}>요소를 선택해 보세요</p>
        <p style={{ fontSize: 12.5, color: C.sub, lineHeight: 1.6 }}>
          캔버스에서 텍스트·도형·이미지를
          <br />
          클릭하면 속성을 편집할 수 있어요.
        </p>
      </div>

      <AddButton icon={<Type size={16} strokeWidth={1.8} />} label="텍스트 추가" />
      <AddButton icon={<Square size={16} strokeWidth={1.8} />} label="도형 추가" />
      <AddButton icon={<ImageIcon size={16} strokeWidth={1.8} />} label="이미지 추가" />

      <div style={{ height: 6 }} />
      <AddButton icon={<FileText size={16} strokeWidth={1.8} />} label="HTML 업로드" />
      <AddButton icon={<FileText size={16} strokeWidth={1.8} />} label="PDF 업로드" />
    </div>
  );
}

function AddButton({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button
      className="w-full h-12 rounded-[12px] flex items-center justify-center gap-2 active:bg-[#EDF0F5]"
      style={{ border: `1px solid ${C.line}`, background: C.card, color: C.text }}
    >
      <span style={{ color: C.sub, display: "inline-flex" }}>{icon}</span>
      <span style={{ fontSize: 13.5, fontWeight: 600, whiteSpace: "nowrap" }}>{label}</span>
    </button>
  );
}

/* ── 디자인 탭 — 요소가 선택됐을 때의 속성 편집 ─────────────────────
   선택한 요소 종류(칩) → 크기/위치 → 회전 → 정렬 → 벡터화 → 변형 → 조정 순.
   섹션 사이는 얇은 구분선으로 나눈다. */
function PropertyPanel() {
  const [rotation, setRotation] = useState(0);
  const [align, setAlign] = useState(4);
  const [adjust, setAdjust] = useState({ 밝기: 0, 대비: 0, 채도: 0 });

  return (
    <div className="flex flex-col">
      {/* 선택 요소 + 순서·복제·삭제 */}
      <div className="px-4 py-3 flex items-center gap-1">
        <span
          className="shrink-0 h-8 px-2.5 rounded-full flex items-center gap-1.5"
          style={{ background: C.card, border: `1px solid ${C.primary}` }}
        >
          <ImageIcon size={13} strokeWidth={1.9} color={C.primary} />
          <span style={{ fontSize: 12.5, fontWeight: 700, color: C.primary }}>이미지</span>
        </span>
        <div className="flex-1 min-w-0" />
        <MiniIcon label="앞으로 가져오기"><ArrowUp size={16} strokeWidth={1.9} /></MiniIcon>
        <MiniIcon label="뒤로 보내기"><ArrowDown size={16} strokeWidth={1.9} /></MiniIcon>
        <MiniIcon label="복제"><Copy size={15} strokeWidth={1.9} /></MiniIcon>
        <MiniIcon label="삭제" danger><Trash2 size={15} strokeWidth={1.9} /></MiniIcon>
      </div>

      <Divider />

      <Section title="크기 / 위치">
        <div className="grid grid-cols-4 gap-1.5">
          <Field label="X" value="0" />
          <Field label="Y" value="0" />
          <Field label="W" value="1536" />
          <Field label="H" value="1024" />
        </div>
      </Section>

      {/* 회전 — 슬라이더 + 각도 입력 */}
      <div className="px-4 pb-4 flex items-center gap-3">
        <span className="shrink-0" style={{ width: 34, fontSize: 12.5, color: C.sub }}>회전</span>
        <input
          type="range"
          aria-label="회전"
          min={-180}
          max={180}
          value={rotation}
          onChange={(e) => setRotation(Number(e.target.value))}
          className="flex-1 min-w-0 cursor-pointer"
          style={{ accentColor: C.primary }}
        />
        <span
          className="shrink-0 h-9 w-[54px] rounded-[10px] flex items-center justify-center tabular-nums"
          style={{ border: `1px solid ${C.line}`, fontSize: 13, fontWeight: 600, color: C.text }}
        >
          {rotation}
        </span>
        <span className="shrink-0" style={{ fontSize: 12, color: C.sub }}>°</span>
      </div>

      {/* 정렬 — 3x3 */}
      <div className="px-4 pb-4 flex items-start gap-3">
        <span className="shrink-0" style={{ width: 34, fontSize: 12.5, color: C.sub, lineHeight: "34px" }}>정렬</span>
        <div
          className="grid grid-cols-3 rounded-[10px] overflow-hidden"
          style={{ border: `1px solid ${C.line}`, width: 102 }}
        >
          {Array.from({ length: 9 }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`정렬 ${i + 1}`}
              aria-pressed={align === i}
              onClick={() => setAlign(i)}
              className="h-[34px] flex items-center justify-center transition-colors hover:bg-[#F5F7FA]"
              style={{ background: align === i ? "#EEF1FF" : C.card, borderRight: i % 3 === 2 ? "none" : `1px solid ${C.line}`, borderBottom: i > 5 ? "none" : `1px solid ${C.line}` }}
            >
              <span
                className="rounded-[2px]"
                style={{ width: 10, height: 10, background: align === i ? C.primary : "#D9DEE7" }}
              />
            </button>
          ))}
        </div>
      </div>

      <Divider />

      <Section title="벡터화">
        <button
          type="button"
          className="w-full h-11 rounded-[10px] flex items-center justify-center transition-colors hover:brightness-[0.98] active:brightness-95"
          style={{ background: C.primary, color: "#FFFFFF" }}
        >
          <span style={{ fontSize: 13.5, fontWeight: 700 }}>SVG로 벡터화</span>
        </button>
        <p style={{ fontSize: 12, color: C.sub, lineHeight: 1.6 }}>
          이미지를 Recraft로 선명한 벡터(SVG)로 변환해 교체합니다.
        </p>
      </Section>

      <Divider />

      <Section title="변형">
        <div className="grid grid-cols-4 gap-1.5">
          <TransformButton label="왼쪽으로 회전"><RotateCcw size={16} strokeWidth={1.8} /></TransformButton>
          <TransformButton label="오른쪽으로 회전"><RotateCw size={16} strokeWidth={1.8} /></TransformButton>
          <TransformButton label="좌우 뒤집기"><FlipHorizontal2 size={16} strokeWidth={1.8} /></TransformButton>
          <TransformButton label="상하 뒤집기"><FlipVertical2 size={16} strokeWidth={1.8} /></TransformButton>
        </div>
        <OutlineButton label="변형 초기화" />
        <OutlineButton label="자르기" icon={<Crop size={15} strokeWidth={1.8} />} />
      </Section>

      <Divider />

      <Section title="조정">
        {(Object.keys(adjust) as (keyof typeof adjust)[]).map((k) => (
          <div key={k} className="flex items-center gap-3">
            <span className="shrink-0" style={{ width: 34, fontSize: 12.5, color: C.sub }}>{k}</span>
            <input
              type="range"
              aria-label={k}
              min={-100}
              max={100}
              value={adjust[k]}
              onChange={(e) => setAdjust((a) => ({ ...a, [k]: Number(e.target.value) }))}
              className="flex-1 min-w-0 cursor-pointer"
              style={{ accentColor: C.primary }}
            />
            <span className="shrink-0 tabular-nums text-right" style={{ width: 30, fontSize: 12.5, fontWeight: 600, color: C.text }}>
              {adjust[k]}
            </span>
          </div>
        ))}
      </Section>
    </div>
  );
}

function Divider() {
  return <div className="shrink-0" style={{ height: 1, background: C.line }} />;
}

function MiniIcon({
  label, danger = false, children,
}: { label: string; danger?: boolean; children: React.ReactNode }) {
  return (
    <IconTooltip label={label}>
      <button
        type="button"
        aria-label={label}
        className="shrink-0 w-8 h-8 rounded-[8px] flex items-center justify-center transition-colors hover:bg-[#F2F4F8] active:bg-[#EDF0F5]"
        style={{ color: danger ? "#E5484D" : C.sub }}
      >
        {children}
      </button>
    </IconTooltip>
  );
}

function TransformButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <IconTooltip label={label}>
      <button
        type="button"
        aria-label={label}
        className="h-10 rounded-[10px] flex items-center justify-center transition-colors hover:bg-[#F5F7FA] active:bg-[#EDF0F5]"
        style={{ border: `1px solid ${C.line}`, color: C.text }}
      >
        {children}
      </button>
    </IconTooltip>
  );
}

function OutlineButton({ label, icon }: { label: string; icon?: React.ReactNode }) {
  return (
    <button
      type="button"
      className="w-full h-10 rounded-[10px] flex items-center justify-center gap-1.5 transition-colors hover:bg-[#F5F7FA] active:bg-[#EDF0F5]"
      style={{ border: `1px solid ${C.line}`, color: C.text }}
    >
      {icon && <span className="shrink-0 flex" style={{ color: C.sub }}>{icon}</span>}
      <span style={{ fontSize: 13, fontWeight: 600 }}>{label}</span>
    </button>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="px-4 py-4 flex flex-col gap-2.5">
      <p style={{ fontSize: 12.5, fontWeight: 600, color: C.sub }}>{title}</p>
      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="h-9 rounded-[9px] px-2 flex items-center gap-1" style={{ border: `1px solid ${C.line}` }}>
      <span className="shrink-0" style={{ fontSize: 11.5, color: C.sub }}>{label}</span>
      <span className="flex-1 min-w-0 truncate text-right tabular-nums" style={{ fontSize: 12.5, fontWeight: 600, color: C.text }}>
        {value}
      </span>
    </div>
  );
}

/* ── 레이어 탭 ──────────────────────────────────────────────────── */
function LayersPanel() {
  return (
    <div className="py-2">
      <p className="px-4 pb-2" style={{ fontSize: 11.5, color: C.sub }}>
        맨 위 레이어부터 표시됩니다 · 드래그로 순서 변경
      </p>
      {LAYERS.map((l, i) => (
        <div key={i} className="h-14 px-4 flex items-center gap-2.5 active:bg-[#F2F4F8]">
          <Type size={15} strokeWidth={1.8} color={C.sub} className="shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="truncate" style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{l.name}</p>
            <p className="truncate" style={{ fontSize: 11.5, color: C.sub }}>{l.size}px · "Noto Sans KR"</p>
          </div>
          <button aria-label="숨기기" className="shrink-0 w-9 h-9 flex items-center justify-center">
            <Eye size={15} strokeWidth={1.8} color={C.sub} />
          </button>
          <button aria-label="잠그기" className="shrink-0 w-9 h-9 flex items-center justify-center">
            <Lock size={15} strokeWidth={1.8} color={C.sub} />
          </button>
        </div>
      ))}
    </div>
  );
}

/* ── 테마 탭 ────────────────────────────────────────────────────── */
function ThemePanel() {
  return (
    <div className="p-4 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <p style={{ fontSize: 12.5, fontWeight: 700, color: C.text }}>팔레트</p>
        <p style={{ fontSize: 12, color: C.sub, lineHeight: 1.6 }}>
          이 덱은 고정 색상이라, 실제 사용된 색을 직접 바꿉니다 (전 슬라이드 일괄).
        </p>
        <div className="grid grid-cols-2 gap-2">
          {PALETTE.map((c) => (
            <button
              key={c}
              className="h-11 rounded-[10px] px-2.5 flex items-center gap-2 active:bg-[#EDF0F5]"
              style={{ border: `1px solid ${C.line}` }}
            >
              <span className="shrink-0 rounded-[7px]" style={{ width: 22, height: 22, background: c, border: `1px solid ${C.line}` }} />
              <span className="truncate" style={{ fontSize: 12.5, fontWeight: 700, color: C.text }}>{c}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p style={{ fontSize: 12.5, fontWeight: 700, color: C.text }}>로고</p>
        <p style={{ fontSize: 12, color: C.sub, lineHeight: 1.6 }}>
          이미지를 업로드하면 모든 슬라이드의 로고 영역에 삽입됩니다.
        </p>
        <button
          className="w-full h-12 rounded-[12px] flex items-center justify-center gap-2"
          style={{ background: C.primary, color: "#FFFFFF" }}
        >
          <Upload size={16} strokeWidth={2} />
          <span style={{ fontSize: 13.5, fontWeight: 700 }}>로고 업로드</span>
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <p style={{ fontSize: 12.5, fontWeight: 700, color: C.text }}>슬라이드 마스터</p>
        <p style={{ fontSize: 12, color: C.sub, lineHeight: 1.6 }}>
          모든 슬라이드에 동일한 상단/하단 바를 입혀 통일감을 줍니다.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button className="h-11 rounded-[10px]" style={{ border: `1px solid ${C.line}`, fontSize: 12.5, fontWeight: 600, color: C.text }}>상단바</button>
          <button className="h-11 rounded-[10px]" style={{ border: `1px solid ${C.line}`, fontSize: 12.5, fontWeight: 600, color: C.text }}>하단바</button>
        </div>
        <button
          className="w-full h-11 rounded-[10px] flex items-center justify-center gap-2"
          style={{ border: `1px solid ${C.primary}`, background: "#EEF1FF", color: C.primary }}
        >
          <Copy size={15} strokeWidth={1.9} />
          <span style={{ fontSize: 12.5, fontWeight: 700 }}>이 슬라이드 기준으로 전체 맞춤</span>
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <p style={{ fontSize: 12.5, fontWeight: 700, color: C.text }}>제목·섹션 바</p>
        <p style={{ fontSize: 12, color: C.sub, lineHeight: 1.6 }}>
          제목·섹션 바(가./1./A.)의 디자인을 전 슬라이드에 통일 — 문구는 유지돼요.
        </p>
        <button
          className="w-full h-11 rounded-[10px] flex items-center justify-center gap-2"
          style={{ border: `1px solid ${C.primary}`, background: "#EEF1FF", color: C.primary }}
        >
          <Heading size={15} strokeWidth={1.9} />
          <span style={{ fontSize: 12.5, fontWeight: 700 }}>제목·섹션 디자인 전체 적용</span>
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <p style={{ fontSize: 12.5, fontWeight: 700, color: C.text }}>칼선 (가이드)</p>
        <p style={{ fontSize: 12, color: C.sub, lineHeight: 1.6 }}>
          상/하단 바와 본문 여백에 맞춰 빨간 칼선을 표시해요. 요소를 옮기면 칼선에 자동으로
          달라붙고, 눈금자(위·왼쪽 자)를 클릭해 칼선을 더 추가할 수 있어요.
        </p>
      </div>
    </div>
  );
}
