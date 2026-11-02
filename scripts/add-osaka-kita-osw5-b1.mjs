// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 1.
//   + 鮨 五天五 OSAKA Sushi Gotengo OSAKA (Edo-mae sushi courses behind Shibata, opened September 2025)
//   + いしもん 本店 Ishimon Honten (seafood-and-sake counter in the basement of 大阪駅前第一ビル since 2013)
//   + 梅田かに食堂 Umeda Kani Shokudo (all-you-can-eat crab, shabu-shabu and sushi on a 4th floor off Higashi-dori)
//   + 野口 グラングリーン大阪 Noguchi Grand Green Osaka (Osaka branch of 京天神野口, Kyoto; Tabelog Award 2026 Bronze)
//   - skipped ディップガーデン テラス KITTE大阪店 27143438: chain (listing remarks list about 20 shops of Dip Mahal, Mother India,
//     Dip Palace, Dip Garden, Mother's Kitchen and Sawadee; operator site dipway.co.jp).
//   Chain check: Gotengo: one shop (Tabelog; web search 2026-11-01 finds no other 五天五); operator 株式会社WILL (will-food.com
//   shows only the company name). Ishimon: three shops of ishimon LLC (this one, ２ビルのいしもん and すし処 いしもん; Tabelog
//   remarks and sakanaya-ishimon.com), a small local group. Umeda Kani Shokudo: no sister shop named on Tabelog; its invoice
//   number T2120001214766 is registered to 株式会社ファイブディアライフ (NTA invoice register, read 2026-11-01), and a web search
//   finds no other shop of that company. Noguchi: one of three restaurants of 京天神野口 (京天神野口, のぐち継, 野口 グラングリーン大阪;
//   kyotenjin-noguchi.com/information). None is in data/osaka.json (grep by id, name and address, 2026-11-01).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27143438', 'chain: Dipway group (Dip Mahal, Mother India, Dip Palace, Dip Garden, Mother\'s Kitchen, Sawadee), about 20 shops listed in the Tabelog remarks');

