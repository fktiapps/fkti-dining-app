// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 10.
//   + つたや Tsutaya (soba and udon by the Iriya exit, founded 1935; winter thick udon)
//   + 希家 上野店 Nozomiya (Yokohama iekei ramen; free rice) — no ramen block (see report)
//   + 珍々軒 Chin Chin Ken (third-generation local Chinese under the tracks, open-air seats; fried rice and gyoza)
//   + 炭焼コの字酒場 醸亀げん Jokigen (16-seat U-counter charcoal-grill sake bar, Kita-Ueno)
// Skipped (see skip()): 博多風龍 上野店 13177876, 麺屋武蔵 武骨相傳 13127383, マリオンクレープ 上野アメ横店 13186652.
// Chain check. Tsutaya, Chin Chin Ken, Jokigen: one shop each found. Nozomiya: a December 2025 reviewer had been to a Nozomiya in
//   Ota Ward — two shops known, kept.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address (上野7-10-6, 東上野3-39-7, 上野6-12-2, 北上野1-5-9).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13177876', 'national chain: 博多風龍 (Hakata Furyu) tonkotsu ramen chain; this is the 上野店.');
skip('13127383', 'chain in data: 麺屋武蔵 already has tokyo_menya_musashi_bukotsu_ga (武骨外伝) and the placeholder tokyo3__141 (神山).');
skip('13186652', 'national chain: マリオンクレープ (Marion Crêpes); this is the 上野アメ横店 stand.');

