// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 40.
//   + TRATTORIA M KYOTO (Italian of the Mercure Kyoto Station hotel, by Nishi Honganji; core list)
//   + GOOD TIME COFFEE (machiya coffee stand by Shimabara, duck-and-negi hot sandwich; core list)
//   + スパイシーマサラ Spicy Masala (ticket-machine curry counter inside JR Kyoto Station; notable list)
//   + 隈本総合飲食店 MAO Kumamoto Sogo Inshokuten MAO (all-you-can-eat kara-age lunch in a machiya by Shijo Karasuma; notable)
//   - 博多もつ鍋おおやま 京都ポルタ店 26041039 (core): chain — two in our crawls (Kyoto, Namba), and gltjp.com's page for the
//     head shop (opened 2026-11-06) says the brand has 21 shops nationwide.
//   Picked 2026-11-06 after batch 39. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after earlier skips:
//   TRATTORIA M KYOTO 26034373, 26041039 (skipped), GOOD TIME COFFEE 26026441. `next notable 200`: スパイシーマサラ 26000785,
//   隈本総合飲食店 MAO 26023015. Same-name check, same brand or operator only: TRATTORIA M KYOTO — one; the hotel's own
//   restaurant (hotel restaurants are drafted, as with Seven Embers). GOOD TIME COFFEE — one. スパイシーマサラ — one.
//   隈本 — two concepts in our crawls (MAO and 隈本ハイカラ万遍飯店), both in Kyoto, a small group. None of the four is in
//   data/kyoto.json: grep by name and address (油小路町288, 突抜2-357, 東塩小路町657 JR京都駅 2F, 元竹田町644) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-40');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26041039/', 'chain: 博多もつ鍋おおやま — 21 shops nationwide (gltjp.com head-shop page); Kyoto and Namba in our crawls');

