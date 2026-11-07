// Kyoto priority (kyoto-missed), worker osw13, batch 70 — lane: Tabelog id mod 6 = 0.
// Core: ALIARE, カタパン屋. Notable: せいろ料理 葵茶屋, 清水 京あみ.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-70');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26007186', 'chain: サンマルコ 京都伊勢丹店 is one of the European-style curry shops サンマルコ (founded 1983) in Kansai department stores — Hankyu Sanbangai, Takashimaya Osaka, Senboku, Sakai and Kyoto, Kintetsu, Matsuzakaya Nagoya, JR Nagoya Takashimaya, Kansai Airport; Gurunavi lists 20 shops. 5+ same-name = chain (Greg ruling 2026-11-05)');
skip('26006502', 'chain: 祇園辻利 京都駅八条口店 is one of at least five 祇園辻利 / 辻利 shops in the Kyoto crawl alone (祇園本店, 京都駅八条口, JR京都伊勢丹, 京都タワーサンド, 京都祇園店, plus 茶寮都路里); 5+ same-name = chain (Greg ruling 2026-11-05)');
skip('26007378', 'chain: グリルキャピタル東洋亭 近鉄店 is one of six グリルキャピタル東洋亭 shops in the Kyoto crawl alone (ポルタ, 近鉄, 高島屋, JR京都伊勢丹, DELI 京都伊勢丹, 丸太町); 5+ same-name = chain (Greg ruling 2026-11-05)');

