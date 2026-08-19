// Merge the Tokyo deep-enrich results into tokyo.json.
//
// Tier handling follows REVIEW_PROTOCOL.md rather than trusting the enrichment
// pass wholesale. That pass was a general deep-enrich, NOT the adversarial
// pass-3 review, so:
//   - DOWNGRADES apply immediately at any confidence (more caution is always safe)
//   - ask -> options applies only at medium/high enrich confidence
//   - anything -> dedicated/high is NEVER auto-applied. A top-tier label is the
//     only way this app can over-promise, and it requires pass 3 + Greg's gate.
//     Those are recorded as gf_proposed_tier and queued for review.
import fs from 'node:fs';
import { readCity, writeCity } from './lib-city.mjs';

const RANK = { no: 0, ask: 1, options: 2, high: 3, dedicated: 4 };
const TOP = new Set(['dedicated', 'high']);
const DATE = '2026-08-19';

const enrich = JSON.parse(fs.readFileSync('data/_tokyo3_enrich.json', 'utf8'));
const j = readCity('tokyo');
const byId = new Map(j.places.map(p => [p.id, p]));

const filled = v => v !== null && v !== undefined && v !== '' &&
  !(Array.isArray(v) && !v.length) &&
  !(typeof v === 'object' && !Array.isArray(v) && !Object.keys(v).length);

const stats = { applied: 0, down: 0, up: 0, queued: 0, bios: 0, safety: 0, skipped: 0 };
const queue = [];

for (const e of enrich) {
  const r = byId.get(e.id);
  if (!r) { stats.skipped++; continue; }

  // --- plain content: fill anything the record lacks -------------------
  for (const f of ['cuisine', 'website', 'menu_url', 'hours_raw', 'hours_status', 'category']) {
    if (filled(e[f]) && !filled(r[f])) { r[f] = e[f]; }
  }
  if (filled(e.chef_bio)) {
    r.chef_bio = r.chef_bio || {};
    for (const [k, v] of Object.entries(e.chef_bio))
      if (filled(v) && !filled(r.chef_bio[k])) r.chef_bio[k] = v;
    if (filled(e.chef_bio.background)) stats.bios++;
  }
  if (filled(e.safety)) {
    r.safety = r.safety || {};
    for (const [k, v] of Object.entries(e.safety))
      if (filled(v) && !filled(r.safety[k])) r.safety[k] = v;
    stats.safety++;
  }
  if (filled(e.cultural_comfort) && !filled(r.cultural_comfort)) r.cultural_comfort = e.cultural_comfort;
  if (filled(e.gf_detail))    r.gf_detail    = e.gf_detail;
  if (filled(e.vegan_detail)) r.vegan_detail = e.vegan_detail;
  if (filled(e.vegan_status)) r.vegan_status = e.vegan_status;
  if (filled(e.sources)) { r.chef_bio = r.chef_bio || {}; if (!filled(r.chef_bio.sources)) r.chef_bio.sources = e.sources; }
  r.safety = r.safety || {};
  r.safety.last_checked = DATE;
  r.enrich_confidence = e.enrich_confidence;
  stats.applied++;

  // --- tier: gated by the protocol -------------------------------------
  const from = r.gf_confidence, to = e.gf_confidence;
  if (!to || to === from) continue;

  if (RANK[to] < RANK[from]) {                       // downgrade — always safe
    r.gf_confidence = to;
    r.gf_label = { dedicated:'Dedicated gluten-free', high:'Strong GF focus',
                   options:'Some GF options', ask:'GF — ask', no:'Not gluten-free' }[to];
    stats.down++;
  } else if (TOP.has(to)) {                          // promotion into top tier — never automatic
    r.gf_proposed_tier = { to, from, by: 'tokyo3 deep-enrich', date: DATE,
      confidence: e.enrich_confidence,
      note: 'Not applied: a dedicated/high label requires REVIEW_PROTOCOL.md pass 3 plus human sign-off.' };
    queue.push({ id: r.id, name: r.name, from, proposed: to, confidence: e.enrich_confidence });
    stats.queued++;
  } else if (e.enrich_confidence === 'high' || e.enrich_confidence === 'medium') {
    r.gf_confidence = to;                            // ask -> options, adequately evidenced
    r.gf_label = { options:'Some GF options', ask:'GF — ask' }[to] || r.gf_label;
    stats.up++;
  } else {
    stats.queued++;
    r.gf_proposed_tier = { to, from, by: 'tokyo3 deep-enrich', date: DATE,
      confidence: e.enrich_confidence, note: 'Not applied: low enrichment confidence.' };
    queue.push({ id: r.id, name: r.name, from, proposed: to, confidence: e.enrich_confidence });
  }
}

writeCity('tokyo', j);
fs.writeFileSync('data/_tokyo_tier_promotion_queue.json', JSON.stringify(queue, null, 1));
console.log(stats);
console.log(`\npromotions held for review: ${queue.length}`);
queue.filter(q => TOP.has(q.proposed)).forEach(q => console.log(`  ${q.from} -> ${q.proposed}  (${q.confidence})  ${q.name.slice(0, 46)}`));
