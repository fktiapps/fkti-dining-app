// Kyoto priority (kyoto-missed), worker osw13, batch 90 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 焼肉の岩さん, 屋台村 錦, オステリア エ バール ポレンタ, 祗をん たかはし.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-90');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26004084', 'existence unconfirmed: Tabelog says さざんか亭 本店 "will be temporarily closed from June 1, 2026, until November", with no reopening date confirmed; latest review October 2025 — revisit after it reopens');
skip('26043870', 'closed: 祇園 んてどん — its operator 株式会社UEiQ lists "祇園 んてどん｜営業終了のお知らせ" and its history line "2025年10月23日 祇園 んてどんを京都市東山区に開業（営業終了）" (ueiq.co.jp, fetched 7 November 2026)');
skip('26042484', 'too thin to verify: 祇園 六つ㐂 has three short reviews (September 2025 to September 2026) with no menu, prices or detail beyond the listing');

// ================================================================ 炭火焼肉 焼肉の岩さん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26022036/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gansan.info';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_no_iwasan_kiyamachi', name: '炭火焼肉 焼肉の岩さん (Yakiniku no Iwa San)', category: 'OMNI',
    lat: 35.008085, lng: 135.769551, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: miso-marinated heart and cheek, tare, bibimbap and cold noodles (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a charcoal yakiniku and offal house (Tabelog; reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 17:00–23:00 (last order 22:00); closed Wednesday; occasional maintenance closures. Reservations taken; private hire 20–50. 30 seats, counter and sofas. Non-smoking. QR ordering (July 2025); photo and digital menus; children welcome. Cards, e-money and PayPay. Ground floor of ABCミュージアム, Kiyamachi area below Sanjo. The official site lists two shops: this 木屋町店 and a 先斗町別邸.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi below Sanjo — under 5 min walk from Sanjo stations',
    cuisine: 'A yakiniku house grilling over charcoal shichirin (official site; 2024–2026 reviews) · omakase courses with three kinds of tongue, roast-beef yukhoe over rice, lean cuts and a choice of three offal — ¥5,500 (January 2025), ¥6,000 (January 2026), ¥5,000 with all-you-can-drink (April 2026) · thick-cut root tongue; kalbi, harami, loin; Matsusaka roast-beef yukhoe (2025–2026) · heart miso, cheek (tsurami) miso, white omasum (July 2026) · kimchi, choregi salad; bibimbap, cold noodles; spicy tongue curry and dashi chazuke to finish (official site; 2025)',
    website: SITE, gmaps: gm('焼肉の岩さん 木屋町店'), menu_url: TB + 'dtlmenu/',
    notes: '[Charcoal yakiniku · Kiyamachi below Sanjo, thick tongue and good-value courses] A lively charcoal-shichirin yakiniku near the Kiyamachi bars, best for its thick root-end tongue and ¥5,000–6,000 omakase courses with three tongues, lean cuts and offal of your choice. One August 2025 diner found the meat tough for the price. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'The official site describes two Kyoto shops with different concepts — this charcoal-grill Kiyamachi shop and a Pontocho annex focused on meat quality. Reviewers from 2024 to 2026 praise the tongue, the value of the courses and friendly staff; criticism: "the meat was generally tough and lacked flavor" for the price (August 2025), and QR ordering that felt "a bit lacking in warmth" (July 2025).',
      philosophy: null,
      specialty: 'Thick-cut tongue; omakase courses.',
      anecdotes: [
        { text: 'January 2025: "I enjoyed a JPY 5500 course… I also appreciated that I could choose my three types of horumon."', source: R + 'B499215439/' },
        { text: 'August 2025: "The meat was generally tough and lacked flavor, and I didn\'t feel a sense of richness for the price."', source: R + 'B378647774/' },
      ],
      japanese_sources_summary: '食べログ: 炭火焼肉 焼肉の岩さん、焼肉・ホルモン・韓国料理、中京区大黒町71-22 ABCミュージアム 1F、月・火・木〜日 17:00〜23:00 (L.O. 22:00)、水曜休み、予約可、貸切20〜50名、30席、禁煙、カード・電子マネー・PayPay可。公式サイト: 先斗町別邸と木屋町店の2店、炭火の木屋町店、締めのスパイシータンカレーやしぐれ煮のだし茶漬け。口コミ (2024年11月〜2026年8月、英語): 七輪の炭火、タン3種、ローストビーフのユッケ風、赤身とホルモン3種を選べるおまかせコース (5,500円・6,000円、飲み放題付き5,000円)、厚切りのタン、カルビ、ハラミ、ロース、ハツ味噌、ツラミ味噌、白センマイ、キムチ、チョレギサラダ、ビビンバ、冷麺、QRで注文、肉が硬いとの声 (2025年8月)。',
      confidence: 'medium', sources: [TB, SITE].concat(rv(R, ['B378647774', 'B496590538', 'B499122374', 'B499215439', 'B499703283', 'B507303042', 'B509482819', 'B521609462', 'B527984930', 'B531410095', 'B531417970', 'B533851978'])) },
    cultural_comfort: { level: 'japanese', note: 'QR ordering; photo menu; children welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区大黒町71-22 ABCミュージアム 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008085, 135.769551); GSI resolves 京都府京都市中京区大黒町71番地 to a point about 450m west (likely a different 大黒町 in Nakagyo) — kept the Tabelog point but marked approximate; nearest pin kyr_menshou_ichiryu_manbai_k 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499215439/', R + 'B521609462/', R + 'B527984930/'],
    price_note: 'Course prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (three tongues, lean cuts, three offal)', '¥6,000', 'Course', 'no', 'no', 'January 2026; ¥5,500 in January 2025.', 'yakiniku_course'),
      it('', '', 'Course with all-you-can-drink', '¥5,000', 'Course', 'no', 'no', 'April 2026; seasonal.', 'course_nomihodai'),
      it('', '', 'Thick-cut beef tongue', null, 'Yakiniku', 'ask', 'no', '2025–2026 reviews.', 'beef_tongue'),
    ] }, {
    cuisine: '七輪の炭火で焼く焼肉店 (公式サイト、2024〜2026年の口コミ)・タン3種、ローストビーフのユッケ風ご飯、赤身、選べるホルモン3種のおまかせコース、5,500円 (2025年1月)、6,000円 (2026年1月)、飲み放題付き5,000円 (2026年4月)・根元の厚切りタン、カルビ、ハラミ、ロース、松阪牛のローストビーフユッケ (2025〜2026年)・ハツ味噌、ツラミ味噌、白センマイ (2026年7月)・キムチ、チョレギサラダ、ビビンバ、冷麺、締めのスパイシータンカレーやだし茶漬け (公式サイト、2025年)',
    neighborhood: '木屋町三条下ル付近。三条の各駅から徒歩5分以内',
    gf_detail: 'グルテンフリーではない: 味噌のハツやツラミ、たれ、ビビンバ、冷麺 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 炭火焼肉とホルモンの店 (食べログ、口コミ)。',
    notes: '[炭火焼肉・木屋町三条下ル、厚切りタンとお得なコース] 木屋町の飲み屋街近くのにぎやかな七輪の焼肉店。根元の厚切りタン、タン3種と赤身と選べるホルモンの5,000〜6,000円のおまかせコースが人気。値段の割に肉が硬いという声も (2025年8月)。水曜休み。',
  });
}

