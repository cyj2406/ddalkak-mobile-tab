import React, { useState } from "react";
import {
  ArrowDown, ArrowUp, Circle, Copy, Crop, Eye, FileText, FlipHorizontal2, FlipVertical2,
  Heading, Image as ImageIcon, ImageOff, Loader2, Lock, MousePointer2, RotateCcw, RotateCw,
  Trash2, Type, Upload,
} from "lucide-react";

import { IconTooltip } from "./IconTooltip";

/**
 * 미니 에디터 우측 사이드바 — 디자인 / 레이어 / 테마.
 *
 * 좁은 폭에서는 캔버스 위로 미끄러져 들어오는 패널이고, 넓은 폭에서는 자리를
 * 차지하는 고정 컬럼이다. 내용은 두 경우 모두 같다.
 * 여닫는 방식만 부모(TabletMiniEditor)가 정하고, 이 컴포넌트는 내용만 그린다.
 *
 * 세 탭은 모두 "지금 고른 것의 속성을 만진다"는 한 가지 일을 한다.
 * 저장 이력은 성격이 달라(문서 전체의 시간축을 오간다) 여기 있지 않고,
 * 상단바 저장 버튼 옆의 이력 아이콘이 맡는다 — 캔버스를 보면서 버전을
 * 비교하려면 목록이 캔버스 옆이 아니라 위에서 내려와야 한다.
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

/**
 * 좌측 레일에서 "텍스트 편집" 도구가 켜져 있을 때 디자인 탭이 받는 값.
 * null 이면 평소의 디자인 탭(요소 추가 / 속성 편집)이 그대로 선다.
 */
export interface TextEditPanelProps {
  /** 낱장을 부르는 이름. 호출부(TabletMiniEditor)가 정한 값이 그대로 내려온다. */
  unit: string;
  /** 지금 슬라이드의 이미지 개수 — 0 이면 이 슬라이드에서 할 수 있는 일이 없다 */
  imageCount: number;
  /** 문서 전체 슬라이드 수 — 보조 링크에 그대로 적힌다 */
  slideCount: number;
  /** 처리 중인 이미지·슬라이드가 있는지 */
  busy: boolean;
  onStart: () => void;
  onFullConvert: () => void;
}

export interface TabletEditorSidebarProps {
  tab: EditorTab;
  onTabChange: (t: EditorTab) => void;
  /** 캔버스에서 요소가 선택된 상태인지. 디자인 탭이 속성 편집으로 바뀐다. */
  selected: boolean;
  /** 선택된 것이 특정 이미지 레이어일 때만 그 id — 삭제 버튼이 지울 실제 대상이다 */
  selectedImageId?: string | null;
  /** 디자인 탭의 "이미지 추가" — 지금 슬라이드에 이미지 레이어를 하나 더한다 */
  onAddImage?: () => void;
  /** 속성 탭의 "삭제" — selectedImageId 가 없으면 지울 대상이 없어 버튼이 비활성된다 */
  onDeleteSelectedImage?: () => void;
  /** 텍스트 편집 도구가 켜져 있을 때만 값이 있다 */
  textEdit?: TextEditPanelProps | null;
}

export default function TabletEditorSidebar({
  tab, onTabChange, selected, selectedImageId, onAddImage, onDeleteSelectedImage, textEdit,
}: TabletEditorSidebarProps) {
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
        {/* 텍스트 편집 도구가 켜져 있으면 그 패널이 디자인 탭을 대신한다 —
            도구를 골랐는데 패널이 그대로면 어디서 실행하는지 찾을 곳이 없다. */}
        {tab === "design" && (
          textEdit
            ? <TextEditPanel {...textEdit} />
            : selected
              ? <PropertyPanel hasSelectedImage={!!selectedImageId} onDelete={onDeleteSelectedImage} />
              : <DesignPanel onAddImage={onAddImage} />
        )}
        {tab === "layers" && <LayersPanel />}
        {tab === "theme" && <ThemePanel />}
      </div>
    </div>
  );
}

/* ── 디자인 탭 — 텍스트 편집 도구 ─────────────────────────────────
   주 버튼 하나와 그 아래 보조 링크 하나. 이 순서가 곧 위계다.
   전체 슬라이드 변환은 예전에 좌측 레일에 따로 서 있었는데, 한 장씩 고르는 일과
   문서 전체를 갈아엎는 일이 같은 크기로 나란히 놓여 있어 실수로 누르기 쉬웠다.
   지금은 같은 맥락 안으로 들여와 텍스트 링크로 한 단 낮춰 두었다. */
