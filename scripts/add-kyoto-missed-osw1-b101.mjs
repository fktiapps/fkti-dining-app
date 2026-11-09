// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 101.
//   + 酒と肴 うまいもん くうかい Sake to Sakana Umaimon Kuukai (seafood and sake izakaya by Jingu-Marutamachi station)
//   + HYUTTO (baked-goods and brunch café facing Nijo Castle, opened June 2026)
//   + 欧風堂 Ofudo (Western-style cake shop since 1957, famous for custard waffles; takeaway only) — back-fill ruling
//   + 点 葉巻室 Ten Hamaki Shitsu (ten-seat cigar room and bar by the Imperial Palace park)
//   - 岡崎庵 Cafe, 橘屋, 松阪亭 高倉店, シープス: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26037668, 26045114, 26006912,
//   26031824 (skipped), 26021726 (skipped), 26038832, 26014790 (skipped), 26006618 (skipped).
//   queue-status.jsonl grepped for each brand (くうかい, HYUTTO, 欧風堂, 岡崎庵, 橘屋, 葉巻室, 松阪亭, シープス): no earlier
//   rulings.
//   Data check (current main, hidden included): none of the four drafted is in data/kyoto.json by Tabelog id, name, site
//   or address.
//   Same-name count: one shop each; operators not found. HYUTTO took over the site of the café Berry Button (not in data).
//   Retail ruling (Greg 2026-11-07, back-fill 2026-11-08): 欧風堂 — own site: founded 1957, shop renewed 2019 — a historic
//   shop with a sourced founding date; family succession not sourced. Takeaway only. 橘屋 — a wagashi shop with no sourced
//   founding date or succession and no GF or vegan options — skipped.
//   Service charges, checked against the Japanese original: くうかい 席料150円 (¥150 seat charge); 点 葉巻室 サービス料
//   ¥2000; none listed for HYUTTO or 欧風堂.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-101');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26031824', '岡崎庵 Cafe: closed — Tabelog says it closed at the end of June 2023');
skip('26021726', 'retail food shop (Greg 11-07 ruling): 橘屋 is a take-away wagashi shop (dorayaki, kashiwa mochi, ohagi); no founding date or family succession sourced and no GF or vegan options sourced');
skip('26014790', '松阪亭 高倉店: no reviews dated 2025–2026');
skip('26006618', 'シープス: no reviews dated 2025–2026');

