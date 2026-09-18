import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { f, homeSectionTitleClassName, homeSectionTitleStyle, shadow, typography } from "@/app/styleTokens";
import { CAROUSEL_COVERS, type CarouselCover } from "@/app/data/tasks";

const CARD_HEIGHT = 280;
const GAP = 16;
const AUTO_ADVANCE_MS = 2200;
/** 스크롤 트랙의 위쪽 padding — 이전/다음 버튼을 이미지 영역(트랙 맨 위부터 CARD_HEIGHT)
 * 세로 중앙에 맞추는 계산에도 그대로 재사용한다. 호버 시 이미지 프레임이 4px 뜨고
 * 그림자도 커지는 만큼(theme.css `.template-card-media`), 위쪽만 넉넉히 둬서 첫 줄
 * 카드의 들림·그림자가 트랙의 overflow-x-auto(같은 가로/세로 축 규칙 때문에 세로도
 * 클리핑 대상이 된다)에 잘리지 않게 한다. 아래쪽은 기존 2px 그대로 — 들림은 항상
 * 위쪽으로만 향해 아래쪽 여유가 더 필요해지지 않는다. */
const TRACK_PAD_TOP = 20;
const TRACK_PAD_BOTTOM = 2;
const NAV_BTN_SIZE = 44;
/** 캐러셀 뷰포트 양끝에서 버튼이 안쪽으로 들어오는 거리 — 요청 범위(12~16px) 중간값. */
const NAV_BTN_INSET = 14;

/** RecommendedCarousel 안에서만 쓰는 최소 훅 — 자동 넘기기가 계속 켜져 있으면 안 되는
 *  경우(OS 모션 감소 설정)를 실시간으로 반영한다. */
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

/**
 * 카드 하나 — 이미지(고정 높이 CARD_HEIGHT) 하나가 곧 클릭 대상이다(중첩 버튼 없음).
 * 상시 캡션은 두지 않는다(2026-09-18) — 이름은 이미지 프레임(.template-card-media)
 * 안쪽 하단에 작은 라벨로 겹쳐 놓고, 호버·포커스일 때만 보인다. 라벨이 나타나도
 * position:absolute라 카드 크기·주변 레이아웃은 흔들리지 않는다. 호버·포커스 강조는
 * React 상태가 아니라 순수 CSS(`:hover`/`:focus-visible`, theme.css `.template-card`/
 * `.template-card-media`/`.template-card-label`)로 처리한다 — 마우스 호버(실제 정밀
 * 포인터에서만 4px 들림+그림자 강화)와 키보드 포커스(움직임 없이 테두리·그림자만)를
 * 서로 다른 트리거로 분리해야 해서다. 라벨 자체는 호버·포커스 둘 다에서 보인다(들림
 * 여부와 무관). 터치는 hover가 없어 라벨이 뜨지 않지만, 탭은 CSS 상태와 무관하게
 * onClick을 바로 실행하므로 첫 탭으로 그대로 선택된다.
 */
function TemplateCard({ cover, onSelect }: { cover: CarouselCover; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`${cover.title} 템플릿 · ${cover.cat} ${cover.format}`}
      className="template-card shrink-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] rounded-[18px]"
      style={{ width: CARD_HEIGHT * cover.ratio, scrollSnapAlign: "start" }}
    >
      <span
        className="template-card-media relative block w-full rounded-[18px] overflow-hidden bg-white"
        style={{ height: CARD_HEIGHT, border: "1.5px solid #e8eaf0", boxShadow: "0 4px 16px rgba(26,29,41,.06)" }}
      >
        <img src={cover.cover} alt="" draggable={false} className="absolute inset-0 w-full h-full" style={{ objectFit: "cover" }} />
        {/* 이름 라벨 — 이미지 안쪽 하단에 겹쳐진 단색(그라데이션 아님) 배경 위에 흰 글자.
            평소엔 opacity:0(theme.css)이라 카드 높이·캡션 전용 여백을 차지하지 않는다.
            전체 이름은 버튼의 aria-label과 title 속성이 그대로 들고 있다. */}
        <span
          className="template-card-label absolute inset-x-0 bottom-0 truncate"
          title={cover.title}
          style={{ ...f, fontWeight: 400, fontSize: typography.body.fontSize, color: "#fff", letterSpacing: "-0.2px", background: "rgba(10,10,10,.72)", padding: "7px 10px" }}
        >
          {cover.title}
        </span>
      </span>
    </button>
  );
}

