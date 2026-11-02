// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 2.
//   + チャイニーズビストロ 蘭亭 ルクアバルチカ店 Chinese Bistro Rantei, Lucua Barchika (creative Chinese with wine; Taiwan ramen; opened April 2026)
//   + XIRINGUITO Escribà OSAKA (Barcelona paella house's first Kansai branch, Innogate Osaka 3F, opened July 2024)
//   + ゼックスウエスト 炙り焼き＆寿司 アン XEX WEST aburiyaki & sushi An (sushi, tempura and Japanese courses on Herbis PLAZA ENT 7F)
//   + うめだ一丁目スカイビア Umeda Icchome Sky Beer (rooftop BBQ beer garden on 大阪駅前第1ビル, opened June 2025)
//   Chain check: Rantei: seven shops in Osaka of 株式会社スリーエム / THREE-M (chinese-bistro-rantei.com shop list, read 2026-11-01:
//   谷九本店, 本町店, 茶屋町店, 上一店, 南本町店, ルクアバルチカ店, 近鉄上本町店; invoice T4120001023884 → 株式会社スリーエム, NTA register),
//   a local group, kept like ピッコロ (b213) and flagged to the integrator. XIRINGUITO Escribà: the Barcelona restaurant (1992) of Joan
//   Escribà; Osaka is its first Kansai shop (official site), run in Japan by TRANSIT GENERAL OFFICE (site copyright); not a fast-growing
//   chain. XEX WEST: Italian, Japanese and a bar on one floor (Tabelog remarks); invoice T6010401054605 → 株式会社ワイズテーブル
//   コーポレーション (NTA register); a May 2026 diner ate at an XEX in Tokyo; the sushi room An is not a fast-growing chain format. Sky Beer: one venue; invoice T4120001274503 → ジョナサン・フーズ株式会社,
//   head office 梅田1-3-1 (NTA register). None is in data/osaka.json (grep by id, name and address, 2026-11-01).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ チャイニーズビストロ 蘭亭 ルクアバルチカ店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27155116/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://chinese-bistro-rantei.com/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_rantei_lucua_barchika', name: 'チャイニーズビストロ 蘭亭 ルクアバルチカ店 (Chinese Bistro Rantei, Lucua Barchika)', category: 'OMNI',
    lat: 34.702945, lng: 135.495269, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Chinese dishes built on fried and battered pork, wheat noodles, dumplings and sauces such as doubanjiang; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Most dishes use pork, chicken or seafood; stir-fried water spinach is the plain vegetable dish on the official menu, but its seasoning is not described.',
    hours_raw: 'Daily 11:00–23:00, last order 22:30; closing days follow Lucua Osaka, announced on the official site (Tabelog; official site). Lunch set meals on weekdays; a Saturday diner at 15:00 found no lunch menu (October 2026). Afternoon tea set 15:00–18:00 by reservation, last order 16:30, walk-ins from 14:00 (Tabelog); a diner gives weekdays 14:00–17:00 and weekends and holidays 15:00–17:00 (October 2026). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, QUICPay and PayPay (Tabelog). No service charge (Tabelog\'s original text: なし). 48 seats: 34 at tables and 14 at the counter (official site); non-smoking (Tabelog). Order on your smartphone or with the staff (October 2026). Opened 23 April 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda 3-1-3, B2F of Lucua Osaka (ルクア大阪), in the Barchika food floor — 1 min from JR Osaka Stn',
    cuisine: 'Creative Chinese and Taiwanese dishes with wine (official site; prices tax included, read November 2026, and they vary by shop) · Rantei special sweet-and-sour pork, fried Kagoshima mochi-buta with the sauce poured on afterwards and a heap of green onion, 8 pieces ¥1,870 · Taiwan ramen, the house signature since the first shop, a soup of minced pork cooked with garlic and doubanjiang ¥1,320 (¥1,430 at this shop in October 2026) · large shrimp in mayonnaise sauce ¥1,870 · crab fried rice with lettuce ¥1,650 · black-vinegar sweet-and-sour pork ¥1,650 · three-cold-dish starter of steamed chicken, century egg and jellyfish ¥1,980 · hot-and-sour soup ¥1,100 · almond tofu ¥605 · lunch set meals with rice, pickles, soup and salad, rice and soup refilled free: the sweet-and-sour pork set, the Rantei set of sweet-and-sour pork, Taiwan ramen and fried rice, mapo tofu, Taiwan ramen, mapo noodles (¥1,580, October 2026) · this shop only: black-vinegar braised-pork sweet-and-sour set, a five-starter platter, and an afternoon tea of six Chinese sweets with jasmine, pu-erh or oolong tea ¥1,980 (Tabelog) · courses of 8 dishes ¥4,000, or ¥5,500 with 120 minutes of drinks; a dinner set ¥2,750 (Tabelog)',
    website: SITE + 'shop-lucua-barchika', gmaps: gm('蘭亭 ルクアバルチカ店'), menu_url: SITE + 'menu-onedish',
    notes: "[Chinese · Umeda, creative Chinese under Osaka Station] A branch of Rantei, an Osaka group of seven Chinese restaurants whose first shop is on Tabelog's Top 100 list (Tabelog), opened in April 2026 on the Barchika food floor two levels under Lucua, a minute from the JR gates. The group builds its menu on creative Chinese cooking matched with wine. Most people come for the sweet-and-sour pork, fried Kagoshima pork with the sauce poured on afterwards and buried in green onion, which more than half of lunch customers order (official site), or for the Taiwan ramen, the group's signature since its first shop: thin noodles in a chilli-laden soup of minced pork with garlic and doubanjiang. Lunch sets come with refills of rice and soup, and you can pick the heat and the numbing of the mapo noodles. Diners found the mapo tofu good, the shrimp in mayonnaise bouncy, and one sweet-and-sour pork over-fried (September–October 2026). Only this shop serves an afternoon tea of six Chinese sweets, panda buns among them, with a pot of tea for ¥1,980.",
    chef_bio: { chef_name: null, roles: ['Kitchen of the Rantei group (head cooks and sommeliers unnamed)'], origin: null, background: 'Per the official site (chinese-bistro-rantei.com, copyright THREE-M; read 2026-11-01): the concept is "creative Chinese × wines of the world", with each shop\'s head cook and a sommelier testing new dishes together; the special sweet-and-sour pork is made to suit red or white wine, not the usual sharp sweet-and-sour; seasonal ingredients and ingredients rare in Japan, cooked by methods learned at the source. The group lists seven shops in Osaka. Per the shop-maintained Tabelog listing: the main shop is on Tabelog\'s Top 100 list; this shop opened 23 April 2026. The Tabelog invoice number T4120001023884 is registered to 株式会社スリーエム (NTA invoice register).', philosophy: '"A dish to go with wine" (葡萄酒に合う、一皿を; official site).', specialty: 'Rantei special sweet-and-sour pork; Taiwan ramen; mapo tofu.',
      anecdotes: [
        { text: '"The dish was loaded with chili and featured thin Hong Kong-style noodles, topped with minced pork reminiscent of dan dan noodles." — October 2026, Taiwan ramen for JPY 1,430.', source: R + 'B537572642/' },
        { text: '"The adorable panda buns are so cute that it feels almost wasteful to eat them." — October 2026, the afternoon tea set.', source: R + 'B537044259/' },
        { text: '"I appreciated that I could choose the level of spiciness and numbness to my liking." — October 2026, mapo noodle set meal JPY 1,580.', source: R + 'B537540371/' },
      ],
      japanese_sources_summary: '公式サイト: 蘭亭、【創作中華×世界のワイン】がコンセプト、各店の料理長とソムリエが試作を重ねる、蘭亭特製酢豚は赤ワインにも白ワインにも合う、旬の食材、日本では珍しい現地の食材、本場の調理法、QSCH。店舗は谷九本店、本町店、茶屋町店、上一店、南本町店、ルクアバルチカ店、近鉄上本町店。ルクアバルチカ店: 大阪市北区梅田3-1-3 ルクア大阪 バルチカ B2F、全日11:00〜23:00 (L.O.22:30)、不定休、テーブル34席、カウンター14席、限定メニュー (黒酢角煮酢豚定食、前菜5種盛り合わせ、アフタヌーンティーセット)。一品料理 (税込、店舗により異なる): 蘭亭特製酢豚 (8個) 1,870円 (鹿児島産もち豚の唐揚げ、タレは後がけ、青ネギ)、台湾ラーメン1,320円 (創業当初からの看板、豚挽き肉をにんにくと豆板醤で炒めて煮立てたスープ)、前菜3種盛り1,980円、大エビのマヨネーズソース1,870円、レタス入りカニチャーハン1,650円、黒酢酢豚1,650円、酸辣湯1,100円、杏仁豆腐605円。お昼の定食: 白ごはん・お漬物・スープ・サラダつき、ごはんとスープはおかわり自由、特製酢豚定食はダントツの1番人気、蘭亭定食 (酢豚、台湾ラーメン、五目チャーハン)。食べログ (店舗会員): 中華・居酒屋・ラーメン、JR 大阪駅から徒歩1分、本店は食べログ百名店、カード・電子マネー・PayPay 可、48席、禁煙、2026年4月23日オープン、8品のコース4,000円、飲み放題つき5,500円、アフタヌーンティー1,980円。口コミ(2026年9月〜10月): 台湾ラーメン1,430円、細い香港麺、唐辛子たっぷり、鶏皮の揚げ物のお通し、麻婆麺定食1,580円は辛さとしびれを選べる、麻婆豆腐定食、焼いた gyoza と takana の漬物、エビマヨ、特製チャーハン、パンダまんじゅうのアフタヌーンティー。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'about', SITE + 'shop-lucua-barchika', SITE + 'menu-onedish', SITE + 'menu-lunch', R + 'B536607046/', R + 'B537044259/', R + 'B537100232/', R + 'B537117338/', R + 'B537540371/', R + 'B537572642/', R + 'B538125752/', R + 'B538182871/', R + 'B538271555/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set meals and an à la carte menu; order on your smartphone or with the staff (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市北区梅田3-1-3 ルクア大阪 バルチカ B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the group\'s official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI matches only the lot 大阪府大阪市北区梅田三丁目1番 (lot) 153m away, the large Osaka Station City block, so the pin rests on the Tabelog point inside Lucua (the listing gives "62 meters from Osaka"); no other record within 80 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu-onedish', SITE + 'menu-lunch', TB, R + 'B537572642/'],
    price_note: 'À la carte prices from the official menu (tax included; the site says prices vary by shop; read 1 November 2026); Taiwan ramen ¥1,430 and mapo noodle set ¥1,580 at this shop per October 2026 reviews; courses and afternoon tea from Tabelog.', last_checked: TODAY, items: [
      it('蘭亭特製酢豚（8個）', '', 'Rantei special sweet-and-sour pork, 8 pieces', '¥1,870', 'Meat', 'no', 'no', 'Official menu.', 'special_subuta'),
      it('台湾ラーメン', '', 'Taiwan ramen', '¥1,320', 'Noodles and rice', 'no', 'no', 'Official menu; ¥1,430 here in October 2026.', 'taiwan_ramen'),
      it('大エビのマヨネーズソース', '', 'Large shrimp in mayonnaise sauce', '¥1,870', 'Seafood', 'ask', 'no', 'Official menu.', 'ebi_mayo'),
      it('レタス入りカニチャーハン', '', 'Crab fried rice with lettuce', '¥1,650', 'Noodles and rice', 'ask', 'no', 'Official menu.', 'crab_fried_rice'),
      it('黒酢酢豚', '', 'Black-vinegar sweet-and-sour pork', '¥1,650', 'Meat', 'no', 'no', 'Official menu.', 'kurozu_subuta'),
      it('酸辣湯', '', 'Hot-and-sour soup', '¥1,100', 'Soup', 'ask', 'ask', 'Official menu.', 'suanlatang'),
      it('', '', 'Mapo noodle set meal (choose heat and numbing)', '¥1,580', 'Lunch set meals', 'no', 'no', 'October 2026.', 'mapo_noodle_set'),
      it('', '', 'Afternoon tea: six Chinese sweets and a pot of tea (this shop only)', '¥1,980', 'Afternoon tea', 'ask', 'ask', 'Tabelog; October 2026.', 'afternoon_tea'),
    ] }, {
    cuisine: '創作中華と台湾料理をワインとともに (公式サイト、税込、2026年11月に確認、値段は店舗により異なる)・蘭亭特製酢豚、鹿児島産もち豚の唐揚げにタレを後がけして青ネギをどっさり、8個1,870円・台湾ラーメン、創業当初からの看板メニュー、豚挽き肉をにんにくと豆板醤で炒めて煮立てたスープ1,320円 (この店では2026年10月に1,430円)・大エビのマヨネーズソース1,870円・レタス入りカニチャーハン1,650円・黒酢酢豚1,650円・蒸し鶏、ピータン、くらげの前菜3種盛り1,980円・酸辣湯1,100円・杏仁豆腐605円・お昼の定食は白ごはん、お漬物、スープ、サラダつき、ごはんとスープはおかわり自由: 特製酢豚定食、酢豚と台湾ラーメンと五目チャーハンの蘭亭定食、麻婆豆腐、台湾ラーメン、麻婆麺 (1,580円、2026年10月)・この店だけ: 黒酢角煮酢豚定食、前菜5種盛り合わせ、中国の甘いもの6種とジャスミン茶、プーアル茶、ウーロン茶から選ぶお茶のアフタヌーンティー1,980円 (食べログ)・8品のコース4,000円、120分の飲み放題つきで5,500円、夜のセット2,750円 (食べログ)',
    neighborhood: '梅田3-1-3、ルクア大阪の地下2階、バルチカの中。JR 大阪駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。衣をつけて揚げた豚肉、小麦の麺、餃子、豆板醤などのソースを使う中華料理。グルテンフリーの説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ほとんどの料理に豚肉、鶏肉、魚介を使う。公式メニューの空芯菜炒めが野菜だけの料理だが、味つけの説明はない。',
    notes: '[中華・梅田、大阪駅の地下の創作中華] 大阪で7店の中華料理店を営む蘭亭の店で、本店は食べログ百名店 (食べログ)。2026年4月、ルクアの地下2階、バルチカに開いた。JR の改札から1分。グループは創作中華とワインの組み合わせがコンセプト。お目当ては、鹿児島のもち豚を揚げてタレを後がけし、青ネギをどっさりのせた特製酢豚で、ランチでは半数以上が頼むという (公式サイト)。もうひとつは創業当初からの看板の台湾ラーメンで、細い麺に、豚挽き肉をにんにくと豆板醤で炒めた唐辛子たっぷりのスープ。ランチの定食はごはんとスープがおかわり自由で、麻婆麺は辛さとしびれを選べる。麻婆豆腐はおいしい、エビマヨはぷりぷり、酢豚は揚げすぎだったという声も (2026年9月〜10月)。この店だけのアフタヌーンティーは、パンダまんじゅうなど中国の甘いもの6種にポットのお茶で1,980円。',
  });
}

