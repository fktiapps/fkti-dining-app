// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 79.
//   + 梅むら Umemura (Kyoto kaiseki in a Kiyamachi machiya with a summer kawayuka on the Kamo; 株式会社梅村)
//   + 旬菜鮮魚 ばんけっと Nishiki. Shunsai Sengyo Banquet Nishiki (fish and oyster izakaya near Shijo-Karasuma, cheap lunch)
//   + ル ソレイユ Le Soleil (six-seat patisserie café in Gion open till 1 am)
//   - エクスキーズ, コロラド 祇園店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26002622 (skipped), 26001170,
//   26011832 (skipped), 26004122, 26027492.
//   queue-status.jsonl grepped for each brand (エクスキーズ, 梅むら, コロラド, ばんけっと, ソレイユ): no earlier rulings.
//   Data check: none of the three drafted is in data/kyoto.json by name or address. アンソレイユ (Demachi) is a different
//   shop. 梅むら is next to エスベトナム料理 (上大阪515).
//   Same-name count (same brand or operator only): 梅むら — invoice holder 株式会社梅村, registered next door at 上大阪町512
//   (NTA register); one restaurant found. ばんけっと — invoice holder an individual; Tabelog’s “Banquet” matches are
//   unrelated. ル ソレイユ — one shop. Large-parent and big-chain-hotel lists checked.
//   Service charges, checked against Tabelog’s Japanese original: 梅むら サービス料15％; none listed for the other two.
//   Other-diner remarks (Greg 2026-11-06): a single August 2026 note on who else was dining at 梅むら left out.
//   Retail rule (Greg 2026-11-07): ル ソレイユ has eat-in seats and serves cake and coffee at the counter — drafted as a café.
//   Halal: no operator in this batch claims halal.
//   JA text: 祝日 written in full.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-79');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26002622', 'エクスキーズ: no reviews dated 2025–2026 (latest August 2015)');
skip('26011832', 'コロラド 祇園店: chain — Tabelog’s name search lists Colorado coffee shops at Kyoto Station Hachijo-guchi, Toji, Shugakuin, Shimotakaido, Minami-Urawa, Odakyu Nagayama and more');

