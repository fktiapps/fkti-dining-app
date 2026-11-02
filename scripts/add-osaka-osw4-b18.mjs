// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 18.
//   + 心斎橋イタリアンレストラン ルサンク Le Cinq (lounge-style Italian with all-you-can-drink courses, Unagidani Block B1F)
//   + Oh！マイステーキ Oh! My Steak (teppanyaki steak counter, lunch from ¥1,200, Shinsaibashi)
//   + 辛いもんや ギロチン 南船場店 Karai Monya Guillotine (spicy-food izakaya with heat levels, Shinmachi)
//   + 炭焼笑店 陽 難波店 Sumiyaki Shoten Yo (charcoal yakitori and seafood, Ura-Namba)
//   - 27001615 クンテープ 道頓堀本店: Kuntep runs Dotonbori, LUCUA Osaka, Time Out Market Osaka (opened June 2026),
//     Toranomon Hills in Tokyo and an Expo shop, plus other formats (search results) — 5+ and multi-city, chain.
//   Group-size line (brief): ギロチン also has 船場本店 and 大正店 (HotPepper) — small group. 陽 is the first shop of
//   a group whose other brands 鴨尽 (osaka_sumibi_yakitori_kamojin_namba) and 鶏尽 (osaka_sumibi_yakitori_torijin_namba)
//   are in data — different brands (sister concepts), drafted. ルサンク and Oh！マイステーキ: one shop found each.
//   None of the four is in data/osaka.json (grep by name, Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27001615', 'chain: クンテープ (Kuntep) Thai — Dotonbori, LUCUA Osaka, Time Out Market Osaka, Toranomon Hills Tokyo, Expo, plus other formats');

