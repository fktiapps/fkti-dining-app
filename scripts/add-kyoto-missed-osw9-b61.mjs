// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 61.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 祇園 キムタコ GION KIMUTAKO (takoyaki stand-bar with rice-flour batter, Gion)
//   - 無印良品 京都BAL — chain (MUJI)
//   + KOTOSHINA茶屋 KOTOSHINA Chaya (organic Japanese tea stand of the Kyoto skincare brand KOTOSHINA; since 2024)
//   - 京都天狼院 — chain (天狼院書店, a bookstore-café chain from Ikebukuro; about 10 shops by 2018)
//   + 光琳 Korin (Kyoto set lunches and courses on Miyagawacho)
//   + 焼肉 錦へんこつ Yakiniku Nishiki Henkotsu (wagyu yakiniku near Nishiki) — not related to mp_henkotsu (oden)
//   Same-name counts first (data and queue-status.jsonl): none, except へんこつ (mp_henkotsu, a 1946 beef-stew
//   oden shop — a different business); no earlier rulings.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: キムタコ 「1人につき1ドリンクオーダー必須（テイクアウト
//   の場合は免除）」; 光琳 「チャージ料200円」; 錦へんこつ 「サービス料・チャージ料なし」; KOTOSHINA茶屋 has no section.
//   Pins (checked against main b77d8936): キムタコ — GSI matched only the town 大和町; 光琳 — GSI matched only
//   宮川筋三丁目; both loc_precise false. No offsets.
//   Ruling applied: single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-61');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26028539', 'chain: 無印良品 (MUJI)');
skip('26028491', 'chain: 天狼院書店 bookstore cafés, from Ikebukuro (2013); about 10 shops by 2018 (sbbit.jp interview)');

