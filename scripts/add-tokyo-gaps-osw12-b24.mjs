// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 24.
//   + 麺処 晴 HARU (7-seat niboshi ramen counter by Iriya; Tabelog Ramen TOKYO 100 2025) — no ramen block
//   + とん平 Tonpei (8-seat tonkatsu counter by Uguisudani, founded 1947; Tabelog Tonkatsu 100 2026)
//   + 横浜家系ラーメン 鶯家 Uguisu Ya (iekei ramen to 4 am, free rice; same lot as Tonpei; opened 2015) — no ramen block
//   + 山鶏 ハナレ Yamadori Hanare (yakitori and local sake on a Yushima 7th floor)
// Skipped (see skip()): 羊不同烤小串 13273650, 鳥恵 13092080, 小諸そば 上野広小路店 13104699, 太陽のトマト麺 上野広小路店 13165010.
// Undecided (no put, no skip): as before (あさが家, まつり屋, ビアバックス, 鳥椿, ルンビニ, サルガム, マ・シェリ, マル超ホルモン404);
//   我流担々麺 竹子 天神下店 13101187 (branch suffix, no other shop or count found); 喜多方食堂 浅草本店 13158335 ("本店",
//   no other shop or count found).
// Chain check (with Greg's 2026-11-02 rulings and the working line of 4 or fewer shops). HARU, Tonpei, Uguisu Ya: one shop each
//   found. Yamadori Hanare: the annex of 山鶏 (a March 2024 reviewer was sent here from the main shop) — two shops, none in data.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address. Tonpei and Uguisu Ya share 根岸1-2-20: Tonpei takes the GSI
//   point, Uguisu Ya keeps its Tabelog point 9 m away. check-stacked-pins: no new pin within 3 m of another.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13273650', 'chain: 羊不同烤小串 is the Japan first shop of a Chinese skewer chain (Gnavi/hamoni summaries: "日本初出店"); overseas multi-shop chain, as with 天府李米線 (batch 15).');
skip('13092080', 'same brand already in data: 鳥恵 上野広小路店 is tokyo_torie_ueno_hirokoji (batch 22); this 鳥恵 is another shop of that brand.');
skip('13104699', 'national chain: 小諸そば (Komoro Soba); this is the 上野広小路店.');
skip('13165010', 'chain: 太陽のトマト麺 (Eat&Holdings) has 26+ shops from Tokyo to Kansai (macaro-ni summary); this is the 上野広小路店.');

