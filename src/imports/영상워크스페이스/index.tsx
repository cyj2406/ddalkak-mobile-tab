import svgPaths from "./svg-yay4z6ayyy";
import imgImage from "./beac47c9adb747ce60de6bd036e83eec129a696d.png";
import imgVideo from "./9ae61b3f3ba4e4f4ca0b7edb221fce95b87158c0.png";
import imgImageNet from "./70598a9173139973c519fbc9c881094e41ef9297.png";
import imgImage1 from "./ec4bf4c83826b512a10ccb46952ef28cdb24b8d8.png";
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
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#1d293d] text-[14px] whitespace-nowrap">삼성 Z 트라이폴드 광고 리뷰</p>
      </div>
    </div>
  );
}

function Container8() {
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
    <div className="bg-[#eff6ff] relative rounded-bl-[18px] rounded-br-[18px] rounded-tl-[18px] rounded-tr-[6px] shrink-0 w-[181.172px]" data-name="Container">
      <div aria-hidden className="absolute border border-[#dbeafe] border-solid inset-0 pointer-events-none rounded-bl-[18px] rounded-br-[18px] rounded-tl-[18px] rounded-tr-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[13px] py-[11px] relative size-full">
        <Container8 />
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

function Image() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[28px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16777200px] size-full" src={imgImage} />
    </div>
  );
}

function ImageMargin() {
  return (
    <div className="relative shrink-0" data-name="Image:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Image />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] relative rounded-bl-[18px] rounded-br-[18px] rounded-tl-[6px] rounded-tr-[18px] shrink-0" data-name="Container">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-bl-[18px] rounded-br-[18px] rounded-tl-[6px] rounded-tr-[18px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[17px] py-[13px] relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[22.75px] relative shrink-0 text-[#314158] text-[14px] whitespace-nowrap">좋은 선택이에요! 아래에서 내용을 입력·편집하고 생성하기를 눌러주세요.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-start relative size-full">
        <ImageMargin />
        <Container10 />
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
        <Container9 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p144f51c0} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1e94b080} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">삼성 Z 트라이폴드 광고 리뷰</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">풀스크린 영상 배경 위에 상단 제목(첫 줄 하이라이트) + 하단 자막 오버레이</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-[349.594px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Icon1 />
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

function Label() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">{`주제 `}</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Label />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(0,0,0,0.1)] col-1 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[9px] py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] text-center whitespace-nowrap">AI 브리프</p>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(241,246,250,0.3)] col-2 justify-self-stretch relative rounded-[8px] row-1 self-stretch shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[9px] py-[7px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] text-center whitespace-nowrap">그대로 생성</p>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="gap-x-[4px] gap-y-[4px] grid grid-cols-[__302px_302px] grid-rows-[_30px] h-[30px] relative shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[608px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15.125px] relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">AI가 주제를 씬 단위 브리프로 다듬은 뒤 확인하고 생성합니다.</p>
      </div>
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute bg-[rgba(241,246,250,0.5)] h-[66px] left-0 rounded-[10px] top-[6px] w-[608px]" data-name="Text Area">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[13px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)] w-full">영상 주제를 입력하세요 (예: 군고구마 먹는 강아지)</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[78.5px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <TextArea />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container17 />
        <ContainerMargin1 />
        <Paragraph1 />
        <Container19 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#0a0a0a] text-[14px] top-[3px] whitespace-nowrap">씬 개수</p>
      </div>
    </div>
  );
}

function RangeSlider() {
  return <div className="flex-[556_0_0] h-[6px] min-w-px relative" data-name="Range Slider" />;
}

function Text2() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-right whitespace-nowrap">자동</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[6px] relative size-full">
        <RangeSlider />
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-full relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#737373] text-[10px] whitespace-nowrap">자동</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-full relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15px] relative shrink-0 text-[#737373] text-[10px] whitespace-nowrap">5개</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[19px] relative shrink-0 w-[608px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-between pt-[4px] relative size-full">
        <Text3 />
        <Text4 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[85px] relative shrink-0 w-[608px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container21 />
        <Container22 />
        <Container23 />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] whitespace-nowrap">폰트</p>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-[#f8fafc] h-[37px] relative rounded-[10px] shrink-0 w-[298px]" data-name="Dropdown">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Label1 />
        <Dropdown />
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] whitespace-nowrap">주색</p>
      </div>
    </div>
  );
}

