// Greg's re-review, 2026-10-14, of the 25 records whose sign-off was held at "ask"
// because claims it rested on were later disproven against their sources (lint item
// "held at ask over sign-off"; launch-readiness A3).
//
// He read the banded list — what failed on each record, what evidence survives — and
// ruled per band. Because he ruled AFTER seeing the disproven claims, each sign-off
// carries `overrode_disproven` = the count he saw, so enforce-cited-claims.mjs honours
// it on the next rebuild instead of putting the record straight back to "ask". If a NEW
// claim is disproven later, the count no longer covers it and the hold returns.
//
// The disproven claims themselves stay on the record for audit; build-payload.mjs keeps
// them out of what ships (291a69e).
//
//   node scripts/apply-signoff-rereview-2026-10-14.mjs [--apply]
import { CITIES, readCity, writeCity } from './lib-city.mjs';
import { setTier, EVIDENCE_KEYS as EV } from './lib-tiers.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-10-14', BY = 'Greg';
const B1 = 'Band 1 (the disproven claim was not about gluten; GF basis verified and intact) — restored per recommendation.';
const B2 = 'Band 2 (GF claim overstated, a narrower one survives) — set per recommendation.';
const B3 = 'Band 3 (nothing left to stand on) — stays at "ask" until new sources exist.';

// id -> ruling. `gf` is the tier; `note` is a sourced caveat prepended to gf_detail.
const R = {
  // ---- Band 1 ----
  // cafe planet: Greg ruled "dedicated" quoting the shop's own no-wheat/barley/oats/rye
  // statement — HELD here pending his answer on the oat granola on the same menu page.
  kz_wagome_2: { gf: 'dedicated', why: B1 + ' The "no dairy" claim cited a 2014 article (cheese pizzas); Greg ruled vegan as well.',
    vegan: 'full', veganWhy: 'Greg, 2026-10-14: "Wagome is both vegan and dairy free, see kanazawa-food.jp/en/." The Kanazawa allergy directory tags it Vegan + Egg/dairy free (kanazawa-food.jp/en/shops/22/); the shop exhibits at ヴィーガンフェスタTOYAMA and sells 豆乳 cakes (wagome.net). The cheese pizzas were in a 2014 kanazawa.keizai.biz article.' },
  nagano_riz_karuizawa:           { gf: 'high',      why: B1 },
  nagoya_michinori_tei:           { gf: 'dedicated', why: B1 },
  nagoya_komeko_palette:          { gf: 'dedicated', why: B1 },
  tokyo_biossa:                   { gf: 'dedicated', why: B1 },
  tokyo_rice_hack_gluten_free_ba: { gf: 'dedicated', why: B1 },
  tokyo_marugoto_vegan_dining_as: { gf: 'options',   why: B1 },
  tokyo_daughter_boutique_tokyo:  { gf: 'options',   why: B1 },
  // ---- Band 2 ----
  hiro_miyajima_base:  { gf: 'options', why: B2 + ' Its own cited source: "not dedicated gluten free. Their eel conger bowl contains gluten, but it is prepared separately."' },
  nagoya_ve_tree:      { gf: 'options', why: B2 + ' The operator states 「製造所では小麦を含む食材も取り扱う」.' },
  kyo_vegan_sweets_courier: { gf: 'options', why: B2 + ' Only source describes the products, not the facility.' },
  nagano_sorebana:     { gf: 'high', why: B2 },
  nagoya_en_kitchen:   { gf: 'high', why: B2 },
  nagoya_fujinomiya:   { gf: 'high', why: B2 },
  nagano_cocochouchou: { gf: 'high', why: B2,
    note: 'Ask which miso: the butter-cream is made with 信州味噌 (Web-Komachi). Shinshu miso is normally rice miso, but some miso contains barley.' },
  // ---- Band 3 ----
  hiro_baker_theta:  { gf: 'ask', why: B3 },
  nagano_harutonari: { gf: 'ask', why: B3 },
  tokyo3__148:       { gf: 'ask', why: B3 },
};
// Band 2 records whose ids are Google Places ids — matched by name instead.
const BY_NAME = {
  'Gion Soy Milk Ramen – Uno Yukiko': { gf: 'dedicated', why: B2 + ' The misattributed "celiac diner" quote is set aside; the shop\'s own dedicated-GF and GF-soy-sauce statements stand.' },
  'waco crepes':        { gf: 'dedicated', why: B1 + ' Dedicated GF batter/kitchen per a celiac travel writer + Vegewel; the vegan overstatement is set aside.' },
  'Cafe & Bar Maru @Keika': { gf: 'high', why: B2,
    note: 'Not every drink is gluten-free — Find Me Gluten Free reviewers: "100% gluten free restaurant, minus some alcohol" (gluten-reduced beer). Ask before ordering drinks.' },
  '都松庵 (Toshoan)':  { gf: 'dedicated', why: B2 + ' The disproven item was an invented exception (Miyako Monaka); the wheat-free shop claim stands.' },
  'Ikkakuju Karasuma (100% GF izakaya — okonomiyaki, karaage, yakitori)': { gf: 'high', why: B2 + ' Not dedicated: the restaurant says all dishes are gluten-free but never that its sauces/seasonings are.',
    note: 'Ask about the okonomiyaki sauce and soy sauce: the restaurant says every dish is gluten-free, but no source says the seasonings are.' },
};

