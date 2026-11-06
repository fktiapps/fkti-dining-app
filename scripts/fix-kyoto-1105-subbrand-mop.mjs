// 2026-11-05 follow-ups from osw9-12:
// - 柚子元 京都先斗町店 (osw9-4) is a KIWA Corporation brand; KIWA lists ~90 restaurant brands (its 膳處漢ぽっちり was
//   skipped in osw9-12). Drafted before Greg's 2026-11-05 sub-brand ruling; hidden as a chain for consistency.
// - hikari-yurari (osw9-11): mom_and_pop true rested on one "operates the kitchen solo" review while another review
//   mentions service staff; mom_and_pop needs one person or a couple running it, so false.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const g = id => { const p = c.places.find(p => p.id === id); if (!p) throw new Error(id); return p; };
g('kyoto_yuzugen_pontocho').hidden = 'chain';
g('kyoto_hikari_yurari').mom_and_pop = false;
writeCity('kyoto', c);
console.log('done');
