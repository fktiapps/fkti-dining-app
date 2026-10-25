// Ginza Station half-mile sweep (805 m), batch 94 — all-genre phase (all OMNI).
//   + 碧 銀座三越 (Heki: Ginza branch of an Okinawan teppanyaki steakhouse)
//   + 焼肉とかすうどん 龍の巣 銀座七丁目 G7 (Yamagata-beef yakiniku and kasu udon to 5 am)
//   + ENOTECA GARBINO (basement Italian with Kumamoto wagyu and 100+ wines)
//   + ビストロ オザミ (GINZA SIX 6F Paris-style bistro, prix-fixe)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 碧 銀座三越
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13116038/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '16:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_heki_ginza_mitsukoshi', name: '碧 銀座三越 (Heki)', category: 'OMNI',
    lat: 35.670832, lng: 139.765948,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Okinawan-style teppanyaki: Wagyu, Kumejima prawns, teppan vegetables and tofu, goya champuru and garlic rice; a kuruma-ebi senbei also appears. No source mentions seasonings or gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: steak and prawn sets; goya champuru normally contains egg and pork and is not described here.',
    hours_raw: 'Daily 11:00–16:00 (L.O. 15:00) and 17:00–22:00 (L.O. 20:30); closed 1 Jan and Mitsukoshi closing days (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Mitsukoshi 12F, Ginza 4-chōme — 3 min from Ginza Stn',
    cuisine: 'Okinawan teppanyaki steakhouse · Wagyu sirloin and fillet, Kumejima prawns · goya champuru, purple sweet potato, green papaya · lunch from ¥4,200 · Orion beer', cuisine_type: 'other',
    website: null, gmaps: gm('碧 銀座三越 鉄板焼'), menu_url: null,
    notes: "[Teppanyaki · Okinawa on the Mitsukoshi top floors] The Ginza branch, since 2010, of a steakhouse from Okinawa, on the 12th floor of Ginza Mitsukoshi, with 40 seats (5 at the counter) and blue tableware. Many staff are from Okinawa too. Chefs grill Wagyu sirloin or fillet, Kumejima prawns, vegetables and tofu in front of you, with Okinawan touches: a green papaya starter, purple sweet potato, goya champuru, sanpin tea and a zenzai topped with shaved ice. Lunch starts at ¥4,200 (a thigh-steak set with salad, teppan vegetables, tofu, champuru, rice and dessert), with Orion beer at ¥900 and garlic rice extra. Service is attentive.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 September 2010 (Tabelog); Ginza branch of an Okinawan steakhouse (2026 reviews)', background: 'Branch; staff largely from Okinawa (June 2026 review).', philosophy: null, specialty: 'Wagyu teppanyaki with Okinawan sides.',
      anecdotes: [
        { text: '"This is the Ginza branch of a steakhouse from Okinawa. Many of the staff are also from Okinawa… The sides, including purple sweet potato and Goya Champuru, added a nice Okinawan touch." — June 2026.', source: R + 'B529949407/' },
        { text: '"Lunch starts from JPY 4200… I ordered the thigh steak lunch (JPY 4200) plus an Orion beer (JPY 900)." — September 2026.', source: R + 'B535086113/' },
      ],
      japanese_sources_summary: '食べログ: 碧 銀座三越、銀座4-6-16 銀座三越12F、40席(テーブル35・カウンター5)、8名個室、毎日11:00〜16:00(L.O. 15:00)・17:00〜22:00(L.O. 20:30)、1/1と三越の休館日は休み、子ども可、2010年9月10日開店。2026年の口コミ: 沖縄のステーキ店の銀座店、スタッフも沖縄出身が多い、和牛サーロイン、久米島の海老、車海老せんべい、紅芋、ゴーヤーチャンプルー、かき氷のぜんざい、黒毛和牛ヒレ80g、青パパイヤの前菜、青い器、さんぴん茶、ガーリックライスは追加料金、ランチは4,200円から(もも肉ステーキ)、オリオンビール900円、青森のにんにく。',
      confidence: 'medium', sources: [TB, R + 'B529949407/', R + 'B535086113/', R + 'B532530575/', R + 'B534376808/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant floor.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-6-16 銀座三越 12F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都中央区銀座四丁目6番16号 (go) is 89m off for the large Mitsukoshi block, so the Tabelog pin is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535086113/'],
    price_note: 'Lunch and beer prices from a September 2026 review.', last_checked: TODAY, items: [
      it('もも肉ステーキランチ', '', 'Thigh-steak lunch: papaya starter, salad, teppan vegetables and tofu, champuru, rice, dessert', '¥4,200', 'Lunch', 'ask', 'no', 'September 2026.', 'thigh_lunch'),
      it('サーロインステーキ', '', 'Wagyu sirloin steak', '', 'Steak', 'ask', 'no', '', 'sirloin'),
      it('久米島の海老', '', 'Kumejima prawns', '', 'Seafood', 'ask', 'no', '', 'kumejima_ebi'),
      it('オリオンビール', '', 'Orion beer', '¥900', 'Drinks', 'no', 'ask', 'September 2026.', 'orion'),
    ] }, {
    cuisine: '沖縄の鉄板焼きステーキ店・和牛サーロインやヒレ、久米島の海老・ゴーヤーチャンプルー、紅芋、青パパイヤ・ランチは4,200円から・オリオンビール',
    neighborhood: '銀座四丁目、銀座三越12F。銀座駅から徒歩3分',
    gf_detail: '要確認。和牛、久米島の海老、鉄板焼きの野菜と豆腐、ゴーヤーチャンプルー、ガーリックライスの沖縄風鉄板焼きで、車海老せんべいも。味付けやグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。ステーキと海老のセット。ゴーヤーチャンプルーは普通卵と豚肉を使い、ここでの中身は書かれていません。',
    notes: '[鉄板焼き・三越の上階で沖縄] 2010年から銀座三越12階にある沖縄のステーキ店の銀座店で、40席(カウンター5)、器は青。スタッフも沖縄出身が多いそうです。和牛のサーロインやヒレ、久米島の海老、野菜や豆腐を目の前で焼き、青パパイヤの前菜、紅芋、ゴーヤーチャンプルー、さんぴん茶、かき氷をのせたぜんざいと沖縄らしさも。ランチは4,200円から(もも肉ステーキにサラダ、鉄板焼きの野菜と豆腐、チャンプルー、ご飯、デザート)、オリオンビールは900円、ガーリックライスは追加料金。接客は気が利きます。',
  });
}

