// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 71.
//   + 大衆酒場 をにわ 河原町店 Taishu Sakaba Woniwa (cheap izakaya on a 9th floor over the Kamo river; Osaka company)
//   + 祇園 くらした Gion Kurashita (Kyoto kaiseki, yudofu and Tanba-jidori hot pot off Hanamikoji since 2010)
//   + 祇園 椿 Gion Tsubaki (kappo counter and private rooms in south Gion, à la carte or omakase)
//   - 棲家 三条店, コメダ珈琲店 河原町三条店, 柿千 大丸京都店, 寿司と串とわたくし 三条大橋店, ミルクノキモチ 大丸京都店:
//     skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26040644, 26030888 (skipped),
//   26023298 (skipped), 26018930 (skipped), 26016704, 26027450, 26038148 (skipped), 26044148 (skipped).
//   queue-status.jsonl grepped for each brand (をにわ/FranK, 棲家, コメダ, 柿千, くらした, 椿, わたくし/ジェイグループ,
//   ミルクノキモチ): only 棲家 has an earlier ruling (26004942).
//   None of the three drafted is in data/kyoto.json by name or address (中島町105 タカセビル 9F, 祇園町南側570-157,
//   祇園町南側570-148).
//   Same-name count (same brand or operator only): をにわ — Tabelog’s name search shows only this shop; the invoice holder
//   is 株式会社FranK of Osaka (NTA register) and a web search found nothing more — drafted and flagged as a non-local
//   operator. くらした — invoice holder an individual, 蔵下 智; 椿 — 株式会社椿 at the shop’s own lot; one shop each.
//   Large-parent list checked.
//   Service charges, checked against Tabelog’s Japanese original: をにわ 別途お通し代あり; くらした サービス料１０％;
//   椿 サービス料・チャージ：なし ※個室プランには個室料含む (the site adds that private rooms cost extra).
//   Other-diner remarks (Greg 2026-11-06): single remarks about other guests (をにわ July 2026, くらした August 2026,
//   椿 October 2026) left out. Three をにわ reviews (April, May and August 2026) found the staff unfriendly — that is about
//   service, summarised and attributed.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-71');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26030888', '棲家 三条店: brand already in data — same ruling as 26004942: 棲家 is already in kyoto.json as kyoto_sumika_tomikoji (棲家 富小路店, same creative-izakaya concept)');
skip('26023298', 'コメダ珈琲店 河原町三条店: chain — Komeda is a national coffee-shop chain');
skip('26018930', '柿千 大丸京都店: chain — a department-store sushi counter; Tabelog’s name search lists 柿千 counters at Hankyu Umeda, Senri Hankyu, Abeno Harukas Kintetsu, Hankyu Kawanishi and others');
skip('26038148', '寿司と串とわたくし 三条大橋店: large parent — the invoice holder T8180001050135 is 株式会社ジェイグループホールディングス (Nagoya, NTA register), a multi-brand restaurant group; the brand also has Nagoya shops');
skip('26044148', 'ミルクノキモチ 大丸京都店: not a place to eat — a doughnut counter in Daimaru with no seats listed on Tabelog');

