// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 12.
//   + 食堂 松おか Shokudo Matsuoka (sio group izakaya in Shinsaibashi PARCO, until 2026 "The New World"; Bib Gourmand)
//   + 幸梅軒 Koubai Ken (Showa-style local Chinese restaurant in the Senba Center Building basement; sara udon and fried rice)
//   + 喫茶ビクトリヤ Kissa Victorya (Namba kissa in the NAMBA Nannan underground mall since 1957; thick omelette sandwich)
//   + Brooklyn Parlor OSAKA (Blue Note Japan's music, books and food café-bar; burgers and jazz)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 11):
//   27121662, 27012954, 27011050, 27078382 (last two digits 62, 54, 50, 82: each = 2 mod 4).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address; no Brooklyn Parlor in any city file).
//   Chain check (Greg's rulings, 2026-11-02). Matsuoka: a sio-group restaurant, but the group's restaurants are separate
//   concepts and this is the only Shokudo Matsuoka (sister-concept ruling); kept. Brooklyn Parlor: two shops (Shinjuku and
//   Osaka, official site), none in data, not expanding fast; kept. Koubai Ken and Victorya: single shops.
//   open_late (Greg, 2026-11-02): true only when the shop closes after 22:00.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 食堂 松おか
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27121662/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://sio.tokyo/restaurants/shokudo_matsuoka/';
  const WD = day(['12:00', '15:00'], ['17:00', '22:00']); const WE = day(['11:30', '22:00']);
  put({
    id: 'osaka_shokudo_matsuoka_shinsaibashi_parco', name: '食堂 松おか (Shokudo Matsuoka)', category: 'OMNI',
    lat: 34.673901, lng: 135.500966, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The oden dashi of kombu, bonito and chicken is finished with white soy sauce (Tabelog), and soy sauces usually contain wheat; the fried horse mackerel, tempura, shumai and the whole-wheat ramen are wheat-based. Sashimi is the place to start asking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and oden izakaya; the oden dashi uses bonito and chicken (Tabelog).',
    hours_raw: 'Mon–Fri 12:00–15:00 and 17:00–22:00; Sat, Sun and holidays 11:30–22:00; closed when Shinsaibashi PARCO closes (Tabelog). The official site lists lunch 12:00–15:00 and dinner 17:00–22:00, irregular closures. The ramen is a weekday-lunch dish (Tabelog; October 2026). Reservations online; groups of 12 or more by phone; a booking may be cancelled 15 minutes after the time if the shop cannot reach you (Tabelog). Courses: Tabelog says courses are currently not available, while a July 2026 regular booked the omakase course through Tabelog. Order by smartphone or QR code (March 2025; October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, iD, QUICPay and QR (Tabelog). 25 seats with a counter; non-smoking, smoking area on the same floor; free Wi-Fi (Tabelog; seat count also on the official site). Opened 18 March 2021 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 1-8-3, 心斎橋PARCO北館 B2F — 1 min from the south gate of Shinsaibashi Stn (Midosuji Line)',
    cuisine: 'Oden, sashimi and Japanese plates (official site; Tabelog) · oden in a dashi of kombu and bonito layered with chicken and finished Kyoto-style with white soy sauce, about 25 kinds from ¥240 each (Tabelog); chef-chosen five-piece oden ¥1,280 (¥1,408 with tax, official site); beef tendon, maitake and tomato oden (September 2026) · fish delivered daily and aged to suit; sashimi platter from one portion ¥1,680 (¥1,848, official site); straw-grilled bonito tataki (2025–2026) · fried horse mackerel with bettara-pickle tartar, two pieces; soft-boiled egg with fuki miso sauce; steamed shumai, often the appetizer, ¥330 for two (2026) · Amakusa Kuroge wagyu steak ¥2,200 (¥2,420); oden-dashi udon ¥650 (¥715) (official site) · Kujo negi and hon-maguro ramen in an oden-style dashi with whole-wheat noodles and yuzu, ¥1,200 at weekday lunch (October 2026; the official site lists ¥1,800, ¥1,980 with tax) · an omakase course of small plates, sashimi, oden and tempura (July 2026) · sake and shochu (Tabelog)',
    website: SITE, gmaps: gm('食堂 松おか 心斎橋PARCO'), menu_url: SITE,
    notes: "[Izakaya · Shinsaibashi PARCO, a Bib Gourmand oden and fish izakaya] A calm counter izakaya in the B2F food street of Shinsaibashi PARCO, run by the sio group and known until 2026 as The New World (a regular reports the rename in July 2026); one regular notes Bib Gourmand listings in the Michelin Guide Kyoto-Osaka. The draws are oden in a deep kombu, bonito and chicken dashi, aged sashimi and straw-grilled bonito, crisp fried horse mackerel with pickle tartar and a soft-boiled egg in fuki-miso sauce. Weekday lunch brings a light Japanese-style ramen of Kujo negi and bluefin tuna. Diners in 2026 call the food carefully made and fairly priced for the location; one found the QR ordering confusing. Open daily, following PARCO's closing days.",
    chef_bio: { chef_name: null, roles: ['Run by sio (Tabelog; official site)'], origin: null,
      background: 'Per Tabelog: an "authentic diner operated by the Sio Group", opened 18 March 2021; the former name was The New World (ザ・ニューワールド). Per a regular of 19 visits: still The New World in January 2026, "completely revamped and is now called Shokudo Matsuoka" by July 2026; the same diner congratulated it on a Bib Gourmand in the Michelin Guide Kyoto-Osaka 2023 (October 2022) and wrote in March 2025 that it had been a Bib Gourmand two years running. Per the official site: oden in an ultimate dashi and sashimi, seasonal ingredients and the plates of craftsmen, with drinks from around Japan.',
      philosophy: 'Casual Japanese food: oden in an ultimate dashi and sashimi, with seasonal ingredients and drinks from around Japan, in a calm room (official site).', specialty: 'Oden; sashimi; fried horse mackerel.',
      anecdotes: [
        { text: '"The izakaya \'The New World\' located on the basement level of Shinsaibashi PARCO has been completely revamped and is now called \'Shokudo Matsuoka.\'" — July 2026, a 19th visit, the omakase course.', source: R + 'B436006133/' },
        { text: '"It\'s worth going just to try this soft-boiled egg." — June 2026, with fuki miso sauce.', source: R + 'B530797069/' },
        { text: '"I initially thought this place would be an expensive Japanese restaurant based on its atmosphere … However, when I passed by the restaurant, I discovered they offer a reasonably priced weekday ramen special." — October 2026.', source: R + 'B537023909/' },
      ],
      japanese_sources_summary: '公式サイト (sio.tokyo): 食堂 松おか (ザ・ニューワールド)、大阪・心斎橋、居酒屋、極み出汁おでんと刺身、気軽に和食を楽しめる、旬の厳選食材と職人のひと皿、各地のお酒、落ち着いた空間、松おかの極み出汁おでん (おまかせ盛り合わせ5種) 1,280円 (税込1,408円)、割鮮 造り盛り (1人前から) 1,680円 (1,848円)、天草産 黒毛和牛ステーキ 2,200円 (2,420円)、おでん出汁うどん 650円 (715円)、九条ねぎと本鮪のラーメン 1,800円 (1,980円)、心斎橋筋1-8-3 心斎橋PARCO北館 B2F、ランチ12:00〜15:00、ディナー17:00〜22:00、不定休、25席、カード・電子マネー・QR可。食べログ (店舗会員): Sio Group が営む食堂、居酒屋・海鮮、旧店名ザ・ニューワールド、2021年3月18日オープン、平日12:00〜15:00・17:00〜22:00、土日祝11:30〜22:00、定休は心斎橋PARCOに準ずる、昆布と鰹節に鶏の旨みを重ね白醤油で仕上げた出汁のおでん約25種 240円から、毎日届く鮮魚を熟成、平日ランチのラーメン、コースは現在休止、禁煙 (同じ階に喫煙所)、無料Wi-Fi。口コミ(2026年6月〜10月): The New World から店名が変わった、おまかせコース、アジフライのべったら漬けタルタル、半熟卵のふき味噌ソース、出汁の焼売、藁焼きの鰹のたたき、九条ねぎと本鮪のラーメン1,200円 (全粒粉の麺、柚子)、Michelin Guide の Bib Gourmand、QR の注文が分かりにくいという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B436006133/', R + 'B510047685/', R + 'B530797069/', R + 'B532515474/', R + 'B533361510/', R + 'B534835138/', R + 'B536406655/', R + 'B537023588/', R + 'B537023909/', R + 'B537118049/', R + 'B538384455/', R + 'B538410547/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by smartphone or QR code; ask the staff for single portions (March 2025). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-8-3 心斎橋PARCO北館 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official sio site (updated October 2026) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目8番3号 (go) 38m; the Tabelog point is the same point as osaka_kamukura_shinsaibashi_parco (same PARCO address), so offset 5 m north; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B538384455/'],
    price_note: 'Menu prices from the official site (read November 2026), shown before tax with the taxed price in the note; the weekday-lunch ramen price from an October 2026 review.', last_checked: TODAY, items: [
      it('松おかの極み出汁おでん（おまかせ盛り合わせ 5種）', '', 'Chef-chosen oden, five pieces', '¥1,280', 'Oden', 'ask', 'no', 'Official site; ¥1,408 with tax.', 'oden_five'),
      it('割鮮 造り盛り（1人前から）', '', 'Sashimi platter (from one portion)', '¥1,680', 'Sashimi', 'ask', 'no', 'Official site; ¥1,848 with tax.', 'sashimi'),
      it('天草産 黒毛和牛ステーキ', '', 'Amakusa Kuroge wagyu steak', '¥2,200', 'Mains', 'ask', 'no', 'Official site; ¥2,420 with tax.', 'wagyu_steak'),
      it('おでん出汁うどん', '', 'Udon in oden dashi', '¥650', 'Noodles', 'no', 'no', 'Official site; ¥715 with tax.', 'oden_udon'),
      it('九条ねぎと本鮪のラーメン', '', 'Kujo negi and bluefin tuna ramen', '¥1,200', 'Noodles', 'no', 'no', 'Weekday lunch, October 2026; the official site lists ¥1,800 (¥1,980 with tax).', 'negi_maguro_ramen'),
    ] }, {
    cuisine: 'おでん、刺身、和食の一品 (公式サイト、食べログ)・昆布と鰹節に鶏の旨みを重ね、京都風に白醤油で仕上げた出汁のおでんは約25種で1個240円から (食べログ)。おまかせ盛り合わせ5種1,280円 (税込1,408円、公式サイト)。牛すじ、舞茸、トマトのおでん (2026年9月)・毎日届き、魚に合わせて熟成させる鮮魚。1人前からの造り盛り1,680円 (1,848円、公式サイト)、藁焼きの鰹のたたき (2025〜2026年)・べったら漬けのタルタルのアジフライ2枚、半熟卵のふき味噌ソース、お通しにも出る出汁の焼売2個330円 (2026年)・天草産の黒毛和牛ステーキ2,200円 (2,420円)、おでん出汁うどん650円 (715円) (公式サイト)・おでんの出汁に全粒粉の麺と柚子の九条ねぎと本鮪のラーメン、平日ランチで1,200円 (2026年10月、公式サイトでは1,800円、税込1,980円)・小鉢、刺身、おでん、天ぷらのおまかせコース (2026年7月)・日本酒と焼酎 (食べログ)',
    neighborhood: '心斎橋筋1-8-3 心斎橋PARCO北館 B2F。Shinsaibashi 駅 (Midosuji Line) の南改札から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。おでんの出汁は昆布、鰹、鶏で白醤油で仕上げる (食べログ)。醤油はふつう小麦を含む。アジフライ、天ぷら、焼売、全粒粉のラーメンは小麦。刺身から確認を。',
    vegan_detail: 'ヴィーガンではありません。魚とおでんの居酒屋で、おでんの出汁に鰹と鶏を使う (食べログ)。',
    notes: '[居酒屋・心斎橋PARCO、Bib Gourmand のおでんと魚] 心斎橋PARCO の地下2階の飲食街にある落ち着いたカウンターの居酒屋。sio のグループが営み、2026年まではザ・ニューワールドという店名だった (2026年7月の常連の口コミ)。常連は Michelin Guide Kyoto-Osaka の Bib Gourmand 掲載にも触れている。目当ては昆布、鰹、鶏の深い出汁のおでん、熟成させた刺身と藁焼きの鰹、べったら漬けタルタルのさくさくのアジフライ、ふき味噌ソースの半熟卵。平日の昼は九条ねぎと本鮪のあっさりした和風ラーメンも。2026年の口コミでは丁寧な料理で場所のわりに手頃という声が多く、QR の注文が分かりにくいという声も。毎日営業で、休みは PARCO に準ずる。',
  });
}

