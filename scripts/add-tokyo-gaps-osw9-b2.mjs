// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 2.
//   + 完全個室居酒屋 九州さつき 六本木店 Kyushu Satsuki (100-seat private-room Kyushu izakaya, same building as Sushi Sueyoshi)
//   + 和牛焼肉 炭治郎 六本木店 Wagyu Yakiniku Tanjiro (all-you-can-eat wagyu yakiniku above the Roppongi crossing, opened April 2025)
//   + 六本木きんめ鮨 Roppongi Kinme Sushi (8-seat counter: omakase with free nigiri refills and all-you-can-drink)
//   + Burger Revolution Tokyo Wine & Bar 六本木店 (100% black-wagyu burgers with Kobe, Tokyo and halal patties)
//   Skipped: 銀座蕎麦うどんしら石 六本木店 13306025 — the official site's operator page lists J.Group companies including
//   Assets name Innovation株式会社, which runs 大阪つけ麺しら石 (osaka_tsukemen_shiraishi_namba, website
//   "https://tsukemen.assets-name-innovation.co.jp/"): the しら石 brand is already in data.
//   Chain check. Kyushu Satsuki: a second branch, 錦糸町店, on Gurunavi; not in data. Tanjiro: a 渋谷本店 on Gurunavi; not in
//   data. Kinme Sushi: one listing, no branches found. Burger Revolution: Roppongi only, not in data. None is in
//   data/tokyo.json by name, Tabelog id or address (六本木3-11-10 4F, 7-14-11, 3-9-4, 5-9-22). Kyushu Satsuki shares
//   六本木3-11-10 ココ六本木ビル with tokyo_sushi_sueyoshi_roppongi (address_ja "東京都港区六本木3-11-10 ココ六本木ビル 1F",
//   pinned 35.6633, 139.732973), so its pin is offset. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13306025', '銀座蕎麦うどんしら石 六本木店: しら石 brand of J.Group (operator page lists Assets name Innovation株式会社, which runs 大阪つけ麺しら石 = osaka_tsukemen_shiraishi_namba, already in data)');

