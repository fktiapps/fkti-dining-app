// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 82.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl, than.co.jp/brands and 株式会社WILL (will-food.com).
//   + ベーカリー&ダイニング 603 Bakery & Dining 603 (bagel café and dining in a small Teramachi-area guesthouse; 2025–26 reviews)
//   + Dining Bar marib (creative dining bar near Shijo-Higashinotoin; 2025–26 reviews)
//   - ドトールコーヒーショップ 京阪三条店 — chain (Doutor)
//   - 京 さくら — thin: three Tabelog reviews in all, the only recent one a list of four dishes
//   - GION GOZU 本店 — retail food shop (Greg 11-07 ruling): a pudding and baked-goods shop bought mostly to take away
//   + 祇園山岡 Gion Yamaoka (eight-seat Gion kappo; 2025–26 reviews)
//   + 祇園鮨FARO Gion Sushi FARO (omakase sushi counter run by two brothers; opened November 2025)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Pins: Tabelog /en/ point, cross-checked with GSI; 祇園山岡 is on the very large 祇園町南側570 lot (GSI 281 m) and marked approximate; each
//   9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-82');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26022573', 'ドトールコーヒーショップ 京阪三条店: chain — Doutor Coffee, the national café chain');
skip('26031933', '京 さくら: thin evidence — three Tabelog reviews in all (2019, 2022, October 2025), the recent one only a list of four dishes; not enough sourced detail for a record');
skip('26036307', 'GION GOZU 本店: retail food shop (Greg 11-07 ruling) — a pudding and financier shop where most customers buy to take away or as gifts (2025–2026 reviews); not historic (opened 2021), and no GF or vegan range sourced');

