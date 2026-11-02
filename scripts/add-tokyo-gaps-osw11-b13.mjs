// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 13.
//   + Parlor 305 (one-woman wine bistro with Heisei-retro decor, Tomizawa-cho)
//   + 軍鶏拉麺 飛天 Shamo Ramen Hiten (all-shamo ramen by the Tamahide family, next door to 玉ひで; opened December 2025)
//   + 朝伊名 Asaina (Amami and Okinawan izakaya run by a couple from Yoron Island; Horidome-cho)
//   + 蛇の目鮨 Janome Sushi (couple-run neighbourhood sushi counter with cheap lunch sets)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-02).
//   Skipped: 13195652 3 bis (トワビス) — a regular (14 visits) reported it temporarily closing after 26 December 2025;
//   no review since, and no web source shows a reopening. Existence comes before enrichment, so not drafted; taken in
//   its place is the next candidate, 13071289 蛇の目鮨.
//   Dedupe. None is in data/tokyo.json by name or address (富沢町2-1, 1-17-9, 堀留町2-1-14, 2-10-2).
//   Chain check. Hiten is a sister concept of 鳥料理 玉ひで (tokyo3__294, address_ja "〒103-0013 東京都中央区日本橋人形町1-17-10"),
//   run by the Tamahide family — a different brand and format, drafted as its own shop. Janome Sushi: a March 2025
//   reviewer wonders about a link to the closed Janome Zushi Honkan of Shintomicho; unconfirmed, not a chain.
//   Parlor 305, Asaina: single shops.
//   Ramen block left off for Hiten: reviews do not source tare strength or aroma punch, and disagree on richness
//   and noodles (brief LESSONS).
//   Parlor 305's listed website (parlour305.com) does not resolve (2026-11-02), so the record links to Tabelog.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13195652', '3 bis (トワビス), sake bar at 日本橋人形町2-8-7: a 14-visit regular reported it temporarily closing after 26 December 2025 (review B466527435); no later review and no web source shows a reopening — existence unresolved, not drafted');

