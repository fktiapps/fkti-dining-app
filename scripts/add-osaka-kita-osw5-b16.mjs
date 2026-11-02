// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 16.
//   Ids checked for parity: 27127844 (skip), 27041762, 27012486, 27066480, 27049810 (all even).
//   + ミルカレス MILLE CARESSES (French-wine bar in Kitashinchi since 2009, sommelier-led, famous katsu sandwich)
//   + 割烹 大田川 Kappou Ootagawa (creative kaiseki in Dojima since 2006; ¥1,300 set lunches)
//   + チャイニーズ食堂菜々 Chinese Shokudo Nana (neighbourhood Chinese diner in Fukushima, mapo tofu lunch, cash only)
//   + 心屋 本店 Kokoya (Awaji fish and vegetables izakaya-kappo in Dojima since 2010)
//   - skipped シャングリラズシークレット 北新地店 27127844: chain already in data (tokyo_shangri_las_secret_roppongi, "Shangri-La's secret ROPPONGI").
//   Chain check: ミルカレス: invoice T4120001161429 → 株式会社ブリス・ダイニング at the shop's address (NTA register); 2026 reviews say an Ise
//   winery runs it; one shop found. 大田川: operator 株式会社タイガー・アイ, whose official site names this one restaurant. 菜々: no invoice;
//   one shop. 心屋: invoice T2120001171041 → 株式会社心屋 (NTA register); the operator site lists two shops, 上通り店 (this one) and 本通り店;
//   not in data; a small group, kept and flagged.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27127844', 'chain: Shangri-La\'s Secret, already in data (tokyo_shangri_las_secret_roppongi); operator 株式会社ＬＩＢジャパン');

