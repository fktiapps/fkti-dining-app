// Build Tokyo from data/_tokyo_disc.json and MERGE into the existing data/tokyo.json,
// PRESERVING the 8 hand-verified Suidobashi seed places (richer Opus bios + inlined menus)
// and their menu fields. New places from the 4-circle sweep are appended; dups (by normalized
// JA name) prefer the existing seed record. Registers in manifest (keeps free flag) + bumps SW.
// Usage: node scripts/build-tokyo-merge.mjs
import fs from 'fs';
import { CONFIGS, bbox } from './spot-configs.mjs';
const city = 'tokyo';
const cfg = CONFIGS[city];
const kept = JSON.parse(fs.readFileSync(`data/_${city}_disc.json`, 'utf8'));
const existing = JSON.parse(fs.readFileSync(`data/${city}.json`, 'utf8'));
const box = bbox(cfg);

const hav = (a, b, c, d) => { const R = 6371, t = Math.PI / 180; const x = Math.sin((c - a) * t / 2) ** 2 + Math.cos(a * t) * Math.cos(c * t) * Math.sin((d - b) * t / 2) ** 2; return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x)); };
const nearAnyCenter = r => r.lat != null && cfg.centers.some(c => hav(c.lat, c.lng, r.lat, r.lng) <= c.r + 0.05);
const norm = s => (s || '').replace(/[\s　・（）()「」、,.。\-本店店]/g, '').toLowerCase();
const jpName = n => (n || '').replace(/\s*[（(][^）)]*[）)]\s*$/, '').trim();

const RULES = [
  ['unagi', /unagi|鰻|eel|うなぎ/i], ['sushi', /sushi|寿司|鮨|海鮮丼|kaisen/i], ['katsu', /tonkatsu|とんかつ|katsudon|カツ|cutlet|味噌カツ/i],
  ['tempura', /tempura|天ぷら|天麩羅/i], ['yakitori', /yakitori|焼き鳥|焼鳥|kushiyaki|kushikatsu|kushiage|串揚|串焼|手羽先/i],
  ['okonomiyaki', /okonomiyaki|お好み焼|鉄板|teppan|monja|もんじゃ/i], ['oden', /oden|おでん|関東煮/i], ['gyoza', /gyoza|餃子|ぎょうざ|ギョーザ/i],
  ['tofu', /豆腐|tofu|湯葉|yuba/i], ['ramen', /ramen|ラーメン|中華そば|町中華|中華料理|chinese|chūka|chuka|つけ麺|tsukemen|まぜそば|油そば|abura.?soba|担々|担担|tantan|二郎|niboshi|煮干|鶏白湯|paitan/i],
  ['udon_soba', /soba|udon|そば|うどん|蕎麦|そうめん|素麺/i], ['shojin', /shojin|shōjin|精進|temple|buddhist/i],
  ['kaiseki', /kaiseki|会席|懐石|kapp[oōう]|割烹|郷土料理|小料理/i],
  ['kissaten', /kissaten|喫茶|純喫茶|coffee|caf[eé]|珈琲|pancake|パンケーキ/i],
  ['yoshoku', /yoshoku|yōshoku|洋食|western|hamburg|ハンバーグ|オムライス|グリル|grill|bistro|french|italian|pasta|カレー|curry/i],
  ['obanzai', /obanzai|おばんざい|home-?style|家庭料理|organic|オーガニック|vegan|ヴィーガン|ベジ/i],
  ['donburi', /donburi|丼|どんぶり|rice bowl|ひつまぶし|手こね/i], ['izakaya', /izakaya|居酒屋|sake bar|日本酒バー/i],
  ['shokudo', /shokud|食堂|定食|teishoku|diner|canteen|麺類/i], ['sweets', /sweets|bakery|パン|ケーキ|和菓子|甘味|sweet|おやき|赤福|クレープ|crepe/i],
];
const classify = (cuisine, name, cat) => { const hay = `${cuisine || ''} ${name || ''}`; for (const [t, re] of RULES) if (re.test(hay)) return t; if (cat === 'SHOJIN') return 'shojin'; return 'other'; };
const slugify = s => (s || '').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 24);
const veganLabel = v => ({ full: 'Fully vegan', options: 'Vegan options', limited: 'Limited vegan options', ask: 'Vegan — ask', no: 'Not vegan' }[v] || 'Ask');
const gfLabel = g => ({ dedicated: 'Dedicated gluten-free', high: 'Strong GF focus', options: 'Some GF options', ask: 'GF — ask', no: 'Not gluten-free' }[g] || 'Ask');
const cleanCuisine = s => (s || '').split(/[—(（;]/)[0].replace(/[、,\s]+$/, '').trim().slice(0, 44) || 'Japanese';
const gmapsLink = (name, addr) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(name + ' ' + (addr || '').replace(/〒\d{3}-?\d{4}\s*/, '').replace(/\s+\S*(ビル|会館|館).*$/, ''));
const parseDay = s => { if (!s || /^(closed|休|定休)/i.test(s.trim())) return []; return s.split(',').map(r => { const m = r.trim().match(/^(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})$/); return m ? [m[1].padStart(5, '0'), m[2].padStart(5, '0')] : null; }).filter(Boolean); };
const arr = a => Array.isArray(a) ? a : [];
const cleanAnec = a => arr(a).filter(x => x && x.text).map(x => ({ text: x.text, source: x.source || '' }));

