// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 46.
//   + じじばば第三酒場 Jijibaba Daisan Sakaba (Chinese-leaning izakaya in an alley near Kyoto Station; じじばば group)
//   + 京町家いづも 花のか Kyomachiya Izumo Kanoka (lunch and trunk-box afternoon tea in an 1896 machiya)
//   + らんたん Lantan (Shogoin ramen shop since 1964, by Kyoto University Hospital)
//   + ブリュレ キョウト Brulee Kyoto (crème-brûlée doughnuts on the Sanjo shopping street)
//   - まんざらえきよこ 串と酒 (26032580): skipped (reason below).
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 300`, lane ids 26024288, 26041226, 26007062, 26032580
//   (skipped), 26028104. None of the four drafted is in data/kyoto.json by name (第三酒場, いづも/花のか, ブリュレ/Brulee;
//   らんたん — 中華そば らんたん in data is a different shop at Sanjo-Kiyamachi, about 1.1 km away) or address (新シ町138,
//   紅葉町364, 聖護院西町12, 上瓦町69).
//   Same-name count (same brand or operator only): じじばば — four shops in our crawl (じじばばDOS, じじばば木馬亭, 酒肴屋
//   じじばば, じじばば第三酒場), invoice holder 株式会社じじばば (NTA register); 酒肴屋 じじばば and じじばば木馬亭 are in data
//   (osw6-32, osw6-39) — a small local group, drafted as a sister concept and flagged. 花のか — one shop. らんたん (Shogoin) —
//   one shop. ブリュレ キョウト — this shop and a Karasuma-Gojo shop (September 2025 review). Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: じじばば第三酒場 お通し440円; 花のか サービス10％.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-46');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032580', 'まんざらえきよこ 串と酒: same-name shops of five or more — our crawl (shops.jsonl) has seven まんざら shops in Kyoto (まんざら亭 先斗町店, まんざら亭 NISHIKI, まんざら 団栗橋, ぎをんまんざら, まんざらえきよこ and others); まんざら亭 NISHIKI was skipped on the same count in osw1-42');

// ================================================================ じじばば第三酒場
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26024288/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '23:00']);
  put({
    id: 'kyoto_jijibaba_daisan_sakaba', name: 'じじばば第三酒場 (Jijibaba Daisan Sakaba)', category: 'OMNI',
    lat: 34.989453, lng: 135.757411, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A Chinese-leaning izakaya — mapo tofu, gyoza, spring rolls, fried rice, mapo noodles, sweet-and-sour pork; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mapo dishes, chashu, gyoza and pork dishes; a glass-noodle salad and mushroom stir-fries appear, but sauces are not described (2025–2026 reviews).',
    hours_raw: 'Monday–Thursday and Saturday 18:00–23:00 (L.O. 22:30); Friday 18:00–23:30 (L.O. 23:00); closed Sundays, holidays and the first and third Mondays (Tabelog). Reservations by phone only — AI and third-party bookings are not accepted; book or check for seats, as it fills (Tabelog; 2025–2026 reviews). Otoshi ¥440 (Tabelog, original お通し440円). Cash only (Tabelog). 15 seats (Tabelog). Down an alley about 7–10 min from Kyoto Station (Tabelog; June 2025).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: day(['18:00', '23:30']), 5: WD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Alley about 7 min on foot from Kyoto Station',
    cuisine: 'A Chinese izakaya run by a chatty master (2025–2026 reviews) · mapo tofu, the house skill; mapo tofu rice; mapo noodles with wood-ear mushrooms (2025–2026) · gyoza, special potato salad, chashu (served with the potato salad), spring rolls from the revival menu, fried rice, sweet-and-sour pork, bacon (2025–2026) · shiitake, stir-fried tomato and wood ear (September 2026) · glass-noodle salad as the otoshi (December 2025)',
    website: null, gmaps: gm('じじばば第三酒場 京都駅'), menu_url: null,
    notes: '[Chinese izakaya · alley near Kyoto Station, the master’s mapo tofu] A cramped, cheerful 15-seat izakaya in an alley near Kyoto Station, full of regulars and a talkative master who cooks very good Chinese-style food: mapo tofu and mapo noodles, gyoza, a special potato salad with chashu, spring rolls and fried rice. Phone to book; cash only; ¥440 otoshi. Part of the local じじばば group.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T3130001048832 is registered to 株式会社じじばば (NTA register), which also runs 酒肴屋 じじばば and じじばば木馬亭. Reviewers describe “the chatty owner” (September 2026), “the quirky owner and regulars” (February 2026) and a master whose warm personality is “almost frustrating to praise” (October 2026).',
      philosophy: null, specialty: 'Mapo tofu; chashu and potato salad.',
      anecdotes: [
        { text: 'An October 2026 regular, back after a few years, was glad the master remembered.', source: R + 'B61814544/' },
        { text: 'A January 2025 visitor drops in for one more drink before the last train when a table is free.', source: R + 'B499960838/' },
      ],
      japanese_sources_summary: '食べログ: じじばば第三酒場、居酒屋・バル・中華料理、下京区新シ町138、京都駅から徒歩7分、月〜木・土 18:00〜23:00 (L.O.22:30)、金 18:00〜23:30、日・祝と第1・第3月曜休み、予約は電話のみ (AIや外部サービス経由は不可)、お通し440円、現金のみ、15席、適格請求書 T3130001048832 (株式会社じじばば)。口コミ (2025〜2026年、英語): 中華の居酒屋、おしゃべりなマスター、麻婆豆腐、麻婆麺、麻婆丼、餃子、特製ポテサラ、チャーシュー、春巻き、炒飯、酢豚、春雨サラダのお通し、常連が多く満席になりやすい。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3130001048832', R + 'B411616680/', R + 'B464349494/', R + 'B477884579/', R + 'B499960838/', R + 'B505495841/', R + 'B511138668/', R + 'B518723720/', R + 'B521107134/', R + 'B534732118/', R + 'B61814544/'] },
    cultural_comfort: { level: 'japanese', note: 'A regulars’ bar; phone bookings only; cash only; ¥440 otoshi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新シ町138',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989453, 135.757411); cross-checked: GSI 京都府京都市下京区新シ町138番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No dish prices read; reviewers spend ¥3,000–8,000.', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu', '', 'Chinese', 'ask', 'no', '2025–2026 reviews.', 'mapo_tofu'),
      it('', '', 'Special potato salad with chashu', '', 'Small plates', 'ask', 'no', 'June 2026.', 'potesara'),
      it('', '', 'Gyoza', '', 'Chinese', 'no', 'no', '2026 reviews.', 'gyoza'),
      it('', '', 'Otoshi', '¥440', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: 'おしゃべりなマスターの中華の居酒屋 (2025〜2026年の口コミ)・店の腕が光る麻婆豆腐、麻婆丼、きくらげたっぷりの麻婆麺 (2025〜2026年)・餃子、特製ポテトサラダ、ポテサラ付きのチャーシュー、復活メニューの春巻き、炒飯、酢豚、ベーコン (2025〜2026年)・椎茸、トマトときくらげの炒め (2026年9月)・お通しは春雨のサラダ (2025年12月)',
    neighborhood: '京都駅から徒歩7分ほどの路地',
    gf_detail: '要確認。麻婆豆腐、餃子、春巻き、炒飯、麻婆麺、酢豚などの中華寄りの居酒屋。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。麻婆、チャーシュー、餃子、豚の料理。春雨のサラダやきのこの炒め物もあるが、たれの中身は書かれていない (2025〜2026年の口コミ)。',
    notes: '[中華の居酒屋・京都駅近くの路地、マスターの麻婆豆腐] 京都駅近くの路地にある15席の、常連でぎゅうぎゅうの陽気な居酒屋。話好きのマスターが作る中華がとてもおいしい。麻婆豆腐と麻婆麺、餃子、チャーシュー付きの特製ポテサラ、春巻き、炒飯。予約は電話で、現金のみ、お通し440円。地元のじじばばグループの店。',
  });
}

// ================================================================ 京町家いづも 花のか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26041226/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://izumokanoka.com/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_izumo_kanoka', name: '京町家いづも 花のか (Kyomachiya Izumo Kanoka)', category: 'OMNI',
    lat: 34.990613, lng: 135.754442, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch with nine obanzai and a choice of main — rice-flour udon, chicken yuzu-pepper bowl, Wagyu — plus cheesecake; afternoon tea of sweets, quiche and savouries; the udon is made with rice flour (official site), but nothing else is described (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Nine obanzai with each lunch and a pickle rice bowl, but dashi and dairy in the sweets are not described (official site; 2026 reviews).',
    hours_raw: '11:00–18:00; closed Thursday; on weekdays reservation only, and the café stays closed if no one has booked (Tabelog). Reservations accepted; private hire by phone (Tabelog). Service charge 10% (Tabelog, original サービス10％). Cash only (Tabelog). 28 table seats; private rooms upstairs for up to 15 (Tabelog). Room and whole-house rental, and a photographer from ¥50,000, booked by LINE (official site). In a residential lane on Higashinakasuji north of Kitakoji, 12 min from Kyoto Station; staff will meet guests who get lost (Tabelog; May 2026).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Residential lane south of Shichijo, west of Karasuma — 12 min from Kyoto Station',
    cuisine: 'Lunch and afternoon tea in a 130-year-old machiya built in 1896 (official site) · lunch of nine obanzai with a main — rice-flour udon, chicken yuzu-pepper bowl, pickle rice bowl, premium Wagyu steak or sukiyaki — ¥3,500, with a dessert or drink (official site; 2026 reviews) · seasonal trunk-box afternoon teas: rose (¥4,000, June 2026), “Sunflower Summer” (¥9,000, July 2026), autumn fruits and roses (September 2026) · photo-shoot afternoon tea course (May 2026) · cheesecake (May 2026)',
    website: SITE, gmaps: gm('京町家いづも 花のか'), menu_url: SITE,
    notes: '[Machiya café · near Kyoto Station, afternoon tea in a trunk] A deep-red 1896 townhouse tucked in a residential lane, serving a nine-obanzai lunch with rice-flour udon, Wagyu or rice bowls (¥3,500) and seasonal afternoon teas presented in a trunk box. Weekdays by reservation only; 10% service charge; cash only. The house can also be rented, with a photographer.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'The official site describes a 130-year-old machiya dating from 1896 (Meiji 29) and offers rooms for rent. A May 2026 visitor who got lost was met by a staff member; reviewers found the staff kind (June 2026).',
      philosophy: null, specialty: 'Trunk-box afternoon tea; obanzai lunch.',
      anecdotes: [
        { text: 'A June 2026 guest booked for 16:30 on a Saturday and had the rose afternoon tea as the only guest, in a room that felt set for a proposal.', source: R + 'B530796110/' },
        { text: 'A May 2026 visitor got lost on the way, phoned, and was met nearby by the staff.', source: R + 'B528978361/' },
      ],
      japanese_sources_summary: '公式サイト: 京町家いづも 花のか、百年の歴史ある京町家、130年の町家 since 1896 (明治29年)、9種のおばんざいランチ (鶏ゆず胡椒丼、米粉うどん、特選和牛)、トランクのアフタヌーンティー、レンタル・貸切あり (個室3,300円/2時間ほか)、カメラマン50,000円から、予約はLINE。食べログ: カフェ・スイーツ、下京区東中筋通北小路上がる紅葉町364、京都駅から徒歩12分、11:00〜18:00、木曜定休、平日は予約制で予約がなければ休み、サービス10%、現金のみ、28席、2階の個室は15名まで。口コミ (2026年、英語): 3,500円のランチ、薔薇のアフタヌーンティー4,000円、ひまわりの夏のトランクのアフタヌーンティー9,000円、秋のアフタヌーンティー、写真撮影付きのアフタヌーンティー、チーズケーキ、場所がわかりにくい。',
      confidence: 'medium', sources: [SITE, TB, R + 'B528796112/', R + 'B528925322/', R + 'B528978361/', R + 'B529286881/', R + 'B530796110/', R + 'B531053975/', R + 'B531898142/', R + 'B532627154/', R + 'B533992273/', R + 'B535936432/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Weekdays by reservation only; hard to find — staff will guide you; cash only; 10% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東中筋通北小路上がる紅葉町364',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.990613, 135.754442); cross-checked: GSI 京都府京都市下京区紅葉町364番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532627154/', R + 'B530796110/', R + 'B531898142/'],
    price_note: 'Prices from June–August 2026 reviews; 10% service charge extra.', last_checked: TODAY, items: [
      it('', '', 'Lunch: nine obanzai with a main', '¥3,500', 'Lunch', 'ask', 'ask', 'July–August 2026.', 'obanzai_lunch'),
      it('米粉うどん', '', 'Rice-flour udon (lunch main)', '', 'Lunch', 'ask', 'ask', 'Official site; broth not described.', 'komeko_udon'),
      it('', '', 'Rose afternoon tea', '¥4,000', 'Afternoon tea', 'no', 'no', 'June 2026.', 'rose_tea'),
      it('', '', 'Sunflower summer trunk-box afternoon tea', '¥9,000', 'Afternoon tea', 'no', 'no', 'July 2026.', 'summer_tea'),
    ] }, {
    cuisine: '1896年築、130年の町家でランチとアフタヌーンティー (公式サイト)・9種のおばんざいに主菜 (米粉うどん、鶏ゆず胡椒丼、漬物丼、特選和牛のステーキやすき焼き) を選ぶランチ3,500円、甘味かドリンク付き (公式サイト、2026年の口コミ)・季節のトランクのアフタヌーンティー: 薔薇 (4,000円、2026年6月)、ひまわりの夏 (9,000円、2026年7月)、秋の果物と薔薇 (2026年9月)・写真撮影付きのアフタヌーンティー (2026年5月)・チーズケーキ (2026年5月)',
    neighborhood: '七条の南、烏丸の西の住宅街。京都駅から徒歩12分',
    gf_detail: '要確認。9種のおばんざいと主菜 (米粉うどん、鶏ゆず胡椒丼、和牛) のランチ、チーズケーキ、甘味やキッシュのアフタヌーンティー。うどんは米粉 (公式サイト) だが、ほかは書かれていない (2026年の口コミ)。',
    vegan_detail: '要確認。ランチに9種のおばんざいや漬物丼もあるが、出汁や甘味の乳製品については書かれていない (公式サイト、2026年の口コミ)。',
    notes: '[町家カフェ・京都駅近く、トランクのアフタヌーンティー] 住宅街の路地に隠れた深紅の1896年の町家。9種のおばんざいに米粉うどん、和牛、丼のランチ (3,500円) と、トランクに詰めた季節のアフタヌーンティー。平日は予約制、サービス10%、現金のみ。カメラマン付きで家を借りることも。',
  });
}

// ================================================================ らんたん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26007062/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00']);
  put({
    id: 'kyoto_lantan_shogoin', name: 'らんたん (Lantan)', category: 'OMNI',
    lat: 35.0191, lng: 135.778622, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles in a soy-sauce broth (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is meat-based (one reviewer calls it tonkotsu shoyu); even the “meatless” ramen is served in the same broth (2026 reviews).',
    hours_raw: '11:00–14:00; closed Wednesday and the second and fourth Tuesdays (Tabelog; hours may change). No reservations (Tabelog). Cash only (Tabelog). 23 seats: 8 at the counter and tables (Tabelog). Non-smoking (Tabelog). Near the entrance of Kyoto University Hospital in Shogoin, about 600 m from Jingu-Marutamachi Stn (Tabelog; March 2026). Founded in 1964 (May 2026 review).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shogoin, by Kyoto University Hospital — 8 min from Jingu-Marutamachi Stn',
    cuisine: 'A Showa-era ramen shop since 1964 with a light, gently sweet soy broth and homemade thin noodles (2026 reviews) · a simple menu: regular ramen, chashu ramen, and a meatless ramen ¥720 (February and May 2026) · large ramen ¥1,030 (October 2025) · bean sprouts, wide menma, green onion; garlic on the table (2026) · rice and kimchi but few side dishes (March 2026)',
    website: null, gmaps: gm('らんたん ラーメン 聖護院'), menu_url: null,
    notes: '[Ramen · Shogoin by Kyoto University Hospital, since 1964] A lantern-lit, Showa-era ramen shop serving a light, slightly sweet soy ramen with homemade thin noodles — regular, chashu or a cheaper meatless bowl — to regulars and hospital visitors. Lunch only, 11:00–14:00; cash only.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A May 2026 reviewer dates the shop to 1964 and mentions a famous actor among the regulars; another May 2026 visitor counts 62 years in business. A September 2026 regular finds it “not delicious, but not bad either”, a taste from before ramen became a luxury.',
      philosophy: null, specialty: 'Light soy ramen.',
      anecdotes: [
        { text: 'A February 2026 visitor chose the ¥720 meatless ramen because a second ramen stop was planned later that day.', source: R + 'B523443422/' },
        { text: 'A May 2026 family’s children loved the gentle broth.', source: R + 'B528380039/' },
      ],
      japanese_sources_summary: '食べログ: らんたん、ラーメン、左京区聖護院西町12、神宮丸太町駅から591m、11:00〜14:00、水曜と第2・第4火曜休み、予約不可、現金のみ、23席、禁煙。口コミ (2025〜2026年、英語): 1964年創業、昭和の店、あっさりほんのり甘い醤油のスープ、自家製の細麺、並、チャーシュー麺、肉なしのラーメン720円、大盛1,030円、もやし、平たいメンマ、卓上のにんにく、ご飯とキムチ、Kyoto University Hospital の入口近く。',
      confidence: 'medium', sources: [TB, R + 'B497430284/', R + 'B515621583/', R + 'B521360754/', R + 'B521955687/', R + 'B523443422/', R + 'B525088212/', R + 'B528380039/', R + 'B529162798/', R + 'B530972959/', R + 'B534617745/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Old local ramen shop; cash only; lunch only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院西町12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.0191, 135.778622); cross-checked: GSI 京都府京都市左京区聖護院西町12番地 (lot) 55m; 15m from kyoto_curry_biyanto; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523443422/', R + 'B515621583/'],
    price_note: 'Prices from October 2025 and February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen (regular)', '', 'Ramen', 'no', 'no', '2026 reviews.', 'ramen'),
      it('', '', 'Meatless ramen', '¥720', 'Ramen', 'no', 'no', 'February 2026; same broth.', 'nikunashi'),
      it('', '', 'Large ramen', '¥1,030', 'Ramen', 'no', 'no', 'October 2025.', 'oomori'),
    ] }, {
    cuisine: '1964年からの昭和のラーメン屋。あっさりほんのり甘い醤油のスープと自家製の細麺 (2026年の口コミ)・シンプルなメニュー: 並、チャーシュー麺、肉なしのラーメン720円 (2026年2月、5月)・大盛1,030円 (2025年10月)・もやし、幅広のメンマ、ねぎ、卓上のにんにく (2026年)・サイドはご飯とキムチくらい (2026年3月)',
    neighborhood: '聖護院、Kyoto University Hospital のそば。神宮丸太町駅から徒歩8分',
    gf_detail: 'グルテンフリーではない。自家製の小麦の麺と醤油のスープ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。スープは肉ベース (豚骨醤油とする口コミも)。肉なしのラーメンも同じスープ (2026年の口コミ)。',
    notes: '[ラーメン・Kyoto University Hospital そばの聖護院、1964年から] 提灯の明かりの昭和のラーメン屋。あっさりほんのり甘い醤油に自家製の細麺。並、チャーシュー、安い肉なし。常連や病院の帰りの人が来る。昼のみ11時〜14時、現金のみ。',
  });
}

// ================================================================ ブリュレ キョウト
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26028104/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_brulee_kyoto_sanjo', name: 'ブリュレ キョウト (Brulee Kyoto)', category: 'OMNI',
    lat: 35.008533, lng: 135.748343, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yeast doughnuts filled with custard (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: custard-filled doughnuts (2025–2026 reviews).',
    hours_raw: '10:00–17:00 daily (Tabelog; hours may change). No reservations (Tabelog). Cash only (Tabelog). Mostly takeaway, with 6 seats listed (Tabelog; September 2026). Non-smoking (Tabelog). In the Sanjo shopping arcade, about 10 min from Nijojo-mae Stn (Tabelog; September 2026). A second shop opened at Karasuma-Gojo (September 2025 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo shopping arcade west of Horikawa — 10 min from Nijojo-mae Stn',
    cuisine: 'Crème-brûlée doughnuts: a custard-filled doughnut sugared and torched to order, ¥350 (June 2025) to ¥400 (September 2026) · matcha doughnut (December 2025) · limited fresh-caramel brûlée doughnut ¥400 (May 2026)',
    website: null, gmaps: gm('ブリュレ キョウト 中京区上瓦町69'), menu_url: null,
    notes: '[Doughnuts · Sanjo shopping arcade] A tiny doughnut stand in the long Sanjo arcade that does one thing: a soft doughnut stuffed with custard, sugared and torched in front of you so the top cracks like crème brûlée (about ¥400). Eat it on the spot or carry it home carefully. Cash only.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No owner is named in the sources read. A September 2025 reviewer reports a second shop opened at Karasuma-Gojo.',
      philosophy: null, specialty: 'Crème-brûlée doughnut.',
      anecdotes: [
        { text: 'A May 2026 passer-by asked if the doughnut could be eaten right away; the staff torched it on the spot.', source: R + 'B528927509/' },
        { text: 'A December 2025 buyer warns that the matcha coating comes off on the way home.', source: R + 'B519988346/' },
      ],
      japanese_sources_summary: '食べログ: ブリュレ キョウト、ドーナツ、中京区上瓦町69、二条城前駅から413m、毎日10:00〜17:00、予約不可、現金のみ、6席、禁煙。口コミ (2025〜2026年、英語): 三条の商店街、注文後にバーナーで焼くクリームブリュレのドーナツ (2025年6月350円、2026年9月400円)、抹茶のドーナツ、期間限定の生キャラメルブリュレ400円、ほぼ持ち帰り、烏丸五条に2号店とのこと。',
      confidence: 'medium', sources: [TB, R + 'B505772405/', R + 'B506311346/', R + 'B507825413/', R + 'B508618503/', R + 'B511865478/', R + 'B513996949/', R + 'B517171764/', R + 'B519988346/', R + 'B528927509/', R + 'B535330621/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point-and-pay doughnut stand; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上瓦町69',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008533, 135.748343); cross-checked: GSI 京都府京都市中京区上瓦町69番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535330621/', R + 'B528927509/'],
    price_note: 'Prices from May and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Crème-brûlée doughnut', '¥400', 'Doughnuts', 'no', 'no', 'September 2026.', 'brulee_donut'),
      it('', '', 'Fresh-caramel brûlée doughnut (limited)', '¥400', 'Doughnuts', 'no', 'no', 'May 2026.', 'caramel_donut'),
      it('', '', 'Matcha doughnut', '', 'Doughnuts', 'no', 'no', 'December 2025.', 'matcha_donut'),
    ] }, {
    cuisine: 'クリームブリュレのドーナツ: カスタードのドーナツに砂糖をふり、注文後にバーナーで焼く。350円 (2025年6月)〜400円 (2026年9月)・抹茶のドーナツ (2025年12月)・期間限定の生キャラメルのブリュレドーナツ400円 (2026年5月)',
    neighborhood: '堀川の西の三条の商店街。二条城前駅から徒歩10分',
    gf_detail: 'グルテンフリーではない。カスタード入りのイーストドーナツ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。カスタード入りのドーナツ (2025〜2026年の口コミ)。',
    notes: '[ドーナツ・三条の商店街] 長い三条の商店街の小さなドーナツの店。ふわふわのドーナツにカスタードをたっぷり詰め、砂糖をふって目の前でバーナーで焼き、表面をクリームブリュレのようにパリッと (400円ほど)。その場で食べても、そっと持ち帰っても。現金のみ。',
  });
}

save();