// ================================================================ 酒と肴 うまいもん くうかい
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26037668/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.umaimonkukai.com/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_umaimon_kuukai_marutamachi', name: '酒と肴 うまいもん くうかい (Sake to Sakana Umaimon Kuukai)', category: 'OMNI',
    lat: 35.017909, lng: 135.772468, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, charcoal-grilled dishes, fried oysters, mapo yakisoba, grilled rice balls; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, chicken tsukune and dashi dishes (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday, public holidays and days before public holidays 17:00–24:00 (last orders 23:00); closed Sunday (Tabelog). Seat charge ¥150 (Tabelog, original 席料１５０円). Cards (Tabelog). 36 seats: 24 inside incl. the counter, 12 on the terrace (Tabelog). A short walk from Jingu-Marutamachi station (June 2025; May and October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Marutamachi — by Jingu-Marutamachi station',
    cuisine: 'Seafood, charcoal grilling and seasonal plates with a wide sake list, including dishes from Miyagi Prefecture (May and October 2026) · taro potato salad; fried oysters; sashimi; eggplant bolognese (May 2025) · sashimi platter; grilled sanma; crab; vinegared dishes; stewed tomato with honeycomb tripe; grilled rice balls (September 2025) · oysters; mapo yakisoba; tsukune (May 2026)',
    website: SITE, gmaps: gm('酒と肴 うまいもん くうかい'), menu_url: SITE,
    notes: '[Izakaya · Jingu-Marutamachi, seafood and sake] A neighbourhood izakaya a short walk from Jingu-Marutamachi station for sashimi, charcoal-grilled fish, fried oysters and inventive plates — some from Miyagi — with a broad Japanese sake list and a terrace. ¥150 seat charge. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No operator or chef details were found.', philosophy: null, specialty: 'Seafood and charcoal grilling with sake.',
      anecdotes: [
        { text: 'A September 2025 family celebrated a son’s birthday here with a sashimi platter, grilled sanma and grilled rice balls to finish.', source: R + 'B514513022/' },
      ],
      japanese_sources_summary: '食べログ: 酒と肴 うまいもん くうかい、居酒屋・海鮮・日本料理、左京区東丸太町7、月〜土・祝日・祝日の前日 17:00〜24:00 (L.O. 23:00)、日曜定休、席料150円、カード可、36席 (店内24、テラス12)。口コミ (2025〜2026年、英語): 神宮丸太町駅からすぐ、里芋のポテトサラダ、カキフライ、刺身、茄子のボロネーゼ、刺身の盛り合わせ、秋刀魚の塩焼き、蟹、酢の物、トマトとハチノスの煮込み、焼きおにぎり、宮城の料理、牡蠣、麻婆焼きそば、つくね、日本酒が豊富、炭火焼き。',
      confidence: 'low', sources: [SITE, TB, R + 'B508293506/', R + 'B509300669/', R + 'B514513022/', R + 'B522405337/', R + 'B528196255/', R + 'B537932859/', R + 'B538417058/'] },
    cultural_comfort: { level: 'japanese', note: 'Neighbourhood izakaya; ¥150 seat charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区東丸太町7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing; reviews dated May 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.017909, 135.772468); cross-checked: GSI 京都府京都市左京区東丸太町7番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514513022/', R + 'B528196255/'],
    price_note: 'No prices found; ¥150 seat charge.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', 'September 2025; May 2026.', 'sashimi'),
      it('', '', 'Fried oysters', '', 'Seafood', 'no', 'no', 'May 2025.', 'kaki_fry'),
      it('', '', 'Mapo yakisoba', '', 'Noodles', 'no', 'no', 'May 2026.', 'mapo_yakisoba'),
      it('', '', 'Taro potato salad', '', 'Small plates', 'ask', 'no', 'May 2025.', 'satoimo_salad'),
    ] }, {
    cuisine: '海鮮、炭火焼き、季節の皿と豊富な日本酒、宮城県の料理も (2026年5・10月)・里芋のポテトサラダ、カキフライ、刺身、茄子のボロネーゼ (2025年5月)・刺身の盛り合わせ、秋刀魚の塩焼き、蟹、酢の物、トマトとハチノスの煮込み、焼きおにぎり (2025年9月)・牡蠣、麻婆焼きそば、つくね (2026年5月)',
    neighborhood: '東丸太町。神宮丸太町駅のそば',
    gf_detail: '要確認。刺身、炭火焼き、カキフライ、麻婆焼きそば、焼きおにぎり。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。海鮮、鶏のつくね、出汁の料理 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・神宮丸太町、魚と日本酒] 神宮丸太町駅からすぐの近所の居酒屋。刺身、炭火焼きの魚、カキフライ、宮城の料理を含む工夫のある皿を、豊富な日本酒とともに。テラス席も。席料150円。日曜定休。',
  });
}

