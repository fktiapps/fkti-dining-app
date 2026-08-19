// Merge researched station guides (data/_station_<city>.json) into data/stations.json.
//
// Normalises the per-row gf/vegan values first. index.html's chip() only knows
// 'yes' | 'ask' | 'no' and renders EVERYTHING else as a red ✗, so a row written
// with the restaurant taxonomy ('dedicated', 'options', 'full') would display as
// "not available" for a shop that is actually safe. Under-reporting is the safe
// direction, but it is still wrong, so map explicitly.
//
//   node scripts/merge-stations.mjs
import fs from 'node:fs';

const GF    = { dedicated: 'yes', high: 'yes', yes: 'yes', options: 'ask', ask: 'ask', no: 'no' };
const VEGAN = { full: 'yes', yes: 'yes', options: 'ask', limited: 'ask', ask: 'ask', no: 'no' };

const stations = JSON.parse(fs.readFileSync('data/stations.json', 'utf8'));
const pending = fs.readdirSync('data').filter(f => /^_station_.+\.json$/.test(f));

if (!pending.length) { console.log('no pending station files'); process.exit(0); }

let added = 0;
const problems = [];

for (const file of pending) {
  const city = file.replace(/^_station_|\.json$/g, '');
  const entry = JSON.parse(fs.readFileSync(`data/${file}`, 'utf8'));

  if (!entry.name || !Array.isArray(entry.sections) || !entry.sections.length) {
    problems.push(`${city}: missing name or sections — skipped`);
    continue;
  }

  let normalised = 0, rows = 0;
  for (const sec of entry.sections) {
    if (!sec.h || !Array.isArray(sec.rows)) { problems.push(`${city}: malformed section`); continue; }
    for (const r of sec.rows) {
      rows++;
      const g = GF[r.gf], v = VEGAN[r.vegan];
      if (g === undefined) { problems.push(`${city}: unknown gf value "${r.gf}" on "${r.t}" — forced to ask`); r.gf = 'ask'; }
      else { if (g !== r.gf) normalised++; r.gf = g; }
      if (v === undefined) { problems.push(`${city}: unknown vegan value "${r.vegan}" on "${r.t}" — forced to ask`); r.vegan = 'ask'; }
      else { if (v !== r.vegan) normalised++; r.vegan = v; }
    }
  }

  stations[city] = entry;
  added++;
  console.log(`${city}: ${entry.sections.length} sections, ${rows} rows, ${normalised} values normalised to yes/ask/no`);
}

fs.writeFileSync('data/stations.json', JSON.stringify(stations, null, 1));
console.log(`\n${added} station guide(s) merged. stations.json now covers: ${Object.keys(stations).join(', ')}`);
if (problems.length) { console.log('\nnotes:'); problems.forEach(p => console.log('  - ' + p)); }

// Archive the sources rather than deleting them. Deleting made a station guide
// unrecoverable when data/ was later reverted: the merged copy was rolled back and
// the only other copy had already been unlinked. Researched prose is expensive —
// keep a copy outside the merge target.
const archive = 'data/_station_archive';
if (!fs.existsSync(archive)) fs.mkdirSync(archive, { recursive: true });
for (const f of pending) {
  fs.copyFileSync(`data/${f}`, `${archive}/${f.replace(/^_station_/, '')}`);
  fs.unlinkSync(`data/${f}`);
}
console.log(`sources archived to ${archive}/`);