// ================================================================ TRATTORIA M KYOTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26034373/'; const R = TB + 'dtlrvwlst/';
  const H = day(['06:30', '10:00'], ['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_trattoria_m_mercure', name: 'TRATTORIA M KYOTO (Mercure Kyoto Station)', category: 'OMNI',
    lat: 34.988438, lng: 135.753389, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fresh pasta, lasagna, pizza and bread refills dominate; risotto is among the lunch mains; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prosciutto, smoked salmon, Tanba chicken, cheese and meat-sauce lasagna (2026 reviews).',
    hours_raw: 'Daily 6:30–10:00 (breakfast), 11:30–14:30 (last order 14:00) and 17:30–22:00 (food last order 21:00, drinks 21:30); closed on irregular days (Tabelog). Reservations accepted (Tabelog). A 10% service charge since 1 April 2024 (Tabelog original 2024年4月1日以降サービス料10％頂戴いたします。). Half-price drinks at lunch during happy hour (May 2026). 80 seats: restaurant counter 8 and tables 24, bar counter 8 and tables 14; non-smoking; wheelchair accessible; Wi-Fi (Tabelog). Cards, transit IC and iD; no QR (Tabelog). 1F of the Mercure Kyoto Station hotel, in front of Nishi Honganji; 7–10 min walk from Kyoto Station (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By Nishi Honganji, Mercure Kyoto Station 1F — 10 min walk from Kyoto Stn',
    cuisine: 'Hotel trattoria proposing "Kyoto Italian" cooking, with a bar (Tabelog) · M Lunch ¥2,300: two appetisers, soup of the day such as consommé, and a fresh pasta or risotto; lasagna for a supplement; meat course add-on; bread refills (May–September 2026) · à la carte: prosciutto with Grana Padano, a Bismarck pizza with saikyo miso and mushrooms, smoked salmon with fresh yuba, Tanba chicken with panzanella, lasagna, Margherita, chocolate cake (May–August 2026) · casual dinner courses and Kyoto craft gin (August–October 2026) · lunch about ¥3,000–4,000, dinner ¥10,000–15,000 with drinks (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('TRATTORIA M KYOTO メルキュール京都ステーション'), menu_url: null,
    notes: '[Hotel Italian · by Nishi Honganji, Mercure 1F] The spacious, Japanese-accented trattoria and bar of the Mercure hotel near Kyoto Station: a good-value M Lunch of appetisers, soup and fresh pasta for ¥2,300, and by night Kyoto-tinged dishes such as a saikyo-miso Bismarck pizza or salmon with fresh yuba, with Kyoto gin. Calm even at lunch; service sometimes slow or new. Plus 10% service. Breakfast from 6:30.',
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and service staff (unnamed)'], origin: null,
      background: 'Per Tabelog: the Italian restaurant and bar of the Mercure Kyoto Station hotel, proposing a new "Kyoto Italian cuisine"; registered as an official listing by the operator. Reviewers in 2026 describe a large, stylish room with a Japanese aesthetic and sofa seats on the hotel\'s first floor, opposite Nishi Honganji.',
      philosophy: 'A new "Kyoto Italian cuisine" (Tabelog).', specialty: 'M Lunch; Bismarck with saikyo miso.',
      anecdotes: [
        { text: 'A May 2026 guest had to ask for the coffee long after dessert, and found the bill arriving before the drink was finished.', source: R + 'B527456023/' },
        { text: 'An August 2026 family with children found the staff friendly and enjoyed mixing Kyoto craft gin into cocktails after a hot day of sightseeing.', source: R + 'B533532428/' },
        { text: 'An October 2026 diner thought a new staff member mixed up the wine orders, and suggested reading from notes when unsure.', source: R + 'B537712985/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・バー・ピザ、下京区油小路町288 メルキュール京都ステーション、地下鉄・JR京都駅から徒歩7分、毎日 6:30〜10:00・11:30〜14:30 (L.O.14:00)・17:30〜22:00 (料理L.O.21:00、ドリンクL.O.21:30)、不定休、予約可、2024年4月1日からサービス料10%、80席 (レストラン カウンター8・テーブル24、バー カウンター8・テーブル14)、禁煙、車椅子可、Wi-Fi、カード・交通系IC・iD 可、QR 不可、新しい「京都イタリアン」の提案。口コミ (2026年5月〜10月、英語): ホテルの1階、西本願寺の前、M ランチ2,300円 (前菜2種、本日のスープ、生パスタかリゾット)、ラザニアは追加料金、肉の追加、パンのおかわり、ランチのハッピーアワーでドリンク半額、生ハムとグラナ・パダーノ、西京味噌のビスマルク、スモークサーモンと生湯葉、Tanba の鶏とパンツァネッラ、ラザニア、マルゲリータ、チョコレートケーキ、京都のクラフトジン、コーヒーが遅れた・注文の取り違えとの声。',
      confidence: 'medium', sources: [TB, R + 'B506637397/', R + 'B527456023/', R + 'B527492558/', R + 'B531327681/', R + 'B531664578/', R + 'B533532428/', R + 'B534135779/', R + 'B536182221/', R + 'B536398655/', R + 'B537712985/'] },
    cultural_comfort: { level: 'english', note: 'International hotel restaurant; 10% service; cards and IC.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区油小路町288 メルキュール京都ステーション',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.988438, 135.753389); cross-checked: GSI 京都府京都市下京区油小路町288番地 (lot) 13 m; nearest Kyoto record 95 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506637397/'],
    price_note: 'Lunch price from a July 2026 review; plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'M Lunch (two appetisers, soup, pasta)', '¥2,300', 'Lunch', 'ask', 'no', 'July 2026.', 'm_lunch'),
      it('', '', 'Bismarck pizza with saikyo miso', '', 'Pizza', 'no', 'no', 'May 2026.', 'bismarck'),
    ] }, {
    cuisine: '新しい「京都イタリアン」を提案する、バーのあるホテルのトラットリア (食べログ)・M ランチ2,300円: 前菜2種、コンソメなどの本日のスープ、生パスタかリゾット、ラザニアは追加料金、肉の追加、パンのおかわり (2026年5〜9月)・アラカルト: 生ハムとグラナ・パダーノ、西京味噌ときのこのビスマルク、スモークサーモンと生湯葉、Tanba の鶏とパンツァネッラ、ラザニア、マルゲリータ、チョコレートケーキ (2026年5〜8月)・カジュアルなディナーコース、京都のクラフトジン (2026年8〜10月)・飲み物込みで昼3,000〜4,000円、夜10,000〜15,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '西本願寺のそば、メルキュールの1階。京都駅から徒歩10分',
    gf_detail: '要確認。生パスタ、ラザニア、ピザ、パンのおかわりが中心で、ランチのメインにリゾットもある。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。生ハム、スモークサーモン、Tanba の鶏、チーズ、ミートソースのラザニア (2026年の口コミ)。',
    notes: '[ホテルのイタリアン・西本願寺のそば、メルキュール1階] 京都駅近くのメルキュールの、和の趣のある広いトラットリアとバー。前菜、スープ、生パスタの M ランチ2,300円がお得。夜は西京味噌のビスマルクや生湯葉とサーモンなど京都らしい皿と京都のジン。昼も落ち着いているが、接客が遅い・不慣れなことも。別にサービス料10%。朝食は6時半から。',
  });
}

