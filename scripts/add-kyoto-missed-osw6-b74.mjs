// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 74.
//   + 萬隆 Manryu (teppanyaki and okonomiyaki counter off Hanamikoji, since 1979) — rest
//   + みやび堂 大丸京都店 Miyabi Do (sansho "Azekura" okaki, the maker's only shop, Daimaru B1F) — rest
//   + すぎのこ亭 Suginoko Tei (Kyushu-cuisine and shochu izakaya open to 3 am, Sanjo) — rest
//   + 百圓寿司スタンド えにし Hyaku En Sushi Stand Enishi (¥100 standing sushi bar near Shijo-Karasuma) — rest
//   - skip 26033590 蔵代味噌 (retail miso shop — groceries to take home; flagged)
//   - skip 26034640 PRESS BUTTER SAND 大丸京都店 (large parent BAKE INC., earlier ruling 26030634)
//   - skip 26032048 出町ふたば 大丸京都店 (counter of a brand in data, earlier ruling 26023639)
//   - skip 26045098 赤から 京都三条店 (national chain)
//   - skip 26024158 ベジテリア 大丸京都店 (chain)
//   - skip 26035900 アジョシ 三条タカセ店 (six アジョシ shops on Tabelog)
//   - skip 26026258 キョーワズ コーヒー 大丸京都店 (chain)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: PRESS BUTTER SAND (BAKE INC.,
//   26030634), 出町ふたば (26023639) and アジョシ (26041488, group size then unconfirmed) have earlier rulings; none for 萬隆, みやび堂,
//   赤から, ベジテリア, すぎのこ, キョーワズ, 蔵代 or えにし.
//   Same-name counts first (2026-11-07): 萬隆 — one. みやび堂 — one (reviews call it the maker's only physical shop). すぎのこ亭 —
//   one; run since July 2024 by REAL ALIVE PRODUCTS, a Kyoto operator (ra-products.net), so local.
//   百圓寿司スタンド えにし — Tabelog lists six えにし listings, all in Kyoto, two on hold, so four open — under five,
//   drafted, flagged. None of the four drafted is in data/kyoto.json.
//   Charges per Tabelog's Japanese original: すぎのこ亭 「お通し代480円（税込518円）」; えにし 「着席時のみ席料金330円（税込み）」; 萬隆
//   and みやび堂 none listed. No halal claims; no owner deaths; single-review remarks about other diners and staff left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-74');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034640', 'large parent: PRESS BUTTER SAND is a BAKE INC. brand, already ruled a large parent at 26030634 (https://tabelog.com/en/kyoto/A2601/A260201/26034640/).');
skip('26032048', 'counter of a brand already in data: 出町ふたば — data has kyoto_demachi_futaba; the JR Kyoto Isetan counter was skipped on the same ground at 26023639 (https://tabelog.com/en/kyoto/A2601/A260201/26032048/).');
skip('26045098', 'chain: 赤から — Tabelog returns 214 Aka Kara listings nationwide (https://tabelog.com/en/rstLst/?sw=%E8%B5%A4%E3%81%8B%E3%82%89).');
skip('26024158', 'chain: VEGETERIA — Tabelog lists 53 shops, mostly department-store juice stands (https://tabelog.com/en/rstLst/?sw=%E3%83%99%E3%82%B8%E3%83%86%E3%83%AA%E3%82%A2).');
skip('26035900', 'five or more same-name shops: Tabelog lists six アジョシ Korean shops — 祇園本店, 三条タカセ店 and Kami-Katsura in Kyoto, two at Toranomon and one in Shimokitazawa — settling the group size left open at 26041488 (https://tabelog.com/en/rstLst/?sw=%E3%82%A2%E3%82%B8%E3%83%A7%E3%82%B7).');
skip('26026258', 'chain: KYOWA’S COFFEE — Tabelog lists about 18 shops in Kyoto, Shiga, Osaka, Nara, Hyogo and Kyushu (https://tabelog.com/en/rstLst/?sw=%E3%82%AD%E3%83%A7%E3%83%BC%E3%83%AF%E3%82%BA).');
skip('26033590', 'retail shop, not a place to eat: 蔵代味噌 sells miso from breweries across Japan to take home, with tastings and a few miso buns (2019–26 reviews) — flagged for the coordinator in case retail food shops should be listed (https://tabelog.com/en/kyoto/A2601/A260202/26033590/).');

