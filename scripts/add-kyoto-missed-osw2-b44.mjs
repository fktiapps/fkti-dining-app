// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 44.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   - 炭火とワイン 京都駅前店 — skipped: chain (five same-name shops in our crawls).
//   + くまのワインハウス Kuma no Wine House (natural-wine bistro by Kumano Shrine; since 2019)
//   + 鳳林 丸太町店 Horin Marutamachi (old-style ramen and Chinese diner at Karasuma-Marutamachi) — one 鳳林 in all our crawls;
//     Tabelog names the company site seiwa-horin.co.jp, which did not respond (2026-11-06).
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   - 市場小路 ジェイアール京都伊勢丹店 — skipped: same-concept branch of a brand already in data.
//   + 魏飯夷堂 三条店 Gihan Ebisudo Sanjo (dim sum and Chinese in a former miso shop on the Sanjo-kai arcade; since 2010) — the
//     group of 創作中華 一之船入 (official site lists 一之船入, its shop, 魏飯夷堂 三条店, 魏飯吉堂 and 魏飯餃子); the sister
//     魏飯吉堂 is in data as kyoto_gihan_hajimedo_tower_sando. A local group under five same-name shops, drafted as a sister concept.
//   + フレンチ酒場 GOLD 京都ポルタ店 French Sakaba GOLD Kyoto Porta (casual French bar in the Kyoto Station underground mall;
//     since 2022) — three GOLD shops found (this one, お初天神店 and 大阪梅田店); operator not identified; under the 5+ line.
//   None of the four is in data/kyoto.json: grep by id, name (くまのワイン, 鳳林, 魏飯夷堂/Ebisudo, GOLD) and address
//   (東丸太町41, 大倉町22, 橋西町661) found none; 東塩小路町902 is the shared Kyoto Porta address.
//   Service charges: GOLD ¥396 cover (Tabelog); none listed for the others.
//   Remarks about other diners kept only where several reviews agree (Greg, 2026-11-06).
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-44');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26028219', '炭火とワイン 京都駅前店: a chain — five same-name shops in our crawls: 京都駅前店 (26028219), 京都駅前店 はなれ (26043881), 京都河原町店 (26033372), 烏丸店 (26030965) and なんば店 (27108145)');
skip('26000865', '京鴨一羽買いと京のおばんざい 市場小路 ジェイアール京都伊勢丹店: a same-concept branch of a brand already in data — kyoto_ichiba_koji_teramachi (市場小路 寺町本店, also おばんざい); our crawl lists four 市場小路 shops (寺町本店 26000650, 木屋町店 26032274, 烏丸店 26003035 and this one)');

