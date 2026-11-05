// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 2.
//   + ekaki (natural-wine bistro-izakaya with a red door off Kawaramachi, one cook; since 2015; core list)
//   + 京極スタンド Kyogoku Stand (Shinkyogoku's 1927 taishu sakaba, marble counter and abacus; core list)
//   + 藤むら Fujimura (family-run yakiniku by Bukkoji-Aburanokoji, Yakiniku/Grill WEST 100 2018–2026; notable list)
//   + 沐 moku (8-seat creative izakaya near Kiyomizu-Gojo, Izakaya WEST 100 2026; notable list)
//   Picked 2026-11-05 after batch 1 was integrated: `queue.mjs kyoto-missed next core 200` gave ekaki 26025937 and
//   京極スタンド 26000665 as the first lane-1 ids; `next notable 200` gave 藤むら 26004181 and 沐 26040523.
//   None is in data/kyoto.json: grep by name (ekaki/えかき, 京極スタンド/Kyogoku Stand, 藤むら/Fujimura, 沐/moku) and
//   address (貞安前之町611, 中之町546, 喜吉町161 / 仏光寺通油小路, 音羽町325) found none. ekaki's sister shop chichi
//   (croissant soft-serve, 200 m away per ekaki's site) is a different format and not in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ekaki
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025937/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ekaki-kyoto.crayonsite.info/'; const MENU = SITE + 'p/2/'; const SISTER = SITE + 'p/3/';
  const IG = 'https://www.instagram.com/ekaki_chihiro';
  const H = day(['12:00', '22:00']);
  put({
    id: 'kyoto_ekaki', name: 'ekaki', category: 'OMNI',
    lat: 35.003291, lng: 135.766979, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The menu mixes fritters, fries, spring-roll sausages, quiche, gratin, toast and pasta with salads, cheeses, charcuterie and grilled meat; no gluten information (official menu).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A few vegetable plates (salted boiled peanuts, black edamame pickles, salads, fritters, fries with black shichimi) sit among meat, cheese and egg dishes; dishes are cooked to the size of the group, so ask (official menu; March 2026).',
    hours_raw: '12:00–22:00 daily (Tabelog), but hours vary: the official site posts the day’s hours (4 November: 15:00–22:00, for drinkers only), and a reviewer advises checking Instagram (April 2026). Tabelog says reservations are taken and the site gives a phone number for same-day bookings and changes, yet an April 2026 reviewer called it "a popular restaurant that doesn’t take reservations". House rules (official site): order at least 2 drinks a person (the menu says 2 to 10); dishes are cooked to the size of the group; seats are limited to 2 hours when busy; one cook makes almost everything, so food takes time; when very busy, guests wanting only drinks may be turned away. The menu has no prices (November 2025; April 2026). Japanese menu only, and staff mostly speak Japanese (official site, in English); wines explained via mobile ordering (January 2026). Cards (JCB per Tabelog; contactless per the site), no e-money or QR (Tabelog). 20 seats on two floors with a counter, and benches outside (Tabelog; 2026 reviews). Red door, a short alley off the main street; 2 min walk from Kawaramachi Stn (Hankyu) (Tabelog; 2025–2026 reviews). Opened 20 May 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'varies',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Alley off Kawaramachi south of Shijo — 2 min walk from Kawaramachi Stn',
    cuisine: 'Small-plates izakaya with natural wine, from a chef who studied natural wine and French cuisine (official site): glass and bottle wines (ask the staff), draft Sapporo, grape beer, sake from Nara, Shimane, Tottori and more, shochu, cardamom shochu, fresh-squeezed sours, 季の美 gin (official menu) · plates: anchovy oeufs mayo, sweet potato and cardamom potage, fig with burrata, salad lyonnaise with liver paste and bacon, Tanba chestnuts fried, fries (black shichimi, ketchup or shiso salsa verde), mussels in white wine, quiche, busiate pasta with squid in oil, tripe and chickpeas in tomato, spare ribs in balsamic, duck breast, beef kainomi (flap) steak, croque monsieur (until 16:00), raisin butter, dashi omelette (official menu) · desserts: pudding, walnut and fig tart, fruit gratin (official menu) · a March 2026 bill: beet, Treviso and soft egg salad, fries, grape beer and cardamom soda, ¥2,550',
    website: SITE, gmaps: gm('ekaki 京都 河原町'), menu_url: MENU,
    notes: "[Izakaya · Kawaramachi, natural wine behind a red door] A small two-floor bistro-izakaya with a red front and benches outside, a short alley off Kawaramachi, open from midday: natural wines chosen to your taste, and plates cooked by one chef who studied natural wine and French cuisine — flap steak, dashi omelette, raisin butter, beet salads, mussels, a chestnut soup in autumn. Portions are big and scaled to the group; order at least two drinks each; the menu has no prices, and reviewers paid about ¥2,000–10,000 a head. Japanese menu only — the shop asks you to try ordering in Japanese. Hours change day to day; check the site or Instagram.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), who cooks almost everything alone (official site)'], origin: null,
      background: 'Per the official site (in English): "We’re an izakaya, not a bar"; the chef studied natural wine and French cuisine; one chef makes almost everything. The site lists a sister shop 200 m away, chichi (croissant soft-serve, wine and a gallery space), and sells ekaki goods (stickers, plates, glasses, a logo long-tee). Opened 20 May 2015 (Tabelog). An April 2026 reviewer heard that the owner is sometimes in and sometimes not, which can change the menu; on the second visit the beef steak was not available.',
      philosophy: 'Per the official site: "let’s enjoy good food, good drinks, and a good time together!"',
      specialty: 'Beef flap steak; dashi omelette; raisin butter.',
      anecdotes: [
        { text: '"I had some concerns, such as the lack of prices on the menu and the two-drink minimum per person, but in the end, it was an amazing experience!" — November 2025.', source: R + 'B520111607/' },
        { text: '"The selection of natural wines was truly impressive, and they made perfect suggestions based on my specific requests." — December 2025.', source: R + 'B519940548/' },
        { text: '"I was particularly impressed by the chestnut soup I had at the end! The soup was topped with cocoa" — October 2025.', source: R + 'B530771455/' },
        { text: '"The service wasn’t cold, but rather dry with a comfortable distance." The same reviewer noted "Allergy accommodations: Yes". — April 2026.', source: R + 'B526285650/' },
      ],
      japanese_sources_summary: '公式サイト (ekaki-kyoto.crayonsite.info): その日の営業時間を掲載 (11/4 15:00〜22:00 お酒飲まれる方のみ)、御注文は口頭、人数に合わせて料理、お酒一人2杯〜10杯、お会計はお席で、クレジットカードタッチ決済可、混雑時お席2時間制、1人で料理を作っております、メニュー: グラスワイン・ボトルワイン、生ビール サッポロ、ぶどうビール、日本酒 (奈良・島根・鳥取ほか)、カルダモン焼酎、生搾り酎ハイ、季の美、大人プリン、塩ゆで落花生、アンチョビウフマヨ、焼き芋とカルダモンのポタージュ、いちぢくとブッラータチーズ、サラダリヨネーズ、丹波栗の素揚げ、フライドポテト (黒七味)、ムール貝の白ワイン蒸し、海老とほうれん草のキッシュ、イカのオイルパスタ ブジアーテ、ハチノスとひよこ豆のトマト煮、豚スペアリブのバルサミコ煮、鴨胸ロースト、牛カイノミステーキ、クロックムッシュ (16:00迄)、レーズンバター、出汁オムレツ、当日予約や変更は電話で、系列店 chichi (200mの所、クロワッサンコーン ソフトクリーム、ワイン)。英語の案内: 日本語のメニューのみ、スタッフは主に日本語、シェフは自然派ワインとフランス料理を学んだ。食べログ: ビストロ・バー、下京区貞安前之町611-3、阪急河原町駅から徒歩2分、毎日12:00〜22:00、予約可、20席、カード可 (JCB)、2015年5月20日オープン。口コミ (2025年10月〜2026年4月、英語): 値段のないメニュー、2杯以上の注文、自然派ワイン、ハラミステーキ、出汁オムレツ、レーズンバター、栗のスープ、赤い扉、2階席、外のベンチ。',
      confidence: 'medium', sources: [TB, SITE, MENU, SISTER, IG, R + 'B519940548/', R + 'B520111607/', R + 'B523842471/', R + 'B524558744/', R + 'B524925870/', R + 'B525595128/', R + 'B526142815/', R + 'B526285650/', R + 'B527185642/', R + 'B530771455/'] },
    cultural_comfort: { level: 'japanese', note: 'Japanese menu only, staff mostly speak Japanese, and the shop asks guests to try ordering in Japanese (official site). At least 2 drinks each.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区貞安前之町611-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (posting the 4 November hours) and Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.003291, 135.766979); cross-checked: GSI 京都府京都市下京区貞安前之町611番地 (lot) 74 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B524558744/'],
    price_note: 'The menu shows no prices (official menu; 2025–2026 reviews). A March 2026 review paid ¥2,550 for a salad, fries, grape beer and cardamom soda.', last_checked: TODAY, items: [
      it('牛カイノミステーキ', '', 'Beef kainomi (flap) steak', '', 'Meat', 'ask', 'no', 'Takes longer than other dishes.', 'kainomi_steak'),
      it('出汁オムレツ(プレーンorチーズ)', '', 'Dashi omelette (plain or cheese)', '', 'Bread & eggs', 'ask', 'no', '', 'dashi_omelette'),
      it('レーズンバター', '', 'Raisin butter', '', 'Bread & eggs', 'ask', 'no', '', 'raisin_butter'),
      it('フライドポテト(黒七味orケチャップor大葉サルサヴェルデ)', '', 'Fries (black shichimi, ketchup or shiso salsa verde)', '', 'Vegetables', 'ask', 'ask', '', 'fries'),
      it('ムール貝の白ワイン蒸し 燻製風味', '', 'Mussels steamed in white wine, smoky', '', 'Fish', 'ask', 'no', '', 'mussels'),
      it('豚スペアリブのバルサミコ煮', '', 'Pork spare ribs braised in balsamic', '', 'Meat', 'ask', 'no', '', 'spare_ribs'),
      it('クロックムッシュ', '', 'Croque monsieur (until 16:00)', '', 'Bread & eggs', 'no', 'no', '', 'croque_monsieur'),
    ] }, {
    cuisine: '自然派ワインとフランス料理を学んだシェフの小皿の居酒屋 (公式サイト): グラスワイン・ボトルワイン (スタッフに相談)、サッポロの生ビール、ぶどうビール、奈良・島根・鳥取などの日本酒、焼酎、カルダモン焼酎、生搾り酎ハイ、季の美 (公式メニュー)・料理: アンチョビウフマヨ、焼き芋とカルダモンのポタージュ、いちぢくとブッラータチーズ、レバーペーストとベーコンのサラダリヨネーズ、丹波栗の素揚げ、フライドポテト (黒七味、ケチャップ、大葉サルサヴェルデ)、ムール貝の白ワイン蒸し、キッシュ、イカのオイルパスタ ブジアーテ、ハチノスとひよこ豆のトマト煮、豚スペアリブのバルサミコ煮、鴨胸ロースト、牛カイノミステーキ、クロックムッシュ (16時まで)、レーズンバター、出汁オムレツ (公式メニュー)・おやつ: 大人プリン、クルミと生いちぢくのタルト、フルーツグラタン (公式メニュー)・2026年3月の会計: ビーツとトレビスと半熟卵のサラダ、フライドポテト、ぶどうビール、カルダモンソーダで2,550円',
    neighborhood: '四条の南、河原町から路地を入る。河原町駅から徒歩2分',
    gf_detail: '要確認。フリット、フライドポテト、揚げ春巻きソーセージ、キッシュ、グラタン、トースト、パスタに、サラダ、チーズ、シャルキュトリー、焼いた肉。グルテンの情報はない (公式メニュー)。',
    vegan_detail: '要確認。野菜の皿 (塩ゆで落花生、黒枝豆のピクルス、サラダ、フリット、黒七味のフライドポテト) は少しあり、ほかは肉、チーズ、卵の料理。料理は人数に合わせて作るので相談を (公式メニュー、2026年3月)。',
    notes: '[居酒屋・河原町、赤い扉の自然派ワイン] 河原町から路地を少し入った、赤い店構えで外にベンチのある2階建ての小さなビストロ居酒屋。昼から開いている。好みに合わせて選んでくれる自然派ワインと、自然派ワインとフランス料理を学んだシェフが一人で作る料理: カイノミステーキ、出汁オムレツ、レーズンバター、ビーツのサラダ、ムール貝、秋には栗のスープ。量は多めで人数に合わせて出てくる。お酒は一人2杯以上。メニューに値段はなく、口コミでは1人2,000〜10,000円ほど。メニューは日本語のみで、店は日本語での注文を勧めている。営業時間は日によって変わるので、サイトか Instagram で確認を。',
  });
}