// ================================================================ XIRINGUITO Escribà OSAKA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27142690/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://xiringuitoescriba.jp/osaka/';
  const WL = ['11:00', '15:30'], WD = ['17:00', '23:00'], E = ['11:00', '23:00'];
  put({
    id: 'osaka_xiringuito_escriba_osaka', name: 'XIRINGUITO Escribà OSAKA (チリンギート エスクリバ)', category: 'OMNI',
    lat: 34.70155, lng: 135.492872, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Paella is rice, but the menu also has fideuà made with short pasta, the "Airbag" crispy bread, baguette, cannelloni and cakes; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s feature list ticks "vegetarian options", but no vegetarian or vegan dish is named; the signature paellas are seafood or chicken, and the mushroom salad comes with cheese.',
    hours_raw: 'Mon–Fri 11:00–15:30 (last order food 14:30, drinks 15:00) and 17:00–23:00 (last order food 22:00, drinks 22:30); Sat, Sun and holidays 11:00–23:00 (Tabelog). Reservations accepted (Tabelog); one diner found it fully booked and booked a week ahead the next time (October 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and PayPay (Tabelog). 82 seats, counter and sofa seating, private hire for 20 to over 50; non-smoking; children welcome (Tabelog); a diner came with a stroller (October 2026). Opened 31 July 2024, the first Kansai shop (Tabelog; official site).',
    hours: { 0: [WL, WD], 1: [WL, WD], 2: [WL, WD], 3: [WL, WD], 4: [WL, WD], 5: day(E), 6: day(E) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda 3-2-123, 3F of Innogate Osaka (イノゲート大阪), Barchika 03 — directly connected to the west exit of JR Osaka Stn',
    cuisine: 'Barcelona seafood restaurant and paella house (official site) · about five paellas plus a daily one (October 2026), cooked 17 minutes over a direct flame (Tabelog): the Escribà paella of shrimp, mussels, clams and white fish, eaten with wooden spoons; squid-ink fideuà of short pasta with aioli; seasonal paella; chicken; small sizes for sharing (October 2026) · tapas: the "Airbag", crispy bread under sliced prosciutto, broken with a hammer at the table; patatas bravas; potatoes with dill sauce; garlic shrimp; meatball stew; shaved raw mushroom salad with cheese · sangria of cava, white or red wine; wines matched to the paellas · desserts: a limited fruit roll cake (fig in October 2026, +¥300 on a course), Basque cheesecake · XIRINGUITO course of seven dishes, lunch or dinner ¥4,800; Mon–Thu dinner courses with two hours of drinks: six dishes ¥7,000, eight dishes ¥8,500 (Tabelog, tax included) · about ¥7,900 a head for the course with drinks (October 2026)',
    website: SITE, gmaps: gm('XIRINGUITO Escriba OSAKA イノゲート大阪'), menu_url: SITE,
    notes: "[Spanish · Umeda, Barcelona paella at Osaka Station] The Japanese outpost of a Barcelona beach restaurant, opened on the Olympic year of 1992 by Joan Escribà and known locally for the city's best paella, came to Kansai in July 2024 on the third floor of Innogate Osaka, straight off the west exit of the station. A bright, beach-house room of 82 seats serves about five paellas, cooked 17 minutes over a direct flame: the house Escribà paella of shrimp, mussels and clams, with crisp rice at the bottom of the pan, and a squid-ink fideuà made with short pasta, both favourites in 2026 reviews. Start with the \"Airbag\", crisp bread under prosciutto that you smash with a hammer, and garlic shrimp. The seven-dish XIRINGUITO course is ¥4,800 at lunch or dinner; finish with the fruit roll cake. One October 2026 diner found the portions small. Book ahead: one diner found it full and booked a week out the next time (October 2026).",
    chef_bio: { chef_name: 'Joan Escribà (ジョアン エスクリバ)', roles: ['Owner and executive chef of XIRINGUITO Escribà, Barcelona (official site)', 'Osaka kitchen: unnamed'], origin: 'Born in Barcelona (official site)', background: 'Per the official site (xiringuitoescriba.jp, read 2026-11-01): XIRINGUITO Escribà opened by the Mediterranean in Barcelona in 1992, the year of the Barcelona Olympics, and has been loved by locals and visitors for over 25 years as the seafood restaurant serving Barcelona\'s best paella. Joan Escribà also owns the beach club Guingueta Escribà and the modern Spanish restaurant La Picanteria, and is owner-chef and chocolatier of Escribà. The Osaka shop opened 31 July 2024 as the first in Kansai; the site\'s copyright is TRANSIT GENERAL OFFICE INC.', philosophy: null, specialty: 'Escribà paella; squid-ink fideuà; "Airbag" prosciutto bread.',
      anecdotes: [
        { text: '"What stood out was the perfect cooking of the rice and the fragrant crispy bits at the bottom of the pan." — October 2026, seafood paella with mushroom salad, meatball stew and garlic shrimp.', source: R + 'B537345234/' },
        { text: '"It was fun to break it apart with a hammer, and the combination of the crispy bread and prosciutto was delicious." — October 2026, of the "Airbag".', source: R + 'B537422534/' },
        { text: '"I thought the portion size was quite small; is that typical here?" — October 2026, a lunch meeting.', source: R + 'B538219599/' },
      ],
      japanese_sources_summary: '公式サイト: XIRINGUITO Escribà (チリンギート エスクリバ)、バルセロナで一番おいしいパエリアを提供、7月31日に関西初出店、1992年にスペイン・バルセロナにオープン、25年以上地元の人に愛されるシーフードレストラン、オーナー兼エグゼクティブシェフのジョアン エスクリバはバルセロナ生まれ、オリンピックの1992年に地中海沿いに開店、ビーチクラブ Guingueta Escribà とモダンスペイン料理店 La Picanteria のオーナー、エスクリバのオーナーシェフでショコラティエ。メニュー: エスクリバパエリア (エビ、ムール貝、アサリ、白身魚、木のスプーンで)、イカスミのフィデウア (パスタで作るパエリア、アリオリソース)、"エアバッグ" 生ハムスライスとクリスピーブレッド、カヴァ・白ワイン・赤ワインのサングリア。食べログ (店舗会員): スペイン料理・海鮮、大阪市北区梅田3-2-123 イノゲート大阪 バルチカ03エキウエ 3F、大阪駅西口直結、月〜金11:00〜15:30、17:00〜23:00、土・日・祝11:00〜23:00、カード・電子マネー・PayPay 可、82席、禁煙、子ども可、2024年7月31日オープン、直火で17分のパエリア、海の家のような内装、数量限定のフルーツロールケーキ、XIRINGUITO コース7品4,800円、月〜木の2時間飲み放題つきコース6品7,000円・8品8,500円。口コミ(2026年10月): パエリアは約5種と日替わり、イカスミがおすすめ、底のおこげ、キノコのサラダとチーズ、ミートボールの煮込み、ガーリックシュリンプ、エアバッグはハンマーで割る、小さいサイズのパエリア、イチジクのロールケーキ、バスクチーズケーキ、イカスミのショートパスタ、飲み放題つきで1人約7,900円、量が少ないという声も、ベビーカーで来店、ポテトにディルソース。',
      confidence: 'medium', sources: [TB, SITE, R + 'B537300840/', R + 'B537303029/', R + 'B537345234/', R + 'B537422534/', R + 'B537689991/', R + 'B537745420/', R + 'B537844200/', R + 'B537876054/', R + 'B538219599/', R + 'B538496504/'] },
    cultural_comfort: { level: 'english', note: 'The official site and menu are in Japanese and English (read November 2026); dishes are shared tapas and paella.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田3-2-123 イノゲート大阪 バルチカ03エキウエ 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田三丁目2番123号 (go) 100m (Innogate Osaka is a long building over the tracks); no other record within 80 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, SITE, R + 'B537876054/'],
    price_note: 'Course prices from the Tabelog listing (tax included); dish names from the official menu (unpriced on the pages read); an October 2026 review matches the ¥4,800 course.', last_checked: TODAY, items: [
      it('エスクリバパエリア', '', 'Escribà paella (shrimp, mussels, clams, white fish)', '', 'Paella', 'ask', 'no', 'Official site.', 'escriba_paella'),
      it('イカスミのフィデウア', '', 'Squid-ink fideuà (short pasta) with aioli', '', 'Paella', 'no', 'no', 'Official site.', 'squid_ink_fideua'),
      it('"エアバッグ" 生ハムスライスとクリスピーブレッド', '', '"Airbag": prosciutto on crispy bread', '', 'Tapas', 'no', 'no', 'Official site.', 'airbag'),
      it('サングリア', '', 'Sangria (cava, white or red wine)', '', 'Drinks', 'ask', 'ask', 'Official site.', 'sangria'),
      it('', '', 'XIRINGUITO course, 7 dishes (lunch or dinner)', '¥4,800', 'Courses', 'ask', 'no', 'Tabelog; October 2026.', 'xiringuito_course'),
      it('', '', 'Six-dish course with two hours of drinks (Mon–Thu dinner)', '¥7,000', 'Courses', 'ask', 'no', 'Tabelog.', 'casual_course'),
    ] }, {
    cuisine: 'バルセロナのシーフードレストランのパエリア (公式サイト)・パエリアは約5種と日替わり (2026年10月)、直火で17分 (食べログ): エビ、ムール貝、アサリ、白身魚のエスクリバパエリア、木のスプーンで食べる。パスタで作るイカスミのフィデウアとアリオリソース。季節のパエリア、チキン、分けやすい小さいサイズも (2026年10月)・タパス: クリスピーなパンに生ハムをのせてハンマーで割る「エアバッグ」、patatas bravas、ポテトにディルソース、ガーリックシュリンプ、ミートボールの煮込み、薄切りの生のキノコとチーズのサラダ・カヴァ、白ワイン、赤ワインのサングリア、パエリアに合うワイン・デザート: 数量限定のフルーツロールケーキ (2026年10月はイチジク、コースに300円で追加)、バスクチーズケーキ・XIRINGUITO コース7品、ランチでもディナーでも4,800円、月〜木の夜の2時間飲み放題つきコース6品7,000円、8品8,500円 (食べログ、税込)・飲み放題つきのコースで1人約7,900円 (2026年10月)',
    neighborhood: '梅田3-2-123、イノゲート大阪の3階、バルチカ03。JR 大阪駅西口直結',
    gf_detail: '要確認。グルテンの情報なし。パエリアは米だが、ショートパスタのフィデウア、「エアバッグ」のクリスピーなパン、バゲット、cannelloni、ケーキもある。グルテンフリーの説明はない。',
    vegan_detail: '要確認。食べログの特徴に「ベジタリアンメニューあり」とあるが、どの料理かは書かれていない。看板のパエリアは魚介か鶏肉で、キノコのサラダにはチーズがのる。',
    notes: '[スペイン料理・梅田、大阪駅のバルセロナのパエリア] 1992年、オリンピックの年にジョアン エスクリバがバルセロナの海辺に開き、街で一番おいしいパエリアで知られるレストランの日本の店で、2024年7月、関西で初めてイノゲート大阪の3階に開いた。大阪駅西口からそのまま入れる。明るい海の家のような82席の店で、パエリアは約5種、直火で17分炊く。エビ、ムール貝、アサリのエスクリバパエリアは底のおこげまでおいしく、パスタで作るイカスミのフィデウアとともに2026年の口コミで人気。まずはクリスピーなパンに生ハムをのせてハンマーで割る「エアバッグ」と、ガーリックシュリンプを。7品の XIRINGUITO コースはランチでもディナーでも4,800円で、最後はフルーツロールケーキを。量が少ないという声もある (2026年10月)。満席で入れず、次は1週間前に予約したという人も (2026年10月)。',
  });
}

// ================================================================ ゼックスウエスト 炙り焼き＆寿司 アン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27003894/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.xexgroup.jp/west/an';
  const H = day(['11:00', '15:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_xex_west_an_umeda', name: 'ゼックスウエスト 炙り焼き＆寿司 アン (XEX WEST aburiyaki & sushi An)', category: 'OMNI',
    lat: 34.699677, lng: 135.494711, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Edo-mae sushi (normally with soy sauce, which generally contains wheat), tempura sets, soba to finish one course, and a monaka dessert; the staff ask about dislikes before a course (March 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, sashimi, tempura of seafood and wagyu courses; Tabelog\'s feature list ticks "vegetarian options", but none is named.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:00) and 17:30–23:00 (last order 21:30); closed when Herbis PLAZA ENT closes (Tabelog). Reservations accepted (Tabelog). Dinner: seat charge ¥580 a head and 10% service (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, PayPay, Alipay and WeChat Pay (Tabelog). 22 seats with a counter; non-smoking (Tabelog). Children welcome at lunch with a kids\' menu; dinner is for primary-school age and up; at dinner no sleeveless tops, shorts or sandals for men (Tabelog). Lunch tempura plan with a seasonal dessert buffet: 90 minutes (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda 2-2-22, 7F of Herbis PLAZA ENT (ハービスPLAZA ENT), west lifts, inside XEX WEST — from the Hanshin Umeda west gate or Nishi-Umeda Stn north gate; 2 min from JR Osaka Stn Sakurabashi exit',
    cuisine: 'Edo-mae sushi, tempura and Japanese courses in the XEX WEST floor (Tabelog) · lunch: tempura set with salad, starters and rice plus a seasonal dessert buffet ¥5,000 (Shine Muscat in autumn 2026; melon in July 2026); seasonal starters and 8 omakase nigiri with a toasting sake ¥4,800 (Tabelog, tax included) · counter sushi à la carte; the squid and the horse mackerel singled out (May 2026) · a September 2026 Japanese course: taro, edamame and pumpkin tofu, sea bream and bonito sashimi, winter melon and sea bream soup, autumn tempura with matsutake, charcoal-grilled wagyu, matsutake rice, just under ¥20,000 with drinks · a tempura course with all-you-can-drink: starters, two sashimi including bonito tataki, hamo soup, soba (August 2026) · monaka with whipped cream and red bean (May 2026) · sake, shochu and wine (Tabelog)',
    website: SITE, gmaps: gm('XEX WEST an ハービスエント'), menu_url: null,
    notes: "[Sushi · Nishi-Umeda, the Japanese room of XEX WEST] The Japanese room of XEX WEST, a floor at the top of Herbis PLAZA ENT that puts an Italian restaurant, a bar and this sushi and tempura counter side by side (Tabelog). At lunch most people book a plan: a tempura set followed by a seasonal fruit dessert buffet, or eight nigiri with seasonal starters; at night it is counter sushi à la carte or a Japanese course with wagyu and matsutake in autumn. Diners in 2026 praised the service more than anything: the chef asks about likes and dislikes, talks with the counter and places each piece on the side of the hand you eat with. The squid and horse mackerel stand out (May 2026). One August 2026 diner was splashed by water from the fish sink and found the apology curt. Dinner adds a ¥580 seat charge and 10% service; dinner is for school-age children and up.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs of XEX WEST (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: XEX WEST is "a fusion restaurant" with Italian cuisine, Japanese cuisine and a bar on one floor (The BAR and Salvatore Cuomo Bros. are the sister rooms); An serves Japanese cuisine and Edo-mae sushi from seasonal ingredients and fish from nearby waters. A June 2026 diner calls it "a valuable establishment since the opening of Herbis ENT"; a May 2026 diner had eaten at an XEX location in Tokyo. The Tabelog invoice number T6010401054605 is registered to 株式会社ワイズテーブルコーポレーション, Akasaka, Tokyo (NTA invoice register, read 2026-11-01).', philosophy: null, specialty: 'Edo-mae sushi; tempura set with dessert buffet.',
      anecdotes: [
        { text: '"They carefully observe which hand the customer uses and place the sushi in a way that makes it easy to pick up, which is truly impressive." — April 2026.', source: R + 'B527100045/' },
        { text: '"I was pleasantly surprised by how tasty the squid was, and before I knew it, I had ordered about five pieces!" — May 2026.', source: R + 'B531712119/' },
        { text: '"The chef was very attentive, picking up on my likes and dislikes, and providing wonderful service by engaging in conversation." — September 2026.', source: R + 'B536198281/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ゼックスウエスト 炙り焼き＆寿司 アン、寿司・海鮮・日本料理、大阪市北区梅田2-2-22 ハービスPLAZA ENT 7F (西エレベーター)、阪神梅田駅西改札・西梅田駅北改札から、JR 大阪駅桜橋口から徒歩2分、11:00〜15:00 (L.O.14:00)、17:30〜23:00 (L.O.21:30)、ハービスPLAZA ENT に準じて休み、ディナーは席チャージ580円とサービス料10%、カード・電子マネー・QR 可、22席、禁煙、ランチは子ども可、ディナーは小学生から、ディナーはノースリーブ・短パン・サンダル (男性) は控える。XEX WEST はイタリアン、和食、バーがワンフロアに (The BAR、Salvatore Cuomo Bros.)。旬の食材と近海の魚の和食と江戸前寿司。ランチ: 天ぷら御膳とシャインマスカットのデザートビュッフェ5,000円、前菜とおまかせ握り8貫と乾杯酒4,800円。口コミ(2026年3月〜9月): 苦手なものを先に聞いてくれる、利き手を見て寿司を置く、アジ、最中とホイップクリームとあんこ、イカを5貫、東京の店より少し安い、天ぷら御膳とメロンのデザートビュッフェ、ナスの揚げ物、カツオのたたき、ハモのお吸い物、締めのそば、エビととうもろこしの天ぷら、魚を洗う水がかかった、カウンターの寿司が手ごろ、里芋、枝豆、かぼちゃ豆腐、鯛とカツオの刺身、冬瓜と鯛のお椀、マツタケの天ぷら、炭火の和牛、マツタケごはん、飲み物込みで2万円弱。',
      confidence: 'medium', sources: [TB, R + 'B525122839/', R + 'B527100045/', R + 'B527612017/', R + 'B529791820/', R + 'B531712119/', R + 'B531986977/', R + 'B533630331/', R + 'B535431931/', R + 'B536198281/', R + 'B536342137/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Fixed lunch plans booked online; at the counter the chef explains dishes (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['March 2026 review: the staff asked about disliked foods before serving the course.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田2-2-22 ハービスPLAZA ENT 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田二丁目2番22号 (go) 95m (Herbis ENT is a large building); no other record within 80 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B531986977/', R + 'B536342137/'],
    price_note: 'Lunch plan prices from the Tabelog listing (tax included; dessert fruit changes with the season); dinner from reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: tempura set with a seasonal dessert buffet', '¥5,000', 'Lunch', 'no', 'no', 'Tabelog; July and August 2026.', 'tempura_gozen'),
      it('', '', 'Lunch: seasonal starters and 8 omakase nigiri, with a toasting sake', '¥4,800', 'Lunch', 'ask', 'no', 'Tabelog.', 'sushi_gozen'),
      it('', '', 'Counter sushi à la carte (squid, horse mackerel)', '', 'Sushi', 'ask', 'no', 'May 2026.', 'sushi_alacarte'),
      it('', '', 'Monaka with whipped cream and red bean', '', 'Dessert', 'no', 'ask', 'May 2026.', 'monaka'),
    ] }, {
    cuisine: 'XEX WEST のフロアの江戸前寿司、天ぷら、和食のコース (食べログ)・ランチ: サラダ、前菜、ごはんつきの天ぷら御膳と季節のデザートビュッフェ5,000円 (2026年秋はシャインマスカット、7月はメロン)、季節の前菜とおまかせ握り8貫と乾杯酒4,800円 (食べログ、税込)・カウンターでアラカルトの寿司、イカとアジが好評 (2026年5月)・2026年9月の和食のコース: 里芋、枝豆、かぼちゃ豆腐、鯛とカツオの刺身、冬瓜と鯛のお椀、マツタケなど秋野菜の天ぷら、炭火焼きの和牛、マツタケごはん、飲み物込みで2万円弱・飲み放題つきの天ぷらのコース: 前菜、カツオのたたきなど刺身2皿、ハモのお吸い物、締めのそば (2026年8月)・最中とホイップクリームとあんこ (2026年5月)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '梅田2-2-22、ハービスPLAZA ENT の7階、西エレベーター、XEX WEST の中。阪神梅田駅西改札、西梅田駅北改札から。JR 大阪駅桜橋口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。江戸前寿司 (寿司にふつう使う醤油は、たいてい小麦を含む)、天ぷらの御膳、コースの締めのそば、最中のデザート。コースの前に苦手なものを聞いてくれる (2026年3月)。',
    vegan_detail: 'ヴィーガンではありません。寿司、刺身、魚介の天ぷら、和牛のコース。食べログの特徴に「ベジタリアンメニューあり」とあるが、どの料理かは書かれていない。',
    notes: '[寿司・西梅田、XEX WEST の和食の部屋] ハービスPLAZA ENT の上の階の XEX WEST は、イタリアン、バー、この寿司と天ぷらのカウンターが並ぶフロア (食べログ)。ランチはプランを予約する人が多く、天ぷら御膳のあとに季節の果物のデザートビュッフェ、または季節の前菜とおまかせ握り8貫。夜はカウンターでアラカルトの寿司か、秋なら和牛やマツタケの入った和食のコース。2026年の口コミでいちばんほめられているのはサービスで、好き嫌いを聞き、カウンターの客と話し、食べる手の側に寿司を置いてくれる。イカとアジがおいしい (2026年5月)。魚を洗う水がかかったのに謝り方がそっけなかったという声も (2026年8月)。夜は席チャージ580円とサービス料10%、小学生から。',
  });
}

// ================================================================ うめだ一丁目スカイビア
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27149760/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://umedaskybeer.com/';
  const H = day(['15:00', '22:30']);
  put({
    id: 'osaka_umeda_icchome_sky_beer', name: 'うめだ一丁目スカイビア (Umeda Icchome Sky Beer)', category: 'OMNI',
    lat: 34.698789, lng: 135.496197, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. BBQ courses of meat, seafood and vegetables grilled at the table with two sauces and salt and pepper (October 2026); sausages, tandoori chicken and a finishing dish are part of the courses, and nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set BBQ courses built on pork, beef, lamb, chicken and seafood, with a vegetable platter as one part.',
    hours_raw: 'Daily 15:00–22:30 (last order food 21:30, drinks 22:00) (Tabelog). April to December open every day, with a tent for rain; January to March closed Mondays; closed 1–3 January with the building; may close for typhoons or heavy rain (Tabelog). Reservations accepted; around 19:00 in beer-garden season is crowded, so book before 18:45 or after 19:15; 10% off courses starting before 17:00 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, PayPay, Alipay and WeChat Pay (Tabelog). 220 table seats; up to 440 for private hire (220 in winter) (Tabelog; official site); no smoking at the tables, smoking area (Tabelog). Children welcome, kids\' menu; menu in English, Chinese and Korean (Tabelog). Access: in Osaka Ekimae Dai-1 Building take the lift on the Nishi-Umeda Station side (right) of the central lift hall to R (13F); the left lifts stop at 12F (Tabelog). Opened 17 June 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda 1-3-1, rooftop (13F) of 大阪駅前第1ビル — 1 min from Nishi-Umeda Stn (Yotsubashi Line), 3 min from Kitashinchi Stn',
    cuisine: 'Rooftop BBQ and hot-pot beer garden with all-you-can-drink courses (Tabelog, tax included, 10% off before 17:00): Standard BBQ ¥5,800 (three starters, Satsuma Chami pork chuck eye roll, domestic pork belly, homemade tandoori chicken of Bichu Kogen chicken, sausages, two seafood, eight seasonal vegetables, a finishing dish); Deluxe ¥7,300 (adds thick beef tongue, Saroma wagyu sirloin, shrimp, squid and scallops); Premium ¥10,000 (Japanese Black wagyu strip loin, Saroma wagyu round, four wagyu compared, dessert) · a lamb course ¥5,800 (September 2026) · beef motsunabe in December 2025 · drinks: eight draft beers from four brewers, among them Asahi Super Dry, Sapporo Black Label, Kirin Ichiban Shibori, Yebisu, Premium Malt\'s and Heartland (October 2026), self-poured from a button tap; 20-plus highballs on a choice of whiskies; 47 prefectural shochu from November to March',
    website: SITE, gmaps: gm('うめだ一丁目スカイビア'), menu_url: SITE,
    notes: "[BBQ beer garden · Umeda, on the roof of the station buildings] A beer garden on the roof of Osaka Ekimae Dai-1 Building, opened in June 2025 and built as a Showa-retro street of stalls: lanterns light up at dusk, the official site likens the mood to Taiwan's Jiufen, and an Inari shrine sits on the roof. Under an all-weather tent, groups grill set courses of pork, wagyu, lamb, seafood and vegetables on gas grills, with two hours of all-you-can-drink from eight draft beers you pour yourself at the push of a button, highballs made on the whisky you pick, and in winter 47 shochu from every prefecture. Diners liked the drinks and the city view at dusk; several found the meat portions on the cheaper courses small (September and October 2026), and on a rainy night one corner got wet. Courses run ¥5,800–10,000, 10% off before 17:00. Take the right-hand lifts to the roof.",
    chef_bio: { chef_name: null, roles: ['Manager and staff (unnamed)'], origin: null, background: 'Per the official site (umedaskybeer.com, read 2026-11-01): a Showa-retro rooftop of stalls on 大阪駅前第1ビル, lanterns at dusk "like Taiwan\'s Jiufen", a 正一位稲荷神社 shrine on the roof, private hire up to 440 seats (220 in winter), eight draft beers from the four big brewers, 20-plus highballs and, from November to March, shochu from all 47 prefectures. The Tabelog invoice number T4120001274503 is registered to ジョナサン・フーズ株式会社 at 梅田1-3-1 (NTA invoice register). Opened 17 June 2025 (Tabelog).', philosophy: null, specialty: 'BBQ courses with all-you-can-drink draft beer.',
      anecdotes: [
        { text: '"When refilling, you return the empty glass to a tray and pour a new one yourself. Although it was self-service, the beer poured automatically with the push of a button." — September 2026, the lamb course for JPY 5,800.', source: R + 'B536138113/' },
        { text: '"Since it was also a birthday celebration, I opted for the Matsu Premium Course." The staff explained each kind of meat at the table. — September 2026, 3 pm in Silver Week.', source: R + 'B536271415/' },
        { text: '"Enjoying drinks while gazing at the beautiful city was a blissful experience, but I think it could be improved by lowering the price by another JPY 1,000." — October 2026, the standard course.', source: R + 'B537587311/' },
      ],
      japanese_sources_summary: '公式サイト: うめだ一丁目スカイビア、屋上×BBQ×鍋、梅田のど真ん中、大阪駅前第1ビル屋上の昭和レトロ空間、夕暮れに提灯、台湾・九份のような雰囲気、正一位稲荷神社、屋上屋台体験、440席 (冬場220席) まで貸切可、4大メーカーの生ビール8種類、ハイボール20種以上、11月〜3月は都道府県の焼酎47種、すべて飲み放題。食べログ (店舗会員): ビアガーデン・BBQ・居酒屋、大阪市北区梅田1-3-1 大阪駅前第1ビル 屋上13F、西梅田駅から徒歩1分、北新地駅から3分、中央エレベーターホールの西梅田駅側 (右) のエレベーターで R 階へ、毎日15:00〜22:30、4月〜12月は無休 (雨はテント)、1月〜3月は月曜休み、1月1日〜3日休み、台風や大雨で臨時休業も、19時ごろは混雑、17時前は10%引き、カード・電子マネー・QR 可、220席、席は禁煙で喫煙所あり、子ども可、英語・中国語・韓国語のメニュー、2025年6月17日オープン。コース (税込、飲み放題つき): スタンダード5,800円 (Satsuma Chami の豚、国産豚バラ、Bichu Kogen の鶏の自家製タンドリーチキン、ソーセージ、魚介2種、野菜8種)、デラックス7,300円 (厚切り牛タン、Saroma の和牛サーロイン、エビ、イカ、ホタテ)、プレミアム10,000円 (黒毛和牛、和牛4種の食べくらべ)。口コミ(2025年12月〜2026年10月): 牛もつ鍋、ラムのコース5,800円、ボタンで注ぐセルフのビール、ジョッキを選べる、好きなウイスキーでハイボール、雨の日は屋根とビニールカーテン、すみの席は少しぬれた、飲みたいお酒が切れていた、肉の量が少ないという声と十分という声、ガスで焼く、ソース2種と塩こしょう、街の景色、店長とスタッフが親切。',
      confidence: 'medium', sources: [TB, SITE, R + 'B534973467/', R + 'B536117995/', R + 'B536138113/', R + 'B536271415/', R + 'B536565493/', R + 'B536615481/', R + 'B537128200/', R + 'B537587311/', R + 'B538007507/', R + 'B538080768/'] },
    cultural_comfort: { level: 'english', note: 'Menu in English, Chinese and Korean (Tabelog); the official site has an English page.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田1-3-1 大阪駅前第1ビル 屋上13F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田一丁目3番1号 (go) 84m (a large building). Same building as いしもん 本店 (osaka_ishimon_honten_umeda, address_ja "大阪府大阪市北区梅田1-3-1 大阪駅前第一ビル B2F"), whose pin is 52 m away, so the two do not stack and both stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536138113/', R + 'B537587311/'],
    price_note: 'Course prices from the Tabelog listing (tax included, all-you-can-drink included; 10% off before 17:00); September and October 2026 reviews match ¥5,800.', last_checked: TODAY, items: [
      it('', '', 'Standard BBQ course with all-you-can-drink', '¥5,800', 'Courses', 'ask', 'no', 'Tabelog; October 2026.', 'standard_bbq'),
      it('', '', 'Deluxe BBQ course with all-you-can-drink (beef tongue, wagyu sirloin, seafood)', '¥7,300', 'Courses', 'ask', 'no', 'Tabelog.', 'deluxe_bbq'),
      it('', '', 'Premium BBQ course with all-you-can-drink (four wagyu compared)', '¥10,000', 'Courses', 'ask', 'no', 'Tabelog; September 2026.', 'premium_bbq'),
      it('', '', 'Lamb BBQ course', '¥5,800', 'Courses', 'ask', 'no', 'September 2026.', 'lamb_bbq'),
    ] }, {
    cuisine: '屋上の BBQ と鍋のビアガーデン、飲み放題つきのコース (食べログ、税込、17時前は10%引き): スタンダード5,800円 (前菜3種、Satsuma Chami の豚の肩ロース、国産豚バラ、Bichu Kogen の鶏の自家製タンドリーチキン、ソーセージ、魚介2種、季節の野菜8種、締め)、デラックス7,300円 (厚切り牛タン、Saroma の和牛サーロイン、エビ、イカ、ホタテ)、プレミアム10,000円 (黒毛和牛のストリップロイン、Saroma の和牛、和牛4種の食べくらべ、デザート)・ラムのコース5,800円 (2026年9月)・2025年12月は牛もつ鍋・飲み物: 4メーカーの生ビール8種、Asahi Super Dry、Sapporo Black Label、Kirin Ichiban Shibori、Yebisu、Premium Malt\'s、Heartland など (2026年10月)、ボタンを押してセルフで注ぐ。選んだウイスキーで作るハイボール20種以上、11月〜3月は都道府県の焼酎47種',
    neighborhood: '梅田1-3-1、大阪駅前第1ビルの屋上 (13階)。西梅田駅 (四つ橋線) から徒歩1分、北新地駅から3分',
    gf_detail: '要確認。グルテンの情報なし。肉、魚介、野菜をテーブルで焼く BBQ のコースで、ソース2種と塩こしょう (2026年10月)。コースにはソーセージ、タンドリーチキン、締めがある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。豚肉、牛肉、ラム、鶏肉、魚介の BBQ のコースで、野菜の盛り合わせはその一部。',
    notes: '[BBQ ビアガーデン・梅田、駅前ビルの屋上] 大阪駅前第1ビルの屋上のビアガーデンで、2025年6月に開いた。昭和レトロの屋台が並ぶつくりで、夕暮れには提灯がともり、公式サイトは台湾の九份のようだという。屋上には稲荷神社も。全天候型のテントの下、グループで豚肉、和牛、ラム、魚介、野菜のコースをガスで焼き、2時間の飲み放題では、ボタンを押してセルフで注ぐ生ビール8種、好きなウイスキーで作るハイボール、冬は全都道府県の焼酎47種。お酒の種類と夕暮れの街の景色は好評で、安いコースは肉が少ないという声がいくつかあり (2026年9月・10月)、雨の夜はすみの席が少しぬれたことも。コースは5,800〜10,000円、17時前は10%引き。屋上へは右側のエレベーターで。',
  });
}

save();