function TextEditPanel({ unit, imageCount, slideCount, busy, onStart, onFullConvert }: TextEditPanelProps) {
  const empty = imageCount === 0;
  return (
    <div className="p-4 flex flex-col gap-3">
      <div className="flex flex-col gap-1.5">
        <p style={{ fontSize: 14, fontWeight: 700, color: C.text }}>이미지 텍스트 분리</p>
        <p style={{ fontSize: 12.5, color: C.sub, lineHeight: 1.6 }}>
          AI가 이미지에서 텍스트를 감지하고 편집 가능한 레이어로 분리합니다
        </p>
      </div>

      {empty ? (
        /* 할 수 있는 일이 없을 때 — 버튼만 꺼 두면 왜 꺼졌는지 알 길이 없어 이유를 같이 적는다 */
        <div
          className="rounded-[12px] px-3.5 py-3 flex items-start gap-2.5"
          style={{ background: "#F5F7FA" }}
        >
          <ImageOff size={15} strokeWidth={1.8} color={C.sub} className="shrink-0" style={{ marginTop: 1 }} />
          <div className="flex flex-col gap-1">
            <p style={{ fontSize: 12.5, fontWeight: 600, color: C.text }}>이 {unit}에 이미지가 없어요</p>
            <p style={{ fontSize: 12, color: C.sub, lineHeight: 1.6, wordBreak: "keep-all" }}>
              이미지를 추가하면 텍스트를 분리할 수 있어요.
            </p>
          </div>
        </div>
      ) : (
        <p style={{ fontSize: 12, color: C.sub }}>
          이 {unit}의 이미지 {imageCount}장
        </p>
      )}

      <button
        type="button"
        onClick={onStart}
        disabled={empty || busy}
        className="w-full h-11 rounded-[10px] flex items-center justify-center gap-2 transition-[filter,background-color] enabled:hover:brightness-[0.97] disabled:cursor-default"
        style={{
          background: empty || busy ? "#E7EAF0" : C.primary,
          color: empty || busy ? C.sub : "#FFFFFF",
        }}
      >
        {busy && <Loader2 size={15} strokeWidth={2.4} className="animate-spin" />}
        <span style={{ fontSize: 13.5, fontWeight: 700 }}>
          {busy ? "분리하는 중" : "텍스트 분리 시작"}
        </span>
      </button>

      <div style={{ height: 1, background: C.line }} />

      {/* 보조 액션 — 주 버튼과 같은 면을 쓰지 않는다. 링크 한 줄이 위계의 전부다.
          이 슬라이드에 이미지가 없어도 늘 보인다: 여기가 비었다는 것과 문서 전체를
          변환할 수 있다는 것은 서로 다른 이야기다. */}
      <button
        type="button"
        onClick={onFullConvert}
        disabled={busy}
        className="self-start rounded-[8px] px-1 py-1 -mx-1 transition-colors enabled:hover:bg-[#F5F7FA] disabled:opacity-45 disabled:cursor-default"
        style={{ fontSize: 12.5, fontWeight: 600, color: C.sub }}
      >
        전체 {unit} 분리 ({slideCount})
      </button>
    </div>
  );
}

/* ── 디자인 탭 — 선택된 요소가 없을 때 ───────────────────────────── */
function DesignPanel({ onAddImage }: { onAddImage?: () => void }) {
  return (
    <div className="p-4 flex flex-col gap-[7px]">
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

      {/* 요소 추가 — 아이콘이 왼쪽 끝에 줄맞춰 서서 셋이 한 묶음으로 읽힌다.
          텍스트·도형은 아직 실제 레이어 모델이 없어 장식으로 남겨 둔다 — 이미지만
          텍스트 분리 목록이 읽는 문서 상태에 실제로 반영된다. */}
      <AddButton icon={<Type size={15} strokeWidth={1.8} />} label="텍스트 추가" align="start" />
      <AddButton icon={<Circle size={15} strokeWidth={1.8} />} label="도형 추가" align="start" />
      <AddButton icon={<ImageIcon size={15} strokeWidth={1.8} />} label="이미지 추가" align="start" onClick={onAddImage} />

      {/* 파일 업로드 — 하는 일이 달라 한 칸 띄우고, 가운데 정렬로 묶음을 갈라 놓는다. */}
      <div style={{ height: 6 }} />
      <AddButton icon={<FileText size={15} strokeWidth={1.8} />} label="HTML 업로드" />
      <AddButton icon={<FileText size={15} strokeWidth={1.8} />} label="PDF 업로드" />
    </div>
  );
}

function AddButton({
  icon, label, align = "center", onClick,
}: { icon: React.ReactNode; label: string; align?: "start" | "center"; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full h-[38px] rounded-[9px] flex items-center gap-2 transition-colors hover:bg-[#F7F9FC] active:bg-[#EDF0F5] ${
        align === "start" ? "justify-start px-3" : "justify-center"
      }`}
      style={{ border: `1px solid ${C.line}`, background: C.card, color: C.text }}
    >
      <span className="shrink-0" style={{ color: C.sub, display: "inline-flex" }}>{icon}</span>
      <span style={{ fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>{label}</span>
    </button>
  );
}

/* ── 디자인 탭 — 요소가 선택됐을 때의 속성 편집 ─────────────────────
   선택한 요소 종류(칩) → 크기/위치 → 회전 → 정렬 → 벡터화 → 변형 → 조정 순.
   섹션 사이는 얇은 구분선으로 나눈다. */
function PropertyPanel({
  hasSelectedImage, onDelete,
}: { hasSelectedImage: boolean; onDelete?: () => void }) {
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
        {/* 실제로 지울 이미지 레이어가 있을 때만 눌린다 — 보드 빈 곳을 눌러 통짜 선택만 된
            상태(hasSelectedImage=false)에서는 지울 대상이 없어 꺼 둔다. */}
        <MiniIcon label="삭제" danger disabled={!hasSelectedImage} onClick={onDelete}>
          <Trash2 size={15} strokeWidth={1.9} />
        </MiniIcon>
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
  label, danger = false, disabled = false, onClick, children,
}: {
  label: string; danger?: boolean; disabled?: boolean; onClick?: () => void; children: React.ReactNode;
}) {
  return (
    <IconTooltip label={label}>
      <button
        type="button"
        aria-label={label}
        disabled={disabled}
        onClick={onClick}
        className="shrink-0 w-8 h-8 rounded-[8px] flex items-center justify-center transition-colors enabled:hover:bg-[#F2F4F8] enabled:active:bg-[#EDF0F5] disabled:opacity-35 disabled:cursor-default"
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
