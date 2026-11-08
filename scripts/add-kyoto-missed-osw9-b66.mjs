// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 66.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 和牛焼肉 徳 Wagyu Yakiniku Toku (wagyu yakiniku and sukiyaki above the Kamo River; since 2021)
//   + ぢどり亭 Jidori Tei (one-person chicken and horse-meat izakaya in Gion)
//   + 鍋と旬菜と京料理 花柳 Karyu (Pontocho Kyoto cuisine and hot pots with a summer kawadoko; C&D group)
//   + 京のおばんざい 酒処 高山 Takayama (big set-meal and obanzai diner on Shinkyogoku)
//   Same-name counts first (data and queue-status.jsonl): none for 徳 (only 三徳六味 and ＨＡＮＡ吉兆 rulings, unrelated),
//   ぢどり亭, 花柳, 高山 or 拓美. No earlier rulings. None drafted is in data/kyoto.json by name or address.
//   Groups:
//   - 徳: the operator, 株式会社拓美, says on its own site that it runs only this one shop directly.
//   - ぢどり亭 (Gion): not the アスラポート (KOZO Holdings) chain. The chain's own store list (didoritei.cc/store/,
//     39 shops in Osaka, Hyogo, Wakayama, Saitama and Tokyo) has no Kyoto shop. Tabelog shows no invoice number,
//     and the shop has no site of its own. A March 2024 review says one owner runs it alone. Drafted on its own evidence.
//   - 花柳: one concept of C&D, a Kyoto group (c-and-d.net lists about ten differently named shops). It is a sister
//     concept of a local group, so it is drafted.
//   Service charges checked against Tabelog's Japanese original: 花柳 「お会計時、ご飲食代金の10％がサービス料として
//   かかります。」; 徳, ぢどり亭 and 高山 have no section.
//   Pins (checked against main): ぢどり亭 is approximate (GSI matched only the ward for 祇園末吉町95), 11 m from
//   kyoto_hassun_gion at the same address. The others match a GSI lot; all ≥ 8 m from other records; no offsets.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-66');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 和牛焼肉 徳
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036819/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://toku.takumi-kyoto.com/';
  const N = day(['17:00', '23:00']); const W = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_wagyu_yakiniku_toku', name: '和牛焼肉 徳 (Wagyu Yakiniku Toku)', category: 'OMNI',
    lat: 35.006385, lng: 135.772729, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The house sauce uses salt koji (own site); marinades, sukiyaki sauce and rice dishes are unknown (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu yakiniku, sukiyaki and meat sushi (own site; 2025–26 reviews).',
    hours_raw: 'Dinner Tue–Sun 17:00–23:00 (food L.O. 22:00, drinks 22:30); lunch Sat, Sun and holidays 11:00–15:00 (L.O. 14:30); closed Mondays, and the next day if Monday is a holiday; occasional extra closures and special hours in peak seasons (own site; Tabelog). Tabelog says no bookings, but reviewers booked (2025–26 reviews). Cards, e-money and QR accepted (Tabelog). 80 seats with 11 private rooms, some with sunken seating and windows on the Kamo River; non-smoking; children welcome (Tabelog; March 2026 review). 2nd floor, east of Kawabata between Sanjo and Shijo (own site; August 2025 review).',
    hours: { 1: N, 2: N, 3: N, 4: N, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawabata, between Sanjo and Shijo — 3 min from Keihan Sanjo Stn',
    cuisine: 'Wagyu yakiniku of A5 and A4 black-wagyu heifers and 信州プレミアム牛, cut in-house, with a salt-koji sauce (own site): yakiniku courses such as the Daikokuten course with yukhoe (August 2025); loin, tongue and outside skirt (December 2025); weekend lunch of sukiyaki gozen with Shinshu beef (January and March 2026), wagyu sirloin steak lunch (February 2026), strip-loin steak box, wagyu hitsumabushi gozen, wagyu sushi (August 2026); steamed vegetables (June 2025); matcha warabi mochi (March 2026)',
    website: WEB, gmaps: gm('和牛焼肉 徳 京都'), menu_url: null,
    notes: '[Wagyu yakiniku · Kamo River] A large second-floor yakiniku restaurant on Kawabata with private rooms looking over the Kamo River — a cherry-blossom view in spring — serving black-wagyu yakiniku courses at night and sukiyaki or steak lunches at weekends. Dinner about ¥10,000–15,000; lunch about ¥3,000–4,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 7 December 2021 (Tabelog). Run by 株式会社拓美, whose site says the group runs only this one shop directly (own site). Butchers cut the meat in-house; mainly heifers of black wagyu (Tabelog; own site). Two reviewers mention overseas staff giving polite service (May 2025 and April 2026 reviews).',
      philosophy: 'Wagyu and koji in a quiet room above the Kamo River (own site).',
      specialty: 'Black-wagyu yakiniku; Shinshu beef sukiyaki.',
      anecdotes: [
        { text: 'A May 2025 diner who had long noticed the yakiniku lanterns on the path down to Gion booked for a birthday and was seated in the quietest spot with a view of the Kamo River.', source: R + 'B508358329/' },
        { text: 'A diner who comes every New Year\'s Day (January 2026) praised the Shinshu beef sukiyaki lunch.', source: R + 'B520078030/' },
        { text: 'In April 2026, when seats cannot be reserved by location, a diner still got a window seat for the night cherry blossoms.', source: R + 'B525580792/' },
        { text: 'A family visiting at Golden Week (review dated August 2026) found the Shinshu Premium Beef sukiyaki sold out; the children loved the meat sushi.', source: R + 'B488518611/' },
      ],
      japanese_sources_summary: '食べログ: 和牛焼肉 徳、焼肉・韓国料理・居酒屋、東山区弁財天町26 2F、京阪三条駅から徒歩3分、火〜金 17:00〜23:00、土・日 11:00〜15:00・17:00〜23:00、月曜休み (祝日の場合は翌日)、不定休あり、予約不可の表示、カード・電子マネー・QR 可、80席、個室11室、禁煙、子ども可、2021年12月7日オープン。公式サイト: 運営は株式会社拓美、直営は「和牛焼肉 徳」1店舗のみ、鴨川を望む空間、肉と麹、塩麹のたれ、信州プレミアム牛、A5・A4の黒毛和牛 (主に雌牛)、夜 17:00〜23:00、昼は土日祝 11:00〜15:00、月曜休み。口コミ (2025〜2026年、英語): Daikokuten course とユッケ、ロース・タン・ハラミ、昼のすき焼き御膳 (信州の牛)、サーロインステーキのランチ、ステーキのボックス、Hitsumabushi gozen、肉寿司、鴨川と桜の眺め、掘りごたつの個室、海外のスタッフ。',
      confidence: 'medium', sources: [TB, WEB, R + 'B488518611/', R + 'B508358329/', R + 'B512839807/', R + 'B514985923/', R + 'B520078030/', R + 'B523212659/', R + 'B524684548/', R + 'B524695636/', R + 'B525580792/', R + 'B525755270/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Overseas staff (May 2025 and April 2026 reviews); many overseas guests (June 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区弁財天町26 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006385, 135.772729); cross-checked: GSI 京都府京都市東山区弁財天町26番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB, R + 'B520078030/', R + 'B488518611/'],
    price_note: 'No item prices found; Tabelog average dinner ¥6,000–7,999, lunch ¥2,000–2,999.', last_checked: TODAY, items: [
      it('', '', 'Sukiyaki gozen (lunch, Shinshu beef)', '', 'Lunch', 'ask', 'no', 'January and March 2026 reviews.', 'sukiyaki_gozen'),
      it('', '', 'Wagyu sirloin steak lunch', '', 'Lunch', 'ask', 'no', 'February 2026 review.', 'sirloin_lunch'),
      it('', '', 'Daikokuten course', '', 'Courses', 'ask', 'no', 'August 2025 review.', 'daikokuten'),
      it('', '', 'Wagyu sushi', '', 'A la carte', 'ask', 'no', 'August 2026 review.', 'wagyu_sushi'),
    ] }, {
    cuisine: '店で切り分ける A5・A4 の黒毛和牛の雌牛と信州プレミアム牛、塩麹のたれ (公式サイト): Daikokuten course とユッケ (2025年8月)、ロース、タン、ハラミ (2025年12月)、週末の昼は信州の牛のすき焼き御膳 (2026年1月・3月)、和牛サーロインステーキのランチ (2026年2月)、ステーキのボックス、和牛の Hitsumabushi gozen、肉寿司 (2026年8月)、蒸し野菜 (2025年6月)、抹茶のわらび餅 (2026年3月)',
    neighborhood: '川端通、三条と四条の間。京阪三条駅から徒歩3分',
    gf_detail: '要確認。たれに塩麹を使う (公式サイト)。下味、すき焼きの割り下、ご飯ものは不明 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉、すき焼き、肉寿司 (公式サイト、2025〜26年の口コミ)。',
    notes: '[和牛焼肉・鴨川] 川端通のビル2階、鴨川を見下ろす個室のある大きな焼肉店。春は桜も。夜は黒毛和牛の焼肉コース、週末の昼はすき焼きやステーキ。夜は1万〜1万5千円、昼は3,000〜4,000円ほど。',
  });
}

