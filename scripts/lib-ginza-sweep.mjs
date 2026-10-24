// Shared plumbing for the Ginza half-mile sweep batches (scripts/add-ginza-sweep-bN.mjs, from batch 3).
// Loads Tokyo, its menus, the JA overlay and the GF upgrade queue; `put` adds a new record or researches a
// sweep placeholder in place (keeping its id and provenance, dropping `hidden`); `save` writes everything.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
const { readLang, mergePlace, writeLang } = await import(pathToFileURL(path.resolve('scripts/lib-i18n.mjs')).href);

export function openSweep(date) {
  const file = 'data/tokyo.json'; const raw = fs.readFileSync(file, 'utf8'); const d = JSON.parse(raw);
  const mf = 'data/tokyo_menus.json'; const menus = JSON.parse(fs.readFileSync(mf, 'utf8'));
  const qf = 'data/_underrated_queue.json'; const queue = JSON.parse(fs.readFileSync(qf, 'utf8'));
  const ja = readLang('tokyo', 'ja');
  const SWEEP = { name: 'ginza-half-mile', center: 'Ginza Station', radius_m: 805, date };
  const log = [];
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
    if (upgrade && !queue.some(q => q.id === place.id && q.field === upgrade.field)) { queue.push({ city: 'tokyo', id: place.id, name: place.name, ...upgrade }); log.push(`  queued ${upgrade.field} -> ${upgrade.recommended}`); }
  };
  const save = () => {
    fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
    fs.writeFileSync(mf, JSON.stringify(menus, null, 1));
    fs.writeFileSync(qf, JSON.stringify(queue, null, 1) + '\n');
    writeLang('tokyo', 'ja', ja);
    console.log(log.join('\n')); console.log(`Tokyo now ${d.places.length} places; underrated queue ${queue.length}.`);
  };
  return { put, save };
}

export const gm = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
export const it = (ja, romaji, en, price, section, gf, vegan, note, dish_key) => ({ ja, romaji, en, price, section, gf, vegan, note, dish_key });
export const day = (...spans) => spans;
// Same meal/peripheral split as the research-request records, so menu_*_meals counts agree across the app.
const MEAL = /main|entree|course|set\b|teishoku|定食|丼|donburi|rice bowl|curry|カレー|hot ?pot|nabe|鍋|grill|teppan|鉄板|焼|主菜|おかず|lunch|dinner|noodle|麺|ramen|そば|うどん|soba|udon|pasta|burger|sandwich|plate|sushi|寿司|鮨|bento|弁当|定番|ご飯もの|gohan/i;
const PERIPH = /drink|beverage|ドリンク|コーヒー|珈琲|coffee|\btea\b|茶|dessert|sweets|デザート|甘味|スイーツ|パフェ|cake|ケーキ|\bside|サイド|小鉢|副菜|pickle|漬|appetiz|前菜|snack|topping|トッピング|salad|サラダ/i;
const isMeal = i => !PERIPH.test(i.section) && (MEAL.test(i.section) || MEAL.test(i.en + ' ' + i.ja));
export const counts = items => ({
  menu_gf_count: items.filter(i => i.gf === 'gf').length, menu_vegan_count: items.filter(i => i.vegan === 'vegan').length,
  menu_gf_meals: items.filter(i => i.gf === 'gf' && isMeal(i)).length, menu_vegan_meals: items.filter(i => i.vegan === 'vegan' && isMeal(i)).length,
  menu_gf_ask_count: items.filter(i => i.gf === 'ask').length,
});
