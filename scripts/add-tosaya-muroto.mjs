// Add Tosaya Muroto (土佐屋 室戸) — a Tosa/Kōchi izakaya on Kiyamachi just south of Sanjo — to
// Kyoto as a Mom & Pop. Researched from Tabelog, AutoReserve, Retty, hitosara, navikyo, Instagram
// (2026-07-17). Coordinates 35.008443,135.770183 (Kiyamachi-Sanjo-sagaru, 2F above an Italian spot).
import fs from 'fs';
const file = 'data/kyoto.json';
const d = JSON.parse(fs.readFileSync(file, 'utf8'));
function ser(v){if(v===null)return 'null';if(Array.isArray(v))return '['+v.map(ser).join(', ')+']';if(typeof v==='object')return '{'+Object.entries(v).map(([k,val])=>JSON.stringify(k)+': '+ser(val)).join(', ')+'}';return JSON.stringify(v);}

const ID = 'tosaya_muroto';
if (d.places.some(p => p.id === ID)) { console.log('already present — nothing to do'); process.exit(0); }

const HOURS = { '0':[['17:00','23:00']],'1':[['17:00','23:00']],'2':[['17:00','23:00']],'3':[['17:00','23:00']],'4':[['17:00','23:00']],'5':[['17:00','23:00']],'6':[] };

