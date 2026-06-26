// Dedicated RAMEN-shop discovery sweep for a city: loop-until-dry, ramen-specific angles,
// excluding existing places. Produces standard verified place records (cuisine_type→ramen).
// Enrich with the `ramen` object afterwards via gen-ramen-pass. Usage: node scripts/gen-ramen-discovery.mjs kyoto
import fs from 'fs';
const city = process.argv[2] || 'kyoto';
const cityData = JSON.parse(fs.readFileSync(`data/${city}.json`, 'utf8'));
const jpName = n => n.replace(/\s*[（(][^）)]*[）)]\s*$/, '').trim();
const EXCLUDE = [...new Set(cityData.places.map(p => jpName(p.name)).filter(Boolean))];

const ANGLES_BY_CITY = {
  kyoto: [
    '京都 ラーメン 名店 人気店 食べログ', '京都 背脂 醤油ラーメン 老舗 食べログ', '京都 こってり 鶏白湯ラーメン 食べログ',
    '京都 一乗寺 ラーメン街道 食べログ', '京都 北白川 銀閣寺 ラーメン 食べログ', '京都駅 ラーメン 食べログ',
    '京都 つけ麺 専門店 食べログ', '京都 汁なし担々麺 まぜそば 食べログ', '京都 煮干しラーメン 食べログ',
    '京都 二郎系 ラーメン 食べログ', '京都 町中華 中華そば 個人店 食べログ', '京都 ヴィーガン ベジ ラーメン 食べログ',
    '京都 鶏そば 淡麗系 ラーメン 食べログ', '京都 河原町 四条 ラーメン 食べログ', '京都 新福菜館 第一旭系 醤油ラーメン 食べログ',
    '京都 西院 円町 ラーメン 食べログ', '京都 伏見 ラーメン 食べログ', '京都 ラーメン 行列 隠れた名店 食べログ',
    'Kyoto Ichijoji ramen street best tabelog', 'Kyoto ramen tantanmen tsukemen local independent',
  ],
};
const ANGLES = ANGLES_BY_CITY[city] || [`${city} ラーメン 名店 食べログ`, `${city} つけ麺 担々麺 食べログ`, `${city} 中華そば 町中華 食べログ`, `${city} ramen best local tabelog`];