function ColorPicker() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[36px]" data-name="Color Picker">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[30px] relative rounded-[4px] shrink-0 w-[96px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center overflow-clip px-[9px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-[rgba(115,115,115,0.5)] w-full">#3B63F6</p>
      </div>
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <ColorPicker />
        <TextInput />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[6px] items-start relative size-full">
        <Label2 />
        <Container27 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[__298px_298px] grid-rows-[_59px] h-[59px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#0a0a0a] text-[14px] top-[3px] whitespace-nowrap">영상 길이</p>
      </div>
    </div>
  );
}

function RangeSlider1() {
  return <div className="flex-[556_0_0] h-[6px] min-w-px relative" data-name="Range Slider" />;
}

function Text5() {
  return (
    <div className="relative shrink-0 w-[40px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-end relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-right whitespace-nowrap">10초</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[26px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[6px] relative size-full">
        <RangeSlider1 />
        <Text5 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[66px] relative shrink-0 w-[608px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container29 />
        <Container30 />
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">TTS 음성</p>
      </div>
    </div>
  );
}

function Checkbox() {
  return (
    <div className="bg-white relative rounded-[2px] shrink-0 size-[13px]" data-name="Checkbox">
      <div aria-hidden className="absolute border border-[#767676] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full" />
    </div>
  );
}

function Label4() {
  return (
    <div className="relative shrink-0" data-name="Label">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Checkbox />
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] whitespace-nowrap">TTS 비활성화</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Label3 />
        <Label4 />
      </div>
    </div>
  );
}

function Dropdown1() {
  return <div className="bg-[rgba(241,246,250,0.4)] h-[24.5px] relative rounded-[10px] shrink-0 w-[84.5px]" data-name="Dropdown" />;
}

function Dropdown2() {
  return <div className="bg-[rgba(241,246,250,0.4)] h-[24.5px] relative rounded-[10px] shrink-0 w-[84.5px]" data-name="Dropdown" />;
}

function Text6() {
  return <div className="flex-[309_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon2() {
  return (
    <div className="absolute left-[8px] size-[12px] top-[6.75px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d="M10.5 10.5L8.33 8.33" id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p1c92f080} id="Vector_2" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-[rgba(241,246,250,0.4)] content-stretch flex flex-col h-[24px] items-start justify-center left-0 overflow-clip pl-[28px] pr-[8px] py-[4px] rounded-[10px] top-[1.5px] w-[112px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[12px] text-[rgba(10,10,10,0.5)] w-full">이름 검색</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[25.5px] relative shrink-0 w-[112px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon2 />
        <TextInput1 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center relative size-full">
        <Dropdown1 />
        <Dropdown2 />
        <Text6 />
        <Container35 />
      </div>
    </div>
  );
}

function Text7() {
  return <div className="h-0 relative shrink-0 w-[12px]" data-name="Text" />;
}

function Text8() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">찬구</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">남 · 성인</p>
      </div>
    </div>
  );
}

function Text10() {
  return <div className="flex-[411.805_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative size-full">
          <Text7 />
          <Text8 />
          <Text9 />
          <Text10 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Text11() {
  return <div className="h-0 relative shrink-0 w-[12px]" data-name="Text" />;
}

function Text12() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">준기</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">남 · 성인</p>
      </div>
    </div>
  );
}

function Text14() {
  return <div className="flex-[411.805_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin1 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[608px]" data-name="Button">
      <Text11 />
      <Text12 />
      <Text13 />
      <Text14 />
      <Button6 />
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[2px] relative size-full">
        <Button5 />
      </div>
    </div>
  );
}

