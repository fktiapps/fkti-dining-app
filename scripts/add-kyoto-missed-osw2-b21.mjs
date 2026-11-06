// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 21.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, first two lane ids):
//   + Planetarium Cafe&Bar Misora (planetarium café and bar in a Gion building; since 2022)
//   + カフェビストロ オーボンモルソー Cafe Bistro Au Bon Morceau (Lyonnaise bistro off Kawaramachi-Sanjo; since 2001)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   - 時菜今日萬祇園 (26031429) skipped: a KIWA Corporation restaurant (Tabelog lists kiwa-group.co.jp/kyouman_gion/ as its website;
//     the invoice number belongs to 際コーポレーション株式会社) — a sub-brand of a large parent.
//   - 先斗町焼肉 きらく (26041041) skipped: chain, counted across concepts — RIC2 Inc. runs 焼肉きらく in Kitashinchi, Fukuoka, Nagoya,
//     Sapporo and Kyoto (5 addresses on ric2.co.jp/brand/yakiniku-kiraku) plus しゃぶしゃぶすき焼き きらく in Pontocho and
//     Kitashinchi = 7 きらく shops.
//   + 鰻・割烹 戸石 Unagi Kappo Toishi (crisp Kansai-style eel and seasonal kappo; since 2024)
//   + 喫茶 ソワレ Kissa Soiree (blue-lit 1948 kissaten famous for jelly punch)
//   None is in data/kyoto.json: grep by id, name (Misora, オーボンモルソー/Au Bon Morceau, 戸石/Toishi, ソワレ/Soiree) and address
//   (祇園町北側281, 恵比須町534, 晴明町682, 真町95) found none.
//   Same-name counts (Samboa ruling, across concepts): Misora, オーボンモルソー, 戸石, ソワレ — one listing each in the Tabelog crawl.
//   Service charges checked against Tabelog’s Japanese original: Misora 「オープンから17時まで520円(税込)17時以降1020円(税込)」 (a
//   seat charge); オーボンモルソー 「なし」 (a September 2026 reviewer mentions a 5% service charge — both recorded); 戸石 — the English
//   page says a service charge is added, but the original reads 「無し」; ソワレ none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26031429', '時菜今日萬祇園: a KIWA Corporation restaurant (Tabelog lists kiwa-group.co.jp/kyouman_gion/ as its website; invoice T6013201002188 belongs to 際コーポレーション株式会社) — a sub-brand of a large parent (brief, 2026-11-05)');
skip('26041041', 'chain, counted across concepts: RIC2 Inc. runs 焼肉きらく at 5 addresses (Kitashinchi, Fukuoka, Nagoya, Sapporo, Kyoto — ric2.co.jp/brand/yakiniku-kiraku) plus しゃぶしゃぶすき焼き きらく in Pontocho and Kitashinchi = 7 きらく shops');

