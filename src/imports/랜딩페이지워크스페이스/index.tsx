import svgPaths from "./svg-pstkql2nm7";
import imgImage from "./0410480785364891593b0645b60e2cc2dc3d6cb5.png";
import imgImage1 from "./beac47c9adb747ce60de6bd036e83eec129a696d.png";
import imgImageNet from "./70598a9173139973c519fbc9c881094e41ef9297.png";
import imgImage2 from "./ec4bf4c83826b512a10ccb46952ef28cdb24b8d8.png";
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

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Icon />
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#737373] text-[14px] text-center whitespace-nowrap">갤러리로 돌아가기</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="h-[97px] relative shrink-0 w-full" data-name="Image (시네마틱 다크 우주 스타일 랜딩페이지)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#f1f6fa] h-[99px] relative rounded-[10px] shrink-0 w-[176px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Image />
      </div>
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#90a1b9] text-[10px] tracking-[-0.25px] uppercase whitespace-nowrap">선택한 템플릿</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">시네마틱 다크 우주 스타일 랜딩페이지</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#eff6ff] relative rounded-bl-[18px] rounded-br-[18px] rounded-tl-[18px] rounded-tr-[6px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-bl-[18px] rounded-br-[18px] rounded-tl-[18px] rounded-tr-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start px-[13px] py-[11px] relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16777200px] size-full" src={imgImage1} />
    </div>
  );
}

function ImageMargin() {
  return (
    <div className="relative shrink-0" data-name="Image:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Image1 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] relative rounded-bl-[18px] rounded-br-[18px] rounded-tl-[6px] rounded-tr-[18px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-bl-[18px] rounded-br-[18px] rounded-tl-[6px] rounded-tr-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22.75px] relative shrink-0 text-[#314158] text-[14px] whitespace-nowrap">좋은 선택이에요! 아래에서 내용을 입력·편집하고 생성하기를 눌러주세요.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start relative size-full">
        <ImageMargin />
        <Container11 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start max-w-[inherit] relative size-full">
        <Button />
        <Container6 />
        <Container10 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_19_2652)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #00BCFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p253a080} id="Vector_2" stroke="var(--stroke-0, #00BCFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H14.6667" id="Vector_3" stroke="var(--stroke-0, #00BCFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_19_2652">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">시네마틱 다크 우주 스타일 랜딩페이지</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] relative rounded-[16777200px] shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[8px] py-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16.5px] relative shrink-0 text-[11px] text-black whitespace-nowrap">랜딩페이지</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[15px] relative shrink-0 text-[#0a0a0a] text-[10px] whitespace-nowrap">주제입력</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#737373] text-[10px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#737373] text-[10px] whitespace-nowrap">내용편집</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#737373] text-[10px] whitespace-nowrap">→</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[10px] text-[rgba(115,115,115,0.5)] whitespace-nowrap">채팅에서 생성</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[15px] relative shrink-0 w-[169px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center pl-[8px] relative size-full">
        <Text3 />
        <Text4 />
        <Text5 />
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Icon1 />
        <Heading />
        <Text2 />
        <Container14 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#dfe6ed] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pb-[13px] pt-[12px] px-[20px] relative size-full">
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Image3() {
  return (
    <div className="h-[200px] max-h-[200px] relative rounded-[10px] shrink-0 w-[355.555px]" data-name="Image (1 / 1장)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none rounded-[10px] size-full" src={imgImage} />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[200px] items-center max-w-[448px] overflow-clip relative shrink-0 w-[448px]" data-name="Container">
      <Image3 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container17 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(23,23,23,0.3)] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#dfe6ed] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[17px] pt-[16px] px-[16px] relative size-full">
        <ContainerMargin1 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">제품/서비스 정보를 입력하면 AI가 랜딩페이지 아웃라인을 구성합니다.</p>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] whitespace-nowrap">주제 / 제품 소개</p>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[78px] relative rounded-[10px] shrink-0 w-[982px]" data-name="Text Area">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(115,115,115,0.5)] w-full">예: 딸깍.net — AI 문서 자동생성 서비스. 누구나 쉽게 전문 문서를 만들 수 있습니다.</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Label />
        <TextArea />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] whitespace-nowrap">스타일 힌트 (선택)</p>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[38px] relative rounded-[10px] shrink-0 w-[982px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[13px] py-[9px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] w-full">시네마틱 다크 우주</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Label1 />
        <TextInput />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] whitespace-nowrap">섹션 수</p>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-[#f8fafc] h-[37px] relative rounded-[10px] shrink-0 w-[982px]" data-name="Dropdown">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Label2 />
        <Dropdown />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full">
        <Paragraph />
        <Container19 />
        <Container20 />
        <Container21 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container16 />
        <Container18 />
      </div>
    </div>
  );
}

