// Merge a first pass of the Nagano Station (500 m) dining circle into data/nagano.json.
// Researched via web search 2026-07-21 (Tabelog/HotPepper/official + local guides). WebFetch was
// blocked, so COORDINATES ARE APPROXIMATE (clustered in the Zenkō-ji-guchi dining blocks NW of the
// station) and flagged loc_approx:'block' + an approx note — a precise geocode pass can follow.
// Dedupes against the existing 104 (Zenkō-ji) places; extends the map bounds south to the station.
import fs from 'fs';
const file = 'data/nagano.json';
const d = JSON.parse(fs.readFileSync(file, 'utf8'));
const APPROX = ' · 📍 Approx. map location — confirm the exact spot.';
const gfLabel = g => ({ dedicated: 'Dedicated gluten-free', high: 'Strong GF focus', options: 'Some GF options', ask: 'GF — ask staff', no: 'Not gluten-free' }[g]);
const vgLabel = v => ({ full: 'Fully vegan', options: 'Vegan options', limited: 'Limited vegan options', ask: 'Vegan — ask', no: 'Not vegan' }[v]);
const slug = s => 'nagano_' + s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 28);
const gmaps = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q + ' 長野駅');

function mk(o) {
  return {
    id: o.id || slug(o.en), name: o.name, category: o.category,
    lat: o.lat, lng: o.lng, loc_approx: 'block',
    gf_confidence: o.gf, gf_label: gfLabel(o.gf), gf_detail: o.gf_detail,
    vegan_status: o.vg, vegan_label: vgLabel(o.vg), vegan_detail: o.vg_detail,
    hours_raw: o.hours_raw, hours: o.hours || {}, hours_status: o.hours_status || 'irregular',
    flags: Object.assign({ reservation: false, cash_only: false, halal: false, open_late: false }, o.flags || {}),
    neighborhood: o.hood, cuisine: o.cuisine, website: o.website || null,
    gmaps: gmaps(o.name), menu_url: null,
    notes: o.notes + APPROX,
    chef_bio: { chef_name: null, roles: o.roles || [], origin: 'Nagano (Shinshu)', background: o.bg || null, philosophy: null, specialty: o.specialty || null, anecdotes: [], japanese_sources_summary: o.jp_sum || '', confidence: 'low', sources: o.sources || [] },
    cultural_comfort: { level: o.cc, note: o.cc_note },
    cultural_comfort_note: o.cc_note,
    cuisine_type: o.ctype,
    safety: { dedicated_fryer: null, gf_cross_contamination: o.gf_cc || [], soy_sauce_wheat: o.soy || [], vegan_cross_contact: o.vcc || [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: '2026-07-21' },
    has_menu: false, menu_verified: null,
    mom_and_pop: !!o.mp,
  };
}

const TB = u => u; // tabelog url passthrough for sources
const NEW = [
  mk({ en: 'ramen misoya', name: 'らぁめん みそ家 (Ramen Misoya)', category: 'OMNI', lat: 36.6441, lng: 138.1884,
    cuisine: 'Ramen · Shinshu miso', ctype: 'ramen', hood: 'Minami-Ishidō-chō (Nagano Stn · Zenkō-ji exit, ~1 min)',
    gf: 'no', gf_detail: 'Wheat ramen noodles and a Shinshu-miso base (miso commonly contains wheat/barley) — not gluten-free.',
    vg: 'no', vg_detail: 'Pork/miso broth — not vegan; no documented vegan bowl.',
    hours_raw: 'Around 11:00 to late; lines common — confirm.', cc: 'konnichiwa', cc_note: 'A busy, famous ramen counter by the station; point-and-order works, a little Japanese helps.',
    notes: '[Ramen] A famous Shinshu-miso ramen shop ~1 min from Nagano Station (Suehiro exit), founded 1959 — deep, rich miso broth with pork and vegetable sweetness; queues are common.',
    specialty: 'Shinshu-miso ramen', sources: [TB('https://tabelog.com/en/nagano/A2001/A200101/20001391/')],
    soy: [{ text: 'Miso and the tare are wheat-containing; ramen noodles are wheat. Assume gluten throughout.', source: 'https://tabelog.com/en/nagano/A2001/A200101/20001391/' }] }),

  mk({ en: 'menshou sakura ekimae', name: '麺匠佐蔵 長野駅前店 (Menshō Sakura)', category: 'OMNI', lat: 36.6438, lng: 138.1887,
    cuisine: 'Ramen · miso / tsukemen', ctype: 'ramen', hood: 'Minami-Chitose (Nagano Stn front)',
    gf: 'no', gf_detail: 'Wheat ramen/tsukemen noodles and miso base — not gluten-free.',
    vg: 'no', vg_detail: 'Meat/miso stock — not vegan.',
    hours_raw: 'Lunch to evening; confirm.', cc: 'konnichiwa', cc_note: 'Station-front ramen shop used to visitors; a little Japanese or pointing helps.',
    notes: '[Ramen] The station-front branch of Sakura, known for Shinshu-miso ramen and thick-noodle tsukemen.',
    specialty: 'Miso ramen / tsukemen', sources: [TB('https://tabelog.com/en/nagano/A2001/A200101/20019722/')] }),

  mk({ en: 'sobatei aburaya', name: 'そば亭 油や (Sobatei Aburaya)', category: 'OMNI', lat: 36.6436, lng: 138.1886,
    cuisine: 'Soba (Shinshu) · tempura', ctype: 'udon_soba', hood: 'Minami-Chitose (Nagano Stn, ~30 sec)',
    gf: 'ask', gf_detail: 'Shinshu soba, but noodles are usually nihachi (≈20% wheat) and the dipping tsuyu is made with wheat soy sauce. Ask for jūwari (100% buckwheat) and confirm the tsuyu before ordering.',
    vg: 'limited', vg_detail: 'Tsuyu and most dishes use bonito dashi; tempura is wheat-battered. Plain zaru soba is possible but the dipping sauce is fish-based — confirm.',
    hours_raw: 'Daily 11:00–22:00 (food LO 21:30).', hours_status: 'regular',
    hours: { '0': [['11:00', '22:00']], '1': [['11:00', '22:00']], '2': [['11:00', '22:00']], '3': [['11:00', '22:00']], '4': [['11:00', '22:00']], '5': [['11:00', '22:00']], '6': [['11:00', '22:00']] },
    cc: 'konnichiwa', cc_note: 'A convenient soba house right by the station; used to travelers.',
    website: 'https://sobateiaburaya.owst.jp/',
    notes: '[Soba] A Shinshu-soba house ~30 seconds from the station — soba, tempura and local dishes, and banquet seating; handy for a quick, dependable bowl right off the train.',
    specialty: 'Shinshu soba, tempura', sources: [TB('https://tabelog.com/en/nagano/A2001/A200101/20000145/'), 'https://sobateiaburaya.owst.jp/'],
    soy: [{ text: 'Soba tsuyu is built on wheat-containing soy sauce; buckwheat noodles are often cut with wheat flour (nihachi). Request jūwari + wheat-free tsuyu.', source: 'https://sobateiaburaya.owst.jp/' }] }),

  mk({ en: 'shinshu soba shinano', name: '信州蕎麦処 しなの (Shinano · platform soba)', category: 'MOM_AND_POP', lat: 36.6432, lng: 138.1892, mp: true,
    cuisine: 'Standing soba (tachigui)', ctype: 'udon_soba', hood: 'On the JR Nagano Station platform',
    gf: 'no', gf_detail: 'Quick standing-soba: blended (wheat) noodles and wheat-based tsuyu — not gluten-free.',
    vg: 'limited', vg_detail: 'Fish-dashi tsuyu; toppings are mostly tempura (wheat). Kake/plain soba possible but the broth is fish-based.',
    hours_raw: 'On the in-bound JR platform; open around train hours.', cc: 'japanese', cc_note: 'A fast tachigui (stand-and-eat) counter — Japanese-only, order by ticket/pointing, eat quickly.',
    notes: '[Mom & Pop · soba] A stand-and-eat soba counter on the JR platform — a beloved quick Shinshu-soba stop between trains (the ebi-ten soba is the classic).',
    specialty: 'Ebi-ten tachigui soba', roles: ['counter soba stand'], sources: ['https://www.hahahaishya.com/2025-01-30/'] }),

  mk({ en: 'shinshu nagaya sakaba', name: '信州長屋酒場 長野駅善光寺口店 (Shinshu Nagaya Sakaba)', category: 'OMNI', lat: 36.6440, lng: 138.1882,
    cuisine: 'Izakaya · Shinshu kyōdo-ryōri', ctype: 'izakaya', hood: 'Nagano Stn · Zenkō-ji exit',
    gf: 'ask', gf_detail: 'Broad izakaya menu; soy sauce, miso and tempura are wheat-based and the fryer is shared. Some grilled/sashimi items may work — ask and specify no soy/tare.',
    vg: 'limited', vg_detail: 'Lots of vegetable and sansai (mountain-vegetable) dishes and oyaki, but dashi/soy run through them and there is game (matagi) hot pot. Confirm each item.',
    hours_raw: 'Evenings (izakaya) — confirm.', flags: { reservation: true, open_late: true }, cc: 'konnichiwa', cc_note: 'A big, tourist-friendly Shinshu izakaya; reservations easy, some English likely.',
    notes: '[Izakaya · local] A lively "row-house" izakaya at the station\'s Zenkō-ji exit gathering all of Shinshu under one roof — nozawana dishes, oyaki, matagi (game) hot pot, soba and local sake.',
    specialty: 'Shinshu kyōdo-ryōri + jizake', sources: ['https://marutomisuisan.jpn.com/nagaya-shinsyu/'] }),

  mk({ en: 'momiji chaya', name: 'もみじ茶屋 (Momiji-chaya)', category: 'OMNI', lat: 36.6446, lng: 138.1879,
    cuisine: 'Soba · Shinshu kyōdo izakaya', ctype: 'udon_soba', hood: 'Nagano Stn area (~3 min)',
    gf: 'ask', gf_detail: 'Soba plus izakaya fare — buckwheat noodles are usually wheat-blended and tsuyu/seasonings are wheat-based. Ask about jūwari and sauces.',
    vg: 'limited', vg_detail: 'Vegetable and soba dishes exist but dashi/soy are pervasive — confirm.',
    hours_raw: 'Lunch and evening; confirm.', cc: 'konnichiwa', cc_note: 'A relaxed soba-and-local-food spot a few minutes from the station.',
    notes: '[Local · soba] Soba and Shinshu regional dishes about 3 minutes from the station — a comfortable sit-down option.',
    specialty: 'Soba + kyōdo-ryōri', sources: ['https://tabelog.com/nagano/A2001/A200101/'] }),

  mk({ en: 'oyakiya nagano', name: 'おやき屋 (Oyaki-ya)', category: 'MOM_AND_POP', lat: 36.6444, lng: 138.1883, mp: true,
    cuisine: 'Oyaki · Shinshu kyōdo', ctype: 'sweets', hood: 'Nagano Stn area',
    gf: 'no', gf_detail: 'Oyaki are wrapped in a wheat-flour dough — not gluten-free.',
    vg: 'options', vg_detail: 'Many oyaki are vegetable-filled (nozawana greens, eggplant, kabocha), but the dough and some fillings can include lard or dashi — ask which are fully plant-based.',
    hours_raw: 'Daytime; confirm.', cc: 'konnichiwa', cc_note: 'A grab-and-go local specialty stop; simple to order.',
    notes: '[Mom & Pop · oyaki] Shinshu\'s signature oyaki — vegetable- or bean-filled griddled/steamed wheat buns — near the station; a great quick local bite.',
    specialty: 'Oyaki', roles: ['oyaki maker'], sources: [TB('https://tabelog.com/en/nagano/A2001/A200101/20008616/')] }),

  mk({ en: 'sakana yamazaki ekimae', name: '酒菜やまざき 駅前店 (Sakana Yamazaki)', category: 'MOM_AND_POP', lat: 36.6439, lng: 138.1885, mp: true,
    cuisine: 'Izakaya · washoku', ctype: 'izakaya', hood: 'Nagano Stn front (~3 min)',
    gf: 'ask', gf_detail: 'Counter izakaya; soy/miso/tempura are wheat-based and the fryer is shared. Sashimi and salt-grilled items may work — ask.',
    vg: 'limited', vg_detail: 'Fish-forward washoku with dashi throughout; a few vegetable sides possible — confirm.',
    hours_raw: 'Evenings; confirm.', flags: { open_late: true }, cc: 'konnichiwa', cc_note: 'A small, calm counter izakaya; a little Japanese helps.',
    notes: '[Mom & Pop · izakaya] A quiet, counter-focused izakaya about 3 minutes from the station — local fish and seasonal washoku.',
    specialty: 'Washoku, local fish, sake', sources: ['https://retty.me/area/PRE20/ARE82/SUB8201/STAN2303/'] }),

  mk({ en: 'binzuru ibukuro', name: '門前市場 びんずるさんの胃袋 (Binzuru-san no Ibukuro)', category: 'OMNI', lat: 36.6443, lng: 138.1881,
    cuisine: 'Izakaya · Shinshu', ctype: 'izakaya', hood: 'Nagano Stn main street (~3 min)',
    gf: 'ask', gf_detail: 'Large casual izakaya; wheat-based soy/miso/fry throughout — ask and specify.',
    vg: 'limited', vg_detail: 'Vegetable dishes exist but dashi/soy are pervasive; confirm.',
    hours_raw: 'Evenings; confirm.', flags: { reservation: true, open_late: true }, cc: 'konnichiwa', cc_note: 'A big, casual group izakaya on the main street; easy for visitors.',
    notes: '[Izakaya · local] A spacious, casual Shinshu izakaya on the main street about 3 minutes from the station — good for a group.',
    specialty: 'Shinshu izakaya fare', sources: ['https://haraheri.net/article/1350/nagano-izakaya'] }),
];

// dedupe against existing
const normName = s => (s || '').replace(/[\s　・（）()「」、,.。\-]/g, '').toLowerCase();
const have = new Set(d.places.map(p => normName(p.name)));
const haveId = new Set(d.places.map(p => p.id));
const added = [];
for (const r of NEW) {
  if (have.has(normName(r.name)) || haveId.has(r.id)) continue;
  d.places.push(r); added.push(r.name);
}

// extend bounds south to include the station circle (station lat 36.6432, r 0.5km ≈ 0.0045°)
const b = d.bounds; b[0][0] = Math.min(b[0][0], 36.6385); b[0][1] = Math.min(b[0][1], 138.183); b[1][1] = Math.max(b[1][1], 138.195);
fs.writeFileSync(file, JSON.stringify(d, null, 1));

// mirror bounds into the manifest
const man = JSON.parse(fs.readFileSync('data/manifest.json', 'utf8'));
const mn = man.cities.find(c => c.id === 'nagano');
if (mn) { mn.bounds = b; fs.writeFileSync('data/manifest.json', JSON.stringify(man, null, 1)); }

// bump SW
let swv = '?';
for (const f of ['sw.js', 'index.html']) { let s = fs.readFileSync(f, 'utf8'); const m = s.match(/dcd-v(\d+)/); if (!m) continue; swv = Number(m[1]) + 1; s = s.split(`dcd-v${m[1]}`).join(`dcd-v${swv}`); fs.writeFileSync(f, s); }

console.log(`added ${added.length} Nagano-Station places (nagano.json now ${d.places.length}); bounds south→${b[0][0]}. SW→dcd-v${swv}`);
console.log(added.join('\n'));
