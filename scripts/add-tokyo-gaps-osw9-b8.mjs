// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 8.
//   + 串揚げPyon Kushiage Pyon (8-seat omakase kushiage counter from the Hasegawa Minoru group; moved to Roppongi 2020)
//   + 和味 大場 Wami Oba (basement fish izakaya: negitoro and grilled-fish lunches, shochu at night)
//   + 麺匠 竹虎 六本木店 Mensho Taketora Roppongi (ramen and tsukemen in private rooms, open almost round the clock)
//   + 三宅輝 Miyake Akira (Michelin-selected kappo with eel grilled in a 130-year-old tare and house caviar)
//   Skipped: チキンマン 13012579 — existence unverifiable: the newest review is March 2025, the listing is not shop-maintained,
//   and the shop's site domain (chickenman.jp) showed a domain-resale page on 2026-11-01.
//   Chain check. Pyon: the Tabelog text says it was "once part of the Hasegawa Minoru Lab"; one shop. Oba: one shop.
//   Taketora: the official site (menshou-taketora.com) lists 本店, 新宿店, 六本木店 and 沖縄新都心店 — four shops, none in data.
//   Miyake Akira: one shop. None is in data/tokyo.json by name, Tabelog id or address. Wami Oba (六本木6-1-5 福島KDYビル B1)
//   shares street number 6-1-5 with Sushi Hajime (tokyo_sushi_hajime_roppongi, address_ja "東京都港区六本木6-1-5 グッドワークビル 1F");
//   their Tabelog points are 3 m apart, so Oba's pin is offset 8 m west. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13012579', 'チキンマン: existence unverifiable — newest review March 2025, listing not shop-maintained, and chickenman.jp showed a domain-resale page on 2026-11-01');

