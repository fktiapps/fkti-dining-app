// Merge the three duplicate pairs scripts/dedupe-sweep.mjs found, on explicit rulings.
//
// These are not collapsed by rule, because every pair carries a human gate decision and
// the cautious-merge default gets two of the three wrong:
//   - そらのいろ: the cautious tier is right, but only by accident. tokyo3_y_28 carries a
//     REFUSAL and its twin sits at the tier Greg refused, so "take the lower" happens to
//     honour him. Encode the refusal as the reason, not the arithmetic.
//   - 味農家: the cautious tier is "ask", which would overwrite Greg's "options" sign-off
//     on the other half of the same shop. His two sign-offs were never in conflict — they
//     were made on one restaurant that was in the data twice.
// So each pair below carries its tier and the evidence for it, in the style of
// apply-owner-signoff.mjs. Re-running is safe: a pair already merged is skipped.
//
//   node scripts/merge-sweep-dupes.mjs [--apply]

import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';
import { EVIDENCE_KEYS, setTier } from './lib-tiers.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-08-24';

const PAIRS = [
  {
    // Survivor is the record the gate artifacts already name: data/_gate_rejections.json
    // keys Greg's refusal to tokyo3_y_28. Merging into the other id would orphan it and
    // the refusal would stop matching.
    keep: 'tokyo3_y_28', drop: 'tokyo3__16', name: 'そらのいろ / ソラノイロ ニッポン',
    gf: 'ask', vegan: 'options',
    why: 'Same shop, same point, same first-party domain (soranoiro-vege.com), listed twice ' +
         'in hiragana and katakana. Greg REFUSED "options" for this record on 2026-08-23 — the ' +
         'separate-pot claim that was the whole safety case failed verification — while the ' +
         'duplicate sat at "options" the entire time. The refusal governs both halves: it was ' +
         'always one restaurant.',
  },
  {
    keep: 'tokyo3__225', drop: 'tokyo3__174', name: '味農家 / 味農家（みのや）',
    gf: 'options', vegan: 'full',
    why: 'Same shop, same first-party domain (minoyavege.com), listed twice. Greg signed off ' +
         'both halves on 2026-08-23 without either of us noticing they were one restaurant: ' +
         'gf_confidence -> "options" on tokyo3__174 and vegan_status -> "full" on tokyo3__225. ' +
         'The two rulings are not in conflict, so the merge keeps both rather than taking the ' +
         'cautious "ask", which would have silently overwritten one of them. ' +
         'Confirmed first-party on 2026-08-24: the site states 「お料理はすべてヴィーガン対応・' +
         'グルテンフリー。」 and 「出汁は昆布と野菜のみで丁寧に取り、動物性のものは使用しておりません。」 ' +
         'Kombu-and-vegetable dashi answers the vegan and the gluten question at once. GF stays ' +
         'at "options" and NOT higher: the claim is the shop\'s own with no independent ' +
         'first-hand corroboration, and a single source can never carry dedicated/high. The site ' +
         'also says nothing about 醤油, which in Japan is wheat by default.',
    // Greg ruled the GF tier on 2026-08-24, supplying the first-party line himself and
    // having been shown that the record carried disproven findings. Recorded as its own
    // dated sign-off rather than by editing his 2026-08-23 one, and with
    // overrode_disproven set, which is what tells enforce-cited-claims that the human
    // decided AFTER the failures rather than before them. The count is stored, not a
    // flag: if anything NEW is disproven later, the hold correctly re-applies.
    //
    // It is an honest override here because of WHICH findings failed. Two of the three
    // are pessimistic — "shared kitchen also produces a standard non-vegan/non-GF course"
    // and "separate standard course uses animal products" — and the site directly
    // contradicts both, so their disproof supports the shop rather than undermining it.
    // The third is optimistic (the chef reviewed all seasonings) and its loss does not
    // pull the tier below "options", which the shop's own all-dishes claim clears on its
    // own. None of the three carried a source at all.
    signoff: {
      decision: 'approve', field: 'gf_confidence', from: 'ask', to: 'options',
      by: 'Greg', date: DATE, overrode_disproven: 3,
      reason: 'Greg, 2026-08-24, quoting the shop: "All courses are vegan-friendly and ' +
        'gluten-free." Confirmed first-party the same day — minoyavege.com states ' +
        '「お料理はすべてヴィーガン対応・グルテンフリー。」 and 「出汁は昆布と野菜のみで丁寧に取り、' +
        '動物性のものは使用しておりません。」 Held at "options" and NOT higher: it is the shop\'s ' +
        'own claim with no independent first-hand corroboration, and a single source can ' +
        'never carry dedicated/high. The page says nothing about 醤油, which is wheat by ' +
        'default in Japan, so the cross-contamination caveat stands.',
    },
    claims: [{
      key: 'positives',
      text: 'The shop states all dishes are vegan-compatible and gluten-free 「お料理はすべて' +
            'ヴィーガン対応・グルテンフリー。」, and that the dashi is made from kombu and vegetables ' +
            'only with no animal products 「出汁は昆布と野菜のみで丁寧に取り、動物性のものは使用して' +
            'おりません。」. First-party claim, no independent corroboration — confirm 醤油 and ' +
            'seasonings with the kitchen, which the page does not address.',
      source: 'https://minoyavege.com/',
    }],
  },
  {
    keep: 'tokyo3_t_s_kitchen', drop: 'tokyo3__235', name: "T's Kitchen / ティーズキッチン 上野広小路店",
    gf: 'dedicated', vegan: 'options',
    why: 'Same shop, same branch suffix 上野広小路店, same first-party domain (glutenfree.co.jp), ' +
         'listed twice in romaji and katakana — the exact pair handoff lesson G names. Both ' +
         'halves carry the same Greg sign-off at "dedicated", so the merge changes no tier; it ' +
         'removes a second pin for one restaurant 2km from where the other put it.',
  },
];

