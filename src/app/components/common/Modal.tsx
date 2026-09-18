import { useEffect, useState } from "react";
import type { ReactNode } from "react";

import { motion, radius, shadow } from "@/app/styleTokens";

/**
 * 공용 모달 shell — 기존 `PurchaseConfirmDialog`에 박혀 있던 배경·중앙 카드·ESC 닫기를
 * 뽑아냈다. 결제 확인/구독 해지 확인처럼 "가운데 뜨는 확인 카드"가 화면마다 반복되는데,
 * 그 chrome(배경 블러, 카드 라운드·그림자, ESC/바깥 클릭 닫기)까지 매번 새로 쓰지 않기
 * 위해서다. 내용(children)만 호출부가 채운다.
 *
 * 열림/닫힘 transition — 호출부는 `{open && <Modal/>}`로 조건부 렌더링하므로, 닫힘은
 * 원래 DOM에서 즉시 사라진다. 자연스러운 퇴장을 위해 onClose를 그대로 부모에 전달하지
 * 않고, 내부에서 먼저 "닫히는 중" 상태로 배경/카드를 페이드아웃한 다음(motion.normal)
 * 실제 onClose를 호출해 부모가 언마운트하게 한다. scale은 크게 쓰지 않는다(0.98→1 정도).
 *
 * children이 함수면 애니메이션 있는 close 함수를 인자로 받는다 — 다이얼로그 안의
 * "닫기"/"돌아가기" 버튼도 배경 클릭·Escape와 똑같이 퇴장 transition을 타게 하려면
 * onClose를 직접 부르지 말고 이 close를 불러야 한다. 함수가 아니면(기존 호출부) 그냥
 * 렌더링만 하고, 배경 클릭·Escape만 애니메이션을 탄다.
 */
export function Modal({
  onClose,
  ariaLabel,
  maxWidth = 400,
  children,
}: {
  onClose: () => void;
  ariaLabel: string;
  maxWidth?: number;
  children: ReactNode | ((close: () => void) => ReactNode);
}) {
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    // 마운트 다음 프레임에 켜서 진입 transition이 실제로 재생되게 한다(mount와 동시에
    // 최종 상태로 렌더되면 transition이 건너뛰어진다).
    const raf = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  const requestClose = () => {
    if (closing) return;
    setClosing(true);
    setVisible(false);
    window.setTimeout(onClose, 160);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") requestClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closing]);

  return (
    <div
      onClick={requestClose}
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 motion-reduce:transition-none"
      style={{
        background: "rgba(15,23,42,0.35)",
        backdropFilter: "blur(6px)",
        opacity: visible ? 1 : 0,
        transition: `opacity ${motion.normal}`,
      }}
    >
      <div
        role="dialog"
        aria-label={ariaLabel}
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        className="w-full flex flex-col motion-reduce:transition-none"
        style={{
          maxWidth,
          background: "white",
          borderRadius: radius.cardEmphasis,
          boxShadow: shadow.modal,
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1)" : "scale(0.98)",
          transition: `opacity ${motion.normal}, transform ${motion.normal}`,
        }}
      >
        {typeof children === "function" ? children(requestClose) : children}
      </div>
    </div>
  );
}

export default Modal;
