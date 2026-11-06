// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 25.
//   + 節道 BUSHIDO (freshly shaved bonito rice bowls for breakfast, Sanjo alley)
//   + MONO MONO CAFE (galettes and crepes in a Meiji townhouse, Karasuma Shijo)
//   + 鮨こまつ Sushi Komatsu (tuna-wholesaler sushi counter, à la carte all day, near Kyoto Station)
//   + 茂庵 Moan (hilltop teahouse café on Yoshida-yama)
//   - skip 26045212 祇園すだく鉄板 KOBE BEEF GION SUDAKU TEPPAN (chain: Sudaku brand)
//   - skip 26002234 Cafe & Dining Amber Court (Hotel Nikko Princess Kyoto) (sub-brand of a large parent)
//   Same-name counts first, per brand or operator (2026-11-05): 節道 BUSHIDO — three of the brand on Tabelog (Kyoto, BUSHIDO
//   TOKYO 淡路町, BUSHIDO UTSUNOMIYA), none in data: a small group, drafted. MONO MONO CAFE — one. 鮨こまつ — one (run by a
//   tuna wholesaler). 茂庵 — one. すだく — Tabelog lists 20 Sudaku-named shops (近江牛 yakiniku in Shiga, Aichi, Mie and this
//   Gion teppan): chain.
//   Taken on 2026-11-05: `next core 200` gave 節道 26032618, すだく (skip), Amber Court (skip) and MONO MONO CAFE 26035378;
//   `next notable 200` gave 鮨こまつ 26043688 and 茂庵 26001082. None is in data/kyoto.json: grep by name and address
//   (道祐町135-1 三条食彩ろぉじ, 笋町686, 北不動堂町573-3, 吉田神楽岡町8) found none. Service charges per Tabelog's Japanese
//   original: MONO MONO CAFE 「なし」 (the English translation wrongly says one may be added); the others none listed.
//   Greg's 2026-11-05 rulings applied: non-sexual compliments on looks kept, attributed and dated; no health details.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26045212', 'chain: a Tabelog search for すだく (https://tabelog.com/en/rstLst/?sw=すだく) lists 20 Sudaku-named shops of the Omi-beef brand — 近江牛ホルモン 畜産 すだく 瀬田店 and 八事店, すだく 近江八幡店, 伊勢神宮おはらい町店, 名古屋国際センター店 and others — of which this Gion teppan is one.');
// un-skipped by integrator 2026-11-05 (hotel's own café, no hotel-wide record; like Seven Embers): skip('26002234', 'sub-brand of a large parent: Cafe & Dining Amber Court is the café-restaurant of Hotel Nikko Princess Kyoto (Tabelog listing name, https://tabelog.com/en/kyoto/A2601/A260101/26002234/), a hotel of the Nikko hotels group (brief, 2026-11-05: Okura/Nikko hotels count as a large parent).');

