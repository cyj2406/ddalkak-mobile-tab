import svgPaths from "./svg-p5hcv2ch3m";

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">프롬프트 카드 대시보드(템플릿)</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">카드뉴스 · 1단계 주제 입력 — 상세</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p2535ca80} id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pf238580} id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p27453880} id="Vector_3" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9e34f00} id="Vector_4" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">주제 입력</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">내용 편집</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">생성</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container8 />
        <Container9 />
        <Container10 />
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background />
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p32ed3480} id="Vector" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[13.5px] w-full">
        <p className="leading-[normal]">미리보기 보기</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Container">
      <Svg2 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f8f9fc] min-h-[48px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center min-h-[inherit] px-[15px] py-[13px] relative size-full">
          <Svg1 />
          <Container14 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="relative rounded-[15px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background1 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p6195900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M7.5 10V7.5M7.5 5H7.50625" id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-px relative shrink-0 w-[15px]" data-name="SVG:margin">
      <Svg3 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <SvgMargin />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[18.75px]">주제만 적으면 AI가 카드뉴스를 만들어드려요</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">주제 / 토픽</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">자동 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#3b5bfe] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[14px] pr-[2px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#e8eeff] content-stretch flex gap-[6.01px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c5d3ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container21 />
      <Background2 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">원문 사용</p>
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#cbd0d8] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] pr-[14px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f4f5f7] content-stretch flex gap-[6px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container22 />
      <Background3 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_6.01px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[22.48px]">예) 2026년 꼭 읽어야 할 책 5권</p>
        </div>
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div className="bg-white min-h-[60px] relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[37.47px] pt-[14px] px-[17px] relative size-full">
          <Container23 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[4px] pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Textarea />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">폰트</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container26 />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] whitespace-nowrap">
          <p className="leading-[normal]">기본 (템플릿 폰트)</p>
        </div>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container27 />
          <Svg4 />
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">포인트 색</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[#efefef] flex-[1_0_0] min-h-px opacity-0 relative w-full" data-name="Input">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[5px] py-[2px] relative size-full">
          <div className="bg-[#3b63f6] h-[34px] relative shrink-0 w-full" data-name="Background+Border">
            <div aria-hidden className="absolute border border-[#777] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Label() {
  return (
    <div className="bg-[#3b63f6] content-stretch flex flex-col h-[48px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[54px]" data-name="Label">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Input />
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto pb-[2px] pt-px relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b2440] text-[13.4px] w-full">
          <p className="leading-[normal]">#3B63F6</p>
        </div>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[48px] min-w-px relative rounded-[12px]" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[17px] py-[15px] relative size-full">
          <Container32 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Label />
      <Input1 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container31 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">슬라이드 수</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] whitespace-nowrap">
          <p className="leading-[normal]">5장</p>
        </div>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container36 />
          <Svg5 />
        </div>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container34 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start max-h-[inherit] pb-[28px] pt-[18px] px-[18px] relative size-full">
          <Border />
          <Container16 />
          <Container17 />
          <Container24 />
          <Container28 />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[64.16999816894531px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">내용 생성</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center p-[15px] relative size-full">
          <Svg6 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[14px] pt-[15px] px-[18px] relative size-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder />
        <Container13 />
        <BackgroundHorizontalBorder />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container4 />
      <BackgroundBorderShadow />
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">카드뉴스 · 2단계 내용 편집 — 상세</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p2535ca80} id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pf238580} id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p27453880} id="Vector_3" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p9e34f00} id="Vector_4" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background4() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg7 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">주제 입력</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">내용 편집</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">생성</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container43 />
        <Container44 />
        <Container45 />
        <Container46 />
        <Container47 />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background4 />
          <Container41 />
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p32ed3480} id="Vector" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[13.5px] w-full">
        <p className="leading-[normal]">미리보기 보기</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Container">
      <Svg9 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f8f9fc] min-h-[48px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center min-h-[inherit] px-[15px] py-[13px] relative size-full">
          <Svg8 />
          <Container49 />
          <Container50 />
        </div>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="relative rounded-[15px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background5 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p6195900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M7.5 10V7.5M7.5 5H7.50625" id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin1() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-px relative shrink-0 w-[15px]" data-name="SVG:margin">
      <Svg10 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <SvgMargin1 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[18.75px]">각 항목을 편집하고 생성하세요</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">커버</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="absolute bg-[#eceffe] content-stretch flex h-[36px] items-center left-0 px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#3b5bfe] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">본문 1</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[62.48px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">본문 2</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[134.06px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">본문 3</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[207.48px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container56 />
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">마무리</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[281.28px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container57 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[40px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder4 />
      <BackgroundBorder5 />
      <BackgroundBorder6 />
      <BackgroundBorder7 />
      <BackgroundBorder8 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">제목</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container60 />
    </div>
  );
}

function Container61() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[normal]">올해의 필독서 가이드</p>
        </div>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container61 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container59 />
      <Input2 />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">이미지 설명</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container64 />
    </div>
  );
}

function Container65() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.705px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[22.48px] mb-0">따스한 햇살이 비치는 창가 서재에 책들이 가지런히 꽂</p>
          <p className="leading-[22.48px]">혀있는 전경</p>
        </div>
      </div>
    </div>
  );
}

function Textarea1() {
  return (
    <div className="bg-white min-h-[60px] relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[15px] pt-[14.235px] px-[17px] relative size-full">
          <Container65 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[4px] pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <Textarea1 />
    </div>
  );
}

function Container48() {
  return (
    <div className="max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start max-h-[inherit] pb-[28px] pt-[18px] px-[18px] relative size-full">
          <Border1 />
          <Container51 />
          <Container52 />
          <Container58 />
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p19b17dc0} id="Vector" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white min-h-[50px] relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-end justify-center min-h-[inherit] pb-[17.5px] pt-[16px] px-[17px] relative size-full">
        <Svg11 />
        <div className="[word-break:break-word] flex flex-col font-['Arial:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5262] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">이전</p>
        </div>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[94.16999816894531px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">카드뉴스 생성</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center px-[15px] py-[15.5px] relative size-full">
          <Svg12 />
          <Container66 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start pb-[14px] pt-[15px] px-[18px] relative size-full">
        <Button1 />
        <Button2 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder1 />
        <Container48 />
        <BackgroundHorizontalBorder1 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container39 />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[44px] items-start relative shrink-0" data-name="Container">
      <Container3 />
      <Container38 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">영상 · 1단계 주제 입력 — 상세</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container70 />
        </div>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M16.5 6L12 9L16.5 12V6Z" id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p23622800} id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background6() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg13 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">주제 입력</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">장면 편집</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">생성</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container73 />
        <Container74 />
        <Container75 />
        <Container76 />
        <Container77 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background6 />
          <Container71 />
          <Container72 />
        </div>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p32ed3480} id="Vector" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[13.5px] w-full">
        <p className="leading-[normal]">미리보기 보기</p>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Container">
      <Svg15 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f8f9fc] min-h-[48px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center min-h-[inherit] px-[15px] py-[13px] relative size-full">
          <Svg14 />
          <Container79 />
          <Container80 />
        </div>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="absolute left-[18px] right-[18px] rounded-[15px] top-[18px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background7 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_2px_3px_rgba(59,91,254,0.28)] flex-[1_0_0] min-w-px relative rounded-[9px] self-stretch" data-name="Background+Shadow">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[11px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[13.5px] text-center text-white whitespace-nowrap">
            <p className="leading-[normal]">자세히 만들기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="flex-[1_0_0] min-w-px relative rounded-[9px] self-stretch" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[11px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13.5px] text-center whitespace-nowrap">
            <p className="leading-[normal]">바로 만들기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background8() {
  return (
    <div className="absolute bg-[#edeff3] content-stretch flex gap-[4px] h-[48px] items-start justify-center left-[18px] p-[5px] right-[18px] rounded-[13px] top-[88px]" data-name="Background">
      <BackgroundShadow />
      <Container81 />
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p1f0a5b80} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
          <path d={svgPaths.p3f6c7370} id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">장면을 하나씩 확인하고 다듬은 뒤 생성해요</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[18px] right-[18px] top-[148px]" data-name="Container">
      <Svg16 />
      <Container83 />
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] right-[18px] top-[187px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">내용</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">주제</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">자동 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Background9() {
  return (
    <div className="bg-[#3b5bfe] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[14px] pr-[2px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#e8eeff] content-stretch flex gap-[6.01px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c5d3ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container89 />
      <Background9 />
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">원문 사용</p>
        </div>
      </div>
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#cbd0d8] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] pr-[14px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#f4f5f7] content-stretch flex gap-[6px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container90 />
      <Background10 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_6.01px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorder9 />
      <BackgroundBorder10 />
    </div>
  );
}

function Container86() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container87 />
      <Container88 />
    </div>
  );
}

function Container91() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 군고구마 먹는 강아지</p>
        </div>
      </div>
    </div>
  );
}

function Input3() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container91 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[218px]" data-name="Container">
      <Container86 />
      <Input3 />
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p>
          <span className="leading-[normal]">{`추가 설명 `}</span>
          <span className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[normal] text-[#98a2b3]">(선택)</span>
        </p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[22.48px]">분위기, 등장 요소, 흐름을 자유롭게 적어주세요</p>
        </div>
      </div>
    </div>
  );
}

function Textarea2() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[59.94px] pt-[14px] px-[17px] relative size-full">
          <Container94 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] pb-[4px] right-[18px] top-[326px]" data-name="Container">
      <Container93 />
      <Textarea2 />
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] pt-[23px] right-[18px] top-[478.4px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">화면</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">화면 비율</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] whitespace-nowrap">
          <p className="leading-[normal]">16:9 (가로)</p>
        </div>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container97 />
          <Svg17 />
        </div>
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[532.4px]" data-name="Container">
      <Container96 />
      <BackgroundBorder11 />
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">화질</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] whitespace-nowrap">
          <p className="leading-[normal]">1080p</p>
        </div>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container100 />
          <Svg18 />
        </div>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[623.4px]" data-name="Container">
      <Container99 />
      <BackgroundBorder12 />
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] pt-[23px] right-[18px] top-[722.4px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">길이 · 장면</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">영상 길이</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="[word-break:break-word] h-[19px] leading-[0] relative shrink-0 text-[#3b5bfe] w-[28.95px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center left-0 text-[16px] top-[9.5px] w-[19.103px]">
        <p className="leading-[normal]">10</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center left-[18.58px] text-[12px] top-[11px] w-[11.182px]">
        <p className="leading-[normal]">초</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 right-0 top-0" data-name="Container">
      <Container103 />
      <Paragraph />
    </div>
  );
}

function Container105() {
  return <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Container" />;
}

function Container104() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Container">
      <Container105 />
    </div>
  );
}

function Input4() {
  return (
    <div className="absolute bg-white content-stretch flex items-start justify-center left-[2px] right-[-2px] top-[30px]" data-name="Input">
      <Container104 />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute h-[50px] left-[18px] right-[18px] top-[776.4px]" data-name="Container">
      <Container102 />
      <Input4 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">장면 수</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">최대 5장면</p>
      </div>
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-[52px]" data-name="Container">
      <Container108 />
      <Container109 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container110() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg19 />
      </div>
    </div>
  );
}

