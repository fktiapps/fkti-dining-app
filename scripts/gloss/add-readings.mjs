// Add reviewed reading overrides to CITY_READINGS.<city> in scripts/gloss/lib.mjs (keys already there
// are left alone). Used by scripts/sweep/integrate.sh with a worker's proposed, integrator-checked keys.
//   node scripts/gloss/add-readings.mjs <city> <readings.json: {"key": "reading", ...}>
import fs from 'node:fs';
const [city, file] = process.argv.slice(2);
const add = JSON.parse(fs.readFileSync(file, 'utf8'));
const f = 'scripts/gloss/lib.mjs';
const s = fs.readFileSync(f, 'utf8');
const head = `\n  ${city}: { `;
const at = s.indexOf(head);
if (at < 0) throw new Error(`no CITY_READINGS.${city} in ${f}`);
const start = at + head.length, line = s.slice(start, s.indexOf('\n', start));
const q = x => `'${String(x).replace(/'/g, "\\'")}'`;
const fresh = Object.entries(add).filter(([k]) => !line.includes(q(k) + ':'));
fs.writeFileSync(f, s.slice(0, start) + fresh.map(([k, v]) => `${q(k)}: ${q(v)}, `).join('') + s.slice(start));
console.log(`CITY_READINGS.${city}: +${fresh.length} (${Object.keys(add).length - fresh.length} already present)`);
