// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 95.
//   + カレー料理の店白川 Curry Ryori no Mise Shirakawa (European-style curry near Karasuma-Oike, 25 years in business)
//   + めん蔵人 Men Kurodo (soba and udon with yuba and tea soba, upstairs on the Kiyomizu approach)
//   + サルティンバンコ SALTINBANCO (long-running Italian with course lunches, Oshikoji off Karasuma-Oike)
//   + 麺処 まると Mendokoro Maruto (Japanese-style chicken and dashi ramen by Kiyomizu-dera; sister of Feliz-團斗)
//   - 一千花 京都清水産寧坂店, 割烹 佐樂: skipped (too thin).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26038244, 26034968 (skipped), 26024030,
//   26018234 (skipped), 26001248, 26039306. Next in lane: 26019266 栄山堂, 26044982 Flammes, 26016710 MED, 26028440 京ばあむ.
//   queue-status.jsonl grepped for each brand (白川, 一千花, 蔵人, 佐樂, サルティンバンコ, まると, 團斗): no earlier rulings.
//   Data check (current main, hidden included): none of the four drafted is in data/kyoto.json by Tabelog id, name, site
//   or address. Feliz-團斗 (kyoto_feliz_maruto) is in data — the miso-and-washoku main shop whose site presents 麺処
//   まると as its ramen offshoot: a different concept, drafted as a sister, flagged.
//   Same-name count: 白川, めん蔵人, サルティンバンコ — one shop each (めん蔵人 in a Tabelog name search); operators not found.
//   Service charges, checked against the Japanese original: none listed. サルティンバンコ: corkage ¥1,000 a bottle, dinner
//   (Tabelog remarks).
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-95');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034968', '一千花 京都清水産寧坂店: too thin — one 2025–2026 review (February 2025, three lines about dango); no hours, seats or prices listed');
skip('26018234', '割烹 佐樂: too thin — one short February 2025 review; the others date from 2016 or earlier');

