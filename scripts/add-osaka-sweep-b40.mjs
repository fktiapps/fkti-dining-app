// Osaka sweep (2-mile circle around Dotonbori), batch 40 — ramen phase, nearest first (all OMNI).
//   + HATENA (Thai since 2000, to 2 am — filed 'other')
//   + 天蓬八戒 (Taiwanese pork-rib noodles, opened Dec 2025 — filed 'other')
//   + 燙楽屋 麻辣湯 (pick-your-own malatang with knife-cut noodles — filed 'other')
//   + 尾道文化ラーメン (Onomichi ramen with back fat, since 2011)
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 40);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ HATENA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000895/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_hatena_thai_higashishinsaibashi', name: 'HATENA (はてな)', category: 'OMNI',
    lat: 34.673418, lng: 135.503316, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. Rice noodles and grilled meats may suit, but no source covers soy sauce, oyster sauce or wheat in the sauces.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: 'Ask. No vegetarian dish is described; Thai sauces often contain fish sauce (the gai yang comes with a nam pla dip).',
    hours_raw: 'Daily 17:30–2:00, open year-round (Tabelog). Reservations recommended — fully booked at times (October 2026). Private use for 20–50 people. Cards, e-money and QR accepted.',
    hours: ALL(day(['17:30', '02:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-17-2 — about 300 m from Nagahoribashi Stn',
    cuisine: 'Long-running Thai restaurant · koh muu yang (grilled pork neck) · gai yang with spicy nam pla sauce · yam woon sen seafood glass-noodle salad · pad thai · fresh spring rolls · stir-fried water spinach · pho in a hot pot · mango pudding, coconut ice cream · Singha beer · two floors, 100 seats · open to 2 am',
    website: null, gmaps: gm('HATENA タイ料理 東心斎橋'), menu_url: null,
    notes: "[Thai · Shinsaibashi's long-running Thai house, open to 2 am] A 100-seat Thai restaurant in Higashi-Shinsaibashi, open since 2000 and often full. Counter and tables are downstairs and a big room upstairs; the feel is straight out of Thailand. The reliable orders are koh muu yang, grilled pork neck charred outside with a spicy sauce, and gai yang chicken thigh with a nam pla dip. The yam woon sen glass-noodle salad is packed with shrimp, clams and minced seafood, and the pad thai is a regular's craving. Expect real heat even in dishes you thought were mild. For a late finish there's pho in a hot pot, with mango pudding or coconut ice cream. Portions suit two or three people sharing. A long-time regular thinks prices have crept up.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 December 2000 (Tabelog)', background: 'A long-running Thai restaurant in Higashi-Shinsaibashi (reviews).', philosophy: null, specialty: 'Thai grills and salads.',
      anecdotes: [
        { text: '"The grilled pork neck (Koh Muu Yang) was as reliable as ever. The pork was perfectly grilled, with a nice char on the outside and juicy on the inside." — August 2026.', source: R + 'B469281439/' },
        { text: '"I\'m not very good with spicy food, so I thought I ordered milder dishes, but they all turned out to be quite spicy." — September 2026.', source: R + 'B536370040/' },
      ],
      japanese_sources_summary: '食べログ: HATENA、大阪市中央区東心斎橋1-17-2、06-4704-8107、予約可、毎日17:30〜翌2:00、年中無休、カード・電子マネー・QR決済可、100席、20〜50名で貸切可、2000年12月2日開店。2026年の口コミ(8〜10月): シンガービールで乾杯、コームーヤーン(豚トロの炭火焼き)、ヤムウンセン(海鮮と春雨、野菜たっぷり)、飲み歩きの締めに、鍋のフォー、マンゴープリンとココナッツアイス、生春巻き、空芯菜炒め、パッタイ、辛くないつもりでも辛い、甘いミルクティー、満席で少し待った、えびせん、チャイ、少し値上がりして量が減ったかもという声、ガイヤーン(ナンプラーの辛いたれ)、1階はカウンターとテーブル、2階は広いテーブル席、2〜3人でのシェアがおすすめ、カオマンガイがあればという声。',
      confidence: 'medium', sources: [TB, R + 'B469281439/', R + 'B536370040/', R + 'B536842414/', R + 'B490930970/', R + 'B536734030/', R + 'B536965268/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large, lively room; book for groups.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目17番2号 (go) 6m; OSM はてな node/2417570390 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B469281439/', R + 'B536842414/', R + 'B536370040/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('', '', 'Koh muu yang (grilled pork neck)', '', 'Grills', 'ask', 'no', 'August 2026.', 'kohmuyang'),
      it('', '', 'Gai yang (grilled chicken thigh) with nam pla sauce', '', 'Grills', 'ask', 'no', 'October 2026.', 'gaiyang'),
      it('', '', 'Yam woon sen (seafood glass-noodle salad)', '', 'Salads', 'ask', 'no', 'August–October 2026.', 'yumwoonsen'),
      it('', '', 'Pad thai', '', 'Noodles', 'ask', 'no', 'September–October 2026.', 'padthai'),
      it('', '', 'Fresh spring rolls', '', 'Starters', 'ask', 'ask', 'September 2026.', 'springroll'),
      it('', '', 'Pho in a hot pot', '', 'Noodles', 'ask', 'no', 'August 2026.', 'pho'),
    ] }, {
    cuisine: '老舗のタイ料理店・コームーヤーン(豚トロの炭火焼き)・ナンプラーの辛いたれのガイヤーン・ヤムウンセン(海鮮の春雨サラダ)・パッタイ・生春巻き・空芯菜炒め・鍋のフォー・マンゴープリン、ココナッツアイス・シンガービール・2フロア100席・深夜2時まで',
    neighborhood: '東心斎橋1-17-2。長堀橋駅から約300m',
    gf_detail: '要確認。米麺や焼き物は合いそうですが、醤油、オイスターソース、たれの小麦についての情報はありません。',
    vegan_detail: '要確認。ベジタリアンの料理の記述はなく、タイのたれはナンプラーを使うことが多いです(ガイヤーンはナンプラーのたれ)。',
    notes: '[タイ料理・心斎橋の老舗タイ料理、深夜2時まで] 東心斎橋にある100席のタイ料理店で、2000年開店、満席のことも多い。1階はカウンターとテーブル、2階は広い席で、まるでタイにいるよう。定番はコームーヤーン(外は焦げ目、中はジューシーな豚トロに辛いたれ)と、ナンプラーのたれのガイヤーン。ヤムウンセンはエビ、アサリ、魚介のそぼろたっぷりで、パッタイを目当てに通う常連も。辛くないつもりの料理でもしっかり辛いので注意。遅い締めには鍋のフォー、デザートにマンゴープリンかココナッツアイス。量は2〜3人で分けるのにちょうどいい。長年の常連には値上がりしたという声も。',
  });
}

