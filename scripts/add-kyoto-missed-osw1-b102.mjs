// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 102.
//   + やまの Yamano (Kyoto bento, kaiseki and catering house near the Imperial Palace, with large annexes for gatherings)
//   + SALT (couple-run Italian standing bar in a former barbershop, Shogoin, opened 2026)
//   + カフェ アカトンボ Cafe Akatombo (Western-style neighbourhood café with breakfast sets and omurice near Kyoto Station-Shichijo)
//   + 三条猪熊 おおはし Sanjo Inokuma Oohashi (late-night machiya izakaya between Shijo-Omiya and Nijo Castle)
//   + premier-bar (gin bar near Kyoto Station, since 2013)
//   + 割烹 いいむら Kappou Iimura (kappo near Kyoto Station: ¥900 daily lunch, omakase at night)
//   - 焼肉やる気 京都駅前店, 國田屋: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26001128, 26045528, 26032550,
//   26034272 (skipped), 26032964, 26022704, 26000876, 26024516 (skipped).
//   queue-status.jsonl grepped for each brand: やる気 has earlier chain rulings (26034531, 26037252); 18 PREMIER BAR
//   (26042266, kyoto_18_premier_bar, Kiyamachi) is a different bar from premier-bar.
//   Data check (current main, hidden included): none of the six drafted is in data/kyoto.json by Tabelog id, name, site or
//   address.
//   Same-name count: one shop each; operators not found.
//   Service charges, checked against the Japanese original: おおはし お通し代330円(税込); premier-bar 最終会計に１０％の
//   サービス料 (course prices include it); none listed for the others.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-102');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034272', '焼肉やる気 京都駅前店: chain — eleven Yakiniku Yaruki shops in a Tabelog name search (same ruling as 26034531, 26037252)');
skip('26024516', '國田屋: too thin — one 2025–2026 review (January 2025)');

