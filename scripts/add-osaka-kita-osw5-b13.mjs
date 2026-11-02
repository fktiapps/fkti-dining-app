// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 13.
//   + 元祖 串しゃぶ専門店 まつたけ 堂山店 (kushi-shabu: shabu-shabu on skewers, open to 5:00, since 2019) — the batch-12 skip reversed by the
//     coordinator (2026-11-02): three shops of one concept, none in data, the small-group case that is kept.
//   + 涿屋 Takuya (owner-run 8-seat counter by Ohatsu Tenjin: tonkatsu in a black gluten-free brown-rice and squid-ink crumb)
//   + RAKUSUI (creative Chinese in Kitashinchi since 2004, "Gokawa" mapo tofu; weekday lunch since 2026)
//   + おでん料理 地酒 大阪・北新地 六根 Rokken (Kyoto-style oden course in private rooms, Kitashinchi)
//   Chain check: まつたけ: operator site three-six.jp lists 北新地本店, 堂山店 and 北新地別邸 (read 2026-11-02); flagged as a group of three.
//   涿屋: one shop; the official site says the owner runs it alone. RAKUSUI: invoice T1120001183005 → ＧＦ２Ｒｅ株式会社, 西天満 (NTA register);
//   no other shop found. 六根: invoice T2120001135104 → 株式会社ジャパンフーズコーポレーション, 万歳町 (NTA register); no other shop found.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 元祖 串しゃぶ専門店 まつたけ 堂山店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27110624/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://www.three-six.jp/';
  const L = day(['18:00', '05:00']); const S = day(['18:00', '03:00']);
  put({
    id: 'osaka_matsutake_kushishabu_doyama', name: '元祖 串しゃぶ専門店 まつたけ 堂山店 (Ganso Kushishabu Senmonten Matsutake Douyama ten)', category: 'OMNI',
    lat: 34.703881, lng: 135.502240, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The skewers include fresh wheat gluten (nama-fu), the dipping sauces include sesame sauce, and the finishing dishes are ramen, udon, mazesoba or rice porridge in the bonito-based broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the shabu-shabu broth is bonito-based dashi (operator site), and the skewers are mostly meat and seafood.',
    hours_raw: 'Tue–Sat, holidays and the day before a holiday 18:00–5:00 (last order 4:00); Sun 18:00–3:00 (last order 2:00); closed Mondays, or the Tuesday after when Monday is a holiday (Tabelog; the operator site gives 18:00–5:00). Reservations accepted; couples may be moved to the counter if a group books (Tabelog). No service charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay, Rakuten Pay (Tabelog). 15 seats: a counter of 8 and tables for 7; private hire up to 20; smoking allowed (Tabelog). Opened 4 April 2019 (Tabelog). The entrance is down a narrow passage (July 2026).',
    hours: { 1: L, 2: L, 3: L, 4: L, 5: L, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂山町17-3, ground floor of イーグルビル — 5 min from Hankyu Osaka-Umeda, Umeda (Midosuji Line) and JR Osaka Stns',
    cuisine: '"Kushi-shabu": shabu-shabu served on skewers that you dip yourself in a light house broth, so no chopsticks go into the shared pot, each skewer with its own suggested dip (operator site; December 2025) · ingredients: Inobuta pork "Blessing of Eve" from Susami, Wakayama, Omi beef, Galician chestnut pork, seafood and vegetables from Mie (operator site) · courses (Tabelog, tax included): "Ume" of ten skewers and a finishing dish (mazesoba, udon or rice porridge) ¥3,300; "Take" with sashimi from the Osaka central market ¥4,400; "Matsu" with five kinds of sashimi, twelve skewers, salad and a daily dish ¥5,500 · skewers named in reviews: pork rolls, nama-fu, shrimp, onion, beef tongue with salt and sesame, wagyu rolls with sesame sauce, quail and lettuce, asparagus, scallops, yellowtail, "Negi Bakudan" green-onion bombs; clams in the broth +¥500; sesame-pepper dip (2025–2026) · finishing ramen, udon or zosui (2025–2026) · about ten seasonal sakes from around Japan, changed twice a month (operator site)',
    website: OWN, gmaps: gm('まつたけ 堂山店 串しゃぶ'), menu_url: null,
    notes: "[Shabu-shabu · Doyama, on skewers until 5:00] The second shop of the Kitashinchi kushi-shabu specialist, a small wooden room in Doyama open until 5:00 most nights, where shabu-shabu comes on skewers you swish yourself in a light bonito broth, so nobody's chopsticks go into the shared pot. Start with a clam in the broth, then work through Wakayama Inobuta pork, Omi beef, beef tongue with salt and sesame, quail and lettuce and the cult 'Negi Bakudan' green-onion bomb, each with its suggested dip; finish with ramen, udon or a rice porridge in the broth. Courses run ¥3,300–5,500 (the ¥3,300 one is the trial), or order skewers one by one. Fifteen seats, so book; smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the operator site three-six.jp: "元祖串しゃぶ専門店 まつたけ" offers shabu-shabu in a new skewer style, with Inobuta pork from Susami, Omi beef and local ingredients; shops are the Kitashinchi main shop (曽根崎新地1-9-8, 17:00–5:00), this Doyama shop and a third, 北新地別邸 (曽根崎新地1-2-23). The shop-maintained Tabelog listing calls Doyama the second shop of the Kitashinchi original; opened 4 April 2019.', philosophy: null, specialty: 'Kushi-shabu; clam broth; Negi Bakudan.',
      anecdotes: [
        { text: '"The Negi Bakudan (green onion bomb) is especially addictive—I can\'t help but eat several!" — June 2025.', source: R + 'B508383594/' },
        { text: '"I appreciated that we could comfortably gather around the hot pot without using direct chopsticks." — December 2025.', source: R + 'B521373468/' },
        { text: '"I often visit this place in Shinchi because it\'s open until the early morning, but this was my first time at this location!" — June 2025.', source: R + 'B514985858/' },
      ],
      japanese_sources_summary: '公式サイト (three-six.jp): 元祖串しゃぶ専門店 まつたけ、北新地本店 (曽根崎新地1-9-8 北原ビル1F、17:00〜5:00)、堂山店 (堂山町17-3 イーグルビル1F、18:00〜5:00、月曜休み、祝日の場合は翌火曜)、3店舗目の北新地別邸 (曽根崎新地1-2-23 ガーデニアビル3F、18:00〜24:00)、しゃぶしゃぶを串のスタイルで、和歌山県すさみ町のイノブタ「イブの恵み」、近江牛、ガリシア栗豚、三重県の海鮮と野菜、あっさりした特製の出汁に串のままくぐらせるので直箸がいらない、鰹節ベースの出汁、うめ・たけ・まつの3コース、日本酒は常時10種ほどで月に2回入れ替え。食べログ (店舗会員): 北新地の人気店の2号店、火〜土・祝・祝前日18:00〜5:00 (L.O.4:00)、日18:00〜3:00 (L.O.2:00)、月曜休み、うめコース3,300円、たけコース4,400円、まつコース5,500円、サービス料なし、カード・電子マネー・QR 可、15席 (カウンター8、テーブル7)、貸切20名まで、喫煙可、2019年4月4日オープン。口コミ(2025年6月〜2026年11月): 最初の貝、Negi Bakudan、ごまだれと塩、牛タン、和牛巻き、うずらとレタス、アスパラ、ホタテ、ブリ、豚巻き、生麩、エビ、玉ねぎ、貝の追加500円、〆のラーメン・うどん・雑炊、刺身もおいしい、入口は細い通路の先、2〜4人向けの小さな店。',
      confidence: 'medium', sources: [TB, OWN, R + 'B508383594/', R + 'B514127230/', R + 'B514985858/', R + 'B519477160/', R + 'B521373468/', R + 'B522558250/', R + 'B524349778/', R + 'B525463868/', R + 'B531090281/', R + 'B532841195/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The menu shows which dip goes with each skewer (December 2025). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町17-3 イーグルビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the operator site; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町17番3号 (go) 11m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, OWN],
    price_note: 'Course prices from the Tabelog listing (tax included); the clam add-on from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', '"Ume" course: ten skewers and a finishing dish', '¥3,300', 'Courses', 'ask', 'no', 'Tabelog.', 'ume_course'),
      it('', '', '"Take" course with sashimi', '¥4,400', 'Courses', 'ask', 'no', 'Tabelog; September 2025 and November 2026.', 'take_course'),
      it('', '', '"Matsu" course: five sashimi, twelve skewers, salad, a daily dish', '¥5,500', 'Courses', 'ask', 'no', 'Tabelog.', 'matsu_course'),
      it('', '', 'Clams added to the broth', '+¥500', 'Add-ons', 'ask', 'no', 'January 2026.', 'clam_addon'),
    ] }, {
    cuisine: '「串しゃぶ」: しゃぶしゃぶを串にさして出し、あっさりした特製の出汁に自分でくぐらせるので、直箸で鍋をつつかなくてよい。串ごとにおすすめのたれがある (公式サイト、2025年12月)・食材: 和歌山県すさみ町のイノブタ「イブの恵み」、近江牛、ガリシア栗豚、三重県の海鮮と野菜 (公式サイト)・コース (食べログ、税込): 串10本と〆 (まぜそば・うどん・雑炊) の「うめ」3,300円、市場の刺身つきの「たけ」4,400円、刺身5種と串12本とサラダと日替わりの一品の「まつ」5,500円・口コミに出てくる串: 豚巻き、生麩、エビ、玉ねぎ、塩とごまの牛タン、ごまだれの和牛巻き、うずらとレタス、アスパラ、ホタテ、ブリ、「Negi Bakudan」。出汁に貝の追加500円、ごまと胡椒のたれ (2025年〜2026年)・〆のラーメン、うどん、雑炊 (2025年〜2026年)・全国の季節の日本酒が常時10種ほど、月に2回入れ替え (公式サイト)',
    neighborhood: '堂山町17-3、イーグルビルの1階。阪急大阪梅田駅、地下鉄梅田駅、JR大阪駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。串には生麩もあり、たれにはごまだれ、〆はラーメン、うどん、まぜそば、または鰹節ベースの出汁の雑炊。',
    vegan_detail: 'ヴィーガンではありません。しゃぶしゃぶの出汁は鰹節ベース (公式サイト) で、串は肉と魚介が中心。',
    notes: '[しゃぶしゃぶ・堂山、朝5時までの串しゃぶ] 北新地の串しゃぶ専門店の2号店で、堂山の木の内装の小さな店。ほとんどの日は朝5時まで。しゃぶしゃぶが串で出てきて、あっさりした鰹節の出汁に自分でくぐらせるので、みんなの鍋に箸を入れなくてよい。はじめに出汁の中の貝、それから和歌山のイノブタ、近江牛、塩とごまの牛タン、うずらとレタス、人気の「Negi Bakudan」と、それぞれおすすめのたれで。〆は出汁でラーメン、うどん、雑炊。コースは3,300〜5,500円 (3,300円はお試し)、串を1本ずつ頼んでもよい。15席なので予約を。喫煙可。',
  });
}

