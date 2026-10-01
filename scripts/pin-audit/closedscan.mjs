// Closed-shop scan (launch item 5). Re-fetches every Tabelog /en/ listing in tbcache.jsonl and records
// the restaurant STATUS BADGE -> closedcache.jsonl in the work dir.
// NOTE: id="js-closed-label" on these pages is the regular weekly closing day ("Closed: Monday"), NOT a
// closure. The closure signal is the red status badge: "Closed" (閉店), "Relocated" (移転),
// "Temporarily closed" (休業), "Listing on hold" (掲載保留). One source only — never hide on this alone.
//   node scripts/pin-audit/closedscan.mjs <work>
import fs from 'fs';
const S=process.argv[2];const C=`${S}/closedcache.jsonl`;
const urls=[...new Set(fs.readFileSync(`${S}/tbcache.jsonl`,'utf8').split('\n').filter(Boolean).map(l=>JSON.parse(l)).filter(r=>r.status===200).map(r=>r.t))];
const have=new Set(fs.existsSync(C)?fs.readFileSync(C,'utf8').split('\n').filter(Boolean).map(l=>JSON.parse(l)).filter(r=>r.status===200||r.status===404).map(r=>r.t):[]);
const todo=urls.filter(t=>!have.has(t));
console.log('todo',todo.length);let i=0;
const one=async t=>{
  const u=`https://tabelog.com/en/${t}/`;const row={t,at:new Date().toISOString().slice(0,10)};
  try{const r=await fetch(u,{headers:{'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64)','Accept-Language':'en'}});
    row.status=r.status;const h=(await r.text()).replace(/\s+/g,' ');
    const b=h.match(/class="rst-status-badge-[a-z-]+__text"[^>]*>([^<]*)</);row.badge=b?b[1].trim():null;
    const al=h.match(/rst-status-alert"> <div class="c-alert__message"> (?:<i[^>]*><\/i>)?([^<]*)</);if(al)row.alert=al[1].trim();
    const mv=h.match(/href="(https:\/\/tabelog\.com\/en\/[a-z]+\/A\d+\/A\d+\/\d+\/)"[^>]*>[^<]*(?:new location|relocated)/i);if(mv)row.moved_to=mv[1];
    if(r.url&&!r.url.includes(t.split('/').pop()))row.redirect=r.url;
  }catch(e){row.err=String(e)}
  fs.appendFileSync(C,JSON.stringify(row)+'\n');
  if(++i%200===0)console.log(i,new Date().toISOString());
  await new Promise(z=>setTimeout(z,row.status===429||row.status===403?30000:1200));
};
const q=[...todo];await Promise.all([0,1,2].map(async()=>{while(q.length)await one(q.shift())}));
console.log('done');
