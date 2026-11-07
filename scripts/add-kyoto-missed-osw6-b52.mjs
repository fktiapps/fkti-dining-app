// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 52.
//   + ホルモン豚金 Horumon Tonkin (one-man pork-offal yakiniku, Mototanaka) — core
//   + bar N (sake and obanzai bar at the mouth of Yanagi-koji, Kawaramachi) — rest
//   + 高瀬川 くりお Takasegawa Kurio (yuba, tofu and Kujo-negi hot pots in a riverside townhouse) — rest
//   + 銀水 Ginsui (single-serving hot pots and sukiyaki by Shijo-ohashi, Kamo-river terrace) — rest
//   Core: ホルモン豚金 added, 来来亭 一乗寺店 skipped (chain) — core is now exhausted in this lane.
//   Rest taken nearest-first from `next rest 2000`; every shop passed over is skipped below with a reason.
//   Same-name counts first (2026-11-07): ホルモン豚金 — one (the BUTAKIN chain is a different business). bar N — one, the second
//   shop of the Yanagi-koji TAKA bar (December 2022 review), a local pair. 高瀬川 くりお — one. 銀水 — one in Kyoto (other "Ginsui"
//   hits are unrelated ramen shops). None is in data/kyoto.json by name or address.
//   Service charges per Tabelog's Japanese original: 豚金 「なし」 (the English page wrongly says a charge is added); 銀水
//   「ドリンクのみの場合チャージ料500円、サービス料は無料」; bar N and くりお list none. No halal claims; no owner deaths.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-52');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26014240', 'chain: Rairai-tei — Tabelog lists Rairai-tei ramen shops nationwide (Shakujii, Kawasaki, Totsuka and many more) (https://tabelog.com/en/rstLst/?sw=%E6%9D%A5%E6%9D%A5%E4%BA%AD).');
skip('26017504', 'chain: Mary\'s chocolate counter in a department store — Tabelog lists Mary\'s at Yokohama Takashimaya, JR Kyoto Isetan, Keikyu Kamiooka and more (https://tabelog.com/en/rstLst/?sw=Mary%27s%20%E3%83%81%E3%83%A7%E3%82%B3%E3%83%AC%E3%83%BC%E3%83%88).');
skip('26003230', 'chain: Gramercy New York cake counter — Tabelog lists shops at Yokohama, Osaka and Shinjuku Takashimaya, Umeda Hankyu and more (https://tabelog.com/en/rstLst/?sw=%E3%82%B0%E3%83%A9%E3%83%9E%E3%82%B7%E3%83%BC%E3%83%8B%E3%83%A5%E3%83%BC%E3%83%A8%E3%83%BC%E3%82%AF).');
skip('26017912', 'chain: Wittamer sweets counter — Tabelog lists Wittamer at Daimaru Tokyo, Hanshin Umeda, Yokohama Takashimaya, JR Nagoya Takashimaya and more (https://tabelog.com/en/rstLst/?sw=%E3%83%B4%E3%82%A3%E3%82%BF%E3%83%A1%E3%83%BC%E3%83%AB).');
skip('26013394', 'chain: Vegeteria juice stand — Tabelog lists Vegeteria at JR Nagoya Takashimaya, Tobu Ikebukuro, Nihonbashi Takashimaya, Kobe Hankyu and more (https://tabelog.com/en/rstLst/?sw=%E3%83%99%E3%82%B8%E3%83%86%E3%83%AA%E3%82%A2).');
skip('26032408', 'chain: Doutor Coffee Shop — a national coffee chain (https://tabelog.com/en/rstLst/?sw=%E3%83%89%E3%83%88%E3%83%BC%E3%83%AB%20%E4%BA%AC%E9%83%BD).');
skip('26017708', 'not a dining spot, and no 2025–26 review: Kyuzaya\'s Takashimaya basement counter sells take-home tofu; the latest Tabelog review is June 2020 (https://tabelog.com/en/kyoto/A2601/A260201/26017708/).');
skip('26002738', 'chain: Minokichi — Tabelog lists Minokichi restaurants in department stores in Tokyo, Yokohama, Nagoya, Chiba, Umeda and Kyoto (https://tabelog.com/en/rstLst/?sw=%E7%BE%8E%E6%BF%83%E5%90%89).');
skip('26004856', 'chain: Unagi Toku — a Hamamatsu eel brand with shops in Hakata, Osaka, Shibuya, Ginza, Hamamatsu and Lake Hamana besides Kyoto (https://tabelog.com/en/rstLst/?sw=%E3%81%86%E3%81%AA%E3%81%8E%E5%BE%B3).');
skip('26038762', 'guests-only: the Soraniwa Terrace rooftop bar of the Shijo Kawaramachi Onsen hotel is open only to hotel guests (Tabelog remarks: https://tabelog.com/en/kyoto/A2601/A260201/26038762/).');
skip('26022616', 'duplicate of a record already in data: ビヤレストラン ハウスミュンヘン is the smaller-menu sister room next door to ビヤレストラン ミュンヘン (kyoto_beer_restaurant_munchen, same address; Tabelog: https://tabelog.com/en/kyoto/A2601/A260202/26022616/).');
skip('26040238', 'chain: Wagyu Sukiyaki Kyoto Chikarayama — Tabelog lists Chikarayama at Shijo Kawaramachi, Kyoto Ekimae, Gion, Sanjo Kawaramachi, Pontocho and Namba (https://tabelog.com/en/rstLst/?sw=%E5%8A%9B%E5%B1%B1).');
skip('26039752', 'sub-brand of a large parent: てんぷぅ is one of 26 brands and 60 shops run by THAN Co., Ltd. (https://than.co.jp/brands/).');
skip('26022544', 'no 2025–26 review of the shop itself: Kyoto Keiran Do is a baby-castella take-away stand whose latest shop review is December 2023 (the October 2026 review is of a festival stall) (https://tabelog.com/en/kyoto/A2601/A260202/26022544/).');
skip('26005288', 'chain: Torikizoku — a national yakitori chain (https://tabelog.com/en/rstLst/?sw=%E9%B3%A5%E8%B2%B4%E6%97%8F%20%E4%BA%AC%E9%83%BD).');

