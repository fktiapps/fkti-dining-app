// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 12.
//   + KOTOWARI (Japanese lunch plates, café and evening washoku beside a leather-goods shop; since 2021)    [core]
//   + スパイスカフェ ディワリ 京都店 SPICE CAFE DIWALI (Indian curry café on Mina Kyoto 7F)                   [core]
//   + ごはん処 矢尾定 Gohan Dokoro Yaosada (set-meal house of a Kyoto caterer founded 1909)                  [notable]
//   + よこい Yokoi (kappo in a 180-year-old townhouse; Michelin one star 2026; since 2023)                   [notable]
//   - ぎょうざ 歩兵 祇園本店 26018951 (chain, 6 shops) · 膳處漢ぽっちり 26001011 (KIWA sub-brand)
//     · サンタ・マリア・ノヴェッラ・ティサネリーア 京都店 26002013 (sub-brand of a large parent) — skipped
//   Same-name counts first: 歩兵 — 6 shops on its own site; KOTOWARI, ディワリ, 矢尾定, よこい — one each in our crawl
//   (ディワリ's other shops, if any, not found; 矢尾定's caterer runs this one restaurant per its site; よこい one shop).
//   Taken in queue order on 2026-11-05: core 26035463, 26027831; notable 26018951 (skip), 26001011 (skip), 26002013
//   (skip), 26007917, then 26040461 (26026031 Kenzo Estate is a core-list shop, left for the core lane). None of the four
//   drafted is in data/kyoto.json by name or address.
//   Pins: Yaosada's GSI match is town-level (四条町), so loc_approx 'single'.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26018951', 'ぎょうざ 歩兵 祇園本店: chain (the main shop counts as the chain) — its own site (gyozahohei.com/access) lists 祇園本店, 京都髙島屋S.C.店, 銀座店, 名古屋錦店, 仙台一番町店 and a Paris shop');
skip('26001011', '膳處漢ぽっちり: a brand of KIWA Corporation, whose brand list (kiwa-group.co.jp) names about 90 restaurant brands (紅虎餃子房, タイガー餃子会舘, 梅梅 …) — a sub-brand of a large parent, a chain under Greg\'s 2026-11-05 ruling (note: 柚子元, another KIWA brand, was drafted in osw9-4 before that ruling)');
skip('26002013', 'サンタ・マリア・ノヴェッラ・ティサネリーア 京都店: the restaurant of the Officina Profumo-Farmaceutica di Santa Maria Novella brand, which set up a Japan company in 2023 and runs perfume and cosmetics shops worldwide (fashionsnap.com, 2024-03-27) — a sub-brand of a large parent under Greg\'s 2026-11-05 ruling (flagged: a single restaurant in Japan)');

