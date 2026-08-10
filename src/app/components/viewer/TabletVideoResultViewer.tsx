import React, { useCallback, useEffect, useRef, useState } from "react";
import { Film, Maximize2, Minimize2, Pause, Play, Volume2, VolumeX } from "lucide-react";
import TabletEditorShell from "@/app/components/viewer/TabletEditorShell";
import { type ResultVersionInfo } from "@/app/components/viewer/viewerChrome";

/**
 * 태블릿(768~1024px, 터치) 영상 결과 뷰어.
 * 1단계에서 만든 TabletEditorShell을 그대로 감싸 상단바·규격·진입 애니메이션을 공유한다.
 *
 * - 상단바는 fileType="mp4" 구성(VIEWER_CHROME) — 페이지네이션 없음,
 *   우측은 다운로드(버전 드롭다운)·공유·구분선·확대·닫기
 * - 상단바 아래는 곧바로 플레이어다. 회색 띠 없이 "편집기 열기"만 영상 위 우상단에 띄운다
 *   (768px 미만에서는 이 버튼을 감춘다).
 * - 16:9 플레이어를 폭 100%로, 남는 공간의 상하 중앙에 배치
 * - 커스텀 컨트롤(재생/일시정지 · 진행바 · 시간 · 음소거 · 전체화면)
 */

const C = {
  card: "#FFFFFF",
  text: "#1A1D29",
} as const;

const font = { fontFamily: "'Pretendard Variable', Pretendard, sans-serif" };

// ── 목업 데이터 ───────────────────────────────────────────────────────────────
const MOCK = {
  fileName: "idol_stage_video.mp4",
  duration: 15,
};

