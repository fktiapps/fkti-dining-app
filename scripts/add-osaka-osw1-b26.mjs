// Osaka sweep (2-mile circle around Dotonbori), CORE list; worker osw1 (lane: Tabelog id mod 4 = 0), batch 26.
//   + レストラン＆バー 17CLUB (brunch buffet, Kobe beef dinners and a bar in APA Hotel & Resort Osaka Namba Eki Mae Tower, 2F)
//   + イタリアン酒場 テンパール Italian Sakaba Tenpaaru (Italian izakaya with Awaji fresh pasta and meat courses, 2015)
//   + 星空キッチン nova Hoshizora Kitchen nova (creative Italian bar open to 5 a.m. in a two-storey designer space, 2019)
//   + cafe Mode (all-day Italian café facing Horie Park; Kobe beef steak sets, cakes, dog-friendly)
//   - skip(): Cafe ABSINTHE (one review in 2025–26).
//   Lane: `queue.mjs osaka next core 600`, mod-4 = 0, in order: 27144352 +, 27084488 +, 27013036 skip, 27116064 +, 27017616 +.
//   Chain check for the four kept: each is the only shop of its name in shops.jsonl; 17CLUB is the hotel's own restaurant. None
//   is in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-26');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27013036', 'Too thin for a full record: of ten reviews read, only one is from 2025–26 (April 2025); the rest are from 2024. (The listing also says the operator has three Namba locations.)');

