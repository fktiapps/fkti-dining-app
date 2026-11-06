// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 33.
//   + ラ ファミーユ モリナガ La famille Morinaga (Masahiro Morinaga's French course in a Shinmachi machiya, couple-run)
//   + ネオパスタヤマウチ Neo Pasta Yamauchi (fresh pasta with Kyoto flavours near Karasuma Oike)
//   + はしたて Hashitate (Wakuden's noodle-and-rice-bowl restaurant at JR Kyoto Isetan)
//   + 満寿形屋 Masugataya (saba sushi and udon in the Demachi shopping street)
//   - 辻留 京都伊勢丹店 (26002802): skipped (reason below).
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 200`, lane ids 26022098, 26038442; from `next notable
//   200`: 26002802 (skipped), 26006654, 26002790. None is in data/kyoto.json by name (モリナガ/Morinaga, ヤマウチ/Yamauchi,
//   はしたて/Hashitate, 満寿形屋/Masugataya) or address (不動町175-5, 観音町85-1, 東塩小路町901 伊勢丹 3F, 二神町179 —
//   いのうえの餃子 shares 二神町179, a different shop).
//   Same-name count (same brand or operator only): モリナガ, ヤマウチ, 満寿形屋 single shops. はしたて is a different concept
//   from 和久傳 (Wakuden), whose 室町和久傳 kaiseki is in data; only one はしたて found (official Wakuden page) — drafted
//   as a sister concept, flagged.
//   Service charges, checked against Tabelog's Japanese original: モリナガ サービス料なし. Others none listed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-33');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26002802', '辻留 京都伊勢丹店: not a shop of its own — Tsujitome bento sold at the B2F 老舗･名店弁当コーナー of JR Kyoto Isetan (reviewers: “the well-established bento corner on the B2F floor”, March 2021), the multi-maker counter skipped as 26022146; the newest review is March 2024; flagged for the coordinator');

