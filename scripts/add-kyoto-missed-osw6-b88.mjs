// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 88.
//   - skip 26039920 きこりけーき (large parent: Juchheim)
//   + 寺町 西むら Teramachi Nishimura (Kyoto-cuisine bento lunches and omakase dinners near City Hall) — rest
//   - skip 26005894 Irish Pub GNOME (thin)
//   + 割烹 松長 Kappou Matsucho (kappo founded 1716 on Takakura-Oike; Friday set-meal lunch) — rest
//   + 東山茶寮 Higashiyama Saryo (matcha sweets tea room near Kiyomizu-Gojo) — rest
//   + あかりや Akariya (chicken izakaya in a machiya off Muromachi; daily-special lunches) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches for きこり, 西むら, GNOME, 松長,
//   東山茶寮 or あかりや. Same-name counts (2026-11-08): 西むら, 松長, 東山茶寮, あかりや — one each on Tabelog; 東山茶寮's site
//   (kyo-ohana.com) names only the Gojo tea room plus an online shop. あかりや (観音堂町452-2) shares the alley with くぐり鍋 六白屋
//   (452-1) and Roppakuya KADO (453-1); no review or listing ties it to either.
//   None of the drafted shops is in data/kyoto.json.
//   Charges: 寺町 西むら — Tabelog's machine translation says a 10% service charge, but the Japanese original reads 「なし」 (none);
//   recorded as none. Others: none listed. No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-88');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26039920', 'large parent: きこりけーき is run by Juchheim, the national Baumkuchen maker — 2023 reviewers say the Kodaiji shop is Juchheim’s, selling its AI-baked Baumkuchen with Badiani gelato (https://tabelog.com/en/kyoto/A2601/A260301/26039920/dtlrvwlst/B471166723/; https://tabelog.com/en/kyoto/A2601/A260301/26039920/).');
skip('26005894', 'thin: Irish Pub GNOME has a single 2025–26 Tabelog review (February 2026) — not enough current sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260202/26005894/).');

