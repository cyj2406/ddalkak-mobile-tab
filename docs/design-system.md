# 딸깍넷 최소 디자인 시스템

이 문서는 요금제 및 크레딧 페이지 작업을 계기로 정리한 최소 디자인 시스템이다.
혼자 관리하는 프로젝트에 맞춰 "필요한 만큼만" 공통화했고, 없는 걸 새로 지어내지
않고 이미 화면에서 쓰던 값을 모아 이름을 붙였다.

**적용 범위는 아직 서비스 전체가 아니다.** 아래 "적용 범위" 절에 명시한 화면에만
적용됐고, 나머지는 기존 코드 그대로다 — 이 문서를 읽고 "전체가 이미 통일됐다"고
가정하지 말 것.

## 왜 이 문서가 필요한가

- `src/styles/theme.css`에는 shadcn(`components/ui/*`) 전용 CSS 변수(`--primary`,
  `--border`, `--radius` 등)가 있다. 이 변수들과 그 값을 쓰는 프리미티브 대부분은
  실제 화면에서 쓰이지 않지만, **전부는 아니다** — 아래 "theme.css와 shadcn 변수"
  절에 실제 사용처를 정리했다(2026-09-17 재확인).
- 실제 화면(App.tsx, pricing/*, home/* 등)은 대부분 인라인 `style` + 하드코딩
  hex로 그려져 있다. 그래서 같은 역할(브랜드 블루, 카드 테두리, 버튼 라운드 등)인데
  파일마다 값을 따로 들고 있는 경우가 많았다. 이 문서 + `src/app/styleTokens.ts`가
  그 값들의 단일 출처다.
- 랜딩페이지(https://xn--il0b54k.net/)와의 비교 분석(2026-09-17)에서 나온 결론도
  반영했다: 브랜드 기반(폰트, 브랜드 블루, 테두리색)은 공유하되, 타이포 스케일·
  여백·그림자처럼 "화면 목적에 따라 달라야 하는 값"은 억지로 맞추지 않는다.

## 토큰 — `src/app/styleTokens.ts`

값을 추가/변경하기 전에 이 파일을 먼저 열어 같은 역할의 토큰이 있는지 확인한다.
없으면 여기에 추가하고, 있으면 그 값을 가져다 쓴다(같은 값을 다른 파일에 또 하드코딩하지 않는다).

### 색상 (`color`)

역할로 이름 붙였다. 값이 아니라 "무엇에 쓰는가"로 고른다.

| 토큰 | 값 | 용도 |
|---|---|---|
| `color.brand` | `#4f7bff` | 주요 액션(버튼), 강조 텍스트, 선택 상태. `theme.css`의 `--brand`와 같은 값 |
| `color.brandHover` | `#3d68e8` | `color.brand` 채움 위에 마우스를 올렸을 때. Button.tsx의 primary variant뿐 아니라 홈 화면 CTA(HomeSearch·SearchResultsScreen·RequestHelpScreen)도 같은 값을 쓴다 |
| `color.text.primary` | `#0a0a0a` | 제목, 강조 숫자(잔액 등), 다크 CTA 배경(`Button`의 `dark` variant) |
| `color.text.secondary` | `#64748b` | 라벨, 보조 설명. 기존 `SUBTITLE_COLOR`와 동일(이름은 하위 호환을 위해 그대로 둠) |
| `color.text.muted` | `#9ca3af` | 카드 안 옅은 라벨, 장식용 아이콘 등 "읽지 않아도 되는" 부가 정보 전용. **대비 4.5:1 미만(2.54:1, 흰 배경 기준) — 아래 "대비 확인 결과" 참고, 이번엔 값을 바꾸지 않았다.** 읽어야 하는 작은 텍스트에는 쓰지 않는다(2026-09-18 대비 재확인 이후 원칙 — "회색 계열" 절 참고) |
| `color.text.placeholder` | `#b0b8c4` | 입력칸 placeholder 전용(요청 작성 폼, 2026-10-16). `muted`보다 한 톤 연하게 둬 입력 전/후가 갈린다. 입력 전 안내라 읽기 대비 기준 대상이 아니며, 다른 텍스트에는 쓰지 않는다 |
| `color.surface.default` | `#ffffff` | 카드/팝오버 기본 배경 |
| `color.surface.subtle` | `#f8fafc` | 카드 안 보조 박스, 새로고침 버튼 배경 |
| `color.surface.accent` | `#eff6ff` | 브랜드 톤 옅은 배경(선택된 상태, "내 크레딧" 배지 배경) |
| `color.border.default` | `#e2e8f0` | 가장 흔한 테두리. **랜딩페이지 실측값과 동일** — 이미 일치하던 값 |
| `color.border.subtle` | `#dfe6ed` | 배지류 전용으로 쓰이던 테두리 |
| `color.border.focus` | `#4f7bff` | 선택/포커스 테두리 |

**서비스/랜딩 색상 적용 경계**: `color.brand`/`color.brandHover`/`color.text.primary`(다크
CTA 배경)는 **서비스 전용** 기준이다. 랜딩페이지의 CTA 블루(`#155dfc`)와 다크 배경
(`#101828`)은 랜딩 전용으로 그대로 두고, 이번 정리로 서비스 쪽으로 끌어오지 않았다
— 아래 "1) 브랜드 블루"/"2) 다크 CTA" 표 참고.

### 타이포그래피 (`typography`)

랜딩페이지의 헤드라인 스케일(52px/800 등 마케팅 전용)은 포함하지 않는다.

| 토큰 | 값 | 용도 |
|---|---|---|
| `typography.pageTitle` | 24px/700, `-0.8px` | 화면 최상단 제목("요금제 및 크레딧", "크레딧 사용 내역") |
| `typography.sectionTitle` | 17px/700, `-0.4px` | 카드/섹션 제목(플랜 이름, 프로필 팝오버 이름, 결제 요약 제목) |
| `typography.body` | 13.5px/500, `-0.2px`, `#4b5262` | 안내 문구 본문 |
| `typography.caption` | 12px/500, `-0.2px`, `color.text.muted` | 라벨, 보조 설명 |
| `typography.button` | 14px/700, `-0.3px` | 버튼 라벨(참고용 — `Button` 컴포넌트가 size별로 자체 처리) |
| `typography.formLabel` | 14px/600, `color.text.primary` | 입력 폼 필드 라벨(요청 작성 폼) |
| `typography.formSelectValue` | 14px/600, `color.text.primary` | 셀렉트에서 고른 값·스테퍼 숫자(데스크톱) |
| `typography.formValue` | 14px/500, `color.text.primary` | 타이핑한 글자 |
| `typography.formPlaceholder` | 14px/500, `color.text.placeholder` | 입력칸 placeholder — 글자 색만 한 톤 연하게 |

요청 작성 폼 글자 크기는 원래 화면(dev 요청 작성 도우미) 비율을 따른다 — 2026-10-16 라벨 15·값 16·제목 28px로 키웠다가 비율이 달라져 같은 날 되돌렸다.
768px 미만에서는 iOS 확대 방지로 입력 글자만 16px.

크기·굵기·행간이 필요한 만큼만 세트로 묶여 있고(제목 계열은 자간까지, 본문/캡션은
색까지 포함), 새 프리셋을 추가할 때도 "화면에 실제로 반복되는 조합"만 등록한다 —
쓰지 않는 조합을 미리 만들어 두지 않는다.

`f`(폰트) / `SUBTITLE_COLOR`는 `color`/`typography`와 값이 갈라지지 않는다 —
`SUBTITLE_COLOR = color.text.secondary`로 단일 출처를 참조하도록 이미 정리돼 있다
(styleTokens.ts 55행 부근).

### 간격

**별도 `space` 토큰은 만들지 않았다.** 간격은 이미 Tailwind의 기본 spacing
스케일(`gap-2`, `px-4`, `py-3.5` 등)로 표현되고 있고, 이 자체가 시스템적인 값이라
다시 감쌀 이유가 없었다. 화면별 배치에만 쓰는 여백(모달 안쪽 padding 등)은
그대로 화면 코드에 남겨 뒀다 — 전역 토큰으로 만들 만큼 반복되지 않는 값이다.

### 라운드 (`radius`)

| 토큰 | 값 | 용도 |
|---|---|---|
| `radius.control` | 14px | 버튼, 입력창, 선택 카드 등 "조작 가능한 요소" 전부 |
| `radius.card` | 16px | 일반 카드(플랜 카드, 결제 요약 카드) |
| `radius.cardEmphasis` | 20px | 강조 카드(이용 현황 요약, 크레딧 사용 내역의 잔액/리스트 카드, 모달) |
| `radius.full` | pill | 배지, 아바타, 일부 팝오버 CTA(`Button`의 `pill` prop) |

### 그림자 (`shadow`)

| 토큰 | 값 | 용도 |
|---|---|---|
| `shadow.card` | `0px 1px 3px rgba(0,0,0,0.05)` | 일반 카드 |
| `shadow.cardEmphasis` | `0px 2px 10px rgba(0,0,0,0.05)` | 강조 카드 |
| `shadow.popover` | `0px 8px 32px rgba(0,0,0,0.14)` | 드롭다운/팝오버 |
| `shadow.modal` | `0px 24px 64px rgba(16,24,40,0.24)` | 중앙 모달 |

랜딩페이지처럼 크고 부드러운 그림자(`0 34px 80px -38px rgba(15,23,42,.4)`)는
쓰지 않는다. `CreditHistoryScreen`의 리스트 카드 그림자(`0px 1px 4px rgba(0,0,0,0.04)`)는
`shadow.card`와 근접하지만 값이 달라(blur 4 vs 3, 알파 .04 vs .05) 억지로 합치지
않고 그대로 뒀다 — "같은 숫자라는 이유만으로 다른 스타일을 합치지 않는다" 원칙.

### 버튼/입력창 크기 (`controlHeight`)

| 토큰 | 값 | 용도 |
|---|---|---|
| `controlHeight.md` | 44px | 보조 액션(프로필 메뉴 CTA, 설정·크레딧 내역의 관리 버튼) |
| `controlHeight.lg` | 48px | 주요 CTA(요금제 구독/변경, 충전, 결제 확인) |

`SettingsModal`의 "새로고침" 버튼(44px→36px 반응형)은 44px 쪽만 `controlHeight.md`와
같은 값·같은 역할이고, 36px(`wide:h-9`, 1200px 이상)은 이 화면만의 로컬 예외다 —
아래 "4) SettingsModal 새로고침 버튼" 참고.

### 콘텐츠 너비 (`pageContainerWidth`)

`pageContainerWidth = 1120` — 홈 화면이 데스크톱(1200px 이상)에서 쓰는
`--home-container` 상한과 같은 값이다. `PricingPage`에만 적용돼 있고, 다른 화면에
강제하지 않는다(예: `CreditHistoryScreen`은 지금도 `mx-4` 고정 여백을 그대로 쓴다 —
이번에 손대지 않았다).

랜딩페이지의 컨테이너 폭(Tailwind `max-w-7xl` = 1280px)과는 다른 값을 그대로
유지한다 — 서비스는 사이드바가 항상 옆에 있어 가용 폭 자체가 랜딩과 다르다.

## 공통 컴포넌트

### `Button` — `src/app/components/common/Button.tsx`

```tsx
import { Button } from "@/app/components/common/Button";

<Button variant="primary" size="lg" onClick={...}>구독하기</Button>
<Button variant="dark" size="md" onClick={...}><Coins size={15} strokeWidth={1.8} />요금제 및 크레딧 관리</Button>
<Button variant="secondary" size="lg" fullWidth onClick={...}>닫기</Button>
<Button variant="primary" size="md" pill fullWidth>요금제 및 크레딧</Button>
<Button variant="primary" size="lg" disabled>현재 이용 중</Button>
<Button variant="primary" size="lg" loading>처리 중</Button>
```

| variant | 배경 | 용도 |
|---|---|---|
| `primary` | `color.brand` | 화면의 주요 액션(구독, 충전, 결제 확인) |
| `dark` | `color.text.primary` | 페이지 이동을 유도하는 보조 강조 CTA(설정 → 요금제 페이지, 크레딧 사용 내역의 "+ 크레딧 충전") |
| `secondary` | 흰 배경 + `color.border.default` | 취소/닫기 등 덜 중요한 액션 |

상태:
- **hover**: variant별 배경을 살짝 진하게(React state로 계산). 인라인 `style.background`를
  쓰는 컴포넌트라 Tailwind `hover:` 클래스로는 절대 덮어써지지 않는다는 걸 실측으로
  확인했다(선택된 배경색이 variant/disabled 조건에 따라 달라져야 해서 클래스가 아니라
  인라인으로 줄 수밖에 없다) — 새 variant를 추가할 때도 이 패턴을 따를 것.
- **focus-visible**: `ring`(box-shadow) 기반 파란 링. `outline-*` 유틸을 쓰면
  `theme.css`의 전역 `outline-ring/50` 규칙과 캐스케이드 순서가 꼬여 안 보인다(실측
  확인: `outline-style`이 항상 `none`으로 덮임) — 반드시 `ring`을 쓴다
  (`components/ui/button.tsx`의 shadcn 버튼도 같은 이유로 ring을 쓴다). 2026-09-17
  재검증: 프로필 메뉴 팝오버처럼 `overflow: hidden`인 부모 안에서도 버튼과 팝오버
  가장자리 사이 여백이 충분해 링이 잘리지 않는 것을 실측으로 확인했다.
- **disabled**: variant와 무관하게 중립 회색 톤 하나로 통일(요금제 카드의 "현재 이용 중").
  WCAG는 비활성 컨트롤의 대비를 요구하지 않으므로 이 톤의 대비는 별도로 맞추지 않았다.
- **loading**: 라벨을 지우지 않고 `visibility:hidden`으로 자리만 유지한 채 스피너를
  겹쳐 그린다(라벨을 통째로 스피너로 바꾸면 버튼 너비가 바뀌는 문제가 있어 2026-09-17
  수정). `aria-busy`에 더해 `sr-only` "처리 중" 문구로 보조기술에도 상태를 알린다.
  disabled와 별개 prop이라 "로딩 중이라 못 누름"과 "정책상 못 누름"을 구분할 수 있다.
  현재 실제 사용처는 없다(전부 즉시 완료되는 목업 흐름이라 로딩 상태를 켤 일이
  없었다) — 컴포넌트 자체의 정확성만 검증된 상태다.

이 컴포넌트가 다루지 않는 것: **"선택됨" 상태.** 요금제 카드·충전 패키지처럼
"골라서 표시해 두는" 요소는 버튼이 아니라 각 화면의 선택형 카드가 테두리·배경으로
직접 표현한다(`TopUpTab.tsx`의 패키지 행 참고) — 성격이 다른 두 상태를 하나의
컴포넌트에 억지로 합치지 않았다.

기존 `components/ui/button.tsx`(shadcn)를 확장하지 않고 새로 만든 이유는 그
프리미티브가 `--primary` 등 미사용 CSS 변수에 묶여 있어 그대로 쓰면 브랜드 블루가
아니라 무채색이 나오기 때문이다. `ui/button.tsx`는 그대로 두되(다른 곳에서 쓸 일이
생기면 그때 CSS 변수를 다시 매핑할지 결정), 실제 화면은 이 새 `Button`을 쓴다.

### `Tabs` / `ScrollableChips` — `src/app/components/common/{Tabs,ScrollableChips}.tsx`

```tsx
import { Tabs, tabPanelProps } from "@/app/components/common/Tabs";

<Tabs
  items={[{ value: "subscription", label: "월 구독 요금제" }, { value: "topup", label: "추가 크레딧 충전" }]}
  value={tab}
  onChange={(v) => setTab(v)}
/>
{/* 탭이 전환하는 콘텐츠 쪽에 role/aria-labelledby/id를 자동으로 맞물린다 */}
<div {...tabPanelProps(tab)}>{tab === "subscription" ? <SubscriptionTab /> : <TopUpTab />}</div>
```

`Tabs`는 콘텐츠 패널을 완전히 갈아 끼우는 진짜 탭(요금제 페이지의 "월 구독 요금제 /
추가 크레딧 충전")에 쓴다. 새로 그리지 않고 기존 `ScrollableChips`(outline variant)를
감쌌고, `ScrollableChips` 자체에 `role="tablist"` 옵션(기본값은 기존 필터 칩 그대로)을
추가해 접근성을 구현했다:

- `role="tablist"`/`role="tab"`/`aria-selected`/`aria-controls`가 탭 버튼과 `tabPanelProps`로
  감싼 패널 사이에 연결된다.
- **롤빙 tabIndex + 수동 활성화**: 방향키(←/→)는 포커스만 옮기고 선택은 바꾸지 않는다.
  Home/End는 처음/마지막 탭으로 포커스를 옮긴다. Enter/Space는 `<button>` 네이티브
  동작이 그대로 처리해 실제로 탭을 전환한다. 포커스된 탭과 선택된 탭이 다를 수
  있어 `focus-visible:ring`(파란 링)과 선택 스타일(칠해진 배경/테두리)이 동시에,
  구분되게 보인다 — Playwright로 화면 캡처해 실제로 구분되는 것을 확인했다.
- **가로 스크롤 추적**: 방향키로 포커스가 옮겨가면 그 탭이 가로 스크롤 영역 안에
  보이도록 자동으로 스크롤한다(기존 `centerActiveOnChange` 로직 재사용, 새로 구현하지
  않음).

`role="tablist"`를 넘기지 않으면(기본값) `ScrollableChips`는 예전과 완전히 같다 —
`CreditHistoryScreen`의 "사용 내역/환불·충전 내역" 필터, `LandingFormCard`/
`DetailFormCard`의 섹션 칩(이번 범위 밖)은 전부 이 기본 모드 그대로다. 필터는
같은 목록을 좁히는 것이지 콘텐츠 패널을 바꾸는 게 아니라서 `tab` 역할을 강제하지
않았다 — 다만 `focus-visible:ring` 포커스 링은 필터/탭 모드 공통으로 추가했다
(포커스 표시가 전혀 없던 기존 상태보다 항상 낫고, 시각적으로는 아무 변화가 없다).

**남은 한계**: `LandingFormCard`/`DetailFormCard`의 섹션 칩도 실제로는 "패널 전환"
성격에 가까워 보이지만(섹션마다 편집 대상이 바뀐다) 이번 범위(요금제/크레딧) 밖이라
`role="tablist"`를 적용하지 않았다 — 후속 과제로 남긴다.

### `Badge` — `src/app/components/common/Badge.tsx`

```tsx
import { Badge } from "@/app/components/common/Badge";
<Badge tone="brand">구독 중</Badge>
<Badge tone="warning">해지 예정</Badge>
<Badge tone="neutral">결제 완료</Badge>
<Badge tone="danger">결제 실패</Badge>
```

새 색은 만들지 않았다 — `brand`/`neutral`/`warning`은 화면마다 이미 쓰던 pill 색
쌍(각각 UsageSummary의 "현재 요금제" 배지, 크레딧 사용 내역의 중립 유형 배지,
요금제 페이지 개발용 안내 박스)을 그대로 가져왔다. `danger`만 새로 짝지었는데,
진한 텍스트(`#ef4444`, 크레딧 사용 내역의 음수 금액 색)에 다른 톤과 같은 "옅은
배경 + 진한 텍스트" 패턴을 적용해 배경만 새로 골랐다(`#fef2f2`) — 값 자체를
새로 만든 게 아니라 기존 패턴을 그대로 확장한 것.