// ================================================================ Planetarium Cafe&Bar Misora
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037831/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']); const WE = day(['12:00', '23:00']);
  put({
    id: 'kyoto_planetarium_misora', name: 'Planetarium Cafe&Bar Misora', category: 'OMNI',
    lat: 35.004472, lng: 135.776277, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cocktails, drinkable parfaits, churros and bar snacks; no gluten information is published (2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many drinks and mocktails may suit, but parfaits, desserts and snacks (prosciutto and mozzarella) use dairy or meat; no ingredient list is published (2024–26 reviews).',
    hours_raw: '17:00–23:00 Monday to Friday; 12:00–23:00 Saturday, Sunday and holidays (last order 22:30, last entry 22:00); open year-round (Tabelog). Seat charge: ¥520 until 17:00, ¥1,020 after 17:00, tax included (Tabelog’s Japanese original: 「オープンから17時まで520円(税込)17時以降1020円(税込)」); small snacks come with drinks (2025–26 reviews). Bookings taken; advised on Friday and Saturday nights (July 2024). 20 seats: 14 at tables (deep sofas) and 6 at the counter; cards and PayPay (Tabelog). Very dim inside, with stars and a moon projected round the walls (2024–26 reviews). On the 4th floor of 祇園ファーストビル on the north side of Gion, in an ordinary mixed-use building that can be hard to spot; 5 min from Gion-Shijo Stn (Tabelog; 2025–26 reviews). Opened 7 July 2022 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'North side of Gion near Yasaka Shrine — 5 min from Gion-Shijo Stn',
    cuisine: 'Planetarium café and bar under a projected starry sky (2024–26 reviews) · original cocktails such as Shooting Star (apple), Eclat (mango), Apollo (chocolate liqueur and cranberry sorbet), Soleil, with star-shaped ice or pineapple; drinks from ¥780 (July 2024) · five or more non-alcoholic cocktails, Shirley Temple · limited drinkable parfaits (mango, berry), chocolate churros, prosciutto and mozzarella (2024–26 reviews)',
    website: null, gmaps: gm('Planetarium Cafe&Bar Misora 祇園'), menu_url: TB,
    notes: "[Café & bar · Gion, cocktails under a planetarium sky] A dim café-bar on the fourth floor of an ordinary Gion building, where a planetarium projector fills the walls with stars and a moon over deep sofas — billed as Kyoto's first planetarium café and bar. Space-themed cocktails with star-shaped ice (from about ¥780), plenty of mocktails, drinkable parfaits and churros. Seat charge ¥520 by day, ¥1,020 after 17:00. Book on weekend nights. Open daily, to 23:00.",
    chef_bio: { chef_name: null, roles: ['Not named in any source found'], origin: null,
      background: 'Opened 7 July 2022 (Tabelog). Reviewers call it the first planetarium café and bar in Kyoto (May 2025, May 2026), with a projector made by a planetarium designer (May 2026).',
      philosophy: null,
      specialty: 'Space-themed cocktails; drinkable parfaits.',
      anecdotes: [
        { text: 'A July 2024 visitor found the moon-shaped table lamps and star-shaped pineapple garnishes a sign of the care for detail.', source: R + 'B488163840/' },
        { text: 'A February 2025 visitor found it too dark for table photos, but liked the complimentary salty snacks.', source: R + 'B501318644/' },
      ],
      japanese_sources_summary: '食べログ: Planetarium Cafe&Bar Misora、バー・カフェ・バル、東山区祇園町北側281-1 祇園ファーストビル 4F、祇園四条駅から徒歩5分、月〜金 17:00〜23:00、土日祝 12:00〜23:00 (L.O. 22:30、最終入店22:00)、無休、チャージ オープンから17時まで520円・17時以降1,020円 (税込)、予約可、20席 (テーブル14、カウンター6)、カード・PayPay 可、2022年7月7日オープン。口コミ (2024〜2026年、英語): 京都初のプラネタリウムカフェ&バー、星と月の投影、オリジナルカクテル、星形の氷、ノンアルコールカクテル、飲むパフェ、チュロス、お通しの小皿。',
      confidence: 'medium', sources: [TB, R + 'B488163840/', R + 'B492101736/', R + 'B501318644/', R + 'B502562245/', R + 'B507044140/', R + 'B507505313/', R + 'B514555712/', R + 'B521036106/', R + 'B524855441/', R + 'B528230562/', R + 'B528886584/', R + 'B531559365/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Seat charge ¥520–1,020; very dark room; book on weekend nights.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側281-1 祇園ファーストビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004472, 135.776277); cross-checked: GSI 京都府京都市東山区祇園町北側281番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B488163840/'],
    price_note: 'Seat charge from Tabelog; drink price from a July 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Seat charge (after 17:00)', '¥1,020', 'Charge', '', '', '¥520 until 17:00.', 'charge'),
      it('', '', 'Original cocktails', '¥780', 'Drinks', 'ask', 'ask', 'From ¥780 (July 2024).', 'cocktails'),
    ] }, {
    cuisine: '投影された星空の下のプラネタリウムのカフェとバー (2024〜2026年の口コミ)・Shooting Star (りんご)、Eclat (マンゴー)、Apollo (チョコレートリキュールとクランベリーのシャーベット)、Soleil などのオリジナルカクテル、星形の氷やパイナップル、お酒は780円から (2024年7月)・5種以上のノンアルコールカクテル、シャーリー・テンプル・期間限定の飲むパフェ (マンゴー、ベリー)、チョコレートのチュロス、生ハムとモッツァレラ (2024〜2026年の口コミ)',
    neighborhood: '八坂神社に近い祇園の北側。祇園四条駅から徒歩5分',
    gf_detail: '要確認。カクテル、飲むパフェ、チュロス、バーのおつまみ。グルテンの情報は公開されていない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。飲み物やノンアルコールカクテルは合うものも多そうだが、パフェ、デザート、おつまみ (生ハムとモッツァレラ) は乳製品や肉を使う。原材料は公開されていない (2024〜2026年の口コミ)。',
    notes: '[カフェ&バー・祇園、プラネタリウムの空の下のカクテル] 祇園のふつうのビルの4階にある薄暗いカフェバー。プラネタリウムの投影機が深いソファの上の壁に星と月を映す、京都初のプラネタリウムカフェ&バーという。星形の氷の宇宙がテーマのカクテル (780円ほどから)、ノンアルコールカクテルも豊富、飲むパフェやチュロスも。チャージは昼520円、17時以降1,020円。週末の夜は予約を。無休、23時まで。',
  });
}