// ================================================================ ホルモン豚金
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26019010/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_horumon_tonkin', name: 'ホルモン豚金 (Horumon Tonkin)', category: 'OMNI',
    lat: 35.037149, lng: 135.781201, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grill-your-own pork offal with salt or sauce, half and half on request (2023–25 reviews); the sauce is likely soy-based; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork and chicken offal yakiniku shop (2019–26 reviews).',
    hours_raw: 'Mon, Fri, Sat, Sun and holidays 18:00–23:00; closed Tuesday, Wednesday and Thursday (Tabelog). Reservations accepted, by phone from 14:00 on open days; two-hour limit (Tabelog). Cash only — no cards, e-money or QR (Tabelog). No service charge (Tabelog, Japanese text: 「なし」 — the English page mistranslates this as a charge being added). 16 seats: a counter of 5 and three tables (Tabelog). Heated tobacco only; no under-20s (Tabelog). 4 min from Eiden Mototanaka (Tabelog).',
    hours: { 0: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Tanaka, near Eiden Mototanaka',
    cuisine: 'Pork-offal yakiniku with rare cuts, carefully cleaned so nothing smells (2022–26 reviews) · simmered pork offal ¥500 to start (August 2025) · offal mix of eight cuts, salt, sauce or half and half, ¥2,000–2,400 (August and December 2025) · tongue, heart, liver, uterus, cheek, skirt, short rib (2023–24 reviews) · chicken offal and fresh chicken sashimi of breast and heart (December 2025; July 2026) · vegetables with basil oil (March 2025)',
    website: null, gmaps: gm('ホルモン豚金 元田中'), menu_url: TB,
    notes: '[Pork-offal yakiniku · Mototanaka, a one-man grill counter] A 16-seat specialist near Eiden Mototanaka grilling pork — and some chicken — offal you rarely see elsewhere: an eight-cut mix in salt or sauce, simmered offal to start, fresh chicken sashimi. Light, clean-tasting and cheap. Cash only; dinner Friday to Monday; book by phone.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), running the shop alone (May 2022)'], origin: null,
      background: 'Per Tabelog: a pork-offal restaurant near Mototanaka. A May 2022 review says the owner runs everything alone; an August 2025 regular of several years describes a gruff-looking but friendly chef.',
      philosophy: null, specialty: 'Rare pork-offal cuts; simmered offal.',
      anecdotes: [
        { text: 'An August 2025 regular says no meal here starts without the ¥500 simmered offal, and warns that it is closed midweek.', source: R + 'B480173528/' },
        { text: 'A June 2024 diner walked from Kyoto Tower on a 35.9 °C day and drank four bottles of beer with the heart and skirt.', source: R + 'B461311670/' },
        { text: 'A February 2024 first-timer was surprised how light pork offal is compared with beef.', source: R + 'B479291209/' },
      ],
      japanese_sources_summary: '食べログ: ホルモン、左京区田中西大久保町14-5、叡電元田中駅から徒歩4分、月金土日祝18:00〜23:00、火水木休み、予約可 (営業日の14時以降)、2時間制、現金のみ、サービス料なし、16席 (カウンター5、テーブル3)、加熱式たばこのみ可で20歳未満は入店不可。口コミ (2019年11月〜2026年7月、英語): 豚ホルモンの専門店、店主が一人で営む、豚の煮込み500円、ホルモン8種盛り2,000〜2,400円 (塩、たれ、半々)、珍しい部位、臭みがない、鶏ホルモンと鶏刺し、バジルオイルの野菜。',
      confidence: 'medium', sources: [TB, R + 'B422101831/', R + 'B442886069/', R + 'B449670993/', R + 'B461311670/', R + 'B466852317/', R + 'B472631809/', R + 'B479291209/', R + 'B480173528/', R + 'B494487964/', R + 'B503224658/', R + 'B519032076/', R + 'B532913248/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone after 14:00; order the mix and choose salt or sauce; cash only; no under-20s. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区田中西大久保町14-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.037149, 135.781201); cross-checked: GSI 京都府京都市左京区田中西大久保町14番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B480173528/', R + 'B519032076/'],
    price_note: 'Prices from August and December 2025 reviews; cash only; no service charge.', last_checked: TODAY, items: [
      it('', '', 'Simmered pork offal (regular)', '¥500', 'Starters', 'ask', 'no', 'August 2025.', 'nikomi'),
      it('', '', 'Offal mix, eight cuts (salt, sauce or half and half)', '¥2,000–2,400', 'Yakiniku', 'ask', 'no', 'August and December 2025.', 'horumon_mix'),
      it('', '', 'Chicken sashimi (breast and heart)', '', 'Starters', 'ask', 'no', 'December 2025.', 'tori_sashi'),
    ] }, {
    cuisine: '珍しい部位の豚ホルモンの焼肉、丁寧な下処理で臭みがない (2022〜2026年の口コミ)・まずは豚の煮込み500円 (2025年8月)・8種のホルモン盛り、塩、たれ、半々で2,000〜2,400円 (2025年8月・12月)・タン、ハツ、レバー、子宮、ほほ、ハラミ、カルビ (2023〜2024年の口コミ)・鶏ホルモンと新鮮な鶏刺し (胸とハツ) (2025年12月、2026年7月)・バジルオイルの野菜 (2025年3月)',
    neighborhood: '田中、叡電元田中駅の近く',
    gf_detail: '要確認。豚ホルモンを塩かたれで焼く、半々も可 (2023〜2025年の口コミ)。たれは醤油ベースと思われる。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。豚と鶏のホルモン焼肉の店 (2019〜2026年の口コミ)。',
    notes: '[豚ホルモン焼肉・元田中、店主一人の店] 叡電元田中駅近くの16席の専門店。ほかでは見ない豚ホルモンと鶏ホルモンを、8種盛りを塩かたれで、最初に煮込み、鶏刺しも。あっさりして手頃。現金のみ、金〜月の夜、電話で予約を。',
  });
}

