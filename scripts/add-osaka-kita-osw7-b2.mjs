// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 2.
//   + お好みハウス ドンドン DONDON (okonomiyaki till 2 am near Shin-Osaka, open since 1982 per Tabelog; run by a couple)
//   + イチャドル韓豚丼 Ichadoru Korean Buta-don (Korean pork rice bowls and set meals, opened November 2025)
//   + 辛口Lab. 新大阪 Karakuchi Lab. Shin osaka (8-seat curry counter east of Shin-Osaka: a hot A curry and a milder B)
//   + 鶏ノGAKU Tori no GAKU (chicken izakaya with Sichuan mapo tofu, sister shop of 華Sansyou学, opened October 2021)
//   Lane check: all four ids are even (27001336, 27151194, 27089740, 27126550).
//   Chain check: DONDON, Karakuchi Lab. and Tori no GAKU name no other branch on Tabelog except Tori no GAKU's sister
//   restaurant 華Sansyou学 (Tabelog "Hana Sansyou Gaku", in the osaka-kita crawl, not in data/osaka.json): two shops, not a
//   chain. A web search on 2026-11-01 for 辛口Lab. finds no other shop. Ichadoru: the listing calls it "Japan's first" shop of
//   a Korean yakiniku chain (Ichadol), and it is the only Japanese shop named; kept, and flagged in the report.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-01). DONDON's building, 西中島6-3-32, also holds
//   osaka_sumibi_yakitori_kotetsu_nishinakajima (address_ja "大阪府大阪市淀川区西中島6-3-32 第二新大阪ビル 1F"): a different
//   shop on a different Tabelog point about 3 m away, so DONDON keeps its own precise pin.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ お好みハウス ドンドン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27001336/'; const R = TB + 'dtlrvwlst/';
  const N = day(['17:00', '02:00']);
  put({
    id: 'osaka_dondon_nishinakajima', name: 'お好みハウス ドンドン (DONDON)', category: 'OMNI',
    lat: 34.729355, lng: 135.496902, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki batter, yakisoba and gyoza are wheat-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the okonomiyaki batter tastes of dashi and comes under bonito flakes (October 2026), and most dishes have pork, octopus, squid or beef. Tabelog\'s feature list ticks "vegetarian options", but no vegetarian dish is named.',
    hours_raw: 'Mon–Sat 17:00–02:00; closed Sunday; other closing days not fixed (Tabelog). Reservations by phone, after 16:30; tables for two or more by phone; whole-shop parties of 13 to 19; a booking is cancelled if you are late without calling (Tabelog). Cards (VISA, Master, JCB, AMEX), PayPay and d Barai; no e-money (Tabelog). 19 seats: 7 at the counter and 3 tables of 4; smoking allowed; wheelchair accessible; English menu; takeaway and delivery (Tabelog). Almost full at 23:30 on a June 2026 night. Opening date 1 May 1982 on Tabelog, while the shop\'s own text on the same page says "established for 46 years".',
    hours: { 0: N, 1: N, 2: N, 3: N, 4: N, 5: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島6-3-32, ground floor of 第２新大阪ビル — 7 min from Shin-Osaka Stn (Midosuji Line and JR; from the JR central exit head south along the Midosuji Line, one block west of Mystays), 7 min from Nishinakajima-Minamigata Stn and Hankyu Minamikata (Tabelog)',
    cuisine: 'Osaka okonomiyaki, made with several kinds of nagaimo and spices, domestic ingredients and a house blend of sauce, for a fluffy finish (Tabelog) · Hamamatsu gyoza, additive-free, with a patented garlic whose smell is said to be gone after two hours (Tabelog remarks; "three hours" on the menu, June 2026) · okonomiyaki named in reviews: pork and octopus, Osaka-yaki packed with octopus, pork and vegetables, pork kimchi, beef tendon and green onion, buta-tama (2026) · omelette yakisoba with a runny egg, salt yakisoba (2026) · teppan dishes: squid with butter, king oyster mushroom with butter, squid omelette, suji-yaki, grilled beef tendon with green onion, thick fried tofu, French fries (2026) · sweet sauce with mustard on top (May and August 2026) · a "Medical Menu" on the wall (October 2026) · beer, highballs, cocktails, sake, shochu, wine (Tabelog)',
    website: null, gmaps: gm('お好みハウス ドンドン 西中島6-3-32'), menu_url: null,
    notes: "[Okonomiyaki · Nishinakajima, a late-night griddle by Shin-Osaka] A small okonomiyaki house seven minutes south of Shin-Osaka Station, with a retro round sign and lanterns out front, open till 2 am six nights a week and on Tabelog since 1982. That makes it a find for business travellers and for fans coming back late from concerts and ballgames; it was almost full at 23:30 on a June 2026 night. A couple runs it, per a June 2026 diner, and the okonomiyaki are grilled in the back and brought out hot rather than cooked at your seat (May and October 2026). The batter is fluffy, made with nagaimo and tasting of dashi, under a sweet sauce with a streak of mustard; pork and octopus is the classic, and the omelette yakisoba with its runny egg has its own fans. Squid or king oyster mushroom with butter, suji-yaki and Hamamatsu gyoza with a garlic said to leave no smell fill out the table. Smoking is allowed. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner at the griddle and a partner (unnamed couple)'], origin: null, background: 'Per the Tabelog listing: opening date 1 May 1982; the shop\'s own text says "established for 46 years" and describes okonomiyaki made with several kinds of nagaimo and spices, domestic ingredients and its own blend of sauce, "body-friendly ingredients" and most dishes available to take away. A May 2026 diner: "The okonomiyaki is grilled by the owner in the back." A June 2026 diner: "The restaurant is run by a couple, creating a warm and welcoming atmosphere."', philosophy: null, specialty: 'Fluffy Osaka okonomiyaki with house sauce and mustard; omelette yakisoba; Hamamatsu gyoza.',
      anecdotes: [
        { text: '"I arrived at Shin-Osaka at 11 PM and headed to DONDON, which is open late. By around 11:30 PM, the place was almost full." — June 2026.', source: R + 'B529631249/' },
        { text: '"The okonomiyaki sauce was incredibly delicious, and I felt it was something unique to DONDON that I couldn\'t find anywhere else." — June 2026.', source: R + 'B529556569/' },
        { text: '"True to Osaka\'s spirit, the conversations of the salarymen at the table behind me were so entertaining that I found myself stifling laughter throughout my meal." — September 2026, a solo dinner of suji-yaki and okonomiyaki.', source: R + 'B536591204/' },
      ],
      japanese_sources_summary: '食べログ: DONDON (お好みハウス ドンドン)、お好み焼き・鉄板焼き・居酒屋、大阪市淀川区西中島6-3-32 第２新大阪ビル 1F、新大阪駅から徒歩7分、西中島南方駅と阪急 南方駅から7分、月〜土17:00〜翌2:00、日曜休み、予約は電話で16:30以降、13〜19名の貸切、カード・PayPay・d払い可、電子マネー不可、19席 (カウンター7、4人がけテーブル3)、喫煙可、車いす可、英語のメニュー、テイクアウトとデリバリー、オープン日1982年5月1日。店の紹介: 創業46年、数種類の長芋とスパイスでふわふわのお好み焼き、国産の材料、オリジナルのソース、体にやさしい材料。備考: 無添加で、においが残らない特許のにんにくを使った Hamamatsu gyoza。口コミ(2025年12月〜2026年10月): 夫婦で切り盛り、お好み焼きは奥で店主が焼いて熱々で運ばれる、豚とタコ、豚キムチ、すじねぎ、オムそば、塩焼きそば、イカバター、エリンギバター、すじ焼き、甘いソースにからし、だしのきいた生地、夜11時半にほぼ満席、壁に「Medical Menu」。',
      confidence: 'medium', sources: [TB, R + 'B519029388/', R + 'B528424842/', R + 'B528705759/', R + 'B529556569/', R + 'B529631249/', R + 'B533093088/', R + 'B533519296/', R + 'B536591204/', R + 'B537888247/', R + 'B538467371/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tabelog lists an English menu; dishes come finished from the kitchen, not cooked at your seat. No evidence of English-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島6-3-32 第２新大阪ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島六丁目3番32号 (go) 8m; the same building's 炭火焼鳥 小鉄 (osaka_sumibi_yakitori_kotetsu_nishinakajima) sits on its own Tabelog point about 3 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B528424842/', R + 'B529631249/', R + 'B533519296/'],
    price_note: 'No prices in the sources; dishes from 2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Pork and octopus okonomiyaki (Osaka-style)', '', 'Okonomiyaki', 'no', 'no', 'May 2026.', 'buta_tako'),
      it('', '', 'Omelette yakisoba', '', 'Yakisoba', 'no', 'no', 'May, June and October 2026.', 'omusoba'),
      it('', '', 'Salt yakisoba', '', 'Yakisoba', 'no', 'no', 'August 2026.', 'shio_yakisoba'),
      it('', '', 'Squid with butter', '', 'Teppan', 'ask', 'no', 'May and August 2026.', 'ika_butter'),
      it('', '', 'King oyster mushroom with butter', '', 'Teppan', 'ask', 'no', 'August 2026; butter.', 'eringi_butter'),
      it('', '', 'Suji-yaki', '', 'Teppan', 'no', 'no', 'September 2026.', 'sujiyaki'),
      it('', '', 'Hamamatsu gyoza', '', 'Sides', 'no', 'no', 'Tabelog remarks; June 2026.', 'hamamatsu_gyoza'),
    ] }, {
    cuisine: '大阪のお好み焼き。何種類もの長芋とスパイス、国産の材料、オリジナルのブレンドのソースでふわふわに (食べログ)・Hamamatsu gyoza: 無添加で、特許のにんにくを使い、においは2時間で消えるという (食べログの備考。2026年6月はメニューに「3時間」)・口コミに出てくるお好み焼き: 豚とタコ、タコと豚と野菜がたっぷりの Osaka-yaki、豚キムチ、すじとねぎ、豚玉 (2026年)・半熟卵のオムそば、塩焼きそば (2026年)・鉄板焼き: イカのバター焼き、エリンギのバター焼き、イカの卵焼き、すじ焼き、すじとねぎの焼き物、厚揚げ、フライドポテト (2026年)・甘いソースにからし (2026年5月と8月)・壁に「Medical Menu」(2026年10月)・ビール、ハイボール、カクテル、日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '西中島6-3-32、第２新大阪ビルの1階。新大阪駅 (Midosuji 線、JR) から徒歩7分。JR の中央口から Midosuji 線ぞいに南へ、Mystays の1本西 (食べログ)。西中島南方駅と阪急 南方駅からも7分',
    gf_detail: 'グルテンフリーではありません。お好み焼きの生地、焼きそば、gyoza は小麦。',
    vegan_detail: 'ヴィーガンではありません。お好み焼きの生地はだしの味がして、かつお節がのる (2026年10月)。ほとんどの料理に豚、タコ、イカ、牛すじが入る。食べログの特徴には「ベジタリアンメニューあり」とあるが、ベジタリアンの料理の名前は出てこない。',
    notes: '[お好み焼き・西中島、新大阪の夜遅くまでの鉄板] 新大阪駅から南へ7分の小さなお好み焼きの店で、丸いレトロな看板と提灯が目印。週6日、夜2時まで開いていて、食べログでは1982年から。そのため、夜遅く着いた出張の人や、コンサートや野球の帰りの人が見つける店で、2026年6月のある夜は11時半にほぼ満席だった。2026年6月の客によると夫婦で切り盛りしていて、お好み焼きは奥で焼いて熱々で運ばれ、目の前の鉄板で焼くのではない (2026年5月と10月)。長芋の入ったふわふわの生地はだしがきいていて、甘いソースにからしがすっと入る。定番は豚とタコで、半熟卵のオムそばにもファンがいる。イカやエリンギのバター焼き、すじ焼き、においが残らないというにんにくの Hamamatsu gyozaも。喫煙可。日曜休み。',
  });
}

