// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 28.
//   + ピッツェリア ダ ナギーノ PIZZERIA DA NAGHINO (Neapolitan wood-fired pizza at Higashiyama Sanjo; core list)
//   + バルケッタ barchetta (sommelier's wine bar by Matsubara Karasuma, with piano; core list)
//   + のんき亭 Nonki Tei (Gion Shinbashi kappo with a seafood box, owner-recommended à la carte; notable list)
//   + 炭火焼肉KINOE Sumibi Yakiniku KINOE (Kobe-beef yakiniku in a machiya by Marutamachi; notable list)
//   Picked 2026-11-05 after batch 27. `queue.mjs kyoto-missed next core 200`: ピッツェリア ダ ナギーノ 26029387, 京都ラーメン
//   きんざん 市役所前店 26039983 (skipped, branch of a brand in data), バルケッタ 26005585. `next notable 200`: のんき亭
//   26001355, 炭火焼肉KINOE 26028457. Same-name check first, same brand or operator only: のんき亭 has a sister, Bistro Nonki
//   (Tabelog remarks), not in data; KINOE was formerly 嘉 and is run by a Kobe-beef meat shop (web), no other shop of either name
//   in data; no other ナギーノ or バルケッタ in our crawls. None of the four is in data/kyoto.json: grep by name and address
//   (七軒町20, 玉津島町307, 橋本町405, 駒之町535) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-28');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26039983', '京都ラーメン きんざん 市役所前店: a branch of 京都ラーメン きんざん, whose 七条本店 is already in data (kyr_kyoto_ramen_kinzan_shich) — a branch of a brand already in data is skipped (integrator group line, 2026-11-05).');

