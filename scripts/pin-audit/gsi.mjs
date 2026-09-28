// Normalise a JA address to its lot, geocode with GSI, and report the precision GSI actually matched.
export function norm(a){
  if(!a) return null;
  let s=a.normalize('NFKC').replace(/\s+/g,' ').trim();
  // Kyoto street-direction form: 河原町通三条下る大黒町44 -> keep ward + the town after the direction word
  s=s.replace(/((?:区|市))[^区市]*?(?:上る|下る|入る|上ル|下ル|入ル|東入|西入)/,'$1');
  const muni=Math.max(s.lastIndexOf('区'),s.lastIndexOf('市'),s.lastIndexOf('郡'));
  const all=[...s.matchAll(/[0-9]+(?:[-‐−][0-9]+){0,3}/g)].filter(x=>x.index>muni);
  if(!all.length) return {q:s.split(' ')[0]};
  const g=all[0];return {q:s.slice(0,g.index+g[0].length)};
}
export const level=t=>/号$/.test(t)?'go':/番地?$/.test(t)?'lot':/丁目$/.test(t)?'chome':/[町村]$|字/.test(t)?'town':'ward';
export async function gsi(addr){
  const n=norm(addr);if(!n) return null;
  for(let k=0;k<3;k++){try{
    const j=await (await fetch('https://msearch.gsi.go.jp/address-search/AddressSearch?q='+encodeURIComponent(n.q))).json();
    if(!j.length) return {q:n.q,none:true};
    const f=j[0];const title=f.properties.title.normalize('NFKC');
    return {q:n.q,title,level:level(title),lat:f.geometry.coordinates[1],lng:f.geometry.coordinates[0]};
  }catch(e){await new Promise(z=>setTimeout(z,2000))}}
  return {q:n.q,err:true};
}