// ================================================================ 涿屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27002290/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://takuya-ohatsu.jp/';
  const W = day(['18:00', '23:30']);
  put({
    id: 'osaka_takuya_ohatsu_tenjin', name: '涿屋 (Takuya)', category: 'OMNI',
    lat: 34.699150, lng: 135.501196, cuisine_type: 'katsu',
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: 'The operator says the signature black cutlet is coated in a gluten-free crumb ground from its own 100% brown-rice squid-ink bread and cooked slowly in lard, and diners in 2026 booked courses sold as "gluten-free". Not confirmed: whether the cutlet is floured with wheat before the crumb, whether the fryer is shared with other coated dishes (the fruit-tomato "katsu" has a thin crisp coat of unstated make), and whether the "junmai" soy sauce on the goya and the rice has wheat. Ask when booking by phone.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlets fried in lard, bonito flakes on the goya and the rice, egg and seafood in the starters.',
    hours_raw: 'Mon–Sat 18:00–23:30 (last order 23:30); closed Sundays and holidays (Tabelog; operator site). Reservations by phone only, 9:00–17:00 except Sundays and holidays; same-day walk-ins if a seat is free (operator site). Seat charge (otoshi) ¥1,100, which brings two to four starters (Tabelog; September–October 2026). No prices on the menu (September–October 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, nanaco, WAON, PayPay, d Barai, Rakuten Pay, au PAY (Tabelog). 8 counter seats; non-smoking; children and strollers welcome (Tabelog). Private courses from ¥80,000 including drinks (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '曽根崎2-5-37, ground floor, in the back lane of Tsuyu Tenjin (Ohatsu Tenjin) shrine near its east gate; a grass-green noren marks the door — 4 min from Higashi-Umeda and Kitashinchi Stns',
    cuisine: 'Tonkatsu reworked as "butakatsu", the menu\'s own word: pork in a jet-black crumb ground from the shop\'s own 100% brown-rice squid-ink bread, gluten-free, cooked slowly in lard so the meat stays faintly pink, eaten with salt; fillet, loin and "toro" cuts (operator site) · course: a seasonal starter assortment (soft-cooked egg, sea grapes, seasonal seafood and vegetables), the black cutlets, then a squid-ink risotto or flat-grilled brown-rice fried rice; the menu changes daily; à la carte also welcome (operator site) · named courses with gut health and gluten-free themes: a "toro katsu" course ¥5,500, an ¥8,800 course (September 2026) · fruit tomato in a thin crisp coat as a salad, house smoking (fillet, loin and shoulder smoked in front of you), goya sashimi with bonito flakes and junmai soy sauce, brown-rice salt-koji soup, six small bean dishes, yam with aosa seaweed, fried yuba with shiso and cheese, omelette with pancetta, fried sweetfish (June–October 2026) · Tabelog Tonkatsu 100 in 2018, 2019, 2021, 2024 and 2026 (Tabelog)',
    website: OWN, gmaps: gm('涿屋 曽根崎 お初天神'), menu_url: null,
    notes: "[Tonkatsu · Ohatsu Tenjin, a black gluten-free cutlet] An eight-seat counter in the back lane behind Tsuyu Tenjin shrine, run by its owner alone and on Tabelog's Tonkatsu 100 list five times since 2018. Its signature is a jet-black cutlet: pork in a crumb ground from the shop's own brown-rice and squid-ink bread, gluten-free by the shop's account, cooked gently in lard until faintly pink and eaten with three salts. The meal starts with small seasonal dishes and ends with a squid-ink risotto or a brown-rice fried rice; a fruit tomato fried in a thin crisp coat is the other famous dish. Booking by phone (9:00–17:00) is expected. The menu shows no prices; diners in 2026 paid about ¥6,000–15,000, with a ¥1,100 seat charge that brings starters. Expect a quiet, unhurried pace.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), working alone'], origin: null, background: 'Per the official site: "「とんかつ」ではなく、豚を活かす" (not tonkatsu but making the most of pork); an 8-seat counter hideaway behind Ohatsu Tenjin; the owner runs the shop alone, so bookings are asked for. The shop-maintained Tabelog listing lists Tabelog Tonkatsu 100 in 2018, 2019, 2021, 2024 and 2026. Reviews describe a quiet chef (August 2026); a regular on a twelfth visit in October 2026.', philosophy: '"「とんかつ」ではなく、豚を活かす。" (official site).', specialty: 'Black brown-rice squid-ink cutlet; fruit-tomato katsu.',
      anecdotes: [
        { text: '"Just keep in mind that since it\'s run by a single person, it may take a bit of time to be served." — April 2025, a tenth visit.', source: R + 'B471689142/' },
        { text: '"The pork dish was exquisite, using squid ink breadcrumbs made from brown rice, which made it incredibly light and not greasy at all." — October 2026, a twelfth visit.', source: R + 'B471689142/' },
        { text: '"By the way, the menu does not list prices." — October 2026, a seat-only booking.', source: R + 'B537246363/' },
      ],
      japanese_sources_summary: '公式サイト: 涿屋 (たくや)、お初天神裏、変作豚活、カウンター八席の隠れ家、「とんかつ」ではなく豚を活かす、名物の黒い豚活は玄米100%の自家製イカスミパンから挽いたグルテンフリーの玄米パン粉、ラードでじっくり火入れして中は薄紅色、塩で、ヒレ活・ロース活・トロ活、コースは季節の前菜盛り合わせ (とろりと火を入れたたまご、海ぶどう、旬の魚介や野菜) から豚活、〆はイカスミリゾットか玄米平焼き飯、献立は日々変わる、フルーツトマト活 (極薄のカリカリ衣)、自家製の燻製、アラカルトのみも可、古民家風の外観と草色の暖簾、カウンター8席・完全禁煙、店主一人で営業、露天神社 (お初天神) の東鳥居の近くの路地、東梅田駅・北新地駅から徒歩4分、18:00〜23:30 (L.O.23:30)、日曜・祝日休み、カード・QR・電子マネー可、予約は電話のみ (9:00〜17:00、日曜・祝日を除く)、空席があれば当日も可。食べログ (店舗会員): 予約のみ、お席代 (お通し) 1,100円、8席、禁煙、子ども可、貸切のコースは飲み物込みで80,000円から、とんかつ 百名店 2018・2019・2021・2024・2026。口コミ(2025年4月〜2026年10月): グルテンフリーのとんかつ、イカスミと玄米のパン粉、3種の塩、すだち、お通しの前菜2〜4品、燻製の盛り合わせ (ヒレ・ロース・肩)、トロ活、玄米、イカスミリゾット、トロカツのコース5,500円、8,800円のコース、フルーツトマトのサラダ、ゴーヤの刺身と鰹節と純米醤油、玄米塩麹のスープ、豆の小鉢6種、山芋とあおさ、湯葉の揚げ物、パンチェッタのオムレツ、鮎の揚げ物、ラードで揚げる、メニューに値段がない、店主一人なので時間がかかる、静かな店主、12回通う常連。',
      confidence: 'medium', sources: [TB, OWN, R + 'B471689142/', R + 'B530778421/', R + 'B533989813/', R + 'B535926948/', R + 'B536037556/', R + 'B536655284/', R + 'B536958410/', R + 'B537246363/', R + 'B537559612/', R + 'B538319459/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone-only booking in Japanese hours; no prices on the menu (2026). No English evidence found.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [],
      positives: [
        { text: 'Official site: the black cutlet\'s crumb is "グルテンフリーの衣", ground from house-made 100% brown-rice squid-ink bread, and the cutlets are cooked in lard.', source: OWN },
        { text: 'A September 2026 diner booked a course sold as "Gut Health Gourmet Gluten-Free"; an October 2026 diner\'s course was billed as gluten-free and gut-friendly.', source: R + 'B536037556/' },
      ], confidence: 'low', last_checked: TODAY },
    mom_and_pop: true, loc_approx: 'block', address_ja: '大阪府大阪市北区曽根崎2-5-37 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目5番37号 (go) 8m. osaka_mimoza_ohatsu_tenjin (address_ja "大阪府大阪市北区曽根崎2-5-37 お初天神東門ビル 2F") is at the same lot with its pin 0 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OWN, R + 'B536037556/'],
    price_note: 'The menu shows no prices; course prices from September 2026 reviews, the seat charge from Tabelog.', last_checked: TODAY, items: [
      it('黒い豚活', '', 'Black cutlet in brown-rice squid-ink crumb (fillet, loin or toro)', '', 'Signature', 'ask', 'no', 'Official site; gluten-free crumb per the shop.', 'kuroi_butakatsu'),
      it('フルーツトマト活', '', 'Fruit tomato in a thin crisp coat, as a salad', '', 'À la carte', 'ask', 'ask', 'Official site; September–October 2026.', 'tomato_katsu'),
      it('', '', 'Pork toro katsu course (by reservation)', '¥5,500', 'Courses', 'ask', 'no', 'September 2026.', 'toro_course'),
      it('', '', 'Seat charge with starters', '¥1,100', 'Charges', 'ask', 'no', 'Tabelog; October 2026.', 'otoshi'),
    ] }, {
    cuisine: 'とんかつを「豚活」に: 自家製の玄米100%のイカスミパンを挽いた漆黒のグルテンフリーのパン粉をまとわせ、ラードでじっくり火を入れて中はほんのり薄紅色、塩で食べる。ヒレ活、ロース活、トロ活 (公式サイト)・コース: 季節の前菜盛り合わせ (とろりと火を入れたたまご、海ぶどう、旬の魚介や野菜)、黒い豚活、〆はイカスミリゾットか玄米平焼き飯。献立は日々変わり、アラカルトも可 (公式サイト)・腸活とグルテンフリーをうたうコース: トロカツのコース5,500円、8,800円のコース (2026年9月)・薄いカリカリの衣のフルーツトマトのサラダ、目の前でいぶす自家製の燻製 (ヒレ・ロース・肩)、鰹節と純米醤油のゴーヤの刺身、玄米塩麹のスープ、豆の小鉢6種、山芋とあおさ、しそとチーズの湯葉の揚げ物、パンチェッタのオムレツ、鮎の揚げ物 (2026年6月〜10月)・食べログ とんかつ 百名店 2018・2019・2021・2024・2026 (食べログ)',
    neighborhood: '曽根崎2-5-37の1階、露天神社 (お初天神) の東鳥居の近くの裏路地、草色の暖簾が目印。東梅田駅・北新地駅から徒歩4分',
    gf_detail: '店によると、名物の黒い豚活は自家製の玄米100%のイカスミパンを挽いたグルテンフリーの衣で、ラードでじっくり火を入れる。2026年の口コミでは「グルテンフリー」のコースを予約した人も。未確認: 衣の前に小麦粉をつけるか、ほかの衣の料理と揚げ油が同じか (フルーツトマト活の薄い衣の中身は不明)、ゴーヤやごはんの純米醤油に小麦が入っているか。電話で予約するときに確認を。',
    vegan_detail: 'ヴィーガンではありません。ラードで揚げる豚のカツ、ゴーヤとごはんに鰹節、前菜に卵と魚介。',
    notes: '[とんかつ・お初天神、黒いグルテンフリーのカツ] 露天神社の裏の路地にあるカウンター8席の店で、店主が一人で営み、食べログ とんかつ 百名店に2018年から5回選ばれた。名物は真っ黒なカツで、店の玄米とイカスミのパンを挽いた衣 (店によるとグルテンフリー) をまとわせ、ラードでじっくり火を入れて中はほんのり薄紅色、3種の塩で食べる。はじめは季節の小さな前菜、〆はイカスミリゾットか玄米の焼き飯。薄い衣のフルーツトマトも名物。予約は電話で (9:00〜17:00)。メニューに値段はなく、2026年の口コミでは6,000〜15,000円ほど、前菜つきのお席代1,100円。ゆっくりとした静かな店。',
  });
}

