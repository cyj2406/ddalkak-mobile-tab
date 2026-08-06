const f = { fontFamily: "'Pretendard Variable', sans-serif" };

export interface CreditBadgeProps {
  /** 표시할 크레딧 잔액 */
  amount: number;
  /** 누르면 크레딧 모달/시트를 연다. 없으면 표시 전용이 된다. */
  onClick?: () => void;
}

/**
 * 크레딧 배지 — 파란 원 안의 C + 잔액.
 *
 * 원래 TopBar 안에 인라인으로만 있던 마크업이다. 서식 채우기 헤더에서도 같은 배지가
 * 필요해졌는데, FormFillDesktop 이 App.tsx 를 import 하면 순환 참조가 되므로
 * 공용 모듈로 뺐다. 두 곳이 이 파일 하나를 쓰므로 스타일이 갈라지지 않는다.
 */
export default function CreditBadge({ amount, onClick }: CreditBadgeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-[#f8fafc] h-9 rounded-[20px] border border-[#dfe6ed] flex items-center gap-2 px-3 shrink-0"
      style={{ boxShadow: "0px 1px 1.5px rgba(0,0,0,0.1)", whiteSpace: "nowrap", cursor: onClick ? "pointer" : "default" }}
    >
      <div className="bg-[#4f7bff] rounded-full size-5 flex items-center justify-center shrink-0">
        <span style={{ ...f, fontWeight: 700, fontSize: 10, color: "white" }}>C</span>
      </div>
      <span style={{ ...f, fontWeight: 600, fontSize: 14, color: "#0a0a0a", whiteSpace: "nowrap" }}>
        {amount.toLocaleString()}
      </span>
    </button>
  );
}
