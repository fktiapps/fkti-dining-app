// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 2.
//   + 御二九と八さい はちべー Oniku to Yasai Hachibe (beef-offal kappo on Yanagi-koji; yagenbori group)   [core]
//   + 酒呑にし川 柳小路店 Shuten Nishikawa Yanagikoji (10-seat sake izakaya in the Hachibei Nagaya)      [core]
//   + HUNTER (meat-and-game bistro south of the Imperial Palace; since 2017)                              [notable]
//   + 生きている珈琲 Ikiteiru Coffee (basement kissaten on Shijo-dori; since 2011)                          [notable]
//   Taken in queue order on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (lane ids 26002409, 26035163) and
//   `next notable 200` (26028917, 26017295), after batch 1. None is in data/kyoto.json: grep by name (はちべー/御二九,
//   にし川/酒呑, HUNTER, 生きている/Ikiteiru) and address (中之町577, 壺屋町533, 立売東町) found none.
//   Group checks: はちべー is one of six differently named restaurants of the yagenbori group (group site list:
//   花見小路やげんぼり, 出逢ひ茶屋おせん, しぐれ茶屋侘助, 祇をん う桶や う, 花遊小路 江戸川, はちべー) — sister concepts, none
//   in data. 酒呑にし川 has one other open shop, 河原町五条店 (Tabelog 26036839, opened 2022-01-14; not in data) — a group
//   of 2. 生きている珈琲 lists only this shop on its own site.
//   Pins: はちべー and にし川 sit 12 m apart on the same alley (Tabelog points); nearest other record 16 m (VOG Kyoto).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 御二九と八さい はちべー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002409/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yagenbori.co.jp/shop/hachibei/';
  const H = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_oniku_to_yasai_hachibe', name: '御二九と八さい はちべー (Oniku to Yasai Hachibe)', category: 'OMNI',
    lat: 35.004464, lng: 135.768339, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the evening course runs through soy-marinated and ponzu-dressed offal, fried cartilage and a Chinese-noodle finish in the hot-pot broth; lunch comes with red miso soup and a soy-marinated heart dish (official menu; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef-offal restaurant — every course dish and lunch plate is built on beef (official menu).',
    hours_raw: 'Lunch 11:30–14:30, dinner 17:00–23:00; closed Tuesday (official site). Tabelog gives last entry at 14:00 for lunch (until sold out) and 21:30 for dinner. Lunch cannot be booked — come to the shop; the evening is a single omakase course, best booked (official site; Tabelog). Corkage ¥3,000 a bottle, by arrangement (official site). 20 seats: 8 at the first-floor counter, three tables upstairs (about 12) that can be hired; non-smoking; cards accepted, no e-money or QR (official site; Tabelog). Children welcome. On Yanagi-koji, 3 min walk from Hankyu Kawaramachi Stn (official site).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yanagi-koji alley off Shinkyogoku, north of Shijo — 3 min from Kyoto Kawaramachi Stn',
    cuisine: '"Niku kappo" of beef offal (uchiniku), with Kyoto vegetables and seasonal ingredients, using Japanese, Western and Chinese techniques (official site; Tabelog) · evening omakase, about 12–13 dishes, ¥8,800: liver-pâté salad, beef-tongue dumpling stew, tail, blanched mino and senmai tripe, fried trachea cartilage (urute), aorta in Chinese dressing, Achilles tendon with ponzu, grilled cuts cooked by the staff, then the house beef-tongue harihari hot pot finished with Chinese noodles in its broth (official site) · lunch 11:30–14:30 with small dish, rice, red miso soup, dessert and coffee: seasonal-vegetable and harami rice bowl ¥2,500, beef-tongue hamburg steak with vegetables ¥1,800, beef-neck stew ¥1,800 (official site) · drink pairing ¥4,000; house sake 佳風 ¥1,000; natural wines (official site) · takeaway bento from ¥2,200 (official site)',
    website: SITE, gmaps: gm('御二九と八さい はちべー'), menu_url: SITE,
    notes: "[Beef-offal kappo · Yanagi-koji off Shijo] A small two-storey house on the stone-paved Yanagi-koji alley, named after the nearby Hachibei Myojin shrine, serving beef offal as Kyoto-style kappo. Evenings are one omakase of about a dozen dishes (¥8,800) — Achilles tendon with ponzu, aorta, liver with garlic chives, tripe — with the grilling done for you at the counter and a beef-tongue harihari hot pot finished with Chinese noodles. Lunch is a harami rice bowl with vegetables (¥2,500), no booking. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources); run by the yagenbori group'], origin: null,
      background: 'Per the yagenbori group site: one of the group’s six Kyoto restaurants (with 花見小路やげんぼり, 出逢ひ茶屋おせん, しぐれ茶屋侘助, 祇をん う桶や う and 花遊小路 江戸川); each cut is prepared one by one so that the texture, flavour and nourishment of beef offal come through. Per Tabelog (operator text): the name comes from the Hachibei Myojin shrine nearby. A March 2026 reviewer had eaten the harami bowl at lunch several times before the pandemic.',
      philosophy: 'Per the official site: to overturn the idea of horumon by drawing out its flavour to the limit with careful handwork.',
      specialty: 'Beef-tongue harihari hot pot with Chinese noodles; harami rice bowl.',
      anecdotes: [
        { text: 'An October 2026 repeat guest described the owner pacing the dishes to the guest’s drinking and talking passionately about beef horumon.', source: R + 'B470068259/' },
        { text: 'The yakiniku part of the course was "grilled by the master" — April 2026.', source: R + 'B525591006/' },
        { text: 'At lunch the staff "confirmed the amount of rice before serving" — December 2025.', source: R + 'B518961376/' },
        { text: 'A June 2026 diner who eats a lot found the slices a bit thin and would have liked one thicker cut, while praising the cheek sashimi and the liver with garlic chives.', source: R + 'B530507062/' },
      ],
      japanese_sources_summary: '公式サイト (yagenbori.co.jp): 御二九と八さい はちべー、京都の路地文化を残す小道の一角、新鮮な牛のうちにく (ホルモン)、京野菜や旬の素材の京料理仕立ての「肉割烹」、夜のおまかせ料理8,800円 (おおよそ12〜13品、名物「牛タンはりはり鍋」と〆の「中華そば」、レバーペーストのサラダ、牛タンだんご煮、テール丸仕立、ミノ湯引、センマイ、ウルテ唐揚げ、ハツモト中華和え、アキレスポン酢和え)、焼き調理はすべてスタッフ、お昼 11:30〜14:30 (小鉢、ごはん、赤出汁、デザート、コーヒー付き、予約不可): 季節の野菜のハラミ丼2,500円、牛タンのハンバーグと温野菜1,800円、牛ネックのシチュー1,800円、ドリンクペアリング4,000円、オリジナル日本酒 佳風、ワイン持込3,000円、お持ち帰り 牛サガリ炙り弁当2,200円・鰻牛弁当3,700円、1階カウンター8名、2階3テーブル (最大約12名)、中京区新京極四条上る中之町577番地17、昼 11:30〜14:30・夜 17:00〜23:00、火曜定休、やげんぼりグループ6店。食べログ: 牛料理・ホルモン・日本料理、20席、カード可、電子マネー・QR 不可、禁煙、店名は近くの八兵衛明神から。口コミ (2025年12月〜2026年10月、英語): おまかせコース、アキレス、大動脈、レバーとニラ、牛タンのはりはり鍋と〆のラーメン、昼のハラミ丼2,500円。',
      confidence: 'medium', sources: [TB, SITE, R + 'B470068259/', R + 'B518961376/', R + 'B520407694/', R + 'B523024128/', R + 'B523611027/', R + 'B525125151/', R + 'B525591006/', R + 'B527372921/', R + 'B530507062/', R + 'B537142393/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the evening course; lunch is walk-in; the staff grill the meat; an English page is on the group site.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極四条上ル中之町577-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news through July 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004464, 135.768339); cross-checked: GSI 京都府京都市中京区中之町577番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B537142393/'],
    price_note: 'Official site menu (read 2026-11-05); an October 2026 review paid ¥2,500 for the harami bowl, matching it.', last_checked: TODAY, items: [
      it('夜のおまかせ料理', '', 'Evening omakase course (about 12–13 dishes)', '¥8,800', 'Dinner', 'no', 'no', 'Ends with beef-tongue harihari hot pot and Chinese noodles.', 'omakase'),
      it('季節の野菜のハラミ丼', '', 'Seasonal vegetable and harami (outside skirt) rice bowl', '¥2,500', 'Lunch', 'no', 'no', 'With small dish, red miso soup, dessert and coffee.', 'harami_don'),
      it('牛タンのハンバーグと温野菜', '', 'Beef-tongue hamburg steak with warm vegetables', '¥1,800', 'Lunch', 'no', 'no', '', 'tongue_hamburg'),
      it('牛ネックのシチュー', '', 'Beef-neck stew', '¥1,800', 'Lunch', 'no', 'no', '', 'neck_stew'),
      it('ドリンクペアリング', '', 'Drink pairing with the course', '¥4,000', 'Drinks', '', '', '', 'drink_pairing'),
      it('牛サガリ炙り弁当', '', 'Seared beef hanging-tender bento (takeaway)', '¥2,200', 'Takeaway', 'no', 'no', '', 'sagari_bento'),
    ] }, {
    cuisine: '牛のうちにく (ホルモン) の「肉割烹」。京野菜や旬の素材で、和・洋・中の技法 (公式サイト、食べログ)・夜のおまかせ料理、おおよそ12〜13品、8,800円: レバーペーストのサラダ、牛タンだんご煮、テール、ミノ湯引、センマイ、ウルテ唐揚げ、ハツモト中華和え、アキレスポン酢和え、焼きはすべてスタッフが担当、名物の牛タンはりはり鍋と〆の中華そば (公式サイト)・昼 11:30〜14:30 (小鉢、ごはん、赤出汁、デザート、コーヒー付き): 季節の野菜のハラミ丼2,500円、牛タンのハンバーグと温野菜1,800円、牛ネックのシチュー1,800円 (公式サイト)・ドリンクペアリング4,000円、オリジナル日本酒 佳風1,000円、ナチュラルワイン (公式サイト)・持ち帰り弁当2,200円から (公式サイト)',
    neighborhood: '四条の北、新京極から入る柳小路。京都河原町駅から徒歩3分',
    gf_detail: '実際にはグルテンフリーではない。夜のコースは醤油漬けやポン酢和えのホルモン、ウルテの唐揚げ、鍋のスープの中華そばで締める。昼は赤出汁と醤油漬けのハツが付く (公式メニュー、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛ホルモンの店で、コースも昼の料理もすべて牛肉が中心 (公式メニュー)。',
    notes: '[牛ホルモン割烹・四条の柳小路] 石畳の柳小路にある2階建ての小さな店。店名は近くの八兵衛明神から。牛ホルモンを京料理仕立ての割烹で出す。夜はおよそ12品のおまかせ (8,800円) で、アキレスのポン酢、大動脈、レバーとニラ、ミノなど。焼きはカウンターでスタッフが担当し、最後は牛タンのはりはり鍋と中華そば。昼は野菜たっぷりのハラミ丼 (2,500円) などで予約不可。火曜休み。',
  });
}

