// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 96.
//   + 松粂 (まつくめ) (Kyoto cuisine in a machiya near Karasuma-Gojo; mini-kaiseki lunch, courses by reservation) — rest
//   + 個室焼肉 ごっこや (private-room yakiniku near Marutamachi-Shinkarasuma) — rest
//   + 酒房 CRAFT MAN (about 40 craft beers and sakes in a renovated machiya, Kannon-cho) — rest
//   - skip 26027506 おうすの里 産寧坂店 (retail food shop; seven-shop umeboshi chain)
//   - skip 26030314 Go-En 京都三条新町 (thin)
//   - skip 26039458 CLOVER (retail food shop, Greg 11-07 ruling)
//   - skip 26036068 スムージー専門店 DRINK DRANK 京都清水産寧坂 (same-concept branch of a brand in data)
//   - skip 26023990 Rokka (thin)
//   + 東観荘 (ryotei in a historic house by Maruyama Park; mini-kaiseki lunch and fugu courses) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches. DRINK DRANK 京都六角通り店 is in data
//   (drafted after the coordinator’s ruling on 26044978). Same-name counts (2026-11-08): one each among those drafted.
//   酒房 CRAFT MAN: an April 2025 reviewer calls it "from the K-ya group"; no operator or group page found (craftman.owst.jp names
//   none), so drafted as a single shop with that remark noted. It moved here from 二帖半敷居町 (September 2025).
//   Names keep the shop's own kana or Latin; 東観荘 has no kana on its listing, so no romanization is given.
//   None of the drafted shops is in data/kyoto.json.
//   Charges (Tabelog, Japanese originals): ごっこや 「個室確保の為にワンドリンク制」; CRAFT MAN 「※着席の場合は、チャージ料500円を頂戴致します。」;
//   others none listed. No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-96');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26027506', 'retail food shop (Greg 11-07 ruling): おうすの里 産寧坂店 sells umeboshi and plum products with tastings; a 2021 reviewer counts seven おうすの里 shops in Kyoto (https://tabelog.com/en/kyoto/A2601/A260301/26027506/dtlrvwlst/B445059802/; https://tabelog.com/en/kyoto/A2601/A260301/26027506/).');
skip('26030314', 'thin: Go-En 京都三条新町 has two 2025–26 Tabelog reviews, one a complaint and one a one-liner — not enough current sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260202/26030314/).');
skip('26039458', 'retail food shop (Greg 11-07 ruling): CLOVER is a takeaway cake and baked-goods shop (cream puffs, cakes, celebration cakes to order); no eat-in sourced (https://tabelog.com/en/kyoto/A2601/A260101/26039458/).');
skip('26036068', 'same-concept branch of a brand in data: スムージー専門店 DRINK DRANK 京都清水産寧坂 is a second Kyoto shop of DRINK DRANK, whose 京都六角通り店 is already in kyoto.json (https://tabelog.com/en/kyoto/A2601/A260301/26036068/).');
skip('26023990', 'thin: Rokka has a single 2025–26 Tabelog review (April 2025) — not enough current sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260202/26023990/).');

