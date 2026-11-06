// Kyoto priority (kyoto-missed), worker osw13, batch 37 — lane: Tabelog id mod 6 = 0.
// Core: Taku Sando Sanjo, 秀蛸 (Hide Tako). Notable: また吉 (Matakichi), 祇園もりわき (Gion Moriwaki).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-37');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044608', 'group size unconfirmed: 吉吉麻辣烫 京都店 is one of at least two Japanese shops (a Namba, Osaka shop at 難波3-6-15 found on the web), with no official site or shop list to count the group; Greg ruling 2026-11-05');
skip('26041554', 'chain: 京都天ぷら 天のめし is a brand of ユニシアホールディングス (the 串カツ田中 group; its site lists 天のめし beside 串カツ田中, PISOLA, 富之上 and others), and tennomeshi.com sends contact to kushi-tanaka.co.jp — sub-brand of a large parent; Greg ruling 2026-11-05');
skip('26040420', 'chain: OBENKEI 京都祇園店 is one of 10+ shops of the 佐渡寿司 弁慶 group (sado-benkei.com lists Sado, Niigata, Urawa, Tsudanuma, Ueno, Ginza and Kyoto shops)');
skip('26042358', 'group already in data: 麺匠 一粒万倍 has its 寺町店 (kyr_mensho_ichiryu_manbai_te) and 河原町店 (kyr_menshou_ichiryu_manbai_k) in kyoto.json; the 祇園店 is a third branch');

