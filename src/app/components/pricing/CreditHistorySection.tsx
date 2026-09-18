import { useMemo, useState } from "react";

import { ScrollableChips } from "@/app/components/common/ScrollableChips";
import { color, f, radius, shadow, typography } from "@/app/styleTokens";

/**
 * 크레딧 내역 — 예전 App.tsx의 CreditHistoryScreen(별도 화면)에 있던 목데이터·필터
 * 로직을 그대로 옮겨 왔다(기능·데이터 삭제 없음). "요금제 및 크레딧" 페이지의 크레딧
 * 탭 안에 바로 보여줘 스크롤 한 번으로 잔액과 내역을 함께 보게 하고, 별도 화면으로의
 * 중복 진입점("크레딧 사용 내역 보기 →")은 없앤다.
 *
 * 실제 지원하는 구분만 필터로 둔다 — 이 데이터가 구분하는 건 "사용"(작업 처리로 차감)과
 * "지급·충전"(충전/환불처럼 잔액이 느는 것)뿐이라, 없는 "복원·회수" 같은 유형을
 * 지어내지 않는다. 기간 필터도 실제 내역에 있는 연·월만 선택지로 만든다(가짜 범위 없음).
 */

const USAGE_TYPES = ["이미지", "랜딩페이지", "동영상", "프레젠테이션", "오디오", "문서", "서식"] as const;
const BALANCE_TYPES = ["충전", "환불"] as const;
type CreditType = (typeof USAGE_TYPES)[number] | (typeof BALANCE_TYPES)[number];

interface CreditHistoryItem {
  date: string;
  type: CreditType;
  details: string;
  change: number;
  balance: number;
}

/**
 * [예시] 크레딧 증감 내역 — 각 행의 balance 는 그 시점의 스냅샷(예시 데이터)이다.
 * 공유 잔액(useCreditBalance)이 이후 바뀌어도 이 과거 내역까지 다시 맞추지 않는다.
 */
const CREDIT_HISTORY_DATA: CreditHistoryItem[] = [
  { date: "2026. 06. 22. 오전 10:02:11", type: "환불", details: "동영상 생성 실패 크레딧 환불", change: 1780, balance: 11974710 },
  { date: "2026. 06. 22. 오전 9:49:06", type: "이미지", details: "월급 빼고 다 오르는 물가 카드뉴스", change: -69, balance: 11972930 },
  { date: "2026. 06. 15. 오후 5:13:59", type: "프레젠테이션", details: "2026 금융 트렌드 PPT 생성", change: -185, balance: 11972999 },
  { date: "2026. 06. 15. 오후 5:13:36", type: "문서", details: "졸업논문 템플릿 작성 안내", change: -74, balance: 11973184 },
  { date: "2026. 06. 15. 오후 5:13:33", type: "동영상", details: "브랜드 홍보 숏폼 영상 생성", change: -106, balance: 11973258 },
  { date: "2026. 06. 15. 오후 5:13:29", type: "이미지", details: "이미지 템플릿 편집 정보", change: -224, balance: 11973364 },
  { date: "2026. 06. 15. 오후 5:12:58", type: "랜딩페이지", details: "딸깍넷 랜딩페이지 생성", change: -122, balance: 11973588 },
  { date: "2026. 06. 15. 오후 5:12:47", type: "서식", details: "세금계산서 템플릿 작성 내용 문의", change: -98, balance: 11973710 },
  { date: "2026. 06. 15. 오후 5:12:40", type: "오디오", details: "브랜드 BGM 30s 생성", change: -119, balance: 11973808 },
  { date: "2026. 06. 15. 오후 5:12:19", type: "충전", details: "크레딧 카드 충전 (VVIP 패키지)", change: 100000, balance: 11973927 },
  { date: "2026. 06. 15. 오후 5:12:14", type: "서식", details: "내용증명서 템플릿 작성 문의", change: -67, balance: 11973997 },
];

const ALL_FILTER = "전체";
const USAGE_FILTER = "사용";
const BALANCE_FILTER = "지급·충전";
const CREDIT_FILTERS = [ALL_FILTER, USAGE_FILTER, BALANCE_FILTER];

