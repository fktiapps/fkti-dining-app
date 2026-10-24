// Ginza Station half-mile sweep (805 m), batch 21 — mom-and-pop discovery via ASCII.jp's "レトロさんぽ" series.
//   + 喫茶フジ (FUJI) (founded ~66 years before 2024 by the owner's father-in-law; owner Fujita Keiko → MOM_AND_POP)
//   + 喫茶 ローヤル (opened with the Kōtsū Kaikan, 1965; third-generation manager Noyama → OMNI)
//   + 居酒屋 登運とん (offal skewers under the tracks since 1953; manager Iwamoto Yūji → OMNI)
// Sources: ASCII.jp レトロさんぽ #1 (2023), #5 (2023), #15 (2024); san-tatsu (2024); Tabelog /en/ + 2025–2026 reviews.
// 登運とん has no Tabelog listing found and no OSM node: pin is GSI lot-level only (loc_approx 'block').
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 喫茶フジ
{
  const AS = 'https://ascii.jp/elem/000/004/216/4216882/';
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130201/13088513/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:00', '18:00']);
  put({
    id: 'tokyo_kissa_fuji_marunouchi', name: '喫茶フジ (Kissa Fuji / Coffee & Lunch FUJI)', category: 'MOM_AND_POP',
    lat: 35.677088, lng: 139.765458,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free in practice. The menu is kissaten yōshoku: nine spaghetti dishes, baked curry, omelette curry, hamburg, ginger pork, pilaf and sandwiches, none described as gluten-free. Coffee itself contains no gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Pork sauté (about 250 g of loin), carbonara, hamburg and ginger-pork sets; no vegetable dish is described. Black coffee is plant-only.',
    hours_raw: 'Mon–Fri 11:00–18:00; closed Saturdays and Sundays (Tabelog). Cash only. Smoking allowed. Lunch dishes served until closing.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Marunouchi 3-chōme, a lane between the JR tracks and the Shinkansen viaduct — 5 min from Yūrakuchō, 7 from Tokyo Stn south exit',
    cuisine: 'Family kissaten (~1958) · big yōshoku plates · spaghetti, pork sauté, curry · smoking allowed', cuisine_type: 'kissaten',
    website: null, gmaps: gm('喫茶フジ 丸の内3-7-2'), menu_url: null,
    notes: "[Mom & Pop · a family kissaten under the viaducts] The ground floor of a free-standing house (a mahjong parlour is upstairs) in the lane between the JR tracks and the Shinkansen viaduct, signposted 'Coffee & Lunch FUJI' with a blue Key Coffee sign. It was founded about 66 years before 2024, just nearby, by the father of the owner's husband, as a drinks-only café, and moved here in 1986. When her husband died, Fujita Keiko, then 45 and a full-time housewife, suddenly became the owner. She has run it for about forty years since, slowly building up the food. When the Tokyo Metropolitan Government was still in Marunouchi, bidders for city contracts used it as their office, and it had a row of public phones. The sasanqua outside was transplanted from the old city-hall streets. Plates are generous: pork sauté of about 250 g of loin with soup and rice (¥1,180), nine spaghetti dishes led by carbonara (¥1,250 with salad, soup and coffee), omelette curry, baked curry, chocolate parfait (¥950), coffee ¥500 (2024 prices). In 2026 two staff handle the lunch rush. Smoking is allowed.",
    chef_bio: {
      chef_name: '藤田桂子 (Fujita Keiko, owner)', roles: ['owner (second generation by marriage)'],
      origin: 'Founded about 66 years before 2024 nearby; at Marunouchi 3-7-2 since 1986',
      background: "Founded by her husband's father as a simple drinks café; her husband took it over, and when he died she, then 45, took over and has run it for about forty years. In 2024 she was at the shop three days a week.",
      philosophy: null,
      specialty: 'Pork sauté; carbonara and eight other spaghetti; omelette curry.',
      anecdotes: [
        { text: '東京都庁が丸の内にあったころは、都庁に出入りする入札業者の人たちなどが多く通って来て、公衆電話を何台も設置した店内はまるで彼らの事務所のように使われていた.', source: AS },
        { text: '「9種類のスパゲティも、みなさんよく頼まれるのよ」 — the owner, recommending the carbonara.', source: AS },
        { text: 'February 2026: an omelette curry with a large portion of rice, with "the kitchen and the hall staff [managing] alone during the busy hours".', source: R + 'B510828601/' },
      ],
      japanese_sources_summary: 'ASCII.jp「レトロさんぽ」第15回(2024.8.23): 喫茶フジ、JR線と新幹線の高架の間の小道、一軒家の1階(2階は雀荘)、約66年前に近くで創業、1986年に現在地へ、初代は藤田桂子さんの夫の父、夫が45歳の藤田さんを残して亡くなり専業主婦から急遽オーナーに、約40年切り盛り、旧都庁の入札業者の事務所代わり、旧都庁周辺から移植したサザンカ、ポークソテー1,180円(約250g)、9種類のスパゲティ、カルボナーラ1,250円、チョコレートパフェ950円、コーヒー500円。食べログ: FUJI、丸の内3-7-2、58席、月〜金11:00〜18:00、土日休、現金のみ。2025–2026年の口コミ: 喫煙可、オムカレー、キーコーヒーの看板。',
      confidence: 'high', sources: [AS, TB, R + 'B510828601/', R + 'B528396383/', R + 'B528144304/', R + 'B507717174/'],
    },
    cultural_comfort: { level: 'japanese', note: 'A deep, retro room with 58 table seats; trains rumble overhead. Cash only; smoking allowed.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Pork sauté of about 250 g of loin; carbonara.', source: AS }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒100-0005 東京都千代田区丸の内3-7-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区丸の内三丁目7番2号 (go) about 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [AS, R + 'B510828601/', R + 'B528396383/'],
    price_note: 'Prices from the August 2024 ASCII.jp feature; expect changes.', last_checked: TODAY, items: [
      it('ポークソテー', 'pooku sotee', 'Pork sauté (about 250 g loin) with soup and rice', '¥1,180', 'Mains', 'ask', 'no', '2024.', 'pork_saute'),
      it('カルボナーラ', 'karubonaara', 'Carbonara with salad, soup, coffee or tea', '¥1,250', 'Spaghetti', 'no', 'no', 'Most popular of nine spaghetti (2024).', 'carbonara'),
      it('オムカレー', 'omu karee', 'Omelette curry', '', 'Mains', 'no', 'no', '', 'omu_curry'),
      it('焼きカレーセット', 'yaki karee setto', 'Baked curry set', '', 'Mains', 'no', 'no', '', 'baked_curry'),
      it('ハンバーグセット', 'hanbaagu setto', 'Hamburg set', '', 'Mains', 'no', 'no', '', 'hamburg_set'),
      it('生姜焼きセット', 'shougayaki setto', 'Ginger pork set', '', 'Mains', 'no', 'no', '', 'ginger_pork_set'),
      it('チョコレートパフェ', 'chokoreeto pafe', 'Chocolate parfait', '¥950', 'Sweets', 'no', 'no', '2024.', 'chocolate_parfait'),
      it('コーヒー', 'koohii', 'Hot coffee', '¥500', 'Drinks', 'gf', 'vegan', '2024.', 'coffee'),
    ] }, {
    cuisine: '1958年ごろ創業の家族の喫茶店・ボリュームのある洋食・スパゲティ・ポークソテー・カレー・喫煙可',
    neighborhood: '丸の内三丁目、JR線と新幹線の高架の間の小道。有楽町駅から徒歩5分、東京駅丸の内南口から7分',
    gf_detail: '実際上グルテンフリーではありません。メニューは喫茶店の洋食で、9種類のスパゲティ、焼きカレー、オムカレー、ハンバーグ、生姜焼き、ピラフ、サンドイッチなど、グルテンフリーとされるものはありません。コーヒー自体はグルテンを含みません。',
    vegan_detail: 'ヴィーガンではありません。約250gのロースのポークソテー、カルボナーラ、ハンバーグや生姜焼きのセットなどで、野菜料理の記述はありません。ブラックコーヒーは植物性のみです。',
    notes: '[個人店・高架の間の家族の喫茶店] JR線と新幹線の高架の間の小道にある一軒家の1階(2階は雀荘)で、「コーヒー&ランチ FUJI」とキーコーヒーの青い看板が目印。2024年時点で約66年前に近くで、藤田桂子さんの夫の父が飲み物だけの喫茶店として創業し、1986年に現在地へ。夫が亡くなり、45歳で専業主婦だった藤田さんが急遽オーナーになり、以来約40年、少しずつ料理を増やしてきました。都庁が丸の内にあった頃は入札業者が事務所代わりに使い、公衆電話が何台も並んでいたそう。店先のサザンカは旧都庁周辺の通りから移植したもの。量はたっぷりで、約250gのポークソテー(スープ・ライス付き1,180円)、一番人気のカルボナーラ(サラダ・スープ・コーヒー付き1,250円)など9種類のスパゲティ、オムカレー、焼きカレー、チョコレートパフェ950円、コーヒー500円(2024年)。2026年は昼のピークを2人で回しています。喫煙可。',
  });
}

