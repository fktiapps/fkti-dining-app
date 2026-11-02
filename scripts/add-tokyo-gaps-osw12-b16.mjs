// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 16.
//   + 大衆酒場 天ぷら宮 Taishu Sakaba Tempura Miya (tempura izakaya by Okachimachi; opened June 2025) — taken by id per the
//     coordinator: skipped in batch 15, now drafted (three 天ぷら宮 shops, none in data: a small group; ミヤノ家 and 天むす宮
//     are sister concepts)
//   + 焼肉DINING 牛勢 上野店 Yakiniku Dining Gyusei (88-seat all-you-can-eat yakiniku by Ueno Shinobazu exit)
//   + 肉めし岡もと 御徒町店 Niku Meshi Okamoto (braised-beef rice bowls; brand of two shops on the official list, 2026-11-02)
//   + Mille, (8-seat Italian wine counter, one chef-sommelier; opened May 2023)
// Undecided (no put, no skip): 再来宴 上野仲町通り店 13034317 — two shops found (上野仲町通り店; 上海料理 再来宴 湯島), no full
//   count found; left in the queue for a decision.
// Not taken this batch: 横濱ラーメン あさが家 上野店 13307245 — at least two shops (阿佐谷, 上野) and hiring "for new store
//   expansion"; no count found, left undecided.
// Chain check (with Greg's 2026-11-02 rulings and the coordinator's working line: draft a brand with 4 or fewer shops).
//   Gyusei: only the 上野店 found despite the branch suffix — flag. Okamoto: the operator's official shop locator (Arcland Service,
//   checked 2026-11-02) lists 2 shops — 新橋店 and 御徒町店; DX Magazine counted 4 in Sept 2023 (新橋, 御徒町, 足立入谷, 溝の口). Drafted.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 大衆酒場 天ぷら宮
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13312382/'; const R = TB + 'dtlrvwlst/';
  const MY = 'https://miya-food.com/';
  const W = day(['11:30', '16:00'], ['17:00', '22:00']); const S = day(['11:30', '16:00'], ['17:00', '21:30']);
  put({
    id: 'tokyo_taishu_sakaba_tempura_miya_okachimachi', name: '大衆酒場 天ぷら宮 (Taishu Sakaba Tempura Miya)', category: 'OMNI',
    lat: 35.708382, lng: 139.773865, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: everything is wheat-batter tempura, tendon with sauce, or soba.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: a vegetable tempura platter of seven vegetables is marked vegetarian (¥980, Tabelog menu), but the batter, dipping sauce and fryer are not described; a May 2026 diner had egg swapped for maitake.',
    hours_raw: 'Mon–Sat, holidays and the day before 11:30–22:00 (last order 21:30); Sun and the day after a holiday 11:30–21:30 (last order 21:00); break 16:00–17:00 (Tabelog). Year-end: until 18:00 on 31 December; 1 January 11:30–20:00; 2 January 11:30–21:00. Reservations taken (the shop may call to confirm); the negi pork shabu-shabu hot pot needs a booking. Busy with overseas visitors (2026 reviews). 42 seats (8 at the counter, 34 at tables); private rooms for 6–20. Heated-tobacco-only smoking area. Cards, e-money and QR. English and Chinese menus and staff. Kids\' menu; strollers welcome. Opened 30 June 2025.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 4-chōme, 三浦ビル B1F, by Ameyoko — 3 min from JR Okachimachi; 2 min from Ueno-Okachimachi',
    cuisine: 'Tempura izakaya from 株式会社天ぷら宮, which also runs the 天丼と生蕎麦 天ぷら宮 shops in Ueno: about 20 kinds of tempura, sushi, soba and small dishes (company site) · tempura platters (Tabelog menu, October 2026): vegetable ¥980, shrimp and vegetable ¥1,280, chicken and vegetable ¥1,380, premium (squid, two shrimp, four vegetables, egg) ¥1,680, five-shrimp ¥1,980, signature platter with conger eel, squid, two shrimp, ten vegetables and two eggs ¥2,980, a five-shrimp "SUPER" version ¥4,980, chicken tempura 4 pieces (1 kg) ¥2,480 · tendon at lunch: jumbo tendon with two shrimp, zaru tendon with soba ¥1,580, chicken and vegetable tendon ¥1,480 (2026 reviews) · tamago tempura rice ¥480, chilled tofu and iburi-gakko ¥390 (April 2026) · autumn–winter negi pork shabu-shabu ¥3,480 · sake, shochu, highballs; all-you-can-drink',
    website: MY, gmaps: gm('大衆酒場 天ぷら宮 上野4-3-8'), menu_url: TB + 'dtlmenu/',
    notes: "[Tempura · Okachimachi, a tempura izakaya by Ameyoko] A large basement tempura bar a few minutes from Okachimachi Station, opened in June 2025 by the company behind Ueno's tempura-and-soba shops of the same name. At lunch it is a tendon shop: generous bowls of shrimp, shiso-wrapped squid, soft egg and vegetables (about ¥1,500–1,600, sometimes with a free size-up), or tendon with cold soba. At night it turns into a sake bar with tempura platters from ¥980 for vegetables to ¥2,980 for the house assortment with conger eel, plus small dishes and, in the colder months, a negi pork shabu-shabu that ends with soba. Many diners are visitors from abroad, and there are English and Chinese menus. One reviewer found the batter almost too crisp, and one regretted the lack of oshibori.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 30 June 2025 (Tabelog; company site).', background: 'Run by 株式会社天ぷら宮 (Tempura Miya Co., Ltd.; representative 宮上秀一), which also runs 天丼と生蕎麦 天ぷら宮 上野本店 and 上野駅前店, the kakigori and matcha-crepe shops ミヤノ家, and 出汁と米 天むす宮 (company site). No source names the cooks here.', philosophy: 'Company site: "天ぷら専門店の集大成" — the culmination of its tempura shops.', specialty: 'Tempura platters; tendon.',
      anecdotes: [
        { text: '"I enjoyed alternating between the smooth soba and the tempura, which was freshly fried and generously portioned at a reasonable price." — July 2026, zaru tendon ¥1,580.', source: R + 'B532401230/' },
        { text: '"The anago (conger eel) had a crispy coating and a fluffy inside—truly exquisite." — May 2026.', source: R + 'B528553226/' },
        { text: '"Shortly after, I was offered a free upgrade to a large size, which I gladly accepted." — August 2026, chicken and vegetable tendon ¥1,480.', source: R + 'B533411493/' },
        { text: '"I ordered the premium tempura rice bowl, which was delicious, but it was a shame about the oshibori." — June 2026.', source: R + 'B530756351/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 大衆酒場 天ぷら宮、上野4-3-8 三浦ビル B1F、JR御徒町駅から徒歩3分、上野御徒町駅から2分、月〜土・祝・祝前日11:30〜22:00、日・祝後日11:30〜21:30、16:00〜17:00は休憩、予約可、42席 (カウンター8、テーブル34)、個室あり、加熱式たばこのみの喫煙所、カード・電子マネー・QR可、英語と中国語のメニューとスタッフ、子どもメニュー、2025年6月30日オープン。メニュー (2026年10月): 野菜天盛り980円、海老と野菜1,280円、上天盛り1,680円、名物の盛り合わせ2,980円、鶏天4個1,980円など、ねぎ豚しゃぶ3,480円 (要予約)。株式会社天ぷら宮の公式サイト: 天ぷら専門店の集大成、天ぷら約20種、寿司、そば、一品料理、ほかに天丼と生蕎麦 天ぷら宮 (上野本店、上野駅前店)、ミヤノ家、出汁と米 天むす宮。口コミ (2026年4〜8月): 昼は天丼、ざる天丼1,580円、海外の客が多い、衣はかなりサクサク、おしぼりがないという声。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', MY, R + 'B526799581/', R + 'B526942847/', R + 'B528553226/', R + 'B529429886/', R + 'B530756351/', R + 'B531445597/', R + 'B532401230/', R + 'B533411493/', R + 'B533562088/', R + 'B533686484/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists menus in English and Chinese, with photos and a digital menu, and English- and Chinese-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野4-3-8 三浦ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated October 2026); company site; reviews dated April–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野四丁目3番8号 (go) 11m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B532401230/', R + 'B526942847/'],
    price_note: 'Prices from the Tabelog menu (updated October 2026, tax included); lunch tendon prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Vegetable tempura platter (seven vegetables, marked vegetarian)', '¥980', 'Tempura', 'no', 'ask', 'Tabelog menu, October 2026.', 'yasai_tenmori'),
      it('', '', 'Shrimp and vegetable tempura platter', '¥1,280', 'Tempura', 'no', 'no', 'Tabelog menu, October 2026.', 'ebi_yasai_tenmori'),
      it('', '', 'Premium tempura platter (squid, two shrimp, four vegetables, egg)', '¥1,680', 'Tempura', 'no', 'no', 'Tabelog menu October 2026; April 2026.', 'jo_tenmori'),
      it('', '', 'House tempura platter (conger eel, squid, shrimp, ten vegetables, eggs)', '¥2,980', 'Tempura', 'no', 'no', 'Tabelog menu, October 2026.', 'house_tenmori'),
      it('', '', 'Zaru tendon (tendon with cold soba)', '¥1,580', 'Lunch', 'no', 'no', 'July 2026.', 'zaru_tendon'),
      it('', '', 'Chicken and vegetable tendon', '¥1,480', 'Lunch', 'no', 'no', 'August 2026.', 'tori_yasai_tendon'),
      it('', '', 'Tamago tempura rice', '¥480', 'Rice', 'no', 'no', 'April 2026.', 'tamaten_meshi'),
      it('', '', 'Negi pork shabu-shabu hot pot (autumn–winter, booking required)', '¥3,480', 'Hot pot', 'ask', 'no', 'Tabelog menu, October 2026.', 'negi_butashabu'),
    ] }, {
    cuisine: '上野で天丼と生蕎麦 天ぷら宮も営む株式会社天ぷら宮の天ぷら居酒屋: 天ぷら約20種、寿司、そば、一品料理 (公式サイト)・天ぷらの盛り合わせ (食べログのメニュー、2026年10月): 野菜980円、海老と野菜1,280円、鶏と野菜1,380円、上 (いか、海老2本、野菜4種、卵) 1,680円、海老5本1,980円、穴子、いか、海老2本、野菜10種、卵2個の名物の盛り合わせ2,980円、海老5本の「SUPER」4,980円、鶏天4個 (1kg) 2,480円・昼は天丼: 海老2本のジャンボ天丼、そば付きのざる天丼1,580円、鶏と野菜の天丼1,480円 (2026年の口コミ)・玉子天ご飯480円、冷奴といぶりがっこ390円 (2026年4月)・秋冬のねぎ豚しゃぶ3,480円・日本酒、焼酎、ハイボール、飲み放題',
    neighborhood: '上野四丁目、三浦ビル B1F、アメ横のそば。JR御徒町駅から徒歩3分、上野御徒町駅から2分',
    gf_detail: 'グルテンフリーではありません。すべて小麦の衣の天ぷら、たれの天丼、そば。',
    vegan_detail: 'ヴィーガンは要確認。野菜7種の野菜天盛り (980円) はベジタリアンと表示 (食べログのメニュー) されていますが、衣、天つゆ、揚げ油の説明はありません。2026年5月には卵をまいたけに替えてもらった人も。',
    notes: '[天ぷら・御徒町、アメ横そばの天ぷら居酒屋] 御徒町駅から数分、地下にある広い天ぷらの酒場で、上野で同じ名の天ぷらとそばの店を営む会社が2025年6月に開店。昼は天丼の店で、海老、しそ巻きのいか、半熟卵、野菜をたっぷりのせた丼 (約1,500〜1,600円、大盛り無料のことも) や、冷たいそば付きの天丼。夜は日本酒の店になり、天ぷらの盛り合わせは野菜の980円から穴子入りの名物の盛り合わせ2,980円まで。一品料理や、寒い時期はそばで締めるねぎ豚しゃぶも。海外からの客が多く、英語と中国語のメニューあり。衣がサクサクすぎるという声や、おしぼりがないのが残念という声も。',
  });
}

