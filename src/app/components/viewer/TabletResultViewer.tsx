import React, { useCallback, useEffect, useRef, useState } from "react";
import { Download } from "lucide-react";
import TabletEditorShell from "@/app/components/viewer/TabletEditorShell";
import OverlayButton from "@/app/components/viewer/OverlayButton";
import { LoadingAnnouncer, useDelayedLoading, ViewerSkeleton } from "./LoadingState";
import { VIEWER_CHROME, type ViewerFileType } from "@/app/components/viewer/viewerChrome";

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

/**
 * [목업] 한글(hwpx) 편집기 로딩 시간.
 *
 * 예전에는 이 시간에 맞춰 진행바를 채웠는데, 실제 편집기 로딩은 진행률을 알 수 없다.
 * 알 수 없는 값을 그럴듯한 막대로 그리면 남은 시간을 잘못 약속하는 셈이라 진행바를 걷고
 * 스켈레톤만 남겼다 — 진행률을 알 수 있게 되면 그때 진행바 하나로 바꾼다(스피너와 겹쳐 쓰지 않는다).
 */
const HWPX_LOAD_MS = 1600;

/** 모바일 경계 — 이 아래에서 여러 장 결과물을 세로로 이어 붙인다 */
const MOBILE_MAX = 767;
/** 이어 붙인 페이지 사이의 회색 간격 — 경계만 알리면 되므로 얇게 */
const PAGE_GAP = 10;
/**
 * 덱 한 장의 최대 폭 / 장 사이 간격 / 좌우 여백.
 *
 * 슬라이드는 16:9 비율이 곧 그 슬라이드라, 높이를 화면에 맞춰 자르지 않고 폭에 맞춰 잡는다.
 * 한 화면에 몇 장이 들어오는지는 그 결과로 정해진다.
 * 장 사이는 넉넉히 띄운다 — 붙여 놓으면 어디까지가 한 장인지 흐려진다.
 */
const DECK_MAX_W = 960;
const DECK_GAP = 28;
const DECK_PAD = 20;