// ================================================================ くまのワインハウス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26031873/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '24:00']);
  put({
    id: 'kyoto_kuma_no_wine_house', name: 'くまのワインハウス (Kuma no Wine House)', category: 'OMNI',
    lat: 35.01760315786695, lng: 135.7768331204778, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bistro plates — pâté de campagne, omelette, gratin, steak, hummus — with house bread baked to order; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-and-egg bistro menu (reviews).',
    hours_raw: '16:00–24:00 Tuesday–Saturday; closed Sunday and Monday; hours may change (Tabelog). Bookings by phone only, and often full (Tabelog; July 2026). Cash only — no cards, e-money or QR (Tabelog). 16 seats: a long counter, three tables and a tatami private room (shoes off); private hire possible; non-smoking (Tabelog; January and April 2026). Run by two people (October 2026). Near Kumano Shrine, 423 m from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Marutamachi by Kumano Shrine — 423 m from Jingu-Marutamachi Stn',
    cuisine: 'Wine bistro with many natural wines, poured by the glass to your taste (2025–2026 reviews) · menu on a blackboard: pâté de campagne, the signature gratin, a creamy omelette, hummus, prosciutto, peach with mozzarella, swordtip squid with bitter melon, Thai-style fried jidori chicken (2025–2026) · steak, e.g. beef inside round with rock salt — order it early, it takes time (August 2025; January 2026) · bread baked to order, about 20 minutes (April 2026) · desserts',
    website: null, gmaps: gm('くまのワインハウス 東丸太町'), menu_url: TB,
    notes: "[Wine bistro · by Kumano Shrine, natural wine and blackboard plates] A candle-lit bistro with European antiques, a long counter and a tatami back room, where two people run the whole show from 4 p.m. to midnight. Say what you like and a natural wine is poured to match; eat pâté, the house gratin, a molten omelette and a well-rested steak (order it first). About ¥5,000–10,000 a head. Phone to book; cash only; closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: ['Chef and staff not named; run by two people (October 2026)'], origin: null,
      background: 'Opened 4 January 2019 (Tabelog). Reviewers describe European antique décor, candles after dark, a blackboard menu and wines kept in a back room (2025–2026).',
      philosophy: null,
      specialty: 'Natural wine with bistro plates; steak and gratin.',
      anecdotes: [
        { text: 'A December 2025 counter guest was told "then let me choose something wonderful for you" and was poured glass after glass.', source: R + 'B520545352/' },
        { text: 'An April 2026 group of four, sent by a Kyoto University friend, found a tatami room behind the "Wine House" sign and waited 20 minutes for the bread.', source: R + 'B525611632/' },
        { text: 'An August 2025 diner rated the inside-round beef steak — crisp outside, medium-rare within — the best of the night.', source: R + 'B511285421/' },
      ],
      japanese_sources_summary: '食べログ: くまのワインハウス、ワインバー・ビストロ、左京区東丸太町41-7、京阪神宮丸太町駅から徒歩6分 (423m)、火〜土 16:00〜24:00、日月定休、予約可、カード・電子マネー・QR不可、16席、個室あり、貸切可、禁煙、2019年1月4日オープン。口コミ (2025〜2026年、英語): 熊野神社のそば、ヨーロッパのアンティーク調、ろうそく、黒板のメニュー、自然派ワインを好みに合わせてグラスで、パテ・ド・カンパーニュ、名物のグラタン、オムレツ、フムス、生ハム、桃とモッツァレラ、剣先イカとゴーヤ、地鶏のタイ風唐揚げ、ステーキ (牛の内もも、時間がかかるので早めに注文)、焼くのに20分のパン、座敷の個室、予約は電話のみ、二人で切り盛り、日曜休み。',
      confidence: 'medium', sources: [TB, R + 'B511285421/', R + 'B520545352/', R + 'B521541870/', R + 'B525611632/', R + 'B530258258/', R + 'B530866832/', R + 'B531379865/', R + 'B532925308/', R + 'B534511252/', R + 'B534626700/', R + 'B537867249/', R + 'B538726411/'] },
    cultural_comfort: { level: 'japanese', note: 'Phone bookings only; blackboard menu; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区東丸太町41-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.017603, 135.776833); cross-checked: GSI 京都府京都市左京区東丸太町41番地 (lot) 19m; 21m from kyoto_quatre_saison_bakery; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511285421/', R + 'B531379865/'],
    price_note: 'No prices published; reviewers spent ¥3,000–10,000 a head (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Pâté de campagne', '', 'Appetizer', 'ask', 'no', '', 'pate'),
      it('', '', 'Gratin (signature)', '', 'Main', 'no', 'no', '', 'gratin'),
      it('', '', 'Omelette', '', 'Main', 'ask', 'no', '', 'omelette'),
      it('', '', 'Steak', '', 'Main', 'ask', 'no', 'Takes time; order early.', 'steak'),
      it('', '', 'House bread (baked to order)', '', 'Side', 'no', 'ask', 'About 20 minutes.', 'bread'),
    ] }, {
    cuisine: '自然派ワインの多いワインビストロ、好みに合わせてグラスで (2025〜2026年の口コミ)・黒板のメニュー: パテ・ド・カンパーニュ、名物のグラタン、とろとろのオムレツ、フムス、生ハム、桃とモッツァレラ、剣先イカとゴーヤ、地鶏のタイ風唐揚げ (2025〜2026年)・ステーキ、たとえば牛の内ももを岩塩で、時間がかかるので早めに注文 (2025年8月、2026年1月)・注文後に焼くパン、約20分 (2026年4月)・デザート',
    neighborhood: '熊野神社そばの東丸太町。神宮丸太町駅から423m',
    gf_detail: '要確認。パテ・ド・カンパーニュ、オムレツ、グラタン、ステーキ、フムス、注文後に焼くパンなどのビストロ料理。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と卵中心のビストロのメニュー (口コミ)。',
    notes: '[ワインビストロ・熊野神社のそば、自然派ワインと黒板の料理] ヨーロッパのアンティーク、長いカウンター、奥の座敷。ろうそくの灯るビストロを、夕方4時から深夜0時まで二人で切り盛りする。好みを伝えれば合う自然派ワインを注いでくれる。パテ、名物のグラタン、とろけるオムレツ、じっくり焼くステーキ (最初に注文を)。一人5,000〜10,000円ほど。予約は電話で、現金のみ、日月休み。',
  });
}

