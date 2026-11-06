// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 24.
//   + 豆水楼 祇園店 Tousuiro Gion (tofu kaiseki in an old machiya on Higashioji, with vegan and gluten-free courses)
//   + Cinq Neuf (Kamo-river café at Gojo, west bank; since 2022)
//   + 京の米料亭 八代目儀兵衛 Hachidaime Gihey (rice-merchant’s restaurant in front of Yasaka Shrine)
//   + 周知 Shuchi (late-night soba izakaya off Nijo-Tominokoji, handmade 100% buckwheat soba; since 2014)
//   - 麺匠たか松 京都駅ビル拉麺小路店 (26035538), 茶寮 フクチャ (26032328), 老舗･名店弁当コーナー ジェイアール京都伊勢丹店
//     (26022146) and Flip up!2 (26042570): skipped (reasons below).
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26001632, 26038790; from `next notable 200`,
//   26014418, 26035538 (skipped), 26032328 (skipped), 26022146 (skipped), 26042570 (skipped), 26024624. None of the four is
//   in data/kyoto.json by name (豆水楼/Tousuiro, Cinq Neuf, 儀兵衛/Gihey, 周知/Shuchi) or address (毘沙門町38, 西橋詰町798,
//   祇園町北側296, 尾張町230).
//   Same-name count (Greg's Samboa ruling): 豆水楼 has two shops, 木屋町店 and 祇園店 (official site), neither in data — a small
//   group. 八代目儀兵衛 runs three rice restaurants, Kyoto Gion, Tokyo Ginza and OMOYA (operator’s job listing) — a small group.
//   Cinq Neuf and 周知 single shops. Service charges checked against Tabelog's Japanese original: none for the four (Cinq Neuf’s
//   English listing invents one; the original says なし).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26035538', '麺匠たか松 京都駅ビル拉麺小路店: a same-concept branch of a brand already in data — the main shop is 麺匠 たか松 本店 (Mensho Takamatsu Honten) in data/kyoto.json');
skip('26032328', '茶寮 フクチャ (京都駅): a sub-brand of a large parent (Greg, 2026-11-05) — FUKUCHA is the café brand launched by 福寿園, a Kyoto tea house founded in 1790 (Fashion Press, read 2026-11-05: 「寛政二年(1790年)の創業以来、茶一筋で歩み続けてきた福寿園」, FUKUCHA “a new brand” with this Kyoto Station café opened 3 April 2019); flagged for the coordinator');
skip('26022146', '老舗･名店弁当コーナー ジェイアール京都伊勢丹店: not a restaurant — a department-store counter on JR Kyoto Isetan B2F selling bento from various long-established restaurants, with no seats (Tabelog); flagged for the coordinator');
skip('26042570', 'Flip up!2: a same-concept branch of a brand already in data — reviewers call it the second shop of the bagel bakery Flip up! (kyoto_flip_up), e.g. “This is the second branch of the popular ‘Flip up!’” (Tabelog review, 2026)');

