// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 47.
// Part 1 — the notable lane cleared: all ten remaining notables are chains or large-parent brands (skips below).
// Part 2 — filled to four from core, in queue order:
//   + Da.uchi Curry (sommelier-turned-chef's French-style curry near Kojinguchi; since 2022)                      [core]
//   + 丑屋 よ平 Ushiya Yohei (sukiyaki and steak rice boxes in a converted townhouse near Marutamachi; since 2020)    [core]
//   + 炭火焼肉ノぶる 大宮店 (charcoal yakiniku and offal at Shijo-Omiya; the 本店 of a two-shop pair with 西院店)       [core]
//   - 銀座ハゲ天 京都ポルタ店 — chain (hageten.com lists 18 restaurants)                                            [core]
//   + 炭火焼肉 とく Sumibi Yakiniku Toku (charcoal yakiniku and offal north of Kyoto Station)                       [core]
//   Same-name counts first: Da.uchi 0; 丑屋/よ平 0 (no other shop found on the web); ノぶる 0 — a 西院店 also exists
//   (Gurunavi), and a review calls Omiya the 本店: a 2-shop group, none in data, drafted one; とく 0.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: ノぶる 「なし」; Da.uchi, よ平 and とく have no section.
//   Pins: Da.uchi — GSI found only a town (and a different 荒神町), so loc_precise false; とく — the Tabelog point is
//   3.1 m from kyr_kaidashimen_kitada (same lot 570), so moved ~5.6 m north (7.3 m).
//   Ruling applied (2026-11-06): single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-47');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ---- Part 1: notable lane
skip('26012975', 'chain: からふね屋珈琲 had 11 shops in Kyoto, Osaka and Okayama at its 50th anniversary (JR西日本フードサービスネット press release, April 2022)');
skip('26000243', 'chain: キル フェ ボン — the Shinjuku shop opening 2026-11-28 is its 13th (press release, digitalpr.jp)');
skip('26000753', 'chain: 鼎泰豐 had 30 shops in Japan as of April 2026 (operator press release)');
skip('26021717', 'large-parent brand: エビスバー (YEBISU BAR) is a サッポロライオン chain with shops from Saitama to Nishinomiya (company press releases)');
skip('26003081', 'chain: がんこ (がんこフードサービス) ran about 100 restaurants (TV Tokyo Cambria Palace, 2018)');
skip('26025149', 'chain: ARROW TREE had five cafés and three takeaway shops across Kansai (rurubu, updated 2020-03-16)');
skip('26001809', 'chain: 聖護院八ッ橋総本店 lists 4 standalone shops plus Kyoto Station shops, tourist-site, airport and service-area outlets, beyond department-store counters (shogoin.co.jp/shop)');
skip('26032589', 'chain: 原価ビストロチーズプラス (株式会社THAN) — the Osaka Honmachi shop opening October 2026 is its 6th in Osaka city alone, with others in Tokyo, Aichi, Niigata and Nagano (press releases)');
skip('26000777', 'chain: 英國屋 is a Kansai coffee-house chain since 1961 with several Umeda shops, Namba and Shinjuku (osaka-info.jp; Tabelog; Gurunavi)');
skip('26007143', 'chain: 天下一品 had 195 shops as of September 2026 (press release)');

// ---- Part 2: core
skip('26005955', 'chain: 銀座ハゲ天 lists 18 restaurants, 14 in Kanto (hageten.com/shop)');

