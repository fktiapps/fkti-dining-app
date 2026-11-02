// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 21.
// The lane's notable queue had 7 shops left; 4 are chains, so this batch adds 3.
//   + 焼肉Lab 難波店 Yakiniku Lab Namba (all-you-can-eat wagyu yakiniku)
//   + 宇治園 喫茶去 心斎橋店 Ujien Kissako (tea house of an 1869 tea merchant, Shinsaibashi-suji)
//   + ロジック 難波店 Logic Namba (Neapolitan pizza and Italian, two floors, near Namba)
//   - 27148523 赤福 五十鈴茶屋 髙島屋大阪店: Akafuku (Ise) — tea rooms and counters in Ise, Osaka Station, Nagoya
//     department stores and more (search results) — chain.
//   - 27046859 美々卯 なんば店: Mimiu udon-suki — honten, Shinsaibashi, Sakai, Abeno Harukas, Honmachi, Minoo and Kyoto
//     shops (search results) — chain (5+).
//   - 27013215 グラマシーニューヨーク 大阪高島屋店: department-store cake brand sold in Tokyo and Osaka stores — chain.
//   - 27002803 ハーブス なんばパークス店: HARBS runs 49 cafés in Japan and one abroad (recruiting page) — chain.
//   Group-size line (brief): 焼肉Lab also has 梅田店 (Tabelog sister-shop link) — small group. 宇治園 喫茶去 also has
//   阪急三番街店 (search results) — small group. ロジック also has 裏なんば店 and a Yokohama LOGIC (gurunavi) — small
//   group; its Tabelog invoice number matches AVOCADO HOUSE NAMBA (osaka_avocado_house_namba), a different concept from
//   the same operator. None of the three is in data/osaka.json (grep by name, Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27148523', 'chain: 赤福 (Akafuku) — Ise shops, Osaka Station, Nagoya department stores and more');
skip('27046859', 'chain: 美々卯 (Mimiu) udon-suki — honten, Shinsaibashi, Sakai, Abeno, Honmachi, Minoo, Kyoto');
skip('27013215', 'chain: グラマシーニューヨーク (Gramercy New York) department-store cake brand, Tokyo and Osaka');
skip('27002803', 'chain: ハーブス (HARBS), 49 cafés in Japan');