const fmt = (sec: number) => {
  const s = Math.max(0, Math.floor(sec));
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

export interface TabletVideoResultViewerProps {
  fileName?: string;
  /** 상단바 드롭다운에 표시할 파일 목록. 기본은 현재 파일 하나. */
  files?: string[];
  /** 실제 영상 URL. 없으면 목업 재생(15초)으로 컨트롤이 동작한다. */
  src?: string;
  poster?: string;
  duration?: number;
  /** 다운로드 버튼에 붙는 버전 드롭다운 값 (데스크톱·태블릿 공통) */
  versions?: ResultVersionInfo;
  onBack?: () => void;
  onDownload?: () => void;
  onShare?: () => void;
  onClose?: () => void;
  /** 본문 "편집기 열기" — 프로덕션의 "수정 요청" 자리. 상단바에는 편집 아이콘을 두지 않는다. */
  onEdit?: () => void;
  /** 상단바 바로 아래 full-bleed 슬롯. 모바일의 "PC 에디터" 안내 스트립이 여기 들어간다. */
  notice?: React.ReactNode;
}

/**
 * 플레이어 위에 얹는 알약 버튼 — 편집기 열기.
 * 검은 영상 위에 바로 놓이므로 옅은 테두리 대신 짙은 그림자로 경계를 만든다.
 */
function OverlayButton({
  label, icon, onClick,
}: { label: string; icon: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="shrink-0 h-10 px-3.5 rounded-[10px] flex items-center gap-2 transition-colors active:bg-[#EDF0F5] hover:bg-[#F2F4F8]"
      style={{ background: C.card, boxShadow: "0px 4px 16px rgba(0,0,0,0.32)" }}
    >
      <span className="shrink-0" style={{ color: C.text, display: "flex" }}>{icon}</span>
      <span style={{ fontSize: 13.5, fontWeight: 600, color: C.text, whiteSpace: "nowrap" }}>{label}</span>
    </button>
  );
}

export default function TabletVideoResultViewer({
  fileName = MOCK.fileName,
  files,
  src,
  poster,
  duration: durationProp = MOCK.duration,
  versions,
  onBack,
  onDownload,
  onShare,
  onClose,
  onEdit,
  notice,
}: TabletVideoResultViewerProps) {
  const playerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(durationProp);
  const [muted, setMuted] = useState(false);
  const [isFull, setIsFull] = useState(false);

  // 실제 src가 없을 때: 목업 재생 타이머로 진행바·시간을 동작시킨다.
  useEffect(() => {
    if (src || !playing) return;
    const started = performance.now() - current * 1000;
    let raf = 0;
    const tick = () => {
      const t = (performance.now() - started) / 1000;
      if (t >= duration) {
        setCurrent(duration);
        setPlaying(false);
        return;
      }
      setCurrent(t);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // current는 시작 시점 계산에만 쓰므로 의존성에서 제외한다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, playing, duration]);

  // 실제 src가 있을 때: video 엘리먼트 이벤트를 그대로 따른다.
  useEffect(() => {
    const v = videoRef.current;
    if (!src || !v) return;
    const onTime = () => setCurrent(v.currentTime);
    const onMeta = () => setDuration(v.duration || durationProp);
    const onEnd = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onMeta);
    v.addEventListener("ended", onEnd);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onMeta);
      v.removeEventListener("ended", onEnd);
    };
  }, [src, durationProp]);

  // 전체화면 상태 동기화
  useEffect(() => {
    const onFs = () => setIsFull(document.fullscreenElement === playerRef.current);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    setPlaying((p) => {
      const next = !p;
      if (src && v) {
        if (next) void v.play();
        else v.pause();
      }
      // 끝난 뒤 다시 누르면 처음부터
      if (next && current >= duration) {
        setCurrent(0);
        if (src && v) v.currentTime = 0;
      }
      return next;
    });
  }, [src, current, duration]);

  const seek = (value: number) => {
    setCurrent(value);
    if (src && videoRef.current) videoRef.current.currentTime = value;
  };

  const toggleMute = () => {
    setMuted((m) => {
      if (videoRef.current) videoRef.current.muted = !m;
      return !m;
    });
  };

  const toggleFullscreen = () => {
    const el = playerRef.current;
    if (!el) return;
    if (document.fullscreenElement) void document.exitFullscreen();
    else void el.requestFullscreen?.();
  };

  const pct = duration > 0 ? Math.min(100, (current / duration) * 100) : 0;

  return (
    <TabletEditorShell
      fileType="mp4"
      fileName={fileName}
      files={files ?? [fileName]}
      versions={versions}
      bleed
      onBack={onBack}
      onDownload={onDownload}
      onShare={onShare}
      onClose={onClose}
      onEdit={onEdit}
      toolbar={notice}
    >
      <div className="h-full flex flex-col" style={font}>
        {/* ── 플레이어 — 상단바 바로 아래부터 화면을 꽉 채우고 영상은 레터박스로 담긴다.
            편집기 열기는 별도 띠 없이 플레이어 위 우상단에 띄운다 ── */}
        <div ref={playerRef} className="relative flex-1 min-h-0" style={{ background: "#000000" }}>
          {src ? (
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              muted={muted}
              playsInline
              className="absolute inset-0 w-full h-full object-contain"
            />
          ) : (
            // 목업 — 실제 영상 대신 세로형 화면이 레터박스로 담긴 모습
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="h-full"
                style={{
                  aspectRatio: "9 / 16",
                  maxWidth: "100%",
                  background: "radial-gradient(120% 90% at 50% 25%, #2A2140 0%, #0B0D12 72%)",
                }}
              />
            </div>
          )}

          {/* 편집기 열기 — 영상 위 우상단. 태블릿(768px) 이상에서만 노출한다
              (모바일은 편집기로 들어가지 않고 "PC 에디터" 안내만 띄운다).
              가운데 재생 버튼이 inset-0 로 화면 전체를 덮으므로 z-20 으로 그 위에 올린다 */}
          <div className="hidden md:block absolute right-4 top-4 z-20">
            <OverlayButton label="편집기 열기" icon={<Film size={16} strokeWidth={1.8} />} onClick={onEdit} />
          </div>

          {/* 가운데 큰 재생 버튼 — 정지 상태에서만 */}
          {!playing && (
            <button
              type="button"
              aria-label="재생"
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(11,13,18,0.55)", border: "1.5px solid rgba(255,255,255,0.5)" }}
              >
                <Play size={26} strokeWidth={2} color="#FFFFFF" fill="#FFFFFF" />
              </span>
            </button>
          )}

          {/* 컨트롤 — 컨트롤 행 + 화면 맨 아래 full-width 진행바 */}
          <div className="absolute left-0 right-0 bottom-0">
            <div
              className="flex items-center gap-1 px-2 pt-8 pb-1"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))" }}
            >
              <button
                type="button"
                aria-label={playing ? "일시정지" : "재생"}
                onClick={togglePlay}
                className="shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center active:bg-white/10"
              >
                {playing ? (
                  <Pause size={20} strokeWidth={2} color="#FFFFFF" fill="#FFFFFF" />
                ) : (
                  <Play size={20} strokeWidth={2} color="#FFFFFF" fill="#FFFFFF" />
                )}
              </button>

              <span className="shrink-0 px-1 tabular-nums" style={{ fontSize: 13.5, fontWeight: 600, color: "#FFFFFF" }}>
                {fmt(current)} / {fmt(duration)}
              </span>

              <div className="flex-1 min-w-0" />

              <button
                type="button"
                aria-label={muted ? "음소거 해제" : "음소거"}
                onClick={toggleMute}
                className="shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center active:bg-white/10"
              >
                {muted ? <VolumeX size={20} strokeWidth={1.9} color="#FFFFFF" /> : <Volume2 size={20} strokeWidth={1.9} color="#FFFFFF" />}
              </button>

              <button
                type="button"
                aria-label={isFull ? "전체화면 종료" : "전체화면"}
                onClick={toggleFullscreen}
                className="shrink-0 w-11 h-11 rounded-[12px] flex items-center justify-center active:bg-white/10"
              >
                {isFull ? <Minimize2 size={19} strokeWidth={1.9} color="#FFFFFF" /> : <Maximize2 size={19} strokeWidth={1.9} color="#FFFFFF" />}
              </button>

            </div>

            {/* 진행바 — 화면 맨 아래 full-width */}
            <div className="relative h-1" style={{ background: "rgba(255,255,255,0.28)" }}>
              <div className="absolute left-0 top-0 h-full" style={{ width: `${pct}%`, background: "#FFFFFF" }} />
              <input
                type="range"
                aria-label="재생 위치"
                min={0}
                max={duration}
                step={0.1}
                value={current}
                onChange={(e) => seek(Number(e.target.value))}
                className="absolute left-0 w-full opacity-0 cursor-pointer"
                style={{ height: 22, top: -11 }}
              />
            </div>
          </div>
        </div>
      </div>
    </TabletEditorShell>
  );
}
