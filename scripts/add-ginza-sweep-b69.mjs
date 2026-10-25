// Ginza Station half-mile sweep (805 m), batch 69 — classic French from the last of the non-Japanese filter (all OMNI).
//   + レ セゾン (Imperial Hotel Tokyo main building M2F)
//   + Peter (The Peninsula Tokyo 24F; switched from steakhouse to French)
//   + 三笠会館 本店 (Mikasa Kaikan flagship building, Namiki-dōri — several restaurants on different floors)
//   + ボア・ド・ブローニュ (Matsumoto-rō 3F, Hibiya Park; matsumotoro.co.jp)
// Skipped: oumami HESTA 銀座店 13325757 (0 reviews). Remaining 10 fetched (all 2026 reviews): Salvatore Cuomo GINZA 13189254,
// GOOD CHEESE GOOD PIZZA 13218441, Sophie at EDITION 13292467, SAPPHIRE LOUNGE 13314302, BAGUS GOLKA 13050861,
// ザ・グラン銀座 ギャラリー 13225344, サイゼリヤ インズ 13133664, LA PIAZZETTA 13269376, フレッシュネス 汐留 13227650, 肉とパスタと酒 13324758.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ レ セゾン
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13002294/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'tokyo_les_saisons_imperial', name: 'レ セゾン (Les Saisons)', category: 'OMNI',
    lat: 35.672414, lng: 139.758348,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grand-hotel French courses (mushroom soup, blue lobster); staff explain each ingredient, but no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: lobster and meat courses, dairy breakfasts.',
    hours_raw: 'Daily lunch 11:30–14:30 (L.O. 13:30) and dinner 17:30–22:00 (L.O. 20:30); breakfast served too (2026 review); open year-round (Tabelog). 15% service charge.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Imperial Hotel Tokyo main building, mezzanine 2F, Uchisaiwaichō — 3 min from Hibiya Stn',
    cuisine: 'Grand-hotel French · seasonal courses with Japanese ingredients · signature autumn mushroom soup, blue lobster · ¥6,700 breakfast', cuisine_type: 'french',
    website: 'http://www.imperialhotel.co.jp/j/tokyo/restaurant/les_saisons/index.html', gmaps: gm('レ セゾン 帝国ホテル'), menu_url: null,
    notes: "[French · the Imperial Hotel's main dining room] The French restaurant on the mezzanine of the Imperial Hotel Tokyo's main building: 94 seats, spacious tables, comfortable chairs and very courteous staff. Courses are creative French built on Japanese ingredients. In autumn the signature mushroom soup is the highlight, with a superb blue lobster. An October 2026 dinner course with champagne and wine pairing ran about ¥39,000; lunch is five courses. Portions are generous, and the chef came out to greet guests in Japanese. Breakfast is served too (a seasonal set for ¥6,700). An Imperial Club card or a hotel stay brings 10% off. 15% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Imperial Hotel Tokyo (opening date not given)', background: 'Hotel restaurant (Imperial Hotel).', philosophy: null, specialty: 'Seasonal mushroom soup; blue lobster.',
      anecdotes: [
        { text: '"The highlight was the restaurant\'s signature mushroom soup, which can only be enjoyed during this season… along with the Blue Lobster, which was superb." — October 2026.', source: R + 'B536835283/' },
        { text: '"We opted for a course priced around JPY 39,000, which included champagne and three glasses of white and red wine… The chef greeted us in Japanese." — October 2026.', source: R + 'B537421000/' },
      ],
      japanese_sources_summary: '食べログ: レ セゾン、千代田区内幸町1-1-1 帝国ホテル東京 本館中2F、日比谷駅から徒歩3分、94席、毎日ランチ11:30〜14:30・ディナー17:30〜22:00、無休、サービス料15%。2026年10月の口コミ: 季節の朝食6,700円、秋限定の名物マッシュルームのスープ、ブルーオマール、5品のランチコース、シャンパーニュと白赤3杯付きのコース約39,000円、日本の食材を使った創作的なフレンチ、食材を丁寧に説明、シェフが挨拶、量は多め、インペリアルクラブカードや宿泊で10%割引、ディナーは満席に。',
      confidence: 'medium', sources: [TB, R + 'B536835283/', R + 'B537421000/', R + 'B537161121/', R + 'B484677749/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Imperial Hotel service; staff explain dishes in detail.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-8558 東京都千代田区内幸町1-1-1 帝国ホテル東京 本館 中2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都千代田区内幸町一丁目1番 (lot) 118m — large hotel block; Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537421000/', R + 'B484677749/'],
    price_note: 'Prices from October 2026 reviews (tax incl.; 15% service extra).', last_checked: TODAY, items: [
      it('季節の朝食', 'kisetsu no chooshoku', 'Seasonal breakfast', '¥6,700', 'Breakfast', 'ask', 'no', 'October 2026.', 'breakfast'),
      it('ディナーコース(ワインペアリング付き)', '', 'Dinner course with champagne and wine pairing', '¥39,000', 'Courses', 'ask', 'no', 'About ¥39,000, October 2026.', 'dinner_pairing'),
      it('マッシュルームのスープ', '', 'Signature mushroom soup (autumn)', '', 'Courses', 'ask', 'no', 'Seasonal.', 'mushroom_soup'),
    ] }, {
    cuisine: 'グランドホテルのフレンチ・日本の食材の季節のコース・秋の名物マッシュルームのスープ、ブルーオマール・朝食6,700円',
    neighborhood: '帝国ホテル東京 本館中2F、内幸町。日比谷駅から徒歩3分',
    gf_detail: '要確認。マッシュルームのスープやブルーオマールなどグランドホテルのフレンチのコースで、食材は丁寧に説明してくれますが、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。オマールや肉のコース、乳製品の朝食。',
    notes: '[フレンチ・帝国ホテルのメインダイニング] 帝国ホテル東京本館の中2階にあるフレンチで、94席、広いテーブルと座り心地のよい椅子、丁寧なスタッフ。日本の食材を生かした創作的なフレンチのコースで、秋は名物のマッシュルームのスープが主役、ブルーオマールも絶品。2026年10月のディナーは、シャンパーニュとワインのペアリング付きのコースで約39,000円。ランチは5品のコース。量はたっぷりで、シェフが日本語で挨拶に来てくれたそう。朝食(季節の朝食6,700円)も。インペリアルクラブカードや宿泊で10%割引。サービス料15%。',
  });
}

