// Kyoto priority (kyoto-missed), worker osw13, batch 72 — lane: Tabelog id mod 6 = 0.
// Part 1: clear the notable lane (all chains / large-parent sub-brands).
// Part 2: four core drafts — Kroon, LUSH LIFE, イーサン, まつお.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-72');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ---------------------------------------------------------------- notable lane: chains
skip('26004540', 'chain: グリルキャピタル東洋亭 高島屋店 — six グリルキャピタル東洋亭 shops in the Kyoto crawl alone (ポルタ, 近鉄, 高島屋, JR京都伊勢丹, DELI 京都伊勢丹, 丸太町); 5+ same-name (Greg ruling 2026-11-05)');
skip('26002530', 'chain: 美々卯 京都伊勢丹店 — 美々卯 runs 12 shops centred on Osaka (gltjp.com directory); 5+ same-name (Greg ruling 2026-11-05)');
skip('26030436', 'chain: 金沢まいもん寿司 京都駅ポルタ店 — shops in Kanazawa, Saitama, Suita, Nagoya, Nishinomiya, Yokohama, Tokyo and more (EPARK and other listings); 5+ same-name (Greg ruling 2026-11-05)');
skip('26001132', 'chain: がんこ 高瀬川二条苑 — six がんこ shops in the Kyoto crawl alone (京都駅ビル, 京都ヨドバシ, とんかつがんこ, 三条本店, 西本願寺別邸, 高瀬川二条苑); 5+ same-name (Greg ruling 2026-11-05)');
skip('26027430', 'large parent: ぎをん為治郎 八条口店 is run by the yatsuhashi maker 西尾八ツ橋 (Gurunavi), which has eight 西尾八ツ橋 shops in the Kyoto crawl plus 西尾八ツ橋の里 and three 為治郎 shops; sub-brand of a large parent → chain (Greg ruling 2026-11-05)');
skip('26023596', 'chain: 志津屋 コトチカ京都店 — 志津屋 has 20+ shops in Kyoto (Keihan 2021: 21 in Kyoto; 2011 press release: 20+), ten in the crawl; 5+ same-name (Greg ruling 2026-11-05)');
skip('26037324', 'large parent: みのりカフェ 京都ポルタ店 is part of JA全農\'s directly run みのりみのる restaurant project (JA全農 materials; value-press 2015), with shops in Fukuoka, Ginza, Fukuyama and Kyoto Takashimaya; large parent → chain (Greg ruling 2026-11-05)');
skip('26007504', 'chain: 仙太郎 JR京都伊勢丹店 — the Kyoto wagashi maker sells at its Teramachi main shop and in department stores including Umeda Hankyu, Namba Takashimaya, Abeno Kintetsu, Nagoya and Tokyo (careermap job listings); 5+ same-name (Greg ruling 2026-11-05)');
skip('26034582', 'chain: 原価ビストロチーズプラス 京都駅タワー前 — run by 株式会社THAN (49 restaurants); チーズプラス has 10 shops plus 12 franchise (press release, September 2026); 5+ same-name (Greg ruling 2026-11-05)');
skip('26022816', 'chain: PAUL 京都三条店 — the French bakery chain, run in Japan by レアールパスコベーカリーズ as a franchise (All About; nissyoku), three PAUL shops in the Kyoto crawl alone; international chain (Greg ruling 2026-11-05)');

// ---------------------------------------------------------------- core lane skips
skip('26028672', 'group size unconfirmed: 高木鮮魚店 イオンモール京都店 has a sister shop inside Hankyu Umeda Station (Retty); the operator and the full shop count could not be found');
skip('26043954', 'brand already in data: 中華そば ますたに 梅小路店 is a branch of 中華そば ますたに, already in kyoto.json as kyr_chuka_soba_masutani_kita (北白川本店); a brand already in data → skip its other same-concept branches (Greg ruling 2026-11-05)');
skip('26022576', 'large parent: 伝丸 百万遍店 is a ramen brand of the ゼンショー group (appbank, July 2026), about 60 shops in Kanto and Tokai (mynavi 2021); chain (Greg ruling 2026-11-05)');

