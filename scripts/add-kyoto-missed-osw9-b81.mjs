// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 81.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + LIVE SPOT RAG (long-running Kiyamachi live-music bar with food; open to the small hours)
//   + 遊心亭たじたじ Yushin Tei Tajitaji (Kawaramachi-Oike izakaya and late bar, a guitar-playing master)
//   + 和食ないとう Washoku Naitou (Gion washoku and sake, owner 内藤徹)
//   + 焼肉 夕苑 Yakiniku Yuen (Gion yakiniku of Omi beef, Kyoto vegetables)
//   - 祇園炭焼き 鴨LABO — branch of a brand already in data: 鴨LABO (kyr_kamo_labo, Fushimi main shop); both shops are listed
//     by the operator 株式会社GRACE on kamolabo.com
//   Brand checks: queue-status.jsonl and data have no RAG, たじたじ, 遊心亭 or 夕苑 (the data RAG hit is IL GARAGE; the
//   ないとう hit is プチレストランないとう in Owari-cho, a different shop); none of the five is a THAN brand
//   (than.co.jp/brands, 27 entries checked 2026-11-08). Big-chain hotel rule: none is in a hotel.
//   Service charges from Tabelog's Japanese original: RAG 「ミュージック・チャージ＆ワンドリンク＆ワンフード・オーダー」;
//   ないとう 「お通し：800円(税込)/人※コースご注文以外のお客様」; 夕苑 「なし」; たじたじ has no section.
//   Pins (checked against main, hidden records included): RAG moved 6m NNW (0.2m from kyoto_nankuru_shokudo in the same
//   building); たじたじ moved 5m NNW (4.0m from kyoto_marumiya_jr); ないとう at the Tabelog point; 夕苑, in the same building
//   as ないとう (2.4m apart on Tabelog), moved 4m NE.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-81');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042135', 'branch of a brand already in data: 鴨LABO (kyr_kamo_labo, main shop in Fushimi); kamolabo.com (株式会社GRACE) lists both 鴨LABO本店 and 祇園 炭焼き鴨LABO');