const disproven = r => EV.reduce((n, f) => n + ((r.safety?.[f]) || []).filter(e => typeof e === 'object' && e.unsupported).length, 0);
const HELD = /\[Held at "ask" \d{4}-\d{2}-\d{2}\] The description below was not traceable to any source, so the GF label is held down until it is\.\s*/g;

let n = 0;
const seen = new Set();
for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    const d = R[r.id] || BY_NAME[r.name];
    if (!d) continue;
    seen.add(R[r.id] ? r.id : r.name);
    const from = r.gf_confidence, prior = r.safety?.owner_signoff;
    console.log(`  ${city.padEnd(9)} ${r.name.slice(0, 44).padEnd(45)} gf ${from} -> ${d.gf}` +
                (d.vegan ? `, vegan ${r.vegan_status} -> ${d.vegan}` : '') + `  (disproven ${disproven(r)})`);
    if (!APPLY) continue;
    r.safety = r.safety || {};
    const log = (r.safety.owner_signoff_log = r.safety.owner_signoff_log || []);
    if (prior && !log.some(x => x.date === prior.date && (x.field || 'gf_confidence') === (prior.field || 'gf_confidence'))) log.push(prior);
    setTier(r, 'gf_confidence', d.gf, { by: BY, why: d.why });
    const so = { decision: d.gf === 'ask' ? 'downgrade' : 'keep', field: 'gf_confidence', from, to: d.gf,
                 by: BY, date: DATE, reason: d.why, overrode_disproven: disproven(r) };
    log.push(so);
    if (d.vegan) {
      const vfrom = r.vegan_status;
      setTier(r, 'vegan_status', d.vegan, { by: BY, why: d.veganWhy });
      log.push({ decision: 'upgrade', field: 'vegan_status', from: vfrom, to: d.vegan, by: BY, date: DATE, reason: d.veganWhy });
      r.vegan_detail = String(r.vegan_detail || '').replace(/^\[Held at [^\]]*\]\s*/, '');
      r.vegan_detail = `[Owner review ${DATE}: vegan ${vfrom}→${d.vegan}. ${d.veganWhy}] ` + r.vegan_detail.replace(/Not everything is guaranteed vegan \(some pizzas use additive-free cheese\), so vegans should confirm the specific item, but a/i, 'A');
    }
    r.safety.owner_signoff = so;          // the GF ruling is the live one
    r.safety.last_checked = DATE;
    delete r.gf_uncited_downgrade;
    r.gf_detail = String(r.gf_detail || '').replace(HELD, '');
    if (!r.gf_detail.includes(`[Owner review ${DATE}`))
      r.gf_detail = `[Owner review ${DATE}: GF ${d.gf}. ${d.note ? d.note + ' ' : ''}${d.why}] ` + r.gf_detail;
    n++; dirty = true;
  }
  if (dirty) writeCity(city, j);
}
const want = [...Object.keys(R), ...Object.keys(BY_NAME)];
const missing = want.filter(k => !seen.has(k));
if (missing.length) { console.error('NOT FOUND: ' + missing.join(', ')); process.exitCode = 1; }
console.log(`\n${seen.size}/${want.length} matched${APPLY ? `, ${n} written` : ' (dry run — add --apply)'}`);