// ================================================================ 麺処 晴
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13143115/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '15:00'], ['18:00', '21:00']); const E = day(['11:00', '17:00']);
  put({
    id: 'tokyo_mendokoro_haru_iriya', name: '麺処 晴 (HARU)', category: 'OMNI',
    lat: 35.719757, lng: 139.783279, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thin wheat noodles in a niboshi and soy-sauce broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a dried-sardine (niboshi) broth with pork chashu.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 18:00–21:00; Sat–Sun 11:00–17:00 (Tabelog; may change). No reservations; a short queue at weekend lunch (4–6 people, October–November 2026). Ticket machine; tickets are collected while you wait. Cash only. 7 counter seats.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shitaya 1-chōme — 1 min from Iriya Stn Exit 2; 5 min from JR Uguisudani South Exit',
    cuisine: 'Niboshi (dried-sardine) ramen with a sharp soy-sauce edge; Tabelog Ramen TOKYO 100 2025 · shoyu ramen (chūka soba) ¥1,150, seasoned egg ¥1,300, special ¥1,500 (October–November 2026); a richer "noko" bowl; thin straight noodles with chopped onion, two slices of chashu and menma · aedama (extra noodles with soy or salt seasoning) ¥300, which most diners add',
    website: null, gmaps: gm('麺処 晴 下谷1-11-7'), menu_url: null,
    notes: "[Ramen · Iriya, a seven-seat niboshi ramen counter] A tiny ramen counter a minute from Iriya Station, in Tabelog's Ramen 100, built around a clean, aromatic niboshi broth with a sharp soy edge. The standard chūka soba (¥1,150) comes with thin, chewy noodles, chopped onion, two slices of chashu and menma; most people add an aedama of extra seasoned noodles (¥300). There is also a richer niboshi bowl for those who want more punch. Even niboshi sceptics in 2026 were won over by how light it is. Buy a ticket and expect a short weekend queue; it turns over fast. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog listing (Ramen TOKYO 100, 2025). No source names the owner.', philosophy: null, specialty: 'Niboshi shoyu ramen.',
      anecdotes: [
        { text: '"The broth, rich with niboshi (dried sardine), has a sharp soy sauce flavor that really stands out." — October 2026, chūka soba.', source: R + 'B538143231/' },
        { text: '"The broth, made with niboshi (dried sardines) and a soy sauce base, was delicious" — October 2026, shoyu ramen ¥1,150.', source: R + 'B538017415/' },
        { text: '"It wasn\'t heavy at all, yet it had a rich flavor, and the noodles had a great chewiness—definitely my kind of bowl!" — October 2026.', source: R + 'B538148142/' },
      ],
      japanese_sources_summary: '食べログ: 麺処 晴、下谷1-11-7、入谷駅2番出口から徒歩1分、JR鶯谷駅南口から5分、月〜金11:00〜15:00・18:00〜21:00、土日11:00〜17:00、予約不可、カード・電子マネー・QR不可、カウンター7席、食べログ ラーメン TOKYO 百名店 2025。口コミ (2026年10〜11月): 煮干しと醤油のスープ、細いストレート麺、刻み玉ねぎ、チャーシュー2枚、メンマ、醤油ラーメン (中華そば) 1,150円、味玉1,300円、特製1,500円、濃厚、和え玉 (醤油か塩) 300円、食券制、週末の昼は4〜6人の行列、回転は早い。',
      confidence: 'medium', sources: [TB, R + 'B233139197/', R + 'B535607771/', R + 'B538017415/', R + 'B538058866/', R + 'B538113041/', R + 'B538143231/', R + 'B538148142/', R + 'B538427023/', R + 'B538455674/', R + 'B538459268/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; short queue outside; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区下谷1-11-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October–November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区下谷一丁目11番7号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538017415/', R + 'B538113041/', R + 'B538058866/', R + 'B535607771/'],
    price_note: 'Prices from October–November 2026 reviews (ticket machine).', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen (chūka soba)', '¥1,150', 'Ramen', 'no', 'no', 'October 2026.', 'shoyu'),
      it('', '', 'Seasoned-egg shoyu ramen', '¥1,300', 'Ramen', 'no', 'no', 'October 2026.', 'ajitama'),
      it('', '', 'Special ramen', '¥1,500', 'Ramen', 'no', 'no', 'October 2026.', 'tokusei'),
      it('', '', 'Aedama (extra seasoned noodles, soy or salt)', '¥300', 'Extras', 'no', 'no', 'October–November 2026.', 'aedama'),
    ] }, {
    cuisine: '醤油のキレのある煮干しラーメン。食べログ ラーメン TOKYO 百名店 2025・醤油ラーメン (中華そば) 1,150円、味玉1,300円、特製1,500円 (2026年10〜11月)、濃厚な一杯も、細いストレート麺に刻み玉ねぎ、チャーシュー2枚、メンマ・和え玉 (醤油か塩) 300円、多くの客が追加',
    neighborhood: '下谷一丁目。入谷駅2番出口から徒歩1分、JR鶯谷駅南口から5分',
    gf_detail: 'グルテンフリーではありません。煮干しと醤油のスープに小麦の細麺。',
    vegan_detail: 'ヴィーガンではありません。煮干しのスープに豚のチャーシュー。',
    notes: '[ラーメン・入谷、7席の煮干しラーメン] 入谷駅から1分、食べログのラーメン百名店に選ばれた小さなカウンターで、すっきりと香る煮干しのスープに醤油のキレ。基本の中華そば (1,150円) は、もちもちの細麺に刻み玉ねぎ、チャーシュー2枚、メンマ。多くの人が和え玉 (300円) を追加します。もっと力強い濃厚な一杯も。2026年には煮干しが苦手な人も軽さに驚いたという声。食券を買い、週末は少し並びますが回転は早い。現金のみ。',
  });
}