// ================================================================ 喫茶 ローヤル
{
  const AS = 'https://ascii.jp/elem/000/004/130/4130668/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13076352/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['08:00', '19:30']), we = day(['11:00', '19:00']);
  put({
    id: 'tokyo_kissa_royal_yurakucho', name: '喫茶 ローヤル (Kissa Royal)', category: 'OMNI',
    lat: 35.674863, lng: 139.763892,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. The seasonal fruit parfait (fruit, whipped cream and ice cream) and the custard pudding contain no wheat as described, but toppings such as wafers and the ice cream\'s ingredients are not published. Coffee and tea are gluten-free. Lunch dishes are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: the pudding is made with domestic eggs, and the parfaits are cream and ice cream. Black coffee, tea and lemon squash are plant-only.',
    hours_raw: 'Mon–Fri 08:00–19:30; Sat, Sun & holidays 11:00–19:00; closed on building closure days (Tabelog). Cash only.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 2-chōme, Tokyo Kōtsū Kaikan B1F, down the spiral stair — 1 min from Yūrakuchō Stn',
    cuisine: 'Jun-kissa since 1965 · seasonal fruit parfait · custard pudding · red sofas and stained glass', cuisine_type: 'kissaten',
    website: null, gmaps: gm('喫茶 ローヤル 東京交通会館'), menu_url: null,
    notes: "[Kissaten · since 1965] A glittering jun-kissa that opened with the Tokyo Kōtsū Kaikan in 1965, at the foot of the spiral stair to the basement. Its first manager, a businessman who loved luxury, gave it bright red sofas, stained glass and artworks, such as a peacock made only of hearts, and most of that décor survives. The lamps on the dividing poles were once its only light; the room was brightened when older regulars said they couldn't read their newspapers. The floor is run by men in white shirts and ties, aged about fifty to seventy, under the friendly third-generation manager Noyama, and some waiters of twenty years know regulars' names, orders and seats. The seasonal fruit parfait (strawberries, cream and ice cream; melon ¥1,200 in 2026) has been on the menu since opening, alongside a firm kissaten custard pudding with sticky caramel. Blend coffee ¥800. Around 95–120 seats, quick turnover.",
    chef_bio: {
      chef_name: null, roles: ['café (third-generation manager 野山 Noyama, per ASCII.jp 2023)'],
      origin: 'Opened with the Tokyo Kōtsū Kaikan (1965)',
      background: 'ASCII.jp describes a first manager who was a businessman fond of luxury, and today\'s third-generation manager, Noyama. Staff are hired as men with kitchen and floor experience. Not tagged mom-and-pop: no owner or family is named.',
      philosophy: null,
      specialty: 'Seasonal fruit parfait; kissaten pudding; blend coffee.',
      anecdotes: [
        { text: '「昔はこの灯りだけで営業していて、もっと薄暗くてムードがある空間だったんだよ。でもお客さんがだんだんお年を召してきて『新聞が読めない』という声が多くなったから今の明るさにしたの（笑）」 — manager Noyama.', source: AS },
        { text: 'Some waiters have worked there over twenty years and know regulars\' names, usual orders and preferred seats.', source: AS },
        { text: '"The staff were mostly charming older gentlemen, creating a calm ambiance!" — October 2026, a ten-minute wait at snack time.', source: R + 'B537755682/' },
      ],
      japanese_sources_summary: 'ASCII.jp「レトロさんぽ」第1回(2023.4.3): 東京交通会館(1965年)の地下1階、螺旋の外階段を降りてすぐ、交通会館のオープンと同時に開業、初代支配人の意向で煌びやかな装飾、真っ赤なソファ、ハートで描いたクジャク、3代目支配人・野山さん、スタッフは50〜70代の男性、季節のフルーツパフェ、喫茶店のプリン。食べログ: 有楽町2-10-1 東京交通会館B1F、120席(95席に削減)、平日8:00〜19:30、土日祝11:00〜19:00、現金のみ。2026年10月の口コミ: ブレンド800円、季節のフルーツパフェ(メロン)1,200円、レモンスカッシュ800円、創業当初からのパフェ。',
      confidence: 'medium', sources: [AS, TB, R + 'B536839489/', R + 'B537226314/', R + 'B537541303/', R + 'B537755682/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Short waits at peak tea time, quick turnover; waiters come to you. Cash only.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Pudding rich with the flavour of domestic eggs; parfaits of whipped cream and ice cream.', source: AS }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-10-1 東京交通会館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; same building as キッチン大正軒 and 麺屋ひょっとこ (each on its own Tabelog geo); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [AS, R + 'B536839489/', R + 'B537226314/', R + 'B537541303/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('季節のフルーツパフェ', 'kisetsu no furuutsu pafe', 'Seasonal fruit parfait (on the menu since opening)', '¥1,200', 'Sweets', 'ask', 'no', 'Melon, October 2026.', 'fruit_parfait'),
      it('喫茶店のプリン', 'kissaten no purin', 'Kissaten custard pudding', '', 'Sweets', 'ask', 'no', 'Domestic eggs.', 'pudding'),
      it('ブレンドコーヒー', 'burendo koohii', 'Blend coffee (deep roast)', '¥800', 'Drinks', 'gf', 'vegan', 'October 2026.', 'blend'),
      it('レモンスカッシュ', 'remon sukasshu', 'Lemon squash', '¥800', 'Drinks', 'ask', 'vegan', 'October 2026.', 'lemon_squash'),
      it('', '', 'Assam tea (hot)', '', 'Drinks', 'gf', 'vegan', '', 'assam_tea'),
    ] }, {
    cuisine: '1965年開業の純喫茶・季節のフルーツパフェ・喫茶店のプリン・赤いソファとステンドグラス',
    neighborhood: '有楽町二丁目、東京交通会館B1F、螺旋階段を降りてすぐ。有楽町駅から徒歩1分',
    gf_detail: '要確認。季節のフルーツパフェ(果物・ホイップクリーム・アイス)やプリンは記述上小麦を含みませんが、トッピングやアイスの材料は公表されていません。コーヒーと紅茶はグルテンを含みません。軽食の記述はありません。',
    vegan_detail: '記述上はヴィーガンではありません。プリンは国産卵、パフェはクリームとアイス。ブラックコーヒー、紅茶、レモンスカッシュは植物性のみです。',
    notes: '[喫茶店・1965年から] 1965年の東京交通会館のオープンと同時に開業した、螺旋階段を降りた先の煌びやかな純喫茶。高級なものが好きな実業家だった初代支配人の意向で、赤いソファ、ステンドグラス、ハートだけで描いたクジャクなどの作品が飾られ、内装のほとんどは当時のまま。かつては仕切りのポールの灯りだけで営業していましたが、年配の常連から「新聞が読めない」と言われて明るくしたそう。白シャツにネクタイの50〜70代の男性スタッフが店を回し、気さくな3代目支配人・野山さんのもと、20年以上勤めて常連の名前・いつもの注文・好みの席まで覚えているウェイターもいます。開店当初からの季節のフルーツパフェ(いちご・クリーム・アイス、2026年10月はメロンで1,200円)と、固めでカラメルがねっとりの喫茶店のプリンが名物。ブレンド800円。95〜120席で回転は速めです。',
  });
}

// ================================================================ 居酒屋 登運とん
{
  const ST = 'https://san-tatsu.jp/articles/348561/'; const AS = 'https://ascii.jp/elem/000/004/153/4153424/';
  const wk = day(['13:30', '22:15']);
  put({
    id: 'tokyo_izakaya_tontonton_yurakucho', name: '居酒屋 登運とん (Izakaya Tontonton)', category: 'OMNI',
    lat: 35.67337, lng: 139.761093,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The yakitori tare has been topped up since opening and tastes of soy sauce; the pork-belly skewer is finished with a garlic miso, and the beef-offal stew is miso-based. Salt-seasoned skewers exist, but they come off the same grill and nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. A pork and beef offal yakitori bar: kashira (skirt), pork belly, tsukune, beef-offal stew.',
    hours_raw: 'Mon–Fri 13:30–22:15 (L.O.); Sat 12:00–22:00 (L.O.); Sun & holidays 12:00–21:00 (L.O.); no regular closing day (san-tatsu, October 2024).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['12:00', '22:00']), 6: day(['12:00', '21:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 2-chōme, inside the railway tunnel from the Hibiya side to the Ginza side — 1 min from Hibiya Stn, 4 min from Yūrakuchō',
    cuisine: 'Offal yakitori (motsuyaki) under the tracks since 1953 · charcoal skewers · beef-offal miso stew · Hoisu sour', cuisine_type: 'izakaya',
    website: null, gmaps: gm('登運とん 有楽町2-1-10'), menu_url: null,
    notes: "[Izakaya · under the tracks since 1953] A red-lantern offal-yakitori bar inside the arched tunnel that runs under the tracks from the Hibiya side to the Ginza side, in the same spot since 1953; trains rumble overhead and the ceiling slopes like an attic. Skewers are threaded from 7:30 each morning for that day and grilled raw over charcoal at the street-side grill: kashira (here skirt, not temple), pork belly with salt, pepper and garlic miso, and tsukune in a tare topped up since opening. Order at least two of each. The beef-offal stew in a house miso (¥630 in 2024) and a Hoisu sour (¥500), the Shōwa-30s shōchū mixer, complete it. Manager Iwamoto Yūji, who has worked in izakaya since fifteen, took over during the tail of COVID. Overseas visitors photograph the place inside and out, and strangers end up talking.",
    chef_bio: {
      chef_name: '岩本有司 (Iwamoto Yūji, manager)', roles: ['manager (店長)'],
      origin: 'Opened 1953 in the Yūrakuchō railway tunnel',
      background: 'Iwamoto began working in izakaya at fifteen and has run his own shop before; he became manager while COVID was still hurting business. Not tagged mom-and-pop: the owner is not named.',
      philosophy: '「心さえつかんでおけば、お客さんは来てくれますから」',
      specialty: 'Charcoal offal skewers; beef-offal miso stew; Hoisu sour.',
      anecdotes: [
        { text: '「とくに外国の方は喜びますよ。店の外からも中からも、写真を撮って帰る人がいっぱいいますね」', source: ST },
        { text: '「生の状態から焼くので、しばらく時間かかりますよ」 — skewers are threaded fresh from 7:30 a.m.', source: ST },
        { text: 'An ASCII.jp writer ended up chatting with a young overseas couple at the next table: the room makes strangers talk.', source: AS },
      ],
      japanese_sources_summary: 'さんたつ(2024.10.22): 居酒屋 登運とん、有楽町の高架下のトンネル内で1953年から、店長・岩本有司さん(15歳から居酒屋、自身の店の経営経験も、コロナ禍の時期に店長に)、串は朝7時半から当日分を串打ち、炭火、カシラ(ハラミ)190円・つくね190円・豚バラ串350円(各2本〜)、創業以来注ぎ足しのタレ、ニンニク味噌、味噌ベースの牛もつ煮込み630円、ホイスサワー500円、住所 有楽町2-1-10、平日13:30〜22:15LO・土12:00〜22:00LO・日祝12:00〜21:00LO、無休。ASCII.jp「レトロさんぽ」第5回(2023.9): 昭和28年創業、外国人観光客にも人気。',
      confidence: 'medium', sources: [ST, AS],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Packed, close tables in a railway tunnel; very popular with overseas visitors. Skewers in multiples of two.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [{ text: 'Salt and tare skewers grilled on the same charcoal grill.', source: ST }],
      soy_sauce_wheat: [{ text: 'Tsukune tare 「醬油が豊かに香る」, topped up since opening; garlic miso on pork belly.', source: ST }],
      vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: false, loc_approx: 'block', address_ja: '〒100-0006 東京都千代田区有楽町2-1-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Featured by san-tatsu October 2024; no Tabelog listing found to date-check further.' },
    pin_source: `GSI 東京都千代田区有楽町二丁目1番 (lot level only) — no Tabelog listing or OSM node found; the shop is in the railway tunnel on this lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST],
    price_note: 'Prices from the October 2024 san-tatsu feature; skewers are ordered two or more at a time.', last_checked: TODAY, items: [
      it('カシラ(ハラミ)', 'kashira', 'Kashira (skirt) skewer, salt or tare', '¥190', 'Skewers', 'ask', 'no', 'Per skewer, 2024.', 'kashira'),
      it('つくね', 'tsukune', 'Tsukune (tare)', '¥190', 'Skewers', 'no', 'no', '', 'tsukune'),
      it('豚バラ串', 'butabara kushi', 'Pork belly skewer with garlic miso', '¥350', 'Skewers', 'no', 'no', '', 'pork_belly'),
      it('牛もつ煮込み', 'gyuu motsu nikomi', 'Beef-offal miso stew', '¥630', 'Small plates', 'no', 'no', '', 'motsu_nikomi'),
      it('ホイスサワー', 'hoisu sawaa', 'Hoisu sour (Shōwa shōchū mixer)', '¥500', 'Drinks', 'ask', 'ask', '', 'hoisu_sour'),
    ] }, {
    cuisine: '1953年から高架下のもつ焼き・炭火の串・味噌の牛もつ煮込み・ホイスサワー',
    neighborhood: '有楽町二丁目、日比谷側から銀座側へ抜ける高架下のトンネル内。日比谷駅から徒歩1分、有楽町駅から4分',
    gf_detail: 'グルテンフリーではありません。焼き物のタレは創業以来の注ぎ足しで醤油が香り、豚バラ串はニンニク味噌、牛もつ煮込みは味噌ベース。塩の串もありますが同じ焼き台で、グルテンフリーとされるものはありません。',
    vegan_detail: 'ヴィーガンではありません。豚・牛のもつ焼きの店で、カシラ、豚バラ、つくね、牛もつ煮込み。',
    notes: '[居酒屋・1953年から高架下] 日比谷側から銀座側へ抜ける高架下のアーチ状のトンネル内で1953年から営業する、赤提灯のもつ焼き店。頭上を電車が通り、天井は屋根裏のように傾斜しています。串は毎朝7時半からその日の分を串打ちし、歩道に面した焼き台で生から炭火焼き。カシラ(ここではハラミ)、塩コショウとニンニク味噌の豚バラ、創業以来注ぎ足しのタレのつくね(各2本から)。独自配合の味噌の牛もつ煮込み(2024年で630円)と、昭和30年代に流行った焼酎の割りもの「ホイス」のサワー(500円)も。15歳から居酒屋で働く店長の岩本有司さんがコロナ禍の終わり頃から店を任されています。海外からの客は店の内外で写真を撮り、隣の客と自然に話が始まる店です。',
  });
}

save();
