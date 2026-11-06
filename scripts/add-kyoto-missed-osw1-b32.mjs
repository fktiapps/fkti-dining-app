// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 32.
//   + ガーネッシュ Ganesh (European-style curry on Sanjo-Muromachi; the Takayama curry with meringue)
//   + ごはんとお酒 Jinsuke (couple-run counter on Sanjo-Muromachi, clam shabu-shabu courses and sake)
//   + Three HORSES KYOTO (all-day café by the Shirakawa in Okazaki)
//   + 酒ノみつぼし Sake no Mitsuboshi (busy izakaya near Shijo Karasuma; Atari Inc., group of four concepts)
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26024978, 26040572; from `next notable
//   200`: 26039288, 26043092. None is in data/kyoto.json by name (ガーネッシュ/Ganesh, Jinsuke, Three HORSES, みつぼし/
//   Mitsuboshi) or address (衣棚町59-2, 衣棚町45-2, 岡崎円勝寺町65-1, 高材木町227-2).
//   Same-name count (same brand or operator only): ガーネッシュ, Jinsuke — one shop each (official sites; Jinsuke's invoice
//   holder is 株式会社べっぴんや). Three HORSES — sister of cafe KaimanaLio in Kusatsu, Shiga (Kyotopi, October 2023).
//   酒ノみつぼし — 株式会社Atari runs four differently named Kyoto shops (酒呑気びんご, 六角ace, 酒ﾉみつぼし, ageru.; company
//   site); none is in data; drafted and flagged as a small local group.
//   Service charges, checked against Tabelog's Japanese original: ガーネッシュ テーブルチャージ ¥200 a head when booking;
//   Jinsuke お一人様1ドリンク; 酒ノみつぼし お通し代 ¥330. Three HORSES none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-32');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ガーネッシュ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26024978/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ganesh-kyoto.com/';
  const H = day(['11:30', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_ganesh_sanjo', name: 'ガーネッシュ (Ganesh)', category: 'OMNI',
    lat: 35.008545, lng: 135.757859, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a European-style curry sauce (roux not described) served with breaded katsu, menchi katsu, fried shrimp, croquettes and fried oysters (official site; 2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the single house curry sauce is not described, and the 2026 menu adds a pork curry; the shop takes “wagamama” special requests where it can (official site).',
    hours_raw: 'Lunch 11:30–14:00 (L.O. 14:00), dinner 18:00–21:00 (L.O. 20:30), Monday–Saturday, until sold out; closed Sundays and holidays (Tabelog). Reservations accepted, with a table charge of ¥200 a head and a ¥1,000 minimum per person (Tabelog, original ご予約に際しまして、テーブルチャージ料お一人様200円を頂戴しております。). Cards, e-money and PayPay (Tabelog). 12 counter seats; private hire up to 20; non-smoking; wheelchair accessible; take-out and delivery; children welcome, kids’ menu (Tabelog). Spices sold in 15 g packs, with an online shop (August 2025). On Sanjo-dori west of Muromachi, 2 min from Karasuma Oike Stn (Tabelog). Opened 22 December 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori west of Muromachi — 2 min from Karasuma Oike Stn',
    cuisine: 'European-style curry: one house sauce that tastes fruity and sweet at first, with the heat following after (official site) · Takayama curry, styled on a Gion Festival float, with a meringue of whipped egg white, the yolk, and fresh-fried tenderloin katsu or menchi katsu, ¥1,100 (2024–2026 reviews) · Select curry ¥850 with toppings such as tenderloin cutlet and shrimp fry (March 2026) · pork curry ¥850 (official site, May 2026) · mixed fry curry with white fish and crab-cream croquette (December 2024) · katsu curry, fried-oyster topping (January 2026) · extra spice ¥200 per 15 g; large rice free; rice from a contracted farm (March 2026) · pickled shallots and fukujinzuke (December 2024)',
    website: SITE, gmaps: gm('ガーネッシュ 京都 三条室町'), menu_url: SITE,
    notes: '[Curry · Sanjo-Muromachi, the meringue curry] A 12-seat counter for European-style curry near Karasuma Oike: one house sauce, sweet and fruity first with the heat arriving later, under fresh-fried katsu, shrimp or croquettes. The signature Takayama curry, styled on a Gion Festival float, is crowned with whipped egg-white meringue and a yolk (¥1,100). Curries from ¥850, large rice free, spices for sale. Lunch and dinner, closed Sundays.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'An August 2025 reviewer writes that the owner “apparently retired early from the police force to open this curry shop” and has a vibrant personality. The official site says the owner personally selects every ingredient. In January 2026 the shop’s connection with the Aomori team was told on NHK’s broadcast of the 44th National Women’s Ekiden in Kyoto (official site).',
      philosophy: 'A two-stage sauce, fruity and sweet first, then spicy; high hospitality and “wagamama” special orders where possible (official site).', specialty: 'Takayama curry; European-style curry.',
      anecdotes: [
        { text: 'A March 2026 diner added 15 g of extra spice for ¥200 and ended up sweating happily.', source: R + 'B524837550/' },
        { text: 'An August 2025 visitor came to buy spices when the usual shop was shut and stayed for lunch.', source: R + 'B511040046/' },
      ],
      japanese_sources_summary: '公式サイト: 欧風カレーハウス ガーネッシュ、三条通室町西入る、一口目はフルーティーで甘口、後から辛さが追いかける二段カレーソース、オーナー自ら食材を吟味、わがまま注文も可能な範囲で、2026年5月にポークカレー850円を発売、2026年1月の全国女子駅伝のNHK中継で青森チームとの話が放送。食べログ: カレー、中京区三条通室町西入衣棚町59-2、烏丸御池駅から徒歩2分、月〜土 11:30〜14:00、18:00〜21:00 (L.O.20:30)、売り切れ次第終了、日曜・祝日定休、予約時はテーブルチャージ1人200円・1人1,000円以上、カード・電子マネー・PayPay可、12席、禁煙、車椅子可、テイクアウト・デリバリー、子ども可、ベジタリアン対応、2014年12月22日オープン。口コミ (2024〜2026年、英語): メレンゲの「Takayama カレー」1,100円、セレクトカレー850円、辛さ追加200円、大盛無料、店主は警察を早期退職して開店したらしい、スパイスも販売。',
      confidence: 'medium', sources: [SITE, TB, R + 'B490651506/', R + 'B496885311/', R + 'B511040046/', R + 'B514692263/', R + 'B516686859/', R + 'B517015947/', R + 'B521730179/', R + 'B524837550/', R + 'B531999079/', R + 'B532868352/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter curry shop; pick a curry and toppings. ¥200 table charge only when booking ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通室町西入衣棚町59-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with June 2026 news; Tabelog reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.008545, 135.757859); cross-checked: GSI 京都府京都市中京区衣棚町59番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514692263/', R + 'B524837550/', SITE],
    price_note: 'Prices from 2024–2026 reviews and the official site’s May 2026 news.', last_checked: TODAY, items: [
      it('', '', 'Takayama curry (meringue, yolk, katsu)', '¥1,100', 'Curry', 'no', 'no', '2024–2025 reviews.', 'takayama_curry'),
      it('', '', 'Select curry (choose toppings)', '¥850', 'Curry', 'ask', 'ask', 'March 2026.', 'select_curry'),
      it('ポークカレー', '', 'Pork curry', '¥850', 'Curry', 'ask', 'no', 'Official site, May 2026.', 'pork_curry'),
      it('', '', 'Extra spice (15 g)', '¥200', 'Extras', '', '', 'March 2026.', 'extra_spice'),
    ] }, {
    cuisine: '欧風カレー。一口目はフルーティーで甘く、後から辛さが追いかけてくる一つのソース (公式サイト)・祇園祭の鉾をかたどった「Takayama カレー」。泡立てた卵白のメレンゲと卵黄、揚げたてのヒレカツやメンチカツで1,100円 (2024〜2026年の口コミ)・ヒレカツや海老フライなどを選ぶセレクトカレー850円 (2026年3月)・ポークカレー850円 (公式サイト、2026年5月)・白身魚フライと蟹クリームコロッケのミックスフライカレー (2024年12月)・カツカレー、牡蠣フライのトッピング (2026年1月)・辛さ追加15gで200円、大盛無料、契約農家の米 (2026年3月)・らっきょうと福神漬け (2024年12月)',
    neighborhood: '室町の西の三条通。烏丸御池駅から徒歩2分',
    gf_detail: 'グルテンフリーではない。欧風カレーのソース (ルーは書かれていない) にパン粉のカツ、メンチカツ、海老フライ、コロッケ、牡蠣フライ (公式サイト、2024〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアン対応とあるが、一つの店のカレーソースの中身は書かれておらず、2026年にはポークカレーも加わった。できる範囲で「わがまま注文」に応じるとのこと (公式サイト)。',
    notes: '[カレー・三条室町、メレンゲのカレー] 烏丸御池近くの12席のカウンターの欧風カレー屋。一つの店のソースは最初は甘くフルーティーで、後から辛さが来る。揚げたてのカツ、海老、コロッケをのせて。看板は祇園祭の鉾をかたどった「Takayama カレー」で、泡立てた卵白のメレンゲと卵黄がのる (1,100円)。カレーは850円から、大盛無料、スパイスも販売。昼と夜、日曜休み。',
  });
}

// ================================================================ ごはんとお酒 Jinsuke
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040572/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.beppinya.com';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_jinsuke_sanjo', name: 'ごはんとお酒 Jinsuke (Gohan to Osake Jinsuke)', category: 'OMNI',
    lat: 35.008479, lng: 135.757161, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase courses with sashimi, a fried dish, obanzai, clam cream croquette, kakiage, clam ajillo with focaccia, clam shabu-shabu finished with soba or zosui; tell the shop about foods you avoid when booking, as the official site asks (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built on fish, clams and beef, with bonito and clam dashi (official site; April 2026).',
    hours_raw: '17:00–23:00 (L.O. 22:30), Tuesday–Saturday and the day before a holiday; closed Sunday and Monday, with bookings on closed days by request (Tabelog). November 2026 closures: 3, 8, 9, 10, 16, 23, 29, 30 (official site). Reservations are for courses only; à la carte after 21:00 (official site; December 2025); a March 2026 walk-in was told only courses were available. Tell the shop about foods you avoid when booking; children’s meals arranged where possible (Tabelog; official site). One drink per person (Tabelog, original お一人様1ドリンクのオーダーをお願いします。). Courses allow 3 hours (official site). Cards, iD, QUICPay, PayPay (Tabelog). 16 seats: an L-shaped counter of about eight and two tables; a separate private room for 4–6, one group a day, booked by phone (Tabelog; official site; February–March 2026). Non-smoking; free Wi-Fi (Tabelog). On Sanjo-dori west of Muromachi, 4 min from Karasuma Oike Stn exit 6 (Tabelog; official site). Opened 14 February 2024 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-dori west of Muromachi — 4 min from Karasuma Oike Stn',
    cuisine: 'Daily omakase of seasonal vegetables and fresh fish, gentle on the stomach, with about ten sakes always on (official site) · omakase seven dishes ¥5,000: otoshi, sashimi, a fried dish, obanzai platter, a seasonal dish, clam shabu-shabu, the day’s finish (zosui or noodles); five dishes ¥3,850 (official site) · clam course with two hours’ free drinks ¥8,000: clam cream croquette, clam ajillo, clam shabu-shabu (official site) · seven dishes with free drinks ¥7,500; sake-pairing course ¥8,500 with about 20 sakes to choose from, homemade roast beef and beef sukiyaki (official site) · bar menu after 21:00: mixed nuts ¥600, fresh popcorn ¥800 (official site) · clams from Kuwana; chawanmushi with milt and karasumi; dashimaki with clam tsukudani; curry risotto (February 2026) · fish from Maizuru (May 2026) · Kyoto and national sakes, including a bottle made with a long-established brewery that shares the shop’s name (February 2026)',
    website: SITE, gmaps: gm('ごはんとお酒 Jinsuke 京都 三条'), menu_url: SITE,
    notes: '[Clams and sake · Sanjo-Muromachi, a couple’s counter] A homely L-shaped counter on Sanjo-dori run by a husband and wife, where the day’s omakase ends in the house clam shabu-shabu finished with soba. Seven dishes ¥5,000, or the clam course with croquette, ajillo and shabu-shabu with two hours of drinks for ¥8,000; about ten sakes, and a pairing course. Bookings are for courses; à la carte after 21:00. Solo-friendly. One drink each.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and the owner’s wife; invoice holder 株式会社べっぴんや'], origin: null,
      background: 'Reviewers describe a couple behind the counter: “the cheerful demeanor of the owners (a couple)” (May 2026); the owner and the owner’s wife “very friendly” (February 2026); “the charm of the owner’s wife is truly captivating” (February 2026). An April 2026 diner also mentions staff. A February 2026 visitor booked after seeing the clam course on a TV show visited by Tohru Kazama. Tabelog’s invoice number T2130001044213 is registered to 株式会社べっぴんや (NTA invoice registry).',
      philosophy: 'Seasonal vegetables and fresh fish, cooking that is kind to the body and stomach; a new dish each visit (official site).', specialty: 'Clam shabu-shabu; sake.',
      anecdotes: [
        { text: 'A December 2025 regular on a seventh visit liked that the obanzai platter arrives just before the clam hot pot.', source: R + 'B495393181/' },
        { text: 'A February 2026 guest saw the counter of about eight fall into conversation, foreign guests included.', source: R + 'B523138026/' },
      ],
      japanese_sources_summary: '公式サイト: ごはんとお酒 Jinsuke、烏丸御池駅6番出口から徒歩4分、家庭的な雰囲気で日替わりのおまかせ料理とこだわりの日本酒、旬の野菜や鮮魚で身体や胃に優しい料理、日本酒は常時10種類、カウンターメインでひとりでも。コース: はまぐりづくし8,000円 (2時間飲み放題)、おまかせ7品7,500円 (飲み放題)、日本酒ペアリング8,500円、お食事のみおまかせ7品5,000円、お手軽5品3,850円、はなれの完全個室コース7,500円 (1日1組、電話のみ)、予約はコースのみ、苦手な食材は予約時に相談、21時以降のバータイムメニュー (ミックスナッツ600円、ポップコーン800円)、11月の休業日。食べログ: 居酒屋、中京区三条通室町西入る衣棚町45-2、火〜土・祝前日 17:00〜23:00 (L.O.22:30)、日・月定休、お一人様1ドリンク、16席、個室あり、2024年2月14日オープン、適格請求書 T2130001044213 (株式会社べっぴんや)。口コミ (2025〜2026年、英語): 夫婦で営む、桑名の蛤、舞鶴の魚、はまぐりのしゃぶしゃぶと〆のそば。',
      confidence: 'medium', sources: [SITE, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=2130001044213', R + 'B495393181/', R + 'B517976845/', R + 'B521977468/', R + 'B522020841/', R + 'B523138026/', R + 'B526961737/', R + 'B527019677/', R + 'B528104172/', R + 'B528656953/', R + 'B528922735/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course bookings; à la carte only after 21:00. A chatty counter where foreign guests have been drawn into the conversation (February 2026). One drink each.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区三条通室町西入る衣棚町45-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with November 2026 closing days; Tabelog reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (35.008479, 135.757161); cross-checked: GSI 京都府京都市中京区衣棚町45番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official course menu, tax included, read 2026-11-05.', last_checked: TODAY, items: [
      it('おまかせ7品', '', 'Omakase, seven dishes', '¥5,000', 'Courses', 'ask', 'no', 'Official site.', 'omakase7'),
      it('お手軽５品', '', 'Five-dish omakase', '¥3,850', 'Courses', 'ask', 'no', 'Official site.', 'omakase5'),
      it('2時間飲み放題付 はまぐりづくしコース', '', 'Clam course with two hours of drinks', '¥8,000', 'Courses', 'ask', 'no', 'Official site.', 'hamaguri_course'),
      it('日本酒好きのためのペアリングコース', '', 'Sake-pairing course (seven dishes)', '¥8,500', 'Courses', 'ask', 'no', 'Official site.', 'sake_pairing'),
      it('はまぐりのしゃぶしゃぶ', '', 'Clam shabu-shabu (in the courses)', '', 'Courses', 'ask', 'no', 'Official site.', 'hamaguri_shabu'),
      it('ミックスナッツ', '', 'Mixed nuts (after 21:00)', '¥600', 'Bar time', 'ask', 'ask', 'Official site.', 'nuts'),
    ] }, {
    cuisine: '旬の野菜と鮮魚の日替わりのおまかせ、身体や胃に優しい料理。日本酒は常時10種ほど (公式サイト)・おまかせ7品5,000円: お通し、お造り、揚げ物、おばんざい盛り合わせ、季節の一品、はまぐりのしゃぶしゃぶ、本日のシメ (雑炊または麺)。5品は3,850円 (公式サイト)・2時間飲み放題付きのはまぐりづくしコース8,000円: はまぐりのクリームコロッケ、アヒージョ、しゃぶしゃぶ (公式サイト)・飲み放題付き7品7,500円、約20種から選ぶ日本酒ペアリングコース8,500円、自家製ローストビーフ、牛のすき焼き (公式サイト)・21時以降のバーメニュー: ミックスナッツ600円、出来たてポップコーン800円 (公式サイト)・桑名の蛤、白子とカラスミの茶碗蒸し、蛤の佃煮のだし巻き、カレーリゾット (2026年2月)・舞鶴の魚 (2026年5月)・京都と全国の日本酒、店名と同じ名の老舗酒蔵と造った酒も (2026年2月)',
    neighborhood: '室町の西の三条通。烏丸御池駅から徒歩4分',
    gf_detail: '要確認。お造り、揚げ物、おばんざい、はまぐりのクリームコロッケ、かき揚げ、フォカッチャを添えたアヒージョ、そばや雑炊で締めるはまぐりのしゃぶしゃぶのおまかせ。苦手な食材は予約時に相談を、と公式サイトにある (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、蛤、牛肉のコース、鰹と蛤の出汁 (公式サイト、2026年4月)。',
    notes: '[蛤と日本酒・三条室町、夫婦のカウンター] 三条通の家庭的なL字カウンター。夫婦で営み、その日のおまかせは名物のはまぐりのしゃぶしゃぶとそばで締める。7品5,000円、またはクリームコロッケ、アヒージョ、しゃぶしゃぶのはまぐりづくし (2時間飲み放題付き8,000円)。日本酒は10種ほど、ペアリングのコースも。予約はコースのみ、21時以降はアラカルト。ひとりでも入りやすい。お一人様1ドリンク。',
  });
}

