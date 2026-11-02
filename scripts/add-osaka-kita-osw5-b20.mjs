// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 20.
//   Ids checked for parity: 27120182 (skip), 27033616, 27114730, 27073634 (skip), 27137068, 27140328 (all even).
//   + 肉料理 神谷 Niku Ryori Kanoya (sukiyaki and shabu-shabu of Tokushima "Waiichi" wagyu in Dojima, since 2005)
//   + PAUSE COFFEE (Fukushima café of drip coffee and seasonal French toast, since 2019)
//   + エンメエッセ Emme Esse (creative Italian of Kinki ingredients in Dojima, since 2023)
//   + 池田紘三 Ikeda Kozo (eight-seat crab omakase in Dojima, since 2024)
//   - skipped 寿司赤酢・望月 27120182: same group as 寿司 赤酢 (in data: osaka_sushi_akasu_shinsaibashi, osaka_sushi_akazu_namba_premium); a
//     2026 review calls it one of the Akazu group's two Kitashinchi shops, "with the main branch in the basement" of the same building.
//   - skipped 北新地 湯木 新店 27073634: same group as osaka_kitashinchi_yuki_honten (in data), whose record cites the official site's four shops
//     (Honten, New shop, 肥後橋ゆきや。, Shinsaibashi).
//   Chain check: 神谷: one shop; the website link is the wagyu supplier 株式会社谷藤ファーム (Tokushima). PAUSE COFFEE: one shop (official site).
//   エンメエッセ: invoice T6120901032636 → 株式会社Ｍ・Ｙ (NTA register); the site robecarre.com lists this one shop. 池田紘三: invoice
//   T7120001260120 → 株式会社ＢＥＣＯＭＥ at the shop's address (NTA register); one shop.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27120182', 'chain: 寿司赤酢 group, already in data (osaka_sushi_akasu_shinsaibashi, osaka_sushi_akazu_namba_premium)');
skip('27073634', 'chain: 北新地 湯木, already in data (osaka_kitashinchi_yuki_honten; four shops per its official site)');

