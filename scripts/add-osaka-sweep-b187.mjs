// Osaka sweep (2-mile circle around Dotonbori), batch 187 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + OSARU Coffee (dark-roast coffee stand from 8 am, plates upstairs next door; Motomachi, Naniwa)
//   + over the over (natural-wine bistro with an open kitchen, courses and à la carte; Namba-naka)
//   + mill pour (specialty coffee stand with a roadside terrace bench; Minami-Senba)
//   + 自家製ミートソース potto (homemade meat sauce on chewy fresh pasta; Minami-Senba)
//   - skip サタデーズ サーフ ニューヨーク 大阪店 (international chain), 幸せのパンケーキ 南船場 はなれ (national chain)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 187);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ OSARU Coffee
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27093851/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://osarucoffee.thebase.in/';
  put({
    id: 'osaka_osaru_coffee_motomachi', name: 'OSARU Coffee', category: 'OMNI',
    lat: 34.663743, lng: 135.495491, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the upstairs plates are sandwiches, croque monsieur, French toast, croissants and cheesecake.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee (Americano, iced dark roast) is on the menu; the food plates use egg, ham, cheese and béchamel.',
    hours_raw: 'Daily 8:00–17:00; may change (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR accepted (Tabelog). Non-smoking; 11 seats; no reservations (Tabelog). The 1F stand serves coffee only; plates are served in the café on the 2F of the building next door (September 2026). About 15 people were waiting before the 8:00 opening on a Saturday, and the stairs fill with a line at busy times; don\'t line up in front of the neighboring Kumon (October 2026). Opened 22 August 2016 (Tabelog).',
    hours: ALL(day(['08:00', '17:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Motomachi 1-7-15, Naniwa — about 4 min from JR Namba, 10 min from Namba Stn Exit 6; entrance a little hard to find',
    cuisine: 'Specialty coffee stand and upstairs café (11 seats) · 1F stand: coffee only, wooden box seats where you take off your shoes · dark-roast "Slow Boat" iced coffee; "Magic Hour" iced coffee; hot Ethiopian; Americano; café latte · 2F café next door: onion and bacon croque monsieur ¥1,400; hot coffee ¥700; ham and egg sandwich plate with salad, potato salad and honey yogurt; French toast; croissants; cheesecake',
    website: OWN, gmaps: gm('OSARU Coffee 難波'), menu_url: null,
    notes: "[Café · a dark-roast coffee stand with a busy breakfast café next door, Motomachi] A small specialty coffee spot a few minutes from JR Namba, open from 8 am every day. The ground-floor stand serves only coffee: a cozy wooden room with box seats where you take off your shoes, and coffees like the dark-roast 'Slow Boat' iced coffee, 'Magic Hour', a hot Ethiopian and a light, low-acid Americano. For food, go up to the café on the second floor of the building next door, where one diner had a creamy onion and bacon croque monsieur (¥1,400) with a dark hot coffee (¥700) and another a ham and egg sandwich plate with a well-dressed salad and honey yogurt. Expect a line: about 15 people were waiting before opening one Saturday, and the line runs up the stairs; don't queue in front of the Kumon next door. When the stand is busy, orders can take a while.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 August 2016 (Tabelog).', background: 'Specialty coffee stand with a separate café upstairs next door (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Dark-roast coffee; croque monsieur and sandwich plates.',
      anecdotes: [
        { text: '"The Croque Monsieur was generously filled with béchamel sauce, cheese, bacon, and onions. It was creamy, with the sweetness of the onions perfectly balancing the saltiness of the bacon." — October 2026, Onion and Bacon Croque Monsieur ¥1,400.', source: R + 'B537085477/' },
        { text: '"The first floor serves only coffee, while the second floor offers plates with croissants, Croque Monsieur, French toast, and cheesecake. The entrance was a bit hard to find!" — September 2026.', source: R + 'B535785338/' },
      ],
      japanese_sources_summary: '食べログ: OSARU Coffee (オサル コーヒー)、大阪市浪速区元町1-7-15、JR難波駅から308m、毎日8:00〜17:00、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー・QR可、禁煙、11席、予約不可、2016年8月22日開店、公式サイトあり。口コミ(2026年9〜10月): 1階はコーヒーのみのスタンドで、靴を脱いで座る木の箱の席、深煎りの「Slow Boat」のアイスコーヒー、「Magic Hour」、ホットのエチオピア、酸味のない軽いアメリカーノ、カフェラテ。隣の建物の2階のカフェでプレート: 玉ねぎとベーコンのクロックムッシュ1400円、ホットコーヒー700円、ハムと卵のサンドのプレート (サラダ、ポテトサラダ、はちみつのヨーグルト)、フレンチトースト、クロワッサン、チーズケーキ。土曜の開店前に15人ほどの列、階段に並ぶ、隣の Kumon の前に並ばないように、混むと注文に時間がかかる、入口が少しわかりにくい。',
      confidence: 'medium', sources: [TB, OWN, R + 'B534165528/', R + 'B535785338/', R + 'B536221677/', R + 'B536260497/', R + 'B537085477/', R + 'B537767395/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Coffee-only stand on 1F; plates in the 2F café next door; expect a line (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区元町1-7-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区元町一丁目7番15号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537085477/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('玉ねぎとベーコンのクロックムッシュ', '', 'Onion and bacon croque monsieur', '¥1,400', 'Plates', 'no', 'no', 'October 2026, 2F café.', 'croque'),
      it('ホットコーヒー', '', 'Hot coffee', '¥700', 'Coffee', '', '', 'October 2026.', 'hotcoffee'),
      it('', '', 'Ham and egg sandwich plate', '', 'Plates', 'no', 'no', 'October 2026, 2F café.', 'sandwich'),
      it('', '', '"Slow Boat" dark-roast iced coffee', '', 'Coffee', '', '', 'September 2026, 1F stand.', 'slowboat'),
    ] }, {
    cuisine: 'スペシャルティコーヒーのスタンドと上のカフェ (11席)・1階のスタンドはコーヒーのみ、靴を脱いで座る木の箱の席・深煎りの「Slow Boat」のアイスコーヒー、「Magic Hour」のアイスコーヒー、ホットのエチオピア、アメリカーノ、カフェラテ・隣の建物の2階のカフェ: 玉ねぎとベーコンのクロックムッシュ1400円、ホットコーヒー700円、ハムと卵のサンドのプレート (サラダ、ポテトサラダ、はちみつのヨーグルト)、フレンチトースト、クロワッサン、チーズケーキ',
    neighborhood: '浪速区元町1-7-15。JR難波駅から徒歩4分ほど、なんば駅6番出口から徒歩10分。入口が少しわかりにくい',
    gf_detail: '要確認。グルテンの情報なし。2階のプレートはサンド、クロックムッシュ、フレンチトースト、クロワッサン、チーズケーキ。',
    vegan_detail: '要確認。ブラックコーヒー (アメリカーノ、深煎りのアイスコーヒー) はある。食事のプレートは卵、ハム、チーズ、ベシャメルを使う。',
    notes: '[カフェ・元町、深煎りのコーヒースタンドと隣の朝ごはんのカフェ] JR難波駅から数分の小さなスペシャルティコーヒーの店で、毎日朝8時から。1階のスタンドはコーヒーのみで、靴を脱いで座る木の箱の席がある落ち着いた空間。深煎りの「Slow Boat」のアイスコーヒー、「Magic Hour」、ホットのエチオピア、酸味のない軽いアメリカーノなど。食事は隣の建物の2階のカフェへ。ある人は濃厚な玉ねぎとベーコンのクロックムッシュ (1400円) と深煎りのホットコーヒー (700円)、別の人はハムと卵のサンドのプレートを食べ、サラダのドレッシングとはちみつのヨーグルトもよかったそう。行列は覚悟で、土曜の開店前に15人ほど並び、列は階段まで続くことも。隣の Kumon の前には並ばないように。スタンドが混むと注文に時間がかかる。',
  });
}

// ================================================================ over the over
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27112044/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'osaka_over_the_over_nambanaka', name: 'over the over', category: 'OMNI',
    lat: 34.661605, lng: 135.500616, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; courses include a battered American dog, pasta, toast and canelé.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; a grilled vegetable salad is on the à la carte menu, but the course dishes described use fish, meat or cheese.',
    hours_raw: 'Mon–Sat 18:00–24:00 (last order 23:00); closed Sunday (Tabelog). Reservations accepted; call after 12:00 (Tabelog). Table charge ¥550 (Tabelog). Cards (VISA, Master, JCB, AMEX), e-money and QR (PayPay, Rakuten Pay) accepted (Tabelog). Non-smoking; 19 seats, private hire for 20–50; BYO drinks; takeout (Tabelog). Sofa seats are first-come even with a reservation (August 2026). Opened 16 April 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba-naka 2-8-86, Kunieda Bldg 2F, among the shops along the railway — 5 min from Nankai Namba Stn',
    cuisine: 'Creative European cooking and natural wine (19 seats, open kitchen) · ¥8,000 course and anniversary course: "American dog" in binchotan-charcoal batter with spiced meat; buri carpaccio with seaweed sauce; charcoal-grilled sawara with spinach sauce; sweet-potato soup with stracciatella; sansho Bolognese; charcoal-grilled Kyoto Hiyoshi pork; black fig and canelé · à la carte: crab miso toast; porcini omelette; grilled vegetable salad; pork sauté · non-alcoholic gin and tonic; homemade lemonade · birthday plate',
    website: null, gmaps: gm('over the over 難波中'), menu_url: null,
    notes: "[Creative · natural wine and seasonal plates from an open kitchen, Namba] A wood-toned second-floor restaurant beside the railway near Nankai Namba, open until midnight, where the cooking is ingredient-led and the wine list leans natural. Courses (from ¥8,000, plus an anniversary course) run from a playful 'American dog' in jet-black binchotan-charcoal batter to buri carpaccio, charcoal-grilled sawara, a sweet-potato soup with stracciatella, sansho Bolognese and low-temperature Kyoto Hiyoshi pork, ending with black figs and canelé. You can also go à la carte: crab miso toast, a porcini omelette, grilled vegetable salad and a pork sauté that won over one seafood eater. Good non-alcoholic drinks too. It suits celebrations, and a birthday plate can be arranged. Sofa seats are first-come even if you've booked. Table charge ¥550. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 April 2018 (Tabelog).', background: 'Creative European restaurant and wine bar with an open kitchen (Tabelog; 2026 reviews).', philosophy: 'Ingredient-led dishes with natural wine (Tabelog listing).', specialty: 'Seasonal course; charcoal-grilled meat and fish.',
      anecdotes: [
        { text: '"The batter was mixed with binchotan charcoal, and inside was spiced meat." — October 2026, American Dog on the anniversary course.', source: R + 'B537584830/' },
        { text: '"I usually eat seafood, but the pork sauté here completely changed my perception. It was the first time I truly enjoyed a pork sauté." — August 2026.', source: R + 'B535576337/' },
      ],
      japanese_sources_summary: '食べログ: over the over (オーバー ザ オーバー)、大阪市浪速区難波中2-8-86 国枝ビル2F、南海なんば駅から徒歩5分、月〜土18:00〜24:00 (L.O. 23:00)、日曜休み、予約可 (12時以降に電話)、テーブルチャージ550円、カード (VISA・Master・JCB・AMEX)・電子マネー・QR (PayPay・楽天ペイ) 可、禁煙、19席、20〜50人の貸切、持ち込み可、テイクアウト、ベジタリアンメニューあり、2018年4月16日開店。口コミ(2026年5〜10月): 8000円のコースと記念日コース、炭の衣のアメリカンドッグ (中はスパイスの効いた肉)、buri のカルパッチョ、sawara の炭火焼き、さつまいものスープとストラッチャテッラ、sansho のボロネーゼ、京都のHiyoshi の豚の炭火焼き、黒いちじくとカヌレ、アラカルトでカニ味噌のトースト、ポルチーニのオムレツ、焼き野菜のサラダ、ポークソテー、ノンアルコールのジントニック、誕生日のプレート、ソファ席は予約していても先着順。',
      confidence: 'medium', sources: [TB, R + 'B528972694/', R + 'B531022303/', R + 'B535011844/', R + 'B535576337/', R + 'B535901029/', R + 'B537584830/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservations by phone after noon; table charge ¥550 (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-8-86 国枝ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目8番86号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528972694/', R + 'B537584830/', R + 'B535901029/'],
    price_note: 'Prices from 2026 reviews; table charge ¥550 extra.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥8,000', 'Courses', 'ask', 'ask', 'May 2026.', 'course'),
      it('', '', 'Anniversary course', '', 'Courses', 'ask', 'no', 'September–October 2026.', 'anniv'),
      it('', '', 'Crab miso toast', '', 'À la carte', 'no', 'no', 'September 2026.', 'crabtoast'),
      it('', '', 'Porcini omelette', '', 'À la carte', 'ask', 'no', 'September 2026.', 'porcini'),
    ] }, {
    cuisine: '創作のヨーロッパ料理と自然派ワイン (19席、オープンキッチン)・8000円のコースと記念日コース: binchotan の炭を混ぜた衣のアメリカンドッグ (中はスパイスの効いた肉)、海藻のソースのburi のカルパッチョ、ほうれん草のソースのsawara の炭火焼き、ストラッチャテッラをのせたさつまいものスープ、sansho のボロネーゼ、京都のHiyoshi の豚の炭火焼き、黒いちじくとカヌレ・アラカルト: カニ味噌のトースト、ポルチーニのオムレツ、焼き野菜のサラダ、ポークソテー・ノンアルコールのジントニック、自家製レモネード・誕生日のプレート',
    neighborhood: '難波中2-8-86 国枝ビル2F、線路沿いの店が並ぶビル。南海なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。コースに衣のアメリカンドッグ、パスタ、トースト、カヌレがある。',
    vegan_detail: '要確認。食べログにベジタリアンメニューありとある。アラカルトに焼き野菜のサラダがあるが、口コミにあるコースの皿は魚・肉・チーズを使う。',
    notes: '[創作・難波、オープンキッチンの季節の皿と自然派ワイン] 南海なんば駅近く、線路沿いのビルの2階にある木の温かみのある店で、夜12時まで。素材を生かした料理と自然派寄りのワイン。コース (8000円から、記念日コースも) は、binchotan の炭を混ぜた真っ黒な衣のアメリカンドッグから、buri のカルパッチョ、sawara の炭火焼き、ストラッチャテッラをのせたさつまいものスープ、sansho のボロネーゼ、低温で火を入れた京都のHiyoshi の豚、最後に黒いちじくとカヌレ。アラカルトもでき、カニ味噌のトースト、ポルチーニのオムレツ、焼き野菜のサラダ、魚好きの人の見方を変えたというポークソテーなど。ノンアルコールのドリンクも充実。お祝いに向き、誕生日のプレートも。ソファ席は予約していても先着順。テーブルチャージ550円。日曜休み。',
  });
}