// ================================================================ KOTOWARI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035463/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_kotowari', name: 'KOTOWARI', category: 'OMNI',
    lat: 35.007811, lng: 135.768404, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch plates of mini rice bowls, sashimi, tempura and miso soup with a bonito dashi; seared cheesecake and other sweets at café time; the shop asks guests to tell it about allergies (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the plates centre on fish, roast beef, chicken tempura and dashi (2026 reviews).',
    hours_raw: 'Lunch 11:00–15:00 (last order 14:30; may end early when sold out), café 15:00–17:00, dinner 17:00–22:00 (last order 21:00); closing days not fixed (Tabelog). Bookings taken; dinner courses and the birthday plate (¥1,100) need two days’ notice; Monday–Thursday the dinner plate is limited to three groups a day (Tabelog). 20 seats incl. counter, tables and a small semi-private tatami room; non-smoking; free Wi-Fi; cards, IC cards and QR (Tabelog). Leather goods are sold in the shop and bag repairs taken (Tabelog). On a street just west of Kawaramachi behind Mina Kyoto; 5 min from Sanjo or Kyoto Shiyakusho-mae Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Just west of Kawaramachi behind Mina Kyoto — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Seasonal Japanese cooking in a shop that pairs food with leather goods (Tabelog) · lunch: KOTOWARI three-kind mini rice-bowl plate ¥2,200 (e.g. shirasu, seafood and roast beef, with salad, tempura, potato salad, dashimaki, miso soup), a daily plate with sashimi or chicken tempura, uni-ikura-roast-beef bowl; white or multigrain rice (2026 reviews) · café: seared cheesecake finished in front of you, Dubai chocolate mochi (Tabelog; 2026 reviews) · dinner: Japanese à la carte or courses with sake and wine (Tabelog) · kids’ lunch (August 2026)',
    website: 'https://kotowari.jp/', gmaps: gm('KOTOWARI 京都 松ケ枝町'), menu_url: null,
    notes: "[Japanese plates & café · Kawaramachi-Sanjo] A bright, stylish shop behind Mina Kyoto that sells leather goods alongside food: at lunch a colourful plate of three mini rice bowls with tempura and sides (¥2,200), in the afternoon a cheesecake seared in front of you, and at night Japanese dishes with sake. Family-friendly, with a small tatami room and a kids' lunch. Lunch can sell out; book ahead.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who was cooking alone at an October 2026 lunch'], origin: null,
      background: 'Opened 12 March 2021 (Tabelog). A June 2026 reviewer learned the restaurant is run by Akashiya, a bag-repair shop near Kyoto Station; Tabelog notes leather goods for sale and bag-repair consultations in the shop.',
      philosophy: 'Per the operator’s Tabelog text: the essence of everyday life with Japan’s seasonal delights, in a space both special and comforting.',
      specialty: 'Three-kind rice-bowl plate; seared cheesecake.',
      anecdotes: [
        { text: '"It seemed that the owner was the only one cooking, so there was a bit of a wait" — October 2026.', source: R + 'B536755510/' },
        { text: 'A September 2026 diner found the mini rice bowls much smaller than expected, though the food was good.', source: R + 'B535819691/' },
        { text: 'The cheesecake was seared right in front of an August 2026 guest.', source: R + 'B534234711/' },
      ],
      japanese_sources_summary: '食べログ: KOTOWARI、日本料理・居酒屋・カフェ、中京区松ケ枝町463、京阪三条駅・京都市役所前駅から徒歩5分、ランチ 11:00〜15:00 (L.O. 14:30)、カフェ 15:00〜17:00、ディナー 17:00〜22:00 (L.O. 21:00)、不定休、予約可、アレルギーは要連絡、ディナーコースとバースデープレート (1,100円) は2日前までに予約、20席 (カウンター5、テーブル12、座敷2〜4)、禁煙、Wi-Fi、カード・交通系IC・QR 可、2021年3月12日オープン、店内で革製品の販売とバッグの修理相談、ランチの三種のミニ丼のプレート、目の前で炙るチーズケーキ。口コミ (2026年5〜10月、英語): 三種のミニ丼のプレート2,200円、刺身、天ぷら、だし巻き、白米か雑穀米、子ども向けランチ、Dubai chocolate mochi、運営は京都駅近くのバッグ修理店 Akashiya、店主が一人で調理。',
      confidence: 'medium', sources: [TB, R + 'B504990146/', R + 'B528619497/', R + 'B530638987/', R + 'B534234711/', R + 'B535819691/', R + 'B536492036/', R + 'B536755510/', R + 'B536788571/', R + 'B538027408/', R + 'B538196060/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book lunch; tell the shop about allergies; leather goods on sale in the room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区松ケ枝町463',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator text); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007811, 135.768404); cross-checked: GSI 京都府京都市中京区松ケ枝町463番地 (lot) 5m; 27 m from kyoto_spice_cafe_diwali; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536492036/', TB],
    price_note: 'No menu read; prices from September–October 2026 reviews and the Tabelog reservation notes.', last_checked: TODAY, items: [
      it('', '', 'KOTOWARI three-kind mini rice-bowl plate (lunch)', '¥2,200', 'Lunch', 'ask', 'no', 'September 2026.', 'sanshu_don_plate'),
      it('', '', 'Seared cheesecake (café)', '', 'Café', 'no', 'no', '', 'seared_cheesecake'),
      it('', '', 'Birthday plate (dinner, 2 days’ notice)', '¥1,100', 'Dinner', '', '', 'Tabelog.', 'birthday_plate'),
    ] }, {
    cuisine: '革製品の店と食を合わせた店の旬の和食 (食べログ)・ランチ: 三種のミニ丼のプレート2,200円 (しらす、海鮮、ローストビーフなどにサラダ、天ぷら、ポテトサラダ、だし巻き、味噌汁)、刺身か鶏天の日替わりプレート、ウニ・いくら・ローストビーフの丼、白米か雑穀米 (2026年の口コミ)・カフェ: 目の前で炙るチーズケーキ、Dubai chocolate mochi (食べログ、2026年の口コミ)・夜: 日本酒とワインに合う和食のアラカルトとコース (食べログ)・子ども向けランチ (2026年8月)',
    neighborhood: '河原町のすぐ西、ミーナ京都の裏。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。ランチはミニ丼、刺身、天ぷら、鰹出汁の味噌汁のプレート、カフェはチーズケーキなどの甘味。アレルギーは伝えるよう案内がある (食べログ、2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。魚、ローストビーフ、鶏天と出汁の料理が中心 (2026年の口コミ)。',
    notes: '[和食のプレートとカフェ・河原町三条] ミーナ京都の裏の明るくおしゃれな店で、革製品も売っている。昼は三種のミニ丼に天ぷらや小鉢の彩りのよいプレート (2,200円)、午後は目の前で炙るチーズケーキ、夜は日本酒と和食。小さな座敷や子ども向けランチもあり家族連れにも。昼は売り切れることもあるので予約を。',
  });
}

