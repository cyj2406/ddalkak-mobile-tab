import svgPaths from "./svg-6hqzx3lnut";
import imgImageNet from "./70598a9173139973c519fbc9c881094e41ef9297.png";
import imgImage from "./ec4bf4c83826b512a10ccb46952ef28cdb24b8d8.png";
import imgContainer from "./57b431403b0768824843b94bb49c6bc60e8e997a.png";

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
          <span className="leading-[47.5px]">문서</span>
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

function Container4() {
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

function Container8() {
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

function Container7() {
  return (
    <div className="relative shrink-0 w-[1030px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[20px] pl-[24px] pr-[20px] pt-[6px] relative size-full">
        <Container8 />
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

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] relative rounded-[18px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[rgba(223,230,237,0.5)] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center p-px relative size-full">
        <TextArea />
        <Container7 />
        <Button5 />
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="bg-[rgba(255,255,255,0)] relative rounded-[18px] shrink-0 w-full" data-name="Form">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container6 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white h-[216px] relative rounded-[22px] shrink-0 w-[1036px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-[2px] relative rounded-[inherit] size-full">
        <Form />
      </div>
      <div aria-hidden className="absolute border-2 border-[#4f7bff] border-solid inset-0 pointer-events-none rounded-[22px] shadow-[0px_8px_32px_0px_rgba(79,123,255,0.1)]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[1036px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[56px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
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
          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">워드</p>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#f1f6fa] h-full relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">한글</p>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#f1f6fa] h-full relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">엑셀</p>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#f1f6fa] h-full relative rounded-[16777200px] shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] py-[6px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">논문</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="flex-[705.5_0_0] h-[32px] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-start overflow-clip relative rounded-[inherit] size-full">
        <Button6 />
        <Button7 />
        <Button8 />
        <Button9 />
        <Button10 />
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
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#737373] text-[14px] w-full">템플릿 검색...</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container12() {
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

function Container13() {
  return (
    <div className="h-[36px] relative shrink-0 w-[82.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Dropdown />
        <Icon7 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Container12 />
        <Container13 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Image2() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 2장)" />;
}

function Button12() {
  return <div className="bg-white h-[6px] relative rounded-[16777200px] shrink-0 w-[16px]" data-name="Button" />;
}

function Button13() {
  return <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Button" />;
}

function Container18() {
  return (
    <div className="absolute left-[109px] top-[327.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Button12 />
        <Button13 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image2 />
        <Container18 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">{`(등록¸ 변경¸ 경정¸ `}</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start overflow-clip relative shrink-0 w-[220px]" data-name="Paragraph">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] w-[220px]">관공서 양식 - (등록¸ 변경¸ 경정¸ 말소등록¸ 말소등록의 회복등록)신청 반려에 대한 이의신청서 양식</p>
    </div>
  );
}

function ParagraphMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph1 />
        <ParagraphMargin />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#f8fafc] h-[419.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container16 />
        <Container19 />
      </div>
    </div>
  );
}

function Image1() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 1장)" />;
}

function Container21() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image1 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container21 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">내용증명서소유</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">법무 양식 - 내용증명서소유건물 양식</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[#f8fafc] h-[403.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container20 />
        <Container22 />
      </div>
    </div>
  );
}

function Image3() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 2장)" />;
}

function Button16() {
  return <div className="bg-white h-[6px] relative rounded-[16777200px] shrink-0 w-[16px]" data-name="Button" />;
}

function Button17() {
  return <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Button" />;
}

function Container25() {
  return (
    <div className="absolute left-[109px] top-[327.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Button16 />
        <Button17 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image3 />
        <Container25 />
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">정보공개 청구서</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">관공서 양식 - 정보공개 청구서 양식</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="bg-[#f8fafc] h-[403.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container23 />
        <Container26 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <Button11 />
        <Button14 />
        <Button15 />
      </div>
    </div>
  );
}

function Image4() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 1장)" />;
}

function Container29() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image4 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container29 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">합의서교통사고손해배상</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">법무 양식 - 합의서교통사고손해배상 양식</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[#f8fafc] h-[403.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container28 />
        <Container30 />
      </div>
    </div>
  );
}

function Image5() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 2장)" />;
}

function Button20() {
  return <div className="bg-white h-[6px] relative rounded-[16777200px] shrink-0 w-[16px]" data-name="Button" />;
}

function Button21() {
  return <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Button" />;
}