// ================================================================ mill pour
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27055585/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://magnumcoffee.thebase.in/';
  put({
    id: 'osaka_mill_pour_minamisenba', name: 'mill pour', category: 'OMNI',
    lat: 34.676607, lng: 135.502274, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; food is a hot dog and breakfast items.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee (long black, cold brew, Americano) is on the menu; no plant milk mentioned.',
    hours_raw: 'Weekdays 9:00–18:00 (last order 17:30); weekends and holidays listed as 9:00–22:00, but a note on the same listing says weekend hours are shortened to 9:00–18:00; open year-round except New Year (Tabelog). No credit cards; e-money and QR (PayPay, d Barai, Rakuten Pay, au PAY) accepted (Tabelog). 10 seats: 8 on the terrace outside, 2 at the counter inside; smoking allowed on the terrace, not inside (Tabelog). English menu; pets OK; children welcome; takeout (Tabelog). The sign is small (June 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-6-1, Cypress Shinsaibashi 1F, beside 自家製ミートソース potto — 5 min from Shinsaibashi or Nagahoribashi Stn; small sign',
    cuisine: 'Specialty coffee stand (2 counter seats inside, terrace bench for 8) · hot long black; black cold brew (M) ¥750; iced Americano; iced café latte · hot dog · beans for sale',
    website: OWN, gmaps: gm('mill pour 心斎橋'), menu_url: null,
    notes: "[Café · a specialty coffee stand with a roadside bench, Minami-Senba] A tiny coffee stand east of Shinsaibashi with two seats inside and a tented bench along the road outside. The coffee is the point: a piping-hot, rich long black, a refreshing low-acid cold brew (M ¥750), Americanos and a creamy iced latte, with beans to take home. There's a hot dog if you're hungry. Look carefully, as the sign is small next to its neighbors. Smoking is allowed on the terrace, which one diner found uncomfortable. No credit cards; e-money and QR are fine. Weekday hours are 9 am–6 pm; check weekend hours, which the listing gives two ways.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Specialty coffee stand (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Long black; cold brew; coffee beans.',
      anecdotes: [
        { text: '"I ordered a hot long black coffee. It was piping hot and quite rich in flavor, with a strong aroma." — February 2026.', source: R + 'B522268631/' },
        { text: '"It has some bitterness but is refreshing, with almost no acidity. This is easy to drink—delicious coffee!" — June 2026, Black Cold Brew (M) ¥750.', source: R + 'B530038455/' },
      ],
      japanese_sources_summary: '食べログ: mill pour (Mill Pour Coffee、ミルポア)、大阪市中央区南船場3-6-1 サイプレス心斎橋 1F、心斎橋駅・長堀橋駅から徒歩5分、平日9:00〜18:00 (L.O. 17:30)、土日祝は9:00〜22:00 (L.O. 21:30) とあるが、同じページに土日祝も9:00〜18:00 に短縮との記載、年末年始以外は無休、カード不可、電子マネー・QR (PayPay・d払い・楽天ペイ・au PAY) 可、10席 (外のテラス8席、中のカウンター2席)、テラスは喫煙可・店内は禁煙、英語メニュー、ペット可、子ども歓迎、テイクアウト、公式サイトあり。口コミ(2026年1〜8月): 熱々で濃いロングブラック、ブラックのコールドブリュー (M) 750円、苦味はあるがすっきり酸味はほとんどない、アイスアメリカーノ、アイスカフェラテ、ホットドッグ、豆も買える、看板が小さい、道路に面したテントのベンチ、外で吸う人がいて煙が気になるという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B522268631/', R + 'B523413567/', R + 'B529546931/', R + 'B530038455/', R + 'B531945611/', R + 'B533369635/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; order at the counter (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-6-1 サイプレス心斎橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–August 2026; OSM node Mill Pour 5 m from the pin.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目6番1号 (go) 9m, OSM Mill Pour node/4662980189 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530038455/'],
    price_note: 'Price from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Black cold brew (M)', '¥750', 'Coffee', '', '', 'June 2026.', 'coldbrew'),
      it('', '', 'Hot long black', '', 'Coffee', '', '', 'February 2026.', 'longblack'),
      it('', '', 'Iced café latte', '', 'Coffee', '', 'no', 'April 2026.', 'latte'),
      it('', '', 'Hot dog', '', 'Food', 'no', 'no', 'June 2026.', 'hotdog'),
    ] }, {
    cuisine: 'スペシャルティコーヒーのスタンド (店内カウンター2席、外のベンチ8席)・ホットのロングブラック、ブラックのコールドブリュー (M) 750円、アイスアメリカーノ、アイスカフェラテ・ホットドッグ・豆の販売',
    neighborhood: '南船場3-6-1 サイプレス心斎橋 1F、自家製ミートソース potto の隣。心斎橋駅・長堀橋駅から徒歩5分。看板が小さい',
    gf_detail: '要確認。グルテンの情報なし。食べ物はホットドッグなど。',
    vegan_detail: '要確認。ブラックコーヒー (ロングブラック、コールドブリュー、アメリカーノ) はある。植物性ミルクの記載なし。',
    notes: '[カフェ・南船場、道路沿いのベンチのあるスペシャルティコーヒーのスタンド] 心斎橋の東にある小さなコーヒースタンドで、店内に2席、外の道路沿いにテントのかかったベンチ。主役はコーヒーで、熱々で濃いロングブラック、苦味はあるがすっきりして酸味のほとんどないコールドブリュー (M 750円)、アメリカーノ、クリーミーなアイスラテなど。豆も買える。お腹が空いたらホットドッグも。隣の店に比べて看板が小さいので見落とさないように。テラスは喫煙可で、気になったという声も。カード不可、電子マネー・QRは可。平日は9時〜18時。土日の営業時間はページ内で2通りの記載があるので確認を。',
  });
}

