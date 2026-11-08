// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 63.
//   + 中華ダイニング饗十膳 Chuka Dining Kyojuzen (late-night Sichuan and health-minded Chinese, Gion) — rest
//   + 綾ふや Aya Fuya (obanzai counter on Ayanokoji, weekdays only) — rest
//   + タナカコーヒ 祇園店 Tanaka Coffee Gion (retro kissaten open to 1 am, fruit platters and parfaits) — rest
//   + 舞い香 Maika (Korean home cooking — samgyetang, chijimi, gejang — in Gion) — rest
//   - skip 26043082 京都和牛とんかつ天のめし 祇園白川店 (sub-brand of a large parent; earlier ruling 26041554)
//   - skip 26044894 BUDDHA ZEN TEA HOUSE (no reviews)
//   - skip 26045056 モリタ雲丹五郎 京都店 (chain)
//   - skip 26043376 ジャンオクBBQ ジャンカラ木屋町店 (sub-brand of the Jankara group; earlier ruling 26026734)
//   - skip 26040388 おすすめ屋 京都河原町店 (chain)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: 天のめし (26041554, Unicia
//   Holdings) and ジャンカラ (26026734, Jankara group) were already ruled; no rulings for 饗十膳, 綾ふや, タナカコーヒ, 舞い香,
//   雲丹五郎 or おすすめ屋.
//   Same-name counts first (2026-11-07): 饗十膳 — one. 綾ふや — one. タナカコーヒ — three on Tabelog (Kawaramachi, Gion, Kamigamo),
//   under five; an October 2025 review calls it a local café chain of over 40 years. 舞い香 — one. None is in data/kyoto.json.
//   Service charges per Tabelog: none listed (タナカコーヒ's field says 「現金払いのみ」, cash only). No halal claims; no owner deaths;
//   no single-review remarks about other diners kept.
//   Pins re-checked against current main: タナカコーヒ sat 0.1 m from kyoto_201_gion_wagyu_wine_bar (same building); offset 7.3 m west.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-63');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043082', 'sub-brand of a large parent: 天のめし is a ユニシアホールディングス (串カツ田中 group) brand — same ruling as 26041554 京都天ぷら 天のめし (https://tabelog.com/en/rstLst/?sw=%E5%A4%A9%E3%81%AE%E3%82%81%E3%81%97).');
skip('26044894', 'no reviews: BUDDHA ZEN TEA HOUSE has no Tabelog reviews to source from (https://tabelog.com/en/kyoto/A2601/A260301/26044894/).');
skip('26045056', 'chain: Morita Unigoro — Tabelog lists shops in Osaka (main and annex), Nagoya, Kobe and Kyoto (https://tabelog.com/en/rstLst/?sw=%E3%83%A2%E3%83%AA%E3%82%BF%E9%9B%B2%E4%B8%B9%E4%BA%94%E9%83%8E).');
skip('26043376', 'sub-brand of a large parent: ジャンオクBBQ is a Jankara (karaoke group) business — same group as 26026734; Tabelog lists Janoku shops in Hiroshima, Osaka and Kyoto (https://tabelog.com/en/rstLst/?sw=%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%AA%E3%82%AFBBQ).');
skip('26040388', 'chain: Osusume-ya — Tabelog lists all-you-can-eat Osusume-ya izakaya in Shinjuku, Shibuya, Kanda, Ueno, Nagoya, Namba and Kobe Sannomiya (https://tabelog.com/en/rstLst/?sw=%E3%81%8A%E3%81%99%E3%81%99%E3%82%81%E5%B1%8B).');