function Border4() {
  return (
    <div className="relative shrink-0 w-[46px]" data-name="Border">
      <div aria-hidden className="absolute border-[#eef0f3] border-l border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-px py-[12px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[15px] text-center whitespace-nowrap">
          <p className="leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3b397100} id="Vector" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg20 />
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="relative rounded-[11px] shrink-0" data-name="Border">
      <div className="content-stretch flex items-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container110 />
        <Border4 />
        <Container111 />
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[11px]" />
    </div>
  );
}

function Container106() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[18px] right-[18px] top-[846.4px]" data-name="Container">
      <Container107 />
      <Border3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0" data-name="Paragraph">
      <div className="[word-break:break-word] bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end leading-[0] relative size-full whitespace-nowrap">
        <div className="flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center relative shrink-0 text-[#1b2440] text-[14px]">
          <p className="leading-[normal]">{`음성 `}</p>
        </div>
        <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#98a2b3] text-[13px]">
          <p className="leading-[normal]">(AI 목소리)</p>
        </div>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">음성 없이 만들기</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[7px] items-center relative size-full">
        <div className="bg-white relative rounded-[5px] shrink-0 size-[18px]" data-name="Background+Border">
          <div aria-hidden className="absolute border border-[#cdd3de] border-solid inset-0 pointer-events-none rounded-[5px]" />
        </div>
        <Container113 />
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[18px] pt-[23px] right-[18px] top-[918.4px]" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-solid border-t inset-0 pointer-events-none" />
      <Paragraph1 />
      <Container112 />
    </div>
  );
}

function Container116() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[12.5px] whitespace-nowrap">
          <p className="leading-[normal]">성별</p>
        </div>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.pa029e20} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19167" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex gap-[8px] items-center left-0 px-[13px] py-[11px] rounded-[11px] top-1/2" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[11px]" />
      <Container116 />
      <Svg21 />
    </div>
  );
}

function Container117() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[12.5px] whitespace-nowrap">
          <p className="leading-[normal]">연령</p>
        </div>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.pa029e20} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19167" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex gap-[8px] items-center left-[76.61px] px-[13px] py-[11px] rounded-[11px] top-1/2" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[11px]" />
      <Container117 />
      <Svg22 />
    </div>
  );
}

function Svg23() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p2725de00} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 12.25L9.91667 9.91667" id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] w-full">
        <p className="leading-[normal]">이름 검색</p>
      </div>
    </div>
  );
}

function Input5() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[2px] py-px relative size-full">
          <Container118 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder15() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex gap-[7px] items-center left-[153.22px] px-[13px] py-[11px] right-[-101.22px] rounded-[11px] top-1/2" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[11px]" />
      <Svg23 />
      <Input5 />
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[39px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder13 />
      <BackgroundBorder14 />
      <BackgroundBorder15 />
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p39be50} id="Vector" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.73333" />
        </g>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Svg24 />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="min-w-[42px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] pr-[17.8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">소진</p>
        </div>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] w-full">
          <p className="leading-[normal]">여 · 성인</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder2() {
  return (
    <div className="absolute bg-[#eaf0ff] content-stretch flex gap-[11px] items-center left-px min-h-[48px] pb-[16.5px] pt-[15.5px] px-[15px] right-px top-px" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f4f6f9] border-b border-solid inset-0 pointer-events-none" />
      <Container119 />
      <Container120 />
      <Container121 />
    </div>
  );
}

function Container122() {
  return (
    <div className="min-w-[42px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] pr-[17.8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">준기</p>
        </div>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] w-full">
          <p className="leading-[normal]">남 · 성인</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder3() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[11px] items-center left-px min-h-[48px] pb-[16.5px] pt-[15.5px] px-[15px] right-px top-[49px]" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f4f6f9] border-b border-solid inset-0 pointer-events-none" />
      <Container122 />
      <Container123 />
    </div>
  );
}

function Container124() {
  return (
    <div className="min-w-[42px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] pr-[17.8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">공철</p>
        </div>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] w-full">
          <p className="leading-[normal]">남 · 성인</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder4() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[11px] items-center left-px min-h-[48px] pb-[16.5px] pt-[15.5px] px-[15px] right-px top-[97px]" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f4f6f9] border-b border-solid inset-0 pointer-events-none" />
      <Container124 />
      <Container125 />
    </div>
  );
}

function Container126() {
  return (
    <div className="min-w-[42px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] pr-[17.8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">서연</p>
        </div>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] w-full">
          <p className="leading-[normal]">여 · 성인</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder5() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[11px] items-center left-px min-h-[48px] pb-[16.5px] pt-[15.5px] px-[15px] right-px top-[145px]" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f4f6f9] border-b border-solid inset-0 pointer-events-none" />
      <Container126 />
      <Container127 />
    </div>
  );
}

function Container128() {
  return (
    <div className="min-w-[42px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-w-[inherit] pr-[17.8px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] whitespace-nowrap">
          <p className="leading-[normal]">민호</p>
        </div>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] w-full">
          <p className="leading-[normal]">남 · 청년</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder6() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[11px] items-center left-px min-h-[48px] pb-[16.5px] pt-[15.5px] px-[15px] right-px top-[193px]" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f4f6f9] border-b border-solid inset-0 pointer-events-none" />
      <Container128 />
      <Container129 />
    </div>
  );
}

function BackgroundBorder16() {
  return (
    <div className="bg-white h-[172px] max-h-[172px] relative rounded-[13px] shrink-0 w-full" data-name="Background+Border">
      <div className="overflow-x-clip overflow-y-auto relative rounded-[inherit] size-full">
        <BackgroundHorizontalBorder2 />
        <BackgroundHorizontalBorder3 />
        <BackgroundHorizontalBorder4 />
        <BackgroundHorizontalBorder5 />
        <BackgroundHorizontalBorder6 />
      </div>
      <div aria-hidden className="absolute border border-[#eef0f3] border-solid inset-0 pointer-events-none rounded-[13px]" />
    </div>
  );
}

function Container114() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] items-start left-[18px] right-[18px] top-[973.4px]" data-name="Container">
      <Container115 />
      <BackgroundBorder16 />
    </div>
  );
}

function ParagraphHorizontalBorder() {
  return (
    <div className="absolute content-stretch flex items-end left-[18px] pt-[23px] right-[18px] top-[1221.4px]" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">{`영상 시작 방법 `}</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">(하나만 선택)</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] right-[18px] top-[1263.4px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">영상을 어떻게 시작할지 골라주세요</p>
      </div>
    </div>
  );
}

function Border5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[2px] relative rounded-[10px] shrink-0 size-[20px]" data-name="Border">
      <div aria-hidden className="absolute border-2 border-[#3b5bfe] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-[#3b5bfe] relative rounded-[4.5px] shrink-0 size-[9px]" data-name="Background" />
    </div>
  );
}

function Margin() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative size-full">
        <Border5 />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] w-full">
        <p className="leading-[normal]">새로 만들기</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12px] w-full">
        <p className="leading-[17.4px]">글로만 생성 · 첨부 없이 처음부터</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start relative size-full">
        <Container133 />
        <Container134 />
      </div>
    </div>
  );
}

function BackgroundBorder17() {
  return (
    <div className="bg-[#f3f6ff] relative rounded-[13px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#3b5bfe] border-solid inset-0 pointer-events-none rounded-[13px]" />
      <div className="content-stretch flex gap-[12px] items-start px-[16px] py-[15px] relative size-full">
        <Margin />
        <Container132 />
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative size-full">
        <div className="relative rounded-[10px] shrink-0 size-[20px]" data-name="Border">
          <div aria-hidden className="absolute border-2 border-[#cbd2de] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[14px] w-full">
        <p className="leading-[normal]">영상에 이어 붙이기</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.58px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12px] w-full">
        <p className="leading-[17.4px] mb-0">올린 영상 끝에서 이어 만들어요 · 결과는 합본과 새 부분 2</p>
        <p className="leading-[17.4px]">개</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.2px] items-start relative size-full">
        <Container136 />
        <Container137 />
      </div>
    </div>
  );
}

function BackgroundBorder18() {
  return (
    <div className="bg-white relative rounded-[13px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[13px]" />
      <div className="content-stretch flex gap-[12px] items-start px-[16px] py-[15px] relative size-full">
        <Margin1 />
        <Container135 />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[20px]" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-px relative size-full">
        <div className="relative rounded-[10px] shrink-0 size-[20px]" data-name="Border">
          <div aria-hidden className="absolute border-2 border-[#cbd2de] border-solid inset-0 pointer-events-none rounded-[10px]" />
        </div>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[14px] w-full">
        <p className="leading-[normal]">이미지로 시작</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.585px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12px] w-full">
        <p className="leading-[17.4px] mb-0">올린 사진 1장이 첫 장면이 돼요 · 영상 붙이기와 함께 못 써</p>
        <p className="leading-[17.4px]">요</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2.195px] items-start relative size-full">
        <Container139 />
        <Container140 />
      </div>
    </div>
  );
}

function BackgroundBorder19() {
  return (
    <div className="bg-white relative rounded-[13px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[13px]" />
      <div className="content-stretch flex gap-[12px] items-start px-[16px] py-[15px] relative size-full">
        <Margin2 />
        <Container138 />
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[1291.4px]" data-name="Container">
      <BackgroundBorder17 />
      <BackgroundBorder18 />
      <BackgroundBorder19 />
    </div>
  );
}