// ================================================================ ぢどり亭 (祇園)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002667/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '25:00']);
  put({
    id: 'kyoto_jidoritei_gion', name: 'ぢどり亭 (Jidori Tei, Gion)', category: 'OMNI',
    lat: 35.004975, lng: 135.773786, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled chicken and horse sashimi may suit, but kara-age, shrimp chili and ponzu are not (2021–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, black pork, duck and horse meat (2021–2026 reviews).',
    hours_raw: 'Mon–Sat 18:00–01:00; closed Sundays and holidays; hours may change (Tabelog). Book ahead: in October 2026 later arrivals were turned away when the meat ran out (review). Cards (JCB, AMEX, Diners) (Tabelog). Smoking allowed (Tabelog; December 2021 review). In a corner of Gion at Sueyoshicho–Tominaga, about 230 m from Gion-Shijo Stn (Tabelog; March 2021 and March 2024 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Sueyoshicho — 3 min from Gion-Shijo Stn',
    cuisine: 'Chicken and horse meat: Satsuma chicken grilled by the cut, chicken-skin tsukudani to start, smoked spare ribs, grilled ham, black pork (December 2021); horse sashimi (April 2025, October 2026); roasted duck leg, shochu (May 2024); lightly fried vegetables with sesame oil and ponzu (March 2024); a yuzu-pepper-like yellow paste (April 2022); chicken kara-age and shrimp chili (October 2026)',
    website: null, gmaps: gm('ぢどり亭 祇園'), menu_url: null,
    notes: '[Chicken & horse meat · Gion] A small one-person izakaya in a corner of Gion serving Satsuma chicken, horse sashimi and black pork to a crowd of regulars until 1 am. Book: the meat runs out. Smoking allowed. About ¥4,000–15,000.',
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed)'], origin: null,
      background: 'Reviewed on Tabelog since 2017. A Satsuma-chicken specialist that also serves black pork (December 2021 review). The owner runs it alone (March 2024 review), with a close circle of regulars (April 2022 review). Not part of the ぢどり亭 chain of アスラポート, whose store list has no Kyoto shop (didoritei.cc, checked ' + TODAY + ').',
      philosophy: null,
      specialty: 'Satsuma chicken and horse sashimi.',
      anecdotes: [
        { text: 'An October 2026 diner called the horse sashimi the best of a lifetime and watched later arrivals turned away because the meat had run out.', source: R + 'B538077432/' },
        { text: 'A March 2024 diner felt the owner\'s dedication to chicken and horse meat while running the shop alone, and loved the fluffy fried yam.', source: R + 'B482283795/' },
        { text: 'A December 2021 first-timer tore into the firm Satsuma chicken thigh after chicken-skin tsukudani, smoked spare ribs and grilled ham, but disliked the regulars\' cigarette smoke.', source: R + 'B443668728/' },
      ],
      japanese_sources_summary: '食べログ: ぢどり亭、焼き鳥・馬肉料理、東山区祇園末吉町95、祇園四条駅から233m、月〜土 18:00〜翌1:00、日・祝休み (変更の可能性あり)、カード (JCB・AMEX・Diners) 可、喫煙可。アスラポートのぢどり亭の店舗一覧 (39店舗) に京都の店はない。口コミ (2017〜2026年、英語): Satsuma の鶏、黒豚、鶏皮の佃煮、スモークのスペアリブ (2021年12月)、店主が一人で切り盛り (2024年3月)、鴨のロースト、馬刺し、焼酎 (2024年5月)、馬刺し、唐揚げ、エビチリ、肉がなくなり入れない客も (2026年10月)。',
      confidence: 'low', sources: [TB, 'https://didoritei.cc/store/', R + 'B443668728/', R + 'B444966028/', R + 'B447895910/', R + 'B482283795/', R + 'B485495992/', R + 'B505462269/', R + 'B522406421/', R + 'B538077432/'] },
    cultural_comfort: { level: 'japanese', note: 'Regulars\' izakaya run by one person; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園末吉町95',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004975, 135.773786); GSI matched only the ward for 祇園末吉町95 — approximate; 11 m from kyoto_hassun_gion at the same address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538077432/', R + 'B443668728/'],
    price_note: 'No item prices found; reviews give ¥4,000–5,000 (2024) and ¥10,000–15,000 (2026) a head.', last_checked: TODAY, items: [
      it('', '', 'Horse sashimi', '', 'Horse meat', 'ask', 'no', 'April 2025 and October 2026 reviews.', 'basashi'),
      it('', '', 'Grilled Satsuma chicken thigh', '', 'Chicken', 'ask', 'no', 'December 2021 review.', 'chicken_thigh'),
      it('', '', 'Chicken kara-age', '', 'Chicken', 'no', 'no', 'October 2026 review.', 'karaage'),
    ] }, {
    cuisine: '鶏と馬肉: 部位ごとに焼く Satsuma の鶏、お通しの鶏皮の佃煮、スモークのスペアリブ、焼いたハム、黒豚 (2021年12月)、馬刺し (2025年4月、2026年10月)、鴨のロースト、焼酎 (2024年5月)、ごま油とポン酢の野菜の素揚げ (2024年3月)、柚子胡椒のような黄色い薬味 (2022年4月)、唐揚げとエビチリ (2026年10月)',
    neighborhood: '祇園末吉町。祇園四条駅から徒歩3分',
    gf_detail: '要確認。焼いた鶏や馬刺しは合う可能性があるが、唐揚げ、エビチリ、ポン酢は不可 (2021〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏、黒豚、鴨、馬肉 (2021〜2026年の口コミ)。',
    notes: '[鶏と馬肉・祇園] 祇園の一角、店主が一人で営む小さな居酒屋。Satsuma の鶏、馬刺し、黒豚を常連とともに深夜1時まで。肉がなくなるので予約を。喫煙可。4,000〜15,000円ほど。',
  });
}

