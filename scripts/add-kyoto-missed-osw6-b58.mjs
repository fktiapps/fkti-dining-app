// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 58.
//   + めいてい Meitei (counter-only sake and fish snacks from 15:00, in an alley off Teramachi) — rest
//   + 大衆酒場 照 京都河原町店 Taishu Sakaba Terasu (cheap all-you-can-eat-and-drink izakaya, Kiyamachi) — rest
//   + Sui. (creative bistro dishes and wine in a glass-walled Fuyacho townhouse) — rest
//   + 石丸商店 Ishimaru Shoten (all-night bar in alley 13 between Kiyamachi and Pontocho) — rest
//   - skip 26044432 夜パフェBAR ＆VIGO 京都店 (chain)
//   Rest tier, nearest-first from `next rest 2000`.
//   Same-name counts first (2026-11-07): めいてい — one in Kyoto. 大衆酒場 照 — one Terasu in Kyoto. Sui. — one. 石丸商店 — one in
//   Kyoto (the Nishiogikubo shop is a different business). None is in data/kyoto.json.
//   Service charges per Tabelog's Japanese original: Sui. 「サービス料、チャージ料無し」; the other three list none.
//   No halal claims; no owner deaths; no single-review remarks about other diners kept.
//   Pin: 照 shares Rinsen Avenue (下樵木町199-6) with kyoto_thai_kitchen_baramee (1.8 m); offset 5.5 m west, stated in pin_source.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-58');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044432', 'chain: Yoru Parfait BAR & VIGO — Tabelog lists VIGO shops in Machida, Nagareyama, Hiroo, Kichijoji, Kagurazaka, Sapporo Susukino, Fukuoka Nishijin and Kyoto (https://tabelog.com/en/rstLst/?sw=%E5%A4%9C%E3%83%91%E3%83%95%E3%82%A7BAR%20VIGO).');

