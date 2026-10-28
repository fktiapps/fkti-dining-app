// Osaka sweep (2-mile circle around Dotonbori), batch 129 — ramen phase (all OMNI).
//   + ごま中華 喜界星 (Kikaijima-sesame tantanmen, mapo tofu, dim sum, Three-Star lunch sets; Kitahama)
//   + 中国四川 旬菜 酒肆 楽山 (basement Sichuan: lunch-line mapo tofu and dandan noodles, Shaoxing wine; Yodoyabashi)
//   + 悦来閣 (local Chinese near Tennoji: ¥900 daily set meals, miso ramen, gyoza; open to 23:00)
//   + 肥後橋ラーめん亭 (light tonkotsu garlic ramen in the Satsumakko style, lunch sets with kimchi and rice; open to 2:00)
//   - skipped 陳麻家 肥後橋店 27009396: chain branch; 陳麻家 長堀橋店 is already in data.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, skip, save } = openCitySweep('osaka', TODAY, 129);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27009396', 'chain branch: 陳麻家 長堀橋店 (osaka_chinmaya_nagahoribashi) already in data');

// ================================================================ ごま中華 喜界星
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27135237/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.kikaiboshi.jp/';
  const WD = day(['11:30', '14:30'], ['18:00', '22:00']); const WE = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_goma_chuka_kikai_boshi_kitahama', name: 'ごま中華 喜界星 (Goma Chuka Kikai Boshi)', category: 'OMNI',
    lat: 34.690704, lng: 135.509065, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; doubanjiang and soy in the mapo tofu; dim sum wrappers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat sauce on the tantanmen; mapo tofu with meat; steamed chicken.',
    hours_raw: 'Tue–Fri and days before public holidays 11:30–14:30 (last order 14:00) and 18:00–22:00; Sat 11:30–15:00 and 18:00–22:00; Sun 11:30–15:00 (lunch only); public holidays 11:30–15:00 and 18:00–22:00; closed Mon (Tabelog). Lines at noon; weekend reservations recommended (October 2026). Order by QR code at the table (October 2026). Cards accepted (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: day(['11:30', '15:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahama 1-3-2, Kitahama Ark Bldg 1F — by exit 30 of Kitahama Stn, next to FamilyMart',
    cuisine: 'Sesame Chinese · Kikaijima sesame tantanmen in two styles: "Blend" (signature) and "Aroma 100%" (meat sauce and chili oil served apart, fresh-ground sesame on top) · Three-Star lunch set (weekends and holidays): half tantanmen, mapo tofu, steamed chicken salad, almond tofu · tantanmen with two dim sum · weekly lunch special, e.g. Singapore chicken rice ¥1,400 on jasmine rice with green chili paste, soup, pickles, salad and dessert · mapo tofu · cold steamed chicken with green onion sauce · dim sum · homemade chili oil · courses · craft lemon squash',
    website: OWN, gmaps: gm('ごま中華 喜界星'), menu_url: null,
    notes: "[Chinese · Kikaijima-sesame tantanmen and mapo tofu in Kitahama] A popular Chinese restaurant at Kitahama exit 30 built around sesame from Kikaijima. The signature tantanmen is the rich Blend; the Aroma 100% serves the meat sauce and chili oil apart and grinds fresh sesame on top, so the sesame leads. On weekends, the Three-Star lunch set gives you a half tantanmen with mapo tofu, steamed chicken salad and almond tofu; weekdays bring a weekly special such as Singapore chicken rice (¥1,400). Dim sum, homemade chili oil and evening courses round it out, with a warm, attentive welcome. Order by QR code. There's a line before noon and it's busy on weekends, so book. Sunday is lunch only; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Chinese restaurant built around Kikaijima sesame (Tabelog; 2023–2026 reviews).', philosophy: 'Tantanmen made with rare sesame from Kikaijima (October 2026 review).', specialty: 'Sesame tantanmen; mapo tofu; dim sum.',
      anecdotes: [
        { text: '"For the Aroma 100%, the meat sauce and chili oil were served separately to fully enjoy the flavor of the sesame, and I added freshly ground sesame as well." — October 2026, Kikaijima tantanmen.', source: R + 'B537352213/' },
        { text: '"For the half noodle option, I chose the signature blended tantanmen… The sesame flavor was incredibly rich and delightful. The mapo tofu, steamed chicken salad, and almond tofu were also quite tasty." — September 2026, Three-Star lunch set.', source: R + 'B536650844/' },
      ],
      japanese_sources_summary: '食べログ: ごま中華 喜界星、大阪市中央区北浜1-3-2 北浜アークビル 1F、堺筋線北浜駅から徒歩2分、京阪北浜駅から徒歩1分、30番出口を出てすぐのファミリーマートの隣、火〜金・祝前日 11:30〜14:30 (L.O. 14:00)・18:00〜22:00、土 11:30〜15:00・18:00〜22:00、日 11:30〜15:00 (昼のみ)、祝 11:30〜15:00・18:00〜22:00、月休み、カード可、公式サイトあり。口コミ(2023年〜2026年10月): Kikaijima の希少なごまの担々麺、Blend と Aroma 100% (肉味噌とラー油は別添え、すりたてのごま)、土日祝限定の Three-Star ランチセット (半担々麺、麻婆豆腐、蒸し鶏のサラダ、杏仁豆腐)、担々麺と点心2種、週替わりランチのシンガポールチキンライス1,400円 (ジャスミンライス、おかわりは麦ごはん、青唐辛子のペーストは激辛、スープ、漬物、サラダ、デザート)、QRコードで注文、正午前から行列、週末は予約がおすすめ、蒸し鶏のねぎソース、点心、自家製ラー油、コース、クラフトレモンスカッシュ、温かい笑顔の店主、気配りのある接客。',
      confidence: 'medium', sources: [TB, OWN, R + 'B462593064/', R + 'B536650844/', R + 'B536941844/', R + 'B536975773/', R + 'B537352213/', R + 'B537623517/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['sesame'], aroma_oil: ['chili oil'], richness: 'kotteri',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Not described in reviews.' },
      regional_style: [], sub_genre: ['tantanmen'],
      signature_bowl: 'Kikaijima sesame tantanmen, Blend (2026).',
      chashu: null,
      notable_toppings: ['meat sauce', 'fresh-ground sesame', 'homemade chili oil'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Meat sauce.' },
      pantheon: 'Kitahama\'s Kikaijima-sesame tantanmen, with a sesame-first Aroma 100% version.',
      profile: { richness: 5, oiliness: 3, clarity: 1, tare_strength: 4, noodle_firmness: 3, aroma_punch: 5 },
      profile_basis: {
        richness: [R + 'B462593064/', '"The rich sesame-flavored tantanmen" — top of scale.'],
        oiliness: [R + 'B537352213/', 'Chili oil served separately in the Aroma 100%; no review calls it oily — mid-scale.'],
        clarity: [R + 'B536650844/', 'Sesame tantanmen, "the sesame flavor was incredibly rich" — bottom of scale.'],
        tare_strength: [R + 'B536650844/', '"The sesame flavor was incredibly rich and delightful" — placed high.'],
        noodle_firmness: [R + 'B537352213/', 'Noodles not described — mid-scale.'],
        aroma_punch: [R + 'B537352213/', '"To fully enjoy the flavor of the sesame… I added freshly ground sesame" — top of scale.'],
      },
      confidence: 'medium', sources: [R + 'B462593064/', R + 'B536650844/', R + 'B537352213/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering at the table (October 2026); attentive service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区北浜1-3-2 北浜アークビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区北浜一丁目3番2号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536650844/', R + 'B536941844/', R + 'B537352213/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kikaijima sesame tantanmen, Blend', '', 'Noodles', 'no', 'no', 'October 2026.', 'blend'),
      it('', '', 'Kikaijima sesame tantanmen, Aroma 100%', '', 'Noodles', 'no', 'no', 'October 2026.', 'aroma'),
      it('', '', 'Three-Star lunch set (weekends and holidays)', '', 'Lunch', 'no', 'no', 'September–October 2026.', 'three_star'),
      it('', '', 'Singapore chicken rice (weekly lunch special)', '¥1,400', 'Lunch', 'ask', 'no', 'October 2026.', 'chicken_rice'),
      it('', '', 'Mapo tofu', '', 'Dishes', 'no', 'no', 'October 2026.', 'mapo'),
      it('', '', 'Almond tofu', '', 'Dessert', 'ask', 'ask', 'October 2026.', 'annin'),
    ] }, {
    cuisine: 'ごまの中華・Kikaijima のごまの担々麺は2種: Blend (看板) と Aroma 100% (肉味噌とラー油は別添え、すりたてのごまをかける)・土日祝の Three-Star ランチセット: 半担々麺、麻婆豆腐、蒸し鶏のサラダ、杏仁豆腐・担々麺と点心2種・週替わりランチ、たとえばジャスミンライスのシンガポールチキンライス1,400円 (青唐辛子のペースト、スープ、漬物、サラダ、デザート付き)・麻婆豆腐・蒸し鶏のねぎソース・点心・自家製ラー油・コース・クラフトレモンスカッシュ',
    neighborhood: '中央区北浜1-3-2 北浜アークビル 1F。北浜駅30番出口すぐ、ファミリーマートの隣',
    gf_detail: 'グルテンフリーではありません。小麦の麺、麻婆豆腐の豆板醤と醤油、点心の皮。',
    vegan_detail: 'ヴィーガンではありません。担々麺の肉味噌、肉入りの麻婆豆腐、蒸し鶏。',
    notes: '[中華・北浜、Kikaijima のごまの担々麺と麻婆豆腐] 北浜駅30番出口すぐの人気の中華で、軸はKikaijima のごま。看板の担々麺は濃厚な Blend、Aroma 100% は肉味噌とラー油を別に添え、すりたてのごまをかけてごまを主役にする。週末の Three-Star ランチセットは半担々麺に麻婆豆腐、蒸し鶏のサラダ、杏仁豆腐、平日は週替わりのシンガポールチキンライス(1,400円)など。点心、自家製ラー油、夜のコースも、温かく気配りのある接客。注文はQRコードで。正午前から行列、週末は混むので予約を。日曜は昼のみ、月曜休み。',
  });
}

