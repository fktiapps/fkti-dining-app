// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 104.
//   + ぎんなん (creative Kyoto izakaya of yuba, nama-fu and Kyoto vegetables near Kyoto Station; sister of ICHOYA)
//   + ボタン (wild-boar and garden-vegetable tapas bar, Shogoin)
//   + 中摠 丹後 Nakaso Tango (Tango-region ingredients and local sake, Kawaramachi-Kojinguchi)
//   + ル ポン Le pont (Hokkaido-vegetable French in a 120-year-old townhouse, Kawaramachi-Kojinguchi)
//   + 京都 やきとん なべ屋 (Tokyo-style grilled pork offal south of Shijo-Omiya)
//   REFRESHED 2026-11-26 (stale draft of 2026-11-08, never integrated): re-checked against current main (none of the five in
//   data/kyoto.json by Tabelog id, name, site or address; ~200 Kyoto records added since), Tabelog /en/ listings and newest
//   reviews re-fetched (all open, no closure badge), own sites re-read. Romaji rule (integrator 2026-11-26): Tabelog's English
//   name / machine-translated text is not a source for romaji — "Button", "Ginnan", "Kyoto Yakiton Nabeya" and the chef name
//   "Yamagishi" (Tabelog's English shop text) dropped; kana/kanji only with whole-string name glosses. Romaji kept: "Le pont"
//   (own site title 「カジュアルフレンチ Le pont （ルポン）」), "Nakaso Tango" (own site reading 中摠 丹後(なかそう たんご) and its
//   domain nakaso-tango.with-nakayama.com). GSI pin cross-checks are from 2026-11-08 and not re-run (no OSM/pincheck).
//   - 和牛とカニ 京都駅前店, 京都北白川 ラーメン魁力屋 烏丸七条店, くりきんとん 大宮店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26045138 (skipped), 26004002,
//   26045456 (skipped), 26024012, 26040440, 26016758, 26038094, 26024534 (skipped).
//   queue-status.jsonl grepped for each brand: 魁力屋 has an earlier chain ruling (26035096); 和牛とカニ 三条河原町店
//   (kyoto_wagyu_to_kani_sanjo) is in data with status chain.
//   Data check (current main, hidden included): none of the five drafted is in data/kyoto.json by Tabelog id, name, site or
//   address.
//   Operator checks (shop counts, per the 起福 lesson): 中摠 丹後 — invoice holder 中山商事株式会社 (京丹後市), a Kyotango
//   housing-supply wholesaler whose site lists wholesale, food-service and well-being divisions; this is the only restaurant
//   found — drafted, flagged. ぎんなん — its site (ichoya.jp) pairs it with the yuba café ICHOYA: a two-shop local pair,
//   flagged. ボタン, ル ポン, なべ屋 — one shop each.
//   Service charges, checked against the Japanese original: ボタン なし; なべ屋 席料お一人様165円（税込）; none listed for
//   the others.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const GSI_DAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-104');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045138', 'すき焼き ズワイガニ・タラバガニ 食べ放題 和牛とカニ 京都駅前店: chain — a branch of the 和牛とカニ brand already in data with status chain (kyoto_wagyu_to_kani_sanjo)');
skip('26045456', '京都北白川 ラーメン魁力屋 烏丸七条店: chain — about 20 Kairikiya shops (same ruling as 26035096)');
skip('26024534', 'くりきんとん 大宮店: too thin — one 2025–2026 review (July 2026)');