// ================================================================ やまの
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001128/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.yamano1972.jp';
  const H = day(['11:00', '20:00']);
  put({
    id: 'kyoto_yamano_takeyamachi', name: 'やまの (Yamano)', category: 'OMNI',
    lat: 35.016325, lng: 135.758252, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto bento boxes, tempura, chawanmushi, clear soup and small hot pots; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based Kyoto cooking with fish and egg (2025–2026 reviews).',
    hours_raw: '11:00–20:00 daily; hours may change (Tabelog). Cards (Tabelog). 90 seats in the main building, plus an annex of 30 and a large annex of 300 (Tabelog). Sunken-kotatsu seating (June 2026). Catering and New Year bento as well (July 2025; January 2026). A short walk from Marutamachi station, near the Imperial Palace (January and June 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takeyamachi-Muromachi — near the Imperial Palace and Marutamachi station',
    cuisine: 'Traditional Kyoto cooking served in bento boxes and kaiseki, for gatherings large and small (2025–2026) · kaiseki with a small hot pot ¥7,500, arranged in a bento box (May 2025) · Kyoto bento of many small side dishes; compact bento with chawanmushi and clear soup (June 2026) · catered gozen with tempura and chawanmushi (July 2025) · two-tier New Year Kyoto bento (January 2026)',
    website: SITE, gmaps: gm('やまの 京都 竹屋町'), menu_url: SITE,
    notes: '[Kyoto cuisine · near the Imperial Palace, bento and gatherings] A traditional Kyoto restaurant and caterer near the Imperial Palace, with big rooms for memorials, festival gatherings and groups: colourful Kyoto bento boxes and modest kaiseki with a small hot pot, at fair prices. Sunken-kotatsu seats; open daily 11:00–20:00.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'No operator or chef details were found. Reviewers note catering and festival gatherings (July 2025; June 2026).',
      philosophy: null, specialty: 'Kyoto bento boxes.',
      anecdotes: [
        { text: 'A May 2025 family came after a memorial service for a ¥7,500 kaiseki with a small hot pot, served bento-style.', source: R + 'B507740645/' },
      ],
      japanese_sources_summary: '食べログ: やまの、日本料理・寿司、中京区竹屋町通室町東入ル道場町21-3、毎日 11:00〜20:00、カード可、本館90席・別館30席・大別館300席。口コミ (2025〜2026年、英語): 京料理、京弁当、法事の後の小鍋付きの会席7,500円、仕出しの御膳 (天ぷら、茶碗蒸し)、正月の二段の弁当、祭りの直会で茶碗蒸しとお吸い物付きの弁当、掘りごたつ席、地下鉄丸太町駅から近く、京都御所のそば。',
      confidence: 'low', sources: [TB, SITE, R + 'B490164112/', R + 'B507740645/', R + 'B510248473/', R + 'B530115261/', R + 'B530853061/'] },
    cultural_comfort: { level: 'japanese', note: 'Traditional rooms for gatherings; sunken-kotatsu seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区竹屋町通室町東入ル道場町21-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated May 2025 to June 2026.' },
    pin_source: `Tabelog ${TB} (35.016325, 135.758252); cross-checked: GSI 京都府京都市中京区道場町21番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507740645/'],
    price_note: 'One price from a May 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Kaiseki with a small hot pot', '¥7,500', 'Courses', 'ask', 'no', 'May 2025.', 'kaiseki'),
      it('', '', 'Kyoto bento', '', 'Bento', 'ask', 'no', 'June 2026.', 'kyo_bento'),
    ] }, {
    cuisine: '弁当箱や会席で出す昔ながらの京料理、大小の集まりに (2025〜2026年)・弁当箱に盛った小鍋付きの会席7,500円 (2025年5月)・小さなおかずが詰まった京弁当、茶碗蒸しとお吸い物付きのコンパクトな弁当 (2026年6月)・天ぷらと茶碗蒸しの仕出しの御膳 (2025年7月)・二段の正月の京弁当 (2026年1月)',
    neighborhood: '竹屋町室町。京都御所と丸太町駅の近く',
    gf_detail: '要確認。京弁当、天ぷら、茶碗蒸し、お吸い物、小鍋。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚や卵の出汁の京料理 (2025〜2026年の口コミ)。',
    notes: '[京料理・京都御所の近く、弁当と集まり] 京都御所近くの昔ながらの京料理店で仕出しも。法事や祭りの集まり、団体向けの広い座敷があり、彩りのよい京弁当や小鍋付きの控えめな会席を手頃に。掘りごたつ席、毎日11時〜20時。',
  });
}

// ================================================================ SALT
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26045528/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_salt_shogoin', name: 'SALT', category: 'OMNI',
    lat: 35.017536, lng: 135.777532, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Handmade tajarin and tagliolini, bread with braised beef, potato salad and small plates; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Marinated pineapple and some small plates may suit, but nothing is described as vegan; the pasta is egg-yolk rich (2026 reviews).',
    hours_raw: 'Opens 14:00 (August 2026); full hours not listed on Tabelog. A counter and a few small standing tables, no other seating (August 2026). Opened August 2026 (Tabelog gives 8 August; a September 2026 reviewer says 26 August). In a renovated former barbershop with Yoshino-cedar fittings, Shogoin near Jingu-Marutamachi (August 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin — near Jingu-Marutamachi',
    cuisine: 'An Italian standing bar of small plates and natural wine (August and September 2026) · tajarin, the egg-yolk-rich hand-cut Piedmont pasta ¥1,300 (August 2026) · tagliolini with natural wine (September 2026) · marinated pineapple; Piedmont-style potato salad (August 2026) · beef braised in demi-glace with bread; gizzard confit (September 2026)',
    website: null, gmaps: gm('SALT 京都 聖護院'), menu_url: TB,
    notes: '[Italian standing bar · Shogoin, opened 2026] A tiny standing bar in a former barbershop near Jingu-Marutamachi, run by a couple: handmade Piedmont tajarin, braised beef with bread and other small Italian plates with natural wine, from mid-afternoon. Counter and standing tables only.',
    chef_bio: { chef_name: null, roles: ['Owners (a couple, unnamed)'], origin: null,
      background: 'An August 2026 reviewer describes the bar as run by a couple. Opened August 2026 (Tabelog). No operator was found.',
      philosophy: 'A casual place for a quick glass (August 2026 reviewer).', specialty: 'Tajarin.',
      anecdotes: [
        { text: 'An August 2026 visitor compared the egg-yolk-rich tajarin to chicken ramen — and meant it as praise.', source: R + 'B533404495/' },
      ],
      japanese_sources_summary: '食べログ: SALT、バル、左京区聖護院川原町37-6、2026年8月8日オープン。口コミ (2026年、英語): 14時から開く立ち飲み、元理容店を改装、吉野杉、カウンターと小さな立ち飲みテーブルのみ、夫婦で営む、タヤリン1,300円、タリオリーニと自然派ワイン、パイナップルのマリネ、ピエモンテ風ポテトサラダ、牛肉のデミグラス煮とパン、砂肝のコンフィ、8月26日開店との記述も。',
      confidence: 'low', sources: [TB, R + 'B533404495/', R + 'B535672446/', R + 'B536108995/', R + 'B536117466/', R + 'B538415524/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing bar; small and casual.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区聖護院川原町37-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened August 2026; reviews dated August to October 2026.' },
    pin_source: `Tabelog ${TB} (35.017536, 135.777532); cross-checked: GSI 京都府京都市左京区聖護院川原町37番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533404495/'],
    price_note: 'One price from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tajarin (handmade egg-yolk pasta)', '¥1,300', 'Pasta', 'no', 'no', 'August 2026.', 'tajarin'),
      it('', '', 'Beef braised in demi-glace with bread', '', 'Small plates', 'no', 'no', 'September 2026.', 'beef'),
      it('', '', 'Marinated pineapple', '', 'Small plates', 'ask', 'ask', 'August 2026.', 'pineapple'),
    ] }, {
    cuisine: '小皿と自然派ワインのイタリアンの立ち飲み (2026年8・9月)・卵黄たっぷりの手打ちのピエモンテのパスタ、タヤリン1,300円 (2026年8月)・タリオリーニと自然派ワイン (2026年9月)・パイナップルのマリネ、ピエモンテ風ポテトサラダ (2026年8月)・牛肉のデミグラス煮とパン、砂肝のコンフィ (2026年9月)',
    neighborhood: '聖護院。神宮丸太町の近く',
    gf_detail: '要確認。手打ちのタヤリンやタリオリーニ、牛肉の煮込みとパン、ポテトサラダ、小皿。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。パイナップルのマリネなど合う皿もあるかもしれないが、ヴィーガンと書かれた品はない。パスタは卵黄たっぷり (2026年の口コミ)。',
    notes: '[イタリアンの立ち飲み・聖護院、2026年開店] 神宮丸太町近く、元理容店の小さな立ち飲み。夫婦で営み、手打ちのピエモンテのタヤリン、牛肉の煮込みとパンなどイタリアンの小皿を自然派ワインとともに昼下がりから。カウンターと立ち飲みテーブルのみ。',
  });
}