function ParagraphHorizontalBorder1() {
  return (
    <div className="absolute content-stretch flex items-end left-[18px] pt-[23px] right-[18px] top-[1571.36px]" data-name="Paragraph+HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-solid border-t inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">{`참고 자료 `}</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">(선택)</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p>
          <span className="leading-[normal]">{`참고 영상 `}</span>
          <span className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[normal] text-[#98a2b3]">(선택)</span>
        </p>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[11.5px] w-full">
        <p className="leading-[normal]">영상은 1개만 첨부할 수 있어요</p>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p17704900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder20() {
  return (
    <div className="bg-[#fbfcfd] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c9cfda] border-dashed inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center pb-[19px] pt-[25px] px-[19px] relative size-full">
          <Svg25 />
          <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] text-center whitespace-nowrap">
            <p className="leading-[normal]">영상 올리기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[18px] right-[18px] top-[1623.36px]" data-name="Container">
      <Container142 />
      <Container143 />
      <BackgroundBorder20 />
    </div>
  );
}

function Container145() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p>
          <span className="leading-[normal]">{`참고 이미지 `}</span>
          <span className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[normal] text-[#98a2b3]">(0/5)</span>
        </p>
      </div>
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[11.5px] w-full">
        <p className="leading-[normal]">이미지는 최대 5개까지 첨부할 수 있어요</p>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p17704900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder21() {
  return (
    <div className="bg-[#fbfcfd] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c9cfda] border-dashed inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center pb-[19px] pt-[25px] px-[19px] relative size-full">
          <Svg26 />
          <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] text-center whitespace-nowrap">
            <p className="leading-[normal]">이미지 올리기</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container144() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[3px] items-start left-[18px] right-[18px] top-[1759.36px]" data-name="Container">
      <Container145 />
      <Container146 />
      <BackgroundBorder21 />
    </div>
  );
}

function Container78() {
  return (
    <div className="h-[660px] max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative rounded-[inherit] size-full">
        <Border2 />
        <Background8 />
        <Container82 />
        <Container84 />
        <Container85 />
        <Container92 />
        <HorizontalBorder3 />
        <Container95 />
        <Container98 />
        <HorizontalBorder4 />
        <Container101 />
        <Container106 />
        <HorizontalBorder5 />
        <Container114 />
        <ParagraphHorizontalBorder />
        <Container130 />
        <Container131 />
        <ParagraphHorizontalBorder1 />
        <Container141 />
        <Container144 />
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[107.5px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">다음 · 장면 편집</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center p-[15px] relative size-full">
          <Svg27 />
          <Container147 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder7() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[14px] pt-[15px] px-[18px] relative size-full">
          <Button3 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder2 />
        <Container78 />
        <BackgroundHorizontalBorder7 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container69 />
      <BackgroundBorderShadow2 />
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">영상 · 2단계 내용 편집 — 상세</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container150 />
        </div>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M16.5 6L12 9L16.5 12V6Z" id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p23622800} id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background11() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg28 />
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Container153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">주제 입력</p>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">장면 편집</p>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">생성</p>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container153 />
        <Container154 />
        <Container155 />
        <Container156 />
        <Container157 />
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background11 />
          <Container151 />
          <Container152 />
        </div>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p1f0a5b80} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
          <path d={svgPaths.p3f6c7370} id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.05" />
        </g>
      </svg>
    </div>
  );
}

function Container159() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-center left-[18px] right-[18px] top-[40px]" data-name="Container">
      <Svg29 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">주제에 맞춰 장면을 만들었어요. 확인하고 다듬은 뒤 생성하세요.</p>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">주제</p>
      </div>
    </div>
  );
}

function Svg30() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.pa6670f0} id="Vector" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.pb791e00} id="Vector_2" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p55d7600} id="Vector_3" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p12626e40} id="Vector_4" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Border6() {
  return (
    <div className="content-stretch flex gap-[5px] items-center px-[13px] py-[9px] relative rounded-[9px] shrink-0" data-name="Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <Svg30 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">재생성</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container162 />
      <Border6 />
    </div>
  );
}

function Container163() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[normal]">여름철 자연재해 대비</p>
        </div>
      </div>
    </div>
  );
}

function Input6() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container163 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container160() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[18px] right-[18px] top-[77px]" data-name="Container">
      <Container161 />
      <Input6 />
    </div>
  );
}

function Container166() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">영상 길이</p>
      </div>
    </div>
  );
}

function Svg31() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
        <g id="SVG">
          <path d={svgPaths.p12072f00} id="Vector" stroke="var(--stroke-0, #B7791F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
          <path d={svgPaths.p39c5b700} id="Vector_2" stroke="var(--stroke-0, #B7791F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.08333" />
        </g>
      </svg>
    </div>
  );
}

function Container168() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b7791f] text-[12px] whitespace-nowrap">
        <p className="leading-[normal]">장면 합 13초와 다름</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Svg31 />
      <Container168 />
    </div>
  );
}

function Container165() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_8px] items-center relative shrink-0" data-name="Container">
      <Container166 />
      <Container167 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="[word-break:break-word] h-[21px] leading-[0] relative shrink-0 w-[34.06px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center left-0 text-[#b7791f] text-[18px] top-[11px] w-[21.128px]">
        <p className="leading-[normal]">10</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center left-[20.9px] text-[#4b5262] text-[12px] top-[13px] w-[14.112px]">
        <p className="leading-[normal]">{` 초`}</p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[16px] right-[16px] top-[15px]" data-name="Container">
      <Container165 />
      <Paragraph2 />
    </div>
  );
}

function Container170() {
  return <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Container" />;
}

function Container169() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Container">
      <Container170 />
    </div>
  );
}

function Input7() {
  return (
    <div className="absolute bg-white content-stretch flex items-start justify-center left-[18px] right-[14px] top-[48px]" data-name="Input">
      <Container169 />
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">4초</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">15초</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="absolute content-stretch flex h-[14px] items-start justify-between left-[16px] right-[16px] top-[73px]" data-name="Container">
      <Container172 />
      <Container173 />
    </div>
  );
}

function Container174() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[16px] right-[16px] top-[97px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b7791f] text-[12px] whitespace-nowrap">
        <p className="leading-[18px] mb-0">영상 길이는 10초인데 장면 합은 13초예요. 장면 길이를 줄이거나</p>
        <p className="leading-[18px]">영상 길이를 맞춰주세요.</p>
      </div>
    </div>
  );
}

function BackgroundBorder22() {
  return (
    <div className="absolute bg-[#fef9ec] border border-[#f1c34e] border-solid h-[149px] left-[18px] right-[18px] rounded-[14px] top-[188px]" data-name="Background+Border">
      <Container164 />
      <Input7 />
      <Container171 />
      <Container174 />
    </div>
  );
}

function Container175() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[18px] right-[18px] top-[361px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">분위기</p>
      </div>
    </div>
  );
}

function Container177() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">전체 분위기</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[22.48px]">시네마틱한 대비감, 현실적이고 차분한 톤, 깊은 심도</p>
        </div>
      </div>
    </div>
  );
}

function Textarea3() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[37.47px] pt-[14px] px-[17px] relative size-full">
          <Container178 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container176() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[18px] pb-[4px] right-[18px] top-[388px]" data-name="Container">
      <Container177 />
      <Textarea3 />
    </div>
  );
}

function Container180() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p>
          <span className="leading-[normal]">{`세부 옵션 `}</span>
          <span className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[normal] text-[#98a2b3]">(선택)</span>
        </p>
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[22.48px]">고해상도 디테일, 자연스러운 인물 모션</p>
        </div>
      </div>
    </div>
  );
}

function Textarea4() {
  return (
    <div className="bg-white relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[37.47px] pt-[14px] px-[17px] relative size-full">
          <Container181 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container179() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[18px] pb-[4px] right-[18px] top-[508.94px]" data-name="Container">
      <Container180 />
      <Textarea4 />
    </div>
  );
}

function Container183() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[15px] whitespace-nowrap">
        <p>
          <span className="leading-[normal]">{`장면 편집 `}</span>
          <span className="leading-[normal] text-[#3b5bfe]">1</span>
          <span className="leading-[normal]">{` / 3`}</span>
        </p>
      </div>
    </div>
  );
}

function Svg32() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p19b17dc0} id="Vector" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
        </g>
      </svg>
    </div>
  );
}

function Border7() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[17px] shrink-0 size-[34px]" data-name="Border">
      <div aria-hidden className="absolute border border-[#d9dee7] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Svg32 />
    </div>
  );
}

function Container185() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[13px] text-white whitespace-nowrap">
          <p className="leading-[normal]">1</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder23() {
  return (
    <div className="bg-[#3b5bfe] content-stretch flex items-center justify-center p-px relative rounded-[17px] shrink-0 size-[34px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#3b5bfe] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Container185 />
    </div>
  );
}

function Container186() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">2</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder24() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[17px] shrink-0 size-[34px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#d9dee7] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Container186 />
    </div>
  );
}

function Container187() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b7791f] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">3</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder25() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-px relative rounded-[17px] shrink-0 size-[34px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f1c34e] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Container187 />
    </div>
  );
}

function Svg33() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p5646280} id="Vector" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
        </g>
      </svg>
    </div>
  );
}

function Border8() {
  return (
    <div className="content-stretch flex items-center justify-center p-px relative rounded-[17px] shrink-0 size-[34px]" data-name="Border">
      <div aria-hidden className="absolute border border-[#d9dee7] border-solid inset-0 pointer-events-none rounded-[17px]" />
      <Svg33 />
    </div>
  );
}

function Container184() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0" data-name="Container">
      <Border7 />
      <BackgroundBorder23 />
      <BackgroundBorder24 />
      <BackgroundBorder25 />
      <Border8 />
    </div>
  );
}

function Container182() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[18px] right-[18px] top-[656.87px]" data-name="Container">
      <Container183 />
      <Container184 />
    </div>
  );
}

function Container189() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[15px] whitespace-nowrap">
        <p className="leading-[normal]">장면 1 · 창문 안전 점검</p>
      </div>
    </div>
  );
}

function Svg34() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3e41c900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.26667" />
        </g>
      </svg>
    </div>
  );
}

function Container190() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[32px]" data-name="Container">
      <Svg34 />
    </div>
  );
}

function Container188() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Container189 />
        <Container190 />
      </div>
    </div>
  );
}

function Container192() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#9aa2b1] text-[11.5px] w-full">
        <p className="leading-[normal]">장면 설명 — 무엇이 어떻게 움직이는지</p>
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] w-full">
          <p className="leading-[22.4px] mb-0">천천히 창문을 닫고 잠그는 손, 창밖엔 거센 비가 유</p>
          <p className="leading-[22.4px]">리에 부딪힌다</p>
        </div>
      </div>
    </div>
  );
}

function Textarea5() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center pb-[57.78px] pt-[13px] px-[15px] relative size-full">
          <Container193 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container191() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start pb-[4px] relative size-full">
        <Container192 />
        <Textarea5 />
      </div>
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#9aa2b1] text-[11.5px] w-full">
        <p className="leading-[normal]">카메라 움직임</p>
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] w-full">
          <p className="leading-[normal]">천천히 인물에게 다가가는 줌인</p>
        </div>
      </div>
    </div>
  );
}

function Input8() {
  return (
    <div className="bg-white min-h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] p-[15px] relative size-full">
          <Container196 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container194() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">
        <Container195 />
        <Input8 />
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#9aa2b1] text-[11.5px] whitespace-nowrap">
        <p className="leading-[normal]">이 장면 길이</p>
      </div>
    </div>
  );
}

function Container200() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">5초</p>
      </div>
    </div>
  );
}

function Container198() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 right-0 top-0" data-name="Container">
      <Container199 />
      <Container200 />
    </div>
  );
}

function Container202() {
  return <div className="flex-[1_0_0] h-[16px] min-w-px relative" data-name="Container" />;
}

function Container201() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px relative" data-name="Container">
      <Container202 />
    </div>
  );
}

function Input9() {
  return (
    <div className="absolute bg-white content-stretch flex items-start justify-center left-[2px] right-[-2px] top-[25px]" data-name="Input">
      <Container201 />
    </div>
  );
}

function Container197() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container198 />
        <Input9 />
      </div>
    </div>
  );
}

function Container204() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#9aa2b1] text-[11.5px] w-full">
        <p className="leading-[normal]">키워드 — 분위기·디테일</p>
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14px] w-full">
          <p className="leading-[normal]">태풍 대비, 창문 잠금, 차분한 긴장감</p>
        </div>
      </div>
    </div>
  );
}

function Input10() {
  return (
    <div className="bg-white min-h-[46px] relative rounded-[12px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] p-[15px] relative size-full">
          <Container205 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container203() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative size-full">
        <Container204 />
        <Input10 />
      </div>
    </div>
  );
}

