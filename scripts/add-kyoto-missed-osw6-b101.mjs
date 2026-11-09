// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 101.
//   + Eggs (エッグス) (long-running takeaway crepe stand by Miyakomesse, Okazaki) — rest
//   - skip 26027254 レストラン シェ シノ (thin: no 2025–26 review)
//   - skip 26032054 はなさき菓子店 (retail food shop, Greg 11-07 ruling)
//   - skip 26024296 ザ スクリーン (hotel listing)
//   - skip 26019580 京の六味 (retail food shop; thin, latest review 2021)
//   - skip 26038558 スバビハニ 丸太町店 (branch of a brand already in data)
//   + JAKUCHU CAFE (若冲カフェ) (café in the basement of the Hosomi Museum, Okazaki) — rest
//   + つるやこなな (Tsuruya Konana) (set-meal café known for its thick dashimaki, near Gojo) — rest
//   - skip 26005324 かつ丼 玄 (chain: Big Boy group)
//   - skip 26007544 ザ ドア 堀川店 (same-concept branch of ザ・ドアー 高倉店, in data)
//   + 糀屋カフェ (café of the Maizuru koji and miso maker 大阪屋こうじ店, Sanjo-Jingumichi) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches. Same-name counts (2026-11-08): one
//   each. 糀屋カフェ is the eat-in corner of 大阪屋こうじ店's Sanjo-Jingumichi shop; the firm has one other shop (Maizuru head shop).
//   None of the drafted shops is in data/kyoto.json.
//   Charges: none listed on Tabelog for the four. No halal claims; no owner deaths; single-review remarks about other diners
//   and staff looks left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-101');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26027254', 'thin: no 2025–26 review; the latest review is from 2020 (https://tabelog.com/en/kyoto/A2601/A260202/26027254/).');
skip('26032054', 'retail food shop (Greg 11-07 ruling): はなさき菓子店 is a takeaway cake shop (roll cakes); no founding date or GF/vegan claim sourced (https://tabelog.com/en/kyoto/A2601/A260202/26032054/).');
skip('26024296', 'hotel listing: THE SCREEN is a 13-room design hotel; its restaurant reviews sit under the hotel listing (https://tabelog.com/en/kyoto/A2601/A260203/26024296/).');
skip('26019580', 'retail food shop (Greg 11-07 ruling) and thin: a two-seat shop selling simmered fish to take home with rice and sake; the latest review is from 2021 (https://tabelog.com/en/kyoto/A2601/A260202/26019580/).');
skip('26038558', 'branch of a brand already in data: スバビハニ (kyoto_subabibani_shiyakusho); same ruling as 26041463 (https://tabelog.com/en/kyoto/A2601/A260202/26038558/).');
skip('26005324', 'chain: reviewers in March and May 2026 call かつ丼 玄 a chain restaurant, and a November 2026 reviewer says it is part of the Big Boy chain (https://tabelog.com/en/kyoto/A2601/A260202/26005324/dtlrvwlst/B499477967/, https://tabelog.com/en/kyoto/A2601/A260202/26005324/dtlrvwlst/B538908036/).');
skip('26007544', 'same-concept branch of a brand already in data: The door 堀川店 is the Horikawa branch of the bar ザ・ドアー (kyoto_the_door_takakura, ザ・ドアー 高倉店) (https://tabelog.com/en/kyoto/A2601/A260203/26007544/).');

