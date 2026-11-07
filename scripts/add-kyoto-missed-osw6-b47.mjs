// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 47.
//   + 京のSAKESORA Kyo no SAKESORA (Kyoto craft beer and sake bar with obanzai, by Kyoto Stn) — core
//   + 智積院茶寮 桔梗 Chishakuin Saryo Kikyo (shojin and Kyoto set meals in the Chishakuin temple lodge) — core
//   + 焼鳥をのじ Yakitori Onoji (salt-grilled yakitori over binchotan, Marutamachi) — core
//   + シェ・キクスイ Chez KiKuSui (one-chef French lunch bistro at Kojinguchi) — core
//   - skip 26000416 イノダコーヒ ポルタ支店 (chain)
//   - skip 26034388 鯛之鯛 烏丸店 (same brand as an Osaka record in data)
//   - skip 26018788 進々堂 三条河原町店 (chain)
//   Per the coordinator, the notable list was all chains or branches, so the batch is filled from core.
//   Same-name counts first, per brand or operator (2026-11-06): SAKESORA — one (Tabelog search). 智積院茶寮 桔梗 — one; operator
//   株式会社ハトヤ瑞鳳閣 (saryo-kikyo.com/company), a Kyoto hotel company, so drafted as a hotel restaurant. 焼鳥をのじ — one.
//   シェ・キクスイ — one (other "Kikusui" hits on Tabelog are unrelated shops).
//   Taken on 2026-11-06: `next notable 200` (lane) gave the three skips; `next core 200` (lane) gave the four adds.
//   None is in data/kyoto.json: grep by name and address (西境町162, 東瓦町964, 玉植町227-1, 上生洲町211-15) found none.
//   Service charges per Tabelog's Japanese original: SAKESORA 「17:00以降つきだし300円」; the other three list none
//   (Onoji: "No appetizer", July 2025 review). No halal claims; no owner deaths in the sources; no remarks about other diners kept.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-47');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000416', 'chain: Inoda Coffee — Tabelog lists the main shop plus branches at Porta, Sanjo, Hachijoguchi, Shijo, Tokyo Daimaru, Yokohama Takashimaya, Hiroshima and more (https://tabelog.com/en/rstLst/?sw=%E3%82%A4%E3%83%8E%E3%83%80%E3%82%B3%E3%83%BC%E3%83%92).');
skip('26034388', 'same-concept branch of a brand already in data: 鯛之鯛 — data has 鯛之鯛 難波店 (Osaka); Tabelog also lists Umeda and Kobe Sannomiya (https://tabelog.com/en/rstLst/?sw=%E9%AF%9B%E4%B9%8B%E9%AF%9B).');
skip('26018788', 'chain: Shinshindo — Tabelog lists 15+ Shinshindo shops (Sanjo, Kitayama, JR Kyoto Ekimae, Teramachi, Oike, Kyoto Isetan and more); the Kyodai Kitamonmae cafe is already in data (https://tabelog.com/en/rstLst/?sw=%E9%80%B2%E3%80%85%E5%A0%82).');