// ================================================================ レストラン＆バー 17CLUB
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27144352/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.apahotel.com/resort/osaka-namba-ekimae-tower/restaurant/';
  const H = day(['06:30', '14:00'], ['17:00', '23:00']); const FS = day(['06:30', '14:00'], ['17:00', '24:00']);
  put({
    id: 'osaka_17club_apa_namba', name: 'レストラン＆バー 17CLUB (Restaurant & Bar 17CLUB)', category: 'OMNI',
    lat: 34.666118, lng: 135.495978, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The brunch buffet includes takoyaki, curry and burgers; the dinner is Kobe beef steak and hamburg.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The buffet has salads, local Osaka vegetables and side dishes, but most mains are meat or fish.',
    hours_raw: 'Brunch buffet 6:30–14:00; dinner 18:00–21:30; bar 17:00–23:00 (to 24:00 on Fridays, Saturdays and the days before holidays); open year-round (Tabelog). Reservations accepted; private hire on request (Tabelog). Cards, e-money and QR payments (Tabelog). 154 seats, up to 120 seated or 180 standing, private rooms for 10–20 (Tabelog). Many overseas hotel guests; queues at busy times (July–August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: FS, 5: FS, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minatomachi 1-2-13, APA Hotel & Resort Osaka Namba Eki Mae Tower 2F — 1 min from JR Namba Stn east exit',
    cuisine: 'Hotel restaurant and bar: a "theme park" brunch buffet of Kinki-region ingredients and Osaka vegetables with live cooking stations, 6:30–14:00 (Tabelog) · brunch weekdays ¥3,190 booked or ¥3,850 walk-in, weekends and holidays ¥3,850; children 4–11 ¥1,870–2,310 (Tabelog) · buffet items: salads, yogurt, takoyaki, APA curry, tuna tataki marinated in soy with a soft-boiled egg, pudding, a Kobe beef burger; capsule coffee and soft drinks (July–September 2026) · dinner of Kobe beef cooked several ways, a black wagyu steak course with dessert and coffee, hamburg steak (Tabelog; July–August 2026)',
    website: SITE, gmaps: gm('17CLUB アパホテル なんば駅前タワー'), menu_url: null,
    notes: "[Hotel restaurant · JR Namba, a big buffet and Kobe beef] The restaurant and bar on the second floor of the 40-storey APA Hotel & Resort tower by JR Namba, more elegant than the brand suggests. Its main draw is a long brunch buffet (6:30 a.m.–2 p.m.) built on Kinki-region produce with live cooking stations: takoyaki, APA curry, soy-marinated tuna with a soft egg, a Kobe beef burger and puddings, ¥3,190 booked on weekdays or ¥3,850 at the door. In the evening it serves Kobe and black wagyu steak courses and keeps a bar open until 11 p.m. (midnight at weekends). Expect queues when the hotel is full; many diners are overseas guests.",
    chef_bio: { chef_name: null, roles: ['Hotel kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: restaurant, bar and hotel dining on 2F of APA Hotel & Resort Osaka Namba Eki Mae Tower; a "theme park brunch buffet" of Kinki ingredients and local Osaka vegetables with popular regional dishes and live cooking; Kobe beef dinners cooked several ways; private hire up to 180 standing. Hotel site: apahotel.com.', philosophy: null, specialty: 'Brunch buffet; Kobe beef dinner.',
      anecdotes: [
        { text: '"The combination of tuna tataki marinated in soy sauce and a rich soft-boiled egg was incredible!" — September 2026, the breakfast buffet.', source: R + 'B535209916/' },
        { text: '"The drink bar featured a coffee machine with capsules, amsu tea, and a variety of soft drinks." — July 2026, the ¥3,190 brunch.', source: R + 'B531018140/' },
        { text: '"I was quite frustrated with the long lines for everything." — August 2026, on a full hotel.', source: R + 'B534227315/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): レストラン＆バー 17CLUB (アパホテル＆リゾート 大阪なんば駅前タワー)、レストラン・バー・ホテル、大阪市浪速区湊町1-2-13 アパホテル＆リゾート 大阪なんば駅前タワー 2F、JR難波駅東口から徒歩1分、ブランチ6:30〜14:00、ディナー18:00〜21:30、バー17:00〜23:00 (金土・祝前日は24:00まで)、年中無休、予約可、カード・電子マネー・QR 可、154席 (着席120名、立食180名)、10〜20名の個室。店の紹介 (英訳): 近畿の食材と大阪の野菜のテーマパークのようなブランチのビュッフェ、ライブキッチン、平日は予約3,190円・当日3,850円、土日祝3,850円、子ども (4〜11歳) 1,870〜2,310円、夜は神戸牛をいろいろな調理法で。口コミ(2026年6月〜9月): サラダ、ヨーグルト、たこ焼き、APA カレー、まぐろのたたきの醤油漬けと半熟卵、プリン、神戸牛のバーガー、カプセルのコーヒー、黒毛和牛のステーキのコース、ハンバーグ、高級なレストランのような雰囲気、海外の客が多い、満室の日は行列。',
      confidence: 'medium', sources: [TB, SITE, R + 'B530236545/', R + 'B531018140/', R + 'B531907668/', R + 'B532847408/', R + 'B532993257/', R + 'B533807015/', R + 'B534227315/', R + 'B534309162/', R + 'B535047958/', R + 'B535209916/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel buffet with many overseas guests (July 2026); no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区湊町1-2-13 アパホテル＆リゾート 大阪なんば駅前タワー 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the hotel site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区湊町一丁目2番13号 (go) 43m (a large hotel tower); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B531018140/'],
    price_note: 'Buffet prices from the Tabelog listing (2026) and a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Brunch buffet, weekday, booked ahead', '¥3,190', 'Brunch', 'ask', 'ask', 'Tabelog listing; July 2026 review.', 'brunch_weekday'),
      it('', '', 'Brunch buffet, walk-in or weekend', '¥3,850', 'Brunch', 'ask', 'ask', 'Tabelog listing.', 'brunch_walkin'),
      it('', '', 'Black wagyu steak course', '', 'Dinner', 'ask', 'no', 'July 2026 review.', 'wagyu_course'),
    ] }, {
    cuisine: 'ホテルのレストランとバー: 近畿の食材と大阪の野菜の「テーマパーク」のようなブランチのビュッフェとライブキッチン、6:30〜14:00 (食べログ)・ブランチは平日の予約3,190円・当日3,850円、土日祝3,850円。子ども (4〜11歳) は1,870〜2,310円 (食べログ)・ビュッフェ: サラダ、ヨーグルト、たこ焼き、APA カレー、半熟卵とまぐろのたたきの醤油漬け、プリン、神戸牛のバーガー。カプセルのコーヒーとソフトドリンク (2026年7月〜9月)・夜はいろいろな調理法の神戸牛、デザートとコーヒーつきの黒毛和牛のステーキのコース、ハンバーグ (食べログ、2026年7月〜8月)',
    neighborhood: '湊町1-2-13、アパホテル＆リゾート 大阪なんば駅前タワー2階。JR難波駅東口から1分',
    gf_detail: '要確認。グルテンの情報なし。ブランチのビュッフェにはたこ焼き、カレー、バーガー、夜は神戸牛のステーキとハンバーグ。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ビュッフェにはサラダや大阪の野菜、副菜もあるが、メインは肉や魚。',
    notes: '[ホテルのレストラン・JR難波、大きなビュッフェと神戸牛] JR難波のそばの40階建てのアパホテル＆リゾートの2階のレストランとバーで、ブランドの印象より上品。目玉は朝6時半から午後2時までの長いブランチのビュッフェで、近畿の食材とライブキッチンが売り。たこ焼き、APA カレー、半熟卵とまぐろの醤油漬け、神戸牛のバーガー、プリンが並び、平日の予約は3,190円、当日は3,850円。夜は神戸牛や黒毛和牛のステーキのコース、バーは夜11時 (週末は0時) まで。満室の日は行列があり、客の多くは海外のホテルの客。',
  });
}

// ================================================================ イタリアン酒場 テンパール
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27084488/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'osaka_italian_sakaba_tenpaaru_namba', name: 'イタリアン酒場 テンパール (Italian Sakaba Tenpaaru)', category: 'OMNI',
    lat: 34.664258, lng: 135.498253, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: fresh wheat pasta, pizza, gyoza and baguette are central.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-focused Italian izakaya; even the salad is topped with egg and Parmesan.',
    hours_raw: 'Daily 17:00–1:00 (last orders 24:00 food, 0:30 drinks); irregular closing days (Tabelog). Reservations accepted (Tabelog). Cards and QR payments; no e-money (Tabelog). 35 seats at a counter and tables, a semi-private room; private hire up to 45 standing (Tabelog; October 2026). Opened 31 January 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba-naka 1-9-11, KOUSAKUビル 1F, a little away from the Namba bustle — 3 min from Namba Stn exit 31',
    cuisine: 'Italian izakaya of seasonal meat, vegetables and seafood with sommelier-chosen wines: fresh pasta from the long-established Awaji Noodle Company and fish direct from Ajiro fishing port in Tottori (Tabelog) · meat course with all-you-can-drink ¥4,500 (Tabelog): warm-egg Caesar salad heaped with Parmesan, two Italian prosciutti, spicy kara-age with house mayonnaise, horumon ajillo with baguette, basil spaghetti with Hungarian duck breast on fresh pasta, roast beef with onion sauce (September–October 2026) · five-kind appetizer platter, Italian teppan gyoza with truffle and porcini, unagi kabayaki and sansho pizza, sea urchin cream pasta, tuna carpaccio of the day (October 2026)',
    website: null, gmaps: gm('イタリアン酒場 テンパール 難波'), menu_url: null,
    notes: "[Italian · Namba-naka, an Italian izakaya of meat and fresh pasta] A small, lively Italian izakaya a few minutes from Namba Station but off the main crush, open until 1 a.m. with a counter and a few tables. The kitchen uses fresh pasta from Awaji's long-established Awaji Noodle Company and fish straight from Tottori's Ajiro port, and plays with Japanese touches: Italian teppan gyoza with truffle and porcini, an unagi and sansho pizza. The meat course with all-you-can-drink (¥4,500) runs from a Parmesan-buried Caesar salad and prosciutto to a duck-and-basil spaghetti and roast beef. Packed even on weekdays in October 2026; book ahead.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff and a sommelier (unnamed; Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: authentic Italian with seasonal ingredients and sommelier-chosen wines; fresh pasta by the long-established Awaji Noodle Company; fresh fish direct from Tottori Ajiro fishing port; courses with all-you-can-drink; opened 31 January 2015.', philosophy: null, specialty: 'Meat course; fresh pasta.',
      anecdotes: [
        { text: '"Basil Spaghetti with Hungarian Duck Breast using Fresh Pasta from Awaji Noodle Company" — September 2026, from the meat course.', source: R + 'B535367100/' },
        { text: '"You can feel a hint of Japanese influence, with ingredients like enoki mushrooms and even gyoza on the menu." — October 2026.', source: R + 'B538203669/' },
        { text: '"Located a bit away from the bustling center of Namba, this hidden Italian gem is perfect for adults." — October 2026.', source: R + 'B537155538/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): イタリアン酒場 テンパール、イタリアン・居酒屋・ステーキ、大阪市浪速区難波中1-9-11 KOUSAKUビル 1F、なんば駅31番出口から徒歩3分、毎日17:00〜翌1:00 (料理L.O.24:00、ドリンクL.O.0:30)、不定休、予約可、カード・QR 可、電子マネー不可、35席 (立食45名)、半個室、2015年1月31日オープン。店の紹介 (英訳): 季節の肉、野菜、魚介の本格イタリアンとソムリエが選ぶワイン、老舗の Awaji の製麺所の生パスタ、Tottori の Ajiro 漁港から直送の鮮魚、飲み放題つきの肉のコース4,500円。口コミ(2026年9月〜10月): 温玉のシーザーサラダとたっぷりのパルメザン、イタリアの生ハム2種、自家製マヨネーズの辛い唐揚げ、ホルモンのアヒージョとバゲット、ハンガリーの鴨のバジルのスパゲッティ、ローストビーフ、前菜5種、トリュフとポルチーニのイタリアン鉄板餃子、うなぎの蒲焼きと山椒のピザ、うにのクリームパスタ、まぐろのカルパッチョ、平日も満席。',
      confidence: 'medium', sources: [TB, R + 'B535276832/', R + 'B535367100/', R + 'B536549153/', R + 'B536663648/', R + 'B537008515/', R + 'B537144047/', R + 'B537155538/', R + 'B537447435/', R + 'B538173896/', R + 'B538203669/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tables; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-9-11 KOUSAKUビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目9番11号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course price from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Meat course with all-you-can-drink', '¥4,500', 'Courses', 'no', 'no', 'Tabelog listing; September–October 2026 reviews.', 'meat_course'),
      it('', '', 'Italian teppan gyoza with truffle and porcini', '', 'Dishes', 'no', 'no', 'October 2026 review.', 'italian_gyoza'),
      it('', '', 'Sea urchin cream pasta', '', 'Pasta', 'no', 'no', 'October 2026 review.', 'uni_pasta'),
    ] }, {
    cuisine: '季節の肉、野菜、魚介とソムリエが選ぶワインのイタリアンの居酒屋: 老舗の Awaji の製麺所の生パスタ、Tottori の Ajiro 漁港から直送の魚 (食べログ)・飲み放題つきの肉のコース4,500円 (食べログ): パルメザンたっぷりの温玉のシーザーサラダ、イタリアの生ハム2種、自家製マヨネーズの辛い唐揚げ、バゲットつきのホルモンのアヒージョ、生パスタのハンガリーの鴨とバジルのスパゲッティ、玉ねぎのソースのローストビーフ (2026年9月〜10月)・前菜5種の盛り合わせ、トリュフとポルチーニのイタリアン鉄板餃子、うなぎの蒲焼きと山椒のピザ、うにのクリームパスタ、日替わりのまぐろのカルパッチョ (2026年10月)',
    neighborhood: '難波中1-9-11、KOUSAKUビル1階、なんばのにぎわいから少し離れて。なんば駅31番出口から3分',
    gf_detail: 'グルテンフリーではありません。小麦の生パスタ、ピザ、餃子、バゲットが中心。',
    vegan_detail: 'ヴィーガンではありません。肉が中心のイタリアンの居酒屋で、サラダにも卵とパルメザン。',
    notes: '[イタリアン・難波中、肉と生パスタのイタリアンの居酒屋] なんば駅から数分だがにぎわいから少し外れた、カウンターとテーブルの小さくにぎやかなイタリアンの居酒屋で、深夜1時まで。生パスタは Awaji の老舗の製麺所、魚は Tottori の Ajiro 漁港から直送で、和の遊びも。トリュフとポルチーニのイタリアン鉄板餃子、うなぎと山椒のピザなど。飲み放題つきの肉のコース (4,500円) は、パルメザンに埋もれたシーザーサラダや生ハムから、鴨とバジルのスパゲッティ、ローストビーフまで。2026年10月は平日も満席で、予約がおすすめ。',
  });
}