// ================================================================ ALIARE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26027988/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'kyoto_aliare_mibu', name: 'アリアーレ (ALIARE)', category: 'OMNI',
    lat: 35.000192, lng: 135.7453, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made fresh pasta, lasagna, focaccia, pork cutlet (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and vegetable antipasti platters, seafood and meat dishes (2025–2026 reviews); a vegetable platter exists, but no vegan options are described.',
    hours_raw: 'Tabelog: Mon, Tue, Thu, Fri, Sat and holidays 17:00–23:30 (last orders food 22:30, drinks 23:00); closed Wednesday, Sunday and the 2nd and 4th Thursday (subject to change). Reviewers also had lunch sets (Pranzo, Bolognese set) in 2025–2026, and say lunch books up — check before going. Book: popular and hard to enter without a reservation (June 2026). 16 seats including a counter. Non-smoking; school-age children welcome; take-away; birthday plates. Cards (incl. UnionPay) and QR (PayPay, Alipay, WeChat Pay); no e-money. Opened 25 September 2016 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Mibu, near Mibu-dera — 8 min walk from Shijo-Omiya / Hankyu Omiya Stns',
    cuisine: 'A small neighbourhood trattoria with house-made pasta and Italian wines (Tabelog; 2025–2026 reviews) · signature hand-rolled tagliatelle Bolognese; a cutlet of sweet Kyoto pork (Tabelog) · generous meat and vegetable antipasti platters; carpaccio; Insalata Russa with herbs and anchovies; shine-muscat with mozzarella and yogurt (2025–2026 reviews) · pasta: linguine vongole bianco, shrimp-cream tagliatelle, tagliolini with lemon cream, penne gorgonzola, lasagna; lamb meatballs with porcini; sautéed swordfish (2025–2026 reviews) · lunch "Pranzo" sets with an appetizer plate and focaccia, about ¥1,500 (2025)',
    website: null, gmaps: gm('アリアーレ 壬生相合町'), menu_url: null,
    notes: '[Italian · Mibu, house-made pasta near Mibu-dera] A ten-year-old 16-seat trattoria in the backstreets near Mibu-dera, booked up by locals for heaped antipasti platters, hand-rolled tagliatelle Bolognese, a Kyoto-pork cutlet and a chef-picked bottle of Italian wine; lunch sets on some days. Gentle seasoning; good value. Book. Closed Wednesday and Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef-owner, not named in a source'], origin: null,
      background: 'Opened 25 September 2016 (Tabelog); a regular marked its tenth anniversary in September 2026 (June 2026 review). Reviewers describe a warm wooden room, an independent owner-chef, a family-run feel (September 2025), and nights handled smoothly by a single staff member (February 2026).',
      philosophy: null,
      specialty: 'Hand-rolled tagliatelle Bolognese.',
      anecdotes: [
        { text: 'February 2026: "I usually find Italian restaurants to be too salty or garlicky, but this place had such a gentle taste… they happened to be operating with just one staff member… everything was handled smoothly."', source: R + 'B522243971/' },
        { text: 'June 2026: "It\'s a popular spot, and it\'s quite difficult to get in without a reservation."', source: R + 'B464082575/' },
      ],
      japanese_sources_summary: '食べログ: ALIARE (アリアーレ)、イタリアン・パスタ・バル、中京区壬生相合町67-1、四条大宮・阪急大宮駅から徒歩8分、月火木金土祝 17:00〜23:30 (料理 L.O. 22:30、ドリンク L.O. 23:00)、水・日と第2・第4木曜休み、16席、カウンター、禁煙、小学生以上の子供可、持ち帰り、カード・QR可、電子マネー不可、2016年9月25日オープン、名物は自家製の手打ちタリアテッレのボロネーゼと京都ポークのカツ、イタリアワイン。口コミ (2025年3月〜2026年6月、英語): 肉と野菜の前菜の盛り合わせ、カルパッチョ、インサラータ・ルッサ、シャインマスカットとモッツァレラ、ボンゴレ・ビアンコ、海老のクリームのタリアテッレ、レモンクリームのタリオリーニ、ゴルゴンゾーラのペンネ、ラザニア、ラムのミートボールのポルチーニソース、メカジキのソテー、昼のプランツォのセット (約1,500円)、家族経営の雰囲気、やさしい味付け、予約なしでは入りにくい、10周年。',
      confidence: 'medium', sources: [TB, R + 'B464082575/', R + 'B502660955/', R + 'B504117237/', R + 'B507600004/', R + 'B509087671/', R + 'B511743615/', R + 'B513748132/', R + 'B515204851/', R + 'B516627451/', R + 'B522243971/', R + 'B525461610/', R + 'B531556849/'] },
    cultural_comfort: { level: 'japanese', note: 'Small local trattoria; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区壬生相合町67-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.000192, 135.745300); cross-checked: GSI 京都府京都市中京区壬生相合町67番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B511743615/'],
    price_note: 'Few prices in the sources; lunch about ¥1,500 (July 2025), dinner ¥4,000–8,000 a head (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Hand-rolled tagliatelle Bolognese', null, 'Pasta', 'no', 'no', 'Signature (Tabelog).', 'pasta'),
      it('', '', 'Kyoto pork cutlet', null, 'Meat', 'no', 'no', 'Tabelog.', 'katsu'),
      it('', '', 'Assorted antipasti platter', null, 'Antipasti', 'ask', 'no', '2025–2026 reviews.', 'antipasto'),
    ] }, {
    cuisine: '自家製パスタとイタリアワインの小さな町のトラットリア (食べログ、2025〜2026年の口コミ)・名物は手打ちタリアテッレのボロネーゼ、甘みのある京都ポークのカツ (食べログ)・たっぷりの肉と野菜の前菜の盛り合わせ、カルパッチョ、ハーブとアンチョビのインサラータ・ルッサ、シャインマスカットとモッツァレラのヨーグルトソース (2025〜2026年の口コミ)・パスタはボンゴレ・ビアンコ、海老のクリームのタリアテッレ、レモンクリームのタリオリーニ、ゴルゴンゾーラのペンネ、ラザニア。ポルチーニソースのラムのミートボール、メカジキのソテー (2025〜2026年の口コミ)・昼は前菜の皿とフォカッチャ付きの「プランツォ」のセットで約1,500円 (2025年)',
    neighborhood: '壬生、壬生寺の近く。四条大宮・阪急大宮駅から徒歩8分',
    gf_detail: 'グルテンフリーではない: 自家製の生パスタ、ラザニア、フォカッチャ、ポークのカツ (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 肉と野菜の前菜の盛り合わせ、魚介や肉の料理 (2025〜2026年の口コミ)。野菜の盛り合わせはあるが、ヴィーガンの対応は書かれていない。',
    notes: '[イタリアン・壬生、壬生寺近くの自家製パスタ] 壬生寺近くの路地にある開店10年の16席のトラットリア。山盛りの前菜の盛り合わせ、手打ちタリアテッレのボロネーゼ、京都ポークのカツ、シェフおすすめのイタリアワインで、地元の予約が埋まる。昼のセットがある日も。やさしい味付けで手頃。予約を。水・日休み。',
  });
}