// ================================================================ ルサンク
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27012463/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'osaka_le_cinq_higashishinsaibashi', name: '心斎橋イタリアンレストラン ルサンク (Le Cinq)', category: 'OMNI',
    lat: 34.6746, lng: 135.50237, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses run appetisers (bruschetta, anchovy potato fries), salad, pasta, a steak or fish main and dessert.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The courses are built around wagyu, chicken or fish mains with cheese and prosciutto in the salads.',
    hours_raw: 'Daily 17:00–01:00, last order 24:00; hours may change (Tabelog). Reservations accepted (Tabelog). Charge ¥550 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC and other e-money, PayPay, d Barai, Rakuten Pay and au PAY (Tabelog). 50 seats: 6 at the counter, 35 at sofa tables, 12 in private rooms; high ceilings, lounge style; smoking allowed (Tabelog). English menu (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-19-15, UNAGIDANI BLOCK B1F — 3 min from Shinsaibashi Stn exit 2',
    cuisine: 'Lounge-style Italian with black wagyu steak, seafood, pasta, pizza, ajillo and risotto; courses with all-you-can-drink of 60+ drinks from ¥5,500 to ¥8,500 (Tabelog shop text) · roast chicken thigh course ¥5,980; A5 wagyu top sirloin course (Tabelog) — ¥6,500 with drinks in August–October 2026: assorted appetisers (salmon carpaccio or meunière, basil bruschetta, anchovy potato fries), Caesar or prosciutto salad, A5 wagyu top sirloin, pasta of the day (shrimp tomato cream, Genovese, pescatore arrabbiata), dessert (tiramisu, chocolate cake) · seafood course ¥6,500 with pan-fried salmon and sea bream (September 2026) · signature carbonara (August 2026) · cheese and bar menu in the private room (October 2026)',
    website: 'https://le-cinq.gorp.jp/', gmaps: gm('ルサンク 心斎橋'), menu_url: null,
    notes: '[Italian · Higashi-Shinsaibashi, lounge dining with drinks included] A basement Italian off Unagidani with high ceilings, sofa booths and private rooms, built for groups and dates. Book the ¥6,500 A5 wagyu course: appetisers, salad, pasta, steak and dessert with 60-plus drinks included. Open until 1:00. Smoking is allowed inside.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 11 January 2006; Italian with carefully chosen ingredients and a lounge interior.', philosophy: null, specialty: 'A5 wagyu course with all-you-can-drink.',
      anecdotes: [
        { text: '"The interior is spacious with high ceilings, making it suitable for after-parties for weddings" — September 2026.', source: R + 'B536536110/' },
        { text: '"What impressed me the most was the service. The staff was attentive, offering to serve the dishes and checking on drink refills" — October 2026, a date.', source: R + 'B536887715/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 心斎橋イタリアンレストラン ルサンク、イタリアン・ダイニングバー・パスタ、大阪市中央区東心斎橋1-19-15 UNAGIDANI BLOCK B1F、心斎橋駅2番出口から徒歩3分、毎日17:00〜翌1:00 (L.O. 24:00)、予約可、チャージ550円、カード・電子マネー・QR 決済可、50席 (カウンター6、テーブル35、個室12)、喫煙可、英語のメニュー、2006年1月11日オープン、公式 le-cinq.gorp.jp。黒毛和牛のステーキ、魚介、パスタ、ピッツァ、アヒージョ、リゾット、60種以上の飲み放題つきのコース5,500〜8,500円。口コミ(2026年8月〜10月): A5和牛のトップサーロインのコース6,500円、前菜の盛り合わせ、シーザーサラダ、生ハムのサラダ、エビのトマトクリームパスタ、ジェノベーゼ、ティラミス、魚介のコース、カルボナーラ、天井が高いラウンジのような店内、個室。',
      confidence: 'medium', sources: [TB, 'https://le-cinq.gorp.jp/', R + 'B531696457/', R + 'B533713445/', R + 'B533978063/', R + 'B534422200/', R + 'B534916428/', R + 'B535443346/', R + 'B536208281/', R + 'B536223542/', R + 'B536536110/', R + 'B536557130/', R + 'B536887715/', R + 'B537350120/', R + 'B537460721/', R + 'B537620936/', R + 'B537752519/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); set courses with drinks included.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-15 ＵＮＡＧＩＤＡＮＩ ＢＬＯＣＫ Ｂ１Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and shop website; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} 34.674649,135.5025 sits 1 m from アルバロンガ (osaka_albalonga_higashishinsaibashi, same building 2F) and 7 m from リュミエール (3F); GSI 大阪府大阪市中央区東心斎橋一丁目19番15号 (go) 34.674583,135.502396 is 6 m from 循誠 (1F/2F). Pin offset to 34.6746,135.50237: 9 m from 循誠, 12 m from アルバロンガ, 17 m from リュミエール; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537620936/', R + 'B534916428/', TB],
    price_note: 'Course prices from the Tabelog listing and August–October 2026 reviews; all include 60+ drinks.', last_checked: TODAY, items: [
      it('', '', 'A5 wagyu top sirloin course with all-you-can-drink, 7 items', '¥6,500', 'Course', 'ask', 'no', 'August–October 2026 reviews.', 'a5_course'),
      it('', '', 'Seafood course with all-you-can-drink', '¥6,500', 'Course', 'ask', 'no', 'September 2026 reviews.', 'seafood_course'),
      it('', '', 'Roast chicken thigh course with all-you-can-drink, 7 items', '¥5,980', 'Course', 'ask', 'no', 'Tabelog listing.', 'chicken_course'),
      it('', '', 'Carbonara', '', 'Pasta', 'no', 'no', 'August 2026 review.', 'carbonara'),
    ] }, {
    cuisine: '黒毛和牛のステーキ、魚介、パスタ、ピッツァ、アヒージョ、リゾットのラウンジのようなイタリアン。60種以上の飲み放題つきのコースは5,500〜8,500円 (食べログの店の紹介)・鶏ももローストのコース5,980円、A5和牛のトップサーロインのコース (食べログ) — 2026年8〜10月は飲み放題つき6,500円: 前菜の盛り合わせ (サーモンのカルパッチョかムニエル、バジルのブルスケッタ、アンチョビポテト)、シーザーサラダか生ハムのサラダ、A5和牛のトップサーロイン、日替わりパスタ (エビのトマトクリーム、ジェノベーゼ、ペスカトーレのアラビアータ)、デザート (ティラミス、チョコレートケーキ)・サーモンと鯛のポワレの魚介のコース6,500円 (2026年9月)・名物のカルボナーラ (2026年8月)・個室でチーズとバーのメニュー (2026年10月)',
    neighborhood: '東心斎橋1-19-15 UNAGIDANI BLOCK B1F。心斎橋駅2番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースは前菜 (ブルスケッタ、アンチョビポテト)、サラダ、パスタ、ステーキか魚のメイン、デザート。',
    vegan_detail: '要確認。ヴィーガンの情報なし。コースは和牛、鶏、魚のメインで、サラダにはチーズや生ハム。',
    notes: '[イタリアン・東心斎橋、飲み放題つきのラウンジディナー] Unagidani のそば、地下にある天井の高いイタリアンで、ソファ席と個室があり、グループやデートに。前菜、サラダ、パスタ、ステーキ、デザートに60種以上の飲み放題がつく6,500円のA5和牛のコースを予約して。深夜1時まで。店内は喫煙可。',
  });
}