// ================================================================ 京のSAKESORA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26040514/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://kyoto-sakesora.beer';
  const WD = day(['17:00', '23:00']); const WE = day(['11:00', '23:00']);
  put({
    id: 'kyoto_sakesora', name: '京のSAKESORA (Kyo no SAKESORA)', category: 'OMNI',
    lat: 34.989353, lng: 135.758161, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai small plates, kara-age, onigiri and pasta alongside beer (2026 reviews); kara-age and pasta contain wheat; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai, grilled mackerel, octopus, kara-age (2026 reviews).',
    hours_raw: 'Mon–Fri 17:00–23:00; Sat–Sun 11:00–15:00 and 15:00–23:00 (last order food 22:00, drinks 22:30) (Tabelog). The official site also advertises breakfast and lunch from 11:00 and, from June, no fixed closing day — check before a weekday lunch. Reservations accepted; lunch sets are limited to 15 a day and sell out, so book (Tabelog; March and May 2026). Appetizer ¥300 after 17:00 (Tabelog, Japanese text: 「17:00以降つきだし300円」). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 15 seats: 7 at the counter, a table for 4 and standing room (Tabelog). Non-smoking (Tabelog). 5 min from Kyoto Stn (Tabelog). Listed opening date 1 February 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Stn north, west of Karasuma — 5 min from Kyoto Stn',
    cuisine: 'Kyoto craft beer (6–8 on tap plus bottles) and 20–30 Kyoto sakes, with tasting sets of three (shop; 2026 reviews) · lunch of chosen obanzai and onigiri ¥2,000 (shop; October 2026) · obanzai such as pumpkin with white miso, octopus and cucumber, grilled mackerel, simmered egg with green pepper (July 2026) · kara-age, anchovy potatoes (April 2026), Kyoto green-onion peperoncino (March 2026) · hojicha beer (July 2026) · seven-dish course with a tasting set ¥6,000 (shop)',
    website: OF, gmaps: gm('京のSAKESORA 京都駅'), menu_url: TB + 'dtlmenu/',
    notes: '[Craft beer and sake bar · Kyoto Stn, Kyoto drinks with obanzai] A small counter bar a few minutes from Kyoto Station pouring Kyoto craft beers and a wide range of Kyoto sake in tasting flights, with colourful obanzai lunches and evening small plates. Weekend daytime opening; lunch sets are limited, so book. ¥300 appetizer after 17:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and the official site: a café and dining bar devoted to Kyoto craft beer and sake, with obanzai and set lunches. A September 2026 review describes a young, casually dressed team of three.',
      philosophy: 'Kyoto beer and sake with Japanese food — the site says craft beer suits washoku as well as fish and chips.', specialty: 'Kyoto craft beer and sake tasting sets; obanzai.',
      anecdotes: [
        { text: 'A July 2026 visitor came in out of the rain, had the staff suggest sakes to taste one after another, and came back the next night for the hojicha beer.', source: R + 'B530967736/' },
        { text: 'A March 2026 weekend lunch booked just after 13:00 found the popular lunch set already sold out.', source: R + 'B523994216/' },
        { text: 'An October 2026 pair took the beer and sake tasting courses on a busy Saturday and praised the timing and the explanation of each dish.', source: R + 'B537886858/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー、下京区西境町162 日々是好日 1F 東、京都駅から徒歩5分、月〜金17:00〜23:00、土日11:00〜15:00と15:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、予約可、17時以降つきだし300円、カード・PayPay 可、15席 (カウンター7、テーブル4、立ち席)、禁煙、オープン日2024年2月1日。公式サイト: 京都のクラフトビールと日本酒、おばんざい、モーニング・ランチ・ダイニングバー、6月から定休日なし。口コミ (2026年1月〜10月、英語): ビールと日本酒の飲み比べ、おばんざいとおにぎりのランチ2,000円、唐揚げ、ほうじ茶のビール、ランチは売り切れることも。',
      confidence: 'medium', sources: [TB, OF, R + 'B521365948/', R + 'B523041138/', R + 'B523994216/', R + 'B528034565/', R + 'B529094246/', R + 'B530967736/', R + 'B532851603/', R + 'B533277830/', R + 'B533543319/', R + 'B535886186/', R + 'B537886858/', R + 'B538120320/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats suit solo drinkers; staff suggest beers and sakes to taste; book lunch. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西境町162 日々是好日 1F 東',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989353, 135.758161); cross-checked: GSI 京都府京都市下京区西境町162番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538120320/'],
    price_note: 'Course and lunch prices from Tabelog (shop) and an October 2026 review; ¥300 appetizer after 17:00.', last_checked: TODAY, items: [
      it('', '', 'Obanzai and onigiri lunch set', '¥2,000', 'Lunch', 'ask', 'no', 'Limited to 15 a day (Tabelog).', 'lunch_set'),
      it('', '', 'Seven-dish course with beer or sake tasting', '¥6,000', 'Courses', 'ask', 'no', 'Tabelog, for 2–4.', 'course_tasting'),
      it('', '', 'Craft beer tasting set (three)', '', 'Drinks', 'no', 'ask', '2026 reviews.', 'beer_flight'),
      it('', '', 'Appetizer charge', '¥300', 'Charge', '', '', 'After 17:00 (Tabelog).', 'otoshi'),
    ] }, {
    cuisine: '京都のクラフトビール (樽生6〜8種と瓶) と京都の日本酒20〜30種、3種の飲み比べ (店、2026年の口コミ)・選べるおばんざいとおにぎりのランチ2,000円 (店、2026年10月)・かぼちゃの白味噌、蛸ときゅうり、焼き鯖、ピーマンと卵の煮物 (2026年7月)・唐揚げ、アンチョビポテト (2026年4月)、Kyo Negi のペペロンチーノ (2026年3月)・ほうじ茶のビール (2026年7月)・飲み比べ付き7品のコース6,000円 (店)',
    neighborhood: '京都駅の北、烏丸の西。京都駅から徒歩5分',
    gf_detail: '要確認。おばんざい、唐揚げ、おにぎり、パスタをビールと (2026年の口コミ)。唐揚げとパスタは小麦を含む。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁のおばんざい、焼き鯖、蛸、唐揚げ (2026年の口コミ)。',
    notes: '[クラフトビールと日本酒のバー・京都駅、京都の酒とおばんざい] 京都駅から数分の小さなカウンターのバー。京都のクラフトビールと京都の日本酒を飲み比べで、昼は彩りのおばんざいのランチ、夜は小皿を。土日は昼から営業。ランチは数量限定なので予約を。17時以降はつきだし300円。',
  });
}

// ================================================================ 智積院茶寮 桔梗
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034862/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://saryo-kikyo.com/'; const FOODS = OF + 'foods'; const SHOJIN = OF + 'shojin-ryori'; const CO = OF + 'company';
  const H = day(['10:00', '20:00']);
  put({
    id: 'kyoto_chishakuin_saryo_kikyo', name: '智積院茶寮 桔梗 (Chishakuin Saryo Kikyo)', category: 'OMNI',
    lat: 34.987583, lng: 135.774984, cuisine_type: 'shojin',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Set meals include tempura and fried dishes, soy-seasoned simmered dishes and udon or soba (official menu); no gluten information.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'The Shojin Gozen is marked vegetarian and vegan, made with plant ingredients and a kombu and shiitake dashi (official site, Japanese text: 「植物性食材と昆布・椎茸の出汁で仕立てた、ベジタリアン・ヴィーガン対応の精進御膳」). Other sets, such as the dashimaki and tempura sets, are not marked vegan. Reviews also describe a limited shojin afternoon tea (July 2026).',
    hours_raw: 'Daily 10:00–20:00: café 10:00–20:00, lunch 11:00–14:30, dinner 17:00–20:00 (last order 19:30) (Tabelog). Breakfast is served to guests of the temple lodge (May 2026). Reservations accepted; call for 10 or more (Tabelog). Occasional temporary closures are posted on the official site. Cards incl. UnionPay; e-money; QR incl. PayPay, Alipay and WeChat Pay (Tabelog). 36 seats incl. a round counter (Tabelog; February 2026). Non-smoking; children welcome (Tabelog). Ground floor of Chishakuin Kaikan, the temple lodge of Chishakuin; 10 min from Keihan Shichijo, 5 min from the Higashiyama Shichijo bus stop (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama Shichijo, inside Chishakuin temple — near Sanjusangendo',
    cuisine: 'Temple shojin cuisine and Kyoto set meals (official site) · Shojin Gozen ¥3,520: seasonal dressed dish, simmered dishes, fried dish, rice, pickles, Negoro-jiru soup, dessert — marked vegan (official menu) · Dashimaki Gozen ¥2,530 with fresh yuba; Tempura Gozen ¥2,750; tempura rice bowl set ¥1,760; yuba udon or soba ¥1,650 (official menu) · dinner box Kikyo ¥3,630 (official menu) · limited shojin afternoon tea by reservation (July 2026) · yuba rice bowl set (October 2026)',
    website: OF, gmaps: gm('智積院茶寮 桔梗'), menu_url: FOODS,
    notes: '[Shojin and Kyoto set meals · Higashiyama Shichijo, inside Chishakuin temple] The restaurant and café of the Chishakuin temple lodge, near Sanjusangendo, with a round counter and garden views. The Shojin Gozen is plant-based with a kombu and shiitake dashi and marked vegan by the restaurant; dashimaki, yuba and tempura sets too, plus a limited shojin afternoon tea. Open daily 10:00–20:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: the tearoom (saryo) of Chishakuin, the head temple of the Shingon Chisan school, serving the temple\'s shojin cuisine and Kyoto dishes, on the ground floor of Chishakuin Kaikan. Operated by 株式会社ハトヤ瑞鳳閣 (official company page). Reviews in 2026 describe the lodge renovated to hotel standard.',
      philosophy: 'Shojin cuisine as practised at the temple: no meat or fish, seasonal plant ingredients (official site).', specialty: 'Shojin Gozen with Negoro-jiru soup; dashimaki and yuba sets.',
      anecdotes: [
        { text: 'A February 2026 regular of Chishakuin chose the dashimaki set over the shojin set and noted the tearoom had been remade, smaller, with a round counter suited to solo diners.', source: R + 'B524390857/' },
        { text: 'A July 2026 visitor had the newly launched shojin afternoon tea, limited to 10 a day, and could not finish it.', source: R + 'B532003123/' },
        { text: 'An August 2026 diner was surprised that the clear soup used a shiitake dashi, and missed meat and fish.', source: R + 'B533070529/' },
      ],
      japanese_sources_summary: '公式サイト: 総本山智積院の茶寮、智積院会館内、精進料理と京料理、精進御膳3,520円 (ベジタリアン・ヴィーガン対応、植物性食材と昆布・椎茸の出汁)、だし巻き御膳2,530円、天ぷら御膳2,750円、天丼セット1,760円、湯葉のセット1,650円、お重「ききょう」3,630円、根来汁700円、運営は株式会社ハトヤ瑞鳳閣。食べログ: 日本料理、東山区東大路通り七条下ル東瓦町964 智積院会館 1F、毎日10:00〜20:00 (ランチ11:00〜14:30、ディナー17:00〜20:00、カフェ10:00〜20:00)、予約可、カード・電子マネー・QR 可、36席、禁煙。口コミ (2025年12月〜2026年10月、英語): 精進のアフタヌーンティー、湯葉丼、丸いカウンター、宿坊の朝食。',
      confidence: 'medium', sources: [TB, OF, FOODS, SHOJIN, CO, R + 'B518377502/', R + 'B524390857/', R + 'B525974231/', R + 'B528655163/', R + 'B530920442/', R + 'B531452830/', R + 'B531569925/', R + 'B532003123/', R + 'B532806906/', R + 'B533070529/', R + 'B536722337/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Temple setting but a café-style room with a round counter; the vegan shojin set is named on the menu; Alipay and WeChat Pay accepted. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区東大路通り七条下ル東瓦町964 智積院会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.987583, 135.774984); cross-checked: GSI 京都府京都市東山区東瓦町964番地 (lot) 147m — the lot is the large Chishakuin temple ground; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [FOODS],
    price_note: 'Official menu, checked 2026-11-06 (reviews in February and June 2026 paid ¥3,300 for the Shojin Gozen).', last_checked: TODAY, items: [
      it('', '', 'Shojin Gozen (vegetarian and vegan)', '¥3,520', 'Set meals', 'ask', 'vegan', 'Plant ingredients, kombu and shiitake dashi (official site).', 'shojin_gozen'),
      it('', '', 'Dashimaki Gozen', '¥2,530', 'Set meals', 'ask', 'no', 'With fresh yuba.', 'dashimaki_gozen'),
      it('', '', 'Tempura Gozen', '¥2,750', 'Set meals', 'no', 'ask', '', 'tempura_gozen'),
      it('', '', 'Tempura rice bowl set', '¥1,760', 'Set meals', 'no', 'ask', 'Lunch.', 'tendon_set'),
      it('', '', 'Dinner box Kikyo', '¥3,630', 'Dinner', 'ask', 'no', 'Hassun, sashimi, simmered and grilled dishes.', 'ojyu_kikyo'),
      it('', '', 'Negoro-jiru soup', '¥700', 'À la carte', 'ask', 'ask', '', 'negorojiru'),
    ] }, {
    cuisine: '寺の精進料理と京料理の御膳 (公式サイト)・精進御膳3,520円: 季節の和え物、焚合せ、揚げ物、ご飯、香の物、根来汁、デザート、ヴィーガン対応 (公式メニュー)・生湯葉のだし巻き御膳2,530円、天ぷら御膳2,750円、天丼セット1,760円、湯葉のうどん・そば1,650円 (公式メニュー)・夜のお重「ききょう」3,630円 (公式メニュー)・予約制で数量限定の精進のアフタヌーンティー (2026年7月)・湯葉丼のセット (2026年10月)',
    neighborhood: '東山七条、智積院の境内。三十三間堂の近く',
    gf_detail: '要確認。天ぷらや揚げ物、醤油の炊き合わせ、うどん・そばのある御膳 (公式メニュー)。グルテンの情報はない。',
    vegan_detail: '精進御膳は「植物性食材と昆布・椎茸の出汁で仕立てた、ベジタリアン・ヴィーガン対応の精進御膳」と店が明記 (公式サイト)。だし巻きや天ぷらの御膳はヴィーガンの表示なし。精進のアフタヌーンティーもある (2026年7月の口コミ)。',
    notes: '[精進料理と京料理の御膳・東山七条、智積院の境内] 三十三間堂の近く、智積院の宿坊にある茶寮とカフェ。丸いカウンターと庭の眺め。精進御膳は植物性の食材と昆布・椎茸の出汁で、店がヴィーガン対応と明記。だし巻き、湯葉、天ぷらの御膳や、数量限定の精進のアフタヌーンティーも。毎日10時〜20時。',
  });
}

// ================================================================ 焼鳥をのじ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040010/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_yakitori_onoji', name: '焼鳥をのじ (Yakitori Onoji)', category: 'OMNI',
    lat: 35.017254, lng: 135.756933, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly salt-grilled skewers (2025 reviews); a tare sauce is also used (June 2025); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori shop; grilled vegetables are also on the menu (2025–26 reviews).',
    hours_raw: 'Mon–Sat and holidays 17:30–23:00 (last order food 22:00, drinks 22:30; last entry 22:00); closed Sunday, with occasional extra closures — call ahead (Tabelog). Reservations accepted and advised; often full (Tabelog; October 2025, February 2026). Cards, e-money and QR accepted (Tabelog). No appetizer charge (July 2025 review). 15 seats: 11 at the counter and a table for 4 (Tabelog). Non-smoking; children who can sit at a seat welcome (Tabelog). On Marutamachi between Karasuma and Horikawa, 5 min from Marutamachi Stn (Tabelog; November 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Marutamachi, between Karasuma and Horikawa — 5 min from Marutamachi Stn',
    cuisine: 'Yakitori grilled over Tosa binchotan, mostly with salt: local jidori chicken, young chicken, rare cuts and organic vegetables (Tabelog) · skewers from ¥240 — heart, neck, liver, bonjiri; wings and salt tsukune ¥310 (July 2025) · omakase skewers on request (Tabelog; September 2026) · grilled Kamo eggplant (October 2025), blue-cheese potato salad, grilled skirt with ponzu (February 2026) · grilled rice ball with fermented butter (2025–26 reviews); chicken rice bowl (December 2025)',
    website: null, gmaps: gm('焼鳥をのじ 丸太町'), menu_url: TB,
    notes: '[Yakitori · Marutamachi, salt-grilled skewers over binchotan] A 15-seat counter on Marutamachi where an owner with over ten years in yakitori grills local jidori, rare cuts and seasonal vegetables over Tosa binchotan, mostly with salt; finish with the grilled rice ball with fermented butter. Rare cuts sell out — book and come early. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-griller (unnamed), over 10 years in yakitori (Tabelog)'], origin: null,
      background: 'Per Tabelog: the owner has over ten years of yakitori experience. A July 2025 review says the owner trained at a well-known yakitori restaurant and that the shop had been open for about two years.',
      philosophy: null, specialty: 'Salt-grilled jidori and rare cuts over Tosa binchotan.',
      anecdotes: [
        { text: 'An October 2025 student phoned at 19:30 after a part-time shift, got one of the last counter seats, and named the grilled rice ball with fermented butter as the dish to end on.', source: R + 'B515131336/' },
        { text: 'A December 2025 regular on a sixth visit always finishes with the yakitori rice bowl.', source: R + 'B519905813/' },
        { text: 'A June 2025 diner liked the salt skewers but not the tare, and wished sold-out items were flagged when ordering.', source: R + 'B509189976/' },
      ],
      japanese_sources_summary: '食べログ: 焼鳥、中京区玉植町227-1、地下鉄丸太町駅から徒歩5分、月〜土・祝17:30〜23:00 (L.O. 料理22:00、ドリンク22:30、最終入店22:00)、日曜休み、不定休あり、予約可、カード・電子マネー・QR 可、15席 (カウンター11、4人テーブル1)、禁煙。店の紹介: 焼鳥歴10年以上の店主が、土佐備長炭で地鶏、若鶏、希少部位、有機野菜を焼く、おまかせも可、希少部位は早めに。口コミ (2024年11月〜2026年9月、英語): 塩が中心、串240円から、手羽とつくね310円、焼きおにぎりに発酵バター、Kamo のなす、売り切れが早い、いつも満席に近い。',
      confidence: 'medium', sources: [TB, R + 'B496487806/', R + 'B509189976/', R + 'B509580751/', R + 'B509756669/', R + 'B515131336/', R + 'B516983061/', R + 'B519905813/', R + 'B523105406/', R + 'B523190245/', R + 'B533223117/', R + 'B534424640/', R + 'B535559448/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ask for omakase and say which cuts to leave out; order rare cuts early. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区玉植町227-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.017254, 135.756933); cross-checked: GSI 京都府京都市中京区玉植町227番地 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509580751/'],
    price_note: 'Prices from a July 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Skewers: heart, neck, liver, bonjiri', '¥240', 'Yakitori', 'ask', 'no', 'Each; July 2025.', 'kushi_240'),
      it('', '', 'Chicken wings', '¥310', 'Yakitori', 'ask', 'no', 'July 2025.', 'tebasaki'),
      it('', '', 'Salt tsukune', '¥310', 'Yakitori', 'ask', 'no', 'July 2025.', 'tsukune'),
      it('', '', 'Grilled vegetables (okra, zucchini)', '¥480', 'Vegetables', 'ask', 'ask', 'July 2025.', 'yasai'),
      it('', '', 'Grilled rice ball', '¥350', 'Rice', 'ask', 'ask', 'Fermented butter optional; July 2025.', 'yaki_onigiri'),
      it('', '', 'Egg rice', '¥480', 'Rice', 'ask', 'no', 'July 2025.', 'tamago_gohan'),
    ] }, {
    cuisine: '土佐備長炭で焼く、塩が中心の焼鳥: 地鶏、若鶏、希少部位、有機野菜 (食べログ)・串は240円から、ハツ、ずり、きも、ぼんじり、手羽とつくね310円 (2025年7月)・おまかせも可 (食べログ、2026年9月)・Kamo のなすの焼き物 (2025年10月)、ブルーチーズのポテトサラダ、ハラミのポン酢 (2026年2月)・発酵バターの焼きおにぎり (2025〜2026年の口コミ)、焼鳥丼 (2025年12月)',
    neighborhood: '丸太町通、烏丸と堀川の間。丸太町駅から徒歩5分',
    gf_detail: '要確認。串はほぼ塩焼き (2025年の口コミ)。タレもある (2025年6月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鶏の焼鳥の店。焼き野菜もある (2025〜2026年の口コミ)。',
    notes: '[焼鳥・丸太町、備長炭の塩焼き] 丸太町通の15席のカウンター。焼鳥歴10年以上の店主が、地鶏、希少部位、季節の野菜を土佐備長炭で主に塩で焼く。締めは発酵バターの焼きおにぎり。希少部位は売り切れるので予約して早めに。日曜休み。',
  });
}

