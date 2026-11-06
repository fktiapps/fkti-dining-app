// Kyoto priority (kyoto-missed), worker osw13, batch 46 — lane: Tabelog id mod 6 = 0.
// Core: 蛸薬師 ふるかわ, コム シェ ミッシェル. Notable: 押小路 岡田, 五建 ういろ 本店.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-46');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 蛸薬師 ふるかわ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041380/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://san-tatsu.jp/pressrelease/479246/';
  const H = day(['12:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_takoyakushi_furukawa', name: '蛸薬師 ふるかわ (Takoyakushi Furukawa)', category: 'MOM_AND_POP',
    lat: 35.006322, lng: 135.760446, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a set Japanese course on bonito or tuna dashi with soy-seasoned dishes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish course opening with a bonito or tuna broth, with crab, sea urchin, octopus and sea bream (2026 reviews).',
    hours_raw: 'Tabelog: daily 12:00–14:00 and 18:00–21:00, all guests starting together at 12:00 and 18:00; irregular closures; reservation only; arrive at least 5 minutes early; cancellation 100% from two days before. Lunch began in earnest in November 2025 (press release). No service charge: Tabelog’s English page says a service charge is added, but the Japanese original says 「なし」. BYO ¥5,000 a bottle (Tabelog). 8 counter seats (7 per the press release); no shorts or revealing clothes; no strong perfume; English menu; cards, no e-money or QR (Tabelog). Entered through the back of the izakaya 鯛之鯛 烏丸店 (press release; 2026 reviews). Opened 11 June 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takoyakushi east of Karasuma, through the back of an izakaya — 7 min walk from Hankyu Karasuma Stn',
    cuisine: 'Japanese omakase at a hinoki counter hidden behind an izakaya · lunch course ¥11,000; dinner course ¥20,000–22,000 (2026 reviews) · opens with a clear broth of well water drawn from 52 m underground and bonito flakes, or a tuna dashi made with soft water from the Shirakami mountains (2026 reviews) · seen: lotus-root cake with okra, cashew, purple sea urchin and sweet shrimp in a lotus leaf, hairy crab with crab miso, grilled eggplant with sudachi jelly and corn sauce, octopus with buckwheat groats, salt-baked sea bream for a birthday, black-syrup and ginger dessert (2026 reviews) · house furikake to take home (July 2026)',
    website: null, gmaps: gm('蛸薬師 ふるかわ 鯛之鯛 烏丸'), menu_url: null,
    notes: '[Japanese omakase · Shijo-Karasuma, behind an izakaya] Walk through the busy fish izakaya 鯛之鯛 and open the door at the back: an eight-seat hinoki counter where the owner, twelve years at 山玄茶, starts every course with a broth made in front of you from deep well water and bonito. Seasonal, beautifully plated dishes; lunch ¥11,000, dinner about ¥20,000. A Michelin Guide Selected restaurant. Reservation only; no strong perfume.',
    chef_bio: { chef_name: '古川 毅 (owner, per a press release; no reading in a source)', roles: ['Owner-chef (press release: 店主 古川毅)'], origin: null,
      background: 'Per a press release on san-tatsu.jp: owner 古川毅 trained for twelve years at the Kyoto restaurant 山玄茶 before opening 蛸薬師ふるかわ; the restaurant was listed as a Michelin Guide Selected Restaurant and began full lunch service in November 2025; it sits behind the lively izakaya 鯛之鯛 near Hankyu Karasuma and Shijo stations, with a single-plank hinoki counter. Opened 11 June 2024 (Tabelog). Reviewers in 2026 praise the owner’s warmth and the sake recommendations.',
      philosophy: null,
      specialty: 'Broth made to order from well water and bonito; seasonal omakase.',
      anecdotes: [
        { text: 'The course opens with a broth made from soft water drawn from 52 metres underground and bonito flakes, skimmed in front of the guest (August 2026).', source: R + 'B534493530/' },
        { text: 'A birthday guest in August 2026 was served a salt-baked sea bream.', source: R + 'B533334897/' },
        { text: '"I think it would be hard to find the entrance if it’s your first time." — July 2026; the guest took home the house furikake.', source: R + 'B531143935/' },
      ],
      japanese_sources_summary: 'プレスリリース (san-tatsu.jp、株式会社リバリュース): 蛸薬師ふるかわがミシュランガイドのセレクテッドレストランに掲載、2025年11月からランチ営業を本格的に開始、店主 古川毅は京都の名店「山玄茶」で12年間修行して開業、阪急烏丸駅・地下鉄四条駅近くの居酒屋「鯛之鯛」の店内を抜けた奥の扉の先、檜の一枚板のカウンター7席。食べログ: 日本料理、中京区一蓮社町蛸薬師通烏丸東入ル300 パームビル1F、毎日 12:00〜14:00・18:00〜21:00 (12時・18時一斉スタート)、不定休、完全予約制、5分前までに来店、2日前から100%のキャンセル料、サービス料は日本語原文で「なし」(英語版の記載は誤訳)、持ち込み1本5,000円、カウンター8席、短パンや露出の多い服は不可、強い香水不可、英語メニュー、カード可、2024年6月11日オープン。口コミ (2026年5月〜9月、英語): 昼11,000円、夜20,000〜22,000円のおまかせ、深さ52mの井戸水と鰹節の一番だし、白神山地の軟水の鮪だし、蓮の葉の蓮根餅と紫雲丹と甘海老、毛蟹の蟹味噌、焼き茄子とすだちジュレ、蛸と蕎麦の実、鯛の塩釜焼き、黒蜜と生姜のデザート、自家製ふりかけ、店主の人柄、日本酒のすすめ。',
      confidence: 'medium', sources: [TB, PR, R + 'B530952744/', R + 'B531143935/', R + 'B532159240/', R + 'B532230120/', R + 'B532442767/', R + 'B533334897/', R + 'B534428435/', R + 'B534493530/', R + 'B536239237/', R + 'B536252629/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only with a single start time; English menu (Tabelog); enter through the izakaya at the front.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区一蓮社町蛸薬師通烏丸東入ル300 パームビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and a press release; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006322, 135.760446); cross-checked: GSI 京都府京都市中京区一蓮社町300番地 (lot) 9m; kyoto_sake_hall_masuya 11 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530952744/', R + 'B536239237/', R + 'B532159240/'],
    price_note: 'Course prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase course', '¥11,000', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_course'),
      it('', '', 'Dinner omakase course', '¥20,000–22,000', 'Dinner', 'ask', 'no', 'May and July 2026.', 'course'),
    ] }, {
    cuisine: '居酒屋の奥に隠れた檜のカウンターの和食のおまかせ・昼のコース11,000円、夜のコース20,000〜22,000円 (2026年の口コミ)・始まりは深さ52mの井戸水と鰹節の吸い地、または白神山地の軟水の鮪だし (2026年の口コミ)・これまでの料理: 蓮の葉に包んだ蓮根餅とオクラとカシューナッツと紫雲丹と甘海老、毛蟹と蟹味噌、焼き茄子とすだちのジュレととうもろこしのソース、蛸と蕎麦の実、誕生日の鯛の塩釜焼き、黒蜜と生姜のデザート (2026年の口コミ)・持ち帰りの自家製ふりかけ (2026年7月)',
    neighborhood: '烏丸の東の蛸薬師通、居酒屋の奥。阪急烏丸駅から徒歩7分',
    gf_detail: '予約時に要確認。グルテンの情報なし。鰹や鮪のだしと醤油の味付けのおまかせ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鰹や鮪のだしに始まり、蟹、雲丹、蛸、鯛の魚のコース (2026年の口コミ)。',
    notes: '[和食のおまかせ・四条烏丸、居酒屋の奥] にぎやかな居酒屋「鯛之鯛」を抜けて奥の扉を開けると、檜のカウンター8席。山玄茶で12年修業した店主が、目の前で井戸水と鰹節のだしをひくところからコースを始める。季節の美しい料理で、昼11,000円、夜は20,000円ほど。ミシュランガイドのセレクテッドレストラン。完全予約制、強い香水は不可。',
  });
}