// ================================================================ Kroon
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26006514/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_kroon_demachiyanagi', name: 'Kroon', category: 'OMNI',
    lat: 35.029868, lng: 135.774766, cuisine_type: 'thai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried chicken, Thai tacos and soy- and oyster-sauce stir-fries (2024–2026 reviews); no allergen information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish sauce, chicken, shrimp and clams across the menu (2024–2026 reviews).',
    hours_raw: 'Tabelog lists no hours. Reviewers ate lunch sets (four choices) on weekdays and weekends at about 13:00, and dinner late in the evening (2024–2026). Reservations taken (Tabelog). 16 seats: 4 at the counter, four tables for 2, one for 4; private room. Tabelog lists smoking as allowed. Cash only: no cards, e-money or QR (Tabelog). On a narrow street 3 min from Keihan Demachiyanagi Stn, next to a popular omurice shop (July 2025, July 2026). Opened 28 June 2008 (Tabelog). Its old domain thai-kroon.com now serves the site of the Thai restaurant イーサン (fetched 6 November 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Demachiyanagi — 3 min walk from Keihan Demachiyanagi Stn',
    cuisine: 'A small Thai restaurant near Demachiyanagi with lunch sets for students (2024–2026 reviews) · lunch sets of pad Thai (¥1,350 before tax, May 2026), green curry, gai pad kra pao rice or shrimp-avocado green curry, each with fresh spring rolls and fruit (2024–2026) · fresh spring rolls topped with sautéed shrimp, Thai fried chicken with lemon and sweet sauce, simmered clams, grilled shrimp skewers, Thai tacos (2025–2026) · Thai tea, coconut milk, an unsweetened Ujitawara matcha latte',
    website: null, gmaps: gm('Kroon タイ料理 出町柳'), menu_url: null,
    notes: '[Thai · Demachiyanagi, student-friendly lunch sets] A cosy 16-seat Thai restaurant on a lane by Demachiyanagi Station since 2008: pad Thai, green curry and kra pao rice lunch sets with fresh spring rolls, and spicy clams and shrimp skewers in the evening. One diner found the pad Thai too sweet and felt pushed to order drinks (January 2025). Cash only; smoking allowed per Tabelog.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 28 June 2008 (Tabelog). Reviewers from 2024 to 2026 describe a counter and a few tables, a kitchen and a single front-of-house server, a warm welcome, and a spillover crowd from the omurice shop next door. Its former website address now opens the site of イーサン, a Thai restaurant at Imadegawa (fetched 6 November 2026).',
      philosophy: null,
      specialty: 'Pad Thai; green curry.',
      anecdotes: [
        { text: 'January 2025: "The female staff member was energetic, but her demeanor felt a bit unfriendly, almost pressuring me to order drinks… the seasoning was on the sweeter side."', source: R + 'B499405117/' },
        { text: '"Upon opening the door, I was transported to Thailand." — January 2025.', source: R + 'B498767957/' },
      ],
      japanese_sources_summary: '食べログ: Kroon、タイ料理、左京区田中関田町22-75 ルミエール出町柳 1F、京阪出町柳駅から徒歩3分、営業時間の記載なし、予約可、16席 (カウンター4、2人席4、4人席1)、個室、喫煙可、カード・電子マネー・QR不可、2008年6月28日オープン、サイトの thai-kroon.com は現在イーサンのサイトを表示。口コミ (2024年11月〜2026年10月、英語): 昼は4種のランチセット (パッタイ1,350円税抜、グリーンカレー、ガパオライス、海老とアボカドのグリーンカレー) に生春巻と果物、海老のせ生春巻、レモンと甘いたれの鶏の唐揚げ、あさりの煮込み、海老の串焼き、タイ風タコス、タイティー、ココナッツミルク、宇治田原の無糖の抹茶ラテ、隣の人気のオムライス店、パッタイが甘く飲み物の注文をせかされたという声。',
      confidence: 'medium', sources: [TB, R + 'B498767957/', R + 'B498994182/', R + 'B499405117/', R + 'B500889542/', R + 'B501521176/', R + 'B504218723/', R + 'B509586485/', R + 'B513426371/', R + 'B527969642/', R + 'B531604379/', R + 'B532176144/', R + 'B537349246/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small Thai restaurant; cash only; smoking allowed per Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中関田町22-75 ルミエール出町柳 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.029868, 135.774766); cross-checked: GSI 京都府京都市左京区田中関田町22番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527969642/'],
    price_note: 'Price from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Pad Thai lunch set (with fresh spring rolls)', '¥1,350 + tax', 'Lunch', 'no', 'no', 'May 2026.', 'pad_thai'),
      it('', '', 'Green curry lunch set', null, 'Lunch', 'ask', 'no', '2024–2025 reviews.', 'thai_curry'),
    ] }, {
    cuisine: '学生にも手頃なランチセットのある出町柳近くの小さなタイ料理店 (2024〜2026年の口コミ)・パッタイ (税抜1,350円、2026年5月)、グリーンカレー、ガパオライス、海老とアボカドのグリーンカレーのランチセットに生春巻と果物 (2024〜2026年)・海老のせ生春巻、レモンと甘いたれの唐揚げ、あさりの煮込み、海老の串焼き、タイ風タコス (2025〜2026年)・タイティー、ココナッツミルク、宇治田原の無糖の抹茶ラテ',
    neighborhood: '出町柳。京阪出町柳駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: 唐揚げ、タイ風タコス、醤油やオイスターソースの炒め物 (2024〜2026年の口コミ)。アレルゲンの情報はない。',
    vegan_detail: 'ヴィーガン不可: ナンプラー、鶏、海老、あさり (2024〜2026年の口コミ)。',
    notes: '[タイ料理・出町柳、学生にもやさしいランチセット] 2008年から出町柳駅近くの路地にある16席の居心地のよいタイ料理店。昼はパッタイ、グリーンカレー、ガパオライスに生春巻付きのセット、夜は辛いあさりや海老の串焼き。パッタイが甘く、飲み物の注文をせかされたという声も (2025年1月)。現金のみ、食べログでは喫煙可。',
  });
}