// ================================================================ Da.uchi Curry
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037503/'; const R = TB + 'dtlrvwlst/';
  const LEAF = 'https://www.leafkyoto.net/en/store/210605_da-uchi-curry';
  const L = day(['11:30', '15:00']);
  put({
    id: 'kyoto_da_uchi_curry', name: 'Da.uchi Curry', category: 'OMNI',
    lat: 35.021334, lng: 135.769751, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Roux-style curries from French stews, a bisque curry and a minced cutlet curry; flour use not described (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, duck, pork, chicken and shrimp curries (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Thu and Sat 11:30–15:00; Fri 11:30–15:00 and 18:00–21:00; closed Wednesday and Sunday; hours may change (Tabelog). Leaf Kyoto (June 2022) gave dinners on Friday and Saturday and said lunch ends when sold out; an August 2026 reviewer came for Friday dinner. Bookings taken (Tabelog); fills up soon after opening (April 2026 review). Cards, e-money and QR (Tabelog). 15 seats with a counter; non-smoking; children welcome (Tabelog). About 1 min from the Kojinguchi city-bus stop, 8 min from Jingu-Marutamachi Stn; coin parking nearby (Tabelog; July 2025 review).',
    hours: { 0: L, 1: L, 3: L, 4: day(['11:30', '15:00'], ['18:00', '21:00']), 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kojinguchi, west of the Kamo River — 8 min from Jingu-Marutamachi Stn',
    cuisine: 'Spice curry built on French stews by a sommelier-turned-chef (Leaf Kyoto; 2026 reviews): since a March 2026 revamp, combination plates of two to four from four curries — wagyu neck in red wine like boeuf bourguignon, sansho pork or chicken keema, red-shrimp Americaine with chicken breast, duck keema, lamb-tongue confit — with a small salad, from ¥2,000–2,400 (April and September 2026), spiced egg +¥200, eggplant and sanma biryani +¥500 (August 2026); veal and shellfish bisque curry ¥2,800 (January 2026); bonito curry with tapenade when the first bonito lands; glass of white wine ¥1,000 (2025–26 reviews)',
    website: null, gmaps: gm('Da.uchi Curry 京都'), menu_url: null,
    notes: "[French-style curry · Kojinguchi] A sommelier who became a chef makes curry from French stews: wagyu neck braised in red wine, sansho keema, red-shrimp Americaine, served two to four to a plate with salad for about ¥2,000–2,800. Wine by the glass. Lunch most days, dinner on Friday; closed Wednesday and Sunday.",
    chef_bio: { chef_name: 'Masanao Uchida', roles: ['Owner-chef (Leaf Kyoto)'], origin: null,
      background: 'A sommelier-turned-chef who served curry in a rented space for about two and a half years before fans helped open this shop on 21 April 2022 (Leaf Kyoto, June 2022; Tabelog). A September 2026 reviewer places that earlier counter in the sake bar "Sake no Nishikawa" on Marutamachi, since moved to Kawaramachi-Gojo, and describes a background in French cooking (also April 2026).',
      philosophy: 'Curry pursued as an evolution of French stewed dishes (Leaf Kyoto).',
      specialty: 'Wagyu neck curry; sansho keema.',
      anecdotes: [
        { text: 'A regular noted in March 2026 that the menu had been revamped to combination plates of four curries, and the desserts had gone.', source: R + 'B493308291/' },
        { text: 'A January 2026 visitor found the shop open just after New Year and called the ¥2,800 veal and shellfish bisque curry bold but worth it.', source: R + 'B488460561/' },
        { text: 'At a Friday dinner in August 2026 the staff suggested squeezing lime over the biryani.', source: R + 'B534546220/' },
      ],
      japanese_sources_summary: '食べログ: Da.uchi Curry、カレー、上京区荒神町120 平田ビル 1F、神宮丸太町駅から徒歩8分、市バス荒神口から徒歩1分、月・火・木・土 11:30〜15:00、金 11:30〜15:00・18:00〜21:00、水日休み、予約可、カード・電子マネー・QR 可、15席、禁煙、子ども可、ソムリエ、2022年4月21日オープン。Leaf Kyoto (2022年6月、英語): ソムリエから料理人になった Masanao Uchida が間借りで2年半カレーを出した後に開業、フランスの煮込み料理の進化形のカレー、売り切れ次第終了、金土の夜営業。口コミ (2025年5月〜2026年9月、英語): 2026年3月から4種のあいがけのみ、和牛ネックの赤ワイン煮込み、山椒のキーマ、赤海老のアメリケーヌ、鴨のキーマ、仔羊タンのコンフィ、小さなサラダとあいがけ2,000〜2,400円、スパイス卵200円、ビリヤニ500円、仔牛と甲殻類のビスクのカレー2,800円、初鰹のカレー、白ワイン1,000円、開店後すぐに満席。',
      confidence: 'medium', sources: [TB, LEAF, R + 'B465646133/', R + 'B488460561/', R + 'B493308291/', R + 'B527716741/', R + 'B528795291/', R + 'B529918066/', R + 'B532840139/', R + 'B534546220/', R + 'B535524251/', R + 'B536351532/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small owner-run shop; combination ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市上京区荒神町120 平田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.021334, 135.769751); GSI matched only a town-level 荒神町 1.7 km west, so not lot-checked; the point fits Tabelog's access note (1 min from the Kojinguchi bus stop); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528795291/', R + 'B536351532/'],
    price_note: 'Prices from April–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Small salad and combination curry', '¥2,000–2,400', 'Curry', 'ask', 'no', 'April and September 2026 reviews; some curries cost extra.', 'aikake'),
      it('', '', 'Spiced egg (topping)', '¥200', 'Toppings', 'ask', 'no', 'September 2026 review.', 'spiced_egg'),
    ] }, {
    cuisine: 'ソムリエから料理人になった店主の、フランスの煮込みを土台にしたスパイスカレー (Leaf Kyoto、2026年の口コミ): 2026年3月からは4種から2〜4種のあいがけ。赤ワインで煮込む和牛ネック (ブフ・ブルギニョンのよう)、山椒の豚か鶏のキーマ、赤海老と鶏むねのアメリケーヌ、鴨のキーマ、仔羊タンのコンフィ。小さなサラダ付きで2,000〜2,400円 (2026年4月・9月)、スパイス卵 +200円、なすとさんまのビリヤニ +500円 (2026年8月)。仔牛と甲殻類のビスクのカレー2,800円 (2026年1月)、初鰹の季節の鰹とタプナードのカレー、グラスの白ワイン1,000円 (2025〜26年の口コミ)',
    neighborhood: '荒神口、鴨川の西。神宮丸太町駅から徒歩8分',
    gf_detail: '要確認。フランスの煮込みのルウのカレー、ビスクのカレー、メンチカツのカレー。小麦の使用は不明 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛、鴨、豚、鶏、海老のカレー (2025〜26年の口コミ)。',
    notes: '[フレンチ仕立てのカレー・荒神口] ソムリエから料理人になった店主が、フランスの煮込みからカレーを作る。赤ワインで煮込む和牛ネック、山椒のキーマ、赤海老のアメリケーヌを2〜4種あいがけにし、サラダ付きで2,000〜2,800円ほど。グラスワインも。昼はほぼ毎日、夜は金曜。水日休み。',
  });
}

// ================================================================ 丑屋 よ平
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034251/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_ushiya_yohei', name: '丑屋 よ平 (Ushiya Yohei)', category: 'OMNI',
    lat: 35.017512, lng: 135.754773, cuisine_type: 'donburi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sukiyaki is cooked in a soy-based sauce (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef sukiyaki and steak with raw egg (2025–26 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:00); dinner 17:00–22:00 (last order 21:00); closed Wednesday (Tabelog). Bookings taken; walk-ins seated at a weekday 18:00 (Tabelog; December 2025 review). Cards (VISA, Master, JCB, AMEX) and PayPay (Tabelog). 20 seats in a small two-floor converted townhouse, all on tatami — two tatami rooms with tables for two, two tables for four (Tabelog; December 2025 and August 2026 reviews). English and photo menus; kids\' menu; non-smoking (Tabelog). 7–9 min west of Marutamachi Stn exit 2; 3–5 min from the Prefectural Office-mae bus stop (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'West of Karasuma-Marutamachi — 7–9 min from Marutamachi Stn',
    cuisine: 'Wagyu sukiyaki and steak served over rice in a wooden masu box, with obanzai side dishes (2025–26 reviews): "MAS" set comparing sukiyaki and steak boxes ¥2,800 (December 2025); thick-cut sukiyaki box ¥3,000, raw egg +¥200 (August 2026); steak box with salt and ponzu; sukiyaki gozen at lunch in regular, premium (strip loin and chuck eye roll) and special grades; sukiyaki hot pot with red konjac; sukiyaki course ¥5,500 (January 2026); sake, shochu and wine (Tabelog)',
    website: null, gmaps: gm('丑屋 よ平 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Sukiyaki & steak boxes · Marutamachi] A small two-floor townhouse with tatami rooms serving wagyu sukiyaki and steak over rice in wooden boxes, with a set of four obanzai and plenty of condiments: about ¥2,800–3,000 at lunch, a sukiyaki course ¥5,500. English menu. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 1 June 2020 (Tabelog).',
      philosophy: null, specialty: 'Sukiyaki and steak rice boxes.',
      anecdotes: [
        { text: 'A December 2025 walk-in got extra sukiyaki meat for following the shop on Instagram, and was given a breath mint on leaving.', source: R + 'B519837043/' },
        { text: 'A January 2026 business traveller returned for the ¥5,500 sukiyaki course and planned to bring clients next time.', source: R + 'B521310895/' },
        { text: 'An August 2026 regular found the thick-cut sukiyaki box delicious but wished the meat could be increased.', source: R + 'B518193639/' },
      ],
      japanese_sources_summary: '食べログ: 丑屋 よ平、すき焼き・丼、中京区横鍛冶町117、地下鉄丸太町駅2番出口から西へ徒歩7〜9分、昼 11:30〜15:00 (L.O. 14:00)、夜 17:00〜22:00 (L.O. 21:00)、水曜休み、予約可、カード・PayPay 可、20席 (座敷のテーブル2名×2室、4名テーブル2)、禁煙、英語メニュー、写真メニュー、お子様メニュー、一軒家レストラン、2020年6月1日オープン。口コミ (2025年11月〜2026年10月、英語): 古民家を改装した小さな2階建て、全席座敷、枡に盛るすき焼きとステーキの重、食べ比べの MAS のセット2,800円、厚切りすき焼き重3,000円と生卵200円、塩とポン酢のステーキ重、昼のすき焼き御膳 (並・上・特上)、すき焼き鍋と赤こんにゃく、すき焼きコース5,500円、4品のおばんざい、薬味が豊富、Instagram のフォローで肉の追加、帰りに口直しの飴。',
      confidence: 'medium', sources: [TB, R + 'B516721755/', R + 'B518193639/', R + 'B519299327/', R + 'B519837043/', R + 'B519975766/', R + 'B521310895/', R + 'B524686899/', R + 'B532413460/', R + 'B533195310/', R + 'B537976260/'] },
    cultural_comfort: { level: 'english', note: 'English menu; tatami seating throughout.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区横鍛冶町117',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017512, 135.754773); cross-checked: GSI 京都府京都市中京区横鍛冶町117番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519837043/', R + 'B518193639/', R + 'B521310895/'],
    price_note: 'Prices from December 2025–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"MAS" set: sukiyaki and steak over rice, with obanzai', '¥2,800', 'Rice boxes', 'no', 'no', 'December 2025 review.', 'mas_ju'),
      it('', '', 'Sukiyaki course', '¥5,500', 'Courses', 'no', 'no', 'January 2026 review.', 'sukiyaki_course'),
    ] }, {
    cuisine: '枡に盛るご飯に和牛のすき焼きとステーキをのせ、おばんざいを添える (2025〜26年の口コミ): すき焼きとステーキを食べ比べる「MAS」のセット2,800円 (2025年12月)、厚切りすき焼き重3,000円、生卵 +200円 (2026年8月)、塩とポン酢のステーキ重、昼のすき焼き御膳は並・上 (ロースと肩ロース)・特上、赤こんにゃくのすき焼き鍋、すき焼きコース5,500円 (2026年1月)。日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '烏丸丸太町の西。丸太町駅から徒歩7〜9分',
    gf_detail: 'グルテンフリー不可。すき焼きは醤油ベースの割り下 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉のすき焼きとステーキ、生卵 (2025〜26年の口コミ)。',
    notes: '[すき焼きとステーキの重・丸太町] 座敷のある小さな2階建ての町家で、和牛のすき焼きやステーキを枡のご飯にのせ、4品のおばんざいと豊富な薬味で。昼は2,800〜3,000円ほど、すき焼きコースは5,500円。英語メニューあり。水曜休み。',
  });
}

