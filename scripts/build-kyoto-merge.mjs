// Merge discovered Kyoto ramen shops into EXISTING data/kyoto.json (append). Reads data/_kyoto_ramen_disc.json.
import fs from 'fs';
const kept = JSON.parse(fs.readFileSync('data/_kyoto_ramen_disc.json', 'utf8'));
const city = JSON.parse(fs.readFileSync('data/kyoto.json', 'utf8'));

const KYO = [35.0035, 135.7689];
const hav = (a, b, c, d) => { const R = 6371, t = Math.PI / 180; const x = Math.sin((c - a) * t / 2) ** 2 + Math.cos(a * t) * Math.cos(c * t) * Math.sin((d - b) * t / 2) ** 2; return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x)); };
const inbox = r => r.lat != null && r.lat >= 34.93 && r.lat <= 35.13 && r.lng >= 135.66 && r.lng <= 135.83;
const norm = s => (s || '').replace(/[\s　・（）()「」、,.。\-本店店]/g, '').toLowerCase();
const jpName = n => (n || '').replace(/\s*[（(][^）)]*[）)]\s*$/, '').trim();

const RULES = [
  ['unagi', /unagi|鰻|eel|うなぎ/i], ['sushi', /sushi|寿司|鮨/i], ['katsu', /tonkatsu|とんかつ|katsudon|カツ|cutlet/i],
  ['tempura', /tempura|天ぷら|天麩羅/i], ['yakitori', /yakitori|焼き鳥|焼鳥|kushiyaki|kushikatsu|串揚|串焼/i],
  ['okonomiyaki', /okonomiyaki|お好み焼|鉄板|teppan/i], ['oden', /oden|おでん|関東煮/i], ['gyoza', /gyoza|餃子|ぎょうざ|ギョーザ/i],
  ['tofu', /豆腐|tofu|湯葉|yuba/i],
  ['ramen', /ramen|ラーメン|中華そば|町中華|中華料理|chinese|chūka|chuka|つけ麺|tsukemen|まぜそば|油そば|abura.?soba|担々|担担|tantan|二郎|niboshi|煮干|鶏白湯|paitan/i],
  ['udon_soba', /soba|udon|そば|うどん|蕎麦/i], ['shojin', /shojin|shōjin|精進|temple|buddhist/i],
  ['kaiseki', /kaiseki|会席|懐石|kapp[oōう]|割烹|郷土料理|小料理/i],
  ['kissaten', /kissaten|喫茶|純喫茶|coffee|caf[eé]|珈琲|pancake|パンケーキ/i],
  ['yoshoku', /yoshoku|yōshoku|洋食|western|hamburg|ハンバーグ|オムライス|グリル|grill|bistro|french|italian|pasta|カレー|curry/i],
  ['obanzai', /obanzai|おばんざい|家庭料理|organic|オーガニック|vegan|ヴィーガン|ベジ/i],
  ['donburi', /donburi|丼|どんぶり|rice bowl/i], ['izakaya', /izakaya|居酒屋|sake bar|日本酒バー/i],
  ['shokudo', /shokud|食堂|定食|teishoku|diner|canteen|麺類/i], ['sweets', /sweets|bakery|パン|ケーキ|和菓子|甘味|sweet/i],
];
const classify = (cuisine, name, cat) => { const hay = `${cuisine || ''} ${name || ''}`; for (const [t, re] of RULES) if (re.test(hay)) return t; if (cat === 'SHOJIN') return 'shojin'; return 'other'; };
const slugify = s => (s || '').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 24);
const veganLabel = v => ({ full: 'Fully vegan', options: 'Vegan options', limited: 'Limited vegan options', ask: 'Vegan — ask', no: 'Not vegan' }[v] || 'Ask');
const gfLabel = g => ({ dedicated: 'Dedicated gluten-free', high: 'Strong GF focus', options: 'Some GF options', ask: 'GF — ask', no: 'Not gluten-free' }[g] || 'Ask');
const cleanCuisine = s => (s || '').split(/[—(（;]/)[0].replace(/[、,\s]+$/, '').trim().slice(0, 44) || 'Ramen';
const gmapsLink = (name, addr) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(name + ' ' + (addr || '').replace(/〒\d{3}-?\d{4}\s*/, '').replace(/\s+\S*(ビル|会館|館).*$/, ''));
const parseDay = s => { if (!s || /^(closed|休|定休)/i.test(s.trim())) return []; return s.split(',').map(r => { const m = r.trim().match(/^(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})$/); return m ? [m[1].padStart(5, '0'), m[2].padStart(5, '0')] : null; }).filter(Boolean); };
const arr = a => Array.isArray(a) ? a : [];
const cleanAnec = a => arr(a).filter(x => x && x.text).map(x => ({ text: x.text, source: x.source || '' }));