function Text15() {
  return <div className="h-0 relative shrink-0 w-[12px]" data-name="Text" />;
}

function Text16() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">공철</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">남 · 성인</p>
      </div>
    </div>
  );
}

function Text18() {
  return <div className="flex-[411.805_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin2() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin2 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[608px]" data-name="Button">
      <Text15 />
      <Text16 />
      <Text17 />
      <Text18 />
      <Button8 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[2px] relative size-full">
        <Button7 />
      </div>
    </div>
  );
}

function Text19() {
  return <div className="h-0 relative shrink-0 w-[12px]" data-name="Text" />;
}

function Text20() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">창수</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">남 · 성인</p>
      </div>
    </div>
  );
}

function Text22() {
  return <div className="flex-[411.805_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin3() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin3 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[608px]" data-name="Button">
      <Text19 />
      <Text20 />
      <Text21 />
      <Text22 />
      <Button10 />
    </div>
  );
}

function ButtonMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[2px] relative size-full">
        <Button9 />
      </div>
    </div>
  );
}

function Text23() {
  return <div className="h-0 relative shrink-0 w-[12px]" data-name="Text" />;
}

function Text24() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">용식</p>
      </div>
    </div>
  );
}

function Text25() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">남 · 성인</p>
      </div>
    </div>
  );
}

function Text26() {
  return <div className="flex-[411.805_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin4() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin4 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[608px]" data-name="Button">
      <Text23 />
      <Text24 />
      <Text25 />
      <Text26 />
      <Button12 />
    </div>
  );
}

function ButtonMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[2px] relative size-full">
        <Button11 />
      </div>
    </div>
  );
}

function Text27() {
  return <div className="h-0 relative shrink-0 w-[12px]" data-name="Text" />;
}

function Text28() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">일호</p>
      </div>
    </div>
  );
}

function Text29() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">남 · 시니어</p>
      </div>
    </div>
  );
}

function Text30() {
  return <div className="flex-[401.43_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin5() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin5 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[608px]" data-name="Button">
      <Text27 />
      <Text28 />
      <Text29 />
      <Text30 />
      <Button14 />
    </div>
  );
}

function ButtonMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[2px] relative size-full">
        <Button13 />
      </div>
    </div>
  );
}

function Text31() {
  return <div className="h-0 relative shrink-0 w-[12px]" data-name="Text" />;
}

function Text32() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">하준</p>
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">남 · 어린이</p>
      </div>
    </div>
  );
}

function Text34() {
  return <div className="flex-[401.43_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin6() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin6 />
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[608px]" data-name="Button">
      <Text31 />
      <Text32 />
      <Text33 />
      <Text34 />
      <Button16 />
    </div>
  );
}

function ButtonMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[2px] relative size-full">
        <Button15 />
      </div>
    </div>
  );
}

function Text35() {
  return <div className="h-0 relative shrink-0 w-[12px]" data-name="Text" />;
}

function Text36() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">하율</p>
      </div>
    </div>
  );
}

function Text37() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">여 · 어린이</p>
      </div>
    </div>
  );
}

function Text38() {
  return <div className="flex-[401.43_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin7() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin7 />
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[608px]" data-name="Button">
      <Text35 />
      <Text36 />
      <Text37 />
      <Text38 />
      <Button18 />
    </div>
  );
}

function ButtonMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[2px] relative size-full">
        <Button17 />
      </div>
    </div>
  );
}

function Text39() {
  return <div className="h-0 relative shrink-0 w-[12px]" data-name="Text" />;
}

function Text40() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">채아</p>
      </div>
    </div>
  );
}

function Text41() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">여 · 어린이</p>
      </div>
    </div>
  );
}

function Text42() {
  return <div className="flex-[401.43_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin8() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin8 />
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[608px]" data-name="Button">
      <Text39 />
      <Text40 />
      <Text41 />
      <Text42 />
      <Button20 />
    </div>
  );
}

function ButtonMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[2px] relative size-full">
        <Button19 />
      </div>
    </div>
  );
}

function Text43() {
  return (
    <div className="relative shrink-0 w-[12px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#155dfc] text-[12px] whitespace-nowrap">✓</p>
      </div>
    </div>
  );
}

function Text44() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#155dfc] text-[14px] whitespace-nowrap">소진</p>
      </div>
    </div>
  );
}

function Text45() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">여 · 성인</p>
      </div>
    </div>
  );
}

function Text46() {
  return <div className="flex-[411.805_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin9() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin9 />
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="bg-[rgba(43,127,255,0.1)] content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[608px]" data-name="Button">
      <Text43 />
      <Text44 />
      <Text45 />
      <Text46 />
      <Button22 />
    </div>
  );
}

function ButtonMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[2px] relative size-full">
        <Button21 />
      </div>
    </div>
  );
}

function Text47() {
  return <div className="h-0 relative shrink-0 w-[12px]" data-name="Text" />;
}

function Text48() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">나은</p>
      </div>
    </div>
  );
}

function Text49() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">여 · 성인</p>
      </div>
    </div>
  );
}

function Text50() {
  return <div className="flex-[411.805_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin10() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin10 />
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[608px]" data-name="Button">
      <Text47 />
      <Text48 />
      <Text49 />
      <Text50 />
      <Button24 />
    </div>
  );
}

function ButtonMargin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[2px] relative size-full">
        <Button23 />
      </div>
    </div>
  );
}

function Text51() {
  return <div className="h-0 relative shrink-0 w-[12px]" data-name="Text" />;
}

function Text52() {
  return (
    <div className="relative shrink-0 w-[48px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">순이</p>
      </div>
    </div>
  );
}

function Text53() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#737373] text-[12px] whitespace-nowrap">여 · 시니어</p>
      </div>
    </div>
  );
}

