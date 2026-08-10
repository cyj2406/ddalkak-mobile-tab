import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import TabletEditorShell from "@/app/components/viewer/TabletEditorShell";
import { VIEWER_CHROME, type ResultVersionInfo, type ViewerFileType } from "@/app/components/viewer/viewerChrome";

/**
 * 태블릿(768px 이상) 결과물 뷰어 — 파일 형식별 구성.
 *
 * 상단바는 TabletEditorShell이 VIEWER_CHROME[fileType] 구성표대로 그린다
 * (파일명 + 드롭다운·우측 아이콘은 공통, 페이지네이션·토글·아이콘 세트만 형식별).
 * 이 컴포넌트는 상단바 외에 형식마다 다른 "본문 위 요소"를 담당한다.
 *
 *  - pdf  : 본문 상단 "N페이지" 라벨 + 줌 컨트롤(- 100% + 리셋) 툴바
 *  - hwpx : 본문 우상단 다운로드 버튼, 편집기가 뜨기 전에는 스피너 + 진행바
 *  - 그 외(docx·xlsx·pptx): 본문 위 추가 요소 없음
 *
 * 영상(mp4)은 재생 컨트롤이 본문 전체를 쓰므로 TabletVideoResultViewer가 맡는다.
 * 상단바 구성만 같은 구성표(VIEWER_CHROME.mp4)를 공유한다.
 */

const C = {
  primary: "#3B5BFF",
  bg: "#F5F7FA",
  card: "#FFFFFF",
  text: "#1A1D29",
  sub: "#8A90A2",
  line: "#E7EAF0",
} as const;

const font = { fontFamily: "'Pretendard Variable', Pretendard, sans-serif" };

/** 한글(hwpx) 편집기 로딩 목업 — 진행바가 이 시간 동안 100%까지 찬다. */
const HWPX_LOAD_MS = 1600;

export interface TabletResultViewerProps {
  fileType: ViewerFileType;
  fileName: string;
  /** 상단바 드롭다운 목록. 기본은 현재 파일 하나. */
  files?: string[];
  /** 형식별 기본값(VIEWER_CHROME)을 덮어쓸 전체 페이지 수 */
  totalPages?: number;
  /** 다운로드 버튼에 붙는 버전 드롭다운 값 (데스크톱·태블릿 공통) */
  versions?: ResultVersionInfo;
  onDownload?: () => void;
  onStructure?: () => void;
  onShare?: () => void;
  /** 편집기 진입. 결과물 뷰어 상단바에는 편집 아이콘이 없어, 지금은 호출부가 따로 입구를 둘 때만 쓰인다. */
  onEdit?: () => void;
  onExpand?: () => void;
  onClose?: () => void;
  /** 상단바 바로 아래 full-bleed 슬롯. 모바일의 "PC 에디터" 안내 스트립이 여기 들어간다. */
  notice?: React.ReactNode;
  /** 본문에 렌더할 결과물 미리보기 */
  children?: React.ReactNode;
}

/** 본문 위에 얹는 작은 알약 버튼 — 형식별 보조 동작(편집기 열기·새로고침·다운로드) */
function OverlayButton({
  label, icon, onClick, disabled = false,
}: { label: string; icon: React.ReactNode; onClick?: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="shrink-0 h-9 px-3 rounded-[10px] flex items-center gap-1.5 transition-colors disabled:opacity-40 active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
      style={{ background: C.card, border: `1px solid ${C.line}`, boxShadow: "0px 1px 3px rgba(16,24,40,0.08)" }}
    >
      <span className="shrink-0" style={{ color: C.text, display: "flex" }}>{icon}</span>
      <span style={{ fontSize: 13, fontWeight: 600, color: C.text, whiteSpace: "nowrap" }}>{label}</span>
    </button>
  );
}

