// A safety label above "ask" must rest on a claim that names its source.
//
// The provenance audit found two evidence formats in this dataset. Audited records
// store each finding as { text, source } with a URL. But 518 findings across 68
// Tokyo records are stored as BARE STRINGS — no source field at all, uncitable by
// construction. They read as authoritative prose ("Asia's first restaurant certified
// gluten-free by The Gluten Intolerance Group") with nothing behind them, and every
// mechanical check in this repo passed them: the citation verifier only reads
// e.source, and the lint's evidence count only asked whether findings existed.
//
// So a shop could be labelled "some GF options" on text no one can trace. That is
// the exact failure mode this project exists to prevent.
//
// This does NOT delete the text — it may well be accurate, and several of these are
// famous gluten-free restaurants. It moves the LABEL down to "ask" until a source
// is attached, and records the original tier so verification can restore it through
// the normal gate. A false "ask" makes someone double-check; a false "options" on
// untraceable prose is how somebody gets glutenated.
//
//   node scripts/enforce-cited-claims.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-08-20';
const EV = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
            'staff_allergy_handling','positives'];
const CLAIMS_SAFER = new Set(['dedicated','high','options']);
const LABEL = { dedicated:'Dedicated gluten-free', high:'Strong GF focus',
                options:'Some GF options', ask:'GF — ask', no:'Not gluten-free' };
const url = u => typeof u === 'string' && /^https?:\/\//.test(u);
// A claim the verification pass DISPROVED is not evidence, source or no source.
const isLive = e => typeof e === 'object' && url(e?.source) && !e.unsupported;
const citedCount = r => EV.reduce((n, f) => n + ((r.safety?.[f]) || []).filter(isLive).length, 0);
const disproven = r => EV.reduce((n, f) =>
  n + ((r.safety?.[f]) || []).filter(e => typeof e === 'object' && e.unsupported).length, 0);

// Records where Greg made a SPECIFIC, reasoned, named ruling — not a bulk approval.
// A disproven claim overrides a bulk sign-off, because bulk approval is trust in the
// process and the process is what failed. It does not override a decision he sat down
// and argued, because then the question is whether the NEW finding changes HIS
// reasoning, and only he can answer that.
//
// UNO Kyoto Station: "Uno at Kyoto station can be dedicated - if we used 'the place
// next door uses wheat' as a disqualifier, no celiac could enter Japan, never mind eat
// there." The verification did not touch that reasoning. It found something else — the
// reviews evidencing this record are on the GION listing, and the Kyoto Station branch
// opened Dec 2025 — plus one supplier/staff-training claim whose text lives on
// soymilkramen.com rather than the page cited. Whether "the good reviews are from their
// other branch" should unseat a dedicated label on the same operator's GF-only ramen
// shop is exactly the judgement he already showed he wants to make himself.
const OWNER_RULED = {
  // CHOICE: "I ate at CHOICE a few weeks ago - definitely keep as dedicated." He has
  // first-hand knowledge of this kitchen, which outranks anything a page says. The
  // finding is still material and he should see it: CHOICE's own cited page reads
  // "all foods served at CHOICE are gluten-free (except Asakura's pasta, which is
  // made of ancient wheat)", and 古代小麦 is wheat — so the record's "100% gluten-free
  // building" wording is contradicted by its own source even though the tier may
  // well be right. The false wording is marked unsupported either way; only the
  // TIER is his to keep.
  ChIJjXpEeewIAWARbNy6t6UwReg:   // CHOICE, Kyoto
    "Greg ate here and ruled on it by name, 2026-08-19. The disproven claim is the " +
    "「100% GF building」 wording: the shop's own page excepts Asakura's " +
    "ancient-wheat pasta. Tier left alone; he should decide whether that changes it.",
  'ChIJq_Gt7mUJAWARdOvjkos8A7s':
    'Greg ruled on this record by name, 2026-08-19. Disproven claims are citation ' +
    'defects (evidence is from the Gion branch, not Kyoto Station) rather than ' +
    'contradictions, so they are surfaced for him rather than applied over him.',
};

const VEGAN_CLAIMS_SAFER = new Set(['full']);
const VEGAN_LABEL = { full: 'Fully vegan', options: 'Some vegan options',
                      limited: 'Limited vegan', ask: 'Vegan — ask', no: 'Not vegan' };
// Only the vegan-relevant fields can disprove a vegan label; a disproven gluten
// finding says nothing about whether the kitchen uses dairy.
const VEGAN_FIELDS = ['vegan_cross_contact', 'positives'];
const veganDisproven = r => VEGAN_FIELDS.reduce((n, f) =>
  n + ((r.safety?.[f]) || []).filter(e => typeof e === 'object' && e.unsupported).length, 0);