function BackgroundBorder26() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-[18px] p-[19px] right-[18px] rounded-[15px] top-[704.87px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[15px]" />
      <Container188 />
      <Container191 />
      <Container194 />
      <Container197 />
      <Container203 />
    </div>
  );
}

function Svg35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p3b397100} id="Vector" stroke="var(--stroke-0, #7A8089)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function Container206() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#7a8089] text-[13.5px] text-center whitespace-nowrap">
          <p className="leading-[normal]">장면 추가 (3/5)</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder27() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[7px] items-center justify-center left-[18px] min-h-[48px] px-[15px] py-[16px] right-[18px] rounded-[13px] top-[1174.44px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#cdd3de] border-dashed inset-0 pointer-events-none rounded-[13px]" />
      <Svg35 />
      <Container206 />
    </div>
  );
}

function Container158() {
  return (
    <div className="h-[660px] max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative rounded-[inherit] size-full">
        <Container159 />
        <Container160 />
        <BackgroundBorder22 />
        <Container175 />
        <Container176 />
        <Container179 />
        <div className="absolute border-[#edeff3] border-solid border-t h-px left-[18px] right-[18px] top-[635.87px]" data-name="Horizontal Divider" />
        <Container182 />
        <BackgroundBorder26 />
        <BackgroundBorder27 />
      </div>
    </div>
  );
}

function Svg36() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p19b17dc0} id="Vector" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-white min-h-[50px] relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-end justify-center min-h-[inherit] pb-[17.5px] pt-[16px] px-[17px] relative size-full">
        <Svg36 />
        <div className="[word-break:break-word] flex flex-col font-['Arial:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5262] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">이전</p>
        </div>
      </div>
    </div>
  );
}

function Svg37() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container207() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[98.33999633789062px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">영상 생성 시작</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center px-[15px] py-[15.5px] relative size-full">
          <Svg37 />
          <Container207 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder8() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start pb-[14px] pt-[15px] px-[18px] relative size-full">
        <Button4 />
        <Button5 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder6 />
        <Container158 />
        <BackgroundHorizontalBorder8 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container149 />
      <BackgroundBorderShadow3 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex gap-[44px] items-start relative shrink-0" data-name="Container">
      <Container68 />
      <Container148 />
    </div>
  );
}

function Container211() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">상세페이지 · 1단계 주제 입력 — 상세</p>
      </div>
    </div>
  );
}

function Container210() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container211 />
        </div>
      </div>
    </div>
  );
}

function Svg38() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p1a8e7980} id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 6.75H15.75" id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.75 15.75V6.75" id="Vector_3" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background12() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg38 />
      </div>
    </div>
  );
}

function Container212() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Container214() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">제품 입력</p>
      </div>
    </div>
  );
}

function Container215() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container216() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">내용 편집</p>
      </div>
    </div>
  );
}

function Container217() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container218() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">생성</p>
      </div>
    </div>
  );
}

function Container213() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container214 />
        <Container215 />
        <Container216 />
        <Container217 />
        <Container218 />
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background12 />
          <Container212 />
          <Container213 />
        </div>
      </div>
    </div>
  );
}

function Svg39() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p32ed3480} id="Vector" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function Container220() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[13.5px] w-full">
        <p className="leading-[normal]">미리보기 보기</p>
      </div>
    </div>
  );
}

function Svg40() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function Container221() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Container">
      <Svg40 />
    </div>
  );
}

function Background13() {
  return (
    <div className="bg-[#f8f9fc] min-h-[48px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center min-h-[inherit] px-[15px] py-[13px] relative size-full">
          <Svg39 />
          <Container220 />
          <Container221 />
        </div>
      </div>
    </div>
  );
}

function Border9() {
  return (
    <div className="relative rounded-[15px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background13 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Svg41() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p6195900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M7.5 10V7.5M7.5 5H7.50625" id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin2() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-px relative shrink-0 w-[15px]" data-name="SVG:margin">
      <Svg41 />
    </div>
  );
}

function Container222() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <SvgMargin2 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[18.75px]">제품 정보만 넣으면 AI가 상세페이지를 만들어드려요</p>
      </div>
    </div>
  );
}

function Container225() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">제품명</p>
      </div>
    </div>
  );
}

function Container227() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">자동 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Background14() {
  return (
    <div className="bg-[#3b5bfe] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[14px] pr-[2px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder28() {
  return (
    <div className="bg-[#e8eeff] content-stretch flex gap-[6.01px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c5d3ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container227 />
      <Background14 />
    </div>
  );
}

function Container228() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">원문 사용</p>
        </div>
      </div>
    </div>
  );
}

function Background15() {
  return (
    <div className="bg-[#cbd0d8] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] pr-[14px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder29() {
  return (
    <div className="bg-[#f4f5f7] content-stretch flex gap-[6px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container228 />
      <Background15 />
    </div>
  );
}

function Container226() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_6.01px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorder28 />
      <BackgroundBorder29 />
    </div>
  );
}

function Container224() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container225 />
      <Container226 />
    </div>
  );
}

function Container229() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 에어핏 365 밴딩 와이드 슬랙스</p>
        </div>
      </div>
    </div>
  );
}

function Input11() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container229 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container223() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container224 />
      <Input11 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[5px] items-start leading-[0] relative shrink-0 text-[13px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#4b5262]">
        <p className="leading-[normal]">제품 설명</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#98a2b3]">
        <p className="leading-[normal]">(선택)</p>
      </div>
    </div>
  );
}

function Container231() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Container232() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[22.48px]">예) 면 100% 밴딩 와이드핏 사계절용 슬랙스</p>
        </div>
      </div>
    </div>
  );
}

function Textarea6() {
  return (
    <div className="bg-white min-h-[60px] relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[37.47px] pt-[14px] px-[17px] relative size-full">
          <Container232 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container230() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[4px] pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container231 />
      <Textarea6 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[5px] items-start leading-[0] relative shrink-0 text-[13px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#4b5262]">
        <p className="leading-[normal]">제품 이미지</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#98a2b3]">
        <p className="leading-[normal]">(선택)</p>
      </div>
    </div>
  );
}

function Container234() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function Svg42() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p1c560f00} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Container235() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[normal]">제품 이미지 업로드 (없으면 AI가 자동 생성)</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder30() {
  return (
    <div className="bg-[#fbfcfd] min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c9cfda] border-dashed inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[9px] items-center justify-center min-h-[inherit] p-[17px] relative size-full">
          <Svg42 />
          <Container235 />
        </div>
      </div>
    </div>
  );
}

function Container233() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container234 />
      <BackgroundBorder30 />
    </div>
  );
}

function Container238() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">폰트</p>
      </div>
    </div>
  );
}

function Container237() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container238 />
    </div>
  );
}

function Container239() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] whitespace-nowrap">
          <p className="leading-[normal]">기본 (템플릿 폰트)</p>
        </div>
      </div>
    </div>
  );
}

function Svg43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder31() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container239 />
          <Svg43 />
        </div>
      </div>
    </div>
  );
}

function Container236() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container237 />
      <BackgroundBorder31 />
    </div>
  );
}

function Container219() {
  return (
    <div className="max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start max-h-[inherit] pb-[28px] pt-[18px] px-[18px] relative size-full">
          <Border9 />
          <Container222 />
          <Container223 />
          <Container230 />
          <Container233 />
          <Container236 />
        </div>
      </div>
    </div>
  );
}

function Svg44() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container240() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[64.16999816894531px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">내용 생성</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center p-[15px] relative size-full">
          <Svg44 />
          <Container240 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder9() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[14px] pt-[15px] px-[18px] relative size-full">
          <Button6 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder7 />
        <Container219 />
        <BackgroundHorizontalBorder9 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container209() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container210 />
      <BackgroundBorderShadow4 />
    </div>
  );
}

function Container243() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">상세페이지 · 2단계 내용 편집 — 상세</p>
      </div>
    </div>
  );
}

function Container242() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container243 />
        </div>
      </div>
    </div>
  );
}

function Svg45() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p1a8e7980} id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M2.25 6.75H15.75" id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M6.75 15.75V6.75" id="Vector_3" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background16() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg45 />
      </div>
    </div>
  );
}

function Container244() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Container246() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">제품 입력</p>
      </div>
    </div>
  );
}

function Container247() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container248() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">내용 편집</p>
      </div>
    </div>
  );
}

function Container249() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container250() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">생성</p>
      </div>
    </div>
  );
}

function Container245() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container246 />
        <Container247 />
        <Container248 />
        <Container249 />
        <Container250 />
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background16 />
          <Container244 />
          <Container245 />
        </div>
      </div>
    </div>
  );
}

function Svg46() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p32ed3480} id="Vector" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function Container252() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[13.5px] w-full">
        <p className="leading-[normal]">미리보기 보기</p>
      </div>
    </div>
  );
}

function Svg47() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function Container253() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Container">
      <Svg47 />
    </div>
  );
}

function Background17() {
  return (
    <div className="bg-[#f8f9fc] min-h-[48px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center min-h-[inherit] px-[15px] py-[13px] relative size-full">
          <Svg46 />
          <Container252 />
          <Container253 />
        </div>
      </div>
    </div>
  );
}

function Border10() {
  return (
    <div className="relative rounded-[15px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background17 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Svg48() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p6195900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M7.5 10V7.5M7.5 5H7.50625" id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin3() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-px relative shrink-0 w-[15px]" data-name="SVG:margin">
      <Svg48 />
    </div>
  );
}

function Container254() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <SvgMargin3 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[18.75px]">각 항목을 편집하고 생성하세요</p>
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">히어로</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder32() {
  return (
    <div className="absolute bg-[#eceffe] content-stretch flex h-[36px] items-center left-0 px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#3b5bfe] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container256 />
    </div>
  );
}

function Container257() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">공감</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder33() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[73.72px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container257 />
    </div>
  );
}

function Container258() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">특징</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder34() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[136.2px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container258 />
    </div>
  );
}

function Container259() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">효과</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder35() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[198.69px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container259 />
    </div>
  );
}

function Container260() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">사용방법</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder36() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[261.17px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container260 />
    </div>
  );
}

function Container261() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">FAQ</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder37() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[346.13px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container261 />
    </div>
  );
}

function Container255() {
  return (
    <div className="h-[40px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder32 />
      <BackgroundBorder33 />
      <BackgroundBorder34 />
      <BackgroundBorder35 />
      <BackgroundBorder36 />
      <BackgroundBorder37 />
    </div>
  );
}

function Container264() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">제목</p>
      </div>
    </div>
  );
}

function Container263() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container264 />
    </div>
  );
}

function Container265() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[normal]">껍질째 한 입, 꿀이 터집니다</p>
        </div>
      </div>
    </div>
  );
}

function Input12() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container265 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container262() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container263 />
      <Input12 />
    </div>
  );
}

function Container268() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">설명</p>
      </div>
    </div>
  );
}

function Container267() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container268 />
    </div>
  );
}

function Container269() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[22.48px]">청년농부가 정성껏 키운 새벽이슬 꿀부사</p>
        </div>
      </div>
    </div>
  );
}

function Textarea7() {
  return (
    <div className="bg-white min-h-[60px] relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[37.47px] pt-[14px] px-[17px] relative size-full">
          <Container269 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container266() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[4px] pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container267 />
      <Textarea7 />
    </div>
  );
}

