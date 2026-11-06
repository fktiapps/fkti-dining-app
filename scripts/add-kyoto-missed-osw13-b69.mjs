// Kyoto priority (kyoto-missed), worker osw13, batch 69 — lane: Tabelog id mod 6 = 0.
// Core: とよ寿司, ダイテツ食堂. Notable: 焼き肉家 益市 堺町錦店, 寿しのむさし 京都駅八条口店.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-69');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26030634', 'large parent: BAKE the SHOP コトチカ京都店 is BAKE INC.\'s multi-brand shop (BAKE CHEESE TART, RINGO, PRESS BUTTER SAND), opened here in May 2018 as BAKE CHEESE TART (walkerplus; ryutsuu.biz). Large parent → chain (Greg ruling 2026-11-05)');

// ================================================================ とよ寿司
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26008728/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '21:00']);
  put({
    id: 'kyoto_toyo_zushi_okazaki', name: 'とよ寿司 (Toyo Zushi)', category: 'OMNI',
    lat: 35.015798, lng: 135.785668, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy sauce, red miso soup, fried scallops and fried eggplant (2024–2026 reviews); no allergen information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish sushi counter; the soup is bonito broth (2024–2026 reviews).',
    hours_raw: 'Tabelog: 11:30–21:00 (last entry 19:30); closed Thursday and Friday per the hours table, though the shop\'s own note says Wednesday and Friday may close temporarily — phone ahead. No reservations at lunch; book for dinner if possible. A short queue at weekday lunch peaks (November 2025). No service charge — Tabelog, Japanese original 「なし」 (the English page says one may be added). 11 seats: 7 at the counter, 4 at tables. English menu; children and babies welcome (August 2026). No cards; e-money, PayPay and LINE Pay. Non-smoking (smoking spot by the door). Down an alley in Okazaki, 3 min walk from Heian Shrine (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki — an alley near Heian Shrine, 3 min walk from the Dobutsuen-mae bus stop',
    cuisine: 'A long-standing neighbourhood sushi counter in an Okazaki alley, best known for cheap lunch bowls (Tabelog; 2024–2026 reviews) · lunch: tuna nakaochi don ¥1,000 (limited), anago don ¥1,350, seafood don ¥1,500, chirashi, an "Okazaki" nigiri set with soup, all with a bonito-broth soup (Tabelog; 2024–2026 reviews) · evenings: sashimi, nigiri (toro, salmon, uni), kizushi (cured mackerel), fried scallops, hamo, uzaku (2024–2025 reviews) · maki to take away',
    website: null, gmaps: gm('とよ寿司 岡崎南御所町'), menu_url: null,
    notes: '[Sushi · Okazaki, the ¥1,000 tuna bowl near Heian Shrine] A long-established little sushi counter down an alley near Heian Shrine, a lunch refuge from the museum and temple crowds: a limited ¥1,000 tuna nakaochi bowl, anago and seafood bowls and chirashi with a fine bonito-broth soup, and nigiri and sashimi with sake in the evening. Friendly, family-welcoming staff and an English menu. No service charge; no cards.',
    chef_bio: { chef_name: null, roles: ['Owner-chef, not named in a source'], origin: null,
      background: 'Tabelog\'s shop text calls it a long-established sushi shop by Heian Shrine where the owner serves carefully chosen fish at reasonable prices. Reviewers from 2024 to 2026 describe a solid wooden counter, a smiling chef, older regulars, a growing share of foreign visitors and locals collecting maki to take home.',
      philosophy: null,
      specialty: 'Tuna nakaochi don.',
      anecdotes: [
        { text: 'March 2026: "A woman, likely a local resident, came to pick up her ordered maki sushi, and it was nice to see the chef smiling as he handed it to her."', source: R + 'B525177075/' },
        { text: 'May 2024: "Maybe it\'s just the right portion for the seniors, but it left me wanting a bit more."', source: R + 'B485502309/' },
        { text: 'August 2026: "I brought my 5-month-old baby, and they kindly allowed us in."', source: R + 'B534887596/' },
      ],
      japanese_sources_summary: '食べログ: とよ寿司、寿司・海鮮丼・魚介料理、左京区岡崎南御所町44-5、市バス動物園前から徒歩3分、東山駅から徒歩15分、11:30〜21:00 (最終入店19:30)、表では木・金休み、水曜と金曜は臨時休業の場合あり、昼は予約不可、夜は予約推奨、原文でサービス料「なし」、11席 (カウンター7、テーブル4)、英語メニュー、子供可、カード不可、電子マネー・PayPay・LINE Pay可、平安神宮のそばの路地の老舗、中落ち丼1,000円 (数量限定)、穴子丼1,350円、海鮮丼1,500円。口コミ (2024年5月〜2026年8月、英語): 中落ち丼、穴子丼、ちらし、岡崎の握りのセット、かつお出汁のお吸い物、赤だし、刺身、トロ、サーモン、うに、きずし、ほたてフライ、鱧、うざく、持ち帰りの巻き寿司、親切な店員、外国の客も多い、量は少なめという声。',
      confidence: 'medium', sources: [TB, R + 'B484457052/', R + 'B485502309/', R + 'B490115912/', R + 'B502620288/', R + 'B508091721/', R + 'B510943953/', R + 'B517732614/', R + 'B522095147/', R + 'B525177075/', R + 'B534887596/', R + 'B535303756/'] },
    cultural_comfort: { level: 'english', note: 'English menu; friendly to families and foreign visitors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎南御所町44-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.015798, 135.785668); cross-checked: GSI 京都府京都市左京区岡崎南御所町44番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535303756/'],
    price_note: 'Lunch prices from Tabelog\'s shop text and 2024–2026 reviews.', last_checked: TODAY, items: [
      it('鮪の中落ち丼', '', 'Tuna nakaochi don (limited)', '¥1,000', 'Lunch', 'no', 'no', 'Tabelog; March 2026.', 'kaisendon'),
      it('', '', 'Anago don', '¥1,350', 'Lunch', 'no', 'no', 'Tabelog.', 'anago'),
      it('', '', 'Seafood don', '¥1,500', 'Lunch', 'no', 'no', 'Tabelog.', 'kaisendon'),
    ] }, {
    cuisine: '岡崎の路地にある昔からの町の寿司屋で、安い昼の丼で知られる (食べログ、2024〜2026年の口コミ)・昼は数量限定の鮪の中落ち丼1,000円、穴子丼1,350円、海鮮丼1,500円、ちらし、お吸い物付きの「岡崎」の握り。どれもかつお出汁のお吸い物付き (食べログ、2024〜2026年の口コミ)・夜は刺身、握り (トロ、サーモン、うに)、きずし、ほたてフライ、鱧、うざく (2024〜2025年の口コミ)・巻き寿司の持ち帰りも',
    neighborhood: '岡崎。平安神宮近くの路地、市バス動物園前から徒歩3分',
    gf_detail: 'グルテンフリーではない: 醤油、赤だし、ほたてフライ、なすの揚げびたし (2024〜2026年の口コミ)。アレルゲンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 魚の寿司の店で、お吸い物もかつお出汁 (2024〜2026年の口コミ)。',
    notes: '[寿司・岡崎、平安神宮そばの1,000円の中落ち丼] 平安神宮近くの路地にある昔からの小さな寿司屋で、美術館や寺の人混みを逃れる昼の避難所。数量限定1,000円の鮪の中落ち丼、穴子丼、海鮮丼、ちらしに、おいしいかつお出汁のお吸い物。夜は握りと刺身で一杯。家族連れにも親切で英語のメニューも。サービス料なし、カード不可。',
  });
}

