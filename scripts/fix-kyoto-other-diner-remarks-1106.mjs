// Greg 2026-11-06: remarks about OTHER diners stay only when they are a pattern across multiple reviews;
// a single review's complaint about other customers (e.g. "rude foreigners") is left out. These two were single reviews.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const drop = {
  kyoto_cafe_karirenge: /group of foreigners came in and started chatting loudly/,
  kyoto_le_temps_granvia: /foreign guests pushed in from the side/,
};
for (const [id, re] of Object.entries(drop)) {
  const p = c.places.find(p => p.id === id);
  if (!p) throw new Error('not found ' + id);
  const a = p.chef_bio.anecdotes, n = a.length;
  p.chef_bio.anecdotes = a.filter(x => !re.test(typeof x === 'string' ? x : x.text));
  if (p.chef_bio.anecdotes.length !== n - 1) throw new Error('expected one removal in ' + id);
  console.log('removed 1 from', id);
}
writeCity('kyoto', c);
