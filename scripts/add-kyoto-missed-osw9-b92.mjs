// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 92.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 御肉処 銀閣寺大にし Onikudokoro Ginkakuji Onishi (yakiniku of the Kyoto butcher 銀閣寺大西 on Teramachi)
//   - わいんバー ICHIKAWA — no 2025–26 review (one review, November 2019)
//   - コクリコブラン — retail food shop (Greg 11-07 ruling): a bakery and sweets shop with no seating listed; no sourced founding
//     history or GF/vegan options
//   + 晩boo 東山三条本店 Banboo (izakaya by Higashiyama Stn with a shabu-shabu pot as the starter; one of two 晩boo shops)
//   - シェフズ・テーブル by Katsuhito Inoue — big-chain hotel venue (Greg 11-08 ruling): in ザ・リッツ・カールトン京都 1F (Tabelog address)
//   + BUNNY b. (sandwich and burger shop off Oshikoji, run by two sisters)
//   + 京都焼肉 牛楽亭 Gyurakutei (Oita wagyu yakiniku near Shijo-Shinmachi, private rooms)
//   + Brisa (Spanish bar with paella on Teramachi-Nijo, run by the owner alone)
//   Brand checks: none in data or queue-status by name; 銀閣寺大にし is the restaurant of the butcher (株)銀閣寺大西 (Kyoto
//   Prefecture map); 株式会社晩boo runs the Higashiyama-Sanjo and Kojinguchi shops (careermap) — two shops, none in data; no
//   other 牛楽亭 found (TableCheck, aumo). None is a THAN or WILL brand.
//   Service charges from Tabelog's Japanese original: 晩boo 「お通し700円（税込）」; 牛楽亭 「無し」; Brisa 「おつき出しとして 200円/人」;
//   大にし and BUNNY b. have no section.
//   Pins (checked against main, hidden records included): 大にし moved 1m NNE (5.1m from kyoto_teramachi_nishimura); 晩boo moved
//   2m NE (4.6m from kyoto_le_bac_a_sable) with loc_approx 'single' (no lot number); Brisa moved 5m WNW (2.0m from
//   kyoto_calvador_bar); 牛楽亭 and BUNNY b. ≥ 24m from every record.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-92');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26006807', 'no 2025–26 review (one review, November 2019)');
skip('26040599', 'retail food shop (Greg 11-07 ruling): コクリコブラン is a bakery and sweets shop with no seating listed; no sourced founding history and no sourced GF or vegan options');
skip('26036339', 'big-chain hotel venue (Greg 11-08 ruling): Chef\'s Table by Katsuhito Inoue is in ザ・リッツ・カールトン京都 1F (Tabelog address; ritzcarlton.com)');