// ================================================================ カレー料理の店白川
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038244/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '17:00']);
  put({
    id: 'kyoto_curry_shirakawa_nijo', name: 'カレー料理の店白川 (Curry Ryori no Mise Shirakawa)', category: 'OMNI',
    lat: 35.013591, lng: 135.760761, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: European-style roux curry, tonkatsu and chicken-katsu toppings, curry doria (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-tendon, beef-tongue and keema curries, katsu and egg toppings; even the vegetable curry comes as a roux curry (2025–2026 reviews).',
    hours_raw: 'Monday–Wednesday and Friday–Sunday 11:30–17:00, open straight through; closed Thursday (Tabelog; August 2026). Cash only: no cards, e-money or QR (Tabelog). About 9 counter seats and two tables (August 2026). Non-smoking (Tabelog). A step at the entrance (January 2025). 5 min on foot from Karasuma-Oike (Tabelog). Here since September 2022, after moving from Zest Oike; about 25 years in business (Tabelog; April 2025).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nijo-dori west of Higashinotoin — 5 min from Karasuma-Oike',
    cuisine: 'Creamy European-style curry in three heat levels, mild to hot, with self-serve natural fukujinzuke (2025–2026) · lunch-only beef-tendon curry braised in red wine, with mini salad ¥1,200 (August 2026) · jumbo tonkatsu curry ¥1,500, +¥100 raw egg (April 2025; October 2026) · keema curry doria with mini salad ¥1,400 (April 2025) · omurice keema curry ¥1,600 (August 2026) · colourful vegetable curry; cheese-omelette curry with spiced mushroom rice; beef-tongue curry; hayashi rice (January and August 2025)',
    website: null, gmaps: gm('カレー料理の店白川'), menu_url: TB,
    notes: '[Curry · Nijo near Karasuma-Oike, all-afternoon] A long-running curry house (about 25 years, here since 2022) serving rich European-style curry straight through from 11:30 to 17:00 — handy for a late lunch: red-wine beef-tendon curry, jumbo tonkatsu curry, omurice keema and curry doria. Cash only; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'An April 2025 reviewer says the shop has been running for 25 years and moved here from Zest Oike three years earlier; Tabelog gives September 2022 for this site. No operator was found.',
      philosophy: null, specialty: 'European-style beef curry.',
      anecdotes: [
        { text: 'A January 2025 couple returned and, it turned out, ordered exactly the same cheese-omelette and beef-tongue curries as a year before.', source: R + 'B477185762/' },
        { text: 'An August 2026 lunch-goer got the last bowl of the limited beef-tendon curry.', source: R + 'B534610052/' },
      ],
      japanese_sources_summary: '食べログ: カレー料理の店白川、カレー、中京区二条通東洞院西入仁王門町26-1 御所南二条ビル 1F、地下鉄烏丸御池駅から徒歩5分・丸太町駅から徒歩6分、月〜水・金〜日 11:30〜17:00、木曜定休、2022年9月11日オープン、カード・電子マネー・QR不可、禁煙。口コミ (2025〜2026年、英語): 創業25年、3年前にゼスト御池から移転、欧風カレー、辛さは甘口・中辛・辛口、昼限定の牛すじの赤ワイン煮カレー (ミニサラダ付き) 1,200円、ジャンボとんかつカレー1,500円と生卵100円、キーマカレードリア (ミニサラダ付き) 1,400円、オムライスキーマカレー1,600円、彩り野菜カレー、チーズオムレツカレーとスパイスのきのこご飯、牛タンカレー、ハヤシライス、無着色の福神漬けは自分で取る、カウンター4席と5席・4人と2人のテーブル、入口に段差。',
      confidence: 'low', sources: [TB, R + 'B477185762/', R + 'B499431234/', R + 'B505225117/', R + 'B505678827/', R + 'B521336430/', R + 'B533013962/', R + 'B534286441/', R + 'B534314479/', R + 'B534610052/', R + 'B537620533/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open all afternoon; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通東洞院西入仁王門町26-1 御所南二条ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.013591, 135.760761); cross-checked: GSI 京都府京都市中京区仁王門町26番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533013962/', R + 'B505225117/', R + 'B534314479/'],
    price_note: 'Prices from 2025–2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Beef-tendon curry with mini salad (lunch only)', '¥1,200', 'Curry', 'no', 'no', 'August 2026.', 'gyusuji'),
      it('', '', 'Jumbo tonkatsu curry', '¥1,500', 'Curry', 'no', 'no', 'April 2025; October 2026.', 'jumbo_katsu'),
      it('', '', 'Keema curry doria with mini salad', '¥1,400', 'Curry', 'no', 'no', 'April 2025.', 'doria'),
      it('', '', 'Omurice keema curry', '¥1,600', 'Curry', 'no', 'no', 'August 2026.', 'omu_keema'),
      it('', '', 'Colourful vegetable curry', '', 'Curry', 'no', 'ask', 'January and August 2025.', 'yasai'),
    ] }, {
    cuisine: '甘口・中辛・辛口から選ぶクリーミーな欧風カレー、無着色の福神漬けは自分で (2025〜2026年)・昼限定の牛すじの赤ワイン煮カレー、ミニサラダ付き1,200円 (2026年8月)・ジャンボとんかつカレー1,500円、生卵+100円 (2025年4月、2026年10月)・キーマカレードリア、ミニサラダ付き1,400円 (2025年4月)・オムライスキーマカレー1,600円 (2026年8月)・彩り野菜カレー、スパイスのきのこご飯のチーズオムレツカレー、牛タンカレー、ハヤシライス (2025年1・8月)',
    neighborhood: '二条通、東洞院の西。烏丸御池から徒歩5分',
    gf_detail: 'グルテンフリーではない。欧風のルーのカレー、とんかつやチキンカツ、カレードリア (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。牛すじ、牛タン、キーマのカレー、カツや卵のトッピング。野菜カレーもルーのカレー (2025〜2026年の口コミ)。',
    notes: '[カレー・二条烏丸御池、昼から夕方まで通し] 創業約25年 (2022年からこの場所) のカレーの店。11時半から17時まで通しで濃厚な欧風カレーを出すので遅めの昼食にも便利。牛すじの赤ワイン煮カレー、ジャンボとんかつカレー、オムライスキーマ、カレードリア。現金のみ、木曜定休。',
  });
}

