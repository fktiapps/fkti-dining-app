/* DCP owner gate — restrict the /dcp-tool editor to the SITE OWNER only.
   Load AFTER gate.js. Reuses the persistent Travel login (no separate password), works offline
   after first verify. Identity is read from the signed JWT payload (no network needed); if the
   token isn't a readable JWT we fall back to travel.fkti.org/api/me. Verbose console logs under
   the [dcp-gate] prefix so a wrong block is easy to diagnose. */
(function () {
  // ---- CONFIG — your Travel identity (matched case-insensitively, anywhere in the payload) ----
  var OWNER_ID = 'BOLD-FUJI-47';           // your Travel login handle
  var OWNER_EMAIL = 'gjswork@yahoo.com';   // fallback if the payload carries email instead
  // --------------------------------------------------------------------------------------------
  var TRAVEL = 'https://travel.fkti.org';
  var LS_TOK = 'fkti_auth', LS_OK = 'dcp_owner_ok';
  var MAX_AGE = 30 * 24 * 3600 * 1000;
  var log = function () { try { console.log.apply(console, ['[dcp-gate]'].concat([].slice.call(arguments))); } catch (e) {} };

  function tok() {
    try { var t = localStorage.getItem(LS_TOK); if (t) return t; } catch (e) {}
    var m = document.cookie.match(/(?:^|;\s*)fkti_auth=([^;]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function fp(t) { return (t || '').slice(-24); }
  function jwtPayload(t) {
    try {
      var p = (t || '').split('.'); if (p.length < 2) return null;
      var b = p[1].replace(/-/g, '+').replace(/_/g, '/'); b += '==='.slice((b.length + 3) % 4);
      var s = atob(b), json = decodeURIComponent(s.split('').map(function (c) { return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2); }).join(''));
      return JSON.parse(json);
    } catch (e) { return null; }
  }
  function matches(obj) {
    if (obj == null) return false;
    var hay = ''; try { hay = JSON.stringify(obj).toLowerCase(); } catch (e) { hay = String(obj).toLowerCase(); }
    return (OWNER_ID && hay.indexOf(OWNER_ID.toLowerCase()) >= 0) || (OWNER_EMAIL && hay.indexOf(OWNER_EMAIL.toLowerCase()) >= 0);
  }
  function cacheOK(t) { try { localStorage.setItem(LS_OK, fp(t) + ':' + Date.now()); } catch (e) {} }
  function cachedOK(t) { try { var v = localStorage.getItem(LS_OK); if (!v) return false; var p = v.split(':'); return p[0] === fp(t) && (Date.now() - Number(p[1] || 0)) < MAX_AGE; } catch (e) { return false; } }
  function clearOK() { try { localStorage.removeItem(LS_OK); } catch (e) {} }
  function reveal() { try { var s = document.getElementById('dcp-hide'); if (s) s.parentNode.removeChild(s); } catch (e) {} }

  function allow(why, t) { log('ALLOW —', why); cacheOK(t); reveal(); }
  function block(kind, dbg) {
    log('BLOCK —', kind, dbg !== undefined ? dbg : '');
    var msg = kind === 'offline'
      ? 'The editor needs to verify it’s you once while online. Connect to the internet and reload — after that it works offline.'
      : 'The Deeply Connected Places editor is restricted to the site owner.';
    try {
      document.documentElement.innerHTML =
        '<meta name="viewport" content="width=device-width, initial-scale=1">'
        + '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;font:16px/1.5 -apple-system,BlinkMacSystemFont,sans-serif;background:#fbf7ef;color:#2b2218;padding:24px;text-align:center">'
        + '<div style="max-width:420px"><div style="font-size:40px">🌸🔒</div>'
        + '<h1 style="font-size:19px;margin:.6em 0">Editor restricted</h1><p style="color:#8a7f6c">' + msg + '</p>'
        + '<p style="margin-top:20px"><a href="/" style="color:#9c3b2e;font-weight:700;text-decoration:none">← Back to the dining guide</a></p></div></div>';
    } catch (e) {}
    try { window.stop && window.stop(); } catch (e) {}
  }

  var t = tok();
  if (!t) { log('no token — gate.js will redirect to login'); return; }

  // 1) Read identity straight from the signed token — no network, works offline.
  var payload = jwtPayload(t);
  log('jwt payload:', payload);
  if (matches(payload)) { allow('jwt identity is owner', t); return; }

  // 2) Trust a recent local decision (same token) — instant + offline.
  if (cachedOK(t)) {
    allow('cached owner flag', t);
    if (navigator.onLine) {
      try {
        fetch(TRAVEL + '/api/me', { headers: { 'Authorization': 'Bearer ' + t } })
          .then(function (r) { return r.ok ? r.json().catch(function () { return {}; }) : Promise.reject(r.status); })
          .then(function (me) { if (payload == null && !matches(me)) { clearOK(); block('not-owner (bg recheck)', me); } })
          .catch(function () {});
      } catch (e) {}
    }
    return;
  }

  // 3) No local signal — verify via the Travel API (needs to be online + CORS-allowed).
  if (!navigator.onLine) { block('offline'); return; }
  try {
    fetch(TRAVEL + '/api/me', { headers: { 'Authorization': 'Bearer ' + t } })
      .then(function (r) { return r.ok ? r.json().catch(function () { return {}; }) : Promise.reject('HTTP ' + r.status); })
      .then(function (me) { log('/api/me:', me); if (matches(me)) allow('api/me identity is owner', t); else block('not-owner', me); })
      .catch(function (e) { block('offline', 'api/me unreachable: ' + e); });
  } catch (e) { block('offline', e); }
})();