// ================================================================ 九州さつき 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13199319/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const GN = 'https://r.gnavi.co.jp/c78w3k4z0000/';
  const H = day(['12:00', '00:00']);
  put({
    id: 'tokyo_kyushu_satsuki_roppongi', name: '完全個室居酒屋 九州さつき 六本木店 (Kyushu Satsuki Roppongi)', category: 'OMNI',
    lat: 35.663392, lng: 139.732937, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. The menu leans on fried food (fried oysters, soft-roe tempura, assorted fried plates), gyoza, mentaiko motsunabe and sauce-dressed dishes, and horse sashimi is served with sweet soy sauce.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options", and there are salads, bagna cauda and shishito, eggplant and shiitake skewers, but no vegan dish is named and sauces and broths are not described.',
    hours_raw: 'Daily 12:00–24:00, open all year including the New Year holidays (Tabelog); groups of six or more can ask about other hours. Online booking; same-day course bookings (June 2026 review); orders by tablet. 100 seats, all in rooms for 2 to over 30 behind roll curtains and shoji (June 2026 review); a smoking area, and 80 smoking seats per Tabelog. Cards, e-money and PayPay. English- and Chinese-speaking staff. Children welcome. Wheelchair accessible. Opened 19 August 2016 (Tabelog). A free whole cake for birthday and wedding after-party bookings (Tabelog remark).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-11-10, Coco Roppongi Building 4F (Sushi Sueyoshi is on the ground floor) — seconds from Roppongi Stn exit 5',
    cuisine: 'Kyushu-style izakaya in private rooms (Tabelog menu, read November 2026; some prices before tax) · horse sashimi direct from Kumamoto ¥860 (two kinds ¥980 before tax) · Hakata motsunabe with mentaiko ¥1,575 · Kagoshima satsuma-age ¥580; iron-pan gyoza ¥680; grilled mentaiko ¥580 · assorted sashimi from ¥1,449 before tax · charcoal yakitori from ¥83 a skewer (gizzard, heart, bonjiri, shishito, eggplant) and ¥199 (tsukune, liver, negima, thigh, asparagus-pork) · grilled kinmedai, atka mackerel, whole squid · courses with all-you-can-drink, e.g. "Usa course" of 7 dishes with 2.5 hours of drinks ¥3,828 (edamame, Caesar salad, fish carpaccio, three fried dishes, charcoal-grilled Satsuma jidori thigh, jidori fried rice, dessert — October 2025), 8 dishes with 3 hours ¥4,400 · chicken and pork hot pots finished with rice porridge (September 2026) · about 40 sakes and shochu',
    website: null, gmaps: gm('九州さつき 六本木店'), menu_url: MENU,
    notes: "[Izakaya · Roppongi, private-room Kyushu izakaya for groups] Four floors above Sushi Sueyoshi, a few steps from Roppongi Station exit 5: a 100-seat izakaya made entirely of private rooms, open noon to midnight every day of the year. The menu is Kyushu comfort food — horse sashimi from Kumamoto, Hakata motsunabe with mentaiko, satsuma-age, charcoal-grilled jidori and yakitori from ¥83 a skewer — with shochu and sake, and most groups book a course with two and a half to three hours of all-you-can-drink for about ¥3,800–¥4,400. Diners in 2025–2026 call it a typical chain-style private-room izakaya: generous, fried-heavy and fine for a party rather than a destination; one in June 2026 found the curtain-and-shoji rooms noisy, another in September 2026 loved the chicken and pork hot pots finished as rice porridge. Tabelog counts 80 smoking seats. Staff speak English and Chinese. Gurunavi lists a second branch, 錦糸町店.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 19 August 2016 (Tabelog). A second 九州さつき, 錦糸町店, is listed on Gurunavi (all rooms with doors, for 2 to 30, banquets to 100). Many of the staff were from overseas, per a May 2025 diner.',
      philosophy: 'Kyushu cooking, seasonal seafood and local chicken, with shochu (Tabelog shop text).', specialty: 'Horse sashimi; Hakata motsunabe; charcoal-grilled jidori.',
      anecdotes: [
        { text: '"Overall, it has the typical vibe of izakayas found in Shinjuku or Shibuya, for better or worse." — October 2025, Usa course ¥3,828.', source: R + 'B514913991/' },
        { text: '"The partitions made of roll curtains and shoji can make it quite noisy if the neighboring room is loud." — June 2026.', source: R + 'B530001088/' },
        { text: '"The highlight was definitely the final rice porridge, which absorbed the rich flavors of the meat and vegetables in the soup." — September 2026, chicken and pork hot pots.', source: R + 'B535316476/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 完全個室居酒屋 九州さつき 六本木店、港区六本木3-11-10 ココ六本木ビル4F、六本木駅5番出口から5秒、毎日12:00〜24:00、年中無休、100席、個室2名〜30名以上、喫煙所あり (喫煙席80席)、カード・電子マネー・PayPay可、英語と中国語のスタッフ、子ども可、2016年8月19日オープン、誕生日や二次会にホールケーキのサービス。メニュー: 馬刺し、明太子のもつ鍋1,575円、さつま揚げ580円、鉄板餃子680円、焼き鳥1本83円から、刺身盛り合わせ、飲み放題付きコース3,828円・4,400円、焼酎と日本酒約40種。ぐるなび: 九州さつき 錦糸町店も。口コミ(2025年2月〜2026年9月): 典型的な個室居酒屋、揚げ物が多い、ロールカーテンと障子の仕切りでうるさい、タブレット注文、喫煙可、鶏と豚の鍋と雑炊、停電の日も。',
      confidence: 'medium', sources: [TB, MENU, GN, R + 'B501201583/', R + 'B506428547/', R + 'B514913991/', R + 'B519882816/', R + 'B530001088/', R + 'B531711507/', R + 'B532849786/', R + 'B535316476/', R + 'B536940359/'] },
    cultural_comfort: { level: 'english', note: 'English- and Chinese-speaking staff and a photo menu (Tabelog); ordering by tablet.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-11-10 ココ六本木ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.663329, 139.732937), 5 m from Sushi Sueyoshi (tokyo_sushi_sueyoshi_roppongi, address_ja "東京都港区六本木3-11-10 ココ六本木ビル 1F", 35.6633, 139.732973) in the same building, so offset ~7 m north to keep the two apart; GSI 東京都港区六本木三丁目11番 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, TB, R + 'B514913991/'],
    price_note: 'Prices from the Tabelog menu and course pages (read November 2026); some à la carte prices are before tax.', last_checked: TODAY, items: [
      it('', '', 'Horse sashimi direct from Kumamoto, one kind', '¥860', 'Food', 'ask', 'no', 'Tabelog menu; two kinds ¥980 before tax.', 'basashi'),
      it('', '', 'Hakata motsunabe with mentaiko', '¥1,575', 'Food', 'no', 'no', 'Tabelog menu.', 'motsunabe'),
      it('', '', 'Iron-pan gyoza', '¥680', 'Food', 'no', 'no', 'Tabelog menu.', 'gyoza'),
      it('', '', 'Yakitori: gizzard, heart, bonjiri, shishito or eggplant (per skewer)', '¥83', 'Yakitori', 'ask', 'ask', 'Tabelog menu; tsukune, liver, negima, thigh ¥199.', 'yakitori'),
      it('', '', '"Usa course": 7 dishes with 2.5 hours of all-you-can-drink', '¥3,828', 'Course', 'no', 'no', 'Tabelog; dishes per an October 2025 review.', 'usa_course'),
      it('', '', '8-dish course with 3 hours of all-you-can-drink', '¥4,400', 'Course', 'no', 'no', 'Tabelog.', 'course_8'),
    ] }, {
    cuisine: '個室の九州料理の居酒屋 (食べログのメニュー、2026年11月に確認、一部は税抜き)・Kumamoto 直送の馬刺し860円 (2種盛り980円、税抜き)・Hakata のもつ鍋 明太子入り1,575円・Kagoshima のさつま揚げ580円、鉄板餃子680円、焼き明太子580円・刺身の盛り合わせ1,449円から (税抜き)・炭火焼き鳥1本83円 (砂肝、ハツ、ぼんじり、ししとう、なす)、199円 (つくね、レバー、ねぎま、もも、アスパラの豚巻き)・金目鯛、ほっけ、いかの丸焼き・飲み放題付きコース。たとえば7品と2.5時間の飲み放題の「Usa コース」3,828円 (枝豆、シーザーサラダ、魚のカルパッチョ、揚げ物3種、Satsuma の地鶏もも炭火焼き、地鶏の炒飯、デザート、2025年10月)、8品と3時間の飲み放題4,400円・鶏と豚の鍋、締めは雑炊 (2026年9月)・日本酒と焼酎約40種',
    neighborhood: '六本木3-11-10 ココ六本木ビル4F (1階は鮨 末吉)。六本木駅5番出口からすぐ',
    gf_detail: '要確認。グルテンフリーの説明はない。揚げ物が多く (カキフライ、白子の天ぷら、揚げ物の盛り合わせ)、餃子、明太子のもつ鍋、ソースをかけた料理もあり、馬刺しは甘い醤油で。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあり、サラダ、バーニャカウダ、ししとう・なす・椎茸の串もあるが、ヴィーガンの料理名はなく、たれやスープの説明もない。',
    notes: '[居酒屋・六本木、団体向けの九州料理の個室居酒屋] 六本木駅5番出口から数歩、鮨 末吉の入るビルの4階。全室個室の100席の居酒屋で、毎日昼12時から深夜0時まで年中無休。九州の料理が中心で、Kumamoto の馬刺し、Hakata の明太子もつ鍋、さつま揚げ、炭火焼きの地鶏、1本83円からの焼き鳥に焼酎や日本酒。多くのグループは2.5〜3時間の飲み放題付きコース (約3,800〜4,400円) を予約する。2025〜2026年の口コミでは、量が多く揚げ物中心の典型的なチェーン風の個室居酒屋で、目的地というより宴会向きとの声。2026年6月の客はロールカーテンと障子の個室がうるさいと感じ、9月の客は鶏と豚の鍋と締めの雑炊を絶賛。食べログによれば喫煙席は80席。英語と中国語を話すスタッフがいる。錦糸町にも支店がある。',
  });
}

// ================================================================ 和牛焼肉 炭治郎 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13308059/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://gurunavi.com/en/ghc2504/rst/'; const GN_SHIBUYA = 'https://gurunavi.com/en/ghc2501/rst/';
  const H = day(['11:00', '23:30']);
  put({
    id: 'tokyo_wagyu_yakiniku_tanjiro_roppongi', name: '和牛焼肉 炭治郎 六本木店 (Wagyu Yakiniku Tanjiro Roppongi)', category: 'OMNI',
    lat: 35.663227, lng: 139.731639, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. The all-you-can-eat courses include sauced kalbi and horumon, stone-grilled bibimbap and chijimi (2026); salt-grilled tongue may be simpler, but the tare and seasonings are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an all-you-can-eat wagyu yakiniku house. Tabelog ticks "vegetarian options", but no plant dish is named.',
    hours_raw: 'Daily 11:00–23:30 (food last order 22:30, drinks 23:00), open all year (Tabelog). All-you-can-eat courses run two hours. A March 2026 group had free all-you-can-drink for arriving between 17:00 and 18:00. Booking recommended (July 2026 review). No cover charge. 60 seats with private rooms from 2 to over 30; heated-tobacco smoking area; wheelchair accessible. Cards and QR (PayPay, d Barai, Rakuten Pay); no e-money. Menu in English and Chinese; English- and Chinese-speaking staff. Children welcome. Opened 17 April 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 7-14-11, No.12ニイクラビル 4F, above Wendy\'s at Roppongi crossing — 30 seconds from Roppongi Stn',
    cuisine: 'All-you-can-eat wagyu yakiniku, two hours (Tabelog, tax included, read November 2026) · 37 items incl. wagyu horumon and kalbi, Mon–Thu only, ¥3,980 (listed down from ¥5,980), all-you-can-drink +¥1,500 · 55 items incl. thick-cut tongue and special wagyu ¥5,980 (from ¥6,980) — the most popular · 65 items incl. A5 cuts, rare tongue, A5 steak and sirloin cap ¥7,980 (from ¥8,980) · A4-or-better black wagyu from Kyushu, plus domestic pork, horumon, stone-grilled bibimbap, chijimi, potato salad and a dessert buffet (shop text; 2026 reviews) · a limited salt tongue, three a day (July 2026)',
    website: null, gmaps: gm('和牛焼肉 炭治郎 六本木店'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakiniku · Roppongi, all-you-can-eat wagyu by the crossing] On the fourth floor above Wendy's at Roppongi crossing, half a minute from the station: a bright, 60-seat yakiniku house with private rooms, open 11 am to 11:30 pm every day, built around two-hour all-you-can-eat courses of A4-or-better Kyushu black wagyu — 37 items for ¥3,980 Monday to Thursday, 55 for ¥5,980, or 65 with A5 cuts and steak for ¥7,980. The courses open with a heaping platter of meat; diners in 2026 praised the thick-cut tongue, outside skirt and horumon and found the value hard to beat for Roppongi, while one in September found a back table for six cramped and the loin disappointing, and one in July was told the limited tongue could no longer be held for a booking. An energetic manager runs a loud, cheerful room best enjoyed in a group. Heated tobacco is allowed in a smoking area; staff speak English and Chinese. Gurunavi lists a head shop, 炭治郎 渋谷本店.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 17 April 2025 (Tabelog). Gurunavi lists a 炭治郎 渋谷本店 (head shop) with the same all-you-can-eat format. Reviewers in March and September 2026 describe an energetic, friendly manager.',
      philosophy: 'All-you-can-eat premium black wagyu at prices "ready to take a loss" (Tabelog shop text).', specialty: 'Two-hour wagyu all-you-can-eat; thick-cut tongue.',
      anecdotes: [
        { text: '"The manager is energetic and friendly, creating a lively atmosphere. It\'s a bustling spot, so it\'s not ideal for those who prefer a quiet dining experience." — March 2026.', source: R + 'B525073625/' },
        { text: '"The initial set served is quite generous, so you’ll feel pretty full." — July 2026, third visit.', source: R + 'B531768033/' },
        { text: '"We were seated at a table for six in the back, but the space was cramped, making it quite stressful to sit for a long time." — September 2026.', source: R + 'B535495709/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 和牛焼肉 炭治郎 六本木店、港区六本木7-14-11 No.12ニイクラビル4F、六本木駅から徒歩30秒、毎日11:00〜23:30 (フードL.O.22:30、ドリンクL.O.23:00)、年中無休、60席、個室2名〜30名以上、加熱式たばこの喫煙所、カード・QR可、チャージなし、英語・中国語のメニューとスタッフ、2025年4月17日オープン。2時間の食べ放題: 37品 (月〜木限定) 3,980円、55品5,980円、65品7,980円、飲み放題+1,500円。Kyushu 産のA4以上の黒毛和牛。ぐるなび: 炭治郎 渋谷本店も。口コミ(2026年3月〜9月): Wendy\'s の上、元気な店長、最初の肉の盛りが多い、厚切りタン、ハラミ、ホルモン、6人席が狭い、限定のタンの取り置き不可、エアコンの故障の日も。',
      confidence: 'medium', sources: [TB, GN, GN_SHIBUYA, R + 'B525073625/', R + 'B525313090/', R + 'B530343194/', R + 'B531768033/', R + 'B532749434/', R + 'B533322543/', R + 'B535107443/', R + 'B535329820/', R + 'B535495709/', R + 'B535542560/'] },
    cultural_comfort: { level: 'english', note: 'Menu in English and Chinese, English- and Chinese-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木7-14-11 No.12ニイクラビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with current courses; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.663227, 139.731639); GSI 東京都港区六本木七丁目14番 (lot) 45m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (tax included; read November 2026); each course is two hours.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat, 37 items (Mon–Thu only)', '¥3,980', 'Course', 'ask', 'no', 'Tabelog; all-you-can-drink +¥1,500.', 'aye_37'),
      it('', '', 'Wagyu all-you-can-eat, 55 items', '¥5,980', 'Course', 'ask', 'no', 'Tabelog "most popular".', 'aye_55'),
      it('', '', 'Premium all-you-can-eat with A5 cuts, 65 items', '¥7,980', 'Course', 'ask', 'no', 'Tabelog.', 'aye_65'),
    ] }, {
    cuisine: '2時間の和牛焼肉食べ放題 (食べログ、税込み、2026年11月に確認)・和牛ホルモンや和牛カルビなど37品、月〜木限定3,980円 (通常5,980円)、飲み放題+1,500円・厚切り上タンや特選和牛など55品5,980円 (通常6,980円)、一番人気・A5の肉、希少なタン、A5ステーキ、サーロインキャップのステーキなど65品7,980円 (通常8,980円)・Kyushu 産のA4以上の黒毛和牛、国産豚、ホルモン、石焼ビビンバ、チヂミ、ポテトサラダ、デザートビュッフェ (店の紹介、2026年の口コミ)・1日3食限定の塩タン (2026年7月)',
    neighborhood: '六本木7-14-11 No.12ニイクラビル4F、六本木の交差点の Wendy\'s の上。六本木駅から徒歩30秒',
    gf_detail: '要確認。グルテンフリーの説明はない。食べ放題にはたれのカルビやホルモン、石焼ビビンバ、チヂミも (2026年)。塩タンはシンプルかもしれないが、たれや味付けの説明はない。',
    vegan_detail: 'ヴィーガン不可。和牛焼肉の食べ放題の店。食べログには「ベジタリアンメニューあり」とあるが、野菜の料理名は出ていない。',
    notes: '[焼肉・六本木、交差点そばの和牛食べ放題] 六本木の交差点の Wendy\'s の上、駅から30秒の4階。明るい60席の焼肉店で個室もあり、毎日11時から23時半まで。Kyushu 産のA4以上の黒毛和牛の2時間食べ放題が中心で、月〜木の37品3,980円、55品5,980円、A5の肉やステーキ付きの65品7,980円。コースは山盛りの肉から始まる。2026年の口コミでは厚切りタン、ハラミ、ホルモンが好評で、六本木でこの値段は破格との声。一方で9月の客は奥の6人席が狭くロースは今ひとつ、7月の客は限定のタンの取り置きができなくなっていたという。元気な店長のにぎやかな店で、グループ向き。喫煙所では加熱式たばこが吸え、英語と中国語のスタッフもいる。渋谷に本店がある。',
  });
}