// ================================================================ Peter
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13042813/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '14:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_peter_peninsula', name: 'Peter (ピーター)', category: 'OMNI',
    lat: 35.674848, lng: 139.760315,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses include rye bread, chestnut-cream fish and apple tart, and afternoon tea has croque-sandwiches; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: caviar, snow crab, cod, flounder, egg; one course opened with a yuba and beet espuma.',
    hours_raw: 'Daily 11:30–14:00 (L.O. 13:45) and 17:30–22:00 (L.O. 21:00); check with the restaurant (Tabelog). 18% service charge.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'The Peninsula Tokyo 24F, Yūrakuchō 1-chōme — Hibiya Stn exits A6/A7',
    cuisine: 'Hotel French on the 24th floor (formerly a steakhouse) · seasonal courses · afternoon tea with caviar tartlets · city views', cuisine_type: 'french',
    website: 'https://www.peninsula.com/ja/tokyo/hotel-fine-dining/peter-bar-grill', gmaps: gm('Peter ザ・ペニンシュラ東京'), menu_url: null,
    notes: "[French · Peninsula Tokyo top floor] The Peninsula Tokyo's 24th-floor restaurant, 112 seats with sweeping city views, now French after years as a steakhouse. An October 2026 lunch course (¥7,800 via a department-store promotion) ran a yuba and beet espuma, rye bread, domestic-mushroom soup with soy-milk foam, Hakodate cod with chestnut cream and celeriac sauce, and a Fuji-apple tart. A holiday dinner featured a poached egg in vin jaune sauce with kinome and fluffy steamed flounder. Autumn 2026 afternoon tea had a pink theme, with Osetra caviar tartlets, a truffle-ham croque and chestnut and raspberry sweets. 18% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 September 2007 (Tabelog)', background: 'Hotel restaurant (The Peninsula Tokyo).', philosophy: null, specialty: 'Seasonal French; afternoon tea.',
      anecdotes: [
        { text: '"This restaurant transitioned from a steakhouse to a French cuisine establishment… Domestic Mushroom Soup with White Soy Sauce and Soy Milk Foam." — October 2026, lunch.', source: R + 'B537375144/' },
        { text: '"The yellow wine sauce with kinome (Japanese pepper leaf) was exquisite… I learned for the first time that steaming flounder makes it so fluffy." — October 2026.', source: R + 'B537195280/' },
      ],
      japanese_sources_summary: '食べログ: Peter(ピーター)、千代田区有楽町1-8-1 ザ・ペニンシュラ東京24F、日比谷駅A6・A7出口、112席(個室1・半個室1)、毎日11:30〜14:00・17:30〜22:00、サービス料18%、2007年9月1日開店。2026年10月の口コミ: ステーキハウスからフレンチに、高島屋オリジナルコース7,800円(湯葉とビーツのエスプーマ、ライ麦パン、白醤油と豆乳の泡の国産キノコのスープ、函館の鱈と栗のクリーム、セロリラブのソース、ふじりんごのタルト)、ヴァン・ジョーヌと木の芽のソースのポーチドエッグ、蒸した平目、ピンクがテーマの秋のアフタヌーンティー(オシェトラキャビアのタルトレット、黒トリュフハムのクロック、栗やフランボワーズ)。',
      confidence: 'medium', sources: [TB, R + 'B537375144/', R + 'B537195280/', R + 'B504304203/', R + 'B536911599/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Luxury hotel; city views.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-8-1 ザ・ペニンシュラ東京 24F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目8番 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537375144/'],
    price_note: 'Promotional lunch price from an October 2026 review; 18% service extra.', last_checked: TODAY, items: [
      it('ランチコース', 'ranchi koosu', 'Lunch course (mushroom soup, Hakodate cod with chestnut cream, apple tart)', '¥7,800', 'Courses', 'ask', 'no', 'Department-store promotion, October 2026.', 'lunch_course'),
      it('アフタヌーンティー', 'afutanuun tii', 'Afternoon tea (caviar tartlet, truffle-ham croque, sweets)', '', 'Tea', 'no', 'no', 'Autumn 2026.', 'afternoon_tea'),
    ] }, {
    cuisine: 'ホテル24階のフレンチ(元ステーキハウス)・季節のコース・キャビアのタルトレットのアフタヌーンティー・都心の眺め',
    neighborhood: 'ザ・ペニンシュラ東京24F、有楽町一丁目。日比谷駅A6・A7出口',
    gf_detail: '要確認。コースにはライ麦パン、栗のクリームの魚、りんごのタルト、アフタヌーンティーにはクロックサンドもあり、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。キャビア、ズワイガニ、鱈、平目、卵。湯葉とビーツのエスプーマで始まるコースもありました。',
    notes: '[フレンチ・ペニンシュラ東京の最上階] ザ・ペニンシュラ東京24階の112席のレストランで、都心を一望。長くステーキハウスでしたが、今はフレンチに。2026年10月のランチコース(百貨店の企画で7,800円)は、湯葉とビーツのエスプーマ、ライ麦パン、白醤油と豆乳の泡の国産キノコのスープ、栗のクリームとセロリラブのソースの函館の鱈、ふじりんごのタルト。祝日のディナーではヴァン・ジョーヌと木の芽のソースのポーチドエッグや、ふっくら蒸した平目も。2026年秋のアフタヌーンティーはピンクがテーマで、オシェトラキャビアのタルトレット、黒トリュフハムのクロック、栗やフランボワーズのスイーツ。サービス料18%。',
  });
}

