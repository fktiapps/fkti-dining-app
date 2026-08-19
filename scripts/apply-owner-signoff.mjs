// Apply Greg's human gate (REVIEW_PROTOCOL.md step 4) to top-tier GF records.
//
// This is the only step that can finalise a `dedicated`/`high` label. Claude runs
// pass 3 and proposes; the decisions below are Greg's, recorded verbatim with his
// reasoning so a future caretaker can see WHY a tier was held, not just that it was.
//
// Add a batch, run it, commit. Re-running is safe: a record already carrying the
// same decision is left alone.
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const DATE = '2026-08-19';
const BY = 'Greg';
const LABEL = { dedicated: 'Dedicated · celiac-safe', high: 'Strong GF focus',
                options: 'Some GF options', ask: 'GF — ask', no: 'Not gluten-free' };

// name fragment -> decision. `to` omitted means "keep at current tier".
const DECISIONS = [
  // ---- batch 1, 2026-08-19 -------------------------------------------------
  { city: 'kyoto', match: 'CHOICE', decision: 'keep', tier: 'dedicated',
    reason: 'Greg ate here (Aug 2026) and confirms the dedicated standard first-hand. Own JP claim, JP reviews and celiac reaction reports already met the bar; the visit settles it.' },

  { city: 'kyoto', match: 'UNO RAMEN – Sanjo', decision: 'keep', tier: 'dedicated',
    reason: 'Standalone dedicated wheat-free kitchen, same owner and protocol as the Gion original, with Japanese review corroboration.' },

  { city: 'kyoto', match: 'UNO RAMEN – Kyoto Station', decision: 'keep', tier: 'dedicated',
    reason: 'Greg override of the proposed downgrade. The audit objected that the stall sits inside the 京都拉麺小路 food court among wheat ramen shops — but a neighbouring tenant using wheat is not cross-contamination in this kitchen. Held to that standard no celiac could eat anywhere in Japan. The stall kitchen is dedicated and that is what the label describes.' },

  { city: 'nagoya', match: 'Bakeshop SolSol', decision: 'keep', tier: 'dedicated',
    reason: 'Greg override of the proposed downgrade. The audit held it down partly because the shop frames its claim as 小麦アレルギー / グルテンフリー rather than セリアック. In Japan グルテンフリー is the ordinary term and セリアック is rarely used, so requiring that word eliminates good options without reducing risk. The own facility claim plus the national all-GF roster listing meet the bar.' },

  { city: 'nagoya', match: 'Komeko no Mise Palette', decision: 'keep', tier: 'dedicated',
    reason: 'Facility-level own claim verified live (no wheat permitted in the 米粉パン factory, dedicated equipment) plus an independent FindMeGlutenFree dedicated listing. Kept at dedicated with the cafe caveat written onto the record.',
    appendDetail: 'CAVEAT (Greg, 2026-08-19): the "no wheat on the premises" guarantee describes the 米粉パン production factory. The attached cafe also plates gyoza and shumai whose dipping sauce and seasonings are not documented — the bakery goods carry the dedicated standard, the cafe savouries do not. Opening is 不定期 (irregular): phone ahead.' },

  { city: 'kyoto', match: 'cafe planet', decision: 'downgrade', to: 'high',
    reason: 'The 2026-07-03 upgrade to dedicated rested on a ★★★★★ listing in the empacede/japan-glutenfree curated guide, which this audit established is a curated relay that reprints shop claims rather than verifying them. The 2026-07-02 pass had held it at high because the shop\'s own celiac claim could not be loaded and one guide author never visited. Cash-only and remote, so few walk-in corrections. Reverts to high.' },

  { city: 'hiroshima', match: 'Kotonoha', decision: 'downgrade', to: 'high',
    reason: 'Independent corroboration is genuinely strong — Legal Nomads\' celiac-authored guide lists this exact address. But `dedicated` also requires the shop\'s OWN explicit claim, and Kotonoha publishes no gluten-free or cross-contamination statement of any kind. Strong outside evidence, no inside claim: that is high, not dedicated.' },

  { city: 'nagoya', match: 'Kashiya Fujinomiya', decision: 'downgrade', to: 'high',
    reason: 'The wheat product (動物ヨーチ) ran on shared confectionery equipment for decades until summer 2022 and that equipment was never replaced. Wheat was dropped for cost reasons — rising flour prices and the expense of renewing 駄菓子 equipment — not as an allergen policy, and there is no cleaning protocol, testing or ppm threshold published. Equipment continuity on a decades-long wheat line is a real celiac risk.' },

  // ---- batch 2, 2026-08-19 — bulk pass -------------------------------------
  // Greg approved the adversarial pass's tier for every remaining record, with
  // the five exceptions below. The bulk approvals are applied by BULK_APPROVE
  // rather than listed one by one — 34 identical entries would bury these five.

  // EXCEPTIONS 1+2 — restored to dedicated. Both were downgraded purely for
  // absence from FindMeGlutenFree/HappyCow, which the amended protocol no longer
  // treats as a disqualifier. Both have the shop's own facility-level claim plus
  // independent FIRST-HAND reporting, which is what corroboration actually means.
  { city: 'himeji', match: 'MIL bake', decision: 'keep', tier: 'dedicated',
    reason: 'Greg, applying the amended evidence bar. Own facility claim 「工房では小麦粉を使用しません」 plus four independent first-hand visits (Kiss PRESS sampled and interviewed the owner; local-prime bylined editorial visit; tanosu journalist visit with original photography recording 「小麦・乳・卵・ナッツ不使用」; 姫路の種 photographed in person). The owner is a former patissier with occupational wheat allergy / 小麦粉喘息 and physically cannot handle wheat — a structural guarantee stronger than most written protocols. Absence from English-language celiac platforms is not a disqualifier.' },

  { city: 'nagoya', match: 'Ve Tree', decision: 'keep', tier: 'dedicated',
    reason: 'Greg, applying the amended evidence bar. Own claim (乳卵小麦不使用) is consistent across all the shop properties, corroborated by two independent local outlets that physically visited (Living Nagoya, Kelly) describing the rice-flour crusts and bakes. Previously downgraded only for absence from a curated GF guide, which is not evidence of anything.' },

  // EXCEPTION 3 — the vocabulary objection was wrong, but a second, independent
  // problem stands, so this one does NOT come back up.
  { city: 'kyoto', match: '玄gen', decision: 'keep', tier: 'high',
    reason: 'Greg. The complaint that the shop never says セリアック is not a valid reason to hold it down. But the audit also found no cross-contamination protocol and no documented tamari or wheat-free shoyu, and this is a takeout shop serving savoury food — undocumented soy sauce is a real gap independent of the vocabulary point. Stays at high.' },

  // EXCEPTION 4 — fails even the `high` bar under the amended protocol, which
  // explicitly rules out corroboration that reprints the shop's own copy.
  { city: 'himeji', match: 'Miel Yakigashi', decision: 'downgrade', to: 'options',
    reason: 'Greg. The shop own claim is strong and verified live (工房には卵・乳製品・小麦を持ち込まない). But `high` requires two independent credible sources and there is effectively one: the only third party is a himeji-mitai gift roundup reprinting the shop own copy without visiting, and hitosara carries no allergen information at all. The amended protocol names exactly this case. Two of the record five cited sources are also dead. Not a judgement on the shop, which may well be excellent — the evidence base is one voice.' },

  // EXCEPTION 5 — tier holds, but the record must carry two warnings it lacked.
  { city: 'kyoto', match: 'Oshokuya Kappa', decision: 'keep', tier: 'high',
    reason: 'Greg. Survives scrutiny: the owner states 「小麦粉を含め麦系は現在一切使用していません」, which rules out the spelt trap that caught another Kyoto record, and FindMeGlutenFree carries ~126 ratings including roughly two dozen symptomatic-celiac reviews all reporting no symptoms. Held at high rather than dedicated because the shop own site says it cannot accommodate wheat allergy.',
    appendDetail: 'WARNINGS (Greg, 2026-08-19): the shop serves GLUTEN-REDUCED beer — that is not celiac-safe and must be declined regardless of the all-GF menu. The gluten-free pizza crust is bought in from an outside supplier (Pizza Icaro), so crust safety is third-party, not this kitchen.' },
];