function Container33() {
  return (
    <div className="absolute left-[109px] top-[327.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Button20 />
        <Button21 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image5 />
        <Container33 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d={svgPaths.p6932200} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute bg-[#ffb900] drop-shadow-[0px_4px_3px_rgba(0,0,0,0.1),0px_2px_2px_rgba(0,0,0,0.1)] left-[202px] rounded-[16777200px] size-[32px] top-[10px]" data-name="Button - 템플릿 적용하기">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container32 />
        <Button22 />
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">예비창업패키지 사업계획서</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[36px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] w-[220px]">2025년도 예비창업패키지 지원용 공식 사업계획서 양식입니다.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph9 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="bg-[#f8fafc] h-[419.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container31 />
        <Container34 />
      </div>
    </div>
  );
}

function Image6() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 1장)" />;
}

function Container36() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image6 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">품의서양식1</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">비즈니스 양식/품의서 양식 - 품의서양식1 양식</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="bg-[#f8fafc] h-[403.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container35 />
        <Container37 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative self-stretch shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <Button18 />
        <Button19 />
        <Button23 />
      </div>
    </div>
  );
}

function Image7() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 2장)" />;
}

function Button25() {
  return <div className="bg-white h-[6px] relative rounded-[16777200px] shrink-0 w-[16px]" data-name="Button" />;
}

function Button26() {
  return <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Button" />;
}

function Container41() {
  return (
    <div className="absolute left-[109px] top-[327.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Button25 />
        <Button26 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image7 />
        <Container41 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container40 />
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">주택임대차 표준계약서</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[36px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] w-[220px]">부동산 양식 - 주택임대차 표준계약서(원본게시용) 양식</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#f8fafc] h-[419.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container39 />
        <Container42 />
      </div>
    </div>
  );
}

function Image8() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 1장)" />;
}

function Container44() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image8 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container44 />
      </div>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">내용증명서구매</p>
      </div>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[36px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] w-[220px]">부동산 양식/내용증명 - 내용증명서구매대금지급관련내용증명 양식</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph15 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[#f8fafc] h-[419.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container43 />
        <Container45 />
      </div>
    </div>
  );
}

function Image9() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 2장)" />;
}

function Button29() {
  return <div className="bg-white h-[6px] relative rounded-[16777200px] shrink-0 w-[16px]" data-name="Button" />;
}

function Button30() {
  return <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[16777200px] shrink-0 size-[6px]" data-name="Button" />;
}

function Container48() {
  return (
    <div className="absolute left-[109px] top-[327.59px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start relative size-full">
        <Button29 />
        <Button30 />
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image9 />
        <Container48 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">학업계획서양식</p>
      </div>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">교육 양식/학업계획서 - 학업계획서양식 양식</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph17 />
        <Paragraph18 />
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-[#f8fafc] h-[403.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container46 />
        <Container49 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <Button24 />
        <Button27 />
        <Button28 />
      </div>
    </div>
  );
}

function Image10() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 1장)" />;
}

function Container52() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image10 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container52 />
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">21_답변서</p>
      </div>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">법무 양식 - 21_답변서 양식</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph19 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Button31() {
  return (
    <div className="bg-[#f8fafc] h-[403.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container51 />
        <Container53 />
      </div>
    </div>
  );
}

function Image11() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 1장)" />;
}

function Container55() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image11 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container55 />
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">이행독촉통보_4</p>
      </div>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[20px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">부동산 양식/내용증명 - 이행독촉통보_4 양식</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph21 />
        <Paragraph22 />
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="bg-[#f8fafc] h-[403.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container54 />
        <Container56 />
      </div>
    </div>
  );
}

function Image12() {
  return <div className="bg-[rgba(81,81,81,0.1)] h-[341.594px] relative shrink-0 w-full" data-name="Image (1 / 1장)" />;
}

