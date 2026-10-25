// Ginza Station half-mile sweep (805 m), batch 46 — small non-Japanese places with 2026 reviews (all OMNI).
//   + ギンザ カンセイ (French since 1990, Aoyama then Ginza; chef Mikiyasu Sakata; owner not stated)
//   + ビストロ・カシュカシュ (bistro on Shusse-kaidō since 1998; owner not named)
//   + Le Bonze (Higashi-Ginza bistro since 2012; owner not named)
//   + 加藤牛肉店 銀座 (Yamagata-beef steakhouse; owner not named)
// Not added this batch: 薪焼 銀座おのでら (ONODERA group), PLEIN 銀座本店 (PLEIN group main store) — later, as OMNI;
// 銀座 紫野, 銀座和縁 — next batch.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ ギンザ カンセイ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13016563/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_ginza_kansei', name: 'ギンザ カンセイ (GINZA Kansei)', category: 'OMNI',
    lat: 35.668463, lng: 139.764306,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French courses built on domestic vegetables, fish and meat, with truffle pâté, foie gras and bread with herb butter; no source describes wheat use or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses with foie gras, pâté, fish and meat, and whipped butter.',
    hours_raw: 'Mon–Sat 12:00–15:00 (L.O. 14:00) and 18:00–22:00 (L.O. 19:30; Fri 19:00); closed Sundays (Tabelog). Cards accepted.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld, 5: ld }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Fujitaka Bldg 2–3F, fully private rooms — 5 min from Ginza or Higashi-Ginza Stn',
    cuisine: 'French cuisine since 1990 (Aoyama, now Ginza) · chef Mikiyasu Sakata · domestic ingredients in private rooms', cuisine_type: 'french',
    website: null, gmaps: gm('ギンザ カンセイ 銀座7-12-1 藤高ビル'), menu_url: null,
    notes: "[French · forty years of one chef's French] A French restaurant of fully private rooms on the second and third floors of a Ginza 7-chōme building, led by chef Mikiyasu Sakata. It opened in Aoyama in 1990 and later moved here. In Tabelog's chef text Sakata describes more than forty years in French cooking and a 'Culinary Masters' award from the agriculture ministry, work as a cultural ambassador for Iwate and Miyagi, and a commitment to domestic ingredients, which reviewers say the chef sources personally around Japan. 2026 diners describe a vegetable-forward course that does not feel heavy. It includes white asparagus and shirasu salad, truffle-topped pâté, foie gras with crunchy truffle, and bread with a fluffy six-herb whipped butter. The chef's omakase was ¥33,880 including tax in April 2026.",
    chef_bio: { chef_name: 'Mikiyasu Sakata (chef)', roles: ['chef'], origin: 'Opened 1 April 1990 in Aoyama; now in Ginza 7-chōme (Tabelog; 2026 review)', background: 'More than 40 years in French cuisine; "Culinary Masters" award from MAFF; cultural ambassador for Iwate and Miyagi (Tabelog chef text).', philosophy: '"My passion lies in facing ingredients, creating delicious dishes, and bringing joy to my customers." (Tabelog chef text)', specialty: 'Domestic vegetables; truffle and foie gras.',
      anecdotes: [
        { text: '"From its opening in Aoyama in 1990 to its current location in Ginza, Chef Sakata\'s dedication to food has been evident." — April 2026.', source: R + 'B527301812/' },
        { text: '"The whipped butter with six types of herbs was fluffy, light on the palate, and had a wonderful aroma." — June 2026.', source: R + 'B530866294/' },
      ],
      japanese_sources_summary: '食べログ: ギンザ カンセイ、銀座7-12-1 藤高ビル2・3F、銀座駅B3・B5出口・東銀座駅から徒歩5分、14席・完全個室、月〜土12:00〜15:00・18:00〜22:00、日休、1990年4月1日開店、カード可。シェフ紹介(英文): Mikiyasu Sakata、フランス料理40年以上、農林水産省「料理マスターズ」、岩手・宮城の文化大使、国産食材へのこだわり。2026年の口コミ: 1990年に青山で開業し銀座へ、野菜中心で重くないコース、白アスパラとしらすのサラダ、トリュフのパテ、フォアグラとトリュフ、6種のハーブのホイップバター、シェフのおまかせ33,880円(税込)。',
      confidence: 'medium', sources: [TB, R + 'B527301812/', R + 'B530866294/', R + 'B526847140/', R + 'B526006634/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Fully private rooms; book ahead. Lunch and dinner courses.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-12-1 藤高ビル 2・3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目12番1号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527301812/'],
    price_note: 'Omakase price from an April 2026 review (tax included).', last_checked: TODAY, items: [
      it('シェフのおまかせコース', 'shefu no omakase koosu', "Chef's omakase course", '¥33,880', 'Courses', 'ask', 'no', '2026.', 'omakase'),
    ] }, {
    cuisine: '1990年創業のフレンチ(青山から銀座へ)・Mikiyasu Sakata シェフ・個室で国産食材',
    neighborhood: '銀座七丁目、藤高ビル2・3Fの完全個室。銀座駅・東銀座駅から徒歩5分',
    gf_detail: '要確認。国産の野菜・魚・肉を中心にしたフレンチのコースで、トリュフのパテ、フォアグラ、ハーブバターとパン。小麦の使用やグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。フォアグラ、パテ、魚、肉、ホイップバターのコース。',
    notes: '[フレンチ・ひとりのシェフの40年] 銀座七丁目のビル2・3階、完全個室のフレンチで、Mikiyasu Sakata シェフが率います。1990年に青山で開業し、のちに銀座へ。食べログのシェフ紹介によれば、フランス料理に40年以上携わり、農林水産省の「料理マスターズ」を受賞、岩手・宮城の文化大使も務め、国産食材にこだわります(口コミによれば全国を回って自ら仕入れ)。2026年の口コミでは、白アスパラとしらすのサラダ、トリュフをのせたパテ、カリッとしたトリュフのフォアグラ、6種のハーブのふわふわのホイップバターとパンなど、野菜が主役で重くないコース。2026年4月のシェフのおまかせは税込33,880円。',
  });
}