// ================================================================ 三笠会館 本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13317216/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:00']);
  put({
    id: 'tokyo_mikasa_kaikan_honten', name: '三笠会館 本店 (Mikasa Kaikan)', category: 'OMNI',
    lat: 35.671515, lng: 139.763622,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A building of several restaurants: pasta and curry in the Italian bar, teppanyaki upstairs, shaved ice; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: clams, curry, teppan beef, condensed-milk shaved ice.',
    hours_raw: 'Daily 11:00–22:00 (Tabelog listing for the building); individual restaurants keep their own hours.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme on Namiki-dōri, 5-5-17 — 40 m from Ginza Stn',
    cuisine: 'Long-standing Ginza dining building · Italian bar (¥2,500 pasta lunch), 7F teppanyaki, Kooridokoro Mikasa shaved ice · famous for kara-age', cuisine_type: 'other',
    website: 'https://www.mikasakaikan.co.jp/', gmaps: gm('三笠会館 本店 銀座5-5-17'), menu_url: null,
    notes: "[Ginza institution · several restaurants in one building] Mikasa Kaikan's flagship building on Namiki-dōri, 40 m from Ginza Station, with different restaurants on different floors. On the first floor, the Italian bar serves a ¥2,500 pasta lunch with bread, a starter, pasta, two desserts and coffee, such as Awaji onion and clams in lemon oil, and a spiced curry; the house is said to be famous for kara-age. In an 80-seat mezzanine room by the windows, ladies lunch quietly. On the 7th floor, teppanyaki is cooked in front of you (lean beef, Hokkaidō pumpkin soup, garlic rice). Kooridokoro Mikasa serves strawberry shaved ice with condensed milk on the side. A calm, Shōwa-era feel.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza flagship of Mikasa Kaikan (opening date not given)', background: 'Company-run (mikasakaikan.co.jp).', philosophy: null, specialty: 'Kara-age; pasta lunch; teppanyaki.',
      anecdotes: [
        { text: '"Pasta Lunch: JPY 2500 (tax included) (includes bread, one dish, pasta, two desserts, and coffee)… Clams in lemon oil flavor." — July 2026.', source: R + 'B531150671/' },
        { text: '"The live cooking right in front of me was fantastic… I recommend saving a few slices of meat for the garlic rice at the end." — October 2026, 7th floor.', source: R + 'B537210320/' },
      ],
      japanese_sources_summary: '食べログ: 三笠会館 本店、銀座5-5-17、銀座駅から40m、毎日11:00〜22:00(建物として)、公式サイト mikasakaikan.co.jp。2026年の口コミ: 1階のイタリアンバルでカレー(唐揚げが有名とも)、並木通り沿い、中2階の窓際の80席、パスタランチ2,500円(パン・一品・パスタ・デザート2品・コーヒー)、淡路島の新玉ねぎとあさりのレモンオイル、「氷処 三笠」の苺のかき氷と練乳、7階の鉄板焼き(目の前で焼く赤身の肉、北海道のかぼちゃのスープ、ガーリックライス)、昭和らしい落ち着いた雰囲気。',
      confidence: 'low', sources: [TB, R + 'B531150671/', R + 'B537210320/', R + 'B530187130/', R + 'B532609545/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Several restaurants — check which floor.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-5-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目5番17号 (go) 12m; 40 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531150671/'],
    price_note: 'Pasta lunch price from a July 2026 review.', last_checked: TODAY, items: [
      it('パスタランチ', 'pasuta ranchi', 'Pasta lunch: bread, starter, pasta, two desserts, coffee', '¥2,500', 'Lunch', 'no', 'no', 'July 2026.', 'pasta_lunch'),
      it('苺のかき氷', 'ichigo no kakigoori', 'Strawberry shaved ice with condensed milk (Kooridokoro Mikasa)', '', 'Sweets', 'ask', 'no', 'July 2026.', 'kakigori'),
      it('鉄板焼き', 'teppanyaki', 'Teppanyaki course with garlic rice (7F)', '', 'Courses', 'ask', 'no', 'October 2026.', 'teppan'),
    ] }, {
    cuisine: '銀座の老舗の飲食ビル・イタリアンバル(パスタランチ2,500円)、7階の鉄板焼き、氷処 三笠のかき氷・唐揚げが有名',
    neighborhood: '銀座五丁目、並木通り沿いの5-5-17。銀座駅から40m',
    gf_detail: '要確認。イタリアンバルのパスタやカレー、上階の鉄板焼き、かき氷など複数の店が入る建物で、グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。あさり、カレー、鉄板焼きの牛肉、練乳のかき氷。',
    notes: '[銀座の老舗・ひとつの建物に複数の店] 銀座駅から40m、並木通り沿いの三笠会館本店の建物で、フロアごとに違う店が入っています。1階のイタリアンバルでは、パン・一品・パスタ・デザート2品・コーヒーの2,500円のパスタランチ(淡路島の新玉ねぎとあさりのレモンオイルなど)やスパイスの効いたカレーを。唐揚げが有名とも。中2階の窓際の80席は女性客で静か。7階では目の前で焼く鉄板焼き(赤身の牛肉、北海道のかぼちゃのスープ、ガーリックライス)、「氷処 三笠」では練乳を別添えにした苺のかき氷。昭和らしい落ち着いた雰囲気です。',
  });
}