// ================================================================ ダイテツ食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26043858/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:30'], ['18:00', '20:30']);
  put({
    id: 'kyoto_daitetsu_shokudo', name: 'ダイテツ食堂 (Daitetsu Shokudo)', category: 'OMNI',
    lat: 35.008395, lng: 135.7465, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: house-made wheat noodles (including mochi-wheat), soy-sauce tare, wontons, karaage (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: black-pork and chicken broth, niboshi, pork back fat, chashu (2026 reviews).',
    hours_raw: 'Tabelog: 11:30–15:30 and 18:00–20:30; closed Thursday. Occasional "morning ramen" days from 7:00 to 10:00 with a single limited bowl (August and September 2026). No reservations. Counter plus 8 table seats at the back (Tabelog). Tabelog lists no cards, e-money or QR, but PayPay was accepted by October 2026 (review). Large size free on the regular menu (October 2026). On the Sanjo-kai shopping street between Horikawa and Senbon, near Nijo Stn. Opened 21 October 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-kai shopping street (Mibu side) — 8 min walk from Nijo Stn',
    cuisine: 'Ramen with hand-kneaded, house-made thick curly noodles, from the owner of a popular Kyoto ramen shop (2026 reviews) · shoyu ramen ¥1,100 in a black-pork-and-chicken broth (August 2026); niboshi shoyu with Rausu kombu and pork back fat ¥1,150; ajitama white-shoyu ramen ¥1,250; tonkotsu shoyu (October 2026) · thick, flat mochi-wheat abura soba (250 g / 300 g); chilled niboshi ramen with ginger ¥1,300 in summer (August–September 2026) · wontons (3) ¥330; shime-meshi of rice with Rausu kombu tsukudani ¥150; karaage and rice sets; pork-stew rice ¥500 (2026 reviews) · two kinds of chashu (thigh and belly) on most bowls',
    website: null, gmaps: gm('ダイテツ食堂 三条会商店街'), menu_url: null,
    notes: '[Ramen · Sanjo-kai arcade, house-made thick noodles] A year-old ramen shop on the Sanjo-kai shopping street whose point is its own hand-kneaded noodles — thick, curly and chewy in shoyu, niboshi and white-shoyu bowls, flat mochi-wheat in the abura soba — with two kinds of chashu and a free large size. One diner did not take to the chilled summer ramen (August 2026); a morning bowl was on the salty side (September 2026). Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; per reviewers, a new shop from the owner of the ramen shop "Hebinoya"'], origin: null,
      background: 'Opened 21 October 2025 (Tabelog). Reviewers in 2026 call it a new venture from the owner of the popular ramen shop "Hebinoya" (August 2026) and the Daitetsu group\'s fourth shop (September 2026), with a noodle machine in the shop for irregular, hand-kneaded noodles. For its first anniversary in October 2026 it served a collaboration bowl with an Ichijoji tonkotsu shop. Featured on the KBS Kyoto programme "太陽、京都で麺食らう。" broadcast 3 September 2026 (web listing).',
      philosophy: 'Per the programme listing, the owner wants to grow a "みんなの味" (everyone\'s flavour) that the neighbourhood should have.',
      specialty: 'House-made thick noodles; niboshi shoyu ramen.',
      anecdotes: [
        { text: 'August 2026: "This is not a direct spin-off from the popular \'Hebinoya,\' but rather a new proposal from the same owner."', source: R + 'B517198036/' },
        { text: 'August 2026: the chilled ramen — "honestly, the flavor didn\'t quite match my preferences this time. However, the handmade noodles were impressive."', source: R + 'B535085024/' },
        { text: 'September 2026, a limited morning bowl called "kishima": "The broth was on the saltier side, the offal was tender."', source: R + 'B535544691/' },
      ],
      japanese_sources_summary: '食べログ: ダイテツ食堂、ラーメン、中京区三条通神泉苑西入今新在家西町3-1、JR二条駅・二条城前駅、11:30〜15:30・18:00〜20:30、木曜休み、予約不可、奥にテーブル8席、カード・電子マネー・QR不可、2025年10月21日オープン。京都三条会商店街の店舗ページ: 黒豚と鶏のスープ、手打ち式の自家製麺。KBS京都「太陽、京都で麺食らう。#16」(2026年9月3日放送): 店主は地域に「みんなの味」を育てたい。口コミ (2026年1〜10月、英語): 人気店の店主の新しい店、ダイテツグループの4店目、店内の製麺機で手もみ風の不揃いな太麺、醤油ラーメン1,100円、煮干醤油1,150円 (煮干と羅臼昆布、黒豚の背脂)、味玉白醤油1,250円、豚骨醤油、もち小麦の平打ち太麺の油そば (250g・300g)、冷やし煮干ラーメン1,300円、ワンタン3個330円、羅臼昆布の佃煮の〆めし150円、唐揚げとご飯のセット、モモとバラの2種のチャーシュー、並盛と大盛が同じ値段、朝ラーメン (7〜10時) の限定の一杯、1周年に一乗寺の豚骨店とのコラボ、PayPay可に、冷やしは好みでなかったという声、朝の一杯は塩気が強めという声。',
      confidence: 'medium', sources: [TB, R + 'B515760559/', R + 'B516013189/', R + 'B516627764/', R + 'B517198036/', R + 'B517629078/', R + 'B521823548/', R + 'B535085024/', R + 'B535544691/', R + 'B536483370/', R + 'B537363218/', R + 'B537968873/', R + 'B537989317/'] },
    cultural_comfort: { level: 'japanese', note: 'Local ramen counter; menu board outside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通神泉苑西入今新在家西町3-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026 (first anniversary).' },
    pin_source: `Tabelog ${TB} (35.008395, 135.746500); cross-checked: GSI 京都府京都市中京区今新在家西町3番地 (lot) 56m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537968873/', R + 'B537363218/', R + 'B517198036/'],
    price_note: 'Prices from 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen', '¥1,100', 'Ramen', 'no', 'no', 'August 2026.', 'shoyu_ramen'),
      it('', '', 'Niboshi shoyu ramen', '¥1,150', 'Ramen', 'no', 'no', 'October 2026.', 'niboshi_ramen'),
      it('', '', 'Ajitama white-shoyu ramen', '¥1,250', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu_ramen'),
      it('', '', 'Wontons (3)', '¥330', 'Side', 'no', 'no', 'October 2026.', 'wonton'),
    ] }, {
    cuisine: '手もみ風の自家製の太いちぢれ麺のラーメン。京都の人気ラーメン店の店主の店 (2026年の口コミ)・黒豚と鶏のスープの醤油ラーメン1,100円 (2026年8月)、羅臼昆布と背脂の煮干醤油1,150円、味玉白醤油1,250円、豚骨醤油 (2026年10月)・もち小麦の平打ち太麺の油そば (250g・300g)、夏は生姜の香る冷やし煮干ラーメン1,300円 (2026年8〜9月)・ワンタン3個330円、羅臼昆布の佃煮の〆めし150円、唐揚げとご飯のセット、豚の煮込みご飯500円 (2026年の口コミ)・チャーシューはモモとバラの2種',
    neighborhood: '三条会商店街 (壬生側)。二条駅から徒歩8分',
    gf_detail: 'グルテンフリーではない: 自家製の小麦の麺 (もち小麦も)、醤油だれ、ワンタン、唐揚げ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 黒豚と鶏のスープ、煮干、背脂、チャーシュー (2026年の口コミ)。',
    notes: '[ラーメン・三条会商店街、自家製の太麺] 三条会商店街にある開店1年のラーメン店で、売りは店で打つ手もみ風の麺。醤油、煮干、白醤油には太いちぢれ麺、油そばにはもち小麦の平打ち麺、チャーシューは2種で大盛も同じ値段。夏の冷やしは好みでなかったという声 (2026年8月) や、朝の一杯は塩気が強めという声 (2026年9月) も。木曜休み。',
  });
}

// ================================================================ 焼き肉家 益市 堺町錦店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26015976/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.masuichi.jp/nishiki/';
  const W = day(['17:00', '22:00']), F = day(['17:00', '22:30']);
  put({
    id: 'kyoto_masuichi_sakaimachi_nishiki', name: '焼き肉家 益市 堺町錦店 (Yakinikuya Masuichi Sakaimachi Nishiki)', category: 'OMNI',
    lat: 35.005714, lng: 135.763359, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: marinated yakiniku with soy-based tare, cold noodles (2026 reviews); no allergen information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef yakiniku house (Tabelog; reviews).',
    hours_raw: 'Tabelog: Sun–Thu 17:00–22:00 (last order 21:30); Fri–Sat 17:00–22:30 (last order 22:00); holidays posted on Instagram and the website. Book (phone from 14:00); 2-hour limit for reserved seats, 3 hours in private rooms; online bookings cannot choose seat type. Private-room fee for room bookings — Tabelog, Japanese original 「個室のご予約は個室料いただいております。」 77 seats over two floors, private rooms for 1–8, sunken seating. Non-smoking. Menus in English, Chinese and Korean; children welcome, kids\' menu. Cards (incl. UnionPay), PayPay, Alipay, WeChat Pay; no e-money.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sakaimachi, just north of Nishiki-koji — 10 min walk from Karasuma / Shijo Stns (Shijo underground exit 14)',
    cuisine: 'A Kyoto-styled yakiniku house of thin-sliced, creatively plated beef, from a Kyoto group (Tabelog; 2025–2026 reviews) · courses including "Kiwami" and a premium course with Omi beef yukhoe, kalbi and choice cuts (April–May 2026); a celebration "meat cake" (August 2026) · thick-cut tongue with coarse salt, outside skirt, loin fresh enough to eat raw, thick-cut maruchin (thigh) (2026 reviews) · cold noodles to finish (May 2026)',
    website: SITE, gmaps: gm('焼き肉家 益市 堺町錦店'), menu_url: SITE,
    notes: '[Yakiniku · Sakaimachi near Nishiki, Kyoto-styled grill house] A stylish two-floor yakiniku by Nishiki Market from the local Masuichi group: thin-sliced, prettily plated beef, thick-cut tongue, Omi beef yukhoe and good-value courses, with private rooms and multilingual menus. Courses can run small (April 2026); it closes at 22:00 most nights (August 2026). Private-room fee.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; part of the 益市 group (Tabelog)'], origin: null,
      background: 'Per Tabelog, sister shops are 焼き肉家 益市 八条口店 (Kyoto Station), 益市 本店 (Kisshoin), 益市 東店 (near Toji), and three other-named restaurants around Shijo (Yakiniku Soya, Fubito Suuro, Kyoto Meat Dining). Reviewers in 2026 describe a calm, Kyoto-style interior, adults downstairs and families upstairs, energetic and attentive staff, and frosted beer mugs.',
      philosophy: null,
      specialty: 'Thick-cut tongue; Omi beef yukhoe.',
      anecdotes: [
        { text: 'April 2026: "Overall, the portions were a bit smaller than we expected, so we ended up ordering a little extra, resulting in a bill similar to what we usually pay."', source: R + 'B527226290/' },
        { text: 'August 2026: for a birthday course "We were able to take home the flower that came with the meat cake," though "the operating hours ended at 10 PM, so we couldn\'t stay late."', source: R + 'B534734497/' },
      ],
      japanese_sources_summary: '食べログ: 焼き肉家 益市 堺町錦店、焼肉・ホルモン・居酒屋、中京区堺町錦小路上ル東側、烏丸駅・四条駅から徒歩10分 (地下道14番出口)、日〜木 17:00〜22:00 (L.O. 21:30)・金土 17:00〜22:30 (L.O. 22:00)、休みはInstagramとサイトで、電話は14時から、予約席は2時間・個室は3時間、原文で「個室のご予約は個室料いただいております。」、77席、個室 (1〜8名)、掘りごたつ、禁煙、英語・中国語・韓国語のメニュー、子供可・子供メニュー、カード・PayPay・Alipay・WeChat Pay可、電子マネー不可、姉妹店は益市 八条口店・本店 (吉祥院)・東店 (東寺近く)・焼肉 soya、Fubito Suuro、Kyoto Meat Dining。口コミ (2025年3月〜2026年8月、英語): 京都らしい店内と器、薄切りの肉、近江牛のユッケ、厚切りタン、ハラミ、生で食べられるほどのロース、厚切りのマルチョウ、極みコースとプレミアムコース、肉ケーキ、冷麺、コースの量が少なめという声、22時で閉まるのが残念という声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B453075071/', R + 'B504562337/', R + 'B524249433/', R + 'B524947565/', R + 'B526825171/', R + 'B527226290/', R + 'B529264189/', R + 'B529430717/', R + 'B529718966/', R + 'B530922960/', R + 'B534734497/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean; private-room fee.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町錦小路上ル東側 (菊屋町517)',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026; group website.' },
    pin_source: `Tabelog ${TB} (35.005714, 135.763359); cross-checked: GSI 京都府京都市中京区菊屋町517番地 (lot, address from Ikyu restaurant.ikyu.com/148031) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527226290/', R + 'B529430717/'],
    price_note: 'No prices in the fetched sources; spend ¥6,000–8,000 a head (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omi beef yukhoe', null, 'Meat', 'no', 'no', 'May 2026.', 'yukhoe'),
      it('', '', 'Thick-cut tongue with coarse salt', null, 'Meat', 'ask', 'no', 'June 2026.', 'gyutan'),
    ] }, {
    cuisine: '京都の焼肉グループの、京都らしく盛り付けた薄切り肉の焼肉店 (食べログ、2025〜2026年の口コミ)・「極み」やプレミアムのコースに近江牛のユッケ、カルビ、厳選部位 (2026年4〜5月)。お祝いの肉ケーキ (2026年8月)・粗塩の厚切りタン、ハラミ、生でも食べられるほどのロース、厚切りのマルチョウ (2026年の口コミ)・締めの冷麺 (2026年5月)',
    neighborhood: '堺町、錦小路の少し北。烏丸駅・四条駅から徒歩10分 (四条駅の地下道14番出口)',
    gf_detail: 'グルテンフリーではない: 醤油系のたれの味付け肉、冷麺 (2026年の口コミ)。アレルゲンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 牛肉の焼肉店 (食べログ、口コミ)。',
    notes: '[焼肉・錦の近く堺町、京都らしい焼肉店] 錦市場そばの、地元の益市グループの2階建てのおしゃれな焼肉店。薄切りできれいに盛った牛肉、厚切りタン、近江牛のユッケ、手頃なコース。個室や多言語のメニューも。コースの量が少なめという声 (2026年4月) や、ほとんどの日は22時で閉まるという声 (2026年8月) も。個室料あり。',
  });
}