// ================================================================ 鳳林 丸太町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003229/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_horin_marutamachi', name: '鳳林 丸太町店 (Horin Marutamachi)', category: 'OMNI',
    lat: 35.01716125180154, lng: 135.75978763241324, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen in soy-based broth, gyoza and sauced kara-age; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat-based ramen broth with chashu; kara-age (reviews).',
    hours_raw: '11:00–22:00 Monday–Saturday; closed Sunday; hours may change (Tabelog); open through Obon (August 2026). No reservations. Cash only — no cards, e-money or QR (Tabelog). 20 seats with a counter; smoking allowed (Tabelog; March and September 2026). On the south-east corner of Karasuma-Marutamachi, 72 m from Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma-Marutamachi, south-west of the Imperial Palace — 72 m from Marutamachi Stn',
    cuisine: 'Old-style ramen and town Chinese (2024–2026 reviews) · ramen ¥800: a soy-sauce broth with a hint of sweetness, straight noodles, chashu, menma and green onion (August 2026) · spicy miso ramen; vegetable ramen; set meals ¥1,000 with ramen, rice and a side such as three kara-age in sweet chilli sauce (2026) · fried rice set; gyoza; kimchi; kara-age with shrimp-chilli sauce (2026)',
    website: null, gmaps: gm('鳳林 丸太町店'), menu_url: TB,
    notes: "[Ramen · Karasuma-Marutamachi, an old-school town Chinese] A long-standing ramen and Chinese counter on the corner across from Marutamachi Station, run by older cooks who look stern and turn out kind. The ramen (about ¥800) is a light, faintly sweet soy broth; the ¥1,000 set adds rice and kara-age in sweet chilli sauce. Spicy miso, vegetable ramen and fried rice too. Smoking allowed; cash only; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner not named; two older cooks in the kitchen (October 2026)'], origin: null,
      background: 'A long-established ramen shop at the Karasuma-Marutamachi crossing, per August and October 2026 reviewers. Tabelog names seiwa-horin.co.jp as the website, which did not respond on 6 November 2026.',
      philosophy: null,
      specialty: 'Soy-sauce ramen with a set of kara-age and rice.',
      anecdotes: [
        { text: 'A February 2026 diner was put off by the cook’s stern look, then found the cook polite and kind; the noodles were very soft.', source: R + 'B523445863/' },
        { text: 'An August 2026 lunch guest was offered a shelf for bags and liked the moist, toasty fried rice.', source: R + 'B533883885/' },
        { text: 'An October 2026 first-timer had passed the corner shop for years before trying the salty-sweet shoyu ramen.', source: R + 'B537251391/' },
      ],
      japanese_sources_summary: '食べログ: 鳳林 丸太町店、ラーメン、中京区烏丸丸太町南東角大倉町22 ノアーズ・アーク京都御所1F、丸太町駅から72m、月〜土 11:00〜22:00、日曜定休、予約不可、カード・電子マネー・QR不可、20席、喫煙可、ウェブサイト seiwa-horin.co.jp。口コミ (2024〜2026年、英語): 烏丸丸太町の南東角の老舗、ラーメン800円、甘みのある醤油スープ、ストレート麺、チャーシュー・メンマ・ねぎ、辛味噌ラーメン、野菜ラーメン、ラーメン・ごはん・日替わりのおかずの定食1,000円、甘辛いソースの唐揚げ、炒飯セット、餃子、キムチ、エビチリ味の唐揚げ、年配の料理人二人、お盆も営業、喫煙可。',
      confidence: 'low', sources: [TB, R + 'B523445863/', R + 'B524152731/', R + 'B525778161/', R + 'B526748921/', R + 'B526749027/', R + 'B526749226/', R + 'B528972721/', R + 'B529820080/', R + 'B533773441/', R + 'B533883885/', R + 'B535536632/', R + 'B537251391/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区烏丸丸太町南東角大倉町22 ノアーズ・アーク京都御所 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017161, 135.759788); GSI resolves 大倉町22 only to the town (52m), so not lot-checked; the Tabelog point sits on the south-east corner of Karasuma-Marutamachi, as the address says; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533773441/', R + 'B535536632/'],
    price_note: 'Prices from August and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ramen (shoyu)', '¥800', 'Ramen', 'no', 'no', 'August 2026.', 'ramen'),
      it('', '', 'Set meal: ramen, rice and a daily side', '¥1,000', 'Set', 'no', 'no', 'September 2026; kara-age that day.', 'teishoku'),
      it('', '', 'Spicy miso ramen', '', 'Ramen', 'no', 'no', 'Extra charge in a set.', 'kara_miso'),
      it('', '', 'Fried rice set', '', 'Set', 'no', 'no', '', 'chahan_set'),
    ] }, {
    cuisine: '昔ながらのラーメンと町中華 (2024〜2026年の口コミ)・ラーメン800円: ほのかに甘い醤油スープ、ストレート麺、チャーシュー、メンマ、ねぎ (2026年8月)・辛味噌ラーメン、野菜ラーメン、ラーメン・ごはん・甘辛いチリソースの唐揚げ3個などの定食1,000円 (2026年)・炒飯セット、餃子、キムチ、エビチリ味の唐揚げ (2026年)',
    neighborhood: '烏丸丸太町、京都御所の南西。丸太町駅から72m',
    gf_detail: 'グルテンフリー不可。醤油スープの小麦のラーメン、餃子、たれをからめた唐揚げ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉系のラーメンスープにチャーシュー、唐揚げ (口コミ)。',
    notes: '[ラーメン・烏丸丸太町、昔ながらの町中華] 丸太町駅の向かいの角にある老舗のラーメンと中華の店。強面だが親切な年配の料理人たち。ラーメン (800円ほど) はあっさりほのかに甘い醤油スープ。1,000円の定食はごはんと甘辛いチリソースの唐揚げ付き。辛味噌、野菜ラーメン、炒飯も。喫煙可、現金のみ、日曜休み。',
  });
}