// ================================================================ 萬隆
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26020474/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://manryu.owst.jp/';
  const H = day(['12:00', '22:30']);
  put({
    id: 'kyoto_manryu_gion', name: '萬隆 (Manryu)', category: 'OMNI',
    lat: 35.005674, lng: 135.775124, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, modern-yaki and yakisoba with sauce (2019–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: garlic shrimp, butter scallops, steak and pork yakisoba (2019–26 reviews).',
    hours_raw: 'Mon, Tue and Thu–Sat 12:00–22:30; closed Wednesday, Sunday and holidays, but open on Wednesdays in weeks with a holiday (Tabelog). An April 2022 diner found no sign of lunch service, so check before a midday visit. Reservations accepted (Tabelog). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 14 seats around the teppan counter (Tabelog; July 2024). Non-smoking (Tabelog). Motosan Building 1F, Shinbashi-dori by Hanamikoji, 5 min from Gion-Shijo (Tabelog; January 2017). Founded in 1979 on Fuyacho; in Gion since July 2012 (April 2022; Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinbashi-dori, by Hanamikoji — Gion-Shijo',
    cuisine: 'Teppanyaki and okonomiyaki at the counter · fluffy okonomiyaki; garlic shrimp (October 2017) · butter-grilled salmon; pork yakisoba with sauce (February 2019) · seafood grill; mixed okonomiyaki; modern-yaki (July 2024) · garlic shrimp with a garlic-rice set; butter scallops; lean steak; mixed sauce yakisoba (March 2026)',
    website: SITE, gmaps: gm('萬隆 祇園 鉄板焼'), menu_url: TB,
    notes: '[Teppanyaki and okonomiyaki · Gion, since 1979] A small teppan counter on Shinbashi-dori just off Hanamikoji, first opened on Fuyacho in 1979 and in Gion since 2012: fluffy okonomiyaki and modern-yaki, sauce yakisoba, and teppan plates such as garlic shrimp with garlic rice, butter scallops and lean steak. Friendly owner. Closed Wednesday and Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as friendly (October 2017)'], origin: null,
      background: 'Per an April 2022 review: established in 1979 on Fuyacho, moving to Gion about nine years before (Tabelog gives July 2012).',
      philosophy: null, specialty: 'Okonomiyaki; garlic shrimp.',
      anecdotes: [
        { text: 'A March 2026 regular names garlic shrimp, butter scallops, lean steak and mixed sauce yakisoba as the favourites.', source: R + 'B493130298/' },
        { text: 'A July 2024 diner arriving just before last order was seated at the centre of the counter.', source: R + 'B490064014/' },
        { text: 'An April 2022 visitor finished a night in Gion with okonomiyaki here.', source: R + 'B465017792/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼き・お好み焼き、東山区新橋通大和大路東入2丁目橋本町382-2 モトサンビル 1F、祇園四条駅から徒歩5分、月・火・木〜土12:00〜22:30、水・日・祝休み (祝日のある週の水曜は営業)、予約可、カード・電子マネー・QR 可、14席、禁煙、2012年7月2日オープン。口コミ (2017年1月〜2026年3月、英語): 1979年に麩屋町で創業、ふわふわのお好み焼き、ガーリックシュリンプとガーリックライスのセット、ホタテのバター焼き、赤身のステーキ、ミックス焼きそば、鮭のバター焼き、モダン焼き、気さくな店主、昼の営業は確認を。',
      confidence: 'low', sources: [TB, SITE, R + 'B245225005/', R + 'B465017777/', R + 'B465017788/', R + 'B465017792/', R + 'B490064014/', R + 'B493130298/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; a counter where you watch the teppan. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通大和大路東入2丁目橋本町382-2 モトサンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official page; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.005674, 135.775124); cross-checked: GSI 京都府京都市東山区橋本町382番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B493130298/'],
    price_note: 'No item prices in the sources; reviewers report ¥1,000–3,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Garlic shrimp (garlic rice set available)', '', 'Teppan', 'ask', 'no', 'October 2017; March 2026.', 'garlic_shrimp'),
      it('', '', 'Mixed okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'July 2024.', 'mix'),
      it('', '', 'Mixed yakisoba (sauce)', '', 'Yakisoba', 'no', 'no', 'March 2026.', 'yakisoba'),
    ] }, {
    cuisine: 'カウンターの鉄板焼きとお好み焼き・ふわふわのお好み焼き、ガーリックシュリンプ (2017年10月)・鮭のバター焼き、豚の焼きそば (ソース) (2019年2月)・海鮮焼き、ミックスのお好み焼き、モダン焼き (2024年7月)・ガーリックシュリンプとガーリックライスのセット、ホタテのバター焼き、赤身のステーキ、ミックス焼きそば (ソース) (2026年3月)',
    neighborhood: '新橋通、花見小路の近く。祇園四条',
    gf_detail: 'グルテンフリーではない。お好み焼き、モダン焼き、ソースの焼きそば (2019〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ガーリックシュリンプ、ホタテのバター焼き、ステーキ、豚の焼きそば (2019〜2026年の口コミ)。',
    notes: '[鉄板焼きとお好み焼き・祇園、1979年から] 花見小路近くの新橋通にある小さな鉄板のカウンター。1979年に麩屋町で開き、2012年から祇園に。ふわふわのお好み焼きとモダン焼き、ソース焼きそば、ガーリックライス付きのガーリックシュリンプ、ホタテのバター焼き、赤身のステーキ。気さくな店主。水曜と日曜休み。',
  });
}

