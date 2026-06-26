// Apply a DCP patch exported from dcp-tool.html onto the city data.
// Patch shape: { <city>: { <id>: { greg_note, visited, _new_name? } } }
// Usage: node scripts/build-dcp.mjs <patch.json>
import fs from 'fs';

const path = process.argv[2];
if (!path) throw new Error('usage: node scripts/build-dcp.mjs <patch.json>');
const patch = JSON.parse(fs.readFileSync(path, 'utf8'));

function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }

let applied = 0; const unmatched = [], pendingNew = []; let touchedAnyCity = false;
for (const [city, entries] of Object.entries(patch)) {
  const file = `data/${city}.json`;
  if (!fs.existsSync(file)) { console.log(`(skip) no data file for city "${city}"`); continue; }
  const d = JSON.parse(fs.readFileSync(file, 'utf8'));
  const idx = new Map(d.places.map(p => [p.id, p]));
  let n = 0;
  for (const [id, dcp] of Object.entries(entries)) {
    const p = idx.get(id);
    if (!p) {
      if (dcp._new_name) pendingNew.push(`${city}: ${dcp._new_name} (${id}) — needs a full researched place record before its DCP note can attach`);
      else unmatched.push(`${city}:${id}`);
      continue;
    }
    const note = (dcp.greg_note || '').trim();
    if (!note) { continue; } // skip empty drafts
    p.dcp = { greg_note: note, visited: dcp.visited || null };
    n++; applied++;
  }
  if (n) { fs.writeFileSync(file, ser(d)); touchedAnyCity = true; console.log(`${city}: applied ${n} DCP note(s)`); }
}

if (touchedAnyCity) {
  // bump SW so the 🌸 notes refresh in installed apps
  for (const f of ['sw.js', 'index.html']) {
    let s = fs.readFileSync(f, 'utf8');
    const m = s.match(/dcd-v(\d+)/); if (!m) continue;
    const next = `dcd-v${Number(m[1]) + 1}`;
    s = s.split(`dcd-v${m[1]}`).join(next); fs.writeFileSync(f, s);
  }
  console.log('SW bumped (data changed).');
}
console.log(`\nTOTAL DCP applied: ${applied}`);
if (pendingNew.length) { console.log(`\nNEW places needing a full record first (${pendingNew.length}):`); pendingNew.forEach(x => console.log('  • ' + x)); }
if (unmatched.length) console.log(`\nUnmatched ids: ${unmatched.join(', ')}`);
console.log('\nReminder: Greg deploys (npm run deploy). The DCP acknowledgment gate + 🌸 badge activate automatically for places with a dcp note.');
