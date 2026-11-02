// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 8.
//   + あづま家 Azuma Ke (busy second-floor Chinese canteen at Nishinakajima-Minamigata; lunch sets with a mini ramen)
//   + 幸ちゃん 東三国店 Kou Chan Higashimikuni ten (garlic ramen by Higashi-Mikuni station, open late; no ramen block, see below)
//   + カジャナ KHAZANA (Indian restaurant of some 25–30 years with Gujarati thali)
//   + 和風もつ料理 あらた Wafu Motsu Ryori Arata (12-seat offal counter, no bookings, lines from 16:00; The Tabelog Award Bronze 2025 and 2026)
//   - skipped ライブ焼肉 てんぐ 西中島本店 27137529: chain already in data (osaka_live_yakiniku_tengu_sennichimae, ライブ焼肉 てんぐ 千日前店).
//   - skipped すしの助 西中島店 27111517: chain (other すしの助 shops at Toyosaki/Nakatsu, Kitahama and Higobashi on Tabelog and Retty; web search 2026-11-02).
//   - skipped ホルモン肉問屋 小川商店 西中島店 27077991: chain (Miyakojima, Tsuruhashi, Abiko, Sakai-Higashi, Tengo and Tennoji shops besides this one; web search 2026-11-02).
//   Chain check of the four added:
//   - Azuma Ke and Arata: one shop each (Tabelog; wafumotsu.com).
//   - Kou Chan: the shop site (ninniku-kochan.com, read 2026-11-02) links one sister shop on Tabelog (27006309), and reviews mention a main shop in
//     Higashi-Mikuni; two shops, not in data.
//   - KHAZANA: one restaurant (khazana-osaka.jp, "大阪・西中島南方の老舗インドカレー").
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Kou Chan is 42 m from osaka_tako_tako_higashimikuni (address_ja
//   "大阪府大阪市淀川区宮原2-13-14"; different street); Azuma Ke (西中島4-2-12) and Arata (4-2-8) are 28 m apart, different buildings.
//   No ramen block for Kou Chan: the shop text and 17 reviews give richness, oiliness (as lightness), firmness and aroma, but nothing on the broth's
//   clarity, so it is left off rather than guessed. Azuma Ke is a Chinese restaurant (cuisine other, no block).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27137529', 'chain already in data: ライブ焼肉 てんぐ (osaka_live_yakiniku_tengu_sennichimae)');
skip('27111517', 'chain: すしの助, with shops at Toyosaki (Nakatsu), Kitahama and Higobashi besides this one (Tabelog, Retty; web search 2026-11-02)');
skip('27077991', 'chain: ホルモン肉問屋 小川商店, shops at Miyakojima, Tsuruhashi, Abiko, Sakai-Higashi, Tengo and Tennoji besides this one (web search 2026-11-02)');

// ================================================================ あづま家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27005069/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:20', '14:30'], ['18:00', '22:00']);
  put({
    id: 'osaka_azuma_ke_nishinakajima', name: 'あづま家 (Azuma Ke)', category: 'OMNI',
    lat: 34.726787, lng: 135.49764, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. A Chinese menu of noodles, gyoza, fried rice and sauced stir-fries; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Chinese dishes with pork, chicken and seafood; even the vegetable gyoza and vegetable noodle soup are not described as meat-free.',
    hours_raw: 'Mon–Fri 11:20–14:30 and 18:00–22:00; closed Saturdays, Sundays and holidays; hours may change (Tabelog). Lunch is busy with office workers but turns over quickly (2024–2026). Reservations accepted; cash only (Tabelog). 30 seats with a counter and a tatami room; whole hire possible (Tabelog). Second floor of the building (2020, 2024 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '西中島4-2-12, 2nd floor of CSビル, one block west of the north exit of Nishinakajima-Minamigata Stn (Tabelog; November 2020)',
    cuisine: 'Neighbourhood Chinese (Tabelog: Chinese, ramen, tantanmen) · lunch sets with a mini ramen and rice: daily specials such as Sichuan mapo tofu with stir-fried vegetables, or twice-cooked pork with yurinchi (2025), stamina pork loin with shrimp tempura ¥1,050 (October 2025); five-vegetable soup noodles with mini fried rice ¥950 (February 2025, July 2026); mapo tofu rice bowl set with spice levels 1 to 4 (July 2026); curry fried rice set (September 2026); vegetable tantanmen set, miso ramen set, tantanmen set (2025–2026); hot and sour noodle soup with egg, menma, tofu, squid and chicken (June 2023, September 2026); jajangmyeon with half rice (July 2024) · evening: five-ingredient fried rice ¥800, chive gyoza ¥300, vegetable gyoza ¥350 (September 2025); small plates and a blackboard menu (2020) · homemade chili oil on the tables (2025–2026)',
    website: null, gmaps: gm('あづま家 西中島 中華'), menu_url: null,
    notes: "[Chinese · Nishinakajima-Minamigata, the office workers' Chinese canteen] A 30-seat Chinese restaurant up one flight of stairs a block from Nishinakajima-Minamigata Station, packed with office workers at lunch on weekdays and quick to turn tables. The lunch sets are the reason: a main of the day, mapo tofu, curry fried rice or a bowl of hot and sour noodles, each with a mini ramen and rice for around ¥950–1,050 (2025–2026). Flavours run light, so regulars reach for the homemade chili oil on the table. Evenings bring thin-skinned vegetable and chive gyoza and fried rice with drinks. Cash only; closed weekends.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the Tabelog listing: Chinese, ramen and tantanmen, 30 seats with a tatami room, cash only. Per reviews: "the restaurant is committed to using high-quality ingredients, avoiding chemical seasonings, and making [its] own sauces" (November 2020 review); "a favorite among office workers … it seems there are many repeat customers" (July 2024); "Even though it\'s a Chinese restaurant, [the shop] provided proper cloth napkins" (September 2025); "known for its speedy service" (July 2026).',
      philosophy: null, specialty: 'Lunch sets with a mini ramen; hot and sour noodles.',
      anecdotes: [
        { text: '"I absolutely love that the set comes with a small ramen. Sometimes, it also includes a small champon or other types of ramen." — July 2026, mapo tofu rice bowl set at spice level 3.', source: R + 'B506320343/' },
        { text: '"The chives gyoza and vegetable gyoza were as their names suggest, with the vegetables taking center stage rather than the meat, resembling the thin-skinned Utsunomiya gyoza." — September 2025.', source: R + 'B437952258/' },
        { text: '"The dishes at Azuma Ke are light, so I always feel refreshed after eating." — March 2026, vegetable tantanmen set.', source: R + 'B506320343/' },
      ],
      japanese_sources_summary: '食べログ: あづま家、中華料理・ラーメン・担々麺、大阪市淀川区西中島4-2-12 CSビル 2F、西中島南方駅から97m、月〜金11:20〜14:30、18:00〜22:00、土・日・祝休み、予約可、現金のみ、30席、座敷、貸切可。口コミ(2020年11月〜2026年9月): 西中島南方駅の北口から西へ一筋の2階、昼は会社員でいっぱいで回転が早い、ミニラーメンとごはんつきの日替わりランチ (四川麻婆豆腐と野菜炒め、回鍋肉と油淋鶏、豚ロースのスタミナ炒めとエビ天1,050円)、五目野菜の汁そばとミニチャーハン950円、麻婆丼セット (辛さ1〜4)、カレーチャーハンセット、野菜担々麺、みそラーメン、酸辣湯麺、ジャージャー麺、五目チャーハン800円、ニラ gyoza 300円、野菜 gyoza 350円、自家製ラー油、化学調味料を使わないという声 (2020年)、布のおしぼり、味はあっさり。',
      confidence: 'medium', sources: [TB, R + 'B437952258/', R + 'B467495411/', R + 'B490128149/', R + 'B500570305/', R + 'B506320343/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy lunch counter on a second floor; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-2-12 CSビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目2番12号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B500570305/', R + 'B437952258/'],
    price_note: 'Prices from 2025–2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set with mini ramen and rice', '¥1,050', 'Lunch', 'no', 'no', 'October 2025.', 'higawari_lunch'),
      it('', '', 'Five-vegetable soup noodles with mini fried rice', '¥950', 'Lunch', 'no', 'no', 'February 2025; July 2026.', 'yasai_soba_set'),
      it('', '', 'Hot and sour noodle soup', '', 'Noodles', 'no', 'no', 'September 2026.', 'suanlatang_men'),
      it('', '', 'Chive gyoza', '¥300', 'Dishes', 'no', 'no', 'September 2025.', 'nira_gyoza'),
      it('', '', 'Five-ingredient fried rice', '¥800', 'Rice', 'ask', 'no', 'September 2025.', 'gomoku_chahan'),
    ] }, {
    cuisine: '町の中華 (食べログ: 中華料理、ラーメン、担々麺)・ミニラーメンとごはんつきのランチ: 日替わり (四川麻婆豆腐と野菜炒め、回鍋肉と油淋鶏など、2025年)、豚ロースのスタミナ炒めとエビ天1,050円 (2025年10月)。五目野菜の汁そばとミニチャーハン950円 (2025年2月、2026年7月)。辛さ1〜4の麻婆丼セット (2026年7月)。カレーチャーハンセット (2026年9月)。野菜担々麺、みそラーメン、担々麺のセット (2025〜2026年)。卵、メンマ、豆腐、イカ、鶏の酸辣湯麺 (2023年6月、2026年9月)。ジャージャー麺と半ライス (2024年7月)・夜: 五目チャーハン800円、ニラ gyoza 300円、野菜 gyoza 350円 (2025年9月)。小皿料理と黒板のメニュー (2020年)・テーブルに自家製ラー油 (2025〜2026年)',
    neighborhood: '西中島4-2-12、CSビルの2階。西中島南方駅の北口から西へ一筋 (食べログ、2020年11月)',
    gf_detail: '要確認。グルテンの情報なし。麺、gyoza、チャーハン、たれをからめた炒め物などの中華で、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。豚肉、鶏肉、海鮮の中華で、野菜の gyoza や野菜の汁そばも肉なしとは書かれていない。',
    notes: '[中華・西中島南方、会社員の町の中華] 西中島南方駅から一筋の、階段を上がった2階にある30席の中華料理店で、平日の昼は会社員でいっぱい、回転も早い。お目当てはランチセットで、日替わり、麻婆豆腐、カレーチャーハン、酸辣湯麺などに、ミニラーメンとごはんがついて約950〜1,050円 (2025〜2026年)。味はあっさりめなので、常連はテーブルの自家製ラー油をたっぷり。夜は皮の薄い野菜やニラの gyoza とチャーハンでお酒を。現金のみ、土日休み。',
  });
}

