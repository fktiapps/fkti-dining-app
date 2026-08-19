// Fit each city's manifest bounds to the records it actually contains.
// The declared boxes were drawn around city cores, so 109 legitimate records
// (Karuizawa in Nagano, Ise in Toba, Miyajima in Hiroshima ...) fell outside and
// would never trigger the "you are in this city" lookup.
import fs from 'node:fs';
import { readCity } from './lib-city.mjs';

const MARGIN = 0.01;                       // ~1.1km of slack
const man = JSON.parse(fs.readFileSync('data/manifest.json', 'utf8'));

for (const c of man.cities) {
  const places = readCity(c.id).places;
  const lats = places.map(p => p.lat), lngs = places.map(p => p.lng);
  const fitted = [
    [+(Math.min(...lats) - MARGIN).toFixed(4), +(Math.min(...lngs) - MARGIN).toFixed(4)],
    [+(Math.max(...lats) + MARGIN).toFixed(4), +(Math.max(...lngs) + MARGIN).toFixed(4)],
  ];
  const [[s0,w0],[n0,e0]] = c.bounds;
  const oobBefore = places.filter(p => p.lat<s0||p.lat>n0||p.lng<w0||p.lng>e0).length;
  c.bounds = fitted;
  const oobAfter = places.filter(p => p.lat<fitted[0][0]||p.lat>fitted[1][0]||p.lng<fitted[0][1]||p.lng>fitted[1][1]).length;
  console.log(`${c.id.padEnd(11)} oob ${String(oobBefore).padStart(3)} -> ${oobAfter}   ${JSON.stringify(fitted)}`);
}

// report overlaps — cityAt() must disambiguate these by nearest center
const ov = [];
for (let i = 0; i < man.cities.length; i++)
  for (let j = i + 1; j < man.cities.length; j++) {
    const a = man.cities[i].bounds, b = man.cities[j].bounds;
    if (a[0][0] <= b[1][0] && b[0][0] <= a[1][0] && a[0][1] <= b[1][1] && b[0][1] <= a[1][1])
      ov.push(`${man.cities[i].id} x ${man.cities[j].id}`);
  }
console.log(ov.length ? `\noverlapping boxes (cityAt resolves by nearest center): ${ov.join(', ')}` : '\nno overlaps');

fs.writeFileSync('data/manifest.json', JSON.stringify(man, null, 1));