// ================================================================ つたや
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13049854/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ueno-tsutaya.com/'; const MENU = SITE + 'menu/lunch/'; const NEWS = SITE + 'news/20260924/';
  const WD = day(['11:00', '14:30'], ['17:30', '20:00']); const SA = day(['11:00', '14:00']);
  put({
    id: 'tokyo_tsutaya_soba_ueno', name: 'つたや (Tsutaya)', category: 'OMNI',
    lat: 35.715508, lng: 139.779448, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the soba is not described as 100% buckwheat (a 2026 reviewer smelled both wheat and buckwheat), and there are udon, tempura, curry and katsudon; the tsuyu is soy-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba and udon in a bonito-based tsuyu, with meat, duck, egg and seafood toppings.',
    hours_raw: 'Official site: lunch Mon–Fri 11:00–14:30, Sat and holidays 11:00–14:00; dinner Mon–Fri 17:30–20:00; lunch closed Sundays, dinner closed Sat, Sun and holidays. The shop\'s 24 September 2026 notice lists lunch closing days as Sundays and holidays, ends service when food runs out, and says dinner resumed on 5 October 2026 after a September with reduced hours and menu. Tabelog gives the same weekday times. Evening reservations only. 16 table seats. Non-smoking. Cards (VISA, Master) and PayPay; no e-money. Founded in 1935 (a January 2025 review).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 7-chōme, along the railway near the Iriya exit — 2–3 min from JR Ueno Stn Iriya exit',
    cuisine: 'Old Ueno soba shop, founded in 1935, with thin stone-ground soba and udon (reviews; official site) · lunch menu (official site, read November 2026): mori ¥800, zaru ¥900, kake ¥800, tanuki or kitsune ¥850, tsukimi ¥950, curry nanban ¥1,150, kamo seiro ¥1,400, tenzaru ¥1,700 / ¥2,200, nishin soba ¥1,600; winter thick udon from 5 October: nabeyaki ¥1,700 / ¥2,200, sukiyaki udon ¥1,600, miso-nikomi (red or white miso) ¥1,500; winter oyster nanban ¥1,500, oyster curry nanban ¥1,600 · rice bowls: tamago-don ¥1,100, oyako-don ¥1,300, katsudon ¥1,350, asari-don ¥1,400, tendon ¥1,900 / ¥2,500 · lunch sets with soba or udon, e.g. tamago-don set (March 2026) · evening menu with oden, soba miso and drinks (June 2025)',
    website: SITE, gmaps: gm('つたや 上野7-10-6 そば'), menu_url: MENU,
    notes: "[Soba · Ueno, an Iriya-side soba shop since 1935] An old family-run soba and udon shop just off the tracks near the Iriya exit of Ueno Station, founded in 1935, with a smart entrance and only tables inside. The soba is thin and made from stone-ground buckwheat, with a sweetish tsuyu; diners in 2026 ordered duck seiro, chilled sesame-miso and mekabu soba, and lunch sets of soba with a tamago-don or katsudon. From 5 October winter brings thick-noodle nabeyaki, sukiyaki and miso-nikomi udon and oyster nanban. Bowls run about ¥800–1,700. Lunch only on Saturdays; dinner (weekdays to 8 pm) has oden and soba miso with drinks. The shop cut hours in September 2026 and resumed normal service on 24 September.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 1935 (Showa 10), per a January 2025 review', background: 'A May 2026 review calls it family-run; a December 2022 visitor chatted with "the friendly owner and the hostess". The shop\'s notices are signed 店主 (owner). No source names the owner.', philosophy: null, specialty: 'Thin stone-ground soba; winter thick udon.',
      anecdotes: [
        { text: '"Since the soba here is made from stone-ground buckwheat flour, I thought it would be best to enjoy it cold… the noodles were thin yet had a great chewiness and smooth texture." — March 2026, tamago-don set.', source: R + 'B514075858/' },
        { text: '"The soba noodles released a delightful aroma of wheat and buckwheat… the hot dipping sauce infused with the rich flavor of duck." — February 2026, kamo seiro.', source: R + 'B418003253/' },
        { text: '"It\'s a family-run business! The staff were very friendly." — May 2026.', source: R + 'B528065076/' },
      ],
      japanese_sources_summary: '公式サイト (ueno-tsutaya.com): 上野そば処 つたや、上野7-10-6、昼の部は平日11:00〜14:30・土曜祝日11:00〜14:00、夜の部は平日17:30〜20:00、定休日は昼の部が日曜、夜の部が土日祝、予約・問い合わせ03-3844-3493。2026年9月24日のお知らせ (店主): 9月は営業時間とメニューを一部変更していたが9月24日より通常営業、セットと天ぷらのメニューを再開、平日11:00〜14:30・土曜11:00〜14:00、商品がなくなり次第終了、夜の部は10月5日再開予定、定休日は日・祝日、10月5日から冬限定メニュー。お品書き: もり800円、ざる900円、かけ800円、たぬき・きつね850円、月見950円、カレー南ばん1,150円、鴨せいろ1,400円、天ざる並1,700円・上2,200円、にしんそば1,600円、冬季限定極太うどんの鍋焼きうどん並1,700円・上2,200円、すき焼きうどん1,600円、味噌煮込みうどん (赤味噌・白味噌) 1,500円、牡蠣南ばん1,500円、牡蠣カレー南ばん1,600円、玉子丼1,100円、親子丼1,300円、カツ丼1,350円、あさり丼1,400円、天丼並1,900円・上2,500円。食べログ: 16席、禁煙、カード・PayPay 可、夜のみ予約可。口コミ(2022年12月〜2026年5月): 1935年創業、鴨せいろ、カレー南ばん、気さくな店主とおかみさん、牡蠣天そば、おでん、そば味噌、石臼挽きの細いそば、玉子丼のセット、カツ丼、つゆはやや甘い、家族経営、冷やしごま味噌そば、冷やしめかぶそば、夜は閉店が早い。',
      confidence: 'medium', sources: [TB, SITE, MENU, NEWS, R + 'B418003253/', R + 'B493521098/', R + 'B498781900/', R + 'B499469410/', R + 'B507924046/', R + 'B514075858/', R + 'B521483862/', R + 'B528065076/', R + 'B528979832/', R + 'B529095810/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Family-run neighbourhood soba shop; tables only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野7-10-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a 24 September 2026 notice and a current menu; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野七丁目10番6号 (go) 5m; ${TODAY}`,
  }, { verified: 'authoritative', confidence: 'high', sources: [MENU],
    price_note: 'Prices from the official lunch menu (read 2 November 2026, after the April 2026 price revision).', last_checked: TODAY, items: [
      it('もり', 'mori', 'Mori soba', '¥800', 'Cold soba', 'no', 'no', 'Official menu.', 'mori'),
      it('かけ', 'kake', 'Kake soba', '¥800', 'Hot soba', 'no', 'no', 'Official menu.', 'kake'),
      it('鴨せいろ', '', 'Duck seiro', '¥1,400', 'Cold soba', 'no', 'no', 'Official menu.', 'kamo_seiro'),
      it('カレー南ばん', '', 'Curry nanban', '¥1,150', 'Hot soba', 'no', 'no', 'Official menu.', 'curry_nanban'),
      it('天ざる', '', 'Tenzaru', '¥1,700', 'Cold soba', 'no', 'no', 'Official menu; 上 ¥2,200.', 'tenzaru'),
      it('鍋焼きうどん', '', 'Nabeyaki udon (winter, thick udon)', '¥1,700', 'Udon', 'no', 'no', 'Official menu; from 5 October; 上 ¥2,200.', 'nabeyaki'),
      it('玉子丼', '', 'Tamago-don', '¥1,100', 'Rice bowls', 'no', 'no', 'Official menu.', 'tamago_don'),
      it('親子丼', '', 'Oyako-don', '¥1,300', 'Rice bowls', 'no', 'no', 'Official menu.', 'oyako_don'),
    ] }, {
    cuisine: '1935年創業の上野の老舗のそば屋。石臼挽きの細いそばとうどん (口コミ、公式サイト)・お品書き (公式サイト、2026年11月確認): もり800円、ざる900円、かけ800円、たぬき・きつね850円、月見950円、カレー南ばん1,150円、鴨せいろ1,400円、天ざる1,700円・2,200円、にしんそば1,600円。10月5日からの冬季限定極太うどん: 鍋焼きうどん1,700円・2,200円、すき焼きうどん1,600円、味噌煮込みうどん (赤味噌・白味噌) 1,500円。冬季限定の牡蠣南ばん1,500円、牡蠣カレー南ばん1,600円・丼: 玉子丼1,100円、親子丼1,300円、カツ丼1,350円、あさり丼1,400円、天丼1,900円・2,500円・そばかうどんの付くランチセット (玉子丼のセットなど、2026年3月)・夜の部はおでん、そば味噌と酒 (2025年6月)',
    neighborhood: '上野七丁目、入谷口近くの線路沿い。JR上野駅入谷口から徒歩2〜3分',
    gf_detail: 'グルテンフリーではありません。そばは十割とは書かれておらず (2026年の口コミでは小麦とそばの香り)、うどん、天ぷら、カレー、カツ丼もある。つゆは醤油ベース。',
    vegan_detail: 'ヴィーガンではありません。かつおのつゆのそばとうどんで、肉、鴨、卵、魚介の具。',
    notes: '[そば・上野、1935年から入谷口側のそば屋] 上野駅入谷口近く、線路沿いの家族経営の老舗のそば・うどん店で、1935年の創業。入口は立派で、店内はテーブル席のみ。そばは石臼挽きの細麺で、つゆはやや甘め。2026年の口コミでは鴨せいろ、冷やしごま味噌そばやめかぶそば、玉子丼やカツ丼とそばのランチセットが頼まれている。10月5日からは冬の極太麺の鍋焼き、すき焼き、味噌煮込みうどんと牡蠣南ばん。一品は約800〜1,700円。土曜は昼のみ、夜 (平日20時まで) はおでんやそば味噌で一杯も。2026年9月は営業時間を短くしていたが、9月24日から通常営業に戻った。',
  });
}