// ================================================================ ミルカレス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27041762/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:30', '00:30']);
  put({
    id: 'osaka_mille_caresses_kitashinchi', name: 'ミルカレス (MILLE CARESSES)', category: 'OMNI',
    lat: 34.697180, lng: 135.499400, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The signature is a wagyu-fillet katsu sandwich; the course has pasta and a beef stew; cheese with dried fruit and bread.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wine bar menu of beef, oysters, cheese and stew.',
    hours_raw: 'Mon–Sat, holidays and the day before and after a holiday 17:30–0:30; closed Sundays (Tabelog). Reservations accepted; French wine, whisky and cocktails only (no non-French bottles) (Tabelog). Service charge 10% and a ¥1,100 charge, courses excepted (Tabelog). Cards (VISA, JCB, AMEX, Diners); no e-money or QR (Tabelog). 16 seats: a counter of 7, a semi-private room for 2–3 and a private room for 2–6 (room fee ¥11,000); non-smoking (Tabelog). Opened 23 June 2009 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '曽根崎新地1-6-1, ground floor of ENISHI北新地ビル, wine bottles visible in the window — 3 min from Kitashinchi Stn exit 11-43',
    cuisine: 'Wine bar of French wine, mainly Burgundy and Champagne, by the bottle or by the glass (Coravin), with a kitchen (Tabelog; August 2026) · the course runs through starters, pasta, a special beef stew and the famous katsu sandwich (Tabelog); à la carte: the bite-sized wagyu-fillet katsu sandwich, seasonal rock oysters, blue cheese with dried fruit and bread, raisin and macadamia chocolates (2026) · premium wines by the glass, a service started at the request of international guests: in September 2026 Armand Rousseau Mazis-Chambertin and Emmanuel Rouget Echezeaux, with three Champagnes and six or seven reds and whites (September 2026)',
    website: null, gmaps: gm('ミルカレス 北新地'), menu_url: null,
    notes: "[Wine bar · Kitashinchi, Burgundy, Champagne and a katsu sandwich] A French-wine bar in Kitashinchi since 2009, its window lined with bottles, where a veteran sommelier with a following matches wine to your budget and talks you through it in an easy Osaka style. Only French bottles are poured, Burgundy and Champagne above all, with a long list by the glass that runs to grand crus. Almost everyone orders the bite-sized wagyu-fillet katsu sandwich, even as a second or third stop; there are also oysters, cheese, pasta and a beef stew. A 10% service charge and ¥1,100 cover apply; expect ¥10,000 and up. Open until 0:30.",
    chef_bio: { chef_name: null, roles: ['Senior sommelier and manager (listed on Tabelog\'s English page as "Toshihisa Kibi")', 'chef (listed as "Kai Toyoichi", also "Chef Kaito")', 'a second sommelier'], origin: null, background: 'Per the shop-maintained Tabelog listing: the senior sommelier, a Chevalier of the Champagne knights, was born in Shiga in 1965, started at "Bistro Vinsank", worked as a sommelier at several restaurants and became manager here in 2009, with over 20 years in Kitashinchi; the chef was born in Tokushima in 1970, worked at several restaurants after culinary school, was a private chef for visiting overseas artists and joined as opening chef in 2009; two sommeliers on staff. The Tabelog invoice number T4120001161429 is registered to 株式会社ブリス・ダイニング at the shop\'s address (NTA invoice register, read 2026-11-02); August 2026 reviewers write that an Ise winery runs the bar. Names are given only in the English translation, which spells them inconsistently.', philosophy: null, specialty: 'French wine by the glass; wagyu katsu sandwich.',
      anecdotes: [
        { text: '"The premium wine by the glass service, which originally started from requests by international guests, is still going strong." — September 2026.', source: R + 'B494133965/' },
        { text: '"Above all, Sommelier Kibi is entertaining, and not only is the wine selection impressive, but the conversation is also enjoyable." — July 2026.', source: R + 'B531089460/' },
        { text: '"And when you come to MILLE CARESSES, you just have to try the beef cutlet sandwich!" — August 2026, a sixth visit.', source: R + 'B484097501/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ミルカレス、ワインバー・イタリアン・ビストロ、大阪市北区曽根崎新地1-6-1 ENISHI北新地ビル1階、JR 東西線 北新地駅11-43出口から徒歩3分、月〜土・祝・祝前日・祝後日17:30〜0:30、日曜休み、予約可、フランスのワインのみ (ほかの国のワイン、ウイスキー、カクテルはない)、サービス料10%、チャージ1,100円 (税込、コースは除く)、カード可、電子マネー・QR 不可、16席 (カウンター7、半個室2〜3名、個室2〜6名、個室料11,000円)、禁煙、2009年6月23日オープン、ソムリエが選ぶワイン、ブルゴーニュとシャンパーニュ、前菜、パスタ、特製ビーフシチュー、名物のカツサンドのコース、ソムリエは1965年 Shiga 生まれで2009年から店長、Champagne の騎士団の Chevalier、シェフは1970年 Tokushima 生まれで海外のアーティストの専属シェフも、2009年の開店から。インボイス登録は株式会社ブリス・ダイニング (店と同じ住所)。口コミ(2024年3月〜2026年10月): 牛ヒレのカツサンド、岩がき、ブルーチーズとドライフルーツとパン、レーズンとマカダミアのチョコ、Coravin でグラスの種類が多い、海外のお客さんの要望で始まったプレミアムワインのグラス、シャンパーニュ3種と赤白6〜7種、ソムリエの話が楽しい、予算に合わせて選んでくれる、Ise のワイナリーが運営という声、値段が上がったという声。',
      confidence: 'medium', sources: [TB, R + 'B435496909/', R + 'B484097501/', R + 'B494133965/', R + 'B531089460/', R + 'B532090710/', R + 'B532290931/', R + 'B533926977/', R + 'B533967583/', R + 'B538324835/', R + 'B538462759/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The premium wines by the glass began at the request of international guests (September 2026); the sommelier guides choices at the counter. No English-language evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-6-1 ENISHI北新地ビル1階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目6番1号 (go) 4m; nearest other record osaka_ohana_kitashinchi 25 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Charges from the Tabelog listing; dish prices not given in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Wagyu-fillet katsu sandwich', '', 'Food', 'no', 'no', 'July–October 2026.', 'katsu_sando'),
      it('', '', 'Cover charge (à la carte)', '¥1,100', 'Charges', 'ask', 'ask', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: 'フランスのワイン、とくにブルゴーニュとシャンパーニュをボトルでもグラス (Coravin) でも楽しむワインバーで、料理も (食べログ、2026年8月)・コースは前菜、パスタ、特製ビーフシチュー、名物のカツサンド (食べログ)。アラカルト: ひと口サイズの和牛ヒレのカツサンド、季節の岩がき、ブルーチーズとドライフルーツとパン、レーズンとマカダミアのチョコ (2026年)・海外のお客さんの要望で始まったプレミアムワインのグラス: 2026年9月はArmand Rousseau の Mazis-Chambertin と Emmanuel Rouget の Echezeaux、シャンパーニュ3種と赤白6〜7種 (2026年9月)',
    neighborhood: '曽根崎新地1-6-1、ENISHI北新地ビルの1階、窓からワインのボトルが見える。北新地駅11-43出口から3分',
    gf_detail: '要確認。グルテンの情報なし。名物は和牛ヒレのカツサンド。コースにはパスタとビーフシチュー、チーズにはドライフルーツとパン。',
    vegan_detail: 'ヴィーガンではありません。牛肉、かき、チーズ、シチューのワインバーの料理。',
    notes: '[ワインバー・北新地、ブルゴーニュとシャンパーニュとカツサンド] 2009年からの北新地のフランスワインのバーで、窓にはボトルがずらり。ファンの多いベテランのソムリエが予算に合わせてワインを選び、大阪らしい楽しい話で説明してくれる。出すのはフランスのワインだけで、とくにブルゴーニュとシャンパーニュ、グラスの種類が多く特級畑まで。ほとんどの人が頼むのはひと口サイズの和牛ヒレのカツサンドで、2軒目や3軒目でも。かき、チーズ、パスタ、ビーフシチューも。サービス料10%とチャージ1,100円、予算は10,000円から。0時半まで。',
  });
}

// ================================================================ 割烹 大田川
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27012486/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://tyger-eye.com/index.html';
  const W = day(['11:30', '13:30'], ['17:30', '23:00']);
  put({
    id: 'osaka_kappou_ootagawa_dojima', name: '割烹 大田川 (Kappou Ootagawa)', category: 'OMNI',
    lat: 34.696616, lng: 135.497197, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Kaiseki courses with tempura; lunch sets of crab cream croquette, beef croquette, fried chicken wings and spring rolls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood kaiseki and dashi-based dishes.',
    hours_raw: 'Mon–Sat 11:30–13:30 (ends when sold out) and 17:30–23:00 (last order 22:00); closed Sundays and holidays; Saturdays by reservation only, booked by the day before, and some Saturdays closed (Tabelog; official site). Reservations accepted; 100% course fee for cancellations within three days, ¥10,000 a head for seat-only bookings (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 seats: a counter of about nine and sunken-floor private rooms for 3–12; smoking allowed (Tabelog; June 2026). Children\'s meals with notice (Tabelog). Opened 20 November 2006 (Tabelog). New Year osechi to order (official site).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-3-16, basement of 堂島メリーセンタービル, behind 堂島アバンザ, a lantern at the entrance — 3 min from Kitashinchi Stn',
    cuisine: 'Creative kaiseki of seasonal ingredients from the central market, about 50 on the day\'s menu (Tabelog; official site) · courses (Tabelog, tax included): "Hana" for first visits ¥12,100, with two hours of drinks ¥16,500; chef\'s omakase chicken course ¥14,300; "Kaze" ¥16,500; "Wa" ¥19,800 · à la carte: dashimaki, bacon and daikon (February 2026) · lunch, four set meals at ¥1,300 each with three small dishes, rice, miso soup, pickles and a jelly dessert: the favourite crab cream croquette under a vegetable sauce (bamboo shoot, konnyaku and bean sprouts with curry powder), fried chicken wings with beef croquettes, grilled salted mackerel, a chicken rice in dashi like ochazuke (Tokunoshima style per a June 2026 diner), ginger pork, spring rolls (March–October 2026)',
    website: OWN, gmaps: gm('割烹 大田川 堂島'), menu_url: TB,
    notes: "[Kaiseki · Dojima, creative kappo and a famous lunch] A basement kappo restaurant west of Kitashinchi since 2006, with a counter and tatami-style private rooms for business dinners, betrothal meals and anniversaries. The owner trained at 石和川 in Kitashinchi and has twenty-five years at the stove; evening courses of seasonal creative kaiseki run ¥12,100–19,800. Lunch is the bargain and fills fast: four ¥1,300 sets, the favourite a crab cream croquette under a curry-scented vegetable sauce, with small dishes, rice, miso soup and a jelly. Smoking is allowed; Saturdays are by reservation only.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)', 'kitchen and floor staff'], origin: 'Tokunoshima (per an April 2026 diner)', background: 'Per the official site of 株式会社タイガー・アイ, which runs 割烹 大田川 (read as かっぽう おおたがわ): the owner trained at 石和川 in Kitashinchi and is a craftsman of twenty-five years; ingredients are chosen one by one and prepared slowly; private rooms for up to 12; osechi at New Year. Per the shop-maintained Tabelog listing: about 50 seasonal ingredients on the daily menu; opened 20 November 2006. An April 2026 diner writes that the chef is from Tokunoshima.', philosophy: '"食を通じてお客様に感動をお届けする" (to move guests through food) (official site).', specialty: 'Creative kaiseki; crab cream croquette lunch.',
      anecdotes: [
        { text: '"I’ve never had such delicious bean sprouts that make you want to eat more rice." — May 2026, the crab cream croquette lunch.', source: R + 'B320553009/' },
        { text: '"The chef is from Tokunoshima, and you can really feel the love for Tokunoshima in the dishes." — April 2026.', source: R + 'B526239195/' },
        { text: '"I visited during lunch hours, and the place quickly filled up, creating a line outside." — June 2026.', source: R + 'B529796142/' },
      ],
      japanese_sources_summary: '公式サイト (株式会社タイガー・アイ): 北新地で季節の食材の割烹・小料理『割烹 大田川』(かっぽう おおたがわ) を運営、堂島1-3-16 堂島メリーセンタービル B1F、月〜土11:30〜13:30、17:30〜23:00 (L.O.22:00)、旬の食材とこの道二十五年の匠の技、知る人ぞ知る北新地の隠れ家、接待・結納・顔合わせ・夫婦の記念日に、創作懐石、食材を職人が選びじっくり時間をかける、年末はおせち、12名までの個室のお座敷、カウンター席、店主は北新地の『石和川』で修業。食べログ (店舗会員): 割烹 大田川、日本料理・海鮮・天ぷら、日・祝休み、土曜は前日までの完全予約制、ランチは売り切れ次第終了、3日前からのキャンセルは100%、カード可、電子マネー・QR 不可、20席、掘りごたつの個室、喫煙可、子どもの料理も相談、2006年11月20日オープン、季節の食材約50種、はなコース12,100円、飲み放題つき16,500円、鶏のおまかせコース14,300円、風コース16,500円、和コース19,800円。口コミ(2026年2月〜10月): ランチは4種で各1,300円、野菜あんかけのカニクリームコロッケ (たけのこ、こんにゃく、もやしのカレー風味)、手羽先の唐揚げと牛肉コロッケ、塩サバ、だしをかける鶏飯、しょうが焼き、春巻き、小鉢3種、ごはん、みそ汁、漬物、ゼリーのデザート、すぐに満席で行列、大将は Tokunoshima 出身という声、だし巻き、ベーコンと大根、喫煙できる、スタッフが丁寧。',
      confidence: 'medium', sources: [TB, OWN, R + 'B320553009/', R + 'B523508173/', R + 'B525268480/', R + 'B526239195/', R + 'B529796142/', R + 'B530182764/', R + 'B530476839/', R + 'B533578917/', R + 'B534574068/', R + 'B537908771/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches and kaiseki courses (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区堂島1-3-16 堂島メリーセンタービル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the operator site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 62m. osaka_tempura_bonji_kitashinchi (address_ja "大阪府大阪市北区堂島1-3-16 堂島メリーセンタービル 3F") is in the same building with its pin 2 m away (osaka_kushiage_nagura_dojima, 4F, 10 m), so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B529796142/'],
    price_note: 'Course prices from the Tabelog listing (tax included); lunch from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: crab cream croquette with vegetable sauce, small dishes, rice, miso soup', '¥1,300', 'Lunch', 'no', 'no', 'March–October 2026.', 'croquette_lunch'),
      it('', '', '"Hana" course for first visits', '¥12,100', 'Dinner', 'ask', 'no', 'Tabelog.', 'hana_course'),
      it('', '', '"Kaze" course', '¥16,500', 'Dinner', 'ask', 'no', 'Tabelog.', 'kaze_course'),
      it('', '', '"Wa" course', '¥19,800', 'Dinner', 'ask', 'no', 'Tabelog.', 'wa_course'),
    ] }, {
    cuisine: '中央市場から仕入れる季節の食材の創作懐石、その日のお品書きに約50種 (食べログ、公式サイト)・コース (食べログ、税込): はじめての人向けの「はな」12,100円、2時間飲み放題つき16,500円、大将おまかせの鶏のコース14,300円、「風」16,500円、「和」19,800円・アラカルト: だし巻き、ベーコンと大根 (2026年2月)・ランチは4種の定食で各1,300円、小鉢3種、ごはん、みそ汁、漬物、ゼリーのデザートつき: 人気は野菜あんかけのカニクリームコロッケ (たけのこ、こんにゃく、もやしのカレー風味のあん)、手羽先の唐揚げと牛肉コロッケ、塩サバ、だしをかけるお茶漬けのような鶏飯、しょうが焼き、春巻き (2026年3月〜10月)',
    neighborhood: '堂島1-3-16、堂島メリーセンタービルの地下1階、堂島アバンザの裏、入口にちょうちん。北新地駅から3分',
    gf_detail: '要確認。グルテンの情報なし。懐石のコースに天ぷら。ランチにはカニクリームコロッケ、牛肉コロッケ、手羽先の唐揚げ、春巻き。',
    vegan_detail: 'ヴィーガンではありません。魚介の懐石とだしの料理。',
    notes: '[懐石・堂島、創作割烹と人気のランチ] 2006年からの北新地の西の地下の割烹で、カウンターと座敷の個室があり、接待、結納、記念日に。店主は北新地の石和川で修業した、この道二十五年の料理人。夜は季節の創作懐石のコースで12,100〜19,800円。お得なのはランチで、すぐに満席: 1,300円の定食が4種、人気はカレー風味の野菜あんをかけたカニクリームコロッケで、小鉢、ごはん、みそ汁、ゼリーつき。喫煙可、土曜は予約のみ。',
  });
}