// ================================================================ 祇園 キムタコ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034827/'; const R = TB + 'dtlrvwlst/';
  const KP = 'https://www.keihan.co.jp/k-press/gourmet/202409-gokuuma.php';
  const D = day(['15:00', '22:00']);
  put({
    id: 'kyoto_gion_kimutako', name: '祇園 キムタコ (GION KIMUTAKO)', category: 'OMNI',
    lat: 35.003005, lng: 135.77302, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The batter includes rice flour, but whether it is wheat-free is not stated; takosen uses a cracker (K PRESS; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki and whole baby octopus (K PRESS; 2025–26 reviews).',
    hours_raw: 'Daily 15:00–22:00, sometimes a little later; listed as closed Monday (Tuesday after a holiday) but "currently not fixed" (Tabelog). Bookings taken (Tabelog). One drink per person to eat in — Tabelog\'s Japanese original says 「1人につき1ドリンクオーダー必須（テイクアウトの場合は免除）」 (takeaway exempt). Cards, e-money and QR (Tabelog). 8 seats — 4 at the kitchen counter, 4 facing the wall — plus a few terrace seats; non-smoking inside, smoking area outside (Tabelog). On the 1F of ラオンイン祇園縄手, 2 min from Keihan Gion-Shijo Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo near Yamatooji — 2 min from Gion-Shijo Stn',
    cuisine: 'Takoyaki with a rice-flour batter, large and generous with tenkasu, and a whole baby octopus ("iidako") grilled in (K PRESS, September 2024); fluffy, creamy takoyaki, takoyaki with dashi sauce, takosen (2025–26 reviews); beer',
    website: null, gmaps: gm('祇園 キムタコ'), menu_url: null,
    notes: "[Takoyaki · Gion] A small takoyaki stand-bar near Gion-Shijo Station: big, fluffy takoyaki of rice-flour batter, a dashi version, takosen and whole baby octopus, with a beer at the counter or on the terrace. Under ¥1,000. One drink each to eat in.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Featured by Keihan\'s K PRESS (September 2024) for its rice-flour batter and whole-baby-octopus takoyaki.',
      philosophy: null, specialty: 'Rice-flour takoyaki; whole baby octopus.',
      anecdotes: [
        { text: 'A February 2025 visitor who thought it takeaway-only found you can eat in with one order each, and loved the fluffy, creamy rice-flour takoyaki.', source: R + 'B514209775/' },
        { text: 'Peckish five hours before dinner in December 2025, a stroller in Gion stopped for takoyaki with dashi sauce.', source: R + 'B518781534/' },
        { text: 'A September 2026 visitor on a second dinner had a nostalgic takosen.', source: R + 'B535571669/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 キムタコ、たこ焼き、東山区大和町16-1 ラオンイン祇園縄手 1F、京阪祇園四条駅から徒歩2分、毎日 15:00〜22:00 (少し延長あり)、月曜休み (祝日の場合は翌火曜) だが現在は不定、予約可、1人1ドリンク必須 (テイクアウトは免除)、カード・電子マネー・QR 可、8席 (キッチンカウンター4、壁向きカウンター4) とテラス、店内禁煙・店前に喫煙所。K PRESS (2024年9月): 米粉を配合した生地、天かす多めの大きなたこ焼き、名物のイイダコ一匹焼き。口コミ (2025年2月〜2026年9月、英語): ふわふわでとろとろのたこ焼き、だしのたこ焼き、たこせん、ビール。',
      confidence: 'low', sources: [TB, KP, R + 'B514209775/', R + 'B515796891/', R + 'B518781534/', R + 'B535571669/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and terrace; one drink each to eat in.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区大和町16-1 ラオンイン祇園縄手 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003005, 135.773020); GSI matched only the town 大和町 (centroid 20 m away), so not lot-checked; 8.2 m from kyoto_gion_obanzai_oribe; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [KP],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('', '', 'Rice-flour takoyaki', '', 'Takoyaki', 'ask', 'no', 'K PRESS; 2025 reviews.', 'takoyaki'),
      it('', '', 'Whole baby octopus (iidako) grilled', '', 'Takoyaki', 'ask', 'no', 'K PRESS (September 2024).', 'iidako'),
    ] }, {
    cuisine: '米粉を配合した生地の、天かす多めの大きなたこ焼きと名物のイイダコ一匹焼き (K PRESS、2024年9月)。ふわふわでとろとろのたこ焼き、だしのたこ焼き、たこせん (2025〜26年の口コミ)。ビール',
    neighborhood: '祇園、四条の南の大和大路の近く。祇園四条駅から徒歩2分',
    gf_detail: '要確認。生地に米粉を配合しているが、小麦を使わないかは不明。たこせんはせんべい (K PRESS、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。たこのたこ焼きとイイダコ (K PRESS、2025〜26年の口コミ)。',
    notes: '[たこ焼き・祇園] 祇園四条駅近くの小さなたこ焼きの立ち飲み。米粉の生地のふわふわで大きなたこ焼き、だしのたこ焼き、たこせん、イイダコ一匹焼きを、カウンターかテラスでビールと。千円以下。店内で食べるなら1人1ドリンク。',
  });
}

// ================================================================ KOTOSHINA茶屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26041673/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tea.kotoshina-kyoto.com/teastand/'; const LEAF = 'https://www.leafkyoto.net/en/store/241118-kyoto-kotoshina/';
  const D = day(['11:00', '20:00']);
  put({
    id: 'kyoto_kotoshina_chaya_bal', name: 'KOTOSHINA茶屋 (KOTOSHINA Chaya)', category: 'OMNI',
    lat: 35.006954, lng: 135.769433, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teas and lattes are likely wheat-free, but sweets and gelato are not described (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Organic teas sweetened with agave syrup; whether plant milk is offered for lattes is not stated (2025–26 reviews).',
    hours_raw: 'Daily 11:00–20:00 (last order 19:45); hours may change (Tabelog). No bookings (Tabelog). About four seats inside plus a terrace; takeaway (March, July and August 2026 reviews). On the 1F of Kyoto BAL on Kawaramachi, near the entrance (Tabelog; rurubu).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi, Kyoto BAL 1F — south of Sanjo',
    cuisine: 'Organic Japanese tea stand (rurubu; Leaf Kyoto; 2025–26 reviews): Uji matcha latte ¥880 and Japanese chestnut azuki-tea latte ¥880 (November 2025), hojicha latte, Japanese black-tea latte, kuromitsu-kinako matcha latte, seasonal strawberry matcha latte with wagashi (March 2026), blueberry hojicha latte, sencha brewed up to three times, tea sodas, brown-rice-tea gelato; sweetness adjusted with agave syrup',
    website: SITE, gmaps: gm('KOTOSHINA茶屋 京都BAL'), menu_url: null,
    notes: "[Organic tea stand · Kyoto BAL] A small tea stand on the ground floor of Kyoto BAL from a Kyoto organic skincare brand, using tea from its own organic garden: freshly whisked matcha latte, hojicha and chestnut-azuki lattes (about ¥880), sencha and tea sodas, sweetened to taste with agave. Open daily 11:00–20:00.",
    chef_bio: { chef_name: null, roles: ['Tea stand of KOTOSHINA (no person named)'], origin: null,
      background: 'Opened 13 July 2024 (Tabelog) by the Kyoto organic skincare brand KOTOSHINA, launched in 2012 (rurubu; Leaf Kyoto). Tea comes from the brand\'s own organic JAS-certified garden in Wazuka (rurubu); a March 2026 reviewer names the garden as Nagata Tea Garden in Uji-Tawara.',
      philosophy: null, specialty: 'Matcha latte.',
      anecdotes: [
        { text: 'A November 2025 visitor watched the staff\'s practised movements while having a matcha latte and a chestnut azuki-tea latte on the warm terrace.', source: R + 'B518835421/' },
        { text: 'A March 2026 visitor found the organic sencha refined, perhaps too much so, over three brews.', source: R + 'B523967050/' },
        { text: 'An August 2026 regular switched from the hojicha latte to the matcha latte and loved its aroma, sweetened with agave.', source: R + 'B532843534/' },
      ],
      japanese_sources_summary: '食べログ: KOTOSHINA茶屋、ティースタンド、中京区河原町通三条下ル2-山崎町251 京都BAL 1F、毎日 11:00〜20:00 (L.O. 19:45)、予約不可、2024年7月13日オープン。るるぶ: 京都のオーガニックスキンケアブランド KOTOSHINA のティースタンド、和束町の自社の有機 JAS の茶畑。Leaf Kyoto (英語): 2012年に始まったブランド。口コミ (2025年10月〜2026年8月、英語): 宇治抹茶ラテ880円、和栗のあずき茶ラテ880円、ほうじ茶ラテ、和紅茶ラテ、黒蜜きなこ抹茶ラテ、いちごと和菓子の限定抹茶ラテ、ブルーベリーほうじ茶ラテ、三煎まで楽しめる煎茶、ソーダ、玄米茶のジェラート、アガベシロップで甘さを調整、店内4席とテラス、Uji-Tawara の茶園の名を挙げる声も。',
      confidence: 'medium', sources: [TB, SITE, LEAF, 'https://rurubu.jp/andmore/article/22383', R + 'B515698583/', R + 'B518835421/', R + 'B519762673/', R + 'B523967050/', R + 'B524235663/', R + 'B527757692/', R + 'B528648272/', R + 'B532843534/', R + 'B532999472/', R + 'B534590312/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order at the counter; takeaway.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条下ル2-山崎町251 京都BAL 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006954, 135.769433); cross-checked: GSI 京都府京都市中京区山崎町251番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518835421/'],
    price_note: 'Prices from a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Kyoto Uji matcha latte', '¥880', 'Drinks', 'ask', 'ask', 'November 2025 review.', 'matcha_latte'),
      it('', '', 'Japanese chestnut azuki-tea latte', '¥880', 'Drinks', 'ask', 'ask', 'November 2025 review.', 'azuki_latte'),
    ] }, {
    cuisine: 'オーガニックの日本茶のスタンド (るるぶ、Leaf Kyoto、2025〜26年の口コミ): 宇治抹茶ラテ880円と和栗のあずき茶ラテ880円 (2025年11月)、ほうじ茶ラテ、和紅茶ラテ、黒蜜きなこ抹茶ラテ、いちごと和菓子の季節の抹茶ラテ (2026年3月)、ブルーベリーほうじ茶ラテ、三煎まで楽しめる煎茶、お茶のソーダ、玄米茶のジェラート。アガベシロップで甘さを調整',
    neighborhood: '河原町、京都BAL 1F。三条の南',
    gf_detail: '要確認。お茶とラテは小麦を使わないと思われるが、甘味やジェラートの説明はない (2025〜26年の口コミ)。',
    vegan_detail: '要確認。アガベシロップで甘くするオーガニックのお茶。ラテに植物性ミルクを選べるかは不明 (2025〜26年の口コミ)。',
    notes: '[オーガニックの日本茶・京都BAL] 京都のオーガニックスキンケアブランドの、京都BAL 1F の小さなティースタンド。自社の有機の茶畑の茶で、点てたての抹茶ラテ、ほうじ茶や和栗あずきのラテ (880円ほど)、煎茶、お茶のソーダ。甘さはアガベで調整。毎日11〜20時。',
  });
}

// ================================================================ 光琳
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000963/'; const R = TB + 'dtlrvwlst/';
  const T = day(['17:00', '22:00']); const L = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_korin_miyagawacho', name: '光琳 (Korin)', category: 'OMNI',
    lat: 35.000497, lng: 135.771206, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and grilled fish, but tempura, nama-fu skewers and soy-seasoned sides feature (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, tempura, ginger pork and dashi-based sides (2025–26 reviews).',
    hours_raw: 'Tue 17:00–22:00; Wed–Sat 11:30–14:00 and 17:00–22:00 (last entry 21:00); closed Sunday and Monday (Tabelog). Bookings taken; lunch queues from opening, with numbered tickets (Tabelog; January and June 2025 reviews). Table charge: Tabelog\'s Japanese original says 「チャージ料200円」 (¥200). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 35 seats: a counter of 5, raised tatami with sunken seating, and a private room for 4–10 (Tabelog). On stone-paved Miyagawacho, 5 min from Keihan Gion-Shijo Stn exit 1 (Tabelog; 2025–26 reviews).',
    hours: { 1: T, 2: L, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Miyagawacho, south of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Kyoto set lunches and izakaya courses (2025–26 reviews): over ten lunch sets, the Korin lunch of sashimi on ice and tempura (shrimp or hamo) with koya-tofu and kinpira ¥1,300, ginger pork set; an elegant dashi soup; evening courses of sesame tofu, nama-fu skewers, sashimi, tempura, grilled fish and seasonal dishes, about ¥6,000 with all-you-can-drink (March 2025)',
    website: null, gmaps: gm('光琳 宮川町'), menu_url: TB + 'dtlmenu/',
    notes: "[Kyoto set meals · Miyagawacho] A friendly Kyoto restaurant on stone-paved Miyagawacho with a queue at lunch for its ¥1,300 sashimi-and-tempura set and ten-odd others, and evening courses of sesame tofu, nama-fu, sashimi and tempura around ¥6,000 with drinks. ¥200 charge; closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A Miyagawacho restaurant; a November 2025 business-dinner guest was impressed by the owner\'s stories.',
      philosophy: null, specialty: 'Sashimi and tempura lunch.',
      anecdotes: [
        { text: 'A June 2025 visitor, in Kyoto for the birthday of a geisha the visitor supports, arrived at 11:30 opening to find three people already waiting.', source: R + 'B507916285/' },
        { text: 'A December 2025 regular arrived before opening and found the ginger pork portion almost too generous.', source: R + 'B471868771/' },
        { text: 'Booking ahead for cherry-blossom season in April 2026, a returning guest had the dashi soup, kinpira and big shrimp tempura again.', source: R + 'B525511448/' },
      ],
      japanese_sources_summary: '食べログ: 光琳、日本料理、東山区宮川筋3丁目285、京阪四条駅1番出口から徒歩5分、火 17:00〜22:00、水〜土 11:30〜14:00・17:00〜22:00 (最終入店21:00)、日月休み、予約可、チャージ料200円、カード可、電子マネー・QR 不可、35席 (カウンター5、掘りごたつの小上がり、4〜10名の個室)。口コミ (2025年1月〜2026年4月、英語): 宮川町の石畳、昼は開店前から行列と整理券、10種以上の昼の定食、刺身と天ぷら (海老か鱧) の光琳ランチ1,300円、高野豆腐ときんぴら、生姜焼き定食、上品なだしの吸い物、夜のコース (胡麻豆腐、麩の串、刺身、天ぷら、焼き魚、季節の料理)、飲み放題付きで約6,000円、店主の話。',
      confidence: 'medium', sources: [TB, R + 'B471868771/', R + 'B499909161/', R + 'B503476583/', R + 'B507916285/', R + 'B508285354/', R + 'B508671482/', R + 'B509447408/', R + 'B518163087/', R + 'B525511448/', R + 'B532071768/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch queue with numbered tickets.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区宮川筋3丁目285',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.000497, 135.771206); GSI matched only 宮川筋三丁目 (block centroid 39 m away), so not lot-checked; the point is on Miyagawacho as the address says; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508285354/', R + 'B503476583/'],
    price_note: 'Prices from June 2025 and March 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Korin lunch: sashimi and tempura set', '¥1,300', 'Lunch', 'no', 'no', 'June 2025 and February 2026 reviews.', 'korin_lunch'),
      it('', '', 'Course with all-you-can-drink', '¥6,000', 'Dinner', 'ask', 'no', 'March 2025 review.', 'course'),
    ] }, {
    cuisine: '京都の昼の定食と夜のコース (2025〜26年の口コミ): 10種以上の昼の定食、氷にのせた刺身と天ぷら (海老か鱧)、高野豆腐、きんぴらの光琳ランチ1,300円、生姜焼き定食。上品なだしの吸い物。夜は胡麻豆腐、麩の串、刺身、天ぷら、焼き魚、季節の料理のコースで、飲み放題付き約6,000円 (2025年3月)',
    neighborhood: '宮川町、四条の南。祇園四条駅から徒歩5分',
    gf_detail: '要確認。刺身や焼き魚もあるが、天ぷら、生麩の串、醤油の小鉢が中心 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、天ぷら、生姜焼き、だしの小鉢 (2025〜26年の口コミ)。',
    notes: '[京の定食・宮川町] 石畳の宮川町の気さくな店。昼は1,300円の刺身と天ぷらの定食など10種ほどに行列ができ、夜は胡麻豆腐、生麩、刺身、天ぷらのコースが飲み放題付きで6,000円ほど。チャージ200円。日月休み。',
  });
}