// ================================================================ 希家 上野店
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13171814/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '24:00']);
  put({
    id: 'tokyo_nozomiya_ueno', name: '希家 上野店 (Nozomiya)', category: 'OMNI',
    lat: 35.711835, lng: 139.778618, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: iekei ramen and tsukemen on wheat noodles in a soy tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and chicken soup with chicken oil, chashu and egg.',
    hours_raw: 'Daily 11:00–24:00 (last order 23:45); open all year (Tabelog). No reservations. Ticket machine at the entrance. Cash only (no cards or e-money, Tabelog). 12 seats. Smoking allowed except 11:00–14:00 (Tabelog). Weekday lunch: large noodles free (December 2025). Rice: one free bowl (2025–2026 reviews); a December 2025 diner says refills now cost ¥100.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Ueno 3-chōme, 長春堂ビル 1F — 2 min from Ueno Stn (Hibiya Line); 4 min from JR Ueno Stn Asakusa or Hirokoji exit',
    cuisine: 'Yokohama iekei ramen: pork-bone and chicken soup, with noodle firmness, chicken-oil amount and tare strength chosen when you order (Tabelog) · shoyu or shio ramen ¥900 (April and October 2026) with spinach and three sheets of nori; "Iekei ramen meat festival" with five chashu; tsukemen; one free bowl of rice · toppings such as cabbage and bean sprouts, seasoned egg · pickled cucumber on the table',
    website: null, gmaps: gm('希家 上野店 東上野3-39-7'), menu_url: TB + 'dtlmenu/',
    notes: "[Ramen · Higashi-Ueno, iekei with free rice near the station] A 12-seat Yokohama iekei ramen counter a few minutes from Ueno Station, open from 11 am to midnight every day. Buy a ticket, tell the staff how firm you want the noodles, how much chicken oil and how strong the tare, and eat the rich pork-and-chicken soup with spinach, nori and chashu alongside a free bowl of rice (plain shoyu or shio ¥900 in 2026). Reviews in 2025–2026 split: many like the rich, rice-friendly soup and the value; others found the noodles soft for iekei, the soup scant, a smell from the restroom, and one wrote that the soup is made elsewhere rather than in the shop, while the listing says it is made from domestic pork bones and chicken carcasses. Cash only; smoking allowed after 2 pm.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per Tabelog\'s listing, the soup uses plenty of domestic pork bones and chicken carcasses; a February 2026 reviewer believed the soup is prepared elsewhere, not in the shop. A December 2025 reviewer had eaten at a Nozomiya in Ota Ward. No source names the owner or gives an opening date.', philosophy: null, specialty: 'Iekei tonkotsu-shoyu ramen.',
      anecdotes: [
        { text: '"During lunchtime, they offer a free large size and rice as a default, which is really appreciated… This time, I tried the salt flavor." — December 2025.', source: R + 'B491767562/' },
        { text: '"The soup is amazing!!! It\'s not made in-house but prepared elsewhere. You can tell as soon as you walk in by the smell… For a \'Iekei\' style, they need to be more chewy." — February 2026.', source: R + 'B499744497/' },
        { text: '"Currently, rice is free with the meal. This time, I ordered the regular ramen… At JPY 900, I think it\'s still a good value considering the free rice." — October 2026.', source: R + 'B537221185/' },
      ],
      japanese_sources_summary: '食べログ: 希家 上野店、東上野3-39-7 長春堂ビル 1F、日比谷線上野駅から徒歩2分、JR上野駅浅草口・広小路口から徒歩4分、毎日11:00〜24:00 (L.O.23:45)、年中無休、予約不可、カード・電子マネー不可、12席、喫煙可 (11時〜14時は禁煙)、国産の豚骨と鶏ガラを使い、麺のかたさ・鶏油・味の濃さを注文時に聞く。口コミ(2025年12月〜2026年10月): 平日昼は大盛り無料、ライス1杯無料 (おかわりは100円という声も)、塩ラーメン900円、ほうれん草とのり3枚、スープは店で作っていないという声、麺はもっともちもちがいい、キャベツともやし、Ota Ward の希家にも行ったという人、肉祭り (チャーシュー5枚)、スープが少ない、トイレのにおい、ライスの器の汚れ、ラーメン900円。',
      confidence: 'medium', sources: [TB, R + 'B491767562/', R + 'B499744497/', R + 'B518220423/', R + 'B519337246/', R + 'B520562965/', R + 'B523385212/', R + 'B527224355/', R + 'B532914505/', R + 'B536338033/', R + 'B537221185/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff ask your noodle, oil and tare preferences.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野3-39-7 長春堂ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野三丁目39番7号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523385212/', R + 'B537221185/'],
    price_note: 'Prices from April and October 2026 reviews; the Tabelog menu dates from 2016.', last_checked: TODAY, items: [
      it('', '', 'Iekei ramen (shoyu or shio) with free rice', '¥900', 'Ramen', 'no', 'no', 'April and October 2026.', 'iekei'),
      it('', '', 'Iekei ramen "meat festival" (five chashu)', '', 'Ramen', 'no', 'no', 'April 2026.', 'niku_matsuri'),
      it('', '', 'Tsukemen', '', 'Tsukemen', 'no', 'no', 'April 2026 (earlier visit).', 'tsukemen'),
    ] }, {
    cuisine: '横浜家系ラーメン。豚骨と鶏のスープで、麺のかたさ、鶏油の量、味の濃さを注文時に選ぶ (食べログ)・醤油か塩のラーメン900円 (2026年4月・10月)、ほうれん草とのり3枚。チャーシュー5枚の「家系ラーメン肉祭り」、つけ麺、ライス1杯無料・キャベツともやし、味玉などのトッピング・卓上にきゅうりの漬物',
    neighborhood: '東上野三丁目、長春堂ビル 1F。日比谷線上野駅から徒歩2分、JR上野駅浅草口・広小路口から徒歩4分',
    gf_detail: 'グルテンフリーではありません。小麦の麺に醤油だれの家系ラーメンとつけ麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨と鶏のスープに鶏油、チャーシュー、卵。',
    notes: '[ラーメン・東上野、駅近くのライス無料の家系] 上野駅から数分の12席の横浜家系ラーメンのカウンターで、毎日11時から深夜0時まで。食券を買い、麺のかたさ、鶏油の量、味の濃さを伝えて、ほうれん草、のり、チャーシューののった濃厚な豚骨と鶏のスープを無料のライスと食べる (2026年は醤油か塩で900円)。2025〜2026年の口コミは分かれていて、ご飯に合う濃いスープとお得さを評価する声が多い一方、家系にしては麺がやわらかい、スープが少ない、トイレのにおい、スープは店で作らずよそで作っているという声も (食べログの紹介では国産の豚骨と鶏ガラを使うとある)。現金のみ、14時以降は喫煙可。',
  });
}

