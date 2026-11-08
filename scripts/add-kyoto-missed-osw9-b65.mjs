// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 65.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + Hey Chou (takeaway stand for bite-sized cream puffs on Rokkaku; since April 2026)
//   + リーブル Libre's (Kiyamachi bar of pizzas from scratch, darts and sofas; open to 2 am; since 2015)
//   + おばんざい 菜の花 Obanzai Nanohana (obanzai izakaya and lunch sets in a converted house on Gokomachi)
//   + もつ鍋 利光 Rikoh (motsunabe and shabu-shabu by a Kyushu-born owner; since 2020)
//   - フラワー — no reviews
//   - セマウル食堂 河原町店 — chain (Korean chain; Japan shops in Shin-Okubo, Tsuruhashi, Koiwa, Nakano, Kumamoto and more)
//   - バーガーキング 寺町京極店 — chain (Burger King)
//   Same-name counts first (data and queue-status.jsonl): none for Hey Chou, セマウル, バーガーキング, フラワー (only as a
//   word in other records); リーブル, 菜の花 and 利光 appear only inside other records' text (利光 is a Tokyo owner's
//   given name), no record of these shops. No earlier rulings. None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: リーブル 「ご予約の場合に限りチャージ料なし、年末年始に
//   限りチャージ有り」 (no charge with a booking; the wording leaves walk-ins unclear; a charge at New Year); 利光
//   「テーブルサービス料及びお通し代として、お一人550円」; Hey Chou and 菜の花 have no section (a January 2023 review
//   reports a 20% New Year service charge at 菜の花).
//   Halal: none claimed. Libre's lists vegan, vegetarian and gluten-free options as Tabelog tags of unknown provenance —
//   recorded as "ask" only.
//   Pins (checked against main): all four ≥ 10 m from every other record; no offsets.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-65');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26037959', 'no reviews');
skip('26037317', 'chain: セマウル食堂 (Korean chain) — Japan shops include Shin-Okubo, Tsuruhashi, Koiwa, Nakano and Kumamoto besides Kawaramachi');
skip('26034731', 'chain: Burger King');

