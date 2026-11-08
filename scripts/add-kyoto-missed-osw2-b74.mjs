// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 74.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   + 花の井 Hana no I (menu-less Gion sushi counter south of Shijo; omakase sashimi, saikyo-yaki and Kansai-style nigiri)
//   + 祇園 牛あかり Gion Ushi Akari (charcoal-grill wagyu kappo around purebred Tajima-line Manyo beef; opened July 2026; Fukui-born chef)
//   + 津田楼 Tsudaro (kaiseki and bar in a Taisho-era ochaya on Hanamikoji; own company 合同会社津田樓)
//   + 山とみ Yamatomi (the old Pontocho oden izakaya, reopened at Yanagibaba-Rokkaku)
//   None of the four is in data/kyoto.json, hidden records included: grep by id, name and address. Brand names grepped in queue-status.jsonl: none.
//   Operators: 牛あかり — no parent found (TableCheck, tabiiro, web search; single shop); 津田楼 — invoice T5130003002950 = 合同会社津田樓 at the
//   shop's own address; 山とみ — official site, one shop (the /marunouchi link on it is template code, not a branch).
//   Service charges: 牛あかり 10% (Tabelog; TableCheck prices exclude service); 津田楼 10% included in prices (Tabelog), bar charge ¥2,000+ plus 10%
//   service and tax (official site).
//   Pins: Tabelog /en/ point, cross-checked with GSI; 花の井 and 津田楼 sit on the very large lot 祇園町南側570, whose GSI point is 164–216 m away, so
//   both are marked approximate; 牛あかり moved 1 m and 山とみ 1 m to clear neighbours (8.5 m, 8.1 m); each now 9 m+ from every pin on main,
//   hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-74');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 花の井
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000247/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_hananoi_sushi_gion', name: '花の井 (Hana no I)', category: 'OMNI',
    lat: 35.00167012787625, lng: 135.77428301031864, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi, sashimi and grilled fish with soy and saikyo miso; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi restaurant built on fish and shellfish (Tabelog; reviews).',
    hours_raw: '17:00–23:00 Tuesday–Sunday; closed Monday; closes early when the day’s fish runs out (Tabelog). No printed menu — say what you would like, or take the omakase (April 2024; April and October 2025). Reservations taken; the counter can be fully booked (Tabelog; August 2026). Cards (JCB, AMEX, Diners) accepted; no e-money (Tabelog). Counter, a tatami room and private rooms for 4 and 6; non-smoking (Tabelog). On the south side of Gion near Hanamikoji (Tabelog; 2021 and 2026 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion south of Shijo, near Hanamikoji',
    cuisine: 'Sushi counter with no menu: name the fish you fancy or take the omakase (April 2024; 2025) · sashimi platters; sawara and black cod grilled with saikyo miso; crab; dobin-mushi (2024–2025) · nigiri of sea bream, sawara, kisu, squid, scallop, sea urchin, kuruma prawn and chu-toro, tekka and uni-ika rolls, on lightly sweet rice-vinegar shari (October 2025) · Kyoto octopus; white-miso soup; eel (2024–2026) · about ¥10,000–15,000 a head (Tabelog review average)',
    website: null, gmaps: gm('花の井 祇園 寿司'), menu_url: TB,
    notes: "[Sushi · Gion south, no-menu counter] A calm, old-style Gion sushi counter with no menu: ask for what you like or go omakase — sashimi, saikyo-miso grilled fish, then light, Kansai-style nigiri. The chef speaks English; private rooms too. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'A Gion sushi restaurant reviewed since 2014 (Tabelog). Reviewers (2021–2026) describe a calm counter much used by regulars, a friendly chef who speaks English, and the chef’s cheerful mother in the dining room.',
      philosophy: null,
      specialty: 'Omakase sashimi, saikyo-yaki and nigiri.',
      anecdotes: [
        { text: 'An April 2025 regular noted the English-speaking chef and the foreign guests at the counter.', source: R + 'B504624893/' },
        { text: 'A May 2024 diner who had never liked eel could not put down the chopsticks here.', source: R + 'B488659336/' },
        { text: 'An August 2026 first-timer was seated in the back private room; the counter was already full.', source: R + 'B533901320/' },
      ],
      japanese_sources_summary: '食べログ: 花の井、寿司・日本料理、京都市東山区祇園町南側570-120-4、火〜日 17:00〜23:00、月曜定休、ネタがなくなり次第閉店、カード可 (JCB、AMEX、Diners)、電子マネー不可、カウンター・座敷・個室 (4名、6名)、禁煙、予算10,000〜15,000円ほど。口コミ (2014〜2026年、英語): メニューのない寿司屋で食べたいものを伝えるかおまかせ、刺身の盛り合わせ、鰆や銀だらの西京焼き、蟹、土瓶蒸し、鯛・鰆・鱚・烏賊・帆立・雲丹・車海老・中トロの握り、鉄火巻と雲丹烏賊巻、米酢のやさしい甘さのシャリ、京都の蛸、白味噌の味噌汁、鰻、英語を話す大将、明るいお母さん、常連の多い落ち着いた店、カウンターは予約で満席のことも。',
      confidence: 'low', sources: [TB, R + 'B477490227/', R + 'B482298048/', R + 'B484186420/', R + 'B488659336/', R + 'B504624893/', R + 'B515441206/', R + 'B517595173/', R + 'B531849212/', R + 'B533901320/'] },
    cultural_comfort: { level: 'english', note: 'The chef speaks English (April 2025 review); no printed menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-120-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001670, 135.774283); GSI 京都府京都市東山区祇園町南側570番地 (lot) 216m — a very large lot, so marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or item prices; Tabelog review average ¥10,000–15,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Omakase (sashimi, grilled fish, nigiri)', '', 'Omakase', 'ask', 'no', 'No printed menu.', 'omakase'),
      it('', '', 'Grilled fish with saikyo miso', '', 'Grilled', 'ask', 'no', '', 'saikyo'),
      it('', '', 'Grilled eel', '', 'Grilled', 'ask', 'no', '', 'eel'),
    ] }, {
    cuisine: 'メニューのない寿司のカウンター。食べたい魚を伝えるかおまかせで (2024年4月、2025年)・刺身の盛り合わせ、鰆や銀だらの西京焼き、蟹、土瓶蒸し (2024〜2025年)・鯛、鰆、鱚、烏賊、帆立、雲丹、車海老、中トロの握り、鉄火巻と雲丹烏賊巻、米酢のやさしい甘さのシャリ (2025年10月)・京都の蛸、白味噌の味噌汁、鰻 (2024〜2026年)・1人10,000〜15,000円ほど (食べログの口コミの平均)',
    neighborhood: '祇園の四条の南、花見小路の近く',
    gf_detail: '要確認。醤油や西京味噌を使う寿司、刺身、焼き魚。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介の寿司屋 (食べログ、口コミ)。',
    notes: '[寿司・祇園の南、メニューのないカウンター] 落ち着いた昔ながらの祇園の寿司屋。メニューはなく、好みを伝えるかおまかせで、刺身、西京焼き、そしてあっさりした関西風の握り。大将は英語が話せ、個室もある。月曜休み。',
  });
}