// ================================================================ 珍々軒
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13008530/'; const R = TB + 'dtlrvwlst/';
  const W = day(['10:00', '23:00']); const SU = day(['10:00', '20:00']);
  put({
    id: 'tokyo_chinchinken_ueno', name: '珍々軒 (Chin Chin Ken)', category: 'OMNI',
    lat: 35.710446, lng: 139.774879, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a local Chinese shop of ramen, gyoza, yakisoba and soy-seasoned fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: lard-fried rice, pork gyoza, chashu and meat soups.',
    hours_raw: 'Tue–Sat 10:00–23:00; Sun and holidays 10:00–20:00; closed Mondays (the next day when Monday is a holiday); hours may change (Tabelog). No reservations; long queues at weekend lunch (40 minutes to an hour on Sundays in 2026; arriving by about 9:20 suggested). Cash only. 24 seats: a counter for 8 and two tables for two inside, plus tables outside under the tracks. Smoking allowed. Hot in summer and cold in winter outside (November 2026 review).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ueno 6-chōme, under the elevated tracks at Ameyoko — 3 min from JR Ueno Stn; 5 min from JR Okachimachi Stn',
    cuisine: 'Local Chinese (machi-chuka) under the tracks, run by the third generation (October 2026 review) · fried rice (large is 1.5 times for +¥100), big juicy gyoza made at the front of the shop, ramen, shio ramen, wonton noodles, tantanmen, liver and bean-sprout stir-fry, yakisoba, chashu platter, gyoza rice (2026 reviews) · Tabelog menu (2022): fried rice ¥800, gyoza ¥500, ramen ¥700, tantanmen ¥850, yakisoba ¥800, ginger-pork rice ¥900 · draft beer, sake, shochu',
    website: null, gmaps: gm('珍々軒 上野6-12-2'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese · Ameyoko, open-air fried rice and gyoza under the tracks] A long-running local Chinese restaurant under the railway at Ameyoko, now in its third generation, with a short counter inside and most tables out in the open under the tracks. At weekends a queue forms before the 10 am opening for the plain, lard-sweet fried rice (large is just ¥100 more) and the big, chewy-skinned gyoza made at the front of the shop; diners also order ramen, wonton noodles, tantanmen and liver stir-fry, with a beer. A November 2026 regular warned of hour-long Sunday waits, heat and cold outside, and found the gyoza undercooked that day; others praise the value and the Ueno atmosphere. Cash only; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'An October 2026 review calls it a long-established local Chinese restaurant in its third generation. A November 2026 review says it was originally known for tantanmen before television made the fried rice famous. No source names the owner or gives an opening date.', philosophy: null, specialty: 'Fried rice; gyoza.',
      anecdotes: [
        { text: '"The fried rice is almost devoid of ingredients, but the sweetness from the lard is addictive… The gyoza is large, has a homemade feel, and is juicy." — October 2026.', source: R + 'B529995411/' },
        { text: '"The large fried rice is 1.5 times the regular size for just an extra JPY 100." — October 2026.', source: R + 'B538282050/' },
        { text: '"I went on Sunday at 9:45 and had to wait 40 minutes… The gyoza was undercooked—it wasn\'t properly fried." — November 2026.', source: R + 'B522877079/' },
      ],
      japanese_sources_summary: '食べログ: 珍々軒、上野6-12-2、JR上野駅から徒歩3分、御徒町駅から徒歩5分、火〜土10:00〜23:00、日祝10:00〜20:00、月曜休み (祝日の場合は翌日)、予約不可、現金のみ、24席 (カウンター8、2名のテーブル2、外に4名のテーブル3など)、喫煙可。メニュー (2022年): チャーハン800円、餃子500円、ラーメン700円、担々麺850円、焼きそば800円、生姜焼きライス900円。口コミ(2026年6月〜11月): 日曜は開店前から行列で40分〜1時間待ち、夏は暑く冬は寒い、海外の客が多い、餃子は焼きが足りなかった、チャーハンが小さかった、もとは担々麺の店だったがテレビでチャーハンが有名に、店の前で包む餃子、チャーシュー、ラードの甘みのチャーハン、大盛りは1.5倍で+100円、塩ラーメン、ワンタン麺、餃子ライス、自家製ラー油、生姜の利いたスープ、三代続く町中華、高架下の屋外の席、レバもやし、焼きそば。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B522877079/', R + 'B529985392/', R + 'B529995411/', R + 'B537916098/', R + 'B538010381/', R + 'B538067254/', R + 'B538282050/', R + 'B538317360/', R + 'B538391149/', R + 'B538478082/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue outside; mostly outdoor seating; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野6-12-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野六丁目12番2号 (go) 8m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B538282050/'],
    price_note: 'Prices from the Tabelog menu (updated December 2022) — may have risen; large fried rice +¥100 (October 2026).', last_checked: TODAY, items: [
      it('', '', 'Fried rice', '¥800', 'Rice', 'no', 'no', 'Tabelog menu (2022); large +¥100 (October 2026).', 'chahan'),
      it('', '', 'Gyoza', '¥500', 'Gyoza', 'no', 'no', 'Tabelog menu (2022).', 'gyoza'),
      it('', '', 'Ramen', '¥700', 'Noodles', 'no', 'no', 'Tabelog menu (2022).', 'ramen'),
      it('', '', 'Tantanmen', '¥850', 'Noodles', 'no', 'no', 'Tabelog menu (2022).', 'tantanmen'),
    ] }, {
    cuisine: '高架下の町中華で、三代目 (2026年10月の口コミ)・チャーハン (大盛りは1.5倍で+100円)、店の前で包む大きくジューシーな餃子、ラーメン、塩ラーメン、ワンタン麺、担々麺、レバもやし炒め、焼きそば、チャーシューの盛り合わせ、餃子ライス (2026年の口コミ)・食べログのメニュー (2022年): チャーハン800円、餃子500円、ラーメン700円、担々麺850円、焼きそば800円、生姜焼きライス900円・生ビール、日本酒、焼酎',
    neighborhood: '上野六丁目、Ameyoko の高架下。JR上野駅から徒歩3分、JR御徒町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。ラーメン、餃子、焼きそば、醤油で味付けしたチャーハンの町中華。',
    vegan_detail: 'ヴィーガンではありません。ラードのチャーハン、豚肉の餃子、チャーシュー、肉のスープ。',
    notes: '[中華・Ameyoko、高架下の屋外で食べるチャーハンと餃子] Ameyoko の線路の高架下にある長く続く町中華で、今は三代目。店内は短いカウンターで、ほとんどのテーブルは高架下の屋外。週末は10時前から行列ができ、具の少ないラードの甘みのチャーハン (大盛りは100円増しだけ) と、店の前で包む皮のもちもちした大きな餃子が目当て。ラーメン、ワンタン麺、担々麺、レバ炒めをビールと楽しむ人も。2026年11月の常連は日曜の1時間待ち、屋外の暑さ寒さ、その日の餃子の焼きの甘さを書いている。ほかの人はお得さと上野らしい雰囲気を評価。現金のみ、月曜休み。',
  });
}

