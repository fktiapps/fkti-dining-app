// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 27.
//   + All Day Dining & Lounge Bar OPEN (DoubleTree by Hilton Kyoto Higashiyama's own restaurant; core list)
//   + 割烹 吉膳 Kappou Yoshizen (counter kappo near Kodaiji, 27 years; core list)
//   + 夷川 燕楽 Ebisugawa Enraku (oden izakaya in a former furniture shop on Ebisugawa; notable list)
//   + キャトルセゾン quatre saison (bakery on Marutamachi by Kumano Shrine; notable list)
//   Picked 2026-11-05 after batch 26. `queue.mjs kyoto-missed next core 200`: OPEN 26039917, 割烹 吉膳 26000269.
//   `next notable 200`: 夷川 燕楽 26002693, キャトルセゾン 26003815. Same-name check first, same brand or operator only:
//   OPEN is the hotel's own restaurant (chain-hotel own brand, drafted per the brief; ダブルツリーbyヒルトン 京都駅 26041158 is
//   another hotel, not in data); 夷川 燕楽 shares its name with 萬 燕楽 26001373 in Gion (no source links the two; 2 at most,
//   neither in data); no other 吉膳 or キャトルセゾン in our crawls. None of the four is in data/kyoto.json: grep by name and
//   address (本町1-45, 鷲尾町503, 夷川通麩屋町, 東丸太町39) found none — 鷲尾町503 also holds kyoto_kodaiji_tantora (503-6).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-27');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ All Day Dining & Lounge Bar OPEN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039917/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['07:00', '10:00'], ['11:30', '16:00'], ['17:00', '23:00']); const WE = day(['06:30', '10:00'], ['11:30', '16:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_open_doubletree_higashiyama', name: 'All Day Dining & Lounge Bar OPEN (DoubleTree by Hilton Kyoto Higashiyama)', category: 'OMNI',
    lat: 34.995148, lng: 135.769630, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An international hotel menu — breakfast, lunch sets, afternoon tea with sandwiches and scones, Western courses with breadcrumb-crusted fish and bread — alongside Japanese set meals; no gluten information (Tabelog; 2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fruit, congee, a yuba set meal and warabi mochi appear, but most dishes include meat, fish, egg or dairy; no vegan information (2025–2026 reviews).',
    hours_raw: 'Daily: breakfast 7:00–10:00 on weekdays and 6:30–10:00 at weekends and holidays (last order 9:45); lunch 11:30–14:30; café 14:30–16:00 (last order 15:30); dinner 17:00–22:00 (last order 21:30); bar 11:30–23:00 (last order 22:30); open to non-guests; hours may vary over New Year (Tabelog). Reservations accepted (Tabelog). 13% service charge (Tabelog original サービス料13%); a grilled-salmon set was ¥2,400 including tax and service (April 2025). 84 seats: 50 in the restaurant, 8 at the bar counter, 26 in the lounge; non-smoking, smoking area on B1 (Tabelog). Cards (Tabelog). In the lobby of DoubleTree by Hilton Kyoto Higashiyama; 1 min walk from Kiyomizu-Gojo Stn exit 2 (Keihan) (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hotel lobby by Kiyomizu-Gojo Stn — 1 min walk',
    cuisine: 'All-day hotel dining of genre-free, internationally inspired dishes with Kyoto touches, by a chef with 28 years\' experience (Tabelog) · e.g. Tanba chicken with seasonal vegetables and romesco on shio-koji, a lunch with one drink (Tabelog); Mediterranean octopus salad, ocean trout crusted with Kujo-negi breadcrumbs with lime cream and polenta (June 2026); a spring Western course with cherry-blossom touches (May 2026) · Japanese set meals: yuba gozen (January 2025), grilled salmon set ¥2,400 incl. tax and service (April 2025) · afternoon tea in a stand of glass boxes — yuba-wrapped teriyaki chicken sandwich, egg sandwich, matcha and black-bean scone (April 2025) · coffee ¥800 (January 2026); shaved ice in summer (July 2024); congee, fruit, Japanese tea and warabi mochi (June 2026) · seasonal fairs, e.g. Korean royal cuisine supervised by chef Sung Hoon Ahn (October–December 2024) · about ¥2,000–5,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('OPEN ダブルツリーbyヒルトン京都東山'), menu_url: null,
    notes: '[Hotel all-day dining · Kiyomizu-Gojo, open to all from breakfast] The DoubleTree by Hilton Kyoto Higashiyama\'s lobby restaurant, a calm Japanese-styled room open to non-guests from breakfast to a late bar: international plates with Kyoto touches (Kujo-negi crusted trout, Tanba chicken with romesco), Japanese sets such as yuba gozen, and an afternoon tea in glass boxes. A minute from Kiyomizu-Gojo station, popular with visitors from abroad. 13% service. Open daily.',
    chef_bio: { chef_name: 'Agatha Phoebic Tobias (as given on Tabelog)', roles: ['Chef', 'Hotel kitchen and service staff'], origin: null,
      background: 'Per Tabelog: the all-day dining restaurant of DoubleTree by Hilton Kyoto Higashiyama, serving genre-free dishes inspired by world cuisines and by Kyoto, open to all guests whether staying or not; Tabelog names the chef as "Agatha Phoebic Tobias with 28 Years of Chef Experience". Reviewers mention seasonal fairs (a Korean royal-cuisine fair supervised by chef Sung Hoon Ahn, October–December 2024) and many guests from Western countries (June 2026).',
      philosophy: '"Providing cuisine unbound by genre" (Tabelog).', specialty: 'Afternoon tea; Kyoto-inflected Western plates.',
      anecdotes: [
        { text: 'A January 2026 visitor, a little early for tea time, was welcomed in and took a corner seat with a view of cranes — ¥800 coffee "worth it".', source: R + 'B521549544/' },
        { text: '"I arrived at my reservation time, but I had to wait over 15 minutes because the previous guests hadn\'t finished, which was disappointing." — September 2025.', source: R + 'B515605313/' },
        { text: '"Since this is Kyoto, there were quite a few tourists from Western countries." — June 2026, noting fruit and congee on the menu.', source: R + 'B530068860/' },
      ],
      japanese_sources_summary: '食べログ: 洋食・肉料理・カフェ、東山区本町1-45 ダブルツリーbyヒルトン京都東山 ロビー、京阪清水五条駅2番出口から徒歩1分、毎日、朝食 平日7:00〜10:00・土日祝6:30〜10:00、ランチ11:30〜14:30、カフェ14:30〜16:00、ディナー17:00〜22:00、バー11:30〜23:00、宿泊客以外も利用可、予約可、サービス料13%、84席 (店内50、バーカウンター8、ラウンジ26)、禁煙 (B1に喫煙所)、カード可、ジャンルにとらわれない料理、料理人歴28年のシェフ、Tanba の鶏と季節野菜のロメスコソースと塩麹のランチ。口コミ (2024年7月〜2026年6月、英語): 地中海風のたこのサラダ、九条ねぎのパン粉焼きのオーシャントラウト、湯葉御膳、焼き鮭の定食2,400円 (税・サ込み)、ガラスの箱のアフタヌーンティー (湯葉巻きの照り焼きチキンサンド、卵サンド、抹茶と黒豆のスコーン)、コーヒー800円、かき氷、お粥、わらび餅、韓国宮廷料理フェア (2024年)、欧米の客が多い、予約時間に15分以上待ったとの声。',
      confidence: 'medium', sources: [TB, R + 'B481950294/', R + 'B488469143/', R + 'B495565773/', R + 'B498762489/', R + 'B504369201/', R + 'B508078335/', R + 'B515605313/', R + 'B521549544/', R + 'B527633106/', R + 'B530068860/'] },
    cultural_comfort: { level: 'english', note: 'International hotel restaurant, open to non-guests; 13% service; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区本町1-45 ダブルツリーbyヒルトン京都東山 ロビー',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (34.995148, 135.769630); cross-checked: GSI 京都府京都市東山区本町一丁目45番地 (lot) 18 m; kyoto_benkei_higashiyama is 68 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504369201/', R + 'B521549544/'],
    price_note: 'Prices from April 2025 and January 2026 reviews; 13% service.', last_checked: TODAY, items: [
      it('', '', 'Grilled salmon set meal', '¥2,400', 'Japanese sets', 'ask', 'no', 'April 2025, incl. tax and service.', 'salmon_set'),
      it('', '', 'Afternoon tea', '', 'Café', 'no', 'no', '', 'afternoon_tea'),
      it('', '', 'Coffee', '¥800', 'Café', 'ask', 'ask', 'January 2026.', 'coffee'),
    ] }, {
    cuisine: '世界の料理に京都を織り込んだジャンルにとらわれない料理のホテルのオールデイダイニング。料理人歴28年のシェフ (食べログ)・例: Tanba の鶏と季節野菜のロメスコソースと塩麹、ドリンク付きのランチ (食べログ)、地中海風のたこのサラダ、九条ねぎのパン粉をまとったオーシャントラウトのライムクリームとポレンタ (2026年6月)、桜を添えた春の洋食コース (2026年5月)・和の定食: 湯葉御膳 (2025年1月)、焼き鮭の定食2,400円 (税・サ込み、2025年4月)・ガラスの箱のスタンドのアフタヌーンティー: 湯葉巻きの照り焼きチキンサンド、卵サンド、抹茶と黒豆のスコーン (2025年4月)・コーヒー800円 (2026年1月)、夏のかき氷 (2024年7月)、お粥、フルーツ、日本茶とわらび餅 (2026年6月)・韓国宮廷料理フェアなど季節のフェア (2024年10〜12月)・2,000〜5,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '清水五条駅すぐのホテルのロビー。駅から徒歩1分',
    gf_detail: '要確認。朝食、ランチ、サンドイッチやスコーンのアフタヌーンティー、パン粉焼きの魚やパンの洋食コースと、和の定食。グルテンの情報はない (食べログ、2024〜2026年の口コミ)。',
    vegan_detail: '要確認。フルーツ、お粥、湯葉御膳、わらび餅はあるが、多くの料理に肉、魚、卵、乳製品を使う。ヴィーガンの情報はない (2025〜2026年の口コミ)。',
    notes: '[ホテルのオールデイダイニング・清水五条、朝から誰でも] ダブルツリーbyヒルトン京都東山のロビーのレストラン。和の落ち着いた空間で、宿泊客以外も朝食から夜のバーまで利用できる: 京都を添えた各国の料理 (九条ねぎのパン粉焼きのトラウト、Tanba の鶏のロメスコ)、湯葉御膳などの和の定食、ガラスの箱のアフタヌーンティー。清水五条駅から1分で、海外の客が多い。サービス料13%。無休。',
  });
}

