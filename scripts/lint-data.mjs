#!/usr/bin/env node
/**
 * Data integrity lint for the city datasets.
 *
 * Exists because three classes of drift shipped silently: free-text cuisine_type
 * leaking into the UI filter row, records falling outside their city's bounds so
 * geolocation never matched them, and — the one that matters — dedicated/high GF
 * records reaching the map without passing REVIEW_PROTOCOL.md pass 3.
 *
 * Usage: node scripts/lint-data.mjs [--fail-on-warn]
 */
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const errors = [], warnings = [];
const err = (c, m) => errors.push(`${c}: ${m}`);
const warn = (c, m) => warnings.push(`${c}: ${m}`);

// vocabulary the UI can actually render, read straight from the app
const html = fs.readFileSync('index.html', 'utf8');
const LABELS = new Set([...html.match(/const CUISINE_LABELS=\{([^}]*)\}/)[1]
  .matchAll(/(\w+):/g)].map(m => m[1]));

const CATEGORY = new Set(['GF','VEGAN','BOTH','SHOJIN','OMNI','MOM_AND_POP']);
const GF_CONF  = new Set(['dedicated','high','options','ask','no']);
const VEGAN    = new Set(['full','options','limited','ask','no']);
const HOURS_ST = new Set(['regular','irregular','seasonal','varies','closed','unknown','by_reservation']);
const TOP_TIER = new Set(['dedicated','high']);
const GF_LABELS = { dedicated:'Dedicated gluten-free', high:'Strong GF focus',
                    options:'Some GF options', ask:'GF — ask', no:'Not gluten-free' };
const VG_LABELS = { full:'Fully vegan', options:'Some vegan options',
                    limited:'Limited vegan', ask:'Vegan — ask', no:'Not vegan' };
const CLAIMS_SAFER = new Set(['dedicated','high','options']);
const EVIDENCE_FIELDS = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
                         'staff_allergy_handling','positives'];
// Only CITED findings count. Counting bare findings was a hole: 518 findings across
// 68 Tokyo records are stored as plain strings with no source field at all, and they
// sailed through a check that merely asked whether findings existed. Prose that
// cannot be traced is not evidence for a safety label, however authoritative it reads.
const isCited = e => typeof e === 'object' && e && typeof e.source === 'string' && /^https?:\/\//.test(e.source);
const evidenceCount = r => EVIDENCE_FIELDS.reduce((n, f) => n + ((r.safety?.[f]) || []).filter(isCited).length, 0);

const man = JSON.parse(fs.readFileSync('data/manifest.json', 'utf8'));
const bounds = Object.fromEntries(man.cities.map(c => [c.id, c.bounds]));
const manifestIds = new Set(man.cities.map(c => c.id));

for (const id of CITIES) if (!manifestIds.has(id)) err(id, 'city file has no manifest entry');

const seenGlobal = new Map();
let topTier = 0, topTierGated = 0, topTierAudited = 0;