// ================================================================ イチャドル韓豚丼
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27151194/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '21:00']);
  put({
    id: 'osaka_ichadoru_korean_butadon_nishinakajima', name: 'イチャドル韓豚丼 (Ichadoru Korean Buta-don)', category: 'OMNI',
    lat: 34.728727, lng: 135.500860, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The main dishes are pork stir-fried with homemade gochujang or with soy sauce (gochujang and soy sauce usually contain wheat), with japchae and a limited-time cold noodle dish on the menu. Tabelog\'s feature list says allergy information is available.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every main is pork, and the set side dishes include rolled omelette and kimchi; the summer cold noodles came with a bonito rice ball (July 2026).',
    hours_raw: 'Mon–Fri and the days before and after a holiday 11:00–21:00; closed Sat, Sun and holidays (Tabelog). Over the 2025–26 New Year it closed after Friday 26 December and reopened Monday 5 January (Tabelog). No reservations (Tabelog). Tabelog lists no cards, e-money or QR payment, but an October 2026 diner paid at the meal-ticket machine, which takes PayPay. 13 counter seats; non-smoking; children welcome; menu in English, Simplified Chinese and Korean; takeaway and delivery; allergy information available (Tabelog). Self-service water; the toilet is outside the shop (October 2026). Opened 11 November 2025 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-8-29, チサンマンション第3新大阪 — 5 min from Hankyu Minamikata Stn, 6 min (500 m) from Shin-Osaka (Tabelog); listed as the ground floor, described as a half-basement about 5 min south of Shin-Osaka Station and easy to miss (October 2026)',
    cuisine: 'Korean pork rice bowls and set meals (Tabelog) · pork stir-fried with homemade gochujang, the house specialty; a soy-sauce stir-fry for those who avoid heat · rice bowls ¥700 with miso soup and kimchi: soy-sauce pork (March, June and September 2026), gochujang pork with lettuce (July 2026) · set meals ¥1,000 with seven small side dishes (rolled omelette, hijiki, glass noodles, kimchi, blanched greens, konjac, bean-sprout namul), Korean seaweed and miso soup: gochujang pork (August and October 2026), soy-sauce pork (June 2026); large rice on request · sundubu jjigae set (spicy) and pork set with teppan japchae (spicy) (Tabelog), both sold out soon after noon in July and August 2026 · limited-time cold noodles with a large bonito and sesame-oil rice ball (July 2026)',
    website: null, gmaps: gm('イチャドル韓豚丼 西中島5-8-29'), menu_url: null,
    notes: "[Korean · Nishinakajima, pork rice bowls at a counter] A 13-seat counter a few minutes' walk south of Shin-Osaka Station, opened in November 2025, which bills itself as the first Japanese shop of Ichadol, a big Korean yakiniku chain, serving Korean pork rice bowls. The order is pork stir-fried with the shop's own gochujang, sweet and hot, or a milder soy-sauce version, as a ¥700 rice bowl with miso soup and kimchi or as a ¥1,000 set with seven little side dishes, Korean seaweed and miso soup (2026); portions are big, and staff will make the rice large if you ask. The sundubu and japchae sets sell out early: both were gone by just after noon on a July 2026 weekday. Buy a ticket at the machine (PayPay works, per an October 2026 diner, though Tabelog lists no cashless payment). One diner found the owner friendly and attentive (June 2026); another saw many overseas diners (October 2026). Weekdays only.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and counter staff'], origin: null, background: 'Per the Tabelog listing: "Korea\'s No.1 Yakiniku Chain, Ichadol, Launches Japan\'s First Korean Pork Bowl in Nishinakajima"; homemade gochujang; opened 11 November 2025. Reviewers: "a friendly and attentive owner" (June 2026); "a pork stir-fry specialty restaurant run by the popular Korean BBQ chain \'Ichadoru\'" (October 2026).', philosophy: null, specialty: 'Pork stir-fried with homemade gochujang, as a rice bowl or a set with seven side dishes.',
      anecdotes: [
        { text: '"As expected from a Korean set meal restaurant, in addition to the main dish, there were 7 small side dishes." — June 2026, the soy-sauce pork set for JPY 1,000.', source: R + 'B526588329/' },
        { text: '"I was able to get in without waiting, but by a little after 12, both the japchae and sundubu were sold out!" — July 2026.', source: R + 'B532819857/' },
        { text: '"I was surprised to see many foreign customers in the restaurant! People from various countries were dining here." — October 2026, the gochujang pork set for JPY 1,000.', source: R + 'B536666563/' },
      ],
      japanese_sources_summary: '食べログ: イチャドル韓豚丼、韓国料理・食堂、大阪市淀川区西中島5-8-29 チサンマンション第3新大阪 1F、阪急 南方駅から徒歩5分、新大阪から6分 (500m)、月〜金・祝前日・祝後日11:00〜21:00、土・日・祝休み、年末年始は12月26日 (金曜) まで、1月5日 (月曜) から、予約不可、カード・電子マネー・QR 不可、13席 (カウンター)、禁煙、子ども可、英語・中国語 (簡体字)・韓国語のメニュー、テイクアウトとデリバリー、アレルギー表示あり、2025年11月11日オープン。店の紹介: 韓国でナンバーワンの焼肉チェーン Ichadol が日本で初めての韓豚丼を西中島に、自家製のコチュジャン、辛いのが苦手な人には醤油の炒め丼と定食、おすすめはコチュジャンの豚肉炒め、スンドゥブチゲの定食 (辛口) は7種のおかずと韓国のりつき、豚肉炒めと鉄板チャプチェの定食 (辛口)。口コミ(2026年3月〜10月): 醤油の豚肉炒め丼とコチュジャンの丼は700円でみそ汁とキムチつき、定食は1,000円で7種の小鉢 (卵焼き、ひじき、春雨、キムチ、青菜、こんにゃく、もやしのナムル) と韓国のりとみそ汁、ごはん大盛りも頼める、スンドゥブとチャプチェは昼すぎに売り切れ、期間限定の冷麺とおにぎり、食券機、PayPay 可、半地下、トイレは店の外、気さくな店主、海外からの客も多い。',
      confidence: 'medium', sources: [TB, R + 'B525839519/', R + 'B526588329/', R + 'B530456128/', R + 'B531411926/', R + 'B532819857/', R + 'B534488479/', R + 'B536666563/', R + 'B536988534/', R + 'B537435334/', R + 'B537625640/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at a ticket machine; Tabelog lists a menu in English, Simplified Chinese and Korean. Many overseas diners on an October 2026 visit.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog feature list: "Allergy information available".'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-8-29 チサンマンション第3新大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目8番29号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B525839519/', R + 'B531411926/', R + 'B534488479/'],
    price_note: 'Prices from 2026 reviews (the ¥700 bowl is tax included per a June 2026 review), each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Gochujang pork stir-fry rice bowl, with miso soup and kimchi', '¥700', 'Rice bowls', 'ask', 'no', 'July 2026.', 'gochujang_don'),
      it('', '', 'Soy-sauce pork stir-fry rice bowl, with miso soup and kimchi', '¥700', 'Rice bowls', 'ask', 'no', 'March, June and September 2026.', 'shoyu_don'),
      it('', '', 'Gochujang pork stir-fry set with seven side dishes and Korean seaweed', '¥1,000', 'Set meals', 'ask', 'no', 'August and October 2026.', 'gochujang_set'),
      it('', '', 'Soy-sauce pork stir-fry set with seven side dishes', '¥1,000', 'Set meals', 'ask', 'no', 'June 2026.', 'shoyu_set'),
      it('', '', 'Sundubu jjigae set (spicy)', '', 'Set meals', 'ask', 'no', 'Tabelog; sold out by early afternoon in July and August 2026.', 'sundubu_set'),
      it('', '', 'Pork stir-fry set with teppan japchae (spicy)', '', 'Set meals', 'ask', 'no', 'Tabelog.', 'japchae_set'),
    ] }, {
    cuisine: '韓国の豚丼と定食 (食べログ)・名物は自家製コチュジャンの豚肉炒め。辛いのが苦手な人には醤油の炒め物・丼は700円でみそ汁とキムチつき: 醤油の豚肉炒め (2026年3月、6月、9月)、レタスをのせたコチュジャンの豚肉炒め (2026年7月)・定食は1,000円で7種の小鉢 (卵焼き、ひじき、春雨、キムチ、青菜、こんにゃく、もやしのナムル)、韓国のり、みそ汁つき: コチュジャンの豚肉炒め (2026年8月と10月)、醤油の豚肉炒め (2026年6月)。頼めばごはん大盛り・スンドゥブチゲの定食 (辛口) と鉄板チャプチェと豚肉炒めの定食 (辛口) (食べログ)。2026年7月と8月はどちらも昼すぎに売り切れ・期間限定の冷麺に、かつおとごま油の大きなおにぎりつき (2026年7月)',
    neighborhood: '西中島5-8-29、チサンマンション第3新大阪。阪急 南方駅から徒歩5分、新大阪から6分 (500m) (食べログ)。食べログでは1階、口コミでは新大阪駅から南へ約5分のビルの半地下で、見落としやすい (2026年10月)',
    gf_detail: '要確認。グルテンの情報なし。メインは自家製コチュジャンか醤油で炒めた豚肉 (コチュジャンと醤油はたいてい小麦を含む) で、チャプチェや期間限定の冷麺もある。食べログの特徴に「アレルギー表示あり」とある。',
    vegan_detail: 'ヴィーガンではありません。メインはどれも豚肉で、小鉢には卵焼きやキムチがある。夏の冷麺にはかつおのおにぎりがついた (2026年7月)。',
    notes: '[韓国料理・西中島、カウンターの豚丼] 新大阪駅から南へ歩いて数分の13席のカウンターの店で、2025年11月に開いた。韓国の大きな焼肉チェーン Ichadol の日本で初めての店で、韓国の豚丼を出すという。頼むのは自家製コチュジャンで炒めた甘辛い豚肉か、辛くない醤油の炒め物で、みそ汁とキムチつきの700円の丼か、7種の小鉢、韓国のり、みそ汁つきの1,000円の定食に (2026年)。量が多く、頼めばごはんを大盛りにしてくれる。スンドゥブとチャプチェの定食は早く売り切れ、2026年7月の平日は昼すぎにはどちらもなかった。食券機で買う (2026年10月の客によると PayPay も使えるが、食べログにはキャッシュレスの表示がない)。店主が気さくでていねいという声 (2026年6月) や、海外からの客が多かったという声 (2026年10月) も。平日のみ。',
  });
}

