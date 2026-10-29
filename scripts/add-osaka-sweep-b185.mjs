// Osaka sweep (2-mile circle around Dotonbori), batch 185 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 寺cafe & Live 茶庭 (temple café in Banpukuji with garden views, open 3 days a week; Minami-Horie)
//   + 浪速氷室 (summer-only old-style kakigori stand, ¥360 cups, closed on rainy days; Kita-Horie)
//   + 豆ルンルン (Taiwanese-style soy milk café with meat buns; Namba-naka)
//   + 和かろん専門店 和果 (fresh-dorayaki "wacaron" and mochi rolls, takeaway; Kita-Horie)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 185);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 寺cafe & Live 茶庭
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27103642/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.horie-manpukuji.com/chaniwa';
  const TF = day(['12:00', '17:30']);
  put({
    id: 'osaka_tera_cafe_chaniwa_minamihorie', name: '寺cafe & Live 茶庭 (Tera cafe & Live Chaniva)', category: 'OMNI',
    lat: 34.671782, lng: 135.494542, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; sweets include cheesecake, chiffon, monaka and red-bean sweets.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Matcha and red-bean sweets are on the menu, but cakes and lattes use dairy; nothing described as vegan.',
    hours_raw: 'Thursday and Friday 12:00–17:30 (last order 17:00); Saturday 11:00–17:00 (Tabelog listing); closing days may vary. Cash only (Tabelog; March 2026). Non-smoking. Children and pets welcome; kids menu (Tabelog). Opened 1 April 2017 in a corner of Banpukuji temple (Tabelog).',
    hours: { 3: TF, 4: TF, 5: day(['11:00', '17:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 1-14-23, inside Banpukuji temple — about 6 min from Yotsubashi Stn',
    cuisine: 'Temple café with garden views (20 seats, indoor and garden) · Japanese sweets made by an in-house patissier (Tabelog listing) · today\'s sweets set ¥1,650, e.g. cheesecake with caramel and almonds · seasonal wagashi set: red bean paste, chestnut, ice cream, chrysanthemum-shaped monaka · matcha (about ¥1,400); matcha latte; hojicha latte · coffee ¥550; iced café latte ¥700 · kakigori with ume syrup and a pickled plum in summer',
    website: OWN, gmaps: gm('寺cafe 茶庭 南堀江'), menu_url: null,
    notes: "[Café · a temple café overlooking a garden, Minami-Horie] A calm café tucked into a corner of Banpukuji, a roughly 400-year-old Jodo Shinshu temple in Minami-Horie, open only Thursday to Saturday. Window seats look straight onto the tended temple garden. The sweets are made in-house: a daily sweets set (¥1,650) such as a rich cheesecake with caramel and almonds, or a seasonal wagashi tray of red bean, chestnut, ice cream and chrysanthemum monaka, good with the properly made matcha. Summer brings an ume-syrup kakigori topped with a pickled plum. Prices run high for drinks (matcha about ¥1,400), which one diner put down to the view. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 April 2017 inside Banpukuji, a Jodo Shinshu Honganji-sect temple (Tabelog; July 2026 review).', background: 'Temple café (Tabelog; 2025–2026 reviews).', philosophy: 'Original Japanese sweets by an in-house patissier (Tabelog listing).', specialty: 'Seasonal sweets sets with matcha.',
      anecdotes: [
        { text: '"The cheesecake was rich and creamy, topped with a strong caramel sauce and almond slices that enhanced its flavor." — July 2026, Today\'s Sweets Set ¥1,650.', source: R + 'B531836405/' },
        { text: '"On the tray, there was a delightful array of sweet red bean paste, chestnuts, ice cream, and adorable chrysanthemum-shaped monaka and wagashi!… the authentic matcha was simply outstanding!" — October 2026.', source: R + 'B537606053/' },
      ],
      japanese_sources_summary: '食べログ: 寺cafe & Live 茶庭、大阪市西区南堀江1-14-23、四ツ橋駅から徒歩6分、Banpukuji の一角、毎週木・金12:00〜17:30 (L.O. 17:00)、土11:00〜17:00、休みは変わることも、カード・電子マネー・QR不可、禁煙、20席、テラス、子ども・ペット歓迎、キッズメニュー、2017年4月1日開店、パティシエのオリジナルの和菓子、公式サイトあり。口コミ(2025年11月〜2026年10月): Jodo Shinshu の約400年の寺、窓から手入れされた庭、本日のスイーツセット1,650円 (キャラメルとアーモンドのチーズケーキ)、季節の和菓子セット (あんこ、栗、アイス、菊の形のmonaka )、抹茶約1,400円、抹茶ラテ、ほうじ茶ラテ、コーヒー550円、アイスカフェラテ700円、夏は梅干しをのせた梅シロップのかき氷、写真の「メニュー（かき氷）」、ドリンクは高めという声、現金のみ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B517441082/', R + 'B525007092/', R + 'B530252601/', R + 'B531836405/', R + 'B534720225/', R + 'B537606053/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Temple grounds; cash only; open three days a week (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-14-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM 茶庭 node/10111167742 2m; GSI 大阪府大阪市西区南堀江一丁目14番23号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531836405/', R + 'B517441082/'],
    price_note: 'Prices from November 2025–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Today\'s sweets set', '¥1,650', 'Sweets', 'ask', 'no', 'July 2026.', 'set'),
      it('', '', 'Seasonal wagashi and drink set', '', 'Sweets', 'ask', 'ask', 'October 2026.', 'wagashi'),
      it('', '', 'Coffee', '¥550', 'Drinks', '', '', 'November 2025.', 'coffee'),
      it('', '', 'Iced café latte', '¥700', 'Drinks', '', 'no', 'November 2025.', 'latte'),
    ] }, {
    cuisine: '庭を望む寺のカフェ (20席、室内と庭)・店のパティシエが作る和菓子 (食べログ)・本日のスイーツセット1,650円 (キャラメルとアーモンドのチーズケーキなど)・季節の和菓子セット: あんこ、栗、アイス、菊の形のmonaka ・抹茶 (約1,400円)、抹茶ラテ、hojicha ラテ・コーヒー550円、アイスカフェラテ700円・夏は梅干しをのせた梅シロップのかき氷',
    neighborhood: '南堀江1-14-23、Banpukuji の中。四ツ橋駅から徒歩約6分',
    gf_detail: '要確認。グルテンの情報なし。チーズケーキ、シフォン、monaka 、あんこの和菓子など。',
    vegan_detail: '要確認。抹茶やあんこの和菓子はあるが、ケーキやラテは乳製品を使う。ヴィーガンの記載なし。',
    notes: '[カフェ・南堀江、庭を眺める寺のカフェ] 南堀江にある約400年のJodo Shinshu の寺、Banpukuji の一角の静かなカフェで、営業は木〜土だけ。窓辺の席からは手入れの行き届いた寺の庭がすぐ目の前に。甘いものは店の手作りで、キャラメルとアーモンドの濃厚なチーズケーキなど日替わりのスイーツセット (1,650円) や、あんこ・栗・アイス・菊の形のmonaka の季節の和菓子の盆を、きちんと点てた抹茶とともに。夏は梅干しをのせた梅シロップのかき氷も。飲み物は高め (抹茶約1,400円) で、景色代かもという声。現金のみ。',
  });
}