function Container23() {
  return <div className="h-0 relative shrink-0 w-[982px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_19_2660)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p253a080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M1.33333 8H14.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_19_2660">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#3b63f6] opacity-50 relative rounded-[18px] self-stretch shrink-0 w-[982px]" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center py-[14px] relative size-full">
          <Icon2 />
          <p className="[word-break:break-word] font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">아웃라인 생성</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[56px] relative shrink-0 w-[982px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[8px] relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border-[#dfe6ed] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-[12px] pt-[13px] px-[20px] relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Dialog() {
  return (
    <div className="bg-[#f8fafc] h-[692.5px] max-w-[1024px] relative rounded-[18px] shrink-0 w-[1024px]" data-name="Dialog">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container12 />
        <Container15 />
        <Container22 />
      </div>
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[18px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[1100px] pb-[40px] pt-[120px] px-[32px] relative shrink-0 w-[1100px]" data-name="Container">
      <Container5 />
      <Dialog />
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
    <div className="h-[929px] relative shrink-0 w-[1659px]" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip pb-[64px] pt-[8px] px-[56px] relative rounded-[inherit] size-full">
        <ContainerMargin />
      </div>
    </div>
  );
}

function Container25() {
  return <div className="flex-[1472.305_0_0] h-0 min-w-px relative" data-name="Container" />;
}

function Text8() {
  return (
    <div className="bg-[#4f7bff] relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[14.286px] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">C</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">40,865</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#f8fafc] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[36px] relative rounded-[20px] shrink-0" data-name="Button - 크레딧 충전">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[13px] py-px relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function Icon3() {
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

function Text10() {
  return <div className="absolute bg-[#2b7fff] left-[22px] rounded-[16777200px] size-[8px] top-[6px]" data-name="Text" />;
}

function Button3() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button - 알림">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
        <Text10 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[56px] left-0 top-0" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] relative size-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[929px] relative shrink-0 w-[1659px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between relative size-full">
        <MainContent1 />
        <Header />
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
    <div className="bg-[#f8fafc] flex-[1660_0_0] h-[929px] min-w-px relative" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Container2 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[929px] relative shrink-0 w-full" data-name="Body">
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

function Icon4() {
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

function Button4() {
  return (
    <div className="opacity-80 relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
          <LinkMargin />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[72px] relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p275d2400} id="Vector" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1db6d780} id="Vector_2" stroke="var(--stroke-0, #1E293B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[21px] relative shrink-0 w-[11.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#1e293b] text-[14px] tracking-[-0.35px] whitespace-nowrap">홈</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[44px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon5 />
        <Text11 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p178dcc00} id="Vector" stroke="var(--stroke-0, #45556C)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[21px] relative shrink-0 w-[38.32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#0f172b] text-[14px] tracking-[-0.35px] whitespace-nowrap">내 작업</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#f8fafc] h-[44px] relative rounded-[14px] shrink-0 w-[243px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <Icon6 />
        <Text12 />
      </div>
    </div>
  );
}

function Icon7() {
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

function Text13() {
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
        <Icon7 />
        <Text13 />
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

function Container33() {
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

function Icon8() {
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

function Text14() {
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
        <Icon8 />
        <Text14 />
      </div>
    </div>
  );
}

function Icon9() {
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

function Text15() {
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
        <Icon9 />
        <Text15 />
      </div>
    </div>
  );
}

function Icon10() {
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

function Text16() {
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
        <Icon10 />
        <Text16 />
      </div>
    </div>
  );
}

function Icon11() {
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

function Text17() {
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
        <Icon11 />
        <Text17 />
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

function Container32() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Container33 />
        <List1 />
      </div>
    </div>
  );
}

function Container35() {
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

function Container36() {
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

function Button5() {
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
        <Container36 />
        <Button5 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Container35 />
        <List2 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[790.719_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[inherit] size-full">
        <List />
        <Container32 />
        <Container34 />
      </div>
    </div>
  );
}

function Image2() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Image (최유정)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
    </div>
  );
}

function Text18() {
  return (
    <div className="bg-[#e0e7ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Image2 />
      </div>
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container40() {
  return (
    <div className="h-[18.57px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[18.571px] relative shrink-0 text-[#0a0a0a] text-[13px] whitespace-nowrap">최유정</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[15.711px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15.714px] relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">cyj2406@gmail.com</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[159_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container40 />
        <Container41 />
      </div>
    </div>
  );
}

function Icon12() {
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

function Container38() {
  return (
    <div className="relative shrink-0 w-[227px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Text18 />
        <Container39 />
        <Icon12 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-[50.281px] relative rounded-[18px] shrink-0 w-[243px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <Container38 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Button6 />
      </div>
    </div>
  );
}

function Button7() {
  return <div className="absolute h-[929px] left-[251px] top-0 w-[16px]" data-name="Button - 사이드바 열기/닫기" />;
}

function Container28() {
  return (
    <div className="bg-white h-[929px] relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container29 />
        <Container31 />
        <Container37 />
        <Button7 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[929px] left-0 top-0 w-[260px]" data-name="Container">
      <div aria-hidden className="absolute border-[#dfe6ed] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-px relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 size-[80px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute left-[1824px] top-[833px]" data-name="Button - 고객 지원 채팅">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Container42 />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start relative size-full" data-name="랜딩페이지 워크스페이스">
      <Body />
      <Container27 />
      <Button8 />
    </div>
  );
}