// ================================================================ GOOD TIME COFFEE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26026441/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_good_time_coffee_shimabara', name: 'GOOD TIME COFFEE', category: 'OMNI',
    lat: 34.992483, lng: 135.748474, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the food is toasted sandwiches and mochi toast on wheat bread (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee and juices suit, but both sandwiches use duck or sweet toppings with miso sauce, and no vegan information is given (2025–2026 reviews).',
    hours_raw: 'Daily 9:00–17:00; closed over the New Year holidays (Tabelog). No reservations; order and pay at the counter first, then sit (Tabelog; March and July 2026). Cards, transit IC, iD, QUICPay and PayPay (Tabelog; March 2026). 16 seats incl. a counter and a courtyard terrace; non-smoking; children and strollers welcome; takeaway; coffee beans for sale (Tabelog; March 2026). A renovated old house down a side lane in a residential area near Shimabara; 2 min from the Shimabaraguchi bus stop, about 12 min walk from Umekoji-Kyotonishi Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimabara, a residential lane — 2 min from the Shimabaraguchi bus stop',
    cuisine: 'Coffee stand and café in a renovated house (2026 reviews) · kamo-negi hot sandwich ¥990–1,045: duck breast, Kujo negi and Tanba shimeji in a white-miso sauce (February–October 2026) · white peach mochi toast and other sweet toasts (August 2025; September 2026) · drip coffee from a choice of beans, e.g. Tanzania, East Timor, Brazil ¥660; café latte, iced caramel latte; apple juice ¥605 (2026 reviews) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('GOOD TIME COFFEE 島原'), menu_url: null,
    notes: '[Coffee · Shimabara back lane, renovated house] A quiet coffee stand tucked into a residential lane near Shimabara, with a courtyard terrace: order at the counter, choose your beans, then sit with a duck, Kujo negi and white-miso hot sandwich, or a white-peach mochi toast. No background music, coffee beans to take home. Self-service, so no table service. Open daily 9:00–17:00.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a café and sandwich shop near Shimabara with takeaway; registered as an official listing by the operator. Reviewers in 2026 describe a slightly renovated old building in a hidden lane, beans to choose and buy, early opening, and many overseas visitors (July 2026).',
      philosophy: null, specialty: 'Kamo-negi hot sandwich.',
      anecdotes: [
        { text: 'A February 2026 visitor waited here for the Setsubun event at nearby Renkyuji temple.', source: R + 'B521832364/' },
        { text: 'A March 2026 guest thought the place was takeaway only from outside — and, on asking, sat inside.', source: R + 'B525755645/' },
        { text: 'A July 2026 visitor wondered why so many inbound tourists find the lane, and noted there is no table service.', source: R + 'B533564563/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・サンドイッチ、下京区突抜2-357、JR梅小路京都西駅から徒歩12分、JR Tanbaguchi 駅から徒歩13分、市バス島原口から徒歩2分、毎日 9:00〜17:00、年末年始休み、予約不可、カード・交通系IC・iD・QUICPay・PayPay 可、16席、テラス、禁煙、子ども・ベビーカー可、テイクアウト。口コミ (2025年8月〜2026年10月、英語): 住宅街の路地、改装した古い建物、先にカウンターで注文と支払い、鴨ねぎのホットサンド990〜1,045円 (鴨むね、九条ねぎ、Tanba のしめじ、白味噌のソース)、白桃のもちトースト、豆を選べるドリップコーヒー (タンザニア、東ティモール、ブラジル660円)、カフェラテ、キャラメルラテ、りんごジュース605円、BGM なし、豆の販売、中庭、外国人客が多い。',
      confidence: 'medium', sources: [TB, R + 'B509124829/', R + 'B521832364/', R + 'B523167180/', R + 'B523739568/', R + 'B523806216/', R + 'B525755645/', R + 'B529162626/', R + 'B533564563/', R + 'B536351244/', R + 'B537244548/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter first; cards, IC and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区突抜2-357',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.992483, 135.748474); GSI matches only 京都府京都市下京区突抜二丁目 (chome), 69 m away, so loc_precise false; nearest Kyoto record 76 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523167180/', R + 'B537244548/'],
    price_note: 'Prices from February and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kamo-negi hot sandwich (duck, Kujo negi, white miso)', '¥1,045', 'Food', 'no', 'no', 'October 2026; ¥990 in February.', 'kamonegi_sand'),
      it('', '', 'Drip coffee (choice of beans)', '¥660', 'Drinks', 'gf', 'vegan', 'October 2026.', 'drip_coffee'),
      it('', '', 'Apple juice', '¥605', 'Drinks', 'gf', 'vegan', 'February 2026.', 'apple_juice'),
    ] }, {
    cuisine: '改装した家のコーヒースタンドとカフェ (2026年の口コミ)・鴨ねぎのホットサンド990〜1,045円: 鴨むね、九条ねぎ、Tanba のしめじに白味噌のソース (2026年2〜10月)・白桃のもちトーストなど甘いトースト (2025年8月、2026年9月)・豆を選べるドリップコーヒー、例: タンザニア、東ティモール、ブラジル660円、カフェラテ、アイスキャラメルラテ、りんごジュース605円 (2026年の口コミ)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '島原の住宅街の路地。市バス島原口から徒歩2分',
    gf_detail: 'グルテンフリー不可。食べ物は小麦のパンのホットサンドともちトースト (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーやジュースは合うが、サンドは鴨や甘いトッピングと味噌のソースで、ヴィーガンの情報はない (2025〜2026年の口コミ)。',
    notes: '[コーヒー・島原の路地、改装した家] 島原近くの住宅街の路地にひっそりある、中庭テラスのあるコーヒースタンド。カウンターで注文して豆を選び、鴨と九条ねぎと白味噌のホットサンドや白桃のもちトーストを。BGM なしで静か、豆の持ち帰りも。セルフサービス。毎日9時〜17時。',
  });
}