// ================================================================ スパイスカフェ ディワリ 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027831/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'kyoto_spice_cafe_diwali', name: 'スパイスカフェ ディワリ 京都店 (SPICE CAFE DIWALI Kyoto)', category: 'OMNI',
    lat: 35.007874, lng: 135.768703, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curries come with naan or rice; biryani, saffron rice and curry rice are wheat-free in principle, but the curries’ thickeners and the kitchen practice are not described (2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and there is a vegetable curry, but ghee, cream or yogurt use is not stated (Tabelog; November 2024).',
    hours_raw: '11:00–23:00 (last order 22:00), every day including holidays (Tabelog). Bookings taken; all-you-can-eat-and-drink plans for parties; private hire for 20–50 (Tabelog; April 2026). Biryani takes about 20 minutes (August 2025, October 2026). 46 seats incl. sofas and counter; non-smoking; free Wi-Fi; English menu and English-speaking staff; takeaway; cards and PayPay (Tabelog). Mina Kyoto 7F, Kawaramachi south of Sanjo; 5 min from Kyoto Shiyakusho-mae or Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Mina Kyoto 7F, Kawaramachi south of Sanjo — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Indian curries with spices imported from India, in a café setting open until 23:00 (Tabelog) · lunch sets of curry with naan, cheese naan or rice (keema, chicken, vegetable), tandoori chicken · chicken and mutton biryani with raita · chicken fried rice ¥880, fried chicken ¥715 (July 2024) · lassi, mango lassi, chai · desserts: chocolate naan with ice cream, Maharaja Parfait with naan, fruit, homemade yogurt and ice cream, mango pudding, soft serve (2024–26 reviews) · all-you-can-drink courses (Tabelog; April 2026)',
    website: null, gmaps: gm('スパイスカフェ ディワリ 京都店 ミーナ京都'), menu_url: null,
    notes: "[Indian curry café · Kawaramachi-Sanjo, Mina Kyoto 7F] A roomy, all-day Indian café on the 7th floor of the Mina Kyoto building: curry sets with fluffy naan or cheese naan, a proper mutton biryani (allow 20 minutes), thick lassi, and dessert naan and parfaits. Open 11:00–23:00 daily; English menu; party plans with all-you-can-drink.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed; a reviewer thanks "Manager Tamangu" (August 2025)'], origin: null,
      background: 'Per the operator’s Tabelog text: authentic Indian food at reasonable prices with plenty of spices imported directly from India. No other Diwali shops were found in our crawl or a web search.',
      philosophy: null, specialty: 'Biryani; naan sets.',
      anecdotes: [
        { text: 'A four-time visitor had chicken biryani before the Gozan no Okuribi and thanked "Manager Tamangu" — August 2025.', source: R + 'B490353150/' },
        { text: 'The mango pudding was sold out; soft serve instead — December 2025.', source: R + 'B519962369/' },
        { text: 'A January 2025 diner found the curries and tandoori chicken not quite the expected flavour, but good, and took half the cheese naan home.', source: R + 'B500002653/' },
      ],
      japanese_sources_summary: '食べログ: スパイスカフェ ディワリ 京都店、インド料理・インドカレー・カフェ、中京区河原町通三条下ル大黒町58 ミーナ京都 7F、毎日 11:00〜23:00 (L.O. 22:00)、予約可、46席、貸切20〜50人、禁煙、Wi-Fi、テイクアウト、英語メニュー・英語のスタッフ、カード・PayPay 可、ベジタリアンメニューあり、インド直輸入のスパイス、食べ放題・飲み放題プラン。口コミ (2024年7月〜2026年10月、英語): チキンビリヤニ・マトンビリヤニ (約20分)、チーズナン、キーマ、野菜カレー、ラッシー、チャイ、チョコナン、マハラジャパフェ、チキンチャーハン880円、唐揚げ715円。',
      confidence: 'low', sources: [TB, R + 'B489082631/', R + 'B490353150/', R + 'B494903148/', R + 'B497316797/', R + 'B500002653/', R + 'B500311580/', R + 'B519962369/', R + 'B526574140/', R + 'B532974152/', R + 'B536618511/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); open late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条下ル大黒町58 ミーナ京都 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator text); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007874, 135.768703); cross-checked: GSI 京都府京都市中京区大黒町58番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B489082631/'],
    price_note: 'No menu read; prices from a July 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken fried rice', '¥880', 'Rice', 'ask', 'no', 'July 2024.', 'chicken_fried_rice'),
      it('', '', 'Fried chicken', '¥715', 'Sides', 'ask', 'no', 'July 2024.', 'fried_chicken'),
      it('', '', 'Mutton biryani', '', 'Rice', 'ask', 'no', 'About 20 minutes.', 'mutton_biryani'),
      it('', '', 'Vegetable curry with naan', '', 'Curry', 'no', 'ask', '', 'veg_curry_naan'),
    ] }, {
    cuisine: 'インド直輸入のスパイスのインドカレーを23時まで、カフェの空間で (食べログ)・ランチはカレーにナン、チーズナン、ライスのセット (キーマ、チキン、野菜)、タンドリーチキン・チキンとマトンのビリヤニ、ライタ付き・チキンチャーハン880円、唐揚げ715円 (2024年7月)・ラッシー、マンゴーラッシー、チャイ・デザート: アイス添えのチョコナン、ナン、フルーツ、自家製ヨーグルト、アイスの Maharaja Parfait、マンゴープリン、ソフトクリーム (2024〜26年の口コミ)・飲み放題付きコース (食べログ、2026年4月)',
    neighborhood: 'ミーナ京都7階、三条の南の河原町。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。カレーはナンかライスで。ビリヤニ、サフランライス、カレーライスは原則小麦なしだが、カレーのとろみや厨房の運用の説明はない (2024〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、野菜カレーもあるが、ギー、クリーム、ヨーグルトの使用は書かれていない (食べログ、2024年11月)。',
    notes: '[インドカレーのカフェ・河原町三条、ミーナ京都7階] ミーナ京都の7階にある広い、一日中開いているインドカフェ。ふわふわのナンやチーズナンのカレーセット、本格的なマトンビリヤニ (20分ほどかかる)、濃いラッシー、デザートのナンやパフェ。毎日11時〜23時、英語メニューあり、飲み放題付きの宴会プランも。',
  });
}

