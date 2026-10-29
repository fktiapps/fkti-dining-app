// Osaka sweep (2-mile circle around Dotonbori), batch 167 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + Fiore ~フィオーレ~ (14-seat Italian, courses then a late bar; Shinsaibashi-suji)
//   + French Wine Bar UN (16-seat French wine bar to 3 am; Higashi-Shinsaibashi)
//   + 和ベーカリーぱんどら屋 (bakery for Japanese tea, puppy-shaped buns, eat-in upstairs; Amerikamura)
//   + 鹿肉料理専門店 バトックス (venison izakaya, lunch and to 4 am; Sennichimae)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 167);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Fiore ~フィオーレ~
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27092740/'; const R = TB + 'dtlrvwlst/'; const IG = 'https://instagram.com/fiore213bld';
  put({
    id: 'osaka_fiore_shinsaibashi', name: 'Fiore ~フィオーレ~ (Fiore)', category: 'OMNI',
    lat: 34.671683, lng: 135.501864, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the courses include handmade pasta and sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: courses built on seafood, duck, Wagyu and pork; nothing described as vegan.',
    hours_raw: 'Daily 18:00–01:00 (sometimes to 02:00; ask); irregular closures (Tabelog). Courses only at dinner; after 21:30 the à la carte menu opens and it works as a bar (Tabelog; March 2025). Service charge ¥550 per person (Tabelog). Cards accepted; no e-money or QR (Tabelog). Non-smoking. BYO drinks allowed (Tabelog). Opened 29 April 2016 (Tabelog).',
    hours: ALL(day(['18:00', '01:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-1-3, 213bld 2F, at the end of a back alley one street behind Europe-dori — 5 min from Shinsaibashi Stn',
    cuisine: 'Italian courses at a 6-seat counter and tables (14 seats) · Kawachi duck carpaccio (house specialty) · seven-course dinner: seasonal oysters, charcoal-grilled anago, handmade squid-ink tagliolini, charcoal-grilled Wagyu sirloin cap with truffle sauce · Mount Fuji salmon; Kagoshima black pork · squid-ink pasta and desserts à la carte after 21:30 · wine, cocktails, coffee',
    website: IG, gmaps: gm('Fiore フィオーレ 心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · a 14-seat alley Italian that turns into a late bar, Shinsaibashi] A small second-floor Italian restaurant at the end of a Shinsaibashi back alley, with warm wood, soft light and about 14 seats at the counter and tables. Dinner is courses only: a November 2025 seven-course meal ran from seasonal oysters through charcoal-grilled anago and handmade squid-ink tagliolini to Wagyu sirloin cap with truffle sauce, and the house specialty is a Kawachi duck carpaccio. After 21:30 it opens an à la carte menu and works as a bar until 1 am, good for squid-ink pasta and dessert as a second stop. Two diners praise the plating, one the chef's funny conversation; another found the course price on the high side. About ¥8,000–15,000; ¥550 service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 April 2016 (Tabelog).', background: 'Italian restaurant and late bar (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Italian courses; Kawachi duck carpaccio; squid-ink pasta.',
      anecdotes: [
        { text: '"During dinner time, the restaurant offers only course meals, but after 9:30 PM, it can be used as a bar… the squid ink pasta was particularly exquisite." — March 2025.', source: R + 'B503500550/' },
        { text: '"…seasonal oyster appetizers, followed by charcoal-grilled Den-suke anago (conger eel), handmade squid ink tagliolini, and a luxurious charcoal-grilled Wagyu sirloin cap with truffle sauce." — November 2025, seven-course dinner.', source: R + 'B516846701/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): Fiore ~フィオーレ~、大阪市中央区心斎橋筋2-1-3 213bld 2F、心斎橋駅から徒歩5分、ヨーロッパ通りの一本裏の路地の突き当たり、毎日18:00〜1:00 (2:00まで営業の日も、要問い合わせ)、不定休、2016年4月29日開店、サービス料一人550円、カード可、電子マネー・QR不可、禁煙、14席 (カウンター6、テーブル8)、持ち込み可、21時半からはアラカルトも、名物は河内鴨のカルパッチョ。口コミ(2025年3月〜2026年9月): ディナーはコースのみ、21時半以降はバーとして、イカ墨のパスタ、季節の牡蠣、炭火焼きの anago、手打ちのイカ墨タリオリーニ、和牛のサーロインキャップのトリュフソース、富士山サーモン、鹿児島の黒豚、盛りつけが美しい、シェフの話がおもしろい、コースはやや高めという声、予算8,000〜15,000円。',
      confidence: 'medium', sources: [TB, IG, R + 'B503500550/', R + 'B510800976/', R + 'B516846701/', R + 'B521388468/', R + 'B535652574/', R + 'B535811643/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses at dinner, bar menu after 21:30; solo diners welcome (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-1-3 213bld 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目1番3号 (go) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B516846701/'],
    price_note: 'No dish prices in the reviews; about ¥8,000–15,000 per person (Tabelog, reviews) plus ¥550 service.', last_checked: TODAY, items: [
      it('', '', 'Kawachi duck carpaccio', '', 'Courses', 'ask', 'no', 'Tabelog listing.', 'duck'),
      it('', '', 'Seven-course dinner', '', 'Courses', 'ask', 'no', 'November 2025.', 'course'),
      it('', '', 'Squid-ink pasta (bar menu after 21:30)', '', 'À la carte', 'ask', 'no', 'March 2025.', 'nero'),
    ] }, {
    cuisine: '6席のカウンターとテーブルでイタリアンのコース (14席)・名物の河内鴨のカルパッチョ・7品のコース: 季節の牡蠣、炭火焼きの anago、手打ちのイカ墨タリオリーニ、和牛のサーロインキャップの炭火焼きトリュフソース・富士山サーモン、鹿児島の黒豚・21時半からはイカ墨のパスタやデザートをアラカルトで・ワイン、カクテル、コーヒー',
    neighborhood: '心斎橋筋2-1-3 213bld 2F、ヨーロッパ通りの一本裏の路地の突き当たり。心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。コースには手打ちパスタやソースも。',
    vegan_detail: '実質ヴィーガンではありません。海鮮、鴨、和牛、豚が中心のコース。ヴィーガンの記載なし。',
    notes: '[イタリアン・心斎橋、夜遅くはバーになる路地の14席] 心斎橋の裏路地の突き当たり、2階にある小さなイタリアンで、木のぬくもりとやわらかな明かり、カウンターとテーブルで約14席。ディナーはコースのみで、2025年11月の7品のコースは季節の牡蠣から炭火焼きの anago、手打ちのイカ墨タリオリーニ、トリュフソースの和牛のサーロインキャップへ。名物は河内鴨のカルパッチョ。21時半からはアラカルトも頼めるバーになり、深夜1時まで。2軒目にイカ墨のパスタとデザートも。盛りつけの美しさをほめる声、シェフの話がおもしろいという声、コースはやや高めという声も。予算8,000〜15,000円ほど、サービス料550円。',
  });
}

// ================================================================ French Wine Bar UN
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126173/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '03:00']);
  put({
    id: 'osaka_french_wine_bar_un_higashishinsaibashi', name: 'French Wine Bar UN', category: 'OMNI',
    lat: 34.671716, lng: 135.502618, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu includes gratin, pasta, pâté and cheesecake alongside carpaccio, roast beef and grilled vegetables.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Grilled vegetables from Kobe’s Nishi Ward are on the menu; nothing described as vegan.',
    hours_raw: 'Wed–Sun 17:00–03:00; closed Monday and Tuesday (Tabelog). Charge ¥1,000 per person, including an appetizer (Tabelog). Cards accepted; no e-money or QR (Tabelog). Non-smoking (Tabelog). Opened 1 August 2021 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-8-23, Ikeda Kaikan Bldg 3F, in a building of bars and snack bars — 5 min from Shinsaibashi Stn',
    cuisine: 'Casual French small plates and a wide wine list (16 seats, counter and tables) · course from ¥3,000; sharing set for two from ¥6,600 · prosciutto with seasonal fruit ¥1,210 · carpaccio of the day (yellowtail) ¥1,650 · grilled vegetables from Kobe’s Nishi Ward ¥1,650 · gratin of the day ¥1,320 · roast beef with black pepper and pumpkin sauce ¥4,180 · squid-ink pasta ¥1,320 · roast duck breast; pâté de campagne · Basque cheesecake ¥880; crème brûlée · non-alcoholic grape juice served in a wine glass',
    website: null, gmaps: gm('French Wine Bar UN 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[French wine bar · small plates and rare wines to 3 am, Higashi-Shinsaibashi] A casual French wine bar on the third floor of a Higashi-Shinsaibashi building full of bars, open until 3 am, so it works for dinner or a late second stop. The wine list runs wide, with rare labels, and non-drinkers get grape juice in a wine glass. Plates are priced to share: prosciutto with seasonal fruit (¥1,210), a carpaccio of the day, grilled vegetables from Kobe's Nishi Ward (¥1,650), a gratin of the day, squid-ink pasta (¥1,320), and a tender pink roast beef with black pepper and pumpkin sauce (¥4,180); finish with Basque cheesecake (¥880). There's a course from ¥3,000 and a sharing set for two from ¥6,600. ¥1,000 charge with an appetizer. Closed Mondays and Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 August 2021 (Tabelog).', background: 'French wine bar (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Wine with casual French plates; roast beef.',
      anecdotes: [
        { text: '"The roast beef, with its beautiful pink cross-section, was perfectly cooked and incredibly tender… It paired wonderfully with the black pepper and pumpkin sauce." — December 2025, roast beef ¥4,180.', source: R + 'B518765640/' },
        { text: '"The sharing set starts at just JPY 6600 for two people!" — December 2025.', source: R + 'B518769065/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): French Wine Bar UN、大阪市中央区東心斎橋2-8-23 イケダ会館ビル 3F、心斎橋駅から徒歩5分、水〜日17:00〜翌3:00、月・火定休、2021年8月1日開店、チャージ一人1,000円 (お通しあり)、カード可、電子マネー・QR不可、禁煙、16席、旬の素材の前菜、鴨胸のロースト、パテ・ド・カンパーニュ、シェアセット、ワイングラスで飲むノンアルコールのぶどうジュース。口コミ(2025年12月〜2026年8月): バーやスナックの入るビルの3階、季節のフルーツと生ハム1,210円、本日のカルパッチョ (ぶり) 1,650円、神戸市西区の焼き野菜1,650円、本日のグラタン1,320円、ローストビーフ4,180円 (黒こしょうとかぼちゃのソース)、イカ墨のパスタ1,320円、バスクチーズケーキ880円、クレームブリュレ、3,000円のコース、2人で6,600円からのシェアセット、ワインの種類が多く珍しい銘柄も。',
      confidence: 'medium', sources: [TB, R + 'B518765640/', R + 'B518769065/', R + 'B518891504/', R + 'B519437504/', R + 'B525267455/', R + 'B534332739/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats for solo drinkers; non-alcoholic grape juice (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-8-23 イケダ会館ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目8番23号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B518765640/', R + 'B518769065/'],
    price_note: 'Prices from December 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Prosciutto with seasonal fruit', '¥1,210', 'Plates', 'ask', 'no', 'December 2025.', 'prosciutto'),
      it('', '', 'Carpaccio of the day (yellowtail)', '¥1,650', 'Plates', 'ask', 'no', 'December 2025.', 'carpaccio'),
      it('', '', 'Grilled vegetables from Kobe’s Nishi Ward', '¥1,650', 'Plates', 'ask', 'ask', 'December 2025.', 'vegetables'),
      it('', '', 'Roast beef, black pepper and pumpkin sauce', '¥4,180', 'Plates', 'ask', 'no', 'December 2025.', 'roast_beef'),
      it('', '', 'Squid-ink pasta', '¥1,320', 'Plates', 'no', 'no', 'December 2025.', 'nero'),
      it('', '', 'Basque cheesecake', '¥880', 'Dessert', 'ask', 'no', 'December 2025.', 'cheesecake'),
    ] }, {
    cuisine: '気軽なフレンチの小皿と豊富なワイン (16席、カウンターとテーブル)・3,000円からのコース、2人で6,600円からのシェアセット・季節のフルーツと生ハム1,210円・本日のカルパッチョ (ぶり) 1,650円・神戸市西区の焼き野菜1,650円・本日のグラタン1,320円・黒こしょうとかぼちゃのソースのローストビーフ4,180円・イカ墨のパスタ1,320円・鴨胸のロースト、パテ・ド・カンパーニュ・バスクチーズケーキ880円、クレームブリュレ・ワイングラスで飲むノンアルコールのぶどうジュース',
    neighborhood: '東心斎橋2-8-23 イケダ会館ビル 3F、バーやスナックの入るビル。心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。カルパッチョ、ローストビーフ、焼き野菜のほか、グラタン、パスタ、パテ、チーズケーキも。',
    vegan_detail: '要確認。神戸市西区の焼き野菜はあるが、ヴィーガンの記載なし。',
    notes: '[フレンチワインバー・東心斎橋、深夜3時まで小皿と珍しいワイン] 東心斎橋のバーの入るビルの3階にある気軽なフレンチのワインバーで、深夜3時まで。食事にも2軒目にも。ワインは種類が多く珍しい銘柄も、飲めない人にはワイングラスでぶどうジュース。料理はシェア向きで、季節のフルーツと生ハム (1,210円)、本日のカルパッチョ、神戸市西区の焼き野菜 (1,650円)、本日のグラタン、イカ墨のパスタ (1,320円)、黒こしょうとかぼちゃのソースのやわらかいローストビーフ (4,180円)、しめにバスクチーズケーキ (880円)。3,000円からのコースと、2人で6,600円からのシェアセットも。チャージ1,000円 (お通しつき)。月・火定休。',
  });
}

// ================================================================ 和ベーカリーぱんどら屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27146992/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '20:00']);
  put({
    id: 'osaka_wabekari_pandoraya_nishishinsaibashi', name: '和ベーカリーぱんどら屋 (Wabekari Pandoraya)', category: 'OMNI',
    lat: 34.671026, lng: 135.499223, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bakery of buns, croissants and Danish pastries; no gluten-free items described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: custard and cream fillings, a quail-egg yakisoba bun and a chicken sandwich; nothing described as vegan.',
    hours_raw: 'Tue–Sun and holidays 10:00–20:00; closed Monday and the day after a holiday (Tabelog). Two reviews (August 2025, May 2026) give 10:00–20:00 daily, so check Mondays. Opened 18 September 2024 (Tabelog). Cards, e-money and QR accepted (Tabelog). Bakery on 1F, eat-in on 2F with outlets and Wi-Fi (May 2026); claim a seat upstairs before ordering (August 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-9-37, in Amerikamura — about 420 m from Osaka Namba Stn',
    cuisine: 'Bakery built around Japanese tea, with an eat-in floor (15 seats) · puppy bun ¥330 (custard head, chocolate or hojicha body) · Shiba Inu bun ¥330 (weekends) · pink puppy bun (strawberry jam, per one diner) · dango Danish ¥300; mitarashi dango bun · salt croissant; strawberry croissant; matcha croissant; matcha Danish · melon bread with a face; tricolor Pandora melon bread · Kyoto matcha anpan in a clover shape · yakisoba bun topped with a fried quail egg · honey-mustard chicken sandwich ¥490 · tea of the day to taste; ¥200 off Japanese tea ordered with bread; peach tea',
    website: null, gmaps: gm('和ベーカリーぱんどら屋'), menu_url: null,
    notes: "[Bakery café · puppy-shaped buns and Japanese tea, Amerikamura] A small bakery in Amerikamura whose idea is bread that goes with Japanese tea: buy downstairs, then eat upstairs in a calm, Japanese-style room with cushions, outlets and Wi-Fi. The star is the puppy bun (¥330), custard in the head and chocolate or hojicha cream in the body, with a Shiba Inu version (weekends only, per one diner) and a pink one that one diner took to hold strawberry jam. Also a dango Danish (¥300), a mitarashi dango bun, a clover-shaped Kyoto matcha anpan, a melon bread with a face and a yakisoba bun under a fried quail egg. There's a tea of the day to taste, and Japanese tea ordered with bread is ¥200 off. Buns are small and cheap, so it's easy to try two or three. Claim a seat upstairs before ordering.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 September 2024 (Tabelog).', background: 'Bakery with an eat-in floor (Tabelog; 2026 reviews).', philosophy: 'Bread that pairs with Japanese tea (May–June 2026 reviews).', specialty: 'Puppy-shaped custard buns.',
      anecdotes: [
        { text: '"The concept of this bakery is \'bread that pairs well with Japanese tea.\' [There is] a tasting of the tea of the day, and if you order a set with tea, you can enjoy a discount of JPY 200 on your drink." — June 2026.', source: R + 'B511194861/' },
        { text: '"The head is filled with custard, while the body has chocolate cream, allowing you to enjoy two different flavors." — May 2026, Puppy Bread ¥330.', source: R + 'B528792854/' },
      ],
      japanese_sources_summary: '食べログ: 和ベーカリーぱんどら屋、大阪市中央区西心斎橋2-9-37、大阪難波駅から419m、火〜日・祝10:00〜20:00、月曜と祝日の翌日休み、2024年9月18日開店、カード・電子マネー・QR可、15席。口コミ(2025年8月〜2026年9月): アメリカ村のパン屋、日本茶に合うパンがコンセプト、本日のお茶の試飲、パンと一緒に日本茶を頼むと200円引き、1階がパン売り場で2階がイートイン (和の雰囲気、クッション、電源、Wi-Fi)、子犬のパン330円 (頭はカスタード、体はチョコか hojicha)、週末だけの柴犬のパン330円、いちごジャム入りらしいピンクの子犬、dango のデニッシュ300円、mitarashi dango のパン、塩クロワッサン、いちごのクロワッサン、抹茶のクロワッサン、抹茶のデニッシュ、顔のあるメロンパン、3色の Pandora メロンパン、四つ葉の形の京都抹茶 anpan、うずらの目玉焼きをのせた yakisoba のパン、ハニーマスタードチキンのサンド490円、ピーチティー、2階は先に席を取ってから注文を。',
      confidence: 'medium', sources: [TB, R + 'B511194861/', R + 'B528792854/', R + 'B529988589/', R + 'B534473936/', R + 'B536003921/', R + 'B537759980/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay downstairs; drinks brought up to the eat-in floor (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-9-37',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目9番37号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528792854/', R + 'B511194861/'],
    price_note: 'Prices from May–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Puppy bun (custard and chocolate)', '¥330', 'Bread', 'no', 'no', 'May–September 2026.', 'puppy'),
      it('', '', 'Shiba Inu bun (weekends)', '¥330', 'Bread', 'no', 'no', 'May–June 2026.', 'shiba'),
      it('', '', 'Dango Danish', '¥300', 'Bread', 'no', '', 'May 2026.', 'dango'),
      it('', '', 'Honey-mustard chicken sandwich', '¥490', 'Bread', 'no', 'no', 'May 2026.', 'sandwich'),
      it('', '', 'Kyoto matcha anpan', '', 'Bread', 'no', '', 'August 2026.', 'anpan'),
    ] }, {
    cuisine: '日本茶に合うパンのベーカリー、2階にイートイン (15席)・子犬のパン330円 (頭はカスタード、体はチョコか hojicha)・週末の柴犬のパン330円・いちごジャム入りらしいピンクの子犬・dango のデニッシュ300円、mitarashi dango のパン・塩クロワッサン、いちごのクロワッサン、抹茶のクロワッサン、抹茶のデニッシュ・顔のあるメロンパン、3色の Pandora メロンパン・四つ葉の形の京都抹茶 anpan・うずらの目玉焼きをのせた yakisoba のパン・ハニーマスタードチキンのサンド490円・本日のお茶の試飲、パンと一緒に日本茶を頼むと200円引き、ピーチティー',
    neighborhood: '西心斎橋2-9-37、アメリカ村。大阪難波駅から約420m',
    gf_detail: 'グルテンフリーではありません。パン、クロワッサン、デニッシュの店で、グルテンフリーの品の記載なし。',
    vegan_detail: '実質ヴィーガンではありません。カスタードやクリーム、うずらの卵をのせた yakisoba のパン、チキンのサンド。ヴィーガンの記載なし。',
    notes: '[ベーカリーカフェ・アメリカ村、子犬の形のパンと日本茶] アメリカ村の小さなパン屋で、コンセプトは日本茶に合うパン。1階で買って、2階のクッションのある和の部屋で食べられ、電源とWi-Fiも。看板は子犬のパン (330円) で、頭にカスタード、体にチョコか hojicha のクリーム。週末だけという柴犬、いちごジャム入りらしいピンクの子犬も。dango のデニッシュ (300円)、mitarashi dango のパン、四つ葉の形の京都抹茶 anpan、顔のあるメロンパン、うずらの目玉焼きをのせた yakisoba のパンも。本日のお茶の試飲があり、パンと一緒に日本茶を頼むと200円引き。小ぶりで安いので2〜3個試しやすい。2階は先に席を取ってから注文を。',
  });
}

// ================================================================ 鹿肉料理専門店 バトックス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27096096/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:00', '14:00'], ['18:00', '04:00']); const SU = day(['18:00', '04:00']);
  put({
    id: 'osaka_buttocks_venison_sennichimae', name: '鹿肉料理専門店 バトックス (Buttocks)', category: 'OMNI',
    lat: 34.667553, lng: 135.504526, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; venison roast and carpaccio are on the menu, alongside a breaded cutlet, fried gyoza, mazesoba and garlic toast.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a venison specialist.',
    hours_raw: 'Mon–Sat and holidays 11:00–14:00 and 18:00–04:00; Sunday 18:00–04:00; food last order 03:00, drinks 04:00; open year-round (Tabelog). Dinner appetizer/service charge ¥500 (Tabelog). The second floor can be booked as a private room for 5 or more (Tabelog). Children welcome (Tabelog). Cards, e-money and QR accepted (Tabelog). Designated smoking area (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WK, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-4-19, Nakajima Bldg 1F, on the Aioibashi-suji shopping street — 5 min from Namba Stn',
    cuisine: 'Venison specialist izakaya and bar (20 seats) · venison cutlet (house specialty) · lunch course ¥2,500: venison cutlet, low-temperature roast and venison fried rice · deer bread: roast venison on garlic toast · venison rillettes on baguette; potato salad with rillettes · venison carpaccio · roast venison with salt, fried onions and sauce · fried venison gyoza · venison mazesoba with a choice of spice; carbonara · venison yaki-shabu course, 7 dishes, ¥7,500 (book ahead) · wine, sake and shochu',
    website: null, gmaps: gm('鹿肉料理専門店 バトックス'), menu_url: TB + 'dtlmenu/',
    notes: "[Venison · a deer-meat izakaya open to 4 am, Sennichimae] A small venison specialist on the Aioibashi-suji shopping street, nearly everything on the menu made from deer, and open for lunch and then from 18:00 to 4 am. Several diners say the meat is lean, tender and free of gamey smell. The ¥2,500 lunch course brings a freshly fried venison cutlet, a low-temperature roast and venison fried rice; at night try the venison carpaccio, a juicy roast with salt and fried onions, rillettes on baguette, and the deer bread, roast venison on salty garlic toast. Newer dishes include crisp pleatless venison gyoza and a peppery venison mazesoba with egg yolk. A seven-dish venison yaki-shabu course (¥7,500) needs booking; one diner wished the cuts were explained. One diner noted a generous wine pour. ¥500 dinner charge.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Venison izakaya and bar (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Venison cutlet; roast venison; deer bread.',
      anecdotes: [
        { text: '"The venison is lean, with no fat… The freshly fried cutlet has a rich flavor, yet no gamey taste at all, and it\'s incredibly tender and delicious!" — May 2026, Venison Feast Lunch Course ¥2,500.', source: R + 'B527631849/' },
        { text: '"The carpaccio had no gamey taste at all, and I felt the meatiness was even stronger than beef. The roast was perfectly cooked and juicy…" — September 2026.', source: R + 'B537536912/' },
      ],
      japanese_sources_summary: '食べログ: 鹿肉料理専門店 バトックス、大阪市中央区千日前1-4-19 中島ビル 1F、相合橋筋商店街、なんば駅から徒歩5分、月〜土・祝11:00〜14:00、18:00〜翌4:00、日18:00〜翌4:00 (料理L.O. 3:00、ドリンクL.O. 4:00)、年中無休、ディナーはお通し・サービス料500円、20席、2階は5人から貸切の個室、子ども連れ歓迎、カード・電子マネー・QR可、分煙。口コミ(2025年11月〜2026年10月): 鹿肉の専門店、臭みがなくやわらかいという声が複数、鹿肉のランチコース2,500円 (鹿カツ、低温調理のロースト、鹿肉のチャーハン)、鹿パン (ガーリックトーストにローストした鹿肉)、鹿肉のリエット、リエットのポテトサラダ、カルパッチョ、塩とフライドオニオンとソースで食べるロースト、ひだのない揚げた鹿肉の gyoza、辛さを選べる鹿肉の mazesoba、カルボナーラ、要予約の鹿肉の yaki-shabu のコース7品7,500円、部位の説明がなかったという声、ワインをたっぷり注いでくれたという声。',
      confidence: 'medium', sources: [TB, R + 'B500300184/', R + 'B527631849/', R + 'B533431151/', R + 'B533557019/', R + 'B537536912/', R + 'B537932471/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the venison dishes (July 2026); children welcome (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-4-19 中島ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目4番19号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527631849/', R + 'B537932471/'],
    price_note: 'Prices from May and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Venison lunch course (cutlet, roast, venison fried rice)', '¥2,500', 'Lunch', 'no', 'no', 'May 2026.', 'lunch'),
      it('', '', 'Deer bread (roast venison on garlic toast)', '', 'Dinner', 'no', 'no', 'May 2026.', 'deer_bread'),
      it('', '', 'Venison carpaccio', '', 'Dinner', 'ask', 'no', 'September 2026.', 'carpaccio'),
      it('', '', 'Roast venison', '', 'Dinner', 'ask', 'no', 'September 2026.', 'roast'),
      it('', '', 'Venison yaki-shabu course, 7 dishes (book ahead)', '¥7,500', 'Courses', 'ask', 'no', 'October 2026.', 'yakishabu'),
    ] }, {
    cuisine: '鹿肉専門の居酒屋・バー (20席)・名物の鹿カツ・ランチコース2,500円: 鹿カツ、低温調理のロースト、鹿肉のチャーハン・鹿パン: ガーリックトーストにローストした鹿肉・バゲットにのせた鹿肉のリエット、リエットのポテトサラダ・鹿肉のカルパッチョ・塩とフライドオニオンとソースで食べるロースト・揚げた鹿肉の gyoza・辛さを選べる鹿肉の mazesoba、カルボナーラ・鹿肉の yaki-shabu のコース7品7,500円 (要予約)・ワイン、日本酒、焼酎',
    neighborhood: '千日前1-4-19 中島ビル 1F、相合橋筋商店街。なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。鹿肉のローストやカルパッチョのほか、衣のついたカツ、揚げた gyoza、mazesoba、ガーリックトーストも。',
    vegan_detail: 'ヴィーガンではありません。鹿肉の専門店。',
    notes: '[鹿肉・千日前、朝4時まで開く鹿肉の居酒屋] 相合橋筋商店街にある小さな鹿肉の専門店で、料理のほとんどが鹿肉。昼と、夜は18時から朝4時まで。赤身でやわらかく臭みがないという声が複数。2,500円のランチコースは揚げたての鹿カツ、低温調理のロースト、鹿肉のチャーハン。夜は鹿肉のカルパッチョ、塩とフライドオニオンで食べるジューシーなロースト、バゲットにのせたリエット、塩気のあるガーリックトーストにローストをのせた鹿パンを。新しい料理には、ひだのないパリッとした鹿肉の gyoza や、黄身をからめるこしょうの効いた鹿肉の mazesoba も。7品の鹿肉の yaki-shabu のコース (7,500円) は要予約、部位の説明がほしかったという声も。ワインをたっぷり注いでくれたという声も。ディナーは500円のお通し代。',
  });
}

save();
