#!/usr/bin/env node
/**
 * Drive the real app in headless Chrome against the local static server and fail
 * on anything a user would meet as broken.
 *
 * This exists because main is wired to Cloudflare Pages: a push deploys straight
 * to production. Validating that the JSON parses is not the same as knowing the
 * app renders it — new fields (outside_city, gf_review, ramen) and a rewritten
 * cuisine vocabulary all reach the DOM through code that has never run against
 * this data.
 *
 *   node scripts/static-serve.mjs &
 *   node scripts/smoke-app.mjs [--url http://127.0.0.1:8788/index.html] [--shot out.png]
 */
import puppeteer from 'puppeteer-core';
import fs from 'node:fs';

const arg = (k, d) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : d; };
const TARGET = arg('--url', 'http://127.0.0.1:8788/index.html');
const SHOT = arg('--shot', null);
const AUTH_HOST = /travel\.fkti\.org/;

const CHROME = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
].find(p => fs.existsSync(p));
if (!CHROME) { console.error('no Chrome/Edge found'); process.exit(1); }

const errors = [], failedRequests = [];

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});
const page = await browser.newPage();
await page.setViewport({ width: 430, height: 900, deviceScaleFactor: 2 });

// The app sits behind gate.js, a cross-app SSO that redirects to travel.fkti.org
// when no token is present. For a LOCAL smoke test we seed a placeholder token and
// make that host unreachable — gate.js is explicitly written to fail open on a
// network error ("spotty trip wifi"), the same path a real user offline takes.
// This exercises the dining app against local data and grants no remote access.
await page.evaluateOnNewDocument(() => {
  try { localStorage.setItem('fkti_auth', 'local-smoke-test'); } catch (e) {}
});
await page.setRequestInterception(true);
page.on('request', r => (AUTH_HOST.test(r.url()) ? r.abort() : r.continue()));

page.on('console', m => {
  const txt = m.text();
  if (m.type() === 'error' && !AUTH_HOST.test(txt) && !/ERR_FAILED/.test(txt)) errors.push(txt);
});
page.on('pageerror', e => errors.push('PAGEERROR: ' + e.message));
page.on('requestfailed', r => { if (!AUTH_HOST.test(r.url())) failedRequests.push(r.failure()?.errorText + ' ' + r.url()); });
page.on('response', r => { if (r.status() >= 400 && !AUTH_HOST.test(r.url())) failedRequests.push('HTTP ' + r.status() + ' ' + r.url()); });

console.log('loading ' + TARGET + ' ...');
await page.goto(TARGET, { waitUntil: 'networkidle2', timeout: 60000 });
await new Promise(r => setTimeout(r, 3500));

const boot = await page.evaluate(() => ({
  title: document.title,
  bodyChars: document.body.innerText.length,
  cardCount: document.querySelectorAll('.card, [class*="card"]').length,
  cuisineChips: [...document.querySelectorAll('.chip.cz')].map(b => b.textContent.trim()),
  manifestLoaded: typeof MANIFEST !== 'undefined' && !!MANIFEST,
  cityCount: (typeof MANIFEST !== 'undefined' && MANIFEST && MANIFEST.cities.length) || 0,
  activeCity: (typeof state !== 'undefined' && state && state.active) || null,
  placesLoaded: (typeof state !== 'undefined' && state && state.cities && state.active && state.cities[state.active])
    ? state.cities[state.active].places.length : 0,
  labelKeys: typeof CUISINE_LABELS !== 'undefined' ? Object.keys(CUISINE_LABELS).length : -1,
}));

