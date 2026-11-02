// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 10.
//   + 台湾料理 営業中 東三国店 Taiwanese Eigyochu Higashimikuni ten (big Taiwanese-Chinese diner at Higashimikuni Station, opened 2024)
//   + 四川辣麺 西中島店 Sichuan Ramen Nishinakajima ten (Sichuan tantanmen and mapo noodles, open to 1–3 am)
//   + Hortensia Bistro (French bistro with game dishes by Higashimikuni; lunch courses from ¥3,000)
//   + 松吟庵 東三国店 Shogin An Higashimikuni ten (ju-wari soba, beef tongue and sake in a renovated house)
//   Lane check: every id above is even. Taken in queue order (nearest first); no skips this batch.
//   Chain check: Eigyochu has a 福島店 in the osaka-kita crawl (two shops, and a web search 2026-11-02 found no more). Sichuan Ramen
//   once had a Hankyu Sanbangai shop (October 2026 review) and names no other current branch. Hortensia names no other shop.
//   Shogin An carries "東三国店" but no other 松吟庵 appears in any crawl or source read. None is in data/osaka.json (grep by id,
//   name and address, 2026-11-02).
//   Sichuan Ramen is a Sichuan noodle house (tantanmen, mapo noodles): cuisine other, no ramen block, per the lesson on Chinese
//   noodle shops.
//   open_late follows Greg's 2026-11-02 ruling: true when the shop closes after 22:00.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 台湾料理 営業中 東三国店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27141114/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_eigyochu_higashimikuni', name: '台湾料理 営業中 東三国店 (Taiwanese Eigyochu Higashimikuni ten)', category: 'OMNI',
    lat: 34.740295, lng: 135.498117, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lunch sets come with kara-age, and Taiwanese ramen, mapo noodles, fried noodles and gyoza are wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Taiwanese-Chinese diner of pork, chicken and shrimp dishes; mapo tofu with minced meat.',
    hours_raw: 'Daily including holidays 11:00–15:00 (last order 14:30) and 17:00–23:00 (last order 22:30) (Tabelog). Lunch specials are cash or PayPay only; cards (VISA, Master) are accepted for à la carte and courses (Tabelog). Reservations accepted, also for lunch (2026). 82 seats on Tabelog, tables plus private and semi-private rooms, groups up to 100 (Tabelog); a 2026 diner counted about 48 at the tables. Smoking allowed at dinner, ask about lunch (Tabelog); smoke bothered an October 2026 diner. Self-service coffee after lunch (May and August 2026). Opened 22 March 2024 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国4-1-21 — about 1 min from Exit 5 of Higashimikuni Stn, at the foot of the station stairs (Tabelog; June and October 2026)',
    cuisine: 'Taiwanese-Chinese diner (Tabelog) · lunch sets around ¥950 with unlimited rice and soup (2026): five-ingredient fried noodles set ¥950, mapo noodles ¥780 (October 2026); mapo tofu set, char-ramen set with Taiwanese ramen, five-ingredient ankake fried noodles (August 2026); happosai set with kara-age (May 2026); shrimp chili set (July 2026); fried rice set, fried rice and ramen set (July and August 2026) · ¥1,280 set of mapo tofu, liver and chives (or green-pepper beef, or black-vinegar sweet and sour pork), soup, rice and almond jelly (October 2026) · "After Work Set": a drink, grilled gyoza and one appetiser ¥1,180 (September 2026) · all-you-can-drink ¥3,580 (June 2026); all-you-can-eat courses with many fried-rice dishes (July 2026) · Taiwanese kara-age, steamed chicken with sauce, gyoza, shrimp chili, almond tofu (2026)',
    website: null, gmaps: gm('台湾料理 営業中 東三国店'), menu_url: null,
    notes: "[Taiwanese-Chinese · Higashimikuni, a big diner at the station stairs] A large Taiwanese-style Chinese restaurant right at the foot of the Higashimikuni Station stairs, open since 2024 every day from 11:00 to 23:00, with tables, private rooms and courses for groups. Lunch is the bargain: a set around ¥950 of mapo tofu, Taiwanese ramen, fried noodles or fried rice with kara-age, unlimited rice and soup, and self-service coffee after (2026); it fills with office workers by 12:20. In the evening there is a ¥1,180 After Work Set of a drink, gyoza and a starter, all-you-can-drink for ¥3,580 and all-you-can-eat courses (2026). Portions are generous. Lunch specials are cash or PayPay only. Smoking is allowed at dinner.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog beyond payment notes; opened 22 March 2024 (Tabelog). The osaka-kita crawl also lists 台湾料理 営業中 福島店.', philosophy: null, specialty: 'Lunch sets with unlimited rice; mapo tofu; all-you-can-eat courses.',
      anecdotes: [
        { text: '"They offer self-service coffee after the meal, with both hot and iced options available, which was a nice touch." — May 2026, the happosai set.', source: R + 'B529228093/' },
        { text: '"For JPY 1,280, you get Mapo Tofu, stir-fried liver with garlic chives, soup, rice, and almond jelly!" — October 2026.', source: R + 'B538161947/' },
        { text: '"A drink (like draft beer) + grilled gyoza + one appetizer for just JPY 1,180!" — September 2026, the After Work Set.', source: R + 'B535263217/' },
      ],
      japanese_sources_summary: '食べログ: 台湾料理 営業中 東三国店、台湾料理・中華料理・ラーメン、大阪市淀川区東三国4-1-21、東三国駅5番出口から徒歩約1分、毎日11:00〜15:00 (L.O.14:30)、17:00〜23:00 (L.O.22:30)、昼の定食は現金か PayPay のみ、単品とコースはカード (VISA、Master) 可、予約可、82席 (テーブル、個室、半個室)、100名まで、夜は喫煙可、2024年3月22日オープン。口コミ(2025年5月〜2026年10月): 駅の階段の下、昼の定食は約950円でごはんとスープおかわり自由、五目焼きそばの定食950円、麻婆麺780円、麻婆豆腐の定食、台湾ラーメンとチャーハンのセット、五目あんかけ焼きそば、Hachibao-sai の定食、エビチリの定食、チャーハンのセット、食後のコーヒーはセルフ、麻婆豆腐とレバニラのセット1,280円、ドリンクと焼き gyoza とつまみのセット1,180円、飲み放題3,580円、チャーハンもある食べ放題、台湾風の kara-age、蒸し鶏、杏仁豆腐、たばこの煙が気になるという声も。',
      confidence: 'medium', sources: [TB, R + 'B488343543/', R + 'B489096582/', R + 'B529228093/', R + 'B530908345/', R + 'B531100905/', R + 'B531956964/', R + 'B533048002/', R + 'B533055947/', R + 'B535263217/', R + 'B538161947/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A large diner with set menus and group courses. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-1-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目1番21号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B488343543/', R + 'B538161947/', R + 'B535263217/', R + 'B530908345/'],
    price_note: 'Prices from 2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Mapo noodles', '¥780', 'Noodles', 'no', 'no', 'October 2026.', 'mapo_men'),
      it('', '', 'Five-ingredient fried noodles set', '¥950', 'Lunch', 'no', 'no', 'October 2026.', 'gomoku_yakisoba_set'),
      it('', '', 'Mapo tofu with liver and chives, soup, rice and almond jelly', '¥1,280', 'Sets', 'ask', 'no', 'October 2026.', 'mapo_reba_set'),
      it('', '', 'After Work Set: drink, grilled gyoza, appetiser', '¥1,180', 'Evening', 'no', 'no', 'September 2026.', 'after_work_set'),
      it('', '', 'All-you-can-drink', '¥3,580', 'Evening', '', '', 'June 2026.', 'nomihodai'),
    ] }, {
    cuisine: '台湾風の中華 (食べログ)・昼の定食は約950円で、ごはんとスープはおかわり自由 (2026年): 五目焼きそばの定食950円、麻婆麺780円 (2026年10月)。麻婆豆腐の定食、台湾ラーメンとチャーハンのセット、五目あんかけ焼きそば (2026年8月)。kara-age つきの Hachibao-sai の定食 (2026年5月)。エビチリの定食 (2026年7月)。チャーハンのセット、チャーハンとラーメンのセット (2026年7月と8月)・麻婆豆腐、レバニラ (またはピーマンと牛肉の炒め物、黒酢の酢豚)、スープ、ごはん、杏仁豆腐のセット1,280円 (2026年10月)・ドリンク、焼き gyoza、つまみ1品の「After Work Set」1,180円 (2026年9月)・飲み放題3,580円 (2026年6月)。チャーハンの種類も多い食べ放題のコース (2026年7月)・台湾風の kara-age、たれの蒸し鶏、gyoza、エビチリ、杏仁豆腐 (2026年)',
    neighborhood: '東三国4-1-21。東三国駅5番出口から約1分、駅の階段を降りたところ (食べログ、2026年6月と10月)',
    gf_detail: 'グルテンフリーではありません。昼の定食には kara-age がつき、台湾ラーメン、麻婆麺、焼きそば、gyoza は小麦。',
    vegan_detail: 'ヴィーガンではありません。豚、鶏、エビの台湾風の中華で、麻婆豆腐にはひき肉。',
    notes: '[台湾料理・東三国、駅の階段の下の大きな中華] 東三国駅の階段を降りてすぐの大きな台湾風の中華で、2024年から毎日11時から23時まで。テーブル、個室、宴会のコースもある。お得なのは昼: 麻婆豆腐、台湾ラーメン、焼きそば、チャーハンに kara-age がついた約950円の定食で、ごはんとスープはおかわり自由、食後のコーヒーはセルフ (2026年)。12時20分には会社員で満席に。夜はドリンク、gyoza、つまみの1,180円の After Work Set、飲み放題3,580円、食べ放題のコース (2026年)。量は多め。昼の定食は現金か PayPay のみ。夜は喫煙可。',
  });
}