// ================================================================ 松粂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26006380/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_matsukume_gojo', name: '松粂 (まつくめ)', category: 'OMNI',
    lat: 34.997542, lng: 135.757197, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, deep-fried sesame tofu, red miso soup and soy-seasoned simmered dishes (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled fish, sashimi, hamo, dashimaki, dashi throughout (2025–26 reviews).',
    hours_raw: 'Lunch 11:30–14:00 and dinner 18:00–22:00; closed Tuesday (Tabelog). Dinner by advance reservation only (Tabelog); lunch is usually booked out on weekends and holidays — phone ahead (August and November 2026). Lunch is one set; it comes quickly (September and November 2026). No cards, e-money or QR — cash only (Tabelog). 32 seats: 8 at the counter, 8 at tables, 16 in tatami rooms over the inner garden, with low chairs (Tabelog; September 2026). A machiya on Manjuji-dori east of Shinmachi, near Karasuma-Gojo (Tabelog; June 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Manjuji-Shinmachi — Karasuma Gojo',
    cuisine: 'Kyoto home-style kaiseki in a machiya · mini-kaiseki lunch ¥1,500 (June 2026) to ¥1,600 (November 2026): grilled fish such as yellowtail with yuzu soy, dashimaki, tempura of eggplant and shishito, fried sesame tofu, crab in thin omelette, simmered dishes, red miso soup, rice · Kyoto-style obanzai bento with grilled fish and tempura (August 2026) · dinner course ¥4,950 (June 2025): sashimi, chawanmushi with lily bulb; saikyo-yaki, hamo, dobin-mushi, eel tempura (September 2026)',
    website: null, gmaps: gm('松粂 京都 万寿寺'), menu_url: TB,
    notes: '[Kyoto cuisine · Karasuma-Gojo] A machiya near Karasuma-Gojo with tatami rooms around an inner garden: a single, carefully made mini-kaiseki lunch of about ¥1,600 — grilled fish, dashimaki, tempura, simmered dishes, red miso soup — and Kyoto courses at night by reservation. Popular: book lunch ahead. Cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a Japanese restaurant in a Kyoto machiya on Manjuji-dori, serving one lunch set and dinner courses.',
      philosophy: null, specialty: 'Mini-kaiseki lunch; seasonal fried dishes such as fig tempura.',
      anecdotes: [
        { text: 'A November 2026 return visitor phoned for the 13:30 last order and was given a tatami room over the garden; the lunch set had risen slightly, to ¥1,600.', source: R + 'B359453964/' },
        { text: 'A September 2026 couple, worn out after 25,500 steps, ended the day at the counter-and-tatami machiya with saikyo-yaki, hamo, dobin-mushi and eel tempura.', source: R + 'B536685051/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、下京区万寿寺通新町東入ル小田原町220、昼11:30〜14:00・夜18:00〜22:00、火曜休み、夜は要予約、カード・電子マネー・QR 不可、32席 (カウンター8、テーブル8、座敷16)。口コミ (2025年6月〜2026年11月、英語): 町家、中庭の見える座敷、昼は一種類のミニ会席1,500〜1,600円 (焼き魚、だし巻き、天ぷら、ごま豆腐の揚げ物、かにを薄焼き卵で巻いたもの、煮物、赤だし)、京のおばんざい弁当、夜のコース4,950円、刺身、百合根の茶碗蒸し、西京焼き、鱧、土瓶蒸し、鰻の天ぷら、いちじくの天ぷら、昼は予約がおすすめ、低い椅子の座敷。',
      confidence: 'medium', sources: [TB, R + 'B359453964/', R + 'B464876617/', R + 'B490522519/', R + 'B529393786/', R + 'B530033673/', R + 'B534636153/', R + 'B535499290/', R + 'B535539325/', R + 'B536685051/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone to book lunch; dinner is reservation-only. Bring cash. The tatami rooms have low chairs. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区万寿寺通新町東入ル小田原町220',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.997542, 135.757197); cross-checked: GSI 京都府京都市下京区小田原町220番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B359453964/', R + 'B529393786/'],
    price_note: 'Prices from June 2025 to November 2026.', last_checked: TODAY, items: [
      it('', '', 'Mini-kaiseki lunch set', '¥1,600', 'Lunch', 'no', 'no', 'November 2026; ¥1,500 in June 2026.', 'mini_kaiseki'),
      it('', '', 'Dinner course', '¥4,950', 'Dinner', 'no', 'no', 'June 2025.', 'dinner_course'),
    ] }, {
    cuisine: '町家の京の家庭的な会席・ミニ会席の昼1,500円 (2026年6月)〜1,600円 (2026年11月): ぶりの柚子醤油焼きなどの焼き魚、だし巻き、なすとししとうの天ぷら、ごま豆腐の揚げ物、かにを薄焼き卵で巻いたもの、煮物、赤だし、ご飯・焼き魚と天ぷらの京のおばんざい弁当 (2026年8月)・夜のコース4,950円 (2025年6月): 刺身、百合根の茶碗蒸し、西京焼き、鱧、土瓶蒸し、鰻の天ぷら (2026年9月)',
    neighborhood: '万寿寺新町。烏丸五条',
    gf_detail: 'グルテンフリーではない。天ぷら、ごま豆腐の揚げ物、赤だし、醤油の煮物 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼き魚、刺身、鱧、だし巻き、出汁 (2025〜2026年の口コミ)。',
    notes: '[京料理・烏丸五条] 烏丸五条近く、中庭を囲む座敷のある町家。昼は一種類の丁寧なミニ会席約1,600円 (焼き魚、だし巻き、天ぷら、煮物、赤だし)、夜は予約制の京料理のコース。人気なので昼も予約を。現金のみ、火曜休み。',
  });
}

