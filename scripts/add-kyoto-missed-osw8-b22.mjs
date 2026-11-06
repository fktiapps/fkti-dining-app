// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 22.
//   + みや古 Miyako (old curry-udon and donburi shop by Sanjo Ohashi; core list)
//   + 酒と魚 DNA Sake to Sakana DNA (fish-and-sake izakaya with kaiseki technique, Bib Gourmand per reviews; core list)
//   + ベーカリー ウキ Bakery uki (tiny takeaway bakery near Kawaramachi Marutamachi; notable list)
//   + こま井亭 Komai Tei (Omi-beef sukiyaki in a Kiyamachi townhouse by the Kamo; notable list)
//   Picked 2026-11-05 after batch 21. `queue.mjs kyoto-missed next core 200`: みや古 26001433, 酒と魚 DNA 26034583.
//   `next notable 200`: 出町ふたば JR京都伊勢丹 26023639 (skipped, branch of a brand in data), ベーカリー ウキ 26033779,
//   こま井亭 26003329. Same-name check first, across concepts: no other みや古, DNA, ベーカリー ウキ or こま井 in our crawls
//   (other ウキ hits are unrelated トウキョウ names). None of the four is in data/kyoto.json: grep by name and address
//   (二町目79, 燈籠町559, 俵屋町455, 大阪町532) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26023639', '出町ふたば JR京都伊勢丹: a counter of 出町ふたば, already in data (kyoto_demachi_futaba); our crawls hold 5 same-name ふたば shops (二寧坂ふたば 26000597, 出町ふたば 26001520, 七条ふたば 26017156, this one, 出町ふたば 大丸京都店 26032048) — a branch of a brand already in data is skipped (integrator group line, 2026-11-05).');

