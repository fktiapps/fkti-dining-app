// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 10.
//   + 中華そば 山下 Chuka Soba Yamashita (weekday-lunch niboshi ramen inside a horumon izakaya; TRY newcomer award; NO
//     ramen block: oiliness unsourced, see report)
//   + 酒肴 味 Shukou Aji (17-seat fish izakaya run by a couple; on Sakaba Hourouki)
//   + ラブエイジア四ツ谷 Love Asia Yotsuya (15-seat Thai bar run by a Japanese chef; draft Singha; B1F)
//   + スパイスカレー食堂 四谷本店 Spice Curry Shokudo Yotsuya Honten (9-seat Sri Lankan curry counter from 8:00; 1F of the same
//     building as Love Asia)
//   Chain check. Yamashita: an October 2026 diner calls it a branch of Ningyocho Yamashita (not in data); at most two shops.
//   Spice Curry Shokudo: a search finds a Gotanda shop of the same name, unconfirmed as a branch; at most two. Shukou Aji
//   and Love Asia: one listing each. No skips: the first four non-data entries.
//   None is in data/tokyo.json (grep by name, Tabelog id and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 中華そば 山下
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13271545/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:45']);
  put({
    id: 'tokyo_chuka_soba_yamashita_yotsuya', name: '中華そば 山下 (Chuka Soba Yamashita)', category: 'OMNI',
    lat: 35.687271, lng: 139.726148, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in a soy-seasoned niboshi broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dried-sardine broth (and chicken and pork in the rich version), chashu.',
    hours_raw: 'Mon–Fri 11:00–14:45; closed Saturday (since 15 July 2025, for now) and Sunday (Tabelog). The shop borrows a yakiniku and horumon motsunabe izakaya at lunch (Tabelog remarks; 2026 reviews). No reservations. Ticket machine at the entrance; cash only (Tabelog; July 2026). 30 seats, all at tables, some sofas; wheelchair accessible; children welcome (Tabelog). A line forms after noon on weekdays (October 2026). Opened 9 May 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yotsuya 2-3-6, パルム四谷 1F, on Shinjuku-dōri — 5–6 min from Yotsuya Stn, 7 min from Yotsuya-sanchome',
    cuisine: 'Lunch-only niboshi ramen shop (2026 reviews) · niboshi chuka soba ¥800, a clear broth of four kinds of niboshi, kombu and shiitake, light but rich in niboshi flavour (July–October 2026); seasoned-egg version ¥950 · rich niboshi soba ¥1,000 (special ¥1,350), a thick chicken-and-pork paitan with niboshi (May–June 2026) · straight medium-thick noodles; chashu of several kinds; free rich lemon and fish powder to add (April 2026) · zosui rice for the last of the soup; chashu rice bowl · seasonal limited bowls, e.g. a Yen Sanjo-style special (April 2026) · free barley tea in a beer mug; highballs at lunch',
    website: null, gmaps: gm('中華そば 山下 四谷'), menu_url: null,
    notes: "[Ramen · Yotsuya, a weekday niboshi pop-up inside a horumon izakaya] From the street it looks like a yakiniku place, and at night it is one: on weekday lunchtimes the room becomes Chuka Soba Yamashita, a niboshi specialist that a TRY Ramen Award named a best new shop. Buy a ticket at the door for the clear niboshi chuka soba (¥800), light but full of dried-sardine flavour from four kinds of niboshi with kombu and shiitake, or the rich niboshi soba, a thick chicken-and-pork broth heavy with sardine; the special adds several chashu. Finish the soup with zosui rice. Barley tea comes in a beer mug. Opinions split: many 2026 diners call the bowls excellent, while one found the niboshi flavour lost and another the ramen ordinary, and in October 2026 orders came out of turn under a new server. Weekdays only, 11:00–14:45.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 May 2022 (Tabelog); an October 2026 diner calls it "a branch of the Ningyocho Yamashita".',
      background: 'No source names the cook. Reviews cite a TRY Ramen Award newcomer prize ("TRY Ramen Award 2021-2022, award-winning new shop for niboshi", June 2026). Tabelog remarks: "Lunchtime rental at Yakiniku Hormone Motsu-nabe". An October 2026 diner notes the chef cooking noodles alone while a new part-timer struggled with serving.',
      philosophy: null, specialty: 'Niboshi chuka soba; rich niboshi soba.',
      anecdotes: [
        { text: '"The broth is made with four types of niboshi (dried sardines), kombu kelp, and shiitake mushrooms." — September 2026, light soy-sauce ramen and chashu bowl.', source: R + 'B534842340/' },
        { text: '"The soup was thicker than I expected. The flavor is based on a chicken-paitan broth with niboshi (dried sardines)." — May 2026, rich niboshi soba, large.', source: R + 'B528392973/' },
        { text: '"I thought I was next in line after the customer ahead of me, but 2-3 groups who arrived after me were served their ramen first, resulting in a long wait." — October 2026.', source: R + 'B538327265/' },
      ],
      japanese_sources_summary: '食べログ: 中華そば 山下、ラーメン、四谷2-3-6 パルム四谷1F、四ツ谷駅から徒歩6分、四谷三丁目駅7分、月〜金11:00〜14:45、土日休み (2025年7月15日から当面土曜も休み)、予約不可、カード・電子マネー・QR不可、30席 (テーブル)、禁煙、車椅子可、子ども可、2022年5月9日オープン、昼は焼肉ホルモンもつ鍋の店を借りて営業。口コミ(2026年4月〜10月): 煮干し中華そば800円、味玉950円、濃厚煮干しそば1,000円・特製1,350円、4種の煮干しと昆布と椎茸、鶏豚の白湯、ストレートの中太麺、雑炊ご飯、チャーシュー丼、ビールジョッキの麦茶、TRY Ramen Award の新人の賞、Ningyocho Yamashita の支店という声、配膳の順番が前後したという声。',
      confidence: 'medium', sources: [TB, R + 'B500776301/', R + 'B526680935/', R + 'B528392973/', R + 'B529093767/', R + 'B530961692/', R + 'B532760927/', R + 'B532985628/', R + 'B533673070/', R + 'B534842340/', R + 'B536990236/', R + 'B537886039/', R + 'B538327265/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the door, cash only; table seating.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷2-3-6 パルム四谷 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687271, 139.726148); cross-checked: GSI 東京都新宿区四谷二丁目3番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537886039/', R + 'B536990236/', R + 'B530961692/', R + 'B500776301/'],
    price_note: 'Prices from 2026 reviews (ticket machine).', last_checked: TODAY, items: [
      it('', '', 'Niboshi chuka soba', '¥800', 'Ramen', 'no', 'no', 'October 2026 review.', 'niboshi_chuka'),
      it('', '', 'Seasoned-egg niboshi chuka soba', '¥950', 'Ramen', 'no', 'no', 'October 2026 review.', 'ajitama_niboshi'),
      it('', '', 'Rich niboshi soba', '¥1,000', 'Ramen', 'no', 'no', 'May 2026 review.', 'noko_niboshi'),
      it('', '', 'Special rich niboshi soba', '¥1,350', 'Ramen', 'no', 'no', 'April and June 2026 reviews.', 'tokusei_noko'),
    ] }, {
    cuisine: '昼だけの煮干しラーメン (2026年の口コミ)・煮干し中華そば800円: 4種の煮干しと昆布、椎茸の澄んだスープで、軽いのに煮干しがしっかり (2026年7〜10月)。味玉入り950円・濃厚煮干しそば1,000円 (特製1,350円): 鶏と豚の白湯に煮干しのどろっとしたスープ (2026年5〜6月)・ストレートの中太麺、数種のチャーシュー、濃いレモンと魚粉は無料で追加 (2026年4月)・残りのスープに雑炊ご飯、チャーシュー丼・季節限定の一杯も (2026年4月)・麦茶はビールジョッキで無料、昼からハイボールを飲む人も',
    neighborhood: '四谷2-3-6 パルム四谷1F、新宿通り沿い。四ツ谷駅から徒歩5〜6分、四谷三丁目駅から7分',
    gf_detail: 'グルテンフリーではない。醤油で味を付けた煮干しのスープに小麦の麺。',
    vegan_detail: 'ヴィーガンではない。煮干しのスープ (濃厚は鶏と豚も)、チャーシュー。',
    notes: '[ラーメン・四谷、ホルモン居酒屋の昼の煮干しラーメン] 外から見れば焼肉屋で、夜は実際そう。平日の昼だけ店が中華そば山下になる。TRY Ramen Award で新人の賞を受けた煮干しの店だ。入口で食券を買い、澄んだ煮干し中華そば (800円) は4種の煮干しと昆布、椎茸で軽いのに煮干しがしっかり。濃厚煮干しそばは鶏と豚の白湯に煮干しがたっぷりの重めのスープで、特製はチャーシューが数種。残ったスープは雑炊ご飯で。麦茶はビールジョッキで出てくる。評価は分かれ、2026年には絶品という声が多い一方、煮干しの風味が消えていたという人や普通だったという人もいて、2026年10月には新しい店員のもとで配膳の順番が前後した。平日のみ11時から14時45分。',
  });
}