// ================================================================ 屋台村 錦
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038776/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_yatai_mura_nishiki', name: '屋台村 錦 (Yatai Mura Nishiki)', category: 'OMNI',
    lat: 35.005095, lng: 135.763597, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, kushikatsu and other battered stall food (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood stalls — shrimp, hamo, squid, scallops, crab sticks; shiitake tempura is cooked alongside (2025–2026 reviews).',
    hours_raw: 'Tabelog: open until 19:30; opening time not listed (reviewers came before 11:00 on a weekday and for breakfast drinks in January 2026); hours may change. No reservations. Cash only per Tabelog (no cards, e-money or QR). A standing bar on the ground floor, seating and restrooms upstairs (2025–2026). A food-stall hall in Nishiki Market (Nakauoya-cho) with several counters selling tempura, sushi, grilled seafood and skewers, and a sake stand that ran ¥100 first glasses (2025 to May 2026; ended by September 2026, when a drink was ¥400).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Inside Nishiki Market (Nakauoya-cho) — 5 min walk from Karasuma',
    cuisine: 'A Nishiki Market food-stall hall with a standing bar and upstairs seating (2025–2026 reviews) · tempura fried again to order — hamo ¥600, shrimp ¥500, squid, hamaguri, shiitake; matcha salt (2025–2026) · shrimp hand-roll sushi with negitoro ¥1,200; raw sweet shrimp two for ¥600 (January 2026) · grilled squid; scallops; giant grilled crab sticks; kushikatsu (December 2025 – January 2026) · sake — ¥100 first glass during the fair, then about ¥400; sakura sake ¥300; highballs; draft beer (2025–2026)',
    website: null, gmaps: gm('屋台村 錦 錦市場'), menu_url: null,
    notes: '[Stall hall · inside Nishiki Market, tempura and a cheap glass of sake] A tourist-friendly food-stall hall in Nishiki Market: re-fried hamo and shrimp tempura, grilled squid and scallops, shrimp hand rolls, and sake by the glass at a standing bar, with seats and restrooms upstairs. Busy and pricier than Kyoto norms, reviewers say. Cash only; closes 19:30.',
    chef_bio: { chef_name: null, roles: ['Multiple stall operators (not named)'], origin: null,
      background: 'Reviewers from 2025 to 2026 describe a new standing bar-cum-food hall in Nishiki Market with several counters (one review names sushi and tempura stalls), crowded downstairs and quieter upstairs. It caters mainly to visitors; criticism: prices "a bit on the higher side for Kyoto" (May 2026), shrimp tempura with "a bit too thick" batter (January 2026), and a noisy first floor (April 2025).',
      philosophy: null,
      specialty: 'Re-fried tempura; sake by the glass.',
      anecdotes: [
        { text: 'March 2026: "When I ordered, they fried it again to warm it up. Under the crispy batter, the hamo was fluffy and tender."', source: R + 'B524195710/' },
        { text: 'January 2026: "Feeling cheerful in the morning, I expressed my gratitude to the staff on my way out, and their warm response of \'We\'ll be waiting for you again\' made me even happier."', source: R + 'B520666709/' },
      ],
      japanese_sources_summary: '食べログ: 屋台村 錦、立ち飲み・魚介料理・天ぷら、中京区中魚屋町486-1、烏丸から347m、19:30まで、時間は変わることがある、予約不可、カード・電子マネー・QR不可、立ち飲み。口コミ (2025年4月〜2026年9月、英語): 錦市場の屋台村、1階は立ち飲み、2階に席とトイレ、温め直す天ぷら (鱧600円、海老500円、いか、はまぐり、しいたけ)、抹茶塩、海老の手巻き寿司1,200円、甘えび2尾600円、焼きいか、ほたて、焼きかにかま、串カツ、日本酒1杯目100円 (2026年9月には終了で400円)、桜酒300円、ハイボール、生ビール、京都にしては高め (2026年5月)、衣が厚い (2026年1月)、1階は混雑 (2025年4月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B510869303', 'B517270217', 'B520054549', 'B520207800', 'B520631605', 'B520666709', 'B524195710', 'B527145670', 'B527471596', 'B535214421', 'B535214477', 'B535601376'])) },
    cultural_comfort: { level: 'english', note: 'Tourist food hall; English spoken at stalls; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中魚屋町486-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005095, 135.763597); cross-checked: GSI 京都府京都市中京区中魚屋町486番地 (lot) 11m; nearest pin kyoto_nishiki_hirano 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520207800/', R + 'B535601376/'],
    price_note: 'Prices from January and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hamo tempura', '¥600', 'Tempura', 'no', 'no', 'January 2026.', 'hamo_tempura'),
      it('', '', 'Shrimp tempura', '¥500', 'Tempura', 'no', 'no', 'January 2026.', 'shrimp_tempura'),
      it('', '', 'Shrimp hand-roll sushi with negitoro', '¥1,200', 'Sushi', 'ask', 'no', 'January 2026.', 'shrimp_temaki'),
      it('', '', 'Glass of sake', '¥400', 'Drink', 'ask', 'ask', 'September 2026; ¥100 first glass during the earlier fair.', 'sake_glass'),
    ] }, {
    cuisine: '立ち飲みと2階の席のある錦市場の屋台村 (2025〜2026年の口コミ)・注文ごとに揚げ直す天ぷら、鱧600円、海老500円、いか、はまぐり、しいたけ、抹茶塩 (2025〜2026年)・ねぎとろ入りの海老の手巻き寿司1,200円、生の甘えび2尾600円 (2026年1月)・焼きいか、ほたて、大きな焼きかにかま、串カツ (2025年12月〜2026年1月)・日本酒はフェア中は1杯目100円、その後は約400円、桜酒300円、ハイボール、生ビール (2025〜2026年)',
    neighborhood: '錦市場の中 (中魚屋町)。烏丸から徒歩5分',
    gf_detail: 'グルテンフリーではない: 天ぷら、串カツなど衣のある屋台料理 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 海老、鱧、いか、ほたて、かにかまの屋台。しいたけの天ぷらも同じ油 (2025〜2026年の口コミ)。',
    notes: '[屋台村・錦市場の中、天ぷらと安い一杯] 錦市場の観光客向けの屋台村。揚げ直す鱧や海老の天ぷら、焼きいかやほたて、海老の手巻き寿司、立ち飲みで日本酒を一杯。2階に席とトイレ。混んでいて京都にしては高めという声。現金のみ、19時半まで。',
  });
}

