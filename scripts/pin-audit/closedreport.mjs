// Join closedcache (Tabelog badge) with records (all.json tabelog ids, current data) and Google businessStatus.
import fs from 'fs';
const W=process.argv[2], R=process.argv[3];
const rd=f=>fs.readFileSync(f,'utf8').trim().split('\n').filter(Boolean).map(JSON.parse);
const cc=new Map();for(const r of rd(`${W}/closedcache.jsonl`))if(r.status)cc.set(r.t,r);
const g=new Map();for(const r of rd(`${W}/googlecache.jsonl`))g.set(r.id,r.hits||[]);
const all=JSON.parse(fs.readFileSync(`${W}/all.json`));const tb=new Map(all.map(x=>[x.id,x.tabelog||[]]));
const out=[];
for(const f of fs.readdirSync(`${R}/data`).filter(f=>/^[a-z]+\.json$/.test(f))){const d=JSON.parse(fs.readFileSync(`${R}/data/${f}`));if(!d.places)continue;
 for(const p of d.places){const ts=tb.get(p.id)||[];const badges=ts.map(t=>cc.get(t)).filter(r=>r&&(r.badge||r.status===404));
  if(!badges.length)continue;
  const gh=g.get(p.id);out.push({city:f.replace('.json',''),id:p.id,name:p.name,hidden:p.hidden||null,closed:p.closed?.status||null,web:p.website||null,
   tabelog:badges.map(b=>`${b.t} ${b.status===404?'404':b.badge}${b.alert?' — '+b.alert.slice(0,80):''}`),
   google:gh?gh.slice(0,2).map(h=>`${h.name} [${h.status||'?'}]`):null});}}
fs.writeFileSync(`${W}/closedreport.json`,JSON.stringify(out,null,1));
const vis=out.filter(o=>!o.hidden);console.log('flagged',out.length,'visible',vis.length);
const c={};for(const o of vis)for(const t of o.tabelog){const k=t.split(' ').slice(1).join(' ').split(' — ')[0];c[k]=(c[k]||0)+1}console.log(c);
