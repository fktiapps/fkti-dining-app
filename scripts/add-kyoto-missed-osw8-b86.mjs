// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 86 (2026-11-08).
//   + やきにく庭園 四条烏丸本店 Yakiniku Teien (second shop of a Fushimi yakiniku house, Karasuma-Rokkaku; rest)
//   + WAGYU KAJIYA 神慈や (machiya izakaya of the mulberry group; GF and vegetarian options per Tabelog; rest)
//   + CURRY SHOP FAMILY 屋台0号店 (three-seat yatai curry of the Roji-oku group, Muromachi-Bukkoji; rest)
//   + 食堂はやし Shokudo Hayashi (long-running diner at Higashiyama-Sanjo; rest)
//   + 京都円山 天正 Kyoto Maruyama Tensho (yakiniku and sukiyaki inside Maruyama Park; rest)
//   Rest list (mod 6 = 1) after batch 85, nearest-first — skipped:
//   - いちころ 八坂の塔のいちご飴屋さん 26036167: no review dated 2025–26 (latest April 2024); a strawberry-candy sweets stand.
//   - 長楽館ブティック 26035957: retail sweets shop of 長楽館, already in data (kyoto_dessert_cafe_chourakukan, kyoto_le_chene_chourakukan).
//   - グリーン ビーン トゥ バー チョコレート 京都店 26034493: retail food shop (Greg 11-07 ruling) — a chocolate shop and
//     branch of a Tokyo maker; no sourced GF or vegan options.
//   - イルキャンティ京都 四条室町店 26031019: chain — Il Chianti (same call as 26030761).
//   - わかしろ 26043889: thin listing (3 reviews).
//   - CICON ROOFTOP BAR by NOHGA HOTEL 26037085: venue inside a hotel of the NOHGA HOTEL brand (Greg 11-08 big-chain-hotel
//     ruling) — flagged, as NOHGA's size is for the coordinator to confirm.
//   Brand check: queue-status.jsonl and than.co.jp/brands (2026-11-08) checked for every brand — none is a THAN brand.
//   やきにく庭園 is run by 庭園フーズ株式会社 (NTA, Fushimi): the Fushimi main shop plus this one, neither in data.
//   KAJIYA is run by 株式会社mulberry (NTA): three 神慈や shops, none in data. CURRY SHOP FAMILY is a Roji-oku group shop
//   (Tabelog; rmeet-kyoto.com) — a local sister concept of kyoto_roji_oku_shijo; its Shichijo main shop is not in data.
//   天正 is run by 有限会社アダチコーポレーション (NTA; 0029.jp). None of the five is in data (main 0faba5dc+, hidden records
//   included) by name and address.
//   Held for next batch: GESHARY COFFEE 洛 26043955, くぐり鍋 六白屋 26007601, 祇園円山堂 26023957 (fetched).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-86');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26036167/', 'no review dated 2025–26 (latest April 2024): いちころ, a strawberry-candy sweets stand');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26035957/', 'retail sweets shop of 長楽館, a brand already in data (kyoto_dessert_cafe_chourakukan, kyoto_le_chene_chourakukan)');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26034493/', 'retail food shop (Greg 11-07 ruling): chocolate shop, a branch of the Tokyo maker green bean to bar CHOCOLATE; no sourced GF or vegan options');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26031019/', 'chain: Il Chianti (same call as 26030761)');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26043889/', 'thin listing: 3 reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26037085/', 'venue inside a hotel: CICON ROOFTOP BAR is in NOHGA HOTEL Kiyomizu (Greg 11-08 big-chain-hotel ruling) — flagged for the coordinator to confirm NOHGA counts as a big chain');