// ================================================================ シェ・キクスイ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002330/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30']);
  put({
    id: 'kyoto_chez_kikusui', name: 'シェ・キクスイ (Chez KiKuSui)', category: 'OMNI',
    lat: 35.021183, lng: 135.769203, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the lunch course centres on homemade bread with refills, and potage and sauces are served with it (2022–25 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-or-fish French lunch course with cream soups (2022–26 reviews).',
    hours_raw: 'Lunch 11:30–14:30, closed irregularly (Tabelog); dinner course by reservation only, from ¥3,500 (Tabelog remarks). Reservations accepted; a queue can form before opening (November 2025). Cash only — no cards, e-money or QR (Tabelog). 18 seats at tables (Tabelog). Smoking allowed per Tabelog. Private parties up to 25; a piano with occasional performances (Tabelog remarks). 1 min from the Kojinguchi bus stop, on the west side of Kawaramachi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawaramachi Kojinguchi — near Kyoto Prefectural University of Medicine',
    cuisine: 'Set French lunch: starter, soup, a meat or fish main, homemade bread with refills, coffee or tea (2019–26 reviews) · fish course ¥2,002, beef steak with a Japanese-style sauce ¥2,607 (September 2024; November 2025) · pan-fried sea bream, sea bass with anchovy sauce (2022–26 reviews) · soups such as chilled pumpkin, green pea, potato potage (2023–26 reviews) · homemade natural-yeast breads — walnut, olive, fig, sansho, épi (Tabelog; 2023–26 reviews) · dinner courses from ¥3,500 by reservation (Tabelog)',
    website: null, gmaps: gm('シェ・キクスイ 荒神口'), menu_url: TB,
    notes: '[French · Kojinguchi, a one-chef lunch bistro] A long-running French bistro on Kawaramachi where one cheerful chef cooks, serves and clears alone: salad or terrine, soup, sea bream or beef, and homemade breads brought round again and again, from about ¥2,000. Cash only; a line can form at 11:30. Dinner by reservation only.',
    chef_bio: { chef_name: null, roles: ['Chef-owner (unnamed), cooking and serving alone (2022–25 reviews)'], origin: null,
      background: 'Per Tabelog: a French restaurant serving seasonal ingredients and homemade natural-yeast bread. Reviews from 2022 to 2025 describe one chef running the room alone; a February 2020 review noted it had reopened after a break.',
      philosophy: 'Credits the quality of the ingredients for the taste (June 2024 review).', specialty: 'Set French lunch with homemade breads.',
      anecdotes: [
        { text: 'A November 2025 visitor found a line before opening; at 11:30 the chef came out to check reservations, then ran the whole room alone.', source: R + 'B517333062/' },
        { text: 'A June 2024 regular marvelled at how one person kept every table in order without ever seeming rushed.', source: R + 'B487548598/' },
        { text: 'A February 2025 diner kept reaching for a rare sansho bread despite being full.', source: R + 'B503062108/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ、上京区河原町通荒神口下ル西側上生洲町211-15、荒神口バス停から徒歩1分、11:30〜14:30、不定休、予約可、カード・電子マネー・QR 不可、18席、喫煙可、旬の食材と自家製の天然酵母パン、ランチのコース、夜は予約制のコース3,500円から、ピアノの演奏、貸切25名まで。口コミ (2019年7月〜2026年6月、英語): シェフが一人で調理と接客、前菜・スープ・肉か魚・パンのおかわり・コーヒー、魚2,002円、牛2,607円、開店前に行列。',
      confidence: 'medium', sources: [TB, R + 'B425347456/', R + 'B451748087/', R + 'B463477747/', R + 'B473707323/', R + 'B477878038/', R + 'B478773147/', R + 'B480336040/', R + 'B484749189/', R + 'B487548598/', R + 'B503062108/', R + 'B514333859/', R + 'B517333062/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose meat or fish and coffee or tea; bring cash; one person serves, so allow time. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区河原町通荒神口下ル西側上生洲町211-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.021183, 135.769203); cross-checked: GSI 京都府京都市上京区上生洲町211番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B425347456/', R + 'B517333062/'],
    price_note: 'Lunch prices from September 2024 and November 2025 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Lunch course, fish main', '¥2,002', 'Lunch', 'no', 'no', 'November 2025.', 'lunch_fish'),
      it('', '', 'Lunch course, beef steak', '¥2,607', 'Lunch', 'no', 'no', 'September 2024.', 'lunch_beef'),
      it('', '', 'Dinner course (reservation only)', 'from ¥3,500', 'Dinner', 'no', 'no', 'Tabelog remarks.', 'dinner_course'),
    ] }, {
    cuisine: 'フレンチのランチのコース: 前菜、スープ、肉か魚のメイン、おかわりできる自家製パン、コーヒーか紅茶 (2019〜2026年の口コミ)・魚のコース2,002円、和風ソースの牛ステーキ2,607円 (2024年9月、2025年11月)・鯛のポワレ、アンチョビソースのスズキ (2022〜2026年の口コミ)・冷製かぼちゃ、グリーンピース、じゃがいものポタージュなどのスープ (2023〜2026年の口コミ)・自家製天然酵母のパン: くるみ、オリーブ、いちじく、山椒、エピ (食べログ、2023〜2026年の口コミ)・夜は予約制のコース3,500円から (食べログ)',
    neighborhood: '河原町荒神口。京都府立医科大学の近く',
    gf_detail: 'グルテンフリーではない。おかわりできる自家製パンが中心のランチで、ポタージュやソースと一緒に出る (2022〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉か魚のフレンチのランチ、クリームのスープ (2022〜2026年の口コミ)。',
    notes: '[フレンチ・荒神口、シェフ一人のランチのビストロ] 河原町通の長く続くフレンチ。明るいシェフが一人で調理、配膳、片付けまで。サラダやテリーヌ、スープ、鯛か牛、何度も回ってくる自家製パンで約2,000円から。現金のみ、11時半には行列も。夜は予約のみ。',
  });
}

save();
