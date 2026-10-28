// Osaka sweep (2-mile circle around Dotonbori), batch 124 — ramen phase (all OMNI).
//   + ラーメンすりぃ はなれ (clam-and-shellfish ramen, ¥650 morning ramen with free egg or natto rice from 7:00; Higobashi)
//   + 岡本商店 はなれ (chicken stewed ramen and lunch sets by day, izakaya at night; basement, Tanimachi 2-chome)
//   + 麺や 信 (seafood-and-chicken paitan on thin Menya Teigaku noodles, kimchi "Dive Rice"; Keihan Yodoyabashi Bldg B1F)
//   + 麺処 HACK (kombu-shellfish chuka soba, seasonal white tonkotsu soba, wok fried rice; cash only; Kujo)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 124);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ラーメンすりぃ はなれ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27152510/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['07:00', '11:00'], ['11:15', '15:00'], ['17:30', '23:00']); const SA = day(['11:15', '15:00']);
  put({
    id: 'osaka_ramen_three_hanare_higobashi', name: 'ラーメンすりぃ はなれ (Ramen ThreE HANARE)', category: 'OMNI',
    lat: 34.690612, lng: 135.495577, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; shoyu and shio tare; chashu mayo rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam, scallop and dried-seafood broth; pork bone; chicken and pork chashu; egg.',
    hours_raw: 'Mon–Fri 7:00–11:00 (morning ramen), 11:15–15:00 and 17:30–23:00; Sat and public holidays 11:15–15:00; closed Sun (Tabelog). Register on LINE and the fourth bowl is free after three (October 2026). Cards (VISA, Master), IC cards, iD and QR (incl. Alipay, WeChat Pay) accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Edobori 1-16-31 (Nishi-ku) — 3 min from Higobashi Stn',
    cuisine: 'Clam and shellfish ramen · clam tare ramen (shoyu): clam, scallop and dried seafood, light, on straight medium-thin low-hydration noodles; low-temperature chicken, skin-on roast chicken and rare pork-loin chashu; special B toppings · clam and Kyoto bonito chuka soba with onion and green onion · clam shio chuka soba · creamy clam-broth pork shio ramen · rich tonkotsu shoyu ramen · morning ramen (weekdays 7:00–11:00) ¥650: shoyu, clam or chicken shoyu, with free egg-over-rice or natto rice · roast pork rice bowl with sesame oil · small chashu mayo rice · table: chenpi, shichimi, sansho · 10 counter seats',
    website: null, gmaps: gm('ラーメンすりぃ はなれ'), menu_url: null,
    notes: "[Ramen · clam-broth ramen and a ¥650 breakfast bowl at Higobashi] A stylish ten-seat counter three minutes from Higobashi, open since October 2025 and sharing its name with Ramen ThreE nearby. The house bowl is a light broth of clam, scallop and dried seafood, with clam out front, over straight, medium-thin low-hydration noodles, topped with two kinds of chicken chashu and rare pork loin; sansho from the table lifts the aroma. There's also a clam and Kyoto bonito chuka soba, a creamy clam-and-pork shio and a rich tonkotsu shoyu. On weekdays it opens at 7:00 for morning ramen (¥650) with free egg-over-rice or natto rice. One diner found the morning bowls a bit salty. Register on LINE and the fourth bowl is free. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 October 2025 (Tabelog)', background: 'Ramen counter; Tabelog corporate member (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Clam and shellfish ramen; weekday morning ramen.',
      anecdotes: [
        { text: '"The soup was a blend of clam, scallop, and dried seafood, with the clam flavor being slightly dominant. It was a light broth… The noodles were straight, medium-thin, and had a low water content, giving them a nice bite." — October 2026, clam tare ramen (shoyu).', source: R + 'B536961134/' },
        { text: '"With the morning ramen, you can enjoy free egg over rice or natto rice. Both the Shoyu Ramen and the clam broth ramen are priced the same at JPY 650." — October 2026.', source: R + 'B537009209/' },
      ],
      japanese_sources_summary: '食べログ: ラーメンすりぃ はなれ、大阪市西区江戸堀1-16-31、肥後橋駅から徒歩3分、月〜金 7:00〜11:00・11:15〜15:00・17:30〜23:00、土・祝 11:15〜15:00、日休み、カード(VISA、Master)・交通系IC・iD・QR (Alipay、WeChat Pay を含む) 可、カウンター10席、2025年10月15日開店。口コミ(2026年10月): 貝、ホタテ、乾物の魚介のあっさりスープ、ストレートの中細の低加水麺、低温調理の鶏と皮付きの焼き鶏と豚ロースのレアチャーシュー、卓上の陳皮、七味、山椒、特製Bトッピング、焼豚丼はごま油、朝ラーメン650円 (醤油、貝、鶏醤油) に卵かけご飯か納豆ご飯が無料、LINE登録で3杯食べると1杯無料、貝と京都の鰹節の中華そば、濃厚豚骨醤油ラーメン、貝のスープのクリーミーな豚塩ラーメンと小さなチャーシューマヨご飯、おしゃれな店内、親切な店員、行列、朝の一杯が少し塩辛いという声。',
      confidence: 'medium', sources: [TB, R + 'B536961134/', R + 'B537009209/', R + 'B537041079/', R + 'B537614603/', R + 'B537949903/', R + 'B538142707/'] },
    ramen: {
      broth_base: ['shellfish', 'gyokai'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: 'low', handmade: false, notes: 'Straight, medium-thin, low-hydration noodles with a nice bite (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Clam tare ramen (shoyu) with special toppings (October 2026).',
      chashu: 'Low-temperature chicken, skin-on roast chicken and rare pork-loin chashu (October 2026).',
      notable_toppings: ['sansho', 'chenpi', 'egg-over-rice (morning)', 'natto rice (morning)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Shellfish and seafood broth.' },
      pantheon: 'Higobashi\'s clam-forward light ramen, with a ¥650 breakfast bowl from 7:00.',
      profile: { richness: 2, oiliness: 2, clarity: 4, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536961134/', '"It was a light broth" — placed low.'],
        oiliness: [R + 'B537041079/', '"A light and refreshing ramen" — placed low.'],
        clarity: [R + 'B536961134/', '"A light broth" of clam, scallop and dried seafood — placed high.'],
        tare_strength: [R + 'B538142707/', '"The ramen was a bit too salty for my taste" (one diner, twice) — placed high.'],
        noodle_firmness: [R + 'B536961134/', '"A low water content, giving them a nice bite" — placed high.'],
        aroma_punch: [R + 'B536961134/', '"The clam flavor being slightly dominant… the aroma of the sansho was delightful" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B536961134/', R + 'B537041079/', R + 'B538142707/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; friendly staff (October 2026); cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-16-31',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目16番31号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536961134/', R + 'B537009209/', R + 'B537949903/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Clam tare ramen (shoyu)', '', 'Ramen', 'no', 'no', 'October 2026.', 'clam_shoyu'),
      it('', '', 'Clam and Kyoto bonito chuka soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'clam_katsuo'),
      it('', '', 'Creamy clam-broth pork shio ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'clam_pork_shio'),
      it('', '', 'Rich tonkotsu shoyu ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'tonkotsu_shoyu'),
      it('', '', 'Morning ramen (shoyu, clam or chicken shoyu) with free egg-over-rice or natto rice', '¥650', 'Morning', 'no', 'no', 'Weekdays 7:00–11:00. October 2026.', 'asa'),
      it('', '', 'Roast pork rice bowl', '', 'Rice', 'no', 'no', 'October 2026.', 'yakibuta_don'),
      it('', '', 'Small chashu mayo rice', '', 'Rice', 'no', 'no', 'October 2026.', 'chashu_mayo'),
    ] }, {
    cuisine: '貝の魚介ラーメン・貝のたれのラーメン(醤油): 貝、ホタテ、乾物のあっさりスープ、ストレートの中細の低加水麺、低温調理の鶏、皮付きの焼き鶏、豚ロースのレアチャーシュー、特製Bトッピング・貝と京都の鰹節の中華そば、玉ねぎとねぎ・貝の塩中華そば・貝のスープのクリーミーな豚塩ラーメン・濃厚豚骨醤油ラーメン・朝ラーメン(平日7:00〜11:00)650円: 醤油、貝、鶏醤油に卵かけご飯か納豆ご飯が無料・ごま油の焼豚丼・小さなチャーシューマヨご飯・卓上: 陳皮、七味、山椒・カウンター10席',
    neighborhood: '西区江戸堀1-16-31。肥後橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油と塩のたれ、チャーシューマヨご飯。',
    vegan_detail: 'ヴィーガンではありません。貝、ホタテ、乾物の魚介スープ、豚骨、鶏と豚のチャーシュー、卵。',
    notes: '[ラーメン・肥後橋、貝のスープのラーメンと650円の朝ラーメン] 肥後橋から3分、おしゃれなカウンター10席の店で、2025年10月開店、近くの Ramen ThreE と同じ名を持つ。看板は貝、ホタテ、乾物のあっさりスープで貝が前に出る一杯、ストレートの中細の低加水麺に2種の鶏チャーシューと豚ロースのレア、卓上の山椒で香りが立つ。貝と京都の鰹節の中華そば、貝と豚のクリーミーな塩、濃厚豚骨醤油も。平日は7時から朝ラーメン(650円)で、卵かけご飯か納豆ご飯が無料。朝の一杯が少し塩辛いという声も。LINE登録で3杯食べると1杯無料。カード、QR可。',
  });
}

// ================================================================ 岡本商店 はなれ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27074662/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '23:00']);
  put({
    id: 'osaka_okamoto_shoten_hanare_tenmabashi', name: '岡本商店 はなれ (Okamoto Shoten Hanare)', category: 'OMNI',
    lat: 34.687287, lng: 135.517674, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy tare; kara-age; curry rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken paitan and seafood broths; chashu; egg.',
    hours_raw: 'Mon–Fri 11:00–23:00; Sat and public holidays 11:00–18:00; Sun 11:00–16:00; closing days not fixed (Tabelog). Ramen at lunch; all-you-can-eat-and-drink izakaya in the evening (Tabelog). Free mini rice bowl from 13:30 (September 2026). Cash or PayPay; no cards or e-money; smoking allowed (Tabelog). Formerly 麺屋きょうすけ (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '18:00']), 6: day(['11:00', '16:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tanimachi 2-1-22, Fair Stage Otemae Bldg B1F — 5 min from Tenmabashi Stn',
    cuisine: 'Chicken ramen by day, izakaya by night · chicken stewed ramen ¥950: frothy chicken soup, smooth, with chashu and egg · set F ¥1,000: chicken stewed ramen (no chashu) + mini rice bowl or fried dish, e.g. mini grilled chashu mayo bowl · set D: seafood shoyu ramen with grilled and rare chashu + chicken curry rice · spicy seafood ramen ¥950, spice level to choose · chicken paitan tsukemen: soy kaeshi, chicken fat, medium-thick straight noodles · kara-age · Instagram follow: a ¥100 topping free · 15 counter seats',
    website: null, gmaps: gm('岡本商店 はなれ'), menu_url: null,
    notes: "[Ramen · chicken stewed ramen and lunch sets, izakaya by night, by Tenmabashi] A fifteen-seat basement counter on Tanimachi-suji, five minutes from Tenmabashi, serving ramen at lunch and turning into an all-you-can-eat-and-drink izakaya in the evening; by name and one diner's account, it is a branch of Okamoto Shoten near Kitahama. The chicken stewed ramen (¥950, with chashu and egg) looks rich and frothy but drinks smooth, with chicken sweetness. The menu is long: sets pair a bowl with a mini rice bowl, chicken curry or kara-age, and there's seafood shoyu with rare chashu, chicken paitan tsukemen and a spicy seafood ramen that one diner found heavy and short on seafood. Another found the ramen average but good value. From 13:30 a mini rice bowl is free. Cash or PayPay; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 August 2013 (Tabelog), formerly 麺屋きょうすけ; a branch of Okamoto Shoten near Kitahama (September 2026 review).', background: 'Ramen shop by day, izakaya by night (Tabelog).', philosophy: null, specialty: 'Chicken stewed ramen; ramen sets.',
      anecdotes: [
        { text: '"The chicken simmered ramen looked quite rich with its frothy appearance, but surprisingly, it wasn\'t too heavy. The broth was smooth, with a delightful balance of chicken umami and sweetness." — September 2026, set F ¥1,000.', source: R + 'B536481736/' },
        { text: '"The seafood shoyu ramen arrived with grilled chashu and a huge piece of rare chashu on top—so tender and incredibly delicious!" — October 2026, set D with chicken curry rice.', source: R + 'B537904130/' },
      ],
      japanese_sources_summary: '食べログ: 岡本商店 はなれ (旧店名 麺屋きょうすけ)、大阪市中央区谷町2-1-22 フェアステージ大手前ビル B1F、天満橋駅から徒歩5分、谷町四丁目駅から徒歩7分、月〜金 11:00〜23:00、土・祝 11:00〜18:00、日 11:00〜16:00、定休日不定、昼はラーメン、夜は食べ飲み放題の居酒屋、カード・電子マネー不可、QRはPayPay可、カウンター15席、喫煙可、2013年8月19日開店。口コミ(2025年9月〜2026年10月): 北浜近くの店の支店、13時半からミニ丼無料、チャーシューたっぷり、ラーメンは普通という声、谷町筋の地下、辛さを選べる辛い魚介ラーメン950円は濃くて魚介の味がしなかったという声、鶏白湯の醤油つけ麺 (中太ストレート、鶏油)、セットF 1,000円 (鶏の煮込みラーメンとミニ丼か揚げ物)、焼きチャーシューマヨ丼、もやし、Instagramフォローで100円トッピング無料、鶏の煮込みラーメン950円はチャーシューと卵付き、元気で親切な店員、セットDは魚介醤油ラーメンとチキンカレーライス、唐揚げ、メニューが多い。',
      confidence: 'medium', sources: [TB, R + 'B516362459/', R + 'B532205812/', R + 'B534451431/', R + 'B536481736/', R + 'B536502102/', R + 'B537904130/'] },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['chicken fat'], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'Medium-thick straight noodles in the chicken tsukemen (August 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan', 'tsukemen'],
      signature_bowl: 'Chicken stewed ramen, ¥950 (September 2026).',
      chashu: 'Grilled chashu and a large rare chashu on the seafood shoyu (October 2026).',
      notable_toppings: ['egg', 'bean sprouts', 'mini grilled chashu mayo bowl'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken broth.' },
      pantheon: 'Tenmabashi\'s basement chicken stewed ramen, with combination sets at lunch and an izakaya at night.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 3, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536481736/', '"Looked quite rich with its frothy appearance, but surprisingly, it wasn\'t too heavy" — mid-scale.'],
        oiliness: [R + 'B534451431/', '"Finishing Oil: Chicken Fat" (tsukemen); no review calls it oily — mid-scale.'],
        clarity: [R + 'B534451431/', '"Style: Paitan" — placed low.'],
        tare_strength: [R + 'B536481736/', '"A delightful balance of chicken umami and sweetness" — mid-scale.'],
        noodle_firmness: [R + 'B534451431/', '"Noodles: Medium-thick straight"; firmness not described — mid-scale.'],
        aroma_punch: [R + 'B532205812/', '"The ramen was neither good nor bad—just really average" (one diner) — mid-scale.'],
      },
      confidence: 'low', sources: [R + 'B536481736/', R + 'B534451431/', R + 'B532205812/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Energetic, friendly staff (September 2026); cash or PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区谷町2-1-22 フェアステージ大手前ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区谷町二丁目1番22号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536481736/', R + 'B536502102/', R + 'B537904130/'],
    price_note: 'Prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken stewed ramen (chashu and egg)', '¥950', 'Ramen', 'no', 'no', 'September 2026.', 'nikomi'),
      it('', '', 'Set F: chicken stewed ramen + mini rice bowl or fried dish', '¥1,000', 'Sets', 'no', 'no', 'September 2026.', 'set_f'),
      it('', '', 'Set D: seafood shoyu ramen + chicken curry rice', '', 'Sets', 'no', 'no', 'October 2026.', 'set_d'),
      it('', '', 'Spicy seafood ramen (choose the spice level)', '¥950', 'Ramen', 'no', 'no', 'July 2026.', 'spicy_gyokai'),
      it('', '', 'Chicken paitan tsukemen (shoyu)', '', 'Tsukemen', 'no', 'no', 'August 2026.', 'tsukemen'),
      it('', '', 'Kara-age', '', 'Sides', 'no', 'no', 'October 2026.', 'karaage'),
    ] }, {
    cuisine: '昼は鶏のラーメン、夜は居酒屋・鶏の煮込みラーメン950円: 泡立つ鶏スープ、なめらか、チャーシューと卵付き・セットF 1,000円: 鶏の煮込みラーメン (チャーシューなし) とミニ丼か揚げ物、たとえば焼きチャーシューマヨ丼・セットD: 焼きとレアのチャーシューの魚介醤油ラーメンとチキンカレーライス・辛さを選べる辛い魚介ラーメン950円・鶏白湯の醤油つけ麺: 鶏油、中太ストレート麺・唐揚げ・Instagramフォローで100円トッピング無料・カウンター15席',
    neighborhood: '中央区谷町2-1-22 フェアステージ大手前ビル B1F。天満橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油のたれ、唐揚げ、カレーライス。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯と魚介のスープ、チャーシュー、卵。',
    notes: '[ラーメン・天満橋近く、鶏の煮込みラーメンと昼のセット、夜は居酒屋] 天満橋から5分、谷町筋の地下にあるカウンター15席の店で、昼はラーメン、夜は食べ飲み放題の居酒屋になる、店名と口コミによれば北浜の岡本商店の支店。鶏の煮込みラーメン(950円、チャーシューと卵付き)は泡立って濃そうに見えるのに飲み口はなめらかで、鶏の甘みがある。メニューは多く、ミニ丼、チキンカレー、唐揚げと組むセットのほか、レアチャーシューの魚介醤油、鶏白湯のつけ麺、辛い魚介ラーメンも (濃くて魚介の味が薄かったという声)。ラーメンは普通だがお得という声も。13時半からミニ丼が無料。現金か PayPay、喫煙可。',
  });
}

