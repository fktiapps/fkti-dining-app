// 2026-11-05: kyoto_aisani_takasegawa (osw13 b27) was pinned on its Tabelog point, 90 m from the GSI lot
// match for its own address (市之町260-2), next to kyoto_takasegawa_maki at 市之町240-2. osw6 b5 then drafted
// お料理 MIYAMA at the same lot (市之町260-2), whose Tabelog point is 21 m from the same GSI lot point, so the
// two records sat 82 m apart. Aisani's Tabelog point is the outlier: move it to the GSI lot point.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_aisani_takasegawa');
if (!p) throw new Error('not found');
const GSI = { lat: 35.001579, lng: 135.769226 };
p.lat = GSI.lat; p.lng = GSI.lng;
p.pin_source = `GSI 京都府京都市下京区市之町260番地 (lot) ${GSI.lat}, ${GSI.lng}, the lot of its address 市之町260-2. ` +
  `Moved 2026-11-05 off the Tabelog point (35.002144, 135.769937, 90 m away, beside 市之町240-2): kyoto_oryori_miyama, ` +
  `also at 市之町260-2, has its Tabelog point 21 m from this GSI lot point, so Aisani's Tabelog point was the outlier.`;
writeCity('kyoto', c);
console.log('moved', p.id, GSI);