// ================================================================ 六本木きんめ鮨
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13315512/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'tokyo_roppongi_kinme_sushi', name: '六本木きんめ鮨 (Roppongi Kinme Sushi)', category: 'OMNI',
    lat: 35.66385, lng: 139.734242, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. Many nigiri are brushed with a sweet soy glaze (September 2026), and courses have included aosa tempura and inari sushi with butter soy sauce (October 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish omakase with oysters, sashimi and a shark-fin chawanmushi.',
    hours_raw: 'Daily 17:00–23:00 (drinks last order 22:30); closing days may vary (Tabelog). Course bookings only (two hours); bookings from one person; from November 2026, à la carte seats on weekdays after 20:00 by same-day phone call, with a ¥2,000 charge for à la carte (Tabelog). 8 counter seats; non-smoking. Cards and IC/e-money; no QR. English menu. Children welcome; please go easy on perfume (Tabelog). Opened 24 November 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-9-4, 六本木ロイヤルビル B1F — 3 min from Roppongi Stn',
    cuisine: 'Omakase of about 15 dishes, then free refills of nigiri from the blackboard (Tabelog, tax included, read November 2026; two hours) · premium course with all-you-can-drink incl. sake and Yamazaki and Hakushu whisky ¥15,000 · November weekend and holiday course with beer, whisky and shochu all-you-can-drink ¥10,000 · November food-only course with aged fish and two shari, red and white, ¥10,000 · fish bought daily at Toyosu, some aged (September 2026); red-vinegar shari (September 2026) · an October 2026 course: simmered pumpkin with meat sauce, cream-cheese and avocado bruschetta, Fuji salmon with ikura, sea-bream carpaccio, oysters, chutoro, shima-aji, kinmedai, kuruma ebi, shark-fin chawanmushi, aosa tempura, akami, tachiuo, sardine, tai, uni, kue, anago, negitoro roll, inari with butter soy sauce',
    website: null, gmaps: gm('六本木きんめ鮨 六本木3-9-4'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Roppongi, omakase with free refills in a basement counter] Down in a basement three minutes from Roppongi Station, eight counter seats and an unusual deal: a course of about 15 dishes, then as many repeats as you like of the nigiri on the blackboard, with all-you-can-drink included in most plans (¥10,000, or ¥15,000 with sake and Yamazaki and Hakushu whisky). The fish comes daily from Toyosu, some of it aged, on red-vinegar rice; courses mix sushi with small dishes like oysters, sea-bream carpaccio, a shark-fin chawanmushi and a sweet butter-soy inari. A regular writes that the chef earned a Michelin star in Italy and worked in Toronto, and sake lovers in 2026 enjoyed the chef's picks of unusual labels. Two diners in 2026 were too full from the course to order refills. The chef sometimes works the counter alone, and an October 2026 diner found the service curt. Opened November 2025.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed in the sources read)'], origin: null,
      background: 'The shop describes the chef as having honed sushi skills overseas (Tabelog). A four-time visitor in October 2026 writes that the chef earned a Michelin star in Italy and has experience in Toronto, Canada. An October 2026 diner saw the head chef working alone; a female staff member called back the next day. Opened 24 November 2025 (Tabelog).',
      philosophy: 'A satisfying omakase, then reorder your favourite nigiri as much as you like, with no worry about extra charges (Tabelog shop text).', specialty: 'Omakase with free nigiri refills; Fuji salmon; butter-soy inari.',
      anecdotes: [
        { text: '"The chef has earned a Michelin star in Italy and has experience in Toronto, Canada." — October 2026, fourth visit.', source: R + 'B530717383/' },
        { text: '"I was looking forward to the refills, but I ended up feeling completely full from just the course and didn\'t make it to the refills." — September 2026.', source: R + 'B536532459/' },
        { text: '"I understand that the head chef was working alone and it must have been challenging, but I believe service should be separate from that." — October 2026, ¥10,000 course.', source: R + 'B536913844/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 六本木きんめ鮨、港区六本木3-9-4 六本木ロイヤルビルB1F、六本木駅から徒歩3分、毎日17:00〜23:00 (ドリンクL.O.22:30)、不定休あり、カウンター8席、禁煙、カード・電子マネー可、QR不可、アラカルトのみ2,000円、1名から予約可、11月から平日20時以降は当日の電話でアラカルトの席も、英語メニュー、2025年11月24日オープン。コース (2時間、約15品、食後は黒板の握りのおかわり自由): Yamazaki・Hakushu と日本酒の飲み放題付き15,000円、11月の土日祝の飲み放題付き10,000円、赤と白の2種のシャリと熟成魚の料理のみのコース10,000円。口コミ(2026年9月〜10月): 豊洲の魚、熟成のネタ、赤酢のシャリ、甘いたれの握り、牡蠣、鯛のカルパッチョ、ふかひれの茶碗蒸し、バター醤油のいなり、珍しい日本酒、大将1人の日も。',
      confidence: 'medium', sources: [TB, R + 'B530717383/', R + 'B535658444/', R + 'B535853124/', R + 'B536153314/', R + 'B536474097/', R + 'B536532459/', R + 'B536913844/', R + 'B537447879/', R + 'B537587983/', R + 'B538310440/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); set courses with refills ordered from a blackboard.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-9-4 六本木ロイヤルビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with November 2026 plans; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663850, 139.734242); GSI 東京都港区六本木三丁目9番 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (tax included; read November 2026); two hours; refills of blackboard nigiri included.', last_checked: TODAY, items: [
      it('', '', 'Premium omakase with refills and all-you-can-drink (sake, Yamazaki, Hakushu)', '¥15,000', 'Course', 'ask', 'no', 'Tabelog.', 'premium_course'),
      it('', '', 'November weekend/holiday omakase with refills and all-you-can-drink (beer, whisky, shochu)', '¥10,000', 'Course', 'ask', 'no', 'Tabelog.', 'weekend_course'),
      it('', '', 'November omakase, food only, aged fish and red and white shari', '¥10,000', 'Course', 'ask', 'no', 'Tabelog; drinks extra.', 'food_only_course'),
    ] }, {
    cuisine: '約15品のおまかせのあと、黒板の握りがおかわり自由 (食べログ、税込み、2026年11月に確認、2時間)・日本酒と Yamazaki・Hakushu のウイスキーの飲み放題付きのプレミアムコース15,000円・11月の土日祝の、ビール・ウイスキー・焼酎の飲み放題付き10,000円・11月の新プラン、熟成魚と赤白2種のシャリの料理のみのコース10,000円・豊洲で毎日仕入れる魚、熟成も (2026年9月)、赤酢のシャリ (2026年9月)・2026年10月のコースの例: かぼちゃの煮物の肉みそがけ、クリームチーズとアボカドのブルスケッタ、Fuji salmon といくら、鯛のカルパッチョ、牡蠣、中トロ、シマアジ、金目鯛、車海老、ふかひれの茶碗蒸し、あおさの天ぷら、赤身、太刀魚、鰯、鯛、雲丹、クエ、穴子、ねぎとろ巻き、バター醤油のいなり',
    neighborhood: '六本木3-9-4 六本木ロイヤルビルB1F。六本木駅から徒歩3分',
    gf_detail: '要確認。グルテンフリーの説明はない。握りの多くは甘いたれを塗って出し (2026年9月)、コースにはあおさの天ぷらやバター醤油のいなりも (2026年10月)。',
    vegan_detail: 'ヴィーガン不可。牡蠣、刺身、ふかひれの茶碗蒸しなど魚介のおまかせ。',
    notes: '[鮨・六本木、地下のカウンターのおかわり自由のおまかせ] 六本木駅から3分のビルの地下、カウンター8席。約15品のコースのあと、黒板の握りを好きなだけおかわりでき、たいていのプランは飲み放題付き (10,000円、日本酒と Yamazaki・Hakushu のウイスキー付きで15,000円)。魚は毎日豊洲から、熟成したものも、赤酢のシャリで。コースは握りに、牡蠣、鯛のカルパッチョ、ふかひれの茶碗蒸し、甘いバター醤油のいなりなどの小皿が交じる。常連によれば大将は Italy でミシュランの星を得て Toronto でも働いた経歴があり、2026年の日本酒好きの客は大将が選ぶ珍しい銘柄を楽しんだ。コースだけで満腹になっておかわりまで届かなかった客も2人いた。大将1人でカウンターを回す日もあり、2026年10月の客は接客がそっけないと感じた。2025年11月開店。',
  });
}

