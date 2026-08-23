// Generates the backlog discovery+verify workflow: seeds the 12 rate-limited
// candidates, re-discovers to recover the ~57 over-cap tail (+ new), excludes
// everything already in the data and everything already rejected.
import fs from 'fs';
const d = JSON.parse(fs.readFileSync('data/kyoto.json', 'utf8'));

// strip the "(English)" / readings to get the core Japanese name for dedup
const existingNames = d.places.map(p => p.name);

const REJECTED = ['つじい','野口商店','喫茶やまぐち','おでんと釜飯 ムロ','五','手打そば処みな川','コーヒーハウス マキ','喫茶翡翠','喫茶 ゾウ','あらた','モッさんのべた焼 大宮店','湯浅','赤垣屋','にこみ 鈴や','とんかつ一番','ポパイ','ランチとコーヒーの店 かも','レストラン西加茂','まつもと食堂','更科聖護院支店','篠田屋','御旅飯店','揚子江','ぎょうざ処 高辻 亮昌 本店'];

const SEEDS = [
  { name_ja: '自家製麺 天狗', area: '京都', cuisine: 'ラーメン/自家製麺' },
  { name_ja: '麺処 美松', area: '京都', cuisine: 'ラーメン' },
  { name_ja: '京・北野上七軒 ふた葉', area: '北野/上七軒', cuisine: 'うどん/そば' },
  { name_ja: '本格手打うどん 大河', area: '京都', cuisine: 'うどん' },
  { name_ja: 'とが乃茶屋', area: '京都', cuisine: '甘味/茶屋' },
  { name_ja: '餃子専門店 福吉', area: '京都', cuisine: '餃子' },
  { name_ja: '六条新町 招福亭', area: '六条新町/下京区', cuisine: '食堂/そば' },
  { name_ja: '自家製麺 新渡月', area: '京都', cuisine: 'ラーメン/自家製麺' },
  { name_ja: 'いのうえの餃子', area: '京都', cuisine: '餃子' },
  { name_ja: 'ぎょうざの店 龍園', area: '京都', cuisine: '餃子' },
  { name_ja: '餃子屋 かず', area: '京都', cuisine: '餃子' },
  { name_ja: 'たわらや', area: '京都', cuisine: 'うどん' },
];

const ANGLES = [
  '京都 蕎麦 個人店 老舗 カウンター 食べログ 左京区',
  '京都 純喫茶 昭和 レトロ 喫茶店 老舗 個人経営 食べログ',
  '京都 お好み焼き 鉄板 家族経営 狭い 地元 食べログ',
  '京都 おでん 老舗 カウンター 個人店 食べログ',
  '京都 とんかつ 定食 個人店 老舗 食べログ',
  '京都 洋食 老舗 家族経営 小さい 食べログ',
  '京都 大衆食堂 老舗 個人 北区 上京区 食べログ',
  '京都 中華そば 町中華 老舗 個人店 食べログ',
  '京都 餃子 老舗 個人店 地元 食べログ',
  '京都 うどん 手打ち 老舗 個人店 食べログ',
  '京都 おばんざい 家庭料理 小さい 個人 食べログ',
  '京都 天ぷら 老舗 カウンター 個人店 食べログ',
  '京都 喫茶 モーニング 昭和 個人 東山区 伏見区 食べログ',
  '京都 焼き鳥 個人店 老舗 カウンター 地元 食べログ',
  '京都 定食屋 学生 安い 個人 出町 左京区 食べログ',
  '京都 寿司 老舗 個人 カウンター 地元 食べログ',
  '京都 カレー 喫茶 老舗 個人 食べログ',
  '京都 居酒屋 老舗 カウンター 個人 地元 食べログ',
  // deeper/new angles to surface the tail + fresh areas
  '京都 自家製麺 ラーメン 個人店 行列 食べログ',
  '京都 伏見 個人 食堂 老舗 地元 食べログ',
  '京都 西陣 北野 老舗 個人 食堂 そば 食べログ',
  '京都 出町柳 銀閣寺 学生 食堂 個人 食べログ',
  '京都 甘味処 老舗 個人 和菓子 茶屋 食べログ',
  '京都 嵐山 嵯峨 個人 蕎麦 湯豆腐 老舗 食べログ',
];

