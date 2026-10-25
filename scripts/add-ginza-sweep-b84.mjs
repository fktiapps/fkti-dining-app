// Ginza Station half-mile sweep (805 m), batch 84 — all-genre phase (all OMNI).
//   + 日本ばし やぶ久 銀座店 (branch of the 120-year Nihonbashi soba house; curry soba)
//   + つきじ鈴富 GINZA SIX店 (tuna wholesaler's sushi, GINZA SIX 13F)
//   + ヤマガタ サンダンデロ (Al-chè-cciano's Ginza shop; Yamagata produce; Okuda's "yuderon" pasta)
//   + Arbre village (former Restaurant Kimuraya, 4F of Ginza Kimuraya bakery; French with Kimuraya bread)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ やぶ久 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13231610/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '15:00'], ['17:00', '22:00']), su = day(['11:00', '15:00'], ['17:00', '21:30']);
  put({
    id: 'tokyo_yabukyu_ginza3', name: '日本ばし やぶ久 銀座店 (Nihonbashi Yabu Kyu)', category: 'OMNI',
    lat: 35.673128, lng: 139.765531,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba with soy-based tsuyu and a curry soba (roux); no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kurobuta curry, fish-cake itawasa, karasumi; dashi-based broths.',
    hours_raw: 'Tue–Sat 11:00–15:00 and 17:00–22:00 (L.O. 21:30); Sun and holidays to 21:30; closed Mondays (Tabelog).',
    hours: { 1: wk, 2: wk, 3: wk, 4: wk, 5: wk, 6: su }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Ginza Morita Bldg B1F — near Ginza Stn and Itoya',
    cuisine: 'Branch of a 120-year Nihonbashi soba house · famous curry soba · kurobuta curry-rice set ¥2,200 · sake and small plates · private rooms', cuisine_type: 'udon_soba',
    website: 'http://www.yabukyu.com/', gmaps: gm('日本ばし やぶ久 銀座店'), menu_url: null,
    notes: "[Soba · the Nihonbashi Yabu Kyu in Ginza] A calm, grown-up 30-seat basement branch of Yabu Kyu, the Nihonbashi soba house with over 120 years of history, open since 2019, with private rooms. The famous dish is curry soba; one diner recommends an apron. The kurobuta curry-rice set (¥2,200, with a small curry rice) comes with soba tea. Evenings bring sake with karasumi and daikon, itawasa and a seasonal vegetable assortment, and the curry soba makes a good finish. Course dinners suit business meals, though one group felt the two-hour limit and loud staff.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 March 2019 (Tabelog); branch of the Nihonbashi original (120+ years, per Tabelog)', background: 'Multi-branch (yabukyu.com).', philosophy: null, specialty: 'Curry soba.',
      anecdotes: [
        { text: '"I ordered the Kurobuta Curry Rice Bowl Set for JPY 2200, with a smaller portion of curry rice. The tea served was soba tea." — September 2026.', source: R + 'B534893736/' },
        { text: '"Starting the gathering with karasumi daikon was fantastic!… The curry soba for the finale was incredibly delicious!" — September 2026.', source: R + 'B535286819/' },
      ],
      japanese_sources_summary: '食べログ: 日本ばし やぶ久 銀座店、銀座3-3-6 銀座モリタビルB1F、30席、個室あり、火〜土11:00〜15:00・17:00〜22:00、日祝は21:30まで、月休、2019年3月4日開店、公式サイト yabukyu.com。店の紹介: 120年以上続くそばと酒。2026年の口コミ: カレー南蛮にはエプロン、黒豚カレー丼のセット2,200円、そば茶、からすみ大根、板わさ、締めのカレーそば、季節の野菜の盛り合わせ、個室での接待のコース、2時間制、スタッフの声が大きいとの声、日本橋本店にも。',
      confidence: 'medium', sources: [TB, R + 'B534893736/', R + 'B535286819/', R + 'B536743186/', R + 'B535725528/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm basement; private rooms.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-3-6 銀座モリタビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目3番6号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534893736/'],
    price_note: 'Set price from a September 2026 review.', last_checked: TODAY, items: [
      it('カレー南蛮そば', 'karee nanban soba', 'Curry soba', '', 'Soba', 'no', 'no', 'The signature.', 'curry_soba'),
      it('黒豚カレー丼のセット', '', 'Kurobuta curry-rice set with soba', '¥2,200', 'Sets', 'no', 'no', 'September 2026.', 'kurobuta_curry'),
      it('からすみ大根', 'karasumi daikon', 'Karasumi with daikon', '', 'Small plates', 'ask', 'no', '', 'karasumi'),
    ] }, {
    cuisine: '日本橋で120年のそば屋の支店・名物のカレー南蛮・黒豚カレー丼のセット2,200円・日本酒とつまみ・個室',
    neighborhood: '銀座三丁目、銀座モリタビルB1F。銀座駅・伊東屋の近く',
    gf_detail: 'グルテンフリーではありません。醤油のつゆのそばとカレー(ルウ)のそばで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。黒豚のカレー、板わさ、からすみ、だしのつゆ。',
    notes: '[そば・日本橋やぶ久の銀座店] 120年以上の歴史を持つ日本橋のそば屋「やぶ久」の、落ち着いた大人の雰囲気の地下30席の支店で、2019年開店、個室も。名物はカレー南蛮で、エプロン必須との声も。黒豚カレー丼のセット(2,200円、カレー丼は小盛り)にはそば茶が出ます。夜はからすみ大根、板わさ、季節の野菜の盛り合わせを日本酒と、締めにカレーそば。コースは接待向きですが、2時間制とスタッフの声の大きさが気になったという声も。',
  });
}

