// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 51.
// Core lane still has shops, so all four come from core, in queue order:
//   + 炭の衝撃 麺屋 大ちゃん Sumi no Shougeki Menya Daichan (charcoal-chashu ramen at Imadegawa) — no ramen block  [core]
//   + 豆生庵 Tosei An (tofu and yuba counter in Nishijin)                                                       [core]
//   + Beer&Pasta スケルツォ Scherzo (fresh-pasta and craft-beer shop north of Imadegawa; since 2017)            [core]
//   + センボンカリー Senbon Curry (student curry counter on Shinmachi; since 2010)                               [core]
//   Same-name counts first: 大ちゃん — こうてい麺 大ちゃん is in Osaka data; no link found between them; 豆生庵 0;
//   スケルツォ 0 (Tabelog: "an independent store, not a franchise chain"); センボンカリー 0.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: 大ちゃん 「無し」; スケルツォ 「チャージ料なし」;
//   豆生庵 and センボンカリー have no section.
//   Ruling applied: other-diner remarks only where several reviews agree (students at スケルツォ and センボンカリー).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-51');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 炭の衝撃 麺屋 大ちゃん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034725/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00']);
  put({
    id: 'kyoto_sumi_no_shougeki_daichan', name: '炭の衝撃 麺屋 大ちゃん (Sumi no Shougeki Menya Daichan)', category: 'OMNI',
    lat: 35.029737, lng: 135.757705, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy-based broth (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth and charcoal-grilled pork chashu (2025–26 reviews).',
    hours_raw: 'Daily 11:30–15:00; closing days may vary (Tabelog). No bookings; ticket machine (Tabelog; May 2025 review). Service charge: Tabelog\'s Japanese original says 「無し」 (none). Cash only — no cards, e-money or QR (Tabelog). 7 counter seats; non-smoking (Tabelog). Students get a free extra serving of noodles with ID (March 2025 review). 3 min from Imadegawa Stn and the Kamigyo-ku Sogochosha-mae bus stop (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Imadegawa, south of Kamigyo ward office — 3 min from Imadegawa Stn',
    cuisine: 'Chicken-and-soy ramen with a sweet edge and flat noodles, in a square bowl, topped with five or six slices of charcoal-grilled rare chashu laid like petals (2025–26 reviews): charcoal chashu ramen ¥1,100, extra noodles ¥100 (August 2025), regular ramen, tsukemen, chicken-fat mazesoba; torch-grilled butter rice and chashu rice bowl',
    website: null, gmaps: gm('炭の衝撃 麺屋 大ちゃん'), menu_url: null,
    notes: "[Charcoal chashu ramen · Imadegawa] A seven-seat lunch-only counter serving sweet-leaning chicken soy ramen on flat noodles in a square bowl, crowned with petals of smoky charcoal-grilled chashu (¥1,100), plus mazesoba and torched butter rice. Ticket machine; cash only; 11:30–15:00.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 14 September 2020 (Tabelog).',
      philosophy: null, specialty: 'Charcoal-grilled chashu ramen.',
      anecdotes: [
        { text: 'A June 2025 diner put the charcoal chashu ramen in a personal top five and paired it with the grilled butter rice.', source: R + 'B510548103/' },
        { text: 'A March 2026 diner had long passed the shop over because of its quirky name, then found the sweet soy broth and charcoal aroma delicious.', source: R + 'B525300441/' },
        { text: 'A July 2026 first-timer thought the regular ramen too sweet at first, then found it addictive.', source: R + 'B533004906/' },
      ],
      japanese_sources_summary: '食べログ: 炭の衝撃 麺屋 大ちゃん、ラーメン、上京区築山南半町234、今出川駅から徒歩約3分、Kamigyo-ku Sogochosha-mae バス停から徒歩約3分、毎日 11:30〜15:00、不定休、予約不可、サービス料なし、カード・電子マネー・QR 不可、カウンター7席、禁煙、2020年9月14日オープン。口コミ (2025年3月〜2026年7月、英語): 券売機、四角い器、花びらのように並ぶ炭火焼きのレアチャーシュー、鶏の醤油スープは甘め、平打ち麺、炭火焼きチャーシュー麺1,100円、替え玉100円、つけ麺、鶏油のまぜそば、バーナーで炙るバターライス、チャーシュー丼、学生証で麺の大盛り無料。',
      confidence: 'medium', sources: [TB, R + 'B473285644/', R + 'B503363272/', R + 'B503944545/', R + 'B507215337/', R + 'B509410295/', R + 'B510548103/', R + 'B512305922/', R + 'B512625983/', R + 'B525300441/', R + 'B533004906/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区築山南半町234',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.029737, 135.757705); cross-checked: GSI 京都府京都市上京区築山南半町234番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512625983/'],
    price_note: 'Prices from an August 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Charcoal-grilled chashu ramen', '¥1,100', 'Ramen', 'no', 'no', 'May and August 2025 reviews.', 'sumiyaki_chashu_men'),
      it('', '', 'Extra noodles', '¥100', 'Ramen', 'no', 'ask', 'August 2025 review.', 'kaedama'),
    ] }, {
    cuisine: '甘めの鶏の醤油スープと平打ち麺のラーメンを四角い器で、炭火焼きのレアチャーシュー5〜6枚を花びらのように (2025〜26年の口コミ): 炭火焼きチャーシュー麺1,100円、麺の追加100円 (2025年8月)、普通のラーメン、つけ麺、鶏油のまぜそば。バーナーで炙るバターライス、チャーシュー丼',
    neighborhood: '今出川。今出川駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。醤油ベースのスープに小麦の麺 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏のスープと炭火焼きの豚チャーシュー (2025〜26年の口コミ)。',
    notes: '[炭火チャーシューのラーメン・今出川] 昼だけの7席のカウンター。甘めの鶏の醤油ラーメンを平打ち麺で四角い器に、香ばしい炭火焼きチャーシューを花びらのように (1,100円)。まぜそばや炙りバターライスも。券売機。現金のみ。11:30〜15:00。',
  });
}