// ================================================================ 天蓬八戒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27153858/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '01:20']), E = day(['11:00', '01:20']);
  put({
    id: 'osaka_tenpo_hakkai_higashishinsaibashi', name: '天蓬八戒 (Tenpo Hakkai)', category: 'OMNI',
    lat: 34.673416, lng: 135.503466, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried pork-rib coating; soy-based broth and sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried pork spare ribs, braised pork rice, shrimp in the broth.',
    hours_raw: 'Mon–Fri 12:00–1:20; Sat–Sun 11:00–1:20 (Tabelog). Cash only — no cards, e-money or QR (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-14-24 — about 290 m from Nagahoribashi Stn',
    cuisine: 'Taiwanese pork-rib noodles · pai gu su mian (crispy fried spare ribs on noodle soup) ¥1,500 · gan ban mian (Taiwanese mixed noodles) · lu rou fan (braised pork rice) · black vinegar, chili oil and garlic on the table · Taiwanese staff · 20 seats',
    website: null, gmaps: gm('天蓬八戒 東心斎橋'), menu_url: null,
    notes: "[Taiwanese · Taipei pork-rib noodles in Higashi-Shinsaibashi] A 20-seat Taiwanese noodle shop that opened on 15 December 2025, run by Taiwanese staff. A March 2026 reviewer says it brings a beloved Taipei eatery to Japan for the first time. The signature is pai gu su mian (¥1,500): fried spare ribs, crisp outside and falling-apart tender down to the cartilage, on noodle soup. The broth is variously described as a gentle shrimp-and-daikon soup with a spicy kick, a creamy rich one, and a soy-leaning version that needs the table chili oil and black vinegar. Gan ban mian, the soupless mixed noodle, gets addictive as you stir. Lu rou fan comes on the side. Open to 1:20 am, and often quiet. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 December 2025 (Tabelog; reviews)', background: 'A March 2026 reviewer describes it as the first Japan branch of a popular Taipei eatery, with an all-Taiwanese staff; another links the pork rib to Ximending.', philosophy: null, specialty: 'Pai gu su mian (Taiwanese pork-rib noodles).',
      anecdotes: [
        { text: '"The signature dish, Pai Gu Su Men, features a creamy, rich broth that perfectly clings to the flat, medium-thick noodles. The generous pieces of pork rib are crispy on the outside and tender on the inside." — March 2026.', source: R + 'B524413503/' },
        { text: '"The broth was carefully made from shrimp and Japanese radish, with a spicy kick… Pai Gu Su Men for JPY 1500." — July 2026.', source: R + 'B532424591/' },
      ],
      japanese_sources_summary: '食べログ: 天蓬八戒、大阪市中央区東心斎橋1-14-24、06-6732-8392、予約不可、月〜金12:00〜翌1:20、土日11:00〜翌1:20、カード・電子マネー・QR不可、20席(カウンター10、5人テーブル2)、禁煙、2025年12月15日開店。2026年の口コミ(1〜7月): 台湾の排骨麺の専門店、まぜ麺もあり、排骨麺と魯肉飯、のりとメンマで日本寄りの味、1,280円は高いと思ったが排骨が大きく6個、豪華排骨麺1,500円、西門町の排骨、見た目よりあっさり、卓上の辣油・にんにく・酢なしだと醤油ラーメンは物足りないという声、台北の人気店の日本初出店、スタッフは全員台湾人、排骨酥麺(クリーミーで濃いスープ、中太の平打ち麺、外はサクッと中はほろほろ)、乾拌麺(汁なし、混ぜるほどクセになる)、卓上に黒酢や辣油、背骨酥麺1,500円(エビと大根のだし、ピリ辛、中細ストレート麺、排骨3個、味玉、メンマ、ねぎ、大根、もやし)。',
      confidence: 'medium', sources: [TB, R + 'B524413503/', R + 'B532424591/', R + 'B521169995/', R + 'B521468679/', R + 'B521756166/', R + 'B523876207/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Taiwanese staff; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-14-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened December 2025; reviews dated January–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目14番24号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532424591/', R + 'B521468679/'],
    price_note: 'Prices from January and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pai gu su mian (pork-rib noodles)', '¥1,500', 'Noodles', 'no', 'no', 'July 2026.', 'paigu'),
      it('', '', 'Gan ban mian (Taiwanese mixed noodles)', '', 'Noodles', 'no', 'no', 'March 2026.', 'ganban'),
      it('魯肉飯', 'rūrō han', 'Lu rou fan (braised pork rice)', '', 'Rice', 'no', 'no', 'January 2026.', 'luroufan'),
    ] }, {
    cuisine: '台湾の排骨麺・排骨酥麺(カリッと揚げたスペアリブの汁麺)1,500円・乾拌麺(台湾のまぜ麺)・魯肉飯・卓上に黒酢、辣油、にんにく・台湾人スタッフ・20席',
    neighborhood: '東心斎橋1-14-24。長堀橋駅から約290m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、排骨の衣、醤油ベースのスープとたれ。',
    vegan_detail: 'ヴィーガンではありません。揚げたスペアリブ、魯肉飯、スープにエビ。',
    notes: '[台湾料理・東心斎橋の台北の排骨麺] 2025年12月15日に開店した20席の台湾の麺の店で、スタッフは台湾人。2026年3月の口コミでは台北の人気店の日本初出店。看板は排骨酥麺(1,500円)で、外はカリッと、中は軟骨までほろほろの揚げスペアリブを汁麺に。スープはエビと大根のやさしいピリ辛、クリーミーで濃厚、醤油寄りで卓上の辣油や黒酢が要る、と人によって表現はさまざま。汁なしの乾拌麺は混ぜるほどクセになり、魯肉飯も添えて。深夜1時20分まで営業、空いていることが多い。現金のみ。',
  });
}