function useIsMobile() {
  const [m, setM] = useState(
    () => typeof window !== "undefined" && window.matchMedia(`(max-width: ${MOBILE_MAX}px)`).matches,
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_MAX}px)`);
    const on = () => setM(mq.matches);
    mq.addEventListener("change", on);
    on();
    return () => mq.removeEventListener("change", on);
  }, []);
  return m;
}

export interface TabletResultViewerProps {
  fileType: ViewerFileType;
  fileName: string;
  /** 상단바 드롭다운 목록. 기본은 현재 파일 하나. */
  files?: string[];
  /** 형식별 기본값(VIEWER_CHROME)을 덮어쓸 전체 페이지 수 */
  totalPages?: number;
  /** 결과물을 이루는 파일 개수 — 다운로드 메뉴의 "전체 파일 받기 (N개)". 1이면 메뉴 없이 즉시 다운로드. */
  downloadFileCount?: number;
  onDownload?: () => void;
  onStructure?: () => void;
  onShare?: () => void;
  /** 편집기 진입. 결과물 뷰어 상단바에는 편집 아이콘이 없어, 지금은 호출부가 따로 입구를 둘 때만 쓰인다. */
  onEdit?: () => void;
  onExpand?: () => void;
  onClose?: () => void;
  /** 2단 구성(좌측 채팅 + 우측 에디터)의 오른쪽 열 안에서 렌더될 때 true. */
  embedded?: boolean;
  /** 상단바 바로 아래 full-bleed 슬롯. 모바일의 "PC 에디터" 안내 스트립이 여기 들어간다. */
  notice?: React.ReactNode;
  /**
   * 슬라이드형 결과물의 장수.
   *
   * 확장자로는 한 장짜리(.html)여도 내용이 여러 장인 결과물이 있다. 이 값이 오면
   * 폭과 무관하게 — 모바일·태블릿·데스크톱 모두 — 세로로 이어 붙여 보여 준다.
   * 여러 장을 훑어보는 일에는 넓은 화면이라고 좌우 넘김이 더 낫지 않기 때문이다.
   */
  deckPages?: number;
  /** 본문에 렌더할 결과물 미리보기 */
  children?: React.ReactNode;
}

export default function TabletResultViewer({
  fileType,
  fileName,
  files,
  totalPages: totalPagesProp,
  downloadFileCount,
  onDownload,
  onStructure,
  onShare,
  onEdit,
  onExpand,
  onClose,
  embedded,
  notice,
  deckPages,
  children,
}: TabletResultViewerProps) {
  const spec = VIEWER_CHROME[fileType];
  const totalPages = totalPagesProp ?? spec.totalPages;

  const [page, setPage] = useState(spec.initialPage);
  const [viewMode, setViewMode] = useState<"preview" | "edit">("preview");
  const [zoom, setZoom] = useState(100);
  // 한글은 편집기를 따로 불러오므로 준비되기 전까지 로딩 상태를 보여준다.
  const [loading, setLoading] = useState(fileType === "hwpx");
  // 200ms 안에 끝나면 아예 띄우지 않고, 띄웠으면 300ms 는 유지한다.
  const showSkeleton = useDelayedLoading(loading);

  /**
   * 모바일에서 여러 장을 세로로 이어 붙일지.
   *
   * 문서는 원래 위에서 아래로 읽는 것이라, 좁은 화면에서 한 장씩 끊어 넘기면
   * 읽는 흐름이 페이지마다 멈춘다. 그래서 전부 이어 붙이고 스크롤만 남긴다.
   *
   * 예외 둘 —
   *  · pptx: 한 장이 곧 하나의 독립된 화면이라 이어 붙이면 의미가 흐려진다. 좌우 넘김 유지.
   *  · mp4: 애초에 이 컴포넌트로 오지 않는다(전용 플레이어).
   */
  const isMobile = useIsMobile();
  /**
   * 슬라이드형 결과물(덱)인지.
   *
   * 확장자가 .pptx 든 .html 이든 "여러 장짜리 슬라이드"라는 점은 같다. 같은 것이면
   * 같게 보여야 하므로 둘을 한 갈래로 묶는다 — 덱은 폭을 가리지 않고 세로로 이어 붙인다.
   * 그 밖의 여러 장 결과물(문서)은 좁은 화면에서만 이어 붙인다: 넓은 화면에서는
   * 상단 넘김이 이미 잘 동작하고 있어 건드리지 않는다.
   */
  const isDeck = (deckPages ?? 0) > 1 || fileType === "pptx";
  const continuous = isDeck || (isMobile && spec.paginated && totalPages > 1);
  // 이어 붙일 장수 — 덱의 장수가 따로 오면 그것, 아니면 형식표가 아는 페이지 수.
  const pageCount = (deckPages ?? 0) > 1 ? deckPages! : totalPages;

  // 스크롤 위치 → 현재 페이지. 페이지 높이가 서로 다를 수 있어 계산이 아니라 실제 위치로 찾는다.
  const scrollRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef(0);
  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = 0;
      const sc = scrollRef.current;
      if (!sc) return;
      // 화면 위쪽 35% 지점을 기준선으로 삼는다 — 한가운데로 잡으면
      // 페이지가 절반 넘게 지나야 번호가 바뀌어 반응이 늦게 느껴진다.
      const line = sc.getBoundingClientRect().top + sc.clientHeight * 0.35;
      let cur = 1;
      pageRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= line) cur = i + 1;
      });
      setPage(cur);
    });
  }, []);
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);


  // 파일 형식이 바뀌면 페이지·로딩 상태를 그 형식의 기본값으로 되돌린다.
  useEffect(() => {
    setPage(VIEWER_CHROME[fileType].initialPage);
    setLoading(fileType === "hwpx");
  }, [fileType]);

  // [목업] 편집기 로딩 — 실제로는 편집기 번들·문서를 받아 오는 시간이다.
  useEffect(() => {
    if (!loading) return;
    const t = window.setTimeout(() => setLoading(false), HWPX_LOAD_MS);
    return () => window.clearTimeout(t);
  }, [loading]);

  return (
    <TabletEditorShell
      embedded={embedded}
      fileType={fileType}
      fileName={fileName}
      files={files ?? [fileName]}
      page={page}
      totalPages={totalPages}
      onPageChange={setPage}
      hidePageNav={continuous}
      downloadFileCount={downloadFileCount}
      viewMode={viewMode}
      onViewModeChange={setViewMode}
      onDownload={onDownload}
      onStructure={onStructure}
      onShare={onShare}
      onEdit={onEdit}
      onExpand={onExpand}
      onClose={onClose}
      toolbar={notice}
      bleed
    >
      <div className="relative h-full flex flex-col min-h-0" style={{ ...font, background: C.bg }}>
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
            {/* 밝은 문서 미리보기 위 보조 동작 — 영상 위 액션과 같은 컴포넌트·반경을 쓰고 면만 다르다 */}
            <OverlayButton
              label="다운로드"
              variant="surface"
              size="sm"
              icon={<Download size={15} strokeWidth={1.9} />}
              onClick={onDownload}
              disabled={loading}
            />
          </div>
        )}

        {/* ── 결과물 본문 ─────────────────────────────────────── */}
        <div
          ref={scrollRef}
          onScroll={continuous ? handleScroll : undefined}
          className="flex-1 min-h-0 overflow-y-auto flex flex-col"
          style={{ scrollbarWidth: "none" }}
        >
          {showSkeleton ? (
            /* 편집기 로딩 — 최종 화면의 뼈대를 그대로 보여준다.
               스피너와 진행바를 같이 두지 않는다: 둘 다 "진행 중"이라는 같은 말이다. */
            <ViewerSkeleton message="편집기를 불러오고 있어요" />
          ) : continuous ? (
            /* 여러 장을 이어 붙이고 스크롤만으로 오간다.
               덱은 장마다 "n / N" 라벨을 머리에 달고 넉넉히 띄운다 — 슬라이드는 한 장이
               하나의 완결된 화면이라, 어디까지가 한 장인지가 눈에 보여야 한다.
               문서는 페이지가 원래 이어지는 것이라 라벨 없이 얇은 간격만 둔다. */
            <div
              className="flex flex-col"
              style={{
                gap: isDeck ? DECK_GAP : PAGE_GAP,
                padding: isDeck ? DECK_PAD : PAGE_GAP,
                background: C.bg,
                ...(spec.zoomToolbar
                  ? { width: `${(100 / zoom) * 100}%`, transform: `scale(${zoom / 100})`, transformOrigin: "top left" }
                  : null),
              }}
            >
              {Array.from({ length: pageCount }, (_, i) => (
                <div
                  key={i}
                  ref={(el) => { pageRefs.current[i] = el; }}
                  className="shrink-0 w-full mx-auto"
                  style={{ maxWidth: isDeck ? DECK_MAX_W : undefined }}
                >
                  {isDeck && (
                    <p
                      className="tabular-nums"
                      style={{ fontSize: 13, fontWeight: 500, color: C.sub, marginBottom: 8 }}
                    >
                      {i + 1} / {pageCount}
                    </p>
                  )}
                  <div
                    aria-label={`${i + 1}페이지`}
                    className="overflow-hidden flex flex-col"
                    style={{
                      background: C.card,
                      borderRadius: isDeck ? 14 : 8,
                      boxShadow: isDeck
                        ? "0 2px 12px rgba(16,24,40,0.10)"
                        : "0 1px 3px rgba(16,24,40,0.08)",
                      // 슬라이드는 16:9 가 곧 그 슬라이드다. 문서는 내용 길이가 제각각이라 자연 높이.
                      aspectRatio: isDeck ? "16 / 9" : undefined,
                    }}
                  >
                    {children}
                  </div>
                </div>
              ))}
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

        {/* 현재 위치 — 넘김 버튼을 없앤 대신 지금 몇 장째인지만 우측에 붙여 둔다.
            스크롤할 때마다 바뀌므로 aria-live 는 두지 않는다(끊임없이 낭독된다).
            대신 각 페이지 블록에 "N페이지" 라벨을 달아 두었다. */}
        {continuous && !isDeck && !showSkeleton && (
          <div
            aria-hidden="true"
            className="absolute rounded-full tabular-nums"
            style={{
              right: 12,
              top: "50%",
              transform: "translateY(-50%)",
              padding: "5px 10px",
              background: "rgba(18,19,26,0.72)",
              color: "#FFFFFF",
              fontSize: 12,
              fontWeight: 700,
              pointerEvents: "none",
            }}
          >
            {page}/{pageCount}
          </div>
        )}
      </div>

      {/* 스켈레톤은 aria-hidden 이라, 다 불러왔다는 사실은 이 한 줄이 알린다 */}
      <LoadingAnnouncer loading={showSkeleton} message="편집기를 불러왔어요" />
    </TabletEditorShell>
  );
}