// ================================================================ HYUTTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26045114/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_hyutto_nijojo', name: 'HYUTTO', category: 'OMNI',
    lat: 35.011274, lng: 135.753581, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pound cakes, cream-topped cakes, croque monsieur and open sandwiches; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Nothing is described as vegan; the cakes use cream and cream cheese (2026 reviews).',
    hours_raw: 'Opens 8:00, early also at weekends (June and October 2026); hours not listed on Tabelog. Pay first at the register (June 2026). Cards (Tabelog). A small room with window counter seats, tables and a terrace (June 2026). Baked goods to take away in gift boxes (June 2026). In front of Nijo Castle, a walk from Nijojo-mae station (August and September 2026). Opened 1 June 2026 in the former Berry Button (Tabelog; June 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'In front of Nijo Castle — near Nijojo-mae station',
    cuisine: 'Baked goods decorated with edible flowers, plus breakfast and brunch, from the former owner of Berry Button (June 2026) · lemon pound cake with cream cheese and lemon curd ¥750 (June and August 2026) · croque monsieur ¥1,300; prosciutto sandwich ¥980 (June and July 2026) · raspberry and banana cakes; white-chocolate Earl Grey pound cake; caramel-nut banana pound cake (June, September and October 2026) · jasmine latte ¥700; passion-fruit soda ¥700 (July and August 2026)',
    website: null, gmaps: gm('HYUTTO 京都 二条城'), menu_url: TB,
    notes: '[Café · facing Nijo Castle, opened 2026] A sunny little café across from Nijo Castle with pretty pound cakes and cakes topped with edible flowers, croque monsieur and prosciutto sandwiches for breakfast or brunch from 8:00, and gift-boxed bakes to take away. Pay at the register first.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; formerly of Berry Button)'], origin: null,
      background: 'A June 2026 reviewer says the café is run by the former owner of Berry Button, at its former site. Opened 1 June 2026 (Tabelog). No operator was found.',
      philosophy: null, specialty: 'Pound cakes with edible flowers.',
      anecdotes: [
        { text: 'A June 2026 traveller in Kyoto for the Minamiza geiko dance event came straight here after dropping off bags for a light brunch.', source: R + 'B530640526/' },
      ],
      japanese_sources_summary: '食べログ: HYUTTO、カフェ、中京区押油小路町233 京都スクエアビル 1F、2026年6月1日オープン、カード可、予算1,000〜1,999円。口コミ (2026年、英語): Berry Button の元オーナー、跡地に開店、8時から、食用花で飾った焼き菓子、レモンのパウンドケーキ750円、クロックムッシュ1,300円、生ハムのサンド980円、ラズベリーやバナナのケーキ、ホワイトチョコとアールグレイのパウンド、キャラメルナッツバナナのパウンド、ジャスミンラテ700円、パッションフルーツソーダ700円、レジで先払い、窓際のカウンター・テーブル・テラス、箱入りの焼き菓子の持ち帰り、二条城の前。',
      confidence: 'low', sources: [TB, R + 'B529397179/', R + 'B529411895/', R + 'B529429538/', R + 'B529697034/', R + 'B530682680/', R + 'B531883351/', R + 'B533191069/', R + 'B536186709/', R + 'B538550806/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the register; small room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押油小路町233 京都スクエアビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened June 2026; reviews dated June to October 2026.' },
    pin_source: `Tabelog ${TB} (35.011274, 135.753581); cross-checked: GSI 京都府京都市中京区押油小路町233番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531883351/', R + 'B529397179/'],
    price_note: 'Prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lemon pound cake', '¥750', 'Cakes', 'no', 'no', 'June to August 2026.', 'lemon_cake'),
      it('', '', 'Croque monsieur', '¥1,300', 'Brunch', 'no', 'no', 'June 2026.', 'croque'),
      it('', '', 'Prosciutto sandwich', '¥980', 'Brunch', 'no', 'no', 'July 2026.', 'prosciutto'),
      it('', '', 'Passion-fruit soda', '¥700', 'Drinks', 'ask', 'ask', 'August 2026.', 'passion_soda'),
    ] }, {
    cuisine: 'Berry Button の元オーナーによる、食用花で飾った焼き菓子と朝食・ブランチ (2026年6月)・クリームチーズとレモンカードのレモンのパウンドケーキ750円 (2026年6・8月)・クロックムッシュ1,300円、生ハムのサンド980円 (2026年6・7月)・ラズベリーやバナナのケーキ、ホワイトチョコとアールグレイのパウンド、キャラメルナッツバナナのパウンド (2026年6・9・10月)・ジャスミンラテ700円、パッションフルーツソーダ700円 (2026年7・8月)',
    neighborhood: '二条城の前。二条城前駅の近く',
    gf_detail: '要確認。パウンドケーキ、クリームのケーキ、クロックムッシュ、オープンサンド。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ヴィーガンと書かれた品はない。ケーキは生クリームやクリームチーズを使う (2026年の口コミ)。',
    notes: '[カフェ・二条城の前、2026年開店] 二条城の向かいの日当たりのよい小さなカフェ。食用花で飾ったパウンドケーキやケーキ、8時からの朝食やブランチにクロックムッシュや生ハムのサンド、箱入りの焼き菓子の持ち帰りも。レジで先に支払い。',
  });
}

// ================================================================ 欧風堂 (retail, back-fill ruling)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26006912/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ofudo-kyoto.jp/';
  const H = day(['10:00', '18:30']);
  put({
    id: 'kyoto_ofudo_takeyamachi', name: '欧風堂 (Ofudo)', category: 'OMNI',
    lat: 35.01616, lng: 135.75896, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Waffles, cream puffs, cakes, pies, tarts and baked goods are wheat-based; the egg custard pudding and strawberry daifuku are not described (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg custard, cream and butter in most items (2025–2026 reviews).',
    hours_raw: 'Takeaway only — a cake shop. 10:00–18:30 (own site); Tabelog gives Monday–Saturday 10:00–19:00, closed Sunday (sometimes open). Cards and e-money (Tabelog). Non-smoking (Tabelog). The popular custard waffles sell out — reserve ahead (February and May 2026). At the west end of Takeyamachi off Karasuma, a short walk from Marutamachi station (July 2025; March 2026). Founded 1957; shop renewed 2019 (own site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takeyamachi west of Karasuma — near Marutamachi station',
    cuisine: 'Takeaway only: a Western-style cake shop founded in 1957 (own site) · famous custard-cream waffles; cream puffs (July and August 2025; March and May 2026) · egg custard pudding under ¥300; omelette cake, often sold out (December 2025) · lemon cake, madeleine, financier, apple pie, strawberry tart (January 2025) · strawberry daifuku with cream (March 2026)',
    website: SITE, gmaps: gm('欧風堂 京都 竹屋町'), menu_url: SITE,
    notes: '[Cake shop · Takeyamachi near Marutamachi, since 1957, takeaway only] A neighbourhood Western-style confectioner open since 1957, loved for its custard-filled waffles — book ahead, as the waffles sell out — plus egg-rich custard pudding, cakes, tarts and baked goods at local prices. Takeaway only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Confectioners (unnamed)'], origin: 'Kyoto',
      background: 'Founded in 1957 and renewed in 2019, adding new products to long-loved ones (own site). Family succession not sourced.',
      philosophy: 'Keeping long-loved products while adding new ones (own site).', specialty: 'Custard-cream waffles.',
      anecdotes: [
        { text: 'A January 2025 visitor who had loved the shop’s pies as a child came back after decades and took home lemon cake, madeleines and an apple pie.', source: R + 'B500384384/' },
      ],
      japanese_sources_summary: '公式サイト: 創業1957年「欧風堂」、令和元年に店舗リニューアル、長年親しまれてきた商品に新商品を加える、営業時間 10:00〜18:30。食べログ: 欧風堂、ケーキ、中京区竹屋町通烏丸西入ル、月〜土 10:00〜19:00、日曜定休 (不定)、カード・電子マネー可、禁煙。口コミ (2025〜2026年、英語): 烏丸竹屋町の西の老舗の洋菓子店、名物のカスタードクリームのワッフル、シュークリーム、300円しない卵のカスタードプリン、オムレットは売り切れが多い、レモンケーキ、マドレーヌ、フィナンシェ、アップルパイ、苺のタルト、生クリームの苺大福、ワッフルは予約を。',
      confidence: 'medium', sources: [SITE, TB, R + 'B500384384/', R + 'B511491234/', R + 'B511563527/', R + 'B517415073/', R + 'B519813602/', R + 'B523524768/', R + 'B523885407/', R + 'B524344258/', R + 'B527908237/'] },
    cultural_comfort: { level: 'japanese', note: 'Takeaway counter; reserve waffles.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区竹屋町通烏丸西入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Founded 1957 (own site); family succession not sourced. Tabelog listing; reviews dated January 2025 to May 2026.' },
    pin_source: `Tabelog ${TB} (35.01616, 135.75896); no lot number — GSI places only 竹屋町; OSM reverse gives the shop node CAKE COOKIES OFUDO on 竹屋町通 — precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519813602/', R + 'B511563527/'],
    price_note: 'Pudding under ¥300 (December 2025); other prices not found. Takeaway only.', last_checked: TODAY, items: [
      it('', '', 'Custard-cream waffle (takeaway)', '', 'Waffles', 'no', 'no', 'July and August 2025; March and May 2026.', 'waffle'),
      it('', '', 'Egg custard pudding (takeaway)', '¥300', 'Pudding', 'ask', 'no', 'December 2025; under ¥300.', 'pudding'),
      it('', '', 'Cream puff (takeaway)', '', 'Cakes', 'no', 'no', 'August 2025.', 'choux'),
      it('', '', 'Lemon cake (takeaway)', '', 'Baked goods', 'no', 'no', 'January 2025.', 'lemon_cake'),
    ] }, {
    cuisine: 'テイクアウトのみ。1957年創業の洋菓子店 (公式サイト)・名物のカスタードクリームのワッフル、シュークリーム (2025年7・8月、2026年3・5月)・300円しない卵のカスタードプリン、売り切れの多いオムレット (2025年12月)・レモンケーキ、マドレーヌ、フィナンシェ、アップルパイ、苺のタルト (2025年1月)・生クリーム入りの苺大福 (2026年3月)',
    neighborhood: '烏丸の西、竹屋町通。丸太町駅の近く',
    gf_detail: '要確認。ワッフル、シュークリーム、ケーキ、パイ、タルト、焼き菓子は小麦粉製。卵のプリンや苺大福については書かれていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。ほとんどの品に卵のカスタード、生クリーム、バター (2025〜2026年の口コミ)。',
    notes: '[洋菓子店・竹屋町烏丸、1957年創業、テイクアウトのみ] 1957年から続く近所の洋菓子店。売り切れるカスタードのワッフル (予約を)、卵の濃いカスタードプリン、ケーキ、タルト、焼き菓子を地元価格で。テイクアウトのみ、日曜定休。',
  });
}