// ================================================================ 豆生庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000513/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-touseian.com/';
  const D = day(['11:30', '14:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_tosei_an_nishijin', name: '豆生庵 (Tosei An)', category: 'OMNI',
    lat: 35.026171, lng: 135.749085, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tofu and yuba dishes, but with red miso soup, soy-based broths, fried tofu and optional tempura (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tofu-centred sets include sashimi, and the dashi is not described (2025–26 reviews).',
    hours_raw: 'Tue, Wed and Fri–Sun lunch 11:30–14:00 (last order 13:30) and dinner 17:00–21:00 (last order 20:00); closed Monday and Thursday, holidays included (official site; Tabelog). Bookings taken and advised — about 10 counter seats only (Tabelog; November 2024 review). No cards or e-money; QR accepted (Tabelog). Non-smoking (Tabelog). Rice refills free (July 2026 review). Coin parking to the north (July 2026 review). About 2 min from the Omiya-Nakadachiuri bus stop and 3 min from Ichijo-Modoribashi/Seimei-jinja-mae, about 10 min on foot from Seimei Shrine (Tabelog; January 2026 review).',
    hours: { 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishijin, near Seimei Shrine — 2 min from Omiya-Nakadachiuri bus stop',
    cuisine: 'Tofu and yuba from soybeans chosen for natural sweetness (official site): Take gozen ¥1,600 — yudofu or hiyayakko, tofu salad with sesame and shibazuke, sashimi, kinuage, yuba stew, red miso soup, rice and pickles (September 2025, October 2026); Matsu and Ume gozen; yuba rice bowl +¥700 (July 2026); yudofu lunch with or without tempura; thick fried tofu finished in front of you; tofu ice cream with kuromitsu ¥100 at lunch (October 2026); dinner menu ¥3,600 with fresh yuba and fried tofu (July and October 2025); 勝手豆腐, 生湯葉, 豆腐よう (official site); the owner\'s homemade fruit liqueurs and umeshu (October 2025)',
    website: SITE, gmaps: gm('豆生庵 西陣'), menu_url: 'https://kyoto-touseian.com/menu.html',
    notes: "[Tofu & yuba · Nishijin] A small counter of tofu and yuba near Seimei Shrine, family-run with a warm welcome: the ¥1,600 Take gozen of yudofu or cold tofu with tofu salad, kinuage and yuba stew, fresh yuba at dinner, and the owner's homemade fruit liqueurs. Book ahead; no cards (QR yes). Closed Monday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner, a head chef and a young chef (unnamed)'], origin: null,
      background: 'A family-run tofu restaurant (May 2024 review); a July 2026 diner was welcomed by the head chef and a young chef. The official site says each guest is served individually, hence counter seats only, and offered a yuba-scooping experience for groups of two or more by booking (ended 1 November).',
      philosophy: 'Tofu and yuba made for the natural sweetness of living soybeans (official site).',
      specialty: 'Yudofu; fresh yuba.',
      anecdotes: [
        { text: 'An October 2025 regular chose summer-orange liqueur and two kinds of umeshu — white-liquor and brandy — from the owner\'s homemade fruit liqueurs.', source: R + 'B473643477/' },
        { text: 'After visiting Seimei Shrine in January 2026, a diner walked about 10 minutes for the nearest tofu lunch and watched the thick fried tofu finished at the counter.', source: R + 'B521264623/' },
        { text: 'A July 2026 diner was lucky to find the yuba rice bowl newly available as a ¥700 upgrade.', source: R + 'B532052867/' },
      ],
      japanese_sources_summary: '公式サイト: 豆生庵 (とうせいあん)、西陣の豆腐料理・湯葉料理専門店、生きた大豆の自然な甘み、一人ひとりに出すためカウンターのみ、昼 11:30〜14:00 (L.O. 13:30)、夜 17:00〜21:00 (L.O. 20:00)、月・木曜休み (祝日も)、勝手豆腐、生湯葉、豆腐よう、湯葉すくい体験 (2名から要予約、11月1日で終了)。食べログ: 上京区大宮通一条下ル下石橋南半町50、市バス Omiya-Nakadachiuri から徒歩2分、予約可、カード・電子マネー不可、QR 可、カウンター10席、禁煙。口コミ (2024年5月〜2026年10月、英語): 家族経営、Take 御膳1,600円 (湯豆腐か冷奴、豆腐サラダ、刺身、絹揚げ、湯葉の煮物、赤だし、ご飯、漬物)、Matsu・Ume 御膳、湯葉丼 +700円、目の前で仕上げる厚揚げ、昼だけの豆腐アイス100円、夜は3,600円の献立と生湯葉、店主の自家製果実酒と梅酒、ご飯のおかわり無料。',
      confidence: 'medium', sources: [TB, SITE, R + 'B473643477/', R + 'B484191897/', R + 'B495431653/', R + 'B496872779/', R + 'B510539312/', R + 'B514583494/', R + 'B521264623/', R + 'B532052867/', R + 'B532085239/', R + 'B537339228/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; staff help choose a set.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区大宮通一条下ル下石橋南半町50',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.026171, 135.749085); cross-checked: GSI 京都府京都市上京区下石橋南半町50番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537339228/', R + 'B473643477/'],
    price_note: 'Prices from October 2025–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Take gozen (yudofu or hiyayakko set)', '¥1,600', 'Lunch', 'ask', 'ask', 'September 2025 and October 2026 reviews.', 'take_gozen'),
      it('', '', 'Dinner set menu', '¥3,600', 'Dinner', 'ask', 'ask', 'October 2025 review.', 'dinner_menu'),
    ] }, {
    cuisine: '自然な甘みの大豆の豆腐と湯葉 (公式サイト): Take 御膳1,600円 (湯豆腐か冷奴、ごまと柴漬けの豆腐サラダ、刺身、絹揚げ、湯葉の煮物、赤だし、ご飯、漬物、2025年9月・2026年10月)、Matsu 御膳と Ume 御膳、湯葉丼 +700円 (2026年7月)、天ぷらの有無を選べる湯豆腐の昼、目の前で仕上げる厚揚げ、昼だけの黒蜜の豆腐アイス100円 (2026年10月)、生湯葉と揚げ豆腐の夜の献立3,600円 (2025年7月・10月)、勝手豆腐、生湯葉、豆腐よう (公式サイト)、店主の自家製果実酒と梅酒 (2025年10月)',
    neighborhood: '西陣、Seimei Shrine の近く。Omiya-Nakadachiuri バス停から徒歩2分',
    gf_detail: '要確認。豆腐と湯葉の料理だが、赤だし、醤油ベースのだし、揚げ豆腐、天ぷらもある (2025〜26年の口コミ)。',
    vegan_detail: '要確認。豆腐中心の御膳に刺身が付き、だしは不明 (2025〜26年の口コミ)。',
    notes: '[豆腐と湯葉・西陣] Seimei Shrine 近くの、豆腐と湯葉の小さなカウンター。家族経営で温かくもてなす。湯豆腐か冷奴に豆腐サラダ、絹揚げ、湯葉の煮物のTake 御膳1,600円、夜は生湯葉、店主の自家製果実酒も。予約を。カード不可 (QR 可)。月・木曜休み。',
  });
}