// ================================================================ 焼肉 錦へんこつ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26006117/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_nishiki_henkotsu', name: '焼肉 錦へんこつ (Yakiniku Nishiki Henkotsu)', category: 'OMNI',
    lat: 35.005299, lng: 135.765158, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tare-marinated meats, cold noodles and fried rice in the courses (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (2025–26 reviews).',
    hours_raw: 'Daily 17:00–23:00 (last order 22:30); may close early when ingredients run out; irregular closures (Tabelog). Bookings taken; courses must be booked by the day before (Tabelog). Service charge: Tabelog\'s Japanese original says 「サービス料・チャージ料なし」 (none). Cards (VISA, Master, JCB, AMEX) and QR; no e-money (Tabelog). 45 seats, partitioned for groups of 2 to 45 (Tabelog). Mobile ordering (December 2025 review). On Tominokoji just north of Nishiki, 5 min from Hankyu Kawaramachi and Karasuma Stns (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tominokoji north of Nishiki — 5 min from Kawaramachi Stn',
    cuisine: 'Kuroge wagyu yakiniku with many offal cuts (2025–26 reviews): courses with all-you-can-drink — a 12-dish special kuroge wagyu course with wagyu sashimi ¥5,330 (June 2025), a January–February 17-dish course of Kagoshima kuroge wagyu ¥5,980 (January 2026), a ¥10,000 course with yukhoe topped with ikura (August 2026) — finishing with egg fried rice or cold noodles; à la carte green-onion tongue, thick-cut tongue, yukhoe, outside skirt, liver, rare horumon cuts, kimchi; a drinks-only all-you-can-drink option (2025–26 reviews)',
    website: null, gmaps: gm('焼肉 錦へんこつ'), menu_url: TB + 'dtlmenu/',
    notes: "[Wagyu yakiniku · near Nishiki] A roomy yakiniku just north of Nishiki on Tominokoji, popular for parties: kuroge wagyu courses with drinks from about ¥5,300, thick-cut tongue, wagyu sashimi and rare horumon, finished with fluffy egg fried rice. No service or cover charge.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A yakiniku restaurant near Nishiki Market (Tabelog; Gurunavi). Unrelated to へんこつ, the beef-stew oden shop already listed.',
      philosophy: null, specialty: 'Kuroge wagyu courses; horumon.',
      anecdotes: [
        { text: 'A last-minute group of eleven in June 2025 got a booking for the 12-dish course, which opened with beef sashimi.', source: R + 'B509965770/' },
        { text: 'A June 2025 diner was surprised by egg fried rice as the course\'s finale and found it fluffy and delicious.', source: R + 'B508472704/' },
        { text: 'An August 2026 diner on the ¥10,000 course was unimpressed by the salad and namul but happy with the meat.', source: R + 'B533220540/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉 錦へんこつ、焼肉・居酒屋・もつ鍋、中京区富小路通錦小路上ル東側高宮町593、阪急河原町駅・烏丸駅から徒歩5分、毎日 17:00〜23:00 (L.O. 22:30)、食材がなくなり次第終了、不定休、予約可 (コースは前日まで)、サービス料・チャージ料なし、カード・QR 可、電子マネー不可、45席 (2〜45名で仕切り可)。口コミ (2025年6月〜2026年8月、英語): 飲み放題付きのコース (和牛刺し付き12品5,330円、1〜2月限定のKagoshima 産黒毛和牛17品5,980円、イクラのせユッケの10,000円)、締めの卵炒飯や冷麺、ねぎタン、厚切りタン、ユッケ、上ハラミ、レバー、珍しいホルモン、キムチ、アルコールだけの飲み放題、モバイルオーダー。',
      confidence: 'medium', sources: [TB, R + 'B251254582/', R + 'B508472704/', R + 'B509553817/', R + 'B509965770/', R + 'B511252552/', R + 'B515281494/', R + 'B518456217/', R + 'B518911751/', R + 'B524663957/', R + 'B533220540/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mobile ordering; book courses the day before.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区富小路通錦小路上ル東側高宮町593',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005299, 135.765158); cross-checked: GSI 京都府京都市中京区高宮町593番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509965770/', R + 'B251254582/'],
    price_note: 'Course prices from June 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special kuroge wagyu course with wagyu sashimi (12 dishes, drinks)', '¥5,330', 'Courses', 'no', 'no', 'June 2025 review.', 'course_12'),
      it('', '', 'Kagoshima kuroge wagyu course (17 dishes, drinks; Jan–Feb)', '¥5,980', 'Courses', 'no', 'no', 'January 2026 review.', 'course_17'),
    ] }, {
    cuisine: 'ホルモンの多い黒毛和牛の焼肉 (2025〜26年の口コミ): 飲み放題付きのコース (和牛刺し付きの特選黒毛和牛12品5,330円 (2025年6月)、1〜2月のKagoshima 産黒毛和牛17品5,980円 (2026年1月)、イクラのせユッケの10,000円 (2026年8月))、締めは卵炒飯か冷麺。単品はねぎタン、厚切りタン、ユッケ、上ハラミ、レバー、珍しいホルモン、キムチ。アルコールだけの飲み放題も (2025〜26年の口コミ)',
    neighborhood: '錦の北の富小路。河原町駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。たれの肉、コースの冷麺や炒飯 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉店 (2025〜26年の口コミ)。',
    notes: '[和牛焼肉・錦の近く] 錦のすぐ北の富小路の、宴会にも使える広い焼肉店。飲み放題付きの黒毛和牛のコースが5,300円ほどから、厚切りタン、和牛刺し、珍しいホルモン、締めのふわふわの卵炒飯。サービス料・チャージなし。',
  });
}

save();
