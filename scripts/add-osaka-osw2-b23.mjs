// Osaka sweep (2-mile circle around Dotonbori), core leftovers — worker osw2, batch 23 (lane: Tabelog id mod 4 = 1).
//   + 手羽先の羽 難波店 Tebasaki no Hane Namba (chicken izakaya by Nankai Namba: wings, Tajima chicken sashimi, motsunabe; smoking)
//   + Noeud. × THE CHEF'S (French in KOKOHOTEL Osaka Shinsaibashi, Osaka sister of Noeud.TOKYO; vegan course available)
//   + スパイスキング8848 Spice King 8848 (spice izakaya and curry lunch in an alley off Shinsaibashi-suji)
//   + PASTA+ En to En (パスタピュ; homemade fresh pasta, organic vegetables, open from 9 AM, Itachibori)
//   Skipped (core, lane order):
//   - 宮崎郷土料理どぎゃん 立売堀店 27083077 — same-concept branch of a brand in data: osaka_dogyan_honten_bakuromachi
//     (宮崎郷土料理 どぎゃん 本店, Tabelog 27041482).
//   Chain and concept checks (Tabelog English keyword search, 2026-11-02):
//   - 手羽先の羽: two shops on Tabelog, 新世界店 (27126246) and this 難波店. Small group of two, neither in data; FLAGGED.
//   - Noeud. × THE CHEF'S: sister restaurant of Noeud.TOKYO (Tabelog 13247929, not in data); PATISSERIE & CAFE noeud. × the chef's
//     (27132250) is a café concept in the same hotel. Drafted as the Osaka restaurant.
//   - スパイスキング8848: one shop on Tabelog ("supaisu kingu" search; others are unrelated Spice King or Spice Kingdom shops).
//   - PASTA+: one shop (official site pasta-entoen.net: pasta workshop and shop).
//   None of the four added (nor 27126246, 13247929, 27132250) is in data/osaka.json (grep by name, romaji, address and Tabelog id, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-23');
skip('27083077', 'Chain in data: 宮崎郷土料理 どぎゃん is in data as osaka_dogyan_honten_bakuromachi (same concept).');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 手羽先の羽 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27052689/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const WD = day(['15:30', '24:00']); const WE = day(['11:30', '24:00']);
  put({
    id: 'osaka_tebasaki_no_hane_namba', name: '手羽先の羽 難波店 (Tebasaki no Hane Namba ten)', category: 'OMNI',
    lat: 34.662285, lng: 135.500785, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried chicken wings, chicken nanban, gyoza, croquettes and katsu; skewers come with sauce or salt (Tabelog menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken and offal izakaya. Small vegetable plates (edamame, salted cucumber, chilled tomato) exist, but no vegan dishes are described.',
    hours_raw: 'Mon–Fri 15:30–24:00; Sat, Sun and holidays 11:30–24:00; open all year; enquire about reservations outside these hours (Tabelog). Reservations taken; private rooms; free private hire for 20 or more. No cards or e-money; PayPay accepted. ¥330 table charge. Smoking allowed, so children are not admitted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 2-8-94, コスギナンバビル 1F (Naniwa-ku) — 1 min from Nankai Namba Stn',
    cuisine: 'Chicken izakaya: chicken-wing kara-age (4 pieces ¥748), chicken-skin gyoza, chicken nanban, Tajima chicken skewers, assorted chicken sashimi, domestic beef motsunabe for two (¥2,376), teppan dishes; drink courses from ¥3,500 with two hours of drinks (Tabelog menu, January 2026)',
    website: TB, gmaps: gm('手羽先の羽 難波店'), menu_url: M,
    notes: "[Izakaya · Nambanaka, chicken wings and motsunabe by Nankai Namba] A chicken izakaya a minute from Nankai Namba Station, open since 2010 and until midnight every day. The name means 'wings', and diners order the sweet-spicy peppered wings by the ten, though two diners found the wings on the lean side; Tajima chicken sashimi (cleared after 20 minutes for hygiene, an October 2026 diner notes), yakitori and beef motsunabe fill the cheap drinking courses. Smoking is allowed, so children cannot enter. No cards; PayPay only. Sister shop in Shinsekai.",
    chef_bio: { chef_name: null, roles: ['Young manager unnamed (July 2026 review)'], origin: null, background: 'Per Tabelog, opened 1 September 2010; a Tabelog corporate member shop with a 新世界店 under the same name.', philosophy: null, specialty: 'Chicken wings; Tajima chicken sashimi; beef motsunabe.',
      anecdotes: [
        { text: '"The tebasaki is highly recommended, and indeed it was crispy and juicy—definitely worth trying." — March 2024.', source: R + 'B482241199/' },
        { text: '"Despite the restaurant\'s name suggesting wings, the tebasaki (chicken wings) were on the lean side." — December 2024.', source: R + 'B498128343/' },
        { text: '"The young staff were attentive and provided excellent service, which I appreciated." — October 2026.', source: R + 'B532240257/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 手羽先の羽 難波店、浪速区難波中2-8-94 コスギナンバビル 1F、南海難波駅から徒歩1分、2010年9月1日オープン、平日15:30〜24:00、土日祝11:30〜24:00、年中無休、チャージ330円、カード・電子マネー不可、PayPay可、喫煙可のため子どもは入店不可、個室あり、20名以上は貸切無料。メニュー (2026年1月): 手羽先唐揚げ4本748円、鶏皮餃子、チキン南蛮、Tajima の鶏の串焼き、鶏刺し盛り合わせ、国産牛もつ鍋2人前2,376円、飲み放題付きコース3,500円から。口コミ (2024年〜2026年10月): 甘辛くこしょうの効いた手羽先を10本追加、手羽先は細めという声も、臭みのない鶏刺しとレバー、鶏刺しは衛生のため20分で下げる、生ビールセット880円、若いスタッフの気配り。',
      confidence: 'medium', sources: [TB, M, R + 'B477521870/', R + 'B480813223/', R + 'B482241199/', R + 'B491574289/', R + 'B497275612/', R + 'B498128343/', R + 'B498163424/', R + 'B505862360/', R + 'B523026459/', R + 'B532240257/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-8-94 コスギナンバビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with a January 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中二丁目8番94号 (go) 5m. Nearest record (osaka_ruggeri_nambanaka, "…難波中2丁目8-93", next lot) is about 10 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated January 2026, tax included; ¥330 table charge. Diners report ¥3,000–4,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Chicken-wing kara-age, 4 pieces', '¥748', 'Chicken', 'no', 'no', '8 pieces ¥1,496.', 'tebasaki'),
      it('', '', 'Chicken-skin gyoza', '¥638', 'Chicken', 'no', 'no', '', 'torikawa_gyoza'),
      it('', '', 'Chicken nanban, single', '¥638', 'Chicken', 'no', 'no', 'Manager\'s recommendation.', 'chicken_nanban'),
      it('', '', 'Assorted skewers, chef\'s choice', '¥1,408', 'Yakitori', 'ask', 'no', '', 'yakitori_omakase'),
      it('', '', 'Beef motsunabe, for two', '¥2,376', 'Hot pot', 'no', 'no', 'Minimum two servings.', 'motsunabe'),
    ] }, {
    cuisine: '鶏の居酒屋: 手羽先唐揚げ (4本748円)、鶏皮餃子、チキン南蛮、Tajima の鶏の串焼き、鶏刺し盛り合わせ、国産牛もつ鍋2人前 (2,376円)、鉄板料理、2時間飲み放題付きコース3,500円から (食べログのメニュー、2026年1月)',
    neighborhood: '浪速区難波中2-8-94 コスギナンバビル 1F。南海難波駅から徒歩1分',
    gf_detail: 'グルテンフリーではありません。手羽先唐揚げ、チキン南蛮、餃子、コロッケ、カツ。串はたれか塩 (食べログのメニュー)。',
    vegan_detail: 'ヴィーガンではありません。鶏ともつの居酒屋。枝豆、塩きゅうり、冷やしトマトなどの小皿はあるが、ヴィーガンの料理の説明はない。',
    notes: '[居酒屋・難波中、南海難波駅そばの手羽先ともつ鍋] 南海難波駅から徒歩1分、2010年からの鶏の居酒屋で、毎日24時まで。甘辛くこしょうの効いた手羽先を10本単位で頼む客もいるが、細めという声も二つ。Tajima の鶏刺し (2026年10月の客によると衛生のため20分で下げる)、焼き鳥、牛もつ鍋が手頃な飲み放題コースの中心。喫煙可のため子どもは入れない。カード不可、PayPayのみ。新世界にも同じ名前の店がある。',
  });
}

// ================================================================ Noeud. × THE CHEF'S
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27133529/'; const R = TB + 'dtlrvwlst/'; const L = TB + 'dtlmenu/lunch/';
  const SITE = 'https://noeud.osaka.tagaya.co.jp/';
  const H2 = day(['12:30', '15:00'], ['18:30', '21:30']); const SUN = day(['12:30', '15:00']);
  put({
    id: 'osaka_noeud_the_chefs_minamisenba', name: 'Noeud. × THE CHEF\'S', category: 'OMNI',
    lat: 34.676176, lng: 135.502668, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses come with homemade whole-grain bread, and dishes have included brioche, sablé and canola-flower tempura (reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Every course includes a dish made entirely of vegetables with no animal products, and a fully vegan course is available (the restaurant, on Tabelog).',
    hours_raw: 'Thu–Sat 12:30–15:00 and 18:30–21:30 (last food order 19:00); Sun 12:30–15:00; closed Mon–Wed; holidays and the days around them follow the regular schedule; hours may change for weddings and private events in the hotel (Tabelog). Reservations taken. 10% service charge all day. Cards, transport IC and other e-money, PayPay, d Barai, Rakuten Pay, au PAY. Non-smoking; wheelchair accessible; children welcome, with a kids\' plate or mini course on request (Tabelog). A March 2026 diner wrote that for a while only group reservations would be taken.',
    hours: { 3: H2, 4: H2, 5: H2, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-3-17, KOKOHOTEL Osaka Shinsaibashi 1F — 5 min from Shinsaibashi Stn',
    cuisine: 'French cuisine from Kansai and western-Japan produce, using whole vegetables from contracted farms, unspecified-species fish and culled game: lunch courses Déclic (4 dishes ¥4,455) and Grâce (6 dishes ¥6,050), dinner courses; seasonal afternoon tea (Tabelog lunch menu, October 2026; reviews)',
    website: SITE, gmaps: gm('Noeud THE CHEF\'S 心斎橋'), menu_url: L,
    notes: "[French · Minami-Senba, Noeud.TOKYO's Osaka sister] A French restaurant on the ground floor of KOKOHOTEL Osaka Shinsaibashi, opened in January 2023 as the Osaka sister of Noeud.TOKYO; 'nœud' means 'connection'. The kitchen uses vegetables from contracted Kansai farms down to leaves, stems and peel, composts the rest, and serves game culled as pests. Diners in 2026 praise the salmon tartare, the all-carrot plate and homemade bread with sesame and apple butter, and found the calm room mostly Japanese; one found some plates hard to eat. Every course has a vegan dish, and a full vegan course is offered.",
    chef_bio: { chef_name: null, roles: ['Chef Minato (surname only, March 2026 review)'], origin: null, background: 'Per Tabelog, opened 18 January 2023 in Osaka as a sister restaurant to Noeud.TOKYO; the chef chooses seasonal produce from contracted farmers, mainly in western Japan, and uses parts usually thrown away. A November 2025 diner says Noeud.tokyo has been Michelin-listed four years running.', philosophy: 'The restaurant on Tabelog: make full use of the harvest so the growers\' intentions are honoured; fish are bought without fixing the species to protect stocks.', specialty: 'Seasonal French courses from Kansai produce; vegan course.',
      anecdotes: [
        { text: '"From the leaves and stems of the turnip to the skins of the apples, everything is treated with care" — January 2026.', source: R + 'B521463230/' },
        { text: '"There were a few moments where the presentation made them slightly difficult to eat." — December 2025.', source: R + 'B519205401/' },
        { text: '"I enjoyed a Halloween Afternoon Tea." — October 2026.', source: R + 'B537040368/' },
      ],
      japanese_sources_summary: '公式サイト (noeud.osaka.tagaya.co.jp): 自然、季節、食が調和するサステナブルレストラン、チャペルでの挙式も。食べログ (英語版): Noeud. × THE CHEF\'S、南船場3-3-17 KOKOHOTEL大阪心斎橋 1F、心斎橋駅から徒歩5分、2023年1月18日オープン、Noeud.TOKYO の姉妹店、木〜土12:30〜15:00・18:30〜21:30 (L.O.19:00)、日12:30〜15:00、月〜水休み、婚礼や貸切で変わることあり、サービス料10%、禁煙、車いす可、子ども向けのプレートやミニコースは相談、英語のスタッフ、契約農家の野菜を葉や皮まで使う、魚種を決めずに仕入れ、駆除されたジビエ、全コースに動物性不使用の一皿、完全ヴィーガンのコースあり。ランチ (2026年10月): Déclic 4品4,455円、Grâce 6品6,050円。口コミ (2025年11月〜2026年10月): Minato シェフ、サーモンのタルタル、にんじんだけの一皿、ごまとりんごのバター、落ち着いた日本人中心の客層、食べにくい盛り付けもという声、2026年3月は当面団体予約のみという声、ハロウィンのアフタヌーンティー。',
      confidence: 'medium', sources: [TB, L, SITE, R + 'B518999490/', R + 'B519205401/', R + 'B520866929/', R + 'B521438249/', R + 'B521463230/', R + 'B524086098/', R + 'B524257469/', R + 'B526462953/', R + 'B526528796/', R + 'B537040368/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff listed by the restaurant on Tabelog; a December 2025 diner found the guests mostly Japanese.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-3-17 KOKOHOTEL大阪心斎橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site; Tabelog lunch menu updated October 2026; an October 2026 review.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目3番17号 (go) 22m. Nearest record (osaka_nikushou_gyuko_shinsaibashi, "…南船場3-4-22") is about 46 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [L, TB],
    price_note: 'Tabelog lunch menu last updated October 2026, tax included; 10% service charge. Diners report ¥4,000–5,999 at lunch and ¥8,000–19,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Lunch course Menu Déclic (4 dishes: appetizer, fish, meat, dessert)', '¥4,455', 'Lunch', 'ask', 'ask', '', 'lunch_course'),
      it('', '', 'Lunch course Menu Grâce (6 dishes)', '¥6,050', 'Lunch', 'ask', 'ask', '', 'lunch_course_6'),
      it('', '', 'Vegan course', '', 'Course', 'ask', 'vegan', 'Offered per the restaurant on Tabelog; price not listed.', 'vegan_course'),
    ] }, {
    cuisine: '関西と西日本の食材のフランス料理: 契約農家の野菜を丸ごと使い、魚種を決めない魚、駆除されたジビエ。ランチコース Déclic (4品4,455円)、Grâce (6品6,050円)、ディナーコース、季節のアフタヌーンティー (食べログのランチメニュー、2026年10月、口コミ)',
    neighborhood: '南船場3-3-17 KOKOHOTEL大阪心斎橋 1F。心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。コースに自家製の全粒粉パン、料理にブリオッシュ、サブレ、菜の花の天ぷらも (口コミ)。',
    vegan_detail: '全コースに動物性食材を使わない野菜だけの一皿があり、完全ヴィーガンのコースもある (店の情報、食べログ)。',
    notes: '[フレンチ・南船場、Noeud.TOKYO の大阪の姉妹店] KOKOHOTEL大阪心斎橋の1階、2023年1月に Noeud.TOKYO の姉妹店として開いたフランス料理店。「nœud」はつながりの意味。契約した関西の農家の野菜を葉や茎、皮まで使い、残りは堆肥に、駆除されたジビエも使う。2026年の客はサーモンのタルタル、にんじんだけの一皿、ごまとりんごのバターを添えた自家製パンを褒め、落ち着いた店内は日本人が中心と書く。食べにくい盛り付けもあったという声も。全コースにヴィーガンの一皿があり、完全ヴィーガンのコースもある。',
  });
}

// ================================================================ スパイスキング8848
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27142409/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const H = day(['11:00', '15:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_spice_king_8848_hakuromachi', name: 'スパイスキング8848 (Spice King 8848)', category: 'OMNI',
    lat: 34.67863, lng: 135.501776, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Naan, gyoza, kara-age and yaki udon contain wheat; biryani and rice sets are the likelier choices (Tabelog menu; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; the menu has vegetable pakora, cumin potatoes and vegetable sticks, but no dish is marked vegan.',
    hours_raw: 'Daily 11:00–15:00 and 17:30–23:00 (last food order 22:30) (Tabelog). Reservations taken; private hire for 20–50. Cards (incl. UnionPay), transport IC and other e-money, PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay. Designated smoking area. Children welcome; kids\' menu. Tabelog lists halal and Hindu options. Take-out and delivery.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Hakuromachi 3-4-9 — 5 min from Shinsaibashi Stn (via Shinsaibashi-suji), at the back of an alley about 50 m east of the arcade',
    cuisine: 'Spice izakaya with Indian and Nepalese dishes: spiced skewers, chicken tikka, tandoori chicken, momo, pani puri, curries with naan; lunch sets such as the A Lunch (curry, naan or rice, salad and drink ¥900) and a chicken biryani set (¥1,000, limited to 10) (Tabelog menu, June 2024; reviews)',
    website: TB, gmaps: gm('スパイスキング8848 博労町'), menu_url: M,
    notes: "[Izakaya · Hakuromachi, spice izakaya in a Shinsaibashi alley] A spice izakaya opened in May 2024, hidden at the back of a narrow alley just east of the Shinsaibashi-suji arcade; a sign on the arcade points the way. Lunch is curry sets with refillable plain naan (cheese naan +¥250) and a ¥1,000 chicken biryani set, limited to 10; evenings bring spiced skewers, tikka, momo and Indian beer. A May 2026 diner says all the staff are from abroad and it seems family-run; an October 2026 diner found the 'normal' curry quite sweet.",
    chef_bio: { chef_name: null, roles: ['Staff unnamed (reviews)'], origin: null, background: 'Per Tabelog, opened 15 May 2024; an izakaya menu seasoned with spices, small curries to go with drinks, and wines chosen to suit Indian food.', philosophy: null, specialty: 'Chicken biryani set; spiced skewers.',
      anecdotes: [
        { text: '"All the staff are from abroad, and it seems to be a family-run business." — May 2026.', source: R + 'B527270253/' },
        { text: '"The fact that naan is free for refills is amazing!" — February 2026.', source: R + 'B522765400/' },
        { text: '"I ordered the spice level as normal, but it turned out to be quite sweet." — October 2026.', source: R + 'B537175737/' },
      ],
      japanese_sources_summary: '食べログ (英語版): スパイスキング8848、博労町3-4-9、心斎橋駅北改札から心斎橋筋商店街経由で徒歩5分、本町駅から徒歩6分、2024年5月15日オープン、毎日11:00〜15:00・17:30〜23:00 (L.O.22:30)、カード・電子マネー・QR決済可、分煙、子ども歓迎、ベジタリアン・ハラル・ヒンドゥーの対応あり。メニュー (2024年6月): スパイス串、スパイス煮卵、チキンティッカ丼、ジョルモモ、パニプリ、野菜パコラ、アルジラ。2026年4月の口コミ (日本語): 心斎橋筋商店街の看板から東へ50mほど、建物の隙間の小道の一番奥、10食限定のビリヤニセットとラッシー、鶏肉がごろごろ。英語の口コミ (2026年2月〜10月): Aランチ900円 (カレー、ナンかライス、サラダ、ドリンク)、プレーンナンはおかわり自由、チーズナン+250円、チキンビリヤニセット1,000円、スタッフは全員外国から来た人で家族経営らしいという声、普通の辛さが甘めだったという声。',
      confidence: 'medium', sources: [TB, M, R + 'B522765400/', R + 'B524615150/', R + 'B526394336/', R + 'B526678532/', R + 'B527270253/', R + 'B527627844/', R + 'B529730107/', R + 'B534436589/', R + 'B536243154/', R + 'B537175737/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff from abroad (May 2026). No English menu or English-speaking staff confirmed in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町3-4-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (kept: the shop is at the back of an alley; GSI 大阪府大阪市中央区博労町三丁目4番9号 (go) 22m). Nearest record (osaka_tempura_tenjin_hakuromachi, "…博労町3-4-11") is about 20 m from the GSI point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB, R + 'B534436589/', R + 'B529730107/'],
    price_note: 'Tabelog menu last updated June 2024, tax included; lunch prices from 2026 reviews. Diners report ¥1,000–1,999.', last_checked: TODAY, items: [
      it('', '', 'A Lunch: curry, naan or rice, salad, drink', '¥900', 'Lunch', 'no', 'ask', 'Plain naan refills free; cheese naan +¥250 (August 2026).', 'curry_lunch'),
      it('', '', 'Chicken biryani set with drink (10 a day)', '¥1,000', 'Lunch', 'ask', 'no', 'June 2026.', 'biryani'),
      it('', '', 'Spice King assorted skewers, 3', '¥580', 'Skewers', 'ask', 'no', '', 'spice_skewers'),
      it('', '', 'Jhol momo (Nepalese chicken dumplings), 4', '¥580', 'Dishes', 'no', 'no', '', 'momo'),
      it('', '', 'Vegetable pakora, 4', '¥480', 'Dishes', 'ask', 'ask', '', 'pakora'),
    ] }, {
    cuisine: 'インドとネパールの料理のあるスパイス居酒屋: スパイス串、チキンティッカ、タンドリーチキン、モモ、パニプリ、ナンとカレー。ランチはAランチ (カレー、ナンかライス、サラダ、ドリンクで900円) や10食限定のチキンビリヤニセット (1,000円) (食べログのメニュー、2024年6月、口コミ)',
    neighborhood: '博労町3-4-9。心斎橋駅から心斎橋筋経由で徒歩5分、商店街から東へ50mほどの路地の奥',
    gf_detail: '要確認。グルテンの情報なし。ナン、餃子、唐揚げ、焼うどんは小麦入り。ビリヤニやライスのセットのほうが選びやすい (食べログのメニュー、口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアン対応あり。野菜パコラ、アルジラ (クミンのじゃがいも炒め)、野菜スティックはあるが、ヴィーガンと明示した料理はない。',
    notes: '[居酒屋・博労町、心斎橋の路地のスパイス居酒屋] 2024年5月オープン、心斎橋筋商店街のすぐ東、細い路地の一番奥に隠れたスパイス居酒屋で、商店街の看板が目印。昼はプレーンナンおかわり自由のカレーセット (チーズナン+250円) と10食限定のチキンビリヤニセット1,000円、夜はスパイス串、ティッカ、モモ、インドのビール。2026年5月の客はスタッフが全員外国から来た人で家族経営らしいと書き、10月の客は「普通」の辛さのカレーがかなり甘かったと言う。',
  });
}

// ================================================================ PASTA+ En to En
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27128633/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://www.pasta-entoen.net/';
  const H = day(['09:00', '21:00']); const SUN = day(['09:00', '15:30']);
  put({
    id: 'osaka_pasta_plus_en_to_en_itachibori', name: 'PASTA+ En to En (パスタピュ)', category: 'OMNI',
    lat: 34.679069, lng: 135.492883, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a fresh-pasta workshop; pasta, gnocchi (potato and flour), bread and cakes are all made in house (official site; Tabelog menu). At lunch the pasta can be swapped for a vegetable plate (¥100 off).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'A plant-based omakase of three seasonal appetizers is offered, Tabelog lists vegan options, and lunch pastas have included a seasonal vegetable pasta (Tabelog menu; May 2026 review). Ask about egg in the fresh pasta.',
    hours_raw: 'Tue–Sat 9:00–21:00 (last order 20:30); Sun 9:00–15:30 (last order 15:00); closed Monday and the day after a holiday; breakfast sets 9:00–11:00 (Tabelog). Same-day, seat-only and 5+ bookings by phone; online booking for courses only (official site). Cards, iD, PayPay, d Barai, Rakuten Pay, au PAY. Non-smoking. English menu and English-speaking staff; children and strollers welcome (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: SUN }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Itachibori 2-4-4, 永瑞ビル 1F (Nishi-ku), on Naniwa-suji — 6 min from Nishi-Ohashi Stn exit 1; bus 75 to Tachiuribori 2-chome',
    cuisine: 'Italian with homemade fresh pasta, organic vegetables and natural wine, all day: breakfast hot sandwiches and eggs Benedict; pastas such as tortellini, potato gnocchi, Tosa akaushi lasagna and carbonara made without cream; lunch courses with three seasonal small plates; dinner courses A–C (¥6,600–11,000); homemade financiers and tiramisu; olive oil and frozen pasta for sale (Tabelog menu, July 2026; official site; reviews)',
    website: SITE, gmaps: gm('PASTA+ En to En 立売堀'), menu_url: M,
    notes: "[Italian · Itachibori, homemade fresh pasta all day] A pasta workshop and Italian dining room on Naniwa-suji, opened in April 2022 and open from 9 AM; the name is read 'Pasta Più' (パスタピュ). Pasta, bread and cakes are made in house; the shop imports its own olive oil, sells frozen pasta, and offers a plant-based appetizer plate. Diners in 2026 praise the fresh tagliatelle, ravioli and mushroom cream, attentive service and shared plates; one found the clams and bottarga flat, and the cheese dishes did not suit one family.",
    chef_bio: { chef_name: null, roles: ['Owner unnamed (reviews)'], origin: null, background: 'Per the official site, PASTA+ is a pasta workshop with food and goods for sale, "Più" meaning it is not only pasta; Italian food built on flavours that put Italians at ease, everything including bread and cakes made in house; frozen pasta featured in あまから手帖 (August 2026 issue) and stalls at the Harukas Kintetsu main store in October 2026. Operated by Remix Co., Ltd. (Tabelog); opened 21 April 2022.', philosophy: '"Italian food that makes Italians feel at home" (official site).', specialty: 'Homemade fresh pasta.',
      anecdotes: [
        { text: '"The name is pronounced \'Pasta Pyu.\'" — June 2026.', source: R + 'B520644127/' },
        { text: '"The homemade fresh pasta was truly delightful." — May 2026.', source: R + 'B527278360/' },
        { text: '"The clams themselves had no flavor, and the bottarga lacked richness." — October 2026.', source: R + 'B538181240/' },
      ],
      japanese_sources_summary: '公式サイト (pasta-entoen.net): PASTA＋ (パスタピュ Pasta Più)、パスタ工房と飲食物販の店、「＋」はパスタだけではないという意味、イタリア人がほっとする味、パンやケーキも全て店内で手作り、業務用パスタのOEMも。当日・席のみ・5名以上の予約は電話、各サイトはコースのみ。2026年10月8日〜13日にハルカス近鉄本店の催しに出店、あまから手帖8月号で冷凍パスタが紹介。食べログ (英語版): 西区立売堀2-4-4 永瑞ビル 1F、西大橋駅1番出口から徒歩6分、2022年4月21日オープン、火〜土9:00〜21:00、日9:00〜15:00 (L.O.)、月・祝翌日休み、英語メニューと英語のスタッフ、禁煙。メニュー (2026年7月): 季節の前菜3種1,500円 (植物性のおまかせ3種も可)、トルテッリーニ、じゃがいものニョッキ、土佐あかうしのラザニア、朝のホットサンドとエッグベネディクト、ディナーコース6,600〜11,000円。口コミ (2026年): 手打ちのタリアテッレ、ラビオリ、きのこのクリーム、自家輸入のオリーブオイル、丁寧な接客、取り分け、あさりとからすみが物足りないという声、チーズの料理が口に合わなかったという声。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B520644127/', R + 'B527278360/', R + 'B528675292/', R + 'B531295651/', R + 'B533473827/', R + 'B534131506/', R + 'B534212477/', R + 'B536451323/', R + 'B538181240/', R + 'B538504888/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区立売堀2-4-4 永瑞ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with October 2026 news; Tabelog menu updated July 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区立売堀二丁目4番4号 (go) 10m. Nearest record (osaka_nunome_no_sato_shinmachi) is about 78 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB, SITE],
    price_note: 'Tabelog menu last updated July 2026, tax included; a service charge may be added. Diners report ¥3,000–9,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Three seasonal appetizers (plant-based selection available)', '¥1,500', 'Appetizers', 'ask', 'vegan', 'Per person; ask for the plant-based omakase.', 'antipasti'),
      it('', '', 'Potato gnocchi with tomato sauce', '¥1,750', 'Pasta', 'no', 'ask', 'Potato and flour.', 'gnocchi'),
      it('', '', 'Tortellini in Parmigiano cream', '¥2,600', 'Pasta', 'no', 'no', 'Filled with pork, prosciutto and Parmigiano.', 'tortellini'),
      it('', '', 'Eggs Benedict breakfast set (9:00–11:00)', '¥1,980', 'Breakfast', 'no', 'no', 'With a drink.', 'eggs_benedict'),
      it('', '', 'Dinner A course', '¥6,600', 'Course', 'no', 'ask', 'Seasonal small plates, pasta and main.', 'dinner_course'),
    ] }, {
    cuisine: '手打ちの生パスタ、有機野菜、ナチュラルワインのイタリアンを一日中: 朝のホットサンドとエッグベネディクト、トルテッリーニ、じゃがいものニョッキ、土佐あかうしのラザニア、生クリームを使わないカルボナーラ、季節の小皿3種付きのランチコース、ディナーコースA〜C (6,600〜11,000円)、手作りのフィナンシェとティラミス、オリーブオイルと冷凍パスタの販売 (食べログのメニュー、2026年7月、公式サイト、口コミ)',
    neighborhood: '西区立売堀2-4-4 永瑞ビル 1F、なにわ筋沿い。西大橋駅1番出口から徒歩6分、75系統のバスで立売堀2丁目',
    gf_detail: 'グルテンフリーではありません。生パスタの工房で、パスタ、ニョッキ (じゃがいもと小麦粉)、パン、ケーキはすべて店内で手作り (公式サイト、食べログのメニュー)。昼はパスタを野菜のプレートに替えられる (100円引き)。',
    vegan_detail: '季節の前菜3種は植物性のおまかせにでき、食べログではヴィーガン対応あり。ランチのパスタには季節の野菜のパスタもあった (食べログのメニュー、2026年5月の口コミ)。生パスタの卵は要確認。',
    notes: '[イタリアン・立売堀、一日中の手打ち生パスタ] なにわ筋沿いのパスタ工房とイタリアンの店で、2022年4月オープン、朝9時から。読みは「パスタピュ」。パスタ、パン、ケーキはすべて店内で手作りし、オリーブオイルは自家輸入、冷凍パスタも販売、植物性の前菜の盛り合わせもある。2026年の客は生のタリアテッレ、ラビオリ、きのこのクリーム、丁寧な接客と取り分けを褒める。あさりとからすみが物足りなかったという声、チーズの料理が家族の口に合わなかったという声も。',
  });
}

save();