// ================================================================ カタパン屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26033844/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '16:00']);
  put({
    id: 'kyoto_katapanya_higashikujo', name: 'カタパン屋 (Kata Pan Ya)', category: 'OMNI',
    lat: 34.983736, lng: 135.764456, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-dough griddle breads (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the sankaku is filled with a custard-like cream; the dough is pancake-like (2023–2026 reviews). The kata-pan is said to use no butter (March 2026), but its other ingredients are not stated.',
    hours_raw: 'Tabelog: Mon–Sat 10:00–16:00, until sold out; closed Sunday. One reviewer found it closed on several tries (May 2026); queues at times (October 2026). Take-away only, with three chairs for waiting. No photos or video inside, for safety (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 1 min from the Kawaramachi-Hachijo bus stop, 8 min walk from Kyoto Station; near teamLab Kyoto (2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashikujo — 8 min walk south-east of Kyoto Station, near teamLab Kyoto',
    cuisine: 'A tiny, old griddle-bread shop in Higashikujo making just three things, baked on a teppan in front of you (Tabelog; 2023–2026 reviews) · maru-pan, a round, soft, pancake-like bread ¥170; sankaku, a triangle oozing warm custard-like cream ¥170; kata-pan, a rock-hard square that keeps for months ¥180 (December 2023 prices) · kata-pan sold in packs of five (October 2026)',
    website: null, gmaps: gm('カタパン屋 東九条東岩本町'), menu_url: null,
    notes: '[Old-time bakery · Higashikujo, three breads off the griddle] A tiny family shop near Kyoto Station and teamLab that bakes only three things on an iron griddle as you wait — a soft round maru-pan, a cream-filled sankaku and a rock-hard kata-pan that keeps for months — each under ¥200. Until sold out; sometimes shut. No photos inside. Cash only. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; run by a couple and their daughter (January 2026 review)'], origin: null,
      background: 'A January 2026 reviewer calls it the long-established Kata Pan Ya Kamei Shoten, "said to have been around since the Edo period," with a Showa-retro shopfront; another describes a family shop run by a couple and their daughter (January 2026), and a third an elderly couple (January 2026). Bread is baked to order on a traditional teppan; the kata-pan is made ahead (2026 reviews).',
      philosophy: null,
      specialty: 'Kata-pan (hard bread); sankaku.',
      anecdotes: [
        { text: 'March 2026: outside the shop a truck driver called out "It\'s delicious here!", broke open a bag and shared some, then drove off.', source: R + 'B525643616/' },
        { text: 'May 2026: "Every time I tried to go, it was closed, so I could never buy anything. But on this day, it was open!"', source: R + 'B535321980/' },
      ],
      japanese_sources_summary: '食べログ: カタパン屋、パン、南区東九条東岩本町12-2、京都駅から徒歩8分、河原町八条バス停から徒歩1分、月〜土 10:00〜16:00 (売り切れ次第終了)、日曜休み、予約不可、持ち帰りのみ (待つための椅子3脚)、丸いパン・三角のパン・硬いパンの3種のみ、すべて店で焼く、安全のため店内の撮影禁止、カード・電子マネー・QR不可、禁煙。口コミ (2023年4月〜2026年10月、英語): 丸パン170円、三角170円、カタパン180円 (2023年12月)、丸パンはパンケーキのよう、三角はとろりとしたクリーム入り、カタパンはとても硬く何か月も保存できる、バター不使用、鉄板で手焼き、江戸時代からと言われる老舗の Kamei Shoten という声、夫婦と娘の家族経営、閉まっていることが多かったという声、teamLab の近く。',
      confidence: 'medium', sources: [TB, R + 'B476587441/', R + 'B512674197/', R + 'B520677861/', R + 'B521325240/', R + 'B521747851/', R + 'B522151716/', R + 'B524370663/', R + 'B525643616/', R + 'B535321980/', R + 'B536656894/', R + 'B537187930/', R + 'B537605791/'] },
    cultural_comfort: { level: 'japanese', note: 'Take-away only; three items; no photos inside; cash.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市南区東九条東岩本町12-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.983736, 135.764456); cross-checked: GSI 京都府京都市南区東九条東岩本町12番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B476587441/'],
    price_note: 'Prices from a December 2023 review; may have changed.', last_checked: TODAY, items: [
      it('丸パン', '', 'Maru-pan (round, soft)', '¥170', 'Bread', 'no', 'no', 'December 2023.', 'bread'),
      it('三角', '', 'Sankaku (cream-filled triangle)', '¥170', 'Bread', 'no', 'no', 'December 2023.', 'bread'),
      it('カタパン', '', 'Kata-pan (hard bread)', '¥180', 'Bread', 'no', 'ask', 'December 2023.', 'bread'),
    ] }, {
    cuisine: '東九条の小さな古い鉄板焼きのパン屋で、作るのは3種類だけ。目の前の鉄板で焼く (食べログ、2023〜2026年の口コミ)・丸くてやわらかいパンケーキのような丸パン170円、温かいクリームがとろりと出る三角170円、何か月も持つかちかちの四角いカタパン180円 (2023年12月の値段)・カタパンは5枚入りの袋で (2026年10月)',
    neighborhood: '東九条。京都駅の南東へ徒歩8分、teamLab 京都の近く',
    gf_detail: 'グルテンフリーではない: 小麦の生地を鉄板で焼くパン (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可: 三角はカスタードのようなクリーム入り、生地はパンケーキのよう (2023〜2026年の口コミ)。カタパンはバター不使用という声 (2026年3月) もあるが、ほかの材料は不明。',
    notes: '[昔ながらのパン屋・東九条、鉄板で焼く3種のパン] 京都駅と teamLab の近くの小さな家族の店で、鉄板で目の前で焼くのは3種だけ。やわらかい丸パン、クリーム入りの三角、何か月も持つ硬いカタパン、どれも200円以下。売り切れ次第終了で、閉まっていることも。店内は撮影禁止。現金のみ。日曜休み。',
  });
}

