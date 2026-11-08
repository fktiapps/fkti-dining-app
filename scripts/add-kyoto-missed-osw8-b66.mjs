// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 66.
//   + Raclette loom (raclette bistro in a century-old machiya, Teramachi-Matsubara; rest)
//   + ライトショウカイ Light Shokai (antique-filled kissa and evening bar, alley off Teramachi-Sanjo; rest)
//   + 日本酒とおばんざいの京酒場 けんすい錦 錦小路店 Kensui Nishiki (sake and obanzai izakaya, Nishiki-Takakura 2F; rest)
//   + 祇園 かわもと Gion Kawamoto (Japanese cuisine, saba sushi and fugu, Gion Kiyomoto-cho; rest)
//   Rest list (mod 6 = 1) after batch 65, nearest-first; these four are the next four in order, so no skips this batch.
//   (小川珈琲 堺町錦店 26037151 also shows in the list but was skipped as a chain in osw8-51 under its URL key.)
//   Freshness bar (coordinator, osw8-65): every pick has 2025–26 reviews.
//   Brand check: queue-status.jsonl grepped for Raclette / loom, ライトショウカイ, けんすい, かわもと — no earlier skip or done entries.
//   Same-name check: one shop each in our crawls. けんすい's site (sakakuraya.owst.jp, read 2026-11-07) lists one related shop, a
//   karaoke party space (KARAOKO); the crawl has one more 日本酒とおばんざいの京酒場 shop (みとき, 26004953) — a small group, drafted.
//   None is in data/kyoto.json (main e421de94) by name or address (植松町703-3; 寺町三条下ル一筋目東入ル; 中魚屋町499 2F; 清本町373).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-66');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Raclette loom
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038801/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://raclette-loom.com/';
  const H = day(['14:00', '23:00']);
  put({
    id: 'kyoto_raclette_loom', name: 'Raclette loom', category: 'OMNI',
    lat: 34.99881113707038, lng: 135.76700157913308, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A rice-flour raclette taiyaki is described as gluten-free (July–September 2026 reviews), but pizza, pasta and gratin come from the same kitchen; no information on shared fryers or surfaces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: raclette cheese poured over most dishes, steak and sausage (official site; 2025–2026 reviews).',
    hours_raw: 'Monday–Wednesday and Friday–Sunday 14:00–23:00 (last order 22:00); closed Thursday, though it may open on a Thursday that is or precedes a public holiday (Tabelog; official site). Raclette taiyaki served 14:00–17:00 only, 20 a day, with a one-drink minimum (July 2026 reviews). Reservations accepted; courses ¥5,500–7,000, a 2-hour all-you-can-drink banquet course ¥5,800 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog; official site). 28 seats at counter and tables; non-smoking, with a smoking area (Tabelog). English menu; children and strollers welcome (Tabelog). The toilet is reached by stepping outside (December 2025). 5 min walk from Keihan Kiyomizu-Gojo Stn, 7 min from Hankyu Kawaramachi (Tabelog). Opened 10 January 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi-Matsubara, between Kawaramachi and Kiyomizu-Gojo',
    cuisine: 'Raclette cheese poured at the table over Italian and French-trained cooking, in a renovated machiya of about 100 years (official site; Tabelog) · raclette over sirloin steak, chicken ham, seasonal hot vegetables, house salsiccia and tomato pizza, gratin; mozzarella and fruit salad, mushrooms with cheese; house chocolate and matcha-cheese tarts (official site; 2025–2026 reviews) · afternoon raclette taiyaki of rice flour and red bean paste, ¥1,280, with ice cream (July–September 2026) · courses ¥5,500–7,000; à la carte about ¥4,000–6,000 (Tabelog; 2025–2026 reviews)',
    website: WEB, gmaps: gm('Raclette loom 京都'), menu_url: WEB,
    notes: '[Raclette bistro · Teramachi-Matsubara, machiya] A wood-warm, century-old townhouse with a small back garden where melted raclette is poured over steak, vegetables and pizza at your table, by a chef trained in Italian and French cooking. Afternoons bring a novel rice-flour taiyaki under raclette. Opens 14:00; closed Thursday. English menu. Chilly in winter, one diner found.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Staff'], origin: null,
      background: 'Per the official site: a café and bar in a renovated Kyoto townhouse of about 100 years, serving raclette dishes by a chef who trained in Italian and French cuisine. Opened 10 January 2023 (Tabelog).',
      philosophy: 'Handmade dishes with raclette poured in front of the guest (official site).', specialty: 'Raclette over steak; raclette taiyaki.',
      anecdotes: [
        { text: 'An August 2025 diner noticed many international guests chatting happily with staff who spoke good English.', source: R + 'B511554613/' },
        { text: 'A December 2025 visitor found the room cold even after asking for more heat, with the toilet reached by stepping outside, but praised the food.', source: R + 'B519457497/' },
        { text: 'A July 2026 reviewer tried the new raclette taiyaki of rice flour, served only from 14:00 to 17:00.', source: R + 'B531792391/' },
      ],
      japanese_sources_summary: '公式サイト: 寺町松原のカフェ&バル、約100年の京町家を改装、カウンターとテーブル席、イタリアンとフレンチで修行したシェフ、目の前でかけるラクレットチーズ、サーロインステーキ、鶏ハム、旬の温野菜、自家製サルシッチャとトマトのピッツァ、手作りのドルチェ (チョコレートタルト、抹茶チーズのタルト)、14:00〜23:00 (L.O.22:00)、木曜休み、カード可、電子マネー・QR 不可。食べログ: バル・イタリアン、下京区植松町703-3、京阪清水五条駅から徒歩5分、木曜休み (祝日・祝前日は営業することあり)、予約可、コース5,500〜7,000円、2時間飲み放題の宴会コース5,800円、28席、禁煙 (喫煙所あり)、英語メニュー、子ども可、2023年1月10日開店。口コミ (2025年3月〜2026年9月、英語): 英語の上手な店員と多くの外国人客、冬は寒くトイレは一度外に出る (2025年12月)、奥の小さな庭、ピザやグラタン、米粉のラクレットたい焼き1,280円 (14〜17時、1日20食、ワンドリンク制、アイス付き)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B503502691/', R + 'B511554613/', R + 'B519457497/', R + 'B520773554/', R + 'B529963847/', R + 'B531699356/', R + 'B531792391/', R + 'B536303575/', R + 'B536804777/'] },
    cultural_comfort: { level: 'english', note: 'English menu; staff spoke English well (August 2025); cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区植松町703-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998811, 135.767002); cross-checked: GSI 京都府京都市下京区植松町703番地 (lot) 45 m; nearest existing record 41.9 m (kyoto_joys_table, 716); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B531792391/'],
    price_note: 'Course prices from Tabelog; taiyaki price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Date and anniversary raclette course (8 dishes)', '¥5,500', 'Courses', 'ask', 'no', 'Tabelog.', 'course_date'),
      it('', '', 'Premium raclette course (8 dishes)', '¥7,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course_premium'),
      it('', '', 'Raclette cheese rice-flour taiyaki', '¥1,280', 'Sweets', 'ask', 'no', 'July 2026; described as gluten-free; 14:00–17:00 only.', 'taiyaki'),
    ] }, {
    cuisine: '約100年の町家を改装した店で、イタリアンとフレンチで修行したシェフの料理に目の前でラクレットチーズをかける (公式サイト、食べログ)・ラクレットをかけたサーロインステーキ、鶏ハム、旬の温野菜、自家製サルシッチャとトマトのピッツァ、グラタン、モッツァレラとフルーツのサラダ、きのこのチーズ焼き、自家製のチョコレートタルトや抹茶チーズのタルト (公式サイト、2025〜2026年の口コミ)・午後は米粉のたい焼きにラクレットをかけたもの1,280円、アイス付き (2026年7〜9月)・コース5,500〜7,000円、アラカルトで4,000〜6,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '寺町松原、河原町と清水五条の間',
    gf_detail: '要確認。米粉のラクレットたい焼きはグルテンフリーとされる (2026年7〜9月の口コミ) が、同じ厨房でピザ、パスタ、グラタンも作る。フライヤーや調理台の共用の情報はない。',
    vegan_detail: 'ヴィーガン不可。ほとんどの料理にラクレットチーズ、ステーキやソーセージ (公式サイト、2025〜2026年の口コミ)。',
    notes: '[ラクレットのビストロ・寺町松原、町家] 奥に小さな庭のある木のぬくもりの百年町家で、イタリアンとフレンチで修行したシェフがステーキや野菜、ピザに目の前でとろけるラクレットをかける。午後は米粉のたい焼きにラクレットをかけた珍しい一品も。14時開店、木曜休み。英語メニューあり。冬は寒かったという声も。',
  });
}