// ================================================================ 節道 BUSHIDO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032618/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '15:00']);
  put({
    id: 'kyoto_bushido_sanjo', name: '節道 (BUSHIDO)', category: 'OMNI',
    lat: 35.008307, lng: 135.763617, cuisine_type: 'donburi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A rice bowl of shaved bonito eaten with dashi soy, with miso soup and pickles; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dish is bonito flakes, with egg and a dashi for ochazuke (2025–26 reviews).',
    hours_raw: '7:00–15:00 daily (Tabelog); an August 2026 diner was told it is open until 14:30. Reservations accepted, advised at weekends; the B set needs a reservation, and early arrivals may be asked to come back at the booked time (Tabelog; October 2025, May 2026). Cash only — no cards, e-money or QR (Tabelog; May 2026). 15 seats: a 6-seat counter downstairs and tables upstairs (Tabelog; September and December 2025). At the end of a narrow alley in the 三条食彩ろぉじ lane off Sanjo; 6 min from Karasuma Oike Stn (Tabelog; November 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo, west of Karasuma — 6 min from Karasuma Oike Stn',
    cuisine: 'One dish: a rice bowl heaped with bonito flakes shaved to order in front of you (2025–26 reviews) · A set ¥1,000 — bonito rice bowl, miso soup with bonito, Kyoto pickles, condiments and a special egg; B set ¥1,200 adds small obanzai such as yuba and wakame salad (October 2025–May 2026) · eat the flakes plain, then with egg and dashi soy, and finish as dashi chazuke from the pot of broth (2025–26 reviews) · extra bonito on request (November 2025)',
    website: null, gmaps: gm('節道 BUSHIDO 京都 三条'), menu_url: null,
    notes: "[Bonito rice bowl · Sanjo, breakfast from 7 a.m.] At the end of a narrow alley off Sanjo, a cook shaves katsuobushi to order and piles it in a fluffy mound over rice: eat it plain, then with egg and dashi soy, then as chazuke. ¥1,000–1,200 with miso soup and pickles. Reviews are mixed — some found the rice too soft and the broth thin, and a September 2026 diner reported a dirty restroom and dusty upstairs room. Cash only; 7:00–15:00 daily.",
    chef_bio: { chef_name: null, roles: ['Shop of the BUSHIDO brand (Tokyo and Utsunomiya shops on Tabelog); staff unnamed'], origin: null,
      background: 'Tabelog lists BUSHIDO TOKYO (Awajicho) and BUSHIDO UTSUNOMIYA under the same name; a March 2026 diner compared it with an often fully booked Shibuya shop. A November 2025 diner found one staff member running the counter.',
      philosophy: null, specialty: 'Freshly shaved bonito rice bowl.',
      anecdotes: [
        { text: 'A September 2026 diner waited about 25 minutes upstairs, noticed dust and a smell from an uncleaned restroom, and found the previous day’s rubbish and no toilet paper there.', source: R + 'B535586571/' },
        { text: 'A May 2026 diner found lukewarm self-serve water, blood spots in the bonito flakes, and a chazuke broth almost like hot water, though the miso soup and pickles were good.', source: R + 'B528922314/' },
        { text: 'A September 2025 diner found the rice mushy and the poured broth diluted, and saw no value for money.', source: R + 'B514022673/' },
        { text: 'A March 2026 returning diner missed the lively bonito-shaving show of five years earlier but found the flavours as good as ever.', source: R + 'B524818037/' },
      ],
      japanese_sources_summary: '食べログ: 丼・日本料理、中京区道祐町135-1 三条食彩ろぉじ、烏丸御池駅から458m、毎日7:00〜15:00、予約可、カード・電子マネー・QR 不可、15席 (カウンターとテーブル)、禁煙。口コミ (2025年9月〜2026年9月、英語): 目の前で削る鰹節を山盛りにした鰹節丼、A定食1,000円 (丼、汁物、京漬物、薬味、こだわり卵)、B定食1,200円 (おばんざい付き、要予約)、出汁茶漬けで締める、ご飯がやわらかいという声、出汁が薄いという声、トイレや2階の清掃が行き届いていないという声 (2026年9月)、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B514022673/', R + 'B514023170/', R + 'B516282360/', R + 'B517169406/', R + 'B517505626/', R + 'B518832317/', R + 'B524816329/', R + 'B524818037/', R + 'B528922314/', R + 'B530967351/', R + 'B533925221/', R + 'B535586571/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick set A or B; book B ahead; bring cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区道祐町135-1 三条食彩ろぉじ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008307, 135.763617); cross-checked: GSI 京都府京都市中京区道祐町135番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524816329/', R + 'B517505626/', R + 'B528922314/'],
    price_note: 'Prices from October 2025–May 2026 reviews.', last_checked: TODAY, items: [
      it('鰹節丼 A定食', '', 'Set A: bonito rice bowl, soup, Kyoto pickles, condiments, egg', '¥1,000', 'Set', 'ask', 'no', 'March and May 2026.', 'set_a'),
      it('', '', 'Set B: set A plus small obanzai (reservation)', '¥1,200', 'Set', 'ask', 'no', 'October 2025–May 2026.', 'set_b'),
    ] }, {
    cuisine: '品は一つ: 目の前で削った鰹節をふわりと山盛りにした丼 (2025〜2026年の口コミ)・A定食1,000円 (鰹節丼、鰹の汁物、京漬物、薬味、こだわり卵)、B定食1,200円は湯葉やわかめのサラダなどのおばんざい付き (2025年10月〜2026年5月)・まず鰹節だけ、次に卵と出汁醤油で、最後は出汁をかけて茶漬けに (2025〜2026年の口コミ)・鰹節の追加もできる (2025年11月)',
    neighborhood: '三条、烏丸の西。烏丸御池駅から徒歩6分',
    gf_detail: '要確認。出汁醤油で食べる鰹節丼に味噌汁と漬物。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰹節が主役で、卵や茶漬けの出汁もある (2025〜2026年の口コミ)。',
    notes: '[鰹節丼・三条、朝7時からの朝ごはん] 三条から入った細い路地の奥。注文ごとに鰹節を削って、ご飯にふわふわの山に盛る。まずそのまま、次に卵と出汁醤油、最後は茶漬けで。味噌汁と漬物付きで1,000〜1,200円。口コミは賛否があり、ご飯がやわらかい、出汁が薄いという声や、2026年9月にはトイレや2階の掃除が行き届いていないという声も。現金のみ、毎日7時〜15時。',
  });
}

