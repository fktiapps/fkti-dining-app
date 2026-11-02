// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 6 (lane: Tabelog id mod 4 = 1).
//   + CENTRE M サントル エム (all-day dining in Tokyu Stay Mercure Osaka Namba: fresh-pasta lunch buffet, afternoon tea, parfaits)
//   + 万両 日本橋店 Manryo Nipponbashi (whole-cattle A5 wagyu yakiniku on a thick teppan, open noon to midnight)
//   + 大阪 焼肉南大門 Osaka Yakiniku Nandaimon (the Osaka shop, since 2019, of a Shizuoka yakiniku founded in 1964)
//   + アンゴン Anngon (Vietnamese since 1998 in Minami-Semba, cooking of Chef Tam)
//   Skipped: 作一 西店 27000853 — chain in data: sister of 作一 本店 (osaka_sakuichi_honten, address_ja
//   "大阪府大阪市中央区西心斎橋1-10-3 エースビル 3F・4F"), in the same building (this listing: エースビル 1F); same website.
//   No ramen block for Anngon: a Vietnamese noodle house is cuisine other with no block (brief lesson).
//   Chain check of the four kept:
//   - CENTRE M: one restaurant, inside a hotel (Tabelog).
//   - Manryo: a multi-branch Osaka yakiniku name; reviewers mention its Minami-Morimachi shop and "other locations" with
//     different closing days (2026), but no source I opened gives a count or an operator. No Manryo record in data. Kept;
//     flagged to the integrator.
//   - Nandaimon: the Tabelog text calls it a Shizuoka restaurant founded in 1964 that opened in Shinsaibashi in 2019; one
//     September 2026 reviewer has "been to other branches of Nandaimon". Size unknown; none in data. Kept; flagged.
//   - Anngon: one shop since 1998 (Tabelog; Instagram).
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27000853', 'Chain in data: 作一 西店 is the sister of 作一 本店 (osaka_sakuichi_honten, "大阪府大阪市中央区西心斎橋1-10-3 エースビル 3F・4F") in the same building, sharing its website; also few reviews (one in 2026).');