// ================================================================ 幸梅軒
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27012954/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:00', '21:30']); const SA = day(['11:00', '15:00']);
  put({
    id: 'osaka_koubaiken_senba', name: '幸梅軒 (Koubai Ken)', category: 'OMNI',
    lat: 34.681932, lng: 135.500136, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The signature sara udon and champon, the ramen, gyoza, kara-age and the set-meal shrimp tempura are wheat-based; the thick sauces and the fried rice are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a local Chinese restaurant of seafood noodles, pork, chicken and egg fried rice.',
    hours_raw: 'Mon–Fri 11:00–21:30; Sat 11:00–15:00; closed Sundays (Tabelog). Daily set meals until 14:00 (September 2026); weekday lunch queues of office workers, and a bar-like crowd in the evening (2026 reviews). No reservations. Cash only: no cards, e-money or QR (Tabelog). 38 seats, tables only, shared when busy (September–October 2026). Smoking allowed (Tabelog); a September 2026 diner found it mostly smoke-free just after lunch.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Senba Chuo 4-1, 船場センタービル10号館 B1F, at the end of the basement food street — directly connected to Honmachi Stn',
    cuisine: 'Local Chinese (machi-chuka) classics: noodles, set meals and izakaya dishes at night (2026 reviews) · the two signatures, sara udon of crisp thin fried noodles under a thick sauce of vegetables and seafood ¥900, and champon with vegetables, shrimp, clams and kamaboko (October 2026) · fried rice, sweet, moist and eggy, as a small add-on ¥350, a half in sets, or upsized ¥600 (2025–2026) · champon set with half fried rice and macaroni salad ¥1,180 (October 2026); sara udon with half fried rice ¥1,200 (August 2025) · daily set of ramen, half fried rice, kara-age and mini salad ¥950 (July 2026); kara-age set ¥980 with shrimp tempura, macaroni salad, soup and takana (September 2026) · yakisoba ¥900; Chinese-style katsudon ¥700 (2025); miso ramen; gyoza; sweet and sour pork; liver and garlic chives (2026)',
    website: null, gmaps: gm('幸梅軒 船場センタービル10号館'), menu_url: null,
    notes: "[Chinese · Senba, Showa-style sara udon and fried rice] A long-running local Chinese restaurant at the end of the basement food street of Senba Center Building No. 10, straight off Honmachi Station, where weekday lunch brings queues of office workers and evenings fill with colleagues over beer. Order the sara udon, crisp noodles buried in a thick vegetable and seafood sauce (add mustard, then vinegar), or the champon, with a side of sweet, moist fried rice; set meals are big. Cash only, tables shared and smoking allowed. Diners in 2026 love the fried rice, sara udon and the warm service; others found the kara-age and sweet and sour pork tough and a gyoza order slow. Closed Sundays; Saturday lunch only.",
    chef_bio: { chef_name: null, roles: ['Owner and kitchen staff (unnamed)'], origin: null,
      background: 'Per 2026 reviews: a long-established local Chinese restaurant in Senba Center Building No. 10, directly connected to Honmachi Station; a staff member who appeared to be the owner was friendly and apologised for a slow gyoza order with a few extra gyoza (August 2026). Tabelog gives no opening date; the listing is not shop-maintained.',
      philosophy: null, specialty: 'Sara udon; champon; fried rice.',
      anecdotes: [
        { text: '"During lunchtime, it gets so crowded with salarymen that you could almost play a rugby match in there!" — August 2025, sara udon with half fried rice ¥1,200.', source: R + 'B511714439/' },
        { text: '"I added some mustard for a flavor change. Then, after eating about half, I drizzled some vinegar on it for another flavor twist." — October 2026, sara udon.', source: R + 'B538504644/' },
        { text: '"The two signature dishes here are Sara Udon and Champon." — October 2026, around 1 PM.', source: R + 'B538502220/' },
      ],
      japanese_sources_summary: '食べログ: 幸梅軒 (Koubai Ken)、中華料理・ラーメン・餃子、船場中央4-1 船場センタービル10号館 B1F、Honmachi 駅直結、月〜金 11:00〜21:30、土 11:00〜15:00、日曜休み、予約不可、カード・電子マネー・QR不可、38席、喫煙可。口コミ(2026年7月〜10月): 町中華、皿うどん900円とちゃんぽんが看板、ちゃんぽんセット1,180円 (半チャーハン、マカロニサラダ)、小チャーハンのセット350円、甘めでしっとりしたチャーハン、日替わり定食950円、唐揚げ定食980円、焼きそば900円、味噌ラーメン、餃子、酢豚、レバニラ、昼はサラリーマンの行列、夜は飲み客、相席、唐揚げや酢豚が固いという声、店主らしき人の温かい対応。',
      confidence: 'medium', sources: [TB, R + 'B511714439/', R + 'B533105183/', R + 'B533517696/', R + 'B533675581/', R + 'B534058166/', R + 'B535031325/', R + 'B535350285/', R + 'B536333203/', R + 'B537487367/', R + 'B537569687/', R + 'B538502220/', R + 'B538504644/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A menu and photos outside the shop (September–October 2026); cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区船場中央4-1 船場センタービル10号館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区船場中央四丁目1番 (lot) 18m — Tabelog point kept (long Senba Center building, basement shop); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535350285/', R + 'B537487367/', R + 'B511714439/'],
    price_note: 'Prices from July–October 2026 reviews (as reported); no menu online.', last_checked: TODAY, items: [
      it('', 'Sara Udon', 'Sara udon (crisp noodles with thick sauce)', '¥900', 'Noodles', 'no', 'no', 'September–October 2026.', 'sara_udon'),
      it('', '', 'Champon set with half fried rice and macaroni salad', '¥1,180', 'Sets', 'no', 'no', 'October 2026.', 'champon_set'),
      it('', '', 'Small fried rice add-on', '¥350', 'Rice', 'ask', 'no', 'September 2026.', 'fried_rice_small'),
      it('', '', 'Kara-age set meal', '¥980', 'Sets', 'no', 'no', 'September 2026.', 'karaage_set'),
      it('', '', 'Yakisoba', '¥900', 'Noodles', 'no', 'no', 'October 2026.', 'yakisoba'),
    ] }, {
    cuisine: '町中華の定番: 麺、定食、夜は居酒屋のつまみ (2026年の口コミ)・看板は2つ。細いぱりぱりの揚げ麺に野菜と魚介のとろみあんの皿うどん900円と、野菜、エビ、アサリ、かまぼこのちゃんぽん (2026年10月)・甘めでしっとりした卵のチャーハンは小のセット350円、セットの半チャーハン、大盛り600円 (2025〜2026年)・半チャーハンとマカロニサラダのちゃんぽんセット1,180円 (2026年10月)、皿うどんと半チャーハンのセット1,200円 (2025年8月)・ラーメン、半チャーハン、唐揚げ1個、ミニサラダの日替わり定食950円 (2026年7月)。エビ天、マカロニサラダ、スープ、高菜つきの唐揚げ定食980円 (2026年9月)・焼きそば900円、中華風カツ丼700円 (2025年)、味噌ラーメン、餃子、酢豚、レバニラ (2026年)',
    neighborhood: '船場中央4-1 船場センタービル10号館 B1F、地下の飲食街の奥。Honmachi 駅直結',
    gf_detail: '要確認。グルテンの情報なし。看板の皿うどんとちゃんぽん、ラーメン、餃子、唐揚げ、定食のエビ天は小麦。とろみのあんとチャーハンの中身は書かれていない。',
    vegan_detail: 'ヴィーガンではありません。魚介の麺、豚、鶏、卵のチャーハンの町中華。',
    notes: '[中華・船場、昭和の町中華の皿うどんとチャーハン] Honmachi 駅直結の船場センタービル10号館、地下の飲食街の奥にある老舗の町中華。平日の昼はサラリーマンが並び、夜は同僚とビールを飲む客でにぎわう。頼むなら、ぱりぱりの麺が野菜と魚介のとろみあんに埋もれた皿うどん (からし、途中で酢を) か、ちゃんぽんに、甘めでしっとりしたチャーハンを添えて。定食は量が多い。現金のみ、相席、喫煙可。2026年の口コミではチャーハン、皿うどん、温かい接客が好評で、唐揚げや酢豚が固い、餃子が遅かったという声も。日曜休み、土曜は昼だけ。',
  });
}

