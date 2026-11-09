// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 85 (2026-11-08).
//   + お好み焼き 鉄板焼き ひのき Okonomiyaki Teppanyaki Hinoki (Shijo-Karasuma, open to 3 a.m.; rest)
//   + いぶし鳥 一香 Ibushi Dori Ichika (smoked-chicken machiya near City Hall; rest)
//   + SUETOMI AoQ Cafe Stand (takeaway coffee and anko stand of the 1893 wagashi house 末富; rest)
//   + てんご Tengo (izakaya with Tango-region heshiko, Gojo-Higashinotoin; rest)
//   + 六角キッチン 109 Rokkaku Kitchen 109 (machiya set-meal kitchen, Karasuma-Rokkaku; rest)
//   Rest list (mod 6 = 1) after batch 84, nearest-first — skipped:
//   - 晴鴨楼 26005033: no review dated 2025–26 (latest December 2024); a ryokan whose dining is mostly for staying guests.
//   Brand check: queue-status.jsonl and than.co.jp/brands (read 2026-11-08) checked for every brand — none of the five is a
//   THAN brand. ひのき was formerly 鉄板Dining祇園 翔 四条烏丸店; its sister 鉄板ダイニング祇園 翔 縄手店 (gurunavi) is not in data
//   — two shops, not a chain. 一香 is run by エイムインターセクション株式会社 (invoice T4180301032027, NTA register: a Kyoto company,
//   one shop found). SUETOMI AoQ is a new brand produced by 末富 (aoq.jp/concept); 末富 is not in data. 六角キッチン's site also
//   lists ろじうさぎ (mp_roji_usagi, already in data) — a local sister concept. None of the five is in data (main be686d24,
//   hidden records included) by name and address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-85');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26005033/', 'no review dated 2025–26 (latest December 2024): 晴鴨楼 is a ryokan whose meals are mostly for staying guests');

