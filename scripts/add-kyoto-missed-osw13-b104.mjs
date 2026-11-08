// Kyoto priority (kyoto-missed), worker osw13, batch 104 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: BHAVANI (バワニ), もしも屋, Simpson & Sons, ツバクロ すっぽん食堂 京都店.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-104');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26043918', 'too thin to verify: 牛鍋屋gionK has no Tabelog reviews');
skip('26002386', 'retail food shop (Greg 11-07 ruling): 八方焼本舗 小松屋 is a take-away wagashi shop on Teramachi; reviewers call it long-established, but no source shows its founding or family ownership, and no GF or vegan options are sourced');
skip('26026044', 'too thin to verify: ぎおん 酒菜屋 — the newest Tabelog review is February 2022, and a 2018 reviewer says the original chef left in 2017 and a different chef runs it under the same name');
skip('26037570', 'retail food shop (Greg 11-07 ruling): 芋ぴっぴ。 京都祇園店 is a sweet-potato sweets shop (Tabelog "Kyoto Gion branch"; shop.imo-pi-pi.com), not shown to be historic or family-owned, with no sourced GF or vegan options');

// ================================================================ BHAVANI (バワニ)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039772/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '16:00'], ['18:00', '24:00']);
  put({
    id: 'kyoto_bhavani_south_indian', name: 'バワニ (BHAVANI)', category: 'OMNI',
    lat: 34.996909, lng: 135.766614, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: South Indian dosa (described as a rice crepe), biryani of basmati rice, sambar and wada (2023–2025 reviews), but no reviewer or listing says anything about wheat, frying oil or shared equipment.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: the listing calls it a South Indian restaurant specializing in vegetable and rice dishes; masala dosa with sambar, chutney and potato curry (July 2023). Biryani comes with yogurt raita, and paneer and fish dishes are on the menu (2023–2025).',
    hours_raw: 'Tabelog: daily 12:00–16:00 and 18:00–24:00. Reservations taken. No charge — Tabelog, Japanese original 「なし」. Cards (VISA, Master, JCB) and PayPay. 21 seats: 18 at tables, 3 at the counter; private hire up to 50. Non-smoking. Wheelchair accessible. English menu. Children welcome. Take-out and delivery. A South Indian bar in the evening (2023 reviews). 4 min walk from Keihan Kiyomizu-Gojo exit 3. Opened 3 July 2023.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo, Shimogyo-ku — 4 min walk from Kiyomizu-Gojo',
    cuisine: 'A South Indian restaurant and evening bar from the owner of Teramachi\'s ＡＪＡＮＴＡ, with Indian chefs (Tabelog; 2023–2026 reviews) · masala dosa special with sambar, chutney, potato curry and rice ¥1,380 (July 2023) · chicken biryani of basmati rice with raita; prawn biryani ¥1,280 (2023) · set meals ¥1,100–1,380 (August 2023) · wada, paneer chili, masala dosa, chai (December 2025) · fish chili (January 2024) · fluffy biryani (April 2026)',
    website: null, gmaps: gm('BHAVANI バワニ 京都 五条'), menu_url: TB + 'dtlmenu/',
    notes: '[South Indian · Gojo near Kiyomizu-Gojo, a dosa-and-biryani bar] A casual South Indian spot from the team behind ＡＪＡＮＴＡ in Teramachi: plate-sized masala dosa with sambar, layered basmati biryani with raita, wada and chai, sets about ¥1,100–1,400, turning into a bar at night until midnight. Open daily.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; owner of ＡＪＡＮＴＡ)', 'Indian chefs (unnamed)'], origin: null,
      background: 'The Tabelog listing says the owner of ＡＪＡＮＴＡ, a long-established Indian restaurant in Teramachi selected as a Tabelog curry Top 100 in 2020, opened this as a new South Indian venture; opened 3 July 2023. A September 2023 reviewer writes that, as at ＡＪＡＮＴＡ, the cooking is by an Indian chef with experience in five-star hotels in India; a January 2024 reviewer names ＡＪＡＮＴＡ and Elora as sister restaurants. Criticism: a January 2024 reviewer found the staff distracted and the menu limited; a March 2024 reviewer found portions small for the price.',
      philosophy: 'South Indian dishes are lighter and healthier than North Indian ones (Tabelog listing).',
      specialty: 'Masala dosa; layered biryani of basmati rice.',
      anecdotes: [
        { text: 'September 2023: "Like Ajanta, the cooking is handled by a skilled Indian chef who has experience working in top-tier 5-star hotels in India."', source: R + 'B471070821/' },
        { text: 'December 2025: "The Dosa was indeed larger than the plate, which was visually exciting."', source: R + 'B518434709/' },
      ],
      japanese_sources_summary: '食べログ: バワニ (BHAVANI)、インド料理・インドカレー、下京区西橋詰町765-1、京阪清水五条駅3番出口から徒歩4分、毎日12:00〜16:00・18:00〜24:00、予約可、チャージの原文は「なし」、カード (VISA・Master・JCB)・PayPay可、21席、貸切50名まで、禁煙、車椅子可、英語メニュー、子供可、テイクアウト・デリバリー、2023年7月3日オープン、寺町の老舗インド料理店アジャンタ (2020年カレー百名店) の店主による南インド料理の店、野菜と米の料理が中心。口コミ (2023年7月〜2026年4月、英語): マサラドーサのセット1,380円 (サンバル、チャトニ、ポテトカレー、ライス、2023年7月)、バスマティ米のチキンビリヤニとライタ、海老のビリヤニ1,280円、セット1,100〜1,380円、ワダ、パニールチリ、チャイ、インドの五つ星ホテル出身のインド人料理人 (2023年9月)、姉妹店にアジャンタとエローラ (2024年1月)、夜は南インドのバー、接客に不満の声 (2024年1月)、量が少ないとの声 (2024年3月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B468656594', 'B469260062', 'B471070821', 'B471096864', 'B477720905', 'B480761346', 'B481302551', 'B518434709', 'B525754716'])) },
    cultural_comfort: { level: 'english_friendly', note: 'English menu (Tabelog); Indian chefs; Japanese-speaking staff (August 2023).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西橋詰町765-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated December 2025 and April 2026.' },
    pin_source: `Tabelog ${TB} (34.996909, 135.766614); GSI lot 京都府京都市下京区西橋詰町765番地 about 42m away; nearest pin mp_kissa_kano 90m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B468656594/', R + 'B471070821/'],
    price_note: 'Prices from July and September 2023 reviews.', last_checked: TODAY, items: [
      it('', '', 'Masala dosa special (dosa, sambar, chutney, potato curry, rice)', '¥1,380', 'Set', 'ask', 'ask', 'July 2023.', 'masala_dosa'),
      it('', '', 'Prawn biryani with raita', '¥1,280', 'Rice', 'ask', 'no', 'September 2023.', 'prawn_biryani'),
      it('', '', 'Chicken biryani with raita', null, 'Rice', 'ask', 'no', 'August 2023.', 'chicken_biryani'),
      it('', '', 'Wada', null, 'Snack', 'ask', 'ask', 'December 2025.', 'wada'),
    ] }, {
    cuisine: '寺町のＡＪＡＮＴＡの店主による南インド料理の店、夜はバー。料理はインド人の料理人 (食べログ、2023〜2026年の口コミ)・マサラドーサのスペシャル (サンバル、チャトニ、ポテトカレー、ライス) 1,380円 (2023年7月)・バスマティ米のチキンビリヤニとライタ、海老のビリヤニ1,280円 (2023年)・セット1,100〜1,380円 (2023年8月)・ワダ、パニールチリ、マサラドーサ、チャイ (2025年12月)・フィッシュチリ (2024年1月)・ふっくらしたビリヤニ (2026年4月)',
    neighborhood: '下京区の五条。清水五条から徒歩4分',
    gf_detail: '要確認: 南インドのドーサ (米のクレープと説明)、バスマティ米のビリヤニ、サンバル、ワダ (2023〜2025年の口コミ)。小麦や揚げ油、調理器具についての記載はない。',
    vegan_detail: '要確認: 食べログでは野菜と米の料理が中心の南インド料理店。マサラドーサにサンバル、チャトニ、ポテトカレー (2023年7月)。ビリヤニにはヨーグルトのライタが付き、パニールや魚の料理もある (2023〜2025年)。',
    notes: '[南インド料理・清水五条近くの五条、ドーサとビリヤニのバー] 寺町のＡＪＡＮＴＡのチームによる気軽な南インド料理店。皿からはみ出すマサラドーサとサンバル、層になったバスマティ米のビリヤニとライタ、ワダやチャイ。セットは1,100〜1,400円ほど、夜は深夜0時までバーに。毎日営業。',
  });
}

// ================================================================ もしも屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26023800/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_moshimoya_gojo', name: 'もしも屋 (Moshimo Ya)', category: 'OMNI',
    lat: 34.996794, lng: 135.767128, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: gyoza, spring rolls, shumai, fried chicken and mapo tofu alongside the obanzai (2018–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: although Tabelog files it under vegetable dishes, the menu reviewers describe includes beef tendon, roast beef, lamb gyoza, sea bass and omelets (2018–2025).',
    hours_raw: 'Tabelog: Thu–Sun 17:30–22:00 (L.O. 21:00); closed Monday to Wednesday and on irregular days — check Instagram. Reservations taken. Cards. 17 seats: 5 at the counter, 12 at tables. A May 2022 reviewer reports that lunch ended on 30 April 2022. A sign asks guests not to take photos, though the owner allowed quick ones (February 2025). On Teramachi just north of Gojo, about 5 min walk from Keihan Kiyomizu-Gojo.',
    hours: { 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi just north of Gojo — 5 min walk from Kiyomizu-Gojo',
    cuisine: 'A small, hand-decorated house restaurant mixing Kyoto obanzai with Asian dishes and organic wine (Tabelog; 2016–2025 reviews) · obanzai platter of three (February 2025) · three kinds of gyoza, mapo tofu, roast beef, spring rolls (March 2024) · herb-fried sea bass with lotus root; simmered daikon and beef tendon (February 2025) · sake-steamed sea bream with nanohana (February 2024) · water dumplings, fried chicken (March 2024) · chicken meatball soup; beef tendon stew (October 2018)',
    website: null, gmaps: gm('もしも屋 寺町五条'), menu_url: TB + 'dtlmenu/',
    notes: '[Obanzai & Asian small plates · Teramachi above Gojo, a handmade dining room] A dim, hand-decorated little dining bar where chalkboard obanzai sit beside gyoza, mapo tofu, spring rolls and roast beef, with organic wine; small plates to share for about ¥2,000–4,000. Popular with women and solo diners. Thursday to Sunday evenings only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'An October 2018 reviewer writes that it is run by two women; an August 2018 reviewer describes a DIY-renovated space and a young owner with good taste. Reviewers since 2016 describe homemade comfort food, cute tableware and a mixed crowd of solo diners, students and families (February 2024). Lunch service ended in April 2022 (May 2022 review). Criticism: limited variety (December 2016); the lamb was hard to taste in one gyoza (October 2018).',
      philosophy: null,
      specialty: 'Obanzai; gyoza; Asian-style small plates.',
      anecdotes: [
        { text: 'March 2024: "We started with obanzai and then enjoyed the famous three types of gyoza, mapo tofu, roast beef, and spring rolls—everything was extraordinary!"', source: R + 'B481593117/' },
        { text: 'February 2024: "My favorite was the sake-steamed sea bream with nanohana (rapeseed blossoms) and a fragrant sauce."', source: R + 'B504124543/' },
      ],
      japanese_sources_summary: '食べログ: もしも屋、野菜料理・創作料理・ダイニングバー、下京区寺町五条上がる西橋詰町771-1、京阪清水五条駅から徒歩約5分、木〜日17:30〜22:00 (L.O.21:00)、月〜水曜休み、不定休あり (Instagramで告知)、予約可、カード可、17席 (カウンター5・テーブル12)。口コミ (2016年12月〜2025年2月、英語): 手作りの内装、おばんざいとアジアの料理、オーガニックワイン、3種の餃子、麻婆豆腐、ローストビーフ、春巻き、水餃子、唐揚げ、すずきのハーブ揚げとれんこん、大根と牛すじの煮物、鯛の酒蒸しと菜の花、女性2人で営む店 (2018年10月)、ランチは2022年4月30日で終了 (2022年5月)、撮影禁止の札あり (2025年2月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B233728485', 'B367661091', 'B379038810', 'B395877950', 'B449585393', 'B481593117', 'B481637416', 'B501235457', 'B504124543'])) },
    cultural_comfort: { level: 'japanese', note: 'Small shared-plates room; a no-photos sign (February 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区寺町五条上がる西橋詰町771-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated February 2024 and February 2025; no review since February 2025.' },
    pin_source: `Tabelog ${TB} (34.996794, 135.767128); GSI lot 京都府京都市下京区西橋詰町771番地 about 20m away; nearest pin mp_kissa_kano 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501235457/'],
    price_note: 'No current item prices; Tabelog average ¥3,000–3,999.', last_checked: TODAY, items: [
      it('', '', 'Obanzai platter (3 kinds)', null, 'Obanzai', 'ask', 'ask', 'February 2025.', 'obanzai_platter'),
      it('', '', 'Gyoza (three kinds)', null, 'Dumplings', 'no', 'no', 'March 2024.', 'gyoza'),
      it('', '', 'Mapo tofu', null, 'Main', 'no', 'no', 'March 2024; February 2025.', 'mapo_tofu'),
      it('', '', 'Simmered daikon and beef tendon', null, 'Obanzai', 'ask', 'no', 'February 2025.', 'daikon_gyusuji'),
    ] }, {
    cuisine: '手作りの内装の小さな店。京都のおばんざいとアジアの料理、オーガニックワイン (食べログ、2016〜2025年の口コミ)・おばんざい3種盛り (2025年2月)・3種の餃子、麻婆豆腐、ローストビーフ、春巻き (2024年3月)・すずきとれんこんのハーブ揚げ、大根と牛すじの煮物 (2025年2月)・鯛の酒蒸しと菜の花 (2024年2月)・水餃子、唐揚げ (2024年3月)・鶏団子のスープ、牛すじ煮込み (2018年10月)',
    neighborhood: '五条のすぐ北の寺町。清水五条から徒歩5分',
    gf_detail: 'グルテンフリーではない: おばんざいと並んで餃子、春巻き、しゅうまい、唐揚げ、麻婆豆腐 (2018〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 食べログの分類は野菜料理だが、口コミに出る料理は牛すじ、ローストビーフ、羊の餃子、すずき、卵焼きなど (2018〜2025年)。',
    notes: '[おばんざいとアジアの小皿・五条上ルの寺町、手作りの空間] 薄暗い手作りの内装の小さなダイニングバー。黒板のおばんざいに、餃子、麻婆豆腐、春巻き、ローストビーフ、オーガニックワイン。分け合う小皿で2,000〜4,000円ほど。女性や一人客に人気。木〜日曜の夜のみ。',
  });
}