// Drive it: switch to a city carrying the new outside_city badge and open a
// record that has a ramen block.
const drive = await page.evaluate(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const out = {};
  const nagano = MANIFEST.cities.find(c => c.id === 'nagano');
  await ensureCity(nagano);
  state.active = 'nagano';
  render();
  await sleep(1500);
  out.naganoPlaces = (state.cities.nagano && state.cities.nagano.places.length) || 0;
  out.outsideBadges = document.querySelectorAll('.outside').length;
  out.outsideText = (document.querySelector('.outside') || {}).textContent
    ? document.querySelector('.outside').textContent.trim().slice(0, 78) : '';

  // Records the enrichment could not verify, could not place in this city, or found
  // permanently shut must never reach the list. This is the check that matters most
  // of the ones here: it is the difference between a hidden record and a traveller
  // standing outside a shop that closed in 2020.
  const tokyo = MANIFEST.cities.find(c => c.id === 'tokyo');
  await ensureCity(tokyo);
  state.active = 'tokyo';
  render();
  await sleep(1200);
  const tp = state.cities.tokyo.places;
  out.tokyoTotal = tp.length;
  out.tokyoHidden = tp.filter(p => p.hidden).length;
  const shownIds = new Set([...document.querySelectorAll('.card[data-id]')].map(e => e.dataset.id));
  out.hiddenLeaked = tp.filter(p => p.hidden && shownIds.has(p.id)).length;
  out.tokyoShown = shownIds.size;
  state.active = 'nagano';
  render();
  await sleep(900);

  const withRamen = state.cities.nagano.places.find(p => p.ramen);
  if (withRamen) {
    try {
      _renderDetail(withRamen);
      await sleep(900);
      out.detailChars = (document.getElementById('detailBody') || document.body).innerText.length;
      out.detailHasRamenGeek = /ramenGeek|broth|麺/i.test(document.body.innerHTML);
      out.ramenShop = withRamen.name.slice(0, 26);
    } catch (e) { out.detailError = String(e.message).slice(0, 80); }
  }
  return out;
});

const rawSlugChips = boot.cuisineChips.filter(t => /^[a-z0-9_]+$/.test(t));

console.log('\n--- boot ---');
Object.entries(boot).forEach(([k, v]) => {
  if (k === 'cuisineChips') return console.log('  cuisineChips       ' + v.length);
  console.log('  ' + k.padEnd(18) + ' ' + v);
});
console.log('\n--- driven ---');
Object.entries(drive).forEach(([k, v]) => console.log('  ' + k.padEnd(18) + ' ' + v));

if (SHOT) { await page.screenshot({ path: SHOT }); console.log('\nscreenshot: ' + SHOT); }
await browser.close();

const fail = [];
if (boot.bodyChars < 200) fail.push('page rendered almost no text');
if (!boot.manifestLoaded) fail.push('MANIFEST did not load');
if (boot.cityCount !== 9) fail.push('expected 9 cities, got ' + boot.cityCount);
if (boot.placesLoaded < 100) fail.push('only ' + boot.placesLoaded + ' places for ' + boot.activeCity);
if (boot.labelKeys < 29) fail.push('CUISINE_LABELS has ' + boot.labelKeys + ' entries, expected >= 29');
if (rawSlugChips.length) fail.push('cuisine chips showing raw slugs: ' + rawSlugChips.join(', '));
if (!drive.naganoPlaces) fail.push('city switch to nagano loaded no places');
if (!drive.outsideBadges) fail.push('no outside_city badge rendered in nagano (9 records carry one)');
if (!drive.tokyoHidden) fail.push('no hidden Tokyo records — the existence pass should have hidden some');
if (drive.hiddenLeaked) fail.push(drive.hiddenLeaked + ' hidden record(s) rendered in the list');
if (drive.detailError) fail.push('detail sheet threw: ' + drive.detailError);
if (errors.length) fail.push(errors.length + ' console error(s)');
if (failedRequests.length) fail.push(failedRequests.length + ' failed request(s)');

if (errors.length) { console.log('\nconsole errors:'); errors.slice(0, 10).forEach(e => console.log('  x ' + e.slice(0, 180))); }
if (failedRequests.length) { console.log('\nfailed requests:'); [...new Set(failedRequests)].slice(0, 10).forEach(e => console.log('  x ' + e.slice(0, 160))); }

console.log(fail.length ? '\nFAIL:\n  ' + fail.join('\n  ') : '\nPASS - app boots, data renders, interactions work, no console errors');
process.exit(fail.length ? 1 : 0);
