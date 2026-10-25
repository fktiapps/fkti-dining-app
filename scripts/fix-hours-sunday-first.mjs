// One-off repair: some early seed records stored `hours` Sunday-first (key 0 = Sun),
// but the app reads key 0 as Monday (index.html DAYNAME / jstParts). A record is
// rotated only when its own hours_raw names closed days that are open under the
// Monday-first reading and all closed under the Sunday-first one. Prints each fix.
//   node scripts/fix-hours-sunday-first.mjs          (dry run)
//   node scripts/fix-hours-sunday-first.mjs --write
import fs from 'fs';

const D = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const WRITE = process.argv.includes('--write');
const manifest = JSON.parse(fs.readFileSync('data/manifest.json', 'utf8'));
const cities = (manifest.cities || []).map(c => typeof c === 'string' ? c : c.id || c.key).filter(Boolean);

export function closedDays(raw) {
  const m = (raw || '').match(/closed (?:on )?((?:(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun)[a-z]*(?:\s*(?:,|&|and|\/)\s*)?)+)/i);
  if (!m) return null;
  const tail = raw.slice(m.index + m[0].length, m.index + m[0].length + 25);
  if (/holiday|fall|following|irregular Mon/i.test(m[0] + tail)) return null;
  return [...m[1].matchAll(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun)/gi)]
    .map(x => D.indexOf(x[1][0].toUpperCase() + x[1].slice(1, 3).toLowerCase()));
}

export function isSundayFirst(r) {
  const h = r.hours;
  if (!h || typeof h !== 'object' || !Object.values(h).some(v => v && v.length)) return false;
  const closed = closedDays(r.hours_raw);
  if (!closed || !closed.length) return false;
  const empty = k => !(h[k] && h[k].length);
  return !closed.every(i => empty(i)) && closed.every(i => empty((i + 1) % 7));
}

// Records the detector flags whose stored hours were Monday-first with a different
// slip, so a rotation would be wrong; these are rebuilt from their own hours_raw.
const L = [['11:30', '15:30']], E = ['17:00', '21:30'], W = ['16:30', '21:30'];
const OVERRIDE = {
  // "Dinner Mon-Fri 17:00-21:30; Sat/Sun/holidays 16:30-21:30. Closed Tuesdays"
  kz_restaurant_jiyuken: { 0: [...L, E], 1: [], 2: [...L, E], 3: [...L, E], 4: [...L, E], 5: [...L, W], 6: [...L, W] },
  // "Weekdays & Sat 10:00–17:00, Sun & holidays 11:00–17:00 … Closed Mon"
  himeji_marguerite_spoon: { 0: [], 1: [['10:00', '17:00']], 2: [['10:00', '17:00']], 3: [['10:00', '17:00']], 4: [['10:00', '17:00']], 5: [['10:00', '17:00']], 6: [['11:00', '17:00']] },
  // "Fri–Sun 11:00–16:00 (closed Mon–Thu …)"
  hiro_maichie_kitchen: { 0: [], 1: [], 2: [], 3: [], 4: [['11:00', '16:00']], 5: [['11:00', '16:00']], 6: [['11:00', '16:00']] },
};

if (process.argv[1] && process.argv[1].endsWith('fix-hours-sunday-first.mjs')) {
  let total = 0;
  for (const city of cities) {
    const file = `data/${city}.json`;
    if (!fs.existsSync(file)) continue;
    const raw = fs.readFileSync(file, 'utf8');
    const d = JSON.parse(raw);
    let n = 0;
    for (const r of d.places || []) {
      if (!isSundayFirst(r)) continue;
      const old = r.hours, rot = {};
      for (let k = 0; k < 7; k++) rot[k] = old[(k + 1) % 7] || [];
      if (OVERRIDE[r.id]) Object.assign(rot, OVERRIDE[r.id]);
      console.log(`${city} ${r.id} | ${r.hours_raw.slice(0, 80)}\n   ${D.map((x, k) => `${x}:${(rot[k] || []).map(w => w.join('-')).join(',') || '—'}`).join(' ')}`);
      r.hours = rot; n++;
    }
    if (n && WRITE) fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
    total += n;
  }
  console.log(`${total} record(s) ${WRITE ? 'rotated' : 'would rotate'}`);
}