// ================================================================ RAKUSUI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27007724/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '22:30']);
  put({
    id: 'osaka_rakusui_kitashinchi', name: 'RAKUSUI', category: 'OMNI',
    lat: 34.697702, lng: 135.499042, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Chinese dishes in sauces (mapo tofu, chili shrimp, sweet and sour pork), spring rolls, dan dan noodles and XO sauce; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the mapo tofu is made with wagyu, beef tripe and tendon; the menu is of meat and seafood dishes; no vegetarian dish is named.',
    hours_raw: 'Dinner Mon–Sat, the day before and after a holiday 18:00–22:30 (last order food 21:30, drinks 22:00); closed Sundays and holidays (Tabelog). Weekday lunch began in 2026 and is not on the listing; diners from September and October 2026 had the ¥1,500 mapo tofu set with free rice refills. Reservations accepted (Tabelog). ¥500 seat charge for à la carte orders only (Tabelog). Strong perfume may be refused (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, Edy, iD, PayPay, d Barai, Rakuten Pay, au PAY, Alipay (Tabelog). 16 seats; counter seats; non-smoking (Tabelog). Opened 10 March 2004 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '曽根崎新地1-9-8, ground floor of ゴアビル, under a sign for the "Gokawa" mapo tofu — 1 min from Kitashinchi Stn exit 11-43',
    cuisine: 'Creative Chinese by an owner who trained ten years in hotels and at a well-known Chinese restaurant, with touches of the owner\'s native Hokkaido (Tabelog) · the signature "Gokawa Mapo Tofu", named to go beyond Sichuan: chunks of wagyu with tripe and tendon instead of mince, heavy with Sichuan pepper (Tabelog; September–October 2026) · dinner: a six-starter platter ¥2,000; the "classic light course" ¥7,500; a course choosing three of seven signature dishes ¥8,800 (Tabelog, tax included) · sashimi-style Chinese salad that looks like sushi, sweet and sour pork filled with several cheeses and plated as the solar system, Italian-style shrimp mayo in pistachio sauce, French-style chili shrimp, scallop ajillo, sweet potato and cheese spring rolls, beef with green peppers, dan dan noodles, potato salad with XO sauce (2026) · weekday lunch: Gokawa mapo tofu set with Koshihikari rice (refills free), crab and potato salad, Kitami onion soup ¥1,500; a ¥1,200 daily set (September–October 2026) · wine and cocktails, a reminder of the shop\'s bar days (Tabelog)',
    website: 'https://lit.link/urakusui', gmaps: gm('RAKUSUI 北新地'), menu_url: null,
    notes: "[Chinese · Kitashinchi, creative Chinese and 'Gokawa' mapo tofu] A 16-seat creative Chinese restaurant by Kitashinchi station, running since 2004 under a sign that names its mapo tofu in letters bigger than its own. The 'Gokawa' mapo, meant to outdo Sichuan, uses chunks of wagyu, tripe and tendon and a lot of numbing pepper. Around it the Hokkaido-born owner plays: a Chinese salad dressed like sushi, sweet and sour pork stuffed with cheese and plated as the solar system, shrimp mayo in pistachio sauce. Dinner courses ¥7,500–8,800, or à la carte with a ¥500 seat charge; since 2026 a weekday lunch of the mapo with free rice refills for ¥1,500. Mind the spice, and skip strong perfume.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), a culinary author, 47 per the listing'], origin: 'Hokkaido', background: 'Per the shop-maintained Tabelog listing: creative Chinese from an owner with ten years of training at a hotel and a renowned Chinese restaurant; the owner is from Hokkaido and a culinary author (47); 20 years in Kitashinchi; once a bar, hence the drinks list; opened 10 March 2004; Tabelog Chinese WEST 100 in 2021. The Tabelog invoice number T1120001183005 is registered to ＧＦ２Ｒｅ株式会社, 西天満 (NTA invoice register, read 2026-11-02).', philosophy: 'The mapo tofu is named "with the hope of surpassing Sichuan cuisine" (Tabelog).', specialty: 'Gokawa mapo tofu; solar-system sweet and sour pork.',
      anecdotes: [
        { text: '"…recently started offering lunch, but there\'s no information about it on Tabelog..." — October 2026, the weekday mapo tofu lunch.', source: R + 'B537009670/' },
        { text: '"The sweet and sour pork had several types of cheese inside, and the presentation resembled the solar system, with the spherical sweet and sour pork representing the Earth." — October 2026.', source: R + 'B538216300/' },
        { text: '"The chef\'s concept was explained by a robot" — October 2026, an à la carte dinner.', source: R + 'B538216300/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): RAKUSUI、中華料理・創作料理、大阪市北区曽根崎新地1-9-8 ゴアビル 1F、JR 北新地駅の出口11-43から徒歩1分、月〜土・祝前日・祝後日18:00〜22:30 (L.O.料理21:30、ドリンク22:00)、日・祝休み、予約可、単品注文のみお席料500円、香りの強い香水は断ることも、カード・電子マネー・QR 可、16席、禁煙、2004年3月10日オープン、北新地で20年の創作中華、ホテルと有名な中華料理店で10年修業、四川料理をこえたいという名の「Gokawa」麻婆豆腐、店主は Hokkaido 出身、料理の著者 (47)、もとバーのお酒の品ぞろえ、前菜6種の盛り合わせ2,000円、定番の軽めのコース7,500円、7品から3品を選ぶコース8,800円、食べログ 中国料理 WEST 百名店 2021。インボイス登録はＧＦ２Ｒｅ株式会社 (西天満)。口コミ(2026年6月〜10月): 平日のランチが始まった、Gokawa 麻婆豆腐の定食1,500円 (ごはんおかわり自由、カニのサラダとポテトサラダ、Kitami の玉ねぎのスープ)、1,200円の日替わり、ひき肉ではなく和牛のかたまりとセンマイと牛すじ、花椒がたっぷりでしびれる、寿司のような刺身の中華サラダ、チーズ入りで太陽系のように盛った酢豚、ピスタチオソースのイタリア風エビマヨ、フランス風エビチリ、ホタテのアヒージョ、さつまいもとチーズの春巻き、牛肉とピーマンの炒め物、担々麺、XO醤のポテトサラダ、ロボットが料理のコンセプトを説明、自家製のカードゲーム Shuraba Karuta を販売、テレビで紹介された、洋食店のような内装。',
      confidence: 'medium', sources: [TB, R + 'B380913329/', R + 'B532243801/', R + 'B534764302/', R + 'B534881490/', R + 'B536525261/', R + 'B536695007/', R + 'B537009670/', R + 'B537825261/', R + 'B537827860/', R + 'B538216300/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte or courses; dish concepts explained at the table (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区曽根崎新地1-9-8 ゴアビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番8号 (go) 6m. osaka_kitashinchi_sushi_matsui (address_ja "大阪府大阪市北区曽根崎新地1-9-8 FourSeasonGOAビル B1F") is in the same building with its pin 4 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537009670/'],
    price_note: 'Dinner prices from the Tabelog listing (tax included); lunch prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Gokawa mapo tofu lunch set (weekdays)', '¥1,500', 'Lunch', 'ask', 'no', 'September–October 2026.', 'mapo_lunch'),
      it('', '', 'Six-starter platter', '¥2,000', 'Dinner', 'ask', 'no', 'Tabelog; October 2026.', 'zensai'),
      it('', '', 'Classic light course, six dishes', '¥7,500', 'Dinner', 'ask', 'no', 'Tabelog.', 'light_course'),
      it('', '', 'Course choosing three of seven signature dishes', '¥8,800', 'Dinner', 'ask', 'no', 'Tabelog.', 'choice_course'),
    ] }, {
    cuisine: 'ホテルと有名な中華料理店で10年修業した店主の創作中華、店主の出身の Hokkaido の味も (食べログ)・名物は四川をこえたいという名の「Gokawa 麻婆豆腐」: ひき肉ではなく和牛のかたまりにセンマイと牛すじ、花椒がたっぷり (食べログ、2026年9月〜10月)・夜: 前菜6種の盛り合わせ2,000円、定番の軽めのコース7,500円、7品から3品を選ぶコース8,800円 (食べログ、税込)・寿司のような刺身の中華サラダ、チーズを詰めて太陽系のように盛った酢豚、ピスタチオソースのイタリア風エビマヨ、フランス風エビチリ、ホタテのアヒージョ、さつまいもとチーズの春巻き、牛肉とピーマンの炒め物、担々麺、XO醤のポテトサラダ (2026年)・平日のランチ: Gokawa 麻婆豆腐の定食 (Koshihikari のごはんはおかわり自由、カニのサラダとポテトサラダ、Kitami の玉ねぎのスープ) 1,500円、1,200円の日替わり (2026年9月〜10月)・もとバーのワインとカクテル (食べログ)',
    neighborhood: '曽根崎新地1-9-8、ゴアビルの1階、「Gokawa」麻婆豆腐の看板が目印。北新地駅の出口11-43から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。ソースの中華料理 (麻婆豆腐、エビチリ、酢豚)、春巻き、担々麺、XO醤。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。麻婆豆腐は和牛、センマイ、牛すじ入りで、肉と魚介の料理が中心。ベジタリアンの料理の名前はない。',
    notes: '[中華・北新地、創作中華と「Gokawa」麻婆豆腐] 北新地駅のそばの16席の創作中華で、2004年から。看板には店の名前より大きく麻婆豆腐の名前。四川をこえたいという「Gokawa」の麻婆は、和牛のかたまり、センマイ、牛すじに、しびれる花椒がたっぷり。Hokkaido 出身の店主の遊び心のある料理も: 寿司のような中華サラダ、チーズを詰めて太陽系のように盛った酢豚、ピスタチオソースのエビマヨ。夜のコースは7,500〜8,800円、単品はお席料500円。2026年からは平日のランチも始まり、ごはんおかわり自由の麻婆豆腐の定食が1,500円。辛さに注意、強い香水はひかえて。',
  });
}

