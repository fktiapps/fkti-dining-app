// City-agnostic version of lib-ginza-sweep.mjs, for the radius sweeps run from scripts/sweep/<city>/.
// `put` adds a new record (or researches a placeholder in place), `save` writes the city file
// (keeping its on-disk formatting), its menus, the JA overlay and the GF upgrade queue, and marks
// each added id 'done' in scripts/sweep/<city>/queue-status.jsonl so the queue advances.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { counts } from './lib-ginza-sweep.mjs';
const { readLang, mergePlace, writeLang } = await import(pathToFileURL(path.resolve('scripts/lib-i18n.mjs')).href);
export { gm, it, day } from './lib-ginza-sweep.mjs';

export function openCitySweep(city, date, batch) {
  const cfg = JSON.parse(fs.readFileSync(`scripts/sweep/${city}/config.json`, 'utf8'));
  // A sweep folder can feed another city's data (osaka-kita → data/osaka.json): config.data_city.
  const sweepDir = city; city = cfg.data_city || city;
  const file = `data/${city}.json`; const raw = fs.readFileSync(file, 'utf8'); const d = JSON.parse(raw);
  const mf = `data/${city}_menus.json`; const menus = fs.existsSync(mf) ? JSON.parse(fs.readFileSync(mf, 'utf8')) : {};
  const qf = 'data/_underrated_queue.json'; const queue = JSON.parse(fs.readFileSync(qf, 'utf8'));
  const ja = readLang(city, 'ja');
  const SWEEP = { name: cfg.sweep_name, center: cfg.center_label, radius_m: cfg.radius_m, date };
  const statusFile = `scripts/sweep/${sweepDir}/queue-status.jsonl`;
  const log = [], doneIds = [];
  const put = (place, menu, jaFields, upgrade) => {
    Object.assign(place, { has_menu: true, menu_verified: menu.verified, ...counts(menu.items), sweep: SWEEP });
    const i = d.places.findIndex(p => p.id === place.id);
    if (i > -1) {
      const old = d.places[i];
      if (old.sweep && old.sweep.name === SWEEP.name) { log.push(`${place.id}: already done`); return; }
      const keep = {};
      for (const k of ['source_pass', 'name_renamed', 'merged_from']) if (old[k] !== undefined) keep[k] = old[k];
      keep.researched_from_placeholder = { date, prior_name: old.name, prior_hidden: old.hidden || null };
      d.places[i] = { ...place, ...keep };
      log.push(`${place.id}: researched in place and unhidden`);
    } else { d.places.push(place); log.push(`${place.id}: added`); }
    menus[place.id] = menu; mergePlace(ja, place.id, jaFields);
    const tb = JSON.stringify(place).match(/tabelog\.com\/en\/[a-z]+\/A\d+\/A\d+\/(\d{8})\//);
    if (tb) doneIds.push({ id: tb[1], record: place.id });
    if (upgrade && !queue.some(q => q.id === place.id && q.field === upgrade.field)) { queue.push({ city, id: place.id, name: place.name, ...upgrade }); log.push(`  queued ${upgrade.field} -> ${upgrade.recommended}`); }
  };
  // Record a candidate deliberately left out (closed, unverifiable, duplicate …) so it is not re-offered.
  const skip = (id, reason) => { fs.appendFileSync(statusFile, JSON.stringify({ id, status: 'skipped', reason, batch, at: date }) + '\n'); log.push(`${id}: skipped — ${reason}`); };
  const save = () => {
    fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
    fs.writeFileSync(mf, JSON.stringify(menus, null, 1));
    fs.writeFileSync(qf, JSON.stringify(queue, null, 1) + '\n');
    writeLang(city, 'ja', ja);
    for (const x of doneIds) fs.appendFileSync(statusFile, JSON.stringify({ id: x.id, status: 'done', record: x.record, batch, at: date }) + '\n');
    console.log(log.join('\n')); console.log(`${cfg.name} now ${d.places.length} places; underrated queue ${queue.length}.`);
  };
  return { put, skip, save, cfg };
}
