// Osaka sweep (2-mile circle around Dotonbori), batch 71 — mom phase (≤20 seats).
//   + グリル南風 (74-year-old yoshoku diner near Amerikamura, cash only — filed 'other')
//   + ストロベリーマニア 心斎橋店 (strawberry sweets shop with a 2F café — filed 'sweets')
//   + 牡蠣 HachiRou 86 (5F oyster bar off Shinsaibashi-suji — filed 'other')
//   + 和ビストロ 一喜一遊 (11-seat counter of obanzai-style small plates with wine and sake — filed 'other')
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 71);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ グリル南風
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27012827/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '21:00']), S = day(['12:00', '14:00']);
  put({
    id: 'osaka_grill_nanpu_nishishinsaibashi', name: 'グリル南風 (Grill Nanpu)', category: 'OMNI',
    lat: 34.669471, lng: 135.499339, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded cutlets and croquettes, demi-glace, spaghetti, somen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef, shrimp, crab, egg.',
    hours_raw: 'Mon–Sat 12:00–21:00 (L.O. 20:30); Sun 12:00–14:00; hours may change (Tabelog). No reservations. Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-7-4 — near Amerikamura, about 5 min from Namba Stn exit 25 across the Dotonbori river',
    cuisine: 'Classic yoshoku, in business about 74 years · pork cutlet ¥1,600 · hamburg steak ¥1,600 with spaghetti, fried egg and bacon · weekday lunches about ¥1,000–1,100 with rice and mini somen: "Familiar Lunch" of bite-size cutlet, shrimp fry and omelet · crab cream croquette · head-on shrimp fry · authentic demi-glace · rice ¥250 · 1F counter, 2F tables, 20 seats',
    website: null, gmaps: gm('グリル南風 西心斎橋'), menu_url: null,
    notes: "[Yoshoku · a 74-year-old Western-food diner near Amerikamura] A long-running yoshoku restaurant in Nishi-Shinsaibashi near Amerikamura, about 74 years in business and still busy with local regulars; the name is read \"Nanpu\". Downstairs is a counter that suits solo diners, upstairs tables. Weekday lunches are the bargain: around ¥1,000–1,100 for a plate like the Familiar Lunch of bite-size cutlet, shrimp fry and omelet, with rice and a mini bowl of somen. À la carte, the pork cutlet (¥1,600) is fried hot for a light, crunchy coat, the hamburg (¥1,600) comes juicy with spaghetti, a fried egg and bacon, and the big crab cream croquettes are creamy inside. The demi-glace tastes properly old-school. Cash only; Sundays lunch only.",
    chef_bio: { chef_name: null, roles: [], origin: 'About 74 years in business (September–October 2026 reviews)', background: 'Long-established yoshoku restaurant in Nishi-Shinsaibashi (2026 reviews).', philosophy: null, specialty: 'Pork cutlet; hamburg steak; lunch plates.',
      anecdotes: [
        { text: '"The cutlet was fried to a crisp at a high temperature, with a light and crunchy coating." — July 2026, pork cutlet ¥1,600.', source: R + 'B532634673/' },
        { text: '"The authentic demi-glace sauce on the fried dishes was delicious, and having multiple side dishes along with rice and somen for just JPY 1,000 is fantastic!" — August 2026, weekday lunch.', source: R + 'B535001429/' },
      ],
      japanese_sources_summary: '食べログ: グリル南風、大阪市中央区西心斎橋2-7-4、地下鉄なんば駅25番出口から北へ道頓堀川を渡り徒歩5分、月〜土12:00〜21:00(L.O.20:30)、日12:00〜14:00、予約不可、カード・電子マネー・QR不可、20席、禁煙、カウンター席。口コミ(2026年7〜10月): アメ村近くの老舗洋食、読みは「なんぷう」、レトロな雰囲気、地元の常連、豚カツ1,600円(サラダ、カレー風味のもやし、焼きそばのようなスパゲティ)、高温でカラッと揚げた衣、ハンバーグ1,600円とライス250円(スパゲティ、目玉焼き、ベーコン)、ファミリアランチ1,100円(一口カツ、エビフライ、オムレツ)、ミニそうめん付き、1階カウンター・2階テーブル、平日ランチがお得、本格的なデミグラス、ご飯とそうめんで1,000円、有頭エビフライ、創業74年、カニクリームコロッケ、ひとりでも入りやすい。',
      confidence: 'medium', sources: [TB, R + 'B532634673/', R + 'B535001429/', R + 'B533998573/', R + 'B534485830/', R + 'B536304843/', R + 'B537299632/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Old-style diner; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-7-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目7番4号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532634673/', R + 'B533998573/', R + 'B536304843/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork cutlet', '¥1,600', 'Mains', 'no', 'no', 'July 2026.', 'katsu'),
      it('', '', 'Hamburg steak', '¥1,600', 'Mains', 'no', 'no', 'August 2026.', 'hamburg'),
      it('', '', 'Familiar Lunch (cutlet, shrimp fry, omelet)', '¥1,100', 'Lunch', 'no', 'no', 'August–September 2026.', 'familiar'),
      it('', '', 'Crab cream croquette', '', 'Mains', 'no', 'no', 'October 2026.', 'croquette'),
      it('', '', 'Rice', '¥250', 'Rice', 'ask', 'vegan', 'August 2026.', 'rice'),
    ] }, {
    cuisine: '創業74年ほどの昔ながらの洋食・豚カツ1,600円・スパゲティ、目玉焼き、ベーコン付きのハンバーグ1,600円・平日ランチは1,000〜1,100円ほどでご飯とミニそうめん付き(一口カツ、エビフライ、オムレツの「ファミリアランチ」など)・カニクリームコロッケ・有頭エビフライ・本格的なデミグラス・ライス250円・1階カウンター、2階テーブルで20席',
    neighborhood: '西心斎橋2-7-4。アメ村の近く、なんば駅25番出口から道頓堀川を渡って徒歩約5分',
    gf_detail: 'グルテンフリーではありません。カツやコロッケの衣、デミグラス、スパゲティ、そうめん。',
    vegan_detail: 'ヴィーガンではありません。豚肉、牛肉、海老、蟹、卵。',
    notes: '[洋食・アメ村近くの創業74年の洋食店] アメ村近くの西心斎橋にある老舗の洋食店で、創業74年ほど、今も地元の常連でにぎわいます。読みは「なんぷう」。1階はひとりでも座りやすいカウンター、2階はテーブル。お得なのは平日ランチで、1,000〜1,100円ほどで一口カツ、エビフライ、オムレツの「ファミリアランチ」などにご飯とミニそうめん付き。単品なら、高温でカラッと揚げた軽い衣の豚カツ(1,600円)、スパゲティ、目玉焼き、ベーコンが付くジューシーなハンバーグ(1,600円)、中がとろりとした大きなカニクリームコロッケ。デミグラスは昔ながらの本格派。現金のみ、日曜は昼のみ。',
  });
}