// ================================================================ やきにく庭園 四条烏丸本店 Yakiniku Teien
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043331/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://yakinikuteien.jimdofree.com/';
  const A = day(['17:00', '22:30']); const B = day(['17:00', '22:00']);
  put({
    id: 'kyoto_yakiniku_teien_karasuma', name: 'やきにく庭園 四条烏丸本店 (Yakiniku Teien, Shijo-Karasuma)', category: 'OMNI',
    lat: 35.00752611786765, lng: 135.75892750038852, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salted tongue and plain-grilled cuts may suit, but marinades, sauces and the Kyoto Yaki use soy, and cold noodles contain wheat (2025–2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu and offal yakiniku house; kimchi and namul are sides only (2025–2026 reviews).',
    hours_raw: 'Tuesday–Saturday 17:00–22:30 (last order 22:00); Sunday, holidays and days before holidays 17:00–22:00 (last order 21:30); closed Monday and the first and third Thursday — open on the Thursday when Friday is a holiday (Tabelog). Thursday is left out of the hours because it is closed two weeks a month. Reservations accepted; phone 13:00–22:00 (Tabelog). No service charge (Tabelog original なし). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 90 seats: 10 tables and tatami seating; 1F non-smoking, heated tobacco only on 2F (Tabelog). Touch-panel ordering (July 2026). Children and strollers welcome (Tabelog). Opened 16 July 2025 as the second shop of a yakiniku house near Momoyama Goryo-mae in Fushimi (Tabelog; 2025–2026 reviews). 4 min walk from Shijo or Karasuma-Oike Stn.',
    hours: { 1: A, 2: A, 4: A, 5: A, 6: B }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Rokkaku',
    cuisine: 'Yakiniku of A4–A5 kuroge wagyu and offal at low prices (Tabelog) · tongue, outside skirt, sagari, short rib, loin, sirloin cap; fresh liver, heart and senmai sashimi-style, raw tripe, yukhoe; kimchi and namul platters (August 2025–October 2026) · “Kyoto Yaki” sukiyaki-style beef with zarame sugar and egg ¥1,290 (August 2025; April 2026) · stone-grilled bibimbap, cold noodles, tail soup (2026 reviews) · ¥5,000 course with 120-minute all-you-can-drink and free rice refills (March–September 2026) · drinks from ¥250, draft beer ¥450 (October 2026) · about ¥4,000–8,000 a head (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('やきにく庭園 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · Karasuma-Rokkaku, wagyu value] The roomy second shop of a popular Fushimi yakiniku house: kuroge wagyu and very fresh offal at keen prices, a ¥5,000 all-you-can-drink course with bottomless rice, and famously fast service. No service charge. Closed Monday and the 1st/3rd Thursday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: run by 庭園フーズ株式会社 (NTA invoice register, head office in Fushimi), this is the second shop of a popular yakiniku house in front of Momoyama Goryo-mae in Fushimi, opened 16 July 2025 with the motto of good food at affordable prices; reviewers praise cheerful, well-trained staff and very quick service (2025–2026 reviews).',
      philosophy: 'Delicious food at affordable prices (Tabelog).', specialty: 'Kuroge wagyu; fresh offal.',
      anecdotes: [
        { text: 'An October 2026 parent who usually takes the family to the Fushimi shop got the last table here on the same day; fresh liver and sashimi-style omasum came first.', source: R + 'B514272907/' },
        { text: 'A July 2026 table found the touch-panel orders arriving so fast the staff seemed to know what was coming.', source: R + 'B532318516/' },
        { text: 'A September 2026 company party came back within a month for the ¥5,000 all-you-can-drink course with unlimited rice.', source: R + 'B534698280/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・ホルモン・肉料理、中京区骨屋町152、四条駅・烏丸御池駅から徒歩4分、火〜土 17:00〜22:30 (L.O.22:00)、日曜・祝日・祝日の前日 17:00〜22:00 (L.O.21:30)、月曜と第1・第3木曜休み (金曜が祝日なら木曜営業)、予約可、サービス料なし、カード (VISA・Master・JCB・AMEX・Diners・銀聯) 可、電子マネー・QR 不可、90席 (テーブル10卓と座敷)、1階禁煙・2階は加熱式たばこのみ、子ども可、2025年7月16日開店。インボイス登録は庭園フーズ株式会社 (国税庁、伏見区)。口コミ (2025年8月〜2026年10月、英語): 伏見の桃山御陵前の人気店の2号店、黒毛和牛、タン、ハラミ、サガリ、カルビ、ロース、新鮮なレバーやハツ、センマイ、ユッケ、キムチとナムル、ざらめと卵のすき焼き風「京都焼き」1,290円、石焼ビビンバ、冷麺、テールスープ、120分飲み放題とご飯おかわり自由の5,000円コース、提供がとても速い。',
      confidence: 'medium', sources: [TB, WEB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6130001070247', R + 'B512810906/', R + 'B514272907/', R + 'B514957377/', R + 'B523808041/', R + 'B524318964/', R + 'B525735691/', R + 'B529530029/', R + 'B532318516/', R + 'B534698280/', R + 'B537168812/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel ordering; no service charge; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区骨屋町152',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007526, 135.758928); cross-checked: GSI 京都府京都市中京区骨屋町152番地 (lot) 13 m; nearest existing record 17.4 m (kyoto_rokkaku_kitchen_109); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514957377/', R + 'B534698280/', R + 'B537168812/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kyoto Yaki (sukiyaki-style beef with egg)', '¥1,290', 'Meat', 'no', 'no', 'April 2026.', 'kyotoyaki'),
      it('', '', 'Kuroge wagyu course, 120 min all-you-can-drink', '¥5,000', 'Courses', 'ask', 'no', 'September 2026; free rice refills.', 'course'),
      it('', '', 'Draft beer', '¥450', 'Drinks', 'no', 'vegan', 'October 2026.', 'beer'),
    ] }, {
    cuisine: 'A4〜A5の黒毛和牛とホルモンを手ごろに (食べログ)・タン、ハラミ、サガリ、カルビ、ロース、新鮮なレバー、ハツ、センマイ、ユッケ、キムチとナムルの盛り合わせ (2025年8月〜2026年10月)・ざらめと卵のすき焼き風「京都焼き」1,290円 (2025年8月、2026年4月)・石焼ビビンバ、冷麺、テールスープ (2026年の口コミ)・120分飲み放題とご飯おかわり自由の5,000円コース (2026年3〜9月)・ソフトドリンク250円から、生ビール450円 (2026年10月)・1人4,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '烏丸六角',
    gf_detail: '要確認。塩タンや素焼きの肉は合う可能性があるが、たれ、京都焼きは醤油、冷麺は小麦 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。和牛とホルモンの焼肉の店。キムチやナムルは副菜のみ (2025〜2026年の口コミ)。',
    notes: '[焼肉・烏丸六角、和牛をお値打ちに] 伏見の人気焼肉店の広い2号店。黒毛和牛と新鮮なホルモンを手ごろに、飲み放題とご飯おかわり自由の5,000円コース、提供の速さも評判。サービス料なし。月曜と第1・第3木曜休み。',
  });
}