// ================================================================ 炭焼コの字酒場 醸亀げん
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13252037/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '23:00']);
  put({
    id: 'tokyo_jokigen_kitaueno', name: '炭焼コの字酒場 醸亀げん (Jokigen)', category: 'OMNI',
    lat: 35.716154, lng: 139.781682, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled local chicken, sashimi and chilled tofu are on the menu, but nothing is described as gluten-free; there are fried dishes, a closing ramen and seasoned sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken and fish sake bar (grilled local chicken, liver, chicken sashimi, fish). Chilled tofu, sliced onion and spicy cucumber are on the menu, but how they are dressed is not stated.',
    hours_raw: 'Mon, Thu–Sun and holidays 17:30–23:00 (food last order 21:30, drinks 22:30); closed Tuesdays and Wednesdays (Tabelog). Reservations recommended; phone from 13:00, including to check for a single seat. Two drinks per person minimum (2026 reviews); no table charge. 16 seats around a U-shaped counter (Tabelog; a September 2026 diner guessed about 14). Non-smoking. Cards, e-money and QR.',
    hours: { 0: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Ueno 1-chōme, along Showa-dori toward Iriya — 6 min from JR Ueno Stn Iriya exit; 8 min from Iriya Stn',
    cuisine: 'U-shaped counter sake bar centred on charcoal grilling and seasonal small plates (Tabelog; reviews) · menu (Tabelog, April 2026, tax included): assorted charcoal-grilled Kyoto Benishigure chicken ¥1,280, beef tendon in oden style ¥750, potato salad with braised pork belly ¥720, sansho-simmered liver ¥600, chicken sashimi with wasabi ¥600, chicken skin with ponzu ¥680, cartilage tsukune with perilla ¥700, fried clams ¥680, homemade atsuage ¥680, chilled tofu ¥500, smoked iburi-gakko with cheese ¥580 · monthly clay-pot rice (onion and bacon in March 2026); a closing ramen in a golden broth (April 2026) · over 20 Japanese sakes, lesser-known breweries included',
    website: null, gmaps: gm('炭焼コの字酒場 醸亀げん 北上野1-5-9'), menu_url: TB + 'dtlmenu/',
    notes: "[Sake bar · Kita-Ueno, a U-counter of charcoal grill and sake] A small sake bar on the Iriya side of Ueno with a single U-shaped counter for 16, where regulars come alone to talk with the staff. The kitchen grills Kyoto Benishigure chicken and seasonal fish over charcoal and sends out small plates — sansho-simmered liver, chicken sashimi, cartilage tsukune with perilla, beef tendon in oden style — then a monthly clay-pot rice or a golden-broth ramen to finish. More than 20 sakes, many from little-known breweries, are chosen to match; ask for sweet or dry. Reviewers in 2026 describe it as run by two women (a September 2026 diner wrote \"a couple\"); there is a two-drink minimum but no table charge. Book ahead; closed Tuesdays and Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Run by two people (2026 reviews)'], origin: null, background: 'Reviews in February, August and September 2026 say the bar is run by two women; another September 2026 review says it is run by a couple. An April 2025 diner praised the owner\'s choice of sake. No source names them or gives an opening date.', philosophy: null, specialty: 'Charcoal-grilled local chicken; sake pairings; clay-pot rice.',
      anecdotes: [
        { text: '"Perhaps because it\'s run by two women, the atmosphere felt calm and serene. I believe it\'s a place where even a woman alone can feel comfortable." — February 2026.', source: R + 'B523488723/' },
        { text: '"I highly recommend the monthly clay pot rice; on this visit, it was onion and bacon rice." — March 2026.', source: R + 'B525068070/' },
        { text: '"The rule of requiring at least 2 drinks per person makes it difficult to enjoy this place." — May 2026.', source: R + 'B529471026/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭焼コの字酒場 醸亀げん、北上野1-5-9、上野駅入谷口から徒歩6分、入谷駅から徒歩8分、月・木〜日・祝17:30〜23:00 (L.O.料理21:30、飲み物22:30)、火水休み、予約可 (13時から電話可、一人でも空席の確認を)、お通しなし、コの字カウンター16席、禁煙、カード・電子マネー・QR可。メニュー (2026年4月): 地鶏の炭火焼き盛り合わせ (Kyoto Benishigure) 1,280円、牛すじのおでん風750円、豚の角煮のポテトサラダ720円、レバーの山椒煮600円、鶏刺し600円、鶏皮ぽん酢680円、軟骨入りつくね700円、あさりの唐揚げ680円、自家製厚揚げ680円、冷奴500円、いぶりがっこチーズ580円。口コミ(2025年4月〜2026年10月): 季節の新しい料理、コの字カウンターで話しやすい、店主の日本酒の選び方、女性二人で営む、一人でも居心地がいい、月替わりの土鍋ご飯 (玉ねぎとベーコン、2026年3月)、日本酒は20種以上、1人2ドリンク制、締めのラーメン、「a couple」が営むという英語の口コミも (2026年9月)、常連が多い、Showa Street を Iriya 方面へ。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B504507375/', R + 'B523488723/', R + 'B525068070/', R + 'B527752651/', R + 'B529471026/', R + 'B530930913/', R + 'B534773328/', R + 'B535452243/', R + 'B535930331/', R + 'B537524676/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter of regulars; conversation with the staff is part of it; two-drink minimum.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都台東区北上野1-5-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing (menu updated April 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区北上野一丁目5番9号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (updated 4 April 2026, tax included); two drinks per person minimum.', last_checked: TODAY, items: [
      it('', '', 'Assorted charcoal-grilled Kyoto Benishigure chicken', '¥1,280', 'Charcoal grill', 'ask', 'no', 'Tabelog menu.', 'jidori_moriawase'),
      it('', '', 'Sansho-simmered liver', '¥600', 'Small plates', 'ask', 'no', 'Tabelog menu.', 'liver_sansho'),
      it('', '', 'Chicken sashimi with wasabi', '¥600', 'Small plates', 'ask', 'no', 'Tabelog menu.', 'torisashi'),
      it('', '', 'Cartilage tsukune with perilla', '¥700', 'Small plates', 'ask', 'no', 'Tabelog menu.', 'tsukune'),
      it('', '', 'Chilled tofu', '¥500', 'Small plates', 'ask', 'ask', 'Tabelog menu.', 'hiyayakko'),
    ] }, {
    cuisine: '炭火焼きと季節の小皿が中心のコの字カウンターの日本酒の店 (食べログ、口コミ)・メニュー (食べログ、2026年4月、税込み): Kyoto Benishigure の地鶏の炭火焼き盛り合わせ1,280円、牛すじのおでん風750円、豚の角煮のポテトサラダ720円、レバーの山椒煮600円、わさびの鶏刺し600円、鶏皮ぽん酢680円、大葉の香る軟骨入りつくね700円、あさりの唐揚げ680円、自家製厚揚げ680円、冷奴500円、いぶりがっこチーズ580円・月替わりの土鍋ご飯 (2026年3月は玉ねぎとベーコン)、締めの金色のスープのラーメン (2026年4月)・あまり知られていない蔵も含む20種以上の日本酒',
    neighborhood: '北上野一丁目、Showa-dori を入谷方面へ。JR上野駅入谷口から徒歩6分、入谷駅から徒歩8分',
    gf_detail: '要確認。地鶏の炭火焼き、刺身、冷奴はあるが、グルテンフリーの説明はありません。揚げ物、締めのラーメン、たれの料理もある。',
    vegan_detail: 'ヴィーガンではありません。鶏と魚の日本酒の店 (地鶏の炭火焼き、レバー、鶏刺し、魚)。冷奴、オニオンスライス、ピリ辛きゅうりもあるが、味付けは書かれていません。',
    notes: '[日本酒・北上野、炭火焼きと酒のコの字カウンター] 上野の入谷側にある小さな日本酒の店で、16席のコの字カウンターがひとつ。常連が一人で来て店の人と話す。厨房では Kyoto Benishigure の地鶏や季節の魚を炭火で焼き、レバーの山椒煮、鶏刺し、大葉の軟骨つくね、牛すじのおでん風などの小皿を出し、締めは月替わりの土鍋ご飯か金色のスープのラーメン。あまり知られていない蔵も含む20種以上の日本酒を合わせてくれるので、甘口か辛口かを伝えて。2026年の口コミでは女性二人で営む店 (2026年9月の英語の口コミの一つは「a couple」と書いている)。1人2ドリンク制だがお通しはなし。予約がおすすめ、火曜・水曜休み。',
  });
}

save();
