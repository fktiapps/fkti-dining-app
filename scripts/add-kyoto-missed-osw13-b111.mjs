// Kyoto priority (kyoto-missed), worker osw13, batch 111 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: dernier-bar, 食之源, Hz, ワインマルシェ. Brands checked against than.co.jp/brands (none match).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-111');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26013648', 'chain: 前田珈琲 高台寺店 — maedacoffee.com/shopinfo lists about 24 前田珈琲 shops (室町本店, 明倫店, 御池店, 文博店, 京博店, museum and hall branches, and shops in Beijing and Qingdao)');
skip('26034768', 'chain: あいよっ!! 烏丸蛸薬師店 — あいよっ already ruled a chain (skip 26032591: eight shops in our Kyoto crawl)');
skip('26040354', 'chain: 焼肉 soya is a yakiniku shop of the 益市 (Masuichi) group, per four 2025–2026 reviews ("from the Masuichi Group"; "a sister restaurant of… Masuichi"; "operated by the long-established Masuichi group") — 益市/ますいち shops are skipped as a chain (integrator ruling, batch 84)');

// ================================================================ dernier-bar
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26027340/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '26:00']);
  put({
    id: 'kyoto_dernier_bar', name: 'dernier-bar', category: 'OMNI',
    lat: 35.002563, lng: 135.757985, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a food stop: bar snacks such as sausage platters, prosciutto, olives and giant corn (2019–2025 reviews). Ask about drinks.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sausage and prosciutto platters (May 2025); olives and giant corn are plant-based snacks (2019; 2024). Drinks otherwise — ask.',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 19:00–2:00; closed Wednesday and 31 December–2 January (New Year details on Instagram). Reservations taken; private hire from 15 people (charged as 20). Service charge 10% — Tabelog, Japanese original 「最終会計時に１０％サービス料を頂戴しております。※コース料金はサービス料込※」. 28 seats: 8 at the counter, small tables and curtained sofa areas for up to 8. Smoking allowed throughout, so no minors; no children or pets (Tabelog). Cards and PayPay. 3rd floor of the カワモトビル, 1 min from Shijo exit 5. Opened 20 April 2016.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi-Ayanokoji, Shijo-Karasuma — 1 min walk from Shijo',
    cuisine: 'A late-night cocktail and whisky bar near Shijo-Karasuma with fresh-fruit cocktails and sofa seating (Tabelog; 2017–2026 reviews) · WhistlePig 10-year ¥1,200; giant corn ¥500 (December 2024) · fruit cocktails; four drinks for two ¥5,280 (March 2023) · sausage platter; prosciutto (May 2025) · draft beer, Chivas on the rocks, olives (2019) · Glenmorangie highball (2017) · party plans with all-you-can-drink (Tabelog)',
    website: 'http://www.dernier-bar.com', gmaps: gm('dernier-bar 京都 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Cocktail bar · Shijo-Karasuma, a third-floor late bar] A plush third-floor bar a minute from Shijo Station, open until 2 am: fresh-fruit cocktails, a good whisky shelf, snacks and curtained sofa corners for groups. About ¥3,000–4,000 plus 10% service. Smoking allowed; adults only. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Bartenders (unnamed)'], origin: null,
      background: 'Opened 20 April 2016 (Tabelog). Reviewers describe friendly staff who chat with first-timers, a calm, luxurious room and a late crowd after work dinners; one regular logged 28 visits between 2017 and March 2026. Smoking is allowed throughout.',
      philosophy: null,
      specialty: 'Fresh-fruit cocktails; whisky.',
      anecdotes: [
        { text: 'May 2026: "They offer a wide variety of cocktails made with fresh fruits, and the selection of whiskey is impressive—every drink was truly delicious!"', source: R + 'B528248329/' },
        { text: 'December 2024: "The calm atmosphere of the restaurant, along with the friendly staff who engage in conversation, makes it an inviting place for beginners at the bar."', source: R + 'B498053975/' },
      ],
      japanese_sources_summary: '食べログ: dernier-bar、バー・ダイニングバー・バル、下京区室町通綾小路西入ル鶏鉾町501 カワモトビル3F、地下鉄四条駅5番出口から徒歩1分、月・火・木〜日19:00〜翌2:00、水曜休み、12月31日〜1月2日休み、予約可、貸切は15名から (20名分の料金)、原文で「最終会計時に１０％サービス料を頂戴しております。※コース料金はサービス料込※」、28席 (カウンター8、テーブル、カーテンで仕切れるソファ席)、全席喫煙可のため未成年不可、子供・ペット不可、カード・PayPay可、2016年4月20日オープン。口コミ (2017年8月〜2026年5月、英語): フレッシュフルーツのカクテル、ウイスキー、ホイッスルピッグ10年1,200円、ジャイアントコーン500円 (2024年12月)、ソーセージの盛り合わせ、生ハム (2025年5月)、気さくなスタッフ、遅くまで営業。',
      confidence: 'medium', sources: [TB, 'http://www.dernier-bar.com'].concat(rv(R, ['B270783235', 'B462656578', 'B492509395', 'B498053975', 'B507599577', 'B516843222', 'B528248329'])) },
    cultural_comfort: { level: 'japanese', note: 'Smoking allowed throughout; adults only; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区室町通綾小路西入ル鶏鉾町501 カワモトビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated March and May 2026.' },
    pin_source: `Tabelog ${TB} (35.002563, 135.757985); GSI lot 京都府京都市下京区鶏鉾町501番地 about 59m away; nearest pin kyoto_rakui_ikkai_muromachi 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498053975/'],
    price_note: 'Prices from a December 2024 review; 10% service.', last_checked: TODAY, items: [
      it('', '', 'Fresh-fruit cocktail', null, 'Drink', 'ask', 'ask', '2023–2026.', 'fruit_cocktail'),
      it('', '', 'WhistlePig 10-year (whisky)', '¥1,200', 'Drink', 'ask', 'ask', 'December 2024.', 'whistlepig'),
      it('', '', 'Sausage platter', null, 'Snack', 'no', 'no', 'May 2025.', 'sausage_platter'),
    ] }, {
    cuisine: '四条烏丸近くの深夜まで開くカクテルとウイスキーのバー。フレッシュフルーツのカクテルとソファ席 (食べログ、2017〜2026年の口コミ)・ホイッスルピッグ10年1,200円、ジャイアントコーン500円 (2024年12月)・フルーツカクテル、2人で4杯5,280円 (2023年3月)・ソーセージの盛り合わせ、生ハム (2025年5月)・生ビール、シーバスのロック、オリーブ (2019年)・グレンモーレンジィのハイボール (2017年)・飲み放題付きのパーティープラン (食べログ)',
    neighborhood: '四条烏丸の室町綾小路。四条から徒歩1分',
    gf_detail: '食事としてはグルテンフリーではない: ソーセージの盛り合わせ、生ハム、オリーブ、ジャイアントコーンなどのつまみ (2019〜2025年の口コミ)。飲み物は要確認。',
    vegan_detail: 'ヴィーガン不可: ソーセージと生ハムの盛り合わせ (2025年5月)。オリーブとジャイアントコーンは植物性 (2019年・2024年)。ほかは飲み物、要確認。',
    notes: '[カクテルバー・四条烏丸、3階の深夜のバー] 四条駅から1分の、深夜2時まで開くゆったりした3階のバー。フレッシュフルーツのカクテル、充実したウイスキー、つまみ、グループ向けのカーテン付きソファ席。3,000〜4,000円ほどにサービス料10%。全席喫煙可、未成年不可。水曜休み。',
  });
}

// ================================================================ 食之源
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26018190/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_shoku_no_gen', name: '食之源 (Shoku no Gen)', category: 'OMNI',
    lat: 34.997464, lng: 135.777202, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Sichuan-leaning Chinese — dan dan noodles, ramen, gyoza, xiao long bao, mapo tofu, shrimp mayo, fried rice (2018–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, shrimp, pork and seafood dishes; egg-and-tomato stir-fry (2018–2026 reviews).',
    hours_raw: 'Tabelog: daily 11:00–23:00; hours and closed days may change. Reservations taken. No credit cards (Tabelog) — cash. 31 seats: counter, tables, a raised tatami area; a private room for 10–20. Smoking allowed. Take-out. 1 min from the Kiyomizu-michi bus stop, below the Yasaka pagoda on the way down from Kiyomizu (2022; 2024 reviews); 12 min from Keihan Kiyomizu-Gojo. Staff speak Chinese (November 2022).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kiyomizu 4-chome by the Kiyomizu-michi bus stop — below Kiyomizu-dera',
    cuisine: 'A small Chinese restaurant at the foot of the Kiyomizu slopes with Sichuan dishes, noodles and cheap lunch bowls (Tabelog; 2018–2026 reviews) · mapo tofu set at lunch, ¥700–800 range (January 2021); mapo tofu rice bowl (November 2022) · dan dan noodles; chashu noodles; chilled Chinese noodles ¥880 (July 2024) · chicken noodle soup with vinegar and chili (May 2024) · tomato-and-egg rice bowl (July 2024) · beef bowl ¥1,100 (November 2025) · seafood ramen; fried rice about ¥900 (2026) · xiao long bao; winged gyoza; shrimp mayo; deep-fried sardines; Sichuan chicken with peanuts (2018–2024)',
    website: null, gmaps: gm('食之源 清水 中華'), menu_url: TB + 'dtlmenu/',
    notes: '[Chinese · below Kiyomizu-dera by the Kiyomizu-michi bus stop, a sightseers\' lunch stop] A busy little Chinese kitchen at the bottom of the Kiyomizu slopes: Sichuan mapo tofu, dan dan noodles, seafood ramen and rice bowls for about ¥900–1,200, open all day until 11 pm. Cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A November 2022 reviewer writes that it seems to be run by a couple, with Chinese spoken by the staff; a May 2026 reviewer describes the owner as a lovely, welcoming and beautiful lady. A November 2023 reviewer found the flavors authentic from a Chinese perspective; a March 2024 reviewer felt they had been adjusted to Japanese tastes. Criticism: rude service (November 2018); unsweetened almond-tofu syrup and an off mapo tofu (January 2021); lukewarm soup (November 2022).',
      philosophy: null,
      specialty: 'Sichuan mapo tofu; dan dan noodles; rice bowls.',
      anecdotes: [
        { text: 'November 2023: "I found the flavors to be quite authentic even from a Chinese perspective… the dishes on top of the bowls were stir-fried right there, producing an amazing aroma."', source: R + 'B475251868/' },
        { text: 'May 2026: "The owner, a lovely lady, is also very welcoming and beautiful… The seafood ramen was loaded with ingredients, and the broth was incredibly delicious."', source: R + 'B527762293/' },
      ],
      japanese_sources_summary: '食べログ: 食之源、中華料理・餃子・飲茶、東山区清水4-130、市バスKiyomizu-michiから徒歩1分・京阪清水五条駅から徒歩12分、毎日11:00〜23:00、営業時間・定休日は変更の可能性あり、予約可、カード不可、31席 (カウンター9、テーブル、小上がり)、個室10〜20名、喫煙可、テイクアウト。口コミ (2018年7月〜2026年10月、英語): 担々麺、チャーシュー麺、冷やし中華880円、鶏の麺、トマトと卵の丼、麻婆豆腐丼、牛丼1,100円、海鮮ラーメン、炒飯約900円、小籠包、羽根つき餃子、エビマヨ、いわしの唐揚げ、鶏とピーナッツの四川炒め、夫婦で営んでいるらしい (2022年11月)、中国語を話すスタッフ、すてきな女性の店主 (2026年5月)、接客が悪かったとの声 (2018年11月)、スープがぬるかった (2022年11月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B369593860', 'B402484516', 'B434748531', 'B456678940', 'B475251868', 'B485491323', 'B487848514', 'B488181639', 'B517645037', 'B527762293', 'B535205990', 'B537401015'])) },
    cultural_comfort: { level: 'some_english', note: 'Chinese spoken by staff (November 2022); cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区清水4-130',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated May, September and October 2026.' },
    pin_source: `Tabelog ${TB} (34.997464, 135.777136) sits 4.5m from kyr_nekomata, so moved about 6m east to (34.997464, 135.777202), at least 10m from every pin; GSI resolves only 清水四丁目 (about 135m away) — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517645037/', R + 'B487848514/'],
    price_note: 'Prices from July 2024 and November 2025 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu rice bowl (with soup and pickles)', null, 'Rice', 'no', 'no', 'November 2022.', 'mapo_don'),
      it('', '', 'Dan dan noodles', null, 'Noodles', 'no', 'no', 'March and July 2024.', 'tantanmen'),
      it('', '', 'Chilled Chinese noodles', '¥880', 'Noodles', 'no', 'no', 'July 2024.', 'hiyashi_chuka'),
      it('', '', 'Beef bowl', '¥1,100', 'Rice', 'no', 'no', 'November 2025.', 'beef_bowl'),
    ] }, {
    cuisine: '清水の坂の下の小さな中華料理店。四川料理、麺、手頃な丼のランチ (食べログ、2018〜2026年の口コミ)・昼の麻婆豆腐定食、700〜800円台 (2021年1月)・麻婆豆腐丼 (2022年11月)・担々麺、チャーシュー麺、冷やし中華880円 (2024年7月)・酢と唐辛子の鶏の麺 (2024年5月)・トマトと卵の丼 (2024年7月)・牛丼1,100円 (2025年11月)・海鮮ラーメン、炒飯約900円 (2026年)・小籠包、羽根つき餃子、エビマヨ、いわしの唐揚げ、鶏とピーナッツの四川炒め (2018〜2024年)',
    neighborhood: 'Kiyomizu-michiバス停そばの清水4丁目。清水寺の坂の下',
    gf_detail: 'グルテンフリーではない: 担々麺、ラーメン、餃子、小籠包、麻婆豆腐、エビマヨ、炒飯など四川寄りの中華 (2018〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鶏、エビ、豚、魚介の料理、トマトと卵の炒め物 (2018〜2026年の口コミ)。',
    notes: '[中華・Kiyomizu-michiバス停そばの清水寺の坂下、観光客の昼ごはんに] 清水の坂の下のにぎやかな小さな中華。四川の麻婆豆腐、担々麺、海鮮ラーメン、丼が900〜1,200円ほどで、夜11時まで通し営業。現金のみ、喫煙可。',
  });
}

