// Kyoto priority (kyoto-missed), worker osw13, batch 71 — lane: Tabelog id mod 6 = 0.
// Core: 美菜莉 JR京都伊勢丹店, 二条 えん. Notable: 中国料理 青冥 祇園店, 炭炉まん.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-71');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26002110', 'group size unconfirmed: 栞屋 烏丸仏光寺店 is run by 株式会社shioriya (NTA invoice T3130002023561, Fushimi), whose 栞屋グループ runs creative-washoku shops, bars and dining bars in Kyoto and Shiga (doda listing, June 2026) — at least ぎゃらりぃ栞屋, Fu-Zuba Shioriya, Foods bar 栞屋 and 御肴ずっころばし besides this one; the full count could not be confirmed under 5');

// ================================================================ 美菜莉 JR京都伊勢丹店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26023926/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_minari_isetan', name: '美菜莉 JR京都伊勢丹店 (Minari, JR Kyoto Isetan)', category: 'OMNI',
    lat: 34.98577, lng: 135.757277, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: chijimi, cold noodles, japchae and gochujang- and soy-based sauces in the sets (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegetarian options and the menu is vegetable-led, but sets include meat soups, eggs and kimchi (2026 reviews).',
    hours_raw: 'Tabelog: daily 11:00–22:00 (last order 21:00); closed on JR Kyoto Isetan\'s closing days. Online booking only for up to 4, until the day before and for times up to 18:00; 5 or more by phone. Busy at weekend lunch — check the wait by QR code (May 2026). 45 seats (41 at tables, 4 on sofas), semi-private seating; non-smoking; wheelchair access; children welcome. Cards accepted; e-money only Alipay and WeChat Pay (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station — JR Kyoto Isetan 11F',
    cuisine: 'Vegetable-forward Korean home cooking in set meals (2026 reviews; Tabelog) · sets with kimchi, a small chijimi, quail eggs and side dishes: stone-grilled bibimbap; bibimbap with sundubu ¥2,180; Minari cold-noodle set ¥1,958; samgyetang (half chicken); bossam of steamed pork to wrap in perilla; chadolbagi brisket stir-fry with barley rice (May–October 2026) · à la carte seafood japchae (June 2026); a summer cold-noodle fair (August 2026)',
    website: null, gmaps: gm('美菜莉 ジェイアール京都伊勢丹'), menu_url: null,
    notes: '[Korean · Kyoto Station Isetan 11F, vegetable-heavy set meals] A calm Korean home-cooking room on JR Kyoto Isetan\'s restaurant floor: bibimbap, sundubu, samgyetang and bossam in sets of kimchi and little side dishes, mildly spiced and full of vegetables — easy off the train or with children. Diners found the set chijimi small or cold (June, September 2026) and the bossam pork tough (October 2026).',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers in 2026 describe a spacious, semi-private room on the department store\'s restaurant floor, sweeter, mild seasoning that suited children, solo women and small groups, and fewer tourists than other Kyoto Station spots (June 2026). A 美菜莉 also runs on Ginza Mitsukoshi\'s 11th floor (LINE notice); an August 2026 diner mentions a popular Tokyo branch.',
      philosophy: null,
      specialty: 'Stone-grilled bibimbap; samgyetang.',
      anecdotes: [
        { text: 'October 2026: "the pork was tougher than I expected, making it a bit difficult to chew… Also, the vegetables were unseasoned, so a little dipping sauce would have been appreciated."', source: R + 'B538066146/' },
        { text: 'June 2026: "I was surprised by the small size of the chijimi in the set."', source: R + 'B530998096/' },
        { text: 'June 2026: "overall, the flavors were on the sweeter side, which was comforting since we had elementary school kids with us."', source: R + 'B530356985/' },
      ],
      japanese_sources_summary: '食べログ: 美菜莉 JR京都伊勢丹店、韓国料理・焼肉・バル、下京区烏丸通塩小路下ル東塩小路町 ジェイアール京都伊勢丹 11F、毎日 11:00〜22:00 (L.O. 21:00)、休みはJR京都伊勢丹に準じる、ネット予約は4名まで前日までで18時までの時間、5名以上は電話、45席 (テーブル41、ソファ4)、個室、禁煙、車椅子可、子供可、野菜にこだわり・ベジタリアン対応、カード可、電子マネーは Alipay と WeChat Pay のみ。口コミ (2026年5〜10月、英語): 石焼ビビンバ、ビビンバとスンドゥブのセット2,180円、美菜莉冷麺セット1,958円、参鶏湯、ポッサム、チャドルバギ炒め、海鮮チャプチェ、キムチ・小さなチヂミ・うずら卵のおかず、QRコードで待ち時間を確認、甘めでやさしい味、チヂミが小さい・冷たいという声、ポッサムの豚が硬いという声、東京にも店があるという声。三越銀座店の11階にも美菜莉 (LINEのお知らせ)。',
      confidence: 'medium', sources: [TB, R + 'B527986192/', R + 'B528126631/', R + 'B528266007/', R + 'B530356985/', R + 'B530998096/', R + 'B531973340/', R + 'B533981405/', R + 'B535356569/', R + 'B536511886/', R + 'B538066146/', 'https://page.line.me/bjk6494e/notice/1744982168513891'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant floor; mild spice; online booking for up to 4.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通塩小路下ル東塩小路町 ジェイアール京都伊勢丹 11F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.985770, 135.757277); cross-checked: GSI 京都府京都市下京区東塩小路町901番地 (lot; JR Kyoto Isetan\'s lot, as Tabelog gives no number) 112m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528126631/', R + 'B527986192/'],
    price_note: 'Prices from May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Bibimbap and sundubu set', '¥2,180', 'Set', 'no', 'no', 'May 2026.', 'bibimbap'),
      it('', '', 'Minari cold-noodle set (with chijimi, kimchi, sides)', '¥1,958', 'Set', 'no', 'no', 'May 2026.', 'naengmyeon'),
    ] }, {
    cuisine: '野菜たっぷりの韓国家庭料理のセット (2026年の口コミ、食べログ)・キムチ、小さなチヂミ、うずら卵、おかず付きのセット。石焼ビビンバ、ビビンバとスンドゥブ2,180円、美菜莉冷麺セット1,958円、参鶏湯 (半羽)、エゴマの葉で包む蒸し豚のポッサム、麦ご飯とチャドルバギ炒め (2026年5〜10月)・単品の海鮮チャプチェ (2026年6月)。夏の冷麺フェア (2026年8月)',
    neighborhood: '京都駅。JR京都伊勢丹11階',
    gf_detail: 'グルテンフリーではない: チヂミ、冷麺、チャプチェ、コチュジャンや醤油のたれ (2026年の口コミ)。',
    vegan_detail: '要確認: 食べログではベジタリアン対応で野菜中心だが、セットには肉のスープ、卵、キムチも (2026年の口コミ)。',
    notes: '[韓国料理・京都駅伊勢丹11階、野菜たっぷりのセット] JR京都伊勢丹のレストラン街にある落ち着いた韓国家庭料理の店。ビビンバ、スンドゥブ、参鶏湯、ポッサムをキムチや小皿のおかずとセットで。辛さ控えめで野菜たっぷり、電車の前後や子供連れにも。セットのチヂミが小さい・冷たいという声 (2026年6月・9月) や、ポッサムの豚が硬いという声 (2026年10月) も。',
  });
}

