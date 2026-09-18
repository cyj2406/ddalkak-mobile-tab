import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { color, controlHeight, f, motion, radius, typography } from "@/app/styleTokens";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/app/components/ui/tooltip";

const PLACEHOLDER_DESKTOP = "어떤 작업이 필요한가요? 예: 행사 안내문, 카페 홍보 이미지";
const PLACEHOLDER_MOBILE = "어떤 작업이 필요한가요?";

/** HomeSearch 안에서만 쓰는 최소 미디어쿼리 훅 — App.tsx의 useIsTabletUp과 같은 768px
 *  기준이지만, 훅 하나 재사용하려고 App.tsx 내부 함수를 export하지 않고 여기서 짧게 둔다. */
function useIsTabletUp() {
  const [match, setMatch] = useState(() => typeof window !== "undefined" && window.matchMedia("(min-width: 768px)").matches);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const onChange = () => setMatch(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return match;
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** "요청 작성 도우미" 버튼 전용 연한 브랜드 톤 — 새 색을 만들지 않고 기존 코드에 이미
 *  있던 라이트 블루 조합을 그대로 확장한다: 기본 배경은 color.surface.accent(#eff6ff),
 *  테두리는 RequestHelpScreen.tsx의 안내 배너가 쓰던 #bfdbfe. 호버·pressed는 같은
 *  블루 계열에서 한 단계씩 더 진한 톤으로 옮겨간다(임의 색상 추가가 아니라 같은 스케일
 *  재사용 — surface.accent가 이미 이 스케일의 가장 옅은 단계다). */
const HELPER_CTA_TONE = {
  bg: color.surface.accent,
  border: "#bfdbfe",
  hoverBg: "#dbeafe",
  hoverBorder: "#93c5fd",
  pressedBg: "#bfdbfe",
  pressedBorder: color.brand,
};

/**
 * 요청 작성 도움받기(위 CTA) + 서식 검색창.
 *
 * 참고 디자인 순서 그대로 도움 CTA가 검색창 "위"에 온다 — 검색은 한 줄 입력이고,
 * Enter 또는 원형 버튼을 누르면 홈에 결과를 깔지 않고 onSearch 로 상위에 알려
 * 별도 검색 결과 화면을 연다.
 */
export default function HomeSearch({
  onSearch,
  onHelp,
  autoFocusHelper,
  onAutoFocusHelperHandled,
}: {
  onSearch: (query: string) => void;
  onHelp: () => void;
  /** true면 마운트 시 도우미 버튼에 포커스를 되돌린다 — "요청 작성 도움받기"를 취소하고
   *  홈으로 돌아왔을 때만 켜진다(처음 홈에 들어올 때는 자동 포커스하지 않는다). */
  autoFocusHelper?: boolean;
  onAutoFocusHelperHandled?: () => void;
}) {
  const [query, setQuery] = useState("");
  const isTabletUp = useIsTabletUp();
  const reduceMotion = usePrefersReducedMotion();
  const [helperHovered, setHelperHovered] = useState(false);
  const [helperPressed, setHelperPressed] = useState(false);
  const helperBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (autoFocusHelper) {
      helperBtnRef.current?.focus();
      onAutoFocusHelperHandled?.();
    }
    // 화면이 새로 마운트될 때(홈에 돌아왔을 때)만 한 번 확인하면 된다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const submit = () => {
    const q = query.trim();
    if (q) onSearch(q);
  };

  const helperTone = helperPressed
    ? { bg: HELPER_CTA_TONE.pressedBg, border: HELPER_CTA_TONE.pressedBorder }
    : helperHovered
    ? { bg: HELPER_CTA_TONE.hoverBg, border: HELPER_CTA_TONE.hoverBorder }
    : { bg: HELPER_CTA_TONE.bg, border: HELPER_CTA_TONE.border };

  return (
    <section aria-label="시작하기" className="w-full mx-auto flex flex-col items-center" style={{ maxWidth: 760, gap: 20 }}>
      <div className="w-full flex flex-col items-center sm:flex-row sm:justify-center" style={{ gap: 12 }}>
        <span style={{ ...f, fontWeight: 400, fontSize: 14, lineHeight: "20px", color: color.text.secondary }}>
          무엇부터 쓸지 막막하다면
        </span>
        <Tooltip>
          <TooltipTrigger asChild>
            <button
              ref={helperBtnRef}
              type="button"
              onClick={onHelp}
              onMouseEnter={() => setHelperHovered(true)}
              onMouseLeave={() => { setHelperHovered(false); setHelperPressed(false); }}
              onMouseDown={() => setHelperPressed(true)}
              onMouseUp={() => setHelperPressed(false)}
              className={[
                "inline-flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff]",
                // 호버 그림자는 인라인 style이 아니라 클래스로 준다 — 인라인 boxShadow를 쓰면
                // focus-visible:ring(같은 box-shadow 속성)을 그대로 덮어써 키보드 포커스
                // 테두리가 사라진다(Button.tsx가 이미 겪은 문제와 같다). 클래스로 주면 Tailwind
                // 링 유틸이 --tw-shadow를 합성해 링과 함께 보인다. 값은 shadow.card와 같다.
                helperHovered && !helperPressed ? "shadow-[0px_1px_3px_rgba(0,0,0,0.05)]" : "",
              ].join(" ")}
              style={{
                // typography.button은 다른 화면(SubscriptionBillingTab)도 같이 쓰는 공용
                // 버튼 라벨 값(700)이라 그 토큰 자체는 바꾸지 않고, 여기서만 굵기·크기·
                // 행간을 낮게 덮어쓴다(letterSpacing은 그대로 물려받는다).
                ...typography.button,
                fontWeight: 500,
                fontSize: 14,
                lineHeight: "20px",
                height: controlHeight.md,
                padding: "0 18px",
                borderRadius: radius.full,
                background: helperTone.bg,
                border: `1px solid ${helperTone.border}`,
                color: color.brand,
                cursor: "pointer",
                transition: `background-color ${motion.fast}, border-color ${motion.fast}, box-shadow ${motion.fast}`,
              }}
            >
              <Sparkles size={16} aria-hidden className="shrink-0" />
              <span>요청 작성 도우미</span>
              <ArrowRight
                size={16}
                aria-hidden
                className="shrink-0"
                style={{
                  transform: helperHovered && !reduceMotion ? "translateX(2px)" : "translateX(0)",
                  transition: `transform ${motion.fast}`,
                }}
              />
            </button>
          </TooltipTrigger>
          <TooltipContent side="top" align="center" sideOffset={8} collisionPadding={8}>
            몇 가지 질문에 답하면 요청 내용을 정리해 드려요.
          </TooltipContent>
        </Tooltip>
      </div>

      <div
        className="field-pill flex items-center gap-4 rounded-full w-full"
        // 오른쪽 안쪽 여백을 버튼의 위아래 여백(컨테이너 높이 78 - 버튼 48 = 30, 위아래 15씩)과
        // 비슷하게 맞춘다 — 버튼을 style로 왼쪽으로 밀지 않고, 컨테이너 padding-right 만으로
        // 시각적 균형을 맞춘다(기존 Tailwind spacing 스케일의 gap-4=16px, 이 안의 아이콘-입력-
        // 버튼 gap과 같은 값이라 새 값을 만들지 않는다).
        style={{ background: "#fff", border: "1px solid #e4e8ff", height: 78, padding: "0 16px 0 26px", boxShadow: "0 8px 28px rgba(79,123,255,.1)" }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.8" strokeLinecap="round" aria-hidden className="shrink-0">
          <circle cx="11" cy="11" r="7" />
          <path d="m20.5 20.5-4.7-4.7" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
          aria-label="필요한 작업 검색"
          placeholder={isTabletUp ? PLACEHOLDER_DESKTOP : PLACEHOLDER_MOBILE}
          // placeholder 색 — muted(#9ca3af, 2.54:1)는 흰 배경에서 대비가 너무 낮아 여기서는
          // secondary(#64748b, 4.76:1)를 쓴다(다른 화면의 placeholder 관례와 다르지만,
          // 이 검색창은 실제로 눈에 잘 띄어야 하는 홈의 1차 진입점이라 가독성을 우선한다).
          className="field-inline flex-1 min-w-0 outline-none bg-transparent placeholder:text-[#64748b]"
          style={{ ...f, fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "#0a0a0a", padding: "9px 0", border: 0 }}
        />
        {/* 텍스트 버튼(2026-09-18, 원형 화살표 아이콘에서 변경) — 높이·브랜드 색은 그대로
            48px/#4f7bff다. 처음엔 좌우 18px 패딩만 줬더니 "검색" 두 글자 폭 탓에 거의
            원형으로 보여서, 높이의 약 1.6배(76px)를 minWidth로 못박아 가로로 여유
            있는 알약형을 보장한다(텍스트가 그보다 넓어지면 자연스럽게 더 늘어난다).
            모바일은 입력 공간을 덜 뺏도록 패딩·최소폭을 살짝 줄인다(약 1.4배, 그래도
            원형과는 뚜렷이 다른 알약형). shrink-0 + whitespace-nowrap으로 좁은
            화면에서도 줄어들거나 줄바꿈되지 않는다 — input이 flex-1 min-w-0라 남는
            폭을 그쪽이 먼저 내준다. */}
        <button
          type="button"
          onClick={submit}
          className="rounded-full shrink-0 whitespace-nowrap flex items-center justify-center bg-[#4f7bff] hover:bg-[#3d68e8] transition-colors"
          style={{
            ...typography.button,
            height: 48,
            minWidth: isTabletUp ? 76 : 66,
            padding: isTabletUp ? "0 22px" : "0 16px",
            border: 0,
            color: "#fff",
          }}
        >
          검색
        </button>
      </div>
    </section>
  );
}
