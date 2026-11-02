// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 20.
//   + 天ぷら ふか名 tempura fukana (8-seat tempura counter by a former Ritz-Carlton Osaka chef, 堂島 2-chome)
//   + ひなべ ぺんぎん Hinabe Penguin (individual medicinal hot pots, opened April 2026, Kitashinchi side of 堂島)
//   + 幸乃道 Yuki no Michi (old-style okonomiyaki and teppan, weekday lunch sets, Fukushima 6-chome)
//   + 北新地ここの Kitashinchi Kokono (game meat, seafood and sake till 1 am, Kitashinchi side of 堂島)
//   - 北新地はらみ 別邸 27105953 skipped: same-concept (harami yakiniku) branch of 北新地はらみ, already in data
//     (osaka_kitashinchi_harami_hozenji).
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b19): odd ids in order 27144367, 27153535,
//   27105953, 27016743, 27111587. None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Chain check: Penguin is run by hm holder Co. (Roppongi, Tokyo; press release), and no other shop of it was found;
//   Fukana, Yuki no Michi and Kokono show no other shop. Yuki no Michi is the third shop at 福島6-20-19 コーポ盛乃
//   (with Okihama Soba and Gotoku, b19); the three Tabelog points are 8–20 m apart and each matches GSI at go level.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27105953', '北新地はらみ 別邸: same-concept harami yakiniku branch of 北新地はらみ, already in data (osaka_kitashinchi_harami_hozenji).');

