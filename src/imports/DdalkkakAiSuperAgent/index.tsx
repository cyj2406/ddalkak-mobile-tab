import svgPaths from "./svg-nlnu29nu3f";
import imgImageNet from "./70598a9173139973c519fbc9c881094e41ef9297.png";
import imgImage from "./ec4bf4c83826b512a10ccb46952ef28cdb24b8d8.png";
import imgContainer from "./f8a880681213e839d0ca3725b431e7cec4159da7.png";

function Container1() {
  return <div className="h-0 relative shrink-0 w-[260px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="h-full relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#4f7bff] text-[38px] text-center tracking-[-1.9px] whitespace-nowrap">
          <span className="leading-[47.5px]">서식</span>
          <span className="leading-[47.5px] text-[#0a0a0a]">, 한 줄이면 충분해요</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[38px] relative shrink-0 w-[337.859px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[14px] relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[23.563px] relative shrink-0 text-[#737373] text-[14.5px] text-center tracking-[-0.3625px] whitespace-nowrap">원하는 템플릿을 고르거나 직접 설명해 바로 만들어 보세요.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[126px] max-w-[768px] relative shrink-0 w-[337.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[40px] relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[148_0_0] max-h-[383.20001220703125px] min-h-[148px] relative w-[1030px]" data-name="Text Area">
      <div className="max-h-[inherit] min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-h-[inherit] min-h-[inherit] pb-[12px] pt-[16px] px-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[#a7b3c7] text-[15px] w-full">무엇을 만들까요? 대화로 자연스럽게 요청하거나 템플릿을 선택해 문서·PPT·이미지 등을 바로 생성해보세요!</p>
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3cb14e80} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[9px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_521)" id="Icon">
          <path d={svgPaths.p15ab3e60} id="Vector" stroke="var(--stroke-0, #4F7BFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #4F7BFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #4F7BFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #4F7BFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_521">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(79,123,255,0.25)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] py-[9px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_504)" id="Icon">
          <path d={svgPaths.p1e61df00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p883e500} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 3.5V5.83333" id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.0833 8.16667V10.5" id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 1.16667V2.33333" id="Vector_5" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.08333 4.66667H1.75" id="Vector_6" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 9.33333H9.91667" id="Vector_7" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M6.41667 1.75H5.25" id="Vector_8" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_504">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#62748e] text-[12px] text-center whitespace-nowrap">자동 프롬프트</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-px relative size-full">
        <Icon2 />
        <Text />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p12d5c871} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p12ed6cc0} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#62748e] text-[12px] text-center whitespace-nowrap">참고문서 원문 전체 사용</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-px relative size-full">
        <Icon3 />
        <Text1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button />
        <Button1 />
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p82fb540} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12.6667V3.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#4f7bff] relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button - 전송">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-[1030px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[20px] pl-[24px] pr-[20px] pt-[6px] relative size-full">
        <Container10 />
        <Button4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M8.75 1.75H12.25V5.25" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 1.75L8.16667 5.83333" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 12.25L5.83333 8.16667" id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.25 12.25H1.75V8.75" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute left-[991px] rounded-[16777200px] size-[28px] top-[11px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[18px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(223,230,237,0.5)] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-px relative size-full">
        <TextArea />
        <Container9 />
        <Button5 />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[18px] shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-white h-[216px] relative rounded-[22px] shrink-0 w-[1036px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Form />
      </div>
      <div aria-hidden className="absolute border-2 border-[#4f7bff] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_8px_32px_0px_rgba(79,123,255,0.1)]" />
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-[1036px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[56px] relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Container11() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Container" />;
}

function Button6() {
  return (
    <div className="bg-[#0a0a0a] h-full relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f8fafc] text-[14px] text-center whitespace-nowrap">전체</p>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f1f6fa] h-full relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">외국인 비자 서식</p>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[705.5_0_0] h-[32px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Button6 />
        <Button7 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[36px] left-0 rounded-[16777200px] top-0 w-[224px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[37px] py-px relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#737373] text-[14px] w-full">서식명으로 검색...</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[36px] relative shrink-0 w-[224px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon6 />
        <TextInput />
      </div>
    </div>
  );
}

function Dropdown() {
  return <div className="absolute border border-[#dfe6ed] border-solid h-[36px] left-0 rounded-[16777200px] top-0 w-[82.5px]" data-name="Dropdown" />;
}

function Icon7() {
  return (
    <div className="absolute left-[58.5px] size-[14px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[36px] relative shrink-0 w-[82.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Dropdown />
        <Icon7 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container14 />
        <Container15 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">134개의 서식</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon9 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">20 빈칸</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">강제퇴거명령에대한이의신청서</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container20 />
        <Heading2 />
        <TextMargin />
        <ContainerAlign />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon11 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">54 빈칸</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container24 />
        <Container25 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">거소신고(신청)서</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin1() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container23 />
        <Heading3 />
        <TextMargin1 />
        <ContainerAlign1 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon13 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">35 빈칸</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">거주숙소제공사실확인서(영문병기)</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin2() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text6 />
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text7 />
        </div>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container26 />
        <Heading4 />
        <TextMargin2 />
        <ContainerAlign2 />
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon15 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">35 빈칸</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">거주숙소제공사실확인서(중문병기)</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin3() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Text9 />
    </div>
  );
}

function ContainerAlign3() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <Container32 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-2 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container29 />
        <Heading5 />
        <TextMargin3 />
        <ContainerAlign3 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon17 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">40 빈칸</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container34 />
        <Container35 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">건강확인서</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin4() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text10 />
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Text11 />
    </div>
  );
}

function ContainerAlign4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-2 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container33 />
        <Heading6 />
        <TextMargin4 />
        <ContainerAlign4 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon19 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">157 빈칸</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container38 />
        <Container39 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start overflow-clip relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-[301px]">결혼이민자의 부모 등 가족 초청장(F-1-5 비자 신청)</p>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Heading7 />
      </div>
    </div>
  );
}

function Text12() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin5() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text12 />
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign5() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text13 />
        </div>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-2 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container37 />
        <Heading3Margin />
        <TextMargin5 />
        <ContainerAlign5 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon21 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">68 빈칸</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container41 />
        <Container42 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">고용·연수외국인변동사유발생신고서</p>
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin6() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text14 />
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign6() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text15 />
        </div>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-3 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container40 />
        <Heading8 />
        <TextMargin6 />
        <ContainerAlign6 />
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon23 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">41 빈칸</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container44 />
        <Container45 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">고용사유서</p>
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin7() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text16 />
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign7() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text17 />
        </div>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-3 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container43 />
        <Heading9 />
        <TextMargin7 />
        <ContainerAlign7 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon25 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">27 빈칸</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container47 />
        <Container48 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">고용주추천서</p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin8() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text18 />
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign8() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text19 />
        </div>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-3 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container46 />
        <Heading10 />
        <TextMargin8 />
        <ContainerAlign8 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon27 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">10 빈칸</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container50 />
        <Container51 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">공연장소 시설현황 확인서</p>
      </div>
    </div>
  );
}

function Text20() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin9() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text20 />
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign9() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text21 />
        </div>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-4 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container49 />
        <Heading11 />
        <TextMargin9 />
        <ContainerAlign9 />
      </div>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container53() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon29 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">102 빈칸</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container53 />
        <Container54 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">관광취업활동계획서</p>
      </div>
    </div>
  );
}

function Text22() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin10() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text22 />
      </div>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign10() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text23 />
        </div>
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-4 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container52 />
        <Heading12 />
        <TextMargin10 />
        <ContainerAlign10 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon31 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">17 빈칸</p>
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container56 />
        <Container57 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">교육비 지원 추천 신청서</p>
      </div>
    </div>
  );
}

function Text24() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin11() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text24 />
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign11() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text25 />
        </div>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-4 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container55 />
        <Heading13 />
        <TextMargin11 />
        <ContainerAlign11 />
      </div>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon33 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">22 빈칸</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">구직활동계획서</p>
      </div>
    </div>
  );
}

function Text26() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin12() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text26 />
      </div>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign12() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text27 />
        </div>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-5 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container58 />
        <Heading14 />
        <TextMargin12 />
        <ContainerAlign12 />
      </div>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon34 />
      </div>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon35 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">78 빈칸</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국내 체류 중 비취업 서약서</p>
      </div>
    </div>
  );
}

function Text28() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin13() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text28 />
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign13() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text29 />
        </div>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-5 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container61 />
        <Heading15 />
        <TextMargin13 />
        <ContainerAlign13 />
      </div>
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon36 />
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon37 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">34 빈칸</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국내거소신고사실발급·열람신청서(위임장)</p>
      </div>
    </div>
  );
}

function Text30() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin14() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text30 />
      </div>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign14() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text31 />
        </div>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-5 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container64 />
        <Heading16 />
        <TextMargin14 />
        <ContainerAlign14 />
      </div>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon38 />
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon39 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">15 빈칸</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국내단순노무업종비취업서약서</p>
      </div>
    </div>
  );
}

function Text32() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin15() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text32 />
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign15() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text33 />
        </div>
      </div>
    </div>
  );
}

function Link15() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-6 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container67 />
        <Heading17 />
        <TextMargin15 />
        <ContainerAlign15 />
      </div>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container71() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon40 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon41 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">47 빈칸</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container71 />
        <Container72 />
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국적보유신고서</p>
      </div>
    </div>
  );
}

function Text34() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin16() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text34 />
      </div>
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign16() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text35 />
        </div>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-6 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container70 />
        <Heading18 />
        <TextMargin16 />
        <ContainerAlign16 />
      </div>
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container74() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon42 />
      </div>
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon43 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">63 빈칸</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container74 />
        <Container75 />
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국적상실신고서</p>
      </div>
    </div>
  );
}

function Text36() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin17() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text36 />
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign17() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text37 />
        </div>
      </div>
    </div>
  );
}

function Link17() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-6 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container73 />
        <Heading19 />
        <TextMargin17 />
        <ContainerAlign17 />
      </div>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container77() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon44 />
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon45 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">54 빈칸</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container77 />
        <Container78 />
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국적선택신고서</p>
      </div>
    </div>
  );
}

function Text38() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin18() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text38 />
      </div>
    </div>
  );
}

function Text39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign18() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text39 />
        </div>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-7 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container76 />
        <Heading20 />
        <TextMargin18 />
        <ContainerAlign18 />
      </div>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container80() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon46 />
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon47 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">21 빈칸</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container80 />
        <Container81 />
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국적신청취하서</p>
      </div>
    </div>
  );
}

function Text40() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin19() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text40 />
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign19() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text41 />
        </div>
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-7 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container79 />
        <Heading21 />
        <TextMargin19 />
        <ContainerAlign19 />
      </div>
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container83() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon48 />
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container84() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon49 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">50 빈칸</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container83 />
        <Container84 />
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국적이탈신고서</p>
      </div>
    </div>
  );
}

function Text42() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin20() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text42 />
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign20() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text43 />
        </div>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-7 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container82 />
        <Heading22 />
        <TextMargin20 />
        <ContainerAlign20 />
      </div>
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container86() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon50 />
      </div>
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container87() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon51 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">26 빈칸</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국적증서수여식 불참사유서</p>
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin21() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text44 />
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign21() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text45 />
        </div>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-8 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container85 />
        <Heading23 />
        <TextMargin21 />
        <ContainerAlign21 />
      </div>
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon52 />
      </div>
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container90() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon53 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">47 빈칸</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container89 />
        <Container90 />
      </div>
    </div>
  );
}

function Heading24() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국적취득신고서</p>
      </div>
    </div>
  );
}

function Text46() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin22() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text46 />
      </div>
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign22() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text47 />
        </div>
      </div>
    </div>
  );
}

function Link22() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-8 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container88 />
        <Heading24 />
        <TextMargin22 />
        <ContainerAlign22 />
      </div>
    </div>
  );
}

function Icon54() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container92() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon54 />
      </div>
    </div>
  );
}

function Icon55() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container93() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon55 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">30 빈칸</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container92 />
        <Container93 />
      </div>
    </div>
  );
}

function Heading25() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국적판정신청서</p>
      </div>
    </div>
  );
}

function Text48() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin23() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text48 />
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign23() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text49 />
        </div>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-8 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container91 />
        <Heading25 />
        <TextMargin23 />
        <ContainerAlign23 />
      </div>
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container95() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon56 />
      </div>
    </div>
  );
}

function Icon57() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container96() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon57 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">14 빈칸</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container95 />
        <Container96 />
      </div>
    </div>
  );
}

function Heading26() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국적회복진술서(일반국가)</p>
      </div>
    </div>
  );
}

function Text50() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin24() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text50 />
      </div>
    </div>
  );
}

function Text51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign24() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text51 />
        </div>
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-9 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container94 />
        <Heading26 />
        <TextMargin24 />
        <ContainerAlign24 />
      </div>
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon58 />
      </div>
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container99() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon59 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">11 빈칸</p>
      </div>
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container98 />
        <Container99 />
      </div>
    </div>
  );
}

function Heading27() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국적회복진술서(중국동포)</p>
      </div>
    </div>
  );
}

function Text52() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin25() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text52 />
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign25() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text53 />
        </div>
      </div>
    </div>
  );
}

function Link25() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-9 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container97 />
        <Heading27 />
        <TextMargin25 />
        <ContainerAlign25 />
      </div>
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container101() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon60 />
      </div>
    </div>
  );
}

function Icon61() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container102() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon61 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">250 빈칸</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container101 />
        <Container102 />
      </div>
    </div>
  );
}

function Heading28() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">국적회복허가신청서</p>
      </div>
    </div>
  );
}

function Text54() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin26() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text54 />
      </div>
    </div>
  );
}

function Text55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign26() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text55 />
        </div>
      </div>
    </div>
  );
}

function Link26() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-9 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container100 />
        <Heading28 />
        <TextMargin26 />
        <ContainerAlign26 />
      </div>
    </div>
  );
}

function Icon62() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon62 />
      </div>
    </div>
  );
}

function Icon63() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container105() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon63 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">17 빈칸</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container104 />
        <Container105 />
      </div>
    </div>
  );
}

function Heading29() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">귀화추천서</p>
      </div>
    </div>
  );
}

function Text56() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin27() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text56 />
      </div>
    </div>
  );
}

function Text57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign27() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text57 />
        </div>
      </div>
    </div>
  );
}

function Link27() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-10 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container103 />
        <Heading29 />
        <TextMargin27 />
        <ContainerAlign27 />
      </div>
    </div>
  );
}

function Icon64() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container107() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon64 />
      </div>
    </div>
  );
}

function Icon65() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon65 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">529 빈칸</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container107 />
        <Container108 />
      </div>
    </div>
  );
}

function Heading30() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">귀화허가신청서</p>
      </div>
    </div>
  );
}

function Text58() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin28() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text58 />
      </div>
    </div>
  );
}

function Text59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign28() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text59 />
        </div>
      </div>
    </div>
  );
}

function Link28() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-10 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container106 />
        <Heading30 />
        <TextMargin28 />
        <ContainerAlign28 />
      </div>
    </div>
  );
}

function Icon66() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container110() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon66 />
      </div>
    </div>
  );
}

