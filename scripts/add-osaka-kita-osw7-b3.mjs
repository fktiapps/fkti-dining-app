// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 3.
//   + 皇蘭 アルデ新大阪店 Koran Arude shin osaka ten (Kobe Chinese house since 1959; chuka soba and dim sum inside Shin-Osaka Station)
//   + トントン拍子 Tonton Byoshi (okonomiyaki house near Shin-Osaka; one ¥950 daily lunch set, okonomiyaki at night)
//   + 西中島 光龍益 Nishinakajima Koryumasu (pork-skin and chicken white-broth ramen and tsukemen; Tabelog Ramen 100 2023–2025)
//   + らぁ麺 喜希 Ramen Yoshiki (tonkotsu and daily-special ramen from ¥650, opened 2013)
//   - skipped 27058304 大阪王将 新大阪店, 27061724 亀王 JR新大阪駅店, 27017720 たこ家道頓堀くくる 大阪のれんめぐり店,
//     27016982 河童ラーメン本舗 新大阪店: chains already in data/osaka.json; 27157716 ラーメン豚山 新大阪店: chain (Gift Holdings).
//   Lane check: every id above is even. Taken in queue order (nearest first) after the five chain skips.
//   Chain check: Koran is a branch of 株式会社皇蘭 (Kobe, "SINCE 1959", main shop in Nankinmachi; kouran.com, read 2026-11-01),
//   a regional Kobe company not in data/osaka.json, kept like other small groups. Koryumasu is the Nishinakajima branch of
//   "Tonpi to Tori no Koryumasu" in Sakuranomiya (October 2026 review); not in data/osaka.json; two shops. Tonton Byoshi and
//   Ramen Yoshiki name no other shop. None of the four is in data/osaka.json (grep by id, name and address, 2026-11-01).
//   Ramen blocks: Koryumasu and Yoshiki are ramen shops, but the sources for both describe richness, clarity and noodles and say nothing
//   of oil (Koryumasu) or tare strength and aroma (Yoshiki), so per the 2026-11-01 lesson the ramen block is left off both and the
//   bowls are described in cuisine/notes instead. Koran is a Chinese noodle house: cuisine other, no block.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27058304', 'chain already in data: Osaka Ohsho (osaka_osaka_ohsho_dotonbori_honten, osaka_osaka_ohsho_amemura)');
skip('27061724', 'chain already in data: Kio / 亀王 ramen (osaka_ramen_kio_dotonbori, osaka_kyushu_ramen_kio_namba_ngk)');
skip('27017720', 'chain already in data: Takoya Dotonbori Kukuru (osaka_takoya_kukuru_souemoncho)');
skip('27016982', 'chain already in data: Kappa Ramen Honpo (osaka_kappa_ramen_honpo_sennichimae and two more branches)');
skip('27157716', 'chain: Ramen Butayama, a Jiro-style brand of Gift Holdings (about 52 shops in March 2026 per a blog; group of about 810 shops per a recruiting page)');