// ================================================================ 個室焼肉 ごっこや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26014660/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']); const SU = day(['17:30', '22:00']);
  put({
    id: 'kyoto_gokkoya_yakiniku', name: '個室焼肉 ごっこや', category: 'OMNI',
    lat: 35.01481, lng: 135.767947, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: many cuts come in a soy-based sauce, with soy and miso dips and cold noodles (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yakiniku of beef and horumon (2025 reviews).',
    hours_raw: 'Mon–Sat 17:30–23:00 (last order 22:00); Sunday 17:30–22:00 (last order 21:30); open until sold out, irregular closures — reservations recommended (Tabelog). 「個室確保の為にワンドリンク制」 — one drink per person to hold a private room (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). 26 seats in four fully private rooms of 4, 4, 6 and 10 (Tabelog). On Shinkarasuma-dori south of Takeyamachi, near Kyoto Shiyakusho-mae (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinkarasuma-Takeyamachi — Kyoto City Hall',
    cuisine: 'Private-room yakiniku · tongue, outside skirt, sirloin cap, small horumon, assorted kimchi, cold noodles, with soy and miso dips (September 2025) · well-priced cuts, many in sauce, served fast (May and August 2025) · large drinks — a giant oolong tea (September 2025)',
    website: null, gmaps: gm('個室焼肉 ごっこや 京都'), menu_url: TB,
    notes: '[Yakiniku · near Kyoto City Hall] A yakiniku of four fully private rooms near Kyoto City Hall, run by a jovial owner: good-value tongue, skirt, sirloin cap and horumon, kimchi and cold noodles, served quickly, with big drinks. One drink each for a room; book ahead.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as friendly and humorous (May and September 2025)'], origin: null,
      background: 'Per Tabelog and reviews: a yakiniku restaurant of private rooms near Shinkarasuma-Takeyamachi.',
      philosophy: null, specialty: 'Good-value yakiniku in private rooms.',
      anecdotes: [
        { text: 'A May 2025 diner, straight from a 77-kilometre ultramarathon and in a hurry, found everything served fast and the owner friendly.', source: R + 'B507571064/' },
        { text: 'A September 2025 first-timer tried tongue, outside skirt, sirloin cap and small horumon with soy and miso dips, and was amused by the huge oolong tea.', source: R + 'B514170929/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・居酒屋、中京区新烏丸通竹屋町下ル藤木町41-3、月〜土17:30〜23:00 (L.O.22:00)、日17:30〜22:00 (L.O.21:30)、売り切れ次第終了、不定休、予約がおすすめ、個室確保の為にワンドリンク制、カード可、電子マネー不可、26席 (完全個室4室: 4・4・6・10名)。口コミ (2025年5月〜9月、英語): タン、アウトサイドスカート、サーロインキャップ、小さなホルモン、キムチの盛り合わせ、冷麺、醤油と味噌のたれ、たれ漬けの肉が多い、手頃な値段、提供が早い、気さくでユーモアのある店主、大きなウーロン茶。',
      confidence: 'low', sources: [TB, R + 'B507571064/', R + 'B513027920/', R + 'B514170929/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a private room; one drink per person is required. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新烏丸通竹屋町下ル藤木町41-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2025.' },
    pin_source: `Tabelog ${TB} (35.014810, 135.767947); cross-checked: GSI 京都府京都市中京区藤木町41番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514170929/'],
    price_note: 'No 2025 prices quoted; reviewers report ¥6,000–7,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Beef tongue', '', 'Yakiniku', 'ask', 'no', 'September 2025.', 'tan'),
      it('', '', 'Outside skirt', '', 'Yakiniku', 'no', 'no', 'September 2025.', 'harami'),
      it('', '', 'Small horumon', '', 'Yakiniku', 'no', 'no', 'September 2025.', 'horumon'),
      it('', '', 'Cold noodles', '', 'Noodles', 'no', 'no', 'September 2025.', 'reimen'),
    ] }, {
    cuisine: '個室の焼肉・タン、アウトサイドスカート、サーロインキャップ、小さなホルモン、キムチの盛り合わせ、冷麺、醤油と味噌のたれ (2025年9月)・たれ漬けの肉が多い手頃な肉、提供が早い (2025年5月・8月)・大きなウーロン茶など大きな飲み物 (2025年9月)',
    neighborhood: '新烏丸竹屋町。京都市役所前',
    gf_detail: 'グルテンフリーではない。醤油ベースのたれの肉が多く、醤油と味噌のたれ、冷麺 (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉とホルモンの焼肉 (2025年の口コミ)。',
    notes: '[焼肉・京都市役所の近く] 京都市役所の近く、完全個室4室の焼肉店。陽気な店主で、手頃なタン、アウトサイドスカート、サーロインキャップ、ホルモン、キムチ、冷麺をすばやく、大きな飲み物とともに。個室はワンドリンク制、予約を。',
  });
}

// ================================================================ 酒房 CRAFT MAN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034838/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '00:00']); const WE = day(['14:00', '00:00']);
  put({
    id: 'kyoto_shubo_craft_man', name: '酒房 CRAFT MAN', category: 'OMNI',
    lat: 35.013741, lng: 135.76275, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a craft-beer bar (barley and wheat beers), tempura, nyumen, fried figs, Tianjin rice (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, chicken neck, sea-bream nyumen; dashi (2025–26 reviews).',
    hours_raw: 'Weekdays 17:00–24:00; weekends and holidays 14:00–24:00; closing days not fixed (Tabelog). 「※着席の場合は、チャージ料500円を頂戴致します。」 — ¥500 charge if seated; the standing bar at the entrance has no seat (Tabelog; May 2026). Private tatami rooms (¥1,000 extra in December 2025). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 60 seats now, up to 90: a standing bar with a wall of taps, counter, tables, private rooms and an irori seat, in a machiya over 100 years old with a moss garden (Tabelog; September 2025). Moved here from 二帖半敷居町 (September 2025); about seven minutes from Karasuma Oike, near the Imperial Palace.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kannon-cho, near Marutamachi',
    cuisine: 'Craft beer and sake izakaya in a renovated machiya · about 40 craft beers on tap and about 40 sakes (September 2025) · three-beer tasting flight (April and September 2025) · weizen ¥880, hazy IPA ¥990 (January 2026) · stir-fried chicken neck and Kujo negi with salt sauce ¥900, staff-meal Tianjin rice ¥800 (January 2026) · fried figs, sea-bream nyumen (September 2025) · pickled water eggplant (October 2025) · tuna sashimi and tempura (November 2025)',
    website: 'https://craftman.owst.jp/en/', gmaps: gm('酒房 CRAFT MAN 京都 観音町'), menu_url: TB,
    notes: '[Craft beer & sake · Marutamachi] A century-old machiya near the Imperial Palace with a standing bar along a wall of some 40 craft-beer taps at the front, and counters, tatami rooms and a moss garden behind: beer flights, about 40 sakes, and izakaya plates from sashimi to sea-bream nyumen. ¥500 charge if seated.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a craft-beer and sake bar that moved from 二帖半敷居町 to a renovated machiya over 100 years old in Kannon-cho (September 2025); an April 2025 reviewer says it belongs to "the K-ya group" (unconfirmed).',
      philosophy: null, specialty: 'Craft-beer flights; Japanese sake.',
      anecdotes: [
        { text: 'A May 2026 visitor walking home from a sento was drawn in by the lights and stopped at the standing beer bar by the entrance.', source: R + 'B516483578/' },
        { text: 'A September 2025 return visitor, first time since the move, found the food much improved and the fried figs a fine gamble.', source: R + 'B513273669/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・日本酒バー・ビアバー、中京区観音町71、平日17:00〜24:00、土日・祝日14:00〜24:00、不定休、着席の場合はチャージ料500円、カード可、電子マネー・QR 不可、60席 (最大90)、個室あり。口コミ (2025年4月〜2026年8月、英語): 築100年超の町家を改装、苔の庭、入口に立ち飲み、壁一面のクラフトビールのタップ、クラフトビールと日本酒が約40種、ビールの飲み比べ3種、ヴァイツェン880円、ヘイジーIPA990円、鶏の首肉と九条ねぎの塩だれ炒め900円、まかないの天津飯800円、いちじくの揚げ物、鯛にゅうめん、水なすの漬物、まぐろの刺身、天ぷら、個室は1,000円、二帖半敷居町から移転、K-ya グループとの声。',
      confidence: 'medium', sources: [TB, 'https://craftman.owst.jp/en/', R + 'B465849253/', R + 'B507192714/', R + 'B508463832/', R + 'B513273669/', R + 'B514131886/', R + 'B514826264/', R + 'B516483578/', R + 'B521842430/', R + 'B526151942/', R + 'B533927309/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Stand at the bar to skip the ¥500 seat charge, or book a tatami room. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区観音町71',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.013741, 135.762750); cross-checked: GSI 京都府京都市中京区観音町71番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B465849253/'],
    price_note: 'Prices from January 2026; ¥500 seating charge.', last_checked: TODAY, items: [
      it('', '', 'Weizen', '¥880', 'Beer', 'no', 'ask', 'January 2026.', 'weizen'),
      it('', '', 'Hazy IPA', '¥990', 'Beer', 'no', 'ask', 'January 2026.', 'hazy_ipa'),
      it('', '', 'Chicken neck and Kujo negi with salt sauce', '¥900', 'Dishes', 'ask', 'no', 'January 2026.', 'seseri'),
      it('', '', 'Staff-meal Tianjin rice', '¥800', 'Dishes', 'no', 'no', 'January 2026.', 'tenshinhan'),
    ] }, {
    cuisine: '改装した町家のクラフトビールと日本酒の居酒屋・クラフトビールのタップと日本酒が約40種 (2025年9月)・ビール3種の飲み比べ (2025年4月・9月)・ヴァイツェン880円、ヘイジーIPA990円 (2026年1月)・鶏の首肉と九条ねぎの塩だれ炒め900円、まかないの天津飯800円 (2026年1月)・いちじくの揚げ物、鯛にゅうめん (2025年9月)・水なすの漬物 (2025年10月)・まぐろの刺身と天ぷら (2025年11月)',
    neighborhood: '観音町、丸太町の近く',
    gf_detail: 'グルテンフリーではない。クラフトビールのバー (大麦や小麦のビール)、天ぷら、にゅうめん、いちじくの揚げ物、天津飯 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、鶏の首肉、鯛にゅうめん、出汁 (2025〜2026年の口コミ)。',
    notes: '[クラフトビールと日本酒・丸太町] 御所近くの築100年を超える町家。入口は約40のクラフトビールのタップが並ぶ立ち飲み、奥はカウンター、座敷、苔の庭。ビールの飲み比べ、約40種の日本酒、刺身から鯛にゅうめんまでの居酒屋料理。着席はチャージ500円。',
  });
}

// ================================================================ 東観荘
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005924/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_tokanso_maruyama', name: '東観荘', category: 'OMNI',
    lat: 35.002779, lng: 135.782984, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, fish steamed with domyoji flour, soy-based kaiseki dishes (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, crab, fugu courses, dashi (2025 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sun 11:00–15:00 and 17:00–22:00; closed Wednesday (Tabelog). Lunch by reservation (2024 review). Private rooms over a garden; also used for weddings and memorial gatherings (2023–24 reviews). Cards (AMEX) (Tabelog). Up the hill from Yasaka Shrine in Maruyama Park, seven or eight minutes from the Gion bus stop; a taxi helps for older guests (2023–25 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park, above Yasaka Shrine',
    cuisine: 'Kyoto kaiseki in a historic house with a garden · mini-kaiseki lunch of seven dishes: sashimi, tempura of shrimp, whiting, crab and vegetables, miso-marinated sawara, fish steamed with domyoji (December 2025) · fugu course of sashimi and hot pot (November 2025) · seasonal kaiseki courses',
    website: null, gmaps: gm('東観荘 京都 円山公園'), menu_url: TB,
    notes: '[Kaiseki · Maruyama Park] A historic ryotei up the slope from Yasaka Shrine in Maruyama Park, with private rooms over a cool garden: a seven-dish mini-kaiseki lunch with very crisp tempura, and fugu and seasonal kaiseki courses. Book ahead; closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per reviews: a long-established kaiseki restaurant in an old house in Maruyama Park, used for weddings and entertaining (2023–24 reviews).',
      philosophy: null, specialty: 'Mini-kaiseki lunch; fugu course.',
      anecdotes: [
        { text: 'A December 2025 lunch guest counted seven dishes in the mini kaiseki and called the tempura the crispiest ever eaten.', source: R + 'B519577623/' },
        { text: 'A November 2025 host brought visitors from China for the fugu course, from sashimi to hot pot, in the historic house.', source: R + 'B517373983/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区八坂鳥居前東入円山町614、月火木金土日11:00〜15:00・17:00〜22:00、水曜休み、カード (AMEX) 可。口コミ (2025年11月・12月、英語): 円山公園の歴史ある建物、ミニ会席の昼は7品 (刺身、海老・白身魚・かに・野菜の天ぷら、鰆の味噌漬け、道明寺蒸し)、ふぐのコース (刺身から鍋まで)、個室、庭、八坂神社から坂を上がる。',
      confidence: 'low', sources: [TB, R + 'B517373983/', R + 'B519577623/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reserve, especially for lunch; take a taxi up the hill if needed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂鳥居前東入円山町614',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.002779, 135.782984); cross-checked: GSI 京都府京都市東山区円山町614番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519577623/'],
    price_note: 'No 2025 prices quoted; reviewers report ¥5,000–5,999 at lunch.', last_checked: TODAY, items: [
      it('', '', 'Mini-kaiseki lunch (seven dishes)', '', 'Lunch', 'no', 'no', 'December 2025.', 'mini_kaiseki'),
      it('', '', 'Fugu course', '', 'Dinner', 'no', 'no', 'November 2025.', 'fugu'),
    ] }, {
    cuisine: '庭のある歴史ある家での京会席・7品のミニ会席の昼: 刺身、海老・白身魚・かに・野菜の天ぷら、鰆の味噌漬け、道明寺蒸し (2025年12月)・刺身と鍋のふぐのコース (2025年11月)・季節の会席',
    neighborhood: '円山公園、八坂神社の上',
    gf_detail: 'グルテンフリーではない。天ぷら、道明寺蒸し、醤油の会席料理 (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、かに、ふぐのコース、出汁 (2025年の口コミ)。',
    notes: '[会席・円山公園] 八坂神社から円山公園の坂を上がった歴史ある料亭。涼しい庭を望む個室で、とてもからりとした天ぷらの7品のミニ会席や、ふぐと季節の会席を。予約を、水曜休み。',
  });
}

save();
