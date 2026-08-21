// Build the worklist for verifying every safety claim against its cited source.
//
// The unit of work is a RECORD, not a claim. A record's claims usually cite the same
// two or three pages, so an agent that fetches them once can check the lot; sharding
// by claim would fetch the same page eleven times and invite eleven inconsistent
// judgements about it.
//
// Order is by stakes, not alphabetical. If the sweep is interrupted — and at this
// size it will be — what matters is that the dangerous records were done first:
//
//   1. dedicated / high GF labels. The app's strongest safety claim, the only tier
//      that can make a celiac stop checking for themselves.
//   2. "options" labels. Still a claim that this shop is safer than the default.
//   3. records carrying claims with text but no source — unverifiable as they
//      stand, so what they need is a source found, not a source checked.
//   4. thin records: a single source behind everything.
//   5. the rest.
//
//   node scripts/gen-cite-verify-shards.mjs [perShard=8]
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const PER = Number(process.argv[2] || 8);
const EV = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
            'staff_allergy_handling','positives'];
const url = u => typeof u === 'string' && /^https?:\/\//.test(u);
const RANK = { dedicated: 0, high: 0, options: 1 };

const rows = [];
for (const city of CITIES) {
  for (const r of readCity(city).places) {
    if (r.hidden) continue;
    const claims = [];
    for (const f of EV)
      for (const e of (r.safety?.[f]) || [])
        claims.push({ field: f,
          text: typeof e === 'string' ? e : String(e?.text || ''),
          source: (typeof e === 'object' && url(e?.source)) ? e.source : null });
    if (!claims.length) continue;

    const sourced = claims.filter(c => c.source).length;
    const distinct = new Set(claims.map(c => c.source).filter(Boolean)).size;
    let tier = RANK[r.gf_confidence];
    if (tier === undefined) tier = sourced < claims.length ? 2 : distinct <= 1 ? 3 : 4;

    rows.push({ priority: tier, city, id: r.id, name: r.name,
      gf: r.gf_confidence, vegan: r.vegan_status,
      website: r.website || null, claims });
  }
}

rows.sort((a, b) => a.priority - b.priority || a.city.localeCompare(b.city) || a.id.localeCompare(b.id));

const dir = 'data/_cite_verify_shards';
fs.mkdirSync(dir, { recursive: true });
fs.mkdirSync('data/_cite_verify_results', { recursive: true });
for (const f of fs.readdirSync(dir)) if (/^r\d+\.json$/.test(f)) fs.unlinkSync(`${dir}/${f}`);

let n = 0;
for (let i = 0; i < rows.length; i += PER)
  fs.writeFileSync(`${dir}/r${n++}.json`, JSON.stringify(rows.slice(i, i + PER), null, 1));

const claims = rows.reduce((a, r) => a + r.claims.length, 0);
const uncited = rows.reduce((a, r) => a + r.claims.filter(c => !c.source).length, 0);
const byP = rows.reduce((a, r) => (a[r.priority] = (a[r.priority] || 0) + 1, a), {});
console.log(`${rows.length} records carrying ${claims} claims (${uncited} of them uncited)`);
console.log(`-> ${n} shard(s) of ${PER} in ${dir}\n`);
const LABEL = ['dedicated/high GF', 'options GF', 'has uncited claims', 'single source', 'rest'];
for (const [p, c] of Object.entries(byP)) console.log(`  priority ${p}  ${LABEL[p].padEnd(20)} ${String(c).padStart(5)} records  (shards r0..r${Math.ceil(c / PER) - 1} region)`);