// ================================================================ bar N
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036830/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://enne-kyoto-japan.net/';
  put({
    id: 'kyoto_bar_n_yanagikoji', name: 'bar N', category: 'OMNI',
    lat: 35.004388, lng: 135.7683, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. About ten obanzai on the counter — simmered vegetables, vinegared octopus, stir-fries (2023–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: obanzai include nikujaga, octopus and salmon dishes, and are dashi-based (2023–25 reviews).',
    hours_raw: 'Tabelog lists no hours. Reviews describe daytime obanzai and an evening bar; a July 2025 visitor reported Wednesday to Sunday 13:00–21:00, and a January 2026 visitor reported weekday opening from 16:00 — check before going. Closes early (October 2023). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR (Tabelog). A counter downstairs and tables upstairs in a restored old building with glass walls (October 2023; April 2025; August 2026). Non-smoking (Tabelog). At the entrance of Yanagi-koji, 2 min from Kyoto-Kawaramachi (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yanagi-koji, Kawaramachi — 2 min from Kyoto-Kawaramachi',
    cuisine: 'Japanese sake and obanzai in a small alley bar (2022–26 reviews) · about ten obanzai laid out on the counter (December 2025; January 2026) · nikujaga, simmered eggplant and tomato (July 2023); salmon and mushroom stir-fry, octopus-cucumber-seaweed vinegar dish, grilled eggplant with spicy edamame (July 2025); eggplant with plum sauce (August 2026) · sake by the half-go (90 ml), including one brand at different polishing ratios; warm sake on request (2023–26 reviews)',
    website: OF, gmaps: gm('bar N 柳小路 京都'), menu_url: TB,
    notes: '[Sake and obanzai · Yanagi-koji, Kawaramachi] A tiny glass-fronted bar at the mouth of the Yanagi-koji alley, sister to the Yanagi-koji TAKA bar: about ten home-style obanzai on the counter, sake poured by the half-go — sometimes one brand at several polishing ratios — and a friendly owner who suggests warm sake in winter. Good for a quick drink or a second stop. Cash only; hours vary, so check.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) behind the counter (2023–26 reviews)'], origin: null,
      background: 'A December 2022 review describes bar N as the second shop of the popular Yanagi-koji TAKA, a bar at night that serves obanzai in the day. Reviews from 2023 to 2026 describe a friendly owner who knows sake.',
      philosophy: null, specialty: 'Obanzai with sake by the half-go.',
      anecdotes: [
        { text: 'A January 2025 visitor liked ordering sake in 90 ml half-go pours and found it easy to chat with the owner.', source: R + 'B499637511/' },
        { text: 'A January 2026 visitor took the owner\'s suggestion of warm sake on a cold day with the obanzai from the counter.', source: R + 'B521503417/' },
        { text: 'A July 2025 returning visitor thought the grilled eggplant needed longer, but loved the rest.', source: R + 'B493459801/' },
      ],
      japanese_sources_summary: '食べログ: バー、中京区中之町577-21 柳小路、阪急京都河原町駅から徒歩約2分、営業時間の記載なし、予約可、現金のみ、カウンター、禁煙。口コミ (2022年12月〜2026年8月、英語): 柳小路 TAKA の2号店、昼はおばんざい、夜はバー、カウンターに10種ほどのおばんざい、肉じゃが、なすとトマトの炊いたもの、鮭ときのこの炒め物、蛸ときゅうりとわかめの酢の物、日本酒は半合 (90ml) から、同じ銘柄の精米歩合違い、2025年7月は水〜日13時〜21時、2026年1月は平日16時から。',
      confidence: 'medium', sources: [TB, OF, R + 'B458686163/', R + 'B466042809/', R + 'B473274640/', R + 'B477689018/', R + 'B483517788/', R + 'B493459801/', R + 'B496212321/', R + 'B499637511/', R + 'B504347469/', R + 'B518919167/', R + 'B521503417/', R + 'B534591980/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the obanzai on the counter; order sake by the half-go; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中之町577-21 柳小路',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004388, 135.768300); cross-checked: GSI 京都府京都市中京区中之町577番地 (lot) 33m; kyoto_oniku_to_yasai_hachibe is 9 m away in the same alley; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B493459801/', R + 'B499637511/'],
    price_note: 'No item prices found in the sources; cash only.', last_checked: TODAY, items: [
      it('', '', 'Obanzai from the counter', '', 'Obanzai', 'ask', 'no', '2023–26 reviews.', 'obanzai'),
      it('', '', 'Japanese sake by the half-go (90 ml)', '', 'Sake', 'ask', 'ask', 'January 2025.', 'sake_hango'),
    ] }, {
    cuisine: '小さな路地のバーで日本酒とおばんざい (2022〜2026年の口コミ)・カウンターに並ぶ10種ほどのおばんざい (2025年12月、2026年1月)・肉じゃが、なすとトマトの炊いたもの (2023年7月)、鮭ときのこの炒め物、蛸ときゅうりとわかめの酢の物、焼きなすのピリ辛枝豆のせ (2025年7月)、なすの梅だれ (2026年8月)・日本酒は半合 (90ml) から、同じ銘柄の精米歩合違いも、燗もできる (2023〜2026年の口コミ)',
    neighborhood: '河原町の柳小路。京都河原町駅から徒歩2分',
    gf_detail: '要確認。カウンターに10種ほどのおばんざい、炊いたもの、酢の物、炒め物 (2023〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。肉じゃが、蛸や鮭の料理など、出汁のおばんざい (2023〜2025年の口コミ)。',
    notes: '[日本酒とおばんざい・河原町の柳小路] 柳小路の入口にあるガラス張りの小さなバー。柳小路 TAKA の姉妹店で、カウンターに10種ほどの家庭的なおばんざい、日本酒は半合から、同じ銘柄の精米歩合違いも。冬は店主が燗をすすめてくれる。軽く一杯や二軒目に。現金のみ、営業時間は変わるので確認を。',
  });
}