function Container58() {
  return (
    <div className="h-[341.594px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Image12 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="bg-[rgba(241,246,250,0.1)] h-[341.594px] relative shrink-0 w-[244px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container58 />
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[17.5px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[17.5px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">위임장내용직접기재</p>
      </div>
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[20px] relative shrink-0 w-[220px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pt-[4px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">법무 양식 - 위임장내용직접기재 양식</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[12px] relative size-full">
        <Paragraph23 />
        <Paragraph24 />
      </div>
    </div>
  );
}

function Button33() {
  return (
    <div className="bg-[#f8fafc] h-[403.094px] relative rounded-[14px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[244px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container57 />
        <Container59 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <Button31 />
        <Button32 />
        <Button33 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[20px] items-start relative size-full">
        <Container15 />
        <Container27 />
        <Container38 />
        <Container50 />
      </div>
    </div>
  );
}

function Container60() {
  return <div className="h-[16px] relative shrink-0 w-full" data-name="Container" />;
}

function Container2() {
  return (
    <div className="max-w-[1100px] relative shrink-0 w-[1100px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-center justify-center max-w-[inherit] pb-[40px] pt-[120px] px-[32px] relative size-full">
        <Container3 />
        <Container9 />
        <Container14 />
        <Container60 />
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-[#f8fafc] flex-[1660_0_0] h-[958px] min-w-px relative" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-center overflow-clip relative rounded-[inherit] size-full">
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

function Link() {
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
        <Link />
      </div>
    </div>
  );
}

function Icon9() {
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

function Button34() {
  return (
    <div className="opacity-80 relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
          <LinkMargin />
          <Button34 />
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="h-[72px] relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
        <Container64 />
      </div>
    </div>
  );
}

function Icon10() {
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

function Text2() {
  return (
    <div className="h-[21px] relative shrink-0 w-[11.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#155dfc] text-[14px] tracking-[-0.35px] whitespace-nowrap">홈</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#f1f5f9] h-[44px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon10 />
        <Text2 />
      </div>
    </div>
  );
}

function Icon11() {
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

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[38.32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.35px] whitespace-nowrap">내 작업</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon11 />
        <Text3 />
      </div>
    </div>
  );
}

function Icon12() {
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

function Text4() {
  return (
    <div className="h-[21px] relative shrink-0 w-[47px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.35px] whitespace-nowrap">즐겨찾기</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon12 />
        <Text4 />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="h-[152px] relative shrink-0 w-[259px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[8px] pt-[4px] px-[8px] relative size-full">
        <Link1 />
        <Link2 />
        <Link3 />
      </div>
    </div>
  );
}

function Container67() {
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

function Icon13() {
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

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[185.555px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">거주숙소제공사실확인서(영문병기)</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon13 />
        <Text5 />
      </div>
    </div>
  );
}

function Icon14() {
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

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[185.555px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">거주숙소제공사실확인서(중문병기)</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon14 />
        <Text6 />
      </div>
    </div>
  );
}

function Icon15() {
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

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[164.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">강제퇴거명령에대한이의신청서</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon15 />
        <Text7 />
      </div>
    </div>
  );
}

function Icon16() {
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

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[91.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#45556c] text-[14px] tracking-[-0.35px] whitespace-nowrap">거소신고(신청)서</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[32px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon16 />
        <Text8 />
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-[243px]" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Container67 />
        <List1 />
      </div>
    </div>
  );
}

function Container69() {
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

function Link8() {
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
        <Link8 />
      </div>
    </div>
  );
}

function Link9() {
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
        <Link9 />
      </div>
    </div>
  );
}

function Link10() {
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
        <Link10 />
      </div>
    </div>
  );
}

function Link11() {
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
        <Link11 />
      </div>
    </div>
  );
}

function Link12() {
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
        <Link12 />
      </div>
    </div>
  );
}

function Link13() {
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
        <Link13 />
      </div>
    </div>
  );
}

function Link14() {
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
        <Link14 />
      </div>
    </div>
  );
}

function Link15() {
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
        <Link15 />
      </div>
    </div>
  );
}

function Link16() {
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
        <Link16 />
      </div>
    </div>
  );
}

function Link17() {
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
        <Link17 />
      </div>
    </div>
  );
}

function Link18() {
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
        <Link18 />
      </div>
    </div>
  );
}

function Link19() {
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
        <Link19 />
      </div>
    </div>
  );
}

function Link20() {
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
        <Link20 />
      </div>
    </div>
  );
}

function Link21() {
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
        <Link21 />
      </div>
    </div>
  );
}

function Link22() {
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
        <Link22 />
      </div>
    </div>
  );
}

function Link23() {
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
        <Link23 />
      </div>
    </div>
  );
}

function Link24() {
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
        <Link24 />
      </div>
    </div>
  );
}

function Link25() {
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
        <Link25 />
      </div>
    </div>
  );
}

function Link26() {
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
        <Link26 />
      </div>
    </div>
  );
}

function Link27() {
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
        <Link27 />
      </div>
    </div>
  );
}

function Link28() {
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
        <Link28 />
      </div>
    </div>
  );
}

function Link29() {
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
        <Link29 />
      </div>
    </div>
  );
}