// ================================================================ つきじ鈴富 GINZA SIX店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13207703/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '15:00'], ['17:30', '23:00']);
  put({
    id: 'tokyo_tsukiji_suzutomi_ginza_six', name: 'つきじ鈴富 GINZA SIX店 (Tsukiji Suzutomi)', category: 'OMNI',
    lat: 35.669109, lng: 139.763923,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi eaten with soy sauce plus seasonal Japanese dishes; whether wheat-free soy sauce is available is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tuna and shellfish sushi.',
    hours_raw: 'Daily 11:00–15:00 (last entry 14:00) and 17:30–23:00 (last entry 20:30); closed when GINZA SIX closes (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'GINZA SIX 13F, Ginza 6-chōme — underground link from Ginza Stn',
    cuisine: 'Tuna-wholesaler’s Edomae sushi · natural tuna, seasonal courses or à la carte · counters and semi-private rooms · ¥10,000–30,000+', cuisine_type: 'sushi',
    website: 'https://www.tsukiji-suzutomi.jp/', gmaps: gm('つきじ鈴富 GINZA SIX'), menu_url: null,
    notes: "[Sushi · tuna from a Toyosu wholesaler, GINZA SIX] A 30-seat sushi restaurant (two counters plus tables and semi-private rooms) on GINZA SIX's 13th floor, run directly by a long-established Toyosu tuna wholesaler specialising in natural tuna. Edomae sushi and seasonal Japanese dishes come as courses or à la carte. Counter diners praise the chefs' care and friendliness. Others found a semi-private course rushed and the feel more casual than a Ginza sushi-ya, eaten with soy sauce. Mind à la carte prices: a ¥9,000-per-person sashimi platter (chūtoro, akagai, hokkigai, tsubugai) helped push one bill for two past ¥60,000.",
    chef_bio: { chef_name: null, roles: [], origin: 'GINZA SIX branch (opening date not given)', background: 'Direct store of a Toyosu tuna wholesaler (Tabelog listing; tsukiji-suzutomi.jp).', philosophy: null, specialty: 'Natural tuna.',
      anecdotes: [
        { text: '"The assorted sashimi platter in the photo, priced at JPY 9,000 per person, felt a bit expensive. (Featuring chutoro, akagai, hokki-gai, and tsubugai)" — September 2026.', source: R + 'B536102310/' },
        { text: '"The attention to detail in the service was exceptional… I truly enjoyed the experience of dining at the counter." — September 2026.', source: R + 'B536422460/' },
      ],
      japanese_sources_summary: '食べログ: つきじ鈴富 GINZA SIX店、銀座6-10-1 GINZA SIX 13F、銀座駅から地下通路で直結、30席(カウンター8・6、テーブル16)、毎日11:00〜15:00(最終入店14:00)・17:30〜23:00(最終入店20:30)、GINZA SIXの休館日は休み、公式サイト tsukiji-suzutomi.jp。店の紹介: 天然本鮪専門の豊洲の老舗仲卸の直営、江戸前鮨と季節の和食、市場直送の魚、個室あり。2026年の口コミ: 半個室のコースは提供が早く居酒屋のよう、醤油をつけて食べるスタイルでチェーン店風、季節のコース、アラカルト、大将が親切、刺身盛り(中トロ・赤貝・ホッキ貝・つぶ貝)1人9,000円で2人6万円超、カウンターでの丁寧な仕事。',
      confidence: 'medium', sources: [TB, R + 'B536102310/', R + 'B536422460/', R + 'B534818163/', R + 'B533942296/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter recommended; watch à la carte prices.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [{ text: 'Sushi is eaten with soy sauce.', source: R + 'B533942296/' }], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-10-1 GINZA SIX 13F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目10番1号 (go) 64m (large complex); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536102310/'],
    price_note: 'Sashimi price from a September 2026 review.', last_checked: TODAY, items: [
      it('刺身の盛り合わせ', '', 'Sashimi platter: chūtoro, akagai, hokkigai, tsubugai (per person)', '¥9,000', 'À la carte', 'ask', 'no', 'September 2026.', 'sashimi'),
      it('季節のコース', '', 'Seasonal sushi course', '', 'Courses', 'ask', 'no', '', 'course'),
    ] }, {
    cuisine: '鮪の仲卸の江戸前鮨・天然本鮪、季節のコースかアラカルト・カウンターと半個室・1万〜3万円以上',
    neighborhood: 'GINZA SIX 13F、銀座六丁目。銀座駅から地下通路で直結',
    gf_detail: '要確認。醤油をつけて食べる江戸前鮨と季節の和食で、小麦不使用の醤油があるかは書かれていません。',
    vegan_detail: 'ヴィーガンではありません。鮪や貝の鮨です。',
    notes: '[鮨・豊洲の鮪の仲卸、GINZA SIX] GINZA SIX 13階、天然本鮪専門の豊洲の老舗仲卸の直営の30席(カウンター2つ、テーブル、半個室)の鮨店。江戸前鮨と季節の和食を、コースかアラカルトで。カウンターの客は職人の丁寧な仕事と気さくさを称えますが、半個室のコースは提供が早く、銀座の鮨屋より気軽で、醤油をつけて食べるスタイルだったという声も。アラカルトの値段には注意で、1人9,000円の刺身盛り(中トロ、赤貝、ホッキ貝、つぶ貝)などで2人6万円を超えたという例も。',
  });
}