// ================================================================ 中華ダイニング饗十膳
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26015194/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:30']);
  put({
    id: 'kyoto_chuka_dining_kyojuzen', name: '中華ダイニング饗十膳 (Chuka Dining Kyojuzen)', category: 'OMNI',
    lat: 35.005569, lng: 135.772776, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sichuan dishes, tantanmen and congee (Tabelog); mapo tofu, miso stir-fries and herbal soup (2025 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mapo tofu, shrimp and squid stir-fry, shark-fin soup (2013–25 reviews).',
    hours_raw: 'Mon–Sat 18:00–2:30 (last entry 2:30); holidays 18:00–23:30; closed Sunday; can open on closing days by reservation; hours may change (Tabelog). Reservations accepted (Tabelog). Cards and QR accepted; no e-money (Tabelog). Counter seating (Tabelog). Gion Ichibankan Building B2F, on Yamato-oji south of Sanjo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yamato-oji, north of Shijo — Gion',
    cuisine: 'Health-minded Sichuan and Chinese cooking served late into the night (Tabelog; 2011–25 reviews) · mapo tofu heavy with Sichuan pepper, spiciness to order (November 2017; July 2019; February 2025) · stir-fried squid and shrimp with miso; herbal soup (February 2025) · tantanmen and Chinese congee (Tabelog) · shark-fin soup (March 2018)',
    website: null, gmaps: gm('中華ダイニング饗十膳 祇園'), menu_url: TB,
    notes: '[Sichuan · Gion, open to 2:30] A basement Chinese counter in a Gion bar building, cooking health-minded Sichuan dishes into the small hours: numbing mapo tofu made as hot as you like, squid and shrimp in miso, herbal soups, tantanmen and congee, and an acclaimed shark-fin soup. The owner-chef has a strong personality. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed) (2017–19 reviews)'], origin: null,
      background: 'Per Tabelog: a Sichuan and Chinese restaurant in a Gion building, open until 2:30. Reviews from 2011 onward describe health-minded dishes and an outspoken owner-chef.',
      philosophy: 'Health-conscious Chinese cooking (2011 and 2025 reviews).', specialty: 'Mapo tofu; shark-fin soup.',
      anecdotes: [
        { text: 'A November 2017 visitor arrived around 2 am after a night out in Gion and found the mapo tofu packed with Sichuan pepper.', source: R + 'B311865560/' },
        { text: 'A July 2019 diner asked for extra-spicy mapo tofu and found it very hot — and was quizzed by the chef about how the place had been found.', source: R + 'B510342982/' },
        { text: 'A February 2025 diner recommends the squid and shrimp stir-fried in miso.', source: R + 'B501402510/' },
      ],
      japanese_sources_summary: '食べログ: 四川料理・担々麺・中華粥、東山区大和大路通三条下る3丁目弁財天町8 祇園一番館ビル B2F、月〜土18:00〜翌2:30 (最終入店2:30)、祝日18:00〜23:30、日曜休み、予約で定休日も営業可、予約可、カード・QR 可、カウンター。口コミ (2011年5月〜2026年5月、英語): 体にやさしい中華、山椒のきいた麻婆豆腐、辛さは調整可、イカとエビの味噌炒め、薬膳スープ、フカヒレのスープ、個性的な店主。',
      confidence: 'low', sources: [TB, R + 'B113698580/', R + 'B116390090/', R + 'B204370412/', R + 'B206432575/', R + 'B29759474/', R + 'B311865560/', R + 'B335005603/', R + 'B418575064/', R + 'B501402510/', R + 'B510239833/', R + 'B510342982/', R + 'B528305973/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask for your spice level; open very late; closed Sunday. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通三条下る3丁目弁財天町8 祇園一番館ビルＢ２Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2025 (one May 2026 visit without text).' },
    pin_source: `Tabelog ${TB} (35.005569, 135.772776); cross-checked: GSI 京都府京都市東山区弁財天町8番地 (lot) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501402510/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu', '', 'Sichuan', 'ask', 'no', 'February 2025.', 'mapo'),
      it('', '', 'Squid and shrimp stir-fried with miso', '', 'Stir-fries', 'ask', 'no', 'February 2025.', 'ika_ebi_miso'),
      it('', '', 'Herbal soup', '', 'Soups', 'ask', 'ask', 'February 2025.', 'herbal_soup'),
    ] }, {
    cuisine: '深夜まで出す体にやさしい四川と中華 (食べログ、2011〜2025年の口コミ)・山椒たっぷりの麻婆豆腐、辛さは好みで (2017年11月、2019年7月、2025年2月)・イカとエビの味噌炒め、薬膳のスープ (2025年2月)・担々麺と中華粥 (食べログ)・フカヒレのスープ (2018年3月)',
    neighborhood: '大和大路、四条の北。祇園',
    gf_detail: '要確認。四川料理、担々麺、粥 (食べログ)、麻婆豆腐、味噌炒め、薬膳スープ (2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。麻婆豆腐、エビとイカの炒め物、フカヒレのスープ (2013〜2025年の口コミ)。',
    notes: '[四川料理・祇園、深夜2時半まで] 祇園のビルの地下にある中華のカウンター。体にやさしい四川料理を深夜まで。好みの辛さのしびれる麻婆豆腐、イカとエビの味噌炒め、薬膳スープ、担々麺や粥、評判のフカヒレのスープ。個性の強い店主。日曜休み。',
  });
}

// ================================================================ 綾ふや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017786/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_aya_fuya', name: '綾ふや (Aya Fuya)', category: 'OMNI',
    lat: 35.002599, lng: 135.764405, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal obanzai, roast beef and Saikyo-grilled fish (2018–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai, roast beef, grilled fish (2018–26 reviews).',
    hours_raw: 'Mon–Fri 18:00–23:00 (last food order 22:30); closed Saturday, Sunday and holidays (Tabelog). Reservations accepted (Tabelog). Cards (JCB, AMEX, Diners); no e-money (Tabelog). 12 seats: a counter of 7 and a table (Tabelog; April 2015). Prices are not posted outside (September 2013). On Ayanokoji west of Fuyacho, 3 min from Hankyu Karasuma (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji, west of Fuyacho — between Karasuma and Kawaramachi',
    cuisine: 'Seasonal obanzai cooked entirely by the owner, at a small counter (2015–26 reviews) · Kujo green onion nuta (November 2018) · roast beef; Saikyo-grilled fish (January 2023) · vegetables wrapped in meat with potato sauce (September 2013) · a good selection of fine whisky (November 2024)',
    website: null, gmaps: gm('綾ふや 綾小路'), menu_url: TB,
    notes: '[Obanzai counter · Ayanokoji, weekday evenings] A small, calm Kyoto-style counter where the owner cooks every dish — seasonal obanzai, Kujo green onion nuta, roast beef, Saikyo-grilled fish — with a fine whisky list; conversation flows across the counter and solo diners, including women travelling alone, feel at home. Weekdays only; no prices posted outside.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), cooking every dish, with an assistant (February 2026)'], origin: null,
      background: 'Per Tabelog: a Japanese restaurant on Ayanokoji. Reviews from 2013 to 2026 describe an obanzai counter where the owner prepares all the dishes, helped by staff.',
      philosophy: null, specialty: 'Seasonal obanzai.',
      anecdotes: [
        { text: 'A November 2014 business traveller chooses hotels near Aya Fuya so as to visit on every Kyoto trip, finding it welcoming to women dining alone.', source: R + 'B73805390/' },
        { text: 'A February 2026 visitor on business trips from Tokyo was drawn in by the owner and an assistant in kimono.', source: R + 'B512329480/' },
        { text: 'An October 2019 regular noted it opens only on weekdays, which may be hard for travellers.', source: R + 'B420998054/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、下京区綾小路麩屋町西入塩屋町51、阪急烏丸駅から徒歩3分、月〜金18:00〜23:00 (L.O. 料理22:30)、土日祝休み、予約可、カード (JCB、AMEX、Diners) 可、12席 (カウンター7、テーブル)。口コミ (2013年9月〜2026年8月、英語): 店主がすべての料理を作るおばんざいの店、Kujo のねぎの nuta、ローストビーフ、魚の Saikyo 焼き、肉で野菜を巻いたものにポテトのソース、ウイスキーが豊富、平日のみ、店の外に値段の表示がない、一人でも女性一人でも入りやすい。',
      confidence: 'medium', sources: [TB, R + 'B116325309/', R + 'B403754065/', R + 'B420998054/', R + 'B457959167/', R + 'B45823211/', R + 'B499006738/', R + 'B512329480/', R + 'B521920248/', R + 'B534080927/', R + 'B65554242/', R + 'B73805390/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Weekday evenings only; sit at the counter and chat; welcoming to solo diners. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路麩屋町西入塩屋町51',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002599, 135.764405); cross-checked: GSI 京都府京都市下京区塩屋町51番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521920248/', R + 'B403754065/'],
    price_note: 'No item prices in the sources; prices are not posted outside.', last_checked: TODAY, items: [
      it('', '', 'Seasonal obanzai', '', 'Obanzai', 'ask', 'no', '2015–26 reviews.', 'obanzai'),
      it('', '', 'Roast beef', '', 'À la carte', 'ask', 'no', 'January 2023.', 'roast_beef'),
      it('', '', 'Kujo green onion nuta', '', 'Obanzai', 'ask', 'ask', 'November 2018.', 'negi_nuta'),
    ] }, {
    cuisine: '店主がすべて作る季節のおばんざいを小さなカウンターで (2015〜2026年の口コミ)・Kujo のねぎの nuta (2018年11月)・ローストビーフ、魚の Saikyo 焼き (2023年1月)・肉で巻いた野菜のポテトソース (2013年9月)・上質なウイスキーが豊富 (2024年11月)',
    neighborhood: '綾小路、麩屋町の西。烏丸と河原町の間',
    gf_detail: '要確認。季節のおばんざい、ローストビーフ、魚の焼き物 (2018〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁のおばんざい、ローストビーフ、焼き魚 (2018〜2026年の口コミ)。',
    notes: '[おばんざいのカウンター・綾小路、平日の夜] 店主がすべての料理を作る、落ち着いた京風の小さなカウンター。季節のおばんざい、Kujo のねぎの nuta、ローストビーフ、魚の焼き物に、上質なウイスキーも。カウンター越しに会話が弾み、女性一人でも入りやすい。平日のみ、店の外に値段の表示はない。',
  });
}

// ================================================================ タナカコーヒ 祇園店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013112/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '01:00']);
  put({
    id: 'kyoto_tanaka_coffee_gion', name: 'タナカコーヒ 祇園店 (Tanaka Coffee Gion)', category: 'OMNI',
    lat: 35.004925, lng: 135.77316, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee, fruit platters, parfaits, shakes and coffee jelly, plus crepes (2024–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and fruit platters, but parfaits, shakes and crepes use dairy (2024–26 reviews).',
    hours_raw: 'Mon–Sat, holidays and the day before 13:00–1:00 (closing moved from 3:00 to 1:00 on weekends from 1 October 2024; delivery until 0:30); closed Sunday (Tabelog). Reservations accepted (Tabelog). Cash only (Tabelog, Japanese text: 「現金払いのみ」). 25 seats: tables at the front, a counter and partitioned tables at the back; power outlets (Tabelog; September 2024; October 2025). Smoking allowed (Tabelog; June and September 2025). In Sueyoshi-cho, north of Shijo in Gion, 4 min from Gion-Shijo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Sueyoshi-cho, north Gion — Gion-Shijo',
    cuisine: 'A retro siphon-coffee kissaten open late in the geisha district (2024–26 reviews) · siphon hot coffee; flannel-drip iced coffee (October 2025) · signature fruit platter carved by the master — pineapple, grapefruit, kiwi, a dolphin-shaped banana, dragon fruit and Shine Muscat (October 2025) · mocha and chocolate parfaits (August 2024; September 2025); banana shake (September 2024) · fruit crepes; blend coffee (March 2025) · unsweetened coffee jelly (July 2026)',
    website: null, gmaps: gm('タナカコーヒ 祇園店'), menu_url: TB,
    notes: '[Kissaten · Gion, siphon coffee to 1 am] A Showa-era coffee house under a retro neon sign in Gion\'s geisha district, one of a small local family of cafés running for over 40 years: siphon coffee, flannel-drip iced coffee, an artful carved fruit platter, parfaits and coffee jelly, open until 1:00 for people who work in Gion. Cash only; smoking allowed; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed), who designs the fruit platter (October 2025)'], origin: null,
      background: 'Per Tabelog: a coffee shop in Sueyoshi-cho, Gion. An October 2025 review describes Tanaka Coffee as a local chain of cafés in Kyoto running for over 40 years, and this branch as a long-loved retro café open late for people working in Gion.',
      philosophy: null, specialty: 'Siphon coffee; carved fruit platter.',
      anecdotes: [
        { text: 'An October 2025 visitor described the master\'s fruit platter, with a banana carved into a dolphin and Shine Muscat grapes.', source: R + 'B127771645/' },
        { text: 'A September 2024 visitor came in just before 1 am for a banana shake and a seat with a power outlet.', source: R + 'B491495385/' },
        { text: 'A July 2026 visitor dropped in for a bitter, unsweetened coffee jelly.', source: R + 'B532743124/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店、東山区八坂新地末吉町99-3、京阪祇園四条駅から徒歩4分、月〜土・祝・祝前日13:00〜翌1:00 (2024年10月1日から週末も1時閉店、デリバリーは0:30まで)、日曜休み、予約可、現金のみ、25席、喫煙可。口コミ (2024年7月〜2026年8月、英語): 祇園の花街で長く愛されるレトロな喫茶、京都に数店ある40年以上の喫茶のチェーン、ネオンの看板、サイフォンのコーヒー、ネルドリップのアイスコーヒー、マスターが作るフルーツの盛り合わせ (イルカのバナナ、ドラゴンフルーツ、Shine Muscat)、モカやチョコのパフェ、バナナシェイク、フルーツのクレープ、無糖のコーヒーゼリー、コンセントあり。',
      confidence: 'medium', sources: [TB, R + 'B127771645/', R + 'B491328799/', R + 'B491495385/', R + 'B491785471/', R + 'B492396147/', R + 'B504871446/', R + 'B508644894/', R + 'B514892493/', R + 'B518005915/', R + 'B531582569/', R + 'B532743124/', R + 'B534551975/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; smoking allowed inside; open until 1 am. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂新地末吉町99-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004925, 135.773240), offset 7.3 m west: kyoto_201_gion_wagyu_wine_bar shares 末吉町99-3 (0.1 m away); cross-checked: GSI 京都府京都市東山区末吉町99番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B127771645/'],
    price_note: 'No item prices in the sources; cash only.', last_checked: TODAY, items: [
      it('', '', 'Siphon coffee', '', 'Coffee', 'ask', 'vegan', 'October 2025.', 'siphon'),
      it('', '', 'Fruit platter', '', 'Fruit', 'ask', 'ask', 'October 2025.', 'fruit_platter'),
      it('', '', 'Parfait (mocha or chocolate)', '', 'Sweets', 'ask', 'no', 'August 2024; September 2025.', 'parfait'),
    ] }, {
    cuisine: '花街で夜遅くまで開くレトロなサイフォンの喫茶 (2024〜2026年の口コミ)・サイフォンのホットコーヒー、ネルドリップのアイスコーヒー (2025年10月)・マスターが彫る看板のフルーツの盛り合わせ: パイナップル、グレープフルーツ、キウイ、イルカの形のバナナ、ドラゴンフルーツ、Shine Muscat (2025年10月)・モカやチョコのパフェ (2024年8月、2025年9月)、バナナシェイク (2024年9月)・フルーツのクレープ、ブレンド (2025年3月)・甘くないコーヒーゼリー (2026年7月)',
    neighborhood: '末吉町、祇園の北側。祇園四条駅',
    gf_detail: '要確認。コーヒー、フルーツの盛り合わせ、パフェ、シェイク、コーヒーゼリー、クレープ (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。ブラックコーヒーやフルーツの盛り合わせはあるが、パフェ、シェイク、クレープは乳製品を使う (2024〜2026年の口コミ)。',
    notes: '[喫茶店・祇園、深夜1時までのサイフォン] 祇園の花街、レトロなネオン看板の昭和の喫茶。京都に数店ある40年以上の喫茶の一軒。サイフォンのコーヒー、ネルドリップのアイスコーヒー、マスターが彫るフルーツの盛り合わせ、パフェやコーヒーゼリーを、祇園で働く人のために深夜1時まで。現金のみ、喫煙可、日曜休み。',
  });
}

// ================================================================ 舞い香
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017132/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_maika_gion', name: '舞い香 (Maika)', category: 'OMNI',
    lat: 35.004326, lng: 135.773596, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Korean home cooking — samgyetang, kimchi, namul — but also chijimi and kimbap (2018–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: samgyetang, marinated crab, offal hot pot, braised pork (2020–25 reviews).',
    hours_raw: 'Mon–Sat 18:00–2:00; closed Sunday and holidays; hours may change (Tabelog). Reservations accepted and needed — samgyetang must be booked ahead, and tables are hard to get (Tabelog; October 2025; January 2026). Cards accepted; no QR (Tabelog). About three tables and a counter (October 2025). Smoking allowed (Tabelog). In Tominaga-cho, 2–3 min from Gion-Shijo (Tabelog; August 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tominaga-cho, Gion — Gion-Shijo',
    cuisine: 'Authentic homemade Korean cooking in a small Gion room (2018–26 reviews) · samgyetang hot pot, booked ahead, finished with ramen (October 2025; December 2024) · ganjang gejang and yangnyeom gejang, cut for easy eating (March 2020; December 2024) · chive and seafood chijimi (2023–26 reviews) · assorted namul and kimchi; offal hot pot; stir-fried offal; braised pork; kimbap (2018–25 reviews) · Chamisul and makgeolli (May 2023)',
    website: null, gmaps: gm('舞い香 祇園 韓国料理'), menu_url: TB,
    notes: '[Korean home cooking · Gion, open to 2 am] A tiny, much-booked Korean restaurant in Gion, everything homemade: a samgyetang hot pot (book it ahead) finished with ramen, soy- and chilli-marinated crab, fluffy chive chijimi, kimchi, namul and offal hot pot, with makgeolli. Reserve well in advance; smoking allowed; closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a Korean izakaya in Tominaga-cho, Gion. Reviews from 2018 to 2026 describe authentic, homemade Korean dishes and a small room that is hard to book.',
      philosophy: null, specialty: 'Samgyetang; gejang; chijimi.',
      anecdotes: [
        { text: 'An October 2025 party of five booked two samgyetang ahead and finished with ramen in the broth.', source: R + 'B515359938/' },
        { text: 'A January 2026 group had been trying to book since the year before and called it the best chijimi anywhere.', source: R + 'B520817418/' },
        { text: 'A March 2020 diner praised the marinated crab, cut so it is easy to eat.', source: R + 'B425770857/' },
      ],
      japanese_sources_summary: '食べログ: 韓国料理・居酒屋、東山区富永町138 103、京阪祇園四条駅から徒歩3分、月〜土18:00〜翌2:00、日祝休み、予約可、カード可、QR 不可、喫煙可。口コミ (2018年3月〜2026年1月、英語): 本格的な手作りの韓国家庭料理、samgyetang は要予約で締めにラーメン、ganjang gejang と yangnyeom gejang、ニラや海鮮の chijimi、ナムルとキムチの盛り合わせ、ホルモン鍋、ホルモン炒め、豚の煮込み、kimbap、Chamisul とマッコリ、テーブル3つほどとカウンター、予約が取りにくい。',
      confidence: 'medium', sources: [TB, R + 'B425770857/', R + 'B451794311/', R + 'B466259030/', R + 'B480586837/', R + 'B483959314/', R + 'B496372383/', R + 'B497407934/', R + 'B503584497/', R + 'B512564004/', R + 'B515359938/', R + 'B516637449/', R + 'B520817418/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book well ahead and pre-order the samgyetang; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区富永町138 103',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.004326, 135.773596); cross-checked: GSI 京都府京都市東山区富永町138番地 (lot) 10m; nearest record kyoto_sumiyaki_miyazawa_gion 5.2 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515359938/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Samgyetang hot pot (book ahead)', '', 'Hot pots', 'ask', 'no', 'October 2025.', 'samgyetang'),
      it('', '', 'Chive chijimi', '', 'Pancakes', 'no', 'ask', 'September 2025.', 'chijimi'),
      it('', '', 'Marinated crab (gejang)', '', 'À la carte', 'ask', 'no', 'December 2024.', 'gejang'),
    ] }, {
    cuisine: '小さな祇園の店の本格的な手作りの韓国料理 (2018〜2026年の口コミ)・予約制の samgyetang の鍋、締めにラーメン (2025年10月、2024年12月)・食べやすく切った ganjang gejang と yangnyeom gejang (2020年3月、2024年12月)・ニラや海鮮の chijimi (2023〜2026年の口コミ)・ナムルとキムチの盛り合わせ、ホルモン鍋、ホルモン炒め、豚の煮込み、kimbap (2018〜2025年の口コミ)・Chamisul とマッコリ (2023年5月)',
    neighborhood: '富永町、祇園。祇園四条駅',
    gf_detail: '要確認。samgyetang、キムチ、ナムルのほか、chijimi や kimbap もある韓国の家庭料理 (2018〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。samgyetang、漬けた蟹、ホルモン鍋、豚の煮込み (2020〜2025年の口コミ)。',
    notes: '[韓国家庭料理・祇園、深夜2時まで] 祇園の小さな予約の取りにくい韓国料理の店。すべて手作りで、予約制の samgyetang の鍋と締めのラーメン、醤油やyangnyeom の漬けた蟹、ふわふわのニラの chijimi、キムチ、ナムル、ホルモン鍋をマッコリと。早めの予約を、喫煙可、日曜休み。',
  });
}

save();