function Text54() {
  return <div className="flex-[401.43_0_0] h-0 min-w-px relative" data-name="Text" />;
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="Icon">
          <path d={svgPaths.p16566b80} id="Vector" stroke="var(--stroke-0, #737373)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.833333" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin11() {
  return (
    <div className="relative shrink-0" data-name="Icon:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[2px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="bg-[rgba(241,246,250,0.8)] relative rounded-[16777200px] shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <IconMargin11 />
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="content-stretch flex gap-[12px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 w-[608px]" data-name="Button">
      <Text51 />
      <Text52 />
      <Text53 />
      <Text54 />
      <Button26 />
    </div>
  );
}

function ButtonMargin10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[2px] relative size-full">
        <Button25 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col h-[140px] items-start max-h-[140px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <ButtonMargin />
      <ButtonMargin1 />
      <ButtonMargin2 />
      <ButtonMargin3 />
      <ButtonMargin4 />
      <ButtonMargin5 />
      <ButtonMargin6 />
      <ButtonMargin7 />
      <ButtonMargin8 />
      <ButtonMargin9 />
      <ButtonMargin10 />
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <Container36 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-[608px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[6px] relative size-full">
        <Container34 />
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-[608px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container32 />
        <Container33 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#0a0a0a] text-[12px] top-[5px] whitespace-nowrap">영상 업로드 (선택)</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[32px] min-h-[30px] relative shrink-0 w-[298px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15.125px] relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">이 영상에 자막·음성(TTS)만 추가합니다 (AI 생성 안 함).</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 7.58333V12.25" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p8deb600} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3b305380} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button27() {
  return (
    <div className="bg-[rgba(241,246,250,0.3)] content-stretch flex gap-[6px] h-[34px] items-center justify-center p-[9px] relative rounded-[10px] shrink-0 w-[298px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-dashed inset-0 pointer-events-none rounded-[10px]" />
      <Icon15 />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] text-center whitespace-nowrap">영상 선택</p>
    </div>
  );
}

function ButtonMargin11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Button27 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container39 />
        <Paragraph2 />
        <ButtonMargin11 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Pretendard_Variable:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#0a0a0a] text-[12px] top-[5px] whitespace-nowrap">참조 이미지 (선택)</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[32px] min-h-[30px] relative shrink-0 w-[298px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] pt-[2px] relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15.125px] relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">첫 장면으로 쓰거나 인물·스타일을 참조합니다.</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M7 7.58333V12.25" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p8deb600} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p3b305380} id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button28() {
  return (
    <div className="bg-[rgba(241,246,250,0.3)] content-stretch flex gap-[6px] h-[34px] items-center justify-center p-[9px] relative rounded-[10px] shrink-0 w-[298px]" data-name="Button">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-dashed inset-0 pointer-events-none rounded-[10px]" />
      <Icon16 />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#0a0a0a] text-[12px] text-center whitespace-nowrap">이미지 선택</p>
    </div>
  );
}

function ButtonMargin12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] relative size-full">
        <Button28 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container41 />
        <Paragraph3 />
        <ButtonMargin12 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-x-[12px] gap-y-[12px] grid grid-cols-[__298px_298px] grid-rows-[_94px] h-[94px] relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container40 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container37 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[544_0_0] min-h-px relative w-[648px]" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[20px] relative size-full">
          <Container16 />
          <Container20 />
          <ContainerMargin2 />
          <Container28 />
          <Container31 />
          <ContainerMargin4 />
        </div>
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_19_2638)" id="Icon">
          <path d={svgPaths.p22f0380} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14.5693 1.43133L7.276 8.724" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_19_2638">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="bg-[#3b63f6] opacity-50 relative rounded-[18px] shrink-0 w-[608px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center py-[14px] relative size-full">
        <Icon17 />
        <p className="[word-break:break-word] font-['Pretendard_Variable:ExtraBold',sans-serif] font-extrabold leading-[20px] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">영상 생성 시작</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#dfe6ed] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[12px] pt-[13px] px-[20px] relative size-full">
        <Button29 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[648_0_0] h-full min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container12 />
        <Container15 />
        <Container42 />
      </div>
    </div>
  );
}

function Video() {
  return (
    <div className="h-[678px] max-h-[743.2000122070312px] relative shrink-0 w-[229px]" data-name="Video">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgVideo} />
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-black h-full relative shrink-0 w-[230px]" data-name="Container">
      <div aria-hidden className="absolute border-[#dfe6ed] border-l border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-px relative size-full">
        <Video />
      </div>
    </div>
  );
}