// ================================================================ Taku Sando Sanjo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041788/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.takusandokyoto.com/';
  const MENU = 'https://www.takusandokyoto.com/s/Sanjo_English.pdf';
  const NY = 'https://www.takusando.com/about';
  const H = day(['12:00', '17:00']);
  put({
    id: 'kyoto_taku_sando_sanjo', name: 'Taku Sando Sanjo', category: 'OMNI',
    lat: 35.007813, lng: 135.766537, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every sandwich is on house shokupan milk bread, and the katsu and croquettes are coated in panko (Sanjo menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the two vegetarian sandwiches (potato croquette, egg salad) still use milk bread and karashi-mustard mayo; the fries carry a fish-and-vegetable dashi furikake (Sanjo menu). Shiso edamame is marked vegetarian — ask.',
    hours_raw: 'Tabelog: daily 12:00–17:00 (food L.O. 16:30); schedule changes are posted on Google Maps. Tabelog says reservations are not taken, but a December 2025 diner booked ahead and a January 2026 diner booked through Tabelog; a February 2026 diner found the counter filling up at 1 pm on a Saturday and suggests booking at weekends. 12 counter seats; non-smoking; cards, e-money and QR accepted; take-out; English menu and English-speaking staff; children welcome with a kids menu (Tabelog). Opened 15 October 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Downtown, just south of Sanjo-dori — 5 min walk from Kyoto Shiyakusho-mae Stn and Kawaramachi Stn',
    cuisine: 'Japanese katsu and egg sandwiches on house shokupan milk bread, from a Brooklyn sandwich shop, with a sake bar counter · pork katsu or chicken katsu (breast and thigh) sando ¥1,500, potato-croquette or egg-salad sando ¥1,300, Japanese beef fillet katsu sando ¥4,000, matcha-strawberry sando ¥850, dashi fries ¥600 (Sanjo menu) · sake by the glass chosen by the owner-sommelier (Sanjo menu)',
    website: SITE, gmaps: gm('Taku Sando Sanjo 京都 海老屋町'), menu_url: MENU,
    notes: '[Sandwiches · downtown, Brooklyn katsu sando with sake] A twelve-seat counter south of Sanjo, the Kyoto outpost of a Brooklyn sando shop ("HELLO, Kyoto! WE ARE FROM BROOKLYN"), with a second Kyoto shop at Kiyomizu. Freshly fried pork or chicken katsu with cabbage and house sauce on milk bread, ¥1,500; egg-salad sando ¥1,300; beef fillet katsu ¥4,000. Portions are big — several diners took half home — and one found the sauce about to spill out. Sake picked by the owner-sommelier. English menu and staff; many overseas customers. Daily 12:00–17:00.',
    chef_bio: { chef_name: 'Sakaki Nakamura (owner and sommelier, per the Sanjo menu; name known only in Latin letters)', roles: ['Owner and sake sommelier (Sanjo menu: "Sakaki Nakamura, the owner/sommelier, curates fine sake from all over Japan")'], origin: null,
      background: 'Taku Sando began in Greenpoint, Brooklyn (29 Greenpoint Ave), "brought to you by the creative team of Takumen in LIC", around a shokupan milk bread baked in-house daily (takusando.com About page). The Kyoto site lists two Kyoto shops, Sanjo and Kiyomizu, beside Brooklyn; the Sanjo menu is headed "HELLO, Kyoto! WE ARE FROM BROOKLYN." The Sanjo shop opened on 15 October 2024 (Tabelog).',
      philosophy: 'From the Brooklyn About page: the shokupan "represents a wholesome luxury, and is the heart of the meal".',
      specialty: 'Pork katsu sando; chicken katsu sando; tamago sando.',
      anecdotes: [
        { text: 'A December 2025 diner who does not like thigh meat asked for chicken katsu of breast only, and a friend switched to all thigh; the staff obliged.', source: R + 'B522341508/' },
        { text: '"The sandwich was packed with tonkatsu and cabbage, and the sauce was about to spill out." — April 2026; the diner ate half and took the rest away.', source: R + 'B526792368/' },
        { text: 'An August 2025 diner found all the other customers were from overseas.', source: R + 'B511493029/' },
      ],
      japanese_sources_summary: '公式サイト (takusandokyoto.com): Taku Sando Kyoto、京都の店舗は Sanjo (海老屋町327) と Kiyomizu (英語表記 4 Chome-148-3 Kiyomizu)、ほかにブルックリン店。三条のメニュー (英語 PDF): Ton-Katsu Sando 1,500円、Chicken-Katsu Sando 1,500円 (むねともも)、Classic Korokke Sando 1,300円 (ベジタリアン)、Tamago Sando 1,300円 (ベジタリアン)、Japanese Beef Fillet Katsu Sando 4,000円、Matcha Strawberry Sando 850円、Kids Sando 900円、Dashi Fries 600円 (魚と野菜のだしのふりかけ)、Shiso Edamame 700円 (ベジタリアン)、日本酒グラス100ml 900円、オーナー兼ソムリエ Sakaki Nakamura が全国の日本酒を選ぶ、"HELLO, Kyoto ! WE ARE FROM BROOKLYN"。ブルックリン店のサイト: Takumen (LIC) のチームによる店、毎日店で焼く食パンが主役。食べログ: サンドイッチ・日本酒バー、中京区御幸町通三条下ル海老屋町327、毎日12:00〜17:00 (L.O. 16:30)、予約不可、カウンター12席、禁煙、カード・電子マネー・QR可、テイクアウト、英語メニュー・英語のスタッフ、子供メニュー、2024年10月15日オープン。口コミ (2024年10月〜2026年4月、英語): 卵サンド、揚げたてのカツ、量が多く半分持ち帰り、客は海外からの人が多い。',
      confidence: 'medium', sources: [TB, SITE, MENU, NY, R + 'B495052708/', R + 'B511493029/', R + 'B511923329/', R + 'B515558263/', R + 'B520833625/', R + 'B522217317/', R + 'B522341508/', R + 'B524317522/', R + 'B525082426/', R + 'B526792368/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); take-out available.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通三条下ル海老屋町327',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Kyoto site lists the Sanjo shop; Tabelog reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.007813, 135.766537); cross-checked: GSI 京都府京都市中京区海老屋町327番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Prices from the Sanjo English menu (official site).', last_checked: TODAY, items: [
      it('', '', 'Ton-Katsu Sando (pork katsu, cabbage, pickles, house sauce)', '¥1,500', 'Sando', 'no', 'no', '', 'katsu_sando'),
      it('', '', 'Chicken-Katsu Sando (breast and thigh)', '¥1,500', 'Sando', 'no', 'no', '', 'chicken_katsu_sando'),
      it('', '', 'Classic Korokke Sando (potato croquette)', '¥1,300', 'Sando', 'no', 'no', 'Vegetarian (menu).', 'korokke_sando'),
      it('', '', 'Tamago Sando (egg salad)', '¥1,300', 'Sando', 'no', 'no', 'Vegetarian (menu).', 'tamago_sando'),
      it('', '', 'Japanese Beef Fillet Katsu Sando', '¥4,000', 'Sando', 'no', 'no', '', 'beef_katsu_sando'),
      it('', '', 'Matcha Strawberry Sando', '¥850', 'Sando', 'no', 'no', '', 'fruit_sando'),
      it('', '', 'Dashi Fries', '¥600', 'Side', 'ask', 'no', 'Dashi furikake of fish and vegetables.', 'fries'),
      it('', '', 'Shiso Edamame', '¥700', 'Side', 'ask', 'ask', 'Vegetarian (menu).', 'edamame'),
      it('', '', 'Sake by the glass (100 ml)', '¥900', 'Drink', 'ask', 'ask', '', 'sake'),
    ] }, {
    cuisine: 'ブルックリンのサンド店の、自家製の食パンのカツサンドと卵サンド、日本酒バーのカウンター・ポークカツやチキンカツ (むねともも) のサンド1,500円、コロッケや卵サラダのサンド1,300円、和牛ヒレカツサンド4,000円、抹茶といちごのサンド850円、だしのフライドポテト600円 (三条のメニュー)・オーナー兼ソムリエが選ぶ日本酒のグラス (三条のメニュー)',
    neighborhood: '三条通のすぐ南、御幸町通。京都市役所前駅・河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: どのサンドも自家製の食パンで、カツとコロッケはパン粉の衣 (三条のメニュー)。',
    vegan_detail: 'ヴィーガン不可: ベジタリアンの2品 (コロッケ、卵サラダ) も食パンとからしマヨ、フライドポテトには魚と野菜のだしのふりかけ (三条のメニュー)。しその枝豆はベジタリアン表記 — 要確認。',
    notes: '[サンドイッチ・三条、ブルックリンのカツサンドと日本酒] 三条の南のカウンター12席。ブルックリンのサンド店の京都の店で ("HELLO, Kyoto! WE ARE FROM BROOKLYN")、京都には Kiyomizu にもう1軒。揚げたての豚かチキンのカツにキャベツと自家製ソースで1,500円、卵サンド1,300円、和牛ヒレカツ4,000円。量が多く、半分持ち帰る客が何人も、ソースがこぼれそうという声も。日本酒はオーナー兼ソムリエが選ぶ。英語メニューと英語のスタッフ、海外からの客が多い。毎日12:00〜17:00。',
  });
}