// ================================================================ 焼肉Lab 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27135259/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']), WE = day(['12:00', '23:00']);
  put({
    id: 'osaka_yakiniku_lab_namba', name: '焼肉Lab 難波店 (Yakiniku Lab Namba)', category: 'OMNI',
    lat: 34.666222, lng: 135.501027, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The all-you-can-eat menu includes sauced yakiniku, meat sushi, yukhoe and sashimi with sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an all-you-can-eat wagyu yakiniku restaurant.',
    hours_raw: 'Mon–Fri 17:00–23:00; Sat, Sun and holidays 12:00–23:00; last order food 22:00, drinks 22:30 (Tabelog). Reservations accepted; private rooms for 2+ (Tabelog). Cards (VISA, Master) only; no e-money or QR payment (Tabelog). 43 seats, private rooms for 4 to 8; non-smoking (Tabelog). Ordering by QR code on your phone (May and August 2026). Tabelog gives the 2nd floor; a May 2026 reviewer took the lift to the 3rd. Some all-you-can-eat items sell out, such as heart sashimi on a Sunday lunch (May 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-7-22, 中野ビル, look up for the big sign — 1 min from Namba Stn exit 11',
    cuisine: 'All-you-can-eat and drink yakiniku of Kumamoto wagyu and kuroge wagyu from ¥5,500, three courses, with A5 strip loin, thick-cut tongue and meat sushi; 100+ drinks; "meat cake" for anniversaries (Tabelog shop text) · Premium Kiwami course ¥15,000, ¥10,000 for the third anniversary (Tabelog; August 2026) · premium course, the cheapest: meat sushi, yukhoe, thick-cut tongue, lean cuts, grilled shabu, horumon (September 2026) · ultimate course: thick-cut tongue, ultimate kalbi (September 2026); uni and ikura sushi, a large steak (August 2026) · seared yukhoe, chicken and heart sashimi (April–May 2026) · thick-cut liver, outside skirt (July 2026) · grilled beef shabu, premium kalbi with wasabi, yam kimchi (October 2026) · about 130 dishes on the top course (October 2026)',
    website: null, gmaps: gm('焼肉Lab 難波店'), menu_url: null,
    notes: '[Yakiniku · Namba, all-you-can-eat wagyu] An all-you-can-eat yakiniku a minute from Namba Station where even the entry course includes meat sushi, yukhoe and thick-cut tongue, ordered by QR code. Courses start at ¥5,500 with drinks; the top Kiwami course (about 130 items, steaks, uni and ikura) was ¥10,000 for the anniversary in 2026. Private rooms for dates; book ahead. Cards are VISA and Master only.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 1 May 2023 as the Namba shop of the popular 焼肉Lab in Umeda (sister shop linked on Tabelog).', philosophy: null, specialty: 'All-you-can-eat wagyu, meat sushi.',
      anecdotes: [
        { text: '"About three minutes later, the staff came over and said, \'I\'m sorry... it\'s sold out.\' I had been looking forward to it the most" — May 2026, the heart sashimi at Sunday lunch.', source: R + 'B527927242/' },
        { text: '"With the QR code ordering system, there\'s no need to worry about language barriers." — August 2026.', source: R + 'B534020995/' },
        { text: '"Both lacked flavor and were overshadowed by the taste of the sauce" — April 2026, on the chicken and heart sashimi.', source: R + 'B527222664/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼肉Lab 難波店、焼肉・韓国料理・ホルモン、大阪市中央区難波3-7-22 中野ビル 2F、なんば駅11番出口から徒歩1分、月〜金17:00〜23:00、土日祝12:00〜23:00 (料理 L.O. 22:00、ドリンク L.O. 22:30)、予約可、カード (VISA・Master) のみ、電子マネー・QR 決済不可、43席、個室4〜8名、禁煙、2023年5月1日オープン、姉妹店は梅田店。Kumamoto の和牛と黒毛和牛の食べ放題・飲み放題5,500円から、A5のサーロイン、厚切りタン、肉寿司、100種以上の飲み物、記念日の肉ケーキ、3周年でPremium Kiwami のコース15,000円が10,000円。口コミ(2026年4月〜10月): 肉寿司、ユッケ、厚切りタン、焼きしゃぶ、上カルビ、厚切りレバー、ハラミ、ウニといくらの寿司、ステーキ、QR コードで注文、ハツ刺しが売り切れ、鶏刺しとハツ刺しはタレの味が強いという声、3階だったという声も。',
      confidence: 'medium', sources: [TB, R + 'B494076985/', R + 'B525559948/', R + 'B527222664/', R + 'B527927242/', R + 'B528203071/', R + 'B532092420/', R + 'B533165295/', R + 'B533311803/', R + 'B534020995/', R + 'B536407932/', R + 'B536441299/', R + 'B536599528/', R + 'B536603248/', R + 'B537000237/', R + 'B537418628/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ordering by QR code on your phone, which an August 2026 reviewer says removes the language barrier. No English-menu evidence on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-7-22 中野ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目7番22号 (go) 7m. Nearest record: コギソウル 難波店 (osaka_kogi_seoul_namba, 3-7-23) 11 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533311803/', TB],
    price_note: 'Course prices from the Tabelog listing and an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat and drink yakiniku, entry course', 'from ¥5,500', 'Course', 'ask', 'no', 'Tabelog shop text.', 'tabehodai_entry'),
      it('', '', 'Premium Kiwami all-you-can-eat course (anniversary price)', '¥10,000', 'Course', 'ask', 'no', 'Tabelog listing; August 2026 review; regular ¥15,000.', 'kiwami_course'),
      it('', '', 'Thick-cut tongue (in the courses)', '', 'Yakiniku', 'ask', 'no', '2026 reviews.', 'atsugiri_tan'),
      it('', '', 'Meat sushi (in the courses)', '', 'Raw', 'ask', 'no', 'September 2026 reviews.', 'niku_sushi'),
    ] }, {
    cuisine: 'Kumamoto の和牛と黒毛和牛の食べ放題・飲み放題の焼肉で5,500円から、コースは3種、A5のサーロイン、厚切りタン、肉寿司、100種以上の飲み物、記念日の「肉ケーキ」(食べログの店の紹介)・Premium Kiwami のコース15,000円が3周年で10,000円 (食べログ、2026年8月)・いちばん手ごろなコースでも肉寿司、ユッケ、厚切りタン、赤身、焼きしゃぶ、ホルモン (2026年9月)・Ultimate のコース: 厚切りタン、Ultimate Kalbi (2026年9月)、ウニといくらの寿司、大きなステーキ (2026年8月)・炙りユッケ、鶏刺しとハツ刺し (2026年4〜5月)・厚切りレバー、ハラミ (2026年7月)・焼きしゃぶ、わさびで食べる上カルビ、山芋キムチ (2026年10月)・上のコースは約130品 (2026年10月)',
    neighborhood: '難波3-7-22 中野ビル、大きな看板を見上げて。なんば駅11番出口から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。食べ放題にはタレの焼肉、肉寿司、ユッケ、タレの刺身がある。',
    vegan_detail: 'ヴィーガンではありません。和牛の食べ放題の焼肉店。',
    notes: '[焼肉・なんば、和牛の食べ放題] なんば駅から1分の食べ放題の焼肉店で、いちばん手ごろなコースでも肉寿司、ユッケ、厚切りタンがあり、注文は QR コードで。コースは飲み放題つき5,500円から、ステーキやウニといくらもある約130品の Premium Kiwami のコースは2026年の記念価格で10,000円。デートには個室を。予約がおすすめ。カードは VISA と Master のみ。',
  });
}