// ================================================================ 御肉処 銀閣寺大にし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26022125/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.yakiniku-onishi.jp/';
  const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_ginkakuji_onishi_teramachi', name: '御肉処 銀閣寺大にし (Onikudokoro Ginkakuji Onishi)', category: 'OMNI',
    lat: 35.012845, lng: 135.767344, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled tongue and plain-grilled cuts may suit; sauces, cold noodles and the closing curry are usually wheat (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (2024–26 reviews).',
    hours_raw: 'Tue–Sun 17:00–22:00 (L.O. 21:00); closed Mondays and some Tuesdays (Tabelog). Courses need booking by the day before (Tabelog). Cards; no e-money or QR (Tabelog). 38 seats: 8 at the counter and 30 at tables on two floors; private rooms; non-smoking (Tabelog; August 2025 review). On Teramachi south of Nijo, 5 min from Kyoto Shiyakusho-mae (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi-Nijo — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Wagyu yakiniku from the butcher 銀閣寺大西: Murazawa beef sirloin cap and rump, Kyotanba Hiraijyu flap, yukhoe and salt-grilled tongue (October 2024); thick-cut tongue, top sirloin (August 2025); meat sushi, gukbap (May 2025); cold noodles and bibimbap (November 2025); a closing curry (2024–26); about ¥10,000–15,000',
    website: WEB, gmaps: gm('御肉処 銀閣寺大にし 寺町'), menu_url: null,
    notes: '[Yakiniku · Teramachi-Nijo] The yakiniku restaurant of the old Kyoto butcher 銀閣寺大西: Murazawa and other wagyu, meat sushi, yukhoe and a closing curry, on two calm floors with private rooms. About ¥10,000–15,000.',
    chef_bio: { chef_name: null, roles: ['Restaurant of the butcher (株)銀閣寺大西'], origin: null,
      background: 'The restaurant of 銀閣寺大西, a Kyoto butcher (Kyoto Prefecture meat map).',
      philosophy: null,
      specialty: 'Murazawa beef; closing curry.',
      anecdotes: [
        { text: 'An October 2024 diner worked through yukhoe, salt-grilled tongue and three wagyu cuts and found the closing curry rich and hearty.', source: R + 'B493575904/' },
        { text: 'A May 2025 guest rated the meat sushi best but wished the staff would grill the meat.', source: R + 'B506799014/' },
      ],
      japanese_sources_summary: '食べログ: 御肉処 銀閣寺大にし、焼肉、中京区、寺町二条の南、京都市役所前駅から徒歩5分、火〜日 17:00〜22:00 (L.O. 21:00)、月曜と一部の火曜休み、コースは前日までの予約、カード可、電子マネー・QR 不可、38席 (カウンター8)、個室あり、禁煙。京都府の資料: (株)銀閣寺大西の精肉店の系列の店。口コミ (2024〜2026年、英語): Murazawa の牛肉、Kyotanba の牛肉、ユッケ、塩タン、肉寿司、クッパ、冷麺、締めのカレー。',
      confidence: 'medium', sources: [TB, WEB, 'https://www.pref.kyoto.jp/chikusan/documents/map_english_eat_buy_230605.pdf', R + 'B493575904/', R + 'B506799014/', R + 'B511536966/', R + 'B517674524/', R + 'B522948109/', R + 'B523133741/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book courses the day before (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区寺町通二条下ル榎木町98-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.012837, 135.767340), moved 1m NNE to clear kyoto_teramachi_nishimura (5.1m); cross-checked: GSI 京都府京都市中京区榎木町98番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B493575904/'],
    price_note: 'No item prices in reviews; about ¥10,000–15,000 a head (2025–26 reviews).', last_checked: TODAY, items: [
      it('', '', 'Meat sushi', '', 'A la carte', 'ask', 'no', 'May 2025 review.', 'niku_sushi'),
      it('', '', 'Closing curry', '', 'Rice', 'no', 'no', '2024–26 reviews.', 'curry'),
    ] }, {
    cuisine: '精肉店の銀閣寺大西の和牛の焼肉: Murazawa 牛のランプとイチボ、Kyotanba の牛、ユッケ、塩タン (2024年10月)、厚切りタン、上ロース (2025年8月)、肉寿司、クッパ (2025年5月)、冷麺とビビンバ (2025年11月)、締めのカレー (2024〜26年)、10,000〜15,000円ほど',
    neighborhood: '寺町二条。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。塩タンや素焼きは合う可能性がある。たれ、冷麺、締めのカレーはふつう小麦入り (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉の店 (2024〜26年の口コミ)。',
    notes: '[焼肉・寺町二条] 京都の老舗の精肉店、銀閣寺大西の焼肉店。Murazawa 牛などの和牛、肉寿司、ユッケ、締めのカレーを、個室のある落ち着いた2階建てで。10,000〜15,000円ほど。',
  });
}