// ================================================================ カフェビストロ オーボンモルソー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26030895/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_au_bon_morceau', name: 'カフェビストロ オーボンモルソー (Cafe Bistro Au Bon Morceau)', category: 'MOM_AND_POP',
    lat: 35.009577, lng: 135.769971, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lyonnaise bistro food with bread, gratinéed onion soup, sausages and sauces; Tabelog lists vegetarian options, but no gluten information is published (Tabelog; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the menu centres on meat, offal and fish, with butter and cream; no vegan dish is named (Tabelog; 2025–26 reviews).',
    hours_raw: '17:30–24:00 (last orders food 23:00, drinks 23:30); closed Tuesday and the third Wednesday (Tabelog). Bookings taken; busy on Friday nights (August 2026). Tabelog’s Japanese original lists no service charge (「なし」), while a September 2026 reviewer mentions a 5% service charge. 26 seats: a counter of 4 and tables; non-smoking; cards; English menu; school-age children welcome (Tabelog). Walls covered with French paintings, posters and plates collected by the chef (2025–26 reviews). Off Kawaramachi-dori north of Sanjo, by Aneyakoji; moved here about 2018 from near Nishiki Market / Teramachi; 5 min from Kyoto-Shiyakusho-mae or Sanjo Stn (Tabelog; 2025–26 reviews). Opened 2001 (2025–26 reviews).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Off Kawaramachi north of Sanjo — 5 min from Kyoto-Shiyakusho-mae Stn',
    cuisine: 'Traditional Lyonnaise bistro cooking with organic wines (Tabelog; 2025–26 reviews) · AAAAA-certified andouillette, the house speciality · boudin noir, branded sausages · escargots bourguignonne, French onion soup, soupe de poisson, foie gras terrine, smoked mackerel and potato salad, salmon salad · steak, onglet, beef braised in red wine with macaroni, horse tartare with chips · crêpes Suzette, baba · a starter-and-main set ¥2,000 (May 2025); glass of Côtes du Rhône ¥900 (September 2026) · bread served in a paper bag',
    website: null, gmaps: gm('オーボンモルソー 河原町三条'), menu_url: TB,
    notes: "[French bistro · Kawaramachi-Sanjo, Lyon in a cluttered room] A crowded, cheerful Lyonnaise bistro off Kawaramachi, its walls covered with French paintings and posters, run since 2001 by chef Masaki Kubo, who trained in Osaka, Tokyo, Lyon and Paris. The speciality is andouillette — the shop holds the AAAAA certification, the first outside France — alongside boudin noir, escargots, onion soup, steak and red-wine beef, with crêpes Suzette to finish and organic wines. Good value; book on Fridays. Closed Tuesday.",
    chef_bio: { chef_name: 'Masaki Kubo', roles: ['Owner-chef (November 2025 review)'], origin: 'Kyoto (November 2025 review).',
      background: 'Per a November 2025 reviewer: owner-chef Masaki Kubo, born in Kyoto, studied French cooking in Osaka and Tokyo after high school, honed it in Lyon and Paris, and opened the restaurant in 2001; the paintings, posters and coasters on the walls are the chef’s collection. Per a September 2026 reviewer: the chef has pursued the perfect andouillette since meeting it in Paris, and the restaurant holds the first certification outside France from the Association Amicale des Amateurs d’Andouillette Authentique (AAAAA); the shop has been at the present address about eight years. Tabelog’s introduction says it moved from Teramachi. Name known only in Latin letters.',
      philosophy: null,
      specialty: 'AAAAA andouillette; Lyonnaise bistro dishes.',
      anecdotes: [
        { text: 'A November 2026 solo diner, sent here by a chef from another restaurant, was let in ten minutes before opening.', source: R + 'B538548172/' },
        { text: 'An April 2026 regular found prices and portions less satisfying than before, perhaps due to recent costs.', source: R + 'B526161495/' },
        { text: 'An April 2026 diner noticed French customers too and took it as a sign of quality.', source: R + 'B526783717/' },
      ],
      japanese_sources_summary: '食べログ: カフェビストロ オーボンモルソー、ビストロ・フレンチ・カフェ、中京区河原町通三条上ル東入恵比須町534-18 ステラム 1F、京都市役所前駅・三条駅から徒歩5分、17:30〜24:00 (L.O. 料理23:00・ドリンク23:30)、火曜と第3水曜休み、予約可、サービス料なし、26席 (カウンター4、テーブル22)、禁煙、カード可、英語メニュー、ベジタリアンメニュー、小学生以上可、寺町通から移転、リヨンの伝統料理とオーガニックワイン、2018年6月22日 (現在地)。口コミ (2025〜2026年、英語): オーナーシェフ Masaki Kubo (京都生まれ、大阪・東京・リヨン・パリで修業、2001年開業)、AAAAA 認定のアンドゥイエット、ブーダン・ノワール、エスカルゴ、オニオングラタンスープ、ステーキ、前菜とメインのセット2,000円、サービス料5%という声。',
      confidence: 'medium', sources: [TB, R + 'B363241242/', R + 'B430958290/', R + 'B506469874/', R + 'B506792026/', R + 'B508311041/', R + 'B508794089/', R + 'B517312909/', R + 'B523593026/', R + 'B526161495/', R + 'B526783717/', R + 'B535611297/', R + 'B538548172/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); book on Fridays.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条上ル東入恵比須町534-18 ステラム 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.009577, 135.769971); cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506469874/', R + 'B535611297/'],
    price_note: 'Prices from May 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Starter and main set', '¥2,000', 'Set', 'ask', 'no', 'May 2025.', 'set'),
      it('', 'andouillette', 'AAAAA andouillette', '', 'Mains', 'ask', 'no', 'House speciality.', 'andouillette'),
    ] }, {
    cuisine: 'オーガニックワインとリヨンの伝統的なビストロ料理 (食べログ、2025〜2026年の口コミ)・名物は AAAAA 認定のアンドゥイエット・ブーダン・ノワール、ブランドソーセージ・エスカルゴのブルゴーニュ風、オニオングラタンスープ、スープ・ド・ポワソン、フォアグラのテリーヌ、燻製サバとじゃがいものサラダ、サーモンのサラダ・ステーキ、ハラミ、牛の赤ワイン煮とマカロニ、馬肉のタルタルとフリット・クレープ・シュゼット、ババ・前菜とメインのセット2,000円 (2025年5月)、コート・デュ・ローヌのグラス900円 (2026年9月)・パンは紙袋で',
    neighborhood: '三条の北、河原町通の脇。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。パン、グラタンのオニオンスープ、ソーセージ、ソースのリヨンのビストロ料理。食べログではベジタリアンメニューありだが、グルテンの情報は公開されていない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありだが、肉、内臓、魚にバターやクリームの料理が中心で、ヴィーガンの料理は挙がっていない (食べログ、2025〜2026年の口コミ)。',
    notes: '[フレンチビストロ・河原町三条、雑然とした部屋のリヨン] 河原町の脇にある、壁一面にフランスの絵やポスターが飾られたにぎやかなリヨン料理のビストロ。大阪、東京、リヨン、パリで修業した Masaki Kubo シェフが2001年から営む。名物はアンドゥイエットで、フランス国外で初めて AAAAA の認定を受けたという。ブーダン・ノワール、エスカルゴ、オニオンスープ、ステーキ、牛の赤ワイン煮、締めはクレープ・シュゼットとオーガニックワイン。お手頃で、金曜は予約を。火曜休み。',
  });
}