// ================================================================ 幸ちゃん 東三国店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27060149/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ninniku-kochan.com/';
  const A = day(['11:00', '00:00']); const B = day(['11:00', '02:00']);
  put({
    id: 'osaka_kou_chan_higashimikuni', name: '幸ちゃん 東三国店 (Kou Chan Higashimikuni ten)', category: 'OMNI',
    lat: 34.740199, lng: 135.498965, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in tonkotsu, miso or red-miso broth; fried rice, kara-age and gyoza on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth and pork chashu; a beef paitan ramen too.',
    hours_raw: 'Sun, Mon, Wed and Thu 11:00–24:00; Fri and Sat 11:00–02:00; closed Tuesday (shop site; Tabelog agrees); open straight through the afternoon (October 2026). Reservations accepted (Tabelog). No cards or e-money; PayPay accepted (Tabelog; 2026 reviews). 28 seats at a counter and tables; non-smoking (Tabelog). Garlic is added on request (2026 reviews). Opened 13 September 2011 (Tabelog).',
    hours: { 0: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国1-33-9, by the footbridge on the south side of Higashi-Mikuni Stn, 30 seconds from exit 4 (Tabelog; March 2026); the shop site gives 東三国1丁目33-8',
    cuisine: 'Garlic ramen (shop name: にんにくラーメン) · a light tonkotsu broth simmered for hours, with the shop\'s curly noodles (shop text) · shoyu tonkotsu ramen, with or without garlic (2024–2026) · Kujo negi ramen piled with green onion ¥900 (shop) or ¥1,180 (February 2026) · red miso ramen ¥800 (shop); red miso wakame ramen ¥1,200 (March 2026); spicy miso, miso and kimchi miso ramen (2026) · kimchi chashu ramen, the regulars\' order; chashu ramen ¥1,500 (July 2026); special miso chashu ramen ¥1,550 (September 2026) · tsukemen with a rich, slightly salty dip (2025–2026) · beef paitan ramen at the top of the menu (October 2026) · sides: mini chashu rice bowl ¥350, grilled chashu bowl, mini curry ¥500, fried rice set ¥400, gyoza, kara-age (2025–2026) · home-made grilled pork (shop)',
    website: SITE, gmaps: gm('にんにくラーメン 幸ちゃん 東三国店'), menu_url: null,
    notes: "[Ramen · Higashi-Mikuni, garlic ramen by the station until late] A 28-seat ramen shop right by the footbridge at Higashi-Mikuni Station, the station-side sister of a long-running local shop, open from 11:00 to midnight and until 2 a.m. on Fridays and Saturdays. The base is a light tonkotsu with curly noodles, and the staff ask whether you want garlic: say yes for the full effect, or no for a punchy shoyu tonkotsu (2026). Regulars come back for the kimchi chashu ramen and the tsukemen's rich, salty dip, and red-miso, Kujo green-onion and spicy-miso bowls fill out a long menu. The chashu rice bowls and a mini curry are side-dish favourites. A late stop after drinks for many (2025–2026); PayPay, no cards.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the shop site (ninniku-kochan.com, read 2026-11-02): にんにくラーメン 幸ちゃん 東三国店 (reading given as ニンニクラーメン コウチャン ヒガシミクニテン); a light tonkotsu broth simmered for a long time, curly noodles, a range of miso including red miso, side dishes and courses, home-made grilled pork; open until 2:00; a sister shop linked on Tabelog. Per the shop-maintained Tabelog listing: opened 13 September 2011. Per reviews: "I\'ve been going to the main branch for about 30 years. This was my first time at the station-side location" (February 2026); "Since there are two locations in Higashi-Mikuni, there wasn\'t a long line" and "The staff was attentive and energetic" (March 2026).',
      philosophy: null, specialty: 'Garlic tonkotsu ramen; kimchi chashu ramen; tsukemen.',
      anecdotes: [
        { text: '"The tonkotsu broth was light yet flavorful, packed with umami, and the garlic really hit hard!" — October 2026, shoyu tonkotsu set with garlic.', source: R + 'B487570743/' },
        { text: '"I\'ve been captivated by the rich dipping sauce of the Tsukemen for about 10 years now, and it\'s still amazing." — November 2025.', source: R + 'B509924524/' },
        { text: '"I opted for no garlic, and it was a punchy soy sauce tonkotsu ramen." — April 2026, with a mini curry.', source: R + 'B525664748/' },
      ],
      japanese_sources_summary: '公式サイト: にんにくラーメン 幸ちゃん 東三国店 (ニンニクラーメン コウチャン ヒガシミクニテン)、大阪市淀川区東三国1丁目33-8、日・月・水・木11:00〜24:00、金・土11:00〜26:00、火曜休み、長時間煮込んだあっさりとコクのあるとんこつスープと自慢のちぢれ麺、みそや赤みそなど、ラーメン以外のサイドメニューやコース、自家製焼ブタ、系列店。食べログ (店舗会員): 東三国1-33-9、東三国駅南側の歩道橋から5秒、28席、禁煙、2011年9月13日オープン、Kujo ねぎラーメン900円、赤みそラーメン800円。口コミ(2024年6月〜2026年10月): にんにくは希望で、醤油とんこつ、あっさりなのにうまみ、キムチチャーシューメン、つけ麺の濃く少し塩辛いつけだれ、赤みそわかめラーメン1,200円、Kujo ねぎラーメン1,180円、チャーシューメン1,500円、特製みそチャーシューメン1,550円、牛白湯ラーメン、ミニチャーシュー丼350円、焼きチャーシュー丼、ミニカレー500円、チャーハンセット400円、本店に30年通う人も、PayPay 可、深夜の締めに。',
      confidence: 'medium', sources: [TB, SITE, R + 'B487570743/', R + 'B509924524/', R + 'B523284677/', R + 'B523334136/', R + 'B525664748/', R + 'B525866502/', R + 'B527266998/', R + 'B531280091/', R + 'B533808543/', R + 'B536205144/', R + 'B537771539/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; say whether you want garlic. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国1-33-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the shop site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国一丁目33番9号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B525866502/', R + 'B531280091/', R + 'B536205144/'],
    price_note: 'Two prices from the shop\'s Tabelog text; others from 2026 reviews (the Kujo negi ramen is ¥900 on Tabelog, ¥1,180 in February 2026).', last_checked: TODAY, items: [
      it('', '', 'Kujo negi ramen', '¥1,180', 'Ramen', 'no', 'no', 'February 2026 (¥900 in the Tabelog text).', 'kujo_negi'),
      it('', '', 'Red miso ramen', '¥800', 'Ramen', 'no', 'no', 'Tabelog shop text.', 'akamiso'),
      it('', '', 'Chashu ramen', '¥1,500', 'Ramen', 'no', 'no', 'July 2026.', 'chashu_ramen'),
      it('', '', 'Special miso chashu ramen', '¥1,550', 'Ramen', 'no', 'no', 'September 2026.', 'tokusei_miso_chashu'),
      it('', '', 'Mini chashu rice bowl', '¥350', 'Sides', 'ask', 'no', 'March 2026.', 'mini_chashu_don'),
    ] }, {
    cuisine: 'にんにくラーメン (店名)・長時間煮込んだあっさりのとんこつスープに自慢のちぢれ麺 (公式サイト)・醤油とんこつ、にんにくありでもなしでも (2024〜2026年)・Kujo ねぎたっぷりのKujo ねぎラーメン900円 (食べログ)、1,180円 (2026年2月)・赤みそラーメン800円 (食べログ)、赤みそわかめラーメン1,200円 (2026年3月)、辛みそ、みそ、キムチみそ (2026年)・常連の定番はキムチチャーシューメン、チャーシューメン1,500円 (2026年7月)、特製みそチャーシューメン1,550円 (2026年9月)・濃くて少し塩辛いつけだれのつけ麺 (2025〜2026年)・メニューのいちばん上は牛白湯ラーメン (2026年10月)・サイド: ミニチャーシュー丼350円、焼きチャーシュー丼、ミニカレー500円、チャーハンセット400円、gyoza、kara-age (2025〜2026年)・自家製の焼ブタ (公式サイト)',
    neighborhood: '東三国1-33-9、東三国駅南側の歩道橋のそば、4番出口から30秒 (食べログ、2026年3月)。公式サイトの住所は東三国1丁目33-8',
    gf_detail: 'グルテンフリーではありません。とんこつ、みそ、赤みそのスープに小麦の麺。サイドにチャーハン、kara-age、gyoza。',
    vegan_detail: 'ヴィーガンではありません。豚骨のスープと豚のチャーシュー。牛白湯のラーメンも。',
    notes: '[ラーメン・東三国、駅のそばの夜遅くまでのにんにくラーメン] 東三国駅の歩道橋のそばにある28席のラーメン店で、長く続く地元の店の駅前の店。11時から深夜0時まで、金・土は2時まで開いている。基本はあっさりのとんこつにちぢれ麺で、にんにくを入れるか聞かれる。入れればしっかり、なしなら力強い醤油とんこつ (2026年)。常連はキムチチャーシューメンや、濃くて塩辛いつけだれのつけ麺をくり返し頼み、赤みそ、Kujo ねぎ、辛みそなどメニューは多い。チャーシュー丼やミニカレーもサイドの人気。飲んだあとの締めに来る人も多い (2025〜2026年)。PayPay 可、カード不可。',
  });
}