const norm = t => String(t).replace(/\s+/g, ' ').trim().toLowerCase();

let merged = 0, skipped = 0;
for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;

  for (const P of PAIRS) {
    const keep = j.places.find(r => r.id === P.keep);
    const drop = j.places.find(r => r.id === P.drop);
    if (!keep) continue;
    if (!drop) { skipped++; continue; }          // already merged

    // Union the evidence. The duplicate was researched separately, so it usually holds
    // findings the survivor does not; dropping it would discard real sourced work.
    keep.safety = keep.safety || {};
    let added = 0;
    for (const k of EVIDENCE_KEYS) {
      const have = new Set((keep.safety[k] || []).map(e => norm(typeof e === 'string' ? e : e?.text)));
      for (const e of (drop.safety?.[k] || [])) {
        const t = norm(typeof e === 'string' ? e : e?.text);
        if (t && !have.has(t)) { (keep.safety[k] = keep.safety[k] || []).push(e); have.add(t); added++; }
      }
    }
    for (const c of (P.claims || [])) {
      const have = new Set((keep.safety[c.key] || []).map(e => norm(typeof e === 'string' ? e : e?.text)));
      if (!have.has(norm(c.text))) {
        (keep.safety[c.key] = keep.safety[c.key] || []).push({ text: c.text, source: c.source, verified: true });
        added++;
      }
    }

    // Both sign-offs survive. A record can be ruled on twice, on different axes, and a
    // single owner_signoff object loses the first — which is what the log is for.
    const log = keep.safety.owner_signoff_log = keep.safety.owner_signoff_log || [];
    for (const src of [drop, keep]) {
      const s = src.safety?.owner_signoff;
      if (s && !log.some(x => x.date === s.date && x.field === (s.field || 'gf_confidence') && x.to === s.to))
        log.push({ ...s, field: s.field || 'gf_confidence', from_record: src.id });
    }
    if (P.signoff && !log.some(x => x.date === P.signoff.date && x.field === P.signoff.field))
      log.push({ ...P.signoff });

    // Carry the OVERRIDE forward with the claims it covers.
    //
    // overrode_disproven records that Greg approved a tier AFTER reading the findings
    // that had failed verification, and enforce-cited-claims compares it as a COUNT so
    // that anything newly disproven re-asserts the hold. Merging unions the evidence, so
    // the survivor inherits the twin's disproven claims — and if the override stays
    // behind on the dropped record, those look brand new and the hold fires on findings
    // he has already ruled on.
    //
    // T's Kitchen is exactly that: survivor 0 disproven / no override, twin 1 disproven
    // WITH override 1. The first merge silently took a `dedicated` GF record — the
    // strongest safety label the app has, on a restaurant a coeliac would specifically
    // go to — down to "ask" on a claim Greg had already seen and approved over.
    //
    // Only when the two sign-offs are the SAME decision (same axis, same tier), which is
    // what a true duplicate has. Differing decisions are not reconcilable by a script.
    const dso = drop.safety?.owner_signoff, kso = keep.safety?.owner_signoff;
    if (kso && dso
        && (kso.field || 'gf_confidence') === (dso.field || 'gf_confidence')
        && kso.to === dso.to) {
      const carried = Math.max(kso.overrode_disproven || 0, dso.overrode_disproven || 0);
      if (carried) kso.overrode_disproven = carried;
    }

    // Fill only what the survivor is missing — never overwrite it.
    for (const [k, v] of Object.entries(drop)) {
      if (k === 'id' || k === 'safety') continue;
      const cur = keep[k];
      if (cur === undefined || cur === null || cur === '') keep[k] = v;
    }

    setTier(keep, 'gf_confidence', P.gf, { by: 'merge-sweep-dupes', why: P.why });
    setTier(keep, 'vegan_status', P.vegan, { by: 'merge-sweep-dupes', why: P.why });

    keep.merged_from = [...(keep.merged_from || []), { id: drop.id, name: drop.name, date: DATE, reason: P.why }];
    j.places.splice(j.places.indexOf(drop), 1);
    dirty = true; merged++;
    console.log(`  merged ${P.drop} -> ${P.keep}  ${P.name}`);
    console.log(`     gf:"${P.gf}" vegan:"${P.vegan}"  +${added} finding(s)  ${log.length} sign-off(s) preserved`);
  }

  if (dirty && APPLY) writeCity(city, j);
}

console.log(`\nmerged ${merged} pair(s); ${skipped} already merged`);
if (!APPLY) console.log('DRY RUN — nothing written. Re-run with --apply.');