// ================================================================ 寺町 西むら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26027932/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_teramachi_nishimura', name: '寺町 西むら (Teramachi Nishimura)', category: 'OMNI',
    lat: 35.012798, lng: 135.767311, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Kyoto cuisine built on soy-seasoned dashi — simmered dishes, chawanmushi, sashimi with soy sauce (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi throughout, sashimi, hamo, egg custard (2025–26 reviews).',
    hours_raw: 'Daily 11:30–14:00 (last order 13:30) and 17:30–22:00 (last order 20:30); irregular closures (Tabelog). Lunch is one two-tier bento, served within minutes; rice refills offered (June and December 2025). Reservations taken (August 2026). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). Charges: Tabelog’s Japanese text reads 「なし」 (none). Counter and table seats (June 2025). Near Kyoto Shiyakusho-mae Station, east of Teramachi (Tabelog; December 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi, by Kyoto City Hall',
    cuisine: 'Small Kyoto-cuisine restaurant · lunch: a single two-tier bento ¥2,420 with sashimi, simmered vegetables, obanzai, house sesame tofu and chawanmushi (June and December 2025) · hamo in the June bento (June 2025) · dinner: seasonal omakase courses (2023 review)',
    website: null, gmaps: gm('寺町 西むら 京都'), menu_url: TB,
    notes: '[Kyoto cuisine · Teramachi, City Hall] A small Kyoto-cuisine restaurant near City Hall whose lunch is a single two-tier bento for ¥2,420 — sashimi, simmered vegetables, obanzai, house sesame tofu and a full-size chawanmushi — with dinner courses in the evening. Lunch and dinner daily; closes on irregular days.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a Japanese restaurant near Kyoto City Hall, opened 5 June 2016.',
      philosophy: null, specialty: 'Two-tier lunch bento; house sesame tofu; chawanmushi.',
      anecdotes: [
        { text: 'A December 2025 diner noted that the chawanmushi in the ¥2,420 lunch bento, though in a small dish, matched a full à la carte serving.', source: R + 'B519001075/' },
        { text: 'A June 2025 counter diner chatted with the staff at work and singled out the light, house-made sesame tofu.', source: R + 'B508288042/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区榎木町98-9、毎日11:30〜14:00 (L.O.13:30)・17:30〜22:00 (L.O.20:30)、不定休、カード (JCB・AMEX・Diners) 可、電子マネー・QR 不可、サービス料・チャージ「なし」、2016年6月5日オープン。口コミ (2025年2月〜2026年8月、英語): 昼は二段の弁当一種類2,420円、刺身、煮物、おばんざい、自家製のごま豆腐、茶碗蒸し、6月は鱧、ご飯のおかわり可、カウンターで店の人と話せる、京都市役所前駅の近く。',
      confidence: 'medium', sources: [TB, R + 'B502449718/', R + 'B508288042/', R + 'B508345623/', R + 'B509002457/', R + 'B519001075/', R + 'B526882040/', R + 'B533339799/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch is one bento — just sit down and it comes. Rice refills are offered. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区榎木町98-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.012798, 135.767311); cross-checked: GSI 京都府京都市中京区榎木町98番地 (lot) 57m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519001075/'],
    price_note: 'Lunch price from December 2025.', last_checked: TODAY, items: [
      it('', '', 'Two-tier lunch bento (sashimi, simmered dishes, sesame tofu, chawanmushi)', '¥2,420', 'Lunch', 'no', 'no', 'December 2025; the only lunch.', 'bento'),
    ] }, {
    cuisine: '小さな京料理の店・昼は二段の弁当一種類2,420円、刺身、煮物、おばんざい、自家製のごま豆腐、茶碗蒸し (2025年6月・12月)・6月の弁当に鱧 (2025年6月)・夜は季節のおまかせ (2023年の口コミ)',
    neighborhood: '寺町、京都市役所の近く',
    gf_detail: 'グルテンフリーではない。醤油の出汁の京料理。煮物、茶碗蒸し、醤油で食べる刺身 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁、刺身、鱧、茶碗蒸し (2025〜2026年の口コミ)。',
    notes: '[京料理・寺町、市役所前] 京都市役所近くの小さな京料理の店。昼は二段の弁当一種類2,420円で、刺身、煮物、おばんざい、自家製のごま豆腐、一人前の茶碗蒸し。夜はコース。昼夜とも毎日、不定休。',
  });
}