// ================================================================ 鍋と旬菜と京料理 花柳
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017661/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_karyu_pontocho', name: '鍋と旬菜と京料理 花柳 (Karyu)', category: 'OMNI',
    lat: 35.007366, lng: 135.771189, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto courses and hot pots are usually seasoned with soy sauce and dashi; fried ayu and tempura-style dishes appear (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: boar hot pot, hamo, ayu and octopus (2026 reviews).',
    hours_raw: 'Daily 11:30–15:00 (food L.O. 14:00) and 17:00–22:00 (food L.O. 21:00); lunch bookings from 11:00 (Tabelog). Bookings taken; same-day cancellation charged 100% (Tabelog). Service charge 10% on food and drink; prices include tax (Tabelog Japanese original 「お会計時、ご飲食代金の10％がサービス料としてかかります。」). Cards and QR (PayPay, Alipay, WeChat Pay); no e-money (Tabelog). 46 seats; private rooms with tatami or chairs; a riverside terrace (kawadoko) in season; non-smoking; English menu; children welcome (Tabelog; 2026 reviews). Down a Pontocho alley south of Sanjo, 5 min from Keihan Sanjo (Tabelog; July 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, south of Sanjo, on the Kamo River — 5 min from Sanjo Stn',
    cuisine: 'Kyoto cuisine, seasonal small plates and hot pots: botan nabe (boar hot pot) with rice porridge to finish (May and August 2026); a choice of hot pots (August 2026); kaiseki lunch (June 2026); Takebako gozen ¥3,300 with rice under yuba sauce and ginger (July 2026); yuba, hamo and ayu (August 2026); the Miyabi course with an appetizer assortment and fried ayu with roe, all-you-can-drink Kyoto sake (September 2026)',
    website: 'http://c-and-d.net/karyu/', gmaps: gm('鍋と旬菜と京料理 花柳 先斗町'), menu_url: null,
    notes: '[Kyoto cuisine & hot pots · Pontocho] A Pontocho house restaurant with tatami and chair rooms and a summer kawadoko terrace over the Kamo River, serving Kyoto courses, yuba, hamo and ayu, and boar or other hot pots. Lunch ¥3,000–4,000; dinner ¥10,000–15,000; 10% service charge.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'One of the restaurants of C&D, a Kyoto group (c-and-d.net). Staff moved diners indoors when rain or insects came, and switched a diner who could not sit in seiza to a room with chairs (April, June and August 2026 reviews).',
      philosophy: null,
      specialty: 'Kawadoko dining; botan nabe.',
      anecdotes: [
        { text: 'A May 2026 diner ate botan nabe on the riverbed terrace as the Kamo River darkened and called the closing rice porridge the best ever.', source: R + 'B529657975/' },
        { text: 'A June 2026 diner picked Karyu for a reasonable riverside lunch with no seating charge, a little apart from the neighbouring terraces.', source: R + 'B529818625/' },
        { text: 'When insects gathered at the lantern by an August 2026 table, the staff offered a private room indoors.', source: R + 'B533459595/' },
        { text: 'A September 2026 diner, rained off the terrace, had the Miyabi course; the fried ayu with roe stood out.', source: R + 'B536453512/' },
      ],
      japanese_sources_summary: '食べログ: 鍋と旬菜と京料理 花柳、日本料理・鍋・すき焼き、中京区先斗町三条下ル若松町138-5、京阪三条駅から徒歩5分、毎日 11:30〜15:00 (料理 L.O. 14:00)・17:00〜22:00 (料理 L.O. 21:00)、予約可 (当日キャンセルは100%)、サービス料10%、カード・QR 可、電子マネー不可、46席、個室、座敷、オープンテラス、禁煙、英語メニュー、子ども可。C&D グループの店 (c-and-d.net)。口コミ (2026年、英語): 鴨川の川床、ぼたん鍋と締めの雑炊、選べる鍋、昼の会席、Takebako gozen 3,300円と湯葉あんのご飯、湯葉・鱧・鮎、Miyabi course、子持ち鮎の揚げ物、京都の地酒の飲み放題。',
      confidence: 'medium', sources: [TB, 'http://c-and-d.net/', R + 'B527105156/', R + 'B529657975/', R + 'B529818625/', R + 'B529946406/', R + 'B533459595/', R + 'B533688037/', R + 'B533898252/', R + 'B534445316/', R + 'B535716012/', R + 'B536453512/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); chair rooms on request.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町三条下ル若松町138-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007366, 135.771189); cross-checked: GSI 京都府京都市中京区若松町138番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533688037/', R + 'B536453512/'],
    price_note: 'Takebako gozen price from a July 2026 review; 10% service charge on top (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Takebako gozen (lunch)', '¥3,300', 'Lunch', 'ask', 'no', 'July 2026 review.', 'takebako'),
      it('', '', 'Botan nabe (boar hot pot)', '', 'Hot pots', 'ask', 'no', 'May and August 2026 reviews.', 'botan_nabe'),
      it('', '', 'Miyabi course', '', 'Courses', 'ask', 'no', 'September 2026 review.', 'miyabi'),
    ] }, {
    cuisine: '京料理、旬菜、鍋: ぼたん鍋と締めの雑炊 (2026年5月・8月)、選べる鍋 (2026年8月)、昼の会席 (2026年6月)、湯葉あんかけのご飯と生姜がつく Takebako gozen 3,300円 (2026年7月)、湯葉・鱧・鮎 (2026年8月)、前菜の盛り合わせと子持ち鮎の揚げ物の Miyabi course、京都の地酒の飲み放題 (2026年9月)',
    neighborhood: '先斗町、三条の南、鴨川沿い。三条駅から徒歩5分',
    gf_detail: '要確認。京料理の会席や鍋は醤油と出汁が基本。鮎の揚げ物などもある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ぼたん鍋、鱧、鮎、タコ (2026年の口コミ)。',
    notes: '[京料理と鍋・先斗町] 先斗町の町家の店。座敷と椅子の個室、夏は鴨川の川床。京料理の会席、湯葉・鱧・鮎、ぼたん鍋などの鍋。昼は3,000〜4,000円、夜は1万〜1万5千円ほど、サービス料10%。',
  });
}

