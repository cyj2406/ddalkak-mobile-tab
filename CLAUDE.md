# CLAUDE.md

딸깍넷(main-redesign) 프로젝트에서 작업할 때 참고할 지침.

## 디자인 가이드

UI를 만들거나 고칠 때는 먼저 [`docs/design-system.md`](docs/design-system.md)를 확인한다.
토큰 값, 공통 컴포넌트 사용법, 적용 범위, 남은 예외는 전부 그 문서에 있다 — 여기서는
중복 기재하지 않는다. **이 문서에 적힌 것 이상으로 디자인 시스템이 서비스 전체에
적용됐다고 가정하지 말 것** — `docs/design-system.md`의 "적용 범위" 절에 명시된
화면에만 적용돼 있다.

### 유지보수 원칙

- 새 작업을 시작하기 전에 기존 공통 컴포넌트(`src/app/components/common/`)와 토큰
  (`src/app/styleTokens.ts`)을 먼저 확인하고, 있는 것을 재사용한다.
- 공통 컴포넌트나 전역 스타일을 변경할 때는 실제 사용처에 미치는 영향을 먼저 확인한다.
- 새로운 기준(토큰, 컴포넌트, 규칙)을 추가하면 `docs/design-system.md`도 함께 갱신한다.
