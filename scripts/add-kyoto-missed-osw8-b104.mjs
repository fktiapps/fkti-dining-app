// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 104 (2026-11-08).
//   + bar HIGH CENTRAL (whisky and mixology cocktail bar by Kyoto Station; rest)
//   + スペイン食堂 ラ・ファローラ La Farola (Spanish bar of two-colour paella opposite Kumano Shrine; rest)
//   + VULCAN (gyoza and "oriental" izakaya, Kojinguchi; rest)
//   Rest list (mod 6 = 1) after batch 103, nearest-first — skipped:
//   - ガスト 京都丸太町店 26020795: chain.
//   - cafe&bar oku 26035783: inside hotel tou nishinotoin kyoto, run by withceed hospitality management, which operates over
//     3,000 rooms nationwide (en-gage.net company page) — a large hotel operator, not a single boutique hotel.
//   - 四川料理蜀江 26001265: inside ANA Crowne Plaza Kyoto (IHG), a big-chain hotel.
//   - Den Kyoto 26040049: bar of Dusit Thani Kyoto, a big-chain hotel.
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. HIGH CENTRAL's invoice is held
//   by 株式会社Three Grams (NTA register), no sister bars named on the official site. La Farola's invoice is held by an individual
//   (not cited). None of the three is in data (main 30ab035c, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-104');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26020795/', 'chain: ガスト');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26035783/', 'inside hotel tou nishinotoin kyoto, run by withceed hospitality management (over 3,000 rooms nationwide) — large hotel operator');
skip('https://tabelog.com/en/kyoto/A2601/A260203/26001265/', 'inside ANA Crowne Plaza Kyoto (IHG) — big-chain hotel');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26040049/', 'bar of Dusit Thani Kyoto — big-chain hotel');

