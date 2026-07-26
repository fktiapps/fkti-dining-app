// Build the Tokyo 3-mile discovery accumulator (data/_tokyo3_cands.json) into light place records and
// merge into data/tokyo.json. WebFetch/verify agents were unavailable, so these are LIGHT records:
// GF/vegan inferred from the discovery cuisine signal, neighborhood-centroid APPROX pins (flagged
// loc_approx:'block' + note), no bios/hours. Deduped against the 599; filtered to the 5-circle union.
import fs from 'fs';
import { CONFIGS } from './spot-configs.mjs';
const d = JSON.parse(fs.readFileSync('data/tokyo.json', 'utf8'));
const cands = JSON.parse(fs.readFileSync('data/_tokyo3_cands.json', 'utf8'));
const AX = ' · 📍 Approx. pin (neighborhood) · from the Tokyo 3-mile sweep — confirm details on site.';
const norm = s => (s || '').replace(/[\s　・（）()「」、,.。\-本店店]/g, '').toLowerCase();
const gfL = g => ({ dedicated: 'Dedicated gluten-free', high: 'Strong GF focus', options: 'Some GF options', ask: 'GF — ask staff', no: 'Not gluten-free' }[g]);
const vgL = v => ({ full: 'Fully vegan', options: 'Vegan options', limited: 'Limited vegan options', ask: 'Vegan — ask', no: 'Not vegan' }[v]);
const slug = s => 'tokyo3_' + s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 26);
const gmaps = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q + ' 東京');

// neighborhood → centroid (approx). First match wins.
const CEN = [
  [/丸の内|大手町|東京駅/, 35.6812, 139.7671], [/日本橋|三越前|室町/, 35.6840, 139.7740], [/銀座|東銀座/, 35.6717, 139.7650],
  [/八重洲|京橋/, 35.6780, 139.7700], [/築地/, 35.6660, 139.7700], [/人形町|茅場町/, 35.6850, 139.7820],
  [/秋葉原/, 35.6984, 139.7731], [/御茶ノ水|御茶の水/, 35.6993, 139.7650], [/神保町/, 35.6957, 139.7576], [/神田/, 35.6918, 139.7710],
  [/上野|御徒町|湯島|アメ横/, 35.7080, 139.7745], [/合羽橋|田原町/, 35.7118, 139.7900], [/浅草/, 35.7118, 139.7967],
  [/蔵前/, 35.7050, 139.7910], [/浅草橋/, 35.6965, 139.7855], [/両国/, 35.6960, 139.7930], [/錦糸町/, 35.6970, 139.8120],
  [/清澄白河|門前仲町|木場/, 35.6820, 139.7990], [/後楽園|水道橋/, 35.7060, 139.7520], [/飯田橋/, 35.7020, 139.7450],
  [/神楽坂/, 35.7010, 139.7400], [/本郷/, 35.7080, 139.7590], [/根津|千駄木/, 35.7220, 139.7660], [/白山|春日/, 35.7160, 139.7520],
  [/新宿三丁目|新宿/, 35.6905, 139.7020], [/四谷|四ツ谷/, 35.6860, 139.7300], [/市ヶ谷|市ケ谷/, 35.6930, 139.7350],
  [/大久保|新大久保/, 35.7010, 139.7000], [/高田馬場/, 35.7120, 139.7040], [/早稲田/, 35.7090, 139.7200],
  [/東中野/, 35.7060, 139.6850], [/代々木/, 35.6830, 139.7020], [/中野/, 35.7060, 139.6660],
  [/渋谷/, 35.6595, 139.7005], [/原宿/, 35.6700, 139.7030], [/表参道|青山/, 35.6650, 139.7120], [/恵比寿/, 35.6470, 139.7100],
  [/代官山/, 35.6485, 139.7030], [/中目黒/, 35.6440, 139.6990], [/広尾/, 35.6520, 139.7220], [/六本木/, 35.6640, 139.7310],
  [/赤坂/, 35.6720, 139.7360], [/麻布十番|麻布/, 35.6560, 139.7360], [/神泉|池尻/, 35.6560, 139.6900],
  [/新橋/, 35.6660, 139.7580], [/虎ノ門/, 35.6670, 139.7490], [/目黒/, 35.6340, 139.7160],
];
const coordOf = area => { for (const [re, la, ln] of CEN) if (re.test(area || '')) return [la, ln]; return null; };

