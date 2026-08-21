// Route the sweep's tier recommendations: apply the downgrades, queue the upgrades.
//
// The asymmetry is the whole point. A DOWNGRADE is applied here and now: more caution
// is always safe, and an evidence-backed recommendation to drop a tier should not sit
// in a queue while the old tier ships. An UPGRADE cannot be — a tier above "ask" is
// the one thing in this app that can make somebody stop checking for themselves, so
// REVIEW_PROTOCOL.md sends every one to Greg, with its evidence attached.
//
// It exists because the sweep started finding real under-ratings once agents were
// asked to look: a shop downgraded on a line its owner had publicly retracted, a
// dedicated-grade bakery sitting at "options", a ramen shop whose "no dedicated pot"
// claim was contradicted by a source the record already cited.
//
//   node scripts/gen-underrated-queue.mjs
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const DIR = 'data/_cite_verify_results';
const RANK = { no: 0, ask: 1, options: 2, limited: 2, high: 3, full: 3, dedicated: 4 };
// Agents write prose into `recommended`: "ask - REJECT the pending promotion to high",
// "options (label 'Vegan options')", even "closed". An earlier version of this script
// wrote those strings straight into gf_confidence and vegan_status and corrupted seven
// records' tiers — the filters then matched none of them, so those shops silently
// vanished from every dial. Anything that is not EXACTLY an enum value is not a tier.
const GF_TIERS = new Set(['dedicated', 'high', 'options', 'ask', 'no']);
const VG_TIERS = new Set(['full', 'options', 'limited', 'ask', 'no']);
// Parse, then validate — do not simply reject. Agents overwhelmingly write the tier
// FIRST and then explain: "ask — REJECT the pending promotion to high", "options
// (label 'Vegan options')", "full — RESTORE. The mid-sweep downgrade is wrong". A
// guard that discarded all of those threw away 14 real findings in one shard, among
// them the downgrade for a venue selling whale steak under a "Fully vegan" label.
//
// So take the leading token and require IT to be an exact enum value. That recovers
// the finding without ever writing prose into a field the filters match on — the
// failure this guard exists to prevent.
const tierOf = (field, v) => {
  const raw = String(v == null ? '' : v).trim().toLowerCase();
  const ok = field === 'gf_confidence' ? GF_TIERS : VG_TIERS;
  if (ok.has(raw)) return raw;
  const head = raw.split(/[^a-z]+/)[0];      // first alphabetic run
  return ok.has(head) ? head : null;
};

const byId = new Map();
for (const c of CITIES) for (const r of readCity(c).places) byId.set(r.id, { city: c, r });

// Transcribed by hand from the prose summaries of shards that ran before the brief
// asked for a structured tier_recommendation. Kept here rather than in a data file so
// the evidence travels with the claim and nobody has to trust a bare id.
const SEED = [
  { id: 'nagoya_bitte', field: 'gf_confidence', recommended: 'dedicated',
    why: 'Describes itself as 「コンタミネーションを徹底管理した小麦不使用・完全グルテンフリーのお店」; ' +
         '小麦 unticked on all 24 catalogued products; gluten-intolerant owner-baker. ' +
         'Also filed under Nagoya but located in 尾張旭市, and since April 2026 opens once ' +
         'a month by reservation.' },
  { id: 'nara_laccola', field: 'gf_confidence', recommended: 'high',
    why: 'The high->options downgrade rested on "the shop makes no blanket GF claim". ' +
         "laccola.com's own header and meta description do make one, and every storefront " +
         'item is 米粉-based with no 小麦 in any 原材料. Keep the uncertified-oat caveat, whose ' +
         'real evidence is laccola.base.shop rather than the komeko-palette page cited.' },
  { id: 'nara_shika_san_chocolat', field: 'gf_confidence', recommended: 'high',
    why: 'Single-product shop excluding 小麦粉, 米粉 and baking powder outright, corroborated ' +
         'by two sources, yet sits at options.' },
  { id: 'kyr_menbaka_ichidai_menbaka_', field: 'gf_confidence', recommended: 'high',
    why: 'The 2026-07-02 downgrade cites a "shared boiling water" line the owner has ' +
         'publicly retracted as outdated menu phrasing. Across 38 FMGF reviews: a dedicated ' +
         'separate pot, symptomatic celiacs reporting no reaction, and the two "not safe" ' +
         'reviews are from people who read the stale line and left without eating.' },
  { id: 'nara_big_mountain_cafe_farm', field: 'gf_confidence', recommended: 'high',
    why: 'Cut high->options largely on a HappyCow line no agent can reach (Incapsula blocks ' +
         'every UA, proxy and Wayback). Every reachable source contradicts it: FMGF titles ' +
         'it "Dedicated Gluten-Free Restaurant in Nara" with 20 dedicated-fryer reports, 24 ' +
         '"Dedicated GF" tags, zero symptom reports and a review six days old; Tabelog ' +
         'publishes a 28-allergen pre-booking protocol naming 小麦. safety.dedicated_fryer is ' +
         'still null on the record.' },
  { id: 'nara_aimo', field: 'gf_confidence', recommended: 'high',
    why: 'The dedicated->options downgrade rests on an allergy-LIABILITY disclaimer rather ' +
         'than any wheat on the premises. The cited guide, updated 2026-07-26, lists it among ' +
         '90 shops where 「工房・店内に小麦粉を一切持ち込まず」.' },
  { id: 'tokyo_asakusa_sarashina_tenko', field: 'gf_confidence', recommended: 'high',
    why: 'Found independently by two agents on two different passes. The record is twice ' +
         'told "no source confirms a dedicated fryer / cross-contamination handling" while ' +
         'its OWN cited FMGF page carries 7 dedicated-GF-fryer reports plus dedicated-kitchen ' +
         "and glove-change reports. Separately, the menu pass read the shop's own 14-allergen " +
         'PDF: 小麦 and 大麦 are clear on the noodles, tsuyu, tempura, karaage and yakitori tare. ' +
         'Two printed exceptions must survive any promotion — やま幸鮪の手巻き is marked ' +
         '「グルテンが入っています」, and 蕎麦前盛り合わせ carries 大麦 via 山ウニ and is built into all ' +
         'three courses.' },
  { id: 'himeji_almondou', field: 'gf_confidence', recommended: 'options',
    why: "Rated 'Not gluten-free' while the shop's own site states the curry uses no wheat " +
         'flour and passed a third-party gluten/gliadin test with NONE DETECTED, the report ' +
         'displayed in store. The record also has 18 spices for 21, calls almond-milk lattes ' +
         'dairy, says allergy language does not exist when it does, and publishes stale hours.' },
];