// ================================================================ 割烹 吉膳
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000269/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kappou_yoshizen', name: '割烹 吉膳 (Kappou Yoshizen)', category: 'OMNI',
    lat: 35.001571, lng: 135.779346, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal kappo courses with dashi, white miso, soy-based sauces and grated-daikon dishes; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-focused courses of sea urchin, nodoguro, yellowtail, fugu and calf\'s liver, on dashi (2024–2026 reviews).',
    hours_raw: 'Daily 12:00–14:30 (food last order 13:00; lunch by reservation at least two days ahead) and 17:00–22:00 (food last order 20:00); open year-round (Tabelog). Reservation only (Tabelog). Overseas guests can book the private room only if someone proficient in Japanese comes, and the shop then replies by phone (Tabelog). Courses, e.g. ¥17,000 (May 2024); bills about ¥15,000–30,000 (Tabelog; 2024–2026 reviews). 18 seats: a 10-seat hinoki counter and a retro-modern private room upstairs for up to 8; designated smoking area (Tabelog). Cards and QR (Tabelog). A machiya on the lane east of Shimogawara, by the north gate of Kodaiji; 3 min walk from Yasaka Shrine and Kodaiji, 10 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By Kodaiji\'s north gate, south of Yasaka Shrine — 10 min walk from Gion-Shijo Stn',
    cuisine: 'Counter kappo of seasonal creative dishes for 27 years, with the owner sourcing fish and vegetables from across Japan (Tabelog) · courses, e.g. ¥17,000 starting with sea urchin and cabbage and junsai (May 2024) · e.g. canola flowers with sea urchin, squid with sea cucumber, calf\'s liver, Kaga lotus root with shrimp konjac in grated daikon, a fugu-brain sauce, nodoguro, steamed sticky rice with goby, Horikawa burdock, buri daikon (January 2024); swordfish, sea-urchin sashimi, white-miso soup (August 2026) · chilled sake such as Somai (November 2024) · about ¥15,000–30,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('割烹 吉膳 高台寺'), menu_url: null,
    notes: '[Kappo · by Kodaiji\'s north gate, an engineer turned cook] A machiya counter on a quiet lane between Yasaka Shrine and Kodaiji, where a former engineer who says "cooking is logical" has served seasonal creative kappo for 27 years, sourcing fish and vegetables from across Japan: sea urchin with canola flowers, nodoguro, fugu-brain sauce, buri daikon, white-miso soup. Courses about ¥15,000–20,000. Explanations in English at the counter; the upstairs private room needs a Japanese speaker for overseas guests. Lunch by booking two days ahead.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), a former engineer', 'Head chef'], origin: null,
      background: 'Per Tabelog: serving creative dishes that reflect the seasons for 27 years; the owner, a former engineer who found a calling in cooking ("Cooking is logical"), sources seasonal seafood and vegetables from across Japan. Reviewers mention the owner and the head chef (November 2024), a single chef preparing each dish with care (August 2026), and explanations of ingredients in English (January 2025).',
      philosophy: '"Cooking is logical" (Tabelog).', specialty: 'Seasonal fish course; white-miso soup.',
      anecdotes: [
        { text: 'A January 2025 visitor from abroad found the chef explained the ingredients thoroughly in English — and received a discount at the end of the meal.', source: R + 'B500268086/' },
        { text: 'An August 2026 diner, on a humid night eased by a passing shower, watched a single chef prepare and plate each dish with care.', source: R + 'B534837398/' },
        { text: '"Although the selection of drinks is limited, the chilled sake is exceptionally delicious" — November 2024, recommending Somai.', source: R + 'B497075492/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区祇園下河原高台寺北門前通東入ル鷲尾町503-14、祇園四条駅から徒歩10分、八坂神社・高台寺から徒歩3分、毎日 12:00〜14:30 (料理L.O.13:00、昼は2日前までに予約)・17:00〜22:00 (料理L.O.20:00)、無休、完全予約制、海外の客が個室を希望する場合は日本語の堪能な人がいれば可能で電話で対応、18席 (檜のカウンター10、2階のレトロモダンな個室8名まで)、分煙、カード・QR 可、季節を映す創作料理を27年、「料理は理論」元エンジニアの店主、店主が全国から旬の魚介と野菜を仕入れる。口コミ (2024年1月〜2026年8月、英語): 17,000円のコース (うにとキャベツ、じゅんさい)、菜の花とうに、いかとなまこ、仔牛のレバー、加賀れんこんと海老しんじょうのおろし、ふぐを使ったソース、のどぐろ、ハゼの蒸しおこわ、堀川ごぼう、ぶり大根、かじきの焼き物、うにのお造り、白味噌のお椀、日本酒「Somai」、英語で食材の説明、店主と料理長。',
      confidence: 'medium', sources: [TB, R + 'B455296048/', R + 'B475484255/', R + 'B478859293/', R + 'B485090612/', R + 'B485404665/', R + 'B497075492/', R + 'B500056421/', R + 'B500268086/', R + 'B524792546/', R + 'B534837398/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English explanations at the counter (January 2025); overseas guests need a Japanese speaker to book the private room (Tabelog); reservation only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園下河原高台寺北門前通東入ル鷲尾町503-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.001571, 135.779346); cross-checked: GSI 京都府京都市東山区鷲尾町503番地 (lot) 21 m; kyoto_kodaiji_tantora (503-6) is 27 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485090612/'],
    price_note: 'Course price from a May 2024 review; bills about ¥15,000–30,000.', last_checked: TODAY, items: [
      it('', '', 'Seasonal kappo course', '¥17,000', 'Course', 'ask', 'no', 'May 2024.', 'course_17000'),
    ] }, {
    cuisine: '季節を映す創作の割烹を27年、店主が全国から魚と野菜を仕入れるカウンター (食べログ)・例: うにとキャベツ、じゅんさいから始まる17,000円のコース (2024年5月)・例: 菜の花とうに、いかとなまこ、仔牛のレバー、加賀れんこんと海老しんじょうのおろし、ふぐを使ったソース、のどぐろ、ハゼの蒸しおこわ、堀川ごぼう、ぶり大根 (2024年1月)、かじき、うにのお造り、白味噌のお椀 (2026年8月)・冷酒「Somai」など (2024年11月)・1万5千〜3万円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '八坂神社の南、高台寺北門の近く。祇園四条駅から徒歩10分',
    gf_detail: '要確認。だし、白味噌、醤油系のたれ、おろしの料理のある季節の割烹コース。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。うに、のどぐろ、ぶり、ふぐ、仔牛のレバーなど、だしの魚中心のコース (2024〜2026年の口コミ)。',
    notes: '[割烹・高台寺北門、元エンジニアの料理人] 八坂神社と高台寺の間の静かな路地の町家のカウンター。「料理は理論」という元エンジニアの店主が27年、全国から魚と野菜を仕入れて季節の創作割烹を出す: 菜の花とうに、のどぐろ、ふぐを使ったソース、ぶり大根、白味噌のお椀。コースは1万5千〜2万円ほど。カウンターでは英語で説明も。2階の個室は海外の客なら日本語の話せる人が必要。昼は2日前までに予約を。',
  });
}

