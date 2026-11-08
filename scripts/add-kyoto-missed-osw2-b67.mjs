// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 67.
//   Queue run from the osw2 worktree, 2026-11-07. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail.
//   + 我逢人かっぱ Gahojin Kappa (late-night Gion izakaya of sushi, robata and fried dishes; きりんやフーズ, a small Gion group)
//   + かんたく Kantaku (seafood izakaya on Kiyamachi open 19:00–07:00, with a long shochu list)
//   - VIVE LOUNGE KYOTO — thin (one review)
//   - 魚ト天クシ酒場スタンドドスエ — sub-brand of a multi-city group (漁師小屋)
//   - 錦まるん — a souvenir sweets shop with branches; not a place to eat
//   + カフェ バウ Cafe BAW (monochrome "2D" croffle café above Nishiki Market; since 2022)
//   + SOMA (Italian restaurant and bar on the Kamo River near Gojo, with a summer yuka; since 2023)
//   None of the four is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in queue-status.jsonl: no earlier rulings.
//   Service charges: かんたく — Tabelog contradicts itself (English note says a service fee, Japanese original says none); SOMA 10% (Tabelog).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; かんたく offset ~5 m off 焼肉 マウム (5 m), カフェ バウ ~1 m off 三木鶏卵 (9 m);
//   each now 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-67');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045289', 'VIVE LOUNGE KYOTO: thin — one Tabelog review; not drafted');
skip('26043975', '魚ト天クシ酒場スタンドドスエ: a sub-brand of a multi-city group — Tabelog links ryoushi-goya.com, whose site (read 2026-11-07) lists 漁港直送漁師小屋 at Nishiki Market, Kyoto Avanti and two Shinsekai (Osaka) shops; opened November 2025');
skip('26030031', '錦まるん: a souvenir shop for cookies, candies and jellies with branches near Kiyomizu-dera and Arashiyama (April 2024 review); take-away goods only, not a place to eat');

