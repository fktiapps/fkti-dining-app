// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 3.
//   + 山城辣妹子重慶火鍋 上野店 Sanseira Mei Shi Juukei Hinabe (Chongqing hot pot, 140 seats, UENO3153 3F; opened August 2024)
//   + 完全個室 肴 うたげ 上野駅前店 Sakana Utage (private-room izakaya by Ueno Stn, open 11:00–24:00)
//   + 鳥乃壱 上野本店 Tori no Ichi (brand-chicken yakitori and chicken dishes, private rooms; opened November 2023)
//   + のぶちゃん Nobuchan (late-night yakitori and offal-stew izakaya off Nakamachi Street, open to 04:00–05:00)
// Skipped: ボスコ・イルキャンティ 13116876 — Il Chianti chain (see skip()).
// Chain check. Sanseira: one Tabelog listing; a web search found no other Japanese branch (doubt: "上野店" in the name).
//   Utage: one listing (gurunavi, hotpepper, Tabelog); an August 2025 reviewer calls it "a chain restaurant" but no other
//   肴 うたげ shop was found (楽蔵うたげ is a differently named brand; no link found). Tori no Ichi: 上野本店 plus a Shinjuku
//   West Exit shop (September 2026 review: "the Shinjuku West Exit branch will open in 2025"); two shops, kept.
//   Nobuchan: Tabelog's listing announces an Otsuka shop; two shops, kept.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address (上野公園1-57-7, 上野6-13-8, 東上野2-15-9, 上野2-12-4);
//   no placeholder at those addresses.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13116876', 'chain: BOSCO-iL-CHIANTI (in Mitsui Garden Hotel Ueno) is an Il Chianti restaurant — its own Tabelog listing sells "seven popular classic dishes from Il Chianti" and "Il Chianti\'s classic favorites"; Il Chianti is a multi-branch Italian chain (e.g. イルキャンティ 京都河原町三条店 on gurunavi).');

