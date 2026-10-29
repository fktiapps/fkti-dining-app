// Osaka sweep (2-mile circle around Dotonbori), batch 168 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + 512 CAFE＆SWEETS (jiggly soufflé-style pancakes and a lunch plate; Shinsaibashi-suji)
//   + のの屋 (grill-your-own Tajima chicken over charcoal, chicken sashimi; Sennichimae)
//   + アンティカ オステリア ダル スペッロ (10-seat Italian, handmade pasta, cash only; Namba)
//   + 昭和双子焼き (8-seat Showa-retro Korean bar, gimbap and sundae to 2 am; Higashi-Shinsaibashi) — mom
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 168);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 512 CAFE＆SWEETS
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27118281/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://512.osaka/';
  put({
    id: 'osaka_512_cafe_sweets_shinsaibashi', name: '512 CAFE＆SWEETS (512 CAFE & Sweets)', category: 'OMNI',
    lat: 34.671867, lng: 135.501623, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu is pancakes, French toast and baked goods.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the pancake batter is made with eggs (September 2026), served with cream and ice cream.',
    hours_raw: 'Daily 9:00–17:00, open year-round (Tabelog); a September 2026 review gives 10:00–17:00, last order 16:00. Reservations taken. Cards, e-money and PayPay accepted (Tabelog). Order by QR code on your phone; water is self-service (June 2026). Non-smoking. Children welcome; takeout (Tabelog). Opened 16 July 2020 (Tabelog).',
    hours: ALL(day(['09:00', '17:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-1-24, 2F, up a staircase from the door — about 3 min from Shinsaibashi Stn exit 6',
    cuisine: 'Jiggly pancake café · fluffy pancakes with caramelized top, custard inside, whipped cream, vanilla ice cream and berry sauce · matcha pancakes ¥1,800 + tax with matcha custard, mascarpone and red-bean caramel · peach and mascarpone pancakes · chocolate-mint pancakes in summer, about ¥2,600 · 512 lunch plate: French toast, bacon and eggs, chips, salad, canelé · homemade lemonade; iced latte; house iced coffee · batter made with eggs from Kannan Farm, Hyogo',
    website: OWN, gmaps: gm('512 CAFE＆SWEETS 心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Café · jiggly pancakes up a staircase, Shinsaibashi-suji] A second-floor pancake café off Shinsaibashi-suji, reached by a staircase straight from the door. The pancakes are the tall, wobbling kind, so soft one diner said they eat like a drink: the standard has a crisp caramelized top with custard inside, whipped cream, vanilla ice cream and berry sauce, plus a bitter caramel to adjust the sweetness. Seasonal versions include matcha with matcha custard and mascarpone (¥1,800 + tax), peach and mascarpone, and a summer chocolate-mint. For lunch there's a plate of French toast with bacon and eggs. Pancakes came in about 10 minutes for one diner. One weekday afternoon was quiet; one holiday lunch the two-person tables were nearly full. Order by QR code.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 16 July 2020 (Tabelog).', background: 'Pancake café (Tabelog; 2026 reviews).', philosophy: 'Seasonal, natural ingredients (Tabelog listing).', specialty: 'Jiggly pancakes.',
      anecdotes: [
        { text: '"The freshly made pancakes were incredibly fluffy—so soft that they felt like a drink rather than food… The caramelized surface was crispy, and when I cut into it, I could see a hint of custard sauce inside." — June 2026.', source: R + 'B529780739/' },
        { text: '"The lunch plate included French toast, bacon and eggs, chips, salad, and canelé. (The contents may change occasionally.)" — August 2026, 512 Lunch Plate.', source: R + 'B534848489/' },
      ],
      japanese_sources_summary: '食べログ: 512 CAFE＆SWEETS、大阪市中央区心斎橋筋2-1-24 2F、心斎橋駅から378m、毎日9:00〜17:00、年中無休、2020年7月16日開店、予約可、カード・電子マネー・PayPay可、禁煙、10席、子ども連れ歓迎、テイクアウト、公式サイトあり。口コミ(2026年6〜10月): パンケーキの店、注文はスマホでQRコード、水はセルフ、ふわふわでぷるぷるのパンケーキ、表面はキャラメリゼ、中にカスタード、ホイップクリーム、バニラアイス、ベリーソース、ほろ苦いキャラメルソース、抹茶のパンケーキ1,800円 (税抜)、抹茶カスタードとマスカルポーネ、桃とマスカルポーネ、夏のチョコミント約2,600円、フレンチトーストとベーコンエッグの512ランチプレート、自家製レモネード、生地に兵庫県の Kannan Farm の卵、提供は約10分、平日の昼はすいている、休日の昼は2人席がほぼ満席、営業は10:00〜17:00 (L.O. 16:00) という声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B529780739/', R + 'B532084459/', R + 'B534848489/', R + 'B535517907/', R + 'B535577667/', R + 'B537685130/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code on your phone; self-service water (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-1-24 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目1番24号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535517907/', R + 'B532084459/'],
    price_note: 'Prices from July–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fluffy pancakes (custard, cream, vanilla ice cream, berry sauce)', '', 'Pancakes', 'ask', 'no', 'June–September 2026.', 'plain'),
      it('', '', 'Matcha pancakes', '¥1,800 + tax', 'Pancakes', 'ask', 'no', 'September 2026.', 'matcha'),
      it('', '', 'Chocolate-mint pancakes (summer)', 'about ¥2,600', 'Pancakes', 'ask', 'no', 'July 2026.', 'chocomint'),
      it('', '', '512 lunch plate (French toast, bacon and eggs)', '', 'Lunch', 'ask', 'no', 'August 2026.', 'lunch'),
    ] }, {
    cuisine: 'ぷるぷるのパンケーキのカフェ・表面はキャラメリゼで中にカスタード、ホイップクリーム、バニラアイス、ベリーソースのパンケーキ・抹茶カスタード、マスカルポーネ、あずきのキャラメルの抹茶のパンケーキ1,800円 (税抜)・桃とマスカルポーネのパンケーキ・夏のチョコミントのパンケーキ約2,600円・512ランチプレート: フレンチトースト、ベーコンエッグ、チップス、サラダ、カヌレ・自家製レモネード、アイスラテ、オリジナルのアイスコーヒー・生地に兵庫県の Kannan Farm の卵',
    neighborhood: '心斎橋筋2-1-24 2F、入口からすぐの階段を上がる。心斎橋駅6番出口から約3分',
    gf_detail: '要確認。グルテンの情報なし。パンケーキ、フレンチトースト、焼き菓子の店。',
    vegan_detail: 'ヴィーガンではありません。パンケーキの生地に卵 (2026年9月)、クリームとアイスも。',
    notes: '[カフェ・心斎橋筋、階段の上のぷるぷるパンケーキ] 心斎橋筋から入ってすぐの階段を上がった2階のパンケーキのカフェ。背が高くふるふる揺れるパンケーキで、飲みもののようにやわらかいという声も。定番は表面がカリッとキャラメリゼされ、中にカスタード、ホイップクリーム、バニラアイス、ベリーソース、甘さを調整するほろ苦いキャラメルソースつき。季節のものに抹茶カスタードとマスカルポーネの抹茶 (1,800円＋税)、桃とマスカルポーネ、夏のチョコミント。ランチはフレンチトーストとベーコンエッグのプレート。約10分で出てきたという声。平日の午後はすいていた、休日の昼は2人席がほぼ満席だったという声。注文はQRコードで。',
  });
}

