// Osaka sweep (2-mile circle around Dotonbori), batch 211 — end of the mom phase: the last 30+ review listings, Tennoji/Abeno.
//   + 王冠 Oukan (stand-up soba and udon on the stair landing of Kintetsu Osaka-Abenobashi Station, 6:00–16:00; one-coin sets;
//     filed as udon_soba without a ramen block — the yellow-noodle "Ekimae soba" in dashi is one item among the soba and udon)
//   + ぐう Gu (Teradacho: shoyu, miso and shio ramen at lunch, Hiroshima-style okonomiyaki and drinks at night; run by a couple;
//     ramen block)
//   - 麺家 よし川 天王寺 27146780 skipped: second shop of Menya Yoshikawa, already in data (osaka_menya_yoshikawa_minamisenba).
//   - 都そば 鶴橋店 27027741 skipped: a branch of the Miyako Soba stand-soba chain.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 211);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 王冠
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27031439/'; const R = TB + 'dtlrvwlst/';
  const H = day(['06:00', '16:00']);
  put({
    id: 'osaka_oukan_abenobashi', name: '王冠 (Oukan)', category: 'OMNI',
    lat: 34.645938, lng: 135.514943, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon, stand-soba noodles, Chinese noodles, tempura and kakiage, croquettes and katsu; a diner saw soy sauce go into the bowl before the broth (August 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every bowl is in a dashi broth, with kamaboko fish cake on top; shrimp tempura, beef curry, kasu (fried offal) udon and katsu.',
    hours_raw: 'Daily 6:00–16:00; closing days not fixed; hours may change (Tabelog). No reservations (Tabelog). Cash only: no cards, e-money or QR (Tabelog; December 2025 review); buy a ticket at the machine and hand it over at the counter, though a raw egg can also be ordered with cash (August 2026 review). 6 counter seats, a standing area in front and chairs at the back (Tabelog); "6 counter seats and 2 chairs" (January 2026 review). Non-smoking (Tabelog; December 2025 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Abenosuji 1-1-43, outside the ticket gates of Kintetsu Osaka-Abenobashi Station, B1F — on the landing of the stairs up from the underground central gate to Exit 1, toward JR Tennoji',
    cuisine: 'Stand-up soba and udon shop on a station stair landing (6 counter seats, standing room, a few chairs) · kake soba ¥320 · tanuki (kitsune) soba with two pieces of fried tofu ¥400 · kakiage soba ¥420 · kakiage udon ¥420 with corn and green beans in the kakiage · tempura udon or soba ¥440 with shrimp tempura, kakiage and wakame · kasu udon ¥550 · katsu udon ¥550 · curry udon with braised beef · croquette soba · "Ekimae soba" (station-front soba): yellow Chinese noodles in the dashi with dashimaki egg, fried tofu, tempura bits, wakame, bean sprouts, green onions and kamaboko · soba set or udon-and-soba set ¥500 (noodles, a rice ball or rice and a croquette) · tsukimi soba set ¥530 · raw egg ¥90 (August 2026), boiled egg ¥70 (June 2025)',
    website: null, gmaps: gm('王冠 大阪阿部野橋駅'), menu_url: null,
    notes: "[Stand-up soba · Tennoji, a stair-landing noodle stop from 6 am] Hard to spot the first time: a noren on the landing of the stairs between the underground central gate of Kintetsu Osaka-Abenobashi Station and JR Tennoji, with standing room in front and a few chairs at the back. It opens at 6 am for commuters and travellers, and the prices are the draw: kake soba ¥320, tempura udon with shrimp and kakiage ¥440, and a one-coin set of soba, rice and a croquette for ¥500. The soy sauce goes into the bowl before the broth, the way a ramen shop does it, and diners praise the light Kansai dashi more than the noodles, which are soft in the stand-soba way; a few wanted more bonito, or a hotter bowl. Try the big kakiage, the kasu udon with fried pork fat, or the curry udon with braised beef. There is also an \"Ekimae soba\" with yellow Chinese noodles in the dashi. Cash at the ticket machine.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'An old stand-up noodle shop on the Kintetsu Osaka-Abenobashi Station stairs; diners call it an old shop with character and a Showa-era feel (2024–2026 reviews). A September 2024 diner found it run by an older man and a young woman; a December 2025 diner was served by a friendly woman at the counter while the owner fried the kakiage and boiled the noodles. Diners disagree on the tempura: a December 2025 diner says it is commercial-grade, a January 2026 diner that all of it is made in-house by the chef.', philosophy: null, specialty: 'Kakiage soba and udon; one-coin soba sets.',
      anecdotes: [
        { text: '"The highlight here is definitely the delicious broth, which rivals that of high-end restaurants." — January 2026, tanuki (kitsune) soba ¥400.', source: R + 'B521042207/' },
        { text: 'The soy sauce goes into the bowl before the broth, "which reminded me of a ramen shop. The flavor was good, with a strong dashi taste." — August 2026, tempura soba ¥440 with a raw egg ¥90.', source: R + 'B533605156/' },
        { text: '"The kakiage is colorful, filled with corn and green beans, and it\'s quite large." — January 2026, kakiage udon ¥420.', source: R + 'B519039873/' },
      ],
      japanese_sources_summary: '食べログ: 王冠、うどん・立ち食いそば・ラーメン、大阪市阿倍野区阿倍野筋1-1-43 大阪阿部野橋駅 改札外 B1F、地下中央改札を出て1番出口の階段を上がる途中、大阪阿部野橋駅から33m、毎日6:00〜16:00、定休日不定、予約不可、カード・電子マネー・QR不可、カウンター6席と手前に立ち食い、奥に椅子、禁煙。口コミ(2024年9月〜2026年8月): 階段の踊り場にあるのれんの店、朝6時から、券売機で食券を買って渡す、かけそば320円、きつねそば400円、かき揚げそば420円、かき揚げうどん420円 (コーンといんげん入りの大きなかき揚げ)、天ぷらうどん440円 (えび天、かき揚げ、わかめ)、天ぷらそば440円、かすうどん550円、カツうどん550円、牛肉を煮込んだカレーうどん、コロッケそば、黄色い中華麺をだしで食べる Ekimae soba、そばセット500円 (そば、ご飯、コロッケ)、うどんとそばのセットは450円から500円に、月見そば定食530円、生卵90円 (以前は70円)、ゆで卵70円、醤油を先に入れてからだしを注ぐ、あっさりした関西風のだしがおいしいという声と、麺はやわらかく平凡という声、天ぷらは業務用という声と店で揚げているという声、年配の男性と若い女性の店員、昭和の雰囲気、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B491695453/', R + 'B507663795/', R + 'B511178486/', R + 'B519039873/', R + 'B519214303/', R + 'B519939587/', R + 'B520032393/', R + 'B521042207/', R + 'B531539136/', R + 'B533263196/', R + 'B533605156/', R + 'B534004370/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine, cash only; hard to find the first time (December 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市阿倍野区阿倍野筋1-1-43 大阪阿部野橋駅 改札外 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July 2025–August 2026.' },
    pin_source: `Tabelog ${TB}; the shop is inside Kintetsu Osaka-Abenobashi Station (B1F, outside the ticket gates, on the stairs to Exit 1); GSI matches 大阪府大阪市阿倍野区阿倍野筋一丁目1番43号 (go) only at 163m and OSM's nearest match is the 天王寺MIO 本館 building at 95m, so the pin rests on the Tabelog point, consistent with the listing's "33 meters from Osaka Abenobashi"; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B511178486/', R + 'B519039873/', R + 'B519939587/', R + 'B521042207/', R + 'B533263196/', R + 'B533605156/', R + 'B534004370/'],
    price_note: 'Prices from reviews dated July 2025–August 2026; each item gives its month.', last_checked: TODAY, items: [
      it('', '', 'Kake soba', '¥320', 'Soba and udon', 'no', 'no', 'July and October 2025.', 'kake_soba'),
      it('', '', 'Tanuki (kitsune) soba', '¥400', 'Soba and udon', 'no', 'no', 'Two pieces of fried tofu; January 2026.', 'tanuki_soba'),
      it('', '', 'Kakiage soba', '¥420', 'Soba and udon', 'no', 'no', 'December 2025.', 'kakiage_soba'),
      it('', '', 'Kakiage udon', '¥420', 'Soba and udon', 'no', 'no', 'Kakiage with corn and green beans; January 2026.', 'kakiage_udon'),
      it('', '', 'Tempura udon or soba', '¥440', 'Soba and udon', 'no', 'no', 'Shrimp tempura, kakiage and wakame; June 2025 and August 2026.', 'tempura'),
      it('', '', 'Kasu udon', '¥550', 'Soba and udon', 'no', 'no', 'August 2026.', 'kasu_udon'),
      it('', '', 'Katsu udon', '¥550', 'Soba and udon', 'no', 'no', 'September 2025.', 'katsu_udon'),
      it('', '', 'Soba set (soba, rice, croquette)', '¥500', 'Sets', 'no', 'no', 'December 2025.', 'soba_set'),
      it('', '', 'Tsukimi soba set meal', '¥530', 'Sets', 'no', 'no', 'August 2026.', 'tsukimi_set'),
      it('', '', 'Raw egg', '¥90', 'Toppings', '', '', 'August 2026.', 'raw_egg'),
    ] }, {
    cuisine: '駅の階段の踊り場の立ち食いそば・うどん (カウンター6席、立ち食い、奥に椅子がいくつか)・かけそば320円・きつねそば400円 (油揚げ2枚)・かき揚げそば420円・かき揚げうどん420円 (コーンといんげん入りのかき揚げ)・天ぷらうどん・そば440円 (えび天、かき揚げ、わかめ)・かすうどん550円・カツうどん550円・牛肉を煮込んだカレーうどん・コロッケそば・Ekimae soba: 黄色い中華麺をだしで、だし巻き、油揚げ、天かす、わかめ、もやし、ねぎ、かまぼこ・そばセット、うどんとそばのセット500円 (麺、おにぎりかご飯、コロッケ)・月見そば定食530円・生卵90円、ゆで卵70円',
    neighborhood: '阿倍野区阿倍野筋1-1-43、大阪阿部野橋駅の改札外 B1F。地下中央改札から1番出口へ上がる階段の途中、JR天王寺駅の方へ',
    gf_detail: 'グルテンフリーではありません。小麦のうどん、立ち食いのそば、中華麺、天ぷらやかき揚げ、コロッケ、カツ。だしの前に醤油を丼に入れるのを見たという声も (2026年8月)。',
    vegan_detail: 'ヴィーガンではありません。どれもだしのつゆで、かまぼこがのります。えび天、牛肉のカレー、かすうどん、カツも。',
    notes: '[立ち食いそば・天王寺、朝6時からの階段の踊り場の麺どころ] はじめてだと見つけにくい店。近鉄大阪阿部野橋駅の地下中央改札とJR天王寺のあいだ、階段の踊り場にのれんがかかり、手前は立ち食い、奥にいくつか椅子がある。朝6時に開いて通勤客や旅行者を迎え、魅力は値段。かけそば320円、えび天とかき揚げの天ぷらうどん440円、そばとご飯とコロッケのワンコインのセット500円。ラーメン屋のように醤油を先に丼に入れてからだしを注ぎ、あっさりした関西風のだしは麺よりもほめられる。麺は立ち食いらしいやわらかさ。もっとかつおが欲しい、もっと熱いほうがいいという声も少し。大きなかき揚げ、かすうどん、牛肉を煮込んだカレーうどんをどうぞ。黄色い中華麺をだしで食べる Ekimae soba もある。券売機で現金のみ。',
  });
}

// ================================================================ ぐう
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27048005/'; const R = TB + 'dtlrvwlst/';
  const L = day(['12:00', '14:00'], ['18:00', '21:30']); const N = day(['18:00', '21:30']);
  put({
    id: 'osaka_gu_teradacho', name: 'ぐう (Gu)', category: 'OMNI',
    lat: 34.650291, lng: 135.522758, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles in soy or miso broth, and Hiroshima-style okonomiyaki built on wheat batter and noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth and chashu in the ramen; pork and squid tempura on the okonomiyaki.',
    hours_raw: 'Mon and Wed–Sat 12:00–14:00 and 18:00–21:30; Sun 18:00–21:30; closed Tuesday (Tabelog). Reviews differ on weekends: an April 2025 diner says Saturday is dinner only, and a September 2025 diner lists 16:30–21:30 on weekends and holidays, so check before a weekend lunch. Ramen at lunch; at night Hiroshima-style okonomiyaki, teppan dishes, side dishes and drinks, with the ramen still on offer (2025–2026 reviews). Reservations accepted (Tabelog). No cards or e-money (Tabelog); a September 2025 diner notes pay-after with cashless options. 20 seats: a counter in front, tables and raised-floor seating at the back (Tabelog; reviews). Non-smoking (Tabelog). Moved here from Daido 2-5-7, Tennoji-ku (Tabelog); an October 2025 diner heard it used to be at the Teradacho intersection.',
    hours: { 0: L, 2: L, 3: L, 4: L, 5: L, 6: N }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teradacho 2-1-12 — 5 min west of JR Teradacho Stn north exit along Route 25; behind "the Seven" convenience store at the Teradacho crossing',
    cuisine: 'Ramen by day, Hiroshima-style okonomiyaki and drinks by night (20 seats) · shoyu, miso and shio ramen with pork-bone broth; shoyu and miso also "hearty" (thick curly noodles, about 200 g; the others medium-thin, about 130 g) · shoyu chashu ramen ¥900, shio chashu ramen ¥900 (September 2025) · hearty shoyu ramen with chashu and egg ¥980 (April 2025) · plenty of egg and green onion as a topping; extra noodles come with chashu · lunch: free kimchi, rice and kimchi ¥200, pork rice bowl or egg rice ¥380 (May 2025) · hiyashi chuka · Hiroshima-style okonomiyaki with pork ¥870, ika-ten · at night a blackboard of side dishes and teppan dishes, including homemade chashu ¥500, macaroni salad ¥380, cheese spring rolls, grilled stingray fin, Botanyaki · sake, shochu, wine, large bottled lager ¥700',
    website: null, gmaps: gm('ぐう 寺田町'), menu_url: null,
    notes: "[Ramen · Teradacho, shoyu ramen at lunch and Hiroshima okonomiyaki at night] A 20-seat neighbourhood place by the Teradacho crossing that changes with the clock: ramen at lunch, and at night Hiroshima-style okonomiyaki, a blackboard of side dishes and drinks, with the ramen still there to finish. Ramen fans come for a shoyu bowl compared to the Akira style: a sharp soy sauce over a pork-bone broth with an old-fashioned simmered-pork aroma, plenty of green onion and generous chashu. Shoyu and miso come \"hearty\", meaning about 200 g of thick, curly, chewy noodles instead of the medium-thin 130 g; shio is also on the menu. At lunch the kimchi is free, and rice is ¥200. The okonomiyaki is layered with crisp fried noodles and lots of cabbage, cut into pieces for easy eating. A friendly couple runs it, and diners talk about the regulars, and one found the owner remembered a customer from a single earlier ramen visit. Closed Tuesday; reviews disagree on weekend lunch.",
    chef_bio: { chef_name: null, roles: ['Owners (a couple, unnamed in sources)'], origin: null, background: 'Ramen and Hiroshima-style okonomiyaki shop that moved here from Daido 2-5-7, Tennoji-ku (Tabelog). "Run by a very friendly couple" (September 2025 review); one person working the kitchen alone that day (November 2025 review). The owner brought the side-dish menu over and remembered a diner who had come once before for ramen (May 2025 review). Diners mention many regulars (October 2025; April 2026).', philosophy: null, specialty: 'Shoyu chashu ramen, "hearty" with thick noodles; Hiroshima-style okonomiyaki.',
      anecdotes: [
        { text: '"The richness and acidity of the soy sauce combined with the umami of the pork created a taste reminiscent of Akira-style ramen." — October 2025, hearty shoyu ramen with chashu and egg.', source: R + 'B344418809/' },
        { text: '"I was worried about whether there would be snacks for beer, but the owner reassured me, \'We have plenty!\'" — April 2026, first night visit.', source: R + 'B505899621/' },
        { text: '"The interior has depth, with a counter in the front and table seating in the back, run by a very friendly couple." — September 2025, shio and shoyu chashu ramen ¥900 each.', source: R + 'B515706402/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ぐう、ラーメン・お好み焼き、大阪市天王寺区寺田町2-1-12、JR環状線寺田町駅北口を出て国道25号を西へ徒歩5分、月曜・水曜〜土曜12:00〜14:00と18:00〜21:30、日曜18:00〜21:30、火曜定休、予約可、カード・電子マネー不可、20席 (テーブル6席と4席、小上がり4席×3卓)、禁煙、日本酒・焼酎・ワイン、天王寺区大道2-5-7から移転。口コミ(2025年4月〜2026年5月): 昼はラーメン、夜は広島風お好み焼きと一品と酒、夜もラーメンあり、醤油・味噌・塩、醤油と味噌に hearty (太いちぢれ麺200g) があり、ほかは中細麺130g、醤油チャーシュー900円、塩チャーシュー900円 (2025年9月)、hearty の醤油チャーシューに玉子980円 (2025年4月)、たまごとねぎたっぷり、替え玉にもチャーシュー、昼はキムチ無料、ご飯とキムチ200円、ご飯もの380円、hiyashi chuka、広島風お好み焼き豚870円、ika-ten、自家製チャーシュー小500円、マカロニサラダ380円、チーズ春巻き、エイヒレ、瓶ビール大700円、鉄板焼き、豚骨の香りとキレのある醤油、Akira 系の味という声、あっさりという声、もちもちの太麺、チャーシューたっぷり、キャベツたっぷりでパリッとした麺のお好み焼き、とても気さくな夫婦の店、常連が多い、土曜は夜のみという声と、土日祝は16:30〜21:30という声、後払いでキャッシュレス可という声。',
      confidence: 'medium', sources: [TB, R + 'B344418809/', R + 'B505899621/', R + 'B507266904/', R + 'B510902726/', R + 'B515706402/', R + 'B518742646/', R + 'B525400402/', R + 'B528651032/'] },
    ramen: {
      broth_base: ['pork'], broth_texture: 'unknown', tare: ['shoyu', 'miso', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: 'wavy', hydration: null, handmade: null, notes: 'Two noodles: the "hearty" shoyu and miso use thick, curly, chewy noodles (about 200 g); the other bowls use medium-thin noodles (about 130 g) (April 2025 review); the thick noodles have "a nice chewy texture" (May 2026 review).' },
      regional_style: [], sub_genre: ['chuka soba'],
      signature_bowl: 'Hearty shoyu ramen with chashu and egg ¥980 (April 2025).',
      chashu: 'Generous, thick chashu (October 2025; April 2025); one May 2026 diner found the chashu not large but flavorful.',
      notable_toppings: ['chashu', 'egg and green onion', 'extra noodles with chashu'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth; chashu.' },
      pantheon: 'Teradacho\'s lunchtime Akira-style shoyu: sharp soy over a pork-bone broth, with a "hearty" thick-noodle version, in a shop that turns to Hiroshima okonomiyaki at night.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B344418809/', '"A subtle pork aroma with a sharp soy sauce flavor" (October 2025); "a lighter flavor" (' + R + 'B515706402/, September 2025) — mid-scale.'],
        oiliness: [R + 'B344418809/', 'Pork-bone shoyu; oil not described — mid-scale (inferred).'],
        clarity: [R + 'B344418809/', 'Broth clarity not described — mid-scale (inferred).'],
        tare_strength: [R + 'B344418809/', '"A sharp soy sauce flavor"; "lean a bit salty towards the end" (October 2025).'],
        noodle_firmness: [R + 'B528651032/', '"The noodles were thick and had a chewy texture, providing a satisfying bite" (May 2026, hearty).'],
        aroma_punch: [R + 'B344418809/', '"A subtle pork aroma" (October 2025) — mid-scale.'],
      },
      confidence: 'medium', sources: [TB, R + 'B344418809/', R + 'B505899621/', R + 'B515706402/', R + 'B528651032/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Neighbourhood shop with many regulars; side dishes on a blackboard at night (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市天王寺区寺田町2-1-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated 2025 through May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区寺田町二丁目1番12号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B505899621/', R + 'B507266904/', R + 'B515706402/', R + 'B528651032/'],
    price_note: 'Prices from reviews dated April 2025–April 2026; each item gives its month.', last_checked: TODAY, items: [
      it('', '', 'Shoyu chashu ramen', '¥900', 'Ramen', 'no', 'no', 'September 2025.', 'shoyu_chashu'),
      it('', '', 'Shio chashu ramen', '¥900', 'Ramen', 'no', 'no', 'September 2025.', 'shio_chashu'),
      it('', '', 'Hearty shoyu ramen with chashu and egg (thick noodles)', '¥980', 'Ramen', 'no', 'no', 'April 2025.', 'hearty_shoyu'),
      it('', '', 'Hearty miso chashu ramen with egg and green onion', '', 'Ramen', 'no', 'no', 'May 2026.', 'hearty_miso'),
      it('', '', 'Hiroshima-style okonomiyaki (pork)', '¥870', 'Okonomiyaki', 'no', 'no', 'September 2025.', 'hiroshima_okonomiyaki'),
      it('', '', 'Rice and kimchi (lunch)', '¥200', 'Lunch', '', 'ask', 'May 2025.', 'rice_kimchi'),
      it('', '', 'Homemade chashu (small)', '¥500', 'Night side dishes', 'ask', 'no', 'April 2026.', 'chashu_plate'),
      it('', '', 'Macaroni salad', '¥380', 'Night side dishes', 'ask', 'no', 'April 2026.', 'macaroni_salad'),
    ] }, {
    cuisine: '昼はラーメン、夜は広島風お好み焼きと酒 (20席)・豚骨のスープで醤油・味噌・塩、醤油と味噌は hearty もあり (太いちぢれ麺約200g、ほかは中細麺約130g)・醤油チャーシュー900円、塩チャーシュー900円 (2025年9月)・hearty の醤油チャーシューに玉子980円 (2025年4月)・たまごとねぎたっぷり、替え玉にもチャーシュー・昼はキムチ無料、ご飯とキムチ200円、ご飯もの380円 (2025年5月)・hiyashi chuka・広島風お好み焼き豚870円、ika-ten・夜は黒板に一品と鉄板焼き: 自家製チャーシュー500円、マカロニサラダ380円、チーズ春巻き、エイヒレ、Botanyaki・日本酒、焼酎、ワイン、瓶ビール大700円',
    neighborhood: '天王寺区寺田町2-1-12。JR寺田町駅北口から国道25号を西へ徒歩5分、寺田町交差点のセブンの裏',
    gf_detail: 'グルテンフリーではありません。小麦の麺に醤油や味噌のスープ、広島風お好み焼きは小麦の生地と麺。',
    vegan_detail: 'ヴィーガンではありません。ラーメンは豚骨のスープとチャーシュー、お好み焼きに豚肉や ika-ten。',
    notes: '[ラーメン・寺田町、昼は醤油ラーメン、夜は広島風お好み焼き] 寺田町交差点そばの20席の町の店で、時間で顔が変わる。昼はラーメン、夜は広島風お好み焼きと黒板の一品と酒で、締めのラーメンも夜にある。ラーメン好きが目当てにするのは、Akira 系にたとえられる醤油。豚骨のスープにキレのある醤油、昔ながらの煮出した豚骨の香り、たっぷりのねぎとチャーシュー。醤油と味噌には hearty があり、中細麺130gのかわりにもちもちの太いちぢれ麺が約200g。塩もある。昼はキムチが無料、ご飯は200円。お好み焼きはパリッと焼いた麺とたっぷりのキャベツを重ね、取り分けやすく切って出てくる。気さくな夫婦の店で、常連が多く、一度ラーメンを食べに来ただけの客を覚えていたという声も。火曜定休、週末の昼は口コミで情報が分かれる。',
  });
}

// ================================================================ skips (chain check)
skip('27146780', '麺家 よし川 天王寺 (Menya Yoshikawa Tennouji): second shop of Menya Yoshikawa, already in data as osaka_menya_yoshikawa_minamisenba (name "麺家あくた川直系 麺家よし川 (Menya Akutagawa Chokkei Menya Yoshikawa)", chef_bio.background "Direct lineage of Menya Akutagawa, in the Shin-Nakano Musashiya family tree"); the official site menya-yoshikawa.com lists both 麺家よし川 心斎橋 and 麺家よし川 天王寺 and announces the Tennoji opening on 1月11日 (Tabelog opening day 2025.1.11); an October 2026 review of this shop compares it with "what I had previously in Shinsaibashi"; branch of a brand already in data');
skip('27027741', '都そば 鶴橋店 (Miyako Soba Tsuruhashi ten): branch of the Miyako Soba stand-soba chain — a March 2025 review of this shop says "This place feels completely different from the Takatsuki branch", and a 4travel review (4travel.jp/dm_shisetsu/11114717) says 「『都そば』は、大阪誠和食品という会社がやっている立ち食いそば・うどんのチェーン店です」; chain');

save();