// ================================================================ Burger Revolution Tokyo Wine & Bar 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13251886/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const IG = 'https://www.instagram.com/burgerrevolution_tokyo/';
  const H = day(['12:00', '22:00']);
  put({
    id: 'tokyo_burger_revolution_roppongi', name: 'Burger Revolution Tokyo Wine & Bar 六本木店', category: 'OMNI',
    lat: 35.66186, lng: 139.732983, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Burgers come in wheat buns; the teriyaki "rice burger" swaps the bun for rice but uses a teriyaki sauce; fries and onion-ring fritters are fried, and the fryer is not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options", but every burger on the menu is built on a beef patty; fries and onion rings are the only plant sides named.',
    hours_raw: 'Daily 12:00–22:00 (last order 21:30), open all year (Tabelog). An October 2026 diner was told on a Sunday that the shop closed at 14:00 that day — check before a weekend afternoon visit. Bookings accepted; QR ordering (August 2026). Fries and drinks are not included in à la carte burgers (June and August 2026). 26 seats including standing tables, all high tables and chairs; no strollers, children\'s chairs or kids\' menu (Tabelog). Non-smoking. Cards, IC/e-money and QR. English menu. Takeaway and delivery. Opened 30 October 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 5-9-22, シュアービル福鮨 1F, down Imoarai-zaka next to Sukiya, across from Asahi Shrine — 3 min from Roppongi Stn exit 3',
    cuisine: 'Burgers of 100% black wagyu with no blend or fillers, on special buns, with a sauce supervised by a Michelin three-star chef (Tabelog shop text) · prices with the black-wagyu patty (Tabelog menu, read November 2026): hamburger ¥1,780; teriyaki ¥1,880; cheeseburger (cheddar, mozzarella, gorgonzola or parmesan) ¥2,060; classic ¥2,080; quattro cheese ¥2,340; avocado cheese ¥2,460; avocado bacon ¥2,560; blue cheese, colby jack or habanero jack ¥2,780; BRT ¥2,920; foie gras ¥4,080 · each can be upgraded to a Tokyo-beef or Kobe-beef patty (e.g. classic ¥4,580 / ¥4,280) or, for most burgers, a halal black-wagyu or halal Hokkaido-wagyu patty (classic ¥3,680 / ¥4,280); halal teriyaki rice burger ¥3,480 · truffle-salt fries and onion-ring fritters (2026 reviews) · wine bar with sake',
    website: IG, gmaps: gm('Burger Revolution 六本木5-9-22'), menu_url: MENU,
    notes: "[Burgers · Roppongi, 100% wagyu burgers with halal patties] A small burger and wine bar three minutes down Imoarai-zaka from Roppongi Station, across from Asahi Shrine. Every patty is 100% black wagyu with nothing mixed in, on a glossy branded bun; pay more and the same burger comes with Tokyo beef or Kobe beef, or with halal-certified wagyu; the shop says it draws tourists from Japan and abroad, and it is a walk from Azabudai Hills and Tokyo Tower. A plain black-wagyu hamburger is ¥1,780 and the classic ¥2,080; fries are extra, and diners in 2026 rate the truffle-salt fries and onion-ring fritters highly. The staff show you how to wrap the big burger in paper so it holds together, and a LINE sign-up gave one October 2026 diner ¥500 off. Lunch is usually busy, an August 2026 diner says; another came after seeing it on TV. High tables only, so no strollers.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 30 October 2020 (Tabelog). The shop says its sauce is supervised by a Michelin three-star chef (no name given) and that it offers halal-certified Kobe beef; a March 2026 diner came after seeing it on TV.',
      philosophy: '"Zero fill" 100% beef patties and buns made to bring out the wagyu (Tabelog shop text).', specialty: '100% black-wagyu burgers; halal wagyu patties.',
      anecdotes: [
        { text: '"This restaurant allows you to select the type of burger and the type of meat (like Wagyu or Kobe beef)… By the way, the staff will show you how to eat the burger without falling apart." — April 2026, lunch just under ¥2,500.', source: R + 'B526539308/' },
        { text: '"I thought the fries were included, but they were an extra charge. They were delicious, but I wish I had been informed." — August 2026.', source: R + 'B534167384/' },
        { text: '"The strong aroma of truffle paired perfectly with the salty fries and sweet onion rings." — October 2026, Sunday lunch.', source: R + 'B536844800/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Burger Revolution Tokyo Wine & Bar 六本木店、港区六本木5-9-22 シュアービル福鮨1F、六本木駅3番出口から右へ、Imoarai-zaka を下り、Sukiya の隣、Asahi Shrine の向かい、毎日12:00〜22:00 (L.O.21:30)、年中無休、26席 (立ち席を含む)、ハイテーブルのみ、ベビーカー不可、禁煙、カード・電子マネー・QR可、英語メニュー、テイクアウトとデリバリー、2020年10月30日オープン。100%黒毛和牛 (つなぎなし) とハラル認証の Kobe beef のバーガー専門店、ミシュラン三つ星シェフ監修のソース。メニュー: ハンバーガー1,780円、クラシック2,080円、チーズ2,060円、アボカドチーズ2,460円、フォアグラ4,080円、Tokyo beef・Kobe beef・ハラルの黒毛和牛・ハラルの Hokkaido の和牛へのアップグレード、ハラルの照り焼きライスバーガー3,480円。口コミ(2026年3月〜10月): テレビで見て来店、ポテトは別料金、トリュフ塩ポテトとオニオンリング、紙で包む食べ方を教えてくれる、LINE登録で500円引き、日曜の14時閉店と言われた客も。',
      confidence: 'medium', sources: [TB, MENU, IG, R + 'B525245570/', R + 'B526539308/', R + 'B528522494/', R + 'B528535995/', R + 'B529374091/', R + 'B534167384/', R + 'B534719207/', R + 'B536844800/', R + 'B536883727/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); the shop says it draws tourists from Japan and abroad; QR ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木5-9-22 シュアービル福鮨 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with current menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.661860, 139.732983); GSI 東京都港区六本木五丁目9番 (lot) 62m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Prices from the Tabelog menu (read November 2026) with the black-wagyu patty; Tokyo-beef, Kobe-beef and halal patties cost more. Fries and drinks extra.', last_checked: TODAY, items: [
      it('', '', '100% black-wagyu hamburger', '¥1,780', 'Burgers', 'no', 'no', 'Tabelog menu; halal black wagyu ¥3,380.', 'hamburger'),
      it('', '', '100% black-wagyu classic burger', '¥2,080', 'Burgers', 'no', 'no', 'Tabelog menu; Kobe ¥4,280, halal black wagyu ¥3,680.', 'classic'),
      it('', '', '100% black-wagyu cheeseburger (cheddar, mozzarella, gorgonzola or parmesan)', '¥2,060', 'Burgers', 'no', 'no', 'Tabelog menu.', 'cheeseburger'),
      it('', '', '100% black-wagyu avocado cheese burger', '¥2,460', 'Burgers', 'no', 'no', 'Tabelog menu.', 'avocado_cheese'),
      it('', '', '100% black-wagyu foie gras burger', '¥4,080', 'Burgers', 'no', 'no', 'Tabelog menu.', 'foie_gras'),
      it('', '', 'Halal black-wagyu teriyaki rice burger', '¥3,480', 'Burgers', 'ask', 'no', 'Tabelog menu; rice in place of the bun.', 'teriyaki_rice_burger'),
    ] }, {
    cuisine: 'つなぎを使わない100%黒毛和牛のパティ、特製のバンズ、ミシュラン三つ星シェフ監修のソースのバーガー (食べログの店の紹介)・黒毛和牛のパティの値段 (食べログのメニュー、2026年11月に確認): ハンバーガー1,780円、照り焼き1,880円、チーズバーガー (チェダー、モッツァレラ、ゴルゴンゾーラ、パルメザン) 2,060円、クラシック2,080円、クアトロチーズ2,340円、アボカドチーズ2,460円、アボカドベーコン2,560円、ブルーチーズ、コルビージャック、ハバネロジャック2,780円、BRT 2,920円、フォアグラ4,080円・Tokyo beef、Kobe beef (例: クラシック4,580円・4,280円)、多くのバーガーはハラルの黒毛和牛や Hokkaido の和牛 (クラシック3,680円・4,280円) にも変えられる。ハラルの照り焼きライスバーガー3,480円・トリュフ塩のポテト、オニオンリングのフリット (2026年の口コミ)・日本酒もあるワインバー',
    neighborhood: '六本木5-9-22 シュアービル福鮨1F、Imoarai-zaka を下った Sukiya の隣、Asahi Shrine の向かい。六本木駅3番出口から徒歩3分',
    gf_detail: '要確認。バーガーは小麦のバンズ。照り焼きのライスバーガーはバンズの代わりにご飯だが、照り焼きのたれを使う。ポテトやオニオンリングは揚げ物で、フライヤーの説明はない。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあるが、メニューのバーガーはすべて牛のパティ。植物性のサイドとして名前が出ているのはポテトとオニオンリングだけ。',
    notes: '[バーガー・六本木、ハラルのパティもある100%和牛のバーガー] 六本木駅から Imoarai-zaka を3分下った Asahi Shrine の向かいにある、小さなバーガーとワインの店。パティはどれもつなぎなしの100%黒毛和牛で、ロゴ入りのつやのあるバンズにはさむ。追加料金で Tokyo beef や Kobe beef、ハラル認証の和牛にも変えられる。店によれば国内外の観光客に人気で、Azabudai Hills や Tokyo Tower にも歩いて行ける。黒毛和牛のハンバーガーは1,780円、クラシックは2,080円。ポテトは別料金で、2026年の口コミではトリュフ塩のポテトとオニオンリングのフリットが好評。大きなバーガーを崩さず食べられるよう紙の包み方を教えてくれ、2026年10月の客はLINE登録で500円引きに。2026年8月の客によれば昼はたいてい混み、テレビで見て来たという客も。ハイテーブルのみでベビーカー不可。',
  });
}

save();
