// Osaka sweep (2-mile circle around Dotonbori), batch 89 — mom-and-pop phase (all OMNI).
//   + 煙華香辛 (Chinese-spice izakaya, 20+ craft gins, open to 05:00 Fri–Sat; Sennichimae)
//   + とんかつ 今奈良 (low-temperature tonkatsu of Watanabe Berkshire and Imoko pork; Sennichimae)
//   + 地魚と天ぷら うろこ屋 (rare local fish, sashimi and tempura, big sake list; Mitsudera-suji)
//   + おはら (Hiroshima-style okonomiyaki, owner runs it alone; Nishi-Shinsaibashi) — mom_and_pop
//   + 炭火焼寝床 心斎橋本店 (Kansai-style unsteamed charcoal eel, eel skewers, courses)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 89);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 煙華香辛
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27120040/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.engespice.com/';
  const WK = day(['17:00', '23:59']), LATE = day(['17:00', '05:00']);
  put({
    id: 'osaka_enge_spice_sennichimae', name: '煙華香辛 (Enge Spice)', category: 'OMNI',
    lat: 34.667636, lng: 135.50373, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: spring rolls, shrimp mayo, soy and doubanjiang seasoning; no gluten-free menu found.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, lamb, shrimp and pork throughout.',
    hours_raw: 'Sun–Thu, holidays and days before holidays 17:00–24:00; Fri–Sat 17:00–05:00; last order 30 minutes before closing; irregular holidays posted on social media (Tabelog, staff-maintained; official site). Curry lunch on some days (2026 reviews; hours not listed). Cards accepted.',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: LATE, 5: LATE, 6: WK }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-9-22, Yukari Bldg 1F, down an alley — 5 min from Nippombashi Stn exit 2, 6 min from Namba Stn exit 15A',
    cuisine: 'Chinese-meets-spice izakaya · yodare-dori (mouthwatering chicken) with sesame sauce · iron-pot spiced mapo tofu · shrimp chili, shrimp mayo · spicy lamb stir-fry · spring rolls · spiced kimchi, pickled celery, cucumber with salted kombu · spice curry to finish, e.g. chicken neck and tomato, Akashi octopus, duck keema with shiso and umeboshi · 20+ craft gins · hot-pot courses with 120 minutes of drinks · 12 table seats, 4 at the counter',
    website: OWN, gmaps: gm('煙華香辛 千日前'), menu_url: null,
    notes: "[Chinese · a spice izakaya with craft gin, open until 05:00 on weekends] An alley izakaya in Sennichimae, open since 2020, that layers aroma rather than raw heat onto familiar Chinese dishes. The house favorites are the yodare-dori, tender chicken in a nutty sesame-spice sauce, and the iron-pot mapo tofu; diners also praise the shrimp chili, the spicy lamb stir-fry and even the kimchi, and small plates let you try many. Spice curries close the night, rotating flavors such as chicken neck with tomato, Akashi octopus, or duck keema with shiso and umeboshi; on some days there's a curry lunch, which one eight-time regular calls the best in Osaka. More than 20 craft gins are matched to the food, and staff are generous with recommendations. Hot-pot courses come with two hours of drinks. Seating is a bit tight. Open until 24:00, Fridays and Saturdays until 05:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 October 2020 (Tabelog)', background: 'Spice izakaya, "Chinese × spice" concept (official site engespice.com; Tabelog, staff-maintained).', philosophy: 'Aroma over heat, so the flavors carry through the meal and suit drinks (official site).', specialty: 'Yodare-dori; iron-pot mapo tofu; spice curry; craft gin.',
      anecdotes: [
        { text: '"The tender chicken was complemented by a rich sauce with a nutty sesame flavor and a hint of spices… Personally, I was impressed by the spicy lamb stir-fry." — September 2026.', source: R + 'B535560256/' },
        { text: '"This time, the curry menu featured three varieties: chicken neck with tomato, Akashi octopus red, and duck keema with shiso and umeboshi in a Japanese-style broth." — September 2026, lunch, eighth visit.', source: R + 'B495200958/' },
      ],
      japanese_sources_summary: '公式 engespice.com: スパイス居酒屋 煙華香辛、千日前のゆかりビル1F、中華×スパイスのエスニック酒場、香りを重視、常時20種類以上のクラフトジン、名物の口水鶏(ヨダレドリ)と鉄鍋香辛麻婆豆腐、火鍋コースなど120分飲み放題付きのコース3種、平日10名・週末12名から貸切(最大20名)、日〜木・祝・祝前日は0:00まで、金土は5:00まで、締めの特製スパイスカレー。食べログ(店舗会員): 千日前1-9-22、なんば駅15A出口から徒歩6分、日本橋駅2番出口から徒歩5分、ラストオーダーは閉店30分前、不定休(SNSで告知)、カード可、16席(テーブル12、カウンター4)、2020年10月31日開店。口コミ(2026年7〜10月): ランチのカレー、首肉とトマト、明石蛸のレッド、鴨キーマに紫蘇と梅のだし、土用の丑の日の鰻とバスマティライスのひつまぶし風3,000円、路地の隠れ家、席は少し狭い、テレビで紹介、スタッフがおすすめ料理とジンを丁寧に説明、セロリの漬物、海老マヨ、麻婆豆腐、あいがけカレー、ジン4種、塩昆布きゅうり、よだれ鶏、海老チリ、羊肉の辛い炒め、春巻き、キムチ、寒くなったら鍋コース、丁寧な接客。',
      confidence: 'medium', sources: [TB, OWN, R + 'B535560256/', R + 'B495200958/', R + 'B534814224/', R + 'B535009231/', R + 'B536225891/', R + 'B538008921/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain dishes and gins in detail (September 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-9-22 ゆかりビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); official site live; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目9番22号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OWN, R + 'B535560256/', R + 'B495200958/', R + 'B535009231/'],
    price_note: 'One price from a July 2026 review; dinner spend about ¥3,000–4,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Yodare-dori (mouthwatering chicken)', '', 'Signature', 'no', 'no', 'Official site; September 2026.', 'yodaredori'),
      it('', '', 'Iron-pot spiced mapo tofu', '', 'Signature', 'no', 'no', 'Official site.', 'mapo'),
      it('', '', 'Spicy lamb stir-fry', '', 'Mains', 'no', 'no', 'September 2026.', 'lamb'),
      it('', '', 'Spice curry', '', 'Curry', 'no', 'no', 'Rotating flavors; September 2026.', 'curry'),
      it('', '', 'Craft gin', '', 'Drinks', 'ask', 'ask', '20+ kinds (official site).', 'gin'),
    ] }, {
    cuisine: '中華×スパイスの居酒屋・胡麻だれのよだれ鶏・鉄鍋香辛麻婆豆腐・海老チリ、海老マヨ・羊肉の辛い炒め・春巻き・スパイスのキムチ、セロリの漬物、塩昆布きゅうり・締めのスパイスカレー(首肉とトマト、明石蛸、紫蘇と梅の鴨キーマなど)・20種類以上のクラフトジン・120分飲み放題付きの火鍋コース・テーブル12席、カウンター4席',
    neighborhood: '中央区千日前1-9-22 ゆかりビル1F、路地の奥。日本橋駅2番出口から徒歩5分、なんば駅15A出口から徒歩6分',
    gf_detail: '実際にはグルテンフリーではありません。春巻き、海老マヨ、醤油や豆板醤の味付け。グルテンフリーのメニューは見つかりませんでした。',
    vegan_detail: 'ヴィーガンではありません。鶏肉、羊肉、海老、豚肉が中心。',
    notes: '[中華・クラフトジンとスパイス居酒屋、週末は朝5時まで] 千日前の路地にある居酒屋で、2020年開店、なじみの中華に辛さより香りを重ねる。名物はナッツのような胡麻とスパイスのたれの柔らかいよだれ鶏と鉄鍋の麻婆豆腐、海老チリ、羊肉の辛い炒め、キムチまで好評で、少量ずついろいろ試せる。締めはスパイスカレーで、首肉とトマト、明石蛸、紫蘇と梅の鴨キーマなど味が替わる。日によってはカレーのランチもあり、8回通う常連は大阪一と言う。20種類以上のクラフトジンを料理に合わせ、スタッフがていねいに勧めてくれる。火鍋のコースは2時間飲み放題付き。席は少し狭め。24時まで、金土は朝5時まで。',
  });
}