// ================================================================ 肉料理 神谷
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27033616/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '00:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'osaka_niku_ryori_kanoya_dojima', name: '肉料理 神谷 (Niku Ryori Kanoya)', category: 'OMNI',
    lat: 34.696386, lng: 135.498209, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Kansai-style sukiyaki in a sweet soy sauce, shabu-shabu with sesame sauce, both finished with udon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu sukiyaki with egg, shabu-shabu, ham and roast beef.',
    hours_raw: 'Mon–Fri 17:00–24:00 (last order 22:00); Sat 17:00–23:00 (last order 21:00); closed Sundays and holidays; after 22:00 on weekdays by phone booking (Tabelog). Reservations accepted (Tabelog). Service charge: Tabelog\'s original text says none ("なし"). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 18 seats: a counter of 8 and sunken-floor semi-private tables; smoking allowed (Tabelog). Opened 29 October 2005 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-3-4, 2F of 谷安ビル — 4 min from Oebashi Stn, 5 min from Kitashinchi Stn',
    cuisine: 'Sukiyaki and shabu-shabu of "Waiichi" black wagyu sent direct from Tanifuji Farm in Tokushima, which breeds and raises it (Tabelog) · courses (Tabelog, tax included): Kansai-style sukiyaki course with a house sauce, a meat dish, vegetables, udon and dessert ¥12,800; shabu-shabu course with appetizer, a meat dish, vegetables, udon and dessert ¥12,800 · appetizers of ham and onion, roast beef, sukiyaki with lettuce among the vegetables, thin udon to finish, ice cream (2024–2026); shabu-shabu with a tangy sesame sauce (June 2026)',
    website: 'http://www.tanifujifarm.com/', gmaps: gm('肉料理 神谷 北新地 堂島'), menu_url: null,
    notes: "[Sukiyaki · Dojima, a ranch's own wagyu] A small sukiyaki and shabu-shabu room on a second floor in Dojima, running since 2005 and supplied direct by Tanifuji Farm in Tokushima with its own 'Waiichi' black wagyu. The ¥12,800 course opens with a house ham and roast beef, then Kansai-style sukiyaki cooked with a light hand and the house sauce, lettuce among the vegetables, and thin udon to finish; shabu-shabu with a tangy sesame sauce is the alternative. The owner cooks and hosts; regulars praise how the well-marbled beef never feels greasy. Smoking is allowed; booking is advised, especially on Saturdays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who prepares the sukiyaki at the table', 'staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: premium black wagyu "Waiichi" sourced directly from Tanifuji Farm, managed from breeding to production; Kansai-style sukiyaki with a unique sauce; "a meat-loving owner welcomes you"; opened 29 October 2005. The listing\'s website link is 株式会社谷藤ファーム, a Tokushima wagyu farm (its site, read 2026-11-02). A January 2025 diner writes that the owner prepared the dishes.', philosophy: null, specialty: 'Kansai-style sukiyaki of Waiichi wagyu.',
      anecdotes: [
        { text: '"The seasoning was slightly lighter, allowing us to truly savor the flavor of the meat." — March 2023, a trip for sukiyaki.', source: R + 'B463002283/' },
        { text: '"It\'s amazing that the meat is so good yet doesn\'t release too much fat." — June 2026, a third visit, shabu-shabu.', source: R + 'B482904476/' },
        { text: '"The sukiyaki beef was exceptional, sourced directly from a rare producer in Tokushima Prefecture." — May 2025.', source: R + 'B507697515/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 肉料理 神谷、すき焼き・しゃぶしゃぶ・ステーキ、大阪市北区堂島1-3-4 谷安ビル 2F、京阪大江橋駅から4分、北新地駅から5分、月〜金17:00〜24:00 (L.O.22:00)、土17:00〜23:00 (L.O.21:00)、日・祝休み、平日22時以降は電話で予約、サービス料なし、カード可、電子マネー・QR 不可、18席 (カウンター8、掘りごたつの半個室)、喫煙可、2005年10月29日オープン、谷藤ファームから直送の黒毛和牛「和一」、関西風のすき焼き、肉好きの店主、すき焼きコースとしゃぶしゃぶコース各12,800円 (先付、肉料理、野菜、うどん、デザート)。谷藤ファームは徳島県の和牛の会社 (公式サイト)。口コミ(2023年3月〜2026年7月): ハムと玉ねぎ、ローストビーフ、すき焼き、野菜にレタス、〆の細いうどん、アイス、ごまだれのしゃぶしゃぶ、味つけはやや控えめ、脂がしつこくない、土曜は満席、20年の店、店主が料理を用意。',
      confidence: 'medium', sources: [TB, 'http://www.tanifujifarm.com/', R + 'B463002283/', R + 'B474242502/', R + 'B480673907/', R + 'B482904476/', R + 'B484108948/', R + 'B498999757/', R + 'B505467606/', R + 'B507697515/', R + 'B521520999/', R + 'B531421680/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set sukiyaki or shabu-shabu courses (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区堂島1-3-4 谷安ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 42m. osaka_koryori_sairaiten_dojima ("大阪府大阪市北区堂島1-3-4 B1F", 0 m) and osaka_kushiage_takenaka_dojima ("…1-3-4 谷安ビル B01号", 8 m) are in the same building, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Sukiyaki course of Waiichi wagyu with udon and dessert', '¥12,800', 'Courses', 'no', 'no', 'Tabelog; 2024–2026.', 'sukiyaki_course'),
      it('', '', 'Shabu-shabu course with udon and dessert', '¥12,800', 'Courses', 'no', 'no', 'Tabelog; June 2026.', 'shabu_course'),
    ] }, {
    cuisine: '徳島の谷藤ファームが育てる黒毛和牛「和一」を直送で使うすき焼きとしゃぶしゃぶ (食べログ)・コース (食べログ、税込): 特製の割り下の関西風すき焼きに肉料理、野菜、うどん、デザートのすき焼きコース12,800円、先付、肉料理、野菜、うどん、デザートのしゃぶしゃぶコース12,800円・先付のハムと玉ねぎ、ローストビーフ、野菜にレタスの入るすき焼き、〆の細いうどん、アイス (2024年〜2026年)。ごまだれのしゃぶしゃぶ (2026年6月)',
    neighborhood: '堂島1-3-4、谷安ビルの2階。大江橋駅から4分、北新地駅から5分',
    gf_detail: '要確認。グルテンの情報なし。甘い醤油の関西風すき焼き、ごまだれのしゃぶしゃぶ、どちらも〆はうどん。',
    vegan_detail: 'ヴィーガンではありません。卵でいただく和牛のすき焼き、しゃぶしゃぶ、ハム、ローストビーフ。',
    notes: '[すき焼き・堂島、牧場直送の和牛] 2005年からの堂島のビルの2階にある小さなすき焼きとしゃぶしゃぶの店で、徳島の谷藤ファームが育てる黒毛和牛「和一」を直送で使う。12,800円のコースは自家製のハムとローストビーフから始まり、特製の割り下で控えめに味をつけた関西風のすき焼き、野菜にはレタスも、〆は細いうどん。ごまだれのしゃぶしゃぶも選べる。店主が料理してもてなし、霜降りなのに脂がしつこくないと常連に好評。喫煙可、土曜はとくに予約を。',
  });
}

