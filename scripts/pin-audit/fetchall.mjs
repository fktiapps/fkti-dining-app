import fs from 'fs';
const S=process.argv[2];const C=`${S}/tbcache.jsonl`;
const all=JSON.parse(fs.readFileSync(`${S}/all.json`));
const have=new Set(fs.existsSync(C)?fs.readFileSync(C,'utf8').split('\n').filter(Boolean).map(l=>JSON.parse(l).t):[]);
const todo=[...new Set(all.flatMap(x=>x.tabelog))].filter(t=>!have.has(t));
console.log('todo',todo.length);let i=0;
const one=async t=>{
  const u=`https://tabelog.com/en/${t}/`;const row={t,url:u};
  try{const r=await fetch(u,{headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64)','Accept-Language':'en'}});
    row.status=r.status;const h=(await r.text()).replace(/\s+/g,' ');
    const ld=[...h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m=>{try{return JSON.parse(m[1])}catch{return null}}).find(j=>j&&j.geo);
    if(ld){row.lat=+ld.geo.latitude;row.lng=+ld.geo.longitude;row.en=ld.name}
    const ad=h.match(/rstinfo-table__address">\s*(.*?)\s*<\/p>/);row.addr=ad?ad[1].replace(/<[^>]*>/g,'').trim():null;
    const al=h.match(/<span class="alias">\(([^)<]*)\)<\/span>/);row.ja=al?al[1]:null;
    if(r.url&&!r.url.includes(t.split('/').pop()))row.redirect=r.url;
  }catch(e){row.err=String(e)}
  fs.appendFileSync(C,JSON.stringify(row)+'\n');
  if(++i%100===0)console.log(i,new Date().toISOString());
  await new Promise(z=>setTimeout(z,row.status===429||row.status===403?30000:1200));
};
const q=[...todo];await Promise.all([0,1,2].map(async()=>{while(q.length)await one(q.shift())}));
console.log('done');
