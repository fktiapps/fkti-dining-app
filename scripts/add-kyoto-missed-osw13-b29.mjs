// Kyoto "what did we miss" pass (kyoto-missed) — lane osw13 (Tabelog id mod 6 = 0), batch 29.
// Kyoto priority (Greg, 2026-11-05): 2 shops from `next core`, 2 from `next notable`, lane only.
//   core:    + はっすんば Hassunba (Pontocho alley Kyoto cooking and sake; set course for overseas guests)
//            + ビストロ プティラパン Bistro Petit Lapin (French regional bistro off Ayanokoji since 2009)
//   notable: + Cucina Italiana 東洞 Todo (northern-Italian "adult trattoria" in a 100-year-old townhouse)
//            + FORNI (HOTEL THE MITSUI KYOTO's Italian, kamado-style pizza oven; Italian WEST 100 2025)
//   None is in data/kyoto.json: grep by name (はっすんば/Hassunba, プティラパン/Petit Lapin, Todo — the 東洞 hits are
//   the street name 東洞院 — FORNI: the one hit is a word inside another record) and address (鍋屋町209-6,
//   大寿町396, 三本木五丁目496-3, 二条油小路町284) found none. Tabelog URLs copied from each listing.txt line 1.
//   Pins: GSI only (no OSM). No new pin within 3 m of another (check-stacked-pins run before hand-off).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-29');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ はっすんば
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001018/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:30']);
  put({
    id: 'kyoto_hassunba_pontocho', name: 'はっすんば (Hassunba)', category: 'OMNI',
    lat: 35.005231, lng: 135.770895, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice for overseas guests: the shop offers them only a fixed course that includes fish tempura and miso-grilled fish (Tabelog). The à la carte menu adds fried nama-fu (wheat gluten) and dishes in white miso (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the course for overseas guests is an appetiser platter, chicken and root-vegetable soup, fish tempura and miso-grilled fish (Tabelog), and the cooking is built on dashi (October 2026).',
    hours_raw: 'Tabelog: every day 17:30–22:30 (last order 22:00), closed irregularly. Bookings taken; a booking more than 15 minutes late without notice is cancelled (Tabelog). For overseas guests the shop offers only a course of four dishes chosen by the owner — appetiser platter, chicken and root-vegetable soup, an original fish tempura and miso-grilled fish, changing with the season — at ¥7,500 including tax; there is no English menu and the owner cannot explain the dishes in English (Tabelog). Table charge ¥1,000 with an appetiser (Tabelog). 18 seats: 6 at the counter, 12 at tables; non-smoking; children and folded strollers welcome (Tabelog). Cards (VISA, Master, AMEX, Diners), no e-money or QR (Tabelog). Down 21番路地 off Pontocho north of Shijo; 5 min walk from Keihan Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, an alley north of Shijo — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Kyoto cooking and sake in a Pontocho alley (Tabelog; 2026 reviews) · for overseas guests a fixed course of four dishes, ¥7,500 (Tabelog) · à la carte: hassun and obanzai assortments (three or five kinds), fluffy dashimaki, yuba sashimi, fried nama-fu salad, beef and Kujo leek simmered in white miso, chicken with Kujo leek, conger eel and lotus root in clear soup (2026 reviews) · a long sake list from classic to rare brands, and shochu (Tabelog; June 2026) · table charge ¥1,000 with an appetiser',
    website: TB, gmaps: gm('はっすんば 先斗町'), menu_url: TB,
    notes: "[Kyoto cooking · Pontocho, a hidden alley] A calm 18-seat counter-and-table restaurant at the end of an alley off Pontocho, which a June 2026 diner heard would mark its 25th year that autumn: obanzai and hassun assortments, fluffy dashimaki, fried nama-fu salad, beef and Kujo leek in white miso, and a deep sake list. Overseas guests are offered only a four-dish course (¥7,500), because the owner cannot explain dishes in English. One March 2026 diner found the food bland, greasy and over-seasoned; most others loved it. Daily 17:30–22:30.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who chooses the course for overseas guests'], origin: null,
      background: 'Tabelog’s notes for overseas customers say there is no English menu, the owner cannot explain the dishes in English, and foreign guests are offered only a ¥7,500 course of four dishes recommended by the owner. A June 2026 diner, on a fourth visit, heard the restaurant would celebrate its 25th anniversary that autumn.',
      philosophy: null,
      specialty: 'Obanzai and hassun; dashimaki; beef and Kujo leek in white miso.',
      anecdotes: [
        { text: '"The dashimaki tamago (Japanese rolled omelette) with a 3-minute shelf life was incredibly fluffy and delicious." — July 2026.', source: R + 'B531996667/' },
        { text: 'A March 2026 diner who walked in found the beef with burdock and lotus root "bland and mushy", the fried dishes greasy and the omelette over-seasoned; four dishes with a beer and a highball came to ¥8,500.', source: R + 'B524517175/' },
        { text: '"I hear they will celebrate their 25th anniversary this autumn!" — June 2026.', source: R + 'B530890235/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・居酒屋、中京区四条通先斗上ル鍋屋町209-6 21番路地 1F、毎日17:30〜22:30 (L.O. 22:00)、不定休、予約可、連絡なく15分以上遅れると自動キャンセル、チャージ料1,000円 (付き出しあり)、18席 (カウンター6、テーブル12)、禁煙、子連れ・ベビーカー可、カード可、電子マネー・QR 不可。海外のお客様へ: 英語メニューなし、外国のお客様はコースのみ、7,500円 (税込)、店主おすすめの4品 (前菜盛り合わせ、鶏と根菜の汁物、オリジナルの魚の天ぷら、魚の味噌焼き、季節で変更あり)、店主は英語で料理を説明できない。口コミ (2026年2月〜10月、英語): 八寸、おばんざい3種・5種、だし巻き、湯葉刺し、揚げ生麩のサラダ、牛と九条ネギの白味噌煮、鱧と蓮根のお吸い物、日本酒が豊富、25周年 (2026年秋)。',
      confidence: 'medium', sources: [TB, R + 'B522939978/', R + 'B524377346/', R + 'B524517175/', R + 'B525100762/', R + 'B525536159/', R + 'B530890235/', R + 'B531602722/', R + 'B531996667/', R + 'B532069643/', R + 'B538324410/'] },
    cultural_comfort: { level: 'japanese', note: 'No English menu and the owner cannot explain dishes in English; overseas guests are offered only a ¥7,500 four-dish course, booked ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区四条通先斗上ル鍋屋町209-6 21番路地 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005231, 135.770895); cross-checked: GSI 京都府京都市中京区鍋屋町209番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B524517175/'],
    price_note: 'Course price from Tabelog’s notes for overseas customers; no à la carte prices published.', last_checked: TODAY, items: [
      it('', '', 'Course for overseas guests (appetiser platter, chicken and root-vegetable soup, fish tempura, miso-grilled fish)', '¥7,500', 'Course', 'no', 'no', 'Changes with the season.', 'overseas_course'),
      it('', '', 'Table charge with appetiser', '¥1,000', 'Charge', '', '', '', 'table_charge'),
    ] }, {
    cuisine: '先斗町の路地の京料理と日本酒 (食べログ、2026年の口コミ)・海外からの客には4品のコース7,500円 (食べログ)・アラカルト: 八寸やおばんざいの盛り合わせ (3種・5種)、ふわふわのだし巻き、湯葉刺し、揚げ生麩のサラダ、牛と九条ネギの白味噌煮、鶏と九条ネギ、鱧と蓮根のお吸い物 (2026年の口コミ)・定番から希少な銘柄までの日本酒、焼酎 (食べログ、2026年6月)・チャージ1,000円 (付き出しあり)',
    neighborhood: '先斗町、四条の北の路地。祇園四条駅から徒歩5分',
    gf_detail: '海外からの客には実際にはグルテンフリーではない: 店が出すのは魚の天ぷらと魚の味噌焼きを含む決まったコースだけ (食べログ)。アラカルトにも揚げ生麩や白味噌の料理がある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 海外からの客向けのコースは前菜盛り合わせ、鶏と根菜の汁物、魚の天ぷら、魚の味噌焼き (食べログ)。料理はだしが基本 (2026年10月)。',
    notes: '[京料理・先斗町、隠れた路地] 先斗町の路地の奥にある、カウンターとテーブルの18席の落ち着いた店。2026年6月の客はこの秋で25周年と聞いた。おばんざいや八寸の盛り合わせ、ふわふわのだし巻き、揚げ生麩のサラダ、牛と九条ネギの白味噌煮、豊富な日本酒。店主が英語で料理を説明できないため、海外からの客には4品のコース (7,500円) のみ。2026年3月の客は味が薄い、油っぽい、味が濃いと書いたが、多くの客は絶賛している。毎日17時半〜22時半。',
  });
}

// ================================================================ ビストロ プティラパン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26014110/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://petitlapin-fr.com/'; const TOP = SITE + 'petitlapin/'; const DEJ = SITE + 'dejeuner/'; const DIN = SITE + 'diner/'; const INFO = SITE + 'information/';
  const H = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_bistro_petit_lapin', name: 'ビストロ プティラパン (Bistro Petit Lapin)', category: 'OMNI',
    lat: 35.003092, lng: 135.766036, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses come with house rye bread and the dinner menu includes crêpes, pâtés and tarte Tatin; dishes are chosen from a long list, so ask before ordering (official menu; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Salads (mushroom, Niçoise, carrot râpé) are on the menu, but the bistro cooking leans on charcuterie, pâtés, game and foie gras (official menu).',
    hours_raw: 'Official site: lunch 12:00–15:00 (last entry 13:30); café and dessert 14:30–17:30 (last order 16:30); dinner 18:00–23:00 (last entry 21:30); closed Wednesday plus one run of days off a month, posted on the site. Tabelog gives lunch 12:00–15:00 (food last order 13:30) and dinner 18:00–22:30 (food last order 21:30; courses 21:00), closed Wednesday. Bread and amuse-bouche ¥700 per person (Tabelog). Corkage ¥2,000 for one bottle per two guests; please do not use mobile phones in the room (Tabelog). From January 2026 children are welcome by booking by the day before, with a lunch course or a dinner main (official site); Tabelog still says no children. 15 seats: 5 at the counter, 10 at tables; non-smoking; private hire up to 20; English menu (Tabelog). Cards and e-money (Tabelog). On Gokomachi-dori north of Ayanokoji — one minute south on the street west of Fuji Daimaru; red fence and black sign; 5 min walk from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gokomachi-dori north of Ayanokoji — 5 min walk from Hankyu Kawaramachi Stn',
    cuisine: 'French regional home cooking and French wine in a small bistro (official site; Tabelog) · lunch menu A ¥3,000 (salad or soup, main of the day, house rye bread, dessert); menu B ¥4,000 (amuse, a starter from about ten such as horse-mackerel and potato mosaic, rillettes-style venison, ratatouille with poached egg, country pâté, plus a main and dessert) (official menu) · dinner Bistro menu ¥5,500 and some 70 à la carte dishes: escargots, mussels, Nagahama Anegawa ayu confit, Satsuma pork tongue, tête de cochon, boudin noir; mains such as Hino-town venison crépinette with foie gras, roast beef, lamb rump, French duck, lobster tail (official menu; 2026 reviews) · tarte Tatin, crème brûlée, crème caramel · vegetables, meat and fish from Miyama (Tabelog)',
    website: SITE, gmaps: gm('ビストロ プティラパン 京都'), menu_url: DIN,
    notes: "[French bistro · Gokomachi-Ayanokoji, a little rabbit] A 15-seat bistro behind a red fence south of Fuji Daimaru, open since July 2009, whose site likens its guests to a hungry little rabbit: French regional home cooking with French wines — lunch courses at ¥3,000 and ¥4,000, a ¥5,500 dinner menu and about 70 à la carte dishes from escargots and boudin noir to Hino venison crépinette with foie gras, and tarte Tatin. Reviewers in 2026 praise the owner-chef's warm service. Closed Wednesday; café hours 14:30–17:30.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), per 2026 reviews'], origin: null,
      background: 'The official site describes a shop where people who love to eat gather, always smiling like a rabbit that never stops munching, and serves house "a little rye" bread. Tabelog gives the opening day as 5 July 2009 and describes traditional French cooking in bistro style, with vegetables, meat and fish from Miyama. The official information page names the current venison supplier, ジビエ堂 in Hino, Shiga, and sells party hors d’oeuvres and rice from Keihoku farmers. A May 2026 diner found the owner-chef attentive and was photographed by the owner on leaving; another the same month found the owner kind.',
      philosophy: 'Per the official site: a shop where food-lovers gather, never without a smile, like a hungry little rabbit.',
      specialty: 'Venison crépinette with foie gras; tarte Tatin; regional French dishes.',
      anecdotes: [
        { text: '"At first glance, it looks like a hamburger, but it’s something entirely different!" — of the venison crépinette with foie gras, May 2026.', source: R + 'B529112798/' },
        { text: '"There were cute chairs made from cork stoppers lined up." — May 2026.', source: R + 'B530702939/' },
        { text: '"You absolutely must try the Tarte Tatin!" — September 2026.', source: R + 'B536269136/' },
      ],
      japanese_sources_summary: '公式サイト (petitlapin-fr.com): フランス地方家庭料理とフランスワイン、いつももぐもぐ口を動かす食いしん坊のウサギのように笑顔が絶えない食いしん坊が集まるお店、自家製ちょっとライ麦パン、ランチ12時〜15時 (最終入店13時30分)、Cafe Dessert 14時30分〜17時30分 (ラストオーダー16時30分)、ディナー18時〜23時 (最終入店21時30分)、2026年1月よりお子様同伴可 (ランチはコース、ディナーはドゥプラ、前日までの予約のみ)、定休日は水曜日、月1連休、下京区御幸町通り綾小路上る大寿町396。Dejeuner menu A 3,000円、menu B 4,000円 (アントレ2皿で+1,200)、Bistro menu 5,500円 (18:00〜21:00 ラストオーダー)、アラカルト: エスカルゴ、ムール貝、長浜姉川アユのコンフィ、薩摩茶美豚舌ソテー、テートドコション、ブーダンノワール、メイン: フォアグラ入り鹿肉のクレピネット包み、ローストビーフ、仔羊ランプ肉、フランス産鴨肉のロティ、オマール海老。鹿肉は滋賀県日野町のジビエ堂。食べログ: ビストロ・フレンチ・ワインバー、ランチ12:00〜15:00、ディナー18:00〜22:30、水曜定休、パン・アミューズ代700円、持ち込み料2,000円、店内での携帯電話はご遠慮、子供不可、15席 (カウンター5、テーブル10)、禁煙、英語メニュー、2009年7月5日オープン、美山町の野菜・肉・魚、約70品のアラカルト。口コミ (2023年12月〜2026年9月、英語): 鹿のクレピネット、タルトタタン、クレームブリュレ、オーナーシェフの温かいサービス。',
      confidence: 'medium', sources: [TB, SITE, TOP, DEJ, DIN, INFO, R + 'B37736676/', R + 'B476832184/', R + 'B500795252/', R + 'B529112798/', R + 'B530702939/', R + 'B536269136/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); set lunch courses with a choice of starter and main; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区御幸町通綾小路上ル大寿町396',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October closing days posted) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003092, 135.766036); cross-checked: GSI 京都府京都市下京区大寿町396番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [DEJ, DIN],
    price_note: 'Official site menus (undated, current in November 2026).', last_checked: TODAY, items: [
      it('menu A', '', 'Lunch menu A (salad or soup, main of the day, bread, dessert)', '¥3,000', 'Lunch', 'ask', 'ask', '', 'dejeuner_a'),
      it('Dejeuner menu B', '', 'Lunch menu B (amuse, starter, main, dessert)', '¥4,000', 'Lunch', 'ask', 'no', 'Two starters +¥1,200.', 'dejeuner_b'),
      it('Bistro menu', '', 'Dinner bistro menu (starter, soup, main)', '¥5,500', 'Dinner', 'ask', 'no', 'Last order 21:00.', 'bistro_menu'),
      it('フォアグラ入り鹿肉のクレピネット包み', '', 'Venison crépinette with foie gras', '', 'Mains', 'ask', 'no', '', 'venison_crepinette'),
    ] }, {
    cuisine: '小さなビストロのフランス地方家庭料理とフランスワイン (公式サイト、食べログ)・ランチ menu A 3,000円 (サラダかスープ、本日の主菜、自家製ちょっとライ麦パン、デザート)、menu B 4,000円 (アミューズ、小あじとポムドテールのモザイク、鹿肉のリエット風、ラタトゥイユとポーチドエッグ、田舎風パテなど約10種から前菜1皿、主菜、デザート) (公式メニュー)・ディナーは Bistro menu 5,500円と約70品のアラカルト: エスカルゴ、ムール貝、長浜姉川アユのコンフィ、薩摩茶美豚舌ソテー、テートドコション、ブーダンノワール、メインは日野町の鹿肉のフォアグラ入りクレピネット包み、ローストビーフ、仔羊ランプ、フランス産鴨、オマール海老 (公式メニュー、2026年の口コミ)・タルトタタン、クレームブリュレ、クレームキャラメル・美山町の野菜、肉、魚 (食べログ)',
    neighborhood: '綾小路の北の御幸町通。阪急京都河原町駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報はない。コースには自家製のライ麦パンが付き、ディナーにはクレープ、パテ、タルトタタンもある。品数が多いので注文前に確認を (公式メニュー、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ヴィーガンの情報はない。サラダ (マッシュルーム、ニース風、キャロットラペ) はあるが、料理はシャルキュトリ、パテ、ジビエ、フォアグラが中心 (公式メニュー)。',
    notes: '[フレンチ・御幸町綾小路、小さなウサギ] フジ大丸の南、赤い柵の奥の15席のビストロ。2009年7月から。サイトは客を食いしん坊のウサギにたとえる。フランス地方家庭料理とフランスワイン。ランチは3,000円と4,000円のコース、ディナーは5,500円のコースと約70品のアラカルト。エスカルゴやブーダンノワールから、日野の鹿のフォアグラ入りクレピネット、タルトタタンまで。2026年の口コミはオーナーシェフの温かなもてなしをほめる。水曜休み、14時半〜17時半はカフェも。',
  });
}