// ================================================================ Eggs
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26018818/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:30']);
  put({
    id: 'kyoto_eggs_okazaki', name: 'Eggs (エッグス)', category: 'OMNI',
    lat: 35.013504, lng: 135.779767, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: crepes; no gluten-free batter mentioned (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: crepes with butter, fresh cream and chocolate (2025–26 reviews). No plant-based crepe mentioned.',
    hours_raw: 'Daily 11:00–18:30; closed irregularly (Tabelog). No cards, e-money or QR (Tabelog). Tabelog lists 22 seats and asks for one drink per person when eating in, but a January 2026 reviewer found it takeaway only, with no eat-in; crepes come in under five minutes and queues move quickly (January and October 2026). A street-side stand near Miyakomesse, ROHM Theatre and the Kyocera Museum of Art (January 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Okazaki, by Miyakomesse',
    cuisine: 'Old-fashioned crepe stand, crepes made to order with crisp edges · butter sugar ¥450 (March 2025) · chocolate banana cream ¥600 (November 2025) · fresh cream banana chocolate, the most popular, and fresh cream strawberry (April 2026) · fresh cream rum raisin ¥500 (October 2026) · cream and cocoa ¥500 (November 2026)',
    website: 'http://www.eggs-kyoto.com/', gmaps: gm('Eggs クレープ 京都 岡崎'), menu_url: TB,
    notes: '[Crepes · Okazaki] A street-side crepe stand near Miyakomesse and the art museums, loved by locals for a long time: crepes with crisp edges and a soft middle, mostly ¥450–600, served fast. Cash only; Okazaki Park is close by for eating.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per reviews: a long-running crepe shop loved by locals for a long time (April 2026); a November 2026 reviewer grew up with its crepes.',
      philosophy: null, specialty: 'Crepes with crisp edges and a chewy, soft centre.',
      anecdotes: [
        { text: 'A January 2026 visitor, sent by a Kyoto local, waited only briefly on a holiday, got a crepe in under five minutes and was told there is no eat-in, so sat on the low hedge across the street.', source: R + 'B520955580/' },
        { text: 'A November 2026 reviewer who grew up with these crepes said chain-shop crepes now fall short by comparison.', source: R + 'B521128416/' },
      ],
      japanese_sources_summary: '食べログ: 洋菓子・喫茶店、左京区岡崎成勝寺町1、毎日11:00〜18:30、不定休、カード・電子マネー・QR不可、22席 (店内飲食はワンドリンク制と記載)。口コミ (2025年3月〜2026年11月、英語): 昔ながらのクレープ店、テイクアウトのみ (2026年1月)、バターシュガー450円、チョコバナナクリーム600円、ラムレーズンクリーム500円、外はパリッと中はふんわり、行列でも提供が早い。',
      confidence: 'medium', sources: [TB, R + 'B503886996/', R + 'B516699622/', R + 'B520955580/', R + 'B526941059/', R + 'B537298518/', R + 'B521128416/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point at the menu board at the window; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎成勝寺町1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.013504, 135.779767); cross-checked: GSI 京都府京都市左京区岡崎成勝寺町1番地 (lot) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B503886996/', R + 'B516699622/', R + 'B537298518/', R + 'B521128416/'],
    price_note: 'Prices from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Butter sugar crepe', '¥450', 'Crepes', 'no', 'no', 'March 2025.', 'butter_sugar'),
      it('', '', 'Chocolate banana cream crepe', '¥600', 'Crepes', 'no', 'no', 'November 2025.', 'choco_banana'),
      it('', '', 'Fresh cream strawberry crepe', '', 'Crepes', 'no', 'no', 'April 2026.', 'strawberry'),
      it('', '', 'Fresh cream rum raisin crepe', '¥500', 'Crepes', 'no', 'no', 'October 2026.', 'rum_raisin'),
    ] }, {
    cuisine: '昔ながらのクレープ店。注文ごとに焼く縁がパリッとしたクレープ・バターシュガー450円 (2025年3月)・チョコバナナクリーム600円 (2025年11月)・一番人気の生クリームバナナチョコと生クリームいちご (2026年4月)・生クリームラムレーズン500円 (2026年10月)・クリームとココア500円 (2026年11月)',
    neighborhood: '岡崎。みやこめっせのそば',
    gf_detail: 'グルテンフリーではない。クレープ。グルテンフリーの生地の記載なし (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。バター、生クリーム、チョコのクレープ (2025〜2026年の口コミ)。植物性のクレープの記載なし。',
    notes: '[クレープ・岡崎] みやこめっせや美術館の近くの路面のクレープ店で、長く地元に愛される。縁はパリッと中はふんわり、主に450〜600円で提供が早い。現金のみ。岡崎公園で食べるのも一案。',
  });
}

