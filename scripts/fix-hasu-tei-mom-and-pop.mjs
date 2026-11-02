// 2026-11-02: はす亭 was drafted mom_and_pop:true for a father-and-son shop. The brief (line 11) sets it
// true only for one person or a couple; parent-and-child is put to Greg as a question. Match the brief.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('osaka');
const p = c.places.find(p => p.id === 'osaka_hasu_tei_mikuni');
if (!p || p.mom_and_pop !== true) throw new Error('not found or already false');
p.mom_and_pop = false;
writeCity('osaka', c);
console.log('fixed', p.id);
