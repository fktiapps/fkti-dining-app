// Osaka sweep (2-mile circle around Dotonbori), batch 186 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + GUFO (airy soft serve and daily gelato; Kita-Horie)
//   + OBRA 心斎橋店 (Uji-matcha café: rich pudding, matcha gelato and lattes, open late at weekends; Minami-Senba)
//   + PALM Cafe&Creperie 堀江 (buckwheat galettes and chewy crepes, dog-friendly terrace; Kita-Horie)
//   + otto. coffee and sweets (terrace café on Shinsaibashi-suji: pudding, seasonal sweets, tacos; Minami-Senba)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 186);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ GUFO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27092229/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://gufoice.shop-pro.jp/';
  const H = day(['12:00', '18:00']);
  put({
    id: 'osaka_gufo_kitahorie', name: 'GUFO', category: 'OMNI',
    lat: 34.67357, lng: 135.495549, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; flavors change daily, some with mix-ins (fig and cheese, cookies), and cones are offered.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: milk-based soft serve and gelato; no dairy-free flavor described.',
    hours_raw: 'Mon, Tue, Thu–Sun 12:00–18:00; closed Wednesday; may change (Tabelog). Cards (JCB, AMEX) and e-money accepted; no QR (Tabelog). Non-smoking. Children and strollers welcome; takeout (Tabelog). Small lines form quickly at weekends (October 2026). Opened 29 April 2016 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 1-11-9, U+ Bldg 1F, glass-fronted — 2–3 min from Yotsubashi Stn',
    cuisine: 'Soft serve and gelato shop (6 counter seats; eat-in space) · very airy soft serve: milk ¥420; Japanese chestnut ¥540; hazelnut cup ¥520 · daily gelato ¥420: salt vanilla; dried fig and cheese; pumpkin; hojicha; Earl Grey chocolate; pistachio · cup or cone',
    website: OWN, gmaps: gm('GUFO 北堀江'), menu_url: null,
    notes: "[Sweets · featherlight soft serve and daily gelato, Kita-Horie] A glass-fronted ice cream shop near Yotsubashi with wood-and-white-tile decor, known for a soft serve so full of tiny air bubbles it eats like whipped cream. The milk flavor (¥420) is lightly sweet; seasonal ones like Japanese chestnut (¥540) and hazelnut taste strongly of the real thing, and portions are generous enough that one diner suggested sharing. The gelato case changes daily (¥420), with flavors such as salt vanilla, dried fig and cheese, pumpkin, hojicha and Earl Grey chocolate. There's a little eat-in space; weekend afternoons bring short lines. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 April 2016 (Tabelog).', background: 'Soft serve and gelato shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Airy soft serve; daily gelato.',
      anecdotes: [
        { text: '"Compared to regular soft serve, it contains a lot of tiny air bubbles, making it incredibly light. You can also taste the rich chestnut flavor." — October 2026, Soft Serve Chestnut ¥540.', source: R + 'B537131661/' },
        { text: '"The salt flavor was more pronounced than I expected, enhancing the sweetness of the vanilla. It was rich yet refreshing…" — October 2026, Salt Vanilla ¥420.', source: R + 'B520953808/' },
      ],
      japanese_sources_summary: '食べログ: GUFO、大阪市西区北堀江1-11-9 U+ビル 1F、四ツ橋駅から162m、月・火・木〜日12:00〜18:00、水曜休み、カード (JCB・AMEX)・電子マネー可、QR不可、禁煙、6席、子ども・ベビーカー歓迎、テイクアウト、2016年4月29日開店、公式サイトあり。口コミ(2026年10月): 細かい空気をたくさん含んだ軽いソフトクリーム、ミルク420円、和栗540円、ヘーゼルナッツのカップ520円、日替わりのジェラート420円 (塩バニラ、ドライいちじくとチーズ、かぼちゃ、hojicha 、アールグレイショコラ)、量が多めで2人で分けてもという声、木と白いタイルの店内、週末はすぐに短い行列、写真に「和栗ソフト」「カボチャやピスタチオ」「本日のアイス」「アールグレイショコラ420円」。',
      confidence: 'medium', sources: [TB, OWN, R + 'B520953808/', R + 'B537131661/', R + 'B537214286/', R + 'B537731152/', R + 'B537946711/', R + 'B538244678/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; small eat-in space (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-11-9 U+ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目11番9号 (go) 3m; offset 7 m east of the Tabelog point to clear my bowl (8 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537131661/', R + 'B520953808/'],
    price_note: 'Prices from October 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('和栗ソフト', '', 'Japanese chestnut soft serve', '¥540', 'Soft serve', 'ask', 'no', 'October 2026.', 'waguri'),
      it('', '', 'Milk soft serve', '¥420', 'Soft serve', 'ask', 'no', 'October 2026.', 'milk'),
      it('', '', 'Gelato of the day', '¥420', 'Gelato', 'ask', 'no', 'October 2026.', 'gelato'),
      it('アールグレイショコラ', '', 'Earl Grey chocolate gelato', '¥420', 'Gelato', 'ask', 'no', 'October 2026.', 'earlgrey'),
    ] }, {
    cuisine: 'ソフトクリームとジェラートの店 (カウンター6席、イートインあり)・空気を含んだ軽いソフトクリーム: ミルク420円、和栗540円、ヘーゼルナッツのカップ520円・日替わりのジェラート420円: 塩バニラ、ドライいちじくとチーズ、かぼちゃ、hojicha 、アールグレイショコラ、ピスタチオ・カップかコーン',
    neighborhood: '北堀江1-11-9 U+ビル 1F、ガラス張りの店。四ツ橋駅から徒歩2〜3分',
    gf_detail: '要確認。グルテンの情報なし。フレーバーは日替わりで、いちじくとチーズやクッキー入りもあり、コーンもある。',
    vegan_detail: '実質ヴィーガンではありません。ミルクのソフトクリームとジェラートで、乳製品を使わないフレーバーの記載なし。',
    notes: '[スイーツ・北堀江、ふわふわのソフトクリームと日替わりジェラート] 四ツ橋近くのガラス張りのアイスの店で、木と白いタイルの店内。細かい空気をたっぷり含んだ、ホイップクリームのように軽いソフトクリームが知られる。ミルク (420円) はほんのり甘く、和栗 (540円) やヘーゼルナッツなど季節のものは素材の味がしっかり。量は多めで、2人で分けてもという声も。ジェラートは日替わり (420円) で、塩バニラ、ドライいちじくとチーズ、かぼちゃ、hojicha 、アールグレイショコラなど。小さなイートインあり、週末の午後は短い行列。水曜休み。',
  });
}

