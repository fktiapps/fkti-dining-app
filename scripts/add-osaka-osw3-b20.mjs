// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 20.
//   + カフェレストラン セリーナ ホテル日航大阪 (SERENA: Hotel Nikko Osaka's buffet café on Midosuji)
//   + はり重 グリル (Hariju Grill: the 1919 wagyu house's yoshoku grill at the Dotonbori entrance)
//   + 肉バル Muu (Niku Bar Muu: Higashi-Shinsaibashi teppan steak bar)
//   + 肉匠 牛虎 心斎橋店 (Nikushou Gyuko: butcher-run yakiniku with private rooms and Juni-hitoe lunches)
//   - skipped 27005918 元祖串かつ だるま 法善寺店, 27001450 丸福珈琲店 千日前本店, 27100142 抹茶館 なんばウォーク店,
//     27013938 くれおーる 道頓堀店 (chains of 5+), 27001546 たこ家道頓堀くくる 本店 (くくる already in data)
//   Lane: ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 19), in order:
//   27001730, 27005918 (skip), 27001490, 27001450 (skip), 27066290, 27100142 (skip), 27001546 (skip), 27013938 (skip),
//   27122746.
//   None of the four is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Group checks: Hariju Grill is a sister concept (yoshoku grill) of はり重 道頓堀本店 (sukiyaki) and はり重カレーショップ,
//   both in data — the sister-concept ruling applies. Gyuko: Shinsaibashi, Nishinakajima, Sakaisuji Honmachi and Abiko
//   found (Gnavi) — four, none in data; small group. SERENA and Muu: single shops.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27005918', 'Chain (5+): 元祖串かつ だるま has some 15 branches centred on Osaka city (rurubu, https://rurubu.jp/andmore/spot/80027970; 12 shops in January 2015 per FamilyMart, https://www.family.co.jp/company/news_releases/2015/20150421_01.html)');
skip('27001450', 'Chain (5+): 丸福珈琲店 has 28 shops across Kansai, Tokyo, Nagoya and Fukuoka (co-trip, https://co-trip.jp/article/715216)');
skip('27100142', 'Chain (5+): 抹茶館 MACCHA HOUSE (Create Restaurants) has shops in Kyoto Kawaramachi, Kyoto Sannenzaka, Namba Walk, Shiga Ryuo, Shisui, Kanazawa and Asakusa among others (https://www.ryutsuu.biz/store/r103075.html)');
skip('27001546', 'Same-concept branch of a brand already in data: たこ家道頓堀くくる is osaka_takoya_kukuru_souemoncho');
skip('27013938', 'Chain (5+): くれおーる lists ten shops on its own shop page (法善寺前本通り, 角座広場, 本町, 新京橋, 京橋南口, LINKS UMEDA, タグボート大正, 道玄坂1丁目 and more), https://creo-ru.com/creo-ru-store/tenpo');

