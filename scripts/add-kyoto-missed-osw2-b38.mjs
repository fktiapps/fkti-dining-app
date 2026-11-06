// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 38.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + おが和 Ogawa (Kyoto-cuisine counter of 小川洋輔, ex-Kyoto Kitcho and Gion Sasaki; since 2010, now near Karasuma-Oike)
//   + 食堂エンドウ Shokudo Endo (tuna-bowl lunch counter off Sannenzaka near Kiyomizu-dera)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + MAISON TANUKI (afternoon-tea and plated-dessert café in a 100-year-old Karasuma-Oike machiya; since 2023) — モンテステリース有限会社,
//     a single café per its press releases.
//   + OSTERIA IS -祇園- (wagyu bistecca and Italian on Nawate-Shinbashi) — エフ・シー・ジャパン株式会社, registered at the shop’s own address.
//   None of the four is in data/kyoto.json: grep by id, name (おが和 — mp_ogawa is an unrelated soba shop — エンドウ/Endo, TANUKI,
//   OSTERIA IS) and address (姉西洞院町515, 清水2-241-4, 長浜町143-3, 縄手新橋 SPACEしんばし) found none.
//   Service charges checked against Tabelog’s Japanese original: おが和 「無し」 (the English page wrongly says 10%; the official menu also
//   says no service charge); MAISON TANUKI 「チャージ料なし」; OSTERIA IS 「サービス料、チャージ料0円」; none listed for エンドウ.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-38');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ おが和
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036919/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-ogawa.com/'; const MENU = SITE + 'menu/'; const INFO = SITE + 'information/'; const FAQ = SITE + 'faq/';
  const H = day(['12:00', '14:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_ogawa_karasuma', name: 'おが和 (Ogawa)', category: 'MOM_AND_POP',
    lat: 35.008891157865605, lng: 135.75522773040493, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Japanese courses with soy-seasoned dishes, sushi and donabe rice with condiments; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led Japanese courses with dashi (official site; reviews).',
    hours_raw: 'Lunch Monday–Saturday from 12:00 (all start at 12:00, closing 14:00); dinner Monday–Saturday, arrival 18:00–19:00, closing 21:30; closed Sunday (official site). No service charge (official menu; Tabelog’s Japanese original: 「無し」 — the English page wrongly says 10%). Lunch is cash only; dinner takes cards (VISA, Master, JCB, AMEX, Diners, Discover) (official site). Cancellation or changes on the day or the day before are charged 100% (official site). Smart casual, no perfume; children from junior-high age, eating the adult menu; BYO by arrangement (official site). 11 counter seats; private hire possible; non-smoking (official site; Tabelog). About 10 min from Karasuma-Oike or Karasuma Stn (official site). Opened 2010; at the present Karasuma address since 2024 at the latest (official site; September 2024 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of Karasuma-Oike — 10 min from Karasuma-Oike Stn',
    cuisine: 'Seasonal Japanese cuisine from Kyoto and the best of Japan: vegetables bought direct from farmers, market fish, rice cooked in a donabe, Kansai sake (Tabelog official introduction) · lunch courses ¥5,500 and ¥12,100; dinner course ¥28,000 (official site, tax included) · e.g. an eight-item seasonal platter, hot appetizers, corn soup, the chef’s sushi, sashimi, and donabe rice with many accompaniments to finish; melon-soda dessert (2024–2025 reviews) · tsukudani gift set ¥5,000 plus tax to order (official site)',
    website: SITE, gmaps: gm('おが和 京都 姉西洞院町'), menu_url: MENU,
    notes: "[Kaiseki · west of Karasuma-Oike, a Sasaki-trained chef's counter] An eleven-seat counter where chef 小川洋輔 (Ogawa), trained at Kyoto Kitcho and Gion Sasaki, cooks seasonal Kyoto cuisine with farm-direct vegetables and market fish, ending with rice from the donabe and plenty to go with it. Lunch courses from ¥5,500 (cash only) are the gentle way in; dinner is ¥28,000. Michelin one star per the restaurant. Junior-high age and up. Closed Sunday.",
    chef_bio: { chef_name: '小川洋輔 (Ogawa)', roles: ['Owner-chef'], origin: 'Chiba Prefecture, born 1976',
      background: 'Per the official site: born in 1976 in Chiba Prefecture; trained from 1996 at 京都吉兆 and from 2002 at 祇園さゝ木 (listed as Michelin three stars); opened おが和 in 2010 (listed as Michelin one star). Tabelog’s official introduction names the owner as Ogawa, combining traditional technique with new ideas; reviewers note a move to the present Karasuma address by September 2024. Tabelog gives the surname in English as Ogawa.',
      philosophy: 'Per the official site: on choosing to cook, the chef’s father said "study Japanese cuisine", words the chef is still grateful for; "SHARE FROM KYOTO" — cherishing the bounty of Kyoto and Japan for the next generation.',
      specialty: 'Seasonal course ending in donabe rice.',
      anecdotes: [
        { text: 'An August 2024 diner loved the corn soup’s texture and the melon-soda dessert, and found the chef’s smile charming.', source: R + 'B489898932/' },
        { text: 'A November 2025 lunch guest found the donabe rice with its many accompaniments the real highlight.', source: R + 'B517455060/' },
        { text: 'A May 2024 first-timer found the food delicious but the kitchen uncommunicative.', source: R + 'B488767506/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-ogawa.com): おが和、京都烏丸の日本料理店、シェフ 小川洋輔、1976年 千葉県出身、1996年 京都吉兆、2002年 祇園さゝ木 (ミシュラン三つ星)、2010年 おが和 OPEN (ミシュラン一つ星)、父の「日本料理を学びなさい」という言葉、SHARE FROM KYOTO。昼のコース5,500円・12,100円 (税込、カード不可、サービス料なし)、夜のコース28,000円、佃煮3種のお土産5,000円 (税別、要予約)。中京区姉西洞院町515、地下鉄烏丸御池・阪急烏丸から徒歩10分、昼 月〜土12:00〜14:00、夜 月〜土18:00〜21:30 (入店18:00〜19:00)、日曜定休、カウンター11席、当日・前日のキャンセルは100%、スマートカジュアルで香水は控えて、中学生以上、持ち込み相談可、全面禁煙。食べログ: 日本料理、サービス料無し、11席、貸切可、公式紹介: 京都と全国の食材、農家直送の野菜、市場の魚、土鍋ご飯、関西の日本酒、店主 Ogawa。口コミ (2024〜2026年、英語): 烏丸への移転、八寸、とうもろこしのスープ、握り、土鍋ご飯、メロンソーダのデザート。',
      confidence: 'high', sources: [TB, SITE, MENU, INFO, FAQ, R + 'B488767506/', R + 'B489898932/', R + 'B492810294/', R + 'B494731680/', R + 'B504937172/', R + 'B510853518/', R + 'B513320005/', R + 'B516867468/', R + 'B517455060/', R + 'B517952526/', R + 'B523530090/', R + 'B537946050/'] },
    cultural_comfort: { level: 'english', note: 'English website; lunch is cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区姉西洞院町515',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current menu and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008891, 135.755228); cross-checked: GSI 京都府京都市中京区姉西洞院町515番地 (lot) 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu (tax included), checked November 2026.', last_checked: TODAY, items: [
      it('昼のコース', '', 'Lunch course', '¥5,500', 'Lunch', 'ask', 'no', 'Cash only at lunch.', 'lunch_5500'),
      it('昼のコース', '', 'Lunch course', '¥12,100', 'Lunch', 'ask', 'no', '', 'lunch_12100'),
      it('夜のコース', '', 'Dinner course', '¥28,000', 'Dinner', 'ask', 'no', '', 'dinner'),
    ] }, {
    cuisine: '京都と全国の恵みの季節の日本料理: 農家直送の野菜、市場の魚、土鍋で炊くご飯、関西の日本酒 (食べログの公式紹介)・昼のコース5,500円・12,100円、夜のコース28,000円 (公式サイト、税込)・例: 季節の八寸、温かい前菜、とうもろこしのスープ、握り、お造り、締めは土鍋ご飯とたくさんのご飯のお供、メロンソーダのデザート (2024〜2025年の口コミ)・お土産の佃煮3種セット5,000円 (税別、要予約) (公式サイト)',
    neighborhood: '烏丸御池の西。烏丸御池駅から徒歩10分',
    gf_detail: '要確認。醤油で味付けする料理、握り、土鍋ご飯とお供の季節の日本料理のコース。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁を使う魚中心の日本料理のコース (公式サイト、口コミ)。',
    notes: '[日本料理・烏丸御池の西、祇園さゝ木出身のカウンター] 京都吉兆と祇園さゝ木で修業した小川洋輔さんのカウンター11席。農家直送の野菜と市場の魚で季節の京料理を作り、締めは土鍋ご飯とたっぷりのお供。昼のコース5,500円から (現金のみ) が入りやすく、夜は28,000円。店によるとミシュラン一つ星。中学生以上。日曜休み。',
  });
}

