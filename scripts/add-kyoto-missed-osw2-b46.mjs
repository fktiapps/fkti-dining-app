// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 46.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core:
//   + 仏男 French Man (26025933) — un-skipped from osw2-45 (integrator 2026-11-06): 有限会社らくちん is a local Kyoto/Osaka group of
//     differently named shops; no 5+ shops share the 仏男 name, so it is drafted as a sister concept.
//   + himeru (spice curry with off-spec vegetables by Kawaramachi-Marutamachi) — single shop.
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + おむらはうす 出町柳店 Omura House Demachiyanagi (omurice specialist; Kinkakuji and Demachiyanagi shops plus おむら家
//     百万遍店 per the official site — a local three-shop group; no Omura House shop is in data)
//   - 京菜味 のむら 錦店 — skipped: same-concept branch of a brand already in data.
//   - ルアン 鮒鶴京都鴨川リゾート — skipped: sub-brand of a large parent.
//   + キッチンごりら Kitchen Gorilla (meat-led yoshoku near Mototanaka) — single shop.
//   None of the four is in data/kyoto.json: grep by id, name and address; 真苧屋町220-8 is shared with kyoto_tachinomi_inaseya
//   (same building) and 田中関田町22-75 with kyoto_kroon_demachiyanagi (same building), both different shops.
//   Service charges: none listed (キッチンごりら's Tabelog original text says なし).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-46');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26031147', '京菜味 のむら 錦店: a same-concept branch of a brand already in data — kyoto_kyosaimi_nomura_karasuma (京菜味のむら 烏丸本店); our crawl also lists 京のむら (26042778)');
skip('26006391', 'ルアン 鮒鶴京都鴨川リゾート: a sub-brand of a large parent — the qualified-invoice holder (T4120001116861) is バリューマネジメント株式会社 (Osaka), which runs restaurants, wedding venues and hotels in historic buildings across Japan (vmc.co.jp/company, read 2026-11-06); our crawl also has ルアン アカガネリゾート京都東山1925 (26022051)');

// ================================================================ 仏男 (un-skipped from osw2-45)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26025933/'; const R = TB + 'dtlrvwlst/';
  const CO = 'https://frenchman-rakuchin.jp/company/';
  const TF = day(['17:00', '23:00']); const WE = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_bistro_french_man', name: '仏男 (French Man)', category: 'OMNI',
    lat: 34.98906, lng: 135.760957, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bistro plates — pâté, carpaccio, gratins, risotto, pasta, roast meats — and courses; no gluten information is published, though staff swapped a course dish on request (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat- and seafood-led bistro (Tabelog; reviews).',
    hours_raw: 'Dinner 17:00–23:00 (last food order 22:00, drinks 22:30) Tuesday–Sunday; lunch 11:30–14:00 on Saturday, Sunday and holidays, by reservation only; closed Monday (Tabelog). Call after 16:00 to book; tables limited to 3 hours when busy (Tabelog). Cards, e-money and QR (Tabelog). 18 seats with a counter; private hire up to 20; non-smoking with a smoking area inside (Tabelog). On the 2nd floor of a building on Higashinotoin just south of Shichijo, 3 min walk from Kyoto Station (Tabelog).',
    hours: { 1: TF, 2: TF, 3: TF, 4: TF, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashinotoin-Shichijo, 3 min walk north of Kyoto Station',
    cuisine: 'Casual French bistro, the origin of the 大衆酒場フレンチマン bars (Tabelog) · signature cold pasta with sea urchin and salmon roe (Tabelog) · courses with all-you-can-drink ¥6,000 and ¥8,000: assorted appetisers, fish carpaccio, seasonal soup, fish, meat and dessert (April–October 2026) · weekend lunch course with a drink ¥4,400: five appetisers (pâté, frittata, carrot râpée, red cabbage), sea-bream carpaccio and more (July 2026) · à la carte: duck with orange, roast chicken with yuzu-pepper sauce, shirasu pasta, taro and blue-cheese gratin, foie gras and porcini cream risotto, chilled chawanmushi (2026 reviews) · wine and cocktails (Tabelog)',
    website: CO, gmaps: gm('仏男 フレンチマン 京都駅'), menu_url: TB + 'dtlmenu/',
    notes: "[Bistro · Higashinotoin by Kyoto Station, casual French with free-flow] A lively second-floor bistro a few minutes from Kyoto Station — the original of the local French Man bar group — with no dress code and a counter facing the kitchen. Courses with all-you-can-drink run ¥6,000–8,000; à la carte stars include taro and blue-cheese gratin and a foie-gras porcini risotto. Busy and noisy at peak, and staff adapt dishes on request. Closed Monday; weekend lunch by reservation.",
    chef_bio: { chef_name: null, roles: ['Chef not named; operated by 有限会社らくちん (Kyoto; representative 渡辺 哲也)'], origin: null,
      background: 'Opened 13 July 2015 (Tabelog). Tabelog’s introduction calls it a bistro tucked into a corner of a building near Kyoto Station, French-centred but free of dress codes and table manners, and the origin of 大衆酒場フレンチマン. Per the company page: 有限会社らくちん, founded 2001, runs izakaya, yakiniku, yakitori, French and Thai concepts — 11 shops (8 direct, 3 franchised) — and opened its first 大衆酒場フレンチマン in Osaka in 2020.',
      philosophy: 'The shop’s motto (Tabelog; company page): life is a way to pass the time — who will you spend it with, and doing what?',
      specialty: 'Cold pasta with sea urchin and salmon roe.',
      anecdotes: [
        { text: 'A June 2026 regular, stranded by a Shinkansen suspension, made a fourth visit for duck with orange.', source: R + 'B503895466/' },
        { text: 'An October 2026 diner who avoids raw food had the carpaccio swapped for a bacon salad.', source: R + 'B537421314/' },
        { text: 'A September 2026 guest called it a cozy place for a date but too lively for serious talks.', source: R + 'B537404385/' },
      ],
      japanese_sources_summary: '食べログ: 仏男 (French Man)、ビストロ・魚介料理・バル、下京区七条東洞院下ル真苧屋町220-8 オグシビル2F、JR京都駅から徒歩3分、火〜金 17:00〜23:00、土・祝 11:30〜14:00・17:00〜23:00、日 11:30〜14:00・17:00〜23:00、月曜定休、ランチは予約のみ、混雑時は3時間制、予約は16時以降の電話がつながりやすい、カード・電子マネー・QR可、18席、貸切20名まで、禁煙 (店内に喫煙所)、2015年7月13日オープン。公式紹介: 京都駅近くのビルの一角のビストロ、フレンチ中心だがドレスコードやテーブルマナーにとらわれない、名物は雲丹といくらの冷製パスタ、人気店「大衆酒場フレンチマン」の原点、モットーは「人生は暇つぶし」。会社概要 (frenchman-rakuchin.jp): 有限会社らくちん、代表取締役 渡辺 哲也、2001年創業、11店舗 (直営8、FC3)、居酒屋・焼肉・焼き鳥・フレンチ・タイ料理、2020年に大衆酒場フレンチマン一号店 (アルデ新大阪店)。口コミ (2026年、英語): 飲み放題付きコース6,000円と8,000円、前菜盛り合わせ、鮮魚のカルパッチョ、季節のスープ、鴨のオレンジ、柚子胡椒ソースのローストチキン、しらすのパスタ、里芋とブルーチーズのグラタン、フォアグラとポルチーニのクリームリゾット、冷製の茶碗蒸し、ランチのコース4,400円、にぎやか。',
      confidence: 'medium', sources: [TB, CO, R + 'B503895466/', R + 'B526844784/', R + 'B527199663/', R + 'B528565492/', R + 'B531628647/', R + 'B535846119/', R + 'B535904128/', R + 'B536065380/', R + 'B537404385/', R + 'B537421314/', R + 'B537602033/', R + 'B537626650/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Paper menu with explanations; phone or online booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条東洞院下ル真苧屋町220-8 オグシビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989015, 135.760957) moved about 5m north to 34.98906, as kyoto_tachinomi_inaseya (same building, 220-8) sits on the same point; cross-checked: GSI 京都府京都市下京区真苧屋町220番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536065380/', R + 'B527199663/', R + 'B531628647/'],
    price_note: 'Course prices from April–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥6,000', 'Course', 'no', 'no', 'September–October 2026.', 'course_6000'),
      it('', '', 'Bistro course with all-you-can-drink', '¥8,000', 'Course', 'no', 'no', 'April 2026.', 'course_8000'),
      it('', '', 'Weekend lunch course with one drink', '¥4,400', 'Lunch', 'no', 'no', 'July 2026, booked via Ikkyu.', 'lunch_course'),
      it('', '', 'Cold pasta with sea urchin and salmon roe', '', 'Pasta', 'no', 'no', 'The signature (Tabelog).', 'uni_ikura_pasta'),
    ] }, {
    cuisine: 'カジュアルなフレンチビストロ、大衆酒場フレンチマンの原点 (食べログ)・名物は雲丹といくらの冷製パスタ (食べログ)・飲み放題付きコース6,000円と8,000円: 前菜盛り合わせ、鮮魚のカルパッチョ、季節のスープ、魚、肉、デザート (2026年4〜10月)・週末のランチコース1ドリンク付き4,400円: 前菜5種 (パテ、フリッタータ、キャロットラペ、紫キャベツ)、真鯛のカルパッチョなど (2026年7月)・アラカルト: 鴨のオレンジ、柚子胡椒ソースのローストチキン、しらすのパスタ、里芋とブルーチーズのグラタン、フォアグラとポルチーニのクリームリゾット、冷製の茶碗蒸し (2026年の口コミ)・ワインとカクテル (食べログ)',
    neighborhood: '東洞院七条、京都駅から北へ徒歩3分',
    gf_detail: '要確認。パテ、カルパッチョ、グラタン、リゾット、パスタ、ローストなどのビストロ料理とコース。グルテンの情報は公開されていないが、頼めばコースの皿を替えてくれた (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と魚介中心のビストロ (食べログ、口コミ)。',
    notes: '[ビストロ・京都駅近くの東洞院、飲み放題のカジュアルフレンチ] 京都駅から数分のビル2階のにぎやかなビストロ。地元のフレンチマン系列の原点で、ドレスコードなし、キッチンに面したカウンター。飲み放題付きコースは6,000〜8,000円、アラカルトなら里芋とブルーチーズのグラタンやフォアグラとポルチーニのリゾット。混む時間はにぎやか、頼めば料理を替えてくれる。月曜休み、週末の昼は予約制。',
  });
}