// ================================================================ ストロベリーマニア 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27105578/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://solatsuki.jp/strawberrymania';
  put({
    id: 'osaka_strawberry_mania_shinsaibashi', name: 'ストロベリーマニア 心斎橋店 (STRAWBERRY MANIA Shinsaibashi)', category: 'OMNI',
    lat: 34.671063, lng: 135.50108, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tarts, shortcake, éclairs and crepes use wheat; no gluten-free item described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream, custard, butter and egg in the cakes.',
    hours_raw: '1F takeaway 11:00–22:00; 2F café 12:00–19:00 (L.O. 18:30); closed 1 January (Tabelog). Afternoon tea currently suspended (Tabelog). Cash or PayPay only: no cards or IC cards (Tabelog).',
    hours: ALL(day(['11:00', '22:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 2-7-26 — about 5 min from Shinsaibashi or Namba Stn',
    cuisine: 'Strawberry sweets from Tsukiji Soratsuki · strawberries chosen by buyers year-round · strawberry shortcake ¥650, about twice normal size · strawberry tart ¥1,200 · strawberry tart in a jar ¥800 · red strawberry éclair with chocolate mousse · strawberry daifuku · crepes and soft serve to go · cake plate with strawberry ice cream and a free drink ¥2,000 · strawberry milk and smoothies, fresh berry tea · 2F café, 20 seats',
    website: OWN, gmaps: gm('ストロベリーマニア 心斎橋'), menu_url: null,
    notes: "[Sweets · a strawberry sweets shop with a café upstairs] A strawberry-only sweets shop on Shinsaibashi-suji from Tsukiji Soratsuki, a Tokyo sweets maker, using strawberries its buyers source from around Japan all year. The ground-floor case is a pink wall of shortcakes, tarts, éclairs and daifuku, with crepes and soft serve to go. Upstairs, the 20-seat café, with dried flowers and strawberry-shaped lamps, serves cake plates with ice cream and a free drink (¥2,000, March 2026). Favorites are the strawberry tart in a jar (¥800, August 2026), layered with almond cream, crumble and custard; the red strawberry éclair with chocolate mousse; and a shortcake twice the usual size for ¥650. Most sweets are made by in-house pastry chefs. The café opens at noon, takeaway at 11. Cash or PayPay only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 June 2018 (Tabelog)', background: 'Produced by Tsukiji Soratsuki, a sweets shop in Tsukiji, Tokyo (March 2026 review); official page solatsuki.jp/strawberrymania.', philosophy: 'Strawberries chosen by buyers from across Japan year-round (Tabelog).', specialty: 'Strawberry tart in a jar; strawberry shortcake.',
      anecdotes: [
        { text: '"This luxurious tart is filled with almond dough, crumble cookies, and homemade custard, all beautifully encased in a jar. It\'s topped with plenty of strawberries." — June 2026, strawberry tart in a jar.', source: R + 'B530463616/' },
        { text: '"This cake is about twice the size of a typical shortcake. At JPY 650 for a single serving, it\'s an incredible deal!" — March 2026, cake plate with a free drink ¥2,000.', source: R + 'B525620567/' },
      ],
      japanese_sources_summary: '公式 solatsuki.jp/strawberrymania。食べログ: ストロベリーマニア 心斎橋店、大阪市中央区心斎橋筋2-7-26、心斎橋駅・なんば駅から徒歩5分、1階テイクアウト11:00〜22:00、2階カフェ12:00〜19:00(L.O.18:30)、1月1日休み、アフタヌーンティーは休止中、現金かPayPayのみ(カード・交通系IC不可)、20席、2018年6月15日開店、全国のバイヤーが選ぶ苺。口コミ(2026年3〜9月): 築地のTsukiji Soratsukiのプロデュース、苺のショートケーキ・苺大福・苺エクレア、クレープやソフトクリーム、2階は欧風モダンなカフェでドライフラワー、赤い苺のエクレア、生ベリーティー、ほとんどのスイーツは店のパティシエの手作り、瓶入りの苺タルト1,200円という声、苺のランプ、ケーキプレートはドリンク付き、苺タルトとショートケーキのプレート各2,000円、苺アイス、ショートケーキは普通の倍ほどで650円、瓶入りタルト800円、カフェは12時から、映える。',
      confidence: 'medium', sources: [TB, OWN, R + 'B530463616/', R + 'B525620567/', R + 'B524778481/', R + 'B525260626/', R + 'B536892399/', R + 'B537076937/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the case; café upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-7-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated March–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目7番26号 (go) 4m (the OSM STRAWBERRY MANIA node 398m away is another branch); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525620567/', R + 'B536892399/', R + 'B525260626/'],
    price_note: 'Prices from March and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Strawberry shortcake', '¥650', 'Cakes', 'no', 'no', 'March 2026.', 'shortcake'),
      it('', '', 'Strawberry tart', '¥1,200', 'Cakes', 'no', 'no', 'March 2026.', 'tart'),
      it('', '', 'Strawberry tart in a jar', '¥800', 'Cakes', 'no', 'no', 'August 2026.', 'jar'),
      it('', '', 'Red strawberry éclair', '', 'Cakes', 'no', 'no', 'March and June 2026.', 'eclair'),
      it('', '', 'Cake plate with ice cream and a drink', '¥2,000', 'Café', 'no', 'no', 'March 2026.', 'plate'),
      it('', '', 'Strawberry daifuku', '', 'Wagashi', 'ask', 'ask', 'March 2026.', 'daifuku'),
    ] }, {
    cuisine: 'Tsukiji Soratsukiの苺スイーツ・バイヤーが一年中選ぶ苺・普通の倍ほどの苺のショートケーキ650円・苺タルト1,200円・瓶入りの苺タルト800円・チョコムースの赤い苺エクレア・苺大福・持ち帰りのクレープとソフトクリーム・苺アイスとドリンク付きのケーキプレート2,000円・苺ミルクやスムージー、生ベリーティー・2階カフェ20席',
    neighborhood: '心斎橋筋2-7-26。心斎橋駅・なんば駅から徒歩約5分',
    gf_detail: 'グルテンフリーではありません。タルト、ショートケーキ、エクレア、クレープに小麦。グルテンフリーの品の記載はありません。',
    vegan_detail: 'ヴィーガンではありません。ケーキに生クリーム、カスタード、バター、卵。',
    notes: '[スイーツ・2階にカフェのある苺スイーツの店] 心斎橋筋にある苺だけのスイーツの店で、東京・築地のTsukiji Soratsukiのプロデュース、バイヤーが全国から一年中選ぶ苺を使います。1階のケースにはショートケーキ、タルト、エクレア、大福がずらりと並び、持ち帰りのクレープやソフトクリームも。2階はドライフラワーと苺の形のランプの20席のカフェで、アイスとドリンク付きのケーキプレート(2,000円、2026年3月)を。人気はアーモンドクリーム、クランブル、カスタードを重ねた瓶入りの苺タルト(800円、2026年8月)、チョコムースの赤い苺エクレア、そして普通の倍の大きさで650円のショートケーキ。スイーツのほとんどは店のパティシエの手作り。カフェは12時から、持ち帰りは11時から。現金かPayPayのみ。',
  });
}