// ================================================================ MONO MONO CAFE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035378/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:30']);
  put({
    id: 'kyoto_mono_mono_cafe', name: 'MONO MONO CAFE', category: 'OMNI',
    lat: 35.004811, lng: 135.759436, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Galettes are usually buckwheat, but the crepes are wheat and both share a griddle; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable-heavy galettes are on the menu, but most come with egg, ham, bacon or cheese (2026 reviews).',
    hours_raw: '11:00–18:30 (last order 17:30), closed irregularly — see the official Instagram (Tabelog). Reservations accepted; 90-minute limit when booked up (Tabelog; June 2026). Lunch set of galette, mini crepe and drink on weekdays (June 2026); another June 2026 diner describes lunch as weekend-only — check. No service charge (Tabelog, Japanese text: 「なし」). 34 seats on two floors, with sofas (Tabelog; March and August 2026). Cash or PayPay; no cards (Tabelog). A renovated Meiji-era townhouse on Karasuma-dori north of Shijo; 1 min from Karasuma Stn exit 22 (Tabelog; 2026 reviews). Opened 7 January 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma north of Shijo — 1 min from Karasuma Stn',
    cuisine: 'Galettes and crepes, sweet and savoury, in a renovated Meiji townhouse (2026 reviews) · galettes: yuba and vegetables, yuba and prosciutto (+¥200 in the set), asparagus and bacon with avocado, anchovy, tomato and egg (2026 reviews) · lunch set of galette, mini crepe and drink; galette and drink ¥1,300 (June–September 2026) · crepes with plain or matcha batter and three fillings, butter and sugar, lemon sorbet, "Teberu" with matcha ice cream; cream +¥100 (2026 reviews) · cream sodas such as apricot-mango and honey lemon (June–July 2026)',
    website: 'https://monomonocafe.wixsite.com/website', gmaps: gm('MONO MONO CAFE 烏丸'), menu_url: null,
    notes: "[Galettes & crepes · Karasuma Shijo, a Meiji townhouse café] A café of galettes and crepes in a renovated Meiji-era townhouse a minute from Karasuma Station, with sofas among the plants upstairs. The lunch set — a vegetable-packed galette, a mini crepe and a drink — is good value; the crepes come in plain or matcha batter. One diner found the simplest crepe forgettable. Cash or PayPay. Open 11:00–18:30.",
    chef_bio: { chef_name: null, roles: ['Café; staff unnamed'], origin: null,
      background: 'Opened 7 January 2021 in a renovated Meiji-era townhouse (Tabelog; September 2026).',
      philosophy: null, specialty: 'Galettes; crepes.',
      anecdotes: [
        { text: 'An August 2026 diner found the plain crepe chewy and good but not memorable.', source: R + 'B533933030/' },
        { text: 'A September 2026 diner found the galette on the small side for big appetites, but the set with a mini crepe filling.', source: R + 'B535638684/' },
        { text: 'An August 2026 visitor found the upstairs room full of women and a male friend felt out of place.', source: R + 'B533933030/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・クレープ・ガレット・フレンチ、中京区烏丸通四条上ル笋町686、烏丸駅22番出口から徒歩1分、11:00〜18:30 (L.O. 17:30)、不定休 (公式インスタグラムで確認)、予約可、サービス料なし、34席、禁煙、カード不可、PayPay 可、2021年1月7日オープン。口コミ (2026年3〜9月、英語): 明治の町家を改装、湯葉と野菜のガレット、生ハム、アスパラとベーコン、ガレットとミニクレープとドリンクのランチ、ガレットとドリンク1,300円、抹茶の生地のクレープ、クリームソーダ、満席時は90分制、ランチは平日という声と週末のみという声。',
      confidence: 'medium', sources: [TB, R + 'B517912196/', R + 'B529507958/', R + 'B529863646/', R + 'B531609551/', R + 'B531839186/', R + 'B533741193/', R + 'B533933030/', R + 'B534541044/', R + 'B534916232/', R + 'B535638684/', R + 'B536161823/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; book at lunchtime; cash or PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏丸通四条上ル笋町686',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004811, 135.759436); cross-checked: GSI 京都府京都市中京区笋町686番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529507958/', R + 'B535638684/'],
    price_note: 'Prices from June and September 2026 reviews; no service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Galette and drink set', '¥1,300', 'Lunch', 'ask', 'ask', 'June 2026.', 'galette_drink'),
      it('', '', 'Yuba and prosciutto galette (supplement in the lunch set)', '+¥200', 'Lunch', 'ask', 'no', 'September 2026.', 'yuba_prosciutto'),
    ] }, {
    cuisine: '改装した明治の町家で、甘いものと食事系のガレットとクレープ (2026年の口コミ)・ガレット: 湯葉と野菜、湯葉と生ハム (セットで+200円)、アスパラとベーコンとアボカド、アンチョビとトマトと卵 (2026年の口コミ)・ガレット、ミニクレープ、ドリンクのランチセット、ガレットとドリンク1,300円 (2026年6〜9月)・プレーンか抹茶の生地に具を3つ選ぶクレープ、バターシュガー、レモンシャーベット、抹茶アイスの「Teberu」、生クリーム+100円 (2026年の口コミ)・杏とマンゴーやはちみつレモンのクリームソーダ (2026年6〜7月)',
    neighborhood: '四条の北の烏丸通。烏丸駅から徒歩1分',
    gf_detail: '要確認。ガレットはそば粉が一般的だが、クレープは小麦で、同じ鉄板で焼く。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。野菜たっぷりのガレットもあるが、多くは卵、ハム、ベーコン、チーズ入り (2026年の口コミ)。',
    notes: '[ガレット・クレープ・烏丸四条、明治の町家カフェ] 烏丸駅から1分、改装した明治の町家のガレットとクレープのカフェ。2階には緑に囲まれたソファ席。野菜たっぷりのガレット、ミニクレープ、ドリンクのランチセットはお得で、クレープはプレーンか抹茶の生地。シンプルなクレープは印象に残らないという声も。現金か PayPay。11時〜18時30分。',
  });
}

