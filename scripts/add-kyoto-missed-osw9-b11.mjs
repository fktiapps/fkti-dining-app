// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 11.
//   + さか本 Sakamoto (kappo on the Shirakawa in Gion, reservation only; since 1977 per a review)               [core]
//   + れんこんや Renkonya (obanzai izakaya in an Edo-period townhouse on Nishikiyamachi; since 1950 per a guide)  [core]
//   + とくら 京都三条店 Tokura Kyoto Sanjo (hamburg-steak shop; Yoshoku WEST Tabelog 100 2025)                 [notable]
//   + hikari-yurari (10-seat Italian counter and wine bar near City Hall)                                      [notable]
//   - ぎをん為治郎 祇園店 26027207 (sub-brand of 本家西尾八ッ橋, a large parent) · 中国料理 桃李 26001497 (brand in data)
//     · モリタ屋 JR京都伊勢丹店 26000411 (chain, 6 shops) — skipped
//   Taken in queue order on 2026-11-05: core lane ids 26027207 (skipped), 26001419, 26000225; notable 26001497 (skipped),
//   26000411 (skipped), 26031131, 26002637. None of the four drafted is in data/kyoto.json: grep by name (さか本, れんこん,
//   とくら/Tokura, hikari/ゆらり) and address (末吉町 EFビル, 山崎町236, 桝屋町57, 橘町611) found none.
//   Group check: とくら — Tabelog says the main shop is in Kuze (Minami-ku) with a branch in Takeda (Fushimi-ku); the
//   shop site announces a Lucua Osaka shop (2022); none in data — a small group of 4.
//   Pins: Sakamoto's address has no lot number and GSI matched only the town (末吉町), so loc_approx 'single'.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26027207', 'ぎをん為治郎 祇園店: the café brand of 本家西尾八ッ橋 (8284.co.jp), whose shop page lists about a dozen shops (本店, 八条口店, 新京極店, 清水坂店, 清水店, 熊野店, 産寧坂店, 祇園北店, 祇園店, 西尾八ッ橋の里, そば処 為治郎 and others) — a sub-brand of a large parent, a chain under Greg\'s 2026-11-05 ruling');
skip('26001497', '中国料理 桃李 (Hotel Okura Kyoto B1F): same name and Cantonese concept as osaka_tohlee_hotel_nikko_osaka ("中国料理 桃李 ホテル日航大阪"), whose record quotes a review that "Chinese Tori has several locations"; a web search also finds 桃李 at Hotel Nikko Himeji and formerly Hotel Nikko Ibaraki — a same-concept branch of a brand already in data (flagged: the Kyoto shop opened in 1979 as the hotel\'s own restaurant)');
skip('26000411', 'モリタ屋 JR京都伊勢丹店: chain — the official site (moritaya-kyoto.com) lists 6 shops: 四条猪熊本店, 木屋町店, JR京都伊勢丹店, ルクア イーレ店, 東京丸の内店, 銀座三越店');