// ================================================================ おでん料理 地酒 大阪・北新地 六根
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27005116/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '00:00']);
  put({
    id: 'osaka_oden_rokken_kitashinchi', name: 'おでん料理 地酒 大阪・北新地 六根 (Oden Ryori Jizake Osaka Kitashinchi Rokken)', category: 'OMNI',
    lat: 34.697626, lng: 135.498858, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Oden simmered in a soy-seasoned broth, handmade fish cakes, chikuwa, and a finishing kitsune udon; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden broth is made with bonito and sardines as well as kombu (Tabelog). Tabelog ticks "vegetarian options", but the dashi rules it out for vegans.',
    hours_raw: 'Mon–Sat 17:00–24:00 (last order 22:30); closed Sundays (Tabelog). Reservations accepted; the menu changes with the season (Tabelog). Service charge ¥550 and a starter ¥550 a head, both included in course prices (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, d Barai, Rakuten Pay, au PAY; no e-money (Tabelog). 30 seats: a counter of 8 at the oden pot on the ground floor, five private rooms upstairs for 2 to 8; completely non-smoking, e-cigarettes included; children welcome (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '曽根崎新地1-6-24, a house with a noren — 3 min from Kitashinchi Stn',
    cuisine: 'Kyoto-style oden in a golden broth of Hokkaido kombu with bonito and sardines, with seasonal vegetables, fresh seafood and handmade fish cakes, and local sake from around Japan (Tabelog) · courses (Tabelog, tax and service included): "Rokken Oden Course" of eight items, six oden (five classics and one seasonal, the chef\'s choice) ¥7,000; "Seasonal Special Course" adding seasonal sashimi and a finishing dish ¥8,000 · oden named in reviews: daikon with grated yam and bonito flakes, thick fried tofu, beef tendon, chikuwa, spicy konnyaku, rolled cabbage, local chicken, hanpen; a small dish such as mizuna salad first; the finish is "kitsune", udon stuffed inside a big fried-tofu pouch, then a wasabi sorbet or fruit sorbet (July–October 2026) · sake such as Mutsu Hassen ¥1,800 a glass (September 2026)',
    website: null, gmaps: gm('六根 おでん 北新地'), menu_url: null,
    notes: "[Oden · Kitashinchi, a Kyoto-style oden course] An oden house in Kitashinchi with a counter round the oden pot downstairs and five quiet private rooms upstairs, popular for business dinners and family meals. The broth is a pale-gold Kyoto style of Hokkaido kombu, bonito and sardines; the ¥7,000 course brings a small dish, six oden served one bowl at a time (the daikon under grated yam and the beef tendon get the praise), then the house finale, udon hidden inside a big fried-tofu pouch, and a wasabi sorbet. Courses include tax and service; à la carte adds ¥550 service and a ¥550 starter. Open to midnight, closed Sundays; completely non-smoking.",
    chef_bio: { chef_name: null, roles: ['Oden cooks at the counter (unnamed) and floor staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: nourishing oden in a relaxed atmosphere, a dashi of premium Hokkaido kombu with bonito and sardines "seasoned in a golden ratio", handmade fish cakes, private table rooms. The Tabelog invoice number T2120001135104 is registered to 株式会社ジャパンフーズコーポレーション, 万歳町 (NTA invoice register, read 2026-11-02).', philosophy: null, specialty: 'Kyoto-style oden course; kitsune udon finale.',
      anecdotes: [
        { text: '"When I broke open the large pouch, silky udon noodles spilled out, creating a delightful sensory surprise!" — August 2026, the Rokken Oden Course.', source: R + 'B534039646/' },
        { text: '"each dish is served in its own bowl, so the heat isn\'t overwhelming." — July 2026, on oden in summer.', source: R + 'B532720550/' },
        { text: '"The meal concluded with a wasabi sorbet, which refreshingly cleansed the palate with its aromatic and invigorating flavor." — August 2026, in a private room upstairs.', source: R + 'B533364492/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): おでん料理 地酒 大阪・北新地 六根、おでん・日本料理・居酒屋、大阪市北区曽根崎新地1-6-24、JR 北新地駅から徒歩3分、月〜土17:00〜24:00 (L.O.22:30)、日曜休み、予約可、全席禁煙 (電子たばこも)、サービス料550円とお通し550円 (コースは税・サービス料込み)、カード・QR 可、電子マネー不可、30席 (1階はおでん鍋のカウンター8席、2階は個室5室)、子ども可、ベジタリアンメニューあり、Hokkaido の昆布とかつお、いわしの黄金比のだし、季節の野菜と魚介、手作りの練り物、京風のおでん、全国の地酒、おでん6種の六根おでんコース7,000円、季節の刺身つきの季節の特別コース8,000円。インボイス登録は株式会社ジャパンフーズコーポレーション (万歳町)。口コミ(2026年7月〜10月): おでんは1品ずつ器で、とろろとかつお節の大根、厚揚げ、牛すじ、ちくわ、ピリ辛こんにゃく、ロールキャベツ、地鶏、はんぺん、はじめに水菜のサラダなどの小鉢、〆はお揚げの中にうどんが入った「きつね」、わさびのシャーベットやフルーツのシャーベット、日本酒の Mutsu Hassen 1,800円、2階の個室で接待や家族の食事、スタッフが親切。',
      confidence: 'medium', sources: [TB, R + 'B532529457/', R + 'B532720550/', R + 'B532925110/', R + 'B533364492/', R + 'B534039646/', R + 'B534513496/', R + 'B536012421/', R + 'B536680948/', R + 'B536748261/', R + 'B537124213/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set oden courses in private rooms; one September 2026 diner suggests it for a night out while travelling. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-6-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目6番24号 (go) 1m; nearest other records (杉の家ビル, 曽根崎新地1-6-23) 12 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534039646/'],
    price_note: 'Course prices from the Tabelog listing (tax and service included); reviews in 2026 match ¥7,000.', last_checked: TODAY, items: [
      it('', '', 'Rokken Oden Course: small dish, six oden, kitsune udon, dessert', '¥7,000', 'Courses', 'no', 'no', 'Tabelog; August–October 2026.', 'rokken_course'),
      it('', '', 'Seasonal Special Course with sashimi', '¥8,000', 'Courses', 'no', 'no', 'Tabelog.', 'seasonal_course'),
      it('', '', 'Mutsu Hassen sake, a glass', '¥1,800', 'Drinks', 'ask', 'ask', 'September 2026.', 'mutsu_hassen'),
      it('', '', 'Starter and service charge (à la carte)', '¥550 + ¥550', 'Charges', 'ask', 'no', 'Tabelog.', 'charges'),
    ] }, {
    cuisine: 'Hokkaido の昆布にかつおといわしの黄金色のだしで炊く京風のおでん、季節の野菜、鮮魚、手作りの練り物、全国の地酒 (食べログ)・コース (食べログ、税・サービス料込み): おでん6種 (定番5種と季節の1種、おまかせ) の8品の「六根おでんコース」7,000円、季節の刺身と〆つきの「季節の特別コース」8,000円・口コミに出てくるおでん: とろろとかつお節の大根、厚揚げ、牛すじ、ちくわ、ピリ辛こんにゃく、ロールキャベツ、地鶏、はんぺん。はじめに水菜のサラダなどの小鉢、〆は大きなお揚げにうどんを詰めた「きつね」、そしてわさびやフルーツのシャーベット (2026年7月〜10月)・日本酒は Mutsu Hassen のグラス1,800円など (2026年9月)',
    neighborhood: '曽根崎新地1-6-24、暖簾のかかった一軒家。北新地駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。醤油で味をつけただしのおでん、手作りの練り物、ちくわ、〆のきつねうどん。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。おでんのだしは昆布にかつおといわし (食べログ)。食べログに「ベジタリアンメニューあり」とあるが、だしがあるのでヴィーガンには向かない。',
    notes: '[おでん・北新地、京風のおでんのコース] 北新地のおでんの一軒家で、1階はおでん鍋をかこむカウンター、2階は静かな個室が5室、接待や家族の食事に人気。だしは Hokkaido の昆布、かつお、いわしの淡い金色の京風。7,000円のコースは小鉢、器で1品ずつ出るおでん6種 (とろろとかつお節の大根と牛すじが好評)、名物の〆は大きなお揚げの中にうどんが隠れた「きつね」、そしてわさびのシャーベット。コースは税・サービス料込み、単品だとサービス料550円とお通し550円。24時まで、日曜休み。全席禁煙。',
  });
}

save();
