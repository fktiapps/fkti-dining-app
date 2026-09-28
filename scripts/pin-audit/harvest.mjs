import fs from 'fs';
import {CITIES,readCity} from '../lib-city.mjs';
const S=process.argv[2];
const verd={};const VD='data/_menu_verdicts';
if(fs.existsSync(VD))for(const f of fs.readdirSync(VD)){try{const j=JSON.parse(fs.readFileSync(`${VD}/${f}`));const e=Array.isArray(j)?j.map(x=>[x.id,x]):Object.entries(j);for(const [k,v] of e)verd[k]=v}catch{}}
const out=[];const st={};
for(const c of CITIES){let menus={};try{menus=JSON.parse(fs.readFileSync(`data/${c}_menus.json`))}catch{}
 for(const p of readCity(c).places){
  const blob=JSON.stringify(p)+JSON.stringify(menus[p.id]||'')+JSON.stringify(verd[p.id]||'');
  const ids=[...new Set([...blob.matchAll(/tabelog\.com\/(?:en\/|tw\/|kr\/|cn\/)?([a-z]+)\/(A\d{4})\/(A\d{6})\/(\d{7,8})/g)].map(m=>m.slice(1).join('/')))];
  const k=`${c} ${p.hidden?'hidden':'visible'} ${p.pin_source?'done':ids.length?'tb':'none'}`;st[k]=(st[k]||0)+1;
  out.push({city:c,id:p.id,name:p.name,lat:p.lat,lng:p.lng,hidden:p.hidden||false,loc_approx:p.loc_approx,done:!!p.pin_source,tabelog:ids});
 }}
fs.writeFileSync(`${S}/all.json`,JSON.stringify(out));console.log(st);
console.log('urls to fetch:',out.filter(x=>!x.done).reduce((n,x)=>n+x.tabelog.length,0));
