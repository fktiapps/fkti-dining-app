// Ginza Station half-mile sweep (805 m), batch 58 — next four from the non-Japanese filter (all OMNI).
//   + ロオジエ / L'OSIER (Shiseido's grand maison since 1973; executive chef Olivier Chaignon since 2013)
//   + Restaurant Miyazaki (ZOE Ginza 9F; chef Osamu Miyazaki / 宮崎修 per Tabelog; operator cityclub.co.jp)
//   + オステリア ミオ・バール (Higashi-Ginza osteria, 13th year; organic vegetables from Miyazaki; same building as essence)
//   + トラットリア・バッフォ (basement trattoria known for smoky sea-bream collar and thin pizza)
// Fetched for b59 (all with 2026 reviews): 銀座シシリア 13308408, Bar & Tapas Celona 13217805 (Create Restaurants),
// 五右衛門 日比谷店 13147319 (chain), Madera 13281196.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ ロオジエ / L'OSIER
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002607/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_losier_ginza7', name: 'ロオジエ (L’OSIER)', category: 'OMNI',
    lat: 35.669656, lng: 139.761253,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A grand-maison French tasting menu; recent courses included buckwheat with pigeon, a flambéed crêpe and a pastry and chocolate cart. Staff keep notes on regulars’ dislikes (2026 review), but no source mentions gluten-free handling — raise it when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tasting menus of crab, caviar, shellfish, sweetfish, pigeon and beef.',
    hours_raw: 'Tue–Sat 11:30–15:00 (L.O. 12:30) and 17:30–22:00 (L.O. 19:00); closed Sundays, Mondays, some holidays, mid-August and over New Year (Tabelog). 15% service charge. Cards and QR (incl. Alipay, WeChat Pay) accepted.',
    hours: { 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, 7-5-5 — 7 min from Ginza Stn, 6 min from JR Shimbashi Ginza exit',
    cuisine: 'Grand-maison French, Shiseido-run since 1973 · executive chef Olivier Chaignon · lunch ¥20,000–40,000, dinner from ¥50,000', cuisine_type: 'french',
    website: 'https://losier.shiseido.co.jp/losier/', gmaps: gm('ロオジエ 銀座7-5-5'), menu_url: null,
    notes: "[French · Ginza's grand maison] Shiseido's French restaurant, open on this site since 1973. A doorman opens the doors onto a spiral staircase and a room by the designer Pierre-Yves Rochon. Olivier Chaignon has been executive chef since 2013. An October 2026 private-room dinner ran hairy crab with caviar and turnip mousse, shellfish and grilled mirugai, sweetfish grilled with its scales, roast pigeon with buckwheat and confit thigh, cheese, a flambéed persimmon crêpe and the tea-sweets wagon. Diners praise the fish sauces, the dessert and chocolate carts, a champagne list of seven or eight to choose from, and Grand Cru Burgundy by the glass. Service is attentive and remembers regulars' dislikes, though two October 2026 reviewers singled out a cold staff member and one long-time regular found the menu too heavy on cold dishes. One diner booked lunch three months ahead; 15% service; private rooms ¥11,000–55,000; parking for 10 cars.",
    chef_bio: { chef_name: 'Olivier Chaignon (executive chef)', roles: ['executive chef'], origin: 'Opened 1973 (Tabelog); chef appointed 2013', background: 'Operated by Shiseido; Olivier Chaignon appointed executive chef in 2013 (Tabelog listing).', philosophy: 'Carrying on the house’s traditions while pursuing "new-era flavors" (Tabelog listing).', specialty: 'Pigeon; fish with sauces.',
      anecdotes: [
        { text: '"They remembered me, a customer who only visits occasionally, and were fully aware of my dislikes and preferences." — October 2026.', source: R + 'B502377602/' },
        { text: '"The main fish dish had a remarkable balance of three different sauces… the chocolate cart that came out at the end offered a wide range of choices." — October 2026, lunch.', source: R + 'B536816517/' },
      ],
      japanese_sources_summary: '食べログ: ロオジエ(L’OSIER)、銀座7-5-5、銀座駅から徒歩7分、34席、個室あり(昼11,000円・夜22,000円、2〜4名で55,000円)、火〜土11:30〜15:00・17:30〜22:00、日月・祝日不定・8月中旬・年末年始休、サービス料15%、カード・QR可、駐車場10台。店の紹介: 資生堂が運営し1973年からこの地に、Pierre-Yves Rochon による空間、2013年からエグゼクティブシェフの Olivier Chaignon。2026年の口コミ: 毛蟹とキャビアとかぶのムース、平貝とミル貝、鮎の鱗焼き、鳩のロースト(そば粉、もものコンフィ)、チーズ、柿のクレープ・フランベ、茶菓のワゴン、黒トリュフのコース、グラン・クリュのグラスワイン、3種のソースの魚料理、ショコラのワゴン、シャンパーニュ7〜8種、常連の好みを把握するサービス、一方で冷たい皿が多い・一部スタッフの応対が冷たいとの声。',
      confidence: 'medium', sources: [TB, R + 'B522967333/', R + 'B536816517/', R + 'B537305332/', R + 'B502377602/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Grand maison with a doorman; book well ahead.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Staff were fully aware of a returning diner’s dislikes and preferences.', source: R + 'B502377602/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-5-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目5番5号 (go) 46m (large building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522967333/', R + 'B537305332/'],
    price_note: 'No course prices captured; Tabelog budget ¥20,000–29,999 lunch, ¥50,000–59,999 dinner, plus 15% service.', last_checked: TODAY, items: [
      it('ディナーコース', 'dinaa koosu', 'Dinner tasting menu (e.g. hairy crab and caviar, sweetfish, roast pigeon, cheese, crêpe flambée, tea-sweets wagon)', '', 'Courses', 'ask', 'no', 'October 2026.', 'dinner'),
      it('ランチコース', 'ranchi koosu', 'Lunch: four courses plus dessert and chocolate cart', '', 'Courses', 'ask', 'no', 'October 2026.', 'lunch'),
    ] }, {
    cuisine: '1973年から資生堂が営むグラン・メゾンのフレンチ・エグゼクティブシェフ Olivier Chaignon・昼2〜4万円、夜5万円から',
    neighborhood: '銀座七丁目、7-5-5。銀座駅から徒歩7分、JR新橋駅銀座口から6分',
    gf_detail: '要確認。グラン・メゾンのフレンチのコースで、最近はそば粉を添えた鳩、クレープのフランベ、菓子やショコラのワゴンなど。常連の苦手なものは把握してくれますが(2026年の口コミ)、グルテンフリーの対応は書かれていません。予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。蟹、キャビア、貝、鮎、鳩、牛肉のコースです。',
    notes: '[フレンチ・銀座のグラン・メゾン] 資生堂のフレンチレストランで、1973年からこの地に。ドアマンが扉を開けると、螺旋階段と Pierre-Yves Rochon による空間。2013年からエグゼクティブシェフは Olivier Chaignon。2026年10月の個室のディナーは、毛蟹とキャビアとかぶのムース、平貝と焼いたミル貝、鮎の鱗焼き、そば粉ともものコンフィを添えた鳩のロースト、チーズ、柿のクレープ・フランベ、茶菓のワゴン。魚料理のソース、デザートとショコラのワゴン、7〜8種から選べるシャンパーニュ、グラスのグラン・クリュのブルゴーニュが評判。常連の好みまで覚えている気配りのサービスですが、2026年10月には一部スタッフの応対が冷たかったという声が2件、冷たい皿が多すぎるという長年の常連の声も。ランチを3か月前に予約した客も。サービス料15%、個室料11,000〜55,000円、駐車場10台。',
  });
}