// ================================================================ カジャナ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27000773/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://khazana-osaka.jp';
  const H = day(['11:00', '15:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_khazana_nishinakajima', name: 'カジャナ (KHAZANA)', category: 'OMNI',
    lat: 34.726646, lng: 135.497298, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Lunch sets come with naan (plain, garlic, onion, sesame, cheese) and rice; biryani and the Gujarati thali are rice-based, but nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options", there is a vegetable curry at lunch, and the Gujarati thali was a vegetarian meal of bean curry, stewed beans and potato subji (May 2026), but dairy (butter chicken, lassi, cheese naan) is common and nothing is described as vegan.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–22:30; closed over the New Year (Tabelog). Reservations accepted (Tabelog). JCB cards only; PayPay, Rakuten Pay, au PAY (Tabelog). 30 seats; whole hire for 20–50 (Tabelog). Smoking allowed per Tabelog, though an April 2026 diner called it non-smoking. Live music (Tabelog); belly-dance evenings (December 2025). Lunch delivery by bicycle north-west of Shin-Osaka Stn (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島4-6-30, ground floor of チサン第５新大阪, on a side street 3 min from Nishinakajima-Minamigata Stn and 5 min from Hankyu Minamikata (Tabelog; October 2024)',
    cuisine: 'Indian, including West Indian Gujarati home cooking (Tabelog; September 2025, May 2026) · lunch sets ¥880–1,500 (April 2026): KHAZANA lunch, one curry with naan ¥880, two curries ¥980 (April 2026); Indian lunch of daily curry, vegetable curry, chicken tikka, salad, saffron rice, a choice of naan and lassi ¥1,100, with a second plain naan free (September 2025; March 2026); cheese naan set ¥1,300 (July 2025); biryani lunch with lamb biryani, curry sauce, raita and a drink (May 2026); Gujarati thali lunch of bean curry, stewed beans, potato subji and more (May 2026) · thin, crisp naan (April 2026) · butter chicken, keema, green curry (2024–2026) · lassi, chai (2024–2026) · lunch delivery: curry rice ¥500, plate with sides ¥600 (April 2026)',
    website: SITE, gmaps: gm('カジャナ 西中島 インド料理'), menu_url: null,
    notes: "[Indian · Nishinakajima-Minamigata, a long-running Indian house with Gujarati food] A 30-seat Indian restaurant on a side street near Nishinakajima-Minamigata, around 25 to 30 years old by its regulars' counts (2024–2025), decorated with embroidery the owner made (May 2026) and full of incense and Indian music. Lunch is cheap and generous: two curries, chicken tikka, saffron rice and a thin, crisp naan with lassi for ¥1,100, or one curry from ¥880. What sets it apart is Gujarati food from West India, rare in Kansai: a vegetarian thali of beans and potato subji, and a lamb biryani. Indian families eat here too (April 2026). Evenings bring live music and sometimes belly dance. JCB is the only card.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who made the embroidery on the walls (May 2026 review)', 'Staff'], origin: null,
      background: 'Per the shop site (khazana-osaka.jp, read 2026-11-02): 本格インド料理カジャナ, a long-established Indian curry restaurant in Nishinakajima-Minamigata. Per the Tabelog listing: Indian, vegetarian options, live music. Per reviews: celebrating its 25th anniversary (October 2024); "Authentic Indian Restaurant Established in Osaka for 30 Years" and "I chatted quite a bit with the owner, who mentioned that [the owner] plans to return to India in a few years" (February 2025); "Homemade dishes from Gujarat in Western India are quite rare in Kansai" (September 2025); "The interior is beautifully decorated with embroidery and other crafts made by the owner" (May 2026); "The clientele consisted of local office workers and Indian families" (April 2026).',
      philosophy: null, specialty: 'Gujarati thali; Indian lunch sets with thin naan.',
      anecdotes: [
        { text: '"I wanted to fully enjoy authentic vegetarian West Indian cuisine just once, so I held back my craving for meat and ordered the Thali lunch." — May 2026.', source: R + 'B523185346/' },
        { text: '"The naan was generally thin, with some parts being crispy." — April 2026, KHAZANA lunch with two curries ¥980.', source: R + 'B250296868/' },
        { text: '"I learned that [the restaurant is] celebrating [its] 25th anniversary." — October 2024.', source: R + 'B494636813/' },
      ],
      japanese_sources_summary: '公式サイト: 本格インド料理カジャナ、大阪・西中島南方の老舗インドカレー。食べログ (店舗会員): カジャナ (KHAZANA)、インド料理・インドカレー・カレー、大阪市淀川区西中島4-6-30 チサン第５新大阪 1F、西中島南方駅から徒歩3分、毎日11:00〜15:00、17:00〜22:30、年末年始休み、予約可、カードは JCB のみ、PayPay・楽天ペイ・au PAY 可、30席、貸切20〜50名、喫煙可、ライブ演奏、ベジタリアン対応。口コミ(2024年10月〜2026年5月): 25周年 (2024年)、30年という声、ランチ880円から、カレー2種980円、インドランチ1,100円 (日替わりカレー、野菜カレー、チキンティッカ、サフランライス、選べるナン、ラッシー)、チーズナンセット1,300円、ラムのビリヤニ、Gujarat のターリー、薄くてパリッとしたナン、インドの家族連れの客、店主の刺繍の飾り、夜はベリーダンス、自転車でのランチ配達。',
      confidence: 'medium', sources: [TB, SITE, R + 'B250296868/', R + 'B494636813/', R + 'B501559663/', R + 'B501777936/', R + 'B510162783/', R + 'B516569169/', R + 'B518255179/', R + 'B519990234/', R + 'B523185346/', R + 'B523628058/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Indian families among the customers (April 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-6-30 チサン第５新大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the shop site; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目6番30号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B250296868/', R + 'B518255179/', R + 'B510162783/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'KHAZANA lunch: curry, naan, drink (two curries ¥980)', '¥880', 'Lunch', 'no', 'ask', 'April 2026.', 'khazana_lunch'),
      it('', '', 'Indian lunch: two curries, chicken tikka, saffron rice, naan, lassi', '¥1,100', 'Lunch', 'no', 'no', 'September 2025; March 2026.', 'indian_lunch'),
      it('', '', 'Cheese naan set', '¥1,300', 'Lunch', 'no', 'no', 'July 2025.', 'cheese_naan_set'),
      it('', '', 'Gujarati thali lunch (vegetarian)', '', 'Lunch', 'ask', 'ask', 'May 2026.', 'gujarati_thali'),
      it('', '', 'Lamb biryani lunch with raita', '', 'Lunch', 'ask', 'no', 'May 2026.', 'lamb_biryani'),
    ] }, {
    cuisine: 'インド料理、西インドのGujarat の家庭料理も (食べログ、2025年9月、2026年5月)・ランチは880〜1,500円 (2026年4月): カレー1種とナンの KHAZANA ランチ880円、カレー2種で980円 (2026年4月)。日替わりカレー、野菜カレー、チキンティッカ、サラダ、サフランライス、選べるナン、ラッシーのインドランチ1,100円、プレーンナン1枚おかわり無料 (2025年9月、2026年3月)。チーズナンセット1,300円 (2025年7月)。ラムのビリヤニ、カレーソース、ライタ、飲み物のビリヤニランチ (2026年5月)。豆のカレー、豆の煮込み、じゃがいものサブジなどのGujarat のターリーランチ (2026年5月)・薄くてパリッとしたナン (2026年4月)・バターチキン、キーマ、グリーンカレー (2024〜2026年)・ラッシー、チャイ (2024〜2026年)・ランチの配達: カレーライス500円、おかずつきのプレート600円 (2026年4月)',
    neighborhood: '西中島4-6-30、チサン第５新大阪の1階、西中島南方駅から3分、Hankyu Minamikata 駅から5分の路地 (食べログ、2024年10月)',
    gf_detail: '要確認。グルテンの情報なし。ランチにはナン (プレーン、ガーリック、オニオン、ごま、チーズ) とライスがつく。ビリヤニとGujarat のターリーは米が中心だが、グルテンフリーの説明はない。',
    vegan_detail: '要確認。食べログの特徴にベジタリアンメニューありとあり、ランチには野菜カレーがあり、Gujarat のターリーは豆のカレー、豆の煮込み、じゃがいものサブジのベジタリアンの食事だった (2026年5月) が、バターチキン、ラッシー、チーズナンなど乳製品が多く、ヴィーガンと書かれた料理はない。',
    notes: '[インド料理・西中島南方、Gujarat料理もある老舗] 西中島南方の近くの路地にある30席のインド料理店で、常連によると25年から30年 (2024〜2025年)。店主の手作りの刺繍が飾られ (2026年5月)、お香とインドの音楽に包まれる。ランチは安くて量が多く、カレー2種、チキンティッカ、サフランライス、薄くてパリッとしたナンにラッシーで1,100円、カレー1種なら880円から。この店ならではは、関西ではめずらしい西インドのGujarat の料理: 豆とじゃがいものサブジのベジタリアンのターリーや、ラムのビリヤニ。インドの家族連れも来る (2026年4月)。夜はライブ演奏や、ときにベリーダンスも。カードは JCB のみ。',
  });
}