function Container251() {
  return (
    <div className="max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start max-h-[inherit] pb-[28px] pt-[18px] px-[18px] relative size-full">
          <Border10 />
          <Container254 />
          <Container255 />
          <Container262 />
          <Container266 />
        </div>
      </div>
    </div>
  );
}

function Svg49() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p19b17dc0} id="Vector" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-white min-h-[50px] relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-end justify-center min-h-[inherit] pb-[17.5px] pt-[16px] px-[17px] relative size-full">
        <Svg49 />
        <div className="[word-break:break-word] flex flex-col font-['Arial:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5262] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">이전</p>
        </div>
      </div>
    </div>
  );
}

function Svg50() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container270() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[109.16999816894531px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">상세페이지 생성</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center px-[15px] py-[15.5px] relative size-full">
          <Svg50 />
          <Container270 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder10() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start pb-[14px] pt-[15px] px-[18px] relative size-full">
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder8 />
        <Container251 />
        <BackgroundHorizontalBorder10 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container241() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container242 />
      <BackgroundBorderShadow5 />
    </div>
  );
}

function Container208() {
  return (
    <div className="content-stretch flex gap-[44px] items-start relative shrink-0" data-name="Container">
      <Container209 />
      <Container241 />
    </div>
  );
}

function Container274() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">랜딩페이지 · 1단계 주제 입력 — 상세</p>
      </div>
    </div>
  );
}

function Container273() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container274 />
        </div>
      </div>
    </div>
  );
}

function Svg51() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_20_4254)" id="SVG">
          <path d={svgPaths.p3dc49580} id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p29cb2580} id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M1.5 9H16.5" id="Vector_3" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_20_4254">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background18() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg51 />
      </div>
    </div>
  );
}

function Container275() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Container277() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">주제 입력</p>
      </div>
    </div>
  );
}

function Container278() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container279() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">내용 편집</p>
      </div>
    </div>
  );
}

function Container280() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container281() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">생성</p>
      </div>
    </div>
  );
}

function Container276() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container277 />
        <Container278 />
        <Container279 />
        <Container280 />
        <Container281 />
      </div>
    </div>
  );
}

function HorizontalBorder9() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background18 />
          <Container275 />
          <Container276 />
        </div>
      </div>
    </div>
  );
}

function Svg52() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p32ed3480} id="Vector" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function Container283() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[13.5px] w-full">
        <p className="leading-[normal]">미리보기 보기</p>
      </div>
    </div>
  );
}

function Svg53() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function Container284() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Container">
      <Svg53 />
    </div>
  );
}

function Background19() {
  return (
    <div className="bg-[#f8f9fc] min-h-[48px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center min-h-[inherit] px-[15px] py-[13px] relative size-full">
          <Svg52 />
          <Container283 />
          <Container284 />
        </div>
      </div>
    </div>
  );
}

function Border11() {
  return (
    <div className="relative rounded-[15px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background19 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Svg54() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p6195900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M7.5 10V7.5M7.5 5H7.50625" id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin4() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-px relative shrink-0 w-[15px]" data-name="SVG:margin">
      <Svg54 />
    </div>
  );
}

function Container285() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <SvgMargin4 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[18.75px]">주제만 적으면 AI가 랜딩페이지를 만들어드려요</p>
      </div>
    </div>
  );
}

function Container288() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">주제 / 제품 소개</p>
      </div>
    </div>
  );
}

function Container290() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">자동 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Background20() {
  return (
    <div className="bg-[#3b5bfe] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[14px] pr-[2px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder38() {
  return (
    <div className="bg-[#e8eeff] content-stretch flex gap-[6.01px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c5d3ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container290 />
      <Background20 />
    </div>
  );
}

function Container291() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">원문 사용</p>
        </div>
      </div>
    </div>
  );
}

function Background21() {
  return (
    <div className="bg-[#cbd0d8] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] pr-[14px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder39() {
  return (
    <div className="bg-[#f4f5f7] content-stretch flex gap-[6px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container291 />
      <Background21 />
    </div>
  );
}

function Container289() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_6.01px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorder38 />
      <BackgroundBorder39 />
    </div>
  );
}

function Container287() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container288 />
      <Container289 />
    </div>
  );
}

function Container292() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[22.48px]">예) 딸깍.net — AI 문서 자동생성 서비스.</p>
        </div>
      </div>
    </div>
  );
}

function Textarea8() {
  return (
    <div className="bg-white min-h-[60px] relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[37.47px] pt-[14px] px-[17px] relative size-full">
          <Container292 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container286() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[4px] pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container287 />
      <Textarea8 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[5px] items-start leading-[0] relative shrink-0 text-[13px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#4b5262]">
        <p className="leading-[normal]">스타일 힌트</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#98a2b3]">
        <p className="leading-[normal]">(선택)</p>
      </div>
    </div>
  );
}

function Container294() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph5 />
    </div>
  );
}

function Container295() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[normal]">시네마틱 다크 우주</p>
        </div>
      </div>
    </div>
  );
}

function Input13() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container295 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container293() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[1.99px] relative shrink-0 w-full" data-name="Container">
      <Container294 />
      <Input13 />
    </div>
  );
}

function Container298() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">섹션 수</p>
      </div>
    </div>
  );
}

function Container297() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container298 />
    </div>
  );
}

function Container299() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] whitespace-nowrap">
          <p className="leading-[normal]">6개 섹션</p>
        </div>
      </div>
    </div>
  );
}

function Svg55() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder40() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container299 />
          <Svg55 />
        </div>
      </div>
    </div>
  );
}

function Container296() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container297 />
      <BackgroundBorder40 />
    </div>
  );
}

function Container282() {
  return (
    <div className="max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start max-h-[inherit] pb-[28.01px] pt-[18px] px-[18px] relative size-full">
          <Border11 />
          <Container285 />
          <Container286 />
          <Container293 />
          <Container296 />
        </div>
      </div>
    </div>
  );
}

function Svg56() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container300() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[109.16999816894531px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">랜딩페이지 생성</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center p-[15px] relative size-full">
          <Svg56 />
          <Container300 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder11() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[14px] pt-[15px] px-[18px] relative size-full">
          <Button9 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder9 />
        <Container282 />
        <BackgroundHorizontalBorder11 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container272() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container273 />
      <BackgroundBorderShadow6 />
    </div>
  );
}

function Container303() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">랜딩페이지 · 2단계 내용 편집 — 상세</p>
      </div>
    </div>
  );
}

function Container302() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container303 />
        </div>
      </div>
    </div>
  );
}

function Svg57() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_20_4254)" id="SVG">
          <path d={svgPaths.p3dc49580} id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p29cb2580} id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M1.5 9H16.5" id="Vector_3" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_20_4254">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Background22() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg57 />
      </div>
    </div>
  );
}

function Container304() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Container306() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">주제 입력</p>
      </div>
    </div>
  );
}

function Container307() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container308() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">내용 편집</p>
      </div>
    </div>
  );
}

function Container309() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container310() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">생성</p>
      </div>
    </div>
  );
}

function Container305() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container306 />
        <Container307 />
        <Container308 />
        <Container309 />
        <Container310 />
      </div>
    </div>
  );
}

function HorizontalBorder10() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background22 />
          <Container304 />
          <Container305 />
        </div>
      </div>
    </div>
  );
}

function Svg58() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p32ed3480} id="Vector" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function Container312() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[13.5px] w-full">
        <p className="leading-[normal]">미리보기 보기</p>
      </div>
    </div>
  );
}

function Svg59() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function Container313() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Container">
      <Svg59 />
    </div>
  );
}

function Background23() {
  return (
    <div className="bg-[#f8f9fc] min-h-[48px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center min-h-[inherit] px-[15px] py-[13px] relative size-full">
          <Svg58 />
          <Container312 />
          <Container313 />
        </div>
      </div>
    </div>
  );
}

function Border12() {
  return (
    <div className="relative rounded-[15px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background23 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Svg60() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p6195900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M7.5 10V7.5M7.5 5H7.50625" id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin5() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-px relative shrink-0 w-[15px]" data-name="SVG:margin">
      <Svg60 />
    </div>
  );
}

function Container314() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <SvgMargin5 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[18.75px]">각 항목을 편집하고 생성하세요</p>
      </div>
    </div>
  );
}

function Container316() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">히어로</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder41() {
  return (
    <div className="absolute bg-[#eceffe] content-stretch flex h-[36px] items-center left-0 px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#3b5bfe] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container316 />
    </div>
  );
}

function Container317() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">기능</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder42() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[73.72px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container317 />
    </div>
  );
}

function Container318() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">동작방식</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder43() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[136.2px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container318 />
    </div>
  );
}

function Container319() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">후기</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder44() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[221.16px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container319 />
    </div>
  );
}

function Container320() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">요금제</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder45() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[283.64px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container320 />
    </div>
  );
}

function Container321() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">CTA</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder46() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[357.36px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container321 />
    </div>
  );
}

function Container315() {
  return (
    <div className="h-[40px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder41 />
      <BackgroundBorder42 />
      <BackgroundBorder43 />
      <BackgroundBorder44 />
      <BackgroundBorder45 />
      <BackgroundBorder46 />
    </div>
  );
}

function Container324() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">제목</p>
      </div>
    </div>
  );
}

function Container323() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container324 />
    </div>
  );
}

function Container325() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[normal]">딸깍</p>
        </div>
      </div>
    </div>
  );
}

function Input14() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container325 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container322() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container323 />
      <Input14 />
    </div>
  );
}

function Container328() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">서브 카피</p>
      </div>
    </div>
  );
}

function Container327() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container328 />
    </div>
  );
}

function Container329() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.71px] relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[22.48px] mb-0">클릭 한 번으로 문서, PPT, 이미지, 영상까지 AI가 실행</p>
          <p className="leading-[22.48px]">합니다.</p>
        </div>
      </div>
    </div>
  );
}

function Textarea9() {
  return (
    <div className="bg-white min-h-[60px] relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[15px] pt-[14.23px] px-[17px] relative size-full">
          <Container329 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container326() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[4px] pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container327 />
      <Textarea9 />
    </div>
  );
}

function Container332() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">버튼</p>
      </div>
    </div>
  );
}

function Container331() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container332 />
    </div>
  );
}

function Container333() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[normal]">시작하기</p>
        </div>
      </div>
    </div>
  );
}

function Input15() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container333 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container330() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pt-[1.99px] relative shrink-0 w-full" data-name="Container">
      <Container331 />
      <Input15 />
    </div>
  );
}

function Container311() {
  return (
    <div className="max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start max-h-[inherit] pb-[28.01px] pt-[18px] px-[18px] relative size-full">
          <Border12 />
          <Container314 />
          <Container315 />
          <Container322 />
          <Container326 />
          <Container330 />
        </div>
      </div>
    </div>
  );
}

function Svg61() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p19b17dc0} id="Vector" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white min-h-[50px] relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-end justify-center min-h-[inherit] pb-[17.5px] pt-[16px] px-[17px] relative size-full">
        <Svg61 />
        <div className="[word-break:break-word] flex flex-col font-['Arial:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5262] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">이전</p>
        </div>
      </div>
    </div>
  );
}