// ================================================================ Oh！マイステーキ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27113287/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'osaka_oh_my_steak_shinsaibashi', name: 'Oh！マイステーキ (Oh! My Steak)', category: 'OMNI',
    lat: 34.674222, lng: 135.501993, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Teppanyaki steak is served with wasabi and miso (September 2026), with salad, grilled vegetables, mashed potatoes, garlic rice and soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a teppanyaki steakhouse; the lunch set comes with oxtail or beef-tendon soup.',
    hours_raw: 'Daily 11:00–16:00 (lunch) and 16:00–22:00 (dinner); closed irregularly (Tabelog). Reservations accepted; walk-ins at weekday lunch were seated (August 2026); booking times were moved to help a guest arriving early (June 2026). 5% service charge at dinner (Tabelog). Cards only for bills of ¥3,000 or more; e-money below that; no QR payment (Tabelog). 30 seats, all at teppan counters; private hire for 20+; non-smoking (Tabelog). Children of school age welcome (Tabelog). Rice refills are charged (August 2026). Weekend prices higher than the ¥1,200 advertised lunch surprised one reviewer (July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-3-29, ミヤプラザ心斎橋 B1F, stairs beside Ichiran — 2 min from Shinsaibashi Stn exit 4A',
    cuisine: 'Teppanyaki steak grilled in front of you: Kobe beef, wagyu and domestic beef, with sirloin, fillet and Chateaubriand; the shop buys whole A5 Kobe beef (Tabelog shop text) · lunch from ¥1,200: domestic lean steak 80 g with salad, grilled vegetables and oxtail soup (October 2026), 15 pieces of steak (July 2026) · ¥2,500 lunch comparing 130 g of wagyu and domestic beef, with a soft drink, salad, rice, miso or beef-tendon soup, grilled vegetables and mashed potatoes (July–August 2026) · dinner from ¥2,360; anniversary course from ¥6,800 (Tabelog) · wagyu and domestic beef tasting course with drinks ¥7,800; steak full course with two meats and grilled seafood ¥8,800 (Tabelog) · meat-heavy course with A5 wagyu and domestic beef, garlic rice and clear soup, 200 g (September 2026)',
    website: null, gmaps: gm('Oh！マイステーキ 心斎橋'), menu_url: null,
    notes: '[Teppanyaki steak · Shinsaibashi, counter steak lunch from ¥1,200] A red-themed basement teppan counter beside Ichiran Shinsaibashi where the chef grills Kobe, wagyu and domestic beef in front of you. The value is lunch: 80 g of lean steak with soup and sides for ¥1,200, or a 130 g wagyu-and-domestic comparison for ¥2,500. Dinner courses run ¥6,800–8,800, plus 5% service. Cards only for ¥3,000 or more; a Kobe Beef Association certificate is on display (October 2026).',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 10 August 2019; teppanyaki steak of Kobe beef, wagyu and domestic beef; whole A5 Kobe beef purchased. An October 2026 reviewer saw the Kobe Beef Association certification on display.', philosophy: null, specialty: 'Teppanyaki steak; wagyu comparison lunch.',
      anecdotes: [
        { text: '"At first glance, I thought it might be a place aimed at inbound tourists due to its exterior and atmosphere, but once inside, I noticed many Japanese customers" — August 2026, at lunch.', source: R + 'B533351170/' },
        { text: '"I felt it was a bit pricey compared to the advertised JPY 1200. I noticed other customers seemed surprised as well, so I think it would be better to display the menu at the entrance." — July 2026, a weekend tasting course.', source: R + 'B532108117/' },
        { text: '"... the Kobe Beef Association certification, subtly yet effectively showcased" — October 2026.', source: R + 'B536974543/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Oh！マイステーキ、ステーキ・焼肉・魚介、大阪市中央区心斎橋筋1-3-29 ミヤプラザ心斎橋 B1F、心斎橋駅4A出口から徒歩2分、一蘭の入口の横の地下、毎日11:00〜16:00、16:00〜22:00、不定休、予約可、夜はサービス料5%、カードは3,000円以上、電子マネー可、QR 決済不可、30席 (すべて鉄板のカウンター)、禁煙、2019年8月10日オープン。Kobe beef、和牛、国産牛の鉄板焼きステーキ、A5のKobe beef を一頭買い、ランチ1,200円から、ディナー2,360円から、記念日コース6,800円から、飲み放題つきの食べ比べコース7,800円、ステーキのフルコース8,800円。口コミ(2026年6月〜10月): 国産牛の赤身80gのランチ1,200円 (サラダ、焼き野菜、テールスープ)、和牛と国産牛130gの食べ比べランチ2,500円、ガーリックライス、わさびと味噌、ご飯のおかわりは有料、週末は1,200円より高かったという声、日本人客も多い、Kobe beef の認定証。',
      confidence: 'medium', sources: [TB, R + 'B498458620/', R + 'B509274195/', R + 'B529894482/', R + 'B531414850/', R + 'B531444529/', R + 'B531505703/', R + 'B531754126/', R + 'B532108117/', R + 'B532645484/', R + 'B533351170/', R + 'B534092666/', R + 'B534300983/', R + 'B535979605/', R + 'B536765383/', R + 'B536974543/', 'https://r.gnavi.co.jp/kd9h901/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppanyaki with set lunches; many Japanese guests (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-3-29 ミヤプラザ心斎橋 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目3番29号 (go) 7m. Same building as 大阪 もつ鍋 PLay (osaka_motsunabe_play_shinsaibashi, 3F) 9 m and 一蘭 心斎橋店 (1F) 11 m, each on its own point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B498458620/', R + 'B532645484/', TB],
    price_note: 'Lunch prices from July–October 2026 reviews; courses from the Tabelog listing. Dinner adds 5% service.', last_checked: TODAY, items: [
      it('', '', 'Lunch: domestic lean steak 80 g with salad, grilled vegetables, oxtail soup', '¥1,200', 'Lunch', 'ask', 'no', 'October 2026 review.', 'akami_lunch'),
      it('', '', 'Lunch: wagyu and domestic beef comparison, 130 g, with drink', '¥2,500', 'Lunch', 'ask', 'no', 'July–August 2026 reviews.', 'kurabe_lunch'),
      it('', '', 'Anniversary teppanyaki course', 'from ¥6,800', 'Course', 'ask', 'no', 'Tabelog shop text.', 'anniversary_course'),
      it('', '', 'Steak full course: two meats and grilled seafood, 8 items', '¥8,800', 'Course', 'ask', 'no', 'Tabelog listing.', 'steak_full_course'),
    ] }, {
    cuisine: '目の前の鉄板で焼くステーキ: Kobe beef、和牛、国産牛のサーロイン、フィレ、シャトーブリアン。A5のKobe beef を一頭買い (食べログの店の紹介)・ランチは1,200円から: 国産牛の赤身80g、サラダ、焼き野菜、テールスープつき (2026年10月)、ステーキ15切れ (2026年7月)・和牛と国産牛130gの食べ比べのランチ2,500円、ソフトドリンク、サラダ、ご飯、みそ汁か牛すじスープ、焼き野菜、マッシュポテトつき (2026年7〜8月)・ディナーは2,360円から、記念日コース6,800円から (食べログ)・飲み放題つきの和牛と国産牛の食べ比べコース7,800円、肉2種と魚介の鉄板焼きのステーキフルコース8,800円 (食べログ)・A5和牛と国産牛、ガーリックライス、お吸い物の肉たっぷり200gのコース (2026年9月)',
    neighborhood: '心斎橋筋1-3-29 ミヤプラザ心斎橋 B1F、一蘭の横の階段を下りる。心斎橋駅4A出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。鉄板焼きのステーキはわさびと味噌で (2026年9月)、サラダ、焼き野菜、マッシュポテト、ガーリックライス、スープつき。',
    vegan_detail: 'ヴィーガンではありません。鉄板焼きのステーキ店で、ランチにはテールスープか牛すじのスープ。',
    notes: '[鉄板焼きステーキ・心斎橋、1,200円からのカウンターのステーキランチ] 一蘭 心斎橋店の横の地下にある赤い内装の鉄板カウンターで、Kobe beef、和牛、国産牛を目の前で焼く。お得なのは昼で、赤身80gにスープと付け合わせで1,200円、和牛と国産牛130gの食べ比べで2,500円。夜のコースは6,800〜8,800円にサービス料5%。カードは3,000円以上から。Kobe beef の認定証が飾られている (2026年10月)。',
  });
}