// ================================================================ 梅むら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001170/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_umemura_kiyamachi', name: '梅むら (Umemura)', category: 'OMNI',
    lat: 35.010283, lng: 135.77077, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki and set lunches with tempura, nama-fu, yuba, hot pot and clay-pot rice; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish, hamo and meat on dashi (2026 reviews).',
    hours_raw: '11:30–14:00 and 17:00–22:00; closed on irregular days and over New Year (Tabelog). Service charge 15% (Tabelog, original サービス料15％). Reservations recommended, especially for the riverside terrace (May–August 2026). Cards incl. UnionPay; no e-money or QR (Tabelog). 60 seats at tables, with private rooms; parties up to 70 (Tabelog). A kawayuka terrace over the Kamo river in season (May–September 2026). Down a narrow alley off Kiyamachi north of Sanjo, 3 min from Kyoto Shiyakusho-mae (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi north of Sanjo, on the Kamo river — 3 min from Kyoto Shiyakusho-mae',
    cuisine: 'Kyo-kaiseki of Kyoto vegetables and local fish in a historic machiya looking over the Kamo river to Higashiyama (Tabelog) · Kamogawa gozen lunch ¥6,850: kombu-cured sea bream, sawara sashimi, tempura, nama-fu and yuba, a personal hot pot, clay-pot rice, ice cream and warabi-mochi (February–September 2026) · kaiseki on the kawayuka at sunset (May 2026); hamo in late summer (September 2026) · family-meeting and banquet set-ups with private rooms (February and September 2026)',
    website: null, gmaps: gm('梅むら 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto kaiseki · Kiyamachi, a kawayuka on the Kamo] A long-established Kyoto restaurant down a Kiyamachi alley, in a historic machiya with private rooms and, from May to September, a riverside kawayuka facing Higashiyama: the Kamogawa gozen lunch (¥6,850) or evening kaiseki, served by women in light kimono. 15% service charge.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Run by 株式会社梅村, registered next door at 上大阪町512 (NTA register). Reviewers call it a long-established Kyoto restaurant (July 2026) and describe attentive staff in light kimono (September 2026).',
      philosophy: null, specialty: 'Kamogawa gozen; kawayuka kaiseki.',
      anecdotes: [
        { text: 'At a February 2026 family meeting the staff added a celebratory message to the food, red-and-white decorations in the room and commemorative gifts.', source: R + 'B521821112/' },
        { text: 'A September 2026 diner was moved to the best riverside seat for dessert, and staff kept an eye on the sun throughout.', source: R + 'B536245194/' },
        { text: 'A May 2026 diner brought a partner to the riverside terrace that the family used to visit.', source: R + 'B527856557/' },
      ],
      japanese_sources_summary: '食べログ: 梅むら、日本料理、中京区木屋町通三条上ル上大阪町515、地下鉄京都市役所前駅から徒歩3分、11:30〜14:00、17:00〜22:00、不定休・年末年始、サービス料15%、カード可、60席 (テーブル)、個室あり、70名まで、鴨川と東山を望む歴史ある京町家、京野菜と近海の魚の京懐石、適格請求書 T1130001019975 (株式会社梅村)。口コミ (2026年、英語): 鴨川御膳 (6,850円): 鯛の昆布締め、鰆の刺身、天ぷら、生麩、湯葉、小鍋、土鍋ご飯、アイスとわらび餅、夏の川床、夕暮れの懐石、晩夏の鱧、顔合わせや宴会、薄物の着物の仲居さん、老舗。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=1130001019975', R + 'B521821112/', R + 'B526803571/', R + 'B527856557/', R + 'B528643255/', R + 'B532048353/', R + 'B533697749/', R + 'B536245194/', R + 'B536579797/', R + 'B538465891/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms and a summer river terrace; 15% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通三条上ル上大阪町515',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.010283, 135.77071), offset about 5.5 m east (toward the river) to (35.010283, 135.77077) because エスベトナム料理 (kyoto_s_vietnam_kiyamachi) sits within 5 m; cross-checked: GSI 京都府京都市中京区上大阪町515番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538465891/', R + 'B521821112/'],
    price_note: 'Lunch price from a September 2026 review; 15% service charge.', last_checked: TODAY, items: [
      it('', '', 'Kamogawa gozen (lunch set)', '¥6,850', 'Lunch', 'ask', 'no', 'September 2026.', 'gozen'),
      it('', '', 'Kyo-kaiseki course', '', 'Dinner', 'ask', 'no', 'Tabelog; May 2026.', 'kaiseki'),
    ] }, {
    cuisine: '鴨川越しに東山を望む歴史ある京町家で、京野菜と近海の魚の京懐石 (食べログ)・鴨川御膳の昼 6,850円: 鯛の昆布締め、鰆の刺身、天ぷら、生麩と湯葉、小鍋、土鍋ご飯、アイスとわらび餅 (2026年2〜9月)・夕暮れの川床で懐石 (2026年5月)、晩夏は鱧 (2026年9月)・個室での顔合わせや宴会 (2026年2・9月)',
    neighborhood: '三条の北の木屋町、鴨川沿い。地下鉄京都市役所前から徒歩3分',
    gf_detail: '要確認。天ぷら、生麩、湯葉、小鍋、土鍋ご飯のある京懐石と昼の御膳。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁の懐石で、魚、鱧、肉 (2026年の口コミ)。',
    notes: '[京懐石・木屋町、鴨川の川床] 木屋町の路地の奥、個室のある歴史ある京町家の老舗。5月から9月は東山を望む鴨川の川床で、鴨川御膳の昼 (6,850円) や夜の懐石を。薄物の着物の仲居さんがもてなす。サービス料15%。',
  });
}

