// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 71.
//   + Cheese & Wine 颯と Cheese & Wine Sauto (raclette, cheese courses and wine from a veteran sommelier, Shinmonzen) — rest
//   + 酒と肴と藁焼き わだつみ Wadatsumi (straw-grilled bonito and sake izakaya by Karasuma station) — rest
//   - skip 26007754 はれま 本店 (takeaway tsukudani shop; only 2025–26 review is a one-liner)
//   - skip 26037502 にしき ギョーザ (large parent: Terakoya Co., 140 shops)
//   - skip 26023492 Bar RM (members-only bar)
//   - skip 26042524 大衆すき焼き 北斗 木屋町店 (chain: seven 北斗 shops on Tabelog)
//   + 炭火焼肉おやけ 撰 Sumibi Yakiniku Oyake Sen (charcoal yakiniku by Karasuma station, cheap lunches) — rest
//   + 京都 お好み焼き 樹樹 祇園店 Okonomiyaki Juju Gion (mayonnaise-art okonomiyaki, eight-seat counter) — rest
//   - skip 26025898 タリーズコーヒー 祇園花見小路店 (chain)
//   - skip 26043424 Salon De Thé FAUCHON (FAUCHON brand, earlier rulings 26005569 and 26035550)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: FAUCHON skipped twice before
//   (26005569 counter of the Paris brand; 26035550 FAUCHON Hotel Kyoto restaurant); no rulings for 颯と, タリーズ, はれま, わだつみ,
//   にしき ギョーザ, Bar RM, 北斗, おやけ or 樹樹.
//   Same-name counts first (2026-11-07): Cheese & Wine 颯と — one.
//   わだつみ — one on Tabelog (the other 藁焼き names are unrelated); a February 2026 reviewer calls it a chain, but no sister shops
//   were found — drafted, flagged. おやけ — two (Kyoto 撰 and Osaka Shinsaibashi; oh-yake.com), under five, so drafted.
//   樹樹 — the Kyoto branch of Okonomi House Juju in Anan, Tokushima (two shops; the other
//   Juju/Kiki listings are unrelated), drafted. None of the four is in data/kyoto.json.
//   Charges per Tabelog's Japanese original: 颯と 「チャージ料：550円（税込）/名」; わだつみ 「お通し代税別480円」; おやけ and 樹樹 none listed.
//   No halal claims; no owner deaths; single-review remarks about other diners and staff looks left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-71');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26025898', 'chain: Tully’s Coffee — a national coffee chain (https://tabelog.com/en/kyoto/A2601/A260101/26025898/).');
skip('26043424', 'large parent: Salon De Thé FAUCHON is a FAUCHON-brand tea salon, the Paris brand already skipped as a large parent at 26005569 and 26035550 (FAUCHON Hotel Kyoto) (https://tabelog.com/en/kyoto/A2601/A260201/26043424/).');
skip('26007754', 'thin: はれま 本店 is a takeaway tsukudani (chirimen sansho) shop, and its only 2025–26 Tabelog review is a one-line "the best" — not enough sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260301/26007754/).');
skip('26037502', 'large parent: にしき ギョーザ is a brand of 株式会社寺子屋 (Terakoya Co.), which runs 140 directly operated shops in Japan (https://www.telacoya.co.jp/; https://tabelog.com/en/kyoto/A2601/A260201/26037502/).');
skip('26023492', 'members-only: Bar RM is described as a members-only, invitation-only bar (November 2024 and October 2026 reviews) — same footing as guests-only places (https://tabelog.com/en/kyoto/A2601/A260301/26023492/dtlrvwlst/).');
skip('26042524', 'chain: 大衆すき焼き 北斗 — Tabelog lists seven shops (Shijo Karasuma, Kiyamachi, Namba GEMS, Ginza Corridor, Shinjuku, Higashi-Ginza, Chofu) (https://tabelog.com/en/rstLst/?sw=%E3%81%99%E3%81%8D%E7%84%BC%E3%81%8D%E5%8C%97%E6%96%97).');