// ================================================================ 宇治園 喫茶去 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27012399/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '19:45']);
  put({
    id: 'osaka_ujien_kissako_shinsaibashi', name: '宇治園 喫茶去 心斎橋店 (Ujien Kissako Shinsaibashi)', category: 'OMNI',
    lat: 34.673141, lng: 135.501529, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog says allergy information is available; ask for it. The menu runs to parfaits with sponge cake, Mont Blancs, waffles and a matcha pasta at lunch, alongside teas and shaved ice.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Teas (sencha, hojicha, matcha) are plant-only; the sweets use cream, ice cream and milk, and the shaved ice comes as "milk kintoki" (August 2026).',
    hours_raw: 'Café (2nd floor) daily 11:00–19:45, last order 19:00; 1st-floor tea shop and Koden Yakuzen health-tea shop 10:30–21:00; open year-round (Tabelog). No reservations for café seats; bookings only for the afternoon tea set and the matcha experience (weekdays) (Tabelog). Waits of about 30 minutes at weekends (December 2025). Cards (VISA, Master, JCB, AMEX, Diners), transport IC and other e-money, PayPay and Alipay (Tabelog). 45 seats; non-smoking; wheelchair accessible; staff speak English, Chinese and Korean; menu with photos, on a tablet (Tabelog; December 2025). Children from primary school age order at least one item (Tabelog). Warm hojicha served instead of water (December 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-4-20, 2F above the Ujien tea shop, opposite Daimaru Shinsaibashi — right outside Shinsaibashi Stn exit 6',
    cuisine: 'Tea house of Ujien, a Japanese tea merchant founded in 1869 (Meiji 2) (June 2026; search results): Japanese teas, matcha and hojicha sweets; "freshly made Mont Blanc" (Tabelog shop text) · Uji matcha experience with wagashi ¥1,320 (Tabelog) · Mont Blanc of chestnut and matcha ¥1,320 (September 2026); Mont Blanc set ¥1,320 and Mont Blanc imo-anmitsu set ¥1,540 (December 2025); limited pumpkin Mont Blanc parfait (December 2025) · hojicha parfait with jelly, sponge, azuki, cream, ice cream and shiratama (January 2026); matcha mini parfait (January 2026) · Uji milk kintoki shaved ice ¥1,320 (August 2026) · matcha ice-cream waffle (October 2026) · takeaway: hojicha ice Mont Blanc ¥900 (March 2026), matcha soft serve (October 2026) · soy-milk mentaiko cream pasta with matcha noodles at lunch (July 2025)',
    website: 'http://www.uji-en.co.jp/', gmaps: gm('宇治園 喫茶去 心斎橋'), menu_url: null,
    notes: '[Japanese tea café · Shinsaibashi-suji, matcha sweets from an 1869 tea house] The second-floor café of Ujien, a tea merchant founded in 1869, right opposite Daimaru Shinsaibashi (take the lift at the back of the shop). Order a matcha or chestnut Mont Blanc or the hojicha parfait with a pot of sencha; warm hojicha comes free. No café bookings, so expect a wait at weekends; staff speak English, Chinese and Korean. Downstairs sells tea and takeaway matcha soft serve. Some reviewers find prices higher and sweets very sweet (2026).',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing and reviews: the café of Ujien, a Japanese tea shop founded in 1869 (Meiji 2) in Yamashiro, Kyoto (search results); interior art by Kosuke Watanuki (July 2025). A second café, 阪急三番街店, is in Umeda (search results).', philosophy: null, specialty: 'Matcha and hojicha sweets; Mont Blanc.',
      anecdotes: [
        { text: '"To my delight, instead of cold water, I was served warm hojicha in a pot. Truly a specialty tea shop!" — December 2025, after a 30-minute wait.', source: R + 'B518429442/' },
        { text: '"Upon reviewing the menu, I felt that the prices have significantly increased compared to before." — September 2026.', source: R + 'B535616820/' },
        { text: '"The texture was too grainy and the sweetness was overwhelming, making it hard to finish." — August 2026, a takeaway sweet.', source: R + 'B534032249/' },
      ],
      japanese_sources_summary: '食べログ: 宇治園 喫茶去 心斎橋店、甘味処・カフェ・喫茶店、大阪市中央区心斎橋筋1-4-20 1F・2F、心斎橋駅6番出口すぐ、大丸本館の正面、2階の喫茶は毎日11:00〜19:45 (L.O. 19:00)、1階の茶舗と健康茶の店は10:30〜21:00、年中無休、席だけの予約は不可 (アフタヌーンティーと抹茶体験のみ予約可)、カード・電子マネー・QR 決済可、45席、禁煙、英語・中国語・韓国語を話すスタッフ、アレルギー表示あり、公式 uji-en.co.jp。老舗の日本茶とお抹茶のスイーツ、しぼりたてのモンブラン、宇治抹茶体験 (和菓子つき) 1,320円。口コミ(2025年7月〜2026年10月): 栗と抹茶のモンブラン1,320円、モンブランと芋あんみつのセット1,540円、ほうじ茶パフェ、抹茶のミニパフェ、宇治ミルク金時1,320円、抹茶アイスのワッフル、持ち帰りのほうじ茶アイスモンブラン900円、抹茶ソフト、水の代わりに温かいほうじ茶、週末は30分ほど待つ、外国人客が多い、値上がりしたという声、甘すぎるという声も。',
      confidence: 'medium', sources: [TB, 'http://www.uji-en.co.jp/', R + 'B228827770/', R + 'B507172947/', R + 'B514943676/', R + 'B517476968/', R + 'B518429442/', R + 'B518796245/', R + 'B519250636/', R + 'B521383087/', R + 'B521605787/', R + 'B524948570/', R + 'B530312192/', R + 'B534032249/', R + 'B535616820/', R + 'B537547663/', R + 'B538492676/', 'https://osaka-info.jp/special/universal/gourmet/宇治園　喫茶去　阪急三番街店/'] },
    cultural_comfort: { level: 'english', note: 'Staff speak English, Chinese and Korean; photo menu on a tablet (Tabelog; December 2025). Many overseas visitors (2025).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog lists allergy information as available.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-4-20 1F、2Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop website; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目4番20号 (go) 14m. No record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535616820/', R + 'B519250636/', R + 'B507172947/', TB],
    price_note: 'Prices from December 2025–September 2026 reviews; the matcha experience from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Chestnut and matcha Mont Blanc', '¥1,320', 'Sweets', 'ask', 'no', 'September 2026 review.', 'matcha_montblanc'),
      it('', '', 'Mont Blanc and imo-anmitsu set', '¥1,540', 'Sweets', 'ask', 'no', 'December 2025 review.', 'montblanc_anmitsu'),
      it('', '', 'Hojicha parfait', '', 'Parfaits', 'ask', 'no', 'January 2026 review.', 'hojicha_parfait'),
      it('', '', 'Uji milk kintoki shaved ice', '¥1,320', 'Shaved ice', 'ask', 'no', 'August 2026 review.', 'uji_milk_kintoki'),
      it('', '', 'Uji matcha experience with wagashi', '¥1,320', 'Tea', 'ask', 'ask', 'Tabelog listing; weekdays, bookable.', 'matcha_experience'),
    ] }, {
    cuisine: '1869年 (明治2年) 創業の日本茶の店、宇治園の喫茶 (2026年6月、検索結果): 日本茶、抹茶とほうじ茶のスイーツ、「しぼりたてモンブラン」(食べログの店の紹介)・宇治抹茶体験 (和菓子つき) 1,320円 (食べログ)・栗と抹茶のモンブラン1,320円 (2026年9月)、モンブランのセット1,320円とモンブラン芋あんみつのセット1,540円 (2025年12月)、限定のかぼちゃモンブランパフェ (2025年12月)・ゼリー、スポンジ、小豆、クリーム、アイス、白玉のほうじ茶パフェ (2026年1月)、抹茶のミニパフェ (2026年1月)・宇治ミルク金時のかき氷1,320円 (2026年8月)・抹茶アイスのワッフル (2026年10月)・持ち帰り: ほうじ茶アイスのモンブラン900円 (2026年3月)、抹茶ソフト (2026年10月)・昼は抹茶の麺の豆乳明太クリームパスタ (2025年7月)',
    neighborhood: '心斎橋筋1-4-20、宇治園の茶舗の2階、大丸心斎橋店の向かい。心斎橋駅6番出口すぐ',
    gf_detail: '要確認。食べログにはアレルギー表示ありとあるので確認を。パフェのスポンジ、モンブラン、ワッフル、昼の抹茶のパスタに、お茶やかき氷も。',
    vegan_detail: '要確認。ヴィーガンの情報なし。お茶 (煎茶、ほうじ茶、抹茶) は植物性だが、スイーツはクリーム、アイス、牛乳を使い、かき氷は「ミルク金時」(2026年8月)。',
    notes: '[日本茶のカフェ・心斎橋筋、1869年創業の茶舗の抹茶スイーツ] 1869年創業の茶舗、宇治園の2階のカフェで、大丸心斎橋店の真向かい (店の奥のエレベーターで)。抹茶か栗のモンブラン、ほうじ茶パフェを煎茶と一緒に。温かいほうじ茶は無料で出る。席の予約はできないので週末は待つことも。英語・中国語・韓国語が通じる。1階ではお茶と持ち帰りの抹茶ソフト。2026年には値上がりした、甘すぎるという声も。',
  });
}