// ================================================================ LUSH LIFE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26004186/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://lushlife.kyoto';
  const H = day(['12:00', '21:00']);
  put({
    id: 'kyoto_lush_life_demachiyanagi', name: 'LUSH LIFE', category: 'OMNI',
    lat: 35.030127, lng: 135.773214, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: curry and hayashi rice roux, toast, cake (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken curry, custard pudding, cake (2025–2026 reviews); a vegetable coconut curry exists, but its stock is not described.',
    hours_raw: 'Official site: 12:00–21:00; closed Tuesday (Tabelog gives 12:00–22:00). No reservations. 9 counter seats plus an outdoor terrace; the inside is non-smoking and smoking is on the terrace only (July and November 2025 reviews; Tabelog lists smoking allowed). English menu. Cash only: no cards, e-money or QR (Tabelog). Under a striped awning beside the taxi rank at Keihan Demachiyanagi Stn exit 6 (official site).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Demachiyanagi — by Keihan Demachiyanagi Stn exit 6',
    cuisine: 'A long-running coffee-and-jazz shop at Demachiyanagi Station, walls of LPs and a big speaker (official site; 2025–2026 reviews) · coffee ¥600, iced coffee ¥600, coffee float ¥700, cocoa ¥600 (2025–2026) · firm, old-style pudding ¥500 (¥50 off with a drink); strawberry cake with coffee powder (2025–2026) · chicken curry rice, vegetable coconut curry with salad, hayashi rice ¥1,000, toast; whisky such as I.W. Harper (2025–2026 reviews)',
    website: SITE, gmaps: gm('LUSH LIFE 出町柳 ジャズ'), menu_url: null,
    notes: '[Jazz kissa · Demachiyanagi, coffee and records by the station] A nine-seat counter coffee-and-jazz shop under a striped awning at Demachiyanagi Station, lined with LPs: coffee, a firm old-fashioned pudding, curry and hayashi rice, and a drink on the terrace. Several reviewers mention regulars mixing with many overseas visitors (2025). Smoking on the terrace only. Cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers from 2025 to 2026 call it a long-established jazz café: a narrow room of nine counter seats with LP records behind the seats and jazz from a large speaker, a few terrace seats, soft-spoken staff, a dice-shaped wooden menu, and a mix of regulars and visitors from abroad (April and November 2025).',
      philosophy: null,
      specialty: 'Firm pudding; curry rice.',
      anecdotes: [
        { text: 'February 2025: "Even though it\'s a jazz café, the atmosphere is relaxed enough for casual conversations… On the day I visited, I could see heavy snowfall through the window."', source: R + 'B501411997/' },
        { text: 'July 2026: "only nine counter seats (non-smoking, while the outdoor terrace is smoking-friendly). The walls are lined with LP records. The menu is a charming wooden dice shape."', source: R + 'B532421578/' },
      ],
      japanese_sources_summary: '公式サイト: COFFEE AND JAZZSHOP LUSHLIFE、左京区田中下柳町20、京阪出町柳駅6番出口前のタクシー乗り場の横、ストライプのテントが目印、12:00〜21:00、火曜定休。食べログ: LUSH LIFE、喫茶店・バー、12:00〜22:00、火曜休み、予約不可、カウンター9席、テラス、喫煙可、英語メニュー、カード・電子マネー・QR不可。口コミ (2025年2月〜2026年10月、英語): 老舗のジャズ喫茶、壁一面のLPと大きなスピーカー、店内は禁煙でテラスは喫煙可、さいころ形の木のメニュー、コーヒー600円、アイスコーヒー600円、コーヒーフロート700円、ココア600円、固めのプリン500円 (セットで50円引き)、苺のケーキ、チキンカレー、野菜のココナッツカレー、ハヤシライス1,000円、トースト、I.W.ハーパー、常連と海外の客。',
      confidence: 'medium', sources: [SITE, TB, R + 'B400303739/', R + 'B501411997/', R + 'B502614763/', R + 'B504979427/', R + 'B517450457/', R + 'B517730683/', R + 'B517992174/', R + 'B518411499/', R + 'B519724028/', R + 'B532421578/', R + 'B533840600/', R + 'B537006922/'] },
    cultural_comfort: { level: 'english', note: 'English menu; counter only; cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区田中下柳町20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.030127, 135.773214); cross-checked: GSI 京都府京都市左京区田中下柳町20番地 (lot) 61m; nearest pin kyr_kouiumonya_ro_ji 6.7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532421578/', R + 'B400303739/', R + 'B517450457/'],
    price_note: 'Prices from 2025–2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Iced coffee', '¥600', 'Drinks', 'ask', 'ask', 'July 2026.', 'coffee'),
      it('', '', 'Pudding (¥50 off with a drink)', '¥500', 'Sweets', 'no', 'no', 'July 2026.', 'pudding'),
      it('', '', 'Hayashi rice', '¥1,000', 'Food', 'no', 'no', 'May 2026.', 'hayashi_rice'),
    ] }, {
    cuisine: '出町柳駅前の老舗のコーヒーとジャズの店。壁一面のLPと大きなスピーカー (公式サイト、2025〜2026年の口コミ)・コーヒー600円、アイスコーヒー600円、コーヒーフロート700円、ココア600円 (2025〜2026年)・昔ながらの固めのプリン500円 (飲み物と50円引き)、コーヒーパウダーの苺のケーキ (2025〜2026年)・チキンカレー、サラダ付きの野菜のココナッツカレー、ハヤシライス1,000円、トースト。I.W.ハーパーなどのウイスキー (2025〜2026年の口コミ)',
    neighborhood: '出町柳。京阪出町柳駅6番出口のそば',
    gf_detail: 'グルテンフリーではない: カレーやハヤシのルー、トースト、ケーキ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: チキンカレー、カスタードのプリン、ケーキ (2025〜2026年の口コミ)。野菜のココナッツカレーもあるが、だしは不明。',
    notes: '[ジャズ喫茶・出町柳、駅前のコーヒーとレコード] 出町柳駅のストライプのテントの下にある、LPが並ぶカウンター9席のコーヒーとジャズの店。コーヒー、昔ながらの固めのプリン、カレーやハヤシライス、テラスで一杯も。常連と海外の客が混ざるという声が複数 (2025年)。喫煙はテラスのみ。現金のみ、火曜休み。',
  });
}

