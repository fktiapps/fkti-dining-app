// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 109
// (drafted 2026-11-26 against main 4fc68285; core and notable lists empty in the lane, so rest list nearest-first per the brief).
//   + 喫茶泉輪 (one-person Showa kissa with big set lunches in Shogoin; rest) — kanji only: Tabelog's "Kissa Senrin" is machine romaji
//   + よっちゃん家 (Tango-ingredient izakaya with a ¥500 udon lunch, opposite the prefectural office; rest) — kanji/kana only
//   + Natural café 京都駅前店 (donut and coffee café by Kyoto Stn; rest) — Latin name from the shop's own site
//   + 酒場のはったり (straw-grilled bonito izakaya in a machiya north of Shichijo; rest) — kanji/kana only
//   Rest list (mod 6 = 1), nearest-first — skipped:
//   - 炭炉まん 京都ヨドバシ店 26045575: large parent ファンインターナショナル (Osaka; 9 restaurant brands on fun-no1.com, 米福 in
//     Tokyo and Osaka); this is the brand's third shop (PR Times release, July 2026).
//   - ニューワクラ 京都ヨドバシ店 26044819: large parent 株式会社治元 (invoice T4130001032505), "日本全国に66店舗展開" with brands
//     わらい and 和くら (en-japan company page). NB kyoto_nonono_shijo_kawaramachi in data has the same invoice holder.
//   - マリオンクレープ 京都ヨドバシ店 26045551: chain, "全国約110店舗" (marion.co.jp).
//   - 京すいしん 26000485: same operator as 先斗町すいしん 本店 (kyoto_pontocho_suishin_honten; invoice T8130001022725 = 株式会社黛),
//     which runs about 18 shops (kyoto_kappa_zushi_pontocho background, suishin.co.jp).
//   - Beau,bel,belle! 26006863: retail food shop (Greg 11-07 ruling): take-home cakes, no eating in (March 2026 review); opened 2010.
//   - カラオケ ビックエコー 京都駅前烏丸口店 26041627 and お好み焼き もんじゃ ちゃばな 京都駅店 26045125: no Tabelog reviews.
//   - シアトルズベストコーヒー SBC京都ヨドバシ店 26017549: chain (same ruling as 26015893).
//   - マクドナルド 京都駅前店 26020459: chain (same ruling as 26017123, 26035326).
//   Left in the queue, not drafted: 京甚兵衛 26031679 (held for Greg); 京のお出汁めし かつを 26039281 fetched (a food-court stall in
//   京都タワーサンド B1F, sister of 海鮮酒場 あんじ, kyoto_anji_karasuma_rokkaku in data; Anji group size not found — integrator to decide).
//   None of the four drafted is in data (main 4fc68285, hidden records included; grep of Tabelog id, name and address) or in
//   another worker's pending add-kyoto-missed-* script.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-109');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26045575/', 'large parent: 株式会社ファンインターナショナル (Osaka; 9 restaurant brands listed on fun-no1.com, incl. 米福 in Tokyo and Osaka); 炭炉まん 京都ヨドバシ店 is the brand’s third shop (PR Times, July 2026)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26044819/', 'large parent: 株式会社治元 (Tabelog invoice T4130001032505), "日本全国に66店舗展開" with brands わらい and 和くら (employment.en-japan.com/comp-80769/)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26045551/', 'chain: Marion Crepes, "全国約110店舗" (marion.co.jp)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26000485/', 'same operator as 先斗町すいしん 本店 (kyoto_pontocho_suishin_honten; invoice T8130001022725 = 株式会社黛), which runs about 18 shops (kyoto_kappa_zushi_pontocho, suishin.co.jp)');
skip('https://tabelog.com/en/kyoto/A2601/A260203/26006863/', 'retail food shop (Greg 11-07 ruling): take-home cakes, "couldn’t eat inside" (March 2026 review); opened 2010 (Tabelog); no GF or vegan options sourced');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26041627/', 'karaoke box with no Tabelog reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26045125/', 'no Tabelog reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26017549/', 'chain: Seattle’s Best Coffee (same ruling as 26015893)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26020459/', 'chain: McDonald’s (same ruling as 26017123, 26035326)');

