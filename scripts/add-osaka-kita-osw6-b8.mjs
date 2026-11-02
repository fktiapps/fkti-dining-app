// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 8.
//   + 一国一城 Ikkoku Ichijo (creative teppanyaki and okonomiyaki by Ohatsu Tenjin, since 2012)
//   + tanpopo 北新地本店 (teppanyaki, okonomiyaki and Italian wine, Kitashinchi, since 2017; Tabelog Teppanyaki WEST 100 2024–2025)
//   + ガルゴッタ Gargotta (Italian bar with fresh-pasta lunches, Osaka Station Building No. 3 B2F)
//   + 高乃屋 Takano Ya (robatayaki izakaya, Kitashinchi, since 2013)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-01, after b7): the first four odd ids, 27068861, 27101683,
//   27049163, 27073023.
//   Chain check: Ikkoku Ichijo calls itself one of the few independent shops at Ohatsu Tenjin (Tabelog). tanpopo's official site
//   lists one shop ("北新地本店"). Gargotta and Takano Ya: no other shop found. None is in data/osaka.json (grep by id, name and
//   address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 一国一城
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27068861/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'http://www.ikkokuichijyou.com/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'osaka_ikkoku_ichijo_ohatsutenjin', name: '一国一城 (Ikkoku Ichijo)', category: 'OMNI',
    lat: 34.700916, lng: 135.501384, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, yakisoba and tonpei-yaki are wheat-based or sauced, and everything is cooked on a shared teppan; the sauces and mayonnaise are made in house (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki and teppan dishes of pork, beef tendon, offal, seafood and egg.',
    hours_raw: 'Mon–Sat, holidays and the days around them 17:00–22:30, last order 22:00; closed Sunday, though it may open on a Sunday before a Monday holiday; closes early when the day\'s preparation runs out (Tabelog). Two-hour limit for every table; a booking lapses 10–15 minutes after the reserved time without contact; parties of two usually sit at the counter (Tabelog). Smoking allowed throughout, and no one under 20 is admitted (Tabelog). Tabelog\'s translated note mentions a service charge, while its Japanese original reads なし (none). Cards (VISA, Master, JCB, AMEX), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay, PayPay, Rakuten Pay, au PAY (Tabelog). 20 seats: 8 at the counter, 12 at tables; private hire up to 20; takeout (Tabelog). Opened 26 October 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'アポロビル B1F, next to the Ohatsu Tenjin shopping street — 2 min from Higashi-Umeda Stn exit 4',
    cuisine: 'Creative teppanyaki and okonomiyaki: Japanese-Western dishes by a former Italian-cuisine chef (official site); homemade sauces and mayonnaise; featured in the magazine Amakara Techou (Tabelog) · the house tonpei-yaki with braised pork belly (Tabelog; August 2026) · Ikkoku Ichijo-yaki, okonomiyaki with beef tendon, a heap of green onion and a fried egg; buta-tama; mentaiko yakisoba with dashi soy and a fried egg; salt or garlic yakisoba (2026 reviews) · teppan dishes: beef horumon 200 g, black tiger shrimp in anchovy butter, cheese-baked lotus root, squid with green onion and mayonnaise, yam with anchovy, gizzards, beef tendon stew, dashimaki, edamame with soy butter (August–October 2026) · courses: the "Osaka Kote Kote" course and a ¥5,000 all-you-can-drink course (August 2026) · beer, shochu highballs and cocktails; no sake or wine (September 2026)',
    website: OFF, gmaps: gm('一国一城 お初天神'), menu_url: null,
    notes: "[Okonomiyaki · Umeda, a basement teppan bar by Ohatsu Tenjin] A twenty-seat teppan bar in a basement beside the Ohatsu Tenjin shopping street, open since 2012 and, by its own account, one of the few independent shops there (Tabelog). The cooking mixes Osaka teppan with Western ideas: the shop site credits a former Italian-cuisine chef, while Tabelog's English text calls the owner \"originally from Italy\". Order the signature okonomiyaki loaded with beef tendon and green onion under a fried egg, the tonpei-yaki full of braised pork belly, or the mentaiko yakisoba that one October diner ordered twice; several diners found the okonomiyaki lighter than most. A ¥5,000 all-you-can-drink course is popular with groups, and an August 2026 diner noted it runs with two people. Expect ¥3,000–6,000. Smoking throughout and no under-20s; two-hour limit.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), formerly an Italian-cuisine chef (official site: "元イタリアンのシェフ")', 'Owner (unnamed; "originally from Italy" in Tabelog\'s English shop text)'], origin: null, background: 'Official site (read 2026-11-01): a creative teppanyaki and okonomiyaki shop at Ohatsu Tenjin, 曽根崎; "元イタリアンのシェフが作る和洋のコラボ料理" (Japanese-Western dishes by a former Italian-cuisine chef). Tabelog (shop-maintained, English): celebrating its 14th year; "The owner, originally from Italy, brings a unique twist to traditional Osaka-style teppanyaki"; featured in Amakara Techou; one of the few independent shops at Ohatsu Tenjin. An August 2026 diner: "primarily run by just two people". Opened 26 October 2012.', philosophy: 'Osaka teppan with a Western twist (official site; Tabelog).', specialty: 'Ikkoku Ichijo-yaki; tonpei-yaki; mentaiko yakisoba.',
      anecdotes: [
        { text: '"The service was well-paced, even though it\'s primarily run by just two people." — August 2026, a fully booked night.', source: R + 'B533630130/' },
        { text: '"The standout was definitely the Mentaiko Yakisoba—it was so good that I ended up ordering it twice!" — October 2026.', source: R + 'B537506645/' },
        { text: '"While the teppan dishes are quite satisfying for pairing with drinks, unfortunately, they don\'t offer Japanese sake or wine." — September 2026.', source: R + 'B535578480/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, OFF, R + 'B533415955/', R + 'B533518929/', R + 'B533630130/', R + 'B534624280/', R + 'B534868434/', R + 'B535137400/', R + 'B535578480/', R + 'B535671311/', R + 'B537506645/', R + 'B538336537/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tables; the shop says it is popular with tourists and business travellers (Tabelog). No English menu listed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎2-14-4 アポロビル B１F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目14番4号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535137400/'],
    price_note: 'The course from an August 2026 review; à la carte prices not given in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥5,000', 'Course', 'no', 'no', 'August 2026 review.', 'course_ayce'),
      it('', '', 'Ikkoku Ichijo-yaki (okonomiyaki with beef tendon, green onion, fried egg)', '', 'Okonomiyaki', 'no', 'no', 'August and October 2026 reviews.', 'ikkoku_ichijo_yaki'),
      it('', '', 'Tonpei-yaki with braised pork belly', '', 'Teppan', 'no', 'no', 'Tabelog; August 2026 review.', 'tonpei_yaki'),
      it('', '', 'Mentaiko yakisoba with dashi soy and a fried egg', '', 'Yakisoba', 'no', 'no', 'August and October 2026 reviews.', 'mentaiko_yakisoba'),
    ] }, {
    cuisine: '創作鉄板焼きとお好み焼き: 元イタリアンのシェフの和洋のコラボ料理 (公式サイト)、自家製のソースとマヨネーズ、雑誌 Amakara Techou に掲載 (食べログ)・豚バラの煮込みが入った名物のとん平焼き (食べログ、2026年8月)・牛すじとたっぷりのねぎ、目玉焼きをのせた一国一城焼き、豚玉、だし醤油と目玉焼きの明太子焼きそば、塩やガーリックの焼きそば (2026年の口コミ)・鉄板焼き: 牛ホルモン200g、ブラックタイガーのアンチョビバター、れんこんのチーズ焼き、イカのねぎマヨ、長芋のアンチョビ、sunazuri、牛すじ煮込み、だし巻き、枝豆の醤油バター (2026年8〜10月)・コース: Osaka Kote Kote のコースと、飲み放題つき5,000円のコース (2026年8月)・ビール、焼酎のハイボール、カクテル。日本酒とワインはない (2026年9月)',
    neighborhood: '曽根崎、お初天神の商店街の横のアポロビル 地下1階。東梅田駅4番出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。お好み焼き、焼きそば、とん平焼きは小麦を使うかソース味で、すべて同じ鉄板で焼く。ソースとマヨネーズは自家製 (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。豚肉、牛すじ、ホルモン、魚介、卵のお好み焼きと鉄板焼き。',
    notes: '[お好み焼き・梅田、お初天神の横の地下の鉄板焼き] お初天神の商店街の横の地下にある20席の鉄板焼きの店で、2012年から。お初天神では数少ない個人の店だという (食べログ)。大阪の鉄板焼きに洋のアイデアを合わせ、公式サイトでは元イタリアンのシェフ、食べログの英語の紹介ではオーナーが「originally from Italy」とある。名物は牛すじとねぎをたっぷりのせて目玉焼きをかぶせたお好み焼き、豚バラの煮込みたっぷりのとん平焼き、10月の口コミで2回頼んだという明太子焼きそば。お好み焼きがほかより軽いという声がいくつも。飲み放題つき5,000円のコースはグループに人気で、2026年8月の口コミではふたりで切り盛りしているとのこと。1人3,000〜6,000円ほど。全席喫煙で20歳未満は入店不可、2時間制。',
  });
}