function Icon67() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container111() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon67 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">34 빈칸</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container110 />
        <Container111 />
      </div>
    </div>
  );
}

function Heading31() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">기술창업계획서</p>
      </div>
    </div>
  );
}

function Text60() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin29() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text60 />
      </div>
    </div>
  );
}

function Text61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 13일</p>
    </div>
  );
}

function ContainerAlign29() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text61 />
        </div>
      </div>
    </div>
  );
}

function Link29() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-10 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container109 />
        <Heading31 />
        <TextMargin29 />
        <ContainerAlign29 />
      </div>
    </div>
  );
}

function Icon68() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container113() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon68 />
      </div>
    </div>
  );
}

function Icon69() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container114() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon69 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">24 빈칸</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container113 />
        <Container114 />
      </div>
    </div>
  );
}

function Heading32() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">기업대표신원보증서</p>
      </div>
    </div>
  );
}

function Text62() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin30() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text62 />
      </div>
    </div>
  );
}

function Text63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 13일</p>
    </div>
  );
}

function ContainerAlign30() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text63 />
        </div>
      </div>
    </div>
  );
}

function Link30() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-11 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container112 />
        <Heading32 />
        <TextMargin30 />
        <ContainerAlign30 />
      </div>
    </div>
  );
}

function Icon70() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container116() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon70 />
      </div>
    </div>
  );
}

function Icon71() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container117() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon71 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">26 빈칸</p>
      </div>
    </div>
  );
}

function Container115() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container116 />
        <Container117 />
      </div>
    </div>
  );
}

function Heading33() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">난민여행증명서 (재)발급신청서</p>
      </div>
    </div>
  );
}

function Text64() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin31() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text64 />
      </div>
    </div>
  );
}

function Text65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 13일</p>
    </div>
  );
}

function ContainerAlign31() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text65 />
        </div>
      </div>
    </div>
  );
}

function Link31() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-11 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container115 />
        <Heading33 />
        <TextMargin31 />
        <ContainerAlign31 />
      </div>
    </div>
  );
}

function Icon72() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon72 />
      </div>
    </div>
  );
}

function Icon73() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container120() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon73 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">21 빈칸</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container119 />
        <Container120 />
      </div>
    </div>
  );
}

function Heading34() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">난민여행증명서 유효기간 연장허가 신청서</p>
      </div>
    </div>
  );
}

function Text66() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin32() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text66 />
      </div>
    </div>
  );
}

function Text67() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign32() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text67 />
        </div>
      </div>
    </div>
  );
}

function Link32() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-11 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container118 />
        <Heading34 />
        <TextMargin32 />
        <ContainerAlign32 />
      </div>
    </div>
  );
}

function Icon74() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container122() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon74 />
      </div>
    </div>
  );
}

function Icon75() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container123() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon75 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">472 빈칸</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container122 />
        <Container123 />
      </div>
    </div>
  );
}

function Heading35() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">난민인정신청서</p>
      </div>
    </div>
  );
}

function Text68() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin33() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text68 />
      </div>
    </div>
  );
}

function Text69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign33() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text69 />
        </div>
      </div>
    </div>
  );
}

function Link33() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-12 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container121 />
        <Heading35 />
        <TextMargin33 />
        <ContainerAlign33 />
      </div>
    </div>
  );
}

function Icon76() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container125() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon76 />
      </div>
    </div>
  );
}

function Icon77() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container126() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon77 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">136 빈칸</p>
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container125 />
        <Container126 />
      </div>
    </div>
  );
}

function Heading36() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">난민인정신청서(재신청자용)</p>
      </div>
    </div>
  );
}

function Text70() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin34() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text70 />
      </div>
    </div>
  );
}

function Text71() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign34() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text71 />
        </div>
      </div>
    </div>
  );
}

function Link34() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-12 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container124 />
        <Heading36 />
        <TextMargin34 />
        <ContainerAlign34 />
      </div>
    </div>
  );
}

function Icon78() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container128() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon78 />
      </div>
    </div>
  );
}

function Icon79() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container129() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon79 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">11 빈칸</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container128 />
        <Container129 />
      </div>
    </div>
  );
}

function Heading37() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">난민인정증명서 재발급 신청서</p>
      </div>
    </div>
  );
}

function Text72() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin35() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text72 />
      </div>
    </div>
  );
}

function Text73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign35() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text73 />
        </div>
      </div>
    </div>
  );
}

function Link35() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-12 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container127 />
        <Heading37 />
        <TextMargin35 />
        <ContainerAlign35 />
      </div>
    </div>
  );
}

function Icon80() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container131() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon80 />
      </div>
    </div>
  );
}

function Icon81() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container132() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon81 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">18 빈칸</p>
      </div>
    </div>
  );
}

function Container130() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container131 />
        <Container132 />
      </div>
    </div>
  );
}

function Heading38() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">난민임시상륙허가(기간연장) 신청서</p>
      </div>
    </div>
  );
}

function Text74() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin36() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text74 />
      </div>
    </div>
  );
}

function Text75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign36() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text75 />
        </div>
      </div>
    </div>
  );
}

function Link36() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-13 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container130 />
        <Heading38 />
        <TextMargin36 />
        <ContainerAlign36 />
      </div>
    </div>
  );
}

function Icon82() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container134() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon82 />
      </div>
    </div>
  );
}

function Icon83() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container135() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon83 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">56 빈칸</p>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container134 />
        <Container135 />
      </div>
    </div>
  );
}

function Heading39() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">난민지원시설 이용신청서</p>
      </div>
    </div>
  );
}

function Text76() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin37() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text76 />
      </div>
    </div>
  );
}

function Text77() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign37() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text77 />
        </div>
      </div>
    </div>
  );
}

function Link37() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-13 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container133 />
        <Heading39 />
        <TextMargin37 />
        <ContainerAlign37 />
      </div>
    </div>
  );
}

function Icon84() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container137() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon84 />
      </div>
    </div>
  );
}

function Icon85() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container138() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon85 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">33 빈칸</p>
      </div>
    </div>
  );
}

function Container136() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container137 />
        <Container138 />
      </div>
    </div>
  );
}

function Heading40() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">논문 지도교수 확인서(국문)</p>
      </div>
    </div>
  );
}

function Text78() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin38() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text78 />
      </div>
    </div>
  );
}

function Text79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign38() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text79 />
        </div>
      </div>
    </div>
  );
}

function Link38() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-13 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container136 />
        <Heading40 />
        <TextMargin38 />
        <ContainerAlign38 />
      </div>
    </div>
  );
}

function Icon86() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container140() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon86 />
      </div>
    </div>
  );
}

function Icon87() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container141() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon87 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">47 빈칸</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container140 />
        <Container141 />
      </div>
    </div>
  );
}

function Heading41() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">단기체류 외국인 숙박신고서</p>
      </div>
    </div>
  );
}

function Text80() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin39() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text80 />
      </div>
    </div>
  );
}

function Text81() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign39() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text81 />
        </div>
      </div>
    </div>
  );
}

function Link39() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-14 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container139 />
        <Heading41 />
        <TextMargin39 />
        <ContainerAlign39 />
      </div>
    </div>
  );
}

function Icon88() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container143() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon88 />
      </div>
    </div>
  );
}

function Icon89() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container144() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon89 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">79 빈칸</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container143 />
        <Container144 />
      </div>
    </div>
  );
}

function Heading42() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">단체사증발급대상자명단</p>
      </div>
    </div>
  );
}

function Text82() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin40() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text82 />
      </div>
    </div>
  );
}

function Text83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign40() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text83 />
        </div>
      </div>
    </div>
  );
}

function Link40() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-14 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container142 />
        <Heading42 />
        <TextMargin40 />
        <ContainerAlign40 />
      </div>
    </div>
  );
}

function Icon90() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container146() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon90 />
      </div>
    </div>
  );
}

function Icon91() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container147() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon91 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">83 빈칸</p>
      </div>
    </div>
  );
}

function Container145() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container146 />
        <Container147 />
      </div>
    </div>
  );
}

function Heading43() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">단체사증발급신청서</p>
      </div>
    </div>
  );
}

function Text84() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin41() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text84 />
      </div>
    </div>
  );
}

function Text85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign41() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text85 />
        </div>
      </div>
    </div>
  );
}

function Link41() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-14 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container145 />
        <Heading43 />
        <TextMargin41 />
        <ContainerAlign41 />
      </div>
    </div>
  );
}

function Icon92() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container149() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon92 />
      </div>
    </div>
  );
}

function Icon93() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container150() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon93 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">185 빈칸</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container149 />
        <Container150 />
      </div>
    </div>
  );
}

function Heading44() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">단체여행객명부</p>
      </div>
    </div>
  );
}

function Text86() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin42() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text86 />
      </div>
    </div>
  );
}

function Text87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign42() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text87 />
        </div>
      </div>
    </div>
  );
}

function Link42() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-15 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container148 />
        <Heading44 />
        <TextMargin42 />
        <ContainerAlign42 />
      </div>
    </div>
  );
}

function Icon94() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container152() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon94 />
      </div>
    </div>
  );
}

function Icon95() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container153() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon95 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">22 빈칸</p>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container152 />
        <Container153 />
      </div>
    </div>
  );
}

function Heading45() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">대리업무등록신청서및각서</p>
      </div>
    </div>
  );
}

function Text88() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin43() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text88 />
      </div>
    </div>
  );
}

function Text89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign43() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text89 />
        </div>
      </div>
    </div>
  );
}

function Link43() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-15 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container151 />
        <Heading45 />
        <TextMargin43 />
        <ContainerAlign43 />
      </div>
    </div>
  );
}

function Icon96() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container155() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon96 />
      </div>
    </div>
  );
}

function Icon97() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container156() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon97 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">37 빈칸</p>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container155 />
        <Container156 />
      </div>
    </div>
  );
}

function Heading46() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">동일인확인서</p>
      </div>
    </div>
  );
}

function Text90() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin44() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text90 />
      </div>
    </div>
  );
}

function Text91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign44() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text91 />
        </div>
      </div>
    </div>
  );
}

function Link44() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-15 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container154 />
        <Heading46 />
        <TextMargin44 />
        <ContainerAlign44 />
      </div>
    </div>
  );
}

function Icon98() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container158() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon98 />
      </div>
    </div>
  );
}

function Icon99() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container159() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon99 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">30 빈칸</p>
      </div>
    </div>
  );
}

function Container157() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container158 />
        <Container159 />
      </div>
    </div>
  );
}

function Heading47() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">동포단체현황</p>
      </div>
    </div>
  );
}

function Text92() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin45() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text92 />
      </div>
    </div>
  );
}

function Text93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign45() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text93 />
        </div>
      </div>
    </div>
  );
}

function Link45() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-16 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container157 />
        <Heading47 />
        <TextMargin45 />
        <ContainerAlign45 />
      </div>
    </div>
  );
}

function Icon100() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container161() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon100 />
      </div>
    </div>
  );
}

function Icon101() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container162() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon101 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">5 빈칸</p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container161 />
        <Container162 />
      </div>
    </div>
  );
}

function Heading48() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">마약검사서</p>
      </div>
    </div>
  );
}

function Text94() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin46() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text94 />
      </div>
    </div>
  );
}

function Text95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign46() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text95 />
        </div>
      </div>
    </div>
  );
}

function Link46() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-16 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container160 />
        <Heading48 />
        <TextMargin46 />
        <ContainerAlign46 />
      </div>
    </div>
  );
}

function Icon102() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container164() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon102 />
      </div>
    </div>
  );
}

function Icon103() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container165() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon103 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">5 빈칸</p>
      </div>
    </div>
  );
}

function Container163() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container164 />
        <Container165 />
      </div>
    </div>
  );
}

function Heading49() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">방문취업(H-2)자용 건강진단서</p>
      </div>
    </div>
  );
}

function Text96() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin47() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text96 />
      </div>
    </div>
  );
}

function Text97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign47() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text97 />
        </div>
      </div>
    </div>
  );
}

function Link47() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-16 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container163 />
        <Heading49 />
        <TextMargin47 />
        <ContainerAlign47 />
      </div>
    </div>
  );
}

function Icon104() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container167() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon104 />
      </div>
    </div>
  );
}

function Icon105() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container168() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon105 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">27 빈칸</p>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container167 />
        <Container168 />
      </div>
    </div>
  );
}

function Heading50() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">방문취업동포취업개시등신고서</p>
      </div>
    </div>
  );
}

function Text98() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin48() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text98 />
      </div>
    </div>
  );
}

function Text99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign48() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text99 />
        </div>
      </div>
    </div>
  );
}

function Link48() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-17 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container166 />
        <Heading50 />
        <TextMargin48 />
        <ContainerAlign48 />
      </div>
    </div>
  );
}

function Icon106() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container170() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon106 />
      </div>
    </div>
  );
}

function Icon107() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container171() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon107 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">16 빈칸</p>
      </div>
    </div>
  );
}

function Container169() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container170 />
        <Container171 />
      </div>
    </div>
  );
}

function Heading51() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">번역자확인서</p>
      </div>
    </div>
  );
}

function Text100() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin49() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text100 />
      </div>
    </div>
  );
}

function Text101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign49() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text101 />
        </div>
      </div>
    </div>
  );
}

function Link49() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-17 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container169 />
        <Heading51 />
        <TextMargin49 />
        <ContainerAlign49 />
      </div>
    </div>
  );
}

function Icon108() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container173() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon108 />
      </div>
    </div>
  );
}

function Icon109() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container174() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon109 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">16 빈칸</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container173 />
        <Container174 />
      </div>
    </div>
  );
}

function Heading52() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">번역자확인서(최종)</p>
      </div>
    </div>
  );
}

function Text102() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin50() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text102 />
      </div>
    </div>
  );
}

function Text103() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign50() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text103 />
        </div>
      </div>
    </div>
  );
}

function Link50() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-17 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container172 />
        <Heading52 />
        <TextMargin50 />
        <ContainerAlign50 />
      </div>
    </div>
  );
}

function Icon110() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container176() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon110 />
      </div>
    </div>
  );
}

function Icon111() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container177() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon111 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">18 빈칸</p>
      </div>
    </div>
  );
}

function Container175() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container176 />
        <Container177 />
      </div>
    </div>
  );
}

function Heading53() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">보호에대한이의신청서</p>
      </div>
    </div>
  );
}

function Text104() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin51() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text104 />
      </div>
    </div>
  );
}

function Text105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign51() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text105 />
        </div>
      </div>
    </div>
  );
}

function Link51() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-18 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container175 />
        <Heading53 />
        <TextMargin51 />
        <ContainerAlign51 />
      </div>
    </div>
  );
}

function Icon112() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container179() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon112 />
      </div>
    </div>
  );
}

function Icon113() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container180() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon113 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">20 빈칸</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container179 />
        <Container180 />
      </div>
    </div>
  );
}

function Heading54() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">보호일시해제청구서</p>
      </div>
    </div>
  );
}

function Text106() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin52() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text106 />
      </div>
    </div>
  );
}

function Text107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign52() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text107 />
        </div>
      </div>
    </div>
  );
}

function Link52() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-18 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container178 />
        <Heading54 />
        <TextMargin52 />
        <ContainerAlign52 />
      </div>
    </div>
  );
}