// ================================================================ 炭火焼肉ノぶる 大宮店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26009369/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.sumibiyakinikunobull-omiya.com';
  const W = day(['17:30', '25:00']); const E = day(['17:00', '25:00']);
  put({
    id: 'kyoto_sumibi_yakiniku_nobull_omiya', name: '炭火焼肉ノぶる 大宮店 (Sumibi Yakiniku Noburu, Omiya)', category: 'OMNI',
    lat: 35.002153, lng: 135.746266, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sauce-marinated cuts, cold noodles, ramen and stew (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu and offal yakiniku restaurant (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Wed, Fri and the day before a holiday 17:30–1:00; Sat, Sun and holidays 17:00–1:00; last order 24:00, last entry 23:30; closed Thursday and the third Wednesday (Tabelog). Bookings taken; often full (Tabelog; May 2026 review). Service charge: Tabelog\'s Japanese original says 「なし」 (none). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 14 seats: a counter of 6 and 8 at tables; non-smoking; children welcome (Tabelog). A sister shop, 炭火焼肉ノぶる 西院店, is in Ukyo-ku (Gurunavi). 5 min from Hankyu Omiya and Randen Shijo-Omiya Stns (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Mibu, south-west of Shijo-Omiya — 5 min from Omiya Stn',
    cuisine: 'Charcoal-grilled wagyu and offal (Tabelog; 2025–26 reviews): chire (spleen) sashimi, thick-cut tongue, a special three-cut platter (Spencer roll, sirloin cap, top sirloin), premium outside skirt, lean grilled shabu, mountain-chain tripe, tracheal cartilage, liver with sauce; choregi salad, perilla leaves, kimchi, namul, oxtail soup; bibimbap, gukbap, yukgaejang ramen, curry and beef stew; small portions so you can try many (2025–26 reviews)',
    website: SITE, gmaps: gm('炭火焼肉ノぶる 大宮店'), menu_url: TB + 'dtlmenu/',
    notes: "[Charcoal yakiniku · Shijo-Omiya] A small, calm counter-and-tables yakiniku house grilling wagyu and offal over charcoal: spleen sashimi, thick tongue, a three-cut special platter, and yukgaejang ramen or stew to finish. About ¥6,000–8,000. Open till 1:00; closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'The Omiya shop; a 西院店 also runs in Ukyo-ku (Gurunavi), and a review of that shop calls Omiya the 本店. An August 2025 reviewer saw what seemed to be one person in the kitchen, with quick service.',
      philosophy: 'High-quality wagyu from across Japan, cut by a skilled chef to bring out the meat (shop text quoted in a March 2025 review).',
      specialty: 'Chire sashimi; charcoal-grilled wagyu.',
      anecdotes: [
        { text: 'A May 2026 diner returning after a year found the place full but the service attentive.', source: R + 'B505231877/' },
        { text: 'A June 2026 fan called the sashimi the best in Kyoto and insisted on finishing with the ramen.', source: R + 'B501015439/' },
        { text: 'A May 2026 neighbour found the tongue a bit firm and the portions small, but liked how the charcoal lets the fat drip away.', source: R + 'B527836585/' },
      ],
      japanese_sources_summary: '食べログ: 炭火焼肉ノぶる 大宮店、焼肉・居酒屋・韓国料理、中京区壬生賀陽御所町27-5、阪急大宮駅・嵐電四条大宮駅から徒歩5分、月・火・水・金・祝前日 17:30〜翌1:00、土日祝 17:00〜翌1:00 (L.O. 24:00、最終入店23:30)、木曜・第3水曜休み、予約可、サービス料なし、カード可、電子マネー・QR 不可、14席 (カウンター6、テーブル8)、禁煙、子ども可、飲み放題、隠れ家、一軒家レストラン。ぐるなび: 西院店 (右京区)。口コミ (2025年3月〜2026年10月、英語): 炭火の黒毛和牛、チレ刺し、厚切りタン、特製三種盛り、上ハラミ、赤身の焼きしゃぶ、ミノ、気管軟骨、チョレギサラダ、えごまの葉、キムチ、ナムル、テールスープ、ビビンバ、クッパ、ユッケジャンラーメン、カレー、ビーフシチュー、少量ずつ頼める、厨房は一人のようだという声。',
      confidence: 'medium', sources: [TB, SITE, 'https://r.gnavi.co.jp/kbbp601/', R + 'B501015439/', R + 'B503184527/', R + 'B505231877/', R + 'B512954590/', R + 'B527836585/', R + 'B538224939/', R + 'B493267448/', R + 'B475739020/'] },
    cultural_comfort: { level: 'japanese', note: 'Small yakiniku counter; offal-heavy menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区壬生賀陽御所町27-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002153, 135.746266); cross-checked: GSI 京都府京都市中京区壬生賀陽御所町27番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538224939/'],
    price_note: 'No current menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Special three-cut platter (Spencer roll, sirloin cap, top sirloin)', '', 'Yakiniku', 'ask', 'no', 'October 2026 review.', 'tokusei_sanshu'),
      it('', '', 'Chire (spleen) sashimi', '', 'Sashimi', 'ask', 'no', '2025 reviews.', 'chire_sashi'),
    ] }, {
    cuisine: '炭火で焼く和牛とホルモン (食べログ、2025〜26年の口コミ): チレ刺し、厚切りタン、特製三種盛り、上ハラミ、赤身の焼きしゃぶ、ミノ、気管軟骨、たれのレバー。チョレギサラダ、えごまの葉、キムチ、ナムル、テールスープ。ビビンバ、クッパ、ユッケジャンラーメン、カレー、ビーフシチュー。少量ずつ色々頼める (2025〜26年の口コミ)',
    neighborhood: '壬生、四条大宮の南西。大宮駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。たれの肉、冷麺、ラーメン、シチュー (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛とホルモンの焼肉店 (2025〜26年の口コミ)。',
    notes: '[炭火焼肉・四条大宮] カウンターとテーブルの小さく落ち着いた焼肉店。炭火で和牛とホルモンを焼く。チレ刺し、厚切りタン、特製三種盛り、締めのユッケジャンラーメンやシチュー。6千〜8千円ほど。深夜1時まで。木曜休み。',
  });
}