// ================================================================ せいろ料理 葵茶屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26003760/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.mistore.jp/store/kyoto/shops/restaurant/aoichaya.html';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_seiro_aoi_chaya_isetan', name: 'せいろ料理 葵茶屋 (Seiro Ryori Aoi Chaya)', category: 'OMNI',
    lat: 34.985948, lng: 135.75657, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: steamed Kyoto vegetables, meat and fish are wheat-free in themselves, but they come with ponzu and sesame sauce, and sets include tempura, soba and simmered dishes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sets come with dashi-based dishes, sashimi or meat; the steamed vegetables are the closest option — ask (2026 reviews).',
    hours_raw: 'Tabelog: daily 11:00–22:00; the store page gives last order 21:15, and closing days follow JR Kyoto Isetan. Reservations taken. 56 seats (store page); private rooms. Non-smoking; children welcome. Cards, e-money and QR. Average spend about ¥1,900 at lunch and ¥2,500 at dinner (store page). On JR Kyoto Isetan\'s 11th-floor restaurant floor, just outside the station\'s central gate; often a seat without a wait (2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station — JR Kyoto Isetan 11F, by the central gate',
    cuisine: 'Seiro-steamed Kyoto vegetables with meat or fish, kept hot at the table, in set meals (store page; 2026 reviews) · meat seiro of Bichu Kogen chicken and Satsuma Chami pork over vegetables ¥1,540 with ponzu and sesame sauce (June 2026) · "Tachibana" steamed-vegetable gozen with obanzai, sashimi, seasonal mixed rice and miso soup (September–October 2026) · a summer hamo course ¥3,520: hamo tempura, hamo in broth, chilled soba with grilled hamo, rice with shirasu and sansho (August 2026) · seasonal clam or chestnut rice; Kyoto sake such as Jurakudai ¥803 (June 2026)',
    website: SITE, gmaps: gm('葵茶屋 ジェイアール京都伊勢丹'), menu_url: null,
    notes: '[Steamed Kyoto vegetables · Kyoto Station Isetan 11F, a light set meal] A calm restaurant on JR Kyoto Isetan\'s 11th floor where Kyoto vegetables with chicken, pork or fish come steaming in a bamboo seiro at the table, with ponzu and sesame sauce, rice and obanzai — a light meal off the train at about ¥1,500–3,500, often without a queue. One diner found the rice mushy (June 2026), another some dishes salty (August 2026).',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'The Isetan store page describes table-top seiro steaming and set meals of Kyoto-grown vegetables with meat and seafood, 56 seats. Reviewers in 2026 describe a quiet, Japanese-style room that is easier to get into than its neighbours, attentive staff, seasonal rice and many older guests.',
      philosophy: null,
      specialty: 'Seiro-steamed Kyoto vegetables.',
      anecdotes: [
        { text: 'June 2026: "The steamed vegetables were plentiful… The rice was a bit mushy, but overall, it was delicious."', source: R + 'B531295985/' },
        { text: 'August 2026: "Some dishes were saltier than I expected, but overall, I had a delightful and visually pleasing lunch."', source: R + 'B534380057/' },
      ],
      japanese_sources_summary: '三越伊勢丹の店舗ページ: JR京都伊勢丹11階、せいろ料理「葵茶屋」、京都育ちの野菜と肉や魚介を温かいまま食べる卓上のせいろ蒸しと御膳、午前11時〜午後10時 (L.O. 午後9時15分)、平均予算はランチ1,900円・ディナー2,500円、56席。食べログ: せいろ料理 葵茶屋、日本料理・うどん、下京区烏丸通塩小路下る東塩小路町901 ジェイアール京都伊勢丹 11F、毎日 11:00〜22:00、予約可、個室あり、禁煙、子供可、カード・電子マネー・QR可。口コミ (2026年6〜10月、英語): Bichu Kogen chicken と Satsuma Chami pork の肉のせいろ蒸し1,540円、ポン酢とごまだれ、聚楽第803円、「Tachibana」の御膳、夏の鱧のコース3,520円 (鱧の天ぷら、鱧のお吸い物、焼き鱧の冷たいそば、しらすと山椒のご飯)、季節の炊き込みご飯 (あさり、栗)、ご飯がやわらかすぎたという声、塩気の強い料理もという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B530079125/', R + 'B531295985/', R + 'B534080032/', R + 'B534155833/', R + 'B534380057/', R + 'B534654712/', R + 'B535778358/', R + 'B536402120/', R + 'B536516862/', R + 'B537256852/', R + 'B537841070/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant floor; reservations taken.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通塩小路下る東塩小路町901 ジェイアール京都伊勢丹 11F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Isetan store page; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.985948, 135.756570); cross-checked: GSI 京都府京都市下京区東塩小路町901番地 (lot) 160m — the lot is the whole station building, beyond 150 m, so marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530079125/', R + 'B534155833/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Meat seiro (chicken and pork over vegetables)', '¥1,540', 'Seiro', 'ask', 'no', 'June 2026.', 'seiro_mushi'),
      it('', '', 'Summer hamo course', '¥3,520', 'Course', 'no', 'no', 'August 2026.', 'hamo'),
    ] }, {
    cuisine: '京都の野菜と肉や魚を卓上で温かいまま蒸すせいろ蒸しの御膳 (店舗ページ、2026年の口コミ)・Bichu Kogen chicken と Satsuma Chami pork を野菜にのせた肉のせいろ蒸し1,540円、ポン酢とごまだれで (2026年6月)・おばんざい、お造り、季節の炊き込みご飯、味噌汁付きの蒸し野菜の御膳「Tachibana」(2026年9〜10月)・夏の鱧のコース3,520円は鱧の天ぷら、鱧のお吸い物、焼き鱧の冷たいそば、しらすと山椒のご飯 (2026年8月)・季節のあさりや栗のご飯。聚楽第など京都の酒803円 (2026年6月)',
    neighborhood: '京都駅。JR京都伊勢丹11階、中央改札のそば',
    gf_detail: '要確認: 蒸した京野菜や肉、魚自体は小麦を含まないが、ポン酢とごまだれで食べ、セットには天ぷら、そば、炊き合わせも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: セットには出汁の料理、お造り、肉が付く。蒸し野菜がいちばん近いので要確認 (2026年の口コミ)。',
    notes: '[せいろ蒸し・京都駅伊勢丹11階、軽い御膳] JR京都伊勢丹11階の落ち着いた店で、京野菜と鶏や豚、魚を卓上のせいろで蒸し、ポン酢とごまだれ、ご飯とおばんざいとともに。電車を降りて1,500〜3,500円ほどの軽い食事に、並ばずに入れることも多い。ご飯がやわらかすぎたという声 (2026年6月) や、塩辛い料理もという声 (2026年8月) も。',
  });
}