// ================================================================ ライトショウカイ Light Shokai
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000479/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '20:00']);
  put({
    id: 'kyoto_light_shokai', name: 'ライトショウカイ (Light Shokai)', category: 'OMNI',
    lat: 35.008240946012315, lng: 135.7671715965495, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF for meals: thick toast, French toast, egg sandwiches and monaka (2024–2026 reviews). Drinks only.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee, tea, chai and kombu tea are plant-based; the food has butter, egg and milk (2024–2026 reviews).',
    hours_raw: 'Café: Tuesday–Friday 12:00–20:00; Saturday and the day before a public holiday 13:00–20:00; Sunday 10:00–20:00; bar time Saturday, Sunday and the day before a holiday 20:30–23:00 (last order 22:30); the shop\'s note also lists Friday among bar nights; closed Monday; other closing days irregular (Tabelog). No charge at bar time (Tabelog original BAR TIME NO CHARGE). Cash only — no cards, e-money or QR (Tabelog). 22 seats including sofas; non-smoking since about 2025 (Tabelog). An antique shop and café; some pieces are for sale; exhibitions, Noh and film screenings, usually upstairs (Tabelog; 2025–2026 reviews). In a narrow alley just south of Sanjo between Teramachi and Shinkyogoku, opposite MOVIX: turn at the Mishima-tei corner; 4 min walk from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: day(['13:00', '20:00'], ['20:30', '23:00']), 6: day(['10:00', '20:00'], ['20:30', '23:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Teramachi-Sanjo, alley opposite MOVIX',
    cuisine: 'Kissa and evening bar inside an antique shop (Tabelog) · blend coffee ¥600, café au lait ¥700, chai, cocoa, cream soda, tea and green-tea floats, ume kombu tea; hot wine and highballs (2024–2026 reviews) · thick toast with jam, French toast, red bean or cinnamon toast; Sunday morning set of toast, boiled egg and a drink ¥700; omurice and egg sandwiches; cake sets; a lucky-cat monaka (2024–2026 reviews) · under about ¥1,000 (Tabelog)',
    website: null, gmaps: gm('ライトショウカイ 寺町三条'), menu_url: null,
    notes: '[Antique kissa · Teramachi-Sanjo alley, cash only] A long, dim café crammed with antique clocks, lamps, cellos and dolls — some for sale — down an alley a step from Sanjo. Hand-ground coffee, cream soda, thick toast and a lucky-cat monaka; weekend evenings it turns bar, with no charge. Exhibitions upstairs. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: a coffee shop near Teramachi-Sanjo that also sells antique furniture, holding occasional events such as live Noh and film screenings, usually on the second floor. A December 2024 reviewer reports the name refers to the Wright brothers, and that the shop is the model for the antique shop in the mystery novel series Holmes at Sanjo in Kyoto.',
      philosophy: null, specialty: 'Blend coffee; cat monaka.',
      anecdotes: [
        { text: 'An October 2025 visitor was seated beside a doll, with hits by The Peanuts playing, and learned the cat-shaped monaka bears the name Matabei after the shop\'s late mascot cat.', source: R + 'B515944291/' },
        { text: 'A February 2026 guest found the master dressed like a butler, in keeping with the maze-like room of antique clocks.', source: R + 'B531664926/' },
        { text: 'A March 2025 group waited nearly an hour for three drinks — perhaps a forgotten order — but forgave it for the atmosphere and the friendly server.', source: R + 'B503085622/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店・バー・カフェ、中京区寺町三条下ル一筋目東入ル (番地の表示なし)、市役所前駅から徒歩4分、三嶋亭本店の角を曲がってすぐ、カフェ 火〜金 12:00〜20:00、土・祝前日 13:00〜20:00、日 10:00〜20:00、バータイム (金・土・日・祝前日) 20:30〜23:00 (L.O.22:30)、月曜休み、ほか不定休、バータイムはチャージなし (原文 BAR TIME NO CHARGE)、カード・電子マネー・QR 不可、22席、2025年ごろから禁煙、アンティーク家具も販売、能のライブや映画上映などの催し (主に2階)。口コミ (2024年7月〜2026年9月、英語): 細い路地の骨董に囲まれた喫茶、ライト兄弟にちなむ名前との声、小説の骨董店のモデルとの声 (2024年12月)、ブレンドコーヒー600円、カフェオレ700円、厚切りトースト、日曜のモーニング700円、オムライス、たまごサンド、招き猫の最中 (亡くなった看板猫の名前)、執事のような服装のマスター、飲み物が1時間近く来なかったとの声 (2025年3月)。',
      confidence: 'medium', sources: [TB, R + 'B489215910/', R + 'B496983961/', R + 'B503085622/', R + 'B503404169/', R + 'B515944291/', R + 'B519582865/', R + 'B520267752/', R + 'B526841490/', R + 'B531664926/', R + 'B535297831/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; quiet antique room; no charge at bar time.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区寺町三条下ル一筋目東入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026. The listed website (wright-s.com) is now a parked domain.' },
    pin_source: `Tabelog ${TB} (35.008241, 135.767172); address has no lot number (GSI matches only a different town); pin is 35.9 m from kyoto_mishima_tei_honten, the corner named in the shop's directions; nearest existing record 29.2 m (kyoto_soup_curry_king_shinkyogoku); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519582865/', R + 'B535297831/', R + 'B496983961/'],
    price_note: 'Prices from December 2024 to September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Blend coffee', '¥600', 'Drinks', 'gf', 'vegan', 'December 2025.', 'coffee'),
      it('', '', 'Iced café au lait', '¥700', 'Drinks', 'gf', 'no', 'September 2026.', 'cafe_au_lait'),
      it('', '', 'Sunday morning set (toast, boiled egg, drink)', '¥700', 'Food', 'no', 'no', 'December 2024; Sundays only.', 'morning'),
    ] }, {
    cuisine: '骨董店の中の喫茶と夜のバー (食べログ)・ブレンドコーヒー600円、カフェオレ700円、チャイ、ココア、クリームソーダ、紅茶や緑茶のフロート、梅昆布茶、ホットワインやハイボール (2024〜2026年の口コミ)・ジャムの厚切りトースト、フレンチトースト、あんこやシナモンのトースト、日曜のモーニング (トースト、ゆで卵、飲み物) 700円、オムライス、たまごサンド、ケーキセット、招き猫の最中 (2024〜2026年の口コミ)・1,000円未満ほど (食べログ)',
    neighborhood: '寺町三条、MOVIX 向かいの路地',
    gf_detail: '食事はグルテンフリー不可。厚切りトースト、フレンチトースト、たまごサンド、最中 (2024〜2026年の口コミ)。飲み物のみ。',
    vegan_detail: '要確認。ブラックコーヒー、紅茶、チャイ、昆布茶は植物性。食べ物にはバター、卵、牛乳 (2024〜2026年の口コミ)。',
    notes: '[骨董の喫茶・寺町三条の路地、現金のみ] 三条からすぐの路地にある、骨董の時計やランプ、チェロ、人形がぎっしり並ぶ細長く薄暗い喫茶。品物の一部は買うこともできる。挽きたてのコーヒー、クリームソーダ、厚切りトースト、招き猫の最中。週末の夜はバーになり、チャージなし。2階で展示も。月曜休み。',
  });
}

// ================================================================ 日本酒とおばんざいの京酒場 けんすい錦 錦小路店 Kensui Nishiki
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26023009/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kensui-nishiki.owst.jp/';
  const H = day(['15:00', '24:00']);
  put({
    id: 'kyoto_kensui_nishiki', name: '日本酒とおばんざいの京酒場 けんすい錦 錦小路店 (Kensui Nishiki)', category: 'OMNI',
    lat: 35.00488698787064, lng: 135.76306703035897, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: tempura, fries, baguette with seafood tartare and soy-simmered fish (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, dashi-based obanzai and simmered fish (official site; 2025–2026 reviews).',
    hours_raw: 'Daily 15:00–24:00 (last orders food 23:00, drinks 23:30) (Tabelog). The shop\'s own site gives 12:30–24:00 on Monday and Wednesday–Saturday and 15:00–24:00 on Tuesday, Sunday, holidays and the day before holidays (official site, read 2026-11-07). Reservations accepted; courses with 150 minutes of all-you-can-drink, including seven or more sakes, from ¥4,000 (official site). Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay (Tabelog). 45 seats at counter and tables, private rooms for 6–8 (up to 10), whole-shop hire for 20–50 (Tabelog). Smoking allowed at all seats (Tabelog; official site). English menu (Tabelog). 2F on Nishikikoji east of Takakura; 3 min walk from Shijo or Hankyu Karasuma Stn (Tabelog). Opened 2 December 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishiki Market west end, east of Takakura — 2F',
    cuisine: 'Sake and obanzai izakaya with fish sent direct from fishermen (official site) · obanzai platters of 3 (¥990) or 6 (¥1,600), sashimi platters, grilled and simmered fish, sea bream head simmered, steamed oysters, mentaiko omelette, tempura, deep-fried tofu in broth (official site; 2025–2026 reviews) · sake flights; courses with 150 min all-you-can-drink from ¥4,000, the seven-dish ¥5,000 course with sashimi and ichibo steak (official site; August 2026) · about ¥4,000–6,000 (Tabelog; 2025–2026 reviews)',
    website: WEB, gmaps: gm('けんすい錦 錦小路店'), menu_url: WEB,
    notes: '[Sake izakaya · Nishiki-Takakura, 2F, smoking] A second-floor sake and obanzai tavern on Nishiki: obanzai platters, sashimi, simmered fish and a long list of sake, with good-value all-you-can-drink courses and private rooms for groups. Smoking is allowed throughout. Some reviewers found the food ordinary for the price.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: an izakaya of 45 seats opened 2 December 2013 on the second floor on Nishikikoji. Its site, styled 烏丸錦店, offers sake from around Japan with fish and obanzai, and links one related venue, a karaoke party space in Kawaramachi.',
      philosophy: 'Sake from around Japan with obanzai and market-fresh fish (official site).', specialty: 'Obanzai platter; all-you-can-drink sake courses.',
      anecdotes: [
        { text: 'A June 2025 visitor arriving late at Nishiki asked whether a meal without alcohol was fine and was welcomed in; three obanzai came to just under ¥1,000.', source: R + 'B511694493/' },
        { text: 'A March 2026 work party was shown to a private room at the back, surprised to be drinking on the second floor of a Nishiki building.', source: R + 'B524411172/' },
        { text: 'A November 2025 diner, who booked because it allows smoking, found the food average and a little pricey but the service quick.', source: R + 'B518044485/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮・居酒屋・日本酒バー、中京区錦小路通高倉東入中魚屋町499 2F、地下鉄四条駅・阪急烏丸駅から徒歩3分、毎日 15:00〜24:00 (L.O.フード23:00、ドリンク23:30)、予約可、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー・PayPay 可、45席、個室 (6名・8名、最大10名)、20〜50名で貸切可、喫煙可、英語メニュー、2013年12月2日開店。公式サイト (烏丸錦店): 月・水〜土 12:30〜翌0:00、火・日・祝日・祝前日 15:00〜翌0:00、全席喫煙可、漁師直送の魚と季節のおばんざい、おばんざい3種盛990円・6種1,600円、日本酒7種以上を含む150分飲み放題付きコース4,000円から、お造り3種・鯛のあらだき・国産いちぼステーキなど7品5,000円、関連店舗にカラオケのパーティースペース。口コミ (2025年3月〜2026年8月、英語): 日本酒の種類が多い、おばんざい、揚げ出し豆腐、蒸し牡蠣、明太子の卵焼き、天ぷら、誕生日プレート、奥の個室、料理は普通で割高との声 (2025年8月・11月)、喫煙できる店。',
      confidence: 'medium', sources: [TB, WEB, R + 'B479920361/', R + 'B503027308/', R + 'B510713404/', R + 'B511694493/', R + 'B512592930/', R + 'B518044485/', R + 'B519849693/', R + 'B524411172/', R + 'B533420915/'] },
    cultural_comfort: { level: 'english', note: 'English menu; smoking at all seats; cards, IC and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通高倉東入中魚屋町499 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004887, 135.763067); cross-checked: GSI 京都府京都市中京区中魚屋町499番地 (lot) 13 m; nearest existing record 16.2 m (kyoto_fumiya_nishiki, 493); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB],
    price_note: 'Prices from the official site (read 2026-11-07).', last_checked: TODAY, items: [
      it('', '', 'Obanzai platter, 3 kinds', '¥990', 'Obanzai', 'ask', 'no', 'Official site.', 'obanzai3'),
      it('', '', 'Obanzai platter, 6 kinds', '¥1,600', 'Obanzai', 'ask', 'no', 'Official site.', 'obanzai6'),
      it('', '', 'Course with 150 min all-you-can-drink (7 dishes)', '¥5,000', 'Courses', 'no', 'no', 'Official site; tax incl.', 'course5000'),
    ] }, {
    cuisine: '漁師直送の魚と日本酒、おばんざいの居酒屋 (公式サイト)・おばんざい3種盛 (990円)・6種盛 (1,600円)、お造り盛り合わせ、焼き魚、煮魚、鯛のあらだき、蒸し牡蠣、明太子の卵焼き、天ぷら、揚げ出し豆腐 (公式サイト、2025〜2026年の口コミ)・日本酒の飲み比べ、150分飲み放題付きコース4,000円から、お造りといちぼステーキの7品5,000円コース (公式サイト、2026年8月)・4,000〜6,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '錦市場の西の端、高倉の東、2階',
    gf_detail: 'グルテンフリー不可。天ぷら、フライドポテト、魚介のタルタルとバゲット、醤油の煮魚 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、だしのおばんざい、煮魚 (公式サイト、2025〜2026年の口コミ)。',
    notes: '[日本酒の居酒屋・錦高倉、2階、喫煙可] 錦の2階にある日本酒とおばんざいの酒場。おばんざいの盛り合わせ、刺身、煮魚に豊富な日本酒、お得な飲み放題付きコースと団体向けの個室。全席喫煙可。料理は値段のわりに普通という声も。',
  });
}

// ================================================================ 祇園 かわもと Gion Kawamoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000587/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kawamoto-gion.com/';
  const W = day(['18:00', '23:00']);
  put({
    id: 'kyoto_gion_kawamoto', name: '祇園 かわもと (Gion Kawamoto)', category: 'OMNI',
    lat: 35.00538153787397, lng: 135.77452405035595, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses include a fried course, saba sushi, red miso soup and fugu karaage; soy and ponzu throughout; no gluten information (official site; 2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish courses, fugu and dashi (official site).',
    hours_raw: 'Monday, Tuesday, Thursday–Saturday and the day before a holiday 18:00–23:00 (last order 22:00); Sunday and holidays 18:00–22:00 (last order 21:00); closed Wednesday and one Sunday a month; may close early when food runs out, and may close suddenly — confirm a booking by phone (Tabelog; official site). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 12 seats: 4 at the counter and two semi-private booths of 4; sunken seating; private hire up to 20 (Tabelog). Smoking allowed (Tabelog). Saba sushi and chirimen sansho to take away (Tabelog). 5 min walk from Keihan Gion-Shijo Stn exit 9 (official site).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: W, 6: day(['18:00', '22:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Kiyomoto-cho in Yasaka-shinchi',
    cuisine: 'Seasonal Japanese cuisine of Kyoto vegetables and Sea of Japan fish, with Japanese sake (official site; Tabelog) · Kawamoto course of 10 dishes ¥12,000 — starter, soup, sashimi, grilled, seasonal dish, a fried or simmered dish, saba sushi, red miso soup, fruit; seasonal fugu course of 7 dishes ¥20,000 — skin, sashimi, grilled fugu, fugu karaage, hot pot, rice porridge; milt extra at market price (official site) · thick saba sushi all year, dashimaki, dobin-mushi; charcoal-grilled fugu with house ponzu (Tabelog; 2024–2026 reviews) · about ¥15,000–20,000 (Tabelog)',
    website: WEB, gmaps: gm('祇園 かわもと'), menu_url: WEB + 'menu.html',
    notes: '[Kyoto cuisine · Gion Kiyomoto-cho, saba sushi and fugu] A small, calm Gion restaurant of counter seats and two booths where a couple serves seasonal Kyoto vegetables and fish: a 10-dish course ending in the house\'s thick saba sushi, or a winter fugu course of sashimi, grilled fugu and hot pot. Closed Wednesday; smoking allowed. One 2026 guest found the saba sushi a little salty.',
    chef_bio: { chef_name: null, roles: ['Chef and partner (couple, unnamed)'], origin: null,
      background: 'Per the official site: a Gion restaurant serving Japanese cuisine of seasonal Kyoto vegetables and fresh seafood with sake from around Japan, in a room of counter, table and private seating. An August 2025 reviewer describes it as run by a friendly couple.',
      philosophy: 'Seasonal Kyoto vegetables and fresh seafood with sake from around Japan (official site).', specialty: 'Saba sushi; fugu course.',
      anecdotes: [
        { text: 'An August 2025 diner at the counter, visiting an acquaintance\'s favourite, enjoyed the warm welcome from the friendly couple who run it.', source: R + 'B511155532/' },
        { text: 'An October 2025 guest had the fugu course and liked the long-established feel of the room.', source: R + 'B516484978/' },
        { text: 'A May 2024 diner remembered a fluffy dashimaki rich with dashi and planned to return in fugu season.', source: R + 'B484537804/' },
      ],
      japanese_sources_summary: '公式サイト: 祇園四条駅9番出口から徒歩約5分、季節の京野菜と新鮮な魚介の本格的な和食と各地の銘酒、カウンター・テーブル・個室、かわもとコース全10品12,000円 (先付、椀物、向付、焼物、旬物、御凌ぎ、油物か炊物、鯖寿司、赤出し、水物)、季節限定ふぐコース全7品20,000円 (てっぴ、てっさ、焼きふぐ、唐揚げ、てっちり、雑炊、水物、白子は時価で追加可)、月・火・木〜土・祝前日 18:00〜23:00、日・祝 18:00〜22:00、水曜休み、月に一度日曜休み、売り切れで閉店、急な休みあり。食べログ: 日本料理・寿司・海鮮、東山区八坂新地清本町373、12席 (カウンター4、半個室4名×2)、掘りごたつ、20名まで貸切可、喫煙可、カード可、電子マネー・QR 不可、鯖寿司とちりめん山椒の持ち帰り可、炭火の焼きふぐと自家製ポン酢。口コミ (2021年11月〜2026年5月、英語): 気さくな夫婦の店 (2025年8月)、ふぐのコース、厚い鯖寿司、だし巻き、鯖寿司が少し塩辛かったとの声 (2026年5月)。',
      confidence: 'medium', sources: [TB, WEB, WEB + 'menu.html', R + 'B484537804/', R + 'B511155532/', R + 'B515785581/', R + 'B516484978/', R + 'B527783697/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter restaurant; book ahead, confirm by phone; smoking allowed; cards.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区八坂新地清本町373',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (35.005382, 135.774524); cross-checked: GSI 京都府京都市東山区清本町373番地 (lot) 29 m; nearest existing record 5.7 m (kyoto_gion_shizuka, 371-2); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB + 'menu.html'],
    price_note: 'Prices from the official menu page (read 2026-11-07).', last_checked: TODAY, items: [
      it('', '', 'Kawamoto course (10 dishes)', '¥12,000', 'Courses', 'ask', 'no', 'Official site; from 2 guests; book by 17:00 the same day.', 'course'),
      it('', '', 'Fugu course (7 dishes, seasonal)', '¥20,000', 'Courses', 'no', 'no', 'Official site; from 2 guests; book by 17:00 the day before.', 'fugu'),
    ] }, {
    cuisine: '季節の京野菜と日本海の魚の和食と日本酒 (公式サイト、食べログ)・かわもとコース全10品12,000円 (先付、椀物、向付、焼物、旬物、御凌ぎ、油物か炊物、鯖寿司、赤出し、水物)、季節限定ふぐコース全7品20,000円 (てっぴ、てっさ、焼きふぐ、唐揚げ、てっちり、雑炊)、白子は時価で追加 (公式サイト)・通年の厚い鯖寿司、だし巻き、土瓶蒸し、自家製ポン酢の炭火焼きふぐ (食べログ、2024〜2026年の口コミ)・15,000〜20,000円ほど (食べログ)',
    neighborhood: '祇園、八坂新地の清本町',
    gf_detail: '要確認。コースに揚げ物、鯖寿司、赤出し、ふぐの唐揚げ。醤油とポン酢を使う。グルテンの情報はない (公式サイト、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚のコース、ふぐ、だし (公式サイト)。',
    notes: '[京料理・祇園清本町、鯖寿司とふぐ] カウンターと2つの半個室だけの落ち着いた祇園の店で、夫婦が季節の京野菜と魚を出す。名物の厚い鯖寿司で締める10品のコース、冬はてっさ、焼きふぐ、てっちりのふぐコース。水曜休み、喫煙可。2026年に鯖寿司が少し塩辛かったという声も。',
  });
}

save();
