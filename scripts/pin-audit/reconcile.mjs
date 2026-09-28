// Decide every pin from: Tabelog geo (A), OSM by name (S1), shop's own site address via GSI (S2),
// Tabelog's own listed address via GSI (S3), and the record's current pin.
// Writes decisions.json; --apply writes the city files.
import fs from 'fs';
import {CITIES,readCity,writeCity} from '../lib-city.mjs';
import {gsi} from './gsi.mjs';
const S=process.argv[2];const APPLY=process.argv.includes('--apply');const DATE='2026-09-28';
const jl=f=>fs.existsSync(f)?fs.readFileSync(f,'utf8').split('\n').filter(Boolean).map(l=>JSON.parse(l)):[];
const TB=new Map(jl(`${S}/tbcache.jsonl`).map(r=>[r.t,r]));
const OSM=new Map(jl(`${S}/osmcache.jsonl`).map(r=>[r.id,r]));
const SITE=new Map(jl(`${S}/sitecache.jsonl`).map(r=>[r.id,r]));
const GOO=new Map(jl(`${S}/googlecache.jsonl`).map(r=>[r.id,r]));
const all=JSON.parse(fs.readFileSync(`${S}/all.json`));
const GC=`${S}/gsicache.jsonl`;const G=new Map(jl(GC).map(r=>[r.addr,r.res]));
const geo=async a=>{if(!a)return null;if(G.has(a))return G.get(a);const r=await gsi(a);G.set(a,r);fs.appendFileSync(GC,JSON.stringify({addr:a,res:r})+'\n');await new Promise(z=>setTimeout(z,250));return r};

