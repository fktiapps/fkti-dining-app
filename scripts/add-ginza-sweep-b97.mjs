// Ginza Station half-mile sweep (805 m), batch 97 — all-genre phase (all OMNI).
//   + ROGOVSKI 銀座 (Japan's first Russian restaurant, est. 1951; states it cannot handle wheat allergies)
//   + 明月庵 ぎんざ 田中屋 松屋店 (Edo-style soba since 1956, Matsuya 8F)
//   + 越後屋八十吉 (charcoal-grilled himono and Tsukiji fish, Higashi-Ginza)
//   + 嘉門 (Imperial Hotel Tokyo 17F teppanyaki)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ ROGOVSKI
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13186971/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:00', '16:00'], ['17:00', '22:00']); const we = day(['11:00', '22:00']);
  put({
    id: 'tokyo_rogovski_ginza', name: 'ロシア料理 ROGOVSKI 銀座 (Russian Restaurant Rogovski)', category: 'OMNI',
    lat: 35.670629, lng: 139.764176,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the restaurant states it cannot accommodate wheat allergies (Tabelog reservation notes). The menu centres pirozhki, borscht, beef stroganoff and pot-baked dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the restaurant states it cannot accommodate dairy, egg, pork, mushroom or green-onion allergies either; dishes include pickled herring, borscht, stroganoff and caviar. A vegetable pirozhki is offered within courses.',
    hours_raw: 'Mon–Fri 11:00–16:00 (L.O. 15:00) and 17:00–22:00 (L.O. 21:00); Sat, Sun and holidays 11:00–22:00 (L.O. 21:00); open year-round except one day in Feb and Aug and New Year (Tabelog). 5% service charge except lunch courses. December–February: course reservations only.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'EXIT MELSA 7F, Ginza 5-chōme crossing (Chūō-dōri × Miyuki-dōri) — 1 min from Ginza Stn exit A2',
    cuisine: 'Japan’s first Russian restaurant (1951) · Russian, Ukrainian, Georgian and Uzbek dishes · pirozhki, borscht, beef stroganoff, mushroom tsubo-yaki · Katyusha lunch course · Georgian and Eastern European wines', cuisine_type: 'other',
    website: 'http://www.rogovski.co.jp', gmaps: gm('ROGOVSKI 銀座 イグジットメルサ'), menu_url: null,
    notes: "[Russian · Japan's first Russian restaurant, now 75] Founded in 1951 and billed as Japan's first Russian restaurant, Rogovski celebrates its 75th year on the seventh floor of EXIT MELSA at Ginza 5-chōme crossing (76 seats; Tabelog dates this listing from 2015). It serves court-style Russian dishes alongside Ukrainian, Georgian and Uzbek specialities, with wines from Georgia, Moldova, Romania and Bulgaria. The Katyusha lunch course opens with six zakuski (pickled herring, beet vinaigrette salad, marinated wild mushrooms), then freshly fried pirozhki (meat or vegetable), borscht with red wine, and a main such as beef stroganoff or mushroom-and-chicken tsubo-yaki, with Russian tea. Portions are big. Important for allergies: it says it cannot accommodate dairy, egg, wheat, pork, mushroom or green-onion allergies.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 1951 (Tabelog listing); listing opening date 18 September 2015', background: 'Billed as Japan’s first Russian restaurant (Tabelog listing).', philosophy: null, specialty: 'Pirozhki; borscht; stroganoff.',
      anecdotes: [
        { text: '"We had reserved the \'Most Popular Lunch: Katyusha Course!\'… An extravagant assortment of 6 types of appetizers and salads — Selyodka, pickled herring — Salat Vinaigrette, beet and potato salad — Wild mushroom lemon marinade." — October 2026, third visit.', source: R + 'B456968893/' },
        { text: '"I chose the vegetable pirozhki. The borscht was also tasty, but the portion was huge! The mushroom and chicken tsubo-yaki was served hot." — October 2026, Ginza Course.', source: R + 'B537286546/' },
      ],
      japanese_sources_summary: '食べログ: ロシア料理 ROGOVSKI 銀座、銀座5-7-10 イグジットメルサ7F、銀座駅A2出口徒歩1分、76席(全テーブル)、平日11:00〜16:00・17:00〜22:00、土日祝11:00〜22:00、ほぼ年中無休(2月・8月に1日と年末年始)、サービス料5%(ランチコース除く)、12〜2月はコース予約のみ、混雑時2時間制、2015年9月18日開店、公式サイト rogovski.co.jp。予約時の注意: 乳製品・ねぎ・小麦・きのこ・卵・豚肉のアレルギーには対応できない。店の紹介: 創業1951年、今年75周年の日本初のロシア料理店、宮廷料理やウクライナ・ジョージア・ウズベキスタンの郷土料理、ジョージア・ロシア・モルドバ・ルーマニア・ブルガリアのワイン。2026年10月の口コミ: カチューシャコース(前菜6種: ニシンの酢漬け、ビーツのヴィネグレット、きのこのマリネ…、ピロシキ、メイン、デザート、ロシアンティー)、ボルシチ、銀座コース(キャビア、野菜のピロシキ、きのこと鶏の壺焼き、ストリップロイン)、ビーフストロガノフ、量が多い。',
      confidence: 'high', sources: [TB, R + 'B456968893/', R + 'B537286546/', R + 'B537469771/', R + 'B537034161/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses only in Dec–Feb; 2-hour limit when busy.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'Reservation notes: the restaurant cannot accommodate allergies to dairy, green onion, wheat, mushroom, egg or pork.', source: TB }], positives: [], confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-7-10 イグジットメルサ 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (75th-anniversary note); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目7番10号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B456968893/', R + 'B537286546/', TB],
    price_note: 'No course prices captured; lunch ¥3,000–6,000, dinner ¥10,000–15,000 in reviews.', last_checked: TODAY, items: [
      it('カチューシャコース', '', 'Katyusha lunch course: six zakuski, pirozhki, borscht, main, dessert, Russian tea', '', 'Courses', 'no', 'no', 'October 2026.', 'katyusha'),
      it('ピロシキ', 'piroshiki', 'Pirozhki (meat or vegetable)', '', 'Courses', 'no', 'no', '', 'pirozhki'),
      it('ボルシチ', 'borushichi', 'Borscht', '', 'Soup', 'no', 'no', '', 'borscht'),
      it('ビーフストロガノフ', '', 'Beef stroganoff', '', 'Mains', 'no', 'no', '', 'stroganoff'),
    ] }, {
    cuisine: '1951年創業の日本初のロシア料理店・ロシア、ウクライナ、ジョージア、ウズベキスタンの料理・ピロシキ、ボルシチ、ビーフストロガノフ、きのこの壺焼き・カチューシャのランチコース・ジョージアや東欧のワイン',
    neighborhood: 'イグジットメルサ7F、銀座五丁目交差点(中央通り×みゆき通り)。銀座駅A2出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。店は小麦のアレルギーには対応できないとしています(食べログの予約時の注意)。ピロシキ、ボルシチ、ビーフストロガノフ、壺焼きが中心です。',
    vegan_detail: 'ヴィーガンではありません。店は乳製品・卵・豚肉・きのこ・ねぎのアレルギーにも対応できないとしており、ニシンの酢漬け、ボルシチ、ストロガノフ、キャビアなどの料理があります。コースでは野菜のピロシキも選べます。',
    notes: '[ロシア料理・75周年の日本初のロシア料理店] 1951年創業で日本初のロシア料理店とされ、今年75周年。銀座五丁目交差点のイグジットメルサ7階(76席、食べログの開店日は2015年)で、宮廷風のロシア料理にウクライナ、ジョージア、ウズベキスタンの郷土料理を、ジョージア、モルドバ、ルーマニア、ブルガリアのワインとともに。カチューシャのランチコースは前菜6種(ニシンの酢漬け、ビーツのヴィネグレット、きのこのマリネ)から、揚げたてのピロシキ(肉か野菜)、赤ワインの効いたボルシチ、ビーフストロガノフやきのこと鶏の壺焼きなどのメイン、ロシアンティーまで。量が多めです。アレルギーの注意: 乳製品、卵、小麦、豚肉、きのこ、ねぎのアレルギーには対応できないとしています。',
  });
}

