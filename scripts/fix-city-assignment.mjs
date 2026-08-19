// Mark records that sit in a different municipality from the city they are filed under.
//
// The app has nine cities. Some genuinely good GF finds are 20-70km outside the
// one they are filed under — SOYA is in Nomi, Sorebana is in Matsumoto, Kagome is
// in Toyohashi — and several records made it worse by describing themselves as
// "Nagoya area". A traveller planning a Nagano evening should not discover at the
// door that the shop is 51km away in Matsumoto.
//
// Deleting them would lose real finds and moving them is impossible (there is no
// Matsumoto in the manifest), so they stay put and carry an explicit `outside_city`
// marker that the UI renders on the card.
//
// NOT flagged: places that are administratively elsewhere but genuinely part of the
// host city's trip — Miyajima is Hatsukaichi City yet is *the* Hiroshima day trip,
// and Ise is half the name of the "Toba & Ise" city.
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const man = JSON.parse(fs.readFileSync('data/manifest.json', 'utf8'));
const centre = Object.fromEntries(man.cities.map(c => [c.id, c.center]));
const HOST = { kyoto:'京都', kanazawa:'金沢', nara:'奈良', hiroshima:'広島',
               nagano:'長野', toba:'鳥羽', nagoya:'名古屋', tokyo:'東京', himeji:'姫路' };

const PART_OF_TRIP = {
  hiroshima: /宮島|廿日市|Miyajima|Itsukushima|Hatsukaichi/i,
  toba:      /伊勢|Ise|二見|阿児|志摩|Shima|Kashikojima/i,
  kyoto:     /宇治|Uji|嵐山|Arashiyama|鞍馬|Kurama|大原|Ohara/i,
  nara:      /生駒|Ikoma/i,
};

const MIN_KM = 12;

const km = (a, b) => {
  const R = 6371, dLat = (b[0] - a[0]) * Math.PI / 180, dLng = (b[1] - a[1]) * Math.PI / 180;
  const la = a[0] * Math.PI / 180, lb = b[0] * Math.PI / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(la) * Math.cos(lb) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const cap = s => s[0].toUpperCase() + s.slice(1);

let flagged = 0, cleared = 0, deLied = 0;
const rows = [];

for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;

  for (const r of j.places) {
    const hood = String(r.neighborhood || '');
    const d = km(centre[city], [r.lat, r.lng]);

    // The exemption must survive one trap: "Tsu City — ~35-40 km N of Ise" names
    // Ise while being nowhere near it. So allow the token anywhere in the location
    // text, but veto whenever the text measures a distance AWAY from somewhere.
    // Deliberately dash-agnostic: the records mix en dashes, em dashes and tildes
    // ("~35-40 km N of Ise"), so match only on "<digit> km ... of/from".
    const measuresDistance = /\d\s*km\s+[NSEW]?\s*(of|from)\b/i.test(hood);
    const exempt = Boolean(PART_OF_TRIP[city]?.test(hood.slice(0, 60))) && !measuresDistance;

    const munis = (hood.match(/[一-龥ぁ-んァ-ヶ]{2,6}(?:市|町|村)/g) || [])
      .filter(m => !m.includes(HOST[city]));
    // English forms too — several records write "Karuizawa Town" with no kanji.
    // "Hotchi (Lake New Town), Karuizawa Town" matches twice; the real
    // municipality is the trailing one, so keep the last and drop generic heads.
    const enMuni = [...hood.matchAll(/\b([A-Z][A-Za-z-]+)\s+(City|Town|Village)\b/g)]
      .map(m => `${m[1]} ${m[2]}`)
      .filter(m => !new RegExp(city, 'i').test(m))
      .filter(m => !/^(New|Old|Lake|Castle|Station|Onsen)\s/i.test(m))
      .reverse();

    const elsewhere = munis.length > 0 || enMuni.length > 0;

    if (d >= MIN_KM && elsewhere && !exempt) {
      const muni = munis[0] || enMuni[0] || null;
      r.outside_city = {
        municipality: muni,
        km: Math.round(d),
        note: `Filed under ${cap(city)} but actually ${Math.round(d)} km away${muni ? ` in ${muni}` : ''} — plan it as a separate trip, not an evening out.`,
      };
      flagged++; dirty = true;
      rows.push(`${city.padEnd(10)}${String(Math.round(d)).padStart(3)}km  ${r.gf_confidence.padEnd(10)}${r.name.split(' (')[0].slice(0, 32)}`);
    } else if (r.outside_city) {
      delete r.outside_city; cleared++; dirty = true;
    }

    // The "<host city> area" suffix is false wherever the record itself names
    // another municipality — that phrasing is the actual falsehood, and it is
    // wrong whether or not the place cleared the distance threshold.
    if (elsewhere && !exempt) {
      const lie = new RegExp(`\\s*[/／]?\\s*(?:${HOST[city]}|${city})\\s*(?:area|エリア|周辺)`, 'gi');
      if (lie.test(hood)) {
        r.neighborhood = hood.replace(lie, '').replace(/\s*[/／,、]\s*$/, '').trim();
        deLied++; dirty = true;
      }
    }
  }
  if (dirty) writeCity(city, j);
}

rows.sort();
rows.forEach(r => console.log('  ' + r));
console.log(`\n${flagged} records marked outside_city, ${cleared} cleared, ${deLied} misleading "<city> area" suffixes removed`);
