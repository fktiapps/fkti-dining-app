// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 20.
//   + 米とデミグラス Kome to Demiglace (demi-glace hamburg steak with pot-cooked rice, Namba-naka)
//   + COLONY by EQI (pastry chefs' café of soufflé pancakes and parfaits, Amerikamura, cash only)
//   + 焼肉 肉どうし 裏難波店 Yakiniku Nikudoushi (sauce-led wagyu yakiniku, Ura-Namba)
//   + 炭と海鮮と串焼きと肴 とっとっと 難波千日前店 Totto (Hakata-style robata, sashimi and mentaiko motsunabe)
//   - 27107431 黒毛和牛一頭買い焼肉 道頓堀みつる 心斎橋店: branch of 道頓堀みつる, already in data
//     (osaka_dotonbori_mitsuru_sohonten).
//   - 27145227 焼肉ぽんが 心斎橋店: Yakiniku Ponga has shops in Meguro, Tamachi, Enoshima, Nagoya, Susukino, Kyoto
//     and Yokohama (search results) — chain (5+).
//   - 27005639 串の坊 大阪法善寺本店: Kushinobo has many shops in Tokyo, Osaka and Kagoshima (Ginza, Shinjuku
//     Isetan, Hankyu Umeda, Abeno Harukas, Kyobashi, Crysta Nagahori, Shin-Umeda City ...) — chain (5+).
//   Group-size line (brief): 肉どうし has 北浜本店 too (search results; a July 2026 reviewer names the Ozet Group) —
//   small group. とっとっと has a 四条河原町店 in Kyoto — small group. 米とデミグラス and COLONY: one shop found each.
//   None of the four is in data/osaka.json (grep by name, Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27107431', 'branch of a brand in data: 道頓堀みつる (osaka_dotonbori_mitsuru_sohonten)');
skip('27145227', 'chain: 焼肉ぽんが (Yakiniku Ponga), shops in Tokyo, Kanagawa, Nagoya, Sapporo, Kyoto');
skip('27005639', 'chain: 串の坊 (Kushinobo), many shops in Tokyo, Osaka and Kagoshima');

