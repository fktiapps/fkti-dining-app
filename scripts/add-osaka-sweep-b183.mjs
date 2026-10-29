// Osaka sweep (2-mile circle around Dotonbori), batch 183 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + カンジャンケジャン 渡 大阪心斎橋店 (soy-marinated crab courses in private rooms; Nagahoribashi)
//   + なみ一 (handmade soba and refillable clay-pot rice, Ura-Namba; sister of Nami Ichi Seven, a different concept)
//   + カフェ コロンビア (small white café with coffee and cakes, cash only; Higashi-Shinsaibashi)
//   + 弐箱 (Futahako: Kishiwada-style kashimin-yaki and drinks to 2 am; Ura-Namba)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 183);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ カンジャンケジャン 渡 大阪心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27149349/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_kanjang_gejang_watari_shinsaibashi', name: 'カンジャンケジャン 渡 大阪心斎橋店 (Kanjang Kejang Watari Oosaka shinsaibashi ten)', category: 'OMNI',
    lat: 34.673748, lng: 135.50611, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature crab is marinated in soy sauce (Tabelog listing); courses also include jeon, japchae and a noodle or porridge finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soy-marinated crab and shrimp, seafood hot pot.',
    hours_raw: 'Daily 17:00–23:00, open year-round (Tabelog). Seating appears limited to two hours; one diner was not told in advance (October 2026). Staff ask about your health before the raw crab is served (September 2026). Cards, e-money and QR accepted (Tabelog). Heated tobacco only (Tabelog). Every seat is in a private or semi-private room; some have sunken kotatsu (Tabelog; September 2026). Opened 15 June 2025 (Tabelog).',
    hours: ALL(day(['17:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-3-7, ENT Nagahori Bldg 5F — right by Nagahoribashi Stn exit 6',
    cuisine: 'Soy-marinated raw crab (ganjang gejang) courses in private rooms (18 seats) · courses about ¥6,980 · ganjang gejang with rice, soup and namul · soy-marinated shrimp with lemon · japchae; jeon · nakopsae hot pot of octopus, shrimp, crab, scallops and offal, finished with noodles (egg yolk, cheese, black pepper) or rice porridge · shiso sorbet or ice cream to end · rare Japanese sake',
    website: null, gmaps: gm('カンジャンケジャン 渡 大阪心斎橋店'), menu_url: TB + 'dtlmenu/',
    notes: "[Korean · soy-marinated crab courses in private rooms, Nagahoribashi] A fifth-floor Korean restaurant by Nagahoribashi Station built around ganjang gejang, raw blue crab marinated in soy sauce, served in quiet private and semi-private rooms (some with sunken kotatsu). The crab is sweet and creamy, good with rice; soy-marinated shrimp comes with lemon. Courses (about ¥6,980) add namul, japchae and jeon, and the nakopsae seafood hot pot ends with noodles under egg yolk, cheese and pepper. A rare-sake list fits the Japanese-leaning seasoning. One diner found portions smaller than expected, and another was hurried out at a two-hour limit nobody had mentioned, so ask when booking.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 June 2025 (Tabelog).', background: 'Korean crab restaurant with private rooms (Tabelog; 2026 reviews).', philosophy: '"Luxury in everyday life"; soy-marinated crab in a Japanese style with rare sake (Tabelog listing).', specialty: 'Ganjang gejang.',
      anecdotes: [
        { text: '"Oh my, it was so creamy! It was sweet, but the flavor of the soy sauce was perfectly infused… The noodles topped with egg yolk, cheese, and black pepper were absolutely amazing!" — September 2026.', source: R + 'B536527713/' },
        { text: '"However, without any explanation about the two-hour limit, my beer was brought to me just 10 minutes before the end, and I was asked to leave." — October 2026.', source: R + 'B537691927/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): カンジャンケジャン 渡 大阪心斎橋店、大阪市中央区東心斎橋1-3-7 ENT長堀ビル 5F、長堀橋駅6番出口すぐ、毎日17:00〜23:00、年中無休、2025年6月15日開店、全席個室・半個室、カード・電子マネー・QR可、加熱式たばこのみ、18席、「日常に贅沢を」、和風に仕立てた生のワタリガニの醤油漬け、珍しい日本酒。口コミ(2026年9〜10月): 6,980円のコース、ganjang gejang とご飯・スープ・namul、レモンで食べる醤油漬けの海老、japchae、jeon、タコ・海老・蟹・ホタテ・ホルモンの nakopsae、しめは卵黄・チーズ・黒こしょうの麺かお粥、shiso のシャーベットやアイス、掘りごたつの個室、生の蟹の前に体調を確認してくれる、量が思ったより少ないという声、説明のない2時間制で追い出されたという声。',
      confidence: 'medium', sources: [TB, R + 'B536488047/', R + 'B536527713/', R + 'B536564597/', R + 'B537204730/', R + 'B537691927/', R + 'B538211560/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; ask about the time limit when booking (2026).' },
    safety: { ...SAFETY0, positives: ['Staff ask about your health before serving the raw crab (September 2026).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-3-7 ENT長堀ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目3番7号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537204730/', R + 'B536527713/'],
    price_note: 'Course price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Ganjang gejang course', '¥6,980', 'Courses', 'ask', 'no', 'October 2026.', 'course'),
      it('', '', 'Nakopsae seafood hot pot with noodle finish', '', 'Hot pot', 'ask', 'no', 'September 2026.', 'nakopsae'),
      it('', '', 'Soy-marinated shrimp', '', 'À la carte', 'ask', 'no', 'September–October 2026.', 'saeu'),
    ] }, {
    cuisine: '個室で食べる生のワタリガニの醤油漬け (ganjang gejang) のコース (18席)・コース約6,980円・ganjang gejang とご飯、スープ、namul・レモンで食べる醤油漬けの海老・japchae、jeon・タコ、海老、蟹、ホタテ、ホルモンの nakopsae、しめは卵黄・チーズ・黒こしょうの麺かお粥・shiso のシャーベットかアイス・珍しい日本酒',
    neighborhood: '東心斎橋1-3-7 ENT長堀ビル 5F。長堀橋駅6番出口すぐ',
    gf_detail: '要確認。看板の蟹は醤油漬け (食べログ)。コースには jeon、japchae、麺かお粥のしめも。',
    vegan_detail: 'ヴィーガンではありません。醤油漬けの蟹と海老、海鮮の鍋。',
    notes: '[韓国料理・長堀橋、個室で味わう醤油漬けの生の蟹のコース] 長堀橋駅すぐのビルの5階にある韓国料理の店で、主役は生のワタリガニを醤油に漬けた ganjang gejang。静かな個室・半個室 (掘りごたつも) で。蟹は甘くクリーミーで、ご飯と一緒に。醤油漬けの海老はレモンで。コース (約6,980円) には namul、japchae、jeon、海鮮の nakopsae がつき、しめは卵黄とチーズとこしょうの麺。和風に寄せた味に合う珍しい日本酒も。量が思ったより少なかったという声、説明のなかった2時間制で急かされたという声もあるので、予約時に確認を。',
  });
}

// ================================================================ なみ一
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27017830/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://nami1.jp/';
  const SHORT = day(['10:30', '15:00']);
  put({
    id: 'osaka_namiichi_soba_uranamba', name: 'なみ一 (Nami Ichi)', category: 'OMNI',
    lat: 34.663439, lng: 135.504751, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The buckwheat ratio of the handmade soba is not stated, and the dipping broth and eel or duck sauces are not described for gluten; tempura bits are offered as a topping.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: duck and eel set meals in dashi; nothing described as vegan.',
    hours_raw: 'Mon, Tue, Thu 10:30–15:00; Friday–Saturday 10:30–20:00; Sunday and holidays 10:30–17:00; closed Wednesday; may change (Tabelog). Set meals by day and soba with drinks in the evening (Tabelog). Cards and QR accepted; no e-money (Tabelog). Non-smoking. Lines at weekend lunch (September 2026). Formerly 七三一 (Tabelog); founded 2000 (September 2026 review).',
    hours: { 0: SHORT, 1: SHORT, 3: SHORT, 4: day(['10:30', '20:00']), 5: day(['10:30', '20:00']), 6: day(['10:30', '17:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Sennichimae 7-4, in a back alley of Ura-Namba — about 5 min from Nankai Namba Stn',
    cuisine: 'Handmade soba with set meals (9 counter seats) · set meals come with refillable clay-pot mixed rice and house pickles · grilled duck soba with Kujo green onion; duck nanban soba set ¥1,800 · duck rice bowl set with small soba ¥1,800 · eel mixed rice with small soba and a side ¥2,100 · finish the rice with soba broth or tea, ochazuke style · unlimited tempura bits · zaru soba and small dishes with drinks in the evening',
    website: OWN, gmaps: gm('なみ一 裏難波 蕎麦'), menu_url: null,
    notes: "[Soba · handmade soba with free refills of clay-pot rice, Ura-Namba] A Showa-retro soba counter of about nine seats in a back alley of Ura-Namba, around since 2000 and a sister shop of Nami Ichi Seven. The signature is grilled duck soba in a rich, sweet broth with plenty of Kujo green onion. Every set meal comes with steaming clay-pot mixed rice you can refill, plus house pickles and free tempura bits, and the custom is to finish the rice ochazuke-style with soba broth or tea. The eel mixed-rice set (¥2,100) is a treat; most sets are about ¥1,800, which one diner found steep for a casual lunch. Expect a short line at weekends. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 2000; formerly 七三一; sister shop of Nami Ichi Seven (Tabelog; September–October 2026 reviews).', background: 'Soba restaurant with set meals (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Handmade duck soba; clay-pot mixed rice.',
      anecdotes: [
        { text: '"The grilled duck cold soba is particularly exquisite… The set meal comes with all-you-can-eat clay pot mixed rice, which is incredibly delicious!" — April 2026.', source: R + 'B526587048/' },
        { text: '"I ordered the unagi (grilled eel) takikomi gohan, which comes with a choice of small soba and a small side dish for JPY 2,100." — September 2026.', source: R + 'B406658474/' },
      ],
      japanese_sources_summary: '食べログ: なみ一 (旧店名 七三一)、大阪市中央区難波千日前7-4、南海なんば駅から徒歩約5分、月・火・木10:30〜15:00、金・土10:30〜20:00、日・祝10:30〜17:00、水曜休み、昼は定食、夜はそばの店、カード・QR可、電子マネー不可、禁煙、9席、公式サイトあり。口コミ(2026年4〜10月): 2000年創業、裏難波の路地の昭和レトロな店、手打ちのそば、焼いた鴨のそばと九条ねぎ、鴨の nanban そばの定食1,800円、鴨丼と小そばのセット1,800円、うなぎの炊き込みご飯と小そば2,100円、土鍋の炊き込みご飯はおかわり自由、自家製の漬け物、tenkasu 入れ放題、しめはそばつゆやお茶をかけて、週末の昼は行列、姉妹店に「なみ一セヴン」、写真に「あっさり炊き込みご飯 炊き立て」「漬け物も手作り満載」、1,800円は気軽な昼には高めという声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B319201050/', R + 'B406658474/', R + 'B526587048/', R + 'B526607928/', R + 'B531931064/', R + 'B537199797/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; lines at weekend lunch (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前7-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: OSM なみ一 node/6349231086 11m; GSI 大阪府大阪市中央区難波千日前7番4号 (go) 5m; 14 m from Nami Ichi Seven, no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537199797/', R + 'B406658474/', R + 'B319201050/'],
    price_note: 'Prices from September–October 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Duck nanban soba set with clay-pot rice', '¥1,800', 'Sets', 'ask', 'no', 'October 2026.', 'kamonanban'),
      it('', '', 'Duck rice bowl set with small soba', '¥1,800', 'Sets', 'ask', 'no', 'September 2026.', 'kamodon'),
      it('', '', 'Eel mixed rice with small soba and a side', '¥2,100', 'Sets', 'ask', 'no', 'September 2026.', 'unagi'),
    ] }, {
    cuisine: '手打ちそばと定食 (カウンター9席)・定食にはおかわり自由の土鍋の炊き込みご飯と自家製の漬け物・九条ねぎの焼いた鴨のそば、鴨の nanban そばの定食1,800円・鴨丼と小そばのセット1,800円・うなぎの炊き込みご飯と小そばと小鉢2,100円・しめはご飯にそばつゆかお茶をかけて・tenkasu 入れ放題・夜はzaru sobaと酒の肴',
    neighborhood: '難波千日前7-4、裏難波の路地。南海なんば駅から徒歩約5分',
    gf_detail: '要確認。手打ちそばのそば粉の割合は書かれておらず、つゆや鴨・うなぎのたれのグルテンについての記載なし。tenkasu のトッピングもある。',
    vegan_detail: '実質ヴィーガンではありません。鴨とうなぎの定食とだし。ヴィーガンの記載なし。',
    notes: '[そば・裏難波、土鍋の炊き込みご飯がおかわり自由の手打ちそば] 裏難波の路地にある9席ほどの昭和レトロなそばのカウンターで、2000年から、なみ一セヴンの姉妹店。看板は九条ねぎたっぷりの、甘く濃いつゆの焼いた鴨のそば。定食には土鍋で炊いた炊き込みご飯がつきおかわり自由、自家製の漬け物とtenkasu も好きなだけ。しめはご飯にそばつゆかお茶をかけてochazuke 風に。うなぎの炊き込みご飯のセット (2,100円) はごちそう。ほとんどのセットは1,800円ほどで、気軽な昼には高めという声も。週末は短い行列。水曜休み。',
  });
}