// ================================================================ LIVE SPOT RAG
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26017553/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.ragnet.co.jp/livespot/';
  const N = day(['18:00', '26:00']); const L = day(['18:00', '28:30']);
  put({
    id: 'kyoto_live_spot_rag', name: 'LIVE SPOT RAG', category: 'OMNI',
    lat: 35.010173, lng: 135.770705, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bar food — pizza, sandwiches, fried chicken, spring rolls — is mostly wheat; a cheese platter (2019–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks and pickles; most food has meat or cheese (2019–2025 reviews).',
    hours_raw: 'Sun–Thu 18:00–02:00; Fri, Sat and the day before a holiday 18:00–04:30; open year-round; hours may change (Tabelog). Shows start at 19:30 (or 19:00); after the show it is a bar with no charge (Tabelog). Show nights: a music charge plus one drink and one food order (Tabelog Japanese original 「ミュージック・チャージ＆ワンドリンク＆ワンフード・オーダー」); two drinks may replace the food (October 2023 review); food is served an hour before the show (March 2019 review). Cards and PayPay; no e-money (Tabelog). Smoking allowed, but not during shows (Tabelog). 5th floor of the Kyoto Empire Building on Kiyamachi north of Sanjo, 5 min from Sanjo (Tabelog).',
    hours: { 0: N, 1: N, 2: N, 3: N, 4: L, 5: L, 6: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, north of Sanjo — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Live-music bar food: sandwiches ¥700 and chicken (December 2025); tatsuta-age fried chicken with sweet vinegar sauce (October 2023); thick-cut bacon and Gorgonzola pizza ¥920, cocktails named after films and music (December 2021); RAG original pizza ¥920, six-cheese platter ¥870, spring rolls ¥770 (March 2019); oden and pickles (November 2019)',
    website: WEB, gmaps: gm('LIVE SPOT RAG 京都'), menu_url: null,
    notes: '[Live music bar · Kiyamachi] A long-running live house on Kiyamachi with shows from 19:30 and pizza, fried chicken and cocktails; after the show it stays open as a bar into the small hours. Music charge plus one drink and one food.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A Kyoto live house with a long history (December 2025 review), supporting the local scene with an audience that gives honest feedback; guests sometimes join in on stage (December 2021 review). Run by RAG (ragnet.co.jp).',
      philosophy: null,
      specialty: 'Live music; RAG original pizza.',
      anecdotes: [
        { text: 'A December 2025 first-timer came for a friend\'s show and found it so packed even the band was surprised.', source: R + 'B518589366/' },
        { text: 'An October 2023 guest ordered Kirin Ichiban Shibori and got it in a Heineken glass on a Heineken coaster.', source: R + 'B472753458/' },
        { text: 'A December 2021 regular recommends the bacon and Gorgonzola pizza because quiet food does not disturb the performers.', source: R + 'B464600069/' },
      ],
      japanese_sources_summary: '食べログ: LIVE SPOT RAG、バー・その他、中京区の木屋町、三条の北、京都エンパイヤビル5F、京阪三条駅7番出口から徒歩5分、日〜木 18:00〜翌2:00、金・土・祝日の前日 18:00〜翌4:30、年中無休、ライブは19:30 (または19:00) から、ライブのあとはチャージなしのバー、ミュージック・チャージとワンドリンク・ワンフード、カード・PayPay 可、電子マネー不可、喫煙可 (ライブ中は禁煙)。口コミ (2019〜2025年、英語): 歴史のある店、サンドイッチ700円 (2025年12月)、tatsuta-age (2023年10月)、ベーコンとゴルゴンゾーラのピザ920円、映画と音楽にちなんだカクテル (2021年12月)、チーズの盛り合わせ870円 (2019年3月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B413481472/', R + 'B464600069/', R + 'B472753458/', R + 'B518589366/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticketed shows; check the schedule on the website.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通三条上ル上大阪町521 京都エンパイヤビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.010123, 135.770730), moved 6m NNW to clear kyoto_nankuru_shokudo (0.2m, same building); cross-checked: GSI 京都府京都市中京区上大阪町521番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518589366/', R + 'B464600069/', R + 'B413481472/'],
    price_note: 'Prices from 2019–2025 reviews; show tickets extra.', last_checked: TODAY, items: [
      it('', '', 'Sandwich', '¥700', 'Food', 'no', 'ask', 'December 2025 review.', 'sandwich'),
      it('', '', 'Bacon and Gorgonzola pizza', '¥920', 'Food', 'no', 'no', 'December 2021 review.', 'pizza'),
      it('', '', 'Cheese platter (six kinds)', '¥870', 'Food', 'ask', 'no', 'March 2019 review (old).', 'cheese'),
    ] }, {
    cuisine: 'ライブハウスのバーの料理: サンドイッチ700円とチキン (2025年12月)、甘酢の tatsuta-age (2023年10月)、厚切りベーコンとゴルゴンゾーラのピザ920円、映画と音楽にちなんだカクテル (2021年12月)、RAG のオリジナルピザ920円、チーズ6種の盛り合わせ870円、春巻き770円 (2019年3月)、おでんと漬物 (2019年11月)',
    neighborhood: '木屋町、三条の北。京都市役所前駅から徒歩3分',
    gf_detail: '要確認。ピザ、サンドイッチ、唐揚げ、春巻きなど小麦が多い。チーズの盛り合わせ (2019〜2025年の口コミ)。',
    vegan_detail: '要確認。飲み物と漬物。料理の多くは肉かチーズ入り (2019〜2025年の口コミ)。',
    notes: '[ライブバー・木屋町] 木屋町の歴史あるライブハウス。19:30からのライブに、ピザや唐揚げ、カクテルを。ライブの後は深夜までバー。ミュージック・チャージとワンドリンク・ワンフード。',
  });
}

