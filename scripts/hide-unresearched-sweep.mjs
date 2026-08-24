// Hide the Tokyo 3-mile sweep records, and stop leaking the pipeline into the app.
//
// The 3-mile sweep was a DISCOVERY pass: it found business names inside a radius and
// wrote a placeholder record for each. 275 of those records are still placeholders.
// Measured 2026-08-24 over the 230 that were visible:
//
//     menu entry        0%      (rest of Tokyo: 17%)
//     hours             0%      (rest of Tokyo: 100%)
//     website          15%      (rest of Tokyo: 100%)
//     menu_url         16%      (rest of Tokyo: 100%)
//     real chef_bio     0%      — all 230 carry a chef_bio object with
//                                 confidence:"none" and every field null
//
// 164 of them shared a byte-identical gf_detail ("Inferred from cuisine type — not
// individually verified"), hours_raw was the string "Hours unverified — confirm.",
// and cultural_comfort was one boilerplate line. So the detail panel rendered four
// sentences that all said "we don't know" and nothing else.
//
// Worse, `notes` — which the app renders under "What makes this place special?" —
// read:
//
//   [Tokyo 3-mile sweep] 天ぷら/寿司 · 京橋 (Kyobashi) · 📍 Approx. pin (neighborhood)
//   · from the Tokyo 3-mile sweep — confirm details on site.
//
// Every one of the 275 matched that pattern exactly. The only fact in it that is not
// already a field on the record is which internal pass created it, which is the one
// thing a traveller has no use for. Greg, 2026-08-24: "the only piece of information,
// aside from the name, is a piece of information entirely irrelevant to the user, that
// should be a behind-the-scenes programming detail, not a user-facing datum."
//
// So: hide them until they have been researched properly, move the provenance to a
// field the app does not render, and keep the one genuinely useful bit (that the pin
// is a neighbourhood approximation, not a surveyed address) as structured data.
//
// This is reversible by design — un-hiding is what finishing the research looks like.
// `hidden` is a REASON STRING in this dataset, not a boolean, and the reason here is
// deliberately not "closed": gen-underrated-queue.mjs restores records hidden as
// "closed", and these are not closed, they are unresearched.
//
//   node scripts/hide-unresearched-sweep.mjs [--apply]

import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const MARKER = '3-mile sweep';
const PASS = 'tokyo-3mile-sweep';
// Every one of the 275 matches this. Anything that does not is left completely alone
// rather than guessed at — a record that drifted from the template may have been
// edited by hand since, and hand-written prose is exactly what must not be discarded.
const BOILERPLATE =
  /^\[Tokyo 3-mile sweep\] .*from the Tokyo 3-mile sweep — confirm details on site\.$/;

let hid = 0, alreadyHidden = 0, stripped = 0, skippedNotes = 0, seen = 0, signedOff = 0, unhidSigned = 0;
const examples = [];

for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;

  for (const r of j.places) {
    // Match on EITHER the original notes marker or the tag this script writes. Keying
    // only on the marker made the script a one-shot: the first run strips the notes it
    // matches on, so the second run finds nothing and silently reports success. That
    // matters because re-running is the recovery path — a pass that clears `hidden`
    // is repaired by fixing the pass and re-running this.
    if (!String(r.notes || '').includes(MARKER) && r.source_pass !== PASS) continue;
    seen++;

    // Provenance belongs on the record, not in the reader's face.
    if (r.source_pass !== PASS) { r.source_pass = PASS; dirty = true; }

    if (BOILERPLATE.test(String(r.notes).trim())) {
      // "📍 Approx. pin (neighborhood)" is the one real fact in the sentence: the
      // coordinates are a neighbourhood centroid, not the shop's door. Keep it as a
      // field so the app can badge it honestly instead of burying it in prose.
      if (String(r.notes).includes('Approx. pin')) r.pin_accuracy = 'approximate';
      delete r.notes;
      stripped++; dirty = true;
    } else if (r.notes) {
      // Only count a record that still HAS notes. Counting the ones this script already
      // stripped made a clean re-run report "275 left alone", which reads like a refusal.
      skippedNotes++;
    }

    // NEVER hide a record that passed the human gate. A sign-off means Greg read the
    // evidence and ruled on the tier, so "unresearched" is false on its face — and the
    // records it caught were the worst possible ones to lose: 4 of the 10 are
    // `dedicated` GF (Oh Nana!, both T's Kitchen entries, RICE HACK), which is exactly
    // what a coeliac opens this app to find. 味農家 was among them too, hidden in the
    // same breath as fixing the pass that had been overriding its sign-off.
    //
    // Thin data is a reason to research a record, not to bury one already vouched for.
    if (r.safety?.owner_signoff) {
      if (r.hidden === 'unresearched') { delete r.hidden; unhidSigned++; dirty = true; }
      signedOff++;
      continue;
    }

    if (r.hidden) {
      // Already hidden for a better-specified reason (closed, not-in-city). Leave it.
      alreadyHidden++;
    } else {
      r.hidden = 'unresearched';
      hid++; dirty = true;
      if (examples.length < 5) examples.push(`${city}/${r.id}  ${String(r.name).slice(0, 34)}`);
    }
  }

  if (dirty && APPLY) writeCity(city, j);
}

console.log(`sweep records found:            ${seen}`);
console.log(`  hidden as "unresearched":     ${hid}`);
console.log(`  already hidden (left as-is):  ${alreadyHidden}`);
console.log(`  boilerplate notes removed:    ${stripped}`);
if (signedOff) console.log(`  owner sign-off, never hidden:  ${signedOff}` + (unhidSigned ? ` (${unhidSigned} un-hidden by this run)` : ""));
if (skippedNotes) console.log(`  notes left alone (not boilerplate, may be hand-written): ${skippedNotes}`);
if (examples.length) {
  console.log('\nexamples:');
  for (const e of examples) console.log(`  ${e}`);
}
if (!APPLY) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