// ================================================================ 食堂エンドウ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019711/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00']);
  put({
    id: 'kyoto_shokudo_endo', name: '食堂エンドウ (Shokudo Endo)', category: 'OMNI',
    lat: 34.996425607881946, lng: 135.78167582026046, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tuna bowls dressed with a gochujang-based marinade, miso soup and sides; no gluten information is published (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tuna bowls (reviews).',
    hours_raw: 'Lunch 11:30–15:00 daily; closed irregularly; hours may change (Tabelog). No service charge listed (Tabelog). 10 seats — a few at the counter and two tables for four, on uneven floors with steps; cards accepted (Tabelog; 2024–2025 reviews). Busy with tourists and school trips in season (September 2025). A red-fronted house in a residential lane off Sannenzaka, about 5 min from Kiyomizu-dera; take the left path at the steps from Ninenzaka to Sannenzaka (2025 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sannenzaka, near Kiyomizu-dera',
    cuisine: 'Lunch counter specialising in tuna bowls (reviews) · tuna rice bowl of lean tuna marinated Korean-style with gochujang, ¥1,200 (September 2024) · the Oome and Nishiki bowls, with miso soup, a small side and tea in a little pot (May 2026) · beer (September 2025)',
    website: null, gmaps: gm('食堂エンドウ 三年坂'), menu_url: TB,
    notes: "[Seafood bowls · Sannenzaka, a quiet tuna-bowl lunch near Kiyomizu] A small red-fronted canteen tucked off the crowds of Sannenzaka, with a homely, slightly Ghibli-like interior. The draw is a generous bowl of lean tuna marinated Korean-style with gochujang — about ¥1,200, with miso soup and a pot of tea — and a few other donburi. A welcome escape from the Kiyomizu crowds. Lunch only; closed irregularly.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per 2023–2026 reviews: a small lunch canteen off Sannenzaka that, despite its name, focuses on tuna, especially a gochujang-dressed tuna bowl; it attracts locals, overseas visitors and school groups.',
      philosophy: null,
      specialty: 'Gochujang-marinated tuna bowl.',
      anecdotes: [
        { text: 'A May 2026 parent and child escaping the crowds had the Oome and Nishiki bowls, each with miso soup and tea in a little pot.', source: R + 'B527519736/' },
        { text: 'A May 2024 visitor hesitated at the residential setting but found a quirky, Ghibli-like interior inside.', source: R + 'B519508704/' },
        { text: 'A September 2025 diner found it lively with overseas visitors and school-trip students.', source: R + 'B515052750/' },
      ],
      japanese_sources_summary: '食べログ: 食堂エンドウ、海鮮丼・豆腐料理・食堂、東山区清水2-241-4、11:30〜15:00、不定休、10席、カード可。口コミ (2023〜2026年、英語): 三年坂から少し入った住宅街、赤い外観、清水寺から徒歩5分、店内はジブリのような雰囲気で段差あり、コチュジャンで和えた鮪の丼1,200円 (2024年9月)、オオメ丼と錦丼に味噌汁と小鉢と急須のお茶 (2026年5月)、観光客や修学旅行生でにぎわう。',
      confidence: 'medium', sources: [TB, R + 'B476234773/', R + 'B489412326/', R + 'B493804508/', R + 'B500571517/', R + 'B502203681/', R + 'B506317988/', R + 'B515052750/', R + 'B519508704/', R + 'B521505363/', R + 'B522059324/', R + 'B527519736/', R + 'B538672005/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small and busy in season; steps inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水2-241-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (34.996426, 135.781676); cross-checked: GSI 京都府京都市東山区清水二丁目241番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B493804508/', R + 'B527519736/'],
    price_note: 'Price from a September 2024 review; bowl names from May 2026.', last_checked: TODAY, items: [
      it('', '', 'Tuna rice bowl (gochujang-marinated)', '¥1,200', 'Bowls', 'ask', 'no', 'September 2024.', 'tuna_don'),
      it('', '', 'Oome bowl', '', 'Bowls', 'ask', 'no', 'May 2026.', 'oome_don'),
      it('', '', 'Nishiki bowl', '', 'Bowls', 'ask', 'no', 'May 2026.', 'nishiki_don'),
    ] }, {
    cuisine: '鮪の丼が中心の昼の食堂 (口コミ)・コチュジャンで韓国風に和えた赤身の鮪の丼1,200円 (2024年9月)・Oome 丼と Nishiki 丼、味噌汁、小鉢、急須のお茶付き (2026年5月)・ビール (2025年9月)',
    neighborhood: '三年坂、清水寺の近く',
    gf_detail: '要確認。コチュジャン系のたれで和えた鮪の丼、味噌汁、小鉢。グルテンの情報は公開されていない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鮪の丼 (口コミ)。',
    notes: '[海鮮丼・三年坂、清水の近くの静かな鮪丼の昼] 三年坂のにぎわいから少し外れた、赤い外観の小さな食堂。店内はどこかジブリのような家庭的な雰囲気。目当てはコチュジャンで韓国風に和えた赤身の鮪のたっぷりの丼で、味噌汁と急須のお茶付きで1,200円ほど。ほかに丼がいくつか。清水の人混みからの避難所に。昼のみ、不定休。',
  });
}