// ================================================================ カフェレストラン セリーナ ホテル日航大阪
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001730/'; const R = TB + 'dtlrvwlst/';
  const A = day(['06:45', '21:00']); const B = day(['06:45', '21:30']);
  put({
    id: 'osaka_serena_hotel_nikko', name: 'カフェレストラン セリーナ ホテル日航大阪 (SERENA)', category: 'OMNI',
    lat: 34.673854, lng: 135.49971, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information on the buffet labels has been reported; carved roast beef, steak, sashimi and salads are where to start, while breads, pastries, pasta, gratins, ramen and desserts contain wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan options, but no review describes them; the buffets centre on meat, seafood and dairy.',
    hours_raw: 'Daily 06:45–21:00 (last order 20:30); Saturdays and the day before holidays to 21:30 (last order 21:00). Breakfast 06:45–10:00; lunch buffet 11:30–14:30, 90 minutes; dinner buffet 17:30–20:30 on weekdays and from 17:00 at weekends and holidays, 120 minutes; à la carte 11:30–21:00 (Tabelog). A 15% service charge (Tabelog). Hokkaido Fair, 1 September–30 November 2026: weekday lunch ¥6,500, weekend and holiday lunch ¥6,800, weekday dinner ¥8,900 (Tabelog); soft drinks included at lunch, all-you-can-drink alcohol ¥3,300 (September 2026). Reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, WAON, iD and QR (Tabelog). 101 seats and a terrace; non-smoking; wheelchair accessible; free Wi-Fi; hotel parking (Tabelog). Tabelog lists vegan and halal options; not described in reviews.',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: A, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-3-3, ホテル日航大阪 2F, on Midosuji — directly connected to Shinsaibashi Stn',
    cuisine: 'Hotel buffet café for breakfast, lunch and dinner, with chef stations (Tabelog) · Hokkaido Fair to 30 November 2026: Hokkaido specialties such as jingisukan, soup curry and pork rice bowls, a monthly local ramen (Hakodate shio ramen), scallop and Inca no Mezame potato gratin from the live station, seafood bowls you build yourself at weekends, all-you-can-eat Shihoro black-cattle sirloin at weekday dinner, prosciutto and melon (Tabelog; September–October 2026) · roast beef carved at the live kitchen; steaks; spare ribs; lamb, pork and chicken dishes; salmon sashimi; mapo tofu (June–October 2026) · winter crab buffets with boiled crab and crab gratin (December 2025; February 2026) · breakfast with crispy bacon and eggs cooked to order (August 2026) · desserts such as cakes and crème brûlée; breads (2026)',
    website: null, gmaps: gm('セリーナ ホテル日航大阪'), menu_url: null,
    notes: "[Buffet · Shinsaibashi, Hotel Nikko Osaka's café over Midosuji] The all-day buffet café on the second floor of Hotel Nikko Osaka, right on Shinsaibashi Station, with windows over Midosuji. It runs themed fairs: until 30 November 2026 a Hokkaido Fair with jingisukan, soup curry, Hakodate shio ramen, scallop gratin from the chef's station and, at weekend lunch, build-your-own seafood bowls; winter brings crab. The carved roast beef and the desserts, especially the crème brûlée, are regular favourites, and breakfast has eggs cooked to order. Lunch is ¥6,500–¥6,800 plus 15% service. Families come back every year; one diner found dishes slow to be replenished and the mapo tofu not spicy. Open 6:45–21:00.",
    chef_bio: { chef_name: 'Hideki Makihara', roles: ['Head chef of the café restaurant (Tabelog)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a café restaurant inside Hotel Nikko Osaka, directly connected to Shinsaibashi Station, serving hotel-quality buffet dishes day and night with chef-inspired creations; head chef Hideki Makihara.',
      philosophy: null, specialty: 'Themed hotel buffets; carved roast beef.',
      anecdotes: [
        { text: '"The luxurious seafood rice bowl, available only on weekends and public holidays, was a highlight, generously topped with salmon, squid, and turban shell" — September 2026, the Hokkaido Fair lunch, a fourth visit.', source: R + 'B511240703/' },
        { text: '"However, I noticed that some dishes were not replenished frequently." — August 2026, lunch.', source: R + 'B514994109/' },
        { text: '"I especially recommend the crème brûlée!" — August 2026, a family that has come since the children were small.', source: R + 'B84247612/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): カフェレストラン セリーナ ホテル日航大阪、カフェ・ビュッフェ・ケーキ、西心斎橋1-3-3 ホテル日航大阪 2F、Shinsaibashi 駅直結、毎日6:45〜21:00 (L.O.20:30)、土・祝前日は21:30まで、朝食6:45〜10:00、ランチビュッフェ11:30〜14:30 (90分)、ディナービュッフェは平日17:30〜20:30・土日祝17:00〜 (120分)、アラカルト11:30〜21:00、サービス料15%、北海道フェア (9月1日〜11月30日): 平日ランチ6,500円、土日祝ランチ6,800円 (海鮮丼を自分で)、平日ディナー8,900円 (Shihoro の黒毛和牛サーロインの食べ放題)、ジンギスカン、スープカレー、豚丼、月替わりのご当地ラーメン、Hideki Makihara 料理長、御堂筋が見える、101席、禁煙、車椅子可、Wi-Fi、駐車場、ヴィーガン・ハラールのメニューあり。口コミ(2025年12月〜2026年10月): ライブキッチンのローストビーフ、函館塩ラーメン、ホタテと Inca no Mezame のグラタン、ステーキ、スペアリブ、サーモンの刺身、カニのビュッフェ、朝食のカリカリベーコンと卵料理、クレームブリュレ、アルコール飲み放題3,300円、料理の補充が遅い、麻婆豆腐が辛くないという声も。',
      confidence: 'medium', sources: [TB, R + 'B511240703/', R + 'B514994109/', R + 'B515291585/', R + 'B530471435/', R + 'B530780930/', R + 'B531481553/', R + 'B532115107/', R + 'B534747872/', R + 'B535291311/', R + 'B538325262/', R + 'B538408724/', R + 'B84247612/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A hotel restaurant; buffet service. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-3-3 ホテル日航大阪 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with the autumn 2026 fair; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目3番3号 (go) 37m (hotel site); the Tabelog point sits 1.4 m from osaka_oden_sumiyoshi_nishishinsaibashi in the same hotel, so set 5 m south of it (14 m from osaka_les_celebrites_hotel_nikko); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535291311/'],
    price_note: 'Hokkaido Fair buffet prices from Tabelog (1 September–30 November 2026), tax included, plus 15% service; drinks from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Hokkaido Fair weekday lunch buffet', '¥6,500', 'Buffet', 'ask', 'ask', 'Tabelog; to 30 November 2026.', 'lunch_weekday'),
      it('', '', 'Hokkaido Fair weekend and holiday lunch buffet (with seafood bowls)', '¥6,800', 'Buffet', 'ask', 'ask', 'Tabelog; to 30 November 2026.', 'lunch_weekend'),
      it('', '', 'Hokkaido Fair weekday dinner buffet (Shihoro sirloin)', '¥8,900', 'Buffet', 'ask', 'ask', 'Tabelog; to 30 November 2026.', 'dinner_weekday'),
      it('', '', 'All-you-can-drink alcohol add-on', '¥3,300', 'Drinks', 'ask', 'ask', 'September 2026.', 'alcohol'),
    ] }, {
    cuisine: '朝、昼、夜のホテルのビュッフェカフェで、シェフのライブコーナーも (食べログ)・2026年11月30日までの北海道フェア: ジンギスカン、スープカレー、豚丼、月替わりのご当地ラーメン (函館塩ラーメン)、ライブコーナーのホタテと Inca no Mezame のグラタン、週末の昼は自分で作る海鮮丼、平日の夜は Shihoro の黒毛和牛サーロインの食べ放題、生ハムメロン (食べログ、2026年9〜10月)・ライブキッチンで切り分けるローストビーフ、ステーキ、スペアリブ、ラム・豚・鶏の料理、サーモンの刺身、麻婆豆腐 (2026年6〜10月)・冬はゆでガニやカニグラタンのカニのビュッフェ (2025年12月、2026年2月)・朝食はカリカリのベーコンと目の前で作る卵料理 (2026年8月)・ケーキやクレームブリュレなどのデザート、パン (2026年)',
    neighborhood: '西心斎橋1-3-3 ホテル日航大阪 2F、御堂筋沿い。Shinsaibashi 駅直結',
    gf_detail: '要確認。ビュッフェのグルテン表示の情報なし。切り分けるローストビーフ、ステーキ、刺身、サラダから確認を。パン、ペストリー、パスタ、グラタン、ラーメン、デザートは小麦を含む。',
    vegan_detail: '要確認。食べログにヴィーガンメニューの記載があるが、口コミでは書かれていない。ビュッフェは肉、魚介、乳製品が中心。',
    notes: '[ビュッフェ・心斎橋、御堂筋を見下ろすホテル日航大阪のカフェ] Shinsaibashi 駅直結のホテル日航大阪2階にある、朝から夜までのビュッフェカフェで、窓の外は御堂筋。テーマのフェアがあり、2026年11月30日までは北海道フェアでジンギスカン、スープカレー、函館塩ラーメン、ライブコーナーのホタテのグラタン、週末の昼は自分で作る海鮮丼。冬はカニ。切り分けるローストビーフとデザート、とくにクレームブリュレは定番の人気で、朝食は目の前で作る卵料理。ランチは6,500〜6,800円にサービス料15%。毎年訪れる家族もいる一方、料理の補充が遅い、麻婆豆腐が辛くないという声も。6時45分から21時まで。',
  });
}

// ================================================================ はり重 グリル
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001490/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'osaka_hariju_grill_dotonbori', name: 'はり重 グリル (Hariju Grill)', category: 'OMNI',
    lat: 34.668595, lng: 135.500655, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The steaks come with a demi-glace simmered for a week in beef-tendon broth (Tabelog), and demi-glace is usually made with flour; beef cutlet, fried shrimp, stew and hayashi rice contain wheat. Plain steak without sauce is the place to ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yoshoku restaurant.',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30) and dinner 17:00–21:00 (last order 20:00); closed Tuesdays, but open on Tuesdays that are holidays or the day before a holiday, and every day in December (Tabelog). Lunch A until 14:30, with a choice of corn potage or onion soup and rice or bread (October 2026). Reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 58 seats; non-smoking; takeaway (Tabelog). Prices have risen, a September 2026 regular notes.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-9-17, in the Hariju building at the entrance to Dotonbori — 3 min from Namba Stn (Midosuji Line)',
    cuisine: 'Showa-style yoshoku from a kuroge wagyu specialist that uses only heifers (Tabelog) · steak courses with a demi-glace simmered for a week in beef-tendon broth, and roast beef: strip loin ¥11,000, filet ¥12,100, both ¥13,200 (Tabelog) · lunch: Lunch A of beef sauté, fried shrimp, ham, potato salad and salad with onion soup or corn potage; the Special Lunch of strip-loin steak and fried shrimp (August–October 2026) · beef cutlet (from tenderloin), hamburg steak, beef stew, tongue stew, hayashi rice (Tabelog; 2026) · a sukiyaki gozen; the Matsukado bento (September–October 2026)',
    website: null, gmaps: gm('はり重 グリル 道頓堀'), menu_url: null,
    notes: "[Yoshoku · Dotonbori, the wagyu house's Showa-era grill] The Western-style dining room of Hariju, the 1919 kuroge-wagyu house at the Dotonbori entrance, next to its sukiyaki rooms and curry shop. It is old-school yoshoku made with heifer wagyu: a beef cutlet from tenderloin, hamburg steak, beef or tongue stew and hayashi rice, or lunch plates of thin steak and fried shrimp with onion soup. Diners in 2026 loved the beef cutlet, tongue stew and retro room; others found the steak thin, tough or lukewarm for the price, a beef stew that tasted thawed, or a staff member brusque. Closed Tuesdays (except holidays and December).",
    chef_bio: { chef_name: null, roles: ['Kitchen staff (unnamed); run by Hariju'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a Western-style restaurant run by Hariju, the kuroge wagyu specialist in Dotonbori, established in 1919; it uses only female kuroge wagyu, and its traditional dishes have long been loved by all ages and nationalities. The group\'s sukiyaki house (osaka_harijyu_dotonbori) and curry shop (osaka_harijyu_curry_shop_dotonbori) are in data; a September 2026 diner also buys bento at the butcher counter.',
      philosophy: null, specialty: 'Beef cutlet; heifer-wagyu steak with week-long demi-glace.',
      anecdotes: [
        { text: '"The beef cutlet made from tenderloin was the best ever! So tender it melted in my mouth" — October 2026, the Special Lunch, a first visit in about 30 years.', source: R + 'B537339925/' },
        { text: '"The plate, reminiscent of a classic Western-style restaurant, included fried shrimp, fresh vegetables, ham, potato salad, and beef sauté." — October 2026, Lunch A.', source: R + 'B537896874/' },
        { text: '"The steak was tough for the price, and while it wasn\'t cold, it could have been hotter." — September 2026, the steak course.', source: R + 'B535499376/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): はり重 グリル (ハリジュウ グリル)、洋食・ステーキ・ハンバーグ、道頓堀1-9-17、Namba 駅から徒歩3分、11:30〜15:00 (L.O.14:30)・17:00〜21:00 (L.O.20:00)、火曜休み (祝日・祝前日・12月は営業)、予約可、カード・PayPay可、電子マネー不可、58席、禁煙、テイクアウト、1919年創業の黒毛和牛専門店はり重が営む洋食店、黒毛和牛の雌牛だけを使う、牛すじのスープで1週間煮込んだデミグラスソースのステーキとローストビーフのコース (ストリップロイン11,000円、フィレ12,100円、両方13,200円)、ビーフカツ、ハンバーグ、ビーフシチュー。口コミ(2026年8月〜10月): ランチA (牛ソテー、エビフライ、ハム、ポテトサラダ、オニオンスープかコーンポタージュ)、スペシャルランチ (ストリップロインのステーキとエビフライ)、ヒレのビーフカツ、タンシチュー、ハヤシライス、すき焼き御膳、Matsukado bento、レトロな店内、値上がり、ステーキが薄くて固い・ぬるい、ビーフシチューが解凍したような味、接客が物足りないという声も。',
      confidence: 'medium', sources: [TB, R + 'B504384429/', R + 'B534072984/', R + 'B535118506/', R + 'B535199064/', R + 'B535346830/', R + 'B535499376/', R + 'B535563591/', R + 'B537157799/', R + 'B537339925/', R + 'B537380881/', R + 'B537896874/', R + 'B61004771/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Long loved by guests of all nationalities (Tabelog). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-9-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目9番17号 (go) 15m; the Tabelog point is identical to osaka_harijyu_dotonbori (same building), so set 5 m north of it (15 m from osaka_harijyu_curry_shop_dotonbori); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (read November 2026), tax included; no à la carte prices found.', last_checked: TODAY, items: [
      it('', '', 'Wagyu strip loin steak course', '¥11,000', 'Courses', 'ask', 'no', 'Tabelog.', 'striploin_course'),
      it('', '', 'Wagyu filet steak course', '¥12,100', 'Courses', 'ask', 'no', 'Tabelog.', 'filet_course'),
      it('', '', 'Beef cutlet (tenderloin)', '', 'Yoshoku', 'no', 'no', 'October 2026.', 'beef_cutlet'),
      it('', '', 'Lunch A: beef sauté, fried shrimp, salad, soup', '', 'Lunch', 'no', 'no', 'September–October 2026.', 'lunch_a'),
    ] }, {
    cuisine: '雌牛だけを使う黒毛和牛専門店の昭和の洋食 (食べログ)・牛すじのスープで1週間煮込んだデミグラスソースのステーキとローストビーフのコース: ストリップロイン11,000円、フィレ12,100円、両方13,200円 (食べログ)・ランチ: 牛ソテー、エビフライ、ハム、ポテトサラダ、サラダにオニオンスープかコーンポタージュのランチA、ストリップロインのステーキとエビフライのスペシャルランチ (2026年8〜10月)・ヒレのビーフカツ、ハンバーグ、ビーフシチュー、タンシチュー、ハヤシライス (食べログ、2026年)・すき焼き御膳、Matsukado bento (2026年9〜10月)',
    neighborhood: '道頓堀1-9-17、道頓堀の入口のはり重のビル。Namba 駅 (Midosuji Line) から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。ステーキは牛すじのスープで1週間煮込んだデミグラスソース (食べログ) で、デミグラスはふつう小麦粉を使う。ビーフカツ、エビフライ、シチュー、ハヤシライスは小麦を含む。ソースなしのステーキから確認を。',
    vegan_detail: 'ヴィーガンではありません。和牛の洋食店。',
    notes: '[洋食・道頓堀、和牛の老舗の昭和のグリル] 道頓堀の入口、1919年創業の黒毛和牛の老舗はり重の洋食の店で、すき焼きの店とカレーショップの隣。雌牛の和牛で作る昔ながらの洋食: ヒレのビーフカツ、ハンバーグ、ビーフシチューやタンシチュー、ハヤシライス、昼は薄いステーキとエビフライにオニオンスープのランチ。2026年の口コミではビーフカツ、タンシチュー、レトロな店内が好評で、値段のわりにステーキが薄く固くぬるい、ビーフシチューが解凍したような味、スタッフの対応がそっけないという声も。火曜休み (祝日と12月は営業)。',
  });
}

// ================================================================ 肉バル Muu
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27066290/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '24:00']);
  put({
    id: 'osaka_niku_bar_muu_higashishinsaibashi', name: '肉バル Muu (Niku Bar Muu)', category: 'OMNI',
    lat: 34.674294, lng: 135.503433, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Teppan steaks by weight are the plainest; the garlic steak sauce, seared yukhoe and hamburg steak are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a steak and meat bar; lunch sets come with oxtail soup.',
    hours_raw: 'Tue–Sun 12:00–24:00: lunch to last order 16:00 (phone bookings only for lunch; lunch may be suspended on some days), dinner 16:00–24:00 (last order 23:00); closed Mondays, with an occasional long weekend in 31-day months; two hours when busy (Tabelog). Lunch payment in cash or PayPay (December 2025). Reservations; the shop may phone to confirm (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and QR including Alipay; no e-money (Tabelog). 30 seats: a counter of 6 and six tables for four, with high chairs (Tabelog; November 2025); smoking allowed, so no one under 20 (Tabelog). Surprise steaks for birthdays (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-13-23, 日宝イルストリート 1F, at Mikiubashi-suji and Unagidani Minami-dori (red awning) — 3 min from Shinsaibashi and Nagahoribashi Stns',
    cuisine: 'Teppan steak and meat dishes with wine, for adults (Tabelog) · thick Angus beef outside skirt and wagyu steaks on the teppan, ordered by weight: tenderloin, sirloin cap, skirt (Tabelog; January–May 2026) · seared kuroge wagyu yukhoe finished in front of you; a meat tasting plate; anchovy potato salad; caprese; cheese platter (2025–2026) · lunch: outside skirt steak set, beef tongue set, oxtail soup set ¥1,200 with rice, Korean nori, salad and five small sides, black-wagyu hamburg steak cooked sous-vide (2025–2026) · wine chosen to go with meat; secret menu items posted on social media (Tabelog; July 2026)',
    website: null, gmaps: gm('肉バル Muu 東心斎橋'), menu_url: null,
    notes: "[Steak · Higashi-Shinsaibashi, a teppan meat bar under a red awning] A small grown-up meat bar on a Higashi-Shinsaibashi corner, hung with photos of the mountains the owner has climbed, grilling thick Angus outside skirt and wagyu by weight on the teppan, with seared wagyu yukhoe made in front of you and a good wine list. Lunch brings steak and tongue sets or an oxtail soup set for about ¥1,200 with five small sides. Regulars like the friendly owner and the secret dishes announced on social media; one found it cold in winter, another the high chairs wobbly after wine. Smoking allowed (adults only); closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and chef'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a meat stand for adults in Higashi-Shinsaibashi; the interior shows photos of mountains the owner has climbed, and the owner welcomes talk about mountains and running. 2026 reviews describe a calm chef and an energetic owner, liked by local regulars.',
      philosophy: 'Delicious meat without worrying about smell or smoke (Tabelog).', specialty: 'Teppan Angus outside skirt; seared wagyu yukhoe.',
      anecdotes: [
        { text: '"The chef prepares dishes with a calm demeanor while the energetic owner runs around the restaurant, ensuring everything runs smoothly." — July 2026, starting with the seared yukhoe.', source: R + 'B531776983/' },
        { text: '"The steak can be ordered by weight, making it a great option for those who want to enjoy a little bit of everything." — May 2026, after 22:00.', source: R + 'B528282137/' },
        { text: '"The restaurant was a bit too cold, but I guess that\'s just how it is in Osaka during winter." — January 2026, a group of five.', source: R + 'B521251841/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 肉バル Muu、ステーキ・肉バル・鉄板焼き、東心斎橋1-13-23 日宝イルストリート 1F、Shinsaibashi 駅・Nagahoribashi 駅から徒歩3分、赤いテントが目印、火〜日 12:00〜24:00 (ランチは L.O.16:00、ディナー16:00〜24:00 L.O.23:00)、月曜休み、混雑時は2時間、カード・QR可、電子マネー不可、30席 (カウンター6、4名テーブル6)、喫煙可のため20歳未満は入店不可、記念日のサプライズステーキ、鉄板で焼く厚切りのアンガス牛ハラミと和牛ステーキ、目の前で炙る黒毛和牛のユッケ、肉に合うワイン、店主が登った山の写真。口コミ(2025年9月〜2026年10月): 量り売りのステーキ (ヒレ、sirloin cap、ハラミ)、炙りユッケ、肉の食べ比べ、アンチョビポテサラ、ランチのハラミステーキ定食、牛タン、テールスープ定食1,200円、真空低温調理の黒毛和牛ハンバーグ、SNS の裏メニュー、店主が人気、店内が寒い、椅子が不安定という声も。',
      confidence: 'medium', sources: [TB, R + 'B485076734/', R + 'B513502267/', R + 'B516506875/', R + 'B519006345/', R + 'B520887211/', R + 'B521144444/', R + 'B521251841/', R + 'B522404711/', R + 'B528282137/', R + 'B529511094/', R + 'B531776983/', R + 'B537571936/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Alipay accepted (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-23 日宝イルストリート 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目13番23号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485076734/'],
    price_note: 'One lunch price from a December 2025 review; steaks priced by weight, no menu online.', last_checked: TODAY, items: [
      it('', '', 'Oxtail soup lunch set', '¥1,200', 'Lunch', 'ask', 'no', 'December 2025.', 'tail_soup'),
      it('', '', 'Outside skirt steak lunch', '', 'Lunch', 'ask', 'no', '2025–2026.', 'harami_lunch'),
      it('', '', 'Seared kuroge wagyu yukhoe', '', 'Meat', 'ask', 'no', '2025–2026.', 'aburi_yukhoe'),
      it('', '', 'Teppan steak by weight (tenderloin, sirloin cap, skirt)', '', 'Steak', 'ask', 'no', 'January–May 2026.', 'steak'),
    ] }, {
    cuisine: '大人のための鉄板のステーキと肉料理とワイン (食べログ)・鉄板で焼く厚切りのアンガス牛ハラミと和牛ステーキを量り売りで: ヒレ、sirloin cap、ハラミ (食べログ、2026年1〜5月)・目の前で仕上げる黒毛和牛の炙りユッケ、肉の食べ比べ、アンチョビのポテトサラダ、カプレーゼ、チーズの盛り合わせ (2025〜2026年)・ランチ: ハラミステーキ定食、牛タン定食、ご飯、韓国海苔、サラダ、5種の小鉢つきのテールスープ定食1,200円、真空低温調理の黒毛和牛ハンバーグ (2025〜2026年)・肉に合うワイン、SNS で知らせる裏メニュー (食べログ、2026年7月)',
    neighborhood: '東心斎橋1-13-23 日宝イルストリート 1F、Mikiubashi-suji と Unagidani Minami-dori の角 (赤いテント)。Shinsaibashi・Nagahoribashi 駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。量り売りの鉄板ステーキがいちばんシンプル。にんにくのステーキソース、炙りユッケ、ハンバーグの中身は書かれていない。',
    vegan_detail: 'ヴィーガンではありません。ステーキと肉のバルで、ランチにはテールスープがつく。',
    notes: '[ステーキ・東心斎橋、赤いテントの鉄板の肉バル] 東心斎橋の角にある小さな大人の肉バルで、店主が登った山の写真が飾られている。厚切りのアンガス牛ハラミや和牛を量り売りで鉄板で焼き、目の前で仕上げる和牛の炙りユッケ、ワインも充実。昼はステーキや牛タンの定食、5種の小鉢つきのテールスープ定食が1,200円ほど。常連は気さくな店主と SNS で告知される裏メニューを楽しみにしていて、冬は店内が寒い、ワインのあとは高い椅子が不安定という声も。喫煙可 (20歳以上のみ)、月曜休み。',
  });
}

// ================================================================ 肉匠 牛虎 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27122746/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:30', '15:00'], ['17:00', '24:00']); const SU = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_nikushou_gyuko_shinsaibashi', name: '肉匠 牛虎 心斎橋店 (Nikushou Gyuko Shinsaibashi ten)', category: 'OMNI',
    lat: 34.675762, lng: 135.502743, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Salted cuts and sashimi are the plainest; marinated cuts, ponzu, yukke sauce, the bread gozen and bibimbap are not described or contain wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a butcher-run yakiniku restaurant.',
    hours_raw: 'Mon–Sat 11:30–15:00 (last order 14:30) and 17:00–24:00 (last order 23:00); Sun 11:30–15:00 and 17:00–23:00 (last order 22:30); irregular closures (Tabelog). Reservations recommended; online bookings are confirmed by phone; same-day no-shows may be charged (Tabelog). Courses with two-hour all-you-can-drink ¥7,000, ¥8,000 and ¥10,500 (Tabelog). Lunch with free rice refills and coffee (August–September 2026); app members get free ice cream (August 2026). Cards (VISA, Master, AMEX, Diners) and PayPay; no e-money; no service charge (Tabelog). 80 seats, private rooms for 2–6 and rooms for groups of 20 or more, some tatami; smoking allowed except at lunch; free Wi-Fi (Tabelog; September 2026). Down a flight of stairs (September 2026).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: A, 5: A, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Senba 3-4-22, behind the former Tokyu Hands — 1 min from exit North 7 of Crysta Nagahori, 5 min from Shinsaibashi Stn',
    cuisine: 'Yakiniku of meat direct from the group\'s butcher shop, over charcoal (Tabelog; August 2026) · courses: Saiga with a tasting of three outside-skirt cuts and vegetable-wrapped top round ¥7,000; with Kurashita roast and special belly ¥8,000; premium with rare cuts ¥10,500, all with two hours of drinks (Tabelog) · meat sushi, beef tongue sashimi, thick-cut tongue, sirloin, haneshita, tripe sashimi, thin top blade with grated daikon and ponzu (September–October 2026) · lunch: the "Juni-hitoe" lunch of many small dishes with a main of thick-cut tongue with Ranou egg and dashi tororo or kuroge wagyu top blade with yukke sauce, ¥2,530 (August–October 2026); a five-rare-cuts lunch; outside skirt rice bowl; yakiniku gozen; bibimbap; a bread gozen (September 2026) · makgeolli, sake and wine (Tabelog; October 2026)',
    website: null, gmaps: gm('肉匠 牛虎 心斎橋店'), menu_url: null,
    notes: "[Yakiniku · Minami-Senba, butcher-run yakiniku with private rooms] A basement yakiniku in Minami-Senba run with a butcher shop, with private and tatami rooms and charcoal grills, one of a few Gyuko shops. Evenings bring courses with two hours of drinks from ¥7,000: tongue sashimi, meat sushi, thick tongue, three kinds of outside skirt. Lunch is the Instagram favourite: the 'Juni-hitoe' set of many small dishes around thick-cut tongue or wagyu top blade (¥2,530), with free rice refills and coffee. Diners in 2026 praise the meat for the price; one found a lunch slow (about 25 minutes), another a rice bowl less impressive than the photos. Smoking allowed at night.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed); meat from the group\'s butcher shop'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: safe, high-quality meat direct from its own butcher shop; fully private and semi-private rooms for groups up to 63. Gnavi lists other Gyuko shops in Nishinakajima, Sakaisuji Honmachi and Abiko.',
      philosophy: null, specialty: 'Juni-hitoe lunch; tongue; outside skirt.',
      anecdotes: [
        { text: '"My favorite is the thinly sliced Top Blade with grated daikon and ponzu sauce." — September 2026, a second visit.', source: R + 'B464076385/' },
        { text: '"At JPY 2,530, it offers great value!" — September 2026, the Juni-hitoe lunch.', source: R + 'B536718687/' },
        { text: '"It took a little while to be served, about 25 minutes." — October 2026, the Juni-hitoe lunch with top blade.', source: R + 'B537008405/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 肉匠 牛虎 心斎橋店、焼肉・ホルモン・居酒屋、南船場3-4-22、Shinsaibashi 駅から徒歩5分、Crysta Nagahori の北7出口から1分、旧 Tokyu Hands の裏、月〜土 11:30〜15:00 (L.O.14:30)・17:00〜24:00 (L.O.23:00)、日 11:30〜15:00・17:00〜23:00 (L.O.22:30)、不定休、予約推奨 (ネット予約は電話で確認)、2時間飲み放題つきの Saiga コース7,000円・8,000円・10,500円 (外ハラミ3種の食べ比べ、赤身の野菜巻き焼き、クラシタロース、特上バラ、希少部位)、カード・PayPay可、電子マネー不可、サービス料なし、80席、個室 (2〜6名)、20名以上の大部屋、ランチ以外は喫煙可、Wi-Fi、精肉店直送の安心で上質な肉。口コミ(2026年8月〜10月): 肉寿司、牛タン刺し、厚切りタン、サーロイン、ハネシタ、センマイ刺し、top blade のおろしポン酢、Juni-hitoe ランチ2,530円 (厚切りタンに Ranou の卵と出汁とろろ、黒毛和牛の top blade のユッケだれ)、希少部位5種のランチ、ハラミ丼、パン御膳、ご飯のおかわり、コーヒーつき、アプリでアイス、地下へ階段、提供に25分、写真ほどではないという声も。',
      confidence: 'medium', sources: [TB, 'https://r.gnavi.co.jp/e17h74xh0000/', R + 'B464076385/', R + 'B527771038/', R + 'B534288417/', R + 'B534512769/', R + 'B534741950/', R + 'B534932439/', R + 'B535524967/', R + 'B536621472/', R + 'B536718687/', R + 'B537008405/', R + 'B537174230/', R + 'B538050170/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the cuts (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-4-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目4番22号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536718687/'],
    price_note: 'Course prices from Tabelog (read November 2026), tax included; the lunch price from a September 2026 review.', last_checked: TODAY, items: [
      it('', 'Juni-hitoe', 'Juni-hitoe lunch (many small dishes, tongue or top blade)', '¥2,530', 'Lunch', 'ask', 'no', 'September 2026.', 'juni_hitoe'),
      it('', 'Saiga', 'Saiga course (basic) with two-hour all-you-can-drink', '¥7,000', 'Courses', 'ask', 'no', 'Tabelog.', 'saiga_basic'),
      it('', 'Saiga', 'Saiga course (standard) with two-hour all-you-can-drink', '¥8,000', 'Courses', 'ask', 'no', 'Tabelog.', 'saiga_standard'),
      it('', 'Saiga', 'Saiga course (premium) with two-hour all-you-can-drink', '¥10,500', 'Courses', 'ask', 'no', 'Tabelog.', 'saiga_premium'),
    ] }, {
    cuisine: 'グループの精肉店から直送の肉の炭火焼肉 (食べログ、2026年8月)・コース: 外ハラミ3種の食べ比べと赤身の野菜巻き焼きの Saiga 7,000円、クラシタロースと特上バラの8,000円、希少部位のプレミアム10,500円、いずれも2時間飲み放題つき (食べログ)・肉寿司、牛タン刺し、厚切りタン、サーロイン、ハネシタ、センマイ刺し、top blade のおろしポン酢 (2026年9〜10月)・ランチ: 厚切りタンに Ranou の卵と出汁とろろか、黒毛和牛の top blade のユッケだれをメインに小鉢がたくさん並ぶ「Juni-hitoe」ランチ2,530円 (2026年8〜10月)、希少部位5種のランチ、ハラミ丼、焼肉御膳、ビビンバ、パン御膳 (2026年9月)・マッコリ、日本酒、ワイン (食べログ、2026年10月)',
    neighborhood: '南船場3-4-22、旧 Tokyu Hands の裏。Crysta Nagahori 北7出口から1分、Shinsaibashi 駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。塩の肉と刺しがいちばんシンプル。タレの肉、ポン酢、ユッケだれ、パン御膳、ビビンバは中身が書かれていないか小麦を含む。',
    vegan_detail: 'ヴィーガンではありません。精肉店直営の焼肉店。',
    notes: '[焼肉・南船場、精肉店直営の個室焼肉] 南船場の地下にある精肉店直営の焼肉店で、個室や座敷、炭火の網。何店かある牛虎の1軒。夜は2時間飲み放題つきのコースが7,000円から: 牛タン刺し、肉寿司、厚切りタン、外ハラミ3種。昼はインスタで人気の「Juni-hitoe」ランチで、厚切りタンか和牛の top blade のまわりに小鉢がたくさん (2,530円)、ご飯のおかわりとコーヒーつき。2026年の口コミでは値段のわりに肉がいいと好評で、ランチに25分ほどかかった、丼が写真ほどではなかったという声も。夜は喫煙可。',
  });
}

save();