// ================================================================ 遊心亭たじたじ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26014169/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.taji-taji.com/y.html';
  const D = day(['17:30', '25:00']);
  put({
    id: 'kyoto_yushintei_tajitaji', name: '遊心亭たじたじ (Yushin Tei Tajitaji)', category: 'OMNI',
    lat: 35.010338, lng: 135.769237, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The menu leans to fried dishes (May 2016 review).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cabbage salad and fries (2009 review), but most dishes have fish or meat.',
    hours_raw: 'Daily 17:30–01:00 (L.O. 24:00); irregular closures (Tabelog). Usually open late on New Year\'s Eve (December 2025 review). Two-hour all-you-can-drink party course ¥3,500; private hire for 15 or more, including lunch parties (Tabelog). Cards (VISA, Master, JCB); PayPay; no e-money (Tabelog). 30 seats; smoking allowed (Tabelog). Up narrow stairs on the 2nd floor of the Kawaramachi Oike Building, 1 min from Kyoto Shiyakusho-mae (Tabelog; February 2013 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Oike — 1 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Classic izakaya dishes from ¥300 with seasonal specials (Tabelog): the Tajitaji salad of shredded cabbage with fish mince and a house dressing, fries, mentaiko tamagoyaki (December 2009); negitoro and tofu Tajitaji salad, pork stir-fried with Manganji peppers ¥600 (2013); yakitori (December 2025); a wide drinks list (May 2016)',
    website: WEB, gmaps: gm('遊心亭たじたじ 河原町御池'), menu_url: null,
    notes: '[Izakaya · Kawaramachi-Oike] A cosy upstairs izakaya and late bar by Kyoto City Hall with a friendly, guitar-playing master, cheap classic dishes from ¥300 and regulars who stay late. About ¥3,000–5,000.',
    chef_bio: { chef_name: null, roles: ['Master (unnamed)'], origin: null,
      background: 'A friendly master who has played guitar for guests (February 2013 review); three guitars hang on the wall, and the place has also run as a bar until morning (May 2016 review). Many regulars (December 2009 review).',
      philosophy: null,
      specialty: 'Tajitaji salad.',
      anecdotes: [
        { text: 'A December 2025 regular made it the last stop of the year, on New Year\'s Eve, finishing with yakitori.', source: R + 'B519997461/' },
        { text: 'An April 2026 after-party guest remembered little but the fun atmosphere and gave it five stars.', source: R + 'B527121700/' },
        { text: 'A February 2013 visitor climbed the narrow stairs and was treated to a live guitar number by the master.', source: R + 'B119124085/' },
      ],
      japanese_sources_summary: '食べログ: 遊心亭たじたじ、居酒屋・ダイニングバー・バー、中京区下丸屋町401-6 河原町御池ビル2F、京都市役所前駅から徒歩1分、毎日 17:30〜翌1:00 (L.O. 24:00)、不定休、カード可、PayPay 可、30席、喫煙可、2時間飲み放題のコース3,500円、15名以上で貸切 (昼も可)、定番の料理は300円から。口コミ (2009〜2026年、英語): ギターを弾くマスター (2013年2月)、たじたじサラダ、明太子の卵焼き (2009年12月)、揚げ物が多い (2016年5月)、大晦日も遅くまで営業 (2025年12月)。',
      confidence: 'low', sources: [TB, WEB, R + 'B118793317/', R + 'B119124085/', R + 'B195322013/', R + 'B519997461/', R + 'B527121700/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual izakaya; regulars.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条上ル下丸屋町401-6 河原町御池ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated December 2025 and April 2026.' },
    pin_source: `Tabelog ${TB} (35.010297, 135.769258), moved 5m NNW to clear kyoto_marumiya_jr (4.0m); cross-checked: GSI 京都府京都市中京区下丸屋町401番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B27830316/'],
    price_note: 'Party course from Tabelog; dish price from a 2013 review (old).', last_checked: TODAY, items: [
      it('', '', 'Party course with 2-hour all-you-can-drink', '¥3,500', 'Courses', 'ask', 'ask', 'Tabelog.', 'course'),
      it('', '', 'Tajitaji salad', '', 'Salads', 'ask', 'no', 'December 2009 and February 2013 reviews (old).', 'tajitaji_salad'),
      it('満願寺シシトウと豚肉の炒め物', '', 'Pork stir-fried with Manganji peppers', '¥600', 'A la carte', 'ask', 'no', 'August 2013 review (old).', 'manganji'),
    ] }, {
    cuisine: '300円からの定番の居酒屋料理と季節のおすすめ (食べログ): キャベツの千切りに魚のすり身と特製ドレッシングのたじたじサラダ、フライドポテト、明太子の卵焼き (2009年12月)、ネギトロと豆腐のたじたじサラダ、満願寺シシトウと豚肉の炒め物600円 (2013年)、焼き鳥 (2025年12月)、豊富な飲み物 (2016年5月)',
    neighborhood: '河原町御池。京都市役所前駅から徒歩1分',
    gf_detail: '要確認。揚げ物が多い (2016年5月の口コミ)。',
    vegan_detail: '要確認。キャベツのサラダとフライドポテト (2009年の口コミ) があるが、ほとんどの料理に魚か肉。',
    notes: '[居酒屋・河原町御池] 京都市役所のそばの2階の居心地のいい居酒屋で、深夜はバー。ギターを弾く気さくなマスター、300円からの定番の料理、遅くまで飲む常連。3,000〜5,000円ほど。',
  });
}

// ================================================================ 和食ないとう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26045687/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://happytry.net/detail/4614';
  const D = day(['11:30', '14:30'], ['17:30', '22:30']);
  put({
    id: 'kyoto_washoku_naitou_gion', name: '和食ないとう (Washoku Naitou)', category: 'OMNI',
    lat: 35.004319, lng: 135.777176, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Japanese courses, some with sushi; soy sauce and dashi are likely (happytry).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seasonal courses with sushi (happytry).',
    hours_raw: 'Mon, Tue, Thu–Sun 11:30–14:30 (L.O. 14:00) and 17:30–22:30 (L.O. food 21:30, drinks 22:00); closed Wednesdays and on irregular days (Tabelog; happytry). Cover charge ¥800 a head for guests not ordering a course (Tabelog Japanese original 「お通し：800円(税込)/人※コースご注文以外のお客様」). Cards; no e-money or QR (Tabelog). 16 seats: 8 at the counter and two raised tables for 4; non-smoking (Tabelog). Walk-ins welcome (happytry). Ground floor of the Vendome Gion Building, 8 min from Gion-Shijo (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, north of Shijo near Higashioji — 8 min from Gion-Shijo Stn',
    cuisine: 'Traditional Japanese food with chosen sake: seasonal courses, some with sushi (happytry); a monthly okami\'s night of small dishes and freshly opened sake, and a sake-and-food evening every two months with partner breweries (happytry); a creative course paired with drinks (October 2026); about ¥8,000–15,000 at dinner',
    website: WEB, gmaps: gm('和食ないとう 祇園'), menu_url: null,
    notes: '[Washoku · Gion] A calm counter for seasonal Japanese courses and carefully chosen sake, run by a taisho and okami with brewery tie-ins and sake evenings. Lunch and dinner; about ¥8,000–15,000.',
    chef_bio: { chef_name: '内藤徹', roles: ['Owner (happytry)'], origin: null,
      background: 'The owner is listed as 内藤徹 (happytry). A friendly taisho and okami; ties with several sake breweries (happytry).',
      philosophy: '"日本酒と美味しいお料理と落ち着いた空間" — sake, good food and a calm space (happytry).',
      specialty: 'Seasonal courses with sake pairings.',
      anecdotes: [
        { text: 'An October 2026 business party found the course free of convention, each dish timed to the chosen drinks.', source: R + 'B536944952/' },
      ],
      japanese_sources_summary: '食べログ: 和食ないとう、日本料理、東山区祇園町北側325 ヴァンドーム祇園ビル1F、京阪祇園四条駅から徒歩8分、月・火・木〜日 11:30〜14:30 (L.O. 14:00)・17:30〜22:30 (L.O. 料理21:30、ドリンク22:00)、水曜休み、お通し800円 (コース以外)、カード可、電子マネー・QR 不可、16席 (カウンター8、小上がりのテーブル2)、禁煙。happytry: 店主は内藤徹、「日本酒と美味しいお料理と落ち着いた空間」、大将と女将、季節のコース (コースにより寿司)、毎月の女将さんの日、2か月ごとの日本酒とお料理を楽しむ会、不定休あり。口コミ (2026年10月、英語): 型にとらわれないコース、飲み物との組み合わせ。',
      confidence: 'low', sources: [TB, WEB, R + 'B536944952/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter dining; book for courses.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側325 ヴァンドーム祇園ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and happytry page; review dated October 2026.' },
    pin_source: `Tabelog ${TB} (35.004319, 135.777176); cross-checked: GSI 京都府京都市東山区祇園町北側325番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices found; Tabelog average ¥8,000–9,999 at dinner and ¥3,000–3,999 at lunch; ¥800 cover without a course.', last_checked: TODAY, items: [
      it('', '', 'Seasonal course', '', 'Courses', 'ask', 'no', 'happytry; October 2026 review.', 'course'),
    ] }, {
    cuisine: 'こだわりの日本酒と伝統的な和食: 季節のコース、コースにより寿司 (happytry)、毎月の女将さんの日 (小皿と開けたての日本酒)、2か月ごとの蔵元との日本酒とお料理を楽しむ会 (happytry)、飲み物に合わせた創作的なコース (2026年10月)、夜は8,000〜15,000円ほど',
    neighborhood: '祇園、四条の北、東大路通の近く。祇園四条駅から徒歩8分',
    gf_detail: '要確認。季節の和食のコース、コースにより寿司。醤油や出汁を使う可能性が高い (happytry)。',
    vegan_detail: 'ヴィーガン不可。寿司のある季節のコース (happytry)。',
    notes: '[和食・祇園] 大将と女将の落ち着いたカウンターで、季節のコースとこだわりの日本酒。蔵元との日本酒の会も。昼と夜、8,000〜15,000円ほど。',
  });
}

