// Kyoto priority (kyoto-missed), worker osw13, batch 58 — lane: Tabelog id mod 6 = 0.
// Core: 京やき肉よし田, ラ・プレーヌ・リュヌ. Notable: assemblages+, 酒陶 柳野.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-58');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26027460', 'chain: チンクエ イカリヤ is one of 5 same-name イカリヤ shops of 株式会社Ludico — イカリヤ食堂 (kyoto_ikariya_shokudo_kiyamachi), IKARIYA BEIKA KYOTO (kyo_ikariya_beika, whose record names ikariya523 and Ludico), イカリヤ365 (26031451) and this shop; 5+ same-name = chain, and the brand is already in data (Greg ruling 2026-11-05)');

// ================================================================ 京やき肉よし田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005536/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_kyo_yakiniku_yoshida', name: '京やき肉よし田 (Kyo Yakiniku Yoshida)', category: 'OMNI',
    lat: 34.995674, lng: 135.759067, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakiniku sauces and soy-marinated cuts, warm noodles and cold noodles (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku house (Tabelog; reviews).',
    hours_raw: 'Tabelog: Tue–Sun 17:30–22:00 (last order 21:00); closed Monday. 20 seats including a private room (March 2026); non-smoking; cards (Visa, Master, JCB, Amex, Diners), no e-money. The shop says it revamped its menu for "better quality at a lower price," with an average spend of ¥4,500–5,900 a head (Tabelog); reviewers in 2024–2026 still found it pricey (¥6,000–15,000). Tabelog lists no service charge.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Gojo — by Gojo Stn',
    cuisine: 'Wagyu yakiniku in a stylish machiya-like room (2024–2026 reviews) · thick-cut platter of three (special loin, kalbi, lean), sliced platters, wagyu harami ¥1,000 and kalbi ¥1,000 (October 2024), premium tongue, ichibo, grilled wagyu sirloin-cap "sashimi", special wagyu yaki-shabu, soy-marinated sliced beef with egg, mountain-chain tripe, salted colon (2024–2026 reviews) · Kyoto kimchi, namul, sanchu, Japanese-style warm noodles, cold noodles, homemade sours (2024–2026 reviews)',
    website: null, gmaps: gm('京やき肉よし田 横諏訪町'), menu_url: null,
    notes: '[Yakiniku · Karasuma-Gojo, wagyu in a stylish room] A calm, stylish wagyu yakiniku house by Gojo Station: thick-cut special loin and kalbi, grilled sirloin-cap "sashimi", yaki-shabu and a soy-marinated sliced beef that one diner rated above the pricier cuts. Most reviewers call it delicious but pricey; a 2023 diner found the menu far dearer than Tabelog showed, and a March 2026 family found the private room cold from the air duct. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers in 2024–2026 describe a clean, stylish, low-odour room near the Karasuma-Gojo crossing with a private room, kind staff, and high-grade wagyu. The shop’s Tabelog blurb says it reworked its menu and policy after guests asked for "better quality at a lower price."',
      philosophy: null,
      specialty: 'Thick-cut wagyu platter; yaki-shabu.',
      anecdotes: [
        { text: 'August 2023: "Menu differs too much from the official one, and the price increase is outrageous!" — an assorted sliced platter at ¥4,900 and a thick-cut platter at ¥7,900.', source: R + 'B469403382/' },
        { text: 'March 2026: "The air from the duct was really strong and it was honestly quite cold (laughs)" — blankets were brought; no bibimbap, and only two cold-noodle soups.', source: R + 'B524070532/' },
        { text: 'April 2026: after the high-end dishes, "the most delicious item was the affordable marinated offcuts in soy sauce."', source: R + 'B525474880/' },
      ],
      japanese_sources_summary: '食べログ: 京やき肉よし田、焼肉・ホルモン、下京区横諏訪町313-1、地下鉄五条駅4番出口から、火〜日 17:30〜22:00 (L.O. 21:00)、月曜休み、20席、禁煙、カード可、電子マネー不可、「より良い品質をより安く」の声に応えてメニューを改訂、平均予算1人4,500〜5,900円。口コミ (2023年8月〜2026年7月、英語): 厚切り3種盛り (特上ロース・特上カルビ・特上赤身)、切り落としの盛り合わせ、和牛ハラミ1,000円、カルビ1,000円、上タン塩、イチボ、和牛ランプの炙り刺し、特選和牛の焼きしゃぶ、切り落としの醤油漬けと卵、ミノ、シマチョウ塩、京キムチ、ナムル、サンチュ、和風温麺、冷麺、自家製サワー、おしゃれで落ち着いた店内、個室、値段は高めという声が多い、2023年には食べログのメニューより大幅に高いという声、個室の空調が寒かった (2026年3月)、ビビンバはない。',
      confidence: 'medium', sources: [TB, R + 'B221140141/', R + 'B469403382/', R + 'B476490300/', R + 'B494699681/', R + 'B510416207/', R + 'B517027274/', R + 'B524070532/', R + 'B525474880/', R + 'B527119575/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by the cut; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区横諏訪町313-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.995674, 135.759067); cross-checked: GSI 京都府京都市下京区横諏訪町313番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494699681/', R + 'B469403382/'],
    price_note: 'Prices from reviews (2023–2024); the shop says it has since revised its menu.', last_checked: TODAY, items: [
      it('', '', 'Wagyu harami', '¥1,000', 'Meat', 'ask', 'no', 'October 2024.', 'yakiniku'),
      it('', '', 'Kalbi', '¥1,000', 'Meat', 'ask', 'no', 'October 2024.', 'yakiniku'),
      it('', '', 'Thick-cut platter of three', '¥7,900', 'Meat', 'ask', 'no', 'August 2023.', 'yakiniku'),
    ] }, {
    cuisine: 'おしゃれな町家風の店で和牛の焼肉 (2024〜2026年の口コミ)・厚切り3種盛り (特上ロース、カルビ、赤身)、切り落としの盛り合わせ、和牛ハラミ1,000円とカルビ1,000円 (2024年10月)、上タン、イチボ、和牛ランプの炙り刺し、特選和牛の焼きしゃぶ、切り落としの醤油漬けと卵、ミノ、シマチョウ塩 (2024〜2026年の口コミ)・京キムチ、ナムル、サンチュ、和風温麺、冷麺、自家製サワー (2024〜2026年の口コミ)',
    neighborhood: '烏丸五条。五条駅のすぐそば',
    gf_detail: 'グルテンフリーではない: 焼肉のたれや醤油漬けの肉、温麺や冷麺 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 和牛の焼肉店 (食べログ、口コミ)。',
    notes: '[焼肉・烏丸五条、おしゃれな店の和牛] 五条駅そばの落ち着いたおしゃれな和牛焼肉の店。厚切りの特上ロースやカルビ、ランプの炙り刺し、焼きしゃぶ、そして高い部位よりおいしかったという声もある切り落としの醤油漬け。おいしいが高めという声が多く、2023年には食べログの表示よりずっと高かった、2026年3月には個室が空調の風で寒かったという声も。月曜休み。',
  });
}

