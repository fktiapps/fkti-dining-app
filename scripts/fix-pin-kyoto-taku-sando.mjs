// 2026-11-05: kyoto_taku_sando_sanjo (osw13-37) and kyoto_train_train (osw9-14) were drafted in parallel at the same lot
// (海老屋町327); their Tabelog points are 1.4 m apart. Offset Taku Sando ~6 m south (no stacked pins under 5 m).
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_taku_sando_sanjo');
if (!p) throw new Error('not found');
p.lat = +(p.lat - 0.000054).toFixed(6);
p.pin_source = (p.pin_source || '') + ' Offset ~6 m south on 2026-11-05: kyoto_train_train is on the same lot (海老屋町327) and Tabelog put the two 1.4 m apart.';
writeCity('kyoto', c);
console.log('moved', p.lat, p.lng);
