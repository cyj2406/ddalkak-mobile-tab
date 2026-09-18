import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { color, f, radius } from "@/app/styleTokens";
import type { PolicyItem } from "./pricingData";

/**
 * 구매 확인 화면 아래 정책 안내 — "결제 전에 확인해 주세요"(월 구독) /
 * "구매 전에 확인해 주세요"(추가 충전) 처럼 트리거 하나짜리 아코디언 안에 정책
 * 항목을 목록으로 담는다. 실제 Radix 아코디언(components/ui/accordion.tsx)을
 * 재사용하되, shadcn 기본 회색 대신 이 페이지 토큰으로 덮어써 톤이 갈리지 않게 한다.
 *
 * 항목(PolicyItem[])은 실제로 확정됐거나(자동결제·해지 문구는 기존 화면에서 이미
 * 쓰던 문구를 그대로 재사용) 아직 미정임을 그대로 밝힌 것만 둔다 — 가격·제공량처럼
 * 검토 전인 값을 여기서 임의로 확정 짓지 않는다.
 */
export function PurchasePolicyAccordion({ title, items }: { title: string; items: PolicyItem[] }) {
  return (
    // overflow:hidden — 헤더의 연한 회색이 안쪽 모서리까지 radius를 따라 자연스럽게
    // 잘리게 한다(카드 전체를 회색으로 만들지 않고 헤더/본문 배경을 다르게 두는 핵심).
    <div style={{ border: `1px solid ${color.border.default}`, borderRadius: radius.card, overflow: "hidden", background: color.surface.default }}>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="policy" className="border-b-0">
          {/* 헤더 = trigger 전체 — 연한 neutral gray(surface.subtle, 페이지 배경보다 한 단
              어두운 정도)로 "눌러서 여닫는 영역"임을 표시한다. hover는 같은 회색 계열에서
              한 단계만 더(이 파일 다른 곳의 구분선·선택 배경과 같은 #f1f5f9) 진해진다.
              기본 트리거의 items-start를 items-center로 덮어써 제목·화살표를 수직 중앙
              정렬한다. */}
          <AccordionTrigger
            // [&>svg] — 트리거 안 기본 셰브론(ui/accordion.tsx의 ChevronDownIcon)이
            // shadcn의 미사용 text-muted-foreground를 그대로 쓰고 있어, 같은 줄의
            // focus-visible:ring-[#4f7bff]와 같은 방식으로 color.text.secondary 값을
            // 직접 지정해 이 페이지 토큰 체계로 맞춘다(공통 아이콘 색).
            className="items-center hover:no-underline hover:bg-[#f1f5f9] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#4f7bff] rounded-none transition-colors [&>svg]:text-[#64748b]"
            style={{ ...f, fontWeight: 500, fontSize: 14.5, color: color.text.secondary, letterSpacing: "-0.3px", padding: "16px 20px", background: color.surface.subtle, cursor: "pointer" }}
          >
            {title}
          </AccordionTrigger>
          {/* AccordionContent는 자체 padding(pt-0 pb-4)을 내부 div에 이미 갖고 있어 style이
              아니라 className으로 덮어써야 실제로 적용된다 — style은 바깥 Radix 래퍼에만
              닿는다. 헤더와 같은 좌우 20px로 맞춰 제목·본문 시작선을 통일한다. */}
          <AccordionContent className="px-5 pt-4 pb-5" style={{ borderTop: `1px solid ${color.border.default}` }}>
            <ul className="flex flex-col gap-4">
              {items.map((item) => (
                <li key={item.id}>
                  <p style={{ ...f, fontWeight: 700, fontSize: 14, color: color.text.primary }}>{item.title}</p>
                  <p style={{ ...f, fontWeight: 500, fontSize: 13, color: color.text.secondary, lineHeight: 1.7, marginTop: 3 }}>{item.body}</p>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default PurchasePolicyAccordion;