const moved = [], ownerReview = [], veganMoved = [];
for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    if (!CLAIMS_SAFER.has(r.gf_confidence)) continue;
    // Surviving citations do not rescue a record that carried a disproven one.
    // 米粉パレット keeps several innocuous sourced claims ("uses rice flour") while the
    // one actually holding up its "dedicated" label — a zero-contamination facility
    // its own site never claims — turned out to be unsupported. Counting the
    // survivors would let the strongest label in the app stand on the weakest
    // evidence in the record. A record found carrying a disproven SAFETY claim has
    // shown its evidence base is not reliable; the tier waits for a human.
    if (citedCount(r) > 0 && disproven(r) === 0) continue;

    if (OWNER_RULED[r.id]) {
      ownerReview.push({ city, id: r.id, name: r.name, tier: r.gf_confidence,
                         disproven: disproven(r), why: OWNER_RULED[r.id] });
      if (APPLY) {
        r.needs_owner_review = { date: DATE, disproven: disproven(r), why: OWNER_RULED[r.id] };
        delete r.gf_uncited_downgrade;   // clear a hold from before the exemption existed
      }
      continue;
    }

    // The human gate outranks a mere absence of citation: if Greg signed a record off,
    // his decision stands, exactly as apply-gf-audit.mjs has it.
    //
    // But a DISPROVEN claim is not an absence — it is new information, and it is
    // information about the very evidence the sign-off was given on. He approved
    // 米粉パレット at "dedicated" on a 「コンタミネーションリスクはゼロ」 facility claim; the
    // verification pass then found the shop's own site never makes it and the phrase
    // exists only in an unrelated Tokyo bakery's Instagram. Honouring the sign-off
    // there would not be respecting his decision, it would be holding him to a
    // premise that turned out to be false — on the app's strongest safety label.
    //
    // So the gate still wins on silence, and loses to disproof. Held records are
    // listed for his re-review rather than quietly changed.
    // A sign-off normally loses to a disproven claim, and that is right when the
    // sign-off came FIRST: it was given on evidence that later failed, so it rests on a
    // false premise. It inverts when the human approved AFTER reading the disproven
    // claims — which is what `overrode_disproven` records. Greg read what failed on
    // T's Kitchen and Oh Nana! and approved anyway, and this pass kept quietly putting
    // them back to "ask", so the app went on telling a celiac to "ask" at a restaurant
    // holding アジア初のグルテンフリー認証.
    // The count is compared, not just the flag: if NEW claims have been disproven since
    // the override, that is evidence he has not seen and the hold applies again.
    const sg = r.safety?.owner_signoff;
    if (sg?.decision && !disproven(r)) continue;
    // The override clears the DISPROVEN hold only. It does not clear the no-sources-at-all
    // hold: アトミヨソワカ shipped at "high" on ten safety findings of which not one cited a
    // source, which is precisely the state REVIEW_PROTOCOL refuses. Approving a tier over
    // known-bad evidence is a judgement Greg is entitled to make; approving one over no
    // evidence is not a judgement, it is a gap.
    const anyCited = EV.some(f => ((r.safety?.[f]) || []).some(e => typeof e === 'object' && e.source));
    if (sg?.decision && anyCited && sg.overrode_disproven >= disproven(r)) continue;
    const overridesSignoff = !!r.safety?.owner_signoff?.decision;

    moved.push({ city, id: r.id, name: r.name, from: r.gf_confidence,
                 disproven: disproven(r), overrides_signoff: overridesSignoff,
                 findings: EV.reduce((n, f) => n + ((r.safety?.[f]) || []).length, 0) });
    if (!APPLY) continue;
    r.gf_uncited_downgrade = { from: r.gf_confidence, date: DATE,
      disproven: disproven(r), overrides_signoff: overridesSignoff,
      note: disproven(r)
        ? `Tier held down: ${disproven(r)} safety finding(s) on this record were checked ` +
          'against their sources and NOT supported by them. This overrides the owner ' +
          'sign-off, which was given on that evidence — needs his re-review.'
        : 'Tier held down: no safety finding on this record cites a source. Restore ' +
          'through REVIEW_PROTOCOL.md once evidence is attached.' };
    r.gf_confidence = 'ask';
    r.gf_label = LABEL.ask;
    r.gf_detail = `[Held at "ask" ${DATE}] The description below was not traceable to any ` +
      `source, so the GF label is held down until it is. ` + (r.gf_detail || '');
    dirty = true;
  }
  for (const r of j.places) {
    // "Fully vegan" is the same shape of promise as a GF tier: it is the label that
    // stops someone reading the menu. waco crepes shipped as fully vegan while its
    // own cited page advertises smoked-salmon-and-cream-cheese and ham-and-cheese
    // crepes; SOYA shipped as fully vegan while selling bacon and tuna breads.
    if (!VEGAN_CLAIMS_SAFER.has(r.vegan_status)) continue;
    if (veganDisproven(r) === 0) continue;
    veganMoved.push({ city, id: r.id, name: r.name, disproven: veganDisproven(r) });
    if (!APPLY) continue;
    r.vegan_disproven_downgrade = { from: r.vegan_status, date: DATE,
      disproven: veganDisproven(r),
      note: 'Held at "options": vegan finding(s) on this record were checked against ' +
            'their sources and contradicted by them.' };
    r.vegan_status = 'options';
    r.vegan_label = VEGAN_LABEL.options;
    r.vegan_detail = `[Held at "some vegan options" ${DATE}] The "fully vegan" label was ` +
      `contradicted by this record's own cited sources. ` + (r.vegan_detail || '');
    dirty = true;
  }
  if (dirty) writeCity(city, j);
}

console.log(`${moved.length} record(s) claim a GF tier above "ask" with nothing cited\n`);
for (const m of moved)
  console.log(`  ${m.city}/${m.id.padEnd(34)} ${m.from.padEnd(9)} ` +
    (m.disproven ? `${m.disproven} DISPROVEN` : `${m.findings} uncited`).padEnd(13) +
    (m.overrides_signoff ? ' ⚠ OVERRIDES SIGN-OFF ' : '  ') + m.name.slice(0, 30));
if (!APPLY) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
fs.writeFileSync('data/_uncited_claims.json', JSON.stringify(moved, null, 1));