// ================================================================ 大衆酒場 をにわ 河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040644/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']); const FR = day(['17:00', '23:30']); const SA = day(['12:00', '23:30']); const SU = day(['12:00', '23:00']);
  put({
    id: 'kyoto_taishu_sakaba_woniwa', name: '大衆酒場 をにわ 河原町店 (Taishu Sakaba Woniwa Kawaramachi)', category: 'OMNI',
    lat: 35.008827, lng: 135.770945, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A long izakaya menu of sashimi, salads, hot pots finished with ramen or zosui, fried and teppan dishes, kimbap; no gluten information (Tabelog menu).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Edamame, salted cabbage and chilled tofu are listed, but nothing is said about dashi or sauces; most of the menu is meat and fish (Tabelog menu).',
    hours_raw: 'Monday–Thursday 17:00–23:00, Friday 17:00–23:30, Saturday 12:00–23:30, Sunday and holidays 12:00–23:00; closed on irregular days (Tabelog). An otoshi starter is charged (Tabelog, original 別途お通し代あり). Reservations recommended for window seats (August 2026). Cards, e-money and QR (Tabelog). 71 seats incl. sofas by the windows with a night view (Tabelog; May 2026). Designated smoking area (Tabelog). Ordering by smartphone QR (July and August 2026). On the 9th floor of タカセビル just across Sanjo bridge, 2 min from Keihan Sanjo — not the ground floor, as Google Maps shows (Tabelog; May 2026). Opened 1 February 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: FR, 5: SA, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'West end of Sanjo bridge, 9F over the Kamo — 2 min from Keihan Sanjo',
    cuisine: 'A cheap, lively izakaya with views of the Kamo river and Higashiyama (Tabelog; 2026) · sashimi from ¥659, three-kind platter ¥1,099; beef yukhoe ¥989 (Tabelog) · hot pots from ¥1,099 a head — Japanese chicken, Korean jjigae, Hakata mentaiko motsu — finished with ramen or zosui ¥439 (Tabelog) · salted cabbage ¥329, saliva chicken, pork kimchi, spicy horumon (Tabelog) · meat kimbap and salmon katsu (April and July 2026) · niku-dofu with egg yolk squeezed from a chick-shaped pot (July 2026) · cheap all-you-can-drink; a ¥1,000 anniversary cake (April and August 2026)',
    website: null, gmaps: gm('大衆酒場 をにわ 河原町店'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Sanjo, a 9th-floor Kamo river view] A big, bright, cheap izakaya on the 9th floor just over Sanjo bridge, with sofa seats facing the Kamo river and Higashiyama — book a window for the night view. Sashimi, Korean dishes, hot pots and kimbap, ordered by QR; popular items sell out. Several reviewers found the staff unfriendly. Otoshi charged. Flagged: an Osaka operator.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T4140001112611 is registered to 株式会社FranK of Osaka (NTA register); no other shops of the company were found. Reviewers praise the view, prices and quick drinks (July and August 2026); three reviewers found the staff unfriendly (April, May and August 2026).',
      philosophy: null, specialty: 'Izakaya dishes with a river view.',
      anecdotes: [
        { text: 'On the night of the Gozan Okuribi in August 2026, a passer-by found the window seats full but a table free, and stayed for cheap, quick drinks.', source: R + 'B533941241/' },
        { text: 'An August 2026 diner was told half the QR menu was not actually sold out and could be ordered by asking.', source: R + 'B533661797/' },
      ],
      japanese_sources_summary: '食べログ: 大衆酒場 をにわ 河原町店、居酒屋・肉料理・海鮮、中京区三条通東入ル中島町105 タカセビル 9F、阪急京都河原町駅1A出口から徒歩5分、月〜木 17:00〜23:00、金 17:00〜23:30、土 12:00〜23:30、日・祝 12:00〜23:00、不定休、お通し代あり、カード・電子マネー・QR可、71席 (夜景の見える席)、喫煙所あり、2024年2月1日オープン、刺身、三種盛り1,099円、牛ユッケ、鍋 (水炊き、チゲ、博多明太もつ、白湯) 1人1,099円から、締めのラーメン・雑炊439円、塩キャベツ、よだれ鶏、豚キムチ、適格請求書 T4140001112611 (株式会社FranK、大阪)。口コミ (2026年、英語): 鴨川と東山の眺め、ソファ席、肉キンパ、サーモンカツ、ひよこの器の卵黄をのせる肉豆腐、安い飲み放題、記念日ケーキ1,000円、QRで注文、品切れが多い、スタッフの対応が悪いとの声が複数。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4140001112611', R + 'B507554004/', R + 'B527662479/', R + 'B528528134/', R + 'B528671993/', R + 'B531503263/', R + 'B531606766/', R + 'B533661797/', R + 'B533876792/', R + 'B533941241/', R + 'B534055751/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering on your phone; otoshi charged.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通東入ル中島町105 タカセビル 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008827, 135.770945); cross-checked: GSI 京都府京都市中京区中島町105番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu, tax included; otoshi charged.', last_checked: TODAY, items: [
      it('', '', 'Three-kind sashimi platter', '¥1,099', 'Sashimi', 'ask', 'no', 'Tabelog.', 'sashimi3'),
      it('', '', 'Japanese-style chicken hot pot (per person)', '¥1,099', 'Hot pot', 'ask', 'no', 'Tabelog.', 'mizutaki'),
      it('', '', 'Hakata mentaiko motsu hot pot', '¥1,429', 'Hot pot', 'ask', 'no', 'Tabelog.', 'motsu'),
      it('', '', 'Ramen or zosui to finish', '¥439', 'Hot pot', 'ask', 'no', 'Tabelog.', 'shime'),
      it('', '', 'Salted cabbage', '¥329', 'Small plates', 'ask', 'ask', 'Tabelog.', 'cabbage'),
      it('', '', 'Seared beef yukhoe', '¥989', 'Small plates', 'ask', 'no', 'Tabelog.', 'yukhoe'),
    ] }, {
    cuisine: '鴨川と東山を望む手頃でにぎやかな居酒屋 (食べログ、2026年)・刺身659円から、三種盛り1,099円、炙り牛ユッケ989円 (食べログ)・鍋は1人1,099円から (水炊き、韓国チゲ、博多明太もつ)、締めのラーメンか雑炊439円 (食べログ)・塩キャベツ329円、よだれ鶏、豚キムチ、ピリ辛ホルモン炒め (食べログ)・肉キンパとサーモンカツ (2026年4・7月)・ひよこの器から卵黄をのせる肉豆腐 (2026年7月)・安い飲み放題、記念日ケーキ1,000円 (2026年4・8月)',
    neighborhood: '三条大橋の西詰、鴨川を見下ろす9階。京阪三条から徒歩2分',
    gf_detail: '要確認。刺身、サラダ、ラーメンか雑炊で締める鍋、揚げ物と鉄板焼き、キンパなど居酒屋の品数が多い。グルテンの情報はない (食べログのメニュー)。',
    vegan_detail: '要確認。枝豆、塩キャベツ、冷奴があるが、出汁やたれについては書かれておらず、ほとんどが肉と魚 (食べログのメニュー)。',
    notes: '[居酒屋・三条、9階から鴨川の眺め] 三条大橋を渡ってすぐのビル9階、鴨川と東山を望むソファ席のある大きくて明るい手頃な居酒屋。夜景なら窓際を予約。刺身、韓国料理、鍋、キンパをQRで注文。人気の品は売り切れも。スタッフの対応が悪いとの声が複数。お通し代あり。大阪の運営会社 (要確認)。',
  });
}