// ================================================================ イーサン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000208/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.esan.jp/';
  const H = day(['11:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_thai_esan_imadegawa', name: 'イーサン (Thai Restaurant E-san)', category: 'OMNI',
    lat: 35.029186, lng: 135.758837, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: rice dishes such as khao man gai and many curries may be wheat-free, but soy and oyster sauces, fried dishes and wheat-noodle dishes are on the 100-plus menu (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegan and vegetarian options among the 100-plus dishes; fish sauce is otherwise standard (Tabelog).',
    hours_raw: 'Tabelog: 11:00–14:30 (last entry 14:20) and 17:00–22:00 (last entry 21:50); closed Tuesday and at New Year. Weekday and weekend lunch buffet ¥1,600 (Tabelog) — ¥1,650 incl. tax on 7 November 2026 (official site), with an extra free dish per person on weekends and holidays (October 2026); buffet seats may be limited to an hour when busy. About 30 lunch sets ¥1,100–1,600 (Tabelog). 46 seats, including a separate tatami annex in a renovated townhouse for 6–30 (booking required). Non-smoking. English picture menu; children and strollers welcome, with non-spicy and small portions on request. Cards (Visa, Master); no e-money or QR. Take-away of 100+ dishes, bookable online (official site).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Imadegawa — 1 min walk from Imadegawa Stn exit 4, near Doshisha',
    cuisine: 'A long-running Thai restaurant focused on Isan (north-eastern) cooking, run by a Thai chef, with over 100 dishes and spice levels marked (Tabelog; 2026 reviews) · daily lunch buffet of about 15 dishes — curries, stir-fries, salads, desserts and drinks — ¥1,600–1,650 (Tabelog; official site) · khao man gai, pad Thai, gai yang, som tam with peanuts, tom kha, tom yum noodles, kuay tiew nua haeng, nam prik ong, gai manao (2026 reviews) · desserts such as fried banana and pumpkin mochi (official site)',
    website: SITE, gmaps: gm('タイ料理 イーサン 今出川'), menu_url: SITE,
    notes: '[Thai · Imadegawa, the Isan lunch buffet by Doshisha] A long-established Isan-style Thai restaurant a minute from Imadegawa Station: a ¥1,650 lunch buffet that fills up, more than 100 dishes marked by heat, vegan options, and a tatami annex in a townhouse for groups. Some found the buffet variety limited and slow to refill (March 2026) and the serving area cramped (October 2026); the som tam can hit hard (April 2026). Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Thai chef, not named in a source'], origin: null,
      background: 'Reviewers in 2026 call it a long-established, "pioneering" Thai restaurant in Kyoto, run by a Thai chef, with Thai-language dish names and spice levels marked on the menu, popular with students from nearby universities and repeat locals. The official site offers a townhouse annex like a ryokan room, and take-away of over 100 dishes. The domain of the Demachiyanagi Thai restaurant Kroon now serves this site (fetched 6 November 2026).',
      philosophy: null,
      specialty: 'Isan dishes; lunch buffet.',
      anecdotes: [
        { text: 'March 2026: "The lunch was served buffet-style, and while the taste was decent, the variety was a bit limited. The replenishment of dishes was somewhat slow."', source: R + 'B525057117/' },
        { text: 'April 2026: "be cautious with the spice level! The green papaya salad… towards the end, it became particularly spicy and salty."', source: R + 'B526753487/' },
        { text: 'August 2026: with the buffet full, "I was kindly guided to the traditional house next door for a la carte orders."', source: R + 'B534887765/' },
      ],
      japanese_sources_summary: '公式サイト: タイレストラン イーサン、テイクアウト100品以上 (WEB予約可)、京町家を改装した旅館のような離れ座敷の完全個室 (要予約)、日替わりランチバイキング (カレー、炒め物、サラダ、デザート、ドリンクなど15種類ほど、混雑時は1時間制)、11月7日のランチバイキング1,650円 (税込)、揚げバナナ・南瓜餅など。食べログ: イーサン、タイ料理、上京区今出川町325、今出川駅4番出口から徒歩1分、11:00〜14:30・17:00〜22:00、火曜と年末年始休み、46席、個室 (6〜30名)、禁煙、英語の写真メニュー、子供・ベビーカー可、辛くない料理や小盛りも可、カード (VISA・Master) 可、電子マネー・QR不可、野菜にこだわり・ヴィーガン・ベジタリアン対応、東北タイ (イサーン) の料理、単品100品以上、昼のバイキング1,600円、ランチセット約30種 (1,100〜1,600円)。口コミ (2026年3〜10月、英語): タイ人のシェフ、老舗、カオマンガイ、パッタイ、ガイヤーン、ソムタム、トムカー、トムヤムラーメン、クイッティアオ、ナムプリックオーン、ガイマナオ、週末は1品サービス、バイキングの種類が少なく補充が遅いという声、ソムタムが辛くしょっぱいという声、バイキングの場所が狭いという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B525057117/', R + 'B525631009/', R + 'B526753487/', R + 'B528852311/', R + 'B529236385/', R + 'B529753150/', R + 'B530690520/', R + 'B532144369/', R + 'B534031615/', R + 'B534887765/', R + 'B535115347/', R + 'B538270207/'] },
    cultural_comfort: { level: 'english', note: 'English picture menu; spice levels marked; vegan options.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区今出川町325',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (buffet menu for 7 November 2026); Tabelog reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.029186, 135.758837); cross-checked: GSI 京都府京都市上京区今出川町325番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB],
    price_note: 'Buffet from the official site (7 November 2026); set range from Tabelog.', last_checked: TODAY, items: [
      it('ランチバイキング', '', 'Daily lunch buffet (about 15 dishes)', '¥1,650', 'Lunch', 'ask', 'ask', 'Official site, 7 November 2026.', 'thai_buffet'),
      it('', '', 'Lunch sets (about 30 kinds)', '¥1,100–1,600', 'Lunch', 'ask', 'ask', 'Tabelog.', 'thai_set'),
    ] }, {
    cuisine: 'タイ人のシェフが作る、イサーン (東北タイ) の料理が中心の老舗のタイ料理店。単品100品以上で辛さの表示あり (食べログ、2026年の口コミ)・カレー、炒め物、サラダ、デザート、ドリンクなど15種ほどの日替わりランチバイキング1,600〜1,650円 (食べログ、公式サイト)・カオマンガイ、パッタイ、ガイヤーン、ピーナッツ入りのソムタム、トムカー、トムヤムラーメン、クイッティアオ、ナムプリックオーン、ガイマナオ (2026年の口コミ)・揚げバナナや南瓜餅などのデザート (公式サイト)',
    neighborhood: '烏丸今出川。今出川駅4番出口から徒歩1分、同志社の近く',
    gf_detail: '要確認: カオマンガイなどのご飯ものやカレーは小麦を使わないものもあるが、醤油やオイスターソース、揚げ物、小麦の麺料理も100品以上のメニューにある (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認: 食べログではヴィーガン・ベジタリアン対応。それ以外はナンプラーが基本 (食べログ)。',
    notes: '[タイ料理・今出川、同志社そばのイサーン料理のバイキング] 今出川駅から1分の、イサーン料理が中心の老舗のタイ料理店。満席になる1,650円のランチバイキング、辛さ表示のある100品以上の単品、ヴィーガン対応、団体向けの町家の離れ座敷も。バイキングの種類が少なく補充が遅いという声 (2026年3月) や、料理の置き場が狭いという声 (2026年10月)、ソムタムが強烈という声 (2026年4月) も。火曜休み。',
  });
}