// ================================================================ カフェ アカトンボ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26032550/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_cafe_akatombo', name: 'カフェ アカトンボ (Cafe Akatombo)', category: 'OMNI',
    lat: 34.988579, lng: 135.762848, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sandwich breakfast sets and omurice (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg sandwiches and omurice (2025–2026 reviews).',
    hours_raw: 'Monday and Wednesday–Sunday 8:00–18:00; closed Tuesday (Tabelog). No QR payment (Tabelog). Smoking allowed (Tabelog). A Western, almost American-style room popular with locals and some overseas guests (March and November 2025).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Shichijo, near Kyoto Station',
    cuisine: 'A neighbourhood café for breakfast and lunch (2025–2026) · breakfast sandwich set with salad and strong coffee ¥640 (November 2025), ¥690 incl. tax (August 2026) · thick egg sandwich (August 2026) · omurice set with drink and soup (March 2025)',
    website: null, gmaps: gm('カフェ アカトンボ 京都'), menu_url: TB,
    notes: '[Café · near Kyoto Station-Shichijo, morning sets] A neighbourhood café with a Western interior near Kyoto Station, loved by regulars: ¥690 breakfast sandwich sets from 8:00, a generous egg sandwich, and omurice sets at lunch. Smoking allowed. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owners (unnamed)'], origin: null,
      background: 'A March 2025 reviewer thought it is run by an elderly couple, with regulars chatting at the tables. No operator was found.',
      philosophy: null, specialty: 'Egg sandwiches.',
      anecdotes: [
        { text: 'An August 2026 visitor on a third breakfast stop of the morning came in at 8:19 for a “no-compromise” egg sandwich set.', source: R + 'B532959099/' },
      ],
      japanese_sources_summary: '食べログ: カフェ アカトンボ、カフェ、下京区小稲荷町22-2、月・水〜日 8:00〜18:00、火曜定休、QR不可、喫煙可。口コミ (2025〜2026年、英語): 西洋風・アメリカ風の内装、年配の夫婦が営んでいるようだ、常連の会話、オムライスのセット (ドリンクとスープ付き)、モーニングのサンドイッチセット640円・690円 (税込)、サラダ付き、濃いコーヒー、たまごサンド、地元の人と海外の客。',
      confidence: 'low', sources: [TB, R + 'B503873209/', R + 'B517141628/', R + 'B532959099/'] },
    cultural_comfort: { level: 'japanese', note: 'Regulars’ café; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区小稲荷町22-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated March 2025 to August 2026.' },
    pin_source: `Tabelog ${TB} (34.988579, 135.762848); cross-checked: GSI 京都府京都市下京区小稲荷町22番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532959099/', R + 'B517141628/'],
    price_note: 'Prices from November 2025 and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Breakfast sandwich set with salad and coffee', '¥690', 'Morning', 'no', 'no', 'August 2026 (¥640 in November 2025).', 'morning'),
      it('', '', 'Omurice set with drink and soup', '', 'Lunch', 'ask', 'no', 'March 2025.', 'omurice'),
    ] }, {
    cuisine: '朝食と昼食の近所のカフェ (2025〜2026年)・サラダと濃いコーヒー付きのモーニングのサンドイッチセット640円 (2025年11月)、690円 (税込、2026年8月)・厚いたまごサンド (2026年8月)・ドリンクとスープ付きのオムライスのセット (2025年3月)',
    neighborhood: '七条の南、京都駅の近く',
    gf_detail: 'グルテンフリーではない。サンドイッチのモーニングとオムライス (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。たまごサンドとオムライス (2025〜2026年の口コミ)。',
    notes: '[喫茶・京都駅七条の近く、モーニング] 京都駅近く、洋風の内装の近所のカフェで常連に愛される。8時から690円のサンドイッチのモーニング、たっぷりのたまごサンド、昼はオムライスのセット。喫煙可。火曜定休。',
  });
}

// ================================================================ 三条猪熊 おおはし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26032964/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_sanjo_inokuma_oohashi', name: '三条猪熊 おおはし (Sanjo Inokuma Oohashi)', category: 'OMNI',
    lat: 35.00746, lng: 135.750271, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, oden, beef-tendon stew, katsu, fig tempura, yakitori, fried horse mackerel and fried rice; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, chicken, beef and dashi dishes (2026 reviews).',
    hours_raw: '18:00–02:00 daily incl. public holidays (food last orders 24:00, drinks 1:30) (Tabelog). Appetizer charge ¥330 incl. tax (Tabelog, original お通し代330円(税込)). Cards (Tabelog). 24 seats: an 8-seat counter, a tatami room with two tables for 6 and a table for 4, plus seating upstairs (Tabelog; August and November 2026). Daily handwritten menu; book ahead, as regulars fill it (February 2026). English spoken (November 2026). In a Showa-era townhouse down a narrow alley between Shijo-Omiya and Nijo Castle (July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Inokuma — between Shijo-Omiya and Nijo Castle',
    cuisine: 'Seasonal home-style izakaya cooking from a daily handwritten menu (February and April 2026) · oden; beef-tendon and beef stew; soy-sauce fried rice (February 2026) · “chokotto mori” plate of small dishes; sashimi; oysters (June 2026) · fig tempura; seared bonito; charcoal yakitori; dashimaki; fried horse mackerel (July 2026) · octopus; shime-saba when available (August 2026) · omakase of yakitori, seafood and vegetables; fresh ginkgo; Nagasaki-style champon to finish (August 2026) · Manganji peppers; obanzai set; grilled fish collar (October and November 2026)',
    website: null, gmaps: gm('三条猪熊 おおはし'), menu_url: TB,
    notes: '[Izakaya · Sanjo-Inokuma alley, open late] A hidden Showa-era townhouse izakaya down a narrow alley near Shijo-Omiya, open till 2:00: a handwritten daily menu of seasonal fish, oden, charcoal yakitori, fig tempura and a “little of everything” plate, with big sours and sake. Counter downstairs, tatami upstairs; ¥330 appetizer charge. Book ahead.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'An August 2026 reviewer describes a quick-moving chef and a friendly woman running the room. No operator was found.',
      philosophy: null, specialty: 'Seasonal small plates; yakitori.',
      anecdotes: [
        { text: 'An October 2026 newcomer to Kyoto treated three old friends here and urged the group to order the Manganji peppers.', source: R + 'B536615122/' },
      ],
      japanese_sources_summary: '食べログ: 三条猪熊 おおはし、居酒屋・海鮮・焼き鳥、中京区三条猪熊町626-1、毎日 18:00〜翌2:00 (料理L.O. 0:00、ドリンクL.O. 1:30)、お通し代330円 (税込)、カード可、24席 (カウンター8、座敷6名×2卓、テーブル4名)。口コミ (2026年、英語): 手書きの日替わりメニュー、常連が多く予約がおすすめ、おでん、牛すじ、ビーフシチュー、醤油の炒飯、カツ、「ちょこっと盛り」、刺身、牡蠣、イチジクの天ぷら、鰹のたたき、炭火の焼き鳥、だし巻き、アジフライ、タコ、しめ鯖、おまかせ、銀杏、長崎風ちゃんぽん、万願寺、おばんざいのセット、カマ焼き、昭和の町家、路地の奥、2階の座敷、英語を話すスタッフ。',
      confidence: 'low', sources: [TB, R + 'B522226926/', R + 'B527073756/', R + 'B527807128/', R + 'B530564351/', R + 'B531857873/', R + 'B533142764/', R + 'B534082159/', R + 'B536615122/', R + 'B538784120/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English spoken; ¥330 appetizer charge; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条猪熊町626-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated February to November 2026.' },
    pin_source: `Tabelog ${TB} (35.00746, 135.750271); cross-checked: GSI 京都府京都市中京区三条猪熊町626番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices found; ¥330 appetizer charge.', last_checked: TODAY, items: [
      it('', '', '“Chokotto mori” plate of small dishes', '', 'Small plates', 'ask', 'no', 'June 2026.', 'chokotto'),
      it('', '', 'Fig tempura', '', 'Small plates', 'no', 'ask', 'July 2026.', 'ichijiku_tempura'),
      it('', '', 'Beef-tendon stew', '', 'Small plates', 'ask', 'no', 'February 2026.', 'gyusuji'),
      it('', '', 'Charcoal yakitori', '', 'Grill', 'ask', 'no', 'July and August 2026.', 'yakitori'),
    ] }, {
    cuisine: '手書きの日替わりメニューの季節の家庭的な居酒屋料理 (2026年2・4月)・おでん、牛すじ煮込みとビーフシチュー、醤油の炒飯 (2026年2月)・小皿が少しずつの「ちょこっと盛り」、刺身、牡蠣 (2026年6月)・イチジクの天ぷら、鰹のたたき、炭火の焼き鳥、だし巻き、アジフライ (2026年7月)・タコ、あればしめ鯖 (2026年8月)・焼き鳥・魚介・野菜のおまかせ、銀杏、締めの長崎風ちゃんぽん (2026年8月)・万願寺、おばんざいのセット、カマ焼き (2026年10・11月)',
    neighborhood: '三条猪熊。四条大宮と二条城の間',
    gf_detail: '要確認。刺身、おでん、牛すじ煮込み、カツ、イチジクの天ぷら、焼き鳥、アジフライ、炒飯。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、鶏、牛、出汁の料理 (2026年の口コミ)。',
    notes: '[居酒屋・三条猪熊の路地、深夜まで] 四条大宮近くの細い路地の奥、昭和の町家の隠れた居酒屋で深夜2時まで。手書きの日替わりメニューに旬の魚、おでん、炭火の焼き鳥、イチジクの天ぷら、少しずつの盛り合わせ、大きなグラスのサワーや日本酒。1階はカウンター、2階は座敷。お通し代330円。予約がおすすめ。',
  });
}