// ================================================================ Beer&Pasta スケルツォ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034335/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://scherzo.me';
  const W = day(['11:00', '22:00']); const E = day(['11:00', '15:00']);
  put({
    id: 'kyoto_beer_pasta_scherzo', name: 'Beer&Pasta スケルツォ (Beer & Pasta Scherzo)', category: 'OMNI',
    lat: 35.03282, lng: 135.75957, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fresh wheat pasta is the house specialty (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and an egg-free pasta is offered, but most sauces have cream, cheese, meat or seafood (Tabelog; January 2026 review).',
    hours_raw: 'Mon–Sat 11:00–22:00; Sun and holidays 11:00–15:00 (course dinners after 17:00 by booking — see the official calendar); open year-round (Tabelog). Bookings taken; since April 2026 dinner bookings by phone only (Tabelog). Service charge: Tabelog\'s Japanese original says 「チャージ料なし」 (no charge). Cards, e-money and PayPay (Tabelog). 23 seats (counter 3, tables 20), a private room for 4, hire for 15–26; non-smoking; wheelchair accessible; free Wi-Fi (Tabelog). Busy with Doshisha University students at lunch, especially right after second period (12:15) (May 2025, January 2026 reviews). On Karasuma-dori, 3 min north of Imadegawa Stn exit 1 (Tabelog; April 2025 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Imadegawa, north of Doshisha University — 3 min from Imadegawa Stn',
    cuisine: 'Craft beer and chewy fresh pasta: about 19–20 sauces with six fresh pastas, including short shapes and an egg-free one (Tabelog; January 2026): lunch sets from ¥1,000 with salad, B set with drink ¥1,200 (2025–26 reviews), extra pasta +¥600 (April 2025); octopus and anchovy oil pasta ¥1,400, shrimp tomato cream ¥1,300, Italian salad with prosciutto ¥900 (July 2026); carbonara, Bolognese, arrabbiata, yuzu cream with bacon, wasabi cream, firefly squid and broccoli, green bean and shrimp Genovese; stuffed pasta, chitarra; Sicilian white beans with tuna, Neapolitan chicken and chickpea stew, fried chicken; draft and craft beer, wine (2025–26 reviews)',
    website: SITE, gmaps: gm('Beer&Pasta スケルツォ 今出川'), menu_url: TB + 'dtlmenu/',
    notes: "[Fresh pasta & craft beer · Imadegawa] An independent pasta shop north of Doshisha, packed with students at lunch: pick from about 20 sauces and six chewy fresh pastas, with lunch sets from ¥1,000 and evening plates around ¥1,300–1,400 alongside good draft beer. No cover charge.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 10 October 2017 (Tabelog). The shop describes itself on Tabelog as an independent store, not a franchise, able to arrange plans on request.',
      philosophy: 'Craft beer and chewy fresh pasta (Tabelog).',
      specialty: 'Fresh pasta; carbonara.',
      anecdotes: [
        { text: 'A July 2026 regular tried the Sicilian white beans with tuna and a Neapolitan chicken and chickpea stew, and called the stuffed-pasta carbonara a rare find.', source: R + 'B478570784/' },
        { text: 'A January 2026 diner chose the egg-free pasta with tomato sauce, then decided the draft beer was even better than the pasta.', source: R + 'B520920664/' },
        { text: 'An August 2026 traveller at a late Obon lunch tasted shrimp tomato cream, Bolognese and carbonara and vowed to return.', source: R + 'B533697063/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Beer&Pasta スケルツォ、パスタ、上京区相国寺門前町643-1、今出川駅1番出口から北へ徒歩3分、月〜土 11:00〜22:00、日祝 11:00〜15:00 (17時以降は予約のコースのみ)、無休、予約可 (2026年4月から夜は電話のみ)、チャージ料なし、カード・電子マネー・PayPay 可、23席 (カウンター3、テーブル20)、4名の個室、貸切15〜26名、禁煙、車椅子可、Wi-Fi、ベジタリアンメニュー、2017年10月10日オープン、クラフトビールともちもちの生パスタ、19種のソースと6種の麺、フランチャイズではない個人店。口コミ (2025年4月〜2026年11月、英語): ランチセット1,000円から、B セット1,200円、パスタの追加600円、タコとアンチョビのオイル1,400円、海老のトマトクリーム1,300円、生ハムのイタリアンサラダ900円、カルボナーラ、ボロネーゼ、アラビアータ、柚子クリーム、わさびクリーム、ホタルイカとブロッコリー、インゲンと海老のジェノベーゼ、詰め物のパスタ、キタッラ、卵を使わない麺、シチリア風白いんげんとツナ、ナポリ風の鶏とひよこ豆の煮込み、唐揚げ、生ビール、昼は同志社の学生で混む。',
      confidence: 'medium', sources: [TB, SITE, R + 'B473727829/', R + 'B478570784/', R + 'B504184815/', R + 'B505276842/', R + 'B507144646/', R + 'B519045725/', R + 'B520920664/', R + 'B531642019/', R + 'B533697063/', R + 'B538755371/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose a sauce and a pasta shape.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区相国寺門前町643-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.032820, 135.759570); cross-checked: GSI 京都府京都市上京区相国寺門前町643番地 (lot) 113m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531642019/', R + 'B473727829/'],
    price_note: 'Prices from January–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fresh pasta lunch B set (pasta, salad, drink)', '¥1,200', 'Lunch', 'no', 'ask', 'January 2026 review.', 'pasta_b_set'),
      it('', '', 'Octopus and anchovy oil pasta', '¥1,400', 'Pasta', 'no', 'no', 'July 2026 review.', 'tako_anchovy'),
    ] }, {
    cuisine: 'クラフトビールともちもちの生パスタ。約19〜20種のソースと、ショートパスタや卵を使わないものを含む6種の生パスタ (食べログ、2026年1月): サラダ付きのランチセット1,000円から、ドリンク付きの B セット1,200円 (2025〜26年の口コミ)、パスタの追加 +600円 (2025年4月)。タコとアンチョビのオイル1,400円、海老のトマトクリーム1,300円、生ハムのイタリアンサラダ900円 (2026年7月)。カルボナーラ、ボロネーゼ、アラビアータ、ベーコンの柚子クリーム、わさびクリーム、ホタルイカとブロッコリー、インゲンと海老のジェノベーゼ、詰め物のパスタ、キタッラ。シチリア風白いんげんとツナ、ナポリ風の鶏とひよこ豆の煮込み、唐揚げ。生ビールとクラフトビール、ワイン (2025〜26年の口コミ)',
    neighborhood: '今出川、Doshisha 大学の北。今出川駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。小麦の生パスタが看板 (2025〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアンメニューとあり、卵を使わない麺もあるが、多くのソースにクリーム、チーズ、肉、魚介を使う (食べログ、2026年1月の口コミ)。',
    notes: '[生パスタとクラフトビール・今出川] Doshisha 大学の北の、昼は学生でにぎわう個人のパスタ店。約20種のソースと6種のもちもちの生パスタを選べる。ランチセットは1,000円から、夜は1,300〜1,400円ほどの皿においしい生ビール。チャージなし。',
  });
}