// ================================================================ 焼肉DINING 牛勢 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13206565/'; const R = TB + 'dtlrvwlst/';
  const W = day(['15:00', '23:00']); const E = day(['12:00', '23:00']);
  put({
    id: 'tokyo_yakiniku_gyusei_ueno', name: '焼肉DINING 牛勢 上野店 (Yakiniku Dining Gyusei)', category: 'OMNI',
    lat: 35.709286, lng: 139.771942, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: many cuts come with salt sauce, but marinated meats, sauces, cold noodles and stews are on the same menu and nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef yakiniku restaurant; namul and kakuteki are the vegetable sides, and the seasonings are not described.',
    hours_raw: 'Mon–Fri and the day before a holiday 15:00–23:00; Sat, Sun and holidays 12:00–23:00; last order 22:30 (Tabelog). Reservations taken; cancellation fees from 23:00 two days before (100% of a course, or ¥3,000 per person for table-only). All-you-can-eat ¥4,620, with two-hour all-you-can-drink ¥5,940 (2026 reviews). Order by tablet (February 2026). One free grill change; later changes charged (February 2026). 88 seats; private hire for 20–50+. Designated smoking area. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. BYO allowed (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 2-chōme, 金栄ビル 2F — 3 min from JR Ueno Shinobazu Exit and Exit A3 of Ueno-Okachimachi / Ueno-Hirokoji',
    cuisine: 'All-you-can-eat yakiniku with Korean sides (Tabelog; reviews) · courses: all-you-can-eat ¥4,620; with all-you-can-drink ¥5,940 (June and August 2026) · à la carte (Tabelog menu, February 2026): omakase platters of 6/8/10 cuts ¥4,980/¥6,980/¥9,980, kalbi ¥780, diamond-cut kalbi or outside skirt ¥1,280, black wagyu tenderloin ¥1,780, thick-cut premium tongue ¥2,580, green-onion salt tongue ¥980 · sides: beef-bone soup, yukgaejang, kakuteki, namul, offal stew, cold noodles, scallops; ice cream',
    website: null, gmaps: gm('焼肉DINING 牛勢 上野2-12-9'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakiniku · Ueno, value all-you-can-eat by the Shinobazu exit] A large, clean second-floor yakiniku restaurant three minutes from Ueno Station's Shinobazu Exit, built for groups. Most people book the all-you-can-eat course (¥4,620) or add two hours of drinks (¥5,940) and order by tablet: diamond-cut kalbi and outside skirt are the favourites, with beef-bone soup, spicy yukgaejang, kakuteki and cold noodles on the side. Reviewers in 2026 found the meat good for the price and the room quieter than most; the complaints are slow service when short-staffed, sauces and garlic only on request, and a charge after the first grill change. It opens at 15:00 on weekdays and noon at weekends, until 23:00.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog official listing. No source names the operator or cooks.', philosophy: null, specialty: 'All-you-can-eat yakiniku; diamond-cut kalbi.',
      anecdotes: [
        { text: '"The kalbi and outside skirt were tastier than those at other places in the same price range!" — November 2025.', source: R + 'B518056181/' },
        { text: '"There are no sauces, lemon, gochujang, or garlic provided on the table. You need to call the staff each time you want something" — February 2026.', source: R + 'B523630133/' },
        { text: '"This is an all-you-can-eat and drink course for JPY 5,940. I\'ve visited several times, and for this price, the meat is delicious." — June 2026.', source: R + 'B529539858/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 焼肉DINING 牛勢 上野店、上野2-12-9 金栄ビル 2F、JR上野駅不忍口・上野御徒町駅A3・上野広小路駅A3から徒歩3分、月〜金・祝前日15:00〜23:00、土日祝12:00〜23:00 (L.O.22:30)、予約可 (2日前23時からキャンセル料)、88席、分煙、カード可 (電子マネー・QR不可)、持ち込み可。メニュー (2026年2月): おまかせ盛り合わせ6種4,980円・8種6,980円・10種9,980円、カルビ780円、ダイヤモンドカットカルビ・ハラミ1,280円、黒毛和牛ヒレ1,780円、厚切り上タン2,580円。口コミ (2025年11月〜2026年9月): 食べ放題4,620円、飲み放題付き5,940円、タブレット注文、網交換は1回無料、たれやにんにくは頼む必要、人手不足で提供が遅いことも、店内は清潔で静か。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B518056181/', R + 'B519875798/', R + 'B522113655/', R + 'B523630133/', R + 'B524923892/', R + 'B526094709/', R + 'B527939864/', R + 'B529539858/', R + 'B534716517/', R + 'B536611550/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering; ask staff for sauces and garlic; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野2-12-9 金栄ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated November 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野二丁目12番9号 (go) 9m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B529539858/', R + 'B534716517/'],
    price_note: 'À la carte prices from the Tabelog menu (updated February 2026); course prices from June and August 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat course', '¥4,620', 'Courses', 'ask', 'no', 'August 2026.', 'tabehodai'),
      it('', '', 'All-you-can-eat with 2-hour all-you-can-drink', '¥5,940', 'Courses', 'ask', 'no', 'June 2026.', 'tabenomihodai'),
      it('', '', 'Kalbi (salt sauce)', '¥780', 'Beef', 'ask', 'no', 'Tabelog menu, February 2026.', 'karubi'),
      it('', '', 'Diamond-cut kalbi (salt sauce)', '¥1,280', 'Beef', 'ask', 'no', 'Tabelog menu, February 2026.', 'diamond_karubi'),
      it('', '', 'Black wagyu tenderloin (salt sauce)', '¥1,780', 'Beef', 'ask', 'no', 'Tabelog menu, February 2026.', 'wagyu_hire'),
      it('', '', 'Thick-cut premium tongue', '¥2,580', 'Beef', 'ask', 'no', 'Tabelog menu, February 2026.', 'atsugiri_tan'),
    ] }, {
    cuisine: '韓国料理のサイドもある食べ放題の焼肉 (食べログ、口コミ)・コース: 食べ放題4,620円、飲み放題付き5,940円 (2026年6月・8月)・単品 (食べログのメニュー、2026年2月): おまかせ盛り合わせ6種・8種・10種 4,980円・6,980円・9,980円、カルビ780円、ダイヤモンドカットのカルビやハラミ1,280円、黒毛和牛ヒレ1,780円、厚切り上タン2,580円、ねぎ塩タン980円・サイド: 牛骨スープ、ユッケジャン、カクテキ、ナムル、もつ煮、冷麺、ホタテ、アイス',
    neighborhood: '上野二丁目、金栄ビル 2F。JR上野駅不忍口、上野御徒町駅・上野広小路駅A3出口から徒歩3分',
    gf_detail: 'グルテンフリーは要確認。塩だれの肉が多いものの、たれ漬けの肉、たれ、冷麺、煮込みも同じメニューにあり、グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。牛の焼肉店。野菜のサイドはナムルとカクテキで、味付けの説明はありません。',
    notes: '[焼肉・上野、不忍口のお得な食べ放題] 上野駅不忍口から3分、2階にある広く清潔な焼肉店で、グループ向け。ほとんどの人が食べ放題 (4,620円) か2時間の飲み放題付き (5,940円) を予約し、タブレットで注文。人気はダイヤモンドカットのカルビとハラミで、牛骨スープ、辛いユッケジャン、カクテキ、冷麺も。2026年の口コミでは値段の割に肉がよく、ほかより静かという声。不満は人手が少ない日の提供の遅さ、たれやにんにくは頼む必要があること、2回目以降の網交換は有料なこと。平日は15:00、週末は12:00から23:00まで。',
  });
}

