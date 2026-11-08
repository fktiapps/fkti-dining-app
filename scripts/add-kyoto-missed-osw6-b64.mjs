// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 64.
//   + のくる Nokuru (10-seat omakase counter with own-caught fish and game, open to 2 am, Takamiya-cho) — rest
//   + 創作料理 夜のとばり Yoru no Tobari (creative obanzai izakaya off Kiyamachi Rokkaku) — rest
//   + 駄菓子食べ放題 放課後駄菓子バーA-55 京都四条河原町店 (all-you-can-eat dagashi bar with games and manga) — rest
//   + 先斗町駿河屋 Pontocho Surugaya (wagashi shop of over 120 years, known for hitokuchi warabi) — rest
//   - skip 26000422 満亭 (no 2025–26 review)
//   - skip 26045104 大衆酒場むに 木屋町店 (chain; earlier ruling 26039408)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: むに already ruled a chain
//   (26039408); no rulings for 満亭, のくる, 夜のとばり, A-55 or 駿河屋.
//   Same-name counts first (2026-11-07): のくる — one. 夜のとばり — one. 放課後駄菓子バーA-55 — two (this and one other listing).
//   先斗町駿河屋 — one Pontocho shop; other 駿河屋 (Fushimi, Uji, Omiya) belong to the 駿河屋 noren family, which under Greg's ruling
//   (2026-11-07) is not a chain, so this shop is drafted on its own evidence. None is in data/kyoto.json.
//   Service charges per Tabelog's Japanese original: 夜のとばり 「お通し料、550円」; A-55 「特に無し」 (the English page wrongly says a
//   service fee may be added); のくる and 駿河屋 none listed. No halal claims; no owner deaths; no single-review remarks about other
//   diners kept.
//   Pins re-checked against current main: A-55 sat 1.9 m from kyoto_unagi_unatama_kiyamachi (same building, 1F); offset 5.5 m east.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-64');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000422', 'no 2025–26 review: Mantei, a yoshoku restaurant founded in 1950, has no Tabelog review later than September 2024 (https://tabelog.com/en/kyoto/A2601/A260201/26000422/).');
skip('26045104', 'chain: Taishu Sakaba Muni — same ruling as 26039408; Tabelog lists Muni shops at Sakae-Sumiyoshi, Kobe Sannomiya (two), Machida, Kichijoji, Kyoto Sanjo and Kyoto Kawaramachi (https://tabelog.com/en/rstLst/?sw=%E5%A4%A7%E8%A1%86%E9%85%92%E5%A0%B4%E3%82%80%E3%81%AB).');