// ================================================================ さか本
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001419/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_sakamoto', name: 'さか本 (Sakamoto)', category: 'OMNI',
    lat: 35.005304, lng: 135.773638, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kyoto kappo courses on dashi — yuba, sesame tofu with fuki-miso, clear soup, seasonal bamboo shoots; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: omakase kappo courses with fish and dashi (2025–26 reviews).',
    hours_raw: 'Lunch 12:00–14:00, dinner 17:00–22:00; closing days not fixed; reservation only (Tabelog). 12 seats: 6 at the counter, 6 at tables; window seats look over the Shirakawa; private hire possible; non-smoking; cards accepted (Tabelog; 2026 reviews). Ground floor of the EF building on Sueyoshi-cho facing the Shirakawa; the entrance is set back and easy to miss (Tabelog; 2021–2024 reviews). 251 m from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion Shirakawa, on Sueyoshi-cho by the stream — 4 min from Gion-Shijo Stn',
    cuisine: 'Kyoto kappo omakase beside the Shirakawa (2025–26 reviews) · white sesame tofu with fuki-no-tō miso, clear soup, yuba (a reviewer’s highlight), seasonal Kyoto bamboo shoots in Kyoto dashi; sansho flowers in spring · Fushimi sake; sake pairing chosen by the chef (2025–26 reviews) · courses around ¥20,000 a head per a 2024 reviewer; bills of ¥15,000–50,000 a head reported (2024–26 reviews)',
    website: 'http://www.gion-sakamoto.com/', gmaps: gm('割烹 さか本 祇園'), menu_url: null,
    notes: "[Kappo · Gion Shirakawa, dinner over the stream] A small kappo counter on the Shirakawa in Gion, open since 1977 per a reviewer, where window seats look over the stream and, in spring, illuminated cherry blossoms. Omakase courses of seasonal Kyoto cooking — yuba, bamboo shoots, sesame tofu — with Fushimi sake. Reservation only; expect ¥20,000 a head and up. The entrance is tucked away.",
    chef_bio: { chef_name: null, roles: ['Owner and chef (unnamed in the sources)'], origin: null,
      background: 'Per a June 2025 review: in business since October 1977, reservation only. A June 2021 reviewer was welcomed by a woman who seemed to be the owner; a November 2022 reviewer heard the manager had studied cooking in America.',
      philosophy: null, specialty: 'Seasonal kappo omakase; yuba.',
      anecdotes: [
        { text: 'An April 2026 window table had the illuminated cherry blossoms across the Shirakawa, with Kyoto bamboo shoots and Fushimi sake.', source: R + 'B525783575/' },
        { text: 'An April 2024 diner thought ¥85,000 for two hard to square with courses of about ¥20,000 a head.', source: R + 'B482915868/' },
        { text: 'The owner and staff were "very friendly", and the chef’s sake pairing suited the reviewer — January 2025.', source: R + 'B499400931/' },
      ],
      japanese_sources_summary: '食べログ: さか本、日本料理、東山区祇園末吉町大和大路東入ル EFビル 1F、祇園四条駅から251m、毎日 12:00〜14:00・17:00〜22:00、不定休、完全予約制、12席 (カウンター6、テーブル6)、貸切可、禁煙、カード可、白川の眺め。公式サイト: 京都・祇園 割烹さか本。口コミ (2021年6月〜2026年6月、英語): 1977年10月創業、白川沿い、湯葉、白胡麻豆腐とふきのとう味噌、筍、花山椒、伏見の地酒、日本酒のペアリング、高いという声、入口がわかりにくい。',
      confidence: 'low', sources: [TB, 'http://www.gion-sakamoto.com/', R + 'B442365547/', R + 'B475370074/', R + 'B482915868/', R + 'B484029463/', R + 'B492536369/', R + 'B499400931/', R + 'B508657885/', R + 'B525783575/', R + 'B531175855/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ask for a window seat over the Shirakawa; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園末吉町大和大路東入ル EFビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026 (January 2025, June 2025, April 2026, June 2026).' },
    pin_source: `Tabelog ${TB} (35.005304, 135.773638); cross-checked: GSI 京都府京都市東山区末吉町 (town) 34m — the address has no lot number, so town-level only and loc_approx 'single'; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B482915868/'],
    price_note: 'No menu or prices read; a 2024 reviewer put courses at about ¥20,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Omakase kappo course', '', 'Courses', 'ask', 'no', 'Reservation only.', 'omakase'),
    ] }, {
    cuisine: '白川沿いの京都の割烹のおまかせ (2025〜26年の口コミ)・ふきのとう味噌の白胡麻豆腐、お椀、湯葉 (口コミのいちばんの一品)、京の出汁の筍、春は花山椒・伏見の地酒、シェフが選ぶ日本酒のペアリング (2025〜26年の口コミ)・2024年の口コミではコース1人2万円ほど、1人1万5千〜5万円の支払いの報告 (2024〜26年の口コミ)',
    neighborhood: '祇園白川、流れ沿いの末吉町。祇園四条駅から徒歩4分',
    gf_detail: '予約時に要確認。出汁を土台にした京都の割烹のコース: 湯葉、ふきのとう味噌の胡麻豆腐、お椀、季節の筍。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。魚と出汁のおまかせの割烹コース (2025〜26年の口コミ)。',
    notes: '[割烹・祇園白川、流れを眺める夕食] 祇園の白川沿いにある小さな割烹で、口コミによれば1977年から。窓際の席からは流れと、春はライトアップされた桜が見える。湯葉、筍、胡麻豆腐など季節の京料理のおまかせを伏見の地酒と。完全予約制で、1人2万円ほどから。入口はわかりにくい。',
  });
}

// ================================================================ れんこんや
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000225/'; const R = TB + 'dtlrvwlst/';
  const GUIDE = 'http://aquadina.com/kyoto/spot/3634/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_renkonya', name: 'れんこんや (Renkonya)', category: 'OMNI',
    lat: 35.007665, lng: 135.77028, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai and izakaya dishes with soy-based simmering — nikujaga with a strong soy taste, beef shigureni, tonjiru, karashi renkon with a miso-mustard filling; no gluten information (guide article; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Pickles, chilled tofu, grilled eggplant, Manganji peppers and okara are on the menu, but obanzai are usually simmered in dashi and much of the menu is meat or fish (2025–26 reviews).',
    hours_raw: '17:00–22:30, Monday to Saturday; closed Sunday (Tabelog); a travel guide gives 17:00–23:00 (last order) and says the shop opens on a holiday Monday and closes the Tuesday instead. Bookings taken; walk-ins sometimes fit (Tabelog; 2025–26 reviews). 20 seats: a counter of about four, two tables for four and three small tables for two on a raised tatami floor (Tabelog; April 2025). Non-smoking; JCB, AMEX, Diners and e-money (Tabelog). On Nishikiyamachi-dori south of Sanjo, by the Takase River; 5 min from Sanjo Stn (Tabelog; guide).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikiyamachi south of Sanjo, by the Takase River — 5 min from Sanjo Stn',
    cuisine: 'Old Kyoto izakaya of obanzai home cooking with sake (guide article) · house karashi renkon with a white-miso mustard filling (¥700 in the guide) · wakasa karei, dried flounder as sashimi, grilled and in soup (¥1,600 in the guide) · obanzai: nikujaga ¥800, beef shigureni, okara, Manganji peppers, grilled eggplant, chilled tofu, atsuage with grated daikon, homemade pickles ¥300, teppai, chicken liver · onigiri with chirimen sansho, tonjiru, yudofu (guide article; 2025–26 reviews)',
    website: null, gmaps: gm('れんこんや 京都 西木屋町'), menu_url: null,
    notes: "[Obanzai izakaya · Kiyamachi south of Sanjo, an old townhouse] A tiny, wood-built izakaya by the Takase River, running since 1950 per a travel guide, in an Edo-era townhouse with an okudo hearth and low tables: Kyoto home-style obanzai and sake, with the house karashi renkon (lotus root stuffed with miso mustard), simmered dishes and onigiri to finish. Cosy and often busy with visitors; book or call ahead. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who cooks every dish (April 2025 review)'], origin: null,
      background: 'Per a travel-guide article (aquadina.com, undated): a long-established izakaya since 1950, centred on obanzai lined up on the counter; the interior is an Edo-period townhouse where the okudo, a black telephone and low chabudai tables are still in use.',
      philosophy: null, specialty: 'Karashi renkon; obanzai.',
      anecdotes: [
        { text: 'Ordering pickled eggplant, a guest was offered it old, regular or lightly pickled — May 2025.', source: R + 'B363207365/' },
        { text: '"It seems the owner is cooking all the dishes" — April 2025; the same reviewers found the small raised tables cramped.', source: R + 'B505159006/' },
        { text: 'An August 2025 diner, after the Gozan no Okuribi, noted many foreign guests and a casual dress code with lots of tank tops.', source: R + 'B512054181/' },
        { text: 'A kitchen mix-up left an order of okara unclaimed, and a late guest got it at half price — September 2025.', source: R + 'B456589793/' },
      ],
      japanese_sources_summary: '観光ガイド記事 (aquadina.com、日付なし): れんこん屋、1950年から続く老舗の居酒屋、カウンターに並ぶおばんざい中心、自家製からしれんこん (白味噌をブレンドした辛子味噌) 700円、わかさかれい1,600円、たたきとろろ800円、にしきぎ600円、江戸時代の町家、おくどさん・黒電話・ちゃぶ台、17:00〜23:00 (L.O)、日曜休み (月曜が祝日の場合は営業し月曜休み)。食べログ: 居酒屋・日本料理・郷土料理、中京区西木屋町通り三条下ル山崎町236、三条駅から247m、月〜土 17:00〜22:30、日曜休み、予約可、20席、禁煙、カード (JCB・AMEX・Diners)・電子マネー可。口コミ (2025年4月〜2026年10月、英語): からしれんこん、肉じゃが800円、漬物300円、牛しぐれ煮、おから、万願寺とうがらし、てっぱい、鶏レバー、おにぎり、豚汁、湯豆腐、店主が一人で料理、海外からの客が多い。',
      confidence: 'medium', sources: [TB, GUIDE, R + 'B363207365/', R + 'B456589793/', R + 'B483168022/', R + 'B505159006/', R + 'B505781158/', R + 'B507009280/', R + 'B512054181/', R + 'B519661408/', R + 'B525204022/', R + 'B537315184/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small and busy; call ahead; obanzai are ordered from the counter display.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西木屋町通り三条下ル山崎町236',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007665, 135.770280); cross-checked: GSI 京都府京都市中京区山崎町236番地 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [GUIDE, R + 'B505781158/'],
    price_note: 'Signature-dish prices from an undated guide article; obanzai prices from an April 2025 review.', last_checked: TODAY, items: [
      it('自家製からしれんこん', '', 'House karashi renkon (lotus root with miso mustard)', '¥700', 'Obanzai', 'ask', 'ask', 'Guide article, undated.', 'karashi_renkon'),
      it('わかさかれい', '', 'Wakasa karei (dried flounder) three ways', '¥1,600', 'Fish', 'ask', 'no', 'Guide article, undated.', 'wakasa_karei'),
      it('', '', 'Nikujaga', '¥800', 'Obanzai', 'ask', 'no', 'April 2025.', 'nikujaga'),
      it('', '', 'Homemade pickles, three kinds', '¥300', 'Obanzai', 'ask', 'ask', 'April 2025.', 'pickles'),
    ] }, {
    cuisine: 'おばんざいと酒の京都の古い居酒屋 (ガイド記事)・名物の自家製からしれんこん、白味噌をブレンドした辛子味噌 (記事では700円)・わかさかれいを刺身、焼き、吸物で (記事では1,600円)・おばんざい: 肉じゃが800円、牛しぐれ煮、おから、万願寺とうがらし、焼きなす、冷奴、厚揚げのおろし、自家製の漬物300円、てっぱい、鶏レバー・ちりめん山椒のおにぎり、豚汁、湯豆腐 (ガイド記事、2025〜26年の口コミ)',
    neighborhood: '三条の南の西木屋町、高瀬川沿い。三条駅から徒歩5分',
    gf_detail: '要確認。醤油で煮るおばんざいと居酒屋料理: 醤油の効いた肉じゃが、牛しぐれ煮、豚汁、辛子味噌を詰めたからしれんこん。グルテンの情報はない (ガイド記事、2025〜26年の口コミ)。',
    vegan_detail: '要確認。漬物、冷奴、焼きなす、万願寺とうがらし、おからもあるが、おばんざいはふつう出汁で炊き、肉や魚の料理も多い (2025〜26年の口コミ)。',
    notes: '[おばんざい居酒屋・三条木屋町、古い町家] 高瀬川沿いの木造の小さな居酒屋で、観光ガイドによれば1950年から。おくどさんやちゃぶ台のある江戸時代の町家で、京都の家庭のおばんざいと酒。名物は辛子味噌を詰めたからしれんこん、煮物、締めのおにぎり。こぢんまりとして観光客でにぎわうことが多いので、予約か電話を。日曜休み。',
  });
}

// ================================================================ とくら 京都三条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031131/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tokura-hamburg.com/';
  const H = day(['11:00', '15:00'], ['17:00', '20:30']);
  put({
    id: 'kyoto_tokura_sanjo', name: 'とくら 京都三条店 (Tokura Kyoto Sanjo)', category: 'OMNI',
    lat: 35.008833, lng: 135.762862, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: hamburg steak, demi-glace and red-wine sauces, fried shrimp, roll bread (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a hamburg-steak specialist (official site).',
    hours_raw: '11:00–15:00 and 17:00–20:30; closed Wednesday (Tabelog). No reservations: weekend queues from about 11:30 with waits of 20–40 minutes; orders are taken in the line and parasols lent in the sun (Tabelog; October 2026). Takeaway (official site). Counter seating; non-smoking; JCB and AMEX, e-money and QR (Tabelog). Ground floor of 京都三条ビル; 4 min from Karasuma Oike Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori east of Karasuma — 4 min from Karasuma Oike Stn',
    cuisine: 'Handmade hamburg steaks that burst with juice, with 12 sauces from a red-wine house sauce to grated-daikon ponzu (official site) · original hamburg steak ¥1,030 (rice ¥275), 300 g ¥1,250 with a Japanese set +¥345; cheese, negi-miso and mentaiko hamburg; hamburg with fried shrimp; lunch sets (October 2026 reviews) · rice from Hachidaime Gihei (October 2026)',
    website: SITE, gmaps: gm('とくら 京都三条店'), menu_url: SITE,
    notes: "[Hamburg steak · Sanjo near Karasuma] The Sanjo branch of a Kyoto hamburg-steak specialist: plump handmade patties that flood with juice when cut, a choice of 12 sauces, and rice from Hachidaime Gihei. Original hamburg about ¥1,030; 300 g ¥1,250. Expect a short queue at lunch — orders are taken while you wait. Yoshoku WEST Tabelog 100 2025. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Per Tabelog: the main shop is in Kuze, Minami-ku, with another branch in Takeda, Fushimi-ku. The shop site announced a Lucua Osaka shop opening on 5 April 2022. Per the shop site: the onion moisture and fat ratio are adjusted day by day to keep the taste constant. Tabelog Yoshoku WEST "Tabelog 100" 2025.',
      philosophy: 'Per the shop site: "肉汁溢れるハンバーグといえば「とくら」" — the hamburg that overflows with juices.',
      specialty: 'Original hamburg steak.',
      anecdotes: [
        { text: 'While queuing, guests were lent sun umbrellas and orders were taken — October 2026.', source: R + 'B537291822/' },
        { text: 'Many Korean customers were there and the staff spoke fluent Korean; the corn potage was slightly powdery — October 2026.', source: R + 'B537646751/' },
        { text: 'A diner who finds the Osaka Tokura lines too long got in here with little wait — October 2026.', source: R + 'B537807596/' },
      ],
      japanese_sources_summary: '公式サイト (tokura-hamburg.com): 手づくりハンバーグの店 とくら、肉汁溢れるハンバーグ、玉ネギの水分や肉の脂肪分を見ながら日によって配合を微調整、赤ワイン仕立てのオリジナルソースやおろしポン酢など12種類のソース、テイクアウト、ルクア大阪店 2022年4月5日オープン。食べログ: ハンバーグ、中京区桝屋町57 京都三条ビル 1F、烏丸御池駅から徒歩4分、月火木〜日 11:00〜15:00・17:00〜20:30、水曜休み、予約不可、カウンター席、禁煙、カード (JCB・AMEX)・電子マネー・QR 可、本店は南区久世上久世町516-6、伏見区竹田中畑町24に支店、洋食 WEST 百名店 2025。口コミ (2026年10月、英語): オリジナルハンバーグ1,030円、ライス275円、300g 1,250円、和風セット+345円、チーズ、ねぎ味噌、明太子、エビフライ、Hachidaime Gihei の米、行列。',
      confidence: 'medium', sources: [TB, SITE, R + 'B490611267/', R + 'B537235641/', R + 'B537291822/', R + 'B537441165/', R + 'B537646751/', R + 'B537807596/', R + 'B537837696/', R + 'B538066357/', R + 'B538069215/', R + 'B538573461/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue and order in line; counter seats; cards (JCB, AMEX) accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区桝屋町57 京都三条ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop site; reviews dated through October 2026; Yoshoku WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.008833, 135.762862); cross-checked: GSI 京都府京都市中京区桝屋町57番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538069215/', R + 'B537291822/'],
    price_note: 'No price list read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Original hamburg steak', '¥1,030', 'Hamburg', 'no', 'no', 'October 2026.', 'original_hamburg'),
      it('', '', 'Original hamburg steak 300 g', '¥1,250', 'Hamburg', 'no', 'no', 'October 2026.', 'original_hamburg_300'),
      it('', '', 'Japanese-style set (rice, soup)', '+¥345', 'Sets', 'ask', 'ask', 'October 2026.', 'wafu_set'),
      it('', '', 'Rice', '¥275', 'Sides', '', '', 'October 2026.', 'rice'),
    ] }, {
    cuisine: '切ると肉汁があふれる手づくりハンバーグ、赤ワイン仕立てのソースからおろしポン酢まで12種のソース (公式サイト)・オリジナルハンバーグ1,030円 (ライス275円)、300g 1,250円で和風セット+345円、チーズ、ねぎ味噌、明太子のハンバーグ、エビフライとのセット、ランチセット (2026年10月の口コミ)・Hachidaime Gihei の米 (2026年10月)',
    neighborhood: '烏丸の東の三条通。烏丸御池駅から徒歩4分',
    gf_detail: '実際にはグルテンフリーではない。ハンバーグ、デミグラスや赤ワインのソース、エビフライ、ロールパン (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ハンバーグの専門店 (公式サイト)。',
    notes: '[ハンバーグ・烏丸の三条] 京都のハンバーグ専門店の三条店。切ると肉汁があふれるふっくらした手づくりハンバーグに12種のソース、ご飯は Hachidaime Gihei の米。オリジナルは1,030円ほど、300gは1,250円。昼は少し並ぶが、待つ間に注文を聞いてくれる。洋食 WEST 百名店 2025。水曜休み。',
  });
}

// ================================================================ hikari-yurari
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002637/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_hikari_yurari', name: 'hikari-yurari', category: 'OMNI',
    lat: 35.012114, lng: 135.766069, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Italian small plates — prosciutto, pâté, potato salad, cheese, soups, pasta; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: cured hams, pâté and cheese lead the menu (2025–26 reviews).',
    hours_raw: '18:00–23:00 (last seating 22:00; food last order 22:00, drinks 22:30); closed Tuesday and every other Monday (Tabelog). Reservation only, by phone; same-day bookings possible; reviewers say the shop checks that you drink alcohol — not a place for non-drinkers (2025 reviews). Changes in numbers must be given by the day before, or ¥7,000 a head is charged; same-day cancellations are billed through a law firm (Tabelog). Cover charge ¥600 + tax (Tabelog). 10 counter seats; parties up to 4; non-smoking; cards (Tabelog). Basement of ヴァインオークトゥエルブ on Oshikoji-dori east of Fuyacho; 5 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oshikoji-dori east of Fuyacho, basement — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Italian wine bar and counter kitchen: dishes from ingredients the chef sources, wines chosen to match (2025–26 reviews) · assorted prosciutto (hams hang before the glass wine cellar), pâté, "adult" potato salad, cheese platter, mixed appetizers incl. figs · soups such as mushroom consommé (¥660 in February 2025) and Shogoin-turnip soup · Italian wines by the glass and bottle (Tabelog; 2025–26 reviews)',
    website: null, gmaps: gm('hikari-yurari 京都 押小路'), menu_url: null,
    notes: "[Italian wine bar · Oshikoji, a hidden basement counter] A ten-seat basement counter near City Hall, with jazz, a glass wine cellar and hams hanging behind the bar: Italian small plates — prosciutto, pâté, an 'adult' potato salad, cheese — cooked by a single chef and matched with Italian wine. Reservation only, for drinkers (non-drinkers are steered away); ¥600 cover. About ¥10,000–15,000 a head. Closed Tuesday and alternate Mondays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who runs the kitchen alone (July 2024 review)'], origin: null,
      background: 'Per a July 2024 review: in business for 22 years, 12 of them at the present site. Tabelog Italian WEST "Tabelog 100" 2021 and 2023.',
      philosophy: null, specialty: 'Prosciutto; wine pairing.',
      anecdotes: [
        { text: '"Please do not visit if you do not drink alcohol." — June 2025; another June 2025 reviewer says the shop asks about this when you call.', source: R + 'B513215178/' },
        { text: 'The chef works the kitchen alone and comes across as shy but answers if spoken to — July 2024.', source: R + 'B489632429/' },
        { text: 'A February 2025 pair found the service somewhat lacking and the portions small for the price, calling it more a wine bar than an Italian restaurant.', source: R + 'B503541255/' },
        { text: 'The owner explained each dish in detail, with a real passion for pairing — June 2026.', source: R + 'B529572400/' },
      ],
      japanese_sources_summary: '食べログ: hikari-yurari、イタリアン・ワインバー、中京区押小路通麩屋町東入橘町611-1 ヴァインオークトゥエルブ B1F、京都市役所前駅から徒歩5分、月水〜日・祝 18:00〜23:00 (L.O. 料理22:00・ドリンク22:30、最終入店22:00)、火曜と隔週月曜休み、完全予約制、前日までに人数変更の連絡がない場合1人7,000円、当日キャンセルは提携の法律事務所を通じて請求、チャージ600円 (税別)、10席 (カウンターのみ)、禁煙、カード可、イタリアン WEST 百名店 2021・2023。口コミ (2024年7月〜2026年10月、英語): 創業22年・現在地12年 (2024年)、シェフ一人、ジャズ、生ハムの盛り合わせ、パテ、大人のポテトサラダ、チーズ、きのこのコンソメ660円、聖護院かぶのスープ、お酒を飲まない人には向かない。',
      confidence: 'medium', sources: [TB, R + 'B458590194/', R + 'B489632429/', R + 'B500545713/', R + 'B501766638/', R + 'B502516538/', R + 'B503541255/', R + 'B509864473/', R + 'B513215178/', R + 'B529572400/', R + 'B536999445/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; you will be asked if you drink; ¥600 cover; counter only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区押小路通麩屋町東入橘町611-1 ヴァインオークトゥエルブ B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012114, 135.766069); cross-checked: GSI 京都府京都市中京区橘町611番地 (lot) 11m; 7.5 m from kyoto_yakitori_kyoto_tachibana; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500545713/', TB],
    price_note: 'No menu read; soup price from a February 2025 review; cover charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Mushroom consommé soup', '¥660', 'Starters', 'ask', 'no', 'February 2025.', 'mushroom_consomme'),
      it('', '', 'Assorted prosciutto', '', 'Charcuterie', 'ask', 'no', '', 'prosciutto'),
      it('', '', 'Cover charge', '¥600 + tax', 'Charges', '', '', '', 'cover'),
    ] }, {
    cuisine: 'イタリアンのワインバーとカウンターの厨房: シェフが選んだ食材の料理と、合わせるワイン (2025〜26年の口コミ)・生ハムの盛り合わせ (ガラスのワインセラーの前に生ハムが下がる)、パテ、大人のポテトサラダ、チーズの盛り合わせ、無花果入りの前菜盛り合わせ・きのこのコンソメ (2025年2月 660円)、聖護院かぶのスープ・イタリアワインをグラスとボトルで (食べログ、2025〜26年の口コミ)',
    neighborhood: '麩屋町の東の押小路通、地下。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。イタリアンの小皿: 生ハム、パテ、ポテトサラダ、チーズ、スープ、パスタ。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。生ハム、パテ、チーズが中心 (2025〜26年の口コミ)。',
    notes: '[イタリアンのワインバー・押小路、地下の隠れカウンター] 市役所に近い地下の10席のカウンター。ジャズが流れ、ガラスのワインセラーと生ハムが並ぶ。シェフ一人が作る生ハム、パテ、大人のポテトサラダ、チーズなどのイタリアンの小皿を、合わせたイタリアワインと。完全予約制でお酒を飲む人向け (飲まない人には向かない)、チャージ600円。1人1万〜1万5千円ほど。火曜と隔週月曜休み。',
  });
}

save();
