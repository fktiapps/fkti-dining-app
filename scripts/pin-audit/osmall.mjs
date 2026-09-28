import fs from 'fs';
const S=process.argv[2];const C=`${S}/osmcache.jsonl`;
const all=JSON.parse(fs.readFileSync(`${S}/all.json`));
const have=new Set(fs.existsSync(C)?fs.readFileSync(C,'utf8').split('\n').filter(Boolean).map(l=>JSON.parse(l).id):[]);
const names=n=>{const o=[];const ja=(n.match(/[（(]([^()（）]*[぀-ヿ一-鿿][^()（）]*)[)）]/)||[])[1];const head=n.split(/\s*[（(]/)[0].trim();
  for(const s of [head,ja])if(s&&!o.includes(s.trim()))o.push(s.trim());return o};
let i=0;
for(const x of all){ if(have.has(x.id))continue;
  const row={id:x.id,hits:[]};
  for(const q of names(x.name)){
    const vb=`${x.lng-0.05},${x.lat+0.05},${x.lng+0.05},${x.lat-0.05}`;
    try{const j=await (await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&limit=5&accept-language=ja&viewbox=${vb}&bounded=1&q=${encodeURIComponent(q)}`,{headers:{'User-Agent':'DCD-coordinate-audit/1.0 (gjswork@yahoo.com)'}})).json();
      for(const h of j)row.hits.push({q,name:h.name,cat:h.category,type:h.type,lat:+h.lat,lng:+h.lon,disp:h.display_name.slice(0,100)});}catch(e){row.err=String(e)}
    await new Promise(z=>setTimeout(z,1100));
    if(row.hits.length)break;
  }
  fs.appendFileSync(C,JSON.stringify(row)+'\n');if(++i%200===0)console.log(i,new Date().toISOString());
}
console.log('done');
