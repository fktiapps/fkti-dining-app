// Test one explanation for the unfindable records: that some of them never named a
// business at all.
//
// A shard-2 agent noticed that several names it could not find are DISH or CATEGORY
// words rather than shop names — 「おかめそば」 is a dish, 「市場食堂」 is a category, and
// 「田中鮒」 returns nothing anywhere. If the 3-mile discovery sweep emitted category
// labels alongside real shop names, that is a different failure from "this shop
// exists but is unlisted", and only the first is safe to discard outright.
//
// The test is comparative, not absolute. Real shops are full of these words too —
// 蕎麦 神山 and 上野藪そば are genuine. What matters is whether names that resolve to
// NOTHING are built differently from names that resolve to a real address. Run the
// same classifier over both groups and compare; the located records are the control.
//
// RESULTS (124 records enriched, 2026-08-20)
//
// Hypothesis 1 — generic phrases — DOES NOT HOLD. 95% of not-found records carry a
// properly distinctive name, against 98% of the located control. Only 市場食堂 is
// purely generic. The shard-2 agent was right about the records it saw and wrong to
// generalise, and so was I for promoting it. Two percent is not an explanation.
//
// Hypothesis 2 — geographic clustering — HOLDS, strongly. The sweep did not fail
// evenly; it failed by neighbourhood:
//
//     代官山       7 records   0 found   100% miss
//     高田馬場     3            0        100%
//     神楽坂       3            0        100%
//     両国        10            2         80%
//     蔵前         5            1         80%
//     ...
//     神田神保町   5            5          0%
//     台東区上野   4            4          0%
//
// These are not obscure corners. 代官山, 高田馬場 and 神楽坂 are dense, well-documented
// dining districts — the sweep had every opportunity to find real shops there and
// returned twelve names that no search can match. Meanwhile it was perfectly
// accurate in 神保町 and 上野. So the defect is in how the sweep covered particular
// areas, not in the tranche as a whole, and the fix is to re-discover the bad
// clusters from a sourced method rather than to sift their records one by one.
//
// Hypothesis 3 — cross-city place names — DOES NOT HOLD, and runs backwards. 日本橋
// and 中央区 exist in Tokyo AND Osaka, so a sweep confusing them would explain some
// misses. It does not: 7% of not-found records claim an ambiguous place name against
// 20% of located ones. The trap is real in individual cases (a shard hit 「たか鳥 京橋店」
// in Osaka's Kyōbashi, and 魚新 matches a live Kuromon fishmonger at 大阪市中央区日本橋)
// but it is not what is driving the rate.
//
// Three explanations tested, one holds. Stop theorising and let the per-record
// verification say what these records are.
//
//   node scripts/analyse-notfound.mjs
import fs from 'node:fs';
import { readCity } from './lib-city.mjs';