function Svg62() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container334() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[109.16999816894531px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">랜딩페이지 생성</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center px-[15px] py-[15.5px] relative size-full">
          <Svg62 />
          <Container334 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder12() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start pb-[14px] pt-[15px] px-[18px] relative size-full">
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow7() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder10 />
        <Container311 />
        <BackgroundHorizontalBorder12 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container301() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container302 />
      <BackgroundBorderShadow7 />
    </div>
  );
}

function Container271() {
  return (
    <div className="content-stretch flex gap-[44px] items-start relative shrink-0" data-name="Container">
      <Container272 />
      <Container301 />
    </div>
  );
}

function Container337() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">문서 — 상세</p>
      </div>
    </div>
  );
}

function Container336() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container337 />
        </div>
      </div>
    </div>
  );
}

function Svg63() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p3a382d00} id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M10.5 1.5V5.25H14.25" id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 9.75H6" id="Vector_3" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 12.75H6" id="Vector_4" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 6.75H6" id="Vector_5" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background24() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg63 />
      </div>
    </div>
  );
}

function Container338() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder11() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background24 />
          <Container338 />
        </div>
      </div>
    </div>
  );
}

function Svg64() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p6195900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M7.5 10V7.5M7.5 5H7.50625" id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin6() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-px relative shrink-0 w-[15px]" data-name="SVG:margin">
      <Svg64 />
    </div>
  );
}

function Container340() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start left-[18px] right-[18px] top-[18px]" data-name="Container">
      <SvgMargin6 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[18.75px]">빈칸만 채우면 문서가 완성돼요</p>
      </div>
    </div>
  );
}

function Container343() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">가해자(갑) 성명</p>
      </div>
    </div>
  );
}

function Container342() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container343 />
    </div>
  );
}

function Container344() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 홍길동</p>
        </div>
      </div>
    </div>
  );
}

function Input16() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container344 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container341() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[58.75px]" data-name="Container">
      <Container342 />
      <Input16 />
    </div>
  );
}

function Container347() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">가해자 주소 및 연락처</p>
      </div>
    </div>
  );
}

function Container346() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container347 />
    </div>
  );
}

function Container348() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 서울시 강남구 … / 010-1234-5678</p>
        </div>
      </div>
    </div>
  );
}

function Input17() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container348 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container345() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[153.75px]" data-name="Container">
      <Container346 />
      <Input17 />
    </div>
  );
}

function Container351() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">피해자(을) 성명</p>
      </div>
    </div>
  );
}

function Container350() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container351 />
    </div>
  );
}

function Container352() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 김철수</p>
        </div>
      </div>
    </div>
  );
}

function Input18() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container352 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container349() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[248.75px]" data-name="Container">
      <Container350 />
      <Input18 />
    </div>
  );
}

function Container355() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">피해자 주소 및 연락처</p>
      </div>
    </div>
  );
}

function Container354() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container355 />
    </div>
  );
}

function Container356() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 서울시 마포구 … / 010-9876-5432</p>
        </div>
      </div>
    </div>
  );
}

function Input19() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container356 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container353() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[343.75px]" data-name="Container">
      <Container354 />
      <Input19 />
    </div>
  );
}

function Container359() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">사고 일시</p>
      </div>
    </div>
  );
}

function Container358() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container359 />
    </div>
  );
}

function Container360() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 2026년 6월 23일 오후 2시</p>
        </div>
      </div>
    </div>
  );
}

function Input20() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container360 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container357() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[438.75px]" data-name="Container">
      <Container358 />
      <Input20 />
    </div>
  );
}

function Container363() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">사고 장소</p>
      </div>
    </div>
  );
}

function Container362() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container363 />
    </div>
  );
}

function Container364() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 서울시 강남구 테헤란로 123</p>
        </div>
      </div>
    </div>
  );
}

function Input21() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container364 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container361() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[533.75px]" data-name="Container">
      <Container362 />
      <Input21 />
    </div>
  );
}

function Container367() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">사고 차량 번호</p>
      </div>
    </div>
  );
}

function Container366() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container367 />
    </div>
  );
}

function Container368() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 12가 3456</p>
        </div>
      </div>
    </div>
  );
}

function Input22() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container368 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container365() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[628.75px]" data-name="Container">
      <Container366 />
      <Input22 />
    </div>
  );
}

function Container371() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">합의금 금액</p>
      </div>
    </div>
  );
}

function Container370() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container371 />
    </div>
  );
}

function Container372() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 5,000,000원</p>
        </div>
      </div>
    </div>
  );
}

function Input23() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container372 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container369() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[723.75px]" data-name="Container">
      <Container370 />
      <Input23 />
    </div>
  );
}

function Container375() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">지급 일자 및 방법</p>
      </div>
    </div>
  );
}

function Container374() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container375 />
    </div>
  );
}

function Container376() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 2026-07-01 / 계좌이체</p>
        </div>
      </div>
    </div>
  );
}

function Input24() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container376 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container373() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[818.75px]" data-name="Container">
      <Container374 />
      <Input24 />
    </div>
  );
}

function Container379() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">합의 일자</p>
      </div>
    </div>
  );
}

function Container378() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container379 />
    </div>
  );
}

function Container380() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 2026-06-23</p>
        </div>
      </div>
    </div>
  );
}

function Input25() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container380 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container377() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[913.75px]" data-name="Container">
      <Container378 />
      <Input25 />
    </div>
  );
}

function Container339() {
  return (
    <div className="h-[660px] max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative rounded-[inherit] size-full">
        <Container340 />
        <Container341 />
        <Container345 />
        <Container349 />
        <Container353 />
        <Container357 />
        <Container361 />
        <Container365 />
        <Container369 />
        <Container373 />
        <Container377 />
      </div>
    </div>
  );
}

function Svg65() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container381() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[64.16999816894531px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">문서 생성</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center p-[15px] relative size-full">
          <Svg65 />
          <Container381 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder13() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[14px] pt-[15px] px-[18px] relative size-full">
          <Button12 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow8() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder11 />
        <Container339 />
        <BackgroundHorizontalBorder13 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container335() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container336 />
      <BackgroundBorderShadow8 />
    </div>
  );
}

function Container385() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">PPT · 1단계 주제 입력 — 상세</p>
      </div>
    </div>
  );
}

function Container384() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container385 />
        </div>
      </div>
    </div>
  );
}

function Svg66() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M1.5 2.25H16.5" id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p415d980} id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.25 15.75L9 12L12.75 15.75" id="Vector_3" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background25() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg66 />
      </div>
    </div>
  );
}

function Container386() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Container388() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">주제 입력</p>
      </div>
    </div>
  );
}

function Container389() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container390() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">내용 편집</p>
      </div>
    </div>
  );
}

function Container391() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container392() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">생성</p>
      </div>
    </div>
  );
}

function Container387() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container388 />
        <Container389 />
        <Container390 />
        <Container391 />
        <Container392 />
      </div>
    </div>
  );
}

function HorizontalBorder12() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background25 />
          <Container386 />
          <Container387 />
        </div>
      </div>
    </div>
  );
}

function Svg67() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p32ed3480} id="Vector" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function Container394() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[13.5px] w-full">
        <p className="leading-[normal]">미리보기 보기</p>
      </div>
    </div>
  );
}

function Svg68() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function Container395() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Container">
      <Svg68 />
    </div>
  );
}

function Background26() {
  return (
    <div className="bg-[#f8f9fc] min-h-[48px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center min-h-[inherit] px-[15px] py-[13px] relative size-full">
          <Svg67 />
          <Container394 />
          <Container395 />
        </div>
      </div>
    </div>
  );
}

function Border13() {
  return (
    <div className="absolute left-[18px] right-[18px] rounded-[15px] top-[18px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background26 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Svg69() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p6195900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M7.5 10V7.5M7.5 5H7.50625" id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin7() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-px relative shrink-0 w-[15px]" data-name="SVG:margin">
      <Svg69 />
    </div>
  );
}

function Container396() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start left-[18px] right-[18px] top-[88px]" data-name="Container">
      <SvgMargin7 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[18.75px]">주제만 적으면 AI가 슬라이드를 만들어드려요</p>
      </div>
    </div>
  );
}

function Container399() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">발표 주제</p>
      </div>
    </div>
  );
}

function Container401() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">자동 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Background27() {
  return (
    <div className="bg-[#3b5bfe] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[14px] pr-[2px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder47() {
  return (
    <div className="bg-[#e8eeff] content-stretch flex gap-[6.01px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c5d3ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container401 />
      <Background27 />
    </div>
  );
}

function Container402() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">원문 사용</p>
        </div>
      </div>
    </div>
  );
}

function Background28() {
  return (
    <div className="bg-[#cbd0d8] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] pr-[14px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder48() {
  return (
    <div className="bg-[#f4f5f7] content-stretch flex gap-[6px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container402 />
      <Background28 />
    </div>
  );
}

function Container400() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_6.01px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorder47 />
      <BackgroundBorder48 />
    </div>
  );
}

function Container398() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container399 />
      <Container400 />
    </div>
  );
}

function Container403() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[22.48px]">예) 신규 서비스 ‘딸깍넷’ 투자 유치 IR 발표</p>
        </div>
      </div>
    </div>
  );
}

function Textarea10() {
  return (
    <div className="bg-white min-h-[60px] relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[37.47px] pt-[14px] px-[17px] relative size-full">
          <Container403 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container397() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] pb-[4px] right-[18px] top-[128.75px]" data-name="Container">
      <Container398 />
      <Textarea10 />
    </div>
  );
}

function Container406() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">톤</p>
      </div>
    </div>
  );
}

function Container405() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container406 />
    </div>
  );
}

function Container407() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] whitespace-nowrap">
          <p className="leading-[normal]">프로페셔널</p>
        </div>
      </div>
    </div>
  );
}

function Svg70() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder49() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container407 />
          <Svg70 />
        </div>
      </div>
    </div>
  );
}

function Container404() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[271.69px]" data-name="Container">
      <Container405 />
      <BackgroundBorder49 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[5px] items-start leading-[0] relative shrink-0 text-[13px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#4b5262]">
        <p className="leading-[normal]">청중</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#98a2b3]">
        <p className="leading-[normal]">(선택)</p>
      </div>
    </div>
  );
}

function Container409() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph6 />
    </div>
  );
}

function Container410() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[14.5px] w-full">
          <p className="leading-[normal]">예) 투자자, 임원진</p>
        </div>
      </div>
    </div>
  );
}

function Input26() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container410 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container408() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[366.69px]" data-name="Container">
      <Container409 />
      <Input26 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[5px] items-start leading-[0] relative shrink-0 text-[13px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#4b5262]">
        <p className="leading-[normal]">참고문서</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#98a2b3]">
        <p className="leading-[normal]">(선택)</p>
      </div>
    </div>
  );
}

function Container412() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph7 />
    </div>
  );
}

function Svg71() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p1c560f00} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.35" />
        </g>
      </svg>
    </div>
  );
}