// ================================================================ 京極スタンド
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000665/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://shinkyogoku-stand.jp/'; const HIST = SITE + 'history/history.html';
  const MENU = SITE + 'menu/menu.html'; const LIST = SITE + 'menu/list.html';
  const H = day(['12:00', '21:00']);
  put({
    id: 'kyoto_kyogoku_stand', name: '京極スタンド (Kyogoku Stand)', category: 'OMNI',
    lat: 35.004602, lng: 135.767306, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: much of the menu is breaded and fried (croquettes, tonkatsu, mixed fry, aji fry, eel tempura), with ramen, fried noodles, curries and shumai (official menu; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden and simmered dishes in dashi, fried meat and fish, and set meals with miso soup; Tabelog lists vegetarian options, but nothing is marked vegan (official menu; Tabelog).',
    hours_raw: '12:00–21:00; closed Tuesday (official site; Tabelog). No reservations (Tabelog); tables are shared, and a seat at the counter is usually found for one (2026 reviews). Except with set meals, each person orders at least one drink and one dish (September and October 2026). A red slip is left on the table and taken to the register, where the bill is added up on an abacus (2026 reviews). Cash only; smoking allowed, and tobacco is sold inside (Tabelog; 2026 reviews). English menu available (Tabelog). 42 seats: a 20-seat counter, three tables for six and one for four (Tabelog). On Shinkyogoku just north of Shijo, near Nishiki Tenmangu; a short walk from Kawaramachi Stn exit 9 (Tabelog; August 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinkyogoku arcade just north of Shijo — a short walk from Kawaramachi Stn',
    cuisine: 'Taishu sakaba and shokudo from 1927 serving set meals, Western-style, Japanese and Chinese dishes and drinks (official site) · 2026 prices: homemade croquette ¥800, agedashi eggplant ¥650 (October 2026); kizushi ¥800, hiyayakko ¥400, simmered atsuage and eggplant ¥450 (August 2026); appetiser plate ¥900, potato salad ¥500 (October 2026) · also oden, aji fry, eel tempura, hamo tempura, shumai, uzaku, grilled horumon, smoked duck (2026 reviews) · daily set meal, omelette curry, om-demiglace don, fried noodles, ramen, karaage (official menu, older prices) · Kirin draft ¥650, large ¥950, lemon chuhai ¥550 (October 2026); Gekkeikan sakes including Kyo no Izumi ¥800 (August 2026) and the Gekkeikan "伝匠", sold only at selected shops (official site)',
    website: SITE, gmaps: gm('新京極スタンド 京都'), menu_url: LIST,
    notes: "[Izakaya · Shinkyogoku, a 1927 tavern with an abacus at the till] A real Showa-era taishu sakaba on the Shinkyogoku arcade, opened in 1927 by a founder who had come from Asakusa after the Great Kanto Earthquake, as a 'ten-sen shokudo' where everything cost ten sen. The marble counter and tables are the originals. Drink from noon at the counter or share a long table: Kirin draft, Gekkeikan sake, homemade croquettes (¥800), kizushi, oden, aji fry. A red slip goes to the register, where the bill is added on an abacus. Cash only; smoking allowed; at least one drink and one dish each. Closed Tuesday. One long-time customer found the food rushed and a server loud in October 2026, but keeps coming for the building and the atmosphere.",
    chef_bio: { chef_name: null, roles: ['Owner at the register (unnamed in the sources)'], origin: null,
      background: 'Per the official site: the first owner moved from Asakusa in Tokyo after the Great Kanto Earthquake and opened the shop in 1927 (Showa 2) in a Taisho-era building, as a "ten-sen shokudo" where everything cost ten sen; at first there was also a Stand north shop, and stalls in Yasaka Shrine and Maruyama Park in cherry-blossom season; the marble counter and tables are as they were at the founding, along with an early electric register and early-Showa posters. The site calls it "real Showa retro", not made up. Reviews in 2026 describe the owner at the register adding bills on a five-bead abacus.',
      philosophy: 'Per the official site: the menu keeps the taste, recipes and work of the founder’s day.',
      specialty: 'Homemade croquette; oden; set meals.',
      anecdotes: [
        { text: 'An October 2026 visitor chatted with the owner about the five-bead abacus at the register; the owner said, "It’s never too late to start."', source: R + 'B537423413/' },
        { text: '"The owner was quickly calculating with an abacus, and it came to exactly JPY 3000!" — March 2026.', source: R + 'B524273154/' },
        { text: 'An October 2026 visitor, a customer since living in Kyoto years ago, found the food rushed, the potato salad supermarket-like and a server loud about the shop’s operations, and comes "for the location, the building, and the atmosphere".', source: R + 'B537217426/' },
        { text: '"Outside, there were many foreign tourists, but inside felt purely Japanese, with a nostalgic atmosphere as if time had stopped." — August 2026.', source: R + 'B533339898/' },
      ],
      japanese_sources_summary: '公式サイト (shinkyogoku-stand.jp、新京極スタンド): 昭和２年創業の大衆酒場、営業時間12:00〜21:00、火曜日休み、中京区新京極通り四条上ル、関東大震災で東京浅草から移ってきた一代目が大正時代の建物で創めた大衆食堂、十銭食堂としてスタート、スタンド北店、八坂神社・円山公園内にも出店、大理石のカウンターとテーブルは創業当時そのまま、電動式のレジ、昭和初期のポスター、メニュー: 日替定食、オムデミグラスソース丼、揚げそば、ラーメン、おでん、自家製コロッケ、鶏のから揚げ、月桂冠「伝匠」、キリン満点生の店 (価格は当時のもの)。食べログ: 居酒屋・コロッケ・食堂、中京区新京極通四条上ル中之町546、12:00〜21:00、火曜休み、予約不可、42席、カード・電子マネー・QR 不可、喫煙可、店内でたばこ販売、英語メニューあり、ベジタリアンメニューあり。口コミ (2026年3〜10月、英語): 昼飲み、相席、赤い伝票、そろばんで会計、コロッケ800円、揚げ出し茄子650円、きずし800円、生ビール650円、一人一品一ドリンク、喫煙可。',
      confidence: 'medium', sources: [TB, SITE, HIST, MENU, LIST, R + 'B491342748/', R + 'B524273154/', R + 'B533339898/', R + 'B535461418/', R + 'B535631973/', R + 'B536047133/', R + 'B536383730/', R + 'B537217426/', R + 'B537423413/', R + 'B537823654/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; say how many and take the seat offered; take the red slip to the register; cash only; smoky.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通四条上ル中之町546',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004602, 135.767306); cross-checked: GSI 京都府京都市中京区中之町546番地 (lot) 11 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537423413/', R + 'B535631973/', R + 'B537217426/'],
    price_note: 'Prices from August–October 2026 reviews (the official site menu shows older, lower prices).', last_checked: TODAY, items: [
      it('自家製コロッケ', '', 'Homemade croquette', '¥800', 'Fried', 'no', 'no', 'October 2026.', 'croquette'),
      it('', '', 'Agedashi eggplant', '¥650', 'Today’s specials', 'ask', 'no', 'October 2026.', 'agedashi_eggplant'),
      it('きずし', '', 'Kizushi (vinegar-cured mackerel)', '¥800', 'Small dishes', 'ask', 'no', 'August 2026.', 'kizushi'),
      it('やっこ', '', 'Hiyayakko (chilled tofu)', '¥400', 'Small dishes', 'ask', 'ask', 'August 2026.', 'yakko'),
      it('ポテトサラダ', '', 'Potato salad', '¥500', 'Small dishes', 'ask', 'ask', 'October 2026.', 'potato_salad'),
      it('', '', 'Draft beer (medium / large)', '¥650 / ¥950', 'Drinks', '', '', 'October 2026.', 'draft_beer'),
      it('', '', 'Lemon chuhai', '¥550', 'Drinks', '', '', 'October 2026.', 'lemon_chuhai'),
    ] }, {
    cuisine: '1927年からの大衆酒場・大衆食堂。定食、洋食、和食、中華、お酒 (公式サイト)・2026年の値段: 自家製コロッケ800円、揚げ出し茄子650円 (2026年10月)、きずし800円、やっこ400円、厚揚げと茄子の煮物450円 (2026年8月)、前菜の盛り合わせ900円、ポテトサラダ500円 (2026年10月)・ほかにおでん、アジフライ、うなぎの天ぷら、鱧の天ぷら、しゅうまい、うざく、ホルモン焼き、鴨の燻製 (2026年の口コミ)・日替定食、オムレツカレー、オムデミグラスソース丼、揚げそば、ラーメン、鶏のから揚げ (公式メニュー、以前の値段)・キリンの生ビール650円、大950円、レモン酎ハイ550円 (2026年10月)、京の泉など月桂冠の日本酒800円 (2026年8月)、限られた店だけの月桂冠「伝匠」(公式サイト)',
    neighborhood: '四条のすぐ北の新京極商店街。河原町駅から少し',
    gf_detail: '実際にはグルテンフリーではない。コロッケ、とんかつ、ミックスフライ、アジフライ、うなぎの天ぷらなど衣の揚げ物が多く、ラーメン、揚げそば、カレー、しゅうまいも (公式メニュー、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのおでんや煮物、肉や魚の揚げ物、味噌汁付きの定食。食べログにはベジタリアンメニューありとあるが、ヴィーガンの表示はない (公式メニュー、食べログ)。',
    notes: '[居酒屋・新京極、そろばんで会計する1927年の酒場] 新京極商店街の、作り物ではない昭和の大衆酒場。関東大震災で東京浅草から移ってきた一代目が1927年に、何を食べても十銭の「十銭食堂」として始めた。大理石のカウンターとテーブルは創業当時のまま。昼からカウンターか相席の長いテーブルで、キリンの生ビール、月桂冠の日本酒、自家製コロッケ (800円)、きずし、おでん、アジフライ。赤い伝票をレジに持っていくと、そろばんで計算してくれる。現金のみ、喫煙可、一人一品一ドリンク以上。火曜休み。2026年10月、古くからの客は料理が雑で店員の声が大きいと書きつつ、建物と空気を目当てに通い続けている。',
  });
}

// ================================================================ 藤むら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26004181/'; const R = TB + 'dtlrvwlst/';
  const AQ = 'http://aquadina.com/kyoto/spot/3624/';
  const H = day(['17:00', '21:30']);
  put({
    id: 'kyoto_fujimura_yakiniku', name: '藤むら (Fujimura)', category: 'OMNI',
    lat: 35.001287, lng: 135.753152, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku with a different sauce for each cut, ponzu with grated daikon for the yaki-shabu, and garlic with the steak; no gluten information (2026 reviews; a Kyoto guide site, undated).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef yakiniku house; the sides are kimchi, namul, bibimbap and rice (2026 reviews).',
    hours_raw: '17:00–21:30; closed Wednesday (Tabelog; June 2026). Book ahead: reviewers booked a month out (August 2026) or found it full (2026 reviews), and some got in when a seat opened (June and July 2026); one booked without being able to choose the time (September 2026). Cash only (Tabelog). 16 seats: 4 at the counter, a table and two tatami tables; non-smoking, with ashtrays outside (Tabelog). No parking; coin parking nearby (Tabelog). On Bukkoji-dori west of Aburanokoji; 5 min by taxi from Kyoto Stn; 462 m from Omiya Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Bukkoji-dori west of Aburanokoji, southwest of Shijo Karasuma — 462 m from Omiya Stn',
    cuisine: 'Neighbourhood yakiniku of mostly lean beef; the house recommends four cuts in order — ichibo (sirloin cap) steak, yaki-shabu, premium tongue and filet — each with its own sauce (2026 reviews) · September 2026 prices: filet ¥2,900, yaki-shabu ¥2,000, special loin ¥2,000, premium tongue ¥1,800, special kalbi ¥1,500, ichibo steak ¥1,500, tetchan ¥800, rice ¥500, chuhai ¥600 · kimchi ¥600, highball ¥600 (June 2026) · also mino (premium tripe) with sauce, liver, outside skirt, namul, bibimbap without gochujang (2025–2026 reviews) · an undated Kyoto guide site describes Omi beef, 8–9 lean cuts, an ichibo tataki when fresh stock comes in, and yaki-shabu eaten with grated daikon and ponzu',
    website: null, gmaps: gm('藤むら 焼肉 京都 仏光寺'), menu_url: null,
    notes: "[Yakiniku · Bukkoji-Aburanokoji, a family's lean-beef counter] A small, retro neighbourhood yakiniku house run by a family, where the owner steers you through four cuts in a set order — ichibo steak, yaki-shabu, premium tongue, then filet — each with its own sauce; one regular's group added the premium tripe and tetchan and found them a pleasant surprise. A September 2026 bill for a group of plates came to ¥13,600; most reviewers paid ¥6,000–10,000 a head. In Tabelog's Yakiniku or Grill 100 lists in 2018 and every year from 2020 to 2026. Cash only; book well ahead; 17:00–21:30, closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Family-run (unnamed in the sources)'], origin: null,
      background: 'Per reviews: "run by a family" in blue work aprons (August 2025); a regular wrote in September 2026 that "the usual mother wasn’t there, and it was just the father and son running the place"; the owner recommends the cuts and the order (2026 reviews), and a hostess explains which sauce goes with which cut (July 2026). Tabelog Yakiniku "Tabelog 100" 2018, Yakiniku WEST 2020–2023, 2025, Grill WEST 2024, 2026.',
      philosophy: null, specialty: 'Ichibo steak; yaki-shabu; premium tongue; filet.',
      anecdotes: [
        { text: 'A March 2026 regular: the shop serves the ichibo steak first, then yaki-shabu, premium tongue and filet; reordering the ichibo afterwards felt milder, but it came back to life with the grated garlic on the plate.', source: R + 'B512316579/' },
        { text: '"It was a popular spot and fully booked, but they kindly called me when a table became available" — June 2026.', source: R + 'B530671509/' },
        { text: 'The owner asked a solo diner whether the portions would be manageable, then guided the order: ichibo steak, yaki-shabu, filet, tongue and kimchi — September 2026.', source: R + 'B535303919/' },
        { text: '"I was a bit disappointed when I received a less desirable cut of meat compared to other customers." — September 2026.', source: R + 'B536054897/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉、下京区仏光寺通油小路西入ル、京都駅からタクシー5分、大宮駅から462m、17:00〜21:30、水曜休み、予約可、16席 (カウンター4、テーブル1、座敷2)、カード・電子マネー・QR 不可、禁煙 (店外に灰皿)、焼肉百名店 2018、焼肉 WEST 百名店 2020〜2023・2025、グリル WEST 百名店 2024・2026。京都観光サイト (アクアディーナ、日付なし): 下京区喜吉町161、上質な近江牛、赤身中心の8〜9種類、イチボのたたき、大根おろしとポン酢の焼きしゃぶしゃぶ。口コミ (2025年8月〜2026年9月、英語): 家族で営む、イチボステーキ、焼きしゃぶ、タン (premium)、ヒレの順のおすすめ、部位ごとのたれ、ヒレ2,900円、焼きしゃぶ2,000円、タン (premium)1,800円、イチボステーキ1,500円、テッチャン800円、キムチ600円、予約は1か月前に。',
      confidence: 'medium', sources: [TB, AQ, R + 'B453883155/', R + 'B512316579/', R + 'B530671509/', R + 'B532857303/', R + 'B533350201/', R + 'B533968146/', R + 'B535293545/', R + 'B535303919/', R + 'B536054897/', R + 'B536416474/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; let the owner guide the order of cuts; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区仏光寺通油小路西入ル喜吉町161',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026; Grill WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.001287, 135.753152); cross-checked: GSI 京都府京都市下京区喜吉町161番地 (lot) 17 m, using the lot number from aquadina.com (Tabelog gives no number); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536416474/', R + 'B530671509/'],
    price_note: 'No menu read; prices from June and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ichibo (sirloin cap) steak', '¥1,500', 'Beef', 'ask', 'no', 'September 2026; served first.', 'ichibo_steak'),
      it('', '', 'Yaki-shabu (seared thin beef)', '¥2,000', 'Beef', 'ask', 'no', 'September 2026.', 'yaki_shabu'),
      it('', '', 'Premium tongue', '¥1,800', 'Beef', 'ask', 'no', 'September 2026.', 'jo_tan'),
      it('', '', 'Filet', '¥2,900', 'Beef', 'ask', 'no', 'September 2026.', 'filet'),
      it('', '', 'Special kalbi', '¥1,500', 'Beef', 'ask', 'no', 'September 2026.', 'special_kalbi'),
      it('', '', 'Tetchan (large intestine)', '¥800', 'Offal', 'ask', 'no', 'September 2026.', 'tetchan'),
      it('', '', 'Kimchi', '¥600', 'Sides', 'ask', 'no', 'June 2026.', 'kimchi'),
      it('', '', 'Rice', '¥500', 'Sides', '', '', 'September 2026.', 'rice'),
    ] }, {
    cuisine: '赤身中心の町の焼肉。店のおすすめは4品を順に: イチボステーキ、焼きしゃぶ、タン (premium)、ヒレ。部位ごとにたれが違う (2026年の口コミ)・2026年9月の値段: ヒレ2,900円、焼きしゃぶ2,000円、ロース (special) 2,000円、タン (premium) 1,800円、カルビ (special) 1,500円、イチボステーキ1,500円、テッチャン800円、ご飯500円、酎ハイ600円・キムチ600円、ハイボール600円 (2026年6月)・ほかにミノ (premium) のたれ、レバー、ハラミ、ナムル、コチュジャンなしのビビンバ (2025〜2026年の口コミ)・日付のない京都の観光サイトによれば、近江牛、赤身中心の8〜9種類、新鮮なものが入った時だけのイチボのたたき、大根おろしとポン酢で食べる焼きしゃぶしゃぶ',
    neighborhood: '油小路の西の仏光寺通、四条烏丸の南西。大宮駅から462m',
    gf_detail: '要確認。部位ごとに違うたれの焼肉、焼きしゃぶは大根おろしとポン酢、ステーキはにんにくと。グルテンの情報はない (2026年の口コミ、日付のない京都の観光サイト)。',
    vegan_detail: 'ヴィーガン不可。牛肉の焼肉の店で、サイドはキムチ、ナムル、ビビンバ、ご飯 (2026年の口コミ)。',
    notes: '[焼肉・仏光寺油小路、家族で営む赤身の焼肉] 家族で営むレトロな町の小さな焼肉屋。店主がイチボステーキ、焼きしゃぶ、タン (premium)、ヒレの順に4品を勧め、部位ごとにたれが変わる。常連のグループはミノとテッチャンも頼んで、思わぬおいしさだったと書いている。2026年9月のある会計は何皿も頼んで13,600円、多くは1人6,000〜10,000円ほど。2018年と2020〜2026年の食べログ焼肉・グリル百名店。現金のみ、早めの予約を。17時〜21時半、水曜休み。',
  });
}