// ================================================================ ヤマガタ サンダンデロ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13089733/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_yamagata_san_dan_delo_ginza1', name: 'ヤマガタ サンダンデロ (YAMAGATA San-Dan-Delo)', category: 'OMNI',
    lat: 35.674622, lng: 139.767034,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses of Yamagata vegetables, seafood and meat include signature pastas (Okuda’s "yuderon" method, sweetfish pasta); no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: Yamagata meat and seafood, sweetfish pasta; vegetables feature heavily.',
    hours_raw: 'Tue–Sun 11:30–15:00 and 18:00–22:00 (food L.O. 20:00); closed Mondays (open on holidays) and over New Year (Tabelog).',
    hours: { 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme, Ginza First Five Bldg 2F — near Ginza-itchōme Stn',
    cuisine: 'Al-chè-cciano’s Ginza outpost · Yamagata produce from Shōnai · Okuda’s "yuderon" pasta · many non-alcoholic cocktails · since 2009', cuisine_type: 'other',
    website: 'https://sandandelo.theshop.jp/', gmaps: gm('ヤマガタ サンダンデロ 銀座ファーストファイブビル'), menu_url: null,
    notes: "[Italian · Yamagata's Al-chè-cciano in Ginza] A 32-seat Italian on a second floor in Ginza 1-chōme, open since 2009 as the Ginza branch of chef Masayuki Okuda's Al-chè-cciano. It celebrates Shōnai seafood and Yamagata's vegetables, fruit and meat in gently seasoned Italian dishes. The pasta follows Okuda's researched 'yuderon' boiling method; a sweetfish pasta keeps its bitter edge. October 2026 diners praised the parade of hard-to-find Yamagata produce. There are many non-alcoholic cocktails, and weekends fill at opening, so book. About ¥4,000–5,000 at lunch and ¥10,000–30,000 at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 30 April 2009 (Tabelog)', background: 'Branch of Al-chè-cciano (Yamagata), under chef Masayuki Okuda (2026 review).', philosophy: 'Harmony of Yamagata ingredients (Tabelog listing).', specialty: '"Yuderon" pasta.',
      anecdotes: [
        { text: '"I was particularly impressed by the pasta, which is scientifically analyzed and researched through a method called \'yuderon.\'" — September 2026.', source: R + 'B536223264/' },
        { text: '"The sweetfish pasta skillfully highlights its bitterness… On weekends, the restaurant fills up quickly right at opening time." — October 2026.', source: R + 'B537280177/' },
      ],
      japanese_sources_summary: '食べログ: ヤマガタ サンダンデロ、銀座1-5-10 銀座ファーストファイブビル2F、32席、火〜日11:30〜15:00・18:00〜22:00、月休(祝日は営業)・年末年始休、2009年4月30日開店、公式サイト sandandelo.theshop.jp。店の紹介: 山形の Al-chè-cciano(英文の店の紹介では Arkecciano)の銀座店、庄内の海の幸と山形の山の幸、生産者の野菜と果物。2026年の口コミ: Okuda シェフ(英文表記)の優しい味、yuderon(英文表記)の研究によるパスタ、鮎のパスタ、ノンアルコールのカクテルが豊富、山形の野菜と肉、週末は開店で満席、予約必須。',
      confidence: 'medium', sources: [TB, R + 'B536223264/', R + 'B537280177/', R + 'B537691360/', R + 'B537253556/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book weekends; non-alcoholic cocktails.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-5-10 銀座ファーストファイブビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目5番10号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536223264/', R + 'B537280177/'],
    price_note: 'No prices captured; Tabelog budget ¥4,000–5,000 lunch, ¥10,000–15,000 dinner.', last_checked: TODAY, items: [
      it('鮎のパスタ', 'ayu no pasuta', 'Sweetfish pasta', '', 'Pasta', 'no', 'no', 'October 2026.', 'ayu_pasta'),
      it('山形の季節のコース', '', 'Seasonal Yamagata-produce course', '', 'Courses', 'ask', 'no', '', 'course'),
    ] }, {
    cuisine: 'Al-chè-cciano の銀座店・庄内の山形の食材・Okuda シェフの yuderon のパスタ・ノンアルコールカクテル豊富・2009年から',
    neighborhood: '銀座一丁目、銀座ファーストファイブビル2F。銀座一丁目駅の近く',
    gf_detail: '要確認。山形の野菜、魚介、肉のコースに、名物のパスタ(yuderon の茹で方、鮎のパスタ)も。グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。山形の肉と魚介、鮎のパスタ。野菜はふんだんに使われます。',
    notes: '[イタリアン・山形の Al-chè-cciano を銀座で] 銀座一丁目のビル2階、2009年開店の32席のイタリアンで、Masayuki Okuda シェフの「Al-chè-cciano」の銀座店。庄内の海の幸と山形の野菜、果物、肉を優しい味のイタリアンで。パスタは Okuda シェフが研究した yuderon(英文の口コミの表記)の茹で方で、鮎のパスタはほろ苦さを生かした一皿。2026年10月の客は、なかなか手に入らない山形の食材の数々を絶賛。ノンアルコールのカクテルも豊富で、週末は開店とともに満席になるので予約を。昼は4,000〜5,000円、夜は1万〜3万円ほど。',
  });
}