// ================================================================ bar HIGH CENTRAL
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26039497/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://bar-highcentral.com';
  const H = day(['19:30', '26:00']);
  put({
    id: 'kyoto_bar_high_central', name: 'bar HIGH CENTRAL', category: 'OMNI',
    lat: 34.98940496787969, lng: 135.7606293102043, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A drinks bar: whisky, wine and spirits are usually gluten-free, but beer-based or cereal-infused cocktails may not be; snacks such as fresh chocolate are not checked (official site; 2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Spirit and fruit cocktails may suit; some cocktails and the chocolate snacks may use dairy or egg white (2023–2026 reviews).',
    hours_raw: '19:30–2:00 (last order 1:30); closed Sunday; irregular closures and private-hire days — monthly business days posted on the website and Instagram (official site; Tabelog). Service charge not listed on Tabelog. Reservations accepted; private hire for 20–50; curtained rooms for 8 and 10–20 (Tabelog; official site). Cards, e-money (Rakuten Edy, iD, QUICPay) and QR (PayPay, d Barai, Rakuten Pay, au PAY) (Tabelog). 28 seats; heated tobacco allowed inside, cigarettes in a smoking room (Tabelog). 3F of K-UP Shichijo, 3 min walk from Kyoto Station’s central exit (official site). Opened 1 June 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shichijo-Karasuma, by Kyoto Station',
    cuisine: 'Whisky and cocktail bar in a dark, luxurious designer room of red counter seats, velvet sofas and marble-look tables (official site) · over 30 whiskies centred on Japanese bottles such as Yamazaki, Hakushu, Hibiki and Ichiro’s Malt; mixology cocktails of fruit, herbs and spices by a bartender with a record in competitions at home and abroad (official site) · a matcha cocktail; original and classic gins including Bobby’s Gin and Kinobi; fresh chocolate to nibble (2023–2024 reviews) · about ¥4,000–5,000 (Tabelog)',
    website: WEB, gmaps: gm('bar HIGH CENTRAL 京都'), menu_url: null,
    notes: '[Bar · by Kyoto Station, to 2:00] A sleek third-floor whisky and cocktail bar three minutes from the station: 30-plus Japanese whiskies, inventive fruit-and-herb cocktails including a matcha one, and warm staff who welcome solo travellers. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Bartenders (unnamed)'], origin: null,
      background: 'Per the official site and Tabelog: opened June 2023 near Kyoto Station, run by 株式会社Three Grams (NTA register), with cocktails by a bartender with prizes in competitions at home and abroad; the team also tends bar at brand events as visiting bartenders (official site’s Instagram feed).',
      philosophy: 'Original mixology cocktails with an eye to look and aroma (official site).', specialty: 'Japanese whisky; mixology cocktails.',
      anecdotes: [
        { text: 'A July 2024 solo traveller arriving around 11 p.m. was welcomed with smiles and swapped stories with the manager and a regular until time flew.', source: R + 'B489150211/' },
        { text: 'A May 2026 visitor could not forget the table lamp that lit the menu just right.', source: R + 'B530435679/' },
        { text: 'A March 2024 sightseer enjoyed a matcha cocktail that captured the essence of Kyoto.', source: R + 'B481901437/' },
      ],
      japanese_sources_summary: '公式サイト: 京都駅中央口から徒歩3分のビルの3階、モダンでラグジュアリーな店内 (赤いカウンター、ベルベット調のソファ、大理石調のテーブル)、山崎、白州、響、イチローズモルトなど国産中心のウイスキー30本以上、国内外のコンテストで実績のあるバーテンダーのフルーツ、ハーブ、スパイスのミクソロジーカクテル、貸切と個室、19:30〜翌2:00 (L.O.1:30)、日曜定休、出張バーテンダー (Instagram)。食べログ: バー・ダイニングバー、下京区真苧屋町211 K-UP七条 3F、日曜休み (不定休・貸切日あり)、予約可、カード・電子マネー・QR 可、28席、加熱式たばこ可、喫煙室、2023年6月1日開店。インボイス登録は株式会社Three Grams (国税庁)。口コミ (2023〜2026年、英語): 抹茶のカクテル、オリジナルジンとクラシックなジン、Bobby’s Gin、Kinobi、生チョコレート、笑顔の接客。',
      confidence: 'medium', sources: [WEB, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6130001067128', R + 'B472151117/', R + 'B480309746/', R + 'B481901437/', R + 'B488079063/', R + 'B489150211/', R + 'B491016543/', R + 'B510306945/', R + 'B530435679/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reviewers note international guests and a warm welcome for solo travellers.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区真苧屋町211 K-UP七条 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with November 2026 business days; Tabelog reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (34.989405, 135.760629); cross-checked: GSI 京都府京都市下京区真苧屋町211番地 (lot) 8 m; nearest existing record 30.1 m (kyoto_kappou_iimura_shichijo); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Japanese whisky (Yamazaki, Hakushu, Hibiki, Ichiro’s Malt and more)', '', 'Whisky', 'ask', 'vegan', 'Official site.', 'whisky'),
      it('', '', 'Original mixology cocktails', '', 'Cocktails', 'ask', 'ask', 'Official site.', 'cocktails'),
    ] }, {
    cuisine: '赤いカウンター、ベルベット調のソファ、大理石調のテーブルの、暗くラグジュアリーなデザイナーの店内のウイスキーとカクテルのバー (公式サイト)・山崎、白州、響、イチローズモルトなど国産中心のウイスキー30本以上、国内外のコンテストで実績のあるバーテンダーのフルーツ、ハーブ、スパイスのミクソロジーカクテル (公式サイト)・抹茶のカクテル、Bobby’s Gin やKinobiなどのオリジナルとクラシックのジン、つまみの生チョコレート (2023〜2024年の口コミ)・4,000〜5,000円ほど (食べログ)',
    neighborhood: '七条烏丸、京都駅のそば',
    gf_detail: '要確認。バーなのでウイスキー、ワイン、蒸留酒はふつうグルテンフリーだが、ビールや穀物を使ったカクテルは不可の場合も。生チョコなどのつまみは未確認 (公式サイト、2023〜2026年の口コミ)。',
    vegan_detail: '要確認。蒸留酒とフルーツのカクテルは合う可能性があるが、乳製品や卵白を使うカクテルやチョコのつまみもありうる (2023〜2026年の口コミ)。',
    notes: '[バー・京都駅のそば、2時まで] 駅から3分のビルの3階の洗練されたウイスキーとカクテルのバー。国産ウイスキー30本以上、抹茶などのフルーツやハーブの独創的なカクテル、一人旅の人も温かく迎えるスタッフ。日曜休み。',
  });
}