// ================================================================ 鰻・割烹 戸石
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040999/'; const R = TB + 'dtlrvwlst/'; const TC = 'https://www.tablecheck.com/unagikappo-toishi';
  const H = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_unagi_kappo_toishi', name: '鰻・割烹 戸石 (Unagi Kappo Toishi)', category: 'OMNI',
    lat: 35.013628, lng: 135.76557, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Eel grilled with a sweet tare, tempura and dashi dishes; plain shirayaki is also served, but no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant with seasonal fish and crab courses (2026 reviews; Tabelog).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:00) and dinner 18:00–23:00 (last order 21:00), daily (Tabelog). Reservation only, with the donabe rice timed to your arrival (September 2026). Tabelog’s English page says a service charge is added, but its Japanese original reads 「無し」 (none). 16 seats: a counter of about 10 and tables; non-smoking; no children under 10; cards (Tabelog). Parking very close by (July 2026). About 5 min from Kyoto-Shiyakusho-mae Stn exit 11 (Tabelog). Opened 3 April 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Between Kyoto City Hall and Karasuma-Oike — 5 min from Kyoto-Shiyakusho-mae Stn',
    cuisine: 'Kansai-style jiyaki eel — grilled without steaming for a crisp skin — with seasonal kappo dishes (2026 reviews) · unaju of 1.5 eels (September 2026) · course ¥7,800 (July 2026); seasonal eel course ¥10,000 (September 2026): starters, sashimi, soup, chilled eel with myoga and cucumber in dashi jelly, tempura, kabayaki and shirayaki · donabe rice cooked to order with rice from the rice shop "Hachidaime Gihei" · male eels from Isshiki, per a July 2026 reviewer · crab and game in season (Tabelog categories)',
    website: null, gmaps: gm('鰻・割烹 戸石 晴明町'), menu_url: TC,
    notes: "[Eel · City Hall, crisp jiyaki eel with kappo courses] A sixteen-seat counter-and-table eel kappo near Kyoto City Hall, opened in 2024 by a young chef who previously grilled eel at the Gion restaurant 時菜今日萬, per reviewers. The eel is grilled Kansai-style without steaming, for a crackling skin — some love it, one reviewer found it dry — served as unaju or in seasonal courses (about ¥7,800–10,000) with tempura and rice cooked in a donabe to your arrival. Booking only; no children under 10.",
    chef_bio: { chef_name: null, roles: ['Young owner-chef (not named) with the okami (September 2026 reviews)'], origin: null,
      background: 'Opened 3 April 2024 (Tabelog). Reviewers who followed the chef say the eel was cooked earlier at 時菜今日萬 (Tokina Kyo-man) in Gion (September 2026). Reviewers describe a young, friendly chef at the counter and the owner and okami chatting with guests (September 2026). The rice comes from "Hachidaime Gihei" (July and September 2026).',
      philosophy: null,
      specialty: 'Crisp jiyaki eel; donabe rice.',
      anecdotes: [
        { text: 'A September 2026 regular who followed the chef from 時菜今日萬 chooses restaurants by who is cooking, not where.', source: R + 'B492647190/' },
        { text: 'A September 2026 diner found the eel more crunchy than crispy, firm and in parts like eel jerky, with a thick, sweet sauce.', source: R + 'B536403051/' },
        { text: 'Another September 2026 diner, who had eaten the chef’s eel three times, preferred the richer, fattier style of the 今日萬 days.', source: R + 'B538472591/' },
      ],
      japanese_sources_summary: '食べログ: 鰻・割烹 戸石、うなぎ・かに・ジビエ料理、中京区晴明町682、京都市役所前駅11番出口から徒歩約5分、11:30〜15:00 (L.O. 14:00)・18:00〜23:00 (L.O. 21:00)、無休、サービス料無し、16席 (カウンター10、テーブル6)、禁煙、10歳未満不可、カード可、2024年4月3日オープン。口コミ (2026年5〜9月、英語): 蒸さずに焼く関西風の鰻、パリッとした皮、うな重 (1.5尾)、コース7,800円・季節の鰻のコース10,000円、土鍋ご飯、時菜今日萬で焼いていた料理人、若い大将と女将、焼きすぎて硬いという声も。',
      confidence: 'medium', sources: [TB, TC, R + 'B492647190/', R + 'B527723820/', R + 'B531944554/', R + 'B532542381/', R + 'B532713105/', R + 'B535268732/', R + 'B535537933/', R + 'B536294617/', R + 'B536307111/', R + 'B536403051/', R + 'B536446299/', R + 'B538472591/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booking only; no children under 10.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区晴明町682',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog and TableCheck listings; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013628, 135.76557); cross-checked: GSI 京都府京都市中京区晴明町682番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532713105/', R + 'B535268732/', R + 'B492647190/'],
    price_note: 'Course prices from July and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Eel and seasonal kappo course', '¥7,800', 'Course', 'ask', 'no', 'July 2026; a ¥10,000 seasonal eel course in September 2026.', 'course'),
      it('うな重', 'unaju', 'Unaju (1.5 eels)', '', 'Eel', 'ask', 'no', 'September 2026.', 'unaju'),
    ] }, {
    cuisine: '蒸さずに焼いて皮をパリッとさせる関西風の地焼きの鰻と季節の割烹料理 (2026年の口コミ)・1.5尾のうな重 (2026年9月)・コース7,800円 (2026年7月)、季節の鰻のコース10,000円 (2026年9月): 前菜、お造り、お椀、茗荷と胡瓜の鰻のだしジュレ、天ぷら、蒲焼と白焼・来店に合わせて炊く土鍋ご飯、米は Hachidaime Gihei のもの・Isshiki の雄の鰻という口コミ (2026年7月)・季節には蟹やジビエも (食べログのジャンル)',
    neighborhood: '京都市役所と烏丸御池の間。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。甘いたれで焼く鰻、天ぷら、だしの料理。白焼もあるが、グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰻の店で、季節の魚や蟹のコース (2026年の口コミ、食べログ)。',
    notes: '[うなぎ・市役所前、パリッと焼く地焼きの鰻と割烹のコース] 京都市役所近くの16席の鰻の割烹。口コミによれば、祇園の時菜今日萬で鰻を焼いていた若い料理人が2024年に開いた。鰻は蒸さずに関西風に焼き、皮はパリパリ。大好きな人もいれば、乾いていたという声も。うな重や季節のコース (7,800〜10,000円ほど) で、天ぷらと来店に合わせて土鍋で炊くご飯とともに。予約制、10歳未満不可。',
  });
}

