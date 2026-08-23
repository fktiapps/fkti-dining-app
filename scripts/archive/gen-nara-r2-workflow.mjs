// Round-2 Nara expansion: loop-until-dry discovery with NEW angles + exclusion
// of everything already in data/nara.json, then verify all fresh candidates.
// Output (kept[]) -> data/_nara_r2.json -> build-nara-merge.mjs.
import fs from 'fs';

const city = JSON.parse(fs.readFileSync('data/nara.json', 'utf8'));
const jpName = n => n.replace(/\s*[（(][^）)]*[）)]\s*$/, '').trim();
const EXCLUDE = [...new Set(city.places.map(p => jpName(p.name)).filter(Boolean))];

const ANGLES = [
  '奈良 もちいどのセンター街 商店街 個人店 食堂 食べログ',
  '奈良 東向商店街 餅飯殿 老舗 定食 食べログ',
  '奈良 三輪そうめん にゅうめん 専門 老舗 食べログ',
  '奈良 茶粥 大和料理 郷土料理 個人店 食べログ',
  '奈良 柿の葉寿司 名物 老舗 個人店 食べログ',
  '奈良 精進料理 東大寺 興福寺 周辺 個人店 食べログ',
  '奈良 葛 くずきり 葛餅 甘味処 老舗 食べログ',
  '奈良 大和野菜 大和肉鶏 大和ポーク 定食 個人店 食べログ',
  '奈良 ならまち 町家 古民家 ランチ カフェ 個人店 食べログ',
  '奈良 蕎麦 うどん 手打ち 個人店 老舗 食べログ',
  '奈良 喫茶 純喫茶 自家焙煎 珈琲 老舗 食べログ',
  '奈良 居酒屋 おばんざい 地酒 大人 個人店 食べログ',
  '奈良 とんかつ 洋食 グリル 個人店 食べログ',
  '奈良 ラーメン 町中華 餃子 個人店 食べログ',
  '奈良 ヴィーガン ベジタリアン グルテンフリー カフェ HappyCow',
  '奈良 パン ベーカリー ケーキ サンドイッチ 個人店 食べログ',
  '奈良 きたまち 北部 個人店 カフェ 食堂 食べログ',
  '奈良 隠れた名店 常連 穴場 地元 個人店 食べログ',
  'Nara Naramachi hidden gem local restaurant tabelog',
  'Nara vegan vegetarian gluten free cafe HappyCow Kintetsu',
  '奈良漬 大和茶 茶寮 甘味 個人店 食べログ',
  '奈良 丼 食堂 定食 名物 個人店 老舗 食べログ',
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
  name: 'nara-r2',
  description: 'Round-2 Nara expansion: loop-until-dry discovery (excluding existing places) + verify',
  phases: [{ title: 'Discover' }, { title: 'Verify' }],
}
const ANGLES = ${JSON.stringify(ANGLES)};
const EXCLUDE = ${JSON.stringify(EXCLUDE)};
const DISCOVERY_SCHEMA = ${JSON.stringify(DISCOVERY_SCHEMA)};
const VERIFY_SCHEMA = ${JSON.stringify(VERIFY_SCHEMA)};
const norm = s => (s || '').replace(/[\\s　・（）()「」、,.。\\-本店店]/g, '').toLowerCase();

const excludeNorms = new Set(EXCLUDE.map(norm));
const excludeList = EXCLUDE.join('、');

