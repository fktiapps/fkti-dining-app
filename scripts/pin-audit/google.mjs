// Google Places Text Search as an independent second source, ONLY for places decisions.json could not
// cross-check. Key comes from the environment; it is never printed or written anywhere.
import fs from 'fs';
const S=process.argv[2];const KEY=process.env.GOOGLE_MAPS_KEY;
if(!KEY){console.error('GOOGLE_MAPS_KEY not set');process.exit(1)}
const LIMIT=+(process.argv.find(a=>a.startsWith('--limit='))||'--limit=5000').split('=')[1];
const C=`${S}/googlecache.jsonl`;
const have=new Set(fs.existsSync(C)?fs.readFileSync(C,'utf8').split('\n').filter(Boolean).map(l=>JSON.parse(l).id):[]);
const all=JSON.parse(fs.readFileSync(`${S}/all.json`));
const CITY={kyoto:"京都",tokyo:"東京",nara:"奈良",kanazawa:"金沢",hiroshima:"広島",nagoya:"名古屋",nagano:"長野",toba:"鳥羽",himeji:"姫路"};
// With a decisions.json, spend the daily quota on what the free sources could not settle, worst first.
// no_source is excluded: Google is confirm-only, so with no other position there is nothing for it to confirm.
const PRI=["review_big_move","conflict","single_keep","weak_single","single_source_replaces_approx"];
let pool=all.filter(d=>!d.hidden&&!have.has(d.id));
if(fs.existsSync(`${S}/decisions.json`)){const dec=new Map(JSON.parse(fs.readFileSync(`${S}/decisions.json`)).map(d=>[d.id,d]));
  pool=pool.filter(d=>dec.has(d.id)&&PRI.includes(dec.get(d.id).decision)).sort((a,b)=>PRI.indexOf(dec.get(a.id).decision)-PRI.indexOf(dec.get(b.id).decision));}
const todo=pool.slice(0,LIMIT);
console.log('queries',todo.length);let n=0;
let streak=0;
for(let i=0;i<todo.length;i++){const d=todo[i];
  const c={lat:d.lat,lng:d.lng};
  const body={textQuery:d.name.split(/\s*[（(]/)[0]+' '+(CITY[d.city]||''),languageCode:'ja',locationBias:{circle:{center:{latitude:+c.lat,longitude:+c.lng},radius:3000}},maxResultCount:3};
  const r=await fetch('https://places.googleapis.com/v1/places:searchText',{method:'POST',headers:{'Content-Type':'application/json','X-Goog-Api-Key':KEY,'X-Goog-FieldMask':'places.displayName,places.location,places.formattedAddress,places.businessStatus'},body:JSON.stringify(body)});
  const j=await r.json();
  if(r.status===429){if(++streak>6){console.error('429 persists - daily cap');break}console.error('429, backing off',new Date().toISOString());await new Promise(z=>setTimeout(z,65000));i--;continue}
  streak=0;
  if(!r.ok){console.error('HTTP',r.status,(j.error&&j.error.status)||'');if(r.status===403)break;continue}
  fs.appendFileSync(C,JSON.stringify({id:d.id,hits:(j.places||[]).map(p=>({name:p.displayName&&p.displayName.text,lat:p.location.latitude,lng:p.location.longitude,addr:p.formattedAddress,status:p.businessStatus}))})+'\n');
  n++;if(n%200===0)console.log(n,new Date().toISOString());await new Promise(z=>setTimeout(z,700));
}
console.log('done',n);