// ================================================================ WAGYU KAJIYA 神慈や
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041525/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://lit.link/kyotokajiya';
  const H = day(['11:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_wagyu_kajiya', name: 'WAGYU KAJIYA 神慈や', category: 'OMNI',
    lat: 35.0073853478677, lng: 135.7588069903872, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists gluten-free options, but no dish or method is named; lunch sets include tempura, kara-age and katsu, and fish is grilled with Saikyo miso (Tabelog; 2026 reviews). Confirm when booking.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but none is named; sets and courses centre on wagyu and fish, and the soup is sake-lees (Tabelog; 2026 reviews).',
    hours_raw: 'Daily 11:00–14:30 and 17:00–22:00; closed over the New Year holidays (Tabelog). Reservations accepted via TableCheck and Hot Pepper; lunch fills up, so book (Tabelog; February–July 2026). Cards (VISA, Master, JCB, AMEX, UnionPay), IC cards, iD, QUICPay and QR (PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay) (Tabelog). 49 seats: 1F counter, 2F private and tatami rooms for 2–8; two 2F tatami rooms are kept as kids’ rooms (Tabelog; 2026 reviews). Non-smoking; wheelchair accessible; English menu and English-speaking staff; the manager is a wine sommelier (Tabelog). A renovated machiya said to be about 120 years old (March 2026). Opened 8 July 2024 (Tabelog). 4 min walk from Karasuma-Oike Stn.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Rokkaku',
    cuisine: 'Izakaya of wagyu, fresh seafood and creative Japanese dishes in a renovated machiya, with sake from around Japan and wine (Tabelog) · lunch: weekly set ¥1,600 (grilled sawara in Saikyo miso or yuan-style, pork tenderloin cutlet, oyster-sauce pork) with sashimi, rolled omelette, sake-lees soup and rice chosen by Hachidaime Gihei; Haikara lunch ¥1,750; kara-age set ¥1,500; lunch gozen ¥3,500 with tempura, sashimi and meat (February–November 2026) · ¥5,500 course in a three-tier box with obanzai, roast-beef salad, sashimi and kuroge wagyu shabu-shabu (January 2026) · own brand of kuroge wagyu, Kajiya beef (March 2026) · lunch about ¥1,000–2,000, dinner about ¥5,000–6,000 (Tabelog)',
    website: WEB, gmaps: gm('WAGYU KAJIYA 神慈や 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Wagyu and seafood izakaya · Karasuma-Rokkaku] A calm, high-ceilinged machiya: good weekly lunch sets with sashimi and sake-lees soup, and evening courses of the house’s own Kajiya wagyu shabu-shabu with sake or sommelier-picked wine. Tabelog lists GF and vegetarian options — ask. Kids’ tatami rooms upstairs.',
    chef_bio: { chef_name: null, roles: ['Manager and wine sommelier (unnamed)', 'Kitchen staff'], origin: null,
      background: 'Per Tabelog: an izakaya in a renovated Kyoto townhouse, opened 8 July 2024, run by 株式会社mulberry (NTA invoice register) and proud of fresh seafood, wagyu and creative dishes, with a sommelier manager. Reviewers in 2026 describe the house brand of kuroge wagyu, Kajiya beef, rice chosen by Hachidaime Gihei, and a friendly owner.',
      philosophy: null, specialty: 'Kajiya wagyu shabu-shabu; weekly lunch set.',
      anecdotes: [
        { text: 'A January 2026 group in the back room upstairs could not finish the ¥5,500 course of a three-tier box and wagyu shabu-shabu.', source: R + 'B521990884/' },
        { text: 'A March 2026 diner came because the queue at a neighbouring set-meal shop was too long, and found a weekly set with grilled sawara and sake-lees soup.', source: R + 'B524340354/' },
        { text: 'A July 2026 guest heard stories of the Gion Matsuri from the staff, and later found a forgotten hat kept safe.', source: R + 'B535549526/' },
      ],
      japanese_sources_summary: '食べログ: 牛料理・居酒屋、中京区骨屋町150-1、烏丸御池駅から徒歩4分、毎日 11:00〜14:30、17:00〜22:00、年末年始休み、予約可 (TableCheck・ホットペッパー)、カード (VISA・Master・JCB・AMEX・銀聯)・交通系IC・iD・QUICPay・QR (PayPay・d払い・楽天ペイ・au PAY・Alipay・WeChat Pay) 可、49席、個室 (2・4・8名)、禁煙、車いす可、英語のメニューとスタッフ、ソムリエの店長、野菜・魚にこだわり、ベジタリアンとグルテンフリーの選択肢あり、2階の座敷2室は子ども部屋、2024年7月8日開店。インボイス登録は株式会社mulberry (国税庁)。口コミ (2026年1月〜11月、英語): 築120年ほどの町家、週替わり定食1,600円 (西京焼きの鰆など、刺身、だし巻き、粕汁、Hachidaime Gihei のご飯)、Haikara ランチ1,750円、唐揚げ定食1,500円、昼の御膳3,500円、5,500円のコース (三段の松花堂、黒毛和牛のしゃぶしゃぶ)、自社ブランドの黒毛和牛 Kajiya 牛、気さくな店主。',
      confidence: 'medium', sources: [TB, WEB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1370001047630', R + 'B521990884/', R + 'B523372425/', R + 'B524340354/', R + 'B525271657/', R + 'B525804798/', R + 'B526892728/', R + 'B527605516/', R + 'B532262533/', R + 'B535549526/', R + 'B538645904/'] },
    cultural_comfort: { level: 'english', note: 'English menu and staff; book lunch; ask about GF and vegetarian options.' },
    safety: { ...SAFETY0, positives: ['Tabelog lists gluten-free and vegetarian options'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区骨屋町150-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007385, 135.758807); cross-checked: GSI 京都府京都市中京区骨屋町150番地 (lot) 24 m; nearest existing record 5.0 m (kyoto_rokkaku_kitchen_109, next lot 150-2); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525271657/', R + 'B523372425/', R + 'B532262533/', R + 'B527605516/', R + 'B521990884/'],
    price_note: 'Prices from January–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Weekly special set (lunch)', '¥1,600', 'Lunch', 'ask', 'no', 'March 2026.', 'weekly'),
      it('', '', 'Haikara lunch', '¥1,750', 'Lunch', 'no', 'no', 'February 2026; shrimp tempura and minced cutlet.', 'haikara'),
      it('', '', 'Kara-age set (lunch)', '¥1,500', 'Lunch', 'no', 'no', 'July 2026.', 'karaage'),
      it('', '', 'Lunch gozen', '¥3,500', 'Lunch', 'no', 'no', 'May 2026.', 'gozen'),
      it('', '', 'Course with wagyu shabu-shabu', '¥5,500', 'Courses', 'ask', 'no', 'January 2026.', 'course'),
    ] }, {
    cuisine: '改装した町家で和牛、新鮮な魚介、創作料理、全国の日本酒とワインの居酒屋 (食べログ)・昼は週替わり定食1,600円 (西京焼きの鰆、幽庵焼き、ヒレカツ、豚のオイスター炒めなど、刺身、だし巻き、粕汁、Hachidaime Gihei のご飯)、Haikara ランチ1,750円、唐揚げ定食1,500円、天ぷら・刺身・肉の御膳3,500円 (2026年2〜11月)・三段の松花堂におばんざい、ローストビーフのサラダ、刺身、黒毛和牛のしゃぶしゃぶの5,500円のコース (2026年1月)・自社ブランドの黒毛和牛 Kajiya 牛 (2026年3月)・昼1,000〜2,000円ほど、夜5,000〜6,000円ほど (食べログ)',
    neighborhood: '烏丸六角',
    gf_detail: '要確認。食べログにグルテンフリーの選択肢ありとあるが料理や方法の記載はない。昼は天ぷら、唐揚げ、カツ、魚は西京味噌の焼き物 (食べログ、2026年の口コミ)。予約時に確認を。',
    vegan_detail: '要確認。食べログにベジタリアンの選択肢ありとあるが料理の記載はない。定食とコースは和牛と魚が中心、汁は粕汁 (食べログ、2026年の口コミ)。',
    notes: '[和牛と魚介の居酒屋・烏丸六角] 天井の高い落ち着いた町家。刺身と粕汁の付くお得な週替わりの昼、夜は自社の Kajiya 和牛のしゃぶしゃぶのコースに日本酒やソムリエのワイン。食べログにグルテンフリーとベジタリアンの選択肢あり、要確認。2階に子ども向けの座敷。',
  });
}

// ================================================================ CURRY SHOP FAMILY 屋台0号店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042545/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://rmeet-kyoto.com/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_curry_shop_family_yatai', name: 'CURRY SHOP FAMILY 屋台0号店', category: 'OMNI',
    lat: 35.00128041933448, lng: 135.75800767808732, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: breaded tonkatsu and chicken katsu; the curry roux is not described as flour-free (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: curry made with bonito, beef-bone and chicken stocks and minced chicken (Tabelog; 2026 reviews).',
    hours_raw: 'Thursday–Tuesday 17:00–22:00; closed Wednesday (Tabelog). Some reviewers describe lunchtime visits (November 2025; July 2026), so midday opening may vary. No reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 5 places: 3 counter seats plus standing room; non-smoking; English menu with photos; take-out, which comes without the egg (Tabelog; December 2025). Formerly Stefan Curry, renamed by December 2025 (December 2025 reviews). Opened 6 February 2025 (Tabelog). Yokoyama Building 1F, Muromachi-Bukkoji; 5 min walk from Shijo or Karasuma Stn.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Muromachi-Bukkoji, near Shijo-Karasuma',
    cuisine: 'Old-style yatai curry of the Roji-oku roast-beef group: original spice blend with bonito, beef-bone and chicken paitan stocks and minced chicken, mild and homely (Tabelog; 2025–2026 reviews) · Family chicken katsu curry ¥1,280, Family tonkatsu curry ¥1,480, Wagyu roast beef curry; egg yolk on top, saffron or turmeric rice, sizes S to BL (large +¥120), cheese +¥100 (August 2025–May 2026) · highball ¥700 (March 2026) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('CURRY SHOP FAMILY 屋台0号店'), menu_url: null,
    notes: '[Curry stand · Muromachi-Bukkoji] A tiny three-seat yatai-style counter from the Roji-oku roast-beef group: mild, dashi-rich minced-chicken curry topped with egg yolk, with crisp chicken katsu, tonkatsu or wagyu roast beef. Evenings; take-out too. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Counter staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a curry shop from the Roji-oku group (合同会社Rミート, rmeet-kyoto.com), upgrading Roji-oku’s popular curry into an old-fashioned yatai curry; opened 6 February 2025 as Stefan Curry and since renamed CURRY SHOP FAMILY; the larger main shop is near Shichijo Station (2025–2026 reviews).',
      philosophy: null, specialty: 'Family chicken katsu curry; Wagyu roast beef curry.',
      anecdotes: [
        { text: 'A December 2025 regular back for the chicken katsu curry found the name changed but the curry as good, and took it home when the three seats were full.', source: R + 'B516272266/' },
        { text: 'A March 2026 diner learned from the friendly staff that the stand is part of the same group as nearby Roji-oku — hence the roast beef curry.', source: R + 'B523620156/' },
        { text: 'An August 2025 visitor’s first Kyoto lunch was roast beef curry topped with tonkatsu, cheese and spinach.', source: R + 'B512455436/' },
      ],
      japanese_sources_summary: '食べログ: カレー・バル・とんかつ、下京区糸屋町229 横山ビル 1F、四条駅・烏丸駅26番出口から徒歩5分、木〜火 17:00〜22:00、水曜休み、予約不可、カード (VISA・Master・JCB・AMEX・Diners)・PayPay 可、電子マネー不可、5席 (カウンター3席と立ち)、禁煙、英語の写真付きメニュー、テイクアウト可、2025年2月6日開店、紹介文 (英訳): ローストビーフの Roji-oku グループのカレー専門店、オリジナルのスパイスとかつお・牛骨・鶏白湯のだしの昔ながらの屋台カレー。口コミ (2025年3月〜2026年5月、英語): 旧店名 Stefan Curry、ファミリーチキンカツカレー1,280円、ファミリーとんかつカレー1,480円、大盛り120円、チーズ100円、和牛ローストビーフカレー、卵黄のせ、サフランやターメリックのライス、やさしい辛さ、七条駅近くに本店。',
      confidence: 'medium', sources: [TB, WEB, R + 'B502226972/', R + 'B512132695/', R + 'B512455436/', R + 'B514331977/', R + 'B516272266/', R + 'B518767680/', R + 'B523620156/', R + 'B525720472/', R + 'B528461575/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Three seats plus standing; English photo menu; take-out.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区糸屋町229 横山ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (35.001280, 135.758008); GSI matches only the town 糸屋町 (53 m), so the Tabelog pin is kept unconfirmed; nearest existing record 22.6 m (kyoto_kushi_teppan_zoronpa); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518767680/', R + 'B525720472/'],
    price_note: 'Prices from December 2025 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Family chicken katsu curry', '¥1,280', 'Curry', 'no', 'no', 'December 2025; March 2026.', 'chickenkatsu'),
      it('', '', 'Family tonkatsu curry', '¥1,480', 'Curry', 'no', 'no', 'March 2026; cheese +¥100.', 'tonkatsu'),
    ] }, {
    cuisine: 'ローストビーフの Roji-oku グループの昔ながらの屋台カレー: オリジナルのスパイスとかつお・牛骨・鶏白湯のだし、鶏ひき肉のやさしい家庭的な味 (食べログ、2025〜2026年の口コミ)・ファミリーチキンカツカレー1,280円、ファミリーとんかつカレー1,480円、和牛ローストビーフカレー、卵黄のせ、サフランやターメリックのライス、S〜BL のサイズ (大盛り120円)、チーズ100円 (2025年8月〜2026年5月)・ハイボール700円 (2026年3月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '室町仏光寺、四条烏丸の近く',
    gf_detail: 'グルテンフリー不可。衣のとんかつとチキンカツ。ルウが小麦不使用との記載はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。かつお・牛骨・鶏のだしと鶏ひき肉のカレー (食べログ、2026年の口コミ)。',
    notes: '[カレーの屋台・室町仏光寺] ローストビーフの Roji-oku グループの3席の屋台風カウンター。だしのきいた鶏ひき肉のやさしいカレーに卵黄、サクサクのチキンカツ、とんかつ、和牛ローストビーフ。夜の営業、テイクアウトも。水曜休み。',
  });
}