// ================================================================ Parlor 305
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13160972/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']); const FRI = day(['18:00', '23:00']); const SUN = day(['12:00', '22:00']);
  put({
    id: 'tokyo_parlor_305_tomizawacho', name: 'パーラー305 (Parlor 305)', category: 'OMNI',
    lat: 35.687496, lng: 139.783073, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature dishes are tartines and gratins served with bread (2026 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ham, rillettes, tripe, cheese gratins and dairy desserts.',
    hours_raw: 'Tue and Thu 17:00–23:00, Fri 18:00–23:00 (last order 22:00); Sun 12:00–22:00; closed Mon, Wed and Sat; hours may change (Tabelog). Reservations accepted; diners booked by Instagram DM (April 2026); later evenings are often fully booked, with a 3-hour limit (August 2026). No cards; e-money and PayPay (Tabelog). 20 seats: a counter downstairs, and upstairs by a spiral staircase one table and one low table (Tabelog; July, October 2026). Non-smoking. Opened 1 September 2013 (Tabelog). The listed website, parlour305.com, did not resolve on 2026-11-02.',
    hours: { 1: H, 3: H, 4: FRI, 6: SUN }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Tomizawacho 2-1, a former clothing shop (April 2026) — about 160 m from Ningyocho Stn',
    cuisine: 'Wine bistro: snacks and oven dishes with wine by the glass — red, white, orange, sparkling, some natural (2026 reviews) · April 2026: salad of prosciutto cotto, new onion and tomato ¥1,400; rillettes and bread ¥1,000; beef honeycomb tripe braised with lemon ¥1,000; French onion gratin soup ¥1,000; gratin of leek, shiitake and white-mould cheese ¥1,100; tartine of potato purée, prosciutto and baked Comté ¥800; crème d\'ange with strawberry sauce ¥1,000 (seasonal sauces; passion fruit in August) · also homemade ham with tomato and egg tapenade, meat sauce with mashed potato, mushroom and chicken salads (May–October 2026) · generous glasses, about 150 ml (April 2026); craft beer',
    website: TB, gmaps: gm('パーラー305 富沢町'), menu_url: null,
    notes: "[Bistro · Tomizawa-cho, a one-woman wine bistro with Heisei-era nostalgia] A small wine bistro in a converted clothing shop near Ningyocho, run single-handed by its owner (April 2026). The room is retro-pop: Tamagotchi and riddle books on the shelves, Heisei J-pop playlists chosen by the owner, a counter downstairs and a couple of tables up a spiral staircase. The menu is short and built for wine: a tartine of potato purée, prosciutto and melted Comté, lemon-braised tripe, onion gratin soup, and a light crème d'ange with a seasonal fruit sauce. Glasses are poured generously. One April diner noted that the menu leans on dishes that can be prepared ahead or left in the oven, since one person runs everything. Booking by Instagram DM is wise for later evenings. No cards.",
    chef_bio: { chef_name: null, roles: ['Owner, running the shop alone ("The female owner manages everything by herself", April 2026 review)'], origin: null,
      background: 'Opened 1 September 2013 (Tabelog). The building was a clothing shop before (April 2026 review). The owner curates the seasonal playlist of nostalgic J-pop (April 2026).',
      philosophy: null, specialty: 'Tartine of potato purée, prosciutto and Comté; crème d\'ange.',
      anecdotes: [
        { text: '"The female owner manages everything by herself." — April 2026.', source: R + 'B526502204/' },
        { text: '"The interior is filled with nostalgic decorations like Tamagotchi and a mini dictionary of riddles" — May 2026.', source: R + 'B527728512/' },
        { text: '"… I think it was close to 150ml!" — April 2026, on a glass of wine.', source: R + 'B527566667/' },
      ],
      japanese_sources_summary: '食べログ: パーラー３０５、ビストロ、ワインバー、日本橋富沢町2-1、人形町駅から約160m、火・木17:00〜23:00、金18:00〜23:00、日曜12:00〜22:00、月・水・土休み、予約可、カード不可、電子マネー・PayPay可、20席、禁煙、2013年9月1日オープン、ホームページ parlour305.com (2026年11月2日には開けず)。口コミ(2026年4月〜10月): 女性の店主がひとりで営む、元は洋服店、1階はカウンター、らせん階段の上にテーブル、たまごっちなど平成の懐かしい飾りと J-pop、Instagram の DM で予約、3時間制、グラスワインはたっぷり、生ハムのタルティーヌ、レモンで煮たハチノス、オニオングラタンスープ、グラタン、クレームダンジュ、メニューは少なめという声も。',
      confidence: 'medium', sources: [TB, R + 'B526502204/', R + 'B526835339/', R + 'B527566667/', R + 'B527728512/', R + 'B527995203/', R + 'B531297561/', R + 'B533344289/', R + 'B534752984/', R + 'B537579907/', R + 'B538049484/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small menu; booking by Instagram DM; one person serves.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋富沢町2-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April–October 2026. The listed website does not resolve.' },
    pin_source: `Tabelog ${TB} (35.687496, 139.783073); cross-checked: GSI 東京都中央区日本橋富沢町2番1号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526502204/'],
    price_note: 'Prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tartine of potato purée, prosciutto and Comté', '¥800', 'Food', 'no', 'no', 'April 2026.', 'tartine'),
      it('', '', 'Rillettes and bread', '¥1,000', 'Food', 'no', 'no', 'April 2026.', 'rillettes'),
      it('', '', 'Beef honeycomb tripe braised with lemon', '¥1,000', 'Food', 'ask', 'no', 'April 2026.', 'tripe'),
      it('', '', 'French onion gratin soup', '¥1,000', 'Food', 'no', 'no', 'April 2026.', 'onion_soup'),
      it('', '', 'Crème d\'ange with seasonal fruit sauce', '¥1,000', 'Dessert', 'ask', 'no', 'April 2026.', 'creme_dange'),
    ] }, {
    cuisine: 'ワインのビストロ: つまみとオーブン料理にグラスワイン、赤、白、オレンジ、泡、自然派も (2026年の口コミ)・2026年4月: プロシュート・コットと新玉ねぎとトマトのサラダ1,400円、リエットとパン1,000円、牛のハチノスのレモン煮1,000円、オニオングラタンスープ1,000円、長ねぎと椎茸と白カビチーズのグラタン1,100円、じゃがいものピュレと生ハムと焼いたコンテのタルティーヌ800円、いちごソースのクレームダンジュ1,000円 (ソースは季節で替わり、8月はパッションフルーツ)・自家製ハムとトマトと卵のタプナード、ミートソースとマッシュポテト、きのこや鶏のサラダも (2026年5月〜10月)・グラスはたっぷり約150ml (2026年4月)、クラフトビール',
    neighborhood: '日本橋富沢町2-1、元は洋服店 (2026年4月)。人形町駅から約160m',
    gf_detail: '要確認。名物はタルティーヌとパンを添えたグラタン (2026年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: ハム、リエット、ハチノス、チーズのグラタン、乳製品のデザート。',
    notes: '[ビストロ・富沢町、平成の懐かしさのある女性ひとりのワインビストロ] 人形町近く、元洋服店を改装した小さなワインのビストロで、店主がひとりで切り盛りする (2026年4月)。店内はレトロでポップ。棚にはたまごっちやなぞなぞの本、店主が選んだ平成の J-pop が流れ、1階はカウンター、らせん階段の上にテーブルがふたつ。メニューは短くワイン向きで、じゃがいものピュレと生ハムととろけたコンテのタルティーヌ、ハチノスのレモン煮、オニオングラタンスープ、季節の果物のソースの軽いクレームダンジュ。グラスワインはたっぷり。4月の客は、ひとりで回すので作り置きやオーブン任せの料理が中心だと書いている。遅い時間は Instagram の DM で予約を。カード不可。',
  });
}

// ================================================================ 軍鶏拉麺 飛天
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13317063/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:00', '14:30']); const WE = day(['11:00', '15:00']);
  put({
    id: 'tokyo_shamo_ramen_hiten_ningyocho', name: '軍鶏拉麺 飛天 (Shamo Ramen Hiten)', category: 'OMNI',
    lat: 35.685043, lng: 139.783036, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles from Hashizume Seimen (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a 100% shamo-chicken broth with chicken chashu.',
    hours_raw: 'Mon–Fri 11:00–14:30; Sat, Sun and holidays 11:00–15:00 (Tabelog). Lunch only. Opened 10 December 2025, at first limited to 50 bowls a day (Tabelog). Ticket machine (August 2026). Seats: Tabelog lists 6 at the counter; a July 2026 diner counted 9. Payment: Tabelog lists no cards, e-money or QR; a July 2026 diner reports various cashless options. No reservations. Queues at weekend lunch (August 2026).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 1-17-9, a red noren next door to 玉ひで, by the Amazake Yokocho crossing — right by Ningyocho Stn exit A2, 2 min from Suitengumae Stn',
    cuisine: 'Shamo ramen: a paitan broth from Kawamata shamo and Okukuji shamo bones only — no beef, pork or seafood — with golden chicken oil (September–October 2026) · noodles from Hashizume Seimen, described as medium-thick, straight and square (September–October 2026) or thin (July, August, October 2026) · weekday Shamo Ramen ¥1,200 (August 2026); Toku Shamo Ramen with three chicken chashu (shamo breast and thigh, and a brand chicken); all-shamo Tori-sho Shamo Ramen (October 2026); a bowl at ¥1,800 with rice ¥200 (August 2026); flavoured noodles +¥100 · chilled shamo paitan ¥1,200 in summer (July–August 2026) · egg over rice; Haitoku no Hiten Don (August 2026) · chicken jelly and burdock chips with the ramen; yuzu kosho on the counter',
    website: TB, gmaps: gm('軍鶏拉麺 飛天 人形町'), menu_url: null,
    notes: "[Ramen · Ningyocho, all-shamo ramen from the house of Tamahide] A small ramen counter next door to 玉ひで, the shamo-chicken restaurant founded in 1760, run by the second son of Tamahide's eighth generation (August–September 2026). The broth is made only from shamo bones, a creamy paitan glossed with golden chicken oil, and the top bowl lays out three chicken chashu side by side: shamo breast, shamo thigh and another brand chicken. Chicken jelly and burdock chips come on the side. In summer there is a chilled shamo paitan. Most diners loved it, though an October 2026 visitor found it light rather than rich and the chashu too cold. Lunch only, and expect a queue at weekends; it was featured on BS-TBS (August 2026).",
    chef_bio: { chef_name: null, roles: ['Run by the second son of the eighth generation of Tamahide (August, September 2026 reviews)'], origin: null,
      background: 'Per 2026 reviews: Tamahide, the shamo-chicken restaurant next door famous for oyakodon, was founded in 1760; Hiten is run by the second son of its eighth generation. Opened 10 December 2025 (Tabelog). A diner came after seeing it on a BS-TBS ramen programme (August 2026).',
      philosophy: null, specialty: 'Shamo paitan ramen with three kinds of chicken chashu.',
      anecdotes: [
        { text: '"The 100% shamo broth, made without any beef, pork, or seafood, is beautifully cloudy and creamy." — October 2026.', source: R + 'B537706495/' },
        { text: '"This restaurant is part of the lineage of Tamahide, which was founded in 1760, and it turns out to be the second son of the eighth generation." — September 2026.', source: R + 'B534825168/' },
        { text: '"I expected the shamo chashu to be warm, but it was cold" — October 2026.', source: R + 'B537413605/' },
      ],
      japanese_sources_summary: '食べログ: 軍鶏拉麺 飛天、ラーメン、日本橋人形町1-17-9、人形町駅A2出口すぐ、水天宮前駅から徒歩2分、月〜金11:00〜14:30、土日祝11:00〜15:00、カウンター6席、カード・電子マネー・QR不可、予約不可、2025年12月10日オープン (はじめは1日50食まで)。口コミ(2026年7月〜10月): 隣の玉ひで (1760年創業) の八代目の次男が営む、軍鶏の骨だけの白湯、牛肉・豚肉・魚介なし、鶏油、Hashizume 製麺の麺、平日の軍鶏ラーメン1,200円、3種の鶏のチャーシュー、冷やしの軍鶏白湯1,200円、卵かけご飯、券売機、鶏の煮こごりとごぼうチップス、柚子胡椒、9席という声やキャッシュレス可という声も、あっさりしすぎ・チャーシューが冷たいという声も。',
      confidence: 'medium', sources: [TB, R + 'B533351997/', R + 'B533771081/', R + 'B534263835/', R + 'B534529135/', R + 'B534825168/', R + 'B534924745/', R + 'B535117285/', R + 'B535237993/', R + 'B537413605/', R + 'B537706495/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; ingredient notes on the counter (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-17-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685043, 139.783036); cross-checked: GSI 東京都中央区日本橋人形町一丁目17番9号 (go) 10m. Next door to 鳥料理 玉ひで (tokyo3__294, address_ja "〒103-0013 東京都中央区日本橋人形町1-17-10"), 12 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533771081/', R + 'B533351997/', R + 'B535117285/'],
    price_note: 'Prices from July–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shamo Ramen (weekdays)', '¥1,200', 'Ramen', 'no', 'no', 'August 2026.', 'shamo_ramen'),
      it('', '', 'Chilled shamo paitan ramen (summer)', '¥1,200', 'Ramen', 'no', 'no', 'July 2026.', 'hiyashi'),
      it('', '', 'Shamo ramen (bowl at ¥1,800)', '¥1,800', 'Ramen', 'no', 'no', 'August 2026.', 'shamo_1800'),
      it('', '', 'Rice', '¥200', 'Sides', 'ask', 'ask', 'August 2026.', 'rice'),
    ] }, {
    cuisine: '軍鶏ラーメン: Kawamata 軍鶏と Okukuji 軍鶏の骨だけでとる白湯、牛肉・豚肉・魚介は使わず、金色の鶏油 (2026年9月〜10月)・麺は Hashizume 製麺、中太のストレートの角麺という声 (2026年9月〜10月) と細麺という声 (2026年7月、8月、10月)・平日の軍鶏ラーメン1,200円 (2026年8月)、3種の鶏のチャーシュー (軍鶏のむねともも、ほかの銘柄鶏) の特製の軍鶏ラーメン、すべて軍鶏の Tori Sho 軍鶏ラーメン (2026年10月)、1,800円の一杯とご飯200円 (2026年8月)、味付き麺+100円・夏は冷やしの軍鶏白湯1,200円 (2026年7月〜8月)・卵かけご飯、Haitoku no Hiten 丼 (2026年8月)・ラーメンには鶏の煮こごりとごぼうチップス、カウンターに柚子胡椒',
    neighborhood: '日本橋人形町1-17-9、玉ひでの隣の赤いのれん、Amazake Yokocho の交差点のそば。人形町駅A2出口すぐ、水天宮前駅から徒歩2分',
    gf_detail: 'グルテンフリーではない: Hashizume 製麺の小麦の麺 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない: 軍鶏100%のスープに鶏のチャーシュー。',
    notes: '[ラーメン・人形町、玉ひでの家の軍鶏だけのラーメン] 1760年創業の軍鶏料理の玉ひでの隣にある小さなラーメンのカウンターで、玉ひで八代目の次男が営む (2026年8月〜9月)。スープは軍鶏の骨だけでとるクリーミーな白湯に金色の鶏油が光り、いちばん上の一杯には軍鶏のむね、軍鶏のもも、ほかの銘柄鶏の3種のチャーシューが並ぶ。鶏の煮こごりとごぼうチップスが添えられ、夏は冷やしの軍鶏白湯も。多くの客が絶賛する一方、2026年10月にはあっさりしすぎでチャーシューが冷たかったという声も。昼のみで、週末は行列。BS-TBS で紹介された (2026年8月)。',
  });
}

// ================================================================ 朝伊名
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13231317/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://asaina.net/';
  const WK = day(['17:00', '23:00']); const SAT = day(['16:00', '23:00']); const SUN = day(['16:00', '22:00']);
  put({
    id: 'tokyo_asaina_horidome', name: '朝伊名 (Asaina)', category: 'OMNI',
    lat: 35.68769, lng: 139.781824, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Many dishes are braised in a sweet soy-sauce glaze (soki, rafute), and abura somen, soki soba and tempura are wheat; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-centred island cooking; jimami (peanut) tofu and sea grapes are on the menu, but ask about dashi and lard.',
    hours_raw: 'Shop website: weekdays 17:00–23:00 (last order 22:00); Sat 16:00–23:00 (last order 22:00); Sun and holidays 16:00–22:00 (last order 21:00); irregular closing days. Tabelog gives Sat as 16:00–22:00, like Sun and holidays. Reservations by time slot (Tabelog); often fully booked, with walk-ins turned away (August 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay (Tabelog). Appetiser charge ¥500 (Tabelog). 20 seats; wheelchair accessible; children and strollers welcome; non-smoking, ashtray at the entrance (Tabelog). Opened 21 February 2019 (Tabelog). Bottles of shochu can be kept for about three months (January 2021 review).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Horidomecho 2-1-14, ヴェルステージ日本橋人形町 1F, in a back alley — 2 min from Ningyocho Stn exit A4',
    cuisine: 'Amami and Okinawan island cooking with kokuto shochu and awamori (Tabelog; shop website) · menu (Tabelog, July 2026): abura somen, the most popular dish ¥900; braised soki spare ribs in sweet soy ¥900 (double meat ¥1,200); rafute ¥900; mimiga with ponzu ¥700; soochikaa salted pork ¥700; Agu pork menchi katsu ¥700; sea grapes ¥900; jimami tofu ¥700; mozuku vinegar ¥700; tofu-yo ¥600; sukugarasu ¥700; island garlic ¥900 (March–September) · also goya champuru, mozuku tempura, squid-ink jushi, soki soba, island salad (2025–26 reviews); spicy island gyoza, not always available — ask when booking (May 2022) · drinks: Yoron kokuto shochu such as Shima Yuzumi (a 1-litre bottle ¥6,000, July 2025), awamori, Orion draft, goya beer, karakara servers',
    website: SITE, gmaps: gm('朝伊名 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Horidome-cho, Amami island cooking from a Yoron Island couple] A twenty-seat izakaya in a back alley near Ningyocho, run by a husband-and-wife team from Yoron Island in the Amami chain (shop website). The food is Amami as much as Okinawan: abura somen stir-fried with vegetables, soki ribs braised soft in sweet soy, rafute, crisp mozuku tempura and goya champuru, with Yoron kokuto shochu by the bottle. A regular, 23 visits in, calls it the best island izakaya in Tokyo. The couple kept going through the pandemic by selling bento (2021), and the room is now full most nights, so book. Prices are low for the portions. One October 2026 regular felt the seasoning had grown a little strong lately, and another found the soki soba salty.",
    chef_bio: { chef_name: null, roles: ['Run by a married couple from Yoron Island, Kagoshima (shop website)'], origin: 'Yoron Island, Kagoshima Prefecture (shop website: "鹿児島県ヨロン島出身の夫婦が営む")',
      background: 'Per the shop website: an Okinawan and Amami izakaya run by a couple from Yoron Island, the couple\'s hometown. Opened 21 February 2019 (Tabelog). A regular reports the couple ran the shop without other staff through the pandemic, selling lunch bento and dinner takeaway (May 2021, January 2022), and that a New Year appetiser was the shop\'s own ozoni (January 2022).',
      philosophy: 'Island dishes centred on pork, seasonal island vegetables, kokuto shochu and awamori (Tabelog shop text).', specialty: 'Abura somen; braised soki.',
      anecdotes: [
        { text: '"When I come here, I usually drink Yoron Island\'s brown sugar shochu instead of awamori." — July 2025, a regular on an eleventh visit.', source: R + 'B421927162/' },
        { text: '"… managed to hold on during the pandemic by selling bento." — January 2022.', source: R + 'B421927162/' },
        { text: '"The mozuku tempura had a crispy exterior and a chewy interior" — September 2026.', source: R + 'B536640208/' },
      ],
      japanese_sources_summary: 'ホームページ: 朝伊名は鹿児島県ヨロン島出身の夫婦が営む沖縄・奄美料理の居酒屋、平日17:00〜23:00 (L.O.22:00)、土16:00〜23:00 (L.O.22:00)、日祝16:00〜22:00 (L.O.21:00)、不定休。食べログ: 沖縄料理、居酒屋、豚料理、日本橋堀留町2-1-14 ヴェルステージ日本橋人形町 1F、人形町駅A4出口から徒歩2分、土日祝16:00〜22:00、予約は時間制、カードと PayPay 可、お通し500円、20席、車椅子可、子ども可、2019年2月21日オープン、油そうめん900円、ソーキ煮900円、ラフテー900円。口コミ(2021年1月〜2026年10月): 夫婦で営む、コロナ禍は弁当とテイクアウトで続けた、ヨロン島の黒糖焼酎、ゴーヤーチャンプルー、もずくの天ぷら、ソーキそば、いつも満席で予約がおすすめ、最近は味が少し濃いという声やソーキそばが塩辛いという声も。',
      confidence: 'medium', sources: [SITE, TB, TB + 'dtlmenu/', R + 'B421927162/', R + 'B476855734/', R + 'B533697147/', R + 'B534803021/', R + 'B535418568/', R + 'B536640208/', R + 'B536823024/', R + 'B536934477/', R + 'B537419054/', R + 'B537487048/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; island dish names; ¥500 appetiser charge.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋堀留町2-1-14 ヴェルステージ日本橋人形町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop website and Tabelog listing (menu updated 2026-07-18); reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.687690, 139.781824); cross-checked: GSI 東京都中央区日本橋堀留町二丁目1番14号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [TB + 'dtlmenu/'],
    price_note: 'Tabelog menu, tax included, last updated 2026-07-18.', last_checked: TODAY, items: [
      it('', '', 'Abura somen (stir-fried somen, Amami)', '¥900', 'Recommended', 'no', 'no', 'Tabelog, July 2026.', 'abura_somen'),
      it('', '', 'Braised soki spare ribs', '¥900', 'Pork', 'ask', 'no', 'Tabelog, July 2026; double meat ¥1,200.', 'soki_ni'),
      it('', '', 'Rafute (braised pork belly)', '¥900', 'Pork', 'ask', 'no', 'Tabelog, July 2026.', 'rafute'),
      it('', '', 'Agu pork menchi katsu', '¥700', 'Pork', 'no', 'no', 'Tabelog, July 2026.', 'menchi'),
      it('', '', 'Sea grapes', '¥900', 'Refreshing', 'ask', 'ask', 'Tabelog, July 2026.', 'umibudo'),
      it('', '', 'Jimami (peanut) tofu', '¥700', 'Refreshing', 'ask', 'ask', 'Tabelog, July 2026.', 'jimami'),
      it('', '', 'Mozuku vinegar', '¥700', 'Refreshing', 'ask', 'ask', 'Tabelog, July 2026.', 'mozuku'),
    ] }, {
    cuisine: '奄美と沖縄の島料理に黒糖焼酎と泡盛 (食べログ、ホームページ)・メニュー (食べログ、2026年7月): 一番人気の油そうめん900円、甘い醤油のソーキ煮900円 (肉2倍1,200円)、ラフテー900円、ミミガーのポン酢700円、スーチカー700円、アグー豚のメンチカツ700円、海ぶどう900円、ジーマーミ豆腐700円、もずく酢700円、豆腐よう600円、スクガラス700円、島にんにく900円 (3月〜9月)・ゴーヤチャンプルー、もずくの天ぷら、イカ墨のジューシー、ソーキそば、島のサラダも (2025〜26年の口コミ)・辛い島の餃子はいつもあるとは限らず予約時に頼む (2022年5月)・飲み物: Shima Yuzumi などヨロン島の黒糖焼酎 (1リットル瓶6,000円、2025年7月)、泡盛、オリオンの生、ゴーヤービール、カラカラ',
    neighborhood: '日本橋堀留町2-1-14 ヴェルステージ日本橋人形町 1F、裏路地。人形町駅A4出口から徒歩2分',
    gf_detail: '要確認。ソーキやラフテーは甘い醤油で煮込み、油そうめん、ソーキそば、天ぷらは小麦。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 豚肉中心の島料理。ジーマーミ豆腐や海ぶどうもあるが、出汁やラードは要確認。',
    notes: '[居酒屋・堀留町、ヨロン島出身の夫婦の奄美の島料理] 人形町近くの裏路地にある20席の居酒屋で、奄美のヨロン島出身の夫婦が営む (ホームページ)。料理は沖縄と同じくらい奄美寄りで、野菜と炒めた油そうめん、甘い醤油でやわらかく煮たソーキ、ラフテー、カリッとしたもずくの天ぷら、ゴーヤーチャンプルー、ヨロン島の黒糖焼酎は瓶で。23回通う常連は東京一の島の居酒屋と呼ぶ。コロナ禍は夫婦で弁当を売って乗り切り (2021年)、いまはほぼ毎晩満席なので予約を。量の割に値段は安い。2026年10月の常連は最近少し味が濃くなったといい、ソーキそばが塩辛いという声も。',
  });
}

// ================================================================ 蛇の目鮨
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13071289/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '21:00']); const SUN = day(['12:00', '15:00']);
  put({
    id: 'tokyo_janome_sushi_ningyocho', name: '蛇の目鮨 (Janome Sushi)', category: 'OMNI',
    lat: 35.685617, lng: 139.783755, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri with soy sauce, Saikyo-miso grilled fish and a tsukune soup (2023–25 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish sushi counter; lunch comes with a clam or tsukune soup.',
    hours_raw: 'Mon and Wed–Sat 12:00–21:00; Sun 12:00–15:00; closed Tuesday; hours may change (Tabelog). Lunch sets served into the afternoon (past 14:00, August 2022; 14:30, March 2025). Cash only — no cards, e-money or QR (Tabelog). 12 seats: 8 at the counter and 4 on a raised tatami area (Tabelog). Reservations accepted; children welcome (Tabelog). About 80 years in business, having moved once (March 2025 review).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: SUN }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-10-2, ジョイフルビル 1F, beside Ningyocho Imahan (August 2022) — about 130 m from Ningyocho Stn',
    cuisine: 'Neighbourhood sushi with small, old-style nigiri (2025 reviews) · lunch: 7-piece nigiri ¥1,100 (January 2024) / ¥1,150 (March 2025) with small side dishes and soup; large nigiri, 10 pieces and a roll ¥1,800 (January 2024); 9 pieces ¥1,500 (August 2022); on Mondays and Thursdays chirashi or a marinated-fish rice bowl ¥1,000 (August 2025) · evening: beer and small dishes, Saikyo-miso grilled black cod, wasabi rolls, scallop nigiri (2023, 2025) · sake',
    website: TB, gmaps: gm('蛇の目鮨 人形町'), menu_url: null,
    notes: '[Sushi · Ningyocho, a homey couple-run sushi counter with cheap lunches] An old neighbourhood sushi shop by Ningyocho, said to be about 80 years old and in its second location (March 2025), and run by a couple (2024–25 reviews). Lunch is the draw: seven small nigiri with side dishes and soup for about ¥1,150, or chirashi for ¥1,000 on Mondays and Thursdays. The pieces are small, old-style and modest, and opinions split sharply: regulars enjoy the owner\'s attentiveness and conversation and the Saikyo-miso black cod, while some 2025 visitors found the sushi ordinary or poorly made, with rice falling apart. Cash only; closed Tuesdays.',
    chef_bio: { chef_name: null, roles: ['Run by a couple (June 2024, July 2025 reviews)'], origin: null,
      background: 'About 80 years in business, having relocated once (March 2025 review). The same reviewer wonders whether it descends from Janome Zushi Honkan of Shintomicho (founded 1865, now closed); no source confirms a link.',
      philosophy: null, specialty: 'Lunch nigiri sets; Saikyo-miso grilled black cod.',
      anecdotes: [
        { text: '"It\'s a very homey restaurant run by a couple. The owner is very attentive, and the conversations are enjoyable, making the time fly by." — July 2025.', source: R + 'B527668726/' },
        { text: '"On Mondays and Thursdays, you can choose between chirashi or pickled rice bowl for just JPY 1000." — August 2025.', source: R + 'B512721763/' },
        { text: '"The sushi rice was falling apart, and the rolls were poorly made." — March 2025.', source: R + 'B504059233/' },
      ],
      japanese_sources_summary: '食べログ: 蛇の目鮨、寿司、日本橋人形町2-10-2 ジョイフルビル 1F、人形町駅から約130m、月・水〜土12:00〜21:00、日12:00〜15:00、火曜休み、予約可、カード・電子マネー・QR不可、12席 (カウンター8、小上がり4)、子ども可。口コミ(2022年8月〜2025年8月): 夫婦で営む町の鮨屋、約80年、一度移転、小ぶりの握り、昼の握り7貫1,100円〜1,150円、握り10貫と巻物1,800円、月・木のちらしか漬け丼1,000円、西京焼きの銀だら、わさび巻き、店主との会話が楽しいという声、握りがいまひとつ・しゃりが崩れるという声も。',
      confidence: 'low', sources: [TB, R + 'B453042289/', R + 'B470802344/', R + 'B478946082/', R + 'B487273619/', R + 'B500242447/', R + 'B502318375/', R + 'B502871384/', R + 'B504059233/', R + 'B512721763/', R + 'B527668726/'] },
    cultural_comfort: { level: 'japanese', note: 'An old neighbourhood shop; lunch sets by the menu outside.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-10-2 ジョイフルビル 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing open; latest reviews August 2025.' },
    pin_source: `Tabelog ${TB} (35.685617, 139.783755); cross-checked: GSI 東京都中央区日本橋人形町二丁目10番2号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502871384/', R + 'B478946082/', R + 'B512721763/'],
    price_note: 'Lunch prices from January 2024–August 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch nigiri, 7 pieces', '¥1,150', 'Lunch', 'ask', 'no', 'March 2025 (¥1,100 in January 2024).', 'lunch_7'),
      it('', '', 'Large nigiri, 10 pieces and a roll', '¥1,800', 'Lunch', 'ask', 'no', 'January 2024.', 'lunch_jo'),
      it('', '', 'Chirashi or marinated-fish bowl (Mon, Thu)', '¥1,000', 'Lunch', 'ask', 'no', 'August 2025.', 'chirashi'),
    ] }, {
    cuisine: '小ぶりで昔ながらの握りの町の鮨屋 (2025年の口コミ)・昼: 握り7貫1,100円 (2024年1月)、1,150円 (2025年3月)、小鉢と汁付き。握り10貫と巻物1,800円 (2024年1月)、9貫1,500円 (2022年8月)、月・木はちらしか漬け丼1,000円 (2025年8月)・夜: ビールとつまみ、銀だらの西京焼き、わさび巻き、帆立の握り (2023年、2025年)・日本酒',
    neighborhood: '日本橋人形町2-10-2 ジョイフルビル 1F、人形町今半の隣 (2022年8月)。人形町駅から約130m',
    gf_detail: '要確認。握りは醤油で、西京焼きやつくねの汁も (2023〜25年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 魚の鮨のカウンター。昼はしじみやつくねの汁付き。',
    notes: '[鮨・人形町、夫婦で営む家庭的な町の鮨屋、安い昼] 人形町の古い町の鮨屋で、約80年、一度移転したという (2025年3月)。2024〜25年の口コミによれば夫婦で営む。目当ては昼で、小鉢と汁の付いた小ぶりの握り7貫が約1,150円、月・木はちらしが1,000円。握りは小さく昔風で控えめ。評価ははっきり分かれ、常連は店主の気配りと会話、銀だらの西京焼きを楽しむ一方、2025年には握りが平凡、しゃりが崩れて巻物の出来が悪いという声も。現金のみ、火曜休み。',
  });
}

save();