// ================================================================ 中国四川 旬菜 酒肆 楽山
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27132448/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['18:00', '21:30']);
  put({
    id: 'osaka_sichuan_rakusan_yodoyabashi', name: '中国四川 旬菜 酒肆 楽山 (China Sichuan Shunsai Shushi Rakusan)', category: 'OMNI',
    lat: 34.691702, lng: 135.501879, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; doubanjiang, fermented black beans and soy throughout; dim sum and spring rolls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: minced meat in the mapo tofu and dandan noodles; pork and shrimp dishes.',
    hours_raw: 'Mon–Fri 11:30–14:00 (last order 13:45) and 18:00–21:30 (last order 21:00); closed Sat, Sun and public holidays (Tabelog). Dinner closed 2 November 2026 for interior work (Tabelog). Lunch line from 11:00, moves fast (2026). Cards and PayPay accepted; no e-money (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahama 3-5-19, Yodoyabashi White Bldg B1F — by Yodoyabashi Stn exit 8',
    cuisine: 'Sichuan · lunch: mapo tofu (homemade chili oil, Sichuan pepper, minced meat, fermented black beans) or dandan noodles, the two lunch staples · dinner à la carte: yunbai rou (sliced pork with garlic sauce), twice-cooked pork, spicy stir-fried shrimp and cashews, large shrimp in chili sauce, chicken breast and zucchini with chili, pork fillet with black beans, black-vinegar sweet and sour pork, Hong Kong shumai, spring rolls, century egg · Shaoxing wine, including a tasting set; Heartland beer · counter and tables for 2–4',
    website: null, gmaps: gm('中国四川 旬菜 酒肆 楽山'), menu_url: null,
    notes: "[Sichuan · a basement Sichuan with a lunch line for mapo tofu and dandan noodles, Yodoyabashi] A busy Sichuan restaurant down in the basement of an older building at Yodoyabashi exit 8. Lunch is a choice that splits the room, mapo tofu or dandan noodles: the mapo tofu balances numbing Sichuan pepper and heat with homemade chili oil, minced meat and fermented black beans, and one diner ranks the dandan noodles among the three best ever had (the line from 11:00 moves fast). Dinner is à la carte: yunbai rou, twice-cooked pork, chili shrimp, black-vinegar sweet and sour pork and dim sum, with a Shaoxing wine tasting set. Book for dinner. Weekdays only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Sichuan restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Mapo tofu; dandan noodles; Sichuan dishes with Shaoxing wine.',
      anecdotes: [
        { text: '"The vibrant aroma of the homemade chili oil, the refreshing numbing sensation of the Sichuan peppercorns, and the rich depth from the minced meat and fermented black beans filled my mouth." — October 2026, mapo tofu.', source: R + 'B537434463/' },
        { text: '"Inside the restaurant, it seemed like there were slightly more people ordering Mapo Tofu—maybe a 60:40 ratio." — July 2026, dandan noodles at lunch.', source: R + 'B531830168/' },
      ],
      japanese_sources_summary: '食べログ: 中国四川 旬菜 酒肆 楽山、大阪市中央区北浜3-5-19 淀屋橋ホワイトビルB1F、淀屋橋駅8番出口すぐ、月〜金 11:30〜14:00 (L.O. 13:45)・18:00〜21:30 (L.O. 21:00)、土日祝休み、11月2日夜は改装で休み、カード・PayPay 可、電子マネー不可、21席、20名まで貸切可。口コミ(2026年1〜10月): 昼は麻婆豆腐か担々麺 (6対4で麻婆豆腐が少し多い)、11時から行列、回転が速い、自家製ラー油と花椒のしびれ、ひき肉と豆豉の麻婆豆腐、Yunbai Rou、回鍋肉、エビとカシューナッツの辛い炒め、大エビのチリソース、鶏むねとズッキーニの唐辛子炒め、豚ヒレの豆豉炒め、黒酢の酢豚、Hong Kong Shumai、春巻き、ピータン、紹興酒の飲み比べ、Heartland ビール、古いビルの薄暗い地下、カウンターとテーブル、予約で満席の夜、一人飲みにも。',
      confidence: 'medium', sources: [TB, R + 'B499286257/', R + 'B531830168/', R + 'B532640542/', R + 'B536983700/', R + 'B537434463/', R + 'B537888704/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick lunch turnover; counter for solo diners (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区北浜3-5-19 淀屋橋ホワイトビルB1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区北浜三丁目5番19号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499286257/', R + 'B531830168/', R + 'B537434463/'],
    price_note: 'No prices in the reviews; lunch JPY 1,000–1,999, dinner JPY 4,000–5,999 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Mapo tofu', '', 'Lunch', 'no', 'no', 'October 2026.', 'mapo'),
      it('', '', 'Dandan noodles', '', 'Lunch', 'no', 'no', 'October 2026.', 'dandan'),
      it('', '', 'Yunbai rou (sliced pork with garlic sauce)', '', 'Dinner', 'no', 'no', 'October 2026.', 'yunbai'),
      it('', '', 'Twice-cooked pork', '', 'Dinner', 'no', 'no', 'October 2026.', 'huiguo'),
      it('', '', 'Spicy stir-fried shrimp and cashews', '', 'Dinner', 'no', 'no', 'October 2026.', 'shrimp_cashew'),
      it('', '', 'Black-vinegar sweet and sour pork', '', 'Dinner', 'no', 'no', 'June 2026.', 'subuta'),
      it('', '', 'Shaoxing wine tasting set', '', 'Drinks', 'no', 'ask', 'October 2026.', 'shaoxing'),
    ] }, {
    cuisine: '四川料理・昼: 麻婆豆腐 (自家製ラー油、花椒、ひき肉、豆豉) か担々麺の2択が人気・夜はアラカルト: Yunbai Rou、回鍋肉、エビとカシューナッツの辛い炒め、大エビのチリソース、鶏むねとズッキーニの唐辛子炒め、豚ヒレの豆豉炒め、黒酢の酢豚、Hong Kong Shumai、春巻き、ピータン・紹興酒、飲み比べも、Heartland ビール・カウンターと2〜4人のテーブル',
    neighborhood: '中央区北浜3-5-19 淀屋橋ホワイトビルB1F。淀屋橋駅8番出口すぐ',
    gf_detail: 'グルテンフリーではありません。小麦の麺、豆板醤・豆豉・醤油、点心と春巻き。',
    vegan_detail: 'ヴィーガンではありません。麻婆豆腐と担々麺のひき肉、豚とエビの料理。',
    notes: '[四川料理・淀屋橋、麻婆豆腐と担々麺に昼の行列ができる地下の四川] 淀屋橋8番出口すぐ、古いビルの地下にあるにぎわう四川料理店。昼は麻婆豆腐か担々麺で客が分かれる: 麻婆豆腐は花椒のしびれと辛さの釣り合いがよく、自家製ラー油、ひき肉、豆豉の深み。担々麺を今までで三本の指に入れる声も (11時からの行列は回転が速い)。夜はアラカルトで、Yunbai Rou、回鍋肉、エビのチリ、黒酢の酢豚、点心に紹興酒の飲み比べ。夜は予約を。平日のみ営業。',
  });
}