// ================================================================ 寿しのむさし 京都駅八条口店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26003088/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sushinomusashi.com/';
  const H = day(['10:30', '21:45']);
  put({
    id: 'kyoto_sushi_no_musashi_hachijo', name: '寿しのむさし 京都駅八条口店 (Sushi no Musashi, Kyoto Station Hachijo Exit)', category: 'OMNI',
    lat: 34.984677, lng: 135.759428, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy sauce, creative and fried sushi, yuba sweets (Tabelog; 2026 reviews); no allergen information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish conveyor-belt sushi shop (Tabelog).',
    hours_raw: 'Tabelog: daily 10:30–21:45 (last entry 21:20, last order 21:30); open all year. Take-away 9:00–21:45, bookable for same-day pickup from an hour ahead (official site). No reservations; queues at peak, quick turnover (2026 reviews). 31 seats; non-smoking; wheelchair access; children welcome. Japanese and English menus; order from the chefs as well as off the belt (June 2026). Cards, transit IC and e-money, QR (PayPay, Alipay, WeChat Pay). In Asty Road (Kyoto omotenashi-koji), 1 min from the Hachijo Exit Shinkansen gates.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, Hachijo Exit — Asty Road, by the Shinkansen gates',
    cuisine: 'Kyoto\'s own conveyor-belt sushi, founded 1977 at Kawaramachi-Sanjo, hand-formed by chefs (official site; Tabelog) · about 50 kinds always on, plates from ¥146 before tax (Tabelog) · Kyoto touches: hamo oshi-zushi (and hamo sugata-zushi to order at this shop), yuba sweets; straw-seared bonito, toro, tamago, horse sashimi (Tabelog; official site; 2026 reviews) · take-away sushi boxes',
    website: SITE, gmaps: gm('寿しのむさし 京都駅八条口店'), menu_url: SITE + 'menu/',
    notes: '[Conveyor sushi · Kyoto Station Hachijo Exit, a local since 1977] The station branch of Kyoto\'s own Kawaramachi-Sanjo conveyor-belt sushi, by the Shinkansen gates: chef-made plates from ¥146, straw-seared bonito, hamo oshi-zushi in season, and take-away boxes for the train, open 10:30 to 21:45 every day. Expect queues and a mostly tourist crowd; some found it ordinary for the price (July–August 2026), and popular fish sells out late (June 2026).',
    chef_bio: { chef_name: null, roles: ['Not named in a source; branch of 寿しのむさし (official site)'], origin: null,
      background: 'Per the official site, 寿しのむさし opened in 1977 at Kawaramachi-Sanjo and has run for over forty years, particular about fish, rice, vinegar, tea, soy sauce, wasabi and nori; current shops are the Sanjo main shop, this Hachijo Exit shop, and a take-away-only shop at Kamihorikawa. Reviewers in 2026 describe sushi on the belt plus orders straight to the chefs, quick service, and a crowd that is about half foreign visitors.',
      philosophy: 'From the site: "真心も 美味しさも 特上です" (sincerity and flavour, both top grade).',
      specialty: 'Straw-seared bonito; hamo oshi-zushi.',
      anecdotes: [
        { text: 'June 2026: "When I visited about an hour before the last order, I found that items like hamachi and aji were sold out."', source: R + 'B530486127/' },
        { text: 'July 2026: "I couldn\'t understand what this restaurant\'s appeal was… While it is indeed affordable, there are also some expensive items, so be cautious."', source: R + 'B531161802/' },
        { text: 'July 2026: a former regular of the Sanjo main shop "usually avoid[s] this location because it\'s always crowded."', source: R + 'B532235030/' },
      ],
      japanese_sources_summary: '公式サイト: 京都の寿しのむさし、職人が握る地魚の回転寿司、1977年に京都の河原町三条で開店、四十余年、ネタ・米・酢・お茶・醤油・わさび・海苔・清潔さ・気配りにこだわる、店舗は三条本店・京都駅八条口店・上堀川店 (ネット予約テイクアウト受取専用)、京都駅八条口店限定のはも姿寿司の予約、持ち帰りは当日最短1時間後の予約可。食べログ: 寿しのむさし 京都駅八条口店、回転寿司、下京区東塩小路高倉町8-3 JR京都駅構内アスティ1F、新幹線側の八条口から徒歩1分、毎日 10:30〜21:45 (最終入店21:20、L.O. 21:30)、持ち帰り9:00〜21:45、年中無休、予約不可、31席、禁煙、車椅子可、カード・電子マネー・QR可、常時約50種、1皿146円 (税抜) から、鱧の押し寿司、京ゆばのスイーツ。口コミ (2026年5〜9月、英語): 藁焼きの鰹、トロ、玉子、馬刺し、日本語と英語のメニュー、職人に直接注文、外国の客が半分ほど、行列、遅い時間は品切れ、普通の回転寿司で割高な皿もという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B529214425/', R + 'B530486127/', R + 'B531161802/', R + 'B531825638/', R + 'B532007136/', R + 'B532235030/', R + 'B533189339/', R + 'B535083062/', R + 'B535896312/', R + 'B538392901/'] },
    cultural_comfort: { level: 'english', note: 'English menu; conveyor belt plus ordering from the chefs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区東塩小路高倉町8-3 JR京都駅構内アスティ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site lists the shop; Tabelog reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.984677, 135.759428); cross-checked: GSI 京都府京都市下京区東塩小路高倉町 (town only, no lot) 171m — inside the station building, so marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'From Tabelog\'s shop text.', last_checked: TODAY, items: [
      it('', '', 'Sushi plates (about 50 kinds)', 'from ¥146 + tax', 'Sushi', 'no', 'no', 'Tabelog.', 'kaitenzushi'),
      it('', '', 'Hamo oshi-zushi', null, 'Kyoto specials', 'no', 'no', 'Tabelog; official site.', 'hamo'),
    ] }, {
    cuisine: '1977年に河原町三条で始まった京都の回転寿司で、職人が握る (公式サイト、食べログ)・常時約50種、1皿146円 (税抜) から (食べログ)・京都らしい鱧の押し寿司 (この店では鱧の姿寿司も予約で)、京ゆばのスイーツ。藁焼きの鰹、トロ、玉子、馬刺し (食べログ、公式サイト、2026年の口コミ)・持ち帰りの寿司も',
    neighborhood: '京都駅八条口。アスティロード、新幹線の改札のそば',
    gf_detail: 'グルテンフリーではない: 醤油、創作寿司や揚げ物、ゆばのスイーツ (食べログ、2026年の口コミ)。アレルゲンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 魚の回転寿司 (食べログ)。',
    notes: '[回転寿司・京都駅八条口、1977年からの京都の店] 河原町三条で生まれた京都の回転寿司の、新幹線改札そばの駅の店。職人が握る146円からの皿、藁焼きの鰹、季節の鱧の押し寿司、電車用の持ち帰りも、毎日10時半〜21時45分。行列と観光客が多く、値段の割に普通という声 (2026年7〜8月) や、遅い時間は人気のネタが品切れという声 (2026年6月) も。',
  });
}

save();
