// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 7.
//   + 棲家 富小路店 Sumika Tomikoji (Kyoto-vegetable and obanzai izakaya off Shijo, open to 1:00; since 2009)  [core]
//   + 祇園 そのう Gion Sonou (à la carte Japanese counter near Gion-Shijo; since 2023)                        [core]
//   + ドミニク・ブシェ・キョート・ル・テッパンヤキ Dominique Bouchet Kyoto Le Teppanyaki (Westin Miyako)     [notable]
//   + パティスリー タツヒト サトイ Patisserie TATSUHITO SATOI (cakes, bread and kakigori by Kyoto Univ.)    [notable]
//   - SHOGUN BURGER 祇園四条店 26042999 skipped (chain) · 祇園245 26018705 skipped (転載禁止 notice)
//   Taken in queue order on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (lane ids 26042999 skipped,
//   26013971, 26038613) and `next notable 200` (26033297, 26018705 skipped, 26027249), after batch 6. None of the
//   four drafted is in data/kyoto.json: grep by name (棲家/Sumika, そのう/Sonou, ドミニク/Bouchet, タツヒト/Satoi) and
//   address (西大文字町615, 廿一軒町236, 粟田口華頂町1, 北白川追分町2) found none.
//   Group checks: 棲家 has three shops in our crawl (本店 26004942, 富小路店 26013971, 三条店 26030888), none in data —
//   a small group, one drafted. Dominique Bouchet: the hotel page says that besides the two Kyoto restaurants the chef
//   has two in Tokyo (Dominique Bouchet Tokyo and Les Copains de Dominique Bouchet); Les Copains is in data
//   (tokyo_les_copains_bouchet_ginza5), a different format (bistro) — drafted as a sister concept of a small group;
//   flagged in the report under Greg's 2026-11-05 sub-brand ruling.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042999', 'SHOGUN BURGER 祇園四条店: chain — Tokyo shops (Shinjuku main store, Shibuya, Ikebukuro), Kyoto (祇園四条 26042999, Teramachi), Kanazawa and Vietnam, per the osw1-21 skip of 心斎橋店 27133604 (sources weekly.ascii.jp, insideretail.asia, haveagood-holiday.com)');
// un-skipped by the integrator 2026-11-05 (copyright footer is not a posting ban): skip('26018705', '祇園245: the shop\'s own site (gion-245.com) carries the notice 「掲載の記事・写真・イラストなどの無断複写・転載等を禁じます」; skipped under Greg\'s 2026-11-05 ruling on shops that mark their pages 転載禁止 (flagged: this is a standard copyright line, not a request to stay off gourmet sites)');

