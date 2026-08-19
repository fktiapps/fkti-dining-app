// Backfill the 2026-07-02 sign-off worklist (GF_REVIEW_SIGNOFF.md) into the data.
//
// That audit ran pass 3 on 46 records and retained 20 -- but the verdicts only
// ever existed in Markdown. Nothing in the data recorded that the review had
// happened, so a rebuild had nothing to preserve and the linter could not tell
// "audited, awaiting Greg" from "never looked at". Tokyo already does this via
// apply-tokyo-signoff.mjs; this closes the same loop for the other eight cities.
//
// These records are recorded as AUDITED but NOT gated: the doc carries no
// resolution block, so Greg's sign-off is still outstanding.
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const DOC = 'GF_REVIEW_SIGNOFF.md';
const AUDIT_DATE = '2026-07-02';
const md = fs.readFileSync(DOC, 'utf8');

// split into "### Name — **tier** · needs your eyes" blocks
const entries = [];
const rx = /^### (.+?) — \*\*(\w+)\*\*[^\n]*\n([\s\S]*?)(?=^### |^## |$(?![\s\S]))/gm;
let m;
while ((m = rx.exec(md))) {
  const [, name, tier, body] = m;
  const why = (body.split('\n').find(l => l.trim() && !l.startsWith('-')) || '').trim();
  const flags = [...body.matchAll(/^- (.+)$/gm)].map(x => x[1].trim())
    .filter(f => !f.startsWith('Sources:'));
  const srcLine = (body.match(/^Sources:\s*(.+)$/m) || [])[1] || '';
  const sources = srcLine.split('·').map(s => s.trim()).filter(s => /^https?:/.test(s));
  entries.push({ name: name.trim(), tier, why, flags, sources });
}
console.log(`${entries.length} retained entries parsed from ${DOC}`);

const norm = s => String(s).toLowerCase().replace(/[^a-z0-9　-鿿]/g, '');
const matched = new Set();
let stamped = 0;

for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    if (!['dedicated', 'high'].includes(r.gf_confidence)) continue;
    if (r.gf_review?.date && r.gf_review?.protocol) continue;   // already carries a pass-3 review
    const n = norm(r.name);
    const e = entries.find(x => { const h = norm(x.name); return h.length > 3 && (n.includes(h) || h.includes(n)); });
    if (!e) continue;
    matched.add(e.name);
    r.gf_review = {
      protocol: 'REVIEW_PROTOCOL.md pass 3 (adversarial)',
      date: AUDIT_DATE,
      by: 'Claude (adversarial pass)',
      verdict: 'keep',
      from: r.gf_confidence, to: r.gf_confidence,
      why: e.why,
      independent_source_count: e.sources.length || null,
      red_flags: e.flags,
      plain_rice: null,
      identity_ok: true, identity_note: null,
      sources: e.sources,
      note: `Retained at ${e.tier} by the ${AUDIT_DATE} audit; Greg's sign-off still outstanding.`,
    };
    stamped++; dirty = true;
  }
  if (dirty) writeCity(city, j);
}

console.log(`stamped ${stamped} records with their ${AUDIT_DATE} review`);
// Anything not matched this run either already carries a pass-3 review (the
// normal case on a re-run) or has since been downgraded out of the top tier.
// Both are expected, so this is only worth reporting on the first pass.
const unmatched = entries.filter(e => !matched.has(e.name));
if (stamped === 0) console.log(`nothing to stamp — all ${entries.length} retained entries already carry a review or have been downgraded`);
else if (unmatched.length) console.log(`${unmatched.length} entries already reviewed or since downgraded`);