function Dialog() {
  return (
    <div className="bg-[#f8fafc] h-[680px] max-w-[880px] relative rounded-[18px] shrink-0 w-[880px]" data-name="Dialog">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start justify-end max-w-[inherit] overflow-clip p-px relative rounded-[inherit] size-full">
        <Container11 />
        <Container43 />
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

function Container44() {
  return <div className="flex-[1472.305_0_0] h-0 min-w-px relative" data-name="Container" />;
}

function Text55() {
  return (
    <div className="bg-[#4f7bff] relative rounded-[16777200px] shrink-0 size-[20px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Bold',sans-serif] font-bold leading-[14.286px] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">C</p>
      </div>
    </div>
  );
}

function Text56() {
  return (
    <div className="relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">40,865</p>
      </div>
    </div>
  );
}

function Button30() {
  return (
    <div className="bg-[#f8fafc] drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] h-[36px] relative rounded-[20px] shrink-0" data-name="Button - 크레딧 충전">
      <div aria-hidden className="absolute border border-[#dfe6ed] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center px-[13px] py-px relative size-full">
        <Text55 />
        <Text56 />
      </div>
    </div>
  );
}

function Icon18() {
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

function Text57() {
  return <div className="absolute bg-[#2b7fff] left-[22px] rounded-[16777200px] size-[8px] top-[6px]" data-name="Text" />;
}

function Button31() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Button - 알림">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon18 />
        <Text57 />
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button30 />
        <Button31 />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0)] h-[56px] left-0 top-0" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[20px] relative size-full">
        <Container44 />
        <Container45 />
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

function Icon19() {
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

function Button32() {
  return (
    <div className="opacity-80 relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[16px] relative size-full">
          <LinkMargin />
          <Button32 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[72px] relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center px-[8px] relative size-full">
        <Container49 />
      </div>
    </div>
  );
}

function Icon20() {
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

function Text58() {
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
        <Icon20 />
        <Text58 />
      </div>
    </div>
  );
}

function Icon21() {
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

function Text59() {
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
        <Icon21 />
        <Text59 />
      </div>
    </div>
  );
}

function Icon22() {
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

function Text60() {
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
        <Icon22 />
        <Text60 />
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

function Container52() {
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

function Icon23() {
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

function Text61() {
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
        <Icon23 />
        <Text61 />
      </div>
    </div>
  );
}

function Icon24() {
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

function Text62() {
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
        <Icon24 />
        <Text62 />
      </div>
    </div>
  );
}

function Icon25() {
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

function Text63() {
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
        <Icon25 />
        <Text63 />
      </div>
    </div>
  );
}

function Icon26() {
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

function Text64() {
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
        <Icon26 />
        <Text64 />
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

function Container51() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Container52 />
        <List1 />
      </div>
    </div>
  );
}

function Container54() {
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

function Container55() {
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

function Button33() {
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
        <Container55 />
        <Button33 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Container54 />
        <List2 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[790.719_0_0] min-h-px relative w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start overflow-clip relative rounded-[inherit] size-full">
        <List />
        <Container51 />
        <Container53 />
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[30px]" data-name="Image (최유정)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1} />
    </div>
  );
}

function Text65() {
  return (
    <div className="bg-[#e0e7ff] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <Image1 />
      </div>
      <div aria-hidden className="absolute border border-[#c7d2fe] border-solid inset-0 pointer-events-none rounded-[16777200px]" />
    </div>
  );
}

function Container59() {
  return (
    <div className="h-[18.57px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] font-semibold leading-[18.571px] relative shrink-0 text-[#0a0a0a] text-[13px] whitespace-nowrap">최유정</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[15.711px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] font-normal leading-[15.714px] relative shrink-0 text-[#737373] text-[11px] whitespace-nowrap">cyj2406@gmail.com</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="flex-[159_0_0] min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container59 />
        <Container60 />
      </div>
    </div>
  );
}

function Icon27() {
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

function Container57() {
  return (
    <div className="relative shrink-0 w-[227px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] items-center relative size-full">
        <Text65 />
        <Container58 />
        <Icon27 />
      </div>
    </div>
  );
}

function Button34() {
  return (
    <div className="h-[50.281px] relative rounded-[18px] shrink-0 w-[243px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <Container57 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start p-[8px] relative size-full">
        <Button34 />
      </div>
    </div>
  );
}

function Button35() {
  return <div className="absolute h-[929px] left-[251px] top-0 w-[16px]" data-name="Button - 사이드바 열기/닫기" />;
}

function Container47() {
  return (
    <div className="bg-white h-[929px] relative shrink-0 w-[259px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container48 />
        <Container50 />
        <Container56 />
        <Button35 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[929px] left-0 top-0 w-[260px]" data-name="Container">
      <div aria-hidden className="absolute border-[#dfe6ed] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pr-px relative size-full">
        <Container47 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 size-[80px]" data-name="Container">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Button36() {
  return (
    <div className="absolute left-[1824px] top-[833px]" data-name="Button - 고객 지원 채팅">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <Container61 />
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#f8fafc] content-stretch flex flex-col items-start relative size-full" data-name="영상 워크스페이스">
      <Body />
      <Container46 />
      <Button36 />
    </div>
  );
}