// ================================================================ PAUSE COFFEE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27114730/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'http://pause--coffee.com/';
  const W = day(['08:00', '18:00']);
  put({
    id: 'osaka_pause_coffee_fukushima', name: 'PAUSE COFFEE', category: 'OMNI',
    lat: 34.700032, lng: 135.489065, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu centres on French toast, open sandwiches, toast and house-made bread.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee, organic juices and lemonade; the French toast is egg-soaked and served with ice cream; no vegan item is named.',
    hours_raw: 'Tue–Sun 8:00–18:00; closed Mondays (Tabelog; official site). No reservations; order and pay at the counter first, and a queue forms at busy times (Tabelog; 2026 reviews). Cards (VISA, Master, JCB, AMEX), IC cards (Tabelog). 10 seats: counter and a terrace; non-smoking; wheelchair accessible; free Wi-Fi; children and strollers welcome (Tabelog). Opened 19 November 2019 (official site).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '福島6-12-19, between Osaka and Fukushima Stns, a sign on the main street — 7 min from JR Fukushima Stn, 10 min from JR Osaka Stn',
    cuisine: 'Café of carefully dripped coffee and seasonal French toast, with local ingredients (Tabelog) · drip coffee from three origins such as Costa Rica, café latte with latte art, espresso tonic, organic juices, lemonade (2026) · French toast: original plain; seasonal versions with Benihoppe strawberries, Shimizu white peach with lemon honey and tea jelly, Habikino figs (+ lemon sorbet), banana; avocado open sandwich with salad; a breakfast set; toast with fresh fruit; house-made bread for sale (March–September 2026)',
    website: OWN, gmaps: gm('PAUSE COFFEE 福島'), menu_url: null,
    notes: "[Café · Fukushima, French toast and drip coffee] A small, stylish café between Fukushima and Osaka stations, open from 8:00, where the queue is for slow-soaked French toast: plain, or seasonal with Benihoppe strawberries, Shimizu white peach or Habikino figs, about ¥2,000–2,500 with a drink. Order and pay at the counter, then sit; coffee is dripped from three origins, and there is a breakfast set and an avocado open sandwich. Ten seats, so expect to wait at peak times; diners in 2026 noticed many Western and international guests. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Baristas and staff (unnamed)'], origin: null, background: 'Per the official site: PAUSE COFFEE opened 19 November 2019; a place to switch between on-time and off-time and for locals to drop in and talk, a brand supporting customers\' lifestyles "through beauty and food"; a sister space, PAUSE, keeps 10:00–19:00. Per the shop-maintained Tabelog listing: carefully dripped coffee, seasonal French toast, local ingredients.', philosophy: '"美と食を通じてお客様のライフスタイルを、デザインし" (official site).', specialty: 'Seasonal French toast; drip coffee.',
      anecdotes: [
        { text: '"Upon arriving at the café, I noticed a lot of Western customers." — March 2026.', source: R + 'B525331641/' },
        { text: '"Every year, I look forward to the fig French toast." — September 2026, a seventh visit.', source: R + 'B485669594/' },
        { text: '"When I visited, there were many international guests, and the café was fully booked, so I had to wait outside." — September 2026.', source: R + 'B536300499/' },
      ],
      japanese_sources_summary: '公式サイト: PAUSE COFFEE、2019年11月19日オープン、PAUSE COFFEE 8:00〜18:00、PAUSE 10:00〜19:00、月曜休み、今までの自分と新しい自分、オンとオフを切り替える時間、地域の人が気軽に立ち寄って会話を楽しむ時間、美と食を通じてお客様のライフスタイルをデザインし支えるブランドに。食べログ (店舗会員): PAUSE COFFEE、カフェ、大阪市福島区福島6-12-19、JR 福島駅から約7分、JR 大阪駅から約10分、火〜日8:00〜18:00、月曜休み、予約不可、カード・交通系IC 可、10席、テラス、禁煙、車いす可、無料 Wi-Fi、子ども・ベビーカー可、モーニングあり、ていねいにドリップするコーヒーと季節のフレンチトースト、地産地消。口コミ(2026年3月〜9月): 先に注文して支払い、行列、Habikino のいちじくのフレンチトースト (レモンシャーベットを追加)、Benihoppe のいちごのフレンチトースト、Shimizu の白桃とレモンはちみつと紅茶ゼリー、バナナのフレンチトースト、プレーン、コスタリカのドリップ、カフェラテ、エスプレッソトニック、有機のジュース、レモネード、アボカドのオープンサンド、モーニングセット、自家製のパン、西洋の人や海外のお客さんが多い。',
      confidence: 'medium', sources: [TB, OWN, R + 'B485669594/', R + 'B501425351/', R + 'B524532450/', R + 'B525331641/', R + 'B526662414/', R + 'B526829325/', R + 'B528467972/', R + 'B532465180/', R + 'B534739450/', R + 'B536300499/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter; 2026 diners saw many Western and international guests. No English-language evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-12-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目12番19号 (go) 8m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485669594/'],
    price_note: 'Prices not given in the sources read, except about ¥2,500 for a seasonal French toast with a drink (September 2026).', last_checked: TODAY, items: [
      it('', '', 'Seasonal French toast with a drink', 'about ¥2,500', 'Café', 'no', 'no', 'September 2026.', 'french_toast'),
      it('', '', 'Drip coffee (three origins)', '', 'Drinks', 'ask', 'ask', 'May 2026.', 'drip_coffee'),
    ] }, {
    cuisine: 'ていねいにドリップするコーヒーと季節のフレンチトーストのカフェ、地元の食材 (食べログ)・コスタリカなど3種から選ぶドリップコーヒー、ラテアートのカフェラテ、エスプレッソトニック、有機のジュース、レモネード (2026年)・フレンチトースト: プレーン、季節の Benihoppe のいちご、Shimizu の白桃とレモンはちみつと紅茶ゼリー、Habikino のいちじく (レモンシャーベットの追加も)、バナナ。アボカドのオープンサンドとサラダ、モーニングセット、フルーツたっぷりのトースト、自家製のパンの販売 (2026年3月〜9月)',
    neighborhood: '福島6-12-19、大阪駅と福島駅の間、大通りに看板。JR 福島駅から7分、JR 大阪駅から10分',
    gf_detail: '要確認。グルテンの情報なし。メニューはフレンチトースト、オープンサンド、トースト、自家製のパンが中心。',
    vegan_detail: '要確認。コーヒー、有機のジュース、レモネード。フレンチトーストは卵液にひたしてアイスを添える。ヴィーガンの品の名前はない。',
    notes: '[カフェ・福島、フレンチトーストとドリップコーヒー] 福島駅と大阪駅の間にある小さなおしゃれなカフェで、朝8時から。行列のお目当ては、じっくりしみこませたフレンチトースト: プレーンか、季節の Benihoppe のいちご、Shimizu の白桃、Habikino のいちじくで、飲み物つきで2,000〜2,500円ほど。先にカウンターで注文して支払い、それから席へ。コーヒーは3種のドリップで、モーニングセットやアボカドのオープンサンドも。10席なので混む時間は待つことも。2026年は西洋の人や海外のお客さんが多かったという声。月曜休み。',
  });
}

