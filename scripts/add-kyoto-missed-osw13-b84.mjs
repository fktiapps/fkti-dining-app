// Kyoto priority (kyoto-missed), worker osw13, batch 84 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: ANGEL LIBRARY, 一豊亭 四条店, とり処 山本, 京旬 いちえ.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-84');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041932', 'too thin to verify: 祇園炭火焼とり HYUMA has a single Tabelog review (August 2025) with no text, and its website field is only a Google redirect to a Tripadvisor page');
skip('26045586', 'too thin to verify: 肉の、ますいち。 opened 2026-10-13 and has one review; that review calls it a new brand of the 益市 (Masuichi) group replacing the group\'s earlier shop on the site — if counted with the four 益市-named shops it would be a fifth ますいち name, so flagged to the coordinator rather than drafted');
skip('26035560', 'brand already in data: mumokuteki 京都店 is the ground-floor grocery and goods shop (groceries, dried fruit, jams, take-away bento) of the ヒューマンフォーラムビル, whose café is already in data as "mumokuteki cafe & foods"; not a separate dining place');

// ================================================================ ANGEL LIBRARY
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024820/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.cacaomarket.jp';
  const H = day(['11:00', '17:30']);
  put({
    id: 'kyoto_angel_library_cacao_market', name: 'ANGEL LIBRARY', category: 'OMNI',
    lat: 35.005132, lng: 135.772489, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: brownies, tiramisu, quiche and cookie gelato (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chocolate desserts with mascarpone, cream and gelato (2025–2026 reviews).',
    hours_raw: 'Tabelog: Wed–Sun 11:00–17:30; closed Monday and Tuesday; hours may change. No reservations. You order and pay at the register of CACAO MARKET by MarieBelle on the ground floor, receive a PIN code, and let yourself in through a coded door at the back, down to a semi-basement room (Tabelog; 2025–2026 reviews). Non-smoking; counter and sofa seats; windows at river level. Cards, e-money and QR (PayPay, December 2025). Opened 10 July 2014 (Tabelog). A July 2026 reviewer waited about 15 minutes at 14:30 on a Sunday.',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawabata-dori by the Kamo River, north of Shijo — 1–3 min walk from Gion-Shijo',
    cuisine: 'A hidden chocolate café below the CACAO MARKET by MarieBelle shop, styled as a library where angels study chocolate (2020–2026 reviews) · Ice Brownie with a choice of gelato ¥1,430, drink set +¥330 (February 2025); with drink set ¥1,760 (July 2026) · Tiramisu Diary — a book-shaped tiramisu of Hokkaido mascarpone and cream soaked in espresso; Triple Angel Gelato with brownie (July 2025) · 12 gelato flavours, e.g. matcha cookie, raspberry, strawberry millefeuille (2025–2026) · Cacao Market Plate with a drink (May 2025); quiche (March 2025); fondant chocolate (September 2026) · iced chocolate white mocha with pecans (September 2025); chocolate rose tea (February 2025)',
    website: SITE, gmaps: gm('ANGEL LIBRARY CACAO MARKET 京都'), menu_url: null,
    notes: '[Hidden chocolate café · Kamo riverside at Shijo, a coded door to an angels\' library] Order at the CACAO MARKET by MarieBelle chocolate shop, get a PIN code, and go down through a secret door to a dim, book-lined room with river-level windows: brownies with gelato, a book-shaped tiramisu and rich chocolate drinks. One June 2026 diner found the taste only average for the price. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 10 July 2014 (Tabelog) beneath CACAO MARKET by MarieBelle, the Gion shop of the New York chocolatier whose Kyoto main shop is already listed separately. Reviewers describe the ritual of ordering upstairs, getting a code and a seat card named after an angel, and a room with Western books, classical music and the river outside; one says it appears in the manga "Kyoto Teramachi Sanjo no Holmes" (May 2025). Criticism: "a bit pricey" (March 2025), and in June 2026 "the taste was just average" and the cups did not match the theme.',
      philosophy: null,
      specialty: 'Ice Brownie; Tiramisu Diary.',
      anecdotes: [
        { text: 'July 2025: "The setting is that of a hideaway for angels studying to make delicious chocolate."', source: R + 'B433646170/' },
        { text: 'July 2026: "There are windows in the café, and outside flows a river at almost eye level, creating a strangely enchanting scene."', source: R + 'B532025724/' },
        { text: 'March 2025: "It can be a bit pricey, but it\'s a hidden gem where you can find a seat even during busy seasons, as the entrance is somewhat tricky."', source: R + 'B504214597/' },
      ],
      japanese_sources_summary: '食べログ: ANGEL LIBRARY、カフェ、東山区常盤町165-2 B1F、祇園四条駅から185m、水〜日 11:00〜17:30、月・火休み、営業時間は変わることがある、予約不可、禁煙、カウンター・ソファ席、カード・電子マネー・QR可、サイト cacaomarket.jp、2014年7月10日オープン、入口は暗証番号で開くので CACAO MARKET by MarieBelle で番号を受け取る。口コミ (2020年12月〜2026年9月、英語): 1階で注文と支払いをして番号をもらい地下へ、天使が勉強する図書館という設定、天使の名前の席札、川が目の高さに見える窓、アイスブラウニー1,430円・ドリンクセット330円増し、ドリンクセット付き1,760円、ティラミス、ジェラート12種、プレート、キッシュ、フォンダンショコラ、チョコレートのドリンク、やや高め、味は普通との声 (2026年6月)。',
      confidence: 'medium', sources: [TB, SITE, R + 'B433646170/', R + 'B500566937/', R + 'B502531536/', R + 'B504214597/', R + 'B507161098/', R + 'B510910016/', R + 'B513043856/', R + 'B524006228/', R + 'B529762625/', R + 'B532025724/', R + 'B532714589/', R + 'B535300410/'] },
    cultural_comfort: { level: 'japanese', note: 'Order and pay at the shop upstairs to get the door code.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区常盤町165-2 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005132, 135.772489); cross-checked: GSI 京都府京都市東山区常盤町165番地 (lot) 16m; nearest pin kyoto_gion_mikaku 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B510910016/', R + 'B532025724/'],
    price_note: 'Prices from February 2025 and July 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Ice Brownie with one gelato', '¥1,430', 'Dessert', 'no', 'no', 'February 2025.', 'brownie_gelato'),
      it('', '', 'Drink set add-on', '+¥330', 'Drink', 'ask', 'ask', 'February 2025.', 'drink_set'),
      it('', '', 'Ice Brownie with drink set', '¥1,760', 'Dessert', 'no', 'no', 'July 2026.', 'brownie_drink_set'),
      it('', '', 'Tiramisu Diary', null, 'Dessert', 'no', 'no', 'July 2025; June and December 2026.', 'tiramisu'),
    ] }, {
    cuisine: 'CACAO MARKET by MarieBelle の地下にある隠れたチョコレートのカフェで、天使がチョコレートを学ぶ図書館という設定 (2020〜2026年の口コミ)・ジェラートを選べるアイスブラウニー1,430円、ドリンクセット330円増し (2025年2月)、ドリンクセット付き1,760円 (2026年7月)・本の形のティラミス、北海道のマスカルポーネと生クリームにエスプレッソ、ブラウニー付きのジェラート3種 (2025年7月)・ジェラート12種、抹茶クッキー、ラズベリー、いちごミルフィーユなど (2025〜2026年)・プレートとドリンク (2025年5月)、キッシュ (2025年3月)、フォンダンショコラ (2026年9月)・ピーカンナッツのアイスチョコレートホワイトモカ (2025年9月)、チョコレートのローズティー (2025年2月)',
    neighborhood: '四条の北、鴨川沿いの川端通。祇園四条から徒歩1〜3分',
    gf_detail: 'グルテンフリーではない: ブラウニー、ティラミス、キッシュ、クッキーのジェラート (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: マスカルポーネ、生クリーム、ジェラートを使うチョコレートのデザート (2025〜2026年の口コミ)。',
    notes: '[隠れたチョコレートカフェ・四条の鴨川沿い、暗証番号の扉の先の天使の図書館] CACAO MARKET by MarieBelle で注文して暗証番号をもらい、秘密の扉から下りると、本の並ぶ薄暗い部屋に川の高さの窓。ジェラート付きのブラウニー、本の形のティラミス、濃いチョコレートのドリンク。値段の割に味は普通という声も (2026年6月)。月・火休み。',
  });
}