// ================================================================ Arbre village
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13007695/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '15:00'], ['17:00', '20:00']);
  put({
    id: 'tokyo_arbre_village_kimuraya_ginza4', name: 'Arbre village (アーブルヴィラージュ)', category: 'OMNI',
    lat: 35.671765, lng: 139.765178,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the meal is built around baskets of Ginza Kimuraya bread; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and meat courses.',
    hours_raw: 'Daily 11:00–15:00 (L.O. 14:00) and 17:00–20:00 (L.O. 18:00); closed 31 Dec and 1 Jan; course only at present, no à la carte (Tabelog). Reservations required.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Kimuraya Bldg 4F, Ginza 4-chōme on Chūō-dōri — Ginza Stn A9, 0 min',
    cuisine: 'French on the 4th floor of Ginza Kimuraya (formerly Restaurant Kimuraya) · appetizer, fish, meat, dessert · two baskets of Kimuraya bread, leftovers to take home', cuisine_type: 'french',
    website: 'http://www.ginzakimuraya.jp', gmaps: gm('Arbre village 銀座木村家 4F'), menu_url: null,
    notes: "[French · above Ginza Kimuraya's bakery] A calm, well-spaced 32-seat French restaurant on the fourth floor of the Ginza Kimuraya building, formerly Restaurant Kimuraya. Big windows look down on Chūō-dōri. The chef once led the kitchen at the now-closed Maxim's de Paris in Ginza. The course runs appetizer, fish, meat and dessert, with two baskets of about four breads from the Kimuraya bakery below (famous for anpan, but the baguettes shine too). Takeaway bags are given for leftover bread, which used to be unlimited. Reservations are required. To reach the lift you walk through the busy shop, so try the second-floor entrance. About ¥6,000–8,000 at lunch.",
    chef_bio: { chef_name: null, roles: ['chef'], origin: 'Former Restaurant Kimuraya (Tabelog); Ginza Kimuraya bakery building', background: 'Chef formerly led the kitchen at Maxim’s de Paris (Tabelog listing), unnamed; Kimuraya company restaurant.', philosophy: null, specialty: 'French courses with Kimuraya bread.',
      anecdotes: [
        { text: '"The course includes appetizers, fish, meat, and dessert, along with two baskets of assorted breads from Kimuraya… I asked for a takeout bag." — October 2026.', source: R + 'B537840908/' },
        { text: '"It seems that the bread system has changed from before. I remember it being all-you-can-eat previously, but this time, we were served about four types of bread in a basket." — July 2026.', source: R + 'B486302062/' },
      ],
      japanese_sources_summary: '食べログ: Arbre village(アーブルヴィラージュ、旧店名 レストラン木村家)、銀座4-5-7 銀座木村家4F、銀座駅A9出口すぐ、32席(テーブルのみ)、毎日11:00〜15:00・17:00〜20:00、12月31日・1月1日休、現在はコースのみでアラカルトなし、公式サイト ginzakimuraya.jp。店の紹介: 今はなき「マキシム・ド・パリ」で料理長を務めたシェフのフレンチ、銀座木村家の自家製パン、中央通りを見下ろす。2026年の口コミ: 前菜・魚・肉・デザートのコース、木村家のパン2かご(約4種)、残りは持ち帰り袋、以前は食べ放題、4階は要予約、入口から店内を通ってエレベーターへ、窓際の席から銀座を見下ろす、昼6,000〜8,000円。',
      confidence: 'medium', sources: [TB, R + 'B537840908/', R + 'B486302062/', R + 'B521681205/', R + 'B523416480/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservations required; enter via the bakery.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-5-7 銀座木村家 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目5番7号 (go) 17m; 107 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537840908/'],
    price_note: 'No prices captured; reviewers spend ¥6,000–8,000 at lunch.', last_checked: TODAY, items: [
      it('コース', 'koosu', 'Course: appetizer, fish, meat, dessert, with Kimuraya bread baskets', '', 'Courses', 'no', 'no', 'October 2026.', 'course'),
    ] }, {
    cuisine: '銀座木村家の4階のフレンチ(旧レストラン木村家)・前菜、魚、肉、デザート・木村家のパン2かご、残りは持ち帰り',
    neighborhood: '銀座木村家4F、中央通り沿いの銀座四丁目。銀座駅A9出口すぐ',
    gf_detail: '実際上グルテンフリーではありません。銀座木村家のパンのかごが食事の中心で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。魚と肉のコースです。',
    notes: '[フレンチ・銀座木村家のパン屋の上] 銀座木村家ビルの4階、旧「レストラン木村家」の、席の間隔が広い落ち着いた32席のフレンチ。大きな窓から中央通りを見下ろせます。シェフは今はなき「マキシム・ド・パリ」で料理長を務めた人。コースは前菜、魚、肉、デザートで、階下のパン屋の約4種のパンが2かご(あんパンで有名ですが、バゲットなども絶品)。残ったパンは持ち帰り袋に入れてくれます(以前は食べ放題でした)。要予約。エレベーターへはにぎやかな店内を通るので、2階の入口からがおすすめ。昼は6,000〜8,000円ほど。',
  });
}

save();
