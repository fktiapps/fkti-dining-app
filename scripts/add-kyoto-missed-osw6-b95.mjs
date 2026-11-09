// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 95.
//   - skip 26042020 RABBIT BAGELS 四条新町店 (chain; earlier ruling 26037053)
//   - skip 26035540 政右衛門 (thin: no review since 2024)
//   + INUI (戌亥) (à la carte "exotic fusion" dining and wine at Kawabata-Nijo) — rest
//   + インドレストラン 将来キッチン 京都五条店 (Indian curry and naan at Gojo-Karasuma; opened July 2026) — rest
//   - skip 26044510 百圓寿司スタンドえにし 烏丸御池店 (THAN brand)
//   + Tiem an HUONG VIET (course-only Vietnamese restaurant near Karasuma Oike, open since 2000) — rest
//   + The Nook Kyoto (family-run café of steamer plates by day, izakaya by night, on Higashioji) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489). THAN: えにし is on the list (earlier ruling
//   26044899). Same-name counts (2026-11-08): INUI, HUONG VIET, The Nook — one each. 将来キッチン — Tabelog lists two (西院店 and
//   this 京都五条店), below the five-shop line, so drafted.
//   Names keep the shop's own Latin or kana from the listing; no romanization of 将来キッチン is given.
//   None of the drafted shops is in data/kyoto.json.
//   Charges: none listed on Tabelog for the four. No halal claims; no owner deaths; single-review remarks about other diners
//   left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-95');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042020', 'chain: RABBIT BAGELS lists 20+ shops on its official site (same ruling as 26037053, osw9-31) (https://tabelog.com/en/kyoto/A2601/A260201/26042020/).');
skip('26035540', 'thin: ジビエ・川魚料理 … 政右衛門 has no Tabelog review since November 2024 — not enough current sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260301/26035540/).');
skip('26044510', 'THAN brand: 百圓寿司スタンド えにし is a brand of 株式会社THAN (than.co.jp/brands; same ruling as 26044899) (https://tabelog.com/en/kyoto/A2601/A260202/26044510/).');

