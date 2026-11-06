// Greg 2026-11-06: an operator's own halal-certification claim turns the halal flag on (attributed in the text).
// 和牛ぱんが 祇園四条店: the operator's Tabelog text says its wagyu comes "with Halal Certification" (certifier not named);
// TableCheck calls the dishes "halal-friendly"; a September 2026 reviewer saw a prayer room.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_wagyu_panga_gion_shijo');
if (!p) throw new Error('not found');
p.flags.halal = true;
writeCity('kyoto', c);
console.log('halal on', p.id);