// ================================================================ 焼肉とかすうどん 龍の巣 銀座七丁目 G7
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13254195/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['17:00', '05:00']); const sun = day(['17:00', '00:00']);
  put({
    id: 'tokyo_ryunosu_ginza7_g7', name: '焼肉とかすうどん 龍の巣 銀座七丁目 G7 (Ryunosu)', category: 'OMNI',
    lat: 35.67066, lng: 139.760438,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the signature finish is kasu udon (wheat noodles); the yakiniku sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Yamagata beef yakiniku, offal, and udon with kasu (deep-fried beef offal).',
    hours_raw: 'Mon–Sat 17:00–05:00 (L.O. 04:30); Sun and holidays 17:00–24:00 (L.O. 23:30); open year-round (Tabelog). Heated-tobacco smoking area only.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: wd, 6: sun }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme by Corridor-gai (7-2-8) — 5 min from Ginza Stn exit C2 or Shimbashi',
    cuisine: 'Yamagata-beef yakiniku with wine · thin-sliced negi tongue, ura-harami, fresh liver · famous kasu udon to finish · counter for solo diners · open to 5 am', cuisine_type: 'other',
    website: 'https://www.ryu-nosu.co.jp/', gmaps: gm('焼肉とかすうどん 龍の巣 銀座七丁目 G7'), menu_url: null,
    notes: "[Yakiniku · Yamagata beef and kasu udon till dawn] A stylish 40-seat yakiniku off Corridor-gai, open since 2020, serving carefully chosen Yamagata beef with plenty of wines by the glass, plus a wine-guessing game for fun. Big counters make it easy alone. Regulars sear the tender tongue fast and order thin-sliced negi tongue (¥1,780), ura-harami (¥1,780) and fresh liver (¥1,280). Everyone finishes with the famous kasu udon, its broth deepened by roasty kasu (deep-fried beef offal); some come just for that after drinks. Open until 5 am except Sundays; busy and cheerful.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 December 2020 (Tabelog)', background: 'Multi-shop (ryu-nosu.co.jp).', philosophy: null, specialty: 'Yamagata beef; kasu udon.',
      anecdotes: [
        { text: '"When it comes to Ryunosu, you can\'t miss the kasu udon. The savory taste of the meat and the roasted aroma of the \'kasu\' blend perfectly into the broth." — August 2026, third visit.', source: R + 'B534159213/' },
        { text: '"Appetizer Set: JPY 1,080 – Ura Harami: JPY 1,780 – Bean Sprout Namul: JPY 580 – Thinly Sliced Negi Akami Tongue: JPY 1,780 – Fresh Liver: JPY 1,280" — August 2026.', source: R + 'B534702165/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉とかすうどん 龍の巣 銀座七丁目 G7、銀座7-2-8、銀座駅C2出口・新橋駅銀座口から徒歩5分、40席(カウンター20など、半個室1)、月〜土17:00〜翌5:00、日祝17:00〜24:00、年中無休、加熱式たばこのみの喫煙所、子ども可、2020年12月21日開店、公式サイト ryu-nosu.co.jp。店の紹介: 厳選した山形牛とグラスワイン、広いカウンターで一人でも、半個室と大きなテーブル。2026年の口コミ: やわらかいタン、名物かすうどん、ワインの銘柄当てゲーム、お通しセット1,080円、裏ハラミ1,780円、もやしナムル580円、薄切りネギ赤身タン1,780円、生レバー1,280円、飲んだ後の締めに、深夜営業、明るいスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B534159213/', R + 'B534702165/', R + 'B535904622/', R + 'B536399849/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seating suits solo diners.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目2番8号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534702165/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('かすうどん', 'kasu udon', 'Kasu udon (udon with deep-fried beef offal)', '', 'Noodles', 'no', 'no', 'Signature.', 'kasu_udon'),
      it('薄切りネギ赤身タン', '', 'Thin-sliced negi lean tongue', '¥1,780', 'Yakiniku', 'ask', 'no', 'August 2026.', 'negi_tan'),
      it('裏ハラミ', 'ura harami', 'Ura-harami (inner skirt)', '¥1,780', 'Yakiniku', 'ask', 'no', 'August 2026.', 'ura_harami'),
      it('生レバー', '', 'Fresh liver', '¥1,280', 'Yakiniku', 'ask', 'no', 'August 2026.', 'liver'),
      it('もやしナムル', '', 'Bean-sprout namul', '¥580', 'Sides', 'ask', 'ask', 'August 2026.', 'namul'),
    ] }, {
    cuisine: '山形牛の焼肉とワイン・薄切りネギタン、裏ハラミ、生レバー・締めの名物かすうどん・一人でもカウンター・朝5時まで',
    neighborhood: '銀座七丁目、コリドー街そば(7-2-8)。銀座駅C2出口・新橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。看板の締めはかすうどん(小麦の麺)で、焼肉のたれも書かれていません。',
    vegan_detail: 'ヴィーガンではありません。山形牛の焼肉、ホルモン、油かす(牛ホルモンの揚げたもの)入りのうどん。',
    notes: '[焼肉・山形牛とかすうどんを明け方まで] 2020年開店、コリドー街近くのおしゃれな40席の焼肉店で、厳選した山形牛を豊富なグラスワインとともに。ワインの銘柄当てゲームも楽しめます。広いカウンターで一人でも入りやすい店。常連はやわらかいタンをさっと炙り、薄切りネギタン(1,780円)、裏ハラミ(1,780円)、生レバー(1,280円)を。締めは誰もが頼む名物のかすうどんで、炙った油かすがだしに深みを加えます。飲んだ後にこれだけを食べに来る人も。日曜以外は朝5時まで、にぎやかで明るい店です。',
  });
}