// ================================================================ 高瀬川 くりお
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002276/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://www.qulio.com/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'kyoto_takasegawa_kurio', name: '高瀬川 くりお (Takasegawa Kurio)', category: 'OMNI',
    lat: 35.002263, lng: 135.770007, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tofu, yuba and hot pots, but also tempura, wheat-gluten (fu) dishes and soy-seasoned sukiyaki (2024–25 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based hot pots, wagyu sukiyaki, Saikyo-miso black cod (2024–25 reviews).',
    hours_raw: 'Daily 17:00–23:30; hours may change (Tabelog). Reservations accepted, including online via the official site; advised at weekends (Tabelog; September 2024, February 2025). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). A renovated townhouse on the Takase river with window tables upstairs and tatami seating (Tabelog; 2024–26 reviews). Non-smoking (Tabelog). On Kawaramachi south of Shijo, 3 min from Kyoto-Kawaramachi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takase river, south of Shijo Kawaramachi',
    cuisine: 'Kyoto tofu, yuba and Kujo green onion dishes in a riverside townhouse (2024–26 reviews) · Kujo green onion and black wagyu sukiyaki course ¥4,994 incl. tax (December 2025); about ¥4,800 (December 2024) · yuzu zosui with a whole yuzu, the most popular dish (July 2025; March 2026) · clay-pot tofu, yuba sashimi (April 2025); three-kind fresh yuba tempura ¥968, Saikyo-miso black cod ¥1,320 (October 2024) · yudofu, grated-yam hot pot (October and December 2024; December 2025) · fu with ice cream and black syrup (December 2025)',
    website: OF, gmaps: gm('高瀬川 くりお'), menu_url: TB,
    notes: '[Tofu and Kyoto hot pots · Takase river, a riverside townhouse] A renovated townhouse on the Takase river where upstairs window tables look over the water and, in spring, cherry blossoms: fresh yuba, clay-pot tofu, Kujo green onion and wagyu sukiyaki courses from about ¥5,000, and a signature yuzu rice porridge under a whole yuzu. Book at weekends.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a dining bar and Japanese restaurant on the Takase river, taking reservations through its website. A September 2024 review from a guest who has come every year for ten years describes an obanzai restaurant in a renovated townhouse.',
      philosophy: null, specialty: 'Yuba, tofu and Kujo green onion hot pots; yuzu zosui.',
      anecdotes: [
        { text: 'A September 2024 visitor from northern Kanto has come once a year for ten years.', source: R + 'B500843143/' },
        { text: 'A May 2024 grandparent brought a university-student grandson here for the fresh fu.', source: R + 'B485064201/' },
        { text: 'A July 2025 diner liked the corn tempura and yuzu zosui but found drink prices a little touristy.', source: R + 'B509944680/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・日本料理、下京区四条河原町下ル船頭町273-1、四条河原町駅から徒歩3分、毎日17:00〜23:30、予約可 (公式サイトから)、カード可、座敷、禁煙。口コミ (2024年5月〜2026年3月、英語): 高瀬川沿いの町家、2階の窓際から川と桜、Kujo のねぎと黒毛和牛のすき焼きコース税込4,994円、柚子まるごとの柚子雑炊が一番人気、土鍋豆腐、湯葉の刺身、生湯葉の天ぷら3種968円、銀だらの Saikyo 味噌焼き1,320円、湯豆腐、すりおろした山芋の鍋、麩とアイスの黒蜜がけ。',
      confidence: 'medium', sources: [TB, OF, R + 'B485064201/', R + 'B486772331/', R + 'B498019088/', R + 'B500843143/', R + 'B501510867/', R + 'B503057495/', R + 'B504948201/', R + 'B505236405/', R + 'B509944680/', R + 'B518679523/', R + 'B520506584/', R + 'B525373616/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; ask for a window table upstairs for the river view. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区四条河原町下ル船頭町273-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.002263, 135.770007); GSI resolves 船頭町273-1 only to the town (66 m away), so the Tabelog pin is kept as approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B503057495/', R + 'B520506584/'],
    price_note: 'Prices from October 2024 and December 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kujo green onion and black wagyu sukiyaki course', '¥4,994', 'Courses', 'no', 'no', 'Tax included; December 2025.', 'sukiyaki_course'),
      it('', '', 'Fresh yuba tempura, three kinds', '¥968', 'À la carte', 'no', 'ask', 'October 2024.', 'yuba_tempura'),
      it('', '', 'Saikyo-miso black cod', '¥1,320', 'À la carte', 'ask', 'no', 'October 2024.', 'gindara_saikyo'),
      it('', '', 'Yuzu zosui', '', 'Rice', 'ask', 'no', 'Most popular; July 2025.', 'yuzu_zosui'),
    ] }, {
    cuisine: '高瀬川沿いの町家で、京の豆腐、湯葉、Kujo のねぎの料理 (2024〜2026年の口コミ)・Kujo のねぎと黒毛和牛のすき焼きコース税込4,994円 (2025年12月)、約4,800円 (2024年12月)・柚子まるごとの柚子雑炊が一番人気 (2025年7月、2026年3月)・土鍋豆腐、湯葉の刺身 (2025年4月)、生湯葉の天ぷら3種968円、銀だらの Saikyo 味噌焼き1,320円 (2024年10月)・湯豆腐、すりおろした山芋の鍋 (2024年10月・12月、2025年12月)・麩とアイスの黒蜜がけ (2025年12月)',
    neighborhood: '高瀬川沿い、四条河原町の南',
    gf_detail: '要確認。豆腐、湯葉、鍋のほか、天ぷら、麩の料理、醤油のすき焼きもある (2024〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁の鍋、和牛のすき焼き、銀だらの Saikyo 味噌焼き (2024〜2025年の口コミ)。',
    notes: '[豆腐と京の鍋・高瀬川沿いの町家] 高瀬川沿いの改装した町家。2階の窓際の席から川と春には桜が見える。生湯葉、土鍋豆腐、Kujo のねぎと和牛のすき焼きのコースは約5,000円から、看板は柚子まるごとの柚子雑炊。週末は予約を。',
  });
}