// ================================================================ himeru
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26040939/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://himeru-spicecurry.com/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_himeru_spice_curry', name: 'himeru', category: 'OMNI',
    lat: 35.019735, lng: 135.769258, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spice curries with turmeric rice and vegetable sides; one curry is butter-and-soy-sauce based; no gluten information is published (official site; reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'The sesame tantan keema curry is made vegan with soy meat (official site); the other curries use chicken, butter or fish, and cross-contact is not described.',
    hours_raw: '11:00–22:00 (last order 21:00); the official site says closing days are irregular, Tabelog lists Tuesday as closed (official site; Tabelog). Bookings accepted online (official site). Order by smartphone QR code (December 2025–January 2026). Tabelog lists cards accepted; one January 2026 reviewer paid cash only — check. 19 seats: counter seats screened from neighbours, and tables (Tabelog; 2025 reviews). Non-smoking. 4 min walk from the Kawaramachi-Marutamachi bus stop, 7 min from Jingu-Marutamachi Stn (official site).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Marutamachi, south-east of the Imperial Palace — 7 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Spice curry built on off-spec vegetables that would otherwise be thrown away (official site) · butter-soy chicken curry, mild and the house standard; sesame tantan keema with soy meat, vegan and Sichuan-peppery; a monthly seasonal curry, e.g. Kochi ginger and spiced chicken bean keema (November 2026), sudachi and grilled salmon cream curry; mackerel miso and Kishu plum dashi curry (March 2025) (official site; reviews) · two- or three-curry combinations with turmeric rice, achaar and a ring of vegetable sides; medium chicken butter curry ¥1,200 (March 2025); toppings such as spiced chicken, grilled cheese, a spicy egg; smoked oil-sardine potato salad (2025) · chai and lassi ¥500, homemade lemonade, crème brûlée ¥450, Kirin draught ¥500, craft beer ¥700 (official site)',
    website: SITE, gmaps: gm('himeru スパイスカレー 上生洲町'), menu_url: SITE,
    notes: "[Spice curry · Kawaramachi-Marutamachi, curry that rescues vegetables] A small, jazz-playing curry shop whose name comes from 日の目を見る, \"to see the light of day\": oversized or blemished vegetables that farms would discard ring every plate. Pick two or three curries — mild butter-soy chicken, a vegan sesame tantan keema, a monthly special — over turmeric rice, about ¥1,200–2,000. Open 11:00–22:00.",
    chef_bio: { chef_name: null, roles: ['Owner not named; a young owner (February 2025 review)'], origin: null,
      background: 'Per the official site: a spice-curry shop that cooks and sells vegetables of perfectly good quality that are discarded for being too big or slightly blemished — about 1.9 million tonnes a year in Japan — to make customers and growers happy; the name himeru (ひめる) shortens 日の目を見る, vegetables that would have been thrown away reaching the table.',
      philosophy: 'Per the official site: to save vegetables that would be thrown away and make both customers and producers happy.',
      specialty: 'Butter-soy chicken curry.',
      anecdotes: [
        { text: 'A March 2025 theatregoer came after Bunraku at the nearby prefectural arts centre for the mackerel-miso and plum dashi curry.', source: R + 'B503082514/' },
        { text: 'A June 2025 yearly visitor never gets bored because the seasonal curry changes, and the stamp card keeps piling up at home.', source: R + 'B509292342/' },
        { text: 'A September 2025 diner said the three-curry set changed a view of spice curry: the vegetables and chicken were not drowned by spice.', source: R + 'B513930237/' },
      ],
      japanese_sources_summary: '公式サイト (himeru-spicecurry.com): himeru、規格外野菜を使用したスパイスカレー屋、品質に問題はないが形が大きすぎたり少し傷があるだけで捨てられる野菜を調理・販売、日本では年間約190万トン、名前の由来は「日の目を見る」の略、バター醤油チキンカレー (辛くない当店オリジナル)、胡麻坦々キーマカレー (大豆ミートを使用したビーガンカレー、ホアジャオ)、季節のスパイスカレー、2種あいがけカレー、付け合わせの野菜は日による、チャイ500円、ラッシー500円、生ビール500円、クラフトビール700円、クリームブリュレ450円、11月の季節限定は高知生姜とスパイス鶏の豆キーマカレー、すだちと焼鮭の濃厚クリームカレー、上京区上生洲町248-4、11:00〜22:00 (L.O. 21:00)、不定休、ネット予約。食べログ: カレー、神宮丸太町駅から324m、火曜定休、カード可、19席、禁煙。口コミ (2025〜2026年、英語): 若い店主、3種のあいがけ、ターメリックライス、アチャール、チキンバターカレー中盛り1,200円、鯖味噌と紀州南高梅の出汁カレー (2025年3月)、スパイスチキンや焼きチーズのトッピング、スモークオイルサーディンのポテトサラダ、スマホのQRで注文、ジャズ、隣を気にしないカウンター。',
      confidence: 'medium', sources: [TB, SITE, R + 'B501854200/', R + 'B503082514/', R + 'B504018347/', R + 'B509084405/', R + 'B509292342/', R + 'B513930237/', R + 'B514691167/', R + 'B515031059/', R + 'B519258969/', R + 'B521089459/', R + 'B522587214/', R + 'B534790277/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering on your phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区上生洲町248-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with November 2026 posts; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.019717, 135.769258) moved about 2m north to 35.019735 to clear mp_tonkatsu_shimizu (3m); GSI 京都府京都市上京区上生洲町248番地 (lot) resolves 225m north, so not lot-confirmed; the Tabelog point matches the official access (4 min from Kawaramachi-Marutamachi bus stop); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B504018347/'],
    price_note: 'Drinks from the official site; curry price from a March 2025 review.', last_checked: TODAY, items: [
      it('バター醤油チキンカレー', '', 'Butter-soy chicken curry (medium)', '¥1,200', 'Curry', 'ask', 'no', 'March 2025.', 'butter_soy_chicken'),
      it('胡麻坦々キーマカレー', '', 'Sesame tantan keema curry with soy meat (vegan)', '', 'Curry', 'ask', 'vegan', 'Official site.', 'tantan_keema'),
      it('季節のスパイスカレー', '', 'Seasonal spice curry', '', 'Curry', 'ask', 'ask', 'Changes monthly.', 'seasonal'),
      it('チャイ', '', 'Chai (hot or iced)', '¥500', 'Drink', 'gf', 'no', '', 'chai'),
      it('濃厚とろ～りクリームブリュレ', '', 'Crème brûlée (limited)', '¥450', 'Dessert', 'ask', 'no', '', 'brulee'),
    ] }, {
    cuisine: '捨てられるはずだった規格外野菜を使うスパイスカレー (公式サイト)・辛くない定番のバター醤油チキンカレー、大豆ミートのビーガンの胡麻坦々キーマ (花椒でピリッと)、毎月の季節のカレー、たとえば高知生姜とスパイス鶏の豆キーマ (2026年11月)、すだちと焼鮭のクリームカレー、鯖味噌と紀州梅の出汁カレー (2025年3月) (公式サイト、口コミ)・2種や3種のあいがけにターメリックライス、アチャール、野菜の付け合わせがぐるり、チキンバターカレー中盛り1,200円 (2025年3月)、スパイスチキン、焼きチーズ、辛い卵のトッピング、スモークオイルサーディンのポテトサラダ (2025年)・チャイとラッシー500円、自家製レモネード、クリームブリュレ450円、生ビール500円、クラフトビール700円 (公式サイト)',
    neighborhood: '河原町丸太町、御所の南東。神宮丸太町駅から徒歩7分',
    gf_detail: '要確認。ターメリックライスと野菜の付け合わせのスパイスカレー、バター醤油ベースのカレーもある。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: '胡麻坦々キーマカレーは大豆ミートのビーガン (公式サイト)。ほかのカレーは鶏、バター、魚を使い、交差接触の説明はない。',
    notes: '[スパイスカレー・河原町丸太町、野菜を救うカレー] ジャズの流れる小さなカレー屋。店名は「日の目を見る」から。農家で捨てられるはずの大きすぎたり傷のある野菜が皿をぐるりと囲む。辛くないバター醤油チキン、ビーガンの胡麻坦々キーマ、月替わりの一皿から2〜3種を選んでターメリックライスと。1,200〜2,000円ほど。11:00〜22:00。',
  });
}