// ================================================================ 一豊亭 四条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035620/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kazutoyotei.com/';
  const H = day(['11:30', '14:30'], ['17:00', '20:30']);
  put({
    id: 'kyoto_kazutoyotei_shijo', name: '一豊亭 四条店 (Kazutoyo Tei Shijo)', category: 'OMNI',
    lat: 35.004757, lng: 135.765066, cuisine_type: 'unagi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kabayaki eel with a soy-based sauce; ask about shirayaki (plain-grilled) eel (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant (Tabelog; reviews).',
    hours_raw: 'Tabelog: daily 11:30–14:30 (last order 14:15) and 17:00–20:30 (last order 20:15); summer break 16–18 August 2026. Reservations taken; bookings more than 10 minutes late are cancelled. No charge — Tabelog, Japanese original 「なし」. 44 seats; non-smoking; wheelchair access; free Wi-Fi. English menu; English-, Chinese- and Korean-speaking staff. Take-away and delivery. Cards, transit IC, e-money and QR (incl. Alipay and WeChat Pay). On Tomikoji just above Shijo, near Nishiki Market. Opened 15 April 2021 (Tabelog). Reviewers up to August 2026 call it Unagi Sora (うなぎ昊); the operator\'s old domain unagisora.co.jp now redirects to the 一豊亭 site, which lists this 四条店 and a 河原町店.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tomikoji just north of Shijo, by Nishiki Market — 5 min walk from Kawaramachi exit 11',
    cuisine: 'An eel restaurant offering named farmed-eel brands beside domestic eel (Tabelog; 2023–2026 reviews) · brands on the menu: Tenku no Unagi, Tosa no Igossou, Chikushi Kin Unagi, and wild Lake Biwa eel ¥12,000 (March 2023; April 2026) — but several reviewers found only Kagoshima eel or two kinds available (2023; November 2025; January, March, May and July 2026) · Tenku unaju ¥6,700 (August 2026); unaju (upper) ¥5,500 (August 2026); served in a two-tier box with sauce on the side · liver soup +¥150 (November 2025) or +¥200 (August 2026); clear soup with yuba; eel chawanmushi; unagi tamago; hitsumabushi; uzaku (2023–2026) · rice blended with the Kyoto rice shop Hachidaime Gihei (April and August 2026)',
    website: SITE, gmaps: gm('一豊亭 四条店 富小路'), menu_url: TB + 'dtlmenu/',
    notes: '[Unagi · Tomikoji by Nishiki, branded eels in a two-tier box] A calm, wood-panelled eel house a step from Nishiki Market, serving unaju in a two-tier lacquer box with the sauce on the side, and branded eels like Tenku no Unagi when in stock — often only Kagoshima eel is available. Opinion splits: some praise fluffy, fatty eel, others call it pricey and average, aimed at tourists. Open daily, lunch and early dinner.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 15 April 2021 (Tabelog) and known to reviewers as Unagi Sora; a June 2026 reviewer had backed its crowdfunding campaign as a new restaurant during the pandemic. Tabelog and the operator\'s site now give the name 一豊亭 (KAZUTOYOTEI), with a second shop in Kawaramachi. Reviews split: praise for fluffy, fatty eel and good liver soup (2026), against "just an average eel restaurant, benefiting mainly from its good location" (November 2025), a "soggy texture" (January 2026) and a sauce "lacking depth" (July 2026).',
      philosophy: null,
      specialty: 'Unaju with branded eel.',
      anecdotes: [
        { text: 'August 2026: "Currently, if you book through Tabelog, there\'s a drink coupon available… When I mentioned I hadn\'t used it, they kindly offered me a drink worth ¥550 for free."', source: R + 'B533422460/' },
        { text: 'June 2026: "After connecting through a crowdfunding campaign for a new restaurant during the COVID-19 pandemic, I finally had the opportunity to visit Unagi Sora for lunch after five years."', source: R + 'B529527556/' },
        { text: 'May 2026: "The menu listed 5 to 6 types of eel, but only 2 were available…"', source: R + 'B528425187/' },
      ],
      japanese_sources_summary: '食べログ: 一豊亭 四条店、うなぎ・日本料理、中京区富小路通四条上ル西大文字町602、河原町駅11番出口から徒歩5分、毎日 11:30〜14:30 (L.O. 14:15)・17:00〜20:30 (L.O. 20:15)、2026年8月16〜18日は夏休み、予約可 (10分遅れで取消)、原文でチャージ「なし」、44席、禁煙、車椅子可、英語メニュー、英語・中国語・韓国語のスタッフ、テイクアウト・デリバリー、カード・交通系IC・電子マネー・QR可、2021年4月15日オープン、法人会員。公式サイト: 一豊亭 (KAZUTOYOTEI) 四条店と河原町店、旧ドメイン unagisora.co.jp から転送。口コミ (2023年3月〜2026年8月、英語): うなぎ昊 (Unagi Sora) として、天空のうなぎなどのブランドうなぎと国産うなぎ、品切れで鹿児島産のみの日が多い、天空うなぎのうな重6,700円、うな重 上5,500円、肝吸い150円・200円、湯葉のお吸い物、う巻き、茶碗蒸し、ひつまぶし、うざく、ご飯は Hachidaime Gihei と共同開発、たれは別添え、評価は分かれる (ふっくら、値段が高い、普通、べちゃっとした食感)。',
      confidence: 'medium', sources: [TB, SITE, R + 'B462256520/', R + 'B518481299/', R + 'B520156390/', R + 'B520865450/', R + 'B524767303/', R + 'B526470486/', R + 'B528425187/', R + 'B529527556/', R + 'B531101142/', R + 'B532033340/', R + 'B533422460/', R + 'B534872880/'] },
    cultural_comfort: { level: 'english', note: 'English menu; English, Chinese and Korean-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区富小路通四条上ル西大文字町602',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing (now under the name 一豊亭 四条店) with reviews dated through August 2026; operator site lists the shop.' },
    pin_source: `Tabelog ${TB} (35.004757, 135.765066); cross-checked: GSI 京都府京都市中京区西大文字町602番地 (lot) 22m; nearest pin kyoto_hyakkei_tominokoji 8.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533422460/', R + 'B534872880/', R + 'B526470486/'],
    price_note: 'Prices from 2025–2026 reviews (tax included where stated).', last_checked: TODAY, items: [
      it('', '', 'Tenku no Unagi unaju', '¥6,700', 'Unaju', 'no', 'no', 'August 2026; not always in stock.', 'unaju_brand'),
      it('', '', 'Unaju (upper)', '¥5,500', 'Unaju', 'no', 'no', 'August 2026.', 'unaju'),
      it('', '', 'Wild Lake Biwa eel', '¥12,000', 'Unaju', 'no', 'no', 'April 2026.', 'wild_eel'),
      it('', '', 'Liver soup (add-on)', '+¥200', 'Soup', 'ask', 'no', 'August 2026; +¥150 in November 2025.', 'kimosui'),
    ] }, {
    cuisine: 'ブランドうなぎと国産うなぎのうなぎ店 (食べログ、2023〜2026年の口コミ)・メニューには天空のうなぎ、Tosa no Igossou、Chikushi Kin Unagi、琵琶湖の天然うなぎ12,000円 (2023年3月、2026年4月)。ただし鹿児島産だけ、または2種類だけの日が多い (2023年、2025年11月、2026年1・3・5・7月)・天空うなぎのうな重6,700円 (2026年8月)、うな重 上5,500円 (2026年8月)。2段のお重で、たれは別添え・肝吸い150円増し (2025年11月) または200円増し (2026年8月)、湯葉のお吸い物、う巻き、うなぎの茶碗蒸し、ひつまぶし、うざく (2023〜2026年)・ご飯は京都の米屋 Hachidaime Gihei と共同開発 (2026年4月・8月)',
    neighborhood: '四条のすぐ北の富小路、錦市場の近く。河原町駅11番出口から徒歩5分',
    gf_detail: 'グルテンフリーではない: 醤油ベースのたれの蒲焼き。白焼きは要確認 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: うなぎの店 (食べログ、口コミ)。',
    notes: '[うなぎ・錦近くの富小路、2段のお重のブランドうなぎ] 錦市場のすぐそばの落ち着いた木の内装のうなぎ店。2段の漆のお重にたれは別添えのうな重、在庫があれば天空のうなぎなどのブランドうなぎも。鹿児島産だけの日も多い。ふっくら脂がのっているという声と、高くて普通、観光客向けという声に分かれる。毎日、昼と早めの夜。',
  });
}

// ================================================================ とり処 山本
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007318/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_tori_dokoro_yamamoto_tominokoji', name: 'とり処 山本 (Tori Dokoro Yamamoto)', category: 'OMNI',
    lat: 35.002414, lng: 135.764837, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: salted yakitori and chicken sashimi may suit, but tsukune, fried gizzards and soy dips may not; one-man counter, so ask when booking (2016–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken sashimi and yakitori (2016–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 17:00–23:00; closed Wednesday; hours may change. Reservations taken — book by 20:00 (Tabelog). Reviewers say it closes early in the evening (March 2024) and that the chef "tends to get sleepy around 8 PM" (July 2026), so book and go early. About 5–6 counter seats. Smoking allowed. Cash only (no cards, no e-money). On the west side of Tomikoji below Ayanokoji. No rice dishes; the owner said bringing your own food is fine (March 2024). Raw chicken (sashimi) is served.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Tomikoji below Ayanokoji — 5 min walk from Shijo / Kawaramachi',
    cuisine: 'A tiny counter run by one man for chicken sashimi and yakitori (2016–2026 reviews) · chicken sashimi — breast, heart, neck as yukhoe, rare liver when in stock; a three-kind sashimi platter (2016–2026) · yakitori: neck, negima, wings, tsukune, gizzard (March 2025) · omakase ¥2,000 plus appetizer (March 2025); a recommended course ¥2,500 (March 2024) · two skewers about ¥700, fried gizzards about ¥550, three drinks about ¥1,500 (September 2022); bottled beer ¥500 (March 2025) · no rice dishes; hotpot for regulars on request (March 2024)',
    website: null, gmaps: gm('とり処 山本 富小路 綾小路'), menu_url: null,
    notes: '[Chicken sashimi & yakitori · Tomikoji at Ayanokoji, a one-man counter] A handful of counter seats where one veteran owner serves very fresh chicken sashimi and generous yakitori, with omakase from about ¥2,000. No rice — he lets you bring your own. Book ahead and go early: reviewers say the evening winds down around 8 PM. Cash only; smoking allowed. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers since 2016 say the owner runs the shop alone ("It seems the owner runs the place all by himself", October 2016). In March 2024 a reviewer wrote that he "appears young, but he has been working in Gion and has now been at this shop for around 25 years"; a July 2026 reviewer describes "the chef, who is over 80 years old", running it by himself. Reviewers praise a gentle, friendly host and chat at the counter.',
      philosophy: null,
      specialty: 'Chicken sashimi.',
      anecdotes: [
        { text: 'March 2024: "I learned that they don\'t serve rice dishes, so I asked the owner, and to my surprise, he said bringing in food is allowed!"', source: R + 'B482028621/' },
        { text: 'July 2026: "Just keep in mind that the chef tends to get sleepy around 8 PM, so plan accordingly."', source: R + 'B531015865/' },
        { text: 'October 2016: "Since I arrived early, he kindly let me use one seat for my bags, which ended up occupying half the space."', source: R + 'B225633172/' },
      ],
      japanese_sources_summary: '食べログ: とり処 山本、鶏料理・焼き鳥、中京区富小路通綾小路下ル西側、月・火・木〜日 17:00〜23:00、水曜休み、時間は変わることがある、予約可 (20時まで)、6席、喫煙可、カード・電子マネー不可。口コミ (2016年10月〜2026年7月、英語): 店主がひとりで営む小さなカウンター、鶏刺し (むね、ハツ、首のユッケ風、レバー)、刺身3種盛り、焼き鳥 (首、ねぎま、手羽、つくね、砂肝)、おまかせ2,000円とお通し、おすすめコース2,500円、串2本約700円、砂肝の唐揚げ約550円、瓶ビール500円、ご飯ものはなく持ち込み可、祇園で働いたのち約25年この店に (2024年3月)、80歳を超える店主 (2026年7月)、夜8時ごろには眠くなる (2026年7月)、予約して早めに。',
      confidence: 'medium', sources: [TB, R + 'B225633172/', R + 'B338438506/', R + 'B454562179/', R + 'B482028621/', R + 'B483432380/', R + 'B503441791/', R + 'B531015865/', R + 'B531236676/'] },
    cultural_comfort: { level: 'japanese', note: 'One-man counter; cash only; smoking allowed; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区富小路通綾小路下ル西側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.002414, 135.764837); address has no town or lot (富小路通綾小路下ル西側) — GSI resolves only to the ward, so marked approximate; nearest pin kyoto_kakimaru_ayanokoji 11.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503441791/', R + 'B482028621/', R + 'B454562179/'],
    price_note: 'Prices from 2022–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase (plus appetizer)', '¥2,000', 'Course', 'ask', 'no', 'March 2025.', 'omakase'),
      it('', '', 'Recommended course', '¥2,500', 'Course', 'ask', 'no', 'March 2024.', 'course'),
      it('', '', 'Fried gizzards', '≈¥550', 'Fried', 'no', 'no', 'September 2022.', 'fried_gizzard'),
      it('', '', 'Bottled beer', '¥500', 'Drink', 'no', 'ask', 'March 2025.', 'beer'),
    ] }, {
    cuisine: '店主ひとりの小さなカウンターで鶏刺しと焼き鳥 (2016〜2026年の口コミ)・鶏刺し (むね、ハツ、首のユッケ風、あればレバー)、刺身3種盛り (2016〜2026年)・焼き鳥: 首、ねぎま、手羽、つくね、砂肝 (2025年3月)・おまかせ2,000円とお通し (2025年3月)、おすすめコース2,500円 (2024年3月)・串2本約700円、砂肝の唐揚げ約550円、ドリンク3杯約1,500円 (2022年9月)、瓶ビール500円 (2025年3月)・ご飯ものはなし、常連には頼めば鍋も (2024年3月)',
    neighborhood: '富小路綾小路下ル。四条・河原町から徒歩5分',
    gf_detail: '要確認: 塩の焼き鳥や鶏刺しは合うかもしれないが、つくね、砂肝の唐揚げ、醤油のたれは不可の可能性。店主ひとりなので予約時に相談を (2016〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鶏刺しと焼き鳥 (2016〜2026年の口コミ)。',
    notes: '[鶏刺しと焼き鳥・富小路綾小路、店主ひとりのカウンター] わずかなカウンター席で、ベテランの店主がひとりで新鮮な鶏刺しと大ぶりの焼き鳥を出す。おまかせは2,000円ほどから。ご飯ものはなく持ち込み可。夜8時ごろには店じまいの雰囲気になるという声があるので、予約して早めに。現金のみ、喫煙可。水曜休み。',
  });
}

// ================================================================ 京旬 いちえ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044944/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://kyoto-ichie.com/'; const MENU = 'http://kyoto-ichie.com/menu'; const FOOD = 'http://kyoto-ichie.com/food';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_kyoshun_ichie_gion', name: '京旬 いちえ (Kyoshun Ichie)', category: 'OMNI',
    lat: 35.004317, lng: 135.773103, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, horse-mackerel fry, karaage and saikyo-miso fish on the menu; dashi-based dishes may still be possible — ask (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: everything builds on a bonito-and-Rishiri-kombu dashi (official site).',
    hours_raw: 'Tabelog: Mon–Sat 18:00–23:00; closed Sunday and holidays; dinner only for now; same-day bookings until 22:00. The official site gives dinner 18:00–25:00, closed Sunday. Appetizer ¥1,000 a person and one drink each — Tabelog, Japanese original 「お通し お一人様1000円、ワンドリンクオーダー制」. Seat-only bookings may be asked to choose about three à la carte dishes in advance. 16 seats: counter, tables and a private room (up to 10). Non-smoking. English, Chinese and Korean menus; English-speaking staff; children welcome. Cards, transit IC, e-money and QR. 2nd floor of UEDA BLD. II on Yamatooji above Shijo. Opened here 25 April 2026 (Tabelog) after a move; a July 2026 regular had come "since before the relocation".',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yamatooji just north of Shijo, Gion — 1 min walk from Gion-Shijo exit 7',
    cuisine: 'A Gion kappo of Kyoto seasonal food and charcoal grilling, à la carte or by course (official site; Tabelog; 2026 reviews) · ¥11,000 course of nine parts — otoshi, sashimi, a warm dish, grilled fish, a fried dish, Kujo leek and mushroom ohitashi, charcoal-grilled meat, rice and dessert; book two days ahead (official menu) · sashimi: bluefin nakaochi and wild hirame ¥1,600; wild hiramasa and octopus ¥1,400; mixed platter from ¥1,800 (official menu) · charcoal-grilled A4-plus Kuroge Wagyu sirloin ¥4,800, ichibo ¥3,800; tuna cheek ¥1,800; saikyo-miso Spanish mackerel ¥1,300 (official menu) · wakatake-ni with Kyoto bamboo shoots ¥2,000; dashimaki ¥900–1,100; horse-mackerel fry with house Kyoto-pickle tartar ¥1,600; shrimp and seasonal vegetable tempura ¥2,000 (official menu) · fried shrimp with a pickle tartar, a favourite of one regular (July 2026) · Tango Koshihikari rice; hamo yakishimo in summer, kabura-mushi in winter (official site) · fig spring rolls and steak (October 2026)',
    website: SITE, gmaps: gm('京旬いちえ 富永町'), menu_url: MENU,
    notes: '[Kappo · Gion above Shijo, charcoal and Kyoto seasons] A 16-seat second-floor kappo, newly moved, pairing Kyoto vegetables and a golden kombu-bonito dashi with charcoal-grilled Wagyu and fish, à la carte or as an ¥11,000 course. A long-time regular singles out the fried shrimp with pickle tartar. ¥1,000 appetizer charge plus one drink each. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reopened at this address on 25 April 2026 (Tabelog) after a relocation; the previous location is not given. The official site says the owner makes a clear golden dashi from bonito and Rishiri kombu every day, buys only A4-plus Kuroge Wagyu, uses Sea of Japan fish for sashimi and Nagasaki fish for grilling, takes Kyoto vegetables from a long-standing greengrocer, and chose Tango Koshihikari rice after tasting many kinds. A July 2026 diner praised "the hospitality from the owner and his wife".',
      philosophy: 'Daily dashi as the base of everything (official site).',
      specialty: 'Charcoal-grilled Wagyu; seasonal Kyoto dishes.',
      anecdotes: [
        { text: 'July 2026, a regular: "A standout dish is the fried shrimp, which leaves a lasting impression. The accompanying tartar sauce is infused with pickles, providing a unique flavor and texture that can only be found here."', source: R + 'B535967017/' },
        { text: 'July 2026: "I dined alone at the counter. The hospitality from the owner and his wife was very warm and attentive."', source: R + 'B531931509/' },
      ],
      japanese_sources_summary: '公式サイト: 京旬いちえ、東山区大和大路通四条上る富永町144 UEDA BLD. II 2階、ディナー 18:00〜25:00 (当面の間、ディナー営業のみ)、日曜休み、良質な鰹と利尻昆布の黄金色の出汁、A4ランク以上の国産黒毛和牛、造りは日本海、焼きもの・出汁ものは九州長崎産、京野菜、丹後の特A米「コシヒカリ」、11,000円コース (二日前までに予約)、本マグロ中落ち1,600円、天然平目1,600円、黒毛和牛炭焼きサーロイン4,800円、イチボ3,800円、若竹煮2,000円、アジフライ 自家製京つけものタルタル1,600円、店主お任せ エビと季節野菜の天盛り2,000円、鱧の焼霜、かぶら蒸し。食べログ: 京旬 いちえ、日本料理・居酒屋・創作料理、月〜土 18:00〜23:00、日祝休み、原文で「お通し お一人様1000円、ワンドリンクオーダー制」、16席、個室 (10名まで)、禁煙、多言語メニュー、カード・交通系IC・電子マネー・QR可、2026年4月25日オープン、法人会員。口コミ (2026年7月〜10月、英語): 店主と奥さんの温かいもてなし、移転前からの常連、漬物入りのタルタルのフライ、いちじくの春巻き、ステーキ、親しみやすいスタッフ。',
      confidence: 'medium', sources: [SITE, MENU, FOOD, TB, R + 'B531931509/', R + 'B535967017/', R + 'B537827682/', R + 'B538287220/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus; English-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路通四条上る富永町144 UEDA BLD. II 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing (opened here April 2026) with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004317, 135.773103); cross-checked: GSI 京都府京都市東山区富永町144番地 (lot) 54m; nearest pin kyr_nibodamashii_ramen_gion_ 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Prices from the official menu page (November 2026).', last_checked: TODAY, items: [
      it('11,000円 コース', '', '¥11,000 course (book two days ahead)', '¥11,000', 'Course', 'no', 'no', 'Official menu.', 'course'),
      it('本マグロ 中落ち', '', 'Bluefin tuna nakaochi', '¥1,600', 'Sashimi', 'ask', 'no', 'Official menu.', 'tuna_sashimi'),
      it('黒毛和牛 炭焼き サーロイン', '', 'Charcoal-grilled Kuroge Wagyu sirloin', '¥4,800', 'Charcoal grill', 'ask', 'no', 'Official menu.', 'wagyu_sirloin'),
      it('黒毛和牛 炭焼き イチボ', '', 'Charcoal-grilled Kuroge Wagyu ichibo', '¥3,800', 'Charcoal grill', 'ask', 'no', 'Official menu.', 'wagyu_ichibo'),
      it('若竹煮', '', 'Wakatake-ni (bamboo shoots and wakame)', '¥2,000', 'Simmered', 'ask', 'no', 'Official menu.', 'wakatakeni'),
      it('アジフライ 自家製京つけものタルタル', '', 'Horse-mackerel fry with house Kyoto-pickle tartar', '¥1,600', 'Fried', 'no', 'no', 'Official menu.', 'aji_fry'),
      it('店主お任せ エビと季節野菜の天盛り', '', 'Shrimp and seasonal vegetable tempura (owner\'s choice)', '¥2,000', 'Fried', 'no', 'no', 'Official menu.', 'tempura'),
    ] }, {
    cuisine: '京の旬と炭火の祇園の割烹、単品とコース (公式サイト、食べログ、2026年の口コミ)・11,000円コース: お通し、お造り、温かいひと品、焼魚、揚げ物、九条葱ときのこのお浸し、炭焼のお肉、ご飯もの、デザート。二日前までに予約 (公式のお品書き)・本マグロ中落ちと天然平目1,600円、天然ヒラマサとマダコ1,400円、造り盛り合わせ1,800円〜 (公式のお品書き)・A4以上の黒毛和牛の炭焼きサーロイン4,800円、イチボ3,800円、マグロほほ肉の炭火炙り1,800円、鰆の西京焼き1,300円 (公式のお品書き)・京都産の筍の若竹煮2,000円、出し巻900〜1,100円、自家製京つけものタルタルのアジフライ1,600円、エビと季節野菜の天盛り2,000円 (公式のお品書き)・常連が挙げる漬物入りタルタルのエビフライ (2026年7月)・丹後のコシヒカリ、夏は鱧の焼霜、冬はかぶら蒸し (公式サイト)・いちじくの春巻きとステーキ (2026年10月)',
    neighborhood: '四条のすぐ北の大和大路、祇園。祇園四条駅7番出口から徒歩1分',
    gf_detail: 'グルテンフリーではない: 天ぷら、アジフライ、唐揚げ、西京焼きがある。出汁のものは相談できるかもしれない (公式のお品書き)。',
    vegan_detail: 'ヴィーガン不可: すべて鰹と利尻昆布の出汁が基本 (公式サイト)。',
    notes: '[割烹・四条上ルの祇園、炭火と京の旬] 移転してきたばかりの16席の2階の割烹。京野菜と黄金色の鰹昆布出汁に、炭火で焼く黒毛和牛や魚を、単品か11,000円のコースで。移転前からの常連は漬物入りタルタルのエビフライを挙げる。お通し1,000円とワンドリンク制。日曜休み。',
  });
}

save();