// ================================================================ ぎんなん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26004002/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ichoya.jp/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_ginnan_shichijo', name: 'ぎんなん', category: 'OMNI',
    lat: 34.989367, lng: 135.75886, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nama-fu (wheat gluten), yuba pizza, kara-age and sashimi; no gluten information (own site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, Omi beef, pork belly and dashi dishes (2025–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 17:30–24:00; closed Monday (Tabelog). Cards; no e-money (Tabelog). 29 seats: a 7-seat counter on the first floor, 12 at sunken-kotatsu tables on the second, 10 at tables, plus a tatami room on the third floor (Tabelog; March 2026). Non-smoking, with a smoking room (Tabelog). Smartphone ordering (April 2025). Courses with all-you-can-drink incl. premium sake (February, March and July 2026). Walking distance from Kyoto Station, near Higashi Honganji (April 2025; July 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shichijo west of Karasuma — near Kyoto Station and Higashi Honganji',
    cuisine: 'Creative Japanese food using yuba and Kyoto vegetables (own site) · two kinds of nama-fu; eggplant miso dengaku; sashimi platter; Omi beef strip loin (April 2025) · teriyaki pizza with yuba and nama-fu; freshly made yuba (February 2026) · course with braised pork belly, sashimi, kara-age, yuba rice bowl (October 2025) · course with all-you-can-drink ¥5,000; weekday all-you-can-drink with nine sakes ¥4,000 (March and July 2026)',
    website: SITE, gmaps: gm('ぎんなん 京都 七条'), menu_url: SITE,
    notes: '[Creative izakaya · Shichijo near Kyoto Station, yuba and sake] A three-floor izakaya a walk from Kyoto Station for Kyoto ingredients made playful — fresh yuba, nama-fu, teriyaki yuba pizza, Omi beef — with a long sake list and good-value all-you-can-drink courses. Counter, kotatsu and tatami rooms; closed Monday. Flagged: sister of the yuba café ICHOYA.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'The shop’s site presents ぎんなん alongside ICHOYA, a café near Nishi Honganji, as creative Japanese places using yuba and Kyoto vegetables. No operator was found.',
      philosophy: null, specialty: 'Yuba and nama-fu dishes.',
      anecdotes: [
        { text: 'An April 2025 pair walked over from the Kyoto Tower side looking for nama-fu and found the whole counter free.', source: R + 'B505883278/' },
      ],
      japanese_sources_summary: '公式サイト: ICHOYA (いちょうや)・ぎんなん、湯葉や京野菜など京都の食材を手軽に味わえる創作和食の店。食べログ: ぎんなん、居酒屋・豆腐料理・創作料理、下京区七条通烏丸西入中居町114-2、火〜日 17:30〜24:00、月曜定休、カード可、29席 (1階カウンター7、2階掘りごたつ12、テーブル10)、禁煙 (喫煙室あり)。口コミ (2025〜2026年、英語): スマホで注文、日本酒が豊富、生麩2種、茄子の田楽、刺身の盛り合わせ、近江牛のサーロイン、湯葉と生麩の照り焼きピザ、作りたての湯葉、豚の角煮・刺身・唐揚げ・湯葉丼のコース、飲み放題付きコース5,000円、平日の飲み放題4,000円 (日本酒9種)、3階の座敷、東本願寺の近く。',
      confidence: 'low', sources: [SITE, TB, R + 'B505298469/', R + 'B505883278/', R + 'B515773008/', R + 'B523415068/', R + 'B523907221/', R + 'B531854143/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smartphone ordering; near Kyoto Station.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通烏丸西入中居町114-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing re-checked 2026-11-26; reviews dated April 2025 to July 2026.' },
    pin_source: `Tabelog ${TB} (34.989367, 135.75886); cross-checked: GSI 京都府京都市下京区中居町114番地 (lot) 2m (${GSI_DAY}); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523907221/', R + 'B531854143/'],
    price_note: 'Course prices from March and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥5,000', 'Courses', 'no', 'no', 'March 2026.', 'course'),
      it('', '', 'Teriyaki pizza with yuba and nama-fu', '', 'Small plates', 'no', 'no', 'October 2025; February 2026.', 'yuba_pizza'),
      it('', '', 'Nama-fu', '', 'Small plates', 'no', 'ask', 'April 2025.', 'namafu'),
      it('', '', 'Eggplant miso dengaku', '', 'Small plates', 'ask', 'ask', 'April 2025.', 'nasu_dengaku'),
    ] }, {
    cuisine: '湯葉や京野菜を使った創作和食 (公式サイト)・生麩2種、茄子の味噌田楽、刺身の盛り合わせ、近江牛のサーロイン (2025年4月)・湯葉と生麩の照り焼きピザ、作りたての湯葉 (2026年2月)・豚の角煮、刺身、唐揚げ、湯葉丼のコース (2025年10月)・飲み放題付きコース5,000円、日本酒9種の平日の飲み放題4,000円 (2026年3・7月)',
    neighborhood: '七条通、烏丸の西。京都駅と東本願寺の近く',
    gf_detail: '要確認。生麩 (小麦グルテン)、湯葉のピザ、唐揚げ、刺身。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。刺身、近江牛、豚の角煮、出汁の料理 (2025〜2026年の口コミ)。',
    notes: '[創作居酒屋・京都駅近くの七条、湯葉と日本酒] 京都駅から歩ける3階建ての居酒屋。作りたての湯葉、生麩、湯葉の照り焼きピザ、近江牛など京都の食材を遊び心のある料理に。日本酒が豊富で、飲み放題付きコースがお得。カウンター、掘りごたつ、座敷。月曜定休。湯葉のカフェ ICHOYA の姉妹店 (要確認)。',
  });
}

// ================================================================ ボタン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26024012/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_botan_shogoin', name: 'ボタン', category: 'OMNI',
    lat: 35.018223, lng: 135.777765, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tapas, wild-boar terrine, boar courses and pasta; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables from the shop’s own garden feature in the tapas, but nothing is described as vegan; much of the menu is wild boar (2025–2026 reviews).',
    hours_raw: 'Wednesday–Saturday 18:00–23:00 (food last orders 22:00); closed Monday, Tuesday and Sunday (Tabelog). No service charge (Tabelog, original なし). Cards (Tabelog). 27 seats: 5 at the counter, 22 at tables incl. semi-private rooms (Tabelog). Smoking allowed (Tabelog). Open since 27 June 2014 (Tabelog). Year-end: closed 31 December and 1 January; 2 January 18:00–23:00; 3 January 17:00–23:00; closed 4–6 January; regular hours from 7 January (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shogoin — near Jingu-Marutamachi',
    cuisine: 'A bar-izakaya for wild boar and vegetables from its own garden (January 2025) · boar course with a generous assorted starter (January 2025) · assorted vegetable tapas; wild-boar terrine; pasta (February 2026)',
    website: null, gmaps: gm('ボタン 聖護院 京都'), menu_url: TB,
    notes: '[Bar-izakaya · Shogoin, wild boar and garden vegetables] A friendly little bar-izakaya in Shogoin for wild-boar dishes — terrine, courses — and tapas loaded with vegetables from the shop’s own garden, with a cheerful owner behind the counter. Open Wednesday to Saturday evenings; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a cheerful owner and vegetables from the restaurant’s own garden (January 2025; February 2026). Open since June 2014 (Tabelog). No operator was found.',
      philosophy: null, specialty: 'Wild boar; garden-vegetable tapas.',
      anecdotes: [
        { text: 'A February 2026 regular dropped in without a booking after spotting the lantern, for the usual tapas platter and boar terrine.', source: R + 'B464972079/' },
      ],
      japanese_sources_summary: '食べログ: ボタン、バル・居酒屋、左京区聖護院山王町41、水〜土 18:00〜23:00 (料理L.O. 22:00)、月・火・日曜定休、サービス料なし、カード可、27席 (カウンター5、テーブル22、半個室あり)、喫煙可、2014年6月27日オープン。口コミ (2025〜2026年、英語): 猪肉の料理のコース、たっぷりの前菜の盛り合わせ、自家菜園の野菜、野菜たっぷりのタパスの盛り合わせ、猪のテリーヌ、パスタ、明るい店主。',
      confidence: 'low', sources: [TB, R + 'B464972079/', R + 'B499943017/'] },
    cultural_comfort: { level: 'japanese', note: 'Small bar-izakaya; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町41',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing re-checked 2026-11-26 (incl. its 2026–27 year-end hours); reviews dated January 2025 and February 2026.' },
    pin_source: `Tabelog ${TB} (35.018223, 135.777765); cross-checked: GSI 京都府京都市左京区聖護院山王町41番地 (lot) 36m (${GSI_DAY}); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B464972079/'],
    price_note: 'No prices found.', last_checked: TODAY, items: [
      it('', '', 'Assorted vegetable tapas', '', 'Tapas', 'ask', 'ask', 'February 2026.', 'tapas'),
      it('', '', 'Wild-boar terrine', '', 'Tapas', 'ask', 'no', 'February 2026.', 'terrine'),
      it('', '', 'Wild-boar course', '', 'Courses', 'ask', 'no', 'January 2025.', 'boar_course'),
    ] }, {
    cuisine: '猪肉と自家菜園の野菜のバル・居酒屋 (2025年1月)・たっぷりの前菜の盛り合わせから始まる猪肉のコース (2025年1月)・野菜のタパスの盛り合わせ、猪のテリーヌ、パスタ (2026年2月)',
    neighborhood: '聖護院。神宮丸太町の近く',
    gf_detail: '要確認。タパス、猪のテリーヌ、猪のコース、パスタ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。自家菜園の野菜がタパスに使われるが、ヴィーガンと書かれた品はない。メニューの多くは猪肉 (2025〜2026年の口コミ)。',
    notes: '[バル・居酒屋・聖護院、猪と自家菜園の野菜] 聖護院の気さくな小さなバル・居酒屋。テリーヌやコースなどの猪料理と、自家菜園の野菜たっぷりのタパスを、明るい店主のカウンターで。水〜土の夜のみ、喫煙可。',
  });
}