// ================================================================ 棲家 富小路店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013971/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '01:00']); const WE = day(['17:00', '01:00']);
  put({
    id: 'kyoto_sumika_tomikoji', name: '棲家 富小路店 (Sumika Tomikoji)', category: 'OMNI',
    lat: 35.004325, lng: 135.764966, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, simmered dishes and vegetables built on dashi, plus tempura, fried yuba and curry udon; the shop asks guests to tell it about allergies, but no gluten information is given (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the menu is rich in Kyoto vegetables and tofu, but the obanzai and simmered dishes use dashi, and the courses include fish and pork (Tabelog; 2026 reviews).',
    hours_raw: 'Monday–Friday 18:00–1:00, Saturday, Sunday and holidays 17:00–1:00 (last order 0:30); closing days not fixed (Tabelog). Bookings for seats only; stays may be limited to two hours when busy; tell the shop about allergies (Tabelog). All-you-can-drink course ¥6,000 (September 2026). 34 seats: 6 at the counter, tables, a loft for up to 8 and a tatami room for up to 14; smoking allowed; cards, IC cards and PayPay (Tabelog). Up a steep staircase on the second floor, 50 m north of Shijo on Tominokoji (Tabelog; September 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tominokoji just north of Shijo, toward Nishiki Market (2F) — 5 min from Hankyu Kawaramachi Stn',
    cuisine: 'Izakaya for Kyoto vegetables, obanzai, fish and sake (Tabelog; 2026 reviews) · stone-grilled and steamed Kyoto vegetables, Manganji peppers, Kujo green onion stir-fried with chicken neck · assorted obanzai, simmered pork belly and taro, fried Kyoto yuba, the house tofu (one reviewer’s "best ever") · thick-cut sashimi, hamo with sauce, tempura with three salts · curry udon to finish · all-you-can-drink course ¥6,000: appetizers, salad, sashimi, three obanzai, Saikyo-miso pork on a hot stone, fried dish, takikomi gohan and miso soup, dessert (September 2026)',
    website: null, gmaps: gm('棲家 富小路店'), menu_url: null,
    notes: "[Izakaya · Shijo-Tominokoji, Kyoto vegetables until 1 am] A second-floor izakaya up a steep stair just north of Shijo, open until 1:00 every night: stone-grilled and steamed Kyoto vegetables, obanzai, a house tofu that reviewers rave about, thick-cut sashimi and local sake, with curry udon to finish. Bills about ¥5,000–8,000 a head; an all-you-can-drink course is ¥6,000. One of three Sumika shops in Kyoto. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 22 August 2009 (Tabelog). Our crawl lists two other 棲家 shops in Kyoto, the 本店 (Tabelog 26004942) and the 三条店 (26030888).',
      philosophy: null, specialty: 'Kyoto vegetables; obanzai; house tofu.',
      anecdotes: [
        { text: 'A third-time guest called the Kyoto tofu "the best tofu I’ve ever had" and got in without a booking — August 2026.', source: R + 'B535117966/' },
        { text: 'An August 2026 group found the sake good but the food not particularly noteworthy, and the four-seat tables cramped.', source: R + 'B534201602/' },
        { text: '"It was great that this place was open until 1 AM." — October 2026.', source: R + 'B538155309/' },
      ],
      japanese_sources_summary: '食べログ: 棲家 富小路店、居酒屋・野菜料理・日本料理、中京区四条富小路上ル西大文字町615 メディナ四条富小路 2F、阪急河原町駅から徒歩5分、月〜金 18:00〜1:00、土日祝 17:00〜1:00 (L.O. 0:30)、不定休、席のみ予約可、混雑時は2時間制、アレルギーは要連絡、34席 (カウンター6、テーブル24)、ロフト8名、座敷14名、喫煙可、カード・電子マネー・PayPay 可、2009年8月22日オープン、ベジタリアンメニューあり。口コミ (2026年8〜10月、英語): 京野菜の石焼きと蒸し野菜、おばんざい、豆腐、刺身、天ぷら、豚バラと里芋の煮物、京湯葉の揚げ物、九条ねぎ、締めのカレーうどん、飲み放題付きコース6,000円。',
      confidence: 'medium', sources: [TB, R + 'B495617761/', R + 'B533524066/', R + 'B534201602/', R + 'B534920665/', R + 'B535117966/', R + 'B535199504/', R + 'B536912850/', R + 'B537007632/', R + 'B538002203/', R + 'B538155309/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a seat; tell the shop about allergies; steep stairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区四条富小路上ル西大文字町615 メディナ四条富小路 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004325, 135.764966); cross-checked: GSI 京都府京都市中京区西大文字町615番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534920665/'],
    price_note: 'No menu read; course price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink obanzai course (8 dishes)', '¥6,000', 'Courses', 'ask', 'no', 'September 2026.', 'nomihodai_course'),
      it('', '', 'Stone-grilled Kyoto vegetables', '', 'Vegetables', 'ask', 'ask', '', 'stone_grilled_vegetables'),
      it('', '', 'Kyoto tofu', '', 'Tofu', 'ask', 'ask', '', 'kyoto_tofu'),
    ] }, {
    cuisine: '京野菜、おばんざい、魚、日本酒の居酒屋 (食べログ、2026年の口コミ)・京野菜の石焼きと蒸し野菜、万願寺とうがらし、九条ねぎと鶏せせりの炒め物・おばんざいの盛り合わせ、豚バラと里芋の煮物、京湯葉の揚げ物、名物の豆腐 (「人生一」という口コミも)・厚切りの刺身、鱧のたれ、3種の塩で食べる天ぷら・締めのカレーうどん・飲み放題付きコース6,000円: 前菜、サラダ、刺身2種、おばんざい3種、豚の西京味噌と季節野菜の石焼き、揚げ物、炊き込みご飯と味噌汁、デザート (2026年9月)',
    neighborhood: '四条のすぐ北の富小路、錦市場方面 (2階)。阪急河原町駅から徒歩5分',
    gf_detail: '要確認。おばんざい、煮物、野菜は出汁が土台で、天ぷら、湯葉の揚げ物、カレーうどんもある。アレルギーは伝えるよう案内があるが、グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、京野菜と豆腐が豊富だが、おばんざいや煮物は出汁を使い、コースには魚と豚肉も入る (食べログ、2026年の口コミ)。',
    notes: '[居酒屋・四条富小路、深夜1時までの京野菜] 四条のすぐ北、急な階段を上がった2階の居酒屋で、毎晩1時まで。京野菜の石焼きや蒸し野菜、おばんざい、口コミで絶賛される豆腐、厚切りの刺身、地酒、締めはカレーうどん。1人5,000〜8,000円ほど、飲み放題付きコースは6,000円。京都に3店ある棲家のひとつ。喫煙可。',
  });
}

