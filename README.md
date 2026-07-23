# 딸깍넷 — Mobile version design

딸깍넷 AI 통합 서비스의 **모바일 웹 UI** 프로토타입입니다.
문서·PPT·이미지·영상·랜딩페이지·상세페이지 등을 대화형으로 생성하는 흐름을 모바일 화면 기준으로 구현했습니다.

주요 화면
- 홈 / 카테고리별 템플릿 갤러리 (이미지·랜딩·PPT·영상·문서·서식·오디오)
- 워크스페이스(대화형 생성 → 결과물 뷰어: 문서·영상·이미지·슬라이드·웹)
- 내 작업 / 즐겨찾기 / 크레딧 사용 내역 / 알림 / 설정

## 기술 스택

- **Vite** 6 (빌드 · 개발 서버)
- **React 18**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **shadcn/ui** (Radix UI 기반 컴포넌트) · **lucide-react** 아이콘
- TypeScript

## 실행 방법

```bash
npm i        # 의존성 설치
npm run dev  # 개발 서버 실행 (http://localhost:5173)
```

프로덕션 빌드:

```bash
npm run build
```

## 폴더 구조

```
.
├── index.html               # 엔트리 HTML
├── src/
│   ├── main.tsx             # React 진입점
│   ├── app/
│   │   ├── App.tsx          # 전체 화면·라우팅·워크스페이스 로직
│   │   └── components/
│   │       ├── ui/          # shadcn/ui 컴포넌트
│   │       └── figma/       # 이미지 폴백 등 유틸 컴포넌트
│   ├── imports/             # Figma에서 내보낸 SVG 경로·에셋
│   └── styles/              # theme / tailwind / fonts / globals CSS
├── guidelines/              # 디자인 가이드라인 문서
├── vite.config.ts
├── postcss.config.mjs
└── package.json
```

> 원본 디자인: Figma — Mobile version design
