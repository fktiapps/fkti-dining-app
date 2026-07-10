// Deeply Connected Dining — service worker. Bump VERSION to force an update.
const VERSION = 'dcd-v115';
const SHELL = `shell-${VERSION}`;
const DATA  = `data-${VERSION}`;
const TILES = `tiles-${VERSION}`;
const MAXTILES = 1200; // rough cap so the tile cache can't grow forever

const SHELL_ASSETS = [
  './', './index.html', './gate.js', './dcp-launch.js', './manifest.webmanifest',
  './dcp-tool.html', './dcp-gate.js', './dcp.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/favicon.png', './icons/apple-touch-icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js'
];

self.addEventListener('install', e => {
  e.waitUntil(Promise.all([
    caches.open(SHELL).then(c => c.addAll(SHELL_ASSETS)),
    // Precache the city data so the app works offline after first install.
    // Reads the manifest and caches every city file it lists (scales as cities are added).
    caches.open(DATA).then(async c => {
      try {
        await c.add('data/manifest.json');
        const m = await fetch('data/manifest.json').then(r => r.json());
        await Promise.all((m.cities || []).map(ci => c.add(ci.file).catch(() => {})));
      } catch (_) { /* offline at install: city data caches on first online view */ }
    })
  ]).then(() => self.skipWaiting()));
});

// Allow the page to tell a waiting worker to take over immediately (manual refresh button).
self.addEventListener('message', e => { if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting(); });

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => ![SHELL, DATA, TILES].includes(k)).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

async function trimCache(name, max){
  const c = await caches.open(name); const keys = await c.keys();
  if (keys.length > max) await Promise.all(keys.slice(0, keys.length - max).map(k => c.delete(k)));
}

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;

  // Map tiles: cache-first with a cap (lets viewed areas work offline)
  if (/tile\.openstreetmap\.org|tile\.openstreetmap\.fr|basemaps\.cartocdn\.com|tiles\.stadiamaps\.com|api\.maptiler\.com/.test(url.hostname)) {
    e.respondWith(caches.open(TILES).then(async c => {
      const hit = await c.match(e.request); if (hit) return hit;
      try { const res = await fetch(e.request); if (res && res.ok && res.status === 200) { c.put(e.request, res.clone()); trimCache(TILES, MAXTILES); } return res; }
      catch(_) { return hit || Response.error(); }
    }));
    return;
  }

  // City data: stale-while-revalidate
  if (url.pathname.includes('/data/')) {
    e.respondWith(caches.open(DATA).then(async c => {
      const hit = await c.match(e.request);
      const net = fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
    return;
  }

  // Do not cache the AI endpoint
  if (url.pathname.startsWith('/api/')) return;

  // App shell + CDN: cache-first, fall back to network
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
    if (url.origin === location.origin || url.hostname.includes('cdnjs')) {
      const copy = r.clone(); caches.open(SHELL).then(c => c.put(e.request, copy));
    }
    return r;
  }).catch(() => caches.match('./index.html'))));
});
