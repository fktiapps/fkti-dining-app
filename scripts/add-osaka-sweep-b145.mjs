// Osaka sweep (2-mile circle around Dotonbori), batch 145 — mom / small-shop phase (all OMNI).
//   + チキン南蛮専門店 なみ一セヴン (chicken nanban lunch with bottomless clay-pot rice and tartar; Ura-Namba; offset vs Menya Joroku)
//   + 酒菜屋 なないろ (Japanese izakaya-kappo of wild-fish sashimi, sea bream dashi and small dishes; Shimanouchi)
//   + Le Nez (counter French with Wakayama ingredients, lunch and dinner courses; Nagahoribashi)
//   + ニューベイブ 難波店 (thick-cut tonkatsu with refills of rice, cabbage and pork miso soup; Namba-naka; offset vs Tsukineko)
//   Skipped かうぼーい 日本橋店 27051318: chain already in data (かうぼーい 千日前本店).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, skip, save } = openCitySweep('osaka', TODAY, 145);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27051318', 'Chain already in data: かうぼーい 千日前本店.');

// ================================================================ チキン南蛮専門店 なみ一セヴン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27117367/'; const R = TB + 'dtlrvwlst/';
  const A = day(['10:30', '15:00']); const B = day(['10:30', '17:00']);
  put({
    id: 'osaka_namiichi_seven_namba', name: 'チキン南蛮専門店 なみ一セヴン (Chicken Nanban Senmon Ten Namiichi Seven)', category: 'OMNI',
    lat: 34.66354, lng: 135.504848, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered fried chicken; pasta side; soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken-only menu; egg in the tartar sauce.',
    hours_raw: 'Mon, Tue, Fri 10:30–15:00; Sat, Sun and public holidays 10:30–17:00; closed Wed–Thu (Tabelog). Reservations online (Tabelog). No cards; e-money and QR accepted (Tabelog). Waits at Sunday lunch (August 2026).',
    hours: { 0: A, 1: A, 4: A, 5: B, 6: B }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-Sennichimae 7-4, in Ura-Namba — a few minutes from Namba and Nipponbashi stations',
    cuisine: 'Chicken nanban only · chicken nanban set ¥1,700 with a choice of sauce: sweet vinegar, lemon basil or spicy mala; double portion +¥600 with two sauces · bottomless clay-pot rice, black-pepper pasta side, pickles and tartar sauce · miso soup and salad · ¥100 off for following on Instagram · 16 seats, mostly counter',
    website: null, gmaps: gm('チキン南蛮専門店 なみ一セヴン'), menu_url: null,
    notes: "[Chicken nanban · a one-dish chicken nanban lunch spot in Ura-Namba] A popular little counter shop in Ura-Namba that serves only chicken nanban, the crisp-battered chicken with sweet vinegar and tartar sauce. The set is ¥1,700: choose classic sweet vinegar, lemon basil or spicy mala, or pay ¥600 more for a double portion with two sauces. The clay-pot rice, a black-pepper pasta side, pickles and the egg-rich tartar sauce are all bottomless, so the set is filling. Food comes fast, but expect a short wait at weekend lunch. Daytime only; closed Wednesdays and Thursdays. No cards.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Chicken nanban specialty shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Chicken nanban.',
      anecdotes: [
        { text: '"The batter was perfectly crispy, and the chicken was tender and juicy, bursting with flavor. The tartar sauce had a wonderful balance of acidity and creaminess, with a strong egg flavor…" — September 2026, Chicken Nanban with Sweet Vinegar, ¥1,700.', source: R + 'B536013014/' },
        { text: '"The menu features only Chicken Nanban (JPY 1,700), with three sauce options: sweet vinegar, lemon basil, and spicy mala." — August 2026.', source: R + 'B533535117/' },
      ],
      japanese_sources_summary: '食べログ: チキン南蛮専門店 なみ一セヴン、大阪市中央区難波千日前7-4、なんば駅から278m、月・火・金 10:30〜15:00、土・日・祝 10:30〜17:00、水・木休み、予約はネットで、カード不可、電子マネー・QR可、16席。口コミ(2026年5〜9月): 裏なんばのチキン南蛮だけの店、1,700円、たれは甘酢・レモンバジル・Mala の3種、大盛り (+600円) で2種、土鍋ご飯・黒こしょうのパスタ・漬物・タルタルはおかわり自由、味噌汁とサラダ、Instagram のフォローで100円引き、提供は5分ほど、日曜の昼は待つことも、2人で切り盛り、以前は1,000円ほどだった。',
      confidence: 'medium', sources: [TB, R + 'B530207303/', R + 'B533535117/', R + 'B534189049/', R + 'B534854057/', R + 'B536013014/', R + 'B537341804/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One dish, sauce choice only; order verbally (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前7-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB} (34.663603, 135.504848); 9 m from Menya Joroku Namba (osaka_menya_joroku_namba), pin offset ~7 m south so the two do not stack; GSI 大阪府大阪市中央区難波千日前7番4号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533535117/', R + 'B536013014/'],
    price_note: 'Prices from August–September 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Chicken nanban set (sweet vinegar, lemon basil or spicy mala)', '¥1,700', 'Sets', 'no', 'no', 'Bottomless rice, pasta, pickles and tartar (August 2026).', 'nanban'),
      it('', '', 'Double portion with two sauces', '+¥600', 'Sets', 'no', 'no', 'August 2026.', 'double'),
    ] }, {
    cuisine: 'チキン南蛮だけ・チキン南蛮のセット1,700円、たれは甘酢、レモンバジル、Mala から選ぶ。大盛りは+600円で2種・土鍋ご飯、黒こしょうのパスタ、漬物、タルタルはおかわり自由・味噌汁とサラダ・Instagram のフォローで100円引き・16席、ほぼカウンター',
    neighborhood: '中央区難波千日前7-4、裏なんば。なんば駅・日本橋駅から数分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げた鶏、パスタ、醤油を使うたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏のメニューだけで、タルタルに卵。',
    notes: '[チキン南蛮・裏なんば、チキン南蛮ひと品の昼の店] 裏なんばにある人気の小さなカウンターの店で、出すのはさくさくの衣に甘酢とタルタルのチキン南蛮だけ。セットは1,700円で、定番の甘酢、レモンバジル、ピリ辛の Mala から選ぶか、+600円の大盛りで2種に。土鍋ご飯、黒こしょうのパスタ、漬物、卵たっぷりのタルタルはどれもおかわり自由で、満腹になれる。提供は早いが、週末の昼は少し待つことも。昼のみ、水・木曜休み。カード不可。',
  });
}