// ================================================================ 辛いもんや ギロチン 南船場店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27040951/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'osaka_karai_monya_guillotine_shinmachi', name: '辛いもんや ギロチン 南船場店 (Karai Monya Guillotine Minami-Senba)', category: 'OMNI',
    lat: 34.677778, lng: 135.497683, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Spicy fried rice, mapo tofu, sundubu, yakisoba, gyoza, squid tempura and oden are on the menu, and tables carry spice powders including one called "Guillotine X" (April 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in broth, Omi beef doteyaki, yakiniku and kara-age; the mapo tofu has minced meat (August 2026).',
    hours_raw: 'Daily 17:30–24:00; open year-round (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and e-money (Tabelog). 30 seats: 11 at the counter, 4 tables, and street-side benches like a food stall (Tabelog; May–September 2026); non-smoking (Tabelog). Order by QR code; bottled drinks are self-served from the front counter and added to the bill (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-2-6, ニュー新町ビル 1F, an open-fronted shop with street benches — 5 min from Yotsubashi Stn',
    cuisine: 'Spicy-food izakaya since 2009 (August 2026) with heat levels from 0 (mild) to 10 ("God"): 0 mild, 1 regular, 2 strong, 3 "death", 5 "demon", 8 "curse", 10 "God", priced by heat (April 2026) · Guillotine fried rice "Oni" ¥1,280 and mild "Hetare" ¥780, mapo tofu regular ¥980, fresh omasum ¥780, Omi beef doteyaki ¥780, five-kind oden ¥880, gizzard cartilage ¥600 (March 2026) · mapo tofu served bubbling in an iron pot (August 2026); sundubu (March and August 2026); "curse"-level fried rice challenge topped with ghost pepper (May 2026) · yakisoba ¥780, crispy onions with aosa ¥580, chilled tofu ¥100 (July 2026) · non-spicy food too: oden with big daikon, charcoal-grilled horumon, kalbi and skirt, large kara-age, gyoza, Guillotine cold noodles, squid tempura (May–September 2026) · Senboku Lemon craft shochu highball (May 2026)',
    website: 'http://gilotine.com/', gmaps: gm('辛いもんや ギロチン 南船場店'), menu_url: null,
    notes: '[Spicy izakaya · Shinmachi, choose your heat from 0 to 10] An open-fronted street-side izakaya near Yotsubashi where fried rice, mapo tofu and sundubu come at heat levels from mild to "God" (10), with the "curse" fried rice as the challenge dish. Non-spicy food is good too: oden, Omi beef doteyaki and charcoal-grilled horumon. Mild fried rice is ¥780, the "Oni" level ¥1,280. Sit on the benches outside in good weather.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing: opened 1 May 2009; website gilotine.com. Other shops, 船場本店 and 大正店, are listed on HotPepper (search result); the brand also sells its spice blends online.', philosophy: null, specialty: 'Guillotine fried rice at chosen heat; mapo tofu.',
      anecdotes: [
        { text: '"I usually handle spicy dishes like CoCo Ichibanya\'s 15-spice level ... with ease, so I was honestly very confident. How embarrassing..." — May 2026, the "Curse" challenge.', source: R + 'B528135954/' },
        { text: '"To my surprise, there are plenty of delicious non-spicy options like oden and dote-yaki." — March 2026, a first visit by someone who dislikes spicy food.', source: R + 'B524169316/' },
        { text: '"The Yakisoba I was looking forward to was surprisingly salty, and it was the worst I\'ve ever had." — July 2026.', source: R + 'B531225286/' },
      ],
      japanese_sources_summary: '食べログ: 辛いもんや ギロチン 南船場店、居酒屋・焼肉・中華、大阪市西区新町1-2-6 ニュー新町ビル 1F、四ツ橋駅から徒歩5分、毎日17:30〜24:00、年中無休、予約可、カード・電子マネー可、30席 (カウンター11、テーブル4)、禁煙、2009年5月1日オープン、公式 gilotine.com。口コミ(2026年3月〜9月): 辛さは0から10まで、ギロチン炒飯の Oni 1,280円と Hetare 780円、麻婆豆腐980円、生センマイ780円、Omi の牛のどて焼き780円、おでん5種880円、ずり軟骨600円、スンドゥブ、curse の辛さの炒飯、焼きそば780円、冷奴100円、おでん、ホルモン、カルビ、ハラミ、唐揚げ、餃子、冷麺、QR コードで注文、瓶の飲み物はセルフ、店先のベンチ席、焼きそばが塩辛かったという声も。系列は船場本店と大正店 (HotPepper)。',
      confidence: 'medium', sources: [TB, 'http://gilotine.com/', R + 'B505304560/', R + 'B508806644/', R + 'B524052871/', R + 'B524169316/', R + 'B524397296/', R + 'B526367028/', R + 'B527415854/', R + 'B527716085/', R + 'B528135954/', R + 'B531225286/', R + 'B532132022/', R + 'B534964962/', R + 'B535010157/', R + 'B536137170/', R + 'B536869834/', 'https://www.hotpepper.jp/SA23/dncLZ0032/U030/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; heat levels are marked with coloured tags on the wall (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-2-6 ニュー新町ビル １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop website; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目2番6号 (go) 19m. Nearest record: CARNE asaeda (osaka_carne_asaeda_shinmachi, 1-2-5) 11 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B505304560/', R + 'B531225286/', TB],
    price_note: 'Prices from March and July 2026 reviews; spicier levels cost more.', last_checked: TODAY, items: [
      it('', '', 'Guillotine fried rice, "Hetare" (mild)', '¥780', 'Spicy', 'ask', 'no', 'March and July 2026 reviews.', 'chahan_hetare'),
      it('', '', 'Guillotine fried rice, "Oni" level', '¥1,280', 'Spicy', 'ask', 'no', 'March 2026 review.', 'chahan_oni'),
      it('', '', 'Guillotine mapo tofu, regular', '¥980', 'Spicy', 'ask', 'no', 'March 2026 review.', 'mabo'),
      it('', '', 'Omi beef doteyaki', '¥780', 'Small plates', 'ask', 'no', 'March and July 2026 reviews.', 'doteyaki'),
      it('', '', 'Assorted oden, 5 kinds', '¥880', 'Small plates', 'ask', 'no', 'March 2026 review.', 'oden'),
    ] }, {
    cuisine: '2009年からの辛いもんの居酒屋 (2026年8月)。辛さは0 (mild) から10 (God) まで: 0 mild、1 regular、2 strong、3 death、5 demon、8 curse、10 God、辛さで値段が変わる (2026年4月)・ギロチン炒飯の「Oni」1,280円とマイルドな「Hetare」780円、麻婆豆腐の普通980円、生センマイ780円、Omi の牛のどて焼き780円、おでん5種880円、ずり軟骨600円 (2026年3月)・鉄鍋でぐつぐつの麻婆豆腐 (2026年8月)、スンドゥブ (2026年3月・8月)、ゴーストペッパーをのせた「curse」の炒飯のチャレンジ (2026年5月)・焼きそば780円、あおさのカリカリオニオン580円、冷奴100円 (2026年7月)・辛くない料理も: 大きな大根のおでん、ホルモン・カルビ・ハラミの炭火焼き、大きな唐揚げ、餃子、ギロチン冷麺、イカの天ぷら (2026年5〜9月)・クラフト焼酎のハイボール「Senboku Lemon」(2026年5月)',
    neighborhood: '新町1-2-6 ニュー新町ビル 1F、店先にベンチのある開けた店。四ツ橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。辛い炒飯、麻婆豆腐、スンドゥブ、焼きそば、餃子、イカの天ぷら、おでんがあり、卓には「Guillotine X」という辛い粉など何種類もの粉 (2026年4月)。',
    vegan_detail: 'ヴィーガンではありません。だしのおでん、Omi の牛のどて焼き、焼肉、唐揚げ。麻婆豆腐にはひき肉 (2026年8月)。',
    notes: '[辛いもん居酒屋・新町、辛さは0から10まで] 四ツ橋近くの店先が開けた居酒屋で、炒飯、麻婆豆腐、スンドゥブの辛さをmild から「God」(10) まで選べる。挑戦の一皿は「curse」の炒飯。辛くない料理もおいしく、おでん、Omi の牛のどて焼き、ホルモンの炭火焼きを。マイルドな炒飯は780円、「Oni」は1,280円。天気のいい日は外のベンチで。',
  });
}

