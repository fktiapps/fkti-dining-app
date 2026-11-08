// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 59.
//   Queue run from the osw2 worktree, 2026-11-07. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail.
//   + 火焱山 KAENZAN (Chinese lamb-skewer izakaya with rotating charcoal grills at each table; Sakura Terrace 3F; since 2024)
//   - 板前焼肉一笑 四条木屋町 — chain
//   + 京都ご飯 奄美の鶏飯 小元 Komoto (Amami keihan chicken rice and Kyoto fish, off Shinkyogoku)
//   + もなか堂 Monaka-do (creative izakaya with a long menu, Kawaramachi 2F; since 2009)
//   + ハンザン Hanzan (Korean samgyeopsal of aged pork, grilled at the table by staff; Nishikiyamachi; since 2021)
//   None of the four is in data/kyoto.json: grep by id, name and address. Brand names grepped in queue-status.jsonl: no earlier rulings.
//   Service charges: 小元 adds a ¥600 seat charge with an appetizer for a la carte orders (Tabelog); もなか堂 none (Tabelog).
//   Remarks about other diners kept only where several reviews agree.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; 火焱山 offset ~1 m, 小元 ~4 m and ハンザン ~4 m so each sits 9 m+ from every pin on main.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-59');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26037297', '板前焼肉一笑 四条木屋町: a chain — our Osaka crawl lists 板前焼肉 一笑 at 北新地, 北新地 離宮, 江戸堀, 西中島 and 梅田茶屋町, plus sister 板前焼肉 一牛 shops in Dotonbori, Shinsaibashi and Kitashinchi');