// ================================================================ お好み焼き 鉄板焼き ひのき Okonomiyaki Teppanyaki Hinoki
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029453/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '27:00']);
  put({
    id: 'kyoto_okonomiyaki_hinoki', name: 'お好み焼き 鉄板焼き ひのき (Okonomiyaki Teppanyaki Hinoki)', category: 'OMNI',
    lat: 35.00475310641562, lng: 135.75817750409445, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat-batter okonomiyaki, monjayaki and yakisoba on shared griddles (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork okonomiyaki, seafood and meat teppanyaki (2025–2026 reviews).',
    hours_raw: 'Daily 17:30–3:00 (last order 2:00); closing days not fixed (Tabelog). A 10% late-night charge is added for guests arriving after 22:00 (Tabelog, English translation; no Japanese original shown). Reservations accepted; courses with 120-minute all-you-can-drink for 4–30 people (Tabelog). Busy on Fridays and weekends — book (April–September 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 35 seats, counter and tables, private rooms for 2 or 4 (Tabelog); the counter seats have no griddle (September 2025). Designated smoking area (Tabelog). Renamed from an earlier teppan-dining name; opened 21 July 2017 (Tabelog). 3 min walk from Karasuma or Shijo Stn.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, Muromachi-Nishiki',
    cuisine: 'Okonomiyaki and teppanyaki izakaya in a log-cabin-style room (Tabelog; 2025–2026 reviews) · pork okonomiyaki (butatama) ¥1,100, crisp outside and fluffy inside; negiyaki; yakisoba incl. mentaiko-butter; monjayaki with toppings such as spring onion, cheese and beef tendon (October 2025–October 2026) · grilled dried squid, garlic-grilled octopus, fried rice (October 2026) · courses with all-you-can-drink ¥5,400–6,400 (Tabelog) · about ¥3,000–4,000 a head (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('お好み焼き 鉄板焼き ひのき 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Okonomiyaki · Shijo-Karasuma, open to 3 a.m.] A warm, wood-lined okonomiyaki and teppan izakaya: pork okonomiyaki, mentaiko-butter yakisoba, monjayaki and a long list of drinking snacks, open until 3 a.m. for late nights. Ask for a table — the counter has no griddle. 10% late-night charge after 22:00.',
    chef_bio: { chef_name: null, roles: ['Manager (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: opened 21 July 2017 under an earlier teppan-dining name and since renamed ひのき; a sake-loving manager picks the drinking-course dishes (Tabelog). Reviewers in 2025–2026 describe a late-night favourite for after-work drinks and second rounds.',
      philosophy: null, specialty: 'Pork okonomiyaki; monjayaki.',
      anecdotes: [
        { text: 'An October 2025 group of students from Kanto, stuck for a second bar on a Sunday night, found it open and loved the carefully cooked monjayaki.', source: R + 'B515716973/' },
        { text: 'A September 2026 reunion of friends found it packed even with a booking, and singled out the mentaiko-butter yakisoba.', source: R + 'B536368377/' },
        { text: 'A solo September 2025 diner booked a table online, was moved to the counter, and found it had no griddle.', source: R + 'B514514911/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・鉄板焼き・お好み焼き、中京区室町通錦下ル菊水鉾町569、阪急烏丸駅24番出口から徒歩3分、毎日 17:30〜翌3:00 (L.O.2:00)、不定休、22時以降の来店は深夜料金10% (英訳のみ)、予約可、飲み放題付きコース5,400〜6,400円 (4〜30名)、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、35席、個室 (2名・4名)、分煙、2017年7月21日開店、旧店名あり。口コミ (2025年9月〜2026年10月、英語): 木のぬくもりの店内、豚玉1,100円、ねぎ焼き、明太バター焼きそば、もんじゃ焼き、あぶったスルメ、たこのガーリック焼き、焼き飯、夜遅くまで開いて二次会に便利、カウンター席には鉄板がない (2025年9月)。',
      confidence: 'medium', sources: [TB, R + 'B514514911/', R + 'B515716973/', R + 'B517089515/', R + 'B519721427/', R + 'B526823708/', R + 'B532984712/', R + 'B533952375/', R + 'B536368377/', R + 'B537344786/', R + 'B538073989/'] },
    cultural_comfort: { level: 'konnichiwa', note: '10% late-night charge after 22:00; ask for a griddle table; smoking area.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区室町通錦下ル菊水鉾町569',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004753, 135.758178); cross-checked: GSI 京都府京都市中京区菊水鉾町569番地 (lot) 37 m; nearest existing record 25.4 m (kyr_no_ko_kyo_tori_paitan_ra); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517089515/', TB],
    price_note: 'Prices from an October 2025 review and the Tabelog course list.', last_checked: TODAY, items: [
      it('', '', 'Pork okonomiyaki (butatama)', '¥1,100', 'Okonomiyaki', 'no', 'no', 'October 2025.', 'butatama'),
      it('', '', 'Classic Hinoki course, 11 dishes, 120 min all-you-can-drink', '¥5,900', 'Courses', 'no', 'no', 'Tabelog; 4–30 people.', 'course'),
    ] }, {
    cuisine: 'ログハウス風の店のお好み焼きと鉄板焼きの居酒屋 (食べログ、2025〜2026年の口コミ)・外はカリッと中はふんわりの豚玉1,100円、ねぎ焼き、明太バターなどの焼きそば、ねぎ・チーズ・牛すじなどのもんじゃ焼き (2025年10月〜2026年10月)・あぶったスルメ、たこのガーリック焼き、焼き飯 (2026年10月)・飲み放題付きコース5,400〜6,400円 (食べログ)・1人3,000〜4,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '四条烏丸、室町錦',
    gf_detail: 'グルテンフリー不可。小麦の生地のお好み焼き、もんじゃ焼き、焼きそばを共用の鉄板で (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚玉、魚介と肉の鉄板焼き (2025〜2026年の口コミ)。',
    notes: '[お好み焼き・四条烏丸、深夜3時まで] 木のぬくもりのお好み焼きと鉄板の居酒屋。豚玉、明太バター焼きそば、もんじゃ焼きに酒のつまみも多く、深夜3時まで。鉄板のあるテーブル席がおすすめ。22時以降は深夜料金10%。',
  });
}

// ================================================================ いぶし鳥 一香 Ibushi Dori Ichika
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042137/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_ibushidori_ichika', name: 'いぶし鳥 一香 (Ibushi Dori Ichika)', category: 'OMNI',
    lat: 35.01225537786716, lng: 135.76683347043075, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Smoked chicken is made with natural seasonings (Tabelog) and salt yakitori may suit, but kara-age, oyakodon and the noodle finishes involve wheat or soy (2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken specialist (Tabelog; 2026 reviews).',
    hours_raw: 'Daily including holidays 11:00–15:00 (last order 14:30) and 17:00–22:00 (last orders food 21:00, drinks 21:30); closing days not fixed; closed over the New Year holidays (Tabelog). Reservations accepted; full on holidays (September 2026). No service charge (Tabelog original なし). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and QR (PayPay, d Barai, Rakuten Pay, Alipay, WeChat Pay); no e-money (Tabelog). 35 seats: 11 at the counter and three tables on 1F, four tables on 2F (Tabelog). Non-smoking; wheelchair accessible; free Wi-Fi; take-out; menus in English, Chinese and Korean (Tabelog). Lunch can be slow with one server (October 2026). 5 min walk from Kyoto Shiyakusho-mae Stn. Opened 14 December 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Kyoto City Hall, Yamamoto-cho',
    cuisine: 'Smoked chicken (ibushi dori) and yakitori in a Kyoto machiya: whole domestic chickens smoked over cherry wood, rice of Tanba Koshihikari from a hagama pot (Tabelog) · lunch: signature ibushi dori jyu, Kyoto Akajidori bowl ¥2,400 (extra meat ¥800), salt kara-age set about ¥1,500, limited jidori bento (October 2026) · evening: yakitori such as thigh with salt and neck, tataki, yodare chicken, garlic tomato, dashimaki, chicken wonton soup; oyakodon or smoked-chicken soba to finish (September–October 2026) · lunch about ¥1,000–2,000, dinner about ¥3,000–5,000 (Tabelog)',
    website: null, gmaps: gm('いぶし鳥 一香 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Smoked chicken and yakitori · near City Hall] A machiya with a lofty ceiling serving cherry-wood-smoked chicken: smoked-chicken rice boxes and bowls at lunch, and yakitori, garlic tomato and a smoked-chicken soba or oyakodon to finish at night. English menu, no service charge, non-smoking.',
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: opened 14 December 2024 by エイムインターセクション株式会社 (NTA invoice register), smoking whole domestic chickens with cherry wood and Nambu ironware and natural seasonings, in a space recreating a Kyoto machiya. Reviewers in 2026 describe regulars who return monthly and chefs cooking in front of the counter.',
      philosophy: 'Bring out the ingredients’ own flavour with traditional smoking and natural seasonings (Tabelog).', specialty: 'Smoked-chicken rice box; yakitori.',
      anecdotes: [
        { text: 'A September 2026 holiday lunch guest booked the opening slot and watched walk-ins turned away as the room filled; extra meat and an egg were worth it.', source: R + 'B536662583/' },
        { text: 'A monthly regular (September and October 2026) never misses the garlic tomato, ramen finish and oyakodon.', source: R + 'B531934402/' },
        { text: 'An October 2026 business traveller found the Kyoto Akajidori bowl dry and pricey at over ¥3,200 with extras, while locals ordered the salt kara-age set.', source: R + 'B538165930/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・焼き鳥・鶏料理、中京区山本町410、市役所前駅から徒歩5分、毎日 (祝日も) 11:00〜15:00 (L.O.14:30)、17:00〜22:00 (L.O.料理21:00、飲み物21:30)、不定休・年末年始休み、予約可、サービス料なし、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・QR (PayPay・d払い・楽天ペイ・Alipay・WeChat Pay) 可、電子マネー不可、35席 (1階カウンター11席とテーブル3卓、2階テーブル4卓)、禁煙、車いす可、Wi-Fi、テイクアウト、英中韓のメニュー、2024年12月14日開店。インボイス登録はエイムインターセクション株式会社 (国税庁)。紹介文 (英訳): 国産の丸鶏を桜の木で燻し、天然の調味料で、丹波のコシヒカリを羽釜で炊く、京町家風の店内。口コミ (2026年9〜10月、英語): いぶし鳥の重、Kyoto Akajidori の丼2,400円、塩唐揚げ定食1,500円ほど、もも塩、ネック、九条ねぎ、たたき、よだれ鶏、にんにくトマト、だし巻き、鶏ワンタンスープ、しめの親子丼やそば、毎月通う常連、昼は一人で給仕で遅めとの声。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4180301032027', R + 'B531934402/', R + 'B536469669/', R + 'B536662583/', R + 'B537313584/', R + 'B537328337/', R + 'B537393115/', R + 'B537744904/', R + 'B538165930/', R + 'B538405409/', R + 'B538500183/'] },
    cultural_comfort: { level: 'english', note: 'English menu; no service charge; non-smoking; book for holidays.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区山本町410',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012255, 135.766833); cross-checked: GSI 京都府京都市中京区山本町410番地 (lot) 72 m; nearest existing record 22.9 m (kyoto_tokumaru); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538165930/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kyoto Akajidori chicken bowl (lunch)', '¥2,400', 'Lunch', 'ask', 'no', 'Extra meat ¥800; October 2026.', 'akajidori'),
      it('', '', 'Salt kara-age set (lunch)', '¥1,500', 'Lunch', 'no', 'no', 'About; October 2026.', 'karaage'),
    ] }, {
    cuisine: '京町家風の店のいぶし鳥と焼き鳥: 国産の丸鶏を桜の木で燻し、丹波のコシヒカリを羽釜で炊く (食べログ)・昼はいぶし鳥の重、Kyoto Akajidori の丼2,400円 (肉増し800円)、塩唐揚げ定食1,500円ほど、数量限定の地鶏の弁当 (2026年10月)・夜はもも塩やネックなどの焼き鳥、たたき、よだれ鶏、にんにくトマト、だし巻き、鶏ワンタンスープ、しめに親子丼やいぶし鳥のそば (2026年9〜10月)・昼1,000〜2,000円ほど、夜3,000〜5,000円ほど (食べログ)',
    neighborhood: '市役所の近く、山本町',
    gf_detail: '要確認。いぶし鳥は天然の調味料 (食べログ)、塩の焼き鳥は合う可能性があるが、唐揚げ、親子丼、しめの麺は小麦や醤油 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鶏料理の専門店 (食べログ、2026年の口コミ)。',
    notes: '[いぶし鳥と焼き鳥・市役所の近く] 吹き抜けの京町家風の店で桜の木で燻した鶏。昼はいぶし鳥の重や丼、夜は焼き鳥やにんにくトマト、しめにいぶし鳥のそばや親子丼。英語のメニューあり、サービス料なし、禁煙。',
  });
}