// ================================================================ 焼肉 夕苑
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019053/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_yakiniku_yuen_gion', name: '焼肉 夕苑 (Yakiniku Yuen)', category: 'OMNI',
    lat: 35.00436, lng: 135.777224, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plain grilled meat with salt or wasabi may suit (April 2023 review); marinades and cold noodles are usually wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Salads of Kyoto vegetables and kimchi (Tabelog); ask whether the kimchi has fish.',
    hours_raw: 'From 18:00 until late; earlier opening on request; irregular closures (Tabelog). No cover charge (Tabelog Japanese original 「なし」). Cards; no e-money (Tabelog). 36 seats with counter, tatami and sunken seating; smoking allowed (Tabelog; August 2026 review). English menu (Tabelog); English-speaking staff (May 2024 review). Same-day bookings by phone (Tabelog). Ground floor of the Vendome Gion building by the Gion bus stop, 5 min from Gion-Shijo (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, north of Shijo near Higashioji — 5 min from Gion-Shijo Stn',
    cuisine: 'Yakiniku of domestic and wagyu beef, centred on Omi beef, with Kyoto vegetables and rice, salads by a vegetable sommelier, kimchi from a long-established Kyoto shop, and cold noodles or bibim noodles to finish (Tabelog); a ¥4,000 visitor set of salad, four meats, rice and dessert, with outside skirt a highlight (May 2024); meat with wasabi (April 2023); about ¥5,000–9,000',
    website: null, gmaps: gm('焼肉 夕苑 祇園'), menu_url: null,
    notes: '[Yakiniku · Gion] A late-opening Gion yakiniku of Omi and other wagyu with Kyoto vegetables, an English menu and a ¥4,000 visitor set. Smoking allowed. About ¥5,000–9,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A friendly manager (March 2023 review). Staff speak fluent English (May 2024 review).',
      philosophy: 'Omi beef with Kyoto-grown vegetables and rice (Tabelog).',
      specialty: 'Omi beef yakiniku.',
      anecdotes: [
        { text: 'A May 2024 visitor ordered extra outside skirt from the ¥4,000 set and called it a favourite meal in Japan.', source: R + 'B486189397/' },
        { text: 'An August 2026 diner liked the food but not the cigarette smoke from the only other table.', source: R + 'B533477219/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉 夕苑、焼肉・韓国料理・居酒屋、東山区富永町東大路通西入祇園町北側325 ヴァンドーム祇園1F、祇園四条駅から徒歩5分、市バス「祇園」すぐ、18:00〜深夜、早い時間は要相談、不定休、チャージなし、カード可、電子マネー不可、36席、喫煙可、英語メニューあり、Omi の牛肉、京都の野菜と米、野菜ソムリエのサラダ、京都の老舗のキムチ、冷麺とビビン麺 (紹介文、英訳)。口コミ (2023〜2026年、英語): 4,000円のセット、ハラミ、英語の話せるスタッフ (2024年5月)、わさびで食べる肉 (2023年4月)、店内で喫煙 (2026年8月)。',
      confidence: 'low', sources: [TB, R + 'B462766371/', R + 'B464589988/', R + 'B486189397/', R + 'B533477219/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog) and English-speaking staff (May 2024 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区富永町東大路通西入祇園町北側325 ヴァンドーム祇園1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004335, 135.777193), moved 4m NE to clear 和食ないとう in the same building (2.4m); cross-checked: GSI 京都府京都市東山区祇園町北側325番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486189397/'],
    price_note: 'Set price from a May 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Visitor set (salad, four meats, rice, dessert)', '¥4,000', 'Sets', 'ask', 'no', 'May 2024 review.', 'set'),
      it('', '', 'Cold noodles / bibim noodles', '', 'Noodles', 'no', 'ask', 'Tabelog.', 'reimen'),
    ] }, {
    cuisine: 'Omi の牛を中心に国産牛と和牛の焼肉、京都の野菜と米、野菜ソムリエのサラダ、京都の老舗のキムチ、最後に冷麺かビビン麺 (食べログ)。サラダ、肉4種、ご飯、デザートの4,000円のセット、特にハラミ (2024年5月)、わさびで食べる肉 (2023年4月)。5,000〜9,000円ほど',
    neighborhood: '祇園、四条の北、東大路通の近く。祇園四条駅から徒歩5分',
    gf_detail: '要確認。塩やわさびで食べる肉は合う可能性がある (2023年4月の口コミ)。たれと冷麺はふつう小麦入り。',
    vegan_detail: '要確認。京都の野菜のサラダとキムチ (食べログ)。キムチの魚介の有無は要確認。',
    notes: '[焼肉・祇園] 夜遅くまでの祇園の焼肉店。Omi の牛などの和牛と京都の野菜、英語メニューと4,000円のセット。喫煙可。5,000〜9,000円ほど。',
  });
}

save();