// ================================================================ 旬菜鮮魚 ばんけっと Nishiki.
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004122/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['17:30', '24:00']); const SA = day(['17:30', '24:00']);
  put({
    id: 'kyoto_banquet_nishiki', name: '旬菜鮮魚 ばんけっと Nishiki. (Shunsai Sengyo Banquet Nishiki)', category: 'OMNI',
    lat: 35.005066, lng: 135.760579, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, oysters, grilled fish, tempura, chicken nanban, pizza, kara-age and ramen; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Homemade tofu, pickles, salad and pistachios are listed, but nothing is said about dashi or dressings; the menu is mostly seafood and meat (Tabelog menu; 2026 reviews).',
    hours_raw: 'Monday–Friday 11:30–14:30 (L.O. 14:00) and 17:30–24:00 (L.O. 23:00); Saturday 17:30–24:00; closed Sunday, and Monday when it is a holiday (Tabelog). Cards and QR incl. PayPay and Alipay (Tabelog). 30 seats: sunken-kotatsu tatami rooms, tables, couple seats and a 6-seat counter; the tatami room is closed at lunch (Tabelog; August 2026). Non-smoking (Tabelog). On the 2nd floor of 服部ビル, 50 m east of Karasuma on Nishiki-koji, 2 min from Karasuma/Shijo (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishiki-koji just east of Karasuma, 2F — 2 min from Karasuma/Shijo',
    cuisine: 'Natural fish bought each morning, seasonal fish, Iwate Sasukebuta pork, Tanba red chicken and Wagyu steak; big oysters from Senpochi, Hokkaido, in season; plenty of sake (Tabelog) · assorted natural-fish sashimi ¥2,300; rock oyster from ¥968 by size; cod milt with ponzu ¥968; homemade tofu ¥550; dried skate fin ¥748 (Tabelog) · hamo sashimi (August 2025); grilled hamo (June 2026) · oysters and shirako (November–December 2025) · grilled sawara, sea-urchin tofu (April 2026) · rock oyster, canola and shirako tempura (May 2026) · lunch from ¥990, e.g. chicken nanban (January and August 2026) · pizza, kara-age and ramen too (June 2026)',
    website: null, gmaps: gm('旬菜鮮魚 ばんけっと Nishiki.'), menu_url: TB + 'dtlmenu/',
    notes: '[Fish izakaya · Shijo-Karasuma, oysters and sashimi] A clean second-floor izakaya just off Karasuma on Nishiki-koji: morning-bought natural fish as sashimi, big rock oysters, hamo in summer and shirako in winter, plus pork, chicken and Wagyu, and a ¥990 weekday lunch. Friendly manager; closed Sunday.',
    chef_bio: { chef_name: '波多野 一成 (reading not sourced)', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'Tabelog’s invoice number T8810436060048 is registered to an individual, 波多野 一成 (NTA register). A November 2025 regular describes a pleasant, friendly manager.',
      philosophy: 'Quality ingredients — natural fish bought every morning (Tabelog).', specialty: 'Oysters; natural-fish sashimi.',
      anecdotes: [
        { text: 'A November 2025 regular came for shirako, stayed for whole, uncut oysters — “the most satisfying this year”.', source: R + 'B508212525/' },
        { text: 'A June 2026 diner found the hamo sashimi sold out and was offered grilled hamo instead.', source: R + 'B531636499/' },
      ],
      japanese_sources_summary: '食べログ: 旬菜鮮魚 ばんけっと Nishiki.、居酒屋・海鮮・オイスター、中京区烏丸通錦小路東入ル元法然寺町681 服部ビル 2F、阪急烏丸駅・地下鉄四条駅から徒歩2分、月〜金 11:30〜14:30 (L.O.14:00)、17:30〜24:00 (L.O.23:00)、土 17:30〜24:00、日曜定休 (月曜が祝日の場合は月曜休み)、カード・QR可、30席、禁煙、毎朝仕入れる天然魚の刺身、岩手のSasukebuta、丹波の鶏、和牛ステーキ、北海道Senpochiの大ぶりの牡蠣、日本酒、天然鮮魚の刺身盛り合わせ2,300円、岩牡蠣968円から、白子ポン酢968円、自家製豆腐550円、エイヒレ748円、適格請求書 T8810436060048 (波多野 一成)。口コミ (2025〜2026年、英語): 牡蠣、白子、鱧の刺身と焼き、鰆の焼き物、雲丹豆腐、菜の花と白子の天ぷら、昼のチキン南蛮990円、ピザ、唐揚げ、ラーメン、気さくな店長。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8810436060048', R + 'B508212525/', R + 'B512243432/', R + 'B518643659/', R + 'B521596134/', R + 'B525672419/', R + 'B528420378/', R + 'B530340146/', R + 'B531636499/', R + 'B533531946/', R + 'B535783474/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏丸通錦小路東入ル元法然寺町681 服部ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005066, 135.760579); cross-checked: GSI 京都府京都市中京区元法然寺町681番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu, tax included; lunch from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Assorted natural-fish sashimi (regular)', '¥2,300', 'Sashimi', 'ask', 'no', 'Tabelog.', 'sashimi'),
      it('', '', 'Rock oyster (by size)', 'from ¥968', 'Oysters', 'ask', 'no', 'Tabelog.', 'iwagaki'),
      it('', '', 'Cod milt with ponzu', '¥968', 'Small plates', 'ask', 'no', 'Tabelog.', 'shirako'),
      it('', '', 'Homemade tofu', '¥550', 'Small plates', 'ask', 'ask', 'Tabelog.', 'tofu'),
      it('', '', 'Chicken nanban lunch', '¥990', 'Lunch', 'no', 'no', 'January and August 2026.', 'nanban'),
    ] }, {
    cuisine: '毎朝仕入れる天然魚、旬の鮮魚、岩手のSasukebuta、丹波の鶏、和牛ステーキ、季節には北海道Senpochiの大ぶりの牡蠣、日本酒が豊富 (食べログ)・天然鮮魚の刺身盛り合わせ2,300円、大きさで変わる岩牡蠣968円から、白子ポン酢968円、自家製豆腐550円、エイヒレ748円 (食べログ)・鱧の刺身 (2025年8月)、鱧の焼き物 (2026年6月)・牡蠣と白子 (2025年11〜12月)・鰆の焼き物、雲丹豆腐 (2026年4月)・岩牡蠣、菜の花と白子の天ぷら (2026年5月)・昼はチキン南蛮など990円から (2026年1・8月)・ピザ、唐揚げ、ラーメンも (2026年6月)',
    neighborhood: '烏丸のすぐ東の錦小路、2階。烏丸・四条から徒歩2分',
    gf_detail: '要確認。刺身、牡蠣、焼き魚、天ぷら、チキン南蛮、ピザ、唐揚げ、ラーメン。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。自家製豆腐、漬物、サラダ、ピスタチオがあるが、出汁やドレッシングについては書かれておらず、ほとんどが魚介と肉 (食べログのメニュー、2026年の口コミ)。',
    notes: '[魚の居酒屋・四条烏丸、牡蠣と刺身] 烏丸から錦小路を入ってすぐ、きれいな2階の居酒屋。毎朝仕入れる天然魚の刺身、大ぶりの岩牡蠣、夏は鱧、冬は白子。豚、鶏、和牛も。平日昼は990円から。気さくな店長、日曜定休。',
  });
}