// ================================================================ 喫茶ビクトリヤ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27011050/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '22:00']);
  put({
    id: 'osaka_kissa_victorya_nannan', name: '喫茶ビクトリヤ (Kissa Victorya)', category: 'OMNI',
    lat: 34.665282, lng: 135.500595, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sandwiches, toast, Napolitan, scones and the Dojima roll are wheat-based; the thick omelette is seasoned with dashi (October 2026). Drinks, pudding and the matcha affogato are the places to ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg sandwiches, hamburg steak, cream cakes and ice-cream desserts; the omelette has dashi (October 2026).',
    hours_raw: 'Daily 09:00–22:00 (last order 21:00); closed on the third Thursday of odd-numbered months, when the mall closes (Tabelog). Breakfast sets in the morning (2025–2026); a lunch-time price for the thick omelette sandwich (October 2026). Reservations; private hire for over 50 (Tabelog). Order by QR code or smartphone; separate bills (October 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR (Tabelog). 60 seats with sofas; non-smoking; children welcome; English menu (Tabelog); Wi-Fi and power outlets (October 2026). Dojima rolls to take away (January 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-chome, NAMBA なんなん No. 1 (underground mall) — by the Midosuji Line Namba gates and Nankai Namba Stn',
    cuisine: 'Kissa menu since 1957: coffee-shop food, sweets and drinks (Tabelog; September 2026) · the thick omelette sandwich of four eggs, 3–4 cm tall, with mustard mayonnaise and ketchup, ¥1,250, ¥1,100 at lunch (October 2026; another October 2026 diner paid ¥1,200) · Napolitan, here as a hamburg Napolitan on a silver plate with an added fried egg (September 2026); curry; vegetable sandwich set (October 2026) · Dojima roll, plain or the seasonal chestnut roll (October 2026), also to take away (January 2025) · scones with clotted cream, extra cream ¥150 (September 2026); pudding à la mode; matcha affogato (2026) · mixed juice, cream soda (Tabelog); royal milk tea ¥920 (October 2026); breakfast sets with toast and a boiled egg (2025–2026)',
    website: null, gmaps: gm('喫茶ビクトリヤ なんなん'), menu_url: null,
    notes: "[Kissa · Namba Nannan, a 1957 coffee shop with a four-egg sandwich] A long-loved kissa in the NAMBA Nannan underground mall under the sign \"OSAKA NAMBA 1957\", just off the Midosuji Line gates, so you can reach it without going outside. Come for the thick omelette sandwich, four eggs high and gently seasoned with dashi, or the hamburg Napolitan, a slice of Dojima roll, scones with clotted cream, an Osaka mixed juice or a cream soda. It opens at 9:00 for breakfast and stays open until 22:00, with sofas, Wi-Fi, outlets and QR ordering. Diners in 2026 praise the sandwich and the convenience; one found the royal milk tea weak and lukewarm for ¥920, another the morning mixed juice not fresh. Open daily.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the Tabelog listing (shop-maintained): established 65 years ago in Minami, Osaka, serving its signature coffee-shop menu of Napolitan, thick omelette sandwiches, Osaka mixed juice, cream soda and pudding à la mode; former name Victoria Cafe (ビクトリア カフェ). A September 2026 diner notes the sign "OSAKA NAMBA 1957".',
      philosophy: null, specialty: 'Thick omelette sandwich; Napolitan; Dojima roll.',
      anecdotes: [
        { text: '"Here, the \'Thick Grilled Egg Sandwich\' uses an incredible four eggs, making it a truly luxurious treat!" — October 2026, ¥1,100 at lunch.', source: R + 'B537887653/' },
        { text: '"Located inside NAMBA Nannan, this long-loved, traditional café has a charming retro atmosphere, marked by the sign \'OSAKA NAMBA 1957\'." — September 2026, matcha affogato.', source: R + 'B535725973/' },
        { text: '"The cup wasn\'t very large; it contained about two cups worth in the pot. It was quite lukewarm from the start" — October 2026, royal milk tea ¥920.', source: R + 'B537549079/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 喫茶ビクトリヤ (旧店名 ビクトリア カフェ)、カフェ・スイーツ・洋食、難波5丁目 NAMBAなんなん1号、Kintetsu・Nankai・地下鉄 Namba 駅からすぐ、毎日9:00〜22:00 (L.O.21:00)、奇数月の第3木曜は全館休業日、予約可、カード・電子マネー・QR可、60席、ソファ席、禁煙、貸切50名以上、モーニング、英語メニュー、子ども可、大阪 Minami で創業65年、名物のナポリタン、厚焼き玉子サンド、大阪生まれのミックスジュース、クリームソーダ、プリン・ア・ラ・モード。口コミ(2026年9月〜10月): OSAKA NAMBA 1957 の看板、卵4個の厚焼き玉子サンド1,250円 (ランチは1,100円)、ハンバーグナポリタン、Dojima Roll、季節の栗のロール、スコーンとクロテッドクリーム、抹茶アフォガート、ロイヤルミルクティー920円、QR やスマホで注文、Wi-Fi と電源、Midosuji Line の改札のそば。',
      confidence: 'medium', sources: [TB, R + 'B476234179/', R + 'B535538708/', R + 'B535725973/', R + 'B536310295/', R + 'B536716705/', R + 'B537449370/', R + 'B537549079/', R + 'B537754649/', R + 'B537887653/', R + 'B537970612/', R + 'B538113627/', R + 'B538306944/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); order by QR code or smartphone, though the app has no photos or descriptions (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, address_ja: '大阪府大阪市中央区難波5丁目 NAMBAなんなん1号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; address given only to the chome (underground mall), GSI 大阪府大阪市中央区難波五丁目 (chome) 134m — pin kept at the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537887653/', R + 'B536310295/', R + 'B537549079/'],
    price_note: 'Prices from September–October 2026 reviews (as reported); no menu online.', last_checked: TODAY, items: [
      it('', '', 'Thick omelette sandwich (four eggs)', '¥1,250', 'Food', 'no', 'no', 'October 2026; ¥1,100 at lunch; another October 2026 diner paid ¥1,200.', 'tamago_sando'),
      it('', '', 'Hamburg Napolitan', '', 'Food', 'no', 'no', 'September 2026.', 'napolitan'),
      it('', '', 'Dojima roll', '', 'Sweets', 'no', 'no', 'January 2025; October 2026.', 'dojima_roll'),
      it('', '', 'Extra clotted cream for the scones', '¥150', 'Sweets', 'ask', 'no', 'September 2026.', 'clotted_cream'),
      it('', '', 'Royal milk tea (hot)', '¥920', 'Drinks', 'ask', 'no', 'October 2026.', 'royal_milk_tea'),
    ] }, {
    cuisine: '1957年からの喫茶のメニュー: 喫茶店の料理、スイーツ、ドリンク (食べログ、2026年9月)・卵4個で高さ3〜4cmの厚焼き玉子サンドは、からしマヨネーズとケチャップで1,250円、ランチは1,100円 (2026年10月、同じ10月に1,200円という声も)・ナポリタンは銀の皿のハンバーグナポリタンに目玉焼きを追加 (2026年9月)、カレー、野菜サンドのセット (2026年10月)・Dojima Roll はプレーンと季節の栗のロール (2026年10月)、持ち帰りも (2025年1月)・スコーンとクロテッドクリーム、追加のクリーム150円 (2026年9月)、プリン・ア・ラ・モード、抹茶アフォガート (2026年)・ミックスジュース、クリームソーダ (食べログ)、ロイヤルミルクティー920円 (2026年10月)、トーストとゆで卵のモーニング (2025〜2026年)',
    neighborhood: '難波5丁目 NAMBAなんなん1号 (地下街)。Midosuji Line Namba 駅の改札と Nankai Namba 駅のそば',
    gf_detail: '要確認。グルテンの情報なし。サンド、トースト、ナポリタン、スコーン、Dojima Roll は小麦。厚焼き玉子は出汁で味つけ (2026年10月)。ドリンク、プリン、抹茶アフォガートから確認を。',
    vegan_detail: 'ヴィーガンではありません。玉子サンド、ハンバーグ、クリームのケーキ、アイスのデザートで、玉子には出汁が入る (2026年10月)。',
    notes: '[喫茶・なんなん、卵4個のサンドの1957年からの喫茶店] NAMBAなんなんの地下街で「OSAKA NAMBA 1957」の看板を掲げる長く愛される喫茶店。Midosuji Line の改札からすぐで、外に出ずに行ける。目当ては卵4個の高さで出汁のやさしい味の厚焼き玉子サンドか、ハンバーグナポリタン、Dojima Roll、クロテッドクリームのスコーン、大阪のミックスジュースやクリームソーダ。朝9時からモーニング、夜22時まで営業し、ソファ、Wi-Fi、電源、QR の注文も。2026年の口コミではサンドと便利さが好評で、920円のロイヤルミルクティーが薄くぬるい、朝のミックスジュースが新鮮でないという声も。毎日営業。',
  });
}

// ================================================================ Brooklyn Parlor OSAKA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27078382/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://brooklynparlor.co.jp/osaka/'; const LUNCH = SITE + 'menu/?food=lunch'; const DINNER = SITE + 'menu/?food=dinner';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_brooklyn_parlor_shinsaibashi', name: 'Brooklyn Parlor OSAKA', category: 'OMNI',
    lat: 34.670942, lng: 135.499777, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Burgers, sandwiches, pasta, pizza, spring rolls and the milk bread are wheat-based; salads, ajillo, roast beef and the jambalaya are where to start asking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: burgers, chicken, shrimp and cheese; the lunch salad bowl has edamame hummus, carrot rapée and salsa among 12 ingredients (official site), not described in full.',
    hours_raw: 'Daily 11:00–23:00: lunch 11:00–16:00, café all day, dinner 16:00–23:00; irregular closures (official site; Tabelog). Lunch dishes can add a drink for ¥400 (official site). Reservations by phone, answered by an automated voice system, or online; order at least one drink and one food each (Tabelog). Live jazz and DJ evenings (official site; September 2026). Order by QR code (August–September 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and PayPay (Tabelog). 160 seats, parties to 100; sofas and a counter; non-smoking with a smoking booth; wheelchair accessible; free Wi-Fi and outlets; children and strollers welcome; English menu (Tabelog). Opened 20 April 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-2-3, A-PLACE心斎橋 B1F — 3 min from exit 7 of Shinsaibashi Stn',
    cuisine: 'American food with music, books and drinks, produced by Blue Note Tokyo (official site) · lunch (official site, read November 2026): classic burger ¥1,400; smash hamburg of coarse-ground beef ¥2,100; craft corned-beef melt sandwich with jalapeño ¥1,700; spicy shrimp jambalaya, cooked about 20 minutes to order, ¥2,200; Brooklyn-style salad bowl of 12 ingredients ¥1,900; Singapore-style popiah ¥2,700; monthly pasta ¥1,600; +¥400 for a drink · dinner burgers in half or regular sizes, from the classic ¥850 / ¥1,470 to truffle cheese with a soft fried egg ¥1,050 / ¥1,960 (official site) · appetizers and salads: clam chowder ¥1,320, Tokachi herb-beef roast beef ¥1,210, garlic shrimp and avocado bake ¥990, Cobb salad ¥1,540, shrimp and avocado ajillo ¥1,210 (official site) · 2026 reviews: lunch sets with a cold soup, appetizers and milk bread with honey dip; Bismarck pizza with truffle and prosciutto; chocolate cake with berry sauce; sweet-potato chips; an original beer',
    website: SITE, gmaps: gm('Brooklyn Parlor OSAKA 西心斎橋'), menu_url: SITE + 'menu/',
    notes: "[American · Nishi-Shinsaibashi, Blue Note's burger, book and jazz parlor] A big brick-and-wood basement café-bar for music, café, books, eats and bar, the Osaka sister of Brooklyn Parlor in Shinjuku, produced by Blue Note Tokyo, with live jazz and DJ nights. It serves non-stop from 11:00 to 23:00: burgers in half or full sizes, clam chowder, roast beef, jambalaya, salads and pizza, with lunch sets that come with milk bread and a honey dip. The 160 seats and sofas make it a relaxed place for meetings or a late coffee and cake. Diners in 2026 like the food and the mood; one found the service slow, and an earlier regular the music loud. Open daily.",
    chef_bio: { chef_name: null, roles: ['Run by BLUE NOTE JAPAN, INC. (official site)'], origin: null,
      background: 'Per the official site: "music, cafe, books, eats, bar"; produced by Blue Note Tokyo and operated by Blue Note Japan; two shops, Shinjuku (Shinjuku OIOI Annex B1F) and Osaka; regular jazz events ("JAZZ@the Parlor") and other live shows. Opened 20 April 2014 (Tabelog).',
      philosophy: 'A place to enjoy food and music (official site).', specialty: 'Burgers; clam chowder; live jazz.',
      anecdotes: [
        { text: '"At 6:30 PM, the DJ set started, featuring mainly Western music. I enjoyed a relaxing holiday dinner surrounded by high-quality sound." — September 2026, a Saturday.', source: R + 'B535054326/' },
        { text: '"I appreciated that the Wi-Fi password is written on all the tables, which is very considerate." — September 2026, chocolate cake.', source: R + 'B536615773/' },
        { text: '"There is an OSK theater next door. I visited this place while waiting for the OSK performance." — October 2026.', source: R + 'B536856052/' },
      ],
      japanese_sources_summary: '公式サイト (brooklynparlor.co.jp): ブルックリンパーラー大阪、食事や音楽が楽しめる場所、music・cafe・books・eats・bar、Produced by Blue Note Tokyo、© BLUE NOTE JAPAN、店舗は新宿と大阪、西心斎橋2-2-3 A-PLACE心斎橋 B1F、11:00〜23:00 (ランチ11:00〜16:00、カフェは終日、ディナー16:00〜23:00)、電話は自動音声で受付、JAZZ@the Parlor などのライブ。ランチ: シンガポールスタイルポピア2,700円、ブルックリンスタイル サラダボール1,900円 (枝豆のフムス、キャロットラペ、サルサソースなど12種類)、スパイシーシュリンプ ジャンバラヤ2,200円 (約20分かけて炊き上げ)、スマッシュハンバーグ2,100円、クラフトコンビーフ メルトサンド1,700円、マンスリーパスタ1,600円、クラシックバーガー1,400円、+400円で1ドリンク。ディナー: クラシックバーガー ハーフ850円・レギュラー1,470円からトリュフチーズ＆半熟目玉焼きバーガー1,050円・1,960円まで、クラムチャウダー1,320円、十勝ハーブ牛のローストビーフ1,210円、ガーリックシュリンプとアボカドのオーブン焼き990円、コブサラダ1,540円、海老とアボカドのアヒージョ1,210円。食べログ (店舗会員): アメリカ料理・ハンバーガー・ダイニングバー、160席、禁煙 (喫煙ブースあり)、車椅子可、無料Wi-Fi、英語メニュー、2014年4月20日オープン。',
      confidence: 'medium', sources: [SITE, LUNCH, DINNER, TB, R + 'B504274105/', R + 'B533432655/', R + 'B533605082/', R + 'B533742182/', R + 'B534361623/', R + 'B535054326/', R + 'B536615773/', R + 'B536856052/', R + 'B537768204/', R + 'B538104069/', R + 'B538274967/', R + 'B538289597/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); the official menu is bilingual; QR ordering (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-2-3 A-PLACE心斎橋 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with events into December 2026 and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目2番3号 (go) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [LUNCH, DINNER],
    price_note: 'Official lunch and dinner menus (read November 2026), tax included.', last_checked: TODAY, items: [
      it('クラシックバーガー', '', 'Classic burger (lunch)', '¥1,400', 'Lunch', 'no', 'no', 'Official site.', 'classic_burger'),
      it('スパイシーシュリンプ ジャンバラヤ', '', 'Spicy shrimp jambalaya', '¥2,200', 'Lunch', 'ask', 'no', 'Official site; about 20 minutes.', 'jambalaya'),
      it('ブルックリンスタイル サラダボール', '', 'Brooklyn-style salad bowl', '¥1,900', 'Lunch', 'ask', 'ask', 'Official site.', 'salad_bowl'),
      it('クラムチャウダー', '', 'Clam chowder', '¥1,320', 'Dinner', 'ask', 'no', 'Official site.', 'clam_chowder'),
      it('十勝ハーブ牛のローストビーフ', '', 'Tokachi herb-beef roast beef', '¥1,210', 'Dinner', 'ask', 'no', 'Official site.', 'roast_beef'),
    ] }, {
    cuisine: '音楽、本、お酒と楽しむアメリカの料理、Blue Note Tokyo のプロデュース (公式サイト)・ランチ (公式サイト、2026年11月): クラシックバーガー1,400円、つなぎを抑えた粗びき牛肉のスマッシュハンバーグ2,100円、ハラペーニョのクラフトコンビーフ メルトサンド1,700円、注文ごとに約20分かけて炊くスパイシーシュリンプ ジャンバラヤ2,200円、12種類の食材のブルックリンスタイル サラダボール1,900円、シンガポールスタイルポピア2,700円、マンスリーパスタ1,600円、+400円でドリンク・ディナーのバーガーはハーフとレギュラー、クラシック850円・1,470円からトリュフチーズ＆半熟目玉焼き1,050円・1,960円まで (公式サイト)・前菜とサラダ: クラムチャウダー1,320円、十勝ハーブ牛のローストビーフ1,210円、ガーリックシュリンプとアボカドのオーブン焼き990円、コブサラダ1,540円、海老とアボカドのアヒージョ1,210円 (公式サイト)・2026年の口コミ: 冷製スープ、前菜、はちみつのディップのミルクパンつきのランチ、トリュフと生ハムのビスマルクピザ、ベリーソースのチョコレートケーキ、さつまいもチップス、オリジナルビール',
    neighborhood: '西心斎橋2-2-3 A-PLACE心斎橋 B1F。Shinsaibashi 駅7番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。バーガー、サンド、パスタ、ピザ、春巻き、ミルクパンは小麦。サラダ、アヒージョ、ローストビーフ、ジャンバラヤから確認を。',
    vegan_detail: 'ヴィーガンではありません。バーガー、鶏、エビ、チーズ。ランチのサラダボールは枝豆のフムス、キャロットラペ、サルサなど12種類 (公式サイト) だが、すべては書かれていない。',
    notes: '[アメリカ料理・西心斎橋、Blue Note のバーガーと本とジャズの店] レンガと木の広い地下のカフェバーで、新宿の Brooklyn Parlor の大阪店。Blue Note Tokyo のプロデュースで、music・cafe・books・eats・bar を掲げ、ジャズのライブや DJ の夜も。11時から23時まで通しで、ハーフとレギュラーのバーガー、クラムチャウダー、ローストビーフ、ジャンバラヤ、サラダ、ピザ。ランチにはミルクパンとはちみつのディップがつく。160席とソファで、打ち合わせや夜のコーヒーとケーキにも向く。2026年の口コミでは料理と雰囲気が好評で、提供が遅いという声、以前の常連からは音楽が大きいという声も。毎日営業。',
  });
}

save();