// ================================================================ ラ・プレーヌ・リュヌ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028120/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://la-pleine-lune.com/';
  const H = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_la_pleine_lune', name: 'ラ・プレーヌ・リュヌ (La Pleine Lune)', category: 'MOM_AND_POP',
    lat: 35.013494, lng: 135.762062, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: courses come with bread and pastry desserts (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg starter, fish, wagyu, cheese and cream (official site; reviews).',
    hours_raw: 'Tabelog: lunch 12:00–15:00 (last order 13:30), dinner 18:00–23:00 (last order 21:00); closed Wednesday and one other irregular day a month. Course prices include tax and a 5% service charge (official site; Tabelog, Japanese original 「サービス料5％」). No cards at lunch (official site); cards (Visa, Master, JCB) at dinner. Groups of five or more get a set omakase course. 16 seats, counter and tables; non-smoking.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Nijo — 6 min walk from Karasuma Oike Stn',
    cuisine: 'Classic French cooking with Burgundy wine (official site) · lunch: Menu A ¥4,000 (egg, starter, potage, main, dessert, coffee and petits fours), Menu B ¥5,200 (adds the day’s fish), chef’s omakase ¥6,300 by the day before (official site) · dinner: Menu A ¥6,400, Menu B ¥8,600, chef’s omakase "Plaisir" ¥12,000 by two days before; kuroge wagyu rump roast +¥1,200, French cheeses +¥600; strawberry soup with coconut blanc-manger (official site) · seen: oeuf brouillé served in the shell, mushroom foam soup, smoked salmon and crab, sea bass in cream, slow-cooked ayu in olive oil, peach soups and desserts in summer (2018–2026 reviews) · the chef chooses the wine (December 2024)',
    website: SITE, gmaps: gm('ラ・プレーヌ・リュヌ 松屋町'), menu_url: SITE + 'lunch',
    notes: '[French · Karasuma-Nijo, classic cooking and Burgundy] A sixteen-seat French restaurant founded in 2006 by owner-chef 西居 直映, at Karasuma-Nijo since 2016: classic dishes — the egg in its shell, foams, sea bass in cream — with Burgundy the chef pours for you. Lunch ¥4,000–6,300 and dinner ¥6,400–12,000 including tax and service. No cards at lunch. Closed Wednesday.',
    chef_bio: { chef_name: '西居 直映', roles: ['Owner-chef (official site)'], origin: null,
      background: 'Per the official site: La Pleine Lune opened in 2006 at 烏丸綾小路 as a ten-seat restaurant, and moved to Karasuma-Nijo in its tenth year, 2016, to serve classic French cooking with the Burgundy wines the chef loves; it marked 20 years on 27 May 2026. Tabelog gives the current site’s opening as 10 September 2016. A May 2026 diner remembers a ¥2,000 French lunch at the old address.',
      philosophy: 'Official site: 「時代を超えて愛されるクラシカルなフランス料理」 with Burgundy, in a quiet room — to be a restaurant where people spend good time.',
      specialty: 'Oeuf brouillé in the shell; Burgundy pairings.',
      anecdotes: [
        { text: 'A May 2026 diner who knew the old shop: the first dish, the egg, "is a dream food for us middle-aged folks—it’s the same as in Lupin III."', source: R + 'B528795980/' },
        { text: 'June 2024: flavours "comparable to a Michelin 1-star," but "there are many visible clutter around, and the cooking oil smoke can be a bit overwhelming."', source: R + 'B487729288/' },
        { text: 'A six-time regular at Christmas 2024: "The chef always selects the wine for us."', source: R + 'B325259410/' },
      ],
      japanese_sources_summary: '公式サイト (la-pleine-lune.com): フランス料理とブルゴーニュワインのお店 ラ プレーヌ リュヌ、2006年に烏丸綾小路で10席の店として開業、2016年に烏丸二条へ移転、時代を超えて愛されるクラシカルなフランス料理とブルゴーニュワイン、オーナーシェフ 西居 直映、2026年5月27日で20周年、ランチ Menu A 4,000円・Menu B 5,200円・シェフお任せ6,300円 (前日まで)、ディナー Menu A 6,400円・Menu B 8,600円・プレジール12,000円 (2日前まで)、税とサービス料5%込み、黒毛和牛ランプのロースト+1,200円、チーズ+600円、苺のスープとココナッツのブランマンジェ、ランチはクレジットカード不可、5名以上はおまかせ、夏は桃のスープやデザート。食べログ: フレンチ、中京区二条通高倉西入ル松屋町55-1 西本ビル 2F、烏丸御池駅から徒歩約6分、昼12:00〜15:00・夜18:00〜23:00、水曜休みと月1回の不定休、16席、禁煙、カード (VISA・Master・JCB)、サービス料5%、2016年9月10日オープン。口コミ (2018〜2026年、英語): 殻に入った卵の料理、きのこの泡のスープ、スモークサーモンと蟹、スズキのクリームソース、鮎のコンフィ、シェフがワインを選ぶ、移転前は2,000円のランチ、ミシュラン一つ星並みの味だが店内に物が多く油煙が気になるという声 (2024年6月)。',
      confidence: 'high', sources: [SITE, SITE + 'about', SITE + 'lunch', SITE + 'dinner', TB, R + 'B325259410/', R + 'B478780054/', R + 'B482135837/', R + 'B487729288/', R + 'B495244467/', R + 'B508465191/', R + 'B518487774/', R + 'B520358985/', R + 'B528795980/', R + 'B537859806/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses with a choice of main and dessert.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通高倉西入ル松屋町55-1 西本ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with posts through July 2026; Tabelog reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013494, 135.762062); cross-checked: GSI 京都府京都市中京区松屋町55番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'lunch', SITE + 'dinner'],
    price_note: 'Official site; tax and 5% service included.', last_checked: TODAY, items: [
      it('Menu A (ランチ)', '', 'Lunch Menu A', '¥4,000', 'Lunch', 'no', 'no', 'Official site.', 'set_course'),
      it('Menu B (ランチ)', '', 'Lunch Menu B (with fish)', '¥5,200', 'Lunch', 'no', 'no', 'Official site.', 'set_course'),
      it('Menu A (ディナー)', '', 'Dinner Menu A', '¥6,400', 'Dinner', 'no', 'no', 'Official site.', 'set_course'),
      it('プレジール', '', 'Chef’s omakase "Plaisir"', '¥12,000', 'Dinner', 'no', 'no', 'Official site; book two days ahead.', 'set_course'),
    ] }, {
    cuisine: 'クラシカルなフランス料理とブルゴーニュワイン (公式サイト)・ランチはMenu A 4,000円 (卵、前菜、ポタージュ、メイン、デザート、飲み物と小菓子)、Menu B 5,200円 (本日の鮮魚の料理付き)、前日までのシェフお任せ6,300円 (公式サイト)・ディナーはMenu A 6,400円、Menu B 8,600円、2日前までのお任せ「プレジール」12,000円。黒毛和牛ランプのロースト+1,200円、フランス産チーズ+600円。苺のスープとココナッツのブランマンジェ (公式サイト)・口コミでは殻に入った卵料理、きのこの泡のスープ、スモークサーモンと蟹、スズキのクリームソース、鮎のオリーブオイル焼き、夏は桃のスープやデザート (2018〜2026年)・ワインはシェフが選ぶ (2024年12月)',
    neighborhood: '烏丸二条。烏丸御池駅から徒歩6分',
    gf_detail: 'グルテンフリーではない: コースにパンと焼き菓子のデザートが付く (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可: 卵の前菜、魚、和牛、チーズ、クリーム (公式サイト、口コミ)。',
    notes: '[フレンチ・烏丸二条、クラシックな料理とブルゴーニュ] オーナーシェフの西居 直映さんが2006年に開き、2016年から烏丸二条にある16席のフレンチ。殻に入った卵料理、泡のスープ、スズキのクリームソースなどクラシックな料理に、シェフが選ぶブルゴーニュワイン。ランチ4,000〜6,300円、ディナー6,400〜12,000円で税・サービス料込み。ランチはカード不可。水曜休み。',
  });
}