// ================================================================ みや古
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001433/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:30'], ['17:30', '20:00']);
  put({
    id: 'kyoto_miyako_curry_udon', name: 'みや古 (Miyako)', category: 'OMNI',
    lat: 35.009376, lng: 135.774159, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon, curry thickened over dashi, tempura and fried curry bowls (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: udon and donburi built on dashi, with meat, egg, shrimp tempura and deep-fried tofu toppings (2025–2026 reviews).',
    hours_raw: '11:30–15:30 (last order 15:00) and 17:30–20:00 (last order 19:30); closed Tuesday and the third Wednesday (Tabelog). No reservations (Tabelog). Food can take a while (March 2026). Cash only — no cards, e-money or QR (Tabelog). 10 seats; non-smoking; children and strollers welcome (Tabelog). English and Simplified Chinese menus; takeaway (Tabelog). On Sanjo-dori just east of the Sanjo Ohashi bridge; 1 min walk from exit 9 of Sanjo Stn (Keihan) (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori east of Sanjo Ohashi — 1 min walk from Sanjo Stn',
    cuisine: 'Old-fashioned udon and donburi shop known for curry udon (2025–2026 reviews) · meat curry udon ¥900, shrimp-tempura curry udon ¥1,050, curry udon with Kujo negi (December 2025–March 2026) · sets of curry udon with a mini egg bowl, or hot or cold udon with a fried-curry bowl (2025–2026 reviews) · egg bowl ¥550, konoha-don, yakisoba, Miyako set meal about ¥950 (December 2025) · sake (Tabelog) · mostly under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('みや古 三条 カレーうどん'), menu_url: null,
    notes: '[Udon · Sanjo Ohashi, curry udon the old way] A retro little udon and donburi shop just east of the Sanjo bridge, known for curry udon over Kyoto dashi: meat curry udon ¥900, shrimp-tempura curry udon ¥1,050, and sets with a mini egg bowl or a fried-curry bowl. Cheap — most bowls under ¥1,000. Opinions vary: some find the dashi gentle and fine, others bland. Food can take a while. Cash only. Closed Tuesday and the third Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers in 2025–2026 call it a long-established, retro udon shop famous for curry udon, popular with locals, students and visitors from abroad; Tabelog lists English and Chinese menus.',
      philosophy: null, specialty: 'Curry udon; egg rice bowl.',
      anecdotes: [
        { text: '"It\'s important that the noodles don\'t break when lifted with chopsticks, and the firmness of the noodles holds up well against the thickness of the curry." — January 2026.', source: R + 'B520725983/' },
        { text: '"Please note that it takes quite a while for the food to be served, so those in a hurry should be cautious!" — March 2026.', source: R + 'B524377338/' },
        { text: '"The egg rice bowl had a rather bland flavor—maybe it\'s a Kyoto-style?! I prefer a stronger seasoning." — June 2026.', source: R + 'B529891582/' },
      ],
      japanese_sources_summary: '食べログ: うどん・カレー・丼、東山区三条通大橋東入ル二町目79、京阪三条駅9番出口から徒歩1分、11:30〜15:30 (L.O.15:00)・17:30〜20:00 (L.O.19:30)、火曜と第3水曜休み、予約不可、現金のみ、10席、禁煙、子ども・ベビーカー可、英語・中国語のメニュー、テイクアウト。口コミ (2025年11月〜2026年6月、英語): カレーうどんで知られる昔ながらのうどん・丼の店、肉カレーうどん900円、海老天カレーうどん1,050円、九条ねぎ、カレーうどんとミニ玉子丼のセット、うどんと揚げカレー丼のセット、玉子丼550円、木の葉丼、焼きそば、みや古定食950円ほど、出てくるまで時間がかかる、だしが薄いとの声も。',
      confidence: 'medium', sources: [TB, R + 'B516842872/', R + 'B517538494/', R + 'B518535397/', R + 'B520534908/', R + 'B520725983/', R + 'B524377338/', R + 'B525118980/', R + 'B525654047/', R + 'B527764117/', R + 'B529891582/'] },
    cultural_comfort: { level: 'english', note: 'English and Chinese menus (Tabelog); cash only; food can take a while.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区三条通大橋東入ル二町目79',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.009376, 135.774159); cross-checked: GSI 京都府京都市東山区二町目79番地 (lot) 49 m — the full street address returned only the ward, the town-and-lot form matched; nearest Kyoto record 37 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520725983/', R + 'B524377338/', R + 'B518535397/'],
    price_note: 'No menu read; prices from December 2025–March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Meat curry udon', '¥900', 'Udon', 'no', 'no', 'January 2026.', 'niku_curry_udon'),
      it('', '', 'Shrimp-tempura curry udon', '¥1,050', 'Udon', 'no', 'no', 'March 2026.', 'ebiten_curry_udon'),
      it('', '', 'Egg rice bowl', '¥550', 'Donburi', 'ask', 'no', 'December 2025.', 'tamago_don'),
      it('', '', 'Curry udon and mini egg bowl set', '', 'Sets', 'no', 'no', '', 'curry_set'),
    ] }, {
    cuisine: 'カレーうどんで知られる昔ながらのうどんと丼の店 (2025〜2026年の口コミ)・肉カレーうどん900円、海老天カレーうどん1,050円、九条ねぎのカレーうどん (2025年12月〜2026年3月)・カレーうどんとミニ玉子丼のセット、温かいか冷たいうどんと揚げカレー丼のセット (2025〜2026年の口コミ)・玉子丼550円、木の葉丼、焼きそば、みや古定食950円ほど (2025年12月)・日本酒 (食べログ)・多くは1,000円未満 (食べログ)',
    neighborhood: '三条大橋の東、三条通。三条駅から徒歩1分',
    gf_detail: 'グルテンフリーではない。小麦のうどん、だしのカレー、天ぷら、揚げカレー丼 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのうどんと丼に、肉、卵、海老天、揚げなどがのる (2025〜2026年の口コミ)。',
    notes: '[うどん・三条大橋、昔ながらのカレーうどん] 三条大橋のすぐ東のレトロな小さなうどんと丼の店。京のだしのカレーうどんで知られる: 肉カレーうどん900円、海老天カレーうどん1,050円、ミニ玉子丼や揚げカレー丼とのセットも。多くは1,000円未満と安い。だしがやさしいと感じる人も、薄いと感じる人も。出てくるまで時間がかかることも。現金のみ。火曜と第3水曜休み。',
  });
}