// ================================================================ ごはん処 矢尾定
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26007917/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.yaosada.com/gohandokoro';
  const H = day(['11:00', '14:00'], ['17:30', '20:00']);
  put({
    id: 'kyoto_gohandokoro_yaosada', name: 'ごはん処 矢尾定 (Gohan Dokoro Yaosada)', category: 'OMNI',
    lat: 35.002595, lng: 135.756729, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled-fish and simmered set meals, Saikyo-miso fish, chirashi sushi and Kyoto bento, all built on dashi, miso and soy; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled and simmered fish and beef set meals with dashi-based side dishes (2026 reviews).',
    hours_raw: '11:00–14:00 and 17:30–20:00; closed Wednesday and the 2nd and 4th Tuesday (Tabelog). Bookings taken; the second-floor tatami room (30 seats) can be reserved for groups (Tabelog). The daily set sells out — staff announce how many are left (June 2026). 59 seats: 5 at the counter and 24 at tables downstairs, tatami upstairs; non-smoking; wheelchair accessible; no cards — e-money and PayPay accepted (Tabelog). Takeaway bento (Tabelog). On Shinmachi-dori north of Ayanokoji, in the Ofune-hoko neighbourhood; 5 min from Karasuma or Shijo Stn (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi-dori north of Ayanokoji, by the Ofune-hoko — 5 min from Shijo Stn',
    cuisine: 'Set meals from a Kyoto caterer founded in 1909, in a Kyoto townhouse on Shinmachi (Tabelog) · daily set meal with several side dishes; grilled-fish sets: hokke, salt-grilled mackerel, guji (amadai), sanma in autumn; simmered mackerel; beef simmered in soy (2026 reviews) · "Oofune" Gion Matsuri special ¥2,600: Saikyo-miso grilled fish, simmered vegetables, chirashi sushi (July 2026) · Kyoto-cuisine bento at dinner; sake incl. one named after the Ofune-hoko float (July 2026)',
    website: SITE, gmaps: gm('ごはん処 矢尾定'), menu_url: null,
    notes: "[Set meals · Shinmachi near Shijo-Karasuma, a 1909 caterer's dining room] The dining room of a Kyoto caterer founded in 1909, in a townhouse on Shinmachi-dori: honest set meals of grilled fish — hokke, mackerel, guji, autumn sanma — or the daily special with a spread of small sides, at about ¥1,000–2,000. Popular with locals at lunch; the daily set sells out. No cards (PayPay OK). Closed Wednesday and the 2nd and 4th Tuesday.",
    chef_bio: { chef_name: null, roles: ['Operator: 矢尾定 (caterer); no person named'], origin: null,
      background: 'Per the operator’s Tabelog text: founded in 1909, handmade dishes made with care, keeping the flavours and techniques of more than 100 years; Kyoto cuisine and bento. Tabelog Teishoku "Tabelog 100" 2021.',
      philosophy: 'Per the operator’s Tabelog text: safe, trustworthy Kyoto food, cooked with a sincere attitude.',
      specialty: 'Grilled-fish set meals; daily set.',
      anecdotes: [
        { text: 'After seeing the Ofune-hoko float at Yoiyama, a regular had the limited "Oofune" lunch (¥2,600) — July 2026.', source: R + 'B520472419/' },
        { text: 'A yearly sanma pilgrim came for the "Sanma Set Meal" again in a year of short supply — October 2026.', source: R + 'B538038095/' },
        { text: 'The staff who answered the phone greeted the guest at the noren — May 2026.', source: R + 'B528790920/' },
      ],
      japanese_sources_summary: '食べログ: ごはん処 矢尾定、食堂・日本料理・寿司、下京区新町綾小路上ル四条町361、烏丸駅・四条駅から徒歩5分、11:00〜14:00・17:30〜20:00、水曜と第2・第4火曜休み、予約可、59席 (1階カウンター5・テーブル24、2階座敷30)、2階の座敷は貸切可、禁煙、車椅子可、カード不可、電子マネー・PayPay 可、テイクアウトの弁当、1909年創業、京料理と弁当、定食百名店 2021。口コミ (2026年5〜10月、英語): 日替わり定食、ほっけ定食、鯖の塩焼き定食、ぐじ定食、さんま定食、鯖の煮付け、牛のしぐれ煮、祇園祭限定 Oofune 2,600円 (西京焼き、炊き合わせ、ちらし寿司)、京料理の弁当、地元の客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B520472419/', R + 'B528709073/', R + 'B528790920/', R + 'B532321846/', R + 'B534885191/', R + 'B537738237/', R + 'B538038095/', R + 'B538297570/', R + 'B538361403/', R + 'B93248077/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set meals; daily set sells out; no cards (PayPay OK).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区新町綾小路上ル四条町361',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator text) and operator site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002595, 135.756729); cross-checked: GSI 京都府京都市下京区四条町 (town) 52m — town-level only, so loc_approx 'single'; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520472419/'],
    price_note: 'No menu read; the only price is from a July 2026 review; reviewers paid about ¥1,000–2,000 a head.', last_checked: TODAY, items: [
      it('', '', '"Oofune" Gion Matsuri special (Saikyo-miso fish, simmered vegetables, chirashi sushi)', '¥2,600', 'Set meals', 'ask', 'no', 'July 2026, limited.', 'oofune'),
      it('', '', 'Daily set meal', '', 'Set meals', 'ask', 'no', '', 'daily_set'),
      it('', '', 'Salt-grilled mackerel set meal', '', 'Set meals', 'ask', 'no', '', 'saba_set'),
    ] }, {
    cuisine: '1909年創業の京都の仕出し屋の定食。新町通の町家 (食べログ)・小鉢が並ぶ日替わり定食、焼き魚の定食: ほっけ、鯖の塩焼き、ぐじ、秋はさんま、鯖の煮付け、牛のしぐれ煮 (2026年の口コミ)・祇園祭の限定 Oofune 2,600円: 西京焼き、炊き合わせ、ちらし寿司 (2026年7月)・夜は京料理の弁当、大船鉾の名の日本酒も (2026年7月)',
    neighborhood: '綾小路の北の新町通、大船鉾のそば。四条駅から徒歩5分',
    gf_detail: '要確認。焼き魚や煮魚の定食、西京焼き、ちらし寿司、京料理の弁当で、出汁、味噌、醤油を使う。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼き魚、煮魚、牛肉の定食に出汁の小鉢 (2026年の口コミ)。',
    notes: '[定食・四条烏丸の新町、1909年創業の仕出し屋の食堂] 新町通の町家にある、1909年創業の京都の仕出し屋の食堂。ほっけ、鯖、ぐじ、秋のさんまなどの焼き魚の定食や、小鉢の並ぶ日替わり定食を1,000〜2,000円ほどで。昼は地元の客でにぎわい、日替わりは売り切れる。カード不可 (PayPay 可)。水曜と第2・第4火曜休み。',
  });
}

