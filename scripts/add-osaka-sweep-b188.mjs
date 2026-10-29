// Osaka sweep (2-mile circle around Dotonbori), batch 188 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 山三亭 (Sichuan set meals: numbing mapo tofu, dry dandan noodles; basement of the Yotsubashi Bldg, Shinmachi)
//   + patisserie accueil (light mousse cakes and chocolates, 4-seat eat-in counter; Kita-Horie)
//   + Honeysuckle Rose (tea-room café with one daily lunch plate, open three days a week; Minami-Senba)
//   + gelamu. Shinsaibashi (gelato until 10 pm, dogs welcome inside; Minami-Senba)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 188);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 山三亭
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27136940/'; const R = TB + 'dtlrvwlst/'; const IG = 'https://instagram.com/yamasan0526';
  const WD = day(['11:00', '15:00'], ['17:30', '21:00']); const SA = day(['11:00', '15:00']);
  put({
    id: 'osaka_yamasantei_shinmachi', name: '山三亭 (Yamasan Tei)', category: 'OMNI',
    lat: 34.675711, lng: 135.496699, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; Sichuan dishes such as mapo tofu usually use soy sauce or bean pastes, and the menu includes noodles, dumplings and spring rolls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: set meals center on mapo tofu with meat, fried chicken, pork and shrimp; no vegan dish described.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 17:30–21:00; Saturday 11:00–15:00, with Saturday dinner only by reservation for two or more; closed Sunday and holidays (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR accepted (Tabelog). 16 seats with a counter and a table in the back; designated smoking area (Tabelog). Every lunch set is ¥1,000, with two pieces of fried chicken +¥200 (Tabelog listing). Set meals are also served at night (September–October 2026). Opened 22 May 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-5-7, Yotsubashi Bldg B1F — from Yotsubashi Stn Exit 2, go up the stairs on the left after the gate',
    cuisine: 'Sichuan Chinese eatery (16 seats) · lunch sets ¥1,000: mapo tofu set with plenty of Sichuan pepper; fried rice set with two pieces of yurinchi; sweet and sour pork; +¥200 for two pieces of fried chicken · evening: 2-item assorted platter set ¥1,500 (mapo tofu, yurinchi, pickles, soup and rice with refills); dry dandan noodles (small) ¥500; steamed chicken with Hong Kong sauce ¥300; spicy shrimp with mayonnaise (small) ¥500; century egg tofu with sesame sauce; shrimp omelet; yodare-dori; shumai; xiao long bao · courses with 90-min all-you-can-drink',
    website: IG, gmaps: gm('山三亭 四ツ橋'), menu_url: null,
    notes: "[Chinese · numbing Sichuan mapo tofu and set meals, Yotsubashi] A small, calm Sichuan eatery in the basement of a building you reach straight from Yotsubashi Station's Exit 2 stairs. Every lunch set is ¥1,000, and mapo tofu is the house signature: boldly Sichuan, with a generous hit of numbing pepper that one diner calls addictive and another found too spicy to finish. Unusually, set meals continue at night, like a ¥1,500 two-item platter of mapo tofu and yurinchi with refillable soup and rice. In the evening there are small plates for drinking too: dry dandan noodles (small ¥500), steamed chicken with Hong Kong sauce (¥300), a spicy shrimp mayo and century egg tofu with sesame sauce. One person runs the place, so expect to wait a little for orders. Closed Sundays; Saturday dinner is by reservation only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 May 2023 (Tabelog).', background: 'Sichuan Chinese eatery (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Mapo tofu; dry dandan noodles; set meals.',
      anecdotes: [
        { text: '"The Mapo Tofu is boldly Sichuan-style with a tolerable level of spiciness, and the shrimp omelet (instead of crab) was really to my liking." — September 2026.', source: R + 'B535678893/' },
        { text: '"The Dan Dan Noodles here have a simple yet delicious flavor that\'s quite addictive. At JPY 500, it\'s a great deal." — October 2026, Dan Dan Noodles without soup (small) ¥500.', source: R + 'B467223657/' },
      ],
      japanese_sources_summary: '食べログ: 山三亭、大阪市西区新町1-5-7 四ツ橋ビルディング B1F、四ツ橋駅2番出口の改札を出て左の階段を上がる、四ツ橋駅から124m、月〜金11:00〜15:00・17:30〜21:00、土11:00〜15:00 (土曜の夜は2名以上の予約のみ)、日祝休み、予約可、カード・電子マネー・QR可、16席、分煙、2023年5月22日開店、Instagramあり。店の紹介: 本格四川料理、看板は mapo tofu と yodare-dori、ランチは全品1000円で kara-age 2個を+200円、夜は90分の飲み放題つきのコース2種。口コミ(2026年7〜10月): mapo tofu の定食 (花椒がたっぷりで辛くしびれる、辛すぎて食べきれなかったという声も)、炒飯の定食 (yurinchi 2個つき)、夜も定食あり、2品盛りの定食1500円 (mapo tofu、yurinchi、漬物、スープはおかわり自由、ご飯はおかわり1回無料)、汁なし担々麺 (小) 500円、香港ソースの蒸し鶏300円、ピリ辛のエビマヨ (小) 500円、ピータン豆腐のごまソース、エビの玉子焼き、酢豚、エビチリ、春巻き、 shumai、 xiao long bao、ひとりで切り盛りしているので注文と提供に少し時間がかかる。',
      confidence: 'medium', sources: [TB, IG, R + 'B467223657/', R + 'B507306309/', R + 'B534362138/', R + 'B534868127/', R + 'B535678893/', R + 'B538104860/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats; run by one person, so service takes time (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町1-5-7 四ツ橋ビルディング B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目5番7号 (go) 19m; offset 7 m north of the Tabelog point to clear Mensho Shisei in the same building (0 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B467223657/', R + 'B538104860/'],
    price_note: 'Prices from October 2026 reviews; lunch sets ¥1,000 per the listing.', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu set (lunch)', '¥1,000', 'Set meals', 'ask', 'no', 'Listing; 2026 reviews.', 'mapo'),
      it('', '', '2-item assorted platter set', '¥1,500', 'Set meals', 'ask', 'no', 'October 2026, evening.', 'platter'),
      it('', '', 'Dry dandan noodles (small)', '¥500', 'Noodles', 'no', 'no', 'October 2026.', 'dandan'),
      it('', '', 'Steamed chicken with Hong Kong sauce', '¥300', 'Small plates', 'ask', 'no', 'October 2026.', 'chicken'),
      it('', '', 'Spicy shrimp with mayonnaise (small)', '¥500', 'Small plates', 'ask', 'no', 'October 2026.', 'ebimayo'),
    ] }, {
    cuisine: '四川料理の中華の店 (16席)・ランチの定食1000円: 花椒たっぷりの mapo tofu の定食、yurinchi 2個つきの炒飯の定食、酢豚、kara-age 2個を+200円・夜: 2品盛りの定食1500円 (mapo tofu、yurinchi、漬物、スープとご飯はおかわりあり)、汁なし担々麺 (小) 500円、香港ソースの蒸し鶏300円、ピリ辛のエビマヨ (小) 500円、ピータン豆腐のごまソース、エビの玉子焼き、yodare-dori、 shumai、 xiao long bao・90分の飲み放題つきのコース',
    neighborhood: '新町1-5-7 四ツ橋ビルディング B1F。四ツ橋駅2番出口の改札を出て左の階段を上がったところ',
    gf_detail: '要確認。グルテンの情報なし。 mapo tofu など四川料理は醤油や豆板醤などを使うことが多く、麺、 shumai、春巻きもある。',
    vegan_detail: '実質ヴィーガンではありません。定食は肉入りの mapo tofu、揚げた鶏、豚、エビが中心で、ヴィーガンの料理の記載なし。',
    notes: '[中華・四ツ橋、しびれる四川の mapo tofu と定食] 四ツ橋駅2番出口の階段から直接入れるビルの地下にある、落ち着いた小さな四川料理の店。ランチの定食は全品1000円で、看板は mapo tofu。しっかり四川風で花椒がたっぷり効き、やみつきになるという声の一方、辛すぎて食べきれなかったという声も。夜も定食があるのがうれしく、 mapo tofu と yurinchi の2品盛り (1500円) はスープとご飯のおかわりつき。夜は飲みながらの小皿も: 汁なし担々麺 (小 500円)、香港ソースの蒸し鶏 (300円)、ピリ辛のエビマヨ、ごまソースのピータン豆腐など。ひとりで切り盛りしているので、注文と料理は少し待つつもりで。日曜休み、土曜の夜は予約のみ。',
  });
}

