/* Owner-only launcher for the DCP editor — injects a small floating "🌸 DCP" button into the
   main dining app that opens /dcp-tool, and ONLY shows it to the site owner (your Travel handle).
   Loaded on index.html after gate.js. Students never see the button; the /dcp-tool gate is the
   real lock — this just keeps the entry point out of sight for everyone else. */
(function () {
  // Keep these in sync with dcp-gate.js.
  var OWNER_ID = 'BOLD-FUJI-47';
  var OWNER_EMAIL = 'gjswork@yahoo.com';
  var TRAVEL = 'https://travel.fkti.org';
  var LS_TOK = 'fkti_auth', LS_OK = 'dcp_owner_ok';
  var MAX_AGE = 30 * 24 * 3600 * 1000;

  function tok() {
    try { var t = localStorage.getItem(LS_TOK); if (t) return t; } catch (e) {}
    var m = document.cookie.match(/(?:^|;\s*)fkti_auth=([^;]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function fp(t) { return (t || '').slice(-24); }
  function matches(me) {
    var hay = ''; try { hay = JSON.stringify(me).toLowerCase(); } catch (e) { hay = String(me).toLowerCase(); }
    return (OWNER_ID && hay.indexOf(OWNER_ID.toLowerCase()) >= 0) || (OWNER_EMAIL && hay.indexOf(OWNER_EMAIL.toLowerCase()) >= 0);
  }
  function cachedOK(t) {
    try { var v = localStorage.getItem(LS_OK); if (!v) return false; var p = v.split(':'); return p[0] === fp(t) && (Date.now() - Number(p[1] || 0)) < MAX_AGE; } catch (e) { return false; }
  }
  function cacheOK(t) { try { localStorage.setItem(LS_OK, fp(t) + ':' + Date.now()); } catch (e) {} }

  function addButton() {
    if (document.getElementById('dcp-launch')) return;
    var css = '#dcp-launch{position:fixed;left:calc(env(safe-area-inset-left,0px) + 10px);'
      + 'bottom:calc(env(safe-area-inset-bottom,0px) + 58px);z-index:2147482900;'
      + 'display:flex;align-items:center;gap:6px;background:#9c3b2e;color:#fff;border:none;border-radius:999px;'
      + 'padding:9px 14px;font:700 13px -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;'
      + 'box-shadow:0 4px 14px rgba(0,0,0,.35);cursor:pointer;text-decoration:none}';
    var a = document.createElement('a');
    a.id = 'dcp-launch'; a.href = '/dcp-tool.html';
    a.setAttribute('aria-label', 'Open the Deeply Connected Places editor');
    a.innerHTML = '<style>' + css + '</style>🌸 DCP';
    (document.body || document.documentElement).appendChild(a);
  }
  function show() { if (document.body) addButton(); else document.addEventListener('DOMContentLoaded', addButton); }

  var t = tok();
  if (!t) return;                       // not logged in yet — gate.js handles that
  if (cachedOK(t)) { show(); return; }  // already known to be the owner on this device
  if (!navigator.onLine) return;        // can't verify → don't show (students shouldn't see it)
  try {
    fetch(TRAVEL + '/api/me', { headers: { 'Authorization': 'Bearer ' + t } })
      .then(function (r) { return r.ok ? r.json().catch(function () { return {}; }) : Promise.reject(r.status); })
      .then(function (me) { if (matches(me)) { cacheOK(t); show(); } })
      .catch(function () { /* offline / transient — just don't show the button */ });
  } catch (e) {}
})();
