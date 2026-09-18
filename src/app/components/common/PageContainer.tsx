import type { ReactNode } from "react";

import { color, f, pageContainerWidth, typography } from "@/app/styleTokens";

/**
 * 크레딧 관련 화면(요금제 및 크레딧 · 크레딧 사용 내역 · 구독 및 결제 관리) 공용 페이지 셸.
 * 세 화면이 각자 <main>+컨테이너 div를 따로 만들면서 max-width·좌우 padding·상단 여백이
 * 조금씩 어긋났던 문제(육안 비교로는 안 보이던 px 단위 오차)가 있었다 — "요금제 및 크레딧"
 * 페이지를 기준 삼아 이 컴포넌트로 통일해서, 셋 다 같은 값을 쓴다는 걸 코드로 보장한다.
 */
export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
      <div className="w-full mx-auto px-4 md:px-6 pt-5 pb-12 flex flex-col gap-6" style={{ maxWidth: pageContainerWidth }}>
        {children}
      </div>
    </main>
  );
}

export function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h1 style={typography.pageTitle}>{title}</h1>
      <p style={{ ...f, fontWeight: 400, fontSize: 13.5, color: color.text.secondary, marginTop: 4 }}>{description}</p>
    </div>
  );
}
