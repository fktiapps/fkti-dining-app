// Kyoto priority (kyoto-missed), worker osw13, batch 128 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// ファーマーズ (26016162) re-checked per coordinator: no official site found; the only 2025–26 source (hugkum, 17 Aug 2025) describes organic/additive-free goods but no gluten-free or vegan items — the sole GF evidence is the November 2023 review, so it stays skipped (no new line written).
// Drafts: THE ROYAL KITCHEN & BAR, SOMEWHERE, an., 京都七条焼肉酒場 やまだるま. Brands checked against queue-status, data/kyoto.json, than.co.jp/brands and 株式会社WILL (none match; the yakiniku やまだるま is the sister of the izakaya kyoto_yamadaruma_rokkaku — different format, flagged).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-128');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26028084', 'big-chain hotel venue (Greg 11-08 ruling): ザ ラウンジ＆バー is the lounge of フォーシーズンズホテル京都 (Tabelog address), a Four Seasons hotel');
skip('26043720', 'too thin: Cheeky Pub House — a single one-line review (May 2026); Tabelog lists no seats or menu');
skip('26028330', 'too thin: アテ屋 明ヶ粋ヶ — no reviews');

// ================================================================ THE ROYAL KITCHEN & BAR
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26043960/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:30']);
  put({
    id: 'kyoto_royal_kitchen_bar', name: 'THE ROYAL KITCHEN & BAR', category: 'OMNI',
    lat: 35.002013, lng: 135.751787, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lunch sets come with naan (plain or cheese), and the curries are not described (2026 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Reviews mention keema, chicken tikka and mutton curries; no vegetable curry or vegan option is described.',
    hours_raw: 'Tabelog: daily 11:00–22:30 (L.O. 22:15). Lunch sets A–D around ¥1,080–1,180 with naan, curry, chicken tikka and a soft drink; extra naan ¥100 (2026). Reservations taken. No service charge (「なし」, Tabelog Japanese original). 36 seats: 8 at the counter, 28 at tables; a stage and a bar counter. Non-smoking (smoking area outside). Cards and QR codes; no e-money. On Horikawa-dori at Ayanokoji, 7 min from Hankyu Omiya.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Horikawa-Ayanokoji — 7 min from Hankyu Omiya',
    cuisine: 'A Nepali-Indian curry restaurant and bar with a stage and chandelier, busy with Indian guests (Tabelog; 2026 reviews) · Royal set ¥1,180, mutton curry +¥100 (February 2026) · B lunch ¥1,080: keema curry, naan, chicken tikka, soft drink (June 2026) · A lunch; cheese-naan set; D lunch (2026) · medium-hot curries with real kick; soft naan; extra naan ¥100',
    website: null, gmaps: gm('THE ROYAL KITCHEN & BAR 堀川'), menu_url: null,
    notes: '[Curry · Horikawa-Ayanokoji, a curry house with a stage] A lively Nepali-Indian curry restaurant and bar with a stage and chandelier, popular with Indian diners: lunch sets with naan, curry and chicken tikka from about ¥1,080, open all day to 10:30 pm. Medium spice is properly spicy.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers (2026) describe a former-venue interior with a stage, chandelier and bar counter, many Indian customers and, one evening, dancing (February 2026). Only four reviews so far; one June 2026 diner found the cheese naan small. Whether it belongs to a group is not stated.',
      philosophy: null,
      specialty: 'Curry and naan lunch sets.',
      anecdotes: [
        { text: 'February 2026: "There were many Indian customers, which shows its popularity. The atmosphere was lively and fun, with girls even dancing!"', source: R + 'B523277255/' },
        { text: 'June 2026: "I ordered the B Lunch Set for JPY 1080, tax included, with an extra naan for JPY 100… It comes with chicken tikka and a soft drink."', source: R + 'B529895428/' },
        { text: 'June 2026: "Even the medium spicy option had quite a kick!… The cheese naan was a bit small and the cheese was also a bit lacking."', source: R + 'B532786102/' },
      ],
      japanese_sources_summary: '食べログ: THE ROYAL KITCHEN & BAR、アジア・エスニック・居酒屋・インドカレー、下京区綾堀川町304-2 乳業会館1F、阪急大宮から徒歩7分、毎日11:00〜22:30 (L.O.22:15)、予約可、チャージ「なし」、36席 (カウンター8・テーブル28)、禁煙 (屋外に喫煙所)、カード・QR可。口コミ (2026年2〜9月、英語、4件): ネパール・インドのカレー店、ステージとシャンデリア、インドの客が多い、ロイヤルセット1,180円 (マトン+100円)、Bランチ1,080円 (キーマ、ナン、チキンティッカ、ソフトドリンク)、Aランチ、チーズナンのセット、Dランチ、ナン追加100円、中辛でもしっかり辛い、チーズナンが小さいとの声。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B523277255', 'B529895428', 'B532786102', 'B535796395'])) },
    cultural_comfort: { level: 'english_friendly', note: 'International crowd; lunch sets; open all day.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾堀川町304-2 乳業会館1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated February to September 2026.' },
    pin_source: `Tabelog ${TB} (35.002013, 135.751787); GSI lot 京都府京都市下京区綾堀川町304番地 about 26m away; nearest pin kyoto_cafe_restaurant_lavender 101.9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523277255/', R + 'B529895428/'],
    price_note: 'Lunch prices from February and June 2026 reviews (tax incl.).', last_checked: TODAY, items: [
      it('', '', 'Royal set', '¥1,180', 'Lunch', 'no', 'ask', 'February 2026; mutton +¥100.', 'royal_set'),
      it('', '', 'B lunch (keema curry, naan, chicken tikka, drink)', '¥1,080', 'Lunch', 'no', 'no', 'June 2026.', 'b_lunch'),
      it('', '', 'Cheese-naan set', '', 'Lunch', 'no', 'no', 'June 2026.', 'cheese_naan_set'),
    ] }, {
    cuisine: 'ステージとシャンデリアがあり、インドの客でにぎわうネパール・インドのカレーの店とバー (食べログ、2026年の口コミ)・ロイヤルセット1,180円、マトン+100円 (2026年2月)・Bランチ1,080円: キーマカレー、ナン、チキンティッカ、ソフトドリンク (2026年6月)・Aランチ、チーズナンのセット、Dランチ (2026年)・中辛でもしっかり辛いカレー、柔らかいナン、ナン追加100円',
    neighborhood: '堀川綾小路。阪急大宮から徒歩7分',
    gf_detail: 'グルテンフリーではない: ランチのセットにナン (プレーンかチーズ)、カレーの説明はない (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認: 口コミにはキーマ、チキンティッカ、マトンのカレー。野菜のカレーやヴィーガンの選択肢の記載はない。',
    notes: '[カレー・堀川綾小路、ステージのあるカレー店] ステージとシャンデリアのある、インドの客に人気のにぎやかなネパール・インドのカレー店とバー。ナン、カレー、チキンティッカのランチのセットが1,080円ほどから。夜10時半まで通し営業。中辛でもしっかり辛い。',
  });
}

// ================================================================ SOMEWHERE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26041662/'; const R = TB + 'dtlrvwlst/';
  const A = ['16:00', '24:00'], F = ['19:00', '24:00'];
  put({
    id: 'kyoto_somewhere_bar', name: 'SOMEWHERE', category: 'OMNI',
    lat: 35.017548, lng: 135.767406, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A drinks-led bar; the snacks reviewed — fruit salad with nam pla, tomato with kombu and pecorino, eggplant with eggplant dressing — are not described for gluten (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Snacks include an eggplant dish and a fruit salad, but one uses nam pla (fish sauce) and another pecorino (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Wed, Sat, Sun 16:00–24:00; Fri 19:00–24:00; closed Thursday and irregular days; on the day after a public holiday it opens at 19:00. No cards or QR codes. On the 2nd floor of the Okazaki building on Teramachi-dori just south of Marutamachi, with a big window onto Marutamachi; 447 m from Jingu-Marutamachi.',
    hours: { 0: [A], 1: [A], 2: [A], 4: [F], 5: [A], 6: [A] }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi-Marutamachi — 447 m from Jingu-Marutamachi',
    cuisine: 'A small music bar focused on spirits, with owner-curated chill music on five Bose speakers and a few inventive snacks (Tabelog; 2025–2026 reviews) · original cardamom gin and tonic; "Sauna Gin" soda with kiwi and rock salt (October 2025) · seasonal fruit salad with a hint of nam pla; tomato with kombu, sansho and pecorino (October 2025) · eggplant with eggplant dressing (July 2026)',
    website: null, gmaps: gm('SOMEWHERE 寺町丸太町 バー'), menu_url: null,
    notes: '[Music bar · Teramachi-Marutamachi, gin and good records from 4 pm] A relaxed upstairs bar with a window on Marutamachi: house gins and tonics, clever little snacks, and a carefully chosen soundtrack through five Bose speakers. About ¥2,000–4,000. No cards. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; curates the music)'], origin: null,
      background: 'An October 2025 reviewer praises the owner\'s selection of Japanese and international chill songs, the sound from five Bose speakers and the focus on distilled spirits. Only three reviews so far.',
      philosophy: null,
      specialty: 'Gin cocktails; music; small snacks.',
      anecdotes: [
        { text: 'October 2025: "The carefully arranged five Bose speakers play a selection of exquisite chill songs, both Japanese and international, curated by the owner."', source: R + 'B515146128/' },
        { text: 'July 2026: "I was truly impressed by the eggplant with eggplant dressing."', source: R + 'B532240279/' },
      ],
      japanese_sources_summary: '食べログ: SOMEWHERE、バー、中京区寺町通丸太町下御霊町631 岡崎ビル2F、神宮丸太町から447m、月・火・水・土・日16:00〜24:00、金19:00〜24:00、木曜休み、不定休、祝日の翌日は19時から、カード・QR不可。口コミ (2025年10月〜2026年7月、英語、3件): 蒸留酒が中心の音楽のバー、店主の選曲と5台のBoseのスピーカー、丸太町通を望む大きな窓、カルダモンのオリジナルのジントニック、サウナジンのソーダ、ナンプラーの季節のフルーツのサラダ、トマトと昆布と山椒とペコリーノ、なすのなすドレッシング。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B515146128', 'B532240279'])) },
    cultural_comfort: { level: 'friendly', note: 'Small bar; good for solo visits; no cards.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区寺町通丸太町下御霊町631 岡崎ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated October 2025 and July 2026.' },
    pin_source: `Tabelog ${TB} (35.017548, 135.767406); GSI matched only the town 京都府京都市中京区下御霊前町 (about 69m), not the lot, so approximate; nearest pin kyoto_madam_koran 10.2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515146128/'],
    price_note: 'No prices given; about ¥2,000–4,000 per person (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Cardamom gin and tonic (original)', '', 'Drink', 'ask', 'ask', 'October 2025.', 'cardamom_gt'),
      it('', '', 'Seasonal fruit salad with nam pla', '', 'Snack', 'ask', 'no', 'October 2025.', 'fruit_salad'),
      it('', '', 'Eggplant with eggplant dressing', '', 'Snack', 'ask', 'ask', 'July 2026.', 'eggplant'),
    ] }, {
    cuisine: '蒸留酒を中心にした小さな音楽のバー。店主が選ぶチルな曲を5台のBoseのスピーカーで、工夫のあるつまみも少し (食べログ、2025〜2026年の口コミ)・カルダモンのオリジナルのジントニック、キウイと岩塩の「サウナジン」のソーダ (2025年10月)・ナンプラーを効かせた季節のフルーツのサラダ、トマトと昆布、山椒、ペコリーノ (2025年10月)・なすのなすドレッシング (2026年7月)',
    neighborhood: '寺町丸太町。神宮丸太町から447m',
    gf_detail: '要確認: 飲み物中心のバー。口コミのつまみ (ナンプラーのフルーツのサラダ、トマトと昆布とペコリーノ、なすのなすドレッシング) にグルテンの説明はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認: なすの料理やフルーツのサラダはあるが、ナンプラー (魚醤) やペコリーノを使うものもある (2025〜2026年の口コミ)。',
    notes: '[音楽のバー・寺町丸太町、16時からジンといい音楽] 丸太町通に窓が開いた、くつろげる2階のバー。オリジナルのジントニック、気の利いた小さなつまみ、Boseのスピーカー5台から流れる選び抜かれた曲。2,000〜4,000円ほど。カード不可。木曜休み。',
  });
}