// ================================================================ 割烹 松長
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006758/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://matsucho.com/';
  const D = day(['18:00', '22:00']); const F = day(['11:30', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_kappou_matsucho', name: '割烹 松長 (Kappou Matsucho)', category: 'OMNI',
    lat: 35.011211, lng: 135.762273, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lunch sets of tempura, katsu, sukiyaki, nabeyaki udon and oden in soy-based broth (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi, tonjiru, oden with fish cakes, meat and fish mains (2025–26 reviews).',
    hours_raw: 'Dinner Tue–Sat 18:00–22:00; lunch on Friday 11:30–14:00; closed Sunday and Monday (Tabelog). The shop site gives dinner 18:00–23:00 (last order 21:00), reservation required, and lunch 11:30–14:00, reservation required except on Fridays; irregular closures by calendar (shop site). Friday lunch fills by noon with regulars (June and August 2025). E-money accepted (Tabelog). 55 seats: counter of 8 and three tables on the ground floor, 24 at tables on the second (private hire), a 15-seat tatami room on the third (shop site). Founded 1716 (matsucho.com). On Takakura-dori north of Oike, about five minutes from Karasuma Oike or Kyoto Shiyakusho-mae (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: F, 5: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takakura, north of Oike — Karasuma Oike',
    cuisine: 'Kappo founded 1716 · Friday lunch sets ¥1,000: daily special such as eggplant with a savoury sauce (June 2025), sukiyaki set with tonjiru, nabeyaki udon with tempura, grilled salmon set (August 2025), daily set with oden, tempura and a small side (March 2026) · dinner by reservation (shop site)',
    website: SITE, gmaps: gm('割烹 松長 京都 高倉御池'), menu_url: SITE,
    notes: '[Kappo · Takakura-Oike] A kappo near Karasuma Oike founded in 1716 and kept on the same site for generations: dinner by reservation, and a ¥1,000 Friday set-meal lunch — sukiyaki with tonjiru, nabeyaki udon, grilled fish or the daily special — that fills with regulars by noon. Counter, tables and a tatami room upstairs.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the shop site: 「創業は享保元（西暦1716）年。」 — founded in 1716, continuing the line of 松屋長兵衛, one of the 生州八軒 (the site: 「生州八軒に認定された」), and kept on this site for generations (「代々この地で京の味を守り伝えてきました」).',
      philosophy: 'Per the shop site: preserving and handing down the taste of Kyoto on the same site for generations.', specialty: 'Kappo dinners; Friday set-meal lunch.',
      anecdotes: [
        { text: 'An August 2025 diner, free on a Friday, found only two counter seats left among regulars and chose the ¥1,000 sukiyaki set, which came with a tonjiru broth.', source: R + 'B511411688/' },
        { text: 'A June 2025 diner had the ¥1,000 daily special of eggplant in a savoury sauce, out within minutes and gently seasoned.', source: R + 'B508453560/' },
      ],
      japanese_sources_summary: '公式サイト: 創業は享保元（西暦1716）年、生州八軒に認定された松屋長兵衛の流れを継ぎ代々この地で京の味を守り伝える、昼11:30〜14:00 (金曜以外は要予約)、夜18:00〜23:00 (21:00L.O.、要予約)、不定休、1階カウンター8・テーブル3、2階テーブル24席 (貸切可)、3階座敷15席。食べログ: 日本料理、中京区高倉通御池上ル柊町589、火水木土18:00〜22:00、金11:30〜14:00・18:00〜22:00、日月休み、電子マネー可、55席。口コミ (2025年6月〜2026年3月、英語): 金曜の昼の定食1,000円、日替わり (なすの料理など)、すき焼き定食と豚汁、鍋焼きうどん、焼き鮭、おでんと天ぷら、昼前に常連で満席。',
      confidence: 'medium', sources: [SITE, TB, R + 'B508453560/', R + 'B511411688/', R + 'B523739766/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book dinner ahead; Friday lunch needs no booking but fills by noon. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高倉通御池上ル柊町589',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site with current hours; Tabelog reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.011211, 135.762273); cross-checked: GSI 京都府京都市中京区柊町589番地 (lot) 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508453560/', R + 'B511411688/'],
    price_note: 'Friday lunch prices from June and August 2025; dinner prices not sourced.', last_checked: TODAY, items: [
      it('', '', 'Friday daily-special lunch', '¥1,000', 'Lunch', 'no', 'no', 'June 2025.', 'daily_special'),
      it('', '', 'Sukiyaki set with tonjiru (Friday lunch)', '¥1,000', 'Lunch', 'no', 'no', 'August 2025.', 'sukiyaki_set'),
      it('', '', 'Nabeyaki udon set with tempura (Friday lunch)', '', 'Lunch', 'no', 'no', 'August 2025.', 'nabeyaki_udon'),
    ] }, {
    cuisine: '1716年創業の割烹・金曜の昼の定食1,000円: なすの料理などの日替わり (2025年6月)、豚汁付きのすき焼き定食、天ぷら入りの鍋焼きうどん、焼き鮭の定食 (2025年8月)、おでん、天ぷら、小鉢の日替わり (2026年3月)・夜は予約制 (公式サイト)',
    neighborhood: '高倉、御池の北。烏丸御池',
    gf_detail: 'グルテンフリーではない。昼の定食に天ぷら、カツ、すき焼き、鍋焼きうどん、醤油のつゆのおでん (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁、豚汁、練り物入りのおでん、肉や魚の主菜 (2025〜2026年の口コミ)。',
    notes: '[割烹・高倉御池] 烏丸御池近く、1716年創業で代々この地を守る割烹。夜は予約制、金曜の昼は1,000円の定食 (豚汁付きのすき焼き、鍋焼きうどん、焼き魚、日替わり) が正午前に常連で埋まる。カウンター、テーブル、上階に座敷。',
  });
}