// ================================================================ チャイニーズ食堂菜々
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27066480/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['17:00', '00:00']);
  put({
    id: 'osaka_chinese_shokudo_nana_fukushima', name: 'チャイニーズ食堂菜々 (Chinese Shokudo Nana)', category: 'OMNI',
    lat: 34.700592, lng: 135.489282, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Mapo tofu with doubanjiang, dan dan noodles, ramen, dumplings and fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mapo tofu, egg soup, liver with garlic chives and fried rice; no vegetarian dish named.',
    hours_raw: 'Daily 11:30–14:00 and 17:00 to about 24:00 (last order 22:30); closed one or two days a month, not fixed; hours may change (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 26 seats: a counter and tables; smoking allowed; BYO; takeout; sports on screen (Tabelog). Reservations accepted (Tabelog). The owner was cooking alone at an August 2026 lunch.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: '福島6-17-6, ground floor, a wooden front off the main street opposite the Daiwa Roynet Hotel — 6 min from JR Osaka Stn, 7 min from JR Fukushima Stn',
    cuisine: 'Neighbourhood Chinese diner (Tabelog) · weekday lunch: mapo tofu set with rice (large by default, no refills), egg soup and salad ¥1,000; a daily set such as dan dan noodles with half fried rice and almond jelly ¥1,000, or chilled dan dan noodles with fried rice; a mapo ramen set (December 2025–September 2026) · the mapo tofu is mildly spicy and heavy with Sichuan pepper (2026) · dinner menu includes fried rice, mapo tofu and liver with garlic chives (June 2026)',
    website: null, gmaps: gm('チャイニーズ食堂菜々 福島'), menu_url: null,
    notes: "[Chinese · Fukushima, a ¥1,000 mapo tofu lunch] A small wooden-fronted Chinese diner on a side street between Osaka and Fukushima stations, with manga on the shelves and a counter where you hear the wok. Workers come at lunch for the ¥1,000 mapo tofu set, gentle on chilli but fragrant and numbing with Sichuan pepper, with a big bowl of rice, egg soup and salad, or the daily noodle set. At night it runs to about midnight with fried rice and liver with chives. Cash only; smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed)'], origin: null, background: 'Tabelog listing (not shop-maintained): Chinese diner of dim sum, dumplings and ramen; 26 seats; cash only. An August 2026 diner saw the owner cooking alone.', philosophy: null, specialty: 'Mapo tofu set.',
      anecdotes: [
        { text: '"From the kitchen, you can hear the pleasant sound of the Chinese wok being tossed." — January 2026, the mapo tofu lunch.', source: R + 'B520936764/' },
        { text: '"Upon entering, I was greeted by a row of manga books." — February 2026.', source: R + 'B524966838/' },
        { text: '"The interior has a bar-like atmosphere, and I noticed the owner was cooking solo." — August 2026.', source: R + 'B533748632/' },
      ],
      japanese_sources_summary: '食べログ: チャイニーズ食堂菜々、飲茶・点心・餃子・ラーメン、大阪市福島区福島6-17-6 1F、JR 大阪駅から徒歩6分、JR 福島駅から7分、毎日11:30〜14:00、17:00〜24:00ごろ (L.O.22:30)、不定休 (月に1〜2回)、予約可、カード・電子マネー・QR 不可、26席 (カウンターとテーブル)、喫煙可、持ち込み可、テイクアウト、スポーツ観戦。口コミ(2025年12月〜2026年9月): 麻婆豆腐定食1,000円 (ごはん大盛り、おかわりなし、卵スープ、サラダ)、日替わりの担々麺と半チャーハンと杏仁豆腐1,000円、冷やし担々麺とチャーハン、麻婆ラーメンのセット、辛さは控えめで花椒がきいている、ニラレバ、マンガが並ぶ、中華鍋の音、Daiwa Roynet Hotel の前、店主がひとりで料理、喫煙できるからか昼は混む。',
      confidence: 'medium', sources: [TB, R + 'B509804524/', R + 'B518838701/', R + 'B520936764/', R + 'B524966838/', R + 'B525673862/', R + 'B526190302/', R + 'B530054156/', R + 'B532984182/', R + 'B533748632/', R + 'B535640851/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A few lunch sets; cash only (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-17-6 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目17番6号 (go) 6m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524966838/', R + 'B518838701/'],
    price_note: 'Lunch prices from December 2025–February 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu set with rice, egg soup and salad', '¥1,000', 'Lunch', 'ask', 'no', 'February 2026.', 'mapo_set'),
      it('', '', 'Daily set: dan dan noodles, half fried rice, almond jelly', '¥1,000', 'Lunch', 'no', 'no', 'December 2025.', 'daily_set'),
    ] }, {
    cuisine: '町の中華食堂 (食べログ)・平日のランチ: 麻婆豆腐定食 (ごはんは最初から大盛り、おかわりなし、卵スープ、サラダ) 1,000円、日替わりは担々麺と半チャーハンと杏仁豆腐で1,000円や、冷やし担々麺とチャーハン、麻婆ラーメンのセット (2025年12月〜2026年9月)・麻婆豆腐は辛さひかえめで花椒がしびれる (2026年)・夜はチャーハン、麻婆豆腐、ニラレバなど (2026年6月)',
    neighborhood: '福島6-17-6の1階、大通りからはずれた木の外観、Daiwa Roynet Hotel の向かい。JR 大阪駅から6分、JR 福島駅から7分',
    gf_detail: '要確認。グルテンの情報なし。豆板醤の麻婆豆腐、担々麺、ラーメン、餃子、チャーハン。',
    vegan_detail: 'ヴィーガンではありません。麻婆豆腐、卵スープ、ニラレバ、チャーハン。ベジタリアンの料理の名前はない。',
    notes: '[中華・福島、1,000円の麻婆豆腐ランチ] 大阪駅と福島駅の間の裏通りにある木の外観の小さな中華食堂で、マンガが並び、カウンターから中華鍋の音が聞こえる。昼は会社員が1,000円の麻婆豆腐定食に: 辛さはひかえめで花椒が香ってしびれ、大盛りのごはん、卵スープ、サラダつき。日替わりの麺のセットも。夜は24時ごろまでで、チャーハンやニラレバも。現金のみ、喫煙可。',
  });
}

