// Print a slice of the worklist for review: node scripts/gloss/show.mjs <w|r> <from> <to>
import fs from 'node:fs';
const [kind, a, b] = process.argv.slice(2);
const list = JSON.parse(fs.readFileSync('data/gloss/_worklist.json', 'utf8')).filter(x => kind === 'w' ? x.whole : !x.whole);
const show = f => f.map(([t, r]) => r ? `${t}(${r})` : t).join('');
console.log(`${kind}: ${list.length} items`);
for (let i = +a; i < Math.min(+b, list.length); i++) {
  const w = list[i];
  if (kind === 'w') console.log(`${i}\t${w.fields[0]}\t${w.run}`);
  else console.log(`${i}\t${w.run}\t${show(w.furi)}\t${w.needs_reading.join(',') ? '?' + w.needs_reading.join(',') : ''}\t${(w.ex[0] || '').replace(/\s+/g, ' ').slice(0, 70)}`);
}