// ================================================================ ル ソレイユ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027492/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '01:00']);
  put({
    id: 'kyoto_le_soleil_gion', name: 'ル ソレイユ (Le Soleil)', category: 'OMNI',
    lat: 35.00554, lng: 135.777129, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: French pastries, cheesecakes and cookies (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream-based French pastries, crème brûlée and cheesecakes (2025–2026 reviews).',
    hours_raw: 'Monday, Wednesday–Sunday 12:00–01:00; closed Tuesday; hours may change (Tabelog). No cards or e-money (Tabelog). 6 seats: 4 at the counter and a table for 2 (Tabelog); cakes to eat in or take home (March 2025, June 2026). Non-smoking (Tabelog). On the ground floor of パインヴィレッヂ in Gion (林下町), about 480 m from Higashiyama Station (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion (林下町) — about 480 m from Higashiyama Station',
    cuisine: 'French pastries and cookies baked on site, open late into the night (2025–2026) · chocolate crème brûlée (March 2025) · baked cheesecake; rare cheesecake heaped with strawberries, grapes, cherries and blueberries (June 2026) · coffee in stylish cups (March 2025)',
    website: null, gmaps: gm('ル ソレイユ 祇園 ケーキ'), menu_url: TB + 'dtlmenu/',
    notes: '[Patisserie café · Gion, open till 1 am] A tiny six-seat patisserie café in Gion that smells of baking cookies and stays open till 1 am — French pastries, chocolate crème brûlée and fruit-heaped cheesecakes, with coffee, to eat at the counter or take away. No cards; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a small café whose stylish cups reflect the owner’s taste (March 2025) and a reserved woman behind the counter who smiles when handing over the cakes (June 2026).',
      philosophy: null, specialty: 'French pastries; cheesecakes.',
      anecdotes: [
        { text: 'A June 2026 diner came after a savoury dinner in Gion, craving something sweet late at night.', source: R + 'B509487363/' },
        { text: 'A March 2025 pair shared a whole chocolate crème brûlée — a first for both.', source: R + 'B504082369/' },
      ],
      japanese_sources_summary: '食べログ: ル ソレイユ、ケーキ・洋菓子、東山区林下町432-4 パインヴィレッヂ 1F、東山駅から482m、月・水〜日 12:00〜翌1:00、火曜定休、カード・電子マネー不可、6席 (カウンター4、テーブル2)、禁煙。口コミ (2025〜2026年、英語): 小さなカフェ、焼きたてのクッキーの香り、チョコレートのクリームブリュレ、ベイクドチーズケーキ、果物たっぷりのレアチーズケーキ、深夜まで開くフランス菓子の店、おしゃれなカップ。',
      confidence: 'low', sources: [TB, R + 'B504082369/', R + 'B509487363/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Six seats; no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区林下町432-4 パインヴィレッヂ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated March 2025 and June 2026.' },
    pin_source: `Tabelog ${TB} (35.00554, 135.777129); cross-checked: GSI 京都府京都市東山区林下町432番地 (lot) 15m; kyoto_gion_kani_o_kurau is 7.2 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504082369/', R + 'B509487363/'],
    price_note: 'No prices found.', last_checked: TODAY, items: [
      it('', '', 'Chocolate crème brûlée', '', 'Pastries', 'ask', 'no', 'March 2025.', 'brulee'),
      it('', '', 'Rare cheesecake with fresh fruit', '', 'Pastries', 'no', 'no', 'June 2026.', 'rarecheese'),
      it('', '', 'Baked cheesecake', '', 'Pastries', 'no', 'no', 'June 2026.', 'bakedcheese'),
    ] }, {
    cuisine: '店で焼くフランス菓子とクッキー、夜遅くまで (2025〜2026年)・チョコレートのクリームブリュレ (2025年3月)・ベイクドチーズケーキ、苺、ぶどう、アメリカンチェリー、ブルーベリーたっぷりのレアチーズケーキ (2026年6月)・おしゃれなカップのコーヒー (2025年3月)',
    neighborhood: '祇園 (林下町)。東山駅から約480m',
    gf_detail: 'グルテンフリーではない。フランス菓子、チーズケーキ、クッキー (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。クリームを使うフランス菓子、クリームブリュレ、チーズケーキ (2025〜2026年の口コミ)。',
    notes: '[パティスリーカフェ・祇園、深夜1時まで] クッキーの焼ける香りがする祇園の6席の小さなパティスリーカフェ。深夜1時まで開き、フランス菓子、チョコのクリームブリュレ、果物たっぷりのチーズケーキをコーヒーとカウンターで、または持ち帰りで。カード不可、火曜定休。',
  });
}

save();
