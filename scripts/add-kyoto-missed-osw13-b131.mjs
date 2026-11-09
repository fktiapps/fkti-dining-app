// Kyoto priority (kyoto-missed), worker osw13, batch 131 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: Coffee Club 高木屋, あいこちゃん, 京都苑 空峰, RUTUBO 第2燻製工場. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match; RUTUBO 第2燻製工場 is the sister of イザカヤ ルツボ kyoto_izakaya_rutubo_gion — different format, flagged).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-131');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26029938', 'chain: ドミノピザ 河原町丸太町店 — a branch of the national Domino\'s Pizza chain');

// ================================================================ Coffee Club 高木屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007588/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_coffee_club_takagiya', name: 'Coffee Club 高木屋 (Coffee Club Takagiya)', category: 'OMNI',
    lat: 35.009305, lng: 135.786608, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: toast breakfasts, sandwiches, cakes and homemade curry (2015–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg and ham breakfasts and sandwiches, cakes, Wiener coffee with cream (2015–2026 reviews).',
    hours_raw: 'Tabelog: daily 8:00–18:00 (morning to 11:00, lunch 11:00–14:00, café 14:00–18:00); irregular closures. No reservations. Morning set with toast, scrambled egg, salad and siphon coffee ¥500 (2015–2025 — unchanged for years). SMOKING ALLOWED: ashtrays filled with coffee beans (December 2021, January 2024). Run by the master alone. 11 seats: a counter and two tables for two. On Sanjo-dori east of Jingu-michi, by the Westin Miyako Kyoto, 351 m from Keage.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori by Keage — near Nanzen-ji and the Westin Miyako',
    cuisine: 'A small old-school coffee shop where the master brews everything by siphon, known for a ¥500 morning set (Tabelog; 2015–2026 reviews) · morning set: toast, scrambled egg or omelette, salad and siphon coffee ¥500 (2015–2025) · blend coffee ¥350 (January 2024); Wiener coffee; iced café au lait · cake set with siphon coffee ¥500, e.g. chocolate cake or cheesecake (December 2021) · mixed sandwich in a bamboo basket (August 2026) · homemade curry (2020)',
    website: null, gmaps: gm('Coffee Club 高木屋 蹴上'), menu_url: null,
    notes: '[Kissaten · Keage near Nanzen-ji, a ¥500 siphon-coffee breakfast] A tiny counter café on Sanjo-dori where the master brews siphon coffee and serves an unbeatable ¥500 morning set of toast, eggs and salad; cake sets and sandwiches later. Smoking allowed. Handy before Nanzen-ji.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed; runs it alone)'], origin: null,
      background: 'Reviewers from 2015 to 2026 describe the master running the shop alone, quietly brewing siphon coffee in cups displayed behind the counter. Criticisms: a little untidy, with cigarette ends under the counter and cobwebs on a window frame (September 2025); the salad lost its fruit over the years (November 2024).',
      philosophy: null,
      specialty: 'Siphon coffee; ¥500 morning set.',
      anecdotes: [
        { text: 'November 2024: "From previous posts, it seems that the morning prices have remained unchanged for years."', source: R + 'B496542211/' },
        { text: 'August 2026: "The blend, carefully brewed with a siphon, had a rich aroma and deep flavor… This lovely café allows you to savor the master\'s dedication."', source: R + 'B533615614/' },
        { text: 'September 2025: "I noticed cigarette butts under the counter and some old cobwebs on the inside of the window frame, which was a bit disappointing."', source: R + 'B516545174/' },
      ],
      japanese_sources_summary: '食べログ: Coffee Club 高木屋、喫茶店・カフェ、東山区三条神宮道東入3丁東町24 (ウェスティン都ホテル西)、蹴上から351m、毎日8:00〜11:00・11:00〜14:00・14:00〜18:00、不定休、予約不可、11席。口コミ (2015年12月〜2026年8月、英語): マスターがひとりで営む喫茶店、サイフォンのコーヒー、トースト・スクランブルエッグ・サラダのモーニング500円 (長年据え置き)、ブレンド350円 (2024年1月)、ウインナーコーヒー、ケーキセット500円、かごに入ったミックスサンド、自家製カレー、喫煙可 (コーヒー豆入りの灰皿)、カウンターの下の吸い殻や窓のくもの巣が気になったとの声 (2025年9月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B132645011', 'B423960908', 'B443681702', 'B448792947', 'B478901749', 'B496542211', 'B516545174', 'B533615614'])) },
    cultural_comfort: { level: 'japanese', note: 'Tiny one-man kissaten; smoking allowed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区三条神宮道東入3丁東町24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (35.009305, 135.786608); GSI matched only the town 京都府京都市東山区東町 (about 68m), not the lot, so approximate; nearest pin kyoto_dominique_bouchet_restaurant (hidden) 112.0m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496542211/', R + 'B443681702/', R + 'B478901749/'],
    price_note: 'Prices from 2021–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Morning set (toast, egg, salad, siphon coffee)', '¥500', 'Breakfast', 'no', 'no', '2015–2025.', 'morning_set'),
      it('', '', 'Cake set with siphon coffee', '¥500', 'Set', 'no', 'no', 'December 2021.', 'cake_set'),
      it('', '', 'Blend coffee', '¥350', 'Drink', 'ask', 'ask', 'January 2024.', 'blend'),
      it('', '', 'Mixed sandwich', '', 'Sandwich', 'no', 'no', 'August 2026.', 'mix_sandwich'),
    ] }, {
    cuisine: 'マスターがすべてサイフォンでいれる小さな昔ながらの喫茶店。500円のモーニングで知られる (食べログ、2015〜2026年の口コミ)・トースト、スクランブルエッグかオムレツ、サラダ、サイフォンのコーヒーのモーニング500円 (2015〜2025年)・ブレンド350円 (2024年1月)、ウインナーコーヒー、アイスカフェオレ・サイフォンのコーヒー付きのケーキセット500円、チョコレートケーキやチーズケーキ (2021年12月)・竹かごのミックスサンド (2026年8月)・自家製カレー (2020年)',
    neighborhood: '三条通、蹴上。南禅寺とウェスティン都の近く',
    gf_detail: 'グルテンフリーではない: トーストの朝食、サンド、ケーキ、自家製カレー (2015〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 卵やハムの朝食とサンド、ケーキ、クリームのウインナーコーヒー (2015〜2026年の口コミ)。',
    notes: '[喫茶店・蹴上の南禅寺近く、500円のサイフォンのモーニング] 三条通の小さなカウンターの喫茶店。マスターがサイフォンでいれるコーヒーに、トースト、卵、サラダの500円のお得なモーニング。午後はケーキセットやサンド。喫煙可。南禅寺の前に便利。',
  });
}