// ================================================================ とん平
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13069370/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['18:00', '21:00']);
  put({
    id: 'tokyo_tonpei_uguisudani', name: 'とん平 (Tonpei)', category: 'OMNI',
    lat: 35.721256, lng: 139.780304, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, deep-fried pork cutlets; tonkatsu sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlets, pork miso soup, fried oysters in season.',
    hours_raw: 'Mon–Sat 11:30–14:00 and 18:00–21:00; closed Sundays and holidays (Tabelog; may change). No reservations; queues before opening, sometimes full at opening (October 2026). Cash only. 8 counter seats. Non-smoking. One person cooks and serves (October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Negishi 1-chōme, across the overpass — 1 min from JR Uguisudani South Exit',
    cuisine: 'Tonkatsu fried at low temperature to a pale, thin crust; Tabelog Tonkatsu 100 2026 · pork loin cutlet rice ¥1,800, tenderloin cutlet rice ¥1,900 (October 2026); à-la-carte tenderloin; fried oysters in season · tonjiru made to order with pork, onion, tofu, mitsuba and yuzu; pickles; piled cabbage with refills; salt, mustard or sauce to taste',
    website: null, gmaps: gm('とん平 根岸1-2-20'), menu_url: null,
    notes: "[Tonkatsu · Uguisudani, a one-man counter since 1947] An eight-seat tonkatsu counter just across the overpass from Uguisudani's South Exit, founded in 1947 and now run by the founder's grandson, according to an October 2026 review, and in Tabelog's Tonkatsu 100. One cook does everything, frying two portions at a time at a low temperature so the crust stays thin and pale and the pork juicy: loin cutlet rice ¥1,800, tenderloin ¥1,900 — fair for this quality, reviewers say. The made-to-order tonjiru with yuzu is worth adding. Arrive before opening to make the first seating; cash only; closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'Founded in 1947 (October 2026 review)', background: 'Per an October 2026 review, the restaurant is in its third generation, led by the founder\'s grandson; reviewers in October 2026 describe a one-person operation. No source names the owner.', philosophy: null, specialty: 'Low-temperature tonkatsu; tonjiru.',
      anecdotes: [
        { text: '"The cutlets were beautifully fried at a low temperature with a white coating, and the meat was in perfect condition." — October 2026, loin and tenderloin cutlet rice.', source: R + 'B537679374/' },
        { text: '"The tonjiru was incredibly simple, made with just pork, onions, tofu, and mitsuba (Japanese wild parsley), but it was carefully prepared in a pot for each order." — October 2026.', source: R + 'B483492497/' },
        { text: '"The chef was working solo, carefully preparing each piece after taking the order." — October 2026, tenderloin cutlet rice.', source: R + 'B537803925/' },
      ],
      japanese_sources_summary: '食べログ: とん平、根岸1-2-20、鶯谷駅南口から徒歩1分、月〜土11:30〜14:00・18:00〜21:00、日祝休み、予約不可、カード・電子マネー・QR不可、カウンター8席、禁煙、食べログ とんかつ 百名店 2026。口コミ (2026年10月): 1947年創業、孫の三代目、店主一人で営業、低温で揚げた白い衣のとんかつ、ロースかつライス1,800円、ヒレかつライス1,900円、注文ごとに作る豚汁 (豚肉、玉ねぎ、豆腐、三つ葉、柚子)、漬物、キャベツはおかわり可、塩・からし・ソース、開店前から行列、季節のカキフライ。',
      confidence: 'medium', sources: [TB, R + 'B468283099/', R + 'B470992015/', R + 'B483492497/', R + 'B536950188/', R + 'B537502646/', R + 'B537679374/', R + 'B537803925/', R + 'B537868302/', R + 'B538261442/', R + 'B538380958/'] },
    cultural_comfort: { level: 'japanese', note: 'Quiet one-person counter; queue before opening; cash only; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都台東区根岸1-2-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (Tonkatsu 100, 2026); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区根岸一丁目2番20号 (go) 2m; same lot as Uguisu Ya (tokyo_uguisuya_uguisudani), 9 m apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537868302/', R + 'B536950188/'],
    price_note: 'Prices from October 2026 reviews; no menu on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Pork loin cutlet rice', '¥1,800', 'Tonkatsu', 'no', 'no', 'October 2026.', 'rosu_katsu'),
      it('', '', 'Tenderloin cutlet rice', '¥1,900', 'Tonkatsu', 'no', 'no', 'October 2026.', 'hire_katsu'),
    ] }, {
    cuisine: '低温で揚げた薄く白っぽい衣のとんかつ。食べログ とんかつ 百名店 2026・ロースかつライス1,800円、ヒレかつライス1,900円 (2026年10月)、単品のヒレかつ、季節のカキフライ・豚肉、玉ねぎ、豆腐、三つ葉、柚子の注文ごとに作る豚汁、漬物、山盛りのキャベツはおかわり可、塩、からし、ソースはお好みで',
    neighborhood: '根岸一丁目、跨線橋を渡ってすぐ。JR鶯谷駅南口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。パン粉の衣で揚げたとんかつ、とんかつソース。',
    vegan_detail: 'ヴィーガンではありません。とんかつ、豚汁、季節のカキフライ。',
    notes: '[とんかつ・鶯谷、1947年からの一人営業のカウンター] 鶯谷駅南口の跨線橋を渡ってすぐの8席のとんかつのカウンターで、1947年創業。2026年10月の口コミによると創業者の孫が三代目として営み、食べログのとんかつ百名店。店主が一人ですべてをこなし、2人分ずつ低温で揚げるので衣は薄く白っぽく、肉はジューシー: ロースかつライス1,800円、ヒレ1,900円で、この質なら手ごろという声。注文ごとに作る柚子の豚汁もおすすめ。最初の回に入るなら開店前に。現金のみ、日曜・祝日休み。',
  });
}