// ================================================================ のの屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27112018/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'osaka_nonoya_sennichimae', name: 'のの屋 (Nono Ya)', category: 'OMNI',
    lat: 34.668074, lng: 135.504845, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; besides grilled chicken there is chicken tempura and chicken nanban, and seasonings are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken specialist.',
    hours_raw: 'Tue–Sun 18:00–24:00; closed Monday (Tabelog). Reservations taken; one Saturday every seat was booked (December 2024). Table charge ¥250 (Tabelog). Cards: AMEX only; no e-money or QR (Tabelog). Smoking allowed (Tabelog). Grilling at the table makes smoke, so wear clothes you don\'t mind smelling of it (June 2024). Opened 5 June 2019 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-6-6, just up from Nippombashi Stn exit B28; two entrances, counter at the front and a raised room at the back',
    cuisine: 'Grill-your-own Tajima chicken, yakiniku style, over a charcoal brazier at the table (16 seats: 8-seat counter and an 8-seat raised room) · chicken neck, thigh, skin and more, plus vegetables · older-hen meat; heart cuts · chicken sashimi platter; liver sashimi; chicken sashimi with tororo · chicken thigh tataki · chicken nanban; liver stir-fried with salt; chicken tempura · chicken hot pot and chicken shabu-shabu · green onion salad; bean sprout namul · rolled omelet · sake and shochu',
    website: null, gmaps: gm('のの屋 千日前'), menu_url: TB + 'dtlmenu/',
    notes: "[Chicken · grill-your-own Tajima chicken over charcoal, Sennichimae] A small chicken specialist a few minutes from Nippombashi where you grill fresh Tajima chicken yourself, yakiniku style, on a charcoal brazier set in front of you. Order neck, thigh, skin, chewy older-hen meat or rarer heart cuts, then fill in with the raw dishes several diners single out: a chicken sashimi platter, liver sashimi and chicken sashimi with tororo. The chicken nanban and salt-stir-fried liver are thick but tender, and there are chicken hot pots and shabu-shabu for groups. The counter at the front lets you talk with the staff; the raised room at the back can be fully booked. It gets smoky, so dress for it. Opens 18:00, closed Mondays; AMEX is the only card.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 June 2019 (Tabelog).', background: 'Chicken izakaya with table grills (Tabelog; 2023–2025 reviews).', philosophy: 'Tajima chicken sourced fresh (Tabelog listing; May 2025).', specialty: 'Grill-your-own chicken; chicken sashimi.',
      anecdotes: [
        { text: '"Yakitori is served on skewers, but the grilled chicken here is prepared in a yakiniku style… However, it does produce a lot of smoke." — June 2024.', source: R + 'B501720169/' },
        { text: '"The Chicken Sashimi is so rich and silky! Both the Chicken Nanban and the liver stir-fry are thick but incredibly tender." — December 2024.', source: R + 'B485905043/' },
      ],
      japanese_sources_summary: '食べログ: のの屋、大阪市中央区千日前1-6-6、日本橋駅から徒歩3分、火〜日18:00〜24:00、月曜定休、2019年6月5日開店、予約可、席料250円、カードはAMEXのみ、電子マネー・QR不可、喫煙可、16席 (カウンター8、座敷の個室8)、但馬の鶏を炭火で焼く鶏の焼肉、鍋やコースも。口コミ(2023年12月〜2025年5月): 卓上で自分で焼く、首、もも、皮、親鶏、kokoro no kori という心臓の部位、鶏の sashimi の盛り合わせ、レバーの sashimi、tororo をかけた鶏の sashimi、もも肉の tataki、chicken nanban、レバーの塩炒め、鶏の天ぷら、ねぎのサラダ、鶏とポテトのチーズ、鶏鍋と鶏の shabu-shabu、もやしの namul、卵焼き、カウンターでは店の人と話せる、奥の座敷は予約で埋まる、煙が多いので服に注意、入口がふたつ。',
      confidence: 'medium', sources: [TB, R + 'B478949770/', R + 'B479846217/', R + 'B480558678/', R + 'B485905043/', R + 'B501720169/', R + 'B506892579/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'You grill at the table; smoky (2024).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-6-6',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing current; most recent review May 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目6番6号 (go) 7m; same lot as Sennichimae Ueda Shoten (10.5 m), no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485905043/', R + 'B506892579/'],
    price_note: 'No prices in the reviews; about ¥3,000–6,000 per person (Tabelog, reviews) plus ¥250 table charge.', last_checked: TODAY, items: [
      it('', '', 'Chicken for grilling (neck, thigh, skin)', '', 'Grill', 'ask', 'no', 'May 2025.', 'grill'),
      it('', '', 'Chicken sashimi platter', '', 'Raw', 'ask', 'no', 'February 2024.', 'sashimi'),
      it('', '', 'Liver sashimi', '', 'Raw', 'ask', 'no', 'January 2024–May 2025.', 'liver'),
      it('', '', 'Chicken nanban', '', 'Dishes', 'no', 'no', 'December 2024.', 'nanban'),
      it('', '', 'Chicken hot pot', '', 'Hot pot', 'ask', 'no', 'February 2024.', 'nabe'),
    ] }, {
    cuisine: '但馬の鶏を卓上の炭火で自分で焼く鶏の焼肉 (16席: カウンター8、座敷8)・首、もも、皮など、野菜も・親鶏、心臓の部位・鶏の sashimi の盛り合わせ、レバーの sashimi、tororo をかけた鶏の sashimi・もも肉の tataki・chicken nanban、レバーの塩炒め、鶏の天ぷら・鶏鍋と鶏の shabu-shabu・ねぎのサラダ、もやしの namul・卵焼き・日本酒、焼酎',
    neighborhood: '千日前1-6-6、日本橋駅B28出口を上がってすぐ。入口がふたつ、手前にカウンター、奥に座敷',
    gf_detail: '要確認。グルテンの情報なし。焼き鶏のほか鶏の天ぷらや chicken nanban もあり、味つけの説明なし。',
    vegan_detail: 'ヴィーガンではありません。鶏料理の専門店。',
    notes: '[鶏料理・千日前、但馬の鶏を炭火で自分で焼く] 日本橋駅から徒歩3分の小さな鶏料理の店で、新鮮な但馬の鶏を目の前の炭火で焼肉のように自分で焼く。首、もも、皮、歯ごたえのある親鶏、珍しい心臓の部位などを頼み、鶏の sashimi の盛り合わせ、レバーの sashimi、tororo をかけた鶏の sashimiといった生の料理も。chicken nanban とレバーの塩炒めは厚いのにやわらかく、グループには鶏鍋や shabu-shabu も。手前のカウンターでは店の人と話せ、奥の座敷は予約で埋まることも。煙が出るので服装に注意。18時から、月曜定休。カードはAMEXのみ。',
  });
}

