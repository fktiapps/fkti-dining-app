// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 76.
// (The same batch also wrote handoff/retail-audit.md — an audit only; no data changed for it.)
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + ポワソンドール Poisson d'Or (goldfish-table French café with "dollhouse" lunches; since October 2024)
//   + BeerMan (craft-beer bar and banquet rooms near Shijo-Karasuma; since 2018)
//   + セレクテッドラポー Selected Rapport (members-style live-music bar with singers and a band, under 新門荘)
//   - セサモ Sesamo — no 2025–26 review (latest 2019)
//   + 炭火倶楽部 ゆう Sumibi Club Yuu (binchotan yakitori of Kyoto red jidori, late, in Gion; since 2023)
//   Same-name counts first (data and queue-status.jsonl): none for ポワソンドール (Petit Poisson in data is a different shop),
//   BeerMan, ラポー, セサモ or ゆう. None drafted is in data/kyoto.json by name or address (hidden records included).
//   Big-chain hotel rule (Greg 11-08): none of these is in a chain hotel; Selected Rapport is in the basement of 新門荘,
//   an independent ryokan building.
//   Service charges: none of the four has a Tabelog service-charge section; Selected Rapport runs a 2-hour, 2-drink system
//   (Tabelog remarks).
//   Pins (checked against main, hidden records included): Poisson d'Or's Tabelog point is 1.4 m from
//   kyoto_sauna_izakaya_sanjo (same lot 534-33) and 4.6 m from kyoto_the_cellar_kyoto → moved 5 m east-north-east
//   (6.3 m clearance). Others ≥ 7.4 m; all four match a GSI lot within 39 m.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-76');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001485', 'no 2025–26 review (the latest fetched review is from November 2019)');