// ================================================================ assemblages+
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040438/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '21:00']); const SU = day(['12:00', '18:00']);
  put({
    id: 'kyoto_assemblages_plus', name: 'assemblages+', category: 'OMNI',
    lat: 35.015026, lng: 135.765427, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: gelato and kakigori may be wheat-free, but toppings include meringue, tuile, macarons, cookie dough and baked sweets; lunch is pizza (2026 reviews). Tabelog says allergy information is available.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: milk gelato and milk-ice kakigori, custard, meringue (2026 reviews).',
    hours_raw: 'Tabelog: Mon, Thu, Fri, Sat 12:00–21:00; Sun 12:00–18:00 (Monday holidays follow Sunday hours); closed Tuesday and Wednesday. Lunch and café 12:00–17:00, dinner 18:00–21:00, with different menus. 9 counter seats on the ground floor around a single wooden slab, and about 20 free seats upstairs for sweets (Tabelog; August 2026). Reservations taken; day-of changes by phone. Non-smoking; children welcome; allergy information available; cards, no e-money or QR. Service charge: none — Tabelog’s Japanese original says 「無し」. Opened 6 November 2023 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-Nijo area — 7 min walk from Marutamachi Stn; 10 min from Kyoto Shiyakusho-mae',
    cuisine: 'The casual sibling of the dessert restaurant Assemblages Kakimoto: a chef’s dishes on the ground floor, the pâtissier’s gelato and baked sweets upstairs (Tabelog; 2026 reviews) · gelato with paired flavours — shiso-strawberry, banana-lemon-coconut, cardamom-chamomile, peach with sherry, cheese with black pepper, Joyo fig with white wine and anise, pistachio, chocolate; double ¥864, triple ¥972, special gelato with macarons and coffee espuma ¥1,650; a meringue bear on top (2025–2026 reviews) · monthly kakigori on vanilla milk ice — melon in July, peach in August (2026 reviews) · seasonal pizza ¥1,980 (fig and prosciutto), Bismarck ¥1,870, Margherita; fruit curry of Kameoka or Kumamoto beef, the full-size version of the mini curry at the end of the Kakimoto dinner course (2026 reviews) · mini pound cakes in the ¥800s; affogato (2026 reviews)',
    website: null, gmaps: gm('assemblages+ 木屋町'), menu_url: null,
    notes: '[Gelato & café · Kiyamachi, the Kakimoto pâtissier’s casual house] The casual sister of Assemblages Kakimoto: a nine-seat counter for small pizzas and the fruit curry that ends the Kakimoto course, and an upstairs room for gelato in unusual pairings — shiso-strawberry, cardamom-chamomile, peach with sherry — under a meringue bear, plus a monthly kakigori in summer. No service charge. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['A chef (food) and a pâtissier (sweets), not named for this shop; sister of Assemblages Kakimoto (kyoto_assemblages_kakimoto)'], origin: null,
      background: 'Opened 6 November 2023 (Tabelog). The shop blurb describes a hideaway in a Japanese-style space with the chef’s dishes on the first floor and the pâtissier’s sweets and gelato upstairs. An August 2026 diner calls it the place to eat the full-size version of the mini fruit curry served at the end of the dinner course at the main shop, Assemblages Kakimoto; another says the gelato shows the ingredient pairings Kakimoto is known for. The lunch set ended in June 2026 (June 2026 review).',
      philosophy: null,
      specialty: 'Paired-flavour gelato; monthly kakigori.',
      anecdotes: [
        { text: 'An August 2026 regular: "you can enjoy the full-size version of the mini curry served at the end of the dinner course at the main branch."', source: R + 'B533196639/' },
        { text: 'A July 2026 diner skipped the August peach kakigori: "the gelato contains sherry, and since I’m not a fan of alcohol…"', source: R + 'B530965567/' },
        { text: 'September 2026: a triple scoop for ¥972 — "In Tokyo, I think this would cost around JPY 1,200."', source: R + 'B535845966/' },
      ],
      japanese_sources_summary: '食べログ: assemblages+、ケーキ・ジェラート・カフェ、中京区木屋町484、丸太町駅から徒歩約7分、月木金土 12:00〜21:00、日 12:00〜18:00、火水休み、ランチとカフェは12:00〜17:00、ディナーは18:00〜21:00でメニューが異なる、1階カウンター9席 (2階のフリースペース約20席)、予約可、禁煙、子供可、アレルギー表示あり、カード可、電子マネー・QR不可、サービス料は原文で「無し」、2023年11月6日オープン、1階でシェフの料理、2階でパティシエのスイーツとジェラート。口コミ (2025年5月〜2026年10月、英語): アッサンブラージュ カキモトのディナーの締めのミニカレーのフルサイズ版のフルーツカレー (Kameoka・Kumamoto の牛)、季節のピザ1,980円、ビスマルク1,870円、マルゲリータ、ジェラートのダブル864円・トリプル972円・スペシャル1,650円、赤紫蘇と苺、バナナとレモンとココナッツ、カルダモンとカモミール、桃とシェリー、チーズと黒胡椒、Joyo の無花果と白ワインとアニス、メレンゲのクマ、7月はメロン・8月は桃のかき氷、ミニパウンドケーキ800円台、アフォガート、ランチセットは6月で終了。',
      confidence: 'medium', sources: [TB, R + 'B507523119/', R + 'B530965567/', R + 'B533196639/', R + 'B534165401/', R + 'B534267511/', R + 'B535272138/', R + 'B535845966/', R + 'B536003066/', R + 'B536093339/', R + 'B537770087/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick gelato flavours at the counter; upstairs room for sweets.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町484',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `GSI 京都府京都市中京区木屋町484番地 (lot) (35.015026, 135.765427), used instead of the Tabelog point ${TB} (35.015022, 135.765334, 8m west) because the Tabelog point sat 4.9m from kyoto_ebisugawa_enraku (itself approximate); now 12m from it; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535845966/', R + 'B507523119/', R + 'B536093339/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Gelato, triple scoop', '¥972', 'Gelato', 'ask', 'no', 'September 2026; double ¥864 (May 2025).', 'gelato'),
      it('', '', 'Special gelato (two flavours, macarons, coffee espuma)', '¥1,650', 'Gelato', 'no', 'no', 'August 2026.', 'gelato'),
      it('', '', 'Seasonal pizza (fig and prosciutto)', '¥1,980', 'Food', 'no', 'no', 'September 2026.', 'pizza'),
      it('', '', 'Bismarck pizza', '¥1,870', 'Food', 'no', 'no', 'September 2026.', 'pizza'),
    ] }, {
    cuisine: 'デザートのレストラン「アッサンブラージュ カキモト」の気軽な姉妹店。1階でシェフの料理、2階でパティシエのジェラートと焼き菓子 (食べログ、2026年の口コミ)・組み合わせのジェラート: 赤紫蘇と苺、バナナとレモンとココナッツ、カルダモンとカモミール、桃とシェリー、チーズと黒胡椒、Joyo の無花果と白ワインとアニス、ピスタチオ、チョコレート。ダブル864円、トリプル972円、マカロンとコーヒーのエスプーマ付きのスペシャル1,650円。上にメレンゲのクマ (2025〜2026年の口コミ)・バニラ香るミルク氷の月替わりのかき氷、7月はメロン、8月は桃 (2026年の口コミ)・季節のピザ1,980円 (無花果と生ハム)、ビスマルク1,870円、マルゲリータ。カキモトのディナーの締めのミニカレーのフルサイズ版の、Kameoka や Kumamoto の牛のフルーツカレー (2026年の口コミ)・800円台のミニパウンドケーキ、アフォガート (2026年の口コミ)',
    neighborhood: '木屋町二条あたり。丸太町駅から徒歩7分、京都市役所前駅から10分',
    gf_detail: '要確認: ジェラートやかき氷は小麦なしかもしれないが、トッピングにメレンゲ、チュイル、マカロン、クッキー生地、焼き菓子。ランチはピザ (2026年の口コミ)。食べログではアレルギー表示あり。',
    vegan_detail: 'ヴィーガン不可: ミルクのジェラートやミルク氷のかき氷、カスタード、メレンゲ (2026年の口コミ)。',
    notes: '[ジェラートとカフェ・木屋町、カキモトのパティシエの気軽な店] アッサンブラージュ カキモトの気軽な姉妹店。9席のカウンターでは小さなピザや、カキモトのコースの締めのフルーツカレーを、2階では赤紫蘇と苺、カルダモンとカモミール、桃とシェリーなど珍しい組み合わせのジェラートをメレンゲのクマとともに。夏は月替わりのかき氷も。サービス料なし。火・水曜休み。',
  });
}

// ================================================================ 酒陶 柳野
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000106/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_shuto_yanagino', name: '酒陶 柳野 (Shuto Yanagino)', category: 'OMNI',
    lat: 35.008456, lng: 135.756198, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: drinks are mostly wine, cocktails and whisky; the snacks include kara-age and fried oysters (January 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: snacks of sashimi, fried oysters and cheese (2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 17:00–24:00; hours may change. 14 seats — 8 at a long single-slab counter and 6 at tables with a garden view, usable as a private room for 8; non-smoking, ashtray in the garden (Tabelog). Cards (JCB, Amex, Diners), no e-money or QR. No drink menu — tell the bartender what you feel like (March 2025); food prices are not listed, and one diner’s bill came out higher than expected (October 2025). Moved from Teramachi to Sanjo-Shinmachi (Tabelog; April 2019 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Shinmachi — about 5 min walk west of Karasuma-Sanjo',
    cuisine: 'A bar of antique vessels, wine and cocktails, with real food (2019–2026 reviews) · cocktails made to your mood, seasonal fruit cocktails, a Talisker highball, wine — often natural, two by the glass, a Cru Beaujolais ¥1,800 (June 2026) — whisky and brandy (2025–2026 reviews) · snacks with Kyoto vegetables: sashimi of yokowa and sea bream on ceramics by a favourite potter, ginkgo kara-age, fried oysters, fried sawara with shungiku and house tartar, Roquefort with honey; fish from a Nishiki fishmonger (2025–2026 reviews)',
    website: null, gmaps: gm('酒陶 柳野 三条新町'), menu_url: null,
    notes: '[Bar · Sanjo-Shinmachi, antique vessels and a garden room] A softly lit bar on Sanjo, open since 1997 by an owner who trained with an antique dealer: a long one-slab counter, a back room over a small garden, beautiful old glassware and ceramics, cocktails made to your mood and natural-leaning wine, plus proper snacks with Kyoto vegetables. No drink menu and no prices shown, so one diner found the bill higher than expected. Open nightly till midnight.',
    chef_bio: { chef_name: null, roles: ['Owner, not named; trained under an antique dealer (June 2026)'], origin: null,
      background: 'A June 2026 diner says the bar has run since 1997 and that the owner, who studied under an antique dealer, brings old vessels and tea-room culture into the space. Tabelog notes it moved from Teramachi-dori (Anekoji-nishi-iru) to its current place; a regular has come since the Teramachi days (April 2019). Reviewers describe a brick-walled entrance, a long wooden counter, a garden at the back, knowledgeable staff, and seasonal events.',
      philosophy: null,
      specialty: 'Cocktails to order; antique glassware.',
      anecdotes: [
        { text: '"There is no drink menu; instead, you can tell the bartender your mood or what you feel like drinking, and they will create something for you." — March 2025.', source: R + 'B502932613/' },
        { text: 'October 2025: "I was a bit nervous ordering since the prices weren’t listed. In the end, the final bill was higher than I expected."', source: R + 'B522463811/' },
        { text: 'June 2026: "I felt it might be a type of bar where evaluations vary depending on one’s compatibility with the establishment’s style."', source: R + 'B530096817/' },
      ],
      japanese_sources_summary: '食べログ: 酒陶 柳野、バー・ワインバー、中京区三条新町西入ル、烏丸三条から西へ徒歩約5分、毎日 17:00〜24:00、14席 (カウンター8、庭が見えるテーブル6)、個室8名、禁煙 (庭に灰皿)、カード (JCB・AMEX・Diners) 可、電子マネー・QR不可、寺町通姉小路西入ル南側から移転。口コミ (2019〜2026年、英語): 1997年から営業、骨董商に学んだ店主、古い器と茶室の文化、レンガの入口と一枚板の長いカウンター、奥に庭、ドリンクメニューはなく気分を伝えて作ってもらう、季節の果物のカクテル、タリスカーのハイボール、ワイン (グラスは白赤2種、クリュ・ボージョレ1,800円)、京野菜のつまみ、刺身、銀杏の唐揚げ、牡蠣フライ、鰆のフライと春菊、ロックフォールと蜂蜜、Nishiki の魚屋の魚、値段の表示がなく会計が予想より高かった (2025年10月)、相性で評価が分かれる店という声。',
      confidence: 'medium', sources: [TB, R + 'B223104873/', R + 'B499699454/', R + 'B501157479/', R + 'B502932613/', R + 'B510177037/', R + 'B512941553/', R + 'B522463811/', R + 'B530096817/', R + 'B530613831/', R + 'B535368398/'] },
    cultural_comfort: { level: 'japanese', note: 'No drink menu or prices shown; you order by conversation with the bartender.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区三条新町西入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008456, 135.756198); the address has no town or lot (三条新町西入ル) and GSI matches only the ward, so loc_precise false; kyoto_ryuen_italian is 56m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530096817/'],
    price_note: 'Few prices in the sources; no prices shown in the bar.', last_checked: TODAY, items: [
      it('', '', 'Cru Beaujolais by the glass', '¥1,800', 'Drink', 'ask', 'ask', 'June 2026.', 'wine'),
      it('', '', 'Cocktail made to your mood', null, 'Drink', 'ask', 'ask', '2025 reviews.', 'cocktail'),
    ] }, {
    cuisine: '古い器とワインとカクテルのバーで、料理もしっかり (2019〜2026年の口コミ)・気分に合わせて作るカクテル、季節の果物のカクテル、タリスカーのハイボール、自然派が多めのワイン (グラスは2種、クリュ・ボージョレ1,800円、2026年6月)、ウイスキー、ブランデー (2025〜2026年の口コミ)・京野菜のつまみ。好きな作家の器に盛ったよこわと鯛の刺身、銀杏の唐揚げ、牡蠣フライ、鰆のフライと春菊と自家製タルタル、ロックフォールと蜂蜜。魚は Nishiki の魚屋から (2025〜2026年の口コミ)',
    neighborhood: '三条新町。烏丸三条から西へ徒歩約5分',
    gf_detail: '要確認: 飲み物はワイン、カクテル、ウイスキーが中心。つまみに唐揚げや牡蠣フライ (2026年1月)。',
    vegan_detail: 'ヴィーガン不可: 刺身、牡蠣フライ、チーズのつまみ (2025〜2026年の口コミ)。',
    notes: '[バー・三条新町、古い器と庭の部屋] 骨董商のもとで学んだ店主が1997年から営む、三条通の柔らかな明かりのバー。一枚板の長いカウンター、奥には小さな庭に面した部屋、美しい古いグラスや器。気分に合わせたカクテルや自然派寄りのワインに、京野菜のつまみもしっかり。ドリンクメニューも値段の表示もなく、会計が予想より高かったという声も。毎晩0時まで。',
  });
}

save();