// ================================================================ Hey Chou
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044979/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_hey_chou_rokkaku', name: 'Hey Chou (Cream Puff Senmonten Hey Chou)', category: 'OMNI',
    lat: 35.007291, lng: 135.767078, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: choux pastry with a cookie crust (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: custard cream puffs (2026 reviews).',
    hours_raw: 'Hours not listed (Tabelog). Takeaway only; no bookings (Tabelog). Cards, e-money and QR accepted (Tabelog). A small stand on Rokkaku facing Rokkun Plaza, between Teramachi and Shinkyogoku, about 6 min from Kyoto-Kawaramachi (April, May and November 2026 reviews).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokkaku, between Teramachi and Shinkyogoku — 6 min from Kawaramachi Stn',
    cuisine: 'Bite-sized custard cream puffs with a crunchy cookie top, served on a toothpick with a little flag: 6 for ¥500, 10 for ¥800 (April–November 2026); a "mini brûlée cream puff" (July 2026); tapioca drinks and soft serve (April 2026); bag and ice pack ¥40 (October 2026)',
    website: null, gmaps: gm('Hey Chou 京都 六角'), menu_url: null,
    notes: '[Cream puffs · Rokkaku] A tiny takeaway stand off Shinkyogoku selling one thing well: bite-sized cream puffs with a crunchy top and cold, runny custard, 6 for ¥500 or 10 for ¥800, plus tapioca drinks. Best eaten on the spot; quite sweet.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 21 April 2026 in the former site of a bubble-tea shop facing Rokkun Plaza (April 2026 review).',
      philosophy: null,
      specialty: 'Mini cream puffs.',
      anecdotes: [
        { text: 'An April 2026 visitor on opening week bought ten for ¥800 and warned of the pigeons in Rokkun Plaza.', source: R + 'B527276520/' },
        { text: 'A July 2026 visitor saved a box for the Shinkansen; an hour and a half later the pastry had gone soft and the cream squirted out.', source: R + 'B531260575/' },
        { text: 'An October 2026 visitor expected several flavours but found only one kind of cream puff — the choice was how many — and found it too sweet.', source: R + 'B536716974/' },
      ],
      japanese_sources_summary: '食べログ: Hey Chou、シュークリーム、中京区桜之町430-8、京都河原町駅から415m、営業時間の記載なし、予約不可、カード・電子マネー・QR 可。口コミ (2026年4月〜11月、英語): 2026年4月21日オープン、Rokkun Plaza に面した元タピオカ店の場所、一口サイズのシュークリーム6個500円・10個800円、クッキー生地のサクサクの上部と冷たいカスタード、旗付きの楊枝、ミニブリュレのシュークリーム、タピオカドリンクとソフトクリーム、袋と保冷剤40円、甘め、すぐ食べるのがおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B527276520/', R + 'B528765972/', R + 'B530778076/', R + 'B531061226/', R + 'B531260575/', R + 'B532736699/', R + 'B532862683/', R + 'B536716974/', R + 'B538639463/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point-and-pay takeaway stand.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区桜之町430-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April–November 2026.' },
    pin_source: `Tabelog ${TB} (35.007291, 135.767078); cross-checked: GSI 京都府京都市中京区桜之町430番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530778076/', R + 'B536716974/'],
    price_note: 'Prices from May–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mini cream puffs (6)', '¥500', 'Cream puffs', 'no', 'no', 'May–November 2026 reviews.', 'puffs_6'),
      it('', '', 'Mini cream puffs (10)', '¥800', 'Cream puffs', 'no', 'no', 'April–October 2026 reviews.', 'puffs_10'),
    ] }, {
    cuisine: 'サクサクのクッキー生地をのせた一口サイズのカスタードシュークリームを、小さな旗付きの楊枝で: 6個500円、10個800円 (2026年4月〜11月)、ミニブリュレのシュークリーム (2026年7月)、タピオカドリンクとソフトクリーム (2026年4月)、袋と保冷剤40円 (2026年10月)',
    neighborhood: '六角通、寺町と新京極の間。河原町駅から徒歩6分',
    gf_detail: 'グルテンフリー不可。クッキー生地のシュー皮 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。カスタードのシュークリーム (2026年の口コミ)。',
    notes: '[シュークリーム・六角] 新京極近くの小さな持ち帰りの店。サクサクの上部と冷たくとろけるカスタードの一口シュークリームが6個500円、10個800円。タピオカドリンクも。その場で食べるのがおすすめ、甘め。',
  });
}

// ================================================================ リーブル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26025359/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '26:00']);
  put({
    id: 'kyoto_libres_kiyamachi', name: "リーブル (Libre's)", category: 'OMNI',
    lat: 35.007462, lng: 135.770129, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog tags gluten-free options, but the known dishes — pizza from scratch, macaroni, cheese spring rolls — are wheat (2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog tags vegan and vegetarian options; no review describes a vegan dish.',
    hours_raw: 'Daily 18:00–02:00, including holidays, Golden Week and New Year (Tabelog). Bookings taken; private hire for 10 or more at ¥4,400 (10–15 people) or ¥3,500 (15–50) per person (Tabelog). No charge with a booking, a charge at New Year (Tabelog Japanese original 「ご予約の場合に限りチャージ料なし、年末年始に限りチャージ有り」). Cards; no e-money or QR (Tabelog). 30 seats — 8 at the counter, sofas; smoking allowed; darts, sports viewing, English menu (Tabelog). Down an alley off Kawaramachi south of Sanjo (Tabelog; May 2025 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi–Kawaramachi, south of Sanjo — 5 min from Sanjo Stn',
    cuisine: 'Bar food and pizza made from the dough up: Margherita ¥1,500, extra Parmigiano ¥220 (May 2025); cheese spring rolls, ajillo, cheese macaroni (October 2025); beer poured with pictures and words in the foam (October 2025); cocktails, gin soda, wine (2025 reviews)',
    website: null, gmaps: gm("Libre's 京都 木屋町"), menu_url: null,
    notes: "[Bar & pizza · Kiyamachi] A brick-walled alley bar with a lit counter, sofas and darts, known for big ¥1,500 pizzas made from scratch, foam-art beers and cocktails until 2 am. Smoking allowed. About ¥2,000–3,000.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 25 April 2015 (Tabelog). A brick-fronted building with ironwork gates in an alley; inside, a lit counter, posters, darts and sofa seats (May 2025 review).',
      philosophy: 'The pizza avoids extra-virgin olive oil so it does not overpower the flavour (May 2025 review).',
      specialty: 'Pizza made from scratch.',
      anecdotes: [
        { text: 'A May 2025 diner who had walked past the alley for ten years without noticing it came for the ¥1,500 Margherita: a thick, chewy American-style crust with cheese to the edge and basil inside.', source: R + 'B506502282/' },
        { text: 'Two friends in October 2025 got beers with pictures and words drawn in the foam, and took the leftovers home.', source: R + 'B515678366/' },
      ],
      japanese_sources_summary: "食べログ: Libre's、バル・ピザ・居酒屋、中京区河原町通三条下る2丁目山崎町258 珠光ビル木屋町1F、三条駅から272m、毎日 18:00〜翌2:00 (祝日・GW・年末年始も営業)、予約可、10名以上の貸切は1人4,400円 (10〜15名)・3,500円 (15〜50名)、予約の場合に限りチャージ料なし、年末年始に限りチャージ有り、カード可、電子マネー・QR 不可、30席 (カウンター8)、喫煙可、ダーツ、英語メニュー、ヴィーガン・ベジタリアン・グルテンフリーの表示、2015年4月25日オープン。口コミ (2025年、英語): 生地から作るピザ (マルゲリータ1,500円、パルミジャーノ追加220円)、レンガの外観と路地、チーズ春巻き、アヒージョ、チーズマカロニ、泡に絵や文字を描くビール。",
      confidence: 'medium', sources: [TB, R + 'B506502282/', R + 'B513243875/', R + 'B515678366/', R + 'B517616647/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条下る2丁目山崎町258 珠光ビル木屋町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2025. The website on Tabelog (libres-kyoto.jp) did not resolve on ' + TODAY + '.' },
    pin_source: `Tabelog ${TB} (35.007462, 135.770129); cross-checked: GSI 京都府京都市中京区山崎町258番地 (lot; a large block) 115m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506502282/', TB],
    price_note: 'Pizza prices from a May 2025 review; private-hire prices from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Margherita pizza', '¥1,500', 'Pizza', 'no', 'no', 'May 2025 review.', 'margherita'),
      it('', '', 'Extra Parmigiano-Reggiano', '¥220', 'Pizza', 'ask', 'no', 'May 2025 review.', 'parmigiano'),
      it('', '', 'Cheese macaroni', '', 'Plates', 'no', 'no', 'October 2025 review.', 'cheese_macaroni'),
    ] }, {
    cuisine: '生地から作るピザとバーの料理: マルゲリータ1,500円、パルミジャーノ追加220円 (2025年5月)、チーズ春巻き、アヒージョ、チーズマカロニ (2025年10月)、泡に絵や文字を描くビール (2025年10月)、カクテル、ジンソーダ、ワイン (2025年の口コミ)',
    neighborhood: '木屋町・河原町、三条の南。三条駅から徒歩5分',
    gf_detail: '要確認。食べログにグルテンフリーの表示はあるが、知られている料理 (生地から作るピザ、マカロニ、チーズ春巻き) は小麦 (2025年の口コミ)。',
    vegan_detail: '要確認。食べログにヴィーガン・ベジタリアンの表示。ヴィーガン料理を書いた口コミはない。',
    notes: '[バーとピザ・木屋町] 路地のレンガ造りのバー。照明のカウンター、ソファ、ダーツがあり、生地から作る大きな1,500円のピザ、泡に絵を描くビール、カクテルを深夜2時まで。喫煙可。2,000〜3,000円ほど。',
  });
}