function Container413() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[13px] text-center whitespace-nowrap">
          <p className="leading-[normal]">문서 첨부 · 여러 개 가능</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder50() {
  return (
    <div className="bg-[#fbfcfd] min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c9cfda] border-dashed inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex gap-[9px] items-center justify-center min-h-[inherit] p-[17px] relative size-full">
          <Svg71 />
          <Container413 />
        </div>
      </div>
    </div>
  );
}

function Container411() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[461.69px]" data-name="Container">
      <Container412 />
      <BackgroundBorder50 />
    </div>
  );
}

function Container416() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">슬라이드 고퀄리티로 제작</p>
      </div>
    </div>
  );
}

function Container415() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container416 />
    </div>
  );
}

function Container417() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] whitespace-nowrap">
          <p className="leading-[normal]">끄기 · 크레딧 절약</p>
        </div>
      </div>
    </div>
  );
}

function Background29() {
  return (
    <div className="bg-[#cbd0d8] h-[26px] relative rounded-[13px] shrink-0 w-[44px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[3px] pr-[21px] py-[3px] relative size-full">
        <div className="bg-white relative rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.28)] shrink-0 size-[20px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder51() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-[11px] relative size-full">
          <Container417 />
          <Background29 />
        </div>
      </div>
    </div>
  );
}

function Container414() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[560.69px]" data-name="Container">
      <Container415 />
      <BackgroundBorder51 />
    </div>
  );
}

function Container420() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">포인트 색</p>
      </div>
    </div>
  );
}

function Container419() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container420 />
    </div>
  );
}

function Input27() {
  return (
    <div className="bg-[#efefef] flex-[1_0_0] min-h-px opacity-0 relative w-full" data-name="Input">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[5px] py-[2px] relative size-full">
          <div className="bg-[#2563eb] h-[34px] relative shrink-0 w-full" data-name="Background+Border">
            <div aria-hidden className="absolute border border-[#777] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Label1() {
  return (
    <div className="bg-[#2563eb] content-stretch flex flex-col h-[48px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[54px]" data-name="Label">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Input27 />
    </div>
  );
}

function Container422() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto pb-[2px] pt-px relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b2440] text-[13.5px] w-full">
          <p className="leading-[normal]">#2563EB</p>
        </div>
      </div>
    </div>
  );
}

function Input28() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[48px] min-w-px relative rounded-[12px]" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[17px] py-[15px] relative size-full">
          <Container422 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container421() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Input28 />
    </div>
  );
}

function Container418() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[655.69px]" data-name="Container">
      <Container419 />
      <Container421 />
    </div>
  );
}

function Container425() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">강조색</p>
      </div>
    </div>
  );
}

function Container424() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container425 />
    </div>
  );
}

function Input29() {
  return (
    <div className="bg-[#efefef] flex-[1_0_0] min-h-px opacity-0 relative w-full" data-name="Input">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[5px] py-[2px] relative size-full">
          <div className="bg-[#0d9488] h-[34px] relative shrink-0 w-full" data-name="Background+Border">
            <div aria-hidden className="absolute border border-[#777] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Label2() {
  return (
    <div className="bg-[#0d9488] content-stretch flex flex-col h-[48px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[54px]" data-name="Label">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Input29 />
    </div>
  );
}

function Container427() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto pb-[2px] pt-px relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b2440] text-[12.9px] w-full">
          <p className="leading-[normal]">#0D9488</p>
        </div>
      </div>
    </div>
  );
}

function Input30() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[48px] min-w-px relative rounded-[12px]" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[17px] py-[15px] relative size-full">
          <Container427 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container426() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Input30 />
    </div>
  );
}

function Container423() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[750.69px]" data-name="Container">
      <Container424 />
      <Container426 />
    </div>
  );
}

function Container393() {
  return (
    <div className="h-[660px] max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative rounded-[inherit] size-full">
        <Border13 />
        <Container396 />
        <Container397 />
        <Container404 />
        <Container408 />
        <Container411 />
        <Container414 />
        <Container418 />
        <Container423 />
      </div>
    </div>
  );
}

function Svg72() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container428() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[64.16999816894531px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">내용 생성</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center p-[15px] relative size-full">
          <Svg72 />
          <Container428 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder14() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[14px] pt-[15px] px-[18px] relative size-full">
          <Button13 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow9() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder12 />
        <Container393 />
        <BackgroundHorizontalBorder14 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container383() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container384 />
      <BackgroundBorderShadow9 />
    </div>
  );
}

function Container431() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">PPT · 2단계 내용 편집 — 상세</p>
      </div>
    </div>
  );
}

function Container430() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container431 />
        </div>
      </div>
    </div>
  );
}

function Svg73() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M1.5 2.25H16.5" id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p415d980} id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M5.25 15.75L9 12L12.75 15.75" id="Vector_3" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background30() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg73 />
      </div>
    </div>
  );
}

function Container432() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Container434() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">주제 입력</p>
      </div>
    </div>
  );
}

function Container435() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container436() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">내용 편집</p>
      </div>
    </div>
  );
}

function Container437() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container438() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">생성</p>
      </div>
    </div>
  );
}

function Container433() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container434 />
        <Container435 />
        <Container436 />
        <Container437 />
        <Container438 />
      </div>
    </div>
  );
}

function HorizontalBorder13() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background30 />
          <Container432 />
          <Container433 />
        </div>
      </div>
    </div>
  );
}

function Svg74() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p32ed3480} id="Vector" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function Container440() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[13.5px] w-full">
        <p className="leading-[normal]">미리보기 보기</p>
      </div>
    </div>
  );
}

function Svg75() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function Container441() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Container">
      <Svg75 />
    </div>
  );
}

function Background31() {
  return (
    <div className="bg-[#f8f9fc] min-h-[48px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center min-h-[inherit] px-[15px] py-[13px] relative size-full">
          <Svg74 />
          <Container440 />
          <Container441 />
        </div>
      </div>
    </div>
  );
}

function Border14() {
  return (
    <div className="relative rounded-[15px] shrink-0 w-full" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background31 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Svg76() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p6195900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M7.5 10V7.5M7.5 5H7.50625" id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin8() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-px relative shrink-0 w-[15px]" data-name="SVG:margin">
      <Svg76 />
    </div>
  );
}

function Container442() {
  return (
    <div className="content-stretch flex gap-[7px] items-start relative shrink-0 w-full" data-name="Container">
      <SvgMargin8 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[18.75px]">각 항목을 편집하고 생성하세요</p>
      </div>
    </div>
  );
}

function Container444() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">1. 표지</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder52() {
  return (
    <div className="absolute bg-[#eceffe] content-stretch flex h-[36px] items-center left-0 px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#3b5bfe] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container444 />
    </div>
  );
}

function Container445() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">2. 목차</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder53() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[74.34px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container445 />
    </div>
  );
}

function Container446() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">3. 문제</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder54() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[151.02px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container446 />
    </div>
  );
}

function Container447() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">4. 솔루션</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder55() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[227.8px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container447 />
    </div>
  );
}

function Container448() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">5. 제품</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder56() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[316.13px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container448 />
    </div>
  );
}

function Container449() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">6. 시장</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder57() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[392.72px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container449 />
    </div>
  );
}

function Container450() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">7. BM</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder58() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[469.44px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container450 />
    </div>
  );
}

function Container451() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">8. 경쟁력</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder59() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[541.36px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container451 />
    </div>
  );
}

function Container452() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">9. 성과</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder60() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[629.42px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container452 />
    </div>
  );
}

function Container453() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">10. 팀</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder61() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[706.14px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container453 />
    </div>
  );
}

function Container454() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">11. 로드맵</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder62() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[777.94px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container454 />
    </div>
  );
}

function Container455() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] whitespace-nowrap">
          <p className="leading-[normal]">12. 마무리</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder63() {
  return (
    <div className="absolute bg-white content-stretch flex h-[36px] items-center left-[869.61px] px-[16px] py-px rounded-[18px] top-[2px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[18px]" />
      <Container455 />
    </div>
  );
}

function Container443() {
  return (
    <div className="h-[40px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder52 />
      <BackgroundBorder53 />
      <BackgroundBorder54 />
      <BackgroundBorder55 />
      <BackgroundBorder56 />
      <BackgroundBorder57 />
      <BackgroundBorder58 />
      <BackgroundBorder59 />
      <BackgroundBorder60 />
      <BackgroundBorder61 />
      <BackgroundBorder62 />
      <BackgroundBorder63 />
    </div>
  );
}

function Container458() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">슬라이드 제목</p>
      </div>
    </div>
  );
}

function Container457() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container458 />
    </div>
  );
}

function Container459() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[normal]">딸깍넷 투자 유치 IR</p>
        </div>
      </div>
    </div>
  );
}

function Input31() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container459 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container456() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container457 />
      <Input31 />
    </div>
  );
}

function Container462() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">본문 / 불릿</p>
      </div>
    </div>
  );
}

function Container461() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container462 />
    </div>
  );
}

function Container463() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[22.48px]">핵심 메시지를 불릿으로 정리</p>
        </div>
      </div>
    </div>
  );
}

function Textarea11() {
  return (
    <div className="bg-white min-h-[60px] relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[37.47px] pt-[14px] px-[17px] relative size-full">
          <Container463 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container460() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start pb-[4px] pt-[2px] relative shrink-0 w-full" data-name="Container">
      <Container461 />
      <Textarea11 />
    </div>
  );
}

function Container439() {
  return (
    <div className="max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start max-h-[inherit] pb-[28px] pt-[18px] px-[18px] relative size-full">
          <Border14 />
          <Container442 />
          <Container443 />
          <Container456 />
          <Container460 />
        </div>
      </div>
    </div>
  );
}

function Svg77() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p19b17dc0} id="Vector" stroke="var(--stroke-0, #4B5262)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.375" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-white min-h-[50px] relative rounded-[14px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[5px] items-end justify-center min-h-[inherit] pb-[17.5px] pt-[16px] px-[17px] relative size-full">
        <Svg77 />
        <div className="[word-break:break-word] flex flex-col font-['Arial:Bold','Noto_Sans_KR:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5262] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[normal]">이전</p>
        </div>
      </div>
    </div>
  );
}

function Svg78() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container464() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[94.16999816894531px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">슬라이드 생성</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center px-[15px] py-[15.5px] relative size-full">
          <Svg78 />
          <Container464 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder15() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start pb-[14px] pt-[15px] px-[18px] relative size-full">
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow10() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder13 />
        <Container439 />
        <BackgroundHorizontalBorder15 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container429() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container430 />
      <BackgroundBorderShadow10 />
    </div>
  );
}

function Container382() {
  return (
    <div className="content-stretch flex gap-[44px] items-start relative shrink-0" data-name="Container">
      <Container383 />
      <Container429 />
    </div>
  );
}

function Container467() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[13px] whitespace-nowrap">
        <p className="leading-[normal]">이미지 — 상세</p>
      </div>
    </div>
  );
}

function Container466() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[4px] relative size-full">
          <Container467 />
        </div>
      </div>
    </div>
  );
}

function Svg79() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p1a8e7980} id="Vector" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p113bd900} id="Vector_2" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3bff2f80} id="Vector_3" stroke="var(--stroke-0, #5B73FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Background32() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[34px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(238, 240, 255) 0%, rgb(228, 233, 255) 100%)" }} data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Svg79 />
      </div>
    </div>
  );
}