function Icon114() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container182() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon114 />
      </div>
    </div>
  );
}

function Icon115() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container183() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon115 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">40 빈칸</p>
      </div>
    </div>
  );
}

function Container181() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container182 />
        <Container183 />
      </div>
    </div>
  );
}

function Heading55() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">복수국적자발견통보서</p>
      </div>
    </div>
  );
}

function Text108() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin53() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text108 />
      </div>
    </div>
  );
}

function Text109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign53() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text109 />
        </div>
      </div>
    </div>
  );
}

function Link53() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-18 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container181 />
        <Heading55 />
        <TextMargin53 />
        <ContainerAlign53 />
      </div>
    </div>
  );
}

function Icon116() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container185() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon116 />
      </div>
    </div>
  );
}

function Icon117() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container186() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon117 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">15 빈칸</p>
      </div>
    </div>
  );
}

function Container184() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container185 />
        <Container186 />
      </div>
    </div>
  );
}

function Heading56() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">불법체류 취업 방지 서약서(F-1-5)</p>
      </div>
    </div>
  );
}

function Text110() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin54() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text110 />
      </div>
    </div>
  );
}

function Text111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign54() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text111 />
        </div>
      </div>
    </div>
  );
}

function Link54() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-19 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container184 />
        <Heading56 />
        <TextMargin54 />
        <ContainerAlign54 />
      </div>
    </div>
  );
}

function Icon118() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container188() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon118 />
      </div>
    </div>
  );
}

function Icon119() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container189() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon119 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">48 빈칸</p>
      </div>
    </div>
  );
}

function Container187() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container188 />
        <Container189 />
      </div>
    </div>
  );
}

function Heading57() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">불법체류외국인 자진출국 신고서</p>
      </div>
    </div>
  );
}

function Text112() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin55() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text112 />
      </div>
    </div>
  );
}

function Text113() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign55() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text113 />
        </div>
      </div>
    </div>
  );
}

function Link55() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-19 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container187 />
        <Heading57 />
        <TextMargin55 />
        <ContainerAlign55 />
      </div>
    </div>
  );
}

function Icon120() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container191() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon120 />
      </div>
    </div>
  );
}

function Icon121() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container192() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon121 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">14 빈칸</p>
      </div>
    </div>
  );
}

function Container190() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container191 />
        <Container192 />
      </div>
    </div>
  );
}

function Heading58() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">비밀번호신청양식</p>
      </div>
    </div>
  );
}

function Text114() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin56() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text114 />
      </div>
    </div>
  );
}

function Text115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign56() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text115 />
        </div>
      </div>
    </div>
  );
}

function Link56() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-19 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container190 />
        <Heading58 />
        <TextMargin56 />
        <ContainerAlign56 />
      </div>
    </div>
  );
}

function Icon122() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container194() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon122 />
      </div>
    </div>
  );
}

function Icon123() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container195() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon123 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">17 빈칸</p>
      </div>
    </div>
  );
}

function Container193() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container194 />
        <Container195 />
      </div>
    </div>
  );
}

function Heading59() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">비취업 서약서(F-1-5)</p>
      </div>
    </div>
  );
}

function Text116() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin57() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text116 />
      </div>
    </div>
  );
}

function Text117() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign57() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text117 />
        </div>
      </div>
    </div>
  );
}

function Link57() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-20 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container193 />
        <Heading59 />
        <TextMargin57 />
        <ContainerAlign57 />
      </div>
    </div>
  );
}

function Icon124() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container197() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon124 />
      </div>
    </div>
  );
}

function Icon125() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container198() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon125 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">47 빈칸</p>
      </div>
    </div>
  );
}

function Container196() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container197 />
        <Container198 />
      </div>
    </div>
  );
}

function Heading60() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">사실증명발급·열람신청서</p>
      </div>
    </div>
  );
}

function Text118() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin58() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text118 />
      </div>
    </div>
  );
}

function Text119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign58() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text119 />
        </div>
      </div>
    </div>
  );
}

function Link58() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-20 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container196 />
        <Heading60 />
        <TextMargin58 />
        <ContainerAlign58 />
      </div>
    </div>
  );
}

function Icon126() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container200() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon126 />
      </div>
    </div>
  );
}

function Icon127() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container201() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon127 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">33 빈칸</p>
      </div>
    </div>
  );
}

function Container199() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container200 />
        <Container201 />
      </div>
    </div>
  );
}

function Heading61() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">사실증명서 발급신청서</p>
      </div>
    </div>
  );
}

function Text120() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin59() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text120 />
      </div>
    </div>
  );
}

function Text121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign59() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text121 />
        </div>
      </div>
    </div>
  );
}

function Link59() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-20 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container199 />
        <Heading61 />
        <TextMargin59 />
        <ContainerAlign59 />
      </div>
    </div>
  );
}

function Icon128() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container203() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon128 />
      </div>
    </div>
  );
}

function Icon129() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container204() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon129 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">20 빈칸</p>
      </div>
    </div>
  );
}

function Container202() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container203 />
        <Container204 />
      </div>
    </div>
  );
}

function Heading62() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">사업자(고용주)및 신청인 서약서</p>
      </div>
    </div>
  );
}

function Text122() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin60() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text122 />
      </div>
    </div>
  );
}

function Text123() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign60() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text123 />
        </div>
      </div>
    </div>
  );
}

function Link60() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-21 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container202 />
        <Heading62 />
        <TextMargin60 />
        <ContainerAlign60 />
      </div>
    </div>
  );
}

function Icon130() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container206() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon130 />
      </div>
    </div>
  );
}

function Icon131() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container207() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon131 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">64 빈칸</p>
      </div>
    </div>
  );
}

function Container205() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container206 />
        <Container207 />
      </div>
    </div>
  );
}

function Heading63() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">사증발급대상자명단</p>
      </div>
    </div>
  );
}

function Text124() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin61() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text124 />
      </div>
    </div>
  );
}

function Text125() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign61() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text125 />
        </div>
      </div>
    </div>
  );
}

function Link61() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-21 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container205 />
        <Heading63 />
        <TextMargin61 />
        <ContainerAlign61 />
      </div>
    </div>
  );
}

function Icon132() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container209() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon132 />
      </div>
    </div>
  );
}

function Icon133() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container210() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon133 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">181 빈칸</p>
      </div>
    </div>
  );
}

function Container208() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container209 />
        <Container210 />
      </div>
    </div>
  );
}

function Heading64() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">사증발급신청서</p>
      </div>
    </div>
  );
}

function Text126() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin62() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text126 />
      </div>
    </div>
  );
}

function Text127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign62() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text127 />
        </div>
      </div>
    </div>
  );
}

function Link62() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-21 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container208 />
        <Heading64 />
        <TextMargin62 />
        <ContainerAlign62 />
      </div>
    </div>
  );
}

function Icon134() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container212() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon134 />
      </div>
    </div>
  );
}

function Icon135() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container213() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon135 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">34 빈칸</p>
      </div>
    </div>
  );
}

function Container211() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container212 />
        <Container213 />
      </div>
    </div>
  );
}

function Heading65() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">사증발급신청서(사증발급인정서를 받은사람)</p>
      </div>
    </div>
  );
}

function Text128() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin63() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text128 />
      </div>
    </div>
  );
}

function Text129() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign63() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text129 />
        </div>
      </div>
    </div>
  );
}

function Link63() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-22 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container211 />
        <Heading65 />
        <TextMargin63 />
        <ContainerAlign63 />
      </div>
    </div>
  );
}

function Icon136() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container215() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon136 />
      </div>
    </div>
  );
}

function Icon137() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container216() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon137 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">177 빈칸</p>
      </div>
    </div>
  );
}

function Container214() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container215 />
        <Container216 />
      </div>
    </div>
  );
}

function Heading66() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">사증발급인정신청서</p>
      </div>
    </div>
  );
}

function Text130() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin64() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text130 />
      </div>
    </div>
  );
}

function Text131() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign64() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text131 />
        </div>
      </div>
    </div>
  );
}

function Link64() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-22 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container214 />
        <Heading66 />
        <TextMargin64 />
        <ContainerAlign64 />
      </div>
    </div>
  );
}

function Icon138() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container218() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon138 />
      </div>
    </div>
  );
}

function Icon139() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container219() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon139 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">41 빈칸</p>
      </div>
    </div>
  );
}

function Container217() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container218 />
        <Container219 />
      </div>
    </div>
  );
}

function Heading67() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">산업연수계획서</p>
      </div>
    </div>
  );
}

function Text132() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin65() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text132 />
      </div>
    </div>
  );
}

function Text133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign65() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text133 />
        </div>
      </div>
    </div>
  );
}

function Link65() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-22 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container217 />
        <Heading67 />
        <TextMargin65 />
        <ContainerAlign65 />
      </div>
    </div>
  );
}

function Icon140() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container221() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon140 />
      </div>
    </div>
  );
}

function Icon141() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container222() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon141 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">41 빈칸</p>
      </div>
    </div>
  );
}

function Container220() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container221 />
        <Container222 />
      </div>
    </div>
  );
}

function Heading68() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">산업연수기간연장신청사유서</p>
      </div>
    </div>
  );
}

function Text134() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin66() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text134 />
      </div>
    </div>
  );
}

function Text135() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign66() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text135 />
        </div>
      </div>
    </div>
  );
}

function Link66() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-23 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container220 />
        <Heading68 />
        <TextMargin66 />
        <ContainerAlign66 />
      </div>
    </div>
  );
}

function Icon142() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container224() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon142 />
      </div>
    </div>
  );
}

function Icon143() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container225() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon143 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">17 빈칸</p>
      </div>
    </div>
  );
}

function Container223() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container224 />
        <Container225 />
      </div>
    </div>
  );
}

function Heading69() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">산업연수일지</p>
      </div>
    </div>
  );
}

function Text136() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin67() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text136 />
      </div>
    </div>
  );
}

function Text137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign67() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text137 />
        </div>
      </div>
    </div>
  );
}

function Link67() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-23 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container223 />
        <Heading69 />
        <TextMargin67 />
        <ContainerAlign67 />
      </div>
    </div>
  );
}

function Icon144() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container227() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon144 />
      </div>
    </div>
  );
}

function Icon145() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container228() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon145 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">49 빈칸</p>
      </div>
    </div>
  );
}

function Container226() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container227 />
        <Container228 />
      </div>
    </div>
  );
}

function Heading70() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">상륙허가신청서</p>
      </div>
    </div>
  );
}

function Text138() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin68() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text138 />
      </div>
    </div>
  );
}

function Text139() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign68() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text139 />
        </div>
      </div>
    </div>
  );
}

function Link68() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-23 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container226 />
        <Heading70 />
        <TextMargin68 />
        <ContainerAlign68 />
      </div>
    </div>
  );
}

function Icon146() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container230() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon146 />
      </div>
    </div>
  );
}

function Icon147() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container231() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon147 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">34 빈칸</p>
      </div>
    </div>
  );
}

function Container229() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container230 />
        <Container231 />
      </div>
    </div>
  );
}

function Heading71() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">생계비 등 지원신청서</p>
      </div>
    </div>
  );
}

function Text140() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin69() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text140 />
      </div>
    </div>
  );
}

function Text141() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign69() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text141 />
        </div>
      </div>
    </div>
  );
}

function Link69() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-24 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container229 />
        <Heading71 />
        <TextMargin69 />
        <ContainerAlign69 />
      </div>
    </div>
  );
}

function Icon148() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container233() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon148 />
      </div>
    </div>
  );
}

function Icon149() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container234() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon149 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">88 빈칸</p>
      </div>
    </div>
  );
}

function Container232() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container233 />
        <Container234 />
      </div>
    </div>
  );
}

function Heading72() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">승객명부</p>
      </div>
    </div>
  );
}

function Text142() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin70() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text142 />
      </div>
    </div>
  );
}

function Text143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign70() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text143 />
        </div>
      </div>
    </div>
  );
}

function Link70() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-24 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container232 />
        <Heading72 />
        <TextMargin70 />
        <ContainerAlign70 />
      </div>
    </div>
  );
}

function Icon150() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container236() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon150 />
      </div>
    </div>
  );
}

function Icon151() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container237() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon151 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">38 빈칸</p>
      </div>
    </div>
  );
}

function Container235() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container236 />
        <Container237 />
      </div>
    </div>
  );
}

function Heading73() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">승무원등록신고서</p>
      </div>
    </div>
  );
}

function Text144() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin71() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text144 />
      </div>
    </div>
  );
}

function Text145() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign71() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text145 />
        </div>
      </div>
    </div>
  );
}

function Link71() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-24 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container235 />
        <Heading73 />
        <TextMargin71 />
        <ContainerAlign71 />
      </div>
    </div>
  );
}

function Icon152() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container239() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon152 />
      </div>
    </div>
  );
}

function Icon153() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container240() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon153 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">75 빈칸</p>
      </div>
    </div>
  );
}

function Container238() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container239 />
        <Container240 />
      </div>
    </div>
  );
}

function Heading74() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">승무원명부</p>
      </div>
    </div>
  );
}

function Text146() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin72() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text146 />
      </div>
    </div>
  );
}

function Text147() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign72() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text147 />
        </div>
      </div>
    </div>
  );
}

function Link72() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-25 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container238 />
        <Heading74 />
        <TextMargin72 />
        <ContainerAlign72 />
      </div>
    </div>
  );
}

function Icon154() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container242() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon154 />
      </div>
    </div>
  );
}

function Icon155() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container243() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon155 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">36 빈칸</p>
      </div>
    </div>
  );
}

function Container241() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container242 />
        <Container243 />
      </div>
    </div>
  );
}

function Heading75() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">승선허가출입국심사장출입허가신청서</p>
      </div>
    </div>
  );
}

function Text148() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin73() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text148 />
      </div>
    </div>
  );
}

function Text149() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign73() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text149 />
        </div>
      </div>
    </div>
  );
}

function Link73() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-25 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container241 />
        <Heading75 />
        <TextMargin73 />
        <ContainerAlign73 />
      </div>
    </div>
  );
}

function Icon156() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container245() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon156 />
      </div>
    </div>
  );
}

function Icon157() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container246() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon157 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">54 빈칸</p>
      </div>
    </div>
  );
}

function Container244() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container245 />
        <Container246 />
      </div>
    </div>
  );
}

function Heading76() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">시간제취업확인서</p>
      </div>
    </div>
  );
}

function Text150() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin74() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text150 />
      </div>
    </div>
  );
}

function Text151() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign74() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text151 />
        </div>
      </div>
    </div>
  );
}

function Link74() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-25 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container244 />
        <Heading76 />
        <TextMargin74 />
        <ContainerAlign74 />
      </div>
    </div>
  );
}

function Icon158() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container248() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon158 />
      </div>
    </div>
  );
}

function Icon159() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container249() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon159 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">21 빈칸</p>
      </div>
    </div>
  );
}

function Container247() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container248 />
        <Container249 />
      </div>
    </div>
  );
}

function Heading77() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">신원보증서</p>
      </div>
    </div>
  );
}

function Text152() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin75() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text152 />
      </div>
    </div>
  );
}

function Text153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign75() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text153 />
        </div>
      </div>
    </div>
  );
}