// ================================================================ 酒肴 味
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13041601/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_shukou_aji_yotsuya', name: '酒肴 味 (Shukou Aji)', category: 'OMNI',
    lat: 35.687812, lng: 139.726308, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi is the heart of the menu, but there are simmered fish, tempura (vegetables, firefly squid), fried young ayu and an okara side; nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya; even the appetizer trio is usually fish or shellfish.',
    hours_raw: 'Tabelog lists no hours; an evening izakaya that opens at 17:30 (November 2025 booking at opening). Reservations taken (Tabelog); tables fill early (December 2025). Appetizer charge ¥500 (Tabelog). Cash only (Tabelog). 17 seats: a counter of 4 and three tables; non-smoking, smoke outside; a sign asks guests to keep voices low; Japanese-style toilet (Tabelog; 2025–26 reviews).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanei-cho 3-6, down a small alley — 5–6 min from Yotsuya Stn',
    cuisine: 'Fish izakaya with a handwritten daily menu of fish bought at Toyosu (2024–26 reviews) · appetizer trio ¥500, e.g. simmered oysters, shallots with miso, whitebait, simmered whelk · sashimi platters (kinmedai, kohada and akagai, katsuo, hamo, seared Matsukawa flounder), the signature "moon-viewing" sardines with egg yolk and green onion, aji namero (about ¥800), ankimo ¥850, simmered anago and kinmedai, grilled fish roe, tempura of firefly squid or vegetables, fried young ayu, tamagoyaki sweet or savoury, okara, "yude pon" fish balls served since opening, oki-jiru fish soup ¥1,000 (2024–26 reviews) · sake such as Ichinokura hot ¥700, shochu, Sapporo Lager Akaboshi',
    website: null, gmaps: gm('酒肴 味 四谷 三栄町'), menu_url: null,
    notes: "[Izakaya · Yotsuya, a couple's fish tavern in an alley] A small, old-looking izakaya down an alley near Yotsuya Station, run by a couple — the owner cooks and the owner's wife helps, as an October 2025 diner describes it — with a handwritten menu of fish from Toyosu that changes with the catch. Start with the three-dish appetizer, then sashimi that a 2025 regular compares to a good sushi bar, the house moon-viewing sardines with egg yolk, aji namero, ankimo and simmered kinmedai; the fish-ball yude pon has been on the menu since opening. Featured on the TV drinking shows Sakaba Hourouki and Onna Sakaba Hourouki. Quiet by request, cash only, and best booked: the three tables go early.",
    chef_bio: { chef_name: null, roles: ['Run by a couple (reviews)'], origin: null,
      background: 'No source names the owners. "It\'s a cozy place run by a married couple" (April 2024); "This small restaurant, run by a couple… The owner\'s gentle hospitality and [the owner\'s] wife\'s support made for a wonderfully comfortable experience" (October 2025); "run by a lovely couple" (April 2026). Reviews mention the owner going to Toyosu market (April 2024) and TV appearances on Yoshida Rui\'s Sakaba Hourouki and Hiromi Terasawa\'s Onna Sakaba Hourouki (June 2026).',
      philosophy: null, specialty: 'Sashimi; moon-viewing sardines; yude pon.',
      anecdotes: [
        { text: '"I always order the signature moon-viewing sardines… my companion, who was visiting for the first time, exclaimed, \'I want to have it over warm white rice!\'" — April 2025.', source: R + 'B485399935/' },
        { text: '"Terasawa-san recommended the classic \'Yude Pon\' (boiled fish balls) that has been on the menu since the establishment\'s opening." — June 2026.', source: R + 'B530114164/' },
        { text: '"In these times of rising seafood prices, finding quality fish dishes at an affordable price is a rare opportunity." — July 2026, katsuo, fried young ayu, hamo and simmered kinmedai.', source: R + 'B531843667/' },
      ],
      japanese_sources_summary: '食べログ: 酒肴 味、居酒屋、三栄町3-6、四ツ谷駅から徒歩6分、営業時間の記載なし、予約可、お通し代500円、カード・電子マネー・QR不可、17席、禁煙 (店外で喫煙)。口コミ(2023年11月〜2026年7月): 夫婦で営む、手書きのメニュー、Toyosu の魚、お通し3品、刺身の盛り合わせ、名物のいわしに卵とねぎを合わせた一品 (英語の口コミで moon-viewing sardines)、あじのなめろう、あん肝850円、穴子や金目鯛の煮付け、ほたるいかの天ぷら、若鮎の揚げ物、だし巻き、おから、開店以来の Yude Pon、oki-jiru 1,000円、日本酒は Ichinokura の燗700円、Sakaba Hourouki と Onna Sakaba Hourouki に登場、店内は静かに。',
      confidence: 'medium', sources: [TB, R + 'B474287560/', R + 'B481116287/', R + 'B484193400/', R + 'B485399935/', R + 'B489849473/', R + 'B498060198/', R + 'B498385907/', R + 'B515451358/', R + 'B517923572/', R + 'B529176311/', R + 'B530114164/', R + 'B531843667/'] },
    cultural_comfort: { level: 'japanese', note: 'Handwritten Japanese menu that changes daily; small and quiet; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都新宿区三栄町3-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April, June and July 2026.' },
    pin_source: `Tabelog ${TB} (35.687812, 139.726308); cross-checked: GSI 東京都新宿区四谷三栄町3番6号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B481116287/', R + 'B530114164/', R + 'B515451358/'],
    price_note: 'Prices from 2025–26 reviews; the menu is handwritten and changes daily.', last_checked: TODAY, items: [
      it('', '', 'Appetizer trio (charge)', '¥500', 'Charge', 'ask', 'no', 'Tabelog; December 2025.', 'otoshi'),
      it('', '', 'Ankimo', '¥850', 'Small plates', 'ask', 'no', 'December 2025 review.', 'ankimo'),
      it('', '', 'Aji namero', '¥800', 'Small plates', 'ask', 'no', 'October 2025 review ("around").', 'aji_namero'),
      it('', '', 'Oki-jiru fish soup', '¥1,000', 'Soup', 'ask', 'no', 'June 2026 review.', 'oki_jiru'),
    ] }, {
    cuisine: 'Toyosu で仕入れる魚を手書きの日替わりメニューで出す魚の居酒屋 (2024〜26年の口コミ)・お通し3品500円。たとえば牡蠣の煮物、エシャロットの味噌、しらす、つぶ貝の煮物・刺身の盛り合わせ (金目鯛、こはだと赤貝、かつお、はも、Matsukawa の炙り)、名物のいわしに卵とねぎを合わせた一品 (英語の口コミで moon-viewing sardines)、あじのなめろう (800円ほど)、あん肝850円、穴子や金目鯛の煮付け、焼いた魚卵、ほたるいかや野菜の天ぷら、若鮎の揚げ物、甘いか塩味から選べる卵焼き、おから、開店以来の Yude Pon、oki-jiru 1,000円 (2024〜26年の口コミ)・日本酒は Ichinokura の燗700円など、焼酎、Sapporo Lager Akaboshi',
    neighborhood: '三栄町3-6、小さな路地の奥。四ツ谷駅から徒歩5〜6分',
    gf_detail: '要確認。刺身が中心だが、煮魚、天ぷら (野菜、ほたるいか)、若鮎の揚げ物、おからも。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない。魚の居酒屋で、お通しの3品もたいてい魚や貝。',
    notes: '[居酒屋・四谷、路地裏の夫婦の魚の店] 四ツ谷駅近くの路地の奥にある古びた小さな居酒屋。夫婦で営み、2025年10月の客によれば店主が料理し、奥さんが手伝う。手書きのメニューにはToyosu の魚が並び、入荷で毎日変わる。お通しの3品から始めて、2025年の常連が寿司屋に負けないという刺身、名物のいわしに卵とねぎを合わせた一品 (英語の口コミで moon-viewing sardines)、あじのなめろう、あん肝、金目鯛の煮付けへ。Yude Pon は開店以来のメニュー。テレビの Sakaba Hourouki や Onna Sakaba Hourouki にも登場。店内は静かに、現金のみ、テーブル3つはすぐ埋まるので予約を。',
  });
}

// ================================================================ ラブエイジア四ツ谷
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13255349/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_love_asia_yotsuya', name: 'ラブエイジア四ツ谷 (Love Asia Yotsuya)', category: 'OMNI',
    lat: 35.687417, lng: 139.726027, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Khao man gai and som tum are not wheat-based dishes, but Thai sauces often include soy or oyster sauce, and the menu has spring rolls and coriander tempura; nothing gluten-free is described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A basil tofu (gapao tofu) and coriander tempura appear, but Thai dishes usually carry fish sauce and the curries contain meat; no vegan option is stated.',
    hours_raw: 'Mon–Sat lunch 11:30–15:00 (last order 14:30) and dinner 17:00–23:00 (last order 22:30); closed Sunday and holidays (Tabelog). Saturday happy hour 17:00–19:00 with drinks at half price via a Tabelog coupon (December 2025). Courses with all-you-can-drink, including bottled Thai beers (April 2025, October 2026). Lunch is often busy (April 2025). 15 seats: counter, sofas, semi-private seating for 5–6; hire up to 20; non-smoking (Tabelog; August 2025). Cards, e-money and QR including PayPay (Tabelog). Takeaway (September 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 2-9-15, サンサーラ四谷ビル B1F, down the stairs just off Shinjuku-dōri — 7 min from Yotsuya Stn, 10 min from Yotsuya-sanchome; Spice Curry Shokudo is on the ground floor',
    cuisine: 'Thai bar from a Japanese chef who loves Thailand: classic dishes and Asian drinks at modest prices, Asian records on vinyl (Tabelog) · lunch sets around ¥1,100 with soup and two sides: khao man gai, gapao rice, pad thai, green curry (2025 reviews) · evening: som tum, gai yang, pork belly, fresh spring rolls, green curry, gapao tofu ("Thai-style mapo tofu"), coriander tempura; courses with all-you-can-drink (2025–26 reviews) · draft Singha (¥550; half price in Saturday happy hour), bottled Thai beers, coriander sour, butterfly-pea sour that turns pink with lemon',
    website: null, gmaps: gm('ラブエイジア四ツ谷'), menu_url: null,
    notes: "[Thai · Yotsuya, a basement Thai bar with draft Singha] Down the stairs in a building just off Shinjuku-dōri, a small Thai bar where a Japanese chef in love with Thailand cooks the classics — khao man gai, gapao, pad thai, a herb-heavy, properly hot green curry — and plays Asian records on vinyl. Lunch sets are about ¥1,100; at night there are courses with all-you-can-drink that even include bottled Thai beers, draft Singha, and a coriander sour; Saturday 17:00–19:00 drinks are half price with a Tabelog coupon. Reviews vary on the khao man gai: moist and well-sauced for some, cold, dry and carelessly plated for 2025 lunch diners. The owner is friendly; one 2025 diner found a single person running the room. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the chef. Tabelog (corporate-member listing): "A Thai cuisine enthusiast from Japan who loves Thailand offers delicious Thai dishes and Asian drinks at reasonable prices", with Asian music on vinyl. Reviews: "run by a Japanese chef" (October 2026); "The service was efficient, even with just one staff member" (April 2025); "The owner is friendly" (September 2025).',
      philosophy: null, specialty: 'Khao man gai; green curry; draft Singha.',
      anecdotes: [
        { text: '"From 5 PM to 7 PM, drinks are half price! This is quite impressive, as even the Singha draft beer is half off. From JPY 550 to JPY 275!" — December 2025, Saturday.', source: R + 'B523748073/' },
        { text: '"The Green Curry is incredibly delicious. It\'s packed with Thai herbs and has a strong spiciness." — April 2026.', source: R + 'B526970562/' },
        { text: '"The Khao Man Gai was surprisingly very cold, as if it had just come out of the refrigerator, and the chicken was a bit dry." — February 2025, lunch.', source: R + 'B501123669/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ラブエイジア四ツ谷、タイ料理・居酒屋・バル、四谷2-9-15 サンサーラ四谷ビルB1F、四ツ谷駅から徒歩7分、月〜土11:30〜15:00 (L.O.14:30)・17:00〜23:00 (L.O.22:30)、日曜・祝日休み、15席、貸切20名、禁煙、カード・電子マネー・QR 可、タイ好きの日本人が作るタイ料理とアジアのお酒、アジアの音楽をレコードで、ガパオライス、パッタイ、パクチーの天ぷら、樽生の Singha。口コミ(2025年2月〜2026年10月): ランチ1,100円前後 (カオマンガイ、ガパオ)、グリーンカレー、ソムタム、ガイヤーン、ガパオ豆腐、飲み放題のコース、土曜17〜19時のハッピーアワー、カオマンガイが冷たく乾いていたという声も、日本人のシェフ。',
      confidence: 'medium', sources: [TB, R + 'B501123669/', R + 'B502946882/', R + 'B504263683/', R + 'B505099211/', R + 'B509694279/', R + 'B512695440/', R + 'B517214363/', R + 'B518348936/', R + 'B523748073/', R + 'B526970562/', R + 'B534915490/', R + 'B537782548/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small basement bar; lunch sets and courses make ordering easy.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区四谷2-9-15 サンサーラ四谷ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687417, 139.726027); cross-checked: GSI 東京都新宿区四谷二丁目9番地 (lot) 60m. Same building as Spice Curry Shokudo (tokyo_spice_curry_shokudo_yotsuya, address_ja "東京都新宿区四谷2-9-15 サンサーラ四谷 1F"), 7 m away on Tabelog, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502946882/', R + 'B518348936/', R + 'B523748073/'],
    price_note: 'Prices from 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Khao man gai lunch set (spring rolls, two sides, soup)', '¥1,100', 'Lunch', 'ask', 'no', 'March 2025 review.', 'khao_man_gai'),
      it('', '', 'Gapao rice lunch set', '¥1,100', 'Lunch', 'ask', 'no', 'December 2025 review.', 'gapao'),
      it('', '', 'Draft Singha', '¥550', 'Drinks', '', '', 'December 2025 review; half price Sat 17:00–19:00.', 'singha'),
    ] }, {
    cuisine: 'タイ好きの日本人シェフのタイ料理のバル。定番の料理とアジアのお酒を手ごろに、アジアの音楽をレコードで (食べログ)・ランチはスープと副菜2品付きで1,100円ほど: カオマンガイ、ガパオライス、パッタイ、グリーンカレー (2025年の口コミ)・夜: ソムタム、ガイヤーン、豚バラ、生春巻き、グリーンカレー、ガパオ豆腐 (「タイ風麻婆豆腐」)、パクチーの天ぷら、飲み放題付きのコース (2025〜26年の口コミ)・樽生 Singha (550円、土曜のハッピーアワーは半額)、タイの瓶ビール、パクチーサワー、レモンを入れるとピンクに変わるバタフライピーのサワー',
    neighborhood: '四谷2-9-15 サンサーラ四谷ビルB1F、新宿通りから少し入った階段の下。四ツ谷駅から徒歩7分、四谷三丁目から10分。1階はスパイスカレー食堂',
    gf_detail: '要確認。カオマンガイやソムタムは小麦の料理ではないが、タイのたれには醤油やオイスターソースを使うことが多く、生春巻きやパクチーの天ぷらも。グルテンフリーの説明はない。',
    vegan_detail: '要確認。ガパオ豆腐やパクチーの天ぷらもあるが、タイ料理にはふつうナンプラーが入り、カレーには肉。ヴィーガン対応の説明はない。',
    notes: '[タイ料理・四谷、地下のタイのバルと樽生シンハー] 新宿通りから少し入ったビルの階段を下りた小さなタイのバル。タイが大好きな日本人のシェフが定番を作る: カオマンガイ、ガパオ、パッタイ、ハーブたっぷりでしっかり辛いグリーンカレー。アジアの音楽はレコードで。ランチは1,100円ほど。夜は飲み放題付きのコースにタイの瓶ビールまで入り、樽生の Singhaやパクチーサワーも。土曜の17〜19時は食べログのクーポンで飲み物が半額。カオマンガイの評価は分かれ、しっとりしてたれがいいという人もいれば、2025年の昼には冷たく乾いて盛り付けが雑だったという人も。店主は気さくで、2025年にはひとりで回していたという声も。日曜休み。',
  });
}

// ================================================================ スパイスカレー食堂 四谷本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13255922/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '20:00']);
  put({
    id: 'tokyo_spice_curry_shokudo_yotsuya', name: 'スパイスカレー食堂 四谷本店 (Spice Curry Shokudo Yotsuya Honten)', category: 'OMNI',
    lat: 35.687361, lng: 139.725998, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Two October and September 2026 diners say the Sri Lankan curries are made without wheat flour and with little oil, and the plate is rice, curries, sambols and a lentil papadam; the shop itself makes no gluten-free claim, so confirm, especially for the spice mixes.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The listing ticks "Vegetarian options" and a diner mentions a vegetarian curry; the parippu (lentil) curry is coconut-based, but whether any curry uses fish or dairy is not stated.',
    hours_raw: 'Daily 8:00–20:00 (last food order 19:30), open year-round, until sold out (Tabelog). Breakfast curry from 8:00 (2026 reviews). Ticket machine; cash only (Tabelog; October 2026). No reservations. 9 counter seats (4 + 5), facing outward; non-smoking (Tabelog; September 2026). Small-size plates available (September 2026); a spiced tea is served (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yotsuya 2-9-15, サンサーラ四谷 1F — 5 min from Yotsuya Stn (take the slope to the left of the ticket gate), 7 min from Yotsuya-sanchome; Love Asia is in the basement',
    cuisine: 'Sri Lankan rice-and-curry plates (2026 reviews) · black chicken curry ¥1,300, the classic, fairly spicy: jasmine rice with shredded chicken curry, parippu (coconut lentil curry), green bean and potato curry, purple-cabbage pickle, carrot and coriander sambols, and a papadam to crumble in; mix everything Sri Lankan-style and add chilli or spice from the table (September–October 2026) · also pork, seafood and vegetarian curries, chicken vindaloo, small sizes (2026 reviews) · spiced tea; one October 2026 diner says the menu is supervised by a SriLankan Airlines group chef',
    website: null, gmaps: gm('スパイスカレー食堂 四谷本店'), menu_url: null,
    notes: "[Curry · Yotsuya, a Sri Lankan breakfast-to-dinner curry counter] A nine-seat counter on the ground floor of a building off Shinjuku-dōri that serves Sri Lankan rice and curry every day from 8 a.m.: buy a ticket, and a plate arrives with jasmine rice, a spicy black chicken curry, a gentle coconut lentil parippu, a green-bean curry, pickled purple cabbage, carrot and coriander sambols and a crisp papadam to mix in, for ¥1,300. Diners in 2026 call it light and easy to eat, with little oil and no wheat flour in the curries, though one found it too lean and another too hot. A vegetarian curry is on the menu. Open daily until 20:00 or until it sells out; cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the cooks. An October 2026 diner quotes the shop\'s poster: "Curry from the Southern Islands, supervised by the SriLankan Airlines group chef". A web search shows a Gotanda shop with the same name and an Instagram account @spicecurryshokudo; whether it is a branch is not confirmed.',
      philosophy: null, specialty: 'Black chicken curry; parippu.',
      anecdotes: [
        { text: '"Sri Lankan curry is said to be made without wheat flour and uses very little oil." — September 2026, chicken curry ¥1,300.', source: R + 'B536369348/' },
        { text: '"It\'s wonderful that you can enjoy this for breakfast if you\'re in the Yotsuya area." — September 2026, parippu and black chicken.', source: R + 'B536274833/' },
        { text: '"The oil is really minimal, which might leave you wanting a bit more." — November 2026.', source: R + 'B538508806/' },
      ],
      japanese_sources_summary: '食べログ: スパイスカレー食堂 四谷本店、カレー・スリランカ料理・南アジア料理、四谷2-9-15 サンサーラ四谷1F、四ツ谷駅から徒歩5分、毎日8:00〜20:00 (L.O.19:30)、売り切れ次第終了、年中無休、予約不可、カード・電子マネー・QR不可、9席 (カウンター4+5)、禁煙、朝食あり、ベジタリアン対応。口コミ(2024年8月〜2026年11月): ブラックチキンカレー1,300円、パリップ、いんげんとじゃがいものカレー、紫キャベツの漬物、人参とパクチーのサンボル、パパダム、全部混ぜて食べる、小麦粉を使わず油が少ないという声、ベジタリアンのカレー、券売機、朝8時から、スパイスティー。',
      confidence: 'medium', sources: [TB, R + 'B489633612/', R + 'B536274833/', R + 'B536280411/', R + 'B536369348/', R + 'B536704302/', R + 'B537586958/', R + 'B537631465/', R + 'B537841843/', R + 'B537887863/', R + 'B537946805/', R + 'B538227789/', R + 'B538508806/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (cash); choose a size; mix the plate yourself.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都新宿区四谷2-9-15 サンサーラ四谷 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.687361, 139.725998); cross-checked: GSI 東京都新宿区四谷二丁目9番地 (lot) 59m. Same building as Love Asia Yotsuya (tokyo_love_asia_yotsuya, address_ja "東京都新宿区四谷2-9-15 サンサーラ四谷ビル B1F"), 7 m away on Tabelog, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B489633612/', R + 'B536369348/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Black chicken curry plate', '¥1,300', 'Curry', 'ask', 'no', 'October 2026 review.', 'black_chicken'),
      it('', '', 'Vegetarian curry plate', '', 'Curry', 'ask', 'ask', 'Named in an October 2026 review; price not given.', 'vegetarian_curry'),
    ] }, {
    cuisine: 'スリランカのライス&カレーのプレート (2026年の口コミ)・定番のブラックチキンカレー1,300円、かなり辛め: ジャスミンライスに鶏のカレー、パリップ (ココナッツのレンズ豆のカレー)、いんげんとじゃがいものカレー、紫キャベツの漬物、人参とパクチーのサンボル、砕いて混ぜるパパダム。スリランカ式に全部混ぜ、卓上のチリやスパイスで調整 (2026年9〜10月)・豚、シーフード、ベジタリアンのカレー、チキンビンダルー、小盛りも (2026年の口コミ)・スパイスティー。2026年10月の客によれば監修は SriLankan Airlines グループのシェフ',
    neighborhood: '四谷2-9-15 サンサーラ四谷1F。四ツ谷駅から徒歩5分 (改札を出て左の坂)、四谷三丁目から7分。地下にラブエイジア',
    gf_detail: '要確認。2026年9月と10月の客はスリランカのカレーは小麦粉を使わず油も少ないと書いており、皿はご飯、カレー、サンボル、レンズ豆のパパダム。ただし店はグルテンフリーをうたっていないので、スパイスミックスも含めて確認を。',
    vegan_detail: '要確認。食べログにはベジタリアン対応の印があり、ベジタリアンのカレーの名前も出る。パリップはココナッツ味だが、魚や乳製品を使うカレーがあるかはわからない。',
    notes: '[カレー・四谷、朝から夜までのスリランカカレーのカウンター] 新宿通りから入ったビルの1階、毎日朝8時からスリランカのライス&カレーを出す9席のカウンター。食券を買うと、ジャスミンライスに辛めのブラックチキンカレー、やさしいココナッツのパリップ、いんげんのカレー、紫キャベツの漬物、人参とパクチーのサンボル、混ぜて食べるパリパリのパパダムのプレートが1,300円で出てくる。2026年の客は軽くて食べやすい、油が少なくカレーに小麦粉を使わないと書く一方、あっさりしすぎ、辛すぎという人も。ベジタリアンのカレーもある。毎日20時か売り切れまで、現金のみ。',
  });
}

save();