// ================================================================ とんかつ 今奈良
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27144792/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_tonkatsu_imanara_sennichimae', name: 'とんかつ 今奈良 (Tonkatsu Imanara)', category: 'OMNI',
    lat: 34.667594, lng: 135.503595, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, deep-fried cutlets; sauce and dashi soy.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlets and pork miso soup.',
    hours_raw: 'Daily 11:30–16:00 (L.O. 15:15) and 17:00–22:30 (L.O. 21:45); open year-round (Tabelog, staff-maintained). QR ordering (October 2026). Cards and PayPay accepted (Tabelog).',
    hours: ALL(day(['11:30', '16:00'], ['17:00', '22:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-9-21, 1F — 5 min from Nippombashi or Namba Stn',
    cuisine: 'Tonkatsu fried low then high for tenderness, about 20 min · Watanabe Berkshire pork from Kagoshima: Spencer roll (ribeye) 180 g, tenderloin · lighter Imoko SPF pork · original sauce with a hint of curry, dashi soy and rock salt, jigarashi mustard · refillable cabbage with carrot-and-perilla dressing · pork miso soup · rice in sizes · counter and tables, 12 seats',
    website: null, gmaps: gm('とんかつ 今奈良 千日前'), menu_url: null,
    notes: "[Japanese · low-temperature tonkatsu of Watanabe Berkshire pork in Sennichimae] A small counter-and-table tonkatsu shop in Sennichimae, open since 2024, built around Watanabe Berkshire pork from Kagoshima, with the lighter Imoko SPF pork as the alternative (a menu chart and the shop's own manga explain the difference). Cutlets are fried low then high, so allow about 20 minutes; the reward is tender, juicy meat, and one diner called the tenderloin the most tender tonkatsu ever. The Spencer roll (ribeye) is the rich choice. Taste it with rock salt, dashi soy, mustard or the house sauce, which has a slight curry note; one diner preferred salt. Cabbage with a carrot-and-perilla dressing can be refilled, and the pork miso soup is good. Many customers are from overseas; ordering is by QR code. Tables are cramped. Open daily.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 30 September 2024 (Tabelog)', background: 'Tonkatsu shop (Tabelog, staff-maintained); sister shop Tonkatsu Shiga in Namba Sennichimae (listing).', philosophy: null, specialty: 'Watanabe Berkshire Spencer roll cutlet.',
      anecdotes: [
        { text: '"The menu chart was easy to understand, showcasing the rich Watanabe Berkshire alongside the lighter Imoko pork… Since it\'s cooked at a low temperature, I waited about 20 minutes." — August 2026, Watanabe Berkshire Spencer roll set 180 g.', source: R + 'B534360519/' },
        { text: '"Thanks to that, I experienced the most tender tonkatsu I\'ve ever had. Additionally, the cabbage dressing was delicious, and the tonjiru (pork miso soup) was also very tasty." — August 2026, tenderloin.', source: R + 'B535022890/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): とんかつ 今奈良、大阪市中央区千日前1-9-21 1F、日本橋駅・なんば駅から徒歩5分、毎日11:30〜16:00(L.O.15:15)・17:00〜22:30(L.O.21:45)、年中無休、カード・PayPay可、電子マネー不可、12席、貸切20名まで、2024年9月30日開店、姉妹店 とんかつ しが(難波千日前)。口コミ(2026年7〜10月): 渡辺バークシャー、低温調理で時間がかかる、カウンターから調理が見える、日本人客は少ない、イモ子豚SPF、スペンサーロール200g・180g、濃厚な渡辺バークシャーと軽めのイモ子豚の表、約20分待ち、オリジナルの漫画、オリジナルソース、だし醤油、岩塩、人参と大葉のドレッシング、ヒレかつ、海外の客が多い、いちばん柔らかいとんかつ、とん汁、QRコードで注文、テーブルは狭い、低温から高温で揚げる、地がらし、ソースはほんのりカレー風味、だし醤油はあっさり、塩がいちばん。',
      confidence: 'medium', sources: [TB, R + 'B534360519/', R + 'B535022890/', R + 'B531737553/', R + 'B536853002/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas customers; QR ordering (August, October 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-9-21 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目9番21号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534360519/', R + 'B535022890/', R + 'B536853002/'],
    price_note: 'No prices found; reviewers spent about ¥3,000–5,000.', last_checked: TODAY, items: [
      it('', '', 'Watanabe Berkshire Spencer roll cutlet set (180 g)', '', 'Tonkatsu', 'no', 'no', 'August 2026.', 'spencer'),
      it('', '', 'Watanabe Berkshire tenderloin cutlet set', '', 'Tonkatsu', 'no', 'no', 'August 2026.', 'hire'),
      it('', '', 'Imoko SPF pork cutlet set', '', 'Tonkatsu', 'no', 'no', 'August 2026.', 'imoko'),
      it('', '', 'Pork miso soup', '', 'Sides', 'no', 'no', 'August 2026.', 'tonjiru'),
    ] }, {
    cuisine: '低温から高温で揚げる柔らかいとんかつ、約20分・鹿児島の渡辺バークシャー: スペンサーロール(リブロース)180g、ヒレ・軽めのイモ子豚SPF・ほんのりカレー風味のオリジナルソース、だし醤油、岩塩、地がらし・人参と大葉のドレッシングのおかわりできるキャベツ・とん汁・ご飯のサイズを選べる・カウンターとテーブルで12席',
    neighborhood: '中央区千日前1-9-21 1F。日本橋駅・なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げるかつ、ソースやだし醤油。',
    vegan_detail: 'ヴィーガンではありません。豚かつととん汁。',
    notes: '[和食・千日前、渡辺バークシャーの低温とんかつ] 千日前のカウンターとテーブルの小さなとんかつ店で、2024年開店、鹿児島の渡辺バークシャーが主役、軽めのイモ子豚SPFも選べる(メニューの表と漫画で違いを説明)。低温から高温で揚げるので20分ほど見て。そのぶん柔らかくジューシーで、ヒレはいちばん柔らかいとんかつだったという声。濃厚にいくならスペンサーロール(リブロース)。岩塩、だし醤油、からし、ほんのりカレー風味のソースで、塩がいちばんという声も。人参と大葉のドレッシングのキャベツはおかわりでき、とん汁もおいしい。海外の客が多く、注文はQRコード。テーブルは狭め。無休。',
  });
}

// ================================================================ 地魚と天ぷら うろこ屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27104173/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:59']), SA = day(['16:00', '23:59']);
  put({
    id: 'osaka_jizakana_tempura_urokoya_higashishinsaibashi', name: '地魚と天ぷら うろこ屋 (Jizakana to Tempura Urokoya)', category: 'OMNI',
    lat: 34.670471, lng: 135.503724, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tempura batter, Inaniwa udon, soy and ponzu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and seafood throughout; dashi.',
    hours_raw: 'Mon–Fri 17:00–24:00; Sat and holidays 16:00–24:00; closed Sundays (open Sunday and closed Monday when a holiday falls on Monday) (Tabelog, staff-maintained). Smoking allowed. Cards and PayPay accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-6-13, 1F at the back of the building, on Mitsudera-suji — about 10 min from Shinsaibashi, Namba or Nippombashi Stn',
    cuisine: 'Local-fish izakaya · sashimi platters of rare fish, many from Owase in Mie · tempura, including unusual fish tempura · grilled fish, crisp outside, fluffy inside · oysters with ponzu, fish roe · seafood ceviche · grilled rice balls, tempura rice bowl, Inaniwa udon to finish · course from ¥5,500 · wide sake list · handwritten menu · 8 counter seats, 2 tables for four',
    website: null, gmaps: gm('地魚と天ぷら うろこ屋'), menu_url: null,
    notes: "[Japanese · rare local fish, sashimi and tempura off Mitsudera-suji] A hidden fish izakaya at the back of a building on Mitsudera-suji, open since 2018: noisy street outside, calm room inside, with a handwritten menu. The draw is fish you rarely see, much of it from Owase in Mie; the sashimi platter is full of names one diner had never heard, all very fresh. Tempura is crisp and often unusual, and grilled fish comes crunchy outside and fluffy inside. Add oysters with ponzu, then finish with a grilled rice ball, a tempura rice bowl or Inaniwa udon. A wide sake list is fairly priced. A ¥5,500 course was offered in late 2024. Diners praise the well-timed service, and one regular says every friend introduced keeps coming back. Smoking allowed; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 April 2018 (Tabelog)', background: 'Fish and tempura izakaya (Tabelog, staff-maintained).', philosophy: null, specialty: 'Rare local fish; tempura.',
      anecdotes: [
        { text: '"They offer a wide variety of fish, including some rare options, and the quality of each dish, from sashimi to tempura and grilled items, is outstanding… For the finale, I ordered Inaniwa udon." — February 2026.', source: R + 'B522367407/' },
        { text: '"I\'ve visited this restaurant many times, and I can enjoy sashimi made from unique fish that you don\'t often hear about… the tempura is also outstanding." — July 2026.', source: R + 'B531582715/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 地魚と天ぷら うろこ屋、大阪市中央区東心斎橋2-6-13 日宝ナイトビル 1F(奥)、三津寺筋沿い、玉屋町角のファミリーマートから西へ50m、心斎橋・なんば・日本橋駅から徒歩10分、月〜金17:00〜24:00、土祝16:00〜24:00、日曜定休(月曜祝日は日曜営業・月曜休み)、カード・PayPay可、16席(カウンター8、4人掛け2卓)、貸切20名まで、喫煙可、2018年4月18日開店。口コミ(2024年11月〜2026年7月): 立山酒造の梅酒、牡蠣、魚卵、だしの天ぷら、青コース5,500円、珍しい魚の刺身盛り合わせ、生牡蠣ポン酢、焼きおにぎり、サクサクの天ぷら、外はカリッと中はふっくらの焼き魚、日本酒が豊富、手書きのメニュー、丁寧な気配り、三重県尾鷲の魚、ユニークな天ぷら、提供のタイミング、日本酒の飲み歩き、篠峯、魚介のセビーチェ、稲庭うどんで締め、天丼、手頃な値段、何度も通う常連。',
      confidence: 'medium', sources: [TB, R + 'B522367407/', R + 'B531582715/', R + 'B496613801/', R + 'B510900829/', R + 'B491826191/', R + 'B515664943/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Handwritten menu (November 2024); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-6-13 日宝ナイトビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目6番13号 (go) 12m; OSM 地魚と天ぷら うろこ屋 node/7296182882 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496613801/', R + 'B522367407/', R + 'B515664943/'],
    price_note: 'One price from a November 2024 review; dinner spend about ¥5,000–8,000.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi of rare fish', '', 'Fish', 'no', 'no', '2024–2026.', 'sashimi'),
      it('', '', 'Tempura', '', 'Tempura', 'no', 'no', '2024–2026.', 'tempura'),
      it('', '', 'Oysters with ponzu', '', 'Fish', 'no', 'no', 'November 2024.', 'kaki'),
      it('', '', 'Inaniwa udon', '', 'Finish', 'no', 'no', 'February 2026.', 'inaniwa'),
      it('', '', 'Course', '¥5,500', 'Courses', 'no', 'no', 'November 2024.', 'course'),
    ] }, {
    cuisine: '地魚の居酒屋・三重県尾鷲などの珍しい魚の刺身盛り合わせ・珍しい魚の天ぷらも・外はカリッと中はふっくらの焼き魚・牡蠣ポン酢、魚卵・魚介のセビーチェ・締めは焼きおにぎり、天丼、稲庭うどん・5,500円からのコース・豊富な日本酒・手書きのメニュー・カウンター8席、4人掛けテーブル2卓',
    neighborhood: '中央区東心斎橋2-6-13 1F、ビルの奥、三津寺筋沿い。心斎橋・なんば・日本橋駅から徒歩10分ほど',
    gf_detail: '実際にはグルテンフリーではありません。天ぷらの衣、稲庭うどん、醤油やポン酢。',
    vegan_detail: 'ヴィーガンではありません。魚介が中心で、だしも使う。',
    notes: '[和食・三津寺筋、珍しい地魚の刺身と天ぷら] 三津寺筋のビルの奥にある隠れ家の魚の居酒屋で、2018年開店、外はにぎやかでも店内は静か、メニューは手書き。魅力はめったに見ない魚で、三重県尾鷲のものが多く、刺身の盛り合わせには聞いたことのない名前が並び、どれも新鮮だったという声。天ぷらはサクサクで変わり種も多く、焼き魚は外はカリッと中はふっくら。牡蠣ポン酢も。締めは焼きおにぎり、天丼、稲庭うどん。日本酒は豊富で値段も手頃。2024年末には5,500円のコースも。提供のタイミングのよさが好評で、紹介した友人はみな通い続けているという常連も。喫煙可、日曜定休。',
  });
}

// ================================================================ おはら
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27009439/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:30', '01:00']);
  put({
    id: 'osaka_ohara_hiroshimayaki_nishishinsaibashi', name: 'おはら (Ohara)', category: 'OMNI',
    lat: 34.670589, lng: 135.499363, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat batter and noodles in Hiroshima-style okonomiyaki; sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, egg, squid and beef offal.',
    hours_raw: 'Mon–Sat 18:30–01:00 (L.O. 00:30); closed Sundays; hours may change (Tabelog). Cash only: no cards, e-money or QR (Tabelog). Smoking allowed.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-9-5, 1F, on the quiet edge of Amerikamura — about 8 min from Shinsaibashi Stn',
    cuisine: 'Hiroshima-style okonomiyaki packed with cabbage, e.g. soba niku tama double · extra green onion · shio yakisoba and thin-noodle yakisoba · teppan kimchi with beef intestine · beef sinew with ponzu · fried squid legs (geso), pork kimchi · teppan octopus, squid, scallops · bone-in sausage, konjac · frozen beer mugs in summer · 4 counter seats, 2 tables',
    website: null, gmaps: gm('おはら 西心斎橋 お好み焼'), menu_url: null,
    notes: "[Okonomiyaki · a one-person Hiroshima-style griddle on the edge of Amerikamura] A small, long-running okonomiyaki spot on the quiet side of Amerikamura, where the owner cooks, serves and takes payment alone. The specialty is Hiroshima-style okonomiyaki, layered and packed with cabbage; one regular calls it the best in Osaka, and the soba niku tama double comes with crispy fried noodles and a spicy sauce. Around it is a cheap, beer-friendly teppan menu: teppan kimchi with beef intestine, beef sinew with ponzu, fried squid legs, octopus and scallops, shio yakisoba. In summer the draft beer comes in a frozen mug. The owner can seem reserved at first; one diner found it cool, another found real warmth by the end. Prices are low; cash only; open until 01:00, closed Sundays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Hiroshima-style okonomiyaki run by the owner alone (2024–2026 reviews).', philosophy: null, specialty: 'Hiroshima-style okonomiyaki.',
      anecdotes: [
        { text: '"The Hiroshima-style okonomiyaki is packed with cabbage, and the teppan kimchi is delicious, plus the prices are unbelievably low." — May 2025.', source: R + 'B506886634/' },
        { text: '"Soba Niku Tama Double: The crispy fried thin noodles paired with a deliciously spicy sauce were irresistible." — September 2026.', source: R + 'B537431293/' },
      ],
      japanese_sources_summary: '食べログ: おはら、大阪市中央区西心斎橋2-9-5 日宝三ツ寺会館 1F、心斎橋から南西へ約8分、月〜土18:30〜翌1:00(L.O.0:30)、日曜定休、カード・電子マネー・QR不可、12席(4人掛け2卓、カウンター4)、喫煙可。口コミ(2023年10月〜2026年9月): アメ村の広島風お好み焼、ゲソ、豚キムチ、すじポン、テッチャンキムチ、塩焼きそば、夏は凍ったジョッキの生ビール、何年も通う、知る人ぞ知る店、最初は話しかけにくいが優しい店主という声、キャベツたっぷり、鉄板キムチ、とても安い、大阪一の広島焼という声、ねぎ増し、鉄板焼きのタコ、骨付きソーセージ、店主はそっけないという声、イカ・タコ・ホタテ、こんにゃく、キムチたっぷり、細麺の焼きそば、裏メニュー、そば肉玉ダブル、パリパリの麺と辛めのソース、すじポン、調理から配膳、会計まで店主ひとり。',
      confidence: 'medium', sources: [TB, R + 'B506886634/', R + 'B537431293/', R + 'B473985483/', R + 'B474404174/', R + 'B525463523/', R + 'B534887817/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One person runs everything; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-9-5 日宝三ツ寺会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目9番5号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537431293/', R + 'B473985483/', R + 'B506886634/'],
    price_note: 'No prices found; reviewers spent about ¥1,000–4,000.', last_checked: TODAY, items: [
      it('', '', 'Hiroshima-style okonomiyaki (e.g. soba niku tama double)', '', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'hiroshimayaki'),
      it('', '', 'Teppan kimchi with beef intestine', '', 'Teppan', 'no', 'no', '2024–2025.', 'tecchan_kimchi'),
      it('', '', 'Beef sinew with ponzu', '', 'Small plates', 'no', 'no', 'September 2026.', 'suji_pon'),
      it('', '', 'Shio yakisoba', '', 'Noodles', 'no', 'no', '2024.', 'shio_yakisoba'),
    ] }, {
    cuisine: 'キャベツたっぷりの広島風お好み焼、そば肉玉ダブルなど・ねぎ増し・塩焼きそば、細麺の焼きそば・テッチャンの鉄板キムチ・すじポン・ゲソ、豚キムチ・鉄板焼きのタコ、イカ、ホタテ・骨付きソーセージ、こんにゃく・夏は凍ったジョッキのビール・カウンター4席、テーブル2卓',
    neighborhood: '中央区西心斎橋2-9-5 1F、アメ村の静かな外れ。心斎橋駅から徒歩8分ほど',
    gf_detail: 'グルテンフリーではありません。広島風お好み焼の小麦の生地と麺、ソース。',
    vegan_detail: 'ヴィーガンではありません。豚肉、卵、イカ、牛ホルモン。',
    notes: '[お好み焼・アメ村の外れ、ひとりで営む広島焼の鉄板] アメ村の静かな側にある小さな昔からのお好み焼店で、店主が調理から配膳、会計までひとりでこなす。看板はキャベツたっぷりの重ね焼きの広島風お好み焼で、大阪一という常連も、そば肉玉ダブルはパリパリの麺と辛めのソース。まわりには安くてビールに合う鉄板メニュー: テッチャンの鉄板キムチ、すじポン、ゲソ、タコやホタテ、塩焼きそば。夏の生ビールは凍ったジョッキで。店主は最初は口数が少なく、そっけないと感じた人も、帰るころには温かさがわかったという人も。値段は安い。現金のみ、深夜1時まで、日曜定休。',
  });
}

