/* DCP owner gate — restrict the /dcp-tool editor to the SITE OWNER only.
   Load this AFTER gate.js (gate.js guarantees a logged-in FKTI user; this narrows it to you).

   Design goals (per Greg): reuse the SAME persistent Travel login — no separate password, no
   re-entering credentials — and keep working offline in the field once you've been verified once.

   How it works:
   1. gate.js has already ensured a Travel JWT is present (or bounced to login).
   2. We ask travel.fkti.org/api/me who this token belongs to.
   3. If it's the owner → allow, and cache an "owner OK" flag (tied to this token) for 30 days so
      the very next visits are instant and work OFFLINE — you never re-authenticate.
   4. If it's a logged-in NON-owner (e.g. a student) → show a polite "restricted" screen.
   5. First-ever visit must be ONLINE so we can verify you; after that, offline is fine.
*/
(function () {
  // ---- CONFIG — change these two if your Travel account differs ------------------------------
  var OWNER_ID = 'BOLD-FUJI-47';           // your Travel login handle (matched case-insensitively)
  var OWNER_EMAIL = 'gjswork@yahoo.com';   // fallback if /api/me also carries your email
  // -------------------------------------------------------------------------------------------
  var TRAVEL = 'https://travel.fkti.org';
  var LS_TOK = 'fkti_auth';
  var LS_OK = 'dcp_owner_ok';               // "<tokenFingerprint>:<timestamp>"
  var MAX_AGE = 30 * 24 * 3600 * 1000;      // 30 days, matches the auth cookie lifetime

  function tok() {
    try { var t = localStorage.getItem(LS_TOK); if (t) return t; } catch (e) {}
    var m = document.cookie.match(/(?:^|;\s*)fkti_auth=([^;]+)/);
    return m ? decodeURIComponent(m[1]) : null;
  }
  function fp(t) { return (t || '').slice(-24); }               // cheap token fingerprint
  function matches(me) {
    var hay = '';
    try { hay = JSON.stringify(me).toLowerCase(); } catch (e) { hay = String(me).toLowerCase(); }
    if (OWNER_EMAIL && hay.indexOf(OWNER_EMAIL.toLowerCase()) >= 0) return true;
    if (OWNER_ID && hay.indexOf(String(OWNER_ID).toLowerCase()) >= 0) return true;
    return false;
  }
  function cacheOK(t) { try { localStorage.setItem(LS_OK, fp(t) + ':' + Date.now()); } catch (e) {} }
  function cachedOK(t) {
    try {
      var v = localStorage.getItem(LS_OK); if (!v) return false;
      var p = v.split(':'); if (p[0] !== fp(t)) return false;       // different account → re-verify
      return (Date.now() - Number(p[1] || 0)) < MAX_AGE;
    } catch (e) { return false; }
  }
  function clearOK() { try { localStorage.removeItem(LS_OK); } catch (e) {} }
  function reveal() { try { var s = document.getElementById('dcp-hide'); if (s) s.parentNode.removeChild(s); } catch (e) {} }

  function block(kind, meForDebug) {
    // Log the identity payload so, if this wrongly blocks YOU, you can read the real field and
    // tell your dev the exact value to put in OWNER_EMAIL / OWNER_ID above.
    if (meForDebug !== undefined) { try { console.log('[dcp-gate] /api/me returned:', meForDebug); } catch (e) {} }
    var msg = kind === 'offline'
      ? 'The editor needs to verify it’s you once while online. Connect to the internet and reload this page — after that it works offline.'
      : 'The Deeply Connected Places editor is restricted to the site owner.';
    try {
      document.documentElement.innerHTML =
        '<meta name="viewport" content="width=device-width, initial-scale=1">' +
        '<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;'
        + 'font:16px/1.5 -apple-system,BlinkMacSystemFont,sans-serif;background:#fbf7ef;color:#2b2218;padding:24px;text-align:center">'
        + '<div style="max-width:420px"><div style="font-size:40px">🌸🔒</div>'
        + '<h1 style="font-size:19px;margin:.6em 0">Editor restricted</h1>'
        + '<p style="color:#8a7f6c">' + msg + '</p>'
        + '<p style="margin-top:20px"><a href="/" style="color:#9c3b2e;font-weight:700;text-decoration:none">← Back to the dining guide</a></p>'
        + '</div></div>';
    } catch (e) { try { document.body.innerHTML = msg; } catch (_) {} }
    // stop the editor from initialising behind the overlay
    try { window.stop && window.stop(); } catch (e) {}
  }

  var t = tok();
  if (!t) return;                       // gate.js will have already redirected to login

  // Fast path: already verified as owner on this device with this token → allow + offline-friendly.
  if (cachedOK(t)) {
    reveal();
    if (navigator.onLine) {             // silently re-confirm in the background; revoke if it changed
      try {
        fetch(TRAVEL + '/api/me', { headers: { 'Authorization': 'Bearer ' + t } })
          .then(function (r) { return r.ok ? r.json().catch(function () { return {}; }) : Promise.reject(r.status); })
          .then(function (me) { if (!matches(me)) { clearOK(); block('not-owner', me); } })
          .catch(function () { /* offline / transient — keep trusting the cache */ });
      } catch (e) {}
    }
    return;
  }

  // No cached decision yet. Must verify online.
  if (!navigator.onLine) { block('offline'); return; }
  try {
    fetch(TRAVEL + '/api/me', { headers: { 'Authorization': 'Bearer ' + t } })
      .then(function (r) { return r.ok ? r.json().catch(function () { return {}; }) : Promise.reject(r.status); })
      .then(function (me) { if (matches(me)) { cacheOK(t); reveal(); } else { block('not-owner', me); } })
      .catch(function () { block('offline'); });   // can't verify → fail closed (keep students out)
  } catch (e) { block('offline'); }
})();