// ================================================================ 皇蘭 アルデ新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27005370/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kouran.com/';
  const D = day(['10:00', '22:30']);
  put({
    id: 'osaka_koran_arde_shin_osaka', name: '皇蘭 アルデ新大阪店 (Koran Arude shin osaka ten)', category: 'OMNI',
    lat: 34.732756, lng: 135.498962, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a noodle and dim-sum house; the chuka soba, paitan and dandan noodles are wheat noodles, and the buns and xiaolongbao are wheat dough.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the chuka soba is a soy-sauce chicken broth with fatty chashu, the paitan a chicken broth, and the pork bun uses Kagoshima black pork.',
    hours_raw: 'Daily 10:00–22:30; hours and closing days may change (Tabelog). No reservations (Tabelog). Cards, e-money and PayPay (Tabelog). 20 seats at tables and a counter; non-smoking (Tabelog). Renovated by February 2024 so solo diners sit comfortably (a February 2024 review). A line of three at 12:30 moved fast (April 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1, in the Arde Shin-Osaka shopping area of Shin-Osaka Station, near the Midosuji Line entrance (Tabelog; October 2026); reached on foot through the underground passage from the east exit (February 2024)',
    cuisine: 'Kobe Motomachi chuka soba and Chinese dishes (February 2024) · Koran chuka soba with flavoured egg ¥1,080, large noodles +¥150 (October 2026): soy-sauce chicken broth, straight noodles, fatty chashu (2026) · chicken paitan ramen, creamy, with medium-thin noodles, two large slices of chashu and bean sprouts (April and October 2026) · Sichuan dandan noodles ¥1,230 (September 2026) · tomato and basil ramen (October 2026) · pork bun ¥330, with a poster naming Awaji onions and Kagoshima black pork (September 2026) · xiaolongbao (sold out on an October 2026 visit) · fried rice, half fried rice (2026) · Tianjin rice with shrimp and a sweet sauce (November 2026) · Shaoxing wine ¥600 (September 2026)',
    website: SITE, gmaps: gm('皇蘭 アルデ新大阪店'), menu_url: null,
    notes: "[Chinese · Shin-Osaka Station, Kobe chuka soba by the Midosuji gates] The Shin-Osaka Station counter of Koran, a Kobe Chinese house dating from 1959 with its main shop in Nankinmachi (official site), tucked into the Arde Shin-Osaka shops by the Midosuji Line entrance and open 10:00 to 22:30 every day. Business travellers waiting for a Shinkansen come for the Koran chuka soba, a soy-sauce chicken broth with straight noodles and soft, fatty chashu, \"the famous Kobe Motomachi Ramen\" to one returning diner (February 2024), or the creamier chicken paitan. There are dandan noodles, a tomato-and-basil ramen, pork buns of Kagoshima black pork and Awaji onion, xiaolongbao that can sell out, and fluffy fried rice. Opinions run from \"the quintessential chuka soba\" to \"just average\" (October 2026). The line moves quickly.",
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff of 株式会社皇蘭 (unnamed)'], origin: null, background: 'Per the official site (kouran.com, read 2026-11-01): 株式会社皇蘭, based in Nada-ku, Kobe, with its own factory, "SINCE 1959", a main shop in Nankinmachi and other brands (山神山人, いずみヌードル). A February 2024 diner calls the bowl "the famous Kobe Motomachi Ramen".', philosophy: 'The official site speaks of "受け継いできた味と、素材へのこだわり" (a taste handed down and care over ingredients).', specialty: 'Koran chuka soba; chicken paitan ramen; pork buns.',
      anecdotes: [
        { text: '"The fatty chashu was tender and packed with flavor. The soy-based chicken broth was just as delicious as ever." — October 2026, chuka soba as an after-party.', source: R + 'B481458744/' },
        { text: '"I had lunch during a business trip while waiting for my Shinkansen, and even though it was already 12:30 and there was a line with three people ahead of me, the turnover was quick." — April 2026, the chicken paitan ramen.', source: R + 'B526696451/' },
        { text: '"This is the ultimate Chinese Soba!" — October 2026, the Koran chuka soba with flavoured egg for JPY 1,080.', source: R + 'B538135689/' },
      ],
      japanese_sources_summary: '食べログ: 皇蘭 アルデ新大阪店、飲茶・点心・ラーメン・dumpling、大阪市淀川区西中島5丁目16-1、新大阪駅、毎日10:00〜22:30、予約不可、カード・電子マネー・PayPay 可、20席 (テーブルとカウンター)、禁煙。公式サイト: 株式会社皇蘭、神戸市灘区、工場あり、SINCE 1959、南京町本店、山神山人、いずみヌードル、受け継いできた味と素材へのこだわり。口コミ(2024年2月〜2026年11月): Midosuji 線の入口の近く、東口から地下を通って、改装でひとりでも入りやすく、Kobe Motomachi のラーメン、皇蘭の中華そば (味玉) 1,080円、麺大盛り150円、醤油の鶏ガラスープ、ストレート麺、脂身のチャーシュー、クリーミーな鶏白湯ラーメン、担々麺1,230円、トマトとバジルのラーメン、豚まん330円 (Awaji の玉ねぎと Kagoshima の黒豚)、小籠包は売り切れの日も、チャーハン、えび入りの天津飯、紹興酒600円、新幹線の前の出張の人が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B481458744/', R + 'B515427560/', R + 'B526696451/', R + 'B536624880/', R + 'B537232085/', R + 'B537473760/', R + 'B537735655/', R + 'B537773077/', R + 'B538135689/', R + 'B538455034/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A busy station counter with a quick turnover; no English menu listed and no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市淀川区西中島5丁目16-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the operator\'s official site; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) is 163m away (the station-wide lot), so the pin rests on the Tabelog point inside the station (GSI only, no OSM); no other record within 60 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538135689/', R + 'B537773077/'],
    price_note: 'Prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Koran chuka soba with flavoured egg', '¥1,080', 'Noodles', 'no', 'no', 'October 2026; large noodles +¥150.', 'chuka_soba'),
      it('', '', 'Chicken paitan ramen', '', 'Noodles', 'no', 'no', 'April and October 2026.', 'tori_paitan'),
      it('', '', 'Sichuan dandan noodles', '¥1,230', 'Noodles', 'no', 'no', 'September 2026.', 'tantanmen'),
      it('', '', 'Pork bun', '¥330', 'Dim sum', 'no', 'no', 'September 2026.', 'nikuman'),
      it('', '', 'Tianjin rice with shrimp', '', 'Rice', 'ask', 'no', 'November 2026.', 'tenshinhan'),
    ] }, {
    cuisine: 'Kobe Motomachi の中華そばと中華料理 (2024年2月)・皇蘭の中華そば (味玉) 1,080円、麺大盛り150円 (2026年10月): 醤油の鶏ガラスープ、ストレート麺、脂身のチャーシュー (2026年)・クリーミーな鶏白湯ラーメン、中細麺、大きなチャーシュー2枚ともやし (2026年4月と10月)・四川の担々麺1,230円 (2026年9月)・トマトとバジルのラーメン (2026年10月)・豚まん330円。Awaji の玉ねぎと Kagoshima の黒豚のポスター (2026年9月)・小籠包 (2026年10月は売り切れ)・チャーハン、半チャーハン (2026年)・えびの入った甘いあんの天津飯 (2026年11月)・紹興酒600円 (2026年9月)',
    neighborhood: '西中島5丁目16-1、新大阪駅のアルデ新大阪の中、Midosuji 線の入口の近く (食べログ、2026年10月)。東口から地下の通路を歩いて (2024年2月)',
    gf_detail: 'グルテンフリーではありません。麺と点心の店で、中華そば、白湯、担々麺は小麦の麺、豚まんや小籠包も小麦の皮。',
    vegan_detail: 'ヴィーガンではありません。中華そばは醤油の鶏ガラスープに脂身のチャーシュー、白湯は鶏のスープ、豚まんは Kagoshima の黒豚。',
    notes: '[中華・新大阪駅、Midosuji の改札そばの Kobe の中華そば] 1959年からの神戸の中華、皇蘭 (本店は南京町、公式サイト) の新大阪駅の店で、Midosuji 線の入口に近いアルデ新大阪の中にあり、毎日10時から22時半まで。新幹線を待つ出張の人が、皇蘭の中華そばを食べに来る。醤油の鶏ガラスープにストレート麺、やわらかい脂身のチャーシューで、久しぶりに来た人は Kobe Motomachi の有名なラーメンと呼ぶ (2024年2月)。もっとクリーミーな鶏白湯も。担々麺、トマトとバジルのラーメン、Kagoshima の黒豚と Awaji の玉ねぎの豚まん、売り切れることもある小籠包、ふわっとしたチャーハンも。「これぞ中華そば」という声も、「ふつう」という声も (2026年10月)。列は早く進む。',
  });
}