// ================================================================ ENOTECA GARBINO
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13260487/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:30', '14:30'], ['18:00', '23:00']); const sat = day(['11:30', '14:30'], ['18:00', '22:00']);
  put({
    id: 'tokyo_enoteca_garbino_ginza', name: 'ENOTECA GARBINO (エノテカ ガルビーノ)', category: 'OMNI',
    lat: 35.672799, lng: 139.765096,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Italian courses with carpaccio, Kumamoto wagyu, Sasuke pork, red-wine braise and truffle pasta; lunch is pasta (such as orecchiette). No source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, pork, mortadella, seafood.',
    hours_raw: 'Mon–Fri 11:30–14:30 (food L.O. 14:00) and 18:00–22:00, bar to 23:00; Sat 11:30–14:30 and 18:00–22:00; holidays and eves to 23:30; closed Sundays; after 20:30 bar snacks only (Tabelog). No lunch bookings. Dinner table charge ¥400.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: sat }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Ginza Building B1F, down a back-street stair — 1 min from Ginza Stn exit C8',
    cuisine: 'Basement Italian wine bar · Kumamoto black wagyu "Wao", Iwate Sasuke pork · truffle pasta, sea-bass carpaccio · 100+ Italian and French wines (10 by the glass) · private room for up to 16', cuisine_type: 'other',
    website: 'https://garbino-ginza.com/', gmaps: gm('ENOTECA GARBINO 銀座'), menu_url: null,
    notes: "[Italian · a basement wine cellar a minute from Ginza Station] A back-street basement Italian, open since 2021 and recently reopened after renovation. It cooks Kumamoto black wagyu \"Wao\", Sasuke pork sent direct from Kuji Farm in Iwate, fisherman-direct seafood and seasonal vegetables, matched to a cellar of over 100 Italian and French wines (10 by the glass). Diners mention sea-bass carpaccio with edible flowers, mortadella and Sasuke pork, fried scallops topped with caviar, truffle-laden pasta and a red-wine braise; lunch brings a loaded salad and pasta such as orecchiette. Courses must be chosen in advance. Private room for up to 16; ¥400 dinner table charge; no lunch bookings.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 21 June 2021 (Tabelog); reopened after renovation (July 2026 review)', background: 'No source names the operator.', philosophy: null, specialty: 'Kumamoto wagyu; wine.',
      anecdotes: [
        { text: '"The assorted appetizers included mortadella ham, Sasuke pork, and fried scallops topped with caviar, allowing us to savor a little bit of everything." — July 2026.', source: R + 'B518815386/' },
        { text: '"I\'ve loved this restaurant for a long time, but it was closed for renovations for a while, so I finally got to visit again!" — July 2026.', source: R + 'B522870752/' },
      ],
      japanese_sources_summary: '食べログ: ENOTECA GARBINO、銀座3-3-12 銀座ビルディングB1F、銀座駅C8出口徒歩1分、平日11:30〜14:30・18:00〜22:00(22時〜23時はバー)、土11:30〜14:30・18:00〜22:00、祝日・祝前日は23:30まで、日休、20:30以降はバーメニューのみ、ランチは予約不可、ディナーはテーブルチャージ400円、2021年6月21日開店、公式サイト garbino-ginza.com。店の紹介: 熊本の黒毛和牛「和王」、岩手・久慈ファーム直送の「佐助豚」、漁師直送の魚介、旬の野菜、イタリア・フランスのワイン100種以上(グラス10種)、最大16名の個室。2026年の口コミ: スズキのカルパッチョ、モルタデッラと佐助豚、キャビアのせ帆立フライ、トリュフのパスタ、赤ワイン煮込み、改装後の再開、昼のサラダとオレキエッテ、コースは事前に決める必要。',
      confidence: 'medium', sources: [TB, R + 'B518815386/', R + 'B522870752/', R + 'B521438666/', R + 'B537056485/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose the course when booking.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-3-12 銀座ビルディング B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目3番12号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518815386/', TB],
    price_note: 'No dish prices captured; dinner ¥8,000–10,000 in reviews, table charge ¥400.', last_checked: TODAY, items: [
      it('スズキのカルパッチョ', '', 'Sea-bass carpaccio', '', 'Antipasti', 'ask', 'no', 'July 2026.', 'carpaccio'),
      it('トリュフのパスタ', '', 'Truffle pasta', '', 'Pasta', 'no', 'no', 'August 2026.', 'truffle_pasta'),
      it('オレキエッテ', '', 'Orecchiette with vegetables (lunch)', '', 'Lunch', 'no', 'ask', 'September 2026.', 'orecchiette'),
      it('テーブルチャージ', '', 'Dinner table charge', '¥400', 'Charge', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '地下のイタリアンとワインバー・熊本の黒毛和牛「和王」、岩手の佐助豚・トリュフのパスタ、スズキのカルパッチョ・イタリアとフランスのワイン100種以上(グラス10種)・最大16名の個室',
    neighborhood: '銀座三丁目、裏通りの階段を下りた銀座ビルディングB1F。銀座駅C8出口から徒歩1分',
    gf_detail: '要確認。カルパッチョ、熊本の和牛、佐助豚、赤ワイン煮込み、トリュフのパスタのイタリアンのコースで、昼はオレキエッテなどのパスタ。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。和牛、豚肉、モルタデッラ、魚介。',
    notes: '[イタリアン・銀座駅から1分の地下のワインセラー] 2021年開店、改装を経て再開した裏通りの地下のイタリアン。熊本の黒毛和牛「和王」、岩手・久慈ファーム直送の佐助豚、漁師直送の魚介、旬の野菜を、100種以上のイタリア・フランスワイン(グラスで10種)と合わせます。口コミに出てくるのは、エディブルフラワーを添えたスズキのカルパッチョ、モルタデッラと佐助豚、キャビアをのせた帆立のフライ、トリュフたっぷりのパスタ、赤ワイン煮込み。昼は具だくさんのサラダとオレキエッテなどのパスタ。コースは事前に決める必要があります。最大16名の個室、ディナーはテーブルチャージ400円、ランチは予約不可。',
  });
}

// ================================================================ ビストロ オザミ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13207695/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '23:00']);
  put({
    id: 'tokyo_bistro_ozami_ginza_six', name: 'ビストロ オザミ (Bistro Ozami)', category: 'OMNI',
    lat: 35.669951, lng: 139.764397,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Classic Paris bistro prix-fixe (mussels, duck, meat, terrine-style jelly, chocolate dessert); no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck, mussels, meat courses.',
    hours_raw: 'Daily 11:00–23:00; lunch L.O. 14:30; dinner from 17:00 (food L.O. 21:00, Sun and holidays 20:30); open year-round (Tabelog). Book by 15:00 the day before.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'GINZA SIX 6F, Ginza 6-chōme — 2 min from Ginza Stn exit A3',
    cuisine: 'Paris-style bistro classics, prix-fixe at lunch and dinner · duck, mussels · about 200 wines from a 40,000-bottle stock · free-flow Champagne plans', cuisine_type: 'french',
    website: 'https://auxamis.com/bistro', gmaps: gm('ビストロ オザミ GINZA SIX'), menu_url: null,
    notes: "[French bistro · Paris classics on GINZA SIX 6F] A 40-seat bistro on the sixth floor of GINZA SIX, open since 2017 and dressed like a Parisian bistro. It serves traditional dishes of the kind Paris bistros have cooked for a century, with about 200 wines, mostly French, drawn from a 40,000-bottle stock, and free-flow Champagne plans. The prix-fixe lets you pick a starter, main and dessert; regulars rave about the duck, recommended mussels, a jelly and a chocolate dessert. It's good value for Ginza (lunch about ¥4,000–5,000, dinner ¥6,000–10,000), though one table waited long between courses and spent three hours. Walk-ins are sometimes possible at Saturday lunch.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 April 2017 (Tabelog)', background: 'Website at auxamis.com (Tabelog listing).', philosophy: null, specialty: 'Bistro prix-fixe; duck.',
      anecdotes: [
        { text: '"I chose a course with three dishes and dessert, and as always, the duck at Ozami is the best!" — October 2026, Saturday lunch without a booking.', source: R + 'B537643238/' },
        { text: '"Bistro Ozami has the perfect pricing for my budget, and thanks to their prefix menu, I can avoid the dilemma of not knowing what to order." — October 2026, fourth visit.', source: R + 'B507191198/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ オザミ、銀座6-10-1 GINZA SIX 6F、銀座駅A3出口徒歩2分、40席、毎日11:00〜23:00(ランチL.O. 14:30、ディナー17:00から、L.O. 21:00・日祝20:30)、年中無休、予約は前日15時まで、2017年4月20日開店、公式サイト auxamis.com/bistro。店の紹介: パリで100年以上続く伝統のビストロ料理、在庫4万本からフランス中心の約200種のワイン、パリのビストロ風の内装、シャンパン飲み放題とペアリングディナーのイベント。2026年の口コミ: プリフィクスで選べる、ムール貝、ジュレ、肉、ショコラ、鴨が最高、土曜昼に予約なしで入れた、銀座で手頃、料理の間が長く3時間かかったとの声。',
      confidence: 'medium', sources: [TB, R + 'B537643238/', R + 'B507191198/', R + 'B538016617/', R + 'B536783583/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Prix-fixe makes ordering easy.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-10-1 GINZA SIX 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都中央区銀座六丁目10番1号 (go) is 110m off for the large GINZA SIX block, so the Tabelog pin is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537643238/', R + 'B507191198/'],
    price_note: 'No prices captured; lunch ¥4,000–5,000, dinner ¥6,000–10,000 in reviews.', last_checked: TODAY, items: [
      it('プリフィクスコース', '', 'Prix-fixe: starter, main, dessert', '', 'Courses', 'ask', 'no', '', 'prix_fixe'),
      it('鴨', 'kamo', 'Duck', '', 'Mains', 'ask', 'no', 'October 2026.', 'duck'),
      it('ムール貝', '', 'Mussels', '', 'Starters', 'ask', 'no', 'October 2026.', 'mussels'),
    ] }, {
    cuisine: 'パリ風のビストロの定番、昼も夜もプリフィクス・鴨、ムール貝・在庫4万本から約200種のワイン・シャンパン飲み放題のプラン',
    neighborhood: 'GINZA SIX 6F、銀座六丁目。銀座駅A3出口から徒歩2分',
    gf_detail: '要確認。ムール貝、鴨、肉料理、ジュレ、ショコラなどパリの定番ビストロのプリフィクス。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。鴨、ムール貝、肉のコース。',
    notes: '[フレンチビストロ・GINZA SIX 6階でパリの定番] 2017年からGINZA SIXの6階にある40席の、パリのビストロのような内装の店。パリのビストロで100年来作られてきた伝統料理を、在庫4万本からフランス中心の約200種のワインとともに出し、シャンパン飲み放題のプランも。プリフィクスで前菜、メイン、デザートを選べ、常連が絶賛するのは鴨、すすめられたムール貝、ジュレ、ショコラ。銀座では手頃(昼は4,000〜5,000円、夜は6,000〜10,000円ほど)ですが、料理の間が長く3時間かかった卓も。土曜の昼は予約なしで入れることも。',
  });
}

save();