// ================================================================ OBRA 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27156315/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['10:30', '19:00']); const WE = day(['10:30', '23:00']);
  put({
    id: 'osaka_obra_matcha_cafe_shinsaibashi', name: 'OBRA 心斎橋店 (OBRA Shinsaibashi)', category: 'OMNI',
    lat: 34.675511, lng: 135.49856, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu is pudding, cheesecakes, gelato and matcha drinks.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: puddings, cheesecakes, gelato and milk lattes; plain sencha is on the menu.',
    hours_raw: 'Mon–Thu 10:30–19:00 (last order 18:30); Friday–Sunday and holidays 10:30–23:00 (last order 22:30); check Google Maps for changes (Tabelog). Order at the counter, then choose a seat (October 2026). Cards, e-money and QR accepted (Tabelog). Non-smoking. Outlets and Wi-Fi; takeout (Tabelog). Opened 4 May 2026 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WE, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Senba 4-12-9, 1F — 3 min from Shinsaibashi Stn',
    cuisine: 'Uji-matcha and Japanese-tea café (20 seats) · Uji matcha rich pudding ¥900, firm and dense; add rich matcha gelato +¥250; matcha sauce · matcha Basque cheesecake; hojicha baked cheesecake · Uji matcha latte "Zuiun" ¥850, unsweetened; mango matcha latte; matcha strawberry latte · iced sencha · peach pudding in season',
    website: null, gmaps: gm('OBRA 心斎橋 抹茶'), menu_url: null,
    notes: "[Café · an Uji-matcha café for dense pudding and gelato, Shinsaibashi] A calm, wood-accented matcha café near Shinsaibashi Station, opened May 2026 and open until 11 pm at weekends. The signature is a firm, rich Uji matcha pudding (¥900); add a scoop of the intensely bitter matcha gelato (+¥250) and a drizzle of matcha sauce. A matcha Basque cheesecake and a hojicha baked cheesecake are just as rich. Lattes are unsweetened, so the matcha comes through (the 'Zuiun' is ¥850), with mango and strawberry versions too. Diners call prices high and touristy, and one waited a long time, but matcha lovers rate it. Order first, then sit.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 May 2026 (Tabelog).', background: 'Matcha café (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Uji matcha pudding; matcha gelato.',
      anecdotes: [
        { text: '"Pairing the dense and firm matcha pudding with the rich matcha gelato was simply the best! When I added matcha sauce, the matcha flavor intensified…" — October 2026, Uji Matcha Rich Pudding ¥900, gelato +¥250.', source: R + 'B537130601/' },
        { text: '"The matcha latte had no syrup, allowing me to truly enjoy the authentic taste of matcha… Since it\'s priced for tourists, I hope it becomes a bit more affordable." — October 2026.', source: R + 'B537412514/' },
      ],
      japanese_sources_summary: '食べログ: OBRA 心斎橋店、大阪市中央区南船場4-12-9 1F、心斎橋駅から徒歩3分、月〜木10:30〜19:00 (L.O. 18:30)、金〜日・祝10:30〜23:00 (L.O. 22:30)、2026年5月4日開店、カード・電子マネー・QR可、禁煙、20席、電源・Wi-Fi、テイクアウト。口コミ(2026年9〜10月): 宇治抹茶の濃厚プリン900円 (固めで濃い)、濃い抹茶ジェラートのトッピング+250円、抹茶ソース、抹茶バスクチーズケーキ、hojicha のベイクドチーズケーキ、宇治抹茶ラテ「Zuiun」850円 (シロップなし)、マンゴー抹茶ラテ、抹茶いちごラテ、アイスの sencha、桃の季節は桃のプリン、先に注文してから席へ、木を使った落ち着いた店内、値段は高めという声、長く待ったという声。',
      confidence: 'medium', sources: [TB, R + 'B535857638/', R + 'B536507375/', R + 'B537130601/', R + 'B537185011/', R + 'B537412514/', R + 'B537837922/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter, then sit (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-12-9 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目12番9号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537130601/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Uji matcha rich pudding', '¥900', 'Sweets', 'ask', 'no', 'September–October 2026.', 'pudding'),
      it('', '', 'Rich matcha gelato topping', '+¥250', 'Sweets', 'ask', 'no', 'October 2026.', 'gelato'),
      it('', '', 'Uji matcha latte "Zuiun"', '¥850', 'Drinks', '', 'no', 'October 2026.', 'zuiun'),
      it('', '', 'Matcha Basque cheesecake', '', 'Sweets', 'ask', 'no', 'October 2026.', 'basque'),
    ] }, {
    cuisine: '宇治抹茶と日本茶のカフェ (20席)・固めで濃い宇治抹茶の濃厚プリン900円、濃い抹茶ジェラートを+250円で、抹茶ソース・抹茶バスクチーズケーキ、hojicha のベイクドチーズケーキ・シロップなしの宇治抹茶ラテ「Zuiun」850円、マンゴー抹茶ラテ、抹茶いちごラテ・アイスの sencha・季節の桃のプリン',
    neighborhood: '南船場4-12-9 1F。心斎橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。メニューはプリン、チーズケーキ、ジェラート、抹茶のドリンク。',
    vegan_detail: '実質ヴィーガンではありません。プリン、チーズケーキ、ジェラート、ミルクのラテ。sencha はある。',
    notes: '[カフェ・心斎橋、濃厚なプリンとジェラートの宇治抹茶のカフェ] 心斎橋駅近くの木を使った落ち着いた抹茶のカフェで、2026年5月開店、週末は夜11時まで。看板は固めで濃厚な宇治抹茶のプリン (900円) で、苦味のしっかりした抹茶ジェラート (+250円) と抹茶ソースを足して。抹茶バスクチーズケーキやhojicha のベイクドチーズケーキも濃厚。ラテはシロップなしで抹茶がしっかり (「Zuiun」850円)、マンゴーやいちごの抹茶ラテも。値段は高めで観光客向けという声、長く待ったという声もあるが、抹茶好きの評価は高い。先に注文してから席へ。',
  });
}