// ================================================================ ビストロ・カシュカシュ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002660/'; const R = TB + 'dtlrvwlst/';
  const dn = ['18:00', '21:00'];
  put({
    id: 'tokyo_bistro_cache_cashe_ginza8', name: 'ビストロ・カシュカシュ (Bistro Cache Cashe)', category: 'OMNI',
    lat: 35.668555, lng: 139.760443,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: bistro courses with sea-urchin and caviar pasta, truffle risotto and braised beef; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: venison, braised beef, crab miso and sea-urchin pasta; the cauliflower mousse is not described ingredient by ingredient.',
    hours_raw: 'Mon 18:00–21:00; Tue–Fri 12:00–13:00 and 18:00–21:00; Sat 18:00–20:00 (closed some Saturdays); closed Sundays and holidays (Tabelog). ¥500 table charge. Cards accepted.',
    hours: { 0: day(dn), 1: day(['12:00', '13:00'], dn), 2: day(['12:00', '13:00'], dn), 3: day(['12:00', '13:00'], dn), 4: day(['12:00', '13:00'], dn), 5: day(['18:00', '20:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme on the Shusse-kaidō alley, Watanabe Bldg 1F — about 4 min from Shimbashi Stn',
    cuisine: 'Hidden Ginza bistro since 1998 · cauliflower mousse, venison, truffle risotto · ¥12,000 course', cuisine_type: 'french',
    website: null, gmaps: gm('ビストロ・カシュカシュ 銀座8-6-19'), menu_url: null,
    notes: "[Bistro · on Shusse-kaidō since 1998] A small, warmly lit bistro on Ginza 8-chōme's Shusse-kaidō alley, open since August 1998, with four counter seats and five two-person tables. Regulars of ten years and more come back for the starter they always request, a cauliflower mousse. Then come venison with no gaminess, risotto heaped with truffle, rich crab miso, angel-hair cream pasta with sea urchin and caviar, and braised beef. The course was ¥12,000 in January 2026, and drinks are reasonably priced. Weekday nights fill up, while Saturday nights can be quiet enough to feel like a private booking. Lunch is a single hour, 12:00–13:00, Tuesday to Friday. ¥500 table charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 August 1998 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Cauliflower mousse; venison; truffle risotto.',
      anecdotes: [
        { text: '"When making the reservation, I always request the cauliflower mousse as my first dish." — January 2026.', source: R + 'B505813662/' },
        { text: '"I have been visiting this restaurant for over ten years since my first visit." — May 2026.', source: R + 'B274178897/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ・カシュカシュ、銀座8-6-19 渡辺ビル1F、新橋駅から310m、14席(カウンター4・2名卓5)、月18:00〜21:00、火〜金12:00〜13:00・18:00〜21:00、土18:00〜20:00(不定休)、日祝休、テーブルチャージ500円、1998年8月18日開店、カード可。2026年の口コミ: 出世街道の路地のビストロ、10年以上通う常連、カリフラワーのムース、鹿肉、トリュフのリゾット、蟹味噌、雲丹とキャビアのパスタ、牛の煮込み、コース12,000円、平日夜は混み土曜は静か。',
      confidence: 'low', sources: [TB, R + 'B505813662/', R + 'B274178897/', R + 'B520794545/', R + 'B521030352/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small bistro; book and request dishes when reserving. ¥500 table charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Regulars request specific dishes (e.g. the cauliflower mousse) when booking.', source: R + 'B505813662/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-6-19 渡辺ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目6番19号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520794545/', R + 'B505813662/'],
    price_note: 'Course price from a January 2026 review.', last_checked: TODAY, items: [
      it('コース', 'koosu', 'Bistro course', '¥12,000', 'Courses', 'no', 'no', '2026.', 'course'),
      it('カリフラワーのムース', 'karifurawaa no muusu', 'Cauliflower mousse', '', 'Starters', 'ask', 'ask', '', 'cauli_mousse'),
      it('鹿肉のロースト', 'shika niku', 'Venison', '', 'Mains', 'ask', 'no', '', 'venison'),
      it('トリュフのリゾット', 'toryufu no rizotto', 'Truffle risotto', '', 'Mains', 'ask', 'ask', '', 'truffle_risotto'),
    ] }, {
    cuisine: '1998年からの銀座の隠れビストロ・カリフラワーのムース、鹿肉、トリュフのリゾット・コース12,000円',
    neighborhood: '銀座八丁目の出世街道の路地、渡辺ビル1F。新橋駅から徒歩4分ほど',
    gf_detail: '実際上グルテンフリーではありません。雲丹とキャビアのパスタ、トリュフのリゾット、牛の煮込みなどのビストロのコースで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。鹿肉、牛の煮込み、蟹味噌、雲丹のパスタ。カリフラワーのムースも材料は書かれていません。',
    notes: '[ビストロ・1998年からの出世街道] 銀座八丁目の出世街道の路地にある、温かな照明の小さなビストロで、1998年8月開店。カウンター4席と2名卓5卓。10年以上通う常連は、予約の際にいつも頼むという先付のカリフラワーのムースを目当てに戻ってきます。続いて臭みのない鹿肉、トリュフをたっぷりのせたリゾット、濃厚な蟹味噌、雲丹とキャビアのクリームの極細パスタ、牛の煮込み。2026年1月のコースは12,000円で、ドリンクも手頃。平日の夜は混みますが、土曜の夜は貸切のように静かなことも。ランチは火〜金の12時からの1時間だけ。テーブルチャージ500円。',
  });
}

// ================================================================ Le Bonze
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13144110/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '23:00']);
  put({
    id: 'tokyo_le_bonze_higashi_ginza', name: 'Le Bonze (ルボーズ)', category: 'OMNI',
    lat: 35.670764, lng: 139.767633,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: bistro dishes such as the crisp "Bird\'s Nest", couscous with squid ink and spring rolls; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: lamb, lobster, horse mackerel, squid and pig\'s trotters.',
    hours_raw: 'Mon–Sat 18:00–23:00 (L.O. 22:00); closed Sundays (Tabelog). Omakase needs a phone booking at least a day ahead. Cards and d Barai accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, Ginza AZA Bldg 3F — 2 min from Higashi-Ginza Stn A2',
    cuisine: 'Higashi-Ginza bistro since 2012 · roast lamb, signature "Bird\'s Nest", squid-ink couscous · summer gazpacho', cuisine_type: 'french',
    website: null, gmaps: gm('Le Bonze 銀座4-10-1 銀座AZAビル'), menu_url: null,
    notes: "[Bistro · roast lamb in Higashi-Ginza] A calm third-floor bistro in Higashi-Ginza, open since July 2012, which a 2026 diner calls restaurant-level cooking in a bistro. A four-visit regular comes for the roast lamb, crisp outside and juicy, and the signature crunchy 'Bird's Nest'. Other dishes include marinated horse mackerel with turnip, spear squid, couscous in squid ink, sweetfish spring rolls, shrimp and pig's-trotter confit, and in summer a gazpacho regulars return for every year. An August 2026 omakase ran to marinated ainame with sudachi, roast lobster, roast lamb and peach compote with mint granita. Book the omakase by phone at least a day ahead. Budget about ¥10,000–20,000.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 17 July 2012 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Roast lamb; Bird\'s Nest; gazpacho.',
      anecdotes: [
        { text: '"I visited to try the roasted lamb chop. I ordered the signature Bird\'s Nest… I really enjoyed the crispy texture of the Bird\'s Nest." — May 2026.', source: R + 'B417461332/' },
        { text: '"For the Omakase course, please contact us by phone at least a day in advance." — August 2026.', source: R + 'B534327088/' },
      ],
      japanese_sources_summary: '食べログ: Le Bonze、銀座4-10-1 銀座AZAビル3F、東銀座駅A2出口から徒歩2分、15席、月〜土18:00〜23:00、日休、2012年7月17日開店、カード・d払い可。2026年の口コミ: レストラン級のビストロ、仔羊のロースト、名物「Bird’s Nest」、鯵と蕪のマリネ、ヤリイカ、イカ墨のクスクス、鮎の春巻き、海老と豚足のコンフィ、夏のガスパチョ、8月のおまかせ(鮎並のすだちマリネ、オマール海老のロースト、仔羊、桃のコンポートとミントのグラニテ)、おまかせは前日までに電話予約、1〜2万円。',
      confidence: 'low', sources: [TB, R + 'B417461332/', R + 'B534327088/', R + 'B529841434/', R + 'B523982644/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet third-floor room; phone ahead for the omakase.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-10-1 銀座AZAビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目10番1号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B417461332/', R + 'B534327088/'],
    price_note: 'No prices captured; reviewers spend ¥10,000–20,000.', last_checked: TODAY, items: [
      it('仔羊のロースト', 'kohitsuji no roosuto', 'Roast lamb', '', 'Mains', 'ask', 'no', '', 'roast_lamb'),
      it('', '', '"Bird\'s Nest" (signature crisp dish)', '', 'Starters', 'no', 'ask', '', 'birds_nest'),
      it('イカ墨のクスクス', 'ikasumi no kusukusu', 'Couscous with squid ink', '', 'Starters', 'no', 'no', '', 'squid_couscous'),
      it('おまかせコース', 'omakase koosu', 'Omakase (book by phone a day ahead)', '', 'Courses', 'ask', 'no', '', 'omakase'),
    ] }, {
    cuisine: '2012年からの東銀座のビストロ・仔羊のロースト、名物「Bird’s Nest」、イカ墨のクスクス・夏のガスパチョ',
    neighborhood: '銀座四丁目、銀座AZAビル3F。東銀座駅A2出口から徒歩2分',
    gf_detail: '実際上グルテンフリーではありません。カリカリの名物「Bird’s Nest」、イカ墨のクスクス、春巻きなどのビストロ料理で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。仔羊、オマール海老、鯵、イカ、豚足。',
    notes: '[ビストロ・東銀座の仔羊のロースト] 東銀座のビル3階、2012年7月開店の落ち着いたビストロで、2026年の口コミでは「レストラン級の料理を出すビストロ」。4回通う常連のお目当ては、外はカリッと中はジューシーな仔羊のローストと、名物のカリカリの「Bird’s Nest」。鯵と蕪のマリネ、ヤリイカ、イカ墨のクスクス、鮎の春巻き、海老と豚足のコンフィ、毎年常連が楽しみにする夏のガスパチョも。2026年8月のおまかせは、すだち風味の鮎並のマリネ、オマール海老のロースト、仔羊のロースト、ミントのグラニテと桃のコンポート。おまかせは前日までに電話で予約を。予算は1〜2万円ほど。',
  });
}

// ================================================================ 加藤牛肉店 銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13076544/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '23:00']);
  put({
    id: 'tokyo_kato_gyuniku_ten_ginza', name: '加藤牛肉店 銀座 (Kato Gyuniku Ten Ginza)', category: 'OMNI',
    lat: 35.671259, lng: 139.76133,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A Yamagata-beef steakhouse; courses include homemade corned beef with bread, soup, steak and a hamburg, and truffle-oil potatoes; no source describes wheat use or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef steakhouse.',
    hours_raw: 'Mon–Sat and holidays 17:00–23:00 (food L.O. 22:00); closed Sundays (Tabelog). Corkage charged for outside drinks. Cards, IC and QR accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Tony Bldg 1F — 3 min from Ginza Stn C2',
    cuisine: 'Yamagata-beef steakhouse · fresh (not aged) beef · three-cut steak platter course', cuisine_type: 'other',
    website: null, gmaps: gm('加藤牛肉店 銀座 銀座6-4-15 トニービル'), menu_url: null,
    notes: "[Steak · fresh Yamagata beef] A 14-seat steakhouse on a Ginza 6-chōme ground floor serving Yamagata beef. Its Tabelog page makes a point of fresh beef that is not aged. The 'Yamagata Beef Steak Assorted Platter' course starts with homemade corned beef and bread, then appetizers of the beef in different forms and a seasonal soup, and ends with a platter of three cuts. A September 2026 diner also praised the hamburg steak and truffle-oil potatoes. Marbled wagyu comes with young corn and fresh vegetables. Bordeaux and other wines are served by the bottle, and outside drinks are allowed for a corkage fee. Expect ¥20,000–30,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 6-chōme; opening date not found in a source read', background: 'No source names the owner or chef.', philosophy: '"Fresh Beef That Is Not Aged." (Tabelog)', specialty: 'Yamagata beef steak platter.',
      anecdotes: [
        { text: '"From the very first bite of the homemade corned beef, I was captivated." — September 2026.', source: R + 'B535715386/' },
        { text: '"I brought my own, but please note that there is a fee for bringing in outside beverages." — September 2026.', source: R + 'B537198450/' },
      ],
      japanese_sources_summary: '食べログ: 加藤牛肉店 銀座、銀座6-4-15 トニービル1F、銀座駅C2出口から徒歩3分、14席、月〜土・祝17:00〜23:00、日休、カード・IC・QR可、熟成させない新鮮な牛肉。2026年の口コミ: 山形牛ステーキ盛り合わせコース(自家製コンビーフとパン、山形牛の前菜、季節のスープ、3種盛り)、ハンバーグ、トリュフオイルのポテト、霜降り和牛、ボルドーのボトル、持ち込み料あり、2〜3万円。',
      confidence: 'low', sources: [TB, R + 'B535715386/', R + 'B537198450/', R + 'B536573079/', R + 'B512556424/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small steakhouse; book ahead. Corkage available.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-15 トニービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番15号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535715386/', R + 'B537198450/'],
    price_note: 'No prices captured; reviewers spend ¥20,000–30,000.', last_checked: TODAY, items: [
      it('山形牛ステーキ盛り合わせコース', 'yamagata gyuu suteeki moriawase koosu', 'Yamagata-beef steak platter course', '', 'Courses', 'ask', 'no', '', 'steak_course'),
      it('ハンバーグ', 'hanbaagu', 'Hamburg steak', '', 'Mains', 'ask', 'no', '', 'hamburg'),
    ] }, {
    cuisine: '山形牛のステーキハウス・熟成させない新鮮な牛肉・3種盛りのステーキコース',
    neighborhood: '銀座六丁目、トニービル1F。銀座駅C2出口から徒歩3分',
    gf_detail: '要確認。山形牛のステーキハウスで、自家製コンビーフとパン、スープ、ステーキ、ハンバーグ、トリュフオイルのポテトのコース。小麦の使用やグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。牛肉のステーキハウスです。',
    notes: '[ステーキ・新鮮な山形牛] 銀座六丁目のビル1階、14席の山形牛のステーキハウスで、食べログでは「熟成させない新鮮な牛肉」を打ち出しています。「山形牛ステーキ盛り合わせコース」は自家製コンビーフとパンに始まり、さまざまな形の山形牛の前菜、季節のスープ、3種の部位の盛り合わせへ。2026年9月の口コミではハンバーグやトリュフオイルのポテトも好評。霜降りの和牛にはヤングコーンや新鮮な野菜を添えて。ボルドーなどのワインはボトルで、飲み物の持ち込みは有料で可。予算は2〜3万円ほど。',
  });
}

save();