// ================================================================ エンメエッセ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27137068/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://robecarre.com/';
  const W = day(['12:00', '14:30'], ['17:30', '23:00']); const WE = day(['17:30', '23:00']);
  put({
    id: 'osaka_emme_esse_dojima', name: 'エンメエッセ (Emme Esse)', category: 'OMNI',
    lat: 34.696494, lng: 135.498780, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the shop\'s allergy page says it cannot accommodate allergies to egg, wheat or dairy, or to two or more ingredients ("卵・小麦・乳製品もしくは2種類以上の場合は対応しかねます"); the course includes house-made pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a set course of seafood, meat, prosciutto and dairy; the shop cannot cater for egg or dairy allergies (official site).',
    hours_raw: 'Lunch Mon, Tue, Thu, Fri, Sat and holidays 12:00–14:30 (last order food 13:30); dinner Mon–Sat and holidays 17:30–23:00 (last order food 22:00, drinks 22:30); closed Sundays (Tabelog). Courses until 20:00, à la carte after (Tabelog). Service charge 8% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 12 seats: a counter of 4, a table of 8 and a private room for 2–3; non-smoking; wheelchair accessible; children who can eat a full course (Tabelog). Opened 21 March 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: WE, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-2-15, 2F of 浜村サンプラザビル, a turquoise door — 5 min from Kitashinchi Stn, 3 min from Oebashi Stn',
    cuisine: 'Creative Italian of ingredients from the Kinki region and around, a monthly-changing course (Tabelog) · courses (Tabelog, tax included, 8% service extra): omakase of nine dishes ¥15,000; with caviar and a wagyu-fillet main ¥27,500; "The Emme Esse" adding Ise lobster and seasonal luxuries such as truffle ¥33,000; free-flow wine and sake pairing ¥6,500, non-alcoholic ¥2,998 · dishes named in 2026: Laborie ham sliced thin on a Berkel slicer with water eggplant, local squid with cauliflower paste and sea urchin under a squid-ink lace, chilled tagliolini, a seafood brodetto, abalone with pesto, sweet-shrimp tart, Spanish mackerel, homemade fettuccine with matsutake broth and grated truffle (July–October 2026)',
    website: OWN, gmaps: gm('エンメエッセ 北新地'), menu_url: null,
    notes: "[Italian · Dojima, a seasonal creative course] A twelve-seat Italian restaurant behind a turquoise door in Dojima, open since 2023, whose chef (named Tanigami in a July 2026 review) cooks a monthly nine-dish course of Kinki ingredients. Expect ultra-thin French ham with water eggplant, squid and sea urchin under a squid-ink lace, chilled tagliolini and, in autumn, fettuccine in matsutake broth under grated truffle. The course is ¥15,000, or up to ¥33,000 with caviar, Ise lobster and wagyu, plus an 8% service charge; the wine-and-sake pairing is refillable. Note: the shop says it cannot handle egg, wheat or dairy allergies.",
    chef_bio: { chef_name: null, roles: ['Chef (named Tanigami in a July 2026 review)', 'staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: a restaurant to experience dining in Kansai through ingredients from the Kinki region; a monthly-changing course; famous wines; opened 21 March 2023. The site robecarre.com (Roberto Carrera) lists エンメエッセ北新地 and an allergy policy. A July 2026 diner names the chef as Tanigami, from the "Roberto Carera" restaurant; an October 2026 regular says the shop is where "Tom Curioza" used to be. The Tabelog invoice number T6120901032636 is registered to 株式会社Ｍ・Ｙ (NTA invoice register, read 2026-11-02).', philosophy: null, specialty: 'Monthly creative Italian course; matsutake and truffle fettuccine.',
      anecdotes: [
        { text: '"On this day, I had pasta made with a broth from matsutake mushrooms, topped with freshly grated truffle! It was simply exquisite!!!" — October 2026, a fifth visit.', source: R + 'B471509603/' },
        { text: '"The homemade squid ink lace, which I mentioned in the title, is stunning." — July 2026.', source: R + 'B532989384/' },
        { text: '"It was interesting to have not only wine but also two types of Japanese sake included in the pairings." — July 2026, the course with free pairing.', source: R + 'B531829140/' },
      ],
      japanese_sources_summary: '公式サイト (robecarre.com): エンメエッセ北新地、大阪府大阪市北区堂島1-2-15 浜村サンプラザビル2階、北新地駅から徒歩3分、12:00〜14:30 (最終入店13:00)、17:00〜23:00 (最終入店22:00)、アレルギーや苦手な食材は予約のときに、アレルギーにはできるだけ対応するが、卵・小麦・乳製品もしくは2種類以上の場合は対応しかねる。食べログ (店舗会員): エンメエッセ、イタリアン・イノベーティブ、大江橋駅・北新地駅から5分、月・火・木・金・土・祝は昼と夜、水は夜のみ、日曜休み、コースは20時まで、その後はアラカルト、サービス料8%、カード可、電子マネー・QR 不可、12席 (カウンター4、テーブル8)、2〜3名の個室、禁煙、車いす可、2023年3月21日オープン、近畿とその周辺の食材、月替わりのコース、おまかせ9品15,000円、キャビアと和牛ヒレで27,500円、伊勢海老やトリュフも入る The Emme Esse 33,000円、ワインと日本酒のペアリング飲み放題6,500円、ノンアルコール2,998円。インボイス登録は株式会社Ｍ・Ｙ。口コミ(2025年11月〜2026年10月): Berkel のスライサーで切る Laborie のハムと水なす、イカとカリフラワーのペーストとウニ、イカスミのレース、冷たいタリオリーニ、魚介のブロデット、アワビのジェノベーゼ、甘エビのタルト、サワラ、松茸のだしの自家製フェットチーネとトリュフ、シェフは Tanigami さん (Roberto Carera 出身) という声、以前は Tom Curioza があった場所という声、明るくやさしいシェフ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B471509603/', R + 'B494059729/', R + 'B521944770/', R + 'B531813784/', R + 'B531829140/', R + 'B532346392/', R + 'B532989384/', R + 'B533435863/', R + 'B535828456/', R + 'B538147267/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set course with dish-by-dish explanations (September 2026). No English evidence found.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'Official allergy page: "アレルギーには極力対応しておりますが 卵・小麦・乳製品もしくは2種類以上の場合は対応しかねます" (cannot handle egg, wheat or dairy allergies, or two or more).', source: 'https://robecarre.com/free/support' }],
      positives: [], confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-2-15 浜村サンプラザビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目2番15号 (go) 8m; nearest other record osaka_tempura_juko_dojima 26 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included; 8% service extra).', last_checked: TODAY, items: [
      it('', '', 'Omakase course, nine dishes', '¥15,000', 'Courses', 'no', 'no', 'Tabelog; 2026.', 'omakase'),
      it('', '', 'Omakase with caviar and a wagyu-fillet main', '¥27,500', 'Courses', 'no', 'no', 'Tabelog; October 2026.', 'omakase_caviar'),
      it('', '', 'Free-flow wine and sake pairing', '¥6,500', 'Drinks', 'ask', 'ask', 'Tabelog; July 2026.', 'pairing'),
    ] }, {
    cuisine: '近畿とその周辺の食材の創作イタリアン、月替わりのコース (食べログ)・コース (食べログ、税込、サービス料8%別): 9品のおまかせ15,000円、キャビアとメインを和牛ヒレにして27,500円、伊勢海老とトリュフなど季節の食材も入る「The Emme Esse」33,000円、ワインと日本酒のペアリング飲み放題6,500円、ノンアルコール2,998円・2026年の口コミに出てくる料理: Berkel のスライサーで薄く切った Laborie のハムと水なす、地元のイカとカリフラワーのペーストとウニにイカスミのレース、冷たいタリオリーニ、魚介のブロデット、アワビのジェノベーゼ、甘エビのタルト、サワラ、松茸のだしの自家製フェットチーネにトリュフ (2026年7月〜10月)',
    neighborhood: '堂島1-2-15、浜村サンプラザビルの2階、ターコイズのドア。北新地駅から5分、大江橋駅から3分',
    gf_detail: 'グルテンフリーではありません: 店のアレルギーのページに「卵・小麦・乳製品もしくは2種類以上の場合は対応しかねます」とあり、コースには自家製のパスタも。',
    vegan_detail: 'ヴィーガンではありません。魚介、肉、生ハム、乳製品のコースで、卵や乳製品のアレルギーには対応できない (公式サイト)。',
    notes: '[イタリアン・堂島、季節の創作コース] 2023年からの堂島のターコイズのドアの奥にある12席のイタリアンで、シェフ (2026年7月の口コミでは Tanigami さん) が近畿の食材で月替わりの9品のコースを作る。うすく切ったフランスのハムと水なす、イカスミのレースをかけたイカとウニ、冷たいタリオリーニ、秋は松茸のだしのフェットチーネにトリュフ。コースは15,000円、キャビア、伊勢海老、和牛で33,000円まで、サービス料8%。ワインと日本酒のペアリングはおかわり自由。注意: 卵、小麦、乳製品のアレルギーには対応できないと店は案内している。',
  });
}

