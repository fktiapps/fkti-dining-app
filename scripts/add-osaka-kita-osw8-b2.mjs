// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 2.
//   + 大衆酒場 ちょーちんスピカ 新大阪東口店 Taishu Sakaba Chochin Supika (78-seat izakaya a minute from the Shin-Osaka east exit, since 2017)
//   + Pond Cafe (one-person cafe in the business-hotel streets south-east of Shin-Osaka; breakfast pizza toast, ¥720 lunches)
//   + 味雅軒 Miyabi Ken (Chinese canteen and all-you-can-eat banquets in Nishinakajima since 2013; tatami room upstairs)
//   + ヒラ 西中島店 Hira Nishinakajima ten (Indian curry and naan, about 30 curries, lunch sets with free naan refills)
//   Chain check: Chochin Supika: the official site (chochin-spica.jp, read 2026-11-01) names only this shop. Pond Cafe: one cafe
//   (Tabelog; run by one person per reviews). Miyabi Ken: one restaurant (Tabelog names no sister shop). Hira: the official site
//   (hira-curry.jimdofree.com, "本場インドカリーの店new Hira") names one shop and a web search (2026-11-01) finds no other Hira
//   branch. None is in data/osaka.json (grep by id, name and address, 2026-11-01). Nearest records: Miyabi Ken (西中島5-8-5) is 20 m
//   from osaka_ore_tachi_no_tako_beya_nishinakajima (address_ja 大阪府大阪市淀川区西中島5-8-8 新大阪京和ビル 2F) and Hira (西中島5-8-29)
//   67 m from it; different street numbers, so no shared-building claim is made. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 大衆酒場 ちょーちんスピカ 新大阪東口店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27095851/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://chochin-spica.jp/';
  const A = day(['16:00', '00:00']); const B = day(['16:00', '01:00']);
  put({
    id: 'osaka_chochin_supika_shin_osaka_higashiguchi', name: '大衆酒場 ちょーちんスピカ 新大阪東口店 (Taishu Sakaba Chochin Supika Shin\'osaka higashiguchi ten)', category: 'OMNI',
    lat: 34.733873, lng: 135.502923, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The signatures are gyoza, a 25 cm salmon cutlet and fried dishes, with okonomiyaki, kushiage, Neapolitan spaghetti and ramen in the courses; sashimi and the seafood bowl are the plainer options, but nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an izakaya of seafood, chicken, beef offal and gyoza, with dishes simmered in oden dashi or marinated in ago dashi (official site). Tabelog ticks "vegetarian options" but names none.',
    hours_raw: 'Mon–Thu, Sun and holidays 16:00–24:00 (last order 23:00); Fri, Sat and the day before a holiday 16:00–01:00 (last order 24:00); closing day: none (official site), "not fixed" (Tabelog). Reservations accepted; groups of about ten welcome on the day; whole-shop hire up to 70 (Tabelog; official site). 78 seats with a counter and tables for ten (Tabelog). Non-smoking (Tabelog); a February 2026 diner noted smoking at the seats had ended. Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR payment (Tabelog). Takeaway; children welcome (Tabelog). Opened 7 February 2017 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東中島1-20-9, 2nd floor of 新大阪池永ビル, right in front of the east exit of Shin-Osaka Stn — 1 min on foot (official site; Tabelog says 30 seconds)',
    cuisine: 'Izakaya of seafood and gyoza with sake (official site, prices undated, read November 2026) · the shop\'s three signatures: the Spica special grilled gyoza ¥530, big and served sizzling on an iron plate (also garlic-free ¥580, cheese ¥660, fried ¥630); the "gout bowl" (痛風丼) ¥980, a seafood rice bowl the shop calls a loss leader; a 25 cm salmon "rare katsu" ¥980 for two or three · a tower salad named after the Shin-Osaka station building, with a soft-boiled egg inside and a local-sake sauce ¥980 · sashimi: salmon, toro-taku, tuna, thin-sliced octopus ¥780 each; a four-kind chicken sashimi plate ¥1,480 · doteyaki "bistro Spica style" ¥580; shime saba with shiso and mustard soy ¥480; beef tripe with kimchi ¥530; rolled omelette on the iron plate ¥540; kara-age marinated in ago dashi, two pieces ¥440; Neapolitan spaghetti Spica style ¥680; homemade pudding ¥440 · over ten sakes chosen by the owner; Spica highball ¥430 (official site) · courses with two hours of drinks, from two people: Tsuruhashi beef-offal hot pot with ramen to finish ¥4,500 / ¥5,000 / ¥6,000; okonomiyaki course ¥4,500 / ¥5,000 / ¥6,000; snack course ¥4,000 (official site, tax included) · reviews: the gout bowl is "about the size of a tea bowl" but heaped with seafood (February 2026); the ¥5,000 course of sashimi, starters, Caesar salad, gyoza, kara-age and fries, rolled omelette, okonomiyaki and fried rice (May 2026); cheese and fried gyoza, beef tripe kimchi, shochu-marinated edamame (July 2026)',
    website: SITE, gmaps: gm('大衆酒場 ちょーちんスピカ 新大阪東口店'), menu_url: SITE + 'menu/',
    notes: "[Izakaya · Shin-Osaka east exit, a big, loud station-front tavern] A 78-seat izakaya on the second floor of a building facing the east exit of Shin-Osaka Station, open since 2017 and built for groups: it takes parties of up to 70 and walk-in groups of ten. The menu is long and jokey: big gyoza that keep sizzling on an iron plate (eat them fast, the shop warns, and one diner found half the skin burnt on, January 2026), a heaped seafood \"gout bowl\", a 25 cm salmon cutlet, a tower salad named after the station building, many dishes \"Spica style\", and over ten sakes picked by the owner. Courses with two hours of drinks run ¥4,000–6,000, with a beef-offal hot pot or okonomiyaki at the centre. Diners like the energetic staff and the late hours (to 1 a.m. on Fridays and Saturdays); some found it noisy and one group of five was squeezed onto a table for four (May 2026). Now non-smoking.",
    chef_bio: { chef_name: null, roles: ['Owner (店主, unnamed), who chooses the sake (official site)', 'Manager (店長, unnamed), who chooses the tuna (official site)', 'Kitchen and floor staff'], origin: null,
      background: 'Per the official site (chochin-spica.jp, read 2026-11-01): a lively station-front izakaya of creative dishes with seasonal ingredients and fresh seafood; "chochin" for the warmth of the red lantern and "Spica" for the brightest star of Virgo in the spring sky, the wish being to shine like the first star of the town; over ten sakes chosen by the owner; banquets up to 70. Per the Tabelog listing: opened 7 February 2017; also listed on Hitosara. Per reviews: energetic, friendly staff (December 2025, October 2026); a free serving of gyoza for following the shop on Instagram (January 2025).',
      philosophy: '"A place where \'fun\' gathers every day" (毎日"楽しい"が集まる店; official site).', specialty: 'Spica special gyoza; gout bowl; salmon rare katsu.',
      anecdotes: [
        { text: '"The gout rice bowl was surprisingly small, making me laugh. It\'s about the size of a tea bowl, but it was topped with plenty of seafood and tasted great." — February 2026.', source: R + 'B522298250/' },
        { text: '"The gyoza was overcooked in the teppan, causing half of the skin to stick and burn." — January 2026.', source: R + 'B520168596/' },
        { text: '"The gyoza here doesn\'t contain chives, so I ordered the cheese gyoza, which was delicious." — July 2026.', source: R + 'B532160579/' },
      ],
      japanese_sources_summary: '公式サイト: 大衆酒場 ちょーちんスピカ 新大阪東口店、新大阪駅東口から徒歩1分、毎日"楽しい"が集まる店、旬の食材や新鮮な海鮮を使ったお酒に合う創作料理、「ちょーちん」は赤ちょうちんのぬくもり、「スピカ」は春の夜空に輝く乙女座の一等星、店主が選んだ10種以上の日本酒、最大70名の宴会、月〜木・日・祝16:00〜24:00 (L.O.23:00)、金・土・祝前日16:00〜25:00 (L.O.24:00)、定休日なし、78席。名物: スピカ特製 焼餃子530円、痛風丼980円 (赤字覚悟の看板メニュー)、長さ25cmのサーモンレアカツ980円、タワーサラダ「新大阪ステーションビルヂング～地酒ソース～」980円。ほかに、とろたく、まぐろ、たこの薄造り、鶏刺 4種盛り、どて焼 ビストロスピカ風、〆さば、牛ハチノスのキムチ和え、出汁巻き、あごだしの唐揚げ、なぽりたん すぴか☆風、自家製ぷりん。コース (120分飲み放題つき、税込): 鶴橋ホルモン鍋コース4,500円・5,000円・6,000円、お好み焼きコース4,500円・5,000円・6,000円、おつまみコース4,000円。食べログ (店舗会員): 居酒屋・海鮮・鍋、東淀川区東中島1-20-9 新大阪池永ビル 2F、予約可、カード・電子マネー・QR 可、78席、禁煙、テイクアウト、子ども可、2017年2月7日オープン。口コミ(2025年1月〜2026年10月): 鉄板のナポリタン、インスタのフォローで餃子のサービス、5,000円のコースは量が多い、餃子の皮が鉄板にくっついて焦げた、痛風丼は茶碗くらいの大きさ、にぎやか、どて焼、〆さば、ニラなしの餃子、チーズ餃子、揚げ餃子、牛ホルモンのキムチ、枝豆、スタッフが元気、料理が早い。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'menu/', SITE + 'course/', R + 'B500098643/', R + 'B519383017/', R + 'B520168596/', R + 'B522298250/', R + 'B524577454/', R + 'B528282543/', R + 'B528640972/', R + 'B532160579/', R + 'B532740867/', R + 'B537751390/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Big, busy izakaya; reservations by phone or online (official site). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島1-20-9 新大阪池永ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島一丁目20番9号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu/', SITE + 'course/'],
    price_note: 'Menu prices from the official site (undated, read 1 November 2026); course prices tax included.', last_checked: TODAY, items: [
      it('スピカ特製 焼餃子', '', 'Spica special grilled gyoza, on an iron plate', '¥530', 'Gyoza', 'no', 'no', 'Official site.', 'spica_gyoza'),
      it('チーズ餃子', '', 'Cheese gyoza', '¥660', 'Gyoza', 'no', 'no', 'Official site; July 2026.', 'cheese_gyoza'),
      it('痛風丼', '', '"Gout bowl": seafood rice bowl', '¥980', 'Rice', 'ask', 'no', 'Official site; February 2026.', 'tsufu_don'),
      it('サーモンレアカツ', '', 'Salmon "rare katsu", 25 cm, for 2–3', '¥980', 'Fried dishes', 'no', 'no', 'Official site.', 'salmon_rare_katsu'),
      it('新大阪ステーションビルヂング～地酒ソース～', '', 'Tower salad with a soft-boiled egg and local-sake sauce', '¥980', 'Salads', 'ask', 'no', 'Official site; March 2026.', 'tower_salad'),
      it('とろたく', '', 'Toro-taku (chopped tuna with pickled radish)', '¥780', 'Sashimi', 'ask', 'no', 'Official site.', 'torotaku'),
      it('鶏刺 4種盛り', '', 'Chicken sashimi, four kinds', '¥1,480', 'Sashimi', 'ask', 'no', 'Official site.', 'torisashi_4'),
      it('どて焼 ビストロスピカ風', '', 'Doteyaki, bistro Spica style', '¥580', 'Simmered dishes', 'ask', 'no', 'Official site; March 2026.', 'doteyaki'),
      it('', '', 'Tsuruhashi beef-offal hot pot course with two hours of drinks', '¥5,000', 'Courses', 'ask', 'no', 'Official site (also ¥4,500 and ¥6,000).', 'horumon_nabe_course'),
    ] }, {
    cuisine: '海鮮と餃子、日本酒の大衆酒場 (公式サイト、値段は日付なし、2026年11月に確認)・店の三大名物: スピカ特製 焼餃子530円、大きく、鉄板でジュージューのまま出てくる (ニンニクなし焼餃子580円、チーズ餃子660円、揚げ餃子630円)。痛風丼980円、店が「赤字覚悟の看板メニュー」と呼ぶ海鮮丼。長さ25cmのサーモンレアカツ980円、2〜3人でシェア・新大阪の駅ビルの名前のタワーサラダ「新大阪ステーションビルヂング～地酒ソース～」980円、中に半熟卵・刺身: サーモン、とろたく、まぐろ、たこの薄造り各780円。鶏刺 4種盛り1,480円・どて焼 ビストロスピカ風580円、〆さばの大葉ガリとからし醤油和え480円、牛ハチノスのキムチ和え530円、鉄板の出汁巻き540円、あごだしに漬けた唐揚げ2個440円、なぽりたん すぴか☆風680円、自家製ぷりん440円・店主が選んだ10種以上の日本酒、スピカハイボール430円 (公式サイト)・120分飲み放題つきのコース、2名から: 鶴橋ホルモン鍋コース、締めはラーメン、4,500円・5,000円・6,000円。お好み焼きコース4,500円・5,000円・6,000円。おつまみコース4,000円 (公式サイト、税込)・口コミ: 痛風丼は茶碗くらいの大きさだが海鮮がたっぷり (2026年2月)。5,000円のコースは刺身、前菜、シーザーサラダ、餃子、唐揚げとポテト、出汁巻き、お好み焼き、チャーハン (2026年5月)。チーズ餃子と揚げ餃子、牛ホルモンのキムチ、芋焼酎に漬けた枝豆 (2026年7月)',
    neighborhood: '東中島1-20-9、新大阪池永ビルの2階。新大阪駅の東口の目の前で、徒歩1分 (公式サイト。食べログでは30秒)',
    gf_detail: '要確認。グルテンの情報なし。名物は餃子、25cmのサーモンのカツ、揚げ物で、コースにはお好み焼き、串揚げ、ナポリタン、ラーメンもある。刺身や海鮮丼はシンプルだが、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。海鮮、鶏、牛ホルモン、餃子の居酒屋で、おでんだしで煮たり、あごだしに漬けたりする料理がある (公式サイト)。食べログの特徴にベジタリアンメニューありとあるが、どの料理かは書かれていない。',
    notes: '[居酒屋・新大阪東口、駅前の大きくにぎやかな酒場] 新大阪駅の東口の向かい、ビルの2階にある78席の居酒屋で、2017年から。大人数向けで、70名までの宴会や、当日の10名ほどのグループも受ける。メニューは多く、ふざけた名前も: 鉄板の上でジュージューと焼け続ける大きな餃子 (早く食べてと店。皮の半分が焦げついたという人も、2026年1月)、海鮮山盛りの「痛風丼」、25cmのサーモンのカツ、駅ビルの名前のタワーサラダ、たくさんの「スピカ風」の料理、そして店主が選んだ10種以上の日本酒。2時間飲み放題つきのコースは4,000〜6,000円で、牛ホルモン鍋かお好み焼きが中心。元気なスタッフと遅い時間までの営業 (金・土は深夜1時まで) が好評。うるさいという声や、4人用のテーブルに5人つめこまれたという声も (2026年5月)。今は禁煙。',
  });
}