function Container468() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[16px] tracking-[-0.16px] w-full">
          <p className="leading-[normal]">상세 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Container470() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">설명 입력</p>
      </div>
    </div>
  );
}

function Container471() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container472() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">스타일</p>
      </div>
    </div>
  );
}

function Container473() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#c2c7d0] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">›</p>
      </div>
    </div>
  );
}

function Container474() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[normal]">생성</p>
      </div>
    </div>
  );
}

function Container469() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Container470 />
        <Container471 />
        <Container472 />
        <Container473 />
        <Container474 />
      </div>
    </div>
  );
}

function HorizontalBorder14() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden className="absolute border-[#f0f2f5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-center flex flex-wrap gap-[0px_11px] items-center pb-[17px] pt-[16px] px-[18px] relative size-full">
          <Background32 />
          <Container468 />
          <Container469 />
        </div>
      </div>
    </div>
  );
}

function Svg80() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d={svgPaths.p32ed3480} id="Vector" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
          <path d={svgPaths.p254f3200} id="Vector_2" stroke="var(--stroke-0, #3B5BFE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.425" />
        </g>
      </svg>
    </div>
  );
}

function Container476() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[13.5px] w-full">
        <p className="leading-[normal]">미리보기 보기</p>
      </div>
    </div>
  );
}

function Svg81() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="SVG">
          <path d="M4.5 6.75L9 11.25L13.5 6.75" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" />
        </g>
      </svg>
    </div>
  );
}

function Container477() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Container">
      <Svg81 />
    </div>
  );
}

function Background33() {
  return (
    <div className="bg-[#f8f9fc] min-h-[48px] relative shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center min-h-[inherit] px-[15px] py-[13px] relative size-full">
          <Svg80 />
          <Container476 />
          <Container477 />
        </div>
      </div>
    </div>
  );
}

function Border15() {
  return (
    <div className="absolute left-[18px] right-[18px] rounded-[15px] top-[18px]" data-name="Border">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Background33 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[15px]" />
    </div>
  );
}

function Svg82() {
  return (
    <div className="relative shrink-0 size-[15px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="SVG">
          <path d={svgPaths.p6195900} id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          <path d="M7.5 10V7.5M7.5 5H7.50625" id="Vector_2" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
        </g>
      </svg>
    </div>
  );
}

function SvgMargin9() {
  return (
    <div className="content-stretch flex flex-col h-[16px] items-start pt-px relative shrink-0 w-[15px]" data-name="SVG:margin">
      <Svg82 />
    </div>
  );
}

function Container478() {
  return (
    <div className="absolute content-stretch flex gap-[7px] items-start left-[18px] right-[18px] top-[88px]" data-name="Container">
      <SvgMargin9 />
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#98a2b3] text-[12.5px] whitespace-nowrap">
        <p className="leading-[18.75px]">설명만 적으면 AI가 이미지를 만들어드려요</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[5px] items-start leading-[0] relative shrink-0 text-[13px] whitespace-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#4b5262]">
        <p className="leading-[normal]">이미지 설명</p>
      </div>
      <div className="flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#98a2b3]">
        <p className="leading-[normal]">(영문 프롬프트)</p>
      </div>
    </div>
  );
}

function Container482() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#3b5bfe] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">자동 프롬프트</p>
        </div>
      </div>
    </div>
  );
}

function Background34() {
  return (
    <div className="bg-[#3b5bfe] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[14px] pr-[2px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder64() {
  return (
    <div className="bg-[#e8eeff] content-stretch flex gap-[6px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#c5d3ff] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container482 />
      <Background34 />
    </div>
  );
}

function Container483() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#8a93a6] text-[12px] whitespace-nowrap">
          <p className="leading-[normal]">원문 사용</p>
        </div>
      </div>
    </div>
  );
}

function Background35() {
  return (
    <div className="bg-[#cbd0d8] h-[18px] relative rounded-[9px] shrink-0 w-[30px]" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[2px] pr-[14px] py-[2px] relative size-full">
        <div className="bg-white relative rounded-[7px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.25)] shrink-0 size-[14px]" data-name="Background+Shadow" />
      </div>
    </div>
  );
}

function BackgroundBorder65() {
  return (
    <div className="bg-[#f4f5f7] content-stretch flex gap-[6.01px] h-[32px] items-center px-[12px] py-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e8ebf0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container483 />
      <Background35 />
    </div>
  );
}

function Container481() {
  return (
    <div className="content-center flex flex-wrap gap-[0px_6px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorder64 />
      <BackgroundBorder65 />
    </div>
  );
}

function Container480() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Paragraph8 />
      <Container481 />
    </div>
  );
}

function Container484() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full whitespace-pre-wrap">
          <p className="leading-[22.48px] mb-0">{`A cozy bookstore interior, warm afternoon light, `}</p>
          <p className="leading-[22.48px] mb-0">{`wooden shelves full of books, shallow depth of `}</p>
          <p className="leading-[22.48px]">field, editorial photography</p>
        </div>
      </div>
    </div>
  );
}

function Textarea12() {
  return (
    <div className="bg-white min-h-[150px] relative rounded-[14px] shrink-0 w-full" data-name="Textarea">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-auto rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] pb-[82.4px] pt-[13.97px] px-[17px] relative size-full">
          <Container484 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container479() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] pb-[4px] right-[18px] top-[128.75px]" data-name="Container">
      <Container480 />
      <Textarea12 />
    </div>
  );
}

function Container487() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">카드 1 텍스트</p>
      </div>
    </div>
  );
}

function Container486() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container487 />
    </div>
  );
}

function Container488() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[normal]">올해의 필독서</p>
        </div>
      </div>
    </div>
  );
}

function Input32() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container488 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container485() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[384.57px]" data-name="Container">
      <Container486 />
      <Input32 />
    </div>
  );
}

function Container491() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">카드 2 텍스트</p>
      </div>
    </div>
  );
}

function Container490() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container491 />
    </div>
  );
}

function Container492() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[normal]">{`EDITOR'S PICK`}</p>
        </div>
      </div>
    </div>
  );
}

function Input33() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container492 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container489() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[479.57px]" data-name="Container">
      <Container490 />
      <Input33 />
    </div>
  );
}

function Container495() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">하단 배너 텍스트</p>
      </div>
    </div>
  );
}

function Container494() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container495 />
    </div>
  );
}

function Container496() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] w-full">
          <p className="leading-[normal]">지금 서점에서 만나보세요</p>
        </div>
      </div>
    </div>
  );
}

function Input34() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-center min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container496 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function Container493() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[574.57px]" data-name="Container">
      <Container494 />
      <Input34 />
    </div>
  );
}

function Container499() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">폰트</p>
      </div>
    </div>
  );
}

function Container498() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container499 />
    </div>
  );
}

function Container500() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1b2440] text-[14.5px] whitespace-nowrap">
          <p className="leading-[normal]">기본 (템플릿 폰트)</p>
        </div>
      </div>
    </div>
  );
}

function Svg83() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #98A2B3)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46667" />
        </g>
      </svg>
    </div>
  );
}

function BackgroundBorder66() {
  return (
    <div className="bg-white min-h-[48px] relative rounded-[14px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between min-h-[inherit] px-[17px] py-[15.5px] relative size-full">
          <Container500 />
          <Svg83 />
        </div>
      </div>
    </div>
  );
}

function Container497() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[669.57px]" data-name="Container">
      <Container498 />
      <BackgroundBorder66 />
    </div>
  );
}

function Container503() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4b5262] text-[13px] w-full">
        <p className="leading-[normal]">포인트 색</p>
      </div>
    </div>
  );
}

function Container502() {
  return (
    <div className="content-center flex flex-wrap items-center relative shrink-0 w-full" data-name="Container">
      <Container503 />
    </div>
  );
}

function Input35() {
  return (
    <div className="bg-[#efefef] flex-[1_0_0] min-h-px opacity-0 relative w-full" data-name="Input">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[5px] py-[2px] relative size-full">
          <div className="bg-[#3b5bfe] h-[34px] relative shrink-0 w-full" data-name="Background+Border">
            <div aria-hidden className="absolute border border-[#777] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Label3() {
  return (
    <div className="bg-[#3b5bfe] content-stretch flex flex-col h-[48px] items-start justify-center p-px relative rounded-[12px] shrink-0 w-[54px]" data-name="Label">
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Input35 />
    </div>
  );
}

function Container505() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-auto pb-[2px] pt-px relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1b2440] text-[13.6px] w-full">
          <p className="leading-[normal]">#3B5BFE</p>
        </div>
      </div>
    </div>
  );
}

function Input36() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-[48px] min-w-px relative rounded-[12px]" data-name="Input">
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[17px] py-[15px] relative size-full">
          <Container505 />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e3e6eb] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Container504() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Input36 />
    </div>
  );
}

function Container501() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[18px] right-[18px] top-[764.57px]" data-name="Container">
      <Container502 />
      <Container504 />
    </div>
  );
}

function Container475() {
  return (
    <div className="h-[660px] max-h-[660px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-auto relative rounded-[inherit] size-full">
        <Border15 />
        <Container478 />
        <Container479 />
        <Container485 />
        <Container489 />
        <Container493 />
        <Container497 />
        <Container501 />
      </div>
    </div>
  );
}

function Svg84() {
  return (
    <div className="relative shrink-0 size-[17px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="SVG">
          <path d={svgPaths.p31151900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
          <path d={svgPaths.p249be200} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.41667" />
        </g>
      </svg>
    </div>
  );
}

function Container506() {
  return (
    <div className="content-stretch flex flex-col items-center min-w-[109.16999816894531px] pb-[2px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Arial_Black:Regular','Noto_Sans_KR:Black',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[15px] text-center text-white whitespace-nowrap">
        <p className="leading-[normal]">이미지 생성하기</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[#3b5bfe] drop-shadow-[0px_4px_6px_rgba(59,91,254,0.18)] flex-[1_0_0] min-w-px relative rounded-[14px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[9px] items-center justify-center p-[15px] relative size-full">
          <Svg84 />
          <Container506 />
        </div>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorder16() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden className="absolute border-[#eef0f3] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center pb-[14px] pt-[15px] px-[18px] relative size-full">
          <Button16 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorderShadow11() {
  return (
    <div className="bg-white relative rounded-[22px] shrink-0 w-[380px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <HorizontalBorder14 />
        <Container475 />
        <BackgroundHorizontalBorder16 />
      </div>
      <div aria-hidden className="absolute border border-[#eceef2] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.04),0px_12px_32px_0px_rgba(16,24,40,0.06)]" />
    </div>
  );
}

function Container465() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Container">
      <Container466 />
      <BackgroundBorderShadow11 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[56px] items-start relative shrink-0" data-name="Container">
      <Container1 />
      <Container2 />
      <Container67 />
      <Container208 />
      <Container271 />
      <Container335 />
      <Container382 />
      <Container465 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex items-start pl-[64px] pr-[1052px] py-[56px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(238, 241, 246) 0%, rgb(238, 241, 246) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Frame">
      <Container />
    </div>
  );
}