// ================================================================ おばんざい 菜の花
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000453/'; const R = TB + 'dtlrvwlst/';
  const N = day(['17:45', '22:00']); const W = day(['12:00', '14:30'], ['17:45', '22:00']);
  put({
    id: 'kyoto_obanzai_nanohana', name: 'おばんざい 菜の花 (Obanzai Nanohana)', category: 'OMNI',
    lat: 35.007019, lng: 135.766357, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled fish, tofu and simmered vegetables, but also tempura, nama-fu (wheat gluten) and soy-based dishes (2018–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many tofu, yuba and vegetable obanzai, but dashi and fish are likely throughout; ask (2018–2026 reviews).',
    hours_raw: 'Mon, Thu, Fri 17:45–22:00; Sat, Sun 12:00–14:30 and 17:45–22:00; closed Tue and Wed; hours may change (Tabelog). Bookings taken (Tabelog). Cards (JCB, AMEX, Diners) only for dinners of ¥3,000 or more a head; no e-money (Tabelog); at a January 2023 lunch, cash or PayPay only (review). A 20% service charge at New Year (January 2023 review). Non-smoking; sunken counter and tables, a private room at the back; shoes off at the entrance (Tabelog; 2021–2023 reviews). On Gokomachi south of Rokkaku (Tabelog).',
    hours: { 0: N, 3: N, 4: N, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gokomachi, south of Rokkaku — 6 min from Kawaramachi Stn',
    cuisine: 'Kyoto obanzai: an obanzai set in courses at night (oboro tofu, roast beef, nama-fu and yomogi-fu dengaku, teriyaki fish, sake-lees cabbage and pork, tempura with hamo; January 2023); lunch sets of grilled fish, three obanzai, tempura, miso soup, rice and dessert — obanzai lunch ¥1,120 (January 2023) and a Nanohana lunch; fried yuba-wrapped tofu, uzaku, vegetable tempura, tofu gratin, chirimen-sansho rice (April 2025); saba sushi, white-miso oden, natto tempura; draft beer and junmai ginjo sake (2018–2026 reviews)',
    website: null, gmaps: gm('おばんざい 菜の花 御幸町'), menu_url: null,
    notes: '[Obanzai · Gokomachi] A non-smoking obanzai restaurant in a converted house with a sunken counter: Kyoto home-style plates — nama-fu dengaku, yuba, tofu gratin, grilled fish, tempura — as weekend lunch sets or an evening course with sake. Lunch about ¥1,000–2,000, dinner ¥3,000–6,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewed on Tabelog since 2013. A converted residence with a sunken counter, tables over sunken kotatsu and a large back room (2021–2022 reviews). A queue of about eight before lunch opening in October 2022 (review). Reviews in December 2021 and January 2023 found the service hurried or curt.',
      philosophy: null,
      specialty: 'Kyoto obanzai and nama-fu dengaku.',
      anecdotes: [
        { text: 'On New Year\'s night 2023 a diner escaping the smoky izakaya of Kiyamachi took the end of the sunken counter for the obanzai course — oboro tofu, roast beef, fu dengaku, hamo tempura — and paid just over ¥6,000 with the 20% New Year charge.', source: R + 'B459412599/' },
        { text: 'A January 2023 diner liked the ¥1,120 obanzai lunch but was told firmly "only cash or PayPay" and found the room cold.', source: R + 'B459608415/' },
        { text: 'A January 2023 diner ordered the nama-fu dengaku twice.', source: R + 'B458786212/' },
        { text: 'A May 2026 visitor was surprised by how chewy the nama-fu was, and found the prices very reasonable.', source: R + 'B527365002/' },
      ],
      japanese_sources_summary: '食べログ: おばんざい 菜の花、居酒屋・日本料理、中京区御幸町通六角下ル伊勢屋町338、京都河原町駅から415m、月・木・金 17:45〜22:00、土・日 12:00〜14:30・17:45〜22:00、火・水休み (変更の可能性あり)、予約可、カード (JCB・AMEX・Diners) は夜1人3,000円以上の場合のみ、電子マネー不可、個室、掘りごたつ、禁煙。口コミ (2013〜2026年、英語): 民家を改装、掘りごたつのカウンター、おばんざいのコース (おぼろ豆腐、ローストビーフ、生麩とよもぎ麩の田楽、鱧の天ぷら)、正月は20%のサービス料 (2023年1月)、おばんざいランチ1,120円、昼は現金か PayPay (2023年1月)、湯葉で巻いた豆腐の揚げ物、uzaku、豆腐グラタン、ちりめん山椒ご飯 (2025年4月)、もちもちの生麩 (2026年5月)。',
      confidence: 'medium', sources: [TB, R + 'B404004300/', R + 'B443572818/', R + 'B455765071/', R + 'B458786212/', R + 'B459412599/', R + 'B459608415/', R + 'B496185856/', R + 'B503491547/', R + 'B527365002/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; Japanese-style seating.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通六角下ル伊勢屋町338',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.007019, 135.766357); cross-checked: GSI 京都府京都市中京区伊勢屋町338番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B459608415/', R + 'B459412599/'],
    price_note: 'Prices from January 2023 reviews (older than the other evidence).', last_checked: TODAY, items: [
      it('', '', 'Obanzai lunch', '¥1,120', 'Lunch', 'ask', 'no', 'January 2023 review.', 'obanzai_lunch'),
      it('', '', 'Obanzai course (New Year night, with sake and 20% charge)', 'about ¥5,720', 'Dinner', 'ask', 'no', 'January 2023 review.', 'obanzai_course'),
      it('', '', 'Nama-fu dengaku', '', 'Obanzai', 'no', 'ask', '2018, 2023, 2025 and 2026 reviews.', 'namafu_dengaku'),
      it('', '', 'Tofu gratin', '', 'Obanzai', 'ask', 'no', 'April 2025 review.', 'tofu_gratin'),
    ] }, {
    cuisine: '京のおばんざい: 夜はおばんざいのコース (おぼろ豆腐、ローストビーフ、生麩とよもぎ麩の田楽、魚の照り焼き、白菜と豚の酒粕煮、鱧の天ぷら、2023年1月)、昼は焼き魚、おばんざい3品、天ぷら、味噌汁、ご飯、デザートの定食 (おばんざいランチ1,120円、2023年1月) と菜の花ランチ、湯葉で巻いた豆腐の揚げ物、uzaku、野菜の天ぷら、豆腐グラタン、ちりめん山椒ご飯 (2025年4月)、鯖寿司、白味噌のおでん、納豆の天ぷら、生ビールと純米吟醸 (2018〜2026年の口コミ)',
    neighborhood: '御幸町通、六角の南。河原町駅から徒歩6分',
    gf_detail: '要確認。焼き魚、豆腐、炊いた野菜もあるが、天ぷら、生麩、醤油の料理もある (2018〜2026年の口コミ)。',
    vegan_detail: '要確認。豆腐、湯葉、野菜のおばんざいが多いが、出汁や魚が使われている可能性が高い (2018〜2026年の口コミ)。',
    notes: '[おばんざい・御幸町] 民家を改装した禁煙の店で、掘りごたつのカウンター。生麩田楽、湯葉、豆腐グラタン、焼き魚、天ぷらなどの京の家庭料理を、週末の昼の定食や夜のコースと日本酒で。昼は1,000〜2,000円、夜は3,000〜6,000円ほど。',
  });
}

// ================================================================ もつ鍋 利光
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034773/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '23:00']);
  put({
    id: 'kyoto_motsunabe_rikoh', name: 'もつ鍋 利光 (Rikoh)', category: 'OMNI',
    lat: 35.007548, lng: 135.769919, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Motsunabe broth is likely soy- or miso-based and the meal ends with noodles (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef offal hot pot, beef-tail broth, yakiniku and shabu-shabu (2025 reviews).',
    hours_raw: 'Tue–Sun 17:30–23:00; closed Mondays (the next weekday if Monday is a holiday) (Tabelog). Bookings taken; the 2nd-floor private room by booking (Tabelog); courses only in the New Year (January 2025 review). Table service and otoshi charge ¥550 a head, not for children of primary-school age and under (Tabelog Japanese original 「テーブルサービス料及びお通し代として、お一人550円頂戴しております。※小学生以下のお子様を除きます」). Cards and PayPay (Tabelog). 30 seats over two floors; non-smoking; children welcome; wheelchair accessible (Tabelog). 5 min from Keihan Sanjo (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi–Kiyamachi, between Sanjo and Shijo — 5 min from Sanjo Stn',
    cuisine: 'Motsunabe in a beef-tail broth with noodles to finish, yakiniku, and shabu-shabu with broth made the day before (2025 reviews); courses from about ¥10,000 with Omi beef starters (January 2025); a smaller motsunabe portion (February 2025); described as using Sendai beef (May 2025)',
    website: null, gmaps: gm('もつ鍋 利光 京都'), menu_url: null,
    notes: '[Motsunabe & yakiniku · Kawaramachi] A two-floor house restaurant run by a Kyushu-born owner, serving motsunabe in a beef-tail broth, yakiniku and shabu-shabu, mostly as generous courses. Reviews praise the broth more than the offal. About ¥10,000–15,000 a head.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: 'Kyushu (May 2025 review).',
      background: 'Opened 25 August 2020 (Tabelog). Signed autographs of YouTubers and actors on the walls (May 2025 review). The owner is proud of the beef-tail soup used in the motsunabe (May 2025 review).',
      philosophy: null,
      specialty: 'Motsunabe in beef-tail broth.',
      anecdotes: [
        { text: 'At a 2 January 2025 New Year party on the ¥10,000 course, a diner loved the Omi beef starters, the broth and the closing noodles, but could not chew the tripe.', source: R + 'B498590922/' },
        { text: 'A March 2025 diner tried the shabu-shabu, whose broth is made a day ahead, and found the course almost too much to finish.', source: R + 'B502952116/' },
        { text: 'A February 2025 diner had yakiniku at the counter and finished with a small motsunabe, lighter than expected.', source: R + 'B514508823/' },
        { text: 'A May 2025 pair were the only customers and found the beef-tail broth an acquired taste.', source: R + 'B506759063/' },
      ],
      japanese_sources_summary: '食べログ: もつ鍋 利光、もつ鍋・焼肉・居酒屋、中京区山崎町236-5、京阪三条駅から徒歩5分、火〜日 17:30〜23:00、月曜休み (祝日の場合は翌平日)、予約可、テーブルサービス料及びお通し代として1人550円 (小学生以下を除く)、カードと PayPay 可、30席 (1階カウンター8・テーブル10、2階テーブル12、個室)、禁煙、子ども可、車いす可、2020年8月25日オープン。口コミ (2025年、英語): 九州出身の店主、牛テールのスープのもつ鍋と締めの麺、前日から仕込むしゃぶしゃぶの出汁、Omi beef の前菜、正月はコースのみ (10,000円)、焼肉、Sendai beef、壁に YouTuber や俳優のサイン。',
      confidence: 'medium', sources: [TB, R + 'B498590922/', R + 'B502952116/', R + 'B506759063/', R + 'B514508823/', R + 'B514707571/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区山崎町236-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2025.' },
    pin_source: `Tabelog ${TB} (35.007548, 135.769919); cross-checked: GSI 京都府京都市中京区山崎町236番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498590922/', TB],
    price_note: 'Course price from a January 2025 review; charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Course (New Year, with motsunabe)', '¥10,000', 'Courses', 'ask', 'no', 'January 2025 review.', 'course'),
      it('', '', 'Table service and otoshi charge (per person)', '¥550', 'Charge', 'ask', 'ask', 'Tabelog.', 'charge'),
      it('', '', 'Motsunabe (small portion)', '', 'Hot pot', 'ask', 'no', 'February 2025 review.', 'motsunabe'),
    ] }, {
    cuisine: '牛テールのスープのもつ鍋と締めの麺、焼肉、前日から出汁を仕込むしゃぶしゃぶ (2025年の口コミ)。Omi beef の前菜がつく約10,000円のコース (2025年1月)、少なめのもつ鍋 (2025年2月)、Sendai beef を使うという口コミも (2025年5月)',
    neighborhood: '河原町・木屋町、三条と四条の間。三条駅から徒歩5分',
    gf_detail: '要確認。もつ鍋のスープは醤油か味噌の可能性が高く、締めは麺 (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛もつの鍋、牛テールのスープ、焼肉、しゃぶしゃぶ (2025年の口コミ)。',
    notes: '[もつ鍋と焼肉・河原町] 九州出身の店主の2階建ての店。牛テールのスープのもつ鍋、焼肉、しゃぶしゃぶを、ボリュームのあるコースで。口コミの評価はもつよりスープが高い。1人1万〜1万5千円ほど。',
  });
}

save();