// ================================================================ 四川辣麺 西中島店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27003568/'; const R = TB + 'dtlrvwlst/';
  const MW = day(['11:30', '14:30'], ['18:30', '02:00']); const TS = day(['11:30', '14:30'], ['18:30', '03:00']); const SU = day(['11:30', '14:30'], ['18:30', '01:00']);
  put({
    id: 'osaka_sichuan_ramen_nishinakajima', name: '四川辣麺 西中島店 (Sichuan Ramen Nishinakajima ten)', category: 'OMNI',
    lat: 34.726826, lng: 135.499936, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in the tantanmen and mapo noodles; yurinchi is battered.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tantanmen with braised pork, mapo tofu with minced meat.',
    hours_raw: 'Mon–Wed 11:30–14:30 and 18:30–02:00; Thu–Sat 11:30–14:30 and 18:30–03:00; Sun 11:30–14:30 and 18:30–01:00; open every day; hours may change (Tabelog). No reservations; no cards or e-money; PayPay accepted (Tabelog). 28 seats at counter and tables; smoking allowed (Tabelog). About 60% full at 21:00 on a Wednesday (September 2026). Follow the shop on Instagram for free rice or frozen lychee (October 2026).',
    hours: { 0: MW, 1: MW, 2: MW, 3: TS, 4: TS, 5: TS, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-13-8 — 2–3 min from the north exit of Nishinakajima-Minamigata Stn, 3–4 min from Hankyu Minamikata (Tabelog)',
    cuisine: 'Sichuan noodles, mild-leaning for local tastes (Tabelog) · tantanmen in an original or a new soup: a light, mildly spicy broth with medium-thin wavy noodles and pork-belly chashu (September 2026); the "Sichuan street style" new flavour with a creamy sesame broth and braised pork (October 2026) · mapo noodles with medium-thick straight noodles, spice level normal, a little extra or extra, with rice to finish, ¥1,250 (August and October 2026) · mapo tofu rice, mild and thick (September 2026) · hot and sour noodles (September 2026) · yurinchi (September 2026) · table condiments: Sichuan pepper, chili oil, pickles, ground sesame, fried garlic, lychee vinegar (September and October 2026) · draft beer ¥480 (August 2026)',
    website: null, gmaps: gm('四川辣麺 西中島店'), menu_url: null,
    notes: "[Sichuan noodles · Nishinakajima, tantanmen into the small hours] A dark-walled Sichuan noodle shop two minutes from Nishinakajima-Minamigata, open for lunch and again from 18:30 until 1 to 3 am every night, so it fills with late diners (September 2026). The tantanmen comes in an original, lighter version and a creamy-sesame \"Sichuan street style\", both with tender braised pork; the mapo noodles are the hotter choice, numbing with Sichuan pepper, with rice to drop into the last of the sauce (2026). A row of condiments, from chili oil and Sichuan pepper to lychee vinegar, lets you set the heat. Lunch can feel rushed (October 2026). Smoking is allowed. A fan from its old Hankyu Sanbangai days came back for it in October 2026.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the Tabelog listing: authentic Sichuan dishes in a casual setting, the menu in Chinese characters with Japanese descriptions and flavours adjusted to local tastes. An October 2026 diner "used to frequent Sichuan Ramen when it had a location in Hankyu Sanbangai".', philosophy: null, specialty: 'Tantanmen; mapo noodles.',
      anecdotes: [
        { text: '"Located in the bustling area of Nishinakajima Minamikata, it stays open late, and even at this hour, the place was about 60% full." — September 2026, around 21:00 on a Wednesday.', source: R + 'B534858286/' },
        { text: '"When I added the leftover rice to the Mapo soup, it turned into a delicious Mapo rice bowl, allowing me to savor every last drop." — August 2026, the mapo noodles for JPY 1,250.', source: R + 'B535123814/' },
        { text: '"As a special for following on Instagram, I received frozen lychee, which was perfect for refreshing my palate after the spicy meal." — October 2026.', source: R + 'B537037404/' },
      ],
      japanese_sources_summary: '食べログ: 四川辣麺 西中島店、担々麺・ラーメン、大阪市淀川区西中島3-13-8、Midosuji 線 西中島南方駅北口から徒歩2〜3分、阪急 南方駅から3〜4分、月〜水11:30〜14:30、18:30〜翌2:00、木〜土11:30〜14:30、18:30〜翌3:00、日11:30〜14:30、18:30〜翌1:00、年中無休、予約不可、カード・電子マネー不可、PayPay 可、28席、喫煙可。店の紹介: 気軽に本場の四川料理を、漢字のメニューに日本語の説明、日本人向けの味。口コミ(2026年8月〜10月): 担々麺はオリジナルと新しい味から、あっさりで辛さはひかえめ、中細のちぢれ麺、豚バラのチャーシュー、「Sichuan Street Style」の新しい味はクリーミーなごま、麻婆麺1,250円 (辛さを3段階から、締めのごはんつき)、麻婆ごはん、酸辣湯麺、Yurinchi、卓上に花椒、ラー油、漬物、すりごま、揚げにんにく、ライチの酢、Instagram のフォローでごはんか冷凍ライチ、夜21時でも6割の客、昼はあわただしいという声、Hankyu Sanbangai にあった店のファン。',
      confidence: 'medium', sources: [TB, R + 'B534858286/', R + 'B535123814/', R + 'B535591820/', R + 'B535624913/', R + 'B535917435/', R + 'B536653671/', R + 'B537037404/', R + 'B537454590/', R + 'B537838728/', R + 'B538338235/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu in Chinese characters with Japanese descriptions (Tabelog); spice levels to choose. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-13-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目13番8号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535123814/', R + 'B536653671/', R + 'B534858286/'],
    price_note: 'Prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mapo noodles with rice to finish', '¥1,250', 'Noodles', 'no', 'no', 'August and October 2026.', 'mapo_men'),
      it('', '', 'Chashu tantanmen (original)', '', 'Noodles', 'no', 'no', 'September 2026.', 'chashu_tantan'),
      it('', '', 'Sichuan street-style tantanmen (new flavour)', '', 'Noodles', 'no', 'no', 'October 2026.', 'street_tantan'),
      it('', '', 'Mapo tofu rice', '', 'Rice', 'ask', 'no', 'September 2026.', 'mapo_don'),
    ] }, {
    cuisine: '四川の麺、地元の舌に合わせてやや控えめ (食べログ)・担々麺はオリジナルと新しい味から: あっさりして辛さひかえめのスープに中細のちぢれ麺と豚バラのチャーシュー (2026年9月)。「Sichuan Street Style」の新しい味はクリーミーなごまのスープと煮豚 (2026年10月)・麻婆麺は中太のストレート麺、辛さはふつう、少し多め、多めから、締めのごはんつきで1,250円 (2026年8月と10月)・とろみの強い、辛さひかえめの麻婆ごはん (2026年9月)・酸辣湯麺 (2026年9月)・Yurinchi (2026年9月)・卓上に花椒、ラー油、漬物、すりごま、揚げにんにく、ライチの酢 (2026年9月と10月)・生ビール中480円 (2026年8月)',
    neighborhood: '西中島3-13-8。西中島南方駅北口から徒歩2〜3分、阪急 南方駅から3〜4分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。担々麺と麻婆麺は小麦の麺で、Yurinchi は衣がついている。',
    vegan_detail: 'ヴィーガンではありません。担々麺には煮豚、麻婆豆腐にはひき肉。',
    notes: '[四川の麺・西中島、深夜までの担々麺] 西中島南方駅から2分の、暗めの店内の四川の麺の店で、昼と、夜は18時半から毎晩1時から3時まで開いていて、遅い時間も客が多い (2026年9月)。担々麺は、あっさりしたオリジナルと、クリーミーなごまの「Sichuan Street Style」があり、どちらもやわらかい煮豚がのる。もっと辛いのは麻婆麺で、花椒がしびれ、残ったソースにごはんを入れて締める (2026年)。ラー油、花椒からライチの酢まで、卓上の調味料で辛さを調整できる。昼はあわただしく感じた人も (2026年10月)。喫煙可。Hankyu Sanbangai にあったころのファンが2026年10月に食べに来た。',
  });
}

