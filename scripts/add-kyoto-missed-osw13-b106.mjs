// Kyoto priority (kyoto-missed), worker osw13, batch 106 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 六角ちきりや茶舗, 花かがみ, KOETO SOETO, 初代 鰻すみと.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-106');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26003286', 'chain: 五右衛門 ゼスト御池店 is a branch of the pasta chain 洋麺屋五右衛門 — past 200 shops in Japan by 2010 (value-press.com release, 2011); its operator 日本レストランシステム runs about 670 shops in some 20 formats (en-gage.net recruiting page, May 2026)');

// ================================================================ 六角ちきりや茶舗
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26016360/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_rokkaku_chikiriya_chaho', name: '六角ちきりや茶舗 (Rokkaku Chikiriya Chaho)', category: 'OMNI',
    lat: 35.007444, lng: 135.761345, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the teas themselves (matcha, hojicha) are the focus; the sweets include parfaits with cornflakes and cookies, yatsuhashi on the soft serve, and tea soba (2022–2026 reviews), so most desserts contain wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: matcha and hojicha by the cup are plant-based; the parfaits and soft serve contain ice cream and cream (2022–2026 reviews). Zenzai and warabi mochi were not described.',
    hours_raw: 'Tabelog: Mon–Sat 10:00–17:00 (food L.O. 16:30); closed Sunday, Obon and New Year; open on some public holidays in peak seasons — check Instagram Stories. Reservations taken. Cards, IC cards, e-money and QR. 14 seats in the 2nd-floor café; tea sold and take-out drinks at the 1st-floor counter. Non-smoking. Children welcome. Rokkaku-dori just east of Higashinotoin, 3 min walk from Karasuma-Oike exit 5. Run by 有限会社六角ちきりや茶舗 (NTA invoice register).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokkaku-dori east of Higashinotoin — 3 min walk from Karasuma-Oike',
    cuisine: 'An old tea merchant with a quiet second-floor café for matcha, hojicha and tea sweets (Tabelog; 2022–2026 reviews) · hojicha parfait ¥900 with ice cream, shiratama, red bean, warabi mochi and cornflakes (March 2022) · matcha parfait (2023; 2025) · matcha set with a sweet ¥1,000 (November 2024) · soft-serve mix cup with yatsuhashi ¥400 (July 2025) · matcha and zenzai (March 2024) · rich matcha ice cream (September 2024) · warabi mochi (March 2026) · tea soba, ozoni and anmitsu on the menu (January 2026)',
    website: null, gmaps: gm('六角ちきりや茶舗'), menu_url: TB + 'dtlmenu/',
    notes: '[Tea shop café · Rokkaku-dori near Karasuma-Oike, an old tea merchant\'s upstairs room] A tea merchant of over 110 years with a calm café upstairs: matcha with a sweet for ¥1,000, generous hojicha and matcha parfaits about ¥900, and tea soft serve to go from the shop counter. Usually uncrowded. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Tea merchant (有限会社六角ちきりや茶舗)'], origin: null,
      background: 'Tabelog\'s remarks call it a small tea shop in business for over 110 years; the café opened on 13 July 2010 and was renovated in October 2019. A January 2026 reviewer writes that Chikiriya dates from the first year of Ansei. Reviewers describe warm staff, a quiet café that rarely has a queue, and the shop on the 1st floor. Criticism: the warabi mochi was average (March 2026); parfait ice cream melts quickly (September 2025).',
      philosophy: null,
      specialty: 'Matcha and hojicha parfaits; matcha set.',
      anecdotes: [
        { text: 'July 2026: "I braced myself for a crowd, considering it was a holiday afternoon around 3 PM in Kyoto, but to my surprise, there were no customers at all."', source: R + 'B534275729/' },
        { text: 'September 2024: "It truly has the deep flavor of matcha; it felt like I was enjoying matcha itself in ice cream form."', source: R + 'B492684884/' },
      ],
      japanese_sources_summary: '食べログ: 六角ちきりや茶舗、カフェ、中京区六角通東洞院東入三文字町226-2、地下鉄烏丸御池駅5番出口から徒歩3分、月〜土10:00〜17:00 (料理L.O.16:30)、日曜休み、お盆・年末年始休み、繁忙期は祝日も営業 (Instagramのストーリーで告知)、予約可、カード・交通系IC・電子マネー・QR可、14席、禁煙、子供可、テイクアウト、創業110年以上の小さなお茶屋、喫茶は2010年7月13日開始、2019年10月に改装。インボイス登録は有限会社六角ちきりや茶舗。口コミ (2022年3月〜2026年7月、英語): 1階は茶の販売、2階が喫茶、ほうじ茶パフェ900円、抹茶パフェ、抹茶セット (お菓子付き) 1,000円、八ッ橋入りのソフトクリームミックス400円、抹茶とぜんざい、濃い抹茶アイス、わらび餅、茶そば・お雑煮・あんみつ、安政元年創業との記載 (2026年1月)、混んでいない、わらび餅は普通との声 (2026年3月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B447260782', 'B463533413', 'B485541686', 'B488398069', 'B492684884', 'B495480895', 'B510164666', 'B514128946', 'B521521628', 'B525526397', 'B534275729'])) },
    cultural_comfort: { level: 'japanese', note: 'Quiet tea-shop café; cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区六角通東洞院東入三文字町226-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated January, March and July 2026.' },
    pin_source: `Tabelog ${TB} (35.007444, 135.761345); GSI lot 京都府京都市中京区三文字町226番地 about 53m away; nearest pin kyoto_mannaka_higashinotoin 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B447260782/', R + 'B495480895/', R + 'B510164666/'],
    price_note: 'Prices from 2022–2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hojicha parfait', '¥900', 'Sweets', 'no', 'no', 'March 2022; February 2025.', 'hojicha_parfait'),
      it('', '', 'Matcha set with a sweet', '¥1,000', 'Tea', 'ask', 'ask', 'November 2024.', 'matcha_set'),
      it('', '', 'Soft-serve mix cup (matcha and hojicha, with yatsuhashi)', '¥400', 'Sweets', 'no', 'no', 'July 2025.', 'softserve_mix'),
      it('', '', 'Matcha parfait', null, 'Sweets', 'no', 'no', 'April 2023; September 2025.', 'matcha_parfait'),
    ] }, {
    cuisine: '2階に静かな喫茶のある老舗のお茶屋。抹茶、ほうじ茶とお茶の甘味 (食べログ、2022〜2026年の口コミ)・アイス、白玉、あんこ、わらび餅、コーンフレークのほうじ茶パフェ900円 (2022年3月)・抹茶パフェ (2023年・2025年)・お菓子付きの抹茶セット1,000円 (2024年11月)・八ッ橋入りのソフトクリームミックス400円 (2025年7月)・抹茶とぜんざい (2024年3月)・濃い抹茶アイス (2024年9月)・わらび餅 (2026年3月)・茶そば、お雑煮、あんみつ (2026年1月)',
    neighborhood: '東洞院の東の六角通。烏丸御池から徒歩3分',
    gf_detail: '要確認: 主役は抹茶とほうじ茶。甘味はコーンフレークやクッキー入りのパフェ、八ッ橋入りのソフトクリーム、茶そばなどで (2022〜2026年の口コミ)、多くの甘味に小麦が入る。',
    vegan_detail: '要確認: 抹茶とほうじ茶そのものは植物性。パフェとソフトクリームにはアイスやクリーム (2022〜2026年の口コミ)。ぜんざいとわらび餅の説明はなし。',
    notes: '[お茶屋の喫茶・烏丸御池近くの六角通、老舗茶舗の2階] 創業110年以上のお茶屋の2階の落ち着いた喫茶。お菓子付きの抹茶1,000円、たっぷりのほうじ茶・抹茶パフェ900円ほど、1階ではお茶のソフトクリームを持ち帰りで。たいてい空いている。日曜休み。',
  });
}

// ================================================================ 花かがみ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036832/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:30'], ['17:00', '20:00']);
  put({
    id: 'kyoto_hanakagami_rokuhara', name: '京料理 花かがみ (Hana Kagami)', category: 'OMNI',
    lat: 34.997752, lng: 135.774471, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: obanzai set meals with dashi-based dishes, beef stew, tempura, tempura zaru soba and nishin soba (2023–2026 reviews). The shop says it handles allergies as far as it can, but some dishes, such as those using dashi, cannot be changed: 「アレルギー等にも可能な限り対応致します（一部出汁など対応不可のお料理がございます）」 (hanakagami.co.jp).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled fish, rolled omelet, beef stew and dashi in the obanzai set; a yudofu set exists, but its broth was not described (2023–2026 reviews).',
    hours_raw: 'Official site (hanakagami.co.jp): lunch 11:00–14:30 (L.O. 14:00 from October 2026), dinner 17:00–20:00 (L.O. 19:00); closed Wednesday, with extra closures and private bookings posted on the site; same-day and next-day bookings by phone only. Tabelog lists daily 11:00–15:00 and 17:00–21:30 — the site is newer. Kaiseki (from ¥7,000) and suppon hot pot by reservation only. Cards. Four tables, 16 seats. On Matsubara-dori near Rokuharamitsu-ji; 12 min walk from Kiyomizu-Gojo. Moved here from Kiyomizu in summer 2021.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokuhara, Matsubara-dori by Rokuharamitsu-ji — 12 min walk from Kiyomizu-Gojo',
    cuisine: 'A small Kyoto restaurant of good-value obanzai lunches and kaiseki by reservation, moved from Kiyomizu in 2021 (hanakagami.co.jp; Tabelog; 2023–2026 reviews) · Kyoto obanzai set ¥1,400 (November 2024), ¥1,500 (2025–2026) — grilled fish, rolled omelet, sesame tofu, small beef stew, simmered greens and hijiki · beef stew set ¥1,700 (August 2025) · Hana Kagami bento with sashimi and fresh yuba, tempura, tsukudani, grilled fish (September 2026) · yudofu set; tempura set (February 2026) · tempura zaru soba ¥1,800 (site, February 2026); nishin soba (July 2023) · suppon hot-pot set ¥4,000 lunch, ¥4,500 dinner, by reservation (site) · kaiseki from ¥7,000 by arrangement',
    website: 'https://www.hanakagami.co.jp/', gmaps: gm('京料理 花かがみ 六原'), menu_url: TB + 'dtlmenu/',
    notes: '[Obanzai & Kyoto cuisine · Rokuhara near Rokuharamitsu-ji, a four-table dining room] A tiny traditional room on Matsubara-dori serving colourful obanzai lunch sets (about ¥1,500, with a dab of beef stew), bento and soba, plus kaiseki and suppon hot pot by reservation. Book ahead — only 16 seats. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'The site says the cooking is by a craftsman who learned Japanese cuisine from the basics, and that the restaurant moved from Kiyomizu to Rokuhara in summer 2021, keeping its popular dishes in a four-table room. Reviewers describe kind service, an owner and hostess, autumn leaves on the plates (October 2025) and many overseas guests. Criticism: a May 2025 reviewer lost a 1 pm booking after arriving about 15 minutes late on the restaurant\'s own advice, and was told it was the diner\'s fault before the hostess later apologized.',
      philosophy: '「常にお客様においしいものを食べていただきたいという心を持って料理をつくる」 — always cook with the wish that guests eat something delicious (hanakagami.co.jp).',
      specialty: 'Obanzai set; beef stew; kaiseki by reservation.',
      anecdotes: [
        { text: 'November 2024: "The meal included grilled fish, Japanese omelette, shrimp beans, yuzu miso sauce with shrimp tuber, sesame tofu, beef stew, simmered komatsuna (Japanese mustard spinach), simmered hijiki, rice, clear soup, and pickles."', source: R + 'B495169620/' },
        { text: 'October 2025: "What particularly impressed me was the use of real autumn leaves on the plates."', source: R + 'B517902755/' },
      ],
      japanese_sources_summary: '公式サイト (hanakagami.co.jp): 京料理 花かがみ、東山区轆轤町103-1、松原通沿い、六波羅蜜寺のすぐ近く、清水五条から徒歩12分、昼11:00〜14:30 (2026年10月よりL.O.14:00)・夜17:00〜20:00 (L.O.19:00)、水曜定休、臨時休業・貸切あり、前日・当日の予約は電話のみ、令和3年夏に清水から移転、テーブル4つで16名、会席 (7,000円〜) とすっぽん鍋は予約のみ、すっぽん鍋定食 昼4,000円・夜4,500円、天ざるそば1,800円、「アレルギー等にも可能な限り対応致します（一部出汁など対応不可のお料理がございます）」、お節の注文受付。食べログ: 和食、カード可。口コミ (2023年7月〜2026年9月、英語): 京のおばんざい定食1,400〜1,500円 (焼き魚、だし巻き、ごま豆腐、ビーフシチュー、小松菜、ひじき)、ビーフシチュー定食1,700円、花かがみ弁当 (刺身と生湯葉、天ぷら、佃煮、焼き魚)、湯豆腐定食、天ぷら定食、にしんそば、もみじを添えた盛り付け (2025年10月)、予約の行き違いへの不満 (2025年5月)。',
      confidence: 'medium', sources: [TB, 'https://www.hanakagami.co.jp/'].concat(rv(R, ['B468025820', 'B478480438', 'B482396846', 'B495169620', 'B499638513', 'B510980662', 'B512411402', 'B517902755', 'B522099042', 'B529199194', 'B532099313', 'B536006377'])) },
    cultural_comfort: { level: 'japanese', note: 'Only 16 seats — book by phone; the shop will try to adapt dishes for allergies, except some dashi-based ones (official site).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Official site: will accommodate allergies as far as possible, but some dishes, such as those using dashi, cannot be changed.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区轆轤町103-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site updated 6 November 2026; Tabelog reviews dated July and September 2026.' },
    pin_source: `Tabelog ${TB} (34.997752, 135.774471); GSI lot 京都府京都市東山区轆轤町103番地 about 14m away; nearest pin kyoto_korisu 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512411402/', R + 'B529199194/', 'https://www.hanakagami.co.jp/'],
    price_note: 'Set prices from 2025–2026 reviews; soba and suppon prices from the official site.', last_checked: TODAY, items: [
      it('', '', 'Kyoto obanzai set meal', '¥1,500', 'Set', 'no', 'no', 'August 2025; May and July 2026.', 'obanzai_teishoku'),
      it('', '', 'Beef stew set meal', '¥1,700', 'Set', 'no', 'no', 'August 2025.', 'beef_stew_set'),
      it('', '', 'Tempura zaru soba', '¥1,800', 'Noodles', 'no', 'no', 'Official site, February 2026.', 'ten_zaru_soba'),
      it('', '', 'Suppon hot-pot set (by reservation)', '¥4,000 lunch / ¥4,500 dinner', 'Set', 'no', 'no', 'Official site.', 'suppon_nabe_set'),
      it('', '', 'Hana Kagami bento', null, 'Set', 'no', 'no', 'September 2026.', 'hanakagami_bento'),
    ] }, {
    cuisine: '手頃なおばんざいの昼と予約制の会席の小さな京料理店。2021年に清水から移転 (公式サイト、食べログ、2023〜2026年の口コミ)・京のおばんざい定食1,400円 (2024年11月)、1,500円 (2025〜2026年): 焼き魚、だし巻き、ごま豆腐、少しのビーフシチュー、青菜の煮物、ひじき・ビーフシチュー定食1,700円 (2025年8月)・刺身と生湯葉、天ぷら、佃煮、焼き魚の花かがみ弁当 (2026年9月)・湯豆腐定食、天ぷら定食 (2026年2月)・天ざるそば1,800円 (公式サイト、2026年2月)、にしんそば (2023年7月)・すっぽん鍋定食 昼4,000円・夜4,500円 (予約制、公式サイト)・会席は7,000円から要相談',
    neighborhood: '六波羅蜜寺そばの松原通、六原。清水五条から徒歩12分',
    gf_detail: 'グルテンフリーではない: だしの料理、ビーフシチュー、天ぷら、天ざるそば、にしんそばの定食 (2023〜2026年の口コミ)。公式サイトでは「アレルギー等にも可能な限り対応致します（一部出汁など対応不可のお料理がございます）」。',
    vegan_detail: 'ヴィーガン不可: おばんざい定食に焼き魚、だし巻き、ビーフシチュー、だし。湯豆腐定食もあるが、だしの説明はなし (2023〜2026年の口コミ)。',
    notes: '[おばんざいと京料理・六波羅蜜寺近くの六原、テーブル4つの店] 松原通の小さな和の部屋で、彩りのよいおばんざい定食 (1,500円ほど、ビーフシチュー付き)、弁当やそば、予約で会席やすっぽん鍋も。16席だけなので予約を。水曜休み。',
  });
}