// ================================================================ ベーカリー&ダイニング 603
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035653/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:30', '20:00']);
  put({
    id: 'kyoto_bakery_dining_603', name: 'ベーカリー&ダイニング 603 (Bakery & Dining 603)', category: 'OMNI',
    lat: 34.997741477876055, lng: 135.76582218028489, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a bakery of wheat bagels, epi, scones and breads (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many bagel flavours, some plainly with bacon or cheese; a vegan guide lists plain and bean-paste bagels as vegan, but the shop has not been seen to say so — ask (spinach.guide; reviews).',
    hours_raw: '07:30–20:00 daily (Tabelog). Breakfast and brunch can be fully booked — reserve to eat in, or take bagels away (May 2025). No cards; e-money and QR payments accepted (Tabelog). Non-smoking (Tabelog). A small café and dining room attached to a hotel, behind an ivy-covered entrance, with plaster and wood inside; on Manjuji-dori at Gokomachi (Tabelog; 2025 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Manjuji-dori at Gokomachi, south of Shijo',
    cuisine: 'Bakery café with many kinds of bagel, from breakfast to dinner (2025 reviews) · potato bagel ¥300 (April 2025); house-bacon epi ¥300, whole-grain scone ¥260, hand-drip coffee ¥650 (October 2025) · brunch plate with salad and the day’s bread (October 2025) · raisin bread; fig bagel (November 2025) · bagel fillings such as matcha and red bean or walnut and miso; melon bread; mushroom risotto (spinach.guide)',
    website: null, gmaps: gm('Bakery & Dining 603 京都'), menu_url: TB,
    notes: "[Bakery café · Manjuji-Gokomachi, bagels from 7:30] An ivy-fronted bakery café beside a small hotel, baking a long list of bagels (from ¥300) alongside epi and scones, with brunch plates and hand-drip coffee. Popular with overseas visitors — book to eat in at breakfast. No cards.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'A café and dining room attached to a hotel (November 2025 review), described by a vegan guide as a small, family-run bagel café (spinach.guide). Reviewers (2025–2026) mention friendly staff and many international guests.',
      philosophy: null,
      specialty: 'Bagels.',
      anecdotes: [
        { text: 'A January 2025 passer-by was drawn in by the ivy-covered front.', source: R + 'B498750721/' },
        { text: 'An October 2025 breakfast was house-bacon epi, a whole-grain scone and hand-drip coffee.', source: R + 'B506219801/' },
      ],
      japanese_sources_summary: '食べログ: ベーカリー&ダイニング 603、パン、京都市下京区万寿寺通御幸町堅田町603、毎日 7:30〜20:00、カード不可、電子マネー・QR決済可、禁煙。口コミ (2024〜2026年、英語): ツタに覆われた入口、漆喰と木の店内、種類の多いベーグル、じゃがいものベーグル300円、自家製ベーコンのエピ300円、全粒粉のプレーンスコーン260円、ハンドドリップコーヒー650円、ブランチのプレート、レーズンパン、いちじくのベーグル、朝は予約で満席のことも、海外の客が多い、ホテルに併設のカフェ&ダイニング。spinach.guide: 家族経営の小さなベーグルのカフェ、抹茶と小豆、くるみと味噌など、メロンパン、きのこのリゾット、プレーンとあんのベーグルはヴィーガン。',
      confidence: 'low', sources: [TB, R + 'B498750721/', R + 'B504374304/', R + 'B506219801/', R + 'B507269997/', R + 'B514829374/', R + 'B516730552/', 'https://spinach.guide/venues/dining-603-75821/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests; no cards — e-money or QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区万寿寺通御幸町堅田町603',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through 2026.' },
    pin_source: `Tabelog ${TB} (34.997741, 135.765822); cross-checked: GSI 京都府京都市下京区堅田町603番地 (lot) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504374304/', R + 'B506219801/'],
    price_note: 'Prices from April and October 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Potato bagel', '¥300', 'Bagels', 'no', 'ask', 'April 2025.', 'potato_bagel'),
      it('', '', 'House-bacon epi', '¥300', 'Bread', 'no', 'no', 'October 2025.', 'bacon_epi'),
      it('', '', 'Whole-grain plain scone', '¥260', 'Bread', 'no', 'ask', 'October 2025.', 'scone'),
      it('', '', 'Hand-drip coffee', '¥650', 'Drinks', 'gf', 'vegan', 'October 2025.', 'coffee'),
    ] }, {
    cuisine: '朝から夜まで、種類の多いベーグルのベーカリーカフェ (2025年の口コミ)・じゃがいものベーグル300円 (2025年4月)、自家製ベーコンのエピ300円、全粒粉のスコーン260円、ハンドドリップコーヒー650円 (2025年10月)・サラダとその日のパンのブランチプレート (2025年10月)・レーズンパン、いちじくのベーグル (2025年11月)・抹茶と小豆、くるみと味噌などのベーグル、メロンパン、きのこのリゾット (spinach.guide)',
    neighborhood: '万寿寺通御幸町、四条の南',
    gf_detail: 'グルテンフリー不可。小麦のベーグル、エピ、スコーン、パンのベーカリー (口コミ)。',
    vegan_detail: '要確認。ベーグルの種類は多く、ベーコンやチーズ入りも。ヴィーガンのガイドではプレーンとあんのベーグルがヴィーガンとされるが、店の表示は未確認なので確認を (spinach.guide、口コミ)。',
    notes: '[ベーカリーカフェ・万寿寺御幸町、7時半からベーグル] 小さなホテルに併設の、ツタに覆われたベーカリーカフェ。300円からのたくさんのベーグルにエピやスコーン、ブランチのプレートとハンドドリップコーヒー。海外の客も多く、朝のイートインは予約を。カード不可。',
  });
}

// ================================================================ Dining Bar marib
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003133/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '01:00']);
  put({
    id: 'kyoto_dining_bar_marib', name: 'Dining Bar marib', category: 'OMNI',
    lat: 35.0026485078715, lng: 135.76128023033763, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Creative izakaya dishes, smoked snacks and set lunches with soy and miso; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Kyoto-vegetable dishes are on the menu, but most are with meat, fish or dashi (reviews).',
    hours_raw: '18:00–01:00 (last food order 23:30, drinks 00:30) Monday–Saturday (Tabelog); Sunday is not stated. A weekday lunch was served in December 2024; lunch is not in Tabelog’s hours. Cards (VISA, Master, JCB, AMEX, Diners); no e-money; no service or table charge (Tabelog). 33 seats: an 8-seat counter, three round sunken-kotatsu tables and two tables for six; smoking allowed (Tabelog). A basement on a side street off Higashinotoin south of Shijo, 3 minutes from Shijo station Exit 3 (Tabelog; September and December 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashinotoin, south of Shijo-Karasuma',
    cuisine: 'Creative izakaya and bar dishes, with Kyoto vegetables and smoked snacks such as smoked Happy Turn (September 2024) · weekday lunch of the day ¥900 — yodare chicken, sweet-and-sour flounder or keema curry, with salad, hijiki, rice and miso soup (December 2024) · a long drinks list; mango chuhai packed with frozen mango (April 2025)',
    website: null, gmaps: gm('Dining Bar marib 京都 四条'), menu_url: TB,
    notes: "[Dining bar · Shijo-Karasuma, a basement hideaway] A busy basement dining bar a few minutes from Shijo station: playful creative small plates — smoked snacks, Kyoto vegetables — a long drinks list, and late hours to 1 am. Counter, kotatsu tables; no table charge; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Not named'], origin: null,
      background: 'A dining bar reviewed since 2014 (Tabelog). Reviewers (2024–2026) describe a hidden basement spot that fills quickly, with a menu that has barely changed over the years.',
      philosophy: null,
      specialty: 'Creative bar plates; smoked snacks.',
      anecdotes: [
        { text: 'A June 2024 returning guest found the menu nostalgically unchanged after several years.', source: R + 'B116726690/' },
        { text: 'A December 2024 weekday lunch of yodare chicken arrived in two or three minutes.', source: R + 'B497595040/' },
        { text: 'An April 2025 passer-by was satisfied by the mango chuhai alone.', source: R + 'B503131952/' },
      ],
      japanese_sources_summary: '食べログ: Dining Bar marib、ダイニングバー・バー・居酒屋、京都市下京区東洞院四条下ル元悪王子町52、月〜土 18:00〜翌1:00 (料理L.O.23:30、ドリンクL.O.0:30)、カード可、電子マネー不可、サービス料・チャージなし、33席 (カウンター8、掘りごたつの丸テーブル3、6人テーブル2)、喫煙可。口コミ (2014〜2026年、英語): 地下の隠れ家、すぐ満席、創作料理、京野菜や燻製、燻製のハッピーターン、平日ランチ900円 (よだれ鶏、カレイの甘酢、キーマカレーにサラダ、ひじき、ご飯、味噌汁)、凍ったマンゴーのチューハイ、四条駅3番出口から3分、二次会にも。',
      confidence: 'low', sources: [TB, R + 'B116726690/', R + 'B483831979/', R + 'B491691898/', R + 'B497595040/', R + 'B503131952/', R + 'B531163668/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed; fills up fast.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院四条下ル元悪王子町52',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.002649, 135.761280); cross-checked: GSI 京都府京都市下京区元悪王子町52番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B497595040/'],
    price_note: 'Lunch price from a December 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch of the day (with salad, hijiki, rice, miso soup)', '¥900', 'Lunch', 'ask', 'no', 'December 2024.', 'lunch'),
      it('', '', 'Smoked snacks', '', 'Small plates', 'ask', 'ask', '', 'smoked'),
    ] }, {
    cuisine: '京野菜や燻製も使う創作の居酒屋とバーの料理、燻製のハッピーターンなど (2024年9月)・平日の日替わりランチ900円、よだれ鶏、カレイの甘酢、キーマカレーにサラダ、ひじき、ご飯、味噌汁 (2024年12月)・飲み物が豊富、凍ったマンゴーたっぷりのチューハイ (2025年4月)',
    neighborhood: '東洞院、四条烏丸の南',
    gf_detail: '要確認。創作の居酒屋料理、燻製、醤油や味噌を使うランチの定食。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。京野菜の料理もあるが、ほとんどは肉、魚、出汁を使う (口コミ)。',
    notes: '[ダイニングバー・四条烏丸、地下の隠れ家] 四条駅から数分のにぎやかな地下のダイニングバー。燻製や京野菜の遊び心ある創作の小皿、豊富な飲み物、深夜1時まで。カウンターと掘りごたつ、チャージなし、喫煙可。',
  });
}

// ================================================================ 祇園山岡
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042649/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '24:00']);
  put({
    id: 'kyoto_gion_yamaoka', name: '祇園山岡 (Gion Yamaoka)', category: 'OMNI',
    lat: 35.00218900787666, lng: 135.77657396032222, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal kappo with dashi and soy, sashimi and shabu-shabu; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of crab, fish and meat (reviews).',
    hours_raw: '19:00–24:00; closing days vary (Tabelog). Cards and e-money accepted (Tabelog). An 8-seat counter; non-smoking, with a smoking area (Tabelog). On Gion-machi Minamigawa south of Shijo (Tabelog). About ¥20,000–40,000 a head (Tabelog; 2025–2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, south of Shijo',
    cuisine: 'Seasonal Japanese cooking at an eight-seat counter, seasoned by subtraction to let ingredients speak (February 2026) · a small hot pot with hana-sansho; well-cooked meat (May 2025) · squid with canola flowers and sansho; sea bream and akagai sashimi; matsuba crab sashimi; nodoguro shabu-shabu (March 2026) · about ¥20,000–40,000 a head (2025–2026)',
    website: null, gmaps: gm('祇園山岡'), menu_url: TB,
    notes: "[Kappo · Gion south of Shijo, eight-seat counter] An intimate eight-seat counter where a smiling, bow-tied chef lets top ingredients speak with minimal seasoning — matsuba crab sashimi, nodoguro shabu-shabu, a hot pot with hana-sansho. About ¥20,000–40,000; from 7 pm.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'Reviewers (2025–2026) describe a bow-tied chef with a ready smile, humble and charming, cooking live at the counter in a stylish, calm room.',
      philosophy: null,
      specialty: 'Seasonal kappo.',
      anecdotes: [
        { text: 'A May 2025 guest singled out the small hot pot with hana-sansho.', source: R + 'B506381562/' },
        { text: 'A February 2026 cook of ten years praised its “seasoning by subtraction”.', source: R + 'B522542534/' },
        { text: 'A March 2026 diner had the last matsuba crab of the season as sashimi.', source: R + 'B524854944/' },
      ],
      japanese_sources_summary: '食べログ: 祇園山岡、日本料理、京都市東山区祇園町南側570-246、19:00〜0:00、定休日不定、カード・電子マネー可、カウンター8席、禁煙 (喫煙所あり)、予算30,000〜40,000円ほど。口コミ (2025〜2026年、英語): 蝶ネクタイの笑顔の大将、花山椒の小鍋、肉の火入れ、引き算の味付け、菜の花と山椒のいか、鯛と赤貝のお造り、松葉蟹の刺身、のどぐろのしゃぶしゃぶ、落ち着いたおしゃれな店内、1人20,000〜40,000円ほど。',
      confidence: 'low', sources: [TB, R + 'B506381562/', R + 'B522542534/', R + 'B524854944/'] },
    cultural_comfort: { level: 'japanese', note: 'Eight-seat counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-246',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.002189, 135.776574); GSI 京都府京都市東山区祇園町南側570番地 (lot) 281m — a very large lot, so marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published prices; reviews report about ¥20,000–40,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course', '', 'Courses', 'ask', 'no', '', 'omakase'),
    ] }, {
    cuisine: '8席のカウンターの季節の和食、素材を生かす引き算の味付け (2026年2月)・花山椒の小鍋、肉の火入れ (2025年5月)・菜の花と山椒のいか、鯛と赤貝のお造り、松葉蟹の刺身、のどぐろのしゃぶしゃぶ (2026年3月)・1人20,000〜40,000円ほど (2025〜2026年)',
    neighborhood: '祇園、四条の南',
    gf_detail: '要確認。出汁と醤油の季節の割烹、刺身、しゃぶしゃぶ。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。蟹、魚、肉のコース (口コミ)。',
    notes: '[割烹・祇園の四条南、8席のカウンター] 蝶ネクタイの笑顔の大将が、上質な素材を引き算の味付けで生かす8席のカウンター。松葉蟹の刺身、のどぐろのしゃぶしゃぶ、花山椒の小鍋。1人20,000〜40,000円ほど、19時から。',
  });
}

// ================================================================ 祇園鮨FARO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044089/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_gion_sushi_faro', name: '祇園鮨FARO (Gion Sushi FARO)', category: 'OMNI',
    lat: 35.005155297874786, lng: 135.7765922803522, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An April 2026 reviewer says the brothers accommodate gluten-free requests; mention it when booking, as soy sauce and seasonings are not otherwise described (review B525889708).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi omakase (reviews).',
    hours_raw: '16:00–23:00 (last food order 21:00, drinks 22:00) Monday–Saturday, holidays, holiday eves and the day after a holiday (Tabelog); Sunday is not stated. Course only (April 2026). Cards (incl. UnionPay); no e-money (Tabelog). A 10-seat counter; non-smoking (Tabelog). Prime Building 2F, Gion-machi Kitagawa, a short walk from Gion-Shijo (Tabelog; May 2026). Opened 1 November 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo',
    cuisine: 'Omakase sushi from two brothers trained in Tokyo, fish chosen at market each morning (May 2026) · special omakase with uni and caviar ¥15,000: appetizers, sashimi, seasonal dishes such as an uni “cocktail”, 8–10 nigiri and soup; crab can replace uni (May 2026) · sake pairing ¥4,500 by a sake sommelier; Kyoto sake and wine (April and May 2026)',
    website: null, gmaps: gm('祇園鮨FARO'), menu_url: TB,
    notes: "[Sushi · Gion north of Shijo, brothers’ omakase] A sleek ten-seat counter opened in November 2025 by two Tokyo-trained brothers who speak English and Spanish: a ¥15,000 omakase with uni and caviar, 8–10 nigiri, and a ¥4,500 sake pairing from a sake sommelier. Gluten-free requests accommodated, per a review — ask when booking.",
    chef_bio: { chef_name: null, roles: ['Two brothers, sushi chefs (not named)'], origin: null,
      background: 'Opened in November 2025 (Tabelog) by two brothers who trained at a well-known Tokyo sushi restaurant and speak English and Spanish; one is a sake sommelier (April and May 2026 reviews).',
      philosophy: null,
      specialty: 'Sushi omakase with sake pairing.',
      anecdotes: [
        { text: 'An April 2026 solo diner took the ¥15,000 course with the ¥4,500 sake pairing and noted the gluten-free accommodation.', source: R + 'B525889708/' },
        { text: 'A May 2026 guest began with an uni “cocktail” of top-grade sea urchin.', source: R + 'B528746675/' },
      ],
      japanese_sources_summary: '食べログ: 祇園鮨FARO、寿司・天ぷら・すき焼き、京都市東山区祇園町北側347-153 プライムビル2F、月〜土・祝日・祝前日・祝日の翌日 16:00〜23:00 (料理L.O.21:00、ドリンクL.O.22:00)、カード (銀聯も)、電子マネー不可、カウンター10席、禁煙、2025年11月1日オープン。口コミ (2026年、英語): 東京の名店で修業した兄弟、英語とスペイン語が堪能、コースのみ、雲丹とキャビアの特選おまかせ15,000円 (前菜、刺身、雲丹のカクテルなど季節の一品、握り8〜10貫、お椀、雲丹は蟹に替えられる)、日本酒ペアリング4,500円、利き酒師、京都の日本酒とワイン、グルテンフリーにも対応。',
      confidence: 'low', sources: [TB, R + 'B525889708/', R + 'B528746675/'] },
    cultural_comfort: { level: 'english', note: 'The chefs speak English and Spanish (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-153 プライムビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 1 November 2025); reviews dated April and May 2026.' },
    pin_source: `Tabelog ${TB} (35.005155, 135.776592); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 93m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525889708/', R + 'B528746675/'],
    price_note: 'Prices from April and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special omakase with uni and caviar', '¥15,000', 'Courses', 'ask', 'no', 'Crab can replace uni.', 'omakase'),
      it('', '', 'Sake pairing', '¥4,500', 'Drinks', 'ask', 'vegan', '', 'pairing'),
    ] }, {
    cuisine: '東京で修業した兄弟のおまかせ寿司。魚は毎朝市場で選ぶ (2026年5月)・雲丹とキャビアの特選おまかせ15,000円、前菜、刺身、雲丹のカクテルなど季節の一品、握り8〜10貫、お椀。雲丹は蟹に替えられる (2026年5月)・利き酒師の日本酒ペアリング4,500円、京都の日本酒とワイン (2026年4月、5月)',
    neighborhood: '祇園、四条の北',
    gf_detail: '要確認。2026年4月の口コミではグルテンフリーにも対応とのこと。醤油や調味料の説明はないので、予約時に伝えて確認を (口コミ B525889708)。',
    vegan_detail: 'ヴィーガン不可。寿司のおまかせ (口コミ)。',
    notes: '[寿司・祇園の四条北、兄弟のおまかせ] 2025年11月開業、東京で修業した英語とスペイン語の話せる兄弟の10席のカウンター。雲丹とキャビアの15,000円のおまかせ、握り8〜10貫、利き酒師の4,500円の日本酒ペアリング。口コミではグルテンフリーにも対応、予約時に確認を。',
  });
}

save();