// ================================================================ 浪速氷室
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27051764/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_naniwa_korishitsu_kitahorie', name: '浪速氷室 (Naniwa Korishitsu)', category: 'OMNI',
    lat: 34.673398, lng: 135.495724, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plain shaved ice with syrup and milk; the syrups are not described for gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Syrup-only kakigori may suit, but the syrups are not described; milk and condensed-milk toppings are not vegan.',
    hours_raw: 'Summer only: open roughly 12:00 (12:30 on weekdays per one review) to 18:00 daily in season; closed on rainy days; the 2026 season ended 23 September, so it is closed until next summer (Tabelog; September 2026). Cash only (Tabelog). Takeaway stand with a three-person bench; many eat standing on the pavement (Tabelog; August 2026). Short lines on hot afternoons (August 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 1-11-3 — 1 min from Yotsubashi Stn exit 6',
    cuisine: 'Old-style summer kakigori stand (three-person bench) · fluffy ice shaved from large clear blocks · ¥360 a cup: strawberry, melon, Hawaiian Blue, lemon with house syrup · milk or condensed-milk topping +¥100 · lemonade',
    website: null, gmaps: gm('浪速氷室 北堀江'), menu_url: null,
    notes: "[Shaved ice · a summer-only old-style kakigori stand, Yotsubashi] A long-running ice shop by Yotsubashi Station that sells kakigori only in summer, shaved from big clear blocks into a fluffy pile that doesn't bring on brain freeze, then soaked through with syrup. A cup is ¥360 (strawberry, melon, Hawaiian Blue, or lemon with house-made syrup), and milk adds ¥100, so you still get change from ¥500. There's just a three-person bench; many eat standing on the pavement, often with families and a short line on hot afternoons. It closes on rainy days. The 2026 season ended on 23 September; check again next summer. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Long-established ice shop open in summer (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Old-style kakigori.',
      anecdotes: [
        { text: '"In a world where desserts often exceed JPY 1,000, this fluffy kakigori is available for just JPY 360." — August 2026.', source: R + 'B532985742/' },
        { text: '"Using pure ice, it\'s less likely to give you a brain freeze and has a fluffy texture." — September 2026, Strawberry ¥360.', source: R + 'B536977390/' },
      ],
      japanese_sources_summary: '食べログ: 浪速氷室、大阪市西区北堀江1-11-3、四ツ橋駅6番出口から徒歩1分、12:00〜18:00、雨の日は休み、夏季のみかき氷、カード・電子マネー・QR不可、禁煙、3人がけのベンチ、テイクアウト。口コミ(2026年8〜9月): 夏だけの昔ながらの氷屋、大きな透明の氷を細かく削る、ふわふわで頭がキーンとなりにくい、1杯360円 (いちご、メロン、ハワイアンブルー、自家製シロップのレモン)、ミルク追加100円で500円でおつりがくる、レモネード、歩道で立って食べる、暑い午後は短い行列、家族連れも多い、写真に「今度はいちごにミルク増量しよかな」、2026年の営業は9月23日で終了。',
      confidence: 'medium', sources: [TB, R + 'B106217126/', R + 'B532985742/', R + 'B533711958/', R + 'B534761294/', R + 'B536446977/', R + 'B536977390/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Summer-only stand; standing on the pavement; cash only (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-11-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026; seasonal, closed outside summer.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目11番3号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B106217126/', R + 'B536446977/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kakigori, strawberry, melon, Hawaiian Blue or lemon', '¥360', 'Kakigori', 'ask', 'ask', 'August–September 2026.', 'kakigori'),
      it('', '', 'Milk topping', '+¥100', 'Kakigori', 'ask', 'no', 'August 2026.', 'milk'),
    ] }, {
    cuisine: '夏だけの昔ながらのかき氷の店 (3人がけのベンチ)・大きな透明の氷をふわふわに削る・1杯360円: いちご、メロン、ハワイアンブルー、自家製シロップのレモン・ミルクか練乳のトッピング+100円・レモネード',
    neighborhood: '北堀江1-11-3。四ツ橋駅6番出口から徒歩1分',
    gf_detail: '要確認。氷にシロップとミルクのかき氷で、シロップのグルテンについての記載なし。',
    vegan_detail: '要確認。シロップだけのかき氷は合うかもしれないが、シロップの説明はなく、ミルクや練乳はヴィーガンではない。',
    notes: '[かき氷・四ツ橋、夏だけの昔ながらのかき氷の店] 四ツ橋駅すぐの長く続く氷屋で、かき氷は夏だけ。大きな透明の氷をふわふわに削って、頭がキーンとなりにくく、シロップが中までしみている。1杯360円 (いちご、メロン、ハワイアンブルー、自家製シロップのレモン) で、ミルクを足しても100円、500円でおつりがくる。3人がけのベンチだけで、たいていは歩道で立って食べる。家族連れも多く、暑い午後は短い行列。雨の日は休み。2026年の営業は9月23日で終了したので、来年の夏に確認を。現金のみ。',
  });
}