// ================================================================ みやび堂 大丸京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035468/'; const R = TB + 'dtlrvwlst/'; const SHOP = 'https://miyabi-do.ocnk.net/';
  const H = day(['10:00', '20:00']);
  put({
    id: 'kyoto_miyabido_daimaru', name: 'みやび堂 大丸京都店 (Miyabi Do Daimaru Kyoto)', category: 'OMNI',
    lat: 35.003849, lng: 135.762142, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: rice crackers seasoned with soy sauce, which usually contains wheat (2024–26 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Some crackers contain shrimp or mayonnaise (December 2025; May 2026); soy-sauce and sansho okaki may suit, but there is no ingredient information.',
    hours_raw: 'Daily 10:00–20:00, with Daimaru’s hours (Tabelog). Takeaway counter (Tabelog). Cards, e-money and QR (Tabelog). Daimaru Kyoto B1F, linked underground to Hankyu Karasuma and Shijo stations (Tabelog). Okaki sold by weight, e.g. Azekura ¥648 per 100 g (May 2026); online shop as well (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Daimaru Kyoto B1F, Shijo-Takakura — Karasuma / Shijo',
    cuisine: 'Senbei and arare from a Shimogyo maker that sells mainly online; this Daimaru counter is its only physical shop (February 2024; August 2025) · "Azekura" sansho okaki, with extra sansho on request, ¥648 per 100 g (2023–26 reviews; May 2026) · "Tagane" shrimp crackers (February 2024; December 2025) · mayonnaise thin crackers in shrimp, aonori and plain doughs; "Koki" soy-sauce crackers (May 2026)',
    website: SHOP, gmaps: gm('みやび堂 大丸京都店'), menu_url: TB,
    notes: '[Okaki · Daimaru Kyoto B1F] The only shop of a small Kyoto senbei maker, known for "Azekura" okaki with tingling sansho — sold by weight, ¥648 per 100 g, with extra sansho sprinkled on request — plus Tagane shrimp crackers and mayonnaise thins. A popular, hard-to-find Kyoto souvenir; takeaway only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per a February 2024 review: a senbei maker based in Shimogyo Ward that mainly sells online, with this Daimaru Kyoto counter as its only physical store.',
      philosophy: null, specialty: 'Sansho okaki (Azekura).',
      anecdotes: [
        { text: 'An August 2025 traveller heard Azekura with extra sansho praised by a listener on a radio show and came to buy it.', source: R + 'B511823924/' },
        { text: 'A May 2026 shopper bought ten 100 g packs as souvenirs and needed more.', source: R + 'B528330909/' },
        { text: 'A December 2025 regular was given Ebi Tagane, mayonnaise and sansho packs as a parting gift by a restaurant’s owners.', source: R + 'B443936845/' },
      ],
      japanese_sources_summary: '食べログ: せんべい、下京区四条通高倉西入ル立売西町79 大丸京都店 B1F、阪急烏丸駅・地下鉄四条駅から地下でつながる、毎日10:00〜20:00、カード・電子マネー・QR 可、オンラインショップあり。口コミ (2023年10月〜2026年5月、英語): 下京区のせんべい屋で主にネット販売、実店舗はここだけ、山椒の Azekura は量り売りで100g 648円、山椒増量も可、えびの Tagane、マヨネーズのうす焼き (えび・青のり・プレーン)、醤油のせんべい。',
      confidence: 'medium', sources: [TB, SHOP, R + 'B443936845/', R + 'B474106420/', R + 'B476493177/', R + 'B481602030/', R + 'B481899336/', R + 'B488275790/', R + 'B500409118/', R + 'B511823924/', R + 'B521573695/', R + 'B526282618/', R + 'B527463360/', R + 'B528330909/'] },
    cultural_comfort: { level: 'none_needed', note: 'Point and buy by weight; ask for extra sansho.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区四条通高倉西入ル立売西町79 大丸京都店 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.003912, 135.762142), offset 7 m south: kyoto_la_risotteria_daimaru (Daimaru 8F) sat 1.3 m away; GSI matches only the town (立売西町), so approximate — inside the Daimaru Kyoto store; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528330909/'],
    price_note: 'Azekura price from May 2026; other items sold by weight.', last_checked: TODAY, items: [
      it('', '', 'Azekura sansho okaki (100 g)', '¥648', 'Okaki', 'no', 'ask', 'Extra sansho on request; May 2026.', 'azekura'),
      it('', '', 'Tagane shrimp crackers', '', 'Okaki', 'no', 'no', 'December 2025.', 'tagane'),
      it('', '', 'Mayonnaise thin crackers', '', 'Senbei', 'no', 'no', 'May 2026.', 'mayo'),
    ] }, {
    cuisine: '主にネット販売の下京区のせんべい屋の、唯一の実店舗 (2024年2月、2025年8月)・山椒の Azekura、頼めば山椒増量、100g 648円 (2023〜2026年の口コミ、2026年5月)・えびの Tagane (2024年2月、2025年12月)・えび、青のり、プレーンの生地のマヨネーズのうす焼き、Koki の醤油せんべい (2026年5月)',
    neighborhood: '大丸京都店 地下1階、四条高倉。烏丸・四条',
    gf_detail: 'グルテンフリーではない。醤油味のせんべいで、醤油にはふつう小麦が入る (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。えびやマヨネーズを使うせんべいもある (2025年12月、2026年5月)。醤油や山椒のおかきは合うかもしれないが、原材料の情報はない。',
    notes: '[おかき・大丸京都店 地下1階] 京都の小さなせんべい屋の唯一の店。しびれる山椒の Azekura が名物で、量り売りで100g 648円、頼めば山椒を増量。えびの Tagane やマヨネーズのうす焼きも。入手しにくい京都みやげとして人気。持ち帰りのみ。',
  });
}

