// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), NOTABLE phase, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 19.
//   + 肉家 串八 西中島本店 Nikuya Kushihachi (a 40-year yakiniku and shabu-shabu house by Nishinakajima-Minamigata, private rooms, hand-cut beef)
//   + 大衆ビストロ Galetto Taishu Bistro Galetto (the 匠 group's meat bistro, formerly 大衆ビストロ 匠, unlimited-time wine plans)
//   + 媛 故郷味の旅 Hime Kokyo Aji no Tabi (Ehime home cooking: Imabari fried chicken and Nanyo tai-meshi, lunch and dinner)
//   - skipped 焼肉 匠 本店 27117961: same-concept branch of the 匠 group's yakiniku, already in data as 個室焼肉匠 (coordinator, batch 18).
//   - skipped たこ焼き道楽 わなか 新大阪駅店 27104033: chain; 15 shops in Osaka, Hokkaido, Kyoto, Fukuoka and elsewhere as of September 2023 (article;
//     web search 2026-11-02).
//   - skipped だるま アルデ新大阪店 27086549: chain; 新世界元祖串かつ だるま, 12–15 shops per three articles (aumo, Mapple, Rurubu; web search 2026-11-02).
//   - skipped たこ昌 新大阪駅店 27013535: the 元祖たこ昌 company lists three restaurants, 道頓堀本店, 新大阪駅店 and 関西空港店, plus frozen-food sales
//     (takomasa.co.jp, read 2026-11-02). A small group not in data, but the 道頓堀本店 (27001535) is in the osaka (Dotonbori) sweep list; skipped so
//     the flagship can be the one entry, as with Fan Fan. Flagged: if the coordinator prefers, draft this shop instead.
//   - skipped ロマン亭 オンス 新大阪店 27091123: chain; 株式会社ROMAN TALE runs about 18 restaurants in Osaka and Kyoto (roman-gp.com, read 2026-11-02).
//   - 磯一 新大阪店 27041309 left undecided: "新大阪店" suggests branches, but no shop count was found (web search 2026-11-02). Not drafted.
//   Group and chain checks of the three added: Kushihachi is one shop for about 40 years (so-ya.co.jp, read 2026-11-02; "本店" in the Tabelog name
//   only). Galetto belongs to the 匠 group (a July 2026 review; its Tabelog name history, formerly 大衆ビストロ 匠), a bistro, so a sister concept
//   per the coordinator. 媛 is a three-shop group near Nishinakajima (this one, Hime Imabari Yakitori no Tabi and Hime 3, per an October 2026 review); staff told a
//   July 2026 diner this is the first; kept as a small group not in data.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02); nearby records 27–49 m away at other addresses.
//   open_late per Greg's rule (after 22:00): Kushihachi 22:30, Galetto 23:00 and 媛 23:00 (24:00 Fridays) all true.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27117961', 'same-concept branch: 匠 group yakiniku, already in data as osaka_koshitsu_yakiniku_takumi_nishinakajima (coordinator, batch 18)');
skip('27104033', 'chain: たこ焼道楽 わなか, 15 shops as of September 2023 (article, web search 2026-11-02)');
skip('27086549', 'chain: 新世界元祖串かつ だるま, 12–15 shops (aumo, Mapple, Rurubu; web search 2026-11-02)');
skip('27013535', 'branch of a 3-restaurant group whose flagship 道頓堀本店 (27001535) is in the osaka sweep list; flagged for the coordinator');
skip('27091123', 'chain: 株式会社ROMAN TALE, about 18 restaurants in Osaka and Kyoto (roman-gp.com, read 2026-11-02)');