// ================================================================ 燙楽屋 麻辣湯
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27151343/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.0665567168.com/';
  put({
    id: 'osaka_tang_rakuya_malatang_nipponbashi', name: '燙楽屋 麻辣湯 (Tang Rakuya Mala Tang)', category: 'OMNI',
    lat: 34.665947, lng: 135.505922, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: knife-cut wheat noodles and wheat gluten among the ingredients; broth seasoning not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: light tonkotsu-style broth (May 2026); ingredients include meat and fish cakes.',
    hours_raw: 'Daily 11:00–23:59 (L.O. 23:45) (Tabelog). Choose ingredients, have them weighed (minimum weight), pick a spice level, pay, then wait for your number. Cards, e-money and QR accepted. Discount campaigns seen in 2026 (20–30% off).',
    hours: ALL(day(['11:00', '23:59'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nippombashi 1-20-2 1F — 3 min from Nippombashi Stn, near Kuromon Market',
    cuisine: 'Pick-your-own malatang from 70+ ingredients · knife-cut noodles, sweet-potato and glass noodles · shrimp, fish balls, radish cake, shredded kombu, Spam · light tonkotsu-style mala broth, spice levels · unlimited cilantro and green onion · 25 seats',
    website: OWN, gmaps: gm('燙楽屋 麻辣湯 日本橋'), menu_url: null,
    notes: "[Chinese · pick-your-own malatang by Kuromon Market] A malatang shop three minutes from Nippombashi, open since July 2025, with 70-plus ingredients to choose from. Fill a bowl, have it weighed (there's a minimum), pick a spice level, pay, and wait for your number. Reviewers single out the knife-cut noodles for their chew, along with the radish cake, fish balls and shrimp. The broth is a light, tonkotsu-style mala that starts mild and builds; two reviewers found it a little thin. Cilantro and green onion are unlimited, so pile them on. The staff are attentive, and the clientele is international. Watch for discount campaigns.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 July 2025 (Tabelog)', background: 'A Sichuan malatang shop (Tabelog).', philosophy: null, specialty: 'Malatang; knife-cut noodles.',
      anecdotes: [
        { text: '"The knife-cut noodles were incredibly delicious as well! Their chewy texture paired perfectly with the broth." — May 2026.', source: R + 'B528209886/' },
        { text: '"At first glance, it looked very red, and I was a bit apprehensive, but it was only slightly spicy at first. As I continued eating, the flavor became more and more addictive." — July 2026.', source: R + 'B532709909/' },
      ],
      japanese_sources_summary: '食べログ: 燙楽屋 麻辣湯、大阪市中央区日本橋1-20-2 1F、06-6556-7168、予約不可、毎日11:00〜23:59(L.O.23:45)、カード・電子マネー・QR決済可、25席、禁煙、2025年7月11日開店、サイト 0665567168.com。2026年の口コミ(4〜8月): パクチー入れ放題、うずら卵、魚卵のかまぼこ、さつまいも麺、エビが一番、スープがやや薄いという声、ねぎ入れ放題、30%オフで約2,000円、70種以上の具材、大根餅、刻み昆布、スパム、刀削麺がもちもち、春雨と麩、辛さ2は軽いとんこつ風、量って会計し番号札で待つ、最低重量あり、黒門市場の近く、20%オフ、スタッフの気配り、エプロンやかご、最初は少し辛いだけでだんだんクセになる、日本人向けの味。',
      confidence: 'medium', sources: [TB, R + 'B528209886/', R + 'B532709909/', R + 'B529870796/', R + 'B533761998/', R + 'B519554947/', R + 'B526112382/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service ingredient case; attentive staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-20-2 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目20番2号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528209886/', R + 'B529870796/'],
    price_note: 'Priced by weight; no list prices captured.', last_checked: TODAY, items: [
      it('', '', 'Malatang by weight (70+ ingredients)', '', 'Malatang', 'ask', 'no', 'April–August 2026.', 'malatang'),
      it('', '', 'Knife-cut noodles (ingredient)', '', 'Malatang', 'no', 'no', 'May 2026.', 'daoxiao'),
    ] }, {
    cuisine: '70種以上の具材から選ぶ麻辣湯・刀削麺、さつまいも麺、春雨・エビ、つみれ、大根餅、刻み昆布、スパム・軽いとんこつ風の麻辣スープ、辛さを選べる・パクチーとねぎは入れ放題・25席',
    neighborhood: '日本橋1-20-2 1F。日本橋駅から徒歩3分、黒門市場の近く',
    gf_detail: '実際にはグルテンフリーではありません。具材に小麦の刀削麺や麩、スープの味付けは不明。',
    vegan_detail: 'ヴィーガンではありません。軽いとんこつ風のスープ(2026年5月)、具材に肉やつみれ。',
    notes: '[中華・黒門市場近くの自分で選ぶ麻辣湯] 日本橋駅から3分、2025年7月開店の麻辣湯の店で、具材は70種以上。器に入れて量り(最低重量あり)、辛さを選んで会計、番号札で待ちます。口コミが推すのはもちもちの刀削麺、大根餅、つみれ、エビ。スープは軽いとんこつ風の麻辣で、最初はマイルド、だんだん辛くなり、少し薄いと感じた人も。パクチーとねぎは入れ放題なのでたっぷりと。スタッフは気配りがあり、客は国際色豊か。割引キャンペーンにも注目。',
  });
}

// ================================================================ 尾道文化ラーメン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27059019/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_onomichi_bunka_ramen_shinsaibashi', name: '尾道文化ラーメン (Onomichi Bunka Ramen)', category: 'OMNI',
    lat: 34.673747, lng: 135.501886, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; soy-sauce tare; gyoza, fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: niboshi and tonkotsu broth, back fat, chashu.',
    hours_raw: 'Daily 11:30–2:00 (Tabelog). Ticket machine; cash only — no cards, e-money or QR (Tabelog). Smoking allowed (Tabelog).',
    hours: ALL(day(['11:30', '02:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 1-3-12, Trill Shinsaibashi — a block off the shopping street, 200 m from Shinsaibashi Stn',
    cuisine: 'Onomichi ramen (soy and niboshi with back fat) · shoyu ramen (soy and tonkotsu) · shio ramen · tonkotsu ramen · extra noodles · gyoza · fried rice · noodle firmness on request · 8 counter seats · open to 2 am',
    website: null, gmaps: gm('尾道文化ラーメン 心斎橋'), menu_url: null,
    notes: "[Ramen · Onomichi-style back-fat soy ramen off Shinsaibashi-suji] An eight-seat counter a block from the Shinsaibashi shopping street, open since 2011, with the nostalgic feel of an old Chinese eatery and the TV on. The Onomichi ramen is a light soy-and-niboshi broth with flecks of back fat and a touch of heat, with sweet chashu. The shoyu mixes soy and tonkotsu, gentle enough to drink to the last drop, and there are also shio and tonkotsu bowls. The owner asks whether you want the noodles firm. Gyoza and a fragrant, moist fried rice round it out. It fills up with overseas visitors at lunch. Buy a ticket; cash only. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 July 2011 (Tabelog)', background: 'Onomichi (Hiroshima)-style ramen counter (reviews).', philosophy: null, specialty: 'Onomichi ramen.',
      anecdotes: [
        { text: '"The noodles were smooth, the broth was a light soy sauce flavor, and the back fat brought pure happiness with every bite." — July 2026, shoyu ramen.', source: R + 'B532091440/' },
        { text: '"The broth was lighter than I expected, with a hint of spiciness, and I could taste the umami from the soy sauce and niboshi (dried sardines)." — August 2026, Onomichi ramen.', source: R + 'B534707592/' },
      ],
      japanese_sources_summary: '食べログ: 尾道文化ラーメン、大阪市中央区心斎橋筋1-3-12 トリル心斎橋、06-6241-3866、予約不可、毎日11:30〜翌2:00、カード・電子マネー・QR不可、8席(カウンターのみ)、喫煙可、2011年7月15日開店。2026年の口コミ(5〜8月): 尾道ラーメンかとんこつを選べる、とんこつはマイルド、チャーシューがおいしい、券売機、昔ながらの中華料理店の雰囲気、醤油ラーメンと餃子、店主に麺の硬さを聞かれる、なめらかな麺、あっさり醤油と背脂、胡椒で味変、昼は海外の観光客で満席に、観光客は券売機でなく現金で直接、醤油ととんこつの合わせ、ねぎたっぷり、味の濃いメンマ、香ばしくしっとりした炒飯、塩ラーメン、あっさりで滋味深い、テレビで金曜ロードショー、尾道ラーメンと替え玉、甘いチャーシュー、醤油と煮干しのうま味、ピリ辛。',
      confidence: 'medium', sources: [TB, R + 'B532091440/', R + 'B534707592/', R + 'B532609299/', R + 'B532844676/', R + 'B528232513/', R + 'B532569727/'] },
    ramen: {
      broth_base: ['gyokai', 'tonkotsu'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'assari',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Smooth noodles; firmness on request (July 2026).' },
      regional_style: ['Onomichi'], sub_genre: ['ramen'],
      signature_bowl: 'Onomichi ramen (August 2026); shoyu ramen (July 2026).',
      chashu: 'Sweet chashu with a firmer texture than the usual fatty cut (July–August 2026).',
      notable_toppings: ['back fat', 'green onion', 'menma', 'seasoned egg'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Niboshi and pork broth.' },
      pantheon: 'Shinsaibashi\'s Onomichi counter: a light soy-niboshi broth flecked with back fat, until 2 am.',
      profile: { richness: 2, oiliness: 3, clarity: 3, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B534707592/', '"The broth was lighter than I expected."'],
        oiliness: [R + 'B532091440/', '"The back fat brought pure happiness with every bite" — mid-scale.'],
        clarity: [R + 'B532844676/', '"The broth was refreshing and had a simple flavor" — mid-scale (inferred).'],
        tare_strength: [R + 'B534707592/', '"I could taste the umami from the soy sauce and niboshi" — mid-scale.'],
        noodle_firmness: [R + 'B532091440/', 'Firmness on request; "smooth" — mid-scale.'],
        aroma_punch: [R + 'B532609299/', '"The gentle flavor of the soup" — placed low.'],
      },
      confidence: 'medium', sources: [R + 'B534707592/', R + 'B532091440/', R + 'B532844676/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-3-12 トリル心斎橋',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目3番12号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534707592/', R + 'B532091440/'],
    price_note: 'No prices captured.', last_checked: TODAY, items: [
      it('尾道ラーメン', 'Onomichi rāmen', 'Onomichi ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'onomichi'),
      it('醤油ラーメン', 'shōyu rāmen', 'Shoyu ramen', '', 'Ramen', 'no', 'no', 'July 2026.', 'shoyu'),
      it('塩ラーメン', 'shio rāmen', 'Shio ramen', '', 'Ramen', 'no', 'no', 'July 2026.', 'shio'),
      it('', '', 'Tonkotsu ramen', '', 'Ramen', 'no', 'no', 'May 2026.', 'tonkotsu'),
      it('餃子', 'gyōza', 'Gyoza', '', 'Sides', 'no', 'no', 'July 2026.', 'gyoza'),
      it('炒飯', 'chāhan', 'Fried rice', '', 'Sides', 'no', 'no', 'July 2026.', 'chahan'),
    ] }, {
    cuisine: '尾道ラーメン(醤油と煮干し、背脂)・醤油ラーメン(醤油ととんこつ)・塩ラーメン・とんこつラーメン・替え玉・餃子・炒飯・麺の硬さを選べる・カウンター8席・深夜2時まで',
    neighborhood: '心斎橋筋1-3-12 トリル心斎橋。商店街から1本入った場所、心斎橋駅から200m',
    gf_detail: 'グルテンフリーではありません。小麦の麺、醤油だれ、餃子、炒飯。',
    vegan_detail: 'ヴィーガンではありません。煮干しととんこつのスープ、背脂、チャーシュー。',
    notes: '[ラーメン・心斎橋筋そばの尾道の背脂醤油ラーメン] 心斎橋の商店街から1本入った8席のカウンターで、2011年開店、昔ながらの中華料理店の雰囲気でテレビもついています。尾道ラーメンはあっさりした醤油と煮干しのスープに背脂、ほんのりピリ辛で、甘いチャーシュー。醤油は醤油ととんこつの合わせで、最後まで飲めるやさしさ。塩ととんこつもあります。店主が麺の硬さを聞いてくれます。餃子と、香ばしくしっとりした炒飯も。昼は海外の観光客で満席に。食券制で現金のみ。喫煙可。',
  });
}

save();