// ================================================================ あいこちゃん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26025972/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '14:00'], D = ['17:00', '20:00'];
  put({
    id: 'kyoto_aiko_chan', name: 'あいこちゃん (Aiko Chan)', category: 'OMNI',
    lat: 34.98804, lng: 135.765933, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki batter, noodles and sauces (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with pork, offal, beef tendon, squid and egg, topped with bonito flakes (2022–2026 reviews).',
    hours_raw: 'Tabelog: Wed, Thu, Sun 11:00–14:00; Fri, Sat 11:00–14:00 and 17:00–20:00; closed Monday and Tuesday; hours may change, and one regular met early closing or a temporary closure on every evening visit before finally getting in (2024–2026 review). No reservations. No charge (「なし」, Tabelog Japanese original). Cash only: no cards, e-money or QR codes. 10 seats: 4 at the teppan, 2 more at the counter, one table. 2–3 parking spaces out front. No sign; red lanterns outside. In the Sujin area, 4 min from Keihan Shichijo, 8 min from Kyoto Station.',
    hours: { 2: [L], 3: [L], 4: [L, D], 5: [L, D], 6: [L] }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sujin, east of Kyoto Station — 4 min from Keihan Shichijo',
    cuisine: 'A long-standing neighbourhood okonomiyaki shop in Sujin, run by a couple and named after the owner\'s mother, known for "mambo-yaki" and cheap, generous plates (Tabelog; 2022–2026 reviews) · mambo-yaki with everything — noodles, offal, beef tendon, squid — ¥1,500 (February 2026); two homemade sauces, one spicy · negiyaki with Kujo leeks and beef tendon ¥800, + fried pork scraps ¥200 (July 2026) · pork okonomiyaki; offal stir-fry; toppings ¥100–200 (2022–2026) · canned beer ¥400; kakigori in summer; free refills of hojicha',
    website: null, gmaps: gm('あいこちゃん お好み焼き 崇仁'), menu_url: null,
    notes: '[Okonomiyaki · Sujin near Kyoto Station, a couple\'s Showa-era teppan] A tiny, unsigned, red-lantern okonomiyaki shop where the owners joke with you over the griddle: loaded mambo-yaki (¥1,500) or leek-heavy negiyaki. Around ¥1,000–2,000. Cash only. Lunch most days; dinner Fri–Sat; closed Mon–Tue.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed couple)'], origin: null,
      background: 'Reviewers describe a couple running the shop (July 2022; September 2022), the name coming from the owner\'s mother (September 2022), and owners who banter with and tease customers as they cook (September 2022; May 2025; July 2026). A May 2024 visitor was sent off with cream puffs and éclairs. A regular (2024–2026 review) calls it one of the few okonomiyaki shops left in Sujin after its large redevelopment.',
      philosophy: null,
      specialty: 'Mambo-yaki; negiyaki.',
      anecdotes: [
        { text: 'September 2022: "When he overheard me mutter, \'This looks delicious\' as he was grilling, he immediately responded, \'We haven\'t even started cooking anything but cabbage…\' A bit of banter goes a long way!"', source: R + 'B453947267/' },
        { text: 'July 2026: "The friendly owner seems to say, \'If you want attentive service, go somewhere else!\' Conversations with the owner and the chef make for a delightful experience."', source: R + 'B531798031/' },
        { text: 'May 2025: "This Hiroshima-style okonomiyaki comes with noodles, horumon (offal), beef tendon, and squid, and it was absolutely delicious!"', source: R + 'B506864887/' },
      ],
      japanese_sources_summary: '食べログ: あいこちゃん、お好み焼き・焼きそば、下京区上之町1-13、京都駅から徒歩約8分、京阪七条から約4分、水・木・日11:00〜14:00、金・土11:00〜14:00・17:00〜20:00、月・火休み、予約不可、チャージ「なし」、10席 (カウンター4・テーブル6)、駐車場2〜3台、カード・電子マネー・QR不可。口コミ (2022年7月〜2026年7月、英語): 崇仁の老舗のお好み焼き、夫婦で営む、店名は店主の母の名、看板なし、赤ちょうちん、全部入りのまんぼ焼き1,500円 (麺、ホルモン、すじ、いか)、2種類の自家製ソース、九条ねぎのねぎ焼き800円・油かす+200円、豚玉、ホルモン炒め、トッピング100〜200円、缶ビール400円、夏はかき氷、ほうじ茶のおかわり、口は悪いが温かい店主、早じまいや臨時休業も。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B453947267', 'B455337712', 'B461447961', 'B470726521', 'B483161519', 'B491117810', 'B506864887', 'B522922918', 'B524724507', 'B526395155', 'B531798031'])) },
    cultural_comfort: { level: 'japanese', note: 'Banter-heavy neighbourhood shop; cash only; no sign outside.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区上之町1-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to July 2026.' },
    pin_source: `Tabelog ${TB} (34.98804, 135.765933); GSI lot 京都府京都市下京区上之町1番地 about 42m away; nearest pin kyoto_yamadaruma_nanajo 155.4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522922918/', R + 'B531798031/', R + 'B483161519/'],
    price_note: 'Prices from 2024–2026 reviews (tax incl.).', last_checked: TODAY, items: [
      it('', '', 'Mambo-yaki with everything', '¥1,500', 'Okonomiyaki', 'no', 'no', 'February 2026.', 'mambo_yaki'),
      it('', '', 'Negiyaki with beef tendon', '¥800', 'Okonomiyaki', 'no', 'no', 'July 2026; + fried pork scraps ¥200.', 'negiyaki'),
      it('', '', 'Offal stir-fry', '', 'Teppan', 'no', 'no', 'April 2026.', 'horumon_itame'),
      it('', '', 'Canned beer', '¥400', 'Drink', 'no', 'ask', '2024–2026 review.', 'beer'),
    ] }, {
    cuisine: '崇仁の昔からの町のお好み焼き屋。夫婦で営み、店名は店主の母の名。まんぼ焼きと手頃でたっぷりの鉄板で知られる (食べログ、2022〜2026年の口コミ)・麺、ホルモン、すじ、いかの全部入りのまんぼ焼き1,500円 (2026年2月)、2種類の自家製ソース (1つは辛口)・九条ねぎとすじのねぎ焼き800円、油かす+200円 (2026年7月)・豚玉、ホルモン炒め、トッピング100〜200円 (2022〜2026年)・缶ビール400円、夏はかき氷、ほうじ茶のおかわり',
    neighborhood: '崇仁、京都駅の東。京阪七条から徒歩4分',
    gf_detail: 'グルテンフリーではない: お好み焼きの生地、麺、ソース (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 豚、ホルモン、すじ、いか、卵のお好み焼きにかつお節 (2022〜2026年の口コミ)。',
    notes: '[お好み焼き・京都駅近くの崇仁、夫婦の昭和の鉄板] 看板のない赤ちょうちんの小さなお好み焼き屋。鉄板越しに店主の軽口を浴びながら、全部入りのまんぼ焼き (1,500円) やねぎたっぷりのねぎ焼きを。1,000〜2,000円ほど。現金のみ。昼はほぼ毎日、夜は金・土、月・火休み。',
  });
}

// ================================================================ 京都苑 空峰
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26041548/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_kyotoen_mine', name: '京都苑 空峰 (Kyotoen Mine)', category: 'OMNI',
    lat: 35.00255, lng: 135.749725, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a miso-based hot pot finished with Chinese noodles or udon, kushikatsu and dote-yaki (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature hot pot has offal; beef-tongue shabu-shabu, sukiyaki and beef tendon (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun and holidays 17:00–22:00 (food L.O. 21:00, drinks 21:30); closed Wednesday and irregular days. Reservations taken; a 2-hour limit when busy. Hot pots are normally for two or more, though one was served for one (April 2025). 54 seats including a counter, tatami and sunken seating; private hire 20–50. Heated tobacco only in a designated area. Cards and PayPay; no e-money. Free Wi-Fi. 1–2 min from Hankyu Omiya and Randen Shijo-Omiya.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Omiya — 1–2 min from Hankyu Omiya',
    cuisine: 'A spacious hot-pot izakaya by Shijo-Omiya whose signature "Mine nabe" is a sweet-and-spicy miso hot pot of vegetables, tofu and offal with a spice level of your choice (Tabelog; 2024–2026 reviews) · Mine nabe at your chosen spice level (levels 1 and 2 reported), finished with Chinese noodles, udon, or an egg-and-cheese risotto (2024–2026) · beef-tongue shabu-shabu with its own broth; thick-cut grilled beef tongue (2024–2026) · sukiyaki; horumon; simmered beef tendon; dote-yaki; kushikatsu (2024–2026) · beef-tongue stew kimbap (December 2024) · courses; a good list of sake brands',
    website: null, gmaps: gm('京都苑 空峰 大宮'), menu_url: null,
    notes: '[Hot-pot izakaya · Shijo-Omiya, spicy miso "Mine nabe"] A roomy, friendly izakaya by Hankyu Omiya: pick your spice level for the signature miso hot pot of vegetables and offal, finish with noodles, and add beef-tongue shabu-shabu or kushikatsu. About ¥3,000–8,000. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers (2024–2026) praise quick, friendly floor staff and a spacious room over two floors. Criticisms: a light hand with the offal in the hot pot (December 2024; April 2025), and few chilled sakes despite many brands (August 2025). Whether it belongs to a group is not stated.',
      philosophy: null,
      specialty: 'Mine miso hot pot; beef-tongue shabu-shabu.',
      anecdotes: [
        { text: 'August 2024: "The sweet and savory miso broth was full of vegetables, and there was a perfect amount of tofu and horumon. I finished it off with some Chinese noodles and egg cheese risotto."', source: R + 'B490046521/' },
        { text: 'November 2024: "You can choose the level of spiciness, so even those who aren\'t used to it should be okay. I would recommend starting with level 2."', source: R + 'B494868691/' },
        { text: 'April 2025: "The amount of horumon (offal) was overall limited, giving the impression of being light on ingredients."', source: R + 'B504384431/' },
      ],
      japanese_sources_summary: '食べログ: 京都苑 空峰、居酒屋・鍋・すき焼き、下京区下り松町168-7、阪急大宮・嵐電四条大宮から徒歩1〜2分、月・火・木〜日・祝日17:00〜22:00 (料理L.O.21:00)、水曜休み、不定休、予約可 (混雑時は2時間制)、54席、カウンター・座敷・掘りごたつ、加熱式たばこのみの喫煙所、カード・PayPay可、Wi-Fi。口コミ (2024年7月〜2026年10月、英語): 名物の空峰鍋 (辛さを選べる甘辛の味噌の鍋、野菜・豆腐・ホルモン)、締めの中華麺・うどん・卵とチーズのリゾット、牛タンしゃぶしゃぶ、厚切りの牛タン焼き、すき焼き、牛すじ、どて焼き、串カツ、牛タンシチューのキンパ、日本酒の銘柄が多い、ホルモンが少ないとの声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B488806503', 'B490046521', 'B494868691', 'B498830126', 'B501333710', 'B504084964', 'B504384431', 'B512738989', 'B535214430', 'B538839588'])) },
    cultural_comfort: { level: 'friendly', note: 'Choose your spice level; 2-hour limit when busy.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区下り松町168-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.00255, 135.749725); GSI lot 京都府京都市下京区下り松町168番地 about 41m away; nearest pin kyoto_ramen_kyoryu_omiya 72.4m (RUTUBO 第2燻製工場, same block, about 6.7m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490046521/', R + 'B498830126/'],
    price_note: 'No dish prices given; Tabelog average ¥3,000–3,999, reviewers ¥4,000–7,999 per person (2024–2026).', last_checked: TODAY, items: [
      it('', '', 'Mine nabe (spicy miso hot pot)', '', 'Hot pot', 'no', 'no', '2024–2026.', 'kumine_nabe'),
      it('', '', 'Beef-tongue shabu-shabu', '', 'Hot pot', 'ask', 'no', 'March 2025.', 'gyutan_shabu'),
      it('', '', 'Thick-cut grilled beef tongue', '', 'Grilled', 'ask', 'no', 'December 2024 and October 2026.', 'atsugiri_gyutan'),
      it('', '', 'Kushikatsu', '', 'Fried', 'no', 'no', 'August 2025.', 'kushikatsu'),
    ] }, {
    cuisine: '四条大宮近くの広い鍋の居酒屋。名物の「空峰鍋」は野菜、豆腐、ホルモンの甘辛い味噌の鍋で、辛さを選べる (食べログ、2024〜2026年の口コミ)・空峰鍋、辛さを選べる (1と2の声)、締めは中華麺、うどん、卵とチーズのリゾット (2024〜2026年)・専用のだしの牛タンしゃぶしゃぶ、厚切りの牛タン焼き (2024〜2026年)・すき焼き、ホルモン、牛すじの煮込み、どて焼き、串カツ (2024〜2026年)・牛タンシチューのキンパ (2024年12月)・コース、日本酒の銘柄が豊富',
    neighborhood: '四条大宮。阪急大宮から徒歩1〜2分',
    gf_detail: 'グルテンフリーではない: 中華麺かうどんで締める味噌の鍋、串カツ、どて焼き (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 名物の鍋にホルモン、牛タンしゃぶしゃぶ、すき焼き、牛すじ (2024〜2026年の口コミ)。',
    notes: '[鍋の居酒屋・四条大宮、辛い味噌の「空峰鍋」] 阪急大宮すぐの広く気さくな居酒屋。名物の野菜とホルモンの味噌の鍋を好みの辛さで、麺で締めて、牛タンしゃぶしゃぶや串カツも。3,000〜8,000円ほど。水曜休み。',
  });
}

// ================================================================ RUTUBO 第2燻製工場
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26039958/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '25:00']);
  put({
    id: 'kyoto_rutubo_kunsei_omiya', name: 'RUTUBO 第2燻製工場 (Rutubo 2nd Smoke Factory)', category: 'OMNI',
    lat: 35.00249, lng: 135.749728, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried dishes, breaded fried rolls, tempura, shumai, Okinawa soba and smoked soy-based seasonings (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: smoked cheese, bacon, gizzards, fish and shellfish dishes (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 18:00–25:00; closed Wednesday and irregular days. Standing bar on the 1st floor (no reservations); the 2nd floor has seats by reservation with a 2-hour limit (April 2026). Cash only: no cards, e-money or QR codes. SMOKING ALLOWED (Tabelog). A DJ booth and record player; bottled beer from the fridge yourself. Cold plates from ¥500, hot dishes ¥700–1,000, drinks from ¥500–650 (March 2026). Smoked goods to take away in the case. 2 min from Hankyu Omiya.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shijo-Omiya — 2 min from Hankyu Omiya',
    cuisine: 'The second outpost of Gion\'s izakaya Rutubo: a stylish standing bar with a visible smoker, where both ingredients and seasonings are smoked, plus seasonal small plates and Okinawan touches (Tabelog; 2025–2026 reviews) · smoked cheese; smoked mixed nuts; smoked gizzards; smoked bacon fried rice; smoked sweet-potato fries; fries with smoked mayo ¥700 (2026) · horse-mackerel and smoked-plum fried roll with carrot purée ¥900 (March 2026) · sea bream or firefly squid with canola flowers and mustard; soy-marinated bonito; simmered oysters; clams with bracken (March–May 2026) · grilled small Lake Biwa sweetfish; shrimp-and-lotus-root pork shumai; fried eggplant and peppers in dashi (July 2026) · Okinawa soba; mozuku; young-corn tempura (June 2026) · gari highball; smoked-plum sour; draft beer ¥650; bottle wines',
    website: null, gmaps: gm('RUTUBO 第2燻製工場'), menu_url: null,
    notes: '[Smoked-food standing bar · Shijo-Omiya, Rutubo\'s smoke factory] A high-ceilinged standing bar with a DJ booth from the people behind Gion\'s Rutubo: smoked cheese, smoked-mayo fries, bacon fried rice and clever seasonal plates from ¥500, with a gari highball. Seats upstairs by reservation. Cash only; smoking allowed. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers call it the second shop of RUTUBO in Gion Shijo (kyoto_izakaya_rutubo_gion in this guide), with a different menu from the main shop (December 2025; March 2026). Criticisms: drinks from ¥600 and food around ¥1,000 feel high for a standing bar, service was slow, and a guest had to chase whether a running-low fish dish was still available (April 2026).',
      philosophy: null,
      specialty: 'Smoked dishes; seasonal small plates.',
      anecdotes: [
        { text: 'March 2026: "It\'s the second smoked food factory and standing bar of the original RUTUBO in Gion Shijo… It\'s fun that each location has a different menu."', source: R + 'B527924430/' },
        { text: 'May 2026: "The kitchen is spacious, and the visible smoking machine from the seating area truly resembles a factory. You can grab bottled beer yourself from the refrigerator."', source: R + 'B527893019/' },
        { text: 'April 2026: "Considering it\'s a standing bar, the drink prices start at JPY 600, and the food is around JPY 1000, which feels a bit high. Additionally, I felt the service was slow."', source: R + 'B528601680/' },
      ],
      japanese_sources_summary: '食べログ: RUTUBO 第2燻製工場、立ち飲み、下京区黒門通四条下ル下り松町168-1、阪急大宮から徒歩2分、月・火・木〜日18:00〜25:00、水曜休み、不定休、予約は2階のみ、カード・電子マネー・QR不可、喫煙可、カウンター・立ち飲み。口コミ (2025年12月〜2026年9月、英語): 祇園四条のRUTUBOの2号店で燻製の立ち飲み、燻製機が見える、DJブース、冷蔵庫の瓶ビールは自分で、燻製チーズ・ナッツ・砂肝、燻製ベーコンの炒飯、燻製マヨのフライドポテト700円、あじと燻製梅のフライ900円、鯛やほたるいかと菜の花の辛子和え、かつおの漬け、牡蠣の煮付け、琵琶湖の小鮎、えびとれんこんのしゅうまい、沖縄そば、もずく、ヤングコーンの天ぷら、ガリハイボール、2階は2時間制、立ち飲みにしては高い・提供が遅いとの声 (2026年4月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B485456900', 'B519848697', 'B523552500', 'B523948730', 'B525590898', 'B527345123', 'B527893019', 'B527924430', 'B528025083', 'B528601680', 'B529051034', 'B530362095'])) },
    cultural_comfort: { level: 'friendly', note: 'Standing bar downstairs, booked seats upstairs; cash only; smoking allowed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区黒門通四条下ル下り松町168-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated December 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.00249, 135.749728); GSI lot 京都府京都市下京区下り松町168番地 about 47m away; nearest pin kyoto_ramen_kyoryu_omiya 78.1m (京都苑 空峰, same block, about 6.7m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527924430/', R + 'B523948730/'],
    price_note: 'Prices from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Fries with smoked mayo', '¥700', 'Snack', 'no', 'no', 'March 2026.', 'smoked_mayo_fries'),
      it('', '', 'Horse-mackerel and smoked-plum fried roll', '¥900', 'Fried', 'no', 'no', 'March 2026.', 'aji_fry_roll'),
      it('', '', 'Smoked cheese', '', 'Smoked', 'ask', 'no', '2026 reviews.', 'smoked_cheese'),
      it('', '', 'Smoked bacon fried rice', '', 'Rice', 'ask', 'no', 'March 2026.', 'bacon_chahan'),
    ] }, {
    cuisine: '祇園のイザカヤ ルツボの2号店。燻製機の見えるおしゃれな立ち飲みで、食材も調味料も燻製に。季節の小皿や沖縄の料理も (食べログ、2025〜2026年の口コミ)・燻製チーズ、燻製ミックスナッツ、燻製砂肝、燻製ベーコンの炒飯、燻製のさつまいもフライ、燻製マヨのフライドポテト700円 (2026年)・あじと燻製梅のフライ、にんじんのピューレ添え900円 (2026年3月)・鯛やほたるいかと菜の花の辛子和え、かつおの漬け、牡蠣の煮物、白貝とわらびの海苔じょうゆ (2026年3〜5月)・琵琶湖の小鮎の焼き物、えびとれんこんの豚しゅうまい、揚げなすなどの煮浸し (2026年7月)・沖縄そば、もずく、ヤングコーンの天ぷら (2026年6月)・ガリハイボール、燻製梅サワー、生ビール650円、ボトルワイン',
    neighborhood: '四条大宮。阪急大宮から徒歩2分',
    gf_detail: 'グルテンフリーではない: 揚げ物、パン粉のフライ、天ぷら、しゅうまい、沖縄そば、燻製のしょうゆなどの調味料 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 燻製チーズ、ベーコン、砂肝、魚介の料理 (2025〜2026年の口コミ)。',
    notes: '[燻製の立ち飲み・四条大宮、ルツボの燻製工場] 祇園のルツボのチームによる、天井の高いDJブースのある立ち飲み。燻製チーズ、燻製マヨのポテト、ベーコン炒飯、工夫のある季節の小皿が500円から、ガリハイボールとともに。2階は予約で着席。現金のみ。喫煙可。水曜休み。',
  });
}

save();