// ================================================================ 豆ルンルン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27139582/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'osaka_mame_runrun_nambanaka', name: '豆ルンルン (Mame Runrun)', category: 'OMNI',
    lat: 34.662662, lng: 135.499615, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soy milk drinks are the core; ingredients of the flavored drinks and the meat buns are not described for gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A soy milk café with drinks such as plain, oolong-tea, black sesame and berry soy milk (sweetness adjustable); the meat buns are not vegan, and drink sweeteners are not described.',
    hours_raw: 'Tue–Sun 8:00–18:00; closed Monday; may change (Tabelog). Order and pay at the register, then sit (October 2025). Cards and QR (PayPay, d Barai, au PAY) accepted; no e-money (Tabelog). Non-smoking. Children and strollers welcome; takeout (Tabelog). Opened 20 November 2023 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-naka 3-4-40, Minami Osaka Bldg 1F, near Edion Arena — 5 min from Nankai Namba Stn',
    cuisine: 'Taiwanese-style soy milk café (12 seats) · plain soy milk, hot or cold; oolong-tea soy milk; black sesame soy milk; mixed berry soy milk ¥660 · choose your sweetness level · Taiwanese meat bun ¥320; meat bun and soy milk for ¥500 · shaved ice with tapioca in summer · complimentary sunflower seeds',
    website: null, gmaps: gm('豆ルンルン 難波中'), menu_url: null,
    notes: "[Café · a Taiwanese-style soy milk café for breakfast, Namba] A cheerful little café near Edion Arena decorated with cartoon soybeans, serving soy milk made the Taiwanese way: lighter and more refreshing than Japanese soy milk, with a stronger bean taste. Choose plain, oolong-tea, black sesame or mixed berry (¥660), and set the sweetness level yourself; one diner found 25% just right. A fluffy, juicy Taiwanese meat bun (¥320) makes it breakfast, and the bun-plus-soy-milk combo was ¥500. Summer adds shaved ice with tapioca, and you get sunflower seeds to crack while you sit. Opens at 8:00; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 November 2023 (Tabelog).', background: 'Soy milk café (Tabelog; 2025–2026 reviews).', philosophy: 'Taiwanese-style soy milk (October 2025 reviews).', specialty: 'Taiwanese soy milk; meat buns.',
      anecdotes: [
        { text: '"I opted for no added sweetness, allowing the gentle sweetness and tartness of the berries to blend smoothly with the soy milk…" — October 2025, Mixed Berry Soy Milk ¥660, Meat Bun ¥320.', source: R + 'B516074654/' },
        { text: '"I had the Taiwanese meat bun and soy milk, and I was amazed that it only cost JPY 500." — June 2026.', source: R + 'B532252434/' },
      ],
      japanese_sources_summary: '食べログ: 豆ルンルン、大阪市浪速区難波中3-4-40 南大阪ビル 1F、南海なんば駅から徒歩5分、火〜日8:00〜18:00、月曜休み、カード・QR (PayPay・d払い・au PAY) 可、電子マネー不可、禁煙、12席 (テーブル8、カウンター4)、子ども・ベビーカー歓迎、テイクアウト、2023年11月20日開店。口コミ(2025年8月〜2026年6月): 台湾式の豆乳の店、豆のキャラクターのかわいい店内、エディオンアリーナの近く、プレーンの豆乳 (ホット・アイス)、烏龍茶の豆乳、黒ごまの豆乳、ミックスベリーの豆乳660円、甘さを選べる (25%がちょうどいいという声)、台湾の肉まん320円、肉まんと豆乳で500円、夏はタピオカのかき氷、ひまわりの種のサービス、レジで注文して席へ、もう少しコクがほしいという声も。',
      confidence: 'medium', sources: [TB, R + 'B512751779/', R + 'B515545296/', R + 'B516074654/', R + 'B522539044/', R + 'B527714178/', R + 'B532252434/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the register; adjustable sweetness (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中3-4-40 南大阪ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM Mamerunrun node/2294543132 10m; GSI 大阪府大阪市浪速区難波中三丁目4番40号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516074654/', R + 'B532252434/'],
    price_note: 'Prices from October 2025 and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mixed berry soy milk', '¥660', 'Soy milk', 'ask', 'ask', 'October 2025.', 'berry'),
      it('', '', 'Black sesame soy milk', '', 'Soy milk', 'ask', 'ask', 'February 2026.', 'sesame'),
      it('', '', 'Taiwanese meat bun', '¥320', 'Food', 'ask', 'no', 'October 2025.', 'nikuman'),
      it('', '', 'Meat bun and soy milk', '¥500', 'Food', 'ask', 'no', 'June 2026.', 'combo'),
    ] }, {
    cuisine: '台湾式の豆乳のカフェ (12席)・プレーンの豆乳 (ホットかアイス)、烏龍茶の豆乳、黒ごまの豆乳、ミックスベリーの豆乳660円・甘さを選べる・台湾の肉まん320円、肉まんと豆乳で500円・夏はタピオカのかき氷・ひまわりの種のサービス',
    neighborhood: '難波中3-4-40 南大阪ビル 1F、エディオンアリーナの近く。南海なんば駅から徒歩5分',
    gf_detail: '要確認。中心は豆乳のドリンクで、味つきのドリンクや肉まんの材料のグルテンについての記載なし。',
    vegan_detail: '要確認。プレーン、烏龍茶、黒ごま、ベリーなどの豆乳 (甘さを選べる) の店。肉まんはヴィーガンではありません。ドリンクの甘味料の説明もなし。',
    notes: '[カフェ・なんば、朝ごはんにもなる台湾式の豆乳のカフェ] エディオンアリーナ近くの、豆のキャラクターで飾られた明るい小さなカフェで、台湾式に作る豆乳を出す。日本の豆乳より軽くすっきりして、豆の味が強い。プレーン、烏龍茶、黒ごま、ミックスベリー (660円) から選び、甘さも自分で決められ、25%がちょうどいいという声。ふわふわでジューシーな台湾の肉まん (320円) をつければ朝ごはんに、肉まんと豆乳で500円だったという声も。夏はタピオカのかき氷、席ではひまわりの種をつまめる。朝8時から、月曜休み。',
  });
}