// ================================================================ すぎのこ亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000242/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://ra-products.net/suginokotei/';
  const H = day(['17:00', '03:00']);
  put({
    id: 'kyoto_suginokotei_sanjo', name: 'すぎのこ亭 (Suginoko Tei)', category: 'OMNI',
    lat: 35.008899, lng: 135.770955, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: satsuma-age fish cakes and other Kyushu dishes with soy-based seasoning (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork hot pot, straw-grilled fish, horse sashimi, satsuma-age (2024–26 reviews).',
    hours_raw: 'Daily 17:00–3:00 (last orders food 2:30, drinks 2:45); irregular closures; call for reservations between 11:30 and 17:00 (Tabelog). Courses with all-you-can-drink, incl. a premium sake and shochu plan (January 2025). Appetizer charge ¥480, ¥518 incl. tax (Tabelog, Japanese text: 「お通し代480円（税込518円）」). Cards (incl. UnionPay) and QR; no e-money (Tabelog). 23 seats: a 6-seat counter and a 17-seat tatami room (Tabelog). Smoking allowed (Tabelog). Takase Building 1F, 5 min from Keihan Sanjo (Tabelog). Under a new operator since July 2024 (official site; January 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nakajimacho, near Keihan Sanjo',
    cuisine: 'Obanzai and Kyushu cuisine with a deep list of imo shochu and sake from across Japan (Tabelog; July 2026) · pork hot pot; satsuma-age; obanzai; fried tofu with scrambled egg and cheese (February 2024) · straw-grilled fish; courses with all-you-can-drink (January 2025) · satsuma-age still a highlight after the change of operator (January 2025) · horse sashimi; straw-grilled sirloin cap; a guided flight of four sakes (September 2026)',
    website: SITE, gmaps: gm('すぎのこ亭 京都 三条'), menu_url: TB,
    notes: '[Kyushu food and shochu · Sanjo, to 3 am] A long-running Sanjo izakaya with a counter and tatami room, serving Kyushu dishes — satsuma-age, pork hot pot, horse sashimi, straw-grilled fish and beef — and obanzai with a big list of imo shochu and sake until 3:00. New management since 2024; regulars say the satsuma-age is still the thing. Smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site and reviews: a long-standing Sanjo izakaya, formerly run single-handedly by an older woman, taken over in July 2024 by REAL ALIVE PRODUCTS, a Kyoto restaurant operator.',
      philosophy: null, specialty: 'Kyushu cuisine; imo shochu.',
      anecdotes: [
        { text: 'A July 2024 visitor returned after 20 years and found everything still delicious.', source: R + 'B488475426/' },
        { text: 'A January 2025 regular noted the new operator had changed the menu slightly but kept the satsuma-age as good as ever.', source: R + 'B499950161/' },
        { text: 'A September 2026 diner was guided through four sakes alongside horse sashimi and straw-grilled sirloin cap.', source: R + 'B535862404/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: 居酒屋・焼酎バー、中京区中島町105 タカセビル 1F、京阪三条駅から徒歩約5分、毎日17:00〜翌3:00 (L.O. 料理2:30、ドリンク2:45)、不定休、11:30〜17:00の予約は電話で、お通し480円 (税込518円)、カード・QR 可、23席 (カウンター6、座敷17)、喫煙可、2024年7月から REAL ALIVE PRODUCTS が運営、おばんざいと九州料理と焼酎・日本酒。口コミ (2016年12月〜2026年9月、英語): 豚鍋、さつま揚げ、おばんざい、厚揚げの卵とじにチーズ、藁焼きの魚、飲み放題のコース、芋焼酎が豊富、馬刺し、sirloin cap の藁焼き、日本酒の飲み比べ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B209281514/', R + 'B479063330/', R + 'B484798393/', R + 'B488475426/', R + 'B499079605/', R + 'B499950161/', R + 'B506606290/', R + 'B519501817/', R + 'B526641076/', R + 'B531045075/', R + 'B535862404/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask staff to guide a sake or shochu flight (September 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中島町105 タカセビル １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008836, 135.770955), offset 7 m north: kyoto_taishu_sakaba_woniwa (Takase Building 9F) sat 1.4 m away; cross-checked: GSI 京都府京都市中京区中島町105番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; ¥518 appetizer charge; reviewers report ¥3,000–7,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Satsuma-age', '', 'Kyushu dishes', 'no', 'no', 'February 2024; January 2025.', 'satsumaage'),
      it('', '', 'Pork hot pot', '', 'Hot pots', 'ask', 'no', 'February 2024.', 'buta_nabe'),
      it('', '', 'Horse sashimi', '', 'Kyushu dishes', 'ask', 'no', 'September 2026.', 'basashi'),
      it('', '', 'Straw-grilled sirloin cap', '', 'Warayaki', 'ask', 'no', 'September 2026.', 'ichibo'),
    ] }, {
    cuisine: 'おばんざいと九州料理、芋焼酎と全国の日本酒が豊富 (食べログ、2026年7月)・豚鍋、さつま揚げ、おばんざい、厚揚げの卵とじにチーズ (2024年2月)・藁焼きの魚、飲み放題のコース (2025年1月)・運営が変わってもさつま揚げは健在 (2025年1月)・馬刺し、sirloin cap の藁焼き、日本酒4種の飲み比べ (2026年9月)',
    neighborhood: '中島町。京阪三条',
    gf_detail: 'グルテンフリーではない。さつま揚げなど、醤油を使う九州料理 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚鍋、藁焼きの魚、馬刺し、さつま揚げ (2024〜2026年の口コミ)。',
    notes: '[九州料理と焼酎・三条、深夜3時まで] カウンターと座敷のある三条の老舗の居酒屋。さつま揚げ、豚鍋、馬刺し、藁焼きの魚や牛肉など九州の料理とおばんざいを、豊富な芋焼酎や日本酒とともに深夜3時まで。2024年から運営が変わったが、常連はさつま揚げが健在という。喫煙可。',
  });
}