// ================================================================ 肉めし岡もと 御徒町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13283015/'; const R = TB + 'dtlrvwlst/';
  const OS = 'https://www.arclandservice.co.jp/29okamoto/'; const DX = 'https://dxmagazine.jp/sn/nkmsok73a/'; const SL = 'https://shop.arclandservice.co.jp/ae-shop/spot/list?category=26&limit=20';
  const D = day(['11:00', '22:00']);
  put({
    id: 'tokyo_nikumeshi_okamoto_okachimachi', name: '肉めし岡もと 御徒町店 (Niku Meshi Okamoto)', category: 'OMNI',
    lat: 35.707973, lng: 139.774307, cuisine_type: 'donburi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: beef and offal braised in a sweet-savoury sauce over rice; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: braised beef, offal and pork; the tofu is cooked in the same pot.',
    hours_raw: 'Daily 11:00–22:00 (Tabelog; may change). No reservations. Buy a ticket from the machine (cash or cashless, October 2026). Payment: AMEX, e-money and QR (Tabelog). 19 seats, mostly counter. Grand menu renewed 5 October 2026 (official site); an October 2026 regular found the set meals replaced by rice bowls. Opened 20 March 2023.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 4-chōme, by the big "肉めし" sign — 1–2 min from JR Okachimachi and Ueno-Okachimachi Stns',
    cuisine: '"Niku meshi": beef and tofu braised for hours in a big pot, served over rice — a dish modelled on a market workers\' bowl (DX Magazine, 2023) · 2026 reviews: niku meshi; motsu meshi with plenty of offal; beef horumon bowl; beef yakiniku bowl with a soft egg ¥1,045 (September 2026); curry with pork-belly chashu; limited beef misuji bowl (September 2026); potato salad with tartar sauce · raw or boiled egg, green onion, pickled ginger and the house spice "Honoo" on the table · 2023 prices (DX Magazine): niku meshi ¥759, gyusuki niku meshi ¥979',
    website: OS, gmaps: gm('肉めし岡もと 御徒町店'), menu_url: null,
    notes: "[Rice bowls · Okachimachi, braised beef over rice by the station] A busy counter by Okachimachi Station under a big \"肉めし\" sign, serving one idea: beef and tofu simmered for hours in a large pot and ladled over rice, with green onion, egg and pickled ginger to taste. There is also a motsu (offal) version, a sweet-spicy beef yakiniku bowl with a soft egg (¥1,045 in September 2026) and curry; the menu was redone into rice bowls in October 2026. Fast and filling, good for a solo meal, with a ticket for a free egg or large size on the next visit. Reviews are mixed on details — dry green onions, a disappointing limited-time misuji bowl, and slow table clearing on a busy Saturday. The brand began in Shinbashi in 2022 and grew to four shops by 2023; the official shop list now shows two, Shinbashi and this one (2 November 2026).",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 March 2023 (Tabelog). The brand opened its first shop in Shinbashi in August 2022 and had four by September 2023 (Okachimachi, Adachi-Iriya, Mizonokuchi; DX Magazine, 17 September 2023); the official shop list of the operator shows two on 2 November 2026: Shinbashi and Okachimachi.', background: 'Run by Arcland Service (official site; DX Magazine names the operator as トビラダイニング in 2023). No source names the cooks.', philosophy: 'DX Magazine (2023): an evolved "niku meshi" born from the stubborn old man\'s market bowl, filling the bowl and the stomach.', specialty: 'Niku meshi; motsu meshi.',
      anecdotes: [
        { text: '"The onions and burdock root added a nice accent, and there was a generous portion of tofu as well." — October 2026, niku meshi.', source: R + 'B538115472/' },
        { text: '"I visited after a long time and found that the set meal menu was gone, replaced by rice bowl options." — October 2026.', source: R + 'B492648387/' },
        { text: '"However, instead of misuji, it seemed more like beef tendon with no fat." — September 2026, limited beef misuji bowl.', source: R + 'B536103996/' },
      ],
      japanese_sources_summary: '食べログ: 肉めし岡もと 御徒町店、上野4-1-2、上野御徒町駅から79m、毎日11:00〜22:00、予約不可、19席、カード (AMEX)・電子マネー・QR可、2023年3月20日オープン。公式サイト (アークランドサービス): 2026年10月5日にグランドメニューを一新、9月に期間限定の牛みすじ丼。DXマガジン (2023年9月17日): 「頑固おやじが作る市場のぶっかけ飯」をもとにした進化系肉めしの専門店、大鍋で煮込んだ肉と豆腐、肉めし759円、牛すき肉めし979円、2022年8月に新橋に1号店、御徒町店、足立入谷店、4号店の溝の口店。公式の店舗一覧 (2026年11月2日): 新橋店と御徒町店の2店舗。口コミ (2025年1月〜2026年10月): 肉めし、もつめし、牛ホルモン丼、牛焼肉めし1,045円、豚バラチャーシューのカレー、卓上の紅しょうがと「炎」、定食がなくなり丼に、ねぎが乾いていた、牛みすじ丼は期待外れという声。',
      confidence: 'medium', sources: [TB, OS, SL, DX, R + 'B492648387/', R + 'B527870801/', R + 'B536103996/', R + 'B536193692/', R + 'B536480977/', R + 'B536503903/', R + 'B536914592/', R + 'B536987981/', R + 'B538115472/', R + 'B538262990/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (cashless accepted); counter service; many overseas diners and staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野4-1-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; official site (menu renewed October 2026); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野四丁目1番2号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536503903/', DX],
    price_note: 'Few current prices: the menu was renewed on 5 October 2026; ¥1,045 is from September 2026, the others from 2023.', last_checked: TODAY, items: [
      it('', '', 'Beef yakiniku rice bowl with soft egg', '¥1,045', 'Rice bowls', 'no', 'no', 'September 2026 (before the October menu change).', 'gyu_yakiniku_meshi'),
      it('', '', 'Niku meshi (braised beef and tofu over rice)', '¥759', 'Rice bowls', 'no', 'no', '2023 price (DX Magazine).', 'niku_meshi'),
      it('', '', 'Gyusuki niku meshi', '¥979', 'Rice bowls', 'no', 'no', '2023 price (DX Magazine).', 'gyusuki_niku_meshi'),
    ] }, {
    cuisine: '「肉めし」: 大鍋で長時間煮込んだ牛肉と豆腐をご飯にかけたもので、市場のぶっかけ飯がもと (DXマガジン、2023年)・2026年の口コミ: 肉めし、ホルモンたっぷりのもつめし、牛ホルモン丼、半熟卵の牛焼肉めし1,045円 (2026年9月)、豚バラチャーシューのカレー、期間限定の牛みすじ丼 (2026年9月)、タルタルのポテトサラダ・卓上に生卵かゆで卵、ねぎ、紅しょうが、オリジナルスパイス「炎」・2023年の価格 (DXマガジン): 肉めし759円、牛すき肉めし979円',
    neighborhood: '上野四丁目、大きな「肉めし」の看板が目印。JR御徒町駅・上野御徒町駅から徒歩1〜2分',
    gf_detail: 'グルテンフリーではありません。牛肉とホルモンを甘辛いたれで煮込んでご飯に。グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。牛肉、ホルモン、豚肉の煮込み。豆腐も同じ鍋で煮ています。',
    notes: '[丼・御徒町、駅前の煮込み肉めし] 御徒町駅前、大きな「肉めし」の看板の下のにぎやかなカウンターで、大鍋で長時間煮込んだ牛肉と豆腐をご飯にかけ、ねぎ、卵、紅しょうがはお好みで。もつ (ホルモン) 版、半熟卵の甘辛い牛焼肉めし (2026年9月で1,045円)、カレーも。2026年10月にメニューが丼中心に変わりました。早くて量が多く、ひとりでも入りやすい。次回の卵か大盛りのサービス券も。口コミでは細かな点に不満も: ねぎが乾いていた、期間限定の牛みすじ丼が期待外れ、混んだ土曜にテーブルの片付けが追いつかない。ブランドは2022年に新橋で始まり2023年には4店舗、公式の店舗一覧では現在は新橋とここの2店舗 (2026年11月2日)。',
  });
}

