// Salvage the Nagano Station agent-discovery sweep (verification/geocoding were blocked by the proxy,
// so these are LIGHT records: cuisine-inferred GF/vegan, approx pins, flagged unverified). Curated to
// clearly in-circle NEW places; deduped against existing nagano.json (incl. the manual first pass).
import fs from 'fs';
const file='data/nagano.json'; const d=JSON.parse(fs.readFileSync(file,'utf8'));
const AX=' · 📍 Approx. pin · from the Nagano Station sweep — confirm GF/vegan & hours on site.';
const gfL=g=>({dedicated:'Dedicated gluten-free',high:'Strong GF focus',options:'Some GF options',ask:'GF — ask staff',no:'Not gluten-free'}[g]);
const vgL=v=>({full:'Fully vegan',options:'Vegan options',limited:'Limited vegan options',ask:'Vegan — ask',no:'Not vegan'}[v]);
const gmaps=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q+' 長野駅');
const slug=s=>'nagano_'+s.toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,'').slice(0,28);
function mk(o){return {id:slug(o.en),name:o.name,category:o.category,lat:o.lat,lng:o.lng,loc_approx:'block',
 gf_confidence:o.gf,gf_label:gfL(o.gf),gf_detail:o.gfd,vegan_status:o.vg,vegan_label:vgL(o.vg),vegan_detail:o.vgd,
 hours_raw:'Hours unverified — confirm.',hours:{},hours_status:'irregular',
 flags:{reservation:false,cash_only:false,halal:false,open_late:!!o.late},
 neighborhood:o.hood,cuisine:o.cuisine,website:null,gmaps:gmaps(o.name),menu_url:null,
 notes:o.notes+AX,
 chef_bio:{chef_name:null,roles:[],origin:'Nagano (Shinshu)',background:null,philosophy:null,specialty:o.spec||null,anecdotes:[],japanese_sources_summary:'',confidence:'none',sources:[]},
 cultural_comfort:{level:o.cc,note:o.ccn||'A spot around Nagano Station; a little Japanese or pointing helps.'},
 cultural_comfort_note:o.ccn||'A spot around Nagano Station; a little Japanese or pointing helps.',
 cuisine_type:o.ct,
 safety:{dedicated_fryer:null,gf_cross_contamination:[],soy_sauce_wheat:[],vegan_cross_contact:[],staff_allergy_handling:[],positives:[],confidence:'none',last_checked:'2026-07-21'},
 has_menu:false,menu_verified:null,mom_and_pop:!!o.mp};}

