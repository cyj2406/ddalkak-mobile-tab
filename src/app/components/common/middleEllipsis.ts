/**
 * 긴 링크·파일 이름을 가운데에서 줄인다 — 끝에서 "…"로 자르면 URL 의 끝 경로·파일 이름의 구분되는 부분·확장자가 사라져
 * 무엇인지 알 수 없다. 얼마나 줄일지는 글자 수가 아니라 실제로 그려지는 폭으로 정한다(`fits` — MiddleEllipsisText 가 넘긴다).
 *
 * 파일 이름은 원본 그대로 다룬다 — 맥에서 온 자모 분리(NFD) 이름도 정규화하지 않고, 글자(grapheme) 단위로 잘라
 * 한 음절의 자모가 중간에 갈라지지 않게 한다.
 */

/** 잘린 뒤 남길 글자 중 뒤쪽 비중 — "(붙임10)(2026-2)…" 같은 공통 접두사보다 구분되는 뒷부분·확장자를 더 남긴다 */
const TAIL_SHARE = 0.65;

const segmenter = typeof Intl !== "undefined" && "Segmenter" in Intl ? new Intl.Segmenter("ko", { granularity: "grapheme" }) : null;
const graphemes = (s: string): string[] => (segmenter ? Array.from(segmenter.segment(s), (x) => x.segment) : Array.from(s));

/** fits 를 만족하는 가장 긴 "앞…뒤" — 뒤쪽을 TAIL_SHARE 만큼 더 남긴다. 한 글자도 못 넣으면 "…" */
export function middleEllipsis(s: string, fits: (candidate: string) => boolean): string {
  if (fits(s)) return s;
  const g = graphemes(s);
  const build = (n: number) => {
    const tail = Math.max(1, Math.round(n * TAIL_SHARE));
    const head = Math.max(0, n - tail);
    return `${g.slice(0, head).join("")}…${g.slice(g.length - tail).join("")}`;
  };
  let lo = 1, hi = g.length - 1, best = "…";
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    const c = build(mid);
    if (fits(c)) { best = c; lo = mid + 1; } else hi = mid - 1;
  }
  return best;
}

export const isUrlLike = (raw: string) => /^https?:\/\/|^www\./i.test(raw);

/**
 * URL → "도메인/…/끝 경로". 스킴(https://)·www. 는 떼고, 그래도 넘치면 쿼리를 버리고 가운데 경로를 "…"로 접는다.
 *   https://www.example.com/campaign/2026/autumn/page?utm=x → example.com/…/page
 * URL 이 아니면(파일 이름 등) 가운데 말줄임.
 */
export function compactUrl(raw: string, fits: (candidate: string) => boolean): string {
  if (!isUrlLike(raw)) return middleEllipsis(raw, fits);
  // URL 객체는 한글 도메인·경로를 퓨니코드·%인코딩으로 바꿔 버려 사람이 붙인 모양 그대로 직접 나눈다
  const rest = raw.replace(/^https?:\/\//i, "").replace(/^www\./i, "");
  const cut = rest.search(/[/?#]/);
  const host = cut < 0 ? rest : rest.slice(0, cut);
  const tail = cut < 0 ? "" : rest.slice(cut);
  let decoded = tail;
  try { decoded = decodeURI(tail); } catch { /* 잘못된 %인코딩이면 그대로 */ }
  const full = `${host}${decoded === "/" ? "" : decoded}`;
  if (fits(full)) return full;
  const path = decoded.split(/[?#]/)[0];
  const segs = path.split("/").filter(Boolean);
  const last = segs[segs.length - 1];
  if (!last) return middleEllipsis(full, fits);
  const sep = segs.length > 1 ? "/…/" : "/";
  if (fits(`${host}${sep}${last}`)) return `${host}${sep}${last}`;
  // 끝 경로까지 길면 도메인은 두고 끝 경로를 가운데에서 줄인다 — 그래도 안 되면 전체를 가운데 말줄임
  const shortLast = middleEllipsis(last, (c) => fits(`${host}${sep}${c}`));
  return shortLast !== "…" ? `${host}${sep}${shortLast}` : middleEllipsis(`${host}${sep}${last}`, fits);
}
