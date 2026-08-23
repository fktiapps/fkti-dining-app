// Apply an approved tranche of upgrades from data/_underrated_queue.json.
//
// This IS the human gate. REVIEW_PROTOCOL.md says Claude never finalises "safe", and
// nothing here decides anything — it records a decision Greg made, per tranche, and
// writes it as an owner_signoff so no later machine pass can quietly undo it. That
// guard exists because a rebuild silently reverted three of his decisions once before.
//
// Two things it will not do, whatever the tranche says:
//   - move a record that is hidden (nothing to promote)
//   - move a record carrying a DISPROVEN claim UP INTO A CLAIM TIER. The nuance is
//     that on these records the disproven claim is usually the reasoning that
//     justified the original "no" — 山代屋 was rated no because "the anagomeshi glaze
//     is soy-sauce based, which in Japan is TYPICALLY brewed with wheat", a guess
//     written as fact. That is precisely why it is queued for an upgrade, so blocking
//     on it gets the logic backwards.
//     The line is the destination, not the record: "ask" is definitionally "we do not
//     know", so it can never over-claim and is always allowed. options/limited/high/
//     dedicated/full assert something, and an assertion does not get to rest on a
//     record whose evidence the sweep just found wanting.
//
//   node scripts/apply-gate-tranche.mjs <A|B|C> [--apply]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const TRANCHE = (process.argv[2] || '').toUpperCase();
const APPLY = process.argv.includes('--apply');
// Greg can override the disproven-claim guard, but only ONE RECORD AT A TIME, by id.
// No blanket --force: the guard's whole value is that clearing it costs a person a
// deliberate look at what was disproven, and a flag that clears 20 at once is not a
// look. Each override is stamped into the signoff so the reasoning survives.
const OVERRIDE = new Set(process.argv.filter(a => a.startsWith('--override=')).flatMap(a => a.slice(11).split(',')));
if (!'ABC'.includes(TRANCHE)) { console.error('usage: apply-gate-tranche.mjs <A|B|C> [--apply]'); process.exit(1); }

const DATE = '2026-08-23';
const EV = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact','staff_allergy_handling','positives'];
const TOP = { gf_confidence: ['dedicated', 'high'], vegan_status: ['full'] };
const band = x => TOP[x.field].includes(x.recommended) ? 'A' : (x.current === 'no' ? 'C' : 'B');
const GF_LABEL = { dedicated:'Dedicated gluten-free', high:'Strong GF focus',
                   options:'Some GF options', ask:'GF — ask', no:'Not gluten-free' };
const VG_LABEL = { full:'Fully vegan', options:'Some vegan options',
                   limited:'Limited vegan', ask:'Vegan — ask', no:'Not vegan' };
// Count only the disproven claims that bear on the axis being moved. 玄米菜食 was held
// out of a GF upgrade by a disproven claim that its miso broth might not be bonito-free
// — true, worth knowing, and about dashi rather than gluten. A vegan finding is not
// evidence about wheat, and blocking on it just loses a celiac a documented GF menu.
const VEGAN_ONLY = new Set(['vegan_cross_contact']);
// ...except when the vegan claim names a wheat vector. Greg, 2026-08-23: "bonito dashi
// likely contains soy sauce (wheat)". He is right, and it is the more common case: a
// Japanese kitchen's 出汁 is usually built with 白だし, めんつゆ or だし醤油, every one of
// which is soy-sauce based, and soy sauce in Japan is brewed with wheat by default. So
// "is the dashi bonito-free?" and "is the dashi wheat-free?" are the same question
// asked by two different diners. A vegan finding that names broth, dashi, tare, miso or
// seasoning is GF evidence and counts on the GF axis; one about egg, dairy, honey or
// shared grills genuinely is not.
const WHEAT_VECTOR = /dashi|出汁|だし|broth|soup|stock|tare|タレ|たれ|soy ?sauce|醤油|しょうゆ|mentsuyu|めんつゆ|白だし|miso|味噌|seasoning|調味料|marinade|glaze|sauce/i;
const GF_ONLY = new Set(['gf_cross_contamination', 'soy_sauce_wheat']);
const disproven = (r, field) => EV.reduce((n, f) => {
  const rel = ((r.safety?.[f]) || []).filter(e => typeof e === 'object' && e.unsupported);
  if (field === 'gf_confidence' && VEGAN_ONLY.has(f))
    return n + rel.filter(e => WHEAT_VECTOR.test(String(e.text || ''))).length;
  if (field === 'vegan_status' && GF_ONLY.has(f)) return n;
  return n + rel.length;
}, 0);

