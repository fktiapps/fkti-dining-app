import fs from 'fs';
const recs = JSON.parse(fs.readFileSync('data/_backlog_final.json', 'utf8')).filter(r => !r.name_ja.includes('富久屋'));
const path = 'data/kyoto.json';
let text = fs.readFileSync(path, 'utf8');
const existing = JSON.parse(text);
const existIds = new Set(existing.places.map(p => p.id));

const cleanCuisine = s => (s || '').split(/[—(（;]|NOTE|self-described/i)[0].replace(/[、,\s]+$/, '').trim().slice(0, 40) || 'Japanese';
const slugify = s => (s || '').toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 24);
const veganLabel = v => ({ no: 'Not vegan', ask: 'Vegan — ask in advance', options: 'Some vegan options', limited: 'Limited vegan options', full: 'Fully vegan' }[v] || 'Ask');
const gmapsLink = (name, addr) => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(name + ' ' + (addr || '').replace(/\s+\S*(ビル|会館).*$/, ''));
const parseDay = s => {
  if (!s || /^(closed|休|定休)/i.test(s.trim())) return [];
  return s.split(',').map(r => { const m = r.trim().match(/^(\d{1,2}:\d{2})\s*-\s*(\d{1,2}:\d{2})$/); return m ? [m[1].padStart(5, '0'), m[2].padStart(5, '0')] : null; }).filter(Boolean);
};

const built = [], usedSlugs = new Set(), report = [];
for (const r of recs) {
  const hours = {}; let openLate = false;
  for (let i = 0; i < 7; i++) { const day = parseDay((r.hours_week || [])[i] || 'closed'); hours[String(i)] = day; for (const [, c] of day) if (c >= '22:00' || c <= '03:00') openLate = true; }
  let base = slugify(r.name_en) || 'kyoto', id = 'mp_' + base, n = 2;
  while (existIds.has(id) || usedSlugs.has(id)) id = 'mp_' + base + '_' + n++;
  usedSlugs.add(id);
  const nameEn = (r.name_en || '').slice(0, 40);
  const cuisine = cleanCuisine(r.cuisine);
  const tab = r.tabelog_url || '';
  built.push({
    id, name: nameEn ? `${r.name_ja} (${nameEn})` : r.name_ja, category: 'MOM_AND_POP',
    lat: r.lat, lng: r.lng,
    gf_confidence: 'ask', gf_label: 'Not GF-focused — ask staff',
    gf_detail: r.gf_detail || 'Wheat/soy/dashi-heavy; not confirmed celiac-safe — ask.',
    vegan_status: ['no','ask','options','limited','full'].includes(r.vegan_status) ? r.vegan_status : 'no',
    vegan_label: veganLabel(r.vegan_status), vegan_detail: r.vegan_detail || 'No vegan options confirmed.',
    hours_raw: r.hours_raw || '', hours, hours_status: r.hours_status === 'irregular' ? 'irregular' : 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: openLate },
    neighborhood: (r.neighborhood || '').slice(0, 48), cuisine,
    website: r.official_url || tab || null,
    gmaps: gmapsLink(r.name_ja, r.address_ja),
    notes: `[Mom & Pop] ${(r.ownership_note || r.chef_background || '').slice(0, 280)}`.trim(),
    menu_url: tab ? tab.replace(/\/?$/, '/') + 'dtlmenu/' : null,
    chef_bio: {  // placeholder — the bio/safety bake overwrites this
      chef_name: null, roles: ['owner'], origin: 'Kyoto',
      background: r.chef_background || null, philosophy: null, specialty: cuisine || null,
      anecdotes: [], japanese_sources_summary: '',
      confidence: ['high','medium','low','none'].includes(r.chef_confidence) ? r.chef_confidence : 'none',
      sources: (r.chef_sources && r.chef_sources.length ? r.chef_sources : [tab].filter(Boolean)),
    },
    dcp: null,
    cultural_comfort: { level: ['guide_only','japanese','konnichiwa','english'].includes(r.cultural_comfort_level) ? r.cultural_comfort_level : 'japanese', note: r.cultural_comfort_note || 'Japanese-oriented local spot; a little Japanese or pointing helps.' },
    // NOTE: no `safety` field yet — the content bake adds it (and the missing-safety filter targets these)
  });
  report.push(`${id}  ${cuisine}`);
}

function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }
const closeIdx = text.lastIndexOf(']');
text = text.slice(0, closeIdx) + ', ' + built.map(ser).join(', ') + text.slice(closeIdx);
const parsed = JSON.parse(text);
const ids = parsed.places.map(p => p.id), dup = ids.filter((v, i) => ids.indexOf(v) !== i);
if (dup.length) throw new Error('dup ids: ' + dup);
fs.writeFileSync(path, text);
console.log('added:', built.length, '| places now:', parsed.places.length, '| MOM_AND_POP:', parsed.places.filter(p => p.category === 'MOM_AND_POP').length, '| dup:', dup.length ? dup : 'none');