// ================================================================ カフェ コロンビア
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000582/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_cafe_colombia_higashishinsaibashi', name: 'カフェ コロンビア (Cafe Colombia)', category: 'OMNI',
    lat: 34.674888, lng: 135.504007, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; cakes include chiffon cake, rare cheesecake and an affogato with cookies.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and tea are on the menu; cakes and milk drinks are not described as vegan.',
    hours_raw: 'Daily 11:00–20:00 (last order 19:30); may change (Tabelog). Cash only (Tabelog; January 2026). Smoking allowed; e-cigarettes, with a reported limit of three per person (Tabelog; May 2026). Wi-Fi (May 2026). Takeout (Tabelog). Entrances from Nagahori-dori and Unagidani north street (June 2026).',
    hours: ALL(day(['11:00', '20:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-11-15, 1F, near a Crysta Nagahori exit and below the BAG\'n\'NOUN shop — about 5 min from Shinsaibashi or Nagahoribashi Stn',
    cuisine: 'Small white-toned café (16 seats, mostly tables for two) · Colombian coffee ¥600 · Colombia mocha latte with thick foam · affogato with espresso, ice cream and cookies · spiced hot chocolate · Earl Grey iced tea · chiffon cake with cream ¥450 · rare cheesecake with lemon and berry sauce',
    website: null, gmaps: gm('カフェ コロンビア 東心斎橋'), menu_url: null,
    notes: "[Café · a quiet white café for coffee and chiffon cake, Higashi-Shinsaibashi] A small, minimal café between Shinsaibashi and Nagahoribashi, all white with big windows, run alongside the bag brand BAG'n'NOUN's shop upstairs. It's an easy solo stop, open until 8 pm: Colombian coffee (¥600) with a gentle sweetness, a foamy Colombia mocha latte, an affogato, spiced hot chocolate, and cakes like a fluffy chiffon with cream (¥450) or a light rare cheesecake with lemon and berry sauce. Staff are friendly. It's a little hard to spot, with doors on both Nagahori-dori and the street behind. Cash only; e-cigarettes allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Run by the company behind the bag brand BAG\'n\'NOUN, whose shop is upstairs (May 2026 review).', background: 'Café (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Coffee and cakes.',
      anecdotes: [
        { text: '"I ordered a hot Colombian coffee (JPY 600) and a chiffon cake (JPY 450)… The chiffon cake was fluffy and generously topped with sweet cream…" — January 2026.', source: R + 'B521088157/' },
        { text: '"The cheesecake is a rare cheesecake—rich and creamy without being heavy… It has a subtle lemon flavor, and when paired with the berry sauce, it adds a nice tartness…" — April 2026.', source: R + 'B525890262/' },
      ],
      japanese_sources_summary: '食べログ: カフェ コロンビア、大阪市中央区東心斎橋1-11-15 1F・B1F、長堀橋駅から218m、毎日11:00〜20:00 (L.O. 19:30)、カード・電子マネー・QR不可、喫煙可、16席、テイクアウト。口コミ(2026年1〜6月): 白を基調にしたシンプルなカフェ、大きな窓、ひとりでも入りやすい、2階はバッグブランド BAG\'n\'NOUN の店、コロンビアのコーヒー600円、泡たっぷりのコロンビアモカラテ、アフォガート、スパイスのホットチョコレート、アールグレイのアイスティー、クリームのシフォンケーキ450円、レモンとベリーソースのレアチーズケーキ、現金のみ、電子たばこ可 (ひとり3本までという声)、Wi-Fi、長堀通りと鰻谷の北側の通りの両方から入れる、スタッフが親しみやすい。',
      confidence: 'medium', sources: [TB, R + 'B521088157/', R + 'B525890262/', R + 'B526662248/', R + 'B527473426/', R + 'B528037650/', R + 'B529790437/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; easy for solo visits (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-11-15 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目11番15号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521088157/'],
    price_note: 'Prices from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Colombian coffee (hot)', '¥600', 'Coffee', '', '', 'January 2026.', 'colombia'),
      it('', '', 'Chiffon cake with cream', '¥450', 'Cakes', 'ask', 'no', 'January 2026.', 'chiffon'),
      it('', '', 'Rare cheesecake with berry sauce', '', 'Cakes', 'ask', 'no', 'April 2026.', 'cheesecake'),
      it('', '', 'Colombia mocha latte', '', 'Coffee', '', 'no', 'April–May 2026.', 'mocha'),
    ] }, {
    cuisine: '白を基調にした小さなカフェ (16席、主に2人がけ)・コロンビアのコーヒー600円・泡たっぷりのコロンビアモカラテ・エスプレッソとアイスとクッキーのアフォガート・スパイスのホットチョコレート・アールグレイのアイスティー・クリームのシフォンケーキ450円・レモンとベリーソースのレアチーズケーキ',
    neighborhood: '東心斎橋1-11-15 1F、クリスタ長堀の出口近く、上の階は BAG\'n\'NOUN の店。心斎橋駅・長堀橋駅から徒歩約5分',
    gf_detail: '要確認。グルテンの情報なし。ケーキはシフォン、レアチーズケーキ、クッキーつきのアフォガートなど。',
    vegan_detail: '要確認。ブラックコーヒーや紅茶はあるが、ケーキやミルクのドリンクにヴィーガンの記載なし。',
    notes: '[カフェ・東心斎橋、シフォンケーキとコーヒーの静かな白いカフェ] 心斎橋と長堀橋のあいだにある小さなミニマルなカフェで、白い店内に大きな窓、上の階はバッグブランド BAG\'n\'NOUN の店。夜8時まで、ひとりでも立ち寄りやすい。ほのかな甘みのコロンビアのコーヒー (600円)、泡たっぷりのコロンビアモカラテ、アフォガート、スパイスのホットチョコレート、ケーキはクリームのふわふわのシフォン (450円) や、レモンとベリーソースの軽いレアチーズケーキ。スタッフは親しみやすい。少し見つけにくく、入口は長堀通りと裏の通りの両方に。現金のみ、電子たばこ可。',
  });
}

