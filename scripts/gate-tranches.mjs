// Group the upgrade queue into approval tranches by how much a wrong answer costs.
//
// 72 individual decisions is not a review, it is an endurance test. Banded by risk,
// most of them stop needing individual thought:
//
//   A  into a TOP tier (gf dedicated/high, vegan full). The only tier that can make
//      somebody stop checking for themselves. Every one read individually.
//   B  into a middle tier (gf/vegan options, limited from ask). A real claim, but one
//      that still tells the reader to confirm.
//   C  off the floor (no -> ask/limited/options). These are the FALSE WARNINGS: shops
//      we told people to avoid that are fine. By this project's own doctrine the risk
//      is asymmetric — a false "ask" makes someone double-check, a false "no" just
//      quietly costs them a meal — so these are the safest thing in the queue to
//      approve in bulk, and the ones most likely to matter to a hungry traveller.
//
//   node scripts/gate-tranches.mjs [A|B|C]
import fs from 'node:fs';
const q = JSON.parse(fs.readFileSync('data/_underrated_queue.json', 'utf8'));
const TOP = { gf_confidence: ['dedicated', 'high'], vegan_status: ['full'] };
const band = x => TOP[x.field].includes(x.recommended) ? 'A' : (x.current === 'no' ? 'C' : 'B');

const only = (process.argv[2] || '').toUpperCase();
const groups = { A: [], B: [], C: [] };
for (const x of q) groups[band(x)].push(x);

const LABEL = { A: 'into a TOP tier — read each one',
                B: 'into a middle tier — still says "confirm"',
                C: 'off "no" — false warnings, safest to bulk-approve' };

for (const [k, rows] of Object.entries(groups)) {
  if (only && only !== k) continue;
  console.log(`\n=== TRANCHE ${k}: ${rows.length} record(s) — ${LABEL[k]} ===\n`);
  rows.sort((a, b) => a.city.localeCompare(b.city));
  for (const x of rows) {
    const move = `${x.field.replace('_confidence', '').replace('_status', '')} ${x.current} → ${x.recommended}`;
    if (k === 'A' || only) {
      console.log(`  ${x.city}/${String(x.name).slice(0, 34)}`);
      console.log(`     ${move}`);
      console.log(`     ${String(x.why).replace(/\s+/g, ' ').slice(0, 300)}\n`);
    } else {
      console.log(`  ${x.city.padEnd(10)} ${String(x.name).slice(0, 32).padEnd(34)} ${move}`);
    }
  }
}
if (!only) console.log(`\n${groups.A.length} + ${groups.B.length} + ${groups.C.length} = ${q.length}`);