const SCHEMA_D = {
  type: 'object', additionalProperties: false,
  properties: { candidates: { type: 'array', items: { type: 'object', additionalProperties: false,
    properties: { name_ja: { type: 'string' }, area: { type: 'string' }, cuisine: { type: 'string' }, tabelog_url: { type: 'string' } },
    required: ['name_ja', 'area', 'cuisine', 'tabelog_url'] } } },
  required: ['candidates'],
};
const SCHEMA_V = {
  type: 'object', additionalProperties: false,
  properties: {
    found: { type: 'boolean' }, closed_or_on_hold: { type: 'boolean' },
    name_ja: { type: 'string' }, name_en: { type: 'string' },
    tabelog_url: { type: 'string' }, official_url: { type: 'string' },
    cuisine: { type: 'string' }, neighborhood: { type: 'string' }, address_ja: { type: 'string' },
    lat: { type: ['number', 'null'] }, lng: { type: ['number', 'null'] }, geocode_note: { type: 'string' },
    seats: { type: ['integer', 'null'] }, seats_text: { type: 'string' },
    hours_week: { type: 'array', items: { type: 'string' } }, hours_raw: { type: 'string' }, closed_days: { type: 'string' },
    hours_status: { type: 'string', enum: ['regular', 'irregular'] }, price_range: { type: 'string' },
    review_count: { type: ['integer', 'null'] }, review_language_note: { type: 'string' },
    ownership: { type: 'string', enum: ['independent_family', 'independent_solo', 'chain_or_brand', 'unknown'] },
    ownership_note: { type: 'string' }, gf_detail: { type: 'string' },
    vegan_status: { type: 'string', enum: ['no', 'ask', 'options', 'limited', 'full'] }, vegan_detail: { type: 'string' },
    chef_background: { type: 'string' }, chef_confidence: { type: 'string', enum: ['high', 'medium', 'low', 'none'] }, chef_sources: { type: 'array', items: { type: 'string' } },
    cultural_comfort_level: { type: 'string', enum: ['guide_only', 'japanese', 'konnichiwa', 'english'] }, cultural_comfort_note: { type: 'string' },
    meets_independent: { type: 'boolean' }, meets_under30: { type: 'string', enum: ['yes', 'no', 'unsure'] },
    overall_pass: { type: 'boolean' }, caveats: { type: 'string' }, sources: { type: 'array', items: { type: 'string' } },
  },
  required: ['found', 'name_ja', 'overall_pass', 'ownership', 'meets_under30'],
};

