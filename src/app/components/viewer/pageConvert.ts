import {
  type Dispatch, type SetStateAction, useCallback, useEffect, useRef, useState,
} from "react";

import type { RunProgress } from "./textSplit";

/**
 * "전체 변환" — 슬라이드를 통째로 편집 가능한 HTML로 다시 만드는 문서(슬라이드) 단위 작업.
 *
 * aiStudio.ts 의 옛 "전체 바꾸기"(이미지 한 장, 450C)와 같은 처리 방식을 그대로 잇는다 —
 * 다만 대상이 이미지 한 장이 아니라 슬라이드다. 그래서 이 파일은 aiStudio.ts(객체 단위)가
 * 아니라 우측 텍스트분리 패널(문서 단위)이 쓴다.
 *
 * [목업] 전부 setTimeout 이고, 늘 성공한다 — aiStudio.ts 와 같은 이유로 실패·재시도
 * 개념을 새로 만들지 않는다. 여러 슬라이드를 한 번에 돌릴 때는 textSplit.ts 의 대량
 * 회차처럼 슬라이드마다 시차를 둬 하나씩 끝나는 게 보이게 한다.
 *
 * 크레딧 잔액은 이 훅도 소유하지 않는다 — TabletMiniEditor 가 useTextSplit·useAIStudio와
 * 똑같이 하나의 값·setter 를 내려준다.
 */

export const PAGE_CONVERT_COST = 450;
/** [목업] 슬라이드 하나를 변환하는 데 걸리는 시간 */
const WORK_MS = 1600;
/** [목업] 여러 장을 한 번에 돌릴 때 슬라이드 하나가 다음 슬라이드보다 늦게 시작하는 간격 */
const STAGGER_MS = 450;

export type PageConvertStatus = "idle" | "processing" | "done";

export interface PageConvertToast {
  done: number;
}

export interface UsePageConvert {
  /** 슬라이드 번호 → 상태 */
  status: Record<number, PageConvertStatus>;
  busy: boolean;
  runProgress: RunProgress | null;
  toast: PageConvertToast | null;
  run: (slideNos: number[]) => void;
  dismissToast: () => void;
}

export function usePageConvert(
  balance: number,
  setBalance: Dispatch<SetStateAction<number>>,
): UsePageConvert {
  const [status, setStatus] = useState<Record<number, PageConvertStatus>>({});
  const [busy, setBusy] = useState(false);
  const [runProgress, setRunProgress] = useState<RunProgress | null>(null);
  const [toast, setToast] = useState<PageConvertToast | null>(null);

  const timers = useRef<number[]>([]);
  const after = useCallback((ms: number, fn: () => void) => {
    timers.current.push(window.setTimeout(fn, ms));
  }, []);
  useEffect(() => () => { timers.current.forEach(window.clearTimeout); }, []);

  const run = useCallback((slideNos: number[]) => {
    if (slideNos.length === 0 || busy) return;
    const cost = slideNos.length * PAGE_CONVERT_COST;
    if (cost > balance) return;

    setBalance((b) => b - cost);
    setBusy(true);
    setStatus((s) => {
      const next = { ...s };
      slideNos.forEach((no) => { next[no] = "processing"; });
      return next;
    });
    setRunProgress({ total: slideNos.length, doneCount: 0 });

    let left = slideNos.length;
    slideNos.forEach((no, i) => {
      after(i * STAGGER_MS + WORK_MS, () => {
        setStatus((s) => ({ ...s, [no]: "done" }));
        setRunProgress((p) => (p ? { ...p, doneCount: p.doneCount + 1 } : p));
        left -= 1;
        if (left > 0) return;
        setBusy(false);
        setRunProgress(null);
        setToast({ done: slideNos.length });
      });
    });
  }, [balance, busy, setBalance, after]);

  const dismissToast = useCallback(() => setToast(null), []);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 4000);
    return () => window.clearTimeout(t);
  }, [toast]);

  return { status, busy, runProgress, toast, run, dismissToast };
}