// ================================================================ patisserie accueil
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27079456/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://patisserie-accueil.com/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'osaka_patisserie_accueil_kitahorie', name: 'patisserie accueil', category: 'OMNI',
    lat: 34.674451, lng: 135.494487, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; cakes are mostly mousse-based but include sponge, roll cake and kouign-amann.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: cream, mascarpone and chocolate mousse cakes; no vegan cake described.',
    hours_raw: 'Wed–Sun 11:00–19:00; closed Monday and Tuesday; may change (Tabelog). Cake orders can be reserved by phone; the eat-in seats cannot be reserved (Tabelog). Cards, e-money and QR accepted (Tabelog). 4 counter seats for eat-in; non-smoking; takeout; children welcome (Tabelog). Opened 13 June 2014 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 1-17-18 #102 — 1 min from Nishi-Ohashi Stn Exit 4, 5 min from Yotsubashi Stn',
    cuisine: 'Patisserie and chocolatier with a 4-seat eat-in counter · light, airy mousse cakes: Écrin ¥700 (strawberry and mascarpone mousse, passion fruit centre, strawberry chocolate coating) · seasonal: roulé au marron ¥680 (chestnut roll with Hokkaido cream and chestnut chantilly); Japanese-chestnut Mont Blanc; muscat mousse cake · soufflé au chocolat ¥680 · kouign-amann · café au lait ¥600; cappuccino; tea',
    website: OWN, gmaps: gm('patisserie accueil 北堀江'), menu_url: null,
    notes: "[Sweets · light mousse cakes and chocolate, Kita-Horie] A small, stylish patisserie a minute from Nishi-Ohashi Station, with a showcase of seasonal cakes and just four counter seats to eat in. One diner notes that most cakes are mousse-based and made airy, so fruit and chocolate come through without heaviness: the Écrin (¥700) layers strawberry and mascarpone mousse around a passion fruit centre, and one diner compared its texture to a premium Aero bar. In autumn there is a chestnut roll (roulé au marron, ¥680) with Hokkaido cream and a Japanese-chestnut Mont Blanc; the soufflé au chocolat (¥680) is surprisingly light. Kouign-amann to take away, and café au lait (¥600) or a creamy cappuccino to drink. Eat-in seats can't be booked, so come soon after the 11:00 opening; cakes can be reserved by phone. Closed Mondays and Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 13 June 2014 (Tabelog).', background: 'Patisserie and chocolatier (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Light mousse cakes; chocolate; seasonal fruit cakes.',
      anecdotes: [
        { text: '"When you take a fork to it, the mousse is surprisingly light, filled with air… The tang of the passion fruit adds a refreshing kick, ensuring the sweetness doesn\'t overwhelm." — October 2026, Écrin ¥700.', source: R + 'B537560122/' },
        { text: '"The sponge cake was moist and chewy, paired with Hokkaido cream and chestnut chantilly… The soufflé chocolate was surprisingly light and easy to eat, despite being chocolate." — October 2026, Roulé au Marron ¥680, Soufflé au Chocolat ¥680.', source: R + 'B537134212/' },
      ],
      japanese_sources_summary: '食べログ: patisserie accueil (パティスリー アクイユ)、大阪市西区北堀江1-17-18 102、西大橋駅4番出口から徒歩1分、四ツ橋駅から徒歩5分、水〜日11:00〜19:00、月・火休み、ケーキは電話で予約可・イートインは予約不可、カード・電子マネー・QR可、カウンター4席、禁煙、テイクアウト、子ども歓迎、2014年6月13日開店、公式サイトあり。口コミ(2026年10月): 季節のケーキが並ぶショーケース、ほとんどが空気を含んだ軽いムースのケーキ、 Écrin 700円 (いちごとマスカルポーネのムース、中にパッションフルーツ、いちごのチョコレートで包む)、栗のロールケーキ680円 (北海道の生クリームと栗のクリーム)、和栗のモンブラン、マスカットのムースのケーキ、チョコレートのスフレ680円、 kouign-amann、カフェオレ600円、カプチーノ、紅茶、開店直後がおすすめという声、レジの対応に改善の余地という声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B536769264/', R + 'B536783286/', R + 'B537134212/', R + 'B537560122/', R + 'B537729374/', R + 'B538150722/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the showcase; 4 eat-in seats, not reservable (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-17-18 102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目17番18号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537560122/', R + 'B537134212/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Écrin (strawberry and mascarpone mousse cake)', '¥700', 'Cakes', 'ask', 'no', 'October 2026.', 'ecrin'),
      it('', '', 'Roulé au marron (chestnut roll cake)', '¥680', 'Cakes', 'no', 'no', 'October 2026, seasonal.', 'roule'),
      it('', '', 'Soufflé au chocolat', '¥680', 'Cakes', 'ask', 'no', 'October 2026.', 'souffle'),
      it('', '', 'Café au lait', '¥600', 'Drinks', '', 'no', 'October 2026.', 'cafeaulait'),
    ] }, {
    cuisine: 'ケーキとチョコレートの店、イートインはカウンター4席・空気を含んだ軽いムースのケーキ: Écrin 700円 (いちごとマスカルポーネのムース、中にパッションフルーツ、いちごのチョコレートで包む)・季節: 栗のロールケーキ680円 (北海道の生クリームと栗のクリーム)、和栗のモンブラン、マスカットのムースのケーキ・チョコレートのスフレ680円・ kouign-amann・カフェオレ600円、カプチーノ、紅茶',
    neighborhood: '北堀江1-17-18 102。西大橋駅4番出口から徒歩1分、四ツ橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ケーキはムースが中心だが、スポンジ、ロールケーキ、 kouign-amannもある。',
    vegan_detail: '実質ヴィーガンではありません。生クリーム、マスカルポーネ、チョコレートのムースのケーキで、ヴィーガンのケーキの記載なし。',
    notes: '[スイーツ・北堀江、軽いムースのケーキとチョコレート] 西大橋駅から1分の小さなおしゃれなケーキ店で、季節のケーキが並ぶショーケースと、イートインはカウンター4席だけ。ある人によるとある人によるとケーキの多くは空気を含ませた軽いムースで、果物とチョコレートの味が重くなく伝わる。 Écrin  (700円) はいちごとマスカルポーネのムースの中にパッションフルーツ。秋は栗のロールケーキ (680円) や和栗のモンブラン、チョコレートのスフレ (680円) は意外なほど軽い。持ち帰りに kouign-amann、飲み物はカフェオレ (600円) やクリーミーなカプチーノ。イートインは予約できないので11時の開店直後がおすすめ。ケーキは電話で予約可。月・火休み。',
  });
}