// ================================================================ 和風もつ料理 あらた
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27012977/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://wafumotsu.com/';
  const H = day(['17:00', '21:30']);
  put({
    id: 'osaka_wafu_motsu_ryori_arata_nishinakajima', name: '和風もつ料理 あらた (Wafu Motsu Ryori Arata)', category: 'OMNI',
    lat: 34.726541, lng: 135.497715, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Offal stews in a Japanese broth, demi-glace tongue and tail stews, soy-glazed grilled lung and skewers; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef-offal restaurant.',
    hours_raw: '17:00–21:30, closed Monday, Sunday and holidays, with special closures at New Year; the shop asks you to check its X account for changes (shop site, read 2026-11-02). Tabelog gives Tue–Sat 17:00–20:00. No reservations (shop site; Tabelog): queue at the door, from before 16:00 for the first seating (August 2026). Two seatings of about two hours, 12 people each, with a full turnover (August 2026; December 2025). Cash only; no service charge (Tabelog). 12 counter seats (two spare chairs); non-smoking (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西中島4-2-8, basement, 3 min from the north exit of Nishinakajima-Minamigata Stn (Tabelog); the shop site gives 84 m',
    cuisine: 'Japanese-style beef offal (Tabelog: beef dishes) · The Tabelog Award Bronze 2025 and 2026 · the omakase course, about nine dishes in order, which you can stop when full (August 2026): Japanese-style motsu stew, mild and without odour; chire (spleen) sashimi or yukke; tongue stew and tail stew in a gentle demi-glace; blanched mino; smoked neck; cold tongue; grilled skewers of tongue, heart, throat; raw senmai with sesame sauce; heart sashimi with grated daikon; soy-grilled lung; and a tail soup or tail zosui to finish (2018–2026) · drinks: bottled beer ¥600, a house "special highball" ¥300, sake (August 2026) · about ¥5,000–6,300 a head with drinks (2024–2026)',
    website: SITE, gmaps: gm('和風もつ料理 あらた 西中島'), menu_url: null,
    notes: "[Offal · Nishinakajima-Minamigata, the beef-offal counter people queue for] A 12-seat basement counter three minutes from Nishinakajima-Minamigata, winner of The Tabelog Award Bronze in 2025 and 2026, where there are no bookings and the line starts before 16:00 for a 17:00 opening. Take the omakase: about nine dishes of spotless beef offal in order, from a mild Japanese-style motsu stew and spleen sashimi through tongue and tail stews in a gentle demi-glace, blanched mino, smoked neck, raw senmai with sesame sauce and heart sashimi, to a tail soup or zosui. The owner explains each dish (August 2026). With a beer and a few of the house ¥300 highballs it comes to about ¥5,000–6,300 (2024–2026). Two seatings a night, cash only; check the shop's X account before going.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who explains each dish (August 2026 review)', 'Counter staff'], origin: null,
      background: 'Per the shop site (wafumotsu.com, read 2026-11-02): 和風もつ料理 あらた, "スキー大好き人間の集まるお店" (a shop where ski lovers gather); no reservations; 17:00–21:30; closed Monday, Sunday and holidays; updates on X (@Arata_ShinOsaka). Per the Tabelog listing: The Tabelog Award 2025 and 2026 Bronze; 12 counter seats; cash only. Per reviews: "The owner and staff quickly serve up various motsu dishes" in a counter-only room like a Showa-era izakaya (January 2020); "The owner explained the dishes as they were served, creating a warm and pleasant atmosphere" (August 2026); the seating changed to full turnovers (December 2025).',
      philosophy: null, specialty: 'Beef-offal omakase; Japanese-style motsu stew.',
      anecdotes: [
        { text: '"On a weekday, I arrived at 3:40 PM, aiming for the first seating. Since I was at the front of the line, I sat down and waited for the opening." — August 2026, omakase of 9 dishes.', source: R + 'B534369697/' },
        { text: '"These aren\'t your typical whiskey highballs; they have a unique flavor and an impressive surface tension." — December 2025.', source: R + 'B519251536/' },
        { text: '"The raw Omasum with sesame sauce was outstanding; personally, I found the stew and this dish to be the top two highlights." — August 2026.', source: R + 'B534369697/' },
      ],
      japanese_sources_summary: '公式サイト: 和風もつ料理 あらた、スキー大好き人間の集まるお店、大阪市淀川区西中島4-2-8-B1F、予約は承っておりません、西中島南方駅から84m、17:00〜21:30、月・日・祝休み、年末年始ほか特別休業、変更は X で確認。食べログ: 牛料理、火〜土17:00〜20:00、予約不可、現金のみ、サービス料なし、カウンター12席、禁煙、The Tabelog Award 2025・2026 Bronze。口コミ(2018年〜2026年): 開店前から行列 (16時前から)、2時間ずつの2回転、おまかせ約9品、和風のもつ煮込み、チレの刺身やユッケ、タンシチューとテールシチュー (やさしいデミグラス)、湯がいたミノ、ネックの燻製、冷たいタン、串焼き、生センマイのごまだれ、ハツ刺しと大根おろし、肺の照り焼き、締めはテールのスープか雑炊、瓶ビール600円、特製ハイボール300円、ひとり約5,000〜6,300円、店主が料理を説明。',
      confidence: 'high', sources: [TB, SITE, R + 'B127545538/', R + 'B189010465/', R + 'B519251536/', R + 'B534139766/', R + 'B534369697/', R + 'B534564182/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue at the door; one omakase course explained in Japanese (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-2-8 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (Award Bronze 2026) and the shop site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目2番8号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534369697/', R + 'B189010465/'],
    price_note: 'Drink prices and the bill from an August 2026 review; the omakase price is not stated separately.', last_checked: TODAY, items: [
      it('', '', 'Omakase course of beef offal (about nine dishes)', '', 'Course', 'ask', 'no', 'August 2026.', 'omakase'),
      it('', '', 'Japanese-style motsu stew', '', 'Dishes', 'ask', 'no', '2018–2026.', 'motsu_nikomi'),
      it('', '', 'Raw senmai with sesame sauce', '', 'Dishes', 'ask', 'no', 'August 2026.', 'nama_senmai'),
      it('', '', 'House special highball', '¥300', 'Drinks', '', '', 'August 2026.', 'special_highball'),
      it('', '', 'Bottled beer', '¥600', 'Drinks', '', '', 'August 2026.', 'bin_beer'),
    ] }, {
    cuisine: '和風の牛もつ料理 (食べログ: 牛料理)・The Tabelog Award 2025、2026 Bronze・おまかせのコース、約9品を順番に、満腹ならそこで止めてよい (2026年8月): くさみのないやさしい和風のもつ煮込み。チレの刺身かユッケ。やさしいデミグラスのタンシチューとテールシチュー。湯がいたミノ。ネックの燻製。冷たいタン。タン、ハツ、のどの串焼き。ごまだれの生センマイ。大根おろしのハツ刺し。肺の照り焼き。締めはテールのスープか雑炊 (2018〜2026年)・飲み物: 瓶ビール600円、店の特製ハイボール300円、日本酒 (2026年8月)・飲んでひとり約5,000〜6,300円 (2024〜2026年)',
    neighborhood: '西中島4-2-8、地下1階。西中島南方駅の北口から3分 (食べログ)。公式サイトでは84m',
    gf_detail: '要確認。グルテンの情報なし。和風のだしのもつ煮込み、デミグラスのタンシチューとテールシチュー、照り焼きの肺、串焼き。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。牛もつの店。',
    notes: '[もつ料理・西中島南方、行列のできる牛もつのカウンター] 西中島南方から3分、地下の12席のカウンターで、The Tabelog Award 2025、2026 Bronze。予約はできず、17時の開店に16時前から列ができる。頼むならおまかせ: くさみのない牛もつ約9品が順番に出て、やさしい和風のもつ煮込みとチレの刺身から、やさしいデミグラスのタンシチューとテールシチュー、湯がいたミノ、ネックの燻製、ごまだれの生センマイ、ハツ刺し、締めはテールのスープか雑炊。店主がひと皿ずつ説明してくれる (2026年8月)。ビールと300円の店の特製ハイボールを何杯か飲んで約5,000〜6,300円 (2024〜2026年)。一晩2回転、現金のみ。行く前に店の X を確認。',
  });
}

save();