// ================================================================ のくる
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036236/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://nokuru-tomitako.com/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_nokuru_takamiya', name: 'のくる (Nokuru)', category: 'OMNI',
    lat: 35.005891, lng: 135.765063, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An omakase of sashimi, grilled and smoked fish, game meats and tempura with noodles to finish (2024–26 reviews); dislikes can be left out if told in advance (May 2025). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, venison, wild boar and bear in an omakase course (2024–26 reviews).',
    hours_raw: 'Daily 18:00–2:00 (last order 1:00); closed irregularly (Tabelog). Reservations accepted; mainly a single omakase course, with requests possible late at night (Tabelog; May 2025; February 2026). Cards (VISA, Master); no e-money (Tabelog). 10 counter seats (Tabelog). Non-smoking (Tabelog). A course takes about two and a half hours (February 2026). In Takamiya-cho, 4–5 min from Kawaramachi, Karasuma and Shijo (Tabelog). Opened 7 July 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takamiya-cho, between Karasuma and Kawaramachi',
    cuisine: 'Seasonal fish and vegetables direct from producers, and game such as wild boar and deer simply grilled over charcoal (Tabelog) · omakase ¥6,600 incl. tax: sashimi, smoked dishes, soup, spear squid, meat, tempura, noodles and dessert (June 2026) · smoked Biwa trout served under a cloche of smoke (August 2026) · fish the owner caught; Saikyo-grilled fish and barracuda (January 2024) · venison with fuki miso (May 2024); venison kara-age, beef steak, bear hot pot (February 2026) · crab dish, fresh sashimi (December 2025) · Japanese sake picked by the chef (October 2026)',
    website: OF, gmaps: gm('のくる 京都 高宮町'), menu_url: OF,
    notes: '[Omakase izakaya · Takamiya-cho, game and own-caught fish] A ten-seat counter between Karasuma and Kawaramachi where chef Fujimura cooks a ¥6,600 omakase of producer-direct fish and vegetables, smoked Biwa trout, sashimi of fish the owner caught, and charcoal-grilled venison, boar or bear hot pot in season, with well-chosen sake. Open to 2:00; book ahead.',
    chef_bio: { chef_name: 'Fujimura (given name not in the sources)', roles: ['Owner-chef (October 2026 review names "Mr. Fujimura")'], origin: null,
      background: 'Per Tabelog: an izakaya opened in July 2021 serving fresh seafood and seasonal vegetables direct from producers, and game such as wild boar and deer grilled over charcoal. A January 2024 review says the owner serves fish caught personally.',
      philosophy: 'Simply grilled over charcoal to bring out the flavour of the meat (Tabelog).', specialty: 'Omakase with game and fresh fish.',
      anecdotes: [
        { text: 'An October 2026 regular calls it the first place to recommend in Kyoto, for chef Fujimura\'s dishes and sake picks — and wishes it could stay a secret.', source: R + 'B439410826/' },
        { text: 'A February 2026 diner came for the game and found the long-awaited bear hot pot tender and sweet, over a two-and-a-half-hour course.', source: R + 'B522999629/' },
        { text: 'An August 2026 diner enjoyed the smoked Biwa trout served with the smoke trapped under its cover.', source: R + 'B533591576/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理・イノベーティブ、中京区高宮町575、阪急河原町駅から徒歩4分、毎日18:00〜翌2:00 (L.O. 1:00)、不定休、予約可、カード (VISA、Master) 可、10席、禁煙、2021年7月7日オープン、産地直送の鮮魚と旬の野菜、猪や鹿などのジビエを炭火で。口コミ (2024年1月〜2026年10月、英語): Fujimura さんの料理と日本酒、おまかせコース税込6,600円、刺身、燻製、汁物、ヤリイカ、肉、天ぷら、締めの麺、デザート、Biwa のマスの燻製、店主が釣った魚、Saikyo 焼き、kamasu、鹿肉とfuki miso、鹿の唐揚げ、牛ステーキ、熊鍋、蟹、苦手なものは事前に伝えれば外してくれる。',
      confidence: 'medium', sources: [TB, OF, R + 'B439410826/', R + 'B478590291/', R + 'B486433031/', R + 'B507609561/', R + 'B515247376/', R + 'B519321987/', R + 'B522999629/', R + 'B523422068/', R + 'B529056960/', R + 'B529444215/', R + 'B531373530/', R + 'B533591576/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the omakase and mention dislikes in advance; allow about two and a half hours. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高宮町575',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005891, 135.765063); cross-checked: GSI 京都府京都市中京区高宮町575番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531373530/'],
    price_note: 'Omakase price from June 2026.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥6,600', 'Courses', 'ask', 'no', 'Tax included; June 2026.', 'omakase'),
      it('', '', 'Smoked Biwa trout', '', 'Courses', 'ask', 'no', 'August 2026.', 'biwa_trout'),
      it('', '', 'Bear hot pot (in season)', '', 'Game', 'ask', 'no', 'February 2026.', 'kuma_nabe'),
    ] }, {
    cuisine: '産地直送の旬の魚と野菜、猪や鹿などのジビエを炭火でシンプルに (食べログ)・税込6,600円のおまかせ: 刺身、燻製、汁物、ヤリイカ、肉、天ぷら、締めの麺、デザート (2026年6月)・煙を閉じ込めて出す Biwa のマスの燻製 (2026年8月)・店主が釣った魚、Saikyo 焼き、kamasu (2024年1月)・鹿肉とfuki miso (2024年5月)、鹿の唐揚げ、牛のステーキ、熊鍋 (2026年2月)・蟹の料理、新鮮な刺身 (2025年12月)・料理人が選ぶ日本酒 (2026年10月)',
    neighborhood: '高宮町、烏丸と河原町の間',
    gf_detail: '要確認。刺身、焼き魚や燻製、ジビエ、天ぷら、締めの麺のおまかせ (2024〜2026年の口コミ)。苦手なものは事前に伝えれば外してくれる (2025年5月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚、鹿、猪、熊のおまかせのコース (2024〜2026年の口コミ)。',
    notes: '[おまかせの居酒屋・高宮町、ジビエと店主が釣った魚] 烏丸と河原町の間にある10席のカウンター。料理人の Fujimura さんが、産地直送の魚と野菜、Biwa のマスの燻製、店主が釣った魚の刺身、炭火の鹿や猪、季節の熊鍋の6,600円のおまかせを、選び抜いた日本酒と。深夜2時まで、予約を。',
  });
}