// ================================================================ よこい
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040461/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyo-yokoi.com/';
  const L = day(['12:00', '15:00'], ['18:00', '22:00']); const D = day(['18:00', '22:00']);
  put({
    id: 'kyoto_yokoi', name: 'よこい (Yokoi)', category: 'MOM_AND_POP',
    lat: 34.997587, lng: 135.762343, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kyoto kaiseki courses on dashi, with tempura and soy-based sauces; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki courses of fish, shellfish and dashi (2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00 on Wednesday, Thursday, Saturday and Sunday; dinner 18:00–22:00 with an 18:00 or 19:00 start; closed Monday (official site; Tabelog). Bookings online or by phone (official site). Private room ¥2,200 a head; a 10% service charge from 1 December 2026 (Tabelog). Smart casual (no shorts, tank tops or sports sandals for men); shoes off — bring socks if barefoot; children only if they can eat the adult course (Tabelog). 14 seats: a 10-seat counter and a private room for 4; non-smoking; cards accepted (Tabelog). Takeaway saba-zushi and other omotase (official site). By taxi, say 高倉万寿寺; 5 min from Gojo Stn exit 1 (official site; Tabelog).',
    hours: { 1: D, 2: L, 3: L, 4: D, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takakura-Manjuji, south of Shijo — 5 min from Gojo Stn',
    cuisine: 'Kyoto kaiseki in a renovated 180-year-old townhouse (Tabelog; official site) · lunch course about ¥15,000–17,000, dinner about ¥30,000 with drinks (2026 reviews) · summer 2026 dishes in reviews: tomato jelly on a lotus leaf, kombu-cured scallop and sweet shrimp with peach jelly and caviar, abalone tempura with liver sauce, grilled hamo with salt ponzu and ume, ayu soup, karasumi, soft-shelled turtle, hand-rolled sushi · Japanese sake from around the country · omotase to take home: saba-zushi, kinpira-and-salmon bento, yuba chirimen sansho (official site)',
    website: SITE, gmaps: gm('よこい 京都 万寿寺中之町'), menu_url: null,
    notes: "[Kaiseki · Takakura-Manjuji, a Michelin star in a 180-year-old townhouse] A 14-seat kappo in a renovated 180-year-old townhouse south of Shijo, opened in 2023 by a chef who spent 12 years in the Kodaiji Wakuden group and ran the kitchen at 二条やま岸; it gained a Michelin star in the 2026 guide. Seasonal Kyoto courses at the counter — lunch about ¥15,000–17,000, dinner about ¥30,000 with drinks. Shoes off; smart casual. Closed Monday.",
    chef_bio: { chef_name: '横井裕史', roles: ['店主 (owner) per the official site, which romanises the name "Yokoi Yushi"; Tabelog’s operator text calls the chef "Hiroshi Yokoi"'], origin: null,
      background: 'Per the official site: from 18 trained for 12 years in shops of the 高台寺和久傳 group; head chef of 二条やま岸 at 32; independent at 36 near Karasuma-Gojo; listed in the Michelin Guide from 2023 and awarded one star in the Michelin Guide Kyoto–Osaka 2026. Opened 1 December 2023 (Tabelog). Reviews differ on who the owner is: several 2026 reviewers describe a woman owner who welcomes guests alongside the head chef, and a July 2026 reviewer writes that the owner and the head chef are business partners, not a couple.',
      philosophy: 'Per the operator’s Tabelog text: "Koufuku" — food happiness — from the first bite to the swallow; to leave guests with warm memories.',
      specialty: 'Seasonal kaiseki; saba-zushi.',
      anecdotes: [
        { text: 'A late-June 2026 lunch guest at the counter enjoyed the sound of the chef filleting hamo.', source: R + 'B531451896/' },
        { text: 'A July 2026 lunch guest (¥17,000 with a highball) found several later dishes — turtle, sashimi, hand-rolled sushi — lacking distinct flavour.', source: R + 'B533261305/' },
        { text: 'A guest who missed a Shinkansen and arrived very late was still warmly welcomed — October 2026.', source: R + 'B537167491/' },
      ],
      japanese_sources_summary: '公式サイト (kyo-yokoi.com): よこい、店主 横井裕史 (Yokoi Yushi)、18歳から高台寺和久傳グループの店舗にて12年間研鑽、32歳で二条やま岸料理長、36歳で京都烏丸五条にて独立、ミシュランガイド2023から掲載継続、ミシュランガイド京都・大阪2026で1つ星、昼 12:00〜15:00 (水・木・土・日)、夜 18:00〜22:00 (入店は18時か19時)、月曜定休、おもたせ (鯖寿司、きんぴら鮭弁当、湯葉ちりめん山椒)、下京区万寿寺中之町88、タクシーでは「高倉万寿寺」。食べログ: 日本料理、五条駅1番出口から徒歩5分、14席 (カウンター10、個室4)、個室料1人2,200円、2026年12月1日からサービス料10%、スマートカジュアル、靴を脱いで入店、大人と同じコースを食べられる子どものみ、カード可、禁煙、2023年12月1日オープン、築180年の京町家、横井裕史シェフ。口コミ (2026年6〜10月、英語): 蓮の葉のトマトのジュレ、帆立と甘海老と桃のジュレとキャビア、鮑の天ぷら、鱧、鮎、ランチ1万5千〜1万7千円、女性の店主と料理長。',
      confidence: 'medium', sources: [TB, SITE, R + 'B499912637/', R + 'B531367468/', R + 'B531451896/', R + 'B531453326/', R + 'B531533820/', R + 'B533261305/', R + 'B535145415/', R + 'B536151483/', R + 'B536534834/', R + 'B537167491/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; shoes off; smart casual; tell the taxi 高倉万寿寺.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区万寿寺中之町88',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026; Michelin one star 2026 (official site).' },
    pin_source: `Tabelog ${TB} (34.997587, 135.762343); cross-checked: GSI 京都府京都市下京区万寿寺中之町88番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533261305/', SITE],
    price_note: 'No price list read; a July 2026 reviewer paid ¥17,000 for lunch with one highball; takeaway items from the official site, unpriced.', last_checked: TODAY, items: [
      it('', '', 'Lunch kaiseki course', '', 'Courses', 'ask', 'no', 'About ¥15,000–17,000 (2026 reviews).', 'lunch_course'),
      it('', '', 'Dinner kaiseki course', '', 'Courses', 'ask', 'no', '18:00 or 19:00 start.', 'dinner_course'),
      it('鯖寿司', '', 'Saba-zushi (takeaway)', '', 'Omotase', 'ask', 'no', '', 'saba_zushi'),
    ] }, {
    cuisine: '築180年の京町家を改装した店の京料理のコース (食べログ、公式サイト)・昼のコース1万5千〜1万7千円ほど、夜は飲み物込みで3万円ほど (2026年の口コミ)・2026年夏の口コミに出る料理: 蓮の葉にのせたトマトのジュレ、昆布〆の帆立と甘海老に桃のジュレとキャビア、肝のソースの鮑の天ぷら、塩ポン酢と梅の鱧の焼き物、鮎のお椀、からすみ、すっぽん、手巻き寿司・全国の日本酒・持ち帰りのおもたせ: 鯖寿司、きんぴら鮭弁当、湯葉ちりめん山椒 (公式サイト)',
    neighborhood: '四条の南、高倉万寿寺。五条駅から徒歩5分',
    gf_detail: '予約時に要確認。出汁を土台にした京都の会席で、天ぷらや醤油のたれも出る。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、貝、出汁の会席コース (2026年の口コミ)。',
    notes: '[会席・高倉万寿寺、築180年の町家でミシュラン一つ星] 四条の南の築180年の町家を改装した14席の割烹で、2023年開店。高台寺和久傳グループで12年修業し二条やま岸の料理長を務めた料理人の店で、ミシュランガイド2026で一つ星。カウンターで季節の京料理のコースを。昼は1万5千〜1万7千円ほど、夜は飲み物込みで3万円ほど。靴を脱いで上がり、スマートカジュアルで。月曜休み。',
  });
}

save();
