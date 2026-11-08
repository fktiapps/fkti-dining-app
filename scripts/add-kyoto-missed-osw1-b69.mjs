// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 69.
//   + とり焼き 鶏料理 かしわ 祇園豆六小路 Tori Yaki Tori Ryori Kashiwa (grill-your-own jidori and chicken sashimi in a Gion alley)
//   + そば處へん古 Soba Dokoro Henko (old-style soba shop on Hanamikoji north of Shijo, cash only)
//   + 鰻と、COFFEE (charcoal-grilled eel and house-roasted coffee behind のと正 on Matsubara-dori)
//   - なか卯 河原町三条店, UNAGI YOSAKURA 日本鰻 世桜, ハングリーダイナー 宮川町, 牛角 河原町三条店, 田邊屋: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26016818, 26011730 (skipped),
//   26044058 (skipped), 26045198 (skipped), 26022728 (skipped), 26022380 (skipped), 26012846, 26042276.
//   queue-status.jsonl grepped for each brand (かしわ/珠玖/豆六, なか卯, 世桜/YOSAKURA, ハングリーダイナー, 牛角, 田邊屋, へん古,
//   鰻と、/のと正): only 牛角 has an earlier ruling (26026075, osw8-52).
//   Data check: none of the three drafted is in data/kyoto.json by name or address. かしわ 木屋町店 (kyoto_kashiwa_kiyamachi)
//   is a different company — its invoice holder is 株式会社８８, while this shop’s is 株式会社珠玖 (both NTA register) — so
//   the Gion shop is not a branch of it. のと正 (kyoto_noto_sho_matsubara), the eel and river-fish shop at 弓矢町31, is in
//   data; 鰻と、COFFEE stands behind it and serves its eel and tare — drafted as a sister concept, flagged.
//   東すし (kyoto_azuma_sushi_gion) shares the address 祇園町北側270-5 with へん古.
//   Same-name count (same brand or operator only): かしわ 祇園 — 株式会社珠玖, one shop found; へん古, 鰻と、COFFEE — one
//   shop each. Large-parent list checked.
//   Service charges: none listed for any of the three (Tabelog; own sites).
//   Other-diner remarks (Greg 2026-11-06): none used. A single August 2025 complaint about the へん古 manager and a
//   one-dish-each request is left out of the anecdotes but the request is noted in hours_raw as reported.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-69');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26011730', 'なか卯 河原町三条店: chain — なか卯 is a national gyudon and udon chain');
skip('26044058', 'UNAGI YOSAKURA 日本鰻 世桜: chain — the brand site (yosakura.jp/location) lists five 日本鰻世桜 shops (Kyoto Gion, Mt Fuji, Asakusabashi, Nagahoribashi, Ho Chi Minh) among twelve 世桜 restaurants, and recruits franchisees');
skip('26045198', 'ハングリーダイナー 宮川町: no reviews on Tabelog');
skip('26022728', '牛角 河原町三条店: chain — same ruling as 26026075 (osw8-52)');
skip('26022380', '田邊屋: no reviews dated 2025–2026 (latest November 2024)');