// ================================================================ 火焱山
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041407/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']), WE = day(['14:00', '23:00']);
  put({
    id: 'kyoto_kaenzan', name: '火焱山 (KAENZAN)', category: 'OMNI',
    lat: 35.003194, lng: 135.770362, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spiced and honey-glazed skewers, bread skewers, noodles and fried rice; no gluten information is published (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a lamb and meat skewer house. Vegetable skewers (eggplant, potato, green pepper) are on the menu — ask (Tabelog menu).',
    hours_raw: 'Monday–Friday 17:00–23:00; Saturday, Sunday and holidays 14:00–23:00; closing days may vary (Tabelog). Reservations taken. Cards, e-money and QR payments accepted (Tabelog). 50 seats with private rooms and tatami; non-smoking, smoking area on the terrace (Tabelog). Each table has a charcoal grill that turns the skewers automatically; diners set the skewers on (2024–2026 reviews). Most skewers are ordered in fives (Tabelog menu). Some staff speak limited Japanese and part of the menu is in Chinese (2024–2025 reviews). On the 3rd floor of Sakura Terrace on Nishikiyamachi, 1 min from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikiyamachi, south of Shijo — 1 min from Kyoto Kawaramachi Stn',
    cuisine: 'Chinese charcoal skewers on self-turning table grills, opened June 2024 (Tabelog; reviews) · lamb skewers ¥200, spicy or honey-glazed lamb ¥220, beef tendon ¥200, wagyu ¥320, silkworm pupa ¥200, bread skewers ¥160 (Tabelog menu, January 2026) · Yanbian cold noodles ¥900, spicy knife-cut noodles ¥1,100, cold shredded potato salad ¥780, seafood jeon ¥980, old-style sweet and sour pork ¥1,420 (Tabelog menu) · cumin on the table; duck blood, pig skin and sweet white buns (February 2026)',
    website: null, gmaps: gm('火焱山 KAENZAN 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese skewers · Nishikiyamachi, lamb on turning charcoal grills] A big third-floor room where each table has a charcoal grill that slowly turns the skewers for you. Lamb from ¥200 a stick with cumin, plus beef, offal, silkworm pupae and bread, and Yanbian cold noodles to finish. Many Chinese guests; open from 14:00 at weekends.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Reviewers (2024–2026) describe a lamb-skewer restaurant with automatic rotating charcoal grills, run by Chinese staff and popular with Chinese guests; an August 2025 visitor thought it was run by the Korean-Chinese community. The menu mixes Chinese skewers with Korean-Chinese dishes such as Yanbian cold noodles (Tabelog).',
      philosophy: null,
      specialty: 'Lamb skewers on rotating charcoal grills.',
      anecdotes: [
        { text: 'An October 2024 visitor only worked out the gear in front of the coals when the skewers began to turn, and found it addictive to watch.', source: R + 'B493260059/' },
        { text: 'A December 2025 guest found the skewers almost the same as ones eaten in Shanghai.', source: R + 'B519767046/' },
        { text: 'A May 2026 regular, on a fourth or fifth visit, says children love watching the skewers spin.', source: R + 'B527350516/' },
      ],
      japanese_sources_summary: '食べログ: 火焱山 (KAENZAN)、串焼き・居酒屋、京都市下京区船頭町237-9 サクラテラス3F、阪急河原町駅から徒歩1分、月〜金 17:00〜23:00、土日祝 14:00〜23:00、予約可、カード・電子マネー・QR可、50席、個室あり、禁煙 (テラスに喫煙所)、2024年6月2日オープン。メニュー (2026年1月更新): 羊肉串200円 (5本から)、辛い羊肉串・蜂蜜羊肉串220円、牛すじ串200円、和牛串320円、蚕のさなぎ200円、パン串160円、延辺冷麺900円、刀削麺1,100円、海鮮チヂミ980円、酢豚1,420円。口コミ (2024〜2026年、英語): テーブルごとに自動で回る炭火の串焼き器、卓上にクミン、メニューの一部は中国語、日本語を話すスタッフは少ない、中国からの客が多い、上海の串焼きと同じ味、鴨の血、豚の皮、甘い白い蒸しパン、子どもも楽しめる。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B493260059/', R + 'B503282122/', R + 'B506287081/', R + 'B507192574/', R + 'B511790027/', R + 'B519767046/', R + 'B522484033/', R + 'B525648298/', R + 'B527350516/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; some staff speak limited Japanese; part of the menu in Chinese.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区船頭町237-9 サクラテラス 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (menu updated January 2026); reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.003203, 135.770362), offset ~1m to clear 肉心 (8m); cross-checked: GSI 京都府京都市下京区船頭町237番地 (lot) 78m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated January 2026, tax included). Most skewers are ordered five at a time.', last_checked: TODAY, items: [
      it('', '', 'Lamb skewer', '¥200', 'Skewers', 'ask', 'no', 'From five skewers.', 'lamb'),
      it('', '', 'Spicy lamb skewer', '¥220', 'Skewers', 'ask', 'no', 'From five skewers.', 'lamb_spicy'),
      it('', '', 'Honey-glazed lamb skewer', '¥220', 'Skewers', 'ask', 'no', 'From five skewers.', 'lamb_honey'),
      it('', '', 'Beef tendon skewer', '¥200', 'Skewers', 'ask', 'no', 'From three skewers.', 'tendon'),
      it('', '', 'Wagyu skewer', '¥320', 'Skewers', 'ask', 'no', '', 'wagyu'),
      it('', '', 'Eggplant skewer', '¥160', 'Skewers', 'ask', 'ask', '', 'eggplant'),
      it('', '', 'Bread skewer', '¥160', 'Skewers', 'no', 'ask', '', 'bread'),
      it('', '', 'Yanbian cold noodles', '¥900', 'Mains', 'no', 'ask', '', 'yanbian'),
      it('', '', 'Knife-cut noodles in spicy soup', '¥1,100', 'Mains', 'no', 'ask', '', 'daoxiao'),
      it('', '', 'Cold shredded potato salad', '¥780', 'Sides', 'ask', 'ask', '', 'potato'),
      it('', '', 'Old-style sweet and sour pork', '¥1,420', 'Sides', 'ask', 'no', '', 'subuta'),
    ] }, {
    cuisine: '自動で回るテーブルの炭火で焼く中国の串焼き、2024年6月開業 (食べログ、口コミ)・羊肉串200円、辛い羊肉串・蜂蜜羊肉串220円、牛すじ串200円、和牛串320円、蚕のさなぎ200円、パン串160円 (食べログのメニュー、2026年1月)・延辺冷麺900円、辛いスープの刀削麺1,100円、じゃがいもの細切り冷菜780円、海鮮チヂミ980円、昔ながらの酢豚1,420円 (食べログのメニュー)・卓上にクミン、鴨の血、豚の皮、甘い白い蒸しパン (2026年2月)',
    neighborhood: '西木屋町、四条の南。京都河原町駅から徒歩1分',
    gf_detail: '要確認。香辛料や蜂蜜だれの串、パン串、麺、炒飯。グルテンの情報は公開されていない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。羊肉と肉の串焼きの店。茄子、じゃがいも、ピーマンの串はある、要確認 (食べログのメニュー)。',
    notes: '[中国串焼き・西木屋町、回る炭火で羊肉串] ビルの3階の広い店。テーブルごとの炭火の上で串がゆっくり自動で回る。クミンをふった羊肉串は1本200円から、牛肉、内臓、蚕のさなぎ、パンも。締めは延辺冷麺。中国からの客が多い。週末は14時から。',
  });
}

// ================================================================ 京都ご飯 奄美の鶏飯 小元
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036883/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/kyoto_komoto/';
  const H = day(['11:30', '14:30'], ['17:30', '21:30']);
  put({
    id: 'kyoto_amami_keihan_komoto', name: '京都ご飯 奄美の鶏飯 小元 (Komoto)', category: 'OMNI',
    lat: 35.004087, lng: 135.767495, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Keihan is rice with chicken broth poured over, topped with soy-pickled papaya and shiitake; tempura, cutlets and kara-age are also served; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-broth keihan, fish and beef (Tabelog).',
    hours_raw: 'Lunch 11:30–14:30, dinner 17:30–21:30, Tuesday–Sunday; closed Monday (open on a holiday Monday, then closed Tuesday) (Tabelog). Reservations taken; same-day course bookings accepted (Tabelog). Cards accepted; no e-money or QR (Tabelog). A la carte: ¥600 seat charge with an appetizer; one drink per person (Tabelog menu). 26 seats: 6 at the 1st-floor counter, tables and sunken horigotatsu rooms upstairs; non-smoking (Tabelog). Down a narrow entrance in an alley off Shinkyogoku, 1 min from Kawaramachi Stn (Tabelog; 2026 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Off Shinkyogoku near Shijo — 1 min from Kyoto Kawaramachi Stn',
    cuisine: 'Amami Island keihan with Kyoto cooking (Tabelog) · keihan: Kyoto Koshihikari rice with shredded chicken, shredded egg, nori, shiitake, citrus and soy-pickled papaya, under Tamba black-chicken broth — ¥1,200 at lunch, ¥1,400 at night (Tabelog menu, 2024) · lunch sets with two small sides: Kyoto fish sashimi ¥2,000, tempura ¥1,850, Tamba beef steak ¥3,500 (2024); a daily special switched to keihan ¥2,100 (October 2026) · evening: Kyoto fish sashimi ¥1,850, Tamba black-chicken kara-age ¥1,350, Amami abura somen and pork miso ¥1,000 (2024) · keihan kaiseki courses ¥4,650 lunch, ¥5,000 dinner with drinks (Tabelog)',
    website: IG, gmaps: gm('奄美の鶏飯 小元 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Amami chicken rice · off Shinkyogoku, keihan and Kyoto fish] A small two-storey restaurant in an alley by Shinkyogoku serving keihan, the Amami Island dish of rice under hot chicken broth with egg, chicken and pickled papaya (about ¥1,200 at lunch). The chef of 28 years adds thick-cut Kyoto fish sashimi and Tamba beef; tatami rooms upstairs. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Chef not named'], origin: null,
      background: 'The shop’s Tabelog profile says the evening dishes are cooked by a chef with 28 years of experience, and pairs Amami Island cooking with Kyoto ingredients: Tamba black chicken for the keihan broth, Kyoto rice and local fish, served on Shigaraki ware.',
      philosophy: null,
      specialty: 'Amami keihan (chicken rice) with Tamba black-chicken broth.',
      anecdotes: [
        { text: 'An April 2026 couple wandered in from the shopping street and found keihan like chirashi with chicken broth poured over it.', source: R + 'B526460961/' },
        { text: 'A July 2026 business traveller took a team for the all-you-can-drink course and called it a steal for sashimi, sushi, chicken and ochazuke.', source: R + 'B531017050/' },
        { text: 'A September 2026 diner had seen keihan on TV and never expected to find it in Kyoto.', source: R + 'B536033049/' },
      ],
      japanese_sources_summary: '食べログ: 京都ご飯 奄美の鶏飯 小元、居酒屋・日本料理・海鮮、京都市中京区中之町565-6、河原町駅から徒歩1分、火〜日 11:30〜14:30・17:30〜21:30、月曜定休 (祝日の場合は翌火曜)、予約可、カード可、26席 (1階カウンター6席、2階テーブル・掘りごたつ)、禁煙、信楽焼の器、料理歴28年の料理人、丹波黒どりの出汁の鶏飯。メニュー (2024年): 鶏飯1,200円 (昼)・1,400円 (夜)、京の天然魚のお造り1,850円、丹波黒どりの唐揚げ1,350円、油そうめん、豚みそ、ランチのセット (天然魚2,000円、天ぷら1,850円、丹波牛ステーキ3,500円)、アラカルトはお通し付きチャージ600円、ワンドリンク制。口コミ (2026年、英語): 新京極の路地の奥、鶏飯は錦糸卵、裂いた鶏、椎茸、パパイヤの醤油漬けに出汁をかける、厚切りのお造り、鱧の天ぷら、日替わりを鶏飯に変えて2,100円、2階の掘りごたつ、丁寧な接客。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', TB + 'dtlmenu/lunch/', IG, R + 'B526460961/', R + 'B527714251/', R + 'B530591541/', R + 'B531017050/', R + 'B532101714/', R + 'B534880427/', R + 'B536033049/', R + 'B537634242/', R + 'B538244907/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; tatami and counter seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中之町565-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004091, 135.767451), offset ~4m to clear Ternura (5m); cross-checked: GSI 京都府京都市中京区中之町565番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/', TB + 'dtlmenu/lunch/', R + 'B537634242/'],
    price_note: 'Prices from the Tabelog menus (dinner October 2024, lunch April 2024, tax included); one October 2026 review.', last_checked: TODAY, items: [
      it('鶏飯', '', 'Amami keihan (chicken rice with Tamba black-chicken broth), lunch', '¥1,200', 'Lunch', 'ask', 'no', '', 'keihan_lunch'),
      it('', '', 'Kyoto fish sashimi set', '¥2,000', 'Lunch', 'ask', 'no', 'With two small sides.', 'fish_set'),
      it('', '', 'Tempura set', '¥1,850', 'Lunch', 'no', 'no', 'With two small sides.', 'tempura_set'),
      it('', '', 'Tamba beef steak set', '¥3,500', 'Lunch', 'ask', 'no', 'With two small sides.', 'steak_set'),
      it('鶏飯', '', 'Amami keihan, evening', '¥1,400', 'Dinner', 'ask', 'no', '', 'keihan_dinner'),
      it('', '', 'Kyoto natural fish sashimi (per person)', '¥1,850', 'Dinner', 'ask', 'no', '', 'sashimi'),
      it('', '', 'Tamba black chicken kara-age', '¥1,350', 'Dinner', 'no', 'no', '', 'karaage'),
      it('', '', 'Amami abura somen (stir-fried somen)', '¥1,000', 'Dinner', 'no', 'ask', '', 'abura_somen'),
      it('', '', 'Soy-pickled papaya', '¥500', 'Dinner', 'ask', 'ask', '', 'papaya'),
    ] }, {
    cuisine: '奄美の鶏飯と京料理 (食べログ)・鶏飯: 京都のコシヒカリに裂いた鶏、錦糸卵、海苔、椎茸、柑橘、パパイヤの醤油漬け、丹波黒どりの出汁をかけて。昼1,200円、夜1,400円 (食べログのメニュー、2024年)・小鉢2品付きのランチ: 京の天然魚のお造り2,000円、天ぷら1,850円、丹波牛ステーキ3,500円 (2024年)、日替わりを鶏飯に変えて2,100円 (2026年10月)・夜: 天然魚のお造り1,850円、丹波黒どりの唐揚げ1,350円、奄美の油そうめんと豚みそ1,000円 (2024年)・鶏飯会席のコース、昼4,650円、夜は飲み物付き5,000円 (食べログ)',
    neighborhood: '新京極の脇、四条の近く。京都河原町駅から徒歩1分',
    gf_detail: '要確認。鶏飯はご飯に鶏の出汁をかけ、パパイヤの醤油漬けや椎茸をのせる。天ぷら、カツ、唐揚げもある。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の出汁の鶏飯、魚、牛肉 (食べログ)。',
    notes: '[奄美の鶏飯・新京極の脇、鶏飯と京の魚] 新京極の路地の小さな2階建ての店。奄美の郷土料理、鶏飯は熱い鶏の出汁をご飯にかけ、卵、鶏、パパイヤの漬物をのせる (昼は1,200円ほど)。料理歴28年の料理人が厚切りの京の魚のお造りや丹波牛も。2階に座敷。月曜休み。',
  });
}