// ================================================================ 横浜家系ラーメン 鶯家
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13183121/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '04:00']);
  put({
    id: 'tokyo_uguisuya_uguisudani', name: '横浜家系ラーメン 鶯家 (Uguisu Ya)', category: 'OMNI',
    lat: 35.721327, lng: 139.780345, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles in a soy-sauce pork-bone broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth with chashu.',
    hours_raw: 'Daily 11:00–4:00 (Tabelog; may change). No reservations. Ticket machine; staff ask your preferences. Free self-serve rice. Cash only. 21 seats, some shared tables. Non-smoking. Opened 6 June 2015.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Negishi 1-chōme — near JR Uguisudani Station',
    cuisine: 'Yokohama iekei ramen: soy-sauce pork-bone broth, thick short noodles, spinach and chashu (reviews) · tonkotsu ramen ¥930 (March and July 2026), shoyu tonkotsu ramen ¥980 (September 2026); salt ramen; ¥700 ramen on days with a 5 in the date (April and August 2026); yakiniku tsukemen · free rice; shredded ginger on the table; draft beer',
    website: null, gmaps: gm('横浜家系ラーメン 鶯家'), menu_url: null,
    notes: "[Ramen · Uguisudani, iekei ramen until 4 am] A Yokohama-style iekei ramen shop near Uguisudani Station, open from 11:00 until 4:00 every day and busy after midnight with people finishing a night out. The broth leans toward rich, mild pork bone rather than sharp soy, with thick, short noodles, spinach and chashu; free rice and table ginger round it out. Ramen is about ¥930–980, and ¥700 on days with a 5 in the date. Opinions vary: some love it as a late-night bowl, while an August 2026 diner found the room cramped and grubby, the broth porky and the noodles underdone. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 6 June 2015 (Tabelog)', background: 'Tabelog listing. No source names the owner.', philosophy: null, specialty: 'Iekei ramen.',
      anecdotes: [
        { text: '"On a weekday around 10:30 PM, I happened to pass by and saw a ramen bowl for JPY 700, so I decided to stop by." — August 2026.', source: R + 'B533140204/' },
        { text: '"Also, you can enjoy unlimited refills of white rice!" — June 2026.', source: R + 'B530023989/' },
        { text: '"The broth had a strong, unpleasant pork smell that overshadowed any sharpness or umami from the soy sauce." — August 2026.', source: R + 'B533964357/' },
      ],
      japanese_sources_summary: '食べログ: 横浜家系ラーメン 鶯家、根岸1-2-20、鶯谷駅から203m、毎日11:00〜翌4:00、予約不可、カード・電子マネー・QR不可、21席、禁煙、2015年6月6日オープン。口コミ (2026年3〜10月): 豚骨ラーメン930円、醤油豚骨ラーメン980円 (2026年9月)、5のつく日は700円、塩ラーメン、焼肉つけ麺、ライス無料、卓上の刻み生姜、生ビール、深夜もにぎわう、マイルドな豚骨、2026年8月には店が狭く汚れていて、スープの豚臭さ、麺の茹で不足という声も。',
      confidence: 'medium', sources: [TB, R + 'B525045438/', R + 'B529450049/', R + 'B530023989/', R + 'B530609754/', R + 'B531701936/', R + 'B533140204/', R + 'B533964357/', R + 'B534810242/', R + 'B535800962/', R + 'B537150647/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff ask noodle and broth preferences; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区根岸1-2-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区根岸一丁目2番20号 (go) 9m; the GSI point is Tonpei (tokyo_tonpei_uguisudani, same lot), so the Tabelog point is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525045438/', R + 'B535800962/', R + 'B530609754/'],
    price_note: 'Prices from 2026 reviews; ¥930 in March and July, ¥980 for shoyu tonkotsu in September.', last_checked: TODAY, items: [
      it('', '', 'Tonkotsu ramen', '¥930', 'Ramen', 'no', 'no', 'March and July 2026.', 'tonkotsu'),
      it('', '', 'Shoyu tonkotsu ramen', '¥980', 'Ramen', 'no', 'no', 'September 2026.', 'shoyu_tonkotsu'),
      it('', '', 'Ramen on days with a 5', '¥700', 'Ramen', 'no', 'no', 'April and August 2026.', 'day5_ramen'),
    ] }, {
    cuisine: '横浜家系ラーメン: 醤油豚骨スープに太く短い麺、ほうれん草、チャーシュー (口コミ)・豚骨ラーメン930円 (2026年3月・7月)、醤油豚骨ラーメン980円 (2026年9月)、塩ラーメン、5のつく日は700円 (2026年4月・8月)、焼肉つけ麺・ライス無料、卓上に刻み生姜、生ビール',
    neighborhood: '根岸一丁目。JR鶯谷駅のそば',
    gf_detail: 'グルテンフリーではありません。醤油豚骨スープに小麦の太麺。',
    vegan_detail: 'ヴィーガンではありません。豚骨スープにチャーシュー。',
    notes: '[ラーメン・鶯谷、朝4時までの家系ラーメン] 鶯谷駅近くの横浜家系ラーメンの店で、毎日11:00から翌4:00まで、深夜0時を過ぎても飲んだあとの客でにぎわいます。スープは醤油のキレより濃厚でマイルドな豚骨寄りで、太く短い麺、ほうれん草、チャーシュー。ライス無料と卓上の生姜も。ラーメンは約930〜980円、5のつく日は700円。評価は分かれ、深夜の一杯として好評な一方、2026年8月には店が狭く汚れていて、スープが豚臭く麺が茹で足りないという声も。現金のみ。',
  });
}

