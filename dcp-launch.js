/* Owner-only launcher — injects a floating "🌸 DCP" button into the main app that opens /dcp-tool,
   shown ONLY to the site owner. Identity is read from the signed JWT payload (no network, works
   offline); falls back to travel.fkti.org/api/me. Logs under [dcp-launch] so we can see why the
   button does or doesn't appear. Keep OWNER_ID / OWNER_EMAIL in sync with dcp-gate.js. */
(function () {
  var OWNER_ID = 'BOLD-FUJI-47';
  var OWNER_EMAIL = 'gjswork@yahoo.com';
  var TRAVEL = 'https://travel.fkti.org';
  var LS_TOK = 'fkti_auth', LS_OK = 'dcp_owner_ok';
  var MAX_AGE = 30 * 24 * 3600 * 1000;
  var log = function () { try { console.log.apply(console, ['[dcp-launch]'].concat([].slice.call(arguments))); } catch (e) {} };

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

  function addButton() {
    if (document.getElementById('dcp-launch')) return;
    var css = '#dcp-launch{position:fixed;left:calc(env(safe-area-inset-left,0px) + 10px);'
      + 'bottom:calc(env(safe-area-inset-bottom,0px) + 58px);z-index:2147482900;display:flex;align-items:center;gap:6px;'
      + 'background:#9c3b2e;color:#fff;border:none;border-radius:999px;padding:9px 14px;'
      + 'font:700 13px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.35);cursor:pointer;text-decoration:none}';
    var a = document.createElement('a');
    a.id = 'dcp-launch'; a.href = '/dcp-tool.html';
    a.setAttribute('aria-label', 'Open the Deeply Connected Places editor');
    a.innerHTML = '<style>' + css + '</style>🌸 DCP';
    (document.body || document.documentElement).appendChild(a);
    log('button shown');
  }
  function show() { if (document.body) addButton(); else document.addEventListener('DOMContentLoaded', addButton); }

  var t = tok();
  if (!t) { log('no token yet'); return; }

  var payload = jwtPayload(t);
  log('jwt payload:', payload);
  if (matches(payload)) { cacheOK(t); show(); return; }
  if (cachedOK(t)) { log('cached owner flag'); show(); return; }
  if (!navigator.onLine) { log('offline & no local owner signal — button hidden'); return; }
  try {
    fetch(TRAVEL + '/api/me', { headers: { 'Authorization': 'Bearer ' + t } })
      .then(function (r) { return r.ok ? r.json().catch(function () { return {}; }) : Promise.reject('HTTP ' + r.status); })
      .then(function (me) { log('/api/me:', me); if (matches(me)) { cacheOK(t); show(); } else log('not owner — button hidden'); })
      .catch(function (e) { log('api/me unreachable, button hidden:', e); });
  } catch (e) { log(e); }
})();