// ================================================================ 酒と魚 DNA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034583/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_sake_to_sakana_dna', name: '酒と魚 DNA (Sake to Sakana DNA)', category: 'OMNI',
    lat: 35.000125, lng: 135.760824, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki-style izakaya dishes on dashi — wan soups, hassun, sashimi, grilled fish, tempura, fried taro, spring rolls, Inaniwa udon; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-sake izakaya — soups on dashi, soft-shelled turtle, sashimi, grilled fish and duck (Tabelog; 2026 reviews).',
    hours_raw: 'Monday to Saturday 17:30–23:00 (food last order 22:00, drinks 22:30); closed Sunday and irregularly (Tabelog). Reservations accepted; tables cannot be joined — groups of five or more sit separately; ask before bringing children (Tabelog). No service or table charge (Tabelog original サービス料・チャージ料 共になし). 20 seats: a 10-seat counter and tables for two by the entrance; private hire up to 20; non-smoking (Tabelog). Cards and e-money (Tabelog). Directly south of the main entrance of Hotel Nikko Princess Kyoto on Higashinotoin; 3 min walk from exit 5 of Shijo Stn, 8 min from Karasuma Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashinotoin south of Takatsuji, opposite Hotel Nikko Princess — 3 min walk from Shijo Stn',
    cuisine: 'Izakaya of fish and sake that brings kaiseki technique to an izakaya format, with fish delivered each morning from Obama (Tabelog) · start with a wan (soup) — e.g. soft-shelled turtle, scallop, pumpkin dumpling with mushroom sauce — then hassun, sashimi (kombu-cured sea bream), grilled fish skewers and a closing dish of your choice (Tabelog; 2026 reviews) · regulars\' staples: salted-squid potato, mentaiko potato, fried small taro, bonito potato salad, umaki, atsuage, duck breast (2026 reviews) · seasonal dishes such as soft-shelled-turtle or sanma-and-matsutake spring rolls, chestnut and maitake tempura, young-ayu tempura, mushroom and abalone sautéed in butter soy, Inaniwa udon (2026 reviews) · sake by the glass, e.g. Akabu, Senkin, Atago no Matsu; craft cola (October 2026) · about ¥5,000–10,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('酒と魚 DNA 京都'), menu_url: null,
    notes: '[Izakaya · Higashinotoin opposite the Nikko Princess, kaiseki skills at izakaya prices] A bright counter izakaya near Shijo Karasuma that builds your own small kaiseki: start with a soup — soft-shelled turtle is the one to have — then hassun, kombu-cured sashimi from Obama fish, grilled skewers and a closing bowl, with sake by the glass. Regulars swear by the salted-squid potato, fried small taro and the umaki; reviewers mention a Michelin Bib Gourmand. About ¥5,000–8,000 a head, no charge. Groups of five or more are split. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef and staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a quality izakaya focused on fish and sake that expresses techniques and ideas honed in kaiseki through the izakaya format, with local fish delivered every morning from Obama. Reviewers in 2026 describe warm, professional staff, a menu that changes with the seasons, and a Michelin Bib Gourmand — "in 2026" (June 2026) and "for three consecutive years" (August 2026).',
      philosophy: 'Rediscovering the beauty of "wa" cuisine, casually and affordably (Tabelog).', specialty: 'Wan (soups), esp. soft-shelled turtle; hassun; umaki.',
      anecdotes: [
        { text: 'An October 2026 regular on a seventeenth visit comes for every seasonal menu change; the pumpkin dumpling in mushroom sauce was "one of the best bowls I\'ve ever had."', source: R + 'B465205763/' },
        { text: '"It felt like creating a personalized kaiseki course" — August 2026, though a few dishes could have come hotter.', source: R + 'B533986117/' },
        { text: '"It was by far the best I\'ve ever had!" — August 2026, on the umaki.', source: R + 'B536915166/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・海鮮・居酒屋、下京区燈籠町559-1 ジェイアイビル1F、四条駅5番出口から徒歩3分、ホテル日航プリンセス京都の正面玄関の南、月〜土 17:30〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、日曜と不定休、予約可、テーブルはつなげられず5名以上は分かれて、子連れは要相談、サービス料・チャージ料共になし、20席 (カウンター10、2人用テーブル)、貸切20名まで、禁煙、カード・電子マネー可、懐石で培った技と考えを居酒屋の形で、毎朝 Obama から届く地魚、お椀で勝負、日本酒とのペアリング。口コミ (2026年6月〜10月、英語): まずお椀 (すっぽん、帆立、かぼちゃ饅頭のきのこあん)、八寸、昆布締めの鯛、焼き魚の串、締めは選べる、塩辛ポテト、明太ポテト、小芋の唐揚げ、鰹のポテサラ、う巻き、厚揚げ、鴨ロース、すっぽんの春巻き、稚鮎の天ぷら、稲庭うどん、Akabu、Senkin、Atago no Matsu、ミシュランのビブグルマン (口コミ)、スタッフが温かい。',
      confidence: 'medium', sources: [TB, R + 'B429242596/', R + 'B465205763/', R + 'B510166169/', R + 'B526246898/', R + 'B530920488/', R + 'B533076346/', R + 'B533497045/', R + 'B533986117/', R + 'B536144844/', R + 'B536915166/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; start with a soup; no charge; groups of 5+ sit separately; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区燈籠町559-1 ジェイアイビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.000125, 135.760824); cross-checked: GSI 京都府京都市下京区燈籠町559番地 (lot) 42 m; kyoto_mash_kyoto is 40 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530920488/', R + 'B465205763/'],
    price_note: 'No menu prices read; bills about ¥5,000–10,000; no service or table charge.', last_checked: TODAY, items: [
      it('', '', 'Soft-shelled turtle wan (soup)', '', 'Wan', 'ask', 'no', '', 'suppon_wan'),
      it('', '', 'Hassun (assorted small dishes)', '', 'Small dishes', 'ask', 'no', '', 'hassun'),
      it('', '', 'Umaki (eel omelette)', '', 'Small dishes', 'ask', 'no', '', 'umaki'),
      it('', '', 'Fried small taro', '', 'Fried', 'ask', 'ask', '', 'koimo_karaage'),
    ] }, {
    cuisine: '懐石の技を居酒屋の形で出す魚と日本酒の店。地魚は毎朝 Obama から (食べログ)・まずお椀 (すっぽん、帆立、かぼちゃ饅頭のきのこあんなど)、それから八寸、昆布締めの鯛などのお造り、焼き魚の串、選べる締め (食べログ、2026年の口コミ)・常連の定番: 塩辛ポテト、明太ポテト、小芋の唐揚げ、鰹のポテサラ、う巻き、厚揚げ、鴨ロース (2026年の口コミ)・季節の品: すっぽんやさんまと松茸の春巻き、栗と舞茸の天ぷら、稚鮎の天ぷら、きのこと鮑のバター醤油、稲庭うどん (2026年の口コミ)・グラスの日本酒 (Akabu、Senkin、Atago no Matsu など)、クラフトコーラ (2026年10月)・5,000〜10,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '高辻の南の東洞院通、ホテル日航プリンセス京都の向かい。四条駅から徒歩3分',
    gf_detail: '要確認。お椀、八寸、お造り、焼き魚、天ぷら、小芋の唐揚げ、春巻き、稲庭うどんなど、だしを使う懐石風の居酒屋料理。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのお椀、すっぽん、お造り、焼き魚、鴨の魚と日本酒の居酒屋 (食べログ、2026年の口コミ)。',
    notes: '[居酒屋・東洞院、日航プリンセスの向かい、懐石の技を居酒屋の値段で] 四条烏丸近くの明るいカウンターの居酒屋で、自分だけの小さな懐石を組める: まずお椀 (すっぽんがおすすめ)、それから八寸、Obama の魚の昆布締め、焼き物の串、締めの一品を、グラスの日本酒とともに。常連は塩辛ポテト、小芋の唐揚げ、う巻きを推す。ミシュランのビブグルマンと口コミにある。1人5,000〜8,000円ほどでチャージなし。5名以上は分かれて座る。日曜休み。',
  });
}