function Link75() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-26 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container247 />
        <Heading77 />
        <TextMargin75 />
        <ContainerAlign75 />
      </div>
    </div>
  );
}

function Icon160() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container251() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon160 />
      </div>
    </div>
  );
}

function Icon161() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container252() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon161 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">29 빈칸</p>
      </div>
    </div>
  );
}

function Container250() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container251 />
        <Container252 />
      </div>
    </div>
  );
}

function Heading78() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">신원보증서(영문)</p>
      </div>
    </div>
  );
}

function Text154() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin76() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text154 />
      </div>
    </div>
  );
}

function Text155() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign76() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text155 />
        </div>
      </div>
    </div>
  );
}

function Link76() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-26 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container250 />
        <Heading78 />
        <TextMargin76 />
        <ContainerAlign76 />
      </div>
    </div>
  );
}

function Icon162() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container254() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon162 />
      </div>
    </div>
  );
}

function Icon163() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container255() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon163 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">30 빈칸</p>
      </div>
    </div>
  );
}

function Container253() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container254 />
        <Container255 />
      </div>
    </div>
  );
}

function Heading79() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">신원보증서(한글)</p>
      </div>
    </div>
  );
}

function Text156() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin77() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text156 />
      </div>
    </div>
  );
}

function Text157() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 19일</p>
    </div>
  );
}

function ContainerAlign77() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text157 />
        </div>
      </div>
    </div>
  );
}

function Link77() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-26 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container253 />
        <Heading79 />
        <TextMargin77 />
        <ContainerAlign77 />
      </div>
    </div>
  );
}

function Icon164() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container257() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon164 />
      </div>
    </div>
  );
}

function Icon165() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container258() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon165 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">72 빈칸</p>
      </div>
    </div>
  );
}

function Container256() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container257 />
        <Container258 />
      </div>
    </div>
  );
}

function Heading80() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">어학연수생현황</p>
      </div>
    </div>
  );
}

function Text158() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin78() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text158 />
      </div>
    </div>
  );
}

function Text159() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign78() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text159 />
        </div>
      </div>
    </div>
  );
}

function Link78() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-27 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container256 />
        <Heading80 />
        <TextMargin78 />
        <ContainerAlign78 />
      </div>
    </div>
  );
}

function Icon166() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container260() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon166 />
      </div>
    </div>
  );
}

function Icon167() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container261() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon167 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">13 빈칸</p>
      </div>
    </div>
  );
}

function Container259() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container260 />
        <Container261 />
      </div>
    </div>
  );
}

function Heading81() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">여권 유효기간 범위 내 체류 확인서</p>
      </div>
    </div>
  );
}

function Text160() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin79() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text160 />
      </div>
    </div>
  );
}

function Text161() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign79() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text161 />
        </div>
      </div>
    </div>
  );
}

function Link79() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-27 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container259 />
        <Heading81 />
        <TextMargin79 />
        <ContainerAlign79 />
      </div>
    </div>
  );
}

function Icon168() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container263() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon168 />
      </div>
    </div>
  );
}

function Icon169() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container264() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon169 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">20 빈칸</p>
      </div>
    </div>
  );
}

function Container262() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container263 />
        <Container264 />
      </div>
    </div>
  );
}

function Heading82() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">연수계획서</p>
      </div>
    </div>
  );
}

function Text162() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin80() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text162 />
      </div>
    </div>
  );
}

function Text163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign80() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text163 />
        </div>
      </div>
    </div>
  );
}

function Link80() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-27 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container262 />
        <Heading82 />
        <TextMargin80 />
        <ContainerAlign80 />
      </div>
    </div>
  );
}

function Icon170() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container266() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon170 />
      </div>
    </div>
  );
}

function Icon171() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container267() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon171 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">20 빈칸</p>
      </div>
    </div>
  );
}

function Container265() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container266 />
        <Container267 />
      </div>
    </div>
  );
}

function Heading83() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">연수추천서</p>
      </div>
    </div>
  );
}

function Text164() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin81() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text164 />
      </div>
    </div>
  );
}

function Text165() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign81() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text165 />
        </div>
      </div>
    </div>
  );
}

function Link81() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-28 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container265 />
        <Heading83 />
        <TextMargin81 />
        <ContainerAlign81 />
      </div>
    </div>
  );
}

function Icon172() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container269() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon172 />
      </div>
    </div>
  );
}

function Icon173() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container270() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon173 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">15 빈칸</p>
      </div>
    </div>
  );
}

function Container268() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container269 />
        <Container270 />
      </div>
    </div>
  );
}

function Heading84() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">열람ㆍ복사 신청서</p>
      </div>
    </div>
  );
}

function Text166() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin82() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text166 />
      </div>
    </div>
  );
}

function Text167() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign82() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text167 />
        </div>
      </div>
    </div>
  );
}

function Link82() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-28 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container268 />
        <Heading84 />
        <TextMargin82 />
        <ContainerAlign82 />
      </div>
    </div>
  );
}

function Icon174() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container272() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon174 />
      </div>
    </div>
  );
}

function Icon175() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container273() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon175 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">141 빈칸</p>
      </div>
    </div>
  );
}

function Container271() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container272 />
        <Container273 />
      </div>
    </div>
  );
}

function Heading85() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">영주(F-5) 자격 신청자 기본 정보</p>
      </div>
    </div>
  );
}

function Text168() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin83() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text168 />
      </div>
    </div>
  );
}

function Text169() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign83() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text169 />
        </div>
      </div>
    </div>
  );
}

function Link83() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-28 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container271 />
        <Heading85 />
        <TextMargin83 />
        <ContainerAlign83 />
      </div>
    </div>
  );
}

function Icon176() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container275() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon176 />
      </div>
    </div>
  );
}

function Icon177() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container276() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon177 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">121 빈칸</p>
      </div>
    </div>
  );
}

function Container274() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container275 />
        <Container276 />
      </div>
    </div>
  );
}

function Heading86() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">영주자격자의 배우자 결혼배경진술서(F-2-3)</p>
      </div>
    </div>
  );
}

function Text170() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin84() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text170 />
      </div>
    </div>
  );
}

function Text171() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign84() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text171 />
        </div>
      </div>
    </div>
  );
}

function Link84() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-29 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container274 />
        <Heading86 />
        <TextMargin84 />
        <ContainerAlign84 />
      </div>
    </div>
  );
}

function Icon178() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container278() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon178 />
      </div>
    </div>
  );
}

function Icon179() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container279() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon179 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">215 빈칸</p>
      </div>
    </div>
  );
}

function Container277() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container278 />
        <Container279 />
      </div>
    </div>
  );
}

function Heading87() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">영주자격자의 배우자 초청장(F-2-3)</p>
      </div>
    </div>
  );
}

function Text172() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin85() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text172 />
      </div>
    </div>
  );
}

function Text173() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign85() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text173 />
        </div>
      </div>
    </div>
  );
}

function Link85() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-29 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container277 />
        <Heading87 />
        <TextMargin85 />
        <ContainerAlign85 />
      </div>
    </div>
  );
}

function Icon180() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container281() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon180 />
      </div>
    </div>
  );
}

function Icon181() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container282() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon181 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">30 빈칸</p>
      </div>
    </div>
  );
}

function Container280() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container281 />
        <Container282 />
      </div>
    </div>
  );
}

function Heading88() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국국적불행사서약서</p>
      </div>
    </div>
  );
}

function Text174() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin86() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text174 />
      </div>
    </div>
  );
}

function Text175() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign86() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text175 />
        </div>
      </div>
    </div>
  );
}

function Link86() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-29 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container280 />
        <Heading88 />
        <TextMargin86 />
        <ContainerAlign86 />
      </div>
    </div>
  );
}

function Icon182() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container284() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon182 />
      </div>
    </div>
  );
}

function Icon183() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container285() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon183 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">45 빈칸</p>
      </div>
    </div>
  );
}

function Container283() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container284 />
        <Container285 />
      </div>
    </div>
  );
}

function Heading89() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국국적불행사서약확인서</p>
      </div>
    </div>
  );
}

function Text176() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin87() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text176 />
      </div>
    </div>
  );
}

function Text177() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign87() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text177 />
        </div>
      </div>
    </div>
  );
}

function Link87() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-30 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container283 />
        <Heading89 />
        <TextMargin87 />
        <ContainerAlign87 />
      </div>
    </div>
  );
}

function Icon184() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container287() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon184 />
      </div>
    </div>
  );
}

function Icon185() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container288() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon185 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">33 빈칸</p>
      </div>
    </div>
  );
}

function Container286() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container287 />
        <Container288 />
      </div>
    </div>
  );
}

function Heading90() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국국적포기확인서</p>
      </div>
    </div>
  );
}

function Text178() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin88() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text178 />
      </div>
    </div>
  );
}

function Text179() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign88() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text179 />
        </div>
      </div>
    </div>
  );
}

function Link88() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-30 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container286 />
        <Heading90 />
        <TextMargin88 />
        <ContainerAlign88 />
      </div>
    </div>
  );
}

function Icon186() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container290() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon186 />
      </div>
    </div>
  );
}

function Icon187() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container291() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon187 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">33 빈칸</p>
      </div>
    </div>
  );
}

function Container289() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container290 />
        <Container291 />
      </div>
    </div>
  );
}

function Heading91() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국국적포기확인서발급신청서</p>
      </div>
    </div>
  );
}

function Text180() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin89() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text180 />
      </div>
    </div>
  );
}

function Text181() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign89() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text181 />
        </div>
      </div>
    </div>
  );
}

function Link89() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-30 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container289 />
        <Heading91 />
        <TextMargin89 />
        <ContainerAlign89 />
      </div>
    </div>
  );
}

function Icon188() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container293() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon188 />
      </div>
    </div>
  );
}

function Icon189() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container294() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon189 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">98 빈칸</p>
      </div>
    </div>
  );
}

function Container292() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container293 />
        <Container294 />
      </div>
    </div>
  );
}

function Heading92() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국인 배우자 초청인의 가족소득현황 진술서</p>
      </div>
    </div>
  );
}

function Text182() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin90() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text182 />
      </div>
    </div>
  );
}

function Text183() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign90() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text183 />
        </div>
      </div>
    </div>
  );
}

function Link90() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-31 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container292 />
        <Heading92 />
        <TextMargin90 />
        <ContainerAlign90 />
      </div>
    </div>
  );
}

function Icon190() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container296() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon190 />
      </div>
    </div>
  );
}

function Icon191() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container297() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon191 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">316 빈칸</p>
      </div>
    </div>
  );
}

function Container295() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container296 />
        <Container297 />
      </div>
    </div>
  );
}

function Heading93() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국인 배우자 초청장</p>
      </div>
    </div>
  );
}

function Text184() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin91() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text184 />
      </div>
    </div>
  );
}

function Text185() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign91() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text185 />
        </div>
      </div>
    </div>
  );
}

function Link91() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-31 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container295 />
        <Heading93 />
        <TextMargin91 />
        <ContainerAlign91 />
      </div>
    </div>
  );
}

function Icon192() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container299() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon192 />
      </div>
    </div>
  );
}

function Icon193() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container300() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon193 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">121 빈칸</p>
      </div>
    </div>
  );
}

function Container298() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container299 />
        <Container300 />
      </div>
    </div>
  );
}

function Heading94() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국인 배우자의 결혼배경 진술서</p>
      </div>
    </div>
  );
}

function Text186() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin92() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text186 />
      </div>
    </div>
  );
}

function Text187() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign92() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text187 />
        </div>
      </div>
    </div>
  );
}

function Link92() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-31 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container298 />
        <Heading94 />
        <TextMargin92 />
        <ContainerAlign92 />
      </div>
    </div>
  );
}

function Icon194() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container302() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon194 />
      </div>
    </div>
  );
}

function Icon195() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container303() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon195 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">79 빈칸</p>
      </div>
    </div>
  );
}

function Container301() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container302 />
        <Container303 />
      </div>
    </div>
  );
}

function Heading95() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국인 직업 및 연간 소득금액 신고서</p>
      </div>
    </div>
  );
}

function Text188() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin93() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text188 />
      </div>
    </div>
  );
}

function Text189() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign93() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text189 />
        </div>
      </div>
    </div>
  );
}

function Link93() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-32 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container301 />
        <Heading95 />
        <TextMargin93 />
        <ContainerAlign93 />
      </div>
    </div>
  );
}

function Icon196() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container305() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon196 />
      </div>
    </div>
  );
}

function Icon197() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container306() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon197 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">14 빈칸</p>
      </div>
    </div>
  );
}

function Container304() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container305 />
        <Container306 />
      </div>
    </div>
  );
}

function Heading96() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국인부동산등기용등록번호발급신청서</p>
      </div>
    </div>
  );
}

function Text190() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin94() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text190 />
      </div>
    </div>
  );
}

function Text191() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign94() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text191 />
        </div>
      </div>
    </div>
  );
}

function Link94() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-32 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container304 />
        <Heading96 />
        <TextMargin94 />
        <ContainerAlign94 />
      </div>
    </div>
  );
}

function Icon198() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container308() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon198 />
      </div>
    </div>
  );
}

function Icon199() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container309() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon199 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">28 빈칸</p>
      </div>
    </div>
  );
}

function Container307() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container308 />
        <Container309 />
      </div>
    </div>
  );
}

function Heading97() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국인부동산등기용등록번호부여신청서</p>
      </div>
    </div>
  );
}

function Text192() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin95() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text192 />
      </div>
    </div>
  );
}

function Text193() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign95() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text193 />
        </div>
      </div>
    </div>
  );
}

function Link95() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-32 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container307 />
        <Heading97 />
        <TextMargin95 />
        <ContainerAlign95 />
      </div>
    </div>
  );
}

function Icon200() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container311() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon200 />
      </div>
    </div>
  );
}

function Icon201() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container312() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon201 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">32 빈칸</p>
      </div>
    </div>
  );
}

function Container310() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container311 />
        <Container312 />
      </div>
    </div>
  );
}

function Heading98() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국인연구생확인서</p>
      </div>
    </div>
  );
}

function Text194() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin96() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text194 />
      </div>
    </div>
  );
}

function Text195() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign96() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text195 />
        </div>
      </div>
    </div>
  );
}

function Link96() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-33 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container310 />
        <Heading98 />
        <TextMargin96 />
        <ContainerAlign96 />
      </div>
    </div>
  );
}

function Icon202() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container314() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon202 />
      </div>
    </div>
  );
}

function Icon203() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container315() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon203 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">16 빈칸</p>
      </div>
    </div>
  );
}

function Container313() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container314 />
        <Container315 />
      </div>
    </div>
  );
}

function Heading99() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외국인환자초청확인서</p>
      </div>
    </div>
  );
}

function Text196() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin97() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text196 />
      </div>
    </div>
  );
}

function Text197() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign97() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text197 />
        </div>
      </div>
    </div>
  );
}

function Link97() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-33 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container313 />
        <Heading99 />
        <TextMargin97 />
        <ContainerAlign97 />
      </div>
    </div>
  );
}

function Icon204() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container317() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon204 />
      </div>
    </div>
  );
}

function Icon205() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container318() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon205 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">103 빈칸</p>
      </div>
    </div>
  );
}

function Container316() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container317 />
        <Container318 />
      </div>
    </div>
  );
}

