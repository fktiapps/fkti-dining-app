// Rebuild all.json from the PRE-audit data (7d5f4f5), so old-pin agreement is measured against the
// original pins, never against pins this audit wrote.
import fs from 'fs';import {execSync} from 'child_process';
const S=process.argv[2];const REF='7d5f4f5';
const CITIES=['kyoto','tokyo','nara','kanazawa','hiroshima','nagoya','nagano','toba','himeji'];
const verd={};const VD='data/_menu_verdicts';
if(fs.existsSync(VD))for(const f of fs.readdirSync(VD)){try{const j=JSON.parse(fs.readFileSync(`${VD}/${f}`));const e=Array.isArray(j)?j.map(x=>[x.id,x]):Object.entries(j);for(const [k,v] of e)verd[k]=v}catch{}}
const out=[];
for(const c of CITIES){const j=JSON.parse(execSync(`git show ${REF}:data/${c}.json`,{maxBuffer:1e9}));let menus={};try{menus=JSON.parse(fs.readFileSync(`data/${c}_menus.json`))}catch{}
 const now=new Map(JSON.parse(fs.readFileSync(`data/${c}.json`)).places.map(p=>[p.id,p]));
 for(const p of j.places){const blob=JSON.stringify(p)+JSON.stringify(menus[p.id]||'')+JSON.stringify(verd[p.id]||'');
  const ids=[...new Set([...blob.matchAll(/tabelog\.com\/(?:en\/|tw\/|kr\/|cn\/)?([a-z]+)\/(A\d{4})\/(A\d{6})\/(\d{7,8})/g)].map(m=>m.slice(1).join('/')))];
  out.push({city:c,id:p.id,name:p.name,lat:p.lat,lng:p.lng,hidden:(now.get(p.id)||p).hidden||false,loc_approx:p.loc_approx,done:!!p.pin_source,tabelog:ids})}}
fs.writeFileSync(`${S}/all.json`,JSON.stringify(out));console.log('baseline records',out.length,'done',out.filter(x=>x.done).length);