// ================================================================ 酒呑にし川 柳小路店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035163/'; const R = TB + 'dtlrvwlst/';
  const GOJO = 'https://tabelog.com/en/kyoto/A2601/A260301/26036839/';
  const H = day(['15:00', '23:00']);
  put({
    id: 'kyoto_shuten_nishikawa_yanagikoji', name: '酒呑にし川 柳小路店 (Shuten Nishikawa Yanagikoji)', category: 'OMNI',
    lat: 35.004547, lng: 135.768254, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, grilled fish, tofu and obanzai, but many dishes use soy sauce, dashi or miso (firefly squid in soy sauce, cucumber with meat miso, grilled vegetables in dashi); no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the food is sashimi, fish, shellfish, meat miso and dashi-based obanzai (2026 reviews).',
    hours_raw: '15:00–23:00 every day, closing days not fixed (generally open year-round); hours may change, so booking is advised (Tabelog). Reviewers also drank here at lunch: a March 2026 review gives opening at 13:00, and an April 2026 visitor was the only lunch guest. 10 counter seats; parties of up to 4; private hire for up to 20; non-smoking; cards, iD/QUICPay and QR payments; no cover charge (Tabelog). In the Yanagi-koji Hachibei Nagaya, 2 min from Hankyu Kyoto Kawaramachi Stn exit 6 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yanagi-koji alley north of Shijo — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Sake izakaya with about 30–40 local sakes from all over Japan and daily obanzai of Kyoto vegetables (Tabelog) · three-sake tasting ¥1,000, also a limited-edition tasting and free-flow (2026 reviews) · sashimi platter (small size is generous), firefly squid in soy sauce, cucumber with meat miso, salted squid with cream cheese ¥890, sea bream with Kujo green onion ¥1,090, sesame mackerel ¥1,080, clams steamed in sake with Kujo green onion, thick fried tofu, grilled hamo, grilled summer vegetables in dashi, smoked burdock with cream cheese (2026 reviews) · dishes ¥790–1,390, draft beer ¥770 (August 2026)',
    website: null, gmaps: gm('酒呑にし川 柳小路店'), menu_url: null,
    notes: "[Sake izakaya · Yanagi-koji off Shijo] A ten-seat sake bar in a row house on Yanagi-koji, where guests share one big slab table split by a low partition. The draw is the sake: around 30–40 local brews, poured as three-glass tastings (¥1,000) or free-flow, with generous plates of sashimi, obanzai and snacks (¥790–1,390). Open from 15:00 daily (earlier on some days, per reviewers) to 23:00; book ahead. Its sister shop is at Kawaramachi Gojo.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Opened 29 November 2020 (Tabelog). The same name has a shop at Kawaramachi Gojo (Tabelog 26036839, opened 14 January 2022); an April 2026 reviewer had been to a Kyoto Station branch that has since closed. A July 2026 review says the local sakes come from Koyama Shoten.',
      philosophy: 'Per Tabelog (operator text): a casual place for seasonal obanzai and carefully chosen sake, welcoming solo diners.',
      specialty: 'Three-sake tastings; obanzai; sashimi platter.',
      anecdotes: [
        { text: '"The staff and the owner are all lovely people." — August 2026.', source: R + 'B533805887/' },
        { text: 'A large single-slab table fills the room and guests share it, with a partition down the middle — August 2026.', source: R + 'B533642902/' },
        { text: 'A returning guest found the sashimi pieces smaller than three years earlier, put down to rising prices, but still good — August 2026.', source: R + 'B534737956/' },
        { text: 'A guest from abroad seated next to an August 2026 reviewer laughed "OMG!" on tasting the grilled vegetables in dashi.', source: R + 'B534737956/' },
      ],
      japanese_sources_summary: '食べログ: 酒呑にし川 柳小路店、居酒屋・日本料理・日本酒バー、中京区中之町577 柳小路はちべえ長屋、阪急京都河原町駅6番出口から徒歩2分、毎日 15:00〜23:00、不定休 (基本無休)、営業時間が変わることがあるため予約推奨、10席 (カウンター10)、貸切20人まで、禁煙、カード・iD・QUICPay・PayPay・d払い可、チャージなし、2020年11月29日オープン、京野菜の旬のおばんざいと全国の地酒30〜40種。河原町五条店 (2022年1月14日オープン)。口コミ (2026年1〜8月、英語): 日本酒3種飲み比べ1,000円、限定酒の飲み比べ、飲み放題、刺身盛り合わせ、ホタルイカの醤油漬け、いかの塩辛クリームチーズ890円、鯛の九条ねぎ1,090円、ごまさば1,080円、生ビール770円、昼は13時から、京都駅店は閉店。',
      confidence: 'medium', sources: [TB, GOJO, R + 'B476745833/', R + 'B521512235/', R + 'B524933280/', R + 'B527158008/', R + 'B529942667/', R + 'B531686601/', R + 'B533488276/', R + 'B533642902/', R + 'B533805887/', R + 'B534737956/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small shared table; ask for a tasting flight and the staff help choose; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中之町577 柳小路はちべえ長屋',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004547, 135.768254); cross-checked: GSI 京都府京都市中京区中之町577番地 (lot) 26m; 12 m from kyoto_oniku_to_yasai_hachibe on the same alley; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533642902/'],
    price_note: 'No menu read; prices from an August 2026 review, which gives dishes and obanzai at ¥790–1,390.', last_checked: TODAY, items: [
      it('', '', 'Three-sake tasting', '¥1,000', 'Drinks', '', '', 'August 2026.', 'sake_tasting_3'),
      it('', '', 'Salted squid with cream cheese', '¥890', 'Snacks', 'ask', 'no', 'August 2026.', 'shiokara_cream_cheese'),
      it('', '', 'Sea bream with chopped Kujo green onion', '¥1,090', 'Fish', 'ask', 'no', 'August 2026.', 'tai_kujo_negi'),
      it('', '', 'Sesame mackerel', '¥1,080', 'Fish', 'ask', 'no', 'August 2026.', 'goma_saba'),
      it('', '', 'Draft beer', '¥770', 'Drinks', 'no', '', 'August 2026.', 'draft_beer'),
    ] }, {
    cuisine: '全国の地酒30〜40種と京野菜の日替わりおばんざいの日本酒居酒屋 (食べログ)・日本酒3種の飲み比べ1,000円、限定酒の飲み比べ、飲み放題も (2026年の口コミ)・刺身盛り合わせ (小でもたっぷり)、ホタルイカの醤油漬け、きゅうりの肉味噌、いかの塩辛クリームチーズ890円、鯛の九条ねぎ1,090円、ごまさば1,080円、あさりと九条ねぎの酒蒸し、厚揚げ、鱧の焼き物、夏野菜の焼き浸し、燻製ごぼうのクリームチーズ (2026年の口コミ)・料理は790〜1,390円、生ビール770円 (2026年8月)',
    neighborhood: '四条の北の柳小路。京都河原町駅から徒歩2分',
    gf_detail: '要確認。刺身、焼き魚、豆腐、おばんざいだが、醤油、出汁、味噌を使う料理が多い (ホタルイカの醤油漬け、きゅうりの肉味噌、夏野菜の焼き浸し)。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。料理は刺身、魚、貝、肉味噌、出汁のおばんざい (2026年の口コミ)。',
    notes: '[日本酒居酒屋・柳小路] 柳小路の長屋にある10席の日本酒の店。客は低い仕切りのある大きな一枚板のテーブルを囲む。目当ては日本酒で、全国の地酒30〜40種を3種の飲み比べ (1,000円) や飲み放題で。刺身、おばんざい、つまみはどれもたっぷり (790〜1,390円)。毎日15時から (口コミではもっと早い日も) 23時まで、予約がおすすめ。姉妹店は河原町五条。',
  });
}