// ================================================================ Three HORSES KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039288/'; const R = TB + 'dtlrvwlst/';
  const KP = 'https://www.excite.co.jp/news/article/Kyotopi_7d7f81b7f03af2afa81ddc9436a0a4d9aa0f8177/';
  const WD = day(['09:00', '17:00']); const FS = day(['09:00', '21:00']); const SU = day(['09:00', '18:00']);
  put({
    id: 'kyoto_three_horses_okazaki', name: 'Three HORSES KYOTO', category: 'OMNI',
    lat: 35.0115, lng: 135.782063, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: toast, French toast, sandwiches, scones, quiche, cakes and cookies (Kyotopi 2023; 2026 reviews). The pudding and granola with Greek yogurt are not described — ask.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A café of eggs, bacon, dairy and baked goods; no vegan item or plant milk is mentioned in the sources read.',
    hours_raw: 'Monday–Thursday 9:00–17:00, Friday–Saturday 9:00–21:00, Sundays and holidays 9:00–18:00 (Tabelog; hours may change). In 2023 Kyotopi gave 8:00–18:00, closed Thursdays. Morning menu in the early hours (October 2026). Order and pay at the counter; food is brought to your seat (Kyotopi 2023; October 2026). No reservations (Tabelog). Cards and e-money; no QR (Tabelog). Glass-walled concrete room with a terrace on the Shirakawa; pets on the terrace only (Tabelog; Kyotopi). Children and strollers welcome; take-out (Tabelog). Waits of about 30 min for food at busy breakfast times (October 2026). 5 min from Higashiyama Stn, near Heian Shrine and the Kyoto City KYOCERA Museum (Tabelog; 2026 reviews). Opened 31 March 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: FS, 5: FS, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, on the Shirakawa near Heian Shrine — 5 min from Higashiyama Stn',
    cuisine: 'All-day café with breakfast, lunch and café time (Kyotopi 2023) · morning plate of salad, half boiled egg, toast, herb sausage, granola with Greek yogurt, ¥1,200 in 2023; ¥100 off a drink with a morning item (Kyotopi 2023; October 2026) · honey cheese toast with grainy mustard; bacon-and-egg French toast with honey (September–October 2026) · lunch: sandwiches, quiche sets, dry curry, tartare salmon sandwich (Kyotopi 2023; October 2026) · Italian pudding, Mont Blanc ¥900, anko-and-butter scone sandwich ¥750, P-chan cookie ¥300, carrot cake, cheesecake, very large scones (2026 reviews) · hand-drip coffee, café latte ¥700, matcha latte, espresso, smoothies (Kyotopi 2023; 2026 reviews)',
    website: null, gmaps: gm('Three HORSES KYOTO 岡崎'), menu_url: null,
    notes: '[Café · Okazaki, by the Shirakawa] A glass-walled concrete café with a terrace on the Shirakawa, steps from Heian Shrine and the KYOCERA Museum — useful before a museum, Noh at the Kanze Kaikan, or a shrine visit. Breakfast from 9:00 (French toast, honey cheese toast, morning plate), sandwiches and dry curry at lunch, and a showcase of puddings, Mont Blanc and huge scones. Order at the counter. Open to 21:00 on Fridays and Saturdays. Busy; expect waits at breakfast.',
    chef_bio: { chef_name: null, roles: ['Café team (unnamed)'], origin: null,
      background: 'Kyotopi (October 2023) reports the café opened in March 2023 on the site of a bistro that closed during the pandemic, as a sister shop of cafe KaimanaLio in Kusatsu, Shiga, known for specialty coffee. A November 2026 reviewer found the man who served the table “a bit brusque”, if busy.',
      philosophy: null, specialty: 'Breakfast toasts; pudding; scones; coffee.',
      anecdotes: [
        { text: 'A September 2026 visitor watched the river through the glass with a hand-drip coffee and carrot cake after the KYOCERA Museum.', source: R + 'B535884379/' },
        { text: 'An October 2026 hotel guest arrived at 9:10 to find five groups already seated and waited about 30 minutes for the French toast.', source: R + 'B537826287/' },
      ],
      japanese_sources_summary: 'Kyotopi (2023年10月): Three HORSES (スリー ホースィズ)、2023年3月オープン、コロナ禍で閉じたビストロの跡、滋賀・草津の cafe KaimanaLio の姉妹店、白川沿いのガラス張りとテラス、8時〜18時の通し営業 (当時)、木曜休み (当時)、モーニングプレート1,200円、モーニングとドリンクで100円引き、サンドイッチやキッシュのランチ、ケーキ、スコーン、カウンターで注文し席へ運ぶ。食べログ: カフェ、左京区岡崎円勝寺町65-1 パークハウス京都岡崎有楽荘1F、東山駅から徒歩5分、月〜木 9:00〜17:00、金・土 9:00〜21:00、日・祝 9:00〜18:00、予約不可、カード・電子マネー可、テラス、ペットはテラスのみ、子ども可、2023年3月31日オープン。口コミ (2026年、英語): フレンチトースト、ハニーチーズトースト、プリン、モンブラン900円、あんバタースコーンサンド750円、大きなスコーン、カフェラテ700円、朝は混む。',
      confidence: 'medium', sources: [TB, KP, R + 'B534224318/', R + 'B535884379/', R + 'B536002282/', R + 'B536231027/', R + 'B536629285/', R + 'B537826287/', R + 'B537998814/', R + 'B538467837/', R + 'B538482615/', R + 'B538587538/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter, food is brought over; many foreign visitors at breakfast (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎円勝寺町65-1 パークハウス京都岡崎有楽荘 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.0115, 135.782063); cross-checked: GSI 京都府京都市左京区岡崎円勝寺町65番地 (lot) 145m — within the 150 m limit, kept as precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538467837/', KP],
    price_note: 'Prices from a November 2026 review; morning plate from Kyotopi (2023).', last_checked: TODAY, items: [
      it('', '', 'Morning plate', '¥1,200', 'Breakfast', 'no', 'no', 'Kyotopi, 2023 price.', 'morning_plate'),
      it('', '', 'Mont Blanc', '¥900', 'Sweets', 'no', 'no', 'November 2026.', 'mont_blanc'),
      it('', '', 'Anko and butter scone sandwich', '¥750', 'Sweets', 'no', 'no', 'November 2026.', 'scone_sandwich'),
      it('', '', 'Café latte', '¥700', 'Drinks', 'gf', 'no', 'November 2026; dairy milk.', 'cafe_latte'),
    ] }, {
    cuisine: '朝、昼、カフェタイムの通し営業のカフェ (Kyotopi 2023年)・サラダ、半熟卵、トースト、ハーブソーセージ、グラノーラとギリシャヨーグルトのモーニングプレート (2023年は1,200円)。モーニングとドリンクで100円引き (Kyotopi 2023年、2026年10月)・粒マスタード入りのハニーチーズトースト、はちみつ付きのベーコンエッグのフレンチトースト (2026年9〜10月)・昼はサンドイッチ、キッシュのセット、ドライカレー、サーモンのタルタルサンド (Kyotopi 2023年、2026年10月)・イタリアンプリン、モンブラン900円、あんバタースコーンサンド750円、P-chan クッキー300円、キャロットケーキ、チーズケーキ、大きなスコーン (2026年の口コミ)・ハンドドリップのコーヒー、カフェラテ700円、抹茶ラテ、エスプレッソ、スムージー (Kyotopi 2023年、2026年の口コミ)',
    neighborhood: '岡崎、平安神宮近くの白川沿い。東山駅から徒歩5分',
    gf_detail: 'メニューとしてはグルテンフリーではない。トースト、フレンチトースト、サンドイッチ、スコーン、キッシュ、ケーキ、クッキー (Kyotopi 2023年、2026年の口コミ)。プリンやグラノーラとギリシャヨーグルトは中身が書かれておらず、要確認。',
    vegan_detail: '要確認。卵、ベーコン、乳製品、焼き菓子のカフェ。読んだ情報にヴィーガンの品や植物性ミルクは出てこない。',
    notes: '[カフェ・岡崎、白川沿い] 平安神宮や京セラ美術館のすぐ近く、白川沿いのテラスのあるガラス張りのコンクリートのカフェ。美術館や観世会館の能、神社の前後に。朝9時からモーニング (フレンチトースト、ハニーチーズトースト、モーニングプレート)、昼はサンドイッチやドライカレー、ショーケースにはプリン、モンブラン、大きなスコーン。カウンターで注文。金・土は21時まで。人気で、朝は待つことも。',
  });
}