// Refusals have to persist as durably as approvals. The queue is rebuilt from the
// agent verdict files on every rebuild, so a recommendation that was investigated and
// rejected comes back looking brand new — 杏もん堂 was reverted and re-promoted three
// times before this list existed.
const REJECTED = new Set();
if (fs.existsSync('data/_gate_rejections.json'))
  for (const x of JSON.parse(fs.readFileSync('data/_gate_rejections.json', 'utf8')).rejections || [])
    REJECTED.add(x.id + '|' + x.field);

const q = JSON.parse(fs.readFileSync('data/_underrated_queue.json', 'utf8'))
  .filter(x => band(x) === TRANCHE)
  .filter(x => !REJECTED.has(x.id + '|' + x.field));
const byCity = {};
for (const x of q) (byCity[x.city] = byCity[x.city] || []).push(x);

const applied = [], skipped = [];
for (const [city, rows] of Object.entries(byCity)) {
  const j = readCity(city); let dirty = false;
  for (const x of rows) {
    const r = j.places.find(p => p.id === x.id);
    if (!r) { skipped.push({ ...x, why: 'record not found' }); continue; }
    if (r.hidden) { skipped.push({ ...x, why: 'record is hidden (' + r.hidden + ')' }); continue; }
    // The disproven-claim guard is a GF rule, and Greg drew the line explicitly on
    // 2026-08-23: "cross contamination for GF causes physical injury, cross
    // contamination for a vegan causes moral injury at worst." The asymmetry this
    // project runs on — a false "safe" can glutenate a kid, a false "ask" only costs a
    // double-check — is about bodily harm, and it does not transfer to the vegan axis
    // at the same weight. Holding a vegan upgrade hostage to a disproven GF-style
    // claim buys nothing and costs a vegan traveller a meal they could have eaten.
    // So: gf_confidence still has to clear the guard. vegan_status does not.
    if (x.field === 'gf_confidence' && x.recommended !== 'ask' && disproven(r, x.field) && !OVERRIDE.has(x.id))
      { skipped.push({ ...x, why: `${disproven(r, x.field)} disproven claim(s) on the record, and "${x.recommended}" asserts something` }); continue; }
    if (r[x.field] !== x.current) { skipped.push({ ...x, why: `already at "${r[x.field]}"` }); continue; }

    r[x.field] = x.recommended;
    if (x.field === 'gf_confidence') r.gf_label = GF_LABEL[x.recommended];
    else r.vegan_label = VG_LABEL[x.recommended];
    // clear any hold this upgrade supersedes
    if (x.field === 'gf_confidence') delete r.gf_uncited_downgrade;
    r.safety = r.safety || {};
    // A record can move on BOTH axes in one tranche — 和栗白露 moved gf AND vegan — and a
    // single owner_signoff object means the second write erases the first, losing the
    // audit trail for a decision that was actually made. Keep the latest as
    // owner_signoff (readers depend on that shape) and append every one to a log.
    const signoff = { decision: 'approve', field: x.field, from: x.current, to: x.recommended,
      by: 'Greg', date: DATE, tranche: TRANCHE,
      overrode_disproven: OVERRIDE.has(x.id) && disproven(r, x.field) ? disproven(r, x.field) : undefined,
      reason: `Greg approved tranche ${TRANCHE} of the verification sweep's upgrade queue on ${DATE}. ` +
              `Evidence: ${String(x.why).replace(/\s+/g, ' ').slice(0, 320)}` };
    r.safety.owner_signoff = signoff;
    (r.safety.owner_signoff_log = (r.safety.owner_signoff_log || [])
      .filter(e => e.field !== x.field)).push(signoff);
    applied.push(x); dirty = true;
  }
  if (dirty && APPLY) writeCity(city, j);
}

console.log(`tranche ${TRANCHE}: ${applied.length} applied, ${skipped.length} skipped\n`);
for (const a of applied)
  console.log(`  ${a.city.padEnd(10)} ${String(a.name).slice(0, 32).padEnd(34)} ${a.field.replace('_confidence','').replace('_status','')} ${a.current} → ${a.recommended}`);
if (skipped.length) {
  console.log('\nskipped:');
  for (const s of skipped) console.log(`  ${s.city}/${String(s.name).slice(0, 30).padEnd(32)} ${s.why}`);
}
if (!APPLY) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