// ================================================================ アンティカ オステリア ダル スペッロ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27105398/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.bistro-olive.jp/sp/osteria.html';
  const H = day(['11:30', '15:00'], ['18:00', '22:30']);
  put({
    id: 'osaka_antica_osteria_dal_spello_namba', name: 'アンティカ オステリア ダル スペッロ (ANTICA OSTERIA DAL SPELLO)', category: 'OMNI',
    lat: 34.666693, lng: 135.499329, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the courses center on handmade pasta and focaccia, with carpaccio, soups, fish and roast chicken alongside.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Seasonal vegetable dishes and soups appear in the courses; nothing described as vegan.',
    hours_raw: 'Mon, Wed, Fri–Sun and holidays 11:30–15:00 (food last order 14:30) and 18:00–22:30 (food last order 21:30); Thursday 12:00–14:00; closed Tuesday and the 1st and 3rd Wednesday (Tabelog). Cash only: no cards, e-money or QR (Tabelog). No service or table charge (Tabelog). Non-smoking (Tabelog). Opened 9 June 2018 (Tabelog).',
    hours: { 0: H, 2: H, 3: day(['12:00', '14:00']), 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba 4-7-5, Koei Bldg 1F — 3 min from Namba Stn exit 13',
    cuisine: 'Small Italian osteria (10 seats: 4 at the counter, two tables) · handmade chewy pasta · lunch ¥1,800; lunch course ¥2,500 (reserve) · lunch course with a drink ¥4,800: appetizers with crab, onion and corn soup, onion focaccia, pasta with oysters and bottarga, pan-seared sea bream, coconut tiramisu · Shogoin turnip soup; oyster pasta; roast chicken · carpaccio; seafood and seasonal vegetables; meat dishes · 30+ Italian wines',
    website: OWN, gmaps: gm('アンティカ オステリア ダル スペッロ'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · a 10-seat Namba osteria with handmade pasta, cash only] A tiny Italian restaurant a few minutes from Namba Station, black and wood inside, with four counter seats and two tables, sister to SPELLO in Sakaisuji-Honmachi. The chewy handmade pasta comes up in several reviews: oyster and bottarga pasta with three big oysters, oyster pasta in January. Lunch is ¥1,800, a reserved lunch course ¥2,500, and a fuller ¥4,800 course with a drink runs from crab appetizers and onion-corn soup with fresh onion focaccia to sea bream and coconut tiramisu. Over 30 Italian wines, with pairing suggestions. One cook runs the kitchen, so dishes come at a leisurely pace; tables are close. One diner rated the cooking average but the value excellent. Cash only; closed Tuesdays and the 1st and 3rd Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 June 2018 (Tabelog); sister restaurant of SPELLO in Sakaisuji-Honmachi (January 2026 review).', background: 'Small Italian osteria with one cook in the kitchen (2026 reviews).', philosophy: null, specialty: 'Handmade pasta; Italian wine.',
      anecdotes: [
        { text: '"…the classic homemade pasta, known for its chewy texture, paired excellently with the sauce… With over 30 varieties of Italian wines available, the staff also suggested options that complemented our dishes…" — January 2026, dinner.', source: R + 'B521096675/' },
        { text: '"The pasta with oysters and bottarga had three large oysters and was pleasantly spicy and delicious." — May 2026, lunch with one drink ¥4,800.', source: R + 'B532214187/' },
      ],
      japanese_sources_summary: '食べログ: アンティカ オステリア ダル スペッロ、大阪市中央区難波4-7-5 光栄ビル 1F、なんば駅13番出口から徒歩3分、月・水・金〜日・祝11:30〜15:00 (料理L.O. 14:30)、18:00〜22:30 (料理L.O. 21:30)、木12:00〜14:00、火曜と第1・第3水曜休み、2018年6月9日開店、予約可、現金のみ、サービス料・チャージなし、禁煙、10席 (カウンター4、テーブル2)、ワインにこだわり、公式サイトあり。口コミ(2026年1〜7月): 堺筋本町の SPELLO の姉妹店、もちもちの手打ちパスタ、カルパッチョ、海鮮と季節の野菜、肉料理、イタリアワイン30種以上、ランチ1,800円、要予約のランチコース2,500円、ドリンクつき4,800円 (蟹の入った前菜、玉ねぎとコーンのスープ、玉ねぎのフォカッチャ、牡蠣と bottarga のパスタ、鯛のポワレ、ココナッツのティラミス)、聖護院かぶのスープ、牡蠣のパスタ、ローストチキン、厨房はひとりで提供はゆっくり、席の間は狭め、コスパはいいが味は普通という声。',
      confidence: 'medium', sources: [TB, OWN, R + 'B521096675/', R + 'B521179516/', R + 'B521411846/', R + 'B529737454/', R + 'B531223195/', R + 'B532214187/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Dishes explained at the table; leisurely pace (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-7-5 光栄ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波四丁目7番5号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521179516/', R + 'B529737454/', R + 'B532214187/'],
    price_note: 'Prices from January–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch', '¥1,800', 'Lunch', 'ask', 'ask', 'January 2026.', 'lunch'),
      it('', '', 'Lunch course (reserve)', '¥2,500', 'Lunch', 'ask', 'ask', 'June 2026.', 'lunch_course'),
      it('', '', 'Lunch course with one drink', '¥4,800', 'Lunch', 'ask', 'no', 'May 2026.', 'lunch_full'),
      it('', '', 'Pasta with oysters and bottarga', '', 'Pasta', 'no', 'no', 'May 2026.', 'oyster_pasta'),
    ] }, {
    cuisine: '小さなイタリアンのオステリア (10席: カウンター4、テーブル2)・もちもちの手打ちパスタ・ランチ1,800円、要予約のランチコース2,500円・ドリンクつきのランチコース4,800円: 蟹の入った前菜、玉ねぎとコーンのスープ、玉ねぎのフォカッチャ、牡蠣と bottarga のパスタ、鯛のポワレ、ココナッツのティラミス・聖護院かぶのスープ、牡蠣のパスタ、ローストチキン・カルパッチョ、海鮮と季節の野菜、肉料理・イタリアワイン30種以上',
    neighborhood: '難波4-7-5 光栄ビル 1F。なんば駅13番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースは手打ちパスタとフォカッチャが中心で、カルパッチョ、スープ、魚、ローストチキンも。',
    vegan_detail: '要確認。コースに季節の野菜やスープはあるが、ヴィーガンの記載なし。',
    notes: '[イタリアン・難波、10席の手打ちパスタのオステリア、現金のみ] なんば駅から数分の小さなイタリアンで、黒と木を基調にカウンター4席とテーブル2卓。堺筋本町の SPELLO の姉妹店。もちもちの手打ちパスタは複数の口コミで話題に、大きな牡蠣が3つ入った牡蠣と bottarga のパスタ、1月の牡蠣のパスタなど。ランチは1,800円、要予約のランチコースは2,500円、ドリンクつき4,800円のコースは蟹の前菜、玉ねぎとコーンのスープと焼きたての玉ねぎのフォカッチャから、鯛、ココナッツのティラミスまで。イタリアワインは30種以上で、料理に合わせて提案も。厨房はひとりなので料理はゆっくり、席の間は狭め。味は普通だがコスパがいいという声も。現金のみ。火曜と第1・第3水曜休み。',
  });
}

