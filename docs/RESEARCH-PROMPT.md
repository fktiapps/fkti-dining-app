RESEARCH-REQUEST RUN — Deeply Connected Dining.

You are running unattended on Greg's Windows machine, in the worktree
C:\pf\fkti-dining-research (branch main). Nobody is watching. A traveller pressed
"Suggest a place" in the app — from a storefront photo (with the phone's GPS) or by
tapping a point on the map — and the request is waiting in the queue. Your job: turn
each request into a record of the SAME quality as every other record in this app, or
into an honest "couldn't" with a reason. Nothing in between.

Pushing to main deploys to production. Everything below exists so that is safe.

=== 0. READ FIRST (you have no other context) ===
  - REVIEW_PROTOCOL.md — the evidence model, the tier vocabulary, and the two sections
    "FABRICATION IS FORBIDDEN" and the GF/vegan asymmetry. They bind everything here.
  - docs/MENU-RESEARCH-NOTES.md — where menus actually come from, dead ends, traps.
  - docs/TICK-PROMPT.md sections 3–5 — how menus are written into data/<city>_menus.json
    and the verdict files, and the commit discipline.
  - scripts/add-udon-ichigoichie.mjs — a full-depth record built from scratch. Your
    record has every field that one has. Model it on that, and on two or three complete
    records in the same city file.
  - scripts/pin-audit/README.txt — pins. Every pin needs a second source.

=== 1. START ===
    git pull --ff-only origin main
    node scripts/research-queue.mjs pull
Each pulled request is a folder under %LOCALAPPDATA%\dcd-research\<id>\ holding
request.json (kind, lat, lng, acc = GPS accuracy in metres, name, note, lang) and, for
photo requests, photo.jpg. LOOK AT THE PHOTO (Read it): the sign, the noren, menus in the
window, the street number plate. The traveller's name/note are hints, not evidence.

=== 2. PER REQUEST, IN THIS ORDER — STOP AT THE FIRST STEP THAT FAILS ===

(a) WHICH CITY. data/manifest.json lists each city's bounds. Outside every city:
      node scripts/research-queue.mjs set <id> outside --msg "..." --msg-ja "..."
    Say which cities the app covers. Do not research it.

(b) ALREADY IN THE APP? Search that city's file (hidden records too) for anything within
    ~150 m whose name, Japanese name, Tabelog id, phone or website matches. If it is there:
      set <id> exists --place <place id> --city <city> --msg "..." --msg-ja "..."
    If it is there but HIDDEN as closed and the photo shows it open, do not unhide on a
    photo alone — note it in the run log for Greg, and set `exists` with a message that
    we'll re-check it.

(c) IDENTIFY. Which business is at this spot? Sources, Japanese first: Yahoo JP search
    (name + 町名/駅), Tabelog /en/ (the JA locale 403s here — do not try to get around
    it), the shop's own site/Instagram, OSM Nominatim/Overpass near the point. GPS from a
    phone is often 10–50 m off (use `acc`); a map tap is where the person thinks it is.
    A map tap with no name and several businesses within ~30 m is NOT identified — do not
    pick one. If you cannot name the business with a citable source:
      set <id> not_found --msg "..." --msg-ja "..."
    and say what would help ("send a photo of the sign", "add the name").

(d) EXISTENCE — before writing a single enrichment field. At least one citable source
    that shows THIS business operating at THIS address now (a Tabelog listing with no
    閉店/移転/休業 badge, the shop's own current site/SNS, etc.). A Google Places
    business_status may CONFIRM (scripts/pin-audit/google.mjs; the key is the user env var
    GOOGLE_MAPS_KEY, shared with the nightly pin batch's 100/day budget — use a handful);
    Google coordinates and text are never stored. Closed or unconfirmable:
      set <id> rejected --msg "..." --msg-ja "..."

(e) RESEARCH THE FULL RECORD. Every field add-udon-ichigoichie.mjs has: name (EN + JA in
    the convention of that city file), category, pin (Tabelog /en/ geo + a second source,
    `pin_source`; `loc_approx` if you only have one), hours, neighborhood, cuisine,
    cuisine_type, website, gmaps (search URL, never Google coords), notes, chef_bio with
    sourced anecdotes, cultural_comfort if the city uses it, safety evidence arrays
    (every entry carries its `source`), gf_confidence / vegan_status with their detail,
    menu with prices into data/<city>_menus.json + the record's has_menu fields.
    An EMPTY field is a fact about what we know. A filled field with no source behind it
    is a false statement about a real restaurant. Leave it empty.

    TIERS. Same rules as every record, enforced by lint:
      - gf_confidence `dedicated` or `high` NEVER comes from this run. If the evidence
        would support it, write `options` (or `ask`) and add the record to the upgrade
        queue (data/_underrated_queue.json, see scripts/gen-underrated-queue.mjs) for
        Greg's banded review. A machine never finalises "safe".
      - `options` needs cited GF evidence on the record. "Inferred from cuisine" never
        sets a tier.
      - Dashi/broth/tare/miso/sauce named in a VEGAN finding is GLUTEN evidence too.
      - vegan_status moves more freely (REVIEW_PROTOCOL), but still on cited evidence.

(f) VERIFY. Re-open every source you cited and check the claim against the page — the
    pass that found 422 disproven claims in this data. Any claim the page does not
    support: delete it. Do not soften it into something the page also doesn't say.

(g) JAPANESE. The app shows Japanese from data/<city>.ja.json, which replaces English
    per field. Translate cuisine, neighborhood, gf_detail, vegan_detail and notes with
    scripts/lib-i18n.mjs (readLang / mergePlace / writeLang). An untranslated record
    falls back to English — acceptable, but do it.

(h) PROVENANCE. Add to the record:
      requested: { id: "<request id>", kind: "photo"|"map", date: "<yyyy-mm-dd>" }
    The photo itself is not stored in the repo (it may show people).

(i) SHIP — per record or per batch, never with a failing gate:
      node scripts/build-payload.mjs
      node scripts/bump-build.mjs
      node scripts/lint-data.mjs          (no NEW errors; compare with before you started)
      node scripts/smoke-app.mjs          (must PASS)
      git add -A data scripts && git commit -m "Research request <id>: <name> (<city>)"
      git push origin main
    Then tell the traveller:
      set <id> added --place <place id> --city <city> --msg "..." --msg-ja "..."
    The message is one or two plain sentences: what we found, and the GF/vegan headline
    ("Some vegan options; for gluten-free, ask — details in the app").

=== 3. HARD RULES ===
  - Fabrication is forbidden. Synthesis of sources: fine. Anything a source does not
    support: not in the record. This includes genre-typical guesses about a dish.
  - Never set a status the traveller sees until the matching commit is pushed.
  - Every request ends in one of: added, exists, outside, not_found, rejected. If the
    run is cut short, leave it "researching" — the queue offers it again after 6 hours.
  - No circumvention: no headless challenge-solving, no proxy rotation, no fingerprint
    spoofing, no JA-locale Tabelog tricks.
  - Messages to the traveller never mention internal tools, Greg, or this prompt.

=== 4. FINISH ===
Append one line per request to %LOCALAPPDATA%\dcd-research\runs.log:
    <date> <id> <status> <place id or -> <one-line reason>
Then stop.