// ================================================================ 辛口Lab. 新大阪
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27089740/'; const R = TB + 'dtlrvwlst/';
  const MW = day(['11:30', '15:00'], ['18:00', '21:00']); const TS = day(['11:30', '17:00']);
  put({
    id: 'osaka_karakuchi_lab_shin_osaka', name: '辛口Lab. 新大阪 (Karakuchi Lab. Shin osaka)', category: 'OMNI',
    lat: 34.732732, lng: 135.505074, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. How the two curry sauces are thickened is not described; most toppings are breaded and fried (chicken katsu, ham cutlet, menchi katsu, fried shrimp, croquettes).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the A curry has meat in it (July 2026), and nothing is described as vegan; the base of the B curry is not described.',
    hours_raw: 'Mon–Wed 11:30–15:00 and 18:00–21:00; Thu, Fri, Sat and holidays 11:30–17:00; closed Sunday; hours and closing days may change, so check before going (Tabelog). No reservations; cash only (no cards, e-money or QR) (Tabelog). 8 counter seats; non-smoking (Tabelog); a July 2026 diner was seated at a table.',
    hours: { 0: MW, 1: MW, 2: MW, 3: TS, 4: TS, 5: TS }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '東中島4-1-29, ground floor of 新大阪グランドハイツ, in a residential street — just over 5 min from the east exit of JR Shin-Osaka (the wrong exit means a long detour) (Tabelog); about 10 min from the east exit (August 2026)',
    cuisine: 'Two curries: A, "Addict", very hot, and B, "Best", medium-hot; or both on one plate (2025–2026) · B is fruity and sweet with heat that comes later (December 2025); A is tangy with a delayed heat (September 2026) · Best curry ¥690 with toppings: egg ¥60, meat ¥220, two fried shrimp ¥280, wiener ¥250 (June 2026) · B curry with crab cream croquette ¥910 (August 2026) · other toppings: chicken-breast katsu (December 2025), ham cutlet (May 2026), deep-fried broccoli, cream croquette, asparagus (July 2026), eggplant (September 2026), menchi katsu, a limited-time kara-age (October 2026) · large rice free; a free refill of curry sauce on orders over ¥940 (June 2026) · barley rice or brown rice instead of white (July 2026)',
    website: null, gmaps: gm('辛口Lab. 新大阪 東中島4-1-29'), menu_url: null,
    notes: "[Curry · Shin-Osaka east side, a hot-curry counter] An eight-seat curry counter on a residential street east of Shin-Osaka Station, hard to find from the wrong exit, that draws a line some days (April 2025) and is quiet on others (July and September 2026). There are two sauces: A, \"Addict\", properly hot, and B, \"Best\", medium; many diners order both on one plate and keep them apart, since A takes over if mixed (May 2026). B is fruity and sweet with heat that arrives late, A tangier. The Best curry starts at ¥690, with toppings from a ¥60 egg to fried shrimp, croquettes, katsu or vegetables; large rice is free, and the sauce is refilled free on bigger orders (June 2026). Barley or brown rice on request. Cash only; closes at 17:00 Thursday to Saturday and all day Sunday.",
    chef_bio: { chef_name: null, roles: ['Counter cook (unnamed)'], origin: null, background: 'No information about who runs the shop in the sources. Tabelog lists eight counter seats, cash only, and warns that hours and closing days may change.', philosophy: null, specialty: 'A (Addict) and B (Best) curries, alone or together, with fried toppings.',
      anecdotes: [
        { text: '"Be careful not to mix them too much, or the spicy curry will overpower everything!" — May 2026, A and B on one plate with ham cutlet.', source: R + 'B527496476/' },
        { text: '"The curry was very fruity and sweet, but it had a strong spicy aftertaste. It\'s the kind of curry that hits you with heat later on." — December 2025, the B curry with chicken katsu.', source: R + 'B518269433/' },
        { text: '"The presentation was impressive, with a generous amount of curry over a perfectly shaped mound of rice!" — August 2026, the B curry with crab cream croquette for JPY 910.', source: R + 'B533511848/' },
      ],
      japanese_sources_summary: '食べログ: 辛口Lab. 新大阪、カレー、大阪市東淀川区東中島4-1-29 新大阪グランドハイツ 1F、JR 新大阪駅の東口から徒歩5分ちょっと (出口をまちがえると遠回り)、月〜水11:30〜15:00、18:00〜21:00、木・金・土・祝11:30〜17:00、日曜休み、時間と休みは変わることがある、予約不可、現金のみ、8席 (カウンター)、禁煙。口コミ(2025年4月〜2026年10月): 住宅街なのに行列ができる人気店、A (Addict) はとても辛く B (Best) は中くらいの辛さ、あいがけ、B はフルーティーで甘くあとから辛い、A は酸味、Best のカレー690円、卵60円、肉220円、エビフライ2本280円、ウインナー250円、カニクリームコロッケの B 910円、チキンカツ、ハムカツ、ブロッコリーの素揚げ、アスパラ、なす、メンチカツ、ごはん大盛り無料、940円以上でルーのおかわり無料、麦ごはんや玄米も。',
      confidence: 'medium', sources: [TB, R + 'B518269433/', R + 'B522071159/', R + 'B527496476/', R + 'B530490750/', R + 'B531098366/', R + 'B531396032/', R + 'B531582263/', R + 'B533511848/', R + 'B534027564/', R + 'B536229881/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A small counter with two curries and a list of toppings; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島4-1-29 新大阪グランドハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島四丁目1番29号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530490750/', R + 'B533511848/'],
    price_note: 'Prices from June and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Best (B) curry', '¥690', 'Curry', 'ask', 'ask', 'June 2026.', 'b_curry'),
      it('', '', 'Addict (A) curry, very hot', '', 'Curry', 'ask', 'no', 'July 2026; has meat.', 'a_curry'),
      it('', '', 'B curry with crab cream croquette', '¥910', 'Curry', 'no', 'no', 'August 2026.', 'b_crab_croquette'),
      it('', '', 'Topping: two fried shrimp', '¥280', 'Toppings', 'no', 'no', 'June 2026.', 'ebi_fry'),
      it('', '', 'Topping: meat', '¥220', 'Toppings', 'ask', 'no', 'June 2026.', 'meat_topping'),
      it('', '', 'Topping: egg', '¥60', 'Toppings', 'ask', 'no', 'June 2026.', 'egg_topping'),
    ] }, {
    cuisine: 'カレーは2種類: とても辛い A の「Addict」と中辛の B の「Best」。ひと皿で両方も (2025〜2026年)・B はフルーティーで甘く、あとから辛さがくる (2025年12月)。A は酸味があって、あとから辛い (2026年9月)・Best のカレー690円にトッピング: 卵60円、肉220円、エビフライ2本280円、ウインナー250円 (2026年6月)・カニクリームコロッケの B のカレー910円 (2026年8月)・ほかのトッピング: 鶏むねのカツ (2025年12月)、ハムカツ (2026年5月)、ブロッコリーの素揚げ、クリームコロッケ、アスパラ (2026年7月)、なす (2026年9月)、メンチカツ、期間限定の kara-age (2026年10月)・ごはん大盛り無料、940円以上でルーのおかわり無料 (2026年6月)・白ごはんのかわりに麦ごはんや玄米も (2026年7月)',
    neighborhood: '東中島4-1-29、新大阪グランドハイツの1階、住宅街の中。JR 新大阪駅の東口から徒歩5分ちょっと (出口をまちがえると遠回り) (食べログ)。東口から約10分という声も (2026年8月)',
    gf_detail: '要確認。グルテンの情報なし。2種類のルーに何でとろみをつけているかの説明はない。トッピングのほとんどはパン粉の揚げ物 (チキンカツ、ハムカツ、メンチカツ、エビフライ、コロッケ)。',
    vegan_detail: 'ヴィーガンではありません。A のカレーには肉が入っていて (2026年7月)、ヴィーガンの説明はない。B のカレーのベースの説明もない。',
    notes: '[カレー・東中島、新大阪の東の辛いカレーのカウンター] 新大阪駅の東、住宅街にある8席のカウンターのカレー店。出口をまちがえると遠回りになる。行列ができる日も (2025年4月)、すいている日も (2026年7月と9月)。ルーは2種類: しっかり辛い A の「Addict」と中辛の B の「Best」。ひと皿に両方をかけてもらう人が多く、まぜすぎないように食べる。、まぜると A が勝ってしまう (2026年5月)。B はフルーティーで甘く、あとから辛さがくる。A はもっと酸味がある。Best のカレーは690円からで、トッピングは60円の卵から、エビフライ、コロッケ、カツ、野菜まで。ごはん大盛りは無料で、多めに頼めばルーのおかわりも無料 (2026年6月)。麦ごはんや玄米も選べる。現金のみ。木曜から土曜は17時まで、日曜休み。',
  });
}

