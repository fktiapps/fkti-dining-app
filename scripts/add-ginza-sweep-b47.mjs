// Ginza Station half-mile sweep (805 m), batch 47 — four small teppan/French places with 2026 reviews (all OMNI).
//   + 銀座 紫野 (teppanyaki behind Matsuya; run by a married couple per a 2025 review, unnamed → OMNI)
//   + 銀座和縁 (teppanyaki since 2012; a "master and hostess" per a 2026 review, unnamed → OMNI)
//   + 薪焼 銀座おのでら (wood-fire French of the ONODERA group, opened 2019)
//   + PLEIN 銀座本店 (counter French, opened 2023, main shop of the PLEIN group)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 銀座 紫野
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13263170/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '21:00']);
  put({
    id: 'tokyo_ginza_shino_teppan', name: '銀座 紫野 (Ginza Shino)', category: 'OMNI',
    lat: 35.672288, lng: 139.767183,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: teppan courses include tempura (autumn eggplant, sanma in shiso, corn) alongside fugu, abalone and Wagyu; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fugu, fish tempura, hanpen, abalone and Wagyu steak.',
    hours_raw: 'Mon–Sat 17:00–21:00; closed Sundays and holidays (Tabelog). Cards and d Barai accepted. Heated-tobacco area.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme behind Matsuya, Ginza Nihon Ryōri Kaikan B1F — 3 min from Ginza-itchōme Stn',
    cuisine: 'Teppanyaki with fugu and seasonal tempura · couple-run basement counter · beef bento to take home', cuisine_type: 'other',
    website: null, gmaps: gm('銀座 紫野 銀座3-7-20 銀座日本料理会館'), menu_url: null,
    notes: "[Teppanyaki · fugu, tempura and Wagyu behind Matsuya] A 14-seat basement teppanyaki behind Ginza Matsuya with private rooms, run, according to an October 2025 diner, by a husband-and-wife team, neither named. Courses mix Japanese seasonal dishes with the griddle. Fugu comes first, then tempura of autumn eggplant, sanma wrapped in shiso and corn, then hanpen from Nihonbashi Kamimo (as a reviewer spells it), fresh abalone, and black-haired Wagyu fillet and strip loin. A clear soup, whiskies such as Akkeshi, Bowmore and Ardbeg, and Chablis round it out. Special fugu dinners are also offered, and one party took home a beef bento. Expect ¥20,000–40,000 a head; it suits client dinners.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 3-chōme basement; opening date not found in a source read', background: 'An October 2025 reviewer describes a husband-and-wife team; no source names them.', philosophy: null, specialty: 'Fugu; Wagyu teppan; seasonal tempura.',
      anecdotes: [
        { text: '"Located on the basement floor of a building behind Ginza Matsuya, this teppan-yaki restaurant is run by a husband and wife team." — October 2025.', source: R + 'B516267796/' },
        { text: '"I tried Akkeshi for the first time, and it was so smooth that I ended up ordering a bottle." — June 2026.', source: R + 'B531283293/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 紫野、銀座3-7-20 銀座日本料理会館B1F、銀座一丁目駅から徒歩3分、14席・個室、月〜土17:00〜21:00、日祝休、カード・d払い可、加熱式たばこ専用の喫煙所、2〜3万円。口コミ(2024〜2026年): 松屋の裏、夫婦で営む鉄板焼き、ふぐ、秋茄子・秋刀魚の大葉巻き・とうもろこしの天ぷら、日本橋の Kamimo(英文の口コミの表記)のはんぺん、鮑、黒毛和牛のフィレとサーロイン、お吸い物、厚岸・ボウモア・アードベッグ、シャブリ、ふぐの特別料理、牛肉弁当の土産、接待向き。',
      confidence: 'low', sources: [TB, R + 'B516267796/', R + 'B531283293/', R + 'B520788824/', R + 'B503168737/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet basement with private rooms; suits business dinners.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Tempura served within the teppan course.', source: R + 'B516267796/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-7-20 銀座日本料理会館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目7番20号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516267796/'],
    price_note: 'No prices captured; reviewers spend ¥20,000–40,000.', last_checked: TODAY, items: [
      it('鉄板焼きコース', 'teppanyaki koosu', 'Teppan course: fugu, tempura, abalone, Wagyu', '', 'Courses', 'no', 'no', '', 'teppan_course'),
    ] }, {
    cuisine: 'ふぐと季節の天ぷらの鉄板焼き・夫婦で営む地下のカウンター・土産の牛肉弁当',
    neighborhood: '銀座三丁目の松屋の裏、銀座日本料理会館B1F。銀座一丁目駅から徒歩3分',
    gf_detail: '実際上グルテンフリーではありません。ふぐ、鮑、和牛と一緒に天ぷら(秋茄子、秋刀魚の大葉巻き、とうもろこし)が出るコースで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。ふぐ、魚の天ぷら、はんぺん、鮑、和牛のステーキ。',
    notes: '[鉄板焼き・松屋裏のふぐと天ぷらと和牛] 銀座松屋の裏のビル地下、個室もある14席の鉄板焼きで、2025年10月の口コミによれば夫婦で営む店(名前は書かれていません)。和の季節料理と鉄板を合わせたコースで、ふぐに始まり、秋茄子、大葉で巻いた秋刀魚、とうもろこしの天ぷら、日本橋の Kamimo(英文の口コミの表記)のはんぺん、活け鮑、黒毛和牛のフィレとサーロイン。お吸い物、厚岸やボウモア、アードベッグなどのウイスキー、シャブリも。ふぐの特別料理もあり、牛肉の弁当を土産にもらったという声も。予算は2〜4万円ほどで、接待向き。',
  });
}

// ================================================================ 銀座和縁
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13149668/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:30', '14:00'], ['17:30', '23:00']);
  put({
    id: 'tokyo_ginza_waen_teppan', name: '銀座和縁 (Ginza Waen)', category: 'OMNI',
    lat: 35.669661, lng: 139.760925,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan courses of crab, live abalone, vegetables and beef (served with toast); no source describes sauces or wheat handling. Staff asked a diner about dislikes and adjusted the course.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: crab, abalone and beef teppan courses.',
    hours_raw: 'Daily 11:30–14:00 and 17:30–23:00 (L.O. 22:00); closed irregularly (Tabelog). 10% service charge. Cards accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, New Ginza Bldg No. 8 3F — 5 min from Ginza or Shimbashi Stn',
    cuisine: 'Teppanyaki since 2012 · crab and live abalone from the tank · friendly master-and-hostess counter', cuisine_type: 'other',
    website: null, gmaps: gm('銀座和縁 銀座7-5-12 ニューギンザビル8号館'), menu_url: null,
    notes: "[Teppanyaki · crab on the griddle] A 15-seat teppanyaki on a Ginza 7-chōme third floor, open since August 2012, with a nine-seat counter and private rooms for up to 20. Crab is unusual on a teppan, and it draws diners here, along with abalone taken live from the tank and grilled. Beef is served on toast you can eat with it or have grilled afterwards, and the vegetables are colourful. A May 2026 group enjoyed chatting with the master and the owner, and others mention a hostess and a very entertaining owner. The staff asked one diner about dislikes and adjusted the lunch course on the spot. All-you-can-drink plans are available. Expect ¥20,000–30,000 a head at dinner, with a 10% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 August 2012 (Tabelog)', background: '2026 reviewers mention a master and an owner/hostess; no source names them.', philosophy: null, specialty: 'Teppan crab; live abalone; beef on toast.',
      anecdotes: [
        { text: '"They asked about any ingredients I disliked and made adjustments on the spot." — October 2025.', source: R + 'B515731222/' },
        { text: '"The abalone was freshly grilled right after being taken from the tank." — May 2026.', source: R + 'B528855084/' },
      ],
      japanese_sources_summary: '食べログ: 銀座和縁、銀座7-5-12 ニューギンザビル8号館3F、銀座駅・新橋駅から徒歩5分、15席(カウンター9・個室)、毎日11:30〜14:00・17:30〜23:00、不定休、2012年8月2日開店、サービス料10%、カード可。口コミ(2025〜2026年): 鉄板焼きでは珍しい蟹、水槽から出して焼く活け鮑、トーストにのせた肉、彩りのよい野菜、苦手な食材に合わせて調整、マスターとオーナー(女将)、飲み放題、2〜3万円。',
      confidence: 'low', sources: [TB, R + 'B515731222/', R + 'B528855084/', R + 'B526401460/', R + 'B534926610/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chatty, homely counter; private rooms for groups. 10% service charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Asked about disliked ingredients and adjusted the course on the spot.', source: R + 'B515731222/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-5-12 ニューギンザビル8号館 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目5番12号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515731222/', R + 'B528855084/'],
    price_note: 'No prices captured; reviewers spend ¥20,000–30,000.', last_checked: TODAY, items: [
      it('鉄板焼きコース', 'teppanyaki koosu', 'Teppan course: crab, live abalone, vegetables, beef', '', 'Courses', 'ask', 'no', '', 'teppan_course'),
    ] }, {
    cuisine: '2012年からの鉄板焼き・水槽の活け鮑と蟹・マスターと女将の気さくなカウンター',
    neighborhood: '銀座七丁目、ニューギンザビル8号館3F。銀座駅・新橋駅から徒歩5分',
    gf_detail: '要確認。蟹、活け鮑、野菜、牛肉(トーストと一緒に)の鉄板コース。ソースや小麦の扱いは書かれていません。苦手な食材を聞いてコースを調整してくれたとの口コミも。',
    vegan_detail: 'ヴィーガンではありません。蟹、鮑、牛肉の鉄板コース。',
    notes: '[鉄板焼き・鉄板で焼く蟹] 銀座七丁目のビル3階、2012年8月開店の15席の鉄板焼きで、カウンター9席と最大20名の個室。鉄板焼きでは珍しい蟹と、水槽から出して焼く活け鮑が目当て。肉はトーストと一緒に食べても、後で焼いてもらっても。野菜は彩り豊か。2026年5月にはマスターとオーナーとの会話を楽しんだグループもいて、女将や楽しいオーナーの話も口コミに。苦手な食材を聞いてランチのコースをその場で調整してくれたとの声も。飲み放題プランあり。夜は2〜3万円ほど、サービス料10%。',
  });
}