// ================================================================ 池田紘三
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27140328/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '14:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_ikeda_kozo_dojima', name: '池田紘三 (Ikeda Kozo)', category: 'OMNI',
    lat: 34.696607, lng: 135.499207, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Crab prepared many ways, with dashi soy, tartar, a Shaoxing-wine marinade, crab soup noodles, clam ramen and hand-rolled sushi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a crab and seafood omakase.',
    hours_raw: 'Mon–Sat and the day before a holiday 12:00–14:00 and 18:00–23:00; the day after a holiday 18:00–23:00; closed Sundays and holidays (Tabelog). Reservation only, online via TableCheck from the shop\'s Instagram; all diners start together (Tabelog; April 2026). Service charge 10% on the omakase (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 8 seats at a counter in a sukiya-style room; non-smoking; children welcome (Tabelog; July 2026). Opened 6 February 2024 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-2-23, 2F of 田園ビル — 5 min from Kitashinchi Stn',
    cuisine: 'Crab omakase: live crabs prepared in front of you, one whole crab a head, from Echizen, Hamasaka and Kasumi ports by the shop\'s own routes (Tabelog) · omakase (Tabelog, tax included, market prices, 10% service extra): snow crab from ¥33,000 and snow crab with hairy crab from ¥45,000 (April to early November); Matsuba crab from ¥66,000 (November to early April) · dishes named in 2025–2026: crab legs each seasoned differently, with kombu, dashi soy or tartar; legs marinated in Shaoxing wine; enriched crab miso; seiko crab; hand-rolled crab sushi; crab soup noodles; curry crab rice; clay-pot crab rice; clam ramen; crab sake hot or cold; Ise lobster; a dessert that diners single out',
    website: null, gmaps: gm('池田紘三 北新地 蟹'), menu_url: null,
    notes: "[Crab · Dojima, a whole-crab omakase] An eight-seat counter in a sukiya-style room in Dojima, opened in 2024 by a chef reviewers call Ikeda, former head chef of a well-known Osaka crab restaurant. Each guest gets a whole crab, live-prepared in front of you and served leg by leg in different ways, with kombu, dashi soy, tartar or a Shaoxing-wine marinade, then hand-rolled crab sushi, crab soup noodles or clay-pot crab rice, and crab sake to drink. Prices follow the market: from ¥33,000 for snow crab in summer to ¥66,000 and up for Matsuba crab in winter, plus 10% service. All guests start together; one April 2026 diner waited 20 minutes for latecomers.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (named Ikeda in 2025–2026 reviews)', 'staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: opened in Kitashinchi in 2024 (6 February); seasonal dishes and unique crab dishes; live crabs prepared before you; Matsuba crabs from Echizen, Hamasaka and Kasumi by exclusive routes. The Tabelog invoice number T7120001260120 is registered to 株式会社ＢＥＣＯＭＥ at the shop\'s address (NTA invoice register, read 2026-11-02). December 2025 and July 2026 diners name the chef as Ikeda, previously head chef of "Kanijenne".', philosophy: '"All you need is one cup of crab." (Tabelog).', specialty: 'Whole-crab omakase.',
      anecdotes: [
        { text: '"The crab miso was also creatively prepared, making it richer and more flavorful." — January 2026.', source: R + 'B521401812/' },
        { text: '"I used to frequent Kanijenne, where Chef Ikeda was previously the head chef." — December 2025.', source: R + 'B523926013/' },
        { text: '"The crab soup noodles and curry crab rice were also outstanding." — May 2026.', source: R + 'B528637951/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 池田紘三、かに・日本料理、大阪市北区堂島1-2-23 田園ビル 2F、北新地駅から5分、月〜土・祝前日12:00〜14:00、18:00〜23:00、祝後日18:00〜23:00、日・祝休み、予約のみ (Instagram の TableCheck から)、カード可、電子マネー・QR 不可、8席、禁煙、子ども可、2024年2月6日オープン、旬の珍味とかにの料理、目の前で活がにをさばく、Echizen・Hamasaka・Kasumi の漁港から独自のルートで、ずわいがにのおまかせ33,000円から、ずわいがにと毛がに45,000円から (4月〜11月はじめ)、Matsuba のかに66,000円から (11月〜4月はじめ)、時価、サービス料10%。インボイス登録は株式会社ＢＥＣＯＭＥ (店と同じ住所)。口コミ(2025年12月〜2026年10月): ひとり1杯のかに、脚ごとにちがう味つけ (昆布、だし醤油、タルタル)、紹興酒漬け、かにみそ、せこがに、手巻き寿司、かにのスープの麺、かにのカレーライス、土鍋のかにごはん、ハマグリのラーメン、かに酒、伊勢海老、デザート、数寄屋造りの畳のカウンター、Kanijenne の元料理長の Ikeda さんという声、一斉スタートで遅刻者を20分待ったという声。',
      confidence: 'medium', sources: [TB, R + 'B521401812/', R + 'B521724951/', R + 'B522878912/', R + 'B523926013/', R + 'B526659943/', R + 'B527035946/', R + 'B528637951/', R + 'B529516451/', R + 'B532873212/', R + 'B537299962/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation-only omakase at a counter; online booking via TableCheck (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-2-23 田園ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目2番23号 (go) 10m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Omakase prices from the Tabelog listing (tax included, market prices, 10% service extra).', last_checked: TODAY, items: [
      it('', '', 'Snow crab omakase (April to early November)', 'from ¥33,000', 'Courses', 'ask', 'no', 'Tabelog.', 'zuwai_omakase'),
      it('', '', 'Snow crab and hairy crab omakase', 'from ¥45,000', 'Courses', 'ask', 'no', 'Tabelog.', 'zuwai_kegani'),
      it('', '', 'Matsuba crab omakase (November to early April)', 'from ¥66,000', 'Courses', 'ask', 'no', 'Tabelog; December 2025–March 2026.', 'matsuba_omakase'),
    ] }, {
    cuisine: 'かにのおまかせ: 活がにを目の前でさばき、ひとり1杯、Echizen・Hamasaka・Kasumi の漁港から独自のルートで (食べログ)・おまかせ (食べログ、税込、時価、サービス料10%別): ずわいがに33,000円から、ずわいがにと毛がに45,000円から (4月〜11月はじめ)、Matsuba のかに66,000円から (11月〜4月はじめ)・2025年〜2026年の口コミに出てくる料理: 脚ごとに昆布、だし醤油、タルタルなどで味を変えたかに、紹興酒漬け、かにみそ、せこがに、かにの手巻き寿司、かにのスープの麺、かにのカレーライス、土鍋のかにごはん、ハマグリのラーメン、熱燗か冷やのかに酒、伊勢海老、評判のデザート',
    neighborhood: '堂島1-2-23、田園ビルの2階。北新地駅から5分',
    gf_detail: '要確認。グルテンの情報なし。いろいろな食べ方のかにに、だし醤油、タルタル、紹興酒漬け、かにのスープの麺、ハマグリのラーメン、手巻き寿司。',
    vegan_detail: 'ヴィーガンではありません。かにと魚介のおまかせ。',
    notes: '[かに・堂島、かに1杯のおまかせ] 2024年に堂島の数寄屋造りの部屋に開いた8席のカウンターで、口コミによると大阪の有名なかに料理店の元料理長の Ikeda さんの店。ひとりに1杯、目の前で活がにをさばき、昆布、だし醤油、タルタル、紹興酒漬けと脚ごとに食べ方を変え、かにの手巻き寿司、かにのスープの麺、土鍋のかにごはん、かに酒も。値段は時価で、夏のずわいがには33,000円から、冬の Matsuba のかには66,000円から、サービス料10%。一斉スタートで、遅れた客を20分待ったという声も (2026年4月)。',
  });
}

save();