// ================================================================ premier-bar
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26022704/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.premier-bar.net';
  const H = day(['19:00', '02:00']);
  put({
    id: 'kyoto_premier_bar_shichijo', name: 'premier-bar', category: 'OMNI',
    lat: 34.989163, lng: 135.760903, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A gin and cocktail bar; snacks such as dried fruit; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Spirits and cocktails; no ingredient information (2025–2026 reviews).',
    hours_raw: '19:00–02:00 daily (Tabelog). 10% service charge on the final bill; course prices include it (Tabelog, original 最終会計に１０％のサービス料を頂戴しております。※コース料金はサービス料込※). Cards (Tabelog). 27 seats: 8 at the counter, two tables for up to 4, two booths for up to 14 (Tabelog). Second floor, by elevator, near Kyoto Station (September 2026). Open since 2013 (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Shichijo — near Kyoto Station',
    cuisine: 'A gin-focused bar with a wide range of aromatic gins (July 2025; July 2026) · gin buck, gin and tonic, cocktails; whisky incl. Bell’s (September 2026) · gin sodas with Japanese gins; Diplomatico rum on the rocks; bartender’s choice; dried fruit (October 2026)',
    website: SITE, gmaps: gm('premier-bar 京都'), menu_url: SITE,
    notes: '[Gin bar · near Kyoto Station, since 2013] A moody, roomy second-floor bar near Kyoto Station, open till 2:00, specialising in gin — dozens of aromatic bottles for G&Ts, bucks and sodas — with whisky and rum too, and a young, chatty owner happy to pick for you. 10% service charge.',
    chef_bio: { chef_name: null, roles: ['Owner-bartender (unnamed)'], origin: null,
      background: 'A September 2026 reviewer says the bar has been open since 2013 and describes a young, talkative owner. No operator was found; 18 PREMIER BAR in Kiyamachi is a different bar.',
      philosophy: null, specialty: 'Gin.',
      anecdotes: [
        { text: 'An October 2026 guest stopping for “just one more” ended up letting the bartender choose, and discovered Diplomatico rum.', source: R + 'B538786001/' },
      ],
      japanese_sources_summary: '食べログ: premier-bar、バー・ダイニングバー、下京区烏丸通七条東入ル真苧屋町220-3 第2オグシビル 2F、毎日 19:00〜翌2:00、最終会計に10％のサービス料 (コース料金は込み)、カード可、27席 (カウンター8、テーブル2、ボックス2)。口コミ (2025〜2026年、英語): 京都駅近く、ジンの品揃え、ジンバック、ジントニック、ベルズのウイスキー、2013年から、若く話好きの店主、エレベーターで2階、ジンソーダ、ディプロマティコ、ドライフルーツ、おまかせ。',
      confidence: 'low', sources: [TB, SITE, R + 'B505911946/', R + 'B518782689/', R + 'B533862419/', R + 'B536426555/', R + 'B538786001/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late bar near the station; 10% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通七条東入ル真苧屋町220-3 第2オグシビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated May 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (34.989163, 135.760903); cross-checked: GSI 京都府京都市下京区真苧屋町220番地 (lot) 18m; 割烹 いいむら (this batch) is 11.7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices found; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Gin and tonic', '', 'Cocktails', 'ask', 'ask', 'September 2026.', 'gin_tonic'),
      it('', '', 'Gin buck', '', 'Cocktails', 'ask', 'ask', 'September 2026.', 'gin_buck'),
      it('', '', 'Diplomatico rum on the rocks', '', 'Spirits', 'ask', 'ask', 'October 2026.', 'rum'),
    ] }, {
    cuisine: '香り高いジンが豊富なジンが主役のバー (2025年7月、2026年7月)・ジンバック、ジントニック、カクテル、ベルズなどのウイスキー (2026年9月)・国産ジンのジンソーダ、ディプロマティコのロック、おまかせ、ドライフルーツ (2026年10月)',
    neighborhood: '烏丸七条。京都駅の近く',
    gf_detail: '要確認。ジンとカクテルのバー。ドライフルーツなどのつまみ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。蒸留酒とカクテル。材料の情報はない (2025〜2026年の口コミ)。',
    notes: '[ジンバー・京都駅の近く、2013年から] 京都駅近くの2階、深夜2時まで開くゆったりした雰囲気のバー。ジンが専門で、香り高いボトルがずらりと並び、ジントニックやバック、ソーダに。ウイスキーやラムもあり、若く話好きの店主がおまかせで選んでくれる。サービス料10％。',
  });
}