// ================================================================ Honeysuckle Rose
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27014904/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://honeysuckle-rose.co.jp/index.html';
  const H = day(['11:30', '15:00']);
  put({
    id: 'osaka_honeysuckle_rose_minamisenba', name: 'Honeysuckle Rose', category: 'OMNI',
    lat: 34.67632, lng: 135.505491, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the daily plate changes and has included croquettes, tempura, udon and a hamburg steak with ponzu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the one daily plate has a meat or fish main with egg and dashi-based sides; no vegan option described.',
    hours_raw: 'Tue, Wed, Thu 11:30–15:00; closed Mon, Fri, Sat, Sun; may change (Tabelog). One diner also found it open only Tuesday to Thursday (February 2026). No cards, no e-money and no QR payments (Tabelog). No reservations; 20 seats; smoking allowed (Tabelog). Drinks after lunch may not be available when busy (March 2025).',
    hours: { 1: H, 2: H, 3: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 2-3-19 — 3 min from Nagahoribashi Stn toward Minami-Senba; a blackboard marks the door',
    cuisine: 'Tea-room café with antique furniture and stained glass (20 seats, counter and a few tables) · lunch is one daily plate, "Honeysuckle rice" ¥1,100 (¥1,300 with a drink, February–March 2026): a main such as Japanese-style hamburg steak with grated daikon and ponzu, three or more small sides (vegetable tempura, simmered dishes, coleslaw, omelet), white or mixed-grain rice and soup · tea, yuzu tea, café au lait · mini parfait or cake with lunch',
    website: OWN, gmaps: gm('Honeysuckle Rose 南船場'), menu_url: null,
    notes: "[Café · a retro tea room with a home-style daily lunch plate, Minami-Senba] A dimly lit café near Nagahoribashi that feels like an old Western-style house or British tea room, with antique furniture and stained glass. It opens only Tuesday to Thursday for lunch and serves one thing: the daily 'Honeysuckle rice' plate (¥1,100, ¥1,300 with a drink), a main such as a light Japanese-style hamburg steak with grated daikon and ponzu plus several small vegetable sides, white or mixed-grain rice and soup. Several diners value it as a balanced, home-style meal that changes every day; a mini parfait or cake can be added. One diner was served hot water on arrival in winter. Cash only, and smoking is allowed inside.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tea-room café serving a daily lunch plate (Tabelog; 2023–2026 reviews).', philosophy: null, specialty: 'Daily "Honeysuckle rice" lunch plate.',
      anecdotes: [
        { text: '"The Hamburg steak seemed to be a mix of meats, mostly chicken mince. It was served with a grated daikon sauce and chopped perilla leaves, making it light and delicious." — February 2026, Honeysuckle Rice ¥1,100.', source: R + 'B521944186/' },
        { text: '"The main dish, a Hamburg steak, came with three side dishes that were delicious and well-seasoned." — March 2025.', source: R + 'B504119739/' },
      ],
      japanese_sources_summary: '食べログ: Honeysuckle Rose (ハニーサックルローズ)、大阪市中央区南船場2-3-19、長堀橋駅から212m、火・水・木11:30〜15:00、月・金・土・日休み、カード・電子マネー・QR不可、予約不可、20席、喫煙可、公式サイトあり。口コミ(2023年〜2026年2月): 火・水・木の週3日営業 (2026年2月)、ランチは日替わりの「すいかずらランチ」1品のみ1100円・ドリンクつき1300円、メインは和風のハンバーグ (大根おろしと大葉、ポン酢) など、小鉢 (野菜の天ぷら、煮物、コールスロー、玉子焼き)、白米か雑穀米、汁物、柚子茶、カフェオレ、ミニパフェやケーキを追加できる、アンティークの家具とステンドグラスの薄暗い店内、冬にお湯を出してもらったという声、混むとドリンクが出せないことも。',
      confidence: 'medium', sources: [TB, OWN, R + 'B113828099/', R + 'B459878760/', R + 'B476612220/', R + 'B504119739/', R + 'B509475541/', R + 'B521944186/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One daily plate; cash only (Tabelog, 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-3-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; latest review dated February 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目3番19号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521944186/', R + 'B504119739/'],
    price_note: 'Prices from February–March 2026 reviews.', last_checked: TODAY, items: [
      it('すいかずらランチ', '', '"Honeysuckle rice" daily lunch plate', '¥1,100', 'Lunch', 'ask', 'no', 'February 2026.', 'plate'),
      it('', '', 'Daily lunch plate with a drink', '¥1,300', 'Lunch', 'ask', 'no', 'March 2025.', 'platedrink'),
      it('ゆず茶', '', 'Yuzu tea', '', 'Drinks', '', '', '2026 photos.', 'yuzu'),
    ] }, {
    cuisine: 'アンティークの家具とステンドグラスのティールームのカフェ (20席、カウンターとテーブル数卓)・ランチは日替わりの1品「すいかずらランチ」1100円 (ドリンクつき1300円、2026年2〜3月): 大根おろしとポン酢の和風ハンバーグなどのメイン、野菜の天ぷら、煮物、コールスロー、玉子焼きなどの小鉢、白米か雑穀米、汁物・紅茶、柚子茶、カフェオレ・ランチにミニパフェやケーキを追加できる',
    neighborhood: '南船場2-3-19。長堀橋駅から南船場方面へ徒歩3分、入口に黒板',
    gf_detail: '要確認。グルテンの情報なし。日替わりのプレートにはコロッケ、天ぷら、うどん、ポン酢のハンバーグなどが出たことがある。',
    vegan_detail: '実質ヴィーガンではありません。日替わりのプレートは肉か魚のメインに卵や出汁を使った小鉢で、ヴィーガンの記載なし。',
    notes: '[カフェ・南船場、家庭的な日替わりランチのレトロなティールーム] 長堀橋近くの薄暗いカフェで、古い洋館か英国のティールームのような店内にアンティークの家具とステンドグラス。営業は火〜木のランチだけで、料理は日替わりの「すいかずらランチ」1品 (1100円、ドリンクつき1300円)。和風のハンバーグ (大根おろしとポン酢) などのメインに野菜の小鉢がいくつか、白米か雑穀米、汁物。毎日変わるバランスのいい家庭的な食事として好む声が複数あり、ミニパフェやケーキも追加できる。冬に最初にお湯を出してもらったという声も。現金のみ、店内は喫煙可。',
  });
}