// ================================================================ 肉家 串八 西中島本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27007123/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.so-ya.co.jp/';
  const WD = day(['17:00', '22:30']);
  put({
    id: 'osaka_nikuya_kushihachi_nishinakajima', name: '肉家 串八 西中島本店 (Nikuya Kushihachi)', category: 'OMNI',
    lat: 34.727301, lng: 135.49939, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sweet yakiniku sauce and marinades; cold noodles; shabu-shabu sauces. Salt-grilled cuts exist, but no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef yakiniku and shabu-shabu house; raw-egg rice.',
    hours_raw: 'Mon–Fri 17:00–22:30 (last order 21:45); Sat and holidays 17:00–22:00 (last order 21:15); closed Sunday and one irregular day a month; may close early on holidays; check for New Year and Obon (Tabelog). Reservations accepted; usually no time limit, two hours when busy (Tabelog). Cards; no e-money or QR; ¥380 appetiser charge (Tabelog). 100 seats: 5 at the counter and 93 on sunken-kotatsu seating, private rooms for 2 to over 30; private hire 20–50 (Tabelog). Smoking allowed, including at the table (Tabelog; April 2026). Coin parking nearby (Tabelog; August 2025).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-21-4, 1 min from exit 1 of Nishinakajima-Minamigata, 3 min from Hankyu Minamikata, 10 min from JR Shin-Osaka; a brick-fronted house down a side street (Tabelog; August 2026)',
    cuisine: 'Yakiniku and shabu-shabu (Tabelog; shop site) · beef bought in blocks and cut by hand in the shop; only female cattle judged top grade, from anywhere in Japan, chosen for taste rather than brand (site) · wagyu shabu-shabu, a house speciality; courses with both shabu-shabu and yakiniku on request (site) · omakase course for first-timers: yukhoe, heart and omasum sashimi in small portions, thick-cut tongue, tenderloin or chateaubriand, strip loin, harami, ribeye, short rib, offal, cold noodles (2025–2026); a weekday course with all-you-can-drink ¥8,000 (September 2026) · a la carte: thick salted tongue, premium harami, sirloin cap, tsurami, liver, tongue sashimi, rare steak with yukhoe sauce, rice with raw egg (2025–2026) · kimchi, namul, wakame and egg soup, cold noodles; once the "Kushihachi nabe" with udon to finish (2026)',
    website: SITE, gmaps: gm('肉家 串八 西中島'), menu_url: null,
    notes: '[Yakiniku · Nishinakajima-Minamigata, a 40-year house of hand-cut beef and private rooms] A 100-seat yakiniku and shabu-shabu house a minute from Nishinakajima-Minamigata, open for about 40 years in a brick-fronted building with sunken-kotatsu private rooms upstairs. Beef comes in whole blocks and is cut by hand, and the shop picks top-grade female cattle for taste, not brand name. First-timers are steered to the omakase course, from heart sashimi and yukhoe to thick tongue and chateaubriand; regulars rate the harami highest (2026). Courses can run slowly. Smoking at the table is allowed. Open to 22:30; closed Sundays.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null,
      background: 'Per the shop site (so-ya.co.jp, read 2026-11-02): "肉家くしはち" has been loved by the neighbourhood for about 40 years; meat chosen by experienced eyes, bought in blocks and hand-cut in the shop; "What matters is not the brand but the taste": only female cattle judged top grade; wagyu shabu-shabu a signature; private rooms, tables and counter for dates, business and banquets; the site has English and Chinese pages. Per reviews: "the owner happened to be there and grilled for us" (April 2026); a diner who first came decades earlier returned after more than 30 years (July 2026); a Hot Pepper reviewer has come for about 40 years (May 2026, web search); courses arrived "every 10 to 15 minutes" for one diner (August 2026).',
      philosophy: '"What matters is not the brand but the taste" (shop site, translated).', specialty: 'Hand-cut wagyu yakiniku; wagyu shabu-shabu.',
      anecdotes: [
        { text: '"The outside skirt is particularly exceptional, with a perfect balance of tenderness and flavor." — April 2026, a fifth visit.', source: R + 'B143930600/' },
        { text: '"Even though it was omakase, [the staff] listened to all my preferences, accommodating requests." — July 2025, wedding anniversary.', source: R + 'B510544879/' },
        { text: '"Back in the day, we would always finish our meal with the Kushihachi Nabe, a hot pot filled with udon." — July 2026, a first visit in over 30 years.', source: R + 'B531793249/' },
      ],
      japanese_sources_summary: '店のサイト (so-ya.co.jp): 西中島南方の焼肉・しゃぶしゃぶ専門店「肉家くしはち」、約40年、熟練の目利きで選ぶ最高級の肉をブロックで仕入れて店内で手切り、大切なのはブランドではなく味、最上級と判断した雌牛のみを全国から、看板のしゃぶしゃぶ、予約すればしゃぶしゃぶと焼肉の両方のコース、初めてならおまかせコース、個室・テーブル・カウンター、英語と中国語のページ。食べログ: 肉家 串八 西中島本店、焼肉・しゃぶしゃぶ・ステーキ、大阪市淀川区西中島3-21-4、西中島南方駅1番出口から徒歩1分、月〜金17:00〜22:30 (L.O.21:45)、土・祝17:00〜22:00、日曜と月1回不定休、カード可、電子マネー・QR 不可、お通し380円、100席 (カウンター5、掘りごたつ93)、個室、喫煙可。口コミ (2020年〜2026年9月): おまかせコース、ユッケ、ハツ刺し、センマイ刺し、厚切りタン、シャトーブリアン、ヒレ、ロース、ハラミ、リブロース、カルビ、ホルモン、冷麺、平日の飲み放題つきコース8,000円、厚切り塩タン、上ハラミ、イチボ、tsurami、レバー、タン刺し、卵かけごはん、2階の掘りごたつの個室、店主が焼いてくれた日も、コースの提供が遅いという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B143930600/', R + 'B425449751/', R + 'B506821737/', R + 'B510544879/', R + 'B514826519/', R + 'B528885480/', R + 'B529339757/', R + 'B531793249/', R + 'B532287279/', R + 'B532878958/', R + 'B534992140/', R + 'B536266131/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shop site has English and Chinese pages (read 2026-11-02). No English evidence from reviews.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-21-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目21番4号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536266131/', TB],
    price_note: 'One course price from a September 2026 review; the appetiser charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Weekday course with all-you-can-drink', '¥8,000', 'Courses', 'no', 'no', 'September 2026.', 'nomihodai_course'),
      it('', '', 'Appetiser charge', '¥380', 'Charges', 'ask', 'ask', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '焼肉としゃぶしゃぶ (食べログ、店のサイト)・肉はブロックで仕入れて店で手切り。ブランドより味で、全国から最上級と判断した雌牛だけ (店のサイト)・看板の和牛のしゃぶしゃぶ。予約すればしゃぶしゃぶと焼肉の両方のコースも (店のサイト)・初めてならおまかせコース: ユッケ、ハツ刺し、センマイ刺しを少しずつ、厚切りタン、ヒレかシャトーブリアン、ロース、ハラミ、リブロース、カルビ、ホルモン、冷麺 (2025〜2026年)。平日の飲み放題つきコース8,000円 (2026年9月)・一品: 厚切り塩タン、上ハラミ、イチボ、tsurami、レバー、タン刺し、ユッケのたれのレアステーキ、卵かけごはん (2025〜2026年)・キムチ、ナムル、わかめと卵のスープ、冷麺。昔は締めにうどんの Kushihachi nabe も (2026年)',
    neighborhood: '西中島3-21-4、西中島南方駅1番出口から1分、阪急南方駅から3分、JR 新大阪駅から10分。横道のれんがの一軒家 (食べログ、2026年8月)',
    gf_detail: 'グルテンフリーではありません。甘いたれともみだれ、冷麺、しゃぶしゃぶのたれ。塩焼きもあるが、グルテンの情報はなし。',
    vegan_detail: 'ヴィーガンではありません。牛肉の焼肉としゃぶしゃぶの店。卵かけごはんも。',
    notes: '[焼肉・西中島南方、40年続く手切りの肉と個室の店] 西中島南方から1分、れんがの建物に2階の掘りごたつの個室がある100席の焼肉としゃぶしゃぶの店で、約40年。牛肉はブロックで仕入れて店で手切りし、銘柄ではなく味で最上級の雌牛を選ぶ。初めてならおまかせコースで、ハツ刺しやユッケから厚切りタン、シャトーブリアンまで。常連のいちばんはハラミ (2026年)。コースは時間がかかることも。席での喫煙可。22時半まで。日曜休み。',
  });
}

