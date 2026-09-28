// temp: scrape a JA address from each record's own website (not Tabelog/SNS). Output to scratchpad.
import fs from 'fs';
import {readCity,CITIES} from '../lib-city.mjs';
const S=process.argv[2];const C=`${S}/sitecache.jsonl`;
const have=new Set(fs.existsSync(C)?fs.readFileSync(C,'utf8').split('\n').filter(Boolean).map(l=>JSON.parse(l).id):[]);
const SKIP=/tabelog|instagram|facebook|google\.|twitter|x\.com|youtube|tiktok|line\.me|ameblo|note\.com|happycow|findmeglutenfree|vegewel|vegemap|tripadvisor/i;
const PREF='(?:北海道|東京都|京都府|大阪府|[^\s\d]{2,3}県)';
const RE=new RegExp(PREF+'[^<>\n"]{2,40}?[0-9０-９]+(?:[-‐−ー－の丁目番地号0-9０-９]{0,12})','g');
const pull=h=>{const t=h.replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').replace(/\s+/g,' ');return [...new Set(t.match(RE)||[])].slice(0,5)};
const get=async u=>{const c=new AbortController();const tm=setTimeout(()=>c.abort(),12000);try{const r=await fetch(u,{signal:c.signal,redirect:'follow',headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64)','Accept-Language':'ja'}});const b=Buffer.from(await r.arrayBuffer());let h=b.toString('utf8');if(/charset=["']?(shift_jis|sjis|x-sjis|euc-jp)/i.test(h))h=new TextDecoder((h.match(/charset=["']?(shift_jis|sjis|x-sjis|euc-jp)/i)[1]).toLowerCase().replace(/^sjis|x-sjis$/,'shift_jis')).decode(b);return {status:r.status,h,url:r.url}}finally{clearTimeout(tm)}};
let n=0;
for(const c of CITIES)for(const p of readCity(c).places){
  if(have.has(p.id))continue;
  const w=typeof p.website==='string'?p.website:null;const row={id:p.id,site:w};
  if(w&&!SKIP.test(w)){
    try{const a=await get(w);row.status=a.status;row.addrs=pull(a.h);
      if(!row.addrs.length){const links=[...a.h.matchAll(/href=["']([^"'#]+)["'][^>]*>([^<]{0,30})/g)].filter(m=>/access|shop|about|info|store|company|map|アクセス|店舗|会社|概要/i.test(m[1]+m[2])).map(m=>new URL(m[1],a.url).href).filter(u=>u.startsWith('http')&&new URL(u).host===new URL(a.url).host);
        for(const u of [...new Set(links)].slice(0,2)){try{const b=await get(u);row.addrs=pull(b.h);if(row.addrs.length){row.from=u;break}}catch{}}}
    }catch(e){row.err=String(e).slice(0,80)}
  } else row.skip=true;
  fs.appendFileSync(C,JSON.stringify(row)+'\n');if(++n%200===0)console.log(n,new Date().toISOString());
}
console.log('done');