function Heading100() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">외항선입출항보고서</p>
      </div>
    </div>
  );
}

function Text198() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin98() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text198 />
      </div>
    </div>
  );
}

function Text199() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign98() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text199 />
        </div>
      </div>
    </div>
  );
}

function Link98() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-33 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container316 />
        <Heading100 />
        <TextMargin98 />
        <ContainerAlign98 />
      </div>
    </div>
  );
}

function Icon206() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container320() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon206 />
      </div>
    </div>
  );
}

function Icon207() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container321() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon207 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">18 빈칸</p>
      </div>
    </div>
  );
}

function Container319() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container320 />
        <Container321 />
      </div>
    </div>
  );
}

function Heading101() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">위임장</p>
      </div>
    </div>
  );
}

function Text200() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin99() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text200 />
      </div>
    </div>
  );
}

function Text201() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
      </div>
    </div>
  );
}

function Container322() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Text201 />
    </div>
  );
}

function ContainerAlign99() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <Container322 />
      </div>
    </div>
  );
}

function Link99() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-34 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container319 />
        <Heading101 />
        <TextMargin99 />
        <ContainerAlign99 />
      </div>
    </div>
  );
}

function Icon208() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container324() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon208 />
      </div>
    </div>
  );
}

function Icon209() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container325() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon209 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">17 빈칸</p>
      </div>
    </div>
  );
}

function Container323() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container324 />
        <Container325 />
      </div>
    </div>
  );
}

function Heading102() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start overflow-clip relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-[301px]">유학생 시간제취업 요건 준수 확인서(제조업_국문)</p>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Heading102 />
      </div>
    </div>
  );
}

function Text202() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin100() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text202 />
      </div>
    </div>
  );
}

function Text203() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign100() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text203 />
        </div>
      </div>
    </div>
  );
}

function Link100() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-34 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container323 />
        <Heading3Margin1 />
        <TextMargin100 />
        <ContainerAlign100 />
      </div>
    </div>
  );
}

function Icon210() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container327() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon210 />
      </div>
    </div>
  );
}

function Icon211() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container328() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon211 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">58 빈칸</p>
      </div>
    </div>
  );
}

function Container326() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container327 />
        <Container328 />
      </div>
    </div>
  );
}

function Heading103() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">유학생현황</p>
      </div>
    </div>
  );
}

function Text204() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin101() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text204 />
      </div>
    </div>
  );
}

function Text205() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
      </div>
    </div>
  );
}

function Container329() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Text205 />
    </div>
  );
}

function ContainerAlign101() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <Container329 />
      </div>
    </div>
  );
}

function Link101() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-34 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container326 />
        <Heading103 />
        <TextMargin101 />
        <ContainerAlign101 />
      </div>
    </div>
  );
}

function Icon212() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container331() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon212 />
      </div>
    </div>
  );
}

function Icon213() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container332() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon213 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">32 빈칸</p>
      </div>
    </div>
  );
}

function Container330() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container331 />
        <Container332 />
      </div>
    </div>
  );
}

function Heading104() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">의료 지원 신청서</p>
      </div>
    </div>
  );
}

function Text206() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin102() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text206 />
      </div>
    </div>
  );
}

function Text207() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign102() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text207 />
        </div>
      </div>
    </div>
  );
}

function Link102() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-35 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container330 />
        <Heading104 />
        <TextMargin102 />
        <ContainerAlign102 />
      </div>
    </div>
  );
}

function Icon214() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container334() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon214 />
      </div>
    </div>
  );
}

function Icon215() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container335() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon215 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">84 빈칸</p>
      </div>
    </div>
  );
}

function Container333() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container334 />
        <Container335 />
      </div>
    </div>
  );
}

function Heading105() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">이의신청서</p>
      </div>
    </div>
  );
}

function Text208() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin103() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text208 />
      </div>
    </div>
  );
}

function Text209() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign103() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text209 />
        </div>
      </div>
    </div>
  );
}

function Link103() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-35 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container333 />
        <Heading105 />
        <TextMargin103 />
        <ContainerAlign103 />
      </div>
    </div>
  );
}

function Icon216() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container337() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon216 />
      </div>
    </div>
  );
}

function Icon217() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container338() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon217 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">27 빈칸</p>
      </div>
    </div>
  );
}

function Container336() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container337 />
        <Container338 />
      </div>
    </div>
  );
}

function Heading106() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">인지경위서</p>
      </div>
    </div>
  );
}

function Text210() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin104() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text210 />
      </div>
    </div>
  );
}

function Text211() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign104() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text211 />
        </div>
      </div>
    </div>
  );
}

function Link104() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-35 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container336 />
        <Heading106 />
        <TextMargin104 />
        <ContainerAlign104 />
      </div>
    </div>
  );
}

function Icon218() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container340() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon218 />
      </div>
    </div>
  );
}

function Icon219() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container341() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon219 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">16 빈칸</p>
      </div>
    </div>
  );
}

function Container339() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container340 />
        <Container341 />
      </div>
    </div>
  );
}

function Heading107() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">임시납부신청서</p>
      </div>
    </div>
  );
}

function Text212() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin105() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text212 />
      </div>
    </div>
  );
}

function Text213() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign105() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text213 />
        </div>
      </div>
    </div>
  );
}

function Link105() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-36 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container339 />
        <Heading107 />
        <TextMargin105 />
        <ContainerAlign105 />
      </div>
    </div>
  );
}

function Icon220() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container343() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon220 />
      </div>
    </div>
  );
}

function Icon221() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container344() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon221 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">23 빈칸</p>
      </div>
    </div>
  );
}

function Container342() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container343 />
        <Container344 />
      </div>
    </div>
  );
}

function Heading108() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">입국허가신청서</p>
      </div>
    </div>
  );
}

function Text214() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin106() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text214 />
      </div>
    </div>
  );
}

function Text215() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign106() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text215 />
        </div>
      </div>
    </div>
  );
}

function Link106() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-36 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container342 />
        <Heading108 />
        <TextMargin106 />
        <ContainerAlign106 />
      </div>
    </div>
  );
}

function Icon222() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container346() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon222 />
      </div>
    </div>
  );
}

function Icon223() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container347() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon223 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">44 빈칸</p>
      </div>
    </div>
  );
}

function Container345() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container346 />
        <Container347 />
      </div>
    </div>
  );
}

function Heading109() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">자기건강확인서</p>
      </div>
    </div>
  );
}

function Text216() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin107() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text216 />
      </div>
    </div>
  );
}

function Text217() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign107() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text217 />
        </div>
      </div>
    </div>
  );
}

function Link107() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-36 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container345 />
        <Heading109 />
        <TextMargin107 />
        <ContainerAlign107 />
      </div>
    </div>
  );
}

function Icon224() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container349() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon224 />
      </div>
    </div>
  );
}

function Icon225() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container350() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon225 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">14 빈칸</p>
      </div>
    </div>
  );
}

function Container348() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container349 />
        <Container350 />
      </div>
    </div>
  );
}

function Heading110() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">자동출입국등록신청서</p>
      </div>
    </div>
  );
}

function Text218() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin108() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text218 />
      </div>
    </div>
  );
}

function Text219() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
      </div>
    </div>
  );
}

function Container351() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Text219 />
    </div>
  );
}

function ContainerAlign108() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <Container351 />
      </div>
    </div>
  );
}

function Link108() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-37 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container348 />
        <Heading110 />
        <TextMargin108 />
        <ContainerAlign108 />
      </div>
    </div>
  );
}

function Icon226() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container353() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon226 />
      </div>
    </div>
  );
}

function Icon227() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container354() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon227 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">15 빈칸</p>
      </div>
    </div>
  );
}

function Container352() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container353 />
        <Container354 />
      </div>
    </div>
  );
}

function Heading111() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">자동출입국등록해지신청서</p>
      </div>
    </div>
  );
}

function Text220() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin109() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text220 />
      </div>
    </div>
  );
}

function Text221() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
      </div>
    </div>
  );
}

function Container355() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Text221 />
    </div>
  );
}

function ContainerAlign109() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <Container355 />
      </div>
    </div>
  );
}

function Link109() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-37 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container352 />
        <Heading111 />
        <TextMargin109 />
        <ContainerAlign109 />
      </div>
    </div>
  );
}

function Icon228() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container357() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon228 />
      </div>
    </div>
  );
}

function Icon229() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container358() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon229 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">14 빈칸</p>
      </div>
    </div>
  );
}

function Container356() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container357 />
        <Container358 />
      </div>
    </div>
  );
}

function Heading112() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start overflow-clip relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-[301px]">재외동포(F-4) 취업활동 제한직업 비취업 서약서</p>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Heading112 />
      </div>
    </div>
  );
}

function Text222() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin110() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text222 />
      </div>
    </div>
  );
}

function Text223() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign110() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text223 />
        </div>
      </div>
    </div>
  );
}

function Link110() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-37 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container356 />
        <Heading3Margin2 />
        <TextMargin110 />
        <ContainerAlign110 />
      </div>
    </div>
  );
}

function Icon230() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container360() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon230 />
      </div>
    </div>
  );
}

function Icon231() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container361() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon231 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">21 빈칸</p>
      </div>
    </div>
  );
}

function Container359() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container360 />
        <Container361 />
      </div>
    </div>
  );
}

function Heading113() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">재학사항 신고서</p>
      </div>
    </div>
  );
}

function Text224() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin111() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text224 />
      </div>
    </div>
  );
}

function Text225() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign111() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text225 />
        </div>
      </div>
    </div>
  );
}

function Link111() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-38 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container359 />
        <Heading113 />
        <TextMargin111 />
        <ContainerAlign111 />
      </div>
    </div>
  );
}

function Icon232() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container363() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon232 />
      </div>
    </div>
  );
}

function Icon233() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container364() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon233 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">22 빈칸</p>
      </div>
    </div>
  );
}

function Container362() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container363 />
        <Container364 />
      </div>
    </div>
  );
}

function Heading114() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">전문외국인력고용추천서</p>
      </div>
    </div>
  );
}

function Text226() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin112() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text226 />
      </div>
    </div>
  );
}

function Text227() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign112() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text227 />
        </div>
      </div>
    </div>
  );
}

function Link112() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-38 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container362 />
        <Heading114 />
        <TextMargin112 />
        <ContainerAlign112 />
      </div>
    </div>
  );
}

function Icon234() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container366() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon234 />
      </div>
    </div>
  );
}

function Icon235() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container367() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon235 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">49 빈칸</p>
      </div>
    </div>
  );
}

function Container365() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container366 />
        <Container367 />
      </div>
    </div>
  );
}

function Heading115() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">주거시설 이용신청서</p>
      </div>
    </div>
  );
}

function Text228() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin113() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text228 />
      </div>
    </div>
  );
}

function Text229() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign113() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text229 />
        </div>
      </div>
    </div>
  );
}

function Link113() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-38 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container365 />
        <Heading115 />
        <TextMargin113 />
        <ContainerAlign113 />
      </div>
    </div>
  );
}

function Icon236() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container369() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon236 />
      </div>
    </div>
  );
}

function Icon237() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container370() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon237 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">112 빈칸</p>
      </div>
    </div>
  );
}

function Container368() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container369 />
        <Container370 />
      </div>
    </div>
  );
}

function Heading116() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">중국인단체여행객명단</p>
      </div>
    </div>
  );
}

function Text230() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin114() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text230 />
      </div>
    </div>
  );
}

function Text231() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign114() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text231 />
        </div>
      </div>
    </div>
  );
}

function Link114() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-39 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container368 />
        <Heading116 />
        <TextMargin114 />
        <ContainerAlign114 />
      </div>
    </div>
  );
}

function Icon238() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container372() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon238 />
      </div>
    </div>
  );
}

function Icon239() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container373() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon239 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">26 빈칸</p>
      </div>
    </div>
  );
}

function Container371() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container372 />
        <Container373 />
      </div>
    </div>
  );
}

function Heading117() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">지정추천서</p>
      </div>
    </div>
  );
}

function Text232() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin115() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text232 />
      </div>
    </div>
  );
}

function Text233() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign115() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text233 />
        </div>
      </div>
    </div>
  );
}

function Link115() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-39 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container371 />
        <Heading117 />
        <TextMargin115 />
        <ContainerAlign115 />
      </div>
    </div>
  );
}

function Icon240() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container375() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon240 />
      </div>
    </div>
  );
}

function Icon241() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container376() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon241 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">28 빈칸</p>
      </div>
    </div>
  );
}

function Container374() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container375 />
        <Container376 />
      </div>
    </div>
  );
}

function Heading118() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">직업훈련 추천 신청서</p>
      </div>
    </div>
  );
}

function Text234() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin116() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text234 />
      </div>
    </div>
  );
}

function Text235() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign116() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text235 />
        </div>
      </div>
    </div>
  );
}

function Link116() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-39 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container374 />
        <Heading118 />
        <TextMargin116 />
        <ContainerAlign116 />
      </div>
    </div>
  );
}

function Icon242() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container378() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon242 />
      </div>
    </div>
  );
}

function Icon243() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container379() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon243 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">4 빈칸</p>
      </div>
    </div>
  );
}

function Container377() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container378 />
        <Container379 />
      </div>
    </div>
  );
}

function Heading119() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">채용신체검서</p>
      </div>
    </div>
  );
}

function Text236() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin117() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text236 />
      </div>
    </div>
  );
}

function Text237() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign117() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text237 />
        </div>
      </div>
    </div>
  );
}

function Link117() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-40 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container377 />
        <Heading119 />
        <TextMargin117 />
        <ContainerAlign117 />
      </div>
    </div>
  );
}

function Icon244() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container381() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon244 />
      </div>
    </div>
  );
}

function Icon245() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container382() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon245 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">14 빈칸</p>
      </div>
    </div>
  );
}

function Container380() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container381 />
        <Container382 />
      </div>
    </div>
  );
}

function Heading120() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">출국금지결정등이의신청서</p>
      </div>
    </div>
  );
}

function Text238() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin118() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text238 />
      </div>
    </div>
  );
}

function Text239() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign118() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text239 />
        </div>
      </div>
    </div>
  );
}

function Link118() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-40 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container380 />
        <Heading120 />
        <TextMargin118 />
        <ContainerAlign118 />
      </div>
    </div>
  );
}

function Icon246() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container384() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon246 />
      </div>
    </div>
  );
}

function Icon247() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container385() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon247 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">47 빈칸</p>
      </div>
    </div>
  );
}

function Container383() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container384 />
        <Container385 />
      </div>
    </div>
  );
}

function Heading121() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">출국기한유예신청서</p>
      </div>
    </div>
  );
}

function Text240() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin119() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text240 />
      </div>
    </div>
  );
}

function Text241() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign119() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text241 />
        </div>
      </div>
    </div>
  );
}

function Link119() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-40 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container383 />
        <Heading121 />
        <TextMargin119 />
        <ContainerAlign119 />
      </div>
    </div>
  );
}

function Icon248() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container387() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon248 />
      </div>
    </div>
  );
}

function Icon249() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container388() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon249 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">20 빈칸</p>
      </div>
    </div>
  );
}

function Container386() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container387 />
        <Container388 />
      </div>
    </div>
  );
}