// ================================================================ Restaurant Miyazaki
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13298879/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['17:30', '23:00']);
  put({
    id: 'tokyo_restaurant_miyazaki_ginza3', name: 'Restaurant Miyazaki', category: 'OMNI',
    lat: 35.673434, lng: 139.765816,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French courses; staff confirm dislikes when you book (2026 review), but no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of salmon, sea bream, Ezo venison or Wagyu.',
    hours_raw: 'Mon–Fri and holidays 11:30–15:00 (L.O. 14:00) and 17:30–23:00 (L.O. 21:00); closed Saturdays and Sundays (Tabelog). 10% service charge. Cards, IC and QR accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, ZOE Ginza 9F — 2 min from Ginza Stn exit C8 or Ginza-itchōme exit 5',
    cuisine: 'French, "tradition and innovation" · chef Osamu Miyazaki · lunch courses from ¥8,800 · views over Ginza', cuisine_type: 'french',
    website: 'https://cityclub.co.jp/miyazaki/', gmaps: gm('Restaurant Miyazaki ZOE銀座 9F'), menu_url: null,
    notes: "[French · ninth floor over Ginza 3-chōme] A 32-seat French restaurant with views over the Ginza streets, opened in July 2024 under chef Osamu Miyazaki with the motto 'tradition and innovation'. Lunch courses start at ¥8,800 and include two desserts. 2026 diners describe a salmon mi-cuit, a corn soup of many textures, crisp-skinned sea bream with a rich sauce, a choice of game or Wagyu (the roast Ezo venison was the best one diner had ever eaten), and a cava toast. Staff confirm dislikes when you book and explain each dish to newcomers, and the chef often comes out and sees guests off. Private rooms ¥11,000; 10% service charge.",
    chef_bio: { chef_name: 'Osamu Miyazaki (宮崎修)', roles: ['executive chef'], origin: 'Opened 15 July 2024 (Tabelog)', background: 'Chef with a history at renowned restaurants (Tabelog listing); operated via cityclub.co.jp — ownership not stated.', philosophy: '"Tradition and Innovation" (伝統と革新, Tabelog listing).', specialty: 'Classic French with seasonal game.',
      anecdotes: [
        { text: '"They carefully confirmed any ingredients I might not like, and they also made thoughtful suggestions." — August 2026, anniversary dinner.', source: R + 'B534549220/' },
        { text: '"The roasted Ezo deer was cooked to perfection and was the best I\'ve ever had." — September 2026.', source: R + 'B535686424/' },
      ],
      japanese_sources_summary: '食べログ: Restaurant Miyazaki、銀座3-3-1 ZOE銀座9F、銀座駅C8出口・銀座一丁目駅5番出口から徒歩2分、32席(テーブル)、個室料11,000円、平日・祝11:30〜15:00・17:30〜23:00、土日休、サービス料10%、カード・IC・QR可、2024年7月15日開店、公式サイト cityclub.co.jp/miyazaki/。店の紹介: 名店で経験を積んだシェフ宮崎修が提唱する「伝統と革新」、ランチは8,800円からでデザート2品付き、マムのシャンパーニュ90分飲み放題付きのランチ。2026年の口コミ: 予約時に苦手な食材を確認、サーモンのミ・キュイ、とうもろこしのスープ、真鯛のポワレ、ジビエか和牛を選べるメイン、蝦夷鹿のロースト、カヴァで乾杯、デザート2品、シェフの見送り。',
      confidence: 'medium', sources: [TB, R + 'B534549220/', R + 'B535686424/', R + 'B536523358/', R + 'B534858602/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain dishes patiently; suits first-timers to French dining.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Disliked ingredients confirmed at booking, with suggestions offered.', source: R + 'B534549220/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-3-1 ZOE銀座 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目3番1号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536523358/'],
    price_note: 'Lunch starting price from Tabelog (tax incl.); 10% service charge extra.', last_checked: TODAY, items: [
      it('ランチ フルコース', 'ranchi furu koosu', 'Lunch full course with two desserts', '¥8,800〜', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_course'),
      it('ランチ6品+シャンパーニュ90分飲み放題', '', 'Lunch, 6 dishes, with 90-minute Champagne Mumm free-flow', '', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_champagne'),
    ] }, {
    cuisine: '「伝統と革新」のフレンチ・シェフ宮崎修・ランチコース8,800円から・銀座を見下ろす眺め',
    neighborhood: '銀座三丁目、ZOE銀座9F。銀座駅C8出口・銀座一丁目駅5番出口から徒歩2分',
    gf_detail: '要確認。フレンチのコースで、予約時に苦手なものを確認してくれますが(2026年の口コミ)、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。サーモン、真鯛、蝦夷鹿や和牛のコースです。',
    notes: '[フレンチ・銀座三丁目の9階] 銀座の街並みを見渡す32席のフレンチで、2024年7月にシェフ宮崎修のもと「伝統と革新」を掲げて開店。ランチコースは8,800円からでデザート2品付き。2026年の客は、サーモンのミ・キュイ、食感の楽しいとうもろこしのスープ、皮はパリッと身はふっくらの真鯛と濃厚なソース、ジビエか和牛を選べるメイン(蝦夷鹿のローストは人生最高だったという声も)、カヴァの乾杯などを紹介。予約時に苦手なものを確認し、初めての人にも一皿ずつ丁寧に説明してくれて、シェフが顔を出して見送ってくれることも多いそう。個室料11,000円、サービス料10%。',
  });
}

// ================================================================ オステリア ミオ・バール
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13155965/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:30'], ['17:30', '22:30']);
  put({
    id: 'tokyo_osteria_mio_bar_ginza3', name: 'オステリア ミオ・バール (Osteria Mio Bar)', category: 'OMNI',
    lat: 35.670701, lng: 139.768653,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch is a pasta set; dinner adds an appetizer platter of vegetable marinades, carpaccio and frittata, a porcini risotto and roast venison. No source mentions gluten-free handling.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Organic vegetables delivered weekly from Miyazaki feature on the menu, and appetizers include vegetable marinades and pickles, but no vegan option is described.',
    hours_raw: 'Mon–Fri 11:30–14:30 (L.O. 14:00) and 17:30–22:30 (L.O. 21:30); Sat and holidays 11:30–15:30 and 17:30–22:00; closed Sundays (Tabelog; also closed 24 and 26 October 2026). Cards, e-money and QR accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:30', '15:30'], ['17:30', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Dai-roku Maruka Bldg 2F (above essence) — 2 min from Higashi-Ginza Stn',
    cuisine: 'Italian home cooking and sommelier-picked wine · ¥1,500–1,600 pasta lunch with five appetizers · organic Miyazaki vegetables', cuisine_type: 'other',
    website: null, gmaps: gm('オステリア ミオ・バール 銀座3-11-8'), menu_url: null,
    notes: "[Italian osteria · Higashi-Ginza back street] A calm, earth-toned 36-seat osteria on a second floor off Shōwa-dōri, in its 13th year and often fully booked. Organic vegetables arrive weekly from Miyazaki. The weekday pasta lunch (¥1,500–1,600 in 2026) comes with a platter of five small appetizers and coffee. Pastas rotate, such as a spicy arrabbiata, an Ezo-venison ragù or a seafood aglio e olio, and a glass of sparkling wine is cheap. Dinner courses run through six to eight appetizers (carpaccio, vegetable marinades, house pickles, frittata, pâté), a gratin, pasta, porcini risotto and roast Ezo venison, with monthly wines chosen by the sommelier. About ¥6,000–8,000 at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 13 May 2013 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Appetizer platters; Ezo venison.',
      anecdotes: [
        { text: '"I opted for the Pasta Lunch featuring this week\'s Arrabbiata for JPY 1500. It comes with an assorted platter of five appetizers." — May 2026.', source: R + 'B528850911/' },
        { text: '"I chose the \'Ezo Venison Ragu Sauce (Bolognese)\' for my pasta." — September 2026, ¥1,600 lunch.', source: R + 'B535336262/' },
      ],
      japanese_sources_summary: '食べログ: オステリア ミオ・バール、銀座3-11-8 第6丸嘉ビル2F、東銀座駅から徒歩2分、36席(半個室あり)、平日11:30〜14:30・17:30〜22:30、土祝11:30〜15:30・17:30〜22:00、日休、2026年10月24日・26日は休業、カード・電子マネー・QR可、2013年5月13日開店、13周年。店の紹介: ソムリエが選ぶワインとイタリアの家庭料理、宮崎から毎週届く有機野菜、今月のおすすめコース(前菜8種、ポルチーニのリゾット、蝦夷鹿のロースト)。2026年の口コミ: パスタランチ1,500〜1,600円(前菜5種とコーヒー付き)、アラビアータ、蝦夷鹿のラグー、魚介のペペロンチーノ、夜のコースに鮮魚のカルパッチョ、野菜のマリネ、自家製ピクルス、フリッタータ、自家製パテ、グラタン。',
      confidence: 'medium', sources: [TB, R + 'B528850911/', R + 'B535336262/', R + 'B529410445/', R + 'B533813834/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular at lunch; book for dinner.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-11-8 第6丸嘉ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (October 2026 closure notice); reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目11番8号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528850911/', R + 'B535336262/'],
    price_note: 'Lunch prices from May and September 2026 reviews.', last_checked: TODAY, items: [
      it('パスタランチ', 'pasuta ranchi', 'Pasta lunch with five appetizers and coffee (arrabbiata, Ezo-venison ragù or seafood aglio e olio)', '¥1,600', 'Lunch', 'no', 'ask', '¥1,500 in May, ¥1,600 in September 2026.', 'pasta_lunch'),
      it('今月のおすすめコース', '', 'Chef’s monthly course: 8 appetizers, porcini risotto, roast Ezo venison', '', 'Courses', 'ask', 'no', 'Tabelog.', 'monthly_course'),
    ] }, {
    cuisine: 'イタリアの家庭料理とソムリエが選ぶワイン・前菜5種付きのパスタランチ1,500〜1,600円・宮崎の有機野菜',
    neighborhood: '銀座三丁目、第6丸嘉ビル2F(エッセンスの上)。東銀座駅から徒歩2分',
    gf_detail: '要確認。昼はパスタのセット、夜は野菜のマリネ、カルパッチョ、フリッタータなどの前菜盛り合わせ、ポルチーニのリゾット、鹿のロースト。グルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。宮崎から毎週届く有機野菜を使い、前菜には野菜のマリネやピクルスもありますが、ヴィーガンの選択肢は書かれていません。',
    notes: '[イタリアン・東銀座の裏通り] 昭和通りから入った2階、土の色調で落ち着いた36席のオステリアで、13年目。満席のことも多い人気店です。宮崎から毎週有機野菜が届きます。平日のパスタランチ(2026年は1,500〜1,600円)は前菜5種の盛り合わせとコーヒー付きで、パスタはピリ辛のアラビアータ、蝦夷鹿のラグー、魚介のペペロンチーノなど週替わり。スパークリングワインもお得。夜のコースは前菜6〜8種(カルパッチョ、野菜のマリネ、自家製ピクルス、フリッタータ、パテ)、グラタン、パスタ、ポルチーニのリゾット、蝦夷鹿のローストなどで、ソムリエが選ぶ今月のワインと。夜は6,000〜8,000円ほど。',
  });
}

// ================================================================ トラットリア・バッフォ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13004986/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '14:00'], ['17:30', '21:30']);
  put({
    id: 'tokyo_trattoria_baffo_ginza3', name: 'トラットリア・バッフォ (Trattoria Baffo)', category: 'OMNI',
    lat: 35.670791, lng: 139.769317,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature smoky sea-bream collar is simply salted, but the menu also leans on very thin pizzas, pasta and bread; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: a seafood-focused trattoria (sea-bream collar, salmon and anago mille-feuille, caviar pizza).',
    hours_raw: 'Tue–Sun 11:30–14:00 and 17:30–21:30; closed Mondays (Tabelog). Cards accepted (VISA, JCB, AMEX); no e-money or QR.',
    hours: { 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, 3-12-5 B1F — 3 min from Higashi-Ginza Stn',
    cuisine: 'Seafood trattoria · smoky salt-grilled sea-bream collar, paper-thin pizza · hard to book', cuisine_type: 'other',
    website: 'http://www.baffo-96.com/', gmaps: gm('トラットリア・バッフォ 銀座3-12-5'), menu_url: null,
    notes: "[Italian · seafood trattoria underground] A 36-seat basement trattoria near Higashi-Ginza, popular enough that one diner tried for ages to book. It is famous for its sea-bream collar (tai kama), salted and smoky. The pizza crust is almost as thin as a gyōza wrapper, with toppings such as caviar and porcini or white fish and arugula. A salmon and anago mille-feuille, pasta, assorted complimentary breads, and desserts like baba and peach compote round it out. Diners praise the attentive staff, and regulars trust the seasonal recommendations. Group free-flow covers only beer and wine, and guests may bring their own soft drinks. About ¥6,000–15,000 at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 3-chōme; opening date not given', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Sea-bream collar; thin pizza.',
      anecdotes: [
        { text: '"This place is famous for its Tai Kama… the pizza had an incredibly thin crust, almost like gyoza skin." — May 2026.', source: R + 'B528762217/' },
        { text: '"The all-you-can-drink option was unique, offering only beer or wine, while other beverages could be brought in." — August 2026.', source: R + 'B534608070/' },
      ],
      japanese_sources_summary: '食べログ: トラットリア・バッフォ、銀座3-12-5 B1F、東銀座駅から徒歩3分、36席、火〜日11:30〜14:00・17:30〜21:30、月休、カード可(VISA・JCB・AMEX)、電子マネー・QR不可、分煙、魚にこだわり、公式サイト baffo-96.com。2026年の口コミ: 名物の鯛のカマ(燻香と塩)、餃子の皮のように薄いピザ(キャビアとポルチーニ、白身魚とルッコラ)、サーモンと穴子のミルフィーユ、数種類のサービスのパン、ババ、桃のコンポート、行き届いたサービス、予約が取りにくい、飲み放題はビールとワインのみでソフトドリンクは持ち込み可、6,000〜15,000円。',
      confidence: 'medium', sources: [TB, R + 'B528762217/', R + 'B535102010/', R + 'B534608070/', R + 'B453554745/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead, especially weekends.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-12-5 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目12番5号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528762217/', R + 'B535102010/'],
    price_note: 'No prices captured; reviewers spend ¥6,000–15,000 at dinner.', last_checked: TODAY, items: [
      it('鯛のカマ', 'tai no kama', 'Smoky salt-grilled sea-bream collar', '', 'Mains', 'ask', 'no', 'The signature.', 'tai_kama'),
      it('キャビアとポルチーニのピッツァ', '', 'Thin-crust pizza with caviar and porcini', '', 'Pizza', 'no', 'no', '', 'pizza_caviar'),
      it('サーモンと穴子のミルフィーユ', '', 'Salmon and anago mille-feuille', '', 'Appetizers', 'ask', 'no', '', 'salmon_anago'),
    ] }, {
    cuisine: '魚介のトラットリア・燻香をまとった鯛のカマの塩焼き、ごく薄いピザ・予約困難',
    neighborhood: '銀座三丁目、3-12-5 B1F。東銀座駅から徒歩3分',
    gf_detail: '要確認。名物の鯛のカマは塩で焼いたものですが、ごく薄いピザ、パスタ、パンも中心で、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。魚介中心のトラットリア(鯛のカマ、サーモンと穴子のミルフィーユ、キャビアのピザ)。',
    notes: '[イタリアン・地下の魚介のトラットリア] 東銀座近くの地下にある36席のトラットリアで、なかなか予約が取れなかったという声もある人気店。名物は燻香と塩が効いた鯛のカマ。ピザは餃子の皮のように薄い生地で、キャビアとポルチーニ、白身魚とルッコラなど。サーモンと穴子のミルフィーユ、パスタ、数種類のサービスのパン、ババや桃のコンポートなどのデザートも。スタッフの細やかなもてなしが評判で、常連は季節のおすすめを頼みます。団体の飲み放題はビールとワインのみで、ソフトドリンクは持ち込み可。夜は6,000〜15,000円ほど。',
  });
}

save();