// ================================================================ 魏飯夷堂 三条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26016639/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ichinohunairi.com/'; const IG = 'https://www.instagram.com/gihan_sanjyo/';
  const W = day(['11:30', '14:30'], ['17:30', '22:00']); const E = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gihan_ebisudo_sanjo', name: '魏飯夷堂 三条店 (Gihan Ebisudo Sanjo)', category: 'OMNI',
    lat: 35.0086611878643, lng: 135.75069411040576, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Xiaolongbao, gyoza and other wheat dim sum, noodles and soy-seasoned stir-fries; congee and fried rice also on the menu; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat dumplings, seafood congee, fried chicken and mapo tofu (reviews).',
    hours_raw: 'Lunch 11:30–14:30; dinner 17:30–22:00 Monday, Wednesday–Friday and 17:00–22:00 Saturday, Sunday and holidays; closed Tuesday, other closures irregular (Tabelog). Bookings online; when busy, tables are limited to 1 hour at lunch and 1.5 hours at dinner (Tabelog). Cards, e-money, PayPay and Rakuten Pay (Tabelog). 45 seats: a 5-seat counter and spacious tables; children welcome; non-smoking; takeout and delivery (Tabelog). In a century-old townhouse that was once a miso shop, its old miso sign still up, on the Sanjo-kai shopping arcade near TOHO Nijo; 365 m from Nijojo-mae Stn (official site; 2026 reviews).',
    hours: { 0: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-kai shopping arcade, south of Nijo Castle — 365 m from Nijojo-mae Stn',
    cuisine: 'Dim sum and Chinese from the 創作中華 一之船入 group (official site) · xiaolongbao, pan-fried xiaolongbao, gyoza, shumai, shrimp dumplings, spring rolls, fried rice cakes; vinegared jellyfish; yurinchi fried chicken; mapo tofu; shrimp chilli; dan dan noodles; seafood congee; sesame balls and almond jelly (2025–2026 reviews) · weekly-changing lunch sets, e.g. sweet-and-sour chicken with rice, soup and pickled mustard greens ¥1,200; add two xiaolongbao and almond jelly for ¥300 (September 2026) · dim sum set; yum cha lunch (October 2026) · shochu and cocktails (Tabelog)',
    website: SITE, gmaps: gm('魏飯夷堂 三条店'), menu_url: TB,
    notes: "[Chinese · Sanjo-kai arcade near Nijo Castle, dim sum in an old miso shop] The casual dim sum house of Kyoto's 一之船入 group, opened in 2010 in a century-old townhouse that still wears a miso shop's sign under red lanterns. Thin-skinned xiaolongbao, crisp pan-fried dumplings, dan dan noodles and seafood congee; weekly lunch sets run about ¥1,200, with dumplings and almond jelly for ¥300 more. Queues at lunch; book for dinner. Closed Tuesday.",
    chef_bio: { chef_name: '魏 禧之', roles: ['Owner-chef of the 一之船入 group (official site); kitchen staff at Sanjo not named'], origin: 'Yokohama, Kanagawa',
      background: 'Per the official site: 魏 禧之 (ぎ・よしゆき) was born in Yokohama and from age 11 worked in the kitchen of the family’s Hunan restaurant in Yokohama Chinatown; trained from 18 at well-known Chinese restaurants across Japan, then in China, qualifying as a special-grade cook; trained at 萬珍楼 in Yokohama Chinatown; opened 創作中華 一之船入 in Kyoto in 1996; bronze at the Taiwan culinary exhibition’s world Chinese cuisine contest (2009); opened 魏飯夷堂 三条店 in 2010 and 魏飯夷堂 北新地 in Osaka in 2013 (closed about four years ago, per an October 2026 reviewer); Kyoto tourism ambassador (2015); China’s highest cook grade (2018); Kyoto Prefecture’s Contemporary Master Craftsman (2020); head of the Kyoto branch of the Japan Chinese Cuisine Association. The group follows 医食同源 (food as medicine) and uses pesticide-free vegetables from contract farms.',
      philosophy: 'Per the official site: 医食同源 — preventing illness through food, cooking that is delicious and good for the body, shared by all the group’s shops.',
      specialty: 'Xiaolongbao.',
      anecdotes: [
        { text: 'A September 2026 visitor came back after seven years for the xiaolongbao, at ¥200 off in a campaign.', source: R + 'B535764141/' },
        { text: 'An October 2026 diner, a regular at the Kitashinchi branch before it closed, found the xiaolongbao just as good.', source: R + 'B537274482/' },
        { text: 'An October 2026 lunch guest was told the vinegared jellyfish had the "highest order count in history".', source: R + 'B538284329/' },
      ],
      japanese_sources_summary: '公式サイト (ichinohunairi.com): 一之船入グループ (創作中華 一之船入、イチノフナイリ・ザ ショップ、魏飯夷堂 三条店、魏飯吉堂、魏飯餃子)、医食同源、契約農園の無農薬野菜、シェフ 魏 禧之 (ぎ・よしゆき): 横浜市生まれ、11歳から実家の横浜中華街の湖南料理店の厨房に、18歳から全国の有名中華料理店で修業、中国で特級調理士、横浜中華街「萬珍楼」で修行、1996年 京都に「創作中華 一之船入」、2009年 台湾美食展世界中国料理大会銅賞、2010年 飲茶と中華の店「魏飯夷堂 三条店」、2013年「魏飯夷堂 北新地」、2015年 京都国際観光大使、2018年 中国の最高級調理士、2020年 京都府「現代の名工」、日本中国料理協会 京都支部 支部長。三条店: 京都三条会商店街、元・老舗の味噌店の京町家、週替わりのランチセット、火曜定休。食べログ: 中華・居酒屋・バル、中京区三条岩上西入る橋西町661、二条城前駅から365m、昼11:30〜14:30、夜17:30〜22:00 (土日祝は17:00〜)、火曜定休、混雑時は昼1時間・夜1.5時間、カード・電子マネー・QR可、45席 (カウンター5、テーブル40)、禁煙、テイクアウト・デリバリー、2010年9月14日オープン。口コミ (2025〜2026年、英語): 小籠包、焼き小籠包、焼き餃子、春巻き、くらげの酢の物、油淋鶏、麻婆豆腐、エビチリ、担々麺、海鮮粥、ごま団子、杏仁豆腐、酢鶏のランチ1,200円、+300円で小籠包2個と杏仁豆腐、飲茶ランチ、味噌屋の看板と赤い提灯、昼は行列。',
      confidence: 'medium', sources: [TB, SITE, IG, R + 'B503419066/', R + 'B523953834/', R + 'B534117595/', R + 'B534497207/', R + 'B535642754/', R + 'B535764141/', R + 'B535893860/', R + 'B536229470/', R + 'B536831714/', R + 'B537274482/', R + 'B538284329/', R + 'B538530787/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Online booking; several reviewers (August 2026) note foreign visitors at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条岩上西入る橋西町661',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official group site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008661, 135.750694); cross-checked: GSI 京都府京都市中京区橋西町661番地 (lot) 7m; 18m from mp_kyozakana_fukuya; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535642754/', R + 'B536229470/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: sweet-and-sour chicken with rice, soup and pickles', '¥1,200', 'Lunch', 'no', 'no', 'September 2026.', 'subuta_lunch'),
      it('', '', 'Lunch add-on: two xiaolongbao and almond jelly', '¥300', 'Lunch', 'no', 'no', '', 'lunch_addon'),
      it('', '', 'Xiaolongbao', '', 'Dim sum', 'no', 'no', '', 'xiaolongbao'),
      it('', '', 'Dan dan noodles', '', 'Noodles', 'no', 'no', '', 'dandan'),
      it('', '', 'Seafood congee', '', 'Rice', 'ask', 'no', '', 'congee'),
    ] }, {
    cuisine: '創作中華 一之船入グループの点心と中華 (公式サイト)・小籠包、焼き小籠包、餃子、焼売、海老餃子、春巻き、揚げ餅、くらげの酢の物、油淋鶏、麻婆豆腐、エビチリ、担々麺、海鮮粥、ごま団子、杏仁豆腐 (2025〜2026年の口コミ)・週替わりのランチセット、たとえば酢鶏にごはん・スープ・ザーサイで1,200円、+300円で小籠包2個と杏仁豆腐 (2026年9月)・点心セット、飲茶ランチ (2026年10月)・焼酎とカクテル (食べログ)',
    neighborhood: '三条会商店街、二条城の南。二条城前駅から365m',
    gf_detail: '要確認。小籠包や餃子などの小麦の点心、麺、醤油味の炒め物。粥や炒飯もある。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉の点心、海鮮粥、唐揚げ、麻婆豆腐 (口コミ)。',
    notes: '[中華・二条城近くの三条会商店街、元味噌屋の点心] 京都の一之船入グループの気軽な点心の店。2010年、味噌屋の看板を残した築100年の町家に赤い提灯を下げて開いた。皮の薄い小籠包、カリッとした焼き小籠包、担々麺、海鮮粥。週替わりのランチセットは1,200円ほど、+300円で小籠包と杏仁豆腐。昼は行列、夜は予約を。火曜休み。',
  });
}