// ================================================================ SUETOMI AoQ Cafe Stand
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039449/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://aoq.jp/'; const NEWS = 'https://aoq.jp/news/220/'; const CONCEPT = 'https://aoq.jp/concept/';
  const H = day(['08:00', '17:00']);
  put({
    id: 'kyoto_suetomi_aoq_cafe_stand', name: 'SUETOMI AoQ Cafe Stand', category: 'OMNI',
    lat: 34.9989142278733, lng: 135.75949098030114, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee, matcha and the anko café au lait may suit; bread, the casse-croûte and financiers contain wheat, and the anko-kohaku vanilla comes with wheat crackers (2025–2026 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee, matcha and red-bean anko may be plant-based, but the signature drinks use milk and the sandwich has ham and cheese; no plant milk mentioned (2025–2026 reviews).',
    hours_raw: 'Daily 8:00–17:00 (Tabelog; hours may change). The 2023 opening notice gave 11:00–18:00 with no closing day (aoq.jp, 9 May 2023), so check before an early visit. Takeaway only — order at a small window; a bench beside the stand (Tabelog; 2025–2026 reviews). Cashless only (Tabelog original キャッシュレス決済のみ): cards (VISA, Master, JCB), e-money, PayPay. One person makes each drink by hand, so expect a short wait (March 2026). By Karasuma-Matsubara, next to a hotel; opened 10 May 2023 (aoq.jp; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Matsubara',
    cuisine: 'Takeaway coffee and anko stand of SUETOMI AoQ, the new brand produced by the 1893 Kyoto confectioner 末富 (aoq.jp) · 「あんカフェオレ」 anko café au lait (iced ¥650) and 「あんカスクート」 sandwich of prosciutto, cheese and anko, made with plenty of 末富 anko (aoq.jp; 2025–2026 reviews) · hand-dripped coffee of Sarutahiko beans, café latte, warm matcha (2025–2026 reviews) · anko-kohaku vanilla ice ¥700, anshio bread ¥400, financier ¥378 (2025–2026 reviews) · under ¥1,000 (Tabelog)',
    website: NEWS, gmaps: gm('SUETOMI AoQ Cafe Stand'), menu_url: null,
    notes: '[Takeaway coffee and anko · Karasuma-Matsubara] A tiny cashless stand of the old wagashi house 末富’s AoQ brand: anko café au lait with red bean settled at the bottom, hand-dripped coffee, matcha, and anko-and-prosciutto casse-croûte. Takeaway only, with a bench outside.',
    chef_bio: { chef_name: null, roles: ['Barista (unnamed)'], origin: null,
      background: 'Per aoq.jp: AoQ (青久) is a new brand produced by the Kyoto confectioner 末富, founded 1893, bringing tea-time sweets to more people with new ingredients and techniques; the Cafe Stand opened 10 May 2023 as its first takeaway café, serving drinks and sandwiches made with 末富 anko that are only available here. A coffee blend made with Sarutahiko Coffee went on sale in November 2025 (aoq.jp).',
      philosophy: 'Carry on tradition while adding new ingredients and techniques (aoq.jp).', specialty: 'Anko café au lait.',
      anecdotes: [
        { text: 'A February 2025 visitor came for the anko café au lait featured on Kansai TV, and scooped the settled red bean from the bottom like sweet bean soup.', source: R + 'B502103439/' },
        { text: 'A three-time visitor in June 2026 tried the prosciutto-and-anko bread and found the salty-sweet pairing exquisite.', source: R + 'B513611248/' },
        { text: 'A March 2026 hotel guest next door found a stand about one tatami mat in size, run by one person.', source: R + 'B524981955/' },
      ],
      japanese_sources_summary: '食べログ: コーヒースタンド、下京区松原通東入玉津島町319、毎日 8:00〜17:00、予約不可、キャッシュレス決済のみ (カード VISA・Master・JCB、電子マネー、PayPay)、テイクアウトのカフェ、2023年5月10日開店。aoq.jp: 「AoQ（青久）は、1893年創業の京菓子司「末富」がプロデュースする新ブランドです。」、2023年5月10日にテイクアウト専門カフェ「SUETOMI AoQ Cafe Stand」をオープン、末富のあんこをたっぷり使った「あんカフェオレ」や「あんカスクート」、開店時の営業時間は11時〜18時・定休日なし、2025年11月に猿田彦珈琲とのコラボ商品。口コミ (2025年2月〜2026年6月、英語): あんカフェオレ (アイス650円)、あん琥珀バニラ700円、あん塩パン400円、フィナンシェ378円、生ハムとチーズのカスクート、ハンドドリップのコーヒー、温かい抹茶、ベンチあり、一人で営業。',
      confidence: 'medium', sources: [TB, NEWS, CONCEPT, WEB, 'https://aoq.jp/access/', R + 'B494094932/', R + 'B502103439/', R + 'B508468215/', R + 'B509622653/', R + 'B513611248/', R + 'B514859611/', R + 'B520173808/', R + 'B523622286/', R + 'B524981955/', R + 'B528025895/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway only; cashless only; order at the window.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松原通東入玉津島町319',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and aoq.jp; reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (34.998914, 135.759491); cross-checked: GSI 京都府京都市下京区玉津島町319番地 (lot) 35 m; nearest existing record 49.7 m (kyoto_barchetta_matsubara); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508468215/', R + 'B494094932/', R + 'B523622286/'],
    price_note: 'Prices from June 2025, August 2025 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Anko café au lait (iced)', '¥650', 'Drinks', 'ask', 'no', 'June 2025.', 'ancafeaulait'),
      it('', '', 'Anko-kohaku vanilla', '¥700', 'Sweets', 'no', 'no', 'August 2025; with wheat crackers.', 'kohaku'),
      it('', '', 'Anshio bread', '¥400', 'Bakes', 'no', 'ask', 'March 2026.', 'anshio'),
      it('', '', 'Financier', '¥378', 'Bakes', 'no', 'no', 'March 2026.', 'financier'),
    ] }, {
    cuisine: '1893年創業の京菓子司「末富」がプロデュースする AoQ のテイクアウトのコーヒーとあんこのスタンド (aoq.jp)・末富のあんこをたっぷり使った「あんカフェオレ」(アイス650円) と生ハムとチーズの「あんカスクート」(aoq.jp、2025〜2026年の口コミ)・猿田彦珈琲の豆のハンドドリップ、カフェラテ、温かい抹茶 (2025〜2026年の口コミ)・あん琥珀バニラ700円、あん塩パン400円、フィナンシェ378円 (2025〜2026年の口コミ)・1,000円未満 (食べログ)',
    neighborhood: '烏丸松原',
    gf_detail: '要確認。コーヒー、抹茶、あんカフェオレは合う可能性があるが、パン、カスクート、フィナンシェは小麦、あん琥珀バニラには小麦の焼き菓子 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。ブラックコーヒー、抹茶、あんこは植物性の可能性があるが、看板の飲み物は牛乳、カスクートは生ハムとチーズ。植物性ミルクの記載はない (2025〜2026年の口コミ)。',
    notes: '[テイクアウトのコーヒーとあんこ・烏丸松原] 老舗の京菓子司「末富」の AoQ の小さなキャッシュレスのスタンド。底にあんこが沈むあんカフェオレ、ハンドドリップのコーヒー、抹茶、あんと生ハムのカスクート。テイクアウトのみ、外にベンチ。',
  });
}