// ================================================================ 酒菜屋 なないろ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27075640/'; const R = TB + 'dtlrvwlst/'; const IG = 'https://www.instagram.com/sakanaya.nanairo/';
  const A = day(['18:00', '01:00']); const B = day(['18:00', '23:30']);
  put({
    id: 'osaka_sakanaya_nanairo_shimanouchi', name: '酒菜屋 なないろ (Sakanaya Nanairo)', category: 'OMNI',
    lat: 34.672803, lng: 135.507471, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based dishes and ponzu; croquettes, tempura and spring rolls; cold noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea bream dashi served to every table; fish, crab and meat dishes.',
    hours_raw: 'Tue–Sat 18:00–01:00 (last entry 22:30); Sun and public holidays 18:00–23:30 (last entry 21:00); closed Mon; sometimes opens at 17:30 (Tabelog). Table charge with dashi and three small dishes ¥1,650–2,200 before 21:30; ¥770 with one small dish after 21:30 or with a course (Tabelog). Cards, e-money and PayPay accepted (Tabelog).',
    hours: { 1: A, 2: A, 3: A, 4: A, 5: A, 6: B }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimanouchi 1-14-15, Amano Bldg 1F, on a quiet street — 3 min from Nagahoribashi Stn exit 6',
    cuisine: 'Japanese fish and seasonal dishes, à la carte or course · every table starts with sea bream dashi and small dishes · assorted sashimi of wild fish (e.g. bluefin tuna, seared Spanish mackerel, yellowtail, sweet shrimp with salt and sudachi) · autumn eggplant with hairy crab sauce · simmered octopus and vegetables · matsutake dobin-mushi · shrimp cream croquettes · lotus root manju with crab · grilled oysters on kombu · shrimp and sake-lees gratin · duck breast, wagyu dishes · Kue hot pot with rice porridge in winter · Korean and Chinese dishes too: cold noodles, Horumon Chige, sweet and sour pork, spring rolls · clay-pot sea bream rice · sake such as Dewazakura and Tenpo Ichi · 10 counter seats and two sunken tables',
    website: IG, gmaps: gm('酒菜屋 なないろ'), menu_url: null,
    notes: "[Japanese · wild-fish sashimi and seasonal small dishes, Shimanouchi] A calm, quietly tucked-away Japanese restaurant near Nagahoribashi with a counter and two sunken tables. Every table begins with a gentle sea bream dashi and small seasonal dishes (charged ¥1,650–2,200), then you order à la carte or take a course. The assorted sashimi of wild fish is the reason to come, cut with care; after that the menu runs from autumn eggplant in hairy crab sauce, matsutake dobin-mushi and crab-filled lotus root manju to Kue hot pot in winter, plus a few surprise Korean and Chinese dishes such as cold noodles and sweet and sour pork. Attentive, friendly service suits solo diners at the counter. One diner found portions modest. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Japanese restaurant of fish and seasonal dishes (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Wild-fish sashimi; seasonal small dishes.',
      anecdotes: [
        { text: '"When visiting Nanairo, you must try the sashimi assortment. The sweet shrimp served with salt and sudachi was simply exquisite…" — October 2026.', source: R + 'B513215410/' },
        { text: '"Unusually for a Japanese restaurant… Korean and Chinese dishes, and the sweet and sour pork and Korean cold noodles are of restaurant-level quality…" — April 2026.', source: R + 'B474857223/' },
      ],
      japanese_sources_summary: '食べログ: 酒菜屋 なないろ、大阪市中央区島之内1-14-15 天野ビル 1F、長堀橋駅6番出口から徒歩3分、火〜土 18:00〜翌1:00 (入店22:30まで)、日・祝 18:00〜23:30 (入店21:00まで)、月曜休み、17:30から開く日も、21時半までの入店はお出汁と小鉢3種1,650〜2,200円、以降とコースはお出汁と小鉢1種770円、カード・電子マネー・PayPay 可、20席 (カウンター10、足を下ろせる座卓2)、Instagram @sakanaya.nanairo。口コミ(2025年9月〜2026年10月): 静かな場所の隠れ家、鯛の出汁と小鉢、天然魚の刺身の盛り合わせ (本マグロ、焼いたサワラ、ブリ、塩とすだちの甘エビ)、秋なすの毛ガニあん、蛸のうま煮・野菜煮、松茸の土瓶蒸し、海老クリームコロッケ、カニ入りのれんこんの manju、昆布で焼いた牡蠣、海老の酒粕グラタン、鴨、和牛、冬の Kue 鍋と雑炊、韓国冷麺、Horumon Chige、酢豚、春巻き、鯛の土鍋ご飯、Dewazakura、Tenpo Ichi、ていねいで気さくな接客、ひとりでも、量はかなり控えめ・空気は静かという声。',
      confidence: 'medium', sources: [TB, IG, R + 'B474857223/', R + 'B513215410/', R + 'B519266510/', R + 'B521306326/', R + 'B524707284/', R + 'B530587634/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter suits solo diners; attentive service (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内1-14-15 天野ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内一丁目14番15号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B513215410/', R + 'B519266510/'],
    price_note: 'Only the table charge is priced (Tabelog); JPY 10,000–14,999 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Sea bream dashi and three small dishes (table charge)', '¥1,650–2,200', 'Starters', 'ask', 'no', 'Before 21:30 (Tabelog).', 'otoshi'),
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', 'October 2026.', 'sashimi'),
      it('松茸の土瓶蒸し', '', 'Matsutake dobin-mushi', '', 'Seasonal', 'ask', 'no', 'Autumn (October 2026).', 'dobinmushi'),
      it('海老クリームコロッケ', '', 'Shrimp cream croquettes', '', 'Dishes', 'no', 'no', 'October 2026.', 'croquette'),
      it('', '', 'Kue hot pot with rice porridge', '', 'Hot pot', 'ask', 'no', 'Winter (December 2025).', 'kue'),
      it('', '', 'Korean cold noodles', '', 'Noodles', 'no', 'no', 'April 2026.', 'reimen'),
    ] }, {
    cuisine: '魚と季節の和食、アラカルトかコース・どの席もまず鯛の出汁と小鉢・天然魚の刺身の盛り合わせ (本マグロ、焼いたサワラ、ブリ、塩とすだちの甘エビなど)・秋なすの毛ガニあん・蛸のうま煮・野菜煮・松茸の土瓶蒸し・海老クリームコロッケ・カニ入りのれんこんの manju・昆布で焼いた牡蠣・海老の酒粕グラタン・鴨、和牛の料理・冬は Kue 鍋と雑炊・韓国や中華の料理も: 冷麺、Horumon Chige、酢豚、春巻き・鯛の土鍋ご飯・Dewazakura、Tenpo Ichi などの日本酒・カウンター10席と足を下ろせる座卓2卓',
    neighborhood: '中央区島之内1-14-15 天野ビル 1F、静かな通り。長堀橋駅6番出口から徒歩3分',
    gf_detail: 'グルテンフリーではありません。醤油やポン酢の料理、コロッケ・天ぷら・春巻き、冷麺。',
    vegan_detail: 'ヴィーガンではありません。どの席にも鯛の出汁、魚・カニ・肉の料理。',
    notes: '[和食・島之内、天然魚の刺身と季節の小鉢] 長堀橋近くの静かな場所にひっそりある落ち着いた和食店で、カウンターと足を下ろせる座卓が2つ。まずやさしい鯛の出汁と季節の小鉢 (1,650〜2,200円) が出て、あとはアラカルトかコース。目当ては天然魚の刺身の盛り合わせで、包丁仕事がていねい。ほかに秋なすの毛ガニあん、松茸の土瓶蒸し、カニ入りのれんこんの manju、冬の Kue 鍋、さらに冷麺や酢豚など韓国や中華の料理も少し。ていねいで気さくな接客で、カウンターならひとりでも。量は控えめという声も。月曜休み。',
  });
}