// ================================================================ 薪焼 銀座おのでら
{
  const HP = 'https://onodera-group.com/makiyaki/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13235042/'; const R = TB + 'dtlrvwlst/';
  const a = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_makiyaki_ginza_onodera', name: '薪焼 銀座おのでら (Makiyaki Ginza Onodera)', category: 'OMNI',
    lat: 35.668584, lng: 139.766914,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wood-fired French with Japanese elements, light on butter; courses include bread and Basque cheesecake. No source describes a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wood-fired fish and Wagyu courses with dairy desserts.',
    hours_raw: 'Daily 12:00–15:00 and 18:00–22:00 (Tabelog). 10% service charge. Smart-casual dress. Cards incl. UnionPay, PayPay and d Barai accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Sunlit Ginza III 9F — 1 min from Higashi-Ginza Stn exit 4',
    cuisine: 'Wood-fire French of the ONODERA group (opened 2019) · counter facing the fire · lunch courses from about ¥16,500', cuisine_type: 'french',
    website: HP, gmaps: gm('薪焼 銀座おのでら 銀座5-14-14 サンリット銀座'), menu_url: null,
    notes: "[French · cooking over firewood] A ninth-floor wood-fire French restaurant by Higashi-Ginza Station, part of the ONODERA group and opened in July 2019. It has an eight-seat counter facing the fire, tables and private rooms. Diners describe crackling flames and the scent of firewood in every dish: fish, vegetables and Wagyu cooked over wood, bread good enough for seconds, and Japanese touches with little butter or fat. Desserts include a Basque cheesecake. A mid-range lunch course was ¥16,500 in September 2026. One October 2026 diner mentions a Michelin star. A 10% service charge applies, and the dress code is smart casual.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 July 2019, ONODERA group (Tabelog; group site)', background: 'Tabelog describes "talented young chefs"; no chef is named in a source read.', philosophy: null, specialty: 'Wood-fired Wagyu and fish.',
      anecdotes: [
        { text: '"We had the mid-range lunch course priced at JPY 16,500… Watching the fire while enjoying the delicious dishes infused with the rich aroma of firewood made for a joyful and happy experience." — September 2026.', source: R + 'B535324694/' },
        { text: '"They use very little butter or fat, which diminishes the French feel." — October 2026.', source: R + 'B536870712/' },
      ],
      japanese_sources_summary: '食べログ: 薪焼 銀座おのでら、銀座5-14-14 サンリット銀座Ⅲ 9F、東銀座駅4番出口から徒歩1分、14席(カウンター8・テーブル・個室4名と6名)、毎日12:00〜15:00・18:00〜22:00、2019年7月22日開店、サービス料10%、スマートカジュアル、カード・PayPay・d払い可、ONODERAグループ(onodera-group.com/makiyaki)。2026年の口コミ: 薪の香りと炎、薪で焼く魚・野菜・和牛、パン、和の要素でバターや油が少なめ、バスクチーズケーキ、ランチの中間コース16,500円、ミシュランの星との言及。',
      confidence: 'low', sources: [TB, HP, R + 'B535324694/', R + 'B535546110/', R + 'B536870712/', R + 'B537046784/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats watch the fire; smart-casual dress; 10% service charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-14-14 サンリット銀座Ⅲ 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目14番14号 (go) 7m; OSM node 5158135122 (sushi ginza onodera, same building) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535324694/'],
    price_note: 'Lunch course price from a September 2026 review; 10% service charge.', last_checked: TODAY, items: [
      it('ランチコース', 'ranchi koosu', 'Wood-fire lunch course (mid-range)', '¥16,500', 'Lunch', 'ask', 'no', '2026.', 'lunch_course'),
      it('ディナーコース', 'dinaa koosu', 'Wood-fire dinner course', '', 'Dinner', 'ask', 'no', '', 'dinner_course'),
    ] }, {
    cuisine: 'ONODERAグループの薪焼きフレンチ(2019年開店)・炎に向かうカウンター・ランチコースは16,500円ほどから',
    neighborhood: '銀座五丁目、サンリット銀座Ⅲ 9F。東銀座駅4番出口から徒歩1分',
    gf_detail: '要確認。和の要素を取り入れバターを控えた薪焼きのフレンチで、パンやバスクチーズケーキも出ます。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。薪で焼く魚と和牛のコースに乳製品のデザート。',
    notes: '[フレンチ・薪の火で焼く] 東銀座駅すぐのビル9階、ONODERAグループの薪焼きフレンチで2019年7月開店。炎に向かうカウンター8席にテーブルと個室。パチパチと鳴る炎と薪の香りが料理の一皿ごとに移り、薪で焼く魚、野菜、和牛、おかわりしたくなるパン、和の要素を取り入れバターや油は控えめ。デザートにはバスクチーズケーキも。2026年9月のランチの中間のコースは16,500円。2026年10月の口コミにはミシュランの星への言及も。サービス料10%、ドレスコードはスマートカジュアル。',
  });
}