function Heading122() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">출국정지결정등이의신청서</p>
      </div>
    </div>
  );
}

function Text242() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin120() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text242 />
      </div>
    </div>
  );
}

function Text243() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign120() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text243 />
        </div>
      </div>
    </div>
  );
}

function Link120() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-41 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container386 />
        <Heading122 />
        <TextMargin120 />
        <ContainerAlign120 />
      </div>
    </div>
  );
}

function Icon250() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container390() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon250 />
      </div>
    </div>
  );
}

function Icon251() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container391() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon251 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">20 빈칸</p>
      </div>
    </div>
  );
}

function Container389() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container390 />
        <Container391 />
      </div>
    </div>
  );
}

function Heading123() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">출입국민원대리인지정신청서</p>
      </div>
    </div>
  );
}

function Text244() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin121() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text244 />
      </div>
    </div>
  );
}

function Text245() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign121() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text245 />
        </div>
      </div>
    </div>
  );
}

function Link121() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-41 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container389 />
        <Heading123 />
        <TextMargin121 />
        <ContainerAlign121 />
      </div>
    </div>
  );
}

function Icon252() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container393() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon252 />
      </div>
    </div>
  );
}

function Icon253() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container394() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon253 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">204 빈칸</p>
      </div>
    </div>
  );
}

function Container392() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container393 />
        <Container394 />
      </div>
    </div>
  );
}

function Heading124() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">출입국민원대행기관관련서식</p>
      </div>
    </div>
  );
}

function Text246() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin122() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text246 />
      </div>
    </div>
  );
}

function Text247() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign122() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text247 />
        </div>
      </div>
    </div>
  );
}

function Link122() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-41 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container392 />
        <Heading124 />
        <TextMargin122 />
        <ContainerAlign122 />
      </div>
    </div>
  );
}

function Icon254() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container396() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon254 />
      </div>
    </div>
  );
}

function Icon255() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container397() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon255 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">18 빈칸</p>
      </div>
    </div>
  );
}

function Container395() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container396 />
        <Container397 />
      </div>
    </div>
  );
}

function Heading125() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">출입국에 관한 사실증명 발급 사전예약 신청서</p>
      </div>
    </div>
  );
}

function Text248() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin123() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text248 />
      </div>
    </div>
  );
}

function Text249() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
      </div>
    </div>
  );
}

function Container398() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Text249 />
    </div>
  );
}

function ContainerAlign123() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <Container398 />
      </div>
    </div>
  );
}

function Link123() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-42 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container395 />
        <Heading125 />
        <TextMargin123 />
        <ContainerAlign123 />
      </div>
    </div>
  );
}

function Icon256() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container400() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon256 />
      </div>
    </div>
  );
}

function Icon257() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container401() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon257 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">99 빈칸</p>
      </div>
    </div>
  );
}

function Container399() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container400 />
        <Container401 />
      </div>
    </div>
  );
}

function Heading126() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">출입항예정통보서</p>
      </div>
    </div>
  );
}

function Text250() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin124() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text250 />
      </div>
    </div>
  );
}

function Text251() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
      </div>
    </div>
  );
}

function Container402() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Text251 />
    </div>
  );
}

function ContainerAlign124() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <Container402 />
      </div>
    </div>
  );
}

function Link124() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-42 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container399 />
        <Heading126 />
        <TextMargin124 />
        <ContainerAlign124 />
      </div>
    </div>
  );
}

function Icon258() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container404() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon258 />
      </div>
    </div>
  );
}

function Icon259() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container405() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon259 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">33 빈칸</p>
      </div>
    </div>
  );
}

function Container403() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container404 />
        <Container405 />
      </div>
    </div>
  );
}

function Heading127() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start overflow-clip relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-[301px]">취업 외 목적 방문취업(H-2) 체류자격 소지자 안내 및 유의사항</p>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Heading127 />
      </div>
    </div>
  );
}

function Text252() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin125() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text252 />
      </div>
    </div>
  );
}

function Text253() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign125() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text253 />
        </div>
      </div>
    </div>
  );
}

function Link125() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-42 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container403 />
        <Heading3Margin3 />
        <TextMargin125 />
        <ContainerAlign125 />
      </div>
    </div>
  );
}

function Icon260() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container407() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon260 />
      </div>
    </div>
  );
}

function Icon261() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container408() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon261 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">17 빈칸</p>
      </div>
    </div>
  );
}

function Container406() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container407 />
        <Container408 />
      </div>
    </div>
  );
}

function Heading128() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">치료예정서약서</p>
      </div>
    </div>
  );
}

function Text254() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin126() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text254 />
      </div>
    </div>
  );
}

function Text255() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign126() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text255 />
        </div>
      </div>
    </div>
  );
}

function Link126() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-43 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container406 />
        <Heading128 />
        <TextMargin126 />
        <ContainerAlign126 />
      </div>
    </div>
  );
}

function Icon262() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container410() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon262 />
      </div>
    </div>
  );
}

function Icon263() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container411() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon263 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">67 빈칸</p>
      </div>
    </div>
  );
}

function Container409() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container410 />
        <Container411 />
      </div>
    </div>
  );
}

function Heading129() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">통합신청서(신고서)</p>
      </div>
    </div>
  );
}

function Text256() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin127() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text256 />
      </div>
    </div>
  );
}

function Text257() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 20일</p>
    </div>
  );
}

function ContainerAlign127() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text257 />
        </div>
      </div>
    </div>
  );
}

function Link127() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-43 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container409 />
        <Heading129 />
        <TextMargin127 />
        <ContainerAlign127 />
      </div>
    </div>
  );
}

function Icon264() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container413() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon264 />
      </div>
    </div>
  );
}

function Icon265() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container414() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon265 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">79 빈칸</p>
      </div>
    </div>
  );
}

function Container412() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container413 />
        <Container414 />
      </div>
    </div>
  );
}

function Heading130() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">표준인터뷰메뉴얼.doc</p>
      </div>
    </div>
  );
}

function Text258() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin128() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text258 />
      </div>
    </div>
  );
}

function Text259() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign128() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text259 />
        </div>
      </div>
    </div>
  );
}

function Link128() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-43 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container412 />
        <Heading130 />
        <TextMargin128 />
        <ContainerAlign128 />
      </div>
    </div>
  );
}

function Icon266() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container416() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon266 />
      </div>
    </div>
  );
}

function Icon267() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container417() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon267 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">15 빈칸</p>
      </div>
    </div>
  );
}

function Container415() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container416 />
        <Container417 />
      </div>
    </div>
  );
}

function Heading131() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">한글병기 신청서</p>
      </div>
    </div>
  );
}

function Text260() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin129() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text260 />
      </div>
    </div>
  );
}

function Text261() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign129() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text261 />
        </div>
      </div>
    </div>
  );
}

function Link129() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-44 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container415 />
        <Heading131 />
        <TextMargin129 />
        <ContainerAlign129 />
      </div>
    </div>
  );
}

function Icon268() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container419() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon268 />
      </div>
    </div>
  );
}

function Icon269() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container420() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon269 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">15 빈칸</p>
      </div>
    </div>
  );
}

function Container418() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container419 />
        <Container420 />
      </div>
    </div>
  );
}

function Heading132() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">한글병기 신청서(영문)</p>
      </div>
    </div>
  );
}

function Text262() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin130() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text262 />
      </div>
    </div>
  );
}

function Text263() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign130() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text263 />
        </div>
      </div>
    </div>
  );
}

function Link130() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-44 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container418 />
        <Heading132 />
        <TextMargin130 />
        <ContainerAlign130 />
      </div>
    </div>
  );
}

function Icon270() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container422() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon270 />
      </div>
    </div>
  );
}

function Icon271() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container423() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon271 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">15 빈칸</p>
      </div>
    </div>
  );
}

function Container421() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container422 />
        <Container423 />
      </div>
    </div>
  );
}

function Heading133() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">한글병기 신청서(중문)</p>
      </div>
    </div>
  );
}

function Text264() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin131() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text264 />
      </div>
    </div>
  );
}

function Text265() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign131() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text265 />
        </div>
      </div>
    </div>
  );
}

function Link131() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-44 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container421 />
        <Heading133 />
        <TextMargin131 />
        <ContainerAlign131 />
      </div>
    </div>
  );
}

function Icon272() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container425() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon272 />
      </div>
    </div>
  );
}

function Icon273() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container426() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon273 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">20 빈칸</p>
      </div>
    </div>
  );
}

function Container424() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container425 />
        <Container426 />
      </div>
    </div>
  );
}

function Heading134() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">혼인관계사실확인서</p>
      </div>
    </div>
  );
}

function Text266() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin132() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text266 />
      </div>
    </div>
  );
}

function Text267() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign132() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text267 />
        </div>
      </div>
    </div>
  );
}

function Link132() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-45 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container424 />
        <Heading134 />
        <TextMargin132 />
        <ContainerAlign132 />
      </div>
    </div>
  );
}

function Icon274() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container428() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon274 />
      </div>
    </div>
  );
}

function Icon275() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container429() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon275 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">28 빈칸</p>
      </div>
    </div>
  );
}

function Container427() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container428 />
        <Container429 />
      </div>
    </div>
  );
}

function Heading135() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">혼인파탄확인서</p>
      </div>
    </div>
  );
}

function Text268() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin133() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text268 />
      </div>
    </div>
  );
}

function Text269() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign133() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text269 />
        </div>
      </div>
    </div>
  );
}

function Link133() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-45 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container427 />
        <Heading135 />
        <TextMargin133 />
        <ContainerAlign133 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[1310px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[___334.66px_334.66px_334.66px] grid-rows-[_____________________________________________170px_194px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_194px_170px_170px_194px_170px_170px_170px_170px_194px_170px_170px_170px] relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
        <Link8 />
        <Link9 />
        <Link10 />
        <Link11 />
        <Link12 />
        <Link13 />
        <Link14 />
        <Link15 />
        <Link16 />
        <Link17 />
        <Link18 />
        <Link19 />
        <Link20 />
        <Link21 />
        <Link22 />
        <Link23 />
        <Link24 />
        <Link25 />
        <Link26 />
        <Link27 />
        <Link28 />
        <Link29 />
        <Link30 />
        <Link31 />
        <Link32 />
        <Link33 />
        <Link34 />
        <Link35 />
        <Link36 />
        <Link37 />
        <Link38 />
        <Link39 />
        <Link40 />
        <Link41 />
        <Link42 />
        <Link43 />
        <Link44 />
        <Link45 />
        <Link46 />
        <Link47 />
        <Link48 />
        <Link49 />
        <Link50 />
        <Link51 />
        <Link52 />
        <Link53 />
        <Link54 />
        <Link55 />
        <Link56 />
        <Link57 />
        <Link58 />
        <Link59 />
        <Link60 />
        <Link61 />
        <Link62 />
        <Link63 />
        <Link64 />
        <Link65 />
        <Link66 />
        <Link67 />
        <Link68 />
        <Link69 />
        <Link70 />
        <Link71 />
        <Link72 />
        <Link73 />
        <Link74 />
        <Link75 />
        <Link76 />
        <Link77 />
        <Link78 />
        <Link79 />
        <Link80 />
        <Link81 />
        <Link82 />
        <Link83 />
        <Link84 />
        <Link85 />
        <Link86 />
        <Link87 />
        <Link88 />
        <Link89 />
        <Link90 />
        <Link91 />
        <Link92 />
        <Link93 />
        <Link94 />
        <Link95 />
        <Link96 />
        <Link97 />
        <Link98 />
        <Link99 />
        <Link100 />
        <Link101 />
        <Link102 />
        <Link103 />
        <Link104 />
        <Link105 />
        <Link106 />
        <Link107 />
        <Link108 />
        <Link109 />
        <Link110 />
        <Link111 />
        <Link112 />
        <Link113 />
        <Link114 />
        <Link115 />
        <Link116 />
        <Link117 />
        <Link118 />
        <Link119 />
        <Link120 />
        <Link121 />
        <Link122 />
        <Link123 />
        <Link124 />
        <Link125 />
        <Link126 />
        <Link127 />
        <Link128 />
        <Link129 />
        <Link130 />
        <Link131 />
        <Link132 />
        <Link133 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container13 />
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1100px] pb-[40px] pt-[120px] px-[32px] relative shrink-0 w-[1100px]" data-name="Container">
      <Container5 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function MainContent1() {
  return (
    <div className="h-[958px] relative shrink-0 w-[1659px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[64px] pt-[8px] px-[56px] relative rounded-[inherit] size-full">
        <ContainerMargin />
      </div>
    </div>
  );
}

function Container430() {
  return <div className="flex-[1472.305_0_0] h-0 min-w-px relative" data-name="Container" />;
}

function Text270() {
  return (
    <div className="bg-[#4f7bff] relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[14.286px] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">C</p>
      </div>
    </div>
  );
}

function Text271() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">40,865</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f8fafc] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[36px] relative rounded-[20px] shrink-0" data-name="Button - 크레딧 충전">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[13px] py-px relative size-full">
        <Text270 />
        <Text271 />
      </div>
    </div>
  );
}

function Icon276() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c3efea0} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p25877f40} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text272() {
  return <div className="absolute bg-[#2b7fff] left-[22px] rounded-[16777200px] size-[8px] top-[6px]" data-name="Text" />;
}

function Button9() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button - 알림">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon276 />
        <Text272 />
      </div>
    </div>
  );
}

function Container431() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button8 />
        <Button9 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[56px] left-0 top-0" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] relative size-full">
        <Container430 />
        <Container431 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[0] relative shrink-0 text-[#4f7bff] text-[38px] text-center tracking-[-1.9px] whitespace-nowrap">
          <span className="leading-[47.5px]">서식</span>
          <span className="leading-[47.5px] text-[#0a0a0a]">, 한 줄이면 충분해요</span>
        </p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[38px] relative shrink-0 w-[337.859px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[14px] relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[23.563px] relative shrink-0 text-[#737373] text-[14.5px] text-center tracking-[-0.3625px] whitespace-nowrap">원하는 템플릿을 고르거나 직접 설명해 바로 만들어 보세요.</p>
      </div>
    </div>
  );
}

function Container434() {
  return (
    <div className="h-[126px] max-w-[768px] relative shrink-0 w-[337.859px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] pb-[40px] relative size-full">
        <Heading1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function TextArea1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] flex-[148_0_0] max-h-[383.20001220703125px] min-h-[148px] relative w-[1030px]" data-name="Text Area">
      <div className="max-h-[inherit] min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-h-[inherit] min-h-[inherit] pb-[12px] pt-[16px] px-[24px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[22.5px] relative shrink-0 text-[#a7b3c7] text-[15px] w-full">무엇을 만들까요? 대화로 자연스럽게 요청하거나 템플릿을 선택해 문서·PPT·이미지 등을 바로 생성해보세요!</p>
        </div>
      </div>
    </div>
  );
}

function Icon277() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3cb14e80} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-[9px] relative size-full">
        <Icon277 />
      </div>
    </div>
  );
}