// ================================================================ 食堂はやし Shokudo Hayashi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26010925/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://shokudo-hayashi.com/index.html';
  const H = day(['11:00', '15:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_shokudo_hayashi', name: '食堂はやし (Shokudo Hayashi)', category: 'OMNI',
    lat: 35.00880263787297, lng: 135.77816148038795, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a diner of breaded cutlets, fries, udon and ramen with sweet demi-glace and soy sauces (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fish set meals with fried egg and sausage (2026 reviews).',
    hours_raw: 'Monday–Saturday 11:00–15:00 and 17:00–21:30; closed Sunday; hours may change (Tabelog). No reservations; full at lunch and on event days near Miyako Messe and Heian Shrine, with weekend evenings busy too (March–October 2026). Cash only — no cards, e-money or QR (Tabelog). 35 seats at six tables; non-smoking; children welcome (Tabelog). Walls covered in visitors’ signatures and messages, a Showa-era feel (May–October 2026). 2 min walk from Higashiyama Stn.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Sanjo',
    cuisine: 'Old neighbourhood diner where every dish comes in a large portion (official site) · tonkatsu set ¥1,050 — two cutlets with house demi-glace or sesame, miso or grated-radish ponzu sauce; chicken katsu set ¥1,050; big hamburg set ¥950; big minced cutlet set ¥950 with fried egg and sausage; white fish fry and croquette ¥880; sesame chicken set about ¥1,000; crisp kara-age (March–November 2026) · omurice ¥650 (official site) · udon from ¥550, zaru ramen ¥650, seafood mix set ¥950 (September 2026) · about ¥1,000 a head (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('食堂はやし 東山三条'), menu_url: WEB,
    notes: '[Diner · Higashiyama-Sanjo, cash only] A beloved old shokudo with signature-covered walls: two-cutlet tonkatsu with a choice of sauces for ¥1,050, big hamburg and minced-cutlet plates, omurice and udon, all in big portions at old prices. No bookings; cash only. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Kitchen staff'], origin: null,
      background: 'Per reviewers: a Higashiyama-Sanjo diner said to have been around for over 70 years (October 2026), loved by students, locals and visitors, with walls covered in messages from famous guests (May–September 2026). A March 2026 reviewer found the owner — as rumoured, beautiful — running the busy floor single-handed; three staff handle the long menu, with young staff added (September–October 2026).',
      philosophy: 'Every dish in a large portion (official site).', specialty: 'Tonkatsu set with demi-glace.',
      anecdotes: [
        { text: 'An October 2026 visitor who ate here as a student around Higashiyama-Sanjo returned for the crisp chicken kara-age at a diner of over 70 years.', source: R + 'B537977289/' },
        { text: 'A September 2026 couple arrived just before 2 p.m. during the Kyoto Manga festival and were squeezed into a cleared table at the back.', source: R + 'B535842682/' },
        { text: 'Two diners in September and October 2026 came because the queue at Marushin Hanten nearby was too long.', source: R + 'B509137149/' },
      ],
      japanese_sources_summary: '食べログ: 食堂、東山区東大路三条下る北木之元町523、地下鉄東山駅から徒歩2分、月〜土 11:00〜15:00、17:00〜21:30、日曜休み、予約不可、カード・電子マネー・QR 不可、6卓35席、禁煙、子ども可。公式サイト: 「メニューは全部大盛り、ボリューム満点！」、「人気のオムライスは、ガッツリ食べたい方にも満足頂ける大きさで650円とリーズナブル。」。口コミ (2026年3月〜11月、英語): 70年以上続く食堂 (2026年10月)、壁一面のサインやメッセージ、昭和の雰囲気、とんかつ定食1,050円 (2枚、デミグラスやごま・みそ・おろしポン酢)、チキンカツ定食1,050円、ビッグハンバーグ定食950円、ビッグミンチカツ定食950円、白身フライとコロッケ880円、ごまチキン定食、唐揚げ、うどん550円から、ざるラーメン650円、海鮮ミックス定食950円、学生や常連や観光客、昼はいつも満席。',
      confidence: 'medium', sources: [TB, WEB, R + 'B503191212/', R + 'B509137149/', R + 'B521297417/', R + 'B525002517/', R + 'B528944512/', R + 'B535220276/', R + 'B535842682/', R + 'B536177154/', R + 'B537625752/', R + 'B537977289/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; no bookings; busy at lunch.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区東大路三条下る北木之元町523',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008803, 135.778161); cross-checked: GSI 京都府京都市東山区北木之元町523番地 (lot) 20 m; nearest existing record 28.0 m (mp_marushin_hanten); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB, R + 'B535842682/', R + 'B509137149/', R + 'B521297417/'],
    price_note: 'Prices from the official site and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tonkatsu set (two cutlets, choice of sauce)', '¥1,050', 'Set meals', 'no', 'no', 'September 2026.', 'tonkatsu'),
      it('', '', 'Omurice', '¥650', 'Rice', 'ask', 'no', 'Official site.', 'omurice'),
      it('', '', 'Big hamburg set', '¥950', 'Set meals', 'no', 'no', 'September 2026.', 'hamburg'),
      it('', '', 'White fish fry and croquette set', '¥880', 'Set meals', 'no', 'no', 'October 2026.', 'fishfry'),
    ] }, {
    cuisine: 'メニューは全部大盛りの町の食堂 (公式サイト)・2枚のとんかつにデミグラスかごま・みそ・おろしポン酢のとんかつ定食1,050円、チキンカツ定食1,050円、ビッグハンバーグ定食950円、目玉焼きとソーセージのビッグミンチカツ定食950円、白身フライとコロッケ880円、ごまチキン定食1,000円ほど、カリッとした唐揚げ (2026年3〜11月)・オムライス650円 (公式サイト)・うどん550円から、ざるラーメン650円、海鮮ミックス定食950円 (2026年9月)・1人1,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '東山三条',
    gf_detail: 'グルテンフリー不可。衣のカツ、フライ、うどん、ラーメンに甘めのデミグラスや醤油 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と魚の定食に目玉焼きとソーセージ (2026年の口コミ)。',
    notes: '[食堂・東山三条、現金のみ] 壁一面のサインの愛される老舗の食堂。ソースを選べる2枚の1,050円のとんかつ定食、大きなハンバーグやミンチカツ、オムライス、うどんを大盛りで昔ながらの値段に。予約不可、現金のみ。日曜休み。',
  });
}