// ================================================================ 我逢人かっぱ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005389/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kirinya-foods.jp/kappa/index.html';
  const MENU = 'http://www.kirinya-foods.jp/kappa/menu.html';
  const WD = day(['18:00', '02:00']), SU = day(['17:00', '24:00']);
  put({
    id: 'kyoto_gahojin_kappa_gion', name: '我逢人かっぱ (Gahojin Kappa)', category: 'OMNI',
    lat: 35.00504108787373, lng: 135.77307186035355, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi, sashimi, robata-grilled fish, dashimaki and many fried dishes; no gluten information is published (official menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and sushi izakaya. Simple vegetable dishes (tomato or onion slices, spinach ohitashi, daikon salad) are listed — ask (official menu).',
    hours_raw: 'Weekdays 18:00–02:00 (last entry 02:00); Sunday and holidays 17:00–24:00; closed Monday (official site, November 2026) — the site lists only weekday and Sunday-and-holiday hours, so no Saturday hours are given — check before going on a Saturday. Reservations by phone; groups up to 30; English menu (official site; Tabelog). Cards: JCB, AMEX, Diners only (Tabelog; August 2026). Smoking allowed, paper cigarettes included (Tabelog; 2026 reviews). Counter on the ground floor, tatami upstairs (2026 reviews). Busy and popular with foreign visitors; walk-ins may wait (2026 reviews). On the corner of Yamato-oji and Sueyoshi-cho in northern Gion, 5 min from Gion-Shijo Stn (Tabelog; June 2026).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Northern Gion, Yamato-oji at Sueyoshi-cho — 5 min from Gion-Shijo Stn',
    cuisine: 'Late-night Gion izakaya of sushi, robata grilling and fried dishes (official site; reviews) · nigiri by the pair ¥550–770 (tuna belly ¥770), thin rolls ¥530–770, sushi platters ¥1,980 and ¥2,590 (official menu) · dashimaki ¥480, mentaiko dashimaki ¥550, umaki ¥1,080; grilled sea-bream head ¥1,080, sawara Saikyo-yaki ¥880; aubergine or nama-fu dengaku ¥880 (official menu) · kara-age and other fried dishes ¥550; beef tataki ¥2,180 (official menu) · banquet and fugu courses (official site) · drinks about ¥500 (September 2026)',
    website: SITE, gmaps: gm('我逢人かっぱ 祇園'), menu_url: MENU,
    notes: "[Izakaya · northern Gion, sushi and robata till 2 am] A busy two-floor izakaya on Yamato-oji serving sushi, robata-grilled fish and good fried dishes until the small hours — reasonable for Gion, with nigiri from ¥550 a pair and a famous dashimaki. Counter downstairs, tatami up; smoking allowed; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Chefs not named'], origin: null,
      background: 'Run by きりんやフーズ, a group centred on Gion, Kyoto, that buys at the market every morning (official site); its site lists a few other shops of its own.',
      philosophy: 'Fresh seafood, meat, vegetables and dried goods bought at the market each morning or sent direct from the producers (official site).',
      specialty: 'Sushi and dashimaki late into the night.',
      anecdotes: [
        { text: 'A September 2026 solo diner waited 30 minutes without a booking, then had sashimi, dashimaki, robata-grilled sanma and hamo tempura.', source: R + 'B535492509/' },
        { text: 'A July 2026 regular calls the mentaiko dashimaki the best tamagoyaki tried anywhere; the shrimp are kept live in a tank.', source: R + 'B532716960/' },
        { text: 'An August 2026 guest advises naming an accepted card brand clearly, as staff first said cards were not taken.', source: R + 'B534393606/' },
      ],
      japanese_sources_summary: '公式サイト (きりんやフーズ): 我逢人かっぱ、京都市東山区八坂新地末吉町77、平日18:00〜翌2:00 (入店ラスト2:00)、日祝17:00〜24:00、月曜定休、宴会は最大30名、ふぐコース。きりんやフーズは京都・祇園を中心に飲食店を展開、毎朝市場で仕入れ、産地直送。メニュー: 握り2カン550〜770円 (とろ770円)、細巻530〜770円、盛り合せ並1,980円・上2,590円、だしまき480円、明太子だしまき550円、うまき1,080円、鯛かぶと焼1,080円、さわら西京焼880円、なす田楽・生麩田楽880円、とりからあげ550円、牛たたき2,180円。食べログ: 寿司・居酒屋・日本料理、祇園四条駅から徒歩5分、カード (JCB・AMEX・Diners)、喫煙可、英語メニュー。口コミ (2026年、英語): 大和大路と末吉町の角、1階カウンター、2階座敷、外国からの客が多い、遅くまで開いている、刺身5種盛り、炉端の秋刀魚、鱧の天ぷら、生簀の海老、飲み物500円、紙巻きたばこも可。',
      confidence: 'medium', sources: [SITE, MENU, 'http://www.kirinya-foods.jp/', TB, R + 'B427923362/', R + 'B523658870/', R + 'B527442588/', R + 'B529977734/', R + 'B531610386/', R + 'B531860118/', R + 'B532716960/', R + 'B534339167/', R + 'B534393606/', R + 'B535492509/', R + 'B535531517/'] },
    cultural_comfort: { level: 'english', note: 'English menu; many foreign guests; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂新地末吉町77',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 closing days) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005041, 135.773072); cross-checked: GSI 京都府京都市東山区末吉町77番地 (lot) 62m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Prices from the official menu page (read 2026-11-07).', last_checked: TODAY, items: [
      it('とろ', '', 'Tuna belly nigiri, 2 pieces', '¥770', 'Sushi', 'ask', 'no', '', 'toro'),
      it('盛り合せ 並', '', 'Sushi platter, regular', '¥1,980', 'Sushi', 'ask', 'no', 'Special ¥2,590.', 'moriawase'),
      it('ノーマルだしまき', '', 'Dashimaki omelette', '¥480', 'Dishes', 'ask', 'no', '', 'dashimaki'),
      it('明太子だしまき', '', 'Mentaiko dashimaki', '¥550', 'Dishes', 'ask', 'no', '', 'mentai_dashimaki'),
      it('鯛かぶと焼', '', 'Grilled sea-bream head', '¥1,080', 'Grilled', 'ask', 'no', '', 'tai_kabuto'),
      it('なす田楽・揚げ出し', '', 'Aubergine dengaku or agedashi', '¥880', 'Dishes', 'ask', 'ask', '', 'nasu'),
      it('とりからあげ', '', 'Chicken kara-age', '¥550', 'Fried', 'no', 'no', '', 'karaage'),
    ] }, {
    cuisine: '寿司、炉端焼き、揚げ物の祇園の深夜の居酒屋 (公式サイト、口コミ)・握り2カン550〜770円 (とろ770円)、細巻530〜770円、盛り合せ1,980円・2,590円 (公式メニュー)・だしまき480円、明太子だしまき550円、うまき1,080円、鯛かぶと焼1,080円、さわら西京焼880円、なす・生麩の田楽880円 (公式メニュー)・唐揚げなどの揚げ物550円、牛たたき2,180円 (公式メニュー)・宴会とふぐのコース (公式サイト)・飲み物500円ほど (2026年9月)',
    neighborhood: '祇園の北、大和大路と末吉町の角。祇園四条駅から徒歩5分',
    gf_detail: '要確認。寿司、刺身、炉端焼きの魚、だしまき、揚げ物が多い。グルテンの情報は公開されていない (公式メニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚と寿司の居酒屋。トマトやオニオンスライス、ほうれん草のおひたし、大根サラダなどはある、要確認 (公式メニュー)。',
    notes: '[居酒屋・祇園の北、深夜2時まで寿司と炉端] 大和大路のにぎやかな2階建ての居酒屋。寿司、炉端焼きの魚、評判の揚げ物を深夜まで。祇園にしては手頃で、握りは2カン550円から、名物のだしまきも。1階はカウンター、2階は座敷。喫煙可、月曜休み。',
  });
}

