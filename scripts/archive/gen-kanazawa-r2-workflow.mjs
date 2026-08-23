// Round-2 Kanazawa expansion: loop-until-dry discovery with NEW angles +
// exclusion of everything already in data/kanazawa.json, then verify all fresh
// candidates. Output (kept[]) -> data/_kz_r2.json -> build-kanazawa-merge.mjs.
import fs from 'fs';

const city = JSON.parse(fs.readFileSync('data/kanazawa.json', 'utf8'));
// JP display name = portion before the " (English)" parenthetical.
const jpName = n => n.replace(/\s*[（(][^）)]*[）)]\s*$/, '').trim();
const EXCLUDE = [...new Set(city.places.map(p => jpName(p.name)).filter(Boolean))];

// Round-2 angles: under-covered sub-neighborhoods + Kanazawa specialties
// (curry, Hanton rice), hidden-gem framings, cuisine gaps not hit in round 1.
const ANGLES = [
  '金沢 香林坊 せせらぎ通り 個人店 食堂 食べログ',
  '金沢 にし茶屋街 寺町 蕎麦 甘味 個人店 食べログ',
  '金沢 主計町茶屋街 小料理 割烹 個人店 食べログ',
  '金沢 横安江町商店街 老舗 食堂 食べログ',
  '金沢 武蔵 むさし 定食 食堂 個人店 食べログ',
  '金沢 寺町台 桜橋 蕎麦 カフェ 個人店 食べログ',
  '金沢 隠れた名店 常連 穴場 地元 個人店 食べログ',
  '金沢カレー 老舗 ハントンライス 洋食 個人店 食べログ',
  '金沢 うなぎ どじょう 蒲焼 老舗 個人店 食べログ',
  '金沢 上生菓子 茶寮 甘味処 老舗 個人 食べログ',
  '金沢 自然食 オーガニック 玄米 マクロビ カフェ 食べログ',
  '金沢 ビストロ フレンチ イタリアン 個人店 食べログ',
  '金沢 立ち飲み 角打ち せんべろ 居酒屋 食べログ',
  '金沢 餃子 町中華 ホルモン 個人店 食べログ',
  '金沢 のどぐろ 寿司 海鮮 個人店 老舗 食べログ',
  '金沢 喫茶 自家焙煎 珈琲 老舗 純喫茶 食べログ',
  '金沢 おでん 居酒屋 片町 木倉町 個人店 食べログ',
  '金沢 パン ベーカリー サンドイッチ 個人店 食べログ',
  'Kanazawa hidden gem local restaurant Korinbo Katamachi tabelog',
  'Kanazawa curry Hanton rice yoshoku old shop local',
  'Kanazawa vegan vegetarian gluten free cafe HappyCow Korinbo',
  '金沢 加賀野菜 おばんざい 郷土料理 個人店 食べログ',
];

const DISCOVERY_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: { candidates: { type: 'array', items: { type: 'object', additionalProperties: false,
    properties: { name_ja: { type: 'string' }, area: { type: 'string' }, cuisine: { type: 'string' }, tabelog_url: { type: 'string' } },
    required: ['name_ja', 'area', 'cuisine', 'tabelog_url'] } } },
  required: ['candidates'],
};