// ================================================================ めいてい
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029624/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '23:00']);
  put({
    id: 'kyoto_meitei_teramachi', name: 'めいてい (Meitei)', category: 'OMNI',
    lat: 35.005685, lng: 135.766586, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small fish and vegetable dishes with sake — sea bream with kombu, simmered ayu, grilled eggplant, chilled tofu (2024–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led small plates such as karasumi, sea bream and ayu (2024–25 reviews).',
    hours_raw: 'Daily 15:00–23:00; hours may change, and opening can slip to about 16:00 (Tabelog; February 2025). Reservations accepted and advised — often full (Tabelog; June 2025; June 2026). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). About 10 counter seats only (Tabelog; May 2026). Smoking allowed (Tabelog). In a narrow alley between Teramachi and Shinkyogoku, near Kyoto-Kawaramachi (March 2024). Opened 18 July 2017 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Alley between Teramachi and Shinkyogoku — Kyoto-Kawaramachi',
    cuisine: 'Carefully made small Kyoto dishes to go with sake and shochu, from mid-afternoon (2024–26 reviews) · homemade karasumi, obanzai (March 2024) · celery with dried baby sardines; grilled eggplant; chilled tofu with nameko (June 2025) · sea bream with salted kombu; ayu simmered with sansho (August 2025) · fish dishes with a wide sake list (July 2024)',
    website: null, gmaps: gm('めいてい 寺町 京都'), menu_url: TB,
    notes: '[Sake and small plates · Teramachi alley, from 3 pm] A ten-seat counter hidden down an alley off Teramachi, opening at 15:00 for early drinkers: refined little fish and vegetable dishes — homemade karasumi, sea bream with kombu, ayu with sansho, fluffy grilled eggplant — with a deep list of sake and shochu at fair prices. A review says it has held a Michelin Bib Gourmand. Book ahead; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed); trained at Kappo Chihana in Gion, per an April 2025 review'], origin: null,
      background: 'Per Tabelog: a Japanese restaurant opened in July 2017 with counter seats only. An April 2025 review says it was selected for the Michelin Bib Gourmand in 2019 and that the owner comes from Kappo Chihana; a July 2024 review describes the chef as formerly a Gion cook.',
      philosophy: null, specialty: 'Small fish dishes with sake.',
      anecdotes: [
        { text: 'A June 2025 pair looking for daytime drinks found it nearby, and it filled up soon after.', source: R + 'B508480942/' },
        { text: 'A February 2025 first-timer found the choice of dishes limited but each one high in quality and fairly priced.', source: R + 'B500572967/' },
        { text: 'An October 2026 visitor found the atmosphere change completely on stepping from the busy arcade into the alley.', source: R + 'B519232385/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区円福寺前町277、京都河原町駅から約280m、毎日15:00〜23:00、予約可、カード (JCB、AMEX、Diners) 可、10席、喫煙可、2017年7月18日オープン。口コミ (2024年3月〜2026年10月、英語): 寺町と新京極の間の細い路地、カウンターのみ、自家製からすみ、おばんざい、セロリとじゃこ、焼きなす、なめこの冷奴、鯛の塩昆布、鮎の山椒煮、日本酒と焼酎が豊富、2019年にミシュランのビブグルマン、店主は Kappo Chihana の出身との記述、15時から、16時ごろの開店のことも。',
      confidence: 'medium', sources: [TB, R + 'B383548003/', R + 'B480931756/', R + 'B489940415/', R + 'B497425567/', R + 'B500572967/', R + 'B508479765/', R + 'B508480942/', R + 'B508485833/', R + 'B511816872/', R + 'B519232385/', R + 'B528856557/', R + 'B530848318/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a counter seat; open from mid-afternoon; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区円福寺前町277',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005685, 135.766586); GSI resolves 円福寺前町277 only to the town, so the Tabelog pin is kept as approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511816872/'],
    price_note: 'No item prices found in the sources.', last_checked: TODAY, items: [
      it('', '', 'Sea bream with salted kombu', '', 'Small plates', 'ask', 'no', 'August 2025.', 'tai_kombu'),
      it('', '', 'Homemade karasumi', '', 'Small plates', 'ask', 'no', 'March 2024.', 'karasumi'),
      it('', '', 'Grilled eggplant', '', 'Small plates', 'ask', 'ask', 'June 2025.', 'yaki_nasu'),
    ] }, {
    cuisine: '昼過ぎから、日本酒や焼酎に合う丁寧な京の小皿 (2024〜2026年の口コミ)・自家製からすみ、おばんざい (2024年3月)・セロリとじゃこ、焼きなす、なめこの冷奴 (2025年6月)・鯛の塩昆布、鮎の山椒煮 (2025年8月)・品揃えの多い日本酒と魚の料理 (2024年7月)',
    neighborhood: '寺町と新京極の間の路地。京都河原町駅',
    gf_detail: '要確認。鯛の昆布、鮎の煮物、焼きなす、冷奴など魚と野菜の小皿 (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。からすみ、鯛、鮎など魚中心の小皿 (2024〜2025年の口コミ)。',
    notes: '[日本酒と小皿・寺町の路地、15時から] 寺町の路地の奥にある10席のカウンター。15時から開き、自家製からすみ、鯛の塩昆布、鮎の山椒煮、ふっくらした焼きなすなど上品な魚と野菜の小皿を、手頃で豊富な日本酒と焼酎と。ミシュランのビブグルマンに選ばれたとの口コミも。予約を、喫煙可。',
  });
}

// ================================================================ 大衆酒場 照
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040142/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']); const FS = day(['17:00', '00:00']);
  put({
    id: 'kyoto_taishu_sakaba_terasu', name: '大衆酒場 照 京都河原町店 (Taishu Sakaba Terasu)', category: 'OMNI',
    lat: 35.006018, lng: 135.770606, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried chicken and fries lead an all-you-can-eat izakaya menu (2023–25 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried chicken and seafood izakaya dishes (2023–25 reviews).',
    hours_raw: 'Mon–Thu, Sun and holidays 17:00–23:00; Fri, Sat and the day before a holiday 17:00–0:00 (last order food 22:00, drinks 22:30) (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR incl. PayPay (Tabelog). 50 seats; private hire possible (Tabelog). Smoking allowed (Tabelog). A ¥500 charge for leftover food on the all-you-can-eat plan (November 2023). Rinsen Avenue 2F, up the stairs on the Kiyamachi side, about 6 min from Kyoto-Kawaramachi and Gion-Shijo (Tabelog; December 2023). Opened 28 September 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: FS, 5: FS, 6: WD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, north of Shijo — Kyoto-Kawaramachi',
    cuisine: 'A budget izakaya built around all-you-can-eat-and-drink courses (2023–25 reviews) · two-hour all-you-can-eat-and-drink ¥3,000 (December 2023 – June 2024), ¥2,200 (September 2024); beer add-on +¥300 (December 2023) · a heaped starter of fried chicken and fries (November–December 2023) · fried dishes (August 2025) · creative dishes and a large drinks list (Tabelog)',
    website: null, gmaps: gm('大衆酒場 照 京都河原町'), menu_url: TB,
    notes: '[Budget izakaya · Kiyamachi, all-you-can-eat-and-drink] A 50-seat second-floor izakaya off Kiyamachi aimed at groups on a budget: two-hour all-you-can-eat-and-drink courses from about ¥2,200–3,000, starting with a mountain of fried chicken and fries. Reviews call it great value but mixed on service and food quality; ¥500 charge for leftovers. Smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an izakaya opened on 28 September 2023, offering creative dishes at reasonable prices, a large drinks list and value courses, seating 50.',
      philosophy: null, specialty: 'All-you-can-eat-and-drink courses.',
      anecdotes: [
        { text: 'A December 2023 visitor found the shop at the back on the Kiyamachi side, up a staircase, and was greeted with a huge plate of fried chicken.', source: R + 'B475700221/' },
        { text: 'A June 2024 diner warned that the "100 items" include drinks, and that the food tastes reheated.', source: R + 'B487588348/' },
        { text: 'A July 2024 visitor called it unbeatable value in an era of rising prices.', source: R + 'B488096721/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮、中京区下樵木町199-6 Rinsen Avenue 2F、阪急京都河原町駅1A出口・京阪祇園四条駅4番出口から徒歩約6分、月火水木日・祝17:00〜23:00、金土・祝前日17:00〜24:00 (L.O. 料理22:00、ドリンク22:30)、予約可、カード・電子マネー・QR 可、50席、喫煙可、2023年9月28日オープン、こだわりの食材の創作料理と豊富なドリンク、お得なコース。口コミ (2023年11月〜2025年8月、英語): 2時間の食べ放題・飲み放題3,000円、2,200円、ビール+300円、唐揚げとポテトの山盛り、食べ残しは500円、揚げ物、安いが接客や味には賛否。',
      confidence: 'low', sources: [TB, R + 'B475154719/', R + 'B475700221/', R + 'B476615044/', R + 'B479010916/', R + 'B485617557/', R + 'B487588348/', R + 'B487814712/', R + 'B488096721/', R + 'B491914308/', R + 'B492011200/', R + 'B495368556/', R + 'B498858268/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask for the all-you-can-eat-and-drink course; leftovers are charged; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下樵木町199-6 Rinsen Avenue 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review August 2025.' },
    pin_source: `Tabelog ${TB} (35.006018, 135.770666), offset 5.5 m west: kyoto_thai_kitchen_baramee shares the Rinsen Avenue building (1.8 m away); cross-checked: GSI 京都府京都市中京区下樵木町199番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B475700221/', R + 'B492011200/'],
    price_note: 'Course prices from 2023–24 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat-and-drink course (two hours)', '¥2,200–3,000', 'Courses', 'no', 'no', 'December 2023 – September 2024.', 'tabenomi'),
      it('', '', 'Beer upgrade', '+¥300', 'Drinks', '', '', 'December 2023.', 'beer_upgrade'),
      it('', '', 'Leftover charge (all-you-can-eat)', '¥500', 'Charge', '', '', 'November 2023.', 'leftover'),
    ] }, {
    cuisine: '食べ放題・飲み放題のコースが中心の安い居酒屋 (2023〜2025年の口コミ)・2時間の食べ飲み放題3,000円 (2023年12月〜2024年6月)、2,200円 (2024年9月)、ビールは+300円 (2023年12月)・最初に山盛りの唐揚げとポテト (2023年11月〜12月)・揚げ物 (2025年8月)・創作料理と豊富なドリンク (食べログ)',
    neighborhood: '木屋町、四条の北。京都河原町駅',
    gf_detail: 'グルテンフリーではない。唐揚げとポテトが中心の食べ放題の居酒屋 (2023〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。唐揚げや魚介の居酒屋料理 (2023〜2025年の口コミ)。',
    notes: '[安い居酒屋・木屋町、食べ飲み放題] 木屋町から入ったビル2階の50席の居酒屋。2時間の食べ放題・飲み放題が約2,200〜3,000円で、最初に山盛りの唐揚げとポテト。安さは好評だが、接客や味には賛否。食べ残しは500円。喫煙可。',
  });
}

// ================================================================ Sui.
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041366/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_sui_fuyacho', name: 'Sui.', category: 'OMNI',
    lat: 35.002491, lng: 135.765544, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small creative plates — salads, ham, pâté, omelette — but also bruschetta and shepherd\'s pie (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: black-pork ham, pâté, minced-pork salad, beef shepherd\'s pie (2026 reviews).',
    hours_raw: 'Mon, Tue and Thu–Sun 17:00–23:00; closed Wednesday; hours may change (Tabelog). Reservations accepted and advised — often full, even on weekdays (Tabelog; May and October 2026). No service or cover charge (Tabelog, Japanese text: 「サービス料、チャージ料無し」). Cards, e-money and QR accepted (Tabelog). 26 seats: counters and tables downstairs, tatami upstairs (Tabelog; August 2026). Non-smoking (Tabelog). A glass-fronted building on Fuyacho at Ayanokoji, 3 min from Kyoto-Kawaramachi exit 11 (October and September 2026). Opened 8 June 2024 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fuyacho at Ayanokoji — Kyoto-Kawaramachi',
    cuisine: 'Creative, seasonal small plates with wine (2026 reviews) · strawberry and burrata caprese (April 2026) · pâté and bruschetta; its own original beer only (May 2026) · homemade black-pork ham ¥1,500 (August 2026) · spiced vegetable appetizer platter (August 2026) · Lao-style minced pork and herb salad; shepherd\'s pie of Aso grass-fed Akagyu beef; mushroom omelette (October 2026)',
    website: null, gmaps: gm('Sui. 京都 麩屋町'), menu_url: TB,
    notes: '[Creative bistro · Fuyacho, wine and small plates] A glass-walled, art-filled bistro on Fuyacho serving seasonal small plates to share with wine — strawberry and burrata caprese, house black-pork ham, a Lao-style herb salad, Aso Akagyu shepherd\'s pie — plus its own beer. No cover charge. Book ahead; closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a creative restaurant opened in June 2024 near Fuyacho and Ayanokoji. Reviews in 2026 describe a stylish, art-filled interior and seasonal menus.',
      philosophy: null, specialty: 'Seasonal small plates with wine.',
      anecdotes: [
        { text: 'An April 2026 visitor singled out the caprese of strawberries and burrata.', source: R + 'B528115706/' },
        { text: 'A July 2026 diner phoned the same day and was lucky to get a table.', source: R + 'B531702422/' },
        { text: 'A September 2026 first-timer wished the staff could explain the day\'s dishes, as the menu alone said little.', source: R + 'B536089156/' },
      ],
      japanese_sources_summary: '食べログ: 創作料理、下京区塩屋町81-1、京都河原町駅から約310m、月火木金土日17:00〜23:00、水曜休み、予約可、サービス料・チャージ料なし、カード・電子マネー・QR 可、26席 (1階カウンターとテーブル、2階座敷)、禁煙、2024年6月8日オープン。口コミ (2026年3月〜10月、英語): 麩屋町綾小路のガラス張りの建物、アートのある店内、季節の創作料理とワイン、いちごとブッラータのカプレーゼ、パテ、ブルスケッタ、オリジナルのビールのみ、自家製の黒豚のハム1,500円、スパイスの野菜の前菜盛り、ラオス風のハーブと豚ひき肉のサラダ、Aso の Akagyu のシェパーズパイ、きのこのオムレツ、要予約。',
      confidence: 'medium', sources: [TB, R + 'B526911920/', R + 'B528115706/', R + 'B530442805/', R + 'B530986509/', R + 'B531702422/', R + 'B533228567/', R + 'B533558772/', R + 'B534238959/', R + 'B536089156/', R + 'B537065793/', R + 'B537626422/', R + 'B538193678/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ask staff to explain the day\'s dishes; sit downstairs if you can. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区塩屋町81-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002491, 135.765544); cross-checked: GSI 京都府京都市下京区塩屋町81番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533558772/'],
    price_note: 'One price from August 2026; no cover charge.', last_checked: TODAY, items: [
      it('', '', 'Homemade black-pork ham', '¥1,500', 'Small plates', 'ask', 'no', 'August 2026.', 'kurobuta_ham'),
      it('', '', 'Strawberry and burrata caprese', '', 'Small plates', 'ask', 'no', 'April 2026.', 'caprese'),
      it('', '', 'Aso Akagyu shepherd\'s pie', '', 'Mains', 'ask', 'no', 'October 2026.', 'shepherds_pie'),
    ] }, {
    cuisine: 'ワインに合う季節の創作の小皿 (2026年の口コミ)・いちごとブッラータのカプレーゼ (2026年4月)・パテとブルスケッタ、ビールはオリジナルのみ (2026年5月)・自家製の黒豚のハム1,500円 (2026年8月)・スパイスのきいた野菜の前菜盛り (2026年8月)・ラオス風の豚ひき肉とハーブのサラダ、Aso の放牧の Akagyu のシェパーズパイ、きのこのオムレツ (2026年10月)',
    neighborhood: '麩屋町綾小路。京都河原町駅',
    gf_detail: '要確認。サラダ、ハム、パテ、オムレツなどの小皿のほか、ブルスケッタやシェパーズパイもある (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。黒豚のハム、パテ、豚ひき肉のサラダ、牛のシェパーズパイ (2026年の口コミ)。',
    notes: '[創作ビストロ・麩屋町、ワインと小皿] 麩屋町のガラス張りでアートのあるビストロ。季節の小皿をワインと分け合って。いちごとブッラータのカプレーゼ、自家製の黒豚のハム、ラオス風のハーブのサラダ、Aso の Akagyu のシェパーズパイ、オリジナルのビールも。チャージなし。要予約、水曜休み。',
  });
}

// ================================================================ 石丸商店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26018776/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '06:00']);
  put({
    id: 'kyoto_ishimaru_shoten_kiyamachi', name: '石丸商店 (Ishimaru Shoten)', category: 'OMNI',
    lat: 35.005921, lng: 135.770995, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A drinks bar with small snacks — edamame, shrimp crackers, avocado with wasabi soy (2023–25 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Snacks include edamame and avocado (2023–25 reviews); no vegan information.',
    hours_raw: 'Daily 18:00–6:00; hours may change (Tabelog). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR (Tabelog). A dark, narrow counter bar (Tabelog; July 2019). Smoking allowed (Tabelog). In alley 13 off Kiyamachi north of Shijo, toward Pontocho, behind DIY coloured lights (Tabelog; 2019–23 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Alley 13 between Kiyamachi and Pontocho, north of Shijo',
    cuisine: 'Cheap drinks until dawn in a tiny alley bar (2019–26 reviews) · lemon shochu ¥500, shrimp crackers ¥450, avocado with wasabi soy sauce ¥600 (April 2023) · lime highball ¥500 (July 2019) · jasmine shochu with green tea, hot sake, edamame (February 2025)',
    website: null, gmaps: gm('石丸商店 木屋町 バー'), menu_url: TB,
    notes: '[Bar · Kiyamachi alley 13, open till 6 am] A tiny, dark counter bar down a narrow lane between Kiyamachi and Pontocho, marked by DIY coloured lights and painted walls, pouring ¥500 lemon shochu and highballs with cheap snacks until dawn. Cash only; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) behind the bar (January 2023)'], origin: null,
      background: 'Per Tabelog: a bar on Kiyamachi north of Shijo, open from 18:00 to 6:00. Reviews from 2015 to 2026 describe a small, dark counter bar with home-made coloured lights in alley 13, run by a friendly owner.',
      philosophy: null, specialty: 'Cheap drinks until dawn.',
      anecdotes: [
        { text: 'A January 2023 visitor followed the home-made coloured lights down the lane and found a friendly owner behind the bar.', source: R + 'B459684308/' },
        { text: 'A February 2025 visitor dropped in at 2 am on a Sunday and found it nearly full.', source: R + 'B500911872/' },
        { text: 'A February 2020 group of old university friends compared the entrance art to Aboriginal painting, Van Gogh or Munch.', source: R + 'B425148403/' },
      ],
      japanese_sources_summary: '食べログ: バー、中京区木屋町通四条上る13番地路地東入る、毎日18:00〜翌6:00、予約可、現金のみ、カウンター、喫煙可。口コミ (2015年6月〜2026年10月、英語): 木屋町と先斗町の間の13番路地、手作りの色とりどりの電飾、暗く細長い店内、気さくな店主、レモンの焼酎500円、えびせん450円、アボカドのわさび醤油600円、ライムハイボール500円、ジャスミン焼酎の緑茶割り、熱燗、枝豆、深夜も満席に近い。',
      confidence: 'medium', sources: [TB, R + 'B115919049/', R + 'B194129898/', R + 'B375054642/', R + 'B417129061/', R + 'B419879664/', R + 'B425148403/', R + 'B455390101/', R + 'B459684308/', R + 'B461809520/', R + 'B472988065/', R + 'B500911872/', R + 'B536659350/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Look for the coloured lights in alley 13; cash only; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町通四条上る13番地路地東入る',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005921, 135.770995); the address has no lot number GSI can resolve (ward only), so the Tabelog pin is kept as approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B455390101/', R + 'B417129061/'],
    price_note: 'Prices from 2019 and 2023 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Lemon shochu', '¥500', 'Drinks', 'ask', 'ask', 'April 2023.', 'lemon_shochu'),
      it('', '', 'Shrimp crackers', '¥450', 'Snacks', 'no', 'no', 'April 2023.', 'ebi_senbei'),
      it('', '', 'Avocado with wasabi soy sauce', '¥600', 'Snacks', 'ask', 'ask', 'April 2023.', 'avocado'),
    ] }, {
    cuisine: '小さな路地のバーで朝まで手頃なお酒 (2019〜2026年の口コミ)・レモンの焼酎500円、えびせん450円、アボカドのわさび醤油600円 (2023年4月)・ライムハイボール500円 (2019年7月)・ジャスミン焼酎の緑茶割り、熱燗、枝豆 (2025年2月)',
    neighborhood: '木屋町と先斗町の間の13番路地、四条の北',
    gf_detail: '要確認。枝豆、えびせん、アボカドのわさび醤油などの小皿のある飲み屋 (2023〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。枝豆やアボカドのつまみ (2023〜2025年の口コミ)。ヴィーガンの情報はない。',
    notes: '[バー・木屋町の13番路地、朝6時まで] 木屋町と先斗町の間の細い路地の奥、手作りの電飾と絵の描かれた壁が目印の小さな暗いカウンターのバー。500円のレモンの焼酎やハイボールと手頃なつまみで夜明けまで。現金のみ、喫煙可。',
  });
}

save();
