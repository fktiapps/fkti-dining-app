import fs from 'fs';
const OUT = process.argv[2];
if (!OUT) throw new Error('usage: node merge-content.mjs <workflow-output-path>');
const top = JSON.parse(fs.readFileSync(OUT, 'utf8'));
const results = (top.result || top).results;
if (!Array.isArray(results)) throw new Error('no results array');

const byId = new Map(results.map(r => [r.id, r]));
const d = JSON.parse(fs.readFileSync('data/kyoto.json', 'utf8'));
const arr = a => Array.isArray(a) ? a : [];
const cleanAnec = a => arr(a).filter(x => x && x.text).map(x => ({ text: x.text, source: x.source || '' }));

let merged = 0; const bioConf = {}, safConf = {};
for (const p of d.places) {
  const r = byId.get(p.id);
  if (!r) continue;
  const b = r.bio || {}, s = r.safety || {};
  p.chef_bio = {
    chef_name: b.chef_name ?? null,
    roles: arr(b.roles).length ? b.roles : ['owner'],
    origin: b.origin ?? null,
    background: b.background ?? null,
    philosophy: b.philosophy ?? null,
    specialty: b.specialty ?? null,
    anecdotes: cleanAnec(b.anecdotes),
    japanese_sources_summary: '',
    confidence: ['high', 'medium', 'low', 'none'].includes(b.confidence) ? b.confidence : 'none',
    sources: arr(b.sources),
  };
  p.safety = {
    dedicated_fryer: typeof s.dedicated_fryer === 'boolean' ? s.dedicated_fryer : null,
    gf_cross_contamination: cleanAnec(s.gf_cross_contamination),
    soy_sauce_wheat: cleanAnec(s.soy_sauce_wheat),
    vegan_cross_contact: cleanAnec(s.vegan_cross_contact),
    staff_allergy_handling: cleanAnec(s.staff_allergy_handling),
    positives: cleanAnec(s.positives),
    confidence: ['high', 'medium', 'low', 'none'].includes(s.confidence) ? s.confidence : 'none',
    last_checked: '2026-06-22',
  };
  bioConf[p.chef_bio.confidence] = (bioConf[p.chef_bio.confidence] || 0) + 1;
  safConf[p.safety.confidence] = (safConf[p.safety.confidence] || 0) + 1;
  merged++;
}

const META = /tabelog|席数|予算|口コミ|proxy|overwhelmingly japanese|not a counted ratio|食べログ|掲載/i;
const leaks = [];
for (const p of d.places) {
  const cb = p.chef_bio || {};
  const blob = [cb.background, cb.specialty, cb.philosophy, cb.japanese_sources_summary, ...arr(cb.anecdotes).map(a => a.text)].filter(Boolean).join(' ');
  if (META.test(blob)) leaks.push(p.name);
}

function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }
fs.writeFileSync('data/kyoto.json', ser(d));
const check = JSON.parse(fs.readFileSync('data/kyoto.json', 'utf8'));
console.log('merged:', merged, '| places:', check.places.length, '| all have safety:', check.places.every(p => p.safety));
console.log('bio confidence (merged):', JSON.stringify(bioConf), '| safety:', JSON.stringify(safConf));
console.log('META leaks:', leaks.length ? leaks : 'NONE');