// ================================================================ 牡蠣 HachiRou 86
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27060365/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '01:00']), F = day(['17:30', '01:00']);
  put({
    id: 'osaka_kaki_hachirou_86', name: '牡蠣 HachiRou 86 (Kaki HachiRou 86)', category: 'OMNI',
    lat: 34.671033, lng: 135.50186, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: fried oysters, gratin, pasta; sauces not described. Raw oysters themselves contain no wheat — ask about sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oysters and crab.',
    hours_raw: 'Mon–Thu and days around holidays 18:00–1:00 am; Fri–Sun and holidays 17:30–1:00 am (food L.O. 24:00) (Tabelog). Reservations accepted; 50% fee for same-day course cancellations (Tabelog). Clay-pot rice takes about 30 minutes, so order it first (July 2026). Cards, e-money and PayPay accepted.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: F }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 2-2-29, Itsutsuboshi Bldg 5F — turn east at GU on the Shinsaibashi arcade',
    cuisine: 'Oyster bar · raw oysters from several regions, including a five-oyster tasting · rock oysters from Murotsu (Hyogo) and Naruto (Tokushima) in season · steamed oysters · oyster gratin · fried oysters · oyster jjigae · oyster ajillo · oyster clay-pot rice · oyster pasta · crab and hot pot · wines to match · 6 counter seats and tables, 16 seats',
    website: null, gmaps: gm('牡蠣 HachiRou 86 心斎橋'), menu_url: null,
    notes: "[Oysters · a fifth-floor oyster bar off Shinsaibashi-suji] A 16-seat oyster bar on the fifth floor of a building just east of the Shinsaibashi arcade at GU, open since 2011, with a bar-like mood that works for dates. The draw is raw oysters from different regions, best as a tasting of five; in summer the rock oysters from Murotsu in Hyogo and Naruto in Tokushima were called rich, \"the milk of the sea\". Cooked, there are steamed and fried oysters (hot and much praised), gratin, ajillo, a spicy oyster jjigae and oyster pasta. Order the oyster clay-pot rice first, as it takes about 30 minutes. Prices are fair for the amount of oysters, with wines to match. One repeat visitor found a batch of raw oysters a bit fishy. Open until 1 am.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 April 2011 (Tabelog)', background: 'Oyster bar off Shinsaibashi-suji (2026 reviews).', philosophy: null, specialty: 'Raw-oyster tasting; oyster clay-pot rice.',
      anecdotes: [
        { text: '"The rock oysters from Murotsu, Hyogo were incredibly rich and the best! I ordered more☆ The rock oysters from Naruto, Tokushima were like the milk of the sea!" — July 2026.', source: R + 'B532792167/' },
        { text: '"I tried all five varieties in the tasting set—each one was fresh, sweet, and delicious." — April 2026.', source: R + 'B529609466/' },
      ],
      japanese_sources_summary: '食べログ: 牡蠣 HachiRou 86、大阪市中央区心斎橋筋2-2-29 五つ星ビル5F、心斎橋筋商店街のGUを東へ、月〜木・祝前後日18:00〜翌1:00、金・土・日・祝17:30〜翌1:00(料理L.O.24:00)、予約可(コースの当日キャンセルは50%)、カード・電子マネー・PayPay可、16席(カウンター6、テーブル)、2011年4月20日開店。口コミ(2026年3〜9月): 牡蠣の食べ比べ、蒸し牡蠣、牡蠣グラタン、カキフライ、牡蠣チゲ、手頃に牡蠣を堪能、生牡蠣が絶品、熱々のカキフライ、バーのような雰囲気でデートにも、2人用の丸テーブル、季節の生牡蠣5種の食べ比べ、生臭さを感じた牡蠣もあったという声、室津(兵庫)の岩牡蠣が濃厚、鳴門(徳島)の岩牡蠣は海のミルク、アヒージョと土鍋ご飯(30分かかるので最初に)、生牡蠣5個、牡蠣に合うワイン、牡蠣のパスタ。',
      confidence: 'medium', sources: [TB, R + 'B532792167/', R + 'B529609466/', R + 'B351072607/', R + 'B526554380/', R + 'B537092366/', R + 'B537679097/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Fifth-floor bar; reservations accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-2-29 五つ星ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated March–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目2番29号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B351072607/', R + 'B532792167/', R + 'B537092366/'],
    price_note: 'No prices captured; reviewers spent ¥4,000–7,999.', last_checked: TODAY, items: [
      it('', '', 'Raw oyster tasting (five regions)', '', 'Oysters', 'ask', 'no', 'April and August 2026.', 'nama'),
      it('', '', 'Fried oysters', '', 'Oysters', 'no', 'no', 'March–July 2026.', 'kakifry'),
      it('', '', 'Steamed oysters', '', 'Oysters', 'ask', 'no', 'March 2026.', 'mushi'),
      it('', '', 'Oyster gratin', '', 'Oysters', 'no', 'no', 'March 2026.', 'gratin'),
      it('', '', 'Oyster clay-pot rice', '', 'Rice', 'ask', 'no', 'July 2026; about 30 minutes.', 'donabe'),
      it('', '', 'Oyster pasta', '', 'Pasta', 'no', 'no', 'August 2026.', 'pasta'),
    ] }, {
    cuisine: 'オイスターバー・産地の違う生牡蠣、5種の食べ比べも・季節の室津(兵庫)や鳴門(徳島)の岩牡蠣・蒸し牡蠣・牡蠣グラタン・カキフライ・牡蠣チゲ・牡蠣のアヒージョ・牡蠣の土鍋ご飯・牡蠣のパスタ・蟹や鍋・牡蠣に合うワイン・カウンター6席とテーブルで16席',
    neighborhood: '心斎橋筋2-2-29 五つ星ビル5F。心斎橋筋商店街のGUを東へ',
    gf_detail: '実際にはグルテンフリーではありません。カキフライ、グラタン、パスタ、ソースの中身は不明。生牡蠣そのものに小麦はないのでソースを確認して。',
    vegan_detail: 'ヴィーガンではありません。牡蠣と蟹。',
    notes: '[牡蠣・心斎橋筋そばの5階のオイスターバー] 心斎橋筋商店街のGUの角を東に入ったビルの5階にある16席のオイスターバーで、2011年開店、バーのような雰囲気でデートにも。目当ては産地の違う生牡蠣で、5種の食べ比べがおすすめ。夏は兵庫・室津や徳島・鳴門の岩牡蠣が濃厚で「海のミルク」と評判でした。加熱なら蒸し牡蠣、熱々で好評のカキフライ、グラタン、アヒージョ、辛い牡蠣チゲ、牡蠣のパスタ。牡蠣の土鍋ご飯は30分ほどかかるので最初に注文を。牡蠣の量のわりに値段は手頃で、合わせるワインも。生牡蠣が少し生臭かったという再訪者も。深夜1時まで。',
  });
}

