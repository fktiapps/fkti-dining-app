// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 17.
//   + センバキッチン 南船場本店 (Semba Kitchen: big Minami-Senba Italian bistro, charcoal grill and Awaji fresh pasta)
//   + おでんとお蕎麦居酒屋 じんべえ 難波店 (Jinbee Namba: oden, wholesaler sashimi and soba, Restaurant Bank group)
//   + 生ラム肉専門店 らむ屋 (Ramuya: fresh-lamb jingisukan behind Sennichimae, open to 05:00)
//   + たこ焼きとおでん 石橋 (Takoyaki to Oden Ishibashi: clam-dashi oden and takoyaki at Yotsubashi, open to 04:00)
//   - skipped 27135046 そば道 裏なんば店: chain (7 Soba Michi shops on the operator DR Co.'s list)
//   - skipped 27121646 難波 焼とり porc: a same-concept branch of 焼とりporc, already in data
//   Lane: ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 16):
//   27135046 (skip), 27052902, 27121646 (skip), 27105974, 27096690, 27075718 (last two digits 46, 02, 46, 74, 90, 18).
//   Group checks (working line: 2–4 same-concept shops, none in data = small group; 5+ = chain; same-concept branch of a
//   brand in data = skip). Semba Kitchen: this main shop plus a Green House branch at Herbis Plaza (Gnavi) — small group.
//   Jinbee Namba: Restaurant Bank's oden-and-soba Jinbee concept (this shop and the Osaka Ekimae 2 Building shop on the
//   group's list); the group's Sakana no Jinbee in data is a different concept (coordinator, 2026-11-02: one shop per
//   concept). Ramuya and Ishibashi: no other shops found.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27135046', 'Chain (5+): そば道 has seven shops (裏なんば, みのおキューズモール, 西のはなれ, 天神大名, OIMACHI TRACKS, 大井町, 仙霞路 Shanghai) on the shop list of its operator 株式会社ディーアール, https://www.dr-t.co.jp/');
skip('27121646', 'Same-concept branch of a brand already in data: 焼とりporc is osaka_yakitori_porc_higashishinsaibashi (心斎橋東 焼とりporc)');

