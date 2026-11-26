// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 97.
//   Queue run from the osw2 worktree, 2026-11-26. Core and notable tiers have nothing left in this lane, so rest tier,
//   nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance). Shops fetched by the worker from
//   Tabelog /en/ with 3 s between requests (CHASEN's folder was fetched last round).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   + French cafe CHASEN 高台寺 — matcha-sweets café with pizza and pasta by the Kodaiji parking lot, opened 4 October 2021
//     (Tabelog). Held last round for its group size: the brand site (kyoto-chasen.jimdofree.com, 会社概要) names the operator
//     株式会社フーズフロンティア and lists only the Kyoto Station shop; a 2024 article (japan-style.jp) calls Kodaiji the
//     brand's third shop; an undated blog (ameblo) marks the Kyoto Station shop closed and mentions one in Kumamoto.
//     A small group (2–3 shops) → drafted and flagged.
//   + ageru. — Western wine dining in a renovated house off Shijo, opened 11 June 2026 (Tabelog); the fourth shop of
//     株式会社Atari (kyoto-atari.co lists four differently named Kyoto shops; 酒呑気 びんご and 酒ノみつぼし are in data).
//     Small local group, different concept → drafted and flagged.
//   + ラ・パパイヤベール (la papaye verte; both forms on the official site lapapayeverte.jp) — Vietnamese at Karasuma-Oike,
//     a one-person kitchen and floor famous for near-silent service
//   + ベーグル君とおでんちゃん — rice-flour bagels and "French" oden, opened 1 May 2025 (Tabelog); kana/kanji only (no source romaji)
//   Skip: 京小宿・室町 ゆとね (meals only with an overnight stay); ザ・リッツ・カールトン京都 (hotel-wide record in data).
//   Not drafted, left for the integrator (no skip line): 横浜天下鳥 四条新町店 (26016261, chain size not found) and
//   京料理 濱登久 ハートンホテル京都店 (26002905, hotel-group size not settled) — see the report.
//   None of the drafted shops is in data/kyoto.json (main, hidden records included): grep by id, name and address.
//   Pins: Tabelog /en/ point for each shop; not pin-checked by the worker (integrator pin-checks).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-97');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034633', 'meals only with an overnight stay (Greg 2026-11-05): 京小宿・室町 ゆとね is a small inn whose meal page (m-yutone.com/meal/) offers its kaiseki dinners and breakfast only as stay plans; all eight Tabelog reviews are from overnight guests');
skip('26023713', 'covered by an existing record: ザ・リッツ・カールトン京都 is already in data/kyoto.json as vm_the_ritz_carlton_kyoto, whose record covers the hotel’s dining; also a big-chain hotel (Greg 2026-11-08)');