// ================================================================ スパイシーマサラ Spicy Masala
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26000785/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.kyoto-station-building.co.jp/restaurant_cafe/255.html';
  const H = day(['09:00', '21:00']);
  put({
    id: 'kyoto_spicy_masala_station', name: 'スパイシーマサラ (Spicy Masala)', category: 'OMNI',
    lat: 34.985916, lng: 135.758520, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a roux-style curry with breaded cutlet toppings (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable curry ¥950 is on the menu, but the base sauce\'s ingredients are not stated; the beef curry uses meat (October 2026).',
    hours_raw: 'Daily 9:00–21:00 (last order 20:30) (Tabelog). No reservations (Tabelog). Buy a ticket from the machine at the entrance; cutlets fried to order, served in about 5 minutes (2026 reviews). Cards and transit IC; no QR or PayPay; contactless cards not supported (Tabelog; October 2026). Counter seats only; non-smoking (Tabelog). On the 2F of JR Kyoto Station, next to the JR ticket office left of the Shinkansen central gate, with an entrance also from inside the ticket gates on the Nara Line side (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inside JR Kyoto Station 2F, by the Shinkansen central gate',
    cuisine: 'Quick curry counter for travellers (2026 reviews) · a smooth original curry and a beef curry with finely chopped meat; "premium beef curry" said to recall the old Shinkansen dining car (October 2026) · toppings and plates: cheese menchi katsu curry ¥920, premium thick-cut pork cutlet curry ¥1,040, chicken katsu, katsu topping (September–October 2026) · vegetable curry with chunky vegetables ¥950; cabbage side ¥150 with refills (September–October 2026) · fukujinzuke and rakkyo on the counter · under ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('スパイシーマサラ 京都駅'), menu_url: null,
    notes: '[Curry · inside JR Kyoto Station, by the Shinkansen gate] A fast, cheap ticket-machine curry counter beside the Shinkansen central gate, reachable from both sides of the ticket barrier: freshly fried pork or chicken cutlets on a European-leaning curry, a cheese menchi katsu, a chunky vegetable curry, and a ¥150 cabbage side with refills. Ideal before a train; quick turnover even at noon. Daily 9:00–21:00.',
    chef_bio: { chef_name: null, roles: ['Counter staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a curry counter in the JR Kyoto Station building, next to the JR ticket office; registered as an official listing by the operator, with a page on the Kyoto Station Building website. Reviewers in 2026 describe frequent use by Shinkansen travellers changing trains.',
      philosophy: null, specialty: 'Katsu curry; vegetable curry.',
      anecdotes: [
        { text: 'An October 2026 regular on a sixth visit eats here whenever there is time before the Shinkansen.', source: R + 'B489923483/' },
        { text: 'A September 2026 diner went back for the ¥150 cabbage four times.', source: R + 'B537015771/' },
        { text: 'An October 2026 business traveller admits coming not for the taste but out of habit, between Shinkansen and local train.', source: R + 'B537399553/' },
      ],
      japanese_sources_summary: '食べログ: カレー・インドカレー、下京区東塩小路町657 JR京都駅 2F、新幹線中央口の左、JR きっぷうりばの隣、毎日 9:00〜21:00 (L.O.20:30)、予約不可、カード・交通系IC 可、QR 不可、カウンター席のみ (奈良線側の改札内からも入れる)、禁煙。口コミ (2026年9月〜10月、英語): 入口の券売機、カツは揚げたて、約5分で出る、オリジナルのさらっとしたカレー、細かい肉の牛カレー、新幹線の食堂車を思わせる「プレミアム牛カレー」、チーズメンチカツカレー920円、厚切りロースカツカレー1,040円、チキンカツ、野菜カレー950円、キャベツ150円 (おかわり自由)、福神漬けとらっきょう、PayPay とタッチ決済は不可。',
      confidence: 'medium', sources: [TB, WEB, R + 'B489923483/', R + 'B536574330/', R + 'B537015771/', R + 'B537189862/', R + 'B537391638/', R + 'B537399553/', R + 'B537786404/', R + 'B538027952/', R + 'B538251620/', R + 'B538688166/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; counter only; cards and IC, no QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区東塩小路町657 JR京都駅 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.985916, 135.758520); GSI matches only the town 京都府京都市下京区東塩小路町, 142 m away, so loc_precise false; the shop is inside JR Kyoto Station; nearest record 21 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536574330/', R + 'B538027952/', R + 'B489923483/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cheese menchi katsu curry', '¥920', 'Curry', 'no', 'no', 'September 2026.', 'cheese_menchi'),
      it('', '', 'Premium thick-cut pork cutlet curry', '¥1,040', 'Curry', 'no', 'no', 'October 2026.', 'atsugiri_katsu'),
      it('', '', 'Vegetable curry', '¥950', 'Curry', 'ask', 'ask', 'October 2026.', 'veg_curry'),
      it('', '', 'Cabbage side (refills)', '¥150', 'Sides', 'ask', 'ask', 'September 2026.', 'cabbage'),
    ] }, {
    cuisine: '旅の人向けの手早いカレーのカウンター (2026年の口コミ)・さらっとしたオリジナルのカレーと細かい肉の牛カレー、昔の新幹線の食堂車を思わせるという「プレミアム牛カレー」(2026年10月)・トッピングと皿: チーズメンチカツカレー920円、プレミアム厚切りロースカツカレー1,040円、チキンカツ、カツのトッピング (2026年9〜10月)・ごろごろ野菜のカレー950円、おかわりできるキャベツ150円 (2026年9〜10月)・カウンターに福神漬けとらっきょう・1,000〜2,000円未満 (食べログ)',
    neighborhood: 'JR京都駅の2階、新幹線中央口のそば',
    gf_detail: 'グルテンフリー不可。ルウのカレーにパン粉のカツのトッピング (2026年の口コミ)。',
    vegan_detail: '要確認。野菜カレー950円があるが、ベースのソースの原材料は不明。牛カレーは肉を使う (2026年10月)。',
    notes: '[カレー・JR京都駅の中、新幹線改札のそば] 新幹線中央口の横、改札の内からも外からも入れる、券売機の早くて安いカレーのカウンター。欧風寄りのカレーに揚げたての豚や鶏のカツ、チーズメンチカツ、ごろごろ野菜のカレー、おかわりできる150円のキャベツ。電車の前にぴったりで、昼も回転が早い。毎日9時〜21時。',
  });
}

// ================================================================ 隈本総合飲食店 MAO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023015/'; const R = TB + 'dtlrvwlst/';
  const MT = day(['11:00', '15:00'], ['18:00', '22:00']); const FS = day(['11:00', '15:00'], ['18:00', '23:00']); const SU = day(['11:00', '16:00']);
  put({
    id: 'kyoto_kumamoto_sogo_mao', name: '隈本総合飲食店 MAO (Kumamoto Sogo Inshokuten MAO)', category: 'OMNI',
    lat: 35.005370, lng: 135.760974, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: the signature is wheat-coated kara-age; lunch also has curry and pork kimchi (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried chicken, pork curry and pork kimchi (2026 reviews).',
    hours_raw: 'Monday–Thursday 11:00–15:00 (last order 14:30) and 18:00–22:00 (last order 21:30); Friday, Saturday and the day before a holiday 11:00–15:00 and 18:00–23:00 (last order 22:30); Sunday and holidays 11:00–16:00 (last order 15:30), with dinner to 23:00 on a Sunday before a holiday; closed on irregular days (Tabelog). Reservations accepted, advised on holidays; one-hour limit at lunch (Tabelog; September 2026). Smartphone ordering, staff take orders if needed (October 2026). 80 seats, private rooms for 6–30+, banquets up to 60 seated (Tabelog). Cards, transit IC, iD, QUICPay and PayPay (Tabelog). A high-ceilinged renovated machiya on Higashinotoin just north of Nishikikoji; 4 min walk from Karasuma or Shijo stations (Tabelog; September 2026).',
    hours: { 0: MT, 1: MT, 2: MT, 3: MT, 4: FS, 5: FS, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin north of Nishikikoji — 4 min walk from Shijo Karasuma',
    cuisine: 'Izakaya and lunch canteen in a machiya (Tabelog; 2026 reviews) · lunch: all-you-can-eat kara-age set ¥1,200–1,300, choose your starting count, rice refills free, small sides and miso soup; daily special; daily special and kara-age set (September–November 2026) · paid flavour changers: ponzu, sweet chili, green-onion salt, shichimi mayo, shiba-zuke tartare ¥50 (2026 reviews) · coarse-ground pork and Kujo negi dashi curry; pork kimchi (October 2026) · evening izakaya and banquet courses (Tabelog) · lunch ¥1,000–2,000, dinner ¥2,000–4,000 (Tabelog)',
    website: null, gmaps: gm('隈本総合飲食店 MAO 京都'), menu_url: null,
    notes: '[Kara-age · Higashinotoin by Shijo Karasuma, all you can eat at lunch] A lofty renovated machiya near Nishiki Market whose lunch is famous for all-you-can-eat kara-age with free rice refills for about ¥1,300 — crisp, juicy and freshly fried, with ponzu, green-onion salt or shiba-zuke tartare to change it up — plus a daily special and a Kujo negi pork curry. Phone ordering; one-hour limit; book on holidays. Izakaya at night.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: an izakaya, beer hall and canteen with private rooms for banquets; registered as an official listing by the operator. A sister concept, 隈本ハイカラ万遍飯店, appears in our crawls. Reviewers in 2026 describe a renovated Kyoto machiya with high ceilings like a lodge and a lunch crowd of office workers.',
      philosophy: null, specialty: 'All-you-can-eat kara-age lunch.',
      anecdotes: [
        { text: 'A November 2026 regular has logged 23 visits, mostly for the kara-age lunch.', source: R + 'B486065279/' },
        { text: 'An October 2026 guest managed eleven pieces in three orders of five, four and two.', source: R + 'B536991869/' },
        { text: 'An October 2026 diner whose phone would not connect ordered from the staff, and chose the Kujo negi pork curry over the kara-age.', source: R + 'B538189983/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・ビアホール・食堂、中京区東洞院通り錦小路上る元竹田町644、阪急烏丸駅・地下鉄四条駅から徒歩4分、月〜木 11:00〜15:00 (L.O.14:30)・18:00〜22:00 (L.O.21:30)、金・土・祝前日 11:00〜15:00・18:00〜23:00 (L.O.22:30)、日・祝 11:00〜16:00 (L.O.15:30)、祝前の日曜は23時まで、不定休、定食は昼のみ、予約可、80席、個室、宴会 着席60名・立食100名、カード・交通系IC・iD・QUICPay・PayPay 可。口コミ (2026年9月〜11月、英語): 天井の高い京町家、唐揚げ食べ放題1,200〜1,300円 (最初の個数を選ぶ、ご飯おかわり自由)、日替わり、日替わりと唐揚げのセット、味変 (ぽん酢、スイートチリ、ねぎ塩、七味マヨ、柴漬けタルタル50円)、粗挽き豚と九条ねぎのだしのポークカレー、豚キムチ、スマホで注文、昼は1時間制、休日は予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B486065279/', R + 'B525808268/', R + 'B534890176/', R + 'B535709737/', R + 'B536067256/', R + 'B536573265/', R + 'B536991869/', R + 'B538189983/', R + 'B538226772/', R + 'B538502531/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smartphone ordering (staff can take orders); one-hour lunch limit; cards, IC and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通り錦小路上る元竹田町644',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005370, 135.760974); cross-checked: GSI 京都府京都市中京区元竹田町644番地 (lot) 30 m; nearest Kyoto record 63 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536067256/', R + 'B538502531/'],
    price_note: 'Prices from September and November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat kara-age set (rice refills)', '¥1,300', 'Lunch', 'no', 'no', 'November 2026; ¥1,200 in September.', 'karaage_tabehodai'),
      it('', '', 'Shiba-zuke tartare sauce', '¥50', 'Lunch', 'ask', 'no', 'November 2026.', 'shibazuke_tartar'),
    ] }, {
    cuisine: '京町家の居酒屋と昼の食堂 (食べログ、2026年の口コミ)・昼: 唐揚げ食べ放題の定食1,200〜1,300円、最初の個数を選び、ご飯のおかわり自由、小鉢と味噌汁付き、日替わり、日替わりと唐揚げのセット (2026年9〜11月)・有料の味変: ぽん酢、スイートチリ、ねぎ塩、七味マヨ、柴漬けタルタル50円 (2026年の口コミ)・粗挽き豚と九条ねぎのだしのポークカレー、豚キムチ (2026年10月)・夜は居酒屋と宴会のコース (食べログ)・昼1,000〜2,000円、夜2,000〜4,000円 (食べログ)',
    neighborhood: '錦小路の北の東洞院通。四条烏丸から徒歩4分',
    gf_detail: 'グルテンフリー不可。名物は小麦の衣の唐揚げで、昼はカレーや豚キムチも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の唐揚げ、豚のカレー、豚キムチ (2026年の口コミ)。',
    notes: '[唐揚げ・四条烏丸の東洞院、昼は食べ放題] 錦市場近くの天井の高い改装した町家。昼は唐揚げ食べ放題とご飯のおかわり自由で1,300円ほどが名物。揚げたてのカリッとジューシーな唐揚げを、ぽん酢、ねぎ塩、柴漬けタルタルで味変。日替わりや九条ねぎのポークカレーも。スマホで注文、1時間制、休日は予約を。夜は居酒屋。',
  });
}

save();