// ================================================================ Hortensia Bistro
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27116236/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:30'], ['17:30', '22:30']); const D = day(['17:30', '22:30']);
  put({
    id: 'osaka_hortensia_bistro_higashimikuni', name: 'Hortensia Bistro', category: 'OMNI',
    lat: 34.740341, lng: 135.497202, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include bread, a hamburg steak, fried sea bream and pastry desserts; one petit four is a rice-flour canelé (May 2026), but nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of game, meat and fish with butter, cream and egg dishes.',
    hours_raw: 'Tue, Thu, Fri, Sat, Sun and holidays 11:30–14:30 (last order 13:30; Fri food 13:00) and 17:30–22:30 (last food order 20:30, drinks 22:00); Wed dinner only, 17:30–22:30, booking by phone; closed Monday (Tabelog). Reservations accepted; groups of five or more by phone; a booking lapses 30 minutes after the time without notice (Tabelog). Often fully booked at weekend and holiday lunches (March and May 2026). Preschool children welcome at lunch, not at dinner (Tabelog). One drink each, or a ¥1,000 seat charge (Tabelog\'s original text: ワンドリンク制にしております。ドリンク飲まれない方は席料1000円お願いしております。). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay (Tabelog). 20 seats: 8 on sofas, 8 at tables, 4 at the counter; an open terrace; non-smoking; wheelchair access; one parking space if free, by arrangement (Tabelog).',
    hours: { 1: LD, 2: D, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国4-15-12, ground floor of シオザキビル — 2 min from Exit 5 of Higashimikuni Stn, 10 min from Shin-Osaka (Tabelog)',
    cuisine: 'French bistro, known for game (December 2025) · lunch course ¥3,000: assorted appetisers, soup (turnip or cauliflower), a main such as the house hamburg steak, grilled pork loin, fried sea bream or duck confit, assorted desserts, coffee (March and May 2026); a canelé with dessert for those who book (March 2026) · full lunch course with fish and meat ¥5,500, e.g. low-temperature Aomori pork (September 2026) · "Menu Hortensia" ¥8,800: truffled potato-salad amuse, two chosen starters (asparagus sauvage salad with rillettes, Dutch white asparagus with prosciutto and onsen egg), chicken consommé, grilled ayu, a main such as Kagoshima anaguma (badger) royale with foie gras (+¥2,200) or Spanish mountain-quail ballotine (+¥550), and petits fours including a rice-flour canelé (May 2026) · rabbit wrapped around angel shrimp (September 2026) · Earl Grey crème brûlée (May 2026) · a wine list to match (2023–2026) · French osechi at New Year (December 2025)',
    website: null, gmaps: gm('Hortensia Bistro 東三国'), menu_url: null,
    notes: "[French · Higashimikuni, a bistro with game on the menu] A small, bright French bistro two minutes from Higashimikuni Station, with sofa seats and a little terrace, known for its game: Kagoshima badger with foie gras, Spanish mountain quail, rabbit wrapped around shrimp in the ¥8,800 Menu Hortensia (May and September 2026). Lunch is the easier way in, a ¥3,000 course of a generous appetiser platter, soup, a main such as the house hamburg steak or grilled pork, and a plate of small desserts, and it is often fully booked, so reserve (2026). Dishes are explained with care, and there is a good wine list; one drink each or a ¥1,000 seat charge. No preschool children at dinner. Closed Monday; Wednesday dinner only.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) and floor staff'], origin: null, background: 'No shop description on Tabelog. Reviewers: "a French restaurant by a famous chef" (October 2023); "This bistro is known for its game meat" (December 2025); the manager and staff were friendly and warm (May 2026); dishes and drinks are explained thoroughly (September 2026). It also makes a French osechi for New Year (December 2025).', philosophy: null, specialty: 'Game courses; lunch course with hamburg steak.',
      anecdotes: [
        { text: '"The Assorted Appetizers were so generous that I was completely satisfied just with that!" — March 2026, a course with the fish main.', source: R + 'B525390953/' },
        { text: '"Kagoshima Prefecture Anaguma Royale with Foie Gras" (+JPY 2,200) — May 2026, the Menu Hortensia for JPY 8,800.', source: R + 'B527345335/' },
        { text: '"I honestly didn\'t have high expectations for the desserts, but I was pleasantly surprised by the assortment of petite desserts!" — May 2026, the JPY 3,000 lunch course.', source: R + 'B529246302/' },
      ],
      japanese_sources_summary: '食べログ: Hortensia Bistro、ビストロ・フレンチ・ワインバー、大阪市淀川区東三国4-15-12 シオザキビル 1F、東三国駅5番出口から徒歩2分、新大阪から10分、火・木・金・土・日・祝11:30〜14:30、17:30〜22:30、水曜は夜だけ (電話で予約)、月曜休み、5名以上は電話で、連絡なく30分遅れるとキャンセル、未就学児は昼のみ、ワンドリンク制 (飲まない人は席料1,000円)、カード・PayPay 可、20席 (ソファ8、テーブル8、カウンター4)、オープンテラス、禁煙、車いす可。口コミ(2023年10月〜2026年9月): ジビエで知られるビストロ、昼のコース3,000円 (前菜の盛り合わせ、かぶやカリフラワーのスープ、ハンバーグ、豚ロース、鯛のフリット、鴨のコンフィ、デザートの盛り合わせ、コーヒー)、予約でカヌレのサービス、魚と肉の昼のコース5,500円 (Aomori の豚の低温調理)、「Menu Hortensia」8,800円 (トリュフのポテトサラダ、アスパラ・ソヴァージュとリエット、白アスパラと生ハムと温泉卵、鶏のコンソメ、鮎、Kagoshima のアナグマとフォアグラ、スペインの山うずら、米粉のカヌレ)、エビをうさぎで巻いた一皿、アールグレイのクレームブリュレ、ワイン、フレンチのおせち、週末の昼は予約でいっぱい、ていねいな説明。',
      confidence: 'medium', sources: [TB, R + 'B477826952/', R + 'B523883100/', R + 'B523907537/', R + 'B525390953/', R + 'B527345335/', R + 'B527680426/', R + 'B528801475/', R + 'B529246302/', R + 'B536604790/', R + 'B537908534/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses explained dish by dish; book ahead, by phone for five or more. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-15-12 シオザキビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目15番12号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529246302/', R + 'B477826952/', R + 'B527345335/'],
    price_note: 'Course prices from 2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (appetisers, soup, main, desserts, coffee)', '¥3,000', 'Lunch', 'ask', 'no', 'March and May 2026.', 'lunch_3000'),
      it('', '', 'Full lunch course with fish and meat', '¥5,500', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_5500'),
      it('', '', 'Menu Hortensia (dinner course)', '¥8,800', 'Dinner', 'ask', 'no', 'May 2026; game mains with supplements.', 'menu_hortensia'),
      it('', '', 'Kagoshima anaguma royale with foie gras (supplement)', '¥2,200', 'Dinner', 'ask', 'no', 'May 2026.', 'anaguma'),
    ] }, {
    cuisine: 'ジビエで知られるフレンチのビストロ (2025年12月)・昼のコース3,000円: 前菜の盛り合わせ、スープ (かぶ、カリフラワー)、メインはハンバーグ、豚ロースのグリル、鯛のフリット、鴨のコンフィなど、デザートの盛り合わせ、コーヒー (2026年3月と5月)。予約するとデザートにカヌレがつく (2026年3月)・魚と肉の昼のフルコース5,500円、Aomori の豚の低温調理など (2026年9月)・「Menu Hortensia」8,800円: トリュフの香るポテトサラダ、選べる前菜2品 (アスパラ・ソヴァージュとリエットのサラダ、オランダの白アスパラと生ハムと温泉卵)、鶏のコンソメ、鮎のグリル、メインは Kagoshima のアナグマのロワイヤルとフォアグラ (2,200円増し) やスペインの山うずらのバロティーヌ (550円増し)、米粉のカヌレなどの小菓子 (2026年5月)・エビをうさぎで巻いた一皿 (2026年9月)・アールグレイのクレームブリュレ (2026年5月)・料理に合うワイン (2023〜2026年)・お正月にはフレンチのおせち (2025年12月)',
    neighborhood: '東三国4-15-12、シオザキビルの1階。東三国駅5番出口から徒歩2分、新大阪から10分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。コースにはパン、ハンバーグ、鯛のフリット、焼き菓子のデザートがある。小菓子のカヌレは米粉 (2026年5月) だが、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。ジビエ、肉、魚のコースで、バター、クリーム、卵の料理。',
    notes: '[フレンチ・東三国、ジビエのあるビストロ] 東三国駅から2分の小さな明るいフレンチのビストロで、ソファ席と小さなテラスがある。ジビエで知られ、8,800円の Menu Hortensia では Kagoshima のアナグマとフォアグラ、スペインの山うずら、エビをうさぎで巻いた一皿など (2026年5月と9月)。気軽なのは昼で、たっぷりの前菜の盛り合わせ、スープ、自慢のハンバーグや豚のグリルなどのメイン、小さなデザートの盛り合わせの3,000円のコース。よく予約で満席になるので予約を (2026年)。料理はていねいに説明してくれて、ワインもそろう。ひとり1ドリンク、飲まないなら席料1,000円。夜は未就学児不可。月曜休み、水曜は夜だけ。',
  });
}