// ================================================================ 豆水楼 祇園店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001632/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tousuiro.com/'; const GION = SITE + 'gion'; const MENU = SITE + 'menu-gion';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']); const HS = day(['11:30', '15:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_tousuiro_gion', name: '豆水楼 祇園店 (Tousuiro, Gion)', category: 'OMNI',
    lat: 34.9998, lng: 135.777505, cuisine_type: 'tofu',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'Some GF options: two gluten-free kaiseki courses, 清水G.F. and 六波羅G.F. (¥13,000), made without wheat flour and with wheat-free seasonings, tofu dengaku replacing nama-fu; book at least three days ahead. The regular courses use nama-fu (wheat gluten) and fried dishes. Cross-contact in the shared kitchen is not addressed — ask (official site).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: the 六波羅 course (¥12,000) uses no meat, fish, egg or dairy, and its dashi uses no niboshi or katsuobushi; a gluten-free version exists. Other courses include fish and Kyoto chicken (official site).',
    hours_raw: 'Official site (Gion shop page): lunch 11:30–15:00 and dinner 17:00–22:00 Monday–Saturday, dinner to 21:30 on Sundays and holidays (elsewhere on the page 21:00); last entry 20:00; no fixed closing day, closed over New Year. Tabelog gives 11:30–14:00 and 17:00–21:30 Monday–Saturday, 12:00–20:30 Sundays and holidays. Reservations accepted, advised (Tabelog; December 2025). Prices include tax and service (official site). Cards: VISA, JCB, AMEX, Diners (Tabelog). 50 seats, including a counter over a sunken hearth and the 古蔵庵, a converted storehouse for up to 8 (Tabelog; official site; December 2025). Non-smoking (Tabelog). On Higashioji north of Matsubara, near Yasaka Shrine, Kodai-ji and Kiyomizu-dera; 15 min from Gion-Shijo Stn (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: HS }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashioji north of Matsubara, near Yasaka Shrine and Kiyomizu-dera — 15 min from Gion-Shijo Stn',
    cuisine: 'Tofu kaiseki in a machiya of 130–150 years (both figures appear on the site), with oboro yudofu refills in every course (official site; 2025–2026 reviews) · lunch 尾花 ¥5,000 (lunch only); 白河 ¥8,000; 清水 ¥12,000; 六波羅 vegetarian ¥12,000 — all plant-based; 清水G.F. and 六波羅G.F. gluten-free ¥13,000, by reservation three days ahead (official site, tax and service included) · autumn specials 6 November–6 December 2026: 白河 (lunch) ¥10,000, 六波羅 ¥15,000, 音羽 ¥15,000, GF +¥1,000 (official site) · dishes: kumiage yuba and sashimi konnyaku, tofu and nama-fu dengaku, yuba manjū with amber sauce, chestnut tofu, walnut tofu, soy-milk steamed dishes, grilled yuba with miso (official site; 2025–2026 reviews) · tofu to take away (official site) · sake, shochu',
    website: SITE, gmaps: gm('豆水楼 祇園店'), menu_url: MENU,
    notes: '[Tofu kaiseki · Higashioji, vegan and gluten-free courses] The Gion branch of a Kyoto tofu restaurant (the other is on Kiyamachi), in an old machiya with a converted storehouse room, between Yasaka Shrine and Kiyomizu-dera. Every course centres on refillable oboro yudofu, with dengaku, yuba and soy-milk dishes around it, from a ¥5,000 lunch. Unusually, there is a fully plant-based course, 六波羅 (no meat, fish, egg, dairy or fish dashi), and gluten-free versions of two courses — book these three days ahead. Open daily.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed), per the official site'], origin: null,
      background: 'Per the official site: 豆水楼 has two shops, on Kiyamachi (a Taisho-era townhouse on the Kamo River, with a summer yuka) and in Gion (a machiya with a storehouse room, 古蔵庵). The site says gluten-free courses were started in response to many requests, mostly from visitors from abroad. A February 2025 regular has come for 22 years.',
      philosophy: 'Tofu kaiseki in a traditional machiya; the vegetarian 六波羅 is presented as a new Kyoto tofu kaiseki (official site).', specialty: 'Oboro yudofu; vegetarian and gluten-free tofu kaiseki.',
      anecdotes: [
        { text: 'A July 2026 regular of the Kiyamachi shop noticed that Gion serves the tofu as hot yudofu rather than cold, and enjoyed it in the air-conditioning.', source: R + 'B532193351/' },
        { text: 'A February 2026 diner on the most expensive course loved the grilled yuba with miso but found the yudofu mild and the price hard to justify except as a trip memory.', source: R + 'B522458652/' },
      ],
      japanese_sources_summary: '公式サイト: 豆水楼 祇園店、東山区東大路通松原上ル4丁目毘沙門町38-1、京阪祇園四条駅から徒歩約15分、月〜土 昼11:30〜15:00・夜17:00〜22:00、日祝 夜は21:30まで (21:00の表記も)、入店は20時まで、無休 (年末年始は休業)、築150年 (130年の表記も) の町家、蔵を改装した古蔵庵 (2卓、最大8名)、尾花5,000円 (昼のみ)、白河8,000円、清水12,000円、六波羅 (ベジタリアン向け) 12,000円 (肉類、魚介類、卵、乳製品を一切使わず、出汁も煮干しや鰹節を使わない)、清水G.F.・六波羅G.F. 13,000円 (小麦粉を使わず、調味料も小麦粉の入っていないもの、要予約3日前まで)、税サ込、秋の特別懐石 (11/6〜12/6)、名物おぼろ湯豆腐はお代わり可、木屋町店もある。食べログ: 50席、禁煙、カード可。口コミ (2025〜2026年、英語): 昼の懐石5,000円、湯豆腐のお代わり、田楽、湯葉、豆乳蒸し、22年通う客。',
      confidence: 'medium', sources: [TB, SITE, GION, MENU, R + 'B500790553/', R + 'B502106064/', R + 'B508452174/', R + 'B519959375/', R + 'B522180098/', R + 'B522458652/', R + 'B524491754/', R + 'B527675345/', R + 'B532193351/', R + 'B536403230/'] },
    cultural_comfort: { level: 'english', note: 'English site; vegan and gluten-free courses by reservation; tax and service included.' },
    safety: { dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'The official menu describes the G.F. courses as made without wheat flour and with wheat-free seasonings, but does not say whether these courses are prepared apart from the regular ones, which use nama-fu and fried dishes; confirm with the restaurant.', source: MENU, verified: TODAY }],
      soy_sauce_wheat: [{ text: 'The G.F. courses use seasonings without wheat flour, per the official menu; the regular courses’ soy sauce is not described.', source: MENU, verified: TODAY }],
      vegan_cross_contact: [{ text: 'The 六波羅 course uses no meat, fish, egg or dairy and no niboshi or katsuobushi dashi; whether it is cooked apart from the other courses is not stated.', source: MENU, verified: TODAY }],
      staff_allergy_handling: [{ text: 'The menu page asks guests to contact the shop about dietary restrictions and allergies (食材の制限、アレルギーなどについては店舗にお問い合わせください).', source: MENU, verified: TODAY }],
      positives: [{ text: 'Official gluten-free courses (清水G.F., 六波羅G.F.) made without wheat flour and with wheat-free seasonings, tofu dengaku replacing nama-fu; reservation three days ahead.', source: MENU, verified: TODAY }],
      confidence: 'medium', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区東大路通松原上ル四丁目毘沙門町38-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news through October 2026) and Tabelog; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (34.9998, 135.777505); cross-checked: GSI 京都府京都市東山区毘沙門町38番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official Gion menu, tax and service included, read 2026-11-05; autumn specials 6 November–6 December 2026 differ.', last_checked: TODAY, items: [
      it('尾花', '', 'Lunch tofu kaiseki (lunch only)', '¥5,000', 'Courses', 'no', 'no', 'Official site.', 'obana'),
      it('白河', '', 'Tofu kaiseki', '¥8,000', 'Courses', 'no', 'no', 'Official site.', 'shirakawa'),
      it('清水', '', 'Tofu kaiseki, the chef’s recommendation', '¥12,000', 'Courses', 'no', 'no', 'Official site.', 'kiyomizu'),
      it('六波羅', '', 'Vegetarian tofu kaiseki (no meat, fish, egg, dairy or fish dashi)', '¥12,000', 'Courses', 'no', 'vegan', 'Official site.', 'rokuhara'),
      it('清水G.F.', '', 'Gluten-free version of 清水 (book 3 days ahead)', '¥13,000', 'Courses', 'gf', 'no', 'Official site; shared kitchen.', 'kiyomizu_gf'),
      it('六波羅G.F.', '', 'Gluten-free vegetarian tofu kaiseki', '¥13,000', 'Courses', 'gf', 'vegan', 'Official site; shared kitchen.', 'rokuhara_gf'),
    ] }, {
    cuisine: '築130〜150年 (サイトに両方の表記) の町家の豆腐懐石。どのコースも名物おぼろ湯豆腐のお代わりができる (公式サイト、2025〜2026年の口コミ)・昼の尾花5,000円 (昼のみ)、白河8,000円、清水12,000円、ベジタリアン向けの六波羅12,000円 (すべて植物性)、グルテンフリーの清水G.F.と六波羅G.F. 13,000円 (3日前までの予約) (公式サイト、税サ込)・秋の特別懐石 2026年11月6日〜12月6日: 白河 (昼) 10,000円、六波羅15,000円、音羽15,000円、GFは1,000円増し (公式サイト)・汲み上げ湯葉と刺身蒟蒻、豆腐と生麩の田楽、湯葉饅頭のべっこう餡、栗豆腐、胡桃豆腐、豆乳蒸し、湯葉の味噌焼き (公式サイト、2025〜2026年の口コミ)・持ち帰りの豆腐 (公式サイト)・日本酒、焼酎',
    neighborhood: '松原の北の東大路通、八坂神社と清水寺の近く。祇園四条駅から徒歩15分',
    gf_detail: '一部グルテンフリーあり: 小麦粉を使わず、小麦の入らない調味料で、生麩の田楽を豆腐の田楽に替えたグルテンフリーの懐石が2種、清水G.F.と六波羅G.F. (13,000円)、3日前までに予約。通常のコースは生麩 (小麦グルテン) や揚げ物を使う。同じ厨房での交差汚染については書かれていないので確認を (公式サイト)。',
    vegan_detail: '一部ヴィーガン対応: 六波羅 (12,000円) は肉類、魚介類、卵、乳製品を使わず、出汁も煮干しや鰹節を使わない。グルテンフリー版もある。ほかのコースには魚や京地鶏 (公式サイト)。',
    notes: '[豆腐懐石・東大路、ヴィーガンとグルテンフリーのコース] 京都の豆腐料理店 (木屋町にも店がある) の祇園店。八坂神社と清水寺のあいだ、蔵を改装した部屋のある古い町家。どのコースもお代わりできるおぼろ湯豆腐が中心で、田楽、湯葉、豆乳の料理が並ぶ。昼は5,000円から。珍しいのは、完全に植物性の六波羅 (肉、魚、卵、乳製品、魚の出汁を使わない) と、2つのコースのグルテンフリー版で、3日前までに予約を。無休。',
  });
}

