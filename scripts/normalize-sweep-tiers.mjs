// Agents write the tier and then explain it in the same field: "options — and NOT
// higher, on the operator's own words", "full — confirmed, no change". The tier is
// there, in front, correct; the sentence after it is the reasoning. A consumer that
// requires an exact enum silently does nothing, which is how 味農家 came to sit at
// "ask" while both the sweep and Greg's sign-off said "options".
//
// Parse, then validate — never simply reject. The same rule the underrated-queue
// router uses, for the same reason: rejecting a well-reasoned verdict over its
// punctuation throws away the research and leaves the record wrong.
//
//   node scripts/normalize-sweep-tiers.mjs [--apply]
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const TIERS = { gf_confidence: new Set(['dedicated', 'high', 'options', 'ask', 'no']),
                vegan_status:  new Set(['full', 'options', 'limited', 'ask', 'no']) };
const LABEL = {
  gf_confidence: { dedicated: 'Dedicated gluten-free', high: 'Strong GF focus',
                   options: 'Some GF options', ask: 'GF — ask', no: 'Not gluten-free' },
  vegan_status:  { full: 'Fully vegan', options: 'Some vegan options',
                   limited: 'Limited vegan', ask: 'Vegan — ask', no: 'Not vegan' },
};
const tierOf = (field, v) => {
  const raw = String(v == null ? '' : v).trim().toLowerCase();
  const ok = TIERS[field];
  if (ok.has(raw)) return raw;
  const head = raw.split(/[^a-z]+/).filter(Boolean)[0];
  return ok.has(head) ? head : null;
};

const rows = [];
for (const city of CITIES) {
  const j = readCity(city); let dirty = false;
  for (const r of j.places) {
    const s = r.sweep_downgrade;
    if (!s || !TIERS[s.field]) continue;
    const to = tierOf(s.field, s.to), from = tierOf(s.field, s.from);
    if (to === null) { rows.push({ city, name: r.name, note: `unparseable .to="${String(s.to).slice(0, 60)}"` }); continue; }
    if (String(s.to) === to && String(s.from) === from) continue;

    // Keep the reasoning; it is the part worth reading. Move it beside the tier.
    if (String(s.to) !== to) { s.to_note = String(s.to); s.to = to; }
    if (from !== null && String(s.from) !== from) { s.from = from; }

    // Only move the record itself where Greg signed off on this axis at this tier.
    // A normalisation pass repairs a FIELD; it does not get to promote a shop.
    const sg = r.safety?.owner_signoff;
    const signed = sg?.decision && (sg.field || 'gf_confidence') === s.field && sg.to === to;
    let moved = null;
    if (signed && r[s.field] !== to) {
      moved = `${r[s.field]} -> ${to}`;
      r[s.field] = to;
      if (s.field === 'gf_confidence') r.gf_label = LABEL.gf_confidence[to];
      else r.vegan_label = LABEL.vegan_status[to];
    }
    rows.push({ city, name: r.name, field: s.field, to, note: s.to_note, moved, signed: !!signed });
    dirty = true;
  }
  if (dirty && APPLY) writeCity(city, j);
}

console.log(`${rows.length} sweep_downgrade field(s) normalised\n`);
for (const x of rows)
  console.log(`  ${x.city}/${String(x.name).slice(0, 26).padEnd(28)} ${x.field || ''} -> "${x.to || '?'}"` +
              (x.moved ? `   RECORD MOVED ${x.moved} (Greg signed off)` : x.signed === false ? '   field only' : ''));
if (!APPLY && rows.length) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
