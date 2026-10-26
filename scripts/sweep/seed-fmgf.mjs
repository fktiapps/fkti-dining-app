// Vegan/GF seeds: fetch each FindMeGlutenFree biz page listed on a city page and record name,
// address, geo, rating counts and distance; append to scripts/sweep/<city>/vegan-seeds.jsonl.
//   node scripts/sweep/seed-fmgf.mjs <city> <fmgf_links.json>
// NOTE (2026-10-26): FMGF answers Node fetch with a Cloudflare challenge, so this does not work as is.
// What worked: curl each biz page into scripts/sweep/<city>/work/fmgf/<id>.html, then parse-fmgf-city.mjs.
import fs from 'fs';
import { loadConfig, cityDir, get, readJsonl, appendJsonl, hav } from './lib.mjs';
const [city, linksFile] = process.argv.slice(2);
const cfg = loadConfig(city); const out = `${cityDir(city)}/vegan-seeds.jsonl`;
const have = new Set(readJsonl(out).map(r => r.src));
for (const p of JSON.parse(fs.readFileSync(linksFile, 'utf8'))) {
  const src = 'https://www.findmeglutenfree.com' + p; if (have.has(src)) continue;
  const { s, h } = await get(src);
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => { try { return JSON.parse(m[1]); } catch { return null; } }).filter(Boolean);
  const j = ld.find(x => x.geo || x.address) || {};
  const lat = +(j.geo?.latitude || (h.match(/latitude"?:\s*"?([\d.]+)/) || [])[1] || 0), lng = +(j.geo?.longitude || (h.match(/longitude"?:\s*"?([\d.]+)/) || [])[1] || 0);
  const addr = j.address ? [j.address.streetAddress, j.address.addressLocality].filter(Boolean).join(', ') : null;
  const row = { src, source: 'fmgf', http: s, name: j.name || (h.match(/<title>([^<|]+)/) || [])[1]?.trim(), addr, lat, lng,
    m: lat ? hav(cfg.center[0], cfg.center[1], lat, lng) : null,
    rating: j.aggregateRating ? { value: j.aggregateRating.ratingValue, count: j.aggregateRating.reviewCount || j.aggregateRating.ratingCount } : null,
    gf_menu: /gluten-free menu/i.test(h) || null, dedicated: /100% gluten-free|dedicated gluten-free/i.test(h) || null, at: new Date().toISOString().slice(0, 10) };
  appendJsonl(out, row);
  console.log(row.m ?? '?', 'm |', row.name, '|', addr);
}