// ================================================================ センバキッチン 南船場本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27052902/'; const R = TB + 'dtlrvwlst/'; const GH = 'https://r.gnavi.co.jp/g3f0xp2g0000/';
  const A = day(['15:00', '23:00']); const B = day(['15:00', '24:00']);
  put({
    id: 'osaka_semba_kitchen_minamisenba', name: 'センバキッチン 南船場本店 (Semba Kitchen Minami senba honten)', category: 'OMNI',
    lat: 34.676475, lng: 135.497934, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pasta, pizza and the fried chicken are wheat-based; charcoal-grilled meats, rotisserie chicken, carpaccio and ajillo are where to ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled beef and chicken, seafood, anchovy potato salad and cheese pastas.',
    hours_raw: 'Sun–Thu and holidays 15:00–23:00 (last orders food 22:00, drinks 22:30); Fri, Sat and the day before a holiday 15:00–24:00 (last orders 23:00 and 23:30) (Tabelog). A ¥330 table charge (Tabelog). Courses with all-you-can-drink from ¥4,000 (Tabelog); a ¥2,500 share course (October 2026). Order by QR code (October 2026). Reservations; a booking may be released 15 minutes after the time without contact (Tabelog); one diner was told a time limit only after ordering (May 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR including Alipay and WeChat Pay (Tabelog). 80 seats with a counter and an open kitchen, standing parties to 90; open terrace; non-smoking; outlets; English and digital menus; children and strollers welcome (Tabelog). Opened 15 September 2010 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Senba 4-13-12, OMビル 1F — 5 min from exit 3 of Shinsaibashi Stn, 3 min from exit 13 of Crista Nagahori',
    cuisine: 'Charcoal-grilled Italian bistro with over 80 dishes: tapas, grills, pasta and pizza (Tabelog) · charcoal-grilled meats including Hokkaido Tokachi beef (spencer roll or strip loin) and beef outside skirt; rotisserie chicken; charcoal tandoori chicken (Tabelog; June–October 2026) · chilled appetizer assortment with the signature anchovy potato salad and salmon carpaccio; trippa of honeycomb tripe; fried chicken with cheese and pepper; ajillo (2026) · fresh pasta from Awaji Seimen, such as corn cacio e pepe or tarako butter; quattro formaggi pizza (October 2026) · a ¥2,500 selectable share course (October 2026); courses with all-you-can-drink from ¥4,000 (Tabelog) · a long wine list (May 2026)',
    website: null, gmaps: gm('センバキッチン 南船場本店'), menu_url: null,
    notes: "[Italian · Minami-Senba, a big charcoal-grill bistro] A spacious, lively Italian bistro in Minami-Senba with an open kitchen, a terrace and some 80 seats, open from 15:00. It is a place for sharing: anchovy potato salad and carpaccio, trippa, rotisserie and charcoal-grilled meats such as Tokachi beef, and fresh Awaji pasta like corn cacio e pepe, with plenty of wine. A ¥2,500 share course is good value, an October 2026 diner says. Reviews are split: many found it a pleasant surprise, while others in 2026 reported tough steak, mushy pasta, a broken chair, a seat by the restroom or brusque glass-clearing. Open late at weekends.",
    chef_bio: { chef_name: null, roles: ['Kitchen team (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: "Namba-Semba Food Landmark", a popular charcoal-grilled Italian in Minami-Senba with 80 seats and over 80 dishes; opened 15 September 2010. A Green House branch at Herbis Plaza is listed on Gnavi.',
      philosophy: 'A menu you will not tire of even if you come every day (Tabelog).', specialty: 'Charcoal-grilled meats; tapas.',
      anecdotes: [
        { text: '"What truly impressed me was the \'Corn Cacio e Pepe\' made with fresh pasta from Awaji Seimen!" — October 2026, the ¥2,500 share course.', source: R + 'B538200786/' },
        { text: '"I ordered the Hokkaido beef strip loin, which looked delicious in the photos, but I found it to be a bit tough when I actually ate it." — June 2026.', source: R + 'B530018084/' },
        { text: '"The all-you-can-drink option was available, but the glass exchange felt a bit aggressive" — September 2026.', source: R + 'B536623888/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): センバキッチン 南船場本店、イタリアン・ダイニングバー・居酒屋、南船場4-13-12 OMビル 1F、Shinsaibashi 駅3番出口から徒歩5分、Crista Nagahori 13番出口から3分、日〜木・祝 15:00〜23:00、金土・祝前日 15:00〜24:00、チャージ330円、飲み放題つきのコース4,000円から、カード・電子マネー・QR可、80席、立食90名まで、テラス、オープンキッチン、禁煙、英語メニュー、デジタルメニュー、2010年9月15日オープン、炭火焼きの十勝牛などの肉、タパス、パスタ、ピザ。口コミ(2026年5月〜10月): アンチョビポテサラ、サーモンのカルパッチョ、トリッパ、ロティサリーチキン、炭火のタンドリーチキン、淡路製麺の生パスタ (とうもろこしのカチョエペペ、たらこバター)、2,500円のシェアコース、QR で注文、肉が固い、パスタがやわらかすぎる、トイレ前の席、接客への不満の声も。',
      confidence: 'medium', sources: [TB, GH, R + 'B527470412/', R + 'B528402354/', R + 'B530018084/', R + 'B531286054/', R + 'B531428883/', R + 'B533154311/', R + 'B534736806/', R + 'B535936081/', R + 'B536623888/', R + 'B537253733/', R + 'B538200786/', R + 'B538219504/'] },
    cultural_comfort: { level: 'english', note: 'English and digital menus (Tabelog); QR ordering (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-13-12 OMビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目13番12号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B538200786/'],
    price_note: 'Course prices from Tabelog (read November 2026) and an October 2026 review; no à la carte prices found.', last_checked: TODAY, items: [
      it('', '', 'Selectable share course', '¥2,500', 'Courses', 'ask', 'no', 'October 2026.', 'share_course'),
      it('', '', 'Course with all-you-can-drink (from)', '¥4,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'Anchovy potato salad', '', 'Appetizers', 'ask', 'no', '2026.', 'anchovy_potato'),
      it('', '', 'Corn cacio e pepe (fresh pasta)', '', 'Pasta', 'no', 'no', 'October 2026.', 'cacio_pepe'),
    ] }, {
    cuisine: '80品以上の炭火焼きのイタリアンビストロ: タパス、炭火焼き、パスタ、ピザ (食べログ)・北海道十勝牛 (スペンサーロールやストリップロイン) や牛の外ハラミなどの炭火焼き、ロティサリーチキン、炭火のタンドリーチキン (食べログ、2026年6〜10月)・看板のアンチョビポテトサラダとサーモンのカルパッチョの冷製前菜盛り合わせ、ハチノスのトリッパ、チーズと胡椒のチキンフライ、アヒージョ (2026年)・淡路製麺の生パスタで、とうもろこしのカチョエペペやたらこバター、クアトロフォルマッジのピザ (2026年10月)・2,500円の選べるシェアコース (2026年10月)、飲み放題つきのコースは4,000円から (食べログ)・豊富なワイン (2026年5月)',
    neighborhood: '南船場4-13-12 OMビル 1F。Shinsaibashi 駅3番出口から徒歩5分、Crista Nagahori 13番出口から3分',
    gf_detail: '要確認。グルテンの情報なし。パスタ、ピザ、チキンフライは小麦。炭火焼きの肉、ロティサリーチキン、カルパッチョ、アヒージョから確認を。',
    vegan_detail: 'ヴィーガンではありません。牛や鶏の炭火焼き、魚介、アンチョビのポテサラ、チーズのパスタ。',
    notes: '[イタリアン・南船場、炭火焼きの大きなビストロ] 南船場の広くにぎやかなイタリアンビストロで、オープンキッチン、テラス、約80席、15時から。アンチョビポテサラやカルパッチョ、トリッパ、ロティサリーや十勝牛などの炭火焼き、とうもろこしのカチョエペペなどの淡路の生パスタを、ワインとシェアして。2,500円のシェアコースはお得だと2026年10月の口コミ。評価は分かれ、うれしい驚きという声が多い一方、2026年には肉が固い、パスタがやわらかすぎる、椅子が壊れていた、トイレ前の席、グラスの下げ方が乱暴という声も。週末は遅くまで。',
  });
}

// ================================================================ おでんとお蕎麦居酒屋 じんべえ 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27105974/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:30']); const SA = day(['12:00', '23:30']); const SU = day(['12:00', '23:00']);
  put({
    id: 'osaka_oden_soba_jinbee_namba', name: 'おでんとお蕎麦居酒屋 じんべえ 難波店 (Oden to Osoba Izakaya Jinbee Nanba Ten)', category: 'OMNI',
    lat: 34.664796, lng: 135.505449, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The oden broth tastes strongly of soy sauce (October 2026) and the fish cakes are homemade, not described; soba, fu, gyoza in broth, tempura and chicken nanban contain wheat. Sashimi is the plainest choice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in an Osaka-style dashi, homemade fish cakes, sashimi and chicken.',
    hours_raw: 'Mon–Fri 17:00–23:30 (last order 23:00); Sat 12:00–23:30 (last order 23:00); Sun 12:00–23:00 (last order 22:00); irregular closures (Tabelog). Happy hour, including weekends (October–November 2026). A ¥330 appetizer charge (Tabelog). Reservations; course cancellations by the day before; two hours when busy (Tabelog). A ¥5,000 course of ten dishes with 90-minute all-you-can-drink (Tabelog). Order by QR code (August 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and PayPay (Tabelog). 69 seats: a counter round the oden pot and tables downstairs, tatami and tables upstairs (up to 40, private for 35+); non-smoking, ashtray outside; takeaway (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 1-8 — 5 min from Namba Stn (Midosuji, Sennichimae and Yotsubashi lines), near Nippombashi',
    cuisine: 'Oden, sashimi and soba (Tabelog) · homemade fish-cake oden in an Osaka-style dashi, ordered by the piece or as a platter: daikon, chikuwa, ganmodoki, thick fried tofu, egg, shirataki, potato, mochi, chicken wings, chicken skin, okonomi oden; gyoza in oden broth (Tabelog; August–November 2026) · sashimi, five-kind platter, from the group\'s own wholesaler Uoya Ebizo; katsuo tataki (Tabelog; 2026) · chicken nanban, four big pieces; seseri with grilled negi; motsu ponzu; homemade red yuzu-pepper tempura; sweet potato with butter; fu; spaghetti salad; fried octopus (August–October 2026) · soba to finish: mori soba, hanamaki soba, soba with meat (August–September 2026) · dashi-wari (sake or shochu with oden broth), shochu with soba-yu, rare Miyazaki shochu, sake (Tabelog; 2026) · a ¥5,000 course with 90-minute all-you-can-drink (Tabelog)',
    website: null, gmaps: gm('おでんとお蕎麦居酒屋 じんべえ 難波店'), menu_url: null,
    notes: "[Oden · Namba Sennichimae, oden, wholesaler sashimi and soba] A busy oden izakaya near Nippombashi that shares the Jinbee name and the wholesaler Uoya Ebizo with Sakana no Jinbee (Tabelog), with a counter round the simmering oden pot downstairs and tatami upstairs. Order oden by the piece, homemade fish cakes, daikon, chicken wings falling off the bone, even gyoza in broth, with sashimi from that wholesaler, then finish with soba. Regulars love a dashi-wari, sake or shochu cut with the oden broth. Diners in 2026 praise the broth, the value and the happy hour; one found the broth strongly soy-flavored. Book ahead in the evening; open from noon at weekends.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: sashimi delivered daily from the partner wholesaler Uoya Ebizo, homemade nerimono oden in an Osaka-style dashi and soba to finish; a lively counter round the oden pot downstairs; rare Miyazaki shochu. An August 2026 diner writes: "This Jinbee is different from the others!"',
      philosophy: null, specialty: 'Homemade fish-cake oden; dashi-wari; soba.',
      anecdotes: [
        { text: '"I noticed they had a sake with dashi on the drink menu, so I ordered that at the end! It was also very tasty, so I highly recommend it." — August 2026, after oden and meat soba.', source: R + 'B534580713/' },
        { text: '"Gyoza in Oden Broth: Isn\'t it rare to have gyoza in oden broth?" — September 2026, finishing with hanamaki soba.', source: R + 'B535355616/' },
        { text: '"The oden had a strong soy sauce flavor." — October 2026.', source: R + 'B538423727/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): おでんとお蕎麦居酒屋 じんべえ 難波店、居酒屋・おでん・そば、難波千日前1-8、Namba 駅から徒歩5分、月〜金 17:00〜23:30 (L.O.23:00)、土 12:00〜23:30 (L.O.23:00)、日 12:00〜23:00 (L.O.22:00)、不定休、お通し330円、予約可、コースのキャンセルは前日まで、混雑時は2時間、90分飲み放題つきの10品のコース5,000円、カード・電子マネー・PayPay可、69席 (1階はおでん鍋を囲むカウンターとテーブル、2階は座敷とテーブル、40名まで)、禁煙 (屋外に灰皿)、テイクアウト、自社の卸 Uoya Ebizo から直送の刺身、自家製の練り物のおでんと大阪のお出汁、締めの蕎麦、宮崎の珍しい焼酎。口コミ(2026年8月〜11月): おでん (大根、ちくわ、がんもどき、厚揚げ、卵、手羽先、鶏皮、餅)、おでん出汁の餃子、刺身5種盛り、鰹のたたき、チキン南蛮、せせりのねぎ焼き、自家製の赤柚子胡椒天、出汁割り、蕎麦湯割り、もり蕎麦、花巻蕎麦、肉蕎麦、QR で注文、ハッピーアワー、醤油の味が強いという声も。',
      confidence: 'medium', sources: [TB, R + 'B418485851/', R + 'B534222284/', R + 'B534484410/', R + 'B534580713/', R + 'B535355616/', R + 'B535472646/', R + 'B536413945/', R + 'B537316491/', R + 'B538036180/', R + 'B538297976/', R + 'B538423727/', R + 'B538522878/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The shop welcomes international guests (Tabelog); QR ordering (August 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前1-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前1番8号 (go) 12m; osaka_tazya_namba (same address, 2F) is 10.6 m away, not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the course price is published (Tabelog, read November 2026); no à la carte prices found.', last_checked: TODAY, items: [
      it('おでん', '', 'Oden (by the piece or as a platter)', '', 'Oden', 'ask', 'no', '2026 reviews.', 'oden'),
      it('', '', 'Sashimi, five kinds', '', 'Sashimi', 'ask', 'no', 'October 2026.', 'sashimi'),
      it('', '', 'Dashi-wari (sake or shochu with oden broth)', '', 'Drinks', 'ask', 'no', 'August–September 2026.', 'dashiwari'),
      it('', '', 'Course of ten dishes with 90-minute all-you-can-drink', '¥5,000', 'Courses', 'no', 'no', 'Tabelog.', 'course'),
    ] }, {
    cuisine: 'おでん、刺身、蕎麦 (食べログ)・大阪のお出汁で炊く自家製の練り物のおでんを1個ずつか盛り合わせで: 大根、ちくわ、がんもどき、厚揚げ、卵、しらたき、じゃがいも、餅、手羽先、鶏皮、お好みおでん。おでん出汁の餃子 (食べログ、2026年8〜11月)・卸の Uoya Ebizo から届く刺身の5種盛り、鰹のたたき (食べログ、2026年)・大きな4切れのチキン南蛮、せせりのねぎ焼き、もつポン、自家製の赤柚子胡椒天、さつまいものバター、麩、スパゲッティサラダ、たこの唐揚げ (2026年8〜10月)・締めの蕎麦: もり蕎麦、花巻蕎麦、肉蕎麦 (2026年8〜9月)・出汁割り、蕎麦湯割りの焼酎、宮崎の珍しい焼酎、日本酒 (食べログ、2026年)・90分飲み放題つきのコース5,000円 (食べログ)',
    neighborhood: '難波千日前1-8、Nippombashi の近く。Namba 駅 (Midosuji・Sennichimae・Yotsubashi Line) から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。おでんの出汁は醤油の味が強く (2026年10月)、自家製の練り物の中身も書かれていない。蕎麦、麩、餃子、天ぷら、チキン南蛮は小麦を含む。刺身がいちばんシンプル。',
    vegan_detail: 'ヴィーガンではありません。大阪のお出汁のおでん、自家製の練り物、刺身、鶏。',
    notes: '[おでん・難波千日前、おでんと卸の刺身と蕎麦] Nippombashi 近くのにぎやかなおでん居酒屋で、さかなのじんべえと同じじんべえの名と卸 Uoya Ebizo を持つ (食べログ)。1階はぐつぐつのおでん鍋を囲むカウンター、2階は座敷。おでんは1個ずつ、自家製の練り物、大根、骨からほろりと外れる手羽先、おでん出汁の餃子まで。その卸の刺身も頼んで、締めは蕎麦。常連のお気に入りは日本酒や焼酎をおでんの出汁で割る出汁割り。2026年の口コミでは出汁、値段、ハッピーアワーが好評で、醤油の味が強いという声も。夜は予約がおすすめ、週末は昼12時から。',
  });
}

// ================================================================ 生ラム肉専門店 らむ屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27096690/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '05:00']); const WE = day(['11:00', '05:00']);
  put({
    id: 'osaka_ramuya_sennichimae', name: '生ラム肉専門店 らむ屋 (Nama Lamb Niku Senmon Ten Ramuya)', category: 'OMNI',
    lat: 34.668234, lng: 135.505152, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Plain grilled lamb is where to start; the dipping sauce, tsukemen, lamb curry and sausage are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a lamb restaurant; the vegetables are grilled in lamb fat on the jingisukan pan (May 2026).',
    hours_raw: 'Weekdays 17:00–05:00; weekends and holidays 11:00–05:00; open all year (Tabelog). Reservations; online table bookings may be seated at the counter (Tabelog). No service or table charge (Tabelog). Courses ¥4,580 and ¥6,280 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR (Tabelog). 25 seats: 4 at the counter, 21 at tables; smoking allowed (Tabelog; May–June 2026); wheelchair accessible; outlets (Tabelog). Your clothes will smell of lamb (March 2026). Opened 14 February 2017 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-6-1, 山喜登会館 2F, a back-street second floor — 3 min from Kintetsu Nippombashi Stn',
    cuisine: 'Jingisukan of fresh, never-frozen lamb, grilled at the table with vegetables (Tabelog; 2026) · lamb leg, special chuck eye roll, lamb chops (the most popular), mutton loin, lamb neck, kalbi; lamb tongue, heart, liver and thymus in limited numbers (Tabelog; March–September 2026) · lamb sausage; lamb curry; seared mutton; bok choy kimchi; green-onion salad; potato salad (Tabelog; 2026) · tsukemen in the lamb broth to finish (Tabelog; May 2026) · courses: casual ¥4,580 (leg, chuck eye roll, mutton loin, vegetables, tsukemen); gourmet ¥6,280 (adds lamb chops, sausage and potato salad) (Tabelog) · Sapporo Classic, Asahi Super Dry and Black Label beer, sake and shochu (Tabelog; August 2026)',
    website: null, gmaps: gm('生ラム肉専門店 らむ屋 千日前'), menu_url: null,
    notes: "[Jingisukan · Sennichimae, fresh lamb until 5 am] A small second-floor jingisukan restaurant on a back street near Nippombashi, open until 5:00 every day, serving chilled, never-frozen lamb that even first-timers find mild. Grill the chuck eye roll and leg on the jingisukan pan, let the fat drip onto the bean sprouts and chives, then add the popular lamb chops, rarer cuts like tongue, heart and liver, and finish with tsukemen in the lamb broth or the lamb curry. The staff explain cuts and cooking. Diners in 2026 call it their favorite lamb; some found the lamb chops or mutton less impressive, and smoking is allowed inside.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a fresh-lamb specialist using only the freshest lamb, with lamb chops as the most popular dish and limited lamb breast, tongue and heart; open until 5:00; opened 14 February 2017. 2026 reviews: the meat is chilled, never frozen, and staff advise searing it lightly.',
      philosophy: 'Fresh, mild lamb for first-timers and those who usually avoid it (Tabelog).', specialty: 'Fresh-lamb jingisukan; lamb chops.',
      anecdotes: [
        { text: '"They mentioned that the meat is chilled and not frozen, and that it should be lightly seared with a slightly rare center." — September 2026.', source: R + 'B536315051/' },
        { text: '"The surrounding vegetables are incredibly delicious as well, so I recommend letting the lamb fat drip onto them for an even better taste." — May 2026, a second visit.', source: R + 'B530466821/' },
        { text: '"To be honest, the recommended lamb chops didn\'t impress me that much." — April 2026, who loved the lamb curry.', source: R + 'B492584000/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 生ラム肉専門店 らむ屋、ジンギスカン、千日前1-6-1 山喜登会館 2F、Kintetsu Nippombashi 駅から徒歩3分、平日17:00〜5:00、土日祝11:00〜5:00、年中無休、予約可 (ネット予約のテーブル席がカウンターになることも)、サービス料・チャージなし、カード・電子マネー・QR可、25席 (カウンター4、テーブル21)、喫煙可、車椅子可、電源、2017年2月14日オープン、新鮮な生ラム、一番人気のラムチョップ、ラムの胸肉・タン・ハツは数量限定、カジュアルコース4,580円、ジンギスカン満喫コース6,280円、北海道限定の Sapporo Classic。口コミ(2026年3月〜9月): ラムチョップ、肩ロース、もも、マトンロース、ネック、カルビ、タン、レバー、ハツ、ソーセージ、ラムカレー、締めのつけ麺、冷蔵で冷凍しない肉、臭みがない、喫煙可が気になるという声、服ににおいがつく。',
      confidence: 'medium', sources: [TB, R + 'B492584000/', R + 'B519734062/', R + 'B524917694/', R + 'B526196160/', R + 'B529713171/', R + 'B530285843/', R + 'B530466821/', R + 'B533832536/', R + 'B534805532/', R + 'B536315051/', R + 'B536483765/', R + 'B536513934/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain cuts and cooking (June and September 2026); many overseas guests (May 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-6-1 山喜登会館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目6番1号 (go) 3m; osaka_tabucchan_sennichimae (same address) is 5.2 m away, not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (read November 2026), tax included; no à la carte prices found.', last_checked: TODAY, items: [
      it('', '', 'Casual course: lamb leg, chuck eye roll, mutton loin, vegetables, tsukemen', '¥4,580', 'Courses', 'ask', 'no', 'Tabelog.', 'casual_course'),
      it('', '', 'Jingisukan gourmet course (adds lamb chops, sausage, potato salad)', '¥6,280', 'Courses', 'ask', 'no', 'Tabelog.', 'gourmet_course'),
      it('', '', 'Lamb chops', '', 'Lamb', 'ask', 'no', '2026 reviews.', 'lamb_chops'),
      it('', '', 'Lamb curry', '', 'Rice', 'ask', 'no', 'April and September 2026.', 'lamb_curry'),
    ] }, {
    cuisine: '冷凍しない新鮮な生ラムのジンギスカンを、野菜と一緒に席で焼く (食べログ、2026年)・ラムのもも、特選肩ロース、一番人気のラムチョップ、マトンロース、ネック、カルビ。数量限定のタン、ハツ、レバー、胸腺 (食べログ、2026年3〜9月)・ラムのソーセージ、ラムカレー、マトンの炙り、チンゲン菜キムチ、ねぎサラダ、ポテトサラダ (食べログ、2026年)・締めはラムの出汁のつけ麺 (食べログ、2026年5月)・コース: カジュアル4,580円 (もも、肩ロース、マトンロース、野菜、つけ麺)、満喫6,280円 (ラムチョップ、ソーセージ、ポテトサラダつき) (食べログ)・Sapporo Classic、Asahi Super Dry、Black Label のビール、日本酒、焼酎 (食べログ、2026年8月)',
    neighborhood: '千日前1-6-1 山喜登会館 2F、路地の2階。Kintetsu Nippombashi 駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。味つけなしの焼いたラムから確認を。タレ、つけ麺、ラムカレー、ソーセージの中身は書かれていない。',
    vegan_detail: 'ヴィーガンではありません。ラムの店で、野菜もジンギスカン鍋でラムの脂で焼く (2026年5月)。',
    notes: '[ジンギスカン・千日前、朝5時までの生ラム] Nippombashi 近くの路地の2階にある小さなジンギスカン店で、毎日朝5時まで。冷凍しない冷蔵の生ラムは、初めての人にもくせがないと評判。肩ロースやももを鍋で焼き、脂をもやしやニラに落とし、人気のラムチョップ、タン、ハツ、レバーといった珍しい部位も。締めはラムの出汁のつけ麺かラムカレーで。スタッフが部位や焼き方を説明してくれる。2026年の口コミではいちばんのラムという声が多く、ラムチョップやマトンはそれほどでもという声も。店内は喫煙可。',
  });
}

// ================================================================ たこ焼きとおでん 石橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27075718/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '04:00']);
  put({
    id: 'osaka_takoyaki_oden_ishibashi_kitahorie', name: 'たこ焼きとおでん 石橋 (Takoyaki to Oden Ishibashi)', category: 'OMNI',
    lat: 34.674677, lng: 135.497271, cuisine_type: 'oden',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki is a wheat batter. The clam-dashi oden is not described for gluten; fish cakes such as chikuwa and maruten often contain wheat, so ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: everything is made with clam (asari) dashi (Tabelog).',
    hours_raw: 'Daily 17:00–04:00 (last order 03:00); open all year (Tabelog). A ¥418 appetizer charge, quail eggs in July–August 2026 (Tabelog; 2026). Reservations; no same-day online changes; a booking is released 15 minutes after the time without notice (Tabelog). Courses with all-you-can-drink ¥4,700–¥5,000; parties to 40 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 30 seats: a counter of 4, tables, a tatami area and a loft for 2–8; open terrace; smoking allowed; free Wi-Fi; sports viewing (Tabelog). Opened 10 October 2013 (Tabelog); formerly 蛸焼とおでん くれ屋 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kita-Horie 1-1-3, 四ツ橋日生ビル別館 1F (Nishi-ku) — seconds from exit 3 of Yotsubashi Stn',
    cuisine: 'Oden and takoyaki built on clam (asari) dashi, used in every dish (Tabelog) · oden in clam broth with homemade fish cakes, as platters of five or eight, with the broth clams; daikon, maruten, chikuwa, beef tendon (Tabelog; August 2026) · takoyaki in a clam-dashi batter: with sauce ¥528, with salt, or dashi takoyaki dipped Akashi-yaki style in clam broth (June–August 2026) · sashimi such as water octopus; sea grapes; hot pots in the courses (Tabelog; August 2026) · quail eggs ¥440 (August 2026) · draft beer ¥660; gari chuhai; summer sakes; mega mugs (July–September 2026)',
    website: null, gmaps: gm('たこ焼きとおでん 石橋 四ツ橋'), menu_url: null,
    notes: "[Oden · Yotsubashi, clam-dashi oden and takoyaki until 4 am] A small, lantern-lit izakaya steps from Yotsubashi Station where everything starts from clam (asari) dashi: homemade fish-cake oden in a gentle clam broth with the clams themselves, and takoyaki with that broth in the batter, eaten with sauce, salt, or dipped Akashi-yaki style. Add sashimi, sea grapes and an Osaka gari chuhai. It stays open until 4:00 every night, so it fills with second and third stops. Diners in 2026 praise the broth and the takoyaki; one found the oden under-soaked and the appetizer charge high. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a clam-dashi specialist whose asari dashi is used in every dish; all the oden fish cakes are homemade; open until 4:00; opened 10 October 2013; former name 蛸焼とおでん くれ屋.',
      philosophy: null, specialty: 'Clam-dashi oden; takoyaki.',
      anecdotes: [
        { text: '"What sets their takoyaki apart is that they use asari (small clam) dashi in the batter." — July 2026, a solo third stop, takoyaki with sauce ¥528.', source: R + 'B531221512/' },
        { text: '"The clams are a standout ingredient, adding a nice touch." — August 2026, ordering both the eight- and five-piece oden.', source: R + 'B463587659/' },
        { text: '"The daikon wasn\'t soaked enough, and the maruten and chikuwa were hardly infused at all. However, the beef tendon was delicious." — August 2026.', source: R + 'B533933002/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): たこ焼きとおでん 石橋 (旧店名 蛸焼とおでん くれ屋)、おでん・たこ焼き・居酒屋、西区北堀江1-1-3 四ツ橋日生ビル別館 1F、Yotsubashi 駅3番出口から徒歩8秒、毎日17:00〜4:00 (L.O.3:00)、年中無休、お通し418円、予約可、飲み放題つきのコース4,700〜5,000円、40名まで、カード・PayPay可、30席 (カウンター4、テーブル、座敷、2〜8名のロフト)、テラス、喫煙可、無料Wi-Fi、2013年10月10日オープン、浅利出汁をすべての料理に、自家製の練り物のおでん。口コミ(2026年6月〜9月): あさり出汁のおでん5種・8種盛り、あさり、たこ焼き (ソース528円、塩、出汁だこ)、刺身、海ぶどう、うずらの卵440円、生ビール660円、ガリチューハイ、夏酒、メガジョッキ、出汁のしみが浅いという声も。',
      confidence: 'medium', sources: [TB, R + 'B463587659/', R + 'B529779041/', R + 'B529803670/', R + 'B530862280/', R + 'B531009558/', R + 'B531221512/', R + 'B532207939/', R + 'B533933002/', R + 'B534024750/', R + 'B534221748/', R + 'B534710543/', R + 'B536458642/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-1-3 四ツ橋日生ビル別館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目1番3号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531221512/', R + 'B533933002/', TB],
    price_note: 'Prices from July–August 2026 reviews (as reported) and Tabelog courses (read November 2026).', last_checked: TODAY, items: [
      it('', '', 'Takoyaki with sauce', '¥528', 'Takoyaki', 'no', 'no', 'July 2026.', 'takoyaki'),
      it('', '', 'Dashi takoyaki (dipped in clam broth)', '', 'Takoyaki', 'no', 'no', 'August 2026.', 'dashi_tako'),
      it('', '', 'Oden platter, five or eight kinds', '', 'Oden', 'no', 'no', 'August 2026.', 'oden_platter'),
      it('', '', 'Quail eggs', '¥440', 'Oden', 'ask', 'no', 'August 2026.', 'quail'),
      it('', '', 'Course with all-you-can-drink', '¥4,700', 'Courses', 'no', 'no', 'Tabelog (¥5,000 premium).', 'course'),
    ] }, {
    cuisine: 'すべての料理に使う浅利出汁のおでんとたこ焼き (食べログ)・自家製の練り物をあさりの出汁で炊くおでんは5種か8種の盛り合わせで、出汁のあさりも。大根、まる天、ちくわ、牛すじ (食べログ、2026年8月)・あさり出汁を生地に入れたたこ焼きは、ソース528円、塩、出汁につけて明石焼き風に食べる出汁だこ (2026年6〜8月)・水だこなどの刺身、海ぶどう、コースには鍋も (食べログ、2026年8月)・うずらの卵440円 (2026年8月)・生ビール660円、ガリチューハイ、夏酒、メガジョッキ (2026年7〜9月)',
    neighborhood: '西区北堀江1-1-3 四ツ橋日生ビル別館 1F。Yotsubashi 駅3番出口からすぐ',
    gf_detail: 'グルテンフリーではありません。たこ焼きは小麦の生地。あさり出汁のおでんのグルテンは書かれておらず、ちくわやまる天などの練り物は小麦を含むことが多いので確認を。',
    vegan_detail: 'ヴィーガンではありません。すべての料理にあさりの出汁を使う (食べログ)。',
    notes: '[おでん・四ツ橋、あさり出汁のおでんとたこ焼き、朝4時まで] Yotsubashi 駅すぐの、提灯の灯る小さな居酒屋で、すべてはあさり出汁から。自家製の練り物をやさしいあさりの出汁で炊いたおでんにはあさりも入り、たこ焼きの生地にもその出汁。ソース、塩、または明石焼き風に出汁につけて。刺身、海ぶどう、大阪のガリチューハイも。毎晩朝4時まで開いていて、2軒目、3軒目の客でにぎわう。2026年の口コミでは出汁とたこ焼きが好評で、おでんの味のしみが浅い、お通しが高いという声も。店内は喫煙可。',
  });
}

save();