// ================================================================ 星空キッチン nova
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27116064/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '05:00']);
  put({
    id: 'osaka_hoshizora_kitchen_nova', name: '星空キッチン nova (Hoshizora Kitchen nova)', category: 'OMNI',
    lat: 34.674549, lng: 135.503319, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pasta, pizza and shrimp bread are on the menu; carpaccio and steak may be simpler.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Pickles and a margherita appear, but most dishes are meat, fish or cheese; one sauce uses white miso.',
    hours_raw: 'Tue–Sun 18:00–5:00 (last order 4:00); closed Monday (Tabelog). Reservations accepted; two-hour limit when busy and on courses; cancelled after 15 minutes without word (Tabelog; October 2026). Cards, e-money and QR payments (Tabelog). 40 seats: a long counter on 1F, private and semi-private rooms and sofa seats above; private rooms by reservation (Tabelog; April 2026). Stairs are narrow and steep (March and October 2026). Opened 1 May 2019 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-19-2 — 3 min from Shinsaibashi Stn exit 4 (nearest the Daimaru and PARCO exits)',
    cuisine: 'Creative Italian and wine in a two-storey designer space, by the glass and the bottle, until 5 a.m. (Tabelog; 2026 reviews) · special assorted appetizer platter (mackerel with a sauce of dried tomato, eggplant and white miso), fresh fish carpaccio, caprese, pickles, shrimp bread (May–October 2026) · Bolognese, carbonara, peperoncino, margherita pizza, outside skirt steak (March–April 2026) · reservation-only courses for birthdays and parties (Tabelog)',
    website: null, gmaps: gm('星空キッチン nova 東心斎橋'), menu_url: null,
    notes: "[Italian · Higashi-Shinsaibashi, creative Italian until 5 a.m.] A two-storey Italian bar three minutes from Shinsaibashi Station, with a long, high-ceilinged counter downstairs and hideaway sofa rooms above in a space the shop says was designed by Tadao Ando. It runs from 6 p.m. to 5 a.m., so it serves both early dinners and late-night wine with an appetizer platter (the mackerel with white-miso eggplant sauce stands out). Diners praise the Bolognese, carbonara and shrimp bread and the friendly staff; courses suit birthdays and girls' nights but keep a strict two-hour limit. Mind the narrow, steep stairs: one October 2026 diner sprained an ankle. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: casual creative Italian and wine; reservation-only courses; a two-storey designer space that the listing says was designed by the architect Tadao Ando, with a long counter on 1F and private sofa seating above; opened 1 May 2019.', philosophy: null, specialty: 'Creative Italian; late-night wine.',
      anecdotes: [
        { text: '"Everything was delicious, but the Bolognese was exceptionally good!" — April 2026.', source: R + 'B525837373/' },
        { text: '"The mackerel was served with a sauce made from dried tomatoes, eggplant, and white miso." — October 2026, at the bar until 5 a.m.', source: R + 'B537420763/' },
        { text: '"Also, be careful of the steps; I tripped and ended up spraining my ankle, which required a visit to the hospital." — October 2026.', source: R + 'B536967010/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 星空キッチン nova、バル・イタリアン・ダイニングバー、大阪市中央区東心斎橋1-19-2、心斎橋駅4番出口から徒歩3分 (大丸・パルコの出口が近い)、火〜日18:00〜翌5:00 (L.O.4:00)、月曜休み、予約可 (混雑時とコースは2時間、15分遅れで取り消し)、カード・電子マネー・QR 可、40席、個室と半個室は予約制、2019年5月1日オープン。店の紹介 (英訳): カジュアルな創作イタリアンとワイン、予約限定のコース、世界的な建築家の Tadao Ando の設計という2階建ての空間、1階は天井の高い長いカウンター、2階は隠れ家のようなソファー席。口コミ(2026年3月〜10月): 前菜の盛り合わせ (さばとドライトマト・なす・白味噌のソース)、鮮魚のカルパッチョ、カプレーゼ、ピクルス、えびパン、ボロネーゼ、カルボナーラ、ペペロンチーノ、マルゲリータ、外ハラミのステーキ、グラスのワイン、階段が狭く急 (足首をひねった人も)、コースは2時間で厳しい、スタッフが親切。',
      confidence: 'medium', sources: [TB, R + 'B524576331/', R + 'B525837373/', R + 'B527095490/', R + 'B528444063/', R + 'B529771416/', R + 'B534720659/', R + 'B535693395/', R + 'B536524583/', R + 'B536967010/', R + 'B537420763/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and private rooms; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目19番2号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525837373/', R + 'B537420763/'],
    price_note: 'No dated prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Special assorted appetizer platter', '', 'Appetizers', 'ask', 'ask', 'May and October 2026 reviews.', 'antipasto'),
      it('', '', 'Bolognese', '', 'Pasta', 'no', 'no', 'April 2026 review.', 'bolognese'),
      it('', '', 'Shrimp bread', '', 'Appetizers', 'no', 'no', 'September 2026 review.', 'ebi_pan'),
    ] }, {
    cuisine: '2階建てのデザインの空間の創作イタリアンとワイン、グラスでもボトルでも、朝5時まで (食べログ、2026年の口コミ)・特製の前菜の盛り合わせ (さばにドライトマト、なす、白味噌のソース)、鮮魚のカルパッチョ、カプレーゼ、ピクルス、えびパン (2026年5月〜10月)・ボロネーゼ、カルボナーラ、ペペロンチーノ、マルゲリータ、外ハラミのステーキ (2026年3月〜4月)・誕生日や宴会の予約限定のコース (食べログ)',
    neighborhood: '東心斎橋1-19-2。心斎橋駅4番出口から3分 (大丸・パルコの出口が近い)',
    gf_detail: '要確認。グルテンの情報なし。パスタ、ピザ、えびパンがあり、カルパッチョやステーキはシンプルかも。',
    vegan_detail: '要確認。ヴィーガンの情報なし。ピクルスやマルゲリータはあるが、ほとんどは肉、魚、チーズ。白味噌のソースも。',
    notes: '[イタリアン・東心斎橋、朝5時までの創作イタリアン] 心斎橋駅から3分の2階建てのイタリアンのバーで、1階は天井の高い長いカウンター、上の階は隠れ家のようなソファーの部屋。店によると設計は Tadao Ando。夕方6時から朝5時までなので、早めの夕食にも深夜のワインと前菜の盛り合わせにも (白味噌となすのソースのさばが印象的)。ボロネーゼ、カルボナーラ、えびパン、親切なスタッフの評価が高い。誕生日や女子会のコースは2時間制で厳しめ。狭く急な階段に注意で、2026年10月には足首をひねった人も。月曜休み。',
  });
}