// ================================================================ 秀蛸 (Hide Tako)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26008986/'; const R = TB + 'dtlrvwlst/';
  const BLOG = 'http://ameblo.jp/gion-hidetako';
  const WK = day(['18:00', '04:00']); const SU = day(['18:00', '03:00']);
  put({
    id: 'kyoto_hide_tako', name: '秀蛸 (Hide Tako)', category: 'OMNI',
    lat: 35.004784, lng: 135.774975, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki are wheat-batter balls; sauces include Worcester-style sauce, soy and demi-glace (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every takoyaki holds octopus, with mayonnaise and cheese toppings (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Sat 18:00–04:00 (L.O. 03:30); Sun and holidays 18:00–03:00 (L.O. 02:30); irregular closing days. No reservations. 13 counter seats; smoking allowed (Tabelog). No cards or QR; e-money accepted (Tabelog). Take-out (Tabelog). Toppings such as green onion and mayonnaise cost extra (November 2025).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WK, 6: SU }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo, ground floor of a building on Hanamikoji — 310 m from Gion-Shijo Stn',
    cuisine: 'Late-night takoyaki bar · 17 kinds of takoyaki, 8 for ¥800 (June 2025); half-and-half of two flavours +¥50 (June and November 2025) · sauce, salt, soy, pizza sauce with cheese, demi-glace, seaweed kimchi, green onion with wasabi (2025–2026 reviews) · beef tendon stew, gizzard with pepper; sake, shochu, beer, champagne (2025–2026 reviews)',
    website: BLOG, gmaps: gm('秀蛸 祇園 清本町'), menu_url: null,
    notes: "[Takoyaki · Gion, until 4 am] A thirteen-seat L-shaped counter under red lanterns on the ground floor of a club building on Hanamikoji, frying takoyaki till 4 am; diners say it has been there 20 years, with a second-generation owner greeting passers-by. Eight crisp-shelled, gooey balls for ¥800 in seventeen flavours — sauce, salt, pizza, seaweed kimchi — plus half-and-half; champagne and sake beside the beer. One diner found the beer glass small; another felt chilly in the half-open room in autumn and a little intimidated by the street at night. Smoking allowed. Cash or e-money.",
    chef_bio: { chef_name: null, roles: ['Second-generation owner (January 2026 review); not named in a source'], origin: null,
      background: 'The shop blog (ameblo, last updated 2012) calls 秀蛸 a takoyaki shop born in Kyoto, with a Gion main shop and a Kiyamachi shop; a February 2012 post mentions staff from all three shops of the time. Tabelog lists the Gion shop and a Kiyamachi shop today. A June 2025 diner and a January 2026 diner say it has been running for 20 years; the January 2026 diner calls the energetic young owner the second generation.',
      philosophy: null,
      specialty: 'Takoyaki in many sauces, with half-and-half plates.',
      anecdotes: [
        { text: '"The energetic young owner, the second generation, has been running this place for 20 years, and it shows in the warm greetings exchanged with passersby." — January 2026.', source: R + 'B520861819/' },
        { text: 'A couple staying nearby came past 10 pm when hunger struck and were squeezed in at the busy counter (April 2026).', source: R + 'B507964685/' },
        { text: '"The beer was served in a small glass and I finished it quickly." — April 2026; the beef tendon stew was the highlight.', source: R + 'B528065441/' },
        { text: 'A November 2025 diner found the half-open room chilly on an autumn night, and the street, lined with clubs, a little intimidating.', source: R + 'B517201310/' },
      ],
      japanese_sources_summary: '店のブログ (ameblo、2012年まで更新): 祗園「秀蛸」、京都生まれのたこ焼き屋、祇園本店と木屋町店、2012年2月の記事に「秀蛸３店舗の全メンバー」。食べログ: たこ焼き、東山区清本町353-1 花見小路ビル1F、祇園四条駅から310m、月〜土 18:00〜翌4:00 (L.O. 3:30)、日・祝 18:00〜翌3:00 (L.O. 2:30)、不定休、予約不可、13席、喫煙可、カード・QR不可、電子マネー可、テイクアウト。口コミ (2025年2月〜2026年6月、英語): 8個800円で17種類、ハーフ&ハーフ+50円、ソース・塩・ピザ・デミグラス・海苔キムチ・ねぎとわさび、牛すじ煮込み、砂肝、日本酒とシャンパン、20年続く店、2代目の若い店主、外のような席で秋の夜は寒い、ビールのグラスが小さい。',
      confidence: 'medium', sources: [TB, BLOG, R + 'B501764119/', R + 'B504354006/', R + 'B507964685/', R + 'B509608394/', R + 'B517201310/', R + 'B520861819/', R + 'B524269140/', R + 'B527614834/', R + 'B528065441/', R + 'B529468352/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-in counter; point at the flavour list; friendly staff (2025–2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清本町353-1 花見小路ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.004784, 135.774975); cross-checked: GSI 京都府京都市東山区清本町353番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509608394/', R + 'B517201310/'],
    price_note: 'Prices from June and November 2025 reviews; no menu published.', last_checked: TODAY, items: [
      it('たこ焼き', 'takoyaki', 'Takoyaki, 8 pieces (any of about 17 flavours)', '¥800', 'Takoyaki', 'no', 'no', 'June 2025; toppings such as green onion and mayonnaise extra (November 2025).', 'takoyaki'),
      it('', '', 'Half-and-half (two flavours on one plate)', '+¥50', 'Takoyaki', 'no', 'no', 'June and November 2025.', 'takoyaki'),
    ] }, {
    cuisine: '深夜のたこ焼きの店・たこ焼き17種類、8個800円 (2025年6月)、2種類のハーフ&ハーフは+50円 (2025年6月・11月)・ソース、塩、醤油、チーズのピザソース、デミグラス、海苔キムチ、ねぎとわさび (2025〜2026年の口コミ)・牛すじ煮込み、砂肝の胡椒焼き、日本酒、焼酎、ビール、シャンパン (2025〜2026年の口コミ)',
    neighborhood: '四条通の北の祇園、花見小路のビルの1階。祇園四条駅から310m',
    gf_detail: 'グルテンフリーではない: たこ焼きは小麦粉の生地で、ソース、醤油、デミグラスなどをかける (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: どのたこ焼きにもタコが入り、マヨネーズやチーズものる (2025〜2026年の口コミ)。',
    notes: '[たこ焼き・祇園、朝4時まで] 花見小路のクラブの入るビルの1階、赤提灯の下のL字カウンター13席で、朝4時までたこ焼きを焼く。20年続く店で、2代目の若い店主が通りの人に声をかけるという口コミ。外はカリッと中はとろりの8個800円、ソース、塩、ピザ、海苔キムチなど17種類、ハーフ&ハーフも。ビールのほか日本酒やシャンパン。ビールのグラスが小さいという声、秋の夜は外のような席が寒く、夜の通りが少し怖いという声も。喫煙可。現金か電子マネー。',
  });
}

// ================================================================ また吉 (Matakichi)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037582/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.gion-matayoshi.com/matakichi/';
  const MENU = 'http://www.gion-matayoshi.com/matakichi/menu/';
  const MAIN = 'http://www.gion-matayoshi.com/';
  const H = day(['12:00', '16:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_matakichi_gion', name: 'また吉 (Matakichi)', category: 'OMNI',
    lat: 35.001573, lng: 135.774299, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information: dinner is pasta, bruschetta and a veal cutlet beside carpaccio and charcoal-grilled meat; lunch sets are simmered fish or teriyaki wagyu with miso soup (official menu). Course changes for allergies must be phoned in ahead, not on the day (Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Lunch sets and dinner dishes use fish, beef, pork or cheese (official menu); the shaved-ice syrups are fruit, matcha or brown sugar, with condensed milk as an extra topping.',
    hours_raw: 'Official site: lunch 12:00–16:00 (drinks and shaved ice only after 14:00; lunch 12:00–14:00, shaved ice 12:00–16:00), dinner 17:00–21:00, irregular closing days; reservations by phone. Tabelog lists 12:00–15:00 and 17:30–21:00. Official site: counter of 7 and tables for 5 and 2; cards and QR (PayPay, Rakuten Pay, au PAY, d Barai, Merpay, Alipay, WeChat Pay), cash not accepted. Tabelog: 19 seats (8 counter, 11 table), a private room for 4; children 13 and up; non-smoking; course allergy changes by phone in advance only. Dinner prices exclude 10% tax (official menu).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south side, just off Hanamikoji — 6 min walk from Gion-Shijo Stn',
    cuisine: 'Casual sister of the two-Michelin-star Gion Matayoshi · lunch sets: simmered fish with herring, kombu, a small hot pot of fried tofu and Kyoto vegetables and beef soup in white miso ¥2,980, or teriyaki Ishigaki wagyu ¥5,000 (official menu) · shaved ice of Nikko natural ice: matcha ¥2,300, strawberry, pineapple or brown sugar with kinako ¥1,500, fig or mango ¥2,000 (official menu) · Italian à la carte on Japanese tableware at night: sea-urchin aglio e olio ¥3,500, Ishigaki wagyu Bolognese ¥2,500, veal cutlet ¥3,300, charcoal-grilled wagyu rump ¥4,200 (official menu, tax extra) · earlier reviews: sea-bream chazuke set (2025–2026), lunch mini-course and ¥6,000 course (July 2026)',
    website: SITE, gmaps: gm('また吉 祇園町南側570-120'), menu_url: MENU,
    notes: "[Italian & shaved ice · Gion south, Matayoshi's casual sister] The casual sister of Gion Matayoshi, also on the south side of Gion, behind a patterned block lattice: by day a fish or wagyu lunch tray and natural-ice kakigori with house syrups, by night Italian à la carte on kaiseki plates — sea-urchin aglio e olio, wagyu Bolognese, veal cutlet. Diners in 2025–2026 praised sea-bream chazuke, rich matcha ice and warm send-offs; others found a ¥1,800 matcha ice average (July 2026), slow drinks with two staff (July 2026), and food average with uneven pacing and few drinks (October 2026). No cash.",
    chef_bio: { chef_name: null, roles: ['Sister shop of 祇園又吉 (official site); the chef is not named'], origin: null,
      background: 'The 祇園又吉 site announced the new shop また吉 on 1 August 2021; Tabelog reviews go back to January 2025. The また吉 site itself says it was born in October 2026, serving Italian with the same chosen ingredients and preparation as the main restaurant plus natural-ice shaved ice at casual prices; an August 2026 diner mentions a recent renovation, and an October 2026 diner calls it still new. A July 2026 diner writes that the owner hails from Okinawa. Natural ice from 四代目徳次郎 in Nikko (official site).',
      philosophy: 'Official site: 「もっと軽い気持ちで、本物の味を楽しんで欲しい」 — "We want people to enjoy the real thing, with a lighter heart."',
      specialty: 'Natural-ice kakigori; Italian à la carte on Japanese tableware; lunch trays.',
      anecdotes: [
        { text: 'A diner brought an elderly mother for the chazuke lunch in June 2026 and found the staff kind and the meal comfortable for older guests.', source: R + 'B499600649/' },
        { text: '"At JPY 1,800, it was on the expensive side, but both the quantity and flavor were just average." — matcha shaved ice, July 2026.', source: R + 'B532032003/' },
        { text: 'A September 2026 diner came only for a pineapple shaved ice, served with warm tea, and was seen off by several staff.', source: R + 'B536672527/' },
        { text: '"Sometimes the dishes come out quickly, while at other times, they take an unusually long time." — October 2026.', source: R + 'B537270995/' },
      ],
      japanese_sources_summary: 'また吉の公式サイト (gion-matayoshi.com/matakichi): 祇園又吉がひらく気軽なもう一軒、「もっと軽い気持ちで、本物の味を楽しんで欲しい」、2026年10月に祇園町南側に生まれた、本店と同じ厳選食材や仕込みのイタリアンと天然氷のかき氷、花ブロックの格子が目印、祇園町南側570-120 万治ビル1階、昼12:00〜16:00 (14時からはドリンクとかき氷のみ)、夜17:00〜21:00、不定休、電話予約、カウンター7席・テーブル5名と2名、カードとバーコード決済のみで現金不可。メニュー: 魚御膳2,980円 (魚の炊いた物、鰊とおぼろ昆布、京のお揚げさんと京野菜の小鍋、牛汁 京白味噌仕立て、新潟村上産コシヒカリ、自家製浅漬け)、肉御膳5,000円 (石垣牛の照り焼き)、かき氷は日光・四代目徳次郎の天然氷 (究極の抹茶2,300円、濃厚いちご・石垣島のパイナップル・波照間黒糖蜜きな粉につぶあん1,500円、いちじく・木の芽・マンゴー2,000円、トッピング400円)、夜のアラカルト (塩水ウニのアーリオオーリオ3,500円、石垣牛のボロネーゼ2,500円、仔牛のカツレツ3,300円、石垣牛イチボの炭焼きタリアータ4,200円、抹茶ティラミス800円ほか、税別)。祇園又吉の公式サイト: 新店舗「また吉」開店のご案内 [2021.8.1]。食べログ: イタリアン・日本料理・かき氷、12:00〜15:00、17:30〜21:00、不定休、予約可、コースのアレルギー変更は事前に電話で、当日は不可、19席 (カウンター8、テーブル11)、個室4名、禁煙、13歳以上。口コミ (2025年1月〜2026年10月、英語): 鯛茶漬けの御膳、女将のもてなし、店主は沖縄出身、昼のミニコース、6,000円のコース、抹茶かき氷1,800円は普通、抹茶が濃い、改装、パイナップルのかき氷1,500円、スタッフ2人でドリンクが遅れる、料理は普通で出るのにむらがあり、飲み物が少ない。',
      confidence: 'medium', sources: [TB, SITE, MENU, MAIN, R + 'B499600649/', R + 'B531920079/', R + 'B532032003/', R + 'B532250272/', R + 'B532859084/', R + 'B533439822/', R + 'B535451083/', R + 'B536672527/', R + 'B537270995/', R + 'B537782581/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bilingual Japanese/English website and menu; bookings by phone; diners walked in for shaved ice (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-120 万治ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001573, 135.774299); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 226m — the large 570 block, so the pin stays on the Tabelog point; kyoto_sottaku_tsukamoto_gion (same 570-120 address) is 36 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Prices from the official menu; dinner prices exclude 10% tax.', last_checked: TODAY, items: [
      it('魚御膳', '', 'Fish lunch set (simmered fish, herring with oboro kombu, small hot pot, beef soup in white miso, rice, pickles)', '¥2,980', 'Lunch', 'ask', 'no', 'Changes with the season.', 'teishoku'),
      it('肉御膳', '', 'Meat lunch set (teriyaki Ishigaki wagyu)', '¥5,000', 'Lunch', 'ask', 'no', 'Changes with the season.', 'teishoku'),
      it('究極の抹茶', '', 'Ultimate matcha shaved ice', '¥2,300', 'Shaved ice', 'ask', 'ask', '', 'kakigori'),
      it('濃厚いちご', '', 'Rich strawberry shaved ice', '¥1,500', 'Shaved ice', 'ask', 'ask', '', 'kakigori'),
      it('石垣島産マンゴー', '', 'Ishigaki Island mango shaved ice', '¥2,000', 'Shaved ice', 'ask', 'ask', '', 'kakigori'),
      it('塩水ウニのアーリオオーリオ', '', 'Aglio e olio with sea urchin', '¥3,500', 'Dinner', 'no', 'no', 'Tax extra.', 'pasta'),
      it('石垣牛のボロネーゼ', '', 'Bolognese of Ishigaki wagyu', '¥2,500', 'Dinner', 'no', 'no', 'Tax extra.', 'pasta'),
      it('オーストラリア産 仔牛のカツレツ', '', 'Australian veal cutlet', '¥3,300', 'Dinner', 'no', 'no', 'Tax extra.', 'cutlet'),
      it('石垣牛イチボの炭焼きタリアータ', '', 'Charcoal-grilled Ishigaki wagyu rump tagliata (150 g)', '¥4,200', 'Dinner', 'ask', 'no', 'Tax extra.', 'steak'),
      it('抹茶ティラミス', '', 'Matcha tiramisu', '¥800', 'Dinner', 'no', 'no', 'Tax extra.', 'dessert'),
    ] }, {
    cuisine: 'ミシュラン二つ星の祇園又吉の気軽な姉妹店・昼の御膳: 魚の炊いた物、鰊とおぼろ昆布、お揚げさんと京野菜の小鍋、牛汁の白味噌仕立ての魚御膳2,980円、石垣牛の照り焼きの肉御膳5,000円 (公式メニュー)・日光の天然氷のかき氷: 抹茶2,300円、いちご・パイナップル・黒糖蜜きな粉1,500円、いちじく・マンゴー2,000円 (公式メニュー)・夜は和の器でイタリアンのアラカルト: 塩水ウニのアーリオオーリオ3,500円、石垣牛のボロネーゼ2,500円、仔牛のカツレツ3,300円、石垣牛イチボの炭焼き4,200円 (公式メニュー、税別)・以前の口コミ: 鯛茶漬けの御膳 (2025〜2026年)、昼のミニコースや6,000円のコース (2026年7月)',
    neighborhood: '祇園町南側、花見小路のすぐ脇。祇園四条駅から徒歩6分',
    gf_detail: '要確認。グルテンの情報なし: 夜はパスタ、ブルスケッタ、仔牛のカツレツにカルパッチョや炭焼き、昼は魚の炊いた物や石垣牛の照り焼きに牛汁の御膳 (公式メニュー)。コースのアレルギー変更は事前に電話で、当日は不可 (食べログ)。',
    vegan_detail: '要確認。昼の御膳も夜の料理も魚、牛、豚、チーズを使う (公式メニュー)。かき氷のシロップは果物、抹茶、黒糖で、練乳は別のトッピング。',
    notes: '[イタリアン・かき氷・祇園南側、又吉の気軽な姉妹店] 同じ祇園町南側の祇園又吉の気軽な姉妹店で、花ブロックの格子が目印。昼は魚か石垣牛の御膳と天然氷のかき氷、夜は懐石の器で塩水ウニのアーリオオーリオ、石垣牛のボロネーゼ、仔牛のカツレツなどのイタリアン。2025〜2026年の口コミでは鯛茶漬け、濃い抹茶のかき氷、丁寧な見送りが好評。一方、1,800円の抹茶かき氷は普通 (2026年7月)、スタッフ2人でドリンクが遅れた (2026年7月)、料理は普通で出るのにむらがあり飲み物が少ない (2026年10月) という声も。現金不可。',
  });
}

// ================================================================ 祇園もりわき (Gion Moriwaki)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024436/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-moriwaki.jp';
  const LD = day(['12:00', '14:00'], ['18:00', '19:00']); const D = day(['18:00', '19:00']);
  put({
    id: 'kyoto_gion_moriwaki', name: '祇園もりわき (Gion Moriwaki)', category: 'MOM_AND_POP',
    lat: 35.002870, lng: 135.776193, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; courses end with the owner’s handmade 100% buckwheat soba (official site), served in a dashi-based kaiseki.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish kaiseki opening with freshly shaved bonito flakes, with sashimi, sweetfish, eel and dashi soups (2025–2026 reviews).',
    hours_raw: 'Official site: lunch, entry at 12:00 (booking required); dinner, entry 18:00–19:00 (booking required); closed Thursday and Friday lunch, other days irregular. Tabelog gives the same: Mon–Wed, Sat, Sun 12:00–14:00 and 18:00–19:00; Fri 18:00–19:00; Thu closed — the times are entry times, not closing times. Cash only (official site; April 2026). Lunch courses ¥7,000–18,000, dinner ¥12,000/15,000/18,000, plus tax and 10% service (official site). Cancellation: 100% the day before or on the day, 80% two days before, 50% three days before (official site). 10 seats: 6 counter, one table for 4; babies welcome; non-smoking with a smoking spot outside (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 4: D, 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gion south side, east of Hanamikoji — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Seasonal Kyoto kaiseki finished with the owner’s handmade 100% buckwheat soba (official site) · lunch ¥7,000–18,000, dinner ¥12,000–18,000 plus tax and service (official site) · dishes seen: brown-rice soup to start, freshly shaved bonito flakes, sea urchin and crab with egg-yolk vinegar, simmered abalone, hamo and matsutake soup, guji, sweetfish, grilled eel, sashimi of sea bream, tuna and squid (2025–2026 reviews) · Kyoto sake (March 2025)',
    website: SITE, gmaps: gm('祇園もりわき 祇園町南側570-177'), menu_url: SITE,
    notes: '[Kaiseki · Gion south, ten seats and handmade soba] A ten-seat kaiseki counter east of Hanamikoji, opened in 2014 and starred in the 2016 Michelin Guide (Tabelog). Courses start with a brown-rice soup and freshly shaved bonito, run through hamo, sweetfish and eel, and end with the owner’s own 100% buckwheat soba. An April 2026 couple found it rare for Gion: lightly seasoned, traditional Kyoto cooking from ¥12,000 at night, with the owners seeing them off. The site says no English is spoken — book through your hotel. Cash only. Closed Thursday.',
    chef_bio: { chef_name: 'Moriwaki (surname from the shop name; Tabelog gives a full name only in machine translation, so it is not used)', roles: ['Owner-chef (店主), per the official site'], origin: null,
      background: 'Per the official site: a small ten-seat shop born in Gion in 2014, serving seasonal kaiseki that ends with the owner’s handmade 100% buckwheat soba. Tabelog (in its English translation): the chef trained at ryokans, sushi restaurants and other places, then at "Irifune" and "Gion Okada" before going independent; opened 28 August 2014; a Michelin star in the 2016 Michelin Guide, about a year after opening. A January 2025 diner was served by the head chef, the proprietress and another chef.',
      philosophy: 'Official site: to be a shop that always stays close by, for time alone or time with someone dear.',
      specialty: 'Seasonal kaiseki; handmade 100% buckwheat soba to finish.',
      anecdotes: [
        { text: '"I had the handmade 100% buckwheat soba prepared by the owner himself." — March 2025, a second visit.', source: R + 'B504126576/' },
        { text: 'An April 2026 couple, after finding most well-known Gion dinners near ¥30,000, chose the ¥18,000 course here and were seen off by the owners after the meal.', source: R + 'B526527439/' },
        { text: 'An eighth-time regular notes that payment is cash only; a card is taken at booking only for cancellations (April 2026).', source: R + 'B71469480/' },
      ],
      japanese_sources_summary: '公式サイト (gion-moriwaki.jp): 2014年に祇園町に10席だけの小さな店、四季折々の料理と店主の手打ち十割蕎麦を〆に会席料理、おひとりでの時間にも大切な方との時間にも寄り添える店、昼12時入店・夜18時〜19時入店 (要予約)、定休日は木曜日と金曜日の昼ほか不定休、祇園町南側570-177、昼7,000・9,000・12,000・15,000・18,000円、夜12,000・15,000・18,000円 (税別、サービス料10%)、支払いは現金、キャンセルは当日・前日100%・2日前80%・3日前50%、英語は話せないのでホテルのコンシェルジュから電話を、贈りもの (お土産)。食べログ: 日本料理、10席 (カウンター6、テーブル4名1卓)、禁煙 (店外に喫煙所)、カード・電子マネー・QR不可、夜のみサービス料10%、赤ちゃん可、2014年8月28日オープン、ミシュランガイド2016で一つ星 (食べログの紹介文)。口コミ (2025年1月〜2026年10月): 玄米のスープから始まる、削りたての鰹節、雲丹と蟹の黄身酢、鮑、鱧と松茸、ぐじ、鮎、鰻、十割蕎麦で〆、大将と女将ともう一人の料理人、薄味の京料理、見送り。2026年6月の口コミ (日本語、9,000円の昼): 水無月豆腐とシマエビとウニ、鱧落としのお椀、焼いたびわ湖の鮎、鯛・本マグロ・ミルガイ・ケンサキのお造り。',
      confidence: 'medium', sources: [TB, SITE, R + 'B126957641/', R + 'B488522173/', R + 'B499526203/', R + 'B504126576/', R + 'B508257833/', R + 'B511300373/', R + 'B523108220/', R + 'B526527439/', R + 'B538062927/', R + 'B71469480/'] },
    cultural_comfort: { level: 'relay', note: 'The official site says no English is spoken and asks overseas guests to book by phone through their hotel concierge; online booking also offered.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-177',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002870, 135.776193); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 214m — the large 570 block, so the pin stays on the Tabelog point; nearest pin kyoto_gion_maruyama 25 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Course prices from the official site; tax and 10% service extra.', last_checked: TODAY, items: [
      it('昼', '', 'Lunch course', '¥7,000 / ¥9,000 / ¥12,000 / ¥15,000 / ¥18,000', 'Lunch', 'ask', 'no', 'Tax and 10% service extra.', 'lunch_course'),
      it('夜', '', 'Dinner course', '¥12,000 / ¥15,000 / ¥18,000', 'Dinner', 'ask', 'no', 'Tax and 10% service extra.', 'omakase'),
    ] }, {
    cuisine: '店主の手打ち十割蕎麦で〆る季節の京会席 (公式サイト)・昼7,000〜18,000円、夜12,000〜18,000円、税とサービス料別 (公式サイト)・これまでの料理: 始めの玄米のスープ、削りたての鰹節、雲丹と蟹の黄身酢、鮑の煮物、鱧と松茸のお椀、ぐじ、鮎、焼いた鰻、鯛・鮪・烏賊のお造り (2025〜2026年の口コミ)・京都の日本酒 (2025年3月)',
    neighborhood: '祇園町南側、花見小路の東。祇園四条駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。だしの会席で、〆は店主の手打ち十割蕎麦 (公式サイト)。',
    vegan_detail: 'ヴィーガン不可: 削りたての鰹節から始まり、お造り、鮎、鰻、だしのお椀の魚の会席 (2025〜2026年の口コミ)。',
    notes: '[会席・祇園南側、10席と手打ち蕎麦] 花見小路の東の10席の会席のカウンター。2014年開店、ミシュランガイド2016で一つ星 (食べログ)。玄米のスープと削りたての鰹節に始まり、鱧、鮎、鰻と続き、〆は店主の十割蕎麦。2026年4月の夫婦は、祇園では珍しく夜12,000円からの薄味の伝統的な京料理で、帰りは店の人たちが見送ってくれたと書く。英語は話せないので、ホテルを通して予約を (公式サイト)。現金のみ。木曜休み。',
  });
}

save();