// ================================================================ 炭焼笑店 陽 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27053755/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '02:30']);
  put({
    id: 'osaka_sumiyaki_shoten_yo_namba', name: '炭焼笑店 陽 難波店 (Sumiyaki Shoten Yo Namba)', category: 'OMNI',
    lat: 34.664087, lng: 135.503134, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Yakitori comes with tare or salt; the menu also has tempura, kakiage, salt soba and grilled rice balls (2025–2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yakitori of Yamato chicken, seafood, and hot pots of chicken (mizutaki) or motsu.',
    hours_raw: 'Daily 15:00–02:30, last order food 01:30, drinks 02:00; open year-round (Tabelog). An older listing (Mapple, search result) also gives morning hours 7:00–11:00 — Tabelog shows only the afternoon and night. Reservations recommended, often full (2026); online bookings may show full when phone booking still works, from 15:00; not bookable through Auto Reserve (Tabelog). Appetiser ¥385 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC and other e-money, and QR payment (Tabelog). 35 seats: counter, tables, sunken seating and a semi-private room for 6 (Tabelog). Smoking: Tabelog lists a designated smoking area; an August 2026 reviewer says it has become non-smoking. Wheelchair accessible (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 14-25, 阪南ビル 1F, in the alley west of Doguya-suji — 3 min from Namba Stn',
    cuisine: 'Yakitori of Yamato chicken over Kishu binchotan, seasonal vegetables and fresh fish from a contracted fishmonger (Tabelog shop text) · courses from 3 people: Yamato chicken mizutaki ¥3,150 (¥4,950 with drinks), charcoal-grilled smoked motsunabe ¥3,850 (¥5,650 with drinks) (Tabelog) · yakitori: negima, tsukune, quail eggs (November 2025); duck meatball skewers on a hot plate with egg yolk, grilled asparagus (March 2026); some served rare (August 2026) · sashimi of salmon and tuna (November 2025), fruit tomato, tuna sashimi, liver and chicken breast, bamboo shoots, sweet-potato sticks (April 2026) · low-temperature liver, firefly squid and canola with salt koji, lightly pickled celery (February 2026) · silk-sweet tempura, Gold Rush kakiage, seafood salad, steamed onion with butter, grilled nagaimo, sake-steamed clams, duck with eggplant, salt soba (June 2026) · "Adult Potato Salad" with blue cheese; a long shochu list; Sasugallery glasses (August 2026) · grilled rice balls, yuba and duck salad (November 2025)',
    website: null, gmaps: gm('炭焼笑店 陽 難波店'), menu_url: null,
    notes: '[Yakitori · Ura-Namba, binchotan chicken and fish late] A wood-beamed yakitori and fish izakaya in an alley off Doguya-suji, open from 15:00 to 2:30 every day, and the first shop of the group behind 鴨尽 and 鶏尽 next door. Order Yamato-chicken skewers (some served rare), the duck tsukune with egg yolk, sashimi and the blue-cheese potato salad; in winter, the mizutaki or motsunabe course. Usually full: book, or phone after 15:00 even if online shows full.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): yakitori of Yamato chicken grilled over Kishu binchotan, fish from a contracted fishmonger; sister shops nearby are named Kamozu/Kamojin, Ojizu/Gojin and Torizu/Torijin. The data record 炭火焼き鳥 鶏尽 (osaka_sumibi_yakitori_torijin_namba) calls 炭焼笑店 陽 Namba "the group\'s first shop". A recruiting page names the operator 株式会社炭焼笑店陽 (search result).', philosophy: null, specialty: 'Binchotan yakitori; seafood.',
      anecdotes: [
        { text: '"I love visiting Sumiyaki Shoten Yo. All ... locations are popular, so reservations are a must." — August 2026.', source: R + 'B534801375/' },
        { text: '"There was even a signature from Ed Sheeran! Haha." — October 2026.', source: R + 'B537749463/' },
        { text: '"It\'s a shame that it has become a non-smoking establishment." — August 2026.', source: R + 'B533896808/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭焼笑店 陽 難波店、焼き鳥・もつ鍋・居酒屋、大阪市中央区難波千日前14-25 阪南ビル 1F、なんば駅から徒歩3分、Doguya-sujiの西側の路地、毎日15:00〜翌2:30 (料理 L.O. 1:30、ドリンク L.O. 2:00)、年中無休、予約可 (ネットが満席でも電話で空きがあることも)、先付け385円、カード・電子マネー・QR 決済可、35席、半個室6名、喫煙所あり、車いす可。Kishu の備長炭で焼くYamato の地鶏の焼き鳥、契約の魚屋から仕入れる鮮魚、Yamato の地鶏の水炊きコース3,150円 (飲み放題つき4,950円)、炭火焼きの燻製もつ鍋コース3,850円 (5,650円)、近くの姉妹店。口コミ(2025年11月〜2026年10月): ねぎま、つくね、うずらの卵、鴨つくねの卵黄のせ、焼きアスパラ、レアの焼き鳥、低温調理のレバー、ホタルイカと菜の花の塩麹、「Adult Potato Salad」(ブルーチーズ)、焼酎の種類が多い、いつも満席、禁煙になったという声、Ed Sheeran のサイン。',
      confidence: 'medium', sources: [TB, R + 'B517211391/', R + 'B522990904/', R + 'B523948198/', R + 'B524702826/', R + 'B526482286/', R + 'B530875746/', R + 'B531302666/', R + 'B533063778/', R + 'B533259909/', R + 'B533896808/', R + 'B533905809/', R + 'B534506205/', R + 'B534801375/', R + 'B536477234/', R + 'B537749463/', 'https://www.mapple.net/original/488006/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular and usually booked; some tourists (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前14-25 阪南ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前14番25号 (go) 3m. Nearest records: 本格炉端焼き人夢叶思ひとむかし (14-26) 10 m, 山桜 (13-5) 12 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530875746/', TB],
    price_note: 'Course prices from the Tabelog listing; dishes from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yamato chicken yakitori (negima, tsukune, quail eggs)', '', 'Yakitori', 'ask', 'no', 'November 2025 and 2026 reviews.', 'yakitori'),
      it('', '', 'Duck tsukune on a hot plate with egg yolk', '', 'Yakitori', 'ask', 'no', 'March 2026 review.', 'kamo_tsukune'),
      it('', '', '"Adult Potato Salad" with blue cheese', '', 'Small plates', 'ask', 'no', 'August 2026 review.', 'otona_potesara'),
      it('', '', 'Yamato chicken mizutaki course (3+ people)', '¥3,150', 'Course', 'ask', 'no', 'Tabelog listing; ¥4,950 with 2 hours of drinks.', 'mizutaki_course'),
      it('', '', 'Charcoal-grilled smoked motsunabe course (3+ people)', '¥3,850', 'Course', 'ask', 'no', 'Tabelog listing; ¥5,650 with drinks.', 'motsunabe_course'),
    ] }, {
    cuisine: 'Kishu の備長炭で焼くYamato の地鶏の焼き鳥、季節の野菜、契約の魚屋からの鮮魚 (食べログの店の紹介)・3名からのコース: Yamato の地鶏の水炊き3,150円 (飲み放題つき4,950円)、炭火焼きの燻製もつ鍋3,850円 (5,650円) (食べログ)・焼き鳥: ねぎま、つくね、うずらの卵 (2025年11月)、鉄板にのせた卵黄の鴨つくね、焼きアスパラ (2026年3月)、レアで出す串も (2026年8月)・サーモンとまぐろの刺身 (2025年11月)、フルーツトマト、まぐろの刺身、レバーとささみ、たけのこ、さつまいもスティック (2026年4月)・低温調理のレバー、ホタルイカと菜の花の塩麹、セロリの浅漬け (2026年2月)・Silk Sweet の天ぷら、Gold Rush のかき揚げ、海鮮サラダ、玉ねぎのバター蒸し、長芋焼き、あさりの酒蒸し、鴨となす、塩そば (2026年6月)・ブルーチーズの「Adult Potato Salad」、焼酎の種類が多い、Sasugallery のグラス (2026年8月)・焼きおにぎり、湯葉と鴨のサラダ (2025年11月)',
    neighborhood: '難波千日前14-25 阪南ビル 1F、Doguya-sujiの西側の路地。なんば駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。焼き鳥はたれか塩で、天ぷら、かき揚げ、塩そば、焼きおにぎりもある (2025〜2026年)。',
    vegan_detail: 'ヴィーガンではありません。Yamato の地鶏の焼き鳥、魚介、鶏の水炊きかもつの鍋。',
    notes: '[焼き鳥・裏なんば、遅くまで備長炭の鶏と魚] Doguya-sujiの路地にある梁の見える焼き鳥と魚の居酒屋で、毎日15時から翌2時半まで。近くの鴨尽と鶏尽の系列の1号店。Yamato の地鶏の串 (レアで出すものも)、卵黄の鴨つくね、刺身、ブルーチーズのポテトサラダを。冬は水炊きかもつ鍋のコースも。いつも満席なので予約を。ネットが満席でも15時以降に電話してみて。',
  });
}

save();