// ================================================================ Pond Cafe
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27051331/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '18:00']);
  put({
    id: 'osaka_pond_cafe_shin_osaka', name: 'Pond Cafe', category: 'OMNI',
    lat: 34.732768, lng: 135.503368, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pizza toast and pizza in the morning and at lunch; the lunch plates are taco rice, shrimp pilaf and a spice chicken curry, none described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken curry, taco rice with minced meat, cheese and egg, mozzarella pizza toast; no vegan dish is named.',
    hours_raw: 'Tue–Sun 08:30–18:00; closed Monday; hours and closing days may change (Tabelog). Cash only: no cards, e-money or QR payment (Tabelog; April 2026). Order and pay first at the register; the food is brought or called out when ready (July and November 2025). 19 seats, tables for two and single seats; whole-cafe hire up to 20; non-smoking (Tabelog). A November 2024 diner understood there is no restroom. When busy, a sign goes up at the door (June 2026). The spice chicken curry often sells out and takes time to remake (April 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '東中島1-18-27, ground floor of 新大阪丸ビル新館, on a street of business hotels diagonally across from the Shin-Osaka Youth Hotel; look for the orange sign (July 2025) — about 5 min south of the east exit of Shin-Osaka Stn (September 2026)',
    cuisine: 'Coffee, breakfast and cheap lunches (reviews) · morning: pizza toast set with coffee and potato salad ¥610, white mozzarella on the toast and a cherry in the potato salad (July 2025) · lunch: taco rice ¥720, special taco rice with extra meat, cheese, tomato and boiled egg ¥820, shrimp pilaf ¥720, spice chicken curry ¥720; curry and taco rice come with soup, the pilaf with soup and salad (September 2026) · the curry is thin and soupy, sharp with tomato and cloves (April 2026) · a drink with lunch for ¥80 more (2025–2026) · coffee and café au lait ¥340, herbal tea ¥360 (April 2026) · chewy margherita pizza (May 2025)',
    website: null, gmaps: gm('Pond Cafe 新大阪 東中島'), menu_url: null,
    notes: "[Cafe · Shin-Osaka east side, a one-person cafe among business hotels] A small corner cafe five minutes south of the Shin-Osaka east exit, among business hotels, with planes passing low on the way to Osaka International Airport (July 2025). One person runs it (April 2026), carefully if not chattily (June 2026): you order and pay at the register, then wait for your plate. From 8:30 there is a ¥610 pizza toast set with coffee; at lunch, taco rice, shrimp pilaf or a soupy spice chicken curry for ¥720, with a drink for ¥80 more. Quiet, mostly solo customers working or waiting for a train (2025–2026). Cash only, closed Mondays; one diner understood there is no restroom (November 2024).",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), runs the cafe alone (April 2026 review)'], origin: null,
      background: 'Per reviews: "The staff operates solo, and payment is cash only" (April 2026); "The owner may not be overly friendly, but [does the] job with care … [the shop manages] the flow by putting up a sign when it gets busy" (June 2026); a retro atmosphere (May 2025); payment in advance and self-service (July 2025). The Tabelog listing is not shop-maintained and carries no introduction.',
      philosophy: null, specialty: 'Pizza toast breakfast; ¥720 taco rice and spice chicken curry.',
      anecdotes: [
        { text: '"As I looked up, I could see planes flying close by, passing through Shin-Osaka on their way to Osaka International Airport." — July 2025, a ¥610 pizza toast breakfast.', source: R + 'B511298100/' },
        { text: '"I had tried to order this several times before, but it was always sold out. Finally, I got to try it!" — April 2026, the ¥720 spice chicken curry.', source: R + 'B529556810/' },
        { text: '"I often use this place during training sessions and seminars in Shin-Osaka." — June 2026.', source: R + 'B529948159/' },
      ],
      japanese_sources_summary: '食べログ: Pond Cafe、カフェ、東淀川区東中島1-18-27 新大阪丸ビル新館 1F、火〜日8:30〜18:00、月曜休み (変わることあり)、カード・電子マネー・QR 不可、19席 (2人席と1人席)、貸切20名まで、禁煙。口コミ(2024年11月〜2026年9月): 新大阪駅東口から南へ徒歩5分、ビジネスホテルの通り、Shin-Osaka Youth Hotel のななめ向かい、オレンジの看板、頭の上を飛行機、先に会計、セルフサービス、ピザトーストのセット610円 (コーヒー、ポテトサラダにさくらんぼ)、タコライス720円、スペシャルタコライス820円、エビピラフ720円、チキンカレー720円、ランチの飲み物は80円、コーヒー・カフェオレ340円、ハーブティー360円、マルゲリータ、カレーはよく売り切れ、ひとりで営業、現金のみ、静か、ひとりの客が多い、トイレはないらしい。',
      confidence: 'medium', sources: [TB, R + 'B496667653/', R + 'B507705018/', R + 'B507837864/', R + 'B511062440/', R + 'B511298100/', R + 'B517526660/', R + 'B525339548/', R + 'B529556810/', R + 'B529948159/', R + 'B534784853/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the register first; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島1-18-27 新大阪丸ビル新館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島一丁目18番27号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B511298100/', R + 'B529556810/', R + 'B534784853/'],
    price_note: 'Prices from 2025–2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Pizza toast set with coffee and potato salad (morning)', '¥610', 'Morning', 'ask', 'no', 'July 2025.', 'pizza_toast_set'),
      it('', '', 'Taco rice with soup', '¥720', 'Lunch', 'ask', 'no', 'September 2026.', 'taco_rice'),
      it('', '', 'Special taco rice (extra meat, cheese, tomato, boiled egg)', '¥820', 'Lunch', 'ask', 'no', 'September 2026.', 'special_taco_rice'),
      it('', '', 'Shrimp pilaf with soup and salad', '¥720', 'Lunch', 'ask', 'no', 'September 2026.', 'shrimp_pilaf'),
      it('', '', 'Spice chicken curry with soup', '¥720', 'Lunch', 'ask', 'no', 'April and September 2026.', 'chicken_curry'),
      it('', '', 'Coffee or café au lait', '¥340', 'Drinks', '', '', 'April 2026; ¥80 with lunch.', 'coffee'),
    ] }, {
    cuisine: 'コーヒー、モーニング、安いランチ (口コミ)・朝: ピザトーストにコーヒーとポテトサラダのセット610円、トーストには白いモッツァレラ、ポテトサラダにさくらんぼ (2025年7月)・昼: タコライス720円、肉、チーズ、トマト、ゆで卵の多いスペシャルタコライス820円、エビピラフ720円、スパイスチキンカレー720円。カレーとタコライスにはスープ、ピラフにはスープとサラダ (2026年9月)・カレーはさらっとしたスープのようで、トマトとクローブがきいている (2026年4月)・ランチの飲み物は80円で追加 (2025〜2026年)・コーヒーとカフェオレ340円、ハーブティー360円 (2026年4月)・もちもちのマルゲリータ (2025年5月)',
    neighborhood: '東中島1-18-27、新大阪丸ビル新館の1階。ビジネスホテルの並ぶ通りで、Shin-Osaka Youth Hotel のななめ向かい。オレンジの看板が目印 (2025年7月)。新大阪駅の東口から南へ約5分 (2026年9月)',
    gf_detail: '要確認。グルテンの情報なし。朝も昼もピザトーストやピザがあり、ランチのタコライス、エビピラフ、スパイスチキンカレーにもグルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。チキンカレー、ひき肉とチーズと卵のタコライス、モッツァレラのピザトーストで、ヴィーガンの料理はない。',
    notes: '[カフェ・新大阪の東側、ビジネスホテル街のひとりのカフェ] 新大阪駅の東口から南へ5分、ビジネスホテルの並ぶ通りの角にある小さなカフェで、頭の上を Osaka International Airport へ向かう飛行機が低く飛んでいく (2025年7月)。ひとりで切り盛りしていて (2026年4月)、愛想はほどほどだが、ていねいな仕事 (2026年6月)。レジで注文して先に払い、料理を待つ。8:30からは610円のピザトーストとコーヒーのセット。昼はタコライス、エビピラフ、スープのようなスパイスチキンカレーが720円で、飲み物は80円で追加。静かで、仕事をする人や新幹線を待つ人など、ひとりの客が多い (2025〜2026年)。現金のみ、月曜休み。トイレはないらしいという口コミも (2024年11月)。',
  });
}