// ================================================================ ピッツェリア ダ ナギーノ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26029387/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.naghino-kyoto.com/';
  const H = day(['11:30', '14:30'], ['17:30', '21:00']);
  put({
    id: 'kyoto_pizzeria_da_naghino', name: 'ピッツェリア ダ ナギーノ (PIZZERIA DA NAGHINO)', category: 'OMNI',
    lat: 35.009369, lng: 135.777220, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a Neapolitan pizzeria — wheat-dough pizzas from a wood-fired oven, plus fritto and tiramisu (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A marinara-style pizza without cheese may be possible, but the menu is built on mozzarella, buffalo mozzarella, sausage and prosciutto; no vegan information (2026 reviews).',
    hours_raw: 'Daily 11:30–14:30 and 17:30–21:00; hours may change (Tabelog). Reservations accepted; busy at lunch (February 2026). 20 seats incl. a counter close to the oven; narrow aisles — strollers must be folded, no high chairs (Tabelog; September 2026). Cards (VISA, JCB, AMEX, Diners) (Tabelog). Takeaway (Tabelog). Near the Higashiyama Sanjo crossing; 2 min walk from Higashiyama Stn exit 2 (Tabelog). Opened 7 August 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama Sanjo — 2 min walk from Higashiyama Stn',
    cuisine: 'Neapolitan pizzeria with a wood-fired oven imported from Italy and about 80% of ingredients from Italy, following traditional Neapolitan methods (Tabelog) · pizzas such as Margherita, Bufala, Quattro Formaggi with honey, Bismarck and Bismarck Bianco with mushrooms and egg, salsiccia with greens, \'nduja, prosciutto and arugula, half-and-half on request (2026 reviews) · caprese with buffalo mozzarella, sweet-shrimp fritto, marinated octopus, salad, tiramisu (2026 reviews) · lunch sets with salad and a drink (September 2026) · wine and beer in maiko-silhouette glasses (Tabelog; March 2026) · lunch about ¥1,000–2,000, dinner ¥2,000–4,000 (Tabelog)',
    website: WEB, gmaps: gm('ピッツェリア ダ ナギーノ 京都'), menu_url: null,
    notes: '[Pizza · Higashiyama Sanjo, Naples by wood fire] A lively little pizzeria near Higashiyama Sanjo built around an Italian wood-fired oven: chewy-crusted Neapolitan pizzas — Bufala, Quattro Formaggi with honey, an egg-topped Bismarck Bianco, \'nduja, salsiccia — with half-and-half on request, plus caprese and fritto. Lunch sets are good value; pizzas arrive fast. Young, friendly staff; one diner found plates cleared too briskly. Strollers must fold. Open daily.',
    chef_bio: { chef_name: null, roles: ['Pizzaiolo and staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a pizzeria dedicated to Naples in ingredients, methods and its Italian wood-fired oven, with seats close to the kitchen and about 80% of ingredients imported from Italy; opened 7 August 2017. Reviewers in 2026 describe young, kind and attentive staff ("The staff were incredibly cute as well", March 2026), quick service and many guests from abroad.',
      philosophy: 'Authentic Neapolitan methods and ingredients (Tabelog).', specialty: 'Bismarck Bianco; Quattro Formaggi with honey.',
      anecdotes: [
        { text: '"The Bismarck Bianco is absolutely amazing!!!!!!! It was so delicious that I felt tears of joy in my mouth." — September 2026.', source: R + 'B523617312/' },
        { text: '"The beer glasses featured a silhouette of a maiko, adding a charming Kyoto touch. ... The staff were incredibly cute as well." — March 2026.', source: R + 'B523609328/' },
        { text: '"However, the staff clearing the plates was a bit too quick, which felt somewhat rude." — June 2026.', source: R + 'B530924891/' },
      ],
      japanese_sources_summary: '食べログ: ピザ・イタリアン、東山区七軒町20-2 サングリーン1F、地下鉄東山駅2番出口から徒歩2分、東山三条の近く、毎日 11:30〜14:30・17:30〜21:00、予約可、20席、禁煙、カード可、テイクアウト、2017年8月7日オープン、ナポリにこだわり、イタリアから輸入した薪窯、食材の8割はイタリア産、伝統のナポリの製法。口コミ (2026年2月〜9月、英語): マルゲリータ、ブッファラ、クアトロフォルマッジに蜂蜜、ビスマルクとビスマルク・ビアンコ (きのこと卵)、サルシッチャ、ンドゥイヤ、生ハムとルッコラ、ハーフ&ハーフ可、ブッファラのカプレーゼ、甘海老のフリット、たこのマリネ、ティラミス、ランチセット、舞妓のシルエットのビアグラス、若いスタッフ、提供が速い、皿を下げるのが速すぎたとの声、通路が狭くベビーカーは畳む、子ども用の椅子はない。',
      confidence: 'medium', sources: [WEB, TB, R + 'B522936106/', R + 'B523609328/', R + 'B523617312/', R + 'B530460381/', R + 'B530924891/', R + 'B535164767/', R + 'B535189498/', R + 'B535570860/', R + 'B536115955/', R + 'B536615461/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book for lunch; half-and-half pizzas on request; strollers must fold; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区七軒町20-2 サングリーン 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009369, 135.777220); cross-checked: GSI 京都府京都市東山区七軒町20番地 (lot) 17 m; kyr_ryumon_honten is 27 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535570860/', R + 'B522936106/'],
    price_note: 'No menu prices read; lunch about ¥1,000–2,000, dinner ¥2,000–4,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Bismarck Bianco (mushrooms, egg)', '', 'Pizza', 'no', 'no', 'September 2026.', 'bismarck_bianco'),
      it('', '', 'Bufala', '', 'Pizza', 'no', 'no', 'September 2026.', 'bufala'),
      it('', '', 'Quattro Formaggi with honey', '', 'Pizza', 'no', 'no', 'February 2026.', 'quattro_formaggi'),
    ] }, {
    cuisine: 'イタリアから輸入した薪窯と、8割がイタリア産の食材で伝統的なナポリの製法を守るピッツェリア (食べログ)・マルゲリータ、ブッファラ、蜂蜜を添えるクアトロフォルマッジ、きのこと卵のビスマルクとビスマルク・ビアンコ、青菜のサルシッチャ、ンドゥイヤ、生ハムとルッコラなど、ハーフ&ハーフも可 (2026年の口コミ)・ブッファラのカプレーゼ、甘海老のフリット、たこのマリネ、サラダ、ティラミス (2026年の口コミ)・サラダとドリンク付きのランチセット (2026年9月)・ワインと舞妓のシルエットのグラスのビール (食べログ、2026年3月)・昼は1,000〜2,000円、夜は2,000〜4,000円ほど (食べログ)',
    neighborhood: '東山三条。東山駅から徒歩2分',
    gf_detail: 'グルテンフリーではない。薪窯で焼く小麦の生地のナポリピッツァ、フリット、ティラミス (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。チーズなしのピッツァもありうるが、モッツァレラ、ブッファラ、サルシッチャ、生ハムが中心。ヴィーガンの情報はない (2026年の口コミ)。',
    notes: '[ピッツァ・東山三条、薪窯のナポリ] 東山三条近くの、イタリアの薪窯を据えたにぎやかな小さなピッツェリア。もっちりした生地のナポリピッツァ (ブッファラ、蜂蜜のクアトロフォルマッジ、卵をのせたビスマルク・ビアンコ、ンドゥイヤ、サルシッチャ) はハーフ&ハーフもでき、カプレーゼやフリットも。ランチセットはお得で、ピッツァは出てくるのが速い。若く親切なスタッフ。皿を下げるのが速すぎたという声も。ベビーカーは畳んで。無休。',
  });
}