const discPrompt = (q, avoid) => \`Find real restaurants in CENTRAL NARA, Japan, within about 2 miles of Kintetsu Nara Station (近鉄奈良駅) — Nara Park, Tōdai-ji, Kōfuku-ji, Naramachi (ならまち), Kitamachi, Higashimuki & Mochiidono arcades, Sanjō-dōri, and around JR Nara Station. We want a mix of: (1) vegan / vegetarian / gluten-free-friendly spots, AND (2) small independent local "mom & pop" places (family/solo-run, locally loved — Naramachi machiya cafés, kakinoha-zushi, Miwa sōmen/nyūmen, chagayu, Yamato-vegetable & shōjin cuisine, kuzu sweets, soba, kissaten, yōshoku).
Search the web for: \${q}
IMPORTANT: we ALREADY HAVE the following places — do NOT return any of these or obvious branches of them:
\${avoid}
Return up to 8 NEW candidates not in that list. For each: name_ja (exact Japanese name), area (district + nearest landmark/station), cuisine, tabelog_url (tabelog.com detail URL if found, else ""). Only real shops you saw in results; prefer genuinely local/independent ones near Kintetsu Nara / Naramachi.\`;

const verifyPrompt = c => \`Verify ONE Nara restaurant for a curated dining app and produce its full record. NEVER invent — every fact from a page you fetch (WebSearch then WebFetch: Tabelog, official site, HappyCow). Return found:false if you cannot confirm it exists.
TARGET: \${c.name_ja} | area: \${c.area || '?'} | cuisine: \${c.cuisine || '?'}\${c.tabelog_url ? ' | Tabelog: ' + c.tabelog_url : ''}

A. IDENTITY: confirm it's a real, currently-operating CENTRAL NARA eatery. is_restaurant=false if it's not a place you go to eat (cooking class, shop, event). If 掲載保留/閉店 → closed_or_on_hold=true. Get name_ja, name_en (romaji), tabelog_url, official_url.
B. CATEGORY (assign ONE): BOTH (dedicated vegan+GF) | GF (dedicated gluten-free) | VEGAN (fully vegan/veg) | SHOJIN (temple/Buddhist 精進料理) | OMNI (omnivore w/ vegan or GF options) | MOM_AND_POP (small independent local place NOT primarily a dietary destination — family/solo-run, <30 seats, locally loved). Use MOM_AND_POP for local gems; dietary categories for vegan/veg/GF/shojin destinations.
C. DIETARY (honest): gf_confidence (dedicated|high|options|ask|no) + gf_detail; vegan_status (full|options|limited|ask|no) + vegan_detail. Be plain: wheat/soy/dashi-heavy places are not celiac-safe; sōmen/udon are wheat; most dishes use fish dashi so are not vegan. Note: Nara has real shōjin & Yamato-vegetable spots that ARE genuinely vegan — flag those accurately.
D. LOGISTICS: address_ja, then GEOCODE: fetch https://msearch.gsi.go.jp/address-search/AddressSearch?q=<URL-ENCODED address_ja>; first feature geometry.coordinates=[lng,lat]; retry chō-level if empty. Nara box: lat 34.64–34.74, lng 135.76–135.90 — if outside, set null + geocode_note. seats (int or null + seats_text). hours_week: 7 elements Mon..Sun, each "closed" or "HH:MM-HH:MM" (comma for splits); hours_raw; closed_days; hours_status. reservation_required, cash_only. independent (true/false), under30 (yes|no|unsure). cultural_comfort_level + one-sentence note for a foreign student.
E. DINER-FACING CONTENT — NO developer meta (never mention Tabelog, seat counts, review counts, awards by platform name, or sourcing). bio: the story of the place/people (background, specialty = signature dishes, philosophy if documented, anecdotes w/ source URLs); confidence:'none' + nulls if no real story. safety: for GF/vegan travelers — dedicated_fryer, gf_cross_contamination, soy_sauce_wheat, vegan_cross_contact, staff_allergy_handling, positives (each {text, source}); empty arrays if nothing specific.
Do NOT invent sources or facts. name_en = romanization.\`;

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
  log('Nara r2 round ' + round + ': +' + fresh + ' fresh (queue ' + queue.length + ')');
  if (fresh < 4) dry++;
}
log('Nara r2 discovery done: ' + queue.length + ' unique new candidates over ' + round + ' rounds');

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
fs.writeFileSync('scripts/nara-r2-workflow.js', script);
console.log('wrote scripts/nara-r2-workflow.js | angles:', ANGLES.length, '| exclude:', EXCLUDE.length, '|', script.length, 'bytes');