// ================================================================ 二条 えん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26032278/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '22:30']), B = day(['17:00', '22:00']);
  put({
    id: 'kyoto_nijo_en', name: '二条 えん (Nijo En)', category: 'OMNI',
    lat: 35.010691, lng: 135.744498, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura izakaya; oden, miso and soy dishes (2023–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog lists vegetarian options and plenty of vegetables, but the house pride is its dashi (oden, soups) (2024–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Fri, Sat 17:00–22:30 (last order 22:00); Wed 17:00–22:00 (last orders food 21:00, drinks 21:30); Sun 17:00–22:00; closed Thursday and some other days. Book for evenings (August 2026); next-day or same-day course bookings by phone. No service charge — Tabelog, Japanese original 「無し」 (the English page says a fee is charged). 26 seats: a 6-seat counter and a sofa table downstairs, 3 tables upstairs (upstairs for 8 or more; projector, families welcome). Non-smoking; children welcome, kids\' menu; BYO drinks allowed; sommelier. Cards, e-money, QR (PayPay, Alipay). Opened 9 April 2019 (Tabelog).',
    hours: { 0: A, 1: A, 2: B, 4: A, 5: A, 6: B }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nijo Station — 5 min walk, Nishinokyo backstreets',
    cuisine: 'A small tempura-and-oden izakaya near Nijo Station that prides itself on its dashi (2023–2026 reviews) · ten-kind tempura platter, with salt or a separate dashi; summer ayu fry (2024–2026) · oden and oden meatballs in house dashi; Kujo leeks with vinegared miso; yuba gratin with white miso and cheese; pork kakuni; nut salad; duck with green onion; amberjack or sea bream carpaccio in ponzu (2023–2026 reviews) · chirimen-sansho rice, meat-miso rice, white-miso soup to finish; uncommon Japanese sake (2024–2026)',
    website: null, gmaps: gm('二条 えん 西ノ京職司町'), menu_url: null,
    notes: '[Tempura and oden · Nijo Station, a dashi-proud izakaya] A cosy two-floor izakaya by Nijo Station: a ten-kind tempura platter, oden in the house dashi, Kyoto vegetables with white miso, and a good list of less-common sake, with the owner chatting across the counter. Some found portions small and prices high (June, August 2026), and late in the evening much sells out. No service charge. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner, not named in a source'], origin: null,
      background: 'Opened 9 April 2019 (Tabelog). Reviewers from 2023 to 2026 describe a cosy room where solo diners chat with the owner across the counter, staff who say "we pride ourselves on our dashi" (January 2024), attentive service, and an upstairs room used by families and groups.',
      philosophy: null,
      specialty: 'Ten-kind tempura platter; oden.',
      anecdotes: [
        { text: 'January 2024: on the staff\'s recommendation — "We pride ourselves on our dashi" — the family chose oden.', source: R + 'B479561300/' },
        { text: 'June 2026: "while the portions were on the smaller side, the overall flavor of the dishes was quite sweet… many items were sold out" at 9 p.m.', source: R + 'B529467989/' },
        { text: 'August 2026: "the cost-performance is not great. The prices are higher than expected, and the portion sizes are not very large."', source: R + 'B534645013/' },
      ],
      japanese_sources_summary: '食べログ: 二条 えん、天ぷら・日本料理・居酒屋、中京区西ノ京職司町4-9、JR二条駅から徒歩5分、月火金土 17:00〜22:30 (L.O. 22:00)・水 17:00〜22:00・日 17:00〜22:00、木曜休み、不定休あり、原文でサービス料「無し」、26席 (1階カウンター6席とソファ1卓、2階3卓)、2階は8名から、プロジェクター、禁煙、子供可・子供メニュー、持ち込み可、ソムリエ、カード・電子マネー・QR可、ベジタリアン対応、2019年4月9日オープン。口コミ (2023年10月〜2026年10月、英語): 天ぷら10種盛り、出汁が自慢のおでん、おでんの肉団子、九条ねぎの酢味噌、湯葉の白味噌チーズグラタン、豚の角煮、ナッツのサラダ、鴨とねぎ、カンパチや鯛のカルパッチョ、鮎の天ぷら、ちりめん山椒ご飯、肉味噌ご飯、白味噌汁、珍しい日本酒、店主とカウンター越しに話せる、量が少なめで甘めという声、割高という声。',
      confidence: 'medium', sources: [TB, R + 'B472446635/', R + 'B479561300/', R + 'B487220568/', R + 'B518788402/', R + 'B522904123/', R + 'B527650322/', R + 'B529467989/', R + 'B532912409/', R + 'B534190374/', R + 'B534620588/', R + 'B534645013/', R + 'B537264511/'] },
    cultural_comfort: { level: 'japanese', note: 'Small local izakaya; book for evenings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西ノ京職司町4-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010691, 135.744498); cross-checked: GSI 京都府京都市中京区西ノ京職司町4番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534620588/'],
    price_note: 'Few prices in the sources; one diner\'s full dinner with drinks came to ¥8,110 (August 2026).', last_checked: TODAY, items: [
      it('', '', 'Tempura platter, ten kinds', null, 'Tempura', 'no', 'no', '2024–2026 reviews.', 'tempura'),
      it('', '', 'Assorted oden', null, 'Oden', 'no', 'no', '2024–2026 reviews.', 'oden'),
    ] }, {
    cuisine: '二条駅近くの、出汁が自慢の小さな天ぷらとおでんの居酒屋 (2023〜2026年の口コミ)・天ぷら10種盛り、塩か別添えの出汁で。夏は鮎の天ぷら (2024〜2026年)・自家製の出汁のおでんとおでんの肉団子、九条ねぎの酢味噌、湯葉の白味噌チーズグラタン、豚の角煮、ナッツのサラダ、鴨とねぎ、カンパチや鯛のポン酢のカルパッチョ (2023〜2026年の口コミ)・締めはちりめん山椒ご飯、肉味噌ご飯、白味噌汁。珍しい日本酒 (2024〜2026年)',
    neighborhood: '二条駅。徒歩5分、西ノ京の路地',
    gf_detail: 'グルテンフリーではない: 天ぷらの居酒屋。おでん、味噌や醤油の料理 (2023〜2026年の口コミ)。',
    vegan_detail: '要確認: 食べログではベジタリアン対応で野菜も多いが、自慢は出汁 (おでん、汁物) (2024〜2026年の口コミ)。',
    notes: '[天ぷらとおでん・二条駅、出汁が自慢の居酒屋] 二条駅そばの2階建ての居心地のよい居酒屋。天ぷら10種盛り、自家製の出汁のおでん、京野菜の白味噌の料理、珍しい日本酒もそろい、カウンター越しに店主と話せる。量が少なく割高という声 (2026年6月・8月) や、遅い時間は品切れが多いという声も。サービス料なし。木曜休み。',
  });
}