// ================================================================ コム シェ ミッシェル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26012748/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.commechezmichel.com/jp/index.html';
  const MENU = 'http://www.commechezmichel.com/jp/menu.html';
  const H = day(['12:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_comme_chez_michel', name: 'コム シェ ミッシェル (Comme Chez Michel)', category: 'MOM_AND_POP',
    lat: 35.009889, lng: 135.764052, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; bistro courses with terrines, rillettes and baguette, pastry desserts (Paris-Brest, Mont Blanc, tarte Tatin) (official site; 2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork rillettes, terrines, meat and fish mains finished with bouillon (official site; 2024–2026 reviews).',
    hours_raw: 'Official site: lunch 12:00–14:00 (L.O.), dinner 18:00–21:00 (L.O.); closed Wednesday (Thursday if Wednesday is a holiday) and one irregular day a month. Bookings by phone (official site); birthday messages on dessert with notice (April 2026). 18 seats: 10 at tables downstairs, 8 upstairs; non-smoking; cards (JCB, AMEX, Diners) and e-money (Tabelog). No service charge listed on Tabelog. Opened 29 April 2009 in the former obanzai restaurant 三月 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanagibamba south of Oike, near Kyoto City Hall — 8 min walk from Karasuma Oike Stn',
    cuisine: 'Parisian everyday bistro cooking with little butter or cream, finished with bouillon (official site) · lunch and dinner courses A, B and C with choices, or à la carte (official site); lunch reviewers spent ¥3,000–3,999 · seen: pork rillettes, seafood terrine, wild-boar terrine, mushroom potage of four or five mushrooms (¥900, 2024), green-pea soup, Shogoin turnip purée, Kyotango chicken ballotine, roast Kyoto pork, beef cheek braised with tarragon, steak with lentils and mash, pan-seared sea bream (2024–2026 reviews) · desserts learned at Blé Sucré in Paris: Paris-Brest, Mont Blanc, tarte Tatin with caramel gelato (official site; 2026 reviews) · Michelin Bib Gourmand, Kansai 2014 (official site)',
    website: SITE, gmaps: gm('Comme Chez Michel 京都 柳八幡町'), menu_url: MENU,
    notes: '[French bistro · Oike, a Paris bistro’s Kyoto namesake] A small two-floor bistro in a former obanzai house, named after Chez Michel in Paris, where the chef trained three years under Thierry Breton. Everyday Parisian cooking with little butter or cream — rillettes, terrines, mushroom potage, roast Kyoto pork — and desserts from Blé Sucré training, by A/B/C course or à la carte. Lunch from about ¥3,000. One diner found the small rooms full of cooking smells by dessert (December 2024). Closed Wednesday.',
    chef_bio: { chef_name: '大川 (surname only, from the official site: シェフ大川; no given name or reading)', roles: ['Chef (official site)'], origin: null,
      background: 'Per the official site: the chef trained at hotels in Japan, then spent five years in Paris, three of them under chef Thierry Breton at the bistro Chez Michel, and learned desserts at the pâtisserie Blé Sucré in the 12th arrondissement; on opening in Kyoto, the mentor urged the chef to become "the Chez Michel of Japan". Michelin Guide Kansai 2014 Bib Gourmand. Opened 29 April 2009 in the building that was the obanzai restaurant 三月 (Tabelog).',
      philosophy: 'Official site: bistro cooking that knows its ingredients — meat on the bone, butter and cream kept down, finished with good bouillon — eaten happily, even with the fingers.',
      specialty: 'Bistro courses; Paris-Brest; rillettes and terrines.',
      anecdotes: [
        { text: 'A December 2024 family enjoyed the Christmas course, though the smell of other tables’ mains lingered through dessert in the small room; the chef saw them off at the door.', source: R + 'B498094595/' },
        { text: 'An April 2026 birthday group chose from about five starters, mains and desserts on the day instead of fixing the menu when booking.', source: R + 'B526628212/' },
        { text: 'An October 2026 regular added a steak and was surprised by lentils and mash instead of fries.', source: R + 'B260210076/' },
      ],
      japanese_sources_summary: '公式サイト (commechezmichel.com): コム シェ ミッシェル、フランス人が食べる本場のビストロフレンチを気軽に、ミシュランガイド関西2014 ビブグルマン、パリで日常的に食べられているビストロ料理、ランチとディナーにA・B・Cのコース、アラカルトも一人から、パリ12区 Blé Sucré でシェフが学んだデセール、店名はパリの名店 Chez Michel に近づきたいという思い、シェフ大川は国内のホテルで修行の後に渡仏、パリで5年、うち3年はシェフ ティエリー・ブルトンのもとで修行、師匠から「日本のシェミッシェルとなれ」、バターと生クリームを控えブイヨンで仕上げる、骨付き肉、パリ・ブレスト、中京区柳馬場通御池下る柳八幡町80番1、ランチ12:00〜14:00 (L.O.)、ディナー18:00〜21:00 (L.O.)、水曜休み (祝日の場合木曜)、月1回不定休、予約は電話。食べログ: フレンチ、18席 (1階テーブル10、2階テーブル8)、禁煙、カード・電子マネー可、2009年4月29日オープン (おばんざいの店「三月」だった建物)。口コミ (2024年8月〜2026年10月、英語): 豚のリエット、魚介のテリーヌ、猪のテリーヌ、きのこのポタージュ900円、グリーンピースのスープ、聖護院かぶらのピュレ、京丹後の鶏のバロティーヌ、京都ポークのロースト、牛頬肉のエストラゴン風、ステーキとレンズ豆とマッシュポテト、鯛のポワレ、モンブラン、タルト・タタン、ランチ3,000円台、誕生日のメッセージ、店が狭く料理の匂いがこもるという声。',
      confidence: 'medium', sources: [TB, SITE, MENU, R + 'B260210076/', R + 'B490449444/', R + 'B490655954/', R + 'B490848311/', R + 'B498094595/', R + 'B519765317/', R + 'B521381001/', R + 'B526628212/', R + 'B527232891/', R + 'B527421273/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bilingual website; choose dishes for the A/B/C courses on the day; book by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場通御池下ル柳八幡町80-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009889, 135.764052); cross-checked: GSI 京都府京都市中京区柳八幡町80番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MENU, R + 'B490655954/'],
    price_note: 'Course prices are not published on the site; soup price from an August 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch course A (starter, soup, main, dessert)', '', 'Lunch', 'ask', 'no', 'About ¥3,000–3,999 a head (2026 reviews).', 'lunch_course'),
      it('', '', 'Soup of the day (à la carte)', '¥900', 'À la carte', 'ask', 'ask', 'August 2024.', 'soup'),
    ] }, {
    cuisine: 'バターと生クリームを控えブイヨンで仕上げるパリの日常のビストロ料理 (公式サイト)・ランチとディナーのA・B・Cのコース (選択制) かアラカルト (公式サイト)、昼の口コミの支払いは3,000円台・これまでの料理: 豚のリエット、魚介のテリーヌ、猪のテリーヌ、4〜5種のきのこのポタージュ (900円、2024年)、グリーンピースのスープ、聖護院かぶらのピュレ、京丹後の鶏のバロティーヌ、京都ポークのロースト、牛頬肉のエストラゴン風、ステーキとレンズ豆とマッシュポテト、鯛のポワレ (2024〜2026年の口コミ)・Blé Sucré で学んだデセール: パリ・ブレスト、モンブラン、キャラメルジェラートのタルト・タタン (公式サイト、2026年の口コミ)・ミシュランガイド関西2014 ビブグルマン (公式サイト)',
    neighborhood: '御池の南の柳馬場通、市役所近く。烏丸御池駅から徒歩8分',
    gf_detail: '要確認。グルテンの情報なし。テリーヌ、リエットとバゲット、パリ・ブレストやモンブランなどの菓子のビストロのコース (公式サイト、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 豚のリエット、テリーヌ、ブイヨンで仕上げる肉や魚のメイン (公式サイト、2024〜2026年の口コミ)。',
    notes: '[フレンチビストロ・御池、パリの名店の名を継ぐ] もとおばんざいの店だった2階建ての小さなビストロ。店名はシェフが3年修行したパリの Chez Michel から。バターと生クリームを控えたパリの日常の料理、リエット、テリーヌ、きのこのポタージュ、京都ポークのロースト、Blé Sucré 仕込みのデセールを、A・B・Cのコースかアラカルトで。昼は3,000円ほどから。2024年12月には狭い店内でデザートの頃まで料理の匂いがこもったという声も。水曜休み。',
  });
}

