// GET /api/nearby?lat=&lng=&r=  → live OpenStreetMap (Overpass) food places near a point.
// Free, no API key. Proxied server-side so the client makes a same-origin call (no CORS)
// and we can cache + try mirrors. Returns normalized places; the client classifies for GF/vegan.

export async function onRequestGet(context) {
  const { request } = context;
  const url = new URL(request.url);
  const lat = parseFloat(url.searchParams.get('lat'));
  const lng = parseFloat(url.searchParams.get('lng'));
  let r = parseInt(url.searchParams.get('r') || '800', 10);
  if (!isFinite(lat) || !isFinite(lng)) return json({ error: 'bad_coords' }, 400);
  r = Math.max(100, Math.min(3000, isFinite(r) ? r : 800));

  // Edge cache keyed to a coarse grid (~100m) so repeated presses are free.
  let cache, ckey;
  try {
    cache = caches.default;
    ckey = new Request(`https://nearby.cache/?lat=${lat.toFixed(3)}&lng=${lng.toFixed(3)}&r=${r}`);
    const hit = await cache.match(ckey);
    if (hit) return hit;
  } catch (_) {}

  const q = `[out:json][timeout:20];(` +
    `nwr["amenity"~"^(restaurant|fast_food|cafe)$"](around:${r},${lat},${lng});` +
    `nwr["shop"~"^(convenience|supermarket)$"](around:${r},${lat},${lng});` +
    `);out center tags 90;`;

  const endpoints = [
    'https://overpass-api.de/api/interpreter',
    'https://overpass.kumi.systems/api/interpreter',
    'https://maps.mail.ru/osm/tools/overpass/api/interpreter'
  ];
  let data = null, err = 'unreachable';
  for (const ep of endpoints) {
    try {
      const resp = await fetch(ep, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          // Overpass rejects requests with a generic/absent User-Agent (HTTP 406).
          'User-Agent': 'DeeplyConnectedDining/1.0 (https://fkti-dining-app.pages.dev)'
        },
        body: 'data=' + encodeURIComponent(q)
      });
      if (resp.ok) { data = await resp.json(); break; }
      err = 'overpass_' + resp.status;
    } catch (e) { err = 'fetch_error'; }
  }
  if (!data) return json({ error: err }, 502);

  const seen = new Set();
  const places = [];
  for (const el of (data.elements || [])) {
    const t = el.tags || {};
    const plat = el.lat != null ? el.lat : (el.center && el.center.lat);
    const plon = el.lon != null ? el.lon : (el.center && el.center.lon);
    if (plat == null || plon == null) continue;
    const kind = t.shop || t.amenity;
    if (!kind) continue;
    const name = t['name:en'] || t.name || null;
    const key = (name || '') + '@' + plat.toFixed(4) + ',' + plon.toFixed(4);
    if (seen.has(key)) continue;
    seen.add(key);
    places.push({
      name, lat: plat, lng: plon, kind,
      cuisine: t.cuisine || null,
      brand: t.brand || t['brand:en'] || null,
      vegan: t['diet:vegan'] || null,
      vegetarian: t['diet:vegetarian'] || null,
      gf: t['diet:gluten_free'] || null,
      hours: t.opening_hours || null
    });
  }

  const out = json({ places, count: places.length, radius: r });
  out.headers.set('Cache-Control', 'public, max-age=300');
  try { if (cache && ckey) context.waitUntil(cache.put(ckey, out.clone())); } catch (_) {}
  return out;
}

function json(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}