// ================================================================ French cafe CHASEN 高台寺
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036751/'; const R = TB + 'dtlrvwlst/';
  const BRAND = 'https://kyoto-chasen.jimdofree.com/'; const CO = BRAND + '%E4%BC%9A%E7%A4%BE%E6%A6%82%E8%A6%81/';
  const JS = 'https://www.japan-style.jp/blog/journal/151/'; const KK = 'https://kyotokurasu.jp/gourmet/60763';
  const AME = 'https://ameblo.jp/menma8250/entry-12803190277.html';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_french_cafe_chasen_kodaiji', name: 'French cafe CHASEN 高台寺', category: 'OMNI',
    lat: 34.99961373787964, lng: 135.78079721029326, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pizzas, pastas, matcha tiramisu and the macaron-style 茶カロ cakes are the core of the menu (reviews; Kyoto Kurasu, November 2024). No gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the matcha sweets use cream, ice cream and tiramisu (reviews), and the meals include fried chicken and Saikyo-grilled fish. A vegetable pizza was served with a little cheese (November 2025). No vegan information is published.',
    hours_raw: 'Daily 11:00–21:00 (Tabelog). Two 2024 articles give 11:00–21:30 (last order 20:30), closing days not fixed (japan-style.jp, April 2024; Kyoto Kurasu, November 2024). Tabelog says no reservations; a June 2025 reviewer says bookings can be made by phone. Cards (AMEX), e-money and QR payments accepted (Tabelog). 50 seats (Tabelog): 7 counter seats by the entrance and about 40 table seats further in, the window seats the most popular (Kyoto Kurasu, November 2024). Non-smoking (Tabelog). Orders by QR code (May 2025 review). Next to a souvenir shop by the Kodaiji parking lot; the paid Kodaiji car park is next door (Tabelog; May 2025 review). The way up is through the parking lot and up some stairs (December 2025 review). Opened 4 October 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kodaiji',
    cuisine: 'Matcha sweets café with pizza and pasta (Tabelog; reviews) · お抹茶玉手箱スイーツ, an assortment of matcha sweets in a paulownia box that releases dry-ice smoke when opened, ¥1,980 (Kyoto Kurasu, November 2024; June 2025 review, tax included) · 茶カロ macaron-style cakes in nine flavours, e.g. lemon cream ¥418 and matcha Mont Blanc ¥506 (Kyoto Kurasu, November 2024) · matcha parfait, matcha tiramisu, matcha jelly with shiratama, fu dengaku; grilled seasonal fish, a Chasen margherita pizza and a mushroom soy-sauce pasta for lunch and dinner (japan-style.jp, April 2024) · pizza and the treasure box (April 2025) · vegetable pizza with iced coffee (November 2025) · matcha parfait with blended coffee (December 2025) · fried chicken plate (April 2026) · tomato, eggplant and mozzarella pasta; Saikyo-grilled fish set meal (May 2026) · a parfait said to be 30 cm tall with crisp fried somen (July 2026) · Uji hojicha tiramisu; cream matcha jelly with matcha ice cream and mochi (August 2026) · matcha tiramisu set with iced coffee (October 2026)',
    website: null, gmaps: gm('French cafe CHASEN 高台寺'), menu_url: null,
    notes: '[Café · Kodaiji, matcha sweets with a view] A large café beside the Kodaiji parking lot, with windows over the Higashiyama rooftops and the Yasaka Pagoda: the smoking paulownia "treasure box" of matcha sweets (¥1,980), matcha parfaits and tiramisu, plus pizzas, pastas and set meals, open to 21:00. Part of the small Chasen matcha-sweets brand. Orders by QR code; cards accepted.',
    chef_bio: { chef_name: null, roles: ['Operator: 株式会社フーズフロンティア (brand site)'], origin: null,
      background: 'The brand site of 茶筅 -Chasen- names the operating company 株式会社フーズフロンティア, with the representative 山崎 富紀 and an office in Kamigyo Ward, Kyoto, and lists one shop, at the Kyoto Station Building 10th floor in the ramen alley (brand site, undated). A 2024 article calls French cafe CHASEN 高台寺 the third shop of 茶筅, known for its matcha treasure box (japan-style.jp, April 2024). An undated blog whose title marks the Kyoto Station 茶筅 as closed says the shop is run by 株式会社フーズフロンティア and that 茶筅 also has a shop in Kumamoto (ameblo). The brand site says the matcha tiramisu uses matcha from 吉田銘茶園 of Uji. Tabelog notes that the premises were until recently a coffee shop. Opened 4 October 2021 (Tabelog).',
      philosophy: null,
      specialty: 'お抹茶玉手箱スイーツ (matcha treasure box); matcha parfait and tiramisu.',
      anecdotes: [
        { text: 'A June 2025 visitor opened the treasure box to a cloud of steam like a sea of clouds, and found the café surprisingly uncrowded at 15:00 on a holiday, as if few people know it is there.', source: R + 'B509860672/' },
        { text: 'A December 2025 diner found the way in tricky, up through the Kodaiji parking lot and a flight of stairs, but the stairs gave a sweeping view of the Yasaka Pagoda and even Kyoto Station.', source: R + 'B519135390/' },
        { text: 'In May 2025 a diner ordered a pasta by QR code and found it good, but not served piping hot, so it cooled while eating.', source: R + 'B508211510/' },
        { text: 'A May 2026 diner came back for a late weekday lunch with a daughter, had pasta and a Saikyo-grilled fish set, and finished with the dry-ice treasure box of matcha parfait and tiramisu.', source: R + 'B528520154/' },
      ],
      japanese_sources_summary: 'ブランドサイト (茶筅 -Chasen-、会社概要): 店舗名 茶筅 -Chasen-、運営会社名 株式会社フーズフロンティア、代表者名 山崎 富紀、京都府京都市上京区の所在地、店舗紹介は京都駅ビル10F 京都拉麺小路内の1店舗のみ、お抹茶ティラミスに宇治の吉田銘茶園の抹茶。japan-style.jp (2024年4月): お抹茶玉手箱で話題の「茶筅」の3号店、高台寺境内、大きな窓から八坂の塔、11:00〜21:30 (L.O.20:30)、不定休。京都くらす (2024年11月): お抹茶玉手箱スイーツ1,980円、茶カロ9種類 (レモンクリーム418円、抹茶モンブラン506円)、入口近くにカウンター7席、奥に約40席のテーブル席、二寧坂など東山の景色が見える窓際の席が人気。ブログ (ameblo、日付なし): 京都駅の茶筅は閉店と表記、株式会社フーズフロンティアが運営、熊本にも店舗。食べログ (英語版): カフェ、フレンチ、予約不可、毎日11:00〜21:00、カード (AMEX)・電子マネー・QRコード決済可、50席、全席禁煙、隣に高台寺の有料駐車場、オープン日2021年10月4日。口コミ (2025〜2026年、英語): QRコードで注文 (2025年5月)、玉手箱スイーツ1,980円 (2025年6月)、駐車場から階段を上る、八坂の塔の眺め (2025年12月)、ドライアイスの玉手箱 (2026年5月、6月)。',
      confidence: 'medium', sources: [TB, BRAND, CO, JS, KK, AME, R + 'B505628786/', R + 'B508211510/', R + 'B509860672/', R + 'B516353792/', R + 'B518199878/', R + 'B519135390/', R + 'B527023580/', R + 'B528520154/', R + 'B530129276/', R + 'B531115424/', R + 'B533729908/', R + 'B537622174/'] },
    cultural_comfort: { level: 'japanese', note: 'Orders by QR code (May 2025); no English menu or English-speaking staff mentioned in any source.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原町526',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (no closure badge) with reviews dated through October 2026; no shop website (the brand site lists only the Kyoto Station shop).' },
    pin_source: `Tabelog ${TB} (34.999614, 135.780797); nearest pins in data about 64–71 m (Park Hyatt, 京大和, 京うどん 維新); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [KK, R + 'B509860672/'],
    price_note: 'Prices from Kyoto Kurasu (November 2024) and a June 2025 review.', last_checked: TODAY, items: [
      it('お抹茶玉手箱スイーツ', '', 'Matcha treasure box: assorted matcha sweets in a smoking paulownia box', '¥1,980', 'Sweets', 'no', 'no', 'Kyoto Kurasu, November 2024; June 2025 review (tax included).', 'tamatebako'),
      it('', '', '茶カロ macaron-style cake, lemon cream', '¥418', 'Sweets', 'ask', 'no', 'Kyoto Kurasu, November 2024.', 'chacaro_lemon'),
      it('茶カロ 抹茶モンブラン', '', '茶カロ macaron-style cake, matcha Mont Blanc', '¥506', 'Sweets', 'ask', 'no', 'Kyoto Kurasu, November 2024.', 'chacaro_montblanc'),
    ] }, {
    cuisine: 'ピザとパスタもある抹茶スイーツのカフェ (食べログ、口コミ)・桐箱を開けるとドライアイスの煙が上がる抹茶スイーツの詰め合わせ、お抹茶玉手箱スイーツ1,980円 (京都くらす、2024年11月。2025年6月の口コミ、税込)・茶カロ9種類、レモンクリーム418円、抹茶モンブラン506円など (京都くらす、2024年11月)・抹茶パフェ、抹茶ティラミス、白玉入りの抹茶ゼリー、麩の田楽、昼と夜は旬の焼き魚、マルゲリータのピザ、きのこの醤油パスタ (japan-style.jp、2024年4月)・ピザと玉手箱 (2025年4月)・野菜のピザとアイスコーヒー (2025年11月)・抹茶パフェとブレンドコーヒー (2025年12月)・唐揚げのプレート (2026年4月)・トマト、なす、モッツァレラのパスタ、魚の西京焼きの定食 (2026年5月)・揚げたそうめんをのせた30センチほどのパフェ (2026年7月)・宇治ほうじ茶のティラミス、抹茶アイスともちをのせたクリーム抹茶ゼリー (2026年8月)・抹茶ティラミスとアイスコーヒーのセット (2026年10月)',
    neighborhood: '高台寺',
    gf_detail: 'グルテンフリー不可。ピザ、パスタ、抹茶ティラミス、茶カロがメニューの中心 (口コミ、京都くらす 2024年11月)。グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。抹茶スイーツにはクリーム、アイス、ティラミスを使い (口コミ)、食事には唐揚げや西京焼きの魚もある。野菜のピザにはチーズが少し (2025年11月)。ヴィーガンの情報は公開されていない。',
    notes: '[カフェ・高台寺、眺めのいい抹茶スイーツ] 高台寺の駐車場の横、東山の街並みと八坂の塔を窓から望む広いカフェ。煙が上がる桐箱のお抹茶玉手箱スイーツ (1,980円)、抹茶パフェやティラミス、ピザ、パスタ、定食も、夜21時まで。抹茶スイーツの小さなブランド「茶筅」の店。注文はQRコード、カード可。',
  });
}

// ================================================================ ageru.
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045235/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-atari.co/shop/209/'; const CO = 'https://kyoto-atari.co/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_ageru_shinkamanza', name: 'ageru.', category: 'OMNI',
    lat: 35.00345790786931, lng: 135.75604940034947, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fried dishes, a pork tenderloin katsu sandwich, pastas and a blue-cheese rusk are wheat-based; steak, ceviche and salads are on the menu too, but no gluten information is published (official page; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a menu built on beef, pork, shrimp, tuna, whitebait and cheese (official page; reviews). Fried potatoes, corn and Kamo eggplant appear, but no vegan information is published.',
    hours_raw: 'Daily 17:00–23:00, holidays included (Tabelog; operator’s page). Closing days not fixed (operator’s page). Reservations taken (Tabelog); booked out every day soon after opening (June 2026 review), but a weekday booking a week ahead was easy (July 2026) and an early weekday walk-in found a table (September 2026). Cash, cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR payments (PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay) (Tabelog; operator’s page). 34 seats: 12 at the counter and 22 at tables (Tabelog; operator’s page); counter on the ground floor, tables upstairs (June and July 2026 reviews). English menu (Tabelog). Smoking policy not stated. No parking. About 5 minutes from Hankyu Karasuma and subway Shijo stations (Tabelog). Opened 11 June 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma',
    cuisine: 'Western cooking with wine, from ingredients chosen across Japan: akaushi beef tagliata, kombu-cured shrimp ceviche, a lemon pasta of 山利 whitebait; wines from classic to natural (operator’s page) · wagyu and Satsuma pork hamburg steak 180 g ¥1,980; kombu-cured shrimp ceviche ¥1,280; Shine Muscat and blue cheese rusk ¥750 (June 2026) · pasture-raised pork tenderloin katsu sandwich (June, August, September and November 2026; sold out by 18:00 in August 2026) · tuna salsa with ripe avocado; young corn with mimolette; aged potatoes (June 2026) · white peach with burrata ¥1,580, fig butter ¥880, aged Hokkaido potatoes ¥730, draft beer ¥680, a California Pinot Noir ¥4,900 a bottle, red wine by the decanter ¥2,640, about ¥7,000 a head with drinks (July 2026) · fried potatoes, fried Kamo eggplant, zucchini, salmon, venison pâté de campagne (July 2026) · shrimp ceviche, garlic shrimp, whitebait and spring greens aglio e olio, mushroom and prosciutto ajillo (September 2026) · whitebait carpaccio, melon with pork ham (November 2026) · tiramisu (June 2026)',
    website: SITE, gmaps: gm('ageru. 京都 新釜座町'), menu_url: null,
    notes: '[Western · Shijo-Karasuma, wine bistro in a renovated house] A two-floor Western wine bistro opened in June 2026 in a renovated house on a stone-paved lane: akaushi tagliata, kombu-cured shrimp ceviche, a wagyu hamburg steak, the much-praised pork tenderloin katsu sandwich, fried vegetables and wines from classic to natural. Counter downstairs, tables upstairs; open to 23:00. Booking advised; English menu.',
    chef_bio: { chef_name: null, roles: ['Operator: 株式会社Atari (operator’s site)'], origin: null,
      background: 'The operator’s site says 株式会社Atari proposes new kinds of Kyoto-rooted sakaba and lists four shops: 酒呑気びんご, the neo-bistro 六角ace, 酒ﾉみつぼし and ageru. (kyoto-atari.co). Two of them are already in this app: 酒呑気 びんご (kyoto_sakenonki_bingo) and 酒ノみつぼし (kyoto_sake_no_mitsuboshi), whose records cite the same four-shop list. Reviewers call ageru. the group’s fourth shop and its first Western-food sakaba (June 2026). A June 2026 diner found the clientele mostly young women and the young staff lively and keen; a July 2026 diner found the staff kind and the restaurant and restrooms spotless.',
      philosophy: 'Ingredients chosen from all over Japan, turned into Western dishes with a twist, paired with wine (operator’s page).',
      specialty: 'Pork tenderloin katsu sandwich; akaushi tagliata; wagyu and Satsuma pork hamburg steak.',
      anecdotes: [
        { text: 'A July 2026 diner asked the staff what to order next and was steered to the aged Hokkaido potatoes, crisp outside and fluffy inside; the tagliata had sold out that day.', source: R + 'B532655501/' },
        { text: 'An August 2026 visitor arrived at 18:00 for the pork tenderloin katsu sandwich and found it already sold out.', source: R + 'B534068663/' },
        { text: 'A diner on a second visit in November 2026 called it a chic bistro in a back alley; on a July 2026 visit the same reviewer had worked through the whole menu in one day.', source: R + 'B531188580/' },
        { text: 'A June 2026 diner found the menu a little limited, though the space was calm and stylish.', source: R + 'B531606076/' },
      ],
      japanese_sources_summary: '運営会社のサイト (株式会社Atari): 京都に根ざした新しい酒場、店舗は酒呑気びんご、六角ace、酒ﾉみつぼし、ageru.。ageru.: 風情ある石畳の小路、あか牛のタリアータ、昆布〆海老のセビーチェ、山利しらすのレモンパスタ、全国から選び抜いた食材、ひと工夫ある洋食、クラシックからナチュールまでのワイン、17:00〜23:00、不定休、34席 (カウンター12席、テーブル22席)、現金・クレジットカード・電子マネー・QRコード決済。食べログ (英語版): ビストロ、イタリアン、ステーキ、予約可、毎日17:00〜23:00、34席、英語メニュー、オープン日2026年6月11日。口コミ (2026年、英語): 1階カウンター、2階テーブル、和牛と薩摩豚のハンバーグ180g 1,980円、昆布〆海老のセビーチェ1,280円 (2026年6月)、豚ヒレカツサンド (2026年6月〜11月)、一人約7,000円 (2026年7月)。',
      confidence: 'medium', sources: [SITE, CO, TB, R + 'B530090151/', R + 'B530202697/', R + 'B530525104/', R + 'B530844290/', R + 'B531188580/', R + 'B531606076/', R + 'B532655501/', R + 'B532662470/', R + 'B534068663/', R + 'B536509279/', R + 'B539019793/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); English-speaking staff not mentioned.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新釜座町719',
    existence: { status: 'confirmed', checked: TODAY, note: 'Operator’s 2026 shop page; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003458, 135.756049); nearest pin in data about 26 m (スタンド酒場 ステム); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530090151/', R + 'B532655501/'],
    price_note: 'Prices from reviews, dated by visit (no prices on the operator’s page).', last_checked: TODAY, items: [
      it('', '', 'Wagyu and Satsuma pork hamburg steak (180 g)', '¥1,980', 'Mains', 'ask', 'no', 'June and July 2026 reviews.', 'hamburg'),
      it('昆布〆海老のセビーチェ', '', 'Kombu-cured shrimp ceviche', '¥1,280', 'Cold appetizers', 'ask', 'no', 'June 2026 review; on the operator’s page.', 'ceviche'),
      it('', '', 'Shine Muscat and blue cheese rusk', '¥750', 'Appetizers', 'no', 'no', 'June 2026 review.', 'muscat_rusk'),
      it('', '', 'White peach with burrata', '¥1,580', 'Cold appetizers', 'ask', 'no', 'July 2026 review.', 'peach_burrata'),
      it('', '', 'Aged Hokkaido potatoes', '¥730', 'Fritters', 'ask', 'ask', 'July 2026 review.', 'aged_potatoes'),
    ] }, {
    cuisine: '全国から選び抜いた食材の洋食とワイン: あか牛のタリアータ、昆布〆海老のセビーチェ、山利しらすのレモンパスタ、クラシックからナチュールまでのワイン (運営会社のサイト)・和牛と薩摩豚のハンバーグ180g 1,980円、昆布〆海老のセビーチェ1,280円、シャインマスカットとブルーチーズのラスク750円 (2026年6月)・放牧豚のヒレカツサンド (2026年6月、8月、9月、11月。2026年8月は18時に売り切れ)・まぐろと熟したアボカドのサルサ、ヤングコーンとミモレット、熟成じゃがいも (2026年6月)・白桃とブッラータ1,580円、いちじくのバター880円、北海道の熟成じゃがいも730円、生ビール680円、カリフォルニアのピノ・ノワール1本4,900円、赤ワインのデキャンタ2,640円、飲み物込みで一人約7,000円 (2026年7月)・フライドポテト、賀茂なすのフライ、ズッキーニ、サーモン、鹿肉のパテ・ド・カンパーニュ (2026年7月)・海老のセビーチェ、ガーリックシュリンプ、しらすと春野菜のペペロンチーノ、きのこと生ハムのアヒージョ (2026年9月)・しらすのカルパッチョ、メロンと豚のハム (2026年11月)・ティラミス (2026年6月)',
    neighborhood: '新釜座町',
    gf_detail: '要確認。揚げ物、豚ヒレカツサンド、パスタ、ブルーチーズのラスクは小麦を使う。ステーキ、セビーチェ、サラダもあるが、グルテンの情報は公開されていない (運営会社のサイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉、豚肉、海老、まぐろ、しらす、チーズが中心のメニュー (運営会社のサイト、口コミ)。じゃがいも、ヤングコーン、賀茂なすの揚げ物もあるが、ヴィーガンの情報は公開されていない。',
    notes: '[洋食・新釜座町、改装した家のワインビストロ] 2026年6月、石畳の小路の改装した家にオープンした2階建ての洋食とワインの店。あか牛のタリアータ、昆布〆海老のセビーチェ、和牛のハンバーグ、評判の豚ヒレカツサンド、野菜の揚げ物、クラシックからナチュールまでのワイン。1階はカウンター、2階はテーブル、23時まで。予約がおすすめ、英語メニューあり。',
  });
}

// ================================================================ ラ・パパイヤベール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000655/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://lapapayeverte.jp/';
  const H = day(['12:00', '15:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_la_papaye_verte', name: 'ラ・パパイヤベール (la papaye verte)', category: 'OMNI',
    lat: 35.00978176786605, lng: 135.75841728041166, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Much of the menu is rice-based (pho, rice vermicelli, rice-paper spring rolls), but dishes are seasoned with Vietnamese soy sauce and nuoc mam and there are battered frogs’ legs, egg noodles and fried spring rolls; no gluten information is published (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: nuoc mam seasons many dishes, and the menu is built on pork, beef, chicken, shrimp, crab and fish (official site). Water spinach with garlic and green papaya salads are listed, but no vegan information is published.',
    hours_raw: 'Daily 12:00–15:00 (last order 14:30) and 17:30–23:00 (last order 22:30), closing days not fixed (Tabelog). The official site gives lunch as 12:00–14:00, dinner 17:30–23:00, open every day but sometimes closed for holidays. Reservations taken; same-day bookings by 14:30 (Tabelog). Courses for two or more; banquets up to 30; the nabe courses and course menus for four or more by phone booking (official site). Cash only: no cards, e-money or QR (Tabelog); reviewers in January 2025 and July 2025 left exact money on the table or counter. 22 seats; private hire possible; non-smoking; children welcome (Tabelog). Lunch sets come with free self-service drinks by the entrance (official site; reviews). About 5 minutes from Karasuma-Oike station (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Karasuma-Oike',
    cuisine: 'Vietnamese, with full or half portions of many dishes (official site) · lunch: today’s plate lunch ¥1,500, fried-rice plate ¥1,500, grilled pork plate ¥1,500, fried-rice set ¥1,300, pho ga (chicken) set ¥1,300, pho bo (beef) set ¥1,300, bun bo Hue (spicy beef noodles) set ¥1,400, all with free drinks (official site, undated) · today’s plate ¥1,100 (February 2020), ¥1,300 (January, May and July 2025), ¥1,500 (March 2026): rice with curry, fried spring rolls, bitter melon with egg, cilantro salad, vermicelli and bean-sprout soup · beef pho (November 2024; April 2025) · pho ga with fresh spring rolls (July 2025) · dinner: fresh spring rolls ¥1,200, steamed spring rolls ¥1,700, green papaya salads ¥1,400–1,600, water spinach with garlic ¥1,200, frogs’ legs in curry ¥2,500, blue crab with tamarind from ¥3,000, banh xeo ¥2,500, lemongrass-grilled pork spare ribs ¥1,500 (official site) · courses A ¥2,800 and B ¥3,800 from two people; nabe courses ¥3,800 of medicinal motsu, cilantro pork shabu-shabu or Vietnamese fish and tomato, by reservation (official site) · Vietnamese beers ¥630, Nep Moi ¥630 (official site)',
    website: SITE, gmaps: gm('ラ・パパイヤベール 京都 烏丸御池'), menu_url: SITE + 'foods.html',
    notes: '[Vietnamese · Karasuma-Oike, a silent one-man kitchen] A long-running Vietnamese restaurant off Anekoji where one owner cooks and serves almost without a word: generous plate lunches with free self-service juices, pho and bun bo Hue, and a dinner menu of spring rolls, green papaya salads, banh xeo, tamarind crab and herbal hot pots. Reviewers say to read up first, find your own seat and bring exact change: cash only.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (not named)'], origin: null,
      background: 'Tabelog’s introduction describes a Vietnamese restaurant run by a French-trained chef, known for a herbal hot pot of beef tendon with lemongrass, yuba, thick fried tofu, lotus root and bean sprouts. Reviewers describe a male owner who seemed to run the place alone (February 2020) and who handled both the kitchen and the floor alone (July 2025). Almost every review mentions the near-silent service: menus taken away without a word, food set down in silence, no greeting at the door (February 2020; January, May and July 2025; March 2026); others found the owner reserved but quick to take orders, with a sincere "thank you" at the end (August 2025), and a regular-filled room where little needed saying (August 2026). A December 2024 visitor met an imposing owner who resembled Steven Seagal, found the atmosphere like a silent film, and called the flavour, portions, presentation and service all excellent. A March 2026 diner saw the owner carefully wiping tables with alcohol and checking the drinks station, and thought the owner perhaps just shy. An April 2025 reviewer called it a place that has been around a long time.',
      philosophy: 'Healthy plates rich in herbs and vegetables alongside hearty dishes of authentic ingredients, in full or half portions (official site).',
      specialty: 'Plate lunch; pho; herbal hot pot.',
      anecdotes: [
        { text: 'A February 2020 diner watched a group waiting to pay be passed over while the owner first took a newcomer’s order; a regular told the group one must wait if change is needed.', source: R + 'B424742122/' },
        { text: 'An April 2025 regular dipped a spring roll in the small sauce meant for the fried rice, and the owner hurried over: that sauce is for the fried rice. The same reviewer had lately seen a cat wandering around the restaurant.', source: R + 'B510811498/' },
        { text: 'A July 2025 diner, unable to pay face to face while the owner stayed in the kitchen, waited a few minutes and left the money on the counter, and advises having exact change ready.', source: R + 'B510269031/' },
        { text: 'A November 2024 family who walked in knowing nothing were startled by the self-service drinks and the service, then found the beef pho better than one eaten in Vietnam.', source: R + 'B495202828/' },
      ],
      japanese_sources_summary: '公式サイト: ラ・パパイヤベール (la papaye verte)、京都 烏丸御池のベトナム料理専門店、ハーブと野菜をたっぷり使ったヘルシーなひと皿から本場の食材のボリュームメニューまで、フルとハーフが選べる、12:00〜14:00、17:30〜23:00、無休 (休暇などで休む場合あり)。ランチ: 本日のプレートランチ1,500円、チャーハンプレートランチ1,500円、豚焼肉プレートランチ1,500円、チャーハンセット1,300円、フォーガー (鶏肉めん) セット1,300円、フォー・ボー (牛肉面) セット1,300円、ブン・ボー・フエのセット1,400円、フリードリンク付き。料理: 生春巻1,200円、蒸し春巻1,700円、青パパイヤのサラダ1,400〜1,600円、空芯菜のにんにく炒め1,200円、カエルのカレー炒め2,500円、ワタリガニのタマリンド炒め3,000円〜、バインセオ2,500円、豚スペアリブのレモングラス焼き1,500円。コース A 2,800円、B 3,800円 (2名から)、宴会30名まで、薬膳もつ鍋、香菜たっぷり豚しゃぶ鍋、魚のトマト鍋 (ベトナム風)の鍋コース3,800円 (要予約)。食べログ (英語版): ベトナム料理、予約可 (当日は14:30まで)、12:00〜15:00、17:30〜23:00、不定休、カード・電子マネー・QRコード決済不可、22席、全席禁煙、西澤ビル1F、フランスで修業した料理人のベトナム料理店。口コミ (2020〜2026年、英語): 店主が一人で切り盛り、ほとんど無言の接客、入口のセルフのフリードリンク、本日のプレートランチ1,100円 (2020年2月)、1,300円 (2025年)、1,500円 (2026年3月)。',
      confidence: 'medium', sources: [SITE, SITE + 'lunch.html', SITE + 'foods.html', SITE + 'course.html', SITE + 'drink.html', TB, R + 'B424742122/', R + 'B495202828/', R + 'B497676753/', R + 'B505028663/', R + 'B507536507/', R + 'B510269031/', R + 'B510304246/', R + 'B510811498/', R + 'B512638593/', R + 'B513560538/', R + 'B525114417/', R + 'B535469128/'] },
    cultural_comfort: { level: 'japanese', note: 'Near-silent service: no guidance at the door, find a seat and wait (2020–2026 reviews); cash only, exact change advised (July 2025); no English mentioned in any source.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区姉小路通室町東入ル柿本町405 西澤ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live (menus undated, a 2022 notice); Tabelog reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.009782, 135.758417); nearest pin in data about 17 m (LOVE ARK, 柿本町408-2); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE + 'lunch.html', SITE + 'foods.html', SITE + 'course.html'],
    price_note: 'Official-site prices (undated; the site’s latest notice is from 2022). Reviews show the plate lunch at ¥1,300 in 2025 and ¥1,500 in March 2026.', last_checked: TODAY, items: [
      it('本日のプレートランチ', '', 'Today’s plate lunch: rice and three dishes, soup, free drinks', '¥1,500', 'Lunch', 'ask', 'no', 'Official site; ¥1,500 in a March 2026 review.', 'plate_lunch'),
      it('フォー・ボー（牛肉面）セット', '', 'Pho bo (beef pho) set with one dish and free drinks', '¥1,300', 'Lunch', 'ask', 'no', 'Official site.', 'pho_bo'),
      it('ブン・ボー・フエ セット', '', 'Bun bo Hue (spicy beef noodle) set with one dish and free drinks', '¥1,400', 'Lunch', 'ask', 'no', 'Official site.', 'bun_bo_hue'),
      it('生春巻', '', 'Fresh spring rolls of shrimp, pork, bean sprouts, cucumber and rice vermicelli', '¥1,200', 'Dishes', 'ask', 'no', 'Official site.', 'fresh_spring_rolls'),
      it('バインセオ（ベトナム風お好み焼き）', '', 'Banh xeo, for 2–3 people (small for 1–2: ¥1,800)', '¥2,500', 'Dishes', 'ask', 'no', 'Official site.', 'banh_xeo'),
      it('薬膳もつ鍋', '', 'Herbal motsu hot pot course: three starters, egg noodles, dessert (reservation)', '¥3,800', 'Courses', 'no', 'no', 'Official site; per person.', 'yakuzen_nabe'),
    ] }, {
    cuisine: 'ベトナム料理、多くの料理はフルとハーフから選べる (公式サイト)・ランチ: 本日のプレートランチ1,500円、チャーハンプレートランチ1,500円、豚焼肉プレートランチ1,500円、チャーハンセット1,300円、フォーガー (鶏肉めん) セット1,300円、フォー・ボー (牛肉面) セット1,300円、ブン・ボー・フエのセット1,400円、いずれもフリードリンク付き (公式サイト、日付なし)・本日のプレートランチ1,100円 (2020年2月)、1,300円 (2025年1月、5月、7月)、1,500円 (2026年3月): カレーをかけたご飯、揚げ春巻、にがうりの卵炒め、香菜のサラダ、ビーフン、もやしのスープ・牛肉のフォー (2024年11月、2025年4月)・フォーガーと生春巻 (2025年7月)・夜: 生春巻1,200円、蒸し春巻1,700円、青パパイヤのサラダ1,400〜1,600円、空芯菜のにんにく炒め1,200円、カエルのカレー炒め2,500円、ワタリガニのタマリンド炒め3,000円〜、バインセオ2,500円、豚スペアリブのレモングラス焼き1,500円 (公式サイト)・コースA 2,800円、B 3,800円 (2名から)、薬膳もつ鍋、香菜たっぷり豚しゃぶ鍋、魚のトマト鍋 (ベトナム風)の鍋コース3,800円、要予約 (公式サイト)・ベトナムビール630円、ネプモイ630円 (公式サイト)',
    neighborhood: '烏丸御池',
    gf_detail: '要確認。フォー、ビーフン、ライスペーパーの春巻など米の料理が多いが、ベトナム醤油やニョクマムで味付けし、カエルの衣揚げ、卵麺、揚げ春巻もある。グルテンの情報は公開されていない (公式サイト)。',
    vegan_detail: 'ヴィーガン不可。多くの料理にニョクマムを使い、豚肉、牛肉、鶏肉、海老、カニ、魚が中心 (公式サイト)。空芯菜のにんにく炒めや青パパイヤのサラダもあるが、ヴィーガンの情報は公開されていない。',
    notes: '[ベトナム料理・烏丸御池、無口な店主の一人の店] 姉小路通の長く続くベトナム料理店。店主が一人でほとんど無言のまま料理と接客をこなす。入口のジュースがセルフで飲めるボリュームのあるプレートランチ、フォー、ブン・ボー・フエ、夜は生春巻、青パパイヤのサラダ、バインセオ、ワタリガニのタマリンド炒め、薬膳の鍋。口コミでは、事前に口コミを読み、空いた席に座り、ちょうどの金額を用意するのがよいという。現金のみ。',
  });
}

// ================================================================ ベーグル君とおでんちゃん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042907/'; const R = TB + 'dtlrvwlst/';
  const NTA = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=6130001067508';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_bagel_kun_to_oden_chan', name: 'ベーグル君とおでんちゃん', category: 'OMNI',
    lat: 35.001169287211304, lng: 135.75612422851322, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The bagels are made with rice flour (reviews), but no source says they are wheat-free; the oden includes fish cakes, fu, gyoza-filled and battered items, white sauce and bolognese, and no gluten information is published.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden broth is seafood-based (February 2026 review), and the menu has fish cakes, eggs, cheese, octopus, prosciutto and smoked salmon.',
    hours_raw: 'Daily 18:00–22:00, holidays included (food last order 21:00, drinks 21:30); closed over the New Year holidays (Tabelog). Lunch was served in 2025: rice-flour bagel lunch sets ¥1,500 (May, August and September 2025 reviews); the Tabelog hours now list evenings only. Reservations taken; private hire by arrangement (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 10 seats (Tabelog): five or six at the counter and one table at the back (May 2025; January 2026). Non-smoking; no parking (Tabelog). About 5 minutes from subway Shijo station, exit 5 (Tabelog). Opened 1 May 2025 (Tabelog; May 2025 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi-Bukkoji',
    cuisine: 'Steamed rice-flour bagels with Japanese-style and "French" oden (reviews) · French oden: octopus with basil sauce ¥500, Kujo green onion pouch with anchovy ¥500, cabbage roll with mochi, white sauce and cheese ¥650, daikon with porcini sauce ¥380, egg with bolognese and cheese ¥380, konnyaku with miso-wine sauce ¥350; rice-flour bagel steamed to order ¥350; fish-cake oden such as potato-butter ¥620, gyoza ¥450, shiso-cheese ¥450; prosciutto and avocado ¥700 (May 2025) · lunch: bagel sandwich sets such as smoked salmon and cream cheese, and oden potato salad with bacon, with soup ¥1,500; dry cheese curry set; matcha terrine (May–September 2025) · all-you-can-drink course ¥2,500 with an oden platter; daikon, egg, konnyaku and potato ¥250 each (December 2025) · three oden-broth obanzai ¥1,800, chikuwa ¥380, fresh fu ¥380, octopus ¥480, dashimaki with white sauce and cheese ¥680, oden cheese risotto ¥850, bagel sandwiches ¥1,050 (smoked salmon and cream cheese; prosciutto and avocado), whole-fruit sours ¥950–1,200 (May 2026) · satoimo, atsuage and satsuma-age in a seafood broth (February 2026)',
    website: null, gmaps: gm('ベーグル君とおでんちゃん 京都'), menu_url: null,
    notes: '[Oden · Shinmachi-Bukkoji, bagels and French oden] A ten-seat evening bar where a pastry chef pairs chewy rice-flour bagels, steamed to order, with oden two ways: classic in a seafood broth, or "French" with porcini, basil or white sauce and cheese. Bagel sandwiches, oden-broth obanzai and fruit sours. Opened May 2025; cards and PayPay.',
    chef_bio: { chef_name: null, roles: ['Owner (pastry chef, not named)'], origin: null,
      background: 'A May 2025 reviewer says the shop is run by a pastry chef and recommends the owner’s madeleines and other baked sweets. Tabelog’s invoice number T6130001067508 is registered to 株式会社ＫＡＧＵＹＡ　ＦＯＯＤＳ (カグヤフーズ), with an office on Shijo-dori in Shimogyo Ward (NTA register). A May 2026 reviewer, back after a long gap, describes a young, very capable new owner, and says the Japanese-style oden uses fish cakes from a maker that supplies only four shops in Kyoto. A May 2025 visitor who wanted a softer daikon was told others had said the same and that it would be made softer.',
      philosophy: null,
      specialty: 'Steamed rice-flour bagels; French oden such as daikon with porcini sauce.',
      anecdotes: [
        { text: 'A May 2025 diner, wondering whether this was just a trend-chasing combination, found the steamed bagel so chewy it seemed more like mochi, and advises two plates of bagels per person.', source: R + 'B506285769/' },
        { text: 'In May 2026 a diner learned that the first three groups each day in June would get the obanzai platter free.', source: R + 'B506285769/' },
        { text: 'A September 2026 bagel lover came late and found only half the bagels left.', source: R + 'B535058415/' },
        { text: 'A January 2026 diner rated the daikon with porcini sauce the best of the night, but found the konnyaku short on flavour and preferred the bagel plain to dipped in broth.', source: R + 'B521811465/' },
      ],
      japanese_sources_summary: '食べログ (英語版): ベーグル、おでん、予約可、貸切は要相談、毎日18:00〜22:00 (料理L.O.21:00、ドリンクL.O.21:30)、年末年始休み、カード・PayPay可、電子マネー不可、10席、全席禁煙、駐車場なし、四条駅5番出口から徒歩約5分、オープン日2025年5月1日、適格請求書番号T6130001067508、京都府京都市下京区菅大臣町198 CarlVilla 1F。国税庁の法人番号公表サイト: 株式会社ＫＡＧＵＹＡ　ＦＯＯＤＳ (カグヤフーズ)、京都府京都市下京区。口コミ (2025〜2026年、英語): パティシエの店 (2025年5月)、米粉ベーグルは注文後に蒸す、フレンチおでん (ポルチーニソースの大根、バジルソースのたこ、九条ねぎとアンチョビの巾着) (2025年5月)、ランチセット1,500円 (2025年9月)、飲み放題2,500円 (2025年12月)、魚介のだし (2026年2月)、おでんのだしのおばんざい、ベーグルサンド1,050円 (2026年5月)。',
      confidence: 'medium', sources: [TB, NTA, R + 'B506285769/', R + 'B506683880/', R + 'B506771153/', R + 'B507766087/', R + 'B512946601/', R + 'B516530883/', R + 'B518353418/', R + 'B521811465/', R + 'B521947358/', R + 'B522005469/', R + 'B535058415/', R + 'B535908093/'] },
    cultural_comfort: { level: 'japanese', note: 'No English menu or English-speaking staff mentioned in any source; small counter, booking advised.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区菅大臣町198 CarlVilla 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (no closure badge) with reviews dated through September 2026; no shop website.' },
    pin_source: `Tabelog ${TB} (35.001169, 135.756124); nearest pin in data about 65 m (野菜料理 OKI四条); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506285769/', R + 'B516530883/', R + 'B518353418/'],
    price_note: 'Prices from reviews, dated by visit.', last_checked: TODAY, items: [
      it('', '', 'Rice-flour bagel, steamed to order', '¥350', 'Bagels', 'ask', 'ask', 'May 2025 review.', 'rice_flour_bagel'),
      it('', '', 'French oden: daikon with porcini sauce', '¥380', 'Oden', 'ask', 'no', 'May 2025 review.', 'daikon_porcini'),
      it('', '', 'French oden: cabbage roll with mochi, white sauce and cheese', '¥650', 'Oden', 'ask', 'no', 'May 2025 review.', 'cabbage_roll'),
      it('', '', 'Bagel sandwich, smoked salmon and cream cheese', '¥1,050', 'Bagels', 'ask', 'no', 'May 2026 review.', 'salmon_bagel'),
      it('', '', 'Rice-flour bagel lunch set with soup', '¥1,500', 'Lunch', 'ask', 'no', 'September 2025 review (lunch no longer in the Tabelog hours).', 'bagel_lunch'),
    ] }, {
    cuisine: '注文後に蒸す米粉ベーグルと、和風と「フレンチ」のおでん (口コミ)・フレンチおでん: バジルソースのたこ500円、九条ねぎとアンチョビの巾着500円、もちとホワイトソースとチーズのロールキャベツ650円、ポルチーニソースの大根380円、ボロネーゼとチーズの卵380円、味噌とワインのソースのこんにゃく350円、米粉ベーグル350円、じゃがバター、餃子、しそチーズなどの練り物のおでん620円、450円、450円、生ハムとアボカド700円 (2025年5月)・ランチ: スモークサーモンとクリームチーズ、おでんのポテサラとベーコンなどのベーグルサンドとスープのセット1,500円、ドライチーズカレーのセット、抹茶のテリーヌ (2025年5月〜9月)・おでんの盛り合わせ付きの飲み放題2,500円、大根、卵、こんにゃく、じゃがいも各250円 (2025年12月)・おでんのだしのおばんざい3品1,800円、ちくわ380円、生麩380円、たこ480円、ホワイトソースとチーズのだし巻き680円、おでんのチーズリゾット850円、ベーグルサンド1,050円 (スモークサーモンとクリームチーズ、生ハムとアボカド)、果物まるごとのサワー950〜1,200円 (2026年5月)・魚介のだしの里芋、厚揚げ、さつま揚げ (2026年2月)',
    neighborhood: '菅大臣町',
    gf_detail: '要確認。ベーグルは米粉 (口コミ) だが、小麦不使用とする情報はない。おでんには練り物、麩、餃子入りや衣のある具、ホワイトソース、ボロネーゼもあり、グルテンの情報は公開されていない。',
    vegan_detail: 'ヴィーガン不可。おでんのだしは魚介 (2026年2月の口コミ)。練り物、卵、チーズ、たこ、生ハム、スモークサーモンもある。',
    notes: '[おでん・菅大臣町、ベーグルとフレンチおでん] パティシエが営む10席の夜の店。注文後に蒸すもちもちの米粉ベーグルに、魚介のだしの和風おでんと、ポルチーニやバジル、ホワイトソースとチーズの「フレンチおでん」。ベーグルサンド、おでんのだしのおばんざい、果物のサワーも。2025年5月オープン、カードとPayPay可。',
  });
}

save();