const seen = new Set(city.places.map(p => norm(jpName(p.name))));
const usedSlugs = new Set(city.places.map(p => p.id));
const added = [], skipped = [], catCount = {}, czCount = {};
for (const r of kept) {
  const nk = norm(r.name_ja);
  if (seen.has(nk)) { skipped.push(r.name_ja + ' (dup-existing)'); continue; } seen.add(nk);
  if (!inbox(r)) { skipped.push(r.name_ja + ' (coord)'); continue; }
  const dist = hav(KYO[0], KYO[1], r.lat, r.lng);
  if (dist > 12) { skipped.push(`${r.name_ja} (${dist.toFixed(1)}km — beyond scope)`); continue; }
  const hours = {}; let openLate = false;
  for (let i = 0; i < 7; i++) { const day = parseDay((r.hours_week || [])[i] || 'closed'); hours[String(i)] = day; for (const [, c] of day) if (c >= '22:00' || c <= '03:00') openLate = true; }
  let base = slugify(r.name_en) || 'kyr', id = 'kyr_' + base, n = 2;
  while (usedSlugs.has(id)) id = 'kyr_' + base + '_' + n++;
  usedSlugs.add(id);
  const nameEn = (r.name_en || '').slice(0, 44);
  const cat = ['BOTH', 'GF', 'VEGAN', 'SHOJIN', 'OMNI', 'MOM_AND_POP'].includes(r.category) ? r.category : 'MOM_AND_POP';
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
    website: r.official_url || tab || null,
    gmaps: gmapsLink(r.name_ja, r.address_ja),
    notes: `${mpPrefix}${(b.background || r.gf_detail || '').slice(0, 280)}`.trim(),
    menu_url: tab ? tab.replace(/\/?$/, '/') + 'dtlmenu/' : null,
    chef_bio: { chef_name: b.chef_name ?? null, roles: arr(b.roles).length ? b.roles : ['owner'], origin: b.origin ?? null, background: b.background ?? null, philosophy: b.philosophy ?? null, specialty: b.specialty ?? null, anecdotes: cleanAnec(b.anecdotes), japanese_sources_summary: '', confidence: ['high', 'medium', 'low', 'none'].includes(b.confidence) ? b.confidence : 'none', sources: arr(b.sources) },
    safety: { dedicated_fryer: typeof s.dedicated_fryer === 'boolean' ? s.dedicated_fryer : null, gf_cross_contamination: cleanAnec(s.gf_cross_contamination), soy_sauce_wheat: cleanAnec(s.soy_sauce_wheat), vegan_cross_contact: cleanAnec(s.vegan_cross_contact), staff_allergy_handling: cleanAnec(s.staff_allergy_handling), positives: cleanAnec(s.positives), confidence: ['high', 'medium', 'low', 'none'].includes(s.confidence) ? s.confidence : 'none', last_checked: '2026-06-25' },
    dcp: null,
    cultural_comfort: { level: ['guide_only', 'japanese', 'konnichiwa', 'english'].includes(r.cultural_comfort_level) ? r.cultural_comfort_level : 'japanese', note: r.cultural_comfort_note || 'A local Kyoto ramen shop; a little Japanese or pointing helps.' },
  });
}
const before = city.places.length;
city.places = city.places.concat(added);
function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }
fs.writeFileSync('data/kyoto.json', ser(city));
const check = JSON.parse(fs.readFileSync('data/kyoto.json', 'utf8'));
const ids = check.places.map(p => p.id), dup = ids.filter((v, i) => ids.indexOf(v) !== i);
const META = /\btabelog\b|食べログ|席数|予算|口コミ|掲載/i;
const leaks = check.places.filter(p => { const cb = p.chef_bio || {}; return META.test([cb.background, cb.specialty, cb.philosophy, ...arr(cb.anecdotes).map(a => a.text)].filter(Boolean).join(' ')); }).map(p => p.name);
console.log(`added: ${added.length} | skipped: ${skipped.length}`, skipped.slice(0, 20));
console.log(`places: ${before} → ${check.places.length} | new ramen: ${czCount.ramen || 0} | category:`, JSON.stringify(catCount));
console.log('dup ids:', dup.length ? dup : 'none', '| meta leaks:', leaks.length ? leaks : 'NONE');
console.log('NOTE: run `node scripts/gen-ramen-pass.mjs kyoto` + the ramen-pass workflow to enrich the new ramen shops with the `ramen` object.');
