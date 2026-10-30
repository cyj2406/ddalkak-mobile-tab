/**
 * 카드뉴스 브리프 편집 화면(2026-10-29) — 홈 "작업별로 시작하기"의 카드뉴스 카드로 들어온다.
 *
 * 화면 본체는 디자이너 전달용 별도 프로젝트(Downloads/디자이너전달/cardnews-brief-editor)를 빌드한 결과
 * (public/cardnews-editor/)를 iframe 으로 띄운다. 그 프로젝트는 React 19·자체 테마 변수를 써서 이 앱(React 18,
 * theme.css)에 코드로 합치면 충돌하므로 분리해 둔다. `embed=1`이면 디자이너용 도구줄이 숨고, `id`로 샘플을 고른다.
 * 갱신: 그 프로젝트에서 `npx vite build --base=/cardnews-editor/ --outDir <이 레포>/public/cardnews-editor --emptyOutDir`.
 * 카드 HTML 이 /placeholder/*.svg 를 절대 경로로 부르므로 public/placeholder/ 에도 같은 파일을 둔다.
 */
export default function CardNewsEditorScreen({ templateId = "cn-tmpl-29" }: { templateId?: string }) {
  return (
    <main className="flex-1 flex flex-col min-h-0">
      <iframe
        title="카드뉴스 내용 편집"
        src={`/cardnews-editor/index.html?embed=1&id=${encodeURIComponent(templateId)}`}
        className="flex-1 w-full border-0"
      />
    </main>
  );
}
