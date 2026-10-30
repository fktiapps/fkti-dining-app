// Shared helpers for the city sweeps (scripts/sweep/<city>/). Every crawl/queue step reads
// the city's config.json and keeps its state in files under scripts/sweep/<city>/, which are
// committed — so a fresh session (no scratchpad, no context) can resume exactly where the
// last one stopped. See docs/osaka-sweep.md.
import fs from 'fs';
import path from 'path';

export const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'Accept-Language': 'en' };
// For OSM/Nominatim: a generic project UA, never a personal contact address.
export const OSM_UA = { 'User-Agent': 'fkti-dining-pin-check/1.0' };
export const sleep = ms => new Promise(z => setTimeout(z, ms));

export function cityDir(city) { return path.resolve('scripts/sweep', city); }
export function loadConfig(city) { return JSON.parse(fs.readFileSync(path.join(cityDir(city), 'config.json'), 'utf8')); }

// Distance from a sweep's centre, or with config.circles, to the nearest circle's centre (all circles
// in one sweep share radius_m, so "inside" stays m <= radius_m).
export const distOf = (cfg, lat, lng) => cfg.circles
  ? Math.min(...cfg.circles.map(c => hav(c.center[0], c.center[1], lat, lng)))
  : hav(cfg.center[0], cfg.center[1], lat, lng);
export const nearestCircle = (cfg, lat, lng) => cfg.circles
  ? cfg.circles.reduce((b, c) => (hav(c.center[0], c.center[1], lat, lng) < hav(b.center[0], b.center[1], lat, lng) ? c : b)).label
  : cfg.center_label;

export const hav = (a, b, c, d) => {
  const R = 6371000, r = Math.PI / 180;
  const x = (d - b) * r * Math.cos((a + c) / 2 * r), y = (c - a) * r;
  return Math.round(Math.sqrt(x * x + y * y) * R);
};

export function readJsonl(file) {
  if (!fs.existsSync(file)) return [];
  return fs.readFileSync(file, 'utf8').split('\n').filter(Boolean).map(l => JSON.parse(l));
}
export function appendJsonl(file, row) { fs.appendFileSync(file, JSON.stringify(row) + '\n'); }

export async function get(url, { tries = 3 } = {}) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { headers: UA, redirect: 'follow' });
      const h = await r.text();
      await sleep(1100);
      return { s: r.status, h };
    } catch (e) { await sleep(3000 * (i + 1)); }
  }
  return { s: 0, h: '' };
}

// Parse a Tabelog /en/ shop page into the fields the queue needs.
export function parseShop(h) {
  const row = {};
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map(m => { try { return JSON.parse(m[1]); } catch { return null; } }).find(j => j && j.geo);
  if (ld) { row.lat = +ld.geo.latitude; row.lng = +ld.geo.longitude; row.en = ld.name; }
  const flat = h.replace(/\s+/g, ' ');
  const ad = flat.match(/rstinfo-table__address">\s*(.*?)\s*<\/p>/); row.addr = ad ? ad[1].replace(/<[^>]*>/g, '').trim() : null;
  const al = flat.match(/<span class="alias">\(([^)<]*)\)<\/span>/); row.ja = al ? al[1] : null;
  const td = k => { const m = flat.match(new RegExp('<th> ' + k + ' </th> <td[^>]*>(.*?)</td>')); return m ? m[1].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : null; };
  row.genre = td('Categories'); row.seats = td('Number of seats');
  row.opened = (flat.match(/The opening day<\/th> <td[^>]*>\s*<p[^>]*>\s*([^<]*)/) || [])[1] || null;
  const b = flat.match(/class="rst-status-badge-[a-z-]+__text"[^>]*>([^<]*)</); row.badge = b ? b[1].trim() : null;
  row.reviews = +((flat.match(/rd-header__rst-reviews-target[^>]*><b>([\d,]+)<\/b>/) || [])[1] || '0').replace(/,/g, '');
  row.rating = +((flat.match(/rdheader-rating__score-val-dtl[^>]*>([\d.]+)</) || [])[1] || 0) || null;
  row.award = /Tabelog 100|The Tabelog Award/.test(flat) || null;
  row.vegtag = /Vegan options|Vegetarian options/.test(flat) || null;
  return row;
}

// Tabelog ids already present in a city's data (any field mentioning the id).
export function idsInCity(city) {
  if (fs.existsSync(path.join(cityDir(city), 'config.json'))) city = loadConfig(city).data_city || city;
  const files = [`data/${city}.json`, `data/${city}_menus.json`].filter(f => fs.existsSync(f));
  const blob = files.map(f => fs.readFileSync(f, 'utf8')).join('');
  return new Set([...blob.matchAll(/\/(\d{8})\//g)].map(m => m[1]));
}
