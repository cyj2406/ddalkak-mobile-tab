import {
  type Dispatch, type SetStateAction, useCallback, useEffect, useRef, useState,
} from "react";

import { formatCreditShort } from "./textSplit";

/**
 * AI 스튜디오(생성/수정) — 상태와 규칙.
 *
 * textSplit.ts 와 같은 자리, 같은 성격이다: 화면(AIBar, ContextToolbar.tsx)은 그리는
 * 일만 하고, "무엇이 지금 어떤 상태인가"는 여기 모은다. 처리 과정도 같은 방식으로
 * 목업한다 — 전부 setTimeout 이고, 성공/실패 분기 없이 항상 성공한다(생성·수정에
 * 실패라는 개념까지 목업하는 것은 이번 범위 밖).
 *
 * 대상(target — 아이콘/일러스트/배경/이미지 전체/영역 지정 중 어느 것에 지금 이
 * 바가 작용하는지)은 이 훅이 소유하지 않는다. 캔버스 선택 상태를 관찰해 자동
 * 전환해야 하는데 그 값(selectedImageId)은 TabletMiniEditor 에 있으므로, 그쪽이
 * aiTarget 을 들고 이 훅의 함수들에 필요한 값(kind, imageId, instruction)을 넘겨
 * 호출하는 방식이다. 이 훅은 "크레딧 드는 동작과 그 진행 상태"만 다룬다.
 *
 * 크레딧 잔액도 이 훅이 소유하지 않는다. TabletMiniEditor 가 하나만 들고 있다가
 * 여기와 useTextSplit·usePageConvert 세 곳에 같은 값·같은 setter 를 내려준다 —
 * 그래야 헤더의 코인 뱃지 하나가 모든 차감을 정확히 반영한다.
 *
 * "고치기"의 페이지 단위 작업(전체 변환, 옛 이름 "전체 바꾸기")은 더 이상 여기 없다 —
 * 객체(이미지 한 장) 단위 작업만 이 훅의 몫이고, 문서(슬라이드 전체) 단위 작업은
 * pageConvert.ts + 우측 텍스트분리 패널로 옮겼다.
 */

/* ── 값 ───────────────────────────────────────────────────────────── */

export type AICreateKind = "icon" | "illustration" | "background";

export const AI_CREATE_KINDS: { id: AICreateKind; label: string; cost: number }[] = [
  { id: "icon", label: "아이콘", cost: 100 },
  { id: "illustration", label: "일러스트", cost: 100 },
  { id: "background", label: "배경", cost: 150 },
];

export const AI_REGION_EDIT_COST = 90;
/** [가정] 스펙에 배경 지우기 비용이 적혀 있지 않아 목업으로 정한 값. */
export const AI_BG_REMOVE_COST = 50;

/** [목업] 생성 결과 미리보기로 순환해 쓰는 톤 블록 색 — 실제 픽셀 파이프라인이 없다. */
const CREATE_RESULT_TONES = ["#C7D2E8", "#D8CFE6", "#CFE0D6", "#E6D9C6", "#F4A261"];
/** [목업] "되돌리기" 링크가 뜬 채로 남아 있는 시간 */
const EDIT_UNDO_WINDOW_MS = 5000;

/* ── 형 ───────────────────────────────────────────────────────────── */

/** [가정] "failed" 는 타입만 갖춰 둔다 — 이 훅의 목업은 항상 성공하므로(파일 상단 doc
 *  참고) 실제로 이 상태에 도달하는 코드 경로는 없다. CTA 과금·카운트 로직이 "대기+실패"
 *  를 함께 계산하도록 짜 두면, 나중에 실패 시뮬레이션을 추가하더라도 그 계산 자체는
 *  이미 맞게 동작한다. */
export type RegionStatus = "idle" | "processing" | "done" | "failed";

export interface EditRegion {
  id: string;
  rect: { x: number; y: number; w: number; h: number };
  instruction: string;
  status: RegionStatus;
}

export interface AIToast {
  message: string;
}

/** 생성 결과 — 완료돼도 곧바로 캔버스에 올라가지 않는다. 사용자가 [캔버스에 넣기]로
 *  커밋하기 전까지는 바 아래 결과 팝오버에만 머문다. */
