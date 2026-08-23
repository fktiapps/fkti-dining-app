// Apply REVIEW_PROTOCOL.md pass-3 verdicts to the city data.
//
// Protocol §4 splits this two ways and the split matters:
//   - Auto-downgrades apply IMMEDIATELY. More caution is always safe.
//   - Anything still sitting at dedicated/high afterwards -- whether the auditor
//     said keep, or downgraded dedicated->high -- goes on Greg's worklist and is
//     NOT stamped as gated here. Claude never finalizes "safe".
//
// The full verdict is recorded on the record as safety.gf_review so a future
// caretaker can re-audit without re-researching.
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';
import { GF_LABEL as LABEL, setTier } from './lib-tiers.mjs';

const DATE = new Date().toISOString().slice(0, 10);
const TOP = new Set(['dedicated', 'high']);

const dir = 'data/_gf_audit_verdicts';
const verdicts = fs.readdirSync(dir)
  .filter(f => f.endsWith('.json'))
  .flatMap(f => JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf8')));

const byId = new Map(verdicts.map(v => [v.id, v]));
console.log(`${verdicts.length} verdicts loaded\n`);

const applied = [], pending = [], missing = [];
let gated = 0;

for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;

  for (const r of j.places) {
    const v = byId.get(r.id);
    if (!v) continue;
    byId.delete(r.id);

    // THE HUMAN GATE IS FINAL. Once Greg has signed off, no machine pass may move
    // the tier — not this one, not a later re-run. Without this guard a rebuild
    // silently reverted three of his decisions, which is precisely the failure
    // this protocol exists to prevent.
    if (r.safety?.owner_signoff?.decision) { gated++; continue; }

    // `from` must come from the verdict, not the live record: this script is
    // re-run as shards land, and by then the record already carries the new tier.
    // Reading it off the record would silently erase the original label.
    const from = v.current_tier || r.gf_confidence;
    const to = v.recommended_tier;

    // the audit itself, recorded regardless of outcome.
    // gf_review lives at the TOP LEVEL of a record — that is where the existing
    // Japanese-first re-audits already write it. Do not move it under safety.
    r.safety = r.safety || {};
    r.gf_review = {
      protocol: 'REVIEW_PROTOCOL.md pass 3 (adversarial)',
      date: DATE,
      by: 'Claude (adversarial pass)',
      verdict: v.verdict,
      from, to,
      why: v.reasoning,
      independent_source_count: v.independent_source_count ?? null,
      red_flags: v.red_flags || [],
      plain_rice: v.plain_rice ?? null,
      identity_ok: v.identity_ok !== false,
      identity_note: v.identity_note || null,
      sources: v.sources || [],
    };
    r.safety.last_checked = DATE;

    if (r.gf_confidence !== to) {
      setTier(r, 'gf_confidence', to, { by: 'adversarial GF review', why: v.reasoning });
      const note = `[Adversarial GF review ${DATE}: ${from}→${to}. ${v.reasoning}]`;
      if (!String(r.gf_detail || '').includes('Adversarial GF review'))
        r.gf_detail = `${note} ${r.gf_detail || ''}`.trim();
      applied.push(`${city}\t${from}→${to}\t${r.name}`);
      dirty = true;
    }

    // still top-tier after the pass? then it is NOT cleared -- Greg gates it.
    if (TOP.has(r.gf_confidence)) {
      pending.push({ city, id: r.id, name: r.name, tier: r.gf_confidence,
                     why: v.reasoning, flags: v.red_flags || [],
                     srcs: v.independent_source_count ?? null,
                     identity: v.identity_ok === false ? v.identity_note : null });
    }
    dirty = true;
  }
  if (dirty) writeCity(city, j);
}

for (const [id, v] of byId) missing.push(`${v.city} ${id} ${v.name}`);

console.log(`tier changes applied: ${applied.length}   skipped (human-gated, untouchable): ${gated}`);
applied.forEach(a => console.log('  ' + a));
console.log(`\nstill dedicated/high -> Greg's gate: ${pending.length}`);
if (missing.length) { console.log(`\nverdicts with no matching record (${missing.length}):`); missing.forEach(m => console.log('  ' + m)); }

fs.writeFileSync('data/_gf_greg_worklist.json', JSON.stringify(pending, null, 1));