// ================================================================ バルケッタ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005585/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['18:00', '24:00']); const WE = day(['15:00', '24:00']);
  put({
    id: 'kyoto_barchetta_matsubara', name: 'バルケッタ (barchetta)', category: 'OMNI',
    lat: 34.998805, lng: 135.758962, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Italian wine-bar dishes such as risotto, pasta, ajillo, bagna cauda and confit; no gluten information (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bagna cauda vegetables, fruit and some vegetable dishes appear, but anchovy, pancetta, cheese, fish and meat run through the menu (2022–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday and Friday 18:00–24:00; Saturday and Sunday 15:00–24:00, with a daytime-drinking menu 15:00–18:00; closed Wednesday; last entry and last food order 22:30 — the shop may close if no one is in by then (Tabelog). Reservations accepted; call for 5 or more (Tabelog). 20 seats: 8 at the counter and tables for 2–4, plus a red sofa at the back; non-smoking; live music (Tabelog; 2024 reviews). Cards, e-money and QR (Tabelog). On Matsubara-dori west of Karasuma; 5–6 min walk from Gojo, Shijo or Karasuma stations (Tabelog).',
    hours: { 0: WK, 1: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Matsubara-dori west of Karasuma — 5 min walk from Gojo Stn',
    cuisine: 'Casual wine bar run by a sommelier, with Italian dishes made to go with wine (Tabelog) · "Solo Set" of five half-portion dishes, ¥2,500 (March 2023) — e.g. potato salad, smoked salt mackerel, chicken confit with rosemary, eggplant with pancetta in balsamic, cheese risotto (May 2022) · Yokowa tuna carpaccio, daikon risotto (December 2024); karasumi pasta (November 2024); bagna cauda of unusual vegetables (March 2024); ajillo (February 2026); boiled egg with a rich sauce (October 2025) · wines from many countries, poured blind — origin and grape not given (October 2025); dessert and botrytised wines (2024–2026 reviews); beer ¥800 (March 2023) · about ¥3,000–6,000 (Tabelog; 2023–2026 reviews)',
    website: null, gmaps: gm('barchetta 京都 松原烏丸'), menu_url: null,
    notes: '[Wine bar · Matsubara Karasuma, a sommelier and a piano] A calm, late-opening wine bar west of Karasuma where the sommelier-master pours wines from many countries — sometimes without naming the wine, so you taste first — and cooks small Italian plates to match; solo guests can take a five-dish half-portion set (about ¥2,500). Bagna cauda, karasumi pasta, risotto and ajillo; on some nights the master plays the piano. Many regulars; one newcomer felt a little left out. Last entry 22:30. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-sommelier ("master", unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: a casual wine bar run by a sommelier, whose dishes are made to pair with wine, with a five-dish "Solo Set" and occasional live piano. Reviewers describe a gentle master who plays piano at times (2022–2024), wines served without disclosing origin to encourage tasting without preconceptions (October 2025), and nights when the master works alone (February 2026).',
      philosophy: 'Wines tasted without preconceptions (October 2025 review).', specialty: 'Solo Set; wine pairing.',
      anecdotes: [
        { text: 'An October 2025 guest noted the wines are poured without naming origin or grape, "this approach encourages guests to set aside preconceptions."', source: R + 'B516084630/' },
        { text: 'A December 2024 newcomer loved the Yokowa tuna carpaccio and daikon risotto but, among the regulars, felt a little distant when no one gave a goodbye at the door.', source: R + 'B497049816/' },
        { text: 'A September 2023 guest, back for only a second time, was remembered — and was quickly made a snack platter and a small risotto.', source: R + 'B471096767/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・ワインバー・パスタ、下京区松原通烏丸西入る玉津島町307、阪急烏丸駅・地下鉄四条駅から徒歩6分、五条駅から5分、月・火・木・金 18:00〜24:00、土・日 15:00〜24:00 (15〜18時は昼飲みメニュー)、水曜休み、最終入店・料理L.O.22:30 (客がいなければ閉店も)、予約可 (5名以上は電話で)、20席 (カウンター8、2〜4名のテーブル)、禁煙、ライブ演奏、カード・電子マネー・QR 可、ソムリエのいるカジュアルなワインバー、ワインに合う料理、半量5品を選べる「おひとりさまセット」、ピアノの演奏も。口コミ (2022年5月〜2026年2月、英語): おひとりさまセット2,500円 (ポテトサラダ、塩鯖の燻製、手羽元のコンフィ、茄子とパンチェッタ、チーズのリゾット)、横輪まぐろのカルパッチョ、大根のリゾット、からすみのパスタ、バーニャカウダ、アヒージョ、ゆで卵、産地や品種を伏せて出すワイン、貴腐ワイン、ビール800円、常連が多く少し疎外感があったとの声、マスター一人の日も。',
      confidence: 'medium', sources: [TB, R + 'B448995336/', R + 'B462926345/', R + 'B471096767/', R + 'B487717892/', R + 'B495911128/', R + 'B497049816/', R + 'B498399870/', R + 'B503016355/', R + 'B516084630/', R + 'B523694230/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask the sommelier to choose; Solo Set for one; last entry 22:30; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松原通烏丸西入る玉津島町307',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (staff-maintained); latest review February 2026.' },
    pin_source: `Tabelog ${TB} (34.998805, 135.758962); cross-checked: GSI 京都府京都市下京区玉津島町307番地 (lot) 27 m; kyoto_muromachi_kaji is 108 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B462926345/'],
    price_note: 'Prices from a March 2023 review.', last_checked: TODAY, items: [
      it('', '', 'Solo Set (five half-portion dishes)', '¥2,500', 'Sets', 'ask', 'ask', 'March 2023.', 'solo_set'),
      it('', '', 'Beer', '¥800', 'Drinks', 'no', 'ask', 'March 2023.', 'beer'),
      it('', '', 'Karasumi pasta', '', 'Pasta', 'no', 'no', 'November 2024.', 'karasumi_pasta'),
    ] }, {
    cuisine: 'ソムリエのマスターが営むカジュアルなワインバーで、ワインに合うイタリアンの料理 (食べログ)・半量5品の「おひとりさまセット」2,500円 (2023年3月): ポテトサラダ、塩鯖の燻製、手羽元のローズマリーのコンフィ、茄子とパンチェッタのバルサミコ、チーズのリゾットなど (2022年5月)・横輪まぐろのカルパッチョ、大根のリゾット (2024年12月)、からすみのパスタ (2024年11月)、珍しい野菜のバーニャカウダ (2024年3月)、アヒージョ (2026年2月)、濃厚なソースのゆで卵 (2025年10月)・産地や品種を伏せて出す各国のワイン (2025年10月)、デザートワインや貴腐ワイン (2024〜2026年の口コミ)、ビール800円 (2023年3月)・3,000〜6,000円ほど (食べログ、2023〜2026年の口コミ)',
    neighborhood: '烏丸の西、松原通。五条駅から徒歩5分',
    gf_detail: '要確認。リゾット、パスタ、アヒージョ、バーニャカウダ、コンフィなどのワインバーのイタリアン。グルテンの情報はない (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。バーニャカウダの野菜、フルーツ、野菜の料理もあるが、アンチョビ、パンチェッタ、チーズ、魚、肉が多い (2022〜2026年の口コミ)。',
    notes: '[ワインバー・松原烏丸、ソムリエとピアノ] 烏丸の西の、夜遅くまで開く落ち着いたワインバー。ソムリエのマスターが各国のワインを注ぎ (先入観なく味わえるよう産地を伏せることも)、合わせて小皿のイタリアンを作る。一人なら半量5品のセット (2,500円ほど)。バーニャカウダ、からすみのパスタ、リゾット、アヒージョ。マスターがピアノを弾く夜も。常連が多く、初めての客は少し疎外感があったという声も。最終入店22:30。水曜休み。',
  });
}

// ================================================================ のんき亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001355/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_nonki_tei_gion', name: 'のんき亭 (Nonki Tei)', category: 'OMNI',
    lat: 35.005669, lng: 135.775720, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Japanese dishes including tempura, kakiage, fried nameko, beef cutlet, katsu sandwiches, sushi and hot pots; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-led menu — sashimi from a seafood box, whale bacon, crab, fugu, soft-shelled turtle — with dashi (2026 reviews).',
    hours_raw: 'Monday to Saturday 17:00–22:00; closed Sunday and holidays (Tabelog). Reservations accepted — call even if online slots are full (Tabelog). 50 seats: a wooden counter, a banquet room for up to 50 and a private room for 6; smoking allowed (Tabelog). Cards (Tabelog). Takeaway, e.g. katsu sandwiches (Tabelog; September 2026). On Shinbashi-dori east of Yamatooji in Gion; about 400 m from Gion-Shijo Stn (Tabelog). Moved here in 2012; a sister, Bistro Nonki, opened in 2023 at the APA Hotel in front of Kyoto Station (Tabelog remarks).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinbashi-dori east of Yamatooji, Gion — 6 min walk from Gion-Shijo Stn',
    cuisine: 'Gion kappo-izakaya of seasonal dishes from ingredients sourced from Kyoto, Kyushu, Hokuriku and Hokkaido (Tabelog) · choose from boxes of seafood at the counter — e.g. whale bacon, scallops, tuna, Matsuba crab, octopus, Spanish mackerel (February 2026) · lightly grilled torigai, liver with wasabi, mantis shrimp, wild-vegetable tempura, sweet-potato salad (May 2026); sea urchin from Maizuru, fresh shirasu, sushi, grilled ayu, soft-shelled-turtle hot pot, hojicha ice cream (May 2026); moga, corn tempura, beef cutlet ¥4,200 (June 2026); fried nameko, clam hot pot, kakiage (April 2026); matsutake dobin-mushi, bonito tataki (August 2026); katsu sandwich to take away (September 2026) · fugu-fin sake; Niigata Shimeharitsuru (2026 reviews) · bills about ¥10,000–20,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('のんき亭 祇園'), menu_url: null,
    notes: '[Kappo izakaya · Gion Shinbashi, pick from the seafood box] A long-running Gion counter where you choose from boxes of the day\'s seafood — Matsuba crab, torigai, mantis shrimp, whale bacon — or let the owner recommend: sashimi, tempura, soft-shelled-turtle hot pot, matsutake dobin-mushi, a famous beef cutlet. Portions are generous and courses come fast. Prices are higher than the homely look suggests; reviewers warn that following every recommendation adds up. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed) and staff'], origin: null,
      background: 'Per Tabelog: seasonal dishes from fresh ingredients from across Japan; 50 seats with a wooden counter, a banquet room and private rooms; relocated from Gion-machi in 2012; a sister restaurant, Bistro Nonki, opened in 2023 in front of Kyoto Station. Reviewers in 2026 describe a pleasant owner who recommends dishes, many regulars, and a chef who once warned that the course was coming too fast (August 2026).',
      philosophy: null, specialty: 'Seafood box; beef cutlet; seasonal tempura.',
      anecdotes: [
        { text: 'A May 2026 guest, treated by a daughter for Mother\'s Day, was asked about dislikes and was served sea urchin from Maizuru, sushi, ayu and a turtle hot pot — and overcame a dislike of sake.', source: R + 'B528436548/' },
        { text: '"According to the customer who brought me here, if you order exactly what the owner suggests, it could lead to quite a surprise! Haha." — September 2026.', source: R + 'B537765908/' },
        { text: 'An August 2026 diner on the chef\'s course found portions large and dishes arriving so fast that the table filled up — the chef even warned that the dishes were coming too quickly.', source: R + 'B533488655/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・創作料理・寿司、東山区新橋通大和大路東入ル二丁目橋本町405-1、祇園四条駅から415m、月〜土 17:00〜22:00、日・祝休み、予約可 (予約枠が埋まっていても電話で確認を)、50席、座敷 (宴会50名まで)、6名の個室、喫煙可、カード可、テイクアウト、京都・九州・北陸・本州・北海道の旬の食材、2012年に祇園町から移転、2023年に京都駅前のアパホテルに姉妹店「Bistro Nonki」。口コミ (2026年2月〜9月、英語): 魚介の箱から選ぶ (鯨のベーコン、帆立、まぐろ、松葉がに、たこ、さわら)、とり貝のあぶり、肝のわさび和え、しゃこ、山菜の天ぷら、さつまいものポテサラ、Maizuru のうに、生しらす、寿司、鮎、すっぽん鍋、ほうじ茶のアイス、とうもろこしの天ぷら、牛カツ4,200円、なめこの唐揚げ、はまぐりの鍋、かき揚げ、松茸の土瓶蒸し、鰹のたたき、カツサンドの持ち帰り、ひれ酒、Shimeharitsuru、店主のおすすめ、値段は高めとの声、料理の出るのが速すぎたとの声。',
      confidence: 'medium', sources: [TB, R + 'B506500476/', R + 'B513522434/', R + 'B518936985/', R + 'B523864876/', R + 'B526971456/', R + 'B528436548/', R + 'B530511484/', R + 'B533488655/', R + 'B534878054/', R + 'B537765908/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the seafood boxes or ask the owner — and ask prices; smoking allowed; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通大和大路東入ル二丁目橋本町405-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005669, 135.775720); cross-checked: GSI 京都府京都市東山区橋本町405番地 (lot) 13 m; kyoto_gion_shigenaga is 37 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506500476/', R + 'B513522434/'],
    price_note: 'One price from a June 2026 review; bills about ¥10,000–20,000.', last_checked: TODAY, items: [
      it('', '', 'Beef cutlet', '¥4,200', 'À la carte', 'no', 'no', 'June 2026.', 'gyukatsu'),
      it('', '', 'Seafood from the box (sashimi or cooked)', '', 'À la carte', 'ask', 'no', 'February 2026.', 'seafood_box'),
      it('', '', 'Corn tempura', '', 'Tempura', 'no', 'ask', 'June 2026.', 'corn_tempura'),
    ] }, {
    cuisine: '京都、九州、北陸、北海道などから仕入れる旬の料理の祇園の割烹居酒屋 (食べログ)・カウンターの魚介の箱から選ぶ: 鯨のベーコン、帆立、まぐろ、松葉がに、たこ、さわらなど (2026年2月)・とり貝のあぶり、肝のわさび和え、しゃこ、山菜の天ぷら、さつまいものポテサラ (2026年5月)、Maizuru のうに、生しらす、寿司、鮎の塩焼き、すっぽん鍋、ほうじ茶のアイス (2026年5月)、とうもろこしの天ぷら、牛カツ4,200円 (2026年6月)、なめこの唐揚げ、はまぐりの鍋、かき揚げ (2026年4月)、松茸の土瓶蒸し、鰹のたたき (2026年8月)、持ち帰りのカツサンド (2026年9月)・ひれ酒、Niigata の Shimeharitsuru (2026年の口コミ)・会計は1万〜2万円ほど (食べログ、2026年の口コミ)',
    neighborhood: '祇園、大和大路の東の新橋通。祇園四条駅から徒歩6分',
    gf_detail: '要確認。天ぷら、かき揚げ、なめこの唐揚げ、牛カツ、カツサンド、寿司、鍋などの旬の和食。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介の箱のお造り、鯨のベーコン、蟹、ふぐ、すっぽんなど、だしを使う魚介中心の料理 (2026年の口コミ)。',
    notes: '[割烹居酒屋・祇園新橋、魚介の箱から選ぶ] 祇園で長く続くカウンター。その日の魚介の箱 (松葉がに、とり貝、しゃこ、鯨のベーコンなど) から選ぶか、店主のおすすめに任せる: お造り、天ぷら、すっぽん鍋、松茸の土瓶蒸し、名物の牛カツ。量は多く、コースは出るのが速い。素朴な見た目より値段は高めで、おすすめをすべて頼むと高くつくと口コミにある。喫煙可。日曜休み。',
  });
}

// ================================================================ 炭火焼肉KINOE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26028457/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_sumibi_yakiniku_kinoe', name: '炭火焼肉KINOE (Sumibi Yakiniku KINOE)', category: 'OMNI',
    lat: 35.017433, lng: 135.769619, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal yakiniku with tare and seasoned yukhoe, plus rice and mochi desserts; salted cuts are offered, but there is no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku house — Kobe beef, yukhoe and beef sashimi (Tabelog; 2024–2026 reviews).',
    hours_raw: 'Daily 17:00–23:00; closed 31 December and 1 January (Tabelog). Reservations accepted; two-hour limit when busy; bookings lapse 15 minutes after the time without contact (Tabelog). A 10% service charge in busy seasons — 24 December–4 January, 29 April–6 May, 11–16 August (Tabelog original 繁忙期（12月24日～1月4日・4月29日～5月6日・8月11日～8月16日）は、お食事代金の10％をサービス料として別途頂戴いたします). Touch-panel ordering (March 2025). 26 seats incl. private rooms for 4 and sofas; private hire 15–26; non-smoking; free Wi-Fi (Tabelog). Cards incl. UnionPay; PayPay and Alipay (Tabelog). A renovated machiya near Jingu-Marutamachi; 3 min walk from Jingu-Marutamachi Stn (Tabelog). Formerly called 嘉 (2025 reviews; web).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Jingu-Marutamachi, between the Imperial Palace and the Kamo — 3 min walk from the station',
    cuisine: 'Charcoal yakiniku of premium wagyu, mainly Kobe beef, in a modern machiya, from a meat shop with long experience selling Kobe beef (Tabelog; web) · KINOE meat course ¥7,700 (Tabelog); a ¥7,000 course with about 280 g of meat (April 2025) · yukhoe in several styles, the signature; beef sashimi; thick salted tongue; assorted cuts and rare cuts of the day (2024–2025 reviews) · hojicha mochi (March 2026) · sake, shochu, wine and cocktails (Tabelog) · about ¥6,000–14,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('炭火焼肉KINOE 京都'), menu_url: null,
    notes: '[Yakiniku · Jingu-Marutamachi, Kobe beef in a machiya] A stylish renovated townhouse near the Kamo serving charcoal yakiniku of Kobe and other wagyu from a long-established Kobe-beef dealer: several kinds of yukhoe (the signature), beef sashimi, thick salted tongue and the day\'s rare cuts, with a ¥7,700 meat course. Private rooms and sofas; touch-panel ordering. 10% service in the New Year, Golden Week and Obon weeks. One March 2026 regular felt the taste had slipped. Open nightly.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a yakiniku house fusing charcoal grilling with Japanese tradition, sourcing premium wagyu, mainly Kobe beef, in a renovated Kyoto townhouse. A web article describes it as run by a meat shop with sixty years of selling Kobe beef, previously named 嘉; 2025 reviewers noticed the name change.',
      philosophy: 'A fusion of charcoal-grilled yakiniku and Japanese tradition (Tabelog).', specialty: 'Yukhoe; thick salted tongue.',
      anecdotes: [
        { text: 'A May 2025 regular, back after a year, noticed the sign had changed and started with the classic-sauce yukhoe in a first-floor private room.', source: R + 'B258953930/' },
        { text: 'A June 2024 guest from The Ritz-Carlton nearby warns the large rice is huge — "stick to a medium rice if you want to eat like a normal person."', source: R + 'B489984747/' },
        { text: '"Unfortunately, the taste seemed to have declined compared to my first experience, but the yukhoe was still delicious!" — March 2026.', source: R + 'B527188709/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・ステーキ・居酒屋、上京区駒之町535-3、京阪神宮丸太町駅から徒歩3分、毎日 17:00〜23:00、12月31日と1月1日休み、予約可 (混雑時2時間制、15分連絡がなければ取消)、繁忙期 (12月24日〜1月4日、4月29日〜5月6日、8月11日〜8月16日) はサービス料10%、26席、4名の個室、ソファ席、貸切15〜26名、禁煙、Wi-Fi、カード (銀聯も)・PayPay・Alipay 可、京町家の雰囲気、神戸牛を中心とした和牛、KINOE 肉コース7,700円。口コミ (2024年6月〜2026年3月、英語): 以前は別の店名、ユッケ数種、牛刺し、厚切りの塩タン、盛り合わせ、希少部位、280gの7,000円コース、タッチパネルで注文、ほうじ茶のお餅、味が落ちたとの声 (2026年3月)。ウェブ記事: 神戸牛の販売60年の精肉店が営む、旧店名「嘉」。',
      confidence: 'medium', sources: [TB, 'https://matcha-jp.com/tw/4700', 'https://www.tablecheck.com/en/sumibiyakiniku-kinoe', R + 'B258953930/', R + 'B489984747/', R + 'B499387731/', R + 'B502088000/', R + 'B504669103/', R + 'B506420499/', R + 'B516064485/', R + 'B520596151/', R + 'B524435947/', R + 'B527188709/'] },
    cultural_comfort: { level: 'english', note: 'Touch-panel ordering; 10% service in holiday weeks; cards, PayPay and Alipay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区駒之町535-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.017433, 135.769619); cross-checked: GSI 京都府京都市上京区駒之町535番地 (lot) 40 m; kyoto_reine_des_pres is 24 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B506420499/'],
    price_note: 'Course prices from Tabelog and an April 2025 review; 10% service in busy seasons.', last_checked: TODAY, items: [
      it('', '', 'KINOE meat course', '¥7,700', 'Course', 'ask', 'no', 'Tabelog.', 'kinoe_course'),
      it('', '', 'Yukhoe (several styles)', '', 'Raw', 'ask', 'no', 'Signature.', 'yukhoe'),
      it('', '', 'Thick salted tongue', '', 'Grill', 'ask', 'no', '', 'atsugiri_tan'),
    ] }, {
    cuisine: '神戸牛の販売の長い精肉店による、神戸牛を中心にした上質な和牛の炭火焼肉を町家風の空間で (食べログ、ウェブ)・KINOE 肉コース7,700円 (食べログ)、肉280gほどの7,000円のコース (2025年4月)・名物の数種のユッケ、牛刺し、厚切りの塩タン、盛り合わせとその日の希少部位 (2024〜2025年の口コミ)・ほうじ茶のお餅 (2026年3月)・日本酒、焼酎、ワイン、カクテル (食べログ)・6,000〜14,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '神宮丸太町の近く、御所と鴨川の間。駅から徒歩3分',
    gf_detail: '要確認。タレや味付けのユッケの炭火焼肉、ご飯、お餅のデザート。塩の部位もあるが、グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。神戸牛、ユッケ、牛刺しの和牛の焼肉 (食べログ、2024〜2026年の口コミ)。',
    notes: '[焼肉・神宮丸太町、町家で神戸牛] 鴨川近くの改装したおしゃれな町家で、神戸牛を長く扱う精肉店が神戸牛などの和牛を炭火で出す: 名物の数種のユッケ、牛刺し、厚切りの塩タン、その日の希少部位、7,700円の肉のコース。個室とソファ席、タッチパネルで注文。年末年始、ゴールデンウィーク、お盆はサービス料10%。2026年3月の常連は味が落ちたと書いている。無休。',
  });
}

save();