// ================================================================ 東山茶寮
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023654/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.kyo-ohana.com';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_higashiyama_saryo', name: '東山茶寮 (Higashiyama Saryo)', category: 'OMNI',
    lat: 34.994938, lng: 135.773815, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Matcha soft serve, kakigori with shiratama and red bean, floats and green tea have no wheat sourced, but the matcha roll cake does (2025–26 reviews). No allergen information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soft serve, ice cream on the kakigori, roll cake with cream (2025–26 reviews). Plain green tea is the only plainly plant-based item.',
    hours_raw: 'Tea room 11:00–17:00 (last order 16:30); shop 10:00–18:00; closed Wednesday; may change (Tabelog). A shop at the front with a table room at the back (March 2026); busy in summer (August 2026). Cards (JCB, AMEX, Diners), e-money and QR (Tabelog). Near Kiyomizu-dera at Kiyomizu-Gojo (shop site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo, near Kiyomizu-Gojo — Higashiyama',
    cuisine: 'Matcha sweets tea room and shop · Uji matcha soft serve with matcha powder ¥651 (September 2025) · Uji matcha float on unsweetened green tea ¥600 (May 2025) · matcha kakigori with ice cream, shiratama and red bean, about ¥1,300 (March 2026); a summer menu of green tea, matcha parfait, coffee float and matcha kakigori (August 2026) · mizu-manju, mizu-manju zenzai ¥740, matcha pudding and matcha roll cake to take away (2025 reviews)',
    website: SITE, gmaps: gm('東山茶寮 京都 五条'), menu_url: TB,
    notes: '[Matcha sweets · Kiyomizu-Gojo] A matcha sweets shop and tea room near Kiyomizu-dera: deep-green Uji matcha soft serve, matcha floats, and matcha kakigori with ice cream, shiratama and red bean at the tables in the back; mizu-manju and roll cakes to take away. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the shop site: 「清水寺の近く、清水五条にある落ち着ける甘味処です。」 — a sweets tea room near Kiyomizu-dera, with an online shop.',
      philosophy: null, specialty: 'Uji matcha soft serve; matcha kakigori.',
      anecdotes: [
        { text: 'A March 2026 visitor heading back to the hotel from Gion went straight to a table at the back for the matcha kakigori — about ¥1,300 with ice cream, shiratama and red bean.', source: R + 'B526054870/' },
        { text: 'An August 2026 visitor found a crowd out front and a short menu of four items, and chose the kakigori, with a matcha-bean water dumpling hidden inside.', source: R + 'B533515396/' },
      ],
      japanese_sources_summary: '公式サイト: 清水寺の近く、清水五条にある落ち着ける甘味処、オンラインショップ。食べログ: 和菓子・ケーキ、東山区五条橋東4-448、茶房11:00〜17:00 (L.O.16:30)、店舗10:00〜18:00、水曜休み、カード (JCB・AMEX・Diners)・電子マネー・QR 可。口コミ (2025年4月〜2026年8月、英語): 宇治抹茶のソフトクリームに抹茶パウダー651円、無糖の緑茶に抹茶ソフトのフロート600円、抹茶のかき氷 (アイス、白玉、あんこ) 約1,300円、夏は緑茶・抹茶パフェ・コーヒーフロート・抹茶かき氷、水まんじゅう、水まんじゅうぜんざい740円、抹茶プリン、抹茶ロールケーキ。',
      confidence: 'medium', sources: [SITE, TB, R + 'B483345398/', R + 'B506222234/', R + 'B506578922/', R + 'B518086202/', R + 'B520077751/', R + 'B526054870/', R + 'B533515396/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy at the counter in front, or head to the tables at the back for kakigori. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区五条橋東4-448',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.994938, 135.773815); GSI matched only 京都府京都市東山区五条橋東四丁目 (chome, no lot) 26m — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B483345398/', R + 'B506578922/', R + 'B506222234/'],
    price_note: 'Prices from 2025 and March 2026.', last_checked: TODAY, items: [
      it('', '', 'Uji matcha soft serve with matcha powder', '¥651', 'Sweets', 'ask', 'no', 'September 2025.', 'matcha_softserve'),
      it('', '', 'Uji matcha float (soft serve on unsweetened green tea)', '¥600', 'Drinks', 'ask', 'no', 'May 2025.', 'matcha_float'),
      it('', '', 'Matcha kakigori with ice cream, shiratama and red bean', '¥1,300', 'Sweets', 'ask', 'no', 'March 2026; about ¥1,300.', 'matcha_kakigori'),
      it('', '', 'Mizu-manju zenzai (takeaway, frozen)', '¥740', 'Takeaway', 'ask', 'ask', 'April 2025.', 'mizumanju_zenzai'),
    ] }, {
    cuisine: '抹茶の甘味の茶房と店・宇治抹茶のソフトクリームに抹茶パウダー651円 (2025年9月)・無糖の緑茶に抹茶ソフトのフロート600円 (2025年5月)・アイス、白玉、あんこの抹茶かき氷約1,300円 (2026年3月)、夏は緑茶、抹茶パフェ、コーヒーフロート、抹茶かき氷 (2026年8月)・持ち帰りの水まんじゅう、水まんじゅうぜんざい740円、抹茶プリン、抹茶ロールケーキ (2025年の口コミ)',
    neighborhood: '五条、清水五条の近く。東山',
    gf_detail: '要確認。抹茶ソフト、白玉とあんこのかき氷、フロート、緑茶に小麦の情報はないが、抹茶ロールケーキには小麦 (2025〜2026年の口コミ)。アレルゲンの情報なし。',
    vegan_detail: 'ヴィーガン不可。ソフトクリーム、かき氷のアイス、クリームのロールケーキ (2025〜2026年の口コミ)。植物性とはっきり言えるのは緑茶のみ。',
    notes: '[抹茶の甘味・清水五条] 清水寺近くの抹茶の甘味の店と茶房。濃い緑の宇治抹茶ソフト、抹茶のフロート、奥のテーブルでアイス・白玉・あんこの抹茶かき氷。水まんじゅうやロールケーキは持ち帰りで。水曜休み。',
  });
}

