// Ginza Station half-mile sweep (805 m), batch 44 — small non-Japanese counters from the Tabelog crawl candidates.
//   + レ・フレール・アオキ (10-seat French counter behind the Kabukiza, opened 2021 by owner-chef Makoto Aoki → MOM_AND_POP)
//   + 銀座 ミヤガワ (chopstick French; run by a married couple, chef and sommelier, but unnamed → OMNI per the unnamed-couple rule)
//   + 銀座 鉄板焼き Shin Harada (teppanyaki by Italian chef Shinji Harada, opening-price course → OMNI)
//   + 白樺 (teppan-French counter on Corridor-dōri, opened 2024; ¥1,500 hamburg lunch; owner not named → OMNI)
// Skipped: La miu (no review dated 2026).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ レ・フレール・アオキ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13263096/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['12:00', '14:30'], ['18:30', '22:30']), sat = day(['12:00', '14:00'], ['18:30', '21:00']), sun = day(['12:00', '14:00'], ['18:30', '21:30']);
  put({
    id: 'tokyo_les_freres_aoki_higashi_ginza', name: 'レ・フレール・アオキ (LES FRÈRES AOKI)', category: 'MOM_AND_POP',
    lat: 35.670709, lng: 139.76923,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a Parisian-style French menu with bread, cod fritters, pâté, mille-feuille, chausson pastry and risotto; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of pâté, foie gras, beef tongue, fish and game (venison), with dairy desserts.',
    hours_raw: 'Tue–Fri 12:00–14:30 (L.O. 13:30) and 18:30–22:30 (L.O. 20:00); Sat 12:00–14:00 and 18:30–21:00; Sun 12:00–14:00 and 18:30–21:30; holidays dinner only; closed Mondays (Tabelog). Cards accepted.',
    hours: { 1: wk, 2: wk, 3: wk, 4: wk, 5: sat, 6: sun }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme behind the Kabukiza, ground floor — 5 min from Higashi-Ginza Stn',
    cuisine: 'Casual Parisian French at a 10-seat counter · game and pâté · ¥5,000 weekday lunch course', cuisine_type: 'french',
    website: null, gmaps: gm('レ・フレール・アオキ 銀座3-12-6'), menu_url: null,
    notes: "[Mom & Pop · Paris behind the Kabukiza] A bright, playful ten-seat counter behind the Kabukiza, opened in September 2021 by owner-chef Makoto Aoki. In the chef's own words on Tabelog, Aoki was born in Tokyo in 1969 and learned the trade at the family restaurant, Ginza Sushi Aoki, and at the French restaurant L'Oiseau, moved to France in 1995 and ran Restaurant Makoto Aoki in Paris for thirteen years from 2006. The menu brought back is casual, authentic French: cucumber-yogurt soup, Parisian pâté de volaille, cod fritters with Portuguese sauce, beef-tongue brick with cochonnaille, chanterelle risotto, Amami fish with squid-ink coulis, Tokachi venison (game is the chef's reputation), foie-gras and fennel mille-feuille, and hot apple chausson with cassis sorbet. The weekday lunch petit course is ¥5,000, with half glasses of wine from ¥1,250. Wines change monthly to match the course. Regulars come back again and again (one has made 21 visits). One October 2026 diner found the room too loud to hear the chef.",
    chef_bio: {
      chef_name: 'Makoto Aoki (owner-chef)', roles: ['owner-chef'],
      origin: 'Opened 7 September 2021 behind the Kabukiza (Tabelog)',
      background: 'Born in Tokyo in 1969; trained at the family restaurant Ginza Sushi Aoki and at L\'Oiseau; to France in 1995; ran Restaurant Makoto Aoki in Paris for 13 years from 2006 (Tabelog chef text).',
      philosophy: '"I am an owner-chef who values communication with customers." (Tabelog chef text)', specialty: 'Pâté de volaille; game; Parisian bistro classics.',
      anecdotes: [
        { text: '"Chef Aoki is renowned for his game dishes, and this was exceptionally delicious." — a seven-visit regular, August 2026.', source: R + 'B449231072/' },
        { text: 'A 21-visit regular\'s October 2026 course: grilled-eggplant soup with Ezo abalone and summer truffle, beef-tongue brick, chanterelle risotto, Amami fish with squid-ink coulis, Tokachi venison, apple chausson.', source: R + 'B452231972/' },
        { text: '"The counter seats only 10 people, but 8 of them were talking loudly, making it difficult to hear the chef\'s explanations of the dishes." — October 2026.', source: R + 'B537197076/' },
      ],
      japanese_sources_summary: '食べログ: レ・フレール・アオキ、銀座3-12-6 1F、東銀座駅から徒歩5分、10席、火〜金12:00〜14:30・18:30〜22:30、土日は昼と夜(短め)、祝日は夜のみ、月休、2021年9月7日開店、カード可。シェフ紹介(英文): オーナーシェフ Makoto Aoki、1969年東京生まれ、家業の「Ginza Sushi Aoki」と「L\'Oiseau」で修業、1995年に渡仏、2006年からパリで「Restaurant Makoto Aoki」を13年、2021年9月に歌舞伎座裏で開店、月替わりのフランスワイン。2026年の口コミ: パリの味、胡瓜のスープ、パテ・ド・ヴォライユ、鱈のフリット、牛タンのブリック、ジロール茸のリゾット、奄美の魚とイカ墨、十勝の蝦夷鹿、ショソン、平日ランチのプティコース5,000円、ハーフグラス1,250円〜、21回通う常連、店内が騒がしいとの声も。',
      confidence: 'high', sources: [TB, R + 'B449231072/', R + 'B452231972/', R + 'B534883531/', R + 'B537197076/', R + 'B537986519/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Ten-seat counter with a cheerful, sometimes loud room; the chef talks through dishes.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Cod fritters, pastry (mille-feuille, chausson) and bread in the courses.', source: R + 'B452231972/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-12-6 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目12番6号 (go) 9m; same lot as 有明そば; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534883531/', R + 'B452231972/'],
    price_note: 'Lunch course and wine prices from a September 2026 review.', last_checked: TODAY, items: [
      it('平日限定 プティコース', 'puchi koosu', 'Weekday lunch petit course', '¥5,000', 'Lunch', 'no', 'no', '2026.', 'petit_course'),
      it('ディナーコース', 'dinaa koosu', 'Seasonal dinner course', '', 'Dinner', 'no', 'no', '', 'dinner_course'),
      it('グラスワイン(ハーフ)', 'gurasu wain', 'Half glass of wine', '¥1,250–', 'Drinks', 'gf', 'ask', '2026.', 'wine_half'),
    ] }, {
    cuisine: '10席のカウンターのパリ風カジュアルフレンチ・ジビエとパテ・平日ランチのコース5,000円',
    neighborhood: '銀座三丁目、歌舞伎座の裏の1階。東銀座駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。パン、鱈のフリット、パテ、ミルフィーユ、ショソン、リゾットなどのフランス料理で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。パテ、フォアグラ、牛タン、魚、ジビエ(鹿)と乳製品のデザートのコース。',
    notes: '[個人店・歌舞伎座裏のパリ] 歌舞伎座の裏、明るく遊び心のある10席のカウンターで、2021年9月にオーナーシェフの Makoto Aoki が開店。食べログのシェフ紹介(英文)によれば、1969年東京生まれ、家業の Ginza Sushi Aoki と L\'Oiseau で修業し、1995年に渡仏、2006年からパリで Restaurant Makoto Aoki を13年営みました。持ち帰ったのは気軽で本格的なフランスの味で、ヨーグルトとスパイスの胡瓜のスープ、パテ・ド・ヴォライユ、ポルトガル風ソースの鱈のフリット、コショナイユを添えた牛タンのブリック、ジロール茸のリゾット、奄美の魚とイカ墨のクーリ、十勝の蝦夷鹿(ジビエに定評)、フォアグラとフヌイユのミルフィーユ、温かいリンゴのショソンとカシスのソルベ。平日ランチのプティコースは5,000円、ワインはハーフグラス1,250円から、月替わりでコースに合わせます。21回通う常連も。2026年10月には店内が騒がしくシェフの説明が聞こえなかったとの声も。',
  });
}