// ================================================================ ベーカリー ウキ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26033779/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_bakery_uki', name: 'ベーカリー ウキ (Bakery uki)', category: 'OMNI',
    lat: 35.017717, lng: 135.770006, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery of croissants, loaves, doughnuts and filled breads (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Hard breads and loaves may be plant-based, but croissants, cream bread, anpan and doughnuts use butter, dairy or egg; no ingredient information (2026 reviews).',
    hours_raw: 'Tuesday to Saturday 10:00–17:00; closed Sunday and Monday; hours may change (Tabelog). Takeaway only; the shop fits one group at a time, so a queue can form, especially at weekends — easiest just after opening on weekdays (May–July 2026). Cards, e-money and PayPay (Tabelog). On Marutamachi-dori a short walk east of the Kawaramachi Marutamachi crossing; 3 min walk from Jingu-Marutamachi Stn (Keihan) (Tabelog; May 2026). Opened 29 January 2020 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi east of Kawaramachi — 3 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Tiny takeaway bakery of hard and soft breads (2026 reviews) · croissant ¥360, noir raisin ¥360, potato-dough bread ¥510, cinnamon doughnut ¥240, lemon doughnut (May–August 2026) · loaf bread, said to be the best seller; French bread and walnut bread (March–July 2026) · pain au chocolat, cranberry chocolate, nut chocolate, sugar-cane bread, anpan, melon bread, curry bread, croque monsieur, cream bread, honey nuts (2026 reviews) · mostly under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('Bakery uki 京都 丸太町'), menu_url: null,
    notes: '[Bakery · Marutamachi near Kawaramachi, one customer at a time] A shop so narrow it takes one group at a time, lined with breads from croissants and walnut loaves to cream bread and a light, barely greasy cinnamon doughnut (¥240); the loaf is the best seller. Prices are fair — croissants ¥360. Takeaway only; queues at weekends, quieter just after opening on weekdays. Closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Bakers (unnamed)'], origin: null,
      background: 'Per Tabelog: opened 29 January 2020. Reviewers in 2026 describe a takeaway-only shop barely wide enough for one person, shelves of hard breads, croissants and savoury breads, and weekend queues.',
      philosophy: null, specialty: 'Loaf bread; croissant; cinnamon doughnut.',
      anecdotes: [
        { text: 'A May 2026 visitor found the cinnamon doughnut far less oily than most — "almost non-greasy to the touch" — with a dense, chewy crumb.', source: R + 'B527296342/' },
        { text: '"Although it\'s a popular spot that draws a line on weekends, it\'s relatively easy to get in right after opening on weekdays or in the early afternoon." — July 2026.', source: R + 'B533427655/' },
        { text: '"The most shocking item was definitely the \'Cream Bread.\'" — August 2026.', source: R + 'B533154454/' },
      ],
      japanese_sources_summary: '食べログ: パン・サンドイッチ、上京区俵屋町455-6、京阪神宮丸太町駅から徒歩約3分、火〜土 10:00〜17:00、日・月休み、予約可、禁煙、カード・電子マネー・PayPay 可、2020年1月29日オープン。口コミ (2026年3月〜8月、英語): 持ち帰りのみ、一組ずつしか入れない狭い店、週末は行列、平日の開店直後が狙い目、クロワッサン360円、ノワールレザン360円、ポテト生地のパン510円、シナモンドーナツ240円、レモンドーナツ、食パンが一番人気、バゲット、くるみのパン、パン・オ・ショコラ、メロンパン、カレーパン、クロックムッシュ、クリームパン。',
      confidence: 'medium', sources: [TB, R + 'B517141150/', R + 'B525894321/', R + 'B527238548/', R + 'B527296342/', R + 'B528240859/', R + 'B528453751/', R + 'B530216898/', R + 'B533154454/', R + 'B533427655/', R + 'B533754257/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the breads; takeaway only; one group inside at a time; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区俵屋町455-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.017717, 135.770006); cross-checked: GSI 京都府京都市上京区俵屋町455番地 (lot) 30 m; kyoto_reine_des_pres is 51 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528453751/', R + 'B527296342/', R + 'B517141150/'],
    price_note: 'Prices from May–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Croissant', '¥360', 'Bread', 'no', 'no', 'May 2026.', 'croissant'),
      it('', '', 'Noir raisin', '¥360', 'Bread', 'no', 'ask', 'May 2026.', 'noir_raisin'),
      it('', '', 'Potato-dough bread', '¥510', 'Bread', 'no', 'ask', 'July 2026.', 'potato_bread'),
      it('', '', 'Cinnamon doughnut', '¥240', 'Sweets', 'no', 'ask', 'May 2026.', 'cinnamon_donut'),
    ] }, {
    cuisine: 'ハード系もソフト系も並ぶ、持ち帰りだけの小さなパン屋 (2026年の口コミ)・クロワッサン360円、ノワールレザン360円、ポテト生地のパン510円、シナモンドーナツ240円、レモンドーナツ (2026年5月〜8月)・一番人気という食パン、バゲット、くるみのパン (2026年3月〜7月)・パン・オ・ショコラ、クランベリーチョコ、ナッツチョコ、きび糖のパン、あんぱん、メロンパン、カレーパン、クロックムッシュ、クリームパン、ハニーナッツ (2026年の口コミ)・多くは1,000円未満 (食べログ)',
    neighborhood: '河原町の東の丸太町通。神宮丸太町駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。クロワッサン、食パン、ドーナツ、惣菜パンの小麦のパン屋 (2026年の口コミ)。',
    vegan_detail: '要確認。ハード系や食パンは植物性のものもありうるが、クロワッサン、クリームパン、あんぱん、ドーナツにはバター、乳、卵を使う。原材料の情報はない (2026年の口コミ)。',
    notes: '[パン・河原町丸太町の東、一組ずつ入る店] 一組ずつしか入れない細い店に、クロワッサンやくるみのパンからクリームパン、軽くて油っぽくないシナモンドーナツ (240円) までが並ぶ。一番人気は食パン。値段は手頃で、クロワッサン360円。持ち帰りのみ。週末は行列、平日の開店直後は比較的すいている。日・月休み。',
  });
}