// ================================================================ Cinq Neuf
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038790/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_cinq_neuf_gojo', name: 'Cinq Neuf', category: 'OMNI',
    lat: 34.995267, lng: 135.767389, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Basque cheesecakes, gâteau chocolat, financier cake, pudding and parfaits, plus kara-age and hamburg lunch plates and sandwiches; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Hand-drip coffee and Americano suit; the cakes, pudding and lunch plates use dairy, egg or meat (2026 reviews).',
    hours_raw: '10:00–18:00 daily; irregular closures (Tabelog). No reservations (Tabelog). PayPay only — no cards or e-money (Tabelog). No service charge (Tabelog, original text: なし). 18 seats: window counter facing the Kamo River, sofas, counter and a terrace where pets are allowed (Tabelog; 2026 reviews). Non-smoking; free Wi-Fi, power outlets; wheelchair accessible; children welcome (Tabelog). Self-service water (February 2026). On the west bank of the Kamo River at Gojo, in the former efish space, 3 min from Keihan Kiyomizu-Gojo Stn (Tabelog; August 2026). Opened 12 December 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kamo River west bank at Gojo — 3 min from Keihan Kiyomizu-Gojo Stn',
    cuisine: 'Riverside café: almost every seat faces the Kamo River (2026 reviews) · Basque cheesecakes in several flavours, seasonal ones included, ¥700, +¥300 for a drink set (May–August 2026) · gâteau chocolat with cream and strawberries; strawberry financier cake; orange parfait; pudding (February–September 2026) · kara-age and hamburg lunch plates, sandwiches (April–September 2026) · three hand-drip coffees including an original blend; Americano; café and vanilla lattes (2026 reviews)',
    website: null, gmaps: gm('Cinq Neuf 京都 五条 カフェ'), menu_url: null,
    notes: '[Café · Gojo, the Kamo River from every window] A café in the old efish space on the Kamo River’s west bank at Gojo, where window counters and sofas look straight over the water — in summer, at people wading in the river. Come for a Basque cheesecake (¥700, ¥1,000 with a drink) or a kara-age lunch plate and a hand-drip coffee. Busy at weekends; ordering can be a little confusing. PayPay only; pets on the terrace.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 12 December 2022; an August 2026 reviewer notes it took over the former efish site and found it less cosy than before.',
      philosophy: null, specialty: 'Basque cheesecake; river view.',
      anecdotes: [
        { text: 'An August 2026 visitor spent the coffee break watching people swimming in the Kamo River.', source: R + 'B537966132/' },
        { text: 'A September 2026 lunch guest had the kara-age plate but found the hoped-for pudding sold out.', source: R + 'B537328076/' },
      ],
      japanese_sources_summary: '食べログ: Cinq Neuf、カフェ、下京区西橋詰町798-1、京阪清水五条駅から徒歩3分、毎日10:00〜18:00、不定休、予約不可、カード・電子マネー不可、PayPay可、サービス料なし、18席 (窓際カウンター8、ソファ2、カウンター4、テラス4)、禁煙、Wi-Fi、電源、車椅子可、子ども可、テラスはペット可、2022年12月12日オープン。口コミ (2026年、英語): 鴨川を望む席、バスクチーズケーキ700円とドリンクセット300円、ガトーショコラ、いちごのフィナンシェケーキ、オレンジのパフェ、プリン、唐揚げとハンバーグのランチプレート、ハンドドリップのオリジナルブレンド、元 efish の場所。',
      confidence: 'medium', sources: [TB, R + 'B522763389/', R + 'B524330210/', R + 'B526028624/', R + 'B526457414/', R + 'B533557643/', R + 'B536570031/', R + 'B537328076/', R + 'B537452746/', R + 'B537966132/', R + 'B538506311/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'PayPay only; no reservations; Wi-Fi and outlets.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区西橋詰町798-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.995267, 135.767389); GSI matched only the town 京都府京都市下京区西橋詰町 (also tried 西橋詰町798 and 五条通 prefix), so not cross-checked at lot level; the Tabelog point sits on the Kamo River west bank at Gojo, as reviewers describe; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537966132/'],
    price_note: 'No menu read; prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Basque cheesecake', '¥700', 'Cakes', 'ask', 'no', 'August 2026.', 'basque_cheesecake'),
      it('', '', 'Drink set with cake (add-on)', '¥300', 'Drinks', '', '', 'August 2026.', 'drink_set'),
    ] }, {
    cuisine: '鴨川沿いのカフェ: ほとんどの席から鴨川が見える (2026年の口コミ)・季節限定を含む数種のバスクチーズケーキ700円、ドリンクセットは300円増し (2026年5〜8月)・クリームと苺のガトーショコラ、いちごのフィナンシェケーキ、オレンジのパフェ、プリン (2026年2〜9月)・唐揚げとハンバーグのランチプレート、サンドイッチ (2026年4〜9月)・オリジナルブレンドを含む3種のハンドドリップ、アメリカーノ、カフェラテ、バニララテ (2026年の口コミ)',
    neighborhood: '五条の鴨川西岸。京阪清水五条駅から徒歩3分',
    gf_detail: '要確認。バスクチーズケーキ、ガトーショコラ、フィナンシェケーキ、プリン、パフェ、唐揚げやハンバーグのランチプレート、サンドイッチ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ハンドドリップやアメリカーノは合うが、ケーキ、プリン、ランチプレートは乳製品、卵、肉を使う (2026年の口コミ)。',
    notes: '[カフェ・五条、窓いっぱいの鴨川] 鴨川西岸の五条、元 efish の場所のカフェ。窓際のカウンターやソファから川が目の前に広がり、夏は川で水遊びする人も見える。目当てはバスクチーズケーキ (700円、ドリンク付きで1,000円) や唐揚げのランチプレートとハンドドリップ。週末は混み、注文の仕方は少しわかりにくい。PayPay のみ、テラスはペット可。',
  });
}