// ================================================================ オステリア エ バール ポレンタ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043876/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://polenta.jp';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_osteria_bar_polenta_fuyacho', name: 'オステリア エ バール ポレンタ (Osteria e Bar Polenta)', category: 'OMNI',
    lat: 34.999804, lng: 135.765436, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, gratin and fried sweetfish; the polenta itself is corn — ask how it is finished (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu tripe, fish, cheese and egg throughout (2025–2026 reviews).',
    hours_raw: 'Official site and Tabelog: 17:00–23:00 (food last order 22:00, drinks 22:30); closed Wednesday. One drink per person (official site). Reservations recommended — walk-ins turned away when busy (October 2026); arriving 15+ minutes late without notice may lose the table. 19 seats: 5 at the counter, 14 at tables. Non-smoking. Cards; no e-money or QR. In 鍵屋小路会館 on Fuyacho below Takatsuji. Moved here on 25 September 2025 after 15 years in Teramachi (official site; Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho below Takatsuji — 5 min walk from Hankyu Kawaramachi',
    cuisine: 'An Italian osteria and wine bar run by an owner-chef with a Sommelier Excellence title, now in Fuyacho after 15 years in Teramachi (official site; 2025–2026 reviews) · the namesake grilled polenta with Wagyu tripe in tomato ¥2,000 (December 2025; August 2026) · fresh-fish carpaccio with bottarga ¥1,800 — fish direct from Maizuru and elsewhere (official site; 2025–2026) · four-cheese risotto ¥2,200; crab tomato-cream tagliatelle ¥2,500; homemade-bacon truffle carbonara (2025–2026) · truffle and onsen-egg gratin ¥2,500; fried or confit ayu ¥1,500–1,600; A5 Wagyu bistecca 200 g ¥5,600; cheese platter ¥2,000; stewed bear (October 2026) · Italian wine by the glass and decanter',
    website: SITE, gmaps: gm('ポレンタ 麩屋町高辻'), menu_url: SITE,
    notes: '[Italian & wine · Fuyacho-Takatsuji, polenta and a sommelier chef] A calm, newly moved osteria (15 years in Teramachi before) where the sommelier owner-chef pours Italian wine with an all-à-la-carte menu: grilled polenta with Wagyu tripe, Maizuru-fish carpaccio, truffle carbonara and A5 bistecca. One drink each; book ahead. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef, sommelier'], origin: null,
      background: 'The official site says the owner-chef holds the Sommelier Excellence qualification and that the restaurant ran 15 years in Teramachi before moving to Fuyacho-Takatsuji on 25 September 2025. Returning regulars in 2026 say the food and service are "just as excellent as before" (March 2026); reviewers praise fast service and a long menu; one January 2026 diner came on the recommendation of a Sapporo restaurant.',
      philosophy: null,
      specialty: 'Grilled polenta; Italian wine.',
      anecdotes: [
        { text: 'August 2026: "The fragrant grilled polenta paired with the rich Wagyu trippa stew makes for a delightful dish that pairs perfectly with wine."', source: R + 'B534639484/' },
        { text: 'October 2026: "As more customers kept coming in, they were turning people away, so I recommend making a reservation."', source: R + 'B538304812/' },
      ],
      japanese_sources_summary: '公式サイト: オステリア エ バール ポレンタ、麩屋町高辻下ルのワインとイタリア料理店、ソムリエ・エクセレンス資格のオーナーシェフ、和牛と舞鶴漁港直送などの鮮魚、寺町で15年営業し9月25日に移転オープン、17時〜23時 (22時フード LO、22時30分ドリンク LO)、1ドリンク制、水曜定休。食べログ: 下京区高辻通麩屋町下ル鍵屋町219-2 鍵屋小路会館 A、阪急河原町駅から徒歩5分、予約可、19席 (カウンター5、テーブル14)、禁煙、カード可、電子マネー・QR不可、2025年9月25日オープン。口コミ (2025年12月〜2026年10月、英語): 和牛トリッパの焼きポレンタ2,000円、鮮魚のカルパッチョとからすみ1,800円、4種チーズのリゾット2,200円、かにのトマトクリームのタリアテッレ2,500円、自家製ベーコンのトリュフカルボナーラ、トリュフと温泉卵のグラタン2,500円、鮎のフリットやコンフィ、A5和牛のビステッカ200g 5,600円、チーズ盛り合わせ2,000円、熊の煮込み、イタリアワイン、予約がおすすめ。',
      confidence: 'medium', sources: [SITE, TB].concat(rv(R, ['B518742343', 'B522386034', 'B523767535', 'B525339811', 'B529130174', 'B532540754', 'B534639484', 'B535673248', 'B536165542', 'B537512356', 'B537649384', 'B538304812'])) },
    cultural_comfort: { level: 'japanese', note: 'One drink per person; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻通麩屋町下ル鍵屋町219-2 鍵屋小路会館 A',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (open notice for 7 November 2026) and Tabelog listing with reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999804, 135.765436); cross-checked: GSI 京都府京都市下京区鍵屋町219番地 (lot) 17m; nearest pin kyoto_sichuan_yuan 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518742343/', R + 'B534639484/'],
    price_note: 'Prices from December 2025 and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Grilled polenta with Wagyu tripe in tomato', '¥2,000', 'Antipasti', 'ask', 'no', 'December 2025; August 2026.', 'polenta_trippa'),
      it('', '', 'Fresh-fish carpaccio with bottarga', '¥1,800', 'Antipasti', 'ask', 'no', 'December 2025; August 2026.', 'carpaccio'),
      it('', '', 'Four-cheese risotto', '¥2,200', 'Primi', 'ask', 'no', 'December 2025.', 'risotto'),
      it('', '', 'Crab tomato-cream tagliatelle', '¥2,500', 'Primi', 'no', 'no', 'December 2025.', 'tagliatelle'),
      it('', '', 'Truffle and onsen-egg gratin', '¥2,500', 'Secondi', 'no', 'no', 'August 2026.', 'gratin'),
      it('', '', 'A5 Wagyu bistecca (200 g)', '¥5,600', 'Secondi', 'ask', 'no', 'August 2026.', 'bistecca'),
    ] }, {
    cuisine: 'ソムリエ・エクセレンスのオーナーシェフのイタリア料理とワインの店。寺町で15年ののち麩屋町へ (公式サイト、2025〜2026年の口コミ)・店名の焼きポレンタと和牛トリッパのトマト煮2,000円 (2025年12月、2026年8月)・舞鶴などから直送の鮮魚のカルパッチョとからすみ1,800円 (公式サイト、2025〜2026年)・4種チーズのリゾット2,200円、かにのトマトクリームのタリアテッレ2,500円、自家製ベーコンのトリュフカルボナーラ (2025〜2026年)・トリュフと温泉卵のグラタン2,500円、鮎のフリットやコンフィ1,500〜1,600円、A5和牛のビステッカ200g 5,600円、チーズ盛り合わせ2,000円、熊の煮込み (2026年10月)・イタリアワインをグラスやデキャンタで',
    neighborhood: '麩屋町高辻下ル。阪急河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: パスタ、グラタン、鮎のフリット。ポレンタはとうもろこしだが仕上げは要確認 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 和牛トリッパ、魚、チーズ、卵を多用 (2025〜2026年の口コミ)。',
    notes: '[イタリアンとワイン・麩屋町高辻、ポレンタとソムリエのシェフ] 寺町で15年営業し移転した落ち着いたオステリア。ソムリエのオーナーシェフがイタリアワインを注ぎ、すべてアラカルトで、和牛トリッパの焼きポレンタ、舞鶴の魚のカルパッチョ、トリュフのカルボナーラ、A5のビステッカ。1ドリンク制、要予約。水曜休み。',
  });
}