function Icon278() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_521)" id="Icon">
          <path d={svgPaths.p15ab3e60} id="Vector" stroke="var(--stroke-0, #4F7BFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M13.3333 1.33333V4" id="Vector_2" stroke="var(--stroke-0, #4F7BFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.6667 2.66667H12" id="Vector_3" stroke="var(--stroke-0, #4F7BFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22966600} id="Vector_4" stroke="var(--stroke-0, #4F7BFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_521">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button">
      <div aria-hidden className="absolute border border-[rgba(79,123,255,0.25)] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[11px] py-[9px] relative size-full">
        <Icon278 />
      </div>
    </div>
  );
}

function Icon279() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_504)" id="Icon">
          <path d={svgPaths.p1e61df00} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p883e500} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M2.91667 3.5V5.83333" id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M11.0833 8.16667V10.5" id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 1.16667V2.33333" id="Vector_5" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M4.08333 4.66667H1.75" id="Vector_6" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 9.33333H9.91667" id="Vector_7" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M6.41667 1.75H5.25" id="Vector_8" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_1_504">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text273() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#62748e] text-[12px] text-center whitespace-nowrap">자동 프롬프트</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-px relative size-full">
        <Icon279 />
        <Text273 />
      </div>
    </div>
  );
}

function Icon280() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p12d5c871} id="Vector" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p12ed6cc0} id="Vector_2" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.83333 5.25H4.66667" id="Vector_3" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 7.58333H4.66667" id="Vector_4" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M9.33333 9.91667H4.66667" id="Vector_5" stroke="var(--stroke-0, #62748E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Text274() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#62748e] text-[12px] text-center whitespace-nowrap">참고문서 원문 전체 사용</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-white h-[36px] relative rounded-[16777200px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[13px] py-px relative size-full">
        <Icon280 />
        <Text274 />
      </div>
    </div>
  );
}

function Container438() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Button10 />
        <Button11 />
        <Button12 />
        <Button13 />
      </div>
    </div>
  );
}

function Icon281() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p82fb540} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 12.6667V3.33333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#4f7bff] relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button - 전송">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon281 />
      </div>
    </div>
  );
}

function Container437() {
  return (
    <div className="relative shrink-0 w-[1030px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[20px] pl-[24px] pr-[20px] pt-[6px] relative size-full">
        <Container438 />
        <Button14 />
      </div>
    </div>
  );
}

function Icon282() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M8.75 1.75H12.25V5.25" id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M12.25 1.75L8.16667 5.83333" id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 12.25L5.83333 8.16667" id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M5.25 12.25H1.75V8.75" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute left-[991px] rounded-[16777200px] size-[28px] top-[11px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon282 />
      </div>
    </div>
  );
}

function Container436() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[18px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(223,230,237,0.5)] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-px relative size-full">
        <TextArea1 />
        <Container437 />
        <Button15 />
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[18px] shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container436 />
      </div>
    </div>
  );
}

function Container435() {
  return (
    <div className="bg-white h-[216px] relative rounded-[22px] shrink-0 w-[1036px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Form1 />
      </div>
      <div aria-hidden className="absolute border-2 border-[#4f7bff] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_8px_32px_0px_rgba(79,123,255,0.1)]" />
    </div>
  );
}

function Container433() {
  return (
    <div className="relative shrink-0 w-[1036px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[56px] relative size-full">
        <Container434 />
        <Container435 />
      </div>
    </div>
  );
}

function Container439() {
  return <div className="h-0 relative shrink-0 w-full" data-name="Container" />;
}

function Button16() {
  return (
    <div className="bg-[#0a0a0a] h-full relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#f8fafc] text-[14px] text-center whitespace-nowrap">전체</p>
        </div>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#f1f6fa] h-full relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">외국인 비자 서식</p>
        </div>
      </div>
    </div>
  );
}

function Container442() {
  return (
    <div className="flex-[705.5_0_0] h-[32px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Button16 />
        <Button17 />
      </div>
    </div>
  );
}

function Icon283() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M14 14L11.1067 11.1067" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p107a080} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute h-[36px] left-0 rounded-[16777200px] top-0 w-[224px]" data-name="Text Input">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip px-[37px] py-px relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#737373] text-[14px] w-full">서식명으로 검색...</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container444() {
  return (
    <div className="h-[36px] relative shrink-0 w-[224px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon283 />
        <TextInput1 />
      </div>
    </div>
  );
}

function Dropdown1() {
  return <div className="absolute border border-[#dfe6ed] border-solid h-[36px] left-0 rounded-[16777200px] top-0 w-[82.5px]" data-name="Dropdown" />;
}

function Icon284() {
  return (
    <div className="absolute left-[58.5px] size-[14px] top-[11px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Container445() {
  return (
    <div className="h-[36px] relative shrink-0 w-[82.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Dropdown1 />
        <Icon284 />
      </div>
    </div>
  );
}

function Container443() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container444 />
        <Container445 />
      </div>
    </div>
  );
}

function Container441() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container442 />
        <Container443 />
      </div>
    </div>
  );
}

function Container446() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#737373] text-[14px] whitespace-nowrap">134개의 서식</p>
      </div>
    </div>
  );
}

function Icon285() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container449() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon285 />
      </div>
    </div>
  );
}

function Icon286() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container450() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon286 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">20 빈칸</p>
      </div>
    </div>
  );
}

function Container448() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container449 />
        <Container450 />
      </div>
    </div>
  );
}

function Heading136() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">강제퇴거명령에대한이의신청서</p>
      </div>
    </div>
  );
}

function Text275() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin134() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text275 />
      </div>
    </div>
  );
}

function Text276() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign134() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text276 />
        </div>
      </div>
    </div>
  );
}

function Link134() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container448 />
        <Heading136 />
        <TextMargin134 />
        <ContainerAlign134 />
      </div>
    </div>
  );
}

function Icon287() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container452() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon287 />
      </div>
    </div>
  );
}

function Icon288() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container453() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon288 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">54 빈칸</p>
      </div>
    </div>
  );
}

function Container451() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container452 />
        <Container453 />
      </div>
    </div>
  );
}

function Heading137() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">거소신고(신청)서</p>
      </div>
    </div>
  );
}

function Text277() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin135() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text277 />
      </div>
    </div>
  );
}

function Text278() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign135() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text278 />
        </div>
      </div>
    </div>
  );
}

function Link135() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container451 />
        <Heading137 />
        <TextMargin135 />
        <ContainerAlign135 />
      </div>
    </div>
  );
}

function Icon289() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container455() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon289 />
      </div>
    </div>
  );
}

function Icon290() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container456() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon290 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">35 빈칸</p>
      </div>
    </div>
  );
}

function Container454() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container455 />
        <Container456 />
      </div>
    </div>
  );
}

function Heading138() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">거주숙소제공사실확인서(영문병기)</p>
      </div>
    </div>
  );
}

function Text279() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin136() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text279 />
      </div>
    </div>
  );
}

function Text280() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
    </div>
  );
}

function ContainerAlign136() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text280 />
        </div>
      </div>
    </div>
  );
}

function Link136() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container454 />
        <Heading138 />
        <TextMargin136 />
        <ContainerAlign136 />
      </div>
    </div>
  );
}

function Icon291() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container458() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon291 />
      </div>
    </div>
  );
}

function Icon292() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container459() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon292 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">35 빈칸</p>
      </div>
    </div>
  );
}

function Container457() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container458 />
        <Container459 />
      </div>
    </div>
  );
}

function Heading139() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">거주숙소제공사실확인서(중문병기)</p>
      </div>
    </div>
  );
}

function Text281() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin137() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text281 />
      </div>
    </div>
  );
}

function Text282() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 1월 23일</p>
      </div>
    </div>
  );
}

function Container460() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Text282 />
    </div>
  );
}

function ContainerAlign137() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <Container460 />
      </div>
    </div>
  );
}

function Link137() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-2 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container457 />
        <Heading139 />
        <TextMargin137 />
        <ContainerAlign137 />
      </div>
    </div>
  );
}

function Icon293() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container462() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon293 />
      </div>
    </div>
  );
}

function Icon294() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container463() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon294 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">40 빈칸</p>
      </div>
    </div>
  );
}

function Container461() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container462 />
        <Container463 />
      </div>
    </div>
  );
}

function Heading140() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">건강확인서</p>
      </div>
    </div>
  );
}

function Text283() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin138() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text283 />
      </div>
    </div>
  );
}

function Text284() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
      </div>
    </div>
  );
}

function Container464() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-between pt-[12px] relative shrink-0 w-full" data-name="Container">
      <Text284 />
    </div>
  );
}

function ContainerAlign138() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <Container464 />
      </div>
    </div>
  );
}

function Link138() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-2 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container461 />
        <Heading140 />
        <TextMargin138 />
        <ContainerAlign138 />
      </div>
    </div>
  );
}

function Icon295() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container466() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon295 />
      </div>
    </div>
  );
}

function Icon296() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container467() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon296 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">157 빈칸</p>
      </div>
    </div>
  );
}

function Container465() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container466 />
        <Container467 />
      </div>
    </div>
  );
}

function Heading141() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start overflow-clip relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] w-[301px]">결혼이민자의 부모 등 가족 초청장(F-1-5 비자 신청)</p>
    </div>
  );
}

function Heading3Margin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative size-full">
        <Heading141 />
      </div>
    </div>
  );
}

function Text285() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin139() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text285 />
      </div>
    </div>
  );
}

function Text286() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign139() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text286 />
        </div>
      </div>
    </div>
  );
}

function Link139() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-2 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container465 />
        <Heading3Margin4 />
        <TextMargin139 />
        <ContainerAlign139 />
      </div>
    </div>
  );
}

function Icon297() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container469() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon297 />
      </div>
    </div>
  );
}

function Icon298() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container470() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon298 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">68 빈칸</p>
      </div>
    </div>
  );
}

function Container468() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container469 />
        <Container470 />
      </div>
    </div>
  );
}

function Heading142() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">고용·연수외국인변동사유발생신고서</p>
      </div>
    </div>
  );
}

function Text287() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin140() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text287 />
      </div>
    </div>
  );
}

function Text288() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign140() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text288 />
        </div>
      </div>
    </div>
  );
}

function Link140() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-3 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container468 />
        <Heading142 />
        <TextMargin140 />
        <ContainerAlign140 />
      </div>
    </div>
  );
}

function Icon299() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container472() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon299 />
      </div>
    </div>
  );
}

function Icon300() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container473() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon300 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">41 빈칸</p>
      </div>
    </div>
  );
}

function Container471() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container472 />
        <Container473 />
      </div>
    </div>
  );
}

function Heading143() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">고용사유서</p>
      </div>
    </div>
  );
}

function Text289() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin141() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text289 />
      </div>
    </div>
  );
}

function Text290() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign141() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text290 />
        </div>
      </div>
    </div>
  );
}

function Link141() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-3 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container471 />
        <Heading143 />
        <TextMargin141 />
        <ContainerAlign141 />
      </div>
    </div>
  );
}

function Icon301() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container475() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon301 />
      </div>
    </div>
  );
}

function Icon302() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container476() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon302 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">27 빈칸</p>
      </div>
    </div>
  );
}

function Container474() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container475 />
        <Container476 />
      </div>
    </div>
  );
}

function Heading144() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">고용주추천서</p>
      </div>
    </div>
  );
}

function Text291() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin142() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text291 />
      </div>
    </div>
  );
}

function Text292() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign142() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text292 />
        </div>
      </div>
    </div>
  );
}

function Link142() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-3 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container474 />
        <Heading144 />
        <TextMargin142 />
        <ContainerAlign142 />
      </div>
    </div>
  );
}

function Icon303() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container478() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon303 />
      </div>
    </div>
  );
}

function Icon304() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container479() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon304 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">10 빈칸</p>
      </div>
    </div>
  );
}

function Container477() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container478 />
        <Container479 />
      </div>
    </div>
  );
}

function Heading145() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">공연장소 시설현황 확인서</p>
      </div>
    </div>
  );
}

function Text293() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin143() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text293 />
      </div>
    </div>
  );
}

function Text294() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign143() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text294 />
        </div>
      </div>
    </div>
  );
}

function Link143() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-4 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container477 />
        <Heading145 />
        <TextMargin143 />
        <ContainerAlign143 />
      </div>
    </div>
  );
}

function Icon305() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container481() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon305 />
      </div>
    </div>
  );
}

function Icon306() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container482() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon306 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">102 빈칸</p>
      </div>
    </div>
  );
}

function Container480() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container481 />
        <Container482 />
      </div>
    </div>
  );
}

function Heading146() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">관광취업활동계획서</p>
      </div>
    </div>
  );
}

function Text295() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin144() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text295 />
      </div>
    </div>
  );
}

function Text296() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign144() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text296 />
        </div>
      </div>
    </div>
  );
}

function Link144() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-4 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container480 />
        <Heading146 />
        <TextMargin144 />
        <ContainerAlign144 />
      </div>
    </div>
  );
}

function Icon307() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #FE9A00)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container484() {
  return (
    <div className="bg-[rgba(254,154,0,0.1)] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon307 />
      </div>
    </div>
  );
}

function Icon308() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_11629)" id="Icon">
          <path d={svgPaths.pc012c00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p24f94f00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
        <defs>
          <clipPath id="clip0_5_11629">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container485() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon308 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">17 빈칸</p>
      </div>
    </div>
  );
}

function Container483() {
  return (
    <div className="h-[52px] relative shrink-0 w-[300.664px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pb-[12px] relative size-full">
        <Container484 />
        <Container485 />
      </div>
    </div>
  );
}

function Heading147() {
  return (
    <div className="h-[28px] relative shrink-0 w-[300.664px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">교육비 지원 추천 신청서</p>
      </div>
    </div>
  );
}

function Text297() {
  return (
    <div className="bg-[#f1f6fa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[16777200px] shrink-0 w-[94.625px]" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">외국인 비자 서식</p>
    </div>
  );
}

function TextMargin145() {
  return (
    <div className="relative shrink-0" data-name="Text:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative size-full">
        <Text297 />
      </div>
    </div>
  );
}

function Text298() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">2026년 2월 12일</p>
    </div>
  );
}

function ContainerAlign145() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Container:align">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pt-[12px] relative size-full">
          <Text298 />
        </div>
      </div>
    </div>
  );
}

function Link145() {
  return (
    <div className="bg-white col-3 justify-self-stretch relative rounded-[14px] row-4 self-stretch shrink-0" data-name="Link">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[17px] relative size-full">
        <Container483 />
        <Heading147 />
        <TextMargin145 />
        <ContainerAlign145 />
      </div>
    </div>
  );
}

function Container447() {
  return (
    <div className="h-[752px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[___334.66px_334.66px_334.66px] grid-rows-[_____________________________________________170px_194px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_170px_194px_170px_170px_194px_170px_170px_170px_170px_194px_170px_170px_170px] relative size-full">
        <Link134 />
        <Link135 />
        <Link136 />
        <Link137 />
        <Link138 />
        <Link139 />
        <Link140 />
        <Link141 />
        <Link142 />
        <Link143 />
        <Link144 />
        <Link145 />
      </div>
    </div>
  );
}

function Container440() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Container441 />
        <Container446 />
        <Container447 />
      </div>
    </div>
  );
}