// ================================================================ まつお
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001096/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '20:30']);
  put({
    id: 'kyoto_champon_matsuo_kitashirakawa', name: 'まつお (Matsuo)', category: 'OMNI',
    lat: 35.028719, lng: 135.786862, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat champon noodles and fried sara-udon noodles (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kombu-based broth with fish paste, a little pork and seafood (2023–2026 reviews).',
    hours_raw: 'Tabelog: 11:30–14:30 and 17:00–20:30; closed Saturday. Reservations taken (Tabelog). 20 seats — two tables for eight and more (March 2024). Non-smoking. Cash only: no cards, e-money or QR (Tabelog). No parking; coin parking nearby. 1 min from the Kitashirakawa city bus stop. A diner of 30 years ago found it closed a few years back and since reopened (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kitashirakawa — by the Kitashirakawa bus stop, Jodoji',
    cuisine: 'A Showa-era champon and sara-udon specialist in Kitashirakawa, in a light, kombu-tasting style unlike Nagasaki\'s creamy broths (2023–2026 reviews) · champon, regular ¥800, large ¥1,000: medium-thick noodles in a clear salt broth under wok-fried vegetables (2023–2026) · sara udon, crisp noodles piled with cabbage and fish paste in sauce, regular ¥800, large ¥1,000 (2024–2026) · rice (small ¥150), mentaiko, an egg on request; vinegar, mustard and pepper on the table',
    website: null, gmaps: gm('ちゃんぽん まつお 北白川'), menu_url: null,
    notes: '[Champon · Kitashirakawa, a vegetable-piled Showa noodle shop] A Showa-era shop at the Kitashirakawa bus stop serving just two things — champon and sara udon — buried under wok-fried cabbage and vegetables in a light, kombu-tasting salt sauce, for ¥800 regular. Some found it bland and added vinegar and mustard (February 2025); another found the sara udon a touch salty (February 2024). Cash only; closed Saturday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers from 2023 to 2026 describe a nostalgic Showa-era interior that has not changed in decades, a menu that is still mainly champon and sara udon, lines in the past and quieter lunches now, and a shop that closed for a time and reopened (April 2026).',
      philosophy: null,
      specialty: 'Champon; sara udon.',
      anecdotes: [
        { text: 'February 2025, a return after 20 years: the broth "was also on the lighter side. I found it lacking, so I added vinegar, mustard, and pepper to enhance the taste."', source: R + 'B501432246/' },
        { text: 'April 2026: "This restaurant, which I used to visit frequently about 30 years ago, seemed to be closed a few years back… it appeared to be open again."', source: R + 'B526204528/' },
      ],
      japanese_sources_summary: '食べログ: まつお、ちゃんぽん、左京区浄土寺西田町118、市バス北白川バス停から徒歩1分、11:30〜14:30・17:00〜20:30、土曜休み、予約可、20席、禁煙、カード・電子マネー・QR不可。口コミ (2023年11月〜2026年6月、英語): ちゃんぽんと皿うどんの専門店、昭和の店内、ちゃんぽん並800円・大1,000円、中太麺、昆布の効いたあっさりした塩味のスープ、中華鍋で炒めた野菜、皿うどんはキャベツとかまぼこ、ご飯 (小150円)、明太子、卵、酢・からし・こしょう、長崎の白濁スープとは別物、駐車場なし、数年前に閉まり再開したという声、味が薄いという声、皿うどんが少し塩辛いという声。',
      confidence: 'medium', sources: [TB, R + 'B475080591/', R + 'B475416790/', R + 'B476877171/', R + 'B478931690/', R + 'B480021788/', R + 'B480950066/', R + 'B484779438/', R + 'B501432246/', R + 'B521646611/', R + 'B522757349/', R + 'B526204528/', R + 'B529628237/'] },
    cultural_comfort: { level: 'japanese', note: 'Old local noodle shop; two dishes; cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区浄土寺西田町118',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.028719, 135.786862); cross-checked: GSI 京都府京都市左京区浄土寺西田町118番地 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B522757349/', R + 'B526204528/', R + 'B484779438/'],
    price_note: 'Prices from 2024–2026 reviews.', last_checked: TODAY, items: [
      it('ちゃんぽん', '', 'Champon (regular / large)', '¥800 / ¥1,000', 'Noodles', 'no', 'no', 'May 2024; February 2026.', 'champon'),
      it('皿うどん', '', 'Sara udon (regular / large)', '¥800 / ¥1,000', 'Noodles', 'no', 'no', 'January and April 2026.', 'sara_udon'),
      it('', '', 'Rice, small', '¥150', 'Side', 'ask', 'ask', 'April 2026.', 'rice'),
    ] }, {
    cuisine: '北白川の昭和のちゃんぽんと皿うどんの専門店。長崎の白濁スープとは違う、昆布の効いたあっさりした味 (2023〜2026年の口コミ)・ちゃんぽん並800円・大1,000円。中太麺に澄んだ塩味のスープ、中華鍋で炒めた野菜をのせて (2023〜2026年)・皿うどんはパリパリの麺にキャベツとかまぼこのあん、並800円・大1,000円 (2024〜2026年)・ご飯 (小150円)、明太子、卵。卓上に酢、からし、こしょう',
    neighborhood: '北白川。北白川バス停のそば、浄土寺',
    gf_detail: 'グルテンフリーではない: 小麦のちゃんぽん麺、揚げた皿うどんの麺 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 昆布のスープにかまぼこ、少しの豚肉や魚介 (2023〜2026年の口コミ)。',
    notes: '[ちゃんぽん・北白川、野菜たっぷりの昭和の麺の店] 北白川バス停のそばの昭和の店で、メニューはちゃんぽんと皿うどんの2つだけ。中華鍋で炒めたキャベツと野菜がたっぷり、昆布の効いたあっさりした塩味で並800円。味が薄く酢とからしを足したという声 (2025年2月) や、皿うどんが少し塩辛いという声 (2024年2月) も。現金のみ、土曜休み。',
  });
}

save();