// ================================================================ ポワソンドール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042027/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '19:00']);
  put({
    id: 'kyoto_poisson_dor_sanjo', name: 'ポワソンドール (Poisson d\'Or)', category: 'OMNI',
    lat: 35.009378, lng: 135.76948, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Burgers, sandwiches, scones, omurice and cakes; no gluten-free options are reported (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, rolled tonkatsu, puddings and cheesecakes (2025–26 reviews).',
    hours_raw: 'Mon, Thu–Sun, holidays and the days around them 11:00–19:00 (food L.O. 18:00, drinks 18:30); closed Tuesdays, Wednesdays and over New Year (Tabelog). A September 2026 review mentions an evening course of Kyoto–French food, which Tabelog\'s hours do not cover. Bookings taken; groups of 10 or more by phone; anniversary plates two days ahead (Tabelog). Cards, e-money and QR (Tabelog). 31 seats: 10 at the counter, 21 at tables; non-smoking (Tabelog). 3rd floor of the エアポートビル north of Sanjo on Kawaramachi, 5 min from Kyoto Shiyakusho-mae (Tabelog).',
    hours: { 0: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi, north of Sanjo — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'French café with goldfish swimming in table aquariums: the "dollhouse" lunch — a miniature house, in a colour you choose, opening on small burgers, sandwiches, potato salad and sweets, ¥2,500 (¥200 off with a drink) (September and October 2026); hamburg steak with demi-glace and a meringue fried egg (July 2026), omurice, rolled tonkatsu; hojicha parfait, pudding plate with scone, Basque and sake-lees cheesecakes, tiramisu chiffon, chocolate terrine; a ¥900 drink bar of coffee, juices, teas and herbal teas, 16 kinds of tea leaves (2025–26 reviews)',
    website: null, gmaps: gm('ポワソンドール 京都 河原町'), menu_url: null,
    notes: '[Café · Kawaramachi-Sanjo] A third-floor café where goldfish swim in the table tops, serving pretty "dollhouse" lunch sets, hamburg steak and omurice, parfaits and cheesecakes, with a cheap drink bar. About ¥1,500–3,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 23 October 2024 (Tabelog); formerly the "Kyoto Goldfish Café Pukupuku no Mori" (November 2025 review). Described as supervised by a renowned French chef (2025–26 reviews).',
      philosophy: null,
      specialty: 'Dollhouse lunch; goldfish tables.',
      anecdotes: [
        { text: 'A September 2026 holiday diner booked ahead for the ¥2,500 dollhouse, chose its colour, and found the buns fluffy and the pudding good — more than just cute.', source: R + 'B535126059/' },
        { text: 'A July 2026 business traveller dining alone found the goldfish table kept any awkwardness away, and the burgers and sandwiches came warm.', source: R + 'B532818935/' },
        { text: 'An August 2026 pair found the taste and price average but expected it to be a big hit with women.', source: R + 'B534681274/' },
      ],
      japanese_sources_summary: '食べログ: ポワソンドール、フレンチ・カフェ、中京区河原町通三条上る恵比須町534-33 エアポートビル3F、京都市役所前駅から徒歩5分、月・木〜日・祝日・祝日の前日・祝日の翌日 11:00〜19:00 (料理 L.O. 18:00、ドリンク L.O. 18:30)、火・水曜と年末年始休み、予約可 (10名以上は電話、記念日プレートは2日前まで)、カード・電子マネー・QR 可、31席 (カウンター10、テーブル21)、禁煙、2024年10月23日オープン。口コミ (2025〜2026年、英語): テーブルの水槽に金魚、色を選べるドールハウスのランチ2,500円 (飲み物付きで200円引き)、デミグラスのハンバーグ、オムライス、巻きとんかつ、ほうじ茶パフェ、プリン、バスクチーズケーキ、酒粕のチーズケーキ、900円のドリンクバー、16種類の茶葉、有名なフランス料理のシェフ監修、旧名は Kyoto Goldfish Café Pukupuku no Mori。',
      confidence: 'medium', sources: [TB, R + 'B517236870/', R + 'B530241896/', R + 'B530727718/', R + 'B531430706/', R + 'B532818935/', R + 'B534247218/', R + 'B534681274/', R + 'B535036793/', R + 'B535126059/', R + 'B537647918/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book at weekends (September 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条上る恵比須町534-33 エアポートビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009361, 135.769429), 1.4 m from kyoto_sauna_izakaya_sanjo (same lot) and 4.6 m from kyoto_the_cellar_kyoto — moved 5 m east-north-east to (35.009378, 135.769480), 6.3 m clearance; cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535126059/', R + 'B517236870/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dollhouse lunch set', '¥2,500', 'Lunch', 'no', 'no', 'September 2026 review; ¥200 off with a drink.', 'dollhouse'),
      it('', '', 'Drink bar', '¥900', 'Drinks', 'ask', 'ask', 'September 2026 review.', 'drink_bar'),
      it('', '', 'Hojicha parfait', '', 'Sweets', 'ask', 'no', 'June and September 2026 reviews.', 'parfait'),
      it('', '', 'Hamburg steak with demi-glace', '', 'Lunch', 'ask', 'no', 'July 2026 review.', 'hamburg'),
    ] }, {
    cuisine: 'テーブルの水槽を金魚が泳ぐフレンチカフェ: 好きな色を選べるミニチュアの家にミニバーガー、サンドイッチ、ポテトサラダ、スイーツが入ったドールハウスのランチ2,500円 (飲み物付きで200円引き、2026年9月・10月)、デミグラスとメレンゲの目玉焼きのハンバーグ (2026年7月)、オムライス、巻きとんかつ、ほうじ茶パフェ、スコーン付きのプリンプレート、バスクと酒粕のチーズケーキ、ティラミス風シフォン、ショコラテリーヌ、コーヒー・ジュース・紅茶・ハーブティーの900円のドリンクバー、16種類の茶葉 (2025〜26年の口コミ)',
    neighborhood: '河原町、三条の北。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。バーガー、サンドイッチ、スコーン、オムライス、ケーキ。グルテンフリーの選択肢の記載はない (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ハンバーグ、巻きとんかつ、プリン、チーズケーキ (2025〜26年の口コミ)。',
    notes: '[カフェ・河原町三条] テーブルの中を金魚が泳ぐビル3階のカフェ。かわいい「ドールハウス」のランチ、ハンバーグやオムライス、パフェやチーズケーキ、安いドリンクバー。1,500〜3,000円ほど。',
  });
}