export interface CreateResult {
  kind: AICreateKind;
  cost: number;
  /** [목업] 실제 픽셀 대신 결과 미리보기로 쓰는 톤 블록 색 */
  tone: string;
}

/** 수정 계열(이미지 전체·영역 지정) 완료 직후 잠깐 뜨는 "되돌리기"의 근거.
 *  5초가 지나거나 다음 작업이 시작되면 사라진다(그 뒤로는 되돌릴 수 없다). */
export interface LastEditUndo {
  kind: "whole" | "region";
  imageId: string;
  regionIds?: string[];
  refund: number;
}

export interface UseAIStudio {
  /* 만들기(생성) */
  prompt: string;
  setPrompt: (v: string) => void;
  /** [목업] 실제 업로드 없이 톤 블록 자리표시자만 추가·제거한다. */
  referenceTones: string[];
  addReferenceTone: (tone: string) => void;
  removeReferenceAt: (index: number) => void;
  createBusy: boolean;
  createResult: CreateResult | null;
  /** kind/cost 는 호출부가 대상 칩에서 고른 값을 그대로 넘긴다. 완료되면 곧장
   *  캔버스에 올리지 않고 createResult 를 채운다 — 커밋은 아래 세 함수의 몫이다. */
  runGenerate: (kind: AICreateKind, cost: number) => void;
  /** [캔버스에 넣기] — onAdd 호출(실제로 레이어를 추가하는 일은 호출부 몫) 후 결과를 비운다.
   *  extraHint 를 주면 완료 토스트 메시지 뒤에 그대로 이어 붙는다(예: 최초 1회 드래그
   *  이동 안내 — "언제 붙일지"는 호출부가 판단하고, 이 함수는 그저 문구를 이어 붙일 뿐이다). */
  commitCreateResult: (onAdd: () => void, extraHint?: string) => void;
  /** [다시 만들기] — 결과를 비우고 같은 kind/cost 로 즉시 다시 돌린다(크레딧 재과금) */
  regenerate: () => void;
  /** [버리기] — 그냥 비운다(환불 없음 — 산출 자체는 정상적으로 끝났으므로) */
  discardCreateResult: () => void;

  /* 고치기 — 이미지 전체 */
  wholeEditBusyId: string | null;
  runWholeEdit: (imageId: string, instruction: string) => void;

  /* 고치기 — 영역 지정 */
  regionsFor: (imageId: string) => EditRegion[];
  addRegion: (imageId: string, rect: EditRegion["rect"]) => void;
  updateInstruction: (imageId: string, regionId: string, instruction: string) => void;
  removeRegion: (imageId: string, regionId: string) => void;
  /** 완료된 영역을 다시 손볼 수 있게 대기 상태로만 되돌린다(환불 없음, 지시문 유지). */
  reopenRegion: (imageId: string, regionId: string) => void;
  regionBusy: boolean;
  runRegions: (imageId: string) => void;

  /* 고치기 — 배경 지우기 */
  bgRemoveBusyId: string | null;
  runRemoveBg: (imageId: string) => void;

  /* 고치기 — 임시 되돌리기 (이미지 전체·영역 지정 공통) */
  lastEditUndo: LastEditUndo | null;
  undoLastEdit: () => void;

  toast: AIToast | null;
  dismissToast: () => void;
}

/* ── 훅 ───────────────────────────────────────────────────────────── */