// ================================================================ an.
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044800/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '22:00']);
  put({
    id: 'kyoto_an_marutamachi', name: 'an.', category: 'OMNI',
    lat: 35.017307, lng: 135.765287, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the menu centres on homemade-bread French toast and toast plates (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French toast with egg custard, bacon, cheese, mascarpone and ice cream; milk teas and lattes (2026 reviews).',
    hours_raw: 'Tabelog: daily 8:00–22:00; closing days vary. Reservations taken. Cards, IC cards and QR codes. Non-smoking. Sofas, tables and a counter in a Taisho-romantic machiya filled with art and antiques. Opened in spring 2026 (April 2026 review: 1 April). On Marutamachi-dori east of Tominokoji, south of the Imperial Palace, 530 m from Marutamachi Station.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi-dori by Tominokoji — south of the Imperial Palace',
    cuisine: 'A machiya café with Taisho-romantic decor serving thick homemade-bread French toast from 8 am (Tabelog; April–October 2026 reviews) · French toast plate ¥1,400 with salad and yogurt; toppings such as fried egg or avocado-cheese +¥200 each, grilled corn butter +¥300, caramelised banana, fresh fig (July–September 2026) · toast plate ¥1,200 · dessert French toasts ¥1,300: caramel cinnamon, tiramisu chocolate; fig and honey mascarpone (2026) · peach kakigori with milk-tea sauce (July 2026) · hand-drip coffee; coconut coffee ¥750; sakura soda ¥750; royal milk tea',
    website: null, gmaps: gm('an. 丸太町 カフェ'), menu_url: null,
    notes: '[Café · Marutamachi-Tominokoji, French toast in a Taisho-style machiya] A new, antique-filled machiya café open 8 am–10 pm: thick homemade-bread French toast with savoury or fruit toppings, hand-drip coffee and seasonal kakigori. Plates about ¥1,400–2,000. Generous — come hungry.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened in spring 2026 (reviews give 1 April, one says March) in a renovated machiya decorated with art and antiques in a Taisho-romantic style, with sofas and an Italian-style table (2026 reviews). One September 2026 diner found the custard not fully soaked through and the portion tiring.',
      philosophy: null,
      specialty: 'Homemade-bread French toast.',
      anecdotes: [
        { text: 'July 2026: "The French toast, made with homemade bread, is incredibly thick yet surprisingly fluffy. The savory aroma of grilled corn combined with the richness of butter and a hint of salt created a delightful sweet and savory flavor."', source: R + 'B532895384/' },
        { text: 'May 2026: "This elegant Kyoto townhouse café, located south of the Imperial Palace, is adorned with art and antiques, exuding a sense of Taisho Roman."', source: R + 'B529036345/' },
        { text: 'September 2026: "The French toast was quite thick, and in some parts, the custard mixture hadn\'t fully soaked through… I found myself getting a bit tired of it halfway through."', source: R + 'B537318222/' },
      ],
      japanese_sources_summary: '食べログ: an.、カフェ、中京区丸太町富小路東入338、丸太町から530m、毎日8:00〜22:00、定休日は変動、予約可、カード・電子マネー・QR可、禁煙。口コミ (2026年4〜10月、英語): 2026年春に開店の大正ロマン風の町家カフェ、アートと骨董、自家製パンの厚いフレンチトースト、フレンチトーストのプレート1,400円 (サラダとヨーグルト、目玉焼きやアボカドチーズ+200円、焼きとうもろこしバター+300円、キャラメルバナナ、いちじく)、トーストのプレート1,200円、キャラメルシナモンとティラミスチョコのフレンチトースト1,300円、桃のかき氷、ハンドドリップのコーヒー、ココナッツコーヒー750円、桜ソーダ750円、生地の染み込みが足りない・量が多いとの声 (2026年9月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B526374921', 'B529036345', 'B531390017', 'B532895384', 'B533642952', 'B534866443', 'B534944358', 'B536308230', 'B537318222', 'B538716662'])) },
    cultural_comfort: { level: 'friendly', note: 'Calm café from 8 am; large portions.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区丸太町富小路東入338',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened spring 2026) with reviews dated April to October 2026.' },
    pin_source: `Tabelog ${TB} (35.017307, 135.765287); the address gives a street direction and lot (丸太町富小路東入338) but no town name, and GSI matches only 中京区, so approximate; the Tabelog point sits on Marutamachi-dori east of Tominokoji as the address says; nearest pin kyoto_kawa_coffee 18.0m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529036345/', R + 'B534866443/'],
    price_note: 'Prices from May and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'French toast plate', '¥1,400', 'Main', 'no', 'no', '2026; toppings +¥200–300.', 'french_toast_plate'),
      it('', '', 'Toast plate', '¥1,200', 'Main', 'no', 'no', 'May 2026.', 'toast_plate'),
      it('', '', 'Caramel cinnamon French toast', '¥1,300', 'Dessert', 'no', 'no', 'May 2026.', 'caramel_ft'),
      it('', '', 'Sakura soda', '¥750', 'Drink', 'ask', 'ask', 'September 2026.', 'sakura_soda'),
    ] }, {
    cuisine: '大正ロマンの町家カフェ。朝8時から自家製パンの厚いフレンチトースト (食べログ、2026年4〜10月の口コミ)・サラダとヨーグルト付きのフレンチトーストのプレート1,400円。目玉焼きやアボカドチーズ各+200円、焼きとうもろこしバター+300円、キャラメリゼのバナナ、生のいちじくなど (2026年7〜9月)・トーストのプレート1,200円・デザートのフレンチトースト1,300円: キャラメルシナモン、ティラミスチョコ、いちじくとはちみつマスカルポーネ (2026年)・ミルクティーのソースの桃のかき氷 (2026年7月)・ハンドドリップのコーヒー、ココナッツコーヒー750円、桜ソーダ750円、ロイヤルミルクティー',
    neighborhood: '丸太町通、富小路の東。御所の南',
    gf_detail: 'グルテンフリーではない: 自家製パンのフレンチトーストとトーストのプレートが中心 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 卵液のフレンチトースト、ベーコン、チーズ、マスカルポーネ、アイス、ミルクティーやラテ (2026年の口コミ)。',
    notes: '[カフェ・丸太町富小路、大正風の町家でフレンチトースト] 8時から22時まで開く、骨董の並ぶ新しい町家カフェ。自家製パンの厚いフレンチトーストに甘い・しょっぱいトッピング、ハンドドリップのコーヒー、季節のかき氷。プレートは1,400〜2,000円ほど。量が多いのでお腹を空かせて。',
  });
}

// ================================================================ 京都七条焼肉酒場 やまだるま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26007534/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yamadaruma_nanajo', name: '京都七条焼肉酒場 やまだるま (Yamadaruma Yakiniku, Shichijo)', category: 'OMNI',
    lat: 34.989406, lng: 135.766293, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: marinated meats, soy- and miso-based sauces, wasabi soy sauce and cold noodles (2022–2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku of beef, pork, chicken and offal (2022–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 17:00–23:00 (L.O. 22:30); closed Wednesday. Reservations taken. SMOKING ALLOWED (Tabelog); reviewers say the ventilation is poor and clothes and hair smell of smoke (October 2024, May 2026). Cards; no e-money or QR codes. 31 seats: 7 at the 1st-floor counter, 24 on tatami upstairs (steep stairs). By Shichijo Ohashi bridge, 3 min from Keihan Shichijo.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shichijo Ohashi — 3 min from Keihan Shichijo',
    cuisine: 'A good-value yakiniku sakaba by the Kamo River, offering meats with tare, salt or a wasabi-soy dip and a sake list (Tabelog; 2022–2026 reviews) · premium beef; large loin cuts with wasabi soy; kalbi with salt or miso sauce; salted tongue with a separate plate of green onions (2025–2026) · chicken neck grilled with sansho; pork, chicken and beef liver (2025) · stone-pot bibimbap; Korean cold noodles; cucumber kimchi; tofu salad with plum (2022–2025) · lemon and spicy dipping sauces; desserts such as chocolate banana, zuccotto, vanilla ice cream (October 2026)',
    website: null, gmaps: gm('京都七条焼肉酒場 やまだるま'), menu_url: null,
    notes: '[Yakiniku · Shichijo Ohashi, a sake-friendly grill bar] A friendly two-floor yakiniku near Keihan Shichijo: premium beef and loin with wasabi soy, salted tongue, sansho chicken neck and stone-pot bibimbap, with good sake. About ¥4,000–6,000. Smoky — dress for it. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A sister of the izakaya やまだるま on Rokkaku (kyoto_yamadaruma_rokkaku in this guide), whose record notes this shop. Reviewers find the meat good for the price and the service good (2023–2025); the recurring complaint is smoke from poor ventilation (2024, 2026).',
      philosophy: null,
      specialty: 'Yakiniku with wasabi soy; sake.',
      anecdotes: [
        { text: 'April 2025: "You can enjoy the meat either with sauce or in a refreshing style with wasabi and soy sauce… our total bill was under JPY 12,000 for two people."', source: R + 'B505555208/' },
        { text: 'September 2025: "I enjoyed solo yakiniku at the counter on the first floor. The incredibly tender premium beef melted in my mouth."', source: R + 'B514306768/' },
        { text: 'October 2024: "The quality and service were good, but the ventilation was so poor that everything, including my clothes and hair, ended up smelling like yakiniku."', source: R + 'B493486441/' },
      ],
      japanese_sources_summary: '食べログ: 京都七条焼肉酒場 やまだるま、焼肉・ホルモン、下京区七条通加茂川筋西入稲荷町459、京阪七条から徒歩3分、月・火・木〜日17:00〜23:00 (L.O.22:30)、水曜休み、予約可、31席 (1階カウンター7・2階座敷24)、喫煙可、カード可、電子マネー・QR不可。口コミ (2022年8月〜2026年10月、英語): 七条大橋近くの焼肉酒場、タレ・塩・わさびじょうゆ、上質な牛、ロース、カルビ (塩・味噌)、ねぎ塩タン、せせりの山椒焼き、レバー、石焼ビビンバ、冷麺、きゅうりキムチ、梅の豆腐サラダ、レモンと辛いタレ、デザート、2人で12,000円未満 (2025年4月)、換気が悪く煙のにおいがつくとの声 (2024年10月、2026年5月)、2階の階段が急。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B451386239', 'B473551277', 'B478567377', 'B493486441', 'B505555208', 'B510616551', 'B514306768', 'B528475500', 'B538206271'])) },
    cultural_comfort: { level: 'friendly', note: 'Counter for solo diners; smoky; steep stairs to the tatami floor.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通加茂川筋西入稲荷町459',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (34.989406, 135.766293); GSI lot 京都府京都市下京区稲荷町459番地 about 7m away; nearest pin (Google place) 42.2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505555208/', R + 'B514306768/', R + 'B538206271/'],
    price_note: 'No dish prices given; about ¥4,000–6,000 per person (2023–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Premium beef loin with wasabi soy', '', 'Yakiniku', 'ask', 'no', 'April and September 2025.', 'loin_wasabi'),
      it('', '', 'Salted tongue with green onions', '', 'Yakiniku', 'ask', 'no', '2023 and October 2026.', 'negi_shio_tan'),
      it('', '', 'Chicken neck with sansho', '', 'Yakiniku', 'ask', 'no', 'September 2025.', 'seseri_sansho'),
      it('', '', 'Stone-pot bibimbap', '', 'Rice', 'ask', 'no', 'September 2025.', 'ishiyaki_bibimbap'),
      it('', '', 'Korean cold noodles', '', 'Noodles', 'no', 'no', 'June 2023.', 'reimen'),
    ] }, {
    cuisine: '鴨川近くの手頃な焼肉酒場。タレ、塩、わさびじょうゆで肉を、日本酒とともに (食べログ、2022〜2026年の口コミ)・上質な牛肉、わさびじょうゆの大きなロース、塩や味噌のカルビ、ねぎを別皿で添えたタン塩 (2025〜2026年)・せせりの山椒焼き、豚・鶏・牛のレバー (2025年)・石焼ビビンバ、冷麺、きゅうりのキムチ、梅の豆腐サラダ (2022〜2025年)・レモンと辛いタレ、チョコバナナ、ズコット、バニラアイスなどのデザート (2026年10月)',
    neighborhood: '七条大橋のそば。京阪七条から徒歩3分',
    gf_detail: 'グルテンフリーではない: 漬け込みの肉、しょうゆや味噌のタレ、わさびじょうゆ、冷麺 (2022〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 牛、豚、鶏、ホルモンの焼肉 (2022〜2026年の口コミ)。',
    notes: '[焼肉・七条大橋、日本酒も楽しめる焼肉酒場] 京阪七条近くの気さくな2フロアの焼肉。わさびじょうゆで上質な牛やロース、タン塩、せせりの山椒焼き、石焼ビビンバを、おいしい日本酒とともに。4,000〜6,000円ほど。煙が多いので服装に注意。水曜休み。',
  });
}

save();