// ================================================================ かんたく
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029143/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '07:00']);
  put({
    id: 'kyoto_kantaku_kiyamachi', name: 'かんたく (Kantaku)', category: 'OMNI',
    lat: 35.007177, lng: 135.76982, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, tempura, braised pork belly, seafood hot pot with soba to finish; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and meat izakaya (reviews).',
    hours_raw: '19:00–07:00 daily (last order 06:30); open all year (Tabelog). Reservations taken, same day by phone (Tabelog; February 2023). Cards accepted; no e-money (Tabelog). Service charge: Tabelog’s English note mentions one, but the Japanese original says none — ask. 27 seats: 5 at the counter, 22 at tables; smoking allowed (Tabelog). All-you-can-eat and drink plans (Tabelog). On the ground floor of the Grantac Rokkaku Building near Kiyamachi, 5 min from Sanjo Stn (Tabelog; April 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, Rokkaku — 5 min from Sanjo Stn',
    cuisine: 'Seafood izakaya open through the night (Tabelog; reviews) · assorted sashimi — e.g. kanpachi, sea bream, salmon, scallop, firefly squid in spring (April 2024); grilled cod milt over charcoal · braised pork belly with egg, clam gratin, garlic sprouts, dried sardines with grated daikon, pork kimchi, dashimaki, tempura platter, shrimp mayo (2023–2025) · seafood hot-pot course with obanzai, sashimi and fried dishes, soba to finish (October 2026) · a long shochu list (2023–2024)',
    website: null, gmaps: gm('かんたく 木屋町'), menu_url: TB,
    notes: "[Izakaya · Kiyamachi, seafood until 7 am] A rare all-night izakaya near Kiyamachi, open from 19:00 to 7:00: sashimi platters, charcoal-grilled milt, braised pork belly and a seafood hot-pot course, with walls of shochu. Useful for a late second round or breakfast after a long night. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (2023–2026) describe a seafood-focused izakaya near Kiyamachi that stays open until 7 am, with a wide shochu collection lining the walls.',
      philosophy: null,
      specialty: 'Late-night sashimi and seafood hot pot.',
      anecdotes: [
        { text: 'An April 2024 second-rounder found fresh firefly squid in the sashimi at midnight.', source: R + 'B512935827/' },
        { text: 'A March 2023 visitor searching for food late at night found it and loved the garlic sprouts and braised pork belly.', source: R + 'B462803997/' },
        { text: 'An October 2026 guest came at dawn after drinking all night in Kiyamachi.', source: R + 'B537204033/' },
      ],
      japanese_sources_summary: '食べログ: かんたく、居酒屋・海鮮・鍋、京都市中京区北車屋町265 グランタック六角ビル1F、京阪三条駅から徒歩5分、毎日19:00〜翌7:00 (L.O.6:30)、年中無休、予約可、カード可、電子マネー不可、27席 (カウンター5、テーブル22)、喫煙可、飲み放題・食べ放題あり、サービス料の記載は英語と日本語で食い違う。口コミ (2023〜2026年、英語): 朝7時まで開いている、刺身盛り合わせ (カンパチ、鯛、サーモン、帆立、ホタルイカ)、白子の炭火焼き、豚の角煮、あさりのグラタン、にんにくの芽、しらすおろし、豚キムチ、だし巻、天ぷら盛り合わせ、海老マヨ、海鮮鍋のコースと締めのそば、焼酎の品ぞろえ、飲み放題付きで1人5,000円以下 (2023年)。',
      confidence: 'low', sources: [TB, R + 'B461111099/', R + 'B462803997/', R + 'B468210558/', R + 'B477197563/', R + 'B478066126/', R + 'B489839239/', R + 'B512935827/', R + 'B513417354/', R + 'B537204033/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open all night; cards accepted; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区北車屋町265 グランタック六角ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007181, 135.769870), offset ~5m to clear 焼肉 マウム 京都木屋町店 (5m); cross-checked: GSI 京都府京都市中京区北車屋町265番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513417354/', R + 'B477197563/'],
    price_note: 'No published item prices; a February 2023 group paid under ¥5,000 each with all-you-can-drink.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi', '', 'Seafood', 'ask', 'no', '', 'sashimi'),
      it('', '', 'Braised pork belly with egg', '', 'Dishes', 'ask', 'no', '', 'kakuni'),
      it('', '', 'Seafood hot-pot course (obanzai, sashimi, fried dishes, soba to finish)', '', 'Courses', 'no', 'no', 'October 2026.', 'nabe_course'),
    ] }, {
    cuisine: '夜通し開いている海鮮の居酒屋 (食べログ、口コミ)・刺身盛り合わせ、たとえばカンパチ、鯛、サーモン、帆立、春はホタルイカ (2024年4月)、白子の炭火焼き・卵入りの豚の角煮、あさりのグラタン、にんにくの芽、しらすおろし、豚キムチ、だし巻、天ぷら盛り合わせ、海老マヨ (2023〜2025年)・おばんざい、刺身、揚げ物、締めのそばの海鮮鍋のコース (2026年10月)・焼酎の品ぞろえ (2023〜2024年)',
    neighborhood: '木屋町、六角。三条駅から徒歩5分',
    gf_detail: '要確認。刺身、天ぷら、豚の角煮、締めのそばの海鮮鍋。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。海鮮と肉の居酒屋 (口コミ)。',
    notes: '[居酒屋・木屋町、朝7時まで海鮮] 木屋町のそばで19時から朝7時まで開いている珍しい居酒屋。刺身の盛り合わせ、白子の炭火焼き、豚の角煮、海鮮鍋のコース、壁一面の焼酎。遅い二軒目にも、夜通し飲んだあとの朝ごはんにも。喫煙可。',
  });
}