for (const city of CITIES) {
  const j = readCity(city);
  const places = j.places || [];
  if (!places.length) { err(city, 'no places'); continue; }

  const ids = new Set(), names = new Map();
  const [[s, w], [n, e]] = bounds[city] || [[-90,-180],[90,180]];

  const menuFile = `data/${city}_menus.json`;
  const menus = fs.existsSync(menuFile) ? JSON.parse(fs.readFileSync(menuFile, 'utf8')) : {};

  for (const r of places) {
    const at = `${r.name || r.id}`;

    for (const f of ['id','name','lat','lng','category','gf_confidence','vegan_status'])
      if (r[f] === undefined || r[f] === null || r[f] === '') err(city, `${at}: missing ${f}`);

    if (ids.has(r.id)) err(city, `duplicate id ${r.id}`); else ids.add(r.id);
    if (seenGlobal.has(r.id)) err(city, `id ${r.id} also used in ${seenGlobal.get(r.id)}`);
    else seenGlobal.set(r.id, city);

    const nk = String(r.name || '').toLowerCase().replace(/\s+/g, '');
    if (names.has(nk)) warn(city, `duplicate name "${r.name}"`); else names.set(nk, r.id);

    if (r.cuisine_type && !LABELS.has(r.cuisine_type))
      err(city, `${at}: cuisine_type "${r.cuisine_type}" has no CUISINE_LABELS entry`);
    if (!CATEGORY.has(r.category)) err(city, `${at}: bad category "${r.category}"`);
    if (!GF_CONF.has(r.gf_confidence)) err(city, `${at}: bad gf_confidence "${r.gf_confidence}"`);
    if (!VEGAN.has(r.vegan_status)) err(city, `${at}: bad vegan_status "${r.vegan_status}"`);
    if (r.hours_status && !HOURS_ST.has(r.hours_status)) warn(city, `${at}: unusual hours_status "${r.hours_status}"`);

    if (typeof r.lat !== 'number' || typeof r.lng !== 'number') err(city, `${at}: non-numeric coords`);
    else if (r.lat < s || r.lat > n || r.lng < w || r.lng > e)
      err(city, `${at}: coords ${r.lat},${r.lng} outside manifest bounds`);

    if ('cultural_comfort_note' in r) err(city, `${at}: legacy flat cultural_comfort_note (use cultural_comfort.note)`);
    if (r.dcp && !Object.values(r.dcp).some(v => v !== null && v !== '' && !(Array.isArray(v) && !v.length)))
      warn(city, `${at}: empty dcp block`);

    if (!!r.has_menu !== !!menus[r.id])
      warn(city, `${at}: has_menu=${!!r.has_menu} but menus file ${menus[r.id] ? 'has' : 'lacks'} an entry`);

    // THE safety guard. A top-tier GF label is the only way this app can
    // over-promise to a celiac, so it must clear both gates:
    //   pass 3  = adversarial review  -> safety.gf_review
    //   pass 4  = human sign-off      -> safety.owner_signoff
    // Never-audited is an ERROR (it ships an unchallenged claim). Audited but
    // awaiting Greg is a WARNING — the work is done, the gate is queued.
    // The gate is the authority. If the shipped tier disagrees with what Greg
    // signed off, something overwrote a human decision — always an error.
    // The one legitimate way a signed-off tier moves: the evidence it was granted on
    // was checked against its sources and found not to support it. That is not a
    // machine overwriting a human decision, it is a human decision resting on a
    // premise that turned out to be false — and it is recorded on the record, with
    // the count, so the override is auditable rather than silent. Everything else
    // that moves a signed-off tier is still an error.
    const held = r.gf_uncited_downgrade;
    const legitOverride = held && held.disproven > 0 && r.gf_confidence === 'ask';
    const sg = r.safety?.owner_signoff;
    if (legitOverride)
      warn(city, `${at}: held at "ask" over sign-off — ${held.disproven} claim(s) disproven against their sources; needs Greg's re-review`);
    // Check the sign-off against THE FIELD IT WAS FOR. A record can be signed off on
    // its vegan axis alone — 貝や 廉 and サロン・フ both were — and reading a vegan_status
    // approval as though it were a gf_confidence one reports eight healthy records as
    // "a machine pass overwrote the human gate", which is the one error message in
    // this file that must never cry wolf. Sign-offs written before the field was
    // recorded are GF ones by history, so an absent field still means gf_confidence.
    else if (sg?.decision && sg.to && (sg.field || 'gf_confidence') === 'gf_confidence'
             && sg.to !== r.gf_confidence)
      err(city, `${at}: gf_confidence="${r.gf_confidence}" contradicts owner_signoff.to="${sg.to}" (${sg.by} ${sg.date}) — a machine pass overwrote the human gate`);
    else if (sg?.decision && sg.to && sg.field === 'vegan_status' && sg.to !== r.vegan_status)
      err(city, `${at}: vegan_status="${r.vegan_status}" contradicts owner_signoff.to="${sg.to}" (${sg.by} ${sg.date}) — a machine pass overwrote the human gate`);

    // A GF tier above "ask" is a claim that this shop is safer than the default, and
    // the safety block is where the reason lives. いろは堂 shipped as "some GF options"
    // on an entirely empty block — no cross-contamination finding, no soy-sauce
    // finding, no staff note, no source — while its own text asked the reader to
    // "confirm which items are the GF version". That is "ask" wearing a better label.
    // Every other record in nine cities already satisfies this, so it is an error:
    // the pipeline should refuse to ship an unevidenced safety claim, not warn about it.
    if (!r.hidden && CLAIMS_SAFER.has(r.gf_confidence) && evidenceCount(r) === 0)
      err(city, `${at}: gf_confidence="${r.gf_confidence}" with no safety evidence at all — ` +
                'a tier above "ask" has to cite a source (REVIEW_PROTOCOL.md)');

    // A stored label contradicting its tier is how a tonkotsu ramen shop came to
    // display as "Fully vegan": index.html rendered vegan_label directly, and every
    // pass that moved a tier had to remember to move the label too. The app derives
    // both now, and sync-diet-labels.mjs repairs the stored fields — this stops them
    // drifting apart again.
    if (GF_LABELS[r.gf_confidence] && r.gf_label && r.gf_label !== GF_LABELS[r.gf_confidence])
      err(city, `${at}: gf_label "${r.gf_label}" contradicts gf_confidence "${r.gf_confidence}"`);
    if (VG_LABELS[r.vegan_status] && r.vegan_label && r.vegan_label !== VG_LABELS[r.vegan_status])
      err(city, `${at}: vegan_label "${r.vegan_label}" contradicts vegan_status "${r.vegan_status}"`);

    if (TOP_TIER.has(r.gf_confidence)) {
      topTier++;
      if (r.safety?.owner_signoff?.decision) topTierGated++;
      else if (r.gf_review?.date) { topTierAudited++; warn(city, `${at}: ${r.gf_confidence} — passed adversarial review ${r.gf_review.date}, awaiting Greg's sign-off`); }
      else err(city, `${at}: gf_confidence="${r.gf_confidence}" never audited — must pass REVIEW_PROTOCOL.md pass 3 before shipping`);
    }
  }
}

const p = console.log;
p(`\ntop-tier GF records: ${topTier}   gated: ${topTierGated}   ungated: ${topTier - topTierGated}`);
if (warnings.length) { p(`\n${warnings.length} warning(s):`); warnings.slice(0, 40).forEach(w => p('  ⚠ ' + w)); if (warnings.length > 40) p(`  … ${warnings.length - 40} more`); }
if (errors.length)   { p(`\n${errors.length} error(s):`);   errors.slice(0, 40).forEach(e => p('  ✖ ' + e));   if (errors.length > 40) p(`  … ${errors.length - 40} more`); }
if (!errors.length && !warnings.length) p('\n✅ clean');
process.exit(errors.length ? 1 : (process.argv.includes('--fail-on-warn') && warnings.length ? 1 : 0));