// ================================================================ 串揚げPyon
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13279564/'; const R = TB + 'dtlrvwlst/';
  const E = day(['17:45', '23:00']); const S = day(['12:30', '15:00'], ['17:45', '23:00']);
  put({
    id: 'tokyo_kushiage_pyon_roppongi', name: '串揚げPyon (Kushiage Pyon)', category: 'OMNI',
    lat: 35.664054, lng: 139.732467, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every skewer is battered and deep-fried, and the course ends with curry or noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of fried seafood, meat and vegetables in a shared fryer, with butter, cheese and dashi.',
    hours_raw: 'Tue–Fri two dinner seatings, from 17:45 and from 20:30 (to about 23:00); Sat also a lunch 12:30–15:00; closed Sundays and Mondays (Tabelog). Reservation only, omakase only. 10% service charge, no cover. 8 counter seats. Non-smoking. Cards; no e-money or QR. Opened in Roppongi 7 September 2020 (Tabelog).',
    hours: { 1: E, 2: E, 3: E, 4: E, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-10-3, 第V大栄ビル 1F — 1 min from Roppongi Stn exit 6 (Oedo line)',
    cuisine: 'Omakase kushiage, served one skewer at a time at the counter (Tabelog) · Pyon omakase course ¥19,800 (September 2026; ¥17,600 in April 2024); add-on skewers and a finish raise the bill to around ¥29,000 (September 2026) · a September–October 2026 course: Shine Muscat with cream cheese and prosciutto, steak shiitake from Oita, Arita beef tongue with mustard, kombu with herring roe and sea urchin, fresh ginkgo with Parmigiano or Pecorino, sanma, matsutake with sukiyaki egg-yolk sauce, sweet shrimp, figs with fried dashi, hamo with ume, venison tenderloin with chestnut, sawara with garlic chives, konnyaku with roe, Tosa red-beef tenderloin, daikon consommé · extras: scallop with butter soy sauce, chicken breast with mentaiko and cheese, a sausage, bacon mozzarella, red eggplant with sea urchin · finish: curry or a hamo, onion and jamón noodle soup; vanilla ice cream · wine and sake',
    website: null, gmaps: gm('串揚げPyon 六本木4-10-3'), menu_url: TB + 'dtlmenu/',
    notes: "[Kushiage · Roppongi, a luxury kushiage omakase] An eight-seat black counter a minute from Roppongi Station where kushiage becomes a course: around 16 skewers, one at a time, mixing seasonal fish and vegetables with luxury toppings — Shine Muscat with cream cheese and prosciutto, kombu with roe and sea urchin, matsutake dipped in sukiyaki egg yolk, venison with chestnut — before a daikon consommé, a curry or a noodle soup, and ice cream. The shop says it came from the Hasegawa Minoru group's lab and aims to be the best kushiage in Tokyo; diners in 2026 praise how light the frying is, and one noticed the staff re-laying the skewers for a left-handed guest. The omakase is ¥19,800, with add-on skewers on top; one September 2026 diner found few dishes memorable for the price. Reservation only; two seatings a night, closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: [], origin: 'Formerly part of the Hasegawa Minoru Lab (Tabelog shop text)',
      background: 'The Tabelog shop text says Kushiage Pyon was once part of the Hasegawa Minoru Lab before moving to Roppongi (opened 7 September 2020); an April 2024 reviewer calls it a kushiage shop of the Hasegawa Minoru group. No chef is named in the sources read.',
      philosophy: '"Aiming for the best kushiage in Tokyo" — frying that goes beyond the natural flavour of the ingredients and leaves you feeling light (Tabelog shop text).', specialty: 'Seasonal kushiage omakase; steak shiitake; Arita beef tongue.',
      anecdotes: [
        { text: '"…I was left-handed and immediately adjusted the way the skewers were placed." — September 2026 (the staff noticed).', source: R + 'B536596064/' },
        { text: '"The technique for draining excess oil is exceptional, making the fried dishes feel light and enjoyable until the very last bite." — October 2026, first visit since the move to Roppongi.', source: R + 'B537061047/' },
        { text: '"There weren’t many dishes that left a strong impression… considering the high price range for kushiage, satisfaction levels may vary." — September 2026.', source: R + 'B536512012/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 串揚げPyon、港区六本木4-10-3 第V大栄ビル1F、大江戸線六本木駅6番出口から徒歩1分、火〜金17:45〜・20:30〜 (23:00まで)、土は12:30〜15:00も、日月休み、完全予約制、おまかせのみ、サービス料10%、チャージなし、カウンター8席、禁煙、カード可、2020年9月7日オープン。店の紹介: 東京一の串揚げをめざす、Hasegawa Minoru の研究所から六本木へ移転。口コミ(2024年4月〜2026年10月): おまかせ19,800円 (2024年は17,600円)、追加の串と締めで約29,000円、シャインマスカットと生ハム、ステーキ椎茸、Arita の牛タン、子持ち昆布と雲丹、大根のコンソメ、締めのカレーか鱧とハモンセラーノの温麺、左利きの客に合わせて串の向きを変える気配り、値段の割に印象が薄いという声も。',
      confidence: 'medium', sources: [TB, R + 'B457838378/', R + 'B461129271/', R + 'B474317952/', R + 'B495874927/', R + 'B528197662/', R + 'B536512012/', R + 'B536596064/', R + 'B536658706/', R + 'B537061047/', R + 'B538203903/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase only, served skewer by skewer; no English service is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-10-3 第V大栄ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.664054, 139.732467); GSI 東京都港区六本木四丁目10番 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B457838378/'],
    price_note: 'Omakase price from a September 2026 review (¥17,600 in April 2024); add-on skewers extra; 10% service.', last_checked: TODAY, items: [
      it('', '', 'Pyon omakase course (kushiage, side dishes, finish, dessert)', '¥19,800', 'Course', 'no', 'no', 'September 2026 review.', 'pyon_omakase'),
    ] }, {
    cuisine: 'カウンターで一本ずつ出すおまかせの串揚げ (食べログ)・Pyon おまかせコース19,800円 (2026年9月。2024年4月は17,600円)。追加の串と締めで約29,000円 (2026年9月)・2026年9〜10月のコース: シャインマスカットとクリームチーズと生ハム、Oita のステーキ椎茸、マスタードの Arita の牛タン、子持ち昆布と雲丹、パルミジャーノかペコリーノの銀杏、秋刀魚、すき焼き風の卵黄だれの松茸、甘海老、揚げ出汁の無花果、梅の鱧、栗の鹿ヒレ、ニラの鰆、子持ちこんにゃく、Tosa red beef のヒレ、大根のコンソメ・追加: バター醤油の帆立、明太チーズの鶏むね、ソーセージ、ベーコンモッツァレラ、雲丹のせ赤茄子・締め: カレーか、鱧と玉ねぎとハモンセラーノの温麺、バニラアイス・ワインと日本酒',
    neighborhood: '六本木4-10-3 第V大栄ビル1F。六本木駅6番出口 (大江戸線) から徒歩1分',
    gf_detail: 'グルテンフリー不可。すべての串を衣をつけて揚げ、締めはカレーか麺。',
    vegan_detail: 'ヴィーガン不可。魚介、肉、野菜を同じ油で揚げるおまかせで、バター、チーズ、出汁も使う。',
    notes: '[串揚げ・六本木、高級な串揚げのおまかせ] 六本木駅から1分、黒を基調にしたカウンター8席で、串揚げをコースで楽しむ店。季節の魚や野菜に贅沢な食材を合わせた串が16本ほど一本ずつ出る。シャインマスカットとクリームチーズと生ハム、雲丹のせ子持ち昆布、すき焼き風の卵黄だれの松茸、栗を添えた鹿など。最後は大根のコンソメ、カレーか温麺、アイス。店によればHasegawa Minoru のグループの研究所から生まれ、東京一の串揚げをめざす。2026年の客は揚げ方の軽さをほめ、左利きの客に合わせて串の置き方を変えた気配りに気づいた人も。おまかせは19,800円で追加の串は別。2026年9月の客は値段の割に印象に残る皿が少ないと感じた。完全予約制で夜は2部制、日月休み。',
  });
}

// ================================================================ 和味 大場
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13053372/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['18:00', '23:30']);
  put({
    id: 'tokyo_wami_oba_roppongi', name: '和味 大場 (Wami Oba)', category: 'OMNI',
    lat: 35.662572, lng: 139.732404, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. The signature negitoro yukke comes with a homemade sweet-and-spicy sauce, grilled fish with soy-based sides, and the evening menu has fried dishes and ebi mayo (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya; lunch sets are fish with miso soup and natto or a hot-spring egg.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 18:00–23:30 (last order 23:00); closed weekends and holidays (Tabelog). Lunch queues reach the stairs (June 2026). Payment: Tabelog says cards are accepted, but an October 2026 diner was told it is cash only — bring cash. 19 seats, counter and sofa; private hire up to 20. Smoking area. The only soft drink is oolong tea (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 6-1-5, 福島KDYビル B1, on the slope down from Roppongi crossing — 30 seconds from Roppongi Stn exit 3',
    cuisine: 'Fish izakaya with set-meal lunches (Tabelog; 2026 reviews) · weekday lunch, rice portions generous (smaller or extra-large on request): negitoro set ¥1,550, negitoro yukke with homemade sweet-and-spicy sauce, sesame and egg ¥1,500–1,550, toro-taku natto ¥1,400–1,450, salt-grilled mackerel ¥1,400, three-colour bowl, salmon and bonito when available; sets come with miso soup and natto or a hot-spring egg, and mackerel with a whole mentaiko (2026 reviews); prices rose by about ¥250 over two years, a regular notes (September 2026) · evenings: sashimi platters, egg dishes, natto omelette, ebi mayo with a whole shrimp, fried dishes · wide shochu list — barley, rice, sweet potato, buckwheat, shiso, brown sugar, awamori (Tabelog)',
    website: null, gmaps: gm('和味 大場 六本木6-1-5'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Roppongi, a basement fish lunch that office workers queue for] Down a flight of stairs half a minute from Roppongi Station, a 19-seat fish izakaya best known for its weekday lunch: a rich negitoro yukke with a homemade sweet-and-spicy sauce, sesame and a runny egg over a mountain of rice, or salt-grilled mackerel served with a whole mentaiko, from about ¥1,400. The queue reaches the stairs at noon, a regular has watched prices creep up by about ¥250 in two years, and the rice comes in sizes up to a towering \"manga\" portion. At night it turns into a regulars' izakaya with sashimi platters, egg dishes, ebi mayo and a long shochu list (the only soft drink is oolong tea). One October 2026 diner was told it takes cash only, though Tabelog lists cards. Weekdays only.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The Tabelog shop text describes a shop always busy with regulars and a chef whose care makes the food and drink good, with rare shochu at times. No one is named in the sources read.',
      philosophy: null, specialty: 'Negitoro yukke; salt-grilled mackerel lunch.',
      anecdotes: [
        { text: '"Topped with homemade sweet and spicy sauce, plenty of sesame, and a runny egg, it’s pure bliss when served over rice!" — July 2026, negitoro yukke ¥1,500.', source: R + 'B533004779/' },
        { text: '"Over the past two years, I think the prices have gone up by about JPY 250." — September 2026, a seventh-visit regular.', source: R + 'B501103809/' },
        { text: '"By the time we left, there was a line on the stairs." — June 2026, grilled mackerel ¥1,400.', source: R + 'B530028880/' },
      ],
      japanese_sources_summary: '食べログ: 和味 大場、港区六本木6-1-5 福島KDYビルB1、六本木駅3番出口から30秒、月〜金11:30〜14:00・18:00〜23:30 (L.O.23:00)、土日祝休み、19席、喫煙所、カード可 (2026年10月の口コミでは現金のみと)。店の紹介: いつも常連でにぎわう、料理人のこだわりの料理と酒、麦・米・芋・そば・しそ・黒糖の焼酎と泡盛、珍しい焼酎も。口コミ(2026年3月〜10月): ねぎとろユッケ1,500〜1,550円、ねぎとろ定食1,550円、トロたく納豆1,400〜1,450円、鯖の塩焼き1,400円、三色丼、ご飯の量が多い、2年で約250円の値上げ、昼は階段まで行列、夜は刺身の盛り合わせ、卵料理、海老マヨ、ソフトドリンクは烏龍茶だけ。',
      confidence: 'medium', sources: [TB, R + 'B501103809/', R + 'B523521729/', R + 'B524015361/', R + 'B530028880/', R + 'B531543373/', R + 'B533004779/', R + 'B535612318/', R + 'B536975551/', R + 'B537819294/', R + 'B537985861/'] },
    cultural_comfort: { level: 'japanese', note: 'Lunch sets chosen from photos on the menu (October 2026); no English service is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-1-5 福島KDYビル B1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662572, 139.732492), 3 m from Sushi Hajime (tokyo_sushi_hajime_roppongi, address_ja "東京都港区六本木6-1-5 グッドワークビル 1F", same street number), so offset 8 m west; GSI 東京都港区六本木六丁目1番 (lot, block centroid) 96m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B501103809/', R + 'B530028880/', R + 'B535612318/'],
    price_note: 'Lunch prices from 2026 reviews; prices have been rising.', last_checked: TODAY, items: [
      it('', '', 'Negitoro yukke set (homemade sweet-and-spicy sauce, sesame, egg)', '¥1,550', 'Lunch', 'ask', 'no', 'September 2026 review; ¥1,500 in July 2026.', 'negitoro_yukke'),
      it('', '', 'Toro-taku natto bowl', '¥1,450', 'Lunch', 'ask', 'no', 'October 2026 review.', 'torotaku_natto'),
      it('', '', 'Salt-grilled mackerel set', '¥1,400', 'Lunch', 'ask', 'no', 'June 2026 review.', 'saba_shioyaki'),
    ] }, {
    cuisine: '定食のランチがある魚の居酒屋 (食べログ、2026年の口コミ)・平日のランチ、ご飯は多め (少なめや大盛りも可): ねぎとろ定食1,550円、自家製の甘辛だれと胡麻と卵のねぎとろユッケ1,500〜1,550円、トロたく納豆1,400〜1,450円、鯖の塩焼き1,400円、三色丼、あれば鮭や鰹。定食には味噌汁と納豆か温泉卵が付き、鯖には明太子が丸ごと (2026年の口コミ)。2年で約250円値上がりしたと常連 (2026年9月)・夜: 刺身の盛り合わせ、卵料理、納豆オムレツ、海老が丸ごとの海老マヨ、揚げ物・麦、米、芋、そば、しそ、黒糖の焼酎と泡盛 (食べログ)',
    neighborhood: '六本木6-1-5 福島KDYビルB1、六本木の交差点から下る坂の途中。六本木駅3番出口から30秒',
    gf_detail: '要確認。グルテンフリーの説明はない。名物のねぎとろユッケは自家製の甘辛だれで、焼き魚には醤油系の小鉢、夜は揚げ物や海老マヨも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚の居酒屋で、ランチは魚に味噌汁と納豆か温泉卵が付く。',
    notes: '[居酒屋・六本木、会社員が並ぶ地下の魚ランチ] 六本木駅から30秒、階段を下りた先の19席の魚の居酒屋で、平日のランチが有名。自家製の甘辛だれ、胡麻、とろりとした卵をのせたねぎとろユッケを山盛りのご飯で、または明太子が丸ごと付く鯖の塩焼きで、1,400円ほどから。昼は階段まで行列ができ、常連は2年で約250円の値上がりを見てきた。ご飯の量は「manga」サイズまで選べる。夜は常連の居酒屋になり、刺身の盛り合わせ、卵料理、海老マヨ、豊富な焼酎 (ソフトドリンクは烏龍茶だけ)。2026年10月の客は現金のみと言われたが、食べログにはカード可とある。平日のみ。',
  });
}

// ================================================================ 麺匠 竹虎 六本木店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13116548/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.menshou-taketora.com';
  const W = day(['11:00', '09:00']); const S = day(['11:00', '05:30']);
  put({
    id: 'tokyo_mensho_taketora_roppongi', name: '麺匠 竹虎 六本木店 (Mensho Taketora Roppongi)', category: 'OMNI',
    lat: 35.662518, lng: 139.734175, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen and tsukemen noodles; the broths are seasoned with soy-based tare.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and seafood broths with back fat, chashu and egg.',
    hours_raw: 'Mon–Sat 11:00 until 09:00 the next morning (last order 08:30); Sun 11:00–05:30 (last order 05:00); open all year (Tabelog). A free topping at lunch (October 2026). Order on a tablet and pay at the register after the meal (October 2026). Queues of 8 groups on a Friday night (October 2026). 49 seats: 7 at the counter, tables in private rooms for 2, 4 or 6. Non-smoking. Cards, IC/e-money and PayPay. Children welcome. Opened 29 September 2010 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 3-14-14, 六本木314ビル 1F, on Gaien-higashi-dori — 2 min from Roppongi crossing, 3 min from exit A5 (Oedo line)',
    cuisine: 'Ramen and tsukemen in private rooms, with side dishes and drinks (Tabelog; official site) · Ura Taketora ramen (rich soy-tonkotsu under back fat, thick noodles, thick chashu and menma) ¥1,280, large with egg ¥1,430 (July–October 2026) · Ura Taketora tsukemen (spicy available, spice on the side) ¥1,280 · yuzu seafood tonkotsu tsukemen ¥1,280, all toppings +¥600 (October 2026) · dashi shoyu ramen ¥1,180 (October 2026); a lighter shoyu ramen with aji dashi (November 2026) · rich shrimp seafood ramen ¥1,280 (August 2026) · tantanmen · chashu rice ¥450 · free fried-noodle snack and collagen balls (October 2026)',
    website: SITE, gmaps: gm('麺匠 竹虎 六本木店'), menu_url: TB + 'dtlmenu/',
    notes: "[Ramen · Roppongi, ramen in private rooms till 9 am] A big ramen dining room on Gaien-higashi-dori, two minutes from Roppongi crossing, open from 11 am right through to 9 the next morning six days a week, with a counter and private rooms for two to six. The favourite is the Ura Taketora ramen: a rich, creamy soy-tonkotsu under a layer of back fat, garlicky, with thick, slightly curly noodles, thick tender chashu and extra-thick menma (¥1,280 in October 2026); the Ura Taketora tsukemen and a yuzu seafood-tonkotsu tsukemen are the other draws, with lighter shoyu bowls too. Late-night crowds after drinking fill it — eight groups waited on a Friday at 8 pm — and lunch adds a free topping. Opinions vary: a 13-visit regular found one shrimp ramen far too salty, and one diner found the Ura broth bland until stirred. Part of a four-shop group whose head shop is in Kabukicho.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of 麺匠 竹虎 (head shop in Shinjuku Kabukicho per the Tabelog shop text)',
      background: 'Opened 29 September 2010 (Tabelog). The official site\'s 2025 year-end notice lists 本店, 新宿店, 六本木店 and 麺匠竹虎沖縄新都心店.',
      philosophy: 'A ramen dining room for any occasion, with rich and light bowls, side dishes and drinks, and private rooms (Tabelog shop text).', specialty: 'Ura Taketora ramen and tsukemen.',
      anecdotes: [
        { text: '"The broth, impressively covered with a layer of back fat, has a rich and robust flavor that matches its appearance." — July 2026, Ura Taketora ramen, large, ¥1,430.', source: R + 'B532530944/' },
        { text: '"The aroma of garlic and the umami of pork bone! It was thick and incredibly delicious! The noodles were thick and slightly curly." — October 2026, ¥1,280.', source: R + 'B536633184/' },
        { text: '"It was extremely salty… I should have just gone with the safe choice." — August 2026, rich shrimp seafood ramen, a regular\'s 12th visit.', source: R + 'B460095672/' },
      ],
      japanese_sources_summary: '公式サイト (menshou-taketora.com): 個室で食べるラーメン、つけ麺、麺匠「竹虎」、店舗は本店、新宿店、六本木店、沖縄新都心店 (2025年の年末年始の案内)。食べログ: 麺匠 竹虎 六本木店、港区六本木3-14-14 六本木314ビル1F、大江戸線六本木駅A5出口から徒歩3分、月〜土11:00〜翌9:00 (L.O.8:30)、日11:00〜翌5:30、年中無休、49席 (カウンター7、テーブル42)、個室 (2・4・6名)、禁煙、カード・電子マネー・PayPay可、2010年9月29日オープン、本店は新宿の Kabukicho。口コミ(2025年3月〜2026年11月): 裏竹虎ラーメン1,280円 (背脂、にんにく、太いちぢれ麺、厚いチャーシュー)、裏竹虎つけ麺1,280円、柚子魚介豚骨つけ麺1,280円、出汁の醤油ラーメン1,180円、海老の濃厚魚介ラーメンは塩辛すぎたという声、チャーシュー丼450円、ランチはトッピング無料、金曜夜は8組待ち。',
      confidence: 'medium', sources: [TB, SITE, R + 'B460095672/', R + 'B524625588/', R + 'B532530944/', R + 'B536633184/', R + 'B536959291/', R + 'B537056171/', R + 'B537613077/', R + 'B537963695/', R + 'B538124699/', R + 'B538498494/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering; the official site has English and Traditional Chinese pages.' },
    ramen: {
      broth_base: ['tonkotsu', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['back fat'], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: 'wavy', hydration: null, handmade: null, notes: 'Thick, slightly curly, chewy noodles in the Ura Taketora ramen (July and October 2026); glossy thick noodles for the tsukemen (October 2026).' },
      regional_style: [], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: '裏竹虎ラーメン (Ura Taketora ramen) — ¥1,280 in October 2026; large with seasoned egg ¥1,430 in July 2026.',
      chashu: 'Thick-cut, grilled pork chashu that falls apart (July and October 2026); free extra chashu at lunch.',
      notable_toppings: ['back fat', 'thick menma', 'seasoned egg', 'nori', 'green onion'],
      gf: { status: 'no', note: 'Wheat noodles; soy-based tare.' },
      vegan: { status: 'no', note: 'Pork-bone broth with back fat; seafood broths.' },
      pantheon: 'A late-night Roppongi tonkotsu-shoyu bowl blanketed in back fat, with thick curly noodles and slab chashu, eaten in a private room at almost any hour.',
      profile: { richness: 4, oiliness: 4, clarity: 1, tare_strength: 3, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B532530944/', '"The broth, impressively covered with a layer of back fat, has a rich and robust flavor" (July 2026); "rich, creamy texture… thick and incredibly delicious" (' + R + 'B536633184/, October 2026); "rich yet not overly heavy" (' + R + 'B537963695/).'],
        oiliness: [R + 'B532530944/', '"Impressively covered with a layer of back fat" (July 2026).'],
        clarity: [R + 'B524625588/', '"A creamy white broth" (June 2026); "It had a rich, creamy texture" (' + R + 'B536633184/, October 2026).'],
        tare_strength: [R + 'B536959291/', '"After mixing it well, it started to resemble a soy sauce tonkotsu" — bland at first sip (October 2026); a regular found the shrimp seafood ramen "extremely salty" but the dashi shoyu ramen "fine" (' + R + 'B460095672/); placed mid-scale from these mixed reports.'],
        noodle_firmness: [R + 'B536633184/', '"The noodles were thick and slightly curly. They had great texture!" (October 2026); "The chewy thick noodles… providing a satisfying bite" (' + R + 'B532530944/).'],
        aroma_punch: [R + 'B536633184/', '"The aroma of garlic and the umami of pork bone!" (October 2026).'],
      },
    },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-14-14 六本木314ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.662518, 139.734175); GSI 東京都港区六本木三丁目14番 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536633184/', R + 'B532530944/', R + 'B460095672/'],
    price_note: 'Prices from July–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('裏竹虎ラーメン', '', 'Ura Taketora ramen (soy-tonkotsu with back fat)', '¥1,280', 'Ramen', 'no', 'no', 'October 2026 review; large with egg ¥1,430.', 'ura_ramen'),
      it('裏竹虎つけ麺', '', 'Ura Taketora tsukemen (spicy option)', '¥1,280', 'Tsukemen', 'no', 'no', 'June and October 2026 reviews.', 'ura_tsukemen'),
      it('', '', 'Yuzu seafood tonkotsu tsukemen', '¥1,280', 'Tsukemen', 'no', 'no', 'October 2026 review; all toppings +¥600.', 'yuzu_tsukemen'),
      it('', '', 'Dashi shoyu ramen', '¥1,180', 'Ramen', 'no', 'no', 'October 2026 review.', 'shoyu_ramen'),
      it('', '', 'Chashu rice', '¥450', 'Sides', 'no', 'no', 'October 2026 review.', 'chashu_rice'),
    ] }, {
    cuisine: '個室で食べるラーメンとつけ麺、一品料理とお酒も (食べログ、公式サイト)・裏竹虎ラーメン (背脂の下に濃厚な醤油豚骨、太麺、厚いチャーシューとメンマ) 1,280円、大盛り味玉付き1,430円 (2026年7〜10月)・裏竹虎つけ麺 (辛口あり、辛みは別皿) 1,280円・柚子魚介豚骨つけ麺1,280円、全部のせ+600円 (2026年10月)・出汁の醤油ラーメン1,180円 (2026年10月)、aji dashi のあっさり醤油 (2026年11月)・海老の濃厚魚介ラーメン1,280円 (2026年8月)・担々麺・チャーシュー丼450円・無料の揚げ麺のおつまみとコラーゲンボール (2026年10月)',
    neighborhood: '六本木3-14-14 六本木314ビル1F、Gaien-higashi-dori 沿い。六本木の交差点から2分、大江戸線A5出口から3分',
    gf_detail: 'グルテンフリー不可。小麦のラーメンとつけ麺で、スープは醤油系のたれ。',
    vegan_detail: 'ヴィーガン不可。背脂の豚骨スープや魚介スープ、チャーシュー、卵。',
    notes: '[ラーメン・六本木、朝9時まで個室で食べるラーメン] 六本木の交差点から2分、Gaien-higashi-dori 沿いの大きなラーメン店で、週6日は朝11時から翌朝9時まで開き、カウンターと2〜6人の個室がある。人気は裏竹虎ラーメンで、背脂の層の下に濃厚でクリーミーな醤油豚骨、にんにくが香り、太いちぢれ麺、厚く柔らかなチャーシューと極太のメンマ (2026年10月は1,280円)。裏竹虎つけ麺や柚子魚介豚骨つけ麺も人気で、あっさりした醤油もある。飲んだあとの客で深夜も混み、金曜の夜8時に8組待ち。昼はトッピングが一つ無料。評価は分かれ、13回通う常連は海老のラーメンが塩辛すぎたと書き、裏のスープは混ぜるまで味が薄いと感じた客も。本店が Kabukicho にある4店舗のグループ。',
  });
}