// ================================================================ 和かろん専門店 和果
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27119198/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://waka-kitahorie.jp';
  const H = day(['11:00', '18:00']);
  put({
    id: 'osaka_wacaron_waka_kitahorie', name: '和かろん専門店 和果 (Wacaron Senmon Ten Waka)', category: 'OMNI',
    lat: 34.673399, lng: 135.49543, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: dorayaki-style pancake wrappers around cream, red bean paste and mochi; no gluten-free item described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: cream, custard and cheese-cream fillings; nothing described as vegan.',
    hours_raw: 'Mon, Tue, Thu–Sun 11:00–18:00; closed Wednesday; may change (Tabelog). Mainly takeaway; four counter seats listed, and one diner ate on a bench by the door (Tabelog; May 2026). Wacaron are handed over frozen and thaw to eating temperature (May–August 2026). Cards and QR accepted; no e-money (Tabelog). Opened 10 September 2020 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 1-11-6 — 2 min from Yotsubashi Stn exit 6',
    cuisine: 'Japanese-sweets shop for "wacaron," fresh dorayaki filled with cream, plus mochi rolls (mostly takeaway; 4 counter seats) · wacaron: blueberry cheese cream ¥480; custard; matcha with red bean; hojicha with red bean; sweet potato · mitarashi roll, a dango wrapped in pancake, ¥580 · roll with red bean and mochi ¥400 · roasted sweet potato and red bean roll · Anno sweet-potato mitarashi roll ¥900 (event, October 2026)',
    website: OWN, gmaps: gm('和かろん専門店 和果 北堀江'), menu_url: null,
    notes: "[Sweets · fresh-dorayaki 'wacaron' and mitarashi rolls, Kita-Horie] A small Japanese-sweets shop near Yotsubashi that turns dorayaki into 'wacaron': thin, soft pancakes sandwiching a thick layer of cream in flavors like blueberry cheese (¥480), custard, or matcha and hojicha with red bean. They're handed over frozen and soften to eating temperature as you walk. The other draw is the mitarashi roll (¥580), a soft dango in a freshly cooked pancake with sweet-savory sauce, which one diner came back for; another wished for more sauce. Also red-bean-and-mochi and roasted-sweet-potato rolls. Mostly takeaway, with a bench by the door. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 September 2020 (Tabelog).', background: 'Japanese-sweets shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Wacaron (fresh dorayaki); mitarashi roll.',
      anecdotes: [
        { text: '"It features a thin, soft dorayaki skin with a thick layer of cream in between. It was handed to us frozen solid, and after carrying it around… it melted to the perfect eating temperature." — August 2026, blueberry cheese cream ¥480.', source: R + 'B532834440/' },
        { text: '"During my last visit to Osaka, I couldn\'t forget the deliciousness of the \'Mitara-shi Maki,\' so I returned on this trip!" — August 2026.', source: R + 'B534929409/' },
      ],
      japanese_sources_summary: '食べログ: 和かろん専門店 和果、大阪市西区北堀江1-11-6、四ツ橋駅6番出口から徒歩2分、月・火・木〜日11:00〜18:00、水曜休み、カード・QR可、電子マネー不可、禁煙、カウンター4席、テイクアウト、2020年9月10日開店、公式サイトあり。口コミ(2026年5〜10月): 写真に「和かろん(生どら焼き)ブルーベリーチーズクリーム(税込480円)」、薄くやわらかいどら焼きの生地に厚いクリーム、凍った状態で渡され歩くうちに食べごろに、カスタード、抹茶と小豆、ほうじ茶と小豆、さつまいも、mitarashi の巻き (パンケーキでdango を包む) 580円、あんこともちの巻き400円、焼き芋の巻き、イベントでAnno 芋の mitarashi の巻き900円、また買いに来たという声、たれが少なめという声、入口のベンチで食べられる、ショーケースはなくメニューから選ぶ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B527809385/', R + 'B530041166/', R + 'B532834440/', R + 'B534929409/', R + 'B536217219/', R + 'B537061587/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the menu; mostly takeaway (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-11-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目11番6号 (go) 4m; 27 m from Naniwa Korishitsu, no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532834440/', R + 'B530041166/'],
    price_note: 'Prices from May–October 2026 reviews.', last_checked: TODAY, items: [
      it('和かろん(生どら焼き)ブルーベリーチーズクリーム', '', 'Wacaron (fresh dorayaki), blueberry cheese cream', '¥480', 'Wacaron', 'no', 'no', 'August 2026.', 'blueberry'),
      it('', '', 'Mitarashi roll (dango in pancake)', '¥580', 'Rolls', 'no', 'ask', 'May–September 2026.', 'mitarashi'),
      it('', '', 'Roll with red bean and mochi', '¥400', 'Rolls', 'no', 'ask', 'May 2026.', 'anmochi'),
    ] }, {
    cuisine: '生どら焼き「和かろん」ともちの巻きの和菓子の店 (主に持ち帰り、カウンター4席)・和かろん: ブルーベリーチーズクリーム480円、カスタード、抹茶と小豆、hojicha と小豆、さつまいも・パンケーキでdango を包んだ mitarashi の巻き580円・あんこともちの巻き400円・焼き芋とあんこの巻き・イベントでAnno 芋の mitarashi の巻き900円 (2026年10月)',
    neighborhood: '北堀江1-11-6。四ツ橋駅6番出口から徒歩2分',
    gf_detail: '実質グルテンフリーではありません。クリーム、あんこ、もちをどら焼きのような生地で包む。グルテンフリーの品の記載なし。',
    vegan_detail: '実質ヴィーガンではありません。クリーム、カスタード、チーズクリーム。ヴィーガンの記載なし。',
    notes: '[和菓子・北堀江、生どら焼きの「和かろん」と mitarashi の巻き] 四ツ橋近くの小さな和菓子の店で、どら焼きを「和かろん」にした生どら焼きが名物。薄くやわらかい生地で厚いクリームをはさみ、ブルーベリーチーズ (480円)、カスタード、抹茶や hojicha と小豆など。凍った状態で渡され、歩くうちにちょうどいい固さに。もうひとつの目玉は、焼きたての生地でやわらかいdango を包み甘辛いたれをかけた mitarashi の巻き (580円) で、また買いに来たという声、たれがもう少しほしいという声も。あんこともち、焼き芋の巻きも。主に持ち帰りで、入口にベンチあり。水曜休み。',
  });
}

save();