// ================================================================ 喫茶 ソワレ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000763/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.soiree-kyoto.com/'; const ABOUT = SITE + 'about/'; const MENU = SITE + 'menu/';
  const WD = day(['13:00', '19:00']); const WE = day(['13:00', '19:30']);
  put({
    id: 'kyoto_kissa_soiree', name: '喫茶 ソワレ (Kissa Soiree)', category: 'OMNI',
    lat: 35.004181, lng: 135.770347, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The menu is mostly drinks, jelly drinks, ice cream and floats, with cakes and thick toast; no gluten information is published (official menu).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The official menu says the five-colour jelly is not agar (so likely gelatin), and many drinks use milk, yogurt or ice cream; plain coffee, tea and sodas may suit (official menu).',
    hours_raw: '13:00–19:00 Tuesday to Friday (last order 18:00); 13:00–19:30 Saturday, Sunday and holidays (last order 18:30); closed Monday, even on holidays; a monthly opening calendar is posted on the official site (official site; Tabelog). No bookings; queues of several groups at weekends (Tabelog; September–October 2026). 52 seats on two floors, small and narrow to fit the Japanese builds of the 1940s; fully non-smoking since October 2016; cards (official site; Tabelog). No background music, and blue lighting throughout (official site). About 30 m from Kyoto-Kawaramachi Stn exit 1A, on Nishi-Kiyamachi north of Shijo (official site). Opened 11 April 1948 (official site).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Kiyamachi north of Shijo, by the Takase River — 1 min from Kyoto-Kawaramachi Stn',
    cuisine: 'Blue-lit kissaten famous for five-colour jelly drinks (official site) · jelly punch with Kobe local cider ¥850, jelly punch float ¥950, yogurt punch ¥1,000, jelly milk ¥800, jelly yogurt ¥850, jelly coffee ¥850, jelly wine ¥900, jelly coffee float ¥950 · ice cream ¥800, seasonal ice cream ¥850, orange sherbet ¥800, kiwi float (May–December) ¥950 · cream soda in six colours ¥800, cream coffee ¥800, cream cocoa ¥850, cream cola ¥800 · cake ¥550, thick toast to share (butter and cinnamon sugar, jam and marmalade, or chocolate and cream) ¥650 · blend coffee in Koransha cups with line drawings made for the shop by 東郷青児 (official menu) · iced lemon tea ¥650 (September 2026)',
    website: SITE, gmaps: gm('喫茶ソワレ 西木屋町'), menu_url: MENU,
    notes: "[Kissaten · Kawaramachi, jelly punch under blue light since 1948] A two-floor coffee house by the Takase River, opened in 1948 and designed with artist friends of the founder: carved wood by the sculptor 池野禎春, blue lights chosen by a dye scholar, paintings by 東郷青児 and other Nika-kai artists, and no background music. Order the jelly punch (¥850) — five colours of jelly sparkling in soda, created by the second owner's wife in the 1970s — or a cream soda, with thick toast to share. Chairs are small; expect a queue at weekends. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Family-run since 1948 (founder 元木和夫; jelly menu by 元木成子, wife of the second owner); current owner not named'], origin: null,
      background: 'Per the official site: opened on 11 April 1948, just after the war; the building and furnishings were created by the founder 元木和夫’s cultural friends — painter 佐々木良三, sculptor 池野禎春 (whose French training shaped the carved interior), dye scholar 上村六郎 (who suggested the blue light that makes women look beautiful and men young) and count-poet 𠮷井勇 (whose poem stands by the door); the line drawings on the cups were drawn for the shop by 東郷青児; 元木成子 (1937–1991), wife of the second owner, created the jelly drinks — first jelly milk for a daughter who disliked milk, then jelly punch from 1975 to bring in young women. The shop sells original Koransha cups and holds the jelly punch trademark (official site).',
      philosophy: 'Per the official site: "Soirée" means an evening party — a dreamlike room that feels like night even by day.',
      specialty: 'Jelly punch; cream soda.',
      anecdotes: [
        { text: 'A September 2026 visitor found the jelly almost tasteless and the soda faint, but loved how it looked.', source: R + 'B535700086/' },
        { text: 'A September 2026 Sunday visitor waited 20 minutes behind four groups.', source: R + 'B537272793/' },
        { text: 'A September 2026 visitor noted the cramped seats are sized for the bodies of an earlier era.', source: R + 'B536548664/' },
      ],
      japanese_sources_summary: '公式サイト (soiree-kyoto.com): 喫茶ソワレ、京都河原町、昭和23年創業の老舗喫茶、1948年4月11日開店、建物や調度品は洋画家 佐々木良三、彫刻家 池野禎春、大学教授 上村六郎、伯爵歌人 𠮷井勇らの文化人が創った、BGM なし、青い照明、座席は当時の日本人の体格に合わせて小さい、ソワレはフランス語で「夜会」、東郷青児の線画、有田 香蘭社のカップ12,000円、ゼリーの誘惑: 2代目オーナーの妻 元木成子が考案、ゼリーポンチは1975年から、ゼリーポンチ850円、ゼリーポンチフロート950円、ヨーグルトポンチ1,000円、ゼリーミルク800円、ゼリーヨーグルト850円、ゼリーコーヒー850円、ゼリーワイン900円、5色のゼリーは寒天ではない、神戸産の地サイダー、アイスクリーム800円、クリームソーダ6種800円、ケーキ550円、トースト650円、営業: 平日13:00〜19:00 (L.O. 18:00)、土日祝13:00〜19:30 (L.O. 18:30)、月曜定休 (祝日も休業)、下京区西木屋町通四条上る真町95、京都河原町駅1A番出口から約30m。食べログ: 喫茶店、予約不可、52席、2016年10月から全面禁煙、カード可。口コミ (2026年9〜10月、英語)。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, R + 'B486981537/', R + 'B534893322/', R + 'B535035180/', R + 'B535484136/', R + 'B535700086/', R + 'B536272776/', R + 'B536548664/', R + 'B536911562/', R + 'B537126677/', R + 'B537131135/', R + 'B537272793/', R + 'B537475600/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No bookings; weekend queues; small seats; no music.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西木屋町四条上ル真町95',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 calendar) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004181, 135.770347); cross-checked: GSI 京都府京都市下京区真町95番地 (lot) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu (2026).', last_checked: TODAY, items: [
      it('ゼリーポンチ', '', 'Jelly punch (five-colour jelly in Kobe cider)', '¥850', 'Jelly drinks', 'ask', 'no', 'The jelly is not agar.', 'jelly_punch'),
      it('ゼリーポンチフロート', '', 'Jelly punch float', '¥950', 'Jelly drinks', 'ask', 'no', '', 'jelly_punch_float'),
      it('クリームソーダ', '', 'Cream soda (six colours)', '¥800', 'Floats', 'ask', 'no', '', 'cream_soda'),
      it('トースト', '', 'Thick toast to share', '¥650', 'Cake & toast', 'no', 'ask', '', 'toast'),
    ] }, {
    cuisine: '5色のゼリーのドリンクで有名な青い照明の喫茶 (公式サイト)・神戸産の地サイダーのゼリーポンチ850円、ゼリーポンチフロート950円、ヨーグルトポンチ1,000円、ゼリーミルク800円、ゼリーヨーグルト850円、ゼリーコーヒー850円、ゼリーワイン900円、ゼリーコーヒーフロート950円・アイスクリーム800円、季節のアイスクリーム850円、オレンジシャーベット800円、キウイフロート (5月頃〜12月) 950円・6色のクリームソーダ800円、クリームコーヒー800円、クリームココア850円、クリームコーラ800円・ケーキ550円、分厚いトースト (バターとシナモンシュガー、ジャムとマーマレード、チョコレートとホイップクリーム) 650円・東郷青児の線画の香蘭社のカップのブレンドコーヒー (公式メニュー)・アイスレモンティー650円 (2026年9月)',
    neighborhood: '四条の北、高瀬川沿いの西木屋町。京都河原町駅から徒歩1分',
    gf_detail: '要確認。メニューは飲み物、ゼリーのドリンク、アイス、フロートが中心で、ケーキと分厚いトーストもある。グルテンの情報は公開されていない (公式メニュー)。',
    vegan_detail: '要確認。公式メニューでは5色のゼリーは寒天ではないとあり (ゼラチンの可能性)、多くの飲み物に牛乳、ヨーグルト、アイスを使う。コーヒー、紅茶、ソーダは合いそう (公式メニュー)。',
    notes: '[喫茶・河原町、1948年からの青い光のゼリーポンチ] 高瀬川沿いの2階建ての喫茶。1948年に創業者の芸術家の友人たちとつくった店: 彫刻家 池野禎春の木彫、染色研究家が選んだ青い照明、東郷青児ら二科会の画家の絵、BGM はなし。注文はゼリーポンチ (850円) を。ソーダの中で5色のゼリーがきらめく、2代目オーナーの妻が1970年代に考えたもの。クリームソーダや分け合う分厚いトーストも。椅子は小さめ、週末は行列。月曜休み。',
  });
}

save();