const DISCOVERY_SCHEMA = { type: 'object', additionalProperties: false, properties: { candidates: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { name_ja: { type: 'string' }, area: { type: 'string' }, cuisine: { type: 'string' }, tabelog_url: { type: 'string' } }, required: ['name_ja', 'area', 'cuisine', 'tabelog_url'] } } }, required: ['candidates'] };
const VERIFY_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    found: { type: 'boolean' }, is_restaurant: { type: 'boolean' }, closed_or_on_hold: { type: 'boolean' },
    name_ja: { type: 'string' }, name_en: { type: 'string' }, tabelog_url: { type: 'string' }, official_url: { type: 'string' },
    category: { type: 'string', enum: ['BOTH', 'GF', 'VEGAN', 'SHOJIN', 'OMNI', 'MOM_AND_POP'] },
    cuisine: { type: 'string' }, neighborhood: { type: 'string' }, address_ja: { type: 'string' },
    lat: { type: ['number', 'null'] }, lng: { type: ['number', 'null'] }, geocode_note: { type: 'string' },
    seats: { type: ['integer', 'null'] }, seats_text: { type: 'string' },
    gf_confidence: { type: 'string', enum: ['dedicated', 'high', 'options', 'ask', 'no'] }, gf_detail: { type: 'string' },
    vegan_status: { type: 'string', enum: ['full', 'options', 'limited', 'ask', 'no'] }, vegan_detail: { type: 'string' },
    hours_week: { type: 'array', items: { type: 'string' } }, hours_raw: { type: 'string' }, closed_days: { type: 'string' }, hours_status: { type: 'string', enum: ['regular', 'irregular'] },
    reservation_required: { type: 'boolean' }, cash_only: { type: 'boolean' }, independent: { type: 'boolean' }, under30: { type: 'string', enum: ['yes', 'no', 'unsure'] },
    cultural_comfort_level: { type: 'string', enum: ['guide_only', 'japanese', 'konnichiwa', 'english'] }, cultural_comfort_note: { type: 'string' },
    bio: { type: 'object', additionalProperties: false, properties: { chef_name: { type: ['string', 'null'] }, roles: { type: 'array', items: { type: 'string' } }, origin: { type: ['string', 'null'] }, background: { type: ['string', 'null'] }, philosophy: { type: ['string', 'null'] }, specialty: { type: ['string', 'null'] }, anecdotes: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text', 'source'] } }, confidence: { type: 'string', enum: ['high', 'medium', 'low', 'none'] }, sources: { type: 'array', items: { type: 'string' } } }, required: ['confidence', 'roles', 'anecdotes', 'sources'] },
    safety: { type: 'object', additionalProperties: false, properties: { dedicated_fryer: { type: ['boolean', 'null'] }, gf_cross_contamination: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } }, soy_sauce_wheat: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } }, vegan_cross_contact: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } }, staff_allergy_handling: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } }, positives: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } }, confidence: { type: 'string', enum: ['high', 'medium', 'low', 'none'] } }, required: ['confidence', 'gf_cross_contamination', 'soy_sauce_wheat', 'vegan_cross_contact', 'staff_allergy_handling', 'positives'] },
    caveats: { type: 'string' }, sources: { type: 'array', items: { type: 'string' } },
  },
  required: ['found', 'is_restaurant', 'name_ja', 'category', 'vegan_status', 'gf_confidence', 'bio', 'safety'],
};