// ================================================================ 昭和双子焼き
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27052128/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['19:00', '02:00']); const WE = day(['17:00', '02:00']);
  put({
    id: 'osaka_showa_futago_yaki_higashishinsaibashi', name: '昭和双子焼き (Showa Futago Yaki)', category: 'OMNI',
    lat: 34.671045, lng: 135.504297, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu is gimbap, sundae, bulgogi, jeon, Korean oden and skewers with a range of sauces.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Several kinds of gimbap; fillings and broths are not described.',
    hours_raw: 'Mon–Fri 19:00–02:00; Sat, Sun and holidays 17:00–02:00; last order 01:30; open year-round (Tabelog). Appetizer charge ¥250 (Tabelog). Cards accepted; no e-money or QR (Tabelog). Smoking allowed (Tabelog). Pets allowed; takeout, and leftovers can be taken home (Tabelog; August 2024). Formerly 双子のり巻き (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-6-1, street level — 10 min from Nagahoribashi or Shinsaibashi Stn',
    cuisine: 'Showa-retro Korean street-stall bar (8 seats, counter and standing) · gimbap in many kinds, the house draw; half or whole rolls · assorted sundae · bulgogi · jeon · Korean oden · skewers with a choice of sauces · Korean beer; Chamisul; sake and whisky',
    website: null, gmaps: gm('昭和双子焼き 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Korean · an 8-seat Showa-retro Korean bar for gimbap and sundae, Higashi-Shinsaibashi] A street-level Korean bar in Higashi-Shinsaibashi, run by two people and styled like a 1970s–80s Showa izakaya crossed with a Korean street stall, open until 2 am. Gimbap is the draw, in many varieties; one diner ordered a half roll and got a whole one. One diner calls it a rare find for sundae, Korean blood sausage; there's also bulgogi, jeon and Korean oden that one diner calls a must with Korean beer or Chamisul. One diner found prices well above Korea's. Eight seats around the counter, friendly service, smoking allowed and pets welcome; leftovers can go home with you. English and Korean menus (Tabelog). Opens 19:00 on weekdays, 17:00 at weekends.",
    chef_bio: { chef_name: null, roles: [], origin: 'Formerly 双子のり巻き (Tabelog).', background: 'Korean bar run by two people (November 2024 review; Tabelog).', philosophy: null, specialty: 'Gimbap; sundae; Korean oden.',
      anecdotes: [
        { text: '"It\'s rare to find a place in Japan that serves sundae… In fact, the gimbap is the main attraction here! There are many different types of gimbap available!" — August 2024.', source: R + 'B492128542/' },
        { text: '"The Korean oden is absolutely delicious, so I highly recommend trying it when you go! It pairs perfectly with Korean beer and Chamisul as well." — February 2025.', source: R + 'B507822812/' },
      ],
      japanese_sources_summary: '食べログ: 昭和双子焼き (旧店名 双子のり巻き)、大阪市中央区東心斎橋2-6-1、長堀橋駅・心斎橋駅から徒歩10分、月〜金19:00〜翌2:00、土日祝17:00〜翌2:00 (L.O. 1:30)、年中無休、お通し250円、カード可、電子マネー・QR不可、喫煙可、8席 (カウンター、立ち飲み)、ペット可、テイクアウト、英語・韓国語のメニュー、写真つきメニュー、昭和の居酒屋の雰囲気で oden、串、韓国料理、日本酒、ウイスキー。口コミ(2024年6月〜2026年8月): 韓国の屋台のような雰囲気、gimbap がいちばんの目当てで種類が多い、半分を頼んだら1本出てきた、sundae の盛り合わせ、bulgogi、jeon、韓国の oden、韓国のビールと Chamisul、残りは持ち帰れる、韓国より値段はかなり高いという声、スタッフが親しみやすい。',
      confidence: 'medium', sources: [TB, R + 'B487689685/', R + 'B492128542/', R + 'B503792075/', R + 'B507822812/', R + 'B516749954/', R + 'B533986578/'] },
    cultural_comfort: { level: 'english', note: 'English and Korean menus with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-6-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; review dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目6番1号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B492128542/', R + 'B516749954/'],
    price_note: 'No prices in the reviews; about ¥2,000–4,000 per person (Tabelog, reviews) plus ¥250 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Gimbap (half or whole)', '', 'Korean', 'ask', 'ask', 'June 2024–March 2025.', 'gimbap'),
      it('', '', 'Assorted sundae', '', 'Korean', 'ask', 'no', 'August–November 2024.', 'sundae'),
      it('', '', 'Bulgogi', '', 'Korean', 'ask', 'no', 'June 2024.', 'bulgogi'),
      it('', '', 'Korean oden', '', 'Korean', 'ask', 'ask', 'February 2025.', 'oden'),
    ] }, {
    cuisine: '昭和レトロな韓国の屋台風のバー (8席、カウンターと立ち飲み)・いちばんの目当ては種類の多い gimbap、半分か1本・sundae の盛り合わせ・bulgogi・jeon・韓国の oden・ソースを選べる串・韓国のビール、Chamisul、日本酒、ウイスキー',
    neighborhood: '東心斎橋2-6-1、通りに面した店。長堀橋駅・心斎橋駅から徒歩10分',
    gf_detail: '要確認。グルテンの情報なし。gimbap、sundae、bulgogi、jeon、韓国の oden、いろいろなソースの串。',
    vegan_detail: '要確認。gimbap は種類が多いが、具やスープの説明なし。',
    notes: '[韓国料理・東心斎橋、gimbap と sundae の8席の昭和レトロなバー] 東心斎橋の通りに面した韓国のバーで、ふたりで営み、70〜80年代の昭和の居酒屋と韓国の屋台を合わせたような雰囲気。深夜2時まで。目当ては種類の多い gimbap で、半分を頼んだら1本出てきたという声も。韓国の腸詰め sundae が食べられる珍しい店という声も。bulgogi、jeon、韓国のビールや Chamisul に合うという韓国の oden も。韓国より値段はかなり高いという声も。カウンターに8席、接客は親しみやすく、喫煙可、ペット可、残りは持ち帰れる。英語・韓国語のメニューあり (食べログ)。平日は19時、週末は17時から。',
  });
}

save();