// ================================================================ Cucina Italiana 東洞
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007432/'; const R = TB + 'dtlrvwlst/';
  const MEC = 'https://www.mec-h.com/town/mh-kyoto/142';
  const H = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_cucina_italiana_todo', name: 'Cucina Italiana 東洞 (Cucina Italiana Todo)', category: 'OMNI',
    lat: 35.015142, lng: 135.760928, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; the lunch courses are built around pasta (three kinds in one course, dried and handmade) with house ciabatta and focaccia and a cream croquette amuse (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. No vegan information; courses use fish, pork, beef, chicken-liver mousse and cheese, with plenty of Kyoto vegetables in the antipasto (2026 reviews).',
    hours_raw: 'Tabelog: lunch 12:00–15:00 (food last order 14:00, drinks 14:30), dinner 17:30–22:00 (food last order 21:00, drinks 21:30); closed Thursday and the second and third Wednesdays. Bookings taken; a diner booked the same day in September 2026. Dinner service charge 10% from 3 March 2024 (Tabelog). 18 seats: counter on the ground floor facing a small garden, tables upstairs, private rooms for 4 and 6, private hire up to 20; non-smoking (Tabelog; September 2026). Cards, no e-money or QR (Tabelog). 4 min walk from Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin south of Takeyamachi, south of the Imperial Palace — 4 min walk from Marutamachi Stn',
    cuisine: 'Northern-Italian regional cooking in a renovated 100-year-old townhouse — an "adult trattoria" (Tabelog; Mitsubishi Estate town guide) · lunch three-pasta course ¥3,700 (amuse, Kyoto-vegetable antipasto, three pastas, dessert; September 2026); a full lunch course with fish and meat · dinner prix fixe: choose antipasto, pasta, main and dessert, with half portions to try two of each (October 2026) · 2026 dishes: spaghettini with mackerel and apple, basil trofie with white fish, tagliolini with lobster sauce, braised beef cheek, braised pork shank with apple, Awa black-wagyu sirloin tagliata (supplement), jasmine gelato, apple polenta cake · Italian wines',
    website: TB, gmaps: gm('Cucina Italiana 東洞 京都'), menu_url: TB,
    notes: "[Italian · south of the Imperial Palace, three pastas] A northern-Italian \"adult trattoria\" in a renovated 100-year-old townhouse on Higashinotoin, with a counter facing a small garden and quiet rooms upstairs. Lunch is a set course — the ¥3,700 three-pasta course is the draw, dried and handmade side by side; dinner is a prix fixe where half portions let two people try more. Italian WEST Tabelog 100 2021, 2023, 2025. One October 2026 diner found it salty and the welcome cool. Closed Thursday and the 2nd and 3rd Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed on the sources read)'], origin: null,
      background: 'Tabelog’s introduction: a relaxed "adult trattoria" in a traditional townhouse over 100 years old, blending Japanese and Western styles; the ground-floor counter lets guests watch the cooks, the upstairs tables are calm, and the food is Northern Italian regional cooking with fresh ingredients and simple methods, paired with Italian wines. The Mitsubishi Estate town guide adds that the chef reached this style after years of training. A September 2026 diner believed it belongs to the same group as Misato and Gyoza no Ryosho. Tabelog Italian WEST "Tabelog 100" 2021, 2023 and 2025.',
      philosophy: 'Per the Mitsubishi Estate town guide: an unpretentious "slightly grown-up trattoria" for relaxing over the season’s flavours.',
      specialty: 'Three-pasta lunch course; prix fixe dinner.',
      anecdotes: [
        { text: '"They kindly divided everything in half for us, allowing us to enjoy two varieties of both pasta and the main course." — October 2026.', source: R + 'B538392065/' },
        { text: 'On a birthday lunch, "HAPPY Birthday" and flowers were drawn in chocolate on the dessert plate and a young staff member took a photo — September 2026.', source: R + 'B536482969/' },
        { text: 'An October 2026 diner found the seasoning a little salty and "didn’t feel much hospitality overall".', source: R + 'B536675025/' },
      ],
      japanese_sources_summary: '三菱地所の住まいリレー (町のガイド): Cucina Italiana 東洞 (クッチーナ イタリアーナ トウドウ)、京都御所南の閑静な街並みの一軒家レストラン、長年かけて修業しイタリアンとは何かを見つめてきたシェフ、「ちょっぴり大人なトラットリア」、11:30〜15:00・17:30〜23:00、木曜日・第2・3水曜日休み、中京区東洞院通竹屋町下ル三本木町5-496-3。食べログ: イタリアン・パスタ、ランチ12:00〜15:00 (L.O. 料理14:00・ドリンク14:30)、ディナー17:30〜22:00 (L.O. 料理21:00・ドリンク21:30)、木曜定休、第2・3水曜休み、2024年3月3日からディナーはサービス料10%、18席、個室 (4名・6名)、貸切20名まで、禁煙、カード可、築100年以上の町家、北イタリアの郷土料理、イタリアン WEST 百名店 2021・2023・2025。口コミ (2026年8月〜10月、英語): パスタ3種のコース3,700円、ランチのフルコース、プリフィックスのディナー (ハーフ可)、鯖とりんごのスパゲッティーニ、トロフィエ、阿波牛のタリアータ、ジャスミンのジェラート。',
      confidence: 'medium', sources: [TB, MEC, R + 'B535312815/', R + 'B535478250/', R + 'B536099858/', R + 'B536147297/', R + 'B536482969/', R + 'B536486951/', R + 'B536675025/', R + 'B536814416/', R + 'B536984910/', R + 'B538392065/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses at lunch and a prix fixe at dinner; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通竹屋町下ル三本木五丁目496-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Italian WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.015142, 135.760928); cross-checked: GSI 京都府京都市中京区三本木町五丁目496番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535312815/', R + 'B536814416/'],
    price_note: 'No published menu; course price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Three-pasta lunch course (amuse, antipasto, three pastas, dessert)', '¥3,700', 'Lunch', 'no', 'ask', 'September 2026.', 'three_pasta_course'),
      it('', '', 'Prix fixe dinner (antipasto, pasta, main, dessert; half portions possible)', '', 'Dinner', 'ask', 'ask', 'October 2026; some mains carry a supplement.', 'prix_fixe'),
    ] }, {
    cuisine: '築100年の町家を改装した北イタリアの郷土料理の「ちょっぴり大人なトラットリア」(食べログ、三菱地所の町のガイド)・ランチのパスタ3種のコース3,700円 (アミューズ、京野菜の前菜、パスタ3種、デザート、2026年9月)、魚と肉のランチのフルコース・ディナーはプリフィックス: 前菜、パスタ、メイン、デザートを選び、ハーフで2種ずつも (2026年10月)・2026年の料理: 鯖とりんごのスパゲッティーニ、白身魚とバジルのトロフィエ、オマール海老のソースのタリオリーニ、牛ほほ肉の煮込み、豚すね肉とりんごの煮込み、阿波牛サーロインのタリアータ (追加料金)、ジャスミンのジェラート、りんごのポレンタケーキ・イタリアワイン',
    neighborhood: '御所の南、竹屋町の南の東洞院通。丸太町駅から徒歩4分',
    gf_detail: '予約時に要確認。グルテンの情報はない。ランチのコースはパスタが中心 (乾麺と手打ちの3種) で、自家製のチャバッタとフォカッチャ、クリームコロッケのアミューズも出る (2026年の口コミ)。',
    vegan_detail: '予約時に要確認。ヴィーガンの情報はない。魚、豚、牛、鶏レバーのムース、チーズを使い、前菜には京野菜がたっぷり (2026年の口コミ)。',
    notes: '[イタリアン・御所南、パスタ3種] 東洞院通の築100年の町家を改装した、北イタリアの料理の「ちょっぴり大人なトラットリア」。1階は小さな庭を望むカウンター、2階は静かなテーブル席。ランチはコースで、乾麺と手打ちを食べ比べる3,700円のパスタ3種のコースが人気。ディナーはプリフィックスで、ハーフにすれば2人で多くの皿を試せる。イタリアン WEST 百名店 2021・2023・2025。2026年10月の客は塩気が強く、もてなしが物足りないと書いている。木曜と第2・3水曜休み。',
  });
}