// ================================================================ あかりや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045620/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '13:30'], ['17:30', '23:00']); const SA = day(['17:30', '23:00']); const SU = day(['17:30', '22:00']);
  put({
    id: 'kyoto_akariya_karasuma', name: 'あかりや (Akariya)', category: 'OMNI',
    lat: 35.004417, lng: 135.757274, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sukiyaki in soy-sugar sauce, tonkatsu, chicken nanban, yakitori with tare (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken-focused izakaya — jidori sukiyaki, chicken nanban, yakitori, sashimi (2025–26 reviews).',
    hours_raw: 'Mon–Fri 11:30–13:30 and 17:30–23:00; Saturday and holidays 17:30–23:00; Sunday 17:30–22:00; may close temporarily (Tabelog). Lunch fills quickly; mostly counter seats at lunch (May and November 2025). Shoes off at the entrance (November 2025, June 2026). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog); lunch may be cash only (June 2026). 29 seats: counter 9, table 4, tatami 16 upstairs (Tabelog). A machiya in an alley off Muromachi, a few minutes from Karasuma and Shijo stations (November 2025, March 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi, north of Shijo — Shijo Karasuma',
    cuisine: 'Chicken-focused izakaya in a machiya · lunch: daily special ¥1,000 (May 2025) — tonkatsu with sauce or tare (November 2025), chicken nanban (November 2025, January and September 2026), sauce katsu ¥1,100 (June 2026) — with two sides such as okara, miso soup and pickles · Omi jidori sukiyaki ¥1,300 (November 2025) to ¥1,400 (June 2026); shamo sukiyaki (March 2026) · dinner: sashimi and yakitori in the upstairs tatami room (May 2025)',
    website: null, gmaps: gm('あかりや 京都 観音堂町'), menu_url: TB,
    notes: '[Chicken izakaya · Shijo-Muromachi] A machiya izakaya in an alley off Muromachi near Shijo-Karasuma, shoes off at the door: a ¥1,000 daily-special lunch (chicken nanban, tonkatsu) and individual pots of Omi jidori sukiyaki at lunch; yakitori and sashimi in the upstairs tatami room at night. Open daily for dinner.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: an izakaya in a Kyoto machiya on Kannondo-cho, known for chicken dishes and lunch set meals.',
      philosophy: null, specialty: 'Omi jidori sukiyaki; daily-special lunch.',
      anecdotes: [
        { text: 'A June 2026 diner came specifically for the ¥1,400 Omi jidori sukiyaki, served in a small pot with rice, miso soup, pickles and a side of sardines with mizuna and okara.', source: R + 'B534404651/' },
        { text: 'A September 2026 diner, weighing the ramen shop across the alley, chose this place instead and had the chicken-nanban daily special with a large rice for a small extra charge.', source: R + 'B536465329/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・焼き鳥、中京区観音堂町452-2、月〜金11:30〜13:30・17:30〜23:00、土・祝日17:30〜23:00、日17:30〜22:00、臨時休業あり、カード (VISA・Master・JCB・AMEX)・PayPay 可、電子マネー不可、29席 (カウンター9・テーブル4・座敷16)。口コミ (2025年5月〜2026年9月、英語): 町家、靴を脱いで上がる、昼の日替わり1,000円、ソースかタレのとんかつ、チキン南蛮、ソースカツ1,100円、小鉢2品とおから、近江地鶏のすき焼き1,300〜1,400円、軍鶏のすき焼き、夜は2階の座敷で刺身と焼き鳥、昼は現金のみかも、烏丸駅・四条駅から数分。',
      confidence: 'medium', sources: [TB, R + 'B534404590/', R + 'B534404605/', R + 'B534404611/', R + 'B534404612/', R + 'B534404614/', R + 'B534404617/', R + 'B534404621/', R + 'B534404629/', R + 'B534404636/', R + 'B534404647/', R + 'B534404651/', R + 'B536465329/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off at the entrance. Come early for lunch; bring cash for lunch to be safe. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区観音堂町452-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004417, 135.757362); cross-checked: GSI 京都府京都市中京区観音堂町452番地 (lot) 12m; offset 8 m west so as not to stack on くぐり鍋 六白屋 (452-1, same lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534404617/', R + 'B534404647/', R + 'B534404651/'],
    price_note: 'Lunch prices from November 2025 and June 2026.', last_checked: TODAY, items: [
      it('', '', 'Daily-special lunch set', '¥1,000', 'Lunch', 'no', 'no', 'May 2025.', 'daily_lunch'),
      it('', '', 'Sauce katsu lunch set', '¥1,100', 'Lunch', 'no', 'no', 'June 2026.', 'sauce_katsu'),
      it('', '', 'Omi jidori sukiyaki lunch set', '¥1,400', 'Lunch', 'no', 'no', 'June 2026; ¥1,300 in November 2025.', 'jidori_sukiyaki'),
    ] }, {
    cuisine: '町家の鶏料理中心の居酒屋・昼は日替わり1,000円 (2025年5月)、ソースかタレのとんかつ (2025年11月)、チキン南蛮 (2025年11月、2026年1月・9月)、ソースカツ1,100円 (2026年6月)、おからなどの小鉢2品、味噌汁、漬物付き・近江地鶏のすき焼き1,300円 (2025年11月)〜1,400円 (2026年6月)、軍鶏のすき焼き (2026年3月)・夜は2階の座敷で刺身と焼き鳥 (2025年5月)',
    neighborhood: '室町、四条の北。四条烏丸',
    gf_detail: 'グルテンフリーではない。醤油と砂糖のすき焼き、とんかつ、チキン南蛮、タレの焼き鳥 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏中心の居酒屋。地鶏のすき焼き、チキン南蛮、焼き鳥、刺身 (2025〜2026年の口コミ)。',
    notes: '[鶏の居酒屋・四条室町] 四条烏丸近く、室町の路地の町家の居酒屋。靴を脱いで上がる。昼は1,000円の日替わり (チキン南蛮、とんかつ) と近江地鶏の一人鍋のすき焼き、夜は2階の座敷で焼き鳥と刺身。夜は毎日営業。',
  });
}

save();