// ================================================================ JAKUCHU CAFE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001748/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.artcube-kyoto.co.jp/cafecube/';
  const H = day(['10:30', '17:00']);
  put({
    id: 'kyoto_jakuchu_cafe', name: 'JAKUCHU CAFE (若冲カフェ)', category: 'OMNI',
    lat: 35.013954, lng: 135.779671, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, baguette sandwiches and bread with the lunch sets (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pasta with prosciutto or chicken, sandwiches with chicken or ham (2025 reviews). The day’s sandwich once had grilled vegetables, but with ham (September 2025).',
    hours_raw: 'Wed–Sun 10:30–17:00 (last order 16:30), lunch 11:30–14:30; closed Monday and Tuesday, and the next day if a holiday falls on Monday (Tabelog); the café’s site adds some irregular closures. In the evening it runs as trattoria en, 18:00–21:30 (café site). Reservations taken; private hire for up to 20 (Tabelog; a December 2025 group reserved the whole room). Cards, e-money and QR (Tabelog). 24 seats, 18 inside and 6 on the terrace (Tabelog). On the second basement floor of the Hosomi Museum; the restroom is outside the café (December 2025).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki — Hosomi Museum',
    cuisine: 'Museum café themed on the painter Ito Jakuchu, reopened in March 2025 (formerly CAFE CUBE) · the day’s baguette sandwich, herb chicken and Kujo green onion ¥1,200 (March 2025) · pasta of the day: lemon Genovese with prosciutto (July 2025), aglio e olio with chicken and mushrooms (September 2025); Pasta C ¥1,600 with bread or salad · a Jakuchu dessert set (March 2025) · dinner for groups with dessert (December 2025)',
    website: SITE, gmaps: gm('JAKUCHU CAFE 細見美術館 京都'), menu_url: TB,
    notes: '[Café · Okazaki] The café two floors down in the Hosomi Museum, reopened in spring 2025 around the painter Ito Jakuchu: reproductions of the Rooster in Snow and other scrolls on the walls, Jakuchu-designed plates, and pasta or baguette-sandwich lunches. Closed Monday and Tuesday; trattoria en in the evening.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'The museum café of the Hosomi Museum, formerly CAFE CUBE, reopened in March 2025 with a theme of the painter Ito Jakuchu and high-resolution reproductions of the artist’s works as decor (Tabelog remarks).',
      philosophy: null, specialty: 'Pasta of the day and the day’s sandwich, a limited number each day.',
      anecdotes: [
        { text: 'A March 2025 visitor, in Kyoto for the museum’s Jakuchu and Edo painting show, ate the limited day’s sandwich on a plate with a Jakuchu design, under scrolls of the Rooster in Snow, Shrimp, Taro and Fushimi Dolls.', source: R + 'B503953256/' },
        { text: 'A December 2025 group, after the Sèvres exhibition, reserved the whole room for dinner among the Jakuchu reproductions.', source: R + 'B519319942/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ケーキ・パスタ、左京区岡崎最勝寺町6-3 細見美術館B2F、水〜日10:30〜17:00 (L.O.16:30)、ランチ11:30〜14:30、月・火休み (月曜が祝日の場合は翌日)、夜はTrattoria Enとして18:00〜、予約可、20名まで貸切可、カード・電子マネー・QR可、24席 (店内18・テラス6)、旧店名 CAFE CUBE、2025年3月に伊藤若冲をテーマにリニューアル。公式サイト: JAKUCHU CAFÉ 10:30-17:00、trattoria en 18:00-21:30、月・火休み (不定休あり)。口コミ (2025年3月〜12月、英語): 若冲の掛け軸の複製、本日のサンドイッチ1,200円、本日のパスタ、パスタC1,600円。',
      confidence: 'medium', sources: [TB, SITE, R + 'B503953256/', R + 'B511200362/', R + 'B513609112/', R + 'B519319942/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table from the menu; cards accepted. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎最勝寺町6-3 細見美術館 Ｂ２Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (official, corporate member); café site; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.013954, 135.779671); cross-checked: GSI 京都府京都市左京区岡崎最勝寺町6番地 (lot) 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503953256/', R + 'B511200362/', R + 'B513609112/'],
    price_note: 'Prices from 2025 reviews; the pasta and sandwich change daily.', last_checked: TODAY, items: [
      it('', '', 'Day’s sandwich: herb chicken and Kujo green onion', '¥1,200', 'Lunch', 'no', 'no', 'Limited number; March 2025.', 'sandwich'),
      it('', '', 'Pasta C (pasta of the day, with bread or salad)', '¥1,600', 'Lunch', 'no', 'no', 'Aglio e olio with chicken and mushrooms, September 2025; lemon Genovese with prosciutto, July 2025.', 'pasta'),
      it('', '', 'Jakuchu dessert set', '', 'Desserts', 'no', 'no', 'March 2025.', 'dessert_set'),
    ] }, {
    cuisine: '画家・伊藤若冲をテーマにした美術館のカフェ、2025年3月にリニューアル (旧 CAFE CUBE)・本日のバゲットサンド、ハーブチキンとねぎ1,200円 (2025年3月)・本日のパスタ: レモンのジェノベーゼと生ハム (2025年7月)、鶏ときのこのアーリオ・オーリオ (2025年9月)。パスタC1,600円はパンかサラダ付き・若冲デザートセット (2025年3月)・団体のディナーとデザート (2025年12月)',
    neighborhood: '岡崎。細見美術館',
    gf_detail: 'グルテンフリーではない。パスタ、バゲットサンド、ランチセットのパン (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。生ハムや鶏のパスタ、鶏やハムのサンドイッチ (2025年の口コミ)。グリル野菜のサンドイッチもハム入り (2025年9月)。',
    notes: '[カフェ・岡崎] 細見美術館の地下2階のカフェ。2025年春に伊藤若冲をテーマにリニューアルし、掛け軸の複製、若冲柄の皿で、パスタやバゲットサンドのランチ。月・火休み、夜は trattoria en。',
  });
}

// ================================================================ つるやこなな
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26022568/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '20:00']);
  put({
    id: 'kyoto_tsuruya_konana', name: 'つるやこなな (Tsuruya Konana)', category: 'OMNI',
    lat: 34.994022, lng: 135.756776, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dashimaki with dashi soy sauce, ginger pork stir-fry, miso soup (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: rolled omelette, pork, miso soup (2025–26 reviews).',
    hours_raw: 'Daily 11:30–20:00; closed irregularly (Tabelog). No cards or e-money (Tabelog). Opened 24 April 2013 (Tabelog). Fills soon after opening even on weekdays, with no place to wait outside (April 2026). A nostalgic diner-style room; the omelette is finished in front of you (May 2025). Near the Hakusan-yu bathhouse (March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Near Gojo station — Shimogyo',
    cuisine: 'Set-meal café known for its dashimaki · the dashimaki (thick rolled omelette) set meal, fluffy and lightly sweet with a Kansai-style dashi soy sauce (May 2025, April 2026) · the daily set meal, e.g. eggplant and pork ginger stir-fry with a small side and miso soup (March 2026)',
    website: null, gmaps: gm('つるやこなな 京都 下京区'), menu_url: TB,
    notes: '[Set meals · Gojo] A small set-meal café, busy with regulars, known for a very thick dashimaki rolled omelette; there is also a daily set. Open 11:30–20:00 daily; cash only; arrive early.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 24 April 2013 (Tabelog).',
      philosophy: null, specialty: 'Thick dashimaki rolled omelette set.',
      anecdotes: [
        { text: 'A March 2026 visitor came in for lunch after the sauna at the nearby Hakusan-yu and, torn between the famous dashimaki set and the daily set, took the eggplant and pork ginger stir-fry.', source: R + 'B524218333/' },
        { text: 'An April 2026 visitor found one cheerful staff member running the whole room at lunch and called it lucky to get in right away.', source: R + 'B525987265/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・バー、下京区艮町892、毎日11:30〜20:00、不定休、カード・電子マネー不可、オープン日2013年4月24日。口コミ (2025年5月〜2026年4月、英語): 分厚いだし巻き玉子定食、関西風のだし醤油、日替わり定食 (なすと豚の生姜焼き)、常連でにぎわう、昔ながらの食堂の雰囲気、外に待つ場所はない。',
      confidence: 'low', sources: [TB, R + 'B507926802/', R + 'B524218333/', R + 'B525987265/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask for the dashimaki set or the daily set; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区艮町892',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (34.994022, 135.756776); cross-checked: GSI 京都府京都市下京区艮町892番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507926802/', R + 'B524218333/', R + 'B525987265/'],
    price_note: 'No 2025–26 prices quoted; reviewers report under ¥1,000 to ¥1,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Dashimaki (rolled omelette) set meal', '', 'Set meals', 'no', 'no', 'May 2025, April 2026.', 'dashimaki_teishoku'),
      it('', '', 'Daily set meal (eggplant and pork ginger stir-fry)', '', 'Set meals', 'no', 'no', 'Changes daily; March 2026.', 'higawari'),
    ] }, {
    cuisine: 'だし巻きで知られる定食のカフェ・分厚いだし巻き玉子定食、ふんわりほんのり甘く関西風のだし醤油で (2025年5月・2026年4月)・日替わり定食、なすと豚の生姜焼きに小鉢と味噌汁など (2026年3月)',
    neighborhood: '五条駅の近く。下京区',
    gf_detail: 'グルテンフリーではない。だし醤油のだし巻き、豚の生姜焼き、味噌汁 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だし巻き玉子、豚肉、味噌汁 (2025〜2026年の口コミ)。',
    notes: '[定食・五条] 常連でにぎわう小さな定食のカフェで、とても分厚いだし巻き玉子が名物。日替わり定食もある。毎日11:30〜20:00、現金のみ、早めに。',
  });
}

// ================================================================ 糀屋カフェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033182/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.namakouji.com/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_kojiya_cafe', name: '糀屋カフェ', category: 'OMNI',
    lat: 35.009608, lng: 135.78396, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a hot sandwich set, soy sauce koji on the boiled egg, gratin with white sauce (2026 reviews). The miso’s grains are not stated; ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every set seen comes with fish, chicken, pork or egg, and the miso soup has a dashi of unstated base (2026 reviews). The amazake drinks are made from rice koji; the almond tofu and ice cream may hold dairy, so ask.',
    hours_raw: 'Tue–Sun 11:00–17:00 (last order 16:00); closed Monday, open on holiday Mondays (Tabelog). The maker’s site says the Sanjo-Jingumichi shop stays open daily from early to late November and from mid-March to early April. No cards; e-money and QR (Tabelog). Through the miso and koji shop at the front to the eat-in room at the back, with some seats over a small garden (April and May 2026). Busy at lunch; a short wait inside at times (May and July 2026). Across from THE HOTEL HIGASHIYAMA KYOTO TOKYU, near the Jingu-michi bus stop (August 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-Jingumichi — Okazaki',
    cuisine: 'Koji-maker’s café, most dishes made with its own miso and koji · miso soup set: a large bowl of miso soup with a choice of miso, such as Kyo Awase (white and red blend), with saikyo-grilled fish, a boiled egg with koji miso and miso pickles (February, April and July 2026) · onigiri set ¥1,200, rice balls coated with two misos (May and September 2026) · moromi and cheese hot sandwich set ¥1,150 (January 2026) · chicken stroganoff set (May and August 2026) · pork belly with moromi miso set (August 2026) · white-miso gratin (August 2026) · amazake almond tofu, cold amazake with ginger, amazake milk (January–August 2026)',
    website: SITE, gmaps: gm('糀屋カフェ 京都 三条神宮道'), menu_url: TB,
    notes: '[Koji café · Okazaki] The eat-in room behind the Kyoto shop of 大阪屋こうじ店, a koji and miso maker founded in the Kan’ei era in Maizuru: a big bowl of miso soup with your choice of miso, saikyo-grilled fish and koji sweets. A short walk from Heian Shrine; closed Monday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: '大阪屋こうじ店 was founded in the Kan’ei era, when it moved from Osaka to Maizuru and took 大阪屋 as its house name; it makes fresh koji, miso, moromi, shio koji and amazake, and has its head shop in Maizuru and this shop at Sanjo-Jingumichi (namakouji.com). A reviewer calls it a miso and koji shop run by a miso maker from Maizuru (April 2026). Family succession not sourced.',
      philosophy: 'Per reviews: most dishes use the house miso and koji (September 2026).',
      specialty: 'Miso soup set with a choice of miso; amazake sweets.',
      anecdotes: [
        { text: 'An April 2026 regular, after a walk from the Kamo River to the Heian Shrine garden, took a seat over the small garden, chose a red-and-white miso blend for the soup with saikyo-grilled saury, and finished with amazake almond tofu and cold amazake.', source: R + 'B525801097/' },
        { text: 'A July 2026 visitor liked the house koji in the dishes so much that all of it went home as souvenirs.', source: R + 'B530367265/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、東山区三条通神宮道東入中之町181、火〜日11:00〜17:00 (L.O.16:00)、月曜休み (祝日は営業)、カード不可、電子マネー・QR可。公式サイト (namakouji.com): 寛永年間創業の大阪屋こうじ店、大阪から舞鶴に移り「大阪屋」を屋号とする、舞鶴本店と三条神宮道店、紅葉 (11月上旬〜下旬) と花見 (3月中旬〜4月上旬) の時期は無休。口コミ (2026年1月〜9月、英語): 舞鶴の味噌屋の店、味噌を選べる味噌汁定食と味噌漬けの焼き魚、おにぎり定食1,200円、もろみチーズのホットサンド定食1,150円、甘酒の杏仁豆腐、冷やし甘酒、チキンストロガノフ、豚バラのもろみ味噌、白味噌のグラタン。',
      confidence: 'medium', sources: [TB, SITE, R + 'B520606399/', R + 'B521006077/', R + 'B525801097/', R + 'B527864861/', R + 'B532377963/', R + 'B533476996/', R + 'B534292617/', R + 'B535677830/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick the set and the miso for your soup; e-money or QR, no cards. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区三条通神宮道東入中之町181',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; maker’s site lists the Sanjo-Jingumichi shop; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009608, 135.78396); cross-checked: GSI 京都府京都市東山区中之町181番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520606399/', R + 'B527864861/', R + 'B532377963/', R + 'B535677830/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Miso soup set (choice of miso, saikyo-grilled fish)', '', 'Set meals', 'ask', 'no', 'February–July 2026.', 'misoshiru_teishoku'),
      it('', '', 'Onigiri set (rice balls with two misos)', '¥1,200', 'Set meals', 'ask', 'no', 'May and September 2026.', 'onigiri_teishoku'),
      it('', '', 'Moromi and cheese hot sandwich set', '¥1,150', 'Set meals', 'no', 'no', 'January 2026.', 'hot_sandwich'),
      it('', '', 'Chicken stroganoff set', '', 'Set meals', 'ask', 'no', 'May and August 2026.', 'stroganoff'),
      it('', '', 'Amazake almond tofu', '', 'Sweets', 'ask', 'ask', 'January 2026.', 'amazake_annin'),
    ] }, {
    cuisine: '麹屋のカフェで、ほとんどの料理に自家製の味噌と麹・味噌汁定食: 大きな椀の味噌汁は白と赤の合わせなど味噌を選べ、味噌漬けの焼き魚、麹味噌をのせたゆで卵、味噌漬け付き (2026年2月・4月・7月)・おにぎり定食1,200円、2種の味噌をまとったおにぎり (2026年5月・9月)・もろみチーズのホットサンド定食1,150円 (2026年1月)・チキンストロガノフ定食 (2026年5月・8月)・豚バラのもろみ味噌定食 (2026年8月)・白味噌のグラタン (2026年8月)・甘酒の杏仁豆腐、生姜入りの冷やし甘酒、甘酒ミルク (2026年1月〜8月)',
    neighborhood: '三条神宮道。岡崎',
    gf_detail: 'グルテンフリーではない。ホットサンド定食、ゆで卵に醤油麹、ホワイトソースのグラタン (2026年の口コミ)。味噌の原料の穀物は記載なし。要確認。',
    vegan_detail: 'ヴィーガン不可。どの定食も魚、鶏、豚、卵付きで、味噌汁のだしの原料は記載なし (2026年の口コミ)。甘酒は米麹から。杏仁豆腐やアイスクリームは乳製品を含む可能性があり要確認。',
    notes: '[麹カフェ・岡崎] 寛永年間に舞鶴で創業した麹と味噌の大阪屋こうじ店の京都の店の奥のイートイン。味噌を選べる大きな椀の味噌汁、味噌漬けの焼き魚、麹の甘味。平安神宮から歩いてすぐ、月曜休み。',
  });
}

save();