// ================================================================ 米とデミグラス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27126571/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '22:30']);
  put({
    id: 'osaka_kome_to_demiglace_namba', name: '米とデミグラス (Kome to Demiglace)', category: 'OMNI',
    lat: 34.663114, lng: 135.503344, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Hamburg steaks come in demi-glace (a sauce usually thickened with flour); sets add fried shrimp, pork or chicken cutlets and kakiage.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, cutlets and egg, with a consommé soup.',
    hours_raw: 'Daily 11:30–22:30; hours may change (Tabelog). No reservations; phone closed, Tabelog says to book online (Tabelog). No credit cards; e-money and QR payment accepted (Tabelog). Non-smoking (Tabelog). Mobile ordering on your phone (September 2026). Rice is cooked in a pot after you order, about 10–15 minutes (August–October 2026). Freebies: a raw egg or a fried shrimp for adding the shop on LINE, ice cream for a social-media post (August–October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-naka 2-2-16 — 2 min from Nankai Namba Stn',
    cuisine: 'Demi-glace hamburg steak on a hot skillet with rice cooked to order in a small pot (free refills), soup and vegetables (2026 reviews) · Teritama burger, a seasonal hamburg with fried egg white and a yolk, red-wine teriyaki sauce, ¥1,480 before tax; cheese demi-glace hamburg with ebi fry set ¥1,880 before tax (October 2026) · demi-glace hamburg and shrimp fry lunch; cheese chicken-katsu burger; hamburg with a big kakiage (September 2026) · cheese demi-glace hamburg with cheese shaved at the table; Kurobuta pork cutlet with wasabi soy (September 2026) · "Kome Demi Manma" rice bowl with cheese and egg yolk (August 2026) · tomato-garlic hamburg lunch (September 2026), Tsukimi hamburg (October 2026), doria (September 2026), demi chicken-katsu set (September 2026) · potato Mont Blanc dessert (August 2025)',
    website: null, gmaps: gm('米とデミグラス 難波'), menu_url: null,
    notes: '[Yoshoku · Namba, hamburg steak and pot-cooked rice] A clean, casual hamburg-steak shop two minutes from Nankai Namba where every set comes with rice cooked to order in its own pot (allow 10–15 minutes). Order the cheese demi-glace hamburg or the seasonal Teritama burger, about ¥1,500–2,000 before tax. No credit cards and no bookings; order on your phone. A LINE sign-up gets a free egg or fried shrimp.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing: opened 19 November 2021; an August 2025 reviewer mentions a renovation and relaunch. A Uber Eats listing for 洋食がんこ shops says the "Demi Manma" there is supervised by 米とデミグラス (search result).', philosophy: null, specialty: 'Demi-glace hamburg steak; pot-cooked rice.',
      anecdotes: [
        { text: '"Freshly cooked rice was served in a small pot, and I could take as much as I wanted in my bowl." — September 2026, a holiday lunch.', source: R + 'B535951569/' },
        { text: '"Soup: It was hot, which is good, but it was completely tasteless. The staff were attentive, but I don\'t think the cost-performance ratio is good." — August 2026.', source: R + 'B534120268/' },
        { text: '"My mother enjoyed the Cheese Demiglace Hamburger, which was topped with freshly shaved cheese right in front of ... and at 78 years old, ... finished it all!" — September 2026.', source: R + 'B535116341/' },
      ],
      japanese_sources_summary: '食べログ: 米とデミグラス、洋食、大阪市浪速区難波中2-2-16、毎日11:30〜22:30 (変わる場合あり)、予約不可 (電話は休止、ネット予約へ)、カード不可、電子マネー・QR 決済可、禁煙、2021年11月19日オープン。口コミ(2026年6月〜10月): 鉄板のデミグラスハンバーグと注文後に炊く釜炊きご飯 (おかわり自由、10〜15分)、Teritama Burger 1,480円 (税抜)、チーズデミハンバーグとエビフライのセット1,880円 (税抜)、チーズチキンカツバーガー、かき揚げのせハンバーグ、目の前でチーズを削る、黒豚のとんかつ、Kome Demi Manma、トマトガーリックのハンバーグ、月見ハンバーグ、ドリア、スマホで注文、LINE 登録で卵かエビフライ、SNS 投稿でアイス、スープの味がしなかったという声も。',
      confidence: 'medium', sources: [TB, R + 'B511509096/', R + 'B530022909/', R + 'B533074051/', R + 'B534120268/', R + 'B534252600/', R + 'B535116341/', R + 'B535215533/', R + 'B535545551/', R + 'B535951569/', R + 'B536033976/', R + 'B537109835/', R + 'B537246508/', R + 'B537372173/', R + 'B538210742/', R + 'B538335601/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ordering on your phone; set meals. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-2-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目2番16号 (go) 1m. Nearest record: 大阪つけ麺しら石 難波店 21 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538335601/', TB],
    price_note: 'Prices from an October 2026 review, before tax.', last_checked: TODAY, items: [
      it('', '', 'Teritama burger (seasonal)', '¥1,480 + tax', 'Hamburg', 'ask', 'no', 'October 2026 review.', 'teritama'),
      it('', '', 'Cheese demi-glace hamburg with ebi fry set', '¥1,880 + tax', 'Hamburg', 'no', 'no', 'October 2026 review.', 'cheese_demi_ebi'),
      it('', '', 'Demi-glace hamburg steak set (pot-cooked rice, soup)', '', 'Hamburg', 'ask', 'no', '2026 reviews.', 'demi_hamburg'),
      it('', '', 'Kurobuta pork cutlet', '', 'Cutlets', 'no', 'no', 'September 2026 review.', 'kurobuta_katsu'),
    ] }, {
    cuisine: '鉄板のデミグラスハンバーグに、注文を受けてから小さな釜で炊くご飯 (おかわり自由)、スープ、野菜 (2026年の口コミ)・季節の「Teritama Burger」: 目玉焼きの白身と卵黄、赤ワインの照り焼きソースで1,480円 (税抜)、チーズデミハンバーグとエビフライのセット1,880円 (税抜) (2026年10月)・デミハンバーグとエビフライのランチ、チーズチキンカツバーガー、大きなかき揚げのせハンバーグ (2026年9月)・目の前でチーズを削るチーズデミハンバーグ、わさび醤油の黒豚のとんかつ (2026年9月)・チーズと卵黄のご飯「Kome Demi Manma」(2026年8月)・トマトガーリックのハンバーグのランチ (2026年9月)、月見ハンバーグ (2026年10月)、ドリア (2026年9月)、デミのチキンカツのセット (2026年9月)・ポテトのモンブラン (2025年8月)',
    neighborhood: '難波中2-2-16。南海なんば駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。ハンバーグはデミグラスソース (ふつう小麦粉でとろみをつける) で、セットにはエビフライ、とんかつ、チキンカツ、かき揚げも。',
    vegan_detail: 'ヴィーガンではありません。ハンバーグ、カツ、卵に、コンソメのスープ。',
    notes: '[洋食・なんば、ハンバーグと釜炊きご飯] 南海なんば駅から2分の、清潔で気軽なハンバーグの店。どのセットにも注文後にひとり用の釜で炊くご飯がつく (10〜15分かかる)。チーズデミハンバーグか季節の Teritama Burger で、税抜1,500〜2,000円ほど。カード不可、予約不可で、注文はスマホで。LINE 登録で卵かエビフライが無料。',
  });
}