// ================================================================ 味雅軒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27074061/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_miyabi_ken_nishinakajima', name: '味雅軒 (Miyabi Ken)', category: 'OMNI',
    lat: 34.728704, lng: 135.500276, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. A Chinese menu of gyoza, kara-age, sweet and sour pork, ramen and sauced stir-fries; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Chinese menu built on pork, chicken and shrimp. Tabelog ticks "vegetarian options" but names none.',
    hours_raw: 'Mon–Sat 11:00–14:00 and 17:30–23:00; closed Sundays and holidays (Tabelog). Lunch fills with office workers from about 11:40 (October 2026); Friday nights can be fully booked (July 2026). Reservations accepted (Tabelog). Cards (VISA, Master, JCB), PayPay and d Barai; no e-money (Tabelog). 90 seats, counter and tables; private rooms for 10–30, a tatami room upstairs for up to 25; whole hire for 20–50; non-smoking (Tabelog). Opened 8 July 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-8-5, a narrow street on the north side of Nishinakajima-Minamigata (October 2026; January 2020 review) — 5 min from Nishinakajima-Minamigata Stn, 6 min from Shin-Osaka Stn or Hankyu Minamikata (Tabelog)',
    cuisine: 'Chinese cooking by a chef who was a head chef in China (Tabelog) · the shop\'s picks: mapo tofu, black vinegar pork and black vinegar shrimp (Tabelog) · lunch: daily "service lunch" sets; A was a kara-age set with curry salt (December 2025); shrimp chili set ¥950 (April 2026); C lunch of mapo ramen with half a fried rice ¥830 (October 2026) · mapo tofu built on doubanjiang and tianmianjiang with chili and Sichuan pepper (June 2026) · black vinegar pork, crisp and glossy (May 2026); shrimp chili, chive and egg stir-fry, a cheap light-drinking set (May 2026); spicy stir-fried chicken (April 2026); thick fried chicken wings and fluffy fried rice (June 2026) · all-you-can-eat-and-drink banquets ¥4,000 tax included (Tabelog), ¥3,850 in reviews (December 2025 to July 2026): five dishes first (kara-age, sweet and sour pork, gyoza, mapo tofu, shrimp chili), then order freely; almond jelly or sesame balls for dessert (December 2025)',
    website: null, gmaps: gm('味雅軒 西中島'), menu_url: null,
    notes: "[Chinese · Nishinakajima, a busy Chinese canteen with a banquet floor] A 90-seat Chinese restaurant on a narrow street north of Nishinakajima-Minamigata, open since 2013, with Chinese and Taiwanese staff who speak Japanese (February 2026) and a Myanmar staff member one diner singled out for warm service (July 2026). At lunch it is packed with office workers from before noon for cheap sets: a kara-age set with curry salt, a mapo ramen with half a fried rice for ¥830 (October 2026). The mapo tofu is the dish reviewers single out, numbing with Sichuan pepper (June 2026), with black vinegar pork as the house signature. In the evening the upstairs floor hosts company parties on a two-hour all-you-can-eat-and-drink plan (about ¥3,850–4,000) that opens with five dishes and then lets you order freely. Service can slip when the room is full on a Friday (July 2026).",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), formerly a head chef in China (Tabelog)', 'Floor staff from China, Taiwan and Myanmar (2026 reviews)'], origin: 'China (the chef, per Tabelog)',
      background: 'Per the shop-maintained Tabelog listing: authentic Chinese cuisine prepared by a chef who has worked as a head chef in China, from mapo tofu to black vinegar pork and a black vinegar shrimp popular with women; a second-floor tatami room for up to 25; opened 8 July 2013. Per reviews: "The staff were all Chinese or Taiwanese, but [all] spoke Japanese" (February 2026); "one of the Myanmar female staff members was exceptionally friendly and attentive" (July 2026); "I could hear Chinese being spoken from the kitchen" (October 2026); a long-time favourite of salarymen, with the upstairs room often used for company gatherings (January 2020 review, June 2026 update).',
      philosophy: null, specialty: 'Mapo tofu; black vinegar pork; all-you-can-eat banquets.',
      anecdotes: [
        { text: '"The staff kindly informed us that since it was a quiet day, we could order whatever we liked." — April 2026, the all-you-can-eat course.', source: R + 'B526893178/' },
        { text: '"The meat, coated in a deep, glossy sauce, was crispy on the outside, and when bitten into, it released the mellow acidity and richness of the black vinegar." — May 2026.', source: R + 'B528617427/' },
        { text: '"At 11:40 AM, the restaurant was already bustling with customers." — October 2026, the ¥830 mapo ramen lunch.', source: R + 'B537556481/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 味雅軒、中華料理・バイキング・居酒屋、大阪市淀川区西中島5-8-5、西中島南方駅から徒歩5分、新大阪駅と Hankyu Minamikata 駅から6分、月〜土11:00〜14:00、17:30〜23:00、日・祝休み、予約可、カード・PayPay・d払い可、電子マネー不可、90席、個室10〜30名、2階に25名までの座敷、貸切20〜50名、禁煙、2013年7月8日オープン。店の紹介: 中国で料理長をしていたシェフの本格中華、麻婆豆腐、黒酢の酢豚、女性に人気の黒酢エビ、食べ飲み放題4,000円 (税込)。口コミ(2025年5月〜2026年10月): 麻婆豆腐 (豆板醤と甜麺醤、花椒)、A と B の組み合わせ、gyoza は少し小さくなった、日替わりのサービスランチ、kara-age 定食にカレー塩、エビチリ定食950円、麻婆ラーメンと半チャーハンのランチ830円、食べ飲み放題3,850円 (最初に kara-age、酢豚、gyoza、麻婆豆腐、エビチリの5品、そのあと注文、デザートは杏仁豆腐かごま団子)、スタッフは中国や台湾の出身で日本語を話す、Myanmar 出身のスタッフも、2階の席、金曜は満席で遅れや注文もれ、黒酢の酢豚、ニラと卵の炒め物、鶏の辛い炒め物、手羽先、チャーハン。',
      confidence: 'medium', sources: [TB, R + 'B426556883/', R + 'B518768715/', R + 'B519861434/', R + 'B522513924/', R + 'B526517718/', R + 'B526893178/', R + 'B528617427/', R + 'B532373144/', R + 'B535554024/', R + 'B537556481/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chinese and Taiwanese staff who speak Japanese (February 2026); a Myanmar staff member (July 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-8-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目8番5号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B526517718/', R + 'B537556481/', R + 'B532373144/'],
    price_note: 'Banquet price from the Tabelog listing (tax included) and 2025–2026 reviews; lunch prices from 2026 reviews.', last_checked: TODAY, items: [
      it('ランチ麻婆ラーメン定食', '', 'Lunch: mapo ramen with half a fried rice', '¥830', 'Lunch', 'no', 'no', 'October 2026 (menu photo caption).', 'mapo_ramen_set'),
      it('', '', 'Lunch: shrimp chili set', '¥950', 'Lunch', 'ask', 'no', 'April 2026.', 'ebichili_set'),
      it('', '', 'Mapo tofu', '', 'Dishes', 'ask', 'no', 'Tabelog; June 2026.', 'mapo_tofu'),
      it('', '', 'Black vinegar pork', '', 'Dishes', 'ask', 'no', 'Tabelog; May 2026.', 'kurozu_subuta'),
      it('', '', 'Two-hour all-you-can-eat-and-drink banquet', '¥3,850', 'Courses', 'ask', 'no', 'December 2025 to July 2026; Tabelog lists ¥4,000.', 'tabehodai'),
    ] }, {
    cuisine: '中国で料理長をしていたシェフの中華 (食べログ)・店のおすすめ: 麻婆豆腐、黒酢の酢豚、黒酢エビ (食べログ)・昼: 日替わりのサービスランチ。A は kara-age 定食にカレー塩 (2025年12月)。エビチリ定食950円 (2026年4月)。C ランチは麻婆ラーメンと半チャーハンで830円 (2026年10月)・麻婆豆腐は豆板醤と甜麺醤に、唐辛子と花椒 (2026年6月)・黒酢の酢豚は外はカリッとつやつや (2026年5月)。エビチリ、ニラと卵の炒め物、安いちょい飲みセット (2026年5月)。鶏の辛い炒め物 (2026年4月)。肉厚の手羽先の揚げ物とふんわりしたチャーハン (2026年6月)・2時間の食べ飲み放題は4,000円、税込 (食べログ)、口コミでは3,850円 (2025年12月〜2026年7月): 最初に kara-age、酢豚、gyoza、麻婆豆腐、エビチリの5品、そのあと自由に注文。デザートは杏仁豆腐かごま団子 (2025年12月)',
    neighborhood: '西中島5-8-5、西中島南方の北側の細い道 (2026年10月、2020年1月の口コミ)。西中島南方駅から徒歩5分、新大阪駅と Hankyu Minamikata 駅から6分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。gyoza、kara-age、酢豚、ラーメン、たれをからめた炒め物などの中華で、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。豚肉、鶏肉、エビの中華。食べログの特徴にベジタリアンメニューありとあるが、どの料理かは書かれていない。',
    notes: '[中華・西中島、宴会の階がある町の中華] 西中島南方の北の細い道にある90席の中華料理店で、2013年から。スタッフは中国や台湾の出身で日本語を話し (2026年2月)、Myanmar 出身のスタッフの接客をほめる声も (2026年7月)。昼は正午前から会社員でいっぱいになり、安い定食を食べる: カレー塩で食べる kara-age 定食、麻婆ラーメンと半チャーハンで830円 (2026年10月)。口コミでよく名前が挙がるのは花椒のきいた麻婆豆腐 (2026年6月) で、店の看板は黒酢の酢豚。夜は2階で会社の宴会が開かれ、2時間の食べ飲み放題 (約3,850〜4,000円) は最初に5品が出て、そのあとは自由に注文できる。金曜の満席の夜はサービスが追いつかないことも (2026年7月)。',
  });
}