// ================================================================ 百圓寿司スタンド えにし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043706/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '00:00']);
  put({
    id: 'kyoto_hyakuen_sushi_enishi_takakura', name: '百圓寿司スタンド えにし (Hyaku En Sushi Stand Enishi)', category: 'OMNI',
    lat: 35.005692, lng: 135.762408, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura and oden alongside sushi; soy sauce throughout (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood stand; oden and miso soup made with dashi (2026 reviews).',
    hours_raw: 'Daily 11:30–0:00; closing days may vary (Tabelog). Reservations recommended for counter seats in the evening (September 2026). Seat charge ¥330 incl. tax, only when seated (Tabelog, Japanese text: 「着席時のみ席料金330円（税込み）」). Cards (incl. UnionPay) and PayPay; no e-money (Tabelog). 35 places incl. a standing counter downstairs and seats for 12; ordering by smartphone or QR code (Tabelog; August and September 2026). Smoking area outside, heated tobacco only (Tabelog). Down an alley off Takakura-dori south of Takoyakushi, 5 min from Shijo or Hankyu Karasuma (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura-dori, south of Takoyakushi — Shijo / Karasuma',
    cuisine: 'Standing sushi bar with nigiri from ¥100 a piece, red-vinegar rice, and izakaya plates, in a renovated townhouse (2026 reviews) · lunch set of nigiri, rolls and aosa miso soup ¥500 on its last day, normally ¥1,000 (May 2026) · tempura with sushi; drinks ¥300 with a drink ticket (September 2026) · negitoro seafood bowl ¥990 at lunch; seafood bowl (September and October 2026) · braised whelk; shrimp, kanpachi, sea bream and anago nigiri; grilled kanpachi collar (September 2026) · seafood yukhoe; boiled-egg appetizer (September 2026) · oden daikon and atsuage (October 2026)',
    website: null, gmaps: gm('百圓寿司スタンド えにし 高倉'), menu_url: TB,
    notes: '[¥100 sushi stand · Shijo-Karasuma] A lively standing sushi bar down an alley near Shijo-Karasuma, in a renovated townhouse, where nigiri start at ¥100 a piece on red-vinegar rice, ordered by smartphone, with oden, tempura and seafood bowls (¥990 negitoro at lunch). Seats cost ¥330; standing is free. Open 11:30 to midnight; book the counter in the evening.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per reviews and Tabelog: one of the 百圓寿司スタンド えにし sushi stands in Kyoto (Tabelog lists four open and two on hold), this one in a renovated townhouse with table seats as well as a standing counter.',
      philosophy: null, specialty: '¥100 nigiri; seafood bowls.',
      anecdotes: [
        { text: 'A May 2026 regular came on the last day of the ¥500 lunch — nigiri, rolls and aosa miso soup.', source: R + 'B525227805/' },
        { text: 'An August 2026 trio stood at the counter at 3 pm, ordering by QR code, with beer kept cold in vacuum tumblers.', source: R + 'B535456950/' },
        { text: 'A September 2026 diner who knew another branch liked the proper table seating here.', source: R + 'B537898455/' },
      ],
      japanese_sources_summary: '食べログ: 寿司・海鮮・居酒屋、中京区高倉通蛸薬師下る貝屋町561-3、地下鉄四条駅・阪急烏丸駅から徒歩5分、毎日11:30〜24:00、不定休、着席時のみ席料330円、カード・PayPay 可、35名 (立ち飲みあり、着席12)、屋外に加熱式たばこの喫煙所、2025年10月22日オープン。口コミ (2026年3月〜10月、英語): 1貫100円からの握り、赤酢のシャリ、スマホや QR で注文、ランチ (500円の最終日、通常1,000円)、ネギトロの海鮮丼990円、天ぷら、巻貝の煮付け、カンパチのカマ焼き、海鮮ユッケ、おでん、ドリンク券で300円、町家を改装、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B525227805/', R + 'B525228266/', R + 'B528371667/', R + 'B534988581/', R + 'B535303794/', R + 'B535456950/', R + 'B536171224/', R + 'B537320840/', R + 'B537782602/', R + 'B537898455/', R + 'B538251853/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order on your phone via QR code; standing is free, seats ¥330. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高倉通蛸薬師下る貝屋町561-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005692, 135.762485), offset 7 m west: kyoto_tachinomi_tsukinokoguma (貝屋町561) sat 1.3 m away; cross-checked: GSI 京都府京都市中京区貝屋町561番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534988581/', R + 'B536171224/', R + 'B525227805/'],
    price_note: 'Prices from May–September 2026 reviews; ¥330 seat charge when seated.', last_checked: TODAY, items: [
      it('', '', 'Nigiri (per piece)', '¥100', 'Sushi', 'ask', 'no', 'From ¥100; September 2026.', 'nigiri'),
      it('', '', 'Negitoro seafood bowl (lunch)', '¥990', 'Lunch', 'ask', 'no', 'September 2026.', 'negitoro_don'),
      it('', '', 'Lunch set (nigiri, rolls, aosa miso soup)', '¥1,000', 'Lunch', 'ask', 'no', 'Normal price per May 2026.', 'lunch_set'),
      it('', '', 'Oden (daikon, atsuage)', '', 'Small plates', 'ask', 'no', 'October 2026.', 'oden'),
    ] }, {
    cuisine: '町家を改装した立ち飲みの寿司バー、1貫100円からの赤酢の握りと居酒屋の一品 (2026年の口コミ)・握り、巻物、あおさの味噌汁のランチが最終日500円、通常1,000円 (2026年5月)・寿司と天ぷら、ドリンク券で300円 (2026年9月)・昼のネギトロの海鮮丼990円、海鮮丼 (2026年9月・10月)・巻貝の煮付け、えび、カンパチ、鯛、穴子の握り、カンパチのカマ焼き (2026年9月)・海鮮ユッケ、ゆで卵のお通し (2026年9月)・おでんの大根と厚揚げ (2026年10月)',
    neighborhood: '高倉通、蛸薬師の南。四条・烏丸',
    gf_detail: 'グルテンフリーではない。寿司のほかに天ぷらやおでん、醤油を使う (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司と海鮮の店で、おでんや味噌汁は出汁 (2026年の口コミ)。',
    notes: '[100円寿司スタンド・四条烏丸] 四条烏丸近くの路地の、町家を改装したにぎやかな立ち飲みの寿司バー。赤酢のシャリの握りが1貫100円から、スマホで注文。おでん、天ぷら、海鮮丼 (昼のネギトロ丼990円) も。着席は330円、立ちは無料。11時半から深夜0時まで。夜のカウンターは予約を。',
  });
}

save();