// ================================================================ COLONY by EQI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27099287/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_colony_by_eqi_amemura', name: 'COLONY by EQI', category: 'OMNI',
    lat: 34.670429, lng: 135.49791, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu is soufflé pancakes, cakes, tarts, mille-feuille and parfaits, plus omurice and carbonara rice.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Pancakes are meringue-based and the cakes and parfaits use cream and cheese; drinks include matcha latte and iced tea.',
    hours_raw: 'Daily 11:00–23:00; open year-round, hours may vary at New Year (Tabelog). Reservations accepted, recommended as it is busy; birthday plates and custom courses on request (Tabelog; May 2026). Cash only — no cards, e-money or QR payment (Tabelog; August 2026). 45 seats including 5 at the counter, two box seats and a terrace; non-smoking (Tabelog). English menu (Tabelog); staff speaking English (May 2026; also Spanish and Korean heard, May 2026). A restroom smell at the back seats (March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-12-14, オーシャンドライブ314 1F, Amerikamura — 6 min from Shinsaibashi and Yotsubashi Stns',
    cuisine: 'Sweets and brunch café run by pastry chefs (Tabelog shop text): soufflé pancakes — white soufflé ¥1,480, Berry Mountain with strawberries +¥200 (March–May 2026), rich chocolate ¥1,880 (November 2025), matcha tiramisu (September 2026) · parfaits: pure-white rare-cheese parfait (April and September 2026), strawberry and pistachio lotus parfait (May 2026) · forest strawberry shortcake (December 2025), strawberry mille-feuille and strawberry tart (August 2026), "house" cake served in a cookie box (Walker Plus) · omurice of ripened tomato and creamy cheese ¥1,390, salad set ¥390, angel strawberries ¥990 (May 2026); carbonara rice (March 2026) · premium matcha shake, iced matcha latte, café mocha ¥730 (2025–2026)',
    website: 'https://colonybyeqi.com/', gmaps: gm('COLONY by EQI 心斎橋アメ村店'), menu_url: null,
    notes: '[Café · Amerikamura, soufflé pancakes until 23:00] A pastry chefs\' café in Amemura serving wobbly soufflé pancakes, tall parfaits and strawberry pastries from 11:00 to 23:00. Try the white soufflé pancakes (¥1,480) or the rare-cheese parfait. Popular with overseas visitors, with English spoken; book for birthdays. Cash only.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing: opened 30 June 2017; all staff are professional patissiers and chefs; website colonybyeqi.com.', philosophy: null, specialty: 'Soufflé pancakes; parfaits.',
      anecdotes: [
        { text: '"The atmosphere was lively, with about 70% of the customers being foreign tourists! ... also accommodate English speakers" — April 2026.', source: R + 'B526973141/' },
        { text: '"I could hear English, Spanish, and Korean while I was eating" — May 2026.', source: R + 'B528091488/' },
        { text: '"Please note that ... only accept cash for payment." — August 2026, an evening visit.', source: R + 'B535052669/' },
      ],
      japanese_sources_summary: '食べログ: COLONY by EQI、カフェ・パンケーキ・ケーキ、大阪市中央区西心斎橋2-12-14 オーシャンドライブ314 1F、心斎橋駅・四ツ橋駅から徒歩6分、毎日11:00〜23:00、年中無休 (年末年始は変わる場合あり)、予約可、現金のみ (カード・電子マネー・QR 決済不可)、45席 (カウンター5、ボックス席2)、テラス、禁煙、英語のメニュー、2017年6月30日オープン、公式 colonybyeqi.com。パティシエとシェフのスイーツとブランチのカフェ。口コミ(2025年11月〜2026年9月): 白いスフレパンケーキ1,480円、いちごのせ+200円、濃厚チョコのパンケーキ1,880円、抹茶ティラミスのパンケーキ、真っ白なレアチーズパフェ、いちごとピスタチオのパフェ、いちごのショートケーキ、ミルフィーユ、タルト、トマトとチーズのオムライス1,390円、外国人客が多い、英語を話すスタッフ、奥の席でトイレのにおいがしたという声も。',
      confidence: 'medium', sources: [TB, 'https://colonybyeqi.com/', 'https://www.walkerplus.com/article/135750/', R + 'B312499547/', R + 'B503400573/', R + 'B519115605/', R + 'B523964473/', R + 'B524941615/', R + 'B525231440/', R + 'B526973141/', R + 'B528091488/', R + 'B528125257/', R + 'B529101475/', R + 'B529235827/', R + 'B530135694/', R + 'B530421736/', R + 'B534258252/', R + 'B535052669/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog) and English-speaking staff; mostly overseas guests (April–May 2026). Cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-12-14 オーシャンドライブ314 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop website; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目12番14号 (go) 28m. No record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529101475/', R + 'B528125257/', TB],
    price_note: 'Prices from November 2025–May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'White soufflé pancakes', '¥1,480', 'Pancakes', 'no', 'ask', 'May 2026 review.', 'souffle_pancake'),
      it('', '', 'Rich chocolate pancakes', '¥1,880', 'Pancakes', 'no', 'ask', 'November 2025 review.', 'choco_pancake'),
      it('', '', 'Pure-white rare-cheese parfait', '', 'Parfaits', 'ask', 'no', 'April and September 2026 reviews.', 'rare_cheese_parfait'),
      it('', '', 'Omurice with ripened tomato and creamy cheese', '¥1,390', 'Meals', 'ask', 'no', 'May 2026 review.', 'omurice'),
    ] }, {
    cuisine: 'パティシエとシェフのスイーツとブランチのカフェ (食べログの店の紹介): スフレパンケーキ — 白いスフレ1,480円、いちごたっぷりの Berry Mountain は+200円 (2026年3〜5月)、濃厚チョコ1,880円 (2025年11月)、抹茶ティラミス (2026年9月)・パフェ: 真っ白なレアチーズパフェ (2026年4月・9月)、いちごとピスタチオのパフェ (2026年5月)・いちごのショートケーキ (2025年12月)、いちごのミルフィーユといちごのタルト (2026年8月)、クッキーの箱に入った「おうち」ケーキ (Walker Plus)・完熟トマトととろけるチーズのオムライス1,390円、サラダセット390円、Angel strawberries 990円 (2026年5月)、カルボナーラライス (2026年3月)・抹茶シェイク、アイス抹茶ラテ、カフェモカ730円 (2025〜2026年)',
    neighborhood: '西心斎橋2-12-14 オーシャンドライブ314 1F、アメ村。心斎橋駅・四ツ橋駅から徒歩6分',
    gf_detail: '要確認。グルテンの情報なし。スフレパンケーキ、ケーキ、タルト、ミルフィーユ、パフェに、オムライスとカルボナーラライス。',
    vegan_detail: '要確認。ヴィーガンの情報なし。パンケーキはメレンゲで、ケーキやパフェにはクリームやチーズ。飲み物には抹茶ラテやアイスティー。',
    notes: '[カフェ・アメ村、夜11時までスフレパンケーキ] アメ村にあるパティシエのカフェで、11時から23時までふるふるのスフレパンケーキ、背の高いパフェ、いちごのお菓子。白いスフレパンケーキ (1,480円) かレアチーズパフェを。海外からの客が多く、英語が通じる。誕生日は予約を。現金のみ。',
  });
}

