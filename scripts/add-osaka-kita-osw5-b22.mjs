// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 22.
//   Ids checked for parity: 27140060, 27155466, 27155216, 27082924 (all even).
//   + 鮨処 おりた Sushi Dokoro Orita (ten-seat red-vinegar sushi counter in Dojima, open to 3:00, since 2023)
//   + サムギョプサル ホブ Samgyeopsal Hobu (herb samgyeopsal of Tokachi "Dorobuta" pork, from the Numata tempura group, since April 2026)
//   + 北新地 おやじ最後の握り 極 Kitashinchi Oyaji Saigo no Nigiri Kiwami (tatami-counter sushi course in Dojima, to 3:00, since April 2026)
//   + AVAN 北新地 AVAN Kitashinchi (karaoke-room Italian dining bar in Dojima, to 5:00, since 2014)
//   Chain check: おりた: invoice T7810616222658 → 折田　友吾, an individual (NTA register); one shop. ホブ: a new concept of the tempura shop
//   Numata (a different format; not in data); one shop. 極: search results show 心斎橋寿司居酒屋 おやじ最後の握り and its 別邸 in Shinsaibashi
//   (pages not opened); 極 is the Kitashinchi premium version; none in data; a small group, kept and flagged. AVAN: invoice
//   T7120001126841 → 株式会社Ｊ (NTA register); one shop; not related to "GLUTEN FREE CAFE avan" in Tokyo data.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮨処 おりた
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27140060/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '03:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'osaka_sushi_dokoro_orita_dojima', name: '鮨処 おりた (Sushi Dokoro Orita)', category: 'MOM_AND_POP',
    lat: 34.696172, lng: 135.498081, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Red-vinegar nigiri with soy, small dishes in Kansai dashi style, steamed anago, chawanmushi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, live shrimp and seafood dishes in dashi.',
    hours_raw: 'Mon–Fri 17:00–3:00; Sat 17:00–23:00; closed Sundays and holidays (Tabelog). Reservations accepted; courses or à la carte; also on Uber Eats (November 2025). Service charge 5% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), d Barai (Tabelog). 10 seats at a hinoki counter; non-smoking; English menu; children welcome; takeout (Tabelog). Opened 13 December 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-4-26, 3F of 玉家ビル — 5 min from Oebashi Stn, 7 min from Kitashinchi Stn',
    cuisine: 'Sushi on red-vinegar rice with seasonal fish, small dishes in the Kansai dashi tradition and many local sakes, served until 3:00 (Tabelog) · courses (Tabelog, tax included, 5% service extra): 17-dish course ¥12,000; 16-dish special course ¥18,000 · à la carte at your own pace (December 2025) · dishes named in 2025–2026: live shrimp from the tank, still moving on the rice; squid finished with a theatrical sprinkle of salt; mentaiko marinated with green chilli; fugu as a starter; white fish, diced and grilled squid, red tuna, sea urchin in seawater and not, steamed anago, toro-taku, matsutake dobin-mushi in autumn, a wobbling milk pudding to finish',
    website: null, gmaps: gm('鮨処 おりた 堂島'), menu_url: null,
    notes: "[Sushi · Dojima, a late-night red-vinegar counter] A ten-seat hinoki sushi counter in Dojima, open until 3:00 on weekdays, with a tank of live shrimp and abalone in front of you. The chef puts on a show: shrimp still twitching on the rice, a high sprinkle of salt over squid, a milk pudding wobbled at the end. Take the ¥12,000 or ¥18,000 course, or order piece by piece late at night after other stops. Diners in 2025–2026 praise the friendly chef and red-vinegar rice; one January 2026 diner found the tuna and uni ordinary for the price. 5% service; English menu.",
    chef_bio: { chef_name: null, roles: ['Owner (the invoice holder, 折田友吾)', 'head chef and staff'], origin: null, background: 'The Tabelog invoice number T7810616222658 is registered to an individual, 折田　友吾 (NTA invoice register, read 2026-11-02), whose family name is the shop name. Per the shop-maintained Tabelog listing: an adult hideaway in Kitashinchi, red-vinegar sushi with seasonal fish, Kansai dashi small dishes, local sake, a ten-seat hinoki counter, open until 3:00; opened 13 December 2023.', philosophy: null, specialty: 'Live shrimp nigiri; red-vinegar sushi.',
      anecdotes: [
        { text: '"Open until 3 AM and also available on Uber Eats, I visited this place late at night." — November 2025.', source: R + 'B517084461/' },
        { text: '"The salt-sprinkling performance, the live shrimp with its tail quivering, and even the dessert being presented with a little shake added to the visual enjoyment, not just the taste." — April 2026, the ¥18,000 course.', source: R + 'B526860141/' },
        { text: '"In front of me was an aquarium filled with live shrimp and abalone." — October 2026, around 10 PM.', source: R + 'B537833945/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨処 おりた、寿司・海鮮、大阪市北区堂島1-4-26 玉家ビル 3F、北新地駅から7分、淀屋橋駅から10分、大江橋駅から5分、月〜金17:00〜3:00、土17:00〜23:00、日・祝休み、予約可、サービス料5%、カード・d払い可、カウンター10席、禁煙、英語のメニュー、子ども可、テイクアウト、2023年12月13日オープン、旬の鮮魚と赤酢のシャリ、関西のだし文化の一品、地酒、檜のカウンター、17品のコース12,000円、16品の特別コース18,000円。インボイス登録は個人の折田友吾。口コミ(2025年9月〜2026年10月): 遅くまで開いている、Uber Eats も、生け簀の活エビ、塩をふるパフォーマンス、青唐辛子の明太子、ふぐの先付、白身、イカ、赤身、塩水ウニ、煮穴子、トロたく、松茸の土瓶蒸し、ゆらす牛乳プリン、明るい大将とスタッフ、赤酢のシャリ、マグロやウニは値段のわりにという声。',
      confidence: 'medium', sources: [TB, R + 'B515175945/', R + 'B517084461/', R + 'B520855623/', R + 'B521812746/', R + 'B522878475/', R + 'B523467787/', R + 'B526301142/', R + 'B526860141/', R + 'B536917181/', R + 'B537833945/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; a September 2025 traveller found the chef and staff easy to talk to.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-4-26 玉家ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目4番26号 (go) 1m; nearest other record osaka_yoshoku_bistro_ippou_bijin_dojima 11 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included; 5% service extra).', last_checked: TODAY, items: [
      it('', '', 'Omakase course, 17 dishes', '¥12,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course_12000'),
      it('', '', 'Special course, 16 dishes', '¥18,000', 'Courses', 'ask', 'no', 'Tabelog; April 2026.', 'course_18000'),
    ] }, {
    cuisine: '赤酢のシャリと旬の魚の寿司、関西のだし文化の一品、たくさんの地酒、夜3時まで (食べログ)・コース (食べログ、税込、サービス料5%別): 17品のコース12,000円、16品の特別コース18,000円・好きなペースでアラカルトも (2025年12月)・2025年〜2026年の口コミに出てくる料理: 生け簀の活エビ (にぎってもまだ動く)、高くからふる塩で仕上げるイカ、青唐辛子の明太子、先付のふぐ、白身、イカの角切りと焼き、赤身、塩水ウニとそうでないウニ、煮穴子、トロたく、秋の松茸の土瓶蒸し、ゆらして出す牛乳プリン',
    neighborhood: '堂島1-4-26、玉家ビルの3階。大江橋駅から5分、北新地駅から7分',
    gf_detail: '要確認。グルテンの情報なし。醤油の赤酢のにぎり、関西のだしの一品、煮穴子、茶碗蒸し。',
    vegan_detail: 'ヴィーガンではありません。寿司、活エビ、だしの魚介の料理。',
    notes: '[寿司・堂島、夜遅くまでの赤酢の寿司] 堂島の10席の檜のカウンターの寿司屋で、平日は夜3時まで、目の前には活エビとアワビの生け簀。大将の演出が楽しい: シャリの上でまだ動くエビ、イカに高くからふる塩、最後にゆらす牛乳プリン。コースは12,000円か18,000円、夜遅くに何軒かのあとで1貫ずつ頼んでも。2025年〜2026年の口コミでは気さくな大将と赤酢のシャリが好評だが、マグロやウニは値段のわりにという声も (2026年1月)。サービス料5%、英語のメニューあり。',
  });
}

// ================================================================ サムギョプサル ホブ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27155466/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:30', '01:00']);
  put({
    id: 'osaka_samgyeopsal_hobu_dojima', name: 'サムギョプサル ホブ (Samgyeopsal Hobu)', category: 'OMNI',
    lat: 34.695975, lng: 135.496582, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Grilled pork with herbs, namul, ssamjang and kimchi, a chige soup, and cold noodles or bibimbap to finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork samgyeopsal course with a pork-and-clam soup; ten namul and many herbs come with it.',
    hours_raw: '17:30–1:00; closed Sundays and holidays and on some other days (Tabelog). Reservations accepted online until 22:00, later by phone; cancelled if 15 minutes late without notice (Tabelog). Service charge 5% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 10 seats: a counter of 6 and a table of 4; non-smoking (Tabelog). Opened April 2026 (Tabelog; August 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-5-5, 4F of エスパス北新地25 — 5 min from Nishi-Umeda and Kitashinchi Stns',
    cuisine: 'Samgyeopsal of Tokachi "Dorobuta" free-range pork, grilled by the staff, wrapped with more than 20 kinds of micro herbs, with ten namul and a soup; a new concept from the tempura restaurant Numata (Tabelog; 2026) · course with 20 herbs ¥11,000; a seven-herb set ¥11,000 for two in September 2026 reviews (Tabelog; 2026) · dishes named in 2026: chuck eye and belly of Dorobuta, perilla leaves, ssamjang, kimchi, namul of Manji pepper, carrot, zucchini, myoga, okra, celery and more, pork-and-clam chige, Hirado shiitake, Kumamoto akaushi beef as an option, cold noodles with whitebait and tomato or bibimbap to finish; cooked without garlic · white and rosé wines chosen for pork (Tabelog)',
    website: null, gmaps: gm('サムギョプサル ホブ 北新地'), menu_url: null,
    notes: "[Korean · Dojima, herb samgyeopsal] A ten-seat samgyeopsal counter in Dojima, opened in April 2026 as a new concept from the tempura restaurant Numata, whose owner fell for Tokachi's free-range 'Dorobuta' pork and micro herbs. The staff grill thick chuck and belly for you; wrap them in perilla and some of the twenty herbs with ssamjang, between ten namul and a pork-and-clam soup, then finish with cold noodles or bibimbap. No garlic, so it eats lighter than usual samgyeopsal. The course is ¥11,000 plus 5% service; white and rosé wines suit the pork.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; the Numata tempura group)', 'staff who grill at the table'], origin: null, background: 'Per the shop-maintained Tabelog listing: a new concept from the upscale tempura restaurant "Numada" in Osaka; the owner, who loves samgyeopsal, discovered Hokkaido\'s "Doro Buta" and micro herbs and opened the shop in April 2026. A July 2026 diner describes it as created by Chef Numata, who holds a Michelin star.', philosophy: null, specialty: 'Dorobuta samgyeopsal with micro herbs.',
      anecdotes: [
        { text: '"The pork, grilled to reduce fat, is paired with Korean Perilla Leaves and various herbs, making it filling yet not heavy." — August 2026, a second visit.', source: R + 'B526342045/' },
        { text: '"For the finishing dish, we could choose between cold noodles and bibimbap. I opted for the cold noodles, and they were fantastic, with a perfect combination of broth, shirasu (whitebait), and tomatoes." — August 2026.', source: R + 'B533839203/' },
        { text: '"I don\'t know many places in Kitashinchi that serve samgyeopsal." — July 2026; Kumamoto Akaushi beef was offered too.', source: R + 'B532629882/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): サムギョプサル ホブ、韓国料理、大阪市北区堂島1-5-5 エスパス北新地25 4F、西梅田駅・北新地駅から5分、17:30〜1:00、日・祝と不定休、ネット予約は22時まで (それ以降は電話)、連絡なく15分遅れると自動キャンセル、サービス料5%、カード可、電子マネー・QR 不可、10席 (カウンター6、テーブル4)、禁煙、大阪の高級天ぷら店 Numada の新業態、サムギョプサル好きの店主が Hokkaido の「Doro Buta」とマイクロハーブに出会い2026年4月にオープン、Doro Buta と20種以上のマイクロハーブ、10種のナムルとスープ、〆の冷麺とビビンバ、豚に合う白とロゼのワイン、ハーブ20種のコース11,000円。口コミ(2026年7月〜9月): Tokachi の放牧豚のかたロースとバラ、えごまの葉、サムジャン、キムチ、ナムル (Manji のとうがらし、にんじん、ズッキーニ、みょうが、オクラ、セロリなど)、豚とあさりのチゲ、Hirado のしいたけ、Kumamoto の Akaushi、しらすとトマトの冷麺、にんにくを使わない、スタッフが焼いてくれる、ハーブ7種のセット2名11,000円、ミシュランの星の Numata さんの店という声。',
      confidence: 'medium', sources: [TB, R + 'B526342045/', R + 'B529553947/', R + 'B532629882/', R + 'B533839203/', R + 'B534008666/', R + 'B535122341/', R + 'B535148282/', R + 'B535319026/', R + 'B535380347/', R + 'B536604369/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course with the meat grilled for you (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-5-5 エスパス北新地25 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目5番5号 (go) 11m; nearest other records (はつ根ビル, 堂島1-5-4) 17 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course price from the Tabelog listing (tax included; 5% service extra).', last_checked: TODAY, items: [
      it('', '', 'Samgyeopsal course with 20 kinds of herbs', '¥11,000', 'Courses', 'ask', 'no', 'Tabelog; 2026.', 'herb_course'),
    ] }, {
    cuisine: 'Tokachi の放牧豚「Dorobuta」のサムギョプサルをスタッフが焼き、20種以上のマイクロハーブで巻いて、10種のナムルとスープと。天ぷらの Numata の新業態 (食べログ、2026年)・ハーブ20種のコース11,000円、2026年9月の口コミではハーブ7種のセットが2名で11,000円 (食べログ、2026年)・2026年の口コミに出てくる料理: Dorobuta のかたロースとバラ、えごまの葉、サムジャン、キムチ、Manji のとうがらし、にんじん、ズッキーニ、みょうが、オクラ、セロリなどのナムル、豚とあさりのチゲ、Hirado のしいたけ、追加の Kumamoto の Akaushi、〆はしらすとトマトの冷麺かビビンバ。にんにくは使わない・豚に合う白とロゼのワイン (食べログ)',
    neighborhood: '堂島1-5-5、エスパス北新地25の4階。西梅田駅・北新地駅から5分',
    gf_detail: '要確認。グルテンの情報なし。ハーブと焼いた豚、ナムル、サムジャン、キムチ、チゲ、〆の冷麺かビビンバ。',
    vegan_detail: 'ヴィーガンではありません。豚のサムギョプサルのコースで、豚とあさりのスープ。10種のナムルとたくさんのハーブがつく。',
    notes: '[韓国料理・堂島、ハーブのサムギョプサル] 2026年4月に天ぷらの Numata の新業態として開いた、堂島の10席のサムギョプサルのカウンター。Tokachi の放牧豚「Dorobuta」とマイクロハーブにほれこんだ店主の店。厚切りのかたロースとバラはスタッフが焼いてくれて、えごまの葉と20種のハーブで巻き、サムジャンをつけて。10種のナムルと豚とあさりのスープ、〆は冷麺かビビンバ。にんにくを使わないので、ふつうのサムギョプサルより軽い。コースは11,000円とサービス料5%、豚に合う白とロゼのワインも。',
  });
}

// ================================================================ 北新地 おやじ最後の握り 極
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27155216/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '03:00']);
  put({
    id: 'osaka_oyaji_saigo_no_nigiri_kiwami_kitashinchi', name: '北新地 おやじ最後の握り 極 (Kitashinchi Oyaji Saigo no Nigiri Kiwami)', category: 'OMNI',
    lat: 34.696234, lng: 135.498500, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi with irizake, salt or soy; fried mehikari hand rolls; eel; red miso soup; red-vinegar nigiri.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood course with horse meat and eel.',
    hours_raw: 'Mon–Sat, the day before and after a holiday 17:00–3:00 (last order 2:00); closed Sundays and holidays and on listed Saturdays (Tabelog). Reservations accepted, same day welcome; courses or à la carte, no fixed start (Tabelog). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay, d Barai, Rakuten Pay, au PAY (Tabelog). 12 seats at a low counter on tatami, shoes off; heated tobacco only; no strong perfume (Tabelog; October 2026). Opened 1 April 2026 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-3-1, room 405 on 4F of 二葉ビル — 5 min from Kitashinchi Stn',
    cuisine: 'Sushi and seasonal dishes at a tatami counter, with courses or à la carte and no set start time (Tabelog) · "Ichigo Ichie" course of 19 items ¥22,000: chilled chawanmushi, sashimi of hamo, horse meat and kombu-cured white fish, fried young ayu hand rolls, ten nigiri in two parts, ankimo, eel, rolls, red miso soup, dessert (Tabelog, tax included) · dishes named in October 2026: figs with chestnut and walnut in white sesame, sashimi with irizake, umami salt and soy, fried mehikari wrapped with rice in nori, cod-milt chawanmushi, squid with caviar, Kochi striped jack, Osaka Bay flounder, Tokyo Bay kohada, marinated tuna, chutoro, sweet shrimp, sea urchin piled high, toro-taku and kanpyo rolls; generous wasabi on request',
    website: null, gmaps: gm('北新地 おやじ最後の握り 極'), menu_url: null,
    notes: "[Sushi · Dojima, a late tatami-counter course] A twelve-seat sushi room in Dojima, opened in April 2026, where you take off your shoes for a low counter beside rock-textured walls and running water, open until 3:00. The ¥22,000 'Ichigo Ichie' course runs through seasonal dishes, sashimi with old-style irizake, fried mehikari hand rolls and ten nigiri on red-vinegar rice, from caviar-topped squid to sea urchin heaped over the rice; or order à la carte late at night. A October 2026 diner recognised the style of its Shinsaibashi sister shop. 10% service; heated tobacco only.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)', 'staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: sushi by skilled artisans and seasonal delicacies, no course obligation and no fixed start, same-day reservations welcome; a tatami counter; opened 1 April 2026. An October 2026 diner who knew a sushi restaurant in Minami recognised the same style; search results show 心斎橋寿司居酒屋 おやじ最後の握り and an annex in Shinsaibashi (pages not opened).', philosophy: '"Enjoy a free and high-quality sushi experience on a whim!" (Tabelog).', specialty: 'Ichigo Ichie course; late-night à la carte.',
      anecdotes: [
        { text: '"The walls are designed to resemble rocky surfaces, with water flowing and cute little frogs adorning the space." — October 2026, a birthday dinner.', source: R + 'B536872837/' },
        { text: '"The nigiri consisted of nine pieces along with rolls." — October 2026, the Ichigo Ichie course; extra wasabi on request.', source: R + 'B536901228/' },
        { text: '"Not only was the food delightful, but the conversations with the chef made for a wonderful time." — October 2026, a visit to Osaka.', source: R + 'B538491896/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 北新地 おやじ最後の握り 極、寿司・海鮮・日本料理、大阪市北区堂島1-3-1 二葉ビル 4F 405号、北新地駅から5分、大阪駅から10分、月〜土・祝前日・祝後日17:00〜3:00 (L.O.2:00)、日・祝休み、土曜の一部休み、予約可、当日予約も、コースにしばられない、一斉スタートなし、サービス料10%、カード・電子マネー・QR 可、カウンター12席 (靴を脱いで畳に)、加熱式たばこのみ、香水はひかえめに、2026年4月1日オープン、一期一会のコース19品22,000円 (冷やし茶碗蒸し、鱧・馬肉・白身の昆布じめの刺身、稚鮎の天ぷらの手巻き、にぎり10貫を2回に分けて、あん肝、うざく、巻物、赤だし、デザート)。口コミ(2026年9月〜10月): いちじくと栗とくるみの白あえ、煎り酒・旨塩・醤油で食べる刺身、めひかりの揚げ物の手巻き、たらの白子の茶碗蒸し、イカとキャビア、Kochi のしまあじ、Osaka 湾のヒラメ、Tokyo 湾のコハダ、マグロの漬け、中トロ、甘エビ、山盛りのウニ、トロたくとかんぴょう巻き、わさびは多めにも、岩のような壁と流れる水とかえる、ミナミの店と同じ雰囲気という声、関西のユーモアのある大将。',
      confidence: 'medium', sources: [TB, R + 'B536514479/', R + 'B536858820/', R + 'B536872837/', R + 'B536901228/', R + 'B536918052/', R + 'B536993603/', R + 'B537389062/', R + 'B537638180/', R + 'B537929337/', R + 'B538491896/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off at a tatami counter; course or à la carte (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-1 二葉ビル 4F 405号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 73m, within 150 m. osaka_koya_kitashinchi (address_ja "大阪府大阪市北区堂島1-3-1 二葉ビル 3F") is in the same building but its pin is 20 m away, so the two do not stack and this pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course price from the Tabelog listing (tax included; 10% service extra).', last_checked: TODAY, items: [
      it('', '', '"Ichigo Ichie" dish-and-nigiri course, 19 items', '¥22,000', 'Courses', 'ask', 'no', 'Tabelog; October 2026.', 'ichigo_ichie'),
    ] }, {
    cuisine: '畳のカウンターの寿司と季節の一品、コースでもアラカルトでも、一斉スタートなし (食べログ)・「一期一会」のコース19品22,000円: 冷やし茶碗蒸し、鱧・馬肉・白身の昆布じめの刺身、稚鮎の天ぷらの手巻き、2回に分けたにぎり10貫、あん肝、うざく、巻物、赤だし、デザート (食べログ、税込)・2026年10月の口コミに出てくる料理: いちじくと栗とくるみの白あえ、煎り酒・旨塩・醤油で食べる刺身、めひかりの揚げ物をごはんと海苔で巻いたもの、たらの白子の茶碗蒸し、イカとキャビア、Kochi のしまあじ、Osaka 湾のヒラメ、Tokyo 湾のコハダ、マグロの漬け、中トロ、甘エビ、山盛りのウニ、トロたくとかんぴょう巻き。わさびは多めにも',
    neighborhood: '堂島1-3-1、二葉ビルの4階405号。北新地駅から5分',
    gf_detail: '要確認。グルテンの情報なし。煎り酒・塩・醤油の刺身、めひかりの揚げ物の手巻き、うなぎ、赤だし、赤酢のにぎり。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚介のコースで、馬肉やうなぎも。',
    notes: '[寿司・堂島、夜遅くまでの畳のカウンター] 2026年4月に堂島に開いた12席の寿司屋で、靴を脱いで、岩のような壁と流れる水のそばの低いカウンターへ。夜3時まで。22,000円の「一期一会」コースは季節の一品、古い調味料の煎り酒で食べる刺身、めひかりの揚げ物の手巻きから、赤酢のにぎり10貫へ、キャビアをのせたイカからシャリが見えないほどのウニまで。夜遅くにアラカルトでも。2026年10月には心斎橋の姉妹店と同じ雰囲気だという声。サービス料10%、加熱式たばこのみ。',
  });
}

// ================================================================ AVAN 北新地
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27082924/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '05:00']);
  put({
    id: 'osaka_avan_kitashinchi_dojima', name: 'AVAN 北新地 (AVAN Kitashinchi)', category: 'OMNI',
    lat: 34.696039, lng: 135.497675, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the draw is all-you-can-eat pizza, with pasta, chicken nuggets and fries; nothing is described as gluten-free. Not connected to the "GLUTEN FREE CAFE avan" shops in Tokyo.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options"; salads and pasta aglio e olio are on the menu, but nothing is described as vegan.',
    hours_raw: 'Mon–Sat, the day before and after a holiday 18:00–5:00 (last order food 4:00, drinks 5:00); holidays 18:00–24:00 (Tabelog; the listing also says open year-round). Reservations accepted; same-day cancellation fee; groups of 10 or more change by two days ahead, private hire by a week (Tabelog). Table charge à la carte ¥500 a head 18:00–24:00, ¥1,000 from 24:00 to 5:00 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay (Tabelog). 60 seats: sofa seating, a VIP karaoke room for 20, a room for 6, a counter of 4; whole-shop hire to 50; smoking allowed; wheelchair accessible (Tabelog). Opened 3 December 2014 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-4-8, 3F of 廣ビル, diagonally opposite the ANA Crowne Plaza — 5 min from Kitashinchi, Nishi-Umeda and Yodoyabashi Stns',
    cuisine: 'Italian dining bar like a night lounge, with sofa seats and karaoke rooms (Tabelog) · all-you-can-eat of 14 original pizzas ¥4,500 weekdays, ¥5,000 weekends; all-you-can-eat domestic beef steak ¥5,000 / ¥5,500 (Tabelog) · party courses with drinks and karaoke: an Italian course with all-you-can-drink karaoke ¥4,000, private room +¥1,000 a head (December 2025); ¥5,000 courses (2024) · dishes named in 2024–2026: two hams, potato salad, cut steak, spaghetti aglio e olio, thin-crust margherita and mentaiko-mayo pizza, spicy nuggets and fries, cheese pizza, colourful salad; a hayashi rice at lunch (June 2025)',
    website: null, gmaps: gm('AVAN 北新地 堂島'), menu_url: null,
    notes: "[Italian · Dojima, karaoke rooms and pizza till dawn] A sixty-seat Italian dining bar in Dojima, open until 5:00, styled like a night lounge with sofas and karaoke rooms, used mostly for parties and late second stops. The popular deals are all-you-can-eat pizza (14 kinds, ¥4,500 on weekdays) and all-you-can-eat steak; group courses with drinks and karaoke start around ¥4,000. A table charge of ¥500 (¥1,000 after midnight) applies à la carte. Not linked to the gluten-free café chain of the same name in Tokyo.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: a stylish Italian hideaway like a night lounge, all sofa seating, VIP rooms with karaoke and large monitors, all-you-can-eat pizza and steak; opened 3 December 2014. The Tabelog invoice number T7120001126841 is registered to 株式会社Ｊ (NTA invoice register, read 2026-11-02). An October 2025 diner describes young artists working there.', philosophy: null, specialty: 'All-you-can-eat pizza; karaoke party rooms.',
      anecdotes: [
        { text: '"The atmosphere feels like a bar, a nightclub, and a snack bar all at once." — September 2024, a private event.', source: R + 'B491716519/' },
        { text: '"I went there just before 2 AM, not for a meal but to enjoy some drinks." — April 2024.', source: R + 'B499641572/' },
        { text: '"I was satisfied with the VIP room where we could enjoy karaoke." — August 2026, a company party.', source: R + 'B536194919/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): AVAN 北新地、ダイニングバー・イタリアン・居酒屋、大阪市北区堂島1-4-8 廣ビル 3F、北新地駅・西梅田駅・淀屋橋駅から5分、ANA Crowne Plazaの斜め向かい、月〜土・祝前日・祝後日18:00〜5:00 (L.O.料理4:00、ドリンク5:00)、祝日18:00〜24:00、年中無休とも、予約可、当日キャンセル料、10名以上は2日前、貸切は1週間前まで、アラカルトのテーブルチャージは18〜24時500円、24〜5時1,000円、カード・PayPay 可、60席 (ソファ、カラオケつきの20名の VIP ルーム、6名の部屋、カウンター4)、貸切50名まで、喫煙可、車いす可、2014年12月3日オープン、ナイトラウンジのようなイタリアン、14種のオリジナルピザの食べ放題 (平日4,500円、週末5,000円)、国産牛ステーキの食べ放題 (5,000円・5,500円)。インボイス登録は株式会社Ｊ。口コミ(2024年4月〜2026年10月): 生ハム2種、ポテトサラダ、カットステーキ、ペペロンチーノ、薄いマルゲリータと明太マヨのピザ、スパイシーなナゲットとポテト、チーズのピザ、彩りのサラダ、ランチのハヤシライス、カラオケと飲み放題つきのイタリアンのコース4,000円と個室1,000円、宴会、2時間を3時間にしてくれた、若いアーティストのスタッフという声。',
      confidence: 'medium', sources: [TB, R + 'B491716519/', R + 'B491832311/', R + 'B499641572/', R + 'B508217392/', R + 'B508975507/', R + 'B509463244/', R + 'B515495137/', R + 'B518292535/', R + 'B536194919/', R + 'B538004678/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Party courses and karaoke rooms (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-4-8 廣ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目4番8号 (go) 7m; no other record within 25 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Prices from the Tabelog listing (tax included); table charge for à la carte.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat pizza, 14 kinds (weekdays / weekends)', '¥4,500 / ¥5,000', 'Courses', 'no', 'no', 'Tabelog.', 'pizza_tabehodai'),
      it('', '', 'All-you-can-eat domestic beef steak (weekdays / weekends)', '¥5,000 / ¥5,500', 'Courses', 'ask', 'no', 'Tabelog.', 'steak_tabehodai'),
      it('', '', 'Italian course with karaoke and all-you-can-drink', '¥4,000', 'Courses', 'no', 'no', 'December 2025.', 'karaoke_course'),
    ] }, {
    cuisine: 'ナイトラウンジのようなイタリアンのダイニングバーで、ソファ席とカラオケの部屋 (食べログ)・14種のオリジナルピザの食べ放題 平日4,500円・週末5,000円、国産牛ステーキの食べ放題 5,000円・5,500円 (食べログ)・飲み放題とカラオケつきの宴会のコース: カラオケと飲み放題つきのイタリアンのコース4,000円、個室はひとり1,000円追加 (2025年12月)、5,000円のコース (2024年)・2024年〜2026年の口コミに出てくる料理: 生ハム2種、ポテトサラダ、カットステーキ、ペペロンチーノ、薄いマルゲリータと明太マヨのピザ、スパイシーなナゲットとポテト、チーズのピザ、彩りのサラダ。ランチのハヤシライス (2025年6月)',
    neighborhood: '堂島1-4-8、廣ビルの3階、ANA Crowne Plazaの斜め向かい。北新地駅・西梅田駅・淀屋橋駅から5分',
    gf_detail: 'グルテンフリーにはしにくい: ピザの食べ放題が中心で、パスタ、ナゲット、ポテトも。グルテンフリーの説明はない。東京の「GLUTEN FREE CAFE avan」とは関係ない。',
    vegan_detail: '要確認。食べログの特徴に「ベジタリアンメニューあり」、サラダやペペロンチーノもあるが、ヴィーガンの説明はない。',
    notes: '[イタリアン・堂島、カラオケの部屋と朝までピザ] 堂島の60席のイタリアンのダイニングバーで朝5時まで。ソファとカラオケの部屋のあるナイトラウンジのような店で、宴会や遅い2軒目によく使われる。人気は14種のピザの食べ放題 (平日4,500円) とステーキの食べ放題、飲み物とカラオケつきの宴会のコースは4,000円ほどから。アラカルトはテーブルチャージ500円 (24時以降は1,000円)。東京の同じ名前のグルテンフリーのカフェとは関係ない。',
  });
}

save();