// ================================================================ KOETO SOETO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044002/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:30', '17:30']);
  put({
    id: 'kyoto_koeto_soeto_senbei', name: 'KOETO SOETO', category: 'OMNI',
    lat: 35.009204, lng: 135.774822, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: rice-cracker (senbei) dishes and rice-flour pancakes (2026 reviews), but the crackers come in flavors such as white miso, green-onion miso, curry and wasabi mayo, and the dashi chazuke and mitarashi sauce were not described — soy and wheat are likely in several.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: a matcha soy-milk pudding is on the menu, and many crackers are plant-based flavors; the pancakes come with vanilla ice cream, the crackers include garlic shrimp, and the chazuke dashi was not described (2026 reviews).',
    hours_raw: 'Tabelog: daily 9:30–17:30; closed on irregular days — check Google Maps or Instagram. No reservations. Cards, IC cards, e-money and QR (incl. Alipay, WeChat Pay). 20 table seats; private hire up to 20. Non-smoking. English menu and English-speaking staff; photo menu. Children welcome, with kids\' drinks and ice cream and three children\'s chairs. Take-out; 16 kinds of senbei for sale. 2 min from Sanjo Keihan subway exit 2, 3 min from Keihan Sanjo exit 5. Opened 19 October 2025.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo east of the Kamo River — 2 min walk from Sanjo Keihan',
    cuisine: 'A rice-cracker café opened in October 2025: senbei by the bite with dipping sauces, senbei onigiri and senbei dashi chazuke, plus matcha sweets (Tabelog; 2026 reviews) · senbei and dashi chazuke ¥800 (April 2026) · Uji matcha pancakes of rice flour with vanilla ice cream, matcha cream and caramelized black-sesame crackers ¥1,200 (May 2026; weekend only per a July 2026 review) · Uji matcha latte (two crackers come with a drink); Kyoto hojicha latte · Uji matcha soy-milk pudding; mitarashi milk ice cream · 16 senbei flavors, e.g. salt lemon, shichimi, plum zarame, garlic shrimp, curry',
    website: null, gmaps: gm('KOETO SOETO 三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Senbei café · Sanjo by the Kamo River, a rice-cracker tearoom] A bright new café built around rice crackers: rice-flour matcha pancakes crunchy with sesame senbei, senbei dashi chazuke for ¥800, senbei onigiri and matcha lattes, with 16 flavors of senbei to take home. English spoken. Open daily from 9:30.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 19 October 2025 (Tabelog). A May 2026 reviewer writes that the pancakes are made by a long-established rice-cracker maker, "Kyoshikaroku" (romaji as given); the NTA invoice register lists the operator as 池本車体工業株式会社. Reviewers describe a calm, modern room, kind staff who offer samples, many overseas visitors and school groups after a TV feature (July 2026). Criticism: one reviewer found the milk ice cream ordinary (May 2026).',
      philosophy: null,
      specialty: 'Senbei dishes; Uji matcha rice-flour pancakes.',
      anecdotes: [
        { text: 'June 2026: "This dish features fragrant negi miso rice crackers served with hot dashi poured over rice. The rice crackers gradually absorb the dashi, transforming in texture and flavor."', source: R + 'B530207355/' },
        { text: 'April 2026: "I was considering buying some rice crackers, and while I was pondering, I was offered a sample."', source: R + 'B525621119/' },
      ],
      japanese_sources_summary: '食べログ: KOETO SOETO、カフェ・せんべい、東山区二町目60、地下鉄三条京阪駅2番出口から徒歩2分・京阪三条駅5番出口から徒歩3分、毎日9:30〜17:30、不定休 (Googleマップ・Instagramで告知)、予約不可、カード・交通系IC・電子マネー・QR可、20席、貸切20名まで、禁煙、英語メニュー・英語対応スタッフ、写真付きメニュー、子供可 (子供用ドリンク・アイス、子供椅子3脚)、テイクアウト、2025年10月19日オープン、せんべいおにぎりやせんべい出汁茶漬けなど、せんべいを楽しむカフェ。インボイス登録は池本車体工業株式会社 (国税庁)。口コミ (2026年4月〜7月、英語): せんべいと出汁茶漬け800円、米粉の宇治抹茶パンケーキ1,200円 (バニラアイス、抹茶クリーム、黒ごませんべい、週末限定との記載)、宇治抹茶ラテ (ドリンクにせんべい2枚)、ほうじ茶ラテ、宇治抹茶豆乳プリン、みたらしミルクアイス、16種のせんべい (塩レモン、七味、梅ざらめ、ガーリックシュリンプ、カレーなど)、試食あり、海外の客や修学旅行生が多い。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5130001032306'].concat(rv(R, ['B525621119', 'B526521155', 'B527042958', 'B528284406', 'B528309651', 'B528343339', 'B528414547', 'B530191213', 'B530207355', 'B530415566', 'B530495265', 'B531489007'])) },
    cultural_comfort: { level: 'english_friendly', note: 'English menu and English-speaking staff (Tabelog); samples offered.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区二町目60',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 19 October 2025) with reviews dated April to July 2026.' },
    pin_source: `Tabelog ${TB} (35.009204, 135.774822); GSI lot 京都府京都市東山区二町目60番地 about 35m away; nearest pin kyoto_bistro_wine_espace 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526521155/', R + 'B528414547/'],
    price_note: 'Prices from April and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Senbei and dashi chazuke', '¥800', 'Rice', 'ask', 'ask', 'April and June 2026.', 'senbei_chazuke'),
      it('', '', 'Uji matcha pancakes (rice flour)', '¥1,200', 'Sweets', 'ask', 'no', 'May 2026.', 'matcha_pancakes'),
      it('', '', 'Senbei onigiri', null, 'Rice', 'ask', 'ask', 'May 2026.', 'senbei_onigiri'),
      it('', '', 'Uji matcha soy-milk pudding', null, 'Sweets', 'ask', 'ask', 'April and June 2026.', 'matcha_soy_pudding'),
    ] }, {
    cuisine: '2025年10月オープンのせんべいカフェ。ひと口せんべいとディップ、せんべいおにぎり、せんべい出汁茶漬け、抹茶の甘味 (食べログ、2026年の口コミ)・せんべいと出汁茶漬け800円 (2026年4月)・米粉の宇治抹茶パンケーキ、バニラアイス、抹茶クリーム、キャラメリゼした黒ごませんべい1,200円 (2026年5月、2026年7月の口コミでは週末限定)・宇治抹茶ラテ (ドリンクにせんべい2枚)、京都ほうじ茶ラテ・宇治抹茶豆乳プリン、みたらしミルクアイス・塩レモン、七味、梅ざらめ、ガーリックシュリンプ、カレーなど16種のせんべい',
    neighborhood: '鴨川の東の三条。三条京阪から徒歩2分',
    gf_detail: '要確認: せんべいの料理と米粉のパンケーキ (2026年の口コミ)。ただしせんべいには白みそ、ねぎみそ、カレー、わさびマヨなどの味があり、出汁茶漬けとみたらしの説明はなく、しょうゆや小麦が入るものが多いと考えられる。',
    vegan_detail: '要確認: 抹茶の豆乳プリンがあり、植物性の味のせんべいも多い。パンケーキにはバニラアイス、せんべいにはガーリックシュリンプもあり、出汁の説明はなし (2026年の口コミ)。',
    notes: '[せんべいカフェ・鴨川そばの三条、おせんべいの喫茶] せんべいが主役の明るい新しいカフェ。黒ごませんべいがのった米粉の抹茶パンケーキ、800円のせんべい出汁茶漬け、せんべいおにぎり、抹茶ラテ、持ち帰りに16種のせんべい。英語可。毎日9時半から。',
  });
}

// ================================================================ 初代 鰻すみと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041698/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '14:00']; const HF = day(L, ['17:00', '20:00']); const HS = day(L);
  put({
    id: 'kyoto_shodai_unagi_sumito', name: '初代 鰻すみと (Shodai Unagi Sumito)', category: 'OMNI',
    lat: 35.009268, lng: 135.775235, cuisine_type: 'unagi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the eel sauce is made with tamari (December 2025; July 2026 reviews) but no reviewer or listing says it is wheat-free, and the sides include fu in the liver soup (July 2026). Ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant (2024–2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sat, holidays and the days before and after them 11:00–14:00 and 17:00–20:00; Sunday 11:00–14:00 only; closed Monday; occasional closures for events. Reservations taken; dinner by phone; unagi-maki must be ordered ahead (not same day); unaju takes about 30 min; arriving more than 10 min late cancels the booking; no-show fee; groups of 4+ cannot choose seats; no outside food or drink. No seat or otoshi charge — Tabelog, Japanese original 「席料・お通し料金なし」. 15 seats: 7 at the counter, two tables for 4. Non-smoking. Cards, IC, PayPay. Children welcome. B1F of a building on the south side of Sanjo east of Sanjo Keihan (December 2025 review); 1 min from Sanjo Keihan subway. Opened 14 August 2024.',
    hours: { 1: HF, 2: HF, 3: HF, 4: HF, 5: HF, 6: HS }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo east of the Kamo River — 1 min walk from Sanjo Keihan',
    cuisine: 'A young chef\'s charcoal unagi counter: Edo-style steamed-then-grilled unaju and direct-grilled hitsumabushi, with tamari-rich sauce (Tabelog; 2024–2026 reviews) · special unaju (1.5 eels); premium unaju (one eel) with liver soup · grilled liver; shirayaki; unagi-maki by advance order · starters of simmered pumpkin, lotus stem and sweetfish tsukudani · Edo-yaki (April 2026) · sake such as Sasaki Shuzo\'s "Koto" (August 2026)',
    website: 'https://unagi-sumito.com/', gmaps: gm('初代 鰻すみと 三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Unagi · Sanjo east of the Kamo, a basement charcoal counter] A small, serious eel counter where eels are steamed and charcoal-grilled to order in the Kanto (Edo) style, glossed with a rich tamari sauce, or grilled straight for hitsumabushi. About ¥5,000–8,000; book ahead and allow 30 minutes. Closed Monday; Sunday lunch only.',
    chef_bio: { chef_name: null, roles: ['Chef-owner (unnamed)'], origin: null,
      background: 'Opened 14 August 2024 (Tabelog). An August 2024 reviewer writes that the owner trained for years in Shizuoka; a July 2026 reviewer describes a young, humble chef, and an August 2026 reviewer mentions pleasant service from the wife. Eels from Aichi on one 2024 visit. Criticism: the sauce is strong for those who prefer light soy (December 2024); the pickles were a little salty (July 2026).',
      philosophy: null,
      specialty: 'Edo-style unaju; hitsumabushi; grilled liver.',
      anecdotes: [
        { text: 'August 2024: "After years of training in Shizuoka, the owner has finally launched this establishment… They follow the Edo-style process that includes steaming, resulting in an incredibly beautiful unaju!"', source: R + 'B490633235/' },
        { text: 'August 2026: "The eel was prepared in advance and grilled after the order was placed, so I enjoyed sipping my drink while watching the chef grill it over charcoal."', source: R + 'B534150469/' },
      ],
      japanese_sources_summary: '食べログ: 初代 鰻すみと、うなぎ、東山区三条大橋東2-51 B1F、地下鉄三条京阪駅から東へ徒歩約1分、火〜土・祝日・祝日の前日と翌日11:00〜14:00・17:00〜20:00、日曜11:00〜14:00、月曜休み、催事で休むことあり、予約可 (夜は電話で相談)、う巻きは要予約で当日不可、肝焼きは数量限定、うな重は約30分、10分以上の遅刻はキャンセル扱い、原文で「席料・お通し料金なし」、15席 (カウンター7・4名テーブル2)、禁煙、カード・交通系IC・PayPay可、子供可、公式サイト unagi-sumito.com、2024年8月14日オープン。口コミ (2024年8月〜2026年9月、英語・日本語): 関東風の蒸し焼きのうな重 (特上1.5尾、上1尾)、直焼きのひつまぶし、たまりのタレ、肝焼き、白焼き、う巻き、かぼちゃ・蓮・鮎の佃煮の前菜、肝吸い、静岡で修業した店主 (2024年8月)、若く謙虚な料理人 (2026年7月)、奥さんの接客 (2026年8月)、内装はモダンでレゲエが流れる (2025年12月)、タレが濃いとの声 (2024年12月)。',
      confidence: 'medium', sources: [TB, 'https://unagi-sumito.com/'].concat(rv(R, ['B490633235', 'B493402383', 'B497051992', 'B498971734', 'B499498996', 'B518701407', 'B525655391', 'B528972524', 'B531846764', 'B534150469', 'B536166308'])) },
    cultural_comfort: { level: 'japanese', note: 'Book ahead; unaju takes about 30 min; lateness of 10+ min cancels the booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区三条大橋東2-51 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated July, August and September 2026.' },
    pin_source: `Tabelog ${TB} (35.009268, 135.775235); GSI cannot resolve 三条大橋東2-51 (it falls back to the town 三吉町) — marked approximate; nearest pin kyoto_bistro_wine_espace 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490633235/', R + 'B534150469/'],
    price_note: 'No item prices in reviews; Tabelog averages ¥5,000–7,999.', last_checked: TODAY, items: [
      it('', '', 'Special unaju (1.5 eels, Edo style)', null, 'Unagi', 'no', 'no', 'August 2024; June and December 2025.', 'unaju_tokujo'),
      it('', '', 'Premium unaju (one eel) with liver soup', null, 'Unagi', 'no', 'no', 'October 2024; August 2026.', 'unaju_jo'),
      it('', '', 'Hitsumabushi (direct-grilled)', null, 'Unagi', 'no', 'no', 'October 2024; August 2026.', 'hitsumabushi'),
      it('', '', 'Grilled liver (limited)', null, 'Unagi', 'no', 'no', '2025–2026.', 'kimoyaki'),
    ] }, {
    cuisine: '若い料理人の炭火のうなぎのカウンター。蒸してから焼く江戸前のうな重と、直焼きのひつまぶし、たまりの濃いタレ (食べログ、2024〜2026年の口コミ)・特上うな重 (1.5尾)、上うな重 (1尾) と肝吸い・肝焼き、白焼き、う巻き (要予約)・かぼちゃの炊いたん、蓮、鮎の佃煮の前菜・江戸焼き (2026年4月)・日本酒 (2026年8月)',
    neighborhood: '鴨川の東の三条。三条京阪から徒歩1分',
    gf_detail: 'グルテンフリーではない: うなぎのタレはたまりを使う (2025年12月・2026年7月の口コミ) が、小麦不使用との記載はなく、肝吸いには麩 (2026年7月)。要確認。',
    vegan_detail: 'ヴィーガン不可: うなぎ料理の店 (2024〜2026年の口コミ)。',
    notes: '[うなぎ・鴨川の東の三条、地下の炭火カウンター] 注文を受けてから蒸して炭火で焼く関東 (江戸) 風のうなぎを、濃いたまりのタレで。直焼きのひつまぶしも。5,000〜8,000円ほど。予約を、30分ほどかかる。月曜休み、日曜は昼のみ。',
  });
}

save();