// ================================================================ 焼肉 肉どうし 裏難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27124795/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'osaka_yakiniku_nikudoushi_ura_namba', name: '焼肉 肉どうし 裏難波店 (Yakiniku Nikudoushi Ura Namba)', category: 'OMNI',
    lat: 34.663815, lng: 135.503273, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The house style is meat marinated and dipped in two homemade sauces, a sweet soy sauce for lean cuts and a lighter one for fatty cuts (August 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant; the appetiser is meat simmered in broth (July 2026).',
    hours_raw: 'Daily 17:00–24:00, last order 23:00; closed irregularly (Tabelog). Reservations accepted; groups of 5+ by phone; full on a Friday in July 2026 (Tabelog; July 2026). Appetiser charged (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 51 seats with a counter and a semi-private room for 6; non-smoking, e-cigarettes included (Tabelog). The shop warns it takes no responsibility for items left behind (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 14-6, 太星食器ビル別館, a back alley in Ura-Namba — 2 min from Nankai Namba Stn',
    cuisine: 'Yakiniku of A4-or-higher black wagyu chosen to suit the house sauces; signatures wagyu yukhoe and "service" strip loin (Tabelog shop text) · courses: standard of 10 items with unlimited rice ¥4,000, banquet of 13 items ¥6,000, 90 minutes of drinks +¥1,000 (Tabelog) · strip loin grilled sukiyaki-style by staff and served on rice (July and October 2026) · "Stamina red and white" platter of skirt and horumon ¥2,280, salted tongue ¥1,580, raw heart ¥680, raw omasum ¥680, marbled thigh shabu with sansho ponzu ¥1,280, lean with garlic soy ¥1,480 (July 2026) · salted tongue ¥1,738, wagyu yukhoe ¥1,408, assorted kimchi ¥748, thick-cut salted tongue ¥2,178, salted wagyu skirt ¥1,980 (August 2026) · assorted namul ¥638, wagyu assortment ¥2,178 (September 2026) · liver to eat with sesame oil (September 2026) · choregi salad, beef-tendon soup (October 2026)',
    website: null, gmaps: gm('焼肉 肉どうし 裏難波店'), menu_url: null,
    notes: '[Yakiniku · Ura-Namba, wagyu in house sauces] A neon-lit back-alley yakiniku near Nankai Namba where A4+ wagyu is matched to two house dipping sauces. Order the wagyu yukhoe, the thick-cut salted tongue and the sukiyaki-style strip loin that staff grill and lay on rice; the ¥4,000 course is a simple start. Expect ¥5,000–8,000 a head. Book on Fridays; fully non-smoking.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 1 September 2021; A4+ black wagyu chosen for its match with the house sauces. A July 2026 reviewer names it part of the Ozet Group; a 北浜本店 appears in search results.', philosophy: null, specialty: 'Sauce-grilled wagyu; yukhoe; sukiyaki-style strip loin.',
      anecdotes: [
        { text: '"Upon entering, I was greeted with a cheerful \'Yo! Thank you!\' The lively and energetic service typical of Osaka instantly put me in a great mood." — July 2026.', source: R + 'B531077604/' },
        { text: '"There\'s a recommended sauce for lean cuts and a refreshing sauce for fatty cuts." — August 2026.', source: R + 'B533201045/' },
        { text: '"While I didn\'t feel it was particularly cost-effective this time, the satisfaction from the dishes was high" — September 2026.', source: R + 'B536114760/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼肉 肉どうし 裏難波店、焼肉・ホルモン・韓国料理、大阪市中央区難波千日前14-6 太星食器ビル別館 B区画、南海なんば駅から徒歩2分、毎日17:00〜24:00 (L.O. 23:00)、不定休、予約可 (5名以上は電話)、お通しあり、カード・PayPay 可、電子マネー不可、51席、半個室6名、禁煙 (電子たばこも不可)、2021年9月1日オープン。タレに合うA4以上の黒毛和牛、名物は和牛ユッケと「Service Strip Loin」、スタンダードコース4,000円、宴会コース6,000円、飲み放題+1,000円。口コミ(2026年5月〜10月): すき焼き風のサーロインを焼いてご飯に、「Stamina Red and White」2,280円、塩タン1,580円 (8月は1,738円)、生ハツ680円、生センマイ680円、和牛ユッケ1,408円、厚切り塩タン2,178円、和牛ハラミの塩1,980円、キムチの盛り合わせ748円、ナムル638円、レバー、チョレギサラダ、牛すじのスープ、タレは赤身用と脂身用の2種、元気な接客。',
      confidence: 'medium', sources: [TB, R + 'B529220910/', R + 'B529412344/', R + 'B531077604/', R + 'B532216213/', R + 'B532405912/', R + 'B532462300/', R + 'B533201045/', R + 'B533465659/', R + 'B533904780/', R + 'B536114760/', R + 'B536405829/', R + 'B536582508/', R + 'B536608840/', R + 'B537533150/', R + 'B538014135/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the cuts and which sauce suits each (June 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前14-6 太星食器ビル別館 B区画',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前14番6号 (go) 25m. Nearest record: HILLMAN (15-16) 21 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532405912/', R + 'B533904780/', TB],
    price_note: 'Prices from July–September 2026 reviews; salted tongue was ¥1,580 in July and ¥1,738 in August.', last_checked: TODAY, items: [
      it('', '', 'Wagyu yukhoe', '¥1,408', 'Raw', 'ask', 'no', 'August–September 2026 reviews.', 'wagyu_yukke'),
      it('', '', 'Thick-cut salted tongue', '¥2,178', 'Tongue', 'ask', 'no', 'August–September 2026 reviews.', 'atsugiri_shiotan'),
      it('', '', '"Stamina red and white" platter (skirt and horumon)', '¥2,280', 'Yakiniku', 'ask', 'no', 'July 2026 review.', 'stamina_kohaku'),
      it('', '', 'Sukiyaki-style strip loin, grilled by staff', '', 'Yakiniku', 'ask', 'no', 'July and October 2026 reviews.', 'sukiyaki_sirloin'),
      it('', '', 'Standard course, 10 items with unlimited rice', '¥4,000', 'Course', 'ask', 'no', 'Tabelog listing; drinks +¥1,000.', 'standard_course'),
    ] }, {
    cuisine: '店のタレに合うかで選んだA4以上の黒毛和牛の焼肉。名物は和牛ユッケと「Service Strip Loin」(食べログの店の紹介)・コース: ご飯食べ放題つき10品のスタンダード4,000円、13品の宴会6,000円、90分飲み放題+1,000円 (食べログ)・店の人がすき焼き風に焼いてご飯にのせるサーロイン (2026年7月・10月)・ハラミとホルモンの「Stamina Red and White」2,280円、塩タン1,580円、生ハツ680円、生センマイ680円、霜降りももの山椒ポン酢しゃぶ1,280円、赤身のにんにく醤油1,480円 (2026年7月)・塩タン1,738円、和牛ユッケ1,408円、キムチの盛り合わせ748円、厚切り塩タン2,178円、和牛ハラミの塩1,980円 (2026年8月)・ナムルの盛り合わせ638円、和牛の盛り合わせ2,178円 (2026年9月)・ごま油で食べるレバー (2026年9月)・チョレギサラダ、牛すじのスープ (2026年10月)',
    neighborhood: '難波千日前14-6 太星食器ビル別館、裏なんばの路地。南海なんば駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。店のスタイルは自家製の2種のタレで漬けて食べる焼肉で、赤身には甘めの醤油ダレ、脂のある部位にはさっぱりしたタレ (2026年8月)。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉店で、お通しは肉をだしで煮たもの (2026年7月)。',
    notes: '[焼肉・裏なんば、店のタレで食べる和牛] 南海なんば駅近くの路地にあるネオンの焼肉店で、A4以上の和牛を2種の自家製のタレで。和牛ユッケ、厚切り塩タン、店の人がすき焼き風に焼いてご飯にのせるサーロインを。4,000円のコースから始めるのも手軽。ひとり5,000〜8,000円ほど。金曜は予約を。全席禁煙。',
  });
}

// ================================================================ とっとっと 難波千日前店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27149611/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['16:00', '24:00']);
  put({
    id: 'osaka_totto_namba_sennichimae', name: '炭と海鮮と串焼きと肴 とっとっと 難波千日前店 (Sumi to Kaisen to Kushiyaki to Sakana Totto)', category: 'OMNI',
    lat: 34.666783, lng: 135.501811, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu has vegetable-wrapped skewers, sashimi, motsunabe finished with zosui or champon noodles, chikuwa tempura with cheese, fried skate wing and a rare cutlet.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the vegetable skewers are wrapped in pork, and the hot pots are offal (motsu) in broth.',
    hours_raw: 'Daily 12:00–15:00 and 16:00–24:00; last order food 23:00, drinks 23:30 (Tabelog). At midday an October 2026 group found set meals only. Reservations accepted; call for same-day bookings within an hour; 90-minute limit when busy; cancellation fees from 23:00 the day before (Tabelog). Appetiser ¥440; 10% year-end surcharge from 4 December to 5 January (Tabelog). Cards (VISA, Master, JCB, Diners) and PayPay; no e-money (Tabelog). 100 seats around a large open counter and tables; non-smoking, with a smoking area inside (Tabelog). Often fully booked even on weekdays (October 2026). Fortune-slip chopsticks: a "great fortune" brings a bell and ¥100 off drinks (September–October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 3-4-14, 岸田ビル 3F — 2 min from Namba Stn exit 19',
    cuisine: 'Hakata-style robata and izakaya: genshi-yaki, morning-catch sashimi, vegetable-wrapped skewers and the signature Hakata mentaiko tororo motsunabe (Tabelog shop text) · courses with 2 hours of drinks: motsunabe course of 11 dishes ¥4,500, mentaiko tororo motsunabe course of 13 dishes ¥5,500 (Tabelog) · salt-grilled salmon belly with ikura ¥858, Hakata mentaiko dashi omelette ¥880, fried skate wing ¥528 (September 2026) · five-kind sashimi, live octopus with salt and sesame oil, grilled kinmedai, grilled ayu, sakes such as Mimuro Sugi (September 2026) · Sapporo Aka-boshi ¥605, Setouchi lemon and ume sours ¥429 each with bigger glasses on repeat orders ("Shusse Sour"), hamachi yuzu carpaccio ¥748, ebi mayo ¥638, nodoguro (September 2026) · potato salad topped with roe (September 2026) · chikuwa tempura with cheese, pork-and-green-onion skewers (October 2026) · meat-wrapped lettuce, shrimp chili, oden, grilled onion, grilled yam, grilled rice balls, cheese champon to finish (October 2026) · charcoal-grilled fish rice bowl set at lunch (October 2026)',
    website: null, gmaps: gm('とっとっと 難波千日前店'), menu_url: null,
    notes: '[Izakaya · Namba, Hakata robata and mentaiko motsunabe] A big, lively third-floor izakaya by Namba Station built around an open robata counter, with sashimi, grilled fish, vegetable-wrapped skewers and the mentaiko-and-grated-yam motsunabe. Order the salmon belly with ikura, the mentaiko omelette and the hot pot, finishing with zosui. It is loud — a bell rings each time someone draws a lucky chopstick — and often full, so book. Some reviewers find it a little pricey.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 10 June 2025; Hakata-style robatayaki, sashimi, vegetable-wrapped skewers and mentaiko tororo motsunabe. A 四条河原町店 in Kyoto appears in search results.', philosophy: null, specialty: 'Hakata mentaiko tororo motsunabe; genshi-yaki.',
      anecdotes: [
        { text: '"If you draw a \'great fortune,\' the staff all gather and shout \'Congratulations!\' while ringing a bell, which can be quite embarrassing." — October 2026, a reviewer who found it overpriced and noisy.', source: R + 'B537232443/' },
        { text: '"The pot was filled to the brim with mentaiko ... I was also delighted to turn the leftovers into zosui" — September 2026.', source: R + 'B536900756/' },
        { text: '"This popular restaurant is easily accessible from Namba Station and tends to be fully booked even on weekdays." — October 2026.', source: R + 'B537247937/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭と海鮮と串焼きと肴 とっとっと 難波千日前店、居酒屋・もつ鍋・焼き鳥、大阪市中央区難波3-4-14 岸田ビル 3F、なんば駅19番出口から徒歩2分、毎日12:00〜15:00、16:00〜24:00 (料理 L.O. 23:00、ドリンク L.O. 23:30)、予約可、混雑時は90分制、お通し440円、12月4日〜1月5日は年末年始料金10%、カード・PayPay 可、電子マネー不可、100席、禁煙 (店内に喫煙所)、2025年6月10日オープン。Hakata の炉端焼き、朝獲れの刺身、野菜巻き串、名物のHakata の明太とろろもつ鍋、飲み放題つきのコース4,500円・5,500円、Shusse Sour。口コミ(2026年9月〜10月): 鮭ハラスの塩焼きといくら858円、Hakata の明太のだし巻き880円、エイヒレの唐揚げ528円、刺身5種、活けだこの塩ごま油、金目鯛と鮎の焼き物、のどぐろ、ハマチの柚子カルパッチョ748円、エビマヨ638円、チーズのちくわ天、豚ねぎ巻き、レタスの肉巻き、エビチリ、おでん、締めはチーズちゃんぽんか雑炊、昼は定食のみだったという声、おみくじの箸、大吉で鐘、いつも満席、高めでうるさいという声も。',
      confidence: 'medium', sources: [TB, R + 'B536294483/', R + 'B536622128/', R + 'B536664105/', R + 'B536728782/', R + 'B536809873/', R + 'B536900756/', R + 'B537111550/', R + 'B537232443/', R + 'B537247937/', R + 'B537281359/', R + 'B537563297/', R + 'B537697908/', R + 'B537824647/', R + 'B538017540/', R + 'B538224533/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lively and loud, many tourists (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-4-14 岸田ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目4番14号 (go) 11m. Nearest records: 難波 鉄板焼き Sublime (3-4-13) 10 m, 炉端ともつ煮 炎 11 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536622128/', R + 'B536728782/', TB],
    price_note: 'Prices from September 2026 reviews; courses from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Hakata mentaiko tororo motsunabe', '', 'Signature', 'ask', 'no', 'September–October 2026 reviews.', 'mentai_tororo_motsunabe'),
      it('', '', 'Salt-grilled salmon belly with ikura', '¥858', 'Robata', 'ask', 'no', 'September 2026 review.', 'harasu_ikura'),
      it('', '', 'Hakata mentaiko dashi omelette', '¥880', 'Small plates', 'ask', 'no', 'September 2026 review.', 'mentai_dashimaki'),
      it('', '', 'Fried skate wing', '¥528', 'Fried', 'no', 'no', 'September 2026 review.', 'eihire_karaage'),
      it('', '', 'Mentaiko tororo motsunabe course with 2 hours of drinks, 13 dishes', '¥5,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'motsunabe_course'),
    ] }, {
    cuisine: 'Hakata の炉端と居酒屋: 原始焼き、朝獲れの刺身、野菜巻き串、名物のHakata の明太とろろもつ鍋 (食べログの店の紹介)・2時間飲み放題つきのコース: もつ鍋のコース11品4,500円、明太とろろもつ鍋のコース13品5,500円 (食べログ)・鮭ハラスの塩焼きといくら858円、Hakata の明太のだし巻き880円、エイヒレの唐揚げ528円 (2026年9月)・刺身5種、活けだこの塩ごま油、金目鯛と鮎の焼き物、Mimuro Sugi などの日本酒 (2026年9月)・サッポロ赤星605円、Setouchi のレモンと梅のサワー各429円 (おかわりでグラスが大きくなる「Shusse Sour」)、ハマチの柚子カルパッチョ748円、エビマヨ638円、のどぐろ (2026年9月)・魚卵をのせたポテトサラダ (2026年9月)・チーズたっぷりのちくわ天、豚ねぎ巻き (2026年10月)・レタスの肉巻き、エビチリ、おでん、玉ねぎ焼き、長芋焼き、焼きおにぎり、締めのチーズちゃんぽん (2026年10月)・昼は炭火焼き魚の丼の御膳 (2026年10月)',
    neighborhood: '難波3-4-14 岸田ビル 3F。なんば駅19番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。野菜巻き串、刺身、締めが雑炊かちゃんぽんのもつ鍋、チーズのちくわ天、エイヒレの唐揚げ、レアカツがある。',
    vegan_detail: 'ヴィーガンではありません。野菜巻き串は豚で巻き、鍋はもつとだし。',
    notes: '[居酒屋・なんば、Hakata の炉端と明太もつ鍋] なんば駅すぐのビルの3階、大きな炉端のオープンカウンターを囲むにぎやかな居酒屋で、刺身、焼き魚、野菜巻き串、明太子ととろろのもつ鍋。鮭ハラスといくら、明太だし巻き、鍋を頼んで、締めは雑炊を。大吉の箸を引くたびに鐘が鳴るほどにぎやかで、よく満席になるので予約を。少し高めという声も。',
  });
}

save();