// Seed dedup + slug sets from the EXISTING seed places (they win on conflict).
const seen = new Set(existing.places.map(p => norm(jpName(p.name))));
const usedSlugs = new Set(existing.places.map(p => p.id));
const added = [], skipped = [], catCount = {}, czCount = {};
for (const r of kept) {
  const nk = norm(r.name_ja);
  if (seen.has(nk)) { skipped.push(r.name_ja + ' (dup)'); continue; } seen.add(nk);
  if (!nearAnyCenter(r)) { skipped.push(`${r.name_ja} (outside radius)`); continue; }
  const hours = {}; let openLate = false;
  for (let i = 0; i < 7; i++) { const day = parseDay((r.hours_week || [])[i] || 'closed'); hours[String(i)] = day; for (const [, c] of day) if (c >= '22:00' || c <= '03:00') openLate = true; }
  let base = slugify(r.name_en) || 'tky', id = `${city}_${base}`, n = 2;
  while (usedSlugs.has(id)) id = `${city}_${base}_${n++}`;
  usedSlugs.add(id);
  const nameEn = (r.name_en || '').slice(0, 44);
  const cat = ['BOTH', 'GF', 'VEGAN', 'SHOJIN', 'OMNI', 'MOM_AND_POP'].includes(r.category) ? r.category : 'OMNI';
  catCount[cat] = (catCount[cat] || 0) + 1;
  const cuisine = cleanCuisine(r.cuisine);
  const cz = classify(cuisine, r.name_ja, cat); czCount[cz] = (czCount[cz] || 0) + 1;
  const tab = r.tabelog_url || '';
  const b = r.bio || {}, s = r.safety || {};
  const mpPrefix = cat === 'MOM_AND_POP' ? '[Mom & Pop] ' : '';
  added.push({
    id, name: nameEn ? `${r.name_ja} (${nameEn})` : r.name_ja, category: cat, lat: r.lat, lng: r.lng,
    gf_confidence: ['dedicated', 'high', 'options', 'ask', 'no'].includes(r.gf_confidence) ? r.gf_confidence : 'ask',
    gf_label: gfLabel(r.gf_confidence), gf_detail: r.gf_detail || 'Ask about gluten-free options.',
    vegan_status: ['full', 'options', 'limited', 'ask', 'no'].includes(r.vegan_status) ? r.vegan_status : 'ask',
    vegan_label: veganLabel(r.vegan_status), vegan_detail: r.vegan_detail || '',
    hours_raw: r.hours_raw || '', hours, hours_status: r.hours_status === 'irregular' ? 'irregular' : 'regular',
    flags: { reservation: !!r.reservation_required, cash_only: !!r.cash_only, halal: false, open_late: openLate },
    neighborhood: (r.neighborhood || '').slice(0, 60), cuisine, cuisine_type: cz,
    website: r.official_url || tab || null, gmaps: gmapsLink(r.name_ja, r.address_ja),
    notes: `${mpPrefix}${(b.background || r.gf_detail || '').slice(0, 280)}`.trim(),
    menu_url: tab ? tab.replace(/\/?$/, '/') + 'dtlmenu/' : null,
    chef_bio: { chef_name: b.chef_name ?? null, roles: arr(b.roles).length ? b.roles : ['owner'], origin: b.origin ?? null, background: b.background ?? null, philosophy: b.philosophy ?? null, specialty: b.specialty ?? null, anecdotes: cleanAnec(b.anecdotes), japanese_sources_summary: '', confidence: ['high', 'medium', 'low', 'none'].includes(b.confidence) ? b.confidence : 'none', sources: arr(b.sources) },
    safety: { dedicated_fryer: typeof s.dedicated_fryer === 'boolean' ? s.dedicated_fryer : null, gf_cross_contamination: cleanAnec(s.gf_cross_contamination), soy_sauce_wheat: cleanAnec(s.soy_sauce_wheat), vegan_cross_contact: cleanAnec(s.vegan_cross_contact), staff_allergy_handling: cleanAnec(s.staff_allergy_handling), positives: cleanAnec(s.positives), confidence: ['high', 'medium', 'low', 'none'].includes(s.confidence) ? s.confidence : 'none', last_checked: '2026-07-08' },
    dcp: null,
    cultural_comfort: { level: ['guide_only', 'japanese', 'konnichiwa', 'english'].includes(r.cultural_comfort_level) ? r.cultural_comfort_level : 'konnichiwa', note: r.cultural_comfort_note || cfg.comfort },
  });
}
// auto-scrub any dev-meta that leaked into bios (Haiku/Sonnet leak ~14%)
const METAX = /\btabelog\b|食べログ|席数|予算|口コミ|掲載/i;
const scrubT = t => { if (!t) return t; const o = t.split(/(?<=[。.!?！？])\s*/).filter(s => !METAX.test(s)).join(' ').trim(); return o || null; };
for (const p of added) { const b = p.chef_bio; if (!b) continue; b.background = scrubT(b.background); b.specialty = scrubT(b.specialty); b.philosophy = scrubT(b.philosophy); b.anecdotes = (b.anecdotes || []).filter(a => !METAX.test(a.text)); }