// ================================================================ かしわ 祇園豆六小路
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016818/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '00:30']);
  put({
    id: 'kyoto_kashiwa_gion_mameroku', name: 'とり焼き 鶏料理 かしわ 祇園豆六小路 (Tori Yaki Tori Ryori Kashiwa Gion Mameroku Koji)', category: 'OMNI',
    lat: 35.005492, lng: 135.774675, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chicken grilled at the table with salt or sauce, tsukune, kara-age, chicken hot pot and a yakitori rice bowl; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant — grilled chicken and pork, chicken sashimi, chicken hot pot (Tabelog).',
    hours_raw: 'Monday–Saturday 17:00–00:30 (L.O. 00:00); closed Sunday and holidays (Tabelog). Reservations accepted; booking recommended (Tabelog; October 2025). Cards, e-money and QR (Tabelog). 40 seats with sunken kotatsu seating and private rooms for 2 to 14 (Tabelog). Smoking allowed, no non-smoking seats (Tabelog). At the end of a narrow alley behind a building, in the 豆六小路 lane, 7 min from Gion-Shijo (Tabelog; March 2025, March 2026). Leftovers can be taken home (Tabelog). Raw chicken (sashimi) is served.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo, 豆六小路 lane — 7 min from Keihan Gion-Shijo',
    cuisine: 'Jidori chicken — Omi jidori, Hinai jidori, Amakusa Daio and Kyo-akajidori — delivered daily and grilled at your table on a far-infrared roaster (Tabelog) · three-jidori tasting ¥1,500; cuts from ¥470 to ¥650 incl. neck, heart, liver, gizzard, tsukune, stuffed shiitake; omakase assortment for two ¥2,200 (Tabelog) · pork skewers from ¥500 (Tabelog) · chicken sashimi of liver, heart and breast (March 2025); assorted raw cuts (October 2025) · Kashiwa-don yakitori rice bowl (January 2025) · salted cabbage; chicken hot pot with vegetables (January and March 2026) · kara-age, dashimaki, fried wings (Tabelog)',
    website: null, gmaps: gm('かしわ 祇園豆六小路'), menu_url: TB + 'dtlmenu/',
    notes: '[Chicken grill · Gion alley, jidori from four regions] A 40-seat chicken izakaya at the end of a narrow Gion alley, with sunken-kotatsu seats and private rooms: grill jidori from Shiga, Akita, Kumamoto and Kyoto at your table, start with chicken sashimi, and finish with a yakitori rice bowl or hot pot — at prices reviewers call fair for Gion. Smoking allowed; open past midnight; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T5130001057014 is registered to 株式会社珠玖, whose address is the same lot, 清本町374-5 (NTA register). Tabelog’s shop text says the chicken is “fresh, safe and secure”, delivered each day, with rare cuts that change daily. It is a different company from かしわ 木屋町店 (株式会社８８).',
      philosophy: null, specialty: 'Jidori grilled at the table; chicken sashimi.',
      anecdotes: [
        { text: 'A March 2025 pair began with a three-kind sashimi plate of liver, heart and breast, then moved from beer to hot shochu.', source: R + 'B503021216/' },
        { text: 'A March 2026 regular always orders the vegetable-filled hot pot, and warns that the entrance is hard to find the first time.', source: R + 'B524836408/' },
      ],
      japanese_sources_summary: '食べログ: とり焼き 鶏料理 かしわ 祇園豆六小路、鶏料理・鍋・居酒屋、東山区清本町374-5 豆六小路内、祇園四条駅から徒歩7分、月〜土 17:00〜翌0:30 (L.O.0:00)、日・祝定休、カード・電子マネー・QR可、40席 (掘りごたつ、2〜14名の個室)、喫煙可、Omi Jidori・比内地鶏・天草大王・Kyo Akajidori、遠赤外線ロースターで卓上で焼く、地鶏3種食べ比べ1,500円、串470〜650円、おまかせ盛り (2人前) 2,200円、豚串、適格請求書 T5130001057014 (株式会社珠玖)。口コミ (2025〜2026年、英語): ビルの裏の細い路地の奥、肝・心臓・胸の刺身3種盛り、かしわ丼、塩キャベツ、野菜たっぷりの鍋、祇園にしては手頃。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5130001057014', R + 'B499959225/', R + 'B503021216/', R + 'B516253415/', R + 'B521630162/', R + 'B524836408/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the table grill to first-timers (Tabelog); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町374-5 豆六小路内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.005492, 135.774675); cross-checked: GSI 京都府京都市東山区清本町374番地 (lot) 21m; 祇園 大季 (374-4) is 6.7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu, tax included.', last_checked: TODAY, items: [
      it('', '', 'Three-jidori tasting (grilled at the table)', '¥1,500', 'Grill', 'ask', 'no', 'Tabelog.', 'jidori3'),
      it('', '', 'Today’s omakase toriyaki assortment (for two)', '¥2,200', 'Grill', 'ask', 'no', 'Tabelog.', 'omakase'),
      it('', '', 'Tsukune', '¥600', 'Grill', 'ask', 'no', 'Tabelog.', 'tsukune'),
      it('', '', 'Stuffed shiitake', '¥650', 'Grill', 'ask', 'no', 'Tabelog; October 2025.', 'shiitake'),
      it('', '', 'Chicken sashimi platter (liver, heart, breast)', '', 'Sashimi', 'ask', 'no', 'March 2025; raw chicken.', 'sashimi'),
    ] }, {
    cuisine: '毎日届くOmi Jidori、比内地鶏、天草大王、Kyo Akajidoriを卓上の遠赤外線ロースターで焼く (食べログ)・地鶏3種食べ比べ1,500円、首、心臓、レバー、砂肝、つくね、椎茸の肉詰めなど470〜650円、2人前のおまかせ盛り2,200円 (食べログ)・豚串500円から (食べログ)・肝、心臓、胸の鶏刺し (2025年3月)、部位の盛り合わせ (2025年10月)・焼き鳥丼のかしわ丼 (2025年1月)・塩キャベツ、野菜たっぷりの鍋 (2026年1・3月)・唐揚げ、だし巻き、手羽先 (食べログ)',
    neighborhood: '四条の北の祇園、豆六小路。京阪祇園四条から徒歩7分',
    gf_detail: '要確認。塩やたれで卓上で焼く鶏、つくね、唐揚げ、鍋、かしわ丼。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。焼いた鶏と豚、鶏刺し、鶏鍋の鶏料理の店 (食べログ)。',
    notes: '[鶏焼き・祇園の路地、4産地の地鶏] 祇園の細い路地の奥、掘りごたつと個室のある40席の鶏の居酒屋。滋賀、秋田、熊本、京都の地鶏を卓上で焼き、鶏刺しから始めて、かしわ丼か鍋で締める。祇園にしては手頃との声。喫煙可、深夜まで、日曜定休。',
  });
}