// ================================================================ INUI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26039098/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_inui_kawabata_nijo', name: 'INUI (戌亥)', category: 'OMNI',
    lat: 35.013891, lng: 135.773228, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: waffles, fritters and spiced sauces (2025–26 reviews); no allergen information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The Moroccan salad is described as plant-based (March 2026), and a March 2026 pair ate an all-meat-free selection, but most dishes use meat, fish or cheese.',
    hours_raw: 'Mon, Tue, Fri–Sun 18:00–23:00; closed Wednesday and Thursday (Tabelog). À la carte only (November 2025); usually fully booked — reserve (March 2026). Last orders can come early on a late seating (August 2026). Cards (AMEX) and QR; no e-money (Tabelog). A counter and high tables, entered from the back of the Sunshine Kamogawa building near Kawabata-Nijo (Tabelog; March 2026).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawabata-Nijo — Sakyo',
    cuisine: '"Exotic fusion" small plates drawing on Asian, Middle Eastern and Latin flavours, with wine · Moroccan salad (2025–26 reviews) · seared sawara with coriander and lime, veal tongue confit with sansho chimichurri, scallop stracciatella in clam broth, Patagonian mussels in a spiced ajillo, live-eel and vegetable fritters (March–September 2026) · grilled Vietnamese pork with anise and raspberry, duck with Earl Grey and tamarind, kale waffle (August 2025, April 2026) · French wines (October 2026)',
    website: null, gmaps: gm('INUI 戌亥 京都 新先斗町'), menu_url: TB,
    notes: '[Fusion small plates & wine · Kawabata-Nijo] A stylish, much-booked counter restaurant near Kawabata-Nijo serving à la carte "exotic fusion" plates — Moroccan salad, seared sawara with coriander and lime, veal tongue with sansho chimichurri, live-eel fritters — with wine. Book ahead; closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a restaurant opened 1 November 2022 in the Sunshine Kamogawa building near Kawabata-Nijo, serving à la carte fusion dishes.',
      philosophy: null, specialty: 'Spiced fusion small plates; Moroccan salad.',
      anecdotes: [
        { text: 'A November 2025 regular on a sixth visit liked that the à la carte-only menu makes each evening different, starting light with the Moroccan salad.', source: R + 'B509615509/' },
        { text: 'A June 2026 couple came for a birthday and ordered veal tongue confit with sansho chimichurri and live-eel fritters.', source: R + 'B499652278/' },
      ],
      japanese_sources_summary: '食べログ: アジア・エスニック・創作料理、左京区新先斗町133 サンシャイン鴨川 1F、月火金土日18:00〜23:00、水・木曜休み、カード (AMEX)・QR 可、電子マネー不可、2022年11月1日オープン。口コミ (2025年8月〜2026年10月、英語): アラカルトのみ、エキゾチックフュージョン、モロッコサラダ (プラントベース)、鰆のたたきにコリアンダーとライム、仔牛タンのコンフィに山椒のチミチュリ、ホタテのストラッチャテッラ、ムール貝のアヒージョ、活け鰻と野菜のフリット、ベトナム風の豚肉のグリル、鴨とアールグレイとタマリンド、ケールのワッフル、フランスのワイン、満席が多く予約がおすすめ、建物の裏に入口。',
      confidence: 'medium', sources: [TB, R + 'B499652278/', R + 'B509615509/', R + 'B514715806/', R + 'B521262512/', R + 'B524778168/', R + 'B526716589/', R + 'B528399773/', R + 'B536088113/', R + 'B537768698/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reserve; the entrance is at the back of the building. Order several plates to share. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区新先斗町133 サンシャイン鴨川 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013891, 135.773228); cross-checked: GSI 京都府京都市左京区新先斗町133番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536088113/', R + 'B526716589/'],
    price_note: 'No dish prices quoted; reviewers report ¥4,000–14,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Moroccan salad (plant-based)', '', 'Small plates', 'ask', 'ask', 'March and September 2026.', 'moroccan_salad'),
      it('', '', 'Seared sawara with coriander and lime', '', 'Small plates', 'ask', 'no', 'June and September 2026.', 'sawara'),
      it('', '', 'Veal tongue confit with sansho chimichurri', '', 'Small plates', 'ask', 'no', 'June and September 2026.', 'veal_tongue'),
      it('', '', 'Live eel and seasonal vegetable fritters', '', 'Small plates', 'no', 'no', 'June and September 2026.', 'eel_fritters'),
    ] }, {
    cuisine: 'アジア、中東、中南米の味を取り入れた「エキゾチックフュージョン」の小皿とワイン・モロッコサラダ (2025〜2026年の口コミ)・鰆のたたきにコリアンダーとライム、仔牛タンのコンフィに山椒のチミチュリ、ホタテのストラッチャテッラ、ムール貝のスパイスのアヒージョ、活け鰻と野菜のフリット (2026年3月〜9月)・アニスとラズベリーのベトナム風の豚肉のグリル、鴨とアールグレイとタマリンド、ケールのワッフル (2025年8月、2026年4月)・フランスのワイン (2026年10月)',
    neighborhood: '川端二条。左京',
    gf_detail: 'グルテンフリーではない。ワッフル、フリット、スパイスのソース (2025〜2026年の口コミ)。アレルゲンの情報なし。',
    vegan_detail: '要確認。モロッコサラダはプラントベース (2026年3月)、2026年3月に肉なしの料理だけで頼んだ例もあるが、多くは肉、魚、チーズを使う。',
    notes: '[フュージョンの小皿とワイン・川端二条] 川端二条近くの予約の多いおしゃれなカウンターの店。モロッコサラダ、鰆のたたきのコリアンダーとライム、仔牛タンの山椒チミチュリ、活け鰻のフリットなどアラカルトの「エキゾチックフュージョン」をワインと。予約を、水・木曜休み。',
  });
}