const recs = [], downgrades = [], malformed = [], closures = [], shopClaims = [];
for (const s of SEED) {
  const hit = byId.get(s.id);
  if (!hit) { console.log(`  (seed id not found, skipping: ${s.id})`); continue; }
  const current = hit.r[s.field];
  if ((RANK[s.recommended] ?? 0) <= (RANK[current] ?? 0)) continue;
  recs.push({ city: hit.city, id: s.id, name: hit.r.name, field: s.field,
              current, recommended: s.recommended, evidence: [], why: s.why,
              source: 'transcribed from agent prose' });
}
if (fs.existsSync(DIR))
  for (const f of fs.readdirSync(DIR).filter(f => f.endsWith('.json') && !f.startsWith('_'))) {
    const j = JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8'));
    for (const v of (Array.isArray(j) ? j : (j.items || j.results || []))) {
      // Closure is not a tier. An agent that finds a venue shut was writing
      // recommended:"closed" into a tier field, which the enum guard correctly threw
      // away — leaving two confirmed-closed venues shipping with nowhere for the
      // finding to go. GLUTEN FREE CAFE avan had every branch shut and its own domain
      // NXDOMAIN; 京都茶寮翠泉 新宿店 closed 2026-08-03 「再開日未定」.
      if (/^trading(_status)?$/.test(String(v.kind || '')) || v.status === 'closed_permanently' ||
          /^closed(_permanently)?$/i.test(String(v.recommended || ''))) {
        const h = byId.get(v.id);
        if (h) closures.push({ city: h.city, id: v.id, name: h.r.name,
          already: !!h.r.hidden, why: String(v.why || v.note || '').slice(0, 400) });
        continue;
      }
      // A restaurant advertising gluten-free on a wheat dish is a hazard the reader
      // must be told about, not a defect in our prose to be quietly corrected.
      if (v.kind === 'shop_claim_false') {
        const h = byId.get(v.id);
        if (h) shopClaims.push({ city: h.city, id: v.id, name: h.r.name,
          claim: String(v.claim || '').slice(0, 200),
          contradicted_by: String(v.contradicted_by || '').slice(0, 300),
          evidence: v.evidence || [], why: String(v.why || '').slice(0, 300) });
        continue;
      }
      if (v.kind !== 'tier_recommendation') continue;
      const hit = byId.get(v.id);
      if (!hit) continue;
      // Never ask for a decision about a shop that is not there. avan was holding an
      // unapplied gf_proposed_tier "dedicated" awaiting sign-off on a business whose
      // every branch has closed and whose domain is NXDOMAIN. A queue that spends the
      // reviewer's attention on closed venues is worse than a shorter queue.
      if (hit.r.hidden) continue;
      const field = v.field === 'vegan_status' ? 'vegan_status' : 'gf_confidence';
      const rec = tierOf(field, v.recommended);
      if (!rec) { malformed.push({ id: v.id, field, got: String(v.recommended).slice(0, 60) }); continue; }
      v.recommended = rec;
      const current = hit.r[field];
      if ((RANK[v.recommended] ?? 0) < (RANK[current] ?? 0)) {
        downgrades.push({ city: hit.city, id: v.id, name: hit.r.name, field,
                          from: current, to: v.recommended, why: v.why || v.note || '' });
        continue;
      }
      if ((RANK[v.recommended] ?? 0) === (RANK[current] ?? 0)) continue;
      recs.push({ city: hit.city, id: v.id, name: hit.r.name, field,
                  current, recommended: v.recommended,
                  evidence: v.evidence || [], why: v.why || v.note || '' });
    }
  }