// ================================================================ 鮨こまつ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26043688/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '21:00']);
  put({
    id: 'kyoto_sushi_komatsu', name: '鮨こまつ (Sushi Komatsu)', category: 'OMNI',
    lat: 34.987573, lng: 135.754958, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi and sashimi with soy and sauces, plus tempura and fried dishes (2025–26 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and seafood counter (2025–26 reviews).',
    hours_raw: '11:30–21:00 straight through (last orders food 20:00, drinks 20:30); closed Tuesday and Wednesday (Tabelog). Reservations accepted; phone even when online slots are full; a booking more than 30 minutes late is cancelled (Tabelog). Walk-ins sometimes seated (October 2026). À la carte; the menu shows no prices, a diner noted (October 2026). 15 seats round a U-shaped white-wood counter; groups up to 5 (Tabelog; May and October 2026). Cards, IC cards, e-money and QR (Tabelog). Down a narrow alley; 6 min from Kyoto Stn (Tabelog; February 2025). Opened 1 October 2024 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North of Kyoto Station — 6 min walk',
    cuisine: 'Sushi counter run by a tuna wholesaler, ordered à la carte all day (Tabelog, shop text; 2025–26 reviews) · lean, fatty and rare cuts of tuna — otoro, chutoro, nōten — sardine, sea bream, uni, kuro-mutsu, torigai, sayori, botan-ebi, guji, tsubugai (2025–26 reviews) · sashimi platters, tempura of shrimp, anago, firefly squid and wild vegetables, whale bacon, octopus, mozuku, Amakusa oysters (2026 reviews) · lunch set of 8 sushi, a negitoro roll and tempura (March 2026) · two people about ¥24,000 for 9 pieces each, tempura and drinks (July 2026); about ¥30,000 for two with omakase sushi and tempura (October 2026) · sake such as Bakuren from Yamagata (October 2026)',
    website: null, gmaps: gm('鮨こまつ 京都駅'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Kyoto Station, a tuna wholesaler's counter, open all day] A white-wood U-shaped counter down an alley north of Kyoto Station, run by a tuna wholesaler and open straight through from 11:30 — handy for a late lunch. Order à la carte: rare tuna cuts, uni, guji, then tempura of anago or seasonal vegetables. Friendly chefs; prices aren't on the menu, but two people paid about ¥24,000–30,000 for a full meal. Closed Tuesday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed); formerly at Sushi Masahiro at Kyoto Station (April 2026 review)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): sushi from a tuna wholesaler that knows tuna inside out, with lean, fatty and rare cuts served à la carte; opened 1 October 2024. A March 2026 diner heard it previously operated as Komatsu Shokudo; an April 2026 diner learned the chefs had worked at Sushi Masahiro at Kyoto Station. An October 2026 diner described the chef as friendly "with a wonderful smile".',
      philosophy: null, specialty: 'Rare tuna cuts; à la carte sushi and tempura.',
      anecdotes: [
        { text: 'An April 2026 diner found the restaurant mostly full of guests from abroad, from countries such as India and Korea; an October 2026 couple found the clientele mostly local.', source: R + 'B526338916/' },
        { text: 'An October 2026 diner’s wife worried because the menu showed no prices; sushi and tempura for two came to about ¥30,000 before drinks.', source: R + 'B537222773/' },
        { text: 'A March 2026 diner came at 15:30 after missing lunch elsewhere and was glad it stays open.', source: R + 'B523710873/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、下京区北不動堂町573-3、京都駅から徒歩6分、木〜月 11:30〜21:00 (L.O. 料理20:00、ドリンク20:30)、火・水曜休み、予約可 (ネットで空きがなくても電話で相談)、30分以上の遅刻はキャンセル扱い、カウンター15席、カード・電子マネー・QR 可、2024年10月1日オープン、まぐろの仲卸直営、赤身・トロ・希少部位、アラカルト。口コミ (2025年2月〜2026年10月、英語): 通し営業、のうてん、雲丹、ぐじ、天ぷら、鯨のベーコン、もと Komatsu Shokudo、Sushi Masahiro 出身の職人、品書きに値段なし、2人で約24,000〜30,000円、海外の客が多いという声と地元客が多いという声。',
      confidence: 'medium', sources: [TB, R + 'B513743392/', R + 'B522521796/', R + 'B523710873/', R + 'B524812738/', R + 'B526338916/', R + 'B527427874/', R + 'B531446178/', R + 'B531859954/', R + 'B532761499/', R + 'B533534359/', R + 'B537222773/', R + 'B537322838/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order à la carte at the counter (no prices shown); friendly chefs; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区北不動堂町573-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.987573, 135.754958); cross-checked: GSI 京都府京都市下京区北不動堂町573番地 (lot) 89m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531859954/', R + 'B537222773/'],
    price_note: 'The menu shows no prices; two people paid about ¥24,000 (July 2026) and about ¥30,000 before drinks (October 2026).', last_checked: TODAY, items: [
      it('', '', 'À la carte sushi, sashimi and tempura', 'about ¥12,000–15,000 a head', 'À la carte', 'ask', 'no', 'July and October 2026.', 'a_la_carte'),
      it('', '', 'Lunch set: 8 sushi, negitoro roll, tempura', '', 'Lunch', 'ask', 'no', 'March 2026.', 'lunch_set'),
    ] }, {
    cuisine: 'まぐろの仲卸直営の寿司カウンター。通し営業でアラカルト (食べログの店の紹介、2025〜2026年の口コミ)・赤身、トロ、のうてんなど希少部位のまぐろ (大トロ、中トロ)、いわし、鯛、雲丹、黒むつ、とり貝、さより、ぼたん海老、ぐじ、つぶ貝 (2025〜2026年の口コミ)・刺身の盛り合わせ、海老・穴子・ホタルイカ・山菜の天ぷら、鯨のベーコン、蛸、もずく、Amakusa の牡蠣 (2026年の口コミ)・握り8貫とねぎとろ巻きと天ぷらの昼のセット (2026年3月)・2人で9貫ずつと天ぷらと飲み物で約24,000円 (2026年7月)、おまかせの寿司と天ぷらで2人約30,000円 (2026年10月)・Yamagata の Bakuren などの日本酒 (2026年10月)',
    neighborhood: '京都駅の北。徒歩6分',
    gf_detail: '要確認。醤油やたれを使う寿司と刺身、天ぷらや揚げ物もある (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚と魚介のカウンター (2025〜2026年の口コミ)。',
    notes: '[寿司・京都駅、まぐろ仲卸の通し営業のカウンター] 京都駅の北の路地の、白木の U 字カウンター。まぐろの仲卸が営み、11時30分から通しで開いているので遅めの昼にも。アラカルトで希少部位のまぐろ、雲丹、ぐじ、それから穴子や季節の野菜の天ぷら。職人は気さく。品書きに値段はないが、2人で24,000〜30,000円ほど。火・水曜休み。',
  });
}

// ================================================================ 茂庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001082/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '17:00']);
  put({
    id: 'kyoto_moan_yoshidayama', name: '茂庵 (Moan)', category: 'OMNI',
    lat: 35.026301, lng: 135.787085, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Drinks, cakes, kakigori and a hot sandwich of anko and mochi on bread; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Teas, coffee and kakigori with fruit syrups are likely options, but the sandwich has butter and the cakes are baked (2026 reviews).',
    hours_raw: 'Wed–Sun 12:00–17:00; closed Monday and Tuesday (Tabelog). Reservations: the official site says the café does not take reservations (「茂庵カフェはご予約をお受けしておりません。」) and can be full on fine spring and autumn days — phone or check the website for seats; Tabelog says weekend and holiday bookings are taken for up to an hour, and several 2026 diners booked. No food menu, light meals included (official site): drinks, cakes, cookies, kakigori in summer (2026 reviews). Card: AMEX only (Tabelog). 35 seats on the upper floor with windows over the city; shoes off (Tabelog; April 2026). Cars only to the foot of Yoshida-yama; a 15-minute walk up from the Jodo-ji or Ginkaku-ji bus stops, about 30 minutes from Demachiyanagi (Tabelog; official site).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Top of Yoshida-yama — 15 min walk from the Ginkaku-ji bus stop',
    cuisine: 'Hilltop café in a Taisho-era building registered as a Kyoto City tangible cultural property, with views over the city (April 2026) · anko and mochi butter hot sandwich set with Japanese black tea and ice cream; matcha ice cream; chiffon cake; seasonal kakigori with yuzu, grape or fresh fruit syrup in summer; yuzu soda; coffee with a small sweet (2026 reviews) · an An Mochi butter toast, black tea and matcha ice cream came to ¥1,500 (May 2026) · no meals (official site)',
    website: 'http://www.mo-an.com/', gmaps: gm('茂庵 吉田山 カフェ'), menu_url: null,
    notes: "[Café · Yoshida-yama, tea in the treetops] A Taisho-era building at the top of Yoshida-yama, reached only on foot — a 15-minute climb from the Ginkaku-ji side — where the upstairs room opens on all sides to the forest and the city below. Drinks, cakes and an anko-mochi butter sandwich, kakigori in summer; no meals. The official site says no reservations and it fills on fine days; Tabelog says weekend bookings for an hour. Wear sneakers. Wed–Sun 12:00–17:00.",
    chef_bio: { chef_name: null, roles: ['Café; staff unnamed'], origin: null,
      background: 'Per the official site: a café reached only on foot at the top of Yoshida-yama, serving no meals. An April 2026 diner says the building dates from the Taisho era and is a Kyoto City registered tangible cultural property; it opened a tea room and an underground pantry for the Kyoto Modern Architecture Festival (October 2026).',
      philosophy: null, specialty: 'Anko-mochi butter sandwich; kakigori.',
      anecdotes: [
        { text: 'An April 2026 visitor came on a pilgrimage to a location from an NHK BS drama and found a lively group of older women a bit overwhelming before the birdsong returned.', source: R + 'B526340262/' },
        { text: 'An April 2026 hiker found the path steep enough to leave a gym-goer out of breath.', source: R + 'B527167928/' },
        { text: 'During the October 2026 Kyoto Modern Architecture Festival, pork miso soup and rice balls were served outside.', source: R + 'B538468859/' },
      ],
      japanese_sources_summary: '公式サイト (mo-an.com): 車は吉田山のふもとまで、どのルートでも最後は徒歩、茂庵カフェは予約を受けていない、春・秋・晴れの日は満席になることもある、空席状況は電話かサイトで、軽食を含む食事メニューの提供はない。食べログ: カフェ、左京区吉田神楽岡町8 吉田山山頂、浄土寺・銀閣寺バス停から徒歩15分、水〜日 12:00〜17:00、月・火曜休み、土日祝は最大1時間の予約可、35席、禁煙、カードは AMEX のみ。口コミ (2026年4〜10月、英語): 大正時代の建物で京都市の登録有形文化財、2階から市街の眺め、あんこと餅のバターホットサンド、抹茶アイス、かき氷、柚子ソーダ、Kyoto Modern Architecture Festival。',
      confidence: 'medium', sources: [TB, 'http://www.mo-an.com/', R + 'B526340262/', R + 'B526954069/', R + 'B527167928/', R + 'B527301195/', R + 'B527818460/', R + 'B528711812/', R + 'B529943213/', R + 'B531183106/', R + 'B532873772/', R + 'B535307105/', R + 'B538468859/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk up in good shoes; check seats by phone or website; AMEX is the only card.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区吉田神楽岡町8 吉田山山頂',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.026301, 135.787085); cross-checked: GSI 京都府京都市左京区吉田神楽岡町8番地 (lot) 107m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527301195/'],
    price_note: 'Only a combined bill found: An Mochi butter toast, black tea and matcha ice cream ¥1,500 (May 2026).', last_checked: TODAY, items: [
      it('', '', 'Anko and mochi butter hot sandwich set (with black tea and ice cream)', '', 'Café', 'no', 'no', 'April–May 2026.', 'anmochi_sand'),
      it('', '', 'Seasonal kakigori with tea', '', 'Café', 'ask', 'ask', 'July–September 2026.', 'kakigori'),
    ] }, {
    cuisine: '京都市の登録有形文化財という大正時代の建物の、市街を見下ろす山上のカフェ (2026年4月)・あんこと餅のバターホットサンドと和紅茶とアイスのセット、抹茶アイス、シフォンケーキ、夏は柚子やぶどうや果物のシロップのかき氷、柚子ソーダ、小さなお菓子の付いたコーヒー (2026年の口コミ)・あん餅バタートーストと紅茶と抹茶アイスで1,500円 (2026年5月)・食事はない (公式サイト)',
    neighborhood: '吉田山の山頂。銀閣寺バス停から徒歩15分',
    gf_detail: '要確認。飲み物、ケーキ、かき氷、パンであんこと餅を挟んだホットサンド。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。お茶、コーヒー、果物シロップのかき氷は可能性があるが、サンドにはバター、ケーキは焼き菓子 (2026年の口コミ)。',
    notes: '[カフェ・吉田山、木々の上のお茶] 吉田山の山頂の大正時代の建物で、歩いてしか行けない (銀閣寺側から15分の登り)。2階は四方の窓が森と町に開ける。飲み物、ケーキ、あんこと餅のバターサンド、夏はかき氷。食事はない。公式サイトは予約不可で晴れの日は満席になると書き、食べログは週末に1時間の予約可とある。歩きやすい靴で。水〜日 12時〜17時。',
  });
}

save();
