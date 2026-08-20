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
const CLAIMS_SAFER = new Set(['dedicated','high','options']);
const EVIDENCE_FIELDS = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
                         'staff_allergy_handling','positives'];
const evidenceCount = r => EVIDENCE_FIELDS.reduce((n, f) => n + ((r.safety?.[f]) || []).length, 0);

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
    const sg = r.safety?.owner_signoff;
    if (sg?.decision && sg.to && sg.to !== r.gf_confidence)
      err(city, `${at}: gf_confidence="${r.gf_confidence}" contradicts owner_signoff.to="${sg.to}" (${sg.by} ${sg.date}) — a machine pass overwrote the human gate`);

    // A GF tier above "ask" is a claim that this shop is safer than the default, and
    // the safety block is where the reason lives. いろは堂 shipped as "some GF options"
    // on an entirely empty block — no cross-contamination finding, no soy-sauce
    // finding, no staff note, no source — while its own text asked the reader to
    // "confirm which items are the GF version". That is "ask" wearing a better label.
    // Every other record in nine cities already satisfies this, so it is an error:
    // the pipeline should refuse to ship an unevidenced safety claim, not warn about it.
    if (!r.hidden && CLAIMS_SAFER.has(r.gf_confidence) && evidenceCount(r) === 0)
      err(city, `${at}: gf_confidence="${r.gf_confidence}" with no safety evidence at all — ` +
                'a tier above "ask" has to say why (REVIEW_PROTOCOL.md)');

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