// ================================================================ 松吟庵 東三国店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27076204/'; const R = TB + 'dtlrvwlst/';
  const MW = day(['11:00', '14:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_shoginan_higashimikuni', name: '松吟庵 東三国店 (Shogin An Higashimikuni ten)', category: 'OMNI',
    lat: 34.740258, lng: 135.499329, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is ju-wari, all buckwheat (April 2026), and one diner ate it with salt; but the dipping sauce is soy-based, and tempura, chicken nanban and fried dishes share the kitchen. Ask before ordering.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba sauce and kayaku rice on dashi, beef tongue, fish and egg dishes.',
    hours_raw: 'Mon–Wed 11:00–14:00 and 17:30–23:00 (last order 22:30); Thu 17:30–23:00; Fri 11:00–14:00 and 17:30–24:00 (last order 23:30); Sat 11:00–14:30 and 17:30–23:00; Sun 11:00–15:00 and 17:30–22:00; holidays 11:00–22:30; until sold out; closing days not fixed (Tabelog). Reservations accepted; call with any requests (Tabelog). Cards (VISA, Master, JCB, Diners), e-money and QR (Tabelog). 20 seats: a counter downstairs and two tables of six upstairs, a private room for eight or more (Tabelog); order by QR code (June 2026). Non-smoking (Tabelog). Lines at weekday lunch (October 2026).',
    hours: { 0: MW, 1: MW, 2: MW, 3: day(['17:30', '23:00']), 4: day(['11:00', '14:00'], ['17:30', '00:00']), 5: day(['11:00', '14:30'], ['17:30', '23:00']), 6: day(['11:00', '15:00'], ['17:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国1-33-21 — 2 min from Exit 4 of Higashimikuni Stn (Tabelog); down a narrow lane of houses by a cleaner\'s, in a renovated old house marked "Ju-wari Soba" (April 2026)',
    cuisine: 'Ju-wari (all-buckwheat) soba, beef tongue and sake (2025–2026) · lunch sets with cold or hot ju-wari soba: daily set ¥1,300 with kayaku rice, dashimaki and hirekatsu with grated daikon ponzu (April 2026); daily set with nikujaga, kayaku rice and dashimaki; tempura and zaru soba; maki sushi, saba sushi and zaru soba (August 2026); chicken tempura and dashimaki (October 2026) · evening: thick-cut grilled beef tongue, dashimaki, bonito tataki, chicken nanban, grilled eggplant (May 2026); sweet simmered herring, maitake tempura, pork seiro soba (June 2026); hamo in season (May 2026); fried oysters, fried taro, tempura platter, oni-oroshi bukkake soba (August 2026); fresh oysters with ponzu, shabu-shabu salad (March 2025) · sake list with Juyondai junmai daiginjo (May and July 2026) · soba tea (June 2026)',
    website: null, gmaps: gm('松吟庵 東三国店'), menu_url: null,
    notes: "[Soba · Higashimikuni, ju-wari soba in an old house] A soba restaurant in a renovated old house down a narrow lane two minutes from Higashimikuni Station, with an old carved ranma set into the wall and \"Ju-wari Soba\" on the front (April 2026). By day it serves all-buckwheat soba sets, cold or hot, with generous sides: a ¥1,300 daily set of soba, kayaku rice, freshly made dashimaki and a tenderloin cutlet with daikon ponzu (April 2026). By night it becomes a soba izakaya with thick-cut grilled beef tongue, tempura, dashimaki, seasonal fish and a sake list running to Juyondai, finished with soba (2026). One diner found prices high and the upstairs tables cramped (July 2026). Weekday lunch draws a line; order by QR code upstairs.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog. Reviewers: a renovated traditional house with a carved ranma "originally from the home of the former owner of this traditional house" (April 2026); soba tea is served, a sign of pride in the soba to one June 2026 diner; compared with the nearby soba shop Atariya (July 2026).', philosophy: null, specialty: 'Ju-wari soba; thick-cut grilled beef tongue; dashimaki.',
      anecdotes: [
        { text: '"I sprinkled some salt from the table onto the soba and enjoyed it. The soba was chilled to perfection and paired wonderfully with the salt." — April 2026, the daily set for ¥1,300.', source: R + 'B525969444/' },
        { text: '"The thick-cut grilled beef tongue was tender and incredibly delicious." — May 2026, with Juyondai junmai daiginjo.', source: R + 'B502940335/' },
        { text: '"My mother wanted to eat soba, so we went on Saturday around 12:30 PM." — August 2026, tempura, sushi and daily sets with zaru soba.', source: R + 'B109111797/' },
      ],
      japanese_sources_summary: '食べログ: 松吟庵 東三国店、居酒屋・牛タン・そば、大阪市淀川区東三国1-33-21、Midosuji 線 東三国駅4番出口から徒歩2分、月〜水11:00〜14:00、17:30〜23:00、木曜17:30〜23:00、金11:00〜14:00、17:30〜24:00、土11:00〜14:30、17:30〜23:00、日11:00〜15:00、17:30〜22:00、祝11:00〜22:30、売り切れまで、不定休、予約可、カード・電子マネー・QR 可、20席、2階にテーブル2つ、8名以上は個室、禁煙。口コミ(2025年3月〜2026年10月): 古民家を改装、ranma、「Ju-wari Soba」の看板、昼はJu-wari そばの定食 (冷たいか温かいか)、日替わり定食1,300円 (かやくごはん、だし巻き、ヒレカツのおろしポン酢)、肉じゃがの日替わり、天ぷらとざるそば、巻き寿司とさば寿司とざるそば、とり天、夜は厚切りの牛タン、だし巻き、カツオのたたき、チキン南蛮、焼きなす、ニシンの甘露煮、舞茸の天ぷら、豚せいろ、鱧、カキフライ、里芋の揚げ物、Oni Oroshi Bukkake Soba、生ガキのポン酢、Juyondai の純米大吟醸、そば茶、QR コードで注文、平日の昼は行列、値段が高く2階は狭いという声も。',
      confidence: 'medium', sources: [TB, R + 'B109111797/', R + 'B502940335/', R + 'B518685976/', R + 'B525969444/', R + 'B529234936/', R + 'B531193830/', R + 'B532933195/', R + 'B533021097/', R + 'B534364972/', R + 'B537786727/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; a narrow lane makes it hard to find. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国1-33-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国一丁目33番21号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525969444/', R + 'B502940335/'],
    price_note: 'One lunch price from an April 2026 review; other dishes unpriced.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set with ju-wari soba', '¥1,300', 'Lunch', 'ask', 'no', 'April 2026.', 'higawari_set'),
      it('', '', 'Ju-wari zaru soba', '', 'Soba', 'ask', 'no', '2026; ask about the sauce.', 'zaru_soba'),
      it('', '', 'Thick-cut grilled beef tongue', '', 'Evening', 'ask', 'no', 'May and August 2026.', 'gyutan'),
      it('', '', 'Dashimaki', '', 'Evening', 'ask', 'no', '2025–2026.', 'dashimaki'),
    ] }, {
    cuisine: 'Ju-wari そば、牛タン、日本酒 (2025〜2026年)・冷たいか温かいJu-wari そばの昼の定食: かやくごはん、作りたてのだし巻き、ヒレカツのおろしポン酢の日替わり1,300円 (2026年4月)。肉じゃが、かやくごはん、だし巻きの日替わり。天ぷらとざるそば。巻き寿司、さば寿司、ざるそば (2026年8月)。とり天とだし巻き (2026年10月)・夜: 厚切りの焼き牛タン、だし巻き、カツオのたたき、チキン南蛮、焼きなす (2026年5月)。ニシンの甘露煮、舞茸の天ぷら、豚せいろ (2026年6月)。季節の鱧 (2026年5月)。カキフライ、里芋の揚げ物、天ぷらの盛り合わせ、Oni Oroshi Bukkake Soba (2026年8月)。生ガキのポン酢、しゃぶしゃぶのサラダ (2025年3月)・Juyondai の純米大吟醸もある日本酒 (2026年5月と7月)・そば茶 (2026年6月)',
    neighborhood: '東三国1-33-21。東三国駅4番出口から徒歩2分 (食べログ)。クリーニング店のところから住宅の間の細い道に入った先、「Ju-wari Soba」の看板の古民家 (2026年4月)',
    gf_detail: '要確認。そばは十割でそば粉だけ (2026年4月)、塩で食べた人もいる。ただ、つけ汁は醤油で、天ぷら、チキン南蛮、揚げ物も同じ厨房。頼む前に確認を。',
    vegan_detail: 'ヴィーガンではありません。そばのつゆとかやくごはんはだし、牛タン、魚、卵の料理。',
    notes: '[そば・東三国、古民家のJu-wari そば] 東三国駅から2分、細い道の奥の古民家を改装したそば屋で、壁には彫りのある ranma、表には「Ju-wari Soba」の看板 (2026年4月)。昼はそば粉だけのJu-wari そばの定食で、冷たいか温かいかを選び、おかずもたっぷり: そば、かやくごはん、作りたてのだし巻き、ヒレカツのおろしポン酢の1,300円の日替わり (2026年4月)。夜はそば居酒屋になり、厚切りの焼き牛タン、天ぷら、だし巻き、季節の魚、Juyondai まである日本酒、締めにそば (2026年)。値段が高く2階の席がせまいと感じた人も (2026年7月)。平日の昼は行列。2階では QR コードで注文。',
  });
}

save();