// ================================================================ 炭火焼肉 とく
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26010107/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '24:00']);
  put({
    id: 'kyoto_sumibi_yakiniku_toku', name: '炭火焼肉 とく (Sumibi Yakiniku Toku)', category: 'OMNI',
    lat: 34.987339, lng: 135.754795, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: marinated meats in jars and sauce-seasoned offal (July 2025 review; Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef and offal yakiniku restaurant (Tabelog).',
    hours_raw: 'Daily 17:00–24:00 (last order 23:00); irregular closures (Tabelog). Bookings taken; walk-ins got in just after opening (Tabelog; March 2026 review). No credit cards (Tabelog). 20 seats: a counter of 8 and 12–18 at tables; smoking allowed; takeaway (Tabelog). Meat grilled on a shichirin (August 2026 review). 5 min from Kyoto Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'North of Kyoto Station (Shiokoji side) — 5 min from Kyoto Stn',
    cuisine: 'Charcoal-grilled meat and offal (Tabelog): the shop\'s Tabelog list prices hosomoto ¥590, akasen ¥680, jo-mino ¥850, hachinosu ¥680, urute ¥680, a three-kind offal platter ¥1,200, salted tongue ¥890, wagyu thick-cut tongue ¥1,480, wagyu kalbi from ¥950, wagyu harami from ¥1,180; tendon, premium tripe, outside skirt and tongue; boiled cabbage and marinated meat in jars to go with drinks (2025–26 reviews); shochu a focus (Tabelog)',
    website: null, gmaps: gm('炭火焼肉 とく 京都駅'), menu_url: TB + 'dtlmenu/',
    notes: "[Charcoal yakiniku & offal · Kyoto Station] A small, easy-to-enter yakiniku and horumon spot a few minutes north of Kyoto Station: offal cuts from about ¥600, wagyu kalbi and harami from about ¥1,000, grilled on a shichirin. About ¥4,000–6,000. No credit cards; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'The shop\'s Tabelog text (machine-translated) says the charcoal-grilled dishes are made by a chef with a French background.',
      philosophy: 'Carefully selected meat and offal over charcoal (Tabelog).',
      specialty: 'Offal; wagyu tongue.',
      anecdotes: [
        { text: 'A July 2025 diner found it easy to get into among the many places near Kyoto Station, and liked the boiled cabbage on its own.', source: R + 'B510244579/' },
        { text: 'A March 2026 walk-in was seated just after opening and called the tendon great value.', source: R + 'B524271281/' },
      ],
      japanese_sources_summary: '食べログ: 炭火焼肉 とく、焼肉・ホルモン・居酒屋、下京区北不動堂町570-3、京都駅から徒歩5分、毎日 17:00〜24:00 (L.O. 23:00)、不定休、予約可、カード不可、20席 (カウンター8、テーブル12〜18)、喫煙可、テイクアウト可、焼酎にこだわる、炭火焼肉とホルモンの店。店のおすすめ (英訳): ホソ590円、赤セン680円、上ミノ850円、ハチノス680円、ウルテ680円、ホルモン3種盛り1,200円、塩タン890円、和牛厚切りタン1,480円、和牛カルビ950円から、和牛ハラミ1,180円から。口コミ (2025年7月〜2026年8月、英語): 京都駅近くでも入りやすい、茹でキャベツ、壺漬けの肉、スジ、上ミノ、上ハラミ、上タン、七輪。',
      confidence: 'low', sources: [TB, R + 'B510244579/', R + 'B524271281/', R + 'B534014618/', R + 'B474105647/', R + 'B467188296/', R + 'B464711715/'] },
    cultural_comfort: { level: 'japanese', note: 'Offal-heavy menu; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区北不動堂町570-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.987289, 135.754795) is 3.1 m from kyr_kaidashimen_kitada (same lot 570), so moved ~5.6 m north to 34.987339 (7.3 m from it); cross-checked: GSI 京都府京都市下京区北不動堂町570番地 (lot) 72m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Prices from the shop\'s Tabelog text (undated).', last_checked: TODAY, items: [
      it('', '', 'Offal platter, 3 kinds', '¥1,200', 'Offal', 'ask', 'no', 'Tabelog shop text.', 'horumon_mori'),
      it('', '', 'Wagyu thick-cut tongue', '¥1,480', 'Wagyu', 'ask', 'no', 'Tabelog shop text.', 'atsugiri_tan'),
    ] }, {
    cuisine: '炭火の焼肉とホルモン (食べログ): 店のおすすめはホソ590円、赤セン680円、上ミノ850円、ハチノス680円、ウルテ680円、ホルモン3種盛り1,200円、塩タン890円、和牛厚切りタン1,480円、和牛カルビ950円から、和牛ハラミ1,180円から。スジ、上ミノ、ハラミ、タン。茹でキャベツや壺漬けの肉は酒に合う (2025〜26年の口コミ)。焼酎にこだわる (食べログ)',
    neighborhood: '京都駅の北、塩小路側。京都駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。壺漬けの肉、たれのホルモン (2025年7月の口コミ、食べログ)。',
    vegan_detail: 'ヴィーガン不可。牛肉とホルモンの焼肉店 (食べログ)。',
    notes: '[炭火焼肉とホルモン・京都駅] 京都駅の北、数分の入りやすい小さな焼肉・ホルモンの店。ホルモンは600円ほどから、和牛のカルビやハラミは1,000円ほどから、七輪で焼く。4千〜6千円ほど。クレジットカード不可。喫煙可。',
  });
}

save();
