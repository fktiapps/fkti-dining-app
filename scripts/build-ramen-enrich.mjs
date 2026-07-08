// Writes the `ramen` object from the ramen pass onto each place by id, per city.
import fs from 'fs';
const enriched = JSON.parse(fs.readFileSync('data/_ramen_enrich.json', 'utf8'));

const clamp = n => Math.max(0, Math.min(5, Math.round(Number(n) || 0)));
const arr = a => Array.isArray(a) ? a : [];
const META = /\btabelog\b|食べログ|席数|予算|口コミ|掲載|ミシュラン|michelin/i;
const strip = s => (typeof s === 'string' ? s : '');
const clean = r => {
  const n = r.noodles || {};
  let pantheon = strip(r.pantheon);
  let metaFlag = false;
  if (META.test(pantheon)) { metaFlag = true; } // flagged below, not auto-deleted
  return {
    obj: {
      broth_base: arr(r.broth_base), broth_texture: r.broth_texture || 'unknown', tare: arr(r.tare),
      aroma_oil: arr(r.aroma_oil), richness: r.richness || 'medium',
      noodles: { thickness: n.thickness || 'unknown', shape: n.shape || 'unknown', hydration: n.hydration || 'unknown', handmade: typeof n.handmade === 'boolean' ? n.handmade : null, notes: strip(n.notes) },
      regional_style: arr(r.regional_style), sub_genre: arr(r.sub_genre),
      signature_bowl: strip(r.signature_bowl), chashu: strip(r.chashu), notable_toppings: arr(r.notable_toppings),
      gf: { status: (r.gf && r.gf.status) || 'no', note: strip(r.gf && r.gf.note) },
      vegan: { status: (r.vegan && r.vegan.status) || 'no', note: strip(r.vegan && r.vegan.note) },
      pantheon,
      profile: { richness: clamp(r.profile?.richness), oiliness: clamp(r.profile?.oiliness), clarity: clamp(r.profile?.clarity), tare_strength: clamp(r.profile?.tare_strength), noodle_firmness: clamp(r.profile?.noodle_firmness), aroma_punch: clamp(r.profile?.aroma_punch) },
      confidence: ['high', 'medium', 'low', 'none'].includes(r.confidence) ? r.confidence : 'none',
      sources: arr(r.sources), last_checked: '2026-06-24',
    }, metaFlag,
  };
};

function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }

const byCity = {};
for (const e of enriched) (byCity[e.city] = byCity[e.city] || []).push(e);

let total = 0; const unmatched = [], metaLeaks = [];
for (const [city, list] of Object.entries(byCity)) {
  const path = `data/${city}.json`;
  const d = JSON.parse(fs.readFileSync(path, 'utf8'));
  const idx = new Map(d.places.map(p => [p.id, p]));
  let n = 0;
  for (const e of list) {
    const p = idx.get(e.id);
    if (!p) { unmatched.push(`${city}:${e.id}`); continue; }
    const { obj, metaFlag } = clean(e.ramen);
    if (metaFlag) metaLeaks.push(`${city}:${p.name}`);
    p.ramen = obj; n++;
  }
  fs.writeFileSync(path, ser(d));
  console.log(`${city}: enriched ${n} ramen places (of ${d.places.length})`);
  total += n;
}

// bump SW (generic: find current dcd-v<N> and increment)
let swv = '?';
for (const f of ['sw.js', 'index.html']) { let s = fs.readFileSync(f, 'utf8'); const m = s.match(/dcd-v(\d+)/); if (m) { swv = Number(m[1]) + 1; s = s.split(`dcd-v${m[1]}`).join(`dcd-v${swv}`); fs.writeFileSync(f, s); } }
console.log(`TOTAL ramen-enriched: ${total} | unmatched: ${unmatched.length ? unmatched : 'none'} | meta-leak pantheon (review): ${metaLeaks.length ? metaLeaks : 'NONE'} | SW -> dcd-v${swv}`);
