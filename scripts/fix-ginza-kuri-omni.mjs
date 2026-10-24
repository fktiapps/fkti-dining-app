// Ginza sweep correction (2026-10-24): 立ち呑み 庫裏 was shipped in batch 26 as MOM_AND_POP, but it is one shop of a small
// 庫裏 sake-bar group in Shimbashi and Ginza (a 2012 Retty reviewer calls it the third shop; Retty also lists 和酒BAR 庫裏
// 銀座店, and san-tatsu names 和酒Pub 庫裏 on B1 of the same building). Multi-branch → OMNI under the mom-and-pop test.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
const { readLang, mergePlace, writeLang } = await import(pathToFileURL(path.resolve('scripts/lib-i18n.mjs')).href);

const ID = 'tokyo_tachinomi_kuri_shimbashi';
const RT = 'https://retty.me/theme/100644500/';
const file = 'data/tokyo.json'; const raw = fs.readFileSync(file, 'utf8'); const d = JSON.parse(raw);
const p = d.places.find(x => x.id === ID); if (!p) throw new Error('missing ' + ID);
if (p.category === 'OMNI') { console.log(ID + ': already OMNI'); process.exit(0); }

const EN_OLD = "[Mom & Pop · the sake shop's standing bar] ";
const EN_ADD = " It is one of a small group of 庫裏 sake bars in Shimbashi and Ginza: a 2012 reviewer called it the group's third shop, and Retty also lists a 和酒BAR 庫裏 in Ginza.";
const JA_OLD = '[個人店・酒屋の立ち呑み] ';
const JA_ADD = '新橋と銀座にある「庫裏」の日本酒の店のひとつで、2012年の口コミでは3店舗目、Rettyには「和酒BAR 庫裏 銀座店」も掲載されています。';
if (!p.notes.startsWith(EN_OLD)) throw new Error('EN notes prefix changed');
p.category = 'OMNI'; p.mom_and_pop = false;
p.notes = "[Standing sake bar · the Kurihara family's sake shop] " + p.notes.slice(EN_OLD.length) + EN_ADD;
p.chef_bio.sources = [...p.chef_bio.sources, RT];
p.corrections = [...(p.corrections || []), { date: '2026-10-24', field: 'category', from: 'MOM_AND_POP', to: 'OMNI', reason: 'Multi-branch 庫裏 group (Shimbashi and Ginza).', source: RT }];
fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));

const ja = readLang('tokyo', 'ja'); const jn = ja[ID]?.notes ?? ja.places?.[ID]?.notes;
if (!jn || !jn.startsWith(JA_OLD)) throw new Error('JA notes prefix changed');
mergePlace(ja, ID, { notes: '[日本酒の立ち呑み・栗原家の酒屋] ' + jn.slice(JA_OLD.length) + JA_ADD });
writeLang('tokyo', 'ja', ja);
console.log(ID + ': MOM_AND_POP -> OMNI');