// ================================================================ 心屋 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27049810/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://www.kokoya-japan.com/brands/kokoya/';
  const W = day(['17:00', '00:00']);
  put({
    id: 'osaka_kokoya_honten_dojima', name: '心屋 本店 (Kokoya Honten)', category: 'OMNI',
    lat: 34.696775, lng: 135.498327, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Hotpots in dashi with rice porridge to finish, tempura of beltfish and of eel and matsutake in buckwheat flour, sashimi with soy.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, eel and beef dishes and dashi hotpots.',
    hours_raw: 'Mon–Sat 17:00–24:00 (last order 23:00); closed Sundays, and Mondays that are holidays (Tabelog). Reservations accepted; two-hour limit for seat-only bookings when busy; parties of two at the counter only (Tabelog). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 20 seats: a counter and semi-private table rooms for 4 to 20; smoking allowed (Tabelog). Opened 10 May 2010 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-3-33, 2F of 新地萬年ビル on Kamidori, above a flower shop — 4 min from Kitashinchi Stn',
    cuisine: 'Fish and vegetables sent from Awaji Island by the owner\'s friends there, with over 20 sakes including Awaji\'s Tomi Bijin (Tabelog) · courses (Tabelog, tax included): banquet courses from ¥6,800; Awaji hamo hotpot ¥7,000 in summer; grilled-eel and eel-hotpot course of seven dishes; courses also at ¥9,350, ¥9,650 and ¥14,000 · winter fugu and its milt (Tabelog) · dishes named in 2025–2026: noresore (baby eel), white amadai sashimi, grouper liver, abalone steak, grilled kinmedai, buri shabu-shabu with aosa; Hinai chicken soup with Kawachi chicken tsukune; six-kind sashimi; ayu with fruit tomato; eel and matsutake tempura in buckwheat flour; Awaji beef roast with green-onion sauce; tomato and yuba "mapo"; beltfish tempura; aburi beltfish sushi; hamochiri hotpot and zosui with sansho oil; eel shabu-shabu',
    website: OWN, gmaps: gm('心屋 本店 北新地 堂島'), menu_url: null,
    notes: "[Izakaya · Dojima, Awaji fish and sake] A 20-seat kappo-style izakaya above a flower shop on Kitashinchi's Kamidori, open since 2010, whose owner, from Awaji Island, gets fish and vegetables straight from friends back home. Summer means Awaji hamo, as hotpot, shabu-shabu or tempura, finished with a rice porridge lifted with sansho oil; eel courses with eel shabu-shabu; winter brings fugu. Courses run from about ¥6,800 to ¥14,000 plus 10% service, with over twenty sakes, including Awaji's own. Popular for business dinners, with semi-private rooms; smoking is allowed. The company runs a second shop, 本通り店, nearby.",
    chef_bio: { chef_name: null, roles: ['Owner from Awaji Island (unnamed)', 'head chef (unnamed)', 'staff'], origin: 'Awaji Island (the owner, per Tabelog)', background: 'Per the shop-maintained Tabelog listing: "The owner from Awaji Island sources fresh fish and vegetables directly from friends, focusing on local produce from Awaji Island"; over 20 sakes always; opened 10 May 2010. The operator site of 株式会社心屋 lists two shops, 地魚と地野菜 心屋 上通り店 (this one) and 個室と地肴 心屋 本通り店. The Tabelog invoice number T2120001171041 is registered to 株式会社心屋 at this address (NTA invoice register, read 2026-11-02). An October 2026 diner thanks "the head chef, the owner, and the staff".', philosophy: null, specialty: 'Awaji hamo hotpot; eel courses.',
      anecdotes: [
        { text: '"I added the chef\'s recommended "Sansho Oil" to the zosui (rice porridge), enhancing its flavor and making it absolutely delicious." — September 2025, the hamochiri hotpot.', source: R + 'B513059577/' },
        { text: '"It was my first time trying fresh eel shabu-shabu, and it had a refreshing taste and a melt-in-your-mouth texture, even better than grilled eel." — July 2026, the eel course.', source: R + 'B531376808/' },
        { text: '"Thank you very much for accommodating my last-minute change in visit time." — October 2026, a second visit.', source: R + 'B512222295/' },
      ],
      japanese_sources_summary: '公式サイト (株式会社心屋): 心屋の店舗一覧は地魚と地野菜 心屋 上通り店と個室と地肴 心屋 本通り店。食べログ (店舗会員): 心屋 本店、海鮮・居酒屋・日本酒バー、大阪市北区堂島1-3-33 新地萬年ビル 2F、JR 北新地駅から徒歩4分、北新地の上通りの花屋のビルの2階、月〜土17:00〜24:00 (L.O.23:00)、日曜と祝日の月曜休み、予約可、混雑時は2時間、2名はカウンターのみ、サービス料10%、カード・PayPay 可、20席、半個室、喫煙可、2010年5月10日オープン、Awaji 島出身の店主が友人から直送の魚と野菜、日本酒は常時20種以上、Awaji の地酒 Tomi Bijin、冬はふぐと白子、宴会のコースは6,800円から、夏の Awaji の鱧鍋のコース7,000円、白焼きとうなぎ鍋のコース。インボイス登録は株式会社心屋。口コミ(2025年7月〜2026年10月): のれそれ、シロアマダイの刺身、grouper の肝、アワビのステーキ、キンメダイの焼き物、ぶりとあおさのしゃぶしゃぶ、Hinai の地鶏のスープと Kawachi の鶏のつくね、刺身6種、鮎とフルーツトマト、うなぎと松茸のそば粉の天ぷら、Awaji の牛のロースト、トマトと湯葉の麻婆、太刀魚の天ぷら、炙り太刀魚の寿司、鱧ちり、山椒オイルの雑炊、うなぎのしゃぶしゃぶ、日本酒が豊富、喫煙可、大将と店主とスタッフが気配り。',
      confidence: 'medium', sources: [TB, OWN, R + 'B455760172/', R + 'B510160358/', R + 'B511057490/', R + 'B512222295/', R + 'B513059577/', R + 'B514953288/', R + 'B529315413/', R + 'B531376808/', R + 'B535787100/', R + 'B536440097/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses and à la carte; semi-private rooms (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-33 新地萬年ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the operator site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 43m; nearest other record osaka_hu_long_kitashinchi 27 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included; 10% service extra).', last_checked: TODAY, items: [
      it('', '', 'Awaji hamo hotpot course (summer)', '¥7,000', 'Courses', 'ask', 'no', 'Tabelog; July–September 2025.', 'hamo_course'),
      it('', '', 'Banquet course', 'from ¥6,800', 'Courses', 'ask', 'no', 'Tabelog.', 'banquet'),
      it('', '', 'Grilled eel and eel hotpot course, seven dishes', '', 'Courses', 'ask', 'no', 'Tabelog; July 2026.', 'eel_course'),
    ] }, {
    cuisine: 'Awaji 島の友人から直送の魚と野菜、Awaji の地酒 Tomi Bijin をふくむ20種以上の日本酒 (食べログ)・コース (食べログ、税込): 宴会のコースは6,800円から、夏の Awaji の鱧鍋7,000円、白焼きとうなぎ鍋の7品のコース、9,350円・9,650円・14,000円のコースも・冬はふぐと白子 (食べログ)・2025年〜2026年の口コミに出てくる料理: のれそれ、シロアマダイの刺身、grouper の肝、アワビのステーキ、キンメダイの焼き物、ぶりとあおさのしゃぶしゃぶ、Hinai の地鶏のスープと Kawachi の鶏のつくね、刺身6種、鮎とフルーツトマト、うなぎと松茸のそば粉の天ぷら、Awaji の牛のロースト、トマトと湯葉の麻婆、太刀魚の天ぷら、炙り太刀魚の寿司、鱧ちりと山椒オイルの雑炊、うなぎのしゃぶしゃぶ',
    neighborhood: '堂島1-3-33、北新地の上通りの花屋のある新地萬年ビルの2階。北新地駅から4分',
    gf_detail: '要確認。グルテンの情報なし。だしの鍋と〆の雑炊、太刀魚の天ぷら、うなぎと松茸のそば粉の天ぷら、醤油の刺身。',
    vegan_detail: 'ヴィーガンではありません。魚、うなぎ、牛肉の料理とだしの鍋。',
    notes: '[居酒屋・堂島、Awaji の魚と日本酒] 北新地の上通りの花屋の2階にある20席の割烹風の居酒屋で、2010年から。Awaji 島出身の店主が地元の友人から魚と野菜を直接仕入れる。夏は Awaji の鱧を鍋、しゃぶしゃぶ、天ぷらで、〆の雑炊に山椒オイル。うなぎのしゃぶしゃぶのコースもあり、冬はふぐ。コースは6,800〜14,000円ほどとサービス料10%、日本酒は Awaji の地酒をふくめ20種以上。半個室があり接待に人気、喫煙可。同じ会社の2店目、本通り店が近くにある。',
  });
}

save();