// ================================================================ スペイン食堂 ラ・ファローラ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26040793/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_la_farola_kumano', name: 'スペイン食堂 ラ・ファローラ (La Farola)', category: 'OMNI',
    lat: 35.01731895786745, lng: 135.7778632904742, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Paella, tortilla, jamón, ajillo and pisto may suit, but croquettes, coca and bread contain wheat; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Salads, olives, pan con tomate and grilled vegetables appear, but most dishes use seafood, ham, egg or cheese (2024–2026 reviews).',
    hours_raw: 'Tuesday–Sunday and holidays 17:00–23:00 (last food order 22:00); closed Monday and on other irregular days (Tabelog). Reservations recommended — tables fill by 19:00–20:00 (Tabelog; July 2026; May 2026). No service charge (Tabelog original 無し). Cards and QR; no e-money (Tabelog). 26 seats: 6 at the counter, 20 at tables; non-smoking; English menu with photos; school-age children welcome (Tabelog). Basement 2 of the Palestate Nissei Kumano building on Marutamachi-dori, next to a FamilyMart, 2 min from the Kumano Jinja-mae bus stop (Tabelog; July 2026). Opened 16 March 2024 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kumano Shrine, Higashiyama-Marutamachi',
    cuisine: 'Spanish shokudo and bar with tiled walls, much loved by locals (2025–2026 reviews) · two-colour paella of two choices — seafood and octopus, snow crab, duck and porcini, mackerel, octopus and sardine (November 2025–October 2026) · tapas platter with a foie gras, fig and terrine layer; soft-boiled-egg tortilla; shrimp ajillo with homemade bread; pisto; coca; croquettes; jamón ibérico and serrano by size (2025–2026) · six-dish course ¥4,400 (July 2026); Iberian pork steak course; blue-cheese basque cheesecake with honey and rock salt · Spanish wines by the glass, cava, txakoli, Mahou beer · about ¥4,000–5,000 (Tabelog)',
    website: null, gmaps: gm('スペイン食堂 ラ・ファローラ'), menu_url: TB + 'dtlmenu/',
    notes: '[Spanish · opposite Kumano Shrine] A cosy basement bar of Spanish tiles and wine where every table orders the two-colour paella — two flavours in one pan — after tapas, tortilla and ajillo; the ¥4,400 course is great value. Book; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a Spanish restaurant opened in March 2024 in the basement of a building on Marutamachi-dori shared with Indian and Mexican restaurants and a bar, drawing local families, couples and repeat guests (2024–2026 reviews).',
      philosophy: null, specialty: 'Two-colour paella.',
      anecdotes: [
        { text: 'A May 2026 couple celebrating a 15th wedding anniversary, not even hungry, could not stop eating the Iberian pork course — and found a message on the dessert plate.', source: R + 'B527418585/' },
        { text: 'An October 2026 driver bound for Shiga booked just two hours ahead and was won over by the paella of two chosen flavours.', source: R + 'B537833663/' },
        { text: 'A regular on a ninth visit kept returning for jamón, Rioja and the snow-crab and seafood two-colour paella (2024–2025).', source: R + 'B482868546/' },
      ],
      japanese_sources_summary: '食べログ: スペイン料理・居酒屋・バル、左京区聖護院山王町43-2 パレステート日生熊野 B2、バス「熊野神社前」から徒歩約2分、火〜日・祝日 17:00〜23:00 (L.O.料理22:00)、月曜と不定休、予約可、サービス料無し、カード・QR 可、電子マネー不可、26席 (カウンター6、テーブル20)、禁煙、英語と写真のメニュー、小学生以上可、2024年3月16日開店。口コミ (2024年12月〜2026年10月、英語): ファミリーマートの隣のビルの地下、スペインのタイル、2種を選べるハーフ&ハーフのパエリア (魚介とたこ、ずわいがに、鴨とポルチーニ、さば、たことイワシ)、タパスの盛り合わせ、半熟卵のトルティージャ、えびのアヒージョと自家製パン、pisto、coca、コロッケ、イベリコとセラーノのハモン、6品のコース4,400円、イベリコ豚のステーキのコース、ブルーチーズのバスクチーズケーキ、スペインワイン、カバ、txakoli、Mahou のビール。',
      confidence: 'medium', sources: [TB, R + 'B482868546/', R + 'B527418585/', R + 'B531864786/', R + 'B531980224/', R + 'B532008252/', R + 'B532432405/', R + 'B533575885/', R + 'B534225878/', R + 'B537833663/', R + 'B538338863/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu with photos; book ahead; no service charge.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町43-2 パレステート日生熊野 B2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017319, 135.777863); cross-checked: GSI 京都府京都市左京区聖護院山王町43番地 (lot) 48 m; same building as kyoto_chander_marutamachi (11.9 m) and kyoto_morioka_kumano (6.9 m), no move needed; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532432405/'],
    price_note: 'Price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Course of six dishes (tapas, salad, tortilla, ajillo with bread, two-colour paella, dessert)', '¥4,400', 'Courses', 'no', 'no', 'July 2026.', 'course'),
      it('', '', 'Two-colour paella', '', 'Paella', 'ask', 'no', 'Two flavours of choice; 2025–2026.', 'paella'),
      it('', '', 'Tortilla with soft-boiled egg', '', 'Tapas', 'ask', 'no', 'July 2026.', 'tortilla'),
    ] }, {
    cuisine: '地元に愛されるタイルの壁のスペイン食堂とバル (2025〜2026年の口コミ)・2種を選べるハーフ&ハーフのパエリア: 魚介とたこ、ずわいがに、鴨とポルチーニ、さば、たことイワシ (2025年11月〜2026年10月)・フォアグラといちじくのテリーヌのあるタパスの盛り合わせ、半熟卵のトルティージャ、えびのアヒージョと自家製パン、pisto、coca、コロッケ、サイズを選べるイベリコとセラーノのハモン (2025〜2026年)・6品のコース4,400円 (2026年7月)、イベリコ豚のステーキのコース、はちみつと岩塩を添えたブルーチーズのバスクチーズケーキ・グラスのスペインワイン、カバ、txakoli、Mahou のビール・4,000〜5,000円ほど (食べログ)',
    neighborhood: '熊野神社、東山丸太町',
    gf_detail: '要確認。パエリア、トルティージャ、ハモン、アヒージョ、pisto は合う可能性があるが、コロッケ、coca、パンは小麦。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。サラダ、オリーブ、パン・コン・トマテ、焼き野菜もあるが、多くは魚介、ハム、卵、チーズを使う (2024〜2026年の口コミ)。',
    notes: '[スペイン料理・熊野神社の向かい] スペインのタイルとワインの居心地よい地下のバル。タパス、トルティージャ、アヒージョのあとは、1つの鍋で2つの味のハーフ&ハーフのパエリアを。4,400円のコースはお得。予約を、月曜休み。',
  });
}