export default function TabletResultViewer({
  fileType,
  fileName,
  files,
  totalPages: totalPagesProp,
  versions,
  onDownload,
  onStructure,
  onShare,
  onEdit,
  onExpand,
  onClose,
  notice,
  children,
}: TabletResultViewerProps) {
  const spec = VIEWER_CHROME[fileType];
  const totalPages = totalPagesProp ?? spec.totalPages;

  const [page, setPage] = useState(spec.initialPage);
  const [viewMode, setViewMode] = useState<"preview" | "edit">("preview");
  const [zoom, setZoom] = useState(100);
  // 한글은 편집기를 따로 불러오므로 준비되기 전까지 로딩 상태를 보여준다.
  const [loading, setLoading] = useState(fileType === "hwpx");
  const [progress, setProgress] = useState(0);

  // 파일 형식이 바뀌면 페이지·로딩 상태를 그 형식의 기본값으로 되돌린다.
  useEffect(() => {
    setPage(VIEWER_CHROME[fileType].initialPage);
    setLoading(fileType === "hwpx");
    setProgress(0);
  }, [fileType]);

  // hwpx 로딩 진행바 — 목업이라 시간 기반으로 채운다.
  useEffect(() => {
    if (!loading) return;
    const started = performance.now();
    let raf = 0;
    const tick = () => {
      const ratio = Math.min(1, (performance.now() - started) / HWPX_LOAD_MS);
      setProgress(ratio);
      if (ratio >= 1) setLoading(false);
      else raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [loading]);

  return (
    <TabletEditorShell
      fileType={fileType}
      fileName={fileName}
      files={files ?? [fileName]}
      page={page}
      totalPages={totalPages}
      onPageChange={setPage}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
      versions={versions}
      onDownload={onDownload}
      onStructure={onStructure}
      onShare={onShare}
      onEdit={onEdit}
      onExpand={onExpand}
      onClose={onClose}
      toolbar={notice}
      bleed
    >
      <div className="h-full flex flex-col min-h-0" style={{ ...font, background: C.bg }}>
        {/* ── PDF — "N페이지" 라벨 + 줌 컨트롤 툴바 ─────────────── */}
        {spec.zoomToolbar && (
          <div
            className="shrink-0 h-11 flex items-center justify-between px-3"
            style={{ background: C.card, borderBottom: `1px solid ${C.line}` }}
          >
            <span style={{ fontSize: 13, fontWeight: 600, color: C.sub }}>{totalPages}페이지</span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label="축소"
                onClick={() => setZoom((z) => Math.max(50, z - 10))}
                disabled={zoom <= 50}
                className="w-8 h-8 rounded-[8px] flex items-center justify-center disabled:opacity-35 active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
                style={{ fontSize: 16, fontWeight: 700, color: C.text }}
              >
                −
              </button>
              <span className="tabular-nums text-center" style={{ minWidth: 46, fontSize: 13, fontWeight: 600, color: C.text }}>
                {zoom}%
              </span>
              <button
                type="button"
                aria-label="확대"
                onClick={() => setZoom((z) => Math.min(200, z + 10))}
                disabled={zoom >= 200}
                className="w-8 h-8 rounded-[8px] flex items-center justify-center disabled:opacity-35 active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
                style={{ fontSize: 16, fontWeight: 700, color: C.text }}
              >
                +
              </button>
              <button
                type="button"
                onClick={() => setZoom(100)}
                className="h-8 px-2.5 rounded-[8px] active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
                style={{ fontSize: 13, fontWeight: 600, color: C.text }}
              >
                리셋
              </button>
            </div>
          </div>
        )}

        {/* ── 한글 — 본문 우상단 다운로드 버튼 ─────────────────── */}
        {fileType === "hwpx" && (
          <div className="shrink-0 flex items-center justify-end px-3 pt-3">
            <OverlayButton
              label="다운로드"
              icon={<Download size={15} strokeWidth={1.9} />}
              onClick={onDownload}
              disabled={loading}
            />
          </div>
        )}

        {/* ── 결과물 본문 ─────────────────────────────────────── */}
        <div className="flex-1 min-h-0 overflow-y-auto flex flex-col" style={{ scrollbarWidth: "none" }}>
          {loading ? (
            // 한글 편집기 로딩 — 스피너 + 진행바
            <div className="flex-1 flex flex-col items-center justify-center gap-4 px-8">
              <style>{`
                @keyframes viewerSpin { to { transform: rotate(360deg); } }
                .viewer-spinner { animation: viewerSpin 900ms linear infinite; }
                @media (prefers-reduced-motion: reduce) { .viewer-spinner { animation-duration: 2.4s; } }
              `}</style>
              <span
                className="viewer-spinner rounded-full"
                style={{
                  width: 34, height: 34,
                  border: `3px solid ${C.line}`,
                  borderTopColor: C.sub,
                  display: "block",
                }}
              />
              <span style={{ fontSize: 14.5, fontWeight: 600, color: C.text }}>편집기 불러오는 중...</span>
              <div className="w-full max-w-[280px] h-1 rounded-full overflow-hidden" style={{ background: C.line }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${Math.round(progress * 100)}%`, background: C.text, transition: "width 120ms linear" }}
                />
              </div>
            </div>
          ) : (
            <div
              className="flex-1 flex flex-col min-h-0"
              style={
                spec.zoomToolbar
                  ? { width: `${(100 / zoom) * 100}%`, transform: `scale(${zoom / 100})`, transformOrigin: "top left" }
                  : undefined
              }
            >
              {children ?? (
                <div className="flex-1 min-h-[320px] flex items-center justify-center">
                  <span style={{ fontSize: 15, fontWeight: 600, color: C.sub }}>결과물 영역</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </TabletEditorShell>
  );
}