// Words that describe a KIND of food or a KIND of establishment. A name made only
// of these has told you what sort of place it is and never said which one.
const GENERIC = [
  'そば','蕎麦','soba','うどん','饂飩','ラーメン','らーめん','中華そば','つけ麺','まぜそば',
  '食堂','定食','定食屋','屋台','横丁','市場','商店','酒場','居酒屋','喫茶','カフェ',
  '寿司','鮨','すし','天ぷら','天麩羅','とんかつ','カツ','丼','どんぶり','焼肉','焼鳥',
  'そば処','蕎麦処','専門店','本店','支店','店','個人店','老舗','手打ち','手打','立ち食い',
  'もんじゃ','お好み焼き','たこ焼き','うなぎ','鰻','かつ','餃子','カレー','和食','洋食',
  '豆腐','味噌','ちゃんこ','鍋','串','串焼き','刺身','海鮮','日本料理','精進料理','懐石',
];
// Structural noise, not part of a name
const NOISE = /[\s　（）()「」【】・･,，＆&\-—–ー'"’”]/g;

// Strip every generic word; whatever survives is the part that names THIS shop.
function distinctive(name) {
  let s = String(name).split(' (')[0].replace(/[（(][A-Za-z].*$/, '');
  s = s.replace(NOISE, '');
  for (const g of GENERIC.sort((a, b) => b.length - a.length)) s = s.split(g).join('');
  return s;
}

const places = readCity('tokyo').places;
const groups = { not_found: [], located: [] };
for (const r of places) {
  const st = r.existence?.status;
  if (st === 'not_found' || st === 'unresolved') groups.not_found.push(r);
  else if (st === 'confirmed' || st === 'probable' || st === 'substituted') groups.located.push(r);
}

const classify = rs => {
  const out = { total: rs.length, generic: 0, thin: 0, named: 0, examples: [] };
  for (const r of rs) {
    const d = distinctive(r.name);
    if (d.length === 0) { out.generic++; if (out.examples.length < 12) out.examples.push(`${r.name} -> (nothing)`); }
    else if (d.length === 1) { out.thin++; if (out.examples.length < 12) out.examples.push(`${r.name} -> 「${d}」`); }
    else out.named++;
  }
  return out;
};

const nf = classify(groups.not_found), lo = classify(groups.located);
const pct = (n, t) => t ? Math.round(n / t * 100) + '%' : '—';

console.log('Does the name contain anything beyond dish and category words?\n');
console.log('                     NOT FOUND        LOCATED (control)');
console.log(`  records              ${String(nf.total).padStart(4)}             ${String(lo.total).padStart(4)}`);
console.log(`  purely generic       ${String(nf.generic).padStart(4)} ${pct(nf.generic, nf.total).padStart(5)}      ${String(lo.generic).padStart(4)} ${pct(lo.generic, lo.total).padStart(5)}`);
console.log(`  one char left        ${String(nf.thin).padStart(4)} ${pct(nf.thin, nf.total).padStart(5)}      ${String(lo.thin).padStart(4)} ${pct(lo.thin, lo.total).padStart(5)}`);
console.log(`  properly named       ${String(nf.named).padStart(4)} ${pct(nf.named, nf.total).padStart(5)}      ${String(lo.named).padStart(4)} ${pct(lo.named, lo.total).padStart(5)}`);

console.log('\nNOT FOUND, nothing distinctive in the name:');
nf.examples.forEach(e => console.log('  ' + e));
console.log('\nLOCATED, nothing distinctive in the name (these are the false positives):');
lo.examples.forEach(e => console.log('  ' + e));

// Second hypothesis: the misses cluster by neighbourhood, i.e. one stretch of the
// sweep went bad rather than the whole tranche being unreliable.
// The record's own neighborhood is no use here: enrichment overwrites it, and for a
// not-found record it gets replaced with the "Unverified" explanation. The shard
// inputs still hold what the sweep originally claimed, which is the thing being
// tested — did one stretch of the sweep go bad?
const ORIG_HOOD = new Map();
for (const f of fs.readdirSync('data/_tokyo_enrich_shards').filter(f => /^s\d+\.json$/.test(f)))
  for (const r of JSON.parse(fs.readFileSync(`data/_tokyo_enrich_shards/${f}`, 'utf8')))
    ORIG_HOOD.set(r.id, r.neighborhood || '(none)');
const hood = r => String(ORIG_HOOD.get(r.id) || r.neighborhood || '(none)').split(/[\/·・(]/)[0].trim().slice(0, 22) || '(none)';
const byHood = {};
for (const [k, rs] of Object.entries(groups))
  for (const r of rs) {
    const h = hood(r);
    byHood[h] = byHood[h] || { not_found: 0, located: 0 };
    byHood[h][k]++;
  }
const rows = Object.entries(byHood)
  .map(([h, c]) => ({ h, ...c, n: c.not_found + c.located }))
  .filter(r => r.n >= 3)
  .sort((a, b) => (b.not_found / b.n) - (a.not_found / a.n));
console.log('\nBy neighbourhood (3+ records), worst hit rate first:');
console.log('  neighbourhood            n   found   missing');
for (const r of rows)
  console.log(`  ${r.h.padEnd(24)}${String(r.n).padStart(2)}  ${String(r.located).padStart(5)}  ${String(r.not_found).padStart(8)}  ${Math.round(r.not_found / r.n * 100)}%`);

fs.writeFileSync('data/_notfound_analysis.json', JSON.stringify({
  not_found: nf, located: lo,
  generic_ids: groups.not_found.filter(r => distinctive(r.name).length === 0).map(r => ({ id: r.id, name: r.name })),
}, null, 1));
console.log('\nreport -> data/_notfound_analysis.json');