const NEW=[
 mk({en:'yasai cafe humans',name:'野菜カフェ ヒューマンズ (Yasai Café Humans)',category:'VEGAN',lat:36.6438,lng:138.1895,mp:true,
   cuisine:'Vegetarian / vegan café',ct:'obanzai',hood:'Minami-Chitose (north of Nagano Stn)',cc:'konnichiwa',
   gf:'ask',gfd:'A vegetable-forward vegetarian/vegan café; GF is plausible for many dishes but unconfirmed — ask which are wheat/soy-free.',
   vg:'options',vgd:'A vegetarian/vegan café near the station — one of the few plant-based-friendly kitchens in the circle. Confirm fully-vegan vs vegetarian per dish.',
   spec:'Vegetable plates',notes:'[Vegan/veg café] A vegetable-focused café on the north (Minami-Chitose) side of Nagano Station — a rare plant-based-friendly option right by the station.'}),
 mk({en:'irohado midori',name:'いろは堂 MIDORI長野店 (Irohado)',category:'MOM_AND_POP',lat:36.6431,lng:138.1894,mp:true,
   cuisine:'Oyaki (some GF)',ct:'sweets',hood:'MIDORI Nagano 2F (in the station building)',cc:'konnichiwa',
   gf:'options',gfd:'A Togakushi oyaki maker that is noted to offer a gluten-free option alongside its wheat-dough oyaki — confirm which items are the GF version.',
   vg:'options',vgd:'Many oyaki are vegetable-filled (nozawana, vegetables); confirm dough/filling are free of lard and dashi for fully-vegan.',
   spec:'Oyaki',notes:'[Oyaki · GF option] A well-known Togakushi oyaki shop inside MIDORI Nagano (station building), noted to offer a gluten-free oyaki — handy right at the station.'}),
 mk({en:'kusabue midori',name:'信州蕎麦の草笛 MIDORI店 (Kusabue)',category:'OMNI',lat:36.6430,lng:138.1895,
   cuisine:'Shinshu soba (nanawari)',ct:'udon_soba',hood:'MIDORI Nagano 3F (station building)',cc:'konnichiwa',
   gf:'ask',gfd:'Shinshu soba (locally-milled, ~70% buckwheat) with walnut-miso dipping — noodles still contain wheat and tsuyu uses wheat soy; ask about a higher-buckwheat/jūwari option.',
   vg:'limited',vgd:'Soba tsuyu and sides use dashi/soy; a plain soba is possible but the sauce is fish-based — confirm.',
   spec:'Kurumi (walnut) soba',notes:'[Soba] A busy Shinshu-soba restaurant in MIDORI Nagano (station building) known for kurumi-dare (walnut) soba — convenient right at the station.'}),
 mk({en:'miyota soba midori',name:'そば処みよ田 MIDORI長野店 (Miyota)',category:'OMNI',lat:36.6430,lng:138.1896,
   cuisine:'Shinshu soba · tempura',ct:'udon_soba',hood:'MIDORI Nagano 3F (station building)',cc:'konnichiwa',
   gf:'ask',gfd:'Shinshu soba with vegetable tempura and Shinshu beef — noodles/tsuyu are wheat-based and tempura is wheat-battered; ask for jūwari + wheat-free tsuyu.',
   vg:'limited',vgd:'Dashi/soy throughout; confirm.',spec:'Shinshu soba',notes:'[Soba] Soba, tempura and Shinshu-beef dishes in MIDORI Nagano (station building).'}),
 mk({en:'ogawanosho oyakimura midori',name:'小川の庄 おやき村 MIDORI長野店 (Ogawa-no-shō Oyaki-mura)',category:'MOM_AND_POP',lat:36.6431,lng:138.1895,mp:true,
   cuisine:'Oyaki',ct:'sweets',hood:'MIDORI Nagano (station building)',cc:'konnichiwa',
   gf:'no',gfd:'Oyaki wrapped in wheat-flour dough — not gluten-free.',
   vg:'options',vgd:'Several vegetable-filled oyaki (nozawana, etc.) may be vegan-friendly; confirm dough/filling have no lard or dashi.',
   spec:'Oyaki',notes:'[Oyaki] The Ogawa-no-shō oyaki brand inside MIDORI Nagano — Shinshu vegetable-filled buns right at the station.'}),
 mk({en:'yabu naganotokyu',name:'そば処 やぶ ながの東急店 (Yabu)',category:'OMNI',lat:36.6429,lng:138.1893,
   cuisine:'Shinshu soba',ct:'udon_soba',hood:'Nagano Tokyū / station building',cc:'konnichiwa',
   gf:'ask',gfd:'Shinshu soba; noodles usually wheat-blended and tsuyu wheat-based — ask about jūwari.',vg:'limited',vgd:'Fish-dashi tsuyu — confirm.',
   spec:'Soba',notes:'[Soba] A soba restaurant in the Nagano Tokyū department store by the station.'}),
 mk({en:'ogiso seifunjo ekimae',name:'小木曽製粉所 長野駅前店 (Ogiso Seifunjo)',category:'OMNI',lat:36.6436,lng:138.1892,
   cuisine:'Shinshu soba · jizake',ct:'udon_soba',hood:'Nagano Station front',cc:'konnichiwa',
   gf:'ask',gfd:'Self-serve Shinshu soba; wheat-blended noodles and wheat-based tsuyu — ask for a higher-buckwheat option.',vg:'limited',vgd:'Dashi tsuyu; confirm.',
   spec:'Cheap fresh soba',notes:'[Soba] A popular, good-value self-serve Shinshu-soba mill-and-shop right in front of the station.'}),
 mk({en:'cafe montmartre',name:'カフェ・モンマルトル (Café Montmartre)',category:'OMNI',lat:36.6444,lng:138.1882,
   cuisine:'Curry · naan · café',ct:'yoshoku',hood:'Kita-Ishidō-chō (~2 min from Nagano Stn)',cc:'konnichiwa',
   gf:'ask',gfd:'Curry with all-you-can-eat naan — naan is wheat; rice + some curries may be GF. Ask about wheat in the roux.',
   vg:'options',vgd:'Vegetable curries are often available; confirm no dairy/ghee/meat stock for fully-vegan.',
   spec:'Curry & naan',notes:'[Café · curry] A curry-and-naan café ~2 min from the station in Kita-Ishidō-chō.'}),
 mk({en:'tokube ekimae',name:'とくべえ 駅前店 (Tokubē)',category:'MOM_AND_POP',lat:36.6443,lng:138.1884,mp:true,late:true,
   cuisine:'Izakaya · kyōdo-ryōri',ct:'izakaya',hood:'Kita-Ishidō-chō (Nagano Stn front)',cc:'konnichiwa',
   gf:'ask',gfd:'Izakaya with local dishes (basashi, motsu-ni); soy/miso/fry are wheat-based — ask.',vg:'limited',vgd:'Meat/fish-forward with dashi; a few veg sides — confirm.',
   spec:'Shinshu izakaya',notes:'[Izakaya · local] A local kyōdo-ryōri izakaya (horse sashimi, motsu stew) by the station in Kita-Ishidō-chō.'}),
 mk({en:'kushicho yakitori',name:'炭火串焼 串長 (Kushichō)',category:'MOM_AND_POP',lat:36.6437,lng:138.1894,mp:true,late:true,
   cuisine:'Yakitori · kushiyaki',ct:'yakitori',hood:'Minami-Chitose (Nagano Stn)',cc:'konnichiwa',
   gf:'ask',gfd:'Charcoal yakitori — tare contains wheat soy; order shio (salt) and confirm the shared grill.',vg:'no',vgd:'Chicken/skewer specialist — not vegan.',
   spec:'Charcoal yakitori',notes:'[Yakitori] A charcoal kushiyaki spot on the Minami-Chitose side of the station.'}),
 mk({en:'pizzeria castagna',name:'ピッツェリア カスターニャ (Pizzeria Castagna)',category:'OMNI',lat:36.6446,lng:138.1880,
   cuisine:'Napoli pizza · Italian',ct:'yoshoku',hood:'Zenkō-ji exit area (Nagano Stn)',cc:'konnichiwa',
   gf:'no',gfd:'Wheat-based Napoli pizza and pasta — not gluten-free.',vg:'limited',vgd:'A marinara or veg pizza (no cheese) may be possible; most dishes use cheese — confirm.',
   spec:'Napoli pizza',notes:'[Italian] A Neapolitan pizzeria near the station\'s Zenkō-ji exit.'}),
 mk({en:'sandia indian',name:'インド料理 サンディア (Sandia)',category:'OMNI',lat:36.6446,lng:138.1886,
   cuisine:'Indian',ct:'yoshoku',hood:'Near Nagano Station (Kita-Nagano side)',cc:'konnichiwa',
   gf:'ask',gfd:'Indian — rice, dal and many curries are naturally GF, but naan is wheat and some sauces use flour/dairy. Ask for rice + GF curries.',
   vg:'options',vgd:'Vegetable/lentil curries are usually available; ask for no dairy/ghee/cream for fully-vegan.',
   spec:'Curry, naan',notes:'[Indian] An Indian restaurant near the station — the usual rice/dal options make it one of the more GF/vegan-workable spots (confirm dairy/naan).'}),
 mk({en:'masakai honpo soba',name:'政海本舗 (Masakai Honpo)',category:'OMNI',lat:36.6442,lng:138.1885,
   cuisine:'Handmade Shinshu soba',ct:'udon_soba',hood:'Suehiro-chō (near Nagano Stn)',cc:'konnichiwa',
   gf:'ask',gfd:'Hand-cut Kurohime-buckwheat soba; ask about jūwari (100% buckwheat) and a wheat-free tsuyu.',vg:'limited',vgd:'Fish-dashi tsuyu — confirm.',
   spec:'Hand-cut soba',notes:'[Soba] A hand-cut Shinshu-soba shop (Kurohime buckwheat) near the station in Suehiro-chō.'}),
 mk({en:'kosuge soba',name:'蕎麦旬菜 こすげ (Kosuge)',category:'MOM_AND_POP',lat:36.6446,lng:138.1883,mp:true,
   cuisine:'Seasonal handmade soba',ct:'udon_soba',hood:'Kita-Ishidō-chō (near Nagano Stn)',cc:'konnichiwa',
   gf:'ask',gfd:'Hand-made seasonal soba; ask for jūwari and a wheat-free tsuyu.',vg:'limited',vgd:'Dashi tsuyu; some seasonal-vegetable dishes — confirm.',
   spec:'Seasonal soba',notes:'[Mom & Pop · soba] A small hand-made soba spot with seasonal dishes in Kita-Ishidō-chō near the station.'}),
];

// dedupe against existing by JA-name substring (existing manual records carry a "(Romaji)" suffix)
const jaOf=s=>(s||'').replace(/\s*[（(].*$/,'').replace(/[\s　・、,.。\-]/g,'');
const haveJa=d.places.map(p=>jaOf(p.name)).filter(Boolean);
const haveId=new Set(d.places.map(p=>p.id));
const added=[];
for(const r of NEW){
  const ja=jaOf(r.name);
  const dup=haveId.has(r.id)||haveJa.some(h=>h&&(h.includes(ja)||ja.includes(h))&&Math.min(h.length,ja.length)>=3);
  if(dup)continue;
  d.places.push(r); added.push(r.name);
}
fs.writeFileSync(file,JSON.stringify(d,null,1));
let swv='?';for(const f of ['sw.js','index.html']){let s=fs.readFileSync(f,'utf8');const m=s.match(/dcd-v(\d+)/);if(!m)continue;swv=Number(m[1])+1;s=s.split(`dcd-v${m[1]}`).join(`dcd-v${swv}`);fs.writeFileSync(f,s);}
console.log(`added ${added.length} sweep places | nagano now ${d.places.length} | SW→dcd-v${swv}`);
added.forEach(n=>console.log('  + '+n));