// apply the downgrades
const APPLY = process.argv.includes('--apply');
const GF_LABEL = { dedicated:'Dedicated gluten-free', high:'Strong GF focus',
                   options:'Some GF options', ask:'GF — ask', no:'Not gluten-free' };
const VG_LABEL = { full:'Fully vegan', options:'Some vegan options',
                   limited:'Limited vegan', ask:'Vegan — ask', no:'Not vegan' };
if (APPLY && downgrades.length) {
  for (const c of CITIES) {
    const j = readCity(c); let dirty = false;
    for (const d of downgrades.filter(d => d.city === c)) {
      const r = j.places.find(x => x.id === d.id);
      if (!r || r[d.field] !== d.from) continue;      // already moved; leave it
      r[d.field] = d.to;
      if (d.field === 'gf_confidence') r.gf_label = GF_LABEL[d.to];
      else r.vegan_label = VG_LABEL[d.to];
      r.sweep_downgrade = { field: d.field, from: d.from, to: d.to, why: d.why.slice(0, 400) };
      dirty = true;
    }
    if (dirty) writeCity(c, j);
  }
}
if (APPLY && closures.length) {
  for (const c of CITIES) {
    const j = readCity(c); let dirty = false;
    for (const cl of closures.filter(x => x.city === c && !x.already)) {
      const r = j.places.find(x => x.id === cl.id);
      if (!r || r.hidden) continue;
      r.hidden = 'closed';
      r.closed = { status: 'permanent', checked: '2026-08-21', note: cl.why };
      dirty = true;
    }
    if (dirty) writeCity(c, j);
  }
}
console.log(closures.filter(c => !c.already).length + ' venue(s) found closed and hidden' +
            (closures.length ? ' (' + closures.length + ' reported)' : ''));
closures.forEach(c => console.log('  ' + c.city + '/' + String(c.name).slice(0, 34) + (c.already ? '  (already hidden)' : '')));
if (APPLY && shopClaims.length) {
  for (const c of CITIES) {
    const j = readCity(c); let dirty = false;
    for (const sc of shopClaims.filter(x => x.city === c)) {
      const r = j.places.find(x => x.id === sc.id);
      if (!r) continue;
      r.shop_claim_false = { claim: sc.claim, contradicted_by: sc.contradicted_by,
                             evidence: sc.evidence, why: sc.why, date: '2026-08-21' };
      dirty = true;
    }
    if (dirty) writeCity(c, j);
  }
}
if (shopClaims.length) {
  console.log('');
  console.log(shopClaims.length + " venue(s) advertising a gluten-free claim their own menu contradicts:");
  shopClaims.forEach(x => console.log('  ' + x.city + '/' + String(x.name).slice(0, 30) + '  ' + x.claim.slice(0, 60)));
  fs.writeFileSync('data/_shop_claims_false.json', JSON.stringify(shopClaims, null, 1));
}
fs.writeFileSync('data/_sweep_closures.json', JSON.stringify(closures, null, 1));

console.log(`${downgrades.length} evidence-backed downgrade(s) ${APPLY ? 'applied' : 'found (dry run)'}`);
for (const d of downgrades)
  console.log(`  ${d.city}/${String(d.name).slice(0, 28).padEnd(30)} ${d.field.replace('_confidence','').replace('_status','')} ${d.from} -> ${d.to}`);
if (malformed.length) {
  console.log('');
  console.log(malformed.length + ' recommendation(s) ignored - recommended was prose, not a tier:');
  malformed.slice(0, 8).forEach(m => console.log('  ' + m.id + ' ' + m.field + ': "' + m.got + '"'));
}
fs.writeFileSync('data/_sweep_downgrades.json', JSON.stringify(downgrades, null, 1));

fs.writeFileSync('data/_underrated_queue.json', JSON.stringify(recs, null, 1));
console.log(`${recs.length} upgrade(s) recommended by the sweep, awaiting the human gate\n`);
for (const r of recs)
  console.log(`  ${r.city}/${String(r.name).slice(0, 30).padEnd(32)} ${r.field.replace('_confidence','').replace('_status','')} ` +
    `${r.current} -> ${r.recommended}\n      ${String(r.why).slice(0, 150)}`);
if (!recs.length) console.log('  (agents have not yet returned any structured tier_recommendation objects)');