// ================================================================ 祇園 くらした
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016704/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.gion-kurashita.com/';
  const H = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_kurashita', name: '祇園 くらした (Gion Kurashita)', category: 'OMNI',
    lat: 35.002476, lng: 135.775674, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki, yudofu, Tanba-jidori hot pot with Kujo onions and hamo-shabu finished with zosui; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the yudofu kaiseki includes sashimi, and the hot pots are chicken broth or hamo (2026 reviews; Tabelog).',
    hours_raw: '12:00–15:00 (L.O. 13:30) and 17:00–22:00 (L.O. 20:00) daily (Tabelog). Reservations accepted (Tabelog). Service charge 10% (Tabelog, original サービス料１０％). Cards, e-money and QR (Tabelog). 41 seats: 5 at the counter and 36 at tables and in tatami rooms; parties up to 18 (Tabelog). Non-smoking (Tabelog). Maiko can be arranged for parties upstairs (Tabelog). On Hanamikoji in south Gion, 5 min from Keihan Gion-Shijo (Tabelog). Opened 11 September 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hanamikoji, south Gion — 5 min from Keihan Gion-Shijo',
    cuisine: 'Seasonal Kyoto kaiseki, yudofu and hot pots (own site; Tabelog) · Tanba-jidori hot pot in a broth simmered two days, with Kujo green onions (Tabelog) · yudofu kaiseki for lunch (own site); a ¥6,500 course of yudofu and sashimi (August 2026) · hamo-shabu course ¥7,000, to the end of October, with small dishes and zosui (October 2026) · courses on Tabelog from ¥6,050 to ¥25,300 · sake such as Aozora and Tamagawa (Tabelog); Iyo Mankai of ancient red rice (August 2026)',
    website: SITE, gmaps: gm('祇園 くらした'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto kaiseki · Hanamikoji, yudofu and jidori hot pot] A calm Hanamikoji restaurant behind a menu-less front, with a five-seat counter, tables and tatami rooms: yudofu kaiseki at lunch, Tanba-jidori hot pot with Kujo onions, hamo-shabu in summer, and courses from about ¥6,000. Maiko can be booked for parties upstairs. 10% service charge.',
    chef_bio: { chef_name: '蔵下 智 (reading not sourced)', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'Tabelog’s invoice number T2810961127739 is registered to an individual, 蔵下 智 (NTA register). Tabelog’s shop text says counter guests enjoy watching the cooking and talking with the cooks. An October 2026 diner found the owner kind and helpful.',
      philosophy: null, specialty: 'Tanba-jidori hot pot; yudofu kaiseki.',
      anecdotes: [
        { text: 'An October 2026 pair booked the hamo-shabu course the day before, added more hamo and vegetables, and were directed by the owner to a nearby shop for Gion Matsuri souvenirs.', source: R + 'B537679225/' },
        { text: 'An August 2026 diner tried Iyo Mankai, a sake from ancient red rice with a plum-wine sweetness.', source: R + 'B534306489/' },
      ],
      japanese_sources_summary: '公式サイト: 祇園京料理くらした、花見小路の和食京料理店、懐石料理、湯豆腐、水炊きなどの鍋物、鱧、個室お座敷とカウンター、湯豆腐会席などのランチ、接待や顔合わせにも。食べログ: 日本料理・海鮮、東山区祇園町南側570-157、京阪祇園四条駅から徒歩5分、12:00〜15:00 (L.O.13:30)、17:00〜22:00 (L.O.20:00)、サービス料10%、カード・電子マネー・QR可、41席 (カウンター5、テーブル36)、禁煙、2010年9月11日オープン、二日炊いたスープの丹波地鶏の鍋と九条ねぎ、日本酒はAozoraとTamagawaなど、2階で舞妓さんの宴席も、コース6,050〜25,300円、適格請求書 T2810961127739 (蔵下 智)。口コミ (2026年、英語): 湯豆腐と刺身の6,500円のコース、伊予の古代米の酒、鱧しゃぶのコース7,000円と雑炊。',
      confidence: 'medium', sources: [TB, SITE, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=2810961127739', R + 'B520839872/', R + 'B534306489/', R + 'B537679225/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter, tables and tatami rooms; 10% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-157',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002476, 135.775674); GSI gives only the large lot 京都府京都市東山区祇園町南側570番地; OSM reverse confirms 祇園町南側 — kept the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B534306489/', R + 'B537679225/'],
    price_note: 'Prices from 2026 reviews and Tabelog’s course list; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Yudofu and sashimi course', '¥6,500', 'Courses', 'ask', 'no', 'August 2026.', 'yudofu'),
      it('', '', 'Hamo-shabu course (to end of October)', '¥7,000', 'Courses', 'ask', 'no', 'October 2026.', 'hamo'),
      it('', '', 'Tanba-jidori hot pot with Kujo onions', '', 'Hot pot', 'ask', 'no', 'Tabelog.', 'jidori'),
    ] }, {
    cuisine: '季節の京懐石、湯豆腐、鍋物 (公式サイト、食べログ)・二日炊いたスープの丹波地鶏の鍋と九条ねぎ (食べログ)・昼は湯豆腐会席 (公式サイト)、湯豆腐と刺身の6,500円のコース (2026年8月)・10月末までの鱧しゃぶのコース7,000円、小鉢と雑炊 (2026年10月)・食べログのコースは6,050〜25,300円・Aozora、Tamagawaなどの日本酒 (食べログ)、古代米の伊予の酒 (2026年8月)',
    neighborhood: '祇園南の花見小路。京阪祇園四条から徒歩5分',
    gf_detail: '要確認。京懐石、湯豆腐、九条ねぎの丹波地鶏の鍋、雑炊で締める鱧しゃぶ。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。湯豆腐の会席に刺身が入り、鍋は鶏のスープか鱧 (2026年の口コミ、食べログ)。',
    notes: '[京懐石・花見小路、湯豆腐と地鶏の鍋] 品書きを出さない構えの花見小路の落ち着いた店。カウンター5席、テーブル、座敷。昼は湯豆腐会席、九条ねぎの丹波地鶏の鍋、夏は鱧しゃぶ、コースは約6,000円から。2階の宴席に舞妓さんも。サービス料10%。',
  });
}