// ================================================================ gelamu. Shinsaibashi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27150989/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '22:00']);
  put({
    id: 'osaka_gelamu_shinsaibashi', name: 'gelamu. Shinsaibashi', category: 'OMNI',
    lat: 34.676593, lng: 135.505186, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; flavors include walnut and latte, and gelato comes in a cup or cone.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: milk-based gelato such as latte, pistachio and matcha; mango and strawberry may be sorbets but nothing is labeled dairy-free.',
    hours_raw: 'Mon–Wed and Fri–Sun, holidays and the days before and after holidays 12:00–22:00; closed Thursday; closing days may vary (Tabelog). No reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (PayPay, d Barai, au PAY, Alipay, WeChat Pay) accepted (Tabelog). 10 seats and an open terrace; dogs welcome inside; takeout and delivery; children and strollers welcome (Tabelog). No tasting spoons (August–October 2026). Opened 12 July 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Senba 2-6-29, Kamogawa Bldg #101 — 4 min from Nagahoribashi Stn, about 10 min from Shinsaibashi Daimaru',
    cuisine: 'Gelato shop (10 seats, terrace) · single, DUO (two flavors in a cone) and double · flavors such as mango, café latte, latte noir, pistachio, matcha, Earl Grey, strawberry, walnut · Earl Grey Blanc ¥1,300 · matcha affogato',
    website: null, gmaps: gm('gelamu. 心斎橋'), menu_url: null,
    notes: "[Sweets · late-night gelato, Minami-Senba] A clean, elegant gelato shop between Shinsaibashi and Nagahoribashi, open until 10 pm, which makes it a handy dessert stop after dinner. One diner called the gelato natural, another found flavors not seen elsewhere: tangy mango, café latte, latte noir, pistachio, matcha, Earl Grey, strawberry and walnut, with the DUO giving two in a cone. One diner had the Earl Grey Blanc (¥1,300), full of bergamot aroma; there's a matcha affogato too. There are no tasting spoons, so decide at the case. Dogs are welcome inside, and there's a small terrace. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 July 2025 (Tabelog).', background: 'Gelato shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Gelato; late opening.',
      anecdotes: [
        { text: '"The moment I took a bite, the aroma of bergamot filled my nose, and the sweetness was just right—delicious!" — August 2026, Earl Grey Blanc ¥1,300.', source: R + 'B533512820/' },
        { text: '"The Latte Noir and Pistachio I tried were both rich yet refreshing, and absolutely delicious!" — October 2026.', source: R + 'B537458172/' },
      ],
      japanese_sources_summary: '食べログ: gelamu. 心斎橋、大阪市中央区南船場2-6-29 鴨川ビル101、長堀橋駅から251m、月〜水・金〜日・祝・祝前日・祝後日12:00〜22:00、木曜休み (変わる場合あり)、予約不可、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー・QR (PayPay・d払い・au PAY・Alipay・WeChat Pay) 可、10席、テラス、犬は店内OK、テイクアウト・デリバリー、子ども・ベビーカー歓迎、2025年7月12日開店。口コミ(2026年7〜10月): 夜10時まで開いていて夕食後のデザートに便利、マンゴー、カフェラテ、 Latte Noir、ピスタチオ、抹茶、アールグレイ、いちご、くるみ、2種をコーンで楽しめるDUO、 Earl Grey Blanc 1300円 (ベルガモットの香り)、抹茶のアフォガート、試食はなし、清潔で上品な外観と店内。',
      confidence: 'medium', sources: [TB, R + 'B532000304/', R + 'B532967599/', R + 'B533512820/', R + 'B535873832/', R + 'B537458172/', R + 'B537654028/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose at the case; no tasting spoons (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-6-29 鴨川ビル101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026. No other gelamu. branch found (web search, 2026-10-29).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目6番29号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533512820/', R + 'B532000304/'],
    price_note: 'Price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Earl Grey Blanc', '¥1,300', 'Gelato', 'ask', 'no', 'August 2026.', 'earlgrey'),
      it('', '', 'DUO (two flavors in a cone)', '', 'Gelato', 'no', 'no', 'July 2026.', 'duo'),
      it('', '', 'Matcha affogato', '', 'Gelato', 'ask', 'no', 'September 2026.', 'affogato'),
    ] }, {
    cuisine: 'ジェラートの店 (10席、テラス)・シングル、2種をコーンで楽しめるDUO、ダブル・マンゴー、カフェラテ、 Latte Noir、ピスタチオ、抹茶、アールグレイ、いちご、くるみなど・ Earl Grey Blanc 1300円・抹茶のアフォガート',
    neighborhood: '南船場2-6-29 鴨川ビル101。長堀橋駅から徒歩4分、心斎橋大丸から徒歩10分ほど',
    gf_detail: '要確認。グルテンの情報なし。くるみやラテなどのフレーバーがあり、カップかコーン。',
    vegan_detail: '実質ヴィーガンではありません。ラテ、ピスタチオ、抹茶などミルクのジェラート。マンゴーやいちごはソルベの可能性もあるが、乳製品不使用の表示なし。',
    notes: '[スイーツ・南船場、夜10時まで開いているジェラート] 心斎橋と長堀橋の間にある清潔で上品なジェラートの店で、夜10時まで。夕食後のデザートに便利。自然な味という声や、ほかにないフレーバーという声も: 酸味のあるマンゴー、カフェラテ、 Latte Noir、ピスタチオ、抹茶、アールグレイ、いちご、くるみなど。DUOなら2種をコーンで。ある人はベルガモットの香りが広がる Earl Grey Blanc  (1300円) を。抹茶のアフォガートもある。試食はないのでショーケースの前で決めて。犬は店内OK、小さなテラスあり。木曜休み。',
  });
}

save();