// ================================================================ インドレストラン 将来キッチン 京都五条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045356/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_indian_kitchen_gojo_karasuma', name: 'インドレストラン 将来キッチン 京都五条店', category: 'OMNI',
    lat: 34.995308, lng: 135.759918, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: naan, cheese naan and chow mein (2026 reviews); curry bases not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegetarian or vegan dish is described in the 2026 reviews; curries, naan and lassi may contain dairy.',
    hours_raw: 'Daily 11:30–15:00 (food last order 14:30) and 17:00–23:00 (food last order 22:30) (Tabelog). Lunch sets from ¥1,000 with soup; curry refills (July and August 2026). Spice level is chosen when ordering (July 2026). Cards, e-money and QR (Tabelog). 29 seats with private rooms (Tabelog). Second floor of the MILLY Karasuma Gojo building, by Gojo Station; opened 15 July 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo-Karasuma',
    cuisine: 'Indian and pan-Asian curry house · lunch sets from ¥1,000 with soup and curry refills (July and August 2026) · sweet, fruity mild curry and medium-spicy curries; large naan and cheese-filled cheese naan (July–September 2026) · chow mein with chicken tikka, nasi goreng, hot-and-sour soup (July 2026) · lassi as a ¥150 add-on (July 2026)',
    website: null, gmaps: gm('将来キッチン 京都五条店'), menu_url: TB,
    notes: '[Indian curry · Gojo-Karasuma] A new Indian curry house above Gojo Station, opened July 2026: ¥1,000-plus lunch sets with refills and big cheese naan, plus chow mein, nasi goreng and hot-and-sour soup; open into the night. The curries run sweet — ask for medium or hot.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an Indian restaurant opened 15 July 2026 at Gojo-Karasuma; a sister shop operates in Saiin (Tabelog search).',
      philosophy: null, specialty: 'Cheese naan; lunch curry sets.',
      anecdotes: [
        { text: 'A July 2026 lunch regular tried the chow mein with mild chicken tikka and plenty of vegetables, adding a lassi for ¥150.', source: R + 'B531841838/' },
        { text: 'An August 2026 visitor was pleased that curry refills come with lunch, and plans to go medium-spicy next time since the curry ran sweet.', source: R + 'B538662127/' },
      ],
      japanese_sources_summary: '食べログ: インドカレー・インド料理・アジア・エスニック、下京区大坂町383-6 MILLY烏丸五条 2F、毎日11:30〜15:00 (料理L.O.14:30)・17:00〜23:00 (料理L.O.22:30)、カード・電子マネー・QR 可、29席、個室あり、2026年7月15日オープン。口コミ (2026年7月〜9月、英語): 昼は1,000円からのセットとスープ、カレーのおかわり、辛さを選べる、甘くフルーティーなカレー、大きなナン、チーズナン、チキンティッカ入りのチャウメン、ナシゴレン、酸辣湯、ラッシーは150円で追加、外国人のスタッフ。',
      confidence: 'low', sources: [TB, R + 'B531841838/', R + 'B531980769/', R + 'B535729636/', R + 'B538662127/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose your spice level when ordering; the default runs mild and sweet. Staff are from overseas (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区大坂町383-6 MILLY烏丸五条 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened July 2026); reviews dated July to September 2026.' },
    pin_source: `Tabelog ${TB} (34.995308, 135.759918); cross-checked: GSI 京都府京都市下京区大坂町383番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531980769/', R + 'B531841838/'],
    price_note: 'Lunch from ¥1,000 (July 2026).', last_checked: TODAY, items: [
      it('', '', 'Curry lunch set with naan', '¥1,000', 'Lunch', 'no', 'ask', 'July 2026; from ¥1,000.', 'curry_lunch'),
      it('', '', 'Cheese naan', '', 'Naan', 'no', 'no', 'July–September 2026.', 'cheese_naan'),
      it('', '', 'Chow mein with chicken', '', 'Lunch', 'no', 'no', 'July 2026.', 'chow_mein'),
      it('', '', 'Lassi (add-on)', '¥150', 'Drinks', 'ask', 'no', 'July 2026.', 'lassi'),
    ] }, {
    cuisine: 'インドとアジアのカレーの店・スープとカレーのおかわり付きの1,000円からの昼のセット (2026年7月・8月)・甘くフルーティーなマイルドカレーや中辛のカレー、大きなナンとチーズたっぷりのチーズナン (2026年7月〜9月)・チキンティッカ入りのチャウメン、ナシゴレン、酸辣湯 (2026年7月)・ラッシーは150円で追加 (2026年7月)',
    neighborhood: '五条烏丸',
    gf_detail: 'グルテンフリーではない。ナン、チーズナン、チャウメン (2026年の口コミ)。カレーのベースの情報なし。',
    vegan_detail: '要確認。2026年の口コミにベジタリアンやヴィーガンの料理の記載はなく、カレー、ナン、ラッシーに乳製品が入る可能性がある。',
    notes: '[インドカレー・五条烏丸] 五条駅上、2026年7月開店のインドカレーの店。1,000円からのおかわり付きの昼のセットと大きなチーズナン、チャウメン、ナシゴレン、酸辣湯も。夜遅くまで営業。カレーは甘めなので中辛か辛口を頼むとよい。',
  });
}

// ================================================================ Tiem an HUONG VIET
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001886/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_tiem_an_huong_viet', name: 'Tiem an HUONG VIET (ティエム アン フォーン ヴィエット)', category: 'OMNI',
    lat: 35.012287, lng: 135.76068, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses lean on rice, rice noodles, herbs and fermented sauces (2024–26 reviews), but dishes are not described for wheat and courses are set by the kitchen — say so when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fermented fish sauce throughout, beef, pork, shrimp, soft-shell crab, clam soup (2025–26 reviews).',
    hours_raw: 'Mon, Wed–Sun 18:00–23:00; closed Tuesday, and sometimes for a week when the owner travels to Vietnam to buy ingredients (Tabelog). Dinner courses only, adjusted to your tastes; reservations a must (May 2025, July 2026). Cards, e-money and QR (Tabelog). 25 seats: tables, tatami and two outdoor tables where dogs are welcome (Tabelog; May 2026). Oshikoji-dori west of Higashinotoin, near Karasuma Oike; open since 2000 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oshikoji-Higashinotoin — Karasuma Oike',
    cuisine: 'Vietnamese, courses only, built from ingredients the owner brings back from Vietnam · tailored courses heavy on herbs and fresh vegetables (July 2025) · pork spine, jade eggplant with nuoc mam, crispy tofu with lemongrass, dragon-fruit salad, clam and eel lemongrass soup, pho or bun (November 2025) · Vietnamese beef herbal hot-pot course with 90-minute all-you-can-drink (January 2026) · soft-shell crab, house-made tofu, boiled beef bones, Vietnamese clam soup (May and July 2026) · Vietnamese beers when in stock',
    website: null, gmaps: gm('Tiem an HUONG VIET 京都'), menu_url: TB,
    notes: '[Vietnamese · Karasuma Oike] A long-running Vietnamese restaurant (since 2000) near Karasuma Oike serving dinner courses only, shaped to your tastes from ingredients the owner sources on regular trips to Vietnam: herbs, fermented sauces, soft-shell crab, house tofu, herbal hot pots. Book ahead; closed Tuesday; dogs welcome at the two outside tables.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who travels to Vietnam several times a year for ingredients and research (May 2025)'], origin: null,
      background: 'Per Tabelog and reviews: a Vietnamese restaurant opened 1 September 2000 near Karasuma Oike, now serving courses only (September 2024, September 2025).',
      philosophy: null, specialty: 'Vietnamese courses with fermented seasonings and herbs.',
      anecdotes: [
        { text: 'A July 2025 pair told the kitchen of a love of herbs, fresh vegetables and unusual dishes, and received a course built around that.', source: R + 'B509929678/' },
        { text: 'A July 2026 first-timer arrived alone not knowing it was courses only; the owner arranged a course around the soft-shell crab requested.', source: R + 'B531480179/' },
      ],
      japanese_sources_summary: '食べログ: ベトナム料理・居酒屋・バル、中京区押小路通東洞院西入ル西押小路通町118、月水木金土日18:00〜23:00、火曜休み (ベトナムへの仕入れで1週間休むことも)、カード・電子マネー・QR 可、25席 (テーブル、座敷、外の席2)、2000年9月1日オープン。口コミ (2025年1月〜2026年7月、英語): コースのみ、好みに合わせて組む、予約必須、店主は年に数回ベトナムへ仕入れと研究に、発酵調味料、豚の背骨、ヌクマムのなす、レモングラスの揚げ豆腐、ドラゴンフルーツのサラダ、あさりと鰻のレモングラスのスープ、フォーかブン、牛の薬膳鍋のコースと90分の飲み放題、ソフトシェルクラブ、手作り豆腐、牛骨の煮込み、ベトナムのあさりのスープ、ベトナムビール、外の席は犬も可。',
      confidence: 'medium', sources: [TB, R + 'B208892440/', R + 'B285228574/', R + 'B498718845/', R + 'B500036396/', R + 'B505568698/', R + 'B506006953/', R + 'B509929678/', R + 'B520522335/', R + 'B527883945/', R + 'B531480179/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead and give your likes and dislikes — the course is built around those. Dogs are allowed at the outdoor tables. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通東洞院西入ル西押小路通町118',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.012287, 135.760680); cross-checked: GSI 京都府京都市中京区西押小路町118番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520522335/', R + 'B531480179/'],
    price_note: 'Course prices not quoted; reviewers report ¥5,000–14,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Chef’s Vietnamese course (tailored)', '', 'Courses', 'ask', 'no', '2025–26 reviews.', 'course'),
      it('', '', 'Vietnamese beef herbal hot-pot course with all-you-can-drink', '', 'Courses', 'ask', 'no', 'January 2026.', 'herbal_hotpot'),
    ] }, {
    cuisine: 'コースのみのベトナム料理、店主がベトナムから持ち帰る食材で・ハーブと生野菜の多い好みに合わせたコース (2025年7月)・豚の背骨、ヌクマムのなす、レモングラスの揚げ豆腐、ドラゴンフルーツのサラダ、あさりと鰻のレモングラスのスープ、フォーかブン (2025年11月)・90分の飲み放題付きの牛の薬膳鍋のコース (2026年1月)・ソフトシェルクラブ、手作りの豆腐、牛骨の煮込み、ベトナムのあさりのスープ (2026年5月・7月)・あればベトナムビール',
    neighborhood: '押小路東洞院。烏丸御池',
    gf_detail: '要確認。米、米麺、ハーブ、発酵だれのコース (2024〜2026年の口コミ) だが、小麦の有無は不明で、コースは店が組む。予約時に伝えるとよい。',
    vegan_detail: 'ヴィーガン不可。魚醤、牛、豚、海老、ソフトシェルクラブ、あさりのスープ (2025〜2026年の口コミ)。',
    notes: '[ベトナム料理・烏丸御池] 烏丸御池近く、2000年から続くベトナム料理店。夜はコースのみで、店主が定期的にベトナムで仕入れる食材を使い、ハーブ、発酵だれ、ソフトシェルクラブ、手作り豆腐、薬膳鍋などを好みに合わせて。予約を、火曜休み。外の2席は犬も可。',
  });
}

// ================================================================ The Nook Kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26045248/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '16:00'], ['18:00', '22:00']); const MO = day(['18:00', '22:00']); const TU = day(['11:30', '16:00']);
  put({
    id: 'kyoto_the_nook_kyoto', name: 'The Nook Kyoto (ザヌックキョウト)', category: 'OMNI',
    lat: 35.011521, lng: 135.778233, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: steamed pasta, house focaccia and clam chowder on the plates (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, roast pork, bacon, egg and crab on the plates (2026 reviews).',
    hours_raw: 'Lunch 11:30–16:00 (last order 15:30) and dinner 18:00–22:00 (last order 21:30); Monday dinner only, Tuesday lunch only, closed Wednesday; Monday and Tuesday by reservation only (Tabelog). The lunch plate can sell out by mid-afternoon (July 2026). Cards, e-money and QR (Tabelog). 20 seats: 2 at the counter, 18 at tables (Tabelog). On Higashioji-dori about four minutes from Higashiyama Station, toward Miyakomesse; opened 12 June 2026 (Tabelog; June 2026).',
    hours: { 0: MO, 1: TU, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashioji, near Higashiyama Station — Okazaki',
    cuisine: 'Café of bamboo-steamer cooking by day, steamer izakaya by night · steamer plate ¥1,800 — tender chicken breast, seasonal vegetables, roast pork, okara potato salad, crab-and-spinach ohitashi, clam chowder, steamed house focaccia, suguki tartar (June and September 2026) · plate lunch ¥1,800 (June 2026) · steamer pasta ¥1,700 such as soy-milk and white-miso carbonara with bacon (July and August 2026) · baked-apple parfait ¥800, drip coffee ¥400 with a set (June 2026)',
    website: null, gmaps: gm('The Nook Kyoto 東門前町'), menu_url: TB,
    notes: '[Steamer café & izakaya · Higashioji] A family-run concrete-and-wood café opened June 2026 on Higashioji near Higashiyama Station: colourful lunch plates and bamboo-steamer plates of chicken, roast pork and vegetables with steamed focaccia, steamer pasta such as white-miso carbonara, and steamer dishes with drinks at night. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Family-run (June 2026)'], origin: null,
      background: 'Per Tabelog and reviews: a café and izakaya opened 12 June 2026 on Higashioji-dori, cooking in bamboo steamers (June 2026).',
      philosophy: 'Per reviews: gentle, healthy dishes for the body (September 2026).', specialty: 'Steamer plate; steamer pasta.',
      anecdotes: [
        { text: 'A July 2026 visitor arriving at 14:30 after an event at Miyakomesse found the plate lunch sold out and had steamed soy-milk carbonara with white miso, served in a large bamboo steamer.', source: R + 'B531050832/' },
        { text: 'A June 2026 diner ordered the ¥1,800 plate lunch with drip coffee and a generous baked-apple parfait, and noted the warm family-run feel.', source: R + 'B530081362/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・海鮮・居酒屋、左京区東門前町503-3 ハイツひろ 1F、昼11:30〜16:00 (L.O.15:30)・夜18:00〜22:00 (L.O.21:30)、月は夜のみ、火は昼のみ、水曜休み、月・火は予約制、カード・電子マネー・QR 可、20席 (カウンター2・テーブル18)、2026年6月12日オープン。口コミ (2026年6月〜10月、英語): 昼はカフェ、夜はせいろ料理の居酒屋、家族経営、せいろプレート1,800円 (鶏むね、季節の野菜、ローストポーク、おからのポテトサラダ、かにとほうれん草のおひたし、クラムチャウダー、蒸したフォカッチャ、すぐきのタルタル)、プレートランチ1,800円、せいろパスタ1,700円 (豆乳と白味噌のカルボナーラ)、焼きりんごのパフェ800円、セットのコーヒー400円、東大路通、東山駅から徒歩4分、みやこめっせの近く。',
      confidence: 'medium', sources: [TB, R + 'B530081362/', R + 'B530918304/', R + 'B531050832/', R + 'B533873998/', R + 'B535047376/', R + 'B535978753/', R + 'B537380815/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Come early for the lunch plate; book for Monday or Tuesday. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区東門前町503-3 ハイツひろ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened June 2026); reviews dated June to October 2026.' },
    pin_source: `Tabelog ${TB} (35.011521, 135.778233); cross-checked: GSI 京都府京都市左京区東門前町503番地 (lot) 72m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530081362/', R + 'B533873998/', R + 'B535047376/'],
    price_note: 'Prices from June to September 2026.', last_checked: TODAY, items: [
      it('', '', 'Steamer plate (chicken, vegetables, roast pork, focaccia, chowder)', '¥1,800', 'Lunch', 'no', 'no', 'June and September 2026.', 'seiro_plate'),
      it('', '', 'Plate lunch', '¥1,800', 'Lunch', 'no', 'no', 'June 2026.', 'plate_lunch'),
      it('', '', 'Steamer pasta (soy-milk and white-miso carbonara)', '¥1,700', 'Lunch', 'no', 'no', 'July and August 2026.', 'seiro_pasta'),
      it('', '', 'Baked-apple parfait', '¥800', 'Sweets', 'no', 'no', 'June 2026.', 'apple_parfait'),
    ] }, {
    cuisine: '昼はせいろ料理のカフェ、夜はせいろの居酒屋・せいろプレート1,800円: やわらかい鶏むね、季節の野菜、ローストポーク、おからのポテトサラダ、かにとほうれん草のおひたし、クラムチャウダー、蒸した自家製フォカッチャ、すぐきのタルタル (2026年6月・9月)・プレートランチ1,800円 (2026年6月)・豆乳と白味噌のカルボナーラなどのせいろパスタ1,700円 (2026年7月・8月)・焼きりんごのパフェ800円、セットのドリップコーヒー400円 (2026年6月)',
    neighborhood: '東大路、東山駅の近く。岡崎',
    gf_detail: 'グルテンフリーではない。せいろパスタ、自家製フォカッチャ、クラムチャウダー (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏、ローストポーク、ベーコン、卵、かにが入る (2026年の口コミ)。',
    notes: '[せいろのカフェと居酒屋・東大路] 東山駅近く、東大路に2026年6月開店の家族経営のカフェ。昼は彩りのプレートや、鶏、ローストポーク、野菜と蒸したフォカッチャのせいろプレート、白味噌のカルボナーラなどのせいろパスタ、夜はせいろ料理とお酒。水曜休み。',
  });
}

save();