// ================================================================ BeerMan
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030735/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://beerman.gorp.jp';
  const D = day(['17:00', '24:00']);
  put({
    id: 'kyoto_beerman_shijo_karasuma', name: 'BeerMan', category: 'OMNI',
    lat: 35.005215, lng: 135.761996, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a beer bar; dishes include fried chicken and other batter (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: jerk chicken, roast pork, duck ham, steak (2024–26 reviews).',
    hours_raw: 'Mon–Sat 17:00–24:00 (L.O. 23:30); irregular closures; Sunday hours are not given (Tabelog). Bookings taken; groups of 20 and private hire (2025–26 reviews). Cards; no e-money (Tabelog). 34 seats, a private room for 4 and a semi-private banquet room; smoking allowed (Tabelog; September 2025 review). 2nd floor of フォーラム四条烏丸, set back from the road, 5 min from Karasuma exit 21 (Tabelog; 2022 and 2025 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, by Nishiki Market — 5 min from Karasuma Stn',
    cuisine: 'Craft-beer bar and izakaya: four draft beers and over 30 bottled beers from Belgium, Germany and the UK plus guest taps (Tabelog); Yona Yona Ale, Punk IPA, Delirium, Hoegaarden Rosée; all-you-can-drink courses ¥5,000–5,500 with three beers included (2024 and November 2026); jerk chicken, bibimbap, ajillo, fried steamed chicken, lemon-marinated scallops, herb-crusted sawara, wagyu steak, duck-ham salad, roast pork (2024–26 reviews)',
    website: WEB, gmaps: gm('BeerMan 京都 四条烏丸'), menu_url: null,
    notes: '[Craft beer · Shijo-Karasuma] A spacious second-floor beer bar by Nishiki Market with four drafts, thirty-odd European bottles and rooms for work parties; all-you-can-drink courses include craft beer. About ¥3,000–6,000.',
    chef_bio: { chef_name: null, roles: ['Manager (unnamed)'], origin: null,
      background: 'Opened 26 February 2018 (Tabelog). A manager passionate about Belgian and German beer who explains the differences (2021–2022 reviews).',
      philosophy: null,
      specialty: 'Craft beer with izakaya plates.',
      anecdotes: [
        { text: 'A November 2026 group of twenty booked the ¥5,500 all-you-can-drink course, with a craft-beer coupon for the toast, and liked the jerk chicken and bibimbap.', source: R + 'B488736345/' },
        { text: 'A March 2026 second-stop visitor booked through Tabelog at the last minute and poured a Delirium first tasted in Belgium.', source: R + 'B524393733/' },
        { text: 'A June 2026 group took a five-beer course in a private room, with DAY DREAM and THE STONE WALL on the guest taps.', source: R + 'B530283552/' },
      ],
      japanese_sources_summary: '食べログ: BeerMan、ダイニングバー・ビアバー・居酒屋、中京区西魚屋町607 フォーラム四条烏丸2F、阪急烏丸駅21番出口から徒歩5分、月〜土 17:00〜24:00 (L.O. 23:30)、不定休、カード可、電子マネー不可、34席、4人用の個室、喫煙可、2018年2月26日オープン、生ビール4種と30種以上の海外のクラフトビール (紹介文、英訳)。口コミ (2021〜2026年、英語): ベルギーやドイツのビールに詳しい店長、Yona Yona Ale、Punk IPA、Delirium、5,000〜5,500円の飲み放題コース、ジャークチキン、ビビンバ、アヒージョ、和牛ステーキ、鴨のハムのサラダ、半個室の宴会スペース。',
      confidence: 'medium', sources: [TB, WEB, R + 'B444115747/', R + 'B447694033/', R + 'B475149641/', R + 'B488736345/', R + 'B492218238/', R + 'B513036408/', R + 'B524393733/', R + 'B529405315/', R + 'B530283552/', R + 'B536898050/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bar with banquet rooms; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西魚屋町607 フォーラム四条烏丸 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own Gurunavi site; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005215, 135.761996); cross-checked: GSI 京都府京都市中京区西魚屋町607番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B488736345/', TB],
    price_note: 'Course prices from 2024 and November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink course', '¥5,000–5,500', 'Courses', 'no', 'no', 'July 2024 and November 2026 reviews.', 'nomihodai'),
      it('', '', 'Jerk chicken', '', 'Plates', 'ask', 'no', 'November 2026 review.', 'jerk'),
      it('', '', 'Draft craft beer', '', 'Beer', 'no', 'ask', 'Tabelog.', 'draft'),
    ] }, {
    cuisine: 'クラフトビールのバルと居酒屋: 生ビール4種とベルギー・ドイツ・イギリスの30種以上の瓶ビール、ゲストタップ (食べログ)、Yona Yona Ale、Punk IPA、Delirium、Hoegaarden Rosée、ビール3種込みの飲み放題コース5,000〜5,500円 (2024年、2026年11月)、ジャークチキン、ビビンバ、アヒージョ、蒸し鶏の揚げ物、帆立のレモンマリネ、鰆のハーブ焼き、和牛ステーキ、鴨のハムのサラダ、ローストポーク (2024〜26年の口コミ)',
    neighborhood: '四条烏丸、錦市場の近く。烏丸駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。ビアバーで、揚げ物なども多い (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ジャークチキン、ローストポーク、鴨のハム、ステーキ (2024〜26年の口コミ)。',
    notes: '[クラフトビール・四条烏丸] 錦市場近くのビル2階の広いビアバー。生4種、30種以上のヨーロッパの瓶ビール、職場の宴会向けの部屋も。飲み放題のコースにクラフトビールも入る。3,000〜6,000円ほど。',
  });
}