// ================================================================ Cheese & Wine 颯と
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26043274/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '00:00']);
  put({
    id: 'kyoto_cheese_wine_sauto', name: 'Cheese & Wine 颯と (Cheese & Wine Sauto)', category: 'OMNI',
    lat: 35.00651, lng: 135.77386, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: baguette with the raclette lunch, cheese pizza and pasta in the course (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a cheese restaurant — cheese in every dish, plus wagyu roast beef (2025–26 reviews).',
    hours_raw: 'Mon–Sat and holidays 12:00–15:00 (last order 14:30) and 18:00–0:00; closed Sunday and the day after a holiday, but open on Sundays of long weekends (Tabelog). Reservations accepted; an October 2026 diner had found it fully booked six months earlier (Tabelog; October 2026). Charge ¥550 per person, incl. tax (Tabelog, Japanese text: 「チャージ料：550円（税込）/名」). Cards and PayPay; no e-money (Tabelog). 16 seats: 8 at the counter and a private room for up to 8 (Tabelog). Non-smoking (Tabelog). Shinmonzen-dori east of Yamato-oji, 7 min from Keihan Sanjo or Gion-Shijo (Tabelog). Opened 8 June 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmonzen-dori, east of Yamato-oji — Gion-Shijo / Sanjo',
    cuisine: 'Cheese and wine from a sommelier with about 25 years in French restaurants: roast beef of rare female Kuroge wagyu under hot raclette, and a seven-dish cheese omakase course ¥9,900 (Tabelog; June 2025) · raclette plate lunch ¥1,870 with Parmigiano and Amela tomato, blue and sheep\'s cheese with carrot râpé, Tête de Moine with fruit, roast beef and baguette; blue cheese dorayaki (June and July 2025) · cheese pizza; raclette over vegetables and roast beef (August 2025) · raclette grill lunch with blue cheese and black shichimi; white-miso Basque cheesecake with sansho (April 2026) · course of Shine Muscat, cheese chawanmushi, carpaccio, pasta, fish, roast beef and dessert (August 2026)',
    website: null, gmaps: gm('Cheese & Wine 颯と'), menu_url: TB,
    notes: '[Cheese and wine · Shinmonzen, since 2025] A calm, modern counter on Shinmonzen-dori where a veteran French-restaurant sommelier pairs wine with cheese in every dish — raclette over female Kuroge wagyu roast beef, cheese chawanmushi, blue cheese dorayaki, a white-miso Basque cheesecake. Raclette plate lunch ¥1,870; cheese omakase ¥9,900 at night. ¥550 charge; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner and sommelier (unnamed); about 25 years as a sommelier in French restaurants (June 2025)'], origin: null,
      background: 'Per a June 2025 review: the owner worked about 25 years as a sommelier in French restaurants and served cheese dishes at a previous restaurant. Opened June 2025 (Tabelog); occasional wine seminars (October 2026).',
      philosophy: null, specialty: 'Raclette and cheese courses with wine.',
      anecdotes: [
        { text: 'A June 2025 lunch guest was given a blue cheese dorayaki as an opening treat — sweet-salty either way up.', source: R + 'B509198158/' },
        { text: 'An October 2026 diner, turned away when fully booked six months earlier, finally got in and heard about the occasional wine seminars.', source: R + 'B538550764/' },
        { text: 'An April 2026 lunch guest paired the raclette grill with a glass of champagne and finished with white-miso Basque cheesecake.', source: R + 'B526601562/' },
      ],
      japanese_sources_summary: '食べログ: チーズ料理・ワインバー、東山区新門前通大和大路東入西之町205、京阪三条駅・祇園四条駅から徒歩7分、月〜土・祝12:00〜15:00 (L.O. 14:30) と18:00〜24:00、日曜と祝日の翌日休み (連休の日曜は営業)、予約可、チャージ550円、カード・PayPay 可、16席 (カウンター8、個室8)、禁煙、2025年6月8日オープン、希少な雌の黒毛和牛のローストビーフにラクレット、チーズのおまかせコース7品9,900円。口コミ (2025年6月〜2026年10月、英語): 店主はフランス料理店で約25年ソムリエ、ラクレットのプレートランチ1,870円、ブルーチーズのどら焼き、チーズのピザ、白味噌のバスクチーズケーキに山椒、チーズの茶碗蒸し、ワインのセミナー。',
      confidence: 'medium', sources: [TB, R + 'B509198158/', R + 'B509867304/', R + 'B511986843/', R + 'B526601562/', R + 'B534136540/', R + 'B538550764/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; the owner is happy to talk cheese (June 2025). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新門前通大和大路東入西之町205',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006510, 135.773860); cross-checked: GSI 京都府京都市東山区西之町205番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B509867304/'],
    price_note: 'Course price from Tabelog (tax included); lunch from June–July 2025; ¥550 charge.', last_checked: TODAY, items: [
      it('', '', 'Raclette plate lunch', '¥1,870', 'Lunch', 'no', 'no', 'With roast beef and baguette; June–July 2025.', 'raclette_plate'),
      it('', '', 'Cheese omakase course (7 dishes)', '¥9,900', 'Courses', 'no', 'no', 'Tabelog.', 'cheese_course'),
      it('', '', 'Blue cheese dorayaki', '', 'Dessert', 'no', 'no', 'June 2025.', 'dorayaki'),
      it('', '', 'White-miso Basque cheesecake with sansho', '', 'Dessert', 'ask', 'no', 'April 2026.', 'basque'),
    ] }, {
    cuisine: 'フランス料理店で約25年のソムリエのチーズとワイン。希少な雌の黒毛和牛のローストビーフに熱々のラクレット、7品のチーズのおまかせコース9,900円 (食べログ、2025年6月)・パルミジャーノと Amela トマト、ブルーと羊のチーズのキャロットラペ、Tête de Moine と果物、ローストビーフ、バゲットのラクレットのプレートランチ1,870円、ブルーチーズのどら焼き (2025年6・7月)・チーズのピザ、野菜とローストビーフにラクレット (2025年8月)・ブルーチーズと黒七味のラクレットのグリルランチ、白味噌のバスクチーズケーキに山椒 (2026年4月)・シャインマスカット、チーズの茶碗蒸し、カルパッチョ、パスタ、魚、ローストビーフ、デザートのコース (2026年8月)',
    neighborhood: '新門前通、大和大路の東。祇園四条・三条',
    gf_detail: 'グルテンフリーではない。ランチのラクレットにバゲット、コースにチーズのピザやパスタ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。どの料理にもチーズを使い、和牛のローストビーフも (2025〜2026年の口コミ)。',
    notes: '[チーズとワイン・新門前、2025年から] 新門前通の落ち着いたモダンなカウンター。フランス料理店で長年ソムリエを務めた店主が、すべての料理にチーズを使い、ワインを合わせる。雌の黒毛和牛のローストビーフにラクレット、チーズの茶碗蒸し、ブルーチーズのどら焼き、白味噌のバスクチーズケーキ。昼はラクレットのプレート1,870円、夜はチーズのおまかせ9,900円。チャージ550円。日曜休み。',
  });
}