// ================================================================ MAISON TANUKI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26039265/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://www.value-press.com/pressrelease/335401';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_maison_tanuki', name: 'MAISON TANUKI (メゾン タヌキ)', category: 'OMNI',
    lat: 35.00990382786554, lng: 135.75707820041384, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Afternoon tea, plated desserts, parfaits and baked goods; no gluten information is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cream- and dairy-rich desserts; nothing vegan is marked (2026 reviews).',
    hours_raw: '11:00–18:00 daily (last order 17:30) (Tabelog). Bookings recommended, especially for afternoon tea; walk-ins join a smartphone waiting list (July 2026). No cover charge (Tabelog’s Japanese original: 「チャージ料なし」). 60 seats over two floors, including sofas; groups up to 8; non-smoking; free Wi-Fi; cards, transit IC and other e-money, and QR (Tabelog). In a renovated machiya more than 100 years old, about 5 min from Karasuma-Oike Stn (256 m) (Tabelog; press reports). Opened May 2023 by モンテステリース有限会社 (press release; invoice).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Oike, west — 256 m from Karasuma-Oike Stn',
    cuisine: 'Salon-style café of plated-dessert courses and afternoon tea by a pâtissier, playing on texture, temperature and aroma (Tabelog) · seasonal afternoon tea with free-flow drinks, e.g. peach (August 2026) and Shine Muscat (from 9 September 2026) · matcha Mont Blanc with matcha-hōjicha syrup, pumpkin brûlée Basque cheesecake, seasonal ice cream, strawberry-pistachio kakigori, salted-lemon milk kakigori ¥1,900 · baked goods to take away (2026 reviews)',
    website: null, gmaps: gm('MAISON TANUKI 京都'), menu_url: TB,
    notes: "[Café · Karasuma-Oike, afternoon tea in a century-old machiya] A salon-style café spread over two floors of a renovated hundred-year-old townhouse west of Karasuma-Oike. The draw is a seasonal afternoon tea with free-flow drinks — peach in summer, Shine Muscat in autumn — and plated dessert courses built on contrasts of texture and temperature; parfaits and kakigori too. Book for afternoon tea. Open daily.",
    chef_bio: { chef_name: null, roles: ['Pâtissier not named; operator モンテステリース有限会社'], origin: null,
      background: 'Per press releases: a salon-style café opened in May 2023 by モンテステリース有限会社 (Kyoto) in a renovated Kyoto machiya more than 100 years old, serving afternoon tea, seasonal parfaits and dessert courses; in April 2024 it ran a charity night opening and sold maqaw-pepper cookies in aid of disaster relief. Per Tabelog: plated desserts and afternoon tea by a skilled pâtissier.',
      philosophy: 'Per Tabelog’s official introduction: special sweets that highlight texture, temperature, aroma and appearance.',
      specialty: 'Seasonal afternoon tea.',
      anecdotes: [
        { text: 'A July 2026 walk-in checked in by smartphone with six groups ahead.', source: R + 'B531989924/' },
        { text: 'An August 2026 guest celebrating a friend’s birthday had the new peach afternoon tea.', source: R + 'B534293993/' },
        { text: 'An August 2026 visitor singled out the free-flow milk tea and kept reordering it.', source: R + 'B536942506/' },
      ],
      japanese_sources_summary: 'プレスリリース (2023〜2024年): 京都烏丸の町家カフェ MAISON TANUKI、2023年5月開業、築100年超の京町家を改装したサロンスタイルのカフェ、アフタヌーンティー、季節のパフェ、スイーツコース、モンテステリース有限会社、2024年4月に馬告のクッキーサレと夜の特別営業の売上の一部を寄付。食べログ: カフェ・スイーツ、中京区長浜町143-3、烏丸御池駅から256m、11:00〜18:00 (L.O. 17:30)、無休、チャージ料なし、60席、禁煙、Wi-Fi、カード・電子マネー・QR 可、インボイス T5130002022628 (モンテステリース有限会社)。口コミ (2026年、英語): 桃やシャインマスカットのアフタヌーンティーとフリードリンク、抹茶モンブラン、かぼちゃのブリュレバスクチーズケーキ、苺とピスタチオのかき氷、塩レモンミルクのかき氷1,900円、スマホで順番待ち。',
      confidence: 'medium', sources: [TB, PR, R + 'B531989924/', R + 'B534293993/', R + 'B534421379/', R + 'B534441596/', R + 'B534516525/', R + 'B535332124/', R + 'B535908836/', R + 'B536141918/', R + 'B536183396/', R + 'B536287008/', R + 'B536942506/', R + 'B538395484/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book afternoon tea ahead; smartphone waitlist for walk-ins.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西入ル長浜町143-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009904, 135.757078); cross-checked: GSI 京都府京都市中京区長浜町143番地 (lot) 40m; 26m from kyoto_solono; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536183396/', R + 'B535332124/'],
    price_note: 'From 2026 reviews; seasonal menu.', last_checked: TODAY, items: [
      it('', '', 'Seasonal afternoon tea with free-flow drinks', '', 'Afternoon tea', 'no', 'no', 'Peach (August), Shine Muscat (from September).', 'afternoon_tea'),
      it('', '', 'Salted-lemon milk kakigori', '¥1,900', 'Kakigori', 'ask', 'no', '2026.', 'shio_lemon_kakigori'),
      it('', '', 'Matcha Mont Blanc', '', 'Sweets', 'ask', 'no', '', 'matcha_montblanc'),
    ] }, {
    cuisine: 'パティシエの皿盛りデザートのコースとアフタヌーンティーのサロンスタイルのカフェ。食感、温度、香りの変化を楽しむ (食べログ)・フリードリンク付きの季節のアフタヌーンティー、たとえば桃 (2026年8月) やシャインマスカット (2026年9月9日から)・抹茶とほうじ茶の蜜の抹茶モンブラン、かぼちゃのブリュレバスクチーズケーキ、季節のアイス、苺とピスタチオのかき氷、塩レモンミルクのかき氷1,900円・持ち帰りの焼き菓子 (2026年の口コミ)',
    neighborhood: '烏丸御池の西。烏丸御池駅から256m',
    gf_detail: '要確認。アフタヌーンティー、皿盛りデザート、パフェ、焼き菓子。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。生クリームや乳製品の多いデザートで、ヴィーガンの表示はない (2026年の口コミ)。',
    notes: '[カフェ・烏丸御池、築100年の町家のアフタヌーンティー] 烏丸御池の西、築100年を超える町家を改装した2階建てのサロンスタイルのカフェ。目当てはフリードリンク付きの季節のアフタヌーンティー (夏は桃、秋はシャインマスカット) と、食感や温度の対比を楽しむ皿盛りデザートのコース。パフェやかき氷も。アフタヌーンティーは予約を。無休。',
  });
}