// ================================================================ 割烹 いいむら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000876/'; const R = TB + 'dtlrvwlst/';
  const HW = day(['17:00', '22:00']); const HS = day(['17:00', '22:30']);
  put({
    id: 'kyoto_kappou_iimura_shichijo', name: '割烹 いいむら (Kappou Iimura)', category: 'OMNI',
    lat: 34.989162, lng: 135.760775, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Daily lunch sets (kara-age, cutlets, croquettes, eel bowl with cold udon) and kappo courses at night; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, chicken, pork and eel dishes with dashi (2026 reviews).',
    hours_raw: 'Monday–Friday lunch from 11:30 until sold out, dinner 17:00–22:00; Saturday and public holidays 17:00–22:30; closed Sunday (Tabelog); the hours grid shows dinner only. Lunch is one daily set, served without ordering; water is self-service; no photography inside (July, August and October 2026). Queues before 11:30 (June 2026). Cards (Tabelog); a reviewer notes cards are taken with an omakase reservation (September 2026). Counter and a tatami private room with a table (June and September 2026). About 5 min from Kyoto Station, just east of Shichijo-Karasuma (August 2026).',
    hours: { 0: HW, 1: HW, 2: HW, 3: HW, 4: HW, 5: HS }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shichijo east of Karasuma — 5 min from Kyoto Station',
    cuisine: 'A kappo serving a famous ¥900 daily lunch and modest omakase courses at night from about ¥8,000 (October 2026) · daily lunch set of one dish, e.g. tuna sashimi, pork-loin cutlet, beef croquettes with fried horse mackerel, chicken kara-age, or eel bowl with cold udon, ¥900 incl. tax (June to October 2026) · omakase course in a tatami private room, about ¥8,000 with drinks (September 2026) · new-crop rice announced in autumn (October 2026)',
    website: null, gmaps: gm('割烹 いいむら 京都'), menu_url: TB,
    notes: '[Kappo · Shichijo near Kyoto Station, ¥900 lunch] A small kappo east of Shichijo-Karasuma where people queue for the ¥900 daily lunch — one set, no ordering, carefully cooked rice — and come back at night for unshowy omakase courses around ¥8,000. Head chef and proprietress run it with young staff. No photos inside; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)', 'Proprietress (unnamed)'], origin: null,
      background: 'A June 2026 reviewer describes the head chef and proprietress welcoming guests, with a young staff member announcing the opening. No operator was found.',
      philosophy: null, specialty: 'Daily lunch sets; omakase kappo.',
      anecdotes: [
        { text: 'A June 2026 visitor returned for lunch on a business trip because this was where a solo 50th-birthday lunch had been eaten two years earlier.', source: R + 'B489404266/' },
        { text: 'An October 2026 regular was greeted with the news that the new-crop rice had arrived, and found it tasted all the better.', source: R + 'B521844290/' },
      ],
      japanese_sources_summary: '食べログ: 割烹 いいむら、日本料理、下京区七条通東洞院西入ル真苧屋216、月〜金 昼 11:30〜売り切れまで・夜 17:00〜22:00、土・祝日 17:00〜22:30、日曜定休、カード可。口コミ (2026年、英語): 京都駅から徒歩5分、七条烏丸の東、900円 (税込) の日替わり昼定食 (マグロの刺身、ロースカツ、牛肉コロッケとアジフライ、鶏の唐揚げ、鰻丼と冷やしうどん)、注文なしで出てくる、水はセルフ、店内撮影禁止、開店前に行列、大将と女将と若いスタッフ、夜は8,000円くらいからの割烹、座敷の個室、おまかせの予約ならカード可、新米。',
      confidence: 'low', sources: [TB, R + 'B489404266/', R + 'B521844290/', R + 'B529723241/', R + 'B530125885/', R + 'B532725494/', R + 'B532741079/', R + 'B532975495/', R + 'B534211223/', R + 'B537368245/', R + 'B537852950/'] },
    cultural_comfort: { level: 'japanese', note: 'Set lunch with no ordering; no photos; queue at opening.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通東洞院西入ル真苧屋216',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated June to October 2026.' },
    pin_source: `Tabelog ${TB} (34.989162, 135.760775); cross-checked: GSI 京都府京都市下京区真苧屋町216番地 (lot) 10m; premier-bar (this batch) is 11.7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537368245/', R + 'B532975495/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set (one dish a day)', '¥900', 'Lunch', 'ask', 'no', 'June to October 2026.', 'lunch'),
      it('', '', 'Omakase course (evening)', '¥8,000', 'Courses', 'ask', 'no', 'September and October 2026; from about ¥8,000.', 'omakase'),
    ] }, {
    cuisine: '名物の900円の日替わり昼定食と、夜は8,000円くらいからの控えめなおまかせコースの割烹 (2026年10月)・日替わりの1品の昼定食、例えばマグロの刺身、ロースカツ、牛肉コロッケとアジフライ、鶏の唐揚げ、鰻丼と冷やしうどん、税込900円 (2026年6〜10月)・座敷の個室でおまかせコース、飲み物込みで約8,000円 (2026年9月)・秋は新米の知らせ (2026年10月)',
    neighborhood: '七条通、烏丸の東。京都駅から徒歩5分',
    gf_detail: '要確認。日替わりの昼定食 (唐揚げ、カツ、コロッケ、鰻丼と冷やしうどん) と夜の割烹のコース。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、鶏、豚、鰻の出汁の料理 (2026年の口コミ)。',
    notes: '[割烹・京都駅近くの七条、900円の昼] 七条烏丸の東の小さな割烹。昼は900円の日替わり定食に行列 (1種類のみで注文なし、ご飯が美味しい)、夜は8,000円くらいの飾らないおまかせのコース。大将と女将が若いスタッフと営む。店内撮影禁止、日曜定休。',
  });
}

save();