// ================================================================ センボンカリー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025791/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_senbon_curry_imadegawa', name: 'センボンカリー (Senbon Curry)', category: 'OMNI',
    lat: 35.032374, lng: 135.756639, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick roux curry with breaded cutlets and fried toppings (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat-based curry sauce, cutlets, chicken nanban and beef tendon (2026 reviews).',
    hours_raw: 'Mon and Wed–Fri 11:00–14:00 and 18:00–21:00; closed Tuesday, Saturday and Sunday; hours may change (Tabelog). No bookings (Tabelog). Cards, e-money and QR (Tabelog). 15 counter seats; non-smoking; children and strollers welcome; bicycle parking (Tabelog). Rice from small to large — the M size is about two portions (March and July 2026 reviews). Fukujinzuke and shibazuke on the counter (September 2026 review). Popular with students from the university next door, several 2026 reviewers note. On Shinmachi-Kamidachiuri, 5 min from Imadegawa Stn (Tabelog; April 2026 review).',
    hours: { 0: D, 2: D, 3: D, 4: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi-Kamidachiuri, by the university — 5 min from Imadegawa Stn',
    cuisine: 'Thick, dark homestyle curry on a wooden plate with shredded cabbage, reminding reviewers of Kanazawa curry (2026 reviews): pork cutlet curry ¥850 (September 2026), roast cutlet curry ¥950 (April 2026), chicken nanban curry (first on the menu), chicken katsu, spicy katsu curry around ¥1,000, beef curry, vegetable curry, beef tendon topping, a limited grilled beef rice; cutlets fried to order; mild to extra-spicy (2026 reviews)',
    website: null, gmaps: gm('センボンカリー 今出川'), menu_url: null,
    notes: "[Student curry counter · Imadegawa] A weekday curry counter by the university with thick, dark, homestyle curry and cutlets fried to order — pork cutlet, roast cutlet, chicken nanban — for about ¥850–1,000, with big rice portions. Open Mon and Wed–Fri only.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 5 January 2010 (Tabelog).',
      philosophy: null, specialty: 'Chicken nanban curry; pork cutlet curry.',
      anecdotes: [
        { text: 'A May 2026 regular finally tried the limited grilled beef rice, stir-fried in the back kitchen, and sent compliments to the owner.', source: R + 'B468157681/' },
        { text: 'A March 2026 diner had chicken nanban curry with beef tendon and rated it above certain chain shops.', source: R + 'B525362884/' },
        { text: 'On 22 April 2026 a lunch diner got thick, black chicken katsu curry within five minutes and was reminded of Kanazawa curry.', source: R + 'B526620585/' },
      ],
      japanese_sources_summary: '食べログ: センボンカリー、カレー・食堂、上京区裏風呂町369、今出川駅から徒歩5分、月・水〜金 11:00〜14:00・18:00〜21:00、火・土・日休み、予約不可、カード・電子マネー・QR 可、カウンター15席、禁煙、子ども可、駐輪場、2010年1月5日オープン。口コミ (2026年3〜9月、英語): Shinmachi-Kamidachiuri、木の皿にキャベツの千切り、濃く黒いカレー (Kanazawa カレーのよう)、豚カツカレー850円、ロースカツカレー950円、チキン南蛮カレー、チキンカツ、辛口カツカレー約1,000円、ビーフカレー、野菜カレー、牛すじのトッピング、限定の焼肉ライス、注文ごとに揚げるカツ、M サイズはご飯2杯分、福神漬と柴漬け、学生が多い。',
      confidence: 'medium', sources: [TB, R + 'B468157681/', R + 'B525175155/', R + 'B525346377/', R + 'B525346493/', R + 'B525362884/', R + 'B526620585/', R + 'B527181807/', R + 'B531800536/', R + 'B534925893/', R + 'B536822076/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; choose rice size and spice level.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区裏風呂町369',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.032374, 135.756639); cross-checked: GSI 京都府京都市上京区裏風呂町369番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534925893/', R + 'B527181807/'],
    price_note: 'Prices from April and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork cutlet curry', '¥850', 'Curry', 'no', 'no', 'September 2026 review.', 'katsu_curry'),
      it('', '', 'Roast cutlet curry', '¥950', 'Curry', 'no', 'no', 'April 2026 review.', 'rosu_katsu_curry'),
    ] }, {
    cuisine: '木の皿にキャベツの千切りを添える、濃く黒い家庭的なカレー。Kanazawa カレーを思わせるという声 (2026年の口コミ): 豚カツカレー850円 (2026年9月)、ロースカツカレー950円 (2026年4月)、メニューの最初にあるチキン南蛮カレー、チキンカツ、約1,000円の辛口カツカレー、ビーフカレー、野菜カレー、牛すじのトッピング、限定の焼肉ライス。カツは注文ごとに揚げる。辛さは普通から大辛まで (2026年の口コミ)',
    neighborhood: 'Shinmachi-Kamidachiuri、大学のそば。今出川駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。濃いルウのカレーにパン粉のカツや揚げ物 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉のカレー、カツ、チキン南蛮、牛すじ (2026年の口コミ)。',
    notes: '[学生のカレー・今出川] 大学のそばの平日だけのカレーのカウンター。濃く黒い家庭的なカレーに、注文ごとに揚げる豚カツ、ロースカツ、チキン南蛮で850〜1,000円ほど、ご飯の量も多い。月・水〜金のみ。',
  });
}

save();