// ================================================================ フレンチ酒場 GOLD 京都ポルタ店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26038119/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '22:00']); const B = day(['11:00', '22:30']);
  put({
    id: 'kyoto_french_sakaba_gold_porta', name: 'フレンチ酒場 GOLD 京都ポルタ店 (French Sakaba GOLD Kyoto Porta)', category: 'OMNI',
    lat: 34.98676323707511, lng: 135.75781537901784, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Prosciutto, rillettes, steaks with sauces, cream croquettes, omurice, shumai and pasta, with free baguette; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-led French bar menu (Tabelog; reviews).',
    hours_raw: 'Monday–Thursday 11:00–22:00 (last food order 21:00); Friday and the day before a holiday 11:00–22:30; Saturday 11:00–22:30; Sunday and holidays 11:00–22:00; lunch menu until 16:00 on weekdays and 14:00 at weekends; closed 31 December with the building (Tabelog). ¥396 cover charge (Tabelog). Bookings accepted. Cards and e-money; no QR (Tabelog). 66 seats with a counter; non-smoking; children welcome (Tabelog). In Kyoto Porta B1F west area under Kyoto Station, 2 min walk from JR Kyoto Stn (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Station, Porta underground mall B1F',
    cuisine: 'Casual French bar: plates from ¥280 and wine by the glass from ¥350 (Tabelog) · paper-thin prosciutto, the specialty; rillettes; a plate of about ten GOLD appetisers (Tabelog; October 2026) · beef outside-skirt steak with truffle butter, with cream croquette and rice ¥1,580 at lunch; "forbidden" shumai with truffle butter and red wine; omurice and hamburg omurice with salad (2026 reviews) · bistro set with one drink ¥1,280 from 14:00 to 17:00; one-hour all-you-can-drink ¥1,000 at lunch; banquet course with drinks ¥5,000 (Tabelog; October–November 2026)',
    website: null, gmaps: gm('フレンチ酒場 GOLD 京都ポルタ'), menu_url: TB + 'dtlmenu/',
    notes: "[French bar · Kyoto Station Porta, wine and plates from lunch] A busy, casual French bar under Kyoto Station, open from 11:00: paper-thin prosciutto, rillettes, truffle-butter skirt steak and cheap glasses of wine, with free refills of baguette. A ¥1,000 hour of all-you-can-drink at lunch makes it a favourite Shinkansen send-off. Cramped and lively; ¥396 cover. One of three GOLD bars, with two in Osaka.",
    chef_bio: { chef_name: null, roles: ['Chef not named; one of three フレンチ酒場GOLD shops (Kyoto Porta, お初天神, 大阪梅田)'], origin: null,
      background: 'Opened 26 August 2022 (Tabelog). Tabelog’s introduction calls it a French tavern serving high-end French cuisine casually, with dishes from ¥280 and wine from ¥350; a Kyoto Porta-only French lunch.',
      philosophy: null,
      specialty: 'Ultra-thin prosciutto.',
      anecdotes: [
        { text: 'A five-time November 2026 regular drank the ¥1,000 lunch free-flow while waiting an hour for the Shinkansen, then napped all the way to Tokyo.', source: R + 'B514105642/' },
        { text: 'An October 2026 guest found the grilled dishes not served piping hot.', source: R + 'B537662959/' },
        { text: 'A November 2026 lunch diner booked from the Shinkansen to be sure of a seat, and took an extra slice of the free baguette.', source: R + 'B538502642/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ酒場 GOLD 京都ポルタ店、ダイニングバー・バル、下京区東塩小路町902 京都ポルタ B1F 西エリア、JR京都駅から徒歩2分、月〜木 11:00〜22:00、金・祝前日 11:00〜22:30、土 11:00〜22:30、日祝 11:00〜22:00、12月31日は館休業、チャージ料396円、カード・電子マネー可、QR不可、66席、禁煙、子ども可、2022年8月26日オープン。公式紹介: 本格フレンチをカジュアルに、料理280円から、グラスワイン350円から、京都ポルタ店限定のフレンチランチ、極薄の生ハム、14時〜17時のビストロセット1,280円 (前菜約10種とドリンク1杯)、飲み放題付きコース5,000円。口コミ (2026年、英語): ランチの1時間飲み放題1,000円、生ハムとポテト、オムライス、ハンバーグオムライス、リエット、牛ハラミのトリュフバターとクリームコロッケのセット1,580円、禁断のシュウマイ、バゲットのおかわり、新幹線前に。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B514105642/', R + 'B526985791/', R + 'B536972636/', R + 'B537578823/', R + 'B537662959/', R + 'B537879292/', R + 'B538036264/', R + 'B538119654/', R + 'B538234137/', R + 'B538447210/', R + 'B538502642/', R + 'B538755682/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station-mall bar; bookable online.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町902 京都ポルタ B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.986763, 135.757815); cross-checked: GSI 京都府京都市下京区東塩小路町902番地 (lot) 56m — the Porta mall spans the lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538119654/', R + 'B514105642/'],
    price_note: 'Set prices from Tabelog; lunch price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Bistro set: about ten GOLD appetisers and one drink (14:00–17:00)', '¥1,280', 'Set', 'ask', 'no', 'Tabelog.', 'bistro_set'),
      it('', '', 'Lunch: beef outside-skirt steak and cream croquette with rice', '¥1,580', 'Lunch', 'no', 'no', 'October 2026.', 'harami_lunch'),
      it('', '', 'All-you-can-drink, one hour (lunch)', '¥1,000', 'Drink', 'ask', 'ask', 'October–November 2026.', 'nomihodai'),
      it('', '', 'GOLD banquet course with all-you-can-drink', '¥5,000', 'Course', 'no', 'no', 'Weekdays; Tabelog.', 'course'),
    ] }, {
    cuisine: 'カジュアルなフレンチ酒場: 料理280円から、グラスワイン350円から (食べログ)・名物の極薄の生ハム、リエット、GOLDの前菜約10種の盛り合わせ (食べログ、2026年10月)・牛ハラミのステーキのトリュフバター、昼はクリームコロッケとごはん付きで1,580円、トリュフバターと赤ワインの禁断のシュウマイ、オムライスとハンバーグオムライスにサラダ (2026年の口コミ)・14時〜17時のビストロセット1ドリンク付き1,280円、昼の1時間飲み放題1,000円、飲み放題付きの宴会コース5,000円 (食べログ、2026年10〜11月)',
    neighborhood: '京都駅、地下街ポルタ B1F',
    gf_detail: '要確認。生ハム、リエット、ソースのステーキ、クリームコロッケ、オムライス、シュウマイ、パスタ、バゲットのおかわり。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉中心のフレンチ酒場のメニュー (食べログ、口コミ)。',
    notes: '[フレンチ酒場・京都駅ポルタ、昼からワインと料理] 京都駅地下の、朝11時から開くにぎやかでカジュアルなフレンチ酒場。極薄の生ハム、リエット、トリュフバターのハラミステーキ、手頃なグラスワイン、バゲットはおかわり自由。昼の1時間飲み放題1,000円で、新幹線前の一杯に人気。席は狭めでにぎやか、チャージ396円。GOLDは3店で、ほか2店は大阪。',
  });
}

save();