// ================================================================ PLEIN 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13290281/'; const R = TB + 'dtlrvwlst/';
  const a = day(['12:00', '14:30'], ['18:00', '22:30']);
  put({
    id: 'tokyo_plein_ginza_honten', name: 'PLEIN 銀座本店 (PLEIN Ginza Honten)', category: 'OMNI',
    lat: 35.670366, lng: 139.760664,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Counter French courses with fritters and confit among the dishes; no source describes a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French omakase courses with meat and fish.',
    hours_raw: 'Tue–Sat and holidays 12:00–14:30 (food L.O. 12:00) and 18:00–22:30 (food L.O. 20:00); closed Sundays and Mondays (Tabelog). Cards and IC accepted.',
    hours: { 1: a, 2: a, 3: a, 4: a, 5: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Ginza Takagi Bldg 9F with a terrace — 5 min from Ginza or Shimbashi Stn',
    cuisine: 'Counter French without formality · chef\'s omakase · main shop of the PLEIN group (opened 2023)', cuisine_type: 'french',
    website: null, gmaps: gm('PLEIN 銀座本店 銀座7-3-6 銀座髙木ビル'), menu_url: null,
    notes: "[French · the PLEIN group's Ginza counter] The main shop of the PLEIN group, opened in December 2023 on the ninth floor of a Ginza 7-chōme building. It has an eleven-seat counter, a private room for two to four, and a terrace with a view over Ginza. The style is 'authentic French cuisine, no formalities', with dishes finished and served across the counter in a chef's omakase. Diners praise the efficient staff and presentation. One four-visit regular noted in September 2026 that the familiar chefs had left, but the cooking held up, and missed the fritters and confit from the course. One newcomer wished the plates were warmed for hot dishes. Expect about ¥6,000–8,000 at lunch and ¥15,000–20,000 at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 December 2023 as the PLEIN group main store (Tabelog)', background: 'Group restaurant; a regular reports a change of chefs in 2026; no chef is named in a source read.', philosophy: '"Authentic French Cuisine, No Formalities" (Tabelog)', specialty: 'Counter-served French omakase.',
      anecdotes: [
        { text: '"I noticed that the staff and chefs I usually interacted with were not there, and when I asked, I found out they had left the restaurant… I was worried that the taste might have changed, but it turned out to be an unnecessary concern." — September 2026.', source: R + 'B511887454/' },
        { text: '"The warm dishes lost their potential because the plates were not heated." — September 2026.', source: R + 'B535168447/' },
      ],
      japanese_sources_summary: '食べログ: PLEIN 銀座本店、銀座7-3-6 銀座髙木ビル9F、銀座駅・新橋駅から徒歩5分、15席(カウンター11・個室2〜4名)、テラス席あり、火〜土・祝12:00〜14:30・18:00〜22:30、日月休、2023年12月2日開店、PLEINグループ本店、カード・IC可。2026年の口コミ: 気取らない本格フレンチ、カウンターで仕上げるおまかせ、手際のよいサービス、9月に馴染みのシェフとスタッフが退店、フリットとコンフィ、皿が温められていないとの指摘、昼6,000〜8,000円・夜1.5〜2万円。',
      confidence: 'low', sources: [TB, R + 'B511887454/', R + 'B535168447/', R + 'B495343749/', R + 'B537899022/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter French with a terrace; staff changed in 2026.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-3-6 銀座髙木ビル 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目3番6号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537899022/'],
    price_note: 'No prices captured; reviewers spend ¥6,000–8,000 at lunch and ¥15,000–20,000 at dinner.', last_checked: TODAY, items: [
      it('シェフのおまかせコース', 'shefu no omakase koosu', "Chef's omakase course", '', 'Courses', 'ask', 'no', '', 'omakase'),
    ] }, {
    cuisine: '気取らないカウンターのフレンチ・シェフのおまかせ・PLEINグループの本店(2023年開店)',
    neighborhood: '銀座七丁目、銀座髙木ビル9F(テラスあり)。銀座駅・新橋駅から徒歩5分',
    gf_detail: '要確認。フリットやコンフィなどを含むカウンターのフレンチのコース。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。肉と魚のフレンチのおまかせです。',
    notes: '[フレンチ・PLEINグループの銀座のカウンター] 2023年12月に銀座七丁目のビル9階に開いたPLEINグループの本店で、カウンター11席、2〜4名の個室、銀座を見渡すテラス。「気取らない本格フレンチ」をうたい、カウンター越しに仕上げて出すシェフのおまかせ。口コミでは手際のよいスタッフと盛り付けが好評。4回通う常連は2026年9月、馴染みのシェフたちが退店していたものの味は変わらなかった、ただコースのフリットとコンフィがなくなって残念と書いています。初訪問の客からは温かい料理の皿を温めてほしいとの声も。予算は昼6,000〜8,000円、夜1.5〜2万円ほど。',
  });
}

save();