// ================================================================ 三宅輝
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13247307/'; const R = TB + 'dtlrvwlst/';
  const E = day(['17:00', '22:30']); const S = day(['12:00', '14:00'], ['17:00', '22:30']);
  put({
    id: 'tokyo_miyake_akira_roppongi', name: '三宅輝 (Miyake Akira)', category: 'OMNI',
    lat: 35.663261, lng: 139.734493, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The course is confirmed for preferences at the start (October 2026), but nothing is called gluten-free; it includes udon, eel glazed in a soy-based tare and dashi dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kappo course of eel, caviar, sea urchin, soft-shelled turtle and wagyu.',
    hours_raw: 'Mon–Fri 17:00–22:30 (last entry 20:00, last order 22:00); Sat also lunch 12:00–14:00; closed Sundays, public holidays, New Year, Obon and Golden Week (Tabelog). Reservation only. 10% service charge. 14 seats: 8 at the counter and a private room for up to 6. Non-smoking. Cards; no e-money or QR. English menu. Smart casual. Opened 1 July 2020 (Tabelog). The December special course has counter seatings at 17:00 and 20:00.',
    hours: { 0: E, 1: E, 2: E, 3: E, 4: E, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-8-12, 六本木JTビル 1F, on a back street — 5 min from Roppongi Stn (Hibiya line)',
    cuisine: 'Kappo omakase built round eel and the chef\'s own caviar, on Mino-ware dishes (Tabelog shop text) · seasonal omakase, 13 items, ¥36,300; short course of 7 signatures ¥18,150; December special with tiger fugu, Matsuba crab and truffle ¥48,400 (Tabelog, tax included) · eel aged over ten days and grilled "jiyaki" style in a "Sennin" tare handed down from a long-established shop for 130 years, mainly Miyazaki "Washou Unagi"; the finale compares wagyu-fed eel, aged shirayaki and kabayaki, with sansho-simmered eel and donabe rice (2026 reviews) · "Akira caviar", the shop\'s low-salt caviar (2.8% salt, from Miyazaki, per October 2026 reviewers) · "Matsukaze" udon with truffle, which the shop says originated here · autumn 2026: hyotei egg with caviar, grilled nanban, soft-shelled turtle with matsutake, straw-seared bonito, Rishiri-kombu-fed sea urchin with yuba and shark fin, ayu, Obanazawa beef, Shine Muscat, soba ice cream · sake pairings',
    website: null, gmaps: gm('三宅輝 六本木3-8-12'), menu_url: TB + 'dtlmenu/',
    notes: "[Kappo · Roppongi, eel and house caviar from a Japanese-cuisine ambassador] A modern kappo counter on a Roppongi back street, Michelin-selected (2025, per the shop), where chef Teru Miyake — named a Japanese Cuisine Goodwill Ambassador by the agriculture ministry, the shop says — builds a 13-dish omakase round two signatures: the house \"Akira caviar\", lightly salted, spooned over hyotei egg to start, and eel aged more than ten days and grilled over charcoal with a 130-year-old tare, served at the end as a tasting of shirayaki, kabayaki and sansho-simmered eel over donabe rice. In between come soft-shelled turtle with matsutake, straw-seared bonito, sea urchin raised on Rishiri kombu, and the shop's truffle udon. Dinner is ¥36,300 (a 7-dish short course is ¥18,150); diners call it the place for important guests, and one 2026 diner noted how young the chef is. Saturday lunch too.",
    chef_bio: { chef_name: 'Teru Miyake (as the Tabelog shop text writes the chef\'s name; the listing title reads the shop name "Miyake Akira")', roles: ['Chef (Tabelog shop text)'], origin: null,
      background: 'Per the Tabelog shop text: appointed a Japanese Cuisine Goodwill Ambassador ("Ambassador of Japanese Cuisine") by the Ministry of Agriculture, Forestry and Fisheries; described as a young talent recognised by mentor Tadamichi Ota, a medal-winning chef; the restaurant was selected in the Michelin Guide Tokyo 2025 (an October 2026 reviewer says 2024 and 2025). A September 2026 diner remarks on how young the chef is. Opened 1 July 2020 (Tabelog). The sources read do not say who owns it.',
      philosophy: 'Dishes on Mino ware chosen to reflect the chef\'s personality; eel grilled in a sauce kept going for 130 years (Tabelog shop text).', specialty: 'Jiyaki eel in Sennin tare; Akira caviar; truffle udon.',
      anecdotes: [
        { text: '"We started our meal by seeing the eel swimming in a box. The first dish was an original caviar from Miyake Akira… It had a salt concentration of about 2.5%." — July 2026.', source: R + 'B531933125/' },
        { text: '"They offer a tasting of three different types of eel as a finale!" — September 2026, ¥36,300 course.', source: R + 'B534919653/' },
        { text: '"Despite being a young chef, the dishes are incredibly delicate—truly impressive!" — September 2026.', source: R + 'B535620338/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 三宅輝、港区六本木3-8-12 六本木JTビル1F、日比谷線六本木駅から徒歩5分、月〜金17:00〜22:30 (最終入店20:00、L.O.22:00)、土12:00〜14:00も、日祝・年末年始・お盆・GW休み、完全予約制、サービス料10%、14席 (カウンター8、個室6)、禁煙、カード可、英語メニュー、スマートカジュアル、2020年7月1日オープン。店の紹介: 農林水産省の日本食普及の親善大使の Teru Miyake、師匠の Tadamichi Ota、Mino ware の器、ミシュランガイド東京2025、10日以上熟成の鰻を130年継ぎ足しのたれ (Sennin no tare) で地焼き、Miyazaki のブランド鰻、オリジナルのキャビア、発祥の Matsukouro うどん。コース: 季節のおまかせ13品36,300円、ショートコース7品18,150円、12月限定48,400円。口コミ(2024年4月〜2026年10月): 塩分2.8%のキャビア、すっぽんと松茸、藁焼きの鰹、Rishiri の昆布で育った雲丹、トリュフのうどん、鰻3種の食べ比べ、若い料理人、接待向き。',
      confidence: 'medium', sources: [TB, R + 'B456986760/', R + 'B482631584/', R + 'B531933125/', R + 'B531937572/', R + 'B532381158/', R + 'B534919653/', R + 'B535165578/', R + 'B535620338/', R + 'B537405510/', R + 'B538008396/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); omakase, preferences confirmed at the start (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-8-12 六本木JTビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with December 2026 course; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663261, 139.734493); GSI 東京都港区六本木三丁目8番 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (tax included; read November 2026), plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase with Akira caviar and Sennin-tare grilled eel, 13 items', '¥36,300', 'Course', 'ask', 'no', 'Tabelog "most popular".', 'omakase'),
      it('', '', 'Seasonal omakase short course, 7 items', '¥18,150', 'Course', 'ask', 'no', 'Tabelog.', 'short_course'),
      it('', '', 'December special course (tiger fugu, Matsuba crab, truffle, caviar, sea urchin)', '¥48,400', 'Course', 'ask', 'no', 'Tabelog.', 'december_course'),
    ] }, {
    cuisine: '鰻と自家製キャビアを軸にした割烹のおまかせ、器は Mino ware (食べログの店の紹介)・季節のおまかせ13品36,300円、名物を集めた7品のショートコース18,150円、とらふぐ、Matsuba の蟹、トリュフの12月限定コース48,400円 (食べログ、税込み)・10日以上熟成させた鰻を、老舗から130年継ぎ足してきたたれ (Sennin no tare) で地焼きに。おもに Miyazaki のブランド鰻 (Washou Unagi)。締めは和牛を食べさせた鰻、熟成の白焼き、蒲焼き、山椒煮の食べ比べと土鍋ご飯 (2026年の口コミ)・自家製の低塩の Akira caviar(塩分2.8%、Miyazaki 産と2026年10月の客)・店が発祥という Matsukouro うどん (トリュフ)・2026年秋: Hyotei 玉子とキャビア、焼き南蛮、すっぽんと松茸、藁焼きの鰹、Rishiri の昆布で育った雲丹と湯葉とふかひれ、鮎、Obanazawa の牛、シャインマスカット、蕎麦のアイス・日本酒のペアリング',
    neighborhood: '六本木3-8-12 六本木JTビル1F、裏通り。六本木駅 (日比谷線) から徒歩5分',
    gf_detail: '要確認。最初に好みを確認してくれるが (2026年10月)、グルテンフリーの説明はない。うどん、醤油系のたれの鰻、出汁の料理を含む。',
    vegan_detail: 'ヴィーガン不可。鰻、キャビア、雲丹、すっぽん、和牛の割烹のコース。',
    notes: '[割烹・六本木、日本食親善大使の鰻と自家製キャビア] 六本木の裏通りのモダンな割烹のカウンター。店によればミシュランガイド東京2025に選ばれ、料理人の Teru Miyake は農林水産省の日本食普及の親善大使。13品のおまかせは二つの名物が軸で、最初にHyotei 玉子にのせる塩分控えめの自家製の Akira caviar、最後に10日以上熟成させ、130年継ぎ足しのたれで炭火で焼く鰻を白焼き、蒲焼き、山椒煮の食べ比べにして土鍋ご飯で。その間にすっぽんと松茸、藁焼きの鰹、Rishiri の昆布で育った雲丹、店の名物のトリュフのうどん。夜は36,300円 (7品のショートコースは18,150円)。口コミでは大切な客を招く店との声が多く、2026年の客は料理人の若さに驚いた。土曜は昼も営業。',
  });
}

save();