// ================================================================ 鮨 五天五 OSAKA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27151290/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:30']); const E = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_sushi_gotengo_umeda', name: '鮨 五天五 OSAKA (Sushi Gotengo OSAKA)', category: 'OMNI',
    lat: 34.705444, lng: 135.495973, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Nigiri courses (soy sauce, the usual sushi seasoning, generally contains wheat), with a simmered starter, anago and red miso soup in every course; the dessert is milk gelato with kinako and black syrup. The listing invites guests to state allergies when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses of fish and shellfish nigiri with a seafood starter, red miso soup and a milk gelato dessert.',
    hours_raw: 'Mon–Fri and the day before a holiday 17:00–23:30; Sat, Sun and holidays 12:00–15:00 and 17:00–22:00; closed the day after a public holiday (Tabelog). Reservations accepted, online when the phone line is closed (Tabelog). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog). No service charge (Tabelog\'s original text: なし). 20 seats: 8 at the counter and 12 at tables, whole-shop hire up to 20; non-smoking; children welcome; menu in English and Chinese (Tabelog). Almost full on a weekday at 20:00 (October 2026). Opened 1 September 2025 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '芝田2-2-8, ground floor of 幸福相互ビル, near the Grand Front North Building and next to the WINS Umeda B Building (Tabelog) — 3 min from JR Osaka Stn',
    cuisine: 'Edo-mae sushi courses (Tabelog, tax included) · 10 nigiri with a starter, red miso soup and dessert ¥7,700 · 15 nigiri course with starters, red miso soup and dessert ¥11,000 · "Kiwami" course of starters, three kinds of sashimi, a grilled dish and 10 nigiri ¥16,500 · an October 2026 15-piece course: simmered seafood and root vegetables, wild flounder with engawa, aori squid, wild sea bream, wild striped jack, domestic salmon, bluefin akami and chutoro, bonito, sawara, shime saba, octopus, kombu-cured botan shrimp, sardine, scallop, anago with Arima sansho · the scallop comes seared at the end (October 2026) · aged tuna (October 2026) · pickled ginger cut in cubes (October 2026) · dessert: Hokkaido milk gelato with homemade black syrup and kinako · sake from around Japan, some rare, plus beer and shochu (Tabelog)',
    website: null, gmaps: gm('鮨 五天五 OSAKA 芝田'), menu_url: null,
    notes: "[Sushi · Umeda, a back-street counter] A small sushi restaurant on a back street north of Umeda, near the Grand Front North Building, opened in September 2025; the shop says its fish is chosen with \"years of experience running a high-end sushi restaurant\" (Tabelog). Eight counter seats look onto fresh wasabi and the chef's knife work, with three tables for groups. The courses are fixed and fair for the station area: ten nigiri with a starter, red miso soup and dessert for ¥7,700, or fifteen for ¥11,000 (October 2026), each piece finished at the counter, \"a different experience than simply enjoying sushi with soy sauce\" (October 2026). Diners single out the wild flounder, the bonito, the shime saba and the chutoro, and the dessert of Hokkaido milk gelato with black syrup and kinako. The chef explains each piece and talks with the counter. One October 2026 diner found most of the room were overseas visitors. Book ahead; weekend lunch too.",
    chef_bio: { chef_name: null, roles: ['Sushi chef (unnamed) and counter staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: the seafood is chosen "with years of experience running a high-end sushi restaurant", arrives from the market every morning and is served the same day, with the aim of "bringing the deliciousness of Japan to the world"; the rice is seasoned with a house blend of vinegars. Opened 1 September 2025. The operator named on the listing\'s website link is 株式会社WILL (will-food.com, read 2026-11-01, shows only the company name).', philosophy: '"Sushi enjoyed with seasonal vinegars in perfectly seasoned rice" (Tabelog).', specialty: '10- and 15-nigiri courses; milk gelato with black syrup and kinako.',
      anecdotes: [
        { text: '"Sitting at the counter, the chef explained each dish as it was served. … The chef was friendly and made the experience enjoyable." — October 2026, a lunch omakase.', source: R + 'B537809543/' },
        { text: '"The gari (pickled ginger) was in cube form, which was quite unique, and I ended up having quite a bit of it." — October 2026.', source: R + 'B538328047/' },
        { text: '"The chef was friendly and engaged in conversation, and the sushi was served with impressive speed." — October 2026, the 15-piece course for JPY 11,000.', source: R + 'B538388765/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨 五天五 OSAKA、寿司・日本料理・海鮮、大阪市北区芝田2-2-8 幸福相互ビル 1F、JR 大阪駅から徒歩3分、Grand Front North Building の近く、WINS Umeda B Building のとなり、月〜金・祝前日17:00〜23:30、土・日・祝12:00〜15:00、17:00〜22:00、祝後日休み、予約可、カード・PayPay 可、電子マネー不可、サービス料なし、20席 (カウンター8、テーブル12)、貸切20名まで、禁煙、子ども可、英語と中国語のメニュー、2025年9月1日オープン。コース (税込): 握り10貫と赤だし、デザート7,700円、握り15貫のコース11,000円、前菜、刺身3種、焼き物、握り10貫の「極」コース16,500円。店の紹介: 季節の酢を合わせたシャリ、高級寿司店を営んできた経験で選ぶ魚、毎朝市場から仕入れてその日に出す、全国の地酒。口コミ(2026年10月): 梅田の路地裏、ヒラメとエンガワ、アオリイカ、シマアジ、国産サーモン、本マグロの赤身と中トロ、カツオ、サワラ、しめサバ、昆布じめのボタンエビ、Arima の山椒の穴子、最後のホタテはあぶり、熟成マグロ、角切りのガリ、Hokkaido のミルクジェラートに自家製の黒蜜ときなこ、カウンターで目の前で握る、気さくな大将、海外からの客が多い日も。',
      confidence: 'medium', sources: [TB, R + 'B537045720/', R + 'B537451439/', R + 'B537795355/', R + 'B537809543/', R + 'B537926916/', R + 'B538139294/', R + 'B538307919/', R + 'B538315794/', R + 'B538328047/', R + 'B538388765/'] },
    cultural_comfort: { level: 'english', note: 'Menu in English, Traditional and Simplified Chinese (Tabelog); fixed courses; many overseas visitors on an October 2026 night.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog course notes: "If you have any dislikes or allergies, please feel free to let us know."'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区芝田2-2-8 幸福相互ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区芝田二丁目2番8号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537451439/', R + 'B537795355/'],
    price_note: 'Course prices from the Tabelog listing (tax included); October 2026 reviews match ¥7,700 and ¥11,000.', last_checked: TODAY, items: [
      it('', '', '10 nigiri with a starter, red miso soup and dessert', '¥7,700', 'Courses', 'ask', 'no', 'Tabelog; October 2026.', 'nigiri_10'),
      it('', '', '15 nigiri course with starters, red miso soup and dessert', '¥11,000', 'Courses', 'ask', 'no', 'Tabelog; October 2026.', 'nigiri_15'),
      it('', '', '"Kiwami" course: starters, three sashimi, a grilled dish, 10 nigiri', '¥16,500', 'Courses', 'ask', 'no', 'Tabelog.', 'kiwami_course'),
      it('', '', 'Milk gelato with black syrup and kinako (course dessert)', '', 'Dessert', 'ask', 'no', 'October 2026.', 'milk_gelato'),
    ] }, {
    cuisine: '江戸前の寿司のコース (食べログ、税込)・握り10貫に前菜、赤だし、デザート7,700円・前菜、赤だし、デザートつきの握り15貫のコース11,000円・前菜、刺身3種、焼き物、握り10貫の「極」コース16,500円・2026年10月の15貫のコース: 魚介と根菜の炊き合わせ、天然ヒラメとエンガワ、アオリイカ、天然の鯛、天然のシマアジ、国産サーモン、本マグロの赤身と中トロ、カツオ、サワラ、しめサバ、タコ、昆布じめのボタンエビ、イワシ、ホタテ、Arima の山椒の穴子・最後のホタテはあぶり (2026年10月)・熟成マグロ (2026年10月)・角切りのガリ (2026年10月)・デザート: Hokkaido のミルクジェラートに自家製の黒蜜ときなこ・全国の地酒、珍しいものも、ビールと焼酎も (食べログ)',
    neighborhood: '芝田2-2-8、幸福相互ビルの1階、Grand Front North Building の近く、WINS Umeda B Building のとなり (食べログ)。JR 大阪駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。握りのコースで (寿司にふつう使う醤油は、たいてい小麦を含む)、どのコースにも炊き合わせ、穴子、赤だしがつく。デザートはきなこと黒蜜のミルクジェラート。食べログには、アレルギーは予約時に伝えるようにとある。',
    vegan_detail: 'ヴィーガンではありません。魚介の握りのコースで、魚介の前菜、赤だし、ミルクジェラートのデザートがつく。',
    notes: '[寿司・梅田、芝田の路地のカウンター] 梅田の北、Grand Front North Building の近くの裏通りにある小さな寿司店で、2025年9月に開いた。高級寿司店を営んできた経験で魚を選ぶという (食べログ)。カウンター8席の前には本わさびが置かれ、目の前で切って握る。グループ向けのテーブルが3つ。コースは決まっていて、駅の近くにしては手ごろ: 握り10貫に前菜、赤だし、デザートで7,700円、15貫なら11,000円 (2026年10月)。ひとつずつカウンターで仕上げてくれて、醤油をつけて食べるだけの寿司とはちがう体験だという声も (2026年10月)。天然のヒラメ、カツオ、しめサバ、中トロが好評で、デザートの Hokkaido のミルクジェラートに黒蜜ときなこも人気。大将はひとつずつ説明してくれて、カウンターの客と話もはずむ。2026年10月のある夜は、客のほとんどが海外からだったそう。予約がおすすめ。週末は昼も営業。',
  });
}

// ================================================================ いしもん 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27071970/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.sakanaya-ishimon.com/brands/ishimon/shops/honten/';
  const MT = day(['17:00', '23:30']);
  put({
    id: 'osaka_ishimon_honten_umeda', name: 'いしもん 本店 (Ishimon Honten)', category: 'OMNI',
    lat: 34.698576, lng: 135.496708, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi comes with soy sauce, and tempura, eel spring rolls, a braised-beef rice bowl and soy-grilled fugu milt are on the menu; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; the vegetable obanzai include eggplant soaked in broth, which is usually dashi.',
    hours_raw: 'Mon–Thu 17:00–23:30 (last order 22:30); Fri 17:00–24:00 (last order 23:00); Sat and holidays 16:00–23:00 (last order 22:00); Sun 15:00–22:00 (last order 21:00); closing day: none (official site), "not fixed" (Tabelog); the official site gives the same hours. Reservations accepted; two-hour limit at busy times; for a table or a solo visit, phone the shop (one hour for solo diners); seat-only bookings of 60 minutes Monday to Thursday, with no seat charge (Tabelog). Often full: almost full at 17:00 on a holiday weekend and fully booked on a Wednesday night (October 2026). Cards (VISA, Master, JCB) and e-money; no QR payment (Tabelog). 13 seats: a 12-seat counter and two tables for two; e-cigarettes only (Tabelog). Takeaway sushi (official site). Opened 2 April 2013 (Tabelog).',
    hours: { 0: MT, 1: MT, 2: MT, 3: MT, 4: day(['17:00', '00:00']), 5: day(['16:00', '23:00']), 6: day(['15:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Umeda 1-3-1, B2F of Osaka Station Front Building No. 1 (大阪駅前第一ビル) — 1 min from Kitashinchi Stn (JR Tozai Line) and Nishi-Umeda Stn',
    cuisine: 'Casual kappo of fresh fish, obanzai and tempura with sake (official site) · seasonal board (official site, tax included, read November 2026): seven-kind omakase sashimi ¥1,200, new-season sanma salt-grilled or as sashimi ¥950, ma-fugu milt as tempura or soy-grilled ¥980, live hamo blanched, seared or as tempura ¥1,500, salt-seared tataki of autumn bonito ¥950 · takeaway nigiri, 15 pieces ¥2,980 or 20 pieces ¥3,980 · about 20 sakes, Dassai and Kameizumi among them (Tabelog) · dishes named in October 2026 reviews: the sashimi assortment (with tuna; kue on one night), salt-dressed bonito sashimi, Bungo beef tataki topped with sea urchin and salmon roe, crab miso with cream cheese, uzaku, water eggplant, lotus root with sansho, sesame tofu, fried eggplant soaked in broth, eel spring rolls, shrimp tempura, a small braised-beef rice bowl, grilled sanma · duck (August 2026) · two diners ate and drank for about ¥7,000 (October 2026)',
    website: SITE, gmaps: gm('いしもん 本店 大阪駅前第一ビル'), menu_url: SITE,
    notes: "[Izakaya · Umeda, a fish counter under the station buildings] A narrow counter two floors down in Osaka Station Front Building No. 1, a minute from Kitashinchi Station, open since 2013 and the main shop (本店) of the small Ishimon group, with a second shop in Building No. 2 and a sushi shop. The official site calls it a casual kappo of fresh fish, obanzai and tempura at fair prices, with sake chosen to match. The order everyone makes is the sashimi assortment, thick-cut and fresh, with kue in it on one October 2026 night; around it go seasonal fish like salt-grilled sanma or live hamo, and small plates: uzaku, water eggplant, sesame tofu, fried eggplant in broth, eel spring rolls, Bungo beef tataki under sea urchin and salmon roe. One October 2026 diner liked the side dishes more than the fish. Two people eat and drink for about ¥7,000. It fills from opening, so book, and expect a time limit; solo diners get an hour.",
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff of ishimon LLC (unnamed)'], origin: null, background: 'Per the official site (sakanaya-ishimon.com, company name ishimon LLC; read 2026-11-01): 酒菜や いしもん (the title gives the reading サカナヤ) 本店, a 大衆割烹 serving fresh fish, obanzai and tempura at fair prices with sake chosen to go with the food, each dish "made with care, picturing the customer\'s smile". The group\'s brands are いしもん and すし処 いしもん; the Tabelog remarks list the sister shops ２ビルのいしもん ("Ishimon in 2 Building" on Tabelog, in Osaka Station Front Building No. 2) and すし処 いしもん. Opened 2 April 2013 (Tabelog).', philosophy: '"Please enjoy the uncompromising real taste" (妥協のない本物の味をぜひご堪能くださいませ; official site).', specialty: 'Omakase sashimi assortment; obanzai; seasonal fish.',
      anecdotes: [
        { text: '"It was only 5 PM, but the place was almost full. I managed to get a table for just one hour!" — October 2026, a holiday weekend.', source: R + 'B537509592/' },
        { text: '"I was seated at the counter, separated from the person next to me by a tape line, which felt a bit awkward when I accidentally crossed it." — October 2026, a Friday; the sashimi assortment included kue.', source: R + 'B537945607/' },
        { text: '"The Bungo beef tataki was lavishly topped with sea urchin and salmon roe." — October 2026.', source: R + 'B537359905/' },
      ],
      japanese_sources_summary: '公式サイト: 酒菜や (サカナヤ) いしもん 本店、北新地駅・西梅田駅から徒歩1分、新鮮な鮮魚、おばんざい、天ぷらなどを手頃に楽しめる大衆割烹、料理に合わせた日本酒、一品一品お客様の笑顔を思い浮かべながら真心こめて、定休日なし、日15:00〜22:00、月〜木17:00〜23:30、金17:00〜24:00、土16:00〜23:00。料理 (税込): おまかせ造り盛り七種1,200円、新サンマ塩焼き950円、新サンマ造り950円、真フグ白子 (天ぷら・醤油焼き) 980円、活ハモ (湯引き・焼霜・天ぷら) 1,500円、戻りカツオ塩タタキ950円。テイクアウト: にぎり鮨 並15貫2,980円、並20貫3,980円。新店舗「２ビルのいしもん」の案内。会社名 ishimon LLC、ブランドはいしもんとすし処 いしもん。食べログ (店舗会員): いしもん 本店、居酒屋・海鮮・日本酒バー、大阪市北区梅田1-3-1 大阪駅前第一ビル B2F、北新地駅・西梅田駅から徒歩1分、営業時間は公式サイトと同じ、不定休、予約可、混雑時は2時間制、ひとりは電話で (1時間)、月〜木は60分の席のみ予約 (席料なし)、カードと電子マネー可、QR 不可、13席、電子タバコのみ可、テイクアウト、2013年4月2日オープン、日本酒は約20種 (Dassai、Kameizumi など)、姉妹店は２ビルのいしもんとすし処 いしもん。口コミ(2025年6月〜2026年10月): 刺身の盛り合わせ (厚切り、Kue が入った日も)、カツオの塩、Bungo の牛のタタキにウニとイクラ、カニみそとクリームチーズ、うざく、水なす、レンコンの山椒、ごま豆腐、なすの揚げびたし、うなぎの春巻き、エビの天ぷら、牛肉の煮込みの小丼、サンマの塩焼き、鴨、2人で約7,000円、5時でほぼ満席、カウンターはテープで仕切り、魚より小鉢がおいしいという声も。',
      confidence: 'medium', sources: [TB, SITE, 'https://www.sakanaya-ishimon.com/brands/', R + 'B508276221/', R + 'B535016599/', R + 'B537358203/', R + 'B537359905/', R + 'B537509592/', R + 'B537630305/', R + 'B537647646/', R + 'B537807030/', R + 'B537945607/', R + 'B537967848/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A busy counter with a time limit; book by phone for a table or a solo visit (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田1-3-1 大阪駅前第一ビル B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田一丁目3番1号 (go) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B537509592/', R + 'B537359905/'],
    price_note: 'Seasonal board and takeaway prices from the official site (tax included; undated, read 1 November 2026); other dishes from October 2026 reviews, unpriced.', last_checked: TODAY, items: [
      it('おまかせ造り盛り 七種', '', 'Omakase sashimi assortment, seven kinds', '¥1,200', 'Seasonal', 'ask', 'no', 'Official site.', 'sashimi_assortment'),
      it('新サンマ塩焼き', '', 'New-season sanma, salt-grilled', '¥950', 'Seasonal', 'ask', 'no', 'Official site.', 'sanma_shioyaki'),
      it('真フグ白子', '', 'Ma-fugu milt, tempura or soy-grilled', '¥980', 'Seasonal', 'no', 'no', 'Official site.', 'fugu_shirako'),
      it('活ハモ', '', 'Live hamo: blanched, seared or tempura', '¥1,500', 'Seasonal', 'ask', 'no', 'Official site.', 'hamo'),
      it('戻りカツオ塩タタキ', '', 'Salt-seared tataki of autumn bonito', '¥950', 'Seasonal', 'ask', 'no', 'Official site.', 'katsuo_tataki'),
      it('にぎり鮨 並15貫', '', 'Takeaway nigiri, 15 pieces', '¥2,980', 'Takeaway', 'ask', 'no', 'Official site.', 'takeaway_nigiri_15'),
      it('', '', 'Bungo beef tataki with sea urchin and salmon roe', '', 'Small plates', 'ask', 'no', 'October 2026.', 'beef_tataki'),
      it('', '', 'Eel spring rolls', '', 'Small plates', 'no', 'no', 'October 2026.', 'eel_spring_roll'),
    ] }, {
    cuisine: '新鮮な魚、おばんざい、天ぷらと日本酒の大衆割烹 (公式サイト)・季節のおすすめ (公式サイト、税込、2026年11月に確認): おまかせ造り盛り七種1,200円、新サンマの塩焼きか造り950円、真フグ白子の天ぷらか醤油焼き980円、活ハモの湯引き、焼霜、天ぷら1,500円、戻りカツオの塩タタキ950円・テイクアウトのにぎり鮨 並15貫2,980円、20貫3,980円・日本酒は約20種、Dassai や Kameizumi など (食べログ)・2026年10月の口コミに出てくる料理: 刺身の盛り合わせ (マグロなど、Kue が入った日も)、カツオの刺身を塩で、Bungo の牛のタタキにウニとイクラ、カニみそとクリームチーズ、うざく、水なす、レンコンの山椒、ごま豆腐、なすの揚げびたし、うなぎの春巻き、エビの天ぷら、牛肉の煮込みの小丼、サンマの塩焼き・鴨 (2026年8月)・2人で飲んで食べて約7,000円 (2026年10月)',
    neighborhood: '梅田1-3-1、大阪駅前第一ビルの地下2階。JR 東西線 北新地駅と西梅田駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。刺身は醤油で食べ、天ぷら、うなぎの春巻き、牛肉の煮込みの小丼、真フグ白子の醤油焼きもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚介の居酒屋で、野菜のおばんざいにもなすの揚げびたしなど、ふつうはだしを使うものがある。',
    notes: '[居酒屋・梅田、駅前ビルの地下の魚のカウンター] 北新地駅から1分、大阪駅前第一ビルの地下2階にある細長いカウンターの店で、2013年から。いしもんの小さなグループの本店で、ほかに第2ビルの店と寿司の店がある。公式サイトによると、新鮮な魚、おばんざい、天ぷらを手頃に楽しめる大衆割烹で、料理に合わせた日本酒をそろえている。みんなが頼むのは刺身の盛り合わせで、厚切りで新鮮、2026年10月のある夜は Kue も入っていた。ほかにサンマの塩焼きや活ハモなど季節の魚、うざく、水なす、ごま豆腐、なすの揚げびたし、うなぎの春巻き、ウニとイクラをのせた Bungo の牛のタタキなどの小皿。魚より小鉢のほうがおいしいという人も (2026年10月)。2人で飲んで食べて約7,000円。開店からすぐ埋まるので予約を。時間制で、ひとりなら1時間。',
  });
}

// ================================================================ 梅田かに食堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27119640/'; const R = TB + 'dtlrvwlst/';
  const A = day(['12:00', '15:00'], ['16:00', '00:00']); const B = day(['12:00', '15:00'], ['16:00', '01:00']);
  put({
    id: 'osaka_umeda_kani_shokudo', name: '梅田かに食堂 (Umeda Kani Shokudo)', category: 'OMNI',
    lat: 34.702529, lng: 135.501027, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. All-you-can-eat courses of boiled crab with shabu-shabu, sushi and many side dishes; fried dishes, kushikatsu and sukiyaki are among them, and staff could not explain course differences to one diner (December 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses built on crab, beef, pork and sushi. Tabelog\'s feature list ticks "vegetarian options", but no vegetarian dish is named.',
    hours_raw: 'Mon–Thu and Sun 12:00–15:00 (last order 14:30) and 16:00–24:00; Fri, Sat and the day before a holiday 12:00–15:00 and 16:00–01:00; no orders 15:00–16:00; closing days not fixed (Tabelog). Courses of 100 or 120 minutes, last order 30 minutes before the end, at most two dishes ordered at a time per person (Tabelog). A booking is cancelled if you are more than 15 minutes late without notice; course bookings are charged in full from 23:00 the day before, seat-only bookings ¥3,000 a head (Tabelog). Cover charge ¥418; a 10% year-end fee from early December to 5 January (Tabelog); a December 2025 diner was asked at the table to accept a busy-season surcharge of about 10% or ¥1,000. Cards (VISA, Master, JCB, Diners) and PayPay; no e-money (Tabelog). 250 seats, private rooms for 6 to over 30; smoking allowed (Tabelog), including at the tables (June 2025). Orders by QR code on your phone; drinks from a drink bar, some food buffet-style (November 2025). Opened 1 October 2020 (Tabelog), formerly 韓国屋台 オンチョン.',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '小松原町1-16, 4F of モコビル, a mixed-use building of restaurants off Hankyu Higashi-dori — 5 min from Umeda (Midosuji Line), Osaka Umeda (Hankyu) and JR Osaka',
    cuisine: 'All-you-can-eat crab, shabu-shabu and sushi (Tabelog plans, tax included) · lunch all-you-can-eat from ¥2,480 · snow crab and beef-tongue shabu-shabu with sushi, 81 dishes, 100 minutes ¥6,980 (listed down from ¥8,980) · "Goku" course of sushi, meat sushi, beef tongue and A5 wagyu shabu-shabu or sukiyaki, 129 dishes, 120 minutes ¥6,000 · king crab, A5 wagyu and meat sushi, 114 dishes, 100 minutes ¥14,800 (listed down from ¥18,000) · drinks added: soft drinks ¥550, alcohol ¥1,100 · also kushikatsu and meat sushi (Tabelog) · reviews: all-you-can-eat sushi ¥3,000, drinks ¥1,000 more (June 2025); crab hot pot with fried chicken cartilage, kimchi and sushi (July 2025); crab shells for the broth and a crab zosui to finish (September 2025); red snow crab with self-service refills (December 2025); king crab and A5 wagyu loin shabu-shabu ¥14,800 (August 2026)',
    website: null, gmaps: gm('梅田かに食堂 小松原町'), menu_url: null,
    notes: "[Crab all-you-can-eat · Higashi-Umeda, a 250-seat crab hall] A big all-you-can-eat hall on the fourth floor of a building full of restaurants near Higashi-dori, where you pay one price for 100 or 120 minutes of boiled snow crab or king crab, a shabu-shabu pot, sushi and dozens of side dishes, ordered by QR code with a drink bar alongside. Yakiniku and shabu-shabu sit in separate areas, and the neon-lit room draws a young, lively crowd (November 2025); one diner felt it still looked like the Korean restaurant it replaced (December 2025). Reviews split: fans praise packed crab legs, the broth made from the shells and a crab zosui at the end (2025), while others found thin crab, slow peeling and a busy-season surcharge raised only at the table (December 2025). Snow-crab courses run about ¥5,000–7,000 (2025 reviews; ¥6,980 on Tabelog), king crab ¥14,800; lunch from ¥2,480. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: 250 seats in the heart of Umeda for parties up to 250, all-you-can-eat and all-you-can-drink, with kushikatsu and meat sushi; former name 韓国屋台 オンチョン; opened 1 October 2020. The Tabelog invoice number T2120001214766 is registered to 株式会社ファイブディアライフ (NTA invoice register, read 2026-11-01). A December 2025 diner noted the room still seemed set up for the previous restaurant, "more like a Korean restaurant".', philosophy: null, specialty: 'All-you-can-eat snow crab and king crab with shabu-shabu and sushi.',
      anecdotes: [
        { text: '"You order by scanning a QR code on your smartphone, and the all-you-can-drink option is set up like a drink bar … The yakiniku and shabu-shabu areas are separated, which is nice because you don\'t get the smell of grilled meat." — November 2025, the ¥6,980 snow-crab course.', source: R + 'B517209025/' },
        { text: '"I used the crab shells to make a flavorful broth, and finished off with crab zosui (rice porridge)." — September 2025.', source: R + 'B514601967/' },
        { text: '"As soon as I was seated, the staff asked me if I was okay with an additional charge of about 10% or JPY 1,000 due to the busy season." — December 2025.', source: R + 'B519202171/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 梅田かに食堂 (旧店名 韓国屋台 オンチョン)、かに・寿司・しゃぶしゃぶ、大阪市北区小松原町1-16 モコビル 4F、梅田駅・大阪梅田駅・大阪駅から徒歩5分、月〜木・日12:00〜15:00 (L.O.14:30)、16:00〜24:00、金・土・祝前日12:00〜15:00、16:00〜翌1:00、15時〜16時は注文不可、不定休、15分以上の連絡なしの遅れは自動キャンセル、お通し代418円、年末年始は10%、カード・PayPay 可、電子マネー不可、250席、個室あり、喫煙可、2020年10月1日オープン。プラン (税込): ランチの食べ放題2,480円から、ズワイガニと牛タンのしゃぶしゃぶと寿司の食べ放題81品100分6,980円、寿司、肉寿司、牛タンと A5 和牛のしゃぶしゃぶかすき焼きの「極」129品120分6,000円、タラバガニと A5 和牛と肉寿司114品100分14,800円、飲み放題はソフトドリンク550円、アルコール1,100円、ひとり2品ずつの注文。口コミ(2025年6月〜2026年8月): 寿司の食べ放題3,000円、席でたばこ、カニ鍋、軟骨の揚げ物、キムチ、殻でだし、カニ雑炊、QR コードで注文、ドリンクバー、焼肉としゃぶしゃぶのエリアは別、ネオンでにぎやか、紅ズワイガニのおかわりはセルフ、身が少ないという声、席で繁忙期の追加料金をたずねられた、タラバガニと A5 和牛ロースのしゃぶしゃぶ14,800円。',
      confidence: 'medium', sources: [TB, R + 'B509288481/', R + 'B510676107/', R + 'B514601967/', R + 'B514796030/', R + 'B517209025/', R + 'B518813740/', R + 'B518876269/', R + 'B518947145/', R + 'B519202171/', R + 'B533709139/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code on your phone; drink bar and some buffet dishes (November 2025). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区小松原町1-16 モコビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with current plans; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区小松原町1番16号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B517209025/', R + 'B533709139/'],
    price_note: 'Plan prices from the Tabelog listing (tax included; marked limited-time); November 2025 and August 2026 reviews match ¥6,980 and ¥14,800.', last_checked: TODAY, items: [
      it('', '', 'Snow crab and beef-tongue shabu-shabu with sushi, all you can eat (81 dishes, 100 min)', '¥6,980', 'All-you-can-eat', 'ask', 'no', 'Tabelog; November 2025.', 'snow_crab_ayce'),
      it('', '', '"Goku" course: sushi, meat sushi, beef tongue and A5 wagyu shabu-shabu or sukiyaki (129 dishes, 120 min)', '¥6,000', 'All-you-can-eat', 'ask', 'no', 'Tabelog.', 'goku_course'),
      it('', '', 'King crab, A5 wagyu and meat sushi, all you can eat (114 dishes, 100 min)', '¥14,800', 'All-you-can-eat', 'ask', 'no', 'Tabelog; August 2026.', 'king_crab_ayce'),
      it('', '', 'Lunch all-you-can-eat', '¥2,480', 'All-you-can-eat', 'ask', 'no', 'Tabelog ("from").', 'lunch_ayce'),
      it('', '', 'Soft-drink all-you-can-drink add-on', '¥550', 'Drinks', 'ask', 'ask', 'Tabelog.', 'soft_drink_bar'),
    ] }, {
    cuisine: 'カニ、しゃぶしゃぶ、寿司の食べ放題 (食べログのプラン、税込)・ランチの食べ放題2,480円から・ズワイガニと牛タンのしゃぶしゃぶと寿司、81品100分6,980円 (8,980円から値下げと表示)・寿司、肉寿司、牛タンと A5 和牛のしゃぶしゃぶかすき焼きの「極」コース、129品120分6,000円・タラバガニ、A5 和牛、肉寿司、114品100分14,800円 (18,000円から値下げと表示)・飲み放題の追加: ソフトドリンク550円、アルコール1,100円・串カツと肉寿司も (食べログ)・口コミ: 寿司の食べ放題3,000円、飲み放題は1,000円追加 (2025年6月)、カニ鍋と軟骨の揚げ物、キムチ、寿司 (2025年7月)、カニの殻でだしをとって最後はカニ雑炊 (2025年9月)、紅ズワイガニのおかわりはセルフ (2025年12月)、タラバガニと A5 和牛ロースのしゃぶしゃぶ14,800円 (2026年8月)',
    neighborhood: '小松原町1-16、飲食店の入ったモコビルの4階。御堂筋線 梅田駅、阪急 大阪梅田駅、JR 大阪駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ゆでたカニとしゃぶしゃぶ、寿司、たくさんのサイドメニューの食べ放題で、揚げ物、串カツ、すき焼きもある。コースの違いをスタッフが説明できなかったという口コミも (2025年12月)。',
    vegan_detail: 'ヴィーガンではありません。カニ、牛肉、豚肉、寿司のコース。食べログの特徴に「ベジタリアンメニューあり」とあるが、どの料理かは書かれていない。',
    notes: '[カニの食べ放題・東梅田、250席のカニの店] Higashi-dori の近く、飲食店の入ったビルの4階にある大きな食べ放題の店。ひとつの値段で100分か120分、ゆでたズワイガニやタラバガニ、しゃぶしゃぶの鍋、寿司、何十ものサイドメニューを食べられ、注文は QR コードで、ドリンクバーもある。焼肉としゃぶしゃぶはエリアが分かれていて、ネオンの店内は若い客でにぎやか (2025年11月)。前の韓国料理の店のままのようだという人も (2025年12月)。口コミは分かれていて、身のつまったカニの脚や、殻でとっただし、最後のカニ雑炊をほめる声 (2025年) がある一方、身が少なく、むくのに時間がかかる、繁忙期の追加料金を席に着いてから言われた、という声も (2025年12月)。ズワイガニのコースは約5,000〜7,000円 (2025年の口コミ、食べログでは6,980円)、タラバガニは14,800円、ランチは2,480円から。喫煙可。',
  });
}

// ================================================================ 野口 グラングリーン大阪
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27147970/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyotenjin-noguchi.com/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'osaka_noguchi_grand_green_osaka', name: '野口 グラングリーン大阪 (Noguchi Grand Green Osaka)', category: 'OMNI',
    lat: 34.701732, lng: 135.491383, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. A single omakase course with tempura hand rolls, fried dishes and a choice of noodles to finish (soba, somen, Kitakata ramen, spaghetti, dandan noodles). The shop asks for allergies in advance and treats a booking whose allergies affect two or more dishes of the course as a cancellation (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the listing says the shop cannot accommodate broad dietary restrictions such as vegetarian diets; the course is built on fish, shellfish, beef, duck and dashi.',
    hours_raw: 'Daily 17:30–23:00; irregular holidays, ask the shop (Tabelog). Reservation by phone or online, with start times every 30 minutes rather than one seating (October 2026). Cancellation fees: 30% of the booking 7 to 4 days before, 50% 3 to 2 days before, 100% the day before or on the day (Tabelog). Drinks and extra dishes are paid on the day (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 18 seats: 12 at the counter and 6 at tables; private rooms for 4 and 6, ¥5,000 when used by two; non-smoking; no strong perfume; children of school age welcome, with a kids\' menu (Tabelog). Opened 21 March 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '大深町5-54, ground floor of the Grand Green Osaka South Building (グラングリーン大阪南館), the building of the Waldorf hotel — 3 min from the west exit of JR Osaka Stn; diners call it hard to find, so allow extra time',
    cuisine: 'One omakase course of Kyoto cooking, ¥38,000 tax included (Tabelog); a September 2026 bill came to just over ¥40,000 with drinks · an August 2026 course: abalone, turban shell, junsai and white yam; a tempura hand roll of bonito; beef shabu-shabu in a new-lotus-root soup; Biwa trout and sea bream sashimi; fried ayu with onion sauce; grilled hamo with plum soy sauce; fried Kamo eggplant; Azumigawa ayu with corn; fish-bone crackers; eel with green chilli; sea-bream rice; a sorbet of pineapple and white wine · an October 2026 course: matsutake chawanmushi, a squid and sea-urchin hand roll, soft-shell turtle soup with turtle mochi, sea bream and tuna sashimi, fried small potatoes with sesame sauce, fried matsutake with beef in sansho sauce, nameko ohitashi, vinegared mackerel, grilled duck with eggplant and fig sauce, rice with sea bream and nozawana · then a choice of about eight finishing dishes in small, regular or large: karasumi soba, sudachi soba or somen, Kitakata ramen, meat-sauce spaghetti, cold dandan noodles, ikura rice, jako rice, tekka-don, ochazuke · portions run large (2026) · sake and wine (Tabelog)',
    website: SITE, gmaps: gm('野口 グラングリーン大阪'), menu_url: null,
    notes: "[Kaiseki · Umekita, Kyoto cooking in Grand Green] The Osaka branch of 京天神野口, a Kyoto restaurant near Kitano Tenmangu that a 2026 diner describes as referral-only, opened in March 2025 on the ground floor of Grand Green Osaka's South Building, the Waldorf hotel's building, and won a Tabelog Bronze award for 2026. A head chef trained at the Kyoto restaurant runs it with a team of three (August 2026), and the head chef of the Kyoto restaurant is said to come on Thursdays and Fridays, the hardest days to book. One ¥38,000 omakase course of seasonal Kyoto cooking comes in big portions: hamo with plum soy sauce and ayu in summer, matsutake and soft-shell turtle in autumn, then sea-bream rice, after which you choose from about eight finishing dishes, from karasumi soba to Kitakata ramen or cold dandan noodles, in the size you can manage. Start times are flexible. The Grand Green complex is confusing, so arrive early.",
    chef_bio: { chef_name: 'Daisuke Noguchi (野口 大介)', roles: ['Owner of 京天神野口 (official site: "Daisuke Noguchi, the Restaurant owner")', 'Head chef of the Osaka shop: trained at the Kyoto restaurant (Tabelog); unnamed, described as young (August 2026 review)'], origin: null, background: 'Per the official site (kyotenjin-noguchi.com, read 2026-11-01): 京天神野口 runs three restaurants, 京天神野口, のぐち継 and 野口 グラングリーン大阪, and the owner\'s greeting speaks of cooking rooted in the culture and climate of Kyoto, following the changing seasons. Per the shop-maintained Tabelog listing: 京天神野口 is a Kyoto restaurant "known for being fully booked a year in advance"; the Osaka shop opened 21 March 2025 under a head chef trained at the main restaurant; Tabelog Award 2026 Bronze. Per reviews: the Kyoto restaurant near Kitano Tenmangu holds two Michelin stars (August 2026), has won Tabelog Silver awards in a row (August 2026) and takes guests by referral only (October 2026); the head chef of the Kyoto restaurant comes to Osaka on Thursdays and Fridays (August and October 2026), and the Osaka kitchen is a team of three (August 2026).', philosophy: '"I hope you can experience the essence of Kyoto cuisine here in Umeda, Osaka, through traditional yet innovative dishes made with carefully selected seasonal ingredients" (Daisuke Noguchi, Tabelog listing).', specialty: 'Omakase course of Kyoto cooking; choice of finishing noodles and rice.',
      anecdotes: [
        { text: '"The dishes were served at different times rather than all at once, which made me imagine there must be a large team behind the scenes. To my surprise, there were only three people!" — August 2026.', source: R + 'B533973590/' },
        { text: '"Sudachi soba, Kitakata ramen, ikura rice, jako rice, tekka don … I was surprised to learn that we could order all of these!" — October 2026, of the finishing dishes.', source: R + 'B537315012/' },
        { text: '"It was fully booked since the head chef was there that day." — September 2026, a birthday dinner.', source: R + 'B536323998/' },
      ],
      japanese_sources_summary: '公式サイト: 京天神 野口、京の四季に寄り添う味、移ろう季節と向き合い、その日その時の旬を大切に一皿一皿に心を込める、京都の文化や風土に根ざした料理、店主 野口 大介。店舗案内: 京天神野口、のぐち継、野口 グラングリーン大阪。食べログ (店舗会員): 野口 グラングリーン大阪、日本料理、大阪市北区大深町5-54 グラングリーン大阪南館 1F、JR 大阪駅西口から徒歩3分、毎日17:30〜23:00、不定休、おまかせコース38,000円 (税込)、飲み物と追加の料理は当日払い、キャンセル料 (7〜4日前30%、3〜2日前50%、前日・当日100%)、アレルギーや苦手な食材がコースの2品以上にかかる場合はキャンセル扱い、ベジタリアンなど幅広い食事制限には対応できない、カード可、電子マネー・QR 不可、18席 (カウンター12、テーブル6)、個室4名・6名 (2名での利用は5,000円)、禁煙、香水など強い香りは控える、小学生から、お子様メニューあり、2025年3月21日オープン、The Tabelog Award 2026 Bronze、一年先まで予約で埋まる京都の京天神野口の新しい店、料理長は本店で修業。口コミ(2026年7月〜10月): Kitano Tenmangu の近くの本店、紹介制、量が多い、3人で切り盛り、木・金は本店の大将が来る、開始時間は30分ごとに選べる、アワビ、ハモ、アユ、マツタケ、スッポン、鯛ごはん、締めは約8種から (からすみそば、すだちそば、Kitakata ラーメン、ミートソース、冷やし担々麺、いくらごはん、じゃこごはん、鉄火丼、お茶漬け)、小・普通・大、グラングリーンは迷いやすい。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'en/', SITE + 'information', R + 'B533589711/', R + 'B533623123/', R + 'B533973590/', R + 'B534859761/', R + 'B535200382/', R + 'B536323998/', R + 'B536876361/', R + 'B536995486/', R + 'B537315012/', R + 'B538045732/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase course, booked online or by phone; the owner\'s site has an English page. No English service evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: "We will do our best to accommodate any allergies or disliked ingredients, but please understand that there may be cases where we cannot meet your requests."', 'Tabelog listing: allergies or dislikes affecting two or more dishes of the course are treated as a cancellation; broad restrictions such as vegetarian diets cannot be accommodated.'] },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市北区大深町5-54 グラングリーン大阪南館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the owner\'s official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI matches only the town 大阪府大阪市北区大深町 (town) 434m away, so the pin rests on the Tabelog point alone (GSI only this round, no OSM); no other record within 60 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536876361/', R + 'B537315012/'],
    price_note: 'Course price from the Tabelog listing (tax included); a September 2026 review matches ¥38,000.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥38,000', 'Course', 'ask', 'no', 'Tabelog; September 2026.', 'omakase_course'),
      it('', '', 'Finishing dish of your choice (karasumi soba, Kitakata ramen, dandan noodles, ikura rice …), small, regular or large', '', 'Course', 'ask', 'no', 'August–October 2026.', 'shime'),
      it('', '', 'Sea-bream rice', '', 'Course', 'ask', 'no', 'August 2026.', 'taimeshi'),
    ] }, {
    cuisine: '京都の料理のおまかせコースひとつ、38,000円、税込 (食べログ)。2026年9月は飲み物を入れて40,000円少し・2026年8月のコース: アワビ、サザエ、じゅんさい、白い山芋、カツオの天ぷらの手巻き、新レンコンのスープで牛肉のしゃぶしゃぶ、Biwa のマスと鯛の刺身、アユのフライと玉ねぎのソース、ハモの焼き物と梅の醤油、Kamo なすの揚げ物、Azumigawa のアユととうもろこし、骨せんべい、うなぎと青とうがらし、鯛ごはん、パイナップルと白ワインのシャーベット・2026年10月のコース: マツタケの茶碗蒸し、イカとウニの手巻き、スッポンのスープとスッポンの入った餅、鯛とマグロの刺身、小さなじゃがいもの揚げ物とごまのソース、マツタケと牛肉の揚げ物の山椒のソース、なめこのおひたし、しめサバ、鴨の焼き物となすのいちじくのソース、鯛と nozawana のごはん・そのあと約8種の締めから小・普通・大で選ぶ: からすみそば、すだちそばかそうめん、Kitakata ラーメン、ミートソーススパゲッティ、冷やし担々麺、いくらごはん、じゃこごはん、鉄火丼、お茶漬け・量は多め (2026年)・日本酒とワイン (食べログ)',
    neighborhood: '大深町5-54、グラングリーン大阪南館の1階、Waldorf のホテルと同じ建物。JR 大阪駅西口から徒歩3分。わかりにくいという声が多いので、早めに',
    gf_detail: '予約時に要確認。グルテンの情報なし。おまかせコースひとつで、天ぷらの手巻き、揚げ物、締めの麺 (そば、そうめん、Kitakata ラーメン、スパゲッティ、担々麺) がある。アレルギーは事前に伝え、コースの2品以上にかかる場合はキャンセル扱い (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。食べログに、ベジタリアンなど幅広い食事制限には対応できないとある。コースは魚、貝、牛肉、鴨、だしを使う。',
    notes: '[日本料理・うめきた、グラングリーンの京料理] Kitano Tenmangu の近くにある京都の京天神野口 (2026年の口コミでは紹介制) の大阪の店で、2025年3月にグラングリーン大阪の南館、Waldorf のホテルと同じ建物の1階に開き、The Tabelog Award 2026 で Bronze。本店で修業した料理長が3人で切り盛りし (2026年8月)、木曜と金曜は本店の大将が来るので、その日はいちばん予約がとりにくい。コースは38,000円のおまかせひとつで、季節の京都の料理を量たっぷりに。夏はハモの梅醤油やアユ、秋はマツタケやスッポン、そして鯛ごはん。そのあと、からすみそばから Kitakata ラーメン、冷やし担々麺まで約8種の締めから選べて、量も選べる。開始時間は自由がきく。グラングリーンは迷いやすいので早めに。',
  });
}

save();