// ================================================================ ラ ファミーユ モリナガ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26022098/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://famille-morinaga.jp/jpn/reservations/index.html';
  const H = day(['11:30', '14:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_la_famille_morinaga', name: 'ラ ファミーユ モリナガ (La famille Morinaga)', category: 'MOM_AND_POP',
    lat: 35.005888, lng: 135.755857, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses only; homemade bread of Hokkaido and French flour served with every course; dishes include gratins, quenelles and fried items (2023–2026 reviews). The shop asks guests to mention disliked foods and allergies when booking (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set French courses of fish, foie gras, game and beef, with butter and cream; some dishes use dashi (2023–2026 reviews).',
    hours_raw: 'Lunch 11:30–14:30 (L.O. 13:00), dinner 18:00–22:00 (L.O. 19:30), Tuesday–Saturday; closed Sunday and Monday, when private hire for 8–12 is possible from ¥8,500 a head (official site; Tabelog). Courses only; tell the shop about disliked foods or allergies when booking (official site). Reservations by phone or online; parties of 5 or more and the private room by phone (official site). No service charge (Tabelog, original サービス料なし). Cards (JCB, AMEX, Diners per Tabelog; the site says cards accepted). No children under 12 except with private hire — consult the shop (Tabelog; official site). Smart casual recommended (Tabelog). No flash or noisy photography; non-smoking (official site). 12 table seats on the ground floor, a private room for 4–6 upstairs (Tabelog). In a renovated machiya off Shinmachi on Takoyakushi, 10 min from Hankyu Karasuma Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takoyakushi west of Shinmachi — 10 min from Hankyu Karasuma Stn',
    cuisine: 'French, a single daily-changing seasonal course at lunch and dinner (Tabelog shop text) · dinner course ¥12,000 with no service charge: Ohara leek mousse with botan shrimp, kanpachi with green-olive sauce, a terrine of Kurobuta, Ezo deer and duck, butternut soup with autumn truffle, homemade bread (September 2023) · winter: crab quenelle, oyster confit, foie gras with fava beans, game pâté, cod milt with truffle cream and Shogoin turnip broth, Australian beef tenderloin, baked apple sabayon (January 2025) · summer: hamachi and fennel gazpacho, foie gras risotto, pan-seared amadai, roast lamb, coconut blancmange; course with pairing about ¥24,000 (July 2025) · lunch omakase: yellowtail carpaccio, hamo with risotto and kombu sauce, wild sea bream with brown butter and sherry vinegar, Fairford beef sirloin, chestnut Mont Blanc (October 2025) · touches of dashi and sansho (July 2024); bread from dough rested two days (October 2025)',
    website: 'http://famille-morinaga.jp/jpn/', gmaps: gm('ラ ファミーユ モリナガ 京都'), menu_url: null,
    notes: '[French · Shinmachi, a family restaurant in a machiya] A warm little French restaurant in a renovated old machiya with a white-gravel garden, run by chef Masahiro Morinaga — trained at Chez Ino in Tokyo and in France, later executive chef at Mikuni Nagoya and Grand Maison Graciani in Kobe — as a family restaurant. One daily course of Kyoto-seasonal French with homemade bread; dinner about ¥12,000, no service charge. No children under 12; smart casual.',
    chef_bio: { chef_name: 'Masahiro Morinaga', roles: ['Owner-chef'], origin: null,
      background: 'Per an October 2025 review: drawn to cooking by a love of food and a family restaurant background; graduated from a Kyoto culinary school; trained six years at “Chez Ino” in Tokyo under Akira Inoue; in France from 1993 at Guy Savoy (Paris), a Bordeaux restaurant, Troisgros (Roanne) and a Swiss restaurant; back in Japan in 1997; executive chef of “Mikuni Nagoya” at the Nagoya Marriott Associa from 2003, then of “Grand Maison Graciani” in Kobe; opened La famille Morinaga in Kyoto in 2013. Tabelog’s shop text confirms Chez Ino, a three-Michelin-star restaurant in France and Grand Maison Graciani. The name, “the Morinaga family”, was inspired by the Troisgros family (October 2025). A June 2026 diner found “the couple running the place exude warmth”.',
      philosophy: 'A warm family restaurant passed down like Troisgros (October 2025); fresh seasonal ingredients in a single daily course (Tabelog shop text).', specialty: 'Seasonal French course; homemade bread.',
      anecdotes: [
        { text: 'A September 2023 diner noted the bread: Hokkaido wheat blended with French flour and Guérande salt.', source: R + 'B472361654/' },
        { text: 'A June 2026 lunch guest was served corn soup with corn sorbet and truffle-scented popcorn hidden under the bowl.', source: R + 'B531318485/' },
      ],
      japanese_sources_summary: '公式サイト: La famille Morinaga、ランチ11:30〜14:30 (L.O.13:00)、ディナー18:00〜22:00 (L.O.19:30)、日・月定休 (貸切は8〜12名、1人8,500円から)、料理はコースのみで苦手な食材やアレルギーは事前に、全席禁煙、フラッシュや音の出る撮影はお断り、子どもは相談、カード可。食べログ: フレンチ、中京区蛸薬師通新町西入不動町175-5、阪急烏丸駅から徒歩10分、サービス料なし、1階テーブル12席・2階個室4〜6名、12歳未満は入店不可 (貸切なら可)、スマートカジュアル、店の紹介: 東京の Chez Ino とフランスの三つ星で修業し、神戸の Grand Maison Graciani の総料理長を務めたシェフ、日替わりのコースのみ。口コミ (2022〜2026年、英語): シェフ Masahiro Morinaga、1993年に渡仏、2013年に開店、夫婦で営む、ディナー12,000円、自家製パン。',
      confidence: 'medium', sources: [SITE, TB, R + 'B458004865/', R + 'B472361654/', R + 'B481805724/', R + 'B489192363/', R + 'B490750504/', R + 'B499327584/', R + 'B500885513/', R + 'B514724821/', R + 'B528936673/', R + 'B531318485/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course only; tell the shop about allergies when booking. No children under 12 (private hire excepted); smart casual; no flash photography.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通新町西入不動町175-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.005888, 135.755857); cross-checked: GSI 京都府京都市中京区不動町175番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B472361654/', SITE],
    price_note: 'Dinner price from a September 2023 review; private-hire minimum from the official site.', last_checked: TODAY, items: [
      it('', '', 'Dinner course', '¥12,000', 'Courses', 'ask', 'no', 'September 2023, tax included, no service charge.', 'dinner_course'),
      it('', '', 'Lunch omakase course', '', 'Courses', 'ask', 'no', '2025–2026 reviews; price not given.', 'lunch_course'),
      it('', '', 'Private hire (Sun–Mon, 8–12 guests), per head from', '¥8,500', 'Private', 'ask', 'no', 'Official site.', 'private_hire'),
    ] }, {
    cuisine: 'フレンチ。昼も夜も季節の日替わりのコースだけ (食べログの店の紹介)・ディナーコース12,000円、サービス料なし: Ohara のポワローのムースと牡丹海老、カンパチのグリーンオリーブソース、黒豚とエゾ鹿と鴨のテリーヌ、バターナッツのスープと秋トリュフ、自家製パン (2023年9月)・冬: 蟹のクネル、牡蠣のコンフィ、フォアグラとそら豆、ジビエのパテ、白子のトリュフクリームとShogoin かぶらのスープ、オーストラリア産牛ヒレ、焼きりんごのサバイヨン (2025年1月)・夏: はまちとフェンネルのガスパチョ、フォアグラのリゾット、甘鯛のポワレ、仔羊のロースト、ココナッツのブランマンジェ。ペアリング付きで約24,000円 (2025年7月)・ランチのおまかせ: ぶりのカルパッチョ、鱧のリゾットと昆布のソース、天然鯛の焦がしバターとシェリービネガー、Fairford 牛のサーロイン、栗のモンブラン (2025年10月)・出汁や山椒も (2024年7月)、2日寝かせた生地のパン (2025年10月)',
    neighborhood: '新町の西の蛸薬師通。阪急烏丸駅から徒歩10分',
    gf_detail: '要確認。コースのみ。北海道産とフランス産の小麦の自家製パンが毎回付き、グラタン、クネル、揚げ物も (2023〜2026年の口コミ)。苦手な食材やアレルギーは予約時に知らせてほしいと公式サイトにある。',
    vegan_detail: 'ヴィーガンではない。魚、フォアグラ、ジビエ、牛肉にバターとクリームのフレンチのコース。出汁を使う皿も (2023〜2026年の口コミ)。',
    notes: '[フレンチ・新町、町家の家族のレストラン] 白砂利の庭のある古い町家を改装した、あたたかい小さなフレンチ。東京の Chez Ino やフランスで修業し、名古屋の Mikuni Nagoya、神戸の Grand Maison Graciani の総料理長を務めたシェフ Masahiro Morinaga が家族と営む。季節の京都の素材の日替わりのコース1本、自家製パン。ディナーは約12,000円、サービス料なし。12歳未満は不可、スマートカジュアル。',
  });
}

// ================================================================ ネオパスタヤマウチ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038442/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '20:00']);
  put({
    id: 'kyoto_neo_pasta_yamauchi', name: 'ネオパスタヤマウチ (Neo Pasta Yamauchi)', category: 'OMNI',
    lat: 35.013729, lng: 135.763244, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade fresh pasta of domestic whole-wheat flour, the noodle shape matched to each sauce (October 2025; January 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Sauces include bonito dashi, mentaiko, white-miso carbonara with bacon and hamburg steak; a Kyoto-pickle pasta and seasonal vegetable pastas exist, but the makeup of those sauces is not described (2025–2026 reviews).',
    hours_raw: '11:30–14:00 and 17:30–20:00 (Tabelog lists every day; a July 2026 reviewer mentions regular closing days — check). Reservations accepted; weekend tables can be full (July 2026). Cards, e-money and QR codes (Tabelog). 15 seats, counter and tables (Tabelog; November 2025). Non-smoking; English menu (Tabelog). On a side street near Karasuma Oike, between Karasuma Oike and Kyoto Shiyakusho-mae Stns (Tabelog). Opened 26 November 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North of Oike near Karasuma — walk from Karasuma Oike Stn',
    cuisine: 'Homemade fresh pasta of domestic whole-wheat flour, with Kyoto and Japanese flavours; noodle type and shape changed to suit each sauce (2025–2026 reviews) · mentaiko pasta with the roe served like a scoop of ice cream; set with leaf salad and black-vinegar or Japanese Caesar dressing (October 2025) · mentaiko carbonara made with white miso, with bacon paste, on wide flat noodles (January 2026) · bonito-dashi pasta with cheese and extra shiso (July 2026) · Kyoto pickle pasta; cold pasta with creamy Kamo eggplant (July 2026) · tomato-sauce pasta with hamburg steak, linguine (June–August 2026) · homemade spicy ginger ale (January 2026)',
    website: null, gmaps: gm('ネオパスタヤマウチ 京都'), menu_url: null,
    notes: '[Fresh pasta · near Karasuma Oike, Kyoto-style sauces] A small counter-and-table room making chewy fresh pasta from domestic whole-wheat flour, with the noodle shape matched to the sauce and a Kyoto accent: white-miso mentaiko carbonara, bonito-dashi pasta with shiso, Kyoto pickle pasta, Kamo eggplant in summer. Sets around ¥1,000–2,000 with salad. Portions on the small side. Solo-friendly; English menu.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers note the shop has appeared on television (May and July 2026); a July 2026 reviewer writes that it opened “about five years ago”, while Tabelog gives November 2022.',
      philosophy: 'Changing the noodle type and shape to suit the sauce (January 2026 review).', specialty: 'Fresh pasta with Kyoto flavours.',
      anecdotes: [
        { text: 'An October 2025 visitor, walking back from the Jidai Matsuri, found the room nearly full of festival-goers from Europe and America.', source: R + 'B515810425/' },
        { text: 'A July 2026 diner had kept arriving on closing days before finally getting in.', source: R + 'B531482211/' },
      ],
      japanese_sources_summary: '食べログ: ネオパスタヤマウチ、パスタ、中京区観音町85-1、烏丸御池駅・京都市役所前駅から徒歩、11:30〜14:00、17:30〜20:00、予約可、カード・電子マネー・QR可、15席、禁煙、英語メニュー、2022年11月26日オープン。口コミ (2025〜2026年、英語): 国産全粒粉の自家製生パスタ、ソースに合わせて麺を変える、白味噌の明太子カルボナーラ、鰹出汁のパスタ、京漬物のパスタ、Kamo なすの冷製パスタ、ハンバーグのトマトソース、量は少なめ、テレビで紹介。',
      confidence: 'medium', sources: [TB, R + 'B515810425/', R + 'B519199477/', R + 'B521164087/', R + 'B522064851/', R + 'B528108193/', R + 'B531123163/', R + 'B531231950/', R + 'B531482211/', R + 'B533544387/', R + 'B534159123/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); many overseas diners at festival time (October 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区観音町85-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.013729, 135.763244); cross-checked: GSI 京都府京都市中京区観音町85番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No dish prices read; reviewers spend ¥1,000–2,999.', last_checked: TODAY, items: [
      it('', '', 'Mentaiko carbonara with white miso', '', 'Pasta', 'no', 'no', 'January 2026.', 'mentaiko_carbonara'),
      it('', '', 'Bonito-dashi pasta', '', 'Pasta', 'no', 'no', 'July 2026.', 'dashi_pasta'),
      it('', '', 'Tomato-sauce pasta with hamburg steak', '', 'Pasta', 'no', 'no', 'June–August 2026.', 'hamburg_pasta'),
    ] }, {
    cuisine: '国産全粒粉の自家製生パスタ、京都や和の味。ソースに合わせて麺の種類と形を変える (2025〜2026年の口コミ)・アイスのように丸く盛った明太子のパスタ、黒酢かジャパニーズシーザーのドレッシングのサラダ付きセット (2025年10月)・白味噌を使う明太子カルボナーラ、ベーコンのペースト、幅広の麺 (2026年1月)・鰹出汁のパスタにチーズと大葉増し (2026年7月)・京漬物のパスタ、とろとろのKamo なすの冷製パスタ (2026年7月)・ハンバーグのトマトソースパスタ、リングイネ (2026年6〜8月)・自家製のスパイシージンジャーエール (2026年1月)',
    neighborhood: '御池の北、烏丸の近く。烏丸御池駅から徒歩',
    gf_detail: 'グルテンフリーではない。国産全粒粉の自家製生パスタ。ソースに合わせて麺の形を変える (2025年10月、2026年1月)。',
    vegan_detail: '要確認。鰹出汁、明太子、ベーコンの白味噌カルボナーラ、ハンバーグなどのソース。京漬物や季節の野菜のパスタもあるが中身は書かれていない (2025〜2026年の口コミ)。',
    notes: '[生パスタ・烏丸御池近く、京都らしいソース] カウンターとテーブルの小さな店。国産全粒粉のもちもちの生パスタを、ソースに合わせた麺で。白味噌の明太子カルボナーラ、鰹出汁と大葉のパスタ、京漬物のパスタ、夏はKamo なす。サラダ付きのセットで1,000〜2,000円ほど。量は少なめ。ひとりでも入りやすく、英語メニューあり。',
  });
}

// はしたて: skipped by the integrator (2026-11-06) — Wakuden sub-brand, a large parent per the brief.
skip('26006654', 'はしたて (JR Kyoto Isetan 3F): the Wakuden casual rice-bowl and noodle concept (www.wakuden.jp/ryotei/hashitate/); Wakuden is a large parent under the sub-brand ruling, so chain.');

// ================================================================ 満寿形屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26002790/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00']);
  put({
    id: 'kyoto_masugataya_demachi', name: '満寿形屋 (Masugataya)', category: 'OMNI',
    lat: 35.030219, lng: 135.76939, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon and soba in soy-based dashi; saba sushi is the one non-noodle dish, seasoning not described (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based udon and soba with kamaboko, mackerel sushi, herring soba. Tabelog’s shop note says vegetarian dishes can be prepared on request — ask.',
    hours_raw: '12:00–15:00; closed Wednesday (Tabelog); ends when sold out — staff close the line with a last group (October 2026). No reservations except for saba sushi (Tabelog). Queues from before opening; waits of 20 minutes to an hour (2026 reviews); six tables for four, no sharing — even solo diners get a table (August 2026). No cards or e-money; PayPay accepted (Tabelog; August 2026). Tabelog lists smoking as allowed (pre-2020 note). Parking at the municipal Demachi lot. In the shopping street on Masugata-dori at Demachi, 5 min from Keihan Demachiyanagi Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'the Masugata shopping street at Demachi — 5 min from Demachiyanagi Stn',
    cuisine: 'Thick saba (mackerel) sushi with udon and soba in an old-style diner (2026 reviews) · kake udon and saba sushi set ¥1,300 — thin, soft udon in a gentle, sweetish dashi with kamaboko and tororo kombu (August 2026) · kitsune udon set ¥1,500; two extra pieces of saba sushi ¥1,300 (August 2026) · matsutake and saba sushi set ¥2,500 in autumn (August 2026) · chilled bukkake udon (July 2026) · nishin (herring) soba; saba sushi ordered separately is thicker than the set’s (September 2026) · seasonal ingredients and daily specials not on the menu; local sake and shochu (Tabelog shop note)',
    website: null, gmaps: gm('満寿形屋 出町'), menu_url: null,
    notes: '[Saba sushi and udon · Demachi shopping street, lunch only] A long-running diner in the shopping street on Masugata-dori at Demachi, open only 12:00–15:00, where the line forms before noon for thick, vinegared saba sushi with a bowl of thin, soft udon in gentle Kyoto dashi (set from ¥1,300). Six tables, no sharing, slow turnover — expect to wait up to an hour; it closes the line when stock runs out. PayPay or cash. A July 2026 reviewer suggests pairing it with Futaba.',
    chef_bio: { chef_name: null, roles: ['Shop (unnamed owners)'], origin: null,
      background: 'Reviewers describe a long-established diner with a well-worn gas stove (August 2026) that prides itself on fresh saba sushi (August 2026). No owner is named in the sources read.',
      philosophy: null, specialty: 'Saba sushi; udon.',
      anecdotes: [
        { text: 'An October 2026 diner, in line at 12:30, was in the last group: staff came out, announced it, and took down the noren.', source: R + 'B537731595/' },
        { text: 'A July 2026 visitor recommended pairing the meal with Futaba.', source: R + 'B532621679/' },
      ],
      japanese_sources_summary: '食べログ: 満寿形屋、食堂・寿司・うどん、上京区桝形通出町西入ル二神町179、京阪出町柳駅から徒歩約5分、河原町今出川バス停から徒歩約3分、12:00〜15:00、水曜定休、予約不可 (鯖寿司のみ可)、カード・電子マネー不可、PayPay可、24席 (4人掛け6卓)、テイクアウト、店の案内: 季節の食材やメニューにない日替わり、ベジタリアン対応も相談可、地酒と焼酎。口コミ (2026年、英語): 厚い鯖寿司、細くやわらかいうどん、きつねうどんセット1,500円、かけうどんと鯖寿司1,300円、松茸と鯖寿司2,500円、にしんそば、開店前から行列、相席なし、売り切れで暖簾を下ろす。',
      confidence: 'medium', sources: [TB, R + 'B531183656/', R + 'B532621679/', R + 'B533121767/', R + 'B534559256/', R + 'B534614302/', R + 'B534628224/', R + 'B536363773/', R + 'B537144632/', R + 'B537444041/', R + 'B537731595/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue outside from before noon; order a set; no sharing tables. PayPay or cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区桝形通出町西入ル二神町179',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.030219, 135.769434), moved about 4 m west to 135.76939 because mp_inoue_no_gyoza (same lot 二神町179) sat 4.4 m away; now about 8 m apart; cross-checked: GSI 京都府京都市上京区二神町179番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534614302/', R + 'B533121767/'],
    price_note: 'Prices from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kake udon and saba sushi set', '¥1,300', 'Sets', 'no', 'no', 'August 2026.', 'udon_saba_set'),
      it('', '', 'Kitsune udon set', '¥1,500', 'Sets', 'no', 'no', 'August 2026.', 'kitsune_set'),
      it('', '', 'Matsutake and saba sushi set', '¥2,500', 'Sets', 'no', 'no', 'August 2026 (autumn).', 'matsutake_set'),
      it('', '', 'Extra saba sushi (2 pieces)', '¥1,300', 'Sushi', 'ask', 'no', 'August 2026.', 'saba_sushi'),
    ] }, {
    cuisine: '昔ながらの食堂の厚い鯖寿司とうどん、そば (2026年の口コミ)・かけうどんと鯖寿司のセット1,300円。細くやわらかいうどん、やさしくほんのり甘い出汁に蒲鉾ととろろ昆布 (2026年8月)・きつねうどんのセット1,500円、鯖寿司2切れ追加1,300円 (2026年8月)・秋は松茸と鯖寿司のセット2,500円 (2026年8月)・冷やしぶっかけうどん (2026年7月)・にしんそば。単品の鯖寿司はセットより厚い (2026年9月)・季節の食材やメニューにない日替わり、地酒と焼酎 (食べログの店の案内)',
    neighborhood: '出町の桝形通の商店街。出町柳駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。小麦のうどんとそばを醤油の出汁で。鯖寿司だけが麺以外の料理で、味付けは書かれていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁のうどんとそばに蒲鉾、鯖寿司、にしんそば。食べログの店の案内では、ベジタリアン向けも相談可とのこと。要確認。',
    notes: '[鯖寿司とうどん・出町の桝形通、昼だけ] 出町の桝形通の商店街にある古くからの食堂。12時〜15時だけの営業で、昼前から行列。厚い酢締めの鯖寿司と、やさしい京都の出汁の細くやわらかいうどん (セット1,300円から)。4人掛け6卓、相席なしで回転はゆっくり、1時間待つことも。売り切れで行列を締める。PayPay か現金。2026年7月の口コミは「ふたば」と一緒にとすすめる。',
  });
}

save();