// ================================================================ 祇園 牛あかり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26045355/'; const R = TB + 'dtlrvwlst/';
  const TC = 'https://www.tablecheck.com/en/gion-ushiakari'; const TI = 'https://tabiiro.jp/gourmet/s/316686-kyoto-ushiakari/';
  const H = day(['11:00', '14:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_gion_ushi_akari', name: '祇園 牛あかり (Gion Ushi Akari)', category: 'OMNI',
    lat: 35.005203, lng: 135.774382, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled wagyu with sauces and dashi; the courses include Echizen soba and a steak sandwich; no gluten information is published (tabiiro menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu restaurant (Tabelog; official listings).',
    hours_raw: '11:00–14:00 and 18:00–23:00 Monday–Saturday and holidays; closed Sunday and the first and third Monday of the month; holiday hours may vary (Tabelog). Opened 22 July 2026 (Tabelog review). Reservations by phone or TableCheck (Tabelog; TableCheck). Cards including UnionPay accepted; no e-money or QR (Tabelog). 10% service charge (Tabelog). 14 seats: an 8-seat counter and a private room for 2–6; non-smoking; English menu and English-speaking staff; children welcome (Tabelog). On the ground floor of the Gion Shirakawa HK Building, Sueyoshi-cho (tabiiro).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Sueyoshi-cho near Shirakawa',
    cuisine: 'Charcoal-grill meat kappo built on purebred Tajima-line Manyo beef raised in Tottori, sliced at the counter (tabiiro; reviews) · courses ¥16,500 (Gion AKI), ¥22,000 (Manyo ribeye) and ¥38,500 (Manyo fillet), service extra (TableCheck) · à la carte Manyo sirloin ¥8,500, fillet ¥14,500, chateaubriand ¥20,000 per 100 g; tongue, harami, Kyo-kurenai chicken; Manyo steak sandwich ¥3,500 (tabiiro) · Fukui produce from the chef’s home prefecture: sweet shrimp, Echizen ju-wari oroshi soba ¥1,800 (tabiiro; August 2026) · lunch around ¥3,000 (August 2026 reviews)',
    website: null, gmaps: gm('祇園 牛あかり'), menu_url: TI,
    notes: "[Wagyu · Gion Shirakawa, charcoal-grill meat kappo] A new (July 2026) machiya counter where rare Manyo beef is cut in front of you and grilled over charcoal, with Fukui sweet shrimp and Echizen soba from the chef’s home prefecture. Dinner courses from ¥16,500; lunch from about ¥3,000. English menu; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: 'Fukui Prefecture (tabiiro; TableCheck)',
      background: 'Opened in Gion on 22 July 2026 (Tabelog review). A cook from Fukui Prefecture who has worked with wagyu for many years (tabiiro); an October 2026 reviewer puts it at 25 years. The representative visits the producers and buys Manyo beef through a long relationship with HANAFUSA in Tottori (tabiiro).',
      philosophy: 'To bring the good food and sake of Fukui to Kyoto, and to "light up the beef", as the name says (tabiiro; August 2026 review).',
      specialty: 'Charcoal-grilled Manyo beef.',
      anecdotes: [
        { text: 'A July 2026 opening-week guest was sent home with onigiri made from the leftover clay-pot rice.', source: R + 'B532258399/' },
        { text: 'An August 2026 food blogger listed a ¥22,000 Manyo sirloin course ending in clay-pot rice with beef tendon and Tanba beans.', source: R + 'B533135302/' },
        { text: 'An October 2026 celebration in the private room came with a cake, a bouquet and a Polaroid.', source: R + 'B538170857/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 牛あかり、ステーキ・海鮮・肉料理、京都市東山区末吉町82-7、月〜土・祝日・祝前日・祝日の翌日 11:00〜14:00、18:00〜23:00、日曜定休、第1・第3月曜休み、祝日と祝前日は営業時間が変わることも、カード可 (銀聯も)、電子マネー・QR決済不可、サービス料10%、14席 (カウンター8席、個室1室 2〜6名)、禁煙、英語メニュー・英語の話せるスタッフ、子供可。旅色: 祇園白川HKビル1F、純血但馬血統の万葉牛を主役にした肉割烹、鳥取の HANAFUSA から仕入れ、代表が生産地へ足を運ぶ、長年和牛と向き合ってきた職人、六鍋製の特注炉の炭火焼き、福井県出身の料理人で福井の食材と日本酒、福井越前の十割おろしそば1,800円、万葉牛のステーキサンド3,500円、万葉牛サーロイン100g 8,500円、フィレ100g 14,500円、シャトーブリアン100g 20,000円、町家の空間と個室。TableCheck: 炭火焼肉、コース16,500円・22,000円・38,500円 (サービス料別)。口コミ (2026年、英語): 2026年7月22日オープン、目の前で切り分けて炭火で焼く、タンとハラミの刺身、福井の甘海老、万葉牛サーロインのコース22,000円、土鍋ご飯、残ったご飯をおにぎりに、ランチは3,000円ほど、和牛ひと筋25年の料理人、記念日の個室。',
      confidence: 'medium', sources: [TB, TC, TI, R + 'B531993670/', R + 'B532238235/', R + 'B532258399/', R + 'B533135302/', R + 'B534526266/', R + 'B534570626/', R + 'B536416094/', R + 'B538170857/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区末吉町82-7 祇園白川HKビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog, TableCheck and tabiiro listings; opened July 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005203, 135.774371), offset ~1m to clear 鮨 なかむら (8.5m); cross-checked: GSI 京都府京都市東山区末吉町82番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TC, TI],
    price_note: 'Course prices from TableCheck (service extra) and à la carte from tabiiro (tax included), November 2026; plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Gion AKI course', '¥16,500', 'Courses', 'ask', 'no', '', 'course_aki'),
      it('', '', 'Manyo beef ribeye course', '¥22,000', 'Courses', 'ask', 'no', '', 'course_ribeye'),
      it('', '', 'Manyo beef fillet course', '¥38,500', 'Courses', 'ask', 'no', '', 'course_fillet'),
      it('万葉牛 サーロイン', '', 'Manyo beef sirloin, 100 g', '¥8,500', 'Wagyu', 'ask', 'no', '', 'sirloin'),
      it('万葉牛 ステーキサンド', '', 'Manyo beef steak sandwich', '¥3,500', 'Small plates', 'no', 'no', '', 'sando'),
      it('福井越前 十割おろしそば', '', 'Echizen ju-wari soba with grated daikon (Fukui)', '¥1,800', 'Rice and noodles', 'ask', 'ask', 'Ten-parts buckwheat; ask about the broth.', 'soba'),
    ] }, {
    cuisine: '鳥取育ちの純血但馬血統の万葉牛を主役に、目の前で切り分けて炭火で焼く肉割烹 (旅色、口コミ)・コースは16,500円 (祇園AKI)、22,000円 (万葉牛リブロース)、38,500円 (万葉牛フィレ)、サービス料別 (TableCheck)・アラカルトは万葉牛のサーロイン100g 8,500円、フィレ14,500円、シャトーブリアン20,000円、タン、ハラミ、京紅地鶏、万葉牛のステーキサンド3,500円 (旅色)・料理人の故郷福井の食材、甘海老、福井越前の十割おろしそば1,800円 (旅色、2026年8月)・ランチは3,000円ほど (2026年8月の口コミ)',
    neighborhood: '祇園、末吉町の白川の近く',
    gf_detail: '要確認。たれや出汁で食べる炭火焼きの和牛。コースに越前そばやステーキサンドも。グルテンの情報は公開されていない (旅色のメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の店 (食べログ、掲載情報)。',
    notes: '[和牛・祇園白川、炭火の肉割烹] 2026年7月開業の町家のカウンター。希少な万葉牛を目の前で切り分けて炭火で焼き、料理人の故郷福井の甘海老や越前そばも。夜のコースは16,500円から、ランチは3,000円ほどから。英語メニューあり、日曜休み。',
  });
}

// ================================================================ 津田楼
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017371/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tsudaro.com/';
  const H = day(['12:00', '14:00'], ['17:00', '24:00']);
  put({
    id: 'kyoto_tsudaro_hanamikoji', name: '津田楼 (Tsudaro)', category: 'OMNI',
    lat: 35.00223251787603, lng: 135.774691900324, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal kaiseki with dashi and soy, and wheat-gluten (fu) in some soups; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki built on fish such as hamo and dashi (reviews).',
    hours_raw: 'Lunch 12:00–14:00; dinner 17:00–19:00; bar 17:00–midnight (official site; Tabelog gives dinner 17:00–22:00 with last food order 19:00). Closed Wednesday and the third Tuesday, with further closing days posted each month on the official site — for November 2026: 4, 5, 10, 11, 17, 18, 25, 29 and 30 November (official site). Reservations by phone only, 13:00–18:00; cancellation the business day before is charged 50% (to 17:00) or 100% (official site). No under-18s at dinner (Tabelog). Bar: charge from ¥2,000 a person, plus 10% service and 10% tax; a room for the bar ¥4,000–5,000; geiko and maiko can be arranged (official site). Cards accepted; no e-money or QR; 10% service included in meal prices (Tabelog). Non-smoking throughout; counter seats, and chairs can be set in the tatami rooms on request (official site). Shoes off at the door (October 2024). On Hanamikoji south of Shijo, west side, diagonally opposite the Gion Kobu Kaburenjo (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Hanamikoji, opposite the Kaburenjo',
    cuisine: 'Seasonal kaiseki in a Taisho-era ochaya, served on Meiji–Taisho ware by Kakiemon, Imaemon and Shimizu Uichi from the owner’s collection (official site) · lunch about ¥6,600 with tax and service (October 2024) · summer hamo in soup, sashimi and simmered dishes; kamasu teriyaki; ginger and fried-tofu rice (June 2023) · sashimi platter, hassun, sushi to finish (October 2024) · a bar at the one-piece zelkova counter with wine, sake, champagne and occasional shakuhachi (official site; April 2023) · about ¥8,000–10,000 a head (Tabelog reviews)',
    website: SITE, gmaps: gm('津田楼 花見小路'), menu_url: SITE + 'dish/',
    notes: "[Kaiseki & bar · Hanamikoji, Taisho-era teahouse] A former Gion ochaya on Hanamikoji, its dance hall and courtyard intact, now serving seasonal kaiseki on antique Meiji and Taisho porcelain, with a bar at a single-plank zelkova counter till midnight. Lunch about ¥6,600. Phone to book; closed Wednesdays and other days posted monthly.",
    chef_bio: { chef_name: null, roles: ['Head chef not named; owner 村田理如 (official site)'], origin: null,
      background: 'Tsudaro ran as an ochaya from the end of the Edo period and moved to Hanamikoji in the early Taisho era; with no successor the building was at risk, and the collector 村田理如 took it on as owner in 2010, keeping it as a Gion restaurant and bar (official site). An October 2024 reviewer reports a renovation and reopening that September, with the same head chef and the chef’s wife as okami.',
      philosophy: 'To pass on Gion and Kyoto culture through all five senses — seasonal scrolls and settings, dishes on collected tableware, and ozashiki entertainment with geiko and maiko (official site).',
      specialty: 'Seasonal kaiseki on antique ware.',
      anecdotes: [
        { text: 'A January 2023 regular noticed the eel-and-catfish crest, a nod to the house’s origins supplying river fish in Yamashina.', source: R + 'B23289372/' },
        { text: 'An October 2024 couple left shoes at the noren and lunched at the first-floor counter facing the courtyard.', source: R + 'B493201086/' },
        { text: 'An April 2023 after-party drank champagne upstairs to the sound of a bamboo flute.', source: R + 'B463703364/' },
      ],
      japanese_sources_summary: '公式サイト: 津田楼、幕末よりお茶屋を営み、大正初期に花見小路へ移る、芸妓・舞妓の舞のための広い踊り場、東山三十六峰を写した欄間、酒井田柿右衛門・今泉今右衛門・清水卯一など明治から大正期の器、欅の一枚板のカウンター、花見小路四条下ル西側 祇園甲部歌舞練場斜め前、ランチ12:00〜14:00、ディナー17:00〜19:00、バー17:00〜深夜、水曜・第3火曜定休、毎月の休業日をお知らせで告知 (2026年11月は4・5・10・11・17・18・25・29・30日)、予約は電話のみ (13:00〜18:00)、前営業日17時までのキャンセルは50%、それ以降は100%、バーのチャージ1人2,000円から、サービス料10%と消費税別、バーで部屋を指定すると室料4,000〜5,000円、尺八の演奏、舞妓・芸妓・地方の手配、全館禁煙、座敷に高座椅子、オーナー村田理如が2010年に新しい津田楼を始める、器や軸は村田のコレクション。食べログ: 津田楼、日本料理、祇園町南側570-121、カード可、電子マネー・QR決済不可、サービス料10% (料金に含む)、32席、個室、禁煙、ディナーは18歳未満不可、インボイス T5130003002950 (合同会社津田樓)。口コミ (2019〜2025年、英語): 大正のお茶屋を改装した会席、鰻と鯰の巴の紋は山科で川魚を商った名残、一枚板のカウンター、中庭、2階から花見小路、鱧づくし、かますの照り焼き、生姜と油揚げの炊き込みご飯、ランチ6,600円 (2024年10月)、2024年9月に改装して再開、料理長は続投で妻が女将に、靴を脱いで上がる、二次会にバー利用。',
      confidence: 'medium', sources: [SITE, SITE + 'owner/', SITE + 'bar/', SITE + 'faq/', SITE + 'dish/', 'https://tsudaro.com/news/2869/', TB, R + 'B23289372/', R + 'B463703364/', R + 'B466929947/', R + 'B467327700/', R + 'B471614222/', R + 'B493201086/', R + 'B510904732/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5130003002950'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone 13:00–18:00; shoes off; geiko and maiko can be arranged.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-121',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site posting closing days through December 2026; Tabelog reviews dated through July 2025.' },
    pin_source: `Tabelog ${TB} (35.002233, 135.774692), matching the official site's "Hanamikoji Shijo-sagaru, west side, diagonally opposite the Kaburenjo"; GSI 京都府京都市東山区祇園町南側570番地 (lot) 164m — a very large lot, so marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE + 'bar/', R + 'B493201086/'],
    price_note: 'Lunch price from an October 2024 review; bar charges from the official site (November 2026).', last_checked: TODAY, items: [
      it('', '', 'Lunch kaiseki', '¥6,600', 'Kaiseki', 'ask', 'no', 'Tax and service included; October 2024.', 'lunch'),
      it('', '', 'Bar charge, per person', '¥2,000', 'Bar', 'gf', 'vegan', 'From; plus 10% service and tax.', 'bar_charge'),
    ] }, {
    cuisine: '大正のお茶屋で供する季節の会席。器はオーナーのコレクションの柿右衛門、今右衛門、清水卯一など明治から大正の名品 (公式サイト)・ランチは税・サービス料込みで6,600円ほど (2024年10月)・夏は鱧のお椀、お造り、炊き合わせ、かますの照り焼き、生姜と油揚げの炊き込みご飯 (2023年6月)・お造りの盛り合わせ、八寸、締めにお寿司 (2024年10月)・欅の一枚板のカウンターのバーでワイン、日本酒、シャンパン、ときに尺八の演奏 (公式サイト、2023年4月)・1人8,000〜10,000円ほど (食べログの口コミ)',
    neighborhood: '祇園花見小路、歌舞練場の斜め前',
    gf_detail: '要確認。出汁や醤油を使う季節の会席。お椀に生麩が入ることも。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。鱧などの魚と出汁の会席 (口コミ)。',
    notes: '[会席とバー・花見小路、大正のお茶屋] 踊り場や中庭をそのまま残す花見小路の元お茶屋。明治・大正の名品の器で季節の会席を、欅の一枚板のカウンターでは深夜までバーも。ランチは6,600円ほど。予約は電話で、水曜と毎月告知の日が休み。',
  });
}

// ================================================================ 山とみ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26033043/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yamatomi-kyoto.com/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_yamatomi_yanagibaba', name: '山とみ (Yamatomi)', category: 'OMNI',
    lat: 35.006528, lng: 135.764162, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden in bonito dashi, kushiage, tempura and grilled dishes; dashi and soy are used throughout and no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the bonito dashi runs through the menu, oden included (official site).',
    hours_raw: '17:00–22:00 (last order 21:30); closed Wednesday (official site; Tabelog). Reservations through the official site or by phone (official site; Tabelog; July 2026). Cards (JCB, AMEX) accepted (official site). A small izakaya with a long counter; easy for solo diners (official site; November 2024). In a lane at Yanagibaba-Rokkaku (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanagibaba at Rokkaku, between Karasuma and Kawaramachi',
    cuisine: 'Kyoto-style oden and seasonal small plates in a light bonito dashi, from the izakaya that stood on Pontocho (official site) · oden assortment ¥880, kushiage assortment ¥850, hamo skin with cucumber ¥730, bite-size onigiri ¥950 (November 2024) · wakatake-ni ¥1,100, cabbage-roll oden ¥440 (April 2026) · nama-fu dengaku, seasonal tempura and grilled dishes, kaiseki (official site) · two people just under ¥7,000 with a drink (April 2026)',
    website: SITE, gmaps: gm('山とみ 柳馬場六角'), menu_url: SITE,
    notes: "[Oden izakaya · Yanagibaba-Rokkaku, the old Pontocho Yamatomi] The Pontocho riverside izakaya long loved by locals and students, reopened in a quiet lane with the same okami at the counter: Kyoto-style oden in light bonito dashi, kushiage, hamo-skin with cucumber and bite-size onigiri at fair prices. Easy alone; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Okami not named'], origin: null,
      background: 'Formerly an izakaya on Pontocho above Shijo, known for its riverside yuka seating and loved by locals and students; it closed for a time and reopened at Yanagibaba-Rokkaku, with the okami still running it (official site; July 2024 review).',
      philosophy: 'Unpretentious but refined: the season on the plate, at prices that keep long-time fans (official site).',
      specialty: 'Kyoto-style oden.',
      anecdotes: [
        { text: 'A July 2024 regular from the Pontocho days was delighted to find the okami still behind the counter at the new address.', source: R + 'B486430838/' },
        { text: 'An April 2026 traveller ordered the bite-size onigiri — six small rolls of ume, salmon and bonito flakes.', source: R + 'B527020538/' },
        { text: 'A November 2024 solo diner praised the gentle dashi and the friendly okami.', source: R + 'B495956483/' },
      ],
      japanese_sources_summary: '公式サイト: 山とみ、京都市中京区柳馬場六角下る井筒屋町421、懐石と京おでん、平成の時代に先斗町で愛された味と心を受け継ぎ移転して再び暖簾を掲げる、かつて先斗町・四条上ルにあり川床でも知られた居酒屋、一時閉店を経て柳馬場六角で再開、女将が健在、鰹出汁の薄味の京料理、おでん・串揚げ・はも皮きゅうり・生麩の味噌田楽、旬の天ぷらと焼き物、明るく清潔なカウンターの小さな居酒屋、1人でも気軽に、17:00〜22:00 (L.O.21:30)、水曜休み、カード可 (JCB、AMEX)、予約はサイトから。食べログ: 山とみ、日本料理、月・火・木〜日 17:00〜22:00、水曜定休。口コミ (2012〜2026年、英語): おでんの盛り合わせ880円、串揚げの盛り合わせ850円、はも皮きゅうり730円、小さなおにぎり950円 (2024年11月)、若竹の煮物1,100円、ロールキャベツ440円 (2026年4月)、出汁のやさしい味、気さくな女将、先斗町時代からの常連、地元の年配の客が多い、天ぷらと焼き物も好評。',
      confidence: 'medium', sources: [SITE, TB, R + 'B486430838/', R + 'B495956483/', R + 'B526416566/', R + 'B527020538/', R + 'B531647134/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter izakaya with regulars; book via the official site.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場六角下る井筒屋町421',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.006523, 135.764172), offset ~1m to clear おだしと日本酒 せつ (8.1m); cross-checked: GSI 京都府京都市中京区井筒屋町421番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495956483/', R + 'B527020538/'],
    price_note: 'Prices from November 2024 and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Oden assortment', '¥880', 'Oden', 'ask', 'no', 'November 2024.', 'oden'),
      it('', '', 'Kushiage assortment', '¥850', 'Fried', 'no', 'no', 'November 2024.', 'kushiage'),
      it('はも皮きゅうり', '', 'Hamo skin with cucumber', '¥730', 'Small plates', 'ask', 'no', 'November 2024.', 'hamokawa'),
      it('', '', 'Bite-size onigiri (six)', '¥950', 'Rice', 'ask', 'ask', 'Ume, salmon and bonito flakes; April 2026.', 'onigiri'),
      it('', '', 'Wakatake-ni (bamboo shoots)', '¥1,100', 'Small plates', 'ask', 'no', 'April 2026.', 'wakatake'),
    ] }, {
    cuisine: '先斗町にあった居酒屋の、鰹出汁の薄味の京風おでんと季節の肴 (公式サイト)・おでんの盛り合わせ880円、串揚げの盛り合わせ850円、はも皮きゅうり730円、小さなおにぎり950円 (2024年11月)・若竹の煮物1,100円、ロールキャベツのおでん440円 (2026年4月)・生麩の味噌田楽、旬の天ぷらや焼き物、懐石 (公式サイト)・2人で飲み物込み7,000円弱 (2026年4月)',
    neighborhood: '柳馬場六角、烏丸と河原町のあいだ',
    gf_detail: '要確認。鰹出汁のおでん、串揚げ、天ぷら、焼き物。出汁と醤油を広く使い、グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。おでんをはじめ鰹出汁を使う (公式サイト)。',
    notes: '[おでん居酒屋・柳馬場六角、先斗町の山とみ] 地元客や学生に愛された先斗町の川床の居酒屋が、静かな路地で再開。カウンターには変わらぬ女将。鰹出汁の薄味の京風おでん、串揚げ、はも皮きゅうり、小さなおにぎりを手ごろな値段で。1人でも気軽に、水曜休み。',
  });
}

save();