// ================================================================ ボア・ド・ブローニュ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13002153/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '15:30'], ['17:00', '22:00']);
  put({
    id: 'tokyo_bois_de_boulogne_hibiya_park', name: 'ボア・ド・ブローニュ (Bois de Boulogne)', category: 'OMNI',
    lat: 35.673703, lng: 139.755869,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Classic French courses come with three kinds of bread and finish with crêpe suzette; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: chicken pot-au-feu, meat and fish mains, crêpe suzette.',
    hours_raw: 'Mon–Thu, Sat and Sun 11:00–15:30 and 17:00–22:00; Fri 11:00–15:30 and 17:00–21:30 (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: day(['11:00', '15:30'], ['17:00', '21:30']), 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hibiya Park, Matsumoto-rō 3F — near Hibiya and Kasumigaseki Stns',
    cuisine: 'Classic French in Hibiya Park’s historic Matsumoto-rō · ¥6,000 prix-fixe lunch · park views · crêpe suzette', cuisine_type: 'french',
    website: 'https://matsumotoro.co.jp/restaurant/boulogne/', gmaps: gm('ボア・ド・ブローニュ 松本楼'), menu_url: null,
    notes: "[French · inside Hibiya Park] The classic French dining room on the third floor of Matsumoto-rō, the historic restaurant building in Hibiya Park. Big windows look out on the park's seasonal greenery, and the city feels far away. The ¥6,000 prix-fixe lunch (2026) includes an amuse-bouche, three kinds of bread (the baguette stands out), soup or appetizer, main, dessert and coffee. An ¥8,000 five-course 'forest and island' lunch with domestic ingredients disappointed one diner, with chicken pot-au-feu as the main and a yam ice cream. A crêpe suzette is flambéed at the table. Popular for anniversaries.",
    chef_bio: { chef_name: null, roles: [], origin: 'Matsumoto-rō, Hibiya Park (opening date not given)', background: 'Run by Matsumoto-rō (matsumotoro.co.jp).', philosophy: null, specialty: 'Classic French; crêpe suzette.',
      anecdotes: [
        { text: '"I enjoyed the prefix lunch (JPY 6,000), which includes an amuse-bouche, bread, a choice of soup or appetizer, a main dish, dessert, and coffee." — June 2026.', source: R + 'B531397110/' },
        { text: '"The presentation of the Crepe Suzette was delightful, filling the restaurant with a wonderful aroma." — August 2026.', source: R + 'B535564690/' },
      ],
      japanese_sources_summary: '食べログ: ボア・ド・ブローニュ、千代田区日比谷公園1-2 松本楼3F、霞ケ関駅・日比谷駅の近く、月〜木・土日11:00〜15:30・17:00〜22:00、金は21:30まで、公式サイト matsumotoro.co.jp。2026年の口コミ: 日比谷公園の歴史ある松本楼の3階、大きな窓から公園の緑、プリフィクスランチ6,000円(アミューズ、3種のパン、スープか前菜、メイン、デザート、コーヒー)、「森と島のランチコース」8,000円(鶏のポトフ、自然薯のアイスに不満の声)、クレープシュゼット、記念日向き。',
      confidence: 'medium', sources: [TB, R + 'B531397110/', R + 'B535564690/', R + 'B529248478/', R + 'B532422102/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Classic dining room in the park; good for anniversaries.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0012 東京都千代田区日比谷公園1-2 松本楼 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–August 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都千代田区日比谷公園1番 (lot) 192m — park lot centroid; Tabelog point kept; 767 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531397110/', R + 'B529248478/'],
    price_note: 'Lunch prices from May–June 2026 reviews.', last_checked: TODAY, items: [
      it('プリフィクスランチ', 'purifikusu ranchi', 'Prix-fixe lunch: amuse, bread, soup or appetizer, main, dessert, coffee', '¥6,000', 'Lunch', 'ask', 'no', 'June 2026.', 'prixfixe'),
      it('森と島のランチコース(5品)', '', '"Forest and Island" lunch course, 5 dishes', '¥8,000', 'Lunch', 'ask', 'no', 'May 2026.', 'forest_island'),
      it('クレープシュゼット', 'kureepu shuzetto', 'Crêpe suzette, flambéed at the table', '', 'Dessert', 'no', 'no', 'August 2026.', 'crepe_suzette'),
    ] }, {
    cuisine: '日比谷公園の歴史ある松本楼のクラシックなフレンチ・プリフィクスランチ6,000円・公園の眺め・クレープシュゼット',
    neighborhood: '日比谷公園、松本楼3F。日比谷駅・霞ケ関駅の近く',
    gf_detail: '要確認。クラシックなフレンチのコースで、3種のパンが付き、デザートはクレープシュゼット。グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。鶏のポトフ、肉や魚のメイン、クレープシュゼット。',
    notes: '[フレンチ・日比谷公園の中] 日比谷公園の歴史ある建物、松本楼の3階にあるクラシックなフレンチ。大きな窓から公園の季節の緑が見え、都心にいることを忘れます。プリフィクスランチ(2026年は6,000円)は、アミューズ、3種のパン(バゲットが人気)、スープか前菜、メイン、デザート、コーヒー。国産食材の「森と島のランチコース」(5品・8,000円)は、メインが鶏のポトフで自然薯のアイスも今ひとつだったという声も。クレープシュゼットは席でフランベしてくれます。記念日に人気。',
  });
}

save();