// ================================================================ 山城辣妹子重慶火鍋 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13301967/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:00']);
  put({
    id: 'tokyo_sanseira_chongqing_hotpot_ueno', name: '山城辣妹子重慶火鍋 上野店 (Sanseira Mei Shi Juukei Hinabe)', category: 'OMNI',
    lat: 35.711747, lng: 139.774433, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. You choose your own soups and ingredients (meat, vegetables, mushrooms, seafood), but none of the soups (mala, tonkotsu, tomato, mushroom) or the sauce-bar sauces is described as gluten-free, and noodles, shrimp balls and fried snacks are on the menu.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s listing ticks "vegetarian options", and tomato and mushroom soups are offered with vegetables and mushrooms to add, but no soup is described as meat-free; the mala broth is Chongqing-style and the others include tonkotsu.',
    hours_raw: 'Daily 11:00–23:00 (last order 22:30) (Tabelog). Reservations recommended — full on Friday nights in September and October 2026. Lunch sets for one from ¥1,749. 140 seats with four private rooms for up to 10; non-smoking. No cards or e-money; PayPay, Alipay and WeChat Pay only. Children welcome, kids\' menu; a September 2026 diner says dogs are allowed inside. Menus in English, Chinese and Korean, and staff speaking English, Chinese and Korean (Tabelog). Opened 15 August 2024 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno-kōen, UENO3153 3F, in front of Ueno Stn — 1 min from JR Ueno Stn Shinobazu exit and Ueno Stn exit 7 (Tokyo Metro)',
    cuisine: 'Chongqing-style hot pot with a numbing mala broth (Tabelog) · one-person pots: pick soups (mala with adjustable heat, tonkotsu, tomato, mushroom) and add meats (beef, lamb, pork), vegetables, mushrooms, shrimp balls and noodles · sauce bar with spices, herbs and condiments, plus free sweets and snacks (sesame balls, Chinese desserts, shrimp chips) · lunch sets for one: pork ¥1,749, beef ¥1,859 (Tabelog, tax included) · seasonal luxury course with two soups, nine ingredients, desserts and drinks ¥3,900 by coupon (listed at ¥11,495)',
    website: null, gmaps: gm('山城辣妹子重慶火鍋 上野店 UENO3153'), menu_url: TB + 'dtlmenu/',
    notes: "[Hot pot · Ueno, Chongqing mala on the third floor of UENO3153] A large, bright hot-pot restaurant right in front of Ueno Station's Shinobazu exit, opened in August 2024, with partitioned tables, a few private rooms and window seats over the station area. Choose your broths (fiery Chongqing mala, tonkotsu, tomato or mushroom), then load the pot with lamb, beef, pork, vegetables, mushrooms and shrimp balls, and mix your own dipping sauce at the sauce bar, where sweets and snacks are free. Diners in 2026 found the mala truly numbing and spicy (even the mildest level), the ingredients fresh, and the room busy with Chinese families and office workers; several wished for instructions on how to order and eat. Book on weekends. No cards — PayPay, Alipay or WeChat Pay.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 August 2024 (Tabelog)', background: 'A corporate-member Tabelog listing; no source names the operator or chef.', philosophy: null, specialty: 'Chongqing mala hot pot.',
      anecdotes: [
        { text: '"Despite being located on the 3rd floor of UENO3153 right in front of Ueno Station, I hardly saw any Japanese customers… We ordered two types of hot pot: a mushroom broth and a spicy mala broth (I chose the mildest option for Japanese tastes, but it was still quite spicy!)." — August 2026.', source: R + 'B533733650/' },
        { text: '"It\'s a wonderful place where dogs are allowed inside!… It would be great if there were instructions on how to eat everything, as there weren\'t any provided." — September 2026.', source: R + 'B535429121/' },
        { text: '"I visited on a Friday night. It seemed fully booked, so I recommend making a reservation… I was glad that the desserts were all-you-can-eat!" — October 2026.', source: R + 'B537340403/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 山城辣妹子重慶火鍋 上野店、上野公園1-57-7 UENO3153 3F、JR上野駅不忍口・東京メトロ上野駅7番出口から徒歩1分、毎日11:00〜23:00 (L.O.22:30)、140席、個室4室 (最大10名)、禁煙、カードと電子マネーは不可、PayPay・Alipay・WeChat Pay 可、子ども可、英語・中国語・韓国語のメニューとスタッフ、2024年8月15日オープン、本場の重慶火鍋、スープはマーラー、豚骨、トマト、きのこ、ランチの1人用セット (豚1,749円、牛1,859円)、スイーツの食べ放題。口コミ(2026年8月〜10月): 日本の客は少ない、きのことマーラーの2種の鍋、一番控えめでもかなり辛い、羊、牛、豚、海老団子、たれのコーナーで自分で合わせる、ごま団子などのお菓子、犬も入れる、食べ方の説明がない、金曜の夜は満席で予約がおすすめ、駅前の眺め。',
      confidence: 'medium', sources: [TB, R + 'B533733650/', R + 'B534670846/', R + 'B535429121/', R + 'B535494402/', R + 'B535593143/', R + 'B535723922/', R + 'B537340403/', R + 'B538183397/', R + 'B538265507/', R + 'B538384269/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists menus in English, Chinese and Korean and staff who speak them; no written guide to ordering (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野公園1-57-7 UENO3153 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野公園1番57号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Prices from the Tabelog listing\'s set menus (tax included).', last_checked: TODAY, items: [
      it('', '', 'Lunch set for one: pork, choice of soup', '¥1,749', 'Lunch', 'ask', 'no', 'Tabelog; soups tonkotsu, tomato, spicy Sichuan or mushroom; one drink.', 'lunch_pork'),
      it('', '', 'Lunch set for one: beef, choice of soup', '¥1,859', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_beef'),
      it('', '', 'Seasonal luxury hot-pot course, 9 items, two soups, desserts and drinks', '¥3,900', 'Course', 'ask', 'no', 'Tabelog coupon price (listed ¥11,495).', 'course'),
    ] }, {
    cuisine: 'しびれるマーラーのスープの重慶火鍋 (食べログ)・1人用の鍋: スープ (辛さを選べるマーラー、豚骨、トマト、きのこ) を選び、牛、羊、豚の肉、野菜、きのこ、海老団子、麺を入れる・スパイスや香草、調味料のたれのコーナーと、無料のお菓子 (ごま団子、中国のデザート、えびせん)・ランチの1人用セット: 豚1,749円、牛1,859円 (食べログ、税込み)・2種のスープ、9品、デザートと飲み物付きの季節の贅沢コースはクーポンで3,900円 (表示は11,495円)',
    neighborhood: '上野公園、UENO3153 3F、上野駅前。JR上野駅不忍口・東京メトロ上野駅7番出口から徒歩1分',
    gf_detail: '要確認。スープと具 (肉、野菜、きのこ、魚介) は自分で選べるが、スープ (マーラー、豚骨、トマト、きのこ) にもたれのコーナーにもグルテンフリーの説明はなく、麺、海老団子、揚げたお菓子もある。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」の印があり、トマトときのこのスープに野菜やきのこを入れられるが、肉を使わないと書かれたスープはありません。マーラーは重慶風で、豚骨のスープもある。',
    notes: '[火鍋・上野、UENO3153の3階の重慶マーラー] 上野駅不忍口のすぐ前、2024年8月にできた広く明るい火鍋の店で、仕切りのあるテーブル、個室、駅前を見下ろす窓際の席がある。スープ (しびれる重慶のマーラー、豚骨、トマト、きのこ) を選び、羊、牛、豚、野菜、きのこ、海老団子を入れて、たれのコーナーで自分でつけだれを作る。お菓子は無料。2026年の口コミでは、マーラーは一番控えめでもしびれて辛い、具は新鮮、店は中国の家族連れや会社員でにぎわうという声。注文や食べ方の説明がほしいという人も。週末は予約を。カードは使えず、PayPay、Alipay、WeChat Pay で。',
  });
}

// ================================================================ 完全個室 肴 うたげ 上野駅前店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13278384/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '24:00']);
  put({
    id: 'tokyo_sakana_utage_ueno', name: '完全個室 肴 うたげ 上野駅前店 (Sakana Utage)', category: 'OMNI',
    lat: 35.711038, lng: 139.775204, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog\'s listing says allergy information is available, but no dish is described as gluten-free; the menu is a general izakaya one (sashimi, fried dishes, yakitori, motsunabe).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood, meat and kushiyaki izakaya (sashimi, simmered fish, meat platters, motsunabe, tsukune). Tabelog\'s listing ticks "vegetarian options" but names no dish.',
    hours_raw: 'Daily 11:00–24:00 (food last order 23:30, drinks 24:00) (Tabelog). Reservations taken; 2-hour limit on Fri, Sat, Sun and the day before a holiday; same-day cancellations charged (100% of a course, ¥1,000 a head for seats only). A table charge (お通し) with seat-only bookings; an all-you-can-drink diner in January 2026 paid ¥500 for it and had to order two dishes each. 55 seats, all in private rooms for 2 to 30. Smoking: Tabelog says a designated area; a January 2025 diner called it non-smoking, an August 2025 diner smoked in the private room. Cards (including UnionPay), e-money, Rakuten Pay. Children welcome. Menus in English, Chinese and Korean and staff speaking them (Tabelog). Opened 1 November 2022 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 6-chōme, 上野ソシアルビル 4F, near Ueno Marui — 1 min from JR Ueno Stn',
    cuisine: 'Private-room izakaya with seafood, kushiyaki and creative Japanese dishes (Tabelog) · dishes named in reviews: special three-meat platter, (Taiwanese) motsunabe, yakitori, sashimi, simmered fish, seared mackerel, Caesar salad, tsukune, teriyaki chicken (2025–2026) · courses with all-you-can-drink for parties; à la carte all-you-can-drink with a ¥500 table charge and two dishes each (January 2026) · Mega highball · lunchtime drinking from 11:00',
    website: null, gmaps: gm('肴 うたげ 上野駅前店 上野ソシアルビル'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Ueno, private rooms a minute from the station] A fourth-floor izakaya by JR Ueno Station where every seat is in a private room with a door, open from 11:00 to midnight, so popular for daytime drinking, office parties and groups. The food is standard izakaya fare — sashimi, a three-meat platter, a light 'Taiwanese' motsunabe, yakitori, seared mackerel — and reviewers in 2025–2026 rate it as good value rather than gourmet, with fast drink service from a call button; one called it a chain-style place, another found the finishing dishes of a course weak. All-you-can-drink comes as courses or à la carte (a ¥500 table charge and two dishes each). Smoking reports differ: ask.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 November 2022 (Tabelog)', background: 'A corporate-member Tabelog listing; no source names the operator or chef. An April 2026 reviewer thought most staff were from mainland China and the floor run by one person that day.', philosophy: null, specialty: 'Private rooms; party courses.',
      anecdotes: [
        { text: '"We ordered an assorted platter of three types of meat, a motsunabe (offal hot pot), and yakitori, but the motsunabe was exceptionally delicious!" — January 2025.', source: R + 'B500012484/' },
        { text: '"I was pleased to find that the private room had a proper door, not just a blind partition." — December 2025.', source: R + 'B520396981/' },
        { text: '"The all-you-can-drink option has a cover charge of JPY 500 for appetizers, and since you need to order two dishes per person, it can get a bit pricey, so opting for a course is better." — January 2026.', source: R + 'B521181248/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 完全個室 肴 うたげ 上野駅前店、上野6-13-8 上野ソシアルビル 4F、JR上野駅から徒歩1分、毎日11:00〜24:00 (L.O.料理23:30、飲み物24:00)、金土日・祝前日は2時間制、当日キャンセルはコース100%・席のみ1人1,000円、席のみはお通し代あり、55席、2〜30名の個室、分煙、カード (銀聯も)・電子マネー可、子ども可、英語・中国語・韓国語のメニューとスタッフ、2022年11月1日オープン、旬の食材の創作料理、気軽な和食居酒屋で本格的な会席料理。口コミ(2024年8月〜2026年9月): 個室で周りを気にせず話せる、昼から飲める、肉3種盛り、台湾もつ鍋は辛くなく軽い、焼き鳥、刺身、煮魚、炙り鯖、シーザーサラダ、つくね、照り焼きチキン、飲み物の提供が早い、チェーン店らしい普通の味という声、個室でたばこが吸えた (2025年8月) と禁煙だった (2025年1月) の両方の声、お通し500円と1人2品の注文 (2026年1月)、コースの締めとデザートは期待ほどではなかった。',
      confidence: 'medium', sources: [TB, R + 'B491413987/', R + 'B500012484/', R + 'B508353418/', R + 'B512925691/', R + 'B520396981/', R + 'B521181248/', R + 'B526897524/', R + 'B529018027/', R + 'B535037265/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists menus in English, Chinese and Korean and staff who speak them; order by calling staff from the room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野6-13-8 上野ソシアルビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野六丁目13番8号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521181248/', R + 'B520396981/'],
    price_note: 'No menu prices published on Tabelog; the table charge is from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Table charge (お通し) with seat-only bookings', '¥500', 'Charges', 'ask', 'ask', 'January 2026 review; included in courses.', 'otoshi'),
      it('', '', 'Special three-meat platter', '', 'Meat', 'ask', 'no', 'January 2025 and December 2025 reviews.', 'meat_3'),
      it('', '', 'Taiwanese motsunabe (offal hot pot)', '', 'Hot pot', 'no', 'no', 'December 2025 review: not spicy, light.', 'motsunabe'),
    ] }, {
    cuisine: '魚介、串焼き、創作和食の個室居酒屋 (食べログ)・口コミに出てくる料理: 特選の肉3種盛り、台湾もつ鍋、焼き鳥、刺身、煮魚、炙り鯖、シーザーサラダ、つくね、照り焼きチキン (2025〜2026年)・宴会向けの飲み放題付きコース。単品の飲み放題はお通し500円と1人2品の注文 (2026年1月)・Mega Highball・11時から昼飲み',
    neighborhood: '上野六丁目、上野ソシアルビル 4F、Ueno Marui の近く。JR上野駅から徒歩1分',
    gf_detail: '要確認。食べログにはアレルギー表示ありとあるが、グルテンフリーの料理は書かれていません。料理は一般的な居酒屋のもの (刺身、揚げ物、焼き鳥、もつ鍋)。',
    vegan_detail: 'ヴィーガンではありません。魚介、肉、串焼きの居酒屋 (刺身、煮魚、肉の盛り合わせ、もつ鍋、つくね)。食べログには「ベジタリアンメニューあり」の印があるが、料理名は書かれていません。',
    notes: '[居酒屋・上野、駅から1分の個室] JR上野駅のそば、4階にある居酒屋で、全席が扉付きの個室。11時から深夜0時まで開き、昼飲み、会社の宴会、グループに人気。料理は普通の居酒屋のもの (刺身、肉3種盛り、軽い台湾もつ鍋、焼き鳥、炙り鯖) で、2025〜2026年の口コミでは美食よりお手頃さの店という評価。呼び出しボタンで飲み物がすぐ来る。チェーン店らしいという声や、コースの締めが物足りないという声も。飲み放題はコースか単品 (お通し500円と1人2品)。たばこについては口コミが分かれるので確認を。',
  });
}

// ================================================================ 鳥乃壱 上野本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13290563/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '15:00'], ['16:00', '23:00']); const E = day(['16:00', '23:00']);
  put({
    id: 'tokyo_tori_no_ichi_ueno', name: '鳥乃壱 上野本店 (Tori no Ichi)', category: 'OMNI',
    lat: 35.709717, lng: 139.777515, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog\'s listing says allergy information is available, and salt-grilled skewers and chicken sashimi are on the menu, but nothing is described as gluten-free; the yakitori bowl uses a sweet sauce, the sashimi comes with sweet Kyushu soy sauce, and there are kara-age and fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken specialist (skewers, chicken sashimi, oyakodon, chicken soup, chawanmushi starter).',
    hours_raw: 'Mon–Fri 11:00–15:00 and 16:00–23:00; Sat, Sun and holidays 16:00–23:00; open all year (Tabelog). Reservations taken; book at weekends (September 2026). Table charge (お通し; a chawanmushi starter in September–October 2026). 130 seats with private rooms for 2 to over 30, tatami and sunken seating, and a counter. Designated smoking area. Cards, e-money and QR. Children welcome. Opened 10 November 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Ueno 2-chōme, a block from Ameyoko — 5 min from JR Ueno Stn; 250 m from Keisei Ueno Stn',
    cuisine: 'Brand and jidori chicken from around Japan, charcoal-grilled skewers and chicken dishes by a former French chef (Tabelog) · lunch: yakitori bowl ¥1,000 with chicken soup, pickles, cold tofu and a soft drink (August 2026) · chicken sashimi (three kinds, limited), white liver, thigh tataki with hyuganatsu ponzu, chicken yukhoe, wing kara-age, shaliapin chicken steak, two-brand tasting, oyakodon, chicken zosui (2026 reviews) · courses (Tabelog): today\'s specialty chicken and kamameshi ¥4,980, aged-soup mizutaki ¥5,980, premium ¥10,000, omakase with 2-hour drinks ¥7,000 · à la carte all-you-can-drink ¥1,980 (September 2026)',
    website: null, gmaps: gm('鳥乃壱 上野本店 東上野2-15-9'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · Ueno, brand chicken from a former French chef] A large, modern chicken restaurant a block from Ameyoko, opened in November 2023, where a former French chef cooks regional brand chickens and jidori: charcoal-grilled skewers, chicken sashimi (three cuts, limited servings), yukhoe, thigh tataki with hyuganatsu ponzu, a shaliapin chicken steak and a creamy jidori oyakodon or zosui to finish. Dinner starts with a chawanmushi; courses run from mizutaki to a ¥10,000 premium menu. Weekday lunch is a ¥1,000 yakitori bowl with soup, tofu and a drink, grilled to order. Private rooms and sunken seating for 2 to over 30 make it a party venue; diners in 2026 praised friendly, quick staff. A Shinjuku West Exit shop was due in 2025 (a September 2026 review).",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 November 2023 (Tabelog)', background: 'Per Tabelog\'s listing (corporate member), the cooking is by a former French chef using regional brand chickens from across Japan. A September 2026 review says a Shinjuku West Exit branch was to open in 2025. No source names the chef.', philosophy: '"Bird dishes woven by a French chef" (Tabelog).', specialty: 'Brand-chicken skewers; chicken sashimi; oyakodon.',
      anecdotes: [
        { text: '"I ordered the Yakitori Rice Bowl for JPY 1,000, tax included. This came with chicken soup, pickles, cold tofu, and a complimentary soft drink. The bowl featured a variety of ingredients including tsukune (chicken meatballs), chicken wings, chicken breast, and skin." — August 2026, weekday lunch.', source: R + 'B533390101/' },
        { text: '"I was lucky enough to order the limited 5 servings of three types of chicken sashimi!… To finish, I had the signature dish, the jidori oyakodon!" — September 2026.', source: R + 'B536570641/' },
        { text: '"The chicken sashimi assortment featured three types… It paired wonderfully with the sweet Kyushu soy sauce." — October 2026.', source: R + 'B537684132/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鳥乃壱 上野本店、東上野2-15-9、JR上野駅から徒歩5分、京成上野駅から250m、月〜金11:00〜15:00・16:00〜23:00、土日祝16:00〜23:00、年中無休、お通しあり、130席、2名から30名以上の個室、座敷、掘りごたつ、分煙、カード・電子マネー・QR可、子ども可、2023年11月10日オープン、元フレンチのシェフが全国の銘柄鶏を使う、コース: 本日の銘柄鶏と釜飯4,980円、熟成スープの水炊き5,980円、プレミアム10,000円、飲み放題付きおまかせ7,000円。口コミ(2026年8月〜10月): 平日ランチの焼き鳥丼1,000円 (鶏スープ、漬物、冷奴、ソフトドリンク付き、注文してから焼く)、Ameyoko から一本入った落ち着いた場所、地鶏のもも、手羽、なす、2種の銘柄鶏の食べ比べ、シャリアピン、もつとねぎのアヒージョ、Aomori の長芋の揚げ物、Shinjuku West Exit に店ができると聞いた (2025年)、単品飲み放題1,980円、地鶏の刺身、白レバー、ももの炙り (Hyuganatsu ぽん酢)、お通しの茶碗蒸し、限定の鶏刺し3種、ユッケ、手羽の唐揚げ、地鶏の親子丼、Kyushu の甘い醤油、雑炊。',
      confidence: 'medium', sources: [TB, R + 'B533390101/', R + 'B534130464/', R + 'B534771051/', R + 'B535520843/', R + 'B535857810/', R + 'B536222049/', R + 'B536570641/', R + 'B537181104/', R + 'B537484370/', R + 'B537684132/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff are friendly and quick (2026 reviews); no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野2-15-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野二丁目15番9号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533390101/', R + 'B535857810/'],
    price_note: 'Course prices from the Tabelog listing (tax included); lunch and drinks prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yakitori bowl lunch with chicken soup, pickles, cold tofu and a soft drink', '¥1,000', 'Lunch', 'no', 'no', 'August 2026 review (tax included).', 'yakitori_don'),
      it('', '', 'Today\'s specialty chicken and kamameshi course', '¥4,980', 'Course', 'ask', 'no', 'Tabelog.', 'course_kamameshi'),
      it('', '', 'Aged-soup mizutaki course', '¥5,980', 'Course', 'ask', 'no', 'Tabelog.', 'course_mizutaki'),
      it('', '', 'Premium course of specialty chicken', '¥10,000', 'Course', 'ask', 'no', 'Tabelog.', 'course_premium'),
      it('', '', 'À la carte 2-hour all-you-can-drink', '¥1,980', 'Drinks', 'ask', 'ask', 'September 2026 review.', 'nomihodai'),
    ] }, {
    cuisine: '全国の銘柄鶏と地鶏、炭火の串焼きと元フレンチのシェフの鶏料理 (食べログ)・ランチ: 鶏スープ、漬物、冷奴、ソフトドリンク付きの焼き鳥丼1,000円 (2026年8月)・鶏刺し (3種、数量限定)、白レバー、ももの炙りの Hyuganatsu ぽん酢、鶏ユッケ、手羽の唐揚げ、シャリアピンの鶏ステーキ、2種の銘柄鶏の食べ比べ、親子丼、雑炊 (2026年の口コミ)・コース (食べログ): 本日の銘柄鶏と釜飯4,980円、熟成スープの水炊き5,980円、プレミアム10,000円、2時間飲み放題付きおまかせ7,000円・単品の飲み放題1,980円 (2026年9月)',
    neighborhood: '東上野二丁目、Ameyoko から一本入った場所。JR上野駅から徒歩5分、京成上野駅から250m',
    gf_detail: '要確認。食べログにはアレルギー表示ありとあり、塩の串焼きや鶏刺しもあるが、グルテンフリーの説明はありません。焼き鳥丼は甘いたれ、鶏刺しには Kyushu の甘い醤油が付き、唐揚げや揚げ物もある。',
    vegan_detail: 'ヴィーガンではありません。鶏料理の専門店 (串焼き、鶏刺し、親子丼、鶏スープ、お通しの茶碗蒸し)。',
    notes: '[焼き鳥・上野、元フレンチのシェフの銘柄鶏] Ameyoko から一本入った場所にある広くてモダンな鶏料理の店で、2023年11月の開店。元フレンチのシェフが各地の銘柄鶏や地鶏を使い、炭火の串焼き、鶏刺し (3種、数量限定)、ユッケ、ももの炙りの Hyuganatsu ぽん酢、シャリアピンの鶏ステーキ、締めにとろとろの地鶏の親子丼や雑炊を出す。夜はお通しの茶碗蒸しから。コースは水炊きから10,000円のプレミアムまで。平日の昼は注文してから焼く1,000円の焼き鳥丼で、スープ、豆腐、飲み物付き。2名から30名以上の個室と掘りごたつで宴会にも。2026年の口コミではスタッフが明るく早いと好評。Shinjuku West Exit にも店ができる予定だった (2026年の口コミ)。',
  });
}

// ================================================================ のぶちゃん
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13258644/'; const R = TB + 'dtlrvwlst/';
  const MO = day(['17:00', '23:00']); const TU = day(['17:00', '04:00']); const FR = day(['17:00', '05:00']);
  const SA = day(['15:00', '05:00']); const SU = day(['15:00', '23:00']);
  put({
    id: 'tokyo_nobuchan_ueno', name: 'のぶちゃん (Nobuchan)', category: 'OMNI',
    lat: 35.709485, lng: 139.772707, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled skewers may suit, but nothing is described as gluten-free; the menu also has kara-age, a spicy miso-grilled tetchan, offal stew and kimchi, and sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken and pork skewer and offal-stew izakaya. Cabbage, cucumber and eggplant with grated daikon and ponzu are on the menu, but the ponzu is not described; Tabelog\'s "vegetarian options" tick names no dish.',
    hours_raw: 'Mon 17:00–23:00; Tue–Thu 17:00–04:00; Fri 17:00–05:00; Sat 15:00–05:00; Sun 15:00–23:00; no regular closing day, may close over New Year (Tabelog). Reservations taken. Table charge ¥500 (April 2026 review). 31 seats: 6 at the counter, 24 at tables. Smoking allowed. Cards, PayPay and Rakuten Pay; no e-money. Ordering by phone app ("Air REGE Order", April 2026). Opened 25 May 2021 (Tabelog).',
    hours: { 0: MO, 1: TU, 2: TU, 3: TU, 4: FR, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 2-chōme, レインボータワービル 1F, on Nakamachi Street — 3 min from Ueno-Hirokoji and Ueno-Okachimachi Stns; 5 min from JR Ueno Stn',
    cuisine: 'Yakitori from freshly slaughtered chicken and yakiton, with offal stew, spicy miso-grilled tetchan and house kimchi; shochu, red Hoppy and Kinmiya (Tabelog) · April 2026 prices: table charge ¥500, kakuteki ¥350, octopus with wasabi ¥380, beef offal stew ¥600, eggplant with grated daikon and ponzu ¥500, oolong tea ¥300 · skewers such as negima, harami, liver, shiro, tongue, kashira; kara-age; chive omelette; sesame-leaf kimchi (2025–2026 reviews) · courses with 2-hour all-you-can-drink ¥4,300 and ¥4,500; à la carte all-you-can-drink ¥2,500 (Tabelog)',
    website: null, gmaps: gm('のぶちゃん 上野2-12-4 レインボータワービル'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · Ueno, cheap skewers and stew until 4 or 5 am] A long, casual izakaya on Nakamachi Street, a street of bars and clubs (and touts), open from late afternoon until 04:00 most nights and 05:00 at weekends. Opened in 2021 by a cook who trained at Omi-chan in Oi Town (an October 2021 review), it grills plump skewers of chicken and pork, and serves a gentle beef offal stew, kara-age, chive omelette and kimchi, including one made with sesame leaves. Prices are low (stew ¥600, small plates ¥350–500, a ¥500 table charge in April 2026), regulars keep bottles here, and you order by phone app. In April 2026 the staff were from elsewhere in Asia, with varying Japanese. Smoking is allowed. Tabelog announces a second shop in Otsuka.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 May 2021 (Tabelog)', background: 'An October 2021 review says it was opened by a chef who trained at Omi-chan in Oi Town; the reviewer gives no name. Tabelog\'s listing (corporate member) announces an Otsuka shop opening on 16 July (year not given).', philosophy: null, specialty: 'Skewers of freshly slaughtered chicken; offal stew; kimchi.',
      anecdotes: [
        { text: '"This is a restaurant opened by a chef who trained at Omi-chan in Oi Town… In total, just JPY 2300!!" — October 2021.', source: R + 'B441592153/' },
        { text: '"I ordered two skewers: outside skirt and negima (chicken and green onion). They were large and satisfying… The stew was packed with offal." — April 2026, during cherry-blossom season.', source: R + 'B525503606/' },
        { text: '"The staff seemed to be from nearby Asian countries, with some able to converse in basic Japanese while others struggled a bit… ordering was easy through the \'Air REGE Order\' app." — April 2026.', source: R + 'B526614860/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): のぶちゃん、上野2-12-4 レインボータワービル 1F、上野広小路駅・上野御徒町駅から徒歩3分、月17:00〜23:00、火〜木17:00〜翌4:00、金17:00〜翌5:00、土15:00〜翌5:00、日15:00〜23:00、定休日なし (年末年始は休みの場合あり)、31席 (カウンター6、テーブル24)、喫煙可、カード・PayPay・楽天ペイ可、2021年5月25日オープン、その日の朝にしめた鶏の焼き鳥、もつ煮、Tetchan Karami Miso Yaki、キムチ、焼酎と red Hoppy、Kinmiya、Otsuka の店が7月16日オープン、飲み放題付きコース4,300円・4,500円、単品飲み放題2,500円。口コミ(2021年10月〜2026年4月): Oi Town の Omi-chan で修業した人が開いた店 (2021年10月)、Hoppy、キムチ、ニラ玉、唐揚げ、レバー、シロ、タン、カシラ、牛もつ煮はやさしい味、客引きの多い通り、メニューの日本語に間違い、外国人の客も満足、ボトルキープの常連、ハラミ、ねぎま、豚串と鶏串が混ざったメニュー、えごまの葉のキムチ、2026年4月の値段 (お通し500円、カクテキ350円、たこわさ380円、牛もつ煮600円、なすおろしポン酢500円、烏龍茶300円)、店員はアジアの人で日本語はさまざま、Air REGE Order のアプリで注文。',
      confidence: 'medium', sources: [TB, R + 'B441592153/', R + 'B511192612/', R + 'B513033550/', R + 'B516067221/', R + 'B517384205/', R + 'B518166204/', R + 'B522454959/', R + 'B525503606/', R + 'B525582914/', R + 'B526614860/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order through a phone app; staff speak varying Japanese (April 2026); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野2-12-4 レインボータワービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野二丁目12番4号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526614860/', TB],
    price_note: 'Prices from an April 2026 review and the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Beef offal stew', '¥600', 'Stew', 'ask', 'no', 'April 2026.', 'motsuni'),
      it('', '', 'Kakuteki (radish kimchi)', '¥350', 'Small plates', 'ask', 'ask', 'April 2026.', 'kakuteki'),
      it('', '', 'Octopus with wasabi', '¥380', 'Small plates', 'ask', 'no', 'April 2026.', 'takowasa'),
      it('なすおろしポン酢', '', 'Eggplant with grated daikon and ponzu', '¥500', 'Small plates', 'ask', 'ask', 'April 2026.', 'nasu_oroshi'),
      it('', '', 'Table charge', '¥500', 'Charges', 'ask', 'ask', 'April 2026.', 'otoshi'),
      it('', '', 'À la carte 2-hour all-you-can-drink', '¥2,500', 'Drinks', 'ask', 'ask', 'Tabelog; one dish each.', 'nomihodai'),
    ] }, {
    cuisine: 'その日の朝にしめた鶏の焼き鳥と焼きとん、もつ煮、Tetchan Karami Miso Yaki、自家製のキムチ。焼酎、red Hoppy、Kinmiya (食べログ)・2026年4月の値段: お通し500円、カクテキ350円、たこわさ380円、牛もつ煮600円、なすおろしポン酢500円、烏龍茶300円・ねぎま、ハラミ、レバー、シロ、タン、カシラなどの串、唐揚げ、ニラ玉、えごまの葉のキムチ (2025〜2026年の口コミ)・2時間飲み放題付きコース4,300円・4,500円、単品飲み放題2,500円 (食べログ)',
    neighborhood: '上野二丁目、レインボータワービル 1F、Nakamachi Street。上野広小路駅・上野御徒町駅から徒歩3分、JR上野駅から徒歩5分',
    gf_detail: '要確認。塩の串焼きは合うかもしれないが、グルテンフリーの説明はありません。唐揚げ、Tetchan Karami Miso Yaki、もつ煮、キムチもあり、たれの中身は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。鶏と豚の串焼きともつ煮の居酒屋。キャベツ、きゅうり、なすおろしポン酢もあるが、ポン酢の中身は書かれていません。食べログの「ベジタリアンメニューあり」の印に料理名はありません。',
    notes: '[焼き鳥・上野、朝4時、5時まで安い串と煮込み] バーやクラブ (と客引き) の多いNakamachi Streetにある細長い気軽な居酒屋で、夕方から平日はほぼ朝4時、週末は朝5時まで開く。2021年に、Oi Town の Omi-chan で修業した人が開いた店 (2021年10月の口コミ)。ふっくらした鶏と豚の串、やさしい味の牛もつ煮、唐揚げ、ニラ玉、えごまの葉のキムチなど。値段は安く (もつ煮600円、小皿350〜500円、2026年4月のお通し500円)、ボトルキープの常連も。注文はスマホのアプリで。2026年4月は店員がアジアの人で、日本語はさまざま。喫煙可。食べログでは Otsuka の店のオープンを告知している。',
  });
}

save();