// ================================================================ 悦来閣
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27053722/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_etsurai_kaku_tennoji', name: '悦来閣 (Etsurai Kaku)', category: 'OMNI',
    lat: 34.648709, lng: 135.514403, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; oyster and soy sauces; gyoza; fried chicken.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, shrimp and chicken dishes; egg soup.',
    hours_raw: 'Mon–Sat 11:00–14:00 and 17:00–23:00; closed Sun; hours may change (Tabelog). No smoking 11:00–14:00; designated smoking area otherwise (Tabelog). Cash only (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Hidenincho 4-24 (Tennoji-ku), north of the Hanwa shopping street — 5 min from JR Tennoji Stn',
    cuisine: 'Local Chinese · lunch: eight daily set meals ¥900, e.g. pork, glass noodle and vegetable stir-fry with egg soup, chilled tofu and kimchi; shrimp and eggplant in thick sauce · miso ramen, hot and packed with vegetables, sesame oil · gyoza, mild with little garlic · fried rice · stir-fried pork with green peppers ¥1,280 · yurinchi ¥1,000 · large vegetable porridge ¥900 · hot and sour soup with tomato, wood ear and tofu · draft beer ¥500 · 6 counter seats and 5 tables',
    website: null, gmaps: gm('悦来閣'), menu_url: null,
    notes: "[Chinese · local Chinese with ¥900 lunch sets, Ura-Tennoji] A roomy neighborhood Chinese restaurant just past the Hanwa shopping street, five minutes from JR Tennoji, open for lunch and again until 23:00. Lunch is the bargain: eight daily set meals at ¥900, such as a pork and glass-noodle stir-fry in oyster sauce with egg soup, chilled tofu and kimchi. In the evening it fills with people after work for green-pepper pork, yurinchi, gyoza with a gentle, low-garlic filling, fluffy fried rice and a big bowl of vegetable porridge. The miso ramen comes piping hot and heaped with vegetables. One diner found the lunch rice a little dry. Draft beer ¥500. Cash only; smoking area outside lunch hours.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Neighborhood Chinese restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Daily set meals; local Chinese dishes.',
      anecdotes: [
        { text: '"The Pork, Harusame, and Vegetable Stir-Fry was made with pork and harusame (glass noodles) stir-fried in oyster sauce. It had a rich flavor and was absolutely delicious!" — June 2026, set meal ¥900.', source: R + 'B530612201/' },
        { text: '"The Miso Ramen is served piping hot and packed with vegetables! It has a delightful hint of sesame oil…" — May 2026.', source: R + 'B528143709/' },
      ],
      japanese_sources_summary: '食べログ: 悦来閣、大阪市天王寺区悲田院町4-24、天王寺から182m、月〜土 11:00〜14:00・17:00〜23:00、日休み、カード・電子マネー・QR不可、34席 (カウンター6、テーブル6人×4・4人×1)、11:00〜14:00は禁煙、それ以外は分煙。口コミ(2026年5〜8月): 野菜たっぷりで熱々の味噌ラーメンとごま油の香り、にんにく控えめの優しい餃子、広い席、手頃な値段、ピーマンと豚の炒め1,280円、Yurinchi1,000円、野菜がゆ大900円、生ビール500円、豚肉と春雨と野菜のオイスターソース炒め定食900円 (卵スープ、冷奴、キムチ)、日替わり定食8種900円、エビとナスのあんかけ、ご飯が少し乾いていたという声、阪和商店街の先の裏天王寺、炒飯、小サイズでも多い酸辣湯 (トマト、きくらげ、豆腐)、仕事帰りの客、親切な接客。',
      confidence: 'medium', sources: [TB, R + 'B528143709/', R + 'B528212214/', R + 'B530612201/', R + 'B530824290/', R + 'B533394760/', R + 'B534043500/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Relaxed neighborhood restaurant; good service (June 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区悲田院町4-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区悲田院町4番24号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528212214/', R + 'B530612201/', R + 'B533394760/'],
    price_note: 'Prices from May–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily set meal (eight choices, lunch)', '¥900', 'Lunch', 'no', 'no', 'June–August 2026.', 'teishoku'),
      it('', '', 'Miso ramen', '', 'Noodles', 'no', 'no', 'May 2026.', 'miso_ramen'),
      it('', '', 'Stir-fried pork with green peppers', '¥1,280', 'Dishes', 'no', 'no', 'May 2026.', 'chinjao'),
      it('', '', 'Yurinchi', '¥1,000', 'Dishes', 'no', 'no', 'May 2026.', 'yurinchi'),
      it('', '', 'Vegetable porridge, large', '¥900', 'Rice', 'ask', 'ask', 'May 2026.', 'okayu'),
      it('', '', 'Gyoza', '', 'Dishes', 'no', 'no', 'May–August 2026.', 'gyoza'),
      it('', '', 'Fried rice', '', 'Rice', 'no', 'no', 'August 2026.', 'chahan'),
      it('', '', 'Draft beer', '¥500', 'Drinks', 'no', 'ask', 'May 2026.', 'beer'),
    ] }, {
    cuisine: '町の中華・昼: 日替わり定食8種900円、たとえば豚肉と春雨と野菜の炒め (卵スープ、冷奴、キムチ付き)、エビとナスのあんかけ・野菜たっぷりで熱々、ごま油の香る味噌ラーメン・にんにく控えめの優しい餃子・炒飯・ピーマンと豚の炒め1,280円・Yurinchi1,000円・野菜がゆ大900円・トマト、きくらげ、豆腐の酸辣湯・生ビール500円・カウンター6席とテーブル5卓',
    neighborhood: '天王寺区悲田院町4-24、阪和商店街の北。JR天王寺駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、オイスターソースと醤油、餃子、揚げた鶏。',
    vegan_detail: 'ヴィーガンではありません。豚、エビ、鶏の料理、卵スープ。',
    notes: '[中華・裏天王寺、900円の昼定食の町の中華] 阪和商店街を抜けてすぐ、JR天王寺から5分の広々とした町の中華で、昼と、夜は23時まで営業。お得なのは昼: 日替わり定食8種がどれも900円で、たとえばオイスターソースの豚肉と春雨の炒めに卵スープ、冷奴、キムチ。夜は仕事帰りの客でにぎわい、ピーマンと豚の炒め、Yurinchi、にんにく控えめの優しい餃子、ふわっとした炒飯、大きな野菜がゆ。味噌ラーメンは熱々で野菜が山盛り。昼のご飯が少し乾いていたという声も。生ビール500円。現金のみ、昼以外は分煙。',
  });
}