// ================================================================ OSTERIA IS -祇園-
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016531/'; const R = TB + 'dtlrvwlst/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=9130001081522';
  const H = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_osteria_is_gion', name: 'OSTERIA IS -祇園- (Osteria IS Gion)', category: 'OMNI',
    lat: 35.005815, lng: 135.7726245865888, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Italian with pasta, fried dishes and sauces; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Wagyu and seafood lead the menu; nothing vegan is marked (reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last order food 14:00, drinks 14:30); dinner 17:00–23:00 (last order food 22:00, drinks 22:30); open daily (Tabelog). No service or cover charge (Tabelog’s Japanese original: 「サービス料、チャージ料0円いただいていません」). 24 seats: 8 at the counter and 16 at tables; private hire up to 20; non-smoking; cards including UnionPay, transit IC and other e-money, and QR including Alipay and WeChat Pay (Tabelog). Hidden at the back of the SPACEしんばし building on Nawate-dori by Shinbashi in Gion, 266 m from Gion-Shijo Stn (Tabelog; September 2026). Formerly Youshoku Haru Gion (Tabelog). Operator エフ・シー・ジャパン株式会社, registered at this address (invoice).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Nawate-Shinbashi — 266 m from Gion-Shijo Stn',
    cuisine: 'Italian with seasonal ingredients and a signature bistecca of top-grade Kuroge wagyu, "ordered by 120% of tables" (Tabelog) · courses ¥6,000; ¥6,500 and ¥8,500 with all-you-can-drink (the latter a Tabelog plan of 12 dishes with the wagyu bistecca) (2026 reviews) · à la carte: appetizer platters, seared kinmedai carpaccio, pastas, pork mains (2026 reviews) · wines chosen to match (Tabelog)',
    website: null, gmaps: gm('OSTERIA IS 祇園 縄手'), menu_url: TB,
    notes: "[Italian · Gion Nawate, wagyu bistecca by Shinbashi] A calm Italian room hidden at the back of a building on Nawate-dori by the Shinbashi bridge. The signature is a Kuroge wagyu bistecca; around it come seasonal antipasti, pastas and wine. Courses from ¥6,000, with all-you-can-drink options popular with groups before or after the Minami-za. No service or cover charge. Open daily, late.",
    chef_bio: { chef_name: null, roles: ['Chef not named; operator エフ・シー・ジャパン株式会社 (invoice holder)'], origin: null,
      background: 'Per Tabelog’s official introduction: Italian in the streets of Gion built around top-grade Kuroge wagyu bistecca and seasonal ingredients, paired with selected wines; formerly listed as Youshoku Haru Gion. The invoice holder エフ・シー・ジャパン株式会社 is registered at the restaurant’s address.',
      philosophy: 'Per Tabelog’s official introduction: dishes that bring out each ingredient’s own flavour.',
      specialty: 'Kuroge wagyu bistecca.',
      anecdotes: [
        { text: 'A September 2026 theatregoer came before Kabuki at Minami-za for the ¥8,500 Tabelog course with all-you-can-drink and wagyu bistecca.', source: R + 'B535172998/' },
        { text: 'An October 2026 party that had booked the wrong date was still given a table.', source: R + 'B537531419/' },
        { text: 'An August 2026 diner on the ¥6,500 drinks course found nothing memorable.', source: R + 'B534011256/' },
      ],
      japanese_sources_summary: '食べログ: OSTERIA IS -祇園- (旧店名 Youshoku Haru Gion)、イタリアン・ステーキ・パスタ、東山区祇園縄手新橋西側 SPACEしんばし1F、祇園四条駅から266m、12:00〜15:00、17:00〜23:00、無休、サービス料・チャージ料0円、24席 (カウンター8、テーブル16)、20名まで貸切可、禁煙、カード・電子マネー・QR 可、インボイス T9130001081522 (エフ・シー・ジャパン株式会社、所在地は店舗と同じ)。公式紹介: 注文率120%の極上黒毛和牛のビステッカ、季節の食材、厳選ワイン。口コミ (2026年、英語): ビルの奥でわかりにくい、6,000円のコース、飲み放題付き6,500円・8,500円 (食べログ限定、12品)、金目鯛の炙りカルパッチョ、南座の前後に。',
      confidence: 'medium', sources: [TB, INV, R + 'B319178578/', R + 'B530394862/', R + 'B530915913/', R + 'B531637049/', R + 'B532047104/', R + 'B534011256/', R + 'B534403337/', R + 'B535172998/', R + 'B535386632/', R + 'B535914772/', R + 'B537197192/', R + 'B537531419/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hard to find inside the building; courses make ordering easy.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園縄手新橋西側 SPACEしんばし１F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005861, 135.772625); the address gives no lot number, so not lot-checked; the Tabelog point was 3m from kyoto_kichizaemon_gion (2F of the same building, スペース新橋), so moved about 5m south to keep the pins apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535386632/', R + 'B534011256/', R + 'B535172998/'],
    price_note: 'Course prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥6,000', 'Course', 'ask', 'no', 'September 2026.', 'course_6000'),
      it('', '', 'Course with all-you-can-drink', '¥6,500', 'Course', 'ask', 'no', '', 'course_6500'),
      it('', '', 'Tabelog course: 12 dishes with wagyu bistecca and all-you-can-drink', '¥8,500', 'Course', 'ask', 'no', 'Tabelog bookings only.', 'course_8500'),
    ] }, {
    cuisine: '季節の食材のイタリアンで、名物は「注文率120%」の極上黒毛和牛のビステッカ (食べログ)・コース6,000円、飲み放題付き6,500円と8,500円 (後者は和牛のビステッカ付き12品の食べログのプラン) (2026年の口コミ)・アラカルト: 前菜の盛り合わせ、金目鯛の炙りカルパッチョ、パスタ、豚のメイン (2026年の口コミ)・料理に合うワイン (食べログ)',
    neighborhood: '祇園縄手新橋。祇園四条駅から266m',
    gf_detail: '要確認。パスタ、揚げ物、ソースのイタリアン。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: '要確認。和牛と魚介が中心で、ヴィーガンの表示はない (口コミ)。',
    notes: '[イタリアン・祇園縄手、新橋そばの和牛ビステッカ] 新橋のたもと、縄手通のビルの奥に隠れた落ち着いたイタリアン。名物は黒毛和牛のビステッカで、季節の前菜、パスタ、ワインとともに。コースは6,000円から、飲み放題付きは南座の前後のグループに人気。サービス料・チャージなし。無休、夜遅くまで。',
  });
}

save();
