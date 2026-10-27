// Osaka sweep (2-mile circle around Dotonbori), batch 39 — ramen phase, nearest first (all OMNI).
//   + 餃子の王将 心斎橋店 (Gyoza no Ohsho chain branch — filed 'gyoza', like Minmin)
//   + ニューヨークのラーメン屋 アメリカ村本店 (build-your-own "Suppin" ramen from ¥550)
//   + 麺や 煌 (one-person shoyu/shio counter; Tabelog romaji "Menya Kirameki")
//   + 大阪家 (Yokohama iekei, described by reviewers as a direct branch of Tokyo's Daikiya; pin chōme-level)
// Skipped: 27058352 (bar, one review).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, skip, save } = openCitySweep('osaka', TODAY, 39);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27058352', 'Bar listing with a single review; current operation and food unverified.');

// ================================================================ 餃子の王将 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27068866/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_gyoza_no_ohsho_shinsaibashi', name: '餃子の王将 心斎橋店 (Gyoza no Ohsho Shinsaibashi)', category: 'OMNI',
    lat: 34.67351, lng: 135.501694, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-wrapper gyoza, noodles, soy-based Chinese sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork gyoza, seafood Chinese rice, meat dishes.',
    hours_raw: 'Daily 11:00–22:30; closed only over the New Year holidays (Tabelog). Reservations taken. Cards (JCB, AMEX, Diners), e-money and QR accepted. Self-service water.',
    hours: ALL(day(['11:00', '22:30'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-4-27 — 2 min from Shinsaibashi Stn',
    cuisine: 'Gyoza no Ohsho chain gyoza (with or without garlic) · Chinese rice bowl with shrimp, squid, scallop and quail egg · Tianjin rice · roasted-miso ramen on thick noodles · summer cold noodles · "Gyoza no Ohsho lunch" set under ¥800 · 40 seats',
    website: 'http://www.ohsho.co.jp/', gmaps: gm('餃子の王将 心斎橋店'), menu_url: null,
    notes: "[Gyoza · the Gyoza no Ohsho by Shinsaibashi-suji] The Shinsaibashi branch of the Gyoza no Ohsho chain, two minutes from the station: hearty, cheap Chinese food that Kansai people call soul food. Order gyoza with or without garlic, to compare the garlic richness with the ginger. The Chinese rice bowl is lighter on cornstarch than most, packed with shrimp, squid, scallops, quail eggs and vegetables. Tianjin rice is a regular's craving. This branch also serves a \"Gyoza no Ohsho lunch\" for under ¥800, a roasted-miso ramen on thick noodles, and cold noodles in summer. One July 2026 visitor used a Wednesday half-price gyoza coupon. The manager greets you loudly.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 November 2012 (Tabelog)', background: 'Gyoza no Ohsho chain (ohsho.co.jp).', philosophy: null, specialty: 'Gyoza; Chinese rice dishes.',
      anecdotes: [
        { text: '"The Chinese rice has less thickness from cornstarch compared to other Chinese restaurants… packed with seafood like quail eggs, shrimp, squid, and scallops." — July 2026.', source: R + 'B532082489/' },
        { text: '"The rich aroma of roasted miso wafted through the air… perfectly complementing the thick noodles." — July 2026, roasted miso ramen.', source: R + 'B532945808/' },
      ],
      japanese_sources_summary: '食べログ: 餃子の王将 心斎橋店、大阪市中央区心斎橋筋1-4-27、06-6241-9011、予約可、毎日11:00〜22:30、年末年始のみ休み、カード(JCB、AMEX、Diners)・電子マネー・QR決済可、40席、2012年11月2日開店、公式 ohsho.co.jp。2026年の口コミ(6〜8月): 水はセルフ、にんにくたっぷりの餃子3人前、天津飯が食べたくなると来る、夏は冷麺、心斎橋筋商店街のすぐそば、ビールに合う、水曜の餃子半額クーポン、にんにくありとなしの餃子、中華飯(片栗のとろみが少なめ、うずら卵、エビ、イカ、ホタテ、野菜たっぷり)、店長らしい元気な声、800円以下の「餃子の王将ランチ」、焦がし味噌ラーメン(焙煎味噌の香り、太麺)。',
      confidence: 'medium', sources: [TB, R + 'B532082489/', R + 'B532945808/', R + 'B532372597/', R + 'B457361512/', R + 'B441531383/', R + 'B532037672/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chain Chinese restaurant; self-service water.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-4-27',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目4番27号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532082489/', R + 'B532372597/', R + 'B532945808/'],
    price_note: 'Only the lunch-set price band was captured (under ¥800, June 2026).', last_checked: TODAY, items: [
      it('餃子', 'gyōza', 'Gyoza (with or without garlic)', '', 'Gyoza', 'no', 'no', 'July 2026.', 'gyoza'),
      it('', '', 'Chinese rice bowl (seafood)', '', 'Rice', 'no', 'no', 'July 2026.', 'chukadon'),
      it('天津飯', 'tenshinhan', 'Tianjin rice', '', 'Rice', 'no', 'no', 'August 2026.', 'tenshin'),
      it('', '', 'Roasted-miso ramen', '', 'Noodles', 'no', 'no', 'July 2026.', 'miso'),
      it('', '', '"Gyoza no Ohsho lunch" set', 'under ¥800', 'Lunch', 'no', 'no', 'June 2026.', 'lunch'),
    ] }, {
    cuisine: '餃子の王将の餃子(にんにくありとなし)・エビ、イカ、ホタテ、うずら卵の中華飯・天津飯・太麺の焦がし味噌ラーメン・夏の冷麺・800円以下の「餃子の王将ランチ」・40席',
    neighborhood: '心斎橋筋1-4-27。心斎橋駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の皮の餃子、麺、醤油ベースの中華のたれ。',
    vegan_detail: 'ヴィーガンではありません。豚肉の餃子、魚介の中華飯、肉料理。',
    notes: '[餃子・心斎橋筋そばの餃子の王将] 心斎橋駅から2分の餃子の王将の心斎橋店で、関西の人がソウルフードと呼ぶ、安くてしっかりした中華。餃子はにんにくありとなしで頼めば、にんにくのコクと生姜の風味を食べ比べられます。中華飯は片栗のとろみが控えめで、エビ、イカ、ホタテ、うずら卵、野菜がたっぷり。天津飯を目当てに通う常連も。この店には800円以下の「餃子の王将ランチ」、太麺の焦がし味噌ラーメン、夏は冷麺も。2026年7月には水曜の餃子半額クーポンを使った人も。店長の元気なあいさつが迎えてくれます。',
  });
}

// ================================================================ ニューヨークのラーメン屋 アメリカ村本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27145692/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:00'], ['17:00', '23:00']), E = day(['11:30', '23:00']);
  put({
    id: 'osaka_new_york_ramen_amemura', name: 'ニューヨークのラーメン屋 アメリカ村本店 (NEW YORK RAMEN Amemura)', category: 'OMNI',
    lat: 34.672632, lng: 135.498265, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried toppings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: rich pork-bone broth, chashu, fried scallops.',
    hours_raw: 'Mon–Fri 11:30–15:00 and 17:00–23:00; Sat–Sun 11:30–23:00 (Tabelog). Cards, e-money (IC cards, iD) and QR (PayPay) accepted. One April 2026 visitor found the door still locked after the listed opening time.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-7-2, Amerika-mura — about 250 m from Yotsubashi Stn',
    cuisine: 'Build-your-own ramen · "Suppin" base bowl of broth and noodles ¥550 · toppings such as fried scallops ¥280 and rare chashu ¥100 · "Ali Red" · sukiyaki ramen · double-chashu classic · chashu rice bowl with cheese · rich, creamy pork-bone broth · red, NY-themed room · 12 seats',
    website: null, gmaps: gm('ニューヨークのラーメン屋 アメリカ村'), menu_url: null,
    notes: "[Ramen · build-your-own ramen in a red NY-style Amemura room] A 12-seat ramen shop in Amerika-mura, open since November 2024, decked out in red New York style. The concept is \"Suppin\" ramen: a bare bowl of broth and noodles from ¥550, built up with your pick of toppings. Fried scallops are ¥280 and rare chashu ¥100, and one reviewer counts over a trillion combinations. The broth is a rich, creamy pork bone, a little salty for some, on chewy noodles. There's also the \"Ali Red\", a tangy sukiyaki ramen, and a double-chashu classic. The chashu rice bowl comes with cheese. Staff are friendly; check the door at opening time, as one lunch visitor found it still locked.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 November 2024 (Tabelog)', background: 'Build-your-own "Suppin" concept (reviews).', philosophy: null, specialty: 'Customizable pork-bone ramen.',
      anecdotes: [
        { text: '"The restaurant offers a unique concept called \'Suppin Ramen,\' where you customize your ramen by adding your choice of toppings to a base ramen without any ingredients." — April 2026.', source: R + 'B525683526/' },
        { text: '"The Sukiyaki Ramen had a perfectly balanced tangy flavor with a rich pork bone broth that was quite addictive." — May 2026.', source: R + 'B529364591/' },
      ],
      japanese_sources_summary: '食べログ: ニューヨークのラーメン屋 アメリカ村本店、大阪市中央区西心斎橋1-7-2、06-6243-0666、予約不可、月〜金11:30〜15:00・17:00〜23:00、土日11:30〜23:00、カード・電子マネー(交通系IC、iD)・QR(PayPay)可、12席、2024年11月19日開店。2026年の口コミ(4〜6月): 具なしのベースに好きなトッピングを足す「すっぴんラーメン」、組み合わせは1兆通り以上、開店時刻を過ぎても鍵がかかっていたことも、アリレッド、半熟玉子とレアチャーシュー、すき焼きラーメン(甘酸っぱく濃厚な豚骨)、チーズのチャーシュー丼、Wチャーシューの定番(塊と薄切りのチャーシュー、ゆで卵、濃厚でクリーミーなスープ)、やや塩辛いという声、もちもちの麺、すっぴん550円、ホタテフライ280円、レアチャーシュー100円、赤いNY風の内装。',
      confidence: 'medium', sources: [TB, R + 'B525683526/', R + 'B529364591/', R + 'B529462341/', R + 'B530519590/', R + 'B530560135/', R + 'B528135050/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Chewy noodles (June 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '"Suppin" base ramen ¥550 plus toppings (June 2026).',
      chashu: 'Block and thin-sliced chashu; rare chashu topping ¥100 (June 2026).',
      notable_toppings: ['fried scallops', 'rare chashu', 'soft-boiled egg', 'cheese (rice bowl)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-bone broth.' },
      pantheon: 'Amemura\'s build-your-own pork-bone ramen: a ¥550 bare bowl and a wall of toppings.',
      profile: { richness: 4, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B529462341/', '"The broth was very rich and creamy."'],
        oiliness: [R + 'B529462341/', 'Rich enough to feel "quite heavy" with a rice bowl — mid-scale.'],
        clarity: [R + 'B529462341/', 'Creamy pork-bone broth — opaque.'],
        tare_strength: [R + 'B530519590/', '"The broth is rich yet slightly salty, which may divide opinions."'],
        noodle_firmness: [R + 'B530519590/', '"The noodles have a nice chewiness" — mid-scale.'],
        aroma_punch: [R + 'B529364591/', 'Sukiyaki version "tangy" — mid-scale.'],
      },
      confidence: 'medium', sources: [R + 'B529462341/', R + 'B530519590/', R + 'B529364591/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Build-your-own topping menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-7-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目7番2号 (go) 9m; OSM New York Ramen node/13206613778 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530560135/', R + 'B529364591/'],
    price_note: 'Prices from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', '"Suppin" base ramen (broth and noodles)', '¥550', 'Ramen', 'no', 'no', 'June 2026.', 'suppin'),
      it('', '', 'Fried scallops topping', '¥280', 'Toppings', 'no', 'no', 'June 2026.', 'hotate'),
      it('', '', 'Rare chashu topping', '¥100', 'Toppings', 'ask', 'no', 'June 2026.', 'rare_chashu'),
      it('', '', 'Sukiyaki ramen', '', 'Ramen', 'no', 'no', 'May 2026.', 'sukiyaki'),
      it('', '', 'Chashu rice bowl with cheese', '', 'Rice', 'no', 'no', 'May 2026.', 'chashu_don'),
    ] }, {
    cuisine: '自分で組み立てるラーメン・スープと麺だけの「すっぴん」550円・ホタテフライ280円やレアチャーシュー100円などのトッピング・アリレッド・すき焼きラーメン・Wチャーシューの定番・チーズのチャーシュー丼・濃厚でクリーミーな豚骨スープ・赤いNY風の店内・12席',
    neighborhood: '西心斎橋1-7-2、アメリカ村。四ツ橋駅から約250m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、揚げ物のトッピング。',
    vegan_detail: 'ヴィーガンではありません。濃厚な豚骨スープ、チャーシュー、ホタテフライ。',
    notes: '[ラーメン・アメ村の赤いNY風の自分で作るラーメン] アメリカ村にある12席のラーメン店で、2024年11月開店、赤いニューヨーク風の内装。コンセプトは「すっぴんラーメン」で、スープと麺だけの550円の一杯に好きなトッピングを足していきます。ホタテフライ280円、レアチャーシュー100円など、組み合わせは1兆通り以上と数える人も。スープは濃厚でクリーミーな豚骨で、少し塩辛いという声も、麺はもちもち。「アリレッド」、甘酸っぱいすき焼きラーメン、Wチャーシューの定番も。チャーシュー丼にはチーズ。スタッフは親切。開店時刻に鍵がかかっていたというランチの客もいたので注意。',
  });
}