// ================================================================ セレクテッドラポー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013563/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.kyoto-repos.com';
  const D = day(['20:30', '27:00']);
  put({
    id: 'kyoto_selected_rapport_gion', name: 'セレクテッドラポー (Selected Rapport)', category: 'OMNI',
    lat: 35.006503, lng: 135.775124, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mainly drinks; an egg sandwich is the only food mentioned (April 2025 review).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cocktails and bottles; the only food mentioned is an egg sandwich (2025 reviews).',
    hours_raw: 'Mon–Sat 20:30–03:00; closed Sundays and holidays; hours may change (Tabelog). Members-style: first-time visitors are asked to phone ahead and mention finding the bar through its website (Tabelog). A 2-hour, 2-drink system (Tabelog). Cards and e-money; no QR (Tabelog). 80 seats with sofas and a dance floor; live music; smoking allowed (Tabelog; 2025–26 reviews). In the basement of 新門荘, 8 min from Gion-Shijo (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama, Nakanocho north of Shijo — 8 min from Gion-Shijo Stn',
    cuisine: 'Live-music bar: non-stop sets by professional singers and a band, taking requests, with sofa seats and a dance floor; cocktails such as gin and tonic and gin rickey, bottles, and a filling egg sandwich (2025–26 reviews); about ¥10,000–20,000 a head (2025–26 reviews)',
    website: WEB, gmaps: gm('セレクテッドラポー 京都'), menu_url: null,
    notes: '[Live-music bar · Higashiyama] A big basement lounge with sofas, a dance floor, and professional singers and a band playing requests until 3 am. Members-style: call ahead on a first visit. About ¥10,000–20,000.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A members-style bar asking first-timers to call ahead (Tabelog). A March 2025 guest praised the owner\'s smile; a September 2026 guest mentions the young master.',
      philosophy: null,
      specialty: 'Live singers and band; requests.',
      anecdotes: [
        { text: 'After a Minami-za play and dinner nearby in September 2026, a guest was introduced by the restaurant\'s owner, requested Brenda Lee and the Carpenters, and danced when a customer took the stage.', source: R + 'B536216729/' },
        { text: 'An April 2025 guest sang along with the live band from the sofas over a gin rickey and an egg sandwich.', source: R + 'B505755036/' },
        { text: 'A March 2025 guest found the singers\' energy overwhelming and could have stayed for hours.', source: R + 'B503919892/' },
      ],
      japanese_sources_summary: '食べログ: セレクテッドラポー、バー・ヨーロッパ料理、東山区中之町243 新門荘B1F、京阪祇園四条駅から徒歩約8分、月〜土 20:30〜翌3:00、日曜・祝日休み (変更の可能性あり)、会員制のため初めての人は電話でウェブサイトを見たと伝える、2時間2ドリンク制、カード・電子マネー可、QR 不可、80席、喫煙可、生演奏。口コミ (2025〜2026年、英語): プロの歌手とバンドの生演奏、リクエスト、ソファ席、ダンスフロア、ジントニック、ジンリッキー、卵サンド、1人1万〜2万円。',
      confidence: 'low', sources: [TB, WEB, R + 'B503919892/', R + 'B505755036/', R + 'B536216729/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Call ahead on a first visit (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区中之町243 新門荘 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006503, 135.775124); cross-checked: GSI 京都府京都市東山区中之町243番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B505755036/'],
    price_note: 'No item prices found; reviews give ¥10,000–20,000 a head; 2-hour, 2-drink system (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Cocktail (gin and tonic, gin rickey)', '', 'Drinks', 'ask', 'ask', 'April 2025 review.', 'cocktail'),
      it('', '', 'Egg sandwich', '', 'Food', 'no', 'no', 'April 2025 review.', 'egg_sando'),
    ] }, {
    cuisine: '生演奏のバー: プロの歌手とバンドが休みなく演奏しリクエストにも応える、ソファ席とダンスフロア、ジントニックやジンリッキーなどのカクテル、ボトル、ボリュームのある卵サンド (2025〜26年の口コミ)、1人1万〜2万円ほど (2025〜26年の口コミ)',
    neighborhood: '東山、中之町。祇園四条駅から徒歩8分',
    gf_detail: '要確認。飲み物が中心で、料理は卵サンドの記載のみ (2025年4月の口コミ)。',
    vegan_detail: '要確認。カクテルとボトル。料理は卵サンドの記載のみ (2025年の口コミ)。',
    notes: '[生演奏のバー・東山] ソファとダンスフロアのある地下の大きなラウンジ。プロの歌手とバンドがリクエストに応えて深夜3時まで。会員制のため初回は電話を。1万〜2万円ほど。',
  });
}