// ================================================================ 肥後橋ラーめん亭
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27000262/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '02:00']);
  put({
    id: 'osaka_higobashi_ramen_tei', name: '肥後橋ラーめん亭 (Higobashi Ramen Tei)', category: 'OMNI',
    lat: 34.691811, lng: 135.495694, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat egg noodles; tare; spicy miso.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone soup; pork-belly chashu; egg noodles.',
    hours_raw: 'Mon–Sat 11:00–02:00; closed Sun; hours may change (Tabelog). QR payments accepted; no cards or e-money; no service charge (Tabelog). Upstairs on 2F, across from the APA Hotel Higobashi (August 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Edobori 1-14-1, Heiwa Sogo Higobashi Bldg 2F — 2 min from Higobashi Stn',
    cuisine: 'Light tonkotsu garlic ramen · ramen: light, slightly thick tonkotsu, garlic to taste (none, a little or more), medium curly egg noodles, tender pork-belly chashu, bean sprouts, green onion · chashu ramen · spicy miso ramen · lunch ramen set with kimchi and rice · 8 counter seats and 16 table seats',
    website: null, gmaps: gm('肥後橋ラーめん亭'), menu_url: null,
    notes: "[Ramen · light tonkotsu garlic ramen until 2 am, Higobashi] A long-running second-floor ramen shop across from the APA Hotel in Higobashi, open from 11:00 to 2:00, busy with office workers at lunch and a late finish after drinks. The bowl follows the style of Satsumakko: a light, slightly thick tonkotsu, garlic to taste, medium curly egg noodles, crunchy sprouts and tender, juicy pork-belly chashu. It's gentle rather than heavy, which one diner found a little too light; a dab of garlic fixes that. There's also a spicy miso ramen, and the lunch set adds kimchi and rice. Service can be slow when the kitchen is short-handed, but the welcome is warm. QR payment accepted. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Long-established in Higobashi (August 2026 review); follows the style of the Satsumakko garlic ramen shops (2025–2026 reviews).', background: 'Tonkotsu ramen shop (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Light tonkotsu garlic ramen.',
      anecdotes: [
        { text: '"The broth is a light tonkotsu with a slight thickness, which pairs perfectly with the garlic flavor. You can choose to have it without garlic, but I personally recommend a little bit of it!" — August 2026, chashu ramen.', source: R + 'B499699733/' },
        { text: '"The tonkotsu-based broth is neither too light nor too heavy… The chashu is juicy and tender, leaving a strong impression." — July 2026.', source: R + 'B532307257/' },
      ],
      japanese_sources_summary: '食べログ: 肥後橋ラーめん亭、大阪市西区江戸堀1-14-1 平和総合肥後橋ビル 2F、四つ橋線肥後橋駅から徒歩2分、月〜土 11:00〜翌2:00、日休み、カード・電子マネー不可、QR可、サービス料なし、24席 (カウンター8、テーブル16)。口コミ(2025年1月〜2026年9月): アパホテル肥後橋の向かい、階段で2階、昼は近くの会社員でにぎわう、Satsumakko の流れをくむにんにくラーメン、ややとろみのあるあっさり豚骨、にんにくは無し・少なめ・多めを選べる、中太の縮れた卵麺、柔らかくジューシーな豚バラのチャーシュー、もやし、ねぎ、昼はキムチとご飯付き、飲んだ後の締めに、辛味噌ラーメン、厨房の人が少なく時間がかかった日も、接客は親切、あっさりすぎたという声。',
      confidence: 'medium', sources: [TB, R + 'B499699733/', R + 'B531343435/', R + 'B531980382/', R + 'B532307257/', R + 'B534123605/', R + 'B535587480/'] },
    ramen: {
      broth_base: ['tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: false, notes: 'Medium curly egg noodles, smooth and chewy (2025–2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Ramen with garlic to taste; chashu ramen (2026).',
      chashu: 'Tender, juicy grilled pork-belly chashu (2025–2026).',
      notable_toppings: ['garlic', 'bean sprouts', 'green onion', 'kimchi and rice (lunch)'],
      gf: { status: 'no', note: 'Wheat egg noodles.' },
      vegan: { status: 'no', note: 'Pork-bone soup.' },
      pantheon: 'Higobashi\'s late-night light tonkotsu garlic ramen in the Satsumakko style.',
      profile: { richness: 2, oiliness: 2, clarity: 2, tare_strength: 2, noodle_firmness: 3, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B499699733/', '"A light tonkotsu with a slight thickness" — placed low.'],
        oiliness: [R + 'B531343435/', '"I could enjoy it without feeling heavy even after drinking" — placed low.'],
        clarity: [R + 'B499699733/', 'A light tonkotsu "with a slight thickness" — placed low.'],
        tare_strength: [R + 'B535587480/', '"It felt a bit too light and left me wanting a little more" (one diner) — placed low.'],
        noodle_firmness: [R + 'B499699733/', '"The noodles are medium-thin and curly"; "smooth and chewy" — mid-scale.'],
        aroma_punch: [R + 'B531980382/', '"A bit more garlic would add a nice punch" — mid-scale, garlic to taste.'],
      },
      confidence: 'medium', sources: [R + 'B499699733/', R + 'B531343435/', R + 'B535587480/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly, welcoming service (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区江戸堀1-14-1 平和総合肥後橋ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江戸堀一丁目14番1号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499699733/', R + 'B532307257/', R + 'B535587480/'],
    price_note: 'No prices in the reviews; JPY 1,000–1,999 average (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Ramen (garlic to taste)', '', 'Ramen', 'no', 'no', 'July 2026.', 'ramen'),
      it('', '', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'August 2026.', 'chashu'),
      it('', '', 'Spicy miso ramen', '', 'Ramen', 'no', 'no', 'July 2026.', 'kara_miso'),
      it('', '', 'Lunch ramen set with kimchi and rice', '', 'Sets', 'no', 'no', 'September 2026.', 'lunch_set'),
    ] }, {
    cuisine: 'あっさり豚骨のにんにくラーメン・ラーメン: ややとろみのあるあっさり豚骨、にんにくは無し・少なめ・多めを選べる、中太の縮れた卵麺、柔らかい豚バラのチャーシュー、もやし、ねぎ・チャーシューラーメン・辛味噌ラーメン・昼はキムチとご飯付きのセット・カウンター8席とテーブル16席',
    neighborhood: '西区江戸堀1-14-1 平和総合肥後橋ビル 2F。肥後橋駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。小麦の卵麺、たれ、辛味噌。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープ、豚バラのチャーシュー、卵麺。',
    notes: '[ラーメン・肥後橋、深夜2時まで開くあっさり豚骨のにんにくラーメン] アパホテル肥後橋の向かい、ビル2階で長く続くラーメン店で、11時から翌2時まで、昼は会社員でにぎわい、飲んだ後の締めにも人気。一杯は Satsumakko の流れをくむ、ややとろみのあるあっさり豚骨に好みの量のにんにく、中太の縮れた卵麺、シャキッとしたもやし、柔らかくジューシーな豚バラのチャーシュー。重くなく優しい味で、あっさりすぎたという声もあるが、にんにくを少し足せば締まる。辛味噌ラーメンもあり、昼のセットはキムチとご飯付き。厨房の人が少ないと時間がかかる日もあるが、接客は温かい。QR決済可。日曜休み。',
  });
}

save();