/** "2026. 06. 22. 오전 10:02:11" → "2026. 06" — 실제 데이터에 있는 연·월만 기간 필터 선택지로 쓴다. */
function monthKeyOf(dateLabel: string): string {
  const m = dateLabel.match(/^(\d{4})\.\s*(\d{2})/);
  return m ? `${m[1]}. ${m[2]}` : dateLabel;
}
function monthLabelOf(key: string): string {
  const m = key.match(/^(\d{4})\.\s*(\d{2})/);
  return m ? `${m[1]}년 ${Number(m[2])}월` : key;
}

export function CreditHistorySection() {
  const [typeFilter, setTypeFilter] = useState(0);
  const [periodFilter, setPeriodFilter] = useState("all");

  const periods = useMemo(() => Array.from(new Set(CREDIT_HISTORY_DATA.map((it) => monthKeyOf(it.date)))), []);

  const filtered = CREDIT_HISTORY_DATA.filter((it) => {
    const label = CREDIT_FILTERS[typeFilter];
    const typeOk = label === ALL_FILTER ? true : label === USAGE_FILTER ? it.change < 0 : it.change > 0;
    const periodOk = periodFilter === "all" || monthKeyOf(it.date) === periodFilter;
    return typeOk && periodOk;
  });

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        <p style={typography.sectionTitle}>크레딧 내역</p>
        <span style={{ ...f, fontWeight: 700, fontSize: 11, color: color.text.muted, whiteSpace: "nowrap" }}>총 {filtered.length}건</span>
      </div>

      <div className="flex items-center justify-between gap-3 flex-wrap">
        <ScrollableChips items={CREDIT_FILTERS} activeIndex={typeFilter} onChange={setTypeFilter} variant="outline" edgeClassName="" className="min-w-0" />
        {periods.length > 1 && (
          <select
            aria-label="기간 필터"
            value={periodFilter}
            onChange={(e) => setPeriodFilter(e.target.value)}
            className="shrink-0 rounded-full outline-none cursor-pointer"
            style={{ ...f, fontWeight: 600, fontSize: 12.5, color: color.text.secondary, border: `1px solid ${color.border.default}`, padding: "6px 12px", background: "white" }}
          >
            <option value="all">전체 기간</option>
            {periods.map((p) => (
              <option key={p} value={p}>{monthLabelOf(p)}</option>
            ))}
          </select>
        )}
      </div>

      <div
        className="flex flex-col bg-white overflow-hidden"
        style={{ borderRadius: radius.cardEmphasis, border: `1px solid ${color.border.default}`, boxShadow: shadow.cardEmphasis }}
      >
        {filtered.length === 0 ? (
          <p className="px-5 py-6 text-center" style={{ ...f, fontWeight: 500, fontSize: 13.5, color: color.text.muted }}>
            조건에 맞는 내역이 없습니다.
          </p>
        ) : (
          filtered.map((item, i) => {
            const positive = item.change > 0;
            return (
              <div
                key={`${item.date}-${item.details}`}
                className="flex items-start justify-between gap-4 px-4 py-4 md:px-5"
                style={{ borderBottom: i < filtered.length - 1 ? "1px solid #f1f5f9" : "none" }}
              >
                {/* 왼쪽: 항목명(가장 진한 위계) + 유형·일시(보조) */}
                <div className="min-w-0">
                  <p className="truncate" style={{ ...f, fontWeight: 600, fontSize: 14, color: color.text.primary, letterSpacing: "-0.35px" }}>
                    {item.details}
                  </p>
                  <p className="truncate" style={{ ...f, fontWeight: 400, fontSize: 12, color: color.text.muted, marginTop: 3 }}>
                    {item.type} · {item.date}
                  </p>
                </div>
                {/* 오른쪽: 변동 크레딧(부호+색으로 이중 구분) + 변동 후 잔액 */}
                <div className="text-right shrink-0">
                  <p style={{ ...f, fontWeight: 800, fontSize: 15, color: positive ? color.brand : color.text.primary, letterSpacing: "-0.4px", whiteSpace: "nowrap" }}>
                    {positive ? "+" : ""}{item.change.toLocaleString()} 크레딧
                  </p>
                  <p style={{ ...f, fontWeight: 500, fontSize: 12, color: color.text.muted, marginTop: 3, whiteSpace: "nowrap" }}>
                    변동 후 잔액 {item.balance.toLocaleString()}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default CreditHistorySection;