// ================================================================ 晩boo 東山三条本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000573/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://kyoto-bamboo.jp/';
  const D = day(['17:00', '23:00']); const SU = day(['16:00', '23:00']);
  put({
    id: 'kyoto_banboo_higashiyama_sanjo', name: '晩boo 東山三条本店 (Banboo)', category: 'OMNI',
    lat: 35.009401, lng: 135.778558, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The starter is a shabu-shabu pot in dashi with tororo kombu; sashimi and grilled dishes, fried horse mackerel (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and pork shabu-shabu, sashimi (2025–26 reviews).',
    hours_raw: 'Mon–Sat and holidays 17:00–23:00; Sun 16:00–23:00 (food L.O. 22:00, drinks 22:30); irregular closures (Tabelog). Starter charge ¥700 — a small shabu-shabu pot (Tabelog Japanese original 「お通し700円（税込）」; 2026 reviews). Cards; no e-money or QR (Tabelog). 32 seats with a tatami room at the back (Tabelog; August 2026 review). By Higashiyama Stn exit 2 on Sanjo-dori; moved next door from its old site (Tabelog; July 2025 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama-Sanjo — by Higashiyama Stn exit 2',
    cuisine: 'Seasonal izakaya: every table starts with a paper-pot shabu-shabu of sea bream, wakame and vegetables in dashi with tororo kombu, then shellfish, mushrooms or pork to add (2026); sashimi, grilled dishes, fried horse mackerel (2025–26); Thai shabu as a starter in winter (January 2026); chilled sake served in bamboo tubes (2025–26); about ¥4,000–8,000',
    website: WEB, gmaps: gm('晩boo 東山三条'), menu_url: null,
    notes: '[Izakaya · Higashiyama-Sanjo] A lively, often-full izakaya by Higashiyama Stn where every meal starts with a little shabu-shabu pot of seasonal fish, and sake comes in bamboo tubes; a handy stop after shows at ROHM Theatre. About ¥4,000–8,000.',
    chef_bio: { chef_name: null, roles: ['Operator: 株式会社晩boo (careermap)'], origin: null,
      background: 'The main shop of 株式会社晩boo, which also runs a shop at Kojinguchi (careermap). A diner returning after about ten years found it had moved next door (July 2025 review).',
      philosophy: 'Dishes change with the seasons (Tabelog shop text).',
      specialty: 'Shabu-shabu pot starter; sake in bamboo.',
      anecdotes: [
        { text: 'A July 2026 regular built the starter pot of sea bream into a full meal, adding shellfish, mushrooms and finally pork shabu-shabu.', source: R + 'B531758430/' },
        { text: 'A July 2026 group, usually here after shows at ROHM Theatre but often turned away, finally got a table for a birthday.', source: R + 'B532417571/' },
      ],
      japanese_sources_summary: '食べログ: 晩boo 東山三条本店、居酒屋・魚介料理・しゃぶしゃぶ、東山区東山三条東入ル南側、地下鉄東山駅2番出口すぐ、月〜土・祝日 17:00〜23:00、日 16:00〜23:00、不定休、お通し700円、カード可、電子マネー・QR 不可、32席、季節で変わる料理。キャリアマップ: 株式会社晩boo、東山三条店と荒神口店。口コミ (2025〜2026年、英語): お通しは紙鍋の鯛しゃぶ (とろろ昆布と出汁)、竹筒の冷酒、刺身、焼き物、アジフライ、奥の座敷。',
      confidence: 'medium', sources: [TB, WEB, 'https://www.careermap.jp/corporations/86692', R + 'B509979456/', R + 'B520538364/', R + 'B521785738/', R + 'B525097103/', R + 'B531426579/', R + 'B531758430/', R + 'B532417571/', R + 'B533843802/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Often fully booked; book ahead (July 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区東山三条東入ル南側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009388, 135.778542), moved 2m NE to clear kyoto_le_bac_a_sable (4.6m); the address has no lot number, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B531758430/'],
    price_note: 'Starter ¥700 (Tabelog); no other prices in reviews.', last_checked: TODAY, items: [
      it('', '', 'Shabu-shabu pot starter (seasonal fish)', '¥700', 'Starter', 'ask', 'no', 'Tabelog; 2026 reviews.', 'otoshi'),
      it('', '', 'Pork shabu-shabu (add-on)', '', 'Shabu-shabu', 'ask', 'no', 'July 2026 review.', 'buta_shabu'),
    ] }, {
    cuisine: '季節の居酒屋: お通しは鯛、わかめ、野菜を出汁ととろろ昆布でしゃぶしゃぶする紙鍋、貝やきのこ、豚を追加 (2026年)、刺身、焼き物、アジフライ (2025〜26年)、冬はタイ風のしゃぶしゃぶのお通し (2026年1月)、竹筒の冷酒 (2025〜26年)、4,000〜8,000円ほど',
    neighborhood: '東山三条。東山駅2番出口すぐ',
    gf_detail: '要確認。お通しは出汁ととろろ昆布のしゃぶしゃぶの鍋。刺身、焼き物、アジフライ (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚と豚のしゃぶしゃぶ、刺身 (2025〜26年の口コミ)。',
    notes: '[居酒屋・東山三条] 東山駅そばのいつも満席のにぎやかな居酒屋。食事は季節の魚の小さなしゃぶしゃぶの鍋から始まり、日本酒は竹筒で。ROHM Theatre の帰りにも。4,000〜8,000円ほど。',
  });
}

// ================================================================ BUNNY b.
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26035769/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_bunny_b_sakaimachi', name: 'BUNNY b.', category: 'OMNI',
    lat: 35.012307, lng: 135.76326, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sandwiches, burgers and hot dogs on bread (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and fish-fry sandwiches, burgers and hot dogs (2025–26 reviews).',
    hours_raw: 'From 9:45; closed Mondays, Tuesdays, Wednesdays and Sundays — so open Thursday to Saturday; closing time not given; hours may change (Tabelog). The former evening bar hours have ended (July 2025 review). Takeaway; a few seats (Tabelog; June 2026 review). PayPay and cards; no e-money (Tabelog). On Sakaimachi north of Oshikoji, about 370 m from Karasuma-Oike (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-Oshikoji — about 370 m from Karasuma-Oike Stn',
    cuisine: 'Sandwiches and burgers: choose two sandwiches from the basket with a drink from ¥1,100, such as chicken with lettuce or fish fry (September 2025); large burgers and hot dogs (2025–26); hand-dripped coffee (September 2025)',
    website: null, gmaps: gm('BUNNY b. 京都 堺町'), menu_url: null,
    notes: '[Sandwiches & burgers · Sakaimachi] A tiny Tiffany-blue shop run by two sisters near Karasuma-Oike: a basket of sandwiches, big burgers and hand-dripped coffee, to eat in or take away, Thursday to Saturday. About ¥1,100–2,000.',
    chef_bio: { chef_name: null, roles: ['Two sisters (unnamed)'], origin: null,
      background: 'Opened 18 March 2021 (Tabelog). Run by two sisters (July 2025 review) — "two beautiful sisters", in that reviewer\'s words; two women run it (September 2025 review). Shop T-shirts and goods are sold; updates on Instagram (July 2025 review).',
      philosophy: null,
      specialty: 'Basket sandwiches; burgers.',
      anecdotes: [
        { text: 'A July 2025 fan, first here after a Kitri concert in 2022, had a bar in Tokyo name a cocktail "BUNNY b." after the shop.', source: R + 'B509728971/' },
        { text: 'A June 2026 visitor in the area for medical appointments got the last seat for a big burger as others took food away.', source: R + 'B532201079/' },
      ],
      japanese_sources_summary: '食べログ: BUNNY b.、ハンバーガー・サンドイッチ、中京区堺町通押小路上がる竹屋町162、9:45から、月・火・水・日曜休み、テイクアウト可、PayPay 可、2021年3月18日オープン。口コミ (2025〜2026年、英語): 姉妹で営む、ティファニーブルーの店、かごから選ぶサンドイッチ2つと飲み物1,100円から、大きなハンバーガー、ホットドッグ、一杯ずつ淹れるコーヒー、夜のバーの営業は終了。',
      confidence: 'low', sources: [TB, R + 'B509728971/', R + 'B513482842/', R + 'B532201079/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small shop; takeaway available.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通押小路上がる竹屋町162',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated September 2025 and June 2026.' },
    pin_source: `Tabelog ${TB} (35.012307, 135.763260); cross-checked: GSI 京都府京都市中京区竹屋町162番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513482842/'],
    price_note: 'Price from a September 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Two sandwiches and a drink', 'from ¥1,100', 'Sets', 'no', 'no', 'September 2025 review.', 'sandwich_set'),
      it('', '', 'Burger', '', 'Burgers', 'no', 'no', 'June 2026 review.', 'burger'),
    ] }, {
    cuisine: 'サンドイッチとハンバーガー: かごから選ぶサンドイッチ2つと飲み物で1,100円から、レタスとチキン、魚のフライなど (2025年9月)、大きなハンバーガーとホットドッグ (2025〜26年)、一杯ずつ淹れるコーヒー (2025年9月)',
    neighborhood: '堺町押小路。烏丸御池駅から370mほど',
    gf_detail: 'グルテンフリー不可。パンのサンドイッチ、ハンバーガー、ホットドッグ (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。チキンや魚のフライのサンドイッチ、ハンバーガー、ホットドッグ (2025〜26年の口コミ)。',
    notes: '[サンドイッチとバーガー・堺町] 烏丸御池の近くの姉妹が営むティファニーブルーの小さな店。かごのサンドイッチ、大きなハンバーガー、一杯ずつ淹れるコーヒーを店内でも持ち帰りでも。木〜土曜。1,100〜2,000円ほど。',
  });
}

// ================================================================ 京都焼肉 牛楽亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002583/'; const R = TB + 'dtlrvwlst/';
  const TC = 'https://www.tablecheck.com/gyurakutei';
  const D = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_gyurakutei', name: '京都焼肉 牛楽亭 (Gyurakutei)', category: 'OMNI',
    lat: 35.003884, lng: 135.756753, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cuts can be ordered with salt or sauce (April 2026 review); the sauces usually contain soy and wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Oita wagyu yakiniku restaurant (2025–26 reviews).',
    hours_raw: 'Daily 17:00–23:00 (food L.O. 22:00, drinks 22:30); usually closed the third Wednesday; from 15:00 in November 2026 (17:00 on 29 November); closed 31 December–2 January (Tabelog). Two-hour seat limit (Tabelog). No service charge (Tabelog Japanese original 「無し」). Cards and QR; no e-money (Tabelog). 64 seats, all in private rooms (Tabelog). By Shijo-Shinmachi, 3 min from Karasuma or Shijo (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Shinmachi — 3 min from Karasuma Stn',
    cuisine: 'Yakiniku of whole Oita wagyu bought by the head, grade A4 and up (TableCheck): wagyu tongue platter, harami, hon-misuji, makgeolli in a pot (December 2025); premium loin, kalbi, tongue, a red-meat platter (2025); yukhoe (July 2025); a cheap all-you-can-drink (March 2025); about ¥6,000–10,000',
    website: TC, gmaps: gm('京都焼肉 牛楽亭 四条'), menu_url: null,
    notes: '[Yakiniku · Shijo-Shinmachi] A busy, all-private-room yakiniku of whole Oita wagyu near Shijo-Karasuma, popular with regulars of 20 years and visitors alike: tongue platters, harami, misuji and a well-priced drinks plan. About ¥6,000–10,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Buys whole Oita wagyu and serves only cuts graded 4 and up (TableCheck; March 2025 review). A December 2025 regular has been coming for 20 years; celebrity autographs on the walls (May 2025 review).',
      philosophy: null,
      specialty: 'Oita wagyu tongue and harami.',
      anecdotes: [
        { text: 'A December 2025 regular of 20 years grilled four kinds of tongue in turn with onion sauce and declared the harami best.', source: R + 'B422859900/' },
        { text: 'An April 2026 couple, for whom it is a special place, found dishes out of order on a night busy with visitors.', source: R + 'B509020639/' },
      ],
      japanese_sources_summary: '食べログ: 京都焼肉 牛楽亭、焼肉・ホルモン・居酒屋、下京区、四条新町の東、阪急烏丸駅・地下鉄四条駅から徒歩3分、毎日 17:00〜23:00、第3水曜はほぼ休み、2時間制、サービス料なし、カード・QR 可、電子マネー不可、64席、全席個室。TableCheck: 大分和牛を一頭買い、4等級以上。口コミ (2025〜2026年、英語): タンの盛り合わせ、ハラミ、本ミスジ、マッコリ、プレミアムロース、ユッケ、20年通う常連。',
      confidence: 'medium', sources: [TB, TC, R + 'B422859900/', R + 'B502398895/', R + 'B504093146/', R + 'B506869201/', R + 'B509020639/', R + 'B510799828/', R + 'B523412450/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests (2025–26 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条新町東入る月鉾町37-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (November 2026 notice) and TableCheck; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.003884, 135.756753); cross-checked: GSI 京都府京都市下京区月鉾町37番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B422859900/', TC],
    price_note: 'No item prices in reviews; TableCheck gives about ¥6,000 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Wagyu tongue platter', '', 'Yakiniku', 'ask', 'no', 'December 2025 review.', 'tongue'),
      it('', '', 'Wagyu harami', '', 'Yakiniku', 'ask', 'no', 'December 2025 review.', 'harami'),
    ] }, {
    cuisine: '一頭買いの大分和牛、4等級以上の焼肉 (TableCheck): 和牛のタンの盛り合わせ、ハラミ、本ミスジ、壺のマッコリ (2025年12月)、上ロース、カルビ、タン、赤身の盛り合わせ (2025年)、ユッケ (2025年7月)、手ごろな飲み放題 (2025年3月)、6,000〜10,000円ほど',
    neighborhood: '四条新町。烏丸駅から徒歩3分',
    gf_detail: '要確認。塩かたれを選べる (2026年4月の口コミ)。たれはふつう醤油と小麦入り。',
    vegan_detail: 'ヴィーガン不可。大分和牛の焼肉の店 (2025〜26年の口コミ)。',
    notes: '[焼肉・四条新町] 四条烏丸の近くの全席個室のにぎやかな焼肉店。一頭買いの大分和牛を20年通う常連も旅行者も。タンの盛り合わせ、ハラミ、ミスジ、手ごろな飲み放題。6,000〜10,000円ほど。',
  });
}

// ================================================================ Brisa
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26032373/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '24:00']);
  put({
    id: 'kyoto_brisa_teramachi', name: 'Brisa', category: 'OMNI',
    lat: 35.013458, lng: 135.766987, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Paella is rice-based, and salads and ajillo may suit (2025–26 reviews); ask about bread and stock.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables are well cooked (February 2026 review), but the paella stock and most tapas use seafood or meat.',
    hours_raw: 'Tue–Sun 18:00–24:00; closed Mondays and the third Sunday (Tabelog). Paella needs booking the day before; parties of 5 or more by phone only (Tabelog). Cover ¥200 a person (Tabelog Japanese original 「おつき出しとして 200円/人」). Cards and PayPay; no e-money (Tabelog). 12 seats: 4 at the counter and 8 at tables; non-smoking (Tabelog). On Teramachi south of Nijo, 8 min from Kyoto Shiyakusho-mae (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi-Nijo — 8 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Spanish bar cooking: paella with a deep broth (booked the day before), flounder salad, shirasu ajillo (February 2026); several Spanish wines by the glass, well explained (March 2025); about ¥5,000–6,000',
    website: null, gmaps: gm('Brisa 寺町二条 スペイン'), menu_url: null,
    notes: '[Spanish bar · Teramachi-Nijo] A cosy twelve-seat Spanish bar in a quiet Teramachi street, run single-handed by the owner: book the paella a day ahead, add ajillo and wine by the glass. About ¥5,000–6,000.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The owner runs everything alone (May 2025 review).',
      philosophy: null,
      specialty: 'Paella.',
      anecdotes: [
        { text: 'A March 2025 guest, sent by a food-loving friend, was told to book the paella and found the wines well explained.', source: R + 'B504058468/' },
        { text: 'A February 2026 diner had the room alone at 6:30 pm for flounder salad, shirasu ajillo and a paella with a delicious broth.', source: R + 'B523519839/' },
      ],
      japanese_sources_summary: '食べログ: Brisa、スペイン料理・バル、中京区寺町二条下る妙満寺前町446 若林ビル1F、京都市役所前駅から徒歩8分、火〜日 18:00〜24:00、月曜と第3日曜休み、パエリアは前日までの予約、5名以上は電話のみ、お通し200円、カード・PayPay 可、12席 (カウンター4)、禁煙。口コミ (2025〜2026年、英語): 店主が一人で営む (2025年5月)、パエリア、ヒラメのサラダ、しらすのアヒージョ、グラスワイン。',
      confidence: 'medium', sources: [TB, R + 'B504058468/', R + 'B507099667/', R + 'B523519839/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book paella a day ahead (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区寺町二条下る妙満寺前町446 若林ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.013441, 135.767038), moved 5m WNW to clear kyoto_calvador_bar (2.0m); cross-checked: GSI 京都府京都市中京区妙満寺前町446番地 (lot) 62m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523519839/'],
    price_note: 'No item prices in reviews; ¥200 cover.', last_checked: TODAY, items: [
      it('', '', 'Paella (book the day before)', '', 'Paella', 'ask', 'ask', 'Tabelog; February 2026 review.', 'paella'),
      it('', '', 'Shirasu ajillo', '', 'Tapas', 'ask', 'no', 'February 2026 review.', 'ajillo'),
    ] }, {
    cuisine: 'スペインのバルの料理: 出汁のおいしいパエリア (前日までに予約)、ヒラメのサラダ、しらすのアヒージョ (2026年2月)、説明の丁寧な数種のスペインのグラスワイン (2025年3月)、5,000〜6,000円ほど',
    neighborhood: '寺町二条。京都市役所前駅から徒歩8分',
    gf_detail: '要確認。パエリアは米、サラダやアヒージョは合う可能性がある (2025〜26年の口コミ)。パンと出汁は要確認。',
    vegan_detail: '要確認。野菜の火入れがいい (2026年2月の口コミ) が、パエリアの出汁とほとんどのタパスは魚介か肉。',
    notes: '[スペインバル・寺町二条] 静かな寺町の店主が一人で営む12席の居心地のいいスペインバル。パエリアは前日までに予約、アヒージョとグラスワインを。5,000〜6,000円ほど。',
  });
}

save();