// ================================================================ 炭火焼寝床 心斎橋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27015767/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://unagi-nedoko-shinsaibashi.com/';
  put({
    id: 'osaka_sumibiyaki_nedoko_shinsaibashi', name: '炭火焼寝床 心斎橋本店 (Unagi no Nedoko Shinsaibashi)', category: 'OMNI',
    lat: 34.670409, lng: 135.504009, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: eel tare is soy-based; no gluten-free information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: eel throughout.',
    hours_raw: 'Daily 11:30–14:00 and 17:00–22:00 (food L.O. at closing); closes when the eel sells out; irregular holidays (Tabelog, staff-maintained). Online reservations (official site). Non-smoking; cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['11:30', '14:00'], ['17:00', '22:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-6-11, 2F, on Mitsudera-suji — 7 min from Shinsaibashi Stn, 8 min from Namba Stn',
    cuisine: 'Eel specialist · Kansai-style jiyaki: eel killed to order and charcoal-grilled without steaming, crisp skin and fluffy flesh · mainly Kiso Sansen brand eel · eel skewers from ¥880, assorted five ¥4,180: belly, neck, burdock roll, garlic-chive roll, eel tsukune · smoked eel · liver sashimi, shirayaki, eel salad · tokusen unaju, served on a round lidless plate to keep the skin crisp · hitsumabushi · half-eel Manpuku don ¥3,850 · Wakayama sansho · monthly omakase courses ¥8,800 and ¥11,000 · lunch menu · wood-plank tables, 8 counter seats',
    website: OWN, gmaps: gm('炭火焼寝床 心斎橋本店'), menu_url: null,
    notes: "[Japanese · unsteamed Kansai-style charcoal eel and eel skewers by Shinsaibashi] An eel specialist on Mitsudera-suji, open since 2007 and featured on TV (Matsuko no Shiranai Sekai, 2022). Eel, mainly the Kiso Sansen brand, is killed to order and grilled over charcoal in the Kansai jiyaki style without steaming, so the skin is crisp and the flesh fluffy, with a tare that isn't too sweet and Wakayama sansho. The unaju comes on a round lidless plate so steam doesn't soften the skin. What sets it apart is the eel skewers, rare in Osaka: belly, neck, burdock roll and more, from ¥880 each or five for ¥4,180; smoked eel goes well with sake. Monthly omakase courses (¥8,800 and ¥11,000) run through liver sashimi, shirayaki, skewers, salad and an eel rice bowl. Diners praise attentive staff. Book dinner; it fills. Closes when the eel sells out.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 October 2007 (Tabelog)', background: 'Eel specialist (official site; Tabelog, staff-maintained); featured on Matsuko no Shiranai Sekai in June 2022 (official site).', philosophy: 'Eel killed to order and grilled Kansai-style without steaming (official site).', specialty: 'Kansai-style grilled eel; eel skewers.',
      anecdotes: [
        { text: '"The skin is crispy, the flesh is tender, and the sauce is not overly sweet, making it incredibly delicious… Instead of using a square tiered box, we serve it on a round plate without a lid, which prevents steaming and keeps the skin crispy." — August 2026, tokusen unaju.', source: R + 'B533893246/' },
        { text: '"I was treated to a delightful array of eel dishes, including liver sashimi, smoked eel, grilled eel, skewers, white grilled eel, eel salad, and eel rice bowl." — September 2026, course.', source: R + 'B535923147/' },
      ],
      japanese_sources_summary: '公式 unagi-nedoko-shinsaibashi.com: 注文ごとに捌く活け締めと関西風地焼き、心斎橋駅7分の鰻専門店、2022年6月「マツコの知らない世界」で紹介、蒸さずに炭火で焼く、国産ブランド「木曽三川うなぎ」が中心、串焼きや逸品のおまかせコース、一枚板のテーブル、うな重・ひつまぶし・串焼き、ランチメニュー。食べログ(店舗会員): 東心斎橋2-6-11 三津寺リーズビル 2F、毎日11:30〜14:00・17:00〜22:00、鰻がなくなり次第終了、不定休、蒸さない関西風地焼き、串焼き1本880円から、燻製や鰻巻き、月替わりおまかせコース8,800円・11,000円、子ども用座布団あり、20席(カウンター8)、2007年10月1日開店。口コミ(2026年8〜9月): 鰻のコース、スタッフの気配り、18時には予約で満席、皮はパリッと身は柔らかい、甘すぎないたれ、和歌山の山椒、重箱ではなく蓋のない丸皿、関西風で一番、燻製、串焼き5種盛り4,180円(ハラ、首、ごぼう巻き、ニラ巻き、つくね)、満腹丼(鰻半尾)3,850円、肝刺し、白焼き、鰻サラダ、鰻丼。',
      confidence: 'medium', sources: [TB, OWN, R + 'B533893246/', R + 'B535923147/', R + 'B534825684/', R + 'B533921053/', R + 'B533540678/', R + 'B535762068/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Official site in Japanese, English, Korean and Chinese.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-6-11 三津寺リーズビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); official site live; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目6番11号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534825684/', R + 'B533893246/'],
    price_note: 'Prices from the Tabelog listing and a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Eel skewer', 'from ¥880', 'Skewers', 'no', 'no', 'Tabelog listing.', 'kushi'),
      it('', '', 'Assorted five eel skewers', '¥4,180', 'Skewers', 'no', 'no', 'September 2026.', 'kushi5'),
      it('', '', 'Tokusen unaju', '', 'Rice', 'no', 'no', 'August 2026.', 'unaju'),
      it('', '', 'Manpuku don (half eel)', '¥3,850', 'Rice', 'no', 'no', 'September 2026.', 'manpuku'),
      it('', '', 'Monthly omakase course', '¥8,800 / ¥11,000', 'Courses', 'no', 'no', 'Tabelog listing.', 'course'),
    ] }, {
    cuisine: '鰻専門店・注文ごとに捌き蒸さずに炭火で焼く関西風地焼き、皮はパリッと身はふっくら・国産ブランド「木曽三川うなぎ」が中心・串焼きは880円から、5種盛り4,180円: ハラ、首、ごぼう巻き、ニラ巻き、つくね・鰻の燻製・肝刺し、白焼き、鰻サラダ・皮が蒸れないよう蓋のない丸皿の特選うな重・ひつまぶし・鰻半尾の満腹丼3,850円・和歌山の山椒・月替わりおまかせコース8,800円と11,000円・ランチメニュー・一枚板のテーブル、カウンター8席',
    neighborhood: '中央区東心斎橋2-6-11 2F、三津寺筋。心斎橋駅から徒歩7分、なんば駅から徒歩8分',
    gf_detail: 'グルテンフリーではありません。鰻のたれは醤油ベース。グルテンフリーの情報はありません。',
    vegan_detail: 'ヴィーガンではありません。鰻が中心。',
    notes: '[和食・心斎橋、蒸さない関西風の炭火鰻と鰻の串焼き] 三津寺筋の鰻専門店で、2007年開店、テレビ(マツコの知らない世界、2022年)でも紹介。鰻は木曽三川うなぎが中心で、注文ごとに捌き、関西風の地焼きで蒸さずに炭火で焼くので、皮はパリッと身はふっくら、甘すぎないたれと和歌山の山椒で。うな重は蒸れないよう蓋のない丸皿で出る。ほかにない魅力は大阪では珍しい鰻の串焼きで、ハラ、首、ごぼう巻きなど1本880円から、5種盛り4,180円。燻製は日本酒に合う。月替わりのおまかせコース(8,800円と11,000円)は肝刺し、白焼き、串焼き、サラダ、鰻丼まで。スタッフの気配りが好評。夜は予約で埋まるので予約を。鰻がなくなり次第終了。',
  });
}

save();