// ================================================================ 祇園 椿
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027450/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://giontsubaki.com/';
  const H = day(['11:30', '14:00'], ['18:00', '23:30']);
  put({
    id: 'kyoto_gion_tsubaki_kappo', name: '祇園 椿 (Gion Tsubaki)', category: 'OMNI',
    lat: 35.002976, lng: 135.775796, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki and à la carte Japanese dishes, grilled fish, Chateaubriand, clay-pot rice; the shop asks to be told about allergies when booking (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish, crab and beef; small dishes include marinated tuna and grouper (2025–2026 reviews).',
    hours_raw: '11:30–14:00 (reservation only) and 18:00–23:30 (L.O. 23:00); closed Sunday and the 1st and 3rd Monday (own site). Tabelog lists Monday–Saturday 11:30–14:00 and 18:00–22:30 — the shop’s own hours are used. Reservations accepted; seat-only bookings are asked for one order each (Tabelog). No service charge or cover; private-room plans include a room fee (Tabelog, original サービス料・チャージ：なし ※個室プランには個室料含む). Cards and PayPay (Tabelog). 14 counter seats, a private room for 2–6 downstairs and three rooms upstairs for up to 24 (own site). Maiko and geiko can be arranged (own site). Non-smoking (Tabelog). At the north-west corner of 松竹小路 in south Gion (own site). Opened 26 May 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South Gion, on a stone-paved lane — 10 min from Keihan Gion-Shijo',
    cuisine: 'Seasonal Kyoto cooking at a 14-seat counter or in private rooms; omakase ¥22,000 including tax and service, courses to your budget, and à la carte (own site) · à la carte begins with three small starters, then seasonal dishes such as amadai in spring (April 2026) · lunch course ¥7,000 with marinated grouper (August 2026); bonus marinated tuna (August 2026) · kaiseki with fried ginkgo, sashimi, grilled sawara, crab, Chateaubriand and matsutake rice (December 2025) · simmered eggplant and habutae dessert (October 2026) · homemade karasumi (June 2026) · clay-pot rice, leftover rice wrapped as onigiri to take home (July and October 2026) · Alsace Riesling about ¥10,000 a bottle (October 2026)',
    website: SITE, gmaps: gm('祇園 椿'), menu_url: SITE,
    notes: '[Kappo · south Gion, counter and private rooms] A warm south-Gion restaurant with a 14-seat counter and private rooms: seasonal à la carte starting with three small bites, or omakase ¥22,000 including service, and lunch courses around ¥7,000. Homemade karasumi and clay-pot rice; maiko can be arranged. No service charge. Closed Sunday and 1st and 3rd Mondays.',
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed)'], origin: null,
      background: 'Run by 株式会社椿, registered at the shop’s own lot (NTA register). Tabelog’s shop text invites guests to watch and chat with the chefs at the counter. Reviewers describe a friendly owner and staff who remember returning guests (June and October 2026).',
      philosophy: 'Seasonal ingredients prepared to be colourful and lovely to look at (Tabelog).', specialty: 'Seasonal à la carte; homemade karasumi.',
      anecdotes: [
        { text: 'A July 2026 diner who could not finish the course had the last dish, the seasoned rice, packed as onigiri and enjoyed it the next day.', source: R + 'B533048765/' },
        { text: 'An October 2026 group of six at a pre-wedding family meeting all had seconds of the clay-pot rice, and the staff offered to take photos.', source: R + 'B538010150/' },
        { text: 'A June 2026 visitor came on the recommendation of a geisha at the teahouse the family visits every year.', source: R + 'B532288639/' },
      ],
      japanese_sources_summary: '公式サイト: 祇園 椿、東山区祇園町南側570-148 (松竹小路北西角)、11:30〜14:00 (予約のみ)、18:00〜23:30 (L.O.23:00)、日曜と第1・第3月曜定休、1階カウンター14席・個室1室 (2〜6名)、2階3室 (2〜24名)、おまかせ料理22,000円 (税サ込)、予算に応じたコース、単品料理も、個室料別途、舞妓・芸妓の手配。食べログ: 日本料理・海鮮・肉料理、サービス料・チャージなし、カード・PayPay可、禁煙、2016年5月26日オープン、適格請求書 T2130001060152 (株式会社椿)。口コミ (2025〜2026年、英語): アラカルトは先付3品から、甘鯛、7,000円の昼のコース、ハタの漬け、まぐろの漬け、銀杏の素揚げ、鰆の焼き物、蟹、シャトーブリアン、松茸の炊き込みご飯、茄子の煮物、羽二重のデザート、自家製からすみ、土鍋ご飯、おにぎりの持ち帰り、アルザスのリースリング。',
      confidence: 'medium', sources: [TB, SITE, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=2130001060152', R + 'B468918531/', R + 'B476135774/', R + 'B511112335/', R + 'B518483245/', R + 'B526390140/', R + 'B532288639/', R + 'B533048765/', R + 'B534541805/', R + 'B536733021/', R + 'B538010150/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly to first-timers (2026 reviews); private rooms; no service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-148',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002976, 135.775796); GSI gives only the large lot 京都府京都市東山区祇園町南側570番地; OSM reverse confirms 祇園町南側; kyoto_niku_no_takumi_miyoshi_gion is 5.9 m away — kept the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B511112335/'],
    price_note: 'Omakase price from the shop’s site (tax and service included); lunch course from an August 2026 review.', last_checked: TODAY, items: [
      it('おまかせ料理', 'omakase ryori', 'Omakase (tax and service included)', '¥22,000', 'Courses', 'ask', 'no', 'Own site.', 'omakase'),
      it('', '', 'Lunch course', '¥7,000', 'Lunch', 'ask', 'no', 'August 2026.', 'lunch'),
      it('', '', 'Clay-pot rice', '', 'Rice', 'ask', 'ask', 'October 2026.', 'donabe'),
      it('', '', 'Homemade karasumi', '', 'À la carte', 'ask', 'no', 'June 2026.', 'karasumi'),
    ] }, {
    cuisine: '14席のカウンターか個室で季節の京料理。おまかせ料理22,000円 (税サ込)、予算に応じたコース、単品料理も (公式サイト)・アラカルトは先付3品から、春は甘鯛など季節の品 (2026年4月)・ハタの漬けの7,000円の昼のコース (2026年8月)、おまけのまぐろの漬け (2026年8月)・銀杏の素揚げ、刺身、鰆の焼き物、蟹、シャトーブリアン、松茸の炊き込みご飯の会席 (2025年12月)・茄子の煮物、羽二重のデザート (2026年10月)・自家製からすみ (2026年6月)・土鍋ご飯、残りはおにぎりにして持ち帰りも (2026年7・10月)・アルザスのリースリングがボトル約10,000円 (2026年10月)',
    neighborhood: '祇園南の石畳の路地。京阪祇園四条から徒歩10分',
    gf_detail: '要確認。会席とアラカルトの和食、焼き魚、シャトーブリアン、土鍋ご飯。アレルギーは予約時に伝える (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、蟹、牛の会席で、小鉢にまぐろやハタの漬け (2025〜2026年の口コミ)。',
    notes: '[割烹・祇園南、カウンターと個室] 14席のカウンターと個室のある祇園南の温かい店。先付3品から始まる季節のアラカルトか、サービス料込み22,000円のおまかせ、昼は約7,000円のコース。自家製からすみと土鍋ご飯、舞妓さんの手配も。サービス料なし。日曜と第1・第3月曜定休。',
  });
}

save();