const VERIFY_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    found: { type: 'boolean' }, is_restaurant: { type: 'boolean' }, closed_or_on_hold: { type: 'boolean' },
    name_ja: { type: 'string' }, name_en: { type: 'string' },
    tabelog_url: { type: 'string' }, official_url: { type: 'string' },
    category: { type: 'string', enum: ['BOTH', 'GF', 'VEGAN', 'SHOJIN', 'OMNI', 'MOM_AND_POP'] },
    cuisine: { type: 'string' }, neighborhood: { type: 'string' }, address_ja: { type: 'string' },
    lat: { type: ['number', 'null'] }, lng: { type: ['number', 'null'] }, geocode_note: { type: 'string' },
    seats: { type: ['integer', 'null'] }, seats_text: { type: 'string' },
    gf_confidence: { type: 'string', enum: ['dedicated', 'high', 'options', 'ask', 'no'] }, gf_detail: { type: 'string' },
    vegan_status: { type: 'string', enum: ['full', 'options', 'limited', 'ask', 'no'] }, vegan_detail: { type: 'string' },
    hours_week: { type: 'array', items: { type: 'string' } }, hours_raw: { type: 'string' }, closed_days: { type: 'string' }, hours_status: { type: 'string', enum: ['regular', 'irregular'] },
    reservation_required: { type: 'boolean' }, cash_only: { type: 'boolean' },
    independent: { type: 'boolean' }, under30: { type: 'string', enum: ['yes', 'no', 'unsure'] },
    cultural_comfort_level: { type: 'string', enum: ['guide_only', 'japanese', 'konnichiwa', 'english'] }, cultural_comfort_note: { type: 'string' },
    bio: { type: 'object', additionalProperties: false, properties: {
      chef_name: { type: ['string', 'null'] }, roles: { type: 'array', items: { type: 'string' } }, origin: { type: ['string', 'null'] },
      background: { type: ['string', 'null'] }, philosophy: { type: ['string', 'null'] }, specialty: { type: ['string', 'null'] },
      anecdotes: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text', 'source'] } },
      confidence: { type: 'string', enum: ['high', 'medium', 'low', 'none'] }, sources: { type: 'array', items: { type: 'string' } },
    }, required: ['confidence', 'roles', 'anecdotes', 'sources'] },
    safety: { type: 'object', additionalProperties: false, properties: {
      dedicated_fryer: { type: ['boolean', 'null'] },
      gf_cross_contamination: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
      soy_sauce_wheat: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
      vegan_cross_contact: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
      staff_allergy_handling: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
      positives: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
      confidence: { type: 'string', enum: ['high', 'medium', 'low', 'none'] },
    }, required: ['confidence', 'gf_cross_contamination', 'soy_sauce_wheat', 'vegan_cross_contact', 'staff_allergy_handling', 'positives'] },
    caveats: { type: 'string' }, sources: { type: 'array', items: { type: 'string' } },
  },
  required: ['found', 'is_restaurant', 'name_ja', 'category', 'vegan_status', 'gf_confidence', 'bio', 'safety'],
};