// ================================================================ 酒と肴と藁焼き わだつみ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039650/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'kyoto_warayaki_wadatsumi_karasuma', name: '酒と肴と藁焼き わだつみ (Sake to Sakana to Warayaki Wadatsumi)', category: 'OMNI',
    lat: 35.002735, lng: 135.762724, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura and fried burdock on the menu (2026 reviews); straw-grilled fish with salt is an option to ask about.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: straw-grilled bonito, sawara, duck and wagyu; obanzai and dashimaki with dashi (2026 reviews).',
    hours_raw: 'Daily 17:00–0:00 (Tabelog). Reservations accepted; Friday walk-ins have been seated (Tabelog; April 2026). Appetizer charge ¥480 before tax (Tabelog, Japanese text: 「お通し代税別480円」). Cards (VISA, Master), iD, QUICPay and PayPay (Tabelog). 70 seats with private rooms; whole-shop hire for over 50 (Tabelog). Smoking allowed (Tabelog; June and October 2026). Courses with all-you-can-drink from ¥4,000 (a premium one for entry by 18:00) to ¥5,500 for 90 minutes; group discounts for 10 or more (April and June 2026). Maeda Building 1F, 2 min from Hankyu Karasuma (Tabelog). Opened 1 July 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma — Karasuma',
    cuisine: 'Straw-grilled (warayaki) fish and meat — bonito, wagyu, Okutanba chicken — with obanzai and a wide sake list (2026 reviews) · seared hamachi with garlic, myoga and onion; fried burdock; egg potato salad; dashimaki (February 2026) · five obanzai; straw-grilled sawara and duck breast; firefly squid with vinegar miso; beef tongue; Kyoto sake (April 2026) · thick straw-grilled bonito with salt; Mieoka tofu as the appetizer (April 2026) · courses with all-you-can-drink ¥4,000–5,500 (April–October 2026)',
    website: null, gmaps: gm('酒と肴と藁焼き わだつみ'), menu_url: TB,
    notes: '[Straw-grilled fish and sake · Shijo-Karasuma] A big, late izakaya by Karasuma station with private rooms for groups, built around warayaki — bonito seared over burning straw and eaten with salt, plus sawara, duck and wagyu — with obanzai and plenty of sake. Popular for parties with all-you-can-drink courses; reviews of the course service are mixed. Smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an izakaya opened in July 2023 near Karasuma station, with 70 seats and private rooms; a February 2026 reviewer describes it as a chain.',
      philosophy: null, specialty: 'Warayaki (straw-grilled) bonito; obanzai.',
      anecdotes: [
        { text: 'An April 2026 diner booked at short notice for the straw-grilled bonito and found one thick slice a mouthful.', source: R + 'B527038761/' },
        { text: 'A June 2026 organiser of a 30-person group ate free, as the house offers groups of 10 or more.', source: R + 'B530115374/' },
        { text: 'A February 2026 late-night diner found the seared hamachi with garlic and myoga a creative touch.', source: R + 'B523489823/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、下京区高材木町226 前田ビル 1F、阪急烏丸駅から徒歩2分、毎日17:00〜24:00、予約可、お通し480円 (税別)、カード・iD・QUICPay・PayPay 可、70席、個室、50名以上の貸切可、喫煙可、2023年7月1日オープン。口コミ (2025年10月〜2026年10月、英語): 藁焼きのかつお、さわら、鴨、和牛、奥丹波の鶏、おばんざい5種、ホタルイカの酢味噌、牛タン、日本酒が豊富、飲み放題付きコース4,000〜5,500円、10名以上で幹事無料、コースの接客は賛否、喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B514858223/', R + 'B523489823/', R + 'B525570154/', R + 'B526335712/', R + 'B526753336/', R + 'B527038761/', R + 'B529619158/', R + 'B530115374/', R + 'B530913511/', R + 'B536421105/', R + 'B537450559/', R + 'B538238334/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a private room for groups; courses are the easy order. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高材木町226 前田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002735, 135.762724); cross-checked: GSI 京都府京都市下京区高材木町226番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526335712/', R + 'B525570154/', R + 'B530115374/'],
    price_note: 'Course prices from April–June 2026 reviews; ¥480 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥4,000–5,500', 'Courses', 'no', 'no', 'April–June 2026.', 'course'),
      it('', '', 'Straw-grilled bonito', '', 'Warayaki', 'ask', 'no', 'With salt; April 2026.', 'katsuo_warayaki'),
      it('', '', 'Obanzai (five kinds)', '', 'Obanzai', 'ask', 'no', 'April 2026.', 'obanzai'),
      it('', '', 'Firefly squid with vinegar miso', '', 'Small plates', 'ask', 'no', 'April 2026.', 'hotaruika'),
    ] }, {
    cuisine: '藁焼きの魚と肉、かつお、和牛、奥丹波の鶏、おばんざいと豊富な日本酒 (2026年の口コミ)・にんにくとみょうがと玉ねぎのはまちのたたき、ごぼうの唐揚げ、卵のポテトサラダ、だし巻き (2026年2月)・おばんざい5種、さわらと鴨の胸肉の藁焼き、ホタルイカの酢味噌、牛タン、京都の日本酒 (2026年4月)・塩で食べる分厚いかつおの藁焼き、お通しは Mieoka の豆腐 (2026年4月)・飲み放題付きコース4,000〜5,500円 (2026年4〜10月)',
    neighborhood: '四条烏丸。烏丸',
    gf_detail: 'グルテンフリーではない。天ぷらやごぼうの唐揚げがある (2026年の口コミ)。塩で食べる藁焼きの魚は相談を。',
    vegan_detail: 'ヴィーガン不可。藁焼きのかつお、さわら、鴨、和牛。おばんざいやだし巻きに出汁 (2026年の口コミ)。',
    notes: '[藁焼きと日本酒・四条烏丸] 烏丸駅近くの、個室のある大きな遅くまで開く居酒屋。藁で焼いて塩で食べるかつおを中心に、さわら、鴨、和牛の藁焼き、おばんざい、豊富な日本酒。飲み放題付きコースで宴会に人気だが、コースの接客には賛否がある。喫煙可。',
  });
}
// ================================================================ 炭火焼肉おやけ 撰
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038750/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://oh-yake.com/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_sumibi_yakiniku_oyake_sen', name: '炭火焼肉おやけ 撰 (Sumibi Yakiniku Oyake Sen)', category: 'OMNI',
    lat: 35.004506, lng: 135.762657, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cold noodles, tare-marinated meats and a miso stamina bowl (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a charcoal yakiniku house; even the cabbage kimchi carries bonito flakes (September 2026).',
    hours_raw: 'Daily 11:30–15:00 (last order 14:30) and 17:00–23:00 (last order 22:00) (Tabelog). Reservations accepted, incl. through Tabelog; lunch walk-ins are usually seated (Tabelog; October 2026). Cards (incl. UnionPay), PayPay and Alipay; no e-money (Tabelog). 53 seats incl. counter, sofa seats and private rooms for 2–20; solo diners have been given private rooms (Tabelog; May and September 2026). Designated smoking area (Tabelog). Wheelchair accessible (Tabelog). Delica Building 1F, Takakura-dori north of Shijo, 2 min from Hankyu Karasuma (Tabelog). Opened 12 December 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura-dori, north of Shijo — Karasuma',
    cuisine: 'Charcoal yakiniku with aged cuts and raw-meat dishes; the sister shop is in Shinsaibashi, Osaka (official site; 2026 reviews) · lunch: roast beef bowl with egg yolk and free large rice (November 2025); limited yakiniku lunch from lean cuts to horumon (February 2026); miso stamina bowl ¥750 (March 2026); beef tongue lunch set with mini kimchi and oxtail soup (May 2026) · dinner: yukhoe, thick-cut tongue, cold noodles (July 2026); 80 g portions of marbled beef, sashimi, napa cabbage kimchi with bonito (September 2026); aged thick-cut tongue, jidori chicken, lean cuts, horumon (September 2026)',
    website: SITE, gmaps: gm('炭火焼肉おやけ 撰'), menu_url: TB,
    notes: '[Charcoal yakiniku · Shijo-Karasuma, since 2022] A traditional-styled yakiniku house by Karasuma station with counter seats and private rooms, grilling aged thick-cut tongue, marbled wagyu and horumon over charcoal with good ventilation, plus raw-beef dishes. Lunch is a bargain — a ¥750 miso stamina bowl or a tongue set with oxtail soup — and walk-ins are usually fine. Dinner runs about ¥5,000–10,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and the official site: a charcoal yakiniku restaurant opened in December 2022, the Kyoto shop of the two-shop おやけ brand (the other is in Shinsaibashi, Osaka).',
      philosophy: null, specialty: 'Aged thick-cut tongue; charcoal yakiniku.',
      anecdotes: [
        { text: 'A December 2025 visitor booked the wrong date by mistake and was seated anyway without a word about it.', source: R + 'B520037650/' },
        { text: 'A February 2026 diner appreciated warm tea served in place of cold water on a cold day.', source: R + 'B522874078/' },
        { text: 'A September 2026 charcoal fan noted the ventilation leaves no smell on clothes.', source: R + 'B535794970/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: 焼肉・ホルモン、中京区高倉通四条上ル帯屋町578 デリカビル 1F、阪急烏丸駅から徒歩2分、毎日11:30〜15:00 (L.O. 14:30) と17:00〜23:00 (L.O. 22:00)、予約可、カード・PayPay・Alipay 可、53席、個室 (2〜20名)、分煙、車椅子可、2022年12月12日オープン、心斎橋に姉妹店。口コミ (2025年11月〜2026年10月、英語): ローストビーフ丼、ランチの焼肉、味噌のスタミナ丼750円、牛タンのランチ (ミニキムチとテールスープ付き)、ユッケ、厚切りのタン、冷麺、熟成肉、地鶏、ホルモン、かつお節入りの白菜キムチ、換気がよく服に匂いがつかない、ランチは予約なしでも入りやすい。',
      confidence: 'medium', sources: [TB, SITE, R + 'B518160461/', R + 'B520037650/', R + 'B521342630/', R + 'B522874078/', R + 'B524933005/', R + 'B525769169/', R + 'B529041214/', R + 'B531662854/', R + 'B531991435/', R + 'B535777470/', R + 'B535794970/', R + 'B538252258/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch is the easy way in; Tabelog booking works. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高倉通四条上ル帯屋町578 デリカビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004506, 135.762657); cross-checked: GSI 京都府京都市中京区帯屋町578番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524933005/', R + 'B531662854/'],
    price_note: 'One lunch price from March 2026; a July 2026 group paid about ¥10,000 each with drinks.', last_checked: TODAY, items: [
      it('', '', 'Miso stamina bowl (lunch)', '¥750', 'Lunch', 'no', 'no', 'March 2026.', 'stamina_don'),
      it('', '', 'Beef tongue lunch set', '', 'Lunch', 'ask', 'no', 'With mini kimchi and oxtail soup; May 2026.', 'tan_lunch'),
      it('', '', 'Aged thick-cut tongue', '', 'Yakiniku', 'ask', 'no', 'July and September 2026.', 'atsugiri_tan'),
      it('', '', 'Yukhoe', '', 'Raw', 'ask', 'no', 'July 2026.', 'yukke'),
    ] }, {
    cuisine: '熟成肉と生肉料理の炭火焼肉、姉妹店は大阪の心斎橋 (公式サイト、2026年の口コミ)・昼は卵黄のローストビーフ丼、ご飯大盛り無料 (2025年11月)、赤身からホルモンまでの限定の焼肉ランチ (2026年2月)、味噌のスタミナ丼750円 (2026年3月)、ミニキムチとテールスープ付きの牛タンのランチ (2026年5月)・夜はユッケ、厚切りのタン、冷麺 (2026年7月)、1皿80gの霜降り、刺身、かつお節入りの白菜キムチ (2026年9月)、熟成の厚切りタン、地鶏、赤身、ホルモン (2026年9月)',
    neighborhood: '高倉通、四条の北。烏丸',
    gf_detail: 'グルテンフリーではない。冷麺、タレの肉、味噌のスタミナ丼 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。炭火焼肉店で、白菜キムチにもかつお節 (2026年9月)。',
    notes: '[炭火焼肉・四条烏丸、2022年から] 烏丸駅近くの和の趣の焼肉店。カウンターと個室で、熟成の厚切りタン、霜降りの和牛、ホルモンを換気のよい炭火で、生肉料理も。昼は750円の味噌スタミナ丼やテールスープ付きのタンの定食がお得で、予約なしでも入りやすい。夜は5,000〜10,000円ほど。',
  });
}