// ================================================================ もなか堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013633/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_monakado', name: 'もなか堂 (Monaka-do)', category: 'OMNI',
    lat: 35.00458708787303, lng: 135.76993495035114, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A long izakaya menu of fried dishes, tempura, gratins, nama-fu and yuba; no gluten information is published (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an izakaya of fish, meat and cheese dishes. Simple vegetable plates (edamame, cucumber with miso, grilled manganji peppers) are listed — ask (Tabelog menu).',
    hours_raw: '17:00–24:00 daily (food last order 23:00, drinks 23:30); closing days not fixed (Tabelog). Reservations taken; 2-hour limit Friday–Sunday, holiday eves and peak seasons (Tabelog). Cards, e-money and QR accepted; no seat charge (Tabelog). 33 seats: 7 at the counter, 26 at tables; fully non-smoking (Tabelog). Busy, often full at weekends and popular as a second stop (2026 reviews). On the 2nd floor on Kawaramachi-dori north of Shijo, 3 min from Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-dori, north of Shijo — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Creative izakaya with a long menu, opened 2009 (Tabelog) · avocado gratin ¥620, Japanese-style shrimp and broccoli ajillo ¥750, tomato kimchi ¥450, agedashi eggplant ¥520, corn tempura ¥550, Kamo eggplant dengaku ¥650 (Tabelog menu, 2024) · chicken nanban, nama-fu and yuba gratin, ginger tempura, prosciutto-wrapped mizunasu eggplant (2026 reviews) · courses with all-you-can-drink ¥4,000 and ¥4,500 (Tabelog)',
    website: null, gmaps: gm('もなか堂 河原町'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Kawaramachi, a long menu and open till midnight] A busy wood-panelled izakaya up on a second floor on Kawaramachi-dori, open till midnight every day. The menu runs long — avocado gratin, nama-fu and yuba gratin, chicken nanban, corn and ginger tempura — at small-plate prices. Good for a second stop; book at weekends.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in June 2009 (Tabelog); run by 株式会社阪林 of Kamigyo, Kyoto (National Tax Agency invoice register T4130001064820). The shop calls itself a creative-cuisine izakaya with vegetable obanzai and time-honoured recipes, popular with office workers.',
      philosophy: null,
      specialty: 'Avocado gratin; a long menu of small plates.',
      anecdotes: [
        { text: 'A June 2026 regular on a fifth visit still had many dishes left to try.', source: R + 'B532221656/' },
        { text: 'A September 2026 guest arrived at 17:00 on a holiday eve; by 17:30 the room was full.', source: R + 'B536095449/' },
        { text: 'An August 2026 diner found the ¥3,800 course so generous the kara-age was hard to finish.', source: R + 'B534188142/' },
      ],
      japanese_sources_summary: '食べログ: もなか堂、居酒屋・創作料理・焼酎バー、京都市中京区河原町通四条上ル米屋町378 2F、阪急河原町駅から徒歩3分、毎日17:00〜24:00 (L.O.フード23:00、ドリンク23:30)、不定休、予約可、金土日祝・祝前日などは2時間制、カード・電子マネー・QR可、チャージ料なし、33席 (カウンター7、テーブル26)、全面禁煙、2009年6月3日オープン、インボイス T4130001064820 (株式会社阪林)。メニュー (2024年): アボカドのグラタン620円、和風アヒージョ750円、トマトキムチ450円、揚げ出し茄子520円、とうもろこしの天ぷら550円、賀茂茄子の田楽650円、飲み放題付きコース4,000円・4,500円。口コミ (2026年、英語): メニューが多い、チキン南蛮、生麩と湯葉のグラタン、生姜の天ぷら、水茄子の生ハム巻き、二軒目に人気、週末は満席、手頃な値段。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4130001064820', R + 'B530001782/', R + 'B530451985/', R + 'B532221656/', R + 'B532732709/', R + 'B532792858/', R + 'B534188142/', R + 'B536095449/', R + 'B536592148/', R + 'B537687913/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; book at weekends.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通四条上ル米屋町378 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated through October 2026. The website on Tabelog (monakado.jp) returned 403 on 2026-11-07.' },
    pin_source: `Tabelog ${TB} (35.004587, 135.769935); cross-checked: GSI 京都府京都市中京区米屋町378番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated September 2024, tax included); may have changed.', last_checked: TODAY, items: [
      it('', '', 'Avocado gratin', '¥620', 'Food', 'ask', 'no', '', 'avocado_gratin'),
      it('', '', 'Japanese-style shrimp and broccoli ajillo', '¥750', 'Food', 'ask', 'no', '', 'ajillo'),
      it('', '', 'Tomato kimchi', '¥450', 'Food', 'ask', 'ask', '', 'tomato_kimchi'),
      it('', '', 'Yam fries', '¥550', 'Food', 'ask', 'ask', '', 'yam_fries'),
      it('', '', 'Agedashi eggplant', '¥520', 'Food', 'ask', 'ask', '', 'agedashi'),
      it('', '', 'Corn tempura', '¥550', 'Food', 'no', 'ask', '', 'corn_tempura'),
      it('', '', 'Kamo eggplant with Saikyo miso dengaku', '¥650', 'Food', 'ask', 'ask', '', 'kamo_nasu'),
      it('', '', 'Course with all-you-can-drink (8 dishes, 120 min)', '¥4,000', 'Courses', 'ask', 'no', 'From 2 people.', 'course'),
    ] }, {
    cuisine: '2009年開業、メニューの多い創作居酒屋 (食べログ)・アボカドのグラタン620円、海老とブロッコリーの和風アヒージョ750円、トマトキムチ450円、揚げ出し茄子520円、とうもろこしの天ぷら550円、賀茂茄子の田楽650円 (食べログのメニュー、2024年)・チキン南蛮、生麩と湯葉のグラタン、生姜の天ぷら、水茄子の生ハム巻き (2026年の口コミ)・飲み放題付きコース4,000円、4,500円 (食べログ)',
    neighborhood: '河原町通、四条の北。京都河原町駅から徒歩3分',
    gf_detail: '要確認。揚げ物、天ぷら、グラタン、生麩、湯葉など品数の多い居酒屋。グルテンの情報は公開されていない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、肉、チーズの料理の居酒屋。枝豆、もろきゅう、万願寺とうがらしの焼きものなどはある、要確認 (食べログのメニュー)。',
    notes: '[居酒屋・河原町、品数豊富で深夜0時まで] 河原町通のビルの2階、木のぬくもりのあるにぎやかな居酒屋。毎日24時まで。アボカドのグラタン、生麩と湯葉のグラタン、チキン南蛮、とうもろこしや生姜の天ぷらなど、品数が多く小皿の値段。二軒目にも。週末は予約を。',
  });
}

// ================================================================ ハンザン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036121/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/hanjan.kyoto';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_hanzan_nishikiyamachi', name: 'ハンザン (Hanzan)', category: 'OMNI',
    lat: 35.004479, lng: 135.77013, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled aged pork with ssamjang, marinated bulgogi, kimchi, kimbap and stews; no gluten information is published (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Korean pork barbecue restaurant (Tabelog).',
    hours_raw: '17:00–23:00 daily (food last order 22:00, drinks and desserts 22:30); closing days not fixed (Tabelog). Reservations taken. Cards, e-money and PayPay accepted (Tabelog). 56 seats: tables, some divided by roll screens, and a 6-seat counter; non-smoking; parties up to 40 (Tabelog). Staff grill and cut the samgyeopsal at your table; wrap leaves refilled free (several 2026 reviews). A pig-shaped bench at the door (2026 reviews). On Nishikiyamachi along the Takase River, 1 min north of Kyoto Kawaramachi Stn exit 1A (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikiyamachi, north of Shijo — 1 min from Kyoto Kawaramachi Stn',
    cuisine: 'Korean samgyeopsal of Japanese pork aged 240 hours, opened July 2021 (Tabelog) · aged pork belly or chuck-eye roll 150g ¥890, thin-cut belly ¥990, beef bulgogi 100g ¥890, served with lettuce, basil, kimchi and ssamjang (Tabelog menu, July 2026) · beef yukhoe ¥1,690, choregi salad ¥690, tobiko and seafood chanja kimbap ¥990, napa cabbage kimchi ¥490 (Tabelog menu) · yangnyeom chicken, sundubu, doenjang jjigae; makgeolli, soju and Terra beer (2026 reviews; Tabelog) · samgyeopsal course ¥3,000; all-you-can-drink ¥2,000 (Tabelog)',
    website: IG, gmaps: gm('ハンザン 京都 西木屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Korean barbecue · Nishikiyamachi, aged pork grilled for you] A bright Korean dining bar on Nishikiyamachi, its door marked by a pig-shaped bench. The pork is aged 240 hours, and staff grill and cut the samgyeopsal at your table (150g ¥890), with free refills of lettuce and basil for wrapping. Makgeolli and soju to drink; open daily till 23:00.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Opened in July 2021 (Tabelog). The shop says it ages Japanese pork for 240 hours with its own method and calls its aged samgyeopsal a Kyoto first (Tabelog). The invoice holder is 株式会社晃商 of Higashiyama, Kyoto (National Tax Agency register T2130001080605).',
      philosophy: null,
      specialty: 'Aged-pork samgyeopsal, grilled at the table by staff.',
      anecdotes: [
        { text: 'An August 2026 guest was told the plum soy dipping sauce comes from the owner’s Korean mother.', source: R + 'B491572825/' },
        { text: 'A June 2026 regular marked the restaurant’s fifth anniversary with another samgyeopsal dinner.', source: R + 'B533491578/' },
        { text: 'An August 2026 visitor, back from Busan, found it tasted better than in Korea and less fiery.', source: R + 'B532857985/' },
      ],
      japanese_sources_summary: '食べログ: ハンザン、韓国料理・ダイニングバー、京都市中京区高瀬川筋四条上る紙屋町672 永原ビル1F、阪急京都河原町駅1A出口から西木屋町通を北へ徒歩1分、毎日17:00〜23:00 (L.O.フード22:00、ドリンク・デザート22:30)、不定休、予約可、カード・電子マネー・PayPay可、56席、禁煙、2021年7月1日オープン、インボイス T2130001080605 (株式会社晃商)。メニュー (2026年7月): 独自の方法で240時間熟成させた国産豚の「京都初」熟成サムギョプサル150g 890円、熟成モクサル890円、牛プルコギ100g 890円、ユッケ1,690円、チョレギサラダ690円、とびこと海鮮チャンジャのキンパ990円、白菜キムチ490円、マッコリ、チャミスル、テラビール、コース3,000円、飲み放題2,000円。口コミ (2026年、英語): スタッフがテーブルで焼いて切ってくれる、包み野菜はおかわり自由、入口に豚のベンチ、オーナーの韓国人の母の梅醤油だれ、5周年、ヤンニョムチキン、スンドゥブ、韓国産味噌のテンジャンチゲ。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', IG, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=2130001080605', R + 'B491572825/', R + 'B528947145/', R + 'B531607732/', R + 'B532527348/', R + 'B532664628/', R + 'B532857985/', R + 'B533491578/', R + 'B537328850/', R + 'B537475656/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cards accepted; staff grill the meat for you.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高瀬川筋四条上る紙屋町672 永原ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated July 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004465, 135.770169), offset ~4m to clear まるまん寿司 (5m); cross-checked: GSI 京都府京都市中京区紙屋町672番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated July 2026, tax included).', last_checked: TODAY, items: [
      it('', '', 'Aged samgyeopsal (pork belly), 150g', '¥890', 'Grill', 'ask', 'no', 'Grilled by staff; with wrap leaves, kimchi and ssamjang.', 'samgyeopsal'),
      it('', '', 'Aged moksal (pork chuck-eye roll), 150g', '¥890', 'Grill', 'ask', 'no', '', 'moksal'),
      it('', '', 'Aged thin-cut pork belly, 150g', '¥990', 'Grill', 'ask', 'no', '', 'thin_belly'),
      it('', '', 'Beef bulgogi, 100g', '¥890', 'Grill', 'ask', 'no', '', 'bulgogi'),
      it('', '', 'Beef yukhoe', '¥1,690', 'Appetizers', 'ask', 'no', '', 'yukhoe'),
      it('', '', 'Choregi salad', '¥690', 'Salad', 'ask', 'ask', '', 'choregi'),
      it('', '', 'Tobiko and seafood chanja kimbap', '¥990', 'Dishes', 'ask', 'no', '', 'kimbap'),
      it('', '', 'Napa cabbage kimchi', '¥490', 'Appetizers', 'ask', 'ask', '', 'kimchi'),
    ] }, {
    cuisine: '240時間熟成させた国産豚の韓国サムギョプサル、2021年7月開業 (食べログ)・熟成豚バラまたはモクサル150g 890円、薄切り豚バラ990円、牛プルコギ100g 890円、サンチュ、バジル、キムチ、サムジャン付き (食べログのメニュー、2026年7月)・ユッケ1,690円、チョレギサラダ690円、とびこと海鮮チャンジャのキンパ990円、白菜キムチ490円 (食べログのメニュー)・ヤンニョムチキン、スンドゥブ、テンジャンチゲ、マッコリ、チャミスル、テラビール (2026年の口コミ、食べログ)・サムギョプサルのコース3,000円、飲み放題2,000円 (食べログ)',
    neighborhood: '西木屋町、四条の北。京都河原町駅から徒歩1分',
    gf_detail: '要確認。サムジャンで食べる熟成豚の焼肉、味付けのプルコギ、キムチ、キンパ、チゲ。グルテンの情報は公開されていない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガン不可。韓国の豚焼肉の店 (食べログ)。',
    notes: '[韓国焼肉・西木屋町、焼いてくれる熟成豚] 西木屋町の明るい韓国料理のダイニングバー。入口には豚のベンチ。240時間熟成の豚をスタッフがテーブルで焼いて切ってくれるサムギョプサル (150g 890円)、包むサンチュとバジルはおかわり自由。マッコリやソジュと。毎日23時まで。',
  });
}

save();