// ================================================================ 大衆ビストロ Galetto
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27083649/'; const R = TB + 'dtlrvwlst/';
  const D = ['18:00', '23:00'];
  put({
    id: 'osaka_taishu_bistro_galetto_nishinakajima', name: '大衆ビストロ Galetto (Taishu Bistro Galetto)', category: 'OMNI',
    lat: 34.727861, lng: 135.494601, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: bistro dishes with bread, pound cake, sauces and stews.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat bistro of wagyu, duck, cured meats and seafood.',
    hours_raw: 'Mon–Wed, Fri, Sat and holidays (and the days before and after) 18:00–23:00 (food last order 22:00, drinks 22:30); Thursday also lunch 12:00–14:00 (Tabelog). The listing also says "Closed on Sundays" while showing Sunday hours; Sunday is left off here. Reservations accepted; call even if online booking is full (Tabelog). Cards and PayPay (Tabelog). 90 seats: 40 in the restaurant and a banquet room for 50 next door; private hire for 20 to over 50 (Tabelog). Non-smoking, ashtray at the entrance (Tabelog).',
    hours: { 0: day(D), 1: day(D), 2: day(D), 3: day(['12:00', '14:00'], D), 4: day(D), 5: day(D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島6-8-9 花原第一ビル 101, 6 min from exit 1 of Nishinakajima-Minamigata, 8 min from Hankyu Minamikata, a little north-west of the station (Tabelog; June 2026)',
    cuisine: 'Meat bistro with Italian dishes and wine (Tabelog; reviews) · wagyu from the 匠 group’s farm in Oita (2025–2026) · courses with all-you-can-drink from ¥4,000; ¥5,000 with no time limit on wine; ¥6,000 (2025–2026) · wine on the plans: about five reds, five whites and sparkling, sangria (2025–2026) · seasonal potage, assorted appetisers of roast duck, prosciutto and salami, wagyu carpaccio seared with a torch at the table, ultra-thin meat sashimi, wagyu and sea urchin bistro sushi, Oita wagyu potato salad, bagna cauda (2025–2026) · mussels in wine with risotto, braised tuna, beef stew, venison, red-meat steak, ajillo; pound cake for dessert (2025–2026) · monthly recommendations sent on LINE (2026)',
    website: null, gmaps: gm('大衆ビストロ Galetto 西中島'), menu_url: null,
    notes: '[Bistro · Nishinakajima-Minamigata, the 匠 group’s wagyu bistro with wine that never stops] A 40-seat meat bistro, plus a 50-seat party room, north-west of Nishinakajima-Minamigata, run by the 匠 group and once called 大衆ビストロ 匠. Courses with all-you-can-drink start at ¥4,000, and the ¥5,000 plan has no time limit on about fifteen wines (2026). Dishes lean on the group’s Oita wagyu: carpaccio torched at the table, wagyu and sea urchin sushi, steak, with mussels and risotto between. Lively and good for groups; book at weekends. Open 18:00–23:00, lunch on Thursdays.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff of the 匠 group (unnamed)'], origin: null,
      background: 'Per Tabelog: bistro, Italian, meat bar; formerly 大衆ビストロ 匠 (Tabelog page history). Per reviews: "The restaurant used to be called Takumi, but it has changed its name" (October 2025); "being part of the Takumi group, the quality of the meat was exceptional" (July 2026); a diner who came when it first opened returned after 8 years (February 2026); a last-minute change in party size was accommodated (November 2025); one diner found the food unremarkable for the price but the drinks good value (December 2025).',
      philosophy: null, specialty: 'Wagyu bistro courses with unlimited-time wine.',
      anecdotes: [
        { text: '"The JPY 5000 course included unlimited wine (until closing), which seemed unbelievable, but it was true." — July 2026.', source: R + 'B532969584/' },
        { text: '"The Carpaccio, which is seared right in front of you, is both impactful and enjoyable." — November 2025.', source: R + 'B518144944/' },
        { text: '"This restaurant uses Oita Wagyu, which is incredibly tender and delicious. The meat sushi is always melt-in-your-mouth." — December 2025.', source: R + 'B477311658/' },
      ],
      japanese_sources_summary: '食べログ: 大衆ビストロ Galetto (旧店名 大衆ビストロ 匠)、ビストロ・イタリアン・肉バル、大阪市淀川区西中島6-8-9 花原第一ビル 101、西中島南方駅1番出口から徒歩6分、阪急南方駅から8分、月〜水・金・土・祝18:00〜23:00、木は昼12:00〜14:00も、日曜休みとも、カード・PayPay 可、90席 (店内40、宴会場50)、貸切可、禁煙 (入口に灰皿)。口コミ (2024年〜2026年9月): 匠グループの店、大分の和牛、飲み放題つきコース4,000円から、5,000円は時間無制限、6,000円、ワインは赤白各5種とスパークリング、サングリア、季節のポタージュ、鴨のロースト・生ハム・サラミの前菜、席でバーナーで炙るカルパッチョ、薄切りの肉の刺身、和牛とウニのビストロ寿司、大分和牛のポテトサラダ、バーニャカウダ、ムール貝のワイン蒸しとリゾット、マグロの煮込み、ビーフシチュー、鹿肉、赤身のステーキ、アヒージョ、パウンドケーキ、LINE で月替わりのおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B284765428/', R + 'B307512644/', R + 'B474594089/', R + 'B477311658/', R + 'B484473679/', R + 'B500612823/', R + 'B518144944/', R + 'B518255061/', R + 'B522485758/', R + 'B526542575/', R + 'B530604004/', R + 'B532969584/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Good for groups; banquet room (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島6-8-9 花原第一ビル 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島六丁目8番9号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532969584/', R + 'B477311658/', R + 'B529269296/'],
    price_note: 'Course prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', 'from ¥4,000', 'Courses', 'no', 'no', 'June 2026.', 'course_4000'),
      it('', '', 'Course with unlimited-time all-you-can-drink', '¥5,000', 'Courses', 'no', 'no', 'July 2026.', 'course_5000'),
      it('', '', 'Course with all-you-can-drink', '¥6,000', 'Courses', 'no', 'no', 'December 2025.', 'course_6000'),
    ] }, {
    cuisine: 'イタリアンとワインの肉ビストロ (食べログ、口コミ)・匠グループの大分の牧場の和牛 (2025〜2026年)・飲み放題つきコース4,000円から。5,000円はワインが時間無制限。6,000円 (2025〜2026年)・飲み放題のワインは赤白各5種ほどとスパークリング、サングリア (2025〜2026年)・季節のポタージュ、鴨のロースト・生ハム・サラミの前菜、席でバーナーで炙る和牛のカルパッチョ、ごく薄い肉の刺身、和牛とウニのビストロ寿司、大分和牛のポテトサラダ、バーニャカウダ (2025〜2026年)・ムール貝のワイン蒸しとリゾット、マグロの煮込み、ビーフシチュー、鹿肉、赤身のステーキ、アヒージョ。デザートにパウンドケーキ (2025〜2026年)・月替わりのおすすめは LINE で (2026年)',
    neighborhood: '西中島6-8-9 花原第一ビル 101、西中島南方駅1番出口から6分、阪急南方駅から8分、駅の少し北西 (食べログ、2026年6月)',
    gf_detail: 'グルテンフリーではありません。パン、パウンドケーキ、ソースや煮込みのビストロ料理。',
    vegan_detail: 'ヴィーガンではありません。和牛、鴨、生ハムやサラミ、魚介の肉ビストロ。',
    notes: '[ビストロ・西中島南方、匠グループの和牛ビストロ、ワインは時間無制限] 西中島南方の北西、40席に50人の宴会場もある肉ビストロで、匠グループの店、もとの名は大衆ビストロ 匠。飲み放題つきのコースは4,000円から、5,000円のプランは約15種のワインが時間無制限 (2026年)。料理はグループの大分の和牛が中心で、席で炙るカルパッチョ、和牛とウニの寿司、ステーキに、ムール貝やリゾットも。にぎやかで団体向き、週末は予約を。18時から23時、木曜は昼も。',
  });
}