// ================================================================ 喫茶泉輪 (Shogoin)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26012455/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '20:00']);
  put({
    id: 'kyoto_kissa_senrin_shogoin', name: '喫茶泉輪', category: 'OMNI',
    lat: 35.01856748949478, lng: 135.7796187805596, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the lunches centre on fried foods — shrimp fry, fried oysters, kara-age — with hamburg steak, curry, yakisoba and pasta (2014–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set meals of grilled meat, hamburg steak and fried seafood with miso soup (2014–2025 reviews); no plant-based dish is described.',
    hours_raw: 'Monday–Saturday 10:00–20:00; closed Sunday (Tabelog). No credit cards or e-money (Tabelog; QR payment not stated). 37 seats: 7 at the counter, seven tables for four and one for two, with bench seats along the wall (Tabelog). Smoking allowed throughout (Tabelog; 2020–2025 reviews). Parking for one car, paid parking nearby; take-out (Tabelog). A sign at the entrance said "one-person operation", and the B set comes out faster than à la carte dishes (February 2023). About 670 m from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shogoin, north of Marutamachi-dori',
    cuisine: 'Old-style kissa with a long lunch menu of set meals, yakisoba, pasta and curry (June 2019; October 2018) · steak lunch ¥950 (September 2014) · mixed set of grilled meat, hamburg steak and shrimp tempura with a hard-fried egg (October 2018) · shrimp fry set ¥850 with tofu and miso soup (May 2018) · curry, made spicier on request, with extra sauce and miso soup (June 2019) · fried-oyster set from September, with shredded cabbage, potato salad, macaroni, chilled tofu, pickles, miso soup and rice (September 2020) · B set of grilled meat and shrimp fry with vegetables, potato salad and macaroni, about ¥850 (February 2023) · B lunch with small rice −¥50 and a kara-age set (October 2025) · coffee with a pleasant acidity (November 2023) · under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('喫茶泉輪 京都 聖護院西町'), menu_url: null,
    notes: '[Kissa · Shogoin, big set lunches in a Showa-era coffee shop] A long-running Showa-style coffee shop run by one person, with a long lunch board: grilled meat and shrimp fry sets for about ¥850, fried oysters in season, curry and yakisoba, all in large portions. Smoking allowed throughout; no cards. Monday–Saturday 10:00–20:00.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a long-standing coffee shop in Shogoin, Sakyo — a February 2023 diner guessed twenty or thirty years or more — with a counter and box seats in an old-school kissa room (September 2014) that a June 2019 diner likened to a student café, spacious and busy around 1 pm. A sign at the entrance read "one-person operation" in February 2023; that diner described the owner as a younger man, perhaps in the thirties, quick and responsive, but found the area around the stove grimy. A November 2023 visitor found the master laid-back and quite unique, noting that some online reviewers had found the master difficult. Reviewers praise the cheap, generous portions (2014–2025) and fault the smoke (2020; December 2021; 2023; October 2025); a May 2018 diner blamed poor frying oil for an upset stomach and found the rice sticky, a September 2014 diner found the steak dry and the rice partly mushy, and a December 2021 diner thought the food mediocre.',
      philosophy: null, specialty: 'Set lunches of grilled meat and fried seafood.',
      anecdotes: [
        { text: 'An October 2018 diner, stuck for choice, took the mixed set and found a thin but very meaty hamburg steak hiding under the fried egg — then watched someone else’s yakisoba go by and vowed to order it next time.', source: R + 'B326272549/' },
        { text: 'In September 2020, after a meeting ran until nearly 3 pm, a diner came in for the first fried oysters of the season and sat as far from the smokers as possible.', source: R + 'B416604673/' },
        { text: 'An October 2025 visitor swapped shrimp fry for a companion’s kara-age and declared the kara-age the best dish.', source: R + 'B514756069/' },
      ],
      japanese_sources_summary: '食べログ: 洋食・喫茶店、左京区聖護院西町3-2、神宮丸太町駅から674m、月〜土 10:00〜20:00、日曜定休、カード・電子マネー不可、37席 (カウンター7席、4人掛けテーブル7卓、2人掛けテーブル1卓、壁側はベンチ席)、喫煙可、駐車場1台、近くにコインパーキング、テイクアウト可、予算〜999円。口コミ (2014年9月〜2026年10月、英語): ステーキランチ950円 (2014年9月)、エビフライ定食850円、豆腐と味噌汁 (2018年5月)、焼肉、ハンバーグ、エビの天ぷらのミックス定食、焼きそば (2018年10月)、カレー、辛めにできる、ランチは定食、焼きそば、パスタ、カレー (2019年6月)、9月からのカキフライ定食 (2020年9月)、全席喫煙可 (2021年12月)、入口に一人で営業しているという貼り紙、B定食は焼肉とエビフライで850円ほど (2023年2月)、マスターは個性的 (2023年11月)、Bランチのご飯少なめで50円引き、唐揚げ定食 (2025年10月)。',
      confidence: 'medium', sources: [TB, R + 'B112505404/', R + 'B326272549/', R + 'B351321446/', R + 'B416604673/', R + 'B443684840/', R + 'B460296674/', R + 'B474255766/', R + 'B514756069/', R + 'B538027591/'] },
    cultural_comfort: { level: 'japanese', note: 'Local kissa with a Japanese lunch board; no cards; smoking allowed throughout.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区聖護院西町3-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews October 2025 and October 2026.' },
    pin_source: `Tabelog ${TB} (35.018567, 135.779619); not pin-checked by the worker (integrator to check); kyr_menya_yamahide_kyoto_sho (聖護院西町3番地, same block) is 5.5 m east, so no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B112505404/', R + 'B351321446/', R + 'B460296674/', R + 'B514756069/'],
    price_note: 'Prices from reviews, 2014–2025; under ¥1,000 per person (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'B set: grilled meat and shrimp fry', '¥850', 'Lunch', 'no', 'no', 'February 2023, “I believe”; small rice −¥50 in October 2025.', 'b_set'),
      it('', '', 'Shrimp fry set', '¥850', 'Lunch', 'no', 'no', 'May 2018.', 'ebi_fry_set'),
      it('ステーキランチ', '', 'Steak lunch', '¥950', 'Lunch', 'no', 'no', 'September 2014.', 'steak_lunch'),
      it('', '', 'Kara-age set', '', 'Lunch', 'no', 'no', 'October 2025.', 'karaage_set'),
    ] }, {
    cuisine: '定食、焼きそば、パスタ、カレーとランチのメニューが多い昔ながらの喫茶店 (2019年6月、2018年10月)・ステーキランチ950円 (2014年9月)・焼肉、ハンバーグ、エビの天ぷらに固焼きの目玉焼きのミックス定食 (2018年10月)・豆腐と味噌汁付きのエビフライ定食850円 (2018年5月)・辛めにできるカレー、ルーのおかわりと味噌汁付き (2019年6月)・9月からのカキフライ定食、キャベツ、ポテトサラダ、マカロニ、冷奴、漬物、味噌汁、ご飯付き (2020年9月)・焼肉とエビフライのB定食、野菜、ポテトサラダ、マカロニ付きで850円ほど (2023年2月)・Bランチのご飯少なめで50円引き、唐揚げ定食 (2025年10月)・酸味のあるおいしいコーヒー (2023年11月)・1,000円未満 (食べログ)',
    neighborhood: '聖護院、丸太町通の北',
    gf_detail: 'グルテンフリー不可。エビフライ、カキフライ、唐揚げなどの揚げ物、ハンバーグ、カレー、焼きそば、パスタが中心 (2014〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼肉、ハンバーグ、魚介のフライの定食に味噌汁が付く (2014〜2025年の口コミ)。植物性の料理の説明はない。',
    notes: '[喫茶店・聖護院、昭和の喫茶店でボリュームのある定食] 一人で営む昔ながらの昭和の喫茶店。焼肉とエビフライの定食が850円ほど、季節のカキフライ、カレー、焼きそばと、どれも量が多い。全席喫煙可、カード不可。月〜土 10:00〜20:00。',
  });
}

// ================================================================ よっちゃん家 (Marutamachi, opposite the prefectural office)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025943/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_yocchan_marutamachi_kamanza', name: 'よっちゃん家', category: 'OMNI',
    lat: 35.01730137786046, lng: 135.75585728048944, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The only lunch is a wheat-udon set with tempura (2023–2025 reviews), so lunch is not gluten-free; at dinner there is sashimi alongside tempura and fried shrimp (2025–2026 reviews), with no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the lunch udon comes in a katsuo dashi broth (December 2023), and dinner centres on fish and seafood from Tango (2019–2026 reviews).',
    hours_raw: 'Lunch from 11:00 (end time not given) and dinner 17:00–24:00; closed Sunday (Tabelog). Which days lunch is served is not stated; structured hours show dinner only. Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) accepted; no e-money (Tabelog). 20 seats: 8 at an L-shaped counter around the kitchen and 12 at tables (Tabelog; June 2024); tables may be shared at lunch (June 2024). Smoking allowed; no parking; private hire possible (Tabelog). On Marutamachi-dori at the prefectural office corner, 5 min walk from Marutamachi Stn (Tabelog; September 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Marutamachi-Kamanza, opposite the Kyoto Prefectural Office',
    cuisine: 'Izakaya of food and sake from the Tango region (2019–2026 reviews) · lunch: one ¥500 udon set, hot or cold, with vegetable tempura, a rice ball and a small simmered dish (December 2023 – October 2025); toppings of kamaboko, spring onion and nori (March 2024); chicken and eggplant tempura, simmered daikon and a rice ball with shredded kombu (June 2024); sweet potato and okra tempura (August 2025); simmered fish (June 2025) · dinner: sake mainly from the Kyotango area, Tango onions, shiitake, turban shell and spring bamboo shoots (April 2019); horse-mackerel sashimi, fried sweet shrimp, new garlic from Kyotango and four Kyoto junmai sakes (July 2025); sashimi platter of kanpachi, squid, seared mackerel, whelk, horse mackerel and bonito, squid tentacles in butter, grilled chicken thigh, corn and mochi tempura (August 2026) · about ¥5,000–6,000 at dinner (August 2026); about ¥3,000–4,000 at dinner, under ¥1,000 at lunch (Tabelog)',
    website: null, gmaps: gm('よっちゃん家 京都 丸太町 梅屋町'), menu_url: null,
    notes: '[Izakaya · Marutamachi, opposite the prefectural office, Tango fish and a ¥500 lunch] A twenty-seat izakaya run by an owner from the Tango Peninsula: fresh Tango fish and vegetables with Kyotango sake at night, and at lunch a single ¥500 udon set with tempura and a rice ball that fills the room. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: 'Tango Peninsula, Kyoto Prefecture (September 2024; August 2026 reviews)',
      background: 'Per Tabelog and reviewers: an izakaya on Marutamachi-dori at the prefectural office corner, across from the Second Red Cross Hospital (August 2026), serving fish, vegetables and sake from Tango. The owner, from Tango, runs the place alone, checking with lunch guests about sharing tables (June 2024), and has a down-to-earth manner (September 2024); an August 2026 diner said the owner had caught the squid on the platter. The ¥500 lunch draws office workers and hospital visitors (March 2024) and was nearly full with quick turnover in October 2025; reviewers liked the broth but a December 2023 diner found the udon noodles like cheap supermarket ones, and a September 2024 diner likened the set to a staff meal.',
      philosophy: null, specialty: 'Tango fish and sake; the ¥500 udon lunch.',
      anecdotes: [
        { text: 'A December 2023 diner on the way to a nearby hospital tried the ¥500 udon, praised the rich katsuo broth, and resolved to come back for the izakaya at night.', source: R + 'B480755679/' },
        { text: 'In June 2024 a diner ordered the udon cold, bukkake style, and decided the hot version, which most others chose, would have been easier to eat.', source: R + 'B488909212/' },
        { text: 'On a first dinner in August 2026, a diner found the owner-caught squid sweet and was most impressed by the fish.', source: R + 'B533731776/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区丸太町通釜座東入ル梅屋町175 井川ビル 1F、丸太町駅から徒歩5分、11:00〜、17:00〜24:00、日曜定休、予約可、カード可 (VISA・Master・JCB・AMEX・Diners)、電子マネー不可、20席 (カウンター8席、テーブル12席)、喫煙可、駐車場なし、貸切可、日本酒にこだわる、夜3,000〜4,000円、昼〜999円。口コミ (2019年4月〜2026年8月、英語): Kyotango の日本酒、Kyotango から届く玉ねぎ、しいたけ、さざえ、4月のたけのこ (2019年)、昼は500円のうどん定食だけ、温かいか冷たいか選べる、野菜の天ぷら、おにぎり、小鉢 (2023〜2025年)、かつおだしのつゆ (2023年12月)、かまぼこ、ねぎ、のり (2024年3月)、L字のカウンター、店主が一人で切り盛り、相席、鶏となすの天ぷら、大根の煮物、とろろ昆布のおにぎり、ぶっかけ (2024年6月)、店主はTango の出身 (2024年9月、2026年8月)、あじの刺身、甘えびの揚げ物、Kyotango の新にんにく (2025年7月)、さつまいもとオクラの天ぷら (2025年8月)、刺身の盛り合わせ、店主が自分で釣ったいか、いかげそのバター、鶏ももの焼き物、とうもろこしと餅の天ぷら、5,000〜6,000円 (2026年8月)。',
      confidence: 'medium', sources: [TB, R + 'B414312463/', R + 'B480177731/', R + 'B480755679/', R + 'B482235975/', R + 'B488909212/', R + 'B501827472/', R + 'B508280253/', R + 'B509401442/', R + 'B512504010/', R + 'B533731776/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One lunch dish, so ordering is simple (hot or cold udon); dinner is a Japanese izakaya; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区丸太町通釜座東入ル梅屋町175 井川ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews October 2025 and August 2026.' },
    pin_source: `Tabelog ${TB} (35.017301, 135.755857); not pin-checked by the worker (integrator to check); nearest record kyr_kyoto_chuka_hamamura_fuc 20.5 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B480177731/', R + 'B488909212/', R + 'B508280253/'],
    price_note: 'Lunch price from reviews, 2023–2025; dinner is about ¥3,000–4,000 (Tabelog) or ¥5,000–6,000 (August 2026 review).', last_checked: TODAY, items: [
      it('', '', 'Udon set (hot or cold udon, vegetable tempura, rice ball, small dish)', '¥500', 'Lunch', 'no', 'no', 'The only lunch dish, December 2023 – October 2025.', 'udon_set'),
      it('', '', 'Sashimi platter', '', 'Dinner', 'ask', 'no', 'August 2026.', 'sashimi_platter'),
      it('', '', 'Corn and mochi tempura', '', 'Dinner', 'no', 'ask', 'August 2026.', 'corn_mochi_tempura'),
    ] }, {
    cuisine: 'Tango の食材と日本酒の居酒屋 (2019〜2026年の口コミ)・昼: 500円のうどん定食だけ、温かいか冷たいか選べ、野菜の天ぷら、おにぎり、小鉢の煮物付き (2023年12月〜2025年10月)、かまぼこ、ねぎ、のりがのる (2024年3月)、鶏となすの天ぷら、大根の煮物、とろろ昆布のおにぎり (2024年6月)、さつまいもとオクラの天ぷら (2025年8月)、魚の煮付け (2025年6月)・夜: Kyotango の日本酒が中心、Tango の玉ねぎ、しいたけ、さざえ、春のたけのこ (2019年4月)、あじの刺身、甘えびの揚げ物、Kyotango の新にんにく、京都の純米酒4種 (2025年7月)、かんぱち、いか、炙りさば、ばい貝、あじ、かつおの刺身の盛り合わせ、いかげそのバター、鶏ももの焼き物、とうもろこしと餅の天ぷら (2026年8月)・夜は5,000〜6,000円ほど (2026年8月)、食べログでは夜3,000〜4,000円、昼1,000円未満',
    neighborhood: '丸太町釜座、京都府庁の前',
    gf_detail: '要確認。昼は小麦のうどんと天ぷらの定食だけなので、昼はグルテンフリー不可 (2023〜2025年の口コミ)。夜は刺身のほかに天ぷらや甘えびの揚げ物がある (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。昼のうどんはかつおだしのつゆ (2023年12月)、夜はTango の魚介が中心 (2019〜2026年の口コミ)。',
    notes: '[居酒屋・丸太町、府庁の前、Tango の魚と500円の昼ごはん] Tango 出身の店主が営む20席の居酒屋。夜はTango の新鮮な魚と野菜にKyotango の日本酒、昼は天ぷらとおにぎり付きの500円のうどん定食だけで、店はいっぱいになる。喫煙可。日曜定休。',
  });
}