// ================================================================ 山鶏 ハナレ
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13172842/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '24:00']);
  put({
    id: 'tokyo_yamadori_hanare_yushima', name: '山鶏 ハナレ (Yamadori Hanare)', category: 'OMNI',
    lat: 35.708069, lng: 139.771011, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: salt skewers are possible, but sauces, the chicken soup and the Italian-style dishes are not described; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant; Tabelog lists vegetarian options, and a large shiitake skewer exists, but no vegan dish is named.',
    hours_raw: 'Mon–Sat, the day before and after a holiday 17:00–24:00 (food last order 23:00, drinks 23:30); closed Sundays and holidays (Tabelog). Reservations taken; 2-hour limit when busy; walk-ins possible when there is room (September 2025). Appetizer ¥694. 26 seats; semi-private rooms for 5–8; private hire for 25–30. Non-smoking. Cards, e-money and QR. Free Wi-Fi.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yushima 3-chōme (Bunkyō), ハニービル 7F, toward the Don Quijote on Kasuga-dōri — 2 min from Yushima; 3 min from Ueno-Okachimachi / Ueno-Hirokoji',
    cuisine: 'Charcoal yakitori from domestic breeds — Tottori Daisen chicken, Shiga Omi chicken, Kyoto Tamba black chicken, Nagano Sanada-maru (August 2024 review) — with local sake · yakitori course ¥4,950 (October 2024); courses with all-you-can-drink · tsukune, tsukune with foie gras, white liver, seseri, gizzard, a large shiitake skewer, gatsu with spicy miso, garlic chicken thigh, rich chicken soup, Italian-style dishes · sake and shōchū',
    website: null, gmaps: gm('山鶏 ハナレ 湯島3-38-10'), menu_url: null,
    notes: "[Yakitori · Yushima, rare-breed chicken and local sake on the 7th floor] The annex of the Yushima yakitori shop Yamadori, up on the seventh floor of a building on Kasuga-dōri, grilling several Japanese chicken breeds over charcoal — Daisen, Omi, Tamba black chicken, Sanada-maru — with a list of local sake. Order skewers or a course (about ¥5,000 in 2024); reviewers single out the tsukune (including one with foie gras), white liver and a huge shiitake. It is busy with groups, with a 2-hour limit at peak times and a ¥694 appetizer. Some found it rushed or items sold out; others praised the value and the sake pairings. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog official listing; a March 2024 reviewer who booked the main 山鶏 shop was seated at this annex. No source names the owner or cooks.', philosophy: null, specialty: 'Rare-breed yakitori; tsukune.',
      anecdotes: [
        { text: '"The standout dish was the \'Tsukune with Foie Gras.\' It was surprisingly powerful" — August 2025.', source: R + 'B511066708/' },
        { text: '"I sat at the counter, but it felt a bit rushed and I couldn\'t relax; it was also disappointing that many items were sold out." — March 2024.', source: R + 'B486607169/' },
        { text: '"Great value Yakitori Course JPY 4950" — October 2024.', source: R + 'B495786328/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 山鶏 ハナレ、文京区湯島3-38-10 ハニービル 7F、湯島駅から徒歩2分、上野御徒町駅・上野広小路駅から3分、月〜土・祝前日・祝後日17:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、日祝休み、予約可、混雑時は2時間制、お通し694円、26席、半個室、禁煙、カード・電子マネー・QR可、Wi-Fi、希少な鶏を炭火で、地酒。口コミ (2023年12月〜2026年6月): 鳥取の大山どり、滋賀の近江鶏、京都の丹波黒どり、長野の真田丸、つくね、フォアグラのつくね、白レバー、せせり、砂肝、大きなしいたけ、ガツの辛味噌和え、焼き鳥コース4,950円 (2024年10月)、飲み放題付きコース、本店から案内されたという声、慌ただしく品切れが多かったという声も。',
      confidence: 'medium', sources: [TB, R + 'B376747107/', R + 'B388705964/', R + 'B477436885/', R + 'B486607169/', R + 'B495786328/', R + 'B502898652/', R + 'B511066708/', R + 'B511870500/', R + 'B513997235/', R + 'B530125190/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Busy group-friendly yakitori; 2-hour limit at peak; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都文京区湯島3-38-10 ハニービル 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated 2023–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目38番10号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495786328/', TB],
    price_note: 'Course price from an October 2024 review; appetizer ¥694 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Yakitori course', '¥4,950', 'Courses', 'ask', 'no', 'October 2024.', 'yakitori_course'),
    ] }, {
    cuisine: '国産の銘柄鶏 (鳥取の大山どり、滋賀の近江鶏、京都の丹波黒どり、長野の真田丸、2024年8月の口コミ) の炭火焼き鳥と地酒・焼き鳥コース4,950円 (2024年10月)、飲み放題付きのコース・つくね、フォアグラのつくね、白レバー、せせり、砂肝、大きなしいたけの串、ガツの辛味噌和え、鶏ももにんにく、濃厚な鶏スープ、イタリアン風の料理・日本酒と焼酎',
    neighborhood: '湯島三丁目 (文京区)、ハニービル 7F、春日通りのドン・キホーテ方面。湯島駅から徒歩2分、上野御徒町駅・上野広小路駅から3分',
    gf_detail: 'グルテンフリーは要確認。塩の串もできますが、タレ、鶏スープ、イタリアン風の料理の説明はなく、グルテンフリーの説明もありません。',
    vegan_detail: 'ヴィーガンではありません。鶏の店で、食べログにはベジタリアン向けメニューありとあり、大きなしいたけの串もありますが、ヴィーガンの料理名はありません。',
    notes: '[焼き鳥・湯島、7階で希少な鶏と地酒] 湯島の焼き鳥店「山鶏」の離れで、春日通りのビルの7階。大山どり、近江鶏、丹波黒どり、真田丸など国産の銘柄鶏を炭火で焼き、地酒をそろえます。串でもコースでも (2024年は約5,000円)。口コミで評判はつくね (フォアグラ入りも)、白レバー、大きなしいたけ。グループ客でにぎわい、混雑時は2時間制、お通し694円。慌ただしい、品切れが多いという声も、コスパや日本酒の組み合わせをほめる声も。日曜・祝日休み。',
  });
}

save();
