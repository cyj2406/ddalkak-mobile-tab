import React, { useCallback, useEffect, useState } from "react";
import { Check } from "lucide-react";

/**
 * 공유 안내 문구 — 결과물 뷰어와 편집기가 함께 쓴다.
 * 공유 버튼을 누르면 링크를 클립보드에 복사하고 화면 위쪽에 잠시 띄운다.
 */

const C = {
  card: "#FFFFFF",
  text: "#1A1D29",
} as const;

const font = { fontFamily: "'Pretendard Variable', Pretendard, sans-serif" };

/** 목업 공유 링크 */
export const SHARE_URL = "https://ddalkkak.net/s/9f2c41";
/** 안내 문구가 떠 있는 시간 */
const TOAST_MS = 2400;

/**
 * 화면 위쪽에 잠시 떴다 사라지는 안내 문구.
 * 부모(뷰어·편집기 루트)가 fixed inset-0 이므로 absolute 로 화면 기준 좌표를 얻는다
 * — 진입 애니메이션의 transform 이 fixed 기준을 흔드는 것을 피하려는 것.
 */
export function ViewerToast({ message, top = 72 }: { message: string; top?: number }) {
  return (
    <>
      <style>{`
        @keyframes viewerToastIn {
          from { transform: translate(-50%, -10px); opacity: 0; }
          to   { transform: translate(-50%, 0);     opacity: 1; }
        }
        .viewer-toast { animation: viewerToastIn 200ms ease-out; }
        @media (prefers-reduced-motion: reduce) { .viewer-toast { animation: none; } }
      `}</style>
      <div
        role="status"
        aria-live="polite"
        className="viewer-toast absolute z-[98] flex items-center gap-3 rounded-[14px]"
        style={{
          top,
          left: "50%",
          transform: "translateX(-50%)",
          minHeight: 56,
          padding: "0 22px",
          background: C.card,
          boxShadow: "0px 10px 34px rgba(16,24,40,0.16)",
          ...font,
        }}
      >
        <span
          className="shrink-0 flex items-center justify-center rounded-full"
          style={{ width: 22, height: 22, background: "#12131A" }}
        >
          <Check size={13} strokeWidth={3} color="#FFFFFF" />
        </span>
        <span style={{ fontSize: 15, fontWeight: 600, color: C.text, whiteSpace: "nowrap" }}>{message}</span>
      </div>
    </>
  );
}

/**
 * 공유 링크 복사 + 안내 문구 상태.
 * 목업 링크라 클립보드 권한이 없는 환경에서도 안내는 그대로 보여준다.
 */
export function useShareToast() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!message) return;
    const t = setTimeout(() => setMessage(null), TOAST_MS);
    return () => clearTimeout(t);
  }, [message]);

  const share = useCallback(async () => {
    try {
      await navigator.clipboard?.writeText(SHARE_URL);
    } catch {
      /* 클립보드를 못 쓰는 환경 — 목업이므로 안내만 띄운다 */
    }
    setMessage("공유 링크가 복사되었습니다");
  }, []);

  return { message, share };
}