// ================================================================ Le Nez
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27124072/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_le_nez_higashishinsaibashi', name: 'Le Nez', category: 'OMNI',
    lat: 34.674244, lng: 135.505851, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade bread; financiers and baked sweets; sauces. Ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, shellfish, duck, beef and foie gras courses; butter and cream.',
    hours_raw: 'Daily 12:00–15:00 (last order 12:30) and 18:00–22:00 (last order 19:00); closing days not fixed (Tabelog). Courses by reservation (2025–2026). 10% service charge at lunch and dinner (Tabelog). Cards (VISA, Master, JCB) accepted; no e-money or QR (Tabelog).',
    hours: ALL(day(['12:00', '15:00'], ['18:00', '22:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-3-29, East Shinsaibashi KM Bldg 2F, easy to miss — 3 min from Nagahoribashi Stn; 5 min from Shinsaibashi',
    cuisine: 'Counter French built on Wakayama ingredients · lunch course around ¥10,000, e.g. carrot mousse with ikura; barracuda, turnip and olive; homemade bread; octopus quenelle with scallops, mussels and clam chowder; Iwate duck with fig, eggplant and Kaneyama miso; fromage blanc with rum raisin ice cream; tea and petits fours with fresh brown-sugar financiers · dinner: e.g. Kumano Beef & Foie Gras Course ¥18,700, 7-glass pairing ¥9,900 · a seasonal miniature-garden opener · meat finished on a shichirin over Binchotan · homemade plum soda; Colombian Geisha coffee · 12 seats: counter and a semi-private table for 4',
    website: null, gmaps: gm('Le Nez'), menu_url: null,
    notes: "[French · counter French with Wakayama ingredients, Nagahoribashi] A white, calm second-floor counter near Nagahoribashi, easy to miss from the street, that builds its French courses around Wakayama produce: Kumano beef, Nanko plums, Kaneyama miso and Binchotan charcoal for meat finished on a shichirin in the open kitchen. Meals open with a miniature garden that changes with the season. Lunch (around ¥10,000) might bring carrot mousse with ikura, an octopus quenelle in clam chowder and Iwate duck with Kaneyama miso; dinner runs to the Kumano Beef & Foie Gras Course with a wine pairing. Save room for the warm brown-sugar financiers, and try the homemade plum soda. Courses by reservation; 10% service.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Counter French restaurant (Tabelog; 2025–2026 reviews).', philosophy: 'Courses built around Wakayama ingredients (2026 reviews).', specialty: 'French courses with Wakayama produce.',
      anecdotes: [
        { text: '"…right in front of me was a shichirin (charcoal grill) in the open kitchen! I had never seen a shichirin in a French restaurant before! They used Binchotan charcoal from Wakayama…" — January 2026.', source: R + 'B521150168/' },
        { text: '"The use of Wakayama ingredients, such as the plum in the soda and the Kaneyama miso, left a strong impression on me as they were key to the dishes\' flavors." — September 2026, lunch course.', source: R + 'B535954983/' },
      ],
      japanese_sources_summary: '食べログ: Le Nez、大阪市中央区東心斎橋1-3-29 East心斎橋KMビル 2F、長堀橋駅から徒歩3分、心斎橋駅から5分、毎日12:00〜15:00 (L.O. 12:30)・18:00〜22:00 (L.O. 19:00)、定休日不定、サービス料10%、カード (VISA・Master・JCB) 可、電子マネー・QR不可、12席、4名の半個室。口コミ(2025年9月〜2026年9月): 長堀橋近くのビル2階、白いカウンターのフレンチ、和歌山の食材 (Kumano beef、Nanko の梅、Kaneyama miso、Binchotan)、オープンキッチンの shichirin、季節で変わるミニチュアの庭の一皿、昼のコース約1万円 (にんじんのムースと ikura、魚とかぶとオリーブ、自家製パン、蛸のクネルとホタテとムール貝とクラムチャウダー、岩手の鴨といちじくとなすと Kaneyama miso、フロマージュブランとラムレーズンのアイス、焼きたての黒糖のフィナンシェ)、夜の Kumano Beef & Foie Gras Course 18,700円、7杯のペアリング9,900円、自家製の梅のソーダ、Colombia の Geisha のコーヒー、気さくな接客。',
      confidence: 'medium', sources: [TB, R + 'B459676528/', R + 'B514301974/', R + 'B518140161/', R + 'B521150168/', R + 'B531697224/', R + 'B535954983/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; friendly chat about the dishes (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-3-29 East心斎橋KMビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目3番29号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B459676528/', R + 'B514301974/', R + 'B535954983/'],
    price_note: 'Dinner prices from an April 2026 review; lunch price from a September 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥10,000', 'Courses', 'no', 'no', 'September 2025; menu as of September 2026 in cuisine.', 'lunch'),
      it('', '', 'Kumano Beef & Foie Gras Course', '¥18,700', 'Courses', 'no', 'no', 'April 2026.', 'dinner'),
      it('', '', 'Wine pairing, 7 glasses', '¥9,900', 'Drinks', 'ask', 'ask', 'April 2026.', 'pairing'),
      it('', '', 'Homemade plum soda', '', 'Drinks', 'ask', 'ask', 'September 2026.', 'soda'),
    ] }, {
    cuisine: '和歌山の食材で組むカウンターのフレンチ・昼のコース約1万円、たとえばにんじんのムースと ikura、魚とかぶとオリーブ、自家製パン、蛸のクネルとホタテとムール貝にクラムチャウダー、岩手の鴨といちじくとなすと Kaneyama miso、フロマージュブランとラムレーズンのアイス、お茶と焼きたての黒糖のフィナンシェ・夜はたとえば Kumano Beef & Foie Gras Course 18,700円、7杯のペアリング9,900円・季節のミニチュアの庭の一皿から・肉は Binchotan の shichirin で仕上げる・自家製の梅のソーダ、Colombia の Geisha のコーヒー・12席: カウンターと4名の半個室',
    neighborhood: '中央区東心斎橋1-3-29 East心斎橋KMビル 2F、見落としやすい。長堀橋駅から徒歩3分、心斎橋から5分',
    gf_detail: 'グルテンフリーではありません。自家製パン、フィナンシェや焼き菓子、ソース。予約の際に確認を。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、鴨、牛肉、フォアグラのコース、バターとクリーム。',
    notes: '[フレンチ・長堀橋、和歌山の食材のカウンターフレンチ] 長堀橋近く、通りから見落としやすいビル2階の白く落ち着いたカウンターで、フレンチのコースを和歌山の食材で組み立てる: Kumano beef、Nanko の梅、Kaneyama miso、そしてオープンキッチンの shichirin で肉を仕上げる Binchotan。最初は季節で変わるミニチュアの庭の一皿。昼 (約1万円) はにんじんのムースと ikura、クラムチャウダーの蛸のクネル、Kaneyama miso を添えた岩手の鴨など、夜は Kumano Beef & Foie Gras Course にワインのペアリングを。焼きたての黒糖のフィナンシェまでお腹を残し、自家製の梅のソーダもぜひ。コースは予約制、サービス料10%。',
  });
}