/**
 * 바로 시작하기 좋은 템플릿 — 참고 디자인의 실제 표지 이미지를 그대로 쓴다.
 *
 * 좌우 화살표 버튼과 별개로 일정 간격마다 한 페이지씩 자동으로 넘어간다 — 끝에 닿으면
 * 다시 처음으로 돌아간다(무한 순환). 사용자가 직접 만지는 동안(마우스 오버·키보드 포커스·
 * 드래그/터치)에는 멈추고, 손을 떼면 다시 시작한다 — 읽거나 고르는 도중에 카드가
 * 밀려나지 않게 하기 위해서다. OS 모션 감소 설정에서는 자동 넘기기 자체를 켜지 않는다.
 * 카드 폭은 이미지 원본 비율(가로/세로)로 계산해 절대 잘리지 않는다 — object-fit: cover
 * 는 표지 이미지 자체가 카드 비율과 똑같기 때문에 안전망일 뿐 실제로 자르지 않는다.
 *
 * 넘기기 버튼(2026-09-18 위치 재조정)은 캐러셀 뷰포트 양끝, 이미지 영역(제목 캡션
 * 제외) 세로 중앙에 절대 위치로 얹는다 — 카드와 함께 스크롤되지 않는다. 호버 가능한
 * 마우스에서는 평소 숨겨 두고 캐러셀 위에 마우스가 있거나 내부에 키보드 포커스가
 * 들어오면 보인다(theme.css `.carousel-nav-btn`/`.carousel-viewport`), 호버 개념이
 * 없는 터치에서는 항상 보인다. 스크롤 컨테이너 자체는 스와이프/트랙패드/휠 등
 * 네이티브 제스처로만 움직이므로, 마우스 드래그로 스크롤하다 잘못 카드가 클릭되는
 * 경우가 없다.
 */
