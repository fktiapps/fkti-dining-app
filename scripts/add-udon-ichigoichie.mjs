// Full-depth record: うどん 一期一会 (Udon Ichigo-Ichie), across from Kintetsu Nara Station Exit 1 on
// Noborioji-dōri. Researched via web search 2026-07-21 (Tabelog, Nara-gourmet). Opened May 2026.
import fs from 'fs';
const file='data/nara.json'; const d=JSON.parse(fs.readFileSync(file,'utf8'));
const ID='nara_udon_ichigo_ichie';
if(d.places.some(p=>p.id===ID)){console.log('already present');process.exit(0);}
const TB='https://tabelog.com/nara/A2901/A290101/29015532/';
const NG='https://nara-gourmet.com/ichigoichie/';
const place={
  id:ID, name:'うどん 一期一会 (Udon Ichigo-Ichie)', category:'MOM_AND_POP',
  lat:34.6854, lng:135.8291,
  gf_confidence:'no', gf_label:'Not gluten-free',
  gf_detail:'This is a wheat-udon specialist — the noodles are wheat flour, and udon tsuyu is built on wheat-containing soy sauce. There is no gluten-free noodle or preparation documented; this is not a celiac-safe option.',
  vegan_status:'limited', vegan_label:'Limited vegan options',
  vegan_detail:'A traditional udon counter. The house dashi is described as a sweet katsuo/kombu-style broth (assume bonito unless confirmed), and the signature niku-udon uses beef. A plain kake or kitsune udon might be workable ONLY if the shop can make a kombu-based (bonito-free) dashi — ask directly; otherwise treat as not vegan.',
  hours_raw:'Newly opened (May 2026); published hours/closed days not yet confirmed — check locally.', hours:{}, hours_status:'irregular',
  flags:{reservation:false, cash_only:false, halal:false, open_late:false},
  neighborhood:'Noborioji-chō (across from Kintetsu Nara Stn, Exit 1)',
  cuisine:'Udon (fresh hand-cut) · kama-nuki', website:null,
  gmaps:'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('うどん 一期一会 奈良 登大路町 近鉄奈良駅'),
  menu_url:null,
  notes:"[Mom & Pop · udon] A tiny (~10-seat) hand-made udon counter that opened May 2026 directly across from Kintetsu Nara Station (Exit 1), on Noborioji-dōri toward Nara Park — in the former site of a kushiya. An L-shaped counter and a couple of small tables surround a noodle board facing the street, where the udon is cut and boiled to order. The signature is 釜抜き (kama-nuki): noodles lifted straight from the pot without a cold-water rinse, so the surface stays soft and the bite is plump and mochi-mochi. The niku-udon in a sweet dashi draws praise. The menu carries English and the shop is used to overseas visitors.",
  chef_bio:{chef_name:null, roles:['udon craftsman / owner-operator'], origin:'Nara (Noborioji-chō, by Kintetsu Nara Station)',
    background:'An owner-run udon shop that makes its noodles to order at a street-facing board — the kind of small counter where you watch the udon cut and boiled before it reaches you. It opened in May 2026 in a former kushiya space a step from Kintetsu Nara Station, and quickly became a spot locals recommend when they want "a slightly nicer bowl of udon."',
    philosophy:null, specialty:'Kama-nuki (straight-from-the-pot) fresh udon; niku-udon in a sweet dashi',
    anecdotes:[
      {text:"The house style is 釜抜き — the boiled noodles go from pot to bowl without a cold-water tightening, giving a soft surface and a plump, chewy bite that regulars single out.", source:NG},
      {text:"A small L-shaped counter and a couple of tables — ten people fills it — wrapped around a noodle-making board that faces Noborioji-dōri, where each order is cut and boiled fresh.", source:NG},
      {text:"Reviewers praise the niku-udon: a sweet-savory dashi tsuyu with plump, smooth noodles.", source:TB},
    ],
    japanese_sources_summary:"Japanese coverage (Tabelog 29015532, Nara-gourmet) describes うどん一期一会 as a small (~10-seat) fresh-udon shop that opened May 2026 just outside Kintetsu Nara Station Exit 1 on Noborioji-dōri, in a former kushiya. L-shaped counter + small tables; a street-facing noodle board where udon is cut and boiled to order. Signature 釜抜き udon (no cold-water rinse → soft, mochi-mochi); well-liked niku-udon in a sweet dashi; English on the menu and many overseas guests.",
    confidence:'medium', sources:[TB, NG]},
  cultural_comfort:{level:'english', note:'Small but visitor-friendly — the menu is in English and the shop is used to overseas guests. Counter seating; order at the counter and watch the noodles being made.'},
  cultural_comfort_note:'Small but visitor-friendly — the menu is in English and the shop is used to overseas guests. Counter seating; order at the counter and watch the noodles being made.',
  cuisine_type:'udon_soba',
  safety:{dedicated_fryer:null,
    gf_cross_contamination:[{text:'A wheat-udon specialist: the noodles are wheat and are boiled in shared water; any tempura toppings are wheat-battered. Cross-contamination with gluten is inherent — not a celiac-safe kitchen.', source:TB}],
    soy_sauce_wheat:[{text:'Udon tsuyu is made with Japanese soy sauce, which typically contains wheat; the dashi/tare should be assumed to contain gluten unless the shop confirms otherwise.', source:NG}],
    vegan_cross_contact:[{text:'The dashi is a sweet katsuo/kombu-style broth (assume bonito) and the signature niku-udon uses beef, so most bowls carry animal ingredients. A bonito-free bowl would need to be requested and confirmed.', source:TB}],
    staff_allergy_handling:[], positives:[{text:'A tiny owner-run counter where the noodles are made in front of you, so you can ask about the dashi and ingredients directly before ordering.', source:NG}],
    confidence:'medium', last_checked:'2026-07-21'},
  has_menu:false, menu_verified:null, mom_and_pop:true,
};
d.places.push(place);
fs.writeFileSync(file, JSON.stringify(d,null,1));
let swv='?';for(const f of ['sw.js','index.html']){let s=fs.readFileSync(f,'utf8');const m=s.match(/dcd-v(\d+)/);if(!m)continue;swv=Number(m[1])+1;s=s.split(`dcd-v${m[1]}`).join(`dcd-v${swv}`);fs.writeFileSync(f,s);}
console.log(`added ${place.name} to Nara (now ${d.places.length}). SW→dcd-v${swv}`);