// ================================================================ 祗をん たかはし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006622/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://giontakahashi.com'; const MENU = 'https://giontakahashi.com/oryouri/'; const ACCESS = 'https://giontakahashi.com/access/'; const GREET = 'https://giontakahashi.com/goaisatu/';
  put({
    id: 'kyoto_gion_takahashi', name: '祗をん たかはし (Gion Takahashi)', category: 'OMNI',
    lat: 35.00223, lng: 135.774422, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-seasoned kaiseki, steak and fugu karaage; ask ahead about soy (official menu; 2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led kaiseki with dashi, fugu and Kyoto beef (official menu; reviews).',
    hours_raw: 'Official site: 17:30–20:00 (last order); closed Sunday, Monday, New Year and Obon. Tabelog: from 18:00, last entry 19:30; reservation only; lunch for groups of four or more by booking. Same-day cancellations are charged 100% of the meal (official site). 23 seats: 7 at the counter and private tatami rooms upstairs for up to 16. Designated smoking area. Cards; no e-money or QR. On a quiet lane off Hanamikoji in Gion-machi Minamigawa; in business here for over 35 years (official site).',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Lane off Hanamikoji, Gion-machi Minamigawa — 7–8 min walk from Gion-Shijo',
    cuisine: 'A family-run Gion kaiseki house of over 35 years (official site; 2022–2026 reviews) · seasonal omakase kaiseki, nine dishes ¥14,300 including tax; fugu kaiseki November–March ¥17,600 — appetizer, tessa, grilled fugu, tetchiri, zosui; shirako and fugu karaage on request when booking (official menu) · summer: hamo as sashimi, grilled and in hotpot; Lake Biwa or Hozu River ayu; pumpkin soup after Gion Matsuri (2022–2026) · Kyoto or Omi beef steak; clay-pot rice with chirimen sansho (2022–2023) · kuzukiri to finish (June 2026) · Kyoto sake, a house barley shochu, French wine; Edo kiriko and Baccarat glassware (2026)',
    website: SITE, gmaps: gm('祗をん たかはし 祇園'), menu_url: MENU,
    notes: '[Kaiseki · lane off Hanamikoji, a family-run Gion house of 35+ years] A quiet two-storey kaiseki house on a lane off Hanamikoji, in business for over 35 years under owner Takahashi, with family service: a nine-dish seasonal omakase at ¥14,300, or fugu courses in winter, with hamo and ayu in summer and a Kyoto-beef steak. Private tatami rooms upstairs. Book ahead; 100% same-day cancellation fee. Closed Sunday and Monday.',
    chef_bio: { chef_name: '高橋 (surname per the official greeting)', roles: ['Owner (店主)'], origin: null,
      background: 'The official greeting, signed 店主 高橋, says the restaurant has been in Gion-machi Minamigawa for over 35 years. An August 2022 reviewer describes "the craftsmanship of the second-generation chef" and recalls that the chef previously worked at Mizai; reviewers in 2023–2026 praise the hostess and the "family-run service" (April 2026). Criticism: smallish portions (May 2024) and no drink menu or prices (May 2024).',
      philosophy: 'Dishes to enjoy Japan\'s four seasons and seasonal ingredients with all five senses (official greeting).',
      specialty: 'Seasonal kaiseki; winter fugu.',
      anecdotes: [
        { text: 'March 2022: "As always, we chose the JPY 10,000 course, which includes tax and service, making for clear pricing. The drink prices are also very reasonable."', source: R + 'B111455053/' },
        { text: 'June 2026: "the final dish, kuzukiri, was so exquisite that it brought me to tears."', source: R + 'B519219734/' },
      ],
      japanese_sources_summary: '公式サイト: 京都祇園 祗をんたかはし、東山区祇園町南側570-121、京阪四条・阪急河原町より徒歩約8分、17:30〜20:00 (L.O.)、日曜・月曜・年末年始・お盆休み、当日キャンセルは料金の100%、季節のおまかせ会席13,000円 [全9品] (税込14,300円)、ふぐ会席コース (11月〜3月) 16,000円 (税込17,600円)、前菜・てっさ・焼ふぐ・てっちり・雑炊・香物・デザート、白子・ふぐ唐揚は予約時に、ご挨拶「祇園町南側で店を構えて35年を過ぎました」店主 高橋。食べログ: 日本料理・ふぐ、18時から (最終入店19:30)、予約制、4名以上で昼も、23席 (カウンター7、個室16)、カード可。口コミ (2022年3月〜2026年8月、英語): 二代目の料理人、鱧の刺身・焼き物・鍋、鮎、祇園祭のあとはかぼちゃのすり流し、近江牛や京都牛のステーキ、ちりめん山椒の土鍋ご飯、くずきり、自家製の麦焼酎、江戸切子やバカラのグラス、家族のもてなし、量はやや少なめ・飲み物の価格表がない (2024年5月)。',
      confidence: 'medium', sources: [SITE, GREET, MENU, ACCESS, TB].concat(rv(R, ['B111455053', 'B453722180', 'B470641164', 'B486307478', 'B491436170', 'B514702857', 'B519219734', 'B520387266', 'B526423415', 'B530836323'])) },
    cultural_comfort: { level: 'japanese', note: 'Reservation only; private tatami rooms; 100% same-day cancellation fee.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-121',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002230, 135.774422); GSI resolves only the parent lot 京都府京都市東山区祇園町南側570番地, 156m away — marked approximate; nearest pin kyoto_gion_fukushi 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Course prices from the official menu page (tax included).', last_checked: TODAY, items: [
      it('季節のおまかせ会席', '', 'Seasonal omakase kaiseki (nine dishes)', '¥14,300', 'Course', 'no', 'no', 'Official menu.', 'kaiseki_course'),
      it('ふぐ会席コース', '', 'Fugu kaiseki (November–March)', '¥17,600', 'Course', 'no', 'no', 'Official menu.', 'fugu_course'),
    ] }, {
    cuisine: '35年を超える家族経営の祇園の会席の店 (公式サイト、2022〜2026年の口コミ)・季節のおまかせ会席全9品14,300円 (税込)、11月〜3月のふぐ会席17,600円: 前菜、てっさ、焼ふぐ、てっちり、雑炊、白子やふぐ唐揚は予約時に (公式のお品書き)・夏は鱧の刺身・焼き物・鍋、琵琶湖や保津川の鮎、祇園祭のあとはかぼちゃのすり流し (2022〜2026年)・京都牛や近江牛のステーキ、ちりめん山椒の土鍋ご飯 (2022〜2023年)・締めのくずきり (2026年6月)・京都の日本酒、自家製の麦焼酎、フランスワイン、江戸切子やバカラのグラス (2026年)',
    neighborhood: '花見小路から入った路地、祇園町南側。祇園四条から徒歩7〜8分',
    gf_detail: 'グルテンフリーではない: 醤油を使う会席、ステーキ、ふぐ唐揚。醤油は予約時に相談を (公式のお品書き、2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚とだしの会席、ふぐ、京都牛 (公式のお品書き、口コミ)。',
    notes: '[会席・花見小路の路地、35年続く祇園の家族の店] 花見小路から入った静かな路地の2階建ての会席の店で、店主 高橋のもと35年以上続く、家族でもてなす店。季節のおまかせ9品14,300円か冬のふぐ会席、夏は鱧と鮎、京都牛のステーキ。2階に座敷の個室。要予約、当日キャンセルは100%。日曜・月曜休み。',
  });
}

save();