// ================================================================ CENTRE M
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27133041/'; const R = TB + 'dtlrvwlst/'; const P = TB + 'party/';
  const H = day(['11:30', '17:00'], ['18:00', '21:00']);
  put({
    id: 'osaka_centre_m_nishishinsaibashi', name: 'CENTRE M (サントル エム)', category: 'OMNI',
    lat: 34.670678, lng: 135.499698, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Lunch is built on fresh wheat pasta and a bread buffet; afternoon tea and parfaits are cakes, tarts and choux; the dinner courses add wagyu and fish, which are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter croissants, cream sauces and cakes; the deli salads are not described.',
    hours_raw: 'Daily: lunch 11:30, last order 14:00 on weekdays and 13:30 at weekends and holidays; afternoon tea and café 14:00–17:00 (last order 15:00); dinner 18:00–21:00 (last order 20:30; courses 20:00, food 20:15); evening tea 18:00–21:00 (last order 19:00); closed 17:00–18:00, so arrivals after 16:00 have an hour (Tabelog). Reservations online; tell the restaurant about children or strollers (Tabelog). Cards (VISA, Master, JCB, AMEX) and QR (PayPay, d Barai, Rakuten Pay, au PAY); no e-money (Tabelog). 70 seats including sofa, couple and counter seats; non-smoking, smoking area on the same floor; free Wi-Fi; wheelchair accessible (Tabelog). Opened 1 December 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-2-4, 2F of 東急ステイ メルキュール大阪なんば — 5 min from Namba Stn exit 25, 7 min from Shinsaibashi Stn exit 7',
    cuisine: 'All-day hotel dining (Tabelog) · weekday lunch from ¥2,900 with tax: a fresh pasta of your choice, noodles delivered from Awaji Island each morning, 12 kinds in 72 sauce combinations, with a buffet of the baker\'s breads (fermented-butter croissants baked on site) and six deli salads, soft drinks included (Tabelog; 2026 reviews: pumpkin fettuccine with four-mushroom porcini cream, squid-ink pasta with sardines) · afternoon tea: autumn Shine Muscat and chestnut Mont Blanc set ¥6,000 with 12 items, a mini parfait and free-flow tea (October–November 2026) · parfaits ¥2,500, e.g. Shine Muscat and milk fromage, hojicha Mont Blanc (October 2026) · dinner courses, tax included: 6 dishes ¥5,500 (salad, fresh pasta, bread, wagyu, cake); anniversary course of 7 dishes with wagyu, fish, pasta and a whole cake from the pastry chef ¥7,000 (Tabelog) · evening "high tea" with alcohol · wine, sake, cocktails',
    website: null, gmaps: gm('CENTRE M 東急ステイ メルキュール大阪なんば'), menu_url: P,
    notes: "[Italian · Nishi-Shinsaibashi, fresh-pasta lunch and afternoon tea in a hotel] The second-floor restaurant of the Tokyu Stay Mercure Osaka Namba, a calm room above a lobby busy with overseas travellers (October 2026), open from lunch through afternoon tea to dinner. The weekday lunch is the draw: pick one of a dozen fresh pastas, the noodles sent from Awaji Island each morning, and help yourself to the baker's breads, croissants of fermented butter, and six deli salads, soft drinks included, from ¥2,900. Afternoons are for seasonal afternoon tea (¥6,000 in autumn 2026, Shine Muscat and chestnut) and large fruit parfaits; evenings for set courses from ¥5,500, with a whole cake on the anniversary course. Diners praise the bread, the smiling staff and the value; the buffet can queue at busy times (June 2026).",
    chef_bio: { chef_name: null, roles: ['Chef, baker and pastry chef unnamed (Tabelog mentions a chef-baker and a pastry chef)'], origin: null, background: 'Opened 1 December 2022 (Tabelog) in the Tokyu Stay Mercure Osaka Namba, with the concept of "a comfortable dining experience like a different world" in Minami (Tabelog shop text). Diners describe smiling, attentive staff and a surprise cake that staff helped photograph (2026); a reviewer guesses it also serves hotel guests\' breakfast.', philosophy: null, specialty: 'Fresh-pasta lunch with bread and salad buffet; afternoon tea; fruit parfaits.',
      anecdotes: [
        { text: '"There was a bit of a line when getting the buffet, but the bread was replenished quickly, so everything was always available. The taste was on par with a good bakery." — June 2026, lunch.', source: R + 'B529977402/' },
        { text: '"The afternoon tea was incredibly satisfying, featuring 12 varieties including mini parfaits and savory items!" — October 2026, autumn afternoon tea ¥6,000.', source: R + 'B537818150/' },
        { text: '"All of this for just under JPY 3,000... I will definitely be coming back!" — October 2026, lunch.', source: R + 'B538389134/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): CENTRE M (サントル エム)、イタリアン・パスタ・カフェ、西心斎橋2-2-4 東急ステイ メルキュール大阪なんば 2F、なんば駅25番出口から徒歩5分、心斎橋駅7番出口から徒歩7分、ランチ11:30〜 (L.O. 平日14:00・土日祝13:30)、アフタヌーンティー・カフェ14:00〜17:00 (L.O.15:00)、ディナー18:00〜21:00 (L.O.20:30)、イブニングティー18:00〜21:00、17時にいったん閉店、年中無休、カード・QR可、電子マネー不可、70席、禁煙 (同じ階に喫煙所)、Wi-Fi、車椅子可、オープン2022年12月1日。コース (税込): 平日ランチ2,900円〜 (淡路島から毎朝届く麺の生パスタ12種類、ベーカーが焼くパンと6種のデリサラダのビュッフェ、ソフトドリンク飲み放題)、6品のコース5,500円、パティシエのホールケーキ付き記念日コース7,000円。口コミ(2026年6月〜11月): 発酵バターのクロワッサン、かぼちゃのフェットチーネとポルチーニのクリーム、イカ墨のパスタといわし、秋のアフタヌーンティー6,000円 (Shine Muscat と栗のモンブラン、12品、ミニパフェ、紅茶飲み放題)、パフェ2,500円、ディナーは前菜、肉、パスタ、鮭のムニエル、サプライズのケーキ、1階のロビーは海外の客でいっぱい、笑顔のスタッフ、ビュッフェは混むと少し並ぶ。',
      confidence: 'medium', sources: [TB, P, R + 'B529977402/', R + 'B537818150/', R + 'B537832080/', R + 'B537844515/', R + 'B538151621/', R + 'B538273182/', R + 'B538323543/', R + 'B538389134/', R + 'B538460256/', R + 'B538494251/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; many international guests (October 2026). No English menu found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-2-4 東急ステイ メルキュール大阪なんば 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with bookable courses; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目2番4号 (go) 37m (hotel building). Nearest record おはら (osaka_ohara_hiroshimayaki_nishishinsaibashi, "…西心斎橋2-9-5") is about 32 m away at another address, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [P, R + 'B537818150/'],
    price_note: 'Course prices from the shop-maintained Tabelog course pages (tax included); afternoon tea and parfait from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Weekday fresh-pasta lunch with bread and deli-salad buffet and soft drinks (from)', '¥2,900', 'Lunch', 'no', 'no', 'Tabelog.', 'pasta_lunch'),
      it('', '', 'Autumn afternoon tea (Shine Muscat and chestnut, 12 items)', '¥6,000', 'Afternoon tea', 'no', 'no', 'October 2026 review.', 'afternoon_tea'),
      it('', '', 'Seasonal fruit parfait', '¥2,500', 'Café', 'ask', 'no', 'October 2026 review.', 'parfait'),
      it('', '', 'Dinner course, 6 dishes (salad, fresh pasta, bread, wagyu, cake)', '¥5,500', 'Course', 'no', 'no', 'Tabelog.', 'dinner_course'),
    ] }, {
    cuisine: 'ホテルのオールデイダイニング (食べログ)・平日ランチは税込2,900円〜: 淡路島から毎朝届く麺の生パスタを12種類、72通りの組み合わせから選び、ベーカーのパン (店で焼く発酵バターのクロワッサン) と6種のデリサラダのビュッフェ、ソフトドリンク付き (食べログ、2026年の口コミ: かぼちゃのフェットチーネと4種のきのこのポルチーニクリーム、イカ墨のパスタといわし)・アフタヌーンティー: 秋の Shine Muscat と栗のモンブランのセット6,000円、12品、ミニパフェ、紅茶はおかわり自由 (2026年10〜11月)・パフェ2,500円、Shine Muscat とミルクフロマージュ、hojicha のモンブラン (2026年10月)・ディナーのコース (税込): 6品5,500円 (サラダ、生パスタ、パン、和牛、ケーキ)、和牛、魚、パスタ、パティシエのホールケーキが付く7品の記念日コース7,000円 (食べログ)・お酒と楽しむ夜のハイティー・ワイン、日本酒、カクテル',
    neighborhood: '西心斎橋2-2-4 東急ステイ メルキュール大阪なんば 2F。なんば駅25番出口から徒歩5分、心斎橋駅7番出口から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。ランチは小麦の生パスタとパンのビュッフェ、アフタヌーンティーとパフェはケーキ、タルト、シュー。ディナーのコースの和牛や魚の説明はない。',
    vegan_detail: 'ヴィーガンではありません。バターのクロワッサン、クリームのソース、ケーキ。デリサラダの説明はない。',
    notes: '[イタリアン・西心斎橋、ホテルで生パスタのランチとアフタヌーンティー] 東急ステイ メルキュール大阪なんばの2階のレストランで、1階のロビーは海外からの旅行者でにぎわうが (2026年10月)、こちらは落ち着いている。ランチからアフタヌーンティー、ディナーまで。いちばんの人気は平日ランチで、淡路島から毎朝届く麺の生パスタを12種類から選び、ベーカーのパン (発酵バターのクロワッサン) と6種のデリサラダは取り放題、ソフトドリンク付きで2,900円から。午後は季節のアフタヌーンティー (2026年秋は Shine Muscat と栗で6,000円) や大きなフルーツパフェ、夜は5,500円からのコースで、記念日コースにはホールケーキ。パン、笑顔のスタッフ、値段の手ごろさが好評で、混む時間はビュッフェに少し列ができる (2026年6月)。',
  });
}

// ================================================================ 万両 日本橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27133361/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yakiniku-manryo.orwst.com/nihonbashi';
  const H = day(['12:00', '24:00']);
  put({
    id: 'osaka_manryo_nipponbashi', name: '万両 日本橋店 (Manryo Nipponbashi ten)', category: 'OMNI',
    lat: 34.664965, lng: 135.50592, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Some cuts come in sauce (the phantom kalbi, the raw heart with tare) or with grated daikon; salted tongue and salted offal may be simpler, but nothing is stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant; the seaweed soup is made with clams, and vegetable sticks come with dips (2026).',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 12:00–24:00 (last order food 23:30), straight through the afternoon; closed Wednesday (Tabelog). Reservations accepted; a booking is cancelled 15 minutes late without a call (Tabelog). Lunch is the regular menu at evening prices, quieter than at night (August–October 2026). Cards, e-money and QR accepted (Tabelog). 96 seats incl. counter couple seats and sofas; the first floor is barrier-free for wheelchairs and strollers; non-smoking; free Wi-Fi; private hire for parts of the room, 15–25 people (Tabelog). Menus in English, Traditional and Simplified Chinese and Korean (Tabelog). Opened 11 January 2023 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 2-5-5, on the west side of Sakaisuji opposite Teruteru and Tempos, near Kuromon Market — 3 min from Kintetsu Nippombashi Stn exit 5 (Tabelog)',
    cuisine: 'Yakiniku of A5 black wagyu bought as whole cattle, so rare cuts appear, cooked on a thick teppan that you grease with beef fat as you go, following a printed grilling guide (2025–2026 reviews) · Kuroge wagyu from Kyushu and Hyogo (September 2026) · Nipponbashi-only negi shio tan, thick-cut tongue under green-onion salt (Tabelog; 2026) · maboroshi ("phantom") kalbi, often sold out; premium loin "shabu-yaki" grilled for 20 seconds and dipped in egg; ichibo; premium outside skirt ¥1,850; thick-cut premium salted tongue ¥1,680; salted tetchan ¥380, salted tsurami ¥390, sand mino ¥650 (August 2026) · raw heart with tare, yukhoe, thin kalbi and tsurami with grated daikon, vegetable sticks with three dips · seaweed soup with clams ¥380, rice with free refills, stone-grilled bibimbap · limited rare hamburger at lunch (Tabelog) · wine a speciality; first glass of white wine ¥100 (October 2026); all-you-can-drink ¥1,650 for 3 or more (Tabelog)',
    website: SITE, gmaps: gm('焼肉 万両 日本橋店'), menu_url: TB,
    notes: "[Yakiniku · Nipponbashi, whole-cattle A5 wagyu on a thick teppan, noon to midnight] The Nipponbashi branch of Manryo, a yakiniku name diners know from its other Osaka shops (reviewers mention Minami-Morimachi and Tenma), on Sakaisuji near Kuromon Market and open straight from noon to midnight. The beef is A5 black wagyu bought whole, so the menu reaches into rare cuts, and it cooks on a thick iron plate that you rub with beef fat as you go, with a printed guide to grilling times. Order the Nipponbashi-only negi shio tan, thick tongue under green-onion salt, then the phantom kalbi if it isn't sold out and the 20-second shabu-yaki loin dipped in egg; finish with stone-grilled bibimbap and the big clam-and-seaweed soup. A regular on an eighth visit (September 2026) calls the tongue a favourite. Lunch is quiet but at evening prices. One August 2026 diner missed an explanation of the grill and found the service mechanical; another was puzzled at first at cleaning the plate during the meal.",
    chef_bio: { chef_name: null, roles: ['Branch manager and staff unnamed in every source read'], origin: null, background: 'Opened 11 January 2023 (Tabelog). Reviewers know Manryo from other Osaka branches, including Minami-Morimachi, and note that closing days differ by location (2026). A December 2025 reviewer says the shop buys whole A5 black-wagyu cattle; a September 2026 reviewer names Kyushu and Hyogo wagyu. Diners describe staff who take orders in person rather than by tablet and a manager overseeing the room well (August 2026).', philosophy: null, specialty: 'Nipponbashi-only negi shio tan; phantom kalbi; 20-second shabu-yaki loin.',
      anecdotes: [
        { text: '"I visited Manryo Nipponbashi… First, I tried the Nipponbashi-exclusive \\"Negi Shio Tan\\" (green onion salt beef tongue). Despite being thickly sliced, it was tender." — June 2026.', source: R + 'B492413874/' },
        { text: '"…a manual for grilling, which made it easy to follow, and I enjoyed the food just as recommended." — September 2026.', source: R + 'B535924356/' },
        { text: '"There was no initial explanation about the need to apply beef fat each time while grilling, as the teppan tends to burn easily." — August 2026, weekend lunch.', source: R + 'B533986503/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): Manryo Nipponbashi ten、焼肉・ホルモン・冷麺、日本橋2-5-5、近鉄日本橋駅5番出口から南へ徒歩3分、なんば駅E5出口から東へ徒歩7分、堺筋の西側、Teruteru と Tempos の向かい、黒門市場の近く、月・火・木〜日・祝12:00〜24:00 (L.O.23:30)、水曜休み、15分遅れて連絡がなければキャンセル、カード・電子マネー・QR可、96席、1階はバリアフリー、禁煙、Wi-Fi、英語・繁体字・簡体字・韓国語メニュー、オープン2023年1月11日。店の説明: 12時から24時まで通し営業、ランチ限定のレアハンバーグ、日本橋限定の Negi Shio Tan、3名以上で飲み放題1,650円、ワインにこだわり。口コミ(2025年12月〜2026年10月): A5の黒毛和牛を一頭買い、厚い鉄板、牛脂をぬりながら焼く、焼き方のマニュアル、Maboroshi Karubi (売り切れのことも)、20秒の上ロースの Shabu-yaki を卵で、Ichibo、上ハラミ1,850円、厚切り上塩タン1,680円、塩の Tetchan 380円、生ハートのタレ、Yukhoe、大根おろしで食べる薄切りのカルビと Tsurami、野菜スティック、あさりのわかめスープ380円、ご飯はおかわり自由、石焼 bibimbap、白ワイン1杯目100円、九州と兵庫の黒毛和牛、南森町や天満の店にも行ったという声、店ごとに定休日が違う、昼は夜と同じ値段で空いている、焼き方の説明がなく事務的という声。',
      confidence: 'medium', sources: [TB, R + 'B492413874/', R + 'B533534036/', R + 'B533986503/', R + 'B534295236/', R + 'B534763283/', R + 'B535815293/', R + 'B535924356/', R + 'B536006795/', R + 'B537316829/', R + 'B537755385/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean (Tabelog); a printed grilling guide (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-5-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目5番5号 (go) 6m. Nearest record きりん寺 裏なんば店 (osaka_kirinji_ura_namba, "…日本橋2-5-8") is about 25 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534295236/', R + 'B537316829/'],
    price_note: 'Prices from August and October 2026 reviews; no official menu prices found.', last_checked: TODAY, items: [
      it('', '', 'Negi shio tan (Nipponbashi only)', '', 'Tongue', 'ask', 'no', 'Tabelog; 2026 reviews.', 'negi_shio_tan'),
      it('', '', 'Thick-cut premium salted tongue', '¥1,680', 'Tongue', 'ask', 'no', 'August 2026.', 'thick_tongue'),
      it('', '', 'Special premium outside skirt', '¥1,850', 'Wagyu', 'ask', 'no', 'August 2026.', 'harami'),
      it('', '', 'Seaweed soup with clams', '¥380', 'Soup', 'ask', 'no', 'August 2026.', 'wakame_soup'),
    ] }, {
    cuisine: 'A5の黒毛和牛を一頭買いするので希少部位もある焼肉。厚い鉄板で焼き、牛脂をぬりながら、焼き方のマニュアルどおりに (2025〜2026年の口コミ)・九州と兵庫の黒毛和牛 (2026年9月)・日本橋限定の Negi Shio Tan、厚切りのタンにねぎ塩 (食べログ、2026年)・売り切れのこともある Maboroshi Karubi、20秒焼いて卵にくぐらせる上ロースの Shabu-yaki、Ichibo、上ハラミ1,850円、厚切り上塩タン1,680円、塩の Tetchan 380円、塩の Tsurami 390円、Sand Mino 650円 (2026年8月)・生ハートのタレ、Yukhoe、大根おろしで食べる薄切りのカルビと Tsurami、3種のディップの野菜スティック・あさりのわかめスープ380円、ご飯はおかわり自由、石焼 bibimbap・ランチ限定のレアハンバーグ (食べログ)・ワインにこだわり、白ワインの1杯目100円 (2026年10月)、3名以上で飲み放題1,650円 (食べログ)',
    neighborhood: '日本橋2-5-5、堺筋の西側で Teruteru と Tempos の向かい、黒門市場の近く。近鉄日本橋駅5番出口から徒歩3分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。タレの肉 (Maboroshi Karubi、生ハートのタレ) や大根おろしの肉もある。塩タンや塩ホルモンはシンプルかもしれないが、説明はない。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉の店で、わかめスープはあさり入り、野菜スティックにディップ (2026年)。',
    notes: '[焼肉・日本橋、一頭買いのA5和牛を厚い鉄板で、昼12時から夜12時まで] 大阪の焼肉の名前「万両」の日本橋店で、口コミには南森町や天満の店の名も出てくる。堺筋沿い、黒門市場の近くで、昼12時から夜12時まで通しで開いている。肉はA5の黒毛和牛の一頭買いで、希少部位も並ぶ。厚い鉄板に牛脂をぬりながら焼き、焼き時間のマニュアルもある。頼むなら日本橋限定の Negi Shio Tan (厚切りのタンにねぎ塩)、売り切れていなければ Maboroshi Karubi、卵にくぐらせる20秒の上ロースの Shabu-yaki。締めは石焼 bibimbap と、あさりの大きなわかめスープ。8回目の常連 (2026年9月) はタンがお気に入り。昼は静かだが値段は夜と同じ。2026年8月には、鉄板の説明がなく事務的だったという声や、食べながら鉄板を掃除するのに最初はとまどったという声も。',
  });
}

// ================================================================ 大阪 焼肉南大門
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27113993/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:30']); const S = day(['16:00', '23:30']);
  put({
    id: 'osaka_yakiniku_nandaimon_higashishinsaibashi', name: '大阪 焼肉南大門 (Osaka Yakiniku Nandaimon)', category: 'OMNI',
    lat: 34.673629, lng: 135.504558, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Cuts come with sauce, salt or an herb salt, and the menu has toro yukhoe in a rich sauce and cold noodles; nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a black-wagyu yakiniku restaurant; kimchi of several kinds is a side.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat 17:00–23:30; Sun and holidays 16:00–23:30 (last order food 22:30, drinks 23:00); closed Wednesday; hours may change (Tabelog). Reservations accepted, and recommended; tatami rooms by phone; you may be seated at the counter or in a tatami room; a booking is cancelled 10 minutes late without a call; 2-hour limit when busy (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay and Alipay; no e-money (Tabelog). 62 seats: an 8-seat counter, 6 tables, and a tatami room of 4 tables for 6; hire for 20 or more; smoking allowed; free Wi-Fi; wheelchair accessible (Tabelog). Opened in Shinsaibashi on 14 September 2019 (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-8-15, ground floor of 中正ビル — 3 min from Nagahoribashi Stn, 7 min from Shinsaibashi Stn',
    cuisine: 'Charcoal yakiniku on shichirin of domestic black wagyu chosen by the owner and served at its best on the day (Tabelog; August 2026) · signature: a thick-cut beef-tongue steak, 10 a day (Tabelog) · from 2026 reviews: premium salted tongue, negi tan shio, tsurami, premium outside skirt, hanging-tender tendon, lean steak, loin, special ribeye, the day\'s recommended tenderloin and ichibo with an herb salt, toro yukhoe, raw-meat dishes, a choice of kimchi, special cold noodles · makgeolli, sake, shochu, wine',
    website: null, gmaps: gm('大阪 焼肉南大門 東心斎橋'), menu_url: TB,
    notes: "[Yakiniku · Higashi-Shinsaibashi, a 1964 Shizuoka yakiniku's Osaka shop] The Osaka outpost, opened in 2019, of a Shizuoka yakiniku founded in 1964 and, per its Tabelog text, popular with baseball and soccer players. A lively, old-style room near Nagahoribashi with a counter, tables and a shoes-off tatami area, where you grill domestic black wagyu chosen by the owner over charcoal shichirin in rising smoke. The thick-cut tongue steak is limited to ten a day; diners in 2026 also praise the thick, tender negi tan shio, the premium outside skirt, the toro yukhoe and the choice of kimchi, and finish with the house cold noodles and makgeolli. Portions are generous and drinks are on the dear side (August 2026); one September 2026 diner found the cuts too fatty. Smoking is allowed, and booking is wise.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) selects the beef (Tabelog)'], origin: 'Shizuoka (the original restaurant, founded 1964; Tabelog).', background: 'Per the Tabelog shop text: founded in 1964, a popular Shizuoka restaurant frequented by many gourmet celebrities, including baseball and soccer players, where booking is a must; it opened in Shinsaibashi on 14 September 2019, focusing on high-quality domestic black wagyu chosen by the owner. A September 2026 reviewer has been to other Nandaimon branches. Diners describe a cheerful welcome and friendly staff (2026).', philosophy: null, specialty: 'Thick-cut tongue steak (10 a day); premium salted tongue; cold noodles.',
      anecdotes: [
        { text: '"I\'ve seen many yakiniku restaurants with the name \\"Nandaimon,\\" but this one is a long-established popular spot from Shizuoka that has made its way to Osaka, and you can really taste the quality." — August 2026.', source: R + 'B536416076/' },
        { text: '"The premium salted tongue, in particular, had a perfect thickness and texture while remaining tender." — August 2026.', source: R + 'B533693919/' },
        { text: '"It was great that we could choose from different types of kimchi, and the meat was incredibly delicious!" — September 2026.', source: R + 'B537766817/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): Osaka Yakiniku Nandaimon、焼肉・韓国料理・居酒屋、東心斎橋1-8-15 中正ビル 1F、長堀橋駅から徒歩3分、心斎橋駅から徒歩7分、月・火・木・金・土17:00〜23:30、日・祝16:00〜23:30 (L.O. 料理22:30・ドリンク23:00)、水曜休み、予約可、10分遅れて連絡がなければキャンセル、混雑時は2時間制、カード・PayPay・Alipay可、62席 (カウンター8、テーブル6、座敷 6名×4卓)、喫煙可、Wi-Fi、車椅子可、オープン2019年9月14日。店の説明: 1964年創業、野球選手やサッカー選手などグルメな有名人も通う静岡の人気店が心斎橋に、店主が選ぶ国産の黒毛和牛、1日10食限定の厚切り牛タンステーキ。口コミ(2026年7月〜10月): shichirin の炭火、上塩タン、Negi tan shio、Tsurami、上ハラミ、サガリのスジ、赤身ステーキ、ロース、特選リブロース、おすすめのヘレとイチボ、ハーブ塩、トロ Yukhoe、生の肉料理、キムチを選べる、特製冷麺、makgeolli、量が多い、飲み物は高め、脂が多いという声、ほかの南大門の店にも行ったという声。',
      confidence: 'medium', sources: [TB, R + 'B532029062/', R + 'B532795446/', R + 'B533138055/', R + 'B533693919/', R + 'B536144108/', R + 'B536299622/', R + 'B536416076/', R + 'B536965893/', R + 'B537766817/', R + 'B537874629/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; counter, tables or tatami. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-8-15 中正ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目8番15号 (go) 5m. Nearest records are at 1-8-14 (オーブナテビル): 炭火焼鳥 木鶏 (osaka_sumibi_yakitori_mokkei_higashishinsaibashi) about 11 m and 小料理 たく庵 about 18 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices found; dishes from Tabelog and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Thick-cut beef-tongue steak (10 a day)', '', 'Tongue', 'ask', 'no', 'Tabelog.', 'tongue_steak'),
      it('', '', 'Premium salted tongue', '', 'Tongue', 'ask', 'no', 'August 2026.', 'jo_shio_tan'),
      it('', '', 'Toro yukhoe', '', 'Raw', 'ask', 'no', 'August 2026.', 'toro_yukhoe'),
      it('', '', 'Special cold noodles', '', 'Noodles', 'no', 'no', 'August 2026.', 'reimen'),
    ] }, {
    cuisine: '店主が選び、その日いちばんの状態で出す国産黒毛和牛をshichirin の炭火で (食べログ、2026年8月)・名物: 1日10食限定の厚切り牛タンステーキ (食べログ)・2026年の口コミから: 上塩タン、Negi tan shio、Tsurami、上ハラミ、サガリのスジ、赤身ステーキ、ロース、特選リブロース、ハーブ塩で食べるおすすめのヘレとイチボ、トロ Yukhoe、生の肉料理、選べるキムチ、特製冷麺・makgeolli、日本酒、焼酎、ワイン',
    neighborhood: '東心斎橋1-8-15 中正ビル 1F。長堀橋駅から徒歩3分、心斎橋駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。肉はタレ、塩、ハーブ塩で、濃いタレのトロ Yukhoe や冷麺も。小麦についての説明はない。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛の焼肉の店で、選べるキムチはサイド。',
    notes: '[焼肉・東心斎橋、1964年創業の静岡の焼肉の大阪店] 1964年創業、食べログの説明では野球選手やサッカー選手も通う静岡の焼肉店が2019年に開いた大阪店。長堀橋の近くのにぎやかで昔ながらの店で、カウンター、テーブル、靴を脱ぐ座敷があり、店主が選ぶ国産黒毛和牛をshichirin の炭火で、煙の中で焼く。厚切り牛タンステーキは1日10食限定。2026年の口コミでは厚くてやわらかいNegi tan shio、上ハラミ、トロ Yukhoe、選べるキムチも好評で、締めは特製冷麺とmakgeolli。量は多く、飲み物は高め (2026年8月)。脂が多すぎたという声も (2026年9月)。喫煙可で、予約がおすすめ。',
  });
}

// ================================================================ アンゴン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000933/'; const R = TB + 'dtlrvwlst/'; const P = TB + 'party/';
  const IG = 'https://www.instagram.com/anngon.1998/';
  const W = day(['11:00', '16:00'], ['18:00', '22:00']); const F = day(['11:00', '16:00'], ['18:00', '22:30']);
  put({
    id: 'osaka_anngon_minamisenba', name: 'アンゴン (Anngon)', category: 'OMNI',
    lat: 34.676703, lng: 135.498171, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The pho and bun are rice noodles and the spring rolls rice paper, but dishes are seasoned with Vietnamese fermented seasonings and sauces (Tabelog), and fried spring rolls and other fried dishes are on the menu; nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pho broths of beef or chicken, shrimp-and-pork spring rolls, fish sauce; nothing is described as vegan.',
    hours_raw: 'Lunch daily 11:00–16:00 (last order 15:00), no reservations; dinner Sun–Thu 18:00–22:00 (last order 21:00), Fri, Sat and holiday eves 18:00–22:30 (last order 21:30) (Tabelog). Closed every Monday in October and November 2026, except 2 and 23 November, with Wednesday 4 and Tuesday 24 November off instead (Tabelog). Courses for 2–20 bookable; ordering by QR code (2026 reviews). Cards, e-money and QR accepted (Tabelog). 40 seats at tables up a narrow staircase; non-smoking; free Wi-Fi; Uber Eats delivery (Tabelog; September 2026). Opened 12 April 1998 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Semba 4-11-24, 2F of エミービル — 2 min from Shinsaibashi Stn north exit 12, 4 min from Yotsubashi Stn exit 2',
    cuisine: 'Vietnamese home and street cooking by a Vietnamese chef, Tam, with Vietnamese fermented seasonings, in a room styled on Mekong garden restaurants with decor brought from Vietnam (Tabelog) · lunch sets: pho with rice ¥1,300, nine pho and noodle choices, two rice choices, with pickles and a sweet (September 2026); braised pork (kakuni) set ¥1,300 (October 2026); healthy lunch set ¥1,950 with fresh and fried spring rolls, chicken pho, green-papaya salad on shrimp chips and coconut chè (September 2026) · pho of boiled beef shank or braised tendon, chicken pho, bún bò Huế, mixed noodles, shrimp-salt rice; coriander refilled free on request (2026) · fresh spring rolls of shrimp and pork with two sauces, stir-fried pork tongue, duck hot pot with taro and pork belly, goat dishes (2026) · courses, tax included: Vietnam course ¥3,500 (11 items), Anngon course ¥5,000 (13 items), all-you-can-drink to add (Tabelog) · lotus tea, lychee-yogurt drink, draft beer ¥620',
    website: IG, gmaps: gm('アンゴン 南船場 ベトナム料理'), menu_url: P,
    notes: "[Vietnamese · Minami-Semba, pho and spring rolls since 1998] A Vietnamese restaurant up a narrow stair near Shinsaibashi, open since 1998 and cooked by a Vietnamese chef, Tam, in a room dressed with things brought from Vietnam to evoke the Mekong's garden restaurants. Lunch fills fast: choose one of nine pho or noodle bowls with a rice dish (¥1,300), or the ¥1,950 healthy set of fresh and fried spring rolls, chicken pho, green-papaya salad and chè, and ask for more coriander, which is free. The fresh spring rolls of shrimp and pork are the house signature, one October 2026 diner's best in Osaka; at night come in a group for duck hot pot, goat or stir-fried pork tongue. Some find it tuned to Japanese tastes; one September 2026 diner lost a bowl of broth cleared too fast.",
    chef_bio: { chef_name: null, roles: ['Vietnamese chef "Tam" (Tabelog; no full name or kanji given)'], origin: null, background: 'Opened 12 April 1998 (Tabelog); a September 2026 reviewer counts 28 years. Per the Tabelog shop text, authentic Vietnamese dishes by Chef Tam, made with Vietnamese fermented seasonings and local ingredients by traditional methods, in a space inspired by the garden restaurants of the Mekong with every decorative item chosen in Vietnam.', philosophy: '"A mini trip to Vietnam" (Tabelog shop text).', specialty: 'Fresh spring rolls; pho; bún bò Huế; duck hot pot.',
      anecdotes: [
        { text: '"The signature fresh spring rolls are packed with shrimp and vegetables, offering a variety of flavors with fish sauce and sesame. Personally, I think they are the best in Osaka." — October 2026.', source: R + 'B537191021/' },
        { text: '"Additionally, when I asked the staff, I was delighted to find out that cilantro is available for free refills! It was a cilantro festival, indeed!" — September 2026, healthy lunch set ¥1,950.', source: R + 'B535762020/' },
        { text: '"The Bun Bo Hue was a Vietnamese dish I had been wanting to try for a long time; it was slightly spicy with chewy noodles, and it tasted fantastic!" — September 2026.', source: R + 'B535819568/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): Anngon、ベトナム料理・アジア・エスニック・居酒屋、南船場4-11-24 エミービル 2F、四ツ橋駅2番出口から徒歩4分、心斎橋駅北口12番出口から徒歩2分、ランチ11:00〜16:00 (L.O.15:00、予約不可)、ディナー日〜木18:00〜22:00 (L.O.21:00)、金・土18:00〜22:30 (L.O.21:30)、2026年10・11月は毎週月曜休み (11月2日・23日は営業、4日・24日に振替)、カード・電子マネー・QR可、40席 (テーブル)、禁煙、Wi-Fi、オープン1998年4月12日。店の説明: ベトナム人シェフ Tam の本格ベトナム料理、現地の食材と伝統の調理法、ベトナムの発酵調味料、店内の飾りはすべてベトナムから、メコン川のガーデンレストランのような空間、生春巻き、pho、屋台料理。コース (税込): ベトナムコース3,500円 (11品)、アンゴンコース5,000円 (13品)、飲み放題の追加可。口コミ(2026年9月〜10月): pho とご飯のセット1,300円 (pho は9種類、ご飯は2種類、漬物と甘味付き)、Kakuni の定食1,300円、ヘルシーランチセット1,950円 (生春巻きと揚げ春巻き、鶏の pho、青パパイヤのサラダとえびせん、ココナッツの chè)、牛すね肉や牛すじ煮込みの pho、bún bò Huế、まぜ麺、えび塩のご飯、香菜はおかわり自由、海老と豚の生春巻き、豚タンの炒め物、里芋と豚バラの鴨鍋、山羊、蓮茶、ライチとヨーグルトのジュース、生ビール620円、QR コードで注文、狭い階段、日本人向けの味という声、スープを早く下げられたという声、創業28年、Uber Eats。',
      confidence: 'medium', sources: [TB, P, IG, R + 'B535762020/', R + 'B535819568/', R + 'B536063112/', R + 'B536277008/', R + 'B536399209/', R + 'B536414908/', R + 'B536558862/', R + 'B537128228/', R + 'B537191021/', R + 'B537653848/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code; ask staff for extra coriander (2026). No English menu found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-11-24 エミービル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with October–November 2026 closing notice; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目11番24号 (go) 5m. Next door: 焼肉㐂舌 南船場 (osaka_yakiniku_kitan_minamisenba, address_ja "大阪府大阪市中央区南船場4-11-22 B1F") at a different house number about 20 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [P, R + 'B536399209/', R + 'B535762020/'],
    price_note: 'Course prices from the shop-maintained Tabelog course pages (tax included); lunch prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pho and rice lunch set (9 pho choices, pickles, sweet)', '¥1,300', 'Lunch', 'ask', 'no', 'September 2026.', 'pho_set'),
      it('', '', 'Healthy lunch set: spring rolls, chicken pho, papaya salad, chè', '¥1,950', 'Lunch', 'ask', 'no', 'September 2026.', 'healthy_set'),
      it('', '', 'Vietnam course (11 items)', '¥3,500', 'Course', 'ask', 'no', 'Tabelog.', 'vietnam_course'),
      it('', '', 'Anngon course (13 items)', '¥5,000', 'Course', 'ask', 'no', 'Tabelog.', 'anngon_course'),
      it('', '', 'Fresh spring rolls (shrimp and pork)', '', 'Starters', 'ask', 'no', '2026 reviews.', 'goi_cuon'),
    ] }, {
    cuisine: 'ベトナム人シェフ Tam が、ベトナムの発酵調味料で作るベトナムの家庭料理と屋台料理。店内はメコン川のガーデンレストランをイメージし、飾りはベトナムから (食べログ)・ランチのセット: pho とご飯1,300円、pho や麺は9種類、ご飯は2種類、漬物と甘味付き (2026年9月)、Kakuni の定食1,300円 (2026年10月)、生春巻きと揚げ春巻き、鶏の pho、えびせんにのせる青パパイヤのサラダ、ココナッツの chè のヘルシーランチセット1,950円 (2026年9月)・牛すね肉や牛すじ煮込みの pho、鶏の pho、bún bò Huế、まぜ麺、えび塩のご飯。香菜は頼めばおかわり自由 (2026年)・海老と豚の生春巻き (2種のたれ)、豚タンの炒め物、里芋と豚バラの鴨鍋、山羊の料理 (2026年)・コース (税込): ベトナムコース3,500円 (11品)、アンゴンコース5,000円 (13品)、飲み放題を追加できる (食べログ)・蓮茶、ライチとヨーグルトのジュース、生ビール620円',
    neighborhood: '南船場4-11-24 エミービル 2F。心斎橋駅北口12番出口から徒歩2分、四ツ橋駅2番出口から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。pho や bún は米の麺、生春巻きはライスペーパーだが、ベトナムの発酵調味料やたれで味付けし (食べログ)、揚げ春巻きなど揚げ物もある。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。pho のスープは牛か鶏、生春巻きは海老と豚、魚醤も。ヴィーガンの説明はない。',
    notes: '[ベトナム料理・南船場、1998年からの pho と生春巻き] 心斎橋に近いビルの狭い階段を上がったところにあるベトナム料理店で、1998年から。ベトナム人シェフ Tam が料理し、店内はベトナムから運んだ飾りでメコン川のガーデンレストランのよう。ランチはすぐ埋まる: 9種類の pho や麺からひとつとご飯もの (1,300円)、または生春巻きと揚げ春巻き、鶏の pho、青パパイヤのサラダ、chè のヘルシーセット (1,950円)。香菜は頼めば無料でおかわり。名物は海老と豚の生春巻きで、2026年10月のある人は大阪でいちばんと。夜は大人数で鴨鍋や山羊、豚タンの炒め物を。日本人向けの味という声や、スープを早く下げられたという声 (2026年9月) も。',
  });
}

save();