// ================================================================ 京の米料亭 八代目儀兵衛
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26014418/'; const R = TB + 'dtlrvwlst/';
  const JOB = 'https://employment.en-japan.com/desc_1429729/';
  const B = day(['08:00', '15:00']); const BD = day(['08:00', '15:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_hachidaime_gihey_gion', name: '京の米料亭 八代目儀兵衛 (Hachidaime Gihey)', category: 'OMNI',
    lat: 35.004132, lng: 135.777203, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pot-cooked white rice with grilled fish (Saikyo-miso sablefish, salmon), dashimaki, pickles and mentaiko; the miso and soy seasonings are not described for gluten (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set meals built around grilled fish, egg and dashi (2026 reviews).',
    hours_raw: 'Breakfast and lunch 8:00–15:00 (food L.O. 14:30) daily; dinner 17:00–20:00 (L.O. 19:15) Friday–Sunday and holidays; lunch on some days only (check the site); irregular closures; per Tabelog, closed in February and August (Tabelog). Reservations recommended; 50-minute seating; arrive 10 minutes early to order outside — a booking is released if you are not there 5 minutes before (Tabelog; October 2026). Walk-ins join the queue (October 2026). Cards, IC cards, other e-money, PayPay and Alipay (Tabelog). 22 seats: counters on both floors, a table and a raised room upstairs (Tabelog). Non-smoking (Tabelog). Facing Yasaka Shrine, 8 min from Gion-Shijo Stn (Tabelog).',
    hours: { 0: B, 1: B, 2: B, 3: B, 4: BD, 5: BD, 6: BD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Facing Yasaka Shrine, Gion — 8 min from Keihan Gion-Shijo Stn',
    cuisine: 'Rice-merchant’s restaurant: glossy pot-cooked white rice with unlimited refills, okoge with sweet soy, and dashi or hōjicha chazuke to finish (2026 reviews) · grilled sablefish Saikyo gozen ¥2,480 — miso-marinated four days; grilled salmon gozen ¥1,980; three-grilled-fish gozen ¥1,980 (October 2026) · sides: dashimaki, shirasu, mentaiko, pickles, homemade tofu; ikura add-on (October 2026) · sake, shochu, wine (Tabelog)',
    website: null, gmaps: gm('京の米料亭 八代目儀兵衛'), menu_url: null,
    notes: '[Rice · Yasaka Shrine, breakfast built on the rice] The restaurant of a Kyoto rice merchant, right in front of Yasaka Shrine, where the star is the white rice — cooked in pots, refilled as often as you like, then served as crunchy okoge and finally as chazuke. A grilled-fish set (¥1,980–2,480) carries it. Book a breakfast slot: you order outside ten minutes early and have 50 minutes at the table. Dinner Friday–Sunday only.',
    chef_bio: { chef_name: null, roles: ['Operated by 株式会社八代目儀兵衛 (rice merchant)'], origin: null,
      background: 'Per the operator’s job listing (en-japan): a Kyoto rice merchant founded in 1787 (incorporated 2006) that runs three rice restaurants — Kyoto Gion, Tokyo Ginza and OMOYA. An October 2026 reviewer notes Kyoto restaurants and hotels that serve 八代目儀兵衛 rice.',
      philosophy: null, specialty: 'Pot-cooked white rice; Saikyo-miso sablefish.',
      anecdotes: [
        { text: 'An October 2026 diner on a second lunch of the day ordered the three-fish set and envied neighbours asking for rice refills.', source: R + 'B537590301/' },
        { text: 'An October 2026 family waited outside ten minutes early to choose from the menu and wondered how that works on rainy or hot days.', source: R + 'B537442464/' },
        { text: 'An October 2026 regular found three bowls in one breakfast differed in texture and stickiness, and wondered why.', source: R + 'B537083021/' },
      ],
      japanese_sources_summary: '食べログ: 京の米料亭 八代目儀兵衛、日本料理、東山区祇園町北側296、祇園四条駅から徒歩8分 (八坂神社正面)、8:00〜15:00 (L.O.14:30)、金土日・祝は夜17:00〜20:00 (L.O.19:15)、不定休、2月と8月は休業、50分制、予約時刻の10分前に来店し先に注文、5分前に来なければキャンセル扱い、カード・電子マネー・QR可、22席、禁煙。求人 (en-japan): 株式会社八代目儀兵衛、1787年創業の米屋、米料亭は京都祇園・東京銀座・OMOYA の3店舗。口コミ (2026年、英語): 釜炊きの白ご飯のおかわり自由、おこげ、だし茶漬けかほうじ茶漬け、銀だらの西京焼き御膳2,480円、鮭御膳1,980円、焼き魚三種御膳1,980円、だし巻き、しらす、明太子、漬物、自家製豆腐、行列。',
      confidence: 'medium', sources: [TB, JOB, R + 'B265642733/', R + 'B536409825/', R + 'B536727901/', R + 'B537052224/', R + 'B537083021/', R + 'B537350822/', R + 'B537442464/', R + 'B537590301/', R + 'B538039190/', R + 'B538158418/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; arrive 10 minutes early to order; 50-minute seating.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側296',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004132, 135.777203); cross-checked: GSI 京都府京都市東山区祇園町北側296番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537350822/', R + 'B537590301/'],
    price_note: 'No menu read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Grilled sablefish Saikyo gozen', '¥2,480', 'Set meals', 'ask', 'no', 'October 2026.', 'gindara_saikyo'),
      it('', '', 'Grilled salmon gozen', '¥1,980', 'Set meals', 'ask', 'no', 'October 2026.', 'salmon_gozen'),
      it('', '', 'Three grilled fish gozen', '¥1,980', 'Set meals', 'ask', 'no', 'October 2026.', 'three_fish_gozen'),
    ] }, {
    cuisine: '米屋の料亭: 釜炊きのつやのある白ご飯をおかわり自由で、甘い醤油のおこげ、締めは出汁かほうじ茶の茶漬け (2026年の口コミ)・銀だらの西京焼き御膳2,480円 (4日間味噌漬け)、鮭の焼き魚御膳1,980円、焼き魚三種の御膳1,980円 (2026年10月)・だし巻き、しらす、明太子、漬物、自家製豆腐、いくらの追加 (2026年10月)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '祇園、八坂神社の正面。京阪祇園四条駅から徒歩8分',
    gf_detail: '要確認。釜炊きの白ご飯に焼き魚 (銀だらの西京焼き、鮭)、だし巻き、漬物、明太子。味噌や醤油のグルテンの説明はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。焼き魚、卵、出汁の定食 (2026年の口コミ)。',
    notes: '[米料亭・八坂神社前、ご飯が主役の朝ごはん] 八坂神社の正面、京都の米屋が営む店。主役は白ご飯で、釜で炊き、何度でもおかわりでき、おこげ、最後は茶漬けに。焼き魚の御膳 (1,980〜2,480円) がそれを支える。朝の枠を予約し、10分前に店の外で注文、席は50分。夜は金〜日のみ。',
  });
}