// ================================================================ Simpson & Sons
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26045526/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_simpson_and_sons', name: 'Simpson & Sons', category: 'OMNI',
    lat: 35.010308, lng: 135.769434, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bistro and cocktail bar; the dishes named are a Caesar salad with homemade bacon and a chicken and mushroom fricassée (August 2026) — sauces and croutons not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: homemade bacon, soft-boiled egg, chicken fricassée (August 2026).',
    hours_raw: 'Tabelog: Mon–Sat and holidays 17:00–24:00 (L.O. 23:30); closed Sunday. Reservations taken. Cover 「チャージ料：660円（税込）」 (¥660 incl. tax, Tabelog Japanese original). Tabelog lists cards and QR payments, but an August 2026 reviewer was told only cash was accepted right after opening — ask. 40 seats: 8 at the counter, 8 tables for 4; private hire for 20–50. Heated tobacco only in a designated area. Free Wi-Fi. 2nd floor, 3 min walk from Kyoto Shiyakusho-mae. Opened 17 August 2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Kyoto City Hall — 3 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'A new second-floor bistro and cocktail bar that a reviewer says inherits the legacy of the long-running Tavern Simpson (Tabelog; August–September 2026 reviews) · cocktails from ¥800; Caesar salad with homemade bacon ¥1,000; chicken and mushroom fricassée ¥1,900 (August 2026) · owner-made cocktails (September 2026)',
    website: null, gmaps: gm('Simpson & Sons 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Bistro & cocktail bar · near Kyoto City Hall, a new heir to an old tavern] Opened August 2026 upstairs near City Hall, said by a reviewer to carry on the 50-year Tavern Simpson: fruity cocktails from ¥800 mixed by the owner, Caesar salad and a chicken fricassée. ¥660 cover. Open to midnight; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-bartender (unnamed)'], origin: null,
      background: 'Opened 17 August 2026 (Tabelog). An August 2026 reviewer writes that it inherits the legacy of Tavern Simpson, a Kyoto tavern that closed after 50 years; September 2026 reviewers praise friendly staff and the owner\'s drinks. Criticism: in the opening weeks one dish took about 40 minutes and the bacon was tough (August 2026).',
      philosophy: null,
      specialty: 'Cocktails; bistro dishes.',
      anecdotes: [
        { text: 'September 2026: "The food was delicious, but the drinks made by the owner were the highlight—they were the best!"', source: R + 'B535422879/' },
        { text: 'August 2026: "Although it took some time for the dish to be served, the fricassée was delicious."', source: R + 'B533937829/' },
      ],
      japanese_sources_summary: '食べログ: Simpson & Sons、ダイニングバー・イタリアン・ビストロ、中京区下丸屋町401-3 2F、京都市役所前駅から徒歩3分、月〜土・祝日17:00〜24:00 (L.O.23:30)、日曜休み、予約可、原文で「チャージ料：660円（税込）」、カード・QR可、40席 (カウンター8・4名テーブル8)、貸切20〜50名、加熱式たばこのみの喫煙席、Wi-Fiあり、2026年8月17日オープン。口コミ (2026年8月〜9月、英語、3件): 50年続いて閉店したTavern Simpsonを受け継ぐ店との記載、カクテル800円〜、自家製ベーコンのシーザーサラダ1,000円、鶏ときのこのフリカッセ1,900円、オープン直後は現金のみと言われた (2026年8月)、料理の提供に時間がかかった、店主のカクテルが一番との声 (2026年9月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B533937829', 'B535422849', 'B535422879'])) },
    cultural_comfort: { level: 'japanese', note: '¥660 cover; payment methods unclear right after opening — ask.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下丸屋町401-3 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 17 August 2026) with reviews dated August and September 2026.' },
    pin_source: `Tabelog ${TB} (35.010362, 135.769434) sits 4.4m from kyoto_mizuta_shokudo, so moved about 6m south to (35.010308, 135.769434), at least 8.2m from every pin; GSI lot 京都府京都市中京区下丸屋町401番地 about 26m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533937829/'],
    price_note: 'Prices from an August 2026 review; ¥660 cover.', last_checked: TODAY, items: [
      it('', '', 'Cocktails', 'from ¥800', 'Drink', 'ask', 'ask', 'August 2026.', 'cocktail'),
      it('', '', 'Caesar salad with homemade bacon', '¥1,000', 'Salad', 'no', 'no', 'August 2026.', 'caesar_salad'),
      it('', '', 'Chicken and mushroom fricassée', '¥1,900', 'Main', 'no', 'no', 'August 2026.', 'chicken_fricassee'),
    ] }, {
    cuisine: '2階の新しいビストロ兼カクテルバー。口コミでは長く続いたTavern Simpsonを受け継ぐ店 (食べログ、2026年8月〜9月の口コミ)・カクテル800円〜、自家製ベーコンのシーザーサラダ1,000円、鶏ときのこのフリカッセ1,900円 (2026年8月)・店主のカクテル (2026年9月)',
    neighborhood: '京都市役所の近く。京都市役所前から徒歩3分',
    gf_detail: 'グルテンフリーではない: ビストロ兼カクテルバー。口コミに出る料理は自家製ベーコンのシーザーサラダと鶏ときのこのフリカッセ (2026年8月)。ソースやクルトンの説明はなし。',
    vegan_detail: 'ヴィーガン不可: 自家製ベーコン、半熟卵、鶏のフリカッセ (2026年8月)。',
    notes: '[ビストロ&カクテルバー・京都市役所近く、老舗酒場の後継] 2026年8月に市役所近くの2階にオープン。口コミでは50年続いたTavern Simpsonを受け継ぐ店。店主の作るフルーティーなカクテルは800円から、シーザーサラダや鶏のフリカッセも。チャージ660円。深夜0時まで、日曜休み。',
  });
}

// ================================================================ ツバクロ すっぽん食堂 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26018520/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_tsubakuro_suppon', name: 'ツバクロ すっぽん食堂 京都店 (Tsubakuro Suppon Shokudo)', category: 'OMNI',
    lat: 35.010228, lng: 135.770633, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: suppon kara-age, a bear-meat croquette, ramen to finish the hot pot, and ponzu (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a soft-shelled turtle (suppon) restaurant — hot pot, sashimi of liver and heart, live-blood cocktails (2023–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun and holidays 12:00–15:00 (L.O. 14:30) and 17:00–23:00 (L.O. 22:30); closed Wednesday. Lunch is a course by reservation only, booked by 17:00 the day before. Cover 「500円（税込み）」 (¥500 incl. tax, Tabelog Japanese original). 38 seats: counter, semi-private rooms, sunken tatami tables; private hire up to 50. Designated smoking area. Cards and PayPay. Children welcome. 4th floor of the キヤマチジャンクション on Kiyamachi north of Sanjo, with a view over the Kamo River (November 2023 review); 5 min walk from Keihan Sanjo. One of two ツバクロ すっぽん食堂 shops, with one in Osaka (suppon-tsubaqlo.com).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi just north of Sanjo — 5 min walk from Sanjo (Keihan)',
    cuisine: 'A casual suppon (soft-shelled turtle) restaurant where even solo diners can order a one-person hot pot (Tabelog; 2023–2026 reviews) · hot-pot course ¥7,500: starters, collagen ponzu, kara-age, hot pot, zosui (December 2025; May 2026) · whole-suppon course (March 2025) · suppon sashimi of liver, heart, egg and fat (May 2026) · live-blood tequila and live-blood sunrise (2023–2026) · suppon kara-age; fin salad; bear-meat croquette; firefly squid with nameko (2026) · zosui or curly ramen to finish',
    website: 'https://suppon-tsubaqlo.com/kyoto.html', gmaps: gm('ツバクロ すっぽん食堂 京都店'), menu_url: TB + 'dtlmenu/',
    notes: '[Suppon (soft-shelled turtle) · Kiyamachi above Sanjo, a river-view 4th floor] A relaxed place to try suppon without a kaiseki price: one-person hot pots, kara-age, liver-and-heart sashimi and a "live-blood" tequila shot, then zosui or ramen in the rich broth; the hot-pot course is about ¥7,500. ¥500 cover. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'One of two ツバクロ すっぽん食堂 shops (Kyoto and Osaka; suppon-tsubaqlo.com). Reviewers describe reasonable prices for suppon, counter seating that suits solo diners, staff who recommend sake to taste, and a mild, rich broth. Criticism: diners finish the zosui themselves, nobody saw one guest off (December 2025), and portions felt small on an all-you-can-drink course (September 2026).',
      philosophy: null,
      specialty: 'Suppon hot pot; suppon kara-age; live-blood cocktails.',
      anecdotes: [
        { text: 'May 2026: "This restaurant specializes in suppon (soft-shelled turtle) cuisine, offering a chance to enjoy this traditionally luxurious dish at a reasonable price."', source: R + 'B527638153/' },
        { text: 'September 2026: "I was thrilled to find that I could enjoy suppon (soft-shelled turtle) even when dining alone!"', source: R + 'B537070337/' },
      ],
      japanese_sources_summary: '食べログ: ツバクロ すっぽん食堂 京都店、日本料理・鍋・居酒屋、中京区木屋町通り三条上ル上大阪町516 キヤマチジャンクション4F、京阪三条駅から徒歩5分、月・火・木〜日・祝日12:00〜15:00 (L.O.14:30)・17:00〜23:00 (L.O.22:30)、水曜休み、ランチは前日17時までの予約制コース、原文で「500円（税込み）」、38席、貸切50名まで、分煙、カード・PayPay可、子供可。公式サイト: 京都店と大阪店の2店。口コミ (2023年11月〜2026年9月、英語): 一人用のすっぽん鍋、鍋コース7,500円 (前菜、コラーゲンポン酢、唐揚げ、鍋、雑炊)、まるごとすっぽんのコース、肝・心臓・卵・脂の刺身、生き血のテキーラ、唐揚げ、ヒレのサラダ、ツキノワグマのコロッケ、ホタルイカ、締めは雑炊かラーメン、鴨川の眺め、雑炊は自分で作る・見送りがないとの声 (2025年12月)、量が少なめとの声 (2026年9月)。',
      confidence: 'medium', sources: [TB, 'https://suppon-tsubaqlo.com/'].concat(rv(R, ['B22616016', 'B475044595', 'B475945792', 'B500516522', 'B514961936', 'B518480078', 'B519938461', 'B524161142', 'B525757650', 'B527638153', 'B536590221', 'B537070337'])) },
    cultural_comfort: { level: 'japanese', note: 'Solo-friendly counter; ¥500 cover; designated smoking area.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通り三条上ル上大阪町516 キヤマチジャンクション 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated May and September 2026.' },
    pin_source: `Tabelog ${TB} (35.010282, 135.770633) sits 4.0m from kyoto_s_vietnam_kiyamachi, so moved about 6m south to (35.010228, 135.770633), at least 9.3m from every pin; GSI lot 京都府京都市中京区上大阪町516番地 about 57m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519938461/', R + 'B527638153/'],
    price_note: 'Course price from December 2025 and May 2026 reviews; ¥500 cover.', last_checked: TODAY, items: [
      it('', '', 'Suppon hot-pot course (starters, collagen ponzu, kara-age, hot pot, zosui)', '¥7,500', 'Course', 'no', 'no', 'December 2025; May 2026.', 'suppon_course'),
      it('', '', 'One-person suppon hot pot', null, 'Hot pot', 'no', 'no', 'December 2025; March 2026.', 'suppon_nabe'),
      it('', '', 'Suppon kara-age', null, 'Fried', 'no', 'no', '2024–2026.', 'suppon_karaage'),
      it('', '', 'Live-blood tequila', null, 'Drink', 'ask', 'no', '2023–2026.', 'ikichi_tequila'),
    ] }, {
    cuisine: '一人でも一人用の鍋を頼める気軽なすっぽん料理の店 (食べログ、2023〜2026年の口コミ)・鍋コース7,500円: 前菜、コラーゲンポン酢、唐揚げ、鍋、雑炊 (2025年12月・2026年5月)・まるごとすっぽんのコース (2025年3月)・肝・心臓・卵・脂のすっぽん刺し (2026年5月)・生き血のテキーラと生き血のサンライズ (2023〜2026年)・すっぽんの唐揚げ、ヒレのサラダ、ツキノワグマのコロッケ、ホタルイカとなめこ (2026年)・締めは雑炊か縮れ麺のラーメン',
    neighborhood: '三条のすぐ北の木屋町。京阪三条から徒歩5分',
    gf_detail: 'グルテンフリーではない: すっぽんの唐揚げ、熊肉のコロッケ、鍋の締めのラーメン、ポン酢 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: すっぽん料理の店。鍋、肝や心臓の刺身、生き血のカクテル (2023〜2026年の口コミ)。',
    notes: '[すっぽん料理・三条上ルの木屋町、鴨川を望む4階] 懐石の値段でなくすっぽんを試せる店。一人用の鍋、唐揚げ、肝や心臓の刺身、生き血のテキーラ、締めは濃いだしの雑炊かラーメン。鍋コースは7,500円ほど。チャージ500円。水曜休み。',
  });
}

save();