// ================================================================ てんご Tengo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003515/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_tengo_gojo', name: 'てんご (Tengo)', category: 'OMNI',
    lat: 34.99695596787509, lng: 135.76122296028018, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled fish, heshiko and sashimi-style dishes may suit, but gyoza, fried dishes and ramen contain wheat and seasonings use soy (2017–2026 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Kyoto pickles, grilled yuba, tofu and vegetable obanzai appear, but dashi is likely and most dishes are fish or meat (2022–2026 reviews).',
    hours_raw: 'Monday–Saturday 18:00–22:00; closed Sunday; hours may change (Tabelog). Dinner only since the pandemic — lunch has stopped (September 2025). Reservations accepted; Tabelog remark (machine-translated): only one group a day is taken so guests need not worry about time — book early (Tabelog). All-you-can-drink available (September 2025). No cards; e-money accepted; no QR (Tabelog). 22 seats: six at the counter and four tables of four; smoking allowed (Tabelog). Children welcome (April 2025). Toukan Gojo-Karasuma Castell 1F; 2 min walk from Gojo Stn.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo-Higashinotoin',
    cuisine: 'Izakaya of seafood, Kyoto regional and creative dishes (Tabelog) · lightly pickled saba heshiko in the style of the Tango region; garlic-fried gizzard inspired by Shimizu Shoten, where the owner trained; hamachi kimchi (October 2026) · cured mackerel, salt-grilled kinmedai, grilled yuba, water dumplings, Kyoto obanzai and pickles, creative twists on classics, a few complimentary starters (2022–2025 reviews) · house-limited sake also named Tengo (October 2026) · about ¥3,000–6,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('てんご 五条 東洞院'), menu_url: null,
    notes: '[Izakaya · Gojo-Higashinotoin] A quiet, softly lit izakaya with a sake list: lightly cured saba heshiko from the Tango coast, garlicky fried gizzard, salt-grilled kinmedai, water dumplings and obanzai, at fair prices. Dinner only; book. No cards. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per reviewers: the owner trained at Shimizu Shoten (October 2026); a hideaway izakaya by Gojo station loved by locals and visitors since at least 2017, which once served lunch but has opened only for dinner since the pandemic (2017–2026 reviews).',
      philosophy: null, specialty: 'Lightly pickled saba heshiko.',
      anecdotes: [
        { text: 'An October 2026 guest tried the rare lightly pickled saba heshiko and the shop’s own limited sake, also named Tengo.', source: R + 'B538174621/' },
        { text: 'A family in April 2025 booked on the spot because children were welcome, and ordered shijimi-clam ramen first to keep the child happy.', source: R + 'B505462217/' },
        { text: 'A former lunchtime regular came back in September 2025 for a farewell party with all-you-can-drink.', source: R + 'B514516739/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮・郷土料理・創作料理、下京区東洞院通五条上ル深草町580 トーカン五条烏丸キャステール 1F、地下鉄五条駅から徒歩2分、月〜土 18:00〜22:00、日曜休み、予約可 (英訳の備考: 1日1組のみ、時間を気にせず、早めの予約を)、カード不可、電子マネー可、QR 不可、22席 (カウンター6席、4人掛け4卓)、喫煙可、貸切可、テイクアウト可。口コミ (2017年11月〜2026年10月、英語): 浅漬けの鯖のへしこ (丹後の郷土料理)、Shimizu Shoten で修業した店主の砂ずりのガーリック揚げ、はまちのキムチ、しめ鯖、金目鯛の塩焼き、湯葉焼き、水餃子、おばんざい、京漬物、しじみのラーメン、お通し3品、店のオリジナルの日本酒、昼はコロナ後にやめた (2025年9月)、子ども連れも可 (2025年4月)。',
      confidence: 'low', sources: [TB, R + 'B436690424/', R + 'B458310209/', R + 'B464260587/', R + 'B475201396/', R + 'B505462217/', R + 'B513473767/', R + 'B514516739/', R + 'B538174621/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Dinner only; book ahead; no cards (e-money OK); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区東洞院通五条上ル深草町580 トーカン五条烏丸キャステール 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.996956, 135.761223); cross-checked: GSI 京都府京都市下京区深草町580番地 (lot) 14 m; nearest existing record 37.1 m (kyoto_sakana_ryori_agiyao); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538174621/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Saba heshiko (lightly pickled)', '', 'Fish', 'ask', 'no', 'October 2026.', 'heshiko'),
      it('', '', 'Garlic-fried gizzard', '', 'Fried', 'no', 'no', 'October 2026.', 'sunazuri'),
    ] }, {
    cuisine: '海鮮・郷土料理・創作料理の居酒屋 (食べログ)・丹後風の浅漬けの鯖のへしこ、店主が修業した Shimizu Shoten に倣った砂ずりのガーリック揚げ、はまちのキムチ (2026年10月)・しめ鯖、金目鯛の塩焼き、湯葉焼き、水餃子、おばんざいと京漬物、定番をひねった創作料理、お通し3品 (2022〜2025年の口コミ)・店のオリジナルの日本酒 (2026年10月)・3,000〜6,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '五条東洞院',
    gf_detail: '要確認。焼き魚やへしこは合う可能性があるが、餃子、揚げ物、ラーメンは小麦、味付けに醤油 (2017〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。京漬物、湯葉焼き、豆腐や野菜のおばんざいもあるが、だしの可能性が高く、料理の多くは魚か肉 (2022〜2026年の口コミ)。',
    notes: '[居酒屋・五条東洞院] 日本酒のそろう落ち着いた灯りの居酒屋。丹後の浅漬けの鯖のへしこ、砂ずりのガーリック揚げ、金目鯛の塩焼き、水餃子、おばんざいを手ごろに。夜のみ、予約を。カード不可。喫煙可。日曜休み。',
  });
}

