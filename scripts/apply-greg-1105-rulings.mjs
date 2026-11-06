// Greg's answers, 2026-11-05 (asked one by one by the integrator):
//  Q1 hide the 11 legacy Kyoto records with signs of closure but no confirmation (existence review borderline list).
//  Q3 restore UNO RAMEN -Kyoto Station- to gf "dedicated" (operator FAQ: all items GF, no wheat flour in the
//     kitchen, noodles from a GF-only factory; the food court shares seating, not kitchen).
//  Q5 guests-only inn meals are not listed: hide 俵屋旅館 (meals only with an overnight stay).
import { readCity, writeCity } from './lib-city.mjs';
const TODAY = '2026-11-05';
const c = readCity('kyoto');
const get = id => { const p = c.places.find(p => p.id === id); if (!p) throw new Error('not found ' + id); return p; };

const q1 = {
  kyr_menshin_yoshida: 'a 2026-10-22 terukosan.com article cites another ramen site showing a closed notice; Tabelog "Listing on hold".',
  vm_little_heaven: 'Google Maps data (wanderlog) shows "Temporarily Closed"; newest Tabelog visit 2016.',
  kyr_yatai_ramen_kyoto_chuka_: 'food stall whose Instagram has had no post since 2023-12-01.',
  ChIJg8sFuNAJAWAR9lZXk1XYo8s: 'its TableCheck page is gone ("off the menu"), as for its hidden sister shops.',
  ChIJ1ZkRawAJAWARUlQkpI7Sh94: 'newest Tabelog visit 2019; conflicting addresses online.',
  vm_yume_ya: 'newest Tabelog visit 2019; same-shop identity unconfirmed.',
  kyo_oubon: 'Tabelog "Listing on hold"; newest visit 2023.',
  vm_kyono_juice: 'Tabelog "Listing on hold"; newest visit 2019; website returns 401.',
  vm_social_kitchen: 'Tabelog "Listing on hold"; newest visit 2019; website DNS fails.',
  kyo_everysoy: 'Tabelog "Listing on hold"; newest visit 2025-04; brand Instagram names no store.',
  kyr_menya_roman: 'its Tabelog link is a different shop (すたんど ろまん家); no 麺家ろまん found.',
};
for (const [id, why] of Object.entries(q1)) {
  const p = get(id); if (p.hidden) continue;
  p.existence = { status: 'unresolved', checked: TODAY,
    note: 'Hidden per Greg 2026-11-05 (existence review): signs of closure, nothing confirms it is open — ' + why };
  p.hidden = 'unverified';
}

const uno = get('ChIJq_Gt7mUJAWARdOvjkos8A7s');
uno.gf_confidence = 'dedicated'; uno.gf_label = 'Dedicated gluten-free';
uno.safety = uno.safety || {};
uno.safety.owner_signoff = { decision: 'keep', field: 'gf_confidence', from: 'options', to: 'dedicated', by: 'Greg', date: TODAY,
  reason: 'Restored after the rebuild: the operator FAQ says every item is gluten-free, no wheat flour is used in the kitchen, and the noodles come from its GF-only factory; the Ramen Koji food court shares seating, not the kitchen.' };

const taw = get('kyoto_tawaraya_ryokan');
taw.hidden = 'guests_only';

writeCity('kyoto', c);
console.log('Q1 hidden', Object.keys(q1).length, '| Q3 UNO dedicated | Q5 Tawaraya hidden');