// Merge: seed places FIRST (preserved verbatim), then new sweep places.
const before = existing.places.length;
existing.places = existing.places.concat(added);
// Re-frame the city now that it is a real multi-district restaurant guide.
const center = [+((box.latMin + box.latMax) / 2).toFixed(4), +((box.lngMin + box.lngMax) / 2).toFixed(4)];
const bounds = [[+box.latMin.toFixed(4), +box.lngMin.toFixed(4)], [+box.latMax.toFixed(4), +box.lngMax.toFixed(4)]];
existing.subtitle = cfg.subtitle;
existing.center = center;
existing.bounds = bounds;
existing.note = 'Restaurant guide for four 1-mile circles — Asakusa (Sensōji), Shibuya, Suidōbashi/Jimbocho and Shinjuku — with gluten-free/vegan/mom-&-pop/ramen finds, plus the city-wide konbini (🏪), survival guides, label reader, 100 Dishes and Learn.';

function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }
fs.writeFileSync(`data/${city}.json`, ser(existing));

// register in manifest (keep the existing free flag + a district-aware name)
const man = JSON.parse(fs.readFileSync('data/manifest.json', 'utf8'));
const i = man.cities.findIndex(c => c.id === city);
const prevFree = i >= 0 ? man.cities[i].free : true;
const entry = { id: city, name: 'Tokyo', file: `data/${city}.json`, center, bounds, free: prevFree };
if (i >= 0) man.cities[i] = entry; else man.cities.push(entry);
fs.writeFileSync('data/manifest.json', JSON.stringify(man, null, 1));

// validate + bump SW
const check = JSON.parse(fs.readFileSync(`data/${city}.json`, 'utf8'));
const ids = check.places.map(p => p.id), dup = ids.filter((v, idx) => ids.indexOf(v) !== idx);
const META = /\btabelog\b|食べログ|席数|予算|口コミ|掲載/i;
const leaks = check.places.filter(p => { const cb = p.chef_bio || {}; return META.test([cb.background, cb.specialty, cb.philosophy, ...arr(cb.anecdotes).map(a => a.text)].filter(Boolean).join(' ')); }).map(p => p.name);
for (const f of ['sw.js', 'index.html']) { let s = fs.readFileSync(f, 'utf8'); const m = s.match(/dcd-v(\d+)/); if (m) s = s.split(`dcd-v${m[1]}`).join(`dcd-v${Number(m[1]) + 1}`); fs.writeFileSync(f, s); }
console.log(`Tokyo: seed ${before} + new ${added.length} = ${check.places.length} | skipped ${skipped.length}`);
console.log('skipped sample:', skipped.slice(0, 20));
console.log('category:', JSON.stringify(catCount), '| cuisine:', JSON.stringify(czCount));
console.log('dup ids:', dup.length ? dup : 'none', '| meta leaks:', leaks.length ? leaks : 'NONE', '| manifest:', i >= 0 ? 'updated' : 'added', '| free:', prevFree, '| SW bumped');