// ================================================================ トントン拍子
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27068646/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['18:00', '22:30']);
  put({
    id: 'osaka_tonton_byoshi_nishimiyahara', name: 'トントン拍子 (Tonton Byoshi)', category: 'OMNI',
    lat: 34.732894, lng: 135.494080, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki and yakisoba are wheat-based, and the lunch sets include breaded pork cutlet, kara-age and pasta.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the one lunch set is built on pork, chicken or eggs (2024–2026), and the okonomiyaki named in reviews is pork.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 18:00–22:30; closed Sat and Sun; hours and closing days may change (Tabelog). No reservations listed (Tabelog), though the tables were all reserved on a Friday night (October 2026). No cards; e-money accepted; no QR payment (Tabelog). 20 seats; designated smoking area (Tabelog). At lunch only the daily set is served, plus a yakisoba lunch that takes about 15 minutes (August 2026); tables are shared at busy times (April 2025, April 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西宮原1-5-6 — about 560 m from Shin-Osaka Stn (Tabelog)',
    cuisine: 'Okonomiyaki and teppan dishes at night: fluffy okonomiyaki with plenty of sauce (January 2025), pork okonomiyaki and egg fried rice (October 2026) · lunch: one daily set ¥950 tax included (April 2026; ¥900 from April 2025, ¥800 before), with salad, rice, miso soup, two small side dishes and yogurt; a yakisoba lunch ¥1,000 (August 2026) · daily mains named in reviews: pork belly, teriyaki hamburg steak with a fried egg (January 2024), roast pork cutlet with a soft fried egg (April 2025, July 2026), tonpei-yaki (July 2025), kara-age (September 2025), white-sauce omurice (April and September 2026), Tianjin rice with a mushroom and burdock sauce (August 2026) · side dishes such as potato salad, kinpira, pumpkin salad, cold tofu with ume, mini pasta (2024–2026)',
    website: null, gmaps: gm('トントン拍子 西宮原1-5-6'), menu_url: null,
    notes: "[Okonomiyaki · Nishimiyahara, a lunch-set favourite by Shin-Osaka] A long-standing local okonomiyaki house a few minutes from Shin-Osaka Station that office workers know for its lunch: one daily set for ¥950 (April 2026), served almost the moment you sit, with a handmade main on a hot plate (pork cutlet under a soft fried egg, white-sauce omurice, tonpei-yaki), salad, rice, miso soup, two side dishes and a yogurt. One diner has eaten it more than twenty times (July 2025). In April 2025 a few older women ran lunch, and the place felt like a cozy café at 13:30 (January 2026). At night it turns back into an okonomiyaki and teppan house with fluffy, sauce-heavy okonomiyaki and drinks; the tables were all booked by 18:00 on a Friday (October 2026). Closed weekends.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and lunch staff'], origin: null, background: 'No shop description on Tabelog. Reviewers call it a long-established okonomiyaki restaurant (January 2025) and "a popular local okonomiyaki restaurant in Shin-Osaka" (April 2026); "During lunchtime, it is run by a few lovely older ladies" (April 2025); "the owner asked if I was ready for lunch" (July 2026).', philosophy: null, specialty: 'Daily lunch set on a hot plate; okonomiyaki at night.',
      anecdotes: [
        { text: '"Before I even sat down, the owner asked if I was ready for lunch. I ordered immediately, and within moments … the daily special set meal arrived." — July 2026, pork cutlet with a fried egg for JPY 950.', source: R + 'B532630510/' },
        { text: '"The great thing about Tonton Byoshi is that not only is the portion size substantial, but everything is also delicious." — July 2025, a diner on visit 23, the tonpei-yaki set.', source: R + 'B403742772/' },
        { text: '"Every dish was delicious, especially the pork okonomiyaki and the fried rice with egg—I definitely want to have those again." — October 2026, a Friday night.', source: R + 'B537122588/' },
      ],
      japanese_sources_summary: '食べログ: トントン拍子、お好み焼き、大阪市淀川区西宮原1-5-6、新大阪駅から559m、月〜金11:30〜14:00、18:00〜22:30、土日休み、予約不可、カード不可、電子マネー可、QR 不可、20席、分煙。口コミ(2024年1月〜2026年10月): 昔からのお好み焼きの店、昼は日替わり定食だけで950円 (2026年4月から、2025年4月から900円、その前は800円)、サラダ、ごはん、みそ汁、小鉢2つ、ヨーグルトつき、焼きそばのランチ1,000円 (約15分)、豚バラ、照り焼きハンバーグ、ローストポークカツに半熟の目玉焼き、とん平焼き、kara-age、白いソースのオムライス、天津飯、昼は年配の女性たちが切り盛り、相席も、夜はふわふわのお好み焼き、豚玉、卵チャーハン、金曜の夜はテーブルが予約でいっぱい。',
      confidence: 'medium', sources: [TB, R + 'B403742772/', R + 'B499601551/', R + 'B505696052/', R + 'B505712815/', R + 'B513454907/', R + 'B520395676/', R + 'B526725894/', R + 'B532630510/', R + 'B537122588/', R + 'B537280004/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One daily lunch set, no choosing needed; shared tables at lunch. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西宮原1-5-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西宮原一丁目5番6号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B505696052/', R + 'B532630510/'],
    price_note: 'Lunch prices from April and August 2026 reviews (tax included); night dishes unpriced.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set (main, salad, rice, miso soup, two sides, yogurt)', '¥950', 'Lunch', 'ask', 'no', 'April–September 2026.', 'higawari_teishoku'),
      it('', '', 'Yakisoba lunch', '¥1,000', 'Lunch', 'no', 'no', 'August 2026; about 15 minutes.', 'yakisoba_lunch'),
      it('', '', 'Pork okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'October 2026.', 'butatama'),
      it('', '', 'Egg fried rice', '', 'Teppan', 'ask', 'no', 'October 2026.', 'tamago_chahan'),
    ] }, {
    cuisine: '夜はお好み焼きと鉄板焼き: ソースたっぷりのふわふわのお好み焼き (2025年1月)、豚のお好み焼きと卵のチャーハン (2026年10月)・昼: 日替わり定食ひとつで950円、税込 (2026年4月。2025年4月から900円、その前は800円)、サラダ、ごはん、みそ汁、小鉢2つ、ヨーグルトつき。焼きそばのランチ1,000円 (2026年8月)・口コミに出てくる日替わり: 豚バラ、目玉焼きの照り焼きハンバーグ (2024年1月)、半熟の目玉焼きのローストポークカツ (2025年4月、2026年7月)、とん平焼き (2025年7月)、kara-age (2025年9月)、白いソースのオムライス (2026年4月と9月)、きのことごぼうのあんの天津飯 (2026年8月)・小鉢はポテトサラダ、きんぴら、かぼちゃのサラダ、梅をのせた冷ややっこ、ミニパスタなど (2024〜2026年)',
    neighborhood: '西宮原1-5-6。新大阪駅から約560m (食べログ)',
    gf_detail: 'グルテンフリーではありません。お好み焼きと焼きそばは小麦で、昼の定食にもパン粉のカツ、kara-age、パスタがある。',
    vegan_detail: 'ヴィーガンではありません。昼の定食はひとつで、豚、鶏、卵がメイン (2024〜2026年)。口コミに出てくるお好み焼きは豚玉。',
    notes: '[お好み焼き・西宮原、新大阪の昼の定食の店] 新大阪駅から数分の昔からの地元のお好み焼きの店で、会社員には昼の定食で知られる。日替わりがひとつだけで950円 (2026年4月)。すわるとすぐに出てくる鉄板の手作りのメイン (半熟の目玉焼きをのせたポークカツ、白いソースのオムライス、とん平焼きなど) に、サラダ、ごはん、みそ汁、小鉢2つ、ヨーグルト。20回以上通っている人も (2025年7月)。2025年4月は年配の女性たちが昼を切り盛りしていて、1時半にはカフェのような落ち着いた雰囲気 (2026年1月)。夜はお好み焼きと鉄板焼きの店にもどり、ソースたっぷりのふわふわのお好み焼きとお酒。金曜は18時でテーブルが予約でいっぱいだった (2026年10月)。土日休み。',
  });
}