// ================================================================ ニューベイブ 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27141021/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '20:00']); const B = day(['11:00', '22:00']);
  put({
    id: 'osaka_new_babe_namba', name: 'ニューベイブ 難波店 (Tonkatsu New Babe Namba)', category: 'OMNI',
    lat: 34.662921, lng: 135.499566, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, fried cutlets; sauces; katsu sandwich.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlets and ginger pork; pork miso soup.',
    hours_raw: 'Mon–Thu 11:00–20:00 (last order 19:30); Fri–Sun and public holidays 11:00–22:00 (last order 21:30) (Tabelog). Waits up to an hour at lunch; reserve on Tabelog (September–October 2026). No service charge (Tabelog). Cards, transit IC, e-money and QR accepted (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: B }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-naka 1-14-12 — 5 min from Namba Stn',
    cuisine: 'Tonkatsu · loin set ¥2,800 (cut over 2 cm thick); Hire (regular) ¥3,200; add a tenderloin piece ¥1,000; half tonkatsu set; Dream Assorted Set Meal of cutlet and garlicky ginger pork; tenderloin and ginger pork · refills of rice (served in a wooden tub), cabbage and pork miso soup · several sauces and seasonings at the table · katsu sandwich · 18 seats incl. a counter by the kitchen',
    website: null, gmaps: gm('ニューベイブ 難波店'), menu_url: null,
    notes: "[Tonkatsu · thick, tender tonkatsu with free refills, Namba] A busy tonkatsu shop a few minutes from Namba, one of several New Babe branches, serving thick, tender cutlets: a loin over 2 cm thick with sweet fat (¥2,800) or lean Hire (¥3,200), and sets pairing a cutlet with garlicky ginger pork. Rice comes in a wooden tub, and rice, cabbage and pork miso soup are refillable; try the cutlets with the range of sauces and seasonings on the table. Staff explain the seasonings kindly. Lunch waits can reach an hour, so reserve on Tabelog. One diner thought prices a bit high and one raised hygiene concerns about glove use at the counter (October 2026).",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tonkatsu shop, branch of New Babe (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Thick-cut tonkatsu.',
      anecdotes: [
        { text: '"The thickness was over 2 centimeters, providing a satisfying bite. The flavor near the fat was absolutely divine, pairing well with the slightly sweet sauce." — October 2026, Loin Set Meal ¥2,800.', source: R + 'B538024408/' },
        { text: '"There were plenty of sauces and seasonings to choose from for the tonkatsu, and I could also get refills of cabbage, rice, and tonjiru (pork miso soup)." — June 2025.', source: R + 'B508244621/' },
      ],
      japanese_sources_summary: '食べログ: ニューベイブ 難波店、大阪市浪速区難波中1-14-12、なんば駅から徒歩5分、月〜木 11:00〜20:00 (L.O. 19:30)、金〜日・祝 11:00〜22:00 (L.O. 21:30)、サービス料なし、カード・交通系IC・電子マネー・QR可、18席。口コミ(2025年6月〜2026年10月): 厚く柔らかいとんかつ、ロース定食2,800円 (2cm超)、Hire (レギュラー) 3,200円、ヒレの追加1,000円、ハーフの定食、とんかつとにんにくの効いた豚の生姜焼きの Dream Assorted Set Meal、木のおひつのご飯、ご飯・キャベツ・豚肉の味噌汁のおかわり、いろいろなソースと調味料、katsu sandwich、昼は1時間待ちも、食べログで予約を、親切に説明してくれる店の人、値段は少し高めという声、カウンターでの手袋の使い方など衛生面が気になったという声 (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B508244621/', R + 'B535273140/', R + 'B535546251/', R + 'B536690663/', R + 'B537038058/', R + 'B538024408/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain seasonings and refills (September 2026).' },
    safety: { ...SAFETY0, gf_cross_contamination: [{ text: 'One diner saw the same hands breading raw meat and making katsu sandwiches, and inconsistent glove use (October 2026).', source: R + 'B538024408/' }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-14-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.662984, 135.499566); same address as Vegan Cafe Tsukineko (osaka_vegan_cafe_tsukineko), pin offset ~7 m south so the two do not stack; GSI 大阪府大阪市浪速区難波中一丁目14番12号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535273140/', R + 'B538024408/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Loin set meal', '¥2,800', 'Tonkatsu', 'no', 'no', 'October 2026.', 'rosu'),
      it('', '', 'Hire (regular)', '¥3,200', 'Tonkatsu', 'no', 'no', 'September 2026.', 'hire'),
      it('', '', 'Extra tenderloin piece', '¥1,000', 'Tonkatsu', 'no', 'no', 'October 2026.', 'hire_add'),
      it('', '', 'Dream Assorted Set Meal (cutlet and ginger pork)', '', 'Sets', 'no', 'no', 'October 2026.', 'dream'),
    ] }, {
    cuisine: 'とんかつ・ロース定食2,800円 (2cm超の厚さ)、Hire (レギュラー) 3,200円、ヒレの追加1,000円、ハーフの定食、とんかつとにんにくの効いた豚の生姜焼きの Dream Assorted Set Meal、ヒレと生姜焼き・ご飯 (木のおひつ)、キャベツ、豚肉の味噌汁はおかわりできる・卓上にいろいろなソースと調味料・katsu sandwich・厨房の前のカウンターを含め18席',
    neighborhood: '浪速区難波中1-14-12。なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げたかつ、ソース、katsu sandwich。',
    vegan_detail: 'ヴィーガンではありません。とんかつと豚の生姜焼き、豚肉の味噌汁。',
    notes: '[とんかつ・なんば、厚く柔らかいとんかつとおかわり] なんばから数分、いくつかあるニューベイブの店のひとつで、にぎわう人気店。厚く柔らかいかつが看板で、脂の甘い2cm超のロース (2,800円) か赤身の Hire (3,200円)、かつとにんにくの効いた生姜焼きのセットも。ご飯は木のおひつで、ご飯・キャベツ・豚肉の味噌汁はおかわりでき、卓上のいろいろなソースや調味料で味を変えて。店の人が調味料をていねいに説明してくれる。昼は1時間待つこともあるので食べログで予約を。値段が少し高め、カウンターでの手袋の使い方など衛生面が気になったという声も (2026年10月)。',
  });
}

save();
