// 2026-11-02: the record said "Run by BLUE NOTE JAPAN, INC.", but the official site only says
// "Produced by Blue Note Tokyo" with a © BLUE NOTE JAPAN line. (A chain check on 2026-11-02 saw the shop on another company's
// shop list too, not cited here.) State only what the sources say.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('osaka');
const p = c.places.find(p => p.id === 'osaka_brooklyn_parlor_shinsaibashi');
const i = p.chef_bio.roles.indexOf('Run by BLUE NOTE JAPAN, INC. (official site)');
if (i < 0) throw new Error('role not found');
p.chef_bio.roles[i] = 'Produced by Blue Note Tokyo, © BLUE NOTE JAPAN (official site); operator not stated';
writeCity('osaka', c);
console.log('fixed', p.id);