// GF/vegan/category inference from the cuisine signal
function diet(cuisine, name) {
  const s = (cuisine || '') + ' ' + (name || '');
  const isVeg = /ヴィーガン|ビーガン|vegan|ベジタリアン|vegetarian|プラントベース|精進/i.test(s);
  const isGF = /グルテンフリー|gluten.?free|小麦粉不使用|米粉|十割|玄米麺/i.test(s);
  let ct = 'other';
  const R = [['ramen', /ラーメン|つけ麺|まぜそば|担担|中華そば/], ['udon_soba', /蕎麦|そば|うどん|十割/], ['tempura', /天ぷら|天麩羅/],
    ['katsu', /とんかつ|トンカツ|カツ/], ['unagi', /鰻|うなぎ|穴子|anago|unagi/], ['sushi', /寿司|鮨|海鮮丼|kaisen/], ['curry', /カレー|curry|カリー/],
    ['chanko', /ちゃんこ/], ['yakitori', /焼き鳥|焼鳥|串/], ['sweets', /カフェ|喫茶|スイーツ|ケーキ|パン|cafe|甘味|パンケーキ|coffee|珈琲/],
    ['thai', /タイ料理|thai/i], ['french', /フレンチ|french|ビストロ|bistro|ガレット/], ['izakaya', /居酒屋/], ['shokudo', /食堂|定食|teishoku/],
    ['yoshoku', /洋食|オムライス|ハンバーグ|ハヤシ|グリル/]];
  for (const [t, re] of R) if (re.test(s)) { ct = t; break; }
  let gf = 'ask', vg = 'ask', cat = 'OMNI';
  if (isVeg && isGF) { cat = 'BOTH'; vg = 'full'; gf = 'options'; }
  else if (isVeg) { cat = /精進/.test(s) ? 'SHOJIN' : 'VEGAN'; vg = 'full'; gf = 'ask'; }
  else if (isGF) { cat = 'GF'; gf = /小麦粉不使用|dedicated|十割/.test(s) ? 'options' : 'options'; vg = 'limited'; }
  else {
    const map = { ramen: ['no', 'no'], udon_soba: ['ask', 'limited'], tempura: ['no', 'no'], katsu: ['no', 'no'], unagi: ['ask', 'no'],
      sushi: ['ask', 'no'], curry: ['ask', 'options'], chanko: ['ask', 'no'], yakitori: ['ask', 'no'], sweets: ['ask', 'ask'],
      thai: ['ask', 'options'], french: ['ask', 'limited'], izakaya: ['ask', 'limited'], shokudo: ['ask', 'limited'], yoshoku: ['no', 'limited'], other: ['ask', 'ask'] };
    [gf, vg] = map[ct];
  }
  // mom-and-pop signal
  const mp = /老舗|創業|個人店|食堂|町中華|大衆|ちゃんこ|とんかつ|蕎麦|そば/.test(s) && !isVeg && !isGF;
  if (mp && cat === 'OMNI') cat = 'MOM_AND_POP';
  return { gf, vg, cat, ct, mp: cat === 'MOM_AND_POP' };
}

const haveName = new Set(d.places.map(p => norm(p.name)));
const haveId = new Set(d.places.map(p => p.id));
let added = 0, noCoord = 0, dup = 0;
const usedId = new Set();
for (const c of cands) {
  const k = norm(c.name_ja);
  if (!k || haveName.has(k)) { dup++; continue; }
  const co = coordOf(c.area); if (!co) { noCoord++; continue; }
  let id = slug(c.name_ja + '_' + (c.area || '').slice(0, 6)); if (haveId.has(id) || usedId.has(id)) id = id + '_' + added; usedId.add(id);
  const { gf, vg, cat, ct, mp } = diet(c.cuisine, c.name_ja);
  const cuisine = (c.cuisine || '').split(/[（(]/)[0].slice(0, 60) || 'Japanese';
  d.places.push({
    id, name: c.name_ja, category: cat, lat: co[0], lng: co[1], loc_approx: 'block',
    gf_confidence: gf, gf_label: gfL(gf), gf_detail: 'Inferred from cuisine type — not individually verified. Confirm with staff (soy sauce, tempura and shared fryers are common gluten sources).',
    vegan_status: vg, vegan_label: vgL(vg), vegan_detail: 'Inferred from cuisine type — not individually verified. Confirm dashi/bonito and animal ingredients with staff.',
    hours_raw: 'Hours unverified — confirm.', hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: (c.area || 'Central Tokyo'), cuisine, website: null, gmaps: gmaps(c.name_ja), menu_url: null,
    notes: '[Tokyo 3-mile sweep] ' + cuisine + (c.area ? ' · ' + c.area : '') + AX,
    chef_bio: { chef_name: null, roles: [], origin: 'Tokyo', background: null, philosophy: null, specialty: null, anecdotes: [], japanese_sources_summary: '', confidence: 'none', sources: [] },
    cultural_comfort: { level: 'konnichiwa', note: 'A central-Tokyo spot; a little Japanese or pointing helps.' },
    cultural_comfort_note: 'A central-Tokyo spot; a little Japanese or pointing helps.',
    cuisine_type: ct,
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'none', last_checked: '2026-07-21' },
    has_menu: false, menu_verified: null, mom_and_pop: mp,
  });
  haveName.add(k); added++;
}
function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }
fs.writeFileSync('data/tokyo.json', ser(d));
let swv = '?'; for (const f of ['sw.js', 'index.html']) { let s = fs.readFileSync(f, 'utf8'); const m = s.match(/dcd-v(\d+)/); if (!m) continue; swv = Number(m[1]) + 1; s = s.split(`dcd-v${m[1]}`).join(`dcd-v${swv}`); fs.writeFileSync(f, s); }
console.log(`built ${added} light records into tokyo.json (now ${d.places.length}); skipped ${dup} dup, ${noCoord} no-coord. SW→dcd-v${swv}`);
const nc = {}; d.places.filter(p => p.id.startsWith('tokyo3_')).forEach(p => { nc[p.category] = (nc[p.category] || 0) + 1; });
console.log('new by category:', JSON.stringify(nc));
