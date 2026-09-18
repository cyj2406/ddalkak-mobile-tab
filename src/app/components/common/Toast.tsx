import { useEffect, useState, useSyncExternalStore } from "react";
import { CheckCircle2, XCircle } from "lucide-react";

import { color, f, motion, shadow } from "@/app/styleTokens";

/**
 * 공용 Toast — 결제/구독/저장처럼 "화면 이동 없이 결과만 알려주면 되는" 액션이 앱
 * 전역(설정, 요금제, 결제 관리 등)에 흩어져 있는데, 지금까지 이걸 알려줄 공통 방법이
 * 없었다(뷰어 전용 ViewerToast/useShareToast만 있었고, 그건 fixed inset-0 에디터 화면
 * 안에서만 쓰는 것이라 건드리지 않는다). 화면마다 다른 토스트를 새로 그리지 않도록
 * creditBalance.ts/subscription.ts와 같은 최소 singleton 패턴(useSyncExternalStore)으로
 * 만들고, 어디서든 `showToast("저장되었습니다")`만 부르면 되게 한다.
 *
 * <ToastHost/>는 App.tsx 루트에 한 번만 마운트한다.
 */

type ToastTone = "success" | "error";
interface ToastState {
  id: number;
  message: string;
  tone: ToastTone;
}

let state: ToastState | null = null;
let nextId = 0;
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((l) => l());
}

export function showToast(message: string, tone: ToastTone = "success") {
  state = { id: ++nextId, message, tone };
  emit();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
function getSnapshot() {
  return state;
}

const AUTO_DISMISS_MS = 2600;

export function ToastHost() {
  const current = useSyncExternalStore(subscribe, getSnapshot);
  const [visibleId, setVisibleId] = useState<number | null>(null);

  useEffect(() => {
    if (!current) return;
    // 같은 프레임에 마운트+visible=true를 함께 주면 transition이 재생되지 않아 한 프레임 늦춘다.
    setVisibleId(null);
    const raf = requestAnimationFrame(() => setVisibleId(current.id));
    const dismiss = window.setTimeout(() => setVisibleId(null), AUTO_DISMISS_MS);
    return () => { cancelAnimationFrame(raf); window.clearTimeout(dismiss); };
  }, [current]);

  if (!current) return null;
  const visible = visibleId === current.id;
  const Icon = current.tone === "success" ? CheckCircle2 : XCircle;
  const iconColor = current.tone === "success" ? color.brand : "#ef4444";

  return (
    <div
      aria-hidden={!visible}
      className="fixed inset-x-0 bottom-6 z-[90] flex justify-center px-4 pointer-events-none motion-reduce:transition-none"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: `opacity ${motion.normal}, transform ${motion.normal}`,
      }}
    >
      <div
        role="status"
        aria-live="polite"
        className="flex items-center gap-2.5 rounded-full bg-white px-4 py-3 pointer-events-auto"
        style={{ boxShadow: shadow.popover, border: `1px solid ${color.border.default}` }}
      >
        <Icon size={17} strokeWidth={2} color={iconColor} className="shrink-0" />
        <span style={{ ...f, fontWeight: 600, fontSize: 13.5, color: color.text.primary, letterSpacing: "-0.2px" }}>
          {current.message}
        </span>
      </div>
    </div>
  );
}

export default ToastHost;