// ================================================================ 和ビストロ 一喜一遊
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27084007/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.ikki1you.com/';
  put({
    id: 'osaka_wa_bistro_ikki_ichiyu', name: '和ビストロ 一喜一遊 (Wa Bistro Ikki Ichiyu)', category: 'OMNI',
    lat: 34.670129, lng: 135.499726, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: an omakase of many small Japanese dishes; soy-based seasoning not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: crab, oysters, milt, meat and chawanmushi in the course.',
    hours_raw: 'Daily 17:30–1:00 am (L.O. 24:00); closed irregularly, about three times a month (Tabelog). Reservations recommended; late-night bar use for wine and sake also possible (Tabelog). Smoking may be allowed on private bookings (Tabelog). Cards accepted; no e-money or QR.',
    hours: ALL(day(['17:30', '01:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-3-22 — the third shop down a narrow alley off Midosuji near the Korean Consulate; 4 min from Namba Stn exit 25',
    cuisine: 'Counter omakase "more than an izakaya, less than kaiseki" · no menu: ten to twenty obanzai-style small dishes in sake cups and tiny plates — braised butterbur, vegetables, fish, meat, chawanmushi — then seasonal dishes like crab, oysters and milt made in front of you · wine and sake pairings by the glass, including Tempranillo · reviewers spent about ¥8,000–15,000 · 11 counter seats',
    website: OWN, gmaps: gm('和ビストロ 一喜一遊 西心斎橋'), menu_url: null,
    notes: "[Japanese · an 11-seat small-plates counter tucked in a Nishi-Shinsaibashi alley] An easy-to-miss 11-seat counter down a narrow alley off Midosuji, open since 2015, which describes itself as more than an izakaya but less than kaiseki. There's no menu: the meal opens with ten to twenty obanzai-style bites served in sake cups and little plates, such as braised butterbur, vegetables, fish, meat and chawanmushi, then moves to seasonal dishes cooked in front of you, like crab, oysters or milt. The master pairs wine or sake to your taste, and the list is deep. Flavors run a little bold; one regular calls it reassuring. It's built around drinking: one non-drinking couple found the welcome cool. Expect about ¥8,000–15,000. Reserve; closed a few irregular days a month. The newest review is from March 2026.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 March 2015 (Tabelog)', background: 'Counter omakase with wine and sake pairings (Tabelog); official site ikki1you.com.', philosophy: '"More than an izakaya but less than a kaiseki" (Tabelog).', specialty: 'Obanzai-style small-plate omakase.',
      anecdotes: [
        { text: '"It features only a counter and has no menu. The dishes are served as an omakase course." — May 2025; drinks are matched to your preferences.', source: R + 'B507513796/' },
        { text: '"Twenty different dishes were served in small bowls, reminiscent of obanzai… There was a wide variety of wines." — February 2026.', source: R + 'B522476615/' },
      ],
      japanese_sources_summary: '公式 ikki1you.com。食べログ: 和ビストロ 一喜一遊、大阪市中央区西心斎橋2-3-22、御堂筋の韓国領事館近くの交差点を西へ入った細い路地の3軒目、なんば駅25番出口から北へ4分、毎日17:30〜翌1:00(L.O.24:00)、不定休(月3回)、予約可(深夜はワインや日本酒のバー利用も可)、貸切時などは喫煙可の場合あり、カード可、電子マネー・QR不可、11席(カウンターのみ)、2015年3月8日開店、居酒屋以上懐石未満。口コミ(2025年1月〜2026年3月): 最初の小鉢の盛り合わせ、季節の食材と創作料理を目の前で、蟹・牡蠣・白子・野菜・肉、日本酒もワインも、路地の隠れ家、味はやや濃いめでも上品、ワインと日本酒が豊富でペアリング、カウンターのみでメニューなしのおまかせ、お猪口に入った小皿、大将や常連との会話、やや高め、細い路地、お酒中心の料理で飲まない客には少しそっけなかったという声、蕗の煮物、20種の小鉢、テンプラニーリョ、茶碗蒸し、ゆっくり楽しめる。',
      confidence: 'medium', sources: [TB, OWN, R + 'B507513796/', R + 'B522476615/', R + 'B437168275/', R + 'B500231831/', R + 'B508797499/', R + 'B530919074/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No menu; omakase geared to drinkers.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-3-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing with current hours; newest review March 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目3番22号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507513796/', R + 'B522476615/'],
    price_note: 'No prices captured; reviewers spent ¥8,000–14,999.', last_checked: TODAY, items: [
      it('', '', 'Omakase course of small dishes', '', 'Courses', 'no', 'no', 'February–March 2026.', 'omakase'),
      it('', '', 'Wine or sake pairing', '', 'Drinks', 'ask', 'ask', 'February 2026.', 'pairing'),
    ] }, {
    cuisine: '「居酒屋以上懐石未満」のカウンターのおまかせ・メニューなし: お猪口や小皿に盛ったおばんざい風の10〜20品(蕗の煮物、野菜、魚、肉、茶碗蒸し)、続いて目の前で仕上げる蟹、牡蠣、白子などの季節の料理・グラスでのワインと日本酒のペアリング、テンプラニーリョも・予算は8,000〜15,000円ほど・カウンター11席',
    neighborhood: '西心斎橋2-3-22。御堂筋の韓国領事館近くから入る細い路地の3軒目、なんば駅25番出口から徒歩4分',
    gf_detail: '実際にはグルテンフリーではありません。和の小皿が続くおまかせで、醤油などの味付けの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。コースに蟹、牡蠣、白子、肉、茶碗蒸し。',
    notes: '[和食・西心斎橋の路地の11席の小皿のカウンター] 御堂筋から入る細い路地にある見落としやすいカウンター11席の店で、2015年開店、「居酒屋以上懐石未満」をうたいます。メニューはなく、まずお猪口や小皿に盛った蕗の煮物、野菜、魚、肉、茶碗蒸しなどおばんざい風の10〜20品、続いて蟹、牡蠣、白子など季節の料理を目の前で。大将が好みに合わせてワインや日本酒を合わせてくれ、品揃えも豊富。味はやや濃いめで、通う人には安心感のある店。お酒中心の店で、飲まない2人は少しそっけなく感じたそう。予算は8,000〜15,000円ほど。予約を。月に数日の不定休。最新の口コミは2026年3月です。',
  });
}

save();