// ================================================================ 清水 京あみ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007462/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kiyomizukyoami.com';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_kiyomizu_kyoami', name: '清水 京あみ (Kiyomizu Kyoami)', category: 'OMNI',
    lat: 34.995489, lng: 135.782028, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: choux pastry made with the cinnamon (nikki) of yatsuhashi (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream puffs filled with custard or matcha cream; soft serve (Tabelog; reviews).',
    hours_raw: 'Tabelog: daily 10:00–18:00; closed irregularly. No reservations. 80 seats (eat-in space with sofas, few tables — June 2026); take-away. Designated smoking area. Children welcome. No cards; e-money and QR. On Kiyomizu-zaka, the slope up to Kiyomizu-dera; 10 min walk from the Kiyomizu-michi bus stop (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu-zaka, below Kiyomizu-dera',
    cuisine: 'A sweets-and-coffee stop on the slope to Kiyomizu-dera, known for its yatsuhashi cream puff (official site; Tabelog) · yatsuhashi choux scented with the nikki (cinnamon) of yatsuhashi, hand-baked and filled to order with custard or matcha cream ¥400–550 (Tabelog; July–September 2026) · matcha soft serve ¥450; unsweetened iced matcha ¥450; house-roasted coffee (official site; 2026 reviews) · matcha "hororo" biscuits to take home (June 2026)',
    website: SITE, gmaps: gm('清水京あみ 清水坂'), menu_url: SITE,
    notes: '[Sweets · Kiyomizu-zaka, the yatsuhashi cream puff] A sweets and coffee shop on the climb to Kiyomizu-dera whose cream puff is baked with the cinnamon of yatsuhashi and filled to order with custard or deep-green matcha cream — a cool sit-down on a hot slope. One diner found the matcha soft serve weak (July 2026); seating is sofas rather than tables (June 2026). No cards.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Per its site, a shop at the foot of Kiyomizu-dera serving handmade sweets and house-roasted coffee "between moments of travel"; the same site lists sister shops by Ginkaku-ji — 銀閣寺 まつばや, 銀閣寺 京阿弥, 銀閣寺 御米司ふみや and 銀閣寺 kiharu. Reviewers in 2026 describe a cream puff that went viral on social media and a mostly visitor crowd.',
      philosophy: null,
      specialty: 'Yatsuhashi cream puff.',
      anecdotes: [
        { text: 'July 2026: "I was expecting a rich matcha typical of Kyoto, but it was only as strong as sencha."', source: R + 'B532662101/' },
        { text: 'July 2026: "They fill the choux pastry with matcha cream right on the spot, and the pastry has a hint of cinnamon."', source: R + 'B537738076/' },
      ],
      japanese_sources_summary: '公式サイト: 京都東山、清水坂の八ッ橋しゅーとコーヒーの店、清水寺のふもとで手作りのスイーツと自家焙煎のコーヒー、店舗は清水京あみ・銀閣寺 まつばや・銀閣寺 京阿弥・銀閣寺 御米司ふみや・銀閣寺 kiharu。食べログ: 清水 京あみ、ケーキ・ソフトクリーム、東山区清水1丁目262-2、毎日 10:00〜18:00、不定休、予約不可、80席、持ち帰り、喫煙所あり、子供可、カード不可、電子マネー・QR可、八ッ橋に使うニッキを生地に入れて手焼きしたシューに注文後にクリームを詰める。口コミ (2026年6〜11月、英語): 八ッ橋シュー (抹茶) 400円・550円、抹茶ソフト450円、無糖の冷たい抹茶450円、抹茶のほろろ、ソファ席でテーブルはない、抹茶ソフトは煎茶くらいの濃さという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B530486299/', R + 'B532662101/', R + 'B532935697/', R + 'B533813183/', R + 'B534259986/', R + 'B536178883/', R + 'B536282515/', R + 'B536723942/', R + 'B537442617/', R + 'B537738076/', R + 'B537900683/', R + 'B538522321/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tourist-street sweets shop; order at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区清水1丁目262-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site; Tabelog reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.995489, 135.782028); cross-checked: GSI 京都府京都市東山区清水一丁目 (chome only, no lot) 151m — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536178883/', R + 'B537738076/', R + 'B533813183/'],
    price_note: 'Prices from 2026 reviews; the cream puff is quoted at ¥400 (July) and ¥550 (September).', last_checked: TODAY, items: [
      it('八ッ橋しゅー', '', 'Yatsuhashi cream puff', '¥400–550', 'Sweets', 'no', 'no', 'July and September 2026.', 'cream_puff'),
      it('', '', 'Matcha soft serve', '¥450', 'Sweets', 'ask', 'no', 'July 2026.', 'soft_serve'),
      it('', '', 'Iced matcha, unsweetened', '¥450', 'Drinks', 'ask', 'ask', 'September 2026.', 'matcha'),
    ] }, {
    cuisine: '清水寺への坂にあるスイーツとコーヒーの店で、八ッ橋のシュークリームで知られる (公式サイト、食べログ)・八ッ橋のニッキを入れて手焼きしたシューに、注文後にカスタードか抹茶のクリームを詰める400〜550円 (食べログ、2026年7〜9月)・抹茶ソフト450円、無糖の冷たい抹茶450円、自家焙煎のコーヒー (公式サイト、2026年の口コミ)・お土産に抹茶のほろろ (2026年6月)',
    neighborhood: '清水坂、清水寺の下',
    gf_detail: 'グルテンフリーではない: 八ッ橋のニッキを入れたシュー生地 (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可: カスタードや抹茶クリームのシュークリーム、ソフトクリーム (食べログ、口コミ)。',
    notes: '[スイーツ・清水坂、八ッ橋のシュークリーム] 清水寺への坂のスイーツとコーヒーの店。八ッ橋のニッキを入れて焼いたシューに、注文してからカスタードや濃い抹茶のクリームを詰める。暑い坂の途中で涼しく座れる。抹茶ソフトが薄かったという声 (2026年7月) や、席はテーブルでなくソファという声 (2026年6月) も。カード不可。',
  });
}

save();