// ================================================================ tanpopo 北新地本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27101683/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://tanpopo-kitashinchi.com/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'osaka_tanpopo_kitashinchi_honten', name: 'tanpopo 北新地本店 (tanpopo Kitashinchi honten)', category: 'MOM_AND_POP',
    lat: 34.697992, lng: 135.49779, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: every course ends with okonomiyaki or yakisoba (wheat) from a shared teppan; grilled dishes come with ponzu and sauces, and one scallop dish had a crumble topping (September 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: teppan courses of pork, chicken, wagyu, seafood and okonomiyaki with dashi.',
    hours_raw: 'Mon–Sat 18:00–22:00, last order 21:15 per the official site (21:00 per Tabelog); closed Sunday and on irregular days; holidays 18:00–22:00 but may close (official site; Tabelog). Hard to book: full on weekends and most evenings (2026 reviews); call even when online slots look full (Tabelog). Omakase course by phone in advance (official site). Cover charge ¥660 a person (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 16 seats: 6 at the counter, two tables for 3–4 and a private room for 4 or more; non-smoking; sommelier; takeout (Tabelog; official site). Opened 7 November 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 永楽ビル 6F, the white building with a FamilyMart at Kitashinchi Stn exit 11-23 — 1 min away',
    cuisine: 'Teppanyaki and okonomiyaki in a chic room, with Italian wines chosen to match (official site) · courses (Tabelog, tax included): large-plate sharing course of five dishes (grilled dishes, fish and meat mains, okonomiyaki or yakisoba) ¥6,800; luxury course of seven dishes ¥10,800 · courses in September–October 2026: thick asparagus and pork belly, teppan-grilled young chicken with salt, Hokkaido scallops and shiitake (one with a crumble), lean wagyu with garlic, salt and ponzu, homemade squid-and-celery satsuma-age, zucchini and pork-belly salad with a soft egg · okonomiyaki slow-cooked and fluffy; special thin-noodle yakisoba fried crisp, with squid · à la carte: snow-crab and green-onion omelette, pork kimchi, yam satsuma-age, tonpei-yaki (September 2026) · a birthday message written in mayonnaise on the okonomiyaki on request (August 2026)',
    website: OFF, gmaps: gm('tanpopo 北新地本店'), menu_url: OFF,
    notes: "[Okonomiyaki · Kitashinchi, teppan and Italian wine] A sixth-floor teppan counter by Kitashinchi station, named a Tabelog Teppanyaki WEST 100 in 2024 and 2025, that dresses Osaka okonomiyaki up for a wine list. Courses (¥6,800 or ¥10,800) move through seasonal vegetables and pork belly, crisp-skinned chicken, scallops and shiitake, a lean wagyu steak with garlic and ponzu, and end with your choice of a slow-cooked, fluffy okonomiyaki or the house thin-noodle yakisoba, fried until crisp. A sommelier pairs Italian wines; one diner in September 2026 wrote that it has even been selected by Michelin. It is booked out most nights, so reserve early and call if the online slots look full. ¥660 cover; around ¥10,000–15,000 with wine. International guests were dining in October 2026.",
    chef_bio: { chef_name: '神谷 圭介', roles: ['Representative (代表者) (official site)', 'Teppan chef and sommelier (unnamed) (2026 reviews)'], origin: null, background: 'Official site (read 2026-11-01): "代表者名 神谷 圭介"; teppanyaki of okonomiyaki and seasonal ingredients in a chic, refined space; many Italian wines, so it also works as a wine bar; an omakase course by phone; private room from four. Tabelog Steak/Teppanyaki WEST 100 in 2024 and 2025. Opened 7 November 2017 (Tabelog). A September 2026 review says it "has even been selected by Michelin".', philosophy: 'Osaka flavours with a glass of Italian wine in hand (official site).', specialty: 'Teppan course ending in okonomiyaki or thin-noodle yakisoba.',
      anecdotes: [
        { text: '"For the main starch, I chose okonomiyaki over yakisoba. The batter was grilled slowly, and it was finished with a vibrant sauce and mayonnaise." — September 2026, a course at the counter.', source: R + 'B502371945/' },
        { text: '"The thin noodle yakisoba was crispy, cooked like a fried noodle, and then tossed with sauce." — October 2026.', source: R + 'B538321243/' },
        { text: '"There was someone celebrating their birthday that day, and we consulted with the restaurant to have \'Happy Birthday\' written in mayonnaise on the okonomiyaki." — August 2026, a private room.', source: R + 'B535094037/' },
      ],
      japanese_sources_summary: '公式サイト: tanpopo、JR北新地駅から徒歩1分のおしゃれな鉄板焼き、シックで洗練された空間でお好み焼きや季節の食材の鉄板焼き、厳選したイタリアワイン、ワインバーとしても、おまかせコースは事前に電話で、個室は4名から、代表者名 神谷 圭介、大阪府大阪市北区曽根崎新地1-10-16 永楽ビル6F、月〜土18:00〜22:00 (L.O.21:15)、日曜と不定休。食べログ (店舗会員): ステーキ・鉄板焼き WEST 百名店 2024・2025、大皿シェアコース6,800円、贅沢コース10,800円、チャージ660円、16席、禁煙、ソムリエ、2017年11月7日オープン。口コミ (2026年8〜10月): ふわふわのお好み焼き、細麺の焼きそば、厚いアスパラと豚バラ、鶏の鉄板焼き、ホタテとしいたけ、和牛、いつも満席、海外のお客さんも。',
      confidence: 'medium', sources: [TB, OFF, R + 'B502371945/', R + 'B523642212/', R + 'B535094037/', R + 'B535366038/', R + 'B535446476/', R + 'B535691659/', R + 'B538013392/', R + 'B538129061/', R + 'B538321243/', R + 'B538404666/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course or à la carte with a sommelier; several international groups dining in October 2026. No English menu listed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-10-16 永楽ビル6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目10番16号 (go) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538129061/'],
    price_note: 'Courses from the Tabelog listing (tax included; ¥660 cover).', last_checked: TODAY, items: [
      it('', '', 'Large-plate sharing course (5 dishes, ending in okonomiyaki or yakisoba)', '¥6,800', 'Course', 'no', 'no', 'Tabelog listing; October 2026 review.', 'sharing_course'),
      it('', '', 'Luxury course (7 dishes, okonomiyaki and yakisoba)', '¥10,800', 'Course', 'no', 'no', 'Tabelog listing.', 'luxury_course'),
      it('', '', 'Special thin-noodle yakisoba (with squid)', '', 'Yakisoba', 'no', 'no', 'September and October 2026 reviews.', 'thin_yakisoba'),
    ] }, {
    cuisine: 'シックな空間の鉄板焼きとお好み焼き、料理に合わせるイタリアワイン (公式サイト)・コース (食べログ、税込): 焼き物、魚と肉のダブルメイン、お好み焼きか焼きそばの5品の大皿シェアコース6,800円、7品の贅沢コース10,800円・2026年9〜10月のコース: 太いアスパラと豚バラ、塩で食べる若鶏の鉄板焼き、Hokkaido のホタテとしいたけ (クランブルをのせたことも)、にんにく、塩、ポン酢で食べる赤身の和牛、自家製のイカとセロリのさつま揚げ、ズッキーニと豚バラのサラダの半熟卵のせ・お好み焼きはじっくり焼いてふわふわ、特製の細麺の焼きそばはカリッと焼いてイカ入り・アラカルト: ズワイガニとねぎのオムレツ、豚キムチ、山芋のさつま揚げ、とん平焼き (2026年9月)・頼めばお好み焼きにマヨネーズで誕生日のメッセージ (2026年8月)',
    neighborhood: '北新地、北新地駅11-23出口を上がってすぐ、ファミリーマートのある白いビルの永楽ビル 6階。徒歩1分',
    gf_detail: '実際にはグルテンフリーではありません。どのコースも最後は同じ鉄板のお好み焼きか焼きそば (小麦)。焼き物にはポン酢やソース、ホタテにクランブルをのせた料理も (2026年9月)。',
    vegan_detail: 'ヴィーガンではありません。豚肉、鶏肉、和牛、魚介とだしのお好み焼きの鉄板焼きのコース。',
    notes: '[お好み焼き・北新地、鉄板焼きとイタリアワイン] 北新地駅のそばのビルの6階にある鉄板焼きのカウンターで、食べログのステーキ・鉄板焼き WEST 百名店に2024年と2025年に選ばれ、大阪のお好み焼きをワインに合わせて仕立てる。コース (6,800円か10,800円) は季節の野菜と豚バラ、皮がパリッとした鶏、ホタテとしいたけ、にんにくとポン酢の赤身の和牛のステーキと進み、最後はじっくり焼いたふわふわのお好み焼きか、カリッと焼いた細麺の焼きそばを選ぶ。ソムリエがイタリアワインを合わせてくれる。2026年9月の口コミにはミシュランにも選ばれたとある。ほぼ毎晩満席なので早めに予約を、ネットで空きがなくても電話を。チャージ660円、ワインを入れて1万〜1万5千円ほど。2026年10月には海外のお客さんのグループも。',
  });
}