// ================================================================ 沐 moku
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040523/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '22:00']);
  put({
    id: 'kyoto_moku_kiyomizu_gojo', name: '沐 (moku)', category: 'OMNI',
    lat: 34.995725, lng: 135.771112, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Genre-free izakaya plates include spring rolls, rare fish katsu, croquette potato salad, gratin and hayashi rice alongside sashimi-style and grilled dishes; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dishes are built on fish, wagyu, chicken, pork and cheese, and the appetiser is a yuzu-scented dashi (2026 reviews).',
    hours_raw: '15:00–22:00 (last order 21:30); closed 2–3 days a week on an irregular schedule posted on Instagram (Tabelog). Bookings through TableCheck (July and October 2026) or by phone; prime evening slots fill three weeks to a month ahead, and same-day cancellations come up (May and August 2026). An appetiser-and-service charge of ¥1,000 a person (Tabelog). 8 counter seats; non-smoking, with an outdoor smoking spot; cards (VISA, Master, JCB, AMEX), e-money and QR accepted (Tabelog). Down a small alley, about 5 min walk from Kiyomizu-Gojo Stn (May 2026; Tabelog: 228 m). Opened 19 December 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Otowa-cho alley near Kiyomizu-Gojo — 5 min walk from Kiyomizu-Gojo Stn',
    cuisine: 'Creative, genre-free izakaya with à la carte plates, classics plus seasonal new dishes, and wine chosen to your taste (2026 reviews) · signature wagyu-cheek skewers in dote-ni (Hatcho miso, close to a Japanese beef stew) ¥900; water eggplant with homemade karasumi ¥1,300; rare buri katsu with sweet-spicy chive sauce and grated daikon ¥2,300 (fish changes with the season: saury, sawara, mackerel); Shiga organic strawberry caprese with stracciatella ¥1,800; spring rolls with seasonal fillings and burrata ¥1,000 (May 2026) · also katsuo tataki, octopus and avocado guacamole, pâté de campagne, croquette potato salad, seafood gratin, balsamic-braised spare ribs, Kyoto akadori chicken with sansho, staff-meal hayashi rice, hojicha Basque cheesecake, cassata (2026 reviews) · wine by the glass, sake, whisky, plum wine (2026 reviews)',
    website: null, gmaps: gm('沐 moku 京都 音羽町'), menu_url: null,
    notes: "[Creative izakaya · Kiyomizu-Gojo, eight seats behind green tiles] An eight-seat counter down an alley near Kiyomizu-Gojo, behind deep-green tiled walls, open from 15:00: genre-free small plates that reviewers come back for — wagyu-cheek dote-ni skewers (¥900), rare-fried seasonal fish katsu with chive sauce, croquette potato salad, burrata spring rolls, water eggplant with homemade karasumi — with wines picked to your taste. Two staff look after the counter. ¥1,000 a head covers the appetiser and service; most bills are ¥10,000–15,000. Book on TableCheck weeks ahead; closed 2–3 days a week (see Instagram). Tabelog Izakaya WEST 100 2026.",
    chef_bio: { chef_name: null, roles: ['Two staff at the counter (August 2026); no one is named in the sources'], origin: null,
      background: 'Opened 19 December 2023 (Tabelog). Reviews from 2026 describe a sommelier choosing the wines (September 2026), staff who greet returning guests by memory (May 2026) and two staff running the room (August 2026). An August 2026 reviewer calls it a restaurant recommended by "Michelin-starred Matsui". Tabelog Izakaya WEST "Tabelog 100" 2026.',
      philosophy: null, specialty: 'Wagyu-cheek dote-ni skewers; rare fish katsu with chive sauce; croquette potato salad.',
      anecdotes: [
        { text: '"The staff remembered me from my last visit, and I felt delighted when they greeted me with, \'It’s been a while!\'" — May 2026.', source: R + 'B502316241/' },
        { text: 'An August 2026 visitor found prime evening slots on a Saturday booked about three weeks to a month ahead and took a 15:30 seat; calls asking for same-day openings came in during the meal.', source: R + 'B534653466/' },
        { text: '"These are made with beef cheek. … The flavor of Hatcho miso stands out, making it understandable why it’s described as a Japanese-style beef stew." — July 2026.', source: R + 'B532677490/' },
        { text: '"With delicious dishes and a fun atmosphere, I lost track of time and ended up staying for 4 hours." — August 2026 (a seventh visit).', source: R + 'B500084588/' },
      ],
      japanese_sources_summary: '食べログ: 創作料理、東山区音羽町325、清水五条駅から228m、15:00〜22:00 (L.O. 21:30)、不定休 (週2〜3日、Instagram で案内)、予約可、お通し・サービス料としてお1人様1,000円、8席 (カウンター)、禁煙 (屋外に喫煙所)、カード・電子マネー・QR 可、2023年12月19日オープン、居酒屋 WEST 百名店 2026。口コミ (2026年5〜10月、英語): TableCheck で予約、緑のタイル、和牛ほほ肉のどて煮串900円 (八丁味噌)、水茄子と自家製カラスミ1,300円、レアのぶりカツ ニラだれと大根おろし2,300円、春巻き、コロッケのポテトサラダ、魚介のグラタン、まかないのハヤシライス、ほうじ茶のバスクチーズケーキ、ソムリエが選ぶワイン、スタッフ2人。',
      confidence: 'medium', sources: [TB, R + 'B487841311/', R + 'B500084588/', R + 'B502316241/', R + 'B505357399/', R + 'B532677490/', R + 'B533234872/', R + 'B534653466/', R + 'B536325248/', R + 'B538458298/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on TableCheck; à la carte at an 8-seat counter; staff explain dishes and pick wines; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区音羽町325',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Izakaya WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (34.995725, 135.771112); cross-checked: GSI 京都府京都市東山区音羽町325番地 (lot) 28 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505357399/'],
    price_note: 'No menu read; prices from a May 2026 review; ¥1,000 a person appetiser and service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Wagyu-cheek skewer in dote-ni', '¥900', 'Classics', 'ask', 'no', 'May 2026.', 'wagyu_dote'),
      it('', '', 'Water eggplant with homemade karasumi', '¥1,300', 'Seasonal', 'ask', 'no', 'May 2026.', 'mizunasu_karasumi'),
      it('', '', 'Rare buri katsu, sweet-spicy chive sauce, grated daikon', '¥2,300', 'Classics', 'no', 'no', 'May 2026; fish changes with the season.', 'rare_fish_katsu'),
      it('', '', 'Shiga organic strawberry caprese with stracciatella', '¥1,800', 'Seasonal', 'ask', 'no', 'May 2026.', 'strawberry_caprese'),
      it('', '', 'Spring rolls with bamboo shoots and burrata', '¥1,000', 'Seasonal', 'no', 'no', 'May 2026; filling changes with the season.', 'spring_rolls'),
    ] }, {
    cuisine: 'ジャンルにとらわれない創作居酒屋。定番と季節の新作のアラカルト、好みに合わせて選ぶワイン (2026年の口コミ)・名物の和牛ほほ肉のどて煮串 (八丁味噌、和風のビーフシチューのよう) 900円、水茄子と自家製カラスミ1,300円、甘辛いニラだれと大根おろしのレアのぶりカツ2,300円 (魚は季節で変わる: さんま、さわら、さば)、滋賀の有機いちごとストラッチャテッラのカプレーゼ1,800円、季節の具とブッラータの春巻き1,000円 (2026年5月)・ほかにかつおのたたき、たことアボカドのワカモレ、パテ・ド・カンパーニュ、コロッケのポテトサラダ、魚介のグラタン、豚スペアリブのバルサミコ煮、Kyoto akadori の鶏の山椒焼き、まかないのハヤシライス、ほうじ茶のバスクチーズケーキ、カッサータ (2026年の口コミ)・グラスワイン、日本酒、ウイスキー、梅酒 (2026年の口コミ)',
    neighborhood: '清水五条近くの音羽町の路地。清水五条駅から徒歩5分',
    gf_detail: '要確認。春巻き、レアの魚のカツ、コロッケのポテトサラダ、グラタン、ハヤシライスなどと、刺身風の皿や焼き物が並ぶジャンルレスな居酒屋。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。料理は魚、和牛、鶏、豚、チーズが中心で、お通しは柚子の香りの出汁 (2026年の口コミ)。',
    notes: '[創作居酒屋・清水五条、緑のタイルの8席] 清水五条近くの路地にある、深い緑のタイル壁の8席のカウンター。15時から開く。リピーターの多いジャンルレスな小皿: 和牛ほほ肉のどて煮串 (900円)、季節の魚のレアカツのニラだれ、コロッケのポテトサラダ、ブッラータの春巻き、水茄子と自家製カラスミ。ワインは好みに合わせて選んでくれる。カウンターはスタッフ2人。お通し・サービス料が1人1,000円、会計は多くが1万〜1万5千円。TableCheck で数週間前に予約を。週2〜3日休み (Instagram で案内)。食べログ居酒屋 WEST 百名店 2026。',
  });
}

save();