// ================================================================ 西中島 光龍益
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27084534/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['18:00', '21:00']);
  put({
    id: 'osaka_koryumasu_nishinakajima', name: '西中島 光龍益 (Nishinakajima Koryumasu)', category: 'OMNI',
    lat: 34.728528, lng: 135.496989, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen and tsukemen noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork-skin and chicken-bone broth with pork chashu.',
    hours_raw: 'Mon–Sat, holidays and the days before and after a holiday 11:30–14:00 (last order 13:50) and 18:00–21:00 (last order 20:50); closed Sunday; open until sold out (Tabelog). No reservations; cash only (no cards, e-money or QR) (Tabelog); buy a ticket at the machine, cash only, and hand it to the staff, who seat you (September and October 2026). 18 seats: 8 at the counter and two tables; non-smoking; children and strollers welcome (Tabelog). A line forms soon after noon: nearly ten waiting just after 12:00 on an October 2026 day. Tsukemen takes longer, about 20 minutes on a full October 2026 lunch.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西中島6-5-2 — 5 min from Hankyu Minamikata Stn and from Shin-Osaka (Midosuji Line) (Tabelog); a front like a kaiseki restaurant, with a noren reading "Tonpi to Tori no Koryumasu" and a "RAMEN" lantern (October 2026)',
    cuisine: 'White-broth ramen and tsukemen of pork skin and chicken bones (October 2026) · ticket machine: ramen, tsukemen (regular and large), salt-braised pork, rice, egg over rice, canned beer (October 2026) · ramen ¥950 (September and October 2026): potage-thick, creamy broth of pork and chicken, thin firm noodles, two slices of pork-shoulder chashu and one of salt-braised pork, menma, green onion; compared with Tenkaippin by three October 2026 diners · large ramen ¥1,050 (October 2026) · tsukemen ¥1,000 (October 2026): a thick, rich dipping soup, called chicken paitan by one diner, with chashu, green onion, menma and a lemon wedge to squeeze in · garlic on request; GABAN black pepper, shichimi and ramen tare on the table (October 2026)',
    website: null, gmaps: gm('西中島 光龍益 西中島6-5-2'), menu_url: null,
    notes: "[Ramen · Nishinakajima, potage-thick pork-skin and chicken broth] The Nishinakajima branch of \"Tonpi to Tori no Koryumasu\" from Sakuranomiya, behind a front that looks more like a kaiseki restaurant than a ramen shop, and a Tabelog Ramen 100 pick every year from 2023 to 2025. The broth is pork skin and chicken bones boiled to a creamy, potage-like white, rich enough that three diners in October 2026 thought of Tenkaippin, but several diners found it easy to finish. The ¥950 ramen comes with thin firm noodles, pork-shoulder chashu and a slice of salt-braised pork; the ¥1,000 tsukemen with a lemon wedge to cut the thick dip, though it takes about 20 minutes when the shop is full. Ask for garlic if you have no meetings. Buy a ticket at the cash-only machine. A line forms soon after noon; evenings are calmer. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) with one or two floor staff'], origin: null, background: 'Per an October 2026 review: the branch of "Tonpi to Tori no Koryumasu" in Sakuranomiya, which "has shone in the top 100 for nine consecutive years"; this shop "seems to be run by the owner and two female staff members". A September 2026 diner: "it seemed to be run by a couple who managed everything with care". Tabelog Ramen OSAKA 100: 2023, 2024, 2025 (Tabelog).', philosophy: null, specialty: 'Pork-skin and chicken white-broth ramen; tsukemen with lemon.',
      anecdotes: [
        { text: '"It\'s smooth and creamy like a potage, with a rich flavor of pork and chicken that follows closely behind." — October 2026, the ramen for JPY 950.', source: R + 'B537757712/' },
        { text: '"When I started to get a bit tired of the dipping sauce, squeezing some lemon into it made it refreshing and provided a great flavor change." — October 2026, the tsukemen for JPY 1,000.', source: R + 'B537261223/' },
        { text: '"I arrived just after 12 PM and found nearly 10 people already in line." — October 2026.', source: R + 'B536964172/' },
      ],
      japanese_sources_summary: '食べログ: 西中島 光龍益、ラーメン・つけ麺、食べログ ラーメン OSAKA 百名店 2023・2024・2025、大阪市淀川区西中島6-5-2、阪急 南方駅から徒歩5分、Midosuji 線 新大阪駅から徒歩5分、月〜土・祝・祝前日・祝後日11:30〜14:00 (L.O.13:50)、18:00〜21:00 (L.O.20:50)、日曜休み、売り切れまで、予約不可、現金のみ、18席 (カウンター8、テーブル)、禁煙、子ども可。口コミ(2025年11月〜2026年10月): Sakuranomiya の「Tonpi to Tori no Koryumasu」の店、料亭のような外観にのれんと RAMEN のちょうちん、券売機 (現金のみ) でラーメン、つけ麺、塩で煮た豚、ごはん、卵かけごはん、缶ビール、ラーメン950円、大盛り1,050円、つけ麺1,000円、ポタージュのようにとろりとした豚と鶏の白いスープ、細いかための麺、肩ロースのチャーシュー2枚と塩で煮た豚、メンマ、ねぎ、Tenkaippin を思い出すという声が3人、つけ麺はレモンつきで約20分、にんにくも頼める、昼すぎは行列、店主と女性スタッフ2人、夫婦で切り盛りという声も。',
      confidence: 'medium', sources: [TB, R + 'B517000162/', R + 'B536548017/', R + 'B536964172/', R + 'B536970776/', R + 'B537165687/', R + 'B537261223/', R + 'B537505276/', R + 'B537580855/', R + 'B537757712/', R + 'B538359988/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (cash only) with a short list: ramen, tsukemen, rice, beer. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島6-5-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (Ramen 100 2023–2025); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島六丁目5番2号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537757712/', R + 'B537261223/', R + 'B517000162/'],
    price_note: 'Prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen (pork-skin and chicken white broth)', '¥950', 'Ramen', 'no', 'no', 'September and October 2026.', 'ramen'),
      it('', '', 'Ramen, large', '¥1,050', 'Ramen', 'no', 'no', 'October 2026.', 'ramen_large'),
      it('', '', 'Tsukemen with lemon', '¥1,000', 'Tsukemen', 'no', 'no', 'October 2026; about 20 minutes when busy.', 'tsukemen'),
      it('', '', 'Salt-braised pork', '', 'Sides', 'ask', 'no', 'October 2026 (ticket machine).', 'shionibuta'),
      it('', '', 'Egg over rice', '', 'Sides', 'ask', 'no', 'October 2026 (ticket machine).', 'tkg'),
    ] }, {
    cuisine: '豚皮と鶏ガラの白いスープのラーメンとつけ麺 (2026年10月)・券売機: ラーメン、つけ麺 (並と大)、塩で煮た豚、ごはん、卵かけごはん、缶ビール (2026年10月)・ラーメン950円 (2026年9月と10月): ポタージュのようにとろりとした豚と鶏のクリーミーなスープ、細くてかための麺、肩ロースのチャーシュー2枚と塩で煮た豚1枚、メンマ、ねぎ。2026年10月に3人が Tenkaippin を思い出したという・ラーメン大盛り1,050円 (2026年10月)・つけ麺1,000円 (2026年10月): 濃いつけ汁 (鶏白湯という人も) に、チャーシュー、ねぎ、メンマ、しぼって使うレモン・にんにくも頼める。卓上に GABAN の黒こしょう、七味、ラーメンのたれ (2026年10月)',
    neighborhood: '西中島6-5-2。阪急 南方駅と新大阪 (Midosuji 線) から徒歩5分 (食べログ)。料亭のような外観で、「Tonpi to Tori no Koryumasu」ののれんと「RAMEN」のちょうちん (2026年10月)',
    gf_detail: 'グルテンフリーではありません。ラーメンとつけ麺は小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚皮と鶏ガラのスープに豚のチャーシュー。',
    notes: '[ラーメン・西中島、ポタージュのような豚皮と鶏のスープ] Sakuranomiya の「Tonpi to Tori no Koryumasu」の西中島の店で、ラーメン店というより料亭のような外観。食べログのラーメン百名店に2023年から2025年まで毎年選ばれている。スープは豚皮と鶏ガラをクリーミーなポタージュのような白さまで炊いたもの。2026年10月には3人が Tenkaippin を思い出したほど濃いが、最後まで飲みきれたという人も。950円のラーメンには細くてかための麺、肩ロースのチャーシュー、塩で煮た豚。1,000円のつけ麺には濃いつけ汁をさっぱりさせるレモンがつくが、満席だと約20分かかる。人に会う予定がなければにんにくも。券売機は現金のみ。昼すぎには行列ができ、夜はすいている。日曜休み。',
  });
}