// ================================================================ 点 葉巻室
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26038832/'; const R = TB + 'dtlrvwlst/';
  const HW = day(['14:00', '21:00']); const HF = day(['14:00', '23:00']);
  put({
    id: 'kyoto_ten_hamaki_shitsu', name: '点 葉巻室 (Ten Hamaki Shitsu)', category: 'OMNI',
    lat: 35.01882, lng: 135.768131, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cigar room serving drinks such as gin and tonic and rum; no food or gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks only in the sources (2026 reviews).',
    hours_raw: 'Monday–Thursday and Sunday 14:00–21:00; Friday and Saturday 14:00–23:00 (Tabelog). Service charge ¥2,000 (Tabelog, original サービス料¥2000). Cards (Tabelog). 10 seats (Tabelog). A cigar room — smoking is the point. Near the Kyoto Imperial Palace park (Tabelog address).',
    hours: { 0: HW, 1: HW, 2: HW, 3: HW, 4: HF, 5: HF, 6: HW }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kamigyo — near the Kyoto Imperial Palace park',
    cuisine: 'A quiet cigar room and bar: Cuban cigars, which the owner travels to restock, with gin and tonic or rum (June 2026) · a calm, understated atmosphere welcoming to first-timers (January 2026)',
    website: null, gmaps: gm('点 葉巻室 京都'), menu_url: TB,
    notes: '[Cigar room · Kamigyo, by the Imperial Palace park] A small, calm cigar room and bar with Cuban cigars and classic drinks, well known among cigar lovers yet easy for newcomers. ¥2,000 service charge. Opens from 14:00.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A June 2026 regular notes the owner travels abroad to restock cigars. A January 2026 visitor met a familiar face from a favourite Tokyo cigar bar here. No operator was found.',
      philosophy: null, specialty: 'Cuban cigars.',
      anecdotes: [
        { text: 'A June 2026 regular on a third visit, between two typhoons, paired a cigar with a gin and tonic before heading on to Kiyamachi.', source: R + 'B531194636/' },
      ],
      japanese_sources_summary: '食べログ: 点 葉巻室、バー・カフェ、上京区信富町299 1F、月〜木・日 14:00〜21:00、金・土 14:00〜23:00、サービス料2,000円、カード可、10席。口コミ (2026年、英語): 落ち着いた雰囲気で初めてでも居心地がよい、東京の葉巻バーの知り合いに会った (2026年1月)、キューバ産の葉巻、店主は仕入れの旅に、ジントニック、ラム (2026年6月)。',
      confidence: 'low', sources: [TB, R + 'B461537076/', R + 'B521513662/', R + 'B531194636/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cigar smoking throughout; ¥2,000 service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区信富町299 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January to June 2026.' },
    pin_source: `Tabelog ${TB} (35.01882, 135.768131); cross-checked: GSI 京都府京都市上京区信富町299番地 (lot) 108m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Service charge ¥2,000 (Tabelog); no other prices found.', last_checked: TODAY, items: [
      it('', '', 'Cuban cigar', '', 'Cigars', '', '', 'June 2026.', 'cigar'),
      it('', '', 'Gin and tonic', '', 'Drinks', 'ask', 'ask', 'June 2026.', 'gin_tonic'),
    ] }, {
    cuisine: '静かな葉巻室とバー。店主が仕入れに出かけるキューバ産の葉巻にジントニックやラム (2026年6月)・初めてでも居心地のよい控えめな雰囲気 (2026年1月)',
    neighborhood: '上京区。京都御苑の近く',
    gf_detail: '要確認。ジントニックやラムなどの飲み物を出す葉巻室。料理やグルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。情報源にあるのは飲み物のみ (2026年の口コミ)。',
    notes: '[葉巻室・上京、京都御苑の近く] キューバ産の葉巻と定番の酒の小さく落ち着いた葉巻室兼バー。葉巻好きに知られるが初めてでも入りやすい。サービス料2,000円。14時から。',
  });
}

save();