export function useAIStudio(
  balance: number,
  setBalance: Dispatch<SetStateAction<number>>,
): UseAIStudio {
  const [prompt, setPrompt] = useState("");
  const [referenceTones, setReferenceTones] = useState<string[]>([]);
  const [createBusy, setCreateBusy] = useState(false);
  const [createResult, setCreateResult] = useState<CreateResult | null>(null);

  const [regionsByImage, setRegionsByImage] = useState<Record<string, EditRegion[]>>({});
  const [regionBusy, setRegionBusy] = useState(false);

  const [wholeEditBusyId, setWholeEditBusyId] = useState<string | null>(null);

  const [bgRemoveBusyId, setBgRemoveBusyId] = useState<string | null>(null);

  const [lastEditUndo, setLastEditUndo] = useState<LastEditUndo | null>(null);

  const [toast, setToast] = useState<AIToast | null>(null);

  const timers = useRef<number[]>([]);
  const after = useCallback((ms: number, fn: () => void) => {
    timers.current.push(window.setTimeout(fn, ms));
  }, []);
  useEffect(() => () => { timers.current.forEach(window.clearTimeout); }, []);

  const seqRef = useRef(0);

  const addReferenceTone = useCallback((tone: string) => {
    setReferenceTones((list) => [...list, tone]);
  }, []);
  const removeReferenceAt = useCallback((index: number) => {
    setReferenceTones((list) => list.filter((_, i) => i !== index));
  }, []);

  const runGenerate = useCallback((kind: AICreateKind, cost: number) => {
    if (cost > balance || createBusy) return;
    setBalance((b) => b - cost);
    setCreateBusy(true);
    setCreateResult(null);
    after(1400, () => {
      setCreateBusy(false);
      const tone = CREATE_RESULT_TONES[seqRef.current++ % CREATE_RESULT_TONES.length];
      setCreateResult({ kind, cost, tone });
    });
  }, [balance, createBusy, setBalance, after]);

  const commitCreateResult = useCallback((onAdd: () => void, extraHint?: string) => {
    if (!createResult) return;
    onAdd();
    setCreateResult(null);
    setToast({ message: extraHint ? `이미지를 생성했어요 · ${extraHint}` : "이미지를 생성했어요" });
  }, [createResult]);

  const regenerate = useCallback(() => {
    if (!createResult) return;
    const { kind, cost } = createResult;
    setCreateResult(null);
    runGenerate(kind, cost);
  }, [createResult, runGenerate]);

  const discardCreateResult = useCallback(() => { setCreateResult(null); }, []);

  const regionsFor = useCallback(
    (imageId: string) => regionsByImage[imageId] ?? [],
    [regionsByImage],
  );

  const addRegion = useCallback((imageId: string, rect: EditRegion["rect"]) => {
    const region: EditRegion = { id: `region-${++seqRef.current}`, rect, instruction: "", status: "idle" };
    setRegionsByImage((m) => ({ ...m, [imageId]: [...(m[imageId] ?? []), region] }));
  }, []);

  const updateInstruction = useCallback((imageId: string, regionId: string, instruction: string) => {
    setRegionsByImage((m) => ({
      ...m,
      [imageId]: (m[imageId] ?? []).map((r) => (r.id === regionId ? { ...r, instruction } : r)),
    }));
  }, []);

  const removeRegion = useCallback((imageId: string, regionId: string) => {
    setRegionsByImage((m) => ({
      ...m,
      [imageId]: (m[imageId] ?? []).filter((r) => r.id !== regionId),
    }));
  }, []);

  /** 완료된 영역을 다시 손볼 수 있게 대기 상태로만 되돌린다 — 지시문은 남겨 둔다.
   *  환불은 하지 않는다: 그 결과를 만드는 데 실제로 크레딧이 쓰였고, 배치 단위 환불은
   *  lastEditUndo(5초 창)가 이미 맡고 있어 그 창 밖에서까지 개별 환불 인프라를 새로
   *  두는 건 이번 범위를 넘어선다. */
  const reopenRegion = useCallback((imageId: string, regionId: string) => {
    setRegionsByImage((m) => ({
      ...m,
      [imageId]: (m[imageId] ?? []).map((r) => (r.id === regionId ? { ...r, status: "idle" } : r)),
    }));
  }, []);

  /**
   * 지정된 영역 중 아직 처리하지 않은(대기·실패) 것만 돌린다 — textSplit.start() 와
   * 같은 모양으로, 이미지마다 시차를 둬 하나씩 처리 중 표시가 풀리는 게 보이게 한다.
   * 이미 done 인 영역은 targets 에서 빠지므로 다시 과금·재처리되지 않는다.
   */
  const runRegions = useCallback((imageId: string) => {
    const targets = (regionsByImage[imageId] ?? []).filter((r) => r.status === "idle" || r.status === "failed");
    if (targets.length === 0 || regionBusy) return;
    const cost = targets.length * AI_REGION_EDIT_COST;
    if (cost > balance) return;

    setBalance((b) => b - cost);
    setRegionBusy(true);
    setLastEditUndo(null);
    const targetIds = new Set(targets.map((t) => t.id));
    setRegionsByImage((m) => ({
      ...m,
      [imageId]: (m[imageId] ?? []).map((r) => (targetIds.has(r.id) ? { ...r, status: "processing" } : r)),
    }));

    let left = targets.length;
    targets.forEach((region, i) => {
      after(500 + i * 450, () => {
        setRegionsByImage((m) => ({
          ...m,
          [imageId]: (m[imageId] ?? []).map((r) => (r.id === region.id ? { ...r, status: "done" } : r)),
        }));
        left -= 1;
        if (left > 0) return;
        setRegionBusy(false);
        setToast({ message: `${targets.length}개 영역을 편집했어요` });
        const regionIds = targets.map((t) => t.id);
        setLastEditUndo({ kind: "region", imageId, regionIds, refund: cost });
        after(EDIT_UNDO_WINDOW_MS, () => {
          setLastEditUndo((u) => (u && u.kind === "region" && u.imageId === imageId ? null : u));
        });
      });
    });
  }, [regionsByImage, regionBusy, balance, setBalance, after]);

  /**
   * "이미지 전체" 수정 — 영역 지정과 단가(90C)는 같지만 별도의 작은 상태다.
   * regionsByImage 를 "경계 전체를 덮는 가짜 영역 1개"로 재사용하는 방안도 검토했지만,
   * 그러면 그 가짜 영역이 나중에 "영역 지정"으로 돌아왔을 때 목록에 남아 혼란을 준다.
   */
  const runWholeEdit = useCallback((imageId: string, _instruction: string) => {
    if (AI_REGION_EDIT_COST > balance || wholeEditBusyId) return;
    setBalance((b) => b - AI_REGION_EDIT_COST);
    setWholeEditBusyId(imageId);
    setLastEditUndo(null);
    after(900, () => {
      setWholeEditBusyId(null);
      setToast({ message: "이미지를 수정했어요" });
      setLastEditUndo({ kind: "whole", imageId, refund: AI_REGION_EDIT_COST });
      after(EDIT_UNDO_WINDOW_MS, () => {
        setLastEditUndo((u) => (u && u.kind === "whole" && u.imageId === imageId ? null : u));
      });
    });
  }, [balance, wholeEditBusyId, setBalance, after]);

  const runRemoveBg = useCallback((imageId: string) => {
    if (AI_BG_REMOVE_COST > balance || bgRemoveBusyId) return;
    setBalance((b) => b - AI_BG_REMOVE_COST);
    setBgRemoveBusyId(imageId);
    setLastEditUndo(null);
    after(1000, () => {
      setBgRemoveBusyId(null);
      setToast({ message: "배경을 지웠어요" });
    });
  }, [balance, bgRemoveBusyId, setBalance, after]);

  const undoLastEdit = useCallback(() => {
    if (!lastEditUndo) return;
    setBalance((b) => b + lastEditUndo.refund);
    if (lastEditUndo.kind === "region") {
      setRegionsByImage((m) => ({
        ...m,
        [lastEditUndo.imageId]: (m[lastEditUndo.imageId] ?? []).map((r) => (
          lastEditUndo.regionIds!.includes(r.id) ? { ...r, status: "idle" } : r
        )),
      }));
    }
    setToast({ message: `되돌렸어요 · ${formatCreditShort(lastEditUndo.refund)} 환급` });
    setLastEditUndo(null);
  }, [lastEditUndo, setBalance]);

  const dismissToast = useCallback(() => setToast(null), []);

  // 토스트 자동 소멸 시점은 더 이상 여기서 고정하지 않는다 — 되돌리기 버튼이 붙은
  // 토스트는 더 오래 떠 있어야 하고 hover 중엔 멈춰야 하는데, 그건 이 훅이 아니라
  // 그 타이머를 눈으로 보고 있는 화면(AIActionResultToast, TabletMiniEditor.tsx)의
  // 몫이다. 이 훅은 "지금 보여줄 메시지가 무엇인가"만 들고 있는다.

  return {
    prompt, setPrompt,
    referenceTones, addReferenceTone, removeReferenceAt,
    createBusy, createResult, runGenerate, commitCreateResult, regenerate, discardCreateResult,
    wholeEditBusyId, runWholeEdit,
    regionsFor, addRegion, updateInstruction, removeRegion, reopenRegion, regionBusy, runRegions,
    bgRemoveBusyId, runRemoveBg,
    lastEditUndo, undoLastEdit,
    toast, dismissToast,
  };
}