// ================================================================ 周知
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26024624/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_shuchi_soba_nijo', name: '周知 (Shuchi)', category: 'OMNI',
    lat: 35.013581, lng: 135.765593, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is 100% buckwheat, but the dipping sauce and broth are soy-based and not described for gluten, and the menu has tempura, croquettes and fried dishes (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba broth and izakaya dishes built on dashi, fish, duck and meat (2023–2026 reviews).',
    hours_raw: '18:00–2:00, Monday–Saturday; closed Sunday; hours may change (Tabelog). Handmade soba until it sells out (Tabelog). Reservations accepted (Tabelog). Cards and e-money accepted; no QR (Tabelog). 21 seats: 7 at the counter, 14 at tables and sofas upstairs (Tabelog; August 2024). Smoking allowed (Tabelog; February 2024). Enter from Nijo-Tominokoji, south of the Imperial Palace, 8 min from Kyoto Shiyakusho-mae Stn (Tabelog; April 2023). Opened 29 April 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nijo-Tominokoji, south of the Imperial Palace — 8 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Soba izakaya open late: drinking snacks and sake, then handmade 100% buckwheat soba to finish (2023–2026 reviews) · otoshi of a rich sake-kasu soup; itawasa; a large potato salad; seared sawara tataki; five-item sake snack plate; wakasagi tempura; duck simmered with shungiku; unagi-maki with grated yam; tempura soba to close (December 2025, Japanese review) · crab-miso cream croquettes, smoky potato salad, shrimp and broad-bean tempura (April 2023) · chicken liver with sansho, simmered bamboo shoot (April 2024) · smoked daikon, mizu-nasu, onion with shuto oil, duck soba, simmered whelk, moringa ohitashi (2025–2026) · zaru soba, hot soba, several soba choices · a wide sake list, e.g. Tsurugoe (May 2026)',
    website: null, gmaps: gm('周知 蕎麦 京都 二条'), menu_url: null,
    notes: '[Soba izakaya · Nijo-Tominokoji, open until 2 a.m.] A rare late-night spot south of the Imperial Palace: a counter downstairs and sofas upstairs, a long sake list and careful drinking snacks — sawara tataki, duck with shungiku, crab-miso croquettes — then handmade 100% buckwheat soba to finish, cold as zaru or in hot broth (until it sells out). Fair prices. Smoking is allowed inside. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 29 April 2014. A December 2025 Japanese reviewer calls it a valuable late-opening izakaya in the Goshominami area.',
      philosophy: null, specialty: 'Handmade 100% buckwheat soba; sake.',
      anecdotes: [
        { text: 'A May 2026 diner had walked past many times taking it for an ordinary izakaya, then found it serves good soba.', source: R + 'B529111422/' },
        { text: 'A February 2024 diner thought the smoking allowed inside a drawback for non-smokers, but found the food and prices more than made up for it.', source: R + 'B479691443/' },
      ],
      japanese_sources_summary: '食べログ: 周知、そば、中京区二条通富野小路東入ル尾張町230-2、京都市役所前駅から徒歩8分、月〜土 18:00〜翌2:00、日曜休み、手打ちそばは売り切れ次第終了、予約可、カード・電子マネー可、21席 (カウンター7、2階テーブル14)、喫煙可、2014年4月29日オープン。口コミ (2025年12月、日本語): 御所南の夜遅くまでやっている居酒屋、突出しの粕汁、板わさ、ポテサラ、鰆のタタキ、酒の肴5種類、わかさぎの天ぷら、鴨の菊菜煮、トロロ入りの鰻巻き、天ぷら蕎麦で〆。口コミ (2023〜2026年、英語): 蟹味噌のクリームコロッケ、十割そば、鴨そば、日本酒が豊富。',
      confidence: 'medium', sources: [TB, R + 'B455339812/', R + 'B479691443/', R + 'B483155794/', R + 'B492843760/', R + 'B503407578/', R + 'B519046951/', R + 'B523900160/', R + 'B529111422/', R + 'B533232239/', R + 'B534028698/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night izakaya; smoking allowed; soba sells out.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通富野小路東入ル尾張町230-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.013581, 135.765593); cross-checked: GSI 京都府京都市中京区尾張町230番地 (lot) 70m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519046951/', R + 'B483155794/'],
    price_note: 'No menu or dish prices read; Tabelog averages ¥2,000–3,999.', last_checked: TODAY, items: [
      it('', '', 'Zaru soba (100% buckwheat)', '', 'Soba', 'ask', 'no', 'April 2024; price not given.', 'zaru_soba'),
      it('天ぷら蕎麦', '', 'Tempura soba', '', 'Soba', 'no', 'no', 'December 2025; price not given.', 'tempura_soba'),
    ] }, {
    cuisine: '夜遅くまで開くそば居酒屋: 酒の肴と日本酒、締めに手打ちの十割そば (2023〜2026年の口コミ)・突出しの濃厚な粕汁、板わさ、大きなポテサラ、鰆のタタキ、酒の肴5種類、わかさぎの天ぷら、鴨の菊菜煮、トロロ入りの鰻巻き、天ぷら蕎麦で〆 (2025年12月の日本語の口コミ)・蟹味噌のクリームコロッケ、燻製の香りのポテサラ、海老とそら豆の天ぷら (2023年4月)・鶏レバーの山椒煮、筍の炊いたん (2024年4月)・燻製大根、水なす、玉ねぎの酒盗オイル、鴨そば、ばい貝の煮付け、モリンガのおひたし (2025〜2026年)・ざるそば、温かいそば、そばの種類も多い・豊富な日本酒、たとえば Tsurugoe (2026年5月)',
    neighborhood: '御所の南、二条富小路。京都市役所前駅から徒歩8分',
    gf_detail: '要確認。そばは十割だが、つゆやだしは醤油ベースでグルテンの説明はなく、天ぷら、コロッケ、揚げ物もある (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。そばのだしと、出汁、魚、鴨、肉の居酒屋料理 (2023〜2026年の口コミ)。',
    notes: '[そば居酒屋・二条富小路、深夜2時まで] 御所の南の、夜遅くまで開いている貴重な店。1階はカウンター、2階はソファ席。豊富な日本酒と手の込んだ肴 (鰆のタタキ、鴨の菊菜煮、蟹味噌のクリームコロッケ) のあと、手打ちの十割そばを、ざるか温かいそばで締める (売り切れ次第終了)。値段は手ごろ。店内は喫煙可。日曜休み。',
  });
}

save();