// ================================================================ 弐箱
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27069862/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://kashimin-haco.jp/';
  put({
    id: 'osaka_futahako_kashimin_uranamba', name: '弐箱 (Futahako)', category: 'OMNI',
    lat: 34.663415, lng: 135.504879, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: kashimin-yaki is a thin flour batter on a crepe base, with yakisoba, udon and sauces; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kashimin-yaki uses chicken and minced beef fat.',
    hours_raw: 'Daily 18:00–02:00; irregular closures (Tabelog). No cards (Tabelog). Smoking allowed; counter seating only (Tabelog; September 2025). Busy after 21:00 (September 2024).',
    hours: ALL(day(['18:00', '02:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 6-12, Kyokkoso 1F, in Ura-Namba — near Namba and Nippombashi Stn',
    cuisine: 'Kashimin-yaki, the Kishiwada and Senshu take on okonomiyaki: a thin batter on a crepe base with shredded cabbage, chicken (kashiwa) and minced beef fat (13 counter seats) · original ¥650 · with green onion ¥980 · cheese curry; mochi and cheese; cheese and tomato · "western-style modern" with noodles ¥1,200 · uso-yaki of udon, soba and offal ¥1,300 · salad on a crepe base ¥600 · squid skewers ¥480; salt-grilled chicken neck ¥600; cucumbers ¥350 · yakisoba ¥900; yaki udon; soba-meshi with natto ¥980 · simmered beef tendon · ponzu highball',
    website: OWN, gmaps: gm('弐箱 難波千日前'), menu_url: null,
    notes: "[Okonomiyaki · Kishiwada-style kashimin-yaki and late drinks, Ura-Namba] A narrow, counter-only bar in Ura-Namba, the second shop of a kashimin-yaki specialist, serving the Senshu cousin of okonomiyaki that's rare in central Osaka. A thin crepe is topped with crunchy cabbage, little pieces of chicken and minced beef fat, which melts into the batter for a rich but surprisingly light cake; the original is ¥650, so groups order several (green onion, cheese curry, mochi and cheese). Also the hefty western-style modern with noodles, a garlicky udon-soba-offal 'uso-yaki', soba-meshi with natto and good drinking snacks. Open to 2 am; no cards; smoking allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Second shop of the kashimin-yaki specialist Hako (Tabelog listing).', background: 'Kashimin-yaki bar (Tabelog; 2024–2025 reviews).', philosophy: 'A lighter okonomiyaki from the Senshu area (Tabelog listing).', specialty: 'Kashimin-yaki.',
      anecdotes: [
        { text: '"The base is a crepe with plenty of crunchy cabbage, and the batter poured in creates a wonderfully gooey finish. The minced meat is grilled to perfection, and the chicken adds a delightful crunchy texture." — December 2024, Kashimin-yaki original ¥650.', source: R + 'B498248030/' },
        { text: '"The amount of batter is minimal, and the seasoning is very rich, making it perfect to enjoy with beer!" — November 2025.', source: R + 'B516813880/' },
      ],
      japanese_sources_summary: '食べログ: 弐箱、大阪市中央区難波千日前6-12 旭光荘 1F、なんば駅・日本橋駅から、毎日18:00〜翌2:00、不定休、カード不可、喫煙可、13席 (カウンター)、公式サイトあり、泉州の味、薄い生地にキャベツ・kashiwa (鶏)・牛脂のミンチの「kashimin-yaki 」、Hako の2号店。口コミ(2024年9月〜2025年11月): 岸和田の名物、お好み焼きより軽い、kashimin-yaki 元祖650円、ねぎ980円、チーズカレー、もちチーズ、チーズトマト、麺の入った洋風モダン1,200円、うどん・そば・ホルモンのuso-yaki1,300円、クレープ生地のサラダ600円、イカ串480円、鶏の首の塩焼き600円、きゅうり350円、焼きそば900円、yaki udon、納豆の soba-meshi980円、牛すじ煮込み、ponzu ハイ、21時すぎも混み合う。',
      confidence: 'medium', sources: [TB, OWN, R + 'B491493021/', R + 'B493250307/', R + 'B498248030/', R + 'B506991274/', R + 'B513407482/', R + 'B516813880/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter bar; no cards; smoking allowed (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前6-12 旭光荘 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing current; most recent review November 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前6番12号 (go) 4m; 12 m from Nami Ichi and 14 m from Nami Ichi Seven, no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B498248030/', R + 'B513407482/'],
    price_note: 'Prices from December 2024 and September 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kashimin-yaki, original', '¥650', 'Kashimin-yaki', 'no', 'no', 'December 2024.', 'ganso'),
      it('', '', 'Kashimin-yaki with green onion', '¥980', 'Kashimin-yaki', 'no', 'no', 'September 2025.', 'negi'),
      it('', '', 'Western-style modern with noodles', '¥1,200', 'Kashimin-yaki', 'no', 'no', 'December 2024.', 'modern'),
      it('', '', 'Uso-yaki (udon, soba and offal)', '¥1,300', 'Teppan', 'no', 'no', 'December 2024.', 'usoyaki'),
      it('', '', 'Soba-meshi with natto', '¥980', 'Teppan', 'no', 'no', 'September 2025.', 'sobameshi'),
    ] }, {
    cuisine: '岸和田・泉州のお好み焼きの仲間、kashimin-yaki : 薄いクレープの生地にキャベツ、鶏 (kashiwa)、牛脂のミンチ (カウンター13席)・元祖650円・ねぎ980円・チーズカレー、もちチーズ、チーズトマト・麺の入った洋風モダン1,200円・うどん・そば・ホルモンの「uso-yaki」1,300円・クレープ生地のサラダ600円・イカ串480円、鶏の首の塩焼き600円、きゅうり350円・yakisoba 900円、yaki udon、納豆の soba-meshi 980円・牛すじ煮込み・ponzu ハイボール',
    neighborhood: '難波千日前6-12 旭光荘 1F、裏難波。なんば駅・日本橋駅の近く',
    gf_detail: '実質グルテンフリーではありません。kashimin-yaki はクレープの上に薄い小麦の生地で、yakisoba、うどん、ソースも。グルテンフリーの品の記載なし。',
    vegan_detail: 'ヴィーガンではありません。kashimin-yaki は鶏と牛脂のミンチを使う。',
    notes: '[お好み焼き・裏難波、岸和田風のkashimin-yaki と深夜の一杯] 裏難波の細長いカウンターだけのバーで、kashimin-yaki の専門店の2号店。大阪の中心ではめずらしい、泉州のお好み焼きの仲間を出す。薄いクレープにシャキシャキのキャベツ、小さな鶏肉、牛脂のミンチをのせ、脂が生地にしみて濃厚なのに意外と軽い。元祖は650円なので、ねぎ、チーズカレー、もちチーズなどを何枚か頼むのがおすすめ。麺の入ったボリュームのある洋風モダン、にんにくの効いたうどん・そば・ホルモンの「uso-yaki」、納豆の soba-meshi、酒の肴も。深夜2時まで、カード不可、喫煙可。',
  });
}

save();