// ================================================================ 祇園 そのう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038613/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:30']);
  put({
    id: 'kyoto_gion_sonou', name: '祇園 そのう (Gion Sonou)', category: 'OMNI',
    lat: 35.00428, lng: 135.772862, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Japanese à la carte with an emphasis on dashi — sashimi, grilled and fried dishes, battera, clay-pot rice; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the menu centres on market fish and dashi-based cooking (Tabelog; 2026 reviews).',
    hours_raw: '17:30–23:30 (last order 23:00), Monday to Saturday; closed Sunday and public holidays (Tabelog). Bookings online or by phone; five or more by phone (Tabelog). 18 seats: a long counter and private rooms for 4–8; smoking area until 21:00; BYO allowed; cards accepted (Tabelog; January 2026). Second floor of 鴨東ビル; 3 min from Gion-Shijo Stn, a short walk from the Minamiza (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'East of the Kamo River near the Minamiza, north of Shijo — 3 min from Gion-Shijo Stn',
    cuisine: 'Casual Japanese kaiseki and à la carte: market-fresh fish, obanzai, seasonal flavours and dashi (Tabelog) · omakase course with seasonal clay-pot rice (Tabelog) · à la carte: sashimi platters, battera, firefly-squid shabu-shabu in spring, oysters and ayu in early summer, matsutake in autumn · "today’s kamadaki rice" from three choices, e.g. with eel; leftovers made into onigiri to take home · seasonal and rare sake, matched to your dishes (2026 reviews)',
    website: null, gmaps: gm('祇園 そのう'), menu_url: null,
    notes: "[Japanese · Gion-Shijo, à la carte by the counter] A second-floor Japanese restaurant near the Minamiza, opened in 2023, with a long counter staffed by several cooks and a few private rooms. Order a little of everything — market fish, seasonal shabu-shabu, battera — with sake matched by the staff, and finish with kamadaki rice (leftovers come back as onigiri). About ¥10,000–15,000 a head; portions are small. Open late; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources)'], origin: null,
      background: 'Opened 15 January 2023 (Tabelog). Per the operator’s Tabelog text: freshness first in the sashimi, easy obanzai, seasonal flavours and dashi; fish bought directly from the market.',
      philosophy: null, specialty: 'Seasonal fish; kamadaki rice.',
      anecdotes: [
        { text: 'Rice left over from the kamadaki pot is made into onigiri to take home — May 2026.', source: R + 'B529211210/' },
        { text: 'A July 2026 diner found the portions on the small side and the cost-performance "not the best", but would return.', source: R + 'B531379204/' },
        { text: 'Told in advance of an anniversary, the shop prepared a surprise "beyond our expectations" — July 2026.', source: R + 'B531262991/' },
        { text: '"The charm of the chef\'s personality is also one of the highlights." — October 2026.', source: R + 'B537084672/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 そのう、日本料理、東山区廿一軒町236 鴨東ビル 2F、京阪祇園四条駅から徒歩3分、月〜土 17:30〜23:30 (L.O. 23:00)、日曜・祝日休み、5名以上は電話予約、18席、個室 (4・6・8名)、21時まで分煙、持ち込み可、カード可、2023年1月15日オープン、市場直送の鮮魚、おばんざい、出汁、旬の土鍋ご飯付きのおまかせコース。口コミ (2026年1〜10月、英語): アラカルト、刺身の盛り合わせ、バッテラ、ホタルイカのしゃぶしゃぶ、鮎、牡蠣、松茸、釜炊きご飯 (残りはおにぎりに)、珍しい日本酒、量は少なめ。',
      confidence: 'medium', sources: [TB, R + 'B520574151/', R + 'B523417370/', R + 'B526397929/', R + 'B529211210/', R + 'B531262991/', R + 'B531379204/', R + 'B532357142/', R + 'B535843610/', R + 'B536161221/', R + 'B537084672/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; ask the staff to pick sake for your dishes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区廿一軒町236 鴨東ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (operator text); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004280, 135.772862); cross-checked: GSI 京都府京都市東山区廿一軒町236番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or prices read; reviewers paid about ¥10,000–19,999 a head (2026).', last_checked: TODAY, items: [
      it('', '', 'Omakase course with seasonal clay-pot rice', '', 'Courses', 'ask', 'no', '', 'omakase'),
      it('', '', 'Today’s kamadaki rice', '', 'Rice', 'ask', 'no', 'Three choices.', 'kamadaki_rice'),
    ] }, {
    cuisine: '気軽な和食の会席とアラカルト: 市場直送の鮮魚、おばんざい、旬の味と出汁 (食べログ)・旬の土鍋ご飯付きのおまかせコース (食べログ)・アラカルト: 刺身の盛り合わせ、バッテラ、春はホタルイカのしゃぶしゃぶ、初夏は牡蠣と鮎、秋は松茸・3種から選ぶ本日の釜炊きご飯 (うなぎなど)、残りはおにぎりにして持ち帰り・季節の珍しい日本酒を料理に合わせて (2026年の口コミ)',
    neighborhood: '鴨川の東、南座の近く、四条の北。祇園四条駅から徒歩3分',
    gf_detail: '要確認。出汁を大切にした旬の和食のアラカルト: 刺身、焼き物、揚げ物、バッテラ、土鍋ご飯。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。市場の魚と出汁の料理が中心 (食べログ、2026年の口コミ)。',
    notes: '[和食・祇園四条、カウンターでアラカルト] 南座近くのビルの2階にある和食店で、2023年開店。数人の料理人が立つ長いカウンターと個室。市場の魚、季節のしゃぶしゃぶ、バッテラなどを少しずつ頼み、日本酒はスタッフが料理に合わせて選んでくれる。締めは釜炊きご飯 (残りはおにぎりに)。1人1万〜1万5千円ほど、量は少なめ。夜遅くまで、日曜休み。',
  });
}

// ================================================================ ドミニク・ブシェ・キョート・ル・テッパンヤキ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033297/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.miyakohotels.ne.jp/westinkyoto/restaurant/153030/index.html';
  const H = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_dominique_bouchet_teppanyaki', name: 'ドミニク・ブシェ・キョート・ル・テッパンヤキ (Dominique Bouchet Kyoto Le Teppanyaki)', category: 'OMNI',
    lat: 35.008927, lng: 135.78775, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppanyaki courses of wagyu, seafood and grilled vegetables with French sauces and appetizers, garlic rice or ramen to finish; no gluten information (official site; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the courses are built on wagyu, lobster and abalone, with sauces such as beef rillettes and butter (official site; 2025–26 reviews).',
    hours_raw: 'Lunch 11:30–14:30, dinner 17:00–22:00 (last entry 20:00); closed Wednesday except holidays; lunch must be booked by 20:00 the day before (official site). Lunch from ¥10,000, dinner from ¥20,000, tax and service included (official site); Tabelog lists a 15% service charge. Changes and cancellations by phone by the day before; a no-show on the day is charged (official site). 26 seats in several teppan counter rooms of 6–8 with views over Higashiyama; jacket recommended for men; non-smoking; children welcome; wheelchair accessible (official site; Tabelog; May 2026). Cards, IC cards and QR payments (Tabelog). In The Westin Miyako Kyoto, 2 min from Keage Stn; hotel shuttle from Kyoto Station Hachijo exit (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Keage, in The Westin Miyako Kyoto — 2 min from Keage Stn',
    cuisine: 'Teppanyaki with French touches, the first teppanyaki restaurant produced by the French chef Dominique Bouchet (official site) · French-style appetizers and desserts; Kyoto-raised beef and brand wagyu — Kobe, Omi and Kyoto beef, A4 grade or higher, offered as a three-way comparison (official site) · lunch from ¥10,000, dinner from ¥20,000 (official site) · seasonal grilled vegetables, abalone, blue or Ise lobster (each about ¥5,000 extra), Omi Chateaubriand, garlic rice, Ise-lobster ramen to finish (2025–26 reviews) · walk-in cellar of about 300 wines (2,500 bottles) with a sommelier (official site)',
    website: SITE, gmaps: gm('ドミニク・ブシェ・キョート ル・テッパンヤキ ウェスティン都ホテル'), menu_url: SITE,
    notes: "[Teppanyaki · Keage, a French chef’s grill in The Westin Miyako] The Westin Miyako’s teppanyaki room, produced by the French chef Dominique Bouchet: counter rooms for six to eight with views over Higashiyama, French-style starters and desserts, then Kobe, Omi and Kyoto wagyu, abalone and lobster on the plate, and garlic rice or lobster ramen to finish. Lunch from ¥10,000, dinner from ¥20,000. Book lunch the day before; jacket suggested. Closed Wednesday.",
    chef_bio: { chef_name: 'Dominique Bouchet', roles: ['Producing chef (監修, per the hotel’s page); the teppan chefs are not named'], origin: 'Poitou-Charentes, France (hotel page).',
      background: 'Per the hotel page: born in Poitou-Charentes; head chef at La Tour d’Argent and Hôtel de Crillon in Paris before opening Restaurant Dominique Bouchet in Paris’s 8th arrondissement in 2004; besides Kyoto, now runs Dominique Bouchet Tokyo in Ginza and the bistro Les Copains de Dominique Bouchet. This is the first teppanyaki restaurant Bouchet has produced. Opened 27 November 2019 (Tabelog). Tabelog Steak/Teppanyaki WEST "Tabelog 100" 2025. The same hotel also houses Dominique Bouchet Kyoto Le Restaurant (hotel page).',
      philosophy: 'Per the hotel page: a new kind of teppanyaki with French playfulness.',
      specialty: 'Wagyu teppanyaki; garlic rice; lobster ramen.',
      anecdotes: [
        { text: 'A guest timed an August 2025 dinner to watch the Gozan no Okuribi from the room.', source: R + 'B477253781/' },
        { text: 'At the start, the fresh Ise lobster and abalone to be cooked are shown to the table — August 2026.', source: R + 'B535042362/' },
        { text: 'A May 2026 diner found the two French appetizers "somewhat pre-prepared", while praising the lobster and abalone.', source: R + 'B528551043/' },
      ],
      japanese_sources_summary: 'ホテル公式ページ (miyakohotels.ne.jp、ウェスティン都ホテル京都): ドミニク・ブシェ キョート ル・テッパンヤキ、ドミニク・ブシェ氏の監修による初の鉄板焼レストラン、フレンチらしい前菜、京都産のお肉・神戸牛などのブランド牛、ランチ 11:30〜14:30、ディナー 17:00〜22:00 (最終入店20:00)、定休日 水曜日 (祝日除く)、ランチは前日20:00までの予約制、ランチ10,000円〜・ディナー20,000円〜 (消費税・サービス料込み)、26席、全席禁煙、個室なし、男性はジャケット推奨、ウォークインワインセラー約300種類2,500本、A4ランク以上の神戸牛・近江牛・京の肉の3種食べ比べ、東山の眺望、シェフの経歴: ポワトゥ＝シャラント生まれ、トゥール・ダルジャン、ホテル・ド・クリヨンの総料理長、2004年にパリ8区で独立、京都のほか銀座のドミニク・ブシェ トーキョー、ビストロ レ・コパン ドミニク・ブシェ。食べログ: 鉄板焼き・ステーキ、東山区粟田口華頂町1、蹴上駅から徒歩2分、サービス料15%、2019年11月27日オープン、ステーキ・鉄板焼き WEST 百名店 2025。口コミ (2025年8月〜2026年8月、英語): あわび、伊勢海老、近江牛のシャトーブリアン、ガーリックライス、伊勢海老ラーメン、五山の送り火。',
      confidence: 'medium', sources: [TB, SITE, R + 'B445901993/', R + 'B477253781/', R + 'B517172154/', R + 'B518608539/', R + 'B519577517/', R + 'B524273391/', R + 'B525132732/', R + 'B528551043/', R + 'B533566943/', R + 'B535042362/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; book lunch by 20:00 the day before; jacket suggested for men.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区粟田口華頂町1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Hotel restaurant page (November–December 2026 menus) and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008927, 135.787750); cross-checked: GSI 京都府京都市東山区粟田口華頂町1番地 (lot, the hotel grounds) 102m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B535042362/'],
    price_note: 'Course floor prices from the hotel page, tax and service included (read 2026-11-05); add-on prices from an August 2026 review.', last_checked: TODAY, items: [
      it('鉄板焼 ランチ', '', 'Teppanyaki lunch course', '¥10,000~', 'Courses', 'ask', 'no', 'Book by 20:00 the day before.', 'teppan_lunch'),
      it('鉄板焼 ディナー', '', 'Teppanyaki dinner course', '¥20,000~', 'Courses', 'ask', 'no', '', 'teppan_dinner'),
      it('', '', 'Add Ise lobster or abalone', '+¥5,000', 'Add-ons', 'ask', 'no', 'About; August 2026.', 'lobster_abalone_addon'),
    ] }, {
    cuisine: 'フランス人シェフ、ドミニク・ブシェが初めて監修した鉄板焼き (公式ページ)・フレンチらしい前菜とデザート、京都産のお肉と神戸牛・近江牛・京の肉 (A4以上) の3種食べ比べ (公式ページ)・ランチ10,000円〜、ディナー20,000円〜 (公式ページ)・季節の焼き野菜、あわび、ブルーロブスターや伊勢海老 (それぞれ約5,000円の追加)、近江牛のシャトーブリアン、ガーリックライス、締めの伊勢海老ラーメン (2025〜26年の口コミ)・約300種類2,500本のワインのウォークインセラーとソムリエ (公式ページ)',
    neighborhood: '蹴上、ウェスティン都ホテル京都の中。蹴上駅から徒歩2分',
    gf_detail: '要確認。和牛、魚介、焼き野菜の鉄板焼きのコースにフレンチのソースと前菜、締めはガーリックライスかラーメン。グルテンの情報はない (公式ページ、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。コースは和牛、ロブスター、あわびが中心で、牛肉のリエットやバターのソースも使う (公式ページ、2025〜26年の口コミ)。',
    notes: '[鉄板焼き・蹴上、ウェスティン都のフレンチシェフの鉄板] ウェスティン都ホテル京都の鉄板焼きで、フランス人シェフ、ドミニク・ブシェの監修。東山を望む6〜8人の鉄板カウンターの部屋で、フレンチの前菜とデザート、神戸牛・近江牛・京の肉、あわびやロブスター、締めはガーリックライスかラーメン。ランチ10,000円〜、ディナー20,000円〜。ランチは前日までに予約、男性はジャケット推奨。水曜休み。',
  });
}

// ================================================================ パティスリー タツヒト サトイ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26027249/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '17:00']);
  put({
    id: 'kyoto_patisserie_tatsuhito_satoi', name: 'パティスリー タツヒト サトイ (Patisserie TATSUHITO SATOI)', category: 'MOM_AND_POP',
    lat: 35.028763, lng: 135.784692, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: cakes, tarts, roll cakes and a bakery line (baguette, curry bread); the kakigori comes with espuma, jellies and sauces whose ingredients are not published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cakes, mousses and kakigori espuma use dairy or eggs; plain breads and fruit-sauce kakigori may suit, but no ingredient list is published (2026 reviews).',
    hours_raw: '8:00–17:00 every day, with occasional temporary closures; kakigori and parfaits 11:00–16:00 (Tabelog). No reservations (Tabelog). 9 seats at a counter and a few tables at the back (Tabelog; August 2026). PayPay and au PAY only; no cards (Tabelog). On Imadegawa-dori between Hyakumanben and Ginkakuji, 2 min east of the Kyoto University Faculty of Agriculture bus stop; 15 min from Demachiyanagi Stn (Tabelog; October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Imadegawa-dori by Kyoto University, east of Hyakumanben — 2 min from the Kyoto University Faculty of Agriculture bus stop',
    cuisine: 'Patisserie and bakery with a small café (Tabelog) · cakes: Earl Grey mousse, peach tart ¥640, cheese tart, "master roll" cake · breads: baguette, curry bread · kakigori in season, e.g. pistachio-muscat, raspberry, mango, and the Caramel Mocha "Satopetino" with espuma and coffee jelly ¥1,300 · iced latte ¥440, homemade lemonade (2026 reviews)',
    website: null, gmaps: gm('パティスリー タツヒト サトイ'), menu_url: null,
    notes: "[Patisserie · Kitashirakawa by Kyoto University] A small patisserie-bakery on Imadegawa near Kyoto University, opened in 2016 by Kyoto-born pâtissier Tatsuhito Satoi, formerly sous-chef at Sweets Garden Yuji Ajiki in Yokohama: refined cakes and tarts (peach tart ¥640), bread, and in the warm months mountainous kakigori with espuma (about ¥1,300). Nine seats inside. Open daily 8:00–17:00; pay by PayPay or au PAY.",
    chef_bio: { chef_name: 'Tatsuhito Satoi', roles: ['Owner-pâtissier (Tabelog remarks; October 2026 review)'], origin: 'Kyoto (home town, per an October 2026 review).',
      background: 'Per Tabelog: a patisserie opened by Satoi, a staff member who supported Yuji Ajiki from the start. Per an October 2026 review: previously sous-chef at Sweets Garden Yuji Ajiki in Yokohama, returned to home-town Kyoto and opened the shop in 2016. Opened 15 April 2016 (Tabelog). Tabelog Sweets WEST "Tabelog 100" 2023 and 2026.',
      philosophy: null, specialty: 'Cakes; seasonal kakigori.',
      anecdotes: [
        { text: 'The Caramel Mocha Satopetino (¥1,300) was piled so high the ice almost overflowed the plate — August 2026.', source: R + 'B534175668/' },
        { text: 'A September 2026 visitor found no other customers inside and guessed takeout is the main trade; the peach tart tasted of fresh rather than cooked peach.', source: R + 'B535707012/' },
        { text: 'In the afternoon the café seats were fully booked — August 2026.', source: R + 'B534056688/' },
      ],
      japanese_sources_summary: '食べログ: パティスリー タツヒト サトイ、ケーキ・パン・カフェ、左京区北白川追分町2 Eフラット北白川 1F、京阪出町柳駅から徒歩15分、市バスの Kyoto University Faculty of Agriculture 停留所から東へ徒歩約2分、毎日 8:00〜17:00 (かき氷とパフェは11:00〜16:00)、臨時休業あり、予約不可、9席、カード・電子マネー不可、PayPay・au PAY 可、禁煙、2016年4月15日オープン、Ajiki Yuji を初期から支えたスタッフの Satoi さんの店、スイーツ WEST 百名店 2023・2026。口コミ (2026年8〜10月、英語): アールグレイのムース、桃のタルト640円、チーズタルト、ロールケーキ、カレーパン、バゲット、かき氷 (ピスタチオマスカット、キャラメルモカ1,300円)、アイスラテ440円、自家製レモネード、横浜の Sweets Garden Yuji Ajiki の元スーシェフ。',
      confidence: 'medium', sources: [TB, R + 'B533540335/', R + 'B533874496/', R + 'B534056688/', R + 'B534175668/', R + 'B535707012/', R + 'B535861391/', R + 'B535892796/', R + 'B535919186/', R + 'B536451631/', R + 'B537815038/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; kakigori from 11:00; PayPay or au PAY.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区北白川追分町2 Eフラット北白川 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.028763, 135.784692); cross-checked: GSI 京都府京都市左京区北白川追分町2番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534175668/', R + 'B535707012/'],
    price_note: 'No price list read; prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Caramel Mocha Satopetino (kakigori)', '¥1,300', 'Kakigori', 'ask', 'no', 'August 2026; 11:00–16:00.', 'caramel_mocha_kakigori'),
      it('', '', 'Peach tart', '¥640', 'Cakes', 'no', 'no', 'September 2026.', 'peach_tart'),
      it('', '', 'Iced latte', '¥440', 'Drinks', '', 'no', 'September 2026.', 'iced_latte'),
    ] }, {
    cuisine: '小さなカフェ付きのパティスリー兼パン屋 (食べログ)・ケーキ: アールグレイのムース、桃のタルト640円、チーズタルト、ロールケーキ・パン: バゲット、カレーパン・季節のかき氷: ピスタチオとマスカット、ラズベリー、マンゴー、エスプーマとコーヒーゼリーの Caramel Mocha Satopetino 1,300円・アイスラテ440円、自家製レモネード (2026年の口コミ)',
    neighborhood: '京大近くの今出川通、百万遍の東',
    gf_detail: '実際にはグルテンフリーではない。ケーキ、タルト、ロールケーキとパン (バゲット、カレーパン)。かき氷のエスプーマ、ゼリー、ソースの原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。ケーキ、ムース、かき氷のエスプーマは乳製品や卵を使う。シンプルなパンや果物のソースのかき氷は合うかもしれないが、原材料の一覧は公開されていない (2026年の口コミ)。',
    notes: '[パティスリー・北白川、京大のそば] 京大近くの今出川通にある小さなパティスリー兼パン屋。京都出身のパティシエ Tatsuhito Satoi さんが、横浜の Sweets Garden Yuji Ajiki のスーシェフを経て2016年に開いた。洗練されたケーキとタルト (桃のタルト640円)、パン、暖かい季節はエスプーマをのせた山盛りのかき氷 (1,300円ほど)。店内は9席。毎日8時〜17時、支払いは PayPay か au PAY。',
  });
}

save();