// ================================================================ そば處へん古
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26012846/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:10', '21:01']);
  put({
    id: 'kyoto_soba_henko_gion', name: 'そば處へん古 (Soba Dokoro Henko)', category: 'OMNI',
    lat: 35.004162, lng: 135.775244, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soba in dashi and tsuyu, tempura soba and yuba soba in a savoury sauce; whether the soba has wheat in it is not stated (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba broth and dipping sauce are dashi-based, and the menu includes clam and tempura soba (2025–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:10–21:01 as listed on Tabelog; closed Monday, and Tuesday when Monday is a holiday (Tabelog). Open on New Year’s Eve for toshikoshi soba until midnight (December 2025). Some dishes, such as clam soba, sell out early (March 2025). An August 2025 reviewer was asked to order one dish per person. Cash only: no cards, e-money or QR (Tabelog). 22 seats: 10 at the counter and 12 in the hall (Tabelog). Non-smoking (Tabelog). On Hanamikoji north of Shijo, 5 min from Keihan Gion-Shijo (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Hanamikoji north of Shijo — 5 min from Keihan Gion-Shijo',
    cuisine: 'Firm, thin soba with a refined broth (2025–2026) · cold yamakake soba with sticky grated yam, about ¥2,000 (March 2025) · yuba soba in a savoury sauce, with grated ginger (March 2025) · cold oroshi soba with crisp tempura (March 2026) · tempura soba and à la carte dishes with beer (August 2025) · clam soba, which sells out early (March 2025) · toshikoshi soba on New Year’s Eve (December 2025)',
    website: null, gmaps: gm('そば處へん古 祇園'), menu_url: TB + 'dtlmenu/',
    notes: '[Soba · Hanamikoji north of Shijo, an old-school shop] A 22-seat Gion soba shop of firm, thin noodles in a refined broth — cold yamakake, yuba soba with ginger, grated-daikon tempura soba — run by an owner reviewers describe as a Showa-era character who chats with regulars. Open all day, and on New Year’s Eve till midnight. Cash only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a friendly owner (March 2025), staff who talk with passion about soba (March 2025), and an owner with a Showa-era air who banters with regulars and staff (March 2026).',
      philosophy: null, specialty: 'Yuba soba; yamakake soba.',
      anecdotes: [
        { text: 'A December 2025 regular queued from 23:20 on New Year’s Eve and finished the year-end soba a minute before midnight.', source: R + 'B521724068/' },
        { text: 'A March 2025 visitor who missed the sold-out clam soba called the yuba soba one of the best soba dishes ever eaten.', source: R + 'B502787760/' },
      ],
      japanese_sources_summary: '食べログ: そば處へん古、そば、東山区祇園町北側270-5、京阪祇園四条駅から徒歩5分、火〜日 11:10〜21:01 (表記どおり)、月曜定休 (祝日の場合は火曜)、カード・電子マネー・QR不可、22席 (カウンター10、ホール12)、禁煙。口コミ (2025〜2026年、英語): 細くてこしの強いそば、上品なつゆ、冷たい山かけそば (約2,000円)、生姜を添えた湯葉そば、おろし天ぷらそば、早く売り切れるはまぐりそば、大晦日の年越しそば、昭和の雰囲気の店主。',
      confidence: 'medium', sources: [TB, R + 'B502787760/', R + 'B505043033/', R + 'B512591394/', R + 'B521724068/', R + 'B525245405/'] },
    cultural_comfort: { level: 'japanese', note: 'Old-style local soba shop; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側270-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.004112, 135.775244), offset about 5.5 m north to (35.004162, 135.775244) because 東すし (kyoto_azuma_sushi_gion), at the same address, sits within 1 m; cross-checked: GSI 京都府京都市東山区祇園町北側270番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505043033/', R + 'B502787760/', R + 'B525245405/'],
    price_note: 'No menu prices on Tabelog; yamakake soba about ¥2,000 (March 2025).', last_checked: TODAY, items: [
      it('', '', 'Yuba soba in a savoury sauce, with ginger', '', 'Soba', 'ask', 'no', 'March 2025.', 'yuba'),
      it('', '', 'Cold yamakake soba', 'about ¥2,000', 'Soba', 'ask', 'no', 'March 2025.', 'yamakake'),
      it('', '', 'Cold grated-daikon tempura soba', '', 'Soba', 'no', 'no', 'March 2026.', 'oroshiten'),
      it('', '', 'Clam soba (sells out early)', '', 'Soba', 'ask', 'no', 'March 2025.', 'hamaguri'),
    ] }, {
    cuisine: '細くてこしの強いそばと上品なつゆ (2025〜2026年)・とろろの粘る冷たい山かけそば、約2,000円 (2025年3月)・生姜を添えた湯葉そば (2025年3月)・さくさくの天ぷらの冷たいおろしそば (2026年3月)・天ぷらそばと一品、ビール (2025年8月)・早く売り切れるはまぐりそば (2025年3月)・大晦日の年越しそば (2025年12月)',
    neighborhood: '四条の北の花見小路。京阪祇園四条から徒歩5分',
    gf_detail: '要確認。出汁とつゆのそば、天ぷらそば、湯葉そば。そばに小麦が入るかは書かれていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。かけ汁とつゆは出汁で、はまぐりや天ぷらのそばもある (2025〜2026年の口コミ)。',
    notes: '[そば・四条の北の花見小路、昔ながらの店] 祇園の22席のそば屋。細くこしのあるそばと上品なつゆで、冷たい山かけ、生姜を添えた湯葉そば、おろし天ぷらそば。常連と話す昭和の雰囲気の店主との声。通し営業で、大晦日は深夜まで。現金のみ、月曜定休。',
  });
}

// ================================================================ 鰻と、COFFEE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042276/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://unagi-to-coffee.com/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_unagi_to_coffee', name: '鰻と、COFFEE (Unagi to Coffee)', category: 'OMNI',
    lat: 34.998854, lng: 135.771888, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled eel glazed with a long-kept tare, unaju with clear soup and pickles, Basque cheesecake; no gluten information (own site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant; sides include river fish, shrimp and dashimaki, and the soup is clam or eel liver (2025–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:00–17:00; closed Monday and some irregular days (Tabelog). The shop’s site lists 11:00–18:00, closed Monday — the Tabelog hours are used. Reservations accepted (June 2026). Cards, e-money and QR (Tabelog). 14 seats: a counter in front of the grill and several tables for two (Tabelog; October 2026). Non-smoking (Tabelog). On Matsubara-dori west of Yamatooji, right behind the river-fish shop のと正, 5 min from Keihan Gion-Shijo (own site; December 2025). Site opened August 2024 (own site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Matsubara-dori, Higashiyama — 5 min from Keihan Gion-Shijo',
    cuisine: 'Eel from Shizuoka grilled over binchotan, Kansai style without steaming, glazed with のと正’s tare topped up for 60 years, on Niigata Koshihikari rice (own site; 2026 reviews) · unaju jo (one eel) ¥3,900, tokujo (1.5 eels) ¥5,200, Premium with a mini bottle of cold sake ¥7,200, each with side dishes, pickles and soup (own site) · unagi chazuke ¥2,900 (December 2025) · sides of river fish, shrimp and beans, dashimaki; clam soup (2026 reviews) · shiroyaki, umaki and seasonal dishes such as salt-grilled ayu (own site) · house-roasted single-origin coffee from ¥500; Uji gyokuro ¥700 (own site) · Basque cheesecake in three flavours (June 2026) · Gargery beer, sake, whisky (own site)',
    website: SITE, gmaps: gm('鰻と、COFFEE'), menu_url: SITE + 'menu/',
    notes: '[Unagi and coffee · Matsubara-dori behind のと正] A stylish 14-seat counter-and-tables café behind the old river-fish shop のと正, grilling eel over binchotan in front of you, Kansai style, with that shop’s tare — unaju from ¥3,900 — then house-roasted coffee and Basque cheesecake. Daytime only; closed Monday. Flagged: a sister concept of のと正, which is already listed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The shop’s site says it uses the tare of のと正, kept topped up for 60 years, with eel from Shizuoka. Reviewers say it is run by のと正, a long-established river-fish shop nearby (December 2025, January 2026), and two reviewers say it was started by a daughter of that family (June 2026). Tabelog’s shop text mentions a collaboration with Kawagoe Fishery.',
      philosophy: 'Away from the bustle of the city, a slow, happy hour of eel, good drink and coffee roasted to match (own site).', specialty: 'Charcoal-grilled unaju; house-roasted coffee.',
      anecdotes: [
        { text: 'A January 2026 diner expected so-so eel from a café with a quirky name, then watched it grilled over binchotan and was won over.', source: R + 'B521488062/' },
        { text: 'An April 2026 visitor had lunch here before the Kyo Odori dances in Miyagawa-cho.', source: R + 'B526045461/' },
      ],
      japanese_sources_summary: '公式サイト: 鰻と、COFFEE、東山区松原通大和大路西入弓矢町31-1、京阪祇園四条駅から徒歩5分、11時〜18時 (月曜定休)、60年前から追い足す「のと正」のタレ、静岡の鰻、炭火焼き、新潟産コシヒカリ、自家焙煎のスペシャルティコーヒー、うな重 上 3,900円、特上 5,200円、Premium (冷酒ミニボトル付き) 7,200円、白焼、う巻き、鮎の塩焼きなど季節の料理、宇治の玉露700円、2024年8月に公式サイト公開。食べログ: うなぎ・カフェ、火〜日 11:00〜17:00、月曜定休、14席、カード・電子マネー・QR可、Kawagoe Fisheryとのコラボ。口コミ (2025〜2026年、英語): 備長炭で焼く関西風の鰻、のと正が営む、川魚や海老と豆などの小鉢、だし巻き、はまぐりのお吸い物、うなぎ茶漬け2,900円、バスクチーズケーキ3種。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'menu/', R + 'B519587306/', R + 'B521488062/', R + 'B525250430/', R + 'B526045461/', R + 'B526321816/', R + 'B530842933/', R + 'B531574286/', R + 'B533060641/', R + 'B534780297/', R + 'B537627842/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Café-style counter; warm, informal service (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原通大和大路西入弓矢町31-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.998854, 135.771888); cross-checked: GSI 京都府京都市東山区弓矢町31番地 (lot) 21m; のと正 (kyoto_noto_sho_matsubara) is 25 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu/'],
    price_note: 'Prices from the shop’s site.', last_checked: TODAY, items: [
      it('うな重 上', 'unaju jo', 'Unaju jo (one eel), with sides, pickles and soup', '¥3,900', 'Lunch', 'ask', 'no', 'Own site.', 'jo'),
      it('うな重 特上', 'unaju tokujo', 'Unaju tokujo (1.5 eels), with sides, pickles and soup', '¥5,200', 'Lunch', 'ask', 'no', 'Own site.', 'tokujo'),
      it('うな重Premium', 'unaju premium', 'Unaju Premium with a mini bottle of cold sake', '¥7,200', 'Lunch', 'ask', 'no', 'Own site.', 'premium'),
      it('本日のコーヒー', 'honjitsu no kohi', 'Today’s coffee (house-roasted)', 'from ¥500', 'Drinks', '', '', 'Own site.', 'coffee'),
    ] }, {
    cuisine: '静岡の鰻を備長炭で蒸さずに関西風に焼き、60年追い足す「のと正」のタレで、新潟のコシヒカリに (公式サイト、2026年の口コミ)・うな重 上 (1尾) 3,900円、特上 (1.5尾) 5,200円、冷酒ミニボトル付きのPremium 7,200円、小鉢、漬物、吸い物付き (公式サイト)・うなぎ茶漬け2,900円 (2025年12月)・川魚、海老、豆の小鉢、だし巻き、はまぐりのお吸い物 (2026年の口コミ)・白焼、う巻き、鮎の塩焼きなど季節の料理 (公式サイト)・自家焙煎のシングルオリジンのコーヒー500円から、宇治の玉露700円 (公式サイト)・3種のバスクチーズケーキ (2026年6月)・ガージェリーのビール、日本酒、ウイスキー (公式サイト)',
    neighborhood: '東山の松原通。京阪祇園四条から徒歩5分',
    gf_detail: '要確認。長く追い足すタレで炭火焼きした鰻、吸い物と漬物付きのうな重、バスクチーズケーキ。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鰻の店で、小鉢に川魚、海老、だし巻き、汁ははまぐりか肝 (2025〜2026年の口コミ)。',
    notes: '[うなぎとコーヒー・松原通、のと正の裏] 老舗の川魚店のと正の裏にある、カウンターとテーブルの14席のおしゃれな店。目の前で備長炭で関西風に焼いた鰻にのと正のタレ、うな重は3,900円から。食後に自家焙煎のコーヒーとバスクチーズケーキ。昼のみ、月曜定休。登録済みののと正の姉妹店 (要確認)。',
  });
}

save();