// ================================================================ 京都円山 天正 Kyoto Maruyama Tensho
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035621/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://0029.jp/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_maruyama_tensho', name: '京都円山 天正 (Kyoto Maruyama Tensho)', category: 'OMNI',
    lat: 35.00437621647322, lng: 135.7801898385429, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled wagyu and steak may suit, but sukiyaki warishita, yukhoe and sauces use soy (2021–2024 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu yakiniku and sukiyaki courses (2021–2024 reviews).',
    hours_raw: 'Thursday–Tuesday and holidays 17:00–22:00 (last order 21:30); closed Wednesday (Tabelog). Book dinner by the day before; groups of 8+ get a confirmation call by noon the day before, and unreachable bookings are cancelled (Tabelog). Earlier reviewers had lunch courses (2021–2025), but Tabelog now lists dinner only, with a renewal-opening campaign. No service charge (Tabelog original サービス、チャージ料なし). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 34 seats: 8 at the counter, private rooms for 4–30 and the whole building for hire; wheelchair accessible; menus in English, Chinese and Korean, English-speaking staff, kids’ menu (Tabelog). Inside Maruyama Park along a stone path; about 5 min by car from Higashiyama Stn (Tabelog; December 2022). Opened 31 March 2021 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park',
    cuisine: 'Kuroge wagyu yakiniku and sukiyaki courses in a building inside Maruyama Park (Tabelog; 2021–2024 reviews) · courses from Ume up to the top course, about ¥9,000 and more: meat sushi, yukhoe with egg yolk, A4–A5 steak and tongue grilled by the staff, sukiyaki, glossy clay-pot rice to finish (December 2021–December 2024) · four-cut wagyu lunch (June 2025) · dinner from about ¥5,000–6,000 (Tabelog)',
    website: WEB, gmaps: gm('京都円山 天正'), menu_url: null,
    notes: '[Wagyu yakiniku and sukiyaki · inside Maruyama Park] A stylish two-storey house reached by a stone path in Maruyama Park, serving wagyu courses — meat sushi, yukhoe, staff-grilled steak and tongue or sukiyaki, then clay-pot rice — in private rooms with park views. Dinner only now; book the day before. No service charge. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Manager (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog and the official site: a wagyu yakiniku and sukiyaki restaurant inside Maruyama Park, opened 31 March 2021, run by 有限会社アダチコーポレーション (NTA invoice register; 0029.jp also links an online meat shop). Reviewers describe a still-new building, private rooms on the second floor overlooking the park, and staff who grill at the table (2021–2024).',
      philosophy: null, specialty: 'Wagyu courses; clay-pot rice.',
      anecdotes: [
        { text: 'A December 2022 diner who thought Kyoto held no more surprises found a yakiniku house inside Maruyama Park, reached by a stone path.', source: R + 'B458132514/' },
        { text: 'A March 2024 family’s sukiyaki course opened with meat sushi, the highlight, then yukhoe with egg yolk.', source: R + 'B481002531/' },
        { text: 'A November 2024 couple on the Ume course got a birthday plate in a second-floor private room.', source: R + 'B496401584/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・すき焼き・日本料理、東山区祇園町北側461 (円山公園内)、木〜火・祝日 17:00〜22:00 (L.O.21:30)、水曜休み、夜は前日までに予約、8名以上は前日正午までに確認の電話、サービス、チャージ料なし、カード (VISA・Master・JCB・AMEX・Diners)・PayPay 可、電子マネー不可、34席 (カウンター8席、4〜30名の個室、一棟貸切可)、車いす可、英中韓のメニュー、英語のスタッフ、子どもメニュー、2021年3月31日開店、リニューアルオープンのキャンペーン中。公式サイト 0029.jp: 京都円山 天正、京都府京都市東山区祇園町北側338番地 (円山公園内)、オンラインショップ。インボイス登録は有限会社アダチコーポレーション (国税庁)。口コミ (2021年12月〜2025年6月、英語): 石畳の先の円山公園の中の店、2階の個室から公園の緑、肉寿司、卵黄のユッケ、A4〜A5のステーキやタンを店の人が焼く、すき焼き、土鍋ごはん、梅コース、9,000円のコース、昼の焼肉ランチ (2021年、2025年6月)。',
      confidence: 'low', sources: [TB, WEB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1130002018019', R + 'B443642196/', R + 'B458132514/', R + 'B479564634/', R + 'B481002531/', R + 'B482091017/', R + 'B485254167/', R + 'B488247886/', R + 'B490058123/', R + 'B496401584/', R + 'B497824163/'] },
    cultural_comfort: { level: 'english', note: 'English menu and staff; book by the day before; no service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側461',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (renewal campaign) and official site; latest review June 2025.' },
    pin_source: `Tabelog ${TB} (35.004376, 135.780190); cross-checked: GSI 京都府京都市東山区祇園町北側461番地 (lot) 38 m; the official site gives 祇園町北側338番地 (円山公園内), a large park lot whose GSI point is 399 m off, so the Tabelog pin is kept; nearest existing record 48.7 m (Ikkyu-an); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B497824163/', R + 'B496401584/'],
    price_note: 'Price from a December 2024 review; dinner only now.', last_checked: TODAY, items: [
      it('', '', 'Wagyu course', '¥9,000', 'Courses', 'ask', 'no', 'December 2024.', 'course'),
    ] }, {
    cuisine: '円山公園の中の建物で黒毛和牛の焼肉とすき焼きのコース (食べログ、2021〜2024年の口コミ)・梅から上のコースまで9,000円ほどから: 肉寿司、卵黄のユッケ、店の人が焼くA4〜A5のステーキとタン、すき焼き、つややかな土鍋ごはん (2021年12月〜2024年12月)・4種の和牛の昼 (2025年6月)・夜5,000〜6,000円ほどから (食べログ)',
    neighborhood: '円山公園',
    gf_detail: '要確認。焼いた和牛やステーキは合う可能性があるが、すき焼きの割下、ユッケ、たれは醤油 (2021〜2024年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉とすき焼きのコース (2021〜2024年の口コミ)。',
    notes: '[和牛の焼肉とすき焼き・円山公園の中] 円山公園の石畳の先のおしゃれな2階建て。肉寿司、ユッケ、店の人が焼くステーキやタン、またはすき焼き、しめの土鍋ごはんの和牛のコースを公園の見える個室で。今は夜のみ、前日までに予約を。サービス料なし。水曜休み。',
  });
}

save();