export default function RecommendedCarousel({ onSelectTemplate }: { onSelectTemplate: (taskId: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [paused, setPaused] = useState(false);
  const reduceMotion = usePrefersReducedMotion();

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    scrollRef.current?.scrollBy({ left: dir * (CARD_HEIGHT + GAP) * 1.4, behavior: reduceMotion ? "auto" : "smooth" });
  };

  // 자동 넘기기 — 끝까지 가면 처음으로 되돌아간다. ResizeObserver/스크롤 이벤트가 갱신하는
  // canScrollRight를 그대로 참조하도록 매 tick마다 새로 도는 interval을 쓰지 않고, ref로
  // 최신 값을 읽는다(의존성 배열 때문에 매초 interval을 재생성하지 않기 위해서).
  const canScrollRightRef = useRef(canScrollRight);
  canScrollRightRef.current = canScrollRight;

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (canScrollRightRef.current) {
        el.scrollBy({ left: (CARD_HEIGHT + GAP) * 1.4, behavior: "smooth" });
      } else {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <section
      aria-label="바로 시작하기 좋은 템플릿"
      style={{ marginTop: "var(--home-block-gap)" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setPaused(false); }}
      // 터치(마우스 아님)에서만 누르는 동안 멈춘다 — 마우스는 이미 hover로 계속 다뤄지므로,
      // 여기서 같이 처리하면 클릭 후 손을 떼도 hover 중인데 다시 움직이기 시작해 버린다.
      onPointerDown={(e) => { if (e.pointerType !== "mouse") setPaused(true); }}
      onPointerUp={(e) => { if (e.pointerType !== "mouse") setPaused(false); }}
      onPointerCancel={(e) => { if (e.pointerType !== "mouse") setPaused(false); }}
    >
      <h2 className={`mb-6 min-w-0 ${homeSectionTitleClassName}`} style={{ ...homeSectionTitleStyle, wordBreak: "keep-all" }}>바로 시작하기 좋은 템플릿</h2>

      {/* carousel-viewport(theme.css) — 이전/다음 버튼의 위치 기준이자 호버 감지 대상.
          스크롤 트랙을 감싸기만 하고 자체 padding은 없어서, 트랙과 좌표계(top=0)를
          공유한다 — 버튼의 top을 트랙 padding+이미지 절반으로 그대로 계산해도 어긋나지
          않는다. overflow는 기본값(visible)을 그대로 둬 버튼과 포커스 링이 잘리지
          않는다(트랙 쪽 overflow-x-auto는 가로 스크롤 콘텐츠에만 걸리고, 트랙 바깥의
          형제 요소인 이 버튼들에는 적용되지 않는다). */}
      <div className="carousel-viewport relative">
        <div
          ref={scrollRef}
          role="group"
          aria-label="템플릿 캐러셀, 좌우 화살표 키로 이동"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); scrollBy(1); }
            if (e.key === "ArrowLeft") { e.preventDefault(); scrollBy(-1); }
          }}
          className="flex overflow-x-auto outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] rounded-2xl"
          // 좌우 4px 여백 — 첫/마지막 카드의 호버·포커스 테두리(ring-offset 포함)가
          // 스크롤 컨테이너 가장자리에서 잘리지 않게 한다. 위쪽은 호버 들림+그림자용으로
          // 더 크다(TRACK_PAD_TOP 주석 참고).
          style={{ gap: GAP, scrollbarWidth: "none", scrollSnapType: "x proximity", padding: `${TRACK_PAD_TOP}px 4px ${TRACK_PAD_BOTTOM}px` }}
        >
          {CAROUSEL_COVERS.map((cov, i) => (
            <TemplateCard key={`${cov.taskId}-${i}`} cover={cov} onSelect={() => onSelectTemplate(cov.taskId)} />
          ))}
        </div>

        {/* 전체 카드가 한 화면에 들어오면(양쪽 다 스크롤할 게 없으면) 버튼 자체를
            렌더링하지 않는다 — disabled로 옅게 보여주는 것과는 다른, "탐색이 필요
            없다"는 신호다. 렌더링될 때는 트랙과 같은 top 기준으로 이미지 높이
            (CARD_HEIGHT, 제목 캡션 제외) 세로 중앙에 고정하고, 카드와 함께 스크롤되지
            않도록 트랙이 아니라 이 뷰포트에 바로 얹는다(position:absolute). */}
        {(canScrollLeft || canScrollRight) && (
          <>
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              aria-label="이전 템플릿"
              className="carousel-nav-btn absolute flex items-center justify-center rounded-full bg-white"
              style={{
                width: NAV_BTN_SIZE, height: NAV_BTN_SIZE,
                left: NAV_BTN_INSET, top: TRACK_PAD_TOP + CARD_HEIGHT / 2, transform: "translateY(-50%)",
                border: "1px solid #e2e8f0", color: "#475569", boxShadow: shadow.cardEmphasis,
                "--nav-enabled-opacity": canScrollLeft ? 1 : 0.3,
              } as CSSProperties}
            >
              <ChevronLeft size={18} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              disabled={!canScrollRight}
              aria-label="다음 템플릿"
              className="carousel-nav-btn absolute flex items-center justify-center rounded-full bg-white"
              style={{
                width: NAV_BTN_SIZE, height: NAV_BTN_SIZE,
                right: NAV_BTN_INSET, top: TRACK_PAD_TOP + CARD_HEIGHT / 2, transform: "translateY(-50%)",
                border: "1px solid #e2e8f0", color: "#475569", boxShadow: shadow.cardEmphasis,
                "--nav-enabled-opacity": canScrollRight ? 1 : 0.3,
              } as CSSProperties}
            >
              <ChevronRight size={18} aria-hidden />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