// ================================================================ 自家製ミートソース potto
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27071313/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.potto-has.com/';
  const WD = day(['11:00', '15:00'], ['17:00', '22:00']); const WE = day(['11:00', '22:00']);
  put({
    id: 'osaka_potto_meat_sauce_minamisenba', name: '自家製ミートソース potto (Jikasei Meat Sauce potto)', category: 'OMNI',
    lat: 34.676696, lng: 135.502321, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pasta shop serving wheat fresh pasta or whole-wheat pasta; no gluten-free pasta mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: meat sauces, cream sauces and carbonara; arrabbiata is listed but no vegan pasta is described.',
    hours_raw: 'Weekdays 11:00–15:00 and 17:00–22:00; weekends and holidays 11:00–22:00; irregular holidays possible (Tabelog). No lunch reservations; dinner reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (PayPay) accepted (Tabelog). 18 seats: 12 at the counter, 6 on the terrace; smoking and pets only on the terrace (Tabelog). QR ordering (October 2026). Opened 4 March 2013 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-6-1, Cypress Shinsaibashi 1F, beside mill pour — 3 min from Shinsaibashi Stn Exit 2',
    cuisine: 'Pasta shop for homemade meat sauce (12 counter seats, 6 on the terrace) · classic meat sauce simmered from beef senbon-suji · cream meat sauce with Australian grain-fed beef meatballs · limited dashi meat sauce with bonito flakes · carbonara; arrabbiata · monthly avocado cream sauce · oyster and karasumi pasta · fresh pasta or whole-wheat pasta · free large size at weekday lunch, soup on the side; drinks +¥200',
    website: OWN, gmaps: gm('自家製ミートソース potto 南船場'), menu_url: null,
    notes: "[Pasta · homemade meat sauce on chewy fresh pasta, Minami-Senba] A small counter pasta shop near Shinsaibashi built around its meat sauce, slow-simmered from the beef cut senbon-suji. The classic version is rich and clings well to chewy fresh pasta without any meaty smell; the listing also highlights a cream meat sauce with Australian grain-fed beef meatballs, and there are limited sauces like a dashi meat sauce topped with bonito flakes, a monthly avocado cream, carbonara and arrabbiata. Choose fresh or whole-wheat noodles. Weekday lunch includes a free large size and a side of soup, and drinks are just +¥200. Ordering is by QR code. One diner found the oyster and karasumi pasta bland and disliked being pushed to add the shop on LINE. Six terrace seats allow smoking and pets.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 March 2013 (Tabelog).', background: 'Pasta shop specializing in homemade meat sauce (Tabelog; 2026 reviews).', philosophy: 'Meat sauce slow-simmered from senbon-suji beef (Tabelog listing).', specialty: 'Homemade meat sauce; chewy fresh pasta.',
      anecdotes: [
        { text: '"The noodles were chewy, and the sauce was rich and well-coated, making it delicious. It was a traditional meat sauce without any overpowering meat smell…" — October 2026, classic meat sauce with fresh pasta.', source: R + 'B537996358/' },
        { text: '"It was topped with bonito flakes, giving it a lovely Japanese flavor, and it was incredibly delicious! The noodles were wonderfully chewy!" — September 2026, limited-time dashi meat sauce.', source: R + 'B536438948/' },
      ],
      japanese_sources_summary: '食べログ: 自家製ミートソース potto、大阪市中央区南船場3-6-1 サイプレス心斎橋 1F、心斎橋駅2番出口から徒歩3分、平日11:00〜15:00・17:00〜22:00、土日祝11:00〜22:00、不定休あり、ランチの予約不可、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー・QR (PayPay) 可、18席 (カウンター12席、テラス6席)、喫煙とペットはテラスのみ、2013年3月4日開店、公式サイトあり。店の紹介: senbon-suji をじっくり煮込んだ自家製ミートソース、オーストラリア産のグレインフェッドの牛100%のミートボールとクリームミートソース、カルボナーラ、アラビアータ。口コミ(2026年9〜10月): 期間限定のだしミートソース (かつお節のせ)、もちもちの生パスタ、全粒粉の麺も選べる、今月のアボカドクリーム、平日ランチは大盛り無料でスープつき、ドリンク+200円、QRで注文、牡蠣と karasumi のパスタは karasumi の味が薄く、接客が一方的でLINEの友だち登録を求められたという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B536438948/', R + 'B537772299/', R + 'B537996358/', R + 'B538070451/', R + 'B538173975/', R + 'B538220013/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; counter seats (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-6-1 サイプレス心斎橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目6番1号 (go) 8m; same building as mill pour, about 11 m apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537996358/', R + 'B536438948/'],
    price_note: 'Drinks +¥200 with pasta (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Classic meat sauce, fresh pasta', '', 'Pasta', 'no', 'no', 'October 2026.', 'classic'),
      it('', '', 'Limited dashi meat sauce with bonito flakes', '', 'Pasta', 'no', 'no', 'September 2026.', 'dashi'),
      it('', '', 'Cream meat sauce with beef meatballs', '', 'Pasta', 'no', 'no', 'Listing.', 'meatball'),
      it('', '', 'Avocado cream sauce of the month', '', 'Pasta', 'no', 'no', 'October 2026.', 'avocado'),
    ] }, {
    cuisine: '自家製ミートソースのパスタの店 (カウンター12席、テラス6席)・senbon-suji を煮込んだ定番のミートソース・オーストラリア産のグレインフェッドの牛のミートボールとクリームミートソース・期間限定のだしミートソース (かつお節のせ)・カルボナーラ、アラビアータ・今月のアボカドクリーム・牡蠣と karasumi のパスタ・生パスタか全粒粉のパスタ・平日ランチは大盛り無料でスープつき、ドリンク+200円',
    neighborhood: '南船場3-6-1 サイプレス心斎橋 1F、mill pour の隣。心斎橋駅2番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。小麦の生パスタか全粒粉のパスタの店で、グルテンフリーのパスタの記載なし。',
    vegan_detail: '実質ヴィーガンではありません。ミートソース、クリームソース、カルボナーラ。アラビアータはあるが、ヴィーガンのパスタの記載なし。',
    notes: '[パスタ・南船場、もちもちの生パスタと自家製ミートソース] 心斎橋近くのカウンターの小さなパスタの店で、看板は senbon-suji をじっくり煮込んだミートソース。定番は濃厚でソースがよく絡み、肉の臭みがなく、もちもちの生パスタと合う。店の紹介ではオーストラリア産のグレインフェッドの牛のミートボールとクリームミートソースを推し、ほかにかつお節をのせた期間限定のだしミートソース、今月のアボカドクリーム、カルボナーラ、アラビアータなど。麺は生パスタか全粒粉を選べる。平日ランチは大盛り無料でスープつき、ドリンクは+200円。注文はQRコードで。牡蠣と karasumi のパスタは味が薄く、LINEの友だち登録を求められたのが嫌だったという声も。テラスの6席は喫煙・ペット可。',
  });
}

skip('27084463', 'サタデーズ サーフ ニューヨーク 大阪店: international chain branch');
skip('27113520', '幸せのパンケーキ 南船場 はなれ: national pancake chain branch');

save();