const hav=(a,b,c,d)=>{const r=x=>x*Math.PI/180;const x=Math.sin(r(c-a)/2)**2+Math.cos(r(a))*Math.cos(r(c))*Math.sin(r(d-b)/2)**2;return Math.round(2*6371e3*Math.asin(Math.sqrt(x)))};
const N=s=>(s||'').normalize('NFKC').toLowerCase().replace(/[\s・·&＆'’"“”.,\-_()（）【】「」!！?？:：/。、~〜]/g,'');
const bg=s=>{const o=new Set();for(let i=0;i<s.length-1;i++)o.add(s.slice(i,i+2));return o};
const sim=(a,b)=>{a=N(a);b=N(b);if(!a||!b)return 0;if(a.includes(b)||b.includes(a))return 1;const A=bg(a),B=bg(b);let n=0;for(const x of A)if(B.has(x))n++;return A.size+B.size?2*n/(A.size+B.size):0};
const namesOf=n=>{const o=[n,n.split(/\s*[（(]/)[0]];for(const m of n.matchAll(/[（(]([^()（）]+)[)）]/g))o.push(m[1]);return o.filter(Boolean)};
const nameScore=(recName,cands)=>Math.max(0,...namesOf(recName).flatMap(a=>cands.filter(Boolean).map(b=>sim(a,b))));
const muniOf=a=>((a||'').normalize('NFKC').match(/^(?:東京都|北海道|(?:京都|大阪)府|.{2,3}県)(.+?[市区町村郡])/)||[])[1];
const PRECISE=new Set(['go','lot']);
const key=x=>x.lat+','+x.lng;const stack={};for(const x of all)stack[key(x)]=(stack[key(x)]||0)+1;

const out=[];
for(const x of all){
  const d={city:x.city,id:x.id,name:x.name,hidden:x.hidden,cur:[x.lat,x.lng],stack:stack[key(x)],approx:x.loc_approx||null,had_source:x.done};
  // A: best-named Tabelog listing
  let A=null;
  for(const t of x.tabelog){const r=TB.get(t);if(!r||r.status!==200||r.lat==null)continue;const s=nameScore(x.name,[r.ja,r.en]);if(!A||s>A.score)A={...r,score:+s.toFixed(2)}}
  if(A&&A.score<0.5){d.tabelog_name_mismatch={ja:A.ja,en:A.en,score:A.score,url:A.url};A=null}
  // S1: OSM hit with matching name
  const o=OSM.get(x.id);let S1=null;
  for(const h of (o&&o.hits)||[]){if(!['amenity','shop','tourism','building','leisure'].includes(h.cat))continue;const s=nameScore(x.name,[h.name]);if(s>=0.6&&(!S1||s>S1.score))S1={...h,score:+s.toFixed(2)}}
  // S2: shop's own site address(es), same municipality as the Tabelog address when we have one
  const si=SITE.get(x.id);let S2=[];
  for(const a of (si&&si.addrs)||[]){if(A&&A.addr&&muniOf(a)&&muniOf(A.addr)&&muniOf(a)!==muniOf(A.addr))continue;const g=await geo(a);if(g&&!g.none&&!g.err&&PRECISE.has(g.level))S2.push({addr:a,...g})}
  // S4: Google Places (only present where google.mjs ran)
  let S4=null;for(const h of (GOO.get(x.id)||{}).hits||[]){const s=nameScore(x.name,[h.name]);if(s>=0.6&&(!S4||s>S4.score))S4={...h,score:+s.toFixed(2)}}
  // S3: Tabelog's own address
  let S3=null;if(A&&A.addr){const g=await geo(A.addr);if(g&&!g.none&&!g.err)S3={addr:A.addr,...g}}

  // A Tabelog point tens of km from where the record sits is a broken listing, not a location.
  let Abad=false;if(A&&hav(x.lat,x.lng,A.lat,A.lng)>50000){Abad=true;d.tabelog_bad_geo={url:A.url,lat:A.lat,lng:A.lng}}
  const agree=[];let P=null;
  const within=(p,q,m)=>p&&q&&hav(p.lat,p.lng,q.lat,q.lng)<=m;
  if(A&&!Abad){P={lat:A.lat,lng:A.lng,src:`Tabelog ${A.url}`};
    if(within(A,S1,100))agree.push(`OSM "${S1.name}" ${hav(A.lat,A.lng,S1.lat,S1.lng)}m`);
    if(within(A,S4,100))agree.push(`Google "${S4.name}" ${hav(A.lat,A.lng,S4.lat,S4.lng)}m`);
    const s2=S2.find(s=>within(A,s,150));if(s2)agree.push(`shop site address ${s2.title} ${hav(A.lat,A.lng,s2.lat,s2.lng)}m`);
    if(S3&&PRECISE.has(S3.level)&&within(A,S3,150))agree.push(`listing address ${S3.title} (GSI) ${hav(A.lat,A.lng,S3.lat,S3.lng)}m`);
    // Tabelog disagrees with everything, but OSM and Google agree with each other: the listing is wrong
    if(!agree.some(a=>!a.startsWith('listing'))&&S1&&S4&&within(S1,S4,100)){P={lat:S1.lat,lng:S1.lng,src:`OSM "${S1.name}"`};agree.length=0;agree.push(`Google "${S4.name}" ${hav(S1.lat,S1.lng,S4.lat,S4.lng)}m`);d.tabelog_overruled=A.url}
  } else if(S1||S2.length){
    // (Google coordinates are never stored — Maps Platform terms allow only a 30-day cache)
    if(S1){P={lat:S1.lat,lng:S1.lng,src:`OSM "${S1.name}"`};if(within(S1,S4,100))agree.push(`Google "${S4.name}" ${hav(S1.lat,S1.lng,S4.lat,S4.lng)}m`);const s2=S2.find(s=>within(S1,s,150));if(s2)agree.push(`shop site address ${s2.title} ${hav(S1.lat,S1.lng,s2.lat,s2.lng)}m`)}
    else if(S2.length){const s2=S2[0];P={lat:s2.lat,lng:s2.lng,src:`shop site address ${s2.title} (GSI, lot-level)`,lotOnly:true};if(within(s2,S4,150))agree.push(`Google "${S4.name}" ${hav(s2.lat,s2.lng,S4.lat,S4.lng)}m`)}
  }
  d.P=P;d.agree=agree;d.S1=S1&&{name:S1.name,lat:S1.lat,lng:S1.lng};d.S2=S2.map(s=>s.title);d.S4=S4&&{name:S4.name,lat:S4.lat,lng:S4.lng,status:S4.status};d.S3=S3&&{title:S3.title,level:S3.level,lat:S3.lat,lng:S3.lng};
  if(S4&&S4.status&&S4.status!=='OPERATIONAL')d.google_status=S4.status;
  const strong=agree.some(a=>!a.startsWith('listing address'));
  const curSuspect=!!x.loc_approx||stack[key(x)]>1;
  const secondExists=!!(S1||S4||S2.length||(S3&&PRECISE.has(S3.level)));
  if(!P){d.decision='no_source'}
  else {
    d.move=hav(x.lat,x.lng,P.lat,P.lng);
    const indep=agree.some(a=>/^(OSM|Google)/.test(a));
    if(d.move>1000&&!(indep||(strong&&curSuspect)))d.decision='review_big_move';
    else if(strong)d.decision='verified';
    else if(agree.length)d.decision=(d.move<=200&&!x.done)?'verified_weak':'weak_single';
    else if(!x.done&&d.move<=60&&!curSuspect)d.decision='current_agrees';
    else if(secondExists&&!curSuspect)d.decision='conflict';
    else d.decision=curSuspect?'single_source_replaces_approx':'single_keep';
  }
  out.push(d);
}
fs.writeFileSync(`${S}/decisions.json`,JSON.stringify(out,null,1));
const t={};for(const d of out){const k=`${d.hidden?'hidden':'visible'} ${d.decision}`;t[k]=(t[k]||0)+1}console.log(t);
fs.writeFileSync(`${S}/reconcile-summary.txt`,Object.entries(t).filter(([k])=>k.startsWith('visible')).map(([k,v])=>`${k.slice(8)}: ${v}`).join(', '));
if(APPLY){
  const by=new Map(out.map(d=>[d.id,d]));
  for(const c of CITIES){const j=readCity(c);let n=0;
    for(const p of j.places){const d=by.get(p.id);if(!d)continue;
      const set=(approx,src)=>{p.lat=+(+d.P.lat).toFixed(6);p.lng=+(+d.P.lng).toFixed(6);if(approx)p.loc_approx=approx;else delete p.loc_approx;p.pin_source=src;n++};
      const lot=d.P&&d.P.lotOnly?'block':null;
      if(d.decision==='verified'||d.decision==='verified_weak')set(lot,`${d.P.src}; cross-checked: ${d.agree.join('; ')}; ${DATE}`);
      else if(d.decision==='weak_single')set(lot||'single',`${d.P.src}; consistent with the listing's own address only (${d.agree.join('; ')}), no independent source yet; ${DATE}`);
      else if(d.decision==='current_agrees'&&p.id.startsWith('ChIJ'))set(null,`${d.P.src}; cross-checked: existing Google-imported pin agrees within 60m (Google coordinates not retained); ${DATE}`);
      else if(d.decision==='current_agrees'){p.pin_source=`existing pin agrees with ${d.P.src} (within 60m); ${DATE}`;n++}
      else if(d.decision==='single_source_replaces_approx')set(lot||'single',`${d.P.src}; NOT cross-checked (no second source found); ${DATE}`);
      else if(p.pin_source&&!/cross-checked|agrees|consistent/.test(p.pin_source)){p.loc_approx=p.loc_approx||'single';p.pin_source+=` — NOT cross-checked (${DATE}: ${d.decision})`;n++}
    }
    writeCity(c,j);console.log(c,'updated',n);
  }
}