// ================================================================ ヒラ 西中島店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27001393/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hira-curry.jimdofree.com/';
  const H = day(['11:00', '15:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_hira_nishinakajima', name: 'ヒラ 西中島店 (Hira Nishinakajima ten)', category: 'OMNI',
    lat: 34.728752, lng: 135.500782, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask, and ask carefully. The shop\'s site says "the flour we use is gluten-free" (当店で使用している小麦粉はグルテンフリーです), but 小麦粉 means wheat flour, which contains gluten, and the meals are built around naan, so the statement cannot be taken at face value. Rice is offered with every set.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options", and a spinach curry appeared as the daily curry (September 2026), but no dish is described as vegan and some curries come swirled with fresh cream (July 2026).',
    hours_raw: 'Daily 11:00–15:00 and 17:00–22:30 (Tabelog). Lunch is full of office workers; full at 12:15 on a weekday (September 2026); the first hour after opening is quiet, and entry after 13:30 took ¥100 off a lunch (September 2025). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC cards and PayPay (Tabelog). 34 seats with sofas; whole-shop hire for 20–50; non-smoking with a smoking area outside; free Wi-Fi (Tabelog). English menu and English-speaking staff; photo menu; kids\' menu; takeaway (Tabelog); leftovers can be taken home (November 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-8-29, ground floor of チサンマンション第３新大阪, set back from the main street behind a blue-framed entrance (Tabelog; 2021 and 2026 reviews) — 5 min from Nishinakajima-Minamigata Stn or Hankyu Minamikata, 8 min from Shin-Osaka Stn (Tabelog)',
    cuisine: 'Indian curry and naan, about 30 curries with five spice levels from mild to extra hot, tandoori dishes, Indian snacks, Indian whiskey, chai and lassi (Tabelog) · lunch sets with naan refills: from ¥850 (September 2025); B lunch of two curries with seekh kebab, rice, salad, soup and lassi or chai (March 2026); C lunch ¥1,000 with tandoori chicken and two curries, spinach and keema on the day (September 2026); cheese naan set ¥1,000 (February 2026); a ladies\' set with cheese naan and a choice of three curries (November 2025) · all-you-can-eat lunch of soup, salad, tandoori chicken, chicken curry, the daily curry, naan and rice, with chai or lassi: ¥1,300 (2024), ¥1,480 tax included (September 2025) · a carrot salad dressing diners refill (2025–2026) · evening set ¥900 with naan, curry, salad, soup, rice, tandoori chicken and lassi (July 2025) · prawn curry and garlic naan (March 2026) · two-hour all-you-can-eat-and-drink courses for 4–34 people, ¥3,300 for men and ¥3,000 for women (Tabelog, tax included)',
    website: SITE, gmaps: gm('ヒラ 西中島店'), menu_url: null,
    notes: "[Indian curry · Nishinakajima, an office-district naan house] A 34-seat Indian restaurant behind a blue-framed doorway near Nishinakajima-Minamigata, the most popular of the area's Indian places by one diner's count (March 2026), and packed with office workers at lunch. The sets are the draw: two curries from about 30, a spice level from mild to extra hot, a naan that hangs off the silver plate with refills included, plus salad with a carrot dressing, soup, rice and tandoori chicken or seekh kebab, from ¥850 (2025) to about ¥1,000 (2026). There is an all-you-can-eat lunch too, and at night a ¥900 set and ¥3,000–3,300 banquets with drinks. Come at opening or after 13:30 to avoid the crowd. English menu and English-speaking staff.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: authentic Indian curry, around 30 kinds with five spice levels, tandoori and Indian snacks, Indian whiskey, in "an atmosphere reminiscent of India and Nepal"; affordable sets at lunch, sets and banquets at night. The official site (hira-curry.jimdofree.com, read 2026-11-01) calls the shop 本場インドカリーの店new Hira and offers lunch, small banquets and "healthy Indian food" for a women\'s night out. Per reviews: one diner has come "about 20 to 30 times" (January 2026); staff "very kind" (July 2025).',
      philosophy: null, specialty: 'Curry sets with naan refills; all-you-can-eat lunch.',
      anecdotes: [
        { text: '"The freshly baked naan is enormous, almost too big for the silver plate." — July 2026.', source: R + 'B435878380/' },
        { text: '"The salad dressing is incredibly tasty, and I usually end up refilling my salad about three times." — January 2026, the all-you-can-eat lunch.', source: R + 'B478532155/' },
        { text: '"At 12:15, the place was fully booked. It was packed with nearby office workers." — September 2026.', source: R + 'B536170447/' },
      ],
      japanese_sources_summary: '公式サイト: 本場インドカリーの店new Hira、NewHira!へようこそ、当店で使用している小麦粉はグルテンフリーです、ランチやってます、小宴会にどうぞ、ヘルシーなインド料理で女子会、お酒も各種あります。食べログ (店舗会員): ヒラ 西中島店、インド料理・インドカレー・ダイニングバー、大阪市淀川区西中島5-8-29 チサンマンション第３新大阪 1F、西中島南方駅と Hankyu Minamikata 駅から徒歩5分、新大阪駅から8分、毎日11:00〜15:00、17:00〜22:30、予約可、カード・交通系 IC・PayPay 可、34席、貸切20〜50名、禁煙 (外に喫煙所)、Wi-Fi、英語メニュー、英語を話すスタッフ、お子様メニュー、テイクアウト。店の紹介: 約30種のカレー、辛さは5段階、タンドール料理、インドのウイスキー、チャイとラッシー、インドとネパールの雰囲気、2時間の食べ飲み放題 男性3,300円・女性3,000円。口コミ(2024年1月〜2026年9月): 青い枠の入口、大きなナン、ナンはおかわり自由、カレー2種のセット、シークカバブ、タンドリーチキン、にんじんのドレッシング、食べ放題ランチ1,300円 (2024年)・1,480円 (2025年)、ランチ850円から、13:30以降は100円引き、夜のセット900円、チーズナンのセット、エビのカレー、ガーリックナン、昼は会社員で満席。',
      confidence: 'medium', sources: [TB, SITE, R + 'B435878380/', R + 'B478532155/', R + 'B490497234/', R + 'B510833983/', R + 'B513303788/', R + 'B517567820/', R + 'B522277775/', R + 'B524583773/', R + 'B525010195/', R + 'B536170447/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff; photo menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-8-29 チサンマンション第３新大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目8番29号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B513303788/', R + 'B536170447/', R + 'B510833983/'],
    price_note: 'Lunch and evening prices from 2025–2026 reviews; banquet prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'C lunch: two curries, tandoori chicken, salad, soup, naan refills, lassi', '¥1,000', 'Lunch', 'ask', 'no', 'September 2026.', 'c_lunch'),
      it('', '', 'Cheese naan set with tandoori chicken, salad, soup and a drink', '¥1,000', 'Lunch', 'no', 'no', 'February 2026.', 'cheese_naan_set'),
      it('', '', 'All-you-can-eat lunch with chai or lassi', '¥1,480', 'Lunch', 'ask', 'no', 'September 2025 (¥1,300 in 2024).', 'tabehodai_lunch'),
      it('', '', 'Evening set: naan, curry, salad, soup, rice, tandoori chicken, lassi', '¥900', 'Dinner', 'ask', 'no', 'July 2025.', 'evening_set'),
      it('', '', 'Two-hour all-you-can-eat-and-drink course (men / women)', '¥3,300 / ¥3,000', 'Courses', 'ask', 'ask', 'Tabelog.', 'tabenomi_course'),
    ] }, {
    cuisine: 'インドのカレーとナン。カレーは約30種で、辛さは甘口から激辛まで5段階、タンドール料理、インドのつまみ、インドのウイスキー、チャイ、ラッシー (食べログ)・ナンのおかわりつきのランチセット: 850円から (2025年9月)。B ランチはカレー2種にシークカバブ、ライス、サラダ、スープ、ラッシーかチャイ (2026年3月)。C ランチ1,000円はタンドリーチキンとカレー2種、この日はほうれん草とキーマ (2026年9月)。チーズナンのセット1,000円 (2026年2月)。チーズナンと3種から選ぶカレーのレディースセット (2025年11月)・スープ、サラダ、タンドリーチキン、チキンカレー、日替わりカレー、ナン、ライスの食べ放題ランチにチャイかラッシー: 1,300円 (2024年)、1,480円、税込 (2025年9月)・おかわりしたくなるにんじんのドレッシング (2025〜2026年)・夜のセット900円、ナン、カレー、サラダ、スープ、ライス、タンドリーチキン、ラッシー (2025年7月)・エビのカレーとガーリックナン (2026年3月)・2時間の食べ飲み放題のコース、4〜34名、男性3,300円、女性3,000円 (食べログ、税込)',
    neighborhood: '西中島5-8-29、チサンマンション第３新大阪の1階。大通りから少し奥の、青い枠の入口 (食べログ、2021年と2026年の口コミ)。西中島南方駅と Hankyu Minamikata 駅から徒歩5分、新大阪駅から8分 (食べログ)',
    gf_detail: '要確認、とくに注意を。店のサイトに「当店で使用している小麦粉はグルテンフリーです」とあるが、小麦粉にはグルテンが含まれ、食事はナンが中心なので、そのままは信じられない。どのセットにもライスがある。',
    vegan_detail: '要確認。食べログの特徴にベジタリアンメニューありとあり、日替わりカレーがほうれん草の日もあった (2026年9月) が、ヴィーガンと書かれた料理はなく、生クリームをかけたカレーもある (2026年7月)。',
    notes: '[インドカレー・西中島、オフィス街のナンの店] 西中島南方の近く、ビルの1階の青い枠の入口の奥にある34席のインド料理店。このあたりのインド料理店でいちばん人気だという声もあり (2026年3月)、昼は会社員でいっぱい。お目当てはセットで、約30種からカレー2種、辛さは甘口から激辛まで、銀の皿からはみ出す大きなナンはおかわり自由、にんじんのドレッシングのサラダ、スープ、ライス、タンドリーチキンかシークカバブがついて、850円 (2025年) から約1,000円 (2026年)。食べ放題のランチもあり、夜は900円のセットや、飲み放題つきの3,000〜3,300円の宴会。混雑を避けるなら開店すぐか13:30以降に。英語メニューと英語を話すスタッフあり。',
  });
}

save();