// ================================================================ 京都 お好み焼き 樹樹 祇園店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042860/'; const R = TB + 'dtlrvwlst/';
  const TU = day(['17:00', '22:00']); const H = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_okonomiyaki_juju_gion', name: '京都 お好み焼き 樹樹 祇園店 (Kyoto Okonomiyaki Juju Gion)', category: 'OMNI',
    lat: 35.004387, lng: 135.775216, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki batter throughout (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, seafood, beef tendon, egg and mayonnaise; the batter is described as rich in dashi (2025–26 reviews).',
    hours_raw: 'Tue 17:00–22:00; Wed–Sun and holidays 11:30–14:30 (last order 14:00) and 17:00–22:00 (last order 21:00); closed Monday (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 8 counter seats; whole-shop hire for up to 20 (Tabelog). Non-smoking (Tabelog). Nippo Hanamikoji-kan 3F, up the stairs, near Hanamikoji, 5 min from Gion-Shijo (Tabelog; September 2025; January 2026). Opened 6 May 2025 (Tabelog).',
    hours: { 1: TU, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tominagacho, near Hanamikoji — Gion-Shijo',
    cuisine: '"Art okonomiyaki" decorated with colourful mayonnaise, cooked at the counter teppan, with the recipe and method of the original Juju in Anan, Tokushima (Tabelog; April 2026) · Hanabi: black bamboo-charcoal batter with bamboo shoots and mochi, mayonnaise fireworks and a sparkler (September 2025; January 2026) · Juju Special with pork, shrimp, squid and beef tendon ¥2,500 (November 2025) · Sakura, topped with fluffy grated yam (December 2025; March 2026) · tendon negiyama with a mountain of Kujo green onion and a runny egg ¥1,800; sukiyaki tsukimi-yaki; negitama (January 2026) · weekly-changing craft beers (January 2026)',
    website: null, gmaps: gm('お好み焼き 樹樹 祇園'), menu_url: TB,
    notes: '[Art okonomiyaki · Gion, since 2025] An eight-seat counter on a third floor near Hanamikoji, cooking fluffy okonomiyaki on the teppan in front of you and decorating it with mayonnaise art — the charcoal-black Hanabi with a sparkler, the yam-topped Sakura — or, for flavour first, tendon and Kujo green onion with a runny egg. Weekly craft beers; friendly manager. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner and manager (unnamed), described as kind and friendly (2025–26 reviews)'], origin: null,
      background: 'Per an April 2026 review: the owner fell for the okonomiyaki at Juju in Anan, Tokushima, and opened this Kyoto branch with that shop’s approval, using the same ingredients and method. Opened May 2025 (Tabelog).',
      philosophy: null, specialty: 'Mayonnaise-art okonomiyaki.',
      anecdotes: [
        { text: 'A January 2026 diner was walked through the careful way the cabbage is cut for the classic negitama.', source: R + 'B521532909/' },
        { text: 'A January 2026 regular returned for the Sakura and a weekly craft beer flavoured with yuzu and sansho.', source: R + 'B517729131/' },
        { text: 'An August 2025 diner heard the story of how the restaurant came to open, over okonomiyaki cooked on a hot summer teppan.', source: R + 'B512121201/' },
      ],
      japanese_sources_summary: '食べログ: お好み焼き・鉄板焼き、東山区富永町121 日宝花見小路館 3F、京阪祇園四条駅から徒歩5分、火17:00〜22:00、水〜日・祝11:30〜14:30 (L.O. 14:00) と17:00〜22:00 (L.O. 21:00)、月曜休み、予約可、カード・電子マネー・QR 可、カウンター8席、禁煙、2025年5月6日オープン、見た目も楽しいアートお好み焼き。口コミ (2025年8月〜2026年4月、英語): 徳島県阿南の Juju の味と作り方を受け継ぐ京都店、竹炭の黒い生地に筍と餅の Hanabi、Juju Special 2,500円、山芋をのせた Sakura、Kujo ねぎと卵と牛すじの negiyama 1,800円、週替わりのクラフトビール。',
      confidence: 'medium', sources: [TB, R + 'B508390286/', R + 'B512121201/', R + 'B513793461/', R + 'B517252411/', R + 'B517729131/', R + 'B519368940/', R + 'B520233199/', R + 'B520392918/', R + 'B520684251/', R + 'B521467888/', R + 'B521532909/', R + 'B526930037/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter cooking is a show; popular with overseas visitors (December 2025; March 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区富永町121 日宝花見小路館 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.004324, 135.775216), offset 7 m north: kyoto_izakaya_maumu has the same lot (富永町121) and sat 1.2 m away; cross-checked: GSI 京都府京都市東山区富永町121番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517252411/', R + 'B520392918/'],
    price_note: 'Prices from November 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hanabi (bamboo-charcoal batter, mochi, bamboo shoots)', '', 'Okonomiyaki', 'no', 'no', 'September 2025; January 2026.', 'hanabi'),
      it('', '', 'Juju Special (pork, shrimp, squid, beef tendon)', '¥2,500', 'Okonomiyaki', 'no', 'no', 'November 2025.', 'juju_special'),
      it('', '', 'Sakura (topped with grated yam)', '', 'Okonomiyaki', 'no', 'no', 'December 2025; March 2026.', 'sakura'),
      it('', '', 'Tendon negiyama (Kujo green onion, runny egg)', '¥1,800', 'Okonomiyaki', 'no', 'no', 'January 2026.', 'suji_negiyama'),
    ] }, {
    cuisine: 'カラフルなマヨネーズで飾る「アートお好み焼き」をカウンターの鉄板で。徳島県阿南の Juju と同じ材料と作り方 (食べログ、2026年4月)・竹炭の黒い生地に筍と餅、マヨネーズの花火と手持ち花火の「Hanabi」(2025年9月、2026年1月)・豚、えび、いか、牛すじの Juju Special 2,500円 (2025年11月)・ふわふわの山芋をのせた「Sakura」(2025年12月、2026年3月)・Kujo ねぎの山と半熟卵の牛すじの negiyama 1,800円、すき焼きの月見焼き、ねぎ玉 (2026年1月)・週替わりのクラフトビール (2026年1月)',
    neighborhood: '富永町、花見小路の近く。祇園四条',
    gf_detail: 'グルテンフリーではない。お好み焼きの生地 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、魚介、牛すじ、卵、マヨネーズ。生地は出汁がきいていると評される (2025〜2026年の口コミ)。',
    notes: '[アートお好み焼き・祇園、2025年から] 花見小路近くのビル3階、カウンター8席。目の前の鉄板でふわふわのお好み焼きを焼き、マヨネーズのアートで飾る。手持ち花火を添えた竹炭の黒い「Hanabi」、山芋をのせた「Sakura」、味で選ぶなら牛すじと Kujo ねぎと半熟卵。週替わりのクラフトビール、気さくな店長。月曜休み。',
  });
}

save();