// ================================================================ Natural café 京都駅前店 (Kyoto Stn, Karasuma side)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26042809/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://naturalcafe-kyoto.com/';
  const H = day(['08:00', '20:00']);
  put({
    id: 'kyoto_natural_cafe_kyoto_ekimae', name: 'Natural café 京都駅前店', category: 'OMNI',
    lat: 34.98733401828143, lng: 135.76051036220295, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature is a cream-filled donut made from wheat dough fermented for a day, with panini alongside (official site); the taco rice and gapao rice plates are rice dishes, but no gluten or allergen information is given (official site, 2026-11-26).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Soy milk and oat milk can be swapped into drinks for +¥50 (official site), but the donuts are filled with Hokkaido fresh cream or custard (Tabelog; 2026 reviews) and the rice plates have meat and egg (November 2026); no vegan food is described.',
    hours_raw: 'Daily 8:00–20:00; donuts from 11:00 until sold out; no regular closing day (official site; Tabelog). No reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR accepted (Tabelog). 78 seats (Tabelog; the official site says 80 in one place and 70 in another), including counter seats with power outlets, sofas and free Wi-Fi; children, babies and strollers welcome; wheelchair accessible; non-smoking (official site; Tabelog). Choose a seat, then order at the counter (October 2026; January 2026). English menu; take-out (Tabelog). Opened 21 March 2025 (Tabelog). 3 min walk from the Karasuma Central Exit of JR Kyoto Stn, near Kyoto Tower (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'In front of Kyoto Stn, Karasuma Central Exit',
    cuisine: 'Café known for fluffy cream-filled “nama” donuts from dough fermented for a full day, with specialty coffee and Uji matcha latte (official site; Tabelog) · donuts: plain ¥300, whipped cream ¥350, custard ¥400, chocolate ¥400, matcha ¥500, cinnamon sugar ¥330, kinako ¥330 (official site, undated); about twenty kinds, with seasonal ones such as daigaku-imo ¥550 (September 2026), honey lemon (May 2026), Mont Blanc (October 2026), strawberry milk ¥450 (February 2026) and sesame ¥330 (October 2026) · food: ten-item plate ¥1,800, gapao rice ¥1,500, taco rice ¥1,500 with fresh vegetables, a fried egg, meat and avocado (official site; November 2026); panini of tomato and mozzarella ¥500, prosciutto and mozzarella ¥600, salmon and cream cheese ¥650 (official site), which took about 20 minutes (February 2026) · coffee: today’s coffee ¥500 short / ¥550 tall, hand drip ¥700, cold brew ¥600, latte from ¥600, espresso ¥500; matcha latte ¥800; soy or oat milk or decaf +¥50 (official site)',
    website: SITE, gmaps: gm('Natural café 京都駅前店 東塩小路町717-1'), menu_url: SITE,
    notes: '[Café · in front of Kyoto Stn, cream donuts and coffee in a big green room] A large, bright café three minutes from Kyoto Station’s Karasuma exit, with plants, wood and big windows: cream-filled donuts from ¥300 (from 11:00), good coffee, taco rice and panini. Order at the counter; outlets and Wi-Fi; strollers welcome. Daily 8:00–20:00.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the official site and Tabelog: opened in March 2025 in the Kyoto Ekimae Building; the invoice holder on Tabelog (T9130001069468) is 枳殻邸別館株式会社 of Shimogyo, Kyoto (NTA register). The site presents a spacious, work-friendly café near Kyoto Station, its donuts made with carefully chosen flour and Hokkaido fresh cream. Reviewers describe a bright, spacious room with well-spaced tables, plants, wood and natural light (2026), busy on weekend afternoons with people working or studying (October 2026) and many families with small children (May 2026). A January 2026 diner was not told to order at the counter, waited at the table, and was handed water in a small paper cup in an unfriendly way; an October 2026 diner found the staff very kind. An October 2026 diner found the tomato panini cold, and another found the espresso small.',
      philosophy: null, specialty: 'Cream-filled donuts; coffee.',
      anecdotes: [
        { text: 'A September 2026 visitor who never pays more than ¥500 for coffee hesitated at the prices, then ordered one anyway for the calm room — and urged others to see the restroom.', source: R + 'B535984222/' },
        { text: 'In October 2026 a diner paid with au PAY from a shareholder benefit for a whipped-cream donut and espresso.', source: R + 'B536765350/' },
        { text: 'On a fourth visit in October 2026 a diner found the tomato panini cold but the coffee delicious, with a nice acidity; in February 2026 the same diner had called it a favourite coffee of late.', source: R + 'B520958148/' },
      ],
      japanese_sources_summary: '公式サイト: Natural café 京都駅前店、下京区東塩小路町717-1、8:00〜20:00、定休日なし、生ドーナツは11:00から売り切れまで、席数は80席と70席の両方の記載、コンセント付きのカウンター、無料Wi-Fi、ベビーカー・スーツケース可、こだわりの小麦粉で一日かけて発酵させた生地の「ふわとろ生ドーナツ」、宇治抹茶ラテ、彩り10種のご褒美プレート1,800円、ガパオライス1,500円、タコライス1,500円、パニーニ (トマト&モッツァレラ500円、生ハム&モッツァレラ600円、サーモン&クリームチーズ650円)、ドーナツ (プレーン300円、ホイップ350円、カスタード400円、チョコ400円、抹茶500円、シナモンシュガー330円、きな粉330円)、本日のコーヒー ショート500円・トール550円、ハンドドリップ700円、コールドブリュー600円、カフェラテ600円から、エスプレッソ500円、抹茶ラテ800円、ソイ・オーツ・ディカフェは+50円。食べログ: カフェ・ドーナツ・サンドイッチ、京都駅前ビル 1F、2025年3月21日開店、78席、予約不可、カード・電子マネー・QR 可、禁煙、英語のメニュー、子ども可、適格請求書の登録番号 T9130001069468 (国税庁の公表サイトでは枳殻邸別館株式会社)。口コミ (2026年1月〜11月、英語): ドーナツは20種ほど、季節の大学芋550円 (2026年9月)、席を取ってからカウンターで注文 (2026年10月)、説明がなく水を紙コップで出された (2026年1月)、タコライス (2026年1月、11月)。',
      confidence: 'medium', sources: [SITE, TB, R + 'B520958148/', R + 'B521426346/', R + 'B522069162/', R + 'B535984222/', R + 'B536530005/', R + 'B536722669/', R + 'B536765350/', R + 'B537135537/', R + 'B538849942/', R + 'B539685197/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=9130001069468'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); choose a seat, then order at the counter — staff may not explain this (January 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町717-1 京都駅前ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews November 2026; official site live 2026-11-26.' },
    pin_source: `Tabelog ${TB} (34.987334, 135.760510); not pin-checked by the worker (integrator to check); nearest record kyoto_izakaya_kyoto_tower_since1905 38.0 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B536530005/', R + 'B537135537/'],
    price_note: 'Prices from the official site (undated, read 2026-11-26); 2026 reviews match.', last_checked: TODAY, items: [
      it('生ドーナツ プレーン', '', 'Nama donut, plain', '¥300', 'Donuts', 'no', 'ask', 'From 11:00.', 'donut_plain'),
      it('生ドーナツ ホイップ', '', 'Nama donut, whipped cream', '¥350', 'Donuts', 'no', 'no', 'From 11:00.', 'donut_whip'),
      it('タコライス', '', 'Taco rice', '¥1,500', 'Food', 'ask', 'no', 'Tax included.', 'taco_rice'),
      it('ガパオライス', '', 'Gapao rice', '¥1,500', 'Food', 'ask', 'ask', 'Tax included.', 'gapao_rice'),
      it('サーモン&クリームチーズ', '', 'Panini, salmon and cream cheese', '¥650', 'Food', 'no', 'no', '', 'panini_salmon'),
      it('本日のコーヒー', '', 'Today’s coffee (short / tall)', '¥500 / ¥550', 'Coffee', '', '', '', 'coffee_today'),
    ] }, {
    cuisine: '一日かけて発酵させた生地のふわふわの生ドーナツ、スペシャルティコーヒー、宇治抹茶ラテのカフェ (公式サイト、食べログ)・ドーナツ: プレーン300円、ホイップ350円、カスタード400円、チョコ400円、抹茶500円、シナモンシュガー330円、きな粉330円 (公式サイト、日付なし)、20種ほどで、季節の大学芋550円 (2026年9月)、はちみつレモン (2026年5月)、モンブラン (2026年10月)、いちごミルク450円 (2026年2月)、ごま330円 (2026年10月)・食事: 彩り10種のご褒美プレート1,800円、ガパオライス1,500円、生野菜、目玉焼き、肉、アボカドのタコライス1,500円 (公式サイト、2026年11月)、パニーニはトマト&モッツァレラ500円、生ハム&モッツァレラ600円、サーモン&クリームチーズ650円 (公式サイト)、できるまで20分ほど (2026年2月)・コーヒー: 本日のコーヒー ショート500円・トール550円、ハンドドリップ700円、コールドブリュー600円、カフェラテ600円から、エスプレッソ500円、抹茶ラテ800円、ソイ・オーツ・ディカフェは+50円 (公式サイト)',
    neighborhood: '京都駅前、烏丸中央口',
    gf_detail: '要確認。看板はこだわりの小麦粉の生地を一日かけて発酵させた生ドーナツで、パニーニもある (公式サイト)。タコライスとガパオライスはご飯の料理だが、グルテンやアレルギーの情報はない (公式サイト、2026年11月26日)。',
    vegan_detail: '要確認。ドリンクはソイやオーツに+50円で変えられる (公式サイト)。ただしドーナツはHokkaido の生クリームやカスタード入り (食べログ、2026年の口コミ)、ご飯の料理には肉と卵がのる (2026年11月)。ヴィーガン向けの料理の説明はない。',
    notes: '[カフェ・京都駅前、緑の広い店で生ドーナツとコーヒー] 京都駅の烏丸口から3分、植物と木と大きな窓の明るく広いカフェ。生ドーナツ300円から (11:00から)、おいしいコーヒー、タコライス、パニーニ。注文はカウンターで、コンセントとWi-Fiあり、ベビーカー可。毎日 8:00〜20:00。',
  });
}

// ================================================================ 酒場のはったり (Fukumoto-cho, north of Shichijo)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26043901/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']); const WE = day(['16:00', '23:00']);
  put({
    id: 'kyoto_sakaba_hattari_fukumoto', name: '酒場のはったり', category: 'OMNI',
    lat: 34.98985708787766, lng: 135.75513628021272, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Specialities are straw-grilled bonito tataki, sashimi and homemade tofu (Tabelog), with fried dishes such as a rare tuna cutlet alongside (2026 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu centres on fish, but there is tofu made each morning from house soy milk (Tabelog) and a variety of vegetable dishes (October 2026); no vegan dish is described.',
    hours_raw: 'Monday, Tuesday, Thursday and Friday 17:00–23:00; Saturday, Sunday and public holidays 16:00–23:00; last order 22:30; closed Wednesday (Tabelog). Reservations accepted (Tabelog) and advised — reviewers found it full without one (May 2026). Cards (VISA, Master, JCB, AMEX, Diners) and QR accepted; no e-money (Tabelog). 31 seats: 11 at the counter and a raised table for 4 on the ground floor; one tatami room for 4 and two for 6 upstairs, where groups up to 16 can be seated and the floor can be hired privately (Tabelog). Non-smoking; wheelchair users are asked to consult in advance; children welcome; English menu (Tabelog). No parking; coin parking next door (Tabelog). 10 min walk from Kyoto Stn, across Shichijo-dori (Tabelog; June 2026).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishinotoin-Shichijo, 10 min north-west of Kyoto Stn',
    cuisine: 'Izakaya in a renovated Kyoto machiya, known for straw-grilled dishes seared over high flames in front of the counter (Tabelog; May 2026) · bonito tataki from Kochi, the signature (Tabelog; 2026 reviews), with garlic and salt (October 2026); fatty hon-maguro from the Kyoto Central Market (Tabelog); tuna sashimi, a fried dish with grated daikon (October 2026); rare tuna cutlet, tuna-cheek tataki (April 2026); wasabi bacon and an egg-on-rice to finish (June 2026); beef-tendon stew, seasonal obanzai and a sashimi platter (May 2026); homemade tofu (Tabelog) · a wide sake list served by the half-go glass or tokkuri (Tabelog), with Kameizumi CEL24 (May 2026) and a rare “Peak” highball (July 2026) · about ¥4,000–5,000 (Tabelog); ¥3,000–8,000 in 2026 reviews',
    website: null, gmaps: gm('酒場のはったり 京都 福本町'), menu_url: null,
    notes: '[Izakaya · north of Shichijo near Kyoto Stn, straw-grilled bonito in a machiya] A thirty-seat izakaya in an old machiya ten minutes from Kyoto Station: Kochi bonito seared in straw flames at the counter, fresh tuna, homemade tofu and a long sake list. Book ahead; English menu. Closed Wednesday.',
    chef_bio: { chef_name: '服部 祐介', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'Per Tabelog and reviewers: the Tabelog invoice number T2810436213180 is registered to 服部 祐介 (NTA register, from 1 January 2025). Tabelog describes a nostalgic space renovated from a Kyoto machiya, with sake picked by the manager. An April 2026 diner understood that the owner does all the cooking, so food comes slowly while drinks come quickly, and felt the owner’s dedication throughout; a June 2026 diner sat in a small raised area by the entrance with walls papered in old newspapers, and noted the place is little known because it is across Shichijo-dori from the station. Reviewers praise the fish and the reasonable drink prices (2026).',
      philosophy: null, specialty: 'Straw-grilled bonito tataki.',
      anecdotes: [
        { text: 'In May 2026 a diner phoned and was told it was full, then got a call back ten minutes later offering two counter seats; the companion kept saying how good the bonito was.', source: R + 'B522970530/' },
        { text: 'A May 2026 diner who had failed to drop in several times without booking finally sat at the counter to watch the straw grilling.', source: R + 'B528019168/' },
        { text: 'A regular dinner group of friends and spouses came in October 2026 for the return of bonito season and ordered two plates of tataki.', source: R + 'B538949376/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮、下京区西洞院通七条上ル福本町417-1、京都駅から徒歩10分、月・火・木・金 17:00〜23:00、土日祝日 16:00〜23:00 (L.O.22:30)、水曜定休、予約可、車いすは事前に相談、カード可 (VISA・Master・JCB・AMEX・Diners)、QR 可、電子マネー不可、31席 (カウンター11席、1階の小上がりに4人掛け1卓、2階に4人の座敷1つと6人の座敷2つ)、16名まで、2階のみ貸切可、禁煙、駐車場なし、隣にコインパーキング、英語のメニュー、子ども可、京町家を改装した空間、目の前で高温の炎で焼く藁焼き、Kochi から届くかつおのたたき、Kyoto Central Market の本マグロ、毎朝店で作る豆乳の自家製豆腐、店長が選ぶ日本酒を半合のグラスと徳利で、適格請求書の登録番号 T2810436213180 (国税庁の公表サイトでは服部 祐介、2025年1月1日登録)。口コミ (2026年2月〜10月、英語): 電話で満席と言われたが10分後に2人分の空きの連絡、Kameizumi CEL24 (2026年5月)、店主が一人で料理、まぐろのレアカツ、まぐろのほほ肉のたたき (2026年4月)、藁焼き、予約がないと入れない (2026年5月)、わさびベーコン、締めの卵ご飯、入口の小上がり、古い新聞を貼った壁 (2026年6月)、Kochi から届く魚、Peak のハイボール (2026年7月)、牛すじの煮込み、季節のおばんざい、刺身の盛り合わせ (2026年5月)、野菜の料理も多い (2026年10月)、かつおのたたきを2皿、にんにくと塩、まぐろの刺身、大根おろしの揚げ物 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B522970530/', R + 'B527284177/', R + 'B528019168/', R + 'B530130546/', R + 'B530334162/', R + 'B531844997/', R + 'B532841287/', R + 'B534695352/', R + 'B536822501/', R + 'B538949376/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=2810436213180'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); book ahead by phone — it fills up (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区西洞院通七条上ル福本町417-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews October 2026.' },
    pin_source: `Tabelog ${TB} (34.989857, 135.755136); not pin-checked by the worker (integrator to check); nearest record kyoto_rauk_honten (hidden, 福本町422-2) 13.1 m; nearest visible kyoto_izumo_kanoka 105.3 m; osw1's pending kyoto_cafe_bal_cercle_nanajo 40.9 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B527284177/', R + 'B530334162/', R + 'B538949376/'],
    price_note: 'No dish prices in the sources; about ¥4,000–5,000 per person (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Straw-grilled bonito tataki (from Kochi)', '', 'Signature', 'ask', 'no', 'Tabelog; 2026 reviews.', 'katsuo_tataki'),
      it('', '', 'Rare tuna cutlet', '', 'Dishes', 'no', 'no', 'April 2026.', 'tuna_cutlet'),
      it('', '', 'Homemade tofu', '', 'Dishes', 'ask', 'ask', 'Made each morning from house soy milk (Tabelog).', 'house_tofu'),
      it('', '', 'Wasabi bacon', '', 'Dishes', 'ask', 'no', 'June 2026.', 'wasabi_bacon'),
    ] }, {
    cuisine: '京町家を改装した居酒屋、カウンターの前で高温の炎で焼く藁焼きが名物 (食べログ、2026年5月)・看板はKochi のかつおのたたき (食べログ、2026年の口コミ)、にんにくと塩で (2026年10月)、Kyoto Central Market の脂ののった本マグロ (食べログ)、まぐろの刺身、大根おろしの揚げ物 (2026年10月)、まぐろのレアカツ、まぐろのほほ肉のたたき (2026年4月)、わさびベーコン、締めの卵ご飯 (2026年6月)、牛すじの煮込み、季節のおばんざい、刺身の盛り合わせ (2026年5月)、自家製豆腐 (食べログ)・日本酒が豊富で半合のグラスか徳利で (食べログ)、Kameizumi CEL24 (2026年5月)、珍しい Peak のハイボール (2026年7月)・4,000〜5,000円ほど (食べログ)、2026年の口コミでは3,000〜8,000円',
    neighborhood: '西洞院七条、京都駅の北西に徒歩10分',
    gf_detail: '要確認。名物は藁焼きのかつおのたたき、刺身、自家製豆腐 (食べログ)。まぐろのレアカツなどの揚げ物もある (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。魚が中心だが、毎朝店で作る豆乳の自家製豆腐 (食べログ) と野菜の料理もいろいろある (2026年10月)。ヴィーガン向けの料理の説明はない。',
    notes: '[居酒屋・七条の北、京都駅の近く、町家で藁焼きのかつお] 京都駅から10分ほどの古い町家の30席ほどの居酒屋。カウンターの前で藁の炎で焼くKochi のかつお、新鮮なまぐろ、自家製豆腐、豊富な日本酒。予約がおすすめ、英語のメニュー。水曜定休。',
  });
}

save();