// ================================================================ 六角キッチン 109 Rokkaku Kitchen 109
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032777/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://6kaku-k.com/';
  const WD = day(['11:30', '15:00'], ['17:30', '21:00']); const WE = day(['08:00', '11:00'], ['11:30', '15:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_rokkaku_kitchen_109', name: '六角キッチン 109 (Rokkaku Kitchen 109)', category: 'OMNI',
    lat: 35.007379052688336, lng: 135.7588618291097, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled mackerel or saury sets may suit, but tonkatsu, kara-age, fried shrimp and hamburg steak are breaded or bound with wheat, and sides use soy (official site; 2026 reviews). No allergy information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fish set meals with miso soup and obanzai (official site; 2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30) and dinner 17:30–21:00 (last order 20:30), daily except Wednesday; breakfast 8:00–11:00 (last order 10:30) on Saturday and Sunday only, and on Monday when it is a public holiday (official site; Tabelog). Closed Wednesday. Reservations accepted; busy at lunch with walk-ins turned away and shared tables possible (September–October 2026). QR-code ordering (September 2026). Cards (JCB, AMEX per Tabelog), e-money and QR (Tabelog). Designated smoking area (Tabelog). A machiya with a small back garden; 5 min walk from Karasuma-Oike or Karasuma Stn. Opened 9 July 2019 (Tabelog).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Rokkaku',
    cuisine: 'Set-meal kitchen in a Kyoto machiya, with warm rice morning, noon and night (official site) · domestic tonkatsu set ¥1,850, kara-age set ¥1,580, grilled mackerel set ¥1,480 (official site); negi-oroshi hamburg steak ¥1,780 (September 2026) · the owner’s daily 「気がわり定食」 such as chicken tatsuta; monthly Japanese and Western lunches — grilled saury with dashi tofu and obanzai, or fried shrimp and hamburg steak (official site; July–October 2026) · weekend breakfast of grilled salted mackerel, rolled omelette, simmered vegetables and chirimen sansho (September–November 2026) · one free rice refill; about ¥1,000–2,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('六角キッチン109'), menu_url: WEB,
    notes: '[Set meals · Karasuma-Rokkaku] A renovated machiya with a little garden serving hearty teishoku — tonkatsu, hamburg steak, grilled mackerel and the daily special with obanzai and a free rice refill — plus a proper Japanese breakfast at weekends. Book for lunch. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Kitchen staff'], origin: null,
      background: 'Per the official site: a set-meal restaurant in a traditional Kyoto machiya, built on serving warm rice at any time of day, with a daily set chosen as the owner pleases; opened 9 July 2019 (Tabelog). The site also lists ろじうさぎ (mp_roji_usagi, in data).',
      philosophy: 'Warm rice to eat any time, morning, noon or night (official site).', specialty: 'Teishoku; weekend breakfast.',
      anecdotes: [
        { text: 'A Gion Matsuri visitor in July 2026, with floats being readied nearby, had the Haikara Rokkaku lunch of generous shrimp tempura and hamburg steak.', source: R + 'B532891029/' },
        { text: 'A September 2026 weekend breakfaster found a classic Japanese morning tray of salted mackerel and chirimen sansho.', source: R + 'B534975197/' },
        { text: 'An October 2026 lunch guest with a booking saw people without one turned away, and a queue on the way out.', source: R + 'B538414650/' },
      ],
      japanese_sources_summary: '公式サイト: 六角キッチン、「朝・昼・晩、あたたかいごはんがいつでも食べられることをコンセプトに」、「伝統的な京都の町家で、不易流行の空間と料理をお楽しみください。」、朝 8:00〜11:00 (L.O.10:30、土・日のみ、月曜が祝日の場合は営業)、昼 11:30〜15:00 (L.O.14:30)、晩 17:30〜21:00 (L.O.20:30)、水曜休み、国産とんかつ定食1,850円、唐揚げ定食1,580円、焼さば定食1,480円、「気がわり定食」。食べログ: 食堂・ハンバーグ・オムライス、中京区烏丸六角西入ル骨屋町150-2、予約可、カード (JCB・AMEX)・電子マネー・QR 可、分煙、2019年7月9日開店。口コミ (2026年7月〜11月、英語): 小さな庭のある町家、ねぎおろしハンバーグ1,780円、月替わりの和と洋の昼、さんまの塩焼き、だし豆腐、おばんざい、ご飯のおかわり1回無料、QR で注文、相席もある、週末の朝ごはん。',
      confidence: 'medium', sources: [TB, WEB, R + 'B532891029/', R + 'B534975197/', R + 'B535368839/', R + 'B535729157/', R + 'B536168204/', R + 'B536636347/', R + 'B537035210/', R + 'B537138482/', R + 'B538414650/', R + 'B538419850/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; book for lunch; shared tables possible.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏丸六角西入ル骨屋町150-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007379, 135.758862); cross-checked: GSI 京都府京都市中京区骨屋町150番地 (lot) 25 m; nearest existing record 123.8 m (kyoto_yama_mitsuwa); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB, R + 'B536168204/'],
    price_note: 'Prices from the official site and a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Domestic tonkatsu set', '¥1,850', 'Set meals', 'no', 'no', 'Official site.', 'tonkatsu'),
      it('', '', 'Kara-age set', '¥1,580', 'Set meals', 'no', 'no', 'Official site.', 'karaage'),
      it('', '', 'Grilled mackerel set', '¥1,480', 'Set meals', 'ask', 'no', 'Official site.', 'saba'),
      it('', '', 'Negi-oroshi hamburg steak set', '¥1,780', 'Set meals', 'no', 'no', 'September 2026.', 'hamburg'),
    ] }, {
    cuisine: '京町家の定食の店、朝昼晩あたたかいごはん (公式サイト)・国産とんかつ定食1,850円、唐揚げ定食1,580円、焼さば定食1,480円 (公式サイト)、ねぎおろしハンバーグ1,780円 (2026年9月)・店主の日替わり「気がわり定食」(鶏の竜田揚げなど)、月替わりの和と洋の昼 (さんまの塩焼きとだし豆腐とおばんざい、またはエビフライとハンバーグ) (公式サイト、2026年7〜10月)・週末の朝は塩さばの焼き魚、だし巻き、煮物、ちりめん山椒 (2026年9〜11月)・ご飯のおかわり1回無料、1,000〜2,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '烏丸六角',
    gf_detail: '要確認。焼きさばやさんまの定食は合う可能性があるが、とんかつ、唐揚げ、エビフライ、ハンバーグは小麦の衣やつなぎ、副菜に醤油 (公式サイト、2026年の口コミ)。アレルギーの情報はない。',
    vegan_detail: 'ヴィーガン不可。肉と魚の定食にみそ汁とおばんざい (公式サイト、2026年の口コミ)。',
    notes: '[定食・烏丸六角] 小さな庭のある町家の定食屋。とんかつ、ハンバーグ、焼きさば、日替わりの定食におばんざい、ご飯のおかわり1回無料。週末は和の朝ごはんも。昼は予約を。水曜休み。',
  });
}

save();