// ================================================================ 麺や 信
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27136172/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '15:00'], ['17:00', '21:00']);
  put({
    id: 'osaka_menya_shin_yodoyabashi', name: '麺や 信 (Menya Shin)', category: 'OMNI',
    lat: 34.691778, lng: 135.503143, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; tare; chashu sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and chicken paitan double soup; pork chashu; egg.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 17:00–21:00; Sat 11:00–15:00; closed Sun and public holidays; hours may change (Tabelog). Pay when ordering (2026). Rice ¥200, ¥100 at lunch (October 2026). Cards, IC cards, e-money and QR accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:00', '15:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahama 3-2-25, Keihan Yodoyabashi Bldg B1F — reachable underground from Yodoyabashi and Kitahama Stns',
    cuisine: 'Seafood and chicken paitan ramen · ramen ¥850: double soup of seafood and chicken paitan, slightly thick, on thin low-hydration noodles from Menya Teigaku in Kyoto; pork-belly chashu, menma, green onion, white onion · chashu ramen ¥1,000 (three thick slices; seasoned egg to ¥1,150) · Dive Rice: kimchi rice to drop into the leftover soup · chashu rice bowl ¥300 at lunch · rice ¥200, ¥100 at lunch · 8 counter seats',
    website: null, gmaps: gm('麺や 信'), menu_url: null,
    notes: "[Ramen · seafood-and-chicken paitan in the Yodoyabashi basement] An eight-seat, calm, Japanese-style counter in the basement of the Keihan Yodoyabashi Building, reachable underground from Yodoyabashi and Kitahama, open since 2023 as a new concept from Yawaragi, an izakaya in Shinsaibashi. The ramen (¥850) is a double soup of seafood and chicken paitan, slightly thick, rich but easy to drink, with the seafood coming through as you slurp the thin, firm, low-hydration Menya Teigaku noodles. Tender pork-belly chashu comes in thick slices in the chashu ramen (¥1,000). Finish with Dive Rice: kimchi rice you drop into the last of the soup. Rice is half price at lunch. Pay as you order. Cards and QR accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 May 2023 (Tabelog); a new concept from the Shinsaibashi izakaya Yawaragi (October 2026 review).', background: 'Ramen counter in the Keihan Yodoyabashi Building basement (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Seafood and chicken paitan double-soup ramen.',
      anecdotes: [
        { text: '"Taking a sip of the broth, I immediately noticed the pleasant seafood flavor, supported by the rich taste of chicken paitan… The thin noodles were cooked to a perfect firmness, offering a nice bite." — October 2026, chashu ramen ¥1,000.', source: R + 'B536834056/' },
        { text: '"After finishing the ramen, you dive the rice into the broth, and it\'s absolutely delightful! It even comes topped with kimchi…" — October 2026, Dive Rice.', source: R + 'B537051119/' },
      ],
      japanese_sources_summary: '食べログ: 麺や 信、大阪市中央区北浜3-2-25 京阪淀屋橋ビル B1F、淀屋橋駅・北浜駅、月〜金 11:00〜15:00・17:00〜21:00、土 11:00〜15:00、日・祝休み、カード・電子マネー・QR可、カウンター8席、2023年5月10日開店。口コミ(2026年9〜10月): 魚介と鶏白湯のダブルスープでややとろみ、濃厚だが飲みやすい、京都の Menya Teigaku の細い低加水麺、ちょうどいい硬さ、豚バラのチャーシュー、メンマ、ねぎ、玉ねぎ、ラーメン850円、チャーシューラーメン1,000円 (厚いチャーシュー3枚、味玉で1,150円)、キムチのせのご飯をスープに入れる Dive Rice、チャーシュー丼300円、ご飯200円が昼は100円、先払い、落ち着いた和の雰囲気、雨でも淀屋橋駅・北浜駅から濡れずに行ける、心斎橋の居酒屋 Yawaragi の新業態、器の縁が立体的。',
      confidence: 'medium', sources: [TB, R + 'B536189645/', R + 'B536506692/', R + 'B536511442/', R + 'B536834056/', R + 'B537051119/', R + 'B537451420/'] },
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: 'low', handmade: false, notes: 'Thin, straight, low-hydration noodles from Menya Teigaku in Kyoto (2026).' },
      regional_style: [], sub_genre: ['ramen', 'tori_paitan'],
      signature_bowl: 'Chashu ramen, ¥1,000 (October 2026).',
      chashu: 'Thick, tender pork-belly chashu (2026).',
      notable_toppings: ['menma', 'white onion', 'Dive Rice (kimchi rice)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood and chicken broth.' },
      pantheon: 'Yodoyabashi\'s "just right" seafood-chicken paitan, finished with kimchi Dive Rice.',
      profile: { richness: 3, oiliness: 2, clarity: 2, tare_strength: 3, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B536506692/', '"The broth was rich yet easy to drink" — mid-scale.'],
        oiliness: [R + 'B536189645/', '"A seafood-based broth that was easy to drink" — placed low.'],
        clarity: [R + 'B536511442/', '"A rich combination of seafood and chicken paitan, giving it a slightly thick texture" — placed low.'],
        tare_strength: [R + 'B536511442/', '"The flavor is subtle yet impactful" — mid-scale.'],
        noodle_firmness: [R + 'B536834056/', '"The thin noodles were cooked to a perfect firmness, offering a nice bite" — placed high.'],
        aroma_punch: [R + 'B536834056/', '"It\'s not flashy, but… it\'s just right" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B536834056/', R + 'B536511442/', R + 'B536506692/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm counter; pay as you order (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区北浜3-2-25 京阪淀屋橋ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区北浜三丁目2番25号 (go) 33m (large building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536834056/', R + 'B536511442/', R + 'B537451420/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen', '¥850', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('', '', 'Chashu ramen', '¥1,000', 'Ramen', 'no', 'no', 'October 2026.', 'chashu'),
      it('', '', 'Seasoned egg', '+¥150', 'Toppings', 'no', 'no', 'With chashu ramen ¥1,150. September 2026.', 'ajitama'),
      it('', '', 'Dive Rice (kimchi rice for the leftover soup)', '', 'Rice', 'ask', 'ask', 'Ramen + Dive Rice ¥1,000 at lunch. September 2026.', 'dive_rice'),
      it('', '', 'Chashu rice bowl (lunch)', '¥300', 'Rice', 'no', 'no', 'October 2026.', 'chashu_don'),
      it('', '', 'Rice', '¥200', 'Rice', 'ask', 'ask', '¥100 at lunch. October 2026.', 'rice'),
    ] }, {
    cuisine: '魚介と鶏白湯のラーメン・ラーメン850円: 魚介と鶏白湯のダブルスープでややとろみ、京都の Menya Teigaku の細い低加水麺、豚バラのチャーシュー、メンマ、ねぎ、玉ねぎ・チャーシューラーメン1,000円 (厚いチャーシュー3枚、味玉で1,150円)・Dive Rice: 残ったスープに入れるキムチのせご飯・昼のチャーシュー丼300円・ご飯200円、昼は100円・カウンター8席',
    neighborhood: '中央区北浜3-2-25 京阪淀屋橋ビル B1F。淀屋橋駅・北浜駅から地下で行ける',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、たれ、チャーシューのたれ。',
    vegan_detail: 'ヴィーガンではありません。魚介と鶏白湯のダブルスープ、豚のチャーシュー、卵。',
    notes: '[ラーメン・淀屋橋の地下、魚介と鶏白湯] 京阪淀屋橋ビルの地下にある落ち着いた和の雰囲気のカウンター8席の店で、淀屋橋駅と北浜駅から地下で行ける。2023年開店、心斎橋の居酒屋 Yawaragi の新業態。ラーメン(850円)は魚介と鶏白湯のダブルスープでややとろみがあり、濃厚なのに飲みやすく、硬めの細い低加水の Menya Teigaku の麺をすすると魚介が立つ。チャーシューラーメン(1,000円)は柔らかい豚バラが厚切りで。締めは Dive Rice: キムチのせのご飯を残ったスープに入れる。昼はご飯が半額。注文時に支払い。カード、QR可。',
  });
}