// ================================================================ 明月庵 ぎんざ 田中屋 松屋店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002256/'; const R = TB + 'dtlrvwlst/';
  const ms = day(['11:00', '22:00']);
  put({
    id: 'tokyo_meigetsuan_tanakaya_matsuya', name: '明月庵 ぎんざ 田中屋 松屋店 (Meigetsuan Ginza Tanakaya)', category: 'OMNI',
    lat: 35.672214, lng: 139.766653,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura fried in sesame oil, udon, and Edo-style soba whose buckwheat ratio is not stated; the tsuyu is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp tempura, pork dipping soba, chirimenjako; bonito-flake garnish; the tsuyu is not described.',
    hours_raw: 'Mon–Sat 11:00–22:00 (L.O. 21:00); Sun 11:00–21:30 (L.O. 20:30); closures follow Matsuya Ginza (Tabelog).',
    hours: { 0: ms, 1: ms, 2: ms, 3: ms, 4: ms, 5: ms, 6: day(['11:00', '21:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Matsuya Ginza main store 8F restaurant floor, Ginza 3-chōme — connected to Ginza Stn exit A13',
    cuisine: 'Edo-style soba since 1956 · stone-ground buckwheat · seasonal tempura in sesame oil · cold soba with small-shrimp tempura · isojako (aosa and chirimenjako) · sake with "soba + a dish"', cuisine_type: 'udon_soba',
    website: 'http://www.soba-tanakaya.com/', gmaps: gm('明月庵 ぎんざ 田中屋 松屋銀座'), menu_url: null,
    notes: "[Soba · Edo-style soba since 1956 on the Matsuya restaurant floor] A 60-seat Edo-style soba house that has kept the tradition since 1956, grinding buckwheat for its noodles and frying seasonal fish and vegetable tempura in sesame oil, now on Matsuya Ginza's eighth floor with small private rooms. Favourites: cold soba with small-shrimp tempura and a choice of nori, bonito flakes or both; mushroom-and-pork dipping soba (¥2,079); shrimp and shimeji tempura soba with a glass of Suigei; and isojako, warm soba heaped with aosa seaweed and chirimenjako. Finish with soba-yu or anmitsu. Ask for salt if you prefer it on the tempura. Half full by 11:30 at weekday lunch.",
    chef_bio: { chef_name: null, roles: [], origin: 'Established 1956 (Tabelog listing)', background: 'Matsuya Ginza branch (soba-tanakaya.com).', philosophy: null, specialty: 'Edo-style soba; sesame-oil tempura.',
      anecdotes: [
        { text: '"I decided on the cold soba with small shrimp tempura… I also had the option to choose between just seaweed, just bonito flakes, or a mix of both as garnishes." — September 2026.', source: R + 'B499374043/' },
        { text: '"The Isojako featured warm soba topped generously with Aosa seaweed… The umami and saltiness of the accompanying chirimenjako complemented it perfectly." — September 2026.', source: R + 'B536460841/' },
      ],
      japanese_sources_summary: '食べログ: 明月庵 ぎんざ 田中屋 松屋店、銀座3-6-1 松屋銀座本店8F、銀座駅A13出口直結、60席(テーブル34、2名・4名・6名の個室)、月〜土11:00〜22:00(L.O. 21:00)、日11:00〜21:30(L.O. 20:30)、子ども可、公式サイト soba-tanakaya.com。店の紹介: 1956年創業、石臼挽きのそば粉と水の加減で守る江戸前そば、太白胡麻油で揚げる旬の魚と野菜の天ぷら、酒肴、「そば+一品」。2026年9月の口コミ: 小海老天のせいろ(海苔・鰹節・両方から選べる)、きのこと豚のつけそば2,079円、海老としめじの天ぷらそばと酔鯨、最初は塩で食べたければ頼める、磯じゃこ(アオサとちりめんじゃこの温かいそば)、あんみつ、11時半すぎに半分ほど埋まる。',
      confidence: 'medium', sources: [TB, R + 'B499374043/', R + 'B536460841/', R + 'B536090000/', R + 'B536099696/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant floor.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-6-1 松屋銀座 本店 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都中央区銀座三丁目6番1号 (go) is 70m off for the large Matsuya block, so the Tabelog pin is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536090000/', R + 'B499374043/'],
    price_note: 'One price from a September 2026 review.', last_checked: TODAY, items: [
      it('きのこと豚のつけそば', '', 'Mushroom and pork dipping soba', '¥2,079', 'Soba', 'no', 'no', 'September 2026.', 'kinoko_buta'),
      it('小海老天せいろ', '', 'Cold soba with small-shrimp tempura', '', 'Soba', 'no', 'no', 'September 2026.', 'koebi_ten_seiro'),
      it('磯じゃこ', 'iso jako', 'Isojako: warm soba with aosa seaweed and chirimenjako', '', 'Soba', 'no', 'no', 'September 2026.', 'isojako'),
      it('あんみつ', 'anmitsu', 'Anmitsu', '', 'Dessert', 'ask', 'ask', 'September 2026.', 'anmitsu'),
    ] }, {
    cuisine: '1956年からの江戸前そば・石臼挽き・太白胡麻油で揚げる旬の天ぷら・小海老天のせいろ・磯じゃこ(アオサとちりめんじゃこ)・「そば+一品」で酒を',
    neighborhood: '松屋銀座本店8Fのレストラン街、銀座三丁目。銀座駅A13出口直結',
    gf_detail: 'グルテンフリーではありません。胡麻油で揚げる天ぷら、うどん、割合の書かれていない江戸前そば。つゆの中身も書かれていません。',
    vegan_detail: 'ヴィーガンではありません。海老の天ぷら、豚のつけそば、ちりめんじゃこ、鰹節の薬味。つゆの中身は書かれていません。',
    notes: '[そば・松屋のレストラン街で1956年からの江戸前そば] 1956年から伝統を守る60席の江戸前そばの店で、石臼で挽いたそば粉で打ち、旬の魚や野菜の天ぷらを胡麻油で揚げます。今は松屋銀座の8階で、小さな個室も。人気は海苔か鰹節か両方を選べる小海老天のせいろ、きのこと豚のつけそば(2,079円)、酔鯨と合わせる海老としめじの天ぷらそば、アオサとちりめんじゃこをのせた温かい磯じゃこ。締めはそば湯かあんみつ。天ぷらを塩で食べたいときは頼めます。平日の昼は11時半には半分ほど埋まります。',
  });
}

// ================================================================ 越後屋八十吉
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13055189/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '23:00']);
  put({
    id: 'tokyo_echigoya_yasokichi_ginza', name: '越後屋八十吉 (Echigoya Yasokichi)', category: 'OMNI',
    lat: 35.668952, lng: 139.768135,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled himono (dried fish), fish skewers, sashimi and set meals with rice and miso soup; marinades such as the sweet silver-cod are not described, and no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dried-fish and seafood house; set meals come with miso soup whose dashi is not described.',
    hours_raw: 'Daily 11:00–23:00 (L.O. 22:00) per the Tabelog hours table; the listing text also mentions opening until 4 am. Open year-round. Two-hour limit; no lunch bookings; phone after 14:00 (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme (4-13-11), Higashi-Ginza side — 1 min from Higashi-Ginza Stn exit 5',
    cuisine: 'Himono (dried-fish) diner-izakaya · charcoal-grilled "strong fire, distant heat" · salmon harasu and shima-hokke ¥890 · set meals from ¥790 · fish skewers · sashimi from its own Tsukiji wholesaler · monthly seasonal sake', cuisine_type: 'izakaya',
    website: null, gmaps: gm('越後屋八十吉 銀座 東銀座'), menu_url: null,
    notes: "[Izakaya · charcoal-grilled himono by Higashi-Ginza] A 70-seat old-style house, long and narrow like an eel's bed, with counter, tatami and sunken seating, built around dried fish from across Japan and fresh seafood from its own Tsukiji wholesale shop. Fish is charcoal-grilled the \"strong fire, distant heat\" way, crisp skin over just-cooked flesh. Salmon harasu and half a shima-hokke are ¥890 each, set meals start at ¥790, and a two-person sashimi platter is ¥790. Fish, rice and miso soup can be ordered separately any time. Evenings bring an omakase of five fish skewers and seasonal sake. Lunch queues are long and tables may be shared; one diner found the miso soup lukewarm. Two-hour limit.",
    chef_bio: { chef_name: null, roles: [], origin: 'Higashi-Ginza (opening date not given)', background: 'Sources fish from its own Tsukiji wholesale shop (Tabelog listing).', philosophy: '"Strong fire, distant heat" (強火の遠火) charcoal grilling (Tabelog listing).', specialty: 'Himono; fish skewers.',
      anecdotes: [
        { text: '"The highlight of this restaurant is the grilled fish skewers. Being able to sample different types of fish on skewers was fantastic." — October 2026.', source: R + 'B537651736/' },
        { text: '"The restaurant has a charming, traditional feel reminiscent of an old-style eel bed… The pleasant aroma of fish being grilled over charcoal wafts from the front of the restaurant." — October 2026, lunch.', source: R + 'B537448047/' },
      ],
      japanese_sources_summary: '食べログ: 越後屋八十吉、銀座4-13-11、東銀座駅5番出口すぐ、70席(2名・4名の個室、カウンター、座敷、掘りごたつ)、毎日11:00〜23:00(L.O. 22:00)、年中無休、2時間制、ランチは予約不可、予約電話は14時以降。店の紹介: 全国の厳選した干物と自社の築地の卸からの鮮魚、強火の遠火の炭火焼き、鮭ハラス890円、縞ほっけ(半身)890円、定食790円から、刺身盛り合わせ2人前790円、にごり酒や月替わりの季節の日本酒、朝4時まで営業との記載も。2026年10月の口コミ: 夜も魚・ご飯・味噌汁を単品で頼んで定食に、銀だらの漬け、まこもだけ、注文後に作るので時間がかかる、鰻の寝床のような店、昼は相席、味噌汁と漬物がぬるかった、秋刀魚、刺身の盛り合わせ、魚の串焼き、おまかせ串5本、昼は長い行列。',
      confidence: 'medium', sources: [TB, R + 'B537651736/', R + 'B537448047/', R + 'B537064011/', R + 'B537935587/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tables may be shared at lunch.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-13-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目13番11号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Prices from the Tabelog listing.', last_checked: TODAY, items: [
      it('鮭ハラス', 'sake harasu', 'Grilled salmon belly', '¥890', 'Grill', 'ask', 'no', 'Tabelog listing.', 'harasu'),
      it('縞ほっけ(半身)', '', 'Shima-hokke, half', '¥890', 'Grill', 'ask', 'no', 'Tabelog listing.', 'hokke'),
      it('定食', 'teishoku', 'Set meal (fish, rice, miso soup)', '¥790〜', 'Set meals', 'ask', 'no', 'Tabelog listing.', 'teishoku'),
      it('刺身盛り合わせ(2人前)', '', 'Sashimi platter for two', '¥790', 'Sashimi', 'ask', 'no', 'Tabelog listing.', 'sashimi'),
      it('おまかせ串5本', '', 'Omakase five fish skewers', '', 'Grill', 'ask', 'no', 'October 2026.', 'skewers5'),
    ] }, {
    cuisine: '干物の食堂兼居酒屋・強火の遠火の炭火焼き・鮭ハラスと縞ほっけ890円・定食790円から・魚の串焼き・自社の築地の卸からの刺身・月替わりの日本酒',
    neighborhood: '銀座四丁目(4-13-11)、東銀座側。東銀座駅5番出口から徒歩1分',
    gf_detail: '要確認。炭火焼きの干物、魚の串焼き、刺身、ご飯と味噌汁の定食。甘めの銀だらの漬けなどの味付けは書かれておらず、グルテンフリーの対応の記載もありません。',
    vegan_detail: 'ヴィーガンではありません。干物と魚介の店で、定食の味噌汁のだしは書かれていません。',
    notes: '[居酒屋・東銀座の炭火焼きの干物] 鰻の寝床のように細長い70席の昔ながらの店で、カウンター、座敷、掘りごたつ。全国の干物と自社の築地の卸からの鮮魚が主役で、「強火の遠火」の炭火で皮はパリッと身はふっくら焼き上げます。鮭ハラスと縞ほっけの半身は各890円、定食は790円から、2人前の刺身盛り合わせは790円。魚、ご飯、味噌汁はいつでも単品で頼めます。夜はおまかせの魚の串5本や季節の日本酒も。昼は行列が長く相席になることもあり、味噌汁がぬるかったという声も。2時間制。',
  });
}

// ================================================================ 嘉門
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13002295/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_kamon_imperial_hotel', name: '嘉門 (Teppanyaki Kamon, Imperial Hotel)', category: 'OMNI',
    lat: 35.672413, lng: 139.758349,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hotel teppanyaki of Ise lobster, black abalone, wagyu fillet and vegetables, with garlic rice; no source mentions sauces or gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, lobster and abalone courses.',
    hours_raw: 'Daily 11:30–15:00 (L.O. 14:00) and 17:30–22:00 (L.O. 21:00) (Tabelog). 15% service charge.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Imperial Hotel Tokyo main building 17F, Uchisaiwaichō — 5 min from Hibiya Stn or Ginza Stn',
    cuisine: 'Imperial Hotel teppanyaki with a view · Ise lobster, black abalone, wagyu fillet · garlic rice · dessert served in a separate lounge away from the grill', cuisine_type: 'other',
    website: 'https://www.imperialhotel.co.jp/j/tokyo/restaurant/kamon/menu.html', gmaps: gm('嘉門 帝国ホテル 鉄板焼'), menu_url: null,
    notes: "[Teppanyaki · Imperial Hotel's 17th-floor teppan] The Imperial Hotel Tokyo's teppanyaki on the 17th floor of the main building, with city views. It stands where the French restaurant Fontainebleau served three decades ago, per a reviewer who once worked at the hotel. Chefs grill for each party at the counter: Ise lobster, black abalone, wagyu fillet (Miyagi wagyu on one October visit) and vegetables, finishing with garlic rice. Dessert is served in a separate room so it's away from the smell of the grill. It's a celebration place: one couple who dined here on their wedding day came back for their daughter's birthday. Special courses run ¥40,000–50,000 at dinner, lunch from about ¥15,000; 15% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Restaurant of the Imperial Hotel Tokyo (Tabelog listing)', background: 'Hotel restaurant (imperialhotel.co.jp).', philosophy: null, specialty: 'Lobster, abalone and wagyu teppanyaki.',
      anecdotes: [
        { text: '"I was also surprised that the dessert was served in a separate room, away from the smell of meat, showcasing their attention to detail." — October 2026, holiday lunch.', source: R + 'B537307921/' },
        { text: '"On the day we got married, my husband and I had our first dinner at \'Kamon,\'… This time, we visited again as a family to celebrate our daughter\'s birthday." — October 2026.', source: R + 'B537730541/' },
      ],
      japanese_sources_summary: '食べログ: 嘉門、千代田区内幸町1-1-1 帝国ホテル東京本館17F、日比谷駅徒歩5分・銀座駅徒歩5分、71席(デザートコーナー20席を含む)、毎日11:30〜15:00(L.O. 14:00)・17:30〜22:00(L.O. 21:00)、サービス料15%、車椅子可、夜景、公式サイト imperialhotel.co.jp。2026年10月の口コミ: 32年前にフランス料理「フォンテンブロー」があった場所、伊勢海老・黒鮑・宮城県産和牛ヒレ、特別コース、肉と野菜を一組ずつ焼く、肉の匂いを避けて別室でデザート、ガーリックライス、結婚した日に初めて食事をした店に娘の誕生日で再訪、昼は1万5千円〜2万円、夜は4万〜5万円。',
      confidence: 'medium', sources: [TB, R + 'B537307921/', R + 'B537730541/', R + 'B537103863/', R + 'B537404105/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-8558 東京都千代田区内幸町1-1-1 帝国ホテル東京 本館 17F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都千代田区内幸町一丁目1番 (lot) is 118m off for the large Imperial Hotel block, so the Tabelog pin is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537404105/', R + 'B537103863/'],
    price_note: 'No menu prices captured; lunch ¥15,000–20,000, dinner ¥40,000–50,000 in reviews, plus 15%.', last_checked: TODAY, items: [
      it('特別コース', '', 'Special course: Ise lobster, abalone, wagyu fillet, garlic rice', '', 'Courses', 'ask', 'no', 'October 2026.', 'special_course'),
      it('ガーリックライス', '', 'Garlic rice', '', 'Rice', 'ask', 'no', '', 'garlic_rice'),
    ] }, {
    cuisine: '眺めのよい帝国ホテルの鉄板焼き・伊勢海老、黒鮑、和牛ヒレ・ガーリックライス・肉の匂いを避けて別室でデザート',
    neighborhood: '帝国ホテル東京本館17F、内幸町。日比谷駅・銀座駅から徒歩5分',
    gf_detail: '要確認。伊勢海老、黒鮑、和牛ヒレ、野菜のホテルの鉄板焼きにガーリックライス。ソースやグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。和牛、伊勢海老、鮑のコース。',
    notes: '[鉄板焼き・帝国ホテル17階の鉄板] 帝国ホテル東京本館17階の眺めのよい鉄板焼き。かつてホテルで働いていた口コミの主によると、30年ほど前はフランス料理「フォンテンブロー」があった場所です。シェフが一組ずつカウンターで伊勢海老、黒鮑、和牛ヒレ(10月のある日は宮城県産)、野菜を焼き、締めはガーリックライス。デザートは焼き場の匂いから離れた別室で。結婚した日に食事をした夫婦が娘の誕生日に再訪するような、お祝いの店です。夜の特別コースは4万〜5万円、昼は1万5千円ほどから、サービス料15%。',
  });
}

save();