// Everything else Greg approved at the tier the adversarial pass settled on.
const BULK_APPROVE = {
  reason: 'Greg, bulk pass 2026-08-19: approved at the tier the adversarial review settled on. Evidence, independent-source count and residual flags for each are on the record in gf_review and in GF_REVIEW_SIGNOFF.md.',
};


const norm = s => String(s).toLowerCase();
let applied = 0, skipped = 0;
const log = [];

for (const city of CITIES) {
  const todo = DECISIONS.filter(d => d.city === city);
  if (!todo.length) continue;
  const j = readCity(city);
  let dirty = false;

  for (const d of todo) {
    const hits = j.places.filter(p => norm(p.name).includes(norm(d.match)));
    if (hits.length !== 1) { log.push(`!! ${city}/${d.match}: ${hits.length} matches — skipped`); continue; }
    const r = hits[0];

    const from = r.gf_confidence;
    const to = d.decision === 'downgrade' ? d.to : (d.tier || from);

    if (r.safety?.owner_signoff?.date === DATE && r.gf_confidence === to) { skipped++; continue; }

    r.gf_confidence = to;
    r.gf_label = LABEL[to] || r.gf_label;
    r.safety = r.safety || {};
    r.safety.owner_signoff = {
      decision: d.decision, from, to, by: BY, date: DATE, reason: d.reason,
    };
    r.safety.last_checked = DATE;

    if (d.appendDetail && !String(r.gf_detail || '').includes('CAVEAT (Greg'))
      r.gf_detail = `[${d.appendDetail}] ${r.gf_detail || ''}`.trim();

    if (d.decision === 'downgrade')
      r.gf_detail = `[Owner review ${DATE}: GF ${from}→${to}. ${d.reason}] ${r.gf_detail || ''}`.trim();

    applied++; dirty = true;
    log.push(`${d.decision === 'keep' ? 'KEEP ' : 'DOWN '} ${city}/${r.name.split(' (')[0].slice(0, 40)}  ${from}${from !== to ? ' -> ' + to : ''}`);
  }
  if (dirty) writeCity(city, j);
}

// Bulk approval for every remaining top-tier record not named above.
let bulk = 0;
for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    if (!['dedicated', 'high'].includes(r.gf_confidence)) continue;
    if (r.safety?.owner_signoff?.decision) continue;
    r.safety = r.safety || {};
    r.safety.owner_signoff = {
      decision: 'keep', from: r.gf_confidence, to: r.gf_confidence,
      by: BY, date: DATE, reason: BULK_APPROVE.reason, bulk: true,
    };
    r.safety.last_checked = DATE;
    bulk++; dirty = true;
  }
  if (dirty) writeCity(city, j);
}

log.forEach(l => console.log('  ' + l));
console.log(`\n${applied} decision(s) applied, ${skipped} already current`);