// ================================================================ FORNI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26034900/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.hotelthemitsui.com/en/kyoto/restaurants-bar/forni/';
  const BR = ['07:00', '10:00']; const H = day(BR, ['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'kyoto_forni_hotel_the_mitsui', name: 'FORNI (フォルニ)', category: 'OMNI',
    lat: 35.013442, lng: 135.752603, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the hotel asks diners with allergies to tell it beforehand (official site). No gluten information; courses include pasta (Awaji-made casarecce and cavatelli), focaccia, a croissant with cheese and tiramisu, and the oven turns out Roman-style pizza (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. No vegan menu is listed; consultant chef Fumio Yonezawa is the author of a vegan cookbook and works on vegan cuisine (official site), but 2026 courses used beef, chicken, veal, fish, burrata and cheese.',
    hours_raw: 'Official site: breakfast 7:00–10:00, lunch 11:30–14:30, dinner 17:30–21:30 (last orders); Tabelog: open all year. Prix fixe courses: lunch Moderare ¥5,900, Contento ¥8,900, Divertito ¥12,900; dinner Moderare ¥12,000, Contento ¥15,000, Divertito ¥19,000; prices include the 15% service charge and tax (official site). Christmas courses 24–25 December 2026: lunch ¥13,000, dinner ¥22,000 (official site). Booking online (TableCheck) or by phone (+81 75 468 3166); cancellation 50% two days before, 70% the day before, 100% on the day (Tabelog). 105 seats: 99 at tables including 18 on the terrace, a private room for 6 (lunch from ¥12,700, dinner from ¥19,000); non-smoking, with a smoking area in the hotel; children welcome with a kids’ menu; dress casual; parking for 23 cars, two hours free with ¥8,000 spent (official site; Tabelog). Breakfast is a semi-buffet with a Japanese or American main (September 2026, a hotel guest). On the ground floor of HOTEL THE MITSUI KYOTO; 3 min walk from Nijojo-mae Stn exit 2 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'HOTEL THE MITSUI KYOTO, south of Nijo Castle — 3 min walk from Nijojo-mae Stn',
    cuisine: 'Hotel Italian of handmade dishes from Italian and Kyoto ingredients, following the 24 solar terms, with a garden view from every seat and an okudosan (kamado-style range) reworked as a pizza and roasting oven (official site) · lunch courses ¥5,900–12,900, dinner ¥12,000–19,000, service and tax included (official site) · September 2026 lunch: croissant with cheese, edamame potage with yuzu, burrata and tomato with Genovese, Awaji casarecce with salt-and-spice beef ragù, grilled chicken breast with Tasmanian mustard and cold caponata, round tiramisu; wine pairing of four glasses ¥4,000 · October 2026 Divertito dinner (¥19,000): veal tonnato, crab and sansho Genovese tagliatelle, abalone risotto with liver butter, charcoal-grilled beef fillet, Tanba chestnut Mont Blanc; Quattro Formaggi Roman pizza ¥4,800 · aosa-seaweed focaccia · afternoon tea (2024–2026 reviews)',
    website: SITE, gmaps: gm('FORNI HOTEL THE MITSUI KYOTO'), menu_url: SITE,
    notes: "[Hotel Italian · Nijo Castle, a garden and a kamado oven] The Italian restaurant of HOTEL THE MITSUI KYOTO, opened November 2020: prix fixe courses of Italian and Kyoto ingredients following the 24 solar terms, Roman-style pizza from a kamado-style oven, and a garden in view from every seat, with consultant chef Fumio Yonezawa since 2022. Lunch from ¥5,900, dinner from ¥12,000, service and tax included. Italian WEST Tabelog 100 2025. Polished five-star service; breakfast 7:00–10:00, lunch and dinner daily.",
    chef_bio: { chef_name: 'Fumio Yonezawa', roles: ['Consultant chef (from July 2022), per the official site'], origin: 'Tokyo (born 1980)',
      background: 'Per the official site: born in Tokyo in 1980, Fumio Yonezawa trained at Trattoria Il Boccalone in Ebisu, moved to New York at 22 and became the first Japanese sous chef at the three-Michelin-star Jean-Georges; back in Japan, after serving as executive chef at a Tokyo restaurant, the chef became chef de cuisine at Jean-Georges Tokyo on its opening in 2014; won the US Embassy’s Taste of America competition in 2013 and, in 2015, was the first Japanese chef to receive the Golden Egg at RED U-35; opened the sustainable grill restaurant The Burn in Minami Aoyama in 2018; wrote Vegan Recipes (Shibata Shoten); runs the company NO CODE; and was appointed consultant chef at FORNI in July 2022. Tabelog gives the restaurant’s opening day as 3 November 2020. Tabelog Italian WEST "Tabelog 100" 2025.',
      philosophy: 'Per the official site: respect for the tradition of handmade dishes, with the 24 solar terms expressed through Italian and Kyoto ingredients.',
      specialty: 'Roman-style pizza from the okudosan oven; prix fixe courses.',
      anecdotes: [
        { text: 'When everyone greeted guests with "Hello!" instead of "Irasshaimase", a September 2026 diner thought it a lovely touch.', source: R + 'B535096481/' },
        { text: '"Although I arrived 30 minutes late, they welcomed me without any sign of annoyance" — and wrote a message on a friend’s plate on request, August 2026.', source: R + 'B534747079/' },
        { text: 'A diner who has come back each autumn for the chestnut afternoon tea found the chestnut flavour weaker than a few years before but the Mont Blanc exceptional — October 2026.', source: R + 'B493198025/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・ピザ・パスタ、中京区油小路通二条下る二条油小路町284 1F、毎日 11:30〜14:30・17:30〜21:30、年中無休、予約可、キャンセル料 (2日前50%、前日70%、当日100%)、サービス料15% (表示料金は税・サービス料込み)、105席 (テラス18席を含むテーブル99席、個室1室6名、個室料 昼12,700円・夜19,000円)、禁煙 (ホテル内に喫煙所)、駐車場23台 (8,000円以上で2時間無料)、子供可・キッズメニュー、ドレスコードはカジュアル、2020年11月3日オープン、イタリアン WEST 百名店 2025。口コミ (2024年10月〜2026年10月、英語): ランチのコース約6,000円と4杯のペアリング4,000円、淡路の製麺所のカサレッチェと牛肉のラグー、丸いティラミス、Divertito 19,000円、クアトロフォルマッジのピザ4,800円、丹波栗のモンブラン、アフタヌーンティー、朝食のセミビュッフェ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B493198025/', R + 'B527922432/', R + 'B534747079/', R + 'B534883782/', R + 'B535096481/', R + 'B535632485/', R + 'B536066065/', R + 'B536174696/', R + 'B538013399/', R + 'B538328334/'] },
    cultural_comfort: { level: 'english', note: 'A five-star hotel restaurant with an English website and online booking (TableCheck); many international guests (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区油小路通二条下る二条油小路町284 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official hotel site (Christmas 2026 courses posted) and Tabelog listing; reviews dated through October 2026; Italian WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.013442, 135.752603); cross-checked: GSI 京都府京都市中京区二条油小路町284番地 (lot) 87m — the hotel’s large lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B538328334/'],
    price_note: 'Official site (current in November 2026); prices include the 15% service charge and tax. Pizza price from an October 2026 review.', last_checked: TODAY, items: [
      it('Moderare', '', 'Lunch course Moderare', '¥5,900', 'Lunch', 'ask', 'ask', '', 'lunch_moderare'),
      it('Contento', '', 'Lunch course Contento', '¥8,900', 'Lunch', 'ask', 'ask', '', 'lunch_contento'),
      it('Divertito', '', 'Lunch course Divertito', '¥12,900', 'Lunch', 'ask', 'ask', '', 'lunch_divertito'),
      it('Moderare', '', 'Dinner course Moderare', '¥12,000', 'Dinner', 'ask', 'ask', '', 'dinner_moderare'),
      it('Contento', '', 'Dinner course Contento', '¥15,000', 'Dinner', 'ask', 'ask', '', 'dinner_contento'),
      it('Divertito', '', 'Dinner course Divertito', '¥19,000', 'Dinner', 'ask', 'ask', '', 'dinner_divertito'),
      it('', '', 'Quattro Formaggi pizza (Roman style)', '¥4,800', 'Pizza', 'no', 'no', 'October 2026.', 'quattro_formaggi'),
    ] }, {
    cuisine: 'イタリアと京都の食材で二十四節気を表す手づくりの料理のホテルのイタリアン。どの席からも庭が見え、おくどさんをピザとロースト用の窯に仕立て直している (公式サイト)・ランチのコース5,900〜12,900円、ディナー12,000〜19,000円、サービス料・税込み (公式サイト)・2026年9月のランチ: チーズのクロワッサン、柚子の枝豆のポタージュ、ブッラータとトマトのジェノベーゼ、淡路の製麺所のカサレッチェと塩とスパイスの牛肉のラグー、鶏むね肉のグリルとタスマニアのマスタードと冷たいカポナータ、丸いティラミス、4杯のワインペアリング4,000円・2026年10月のディナー Divertito (19,000円): 仔牛のトンナート、蟹と山椒のジェノベーゼのタリアテッレ、鮑のリゾット、炭火焼きの牛フィレ、丹波栗のモンブラン、ローマ風のクアトロフォルマッジのピザ4,800円・あおさのフォカッチャ・アフタヌーンティー (2024〜2026年の口コミ)',
    neighborhood: 'HOTEL THE MITSUI KYOTO、二条城の南。二条城前駅から徒歩3分',
    gf_detail: '予約時に要確認: アレルギーのある客は事前に伝えるようホテルが求めている (公式サイト)。グルテンの情報はない。コースにはパスタ (淡路のカサレッチェ、カヴァテッリ)、フォカッチャ、チーズのクロワッサン、ティラミスがあり、窯でローマ風のピザも焼く (2026年の口コミ)。',
    vegan_detail: '予約時に要確認。ヴィーガンのメニューはない。コンサルタントシェフの Fumio Yonezawa はヴィーガンの料理本の著者でヴィーガン料理にも取り組む (公式サイト) が、2026年のコースは牛、鶏、仔牛、魚、ブッラータ、チーズを使っていた。',
    notes: '[ホテルのイタリアン・二条城、庭とおくどさんの窯] 2020年11月開業の HOTEL THE MITSUI KYOTO のイタリアン。イタリアと京都の食材で二十四節気を表すプリフィックスのコース、おくどさんを仕立て直した窯のローマ風ピザ、どの席からも見える庭。2022年からコンサルタントシェフは Fumio Yonezawa。ランチは5,900円から、ディナーは12,000円から (サービス料・税込み)。イタリアン WEST 百名店 2025。五つ星ホテルらしい洗練されたサービス。朝食7時〜10時、昼と夜は毎日。',
  });
}

save();