// ================================================================ 創作料理 夜のとばり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041696/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://lgkco.com/yoruno-tobari/';
  const WD = day(['17:00', '23:00']); const WE = day(['16:30', '23:00']);
  put({
    id: 'kyoto_yoru_no_tobari', name: '創作料理 夜のとばり (Yoru no Tobari)', category: 'OMNI',
    lat: 35.007409, lng: 135.7697, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, duck and Kyoto vegetables, but also kara-age, spring rolls and a deep-fried dashimaki (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck, chicken ham, eel rice and dashi obanzai (2026 reviews).',
    hours_raw: 'Mon–Fri and the days around holidays 17:00–23:00; Sat, Sun and holidays 16:30–23:00 (last order food 22:00, drinks 22:30); closing days vary (Tabelog). Reservations accepted; two-hour limit when busy (Tabelog). Appetizer charge ¥550 (Tabelog, Japanese text: 「お通し料、550円」). Cards, e-money and QR (Tabelog). 22 seats (Tabelog). Heated tobacco allowed in a designated area (Tabelog; October 2026). Second floor of a building down a narrow alley at Kiyamachi Rokkaku, 5 min from Kyoto-Kawaramachi (Tabelog; October 2026). Opened 27 September 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi at Rokkaku — Kyoto-Kawaramachi',
    cuisine: 'Creative dishes on a Japanese base, between an izakaya and kaiseki, with seasonal ingredients (Tabelog) · Kyoto-style obanzai platter with Kyoto vegetables (May, June and October 2026) · duck dishes (June and July 2026); tender chicken ham (July 2026) · eel and edamame rice (June 2026) · deep-fried dashimaki (October 2026) · yodare chicken, taro spring rolls, kara-age (October 2026) · Kyoto sakes from dry to sweet; fresh lemon sour (June and October 2026)',
    website: OF, gmaps: gm('創作料理 夜のとばり 木屋町'), menu_url: TB,
    notes: '[Creative izakaya · Kiyamachi Rokkaku, obanzai and duck] A dim, stylish second-floor izakaya down a Kiyamachi alley, opened in 2024: a colourful obanzai platter of Kyoto vegetables, duck, eel and edamame rice, a deep-fried dashimaki, and Kyoto sake with friendly staff. ¥550 appetizer; heated tobacco allowed. Book at weekends.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a creative Japanese restaurant opened in September 2024, mixing the casual feel of an izakaya with the elegance of kaiseki; the official page is on the site of its operator, LGK Co.',
      philosophy: 'Seasonal ingredients in a relaxed setting (Tabelog).', specialty: 'Obanzai platter; duck.',
      anecdotes: [
        { text: 'A June 2026 visitor from Kanto came for Kyoto vegetables rarely seen at home and liked the range of sake.', source: R + 'B530680768/' },
        { text: 'An October 2026 first-timer called the deep-fried dashimaki a first in a lifetime.', source: R + 'B536960547/' },
        { text: 'A July 2026 diner liked the food but found the air conditioning weak.', source: R + 'B532973836/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・創作料理、中京区山崎町258-28 木屋町六角白鳥ビル 2F、京都河原町駅から徒歩約5分、月〜金・祝前後17:00〜23:00、土日祝16:30〜23:00 (L.O. 料理22:00、ドリンク22:30)、定休日は変動、予約可、混雑時は2時間制、お通し料550円、カード・電子マネー・QR 可、22席、加熱式たばこのみ喫煙可、2024年9月27日オープン、和食をベースにした創作料理、居酒屋の気軽さと会席の上品さ。口コミ (2026年5月〜10月、英語): 京野菜のおばんざいの盛り合わせ、鴨、鶏ハム、うなぎと枝豆のご飯、だし巻きの揚げ物、yodare 鶏、里芋の春巻き、唐揚げ、京都の日本酒、生レモンサワー、空調が弱いとの声も。',
      confidence: 'medium', sources: [TB, OF, R + 'B529312100/', R + 'B529937814/', R + 'B530680768/', R + 'B531171946/', R + 'B531675531/', R + 'B531919446/', R + 'B532286305/', R + 'B532973836/', R + 'B536689419/', R + 'B536960547/', R + 'B538038044/', R + 'B538314982/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book at weekends; order the obanzai platter; ¥550 appetizer. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区山崎町258-28 木屋町六角白鳥ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007409, 135.769700); cross-checked: GSI 京都府京都市中京区山崎町258番地 (lot) 73m — a large lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538314982/'],
    price_note: 'No item prices in the sources; ¥550 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Obanzai platter', '', 'Obanzai', 'ask', 'no', 'October 2026.', 'obanzai'),
      it('', '', 'Deep-fried dashimaki', '', 'À la carte', 'no', 'no', 'October 2026.', 'age_dashimaki'),
      it('', '', 'Eel and edamame rice', '', 'Rice', 'ask', 'no', 'June 2026.', 'unagi_gohan'),
      it('', '', 'Appetizer charge', '¥550', 'Charge', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '居酒屋と会席の間の和食ベースの創作料理、旬の食材で (食べログ)・京野菜のおばんざいの盛り合わせ (2026年5月・6月・10月)・鴨の料理 (2026年6月・7月)、やわらかい鶏ハム (2026年7月)・うなぎと枝豆のご飯 (2026年6月)・だし巻きの揚げ物 (2026年10月)・yodare 鶏、里芋の春巻き、唐揚げ (2026年10月)・辛口から甘口まで京都の日本酒、生レモンサワー (2026年6月・10月)',
    neighborhood: '木屋町六角。京都河原町駅',
    gf_detail: '要確認。おばんざい、鴨、京野菜のほか、唐揚げ、春巻き、だし巻きの揚げ物もある (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鴨、鶏ハム、うなぎのご飯、出汁のおばんざい (2026年の口コミ)。',
    notes: '[創作の居酒屋・木屋町六角、おばんざいと鴨] 木屋町の路地の奥、薄暗くおしゃれなビル2階の居酒屋。2024年開業。京野菜の彩りのおばんざい盛り、鴨、うなぎと枝豆のご飯、だし巻きの揚げ物を、京都の日本酒と気さくな店員と。お通し550円、加熱式たばこ可。週末は予約を。',
  });
}

// ================================================================ 放課後駄菓子バーA-55
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26028790/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://www.kyoto-dagashibar-a55.com/';
  const WD = day(['14:00', '23:00']); const FR = day(['14:00', '01:00']); const SA = day(['13:00', '05:00']); const SU = day(['13:00', '23:00']);
  put({
    id: 'kyoto_dagashi_bar_a55', name: '駄菓子食べ放題 放課後駄菓子バーA-55 京都四条河原町店', category: 'OMNI',
    lat: 35.007419, lng: 135.770024, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: snack crackers, fried bread and instant noodles (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A self-service shelf of over 120 packaged snacks; ingredients vary (April 2026).',
    hours_raw: 'Mon–Thu and the days around holidays 14:00–23:00; Fri 14:00–1:00; Sat 13:00–5:00; Sun and holidays 13:00–23:00 (Tabelog). Reservations accepted — seat-only bookings take a one- or two-hour plan; no-show fees apply (Tabelog). No service charge (Tabelog, Japanese text: 「特に無し」 — the English page wrongly says a service fee may be added). Cards incl. PayPay (Tabelog; April 2026). 40 seats; private rooms for 20–30 (Tabelog). Non-smoking (Tabelog). Haramasa Building 2F, 3 min from Keihan Sanjo (Tabelog). Opened 30 March 2017 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: FR, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, south of Sanjo — near Keihan Sanjo',
    cuisine: 'All-you-can-eat dagashi with drinks in a Heisei-nostalgia "after-school" bar (2025–26 reviews) · from ¥2,000 for one hour; the two-hour plan adds fried bread or butamen (April 2026); about ¥3,000 with drinks (April 2026) · two-hour all-you-can-drink from ¥2,200 with over 100 alcoholic and 70 non-alcoholic drinks (Tabelog) · over 120 kinds of dagashi such as Umaibo and Cabbage Taro (April 2026) · board games, Wii, manga and dress-up props (2025–26 reviews)',
    website: OF, gmaps: gm('放課後駄菓子バーA-55 京都'), menu_url: OF,
    notes: '[Dagashi bar · Kawaramachi Sanjo, all-you-can-eat snacks] A playful second-floor bar themed on after-school Heisei days: all-you-can-eat shelves of over 120 dagashi, time-limited drinks plans from about ¥2,000, board games, Wii, manga and costume props. Fun for groups and families; open to 5:00 on Saturday nights.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an all-you-can-eat dagashi bar opened in March 2017, with private rooms for groups and themed events.',
      philosophy: null, specialty: 'All-you-can-eat dagashi.',
      anecdotes: [
        { text: 'A February 2026 fan booked an event plan to sit in the seat where a favourite character had sat.', source: R + 'B522824800/' },
        { text: 'An April 2026 visitor lost track of time reading NARUTO among 150-odd board games and cosplay props.', source: R + 'B526226068/' },
        { text: 'A November 2025 visitor finally got the dagashi feast a strict childhood had forbidden.', source: R + 'B518111802/' },
      ],
      japanese_sources_summary: '食べログ: バー・居酒屋、中京区山崎町258-23 原正ビル 2F、京阪三条駅から徒歩3分、月〜木・祝前後14:00〜23:00、金14:00〜翌1:00、土13:00〜翌5:00、日祝13:00〜23:00、予約可 (席のみの予約は1時間か2時間の食べ飲み放題)、無断キャンセル料あり、サービス料なし、カード可、40席、個室20〜30名、禁煙、2017年3月30日オープン、2時間飲み放題2,200円から、アルコール100種以上・ノンアルコール70種以上。口コミ (2025年11月〜2026年10月、英語): 平成の放課後がテーマ、1時間2,000円から、2時間は揚げパンか Butamen付き、120種以上の駄菓子 (Umaibo、Cabbage Taro)、ボードゲーム150種、Wii、漫画、コスプレの小物、PayPay 可。',
      confidence: 'medium', sources: [TB, OF, R + 'B507131687/', R + 'B518111802/', R + 'B522824800/', R + 'B526086305/', R + 'B526226068/', R + 'B527035053/', R + 'B527377373/', R + 'B527400763/', R + 'B528352836/', R + 'B530923852/', R + 'B532015392/', R + 'B537148793/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick a time plan at the door; help yourself to the snack shelves; games and manga are free to use. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区山崎町258-23 原正ビル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007419, 135.769964), offset 5.5 m east: kyoto_unagi_unatama_kiyamachi is on 1F of the same building (1.9 m away); cross-checked: GSI 京都府京都市中京区山崎町258番地 (lot) 97m — a large lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526226068/', R + 'B527400763/', TB],
    price_note: 'Plan prices from April 2026 reviews and Tabelog; no service charge.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-eat dagashi and drinks, one hour (from)', '¥2,000', 'Plans', 'no', 'ask', 'April 2026.', 'plan_1h'),
      it('', '', 'Two-hour all-you-can-drink (from)', '¥2,200', 'Plans', '', '', 'Tabelog.', 'nomihodai_2h'),
      it('', '', 'Dagashi and drinks plan (some drinks extra)', '¥3,000', 'Plans', 'no', 'ask', 'April 2026.', 'plan_3000'),
    ] }, {
    cuisine: '平成の放課後がテーマのバーで、駄菓子の食べ放題とお酒 (2025〜2026年の口コミ)・1時間2,000円から、2時間のプランは揚げパンか Butamen付き (2026年4月)、飲み物込みで約3,000円 (2026年4月)・2時間の飲み放題2,200円から、アルコール100種以上、ノンアルコール70種以上 (食べログ)・Umaibo や Cabbage Taro など120種以上の駄菓子 (2026年4月)・ボードゲーム、Wii、漫画、仮装の小物 (2025〜2026年の口コミ)',
    neighborhood: '河原町、三条の南。京阪三条駅の近く',
    gf_detail: 'グルテンフリーではない。スナック菓子、揚げパン、カップ麺 (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。120種以上の市販の駄菓子をセルフで、原材料はさまざま (2026年4月)。',
    notes: '[駄菓子バー・河原町三条、駄菓子の食べ放題] 平成の放課後がテーマの遊び心ある2階のバー。120種以上の駄菓子が食べ放題、約2,000円からの時間制の飲み放題、ボードゲーム、Wii、漫画、仮装の小物も。グループや家族で楽しく。土曜は朝5時まで。',
  });
}