// ================================================================ 鶏ノGAKU
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27126550/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_tori_no_gaku_nishinakajima', name: '鶏ノGAKU (Tori no GAKU)', category: 'OMNI',
    lat: 34.727594, lng: 135.499785, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Much of the menu is fried (kara-age, chicken nanban, fried horse mackerel, chicken cutlet), the mapo tofu is a Sichuan-style sauce, and the lunch sets come with soup and shumai; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken izakaya; the mapo tofu has minced meat (May 2026), and the lunch sets come with egg soup.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 18:00–23:00 (last order 22:00); closed Sat, Sun and holidays; occasional temporary closures (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC cards and PayPay; Apple Pay and ICOCA too (Tabelog). 18 seats at a counter, two tables and sofas; whole-shop hire; heated tobacco only, no paper cigarettes (Tabelog); "Smoking and Minors Not Allowed" in a March 2026 review title, which also says smoking was allowed but the room was not smoky. Opened 14 October 2021 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島3-22-20 — 3 min from Nishinakajima-Minamigata Stn (Midosuji Line) (Tabelog); on the main street about 5 min east of the station (June 2026), roughly halfway between Shin-Osaka and Minamikata (April 2026)',
    cuisine: 'Fresh Tajima chicken (Tabelog): breast tataki, chicken "Gyoopsal" (as Tabelog\'s English writes it), charcoal-grilled dishes and yakitori, plus the Sichuan mapo tofu of its sister restaurant 華Sansyou学 (Tabelog) · "Tori no GAKU" course of 8 dishes with all-you-can-drink ¥5,000; chicken shabu-shabu hot-pot course of 7 dishes with all-you-can-drink, 180 minutes, ¥6,000 (Tabelog, tax included) · dinner prices, March 2026: Sichuan mapo tofu ¥1,210, domestic chicken kara-age ¥638, thigh tataki with green onion ¥1,078, charcoal-grilled thigh with yuzu kosho ¥1,408, breast tataki with ume and shiso ¥858, chicken sobameshi ¥1,100, French fries ¥528 · lunch sets with free refills of rice and egg soup: chicken nanban with shiba-zuke tartar ¥980 (July 2024), ¥1,100 (December 2025); kara-age with grated daikon and ponzu ¥1,100 (June 2026); fried horse mackerel with tartar, a kara-age and a shumai ¥1,200 (June and September 2026); kimeji tuna sashimi set ¥1,300 (May 2026); chicken nanban with a small mapo tofu ¥1,400 (April 2026); about 14 sets from ¥1,100 (May 2026); a curry-flavoured mapo tofu (March 2026) · sake, shochu, wine (Tabelog)',
    website: null, gmaps: gm('鶏ノGAKU 西中島3-22-20'), menu_url: null,
    notes: "[Chicken izakaya · Nishinakajima, Tajima chicken and Sichuan mapo tofu] A small chicken izakaya on the main street east of Nishinakajima-Minamigata, opened in 2021 as the sister shop of the Sichuan restaurant 華Sansyou学, so half the menu is its mapo tofu: soft silken tofu with minced meat, Sichuan pepper and a heat that comes later (2026). The rest is fresh Tajima chicken: tataki of breast or thigh with no off taste, a whole thigh grilled over charcoal with yuzu kosho, crisp kara-age, and chicken sobameshi to finish (March 2026). Weekday lunch brings about fourteen sets from ¥1,100 with free rice and egg-soup refills; one five-time visitor can never resist the chicken nanban with its shiba-zuke tartar (December 2025). Evenings fill with office workers by 18:00 (March 2026), and the all-you-can-drink courses, one built on chicken shabu-shabu, run ¥5,000–6,000. Closed weekends.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the Tabelog listing: a sister restaurant of the Chinese restaurant 華Sansyou学 ("Hana Sansyou Gaku" on Tabelog), known for Sichuan mapo tofu, serving fresh, tender chicken "free from any gamey taste": breast tataki, chicken "Gyoopsal" (as Tabelog\'s English writes it), charcoal-grilled dishes, creative chicken dishes and yakitori; a specialities heading names Tajima chicken. Opened 14 October 2021 (Tabelog).', philosophy: '"Freshness is What Makes Tajima Chicken Worth Tasting" (Tabelog, translated).', specialty: 'Sichuan mapo tofu; chicken tataki; chicken nanban lunch.',
      anecdotes: [
        { text: '"The Mapo Tofu looked tempting too, but whenever I come here, I just can\'t resist the Chicken Nanban!" — December 2025, the chicken nanban for JPY 1,100 with refills of rice and egg soup.', source: R + 'B460866622/' },
        { text: '"Thanks to the freshly caught chicken, there\'s no odor, and the texture is pleasantly firm." — March 2026, the thigh tataki with green onion for JPY 1,078.', source: R + 'B525641681/' },
        { text: '"It\'s not too spicy, but it has a punch that makes you sweat later." — September 2026, the Sichuan mapo tofu at lunch.', source: R + 'B535630040/' },
      ],
      japanese_sources_summary: '食べログ: 鶏ノGAKU、鶏料理・居酒屋・鍋、大阪市淀川区西中島3-22-20、Midosuji 線 西中島南方駅から徒歩3分、月〜金11:30〜14:00、18:00〜23:00 (L.O.22:00)、土・日・祝休み、臨時休業あり、予約可、カード・交通系 IC・PayPay 可、Apple Pay と ICOCA も、18席、カウンターとソファ、貸切可、加熱式たばこのみ、紙たばこ不可、2021年10月14日オープン。店の紹介: 四川麻婆豆腐の中華料理 華Sansyou学 の姉妹店、新鮮でくさみのない鶏、むねのタタキ、鶏の Gyoopsal、炭火焼き、創作の鶏料理、焼鳥、Tajima の鶏、飲み放題つき8品のコース5,000円、鶏しゃぶ鍋の7品のコース6,000円 (180分)。口コミ(2024年7月〜2026年9月): 四川麻婆豆腐1,210円、国産鶏の kara-age 638円、ももタタキのねぎ塩1,078円、もも炭火焼きの柚子こしょう1,408円、むねタタキの梅しそ858円、鶏のそばめし1,100円、フライドポテト528円、平日18時でほぼ満席、昼の定食は約14種で1,100円から、ごはんと卵スープはおかわり自由、しば漬けのタルタルのチキン南蛮、おろしポン酢の kara-age、アジフライ、キメジマグロの刺身定食1,300円、カレー味の麻婆豆腐も。',
      confidence: 'medium', sources: [TB, R + 'B460866622/', R + 'B524631185/', R + 'B525487463/', R + 'B525641681/', R + 'B526570259/', R + 'B529005657/', R + 'B530680516/', R + 'B532871074/', R + 'B534027991/', R + 'B535630040/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Weekday lunch sets and evening izakaya; no English menu listed and no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-22-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description and courses; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目22番20号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B525641681/', R + 'B460866622/', R + 'B532871074/'],
    price_note: 'Course prices from the Tabelog listing (tax included); dinner prices from a March 2026 review, lunch prices from 2025–2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Sichuan mapo tofu', '¥1,210', 'Signature', 'ask', 'no', 'March 2026.', 'mapo_tofu'),
      it('', '', 'Domestic chicken kara-age', '¥638', 'Fried', 'no', 'no', 'March 2026.', 'karaage'),
      it('', '', 'Chicken thigh tataki with green onion and salt', '¥1,078', 'Chicken', 'ask', 'no', 'March 2026.', 'momo_tataki'),
      it('', '', 'Charcoal-grilled chicken thigh with yuzu kosho', '¥1,408', 'Chicken', 'ask', 'no', 'March 2026.', 'momo_sumibi'),
      it('', '', 'Chicken breast tataki with ume and shiso', '¥858', 'Chicken', 'ask', 'no', 'March 2026.', 'mune_tataki'),
      it('', '', 'Chicken sobameshi', '¥1,100', 'Finish', 'no', 'no', 'March 2026.', 'sobameshi'),
      it('', '', 'Chicken nanban set (lunch)', '¥1,100', 'Lunch', 'no', 'no', 'December 2025; ¥980 in July 2024.', 'nanban_set'),
      it('', '', 'Fried horse mackerel, kara-age and shumai set (lunch)', '¥1,200', 'Lunch', 'no', 'no', 'June and September 2026.', 'ajifry_set'),
      it('', '', '"Tori no GAKU" course of 8 dishes with all-you-can-drink', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog.', 'gaku_course'),
      it('', '', 'Chicken shabu-shabu hot-pot course with all-you-can-drink', '¥6,000', 'Courses', 'ask', 'no', 'Tabelog.', 'torishabu_course'),
    ] }, {
    cuisine: '新鮮な Tajima の鶏 (食べログ): むねのタタキ、鶏の Gyoopsal、炭火焼き、焼鳥、それに姉妹店の 華Sansyou学 の四川麻婆豆腐 (食べログ)・飲み放題つきの「鶏ノGAKU」コース8品5,000円、飲み放題つきの鶏しゃぶ鍋のコース7品、180分、6,000円 (食べログ、税込)・夜の値段 (2026年3月): 四川麻婆豆腐1,210円、国産鶏の kara-age 638円、ももタタキのねぎ塩1,078円、もも炭火焼きの柚子こしょう1,408円、むねタタキの梅しそ858円、鶏のそばめし1,100円、フライドポテト528円・昼の定食はごはんと卵スープのおかわり自由: しば漬けのタルタルのチキン南蛮980円 (2024年7月)、1,100円 (2025年12月)、おろしポン酢の kara-age 1,100円 (2026年6月)、タルタルのアジフライに kara-age とシュウマイ1,200円 (2026年6月と9月)、キメジマグロの刺身定食1,300円 (2026年5月)、チキン南蛮と小さな麻婆豆腐1,400円 (2026年4月)、約14種で1,100円から (2026年5月)、カレー味の麻婆豆腐も (2026年3月)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '西中島3-22-20。Midosuji 線 西中島南方駅から徒歩3分 (食べログ)。駅から東へ約5分の大通りぞい (2026年6月)、新大阪と南方のほぼ中間 (2026年4月)',
    gf_detail: '要確認。グルテンの情報なし。揚げ物が多く (kara-age、チキン南蛮、アジフライ、チキンカツ)、麻婆豆腐は四川風のソース、昼の定食にはスープとシュウマイがつく。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。鶏の居酒屋で、麻婆豆腐にはひき肉が入り (2026年5月)、昼の定食には卵スープがつく。',
    notes: '[鶏料理の居酒屋・西中島、Tajima の鶏と四川麻婆豆腐] 西中島南方の東、大通りぞいの小さな鶏料理の居酒屋で、2021年に四川料理の 華Sansyou学 の姉妹店として開いた。そのためメニューの半分は麻婆豆腐: やわらかい絹ごし豆腐にひき肉、花椒、あとからくる辛さ (2026年)。ほかは新鮮な Tajima の鶏: くさみのないむねやもものタタキ、柚子こしょうで食べるまるごとのもも肉の炭火焼き、カリッとした kara-age、締めの鶏のそばめし (2026年3月)。平日の昼の定食は約14種、1,100円からで、ごはんと卵スープはおかわり自由。しば漬けのタルタルのチキン南蛮を毎回頼んでしまうという人も (2025年12月)。夜は18時には会社員でいっぱいになり (2026年3月)、鶏しゃぶの鍋のコースなど飲み放題つきのコースは5,000〜6,000円。土日休み。',
  });
}

save();