// ================================================================ 麺や 煌
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126720/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:30'], ['17:30', '22:30']);
  put({
    id: 'osaka_menya_kirameki_higashishinsaibashi', name: '麺や 煌 (Menya Kirameki)', category: 'OMNI',
    lat: 34.672569, lng: 135.50504, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles; soy-sauce tare; wontons.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood (niboshi) broth, pork and chicken chashu.',
    hours_raw: 'Mon and Wed–Sun 11:30–14:30 and 17:30–22:30; closed Tuesday; some evenings have no service (Tabelog). Ramen at lunch; Chinese dishes and ramen in the evening (the owner, January 2026). Cash only; pay at your seat after eating.',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-6-30, Nippo Shimizu-gai Bldg 1F (at the back, left) — 3 min from Nagahoribashi Stn exit 7',
    cuisine: 'Refined shoyu and shio ramen · shoyu ramen ¥900 · special shoyu ¥1,350 · special shio ¥1,300 with three chashu, shiso wonton and egg · shio niboshi with egg ¥1,050 · thin straight noodles · pork rare chashu and chicken chashu · rice ¥150 · 8-seat L-shaped counter',
    website: null, gmaps: gm('麺や 煌 東心斎橋'), menu_url: null,
    notes: "[Ramen · a hidden one-person shoyu and shio counter by Nagahoribashi] An eight-seat L-shaped counter at the very back of a dark, narrow building passage; look for the sign, or the lantern of Chuka Bar Sakurai. The owner runs it alone, serving ramen at lunch and Chinese dishes with ramen in the evening. It's usually quiet. The house favourite is the shoyu (¥900; special ¥1,350), balanced between sharpness and richness on a carefully made dashi. The shio is a golden broth clear enough to see the bottom of the bowl, topped with pork rare chashu, chicken chashu, shiso and menma. The special shio (¥1,300) adds three chashu, a shiso wonton and a sake-scented egg. A clear shio niboshi (¥1,050 with egg) leans seafood. There are no table condiments; pay at your seat, cash only. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'Opened 1 October 2021 (Tabelog)', background: 'A one-person counter; the owner serves ramen by day and Chinese dishes with ramen at night (January 2026 review).', philosophy: 'Sign outside: "A supreme bowl crafted with dedication" (June 2026 review).', specialty: 'Shoyu and shio ramen.',
      anecdotes: [
        { text: '"It was so clear that I could see the bottom of the bowl, with no cloudiness at all. The beautiful golden clear broth had no off-flavors." — June 2026, shio ramen.', source: R + 'B529960108/' },
        { text: '"The broth had a perfect balance of sharpness and richness in the soy sauce flavor… a \'highly refined Shoyu Ramen that you could eat every day.\'" — November 2025, special shoyu.', source: R + 'B519783103/' },
      ],
      japanese_sources_summary: '食べログ: 麺や 煌、大阪市中央区東心斎橋1-6-30 日宝清水街ビル1F、06-6244-5788、予約不可、月・水〜日11:30〜14:30・17:30〜22:30、火曜休み、夜の営業がない日もある、カード・電子マネー不可、8席(L字カウンター)、2021年10月1日開店。口コミ(2025年11月〜2026年6月): 特製塩ラーメン1,300円(チャーシュー3種、大葉のワンタン、酒の香る味玉、揚げえのき、甘くすっきりした塩、細いストレート麺)、特製醤油(キレとコクのバランス、丁寧なだし)、塩煮干し味玉ラーメン1,050円とご飯150円(硬めの細ストレート麺、魚介の澄んだ塩、豚ロースと鶏むねのチャーシュー)、卓上調味料なし、会計は席で、店主が1人で切り盛り、昼はラーメン、夜は中華とラーメン(店主)、ビルの奥の左側、Chuka Bar Sakuraiの提灯が目印、いちばん人気は醤油、特製醤油1,350円、醤油ラーメン900円、黄金色の澄んだ塩スープ(豚のレアチャーシュー、鶏チャーシュー、ねぎ、大葉、メンマ)、看板「こだわりの至高の一杯」。',
      confidence: 'medium', sources: [TB, R + 'B529960108/', R + 'B519783103/', R + 'B521436636/', R + 'B518082681/', R + 'B523914745/', R + 'B528476283/'] },
    ramen: {
      broth_base: ['gyokai'], broth_texture: 'chintan', tare: ['shoyu', 'shio'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Firm, thin straight noodles (November 2025–June 2026).' },
      regional_style: [], sub_genre: ['ramen', 'niboshi'],
      signature_bowl: 'Shoyu ramen ¥900; special shoyu ¥1,350 (February–May 2026).',
      chashu: 'Pork rare chashu and chicken chashu (January–June 2026).',
      notable_toppings: ['shiso wonton', 'seasoned egg', 'shiso', 'menma', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Seafood broth.' },
      pantheon: 'Nagahoribashi\'s hidden one-person counter: a golden, see-through shio and an every-day refined shoyu.',
      profile: { richness: 2, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B528476283/', '"Not as rich as it looked."'],
        oiliness: [R + 'B521436636/', 'Shio niboshi "had a slightly higher oil content" — low-mid overall.'],
        clarity: [R + 'B529960108/', '"So clear that I could see the bottom of the bowl, with no cloudiness at all."'],
        tare_strength: [R + 'B519783103/', '"Neither too strong nor too light."'],
        noodle_firmness: [R + 'B521436636/', '"Firm, thin straight noodles."'],
        aroma_punch: [R + 'B529960108/', '"No off-flavors"; a delicate soup — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B529960108/', R + 'B519783103/', R + 'B521436636/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Hidden at the back of a building passage; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-6-30 日宝清水街ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated November 2025–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目6番30号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528476283/', R + 'B523914745/', R + 'B518082681/', R + 'B521436636/'],
    price_note: 'Prices from November 2025–May 2026 reviews.', last_checked: TODAY, items: [
      it('醤油ラーメン', 'shōyu rāmen', 'Shoyu ramen', '¥900', 'Ramen', 'no', 'no', 'May 2026.', 'shoyu'),
      it('', '', 'Special shoyu ramen', '¥1,350', 'Ramen', 'no', 'no', 'February 2026.', 'tokusei_shoyu'),
      it('', '', 'Special shio ramen', '¥1,300', 'Ramen', 'no', 'no', 'November 2025.', 'tokusei_shio'),
      it('', '', 'Shio niboshi ramen with seasoned egg', '¥1,050', 'Ramen', 'no', 'no', 'January 2026.', 'shio_niboshi'),
      it('', '', 'Rice', '¥150', 'Sides', 'gf', 'vegan', 'January 2026.', 'rice'),
    ] }, {
    cuisine: '洗練された醤油と塩のラーメン・醤油ラーメン900円・特製醤油1,350円・チャーシュー3種と大葉のワンタン、味玉の特製塩1,300円・塩煮干し味玉1,050円・細いストレート麺・豚のレアチャーシューと鶏チャーシュー・ご飯150円・L字カウンター8席',
    neighborhood: '東心斎橋1-6-30 日宝清水街ビル1F(奥の左)。長堀橋駅7番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の細麺、醤油だれ、ワンタン。',
    vegan_detail: 'ヴィーガンではありません。煮干しなど魚介のスープ、豚と鶏のチャーシュー。',
    notes: '[ラーメン・長堀橋の隠れた一人営業の醤油と塩] 暗く細いビルの通路のいちばん奥にある8席のL字カウンターで、看板か「Chuka Bar Sakurai」の提灯が目印。店主が1人で切り盛りし、昼はラーメン、夜は中華とラーメン。たいてい静かです。いちばん人気は醤油(900円、特製1,350円)で、キレとコクのバランスがよく、丁寧にとっただし。塩は器の底が見えるほど澄んだ黄金色のスープに、豚のレアチャーシュー、鶏チャーシュー、大葉、メンマ。特製塩(1,300円)はチャーシュー3種、大葉のワンタン、酒の香る味玉付き。澄んだ塩煮干し(味玉付き1,050円)は魚介寄り。卓上調味料はなく、会計は席で現金のみ。火曜定休。',
  });
}

// ================================================================ 大阪家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27155622/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_osakaya_iekei_dotonbori', name: '大阪家 (Osaka Ya)', category: 'OMNI',
    lat: 34.668762, lng: 135.50713, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-and-chicken broth, smoked chashu.',
    hours_raw: 'Daily 10:00–24:00 (Tabelog). Ticket machine. Tabelog lists no cards, e-money or QR. Queues of 7–20 people are common (October 2026). Rice is ¥100 for all you can eat, from a self-serve bar with garlic, mayonnaise and a spicy sauce.',
    hours: ALL(day(['10:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-chōme east 5-18, Wanwan Bldg 1F — near Nippombashi Stn',
    cuisine: 'Yokohama iekei ramen · rich pork-and-soy broth with spinach, nori and smoked chashu · noodle firmness, richness and oil to order · smoked chashu ramen with rice ¥1,300 · tsukemen (large ¥1,150, hot or cold noodles) · spicy ramen · all-you-can-eat rice ¥100 with garlic, mayo and spicy sauce · opened April 2026',
    website: null, gmaps: gm('大阪家 道頓堀 家系'), menu_url: null,
    notes: "[Ramen · Yokohama iekei at the east end of Dotonbori] A Yokohama iekei shop that opened in April 2026 near Nippombashi. Reviewers call it a direct branch of Daikiya, a well-known Tokyo iekei shop, and there's already a queue of 7–20 at peak times. The broth is very thick pork bone with a sharp soy edge, served with spinach, nori and a seasoned egg; set firmness, richness and oil to taste. Several people warn it's very salty, so start mild if you're not used to iekei. The smoked chashu is the star. Rice is ¥100 for all you can eat, from a self-serve bar of garlic, mayonnaise and a spicy sauce; wrap it in nori dipped in the broth. Tsukemen (large ¥1,150) has a slightly spicy pork-and-chicken dip, with hot or cold noodles. Buy a ticket at the machine; open 10 am to midnight.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 April 2026 (Tabelog)', background: 'Reviewers (October 2026) describe it as a direct branch of the Tokyo iekei shop Daikiya.', philosophy: null, specialty: 'Yokohama iekei ramen; smoked chashu.',
      anecdotes: [
        { text: '"The broth was hot and had a sharp soy sauce flavor combined with the richness of the pork! The chashu was tender and delicious!" — October 2026, smoked chashu ramen with rice ¥1,300.', source: R + 'B536604663/' },
        { text: '"The dipping sauce was a rich blend of pork and chicken broth with a soy sauce base, slightly spicy… The smoked chashu was incredibly delicious." — October 2026, tsukemen (large) ¥1,150.', source: R + 'B530730955/' },
      ],
      japanese_sources_summary: '食べログ: 大阪家、大阪市中央区道頓堀1-東5-18 わんわんビル1F、予約不可、毎日10:00〜24:00、カード・電子マネー・QR不可、禁煙、カウンター席、2026年4月19日開店。2026年10月の口コミ: 土曜13時半に7人待ち、麺の硬さ・味の濃さ・油の量を選べる(普通・普通・多め)、関西においしい家系が増えてうれしい、東京の名店Daikiyaの直系という声、つけ麺(大)1,150円(熱盛りか冷や盛り、豚と鶏の醤油のつけ汁でピリ辛、燻製チャーシュー、味玉、メンマ、ほうれん草、のり)、燻製チャーシュー麺とご飯で1,300円、にんにく入れ放題、ご飯100円で食べ放題(セルフのご飯バー、辛い「裏カッパ」のたれ、にんにく、マヨネーズ)、塩辛いという声、10〜20人の行列、濃厚な豚骨とキレのある醤油、辛いラーメンはとても塩辛い。',
      confidence: 'medium', sources: [TB, R + 'B536604663/', R + 'B530730955/', R + 'B537446236/', R + 'B537725687/', R + 'B529997982/', R + 'B537740107/'] },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Firmness to order; the hot-served tsukemen noodles were chewy but stuck together (October 2026).' },
      regional_style: ['Yokohama iekei'], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: 'Iekei ramen; smoked chashu ramen with rice ¥1,300 (October 2026).',
      chashu: 'Smoked chashu, generous (October 2026).',
      notable_toppings: ['spinach', 'nori', 'seasoned egg', 'menma', 'garlic (free)'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Pork-and-chicken broth.' },
      pantheon: 'East Dotonbori\'s Daikiya-line iekei: thick, salty pork-soy broth, smoked chashu and ¥100 bottomless rice.',
      profile: { richness: 5, oiliness: 4, clarity: 1, tare_strength: 5, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B537725687/', '"It was incredibly thick!! The flavor of the pork bones hit me hard."'],
        oiliness: [R + 'B529997982/', 'Ordered with oil "extra"; iekei style — placed high (inferred).'],
        clarity: [R + 'B537725687/', 'Very thick pork-bone broth — opaque.'],
        tare_strength: [R + 'B537740107/', '"It was extremely salty."'],
        noodle_firmness: [R + 'B530730955/', 'Firmness to order; hot tsukemen noodles "chewy but lacked a bit of firmness" — mid-scale.'],
        aroma_punch: [R + 'B537725687/', '"The sharpness of the soy sauce was also prominent, creating a punchy taste!"'],
      },
      confidence: 'medium', sources: [R + 'B537725687/', R + 'B537740107/', R + 'B536604663/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; customization called out at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市中央区道頓堀1-東5-18 わんわんビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened April 2026; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI resolves the old-style address only to 大阪府大阪市中央区道頓堀一丁目 (chōme, 360m) and OSM has no match, so the pin rests on the Tabelog point alone; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536604663/', R + 'B530730955/', R + 'B537446236/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('ラーメン', 'rāmen', 'Iekei ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('', '', 'Smoked chashu ramen with rice', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'kunsei'),
      it('つけ麺', 'tsukemen', 'Tsukemen (large; hot or cold noodles)', '¥1,150', 'Tsukemen', 'no', 'no', 'October 2026.', 'tsukemen'),
      it('', '', 'Spicy ramen', '', 'Ramen', 'no', 'no', 'October 2026.', 'kara'),
      it('', '', 'All-you-can-eat rice (self-serve bar)', '¥100', 'Rice', 'ask', 'ask', 'October 2026.', 'rice'),
    ] }, {
    cuisine: '横浜家系ラーメン・ほうれん草、のり、燻製チャーシューの濃厚な豚骨醤油・麺の硬さ、味の濃さ、油の量を選べる・燻製チャーシュー麺とご飯で1,300円・つけ麺(大1,150円、熱盛りか冷や盛り)・辛いラーメン・ご飯100円で食べ放題(にんにく、マヨ、辛いたれ)・2026年4月開店',
    neighborhood: '道頓堀1丁目東5-18 わんわんビル1F。日本橋駅の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油だれ。',
    vegan_detail: 'ヴィーガンではありません。豚と鶏のスープ、燻製チャーシュー。',
    notes: '[ラーメン・道頓堀の東端の横浜家系] 2026年4月に日本橋の近くに開店した横浜家系の店。口コミでは東京の有名な家系の店Daikiyaの直系で、混む時間は早くも7〜20人の行列。スープはとても濃厚な豚骨にキレのある醤油で、ほうれん草、のり、味玉。硬さ、濃さ、油は好みで。とても塩辛いという声が複数あるので、家系に慣れていなければ薄めから。主役は燻製チャーシュー。ご飯は100円で食べ放題、にんにく、マヨネーズ、辛いたれのセルフのバーから。スープに浸したのりでご飯を巻いて。つけ麺(大1,150円)は豚と鶏のピリ辛のつけ汁で、麺は熱盛りか冷や盛り。券売機で食券を買い、朝10時から深夜0時まで。',
  });
}

save();