// ================================================================ ロジック 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27067923/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'osaka_logic_namba', name: 'ロジック 難波店 (Logic Namba)', category: 'OMNI',
    lat: 34.66634, lng: 135.4993, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu centres on Neapolitan pizza and pasta, with fries, croquettes, ajillo with baguette and fried salmon.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Pizza, pasta and appetisers are mostly cheese, meat or seafood.',
    hours_raw: 'Daily 17:00–01:00, last order 24:00; 31 December 17:00–22:00; closed 1 January (Tabelog). Happy hour on the 1st floor only, until 22:00 on weekdays and until 19:00 on Fridays, Saturdays and the day before holidays (Tabelog); wine at ¥300 (April 2026). Reservations accepted; two-hour limit (August 2026). Cover charge ¥300 + tax (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay, d Barai, Rakuten Pay, Alipay and WeChat Pay; no e-money (Tabelog). 78 seats over two floors (34 on the 1st, 44 on the 2nd), private rooms for 2 to 20; non-smoking (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 4-6-3, 中村ビル 1F–2F, a back street in Ura-Namba — 1 min from Namba Stn',
    cuisine: 'Neapolitan pizza from a stone oven, supervised by Junichi Shoji, a Pizza World Championship winner; Italian dishes from antipasti to mains; mostly Italian wine and spirits (Tabelog shop text) · casual plan of 7 dishes with 2 hours of drinks ¥3,500: appetisers, Margherita, pasta of the day, grilled chicken, dessert (Tabelog) · bottles of wine from ¥3,190 (Tabelog) · all-you-can-drink course ¥4,000 of appetisers, potato and rice croquettes, pizza, pasta and grilled pork belly (July 2026); à la carte all-you-can-drink ¥1,300 for 2 hours, two dishes per person (June 2026) · assorted appetisers ¥1,300, Margherita (April 2026) · Quattro Formaggi, salad, ajillo, tiramisu in a flowerpot (June 2026) · broccoli and octopus ajillo, Catalana, pistachio ice cream (July 2026) · beef, black rare fried salmon (August 2026)',
    website: null, gmaps: gm('ロジック 難波店'), menu_url: null,
    notes: '[Italian · Namba, Neapolitan pizza and cheap drinks] A two-floor pizzeria and Italian bar a minute from Namba Station, with stone-oven Neapolitan pizza supervised by a world-champion pizzaiolo. Order the Margherita or Quattro Formaggi, the assorted appetisers and the flowerpot tiramisu; downstairs happy hour (wine from ¥300) runs until 22:00 on weekdays. Courses with two hours of drinks start at ¥3,500. Open until 1:00.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): Neapolitan pizza supervised by Junichi Shoji, Pizza World Championship winner. Gurunavi lists a 裏なんば店 and names a LOGIC in Yokohama (search results). The Tabelog invoice number is the same as AVOCADO HOUSE NAMBA\'s (osaka_avocado_house_namba).', philosophy: null, specialty: 'Neapolitan pizza.',
      anecdotes: [
        { text: '"First, I was amazed by the great value of enjoying wine for just JPY 300!" — April 2026.', source: R + 'B525892996/' },
        { text: '"I felt the pasta sauce was lacking a bit of flavor." — May 2026.', source: R + 'B528100193/' },
        { text: '"The seating is limited to two hours, and after that, more customers started coming in, so making a reservation might be a good idea!" — August 2026.', source: R + 'B534026230/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ロジック 難波店、イタリアン・ピザ・バル、大阪市中央区難波4-6-3 中村ビル 1F・2F、なんば駅から徒歩1分、毎日17:00〜翌1:00 (L.O. 24:00)、12月31日は17:00〜22:00、1月1日休み、1階はハッピーアワー (平日22時まで、金土祝前は19時まで)、予約可、コペルト300円 (税抜)、カード・QR 決済可、電子マネー不可、78席 (1階34、2階44)、個室2〜20名、禁煙。ピッツァ世界選手権優勝の庄司淳一氏監修の石窯のナポリピッツァ、前菜からパスタ、メインまでのイタリアン、イタリアのワイン、7品と2時間飲み放題のカジュアルプラン3,500円、ボトルワイン3,190円から。口コミ(2026年4月〜10月): ワイン300円、前菜の盛り合わせ1,300円、マルゲリータ、クアトロフォルマッジ、植木鉢のティラミス、ブロッコリーとタコのアヒージョ、カタラーナ、4,000円の飲み放題コース、2時間制、パスタの味が薄いという声も。',
      confidence: 'medium', sources: [TB, R + 'B524406277/', R + 'B525675166/', R + 'B525892996/', R + 'B526677138/', R + 'B528100193/', R + 'B529691524/', R + 'B529718126/', R + 'B530166626/', R + 'B531267939/', R + 'B531750963/', R + 'B531847130/', R + 'B533360404/', R + 'B534026230/', R + 'B535738958/', R + 'B537794076/', 'https://r.gnavi.co.jp/k599221/', 'https://r.gnavi.co.jp/k599236/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual pizzeria and bar; courses make ordering easy. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波4-6-3 中村ビル 1F・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026. The English Tabelog page currently shows the name "Sushi & Yakiniku Dining Namba ten"; the categories, shop text and reviews are the pizzeria.' },
    pin_source: `Tabelog ${TB} 34.666363,135.499319 and GSI 大阪府大阪市中央区難波四丁目6番3号 (go) 34.666363,135.499374 sit 7 m and 6 m from 肉バルGAM 難波本店 (osaka_niku_bar_gam_namba_honten, also 4-6-3, another building); pin offset to 34.66634,135.4993, about 10 m from GAM and 21 m from 浪速炉ばた 東洋小噺; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B525892996/', R + 'B531750963/'],
    price_note: 'Courses from the Tabelog listing; à la carte from April–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Margherita (stone-oven Neapolitan pizza)', '', 'Pizza', 'no', 'no', 'Tabelog course; 2026 reviews.', 'margherita'),
      it('', '', 'Assorted appetisers', '¥1,300', 'Antipasti', 'ask', 'no', 'April 2026 review.', 'antipasto_misto'),
      it('', '', 'Casual plan: 7 dishes with 2 hours of drinks', '¥3,500', 'Course', 'no', 'no', 'Tabelog listing.', 'casual_plan'),
      it('', '', 'Course with 2 hours of drinks (croquettes, pizza, pasta, pork belly)', '¥4,000', 'Course', 'no', 'no', 'July 2026 review.', 'course_4000'),
      it('', '', 'Tiramisu in a flowerpot', '', 'Dessert', 'no', 'no', 'June 2026 review.', 'tiramisu'),
    ] }, {
    cuisine: 'ピッツァ世界選手権で優勝した庄司淳一氏が監修する石窯のナポリピッツァ。前菜からメインまでのイタリアン、イタリアが中心のワインと酒 (食べログの店の紹介)・前菜、マルゲリータ、日替わりのパスタ、鶏のグリル、デザートの7品と2時間飲み放題のカジュアルプラン3,500円 (食べログ)・ボトルワイン3,190円から (食べログ)・前菜、ポテトとライスのコロッケ、ピッツァ、パスタ、豚バラのグリルの飲み放題つきコース4,000円 (2026年7月)、アラカルトの2時間飲み放題1,300円、ひとり2品の注文 (2026年6月)・前菜の盛り合わせ1,300円、マルゲリータ (2026年4月)・クアトロフォルマッジ、サラダ、アヒージョ、植木鉢のティラミス (2026年6月)・ブロッコリーとタコのアヒージョ、カタラーナ、ピスタチオのアイス (2026年7月)・牛肉、黒い衣のサーモンのレアフライ (2026年8月)',
    neighborhood: '難波4-6-3 中村ビル 1F・2F、裏なんばの裏通り。なんば駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。ナポリピッツァとパスタが中心で、フライドポテト、コロッケ、バゲットつきのアヒージョ、サーモンのフライもある。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ピッツァ、パスタ、前菜はほとんどがチーズ、肉、魚介。',
    notes: '[イタリアン・なんば、ナポリピッツァと安い飲み物] なんば駅から1分の2フロアのピッツェリア兼イタリアンバルで、世界チャンピオンのピッツァ職人が監修する石窯のナポリピッツァ。マルゲリータかクアトロフォルマッジ、前菜の盛り合わせ、植木鉢のティラミスを。1階のハッピーアワー (ワイン300円から) は平日22時まで。2時間飲み放題つきのコースは3,500円から。深夜1時まで。',
  });
}

save();