// ================================================================ 押小路 岡田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036490/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://oshikoji-okada.com/index.html';
  const H = day(['12:00', '15:00'], ['17:30', '20:30']);
  put({
    id: 'kyoto_oshikoji_okada', name: '押小路 岡田 (Oshikoji Okada)', category: 'MOM_AND_POP',
    lat: 35.012353, lng: 135.762366, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a dashi-based Kyoto kaiseki with soy-seasoned dishes and pressed sushi (official site; 2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish kaiseki on bonito dashi — sweetfish, sea bream, hamo, crab, tuna — though reviewers note little or no meat (2022–2026 reviews).',
    hours_raw: 'Official site: lunch 12:00–15:00 (L.O. 13:00); dinner 17:30–20:30 (last entry); closed Sunday and Monday holidays (open on ordinary Mondays and other holidays). Reservation only; hard to book (2023 and 2025 reviews). Courses tax and service included: lunch ¥8,500; dinner ¥13,500, ¥16,500, ¥19,800 (official site). 13 seats: a counter of 7 (6 per a 2023 review) and a private room for 6; non-smoking; children by arrangement; AMEX only (official site; Tabelog). No service charge listed separately on Tabelog. Take-away boxes and mackerel sushi by order (official site). Opened June 2018; moved to this machiya in 2021 (official site; Tabelog gives 16 September 2021).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oshikoji-Takakura, south of the Imperial Palace — 5 min walk from Karasuma Oike Stn, exit 1',
    cuisine: 'Quiet, traditional Kyoto kaiseki in a machiya, built on dashi from well water the chef draws each morning (official site) · lunch course ¥8,500; dinner ¥13,500, ¥16,500 or ¥19,800, tax and service included (official site) · seen: nagaimo tofu with blue crab and ikura, matsuba crab with yuba, sweetfish and daikon soup, sashimi of Setouchi sea bream, tuna and bonito, grilled barracuda pressed sushi, hamo roe, steamed rice with new ginger, two desserts (2022–2026 reviews) · to take away: bento boxes ¥4,320–6,480, chirimen sansho and shio kombu ¥1,620, mackerel sushi ¥4,860 a roll (official site)',
    website: SITE, gmaps: gm('押小路 岡田 瓦町'), menu_url: SITE + '#menu',
    notes: '[Kaiseki · Oshikoji-Takakura, a quiet chef and well water] A machiya south of the Imperial Palace where a quiet chef, once an opening cook at 祇園 なん波, serves textbook Kyoto kaiseki with little meat, its dashi made from well water fetched each morning. Seven counter seats and one private room; lunch ¥8,500, dinner from ¥13,500 all-in. Regulars return every season; reservations are hard to get. A 2022 diner found some seasoning salty. Closed Sunday.',
    chef_bio: { chef_name: '岡田 晃 (Okada Akira, per the official site)', roles: ['Owner-chef (official site)'], origin: 'Born 13 September 1979 in 長野県千曲市 (official site).',
      background: 'Per the official site: began in 1999 at the local kaiseki restaurant 竹葉亭, trained at 祇園はやかわ from 2002, joined 祇園 なん波 as opening staff in 2006 and served as its simmering cook, and opened 押小路岡田 with about six counter seats in June 2018; in 2021 moved across Oshikoji to a larger machiya with a gallery upstairs; draws dashi water from springs around the shop every morning; also caters boxed meals for guests of the hotel 東山 四季花木. A January 2022 reviewer saw the owner working almost alone at the old shop, with more help after the move.',
      philosophy: 'Official site: 「ただ直向きに 丹念に、京都の 想い出の料理 こしらえます」 — true flavour lies in well water, ingredients that meet in season and a faint scent of dashi, not costly ingredients or showmanship.',
      specialty: 'Seasonal Kyoto kaiseki; pressed sushi; dashi.',
      anecdotes: [
        { text: 'A guest who once gave a business card at the old shop received New Year cards every year after (January 2022).', source: R + 'B445366632/' },
        { text: '"It felt like being in a textbook on Japanese cooking." — December 2023; the party of six brought a magnum of brut and was welcomed.', source: R + 'B476723836/' },
        { text: '"I did find the seasoning a bit on the salty side." — May 2022.', source: R + 'B449259138/' },
      ],
      japanese_sources_summary: '公式サイト (oshikoji-okada.com): 押小路 岡田、京料理、「ただ直向きに 丹念に、京都の 想い出の料理 こしらえます」、走り・旬・名残、高価な食材や華やかな演出より毎朝近所に汲みに行く地下水と出会い物とほのかなだし、押小路通高倉西北角の京町家、寡黙な店主、カウンター7席と6人掛けの個室、昼7,700円・夜12,100円と16,500円 (旧表記)、お品書きは昼8,500円、夜13,500円・16,500円・19,800円 (税サ込)、岡田 晃 (Okada Akira) は1979年9月13日長野県千曲市生まれ、1999年地元の竹葉亭、2002年祇園はやかわ、2006年祇園なん波のオープンスタッフで煮方、2018年6月にカウンター6席ほどで独立、2021年に北西向かいの一回り大きな店へ移転し2階にギャラリー、東山 四季花木のお重のケータリング、持ち帰りの折詰4,320円・6,480円、ちりめん山椒・塩昆布1,620円、鯖寿司1本4,860円、昼12:00〜15:00 (L.O. 13:00)、夜17:30〜20:30 (最終入店)、日曜と祝日の月曜休み、全面禁煙。食べログ: 日本料理、中京区押小路高倉東入瓦町565-2、完全予約制、13席、カードは AMEX、2021年9月16日オープン。口コミ (2022年1月〜2026年10月、英語): 移転で内装と料理がさらによくなった、肉をほとんど使わない伝統的な京料理、教科書のような和食、長芋豆腐と渡り蟹といくら、松葉蟹と湯葉、鮎と大根のお椀、瀬戸内の鯛、鮪、鰹、かますの焼き霜の棒寿司、鱧の子、新生姜の炊き込みご飯、デザート2品、予約が取りにくい、やや塩辛いという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B445366632/', R + 'B449259138/', R + 'B463045094/', R + 'B468841101/', R + 'B476723836/', R + 'B497849527/', R + 'B505379230/', R + 'B517712677/', R + 'B531867267/', R + 'B534462371/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only through the official booking link; set courses; a quiet counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路高倉東入瓦町565-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012353, 135.762366); cross-checked: GSI 京都府京都市中京区瓦町565番地 (lot) 58m; kyoto_kyoto_chuka_makisada (565-5) 16 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the official site, tax and service included.', last_checked: TODAY, items: [
      it('お料理（昼コース）', '', 'Lunch course', '¥8,500', 'Lunch', 'ask', 'no', 'Tax and service included.', 'lunch_course'),
      it('お料理（夜コース）', '', 'Dinner course', '¥13,500 / ¥16,500 / ¥19,800', 'Dinner', 'ask', 'no', 'Tax and service included.', 'course'),
      it('鯖寿司', '', 'Mackerel sushi to take away, one roll (order ahead)', '¥4,860', 'Take-away', 'ask', 'no', '', 'saba_sushi'),
      it('自家製 ちりめん山椒', '', 'House chirimen sansho', '¥1,620', 'Take-away', 'ask', 'no', '', 'chirimen'),
    ] }, {
    cuisine: '毎朝店主が汲む地下水のだしで作る、町家の静かで伝統的な京懐石 (公式サイト)・昼のコース8,500円、夜13,500円・16,500円・19,800円 (税サ込、公式サイト)・これまでの料理: 長芋豆腐と渡り蟹といくら、松葉蟹と湯葉、鮎と大根のお椀、瀬戸内の鯛・鮪・鰹のお造り、かますの焼き霜の棒寿司、鱧の子、新生姜の炊き込みご飯、デザート2品 (2022〜2026年の口コミ)・持ち帰り: 折詰4,320〜6,480円、ちりめん山椒・塩昆布1,620円、鯖寿司1本4,860円 (公式サイト)',
    neighborhood: '押小路高倉、御所の南。烏丸御池駅1番出口から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。醤油の味付けや棒寿司のある、だしの京懐石 (公式サイト、2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鮎、鯛、鱧、蟹、鮪の鰹だしの魚の懐石で、肉はほとんど使わない (2022〜2026年の口コミ)。',
    notes: '[懐石・押小路高倉、寡黙な店主と井戸水] 御所の南の町家で、祇園 なん波の開店スタッフだった寡黙な店主が、毎朝汲みに行く地下水のだしで、肉をほとんど使わない教科書のような京懐石を出す。カウンター7席と個室一つ。昼8,500円、夜13,500円からで税サ込。季節ごとに通う常連が多く、予約は取りにくい。2022年にはやや塩辛いという声も。日曜休み。',
  });
}

// ================================================================ 五建 ういろ 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002644/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_goken_uiro_honten', name: '五建 ういろ 本店 (Goken Uiro Honten)', category: 'OMNI',
    lat: 34.995533, lng: 135.771063, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No ingredient information; uiro, mitarashi dango in soy glaze, kuzumochi and fu-manju downstairs, and katsu curry and omurice in the upstairs café (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Uiro, minazuki and bean-paste sweets may suit, but no ingredient information is given; the café serves katsu curry and omurice (2026 reviews).',
    hours_raw: 'Tabelog lists no hours and the official site was under maintenance on 5 November 2026; reviewers came at lunchtime on weekdays and weekends (2026). No reservations (Tabelog). Wagashi shop downstairs; a Showa-retro café upstairs serving lunch (katsu curry ¥1,000, omurice, set meals) and an uiro parfait (2026 reviews). Smoking allowed; cards accepted, no e-money or QR (Tabelog). No service charge listed on Tabelog. A second shop sells at JR 京都伊勢丹 B1F (Tabelog), with pop-ups at department stores (2026 reviews).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojozaka, east of the Kamo River on Gojo-dori — 2 min walk from Kiyomizu-Gojo Stn',
    cuisine: 'Long-established uiro maker with a café upstairs · fresh uiro (brown-sugar, chestnut, yomogi), keeping only two days, or vacuum-packed (2026 reviews) · minazuki, kuzumochi, warabi mochi, giant "Odama Mitarashi" dango, fu-manju, sekihan manju (2026 reviews) · upstairs: katsu curry ¥1,000, omurice, set lunches, uiro parfait (2026 reviews)',
    website: 'http://www.gokenuiro.jp/', gmaps: gm('五建ういろ 本店 五条'), menu_url: null,
    notes: '[Uiro & wagashi · Gojozaka, with a retro café upstairs] The main shop of a long-established uiro maker near Kiyomizu-Gojo: fresh uiro that keeps only two days, giant mitarashi dango and seasonal minazuki downstairs, and upstairs a bright Showa-era café where locals eat katsu curry and omurice at lunch. Staff are kind and explain what keeps. Hours not published — check before going. Smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers in 2026 call it a long-established uiro shop at Gojozaka, with wagashi sold downstairs and a café on the second floor that feels like a Showa-era local lunch spot. A second shop is in the basement of JR 京都伊勢丹 (Tabelog), and the shop has run pop-ups at department stores in Kyoto and at Daimaru Tokyo (2026 reviews).',
      philosophy: null,
      specialty: 'Fresh uiro; Odama Mitarashi dango.',
      anecdotes: [
        { text: 'A July 2026 café guest found no uiro or dango on the upstairs menu; the staff offered to bring dango up from downstairs.', source: R + 'B531745689/' },
        { text: 'The staff explained that fresh uiro is better but keeps only two days, so an August 2026 visitor took a vacuum pack instead.', source: R + 'B533258970/' },
        { text: '"Personally, it was the best uiro I\'ve ever tasted." — August 2026, on the brown-sugar uiro.', source: R + 'B532835293/' },
      ],
      japanese_sources_summary: '食べログ: 五建 ういろ 本店 (五建外良屋)、和菓子・喫茶店、東山区五条橋東2丁目18番地1、清水五条駅から徒歩約2分、予約不可、営業時間の記載なし、喫煙可、カード可、電子マネー・QR不可、ほかにジェイアール京都伊勢丹B1Fの店。公式サイト (gokenuiro.jp) は2026年11月5日時点でメンテナンス中。口コミ (2026年6月〜10月、英語): 生ういろ (黒糖、栗、よもぎ)、生は日持ち2日で真空パックもある、水無月、葛餅、わらび餅、大玉みたらし、麩まんじゅう、赤飯まんじゅう、2階は昭和レトロのカフェで地元の人の昼ごはん、カツカレー1,000円、オムライス、定食、ういろパフェ、親切なスタッフ、高島屋や大丸東京店の催事。',
      confidence: 'low', sources: [TB, R + 'B440050340/', R + 'B530851559/', R + 'B531745689/', R + 'B532835293/', R + 'B533169998/', R + 'B533258970/', R + 'B533456287/', R + 'B536768028/', R + 'B537739322/', R + 'B538002567/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy sweets at the counter downstairs; the café upstairs is a casual local lunch spot.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区五条橋東2丁目18番地1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026; the official site was under maintenance.' },
    pin_source: `Tabelog ${TB} (34.995533, 135.771063); GSI 京都府京都市東山区五条橋東二丁目 (chome level only, lot 18-1 not found) 17m; kyoto_moku_kiyomizu_gojo 22 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532835293/'],
    price_note: 'Only the café’s katsu curry price is known (August 2026).', last_checked: TODAY, items: [
      it('', '', 'Katsu curry (upstairs café lunch)', '¥1,000', 'Café', 'no', 'no', 'August 2026.', 'curry'),
      it('', '', 'Fresh uiro (keeps two days)', '', 'Wagashi', 'ask', 'ask', 'Price not given.', 'uiro'),
      it('', '', 'Odama Mitarashi (giant dango)', '', 'Wagashi', 'ask', 'ask', 'Price not given.', 'dango'),
    ] }, {
    cuisine: '2階にカフェのある老舗のういろの店・生ういろ (黒糖、栗、よもぎ) は日持ち2日、真空パックもある (2026年の口コミ)・水無月、葛餅、わらび餅、大玉みたらし、麩まんじゅう、赤飯まんじゅう (2026年の口コミ)・2階: カツカレー1,000円、オムライス、定食、ういろパフェ (2026年の口コミ)',
    neighborhood: '五条坂、鴨川の東の五条通。清水五条駅から徒歩2分',
    gf_detail: '要確認。原材料の情報なし。1階はういろ、醤油のたれのみたらし団子、葛餅、麩まんじゅう、2階のカフェはカツカレーやオムライス (2026年の口コミ)。',
    vegan_detail: '要確認。ういろ、水無月、あんの菓子は合うかもしれないが原材料の情報はなく、カフェにはカツカレーやオムライス (2026年の口コミ)。',
    notes: '[ういろと和菓子・五条坂、2階にレトロなカフェ] 清水五条近くの老舗のういろ屋の本店。1階は日持ち2日の生ういろ、大きなみたらし団子、季節の水無月、2階は明るい昭和のカフェで地元の人がカツカレーやオムライスで昼ごはん。スタッフは親切で日持ちも説明してくれる。営業時間は公表されていないので確認を。喫煙可。',
  });
}

save();