// ================================================================ 酒ノみつぼし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043092/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-atari.co/shop/21/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_sake_no_mitsuboshi', name: '酒ノみつぼし (Sake no Mitsuboshi)', category: 'OMNI',
    lat: 35.00269, lng: 135.762538, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Izakaya small plates — fried chicken, dote-yaki, meat tofu, sea bream in sesame-miso with sweet soy, fried pig’s feet, fried yam and corn, spring rolls, stuffed peppers with broth; no gluten information (company site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an izakaya menu of meat, fish and broth-based dishes; the otoshi was shirasu (September 2026).',
    hours_raw: '17:00–23:00 daily; irregular closures (Tabelog; company site). Reservations accepted, including TableCheck; a call 10–20 minutes after a missed booking time, then a no-show cancellation (Tabelog; August 2026). Usually full — book (2026 reviews); a reviewer wondered whether there is a two-hour limit (July 2026). Otoshi ¥330 (Tabelog, original お通し代：330円). Cards, e-money and QR codes (Tabelog). 50 seats: 18 at the counter, 26 at tables, 6 standing, with a second floor (Tabelog; September–October 2026). Private hire 20–50. Non-smoking. English menu. BYO with a corkage fee (Tabelog). 3–5 min from Hankyu Karasuma and subway Shijo Stns (Tabelog). Opened 23 May 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South of Shijo between Karasuma and Takakura — 4 min from Shijo Stn',
    cuisine: 'Washoku brought to the izakaya in a Showa-retro room: crisp fried chicken, slow-simmered dote-yaki (company site) · signature meat tofu, sea bream with sesame miso and sweet soy, fried pig’s feet, fried corn, stuffed peppers that burst with broth (2026 reviews) · fried yam, spring rolls, grilled potato salad, braised pork with eggs (July–September 2026) · small portions for sharing; about ¥4,000–6,000 a head with drinks (2026 reviews) · beer poured two ways; sakes including Abu no Tsurugi from Yamaguchi; no wine in September 2026',
    website: SITE, gmaps: gm('酒ノみつぼし 京都 四条烏丸'), menu_url: null,
    notes: '[Izakaya · Shijo Karasuma, Showa-retro and loud] A packed two-floor taishu sakaba south of Shijo from the team behind 酒呑気びんご, serving small, cheap, well-made plates — the meat tofu, dote-yaki, sesame-miso sea bream, burst-of-broth stuffed peppers, fried yam — with sake and beer poured two ways. Staff push recommendations with gusto. Book ahead; ¥330 otoshi.',
    chef_bio: { chef_name: null, roles: ['Operated by 株式会社Atari'], origin: null,
      background: 'The company site of 株式会社Atari, which proposes “new sakaba rooted in Kyoto”, lists four shops: 酒呑気びんご, 六角ace, 酒ﾉみつぼし and ageru. Reviewers call it the sister of “Bingo” and “Rokkaku Ace” (August and September 2026). An October 2026 reviewer wrote that “all the staff were handsome, with one beautiful girl”, and called the service outstanding; a September 2026 diner admired the staff’s energetic recommendations.',
      philosophy: '“Bringing washoku to the sakaba” (和食を酒場へ) (company site).', specialty: 'Meat tofu; dote-yaki; fried chicken.',
      anecdotes: [
        { text: 'When a September 2026 diner ordered the braised pork, staff asked whether to add boiled eggs to match the number of people.', source: R + 'B536335600/' },
        { text: 'A July 2026 office drinking club recommended the beer-opening performance.', source: R + 'B532533138/' },
      ],
      japanese_sources_summary: '株式会社Atari の店舗ページ: 酒ﾉみつぼし、「和食を酒場へ。」、外はカリッと中はジューシーな「鶏揚げ」、とろとろに煮込んだ「どて焼き」、昭和レトロな空間の大衆酒場、17:00〜23:00、不定休、50席、現金・カード・電子マネー、ほかの店は酒呑気びんご、六角ace、ageru.。住所は中京区槌屋町102-2 と書かれているが、これは同社の別の店のページと同じ住所。食べログ: 居酒屋、下京区高材木町227-2、阪急烏丸駅・地下鉄四条駅から徒歩3〜5分、毎日17:00〜23:00、予約可、お通し代330円、カード・電子マネー・QR可、50席 (カウンター18、テーブル26、立ち飲み6)、貸切20〜50名、禁煙、英語メニュー、持ち込み可 (持ち込み料あり)、2025年5月23日オープン。口コミ (2026年、英語): びんごの系列、肉豆腐、ごま味噌の鯛、豚足の唐揚げ、旨みの詰まったピーマン、長芋の揚げ物、いつも満席。',
      confidence: 'medium', sources: [SITE, 'https://kyoto-atari.co/shop/', TB, R + 'B531976687/', R + 'B532533138/', R + 'B532851048/', R + 'B535778295/', R + 'B536162294/', R + 'B536327107/', R + 'B536335600/', R + 'B536850179/', R + 'B536855820/', R + 'B537371523/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); lively, crowded room with proactive staff; ¥330 otoshi.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高材木町227-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and company site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00269, 135.762538); cross-checked: GSI 京都府京都市下京区高材木町227番地 (lot) 8m. The company page gives 中京区槌屋町102-2, the same address as another Atari shop page, so the Tabelog address is used; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or dish prices read; otoshi from Tabelog; reviewers spend ¥4,000–8,000.', last_checked: TODAY, items: [
      it('', '', 'Otoshi', '¥330', 'Charges', '', '', 'Tabelog.', 'otoshi'),
      it('鶏揚げ', '', 'Fried chicken', '', 'Signature', 'no', 'no', 'Company site.', 'tori_age'),
      it('どて焼き', '', 'Dote-yaki (slow-simmered)', '', 'Signature', 'ask', 'no', 'Company site.', 'dote_yaki'),
      it('', '', 'Meat tofu', '', 'Signature', 'ask', 'no', '2026 reviews.', 'niku_dofu'),
    ] }, {
    cuisine: '昭和レトロな空間で、和食を酒場へ。外はカリッと中はジューシーな鶏揚げ、とろとろのどて焼き (会社サイト)・名物の肉豆腐、ごま味噌と甘い醤油の鯛、豚足の唐揚げ、揚げとうもろこし、だしがあふれるピーマンの詰め物 (2026年の口コミ)・長芋の揚げ物、春巻き、焼きポテトサラダ、卵と豚の角煮 (2026年7〜9月)・取り分けやすい小さな皿、飲んで1人4,000〜6,000円ほど (2026年の口コミ)・2通りの注ぎ方のビール、Yamaguchi の日本酒 Abu no Tsurugi など。2026年9月はワインなし',
    neighborhood: '四条の南、烏丸と高倉の間。四条駅から徒歩4分',
    gf_detail: '要確認。鶏の唐揚げ、どて焼き、肉豆腐、ごま味噌と甘い醤油の鯛、豚足の唐揚げ、長芋やとうもろこしの揚げ物、春巻き、だしの入ったピーマンなどの酒場の小皿。グルテンの情報はない (会社サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。肉、魚、だしの料理の居酒屋。お通しはしらす (2026年9月)。',
    notes: '[居酒屋・四条烏丸、昭和レトロでにぎやか] 四条の南、2階まである満席続きの大衆酒場。酒呑気びんごと同じ会社の店。肉豆腐、どて焼き、ごま味噌の鯛、だしがあふれるピーマン、長芋の揚げ物など、安くてていねいな小皿を日本酒と2通りのビールで。店員のおすすめが積極的。予約がおすすめ。お通し330円。',
  });
}

save();