const script = `export const meta = {
  name: 'kanazawa-r2',
  description: 'Round-2 Kanazawa expansion: loop-until-dry discovery (excluding existing places) + verify',
  phases: [{ title: 'Discover' }, { title: 'Verify' }],
}
const ANGLES = ${JSON.stringify(ANGLES)};
const EXCLUDE = ${JSON.stringify(EXCLUDE)};
const DISCOVERY_SCHEMA = ${JSON.stringify(DISCOVERY_SCHEMA)};
const VERIFY_SCHEMA = ${JSON.stringify(VERIFY_SCHEMA)};
const norm = s => (s || '').replace(/[\\s　・（）()「」、,.。\\-本店店]/g, '').toLowerCase();

const excludeNorms = new Set(EXCLUDE.map(norm));
const excludeList = EXCLUDE.join('、');

const discPrompt = (q, avoid) => \`Find real restaurants in CENTRAL KANAZAWA, Japan, within about 2 miles of Omichō Market (近江町市場) — Kanazawa Station, Kōrinbō, Katamachi, Owarichō, Higashi/Nishi Chaya, Kazuemachi, Kenroku-en, Nagamachi, Teramachi. We want a mix of: (1) vegan / vegetarian / gluten-free-friendly spots, AND (2) small independent local "mom & pop" places (family/solo-run, small, locally loved — Omichō counters, Kanazawa oden, Kaga/Jibuni cuisine, Kanazawa curry, Hanton rice, sushi, soba, kissaten, yōshoku).
Search the web for: \${q}
IMPORTANT: we ALREADY HAVE the following places — do NOT return any of these or obvious branches of them:
\${avoid}
Return up to 8 NEW candidates not in that list. For each: name_ja (exact Japanese name), area (district + nearest landmark/station), cuisine, tabelog_url (tabelog.com detail URL if found, else ""). Only real shops you saw in results; prefer genuinely local/independent ones near Omichō.\`;

const verifyPrompt = c => \`Verify ONE Kanazawa restaurant for a curated dining app and produce its full record. NEVER invent — every fact from a page you fetch (WebSearch then WebFetch: Tabelog, official site, HappyCow). Return found:false if you cannot confirm it exists.
TARGET: \${c.name_ja} | area: \${c.area || '?'} | cuisine: \${c.cuisine || '?'}\${c.tabelog_url ? ' | Tabelog: ' + c.tabelog_url : ''}

A. IDENTITY: confirm it's a real, currently-operating CENTRAL KANAZAWA eatery. is_restaurant=false if it's not a place you go to eat (cooking class, shop, event). If 掲載保留/閉店 → closed_or_on_hold=true. Get name_ja, name_en (romaji), tabelog_url, official_url.
B. CATEGORY (assign ONE): BOTH (dedicated vegan+GF) | GF (dedicated gluten-free) | VEGAN (fully vegan/veg) | SHOJIN (temple/Buddhist) | OMNI (omnivore w/ vegan or GF options) | MOM_AND_POP (small independent local place that is NOT primarily a dietary destination — family/solo-run, <30 seats, locally loved). Use MOM_AND_POP for the local gems; use the dietary categories for vegan/veg/GF destinations.
C. DIETARY (honest): gf_confidence (dedicated|high|options|ask|no) + gf_detail; vegan_status (full|options|limited|ask|no) + vegan_detail. Be plain: wheat/soy/dashi-heavy places are not celiac-safe; most seafood/Kaga places are not vegan.
D. LOGISTICS: address_ja, then GEOCODE: fetch https://msearch.gsi.go.jp/address-search/AddressSearch?q=<URL-ENCODED address_ja>; first feature geometry.coordinates=[lng,lat]; retry chō-level if empty. Kanazawa box: lat 36.50–36.64, lng 136.58–136.72 — if outside, set null + geocode_note. seats (int or null + seats_text). hours_week: 7 elements Mon..Sun, each "closed" or "HH:MM-HH:MM" (comma for splits); hours_raw; closed_days; hours_status. reservation_required, cash_only. independent (true/false), under30 (yes|no|unsure). cultural_comfort_level + one-sentence note for a foreign student.
E. DINER-FACING CONTENT — NO developer meta (never mention Tabelog, seat counts, review counts, or sourcing). bio: the story of the place/people (background, specialty = signature dishes, philosophy if documented, anecdotes w/ source URLs); confidence:'none' + nulls if no real story. safety: for GF/vegan travelers — dedicated_fryer, gf_cross_contamination, soy_sauce_wheat, vegan_cross_contact, staff_allergy_handling, positives (each {text, source}); empty arrays if nothing specific.
Do NOT invent sources or facts. name_en = romanization.\`;

// loop-until-dry discovery: re-run angles each round with a growing avoid-list.
phase('Discover')
const seen = new Set(excludeNorms); const queue = [];
let round = 0, dry = 0;
while (round < 4 && dry < 1) {
  round++;
  const avoid = excludeList + (queue.length ? '、' + queue.map(c => c.name_ja).join('、') : '');
  const disc = await parallel(ANGLES.map((q, i) => () =>
    agent(discPrompt(q, avoid), { label: 'disc r' + round + ' #' + i, phase: 'Discover', schema: DISCOVERY_SCHEMA }).then(r => (r && r.candidates) || []).catch(() => [])));
  let fresh = 0;
  for (const list of disc) for (const c of (list || [])) { const k = norm(c.name_ja); if (!k || seen.has(k)) continue; seen.add(k); queue.push(c); fresh++; }
  log('Kanazawa r2 round ' + round + ': +' + fresh + ' fresh (queue ' + queue.length + ')');
  if (fresh < 4) dry++;
}
log('Kanazawa r2 discovery done: ' + queue.length + ' unique new candidates over ' + round + ' rounds');

phase('Verify')
const verified = (await parallel(queue.map(c => () =>
  agent(verifyPrompt(c), { label: 'vf:' + c.name_ja.slice(0, 16), phase: 'Verify', schema: VERIFY_SCHEMA }).then(r => r ? { lead: c.name_ja, ...r } : null).catch(() => null)))).filter(Boolean);
const keep = verified.filter(r => r.found && r.is_restaurant && !r.closed_or_on_hold);
log('verified ' + verified.length + '; restaurants kept ' + keep.length);
return {
  counts: { candidates: queue.length, verified: verified.length, kept: keep.length, rounds: round },
  kept: keep,
  dropped: verified.filter(r => !r.found || !r.is_restaurant || r.closed_or_on_hold).map(r => ({ name: r.name_ja || r.lead, found: r.found, is_restaurant: r.is_restaurant, closed: r.closed_or_on_hold })),
};
`;
fs.writeFileSync('scripts/kanazawa-r2-workflow.js', script);
console.log('wrote scripts/kanazawa-r2-workflow.js | angles:', ANGLES.length, '| exclude:', EXCLUDE.length, '|', script.length, 'bytes');