// ================================================================ 媛 故郷味の旅
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27046869/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '15:00'];
  const N = day(L, ['17:00', '23:00']); const F = day(L, ['17:00', '00:00']);
  put({
    id: 'osaka_hime_kokyo_aji_no_tabi_nishinakajima', name: '媛 故郷味の旅 (Hime Kokyo Aji no Tabi)', category: 'OMNI',
    lat: 34.726026, lng: 135.496295, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered fried chicken, jakoten and fried fish; tai-meshi in a soy-based sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried chicken, fish and dashi throughout.',
    hours_raw: 'Mon–Thu, Sat and days after holidays 11:00–15:00 (last order 14:00) and 17:00–23:00 (food last order 22:00, drinks 22:30); Fridays and days before holidays to 24:00 (food last order 23:00, drinks 23:30); closed Sunday and holidays (Tabelog). Reservations accepted; the ¥495 appetiser is included for course bookings (Tabelog). Cards, e-money and PayPay (Tabelog). 70 seats at tables; private hire for groups; non-smoking; free Wi-Fi (Tabelog). Rice and miso soup refills at lunch (2026).',
    hours: { 0: N, 1: N, 2: N, 3: N, 4: F, 5: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島4-8-15 メゾンリーフ 1F, 5 min west of Hankyu Minamikata or Nishinakajima-Minamigata, under 10 min from Shin-Osaka (Tabelog; July 2026)',
    cuisine: 'Ehime home cooking and fried chicken (Tabelog; reviews) · senzanki, Imabari-style fried chicken in big thigh pieces with ponzu, sesame sauce or sesame salt: five pieces at lunch, 15 for ¥1,309; white and spicy-red versions (2026) · lunch sets: Nanyo tai-meshi of sea bream with raw egg and dashi over rice ¥990; small senzanki set ¥950; spicy red senzanki set ¥990; Hime bento with fried chicken and a chashu bowl ¥750; chashu and egg rice bowl; daily specials (2026) · jakoten, fresh-fried, as the ¥495 appetiser or ¥100 at lunch; simmered sea bream; sea bream chazuke; fried horse mackerel; lemon-anchovy cabbage (2026) · highballs and chu-hi ¥299 when you order senzanki; all-you-can-drink without a course; chestnut shochu; Pon juice (2026)',
    website: null, gmaps: gm('媛 故郷味の旅 西中島'), menu_url: null,
    notes: '[Izakaya · Nishinakajima-Minamigata, Ehime cooking and giant Imabari fried chicken] A 70-seat Ehime restaurant five minutes west of Nishinakajima-Minamigata, the first of three 媛 shops nearby. The star is senzanki, Imabari’s fried chicken in huge thigh pieces; at lunch a five-piece set is about ¥950–990, or try the Nanyo tai-meshi, raw sea bream and egg over rice with dashi (2026). At night jakoten comes hot as the appetiser, highballs drop to ¥299 with an order of senzanki, and all-you-can-drink needs no course. Service can be brisk. Lunch and dinner; to 23:00, Fridays to midnight; closed Sundays.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: izakaya, regional cuisine and kara-age; particular about fish. Per reviews: "Hime has three locations near Nishinakajima: this one, Hime Imabari Yakitori no Tabi, and Hime 3. All of them are incredibly popular and often have long lines" (October 2026); "According to the staff, this is the first branch, while the one behind is the second" (July 2026); "This restaurant has many repeat customers" (October 2026); a regular on the fourteenth visit notes the menu keeps changing (September 2026); two diners found the service lacking (July and August 2026).',
      philosophy: null, specialty: 'Senzanki fried chicken; Nanyo tai-meshi.',
      anecdotes: [
        { text: '"The dish features a generous serving of sea bream soaked in broth, poured over rice topped with a raw egg." — September 2026, Nanyo tai-meshi set ¥990.', source: R + 'B520253906/' },
        { text: '"The appetizer, Jako Ten, was served piping hot and freshly fried!" — July 2026.', source: R + 'B531953137/' },
        { text: '"When you order the senzanki, you can enjoy highballs and chuhai for just JPY 299." — July 2026.', source: R + 'B532352469/' },
      ],
      japanese_sources_summary: '食べログ: 媛 故郷味の旅、居酒屋・郷土料理・唐揚げ、大阪市淀川区西中島4-8-15 メゾンリーフ 1F、阪急南方駅か西中島南方駅から徒歩5分、月〜木・土・祝後日11:00〜15:00、17:00〜23:00、金・祝前日は24:00まで、日曜・祝日休み、予約可、付き出し495円 (コース予約は込み)、カード・電子マネー・PayPay 可、70席、禁煙、Wi-Fi。口コミ (2025年〜2026年10月): 西中島近くに3店 (この店、Hime Imabari Yakitori no Tabi、Hime 3)、ここが1号店、愛媛の郷土料理、senzanki (Imabari の唐揚げ) の大きなもも肉、ポン酢・ごまだれ・ごま塩、白と辛い赤、15個1,309円、Nanyo の tai-meshi の定食990円、senzanki の小の定食950円、媛弁当750円、チャーシューと卵の丼、じゃこ天、鯛の煮付け、鯛茶漬け、アジフライ、レモンとアンチョビのキャベツ、senzanki を頼むとハイボールとチューハイが299円、コースなしの飲み放題、栗焼酎、Pon juice、ごはんとみそ汁はおかわり自由、常連が多い。',
      confidence: 'medium', sources: [TB, R + 'B329284465/', R + 'B489920144/', R + 'B498784254/', R + 'B520253906/', R + 'B523631206/', R + 'B531751897/', R + 'B531953137/', R + 'B532352469/', R + 'B532595232/', R + 'B533771042/', R + 'B535118564/', R + 'B535674269/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Free Wi-Fi (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-8-15 メゾンリーフ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目8番15号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520253906/', R + 'B531751897/', R + 'B535118564/', R + 'B533771042/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Nanyo tai-meshi set (lunch)', '¥990', 'Lunch', 'no', 'no', 'September 2026.', 'taimeshi_set'),
      it('', '', 'Small senzanki set (lunch)', '¥950', 'Lunch', 'no', 'no', 'July 2026.', 'senzanki_set_small'),
      it('', '', 'Hime bento (lunch)', '¥750', 'Lunch', 'no', 'no', 'August 2026.', 'hime_bento'),
      it('', '', 'Senzanki, 15 pieces', '¥1,309', 'Fried chicken', 'no', 'no', 'July 2026.', 'senzanki_15'),
      it('じゃこ天', '', 'Jakoten (fried fish cake)', '¥100', 'Small dishes', 'no', 'no', 'July 2026 (lunch).', 'jakoten'),
    ] }, {
    cuisine: '愛媛の郷土料理と唐揚げ (食べログ、口コミ)・senzanki は Imabari の唐揚げで、大きなもも肉をポン酢、ごまだれ、ごま塩で。昼は5個、15個で1,309円。白と辛い赤 (2026年)・昼の定食: Nanyo の tai-meshi、鯛と卵とだしをごはんに990円。senzanki の小の定食950円。辛い赤の定食990円。唐揚げとチャーシュー丼の媛弁当750円。チャーシューと卵の丼。日替わり (2026年)・じゃこ天は揚げたてで、夜は495円のお通し、昼は100円。鯛の煮付け、鯛茶漬け、アジフライ、レモンとアンチョビのキャベツ (2026年)・senzanki を頼むとハイボールとチューハイが299円。コースなしの飲み放題。栗焼酎、Pon juice (2026年)',
    neighborhood: '西中島4-8-15 メゾンリーフ 1F、阪急南方駅か西中島南方駅から西へ5分、新大阪から10分足らず (食べログ、2026年7月)',
    gf_detail: 'グルテンフリーではありません。衣の唐揚げ、じゃこ天、魚のフライ。tai-meshi は醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。唐揚げ、魚、だしばかり。',
    notes: '[居酒屋・西中島南方、愛媛の料理と Imabari の大きな唐揚げ] 西中島南方の西5分、70席の愛媛料理の店で、近くに3軒ある「媛」の1号店。主役は Imabari の唐揚げ senzanki で、大きなもも肉。昼は5個の定食が約950〜990円、またはNanyo の tai-meshi、鯛と卵にだしをかけたごはん (2026年)。夜は揚げたてのじゃこ天がお通しで、senzanki を頼むとハイボールが299円、コースなしで飲み放題も。接客はあっさりめ。昼も夜も。23時まで、金曜は深夜0時まで。日曜休み。',
  });
}

save();