// ================================================================ 銀座 ミヤガワ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13097096/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:30', '22:00']);
  put({
    id: 'tokyo_ginza_miyagawa', name: '銀座 ミヤガワ (Ginza Miyagawa)', category: 'OMNI',
    lat: 35.67057, lng: 139.760625,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese-French dishes eaten with chopsticks, including beef rice noodles with caviar, fried scallops and a pudding; no source describes wheat or soy use or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: caviar, abalone, bonito, sweetfish, scallops, crab and tenderloin steak.',
    hours_raw: 'Mon–Sat 17:30–22:00; closed Sundays and holidays (Tabelog). Book well ahead. Cards and QR accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme near Corridor-dōri, Tōgo Bldg 4F (Kawamura steakhouse on the ground floor) — about 5 min from Ginza Stn',
    cuisine: 'Japanese-French eaten with chopsticks · caviar beef rice noodles · couple-run, chef and sommelier', cuisine_type: 'french',
    website: null, gmaps: gm('銀座 ミヤガワ 銀座7-3-16 東五ビル'), menu_url: null,
    notes: "[French · the chopstick French couple] A cosy room of about a dozen counter and table seats on a fourth floor near Corridor-dōri, above the old steakhouse Kawamura. Reviewers say a married couple runs it: the husband cooks, having once been head chef at a Chinese restaurant, and the wife is the sommelier. Neither is named in any source. Dishes are Japanese-French and eaten with chopsticks, with luxury ingredients used generously. It opens with beef rice noodles topped with caviar, then simmered abalone with Tosa vinegar, bonito tartare with anchovy and garlic, sweetfish with wild asparagus and karasumi, fried scallop and zucchini, a crab and eggplant soup, tenderloin steak and a pudding. Wines are chosen to match, including by the glass. Expect ¥15,000–35,000 a head. Bookings can take a month, though last-minute seats sometimes open.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 7-chōme; opening date not found in a source read', background: 'Reviewers describe a husband-and-wife team: chef (formerly head chef at a Chinese restaurant) and sommelier; no source names them.', philosophy: null, specialty: 'Caviar beef rice noodles; abalone; tenderloin.',
      anecdotes: [
        { text: '"Run by a husband-and-wife team, the husband is the chef, a former head chef at a Chinese restaurant, and the wife is a sommelier." — May 2026.', source: R + 'B530058964/' },
        { text: '"I absolutely love the beef rice noodles topped with caviar that comes out first." — November 2025.', source: R + 'B523930489/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 ミヤガワ、銀座7-3-16 東五ビル4F、10席、月〜土17:30〜22:00、日祝休、カード・QR可。口コミ(2025〜2026年): 箸で食べる和のフレンチ、夫婦で営む(シェフの夫は元中華料理店の料理長、妻はソムリエ)、キャビアをのせた牛肉のビーフン、鮑の土佐酢、鰹のタルタル、鮎とアスパラとからすみ、帆立とズッキーニのフライ、蟹と茄子のスープ、ヒレステーキ、プリン、1階は老舗ステーキ店、予約は1か月先も。',
      confidence: 'low', sources: [TB, R + 'B530058964/', R + 'B523930489/', R + 'B529289792/', R + 'B521859036/', R + 'B508599950/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Homey, small room; sommelier pairs wines. Book early.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Fried scallops and zucchini in the course.', source: R + 'B530058964/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-3-16 東五ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目3番16号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530058964/'],
    price_note: 'No prices captured; reviewers spend ¥15,000–35,000.', last_checked: TODAY, items: [
      it('おまかせコース', 'omakase koosu', 'Course: caviar beef rice noodles, abalone, bonito tartare, sweetfish, crab soup, tenderloin, pudding', '', 'Courses', 'ask', 'no', '', 'course'),
    ] }, {
    cuisine: '箸で食べる和のフレンチ・キャビアのビーフン・夫婦で営むシェフとソムリエ',
    neighborhood: '銀座七丁目のコリドー通り近く、東五ビル4F(1階は老舗のステーキ店)。銀座駅から徒歩5分ほど',
    gf_detail: '要確認。キャビアをのせた牛肉のビーフン、帆立のフライ、プリンなど箸で食べる和のフレンチ。小麦や醤油の使用、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。キャビア、鮑、鰹、鮎、帆立、蟹、ヒレステーキ。',
    notes: '[フレンチ・箸で食べる夫婦のフレンチ] コリドー通り近くのビル4階、1階は老舗ステーキ店。カウンターとテーブルで十数席の居心地のよい店です。口コミによれば夫婦で営み、元は中華料理店の料理長だった夫が料理を、妻がソムリエを担当します。名前を記した情報はありません。料理は和の要素を取り入れたフレンチで箸で食べ、高級食材を惜しみなく使います。最初はキャビアをのせた牛肉のビーフン、続いて鮑の土佐酢、アンチョビとにんにくの鰹のタルタル、山アスパラとからすみの鮎、帆立とズッキーニのフライ、蟹と茄子のスープ、ヒレステーキ、大人のプリン。ワインは料理に合わせてグラスでも。1人1.5〜3.5万円ほどで、予約は1か月先になることもありますが、直前に空くことも。',
  });
}

// ================================================================ 銀座 鉄板焼き Shin Harada
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13323783/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_ginza_teppanyaki_shin_harada', name: '銀座 鉄板焼き Shin Harada (Ginza Teppanyaki Shin Harada)', category: 'OMNI',
    lat: 35.668566, lng: 139.763034,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A 15-dish teppan course (beef-consommé flan, abalone, eel, A5 Wagyu, vegetables) from an Italian chef; no source describes wheat or soy use or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of Wagyu, abalone, eel, caviar and snow crab.',
    hours_raw: 'Daily 11:30–15:00 and 17:00–23:00 (Tabelog). Book about a week ahead by phone. Wide non-alcoholic drinks list. Cards accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Dai-go Taiyō Bldg 903 (same building as 鮨まつもと) — 3 min from Ginza or Higashi-Ginza Stn',
    cuisine: 'Teppanyaki by Italian chef Shinji Harada · 15-dish A5 Wagyu and abalone course at an opening price of ¥9,900', cuisine_type: 'other',
    website: null, gmaps: gm('銀座 鉄板焼き Shin Harada 銀座7-10-8'), menu_url: null,
    notes: "[Teppanyaki · an Italian chef at the griddle] An eight-seat teppanyaki counter on the ninth floor of a Ginza 7-chōme building. Its Tabelog page presents chef Shinji Harada as a master Italian chef with many published works. A 2026 diner calls him Michelin-starred. As an opening offer, a 15-dish course listed at ¥15,000 costs ¥9,900 (¥9,800 in one review). It opens with a beef-consommé flan, a French-style chawanmushi, and runs through Sendai beef, Hokkaido abalone, eel and seasonal vegetables such as red eggplant, pumpkin, komatsuna and tomato. Some courses add caviar and snow crab, with A5 black Wagyu as the main. Diners praise the non-alcoholic drinks list. Book about a week ahead; it was full on a weekday at 8 p.m. in October 2026.",
    chef_bio: { chef_name: 'Shinji Harada (chef)', roles: ['chef'], origin: 'Recently opened in Ginza 7-chōme (opening-price course in 2026)', background: 'Presented on Tabelog as a master Italian chef with numerous published works; a 2026 reviewer calls him Michelin-starred.', philosophy: null, specialty: 'Teppan A5 Wagyu; beef-consommé flan.',
      anecdotes: [
        { text: '"Regularly JPY 15,000, now JPY 9,900! Enjoy a 15-Dish Teppanyaki Course in Ginza." — October 2026.', source: R + 'B537707569/' },
        { text: 'An October 2026 regular\'s course: beef-consommé flan, Sendai beef, Hokkaido abalone, eel, red eggplant, pumpkin, komatsuna and tomato, for ¥9,800.', source: R + 'B532175314/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 鉄板焼き Shin Harada、銀座7-10-8 第五太陽ビル903、銀座駅・東銀座駅から徒歩3分、8席、毎日11:30〜15:00・17:00〜23:00、カード可、シェフ紹介(英文): 著書多数のイタリアンの名シェフ Shinji Harada、開店記念で15品15,000円のコースを9,900円。2026年10月の口コミ: 牛コンソメのフラン、仙台牛、北海道の鮑、鰻、赤茄子・南瓜・小松菜・トマト、キャビアやズワイ蟹のコース、A5黒毛和牛、ノンアルコールが豊富、電話で1週間前に予約、平日20時も満席。',
      confidence: 'low', sources: [TB, R + 'B532175314/', R + 'B534928413/', R + 'B535341069/', R + 'B537210311/', R + 'B537707569/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Eight-seat teppan counter; good non-alcoholic options; book a week ahead.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-10-8 第五太陽ビル 903',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; five reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目10番8号 (go) 30m; same building as 鮨まつもと 本店 (8F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537707569/', R + 'B532175314/'],
    price_note: 'Opening-price course from the Tabelog listing and October 2026 reviews.', last_checked: TODAY, items: [
      it('スペシャルコース 15品', 'supesharu koosu', '15-dish teppan course (A5 Wagyu, abalone)', '¥9,900', 'Courses', 'ask', 'no', 'Opening price (list ¥15,000).', 'special_course'),
    ] }, {
    cuisine: 'イタリアンのシェフ Shinji Harada の鉄板焼き・A5黒毛和牛と鮑の15品のコースが開店記念価格9,900円',
    neighborhood: '銀座七丁目、第五太陽ビル903(鮨まつもとと同じビル)。銀座駅・東銀座駅から徒歩3分',
    gf_detail: '要確認。牛コンソメのフラン、鮑、鰻、A5和牛、野菜の15品の鉄板コース(イタリアンのシェフ)。小麦や醤油の使用、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。和牛、鮑、鰻、キャビア、ズワイ蟹のコース。',
    notes: '[鉄板焼き・イタリアンのシェフの鉄板] 銀座七丁目のビル9階、8席の鉄板焼きのカウンター。食べログではシェフの Shinji Harada を著書多数のイタリアンの名シェフと紹介し、2026年の口コミではミシュランの星付きシェフとも。開店記念として15,000円の15品のコースが9,900円(口コミでは9,800円も)。フランス風の茶碗蒸しのような牛コンソメのフランに始まり、仙台牛、北海道の鮑、鰻、赤茄子・南瓜・小松菜・トマトなど旬の野菜へ。キャビアやズワイ蟹が入るコースもあり、主役はA5黒毛和牛。ノンアルコールの品揃えも好評。予約は1週間前ほどに電話で。2026年10月は平日20時でも満席でした。',
  });
}

// ================================================================ 白樺
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13300560/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:00'], ['17:00', '23:30']);
  put({
    id: 'tokyo_shirakaba_ginza_corridor', name: '白樺 (Shirakaba)', category: 'OMNI',
    lat: 35.670464, lng: 139.759835,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: teppan-French dinners and a hamburg-steak lunch with a choice of four sauces including mushroom demi-glace; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a hamburg-steak lunch and teppan meat courses.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–23:30; Sat 17:00–22:00; closed Sundays (Tabelog). Cards accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme on Corridor-dōri, THE CITY Ginza 6F — 5 min from Shimbashi Stn',
    cuisine: 'Teppan-French eaten with chopsticks · ¥1,500 hamburg-steak lunch at a 7-seat L-shaped counter', cuisine_type: 'french',
    website: null, gmaps: gm('白樺 銀座7-2-16 THE CITY 銀座'), menu_url: null,
    notes: "[French · teppan lunch on Corridor-dōri] A long, chic seven-seat L-shaped counter on the sixth floor of a Corridor-dōri building, opened in August 2024. In the evening it is teppan-French eaten with chopsticks, about ¥20,000–30,000. At weekday lunch a sign on the street advertises a ¥1,500 hamburg steak (tax included): a juicy hamburg with a choice of four sauces, such as mushroom demi-glace, plus salad with a well-judged dressing, glossy rice, vegetables and a sorbet to finish. Office workers walk in at 11:30 without a wait.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 August 2024 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Teppan-French; hamburg steak.',
      anecdotes: [
        { text: '"I ordered the Hamburger Lunch for JPY 1500, tax included … You can choose from four types of sauces for the hamburger." — September 2026.', source: R + 'B535476829/' },
        { text: '"High-value lunch at a luxury Teppan-yaki restaurant in the evening." — May 2026.', source: R + 'B529653909/' },
      ],
      japanese_sources_summary: '食べログ: 白樺、銀座7-2-16 THE CITY 銀座6F、新橋駅から徒歩5分、7席、平日11:30〜14:00・17:00〜23:30、土17:00〜22:00、日休、2024年8月20日開店、カード可、夜2〜3万円。2026年の口コミ: 箸で食べるフレンチ、鉄板、L字のカウンター、平日ランチのハンバーグ税込1,500円(4種のソース、きのこのデミグラスなど)、サラダ、ご飯、シャーベット。',
      confidence: 'low', sources: [TB, R + 'B535476829/', R + 'B529653909/', R + 'B530130752/', R + 'B531377710/', R + 'B528504643/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk-in lunch counter; pricier teppan-French at night.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2-16 THE CITY 銀座 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目2番16号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535476829/', R + 'B530130752/'],
    price_note: 'Lunch price from 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('ハンバーグランチ', 'hanbaagu ranchi', 'Hamburg-steak lunch with salad, rice, sorbet (choice of four sauces)', '¥1,500', 'Lunch', 'no', 'no', '2026.', 'hamburg_lunch'),
      it('鉄板フレンチのコース', 'teppan furenchi koosu', 'Teppan-French dinner course', '', 'Dinner', 'ask', 'no', '', 'dinner_course'),
    ] }, {
    cuisine: '箸で食べる鉄板フレンチ・7席のL字カウンターの1,500円のハンバーグランチ',
    neighborhood: '銀座七丁目のコリドー通り、THE CITY 銀座6F。新橋駅から徒歩5分',
    gf_detail: '実際上グルテンフリーではありません。鉄板フレンチの夜と、きのこのデミグラスなど4種のソースから選ぶハンバーグのランチ。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。ハンバーグのランチと鉄板の肉のコース。',
    notes: '[フレンチ・コリドー通りの鉄板ランチ] コリドー通りのビル6階、2024年8月開店の長くシックなL字の7席カウンター。夜は箸で食べる鉄板フレンチで2〜3万円ほど。平日の昼は路上の看板に税込1,500円のハンバーグ。ジューシーなハンバーグにきのこのデミグラスなど4種から選べるソース、程よいドレッシングのサラダ、つややかなご飯、野菜、締めのシャーベット。11時半なら待たずに入れます。',
  });
}

save();