// ================================================================ カフェ バウ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038593/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '18:00']);
  put({
    id: 'kyoto_cafe_baw_nishiki', name: 'カフェ バウ (Cafe BAW)', category: 'OMNI',
    lat: 35.005088, lng: 135.764625, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: croffles are made from croissant dough; donuts and brownies too (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter-rich croissant dough, custard and cream (reviews).',
    hours_raw: '10:30–18:00 daily; closed over New Year (Tabelog). Order and pay first at the counter, then collect with a buzzer; mostly self-service (2024 reviews). Cards (Visa, Master) and e-money accepted (Tabelog). 34 seats; non-smoking; power outlets (Tabelog). Dogs welcome inside (2024–2025 reviews). Stairs up to the café — awkward with prams (September 2024). On the 2nd floor in Nishiki Market, 4 min from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market (2nd floor) — 4 min from Kyoto Kawaramachi Stn',
    cuisine: 'Monochrome "2D" café of croffles and tea, opened December 2022 (Tabelog; reviews) · croffles of French croissant dough — honey butter ¥1,200, with iced coffee ¥1,500 as a set (2024); sugar, almond caramel, blueberry mascarpone and more (2024–2025) · afternoon stand of croissant sandwiches, croffles, brownies and donuts (December 2024) · cream sodas with your choice of syrup and ice cream; butterfly-pea lemonade (2025)',
    website: null, gmaps: gm('カフェ バウ 錦市場'), menu_url: TB,
    notes: "[Café · Nishiki Market, a black-and-white croffle room] Up a flight of stairs above Nishiki Market, a café drawn entirely in black-and-white line art, like stepping into a comic. Freshly fried croffles (honey butter about ¥1,200), cream sodas and tea; order at the counter and wait for the buzzer. Dogs welcome.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in December 2022 (Tabelog). Reviewers (2024–2026) describe Kyoto’s first "2D art café", with monochrome walls and furniture, specialising in croffles from French croissant dough and tea.',
      philosophy: null,
      specialty: 'Croffles.',
      anecdotes: [
        { text: 'An April 2025 visitor brought a dog, Pom, who modelled for photos; staff lent a top for the owner.', source: R + 'B506677737/' },
        { text: 'A December 2024 guest took dozens of photos while waiting for a freshly fried croffle.', source: R + 'B497496373/' },
        { text: 'A March 2026 visitor, worn out by the crowds of Nishiki, found the quiet black-and-white room a different world.', source: R + 'B523905096/' },
      ],
      japanese_sources_summary: '食べログ: カフェ バウ、カフェ・洋菓子、京都市中京区東魚屋町180 2F、京都河原町駅から徒歩4分、10:30〜18:00、年末年始休み、カード (VISA・Master)・電子マネー可、34席、禁煙、電源あり、2022年12月9日オープン、絵本の中のような2Dアートカフェ、紅茶とクロッフル。口コミ (2024〜2026年、英語): 錦市場の2階、モノクロの店内、京都初のクロッフルと紅茶の専門店、フランス産のクロワッサン生地、ハニーバタークロッフル1,200円、アイスコーヒーとのセット1,500円、アフタヌーンティーのスタンド、クリームソーダ、バタフライピーのレモネード、先払いでブザーで呼ばれる、セルフサービス、犬同伴可、入口に階段、外国からの客も多い。',
      confidence: 'low', sources: [TB, R + 'B483568439/', R + 'B494903004/', R + 'B495023627/', R + 'B497496373/', R + 'B501390706/', R + 'B502379189/', R + 'B506236680/', R + 'B506677737/', R + 'B508658570/', R + 'B511942655/', R + 'B522892186/', R + 'B523905096/'] },
    cultural_comfort: { level: 'english', note: 'Counter ordering; many foreign visitors; dogs welcome.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東魚屋町180 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026. The website on Tabelog (cafebaw.com) now shows unrelated gambling content, so it is left out.' },
    pin_source: `Tabelog ${TB} (35.005088, 135.764631), offset ~1m to clear 三木鶏卵 (9m); cross-checked: GSI 京都府京都市中京区東魚屋町180番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494903004/', R + 'B497496373/'],
    price_note: 'Prices from 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Honey butter croffle', '¥1,200', 'Sweets', 'no', 'no', '2024.', 'honey_butter'),
      it('', '', 'Croffle with iced coffee (set)', '¥1,500', 'Sets', 'no', 'no', '2024.', 'set'),
      it('', '', 'Iced coffee', '¥300', 'Drink', 'gf', 'ask', 'With a croffle, 2024.', 'iced_coffee'),
      it('', '', 'Cream soda (choose syrup and ice cream)', '', 'Drink', 'ask', 'no', '', 'cream_soda'),
    ] }, {
    cuisine: 'クロッフルと紅茶のモノクロの「2D」カフェ、2022年12月開業 (食べログ、口コミ)・フランス産クロワッサン生地のクロッフル、ハニーバター1,200円、アイスコーヒーとのセット1,500円 (2024年)、シュガー、アーモンドキャラメル、ブルーベリーマスカルポーネなど (2024〜2025年)・クロワッサンサンド、クロッフル、ブラウニー、ドーナツのスタンド (2024年12月)・シロップとアイスを選べるクリームソーダ、バタフライピーのレモネード (2025年)',
    neighborhood: '錦市場 (2階)。京都河原町駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。クロッフルはクロワッサン生地、ドーナツやブラウニーも (口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターたっぷりのクロワッサン生地、カスタード、クリーム (口コミ)。',
    notes: '[カフェ・錦市場、白黒のクロッフルの部屋] 錦市場の階段を上がった先、白黒の線画で描かれた漫画の中のようなカフェ。揚げたてのクロッフル (ハニーバター1,200円ほど)、クリームソーダ、紅茶。カウンターで注文し、ブザーで受け取り。犬も一緒に入れる。',
  });
}

// ================================================================ SOMA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040045/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_soma_kamogawa', name: 'SOMA', category: 'OMNI',
    lat: 34.999598227875865, lng: 135.76890549030148, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Handmade Italian: carpaccio, roast beef, grilled meats, pasta and pizza; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Italian dishes of meat, fish and cheese (reviews).',
    hours_raw: '17:00–24:00 daily; closing days irregular — check social media (Tabelog). Reservations recommended for riverside seats in summer (July 2026). Cards and e-money accepted (Tabelog). 10% service charge since 1 October 2024 (Tabelog). 50 seats with a 10-seat counter; a terrace and summer kawadoko over the Kamo River; designated smoking space (Tabelog; 2026 reviews). Christmas Eve and Day: a ¥10,000 set course only (Tabelog). On the Kamo River near Shimizu-Gojo (Tabelog; June 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kamo River near Gojo — by Shimizu-Gojo Stn',
    cuisine: 'Italian restaurant and bar by the Kamo River, opened August 2023 (Tabelog) · lamb grill ¥2,550, diavola pizza ¥2,650, three-appetiser plate ¥1,350, French fries ¥780; house wine ¥950, lime mojito ¥1,580 (June 2026) · carpaccio, roast beef of flap meat, octopus ajillo, wagyu steak, hamo and matsutake pasta, catalana (2026 reviews) · kawadoko course with all-you-can-drink ¥7,000 (July 2026), course ¥8,000 (May 2026); Heineken on draught and Kyoto craft beer',
    website: null, gmaps: gm('SOMA 京都 鴨川 五条'), menu_url: TB,
    notes: "[Italian · Kamo River by Gojo, a riverside terrace] A relaxed Italian restaurant and bar with a terrace and summer kawadoko over the Kamo near Gojo: carpaccio, roast beef, grilled lamb, pizzas and seasonal pasta, with courses and free-flow drinks from about ¥7,000. Open to midnight; 10% service; book river seats early.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Opened in August 2023 (Tabelog); run by 株式会社love letters of Higashiyama, Kyoto (National Tax Agency invoice register T3130001064433). The shop offers handmade Italian with seasonal ingredients by the Kamo River (Tabelog).',
      philosophy: 'Handmade Italian with seasonal ingredients all year round (Tabelog).',
      specialty: 'Italian courses on the Kamo River kawadoko.',
      anecdotes: [
        { text: 'A July 2026 couple booked the kawadoko course the day before, but the riverside seats were already full even on a weekday.', source: R + 'B533187635/' },
        { text: 'An October 2026 diner happened to catch a drone show over the river during dinner.', source: R + 'B538753863/' },
        { text: 'A September 2026 table by the river tried conger eel and matsutake pasta, a taste of early autumn.', source: R + 'B536942800/' },
      ],
      japanese_sources_summary: '食べログ: SOMA、イタリアン・バー、京都市下京区美濃屋町177、毎日17:00〜24:00、不定休 (SNSで確認)、カード・電子マネー可、2024年10月1日からサービス料10%、50席 (カウンター10)、喫煙スペースあり、2023年8月4日オープン、鴨川沿いのイタリアンとバー、季節の食材の手作りイタリアン、12月24・25日はクリスマス限定コース10,000円のみ、インボイス T3130001064433 (株式会社love letters、京都市東山区)。口コミ (2026年、英語): 清水五条の鴨川沿い、テラスと川床、ラムのグリル2,550円、ディアボラ2,650円、前菜3種1,350円、フライドポテト780円、ハウスワイン950円、ライムモヒート1,580円、カルパッチョ、ハラミのローストビーフ、タコのアヒージョ、和牛ステーキ、鱧と松茸のパスタ、カタラーナ、川床コース飲み放題付き7,000円、8,000円のコース、ハイネケン、京都のクラフトビール。',
      confidence: 'low', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3130001064433', R + 'B527721525/', R + 'B527770520/', R + 'B527876020/', R + 'B529718579/', R + 'B530347458/', R + 'B530868573/', R + 'B532785618/', R + 'B533038086/', R + 'B533187635/', R + 'B533608195/', R + 'B536942800/', R + 'B538753863/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; 10% service; riverside terrace.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区美濃屋町177',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated May–October 2026.' },
    pin_source: `Tabelog ${TB} (34.999598, 135.768905); cross-checked: GSI 京都府京都市下京区美濃屋町177番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529718579/', R + 'B533187635/'],
    price_note: 'Prices from June and July 2026 reviews (tax included; 10% service extra).', last_checked: TODAY, items: [
      it('', '', 'Lamb grill', '¥2,550', 'Mains', 'ask', 'no', '', 'lamb'),
      it('', '', 'Diavola pizza', '¥2,650', 'Pizza', 'no', 'no', '', 'diavola'),
      it('', '', 'Assorted appetisers, 3 kinds', '¥1,350', 'Antipasti', 'ask', 'no', '', 'antipasti'),
      it('', '', 'Kawadoko course with all-you-can-drink', '¥7,000', 'Courses', 'ask', 'no', 'Summer; July 2026.', 'kawadoko'),
      it('', '', 'House wine, glass', '¥950', 'Drink', 'gf', 'ask', '', 'wine'),
    ] }, {
    cuisine: '鴨川沿いのイタリアンとバー、2023年8月開業 (食べログ)・ラムのグリル2,550円、ディアボラ2,650円、前菜3種1,350円、フライドポテト780円、ハウスワイン950円、ライムモヒート1,580円 (2026年6月)・カルパッチョ、ハラミのローストビーフ、タコのアヒージョ、和牛ステーキ、鱧と松茸のパスタ、カタラーナ (2026年の口コミ)・川床の飲み放題付きコース7,000円 (2026年7月)、8,000円のコース (2026年5月)、生のハイネケンと京都のクラフトビール',
    neighborhood: '五条近くの鴨川沿い。清水五条駅のそば',
    gf_detail: '要確認。手作りのイタリアン: カルパッチョ、ローストビーフ、肉のグリル、パスタ、ピッツァ。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉、魚、チーズのイタリアン (口コミ)。',
    notes: '[イタリアン・五条の鴨川、川沿いのテラス] 五条近くの鴨川にテラスと夏の川床を構える気軽なイタリアンとバー。カルパッチョ、ローストビーフ、ラムのグリル、ピッツァ、季節のパスタ。コースと飲み放題は7,000円ほどから。深夜0時まで、サービス料10%、川沿いの席は早めの予約を。',
  });
}

save();
