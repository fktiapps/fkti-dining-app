// Pins closer than 3 m (visible records only). Two shops on one point hide each other on the map.
//   node scripts/check-stacked-pins.mjs [city ...]   → prints pairs; exit 1 if any
import { readCity } from './lib-city.mjs';
const cities = process.argv.slice(2).length ? process.argv.slice(2) : ['osaka', 'tokyo', 'kyoto'];
let total = 0;
for (const city of cities) {
  const ps = readCity(city).places.filter(p => !p.hidden && p.lat);
  for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) {
    const dy = (ps[i].lat - ps[j].lat) * 111320, dx = (ps[i].lng - ps[j].lng) * 111320 * Math.cos(ps[i].lat * Math.PI / 180);
    const d = Math.hypot(dx, dy);
    if (d < 3) { total++; console.log(`${city}\t${d.toFixed(1)}m\t${ps[i].id}\t${ps[j].id}`); }
  }
}
console.log(`stacked pairs: ${total}`);
process.exitCode = total ? 1 : 0;