// ================================================================ PALM Cafe&Creperie 堀江
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27150234/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']); const FS = day(['11:00', '22:30']);
  put({
    id: 'osaka_palm_cafe_creperie_horie', name: 'PALM Cafe&Creperie 堀江 (PALM Cafe&Creperie Horie)', category: 'OMNI',
    lat: 34.67427, lng: 135.495525, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The shop says its galettes are made from buckwheat flour, water and salt only (Tabelog listing), but its crepes use French wheat flour and are cooked in the same kitchen; fillings and griddle sharing are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The galette batter is buckwheat, water and salt (Tabelog listing), but fillings use ham, cheese, egg and butter; no vegan filling is described.',
    hours_raw: 'Mon, Tue, Thu, Sun, holidays and the day after 11:00–22:00 (last order 21:30); Wednesday 11:00–18:30; Friday, Saturday and the day before holidays 11:00–22:30 (Tabelog); closing days may vary. Reservations need a galette or crepe per person, not drinks only (Tabelog). Cards and PayPay accepted; no e-money (Tabelog). Non-smoking inside; e-cigarettes after 17:30; smoking on the terrace (Tabelog). Dogs welcome on the terrace, with crepes for dogs (Tabelog; August 2026). Order by QR code (August 2026).',
    hours: { 0: H, 1: H, 2: day(['11:00', '18:30']), 3: H, 4: FS, 5: FS, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kita-Horie 1-9-14, PAN1914 Bldg 1F — 2 min from Yotsubashi Stn exits 4 and 6',
    cuisine: 'Nordic-style crêperie with a terrace (20 seats: table, counter, sofa, terrace) · buckwheat galettes (buckwheat flour, water and salt): Complete with ham, cheese, egg, tomato, avocado and pesto, set ¥1,900; prosciutto · chewy crepes of French VIRON flour with Échiré butter · chocolate crepe platter with cocoa cookies, almonds, cream and chocolate ice cream · banana juice; café latte; Iced Americano ¥690 · wine and cocktails · crepes for dogs',
    website: null, gmaps: gm('PALM Cafe&Creperie 堀江'), menu_url: TB + 'dtlmenu/',
    notes: "[Crêperie · buckwheat galettes and chewy crepes with a dog-friendly terrace, Kita-Horie] A wood-lined, Nordic-styled crêperie near Yotsubashi, open into the evening. Galettes are made from just buckwheat flour, water and salt; the Complete set (ham, cheese, egg, tomato, avocado and pesto, ¥1,900) changed one diner's view of galettes. The sweet crepes use French flour and Échiré butter, crisp at the edges and chewy, though one diner found the cream excessive. Order by QR at your table. Dogs are welcome on the terrace, and there are even crepes for them. Indoor seats are few, so book; reservations need food, not just drinks. Diners find the drinks pricey.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Crêperie café (Tabelog; 2026 reviews).', philosophy: 'Galettes of buckwheat flour, water and salt; crepes of French VIRON flour (Tabelog listing).', specialty: 'Buckwheat galettes; crepes.',
      anecdotes: [
        { text: '"A. Complete (ham, cheese, egg, tomato, avocado, pesto) crepe set for JPY 1,900… The crepe was made with thick Echire butter, crispy on the outside and chewy on the inside!" — August 2026.', source: R + 'B534231499/' },
        { text: '"The atmosphere is nice, and the crepes are chewy and delicious, but there is just way too much whipped cream and cream!!!" — August 2026.', source: R + 'B535575124/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): PALM Cafe&Creperie 堀江、大阪市西区北堀江1-9-14 PAN1914ビル 1F、四ツ橋駅4・6番出口から徒歩2分、月・火・木・日・祝・祝翌日11:00〜22:00 (L.O. 21:30)、水11:00〜18:30、金・土・祝前日11:00〜22:30、休みは変わることも、ドリンクのみの予約不可 (ガレットかクレープを人数分)、カード・PayPay可、電子マネー不可、店内禁煙 (17:30以降は電子たばこ可)、テラスは喫煙可、20席 (テーブル8、カウンター6、ソファ3、テラス3)、そば粉・水・塩だけのガレット、フランスの VIRON の小麦粉のクレープ、バナナジュース、ワンちゃん用のクレープ。口コミ(2026年8〜10月): 北欧風の木の店内、テラスは犬連れ可、QRで注文、コンプリート (ハム・チーズ・卵・トマト・アボカド・ジェノベーゼ) のセット1,900円、生ハムのガレット、エシレバターのクレープ、チョコレートのクレープ、アイスアメリカーノ690円、もちもちの生地、クリームが多すぎるという声、ドリンクが高めという声、駐車場が見つからなかったという声。',
      confidence: 'medium', sources: [TB, R + 'B532936685/', R + 'B533359103/', R + 'B534231499/', R + 'B535575124/', R + 'B536668111/', R + 'B537537638/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; dog-friendly terrace (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-9-14 PAN1914ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目9番14号 (go) 10m; offset 7 m south of the Tabelog point, which it shares with Mezze Horie; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534231499/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Complete galette set (ham, cheese, egg, tomato, avocado, pesto)', '¥1,900', 'Galettes', 'ask', 'no', 'August 2026.', 'complete'),
      it('', '', 'Prosciutto galette', '', 'Galettes', 'ask', 'no', 'August 2026.', 'prosciutto'),
      it('', '', 'Chocolate crepe', '', 'Crepes', 'no', 'no', 'September 2026.', 'chocolate'),
      it('', '', 'Iced Americano', '¥690', 'Drinks', '', '', 'August 2026.', 'americano'),
    ] }, {
    cuisine: '北欧風のクレープとガレットのカフェ、テラスあり (20席: テーブル、カウンター、ソファ、テラス)・そば粉・水・塩だけのガレット: ハム・チーズ・卵・トマト・アボカド・ジェノベーゼのコンプリートのセット1,900円、生ハム・フランスの VIRON の小麦粉とエシレバターのもちもちのクレープ・ココアクッキー、アーモンド、クリーム、チョコアイスのチョコレートクレープ・バナナジュース、カフェラテ、アイスアメリカーノ690円・ワイン、カクテル・ワンちゃん用のクレープ',
    neighborhood: '北堀江1-9-14 PAN1914ビル 1F。四ツ橋駅4・6番出口から徒歩2分',
    gf_detail: '要確認。店はガレットをそば粉・水・塩だけで作るとしている (食べログ) が、クレープはフランスの小麦粉で同じ厨房で作る。具や鉄板の共用の説明なし。',
    vegan_detail: '要確認。ガレットの生地はそば粉・水・塩 (食べログ) だが、具はハム、チーズ、卵、バターで、ヴィーガンの具の記載なし。',
    notes: '[クレープ・北堀江、そば粉のガレットともちもちクレープ、犬連れ可のテラス] 四ツ橋近くの木を使った北欧風のクレープ店で、夜まで開いている。ガレットはそば粉・水・塩だけで作り、ハム・チーズ・卵・トマト・アボカド・ジェノベーゼのコンプリートのセット (1,900円) でガレットの印象が変わったという声。甘いクレープはフランスの小麦粉とエシレバターで、縁はパリッと中はもちもち。クリームが多すぎるという声も。席でQR注文。テラスは犬連れ可で、ワンちゃん用のクレープまで。店内の席は少ないので予約を。予約はドリンクだけでは不可。ドリンクは高めという声。',
  });
}

// ================================================================ otto. coffee and sweets
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27129138/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_otto_coffee_sweets_shinsaibashi', name: 'otto. coffee and sweets', category: 'OMNI',
    lat: 34.676305, lng: 135.501509, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; sweets include puddings, crepes, tarts, mille-feuille and cheesecake, and there are tacos.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: egg-rich puddings, custard and cream desserts; nothing described as vegan.',
    hours_raw: 'Daily 9:00–19:30; may change (Tabelog). No cards or e-money; PayPay accepted (Tabelog). Non-smoking. A covered, terrace-like room facing Shinsaibashi-suji, air-conditioned (June 2026). Dog cookie add-on +¥250 (October 2026). Opened 19 March 2022 (Tabelog).',
    hours: ALL(day(['09:00', '19:30'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-6-18, K\'s Bldg Shinsaibashi 1F, up a few steps on Shinsaibashi-suji — 3 min from Crysta Nagahori north exit 10',
    cuisine: 'Terrace-style café on the arcade (12 seats: 6 at the counter, 6 at tables) · firm egg pudding with bitter caramel; pudding with vanilla ice cream or Mont Blanc cream · seasonal sweets: sweet-potato ice cream pudding ¥780 (autumn); purple sweet-potato Mont Blanc mille-feuille with mochi and custard; sweet-potato tart · sugar-butter crepe · soufflé cheesecake · tacos with Corona · coffee from two beans; hojicha latte; Earl Grey ¥550 · brunch menu · dog cookies +¥250',
    website: null, gmaps: gm('otto. coffee and sweets 心斎橋'), menu_url: null,
    notes: "[Café · a bright café on the Shinsaibashi-suji arcade for pudding and seasonal sweets] A light, white café up a few steps from the Shinsaibashi-suji arcade, with a covered, terrace-like room facing the street that's a calm break from the crowds. Open from 9 am for brunch through evening. The pudding is firm and eggy with a slightly bitter caramel, and the seasonal menu goes all in: an autumn sweet-potato pudding with ice cream (¥780), a purple sweet-potato Mont Blanc mille-feuille layered with mochi and custard, a cinnamon sweet-potato tart. There's a sugar-butter crepe, soufflé cheesecake, and even tacos with a Corona. Coffee comes from a choice of two beans. Drinks from about ¥500. No cards or e-money; PayPay accepted.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 March 2022 (Tabelog).', background: 'Café on Shinsaibashi-suji (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Pudding; seasonal sweets.',
      anecdotes: [
        { text: '"The pudding had a nice, soft texture with a slightly bitter caramel, giving it a sophisticated touch." — August 2026.', source: R + 'B537023041/' },
        { text: '"The purple sweet potato Mont Blanc mille-feuille… features mochi and custard layered within the flaky pastry, creating an indescribably delicious combination of chewy and crispy textures." — October 2026.', source: R + 'B537983408/' },
      ],
      japanese_sources_summary: '食べログ: otto. coffee and sweets、大阪市中央区南船場3-6-18 K\'sビル心斎橋 1F、クリスタ長堀北10番出口から徒歩3分、毎日9:00〜19:30、カード・電子マネー不可、PayPay可、禁煙、12席 (カウンター6、テーブル6)、2022年3月19日開店。口コミ(2026年6〜10月): 心斎橋筋の商店街に面したテラスのような席 (冷房あり)、白を基調にした明るい店、固めで卵の味の濃いプリンとほろ苦いカラメル、バニラアイスやモンブランクリームのプリン、ハロウィンのさつまいもアイスのプリン780円、紫芋のモンブランミルフィーユ (mochi とカスタード)、さつまいものタルト、シュガーバターのクレープ、スフレチーズケーキ、タコスとコロナ、2種の豆から選ぶコーヒー、hojicha ラテ、アールグレイ550円、ブランチ、犬用のクッキー+250円、ドリンクは500円ほどから、ひとりで回していた日も手際がよかったという声。',
      confidence: 'medium', sources: [TB, R + 'B529344617/', R + 'B529869371/', R + 'B537023041/', R + 'B537399708/', R + 'B537411623/', R + 'B537983408/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Arcade-facing terrace room; no cards, PayPay accepted (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-6-18 K\'sビル心斎橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目6番18号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537411623/', R + 'B529344617/'],
    price_note: 'Prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sweet-potato ice cream pudding (autumn)', '¥780', 'Sweets', 'ask', 'no', 'September 2026.', 'imo_pudding'),
      it('', '', 'Purple sweet-potato Mont Blanc mille-feuille', '', 'Sweets', 'no', 'no', 'October 2026.', 'millefeuille'),
      it('', '', 'Sugar-butter crepe', '', 'Sweets', 'no', 'no', 'June 2026.', 'crepe'),
      it('', '', 'Earl Grey tea', '¥550', 'Drinks', '', '', 'September 2026.', 'earlgrey'),
    ] }, {
    cuisine: '商店街に面したテラス風のカフェ (12席: カウンター6、テーブル6)・ほろ苦いカラメルの固めの卵のプリン、バニラアイスやモンブランクリームのプリン・季節のスイーツ: さつまいもアイスのプリン780円 (秋)、mochi とカスタードの紫芋のモンブランミルフィーユ、さつまいものタルト・シュガーバターのクレープ・スフレチーズケーキ・タコスとコロナ・2種の豆のコーヒー、hojicha ラテ、アールグレイ550円・ブランチ・犬用のクッキー+250円',
    neighborhood: '南船場3-6-18 K\'sビル心斎橋 1F、心斎橋筋の数段上がった店。クリスタ長堀北10番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。プリン、クレープ、タルト、ミルフィーユ、チーズケーキ、タコスもある。',
    vegan_detail: '実質ヴィーガンではありません。卵の濃いプリン、カスタード、クリームのデザート。ヴィーガンの記載なし。',
    notes: '[カフェ・心斎橋筋、プリンと季節のスイーツの明るいカフェ] 心斎橋筋の商店街から数段上がった白い明るいカフェで、通りに面した屋根つきのテラスのような席は人混みからのひと休みに。朝9時からブランチ、夕方まで。プリンは卵の味が濃い固めで、ほろ苦いカラメル。季節のメニューは力が入っていて、秋はさつまいもアイスのプリン (780円)、mochi とカスタードを重ねた紫芋のモンブランミルフィーユ、シナモンの効いたさつまいものタルト。シュガーバターのクレープ、スフレチーズケーキ、コロナと一緒にタコスまで。コーヒーは2種の豆から。ドリンクは500円ほどから。カード・電子マネー不可、PayPay可。',
  });
}

save();