// ================================================================ めん蔵人
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024030/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_men_kurodo_kiyomizu', name: 'めん蔵人 (Men Kurodo)', category: 'OMNI',
    lat: 34.996068, lng: 135.780721, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: udon, soba and matcha soba (wheat content not stated), tempura (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: noodles in dashi broth; shrimp tempura (2025–2026 reviews).',
    hours_raw: '11:00–17:00 daily (Tabelog). No reservations (Tabelog). Cards, IC and e-money, QR (Tabelog). 50 seats on the second floor, counter seats looking down on the Kiyomizu approach and tables (Tabelog; December 2025; May 2026). Non-smoking (Tabelog). Busy at lunch; quieter mid-afternoon (March and September 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu approach — on the way to Kiyomizu-dera',
    cuisine: 'Soba and udon at fair prices on the road to Kiyomizu-dera (March and September 2025) · Kyoto yuba soba or udon, with a choice of soba, udon or matcha soba (April, September and December 2025) · cold cha-soba (December 2025) · tempura soba or udon ¥1,760; early-summer tempura soba with corn ¥1,980 (May 2026) · tempura zaru soba with shrimp (January 2025) · Kansai-style dashi (March 2026)',
    website: null, gmaps: gm('めん蔵人 清水'), menu_url: TB,
    notes: '[Soba and udon · Kiyomizu approach, upstairs] A roomy upstairs noodle shop on the way to Kiyomizu-dera, with counter seats looking down on the street: yuba soba or udon, green-tea soba and tempura bowls at prices that feel fair for the area. Open daily 11:00–17:00; no reservations.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No operator or chef details were found.', philosophy: null, specialty: 'Yuba soba and matcha soba.',
      anecdotes: [
        { text: 'A September 2025 solo visitor whose phone had died found a charging spot right outside and stayed for green-tea soba with yuba.', source: R + 'B521401810/' },
      ],
      japanese_sources_summary: '食べログ: めん蔵人、麺類、東山区清水2-218-1 2F、毎日 11:00〜17:00、予約不可、カード・交通系IC・電子マネー・QR可、50席、禁煙。口コミ (2025〜2026年、英語): 清水寺への道、観光地にしては手頃、京ゆばそば・うどん (そば・うどん・茶そばから選ぶ)、冷たい茶そば、天ぷらそば・うどん1,760円、とうもろこしの天ぷらの初夏の天ぷらそば1,980円、海老の天ぷらのざるそば、関西の出汁、2階でカウンター席から通りが見える。',
      confidence: 'low', sources: [TB, R + 'B503301932/', R + 'B505257930/', R + 'B515402249/', R + 'B519155360/', R + 'B521401810/', R + 'B524177966/', R + 'B529068508/', R + 'B532479310/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sightseeing-route noodle shop; many overseas visitors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水2-218-1 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January 2025 to May 2026.' },
    pin_source: `Tabelog ${TB} (34.996068, 135.780721); cross-checked: GSI 京都府京都市東山区清水二丁目218番地 (lot) 49m; 麺処 まると (this batch) is 17 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529068508/'],
    price_note: 'Prices from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tempura soba or udon', '¥1,760', 'Noodles', 'no', 'no', 'May 2026.', 'tempura_soba'),
      it('', '', 'Early-summer tempura soba with corn tempura', '¥1,980', 'Noodles', 'no', 'no', 'May 2026.', 'shoka_tempura'),
      it('', '', 'Kyoto yuba soba or udon', '', 'Noodles', 'no', 'no', 'April, September and December 2025.', 'yuba_soba'),
      it('', '', 'Cold cha-soba', '', 'Noodles', 'no', 'no', 'December 2025.', 'chasoba'),
    ] }, {
    cuisine: '清水寺への道で手頃な値段のそばとうどん (2025年3・9月)・京ゆばそば・うどん、そば・うどん・茶そばから選ぶ (2025年4・9・12月)・冷たい茶そば (2025年12月)・天ぷらそば・うどん1,760円、とうもろこしの天ぷらの初夏の天ぷらそば1,980円 (2026年5月)・海老の天ぷらのざるそば (2025年1月)・関西の出汁 (2026年3月)',
    neighborhood: '清水寺への参道',
    gf_detail: 'グルテンフリーではない。うどん、そば、茶そば (小麦の割合は書かれていない)、天ぷら (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁の麺、海老天ぷら (2025〜2026年の口コミ)。',
    notes: '[そば・うどん・清水への参道、2階] 清水寺へ向かう道の2階の広い麺の店。カウンター席から通りを見下ろせる。湯葉のそばやうどん、茶そば、天ぷらの丼などを、この界隈にしては手頃な値段で。毎日11時〜17時、予約不可。',
  });
}

// ================================================================ サルティンバンコ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001248/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://saltinbanco.jp/';
  const HWD = day(['11:30', '14:00'], ['18:00', '22:00']); const HWE = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_saltinbanco_oshikoji', name: 'サルティンバンコ (SALTINBANCO)', category: 'OMNI',
    lat: 35.012364, lng: 135.758514, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Course lunches and dinners of antipasti, pasta, risotto, mains and desserts; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A monthly platter of nine vegetables features on the course, but nothing is described as vegan (Tabelog; 2025–2026 reviews).',
    hours_raw: 'Tuesday–Thursday last orders 11:30–14:00 (lunch) and 18:00–22:00 (dinner); Saturday, Sunday and public holidays 12:00–15:00 and 18:00–22:00 (last orders); dinner course last orders 20:30; closed Monday and the third Tuesday (Tabelog). Corkage ¥1,000 a bottle, dinner (Tabelog). 26 seats: 4 at the counter, 22 at tables (Tabelog). 2 min from the Karasuma-Oike subway exit (October 2026).',
    hours: { 1: HWD, 2: HWD, 3: HWD, 5: HWE, 6: HWE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oshikoji — 2 min from Karasuma-Oike',
    cuisine: 'Italian built on producers’ ingredients; a monthly antipasto of nine vegetables incl. rare Italian greens such as friarielli (Tabelog) · lunch courses ¥2,700 and ¥4,900; “A lunch” of antipasti, pasta and dessert (August 2025; March and October 2026) · antipasti with Kujo-negi savoury cake, salmon carpaccio, maitake fritters (January 2026) · Shogoin-turnip soup; firefly squid and nanohana aglio e olio; organic-lemon tiramisu (March 2026) · sanma risotto; edamame truffle carbonara; pork saltimbocca; espresso pudding with chestnut sauce (October 2025; January 2026) · à la carte yellowfin tuna carpaccio ¥1,800 (July 2025) · conger-eel and Manganji pasta; hamburg steak (August 2025)',
    website: SITE, gmaps: gm('サルティンバンコ 京都'), menu_url: SITE,
    notes: '[Italian · Oshikoji near Karasuma-Oike, long-running] A warm, burgundy-walled Italian near Karasuma-Oike that regulars have known for decades: good-value lunch courses from ¥2,700 with a big antipasto plate of Kyoto vegetables, seasonal pasta and an espresso pudding people come back for; dinner courses and some à la carte. Closed Monday and third Tuesdays.',
    chef_bio: { chef_name: 'Isamu Sawada (kanji not sourced)', roles: ['Chef'], origin: null,
      background: 'Tabelog’s shop text introduces Chef Isamu Sawada. A June 2026 reviewer ate here weekly 25–30 years ago when working nearby; a May 2026 reviewer calls it a Bib Gourmand selection. No operator was found.',
      philosophy: 'Every ingredient is a producer’s pride, and the chef’s role is to pass that quality on to guests (Tabelog shop text, paraphrased).',
      specialty: 'Antipasto of seasonal vegetables; espresso pudding.',
      anecdotes: [
        { text: 'A June 2026 diner returned after decades, having eaten here once or twice a week as an office worker next door 25–30 years earlier.', source: R + 'B529317395/' },
        { text: 'A January 2026 lunch guest said the espresso pudding with Japanese-chestnut sauce alone was worth a return visit.', source: R + 'B521224638/' },
      ],
      japanese_sources_summary: '公式サイト: サルティンバンコ、記念日や会食、ランチやディナーに、料理はコースが基本 (Aランチ、Bランチ、シェフのおすすめランチ、シェフのおまかせコース、ペアリングワインコース)、イタリアンおせち、パネトーネ。食べログ: サルティンバンコ、イタリアン、中京区押小路通両替町西入ル金吹町460 ベルメゾン 1F、火〜木 11:30〜14:00 (L.O.)・18:00〜22:00 (L.O.)、土日祝日 12:00〜15:00 (L.O.)・18:00〜22:00 (L.O.)、月曜・第3火曜定休、ディナーコースL.O. 20:30、持ち込み料1本1,000円 (ディナー)、26席 (カウンター4、テーブル22)、Isamu Sawadaシェフ「食材は生産者の誇り」、月替わりの9種の野菜の前菜盛り合わせ (フリアリエッリなど)。口コミ (2025〜2026年、英語): ランチコース2,700円・4,900円、前菜盛り合わせ、九条ねぎのケークサレ、サーモンのカルパッチョ、聖護院かぶらのスープ、ホタルイカと菜の花のアーリオオーリオ、有機レモンのティラミス、秋刀魚のリゾット、枝豆とトリュフのカルボナーラ、サルティンボッカ、栗のエスプレッソプリン、キハダマグロのカルパッチョ1,800円、25〜30年前から通う客、ビブグルマンとの記述。',
      confidence: 'medium', sources: [TB, SITE, R + 'B490809424/', R + 'B512570277/', R + 'B516039224/', R + 'B518711549/', R + 'B521224638/', R + 'B523469215/', R + 'B529317395/', R + 'B532864026/', R + 'B537001649/', R + 'B71042761/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course-based; written descriptions of the antipasti (January 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通両替町西入ル金吹町460 ベルメゾン 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site (news to November 2026) and Tabelog listing; reviews dated July 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.012364, 135.758514); cross-checked: GSI 京都府京都市中京区金吹町460番地 (lot) 58m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512570277/', R + 'B71042761/'],
    price_note: 'Prices from 2025 reviews; site prices not readable. Corkage ¥1,000 a bottle at dinner.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (antipasti, pasta, dessert)', '¥2,700', 'Lunch', 'no', 'ask', 'August 2025.', 'lunch_a'),
      it('', '', 'Lunch course with main', '¥4,900', 'Lunch', 'no', 'no', 'August 2025.', 'lunch_b'),
      it('', '', 'Yellowfin tuna carpaccio (à la carte)', '¥1,800', 'Antipasti', 'ask', 'no', 'July 2025.', 'carpaccio'),
      it('', '', 'Espresso pudding with chestnut sauce', '', 'Dessert', 'ask', 'no', 'October 2025; January 2026.', 'budino'),
    ] }, {
    cuisine: '生産者の食材を生かしたイタリアン。月替わりのフリアリエッリなど9種の野菜の前菜 (食べログ)・ランチコース2,700円と4,900円、前菜・パスタ・デザートの「Aランチ」(2025年8月、2026年3・10月)・九条ねぎのケークサレ、サーモンのカルパッチョ、舞茸のフリットの前菜 (2026年1月)・聖護院かぶらのスープ、ホタルイカと菜の花のアーリオオーリオ、有機レモンのティラミス (2026年3月)・秋刀魚のリゾット、枝豆とトリュフのカルボナーラ、豚のサルティンボッカ、栗のソースのエスプレッソプリン (2025年10月、2026年1月)・アラカルトのキハダマグロのカルパッチョ1,800円 (2025年7月)・鱧と万願寺のパスタ、ハンバーグ (2025年8月)',
    neighborhood: '押小路通。烏丸御池から徒歩2分',
    gf_detail: '要確認。前菜、パスタ、リゾット、メイン、デザートのコース。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。月替わりの9種の野菜の盛り合わせがコースに出るが、ヴィーガンと書かれた品はない (食べログ、2025〜2026年の口コミ)。',
    notes: '[イタリアン・押小路烏丸御池、長く続く店] 烏丸御池近く、ボルドー色の壁の温かいイタリアン。何十年も通う常連もいる。京野菜の大きな前菜の盛り合わせが付く2,700円からのランチコース、季節のパスタ、また食べたくなるエスプレッソプリン。夜はコースと少しのアラカルト。月曜・第3火曜定休。',
  });
}

// ================================================================ 麺処 まると
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039306/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mendokoro.feliz-malto.com/';
  const H = day(['11:00', '19:00']);
  put({
    id: 'kyoto_mendokoro_maruto_kiyomizu', name: '麺処 まると (Mendokoro Maruto)', category: 'OMNI',
    lat: 34.996092, lng: 135.780904, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles from a Kyoto noodle maker (own site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-bone and katsuobushi broth, pork chashu (own site; 2026 reviews).',
    hours_raw: '11:00–19:00 daily (last orders 18:30); 18–30 November 11:00–21:30 (last orders 21:00) (Tabelog). Ticket machine with a multilingual menu; cards and QR (Tabelog; October 2026). 26 seats, up a flight of stairs on the second floor of the 栄山堂 building (Tabelog; October 2026). Smoking allowed (Tabelog). Aprons provided (February 2025). Opened 24 April 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu-zaka — a short walk from Kiyomizu-dera',
    cuisine: 'Japanese-style ramen by washoku chefs (own site) · double soup of chicken and vegetable stock with katsuobushi, kombu and shiitake dashi; medium-thin noodles from a long-established Kyoto noodle maker; Kyoto pork chashu; Kyoto rice (own site; October 2026) · chicken-bone Japanese-style ramen ¥1,300 (October 2026) · halfway “taste change” with Kyoto white miso, grated-daikon miso and sesame-shiso miso chosen by the main shop Feliz-團斗 (own site; Tabelog)',
    website: SITE, gmaps: gm('麺処まると 清水'), menu_url: SITE,
    notes: '[Ramen · Kiyomizu-zaka, Japanese-style] A ramen counter up the stairs near Kiyomizu-dera from the team behind the miso-and-washoku restaurant Feliz-團斗: a light but deep chicken-and-dashi bowl with Kyoto noodles and pork, finished with three house misos. Ticket machine with an English menu; open daily. Flagged: sister of Feliz-團斗 (in our data).',
    chef_bio: { chef_name: null, roles: ['Washoku chefs (unnamed)'], origin: null,
      background: 'The shop’s site says its ramen was created by the main restaurant Feliz-團斗, whose washoku chefs pursued umami, and that it uses Kyoto ingredients (local production for local consumption). No operator was found beyond the shop name.',
      philosophy: 'Local production for local consumption, with Kyoto ingredients (own site).', specialty: 'Chicken-and-dashi ramen with miso taste changes.',
      anecdotes: [
        { text: 'A September 2026 visitor found staff unhurried and attentive even with school-trip groups filling the room.', source: R + 'B538300474/' },
      ],
      japanese_sources_summary: '公式サイト: 【京都・清水寺】2023年OPEN！和風ラーメン専門店「麺処RAMEN まると」、東山区清水2丁目226 栄山堂 2階、和食の料理人が旨みにこだわった和風ラーメン、鶏ガラ出汁ベース、麺は京都の有名な製麺所、地産地消、半分ほど食べたら本店Feliz-團斗が厳選した味噌で味変、本店「團斗」は完全個室で御味噌✕和食✕美酒。食べログ: 毎日 11:00〜19:00 (L.O. 18:30)、11月18日〜30日は11:00〜21:30、2023年4月24日オープン、カード可、26席、喫煙可。口コミ (2025〜2026年、英語): 鶏ガラの和風ラーメン1,300円、鰹と昆布の出汁と鶏・野菜のスープ、京都の豚のチャーシュー、京都のお米、多言語の券売機、白味噌・大根おろし味噌・胡麻しそ味噌の味変、着物の客にエプロン、修学旅行生が多い。',
      confidence: 'medium', sources: [SITE, TB, R + 'B502304053/', R + 'B502419733/', R + 'B522175421/', R + 'B536647024/', R + 'B538185037/', R + 'B538300474/'] },
    cultural_comfort: { level: 'english', note: 'Multilingual ticket machine; aprons provided.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水2-226 栄山堂 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing; reviews dated February 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (34.996092, 135.780904); cross-checked: GSI 京都府京都市東山区清水二丁目226番地 (lot) 42m; めん蔵人 (this batch) is 17 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536647024/', SITE],
    price_note: '¥1,300 in October 2026 (¥1,150 in December 2024).', last_checked: TODAY, items: [
      it('', '', 'Chicken-bone Japanese-style ramen', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'ramen'),
      it('', '', 'Miso taste change (white miso, daikon miso, sesame-shiso)', '', 'Ramen', 'ask', 'ask', 'Own site; Tabelog.', 'miso'),
    ] }, {
    cuisine: '和食の料理人の和風ラーメン (公式サイト)・鶏と野菜のスープに鰹・昆布・椎茸の出汁を合わせたダブルスープ、京都の老舗製麺所の中細麺、京都の豚のチャーシュー、京都のお米 (公式サイト、2026年10月)・鶏ガラの和風ラーメン1,300円 (2026年10月)・半分ほど食べたら本店Feliz-團斗が選んだ京の白味噌・大根おろし味噌・胡麻しそ味噌で味変 (公式サイト、食べログ)',
    neighborhood: '清水坂。清水寺から少し歩いたところ',
    gf_detail: 'グルテンフリーではない。京都の製麺所の小麦のラーメンの麺 (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鶏ガラと鰹の出汁のスープ、豚のチャーシュー (公式サイト、2026年の口コミ)。',
    notes: '[ラーメン・清水坂、和風] 清水寺近く、階段を上がった2階のラーメン店。味噌と和食の店Feliz-團斗のチームによる、鶏と出汁のあっさりして深いスープに京都の麺と豚、3種の味噌で味変。英語のある券売機、毎日営業。Feliz-團斗 (データにあり) の姉妹店 (要確認)。',
  });
}

save();