// ================================================================ 先斗町駿河屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004880/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://www.pontocho-surugaya.com/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_pontocho_surugaya', name: '先斗町駿河屋 (Pontocho Surugaya)', category: 'OMNI',
    lat: 35.007172, lng: 135.770969, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Warabi mochi made with bracken starch and kinako, yokan and mizu-yokan, plus a butter dorayaki (2024–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Warabi mochi with koshian and kinako and yokan are bean-based, but the butter dorayaki contains butter and egg (2024–26 reviews).',
    hours_raw: 'Mon and Thu–Sun 10:00–17:00; closed Tuesday and Wednesday; hours may change (Tabelog). No reservations (Tabelog). Cards accepted; no e-money or QR (Tabelog). Mostly take-away; a piece can be served on a plate to eat at the shop (August 2026). Popular items sell out — buy early on show days (May 2025). Non-smoking (Tabelog). Online orders via the official site (August 2026). On Pontocho south of Sanjo, 6 min from Keihan Sanjo (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, south of Sanjo',
    cuisine: 'Kyoto wagashi from a Pontocho shop of over 120 years (June 2024 review) · signature "hitokuchi warabi": bite-sized hon-warabi mochi around smooth koshian, dusted with unsweetened kinako, made to order in the back (December 2025; May 2026; October 2026) · bamboo-tube yokan in summer (June 2024); light mizu-yokan (July 2026) · butter dorayaki (May 2025)',
    website: OF, gmaps: gm('先斗町駿河屋'), menu_url: OF,
    notes: '[Wagashi · Pontocho, warabi mochi for over a century] A long-established wagashi shop behind a chidori noren on Pontocho, famous for its bite-sized hitokuchi warabi — wobbly hon-warabi mochi wrapped round smooth koshian in unsweetened kinako, made fresh to order — plus summer bamboo yokan, mizu-yokan and butter dorayaki. Take-away; closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a wagashi shop on Pontocho. A June 2024 review says it has served customers in Pontocho for over 120 years; a December 2025 review notes that items are made fresh in the back after ordering.',
      philosophy: 'Nothing kept pre-made; only the day\'s freshest pieces (December 2025 review).', specialty: 'Hitokuchi warabi mochi.',
      anecdotes: [
        { text: 'A May 2025 visitor at the Kamogawa Odori found the warabi mochi sold out after the show and bought a butter dorayaki instead.', source: R + 'B508444357/' },
        { text: 'An August 2026 passer-by asked to eat a piece on the spot and was served it on a plate.', source: R + 'B532963863/' },
        { text: 'A July 2026 visitor took summer mizu-yokan down to the Kamo river to eat.', source: R + 'B533100309/' },
      ],
      japanese_sources_summary: '食べログ: 和菓子、中京区先斗町三条下ル材木町187、京阪三条駅6番出口から西へ徒歩6分、月木金土日10:00〜17:00、火水休み、予約不可、カード可、禁煙。口コミ (2024年6月〜2026年10月、英語): 先斗町で120年以上、chidori の暖簾、名物の「hitokuchi warabi」(本わらび粉の餅でこし餡を包み、甘くないきな粉)、注文を受けてから奥で作る、夏の竹筒の羊羹、水羊羹、バタードラ焼き、売り切れることも、店で食べられることも、オンラインでも注文可。',
      confidence: 'medium', sources: [TB, OF, R + 'B488779709/', R + 'B495247097/', R + 'B507270573/', R + 'B508444357/', R + 'B512215781/', R + 'B519293438/', R + 'B521106739/', R + 'B522466835/', R + 'B527968219/', R + 'B532963863/', R + 'B533100309/', R + 'B537285850/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point to the samples in the case; ask if you want to eat a piece at the shop. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町三条下ル材木町187',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007172, 135.770969); cross-checked: GSI 京都府京都市中京区材木町187番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519293438/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Hitokuchi warabi (bite-sized warabi mochi, box of three)', '', 'Wagashi', 'ask', 'ask', 'December 2025.', 'hitokuchi_warabi'),
      it('', '', 'Mizu-yokan (summer)', '', 'Wagashi', 'ask', 'ask', 'July 2026.', 'mizu_yokan'),
      it('', '', 'Butter dorayaki', '', 'Wagashi', 'no', 'no', 'May 2025.', 'butter_dorayaki'),
    ] }, {
    cuisine: '先斗町で120年以上の和菓子 (2024年6月の口コミ)・名物の「hitokuchi warabi」: 本わらび粉の一口の餅でなめらかなこし餡を包み、甘くないきな粉をまぶす、注文を受けてから奥で作る (2025年12月、2026年5月・10月)・夏の竹筒の羊羹 (2024年6月)、あっさりした水羊羹 (2026年7月)・バタードラ焼き (2025年5月)',
    neighborhood: '先斗町、三条の南',
    gf_detail: '要確認。本わらび粉ときな粉のわらび餅、羊羹、水羊羹、バタードラ焼き (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。こし餡ときな粉のわらび餅や羊羹は豆が中心だが、バタードラ焼きはバターと卵を使う (2024〜2026年の口コミ)。',
    notes: '[和菓子・先斗町、100年以上のわらび餅] 先斗町のchidori の暖簾の老舗の和菓子店。名物は一口のhitokuchi warabiで、ぷるぷるの本わらびの餅がなめらかなこし餡を包み、甘くないきな粉をまとう。注文後に作りたてを。夏の竹筒の羊羹、水羊羹、バタードラ焼きも。持ち帰り中心、火水休み。',
  });
}

save();