function Link30() {
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
        <Link30 />
      </div>
    </div>
  );
}

function Link31() {
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
        <Link31 />
      </div>
    </div>
  );
}

function Link32() {
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
        <Link32 />
      </div>
    </div>
  );
}

function Link33() {
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
        <Link33 />
      </div>
    </div>
  );
}

function Link34() {
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
        <Link34 />
      </div>
    </div>
  );
}

function Link35() {
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
        <Link35 />
      </div>
    </div>
  );
}

function Link36() {
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
        <Link36 />
      </div>
    </div>
  );
}

function Link37() {
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
        <Link37 />
      </div>
    </div>
  );
}

function Link38() {
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
        <Link38 />
      </div>
    </div>
  );
}

function Link39() {
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
        <Link39 />
      </div>
    </div>
  );
}

function Link40() {
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
        <Link40 />
      </div>
    </div>
  );
}

function Link41() {
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
        <Link41 />
      </div>
    </div>
  );
}

function Link42() {
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
        <Link42 />
      </div>
    </div>
  );
}

function Link43() {
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
        <Link43 />
      </div>
    </div>
  );
}

function Link44() {
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
        <Link44 />
      </div>
    </div>
  );
}

function Link45() {
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
        <Link45 />
      </div>
    </div>
  );
}

function Link46() {
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
        <Link46 />
      </div>
    </div>
  );
}

function Link47() {
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
        <Link47 />
      </div>
    </div>
  );
}

function Link48() {
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
        <Link48 />
      </div>
    </div>
  );
}

function Link49() {
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
        <Link49 />
      </div>
    </div>
  );
}

function Link50() {
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
        <Link50 />
      </div>
    </div>
  );
}

function Link51() {
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
        <Link51 />
      </div>
    </div>
  );
}

function Link52() {
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
        <Link52 />
      </div>
    </div>
  );
}

function Link53() {
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
        <Link53 />
      </div>
    </div>
  );
}

function Link54() {
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
        <Link54 />
      </div>
    </div>
  );
}

function Link55() {
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
        <Link55 />
      </div>
    </div>
  );
}

function Link56() {
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
        <Link56 />
      </div>
    </div>
  );
}

function Link57() {
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
        <Link57 />
      </div>
    </div>
  );
}

function Container70() {
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

function Button35() {
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
        <Container70 />
        <Button35 />
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Container69 />
        <List2 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="flex-[819.719_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[inherit] size-full">
        <List />
        <Container66 />
        <Container68 />
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

function Text9() {
  return (
    <div className="bg-[#e0e7ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Image />
      </div>
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container74() {
  return (
    <div className="h-[18.57px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[18.571px] relative shrink-0 text-[#0a0a0a] text-[13px] whitespace-nowrap">최유정</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="h-[15.711px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15.714px] relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">cyj2406@gmail.com</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="flex-[159_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container74 />
        <Container75 />
      </div>
    </div>
  );
}

function Icon17() {
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

function Container72() {
  return (
    <div className="relative shrink-0 w-[227px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Text9 />
        <Container73 />
        <Icon17 />
      </div>
    </div>
  );
}

function Button36() {
  return (
    <div className="h-[50.281px] relative rounded-[18px] shrink-0 w-[243px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <Container72 />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Button36 />
      </div>
    </div>
  );
}

function Button37() {
  return <div className="absolute h-[958px] left-[251px] top-0 w-[16px]" data-name="Button - 사이드바 열기/닫기" />;
}

function Container62() {
  return (
    <div className="bg-white h-[958px] relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container63 />
        <Container65 />
        <Container71 />
        <Button37 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[958px] left-0 top-0 w-[260px]" data-name="Container">
      <div aria-hidden className="absolute border-[#dfe6ed] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-px relative size-full">
        <Container62 />
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute flex items-center justify-center left-[112.82px] size-[16.971px] top-[23.51px]">
      <div className="flex-none rotate-45">
        <div className="bg-white relative size-[12px]" data-name="Container" />
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute bg-white drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] left-[1752.7px] rounded-[14px] top-[846px] w-[151.305px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] whitespace-nowrap">PPT를 뚝딱 만들어 드려요!</p>
        <Container77 />
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 size-[80px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Button38() {
  return (
    <div className="absolute left-[1824px] top-[862px]" data-name="Button - 고객 지원 채팅">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Container78 />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-center justify-center relative size-full" data-name="새 대화 - 딸깍">
      <Body />
      <Container61 />
      <Container76 />
      <Button38 />
    </div>
  );
}