// ================================================================ 麺処 HACK
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27148359/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '22:30']);
  put({
    id: 'osaka_mendokoro_hack_kujo', name: '麺処 HACK (mendokoro HACK)', category: 'OMNI',
    lat: 34.675577, lng: 135.475027, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce fried rice; gyoza.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shellfish broth and white tonkotsu soup; chashu; salmon; egg.',
    hours_raw: 'Mon–Wed and Fri–Sun, public holidays 11:00–22:30, continuous (announced on the shop Instagram); closed Thu; hours may change (Tabelog, not owner-verified). Ticket machine at the entrance (2026). Cash only (September 2026 review; Tabelog).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kujo 1-13-22 (Nishi-ku), JJCourt Kujo 1F — 131 m from Kujo Stn',
    cuisine: 'Chuka soba, seasonal white tonkotsu soba and fried rice · chuka soba (most popular): kombu and shellfish broth, wheat-forward noodles, two kinds of chashu incl. grilled pork belly · shio soba · seasonal white tonkotsu ("shiro-tan") soba, changing four times a year: autumn salmon and miso ¥1,180 (frothy miso white soup, loosely wavy noodles, grilled salmon, chashu, sautéed onion, cabbage and shimeji, bean sprouts, kinome, fried onion); summer Sichuan Chengdu tantan; spring firefly squid and sakura shrimp · summer chilled tantanmen with rare chashu, chicken breast, lemon and cream cheese · wok fried rice with burnt soy, extra butter or large · ramen and fried rice set ¥1,580 · gyoza',
    website: null, gmaps: gm('麺処 HACK'), menu_url: null,
    notes: "[Ramen · kombu-shellfish chuka soba and seasonal white soups, with wok fried rice, by Kujo] A clean counter by Kujo Station, open here since April 2025 after moving from Namba, where you can watch the fried rice tossed in the wok and the bowls carefully plated. The most popular bowl is the chuka soba: a kombu and shellfish broth with a strong wheat aroma from the noodles and two kinds of chashu, one a grilled pork belly. The white tonkotsu soba changes every three months; autumn 2026 is salmon and miso in a frothy soup with sautéed vegetables (¥1,180). Summer brings a chilled tantanmen with cream cheese and lemon. The fried rice, fluffy with burnt soy and optional butter, draws its own fans (one diner warns it can taste a bit salty), and the set (¥1,580) pairs it with a bowl. Warm service. Buy a ticket at the entrance; cash only. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened in Namba on 12 December 2022 and moved to Kujo on 1 April 2025; a second shop, mendokoro HACK Nakazaki, opened March 2026 (October 2026 review; Tabelog).', background: 'Ramen and fried-rice counter (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Chuka soba; seasonal white tonkotsu soba; wok fried rice.',
      anecdotes: [
        { text: '"Ordering the Chuka Soba was definitely the right decision! The aroma is irresistible. It\'s made with kombu kelp and shellfish broth! And the wheat aroma is just amazing." — September 2026.', source: R + 'B530264440/' },
        { text: '"The miso white tonkotsu broth is covered with fine bubbles… The noodles are loosely wavy. They have a smooth texture that glides down your throat, with a firm and bouncy bite." — October 2026, autumn white tonkotsu soba and fried rice set ¥1,580.', source: R + 'B537721470/' },
      ],
      japanese_sources_summary: '食べログ: 麺処 HACK、大阪市西区九条1-13-22 JJCourt九条 1F、九条駅から131m、月〜水・金〜日・祝 11:00〜22:30 (Instagramで通し営業に変更と告知)、木休み、カード・電子マネー・QR不可、2025年4月1日開店 (店舗情報は店公認ではない)。口コミ(2026年3〜10月): 2022年12月12日に浪速区難波で開店し2025年4月1日に九条へ移転、2026年3月に2号店 mendokoro HACK Nakazaki、一番人気の中華そばは昆布と貝の出汁、小麦の香り、2種のチャーシューと焼いた豚バラ、塩そば、3か月ごとに変わる白湯 (白豚骨) そば、秋は鮭と味噌の白湯そば1,180円 (泡立つ味噌の白豚骨、ゆるい縮れ麺、焼き鮭、チャーシュー、玉ねぎ・キャベツ・しめじの炒め野菜、もやし、木の芽、フライドオニオン、七味)、夏の四川成都担々白湯、春のホタルイカと桜えびの白湯と燻製の半熟卵、夏の冷やし担々麺 (レアチャーシュー、鶏むね、レモン、クリームチーズ、鶏そぼろ)、焦がし醤油の炒飯はバター増しや大盛り、セット1,580円、餃子、入口の券売機、現金のみ、厨房が見えるカウンター、丁寧な接客、店主から「NO NOODLE, NO LIFE」のステッカー、炒飯が少し塩辛いと感じる人もいるかもという声。',
      confidence: 'medium', sources: [TB, R + 'B524292220/', R + 'B530264440/', R + 'B532107026/', R + 'B535954215/', R + 'B537285722/', R + 'B537721470/'] },
    ramen: {
      broth_base: ['shellfish', 'tonkotsu'], broth_texture: 'unknown', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: 'wavy', hydration: null, handmade: false, notes: 'Different noodles for the shio soba and the white soba; loosely wavy, firm and bouncy in the white tonkotsu soba (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Chuka soba (most popular); seasonal white tonkotsu soba ¥1,180 (2026).',
      chashu: 'Two kinds, including grilled pork belly; rare chashu on the white soba and chilled tantanmen (2026).',
      notable_toppings: ['grilled salmon (autumn)', 'sautéed vegetables', 'kinome', 'cream cheese (chilled tantanmen)', 'fried rice set'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Shellfish and pork broth.' },
      pantheon: 'Kujo\'s kombu-shellfish chuka soba and seasonal white soups, best with the wok fried rice.',
      profile: { richness: 3, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B535954215/', '"The flavorful broth paired perfectly with the firm noodles" (chuka soba); the white soba is richer — mid-scale.'],
        oiliness: [R + 'B530264440/', '"It has an incredibly smooth texture" (chuka soba); no review calls it oily — mid-scale.'],
        clarity: [R + 'B530264440/', '"Made with kombu kelp and shellfish broth" (chuka soba); the seasonal soba is a frothy white soup — mid-scale.'],
        tare_strength: [R + 'B530264440/', 'Chuka soba described by aroma and texture, not saltiness — mid-scale.'],
        noodle_firmness: [R + 'B535954215/', '"The firm noodles"; "a firm and bouncy bite" (B537721470) — placed high.'],
        aroma_punch: [R + 'B530264440/', '"The aroma is irresistible… the wheat aroma is just amazing" — placed high.'],
      },
      confidence: 'medium', sources: [R + 'B530264440/', R + 'B535954215/', R + 'B537721470/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff guide first-timers to the ticket machine (June 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区九条1-13-22 JJCourt九条 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区九条一丁目13番22号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530264440/', R + 'B524292220/', R + 'B537721470/'],
    price_note: 'Prices from June–October 2026 reviews; the white soba changes every three months.', last_checked: TODAY, items: [
      it('', '', 'Chuka soba', '', 'Ramen', 'no', 'no', 'September 2026.', 'chuka'),
      it('', '', 'Shio soba', '', 'Ramen', 'no', 'no', 'October 2026.', 'shio'),
      it('', '', 'Seasonal white tonkotsu soba (autumn: salmon and miso)', '¥1,180', 'Ramen', 'no', 'no', 'September–October 2026.', 'shirotan'),
      it('', '', 'White tonkotsu soba and fried rice set', '¥1,580', 'Sets', 'no', 'no', 'October 2026.', 'set'),
      it('', '', 'Chilled tantanmen (summer, limited)', '', 'Limited', 'no', 'no', 'June–July 2026.', 'hiyashi_tantan'),
      it('', '', 'Fried rice', '', 'Rice', 'no', 'no', 'Burnt soy; extra butter or large. 2026.', 'chahan'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'July–October 2026.', 'gyoza'),
    ] }, {
    cuisine: '中華そば、季節の白豚骨そば、炒飯・中華そば (一番人気): 昆布と貝の出汁、小麦の香る麺、焼いた豚バラを含む2種のチャーシュー・塩そば・年に4回変わる季節の白豚骨そば: 秋は鮭と味噌で1,180円 (泡立つ味噌の白湯、ゆるい縮れ麺、焼き鮭、チャーシュー、玉ねぎ・キャベツ・しめじの炒め野菜、もやし、木の芽、フライドオニオン)、夏は四川成都担々、春はホタルイカと桜えび・夏の冷やし担々麺、レアチャーシュー、鶏むね、レモン、クリームチーズ・焦がし醤油の中華鍋の炒飯、バター増しや大盛り・ラーメンと炒飯のセット1,580円・餃子',
    neighborhood: '西区九条1-13-22 JJCourt九条 1F。九条駅から131m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油の炒飯、餃子。',
    vegan_detail: 'ヴィーガンではありません。貝の出汁と白豚骨スープ、チャーシュー、鮭、卵。',
    notes: '[ラーメン・九条駅近く、昆布と貝の中華そばと季節の白湯、中華鍋の炒飯] 九条駅そばの清潔なカウンターの店で、難波から移って2025年4月からここで営業、中華鍋で炒飯を振る様子や丁寧な盛り付けが見える。一番人気は中華そば: 昆布と貝の出汁に麺の小麦の香りが立ち、焼いた豚バラを含む2種のチャーシュー。白豚骨そばは3か月ごとに変わり、2026年秋は鮭と味噌で、泡立つスープに炒め野菜 (1,180円)。夏はクリームチーズとレモンの冷やし担々麺。焦がし醤油の炒飯はふわっとしてバター増しもでき、これ目当ての人も。セット(1,580円)で一杯と組める。少し塩辛く感じる人もいるかもという声も。接客が温かい。入口で食券、現金のみ。木曜休み。',
  });
}

save();