// ================================================================ Mille,
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13284533/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '15:00'], ['18:00', '22:00']); const N = day(['18:00', '22:00']);
  put({
    id: 'tokyo_mille_higashiueno', name: 'Mille,', category: 'OMNI',
    lat: 35.707718, lng: 139.778564, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: pasta, gnocchi, focaccia and brioche are central; meat and fish courses are not described as gluten-free, so ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Ozaki beef, tripe, sausage, shirasu, gorgonzola and seafood; no vegan dish is named.',
    hours_raw: 'Lunch Tue–Fri 11:30–15:00 (last order 13:30, Fri 14:00); dinner Tue–Sat and holidays 18:00–22:00 (last order 21:00); closed Mondays and Sundays (Tabelog). Reservations taken (a July 2025 diner walked in on a Thursday). No one under 20. Table charge ¥600. 8 counter seats. Non-smoking. BYO wine by arrangement, corkage ¥5,500 per bottle; bottles from the list can be bought to take home. Cards (VISA, Master, JCB, AMEX, Diners), transport IC and PayPay. Wine salons twice a month (Tabelog). Opened 1 May 2023.',
    hours: { 1: L, 2: L, 3: L, 4: L, 5: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Ueno 1-chōme, 岡島ビル 1F, a quiet street — 5 min from JR Okachimachi, Naka-Okachimachi and Shin-Okachimachi',
    cuisine: 'Wine-led Italian at an eight-seat counter; the chef, a sommelier, cooks alone in front of you, with dishes from Italy\'s regions and a monthly regional wine theme (Tabelog) · menu (Tabelog, 1 November 2026): seasonal omakase ¥11,000; with wine pairing ¥18,000 (November: Veneto, six dishes; December: Piemonte); lunch omakase of four dishes ¥7,800, with wine ¥12,000 · à la carte: caponata ¥900, gorgonzola mousse with brioche ¥2,200, Ozaki beef prosciutto and salami ¥2,200, Roman tripe ¥2,600, aged-shirasu tomato pasta ¥2,400, gnocchi of aged May Queen potatoes ¥2,600, squid-ink pasta ¥3,000, porcini risotto ¥3,200, peposo ¥3,600, Ozaki beef tagliata ¥6,800, rum-raisin ice cream ¥900 · wine by the glass from ¥1,200',
    website: null, gmaps: gm('Mille, 東上野1-10-4'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · Naka-Okachimachi, a one-chef wine counter] A hidden eight-seat counter on a quiet street between Okachimachi and Naka-Okachimachi, opened in 2023, where a chef who is also a sommelier cooks, pours and washes up alone. The food is simple Italian with a regional bent — ribollita, inzimino, Roman tripe, peposo, gnocchi, and Miyazaki's Ozaki beef — matched to wines from a featured region each month (Veneto in November 2026, Piemonte in December). Dinner is mostly omakase (¥11,000, or ¥18,000 with pairing), with some à la carte; weekday lunch is a four-course omakase from ¥7,800. Reviewers single out the pasta and the bread. One December 2025 diner found the solo-run room noisy and hectic and a dish too salty. No under-20s; ¥600 table charge.",
    chef_bio: { chef_name: null, roles: ['chef', 'sommelier'], origin: 'Opened 1 May 2023 (Tabelog)', background: 'Per the Tabelog listing, the chef works alone and is a certified sommelier who hosts wine salons twice a month. Reviewers from July 2025 to February 2026 confirm a one-person operation. No source names the chef.', philosophy: 'Per the listing: careful cooking and temperature of ingredients, simple but memorable dishes.', specialty: 'Wine pairing courses; pasta; Ozaki beef.',
      anecdotes: [
        { text: '"Since the chef is working solo, it might allow for more focus on each dish." — July 2025, omakase with wine pairing.', source: R + 'B489020490/' },
        { text: '"Due to the chef handling everything from cooking to taking orders and washing dishes, the sounds from the kitchen can be quite loud and hectic." — December 2025.', source: R + 'B519184038/' },
        { text: '"I saw an unfamiliar dish name, Ribollita, on the menu, which turns out to be a soup made with beans, vegetables, and bread." — February 2026.', source: R + 'B478520031/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): Mille,、東上野1-10-4 岡島ビル 1F、JR御徒町駅・仲御徒町駅・新御徒町駅から徒歩5分、ランチ火〜金11:30〜15:00、ディナー火〜土・祝18:00〜22:00、月日休み、予約可、20歳未満不可、チャージ600円、カウンター8席、禁煙、持ち込み料1本5,500円、ワインの販売、カード・交通系IC・PayPay可、2023年5月1日オープン、ソムリエの資格を持つシェフが一人で調理、月2回のワインサロン、宮崎の尾崎牛。メニュー (2026年11月1日): 季節のおまかせ11,000円、ワインペアリング付き18,000円 (11月はヴェネト、12月はピエモンテ)、ランチのおまかせ7,800円、ワイン付き12,000円、カポナータ900円、パスタ2,400〜3,200円、ペポーゾ3,600円、尾崎牛のタリアータ6,800円、グラスワイン1,200円から。口コミ (2025年5月〜2026年5月): パスタとパンがおいしい、一人営業でにぎやかな日も、魚が塩辛かったという声。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B466257801/', R + 'B478520031/', R + 'B489020490/', R + 'B503926684/', R + 'B511160648/', R + 'B518861212/', R + 'B519184038/', R + 'B520762526/', R + 'B522468502/', R + 'B529018387/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter facing the chef; book ahead; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都台東区東上野1-10-4 岡島ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated 1 November 2026); reviews dated May 2025–May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野一丁目10番4号 (go) 9m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated 1 November 2026, tax included); ¥600 table charge.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course', '¥11,000', 'Courses', 'ask', 'no', 'Tabelog menu, November 2026.', 'omakase'),
      it('', '', 'Seasonal omakase with wine pairing', '¥18,000', 'Courses', 'ask', 'no', 'Tabelog menu, November 2026.', 'omakase_pairing'),
      it('', '', 'Lunch omakase (four dishes)', '¥7,800', 'Lunch', 'ask', 'no', 'Tabelog menu, November 2026.', 'lunch_omakase'),
      it('', '', 'Caponata', '¥900', 'Antipasti', 'ask', 'ask', 'Tabelog menu, November 2026.', 'caponata'),
      it('', '', 'Tomato pasta with aged shirasu', '¥2,400', 'Pasta', 'no', 'no', 'Tabelog menu, November 2026.', 'shirasu_pasta'),
      it('', '', 'Porcini risotto', '¥3,200', 'Pasta', 'ask', 'ask', 'Tabelog menu, November 2026.', 'porcini_risotto'),
      it('', '', 'Peposo (beef shin stewed with black pepper)', '¥3,600', 'Main', 'ask', 'no', 'Tabelog menu, November 2026.', 'peposo'),
      it('', '', 'Ozaki beef tagliata', '¥6,800', 'Main', 'ask', 'no', 'Tabelog menu, November 2026.', 'ozaki_tagliata'),
    ] }, {
    cuisine: '8席のカウンターでワイン中心のイタリアン。ソムリエでもあるシェフが一人で目の前で調理し、イタリア各地の料理と毎月の地方テーマのワイン (食べログ)・メニュー (食べログ、2026年11月1日): 季節のおまかせ11,000円、ワインペアリング付き18,000円 (11月はヴェネト、6品。12月はピエモンテ)、ランチは4品のおまかせ7,800円、ワイン付き12,000円・アラカルト: カポナータ900円、ゴルゴンゾーラのムースとブリオッシュ2,200円、尾崎牛の生ハムとサラミ2,200円、ローマ風トリッパ2,600円、熟成しらすのトマトパスタ2,400円、熟成メークインのニョッキ2,600円、イカ墨のパスタ3,000円、ポルチーニのリゾット3,200円、ペポーゾ3,600円、尾崎牛のタリアータ6,800円、ラムレーズンのアイス900円・グラスワイン1,200円から',
    neighborhood: '東上野一丁目、岡島ビル 1F、静かな通り。JR御徒町駅・仲御徒町駅・新御徒町駅から徒歩5分',
    gf_detail: 'グルテンフリーは要確認。パスタ、ニョッキ、フォカッチャ、ブリオッシュが中心で、肉や魚のコースもグルテンフリーの説明はないので予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。尾崎牛、トリッパ、ソーセージ、しらす、ゴルゴンゾーラ、魚介。ヴィーガンの料理名はありません。',
    notes: '[イタリアン・仲御徒町、シェフ一人のワインカウンター] 御徒町と仲御徒町の間の静かな通りにある、隠れ家のような8席のカウンターで2023年開店。ソムリエでもあるシェフが一人で調理、ワインのサービス、洗い物までこなします。料理は地方色のあるシンプルなイタリアンで、リボッリータ、インツィミーノ、ローマ風トリッパ、ペポーゾ、ニョッキ、宮崎の尾崎牛など。毎月テーマの地方のワインを合わせます (2026年11月はヴェネト、12月はピエモンテ)。夜は主におまかせ (11,000円、ペアリング付き18,000円) で、アラカルトも少し。平日の昼は4品のおまかせ7,800円から。口コミではパスタとパンが特に好評。2025年12月には一人営業で店内がにぎやかで落ち着かず、料理が塩辛かったという声も。20歳未満は不可、チャージ600円。',
  });
}

save();