// ================================================================ 夷川 燕楽
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002693/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:00', '22:30']); const FS = day(['17:00', '23:00']);
  put({
    id: 'kyoto_ebisugawa_enraku', name: '夷川 燕楽 (Ebisugawa Enraku)', category: 'OMNI',
    lat: 35.014983, lng: 135.765309, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto oden in soy-based dashi with fish cakes, plus tempura, agedashi tofu and chilled udon; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden simmered in dashi with beef tendon and egg; sashimi and grilled fish (2026 reviews).',
    hours_raw: 'Tuesday to Thursday and Sunday 17:00–22:30 (food last order 21:30); Friday and Saturday 17:00–23:00 (food last order 22:00); closed Monday and two Tuesdays a month (Tabelog). Reservations accepted (Tabelog). No table charge (Tabelog original チャージ料なし). 65 seats: an 8-seat counter by the open kitchen, private rooms on the ground floor (one with a sunken kotatsu), and a tatami hall for up to 40 upstairs; non-smoking, smoking area outside; projector, free Wi-Fi (Tabelog). Cards (Tabelog). A former furniture shop on Ebisugawa-dori west of Fuyacho, south of the Imperial Palace; 5 min walk from Kyoto Shiyakusho-mae Stn (Tabelog; August 2026).',
    hours: { 1: WK, 2: WK, 3: WK, 4: FS, 5: FS, 6: WK }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ebisugawa-dori west of Fuyacho — 5 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Oden izakaya between izakaya and kaiseki, with a wide Kyoto menu (2026 reviews) · Kyoto-style oden: daikon, beef tendon, egg (July 2026) · kombu-cured sea bream, sashimi, agedashi tofu, yuba (June–August 2026) · tempura of fig with sesame sauce and of corn (July 2026) · grilled sweetfish, a corn grilled rice ball to finish (August 2026); Kamo eggplant with sauce and chilled udon in a nine-dish course (July 2026); yellowtail ajillo (August 2026) · local sake and white wine (2026 reviews) · about ¥3,000–6,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('夷川 燕楽 京都'), menu_url: null,
    notes: '[Oden · Ebisugawa south of the Palace, a furniture shop turned izakaya] A big townhouse that was once a furniture shop, now an oden izakaya with a red-toned counter by the open kitchen, private rooms and a tatami hall upstairs. Kyoto oden is the draw — daikon soaked through, beef tendon, egg — with fig and corn tempura, kombu-cured sea bream, grilled sweetfish and a yellowtail ajillo; about ¥4,000 a head. Taxi drivers know it. No table charge. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Reviewers in 2026 describe a well-known local spot (a taxi driver recognised it, July 2026), a renovated former furniture shop with a red-themed interior, an open-kitchen counter, private rooms and a second-floor tatami hall, and a menu centred on oden with seasonal dishes. One July 2026 diner wished the course dishes had come with explanations.',
      philosophy: null, specialty: 'Kyoto oden; fig tempura.',
      anecdotes: [
        { text: 'A July 2026 traveller told a taxi driver the destination and found the driver knew it at once.', source: R + 'B532318264/' },
        { text: 'A July 2026 diner had never tried fig tempura before and was surprised how good it was with the oden.', source: R + 'B534763441/' },
        { text: '"If I had to nitpick, I would say it was a bit disappointing that all the dishes were served without any explanation." — July 2026.', source: R + 'B532630247/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・おでん・日本料理、中京区夷川通麩屋町西入ル北側、市役所前駅から徒歩5分、火・水・木・日 17:00〜22:30 (料理L.O.21:30)、金・土 17:00〜23:00 (料理L.O.22:00)、月曜と月2回の火曜休み、予約可、チャージ料なし、65席 (カウンター8、1階に個室、2階に最大40名の座敷)、掘りごたつの個室、禁煙 (外に喫煙所)、プロジェクター、Wi-Fi、カード可。口コミ (2026年6月〜8月、英語): 家具屋を改装、赤い内装、京風おでん (大根、牛すじ、卵)、鯛の昆布締め、お造り、揚げ出し豆腐、湯葉、無花果の天ぷらの胡麻だれ、とうもろこしの天ぷら、鮎の塩焼き、とうもろこしの焼きおにぎり、賀茂茄子のあんかけ、冷やしうどん、ぶりのアヒージョ、地酒、1人4,000円ほど、タクシーの運転手も知っている、料理の説明がなかったとの声。',
      confidence: 'medium', sources: [TB, R + 'B529621747/', R + 'B531173831/', R + 'B532318264/', R + 'B532630247/', R + 'B532807476/', R + 'B533489055/', R + 'B533694031/', R + 'B533957579/', R + 'B534763441/', R + 'B535841328/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter by the open kitchen, private rooms upstairs; no table charge; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区夷川通麩屋町西入ル北側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.014983, 135.765309); the address has no town or lot (夷川通麩屋町西入ル北側) and GSI matches only the ward, so loc_precise false; kyoto_hitsuji_donuts is 33 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532318264/', R + 'B531173831/'],
    price_note: 'No menu prices read; about ¥4,000 a head (July 2026).', last_checked: TODAY, items: [
      it('', '', 'Oden (daikon, beef tendon, egg)', '', 'Oden', 'no', 'no', '', 'oden'),
      it('', '', 'Fig tempura with sesame sauce', '', 'Tempura', 'no', 'ask', 'July 2026.', 'ichijiku_ten'),
      it('', '', 'Kombu-cured sea bream', '', 'Sashimi', 'ask', 'no', 'June 2026.', 'tai_kobujime'),
    ] }, {
    cuisine: '居酒屋と懐石の中間のおでんの居酒屋、京都らしい料理も豊富 (2026年の口コミ)・京風のおでん: 大根、牛すじ、卵 (2026年7月)・鯛の昆布締め、お造り、揚げ出し豆腐、湯葉 (2026年6月〜8月)・無花果の天ぷらの胡麻だれ、とうもろこしの天ぷら (2026年7月)・鮎の塩焼き、とうもろこしの焼きおにぎりの締め (2026年8月)、9品のコースの賀茂茄子のあんかけと冷やしうどん (2026年7月)、ぶりのアヒージョ (2026年8月)・地酒と白ワイン (2026年の口コミ)・3,000〜6,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '麩屋町の西、夷川通。市役所前駅から徒歩5分',
    gf_detail: '要確認。醤油系のだしの京風おでんと練り物、天ぷら、揚げ出し豆腐、冷やしうどん。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしで煮る牛すじや卵のおでん、お造り、焼き魚 (2026年の口コミ)。',
    notes: '[おでん・御所の南の夷川通、家具屋だった居酒屋] 家具屋を改装した大きな町家のおでんの居酒屋。赤を基調にした内装、オープンキッチンのカウンター、個室、2階に座敷。名物は京風のおでん (芯まで染みた大根、牛すじ、卵) で、無花果やとうもろこしの天ぷら、鯛の昆布締め、鮎の塩焼き、ぶりのアヒージョも。1人4,000円ほど。タクシーの運転手も知っている店。チャージなし。月曜休み。',
  });
}

// ================================================================ キャトルセゾン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26003815/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '19:00']);
  put({
    id: 'kyoto_quatre_saison_bakery', name: 'キャトルセゾン (quatre saison)', category: 'OMNI',
    lat: 35.017584, lng: 135.776604, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery of croissants, bagels, French-bread sandwiches, paninis and curry bread (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain hard breads may be plant-based, but croissants, cream buns, bagels with white chocolate and the meat sandwiches use butter, dairy, egg or meat; no ingredient information (2025–2026 reviews).',
    hours_raw: 'Tuesday to Saturday 7:00–19:00; closed Sunday and Monday; hours may change (Tabelog). Takeaway; a small shop that sells out by mid-afternoon (April–May 2026). Cash only — no cards, e-money or QR (Tabelog; May 2026). On Marutamachi-dori east of Kawabata, near Kumano Shrine; 5–8 min walk from Jingu-Marutamachi Stn (Tabelog; April 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Marutamachi east of Kawabata, near Kumano Shrine — 8 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Small bakery of seasonal breads, sweet and savoury, hard and soft (2025–2026 reviews) · Setoka croissant ¥350, fromage currants ¥310, strawberry croissant ¥410, cream-filled croissant, bacon and egg croissant (April–May 2026) · matcha and white-chocolate bagel, mentaiko French bread, anpan, chocolate melon bread (September–December 2025) · French-bread sandwiches, a large mixed sandwich, paninis, sausage chili dog with béchamel, vegetable curry with French bread, curry bread with meat (2025–2026 reviews) · cream buns with homemade custard, canelé, raisin oatmeal cookies (2026 reviews) · mostly under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('キャトルセゾン 丸太町 パン'), menu_url: null,
    notes: '[Bakery · Marutamachi by Kumano Shrine, open from 7] A small, calm bakery on Marutamachi near Kumano Shrine, open from 7 am, with seasonal breads both savoury and sweet: Setoka and strawberry croissants, a matcha and white-chocolate bagel, mentaiko French bread, paninis, a béchamel chili dog and custard cream buns, mostly ¥300–400 apiece. Go early — it sells out by mid-afternoon. Cash only. Closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Baker and counter staff (unnamed)'], origin: null,
      background: 'Reviewers describe a small, quiet shop named for the four seasons (November 2025), friendly staff (May 2026), local customers and visitors from abroad (December 2025; May 2026), and an older man baking while a woman runs the register (October 2026).',
      philosophy: null, specialty: 'Seasonal croissants; panini; bagels.',
      anecdotes: [
        { text: 'A December 2025 customer found the matcha and white-chocolate bagel "amazing when reheated, as the chocolate melted just right."', source: R + 'B518269066/' },
        { text: '"An older gentleman cooks while a woman manages the register" — October 2026, a regular who loves the paninis and the 7 am Saturday opening.', source: R + 'B537045314/' },
        { text: 'An April 2026 visitor arriving at 2 pm on a weekday found little left on the shelves.', source: R + 'B526636765/' },
      ],
      japanese_sources_summary: '食べログ: パン・ベーグル・サンドイッチ、左京区丸太町通川端東入ル東丸太町39-5、神宮丸太町駅から徒歩8分、熊野神社前のバス停、火〜土 7:00〜19:00、日・月休み、予約可、現金のみ、禁煙、テイクアウト、子ども可。口コミ (2025年9月〜2026年10月、英語): 店名はフランス語で「四季」、小さく落ち着いた店、せとかのクロワッサン350円、フロマージュカランツ310円、苺のクロワッサン410円、クリームのクロワッサン、ベーコンエッグのクロワッサン、抹茶とホワイトチョコのベーグル、明太フランス、あんぱん、チョコのメロンパン、バゲットのサンドイッチ、ミックスサンド、パニーニ、ソーセージのチリドッグ (ベシャメル)、野菜カレーとバゲット、肉入りのカレーパン、自家製カスタードのクリームパン、カヌレ、レーズンとオートミールのクッキー、午後は品薄、年配の男性が作り女性がレジ。',
      confidence: 'medium', sources: [TB, R + 'B188953587/', R + 'B513970019/', R + 'B518269066/', R + 'B526636765/', R + 'B527758734/', R + 'B528260647/', R + 'B528437772/', R + 'B528785385/', R + 'B529570631/', R + 'B537045314/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the breads; go early; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区丸太町通川端東入ル東丸太町39-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017584, 135.776604); cross-checked: GSI 京都府京都市左京区東丸太町39番地 (lot) 71 m; nearest Kyoto record 113 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526636765/'],
    price_note: 'Prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Setoka croissant', '¥350', 'Bread', 'no', 'no', 'April 2026.', 'setoka_croissant'),
      it('', '', 'Fromage currants', '¥310', 'Bread', 'no', 'no', 'April 2026.', 'fromage_currant'),
      it('', '', 'Strawberry croissant', '¥410', 'Bread', 'no', 'no', 'April 2026.', 'strawberry_croissant'),
    ] }, {
    cuisine: '甘いものも惣菜も、ハードもソフトもそろう季節のパンの小さな店 (2025〜2026年の口コミ)・せとかのクロワッサン350円、フロマージュカランツ310円、苺のクロワッサン410円、クリームのクロワッサン、ベーコンエッグのクロワッサン (2026年4月〜5月)・抹茶とホワイトチョコのベーグル、明太フランス、あんぱん、チョコのメロンパン (2025年9月〜12月)・バゲットのサンドイッチ、大きなミックスサンド、パニーニ、ベシャメルのソーセージのチリドッグ、野菜カレーとバゲット、肉入りのカレーパン (2025〜2026年の口コミ)・自家製カスタードのクリームパン、カヌレ、レーズンとオートミールのクッキー (2026年の口コミ)・多くは1,000円未満 (食べログ)',
    neighborhood: '川端の東の丸太町通、熊野神社の近く。神宮丸太町駅から徒歩8分',
    gf_detail: 'グルテンフリーではない。クロワッサン、ベーグル、バゲットのサンドイッチ、パニーニ、カレーパンの小麦のパン屋 (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。プレーンなハード系は植物性かもしれないが、クロワッサン、クリームパン、ホワイトチョコのベーグル、肉のサンドにはバター、乳、卵、肉を使う。原材料の情報はない (2025〜2026年の口コミ)。',
    notes: '[パン・熊野神社近くの丸太町通、朝7時から] 熊野神社近くの丸太町通の小さく落ち着いたパン屋。朝7時から、甘いものも惣菜も季節のパンが並ぶ: せとかや苺のクロワッサン、抹茶とホワイトチョコのベーグル、明太フランス、パニーニ、ベシャメルのチリドッグ、カスタードのクリームパンなど、多くは1個300〜400円。午後には品薄になるので早めに。現金のみ。日・月休み。',
  });
}

save();