// ================================================================ おむらはうす 出町柳店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26000997/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.omurahouse.com/'; const ABOUT = SITE + 'about.html'; const MENU = SITE + 'menu.html'; const FAQ = SITE + 'faq.html'; const SHOP = SITE + 'shop.html';
  const H = day(['11:00', '15:00'], ['17:00', '20:30']);
  put({
    id: 'kyoto_omura_house_demachiyanagi', name: 'おむらはうす 出町柳店 (Omura House Demachiyanagi)', category: 'OMNI',
    lat: 35.02994535785847, lng: 135.77483142060385, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the rice is 30% pressed barley, and the shop says even the dressings contain wheat flour, so it may not be able to cater for a wheat allergy (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: omurice made with three eggs; butter is used in cooking (salad oil can be substituted); only the chicken rice and salads are egg-free (official site).',
    hours_raw: '11:00–15:00 (last order 14:30) and 17:00–20:30 (last order 20:00); closed Monday, or Tuesday when Monday is a holiday (official site). Tabelog lists 11:00–14:30 and 17:00–20:00. No reservations — first come, first served; queues at lunch and at weekends (official site; several 2026 reviews). Cards, transport IC, iD, QUICPay and QR payments (official site). 26 seats; non-smoking; strollers fine; not barrier-free (official site; Tabelog). Takeout of omurice, salads and soup by phone (official site). 159 m from Demachiyanagi Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Demachiyanagi — 159 m from the station',
    cuisine: 'Creative Kyoto-style omurice, the first omurice specialist in Kyoto (official site) · three LL Sakura eggs per serving over rice cooked with 30% pressed barley, with sweet Awaji onions and celery (official site) · tororo-yuba omurice over hijiki rice with dashi sauce and wasabi, the most popular, ¥2,000; hayashi with melting cheese ¥1,600; chicken ¥1,300; curry, Japanese-style (wild vegetables, miso-sansho chicken mince), tofu ¥1,600; seafood, salad, meat, shrimp, mentaiko ¥1,700; mushroom ¥1,900; oyako ¥2,000; children’s ¥850 (official menu) · omelette-wrapped potato salad ¥1,200, yuba salad, salmon salad; set for two ¥5,000; 1.5× and 2× portions for a fee (official site) · pumpkin soup (2026 reviews)',
    website: SITE, gmaps: gm('おむらはうす 出町柳店'), menu_url: MENU,
    notes: "[Omurice · Demachiyanagi, Kyoto's original omurice specialist] A cosy, Beatles-playing omurice house by Demachiyanagi with long lunch queues. Each plate uses three eggs over barley rice; the favourite is silky tororo-yuba on hijiki rice with dashi and wasabi (¥2,000), alongside hayashi with cheese and a dozen more (¥1,300–2,000). No bookings; cards and QR. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner not named; a former itamae (official site)'], origin: null,
      background: 'Per the official site: Kyoto’s first omurice specialist, opened by an omurice-loving owner who found none to suit and drew on experience as an itamae; every sauce is handmade; three LL Sakura eggs per plate, barley rice and Awaji onions; sister shops are おむらはうす 金閣寺店 and おむら家 百万遍店. A May 2026 reviewer gives the opening year as 1994.',
      philosophy: 'Per the official site: good ingredients make good food — care over rice and eggs, all sauces made by hand.',
      specialty: 'Tororo-yuba omurice.',
      anecdotes: [
        { text: 'A July 2026 family coming from the Mitarashi Festival at Shimogamo Shrine waited about 50 minutes; the shop was there when one parent started university nearby over 20 years earlier.', source: R + 'B532476760/' },
        { text: 'A September 2026 walker joined the queue before noon for the silky yuba omurice on hijiki rice, with the Beatles playing.', source: R + 'B536023203/' },
        { text: 'An October 2026 diner thought the prices high until the hayashi omurice arrived with plenty of beef.', source: R + 'B538061646/' },
      ],
      japanese_sources_summary: '公式サイト (omurahouse.com): おむらはうす、京都に誕生した初めてのオムライス専門店、オムライス好きの店主が自分好みのものを作ろうと板前の経験を生かして開店、ソースは全て手作り、京風の創作オムライス、押し麦を3割混ぜた麦ご飯、淡路産の玉ねぎ、セロリ (抜きも可)、LLサイズの桜卵3個、とろ湯葉オムライス2,000円 (ヒジキごはん、出汁ソース、ワサビ)、ハヤシオムライス1,600円、チキン1,300円、カレー・和風・豆腐1,600円、シーフード・サラダ・ミート・エビ・明太子1,700円、キノコ1,900円、親子2,000円、お子様850円、2人deセット5,000円、玉子焼とポテトのサラダ1,200円、店舗は金閣寺店・出町柳店・おむら家 百万遍店、出町柳店は11:00〜15:00 (L.O. 14:30)・17:00〜20:30 (L.O. 20:00)、月曜定休 (祝日は営業し翌日休み)、左京区田中関田町22-75、予約不可、全席禁煙、キャッシュレス可、テイクアウト可、小麦粉アレルギーはドレッシングにも小麦粉を含むため対応できない場合あり、バターはサラダ油に替えられる、卵を使わないのはチキンライスとサラダ、大盛り1.5倍・特盛2倍は有料。食べログ: オムライス、出町柳駅から159m、26席。口コミ (2026年、英語): 1994年オープン、行列、ビートルズ、かぼちゃのスープ、ハヤシにとろけるチーズ、和風は山菜と味噌山椒の鶏そぼろ、明太子とクリームソース。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, FAQ, SHOP, R + 'B419319611/', R + 'B528272584/', R + 'B529096117/', R + 'B529850144/', R + 'B531286119/', R + 'B532476760/', R + 'B532874463/', R + 'B534918359/', R + 'B536023203/', R + 'B537659666/', R + 'B537916058/', R + 'B538061646/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue at the door; no bookings.' },
    safety: { ...SAFETY0,
      staff_allergy_handling: [{ text: 'The FAQ says that for a wheat-flour allergy even the dressings contain flour, so the shop may not be able to cater; butter can be swapped for salad oil; other allergies may also not be manageable — ask staff when ordering.', source: FAQ, verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中関田町22-75',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with March 2026 notices; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.029945, 135.774831); cross-checked: GSI 京都府京都市左京区田中関田町22番地 (lot) 52m; 10m from kyoto_kroon_demachiyanagi (same address, 22-75); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu prices (tax included), read November 2026.', last_checked: TODAY, items: [
      it('とろ湯葉オムライス', '', 'Tororo-yuba omurice on hijiki rice with dashi sauce', '¥2,000', 'Omurice', 'no', 'no', 'Most popular.', 'yuba'),
      it('ハヤシオムライス', '', 'Hayashi omurice with melting cheese', '¥1,600', 'Omurice', 'no', 'no', '', 'hayashi'),
      it('チキンオムライス', '', 'Chicken omurice', '¥1,300', 'Omurice', 'no', 'no', '', 'chicken'),
      it('和風オムライス', '', 'Japanese-style omurice', '¥1,600', 'Omurice', 'no', 'no', '', 'wafu'),
      it('明太子オムライス', '', 'Mentaiko omurice', '¥1,700', 'Omurice', 'no', 'no', '', 'mentaiko'),
      it('お子様オムライス', '', 'Children’s omurice', '¥850', 'Omurice', 'no', 'no', '', 'kids'),
      it('玉子焼とポテトとのサラダ', '', 'Omelette-wrapped potato salad', '¥1,200', 'Salad', 'no', 'no', 'Dressings contain wheat flour.', 'potato_salad'),
    ] }, {
    cuisine: '京都初のオムライス専門店の京風創作オムライス (公式サイト)・1人前に桜卵LL3個、押し麦3割の麦ご飯、甘い淡路の玉ねぎとセロリ (公式サイト)・一番人気はヒジキごはんに生湯葉と出汁ソース、ワサビのとろ湯葉オムライス2,000円、とろけるチーズのハヤシ1,600円、チキン1,300円、カレー、和風 (山菜、味噌山椒の鶏そぼろ)、豆腐1,600円、シーフード、サラダ、ミート、エビ、明太子1,700円、キノコ1,900円、親子2,000円、お子様850円 (公式のメニュー)・玉子焼で包んだポテトサラダ1,200円、湯葉のサラダ、サーモンのサラダ、2人deセット5,000円、有料で1.5倍と2倍の大盛り (公式サイト)・かぼちゃのスープ (2026年の口コミ)',
    neighborhood: '出町柳。駅から159m',
    gf_detail: 'グルテンフリー不可。ご飯は押し麦3割、ドレッシングにも小麦粉が入り、小麦アレルギーには対応できない場合があると店が明記 (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。卵3個のオムライス、炒めにバター (サラダ油に替えられる)、卵を使わないのはチキンライスとサラダのみ (公式サイト)。',
    notes: '[オムライス・出町柳、京都元祖のオムライス専門店] 出町柳の、ビートルズが流れるオムライスの店。昼は行列。1皿に卵3個、麦ご飯。人気はヒジキごはんに生湯葉と出汁、ワサビのとろ湯葉 (2,000円)。チーズ入りのハヤシなど十数種 (1,300〜2,000円)。予約不可、カードやQR可。月曜休み。',
  });
}

// ================================================================ キッチンごりら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26018847/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:15'], ['17:30', '21:00']); const TH = day(['11:30', '14:15']); const SA = day(['11:00', '14:15'], ['17:30', '21:00']);
  put({
    id: 'kyoto_kitchen_gorilla', name: 'キッチンごりら (Kitchen Gorilla)', category: 'OMNI',
    lat: 35.03449042785855, lng: 135.78413523064322, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Breaded cutlets and fried prawns, sauced hamburg steaks and grilled pork, beef and venison steaks; no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-led yoshoku menu (Tabelog; reviews).',
    hours_raw: 'Lunch 11:30–14:15 (Saturday from 11:00); dinner 17:30–21:00 Monday–Wednesday, Friday and Saturday; Thursday lunch only; closed Sunday; hours may change (Tabelog). Bookings accepted. Cards, e-money and PayPay (Tabelog). No service charge (Tabelog original text: なし). 20 seats: a 6-seat counter and tables; two parking spaces in front; non-smoking (Tabelog; September 2026). Cutlets are fried slowly — about 20–30 minutes for a cutlet or pork steak (July and September 2026). In a converted house east of Mototanaka Stn, 256 m away (Tabelog; July 2026).',
    hours: { 0: LD, 1: LD, 2: LD, 3: TH, 4: LD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tanaka, east of Mototanaka Stn (Eizan line), near Kyoto University',
    cuisine: 'Meat-led yoshoku set meals with vegetable sides, miso soup and rice (2026 reviews) · pork hamburg steak with almost no filler, firm like a large sausage, 150 g to 300 g, with ketchup or other sauces; beef hamburg (2026) · thick pork steak 250 g or 300 g with balsamic or garlic sauce; thick pork-loin cutlet cut, breaded and fried to order; bite-sized pork cutlets; fried prawns (2025–2026) · T-bone steak; Honshu venison leg steak (August–September 2026) · wine (Tabelog)',
    website: null, gmaps: gm('キッチンごりら 田中樋ノ口町'), menu_url: TB,
    notes: "[Yoshoku · Mototanaka near Kyoto University, a meat-lover's set-meal house] A converted house in the student quarter east of Mototanaka, serving generous, meat-first yoshoku: a pure-pork hamburg steak with almost no filler, firm as a big sausage; thick pork steaks with balsamic or garlic; slow-fried loin cutlets; even venison. Sets about ¥1,000–2,000, with sides, soup and rice. Expect a wait for fried dishes. Closed Sunday; Thursday lunch only.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'A neighbourhood yoshoku house in a residential street east of Mototanaka Station, with several reviewers on a 7th to 15th visit (2024–2026 reviews).',
      philosophy: null,
      specialty: 'Filler-free pork hamburg steak; thick pork steak.',
      anecdotes: [
        { text: 'A fifteen-visit regular (July 2026) tried the beef for the first time after years of the meaty hamburg steaks.', source: R + 'B434831949/' },
        { text: 'A September 2026 diner watched the loin cut, breaded and fried on low heat for about 20 minutes.', source: R + 'B535584752/' },
        { text: 'A June 2026 hiker came down from Enryaku-ji for the pork steak and fried prawns.', source: R + 'B530535232/' },
      ],
      japanese_sources_summary: '食べログ: キッチンごりら、洋食・豚肉料理・牛肉料理、左京区田中樋ノ口町17-3、叡山電鉄元田中駅から徒歩10分 (256m)、月火水金 11:30〜14:15・17:30〜21:00、木 11:30〜14:15、土 11:00〜14:15・17:30〜21:00、日曜定休、予約可、カード・電子マネー・PayPay可、サービス料なし、20席 (カウンター6、テーブル14)、駐車場2台、禁煙。口コミ (2024〜2026年、英語): つなぎのほとんどない豚のハンバーグ (ソーセージのよう)、150g〜300g、牛ハンバーグ、厚切りの豚ステーキ250gか300gでバルサミコかガーリック、注文後に切って揚げる厚切りのロースカツ (約20分)、ひと口カツ、海老フライ、Tボーンステーキ、本州鹿のもも肉のステーキ、野菜の付け合わせ・味噌汁・ご飯の定食、民家を改装した店、常連客。',
      confidence: 'medium', sources: [TB, R + 'B276932541/', R + 'B299990758/', R + 'B434831949/', R + 'B453733037/', R + 'B476123028/', R + 'B528458533/', R + 'B530535232/', R + 'B531809932/', R + 'B532097867/', R + 'B532102016/', R + 'B535584752/', R + 'B536172427/'] },
    cultural_comfort: { level: 'japanese', note: 'Neighbourhood yoshoku; parking for two cars.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中樋ノ口町17-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.03449, 135.784135); cross-checked: GSI 京都府京都市左京区田中樋ノ口町17番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532102016/', R + 'B536172427/'],
    price_note: 'No prices published; reviewers spent about ¥1,000–3,000 (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Pork hamburg steak set (150–300 g)', '', 'Set', 'ask', 'no', '', 'hamburg'),
      it('', '', 'Thick pork steak, balsamic or garlic (250 or 300 g)', '', 'Set', 'ask', 'no', 'About 30 minutes.', 'pork_steak'),
      it('', '', 'Thick pork-loin cutlet set', '', 'Set', 'no', 'no', 'Fried to order.', 'rosu_katsu'),
      it('', '', 'Fried prawns (à la carte)', '', 'Side', 'no', 'no', '', 'ebi_fry'),
    ] }, {
    cuisine: '野菜の付け合わせ、味噌汁、ご飯付きの肉中心の洋食の定食 (2026年の口コミ)・つなぎのほとんどない豚のハンバーグ、大きなソーセージのような歯ごたえ、150g〜300g、ケチャップなどのソース、牛のハンバーグ (2026年)・厚切りの豚ステーキ250gか300g、バルサミコかガーリックのソース、注文後に切って衣を付けて揚げる厚切りのロースカツ、ひと口カツ、海老フライ (2025〜2026年)・Tボーンステーキ、本州鹿のもも肉のステーキ (2026年8〜9月)・ワイン (食べログ)',
    neighborhood: '田中、叡電元田中駅の東、京大の近く',
    gf_detail: '要確認。衣を付けたカツや海老フライ、ソースのハンバーグ、焼いた豚・牛・鹿のステーキ。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉中心の洋食のメニュー (食べログ、口コミ)。',
    notes: '[洋食・京大近くの元田中、肉好きの定食屋] 元田中の東の学生街の、民家を改装した店。つなぎのほとんどない大きなソーセージのような豚のハンバーグ、バルサミコかガーリックの厚切り豚ステーキ、低温でじっくり揚げるロースカツ、鹿肉まで、肉が主役のたっぷりの洋食。定食は1,000〜2,000円ほどで、付け合わせ、汁物、ご飯付き。揚げ物は時間がかかる。日曜休み、木曜は昼のみ。',
  });
}

save();
