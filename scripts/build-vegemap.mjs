import fs from 'fs';
const kept = JSON.parse(fs.readFileSync('data/_vm_kept.json', 'utf8'));

// coord fixes for the 2 recovered stragglers; drop the 2 out-of-scope/unplaceable
const COORD_FIX = { '茶房 半兵衛': [34.994888, 135.768555], 'ごはんぱん工房つぶつぶ': [35.020309, 135.782227] };
const DROP = new Set(['ヴィーガンカフェ クラウドエイト', 'アショカ 京都店']); // Maizuru (out of region); geocode unreliable

const path = 'data/kyoto.json';
let text = fs.readFileSync(path, 'utf8');
const existing = JSON.parse(text);
const existIds = new Set(existing.places.map(p => p.id));
const inbox = (lat, lng) => lat >= 34.85 && lat <= 35.15 && lng >= 135.6 && lng <= 135.86;

const slugify = s => (s || '').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 24);
const veganLabel = v => ({ full: 'Fully vegan', options: 'Vegan options', limited: 'Limited vegan options', ask: 'Vegan — ask', no: 'Not vegan' }[v] || 'Ask');
const gfLabel = g => ({ dedicated: 'Dedicated gluten-free', high: 'Strong GF focus', options: 'Some GF options', ask: 'GF — ask', no: 'Not gluten-free' }[g] || 'Ask');
const cleanCuisine = s => (s || '').split(/[—(（;]/)[0].replace(/[、,\s]+$/, '').trim().slice(0, 44) || 'Vegan';
const gmapsLink = (name, addr) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(name + ' ' + (addr || '').replace(/〒\d{3}-?\d{4}\s*/, '').replace(/\s+\S*(ビル|会館).*$/, ''));
const parseDay = s => { if (!s || /^(closed|休|定休)/i.test(s.trim())) return []; return s.split(',').map(r => { const m = r.trim().match(/^(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})$/); return m ? [m[1].padStart(5, '0'), m[2].padStart(5, '0')] : null; }).filter(Boolean); };
const arr = a => Array.isArray(a) ? a : [];
const cleanAnec = a => arr(a).filter(x => x && x.text).map(x => ({ text: x.text, source: x.source || '' }));

const built = [], usedSlugs = new Set(), skipped = [], catCount = {};
for (const r of kept) {
  if (DROP.has(r.name_ja)) { skipped.push(r.name_ja + ' (dropped)'); continue; }
  let lat = r.lat, lng = r.lng;
  if (COORD_FIX[r.name_ja]) [lat, lng] = COORD_FIX[r.name_ja];
  if (lat == null || lng == null || !inbox(lat, lng)) { skipped.push(r.name_ja + ' (no/bad coord)'); continue; }

  const hours = {}; let openLate = false;
  for (let i = 0; i < 7; i++) { const day = parseDay((r.hours_week || [])[i] || 'closed'); hours[String(i)] = day; for (const [, c] of day) if (c >= '22:00' || c <= '03:00') openLate = true; }
  let base = slugify(r.name_en) || 'vm', id = 'vm_' + base, n = 2;
  while (existIds.has(id) || usedSlugs.has(id)) id = 'vm_' + base + '_' + n++;
  usedSlugs.add(id);
  const nameEn = (r.name_en || '').slice(0, 40);
  const cat = ['BOTH', 'VEGAN', 'SHOJIN', 'OMNI'].includes(r.category) ? r.category : 'VEGAN';
  catCount[cat] = (catCount[cat] || 0) + 1;
  const b = r.bio || {}, s = r.safety || {};
  built.push({
    id, name: nameEn ? `${r.name_ja} (${nameEn})` : r.name_ja, category: cat, lat, lng,
    gf_confidence: ['dedicated', 'high', 'options', 'ask', 'no'].includes(r.gf_confidence) ? r.gf_confidence : 'ask',
    gf_label: gfLabel(r.gf_confidence), gf_detail: r.gf_detail || 'Ask about gluten-free options.',
    vegan_status: ['full', 'options', 'limited', 'ask', 'no'].includes(r.vegan_status) ? r.vegan_status : 'ask',
    vegan_label: veganLabel(r.vegan_status), vegan_detail: r.vegan_detail || '',
    hours_raw: r.hours_raw || '', hours, hours_status: r.hours_status === 'irregular' ? 'irregular' : 'regular',
    flags: { reservation: !!r.reservation_required, cash_only: false, halal: false, open_late: openLate },
    neighborhood: (r.neighborhood || '').slice(0, 60), cuisine: cleanCuisine(r.cuisine),
    website: r.official_url || r.tabelog_url || null,
    gmaps: gmapsLink(r.name_ja, r.address_ja),
    notes: `[VegeMap-sourced · ${cat === 'OMNI' ? 'vegan options' : 'vegan/vegetarian'}] ${(b.background || r.vegan_detail || '').slice(0, 260)}`.trim(),
    menu_url: r.tabelog_url ? r.tabelog_url.replace(/\/?$/, '/') + 'dtlmenu/' : null,
    chef_bio: {
      chef_name: b.chef_name ?? null, roles: arr(b.roles).length ? b.roles : ['owner'], origin: b.origin ?? null,
      background: b.background ?? null, philosophy: b.philosophy ?? null, specialty: b.specialty ?? null,
      anecdotes: cleanAnec(b.anecdotes), japanese_sources_summary: '',
      confidence: ['high', 'medium', 'low', 'none'].includes(b.confidence) ? b.confidence : 'none', sources: arr(b.sources),
    },
    safety: {
      dedicated_fryer: typeof s.dedicated_fryer === 'boolean' ? s.dedicated_fryer : null,
      gf_cross_contamination: cleanAnec(s.gf_cross_contamination), soy_sauce_wheat: cleanAnec(s.soy_sauce_wheat),
      vegan_cross_contact: cleanAnec(s.vegan_cross_contact), staff_allergy_handling: cleanAnec(s.staff_allergy_handling),
      positives: cleanAnec(s.positives), confidence: ['high', 'medium', 'low', 'none'].includes(s.confidence) ? s.confidence : 'none',
      last_checked: '2026-06-22',
    },
    dcp: null,
    cultural_comfort: { level: ['guide_only', 'japanese', 'konnichiwa', 'english'].includes(r.cultural_comfort_level) ? r.cultural_comfort_level : 'konnichiwa', note: r.cultural_comfort_note || 'Vegan-friendly spot; many such places in Kyoto are used to international visitors.' },
  });
}

function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }
const closeIdx = text.lastIndexOf(']');
text = text.slice(0, closeIdx) + ', ' + built.map(ser).join(', ') + text.slice(closeIdx);
const parsed = JSON.parse(text);
const ids = parsed.places.map(p => p.id), dup = ids.filter((v, i) => ids.indexOf(v) !== i);
if (dup.length) throw new Error('dup ids: ' + dup);
// meta-leak QC
const META = /tabelog|席数|予算|口コミ|食べログ|掲載/i;
const leaks = parsed.places.filter(p => { const cb = p.chef_bio || {}; return META.test([cb.background, cb.specialty, cb.philosophy, ...arr(cb.anecdotes).map(a => a.text)].filter(Boolean).join(' ')); }).map(p => p.name);
fs.writeFileSync(path, text);
console.log('added:', built.length, '| skipped:', skipped.length, skipped);
console.log('category spread:', JSON.stringify(catCount));
console.log('places now:', parsed.places.length, '| dup:', dup.length ? dup : 'none', '| new-record meta leaks:', leaks.filter(n => built.some(b => b.name === n)).length ? leaks : 'NONE');