### `Modal` — `src/app/components/common/Modal.tsx`

`PurchaseConfirmDialog`에 박혀 있던 모달 shell(배경 블러, 중앙 카드 라운드·그림자,
ESC 닫기)을 뽑아냈다. `PurchaseConfirmDialog`와 `CancelSubscriptionDialog`,
`PaymentMethodDialog`가 이걸 함께 쓴다 — 확인용 모달이 반복될 때마다 chrome을
새로 쓰지 않기 위해서다.

### `InputField` — `src/app/components/common/InputField.tsx` (2026-10-16)

긴 입력이 들어갈 수 있는 칸의 넘침 규칙을 `variant` 하나로 고른다. 개별 필드에 넘침 CSS를 덧붙이지 않고,
새 폼 필드도 이 컴포넌트를 쓰면 같은 규칙이 걸린다. 줄 수·폭·개수는 `styleTokens.ts`의 `fieldOverflow`.

| variant | 쓰는 곳 | 규칙 |
|---|---|---|
| `multiline` | 주제(`rows={fieldOverflow.title}` 1~3줄, 줄바꿈 문자 없음), 꼭 담아야 할 내용(3~8줄), 워크스페이스 ★ 여러 줄 칸·◆ 긴 직접 입력(`customRows` > 3), 앞으로 추가될 여러 줄 칸 | 높이는 내용 길이로만 — 3줄(`minRows`, 92px)에서 시작해 8줄(`maxRows`, 202px)까지 자동 확장, 넘치면 칸 안 세로 스크롤. 포커스가 들어오고 나가도 높이·스크롤 위치는 그대로(테두리·링만 바뀜). 저장된 값이 복원돼도 첫 화면부터 내용에 맞는 높이(웹폰트 로드 뒤 한 번 더 잼). 접기·"더 보기"·하단 페이드·글자 수 제한 없음 |
| `singleline` | 참고 자료 링크 입력, 워크스페이스 ★ 짧은 값(40자)·◆ 짧은 직접 입력·주제 수정 | 줄바꿈·말줄임 없음(값은 `text-overflow: clip`, 비어 있을 때 placeholder만 "…"). 가로 스크롤, Tab으로 들어오면 커서를 끝에 두고 그 위치까지 스크롤. 포커스가 없을 때 넘치면 오른쪽 끝 32px(`fadeWidth`) 페이드, 떠날 때 처음으로 되감음 |
| `list` | 참고 자료 칩, 2단계 정리한 요청의 참고 자료 | 3개(`visibleCount`)까지 보이고 나머지는 "+N개 더 / 접기". 감싸는 상자 없이 항목을 그대로 내보내 부모 배치(칩 줄바꿈·세로 목록)를 따른다 |

- 칸 안 스크롤바는 `theme.css`의 `.ui-field-scroll` — 6px 얇게. 여러 줄 칸은 실제로 넘칠 때(`data-overflow="true"`)만 늘 보이고, 넘치지 않으면 없다.
  "내용이 더 있음"은 이 스크롤바 하나로만 알린다(하단 페이드는 보류 — 부족하면 이후 판단).
- 모바일 키보드: 포커스한 칸이 커지거나 `visualViewport`가 줄면 칸 아래 끝이 보이도록 가장 가까운 스크롤 영역을 올린다
  (375×360 키보드 가정에서 8줄 입력 중 칸 아래 끝 348px < 보이는 영역 360px 확인).
- `multiline`은 `AutoGrowTextarea`의 `minRows`(항상 적용)·`collapse="none"` 옵션으로 만든다. 화면 코드에서 `AutoGrowTextarea`를
  직접 쓰는 곳은 없다(2026-10-16 워크스페이스 카드까지 교체) — 새 칸은 `InputField`를 쓴다.
