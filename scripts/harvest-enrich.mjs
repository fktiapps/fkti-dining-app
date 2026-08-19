// Harvest enrichment results from a workflow journal.jsonl, REPAIR the occasional
// `<parameter name=...>` tag-leak (a model sometimes serializes its structured
// output as pseudo-XML text inside a string value, absorbing the next field), and
// append the clean records to data/_tokyo3_enrich.json (dedup by id, latest wins).
//
//   node scripts/harvest-enrich.mjs <path-to-journal.jsonl> [more.jsonl ...]
//
// Safe to run repeatedly. Reports leak repairs so we can watch the rate.
import fs from 'fs';

const OUT = 'data/_tokyo3_enrich.json';
const journals = process.argv.slice(2);
if (!journals.length) { console.error('usage: harvest-enrich.mjs <journal.jsonl> [...]'); process.exit(1); }

// Split a leaked string: everything before the first `</tag>` or `<parameter name=`
// is the clean value; trailing `<parameter name="K">V` chunks are recovered fields.
const MARKER = /<\/[a-z_]+>|<parameter\s+name=/i;
function unleak(obj) {
  const recovered = {};
  let leaked = false;
  for (const [k, v] of Object.entries(obj)) {
    if (typeof v !== 'string') continue;
    const m = v.match(MARKER);
    if (!m) continue;
    leaked = true;
    obj[k] = v.slice(0, m.index).replace(/\s*<\/[a-z_]+>\s*$/i, '').trim();
    const tail = v.slice(m.index);
    const re = /<parameter\s+name="([^"]+)">([\s\S]*?)(?=<parameter\s+name=|$)/gi;
    let pm;
    while ((pm = re.exec(tail))) {
      const key = pm[1];
      let val = pm[2].replace(/\s*<\/[a-z_]+>\s*$/i, '').trim();
      if (recovered[key] === undefined) recovered[key] = val;
    }
  }
  for (const [k, val] of Object.entries(recovered)) {
    if (obj[k] !== undefined && obj[k] !== '' && !(Array.isArray(obj[k]) && !obj[k].length)) continue;
    let parsed = val;
    if (/^\s*[[{]/.test(val)) { try { parsed = JSON.parse(val); } catch { /* keep string */ } }
    obj[k] = parsed;
  }
  return { obj, leaked };
}

// existing accumulator
let acc = [];
if (fs.existsSync(OUT)) { try { acc = JSON.parse(fs.readFileSync(OUT, 'utf8')); } catch {} }
if (acc && acc.results) acc = acc.results;
const byId = new Map(acc.map(r => [r.id, r]));

let harvested = 0, repaired = 0;
for (const jp of journals) {
  const lines = fs.readFileSync(jp, 'utf8').trim().split('\n');
  for (const l of lines) {
    let j; try { j = JSON.parse(l); } catch { continue; }
    if (j.type !== 'result') continue;
    let r = j.result != null ? j.result : (j.value != null ? j.value : j);
    const objs = r && r.results ? r.results : [r];
    for (const o of objs) {
      if (!o || !o.id || !o.enrich_confidence) continue;
      const { obj, leaked } = unleak(o);
      if (leaked) repaired++;
      byId.set(obj.id, obj); // latest wins
      harvested++;
    }
  }
}
const merged = [...byId.values()];
fs.writeFileSync(OUT, JSON.stringify(merged, null, 1));
console.log(`harvested ${harvested} results (${repaired} had tag-leak, repaired) → ${OUT} now holds ${merged.length} unique records`);