// ================================================================ 天ぷら ふか名
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27144367/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://tempura-fukana.com/';
  const H = day(['17:30', '22:30']);
  put({
    id: 'osaka_tempura_fukana_dojima', name: '天ぷら ふか名 (tempura fukana)', category: 'OMNI',
    lat: 34.696311, lng: 135.494133, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a battered tempura course, finished with tempura over clay-pot rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, shark fin and chateaubriand tempura.',
    hours_raw: 'Mon–Sat 17:30–22:30 (food last order 20:30, drinks 22:00), staggered starts from 17:30; closed Sundays, holidays and some other days (Tabelog). Lunch only for groups of 4 or more with the dinner course, booked by phone at least two days ahead (Tabelog). Reservations treated as cancelled if you cannot be reached 30 minutes after the booked time (Tabelog). Omakase course ¥23,100 including tax and service (Tabelog). Opened August 19, 2024 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 8 counter seats at a single slab of Kishu cedar; private hire from 7; non-smoking (Tabelog). Down ten steps from the ground floor of a red-brick apartment building (Tabelog). English and Traditional Chinese menus; children welcome, with a kids\' menu (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島 2-chome, 堂島アーバンライフ B1F — 1 min from Nishi-Umeda Stn exit C-83, 4 min from Kitashinchi Stn',
    cuisine: 'Light tempura fried in premium Osaka cottonseed oil, seasonal seafood and vegetables, by a chef who held Michelin stars at the former Ritz-Carlton Osaka\'s Hanagatami; wines and sake chosen by a sommelier; in the 2025 Michelin selection (Tabelog) · one omakase course ¥23,100 including service (Tabelog) · dishes in reviews: the day\'s ingredients shown before the course, shrimp eaten head to tail, whiting, sea urchin with nori tempura, shark fin tempura, chateaubriand, Palermo peppers, asparagus, broccoli, eggplant, kakiage over rice, tempura over clay-pot rice with leftovers packed as onigiri (2025–2026)',
    website: WEB, gmaps: gm('天ぷら ふか名 堂島'), menu_url: null,
    notes: "[Tempura · Nishi-Umeda, a former Ritz star chef at a cedar counter] An eight-seat tempura counter cut from a single slab of Kishu cedar, down a few steps in a red-brick apartment block near Nishi-Umeda, opened in 2024 by a chef who earned Michelin stars for years at the former Ritz-Carlton Osaka's Hanagatami and listed in the 2025 Michelin selection. One omakase at ¥23,100 including service: shrimp, whiting, sea urchin wrapped in nori, a rare shark-fin tempura and chateaubriand, in a batter diners call astonishingly light, ending with tempura over clay-pot rice and the rest packed as onigiri to take home. Popular for business dinners; English menu; children welcome.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed on Tabelog), formerly of Hanagatami at the Ritz-Carlton Osaka; reviewers call the owner "Mr. Fukana"'], origin: null, background: 'Shop text (Tabelog): a hidden gem opened by a chef who consistently earned stars at the former Ritz-Carlton Osaka\'s "Hanagatami"; light, airy tempura at a counter of a single piece of Kishu cedar; premium cottonseed oil from Osaka; a 2025 Michelin-selected restaurant; staff from top-class hotels. Opened August 19, 2024. A September 2026 diner heard that "everyone here is from Ritz".', philosophy: null, specialty: 'Omakase tempura; shark-fin tempura.',
      anecdotes: [
        { text: '"I was particularly surprised by the \'Shark Fin Tempura.\' I had never heard of or tasted this before" — November 2025.', source: R + 'B517426501/' },
        { text: '"Even my kids, who usually dislike vegetables, devoured the asparagus, broccoli, and eggplant." — December 2025.', source: R + 'B518750771/' },
        { text: '"The light batter was perfectly crispy, and the cooking was exquisite and beautifully done." — April 2026.', source: R + 'B526687752/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, WEB, R + 'B516973059/', R + 'B516990184/', R + 'B517426501/', R + 'B518750771/', R + 'B521366193/', R + 'B522436832/', R + 'B526687752/', R + 'B527321022/', R + 'B535601424/', R + 'B535718188/'] },
    cultural_comfort: { level: 'english', note: 'English and Traditional Chinese menus (Tabelog).' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島2-1-25 堂島アーバンライフ B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島二丁目1番25号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'From the Tabelog listing; tax and service included.', last_checked: TODAY, items: [
      it('', '', 'Omakase tempura course', '¥23,100', 'Course', 'no', 'no', 'Tabelog listing; tax and service included.', 'omakase'),
    ] }, {
    cuisine: '大阪産の上質な綿実油で揚げる軽い天ぷら、旬の魚介と野菜、元 Ritz-Carlton Osaka の Hanagatami で星を取り続けた料理人、ソムリエが選ぶワインと日本酒、2025年のミシュランに掲載 (食べログ)・おまかせのコースのみ23,100円 (サービス料込み) (食べログ)・口コミの料理: コースの前にその日の食材を見せる、頭から尾まで食べる海老、キス、海苔の天ぷらとウニ、フカヒレの天ぷら、シャトーブリアン、パレルモという品種のパプリカ、アスパラ、ブロッコリー、なす、かき揚げとご飯、天ぷらをのせた土鍋ご飯で残りはおにぎりに (2025〜2026年)',
    neighborhood: '堂島2丁目、堂島アーバンライフ 地下1階。西梅田駅C-83出口から徒歩1分、北新地駅から4分',
    gf_detail: 'グルテンフリーではありません。衣をつけた天ぷらのコースで、締めも天ぷらをのせた土鍋ご飯。',
    vegan_detail: 'ヴィーガンではありません。魚介、フカヒレ、シャトーブリアンの天ぷら。',
    notes: '[天ぷら・西梅田、元リッツの星付き料理人の杉のカウンター] 西梅田の近く、赤レンガのマンションから階段を下りたところにある、Kishu の杉の一枚板の8席のカウンター。元 Ritz-Carlton Osaka の Hanagatami で長くミシュランの星を取った料理人が2024年に開き、2025年のミシュランに掲載。コースは23,100円 (サービス料込み) のおまかせのみ: 海老、キス、海苔で包んだウニ、めずらしいフカヒレの天ぷら、シャトーブリアンを驚くほど軽い衣で、締めは土鍋ご飯に天ぷらをのせ、残りはおにぎりにして持ち帰れる。接待に人気、英語のメニューあり、子どもも可。',
  });
}

// ================================================================ ひなべ ぺんぎん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27153535/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://prtimes.jp/main/html/rd/p/000000005.000159092.html';
  const H = day(['18:00', '22:30']);
  put({
    id: 'osaka_hinabe_penguin', name: 'ひなべ ぺんぎん (Hinabe Penguin)', category: 'OMNI',
    lat: 34.696302, lng: 135.498217, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The course ends with ramen in the hot-pot broth, and the dipping sauces are a herbal black-vinegar soy sauce and a sesame-peanut sauce (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is made from chicken with naratake mushroom and lily buds (press release); pork, chicken, beef and offal in the course.',
    hours_raw: 'Tabelog: Mon–Sat, days before and after holidays 18:00–22:30; closed Sundays and holidays. The opening press release (April 2026) gives 18:00–20:30 and closed Saturdays, Sundays and holidays; the two differ. Table time limited to 2 hours; private rooms, parties of 7 or more and private hire by phone (Tabelog). Charge ¥880 per person (Tabelog). Opened April 22, 2026 (Tabelog; press release). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, iD, QUICPay, PayPay, d Barai, Rakuten Pay, au PAY, Alipay (Tabelog). 14 seats at tables plus a private room for 4; non-smoking; menu with photos (Tabelog; press release).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, 谷安ビル 1F — 5 min from Kitashinchi Stn, 4 min from Nishi-Umeda Stn',
    cuisine: 'Individual medicinal hot pots in a Showa-retro room: a "triple soup" from chicken, naratake mushroom and lily buds with medicinal herbs blended to 0.1 g, inspired by hot pots of Guizhou and Yunnan and Japanese ramen technique (press release; Tabelog) · Ultimate Hot Pot Course ¥8,800: three appetizers (green-onion pickles, bang bang chicken, smoked tofu), mushrooms (jumbo nameko, hanabira), vegetables, TOKYO X pork, Kyoto red chicken, black wagyu from Yakiniku Katsuragi in Sakai, offal, two sauces, a palate cleanser of pear, ramen in the broth in a size of your choice, a dessert such as peach and honey mascarpone (Tabelog; September–October 2026) · broth spicy or not, refilled as you go (2026) · lamb and baby octopus as extras (September 2026)',
    website: null, gmaps: gm('ひなべ ぺんぎん 堂島'), menu_url: null,
    notes: "[Chinese · Kitashinchi, a personal medicinal hot pot] A fourteen-seat hot-pot room near Kitashinchi Station, opened in April 2026, done up in Showa-retro style, where each diner gets an individual pot. The broth, from chicken, naratake mushroom and lily buds with herbs weighed to a tenth of a gram, was devised by the hot-pot-obsessed cook 東山広樹 after trips through Guizhou and Yunnan, and comes spicy or mild. The single ¥8,800 course brings TOKYO X pork, Kyoto red chicken and wagyu from a hard-to-book Sakai yakiniku shop, then ramen in the broth and a light dessert. Diners leave warm, and one felt good the next day. Two-hour seating; ¥880 charge.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed)', 'Recipe supervisor 東山広樹 (press release)'], origin: null, background: 'Press release (hm holder Co., Roppongi, Tokyo, April 2026): a hot-pot specialist opening April 22, 2026 in Kitashinchi with the concept of "real hot pot"; medicinal herbs blended by a cook who has travelled in China; a triple soup of chicken, naratake and lily-bud stock with herbs measured to 0.1 g, inspired by hot pots eaten in Guizhou and Yunnan and combined with Japanese ramen technique; recipe supervised by 東山広樹, representative of マジでうまい Co., a self-described cooking maniac who travels to China for long stays every year to eat hot pot. Tabelog shop text: TOKYO-X pork and fresh offal; meat from popular shops.', philosophy: '"Eat and feel restored" (食べて整う) authentic medicinal hot pot (press release).', specialty: 'Ultimate Hot Pot Course.',
      anecdotes: [
        { text: '"The herbal flavor was prominent but not overpowering, and adding the meat enhanced the broth\'s richness" — October 2026.', source: R + 'B536612080/' },
        { text: '"The black-haired Wagyu from \'Yakiniku Katsuragi,\' a notoriously hard-to-book restaurant in Sakai City" — October 2026.', source: R + 'B536888584/' },
        { text: '"By the time I left the restaurant, my body felt warm and cozy. I felt great the next day too!" — September 2026.', source: R + 'B537311207/' },
      ],
      japanese_sources_summary: 'プレスリリース (株式会社hm holder、2026年4月): 2026年4月22日に北新地で火鍋専門店を開業、「本物の火鍋」がコンセプト。鶏、ナラタケ、百合の花の蕾から取った出汁に0.1g単位で調合した薬膳を加えたトリプルスープ、中国の貴州省と雲南省の火鍋に日本のラーメンの技術を掛け合わせた。レシピ監修は株式会社マジでうまい代表の東山広樹。営業時間18:00〜20:30、定休日は土・日・祝日、総席数14席 (4名用の完全個室あり)、究極の火鍋コース8,800円。',
      confidence: 'medium', sources: [TB, PR, R + 'B536439527/', R + 'B536612080/', R + 'B536613917/', R + 'B536888584/', R + 'B537051839/', R + 'B537134599/', R + 'B537267562/', R + 'B537311207/', R + 'B537521142/', R + 'B538464634/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu with photos (Tabelog); attentive staff (October 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-4 谷安ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and opening press release; opened April 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, PR],
    price_note: 'From the Tabelog listing and the press release (tax included); ¥880 charge per person.', last_checked: TODAY, items: [
      it('', '', 'Ultimate Hot Pot Course (individual pot, ramen to finish)', '¥8,800', 'Course', 'ask', 'no', 'Tabelog listing; press release; 2026 reviews.', 'ultimate_course'),
    ] }, {
    cuisine: '昭和レトロの店で一人ずつの薬膳火鍋: 鶏、ナラタケ、百合の花の蕾の出汁に0.1g単位の薬膳を加えたトリプルスープ、中国の貴州省と雲南省の火鍋と日本のラーメンの技術から (プレスリリース、食べログ)・究極の火鍋コース8,800円: 前菜3種 (ねぎの漬物、バンバンジー、燻製豆腐)、きのこ (ジャンボなめこ、はなびらたけ)、野菜、TOKYO X の豚、Kyo Akajidori の鶏、Sakai の Yakiniku Katsuragi の黒毛和牛、ホルモン、たれ2種、口直しの梨、量を選べる締めのラーメン、桃とはちみつのマスカルポーネなどのデザート (食べログ、2026年9〜10月)・スープは辛いか辛くないか、注ぎ足してくれる (2026年)・追加でラムやイイダコも (2026年9月)',
    neighborhood: '堂島の北新地寄り、谷安ビル 1階。北新地駅から徒歩5分、西梅田駅から4分',
    gf_detail: '要確認。グルテンの情報なし。締めは火鍋のスープのラーメンで、たれは薬膳の黒酢醤油とごまピーナッツ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。スープは鶏とナラタケと百合の蕾の出汁 (プレスリリース)、コースには豚、鶏、牛、ホルモン。',
    notes: '[中華・北新地、一人ずつの薬膳火鍋] 北新地駅の近くにある14席の火鍋の店で、2026年4月オープン。昭和レトロの店で、一人にひとつずつ鍋が出る。鶏、ナラタケ、百合の蕾の出汁に0.1g単位で量った薬膳を加えたスープは、火鍋好きの料理人東山広樹が貴州や雲南を旅して考えたもので、辛いか辛くないかを選べる。コースは8,800円のひとつで、TOKYO X の豚、Kyo Akajidori の鶏、予約の取れない Sakai の焼肉店の和牛、締めはそのスープのラーメンと軽いデザート。体が温まり、次の日も調子がよかったという声も。席は2時間、チャージ880円。',
  });
}

// ================================================================ 幸乃道
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27016743/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['18:00', '21:00']);
  put({
    id: 'osaka_yuki_no_michi_fukushima', name: '幸乃道 (Yuki no Michi)', category: 'OMNI',
    lat: 34.701207, lng: 135.48848, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, yakisoba and fried-egg soba are wheat-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork okonomiyaki, pork-toro and other meat teppan dishes.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 18:00–21:00; closed Saturdays and Sundays; hours may change (Tabelog). Lunch fills by noon on weekdays (2024 reviews). Cash only: no cards, e-money or PayPay (Tabelog; October 2024). 15 seats with a counter (Tabelog). Private parties with all-you-can-drink for about ¥4,000 a head (June 2025). Hanshin Tigers games on TV (April 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Fukushima 6-chome, コーポ盛乃, near the Naniwa-suji and Ebie Umeda line crossing — 7 min from JR Fukushima Stn',
    cuisine: 'Old-style okonomiyaki and teppan izakaya (Tabelog) · weekday lunch sets with rice and miso soup, large rice free: okonomiyaki set ¥880 (May 2023), fried-egg soba set ¥950 (January 2024), salt-grilled pork toro set with fried egg and salad (October 2023) · at night: pork okonomiyaki, fluffy; yakisoba; tonpei-yaki; potato-salad yaki; harami; chicken neck; red wieners; yam; thin-fried lotus root (2024–2026)',
    website: null, gmaps: gm('幸乃道 福島6-20-19'), menu_url: null,
    notes: "[Okonomiyaki · Fukushima, a retro teppan for lunch sets] A fifteen-seat old-style okonomiyaki and teppan shop in the same Fukushima apartment block as Okihama Soba and Gotoku, open weekdays only. Lunch is an Osaka classic: okonomiyaki with rice and miso soup, under ¥1,000, or fried-egg soba as a set, with big rice portions and a full room by noon. Evenings turn into a teppan izakaya with fluffy pork okonomiyaki, yakisoba, tonpei-yaki and a potato-salad yaki one diner called a must, with Tigers games on the TV. On one 2025 evening a single cook ran both the grill and the floor. Cash only.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) at the teppan'], origin: null, background: 'Reviews: a one-person operation for cooking and serving on an April 2025 evening; "the handsome owner\'s teppan dishes" (October 2024). A June 2025 diner remembers frequenting a Yuki no Michi in Ooyodo about ten years earlier.', philosophy: null, specialty: 'Okonomiyaki set lunch; potato-salad yaki.',
      anecdotes: [
        { text: '"Even though it was a one-person operation for cooking and serving, everything flowed smoothly." — April 2025.', source: R + 'B505648668/' },
        { text: '"Having carbohydrates with more carbohydrates might be an unusual sight for those not from Osaka, but it actually pairs really well." — January 2024.', source: R + 'B475067529/' },
        { text: '"Potato Salad Yaki should be a must-have on the Teppan menu." — October 2024.', source: R + 'B493497696/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B465044856/', R + 'B473873881/', R + 'B475067529/', R + 'B486242478/', R + 'B493497696/', R + 'B497346305/', R + 'B505648668/', R + 'B510115625/', R + 'B526287912/', R + 'B531066482/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Local lunch spot; natural, efficient service (2023–2024). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-20-19 コーポ盛乃',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目20番19号 (go) 15m; same building as osaka_okihama_soba and osaka_naniwa_ryori_gotoku (8–20 m apart); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B465044856/', R + 'B475067529/'],
    price_note: 'Lunch prices from 2023–2024 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Okonomiyaki set lunch (rice, miso soup)', '¥880', 'Lunch', 'no', 'no', 'May 2023 review.', 'okonomiyaki_set'),
      it('', '', 'Fried-egg soba set lunch (rice, miso soup)', '¥950', 'Lunch', 'no', 'no', 'January 2024 review.', 'soba_set'),
    ] }, {
    cuisine: '昔ながらのお好み焼きと鉄板焼きの居酒屋 (食べログ)・平日昼はご飯と味噌汁つきの定食、ご飯の大盛り無料: お好み焼き定食880円 (2023年5月)、目玉焼きのそば定食950円 (2024年1月)、豚トロの塩焼き定食に目玉焼きとサラダ (2023年10月)・夜: ふわふわの豚玉、焼きそば、とん平焼き、ポテトサラダ焼き、ハラミ、せせり、赤ウインナー、山芋、れんこんの薄焼き (2024〜2026年)',
    neighborhood: '福島6丁目、コーポ盛乃、Naniwa-suji と Ebie Umeda 線の交差点の近く。JR福島駅から徒歩7分',
    gf_detail: 'グルテンフリーではありません。お好み焼き、焼きそば、目玉焼きのそばは小麦。',
    vegan_detail: 'ヴィーガンではありません。豚玉、豚トロなど肉の鉄板焼き。',
    notes: '[お好み焼き・福島、昼の定食のレトロな鉄板] 沖濱そばやごとくと同じ福島のマンションにある15席の昔ながらのお好み焼きと鉄板焼きの店で、平日のみ。昼は大阪の定番、ご飯と味噌汁つきのお好み焼き定食が1,000円以下、そば定食もあり、ご飯は大盛りで正午には満席。夜は鉄板の居酒屋になり、ふわふわの豚玉、焼きそば、とん平焼き、必食という人もいるポテトサラダ焼き、テレビには阪神戦。2025年のある晩は一人で焼いて運んでいたという。現金のみ。',
  });
}

// ================================================================ 北新地ここの
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27111587/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '01:00']);
  put({
    id: 'osaka_kitashinchi_kokono', name: '北新地ここの (Kitashinchi Kokono)', category: 'OMNI',
    lat: 34.696057, lng: 135.496737, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include a game hot pot, ceramic-plate teppan with ponzu, sukiyaki; à la carte includes a game burger and shrimp-miso ramen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: game meat, seafood and pork. Tabelog lists vegetarian options, with no detail.',
    hours_raw: 'Mon–Sat, days before and after holidays 18:00–1:00 (last order 0:00; last entry 22:00); closed Sundays and holidays (Tabelog). Courses available on the day (Tabelog). Appetizer charge ¥500 except with a course (Tabelog). Opened June 6, 2019 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 30 seats: 10 at the counter and 5 semi-private booths, no shoes off; private hire 20–50; smoking allowed, including cigarettes (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, はつ根ビル B1F — 3 min from Kitashinchi and Nishi-Umeda Stns',
    cuisine: 'Game, fresh fish, meat and sake: a game hot pot of wild boar, venison, ostrich, kangaroo, crocodile and, in season, badger; daily seafood specials (Tabelog) · courses (Tabelog, tax included): Miyazaki Oimo Buta pork on a ceramic plate ¥5,000, or ¥8,000 with all-you-can-drink of 36 drinks incl. 15 sakes; Müller duck ceramic-plate sukiyaki with meringue ¥6,000 · à la carte in reviews: Hokkaido brown bear (2025), smoked crocodile tail, horse liver, kangaroo yukhoe, a wild boar and venison burger, whole-crab kejang, shrimp-miso ramen (November 2025), ostrich yukhoe, edamame yuba (September 2026), pheasant heart and liver, a wild boar, venison and horse tasting (June 2026), a three-shrimp tasting (June 2026) · rice the owners grow themselves (November 2025) · a sake list chosen by a sake sommelier and rice farmer; over 500 sakes a year (Tabelog; November 2025)',
    website: null, gmaps: gm('北新地ここの 堂島'), menu_url: null,
    notes: "[Izakaya · Kitashinchi, game meat and sake till 1 am] A thirty-seat basement izakaya in Kitashinchi, open since 2019 and designed by its owner, a former interior designer, for people tired of ordinary menus: a game hot pot of boar, venison, ostrich, kangaroo, crocodile and seasonal badger, with Hokkaido brown bear, kangaroo yukhoe and smoked crocodile tail à la carte. A sake sommelier who also farms rice picks the sake, over five hundred kinds a year, and the rice is home-grown. Courses from ¥5,000 can be booked on the day; last entry is 10 pm and it stays open to 1 am. Friendly owner and staff explain everything; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), a former interior designer (Tabelog)', 'Chef (unnamed) "whose stomach growls when visiting the aquarium" (Tabelog)', 'Sake sommelier and rice farmer (Tabelog)'], origin: null, background: 'Shop text (Tabelog): a hidden gem in its 7th year for food lovers tired of ordinary restaurants; a game hot pot of wild boar, venison, ostrich, kangaroo, crocodile and seasonal badger; daily fresh seafood; the owner, a former interior designer, designed the interior; sake chosen by a sake sommelier who is also a rice farmer; a chef who has travelled the world tasting ingredients. Opened June 6, 2019. A November 2025 diner: home-grown original rice; over 500 sakes a year, with the owner recommending pairings.', philosophy: '"We want to hear you say, \'Everything here is delicious!\'" (Tabelog).', specialty: 'Game hot pot; Japanese sake.',
      anecdotes: [
        { text: '"The kangaroo yukhoe was the best! I highly recommend trying it!" — November 2025.', source: R + 'B517553808/' },
        { text: '"I wanted my client to try the Higuma, so I quickly placed an order." — June 2025.', source: R + 'B481138806/' },
        { text: '"Upon arrival, I was surprised to see a lineup featuring badger, crocodile, kangaroo, and more, but everything was delicious!!" — September 2026.', source: R + 'B535706698/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B481138806/', R + 'B517553808/', R + 'B517842423/', R + 'B518627010/', R + 'B527809527/', R + 'B527958033/', R + 'B533114905/', R + 'B533721416/', R + 'B533994377/', R + 'B535706698/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Owner and staff explain each dish (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-5-4 はつ根ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目5番4号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included); ¥500 appetizer charge outside courses.', last_checked: TODAY, items: [
      it('', '', 'Miyazaki Oimo Buta pork ceramic-plate course, 7 items', '¥5,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'pork_course'),
      it('', '', 'Pork course with all-you-can-drink (36 drinks, 15 sakes)', '¥8,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'pork_ayce'),
      it('', '', 'Müller duck ceramic-plate sukiyaki course, 7 items', '¥6,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'duck_course'),
    ] }, {
    cuisine: 'ジビエ、鮮魚、肉、日本酒: イノシシ、シカ、ダチョウ、カンガルー、ワニ、季節にはアナグマのジビエ鍋、日替わりの魚介 (食べログ)・コース (食べログ、税込): 宮崎の Oimo Buta の豚の陶板焼き5,000円、日本酒15種を含む36種の飲み放題つきで8,000円、Müller 鴨の陶板すき焼きのメレンゲ添え6,000円・口コミの単品: 北海道のヒグマ (2025年)、ワニのしっぽの燻製、馬のレバー、カンガルーのユッケ、イノシシとシカのハンバーグ、カニのケジャン、海老味噌ラーメン (2025年11月)、ダチョウのユッケ、枝豆の湯葉 (2026年9月)、キジのハツとレバー、イノシシとシカと馬の食べ比べ (2026年6月)、3種の海老の食べ比べ (2026年6月)・自分たちで育てた米 (2025年11月)・唎酒師で米農家でもある人が選ぶ日本酒、年に500種以上 (食べログ、2025年11月)',
    neighborhood: '堂島の北新地寄り、はつ根ビル 地下1階。北新地駅と西梅田駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースにはジビエ鍋、ポン酢の陶板焼き、すき焼き、単品にはジビエのハンバーグや海老味噌ラーメンもある。',
    vegan_detail: 'ヴィーガンではありません。ジビエ、魚介、豚。食べログにはベジタリアン向けのメニューありとあるが、詳しい説明はない。',
    notes: '[居酒屋・北新地、深夜1時までのジビエと日本酒] 北新地の地下にある30席の居酒屋で、2019年から。元インテリアデザイナーの店主が自ら店を設計し、ふつうの店に飽きた人に向けたメニュー: イノシシ、シカ、ダチョウ、カンガルー、ワニ、季節のアナグマのジビエ鍋、単品には北海道のヒグマ、カンガルーのユッケ、ワニのしっぽの燻製。日本酒は米農家でもある唎酒師が選び、年に500種以上、米も自家製。5,000円からのコースは当日でも予約でき、最終入店22時、深夜1時まで。気さくな店主とスタッフがていねいに説明してくれる。喫煙可。',
  });
}

save();