- 글자 수: 여러 줄 칸은 제한·카운터 없음(2026-10-16 1,000자 상한·카운터·경고색 제거). 짧은 값만 `requestCards.ts` `TEXT_LIMITS.short` 40자.
  서버 쪽 길이 제한은 미확인 — `docs/known-issues.md` 3절.
- 바탕·포커스(2026-10-16): 셀렉트·한 줄·여러 줄 칸 모두 바탕 `FIELD_SURFACE`(`color.surface.subtle` #f8fafc) 고정 — 값이 차도 바뀌지 않는다.
  빈 칸/채운 칸은 placeholder 색(`color.text.placeholder`)과 글자 색으로만 구분. 포커스는 `FIELD_CLASS`(`.ui-field`, 칸 자신) /
  `FIELD_WITHIN_CLASS`(`.ui-field-within`, 스테퍼·참고 자료처럼 입력을 품은 상자) — 테두리 `--brand` + 1px `--brand` 링(theme.css, 인라인 테두리를 이기려고 !important).
  키보드 Tab 이동에서도 같은 표시 확인. 한 줄 칸은 `autoComplete="off"`이고 theme.css가 `:-webkit-autofill` 바탕 전환을 막는다
  — 크롬 자동 완성이 주제 칸을 파랗게 칠하던 문제(값이 찬 칸만 파래 보여 포커스로 오해됨).
- 워크스페이스 칸 높이: 한 줄 칸은 드롭다운과 같은 48px(`controlHeight.lg`, 예전 약 50px), 주제 수정은 옆 버튼에 맞춰 36px.
- 주제 칸(2026-10-16 singleline → multiline): 1줄(48px)에서 시작해 3줄(92px, `fieldOverflow.title`)에서 멈추고 세로 스크롤 — 제목 성격이라 상한을 짧게.
  줄바꿈 문자는 넣지 않는다(`singleLine` — 칸 안에서는 자동 줄바꿈으로만 감김). Enter·Shift+Enter는 다음 칸(꼭 담아야 할 내용)으로 이동,
  붙여 넣은 줄바꿈은 공백으로. 이전 저장값에 줄바꿈이 있어도 불러올 때·요청문(`주제: …` 한 줄)·워크스페이스로 넘길 때 공백으로 바꾼다(`oneLine`).
  placeholder "만들고 싶은 내용이나 주제를 짧게 적어주세요."
- 칩(참고 자료): 한 줄에 칩 하나씩, 3개 + "+N개 더 / 접기"(`InputField` list), 첨부 진입점은 우측 클립 아이콘 하나("링크 추가" 같은 두 번째 수단 없음). 칩이 있으면 링크 입력은 평소엔 흐름에서 빠져 칸 아래 빈 줄이 없고(위·아래 여백 같음),
  칩 영역의 빈 곳을 누르거나 Tab으로 들어오면 "+N개 더" 옆이나 마지막 칩 아래에 칩 높이(26px)로 나타난다. 붙여 넣은 값이 링크면 Enter 없이 바로 칩이 되고
  (여러 줄이면 줄마다 하나), 링크가 아니면 글자로 들어가 Enter·포커스 이탈 때 칩이 된다. 빈 상태 placeholder "링크를 붙여 넣거나 파일 첨부"는 그대로.
  칩 이름은 `common/MiddleEllipsisText` — 칩이 실제로 차지할 수 있는 폭을 재서(같은 글꼴 canvas measureText) 넘칠 때만 가운데를 줄인다(여유가 있으면 전체).
  줄일 때는 남길 글자의 65%를 뒤쪽에(`middleEllipsis.ts` `TAIL_SHARE`) — "(붙임10)(2026-2)…" 같은 공통 접두사보다 구분되는 뒷부분·확장자를 남긴다.
  URL은 `compactUrl` — 스킴·`www.`를 떼고 넘치면 `도메인/…/끝 경로`. 파일 이름은 원본 그대로(맥 자모 분리 NFD도 정규화하지 않음), 글자(grapheme) 단위로 잘라 음절이 갈라지지 않는다.
  전체 값: 데스크톱은 칩 `title` 툴팁, 칩 글자를 누르면(모바일 탭 포함) 그 칩만 전체 값으로 줄바꿈해 펼친다.
  클립(첨부) 아이콘은 칸 우상단 고정(데스크톱 위·오른쪽 8px, 640px 미만 44px 터치 영역으로 2px) — 칩 개수와 상관없이 같은 자리.
- 남은 확인: 실기기 모바일 키보드 동작(iOS Safari `visualViewport`) — `docs/known-issues.md` 2절.

## 구독·결제(mock) — `src/app/state/subscription.ts`

크레딧·요금제 페이지의 자연스러운 확장으로 월 구독/추가 충전/결제 수단/결제
내역/구독 해지를 추가했다(2026-09-17). **실제 결제 백엔드·토스페이먼츠 SDK는
여전히 없다**(package.json에 관련 의존성 없음, 서버/API 디렉터리 자체가 없음 —
2026-09-17 재확인). 이 스토어의 상태 변경 액션(`subscribeToPlan`, `addTopup`,
`scheduleCancel`, `undoCancel`, `setPaymentMethod`)은 전부 로컬 상태만 바꾸는
시뮬레이션이다.

**Toss Payments 연결 지점 분리(2026-09-17 갱신)** — 카드사를 사용자가 직접
고르는 UI(신한/현대/국민/카카오뱅크 목록)는 완전히 제거했다. 대신 실제 연동 전
경계를 아래 5개 함수로 명확히 나눴다 — 전부 `Promise`를 반환하고, 연동 시 함수
내부만 실제 SDK/API 호출로 바꾸면 호출부(화면 코드)는 그대로 둘 수 있다.

| 함수 | 대응하는 실제 Toss/서버 동작 | 반환 |
|---|---|---|
| `registerCardWithTossPayments()` | 카드 등록/인증(빌링키 발급) | `TossCardResult`(success/failure/cancelled) |
| `chargeFirstPaymentWithTossPayments(plan)` | 구독 첫 결제 승인(빌링키로 청구) | `TossChargeResult` |
| `chargeTopupWithTossPayments(pkg)` | 크레딧 충전 일회성 결제 | `TossChargeResult` |
| `cancelSubscriptionWithServer()` | 서버의 해지 처리(다음 자동결제 중단) | `{success}` |
| `fetchPaymentHistory()` | 결제 내역 조회 | `Promise<PaymentRecord[]>`(reject 시 조회 실패) |
| `fetchPaymentMethod()` | 결제 수단 조회 | `Promise<PaymentMethod \| null>`(reject 시 조회 실패) |

- **카드 등록 ≠ 첫 결제 ≠ 구독 활성화**를 서로 다른 상태로 관리한다. "구독
  시작" 확인창에서 등록된 카드가 없으면 `registerCardWithTossPayments()`를
  먼저 부르고(성공해도 아직 구독 아님), 그다음 `chargeFirstPaymentWithTossPayments`가
  성공해야만 `subscribeToPlan()`으로 실제 활성화한다. 둘 중 하나라도 실패/취소되면
  구독 상태는 바뀌지 않는다.
- 카드 변경(`setPaymentMethod`)은 `lastPaymentFailed`를 건드리지 않는다 — "카드를
  바꿨다"와 "밀린 결제가 해결됐다"는 다른 사실이라, 카드 변경만으로 결제 실패
  상태를 지우지 않는다. 실패 후 재청구 흐름 자체는 정책 미정이라 구현하지 않았다.
- 개발용 결정적 실패/취소 재현: `getDevForcedOutcomes()`/`setDevForcedOutcome()`로
  다음 호출 결과(성공/실패/취소)를 강제할 수 있다. `BillingManagementPage`의
  `?devpanel=1` 패널에서 6개 항목(카드 등록/첫 결제/충전 결제/해지/내역 조회/결제
  수단 조회)을 각각 토글해 실패·취소 화면을 결정적으로 확인한다.
- 결제 수단은 `subscription.paymentMethod`를 그대로 읽지 않고 `fetchPaymentMethod()`를
  거친 값(`BillingManagementPage`의 `cardMethod`/`cardState`)을 화면에 쓴다 —
  "조회 자체에 실패했다"(`cardState==="error"`, 재시도 버튼)와 "정상 조회했는데
  카드가 없다"(`cardState==="ready" && cardMethod===null`, 등록 유도)를 구분하기
  위해서다. 등록/변경 성공 시엔 그 응답을 바로 반영하고 재조회하지 않는다(성공
  직후 "불러오는 중"이 다시 뜨는 어색함을 피한다). 등록(카드가 없던 상태)과
  변경(이미 카드가 있던 상태)은 토스트 문구가 다르다 — "결제 수단이
  등록되었습니다." / "결제 수단이 변경되었습니다. 다음 정기결제부터 적용됩니다."
  실패 문구도 같은 기준으로 "등록하지 못했습니다"/"변경하지 못했습니다"로 갈린다.
- 설정 크레딧 탭(`SettingsCreditTab.tsx`)은 결제 수단을 `subscription.paymentMethod`에서
  카드사·마스킹 번호만 요약해 보여준다(등록·변경 버튼 없음) — 등록/변경 UI는
  `BillingManagementPage` 한 곳에만 둔다. 두 화면이 같은 스토어를 읽으므로 변경
  후 설정을 다시 열어도 최신 값이 보인다.
- 크레딧을 "구독 지급분"과 "추가 충전분" 두 버킷으로 나눈다. 아직 한 번도
  구독/충전을 하지 않은 상태에서는 기존 총액(`creditBalance.ts`)을 임의로
  나누지 않고 "—"로 가려 둔다(이전 크레딧 페이지 작업에서 정한 원칙 유지) —
  첫 구독/충전이 실제로 일어나는 순간부터만 버킷을 추적한다.
- `creditBalance.ts`(총액, AI 에디터가 실시간으로 차감)는 건드리지 않았다.
  대신 이 스토어가 그 총액 변화를 구독해 "구독분부터 소진" 규칙으로 두 버킷에
  반영한다 — AI 편집 차감 금액·조건은 그대로다.
- IA: 프로필 메뉴 → 설정 → 크레딧(요약만) → **구독 및 결제 관리**(상세 관리) →
  결제 수단 변경 / 결제 내역 / 구독 해지. 구독 해지는 메인·설정 화면에 노출하지
  않고 "구독 및 결제 관리" 화면 가장 하단에 낮은 강조도 버튼(`Button
  variant="secondary"`에 텍스트 색만 `#ef4444`)으로만 둔다 — 큰 필드/강한 빨강
  버튼을 쓰지 않는다는 요구를 그대로 따랐다.
- 구독 해지 확인창은 반복적인 방어 화면을 두지 않는다 — 제목·본문 한 줄·이용
  종료일 안내 한 줄·버튼("구독 유지"/"구독 해지")이 전부다. 서버 확인
  (`cancelSubscriptionWithServer`) 후에만 `scheduleCancel()`로 반영하고, 실패하면
  모달 안에서 에러만 보여주고 기존 상태를 유지한 채 재시도할 수 있다.
- 결제 내역은 완료/실패/취소/환불/부분환불 상태와 구독·충전 유형 배지를 함께
  보여준다. `receiptUrl`이 실제로 있을 때만 "영수증 보기"를 노출한다 — 지금은
  실데이터 소스가 없어 mock 레코드엔 전부 `receiptUrl`이 없고, 그래서 "영수증
  보기"는 항상 숨겨진다(의도된 동작). 조회는 `fetchPaymentHistory()`를 거쳐
  로딩/실패/재시도 상태를 실제로 갖는다.
- 크레딧 사용 내역(`CreditHistoryScreen`)과 결제 내역(`BillingManagementPage`
  Section 03)은 서로 다른 목록이다 — 섞지 않는다.

새 화면: `SettingsCreditTab.tsx`(설정 크레딧 탭, 기존 "크레딧 사용량" 자리표시자
카드 4개는 실제 데이터가 없어 제거), `BillingManagementPage.tsx`,
`SubscriptionCompletePage.tsx`, `CancelSubscriptionDialog.tsx`,
`PaymentFailedAlert.tsx`. `PaymentMethodDialog.tsx`(카드사 선택 모달)는
2026-09-17에 완전히 제거했다 — "결제 수단 등록/변경" 버튼이 이제 모달 없이
바로 `registerCardWithTossPayments()` 연결 지점을 부른다.

## 적용 범위

이번에 토큰·공통 컴포넌트를 적용한 화면(2026-09-17 기준):

- `src/app/components/pricing/*`(PricingPage, UsageSummary, SubscriptionTab, TopUpTab, PurchaseConfirmDialog, BillingManagementPage, SubscriptionCompletePage, CancelSubscriptionDialog, PaymentFailedAlert)
- `src/app/components/settings/SettingsCreditTab.tsx`(설정 크레딧 탭 — App.tsx에서 추출)
- `src/app/App.tsx`의 `ProfileMenuButton`(내 크레딧 카드 + CTA), `SettingsModal`(크레딧 탭 렌더만 위임)
- `src/app/App.tsx`의 `CreditHistoryScreen`(잔액 카드, 리스트 카드, 필터 행, "+크레딧 충전" 버튼 — 화면 구조·필터·정렬·뒤로가기 등 기존 동작은 그대로 유지)
- `src/app/components/common/{Button,Tabs,ScrollableChips,Badge,Modal}.tsx`(공통 컴포넌트 자체)
- `src/app/state/subscription.ts`(신규 — 구독·결제·크레딧 버킷 mock 스토어)
- 서비스 전역의 브랜드 블루 색상값(아래 "1) 브랜드 블루" 참고) — 홈/검색/템플릿 화면의
  **레이아웃·문구는 건드리지 않고 색상값만** `#2563eb`→`color.brand`, `#1d4ed8`→`color.brandHover`,
  `#eff5ff`→`color.surface.accent`로 맞췄다. 대상 파일: `HomeSearch.tsx`,
  `SearchResultsScreen.tsx`, `TaskTemplateScreen.tsx`, `RequestHelpScreen.tsx`,
  `TemplateResultCard.tsx`, `RecommendedCarousel.tsx`, `App.tsx`(홈 히어로의 "딸깍" 글자색)

**적용하지 않은 곳**: 랜딩페이지, 검색/템플릿 화면의 레이아웃·타이포·간격·컴포넌트
구조(색상값만 위에서 맞췄을 뿐 나머지는 그대로), 기업 브랜드 킷. `CreditHistoryScreen`의
`#3b63f6`(양수 금액/상세 텍스트 색), `#475569`, `#ef4444`(오류)는 이번 브랜드 블루
결정(`#2563eb` 계열만 해당) 범위 밖이라 손대지 않았다 — 새로 발견된 네 번째 블루
계열로 기록만 해 둔다. **홈 화면의 레이아웃은 이후 재구성했다 — 아래 "홈 화면 재구성"
참고.**

## 홈 화면 재구성 (2026-09-17)

메인 홈을 "제목+검색 → 대표 카테고리 → (선택 시) 세부 기능 → 바로 시작하기 좋은
템플릿 → 전체 기능" 순서로 다시 짰다. 기존 검색·요청 작성 도움받기·템플릿
선택·기능 카드 이동 동작은 그대로 두고 배치와 카테고리 선택 상호작용만 바꿨다.

- **카테고리 데이터는 하나의 원본만 쓴다** — `src/app/data/tasks.ts`의 `TASK_GROUPS`에
  그룹별 대표 아이콘(`TaskGroup.icon`)을 추가해, 홈의 "대표 카테고리" 5개 바로가기와
  "전체 기능" 7개 그룹 헤더가 같은 데이터에서 파생된다(이름·아이콘·이동 경로를
  두 곳에 따로 적지 않는다).
- 신규 `CategoryQuickLinks.tsx` — 대표 카테고리(이미지/문서/발표자료/표·데이터/영상)
  5개를 "일러스트 위 + 이름 아래" 형태로 보여준다. 기본은 테두리·그림자 없음, hover는
  옅은 회색 배경, 선택은 `color.surface.accent` 배경 + `color.brand` 텍스트로 구분한다.
  다시 누르면 선택이 풀린다(같은 위치의 세부 기능 영역이 접힌다) — 페이지 이동·강제
  스크롤은 없다. "더보기"는 없앴다(오디오·웹페이지는 전체 기능에서만 보인다).
- 신규 `CategoryFeatureStrip.tsx` — 카테고리를 선택하면 그 아래 나타난다. 기존
  `TaskGrid.tsx`의 `TaskCard`를 그대로 재사용한다(새 카드를 만들지 않음). `status
  === "available"`인 항목만 보여주고, 카드 폭을 고정해 1~2개여도 가로 전체로
  늘리지 않는다. 실제로 넘칠 때만(스크롤 컨테이너의 scrollWidth > clientWidth)
  좌우 화살표가 나타나고, 스크롤이 끝에 닿으면 그 방향 버튼이 사라진다(`ResizeObserver`
  + `scroll` 이벤트로 매번 다시 계산).
- `RecommendedCarousel.tsx`("바로 시작하기 좋은 템플릿") — 자동 재생·무한 순환 마퀴를
  없애고 일반 `overflow-x-auto` 가로 스크롤로 바꿨다(첫 카드가 왼쪽 끝에 온전히
  보이고 다음 카드가 오른쪽에 걸치는 건 이 기본 동작 그대로 나온다). 좌우 화살표는
  카드 위가 아니라 제목 옆에 둬서 표지를 가리지 않는다. **주의**: `TaskTemplate`에는
  실제 미리보기 이미지 필드가 원래 없어서(이 프로젝트 어디에도 템플릿별 실제 표지
  이미지 자산이 없다 — 2026-09-17 확인), 기존에 쓰던 자리표시자(대각선 빗금 패턴)를
  그대로 쓰되 "표지 예시"·형식 배지·흰 정보 박스를 지우고 제목만 이미지 위 최소
  캡션으로 남겼다. 실제 표지 이미지 자산이 생기면 이 배경을 실제 `<img>`로 교체하면
  된다(카드 크기·비율 로직은 이미 `meta`의 정사각형/세로형/가로형/와이드 키워드로
  계산해 두어서 그대로 맞는다).
- `TaskGrid.tsx`("전체 기능") — 그룹별 배치·"준비 중" 회색 처리·이동 경로는 그대로
  두고, 반응형 열만 `grid-cols-1 sm:grid-cols-2 md:max-wide:grid-cols-3
  wide:grid-cols-4`로 다듬었다(가장 좁은 화면에서 1열).
- `HomeSearch.tsx` — 큰 "요청 작성 도움받기" 배너 카드를 지우고 검색창 아래 오른쪽
  링크 한 줄로 줄였다. 검색창은 최대 폭 760px·높이 60px·입력 16px, PC/모바일
  placeholder를 나눴다(768px 미만은 짧은 문구).
- `theme.css` — `--hero-title-size`가 데스크톱(≥1200px)에서도 모바일과 같은 26px를
  그대로 쓰고 있었다(재확인 전까지 몰랐던 사각지대). ≥1200px 전용 오버라이드
  38px를 추가했다. `--gap-title-search`(26px)를 새로 둬서 제목→검색창 간격을
  섹션 간격(`--home-block-gap`, 44px — 2026-10-22 `--home-section-gap`으로 통합·삭제)과 분리했다.

### 홈 상단 에디터 진입 아이콘 줄 (2026-10-16)

위 "홈 화면 재구성"의 `CategoryQuickLinks`(알약형 카테고리 칩 + "전체 보기")와 `CategoryFeatureStrip`(칩 선택 시 세부 기능 줄)은
삭제했다. 대신 `home/EditorQuickLinks.tsx`가 검색창 아래에 아이콘 + 아래 라벨 줄을 그린다(원 배경 없음 — 같은 날 원형에서 바꿈).

- 순서: **템플릿** | 구분선 | (에디터로 직접 만들기) 이미지 · 워드 · 한글 · PPT · 엑셀 · 영상 · 레이어 분리.
- 템플릿: 연한 파랑 둥근 사각 배경(`color.surface.accent`, 모서리 20) + `LayoutGrid` 아이콘·라벨 `color.brand`. 누르면 아래 "템플릿으로 시작하기"
  (`#template-start`)로 부드럽게 스크롤(모션 감소 설정이면 즉시).
- 나머지: 해당 포맷 에디터를 빈 템플릿으로 연다(`App.tsx` `openEditor` — 템플릿 목록으로 보내지 않음).
  이미지 → image(.png), 워드/한글/엑셀 → docs(.docx/.hwpx/.xlsx), PPT → ppt(.pptx), 영상 → video(.mp4).
  이 저장소엔 포맷별 독립 에디터 화면이 없어, "에디터" = 워크스페이스(템플릿 적용 때와 같은 화면)다.
- 레이어 분리: NEW 뱃지(`color.brand` 채움). 워크스페이스를 거치지 않고 이미지 미니 에디터(`TabletMiniEditor`, 4:5 · 1024×1280 · 4장, 텍스트분리 도구 포함)를 바로 전체 화면으로 연다. 닫으면 홈.
- 포맷 아이콘은 원·테두리·그림자 없이 일러스트가 아이콘 칸(64×64)을 그대로 채운다. hover는 아이콘이 2px 떠오른다(모션 감소 설정에선 정지).
- 크기·간격은 `styleTokens.ts` `editorEntry`(아이콘 칸 64 · 항목 폭 76 · 간격 12 · 아이콘↔라벨 10 · 라벨 14px · hover 2px).
- 줄은 **가운데 정렬**(2026-10-22, 이전 왼쪽 정렬을 대체) — 템플릿 ~ 레이어 분리 전체를 한 묶음(`w-max`)으로 만들어
  홈 공통 컨테이너(`--home-container`, 데스크톱 1120 = `pageContainerWidth`) 안에서 `margin-inline: auto`로 가운데 둔다.
  타이틀·요청 도우미·입력창과 같은 세로 중심축이고, 사이드바를 펼치거나 접어도 메인 영역 중심을 따라간다.
  묶음 폭은 `editorEntry` 아이콘·간격으로만 정해져 화면이 넓어도 벌어지지 않는다. 넘치면(모바일) auto 마진이 0이 되어
  왼쪽 여백부터 가로 스크롤 — `justify-content: center`는 넘칠 때 왼쪽이 잘려서 쓰지 않는다.
  설명 라벨은 `contain: inline-size`로 묶음 폭 계산에서 빠지고, NEW 배지는 absolute라 정렬에 영향이 없다.
- 구분선 오른쪽 묶음 위에만 설명 라벨 **"에디터로 직접 만들기"**(11px · 600 · `color.text.muted`, 아이콘과 8px). 텍스트 왼쪽 끝 = 이미지 아이콘 왼쪽 끝.
  템플릿 쪽엔 라벨 없음. 검색창과는 부모 간격 24px + `editorEntry.searchGapExtra` 24px로 띄워 검색의 부속처럼 보이지 않게 한다.
- 넘치면 줄바꿈 없이 가로 스크롤(스크롤바 숨김, 라벨도 함께 움직인다). 모바일에선 화면 좌우 끝까지 펼친다.
- 일러스트: `src/assets/home/editor/*.png`(192px). 받은 원본은 흰 배경(불투명)이라 배경색 기준으로 투명화하고
  그림 영역에 맞춰 잘랐다. 예전 Word·Excel·PowerPoint 로고형 칩 아이콘은 이 줄에서 쓰지 않는다
  (`AI에게 맡기기` 작업 카드 일러스트는 그대로).
- 하단 두 섹션 사이 간격은 `--home-section-gap`(80px, theme.css)으로 넓혔다.

#### 아이콘 줄 재구성 (2026-10-22) — 위 항목 중 라벨·템플릿 배경·hover·간격 설명을 대체한다

- 구조: `── 또는 직접 만들기 ──`(검색창 = AI로 시작의 대안 경로) 아래 **[전체 템플릿] | [이미지 워드 한글 PPT 엑셀 영상] | [레이어 분리]**.
  그룹 사이에 같은 세로 구분선(48px, 아이콘 세로 가운데).
- 라벨: `typography.caption`(12px·500) + `color.text.secondary`, 양옆 1px `color.border.default` 선. 라벨 줄은 가로 스크롤 영역 밖에 있고
  최대 폭 = 아이콘 묶음 폭(714px → 2026-10-29부터 605px)이라, 넓은 화면에선 선이 묶음 폭과 같고 375px처럼 묶음이 넘치는 화면에서도 보이는 영역 가운데에 남는다.
- 전체 템플릿: 선택된 탭처럼 보이던 파란 배경·파란 글자를 없앴다. 흰 타일(`color.surface.default`) + `color.border.default` 테두리 +
  `LayoutGrid`(본문 회색)로 형식 아이콘과만 구분한다. 누르면 "작업별로 시작하기"(`#all-features`)로 부드럽게 스크롤한다(2026-10-22, 이전엔 인기 템플릿 `#template-start`).
- **2026-10-29 라벨 문구**: "또는 직접 만들기" → "또는 무료 편집기에서 직접" → "무료 편집기" → **"무료 편집기 바로 열기"**('또는'을 뺀 제목형. 양옆 선·가운데 정렬·caption 토큰은 그대로).
- **2026-10-29 툴팁 규칙**: 일곱 개가 한 덩어리로 읽히게 모두 "… 편집"으로 끝낸다. 워드·한글·PPT·엑셀은 파일 포맷을 앞에 붙인다.
  이미지 "이미지 편집" · 워드 "DOCX 문서 편집" · 한글 "HWP·HWPX 편집" · PPT "PPTX 발표자료 편집" · 엑셀 "XLSX 스프레드시트 편집" ·
  영상 "영상 편집" · 레이어 분리 "이미지 속 글자·요소 편집".
  (같은 날 앞서 둔 "대체 대상이 없는 편집기는 용도" 규칙 — 포스터·SNS·썸네일 / 숏폼·홍보 영상 — 은 이것으로 대체.)
- **2026-10-29 툴팁 접근성**: 버튼 이름은 `aria-label`("○○ 편집기 열기"), 툴팁 문구는 `aria-describedby`로 따로 연결한다(이름에 합치지 않음).
  Radix 툴팁 본문은 열렸을 때만 DOM에 있어서, 같은 문구를 `hidden` 요소(고유 id, `useId`)로 항상 렌더링해 연결한다 — hover 여부와 관계없이 설명이 전달된다.
- **2026-10-29 전체 템플릿 제거**: 전체 템플릿 버튼(아이콘·툴팁·aria-label 포함)과 그 오른쪽 첫 구분선을 없앴다.
  지금 구조는 **[이미지 워드 한글 PPT 엑셀 영상] | [레이어 분리]**(구분선 1개). 항목 크기·간격·중심 정렬은 그대로,
  묶음 폭만 7 × 76 + 7 × 8 + 17 = 605px로 줄었다. 위 전체 템플릿 설명은 기록으로만 남긴다.
- 모든 항목: 같은 클릭 영역 76×104(`item` × pad 6 + 아이콘 64 + 8 + 이름 20 + pad 6). hover는 `color.surface.hover`(#f1f5f9, 새 토큰 —
  Badge neutral 배경과 같은 값) 배경 + `radius.card` 모서리, 떠오르는 모션은 없앴다. hover·포커스 때 한 줄 용도 툴팁(`ui/tooltip`, 아래쪽).
  포커스 링은 inset(가로 스크롤 줄에서 잘리지 않게).
- NEW 배지: 공용 `Badge`(`tone="brandSolid"`, `size="sm"` — 둘 다 이번에 추가, 기존 사용처 기본값은 그대로) · 아이콘 칸 우상단 기준
  `editorEntry.badgeTop/badgeRight`(−6 / −12) 고정.
- 간격(`editorEntry`): 아이콘↔이름 = 항목↔항목 = `space` 8 · 그룹↔구분선 `groupGap` 16(구분선 양옆 시각 거리 33) ·
  라벨↔아이콘 줄 `captionGap` 10(+ 항목 위 pad 6). 세로 합계는 이전 줄과 같은 130px로 고정해 아래 섹션 위치가 그대로다.
- 묶음은 홈 공통 컨테이너 안 `margin-inline: auto`로 검색창과 같은 중심축(넘치면 왼쪽 여백부터 가로 스크롤).

### 홈 하단 섹션 워딩 (2026-10-16)

- 섹션 이름: "바로 시작하기 좋은 템플릿" → **템플릿으로 시작하기**(보조문구 "고르고 바로 편집하면 끝"),
  "전체 기능" → **AI에게 맡기기**(보조문구 "주제만 적으면 초안까지 한 번에").
- 섹션 머리는 `home/HomeSectionHeader.tsx` 하나로 그린다. 제목 `homeSectionTitleStyle`(600 → **700**),
  보조문구 `homeSectionSubtitleStyle`(400·`color.text.secondary`, 14/15px), 둘 사이 4px.
- "모두 보기"·분류 옆 "›" 링크는 두지 않는다 — 연결할 전체 목록 페이지가 아직 없다. 생기면 그때 붙인다.
  → **2026-10-29**: 전체 템플릿 화면(`home/AllTemplatesScreen.tsx`, screen `"templates"`)이 생겨 "인기 템플릿으로 시작하기" 제목 줄 오른쪽 끝에
  **"전체 보기 ›"**를 붙였다. `HomeSectionHeader`의 `action` 슬롯(제목과 같은 줄, `justify-between`, 보조문구 줄은 그대로)으로 넣는다.
  스타일: 14/20px·500·`color.text.secondary`, hover `color.brand`, `ChevronRight` 16, 포커스 링 브랜드. aria-label "인기 템플릿 전체 보기".
  전체 템플릿 화면은 검색 결과 화면과 같은 폭·`TemplateResultCard`·그리드를 쓰고 `TASK_GROUPS` 순서로 분류별 묶음(제목 + 개수)으로 보여준다.
- **2026-10-29 카드뉴스 카드 연결**: 작업별로 시작하기의 카드뉴스 카드만 `home/CardNewsEditorScreen.tsx`(screen `"cardnews-editor"`)를 연다
  (다른 작업 카드·캐러셀 표지는 그대로 무반응). 화면 본체는 디자이너 전달용 별도 프로젝트를 `public/cardnews-editor/`로 빌드해 iframe(`?embed=1&id=cn-tmpl-29`)으로
  띄운다 — React 19·자체 테마 변수라 코드로 합치지 않는다. 카드 HTML이 `/placeholder/*.svg`를 절대 경로로 불러 `public/placeholder/`에도 둔다.
- "AI에게 맡기기"는 7개 분류를 모두 펼쳐 둔다. "더 보기"/"접기"로 나머지 분류를 접던 방식은 같은 날 넣었다가 뺐다.

### 홈·AI 생성 화면 워딩 수정 + 홈 간격 통일 (2026-10-22)

구조(섹션 순서·요소 개수·크기·색)는 그대로 두고 글자와 간격 토큰만 바꿨다.

- 히어로: "무엇부터 쓸지 막막하다면" → **뭘 써야 할지 모르겠다면**, 버튼 "요청 작성 도우미" → **요청 도우미**,
  검색 placeholder → **무엇을 만들까요? 예: 행사 안내문, 카페 홍보 이미지**(768px 미만은 "무엇을 만들까요?"), 검색 버튼 → **시작하기**.
- 아이콘 줄 라벨 "에디터로 직접 만들기" → **에디터에서 만들기**.
- 캐러셀 섹션 → **인기 템플릿으로 시작하기** / "고르고 바로 고치면 끝".
- "AI에게 맡기기" → **작업별로 시작하기** / "만들 작업을 고르면 맞는 템플릿을 보여드려요".
- 작업 카드 이름·설명(이미지 4장·문서 3장)은 `TaskGrid.tsx` `HOME_TASK_COPY`로 **홈에서만** 덮어쓴다.
  `tasks.ts`의 label/desc는 요청 작성 도움받기 1단계 등 다른 화면도 쓰므로 그대로 둔다.
  설명 칸은 카드 폭의 56%(약 93~107px)라 "한 줄 묘사로 이미지" 등 일부 설명은 두 줄로 내려간다 — 다른 분류의 기존 설명도 같은 방식이다.
- AI 생성 화면 입력창 칩: "양식 업로드" → **내 양식 올리기**, "자동 프롬프트" → **프롬프트 다듬기**, "원문 사용" → **원문 그대로 쓰기**
  (같은 버튼을 가리키는 튜토리얼 제목·설명도 함께 바꿈).
- 간격 토큰(theme.css) — 같은 관계는 화면 전체에서 같은 값:
  - 섹션 ↔ 섹션 `--home-section-gap` 80px — 히어로 묶음 → 인기 템플릿(예전 `--home-block-gap` 44px)도 이 값으로 합쳤다. `--home-block-gap`은 삭제.
  - 섹션 제목 ↔ 서브카피 `--home-title-sub` 4px, 서브카피 ↔ 콘텐츠 `--home-sub-content` 24px — `HomeSectionHeader`가 Tailwind `mt-1`/`mb-6` 대신 이 변수를 쓴다(값 동일).
- 문서 분류에 **서식 작성** 카드 추가(신청서·양식 빈칸 채우기, `tasks.ts` id `formfill`, 일러스트 `assets/home/art/formfill.png`).
  받은 원본을 투명 배경 300px로 정리해 다른 문서 카드 일러스트와 같은 크기(약 92px)로 맞췄다. 워크스페이스로 가는 작업이 아니라
  요청 작성 도움받기 목록에서는 뺀다(`RequestHelpScreen` `EXCLUDED_TASK_IDS`).

## 반응형 규칙

서비스는 랜딩과 다른 자체 2단 브레이크포인트를 쓰고, 이번 토큰화 작업에서도
그대로 유지한다(값을 맞출 이유가 없다 — 화면 성격이 다르다):

- `useIsTabletUp()` — 768px 이상
- `useIsDesktop()` — 1200px 이상(Tailwind 커스텀 `wide:` variant)
- 랜딩은 Tailwind 기본 4단(640/768/1024/1280)을 쓴다 — 서비스에 이식하지 않는다

## theme.css와 shadcn 변수 — 적용 경계

**이번에도 shadcn 변수 체계로 전면 이관하지 않는다.** styleTokens 중심의 기존
구현 방식을 유지하고, 아래처럼 "실제로 쓰는 것"과 "쓰지 않는 것"만 정확히 구분해
기록한다(2026-09-17 간접 참조까지 재확인).

**실제로 쓰이고 있음 — 유지해야 함**
- `--tooltip`/`--tooltip-foreground`/`--tooltip-border`/`--tooltip-shadow`/`--tooltip-padding`
  → `components/ui/tooltip.tsx` → `IconTooltip.tsx`를 통해 `TabletMiniEditor.tsx`,
  `ContextToolbar.tsx`, `TabletEditorSidebar.tsx`, `TabletEditorShell.tsx` 네 곳에서 쓰인다.
  이 값들은 툴팁 전용으로 설계됐다(테마 설명 주석 참고) — 삭제 금지.
- `--foreground`/`--background`/`--border` → `ScrollableChips.tsx`의 "solid" variant가
  Tailwind `bg-foreground`/`text-background`/`border-border`/`text-foreground` 클래스로
  직접 쓴다(크레딧 사용 내역 필터 등). `--border`(`rgba(0,0,0,0.1)`)는 `color.border.default`
  (`#e2e8f0`)와 값이 달라, 이 컴포넌트의 "solid" variant만 미묘하게 다른 테두리 톤을
  갖는다 — 지금은 문제로 보이지 않아 그대로 두되, 눈에 띄게 다르면 후속 검토 대상.
- `--brand`, `--border` → `components/viewer/MobileEditorNotice.tsx`가
  `bg-brand/[0.06] border-border`를 쓴다.

**선언은 있으나 연결되지 않음 — 미완성 기능, 삭제하지 않음**
- `.dark { ... }`(다크모드 전체 변수 세트). `SettingsModal`에 "다크" 테마 옵션 UI가
  이미 있지만(`theme` state), 실제로 `document.documentElement`에 `dark` 클래스를
  토글하는 코드는 어디에도 없다 — 즉 다크모드는 "화면상 선택지는 있지만 아직
  작동하지 않는" 상태다. 나중에 다크모드를 실제로 연결할 때 그대로 쓸 수 있게
  둔다.

**참조를 찾지 못함 — 지금 지울 이유는 없어 유지**
- `--primary`, `--secondary`, `--muted`(-foreground), `--accent`(-foreground),
  `--popover`(-foreground), `--card`(-foreground), `--destructive`(-foreground),
  `--input`, `--switch-background`, `--sidebar-*`, `--radius-sm/md/lg/xl`, `--chart-*`
- 그리고 이 값들을 쓰는 `components/ui/{button,card,dialog,badge,select,input,
  checkbox,switch,avatar,separator,sheet,drawer,popover,dropdown-menu,accordion,
  alert,tabs,sidebar}.tsx` — import 하는 곳이 코드 전체에 없다.
- 이 항목들은 "확실히 미사용"이지만, 당장 지워야 할 이유(빌드 오류, 충돌, 혼란)가
  없어 그대로 뒀다. 나중에 shadcn 프리미티브를 실제로 채택하거나, 반대로 정리해서
  들어내기로 확실히 정할 때 다시 판단한다.

**전역 규칙은 그대로 유지**: `* { @apply border-border outline-ring/50; }`(theme.css)는
Button.tsx가 이미 아는 캐스케이드 함정의 원인이지만, 이 규칙 자체를 지우지는
않았다 — 지우면 위 "실제로 쓰이고 있음" 목록의 `border-border` 의존(ScrollableChips
solid, MobileEditorNotice)이 깨진다. 새 컴포넌트는 이 규칙과 충돌하지 않는
`ring` 기반 포커스 표시를 쓰는 것으로 우회했다.

## Pretendard 800/900 확인 결과

- 선언: `src/styles/fonts.css`가 두 소스를 `@import`한다 — ① Google Fonts
  `Pretendard+Variable:wght@400;500;600;700`(정적 인스턴스, 400~700만), ②
  jsDelivr `pretendardvariable-dynamic-subset.min.css`(가변 폰트, 유니코드 서브셋
  단위 동적 로딩).
- 실측(Playwright + `document.fonts` API, 프로덕션과 동일한 dev 빌드 기준): 두 번째
  소스가 실제로 브라우저에 로드한 `FontFace`들은 전부 `family: "Pretendard Variable"`,
  `weight: "45 920"` — 즉 45~920 전 구간을 지원하는 진짜 가변 폰트다. 네트워크 탭에서도
  `cdn.jsdelivr.net/.../variable/woff2-dynamic-subset/*.woff2` 요청만 200으로 확인됐고,
  `fonts.googleapis.com`/`fonts.gstatic.com`으로는 요청이 가지 않았다 — 브라우저가
  weight 매칭 시 더 넓은 범위(45~920)를 가진 두 번째 소스를 선택하기 때문으로 보인다.
- fontWeight 800으로 렌더링되는 실제 엘리먼트(요금제 카드 가격, `₩9,900`)를 찾아
  확인한 결과 `font-family: "Pretendard Variable", ...`, `font-variation-settings: normal`
  — 합성(faux) bold를 쓰는 정황(예: 별도 `-webkit-text-stroke` 보정이나 스캐일 왜곡)은
  없었다.
- **결론**: 800/900은 첫 번째(Google Fonts, 400~700만 선언) 소스가 아니라 두 번째
  (jsDelivr 가변 폰트) 소스로 정상적으로 렌더링되는 것으로 확인했다. 필요한 파일이
  빠져 있거나 선언이 잘못된 상태는 아니라서 `fonts.css`를 수정하지 않았다.
- **미확인 범위**: 실제 폰트 파일 내부에서 800/900 마스터가 얼마나 정교하게
  보간되는지(디자인 품질) 같은, 브라우저 API로 확인할 수 없는 부분은 보지 않았다.
  네트워크가 완전히 차단된 환경(오프라인, 사내망 등)에서 jsDelivr CDN 접근이
  막히면 Google Fonts 400~700만 남고 800/900은 폴백(합성 볼드)될 가능성이 있다 —
  이 경우까지는 이번에 확인하지 않았다.

## 대비 확인 결과 (2026-09-17)

요금제 페이지·설정·크레딧 사용 내역에서 실제 렌더링된 색상 쌍을 WCAG 2.1 공식
공식으로 계산했다(Playwright로 computed style을 읽어 계산, 추정치 아님).

| 조합 | 대비 | WCAG AA(4.5:1, 일반 텍스트) | 비고 |
|---|---|---|---|
| `color.text.primary`(제목) on `#f8fafc` | 18.92:1 | 통과 | |
| `color.text.faint`(본문 설명) on 흰 배경 | 4.74:1 | 통과(경계에 가까움) | |
| `color.text.muted`(caption 라벨) on 흰 배경 | **2.54:1** | **미달** | 기존 앱 전반에서 이미 쓰이던 값(이번에 새로 만든 값 아님). 라벨류가 대부분 12px 굵기 500이라 "큰 텍스트" 예외에도 해당하지 않는다. |
| 흰 텍스트 on `color.brand`(#4f7bff, 버튼 배경) | **3.74:1** | **미달**(일반 텍스트 기준) | UI 컴포넌트/큰 텍스트 3:1 기준은 통과. 버튼 라벨이 14px bold라 WCAG "큰 텍스트"(18.66px bold) 기준에는 못 미친다. |
| 흰 텍스트 on `color.brandHover`(#3d68e8) | 4.83:1 | 통과 | hover가 오히려 대비는 더 낫다 |
| 흰 텍스트 on `color.text.primary`(다크 CTA) | 19.80:1 | 통과 | |

**이번에 색을 바꾸지 않은 이유**: `color.text.muted`와 `color.brand`는 이번 정리
이전부터 앱 전체에서 이미 쓰이던 브랜드/텍스트 색이다. 대비 수치를 이번에 처음
정확히 측정했을 뿐, 값 자체를 바꾸는 것은 "근거 없는 브랜드 변경"에 해당해 이번
범위에서는 하지 않았다 — 다음 단계(PDF 기반 화면 검수)에서 실제 화면 문제로
판단되면 그때 사용자 확인 후 조정할 항목으로 남긴다.

## 중성 회색·쿨 그레이 혼용 정리 (2026-09-18, 2026-09-18 표현·대비 수정 반영)

홈·요금제/크레딧·요청 작성 도우미·설정·프로필의 회색 텍스트·아이콘·테두리·배경을 실제
computed 값 기준으로 훑었다. 대부분은 이미 슬레이트 계열(`#64748b`/`#9ca3af`/`#e2e8f0`/
`#f8fafc` 등)로 일관돼 있었고, `stone`/`zinc` 같은 실제 웜 계열 Tailwind 클래스나
하드코딩된 웜 hex는 발견되지 않았다(카테고리 배지색·danger 배경·영상 목업 그라디언트처럼
의도된 색은 제외). **주의**: 이 판단은 "B채널이 R채널 이상인가"만으로 내리지 않았다 —
그 기준 하나로는 채도가 0인 완전 무채색(R=G=B)도 다르게 분류되므로, 실제로는 각 색의
채도·색상각과 주변에서 실제로 쓰이는 값과의 시각적 일관성을 함께 봤다.

유일한 실제 불일치는 `color.text.faint`(`#737373`)였다 — **웜톤이 아니라 R=G=B로
채도가 0인 완전 무채색(중성 회색)이다.** 이 자체는 "잘못된 색"이 아니지만, 나머지
회색 토큰이 전부 미세하게 파란기가 도는 슬레이트 계열이어서, 무채색 하나만 섞여 있으면
그 자리만 계열이 갈려 보였다 — 즉 이번 정리는 "웜톤을 걷어낸" 것이 아니라 **중성
회색과 쿨 그레이 계열의 혼용을 하나(쿨 그레이 계열)로 정리**한 것이다. 이 토큰이
실제로 쓰이던 자리(페이지 설명, 가격 옆 단위 "/ 월"·"크레딧", 알림 본문, 사이드바
"이전 대화 더 보기", 종·검색 아이콘)를 역할별로 다시 보니 전부 이미 있는 `secondary`
(설명·읽어야 하는 본문) 또는 `muted`(부가 정보)로 나뉘어서, 별도 토큰을 굳이 유지할
이유가 없었다 — 값을 바꾸는 대신 토큰 자체를 정리하고 각 사용처를 맞는 기존 토큰에
연결했다.

- `color.text.faint` 토큰 제거(`styleTokens.ts`) — 위 이유로 전 사용처를 확인한 뒤
  제거했다(전역 검색으로 재확인, `src/imports/*`의 미사용 Figma 원본 제외).
- `secondary`로 연결: `PageContainer.tsx`의 `PageHeader` 설명, 알림 패널/전체 알림
  화면의 알림 본문 3곳, `IconBell`.
- `muted`로 연결(1차, 이후 대비 재확인에서 정정됨 — 아래 절 참고): 요금제·크레딧의
  "/ 월"·"크레딧" 단위 라벨, 사이드바 "이전 대화 더 보기". `IconSearch`(장식용 아이콘,
  텍스트 아님)는 `muted`로 유지.
- 사용되지 않는 `IconSettings`(App.tsx)는 어디서도 렌더링되지 않아(전역 검색으로 확인)
  손대지 않았다 — 실제 화면에 영향이 없는 죽은 코드까지 이번 범위에서 고치지 않는다.

### 대비 재확인과 정정 (2026-09-18, 같은 날 후속 수정)

1차 정리에서 "기존에 이미 쓰이던 토큰이니 대비 문제는 없다"고 가정한 것이 잘못이었다 —
`color.text.muted`(`#9ca3af`)는 흰 배경 기준 **2.54:1**로 AA 4.5:1에 크게 미달한다
(design-system.md 위쪽 "대비 확인 결과" 절에 이미 측정돼 있던 값과 동일). 반면 옮기기
전 값이던 `color.text.faint`(`#737373`)는 흰 배경에서 **4.74:1**로 AA를 통과하고
있었다 — 즉 1차 정리가 "같은 역할·같은 무게의 값을 옮긴 것"이 아니라 **가독성을
낮추는 회귀**를 만들었다. `color.text.secondary`(`#64748b`)는 흰 배경에서 **4.76:1**로
통과한다.

읽어야 하는 텍스트(가격 옆 단위, 정적 캡션)에 쓰인 `muted`를 전부 `secondary`로
다시 옮겼다 — `muted` 자체(토큰 값)는 바꾸지 않았고(다른 화면 다수가 이미 참조하는
공용 값이라 이번 범위에서 건드리지 않는다), 이번에 새로 옮긴 "읽기용" 사용처만
개별적으로 재조정했다:

| 위치 | 이전 토큰 | 최종 토큰 | 실제 배경 | 대비(변경 전→후) | 브라우저 확인 |
|---|---|---|---|---|---|
| `TopUpTab.tsx` 패키지 행 "크레딧" | `muted`(1차) | `secondary` | 흰색(기본) / `#f8fafc`(호버) / `#f1f5f9`(눌림) / `#f0f5ff`(선택) | 2.54:1 → 4.76:1(기본) · 약 4.3~4.4:1(눌림·선택, 경계 미달 가능) | 미확인 |
| `SubscriptionTab.tsx` 가격 옆 "/ 월" | `muted`(1차) | `secondary` | 흰색(카드 배경 고정) | 2.54:1 → 4.76:1 | 미확인 |
| `CreditBalanceCard.tsx` 잔액 옆 "크레딧" | `muted`(1차) | `secondary` | 흰색 | 2.54:1 → 4.76:1 | 미확인 |
| `SubscriptionBillingTab.tsx` 가격 옆 "/ 월" | `muted`(1차) | `secondary` | 흰색(`SectionCard`) | 2.54:1 → 4.76:1 | 미확인 |
| `App.tsx` 사이드바 "이전 대화 더 보기" | `muted`(1차) | `secondary` | 흰색(사이드바 배경) | 2.54:1 → 4.76:1 | 미확인 |
| `App.tsx` `IconSearch`(장식 아이콘, 텍스트 아님) | `muted`(유지) | `muted`(유지) | 흰색 | 변화 없음(2.54:1) — 텍스트 기준을 아이콘에 그대로 적용하지 않음 | 미확인 |

**남은 한계 — 이번 범위에서 완전히 해결하지 못한 것**: `TopUpTab`의 "크레딧" 단위는
패키지 행의 눌림(`#f1f5f9`)·선택(`#f0f5ff`) 배경에서 `secondary`가 약 4.3~4.4:1로
AA 4.5:1에 근소하게 못 미칠 수 있다(기본·호버 상태는 4.5:1 이상). 이 두 상태의 배경
자체(브랜드 틴트 배경 토큰)를 조정해야 완전히 해결되는데, 이는 텍스트 토큰이 아니라
그 행의 배경 토큰 범위의 문제라 이번 "회색 텍스트 토큰" 정리 범위를 벗어난다 — 별도
확인이 필요한 항목으로 남긴다.

**muted 토큰 자체의 개선 여부**: 이번엔 `color.text.muted` 값 자체(2.54:1)는 바꾸지
않았다. 이 값은 이 다섯 곳 외에도 여러 화면에서 참조되므로, 값을 바꾸려면 전체
사용처와 테마 영향을 별도로 정리해야 한다 — design-system.md 아래 "미해결 또는
미확인" 절의 기존 항목으로 남겨 둔다.

**검증**: `npm run typecheck` / `npm run build` 통과(대비 재수정 이후 재실행 기준).
Hover·focus·selected·disabled 색 로직 자체는 건드리지 않았다(값만 토큰 참조로
교체). **다만 상태 로직을 건드리지 않았다는 사실이 시각적 회귀가 없다는 뜻은
아니다** — 이번에도 브라우저 자동화 도구가 없어 기본·hover·focus·selected·disabled
상태의 실제 렌더링을 육안으로 확인하지 못했다. 위 표의 "브라우저 확인" 열은 전부
미확인으로 남겨 둔다 — `npm run dev`로 특히 `TopUpTab`의 눌림/선택 상태를 직접 확인
해 주기를 요청한다.

## 남은 항목 — 해결 완료 / 의도적으로 유지하는 예외 / 미해결·미확인

### 해결 완료
1. **브랜드 블루 통일** — 서비스 내부에서 같은 역할로 쓰이던 `#2563eb`/`#1d4ed8`/`#eff5ff`를
   `color.brand`/`color.brandHover`/`color.surface.accent`로 교체(위 "적용 범위" 참고).
2. **`CreditHistoryScreen` 토큰 적용** — 색상·라운드·그림자·다크 CTA 버튼을 토큰/공용
   `Button`으로 교체. 필터·정렬·리스트 렌더링·"+크레딧 충전" 라우팅 등 기존 동작은
   그대로다(Playwright로 재확인).
3. **Tabs/ScrollableChips 접근성** — 요금제 페이지 탭에 한해 `role=tablist/tab`,
   `aria-selected`, `aria-controls`, 롤빙 tabIndex, 방향키/Home/End, 포커스·선택 시각
   구분을 구현. 필터 용도의 다른 사용처는 기존 동작 그대로(기본값 변경 없음).
4. **Pretendard 800/900** — 실제 로딩·렌더링 확인 완료(위 절 참고).
5. **theme.css/shadcn 변수 재검증** — 간접 참조(Tailwind 유틸리티, `ui/tooltip.tsx`)까지
   다시 확인해 "전부 미사용"이라던 이전 기록을 정정했다(위 절 참고).
6. **Button hover/focus-visible 재발 방지 확인** — 이번 변경들 이후에도 두 문제가
   재발하지 않는 것을 Playwright로 재검증했다(별도 스크립트로 실제 hover 전후
   backgroundColor, 실제 키보드 포커스 후 box-shadow 값을 다시 읽어 확인).
7. **Button 로딩 안정성** — 로딩 시 버튼 너비가 흔들리던 문제를 고치고(라벨을
   `visibility:hidden`으로 자리만 유지), `sr-only` 문구로 보조기술에도 상태를 알리게 함.

### 의도적으로 유지하는 예외 (문제 아님, 다시 확인할 필요 없음)
- **다크 CTA 색상** — 서비스 `#0a0a0a`(`color.text.primary`, `Button`의 `dark` variant가
  재사용)로 통일 완료. 랜딩의 `#101828`은 랜딩 전용으로 그대로 둔다.
- **`SettingsModal`의 "새로고침" 버튼** — 44px(`h-11`, `controlHeight.md`와 같은 값·역할) →
  36px(`wide:h-9`, 1200px 이상)로 줄어드는 반응형 높이를 그대로 유지한다. 이 버튼
  하나 때문에 공용 `Button`에 새 size를 추가하지 않았다. 접근 가능한 이름(아이콘+
  보이는 텍스트 "새로고침")과 클릭 영역은 이상 없음을 확인했다. 부모에 `<form>`이
  없어 `type` 속성이 없어도 의도치 않은 제출은 발생하지 않는다.
- **`ScrollableChips`의 필터 용도 사용처(CreditHistoryScreen 등)** — `role="tab"`을
  강제하지 않고 기존 버튼 방식 그대로 둔다. 필터는 목록을 좁히는 것이지 패널을
  바꾸는 게 아니다.
- **theme.css의 미사용 shadcn 변수·컴포넌트** — 참조가 없는 것을 확인했지만, 지금
  당장 지울 이유가 없어 그대로 둔다(위 "theme.css와 shadcn 변수" 절 참고).
- **`CreditHistoryScreen`의 `0px 1px 4px rgba(0,0,0,0.04)` 그림자** — `shadow.card`와
  비슷하지만 값이 달라 억지로 합치지 않고 그대로 뒀다.

### 미해결 또는 미확인
- **대비 미달 2건** — `color.text.muted`(2.54:1), 브랜드 블루 버튼의 흰 텍스트(3.74:1).
  값 변경은 사용자 확인이 필요해 이번엔 진행하지 않았다(위 "대비 확인 결과" 참고).
- **`CreditHistoryScreen`의 `#3b63f6`** — 이번에 처음 발견한 네 번째 블루 계열(양수
  금액/링크성 텍스트 색). 브랜드 블루 정리 대상(`#2563eb` 계열)에 포함되지 않아
  손대지 않았다 — 통일 여부는 후속 판단 필요.
- **랜딩 CTA 블루(`#155dfc`)/다크(`#101828`)와 서비스 값의 최종 통일 여부** — 이번엔
  "서비스 내부 통일"까지만 진행했고, 랜딩과 서비스를 하나로 합칠지는 다음 단계
  (PDF 기반 화면 검수) 이후 판단 대상으로 남긴다.
- **`LandingFormCard`/`DetailFormCard` 섹션 칩의 tab 접근성** — 패널 전환 성격이지만
  이번 범위 밖이라 `role="tablist"`를 적용하지 않았다.
- **Pretendard 800/900의 오프라인/CDN 차단 시나리오** — jsDelivr 접근이 막힌 환경에서
  합성 볼드로 폴백되는지는 이번 네트워크 환경에서 확인할 수 없었다.
- **폰트 디자인 품질(가변 폰트 800/900 마스터 보간의 시각적 정교함)** — 브라우저
  API로는 확인 불가능한 영역이라 미확인으로 남긴다.

## 템플릿 선택 (2026-10-01)

요청 도우미 2단계는 왼쪽 "사용할 템플릿"(35%, `SelectedTemplateCard`: 선택한 템플릿 이미지·이름·설명 하나)과
오른쪽 "정리한 요청"(65%)이다. 여러 템플릿 비교는 "템플릿 변경" 선택창(`TemplatePickerDialog`: 데스크톱 최대 1280×910 고정(화면 기준, 여백 24px; 본문만 스크롤),
모바일 전체 화면, 동일 규격 카드 그리드 `TemplateGrid`(썸네일 4:3 contain), 하단 취소/이 템플릿 적용)이 맡고, 크게 보기는 같은 창의 상세 화면으로 전환한다.
새 토큰은 없고 기존 `color`/`radius`/`Button`만 재사용한다. 이미지는 `width:100%; height:auto`로 자르지 않으며,
카드 테두리는 선택 전후 모두 2px(색만 변경). `?templatePreview=1`일 때만 `templatePreviewSamples.ts`의
미확인 출처 샘플 이미지가 목록에 덧붙는다(실제 템플릿 아님).

## 작업 카드 제목·카테고리 버튼 굵기 (2026-10-01)

홈 작업 카드(`TaskGrid`의 grid·strip·compact) 제목은 모두 600·`color.text.primary`·자간 -0.1px(크기 유지).
상단 카테고리 버튼은 기본 500, 선택 600(색·테두리로도 구분). Pretendard Variable(45~920)이 실제 로드돼 합성 굵기 아님.

## 요청 작성 도우미 질문 세트·레이아웃 (2026-10-15 최종)

- 전제: 템플릿은 디자인만 정한다. 선택형 입력은 전부 드롭다운(라디오·칩 금지, 높이 고정). 생성 엔진이 제어하지 못하는 값은 묻지 않는다.
- PPT 검수는 요청 작성 도우미의 만들 작업 목록에서 뺀다(`EXCLUDED_TASK_IDS`, 홈 등 다른 목록에는 남는다).
- 요청 작성 4행: ① 만들 작업(전폭) ② 주제(유일한 필수 `*`, 1~3줄 자동 확장 — `InputField` multiline + `fieldOverflow.title`, 8자 미만이면 "조금 더 자세히" 힌트, 입력칸 아래 예시 링크 없음)
  ③ 꼭 담아야 할 내용(선택, `InputField` multiline — 3줄에서 시작해 8줄까지 확장·넘치면 칸 안 스크롤, 포커스와 무관한 높이, 글자 수 제한 없음, "선택" 표기 없음(필수 `*`는 주제에만)·테두리는 다른 칸과 같음, AI가 채우지 않음 —
  워크스페이스의 `contentCard` ★ 카드에 미리 채워진다) ④ 형식축 + 참고 자료(2열). 형식축은 `requestCards.ts` `FORMAT_BY_TASK`
  드롭다운(기본값 선택·빈 선택지 없음, 필요하면 `?` 툴팁·아래 회색 `helper` 한 줄). 생성 엔진이 실제로 제어하는 값만 둔다 —
  문서 분량·발표 시간·상세페이지 올릴 곳·슬라이드 수는 두지 않는다. 한 라벨 아래 입력이 둘일 수 있다(`FormatDef.fields`).
  컴포넌트 규칙: 값끼리 의미가 다른 소수 선택지 → 드롭다운, 연속 수치·범위가 넓은 값 → 스테퍼(`NumberStepper`). 스테퍼는
  768px 미만 [ − | 숫자 | + ](버튼 폭 52 · 높이 48, 1px 구분선 #E6EAF2, 숫자 가운데 18px 굵게·단위 13px #8A909C, 누르는 동안 #F0F3F8),
  768px 이상 오른쪽 끝 폭 36px ▲▼ 세로 스택(글리프 10px #9AA0AB, hover #F0F3F8, 숫자 왼쪽 정렬). 길게 누르면 500ms 뒤 120ms 간격 연속 증감,
  경계값 버튼은 opacity .3 + pointer-events none, 직접 입력(inputmode numeric) 후 blur 때 범위 보정 + 회색 안내. 상자형 입력 높이는 모든 폭에서 48px(`--rh-field-h`).
  타이포·간격(2026-10-16): 라벨 `typography.formLabel` · 값 `formValue` · placeholder `formPlaceholder`(위 표). 라벨↔입력 8px(`--rh-label-gap`),
  필드 간 24px(`--rh-field-gap`). 서술형 칸은 줄 높이 22px · 위아래 여백 12px(1줄일 때 48px). 폼 폭은 두 단계 모두 화면 폭을 채우다 `pageContainerWidth`(1120px)에서 멈춘다(태블릿 구간 `--home-container` 720px는 쓰지 않음)
  — 600px 가운데 열로 좁혔다가 원래 화면과 비율이 달라져 같은 날 되돌렸다. 카드 안쪽 여백 24px · 640px 미만 16px. 제목 22px/800, 설명 13.5px(원래 값).
  모바일은 `--gap-screen-x`(16px) 여백 안에서 카드가 화면 폭을 채운다.
  영상은 "영상 형식" = 비율 드롭다운(세로 9:16 기본/정사각/가로) + 길이 스테퍼(폭 112px, 두 칸 간격 6px < 참고 자료와의 열 간격 16px). 고른 길이 ÷ 3초가 워크스페이스 장면 흐름 후보의 장면 수 상한이고 자막 카드 안내도 길이를 따른다.
  브로셔 장수는 소개 문구 분량(2장 이하 한 줄)과 "장별 구성" 카드 후보를 바꾼다. 사진·그림은 "화면 비율" 정사각(1:1)/세로(4:5)/가로(16:9)/세로 긴(9:16). 선택지 라벨에 플랫폼 이름·엔진이 못 지키는 수치를 쓰지 않고, 필요하면 `?` 툴팁에 둔다.
  비율 `?` 툴팁(2026-10-16)은 작업별로 그 비율을 어디에 쓰는지만 한 줄로("~해요" 체, `FORMAT_BY_TASK`의 `tooltip`) — 비율 필드는 사진·그림과 숏폼·홍보 영상 두 작업에만 있다.
  사진·그림 "정사각은 피드, 가로는 배너, 세로는 스토리에 맞아요." / 영상 "세로는 쇼츠·릴스, 가로는 유튜브에 맞아요."
  "빈 템플릿일 때만 적용" 예외는 툴팁에 두지 않고, 2단계 "정리한 요청"에서 템플릿을 골랐을 때만 비율 값 아래에 "템플릿 비율을 따라요"(필드의 `templateNote`)를 붙인다. 형식축이 없는 작업(워드·한글·엑셀)은 참고 자료가 왼쪽, 오른쪽은 비운다(전폭으로 늘리지 않음).
  참고 자료는 한 칸 — 파일 첨부는 입력칸 안쪽 오른쪽 클립 아이콘, 붙인 링크·파일은 칸 안 칩(×로 제거).
  2열의 라벨 줄은 높이 22px로 맞춘다. 상단 단계 표시·하단 CTA는 `sticky`.
- 필수 검증(2026-10-16): "템플릿·요청 확인" 버튼은 비활성으로 막지 않는다. 하단 버튼 옆 안내("주제를 적어주세요")는 두지 않는다 — 버튼을 눌렀을 때
  빈 필수 칸 바로 아래에 오류 문구(만들 작업을 골라주세요 / 주제를 적어주세요, `--destructive`)를 띄우고 **첫 번째 빈 칸**으로 스크롤·포커스(`requiredFields` 순서,
  필수 칸이 늘면 한 줄 추가). 오류 문구는 그 칸을 고치기 시작하면 바로 사라진다. 칸에는 `aria-invalid`·`aria-describedby`(오류 문구 id), 문구는 `role="alert"`.
  오류가 있는 칸은 포커스 중에도 테두리·링이 오류색(theme.css `.ui-field[aria-invalid="true"]:focus-visible`). 폼 상단 서브텍스트는 그대로.
- 템플릿·요청 확인(2단계): 왼쪽 "사용할 템플릿"(35%, `SelectedTemplateCard`) + 오른쪽 "정리한 요청"(65%). 사용할 템플릿에는 주제의 업종·키워드와
  맞는 실제 템플릿을 추천으로 먼저 보여 주고(`data/templateRanking.ts` `rankTemplatesForTopic` 1순위), 마음에 안 들면 "템플릿 변경" 창에서 같은 순서의 목록으로 바꾼다.
  정리한 요청은 주제 · 작업·템플릿 · 형식 값(필드마다, 영상은 비율·길이 2열) · 꼭 담을 내용 · 참고 자료(적었을 때만).
- 형식 값(2026-10-15 코드 검증 기준, `FORMAT_BY_TASK`): 생성 툴이 실제로 소비하는 인자만 받는다.
  카드뉴스 카드 수(스테퍼 1~20, 5) · 영상 비율(9:16/1:1/16:9, 빈 템플릿일 때만 적용) + 길이(스테퍼 5~15초, 15) ·
  랜딩 섹션 수(스테퍼 1~30, 8) · 사진 비율(1:1/16:9/9:16, 빈 템플릿에서만 적용 — 4:5 없음) · 이미지형 발표자료 슬라이드 수(스테퍼, 6) · 브로셔 장수(스테퍼, 6).
  없음: PPT·웹 발표(ppt_generate에 슬라이드 수 인자 없음, 템플릿이 장수 고정) · 상품 상세페이지 · 워드·한글 · 엑셀 · 논문 초안. 브로셔 비율(9:16 강제)·영상 해상도는 묻지 않는다.
  형식 값이 없는 작업은 4행에 참고 자료만 절반 폭.
- 워크스페이스 카드(`components/workspace/RequestCardsPanel.tsx`): ◆ = 후보 + "직접 입력"을 드롭다운으로(후보 전부 12자 이하면 반 폭, 아니면 전폭),
  첫 후보 기본·비울 수 없음. ★ = 후보·예시 없는 빈 칸(비우면 `excluded`로 결과물에서 뺀다), 연속한 짧은 ★는 한 장에 2열.
  상단 고정 "주제 ○○○ [수정]", 우측 "전부 추천대로", 진행 점, "요청 내용 보기" 기본 접힘. 요청 작성의 형식축 값은 카드에서 다시 묻지 않는다.
- 넘침 규칙: 요청 작성 폼과 워크스페이스 카드 모두 공용 `InputField`(위 "공통 컴포넌트" 절, 2026-10-16). 높이 변화는 `motion.fast` transition —
  거울 textarea로 재서 px→px로만 바뀐다, resize 핸들 없음. 주제·꼭 담을 내용 모두 글자 수 제한 없음.
  짧은 사실 값만 1줄 input + 40자 제한.
- 카드 생김새는 상세 프롬프트 카드(App.tsx `CARD_SHELL`·`FcHeader`·`CardFooter`) 값을 그대로 쓴다.

## 홈 첫 방문 온보딩 (2026-10-30)

- 코드는 `src/app/components/onboarding/` 한 폴더. 단계 데이터(대상·문구·스크롤·말풍선 위치·모바일 덮어쓰기)는 `onboardingSteps.ts` 에서만 고친다.
- 대상은 클래스가 아니라 `data-onboarding` 속성으로 잡는다: `search`·`search-input`(HomeSearch) · `editor-row`(EditorQuickLinks) · `task-grid-title`(TaskGrid).
- **3단계, 페이지 순서대로 위→아래 한 방향**: 검색창 → 무료 편집기 줄(고치기) → 작업별로 시작하기. 인기 템플릿·요청 도우미·내 작업은 단계에 넣지 않는다
  (내 작업은 사이드바에 이름이 있고 첫 방문자에겐 비어 있다 — 대신 '내 작업' 빈 화면에 "아직 만든 작업이 없어요. 홈에서 첫 작업을 만들어 보세요." + 홈으로 가기).
- 마지막 단계(작업별로 시작하기): 섹션 제목이 위에 오게 스크롤 → 제목부터 **화면 아래 끝까지** 밝히고, 아래 120px 은 잘린 선 대신 서서히 흐려진다
  (`extendToViewportBottom`). 말풍선은 흐려진 띠 안 오른쪽 아래(모바일은 가운데)에 놓아 밝은 카드를 가리지 않는다.
  마지막 버튼 '시작하기'는 스크롤 없이 오버레이만 걷는다 — 끝나는 자리 = 고를 수 있는 자리.
- 말풍선: 머리줄 [단계 점 + n/3 · 건너뛰기(늘 같은 자리)], 아래 [이전 · 다음] — 1단계에서도 '이전' 자리는 비워 둔다. 버튼은 공용 `Button`(secondary/primary, 높이 36).
  오버레이 클릭 = 다음, ESC = 건너뛰기. 스포트라이트에는 위치 전환 애니메이션을 두지 않는다(스크롤 중 대상을 늦게 따라감).
- 첫 방문 1회 `localStorage["ddalkkak.onboarding.homeSeen"]`, 홈 렌더(load·글꼴·첫 대상) 뒤 600ms. 다시 보기 = 프로필 메뉴 '튜토리얼 다시 보기'
  (예전 작성 화면 투어 `common/TutorialTour.tsx` 는 이 진입점에서 빠짐).
- 요청 도우미 힌트(`RequestHelperHint`): 검색창이 비어 있고 포커스된 채 3초 → 검색창 아래 1회. 세션당 1회 `sessionStorage["ddalkkak.onboarding.helperHintShown"]`.
- 이벤트는 `onboarding/track.ts` 의 `track()` 한 곳(아직 분석 도구 없음 — `ddalkkak:track` CustomEvent + 개발 모드 로그).

## AI 작업 규칙 (CLAUDE.md에서 참조)

- 새 화면을 만들기 전에 이 문서와 `src/app/styleTokens.ts`, `src/app/components/common/`을 먼저 확인한다.
- 기존 토큰이 있는 값(색상/타이포그래피/라운드/그림자/버튼 높이)은 임의의 hex·px를 새로 만들지 않는다. 없는 값이면 이 문서에 먼저 추가한다.
- `Button`/`Tabs`/`ScrollableChips` 등 공통 컴포넌트를 변경할 때는 실제 사용처(`grep`으로 import 위치 확인)에 미치는 영향을 먼저 살펴본다.
- 새로운 기준(토큰, 컴포넌트, 규칙)을 추가하면 이 문서도 함께 갱신한다.