function Container432() {
  return (
    <div className="h-[1406px] max-w-[1100px] relative shrink-0 w-[1100px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] pb-[40px] pt-[120px] px-[32px] relative size-full">
        <Container433 />
        <Container439 />
        <Container440 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[958px] relative shrink-0 w-[1659px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <MainContent1 />
        <Header />
        <Container432 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1659_0_0] h-full min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container3 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-[#f8fafc] flex-[1660_0_0] h-[958px] min-w-px relative" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[958px] relative shrink-0 w-full" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <Container />
        <MainContent />
      </div>
    </div>
  );
}

function ImageNet() {
  return (
    <div className="h-[24px] relative shrink-0 w-[82.695px]" data-name="Image (딸깍.net)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageNet} />
    </div>
  );
}

function Link146() {
  return (
    <div className="absolute content-stretch flex items-center left-[-4px] top-0" data-name="Link">
      <ImageNet />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="h-[24px] relative shrink-0 w-[78.695px]" data-name="Link:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Link146 />
      </div>
    </div>
  );
}

function Icon309() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon">
          <path d="M3 3.75H15" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3 9H15" id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M3 14.25H15" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="opacity-80 relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon309 />
      </div>
    </div>
  );
}

function Container489() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
          <LinkMargin />
          <Button18 />
        </div>
      </div>
    </div>
  );
}

function Container488() {
  return (
    <div className="h-[72px] relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
        <Container489 />
      </div>
    </div>
  );
}

function Icon310() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1db6d780} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text299() {
  return (
    <div className="h-[21px] relative shrink-0 w-[11.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#155dfc] text-[14px] tracking-[-0.35px] whitespace-nowrap">홈</p>
      </div>
    </div>
  );
}

function Link147() {
  return (
    <div className="bg-[#f1f5f9] h-[44px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon310 />
        <Text299 />
      </div>
    </div>
  );
}

function Icon311() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p178dcc00} id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text300() {
  return (
    <div className="h-[21px] relative shrink-0 w-[38.32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.35px] whitespace-nowrap">내 작업</p>
      </div>
    </div>
  );
}

function Link148() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon311 />
        <Text300 />
      </div>
    </div>
  );
}

function Icon312() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pa6d0980} id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text301() {
  return (
    <div className="h-[21px] relative shrink-0 w-[47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.35px] whitespace-nowrap">즐겨찾기</p>
      </div>
    </div>
  );
}

function Link149() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon312 />
        <Text301 />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[152px] relative shrink-0 w-[259px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[8px] pt-[4px] px-[8px] relative size-full">
        <Link147 />
        <Link148 />
        <Link149 />
      </div>
    </div>
  );
}

function Container492() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#90a1b9] text-[12px] whitespace-nowrap">최근 서식</p>
        </div>
      </div>
    </div>
  );
}

function Icon313() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text302() {
  return (
    <div className="h-[20px] relative shrink-0 w-[185.555px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">거주숙소제공사실확인서(영문병기)</p>
      </div>
    </div>
  );
}

function Link150() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon313 />
        <Text302 />
      </div>
    </div>
  );
}

function Icon314() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text303() {
  return (
    <div className="h-[20px] relative shrink-0 w-[185.555px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">거주숙소제공사실확인서(중문병기)</p>
      </div>
    </div>
  );
}

function Link151() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon314 />
        <Text303 />
      </div>
    </div>
  );
}

function Icon315() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text304() {
  return (
    <div className="h-[20px] relative shrink-0 w-[164.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">강제퇴거명령에대한이의신청서</p>
      </div>
    </div>
  );
}

function Link152() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon315 />
        <Text304 />
      </div>
    </div>
  );
}

function Icon316() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p232b1d80} id="Vector" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #90A1B9)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text305() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">거소신고(신청)서</p>
      </div>
    </div>
  );
}

function Link153() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon316 />
        <Text305 />
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-[243px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Link150 />
        <Link151 />
        <Link152 />
        <Link153 />
      </div>
    </div>
  );
}

function Container491() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Container492 />
        <List1 />
      </div>
    </div>
  );
}

function Container494() {
  return (
    <div className="h-[32px] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[8px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#90a1b9] text-[11px] tracking-[0.275px] whitespace-nowrap">최근 대화</p>
        </div>
      </div>
    </div>
  );
}

function Link154() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">고양이 등장 장면</p>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link154 />
      </div>
    </div>
  );
}

function Link155() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">여름철 학교 안전 PPT 제작</p>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link155 />
      </div>
    </div>
  );
}

function Link156() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">주택임대차 표준계약서 작성 안내</p>
      </div>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link156 />
      </div>
    </div>
  );
}

function Link157() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">템플릿 다운로드 및 작성 방법</p>
      </div>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link157 />
      </div>
    </div>
  );
}

function Link158() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">출근하기 싫은 운동화 영상 제작</p>
      </div>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link158 />
      </div>
    </div>
  );
}

function Link159() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">{`<uploaded_files> The following files were uploaded...`}</p>
      </div>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link159 />
      </div>
    </div>
  );
}

function Link160() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">{`<uploaded_files> The following files were uploaded...`}</p>
      </div>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link160 />
      </div>
    </div>
  );
}

function Link161() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">건강확인서 작성 요망</p>
      </div>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link161 />
      </div>
    </div>
  );
}

function Link162() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">템플릿 기반 자기소개서 작성 요청</p>
      </div>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link162 />
      </div>
    </div>
  );
}

function Link163() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">회사 소개서 작성 요청</p>
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link163 />
      </div>
    </div>
  );
}

function Link164() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">회사소개서 제작 요청</p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link164 />
      </div>
    </div>
  );
}

function Link165() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">Untitled</p>
      </div>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link165 />
      </div>
    </div>
  );
}

function Link166() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">카드뉴스 템플릿 작성 방법 문의</p>
      </div>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link166 />
      </div>
    </div>
  );
}

function Link167() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">AI 세미나 배너 템플릿 작성</p>
      </div>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link167 />
      </div>
    </div>
  );
}

function Link168() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">Flowly 랜딩페이지 제작</p>
      </div>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link168 />
      </div>
    </div>
  );
}

function Link169() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">딸깍넷 카드뉴스 프롬프트 제작</p>
      </div>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link169 />
      </div>
    </div>
  );
}

function Link170() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">이미지 템플릿</p>
      </div>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link170 />
      </div>
    </div>
  );
}

function Link171() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">이사 전 체크리스트 카드뉴스</p>
      </div>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link171 />
      </div>
    </div>
  );
}

function Link172() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">홈카페 광고 영상 템플릿 요청</p>
      </div>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link172 />
      </div>
    </div>
  );
}

function Link173() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">로컬 취향 코스 서비스 라우티</p>
      </div>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link173 />
      </div>
    </div>
  );
}

function Link174() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">딸깍이 야근 템플릿 제작 요청</p>
      </div>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link174 />
      </div>
    </div>
  );
}

function Link175() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">Routey 랜딩페이지 제작</p>
      </div>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link175 />
      </div>
    </div>
  );
}

function Link176() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">주택임대차 표준계약서 작성 안내</p>
      </div>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link176 />
      </div>
    </div>
  );
}

function Link177() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">울트라 럭셔리 템플릿 편집</p>
      </div>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link177 />
      </div>
    </div>
  );
}

function Link178() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">딸깍이 캐릭터 및 로고 디자인</p>
      </div>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link178 />
      </div>
    </div>
  );
}

function Link179() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">직장인 부업 영상 템플릿 제작</p>
      </div>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link179 />
      </div>
    </div>
  );
}

function Link180() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">{`<uploaded_files> The following files were uploaded...`}</p>
      </div>
    </div>
  );
}

function ListItem26() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link180 />
      </div>
    </div>
  );
}

function Link181() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">우주패스 유튜브 프리미엄 혜택 안내</p>
      </div>
    </div>
  );
}

function ListItem27() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link181 />
      </div>
    </div>
  );
}

function Link182() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">성형외과 코수술 광고 템플릿 요청</p>
      </div>
    </div>
  );
}

function ListItem28() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link182 />
      </div>
    </div>
  );
}

function Link183() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">이미지 템플릿 상세 정보</p>
      </div>
    </div>
  );
}

function ListItem29() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link183 />
      </div>
    </div>
  );
}

function Link184() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">딸깍넷 소개 랜딩페이지 제작</p>
      </div>
    </div>
  );
}

function ListItem30() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link184 />
      </div>
    </div>
  );
}

function Link185() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">군고구마 먹는 강아지 영상 제작</p>
      </div>
    </div>
  );
}

function ListItem31() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link185 />
      </div>
    </div>
  );
}

function Link186() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">교통사고 합의서 템플릿 작성 방법</p>
      </div>
    </div>
  );
}

function ListItem32() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link186 />
      </div>
    </div>
  );
}

function Link187() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">Untitled</p>
      </div>
    </div>
  );
}

function ListItem33() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link187 />
      </div>
    </div>
  );
}

function Link188() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">여름 에어핏 티셔츠 상세페이지 제작</p>
      </div>
    </div>
  );
}

function ListItem34() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link188 />
      </div>
    </div>
  );
}

function Link189() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">성형외과 가로 광고 템플릿 요청</p>
      </div>
    </div>
  );
}

function ListItem35() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link189 />
      </div>
    </div>
  );
}

function Link190() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">추천 도서 카드뉴스 제작 요청</p>
      </div>
    </div>
  );
}

function ListItem36() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link190 />
      </div>
    </div>
  );
}

function Link191() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">성형외과 가로 광고 템플릿</p>
      </div>
    </div>
  );
}

function ListItem37() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link191 />
      </div>
    </div>
  );
}

function Link192() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">Untitled</p>
      </div>
    </div>
  );
}

function ListItem38() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link192 />
      </div>
    </div>
  );
}

function Link193() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">앱 설치 유도 템플릿 안내</p>
      </div>
    </div>
  );
}

function ListItem39() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link193 />
      </div>
    </div>
  );
}

function Link194() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">2026년 해충 Top 5</p>
      </div>
    </div>
  );
}

function ListItem40() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link194 />
      </div>
    </div>
  );
}

function Link195() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">눈 성형 광고 제작</p>
      </div>
    </div>
  );
}

function ListItem41() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link195 />
      </div>
    </div>
  );
}

function Link196() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">딸깍넷 앱 설치 광고 디자인</p>
      </div>
    </div>
  );
}

function ListItem42() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link196 />
      </div>
    </div>
  );
}

function Link197() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">시말서 템플릿 작성 안내</p>
      </div>
    </div>
  );
}

function ListItem43() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link197 />
      </div>
    </div>
  );
}

function Link198() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">졸업논문 템플릿 작성 안내</p>
      </div>
    </div>
  );
}

function ListItem44() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link198 />
      </div>
    </div>
  );
}

function Link199() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">수입대행계약서 템플릿 작성 내용 문의</p>
      </div>
    </div>
  );
}

function ListItem45() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link199 />
      </div>
    </div>
  );
}

function Link200() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">이미지 템플릿 편집 정보</p>
      </div>
    </div>
  );
}

function ListItem46() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link200 />
      </div>
    </div>
  );
}

function Link201() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">딸깍넷 랜딩페이지 생성</p>
      </div>
    </div>
  );
}

function ListItem47() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link201 />
      </div>
    </div>
  );
}

function Link202() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">세금계산서 템플릿 작성 내용 문의</p>
      </div>
    </div>
  );
}

function ListItem48() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link202 />
      </div>
    </div>
  );
}

function Link203() {
  return (
    <div className="h-[20px] relative shrink-0 w-[199px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">내용증명서 템플릿 작성 문의</p>
      </div>
    </div>
  );
}

function ListItem49() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip pl-[12px] pr-[32px] py-[8px] relative rounded-[inherit] size-full">
        <Link203 />
      </div>
    </div>
  );
}

function Container495() {
  return (
    <div className="relative shrink-0 w-[243px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <ListItem />
        <ListItem1 />
        <ListItem2 />
        <ListItem3 />
        <ListItem4 />
        <ListItem5 />
        <ListItem6 />
        <ListItem7 />
        <ListItem8 />
        <ListItem9 />
        <ListItem10 />
        <ListItem11 />
        <ListItem12 />
        <ListItem13 />
        <ListItem14 />
        <ListItem15 />
        <ListItem16 />
        <ListItem17 />
        <ListItem18 />
        <ListItem19 />
        <ListItem20 />
        <ListItem21 />
        <ListItem22 />
        <ListItem23 />
        <ListItem24 />
        <ListItem25 />
        <ListItem26 />
        <ListItem27 />
        <ListItem28 />
        <ListItem29 />
        <ListItem30 />
        <ListItem31 />
        <ListItem32 />
        <ListItem33 />
        <ListItem34 />
        <ListItem35 />
        <ListItem36 />
        <ListItem37 />
        <ListItem38 />
        <ListItem39 />
        <ListItem40 />
        <ListItem41 />
        <ListItem42 />
        <ListItem43 />
        <ListItem44 />
        <ListItem45 />
        <ListItem46 />
        <ListItem47 />
        <ListItem48 />
        <ListItem49 />
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-[243px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[8px] py-[6px] relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">이전 대화 더 보기</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="relative shrink-0 w-[243px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container495 />
        <Button19 />
      </div>
    </div>
  );
}

function Container493() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Container494 />
        <List2 />
      </div>
    </div>
  );
}

function Container490() {
  return (
    <div className="flex-[819.719_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[inherit] size-full">
        <List />
        <Container491 />
        <Container493 />
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Image (최유정)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Text306() {
  return (
    <div className="bg-[#e0e7ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Image />
      </div>
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container499() {
  return (
    <div className="h-[18.57px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[18.571px] relative shrink-0 text-[#0a0a0a] text-[13px] whitespace-nowrap">최유정</p>
      </div>
    </div>
  );
}

function Container500() {
  return (
    <div className="h-[15.711px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15.714px] relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">cyj2406@gmail.com</p>
      </div>
    </div>
  );
}

function Container498() {
  return (
    <div className="flex-[159_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container499 />
        <Container500 />
      </div>
    </div>
  );
}

function Icon317() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p36e45a00} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p150f5b00} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2d6e5280} id="Vector_3" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container497() {
  return (
    <div className="relative shrink-0 w-[227px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Text306 />
        <Container498 />
        <Icon317 />
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="h-[50.281px] relative rounded-[18px] shrink-0 w-[243px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <Container497 />
      </div>
    </div>
  );
}

function Container496() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Button20 />
      </div>
    </div>
  );
}

function Button21() {
  return <div className="absolute h-[958px] left-[251px] top-0 w-[16px]" data-name="Button - 사이드바 열기/닫기" />;
}

function Container487() {
  return (
    <div className="bg-white h-[958px] relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container488 />
        <Container490 />
        <Container496 />
        <Button21 />
      </div>
    </div>
  );
}

function Container486() {
  return (
    <div className="absolute h-[958px] left-0 top-0 w-[260px]" data-name="Container">
      <div aria-hidden className="absolute border-[#dfe6ed] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-px relative size-full">
        <Container487 />
      </div>
    </div>
  );
}

function Container501() {
  return (
    <div className="relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 size-[80px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute left-[1824px] top-[862px]" data-name="Button - 고객 지원 채팅">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Container501 />
      </div>
    </div>
  );
}

export default function DdalkkakAiSuperAgent() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start relative size-full" data-name="Ddalkkak — AI Super Agent">
      <Body />
      <Container486 />
      <Button22 />
    </div>
  );
}