// Append two verified vegan/GF finds inside the Nagano Station 500m circle (Kita-Ishidō-chō, ~4 min
// NW of the station). Coords approximate (flagged). Researched 2026-07-21.
import fs from 'fs';
const file='data/nagano.json'; const d=JSON.parse(fs.readFileSync(file,'utf8'));
const AX=' · 📍 Approx. map location — confirm the exact spot.';
const gmaps=q=>'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q+' 長野駅');
const NEW=[
 { id:'nagano_coco_chouchou', name:'Coco ChouChou (ココシュシュ)', category:'BOTH', lat:36.6448, lng:138.1878, loc_approx:'block',
   gf_confidence:'dedicated', gf_label:'Dedicated gluten-free', gf_detail:'A dedicated vegan & gluten-free sweets maker — no wheat, egg, dairy, or refined white sugar. Cookies, baked goods and its well-known vegan butter-sandwich are all made gluten-free; a café was added at the new Kita-Ishidō-chō shop. Still confirm any single item, but the whole operation is built GF.',
   vegan_status:'full', vegan_label:'Fully vegan', vegan_detail:'Everything is plant-based — no egg or dairy. A rare fully-vegan sweets shop, ~4 min from the station.',
   hours_raw:'Small shop + café — confirm days/hours (some weekdays closed).', hours:{}, hours_status:'irregular',
   flags:{reservation:false,cash_only:false,halal:false,open_late:false},
   neighborhood:'Kita-Ishidō-chō (Nagano Stn · Zenkō-ji exit, ~4 min)', cuisine:'Vegan & gluten-free sweets · café', website:'https://chouchou-sweets.com/', menu_url:null,
   gmaps:gmaps('CocoChouChou 北石堂町'),
   notes:'[Vegan + GF] A dedicated vegan & gluten-free sweets shop and café ~4 min from Nagano Station — cookies, baked goods and a locally-loved vegan butter-sandwich, all free of wheat, egg, dairy and refined sugar. Started by a maker who relocated from Tokyo.'+AX,
   chef_bio:{chef_name:null,roles:['owner / pâtissier'],origin:'Relocated from Tokyo to Nagano',background:'A vegan & gluten-free confectionery brand that moved from Tokyo to Nagano and opened a small Kita-Ishidō-chō shop with a café; known nationally for its vegan butter-sandwiches.',philosophy:null,specialty:'Vegan & gluten-free cookies and butter-sandwiches',anecdotes:[],japanese_sources_summary:'Japanese features (Web-Komachi, Nagatabe, Vegans-Life) describe CocoChouChou as a vegan & gluten-free okashi shop in Kita-Ishidō-chō, ~4 min from Nagano Station, using no wheat/egg/dairy/refined sugar, with a newly added café.',confidence:'medium',sources:['https://chouchou-sweets.com/','https://nagatabe.com/cocochouchou/','https://www.web-komachi.com/?p=139536']},
   cultural_comfort:{level:'konnichiwa',note:'A small handmade sweets shop/café; welcoming, though it may be Japanese-first — a few words help.'},
   cultural_comfort_note:'A small handmade sweets shop/café; welcoming, though it may be Japanese-first — a few words help.',
   cuisine_type:'sweets',
   safety:{dedicated_fryer:null,gf_cross_contamination:[{text:'The shop is built entirely gluten-free (no wheat used), which sharply lowers cross-contamination risk versus a mixed kitchen. Confirm packaged vs made-in-house items.',source:'https://chouchou-sweets.com/'}],soy_sauce_wheat:[],vegan_cross_contact:[{text:'Fully plant-based operation (no egg or dairy), so animal cross-contact is minimal.',source:'https://nagatabe.com/cocochouchou/'}],staff_allergy_handling:[],positives:[{text:'Rare dedicated vegan + gluten-free maker — a safe, reliable option near the station for both diets.',source:'https://www.web-komachi.com/?p=139536'}],confidence:'medium',last_checked:'2026-07-21'},
   has_menu:false, menu_verified:null, mom_and_pop:true },
 { id:'nagano_yamanoma_brewery', name:'山の間 (Yamanoma Brewery & Craft Beer Pub)', category:'OMNI', lat:36.6446, lng:138.1875, loc_approx:'block',
   gf_confidence:'ask', gf_label:'GF — ask staff', gf_detail:'A brewpub — the craft beer itself contains gluten. Some kitchen dishes may be gluten-free; ask which are wheat/soy-free.',
   vegan_status:'options', vegan_label:'Vegan options', vegan_detail:'The kitchen cooks local-ingredient dishes, several vegan/vegetarian-friendly — confirm which are fully plant-based (dashi/soy can appear).',
   hours_raw:'Evening brewpub — confirm.', hours:{}, hours_status:'irregular',
   flags:{reservation:false,cash_only:false,halal:false,open_late:true},
   neighborhood:'Kita-Ishidō-chō · Nisenro-dōri (Nagano Stn, short walk)', cuisine:'Craft beer pub · local dishes', website:null, menu_url:null,
   gmaps:gmaps('山の間 YAMANOMA BREWERY 北石堂町'),
   notes:'[Craft beer · vegan options] A brew-on-site craft beer pub a short walk from the station on Nisenro-dōri (opened 2021); the kitchen turns out local-ingredient dishes, several vegan/vegetarian-friendly. The beer is not gluten-free.'+AX,
   chef_bio:{chef_name:null,roles:['brewer / owner'],origin:'Nagano (Kita-Ishidō-chō)',background:'A small brew-on-premises craft-beer pub on Nisenro-dōri near Nagano Station; the owner\'s wife cooks dishes with local ingredients, with vegan/vegetarian-friendly options.',philosophy:null,specialty:'House-brewed craft beer + local small plates',anecdotes:[],japanese_sources_summary:'Local coverage (Web-Komachi, mips-nagano) places 山の間 on Nisenro-dōri in Kita-Ishidō-chō near Nagano Station, an on-site brewery/craft-beer pub since 2021 with local-ingredient dishes, some vegan/vegetarian.',confidence:'low',sources:['https://www.web-komachi.com/?p=57929','https://mips-nagano.com/blog491/']},
   cultural_comfort:{level:'konnichiwa',note:'A craft-beer pub used to visitors; casual and welcoming.'},
   cultural_comfort_note:'A craft-beer pub used to visitors; casual and welcoming.',
   cuisine_type:'izakaya',
   safety:{dedicated_fryer:null,gf_cross_contamination:[{text:'Beer contains gluten and the kitchen is a mixed pub kitchen — GF diners must ask carefully.',source:'https://www.web-komachi.com/?p=57929'}],soy_sauce_wheat:[],vegan_cross_contact:[{text:'Local-ingredient menu with some vegan/veg options; confirm dashi/soy in each dish.',source:'https://mips-nagano.com/blog491/'}],staff_allergy_handling:[],positives:[{text:'A relaxed spot near the station where a vegetarian/vegan can find a few plant-based plates alongside local craft beer.',source:'https://www.web-komachi.com/?p=57929'}],confidence:'low',last_checked:'2026-07-21'},
   has_menu:false, menu_verified:null, mom_and_pop:true },
];
const norm=s=>(s||'').replace(/[\s　・（）()「」、,.。\-]/g,'').toLowerCase();
const have=new Set(d.places.map(p=>norm(p.name))); const haveId=new Set(d.places.map(p=>p.id));
const added=[];
for(const r of NEW){ if(have.has(norm(r.name))||haveId.has(r.id))continue; d.places.push(r); added.push(r.name); }
fs.writeFileSync(file, JSON.stringify(d,null,1));
let swv='?'; for(const f of ['sw.js','index.html']){let s=fs.readFileSync(f,'utf8');const m=s.match(/dcd-v(\d+)/);if(!m)continue;swv=Number(m[1])+1;s=s.split(`dcd-v${m[1]}`).join(`dcd-v${swv}`);fs.writeFileSync(f,s);}
console.log(`added ${added.length}: ${added.join(' | ')} | nagano now ${d.places.length} | SW→dcd-v${swv}`);