// ================================================================ cafe Mode
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27017616/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '22:00']);
  put({
    id: 'osaka_cafe_mode_minamihorie', name: 'cafe Mode', category: 'OMNI',
    lat: 34.671657, lng: 135.494897, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. One March 2026 diner had a gluten-free caramel pear tart, but nothing is said about the rest of the menu or cross-contact; mention allergies when booking, as the shop asks.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Mains are steak, hamburg, stew and pasta; desserts use cream and butter.',
    hours_raw: 'Tue–Sun and holidays 11:30–22:00 (food last order 21:30); the listing also gives 11:00–22:00, to 23:30 for parties; lunch sets served all day; closed Monday unless a holiday (Tabelog). Reservations accepted; tell the shop about allergies or dislikes when booking; private hire up to 120 (Tabelog). No alcohol for drivers (Tabelog). Cards; no e-money or QR (Tabelog). Order and pay at the counter first (March 2026). Dogs welcome inside (July and September 2026). Nearby parking ¥300 an hour (September 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 1-14-26, 中澤唐木ビル 3F, facing Horie Park — 5 min from Yotsubashi Stn exit 6',
    cuisine: 'Italian café, steak and dessert, all day (Tabelog) · Kobe beef steak assiette set, pure-beef hamburg steak, beef stew, Hayashi rice, pasta of the day, cold pasta (July–September 2026) · avocado toast, French toast (March 2026) · evening healthy set of pork shabu-shabu or simmered flounder (May 2026) · desserts: pear cake, a gluten-free caramel pear tart, mille-feuille, birthday plates (March–May 2026) · wine and coffee (April 2026)',
    website: null, gmaps: gm('cafe Mode 南堀江'), menu_url: null,
    notes: "[Café · Minami-Horie, an all-day café over Horie Park] A bright white café on the third floor of a building facing Horie Park, with big windows onto the trees, and cherry blossoms in spring. It serves lunch sets all day, from a Kobe beef steak assiette and a filler-free hamburg to beef stew, pasta and avocado toast, plus an evening set of pork shabu-shabu or simmered flounder. The cakes are the other reason to come: the pear cake, a light mille-feuille, and a gluten-free caramel pear tart one March 2026 diner enjoyed (ask, as the menu changes). Dogs are welcome inside. Order and pay at the counter. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and café staff (unnamed)'], origin: null, background: 'Tabelog: café, Italian and steak on 3F of the 中澤唐木ビル by Horie Park; lunch sets all day; private hire up to 120; ingredients and suppliers may change with weather and logistics. Reviews (March–September 2026): an Italian café in a bright, bridal-feeling space by the park.', philosophy: null, specialty: 'Kobe beef steak set; cakes.',
      anecdotes: [
        { text: '"The caramel tart with pear was surprisingly delicious for being gluten-free." — March 2026.', source: R + 'B525059802/' },
        { text: '"From the large windows, I could see the cherry blossoms in the park, which was absolutely lovely." — April 2026.', source: R + 'B525863776/' },
        { text: '"Dogs are welcome inside the restaurant." — September 2026.', source: R + 'B536051189/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): cafe Mode、カフェ・イタリアン・ステーキ、大阪市西区南堀江1-14-26 中澤唐木ビル 3F、四ツ橋駅6番出口から徒歩5分、Horie Park の前、火〜日・祝11:30〜22:00 (料理L.O.21:30、11:00〜22:00、宴会は23:30までとも)、ランチのセットは一日中、月曜休み (祝日は営業)、予約可 (アレルギーや苦手なものは予約時に)、車の人にはお酒を出さない、最大120名の貸切、カード可、電子マネー・QR 不可。口コミ(2026年3月〜9月): 白く明るい店内、公園の緑と桜が見える大きな窓、先に注文と支払い、アボカドトースト、フレンチトースト、洋梨のケーキ、グルテンフリーの洋梨のキャラメルタルト、ミルフィーユ、誕生日のプレート、夜のヘルシーな定食 (豚しゃぶか、かれいの煮付け)、神戸牛のステーキのアシエットのセット、つなぎなしのハンバーグ、ビーフシチュー、ハヤシライス、日替わりのパスタ、冷製パスタ、ワイン、犬も店内に入れる、近くの駐車場は1時間300円。',
      confidence: 'medium', sources: [TB, R + 'B135278980/', R + 'B525059802/', R + 'B525767378/', R + 'B525863776/', R + 'B525972560/', R + 'B527981101/', R + 'B528330264/', R + 'B531386839/', R + 'B531796925/', R + 'B536051189/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市西区南堀江1-14-26 中澤唐木ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目14番26号 (go) 16m. Same lot number as osaka_pizzeria_cuorerudino_minamihorie (address_ja "大阪府大阪市西区南堀江1-14-26"), pinned 14 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525059802/', R + 'B531386839/'],
    price_note: 'No dated prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Kobe beef steak assiette set', '', 'Lunch', 'ask', 'no', 'September 2026 review.', 'kobe_steak_set'),
      it('', '', 'Caramel pear tart (described as gluten-free)', '', 'Desserts', 'ask', 'no', 'March 2026 review.', 'pear_tart'),
      it('', '', 'Pear cake', '', 'Desserts', 'ask', 'no', 'April 2026 review.', 'pear_cake'),
    ] }, {
    cuisine: '一日中のイタリアンのカフェ、ステーキ、デザート (食べログ)・神戸牛のステーキのアシエットのセット、つなぎなしのハンバーグ、ビーフシチュー、ハヤシライス、日替わりのパスタ、冷製パスタ (2026年7月〜9月)・アボカドトースト、フレンチトースト (2026年3月)・夜のヘルシーな定食は豚しゃぶか、かれいの煮付け (2026年5月)・デザート: 洋梨のケーキ、グルテンフリーの洋梨のキャラメルタルト、ミルフィーユ、誕生日のプレート (2026年3月〜5月)・ワインとコーヒー (2026年4月)',
    neighborhood: '南堀江1-14-26、中澤唐木ビル3階、Horie Park の前。四ツ橋駅6番出口から5分',
    gf_detail: '要確認。2026年3月にグルテンフリーの洋梨のキャラメルタルトを食べた人がいるが、ほかのメニューや混入の説明はない。店の案内どおり予約時にアレルギーを伝えて。',
    vegan_detail: '要確認。ヴィーガンの情報なし。メインはステーキ、ハンバーグ、シチュー、パスタで、デザートにはクリームやバター。',
    notes: '[カフェ・南堀江、Horie Park を見下ろす一日中のカフェ] Horie Park の前のビルの3階の白く明るいカフェで、大きな窓から木々が見え、春は桜も。ランチのセットは一日中で、神戸牛のステーキのアシエット、つなぎなしのハンバーグ、ビーフシチュー、パスタ、アボカドトースト、夜は豚しゃぶかかれいの煮付けの定食も。ケーキも目当てで、洋梨のケーキ、軽いミルフィーユ、2026年3月にはグルテンフリーの洋梨のキャラメルタルトを楽しんだ人も (メニューは変わるので確認を)。犬も店内に入れる。注文と支払いはカウンターで先に。月曜休み。',
  });
}

save();