// ================================================================ らぁ麺 喜希
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27076580/'; const R = TB + 'dtlrvwlst/';
  const N = day(['18:30', '23:00']); const L = day(['11:30', '14:00'], ['18:30', '23:00']);
  put({
    id: 'osaka_ramen_yoshiki_nishinakajima', name: 'らぁ麺 喜希 (Ramen Yoshiki)', category: 'OMNI',
    lat: 34.728633, lng: 135.500114, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles in every bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone, beef-bone, flying-fish and clam broths with chashu and eggs.',
    hours_raw: 'Mon 18:30–23:00; Tue–Fri 11:30–14:00 and 18:30–23:00; closed Sat and Sun; hours and closing days may change (Tabelog). No reservations; no cards, but e-money and QR payments (Tabelog); order and pay first (September 2025). 13 seats on Tabelog (3 at the counter, tables for 2 and 4); reviewers count three tables for four and one for two, with more seats upstairs on the second floor (September 2025, September 2026). Designated smoking area; no smoking at all 11:30–14:00 (Tabelog). Opened 9 December 2013 (Tabelog). Run by one person in June 2024; a woman served upstairs in September 2025.',
    hours: { 0: N, 1: L, 2: L, 3: L, 4: L }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島5-8-7 — 5–6 min from the south exit of Shin-Osaka Stn and 5–7 min from the north exit of Nishinakajima-Minamigata Stn (Midosuji Line), 7–9 min from the JR Shin-Osaka east exit and from Hankyu Minamikata; from the 西中島3 crossing under Midosuji head east, left at the first crossing, right at the next, on the left (Tabelog)',
    cuisine: 'Tonkotsu ramen and a cheap daily special · Premium ("exquisite") tonkotsu ¥850 (March and April 2025): thick, back-fat pork-bone soy broth, thin straight or thick noodles, four slices of chashu, egg, wood ear, menma, bean sprouts, green onion, sesame; rice ¥50 at lunch (2025) · tonkotsu shoyu ¥850 with five slices of chashu and an egg, rice ¥100 (February 2026) · daily special ramen ¥650, large +¥100 (2025–2026): pork-bone shoyu (September 2026), yatai tonkotsu shio (December 2025), Hakata tonkotsu, niboshi (August 2025), a sweet beef-bone shoyu with cabbage (September 2025) · ago-dashi (flying fish) ramen with clams ¥800, a light, nearly clear broth (September 2025, July 2026) · Wakayama tonkotsu shoyu ¥800 with a rare chashu and kamaboko (September 2025) · also spicy miso and clam tsukemen (September 2026) · extra noodles ¥100 (December 2025) · draft beer, an oolong highball (2024)',
    website: null, gmaps: gm('らぁ麺 喜希 西中島5-8-7'), menu_url: null,
    notes: "[Ramen · Nishinakajima, cheap tonkotsu and a daily bowl] A small ramen shop on a side street between Shin-Osaka and Nishinakajima-Minamigata, open since 2013, that repeat diners come back to for value: the daily special ramen is ¥650 (2025–2026), a different broth each time (pork-bone shoyu, yatai tonkotsu shio, Hakata tonkotsu, niboshi, beef-bone shoyu), and the house Premium tonkotsu, thick with back fat and topped with four slices of chashu and an egg, was ¥850 in 2025. There is a lighter ago-dashi bowl with clams and a Wakayama-style tonkotsu shoyu too, both ¥800 (2025). Portions are big and toppings generous. Weekday lunches fill the ground floor, and a second floor takes the overflow (September 2025). The owner was running it alone in June 2024 and is kind, per a March 2025 diner. Open till 23:00; closed weekends.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), with a floor helper at times'], origin: null, background: 'No shop description on Tabelog; opened 9 December 2013 (Tabelog). Reviewers: "since it\'s operated by one person, it might get hectic when busy" (June 2024); "the owner is a kind person" and recommends the Premium tonkotsu (March 2025); "a lady brought my order" upstairs (September 2025).', philosophy: null, specialty: 'Premium tonkotsu; daily special ramen at ¥650; ago-dashi ramen with clams.',
      anecdotes: [
        { text: '"It\'s loaded with back fat and is quite rich, but surprisingly, it is easy to eat." — June 2024, the exquisite tonkotsu ramen.', source: R + 'B486655672/' },
        { text: '"Even on the second floor, I could hear Michael Jackson singing!" — September 2025, the ago-dashi ramen for JPY 800.', source: R + 'B510087271/' },
        { text: '"As always, the toppings were plentiful, and at JPY 750, this is quite a good deal." — September 2026, the pork-bone shoyu daily special, large.', source: R + 'B500168863/' },
      ],
      japanese_sources_summary: '食べログ: らぁ麺 喜希、ラーメン・つけ麺、大阪市淀川区西中島5-8-7、新大阪駅南口から徒歩5〜6分、西中島南方駅北口から5〜7分、JR 新大阪駅東口と阪急 南方駅から7〜9分、月曜18:30〜23:00、火〜金11:30〜14:00、18:30〜23:00、土日休み、予約不可、カード不可、電子マネー・QR 可、13席、分煙 (11:30〜14:00は全面禁煙)、2013年12月9日オープン。口コミ(2024年5月〜2026年9月): Premium tonkotsu 850円 (背脂、チャーシュー4枚、卵、きくらげ、メンマ、もやし、ねぎ、ごま、細麺か太麺)、昼のごはん50円、とんこつ醤油850円 (チャーシュー5枚)、日替わりラーメン650円、大盛り100円 (豚骨醤油、Yatai とんこつ塩、Hakata とんこつ、煮干し、牛骨の甘い醤油)、ago dashi ラーメンとあさり800円、Wakayama とんこつ醤油800円、辛味噌、あさりのつけ麺、替え玉100円、2階席も、ひとりで切り盛り、やさしい店主、Michael Jackson の音楽。',
      confidence: 'medium', sources: [TB, R + 'B485939074/', R + 'B486655672/', R + 'B500168863/', R + 'B503677630/', R + 'B504873663/', R + 'B510087271/', R + 'B512889014/', R + 'B513054842/', R + 'B522274670/', R + 'B532557818/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay first; a changing daily special. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-8-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目8番7号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B504873663/', R + 'B500168863/', R + 'B510087271/', R + 'B522274670/'],
    price_note: 'Prices from 2025–2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Premium tonkotsu ramen', '¥850', 'Ramen', 'no', 'no', 'March and April 2025.', 'kiwami_tonkotsu'),
      it('', '', 'Tonkotsu shoyu ramen', '¥850', 'Ramen', 'no', 'no', 'February 2026.', 'tonkotsu_shoyu'),
      it('', '', 'Daily special ramen', '¥650', 'Ramen', 'no', 'no', 'September 2026; large +¥100.', 'higawari_ramen'),
      it('', '', 'Ago-dashi ramen with clams', '¥800', 'Ramen', 'no', 'no', 'September 2025; July 2026.', 'ago_dashi'),
      it('', '', 'Wakayama tonkotsu shoyu ramen', '¥800', 'Ramen', 'no', 'no', 'September 2025.', 'wakayama'),
      it('', '', 'Extra noodles', '¥100', 'Extras', 'no', 'ask', 'December 2025.', 'kaedama'),
    ] }, {
    cuisine: 'とんこつラーメンと安い日替わり・Premium tonkotsu 850円 (2025年3月と4月): 背脂の濃い豚骨醤油のスープ、細いストレート麺か太麺、チャーシュー4枚、卵、きくらげ、メンマ、もやし、ねぎ、ごま。昼はごはん50円 (2025年)・チャーシュー5枚と卵のとんこつ醤油850円、ごはん100円 (2026年2月)・日替わりラーメン650円、大盛りは100円増し (2025〜2026年): 豚骨醤油 (2026年9月)、Yatai とんこつ塩 (2025年12月)、Hakata とんこつ、煮干し (2025年8月)、キャベツをのせた甘い牛骨醤油 (2025年9月)・あさりの入ったago dashi ラーメン800円、あっさりで透きとおったスープ (2025年9月、2026年7月)・レアチャーシューとかまぼこのWakayama とんこつ醤油800円 (2025年9月)・辛味噌、あさりのつけ麺も (2026年9月)・替え玉100円 (2025年12月)・生ビール、ウーロンハイ (2024年)',
    neighborhood: '西中島5-8-7。Midosuji 線 新大阪駅南口から徒歩5〜6分、西中島南方駅北口から5〜7分、JR 新大阪駅東口と阪急 南方駅から7〜9分。Midosuji の下の西中島3の交差点から東へ、最初の角を左、つぎを右で左側 (食べログ)',
    gf_detail: 'グルテンフリーではありません。どのラーメンも小麦の麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨、牛骨、あご、あさりのスープに、チャーシューと卵。',
    notes: '[ラーメン・西中島、安いとんこつと日替わりの一杯] 新大阪と西中島南方のあいだの横道にある小さなラーメン店で、2013年から。くり返し来る客が多いのは値段のため: 日替わりラーメンは650円 (2025〜2026年) で、毎回スープがちがう (豚骨醤油、Yatai とんこつ塩、Hakata とんこつ、煮干し、牛骨醤油)。看板のPremium tonkotsu は背脂たっぷりで、チャーシュー4枚と卵がのって2025年は850円。あさりの入ったあっさりしたago dashi ラーメンとWakayama 風のとんこつ醤油も、どちらも800円 (2025年)。量が多く、トッピングもたっぷり。平日の昼は1階が埋まり、2階にも席がある (2025年9月)。2024年6月は店主がひとりで切り盛りしていて、やさしい人だという声も (2025年3月)。夜11時まで。土日休み。',
  });
}

save();