const script = `export const meta = {
  name: 'kyoto-mom-pop-backlog',
  description: 'Process the Mom & Pop backlog: seed 12 rate-limited candidates + re-discover the over-cap tail, verify + geocode',
  phases: [{ title: 'Discover' }, { title: 'Verify' }],
}
const EXCLUDE = ${JSON.stringify([...existingNames, ...REJECTED])};
const SEEDS = ${JSON.stringify(SEEDS)};
const ANGLES = ${JSON.stringify(ANGLES)};
const DISCOVERY_SCHEMA = ${JSON.stringify(SCHEMA_D)};
const VERIFY_SCHEMA = ${JSON.stringify(SCHEMA_V)};

const norm = s => (s || '').replace(/[\\s　・（）()「」、,.。\\-本店店]/g, '').toLowerCase();
const EXSET = new Set(EXCLUDE.map(norm));

const discPrompt = q => \`Find independent, small, locally-frequented Kyoto restaurants for a curated dining app.
Search the web (WebSearch AND WebFetch curated list pages / Tabelog) for: \${q}
Return up to 8 candidate shops that look INDEPENDENT (single location, family or solo run — NOT chains, NOT multi-branch brands, NOT noren-wake networks) and SMALL/local. For each give name_ja (exact Japanese shop name), area (ward + nearest station/landmark), cuisine, and tabelog_url (the tabelog.com detail URL if found, else ""). Only real shops you saw in results.\`;

const verifyPrompt = c => \`Rigorously verify ONE Kyoto restaurant for publication. NEVER invent — every fact from a page you fetch (WebSearch then WebFetch; geocode via GSI). Return null/"unsure" when unconfirmable.
TARGET: \${c.name_ja} | area: \${c.area || '?'} | cuisine: \${c.cuisine || '?'}\${c.tabelog_url ? ' | Tabelog: ' + c.tabelog_url : ''}
1. Find & FETCH its Tabelog page. Disambiguate by area. If 掲載保留 (on hold) or 閉店 (closed): closed_or_on_hold=true, overall_pass=false.
2. Extract verbatim: 店名, ジャンル, 住所(address_ja), 営業時間, 定休日, 席数(seats int; null+seats_text if absent), 予算, 口コミ件数(review_count), 評価.
3. hours_week: 7 elements Mon..Sun, each "closed" or "HH:MM-HH:MM" (comma for multiple). hours_raw + closed_days. hours_status "irregular" if varies.
4. ownership: independent_family/independent_solo/chain_or_brand/unknown. meets_independent only if single-location independent.
5. meets_under30: "yes" if seats<30, "no" if >=30, "unsure" if unlisted.
6. review_language_note: proxy estimate (say it's an estimate).
7. GEOCODE: fetch https://msearch.gsi.go.jp/address-search/AddressSearch?q=<URL-ENCODED address_ja>; first feature geometry.coordinates=[lng,lat]; retry chō-level if empty. Kyoto box lat 34.85-35.15 lng 135.60-135.86 else null+geocode_note.
8. DIETARY honest: gf_detail (wheat/soy/dashi-heavy → not celiac-safe). vegan_status + vegan_detail.
9. chef_background + chef_sources + chef_confidence (none if undocumented).
10. cultural_comfort_level + one-sentence note for a foreign student.
overall_pass = found && !closed_or_on_hold && meets_independent && meets_under30 != "no". No Google Place IDs. name_en = romanization.\`;

phase('Discover')
const disc = await parallel(ANGLES.map(q => () =>
  agent(discPrompt(q), { label: 'discover', phase: 'Discover', schema: DISCOVERY_SCHEMA }).then(r => (r && r.candidates) || [])))
const seen = new Set(EXSET)
const queue = []
for (const c of SEEDS) { const k = norm(c.name_ja); if (!seen.has(k)) { seen.add(k); queue.push(c) } }
for (const list of disc) for (const c of (list || [])) { const k = norm(c.name_ja); if (!k || seen.has(k)) continue; seen.add(k); queue.push(c) }
log('backlog: ' + queue.length + ' unique candidates after exclusion (cap 100)')
const candidates = queue.slice(0, 100)

phase('Verify')
const verified = (await parallel(candidates.map(c => () =>
  agent(verifyPrompt(c), { label: 'verify:' + c.name_ja, phase: 'Verify', schema: VERIFY_SCHEMA }).then(r => r ? { ...r, _hint: c } : null).catch(() => null)))).filter(Boolean)
const passed = verified.filter(r => r.overall_pass)
log('verified ' + verified.length + '; passed ' + passed.length)
return { counts: { candidates: candidates.length, verified: verified.length, passed: passed.length }, passed,
  rejected: verified.filter(r => !r.overall_pass).map(r => ({ name_ja: r.name_ja, closed: r.closed_or_on_hold, independent: r.meets_independent, under30: r.meets_under30, reason: r.caveats || '' })) }
`;

fs.writeFileSync('scripts/backlog-workflow.js', script);
console.log('wrote scripts/backlog-workflow.js | exclude:', existingNames.length + REJECTED.length, '| seeds:', SEEDS.length, '| angles:', ANGLES.length, '|', script.length, 'bytes');