// ================================================================ 炭火倶楽部 ゆう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039327/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '26:00']);
  put({
    id: 'kyoto_sumibi_club_yuu_gion', name: '炭火倶楽部 ゆう (Sumibi Club Yuu)', category: 'OMNI',
    lat: 35.004582, lng: 135.776028, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori seasoned simply with salt (February 2025), but the grilled toast and some sauces are not (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken yakitori, chicken sashimi, seafood (2025–26 reviews).',
    hours_raw: 'Mon–Sat 18:00–02:00; closed Sundays and holidays (Tabelog). Bookings taken, also through Tabelog (Tabelog; July 2026 review). Cards; no e-money or QR (Tabelog). 14 seats: 6 at the counter, two tables of four; smoking allowed; wheelchair accessible (Tabelog). At the back of the オリエンタル会館 ground floor with no sign outside, on Tominaga-cho-dori in Gion, about 5 min from Gion-Shijo (Tabelog; 2025–26 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Tominaga-cho north of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Binchotan yakitori of Kyoto red jidori, seasoned with salt, in large pieces: gizzard, tenderloin, chicken breast with plum, tsukune (2025–26 reviews); vegetable skewers (April and June 2025); assorted sashimi and seafood (February 2025, June 2026); chicken sashimi (July 2026); charcoal-grilled toast to finish (2025–26 reviews); craft beer from Nishijin Brewery such as Muromachi Saison, red wine, sake (2025–26 reviews); ten skewers and three sides over ¥10,000 (August 2025)',
    website: null, gmaps: gm('炭火倶楽部 ゆう 祇園'), menu_url: null,
    notes: '[Yakitori · Gion] A hidden, signless yakitori counter at the back of a Gion building, grilling big pieces of Kyoto red jidori over binchotan with salt, plus good sashimi and a famous charcoal toast, until 2 am. Smoking allowed. About ¥8,000–14,000.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed)'], origin: null,
      background: 'Opened 26 January 2023 (Tabelog). The master chats with counter guests (April 2025 review); grills Kyoto red jidori over binchotan (August 2025, June 2026 reviews).',
      philosophy: 'Simple salt seasoning to let the chicken show (February 2025 review).',
      specialty: 'Kyoto red jidori yakitori; grilled toast.',
      anecdotes: [
        { text: 'A solo diner in February 2025, booking a same-day seat, struggled to find the signless door and then ate every skewer on the menu.', source: R + 'B500814468/' },
        { text: 'After a capsule-sauna session in July 2026, a guest was the first in at 7 pm, starting with chicken sashimi and ending on the grilled toast with red wine.', source: R + 'B531974544/' },
        { text: 'An August 2025 diner found the food excellent but over ¥10,000 for ten skewers and three sides — "Gion pricing".', source: R + 'B511876015/' },
      ],
      japanese_sources_summary: '食べログ: 炭火倶楽部 ゆう、居酒屋・魚介料理・焼き鳥、東山区祇園町北側347-36 オリエンタル会館1F、祇園四条駅から徒歩約5分、月〜土 18:00〜翌2:00、日曜・祝日休み、予約可、カード可、電子マネー・QR 不可、14席 (カウンター6、4人テーブル2)、喫煙可、車いす可、2023年1月26日オープン。口コミ (2025〜2026年、英語): 備長炭で焼く Kyoto Akajidori の大きな串、塩味、砂肝、ささみ、梅の胸肉、つくね、野菜の串、刺身の盛り合わせ、鶏の刺身、締めの炭火焼きトースト、Nishijin Brewery のクラフトビール、看板のない隠れ家、カウンターで大将と話す、串10本と3品で1万円超 (2025年8月)。',
      confidence: 'medium', sources: [TB, R + 'B464360143/', R + 'B500814468/', R + 'B501567784/', R + 'B511876015/', R + 'B512266538/', R + 'B515977960/', R + 'B530482911/', R + 'B531974544/', R + 'B534982617/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hidden counter; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-36 オリエンタル会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004582, 135.776028); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511876015/', R + 'B512266538/'],
    price_note: 'No item prices found; reviews give ¥8,000–15,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Yakitori of Kyoto red jidori', '', 'Yakitori', 'ask', 'no', '2025–26 reviews.', 'yakitori'),
      it('', '', 'Charcoal-grilled toast', '', 'To finish', 'no', 'no', 'April and August 2025, July 2026 reviews.', 'toast'),
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', 'February 2025 and June 2026 reviews.', 'sashimi'),
    ] }, {
    cuisine: 'Kyoto Akajidori を備長炭で塩焼きにした大きな串の焼き鳥: 砂肝、ささみ、梅の胸肉、つくね (2025〜26年の口コミ)、野菜の串 (2025年4月・6月)、刺身の盛り合わせと魚介 (2025年2月、2026年6月)、鶏の刺身 (2026年7月)、締めの炭火焼きトースト (2025〜26年の口コミ)、Nishijin Brewery のクラフトビール、赤ワイン、日本酒 (2025〜26年の口コミ)、串10本と3品で1万円超 (2025年8月)',
    neighborhood: '祇園、四条の北。祇園四条駅から徒歩5分',
    gf_detail: '要確認。焼き鳥は塩だけのシンプルな味付け (2025年2月) だが、トーストやたれは不可 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の焼き鳥、鶏の刺身、魚介 (2025〜26年の口コミ)。',
    notes: '[焼き鳥・祇園] 祇園のビルの奥、看板のない隠れ家の焼き鳥カウンター。Kyoto Akajidori を大ぶりに備長炭で塩焼きにし、刺身や名物の炭火トーストも、深夜2時まで。喫煙可。8,000〜14,000円ほど。',
  });
}

save();