// ================================================================ こま井亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003329/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_komaitei_kiyamachi', name: 'こま井亭 (Komai Tei)', category: 'OMNI',
    lat: 35.009332, lng: 135.771212, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Kansai-style sukiyaki cooked in soy sauce and sugar, with yuba and grilled tofu (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Omi-beef sukiyaki cooked in beef fat and eaten with raw egg (2025–2026 reviews).',
    hours_raw: 'Daily 17:00–22:00, irregular closures; hours may change (Tabelog). Reservations accepted (Tabelog); a reviewer found the phone manner curt and heard it followed a past no-show (December 2025). 60 seats in tatami rooms with sunken seating; private rooms; terrace dining in summer; non-smoking (Tabelog; October 2025). Cards (Master, JCB, AMEX, Diners), e-money and QR (Tabelog). A machiya down a narrow lane off Kiyamachi north of Sanjo, by the Kamo river; 3 min walk from Sanjo Stn exit 7 (Keihan) (Tabelog; October 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi north of Sanjo, by the Kamo — 3 min walk from Sanjo Stn',
    cuisine: 'Sukiyaki and shabu-shabu house (Tabelog) · Omi-beef sukiyaki in the Kansai style — beef seared in its fat with zarame sugar and soy sauce, cooked at the table by staff (and sometimes the owner) and dipped in egg (2025–2026 reviews) · with Kujo negi, yuba, grilled tofu and large shiitake; rice included; yuzu sorbet to finish (2025–2026 reviews) · bills about ¥5,000–15,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('こま井亭 木屋町 すき焼き'), menu_url: null,
    notes: '[Sukiyaki · Kiyamachi by the Kamo, Omi beef the Kansai way] An old townhouse down a narrow lane off Kiyamachi, with tatami rooms and terrace seats in summer, where staff — sometimes the owner — cook Omi-beef sukiyaki at your table the Kansai way, searing the beef in its fat with sugar and soy, then serving it with egg, Kujo negi and yuba. About ¥10,000–15,000; some find it a little dear for the amount of meat. Popular with visitors. Open nightly.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null,
      background: 'Reviewers in 2025–2026 describe a long-established sukiyaki house in a traditional machiya by the Kamo river, where staff cook the first slices for you; an August 2025 regular on a fifth visit saw the owner come out to cook too, and a December 2025 diner heard the curt phone manner dates from a past no-show.',
      philosophy: null, specialty: 'Omi-beef sukiyaki, Kansai style.',
      anecdotes: [
        { text: 'An August 2025 regular, visiting during the Gozan Okuribi, had the Omi-beef sukiyaki prepared by the staff — and by the owner, who came out to cook it in person.', source: R + 'B26479245/' },
        { text: '"The phone service felt a bit curt, but I heard it\'s because of a past incident with a no-show cancellation." — December 2025, adding that there seemed to be fewer Chinese customers and more Japanese diners lately.', source: R + 'B520070150/' },
        { text: '"Considering the quantity and quality of the meat, the price felt a bit on the higher side." — October 2025.', source: R + 'B534007148/' },
      ],
      japanese_sources_summary: '食べログ: すき焼き・しゃぶしゃぶ、中京区木屋町三条上ル大阪町532、京阪三条駅7番出口から徒歩約3分、毎日 17:00〜22:00、不定休、予約可、60席、座敷・掘りごたつ、個室、禁煙、カード・電子マネー・QR 可。口コミ (2025年8月〜2026年6月、英語): Omi beef のすき焼き、関西風でざらめと醤油、スタッフ (時に店主) が焼いてくれる、卵、九条ねぎ、湯葉、焼き豆腐、大きな椎茸、ご飯付き、柚子のシャーベット、木屋町の細い路地の町家、鴨川沿い、夏はテラス席、電話の対応がそっけないとの声 (無断キャンセルがあったため、2025年12月)、肉の量の割にやや高いとの声。',
      confidence: 'medium', sources: [TB, R + 'B26479245/', R + 'B519115785/', R + 'B520070150/', R + 'B523510127/', R + 'B525622570/', R + 'B529048306/', R + 'B534007148/', R + 'B536795561/', R + 'B536815838/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff cook the sukiyaki for you; book ahead (phone can be brisk); cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町三条上ル大阪町532',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.009332, 135.771212); cross-checked: GSI 京都府京都市中京区上大阪町532番地 (lot) 63 m — the listed town 大阪町 matched only 大阪材木町, the variant 上大阪町 (the Kiyamachi-Sanjo town) matched the lot; kyoto_sanjo_haku is 38 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529048306/', R + 'B520070150/'],
    price_note: 'No menu prices read; bills about ¥5,000–15,000.', last_checked: TODAY, items: [
      it('', '', 'Omi-beef sukiyaki', '', 'Sukiyaki', 'no', 'no', 'Cooked at the table.', 'omi_sukiyaki'),
      it('', '', 'Shabu-shabu', '', 'Shabu-shabu', 'ask', 'no', 'Tabelog category.', 'shabu'),
    ] }, {
    cuisine: 'すき焼きとしゃぶしゃぶの店 (食べログ)・関西風の Omi beef のすき焼き: 牛脂で焼き、ざらめと醤油で、スタッフ (時に店主) が席で焼き、卵につけて (2025〜2026年の口コミ)・九条ねぎ、湯葉、焼き豆腐、大きな椎茸、ご飯付き、締めに柚子のシャーベット (2025〜2026年の口コミ)・会計は5,000〜15,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '三条の北、木屋町の鴨川沿い。三条駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。醤油と砂糖の関西風すき焼きに、湯葉や焼き豆腐 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛脂で焼き、生卵で食べる Omi beef のすき焼き (2025〜2026年の口コミ)。',
    notes: '[すき焼き・鴨川沿いの木屋町、関西風の Omi beef] 木屋町の細い路地の奥の古い町家。座敷と、夏はテラス席があり、スタッフ (時に店主) が席で Omi beef のすき焼きを関西風に焼く: 牛脂で焼き、砂糖と醤油で、卵、九条ねぎ、湯葉とともに。1万〜1万5千円ほどで、肉の量の割にやや高いという声も。旅行者にも人気。毎晩営業。',
  });
}

save();