// ================================================================ HUNTER
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028917/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_hunter_bistro', name: 'HUNTER', category: 'OMNI',
    lat: 35.014716, lng: 135.761019, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled meats and fish are the core, but there are fritters, spring rolls, quiche, semolina-coated sweetfish, curry and bread; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: a meat-and-game bistro (ham, rillettes, venison, duck, lamb), with fish dishes and cream; a few vegetable plates such as the zucchini steak come with a shellfish paste (2026 reviews).',
    hours_raw: '18:00–22:00; closed Thursday and the third Wednesday; hours may change (Tabelog). A November 2025 reviewer reported a weekend-only lunch course (appetizers, bread, choice of main) restarting, and a February 2026 reviewer had it; Tabelog lists dinner only. Booking is essential (July 2026). The menu shows no prices; bills were ¥8,000–15,000 a head at dinner and ¥4,000–5,000 at lunch (2025–26 reviews). 20 seats: a counter and a few small tables; non-smoking; cards accepted, no e-money (Tabelog; June 2026). 4 min walk from Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of the Imperial Palace, near Karasuma-Marutamachi — 4 min from Marutamachi Stn',
    cuisine: 'Bistro of meat, game and charcoal grilling with spices and sauces, plus Japanese ingredients (2025–26 reviews) · homemade Yonezawa-pork ham and rillettes, pâté, spiced lamb stew, charcoal-roasted Ezo venison, magret and Moulard duck, raw-beef hamburg steak, lamb steak · fish: Donchicchi horse mackerel with passion fruit, fried young sweetfish (one in semolina), Moroccan-style charcoal-grilled octopus with couscous, grilled eel with spiced soy sauce · zucchini steak with shellfish-and-basil paste, cold corn potage with salted sea urchin, quiche · mango curry to finish; Miyazaki-mango sorbet; grilled cream · orange wine and wines by the glass (2025–26 reviews) · weekend lunch course of appetizers, bread and a main (November 2025)',
    website: null, gmaps: gm('HUNTER 京都 壺屋町'), menu_url: null,
    notes: "[Meat bistro · south of the Imperial Palace, game over charcoal] A stylish 20-seat bistro near Marutamachi with a counter facing the kitchen, known for meat: house ham, rillettes and pâté, spiced lamb, charcoal-roasted Ezo venison and duck — but the kitchen also turns Japanese fish into spiced, sauced plates, like octopus with couscous or sweetfish fritters, and ends with a mango curry. The menu carries no prices; expect about ¥10,000–15,000 a head with wine. Book ahead. Dinner from 18:00 (weekend lunch reported); closed Thursday and the third Wednesday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources)'], origin: null,
      background: 'Opened 27 March 2017 (Tabelog). Tabelog Steak/Teppanyaki WEST "Tabelog 100" 2024. A November 2025 reviewer says the shop used to serve a regular lunch of curry and burgers before bringing back a weekend lunch course.',
      philosophy: null, specialty: 'Charcoal-grilled game and duck; homemade ham; mango curry.',
      anecdotes: [
        { text: 'The chef talked with guests and explained the dishes over the counter — July 2026.', source: R + 'B531165973/' },
        { text: '"At first, I was a bit nervous since there were no prices listed on the menu, but every dish was carefully prepared" — December 2025.', source: R + 'B519020620/' },
        { text: 'A special shrimp tempura with house tartar sauce was made on request — February 2026.', source: R + 'B425751984/' },
      ],
      japanese_sources_summary: '食べログ: HUNTER、ビストロ、中京区東洞院通夷川下ル壺屋町533-2、丸太町駅から徒歩4分、月〜水・金〜日 18:00〜22:00、木曜・第3水曜休み、20席、カード可、電子マネー不可、禁煙、2017年3月27日オープン、ステーキ・鉄板焼き WEST 百名店 2024。口コミ (2025年11月〜2026年7月、英語): 自家製ハム、リエット、Ezo 鹿の炭火焼き、鴨、ラム、メニューに値段なし、週末限定のランチコース、マンゴーカレー、オレンジワイン。',
      confidence: 'low', sources: [TB, R + 'B425751984/', R + 'B516636404/', R + 'B519020620/', R + 'B519665370/', R + 'B522633259/', R + 'B527605306/', R + 'B530918521/', R + 'B531165973/', R + 'B531913836/', R + 'B531953303/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; menu has no prices, so ask; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通夷川下ル壺屋町533-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026; Steak/Teppanyaki WEST Tabelog 100 2024.' },
    pin_source: `Tabelog ${TB} (35.014716, 135.761019); cross-checked: GSI 京都府京都市中京区壺屋町533番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516636404/', R + 'B531165973/', R + 'B522633259/'],
    price_note: 'The menu shows no prices (December 2025); dishes from 2025–26 reviews, unpriced.', last_checked: TODAY, items: [
      it('', '', 'Homemade ham (Yonezawa pork)', '', 'Charcuterie', 'ask', 'no', '', 'house_ham'),
      it('', '', 'Charcoal-roasted Ezo venison', '', 'Mains', 'ask', 'no', '', 'ezo_venison'),
      it('', '', 'Spiced lamb stew', '', 'Mains', 'ask', 'no', '', 'lamb_stew'),
      it('', '', 'Roast Moulard duck (weekend lunch main)', '', 'Lunch', 'ask', 'no', 'February 2026.', 'moulard_duck'),
      it('', '', 'Mango curry', '', 'Mains', 'ask', 'ask', 'July 2026.', 'mango_curry'),
    ] }, {
    cuisine: '肉とジビエと炭火焼きのビストロ。スパイスとソースに日本の食材も (2025〜26年の口コミ)・Yonezawa の豚の自家製ハムとリエット、パテ、ラムのスパイス煮込み、Ezo 鹿の炭火ロースト、マグレ鴨と Moulard 鴨、生の牛のハンバーグ、ラムステーキ・魚: Donchicchi のアジのパッションフルーツ、若鮎のフリット (セモリナ衣も)、モロッコ風のたこの炭火焼きとクスクス、スパイス醤油のうなぎの焼き物・ズッキーニのステーキに貝とバジルのペースト、冷たいとうもろこしのポタージュに塩うに、キッシュ・締めのマンゴーカレー、Miyazaki のマンゴーのソルベ、焼きクリーム・オレンジワインとグラスワイン (2025〜26年の口コミ)・週末のランチコース: 前菜、パン、メイン (2025年11月)',
    neighborhood: '京都御所の南、烏丸丸太町の近く。丸太町駅から徒歩4分',
    gf_detail: '要確認。炭火焼きの肉と魚が中心だが、フリット、春巻き、キッシュ、セモリナ衣の鮎、カレー、パンもある。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。ハム、リエット、鹿、鴨、ラムの肉とジビエのビストロで、魚料理やクリームも。ズッキーニのステーキなど野菜の皿にも貝のペーストが付く (2026年の口コミ)。',
    notes: '[肉のビストロ・御所の南、炭火のジビエ] 丸太町に近い20席のおしゃれなビストロ。厨房に向いたカウンターがあり、肉で知られる: 自家製のハム、リエット、パテ、ラムのスパイス煮込み、Ezo 鹿や鴨の炭火ロースト。日本の魚もスパイスとソースで仕立て、クスクスを添えたたこや鮎のフリットなど、締めはマンゴーカレー。メニューに値段はなく、ワイン込みで1人1万〜1万5千円ほど。予約を。夜18時から (週末ランチの報告あり)、木曜と第3水曜休み。',
  });
}

// ================================================================ 生きている珈琲
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017295/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ikiteiru.com/'; const BIZ = SITE + 'hpgen/HPB/shop/business.html'; const RED = SITE + 'SHOP/blend-red.html';
  const MON = day(['11:00', '19:00']); const H = day(['10:00', '19:00']);
  put({
    id: 'kyoto_ikiteiru_coffee', name: '生きている珈琲 (Ikiteiru Coffee)', category: 'OMNI',
    lat: 35.003936, lng: 135.765151, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee is the focus; the food is cheesecake, fondant au chocolat, coffee jelly and soft serve, with no ingredient list published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and cold brew suit; the desserts, Vienna coffee, floats and soft serve use cream, milk or eggs (2026 reviews).',
    hours_raw: 'Tuesday–Sunday and public holidays 10:00–19:00, Monday 11:00–19:00 (last order 18:20); closed 31 December and 1 January; occasional changes (official site; Tabelog). Bookings on weekdays only (Tabelog). Ordering is by mobile order at the table (October 2026). Smoking is allowed only in a walled-off smoking room (official site); one October 2026 reviewer called the shop smoke-free, others chose the smoking area. 50 seats, including sofa seats and solo counter seats with power outlets; free Wi-Fi; English menu; cards, IC cards and QR payments (Tabelog; 2026 reviews). Beans sold in the shop and online. Basement of the Minoya Shijo building on Shijo-dori west of Fuyacho; 5 min from Kawaramachi or Shijo Stn (Tabelog).',
    hours: { 0: MON, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-dori between Karasuma and Kawaramachi, basement — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Coffee specialist in a dim, retro basement, with the coffees likened to actors on the menu (2026 reviews) · Red blend, the shop’s most popular (100 g beans ¥850 online), White blend, Geisha, Yemen Golden Mocha, Kopi Luwak, 8-hour cold brew (official shop; 2026 reviews) · hot Vienna coffee, coffee float ¥980, coffee soft serve ¥700, fresh coffee jelly ¥800, rich cheesecake, fondant au chocolat (2026 reviews)',
    website: SITE, gmaps: gm('生きている珈琲 京都 四条'), menu_url: null,
    notes: "[Kissaten · Shijo-dori, a coffee house underground] Down a staircase off Shijo-dori, a dim, retro basement café with sofas, solo counter seats with outlets and a walled-off smoking room. The house Red blend is the easy choice; there are also single origins up to Geisha and Kopi Luwak, an 8-hour cold brew, and a coffee float (¥980), fresh coffee jelly (¥800) and a molten fondant au chocolat. Orders by smartphone at the table. 10:00–19:00 (Monday from 11:00); weekday seats can be booked.",
    chef_bio: { chef_name: null, roles: ['Run by 株式会社生きている珈琲; the online shop names 小林弘樹 as the person responsible for sales'], origin: null,
      background: 'Opened 15 January 2011 (Tabelog). Tabelog Kissaten "Tabelog 100" 2021, 2022, 2026. Per a November 2026 review: each cup is brewed from 25 g of coarsely ground beans in a cone-shaped flower dripper, and the beans are roasted in a hot-air, low-temperature roaster said to bring out sweetness without damaging the beans. The official site sells beans by mail order.',
      philosophy: 'Per the official site: care over the space where the coffee is served, with areas for families, couples and business meetings, and full separation of smoking seats.',
      specialty: 'Red blend; 8-hour cold brew; fresh coffee jelly.',
      anecdotes: [
        { text: 'The organic stick sugar and syrup, and the coffee-bean pattern on the staff’s neckties, caught one visitor’s eye — October 2026.', source: R + 'B536843269/' },
        { text: '"I found myself zoning out for a bit, only to realize it was a mobile order system" — October 2026.', source: R + 'B537199862/' },
        { text: 'A November 2026 visitor went back and forth along Shijo before finding the entrance to the basement.', source: R + 'B538546579/' },
      ],
      japanese_sources_summary: '公式サイト (ikiteiru.com): 株式会社生きている珈琲、販売責任者 小林弘樹、下京区立売東町24 みのや四条ビルB1F、火曜〜日曜・祝日 10:00〜19:00、月曜 11:00〜19:00、定休日 12月31日・1月1日、完全分煙で壁で仕切られた喫煙席、ご家族・カップル・お仕事の打ち合わせまでジャンル別の空間、赤ブレンド100g 850円 (当店人気ナンバー1、迷われたときはとりあえず赤を)、イエメン ゴールデンモカ、ゲイシャ。食べログ: 喫茶店・カフェ、四条通麩屋町西入、50席、予約は平日のみ、カード・交通系IC・QR 可、英語メニュー、Wi-Fi、2011年1月15日オープン、喫茶店百名店 2021・2022・2026。口コミ (2026年10〜11月、英語): 8時間水出しコーヒー、チーズケーキ、フォンダンショコラ、コーヒーフロート980円、コーヒーソフト700円、コーヒーゼリー800円、モバイルオーダー、俳優にたとえたメニュー。',
      confidence: 'medium', sources: [TB, SITE, BIZ, RED, R + 'B536809771/', R + 'B536829757/', R + 'B536843269/', R + 'B536889038/', R + 'B537198653/', R + 'B537199862/', R + 'B538546579/', R + 'B538636730/', R + 'B538670715/', R + 'B538700393/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); order on your phone at the table; cards and IC cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通麩屋町西入 立売東町24 みのや四条ビルB1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026; Kissaten Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.003936, 135.765151); cross-checked: GSI 京都府京都市下京区立売東町 (town) 48m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [RED, R + 'B537198653/', R + 'B538636730/', R + 'B538670715/'],
    price_note: 'No café menu read; prices from October–November 2026 reviews; bean price from the online shop (read 2026-11-05).', last_checked: TODAY, items: [
      it('', '', 'Coffee float', '¥980', 'Drinks', 'ask', 'no', 'October 2026.', 'coffee_float'),
      it('', '', 'Coffee soft serve', '¥700', 'Sweets', 'ask', 'no', 'November 2026.', 'coffee_soft_serve'),
      it('', '', 'Coffee jelly', '¥800', 'Sweets', 'ask', 'ask', 'October 2026.', 'coffee_jelly'),
      it('赤ブレンド 《100ｇ》', '', 'Red blend beans, 100 g', '¥850', 'Beans', '', '', 'Online shop.', 'red_blend_beans'),
    ] }, {
    cuisine: '薄暗いレトロな地下の珈琲専門店。メニューではコーヒーを俳優にたとえる (2026年の口コミ)・一番人気の赤ブレンド (豆100g 850円、通販)、White blend、ゲイシャ、イエメン ゴールデンモカ、Kopi Luwak、8時間の水出し (公式ショップ、2026年の口コミ)・ホットのウインナーコーヒー、コーヒーフロート980円、コーヒーソフト700円、コーヒーゼリー800円、濃厚なチーズケーキ、フォンダンショコラ (2026年の口コミ)',
    neighborhood: '烏丸と河原町の間の四条通、地下。京都河原町駅から徒歩5分',
    gf_detail: '要確認。コーヒーが中心で、食べ物はチーズケーキ、フォンダンショコラ、珈琲ゼリー、ソフトクリーム。原材料の一覧は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックのコーヒーや水出しは合う。デザート、ウインナーコーヒー、フロート、ソフトクリームはクリーム、牛乳、卵を使う (2026年の口コミ)。',
    notes: '[喫茶・四条通、地下の珈琲店] 四条通から階段を下りた、薄暗くレトロな地下の喫茶。ソファ席、コンセント付きの1人用カウンター、壁で仕切った喫煙室がある。迷ったら看板の赤ブレンド。ゲイシャや Kopi Luwak までのシングルオリジン、8時間の水出し、コーヒーフロート (980円)、コーヒーゼリー (800円)、とろけるフォンダンショコラも。注文は席でスマホから。10時〜19時 (月曜は11時から)、平日は予約可。',
  });
}

save();