// ================================================================ Hz
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044170/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['15:00', '23:00']); const SA = day(['15:00', '21:00']); const SU = day(['12:00', '18:00']);
  put({
    id: 'kyoto_hz_niomon', name: 'Hz (Hertz)', category: 'OMNI',
    lat: 35.01185, lng: 135.773567, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: small plates include shumai, focaccia, pasta salads and meat-miso peppers (2025–2026 reviews). Ask about the raw tongue and vegetable plates.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: raw beef tongue, shumai, grilled tuna, minced meat (2025–2026 reviews). Some vegetable plates (Sri Lankan stir-fried okra, small potatoes with fried garlic chives) — ask.',
    hours_raw: 'Tabelog: Mon, Tue, Wed, Fri 15:00–23:00 (last entry 22:00); Sat 15:00–21:00 (last entry 20:00); Sun and holidays 12:00–18:00 (last entry 17:00); closed Thursday and irregular days. No reservations. No credit cards — cash. Standing counter, seated counter, window seats and one table. Non-smoking. Children welcome. 3rd floor of a building on Niomon-dori, open when the "Hz" wine bottle stands at the entrance (December 2025); 288 m from Sanjo Keihan. Opened late 2025.',
    hours: { 0: WD, 1: WD, 2: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Niomon-dori near Okazaki, east of the Kamo River — 288m from Sanjo Keihan',
    cuisine: 'A natural-wine standing bar opening mid-afternoon, with a short blackboard of small plates (Tabelog; December 2025–November 2026 reviews) · beef-tongue sashimi from the Kyoto meat shop "Uchida" ¥800; healthy shumai ¥800; highball ¥700 (December 2025) · grilled tuna sashimi; small potatoes with fried garlic chives (February 2026) · minced meat and green peppers; Sri Lankan stir-fried okra; focaccia; white pasta salad; red ketchup spaghetti salad (September 2026) · natural wine by the glass, e.g. Beaujolais-Villages from Jean Claude Lapalu (September 2026)',
    website: null, gmaps: gm('Hz 京都 大菊町 ワインバー'), menu_url: TB + 'dtlmenu/',
    notes: '[Natural-wine stand · Niomon-dori near the Kamo, a third-floor daytime bar] A bright upstairs standing bar on Niomon-dori pouring natural wine from 3 pm (noon on Sundays), with window views and a handful of plates — raw beef tongue (it sells out), shumai, okra. About ¥2,000–5,000. Cash only. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened late 2025 (a December 2025 reviewer calls it newly opened). A September 2026 reviewer writes that the owner used to serve wine at the Tokyo natural-wine bar "Ahiru Store" (romaji as given). Reviewers note the building\'s well water, views of Niomon-dori and cherry blossoms, and a crowd of afternoon drinkers. Criticism: the raw tongue and other dishes sell out early (April and September 2026).',
      philosophy: null,
      specialty: 'Natural wine; raw beef tongue; small plates.',
      anecdotes: [
        { text: 'September 2026: "The owner, who used to serve wine at the renowned natural wine spot \'Ahiru Store\' in Tokyo, offers a selection of wines that reflect their personal taste."', source: R + 'B538198799/' },
        { text: 'December 2025: "When the wine bottle labeled \'Hz\' is placed at the entrance of the building, it signals the start of business."', source: R + 'B518629678/' },
      ],
      japanese_sources_summary: '食べログ: Hz、レストラン、左京区大菊町102 3F、三条京阪から288m、月・火・水・金15:00〜23:00 (最終入店22:00)、土15:00〜21:00 (最終入店20:00)、日・祝日12:00〜18:00 (最終入店17:00)、木曜休み、不定休、予約不可、カード不可、立ち飲み、禁煙、子供可。口コミ (2025年12月〜2026年11月、英語): Niomon通の自然派ワインの立ち飲み、入口に「Hz」のワインボトルが出ていれば営業中、Uchidaの牛タン刺し800円、ヘルシーしゅうまい800円、ハイボール700円 (2025年12月)、マグロの炙り、小芋と揚げたニラ (2026年2月)、ひき肉とピーマン、スリランカ風オクラ炒め、フォカッチャ、白いパスタサラダ (2026年9月)、グラスの自然派ワイン、井戸水、東京の自然派ワインの店「Ahiru Store」出身の店主 (2026年9月)、タンが早く売り切れる (2026年4月・9月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B518629678', 'B523261984', 'B525356665', 'B525658688', 'B527246776', 'B528283342', 'B532574146', 'B536032316', 'B538198799'])) },
    cultural_comfort: { level: 'japanese', note: 'Standing bar; cash only; dishes sell out — go early.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区大菊町102 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated September 2026; the latest visit is November 2026.' },
    pin_source: `Tabelog ${TB} (35.01185, 135.773567); GSI lot 京都府京都市左京区大菊町102番地 about 87m away; nearest pin kyoto_niomon_mui 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518629678/'],
    price_note: 'Prices from a December 2025 review; cash only.', last_checked: TODAY, items: [
      it('', '', 'Beef-tongue sashimi (from Uchida; sells out)', '¥800', 'Small plate', 'ask', 'no', 'December 2025; August 2026.', 'tan_nama'),
      it('', '', 'Healthy shumai', '¥800', 'Small plate', 'no', 'no', 'December 2025; April 2026.', 'shumai'),
      it('', '', 'Natural wine by the glass', null, 'Drink', 'ask', 'ask', '2025–2026.', 'natural_wine'),
    ] }, {
    cuisine: '午後から開く自然派ワインの立ち飲み。黒板の小皿が少し (食べログ、2025年12月〜2026年11月の口コミ)・京都の肉屋Uchidaの牛タン刺し800円、ヘルシーしゅうまい800円、ハイボール700円 (2025年12月)・マグロの炙り、小芋と揚げたニラ (2026年2月)・ひき肉とピーマン、スリランカ風オクラ炒め、フォカッチャ、白いパスタサラダ、赤いケチャップのスパゲッティサラダ (2026年9月)・グラスの自然派ワイン (2026年9月)',
    neighborhood: '鴨川の東、Okazaki近くのNiomon通。三条京阪から288m',
    gf_detail: 'グルテンフリーではない: しゅうまい、フォカッチャ、パスタサラダ、肉味噌ピーマンなどの小皿 (2025〜2026年の口コミ)。牛タン刺しや野菜の皿は要確認。',
    vegan_detail: 'ヴィーガン不可: 牛タン刺し、しゅうまい、マグロ、ひき肉 (2025〜2026年の口コミ)。スリランカ風オクラ炒めや小芋など野菜の皿もあり、要確認。',
    notes: '[自然派ワインの立ち飲み・鴨川近くのNiomon通、3階の昼飲みバー] Niomon通の明るい3階の立ち飲み。午後3時 (日曜は昼) から自然派ワインを、窓の景色と、売り切れ必至の牛タン刺し、しゅうまい、オクラなどの小皿で。2,000〜5,000円ほど。現金のみ。木曜休み。',
  });
}

// ================================================================ ワインマルシェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034570/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '24:00']); const WE = day(['17:00', '24:00']);
  put({
    id: 'kyoto_wine_marche_takatsuji', name: 'ワインマルシェ (Wine Marche)', category: 'OMNI',
    lat: 35.000258, lng: 135.758382, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ajillo with bread, melted-cheese "Heidi" set over baguette, gratin, crepes (2021–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese, prosciutto, sausages, seafood ajillo, steak (2021–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Fri 18:00–24:00; Sat and Sun 17:00–24:00 (L.O. 23:30); closed on irregular days; bookings outside these hours by arrangement. Reservations taken. Cover 「チャージ400円（税込）」 (¥400 incl. tax, Tabelog Japanese original). Cards. 22 seats: tables, sofas and a 2-seat counter; partitions for semi-private use; private hire from 12. Non-smoking (ashtray at the entrance). English menu and English-speaking staff. Children welcome; no pets except guide dogs. BYO allowed (Tabelog). 2nd floor of the エムシービル just east of Muromachi-Takatsuji, 5 min from Karasuma or Shijo. Opened 8 August 2020.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takatsuji-dori east of Muromachi — 5 min walk from Shijo or Karasuma',
    cuisine: 'A friendly second-floor wine bar of cheese, ajillo and Italian small plates, with all-you-can-drink wine (Tabelog; 2021–2026 reviews) · "Heidi\'s" melted-cheese set poured over baguette (2023–2026) · omakase ajillo with shrimp, mushrooms, clams and scallops (March 2026); shrimp-mushroom and scallop-broccoli ajillo (May 2026) · Fire Camembert ¥1,500; 90-minute all-you-can-drink ¥3,500 (July 2025) · 60-minute all-you-can-drink ¥1,750 (September 2022) · Quattro Formaggi; prosciutto salad; mussels; half roast beef; beef steak; matcha crepes (2022–2026) · washed-rind cheeses and Mont d\'Or (November 2025) · seafood gratin lunch set ¥1,500 (November 2021)',
    website: 'https://www.winemarche.net', gmaps: gm('ワインマルシェ 京都 高辻'), menu_url: TB + 'dtlmenu/',
    notes: '[Wine bar · Takatsuji near Shijo-Karasuma, a cheese-and-ajillo hideaway] A cosy upstairs wine bar with sofa seats and a talkative owner: melted-cheese "Heidi" sets, ajillo, cheese boards and good-value all-you-can-drink wine (about ¥3,500 for 90 minutes), open to midnight. ¥400 cover.',
    chef_bio: { chef_name: null, roles: ['Owner ("master", unnamed)'], origin: null,
      background: 'Opened 8 August 2020 (Tabelog). The shop site invites guests to ask the master about the monthly themed events (winemarche.net); a November 2025 reviewer enjoyed the owner\'s explanations of the wines. Reviewers describe kind staff, a relaxed antique-style room and a hidden-gem feel. Criticism: average sausages (September 2022).',
      philosophy: null,
      specialty: 'Wine; melted-cheese "Heidi" set; ajillo.',
      anecdotes: [
        { text: 'September 2023: "The \'Heidi\'s Baked Cheese\' was especially amazing. They melt several types of cheese right at the table, and once it\'s perfectly gooey, you can pour it over a baguette."', source: R + 'B471604779/' },
        { text: 'November 2025: "The selection of cheeses was impressive, featuring many varieties that paired perfectly with wine, including washed cheeses and Mont d\'Or… the owner\'s explanations about the wines were very entertaining."', source: R + 'B518899866/' },
      ],
      japanese_sources_summary: '食べログ: ワインマルシェ、バル・イタリアン・ワインバー、下京区骨屋町316 エムシービル2F、阪急烏丸駅・地下鉄四条駅から徒歩5分 (烏丸高辻を西へ、室町高辻の手前の北側)、月〜金18:00〜24:00、土・日17:00〜24:00 (L.O.23:30)、不定休、時間外も相談可、予約可、原文で「チャージ400円（税込）」、カード可、22席、貸切12名から、禁煙 (入口に灰皿)、英語メニュー・英語対応スタッフ、子供可、盲導犬以外のペット不可、持ち込み可、2020年8月8日オープン。公式サイト winemarche.net (月1回のテーマイベント、マスターに聞いてね)。口コミ (2021年11月〜2026年5月、英語): ハイジのホットチーズセット、アヒージョ、ファイヤーカマンベール1,500円、90分飲み放題3,500円 (2025年7月)、60分飲み放題1,750円 (2022年9月)、クアトロフォルマッジ、生ハムサラダ、ムール貝、ローストビーフ、ステーキ、抹茶クレープ、ウォッシュチーズやモンドール (2025年11月)、シーフードグラタンのランチ1,500円 (2021年11月)、店主のワインの説明が楽しい。',
      confidence: 'medium', sources: [TB, 'https://www.winemarche.net'].concat(rv(R, ['B442922134', 'B453848570', 'B458687976', 'B471604779', 'B478834447', 'B498461765', 'B502370724', 'B509710819', 'B513824449', 'B518899866', 'B521576600', 'B524074618'])) },
    cultural_comfort: { level: 'english_friendly', note: 'English menu and English-speaking staff (Tabelog); ¥400 cover.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区骨屋町316 エムシービル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated March and May 2026.' },
    pin_source: `Tabelog ${TB} (35.000258, 135.758382); GSI lot 京都府京都市下京区骨屋町316番地 about 39m away; nearest pin kyoto_kushi_teppan_zoronpa 99m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509710819/'],
    price_note: 'Prices from a July 2025 review; ¥400 cover.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink wine (90 min)', '¥3,500', 'Drink', 'ask', 'ask', 'July 2025.', 'nomihodai'),
      it('', '', 'Fire Camembert', '¥1,500', 'Cheese', 'ask', 'no', 'July 2025.', 'fire_camembert'),
      it('', '', '"Heidi" melted-cheese set with baguette', null, 'Cheese', 'no', 'no', '2023–2026.', 'heidi_cheese'),
      it('', '', 'Omakase ajillo', null, 'Small plate', 'ask', 'no', 'March 2026.', 'ajillo'),
    ] }, {
    cuisine: 'チーズ、アヒージョ、イタリアンの小皿と飲み放題ワインの、気さくな2階のワインバー (食べログ、2021〜2026年の口コミ)・バゲットにかける「ハイジ」のホットチーズセット (2023〜2026年)・エビ、きのこ、あさり、ホタテのおまかせアヒージョ (2026年3月)、エビときのこ、ホタテとブロッコリーのアヒージョ (2026年5月)・ファイヤーカマンベール1,500円、90分飲み放題3,500円 (2025年7月)・60分飲み放題1,750円 (2022年9月)・クアトロフォルマッジ、生ハムサラダ、ムール貝、ローストビーフ、ステーキ、抹茶クレープ (2022〜2026年)・ウォッシュチーズとモンドール (2025年11月)・シーフードグラタンのランチセット1,500円 (2021年11月)',
    neighborhood: '室町の東の高辻通。四条・烏丸から徒歩5分',
    gf_detail: 'グルテンフリーではない: パン付きのアヒージョ、バゲットにかける「ハイジ」のホットチーズ、グラタン、クレープ (2021〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: チーズ、生ハム、ソーセージ、魚介のアヒージョ、ステーキ (2021〜2026年の口コミ)。',
    notes: '[ワインバー・四条烏丸近くの高辻、チーズとアヒージョの隠れ家] ソファ席があり、話好きの店主がいる居心地のいい2階のワインバー。「ハイジ」のホットチーズ、アヒージョ、チーズの盛り合わせ、お得な飲み放題ワイン (90分3,500円ほど) で深夜0時まで。チャージ400円。',
  });
}

save();