// ================================================================ ガルゴッタ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27049163/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://bar-gargotta.com/';
  const WD = day(['12:00', '14:30'], ['18:00', '23:00']), SU = day(['12:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'osaka_gargotta_ekimae3', name: 'ガルゴッタ (Gargotta)', category: 'OMNI',
    lat: 34.698523, lng: 135.499278, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu centres on fresh pasta, pizza, gratin, baguette and cheese fondue (2026 reviews; official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The shop highlights seasonal vegetable appetizers and five kinds of ajillo (Tabelog), but most dishes hold meat, seafood, cheese or cream.',
    hours_raw: 'Mon–Sat 12:00–14:30 (last order 14:00) and 18:00–23:00 (last order food 22:15, drinks 22:30); Sundays and holidays 12:00–14:30 and dinner 17:00–22:00 per Tabelog, 18:00–22:00 per the official site; lunch closes irregularly two or three times a month (official site; check Instagram); closed 31 December–3 January (Tabelog). Lunch queues from about 11:45 (October 2026). Parties of 2–3 may be seated at the counter; cheese fondue by reservation two days ahead (Tabelog). Tabelog\'s translated note mentions a service charge, while its Japanese original reads なし (none); a September 2026 diner found menu prices higher than on Tabelog. Cards (VISA, Master, JCB, AMEX, Diners), e-money, PayPay (Tabelog; official site). 20 seats; semi-private room for 10–13; private hire up to 20 (Tabelog). Smoking: allowed per Tabelog; the official site says non-smoking at lunch, smoking at dinner, and elsewhere "全席喫煙" (smoking at all seats).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Osaka Station Building No. 3, B2F, directly connected to JR Kitashinchi Stn — 5 min from Umeda Stn',
    cuisine: 'Italian bar with about 90–100 dishes: seasonal vegetable appetizers, five kinds of ajillo, pizzas, fresh pasta, lasagna; wine, beer, cocktails, sangria (Tabelog; official site) · lunch: fresh pasta (oil, cream or tomato) with salad ¥1,100, large size free (September and October 2026); +¥200 for a set with smoked duck (October 2026); gratin set with salad and drink ¥1,000, or ¥1,200 with duck (September 2026) · evening: prosciutto-wrapped figs, smoked salmon lemon-cream pasta, pizza (September 2026); smoked duck, appetizer and cheese platters; cheese fondue (October 2026); roast beef · party courses with 2-hour all-you-can-drink: Love Wine course ¥4,800 (Tabelog online only), girls\' party plan ¥5,500, party plan ¥5,300 (Tabelog, tax included); an omakase plan of salad, appetizers, meat, fish ajillo, pasta, pizza and ice cream, booked by 22:00 the day before (official site)',
    website: OFF, gmaps: gm('ガルゴッタ 大阪駅前第3ビル'), menu_url: OFF,
    notes: "[Italian bar · Umeda, Osaka Station Building No. 3 B2F] A cosy Italian bar in the second basement of Osaka Station Building No. 3, connected to Kitashinchi station, with a menu of about a hundred dishes. Lunch is the draw for local office workers: chewy fresh pasta in an oil, cream or tomato sauce with salad for ¥1,100, a large portion free, and a smoked-duck add-on; a queue forms before noon. In the evening it turns into a wine bar for figs in prosciutto, five kinds of ajillo, pizzas, cheese fondue (book two days ahead) and all-you-can-drink party courses around ¥5,000. Diners like the food but report uneven service: a 30-minute wait for platters, unsmiling staff, and menu prices above those on Tabelog (September 2026), and a lukewarm fondue (October 2026). Smoking at dinner.",
    chef_bio: { chef_name: null, roles: ['Kitchen and bar staff (unnamed in the sources read)'], origin: null, background: 'Shop text (Tabelog; official site, read 2026-11-01): Bar Gargotta, a hideaway Italian bar in 大阪駅前第3ビル; about 100 dishes, popular fresh-pasta lunches, lasagna, ajillo, pizza and wine snacks; an old-style bar room for dates, girls\' nights and parties up to 20.', philosophy: 'Variety and affordability (Tabelog).', specialty: 'Fresh-pasta lunch; ajillo.',
      anecdotes: [
        { text: '"During lunch hours, you can enjoy a large size for free, ensuring a satisfying manpuku." — October 2026, fresh pasta with smoked duck.', source: R + 'B536415460/' },
        { text: '"By 11:45, people started lining up, and I was glad to be seated" — October 2026, the lunch set with cream pasta.', source: R + 'B538215278/' },
        { text: '"I ordered an assorted platter of appetizers and a cheese platter, but it took nearly 30 minutes for them to arrive." — September 2026.', source: R + 'B536606491/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, OFF, R + 'B535372187/', R + 'B535444238/', R + 'B536278406/', R + 'B536415460/', R + 'B536572607/', R + 'B536606491/', R + 'B537207065/', R + 'B537727358/', R + 'B538215278/', R + 'B538240812/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter from staff (September 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田一丁目1番3号 (go) 56m (a large station-front building; the shop is on B2F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535444238/', R + 'B536572607/'],
    price_note: 'Lunch prices from September–October 2026 reviews; courses from Tabelog (tax included). A September 2026 diner found menu prices higher than Tabelog\'s.', last_checked: TODAY, items: [
      it('', '', 'Lunch: fresh pasta (oil, cream or tomato) with salad, large size free', '¥1,100', 'Lunch', 'no', 'ask', 'September and October 2026 reviews.', 'pasta_lunch'),
      it('', '', 'Lunch: gratin set with salad and drink (¥1,200 with smoked duck)', '¥1,000', 'Lunch', 'no', 'no', 'September 2026 review.', 'gratin_lunch'),
      it('', '', 'Love Wine course with 2-hour all-you-can-drink (Tabelog online booking)', '¥4,800', 'Course', 'ask', 'no', 'Tabelog listing.', 'love_wine_course'),
      it('', '', 'Party plan, 7 dishes with all-you-can-drink', '¥5,300', 'Course', 'ask', 'no', 'Tabelog listing.', 'party_plan'),
    ] }, {
    cuisine: '約90〜100品のイタリアンバル: 季節の野菜の前菜、5種類のアヒージョ、ピザ、生パスタ、ラザニア。ワイン、ビール、カクテル、サングリア (食べログ、公式サイト)・ランチ: 生パスタ (オイル、クリーム、トマト) とサラダ1,100円、大盛り無料 (2026年9月・10月)、プラス200円でスモークダックつきのセット (2026年10月)、サラダとドリンクつきのグラタンのセット1,000円、ダックつき1,200円 (2026年9月)・夜: いちじくの生ハム巻き、スモークサーモンのレモンクリームパスタ、ピザ (2026年9月)、スモークダック、前菜やチーズの盛り合わせ、チーズフォンデュ (2026年10月)、ローストビーフ・2時間飲み放題つきのコース: Love Wine コース4,800円 (食べログのネット予約のみ)、女子会プラン5,500円、宴会プラン5,300円 (食べログ、税込)。前日22時までの予約で、サラダ、前菜、肉料理、魚のアヒージョ、パスタ、ピッツァ、アイスのお任せプラン (公式サイト)',
    neighborhood: '大阪駅前第3ビルの地下2階、JR北新地駅直結。梅田駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。メニューは生パスタ、ピザ、グラタン、バゲット、チーズフォンデュが中心 (2026年の口コミ、公式サイト)。',
    vegan_detail: '要確認。ヴィーガンの情報なし。季節の野菜の前菜と5種類のアヒージョが自慢 (食べログ) だが、ほとんどの料理に肉、魚介、チーズ、クリームが入る。',
    notes: '[イタリアンバル・梅田、大阪駅前第3ビル地下2階] 北新地駅につながる大阪駅前第3ビルの地下2階にある、こぢんまりしたイタリアンバルで、メニューは約100品。昼は近くで働く人に人気で、オイル、クリーム、トマトから選ぶもちもちの生パスタにサラダで1,100円、大盛り無料、スモークダックも足せる。正午前には行列ができる。夜はワインバルになり、いちじくの生ハム巻き、5種類のアヒージョ、ピザ、チーズフォンデュ (2日前までに予約)、5,000円前後の飲み放題つきのコース。料理はおいしいという声の一方、盛り合わせが出るまで30分待った、スタッフに笑顔がない、メニューの値段が食べログより高い (2026年9月)、チーズフォンデュがぬるかった (2026年10月) という声も。夜は喫煙可。',
  });
}

// ================================================================ 高乃屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27073023/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'osaka_takano_ya_kitashinchi', name: '高乃屋 (Takano Ya)', category: 'OMNI',
    lat: 34.697911, lng: 135.498301, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include fried dishes, and grills, sashimi and rice dishes are usually seasoned with soy sauce, which normally contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a robatayaki izakaya of chicken, beef, seafood and dashi dishes. Tabelog shows a vegetarian-options flag.',
    hours_raw: 'Mon–Fri 18:00–24:00; closed Saturdays, Sundays and holidays; easiest to reach by phone after 15:00 (Tabelog). Group bookings and private hire up to 20; private rooms for 3–15 (Tabelog). No cover charge; cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). 22 seats: counter and tables; smoking allowed (Tabelog; 2024 and August 2026 reviews). Opened 26 March 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi, 曾根崎新地1-9-15 — 3 min from JR Kitashinchi Stn',
    cuisine: 'Robatayaki and creative Japanese cooking: seasonal produce from Tokushima and Nagano, rice milled fresh each time from farmers the shop visits, Kumamoto and Miyazaki beef; 30–35 sakes (Tabelog) · courses with all-you-can-drink: Monday–Thursday course ¥5,900 (9 dishes), business course ¥6,500 (10 dishes: appetizers, sashimi, grills, fried dishes) (Tabelog, tax included); contents vary with the season (2025 reviews) · Awa Odori chicken thigh, grilled (a March 2026 table ordered it twice; August 2026) · uni on meat-wrapped rice balls (April 2026) · grilled shellfish, bonito sashimi with salt, mentaiko dashimaki, chicken chazuke or zosui to finish (2024–2025 reviews)',
    website: null, gmaps: gm('高乃屋 北新地'), menu_url: null,
    notes: "[Izakaya · Kitashinchi, charcoal-grilled robatayaki] A weekday-only robatayaki izakaya in Kitashinchi, open since 2013, built around charcoal grilling and seasonal produce from Tokushima and Nagano, with Kumamoto and Miyazaki beef and rice milled fresh. Diners name the grilled Awa Odori chicken thigh (one March 2026 business dinner ordered it twice) and rice balls wrapped in meat and topped with sea urchin, alongside 30-odd sakes. Private rooms for up to 15 and all-you-can-drink courses at ¥5,900–6,500 make it a company-party spot. Reviews are mixed on the seafood (no oysters and so-so sashimi on one August 2026 visit), and the tables at the back lack a call bell. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), "a chef who loves robatayaki" (April 2026 review)'], origin: null, background: 'Shop text (Tabelog): opened with a passion for robatayaki; seasonal ingredients sourced only from Tokushima and Nagano; vegetables chosen for quality and size; rice freshly milled each time, the shop regularly visiting the farmers; Kumamoto and Miyazaki beef; 30–35 sakes. Opened 26 March 2013. A July 2024 review gives the name as "Sumibi-an Takano Ya".', philosophy: 'The true flavours of the ingredients (Tabelog).', specialty: 'Charcoal-grilled Awa Odori chicken; robatayaki.',
      anecdotes: [
        { text: '"We ordered the grilled chicken thighs twice, as they were particularly good." — March 2026, a business dinner.', source: R + 'B525130573/' },
        { text: '"Grilled Izakaya in Kitashinchi: The Uni-Topped Meat-Wrapped Rice Balls Pair Perfectly with Japanese Sake" — April 2026.', source: R + 'B526810236/' },
        { text: '"I was expecting seafood, but the sashimi was just okay, and there were no oysters for the grilled seafood." — August 2026.', source: R + 'B534822418/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B489203793/', R + 'B492778864/', R + 'B499398511/', R + 'B502546973/', R + 'B503333156/', R + 'B504878029/', R + 'B510254522/', R + 'B525130573/', R + 'B526810236/', R + 'B534822418/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Group courses and private rooms; book by phone after 15:00 (Tabelog). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎新地1-9-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated March, April and August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番15号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included; contents vary).', last_checked: TODAY, items: [
      it('', '', 'Monday–Thursday course with all-you-can-drink (9 dishes)', '¥5,900', 'Course', 'ask', 'no', 'Tabelog listing; a March 2025 review.', 'course_5900'),
      it('', '', 'Business course with all-you-can-drink (10 dishes)', '¥6,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_6500'),
      it('', '', 'Grilled Awa Odori chicken thigh', '', 'Grill', 'ask', 'no', 'March and August 2026 reviews.', 'awaodori_chicken'),
    ] }, {
    cuisine: '炉端焼きと創作和食: Tokushima と Nagano の季節の食材、農家を訪ねて毎回精米するご飯、Kumamoto と Miyazaki の牛肉、日本酒30〜35種 (食べログ)・飲み放題つきのコース: 月〜木のコース5,900円 (9品)、接待向けのコース6,500円 (10品: 前菜、刺身、焼き物、揚げ物) (食べログ、税込)、内容は季節で変わる (2025年の口コミ)・Awa Odori の鶏ももの炭火焼き (2026年3月に2回頼んだテーブルも、2026年8月)・ウニをのせた肉巻きおにぎり (2026年4月)・貝の焼き物、塩で食べるカツオの刺身、明太子のだし巻き、締めの鶏茶漬けや雑炊 (2024〜2025年の口コミ)',
    neighborhood: '北新地、曾根崎新地1-9-15。JR北新地駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースには揚げ物があり、焼き物、刺身、ご飯ものにはふつう小麦を含む醤油を使う。',
    vegan_detail: 'ヴィーガンではありません。鶏肉、牛肉、魚介、だしの料理の炉端焼きの居酒屋。食べログにはベジタリアンのオプションの表示がある。',
    notes: '[居酒屋・北新地、炭火の炉端焼き] 2013年からの北新地の平日だけの炉端焼きの居酒屋で、炭火焼きと、Tokushima と Nagano の季節の食材、Kumamoto と Miyazaki の牛肉、毎回精米するご飯が自慢。Awa Odori の鶏ももの炭火焼き (2026年3月の接待で2回頼んだという人も) や、肉巻きおにぎりのウニのせの名前が挙がり、日本酒は30種あまり。最大15人の個室と5,900〜6,500円の飲み放題つきのコースで、会社の宴会向き。魚は評価が分かれ (2026年8月には牡蠣がなく、刺身もふつうだったという声)、奥のテーブルには呼び出しのベルがない。喫煙可。',
  });
}

save();