const script = `export const meta = {
  name: 'ramen-discovery-${city}',
  description: 'Dedicated ramen-shop discovery sweep for ${city}: loop-until-dry, ramen angles, exclude existing, verify',
  phases: [{ title: 'Discover' }, { title: 'Verify' }],
}
const ANGLES = ${JSON.stringify(ANGLES)};
const EXCLUDE = ${JSON.stringify(EXCLUDE)};
const DISCOVERY_SCHEMA = ${JSON.stringify(DISCOVERY_SCHEMA)};
const VERIFY_SCHEMA = ${JSON.stringify(VERIFY_SCHEMA)};
const norm = s => (s || '').replace(/[\\s　・（）()「」、,.。\\-本店店]/g, '').toLowerCase();
const excludeNorms = new Set(EXCLUDE.map(norm));
const excludeList = EXCLUDE.join('、');

const discPrompt = (q, avoid) => \`Find RAMEN shops in ${city.toUpperCase()}, Japan — ramen / tsukemen (dip noodles) / shiru-nashi tantanmen / mazesoba / abura-soba / niboshi / tori-paitan / jiro-kei / 町中華 chuka-soba. Prefer genuinely local, independent, well-loved shops (Tabelog-verified). Search the web for: \${q}
IMPORTANT: we ALREADY HAVE these places — do NOT return any of them or obvious branches:
\${avoid}
Return up to 8 NEW ramen shops not in that list. For each: name_ja (exact), area (district + nearest landmark/station), cuisine (ramen sub-type), tabelog_url (if found, else "").\`;

const verifyPrompt = c => \`Verify ONE ${city} RAMEN shop for a curated dining app and produce its full record. NEVER invent — every fact from a page you fetch (WebSearch then WebFetch: Tabelog, official site, blogs). found:false if you can't confirm it exists.
TARGET: \${c.name_ja} | area: \${c.area || '?'} | cuisine: \${c.cuisine || '?'}\${c.tabelog_url ? ' | Tabelog: ' + c.tabelog_url : ''}
A. IDENTITY: confirm it's a real, currently-operating ${city} ramen shop. is_restaurant=false if not a place you eat. 掲載保留/閉店 → closed_or_on_hold=true. name_ja, name_en (romaji), tabelog_url, official_url.
B. CATEGORY (one): usually MOM_AND_POP (small independent local) or OMNI; VEGAN/BOTH only if genuinely a vegan ramen specialist.
C. DIETARY (honest): gf_confidence (dedicated|high|options|ask|no)+gf_detail; vegan_status (full|options|limited|ask|no)+vegan_detail. Ramen is wheat noodles + (usually) wheat shoyu tare + pork/fish broth → almost never celiac-safe; flag honestly. Note any genuine veg/vegan ramen.
D. LOGISTICS: address_ja, then GEOCODE: fetch https://msearch.gsi.go.jp/address-search/AddressSearch?q=<URL-ENCODED address_ja>; first feature geometry.coordinates=[lng,lat]; retry chō-level if empty. ${city} box: lat 34.93–35.13, lng 135.66–135.83 — if outside, null + geocode_note. seats(int|null)+seats_text. hours_week 7 (Mon..Sun) each "closed" or "HH:MM-HH:MM" (comma for splits); hours_raw; closed_days; hours_status. reservation_required, cash_only, independent, under30. cultural_comfort_level + one-sentence note.
E. DINER-FACING — NO dev meta (never mention Tabelog/seat counts/review counts/awards-by-platform/sourcing). bio: the story of the place/people (background, specialty = signature bowl, philosophy, anecdotes w/ source URLs); confidence:'none'+nulls if no real story. safety: dedicated_fryer + gf_cross_contamination/soy_sauce_wheat/vegan_cross_contact/staff_allergy_handling/positives (each {text,source}); empty arrays if nothing specific. name_en = romanization.\`;

phase('Discover')
const seen = new Set(excludeNorms); const queue = [];
let round = 0, dry = 0;
while (round < 4 && dry < 1) {
  round++;
  const avoid = excludeList + (queue.length ? '、' + queue.map(c => c.name_ja).join('、') : '');
  const disc = await parallel(ANGLES.map((q, i) => () => agent(discPrompt(q, avoid), { label: 'disc r' + round + ' #' + i, phase: 'Discover', schema: DISCOVERY_SCHEMA, model: 'haiku' }).then(r => (r && r.candidates) || []).catch(() => [])));
  let fresh = 0;
  for (const list of disc) for (const c of (list || [])) { const k = norm(c.name_ja); if (!k || seen.has(k)) continue; seen.add(k); queue.push(c); fresh++; }
  log('${city} ramen r' + round + ': +' + fresh + ' fresh (queue ' + queue.length + ')');
  if (fresh < 4) dry++;
}
log('${city} ramen discovery done: ' + queue.length + ' new candidates over ' + round + ' rounds');

phase('Verify')
const verified = (await parallel(queue.map(c => () => agent(verifyPrompt(c), { label: 'vf:' + c.name_ja.slice(0, 16), phase: 'Verify', schema: VERIFY_SCHEMA, model: 'sonnet' }).then(r => r ? { lead: c.name_ja, ...r } : null).catch(() => null)))).filter(Boolean);
const keep = verified.filter(r => r.found && r.is_restaurant && !r.closed_or_on_hold);
log('verified ' + verified.length + '; ramen shops kept ' + keep.length);
return { counts: { candidates: queue.length, verified: verified.length, kept: keep.length, rounds: round }, kept: keep,
  dropped: verified.filter(r => !r.found || !r.is_restaurant || r.closed_or_on_hold).map(r => ({ name: r.name_ja || r.lead, found: r.found, is_restaurant: r.is_restaurant, closed: r.closed_or_on_hold })) };
`;
fs.writeFileSync(`scripts/ramen-discovery-${city}-workflow.js`, script);
console.log(`wrote scripts/ramen-discovery-${city}-workflow.js | angles:`, ANGLES.length, '| exclude:', EXCLUDE.length, '|', script.length, 'bytes');