// ================================================================ 中摠 丹後
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26040440/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://nakaso-tango.with-nakayama.com/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_nakaso_tango_kojinguchi', name: '中摠 丹後 (Nakaso Tango)', category: 'OMNI',
    lat: 35.019939, lng: 135.769646, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses and à la carte of sashimi, tempura, simmered dishes and amadai shabu-shabu with a dashi broth; no gluten information (own site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Tango seafood (amadai, mackerel, crab) and dashi (own site; 2025–2026 reviews).',
    hours_raw: '17:00–22:00 (last orders 21:00); closed Tuesday and Wednesday (own site; Tabelog, which adds that hours may vary by month). Cards (Tabelog). Seats: own site says 8 at the counter, 4 at tables and a 6-seat private room; Tabelog says 16 seats — 6 at the counter, a table and a semi-private room (both checked 2026-11-26). Month and Snow kaiseki courses need booking by the day before; the guji shabu-shabu by two days before; cancellation fee 50% from noon the day before, 100% on the day (own site). Non-smoking, with a smoking booth (Tabelog). No parking (own site). On Kawaramachi south of Kojinguchi (Tabelog). About five years old (February 2026).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi south of Kojinguchi',
    cuisine: 'Japanese food from Tango, the northern Kyoto coast: its rice, vegetables and seafood, with sake mostly from local Tango breweries (Tabelog; March 2026) · omakase kaiseki: Flower ¥8,800, Month ¥14,300, Snow ¥19,800, tax incl. (own site, November 2026 menu) · Tango guji (amadai) shabu-shabu ¥13,000 tax incl., finished with a guji and vegetable porridge (own site; October 2025; April 2026) · monthly menus, e.g. guji and matsutake, Amanohashidate cherry-dried mackerel, koppe crab and crab porridge (own site) · sashimi, tempura and simmered dishes à la carte; sake by the half serving (February 2025; March 2026)',
    website: SITE, gmaps: gm('中摠 丹後 京都'), menu_url: SITE,
    notes: '[Japanese · Kawaramachi-Kojinguchi, Tango seafood and sake] A calm little restaurant showcasing Tango, Kyoto’s northern coast: Tango amadai shabu-shabu, seasonal fish, crab in winter, and sake from local Tango breweries, from a Tango-born chef — as courses or à la carte. Kaiseki from ¥8,800 (own site). Closed Tuesday and Wednesday. Flagged: run by 中山商事株式会社 of Kyotango (a supplies wholesaler with a food division).',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: 'Tango, Kyoto Prefecture',
      background: 'The site says the chef was born and raised in Tango, wanted to cook from childhood and trained for over ten years. The receipt invoice number belongs to 中山商事株式会社 (京丹後市), whose site lists wholesale, food-service and well-being divisions; no other restaurant of the company was found. A February 2026 reviewer heard it has been open about five years.',
      philosophy: 'To share Tango’s appeal through its ingredients (own site).', specialty: 'Tango amadai shabu-shabu.',
      anecdotes: [
        { text: 'An April 2026 diner, who had only ever had amadai as sashimi or grilled, was won over by the shabu-shabu course and the talk on Tango sake.', source: R + 'B527350480/' },
      ],
      japanese_sources_summary: '公式サイト: 中摠 丹後 (なかそう たんご)、中山商事株式会社、京都・上京区の和食店、丹後の地で生まれ育った料理人、10数年の修行、丹後の食材を通じて丹後の魅力を、丹後ぐじの旨味しゃぶ13,000円 (税込、2日前までに予約)、締めはぐじと野菜の雑炊、おまかせ会席 (花会席8,800円、月会席14,300円・雪会席19,800円は前日までに予約)、キャンセル料は前日12時以降50%・当日100%、席数はカウンター8・テーブル4・個室6、月替わりの献立 (丹後ぐじ、松茸、天橋立の鯖の桜干し、コッペ蟹、蟹雑炊)、駐車場なし。中山商事株式会社: 京丹後市、卸売・飲食・Well-being事業部。食べログ: 上京区河原町通荒神口下ル上生洲町240、月・木〜日 17:00〜22:00 (L.O. 21:00)、火・水曜定休、月により変動、カード可、16席 (カウンター6、テーブル1、半個室1)、禁煙 (喫煙ブースあり)。口コミ (2025〜2026年、英語): 丹後料理、ぐじ鍋のコース、刺身・天ぷら・煮物、丹後の地酒、日本酒は半合から、開店5年。',
      confidence: 'medium', sources: [SITE, 'https://with-nakayama.com/business/', TB, R + 'B507716899/', R + 'B512912586/', R + 'B515925323/', R + 'B522244348/', R + 'B526680438/', R + 'B527350480/', R + 'B534681452/', R + 'B538399010/'] },
    cultural_comfort: { level: 'japanese', note: 'Calm Japanese restaurant; staff explain Tango sake.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区河原町通荒神口下ル上生洲町240',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site (November 2026 menu, posted 2026-10-26) and Tabelog listing re-checked 2026-11-26; reviews dated February 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.019939, 135.769646); cross-checked: GSI 京都府京都市上京区上生洲町240番地 (lot) 66m (${GSI_DAY}); ル ポン (this batch) is 13.6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE],
    price_note: 'Course prices tax included, from the own site (checked 2026-11-26).', last_checked: TODAY, items: [
      it('', '', 'Tango guji (amadai) shabu-shabu', '¥13,000', 'Courses', 'ask', 'no', 'Own site; book two days ahead. Also October 2025; April 2026 reviews.', 'guji_shabu'),
      it('', '', 'Omakase kaiseki, Flower', '¥8,800', 'Courses', 'ask', 'no', 'Own site; no booking needed.', 'hana_kaiseki'),
      it('', '', 'Omakase kaiseki, Month', '¥14,300', 'Courses', 'ask', 'no', 'Own site; book by the day before.', 'tsuki_kaiseki'),
      it('', '', 'Omakase kaiseki, Snow', '¥19,800', 'Courses', 'ask', 'no', 'Own site; book by the day before.', 'yuki_kaiseki'),
      it('', '', 'Sashimi', '', 'À la carte', 'ask', 'no', 'March 2026.', 'sashimi'),
      it('', '', 'Tango local sake, half serving', '', 'Drinks', 'ask', 'ask', 'February 2025.', 'jizake'),
    ] }, {
    cuisine: '京都北部の丹後の米、野菜、海の幸の和食、日本酒も丹後の地元の蔵のものが中心 (食べログ、2026年3月)・おまかせ会席: 花会席8,800円、月会席14,300円、雪会席19,800円 (税込、公式サイト、2026年11月の献立)・丹後ぐじの旨味しゃぶ13,000円 (税込)、締めはぐじと野菜の雑炊 (公式サイト、2025年10月、2026年4月)・月替わりの献立、例えば丹後ぐじと松茸、天橋立の鯖の桜干し、コッペ蟹と蟹雑炊 (公式サイト)・アラカルトの刺身、天ぷら、煮物、日本酒は半合から (2025年2月、2026年3月)',
    neighborhood: '荒神口の南、河原町通',
    gf_detail: '要確認。刺身、天ぷら、煮物、出汁のぐじしゃぶのコースとアラカルト。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。丹後の魚介 (ぐじ、鯖、蟹) と出汁 (公式サイト、2025〜2026年の口コミ)。',
    notes: '[和食・河原町荒神口、丹後の魚と酒] 京都北部の丹後を伝える落ち着いた小さな和食店。丹後のぐじのしゃぶしゃぶ、旬の魚、冬は蟹、丹後の地酒を、丹後生まれの料理人がコースやアラカルトで。会席は8,800円から (公式サイト)。火・水曜定休。運営は京丹後の中山商事株式会社 (卸売と飲食の事業) (要確認)。',
  });
}

