// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 35.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + いっちゃんラーメン Icchan Ramen (reggae-themed ramen near Higashiyama Stn; jerk-chicken and spicy-coconut ramen; since 2008)
//   + ビストロ ラマージュ Bistro Ramaju (classic French bistro at Takakura-Oshikoji since 1990; the chef works alone)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + いまから なかじん Imakara Nakajin (couple-run Japanese-style yoshoku counter at Karasuma-Imadegawa)
//   + shibaF シバフ (nama-fu pizza in a Rokkaku machiya, by the Edo-period fu maker 志場商店)
//   None of the four is in data/kyoto.json: grep by id, name (いっちゃん/Icchan — たこ焼 いっちゃん is unrelated — ラマージュ/Ramaju,
//   なかじん/Nakajin, shibaF/シバフ) and address (南門前町542-1, 瓦町555-1, 岡松町262-3, 西六角町105) found none. Same-name counts:
//   one listing each; none names a parent chain.
//   Service charges checked against Tabelog’s Japanese original: ラマージュ 「サービス料なし」; なかじん 「なし」 (the English page says a
//   fee may be added); none listed for いっちゃん or shibaF.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-35');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ いっちゃんラーメン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007267/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://icchanramen.favy.jp/';
  const W = day(['11:30', '14:00'], ['19:00', '23:00']); const S = day(['11:30', '14:00']);
  put({
    id: 'kyoto_icchan_ramen', name: 'いっちゃんラーメン (Icchan Ramen)', category: 'OMNI',
    lat: 35.0102701370669, lng: 135.7789067792405, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles, gyoza and soy-based soups (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork and chicken soups with chashu and jerk chicken (2024–2026 reviews).',
    hours_raw: 'Tuesday–Saturday lunch 11:30–14:00 and dinner 19:00–23:00; Sunday and holidays lunch only; closed Monday (Tabelog). Cash only — no cards, e-money or QR (Tabelog). No service charge listed (Tabelog). 11 seats: 8 at the counter and one table for 3; smoking allowed except 11:30–13:30, with an ashtray outside (Tabelog). Reggae on the sound system and a Rasta-coloured entrance that hides the inside (2025 reviews). Just above the Furukawa-cho shopping street off Sanjo, 98 m from Higashiyama Stn (Tabelog; October 2025). Opened 23 September 2008 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashiyama-Sanjo, by Furukawa-cho — 98 m from Higashiyama Stn',
    cuisine: 'Kyoto ramen with a Jamaican twist (2024–2026 reviews) · jerk-chicken ramen, the most-reordered bowl, about ¥800–850; spicy-coconut ramen and spicy coconut jerk chicken ¥1,100 (August 2026); Icchan ramen, black ramen ¥900 (July 2025), garlic ramen, tomato cold noodles in summer, jerk sausage · lunch add-on sets of chashu rice with an egg, or gyoza with small rice · Jamaican beer (2024–2026 reviews)',
    website: SITE, gmaps: gm('いっちゃんラーメン 東山'), menu_url: TB,
    notes: "[Ramen · Higashiyama-Sanjo, jerk-chicken ramen to a reggae beat] A tiny, Rasta-painted ramen counter by Higashiyama Station where the house hits are jerk-chicken ramen and a creamy, green-curry-like spicy-coconut ramen (about ¥850–1,100); regular, black and garlic bowls too. Lunch sets add chashu rice and an egg for a little more. Reggae plays, the owner is warm, and it is open late. Cash only; smoking allowed outside lunch hours. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner known as Icchan (reviews); full name not given'], origin: null,
      background: 'Tabelog gives the opening as 23 September 2008. Reviewers describe a reggae-themed shop with a Jamaican feel, jerk-chicken and spicy-coconut ramen alongside classic bowls, and a warm owner nicknamed Icchan.',
      philosophy: null,
      specialty: 'Jerk-chicken ramen; spicy-coconut ramen.',
      anecdotes: [
        { text: 'A September 2024 visitor tried the spicy-coconut ramen on the strong advice of a local gentleman met at a takoyaki shop, and agreed.', source: R + 'B492332051/' },
        { text: 'A March 2025 first-timer expected green curry from the spicy-coconut ramen and found it creamy rather than hot.', source: R + 'B502582343/' },
        { text: 'An August 2025 diner chose the summer tomato cold noodles with avocado on a hot day.', source: R + 'B512153356/' },
      ],
      japanese_sources_summary: '食べログ: いっちゃんラーメン、ラーメン・餃子、左京区南門前町542-1 湯川ビル1F、東山駅から98m、火〜土11:30〜14:00・19:00〜23:00、日祝11:30〜14:00、月曜定休、カード・電子マネー・QR 不可、11席 (カウンター8、3人席1)、喫煙可 (11:30〜13:30は禁煙、店前に灰皿)、2008年9月23日オープン。口コミ (2024〜2026年、英語): ジャマイカ風、レゲエ、ジャークチキンラーメン800〜850円、スパイシーココナッツ、スパイシーココナッツジャークチキン1,100円 (2026年8月)、いっちゃんラーメン、ブラック900円、トマト冷麺、昼の追加セット (チャーシューご飯と卵、餃子と小ライス)。',
      confidence: 'medium', sources: [TB, SITE, R + 'B101559681/', R + 'B302455265/', R + 'B478782663/', R + 'B492332051/', R + 'B498565269/', R + 'B499919650/', R + 'B502582343/', R + 'B503369639/', R + 'B504371990/', R + 'B509692877/', R + 'B512153356/', R + 'B516155925/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; smoking allowed outside lunch hours.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区南門前町542-1 湯川ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; most recent review August 2026.' },
    pin_source: `Tabelog ${TB} (35.01027, 135.778907); GSI resolves 南門前町542-1 only to the town (51m), so not lot-checked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B302455265/', R + 'B509692877/'],
    price_note: 'Prices from July 2025 and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Spicy coconut jerk-chicken ramen', '¥1,100', 'Ramen', 'no', 'no', 'August 2026.', 'spicy_coconut_jerk'),
      it('', '', 'Jerk-chicken ramen', '', 'Ramen', 'no', 'no', 'About ¥800–850.', 'jerk_chicken'),
      it('', '', 'Black ramen', '¥900', 'Ramen', 'no', 'no', 'July 2025.', 'black'),
    ] }, {
    cuisine: 'ジャマイカ風のひねりの京都ラーメン (2024〜2026年の口コミ)・一番リピートの多いジャークチキンラーメン800〜850円ほど、スパイシーココナッツラーメンとスパイシーココナッツジャークチキン1,100円 (2026年8月)、いっちゃんラーメン、ブラック900円 (2025年7月)、にんにくラーメン、夏のトマト冷麺、ジャークソーセージ・昼の追加セットはチャーシューご飯と卵か、餃子と小ライス・ジャマイカのビール (2024〜2026年の口コミ)',
    neighborhood: '東山三条、古川町のそば。東山駅から98m',
    gf_detail: 'グルテンフリー不可。小麦のラーメンの麺、餃子、醤油系のスープ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚と鶏のスープにチャーシューやジャークチキン (2024〜2026年の口コミ)。',
    notes: '[ラーメン・東山三条、レゲエとジャークチキンラーメン] 東山駅そばの、ラスタカラーの小さなラーメンのカウンター。名物はジャークチキンラーメンと、グリーンカレーのようにクリーミーなスパイシーココナッツラーメン (850〜1,100円ほど)。普通のラーメン、ブラック、にんにくも。昼はチャーシューご飯と卵のセットを少しの追加で。レゲエが流れ、店主は温かく、夜遅くまで。現金のみ、昼以外は喫煙可。月曜休み。',
  });
}

// ================================================================ ビストロ ラマージュ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000955/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_bistro_ramaju', name: 'ビストロ ラマージュ (Bistro Ramaju)', category: 'MOM_AND_POP',
    lat: 35.012945337865354, lng: 135.76252140044076, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Classic French courses with sauces, pastry-wrapped fish and bread; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: classic French courses of meat, game and fish with butter sauces (Tabelog; reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last order 14:00); dinner 18:00–23:00 (last order 21:00); closed Wednesday and Thursday (open on some holidays) (Tabelog). Reservations advised. No service charge (Tabelog’s Japanese original: 「サービス料なし」). 12 seats, up to 15 for private hire; non-smoking, with an ashtray at the entrance; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). On Takakura-dori north of Oshikoji, between Karasuma-Oike and Kyoto City Hall, 352 m from Karasuma-Oike Stn (Tabelog; June 2024). Open since 1990 (September 2025 review).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura-Oshikoji — 352 m from Karasuma-Oike Stn',
    cuisine: 'Traditional French with seasonal ingredients, classic technique and many sauces; a wine list centred on full-bodied Burgundy; game such as wild duck in season (Tabelog) · lunch course ¥3,080 with appetizer, soup, a meat or fish main and dessert (September 2025) · six-dish dinner course, e.g. pork rillettes, cauliflower mousse, shrimp and prosciutto salad, roast duck, sea bream in pastry, lamb (2024–2025 reviews)',
    website: null, gmaps: gm('ビストロ ラマージュ 高倉押小路'), menu_url: TB,
    notes: "[French · Takakura-Oshikoji, a one-chef classic bistro since 1990] A small, long-standing bistro between Karasuma-Oike and City Hall, where a veteran chef cooks and serves single-handed. Expect classic French with proper sauces: rillettes, roast duck, sea bream in pastry, and wild duck in the hunting season, with Burgundy to match. The ¥3,080 lunch course is a quiet bargain. Closed Wednesday and Thursday.",
    chef_bio: { chef_name: 'Hiroshi Ueda', roles: ['Chef-owner; runs the restaurant single-handed (January 2026)'], origin: null,
      background: 'Per a September 2025 review: chef Hiroshi Ueda has more than 40 years in French cooking alone, trained at the long-established French restaurant Toyoken in Tokyo, and has run Bistro Ramaju since 1990. Per Tabelog’s official introduction: traditional French with seasonal ingredients, classic techniques and versatile sauces, Burgundy wines and game in season, supported by many well-known regulars. A January 2026 reviewer notes the chef manages everything alone.',
      philosophy: 'Per Tabelog’s official introduction: classic French technique and versatile sauces to bring seasonal ingredients to life.',
      specialty: 'Classic French courses; game in the hunting season.',
      anecdotes: [
        { text: 'A January 2026 lunch guest found the relaxed pace natural, with the chef handling everything alone.', source: R + 'B521000413/' },
        { text: 'An April 2025 birthday diner had a six-dish course of shrimp and prosciutto salad, roast duck, sea bream and lamb.', source: R + 'B505182897/' },
        { text: 'A June 2023 visitor tired of kaiseki found the 33-year-old bistro easy to enjoy as a tourist.', source: R + 'B466978441/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ ラマージュ、フレンチ・ビストロ・洋食、中京区高倉通押小路上ル瓦町555-1 西村良ビル1F、烏丸御池駅から352m、12:00〜15:00 (L.O. 14:00)、18:00〜23:00 (L.O. 21:00)、水木定休 (祝日は営業の場合あり)、サービス料なし、12席 (貸切15名)、禁煙 (入口に灰皿)、カード可。公式紹介: 季節の食材、古典的な技法と多彩なソースの伝統的なフランス料理、ブルゴーニュ中心のワイン、狩猟の季節は鴨などのジビエ、著名人にも支持される老舗。口コミ (2023〜2026年、英語): 1990年から、シェフ Hiroshi Ueda はフランス料理一筋40年以上、東京の老舗 Toyoken で修業、一人で切り盛り、ランチコース3,080円、リエット、鴨のロースト、鯛のパイ包み、仔羊。',
      confidence: 'medium', sources: [TB, R + 'B466978441/', R + 'B479914910/', R + 'B486486243/', R + 'B486595897/', R + 'B505182897/', R + 'B505876201/', R + 'B511956634/', R + 'B521000413/', R + 'B526384845/', R + 'B534251111/', R + 'B535539718/', R + 'B535564353/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A one-chef room; relaxed pace.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区高倉通押小路上ル瓦町555‐1 西村良ビル １F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.012945, 135.762521); cross-checked: GSI 京都府京都市中京区瓦町555番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535564353/', R + 'B505182897/'],
    price_note: 'From 2025 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (appetizer, soup, meat or fish, dessert)', '¥3,080', 'Lunch', 'ask', 'no', 'September 2025.', 'lunch_course'),
      it('', '', 'Six-dish dinner course', '', 'Dinner', 'ask', 'no', '', 'dinner_course'),
    ] }, {
    cuisine: '季節の食材、古典的な技法、多彩なソースの伝統的なフランス料理。ブルゴーニュ中心のワイン、狩猟の季節は鴨などのジビエ (食べログ)・前菜、スープ、肉か魚のメイン、デザートのランチコース3,080円 (2025年9月)・6品のディナーコース、たとえば豚のリエット、カリフラワーのムース、海老と生ハムのサラダ、鴨のロースト、鯛のパイ包み、仔羊 (2024〜2025年の口コミ)',
    neighborhood: '高倉押小路。烏丸御池駅から352m',
    gf_detail: '要確認。ソースやパイ包み、パンのある古典的なフランス料理のコース。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉、ジビエ、魚にバターのソースの古典的なフランス料理 (食べログ、口コミ)。',
    notes: '[フレンチ・高倉押小路、1990年からの一人のシェフの老舗ビストロ] 烏丸御池と市役所の間の、小さな老舗ビストロ。ベテランのシェフが一人で料理し、サービスもこなす。ソースのきいた古典的なフランス料理: リエット、鴨のロースト、鯛のパイ包み、狩猟の季節は鴨のジビエ、合わせるのはブルゴーニュ。3,080円のランチコースは隠れたお得。水木休み。',
  });
}

// ================================================================ いまから なかじん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034759/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['18:00', '20:30']);
  put({
    id: 'kyoto_imakara_nakajin', name: 'いまから なかじん (Imakara Nakajin)', category: 'OMNI',
    lat: 35.029955797853425, lng: 135.75899023061504, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses feature fried shrimp, chicken katsu, tempura and gratin; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built on seafood, chicken and meat (reviews).',
    hours_raw: 'Lunch 12:00–14:30 and dinner 18:00–20:30, Monday and Thursday–Sunday; closed Tuesday and Wednesday (Tabelog). Mainly courses, with occasional à la carte days (September 2024). No service charge (Tabelog’s Japanese original: 「なし」 — the English page says a fee may be added). Cash only — no cards or e-money (Tabelog). 8 counter seats; private hire possible; non-smoking; wheelchair accessible (Tabelog). Moved to Karasuma-Imadegawa: from the crossing go 20 m north, turn west, fourth door on the north side behind the bicycle parking, 37 m from Imadegawa Stn (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma-Imadegawa — 37 m from Imadegawa Stn',
    cuisine: 'Light, Japanese-style yoshoku — "Western cooking for those aged 45 and up" — using tempura and Japanese techniques, with fried shrimp as the main dish (Tabelog) · courses of seasonal small plates, e.g. clams, firefly squid, moroko fritters, tofu with salt and olive oil, bamboo-shoot and scallop gratin, tempura of fuki buds and aosa with house uni salt, roast beef, bonito, chicken katsu, a Chinese-noodle course midway (2024–2026 reviews) · sake and wine (Tabelog)',
    website: null, gmaps: gm('いまから なかじん 烏丸今出川'), menu_url: TB,
    notes: "[Yoshoku · Karasuma-Imadegawa, light Western food the Japanese way] An eight-seat counter tucked behind a bicycle park just north of Karasuma-Imadegawa, run by a couple. The theme is 'Western cooking for those aged 45 and up': fried shrimp is the star, and the courses run through seasonal small plates, gratin, tempura with house uni salt and a feather-light chicken katsu. Lunch and early dinner; cash only. Closed Tuesday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef not named; run by a couple (March 2026)'], origin: null,
      background: 'Per Tabelog’s official introduction: moved to Karasuma-Imadegawa and changed format slightly, now themed "Western cuisine for those aged 45 and up", with fried shrimp as the main dish and plenty of tempura and Japanese technique for lighter yoshoku. Reviewers say the owner previously ran a soba shop (November 2022; May 2026) and that it is run by a couple (March 2026).',
      philosophy: 'Per Tabelog’s official introduction: light Western dishes that won’t leave you feeling heavy.',
      specialty: 'Ebi fry; chicken katsu.',
      anecdotes: [
        { text: 'A March 2026 first-timer, sent by another chef, had a tempura of fuki buds and aosa with house uni salt.', source: R + 'B523837443/' },
        { text: 'A May 2026 diner finished with three pieces of chicken katsu turned into a katsu-don and still felt fine the next morning.', source: R + 'B529602553/' },
        { text: 'A May 2026 visitor nearly missed the stylish door hidden behind the bicycle parking.', source: R + 'B528074021/' },
      ],
      japanese_sources_summary: '食べログ: いまから なかじん、洋食・日本料理、上京区烏丸今出川上る岡松町262番3号、今出川駅から37m、月・木〜日12:00〜14:30・18:00〜20:30、火水定休、サービス料なし、カード・電子マネー不可、カウンター8席、貸切可、禁煙、車椅子可。公式紹介: 烏丸今出川に移転、北へ20m・西へ入り北側4軒目の駐輪場の奥、テーマは「45歳からの洋食」、メインはエビフライ、天ぷらや和の技法で軽い洋食。口コミ (2022〜2026年、英語): 夫婦で営む、以前はそば屋、コース、蛤、ホタルイカ、諸子のフリット、筍と帆立のグラタン、自家製の雲丹塩の天ぷら、ローストビーフ、チキンカツ、途中の中華そば。',
      confidence: 'medium', sources: [TB, R + 'B456932656/', R + 'B460394745/', R + 'B481185262/', R + 'B496201399/', R + 'B500719487/', R + 'B505472821/', R + 'B520901409/', R + 'B522534195/', R + 'B523837443/', R + 'B528074021/', R + 'B529602553/', R + 'B535158499/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter, courses, cash only; hard to find.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区烏丸今出川上る岡松町262番3号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.029956, 135.75899); cross-checked: GSI 京都府京都市上京区岡松町262番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523837443/', R + 'B529602553/'],
    price_note: 'Dishes from 2026 reviews; no prices published.', last_checked: TODAY, items: [
      it('', '', 'Seasonal course ending in ebi fry or chicken katsu', '', 'Course', 'no', 'no', '', 'course'),
      it('', '', 'Chicken katsu', '', 'Course', 'no', 'no', '', 'chicken_katsu'),
    ] }, {
    cuisine: '天ぷらや和の技法を生かした軽い和風の洋食。テーマは「45歳からの洋食」、メインはエビフライ (食べログ)・季節の小皿のコース、たとえば蛤、ホタルイカ、諸子のフリット、豆腐の塩とオリーブオイル、筍と帆立のグラタン、ふきのとうとあおさの天ぷらと自家製の雲丹塩、ローストビーフ、鰹、チキンカツ、途中の中華そば (2024〜2026年の口コミ)・日本酒とワイン (食べログ)',
    neighborhood: '烏丸今出川。今出川駅から37m',
    gf_detail: '要確認。コースにエビフライ、チキンカツ、天ぷら、グラタン。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介、鶏、肉が中心のコース (口コミ)。',
    notes: '[洋食・烏丸今出川、和の技の軽い洋食] 烏丸今出川のすぐ北、駐輪場の奥に隠れたカウンター8席。夫婦で営む。テーマは「45歳からの洋食」: 主役はエビフライ、コースは季節の小皿、グラタン、自家製の雲丹塩の天ぷら、軽いチキンカツへと続く。昼と早めの夜のみ、現金のみ。火水休み。',
  });
}

// ================================================================ shibaF
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037507/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://shiba-f.com/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_shibaf_namafu_pizza', name: 'shibaF (シバフ)', category: 'OMNI',
    lat: 35.00740678786676, lng: 135.75590570038943, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the pizza bases are made of nama-fu, which is wheat gluten (official site; Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Nama-fu itself is plant-based, but the pizzas carry cheese, cream, fish, chicken or duck; nothing vegan is marked (2026 reviews).',
    hours_raw: '11:00–17:00 (last order 16:30); closed Tuesday (Tabelog). Bookings taken, useful at holiday periods (August 2026). Pizzas come with a soup (September 2026). No service charge listed (Tabelog). 25 seats over two floors of a renovated Kyoto machiya, with nama-fu for sale on the ground floor; non-smoking; cards, transit IC and other e-money, and QR (Tabelog). On Rokkaku-dori, about 10 min from Karasuma-Oike Stn (511 m) (Tabelog; August 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokkaku-dori, west of Karasuma — 10 min from Karasuma-Oike Stn',
    cuisine: 'Nama-fu specialist from a Kyoto fu maker, serving pizza on bases of fresh wheat gluten — chewy inside, crisp outside, high in protein (official site; Tabelog) · e.g. smoked duck and Kujo leek with yuzu-pepper cream and black shichimi; roast Kyoto red chicken with porcini sauce; herb-oil mackerel with chopped shibazuke; shiso, lemon and shirasu; duck and Kujo leek cream; chicken-wing fritters (2026 reviews) · the shop sells many kinds of nama-fu, from mochi-fu to yuzu, sansho and cheese fu (official site)',
    website: SITE, gmaps: gm('shibaF シバフ 六角'), menu_url: TB,
    notes: "[Pizza · Rokkaku, pizza on fresh wheat gluten] A stylish machiya café from an Edo-period Kyoto fu maker, where the pizza bases are nama-fu — chewy, crisp-edged and lighter than dough. Toppings lean Kyoto: smoked duck with Kujo leek and yuzu-pepper cream, mackerel with shibazuke, shirasu with shiso and lemon. A soup comes alongside; buy fu to take home downstairs. Daytime only; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Run by the nama-fu maker 志場商店 (official site); no chef named'], origin: null,
      background: 'Per the official site: 志場商店, said to date from the late Edo period, began trading in Mibu and has made Kyoto nama-fu for four generations, building a wide range in answer to Kyoto chefs’ requests; it launched shibaF as a new nama-fu restaurant to make fu an everyday food. Per Tabelog: nama-fu pizza in a renovated Kyoto machiya with counter and table seating and a retail corner.',
      philosophy: 'Per the official site: to explore and widen what Kyoto nama-fu can be.',
      specialty: 'Nama-fu pizza.',
      anecdotes: [
        { text: 'An August 2026 family tried mackerel-with-shibazuke and shiso-lemon-shirasu pizzas.', source: R + 'B533505312/' },
        { text: 'An August 2026 pair, searching for cheese, discovered the nama-fu crust and found it lighter than regular pizza.', source: R + 'B533585289/' },
        { text: 'An August 2026 diner noted the dough firms up as it cools, a texture of its own.', source: R + 'B534421730/' },
      ],
      japanese_sources_summary: '公式サイト (shiba-f.com): shibaF KYONAMAFU、京生麩の可能性を探り広げる、京都で生麩を作り続けてきた志場商店が立ち上げた生麩料理専門店、志場商店は江戸時代後期の創業とされ初代が壬生で商いを始め現在4代目、京都の料理人の要望に応えて増えた多彩な生麩 (もち麩、あわ麩、よもぎ麩、柚子麩、実山椒麩、チーズ麩など)、中京区西六角町105。食べログ: ピザ・カフェ、烏丸御池駅から511m、11:00〜17:00 (L.O. 16:30)、火曜定休、25席 (1階カウンター7とテーブル、2階カウンター4とテーブル)、禁煙、カード・電子マネー・QR 可、町家を改装、1階に物販。口コミ (2026年、英語): 生麩ピザ、燻製鴨と九条ねぎの柚子胡椒クリーム、京赤地鶏とポルチーニ、鯖としば漬け、大葉とレモンのしらす、手羽のフリット、スープ付き。',
      confidence: 'medium', sources: [TB, SITE, R + 'B533505312/', R + 'B533585289/', R + 'B534042136/', R + 'B534219351/', R + 'B534219358/', R + 'B534421730/', R + 'B536105530/', R + 'B536346041/', R + 'B536394165/', R + 'B537295220/', R + 'B537739280/', R + 'B538471865/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Picture menu of pizzas; retail fu downstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西六角町105',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007407, 135.755906); cross-checked: GSI 京都府京都市中京区西六角町105番地 (lot) 16m; 10m from kyoto_rokujuan and 11m from mp_shunsai_imari; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537739280/', R + 'B533505312/'],
    price_note: 'Dishes from 2026 reviews; no prices published.', last_checked: TODAY, items: [
      it('', '', 'Nama-fu pizza: smoked duck, Kujo leek, yuzu-pepper cream', '', 'Pizza', 'no', 'no', '', 'duck_kujo'),
      it('', '', 'Nama-fu pizza: roast Kyoto red chicken with porcini sauce', '', 'Pizza', 'no', 'no', '', 'chicken_porcini'),
      it('', '', 'Nama-fu pizza: shiso, lemon and shirasu', '', 'Pizza', 'no', 'no', '', 'shirasu'),
    ] }, {
    cuisine: '京都の生麩屋の生麩料理専門店で、生麩の生地のピザ。中はもちもち、外はカリッと、高たんぱく (公式サイト、食べログ)・例: 燻製鴨と九条ねぎの柚子胡椒クリームと黒七味、京赤地鶏のローストとポルチーニソース、ハーブオイル煮の鯖としば漬け、大葉とレモンのしらす、鴨と九条ねぎのクリーム、手羽のフリット (2026年の口コミ)・店ではもち麩から柚子、山椒、チーズの麩まで多彩な生麩を販売 (公式サイト)',
    neighborhood: '六角通、烏丸の西。烏丸御池駅から徒歩10分',
    gf_detail: 'グルテンフリー不可。ピザの生地は小麦のグルテンである生麩 (公式サイト、食べログ)。',
    vegan_detail: '要確認。生麩自体は植物性だが、ピザにはチーズ、クリーム、魚、鶏、鴨がのる。ヴィーガンの表示はない (2026年の口コミ)。',
    notes: '[ピザ・六角、生麩のピザ] 江戸時代から続く京都の麩屋の、おしゃれな町家カフェ。ピザの生地は生麩で、もちもちで縁はカリッと、ふつうの生地より軽い。具は京都らしく、燻製鴨と九条ねぎの柚子胡椒クリーム、鯖としば漬け、大葉とレモンのしらす。スープ付き。1階で麩を買って帰れる。昼のみ、火曜休み。',
  });
}

save();