// ================================================================ 中国料理 青冥 祇園店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26006394/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ching-ming.com/';
  const H = day(['11:30', '15:45'], ['17:00', '21:30']);
  put({
    id: 'kyoto_ching_ming_gion', name: '中国料理 青冥 祇園店 (Ching-Ming Gion)', category: 'OMNI',
    lat: 35.00419, lng: 135.775033, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakisoba, ramen, karaage, sweet-and-sour pork and soy-based sauces (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Cantonese-leaning meat and seafood dishes and set meals (2026 reviews).',
    hours_raw: 'Tabelog: 11:30–15:45 and 17:00–21:30 (last order 21:00); closed irregularly; hours may change — see the official site. Book for lunch: near-full by noon (June, August, October 2026). Service charge 10% after 17:00 — Tabelog, Japanese original 「17時以降はご飲食代の10％をサービス料として頂戴しております」. 70 seats with semi-private areas; groups over 50; tablet ordering. Non-smoking (including heated tobacco). English menu; children welcome. Cards, transit IC and e-money, QR. 5th floor of the Yasaka Gion Building beside Yojiya; the entrance is behind a coffee shop (October 2026); window views over Hanamikoji.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Shijo-dori at Hanamikoji — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Cantonese-leaning Chinese from an Osaka house founded in 1967, with a view over Gion (Tabelog; 2026 reviews) · lunch: "Hanami gozen" of shrimp chili, sweet-and-sour pork and karaage with small dishes, corn soup and dessert ¥1,600; sweet-and-sour pork set with mapo tofu and yakisoba; daily set under ¥1,500 (August–October 2026) · à la carte: stir-fried beef with peppers, salt-stir-fried scallops and shrimp, eggplant with minced meat, shrimp mayonnaise, eight-treasure yakisoba, shark-fin paitan ramen, cold jellyfish ¥2,400, almond jelly (2026 reviews) · all-you-can-drink courses and private parties',
    website: SITE, gmaps: gm('中国料理 青冥 祇園店'), menu_url: SITE,
    notes: '[Chinese · Gion, a 5th-floor view over Hanamikoji] The Kyoto branch of Osaka\'s 1967 Chinese house Ching-Ming, five floors above the Gion crossing with windows over Hanamikoji: a good-value ¥1,600 lunch gozen, eight-treasure yakisoba and shark-fin ramen at night. Regulars note shrinking portions (July–August 2026); some found the pre-made side dishes just okay (August 2026) and the room too cold. 10% service charge after 17:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; branch of 青冥 (Ching-Ming)'], origin: null,
      background: '青冥 was founded in 1967 with its main shop in Dojima, Osaka (Ikyu listing); a 2026 recruiting page for 株式会社ミヨシコーポレーション lists 青冥 堂島本店, 祇園店, 阪急池田店 and 大丸梅田店. Reviewers in 2026 describe a classic, spacious room of local regulars and lunching women, tablet ordering, and a menu more Cantonese than Sichuan; one diner came for the eight-treasure yakisoba remembered from visits to the Umeda shop with a late father (September 2026).',
      philosophy: null,
      specialty: 'Eight-treasure yakisoba; shark-fin paitan ramen.',
      anecdotes: [
        { text: 'September 2026: "My late father often took me to the Chinmin in Umeda… He always ordered the Eight Treasure Yakisoba. This Kyoto branch was also incredibly delicious."', source: R + 'B535099801/' },
        { text: 'July 2026, a regular: "it seems like the portion sizes have decreased compared to before."', source: R + 'B496058367/' },
        { text: 'August 2026: "The freshly made sweet and sour pork was delicious, but the pre-made mapo tofu and stir-fried noodles with sauce were just okay."', source: R + 'B535429840/' },
      ],
      japanese_sources_summary: '食べログ: 中国料理 青冥 祇園店、中華料理・飲茶・担々麺、東山区祇園町北側268 ヤサカ祇園ビル 5F、祇園四条駅から徒歩5分、よーじやの隣、11:30〜15:45・17:00〜21:30 (L.O. 21:00)、不定休、原文で「17時以降はご飲食代の10％をサービス料として頂戴しております」、70席、50名以上の貸切、禁煙 (加熱式も不可)、英語メニュー、子供可、カード・電子マネー・QR可、公式サイト ching-ming.com。一休: 1967年創業、本店は大阪・堂島。ミヨシコーポレーションの求人: 青冥 堂島本店・祇園店・阪急池田店・大丸梅田店。口コミ (2026年2〜10月、英語): 「Hanami」御膳1,600円 (エビチリ、酢豚、唐揚げ、小皿、コーンスープ、デザート)、酢豚の定食、日替わり、牛肉とピーマンの炒め、海鮮の塩炒め、なすの挽肉炒め、エビマヨ、八宝焼きそば、フカヒレ白湯ラーメン、くらげの前菜2,400円、杏仁豆腐、タブレットで注文、花見小路を見下ろす窓、量が減ったという声、作り置きの麻婆と焼きそばは普通という声、店内が寒いという声、亡き父の思い出の八宝焼きそば。',
      confidence: 'medium', sources: [SITE, TB, 'https://restaurant.ikyu.com/102646/highlights', 'https://www.careermap.jp/jobs/322179/f', R + 'B496058367/', R + 'B529339742/', R + 'B529522517/', R + 'B533149967/', R + 'B534571194/', R + 'B535099801/', R + 'B535429840/', R + 'B536022481/', R + 'B537475491/', R + 'B538144587/', R + 'B538299725/'] },
    cultural_comfort: { level: 'english', note: 'English menu; tablet ordering; 10% service after 17:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側268 ヤサカ祇園ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004190, 135.775033); cross-checked: GSI 京都府京都市東山区祇園町北側268番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538144587/', R + 'B536022481/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"Hanami gozen" lunch set', '¥1,600', 'Lunch', 'no', 'no', 'October 2026.', 'chinese_set'),
      it('', '', 'Cold jellyfish appetizer', '¥2,400', 'À la carte', 'no', 'no', 'September 2026.', 'jellyfish'),
      it('', '', 'Eight-treasure yakisoba', null, 'Noodles', 'no', 'no', 'September 2026.', 'yakisoba'),
    ] }, {
    cuisine: '1967年創業の大阪の店の広東寄りの中国料理を、祇園を見下ろして (食べログ、2026年の口コミ)・昼はエビチリ、酢豚、唐揚げに小皿、コーンスープ、デザートの「Hanami」御膳1,600円。麻婆豆腐と焼きそば付きの酢豚の定食、1,500円以下の日替わり (2026年8〜10月)・単品は牛肉とピーマンの炒め、ホタテと海老の塩炒め、なすの挽肉炒め、エビマヨ、八宝焼きそば、フカヒレの白湯ラーメン、くらげの前菜2,400円、杏仁豆腐 (2026年の口コミ)・飲み放題のコースや貸切も',
    neighborhood: '祇園、四条通と花見小路の角。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 焼きそば、ラーメン、唐揚げ、酢豚、醤油系のたれ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 広東寄りの肉や魚介の料理と定食 (2026年の口コミ)。',
    notes: '[中国料理・祇園、花見小路を見下ろす5階] 1967年創業の大阪の中国料理店、青冥の京都の店で、祇園の交差点のビル5階、窓から花見小路が見える。手頃な1,600円の昼の御膳、夜は八宝焼きそばやフカヒレのラーメン。常連は量が減ったという (2026年7〜8月)。作り置きのおかずは普通という声 (2026年8月) や、店内が寒いという声も。17時以降はサービス料10%。',
  });
}

skip('26039250', '炭炉まん: sub-brand of a non-local multi-brand group — run by ファンインターナショナル (Osaka; fun-no1.com lists nine restaurant brands), same ruling as 串焼き 満天 (osw9-45) — integrator 2026-11-06');

save();