const place = {
  id: ID,
  name: '土佐屋 室戸 (Tosaya Muroto)',
  category: 'MOM_AND_POP',
  lat: 35.008443,
  lng: 135.770183,
  gf_confidence: 'ask',
  gf_label: 'Not GF-focused — ask staff',
  gf_detail: "A Tosa (Kōchi) izakaya built on charcoal yakitori and seared bonito (katsuo tataki) — soy sauce, yakitori tare and ponzu (all typically wheat-based) run through the menu, so it is not celiac-safe by default. Some items can be gluten-free if confirmed: sashimi, salt (shio) skewers, and salt-style katsuo tataki without ponzu. But the shared charcoal grill, shared fryer and wheat-containing sauces make cross-contamination likely — order shio, skip the tare/ponzu, and show the celiac card.",
  vegan_status: 'limited',
  vegan_label: 'Very limited — fish & meat forward',
  vegan_detail: "A Tosa seafood-and-yakitori counter: seared bonito, charcoal chicken, and shamo (game-fowl) hot pot. Bonito dashi and fish run through almost everything, so even vegetable dishes likely carry animal-derived stock. A few plain vegetable skewers or pickles may be possible, but confirm dashi/bonito with the chef. Not a vegan destination.",
  hours_raw: 'Mon–Sat 17:00–23:00. Closed Sunday. (Some listings also note the 2nd & 3rd Monday closed and lunch by reservation only — confirm before visiting.)',
  hours: HOURS,
  hours_status: 'regular',
  flags: { reservation: true, cash_only: false, halal: false, open_late: false },
  neighborhood: 'Kiyamachi · Kawaramachi-Sanjo (Nakagyo)',
  cuisine: 'Tosa (Kōchi) izakaya · yakitori & katsuo tataki',
  website: 'https://www.instagram.com/tosayamuroto/',
  gmaps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('土佐屋室戸 河原町通三条下ル大黒町49 京都'),
  menu_url: null,
  notes: "[Mom & Pop — a Tosa master, ~50 years at the counter] A tiny Kōchi (Tosa) izakaya on Kiyamachi just south of Sanjo — up on the 2nd floor above an Italian restaurant, with a ~10-seat counter plus one small tatami (6–8). The chef, a Tosa native with roughly half a century behind the grill, cooks yakitori over Tosa binchōtan charcoal and serves Kōchi's signature seared bonito (katsuo tataki), shamo (game-fowl) hot pot, and seasonal Tosa dishes. Reviewers praise thick, odorless bonito and carefully grilled skewers, and a charming old-Kyoto exterior; it draws locals and food-loving visitors alike. Reservations accepted (HotPepper). Address: 河原町通三条下ル大黒町49 (entrance on Kiyamachi-dōri). Instagram @tosayamuroto.",
  chef_bio: {
    chef_name: null,
    roles: ['master chef / owner (taishō)'],
    origin: 'Tosa (Kōchi Prefecture); the shop is in Kiyamachi, Nakagyo Ward, Kyoto',
    background: "A Tosa (Kōchi) native who by most accounts has spent roughly fifty years cooking, running a small counter izakaya devoted to the food of his home region. He grills over Tosa binchōtan (the prized white charcoal of Kōchi) and centers the menu on Kōchi's most famous dish, seared bonito — the kind of veteran, single-counter kitchen where the chef works in front of you and the seasons drive what's served.",
    philosophy: null,
    specialty: "Charcoal yakitori over Tosa binchōtan and Kōchi's signature katsuo (bonito) tataki, plus shamo (game-fowl) hot pot and seasonal Tosa dishes.",
    anecdotes: [
      { text: "Regulars single out the bonito tataki as thick, generous and completely free of any fishy odor — the hallmark of well-handled katsuo — and note that each yakitori skewer is grilled with real care over binchōtan.", source: 'https://tabelog.com/en/kyoto/A2601/A260301/26006787/dtlrvwlst/' },
      { text: "The shop is described as an izakaya serving 'the finest yakitori in Kyoto' by a chef with about 50 years of experience, originally from Tosa in Kōchi Prefecture, with a charming, old-Kyoto exterior that draws both locals and foreign guests.", source: 'https://autoreserve.com/en/restaurants/stoVhwWu1d5MFWxar7sj' },
      { text: "It sits on Kiyamachi just south of Sanjo, upstairs on the 2nd floor above an Italian restaurant — an easy-to-miss counter that rewards those who seek it out.", source: 'https://navikyo.com/075-221-3056/' }
    ],
    japanese_sources_summary: "Japanese listings (Tabelog 郷土料理/焼き鳥, Retty, hitosara, navikyo, HotPepper) describe 土佐屋室戸 as a small Kōchi (Tosa) izakaya at 河原町通三条下ル大黒町49, entrance on Kiyamachi, on the 2nd floor above an Italian restaurant, with a ~10-seat counter and one small tatami room (6–8). Open Mon–Sat 17:00–23:00, closed Sunday; phone 075-221-3056; reservations accepted. The taishō, a Tosa native, is credited with ~50 years of experience; signatures are binchōtan yakitori, katsuo (bonito) tataki, and shamo hot pot, with seasonal Kōchi fare.",
    confidence: 'medium',
    sources: [
      'https://tabelog.com/en/kyoto/A2601/A260301/26006787/',
      'https://tabelog.com/en/kyoto/A2601/A260301/26006787/dtlrvwlst/',
      'https://autoreserve.com/en/restaurants/stoVhwWu1d5MFWxar7sj',
      'https://retty.me/area/PRE26/ARE108/SUB10801/100000290807/',
      'https://hitosara.com/0031076203/',
      'https://navikyo.com/075-221-3056/',
      'https://www.instagram.com/tosayamuroto/'
    ]
  },
  cultural_comfort: {
    level: 'konnichiwa',
    note: "A small veteran-run counter on Kiyamachi that does see foreign diners and takes online reservations — but it's a Japanese izakaya led by a ~50-year chef, with little to no English. A reservation, a few words of Japanese, and easy counter manners go a long way."
  },
  cultural_comfort_note: "This is an intimate ~10-seat counter run by a veteran Tosa chef. It's more visitor-accustomed than a true locals-only spot (it's on the Kiyamachi nightlife strip, welcomes food-loving travelers, and accepts online reservations), but don't expect an English menu or English service. Book ahead, arrive on time, order at the counter, and let the chef guide you — a little Japanese or a translation app makes the evening far smoother for everyone.",
  cuisine_type: 'izakaya',
  safety: {
    dedicated_fryer: null,
    gf_cross_contamination: [
      { text: "This is a yakitori-and-izakaya counter, not a celiac-safe kitchen. Skewers are grilled over a shared charcoal grill alongside tare-basted (wheat soy sauce) items, and any battered/fried dishes share oil, so cross-contamination with wheat is likely across the menu.", source: 'https://tabelog.com/en/kyoto/A2601/A260301/26006787/' },
      { text: "Naturally gluten-free choices may exist if confirmed — sashimi, salt (shio) skewers, and salt-style katsuo tataki without ponzu — but they must be ordered explicitly shio/no-sauce and confirmed with the chef.", source: 'https://autoreserve.com/en/restaurants/stoVhwWu1d5MFWxar7sj' }
    ],
    soy_sauce_wheat: [
      { text: "Yakitori tare, ponzu for the katsuo tataki, and nabe broths are built on Japanese soy sauce, which typically contains wheat. Assume these sauces contain gluten unless the chef confirms a wheat-free alternative; ordering shio (salt) avoids the tare.", source: 'https://tabelog.com/en/kyoto/A2601/A260301/26006787/dtlrvwlst/' }
    ],
    vegan_cross_contact: [
      { text: "A fish- and meat-forward Tosa izakaya (bonito, chicken, game-fowl hot pot) with bonito dashi throughout — even vegetable dishes likely carry animal-derived stock. There is no documented vegan menu; confirm each item with the chef.", source: 'https://autoreserve.com/en/restaurants/stoVhwWu1d5MFWxar7sj' }
    ],
    staff_allergy_handling: [],
    positives: [
      { text: "A tiny, owner-run counter where the chef cooks directly in front of you, so you can ask about ingredients and preparation face-to-face — easiest with some Japanese or a translation app.", source: 'https://navikyo.com/075-221-3056/' }
    ],
    confidence: 'low',
    last_checked: '2026-07-17'
  },
  has_menu: false,
  menu_verified: null,
  mom_and_pop: true
};

d.places.push(place);
fs.writeFileSync(file, ser(d));

// bump SW so installed apps refresh (matches build-dcp behavior)
let swv = '?';
for (const f of ['sw.js', 'index.html']) {
  let s = fs.readFileSync(f, 'utf8'); const m = s.match(/dcd-v(\d+)/); if (!m) continue;
  swv = Number(m[1]) + 1; s = s.split(`dcd-v${m[1]}`).join(`dcd-v${swv}`); fs.writeFileSync(f, s);
}
console.log(`added ${place.name} to Kyoto (${d.places.length} places total). SW -> dcd-v${swv}`);