// ================================================================ ル ポン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26016758/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://lepont-kyoto.jp';
  const H = day(['11:30', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_le_pont_kojinguchi', name: 'ル ポン (Le pont)', category: 'OMNI',
    lat: 35.01996, lng: 135.769792, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses with homemade bread, soups, pâté, steaks and crème brûlée; the maitake fritter has a beer batter; no gluten information (own site; Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Organic Hokkaido vegetables are central (soups, maitake steak), but nothing is described as vegan; the courses include meat and fish (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Tuesday–Sunday lunch 11:30–14:00 (last entry 13:00) and dinner 18:00–22:00 (last orders 21:00); closed Monday (own site; Tabelog). Tabelog also lists closures on the second and fourth Tuesdays; the own site gives Monday only (both checked 2026-11-26). Cash only: no cards or e-money (Tabelog). 30 seats: counter and tables by a small garden downstairs, tables under beams upstairs (Tabelog). Completely non-smoking; no parking; 2 min from the 荒神口 city-bus stop, 3 min from Kawaramachi-Marutamachi (own site). In a renovated 120-year-old townhouse just north of Kawaramachi-Marutamachi (Tabelog; June 2026). Open since 13 August 2010 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawaramachi just north of Marutamachi',
    cuisine: 'Casual French built on organic vegetables sent from farms in Furano and Asahikawa, Hokkaido (Tabelog) · lunch ¥2,500: soup, appetizer plate, bread, main; fish +¥300 (April and June 2026); with dessert and coffee or tea, the fish in a bisque of roasted shellfish and vegetables (November 2026) · à la carte at dinner: seasonal soup ¥700, Aibetsu (Hokkaido) maitake steak ¥1,200, maitake fritter ¥1,400, country pâté ¥1,500, Spanish chestnut-fed pork shoulder ¥3,000, misuji steak ¥3,200, Hungarian duck ¥3,500, Tokachi beef cheek in red wine ¥3,900 (own site, checked 2026-11-26) · lunch course with a drink ¥5,000: new-onion soup, appetizers incl. beef tongue, pâté, maitake steak and firefly squid, smoked salmon, chestnut-fed pork with red wine (April 2026) · Furano corn soup; sea-bream poêlé with sauce américaine; crème brûlée (October 2026) · homemade bread from Hokkaido Haruyokoi wheat (May 2026)',
    website: SITE, gmaps: gm('ル ポン 京都 河原町'), menu_url: TB,
    notes: '[French · Kawaramachi-Marutamachi, Hokkaido vegetables] A relaxed French restaurant in a 120-year-old townhouse with a small garden, from a chef who cooked in Toronto for 20 years (Tabelog): organic vegetables from Hokkaido farms, homemade Haruyokoi bread and good-value lunch sets from ¥2,500. Cash only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Tabelog’s shop text says the chef honed skills in Toronto, Canada, for 20 years. A May 2026 reviewer praises the service of “the lovely couple”. Open since August 2010 (Tabelog).',
      philosophy: 'Simple grilled and sautéed dishes that let Hokkaido farm vegetables speak (Tabelog shop text).', specialty: 'Hokkaido vegetables; maitake steak.',
      anecdotes: [
        { text: 'An October 2026 diner was most impressed by a chilled soup of Furano corn, then chose sea bream for the main.', source: R + 'B536639336/' },
      ],
      japanese_sources_summary: '食べログ: ル ポン、フレンチ、上京区河原町通り荒神口下ル上生洲町239、火〜日 11:30〜14:00・18:00〜22:00、月曜定休、カード・電子マネー不可、30席、禁煙、2010年8月13日オープン、カナダ・トロントで20年腕を磨いたシェフ、築120年の町家を改装、1階はカウンターと小さな庭の見えるテーブル、2階は梁の美しいテーブル席、北海道の富良野や旭川の農園から直送の有機野菜。口コミ (2025〜2026年、英語): ランチ2,500円 (スープ・前菜・パン・メイン、魚は+300円)、ドリンク付きのランチコース5,000円 (淡路の新玉ねぎのスープ、牛タン・パテ・舞茸のステーキ・ホタルイカの前菜、スモークサーモン、栗で育てた豚の赤ワインソース、カラメルプリン)、北海道の小麦はるよ恋の自家製パン、富良野のとうもろこしの冷製スープ、鯛のポワレのアメリケーヌソース、クレームブリュレ、すてきなご夫婦のサービス、ランチ2,500円にデザートとコーヒーまたは紅茶、魚 (+300円) は焼いた甲殻類と野菜のビスクのソース、柚子のクリームソース (2026年11月)。公式サイト: カジュアルフレンチ Le pont (ルポン)、ランチ11:30〜14:00 (最終入店13:00)、ディナー18:00〜22:00 (L.O. 21:00)、月曜定休、駐車場なし、完全禁煙、北海道愛別町の舞茸のステーキ1,200円・フリッター1,400円 (ビールで溶いた衣)、季節のスープ700円、田舎風パテ1,500円、スペイン産栗豚の肩ロース3,000円、ミスジのステーキ3,200円、ハンガリー産の鴨3,500円、十勝の牛ホホ肉の赤ワイン煮3,900円。',
      confidence: 'low', sources: [TB, SITE, R + 'B309671074/', R + 'B516654263/', R + 'B526218544/', R + 'B526887325/', R + 'B527943548/', R + 'B536639336/', R + 'B539130291/', SITE + '/dinner.html', SITE + '/access.html'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Relaxed French; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区河原町通り荒神口下ル上生洲町239',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing re-checked 2026-11-26; reviews dated November 2025 to November 2026.' },
    pin_source: `Tabelog ${TB} (35.01996, 135.769792); cross-checked: GSI 京都府京都市上京区上生洲町239番地 (lot) 64m (${GSI_DAY}); 中摠 丹後 (this batch) is 13.6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526218544/', R + 'B526887325/'],
    price_note: 'Lunch prices from 2026 reviews; à la carte prices from the own site (checked 2026-11-26); cash only.', last_checked: TODAY, items: [
      it('', '', 'Lunch: soup, appetizer, bread, main', '¥2,500', 'Lunch', 'no', 'no', 'April, June and November 2026; fish +¥300.', 'lunch'),
      it('', '', 'Lunch course with a drink', '¥5,000', 'Lunch', 'no', 'no', 'April 2026.', 'lunch_course'),
      it('', '', 'Aibetsu maitake mushroom steak', '¥1,200', 'Appetizers', 'ask', 'ask', 'Own site; May and October 2026 reviews.', 'maitake'),
      it('', '', 'Aibetsu maitake fritter, beer batter', '¥1,400', 'Appetizers', 'no', 'ask', 'Own site.', 'maitake_fritter'),
      it('', '', 'Country pâté', '¥1,500', 'Appetizers', 'ask', 'no', 'Own site.', 'pate'),
      it('', '', 'Tokachi beef cheek braised in red wine', '¥3,900', 'Mains', 'ask', 'no', 'Own site.', 'beef_cheek'),
      it('', '', 'Crème brûlée', '', 'Dessert', 'ask', 'no', 'October 2026.', 'creme_brulee'),
    ] }, {
    cuisine: '北海道の富良野や旭川の農園の有機野菜を中心にした気軽なフレンチ (食べログ)・ランチ2,500円: スープ、前菜の盛り合わせ、パン、メイン、魚は+300円 (2026年4・6月)・ドリンク付きのランチコース5,000円: 新玉ねぎのスープ、牛タン・パテ・舞茸のステーキ・ホタルイカの前菜、スモークサーモン、栗で育てた豚の赤ワインソース (2026年4月)・2026年11月のランチ2,500円はデザートとコーヒーまたは紅茶付き、魚 (+300円) は焼いた甲殻類と野菜のビスクのソース・夜のアラカルト: 季節のスープ700円、北海道愛別町の舞茸のステーキ1,200円、舞茸のフリッター1,400円、田舎風パテ1,500円、スペイン産栗豚の肩ロース3,000円、ミスジのステーキ3,200円、ハンガリー産の鴨3,500円、十勝の牛ホホ肉の赤ワイン煮3,900円 (公式サイト)・富良野のとうもろこしのスープ、鯛のポワレのアメリケーヌソース、クレームブリュレ (2026年10月)・北海道の小麦はるよ恋の自家製パン (2026年5月)',
    neighborhood: '河原町丸太町のすぐ北',
    gf_detail: '要確認。自家製パン、スープ、パテ、ステーキ、クレームブリュレのコース。舞茸のフリッターはビールで溶いた衣。グルテンの情報はない (公式サイト、食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。北海道の有機野菜が中心 (スープ、舞茸のステーキ) だが、ヴィーガンと書かれた品はない。コースには肉や魚 (食べログ、2025〜2026年の口コミ)。',
    notes: '[フレンチ・河原町丸太町、北海道の野菜] 小さな庭のある築120年の町家の気軽なフレンチ。トロントで20年腕を磨いたシェフ (食べログ) が、北海道の農園の有機野菜、はるよ恋の自家製パン、2,500円からのお得なランチを出す。現金のみ、月曜定休。',
  });
}

// ================================================================ 京都 やきとん なべ屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26038094/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_yakiton_nabeya_omiya', name: '京都 やきとん なべ屋', category: 'OMNI',
    lat: 34.999838, lng: 135.749025, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled pork skewers with salt or sauce, simmered dishes and pickles; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled pork offal (2026 reviews).',
    hours_raw: 'Monday and Wednesday–Sunday incl. public holidays 16:00–23:00 (food last orders 22:00, drinks 22:30); closed Tuesday; may close early when skewers sell out, or for supply reasons (Tabelog). Seat charge ¥165 a person incl. tax (Tabelog, original 席料お一人様165円（税込）). Cash only: no cards or e-money (Tabelog). 26 seats incl. a counter (Tabelog; June 2026). Smoking allowed (Tabelog). Book ahead; popular cuts sell out early (February and April 2026). About 10 min south of Shijo-Omiya (February 2026). Open since 8 July 2022 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Takatsuji-Omiya — 10 min south of Shijo-Omiya',
    cuisine: 'Tokyo-style yakiton (grilled pork skewers), rare in Kyoto (February and June 2026) · liver grilled rare with sesame oil, green onion and garlic; tongue; outside skirt; teppou (February, April and June 2026) · Hoppy (April 2026) · pickled celery; simmered dishes (June 2026)',
    website: null, gmaps: gm('京都 やきとん なべ屋'), menu_url: TB,
    notes: '[Yakiton · south of Shijo-Omiya, pork skewers] A busy little yakiton bar bringing Tokyo-style grilled pork offal to Kyoto: famously fresh liver grilled rare with sesame oil, tongue and skirt, with Hoppy and simple sides. Cuts sell out — book and come early. ¥165 seat charge; cash only; smoking allowed; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Open since July 2022 (Tabelog). No operator details were found.', philosophy: null, specialty: 'Pork liver grilled rare.',
      anecdotes: [
        { text: 'A February 2026 diner came back within days for the liver, piled with green onion and garlic in sesame oil.', source: R + 'B520608229/' },
      ],
      japanese_sources_summary: '食べログ: 京都 やきとん なべ屋、ホルモン・居酒屋、下京区高辻大宮町107-1 1F、月・水〜日・祝日 16:00〜23:00 (料理L.O. 22:00、ドリンクL.O. 22:30)、火曜定休、串がなくなり次第終了・仕入れにより臨時休業あり、席料1人165円 (税込)、カード・電子マネー不可、26席、喫煙可、2022年7月8日オープン。口コミ (2026年、英語): 京都では珍しい東京風のやきとん、四条大宮から南へ徒歩10分、予約必須、レバーはごま油とねぎとにんにくでレアに、タン、ハラミ、てっぽう、ホッピー、セロリの漬物、煮込み、人気の部位は早く売り切れる。',
      confidence: 'low', sources: [TB, R + 'B507932057/', R + 'B519709830/', R + 'B520608229/', R + 'B524460408/', R + 'B525572179/', R + 'B526261743/', R + 'B526946934/', R + 'B528024607/', R + 'B530023662/', R + 'B530572720/'] },
    cultural_comfort: { level: 'japanese', note: 'Busy skewer bar; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻大宮町107-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing re-checked 2026-11-26; reviews dated February to June 2026.' },
    pin_source: `Tabelog ${TB} (34.999838, 135.749025); cross-checked: GSI 京都府京都市下京区高辻大宮町107番地 (lot) 39m (${GSI_DAY}); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526261743/'],
    price_note: 'No prices found; ¥165 seat charge; cash only.', last_checked: TODAY, items: [
      it('', '', 'Pork liver skewer, grilled rare with sesame oil', '', 'Yakiton', 'ask', 'no', 'February, April and June 2026.', 'liver'),
      it('', '', 'Tongue skewer', '', 'Yakiton', 'ask', 'no', 'April 2026.', 'tongue'),
      it('', '', 'Pickled celery', '', 'Sides', 'ask', 'ask', 'June 2026.', 'celery'),
    ] }, {
    cuisine: '京都では珍しい東京風のやきとん (2026年2・6月)・ごま油とねぎとにんにくで食べるレアのレバー、タン、ハラミ、てっぽう (2026年2・4・6月)・ホッピー (2026年4月)・セロリの漬物、煮込み (2026年6月)',
    neighborhood: '高辻大宮。四条大宮から南へ徒歩10分',
    gf_detail: '要確認。塩やたれの豚の串焼き、煮込み、漬物。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。豚のホルモンの串焼き (2026年の口コミ)。',
    notes: '[やきとん・四条大宮の南、豚の串] 東京風のやきとんを京都で出すにぎやかな小さな店。新鮮なレバーをごま油でレアに、タンやハラミ、ホッピーと簡単なつまみ。部位は売り切れるので予約して早めに。席料165円、現金のみ、喫煙可、火曜定休。',
  });
}

save();