// ================================================================ 京のおばんざい 酒処 高山
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017415/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '22:00']);
  put({
    id: 'kyoto_obanzai_sakadokoro_takayama', name: '京のおばんざい 酒処 高山 (Takayama)', category: 'OMNI',
    lat: 35.00775, lng: 135.768051, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A large menu of set meals, mostly fried, soy-seasoned or noodle dishes (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Over 90 items including tofu and vegetable obanzai and soba; dashi likely (Tabelog; 2025–26 reviews).',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:00) (Tabelog); a May 2025 reviewer noted L.O. 22:45. Bookings taken (Tabelog). Cards and QR; no e-money (Tabelog). 76 seats, benches with tall partitions; non-smoking; children welcome; wheelchair accessible (Tabelog; May 2025 review). On Shinkyogoku south of Sanjo, about 6 min from Kawaramachi or Sanjo (Tabelog; May 2025 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinkyogoku, south of Sanjo — 6 min from Kawaramachi Stn',
    cuisine: 'Set meals and obanzai all day — over 90 items (Tabelog): about 20 gozen and set meals at lunch, such as a sirloin Tokachi nabe (May 2025), mapo eggplant and cold tofu (May 2025), kara-age set (October 2025), ginger pork and vegetable stir-fry gozen about ¥1,300 (January 2026), tartar ebi-fry rice bowl with ebi chili and boiled dumplings (May 2026), cold soba (May 2026), dashimaki and simmered dishes; set meals of about ¥1,500 at night (June 2025); a ¥1,000 "Otsukaresama" set and a ¥2,000 party plan with two hours\' drinks (Tabelog)',
    website: null, gmaps: gm('京のおばんざい 酒処 高山 新京極'), menu_url: null,
    notes: '[Set meals & obanzai · Shinkyogoku] A big, cheap diner-izakaya on Shinkyogoku with over 90 items — generous set meals, obanzai, fried dishes and soba — from 11 am to 10 pm. About ¥1,000–2,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Homemade obanzai from local ingredients (May 2025 review). Partitioned bench seating and a calm, older crowd (May 2025 reviews).',
      philosophy: 'Comforting dishes gentle on the stomach and the wallet (Tabelog).',
      specialty: 'Large set meals and obanzai.',
      anecdotes: [
        { text: 'A May 2025 diner found the thick sirloin in the Tokachi nabe lunch tender and well worth the slightly higher price.', source: R + 'B506092552/' },
        { text: 'A June 2025 diner valued a ¥1,500 set meal at night but found the flavours oddly empty.', source: R + 'B508110590/' },
        { text: 'A May 2026 diner took a large rice with the tartar ebi-fry bowl, ebi chili and dumplings and was almost too full to move.', source: R + 'B527235868/' },
      ],
      japanese_sources_summary: '食べログ: 京のおばんざい 酒処 高山、日本料理・食堂・居酒屋、中京区新京極通り三条下ル東入ル松ヶ枝町457-3、京都市役所前駅から363m、毎日 11:00〜22:00 (L.O. 21:00)、予約可、カード・QR 可、電子マネー不可、76席、禁煙、子ども可、車いす可、90品以上の家庭的なおかず、「Otsukaresama set」1,000円、飲み放題120分付きの宴会2,000円 (紹介文、英訳)。ぐるなび: 京のおばんざい 酒処 高山。口コミ (2025〜2026年、英語): 昼は約20種類の御膳と定食、Tokachi のサーロインの鍋、生姜焼きと野菜炒めの御膳約1,300円、唐揚げ定食、エビフライのタルタル丼、エビチリ、水餃子、そば、夜も定食約1,500円、仕切りのあるベンチ席。',
      confidence: 'medium', sources: [TB, 'https://gurunavi.com/ja/kaf7303/rst', R + 'B506092552/', R + 'B507642710/', R + 'B508110590/', R + 'B516432338/', R + 'B520748392/', R + 'B527235868/', R + 'B534078480/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Picture menu style set-meal diner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通り三条下ル東入ル松ヶ枝町457-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007750, 135.768051); cross-checked: GSI 京都府京都市中京区松ケ枝町457番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B520748392/', R + 'B508110590/'],
    price_note: 'Prices from Tabelog and 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', '"Otsukaresama" set', '¥1,000', 'Sets', 'ask', 'ask', 'Tabelog.', 'otsukaresama'),
      it('', '', 'Party plan with 120 min all-you-can-drink', '¥2,000', 'Courses', 'ask', 'ask', 'Tabelog.', 'party'),
      it('', '', 'Ginger pork and vegetable stir-fry gozen', 'about ¥1,300', 'Set meals', 'ask', 'no', 'January 2026 review.', 'ginger_pork'),
      it('', '', 'Kara-age set meal', '', 'Set meals', 'no', 'no', 'October 2025 review.', 'karaage'),
    ] }, {
    cuisine: '一日中定食とおばんざい、90品以上 (食べログ): 昼は約20種類の御膳と定食 (Tokachi のサーロインの鍋 2025年5月、麻婆なすと冷奴 2025年5月、唐揚げ定食 2025年10月、生姜焼きと野菜炒めの御膳 約1,300円 2026年1月、エビフライのタルタル丼とエビチリ・水餃子 2026年5月、そば 2026年5月)、だし巻き、煮物、夜も約1,500円の定食 (2025年6月)、「Otsukaresama set」1,000円、2時間飲み放題の宴会2,000円 (食べログ)',
    neighborhood: '新京極、三条の南。河原町駅から徒歩6分',
    gf_detail: '要確認。定食のメニューが多く、揚げ物、醤油味、麺類が中心 (2025〜26年の口コミ)。',
    vegan_detail: '要確認。豆腐や野菜のおばんざい、そばなど90品以上あるが、出汁を使う可能性が高い (食べログ、2025〜26年の口コミ)。',
    notes: '[定食とおばんざい・新京極] 新京極の大きくて安い食堂兼居酒屋。90品以上、ボリュームのある定食、おばんざい、揚げ物、そばを朝11時から夜10時まで。1,000〜2,000円ほど。',
  });
}

save();