// ================================================================ 銀水
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000830/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_ginsui_shijo_ohashi', name: '銀水 (Ginsui)', category: 'OMNI',
    lat: 35.003042, lng: 135.770773, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Single-serving hot pots and sukiyaki in soy-based broths (2021–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck, beef, pork and chicken hot pots and sukiyaki (2021–26 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last order 14:00), dinner 17:00–22:00 (last order 21:00); closed Wednesday (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). Charge ¥500 for drinks only, no service charge (Tabelog, Japanese text: 「ドリンクのみの場合チャージ料500円、サービス料は無料」). 28 seats: sunken-kotatsu seating downstairs and private rooms for 2–10 upstairs, plus a terrace on the Kamo river in season (Tabelog; 2018–24 reviews). An ashtray on the river terrace (May 2024). Just south of the west end of Shijo-ohashi, 3 min from Kyoto-Kawaramachi (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-ohashi west end, on the Kamo river',
    cuisine: 'Individual hot pots so each diner can choose, plus sukiyaki (2021–26 reviews) · duck hot pot ¥3,500 (May 2024); natural watercress and duck hot pot ¥2,420 at lunch (December 2021) · beef, pork and chicken hot pots and sukiyaki (March 2023; October 2024) · karasumi with daikon (August 2023) · staff help with the cooking (September 2023; January 2025)',
    website: null, gmaps: gm('銀水 四条大橋 鍋'), menu_url: TB,
    notes: '[Hot pots and sukiyaki · Shijo-ohashi, on the Kamo river] A traditional house down a stone-paved lane by Shijo-ohashi serving one-person hot pots — duck, watercress and duck, beef, chicken — and good-value sukiyaki, with sunken-kotatsu seats, private rooms upstairs and a riverside terrace in the warm months. Solo diners welcome. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an izakaya serving sukiyaki and beef tongue by the west end of Shijo-ohashi. An August 2023 review describes a family business, with the owner and a twenty-something son running the room; a December 2021 review notes a sign welcoming solo hot-pot diners.',
      philosophy: null, specialty: 'One-person hot pots; sukiyaki.',
      anecdotes: [
        { text: 'A December 2021 business traveller was drawn in by a "solo hot pot welcome" sign and had the watercress and duck hot pot.', source: R + 'B444132495/' },
        { text: 'An August 2023 diner queued before opening for the duck hot pot and found the room full soon after.', source: R + 'B476753312/' },
        { text: 'A May 2018 group had booked the riverside terrace but moved inside because it was too cold.', source: R + 'B353878544/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・すき焼き・牛タン、下京区四条大橋西詰南入ル、阪急京都河原町駅から徒歩3分、12:00〜15:00 (L.O. 14:00)、17:00〜22:00 (L.O. 21:00)、水曜休み、予約可、カード可、ドリンクのみの場合チャージ料500円、サービス料は無料、28席 (1階は掘りごたつ、2階は個室)。口コミ (2018年5月〜2026年10月、英語): 一人鍋、鴨鍋3,500円、天然クレソンと鴨の鍋2,420円、牛・豚・鶏の鍋とすき焼き、karasumi と大根、鴨川のテラス、石畳の路地の古い家、家族で営む。',
      confidence: 'medium', sources: [TB, R + 'B324747169/', R + 'B353878544/', R + 'B444132495/', R + 'B458418357/', R + 'B458684562/', R + 'B476753312/', R + 'B486826840/', R + 'B494095398/', R + 'B502023014/', R + 'B509536965/', R + 'B531014525/', R + 'B536861540/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Each diner orders a separate hot pot; staff help cook; ask for the river terrace in season. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区四条大橋西詰南入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003042, 135.770773); the address has no lot number and GSI resolves it only to the ward, so the Tabelog pin is kept as approximate; kyoto_a_kyoto is 7.6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B444132495/', R + 'B486826840/'],
    price_note: 'Prices from December 2021 and May 2024 reviews; ¥500 charge for drinks only.', last_checked: TODAY, items: [
      it('', '', 'Duck hot pot (for one)', '¥3,500', 'Hot pots', 'ask', 'no', 'May 2024.', 'kamo_nabe'),
      it('', '', 'Natural watercress and duck hot pot (lunch)', '¥2,420', 'Hot pots', 'ask', 'no', 'December 2021.', 'cresson_kamo_nabe'),
      it('', '', 'Sukiyaki', '', 'Sukiyaki', 'ask', 'no', 'October 2024.', 'sukiyaki'),
      it('', '', 'Drinks-only charge', '¥500', 'Charge', '', '', 'Tabelog.', 'drink_charge'),
    ] }, {
    cuisine: '一人ずつ選べる一人鍋とすき焼き (2021〜2026年の口コミ)・鴨鍋3,500円 (2024年5月)、昼の天然クレソンと鴨の鍋2,420円 (2021年12月)・牛、豚、鶏の鍋とすき焼き (2023年3月、2024年10月)・karasumi と大根 (2023年8月)・店の人が調理を手伝ってくれる (2023年9月、2025年1月)',
    neighborhood: '四条大橋の西詰、鴨川沿い',
    gf_detail: '要確認。醤油ベースの一人鍋とすき焼き (2021〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鴨、牛、豚、鶏の鍋とすき焼き (2021〜2026年の口コミ)。',
    notes: '[鍋とすき焼き・四条大橋、鴨川沿い] 四条大橋そばの石畳の路地にある古い家。鴨、クレソンと鴨、牛、鶏の一人鍋と手頃なすき焼き。掘りごたつ、2階の個室、暖かい季節は川沿いのテラスも。一人でも歓迎。水曜休み。',
  });
}

save();