// ================================================================ VULCAN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26018959/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:30', '26:00']);
  put({
    id: 'kyoto_vulcan_kojinguchi', name: 'VULCAN', category: 'OMNI',
    lat: 35.01947231786333, lng: 135.769199990502, cuisine_type: 'gyoza',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Gyoza, fried noodles and fried chicken contain wheat; a kale salad and tomato and egg stir-fry may suit, but sauces are unknown (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Stir-fried potatoes, kale salad and fermented cabbage with glass noodles appear, but most dishes use lamb, chicken, pork, shrimp or egg (2022–2026 reviews).',
    hours_raw: 'Friday–Wednesday and holidays 18:30–2:00 (last orders food 0:30, drinks 1:00); closed Thursday (Tabelog). Minimum spend ¥4,000 per person (Tabelog; November 2024 for bookings). Table charge ¥300 (Tabelog original 300円). Cash only — no cards, e-money or QR (Tabelog). Guests wearing strong perfume, hair products or fabric softener are refused entry (Tabelog). 19 seats (4 at the counter); non-smoking (Tabelog). 4 min walk from Jingu-Marutamachi Stn, 2 min from the Kawaramachi-Marutamachi bus stop (Tabelog). Opened 1 October 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kojinguchi, near Kawaramachi-Marutamachi',
    cuisine: 'Gyoza and “oriental” izakaya with a punchy, pan-Asian slant and a quirky, stylish interior (2022–2026 reviews) · boiled lamb gyoza with yogurt; cilantro gyoza; stir-fried fermented cabbage and glass noodles (March 2026; June 2024) · kale salad; stir-fried guts with ginger; Taiwanese lamb fried noodles; lamb with wood-ear mushrooms and egg; creamy green-curry noodles; prawn crackers (August 2025) · oriental stir-fried potatoes (September 2025); ethnic-style fried chicken; tomato and egg stir-fry ¥850 and gyoza ¥450 (December 2022) · distinctive drinks list; about ¥2,000–5,000 (Tabelog; reviews)',
    website: null, gmaps: gm('VULCAN 出水町 京都'), menu_url: null,
    notes: '[Gyoza izakaya · Kojinguchi, to 2:00] A small, characterful late-night spot of boldly spiced gyoza and pan-Asian plates — lamb-and-yogurt dumplings, fermented-cabbage glass noodles, kale salad, fried chicken. ¥4,000 minimum and ¥300 charge; cash only; no strong scents. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: an izakaya of gyoza and oriental dishes open since October 2011 near Kojinguchi; a March 2026 reviewer notes the owner wears a “hungry bug” T-shirt as a fan of the manga Dorohedoro.',
      philosophy: null, specialty: 'Gyoza; fried chicken.',
      anecdotes: [
        { text: 'A March 2026 diner called the boiled lamb-and-yogurt gyoza and fermented-cabbage glass noodles exceptional and hard to find elsewhere.', source: R + 'B58020718/' },
        { text: 'A December 2022 business traveller stumbling in off the street ordered the ¥450 gyoza a second time.', source: R + 'B458075523/' },
        { text: 'A July 2026 regular enjoyed beer on the first hot night of summer — and apologised for the noise.', source: R + 'B366526508/' },
      ],
      japanese_sources_summary: '食べログ: 餃子・唐揚げ・居酒屋、上京区出水町255-2、神宮丸太町駅から徒歩4分、市バス「河原町丸太町」から徒歩2分、金〜水・祝日 18:30〜翌2:00 (L.O.料理0:30、飲み物1:00)、木曜休み、1人4,000円以上の利用、チャージ300円、カード・電子マネー・QR 不可、強い香水・整髪料・柔軟剤の香りの人は入店不可、19席 (カウンター4)、禁煙、2011年10月1日開店。口コミ (2022年〜2026年、英語): オリエンタルな料理の居酒屋、羊肉とヨーグルトの水餃子、パクチー餃子、発酵キャベツと春雨の炒め物、ケールのサラダ、ホルモンのしょうが炒め、台湾風の羊の焼きそば、羊ときくらげと卵の炒め、グリーンカレーの麺、えびせん、ポテトの炒め物、唐揚げ、トマトと卵の炒め850円、餃子450円、店主は Dorohedoro のファン。',
      confidence: 'medium', sources: [TB, R + 'B58020718/', R + 'B366526508/', R + 'B442994342/', R + 'B453288304/', R + 'B458075523/', R + 'B459711511/', R + 'B484221129/', R + 'B501430548/', R + 'B514980300/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; ¥4,000 minimum and ¥300 charge; avoid strong scents.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区出水町255-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.019472, 135.769200); cross-checked: GSI 京都府京都市上京区出水町255番地 (lot) 8 m; nearest existing record 24.7 m (mp_tonkatsu_shimizu); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B458075523/'],
    price_note: 'Prices from a December 2022 review; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Gyoza', '¥450', 'Gyoza', 'no', 'no', 'December 2022.', 'gyoza'),
      it('', '', 'Tomato and egg stir-fry', '¥850', 'Stir-fries', 'ask', 'no', 'December 2022.', 'tomato_egg'),
    ] }, {
    cuisine: '個性的でおしゃれな店内の、パンチのあるアジアの味の餃子とオリエンタル料理の居酒屋 (2022〜2026年の口コミ)・羊肉とヨーグルトの水餃子、パクチー餃子、発酵キャベツと春雨の炒め物 (2026年3月、2024年6月)・ケールのサラダ、ホルモンのしょうが炒め、台湾風の羊の焼きそば、羊ときくらげと卵の炒め、グリーンカレーの麺、えびせん (2025年8月)・ポテトの炒め物 (2025年9月)、エスニックな味の唐揚げ、トマトと卵の炒め850円、餃子450円 (2022年12月)・個性的な飲み物・2,000〜5,000円ほど (食べログ、口コミ)',
    neighborhood: '荒神口、河原町丸太町の近く',
    gf_detail: '要確認。餃子、焼きそば、唐揚げは小麦。ケールのサラダやトマトと卵の炒めは合う可能性があるが、たれは不明 (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。ポテトの炒め物、ケールのサラダ、発酵キャベツと春雨もあるが、多くは羊、鶏、豚、えび、卵を使う (2022〜2026年の口コミ)。',
    notes: '[餃子居酒屋・荒神口、2時まで] スパイスの効いた餃子とアジアの料理の、小さく個性的な深夜の店。羊肉とヨーグルトの水餃子、発酵キャベツと春雨、ケールのサラダ、唐揚げ。1人4,000円以上、チャージ300円、現金のみ、強い香りは不可。木曜休み。',
  });
}

save();
