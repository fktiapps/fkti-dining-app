// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 98.
//   + 鮨 京都うめもり Kyoto Umemori (temari-sushi courses at Shijo-Horikawa; first Kyoto shop of a Nara sushi brand, 2026)
//   + cafe&bar TANTON (all-day coffee shop with set meals near Karasuma-Oike)
//   + 峯嵐堂 平安神宮店 Houran Dou Heian Jingu (warabi-mochi café by the Heian Shrine torii)
//   - スヌーピーショコラ 京都・清水坂店, ナナノイチ, THE HOTEL HIGASHIYAMA, フロマージュ・ドゥ・ミテス, BORI: skipped.
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26044964, 26033168 (skipped),
//   26037584 (skipped), 26038736 (skipped), 26026400 (skipped), 26020904 (skipped), 26036012, 26024594.
//   queue-status.jsonl grepped for each brand (うめもり, スヌーピー, ナナノイチ, HIGASHIYAMA, ミテス, BORI, TANTON, 峯嵐堂):
//   only THE SODOH HIGASHIYAMA (26043389, a different hotel).
//   Data check (current main, hidden included): none of the three drafted is in data/kyoto.json by Tabelog id, name or
//   address.
//   Same-name count: SNOOPY Chocolat — six shops in a Tabelog name search (Kiyomizuzaka, Arashiyama, Otaru, Kurashiki,
//   Yufuin and one more) — chain. 峯嵐堂 — three shops (Togetsukyo honten, Yasaka, Heian Jingu) plus a factory in a Tabelog
//   name search; none in data — drafted, flagged. うめもり — a July 2026 reviewer calls this the first directly run Kyoto
//   shop of the 55-year-old Nara brand; operator not found — drafted, flagged. TANTON — one shop.
//   Big-chain hotel (Greg 2026-11-08): ナナノイチ shares THE HOTEL HIGASHIYAMA’s address (三条通白川橋東入三丁目夷町175-2);
//   the hotel’s Tabelog website link is tokyuhotels.co.jp — a Tokyu Hotels venue.
//   Retail ruling: フロマージュ・ドゥ・ミテス is a take-away cheese shop.
//   Service charges, checked against the Japanese original: うめもり なし (the English line wrongly says a charge may be
//   added); none listed for TANTON or 峯嵐堂.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-98');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26033168', 'スヌーピーショコラ 京都・清水坂店: chain — six SNOOPY Chocolat shops in a Tabelog name search incl. Otaru, Kurashiki and Yufuin (2026-11-08); also a take-away chocolate shop');
skip('26037584', 'large parent: Tokyu Hotels — ナナノイチ is at THE HOTEL HIGASHIYAMA (same address, 三条通白川橋東入三丁目夷町175-2), whose Tabelog site link is tokyuhotels.co.jp (big-chain-hotel ruling, Greg 2026-11-08)');
skip('26038736', 'hotel listing, not a restaurant: THE HOTEL HIGASHIYAMA (Tokyu Hotels); its restaurant ナナノイチ is skipped as a big-chain-hotel venue (26037584)');
skip('26026400', 'retail food shop (Greg 11-07 ruling): フロマージュ・ドゥ・ミテス is a take-away cheese shop (December 2025 review); no founding date or family succession sourced and no GF or vegan options sourced');
skip('26020904', 'BORI: too thin — one review on Tabelog');

// ================================================================ 鮨 京都うめもり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26044964/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyotoumemori.studio.site/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_sushi_umemori_shijo_horikawa', name: '鮨 京都うめもり (Kyoto Umemori)', category: 'OMNI',
    lat: 35.00385, lng: 135.753108, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Temari sushi with soy sauce and yuzu pepper, chawanmushi, matcha-soba tsukemen in duck broth, wagyu shabu-shabu; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and wagyu sushi, duck broth, chawanmushi (2026 reviews).',
    hours_raw: 'Daily: lunch 11:00–14:00, afternoon tea 14:00–17:00, dinner 17:00–22:00; days off irregular (Tabelog). Order one course per person (Tabelog). No service charge (Tabelog, original なし; the English line says a charge may be added). Cards; no e-money or QR (Tabelog). 45 seats: 15 downstairs, 30 upstairs (Tabelog). By the Shijo-Horikawa bus stop; 5 min from Omiya station (Tabelog). Opened in May–June 2026 (May and July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Horikawa — by the bus stop, 5 min from Omiya',
    cuisine: 'Temari-sushi courses in a modern Japanese room from a Nara sushi brand with 55 years of history (July 2026) · “Kinkaku” course ¥10,000: scooped tofu, five small dishes, a treasure box of nine temari sushi, A5-wagyu truffle sushi, wagyu shabu-shabu and dessert (July 2026) · “Sakura” course with temari-sushi box, stone box and chawanmushi (July 2026) · lunch course with yuba tofu, temari sushi with chrysanthemum petals, duck soup and Uji-matcha soba tsukemen (May 2026) · afternoon tea 14:00–17:00 (Tabelog)',
    website: SITE, gmaps: gm('鮨 京都うめもり'), menu_url: TB,
    notes: '[Temari sushi · Shijo-Horikawa, opened 2026] Courses of jewel-like bite-size temari sushi from a long-running Nara sushi brand, served in lidded boxes in a modern Japanese room — lunch, afternoon tea and dinner, up to the ¥10,000 “Kinkaku” course with A5 wagyu. One course per person. Flagged: first Kyoto shop of a Nara brand; operator not found.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A July 2026 reviewer describes Umemori as a Nara brand of 55 years that ships temari wasabi-leaf sushi nationwide, served it in JAL domestic first class in 2012, and opened this as its first directly run Kyoto shop. Operator not found.',
      philosophy: null, specialty: 'Temari sushi.',
      anecdotes: [
        { text: 'A May 2026 passer-by walked in on opening day, 13 May, when lunch was half price for the month, and had temari sushi topped with chrysanthemum petals.', source: R + 'B528971323/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 京都うめもり、寿司・スイーツ、下京区柏屋21、市バス四条堀川からすぐ、阪急大宮駅から徒歩5分、毎日 ランチ 11:00〜14:00・アフタヌーンティー 14:00〜17:00・ディナー 17:00〜22:00、不定休、人数分のコースの注文を、サービス料なし、カード可、電子マネー・QR不可、45席 (1階15、2階30)。口コミ (2026年、英語): 2026年5〜6月開店、奈良で55年の老舗ブランド、手まり寿司、JALの国内線ファーストクラスの機内食 (2012年)、京都初の直営店、「Kinkaku」コース10,000円 (汲み上げ豆腐、梅の皿の5品、9貫の手まり寿司の宝石箱、A5和牛のトリュフ寿司、和牛のしゃぶしゃぶ、デザート)、「Sakura」コース (手まり寿司の宝箱、石箱、茶碗蒸し)、ランチのコース (湯葉豆腐、食用菊の手まり寿司、鴨のお吸い物、宇治抹茶そばのつけ麺)。',
      confidence: 'low', sources: [TB, SITE, R + 'B528971323/', R + 'B528976990/', R + 'B531544149/', R + 'B532338095/', R + 'B532576820/', R + 'B532865064/', R + 'B532904223/', R + 'B533208160/', R + 'B534122265/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course-only; one course per person.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区柏屋21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened 2026; reviews dated May to August 2026.' },
    pin_source: `Tabelog ${TB} (35.00385, 135.753048), offset 5.5 m east because 亀屋良長 本店 (柏屋町17-19) sits 5.2 m from the Tabelog point; cross-checked: GSI 京都府京都市下京区柏屋町21番地 (lot) 7m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532338095/'],
    price_note: 'One price from a July 2026 review; no service charge.', last_checked: TODAY, items: [
      it('', '', '“Kinkaku” course with temari sushi and A5-wagyu shabu-shabu', '¥10,000', 'Courses', 'ask', 'no', 'July 2026.', 'kinkaku'),
      it('', '', '“Sakura” course with temari-sushi box and chawanmushi', '', 'Courses', 'ask', 'no', 'July 2026.', 'sakura'),
      it('', '', 'Lunch course with temari sushi and matcha-soba tsukemen', '', 'Lunch', 'no', 'no', 'May 2026.', 'lunch'),
    ] }, {
    cuisine: '奈良で55年の寿司ブランドの手まり寿司のコースを和モダンの空間で (2026年7月)・「Kinkaku」コース10,000円: 汲み上げ豆腐、梅の皿の5品、9貫の手まり寿司の宝箱、A5和牛のトリュフ寿司、和牛のしゃぶしゃぶ、デザート (2026年7月)・「Sakura」コース: 手まり寿司の宝箱、石箱、茶碗蒸し (2026年7月)・ランチのコース: 湯葉豆腐、食用菊の手まり寿司、鴨のお吸い物、宇治抹茶そばのつけ麺 (2026年5月)・14時〜17時はアフタヌーンティー (食べログ)',
    neighborhood: '四条堀川。バス停のそば、大宮から徒歩5分',
    gf_detail: '要確認。醤油や柚子胡椒で食べる手まり寿司、茶碗蒸し、鴨のつゆの抹茶そばのつけ麺、和牛のしゃぶしゃぶ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚や和牛の寿司、鴨のつゆ、茶碗蒸し (2026年の口コミ)。',
    notes: '[手まり寿司・四条堀川、2026年開店] 奈良の老舗寿司ブランドによる、宝石のような一口の手まり寿司のコース。蓋付きの箱で、和モダンの部屋で。昼、アフタヌーンティー、夜、A5和牛の10,000円の「Kinkaku」コースまで。1人1コース。奈良のブランドの京都初の店。運営会社は不明 (要確認)。',
  });
}

// ================================================================ cafe&bar TANTON
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036012/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '21:00']);
  put({
    id: 'kyoto_cafe_bar_tanton', name: 'cafe&bar TANTON', category: 'OMNI',
    lat: 35.012725, lng: 135.757177, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: toast breakfasts, fried horse mackerel, cutlets and shrimp fry, katsu curry (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg breakfasts, fried fish and pork cutlets, omurice (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 8:00–21:00, open straight through; closed Sunday (Tabelog; April 2026). Cash only (Tabelog; January 2025). Non-smoking (Tabelog). One-drink policy; sweets bought at the nearby patisserie may be brought in (January 2025; April 2026). English menu (June 2026). Up a staircase in a condominium in a residential street northwest of Karasuma-Oike (April 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Northwest of Karasuma-Oike — residential street',
    cuisine: 'A neighbourhood coffee shop serving home-style food all day (2025–2026) · breakfast plate of thick toast, fried egg, salad and a drink ¥700 (June 2026) · daily set meals, e.g. fried horse mackerel with coffee ¥1,100 (June 2026) or katsu curry (August 2025) · “A set” of pork cutlet and shrimp fry, served at night too (April 2026) · omurice; sandwiches (June and July 2026) · banana juice ¥700; tea au lait ¥550; melon soda ¥450 (January 2025; February 2026)',
    website: null, gmaps: gm('cafe&bar TANTON 京都'), menu_url: TB,
    notes: '[Coffee shop · northwest of Karasuma-Oike, all day] An unassuming neighbourhood café up a condominium stair, open 8:00–21:00: ¥700 breakfast plates, daily set meals like fried horse mackerel or katsu curry, omurice and juices — and you may bring in cake from the patisserie nearby with a drink. English menu; cash only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers found an older man running the café alone on one visit (February 2026) and an older woman on another (April 2026). No operator was found.',
      philosophy: null, specialty: 'Daily set meals; breakfast plates.',
      anecdotes: [
        { text: 'An April 2026 pair brought cakes from the patisserie nearby, ordered drinks, and were handed plates and cutlery to share the cakes.', source: R + 'B526312924/' },
      ],
      japanese_sources_summary: '食べログ: cafe&bar TANTON、洋食、中京区上妙覚寺町216、月〜土 8:00〜21:00、日曜定休、カード・電子マネー不可、禁煙。口コミ (2025〜2026年、英語): 烏丸御池の北西の住宅街、マンションの階段の奥、英語メニュー、1ドリンク制、近くのパティスリーの菓子の持ち込み可、厚切りトースト・目玉焼き・サラダとドリンクのモーニング700円、日替わり定食 (アジフライとコーヒー1,100円、カツカレー)、ヒレカツと海老フライのAセット (夜も可)、オムライス、サンドイッチ、バナナジュース700円、紅茶オレ550円、メロンソーダ450円、現金のみ。',
      confidence: 'low', sources: [TB, R + 'B455015877/', R + 'B499824230/', R + 'B508760531/', R + 'B512307212/', R + 'B517436122/', R + 'B522070327/', R + 'B526312924/', R + 'B529978222/', R + 'B530676231/', R + 'B531955444/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上妙覚寺町216',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January 2025 to July 2026.' },
    pin_source: `Tabelog ${TB} (35.012725, 135.757177); cross-checked: GSI 京都府京都市中京区上妙覚寺町216番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530676231/', R + 'B455015877/'],
    price_note: 'Prices from 2025–2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Breakfast plate with drink', '¥700', 'Morning', 'no', 'no', 'June 2026.', 'breakfast'),
      it('', '', 'Daily set meal, e.g. fried horse mackerel, with coffee', '¥1,100', 'Lunch', 'no', 'no', 'June 2026.', 'teishoku'),
      it('', '', 'Omurice', '', 'Mains', 'ask', 'no', 'July 2026.', 'omurice'),
      it('', '', 'Banana juice', '¥700', 'Drinks', 'gf', 'ask', 'February 2026.', 'banana'),
    ] }, {
    cuisine: '一日中、家庭的な料理を出す近所の喫茶店 (2025〜2026年)・厚切りトースト、目玉焼き、サラダとドリンクのモーニング700円 (2026年6月)・日替わり定食、例えばアジフライとコーヒーで1,100円 (2026年6月) やカツカレー (2025年8月)・ヒレカツと海老フライのAセット、夜も可 (2026年4月)・オムライス、サンドイッチ (2026年6・7月)・バナナジュース700円、紅茶オレ550円、メロンソーダ450円 (2025年1月、2026年2月)',
    neighborhood: '烏丸御池の北西、住宅街',
    gf_detail: 'グルテンフリーではない。トーストのモーニング、アジフライ、カツや海老フライ、カツカレー (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。卵のモーニング、魚のフライや豚カツ、オムライス (2025〜2026年の口コミ)。',
    notes: '[喫茶・烏丸御池の北西、通し営業] マンションの階段の奥にある目立たない近所のカフェ。8時〜21時、700円のモーニング、アジフライやカツカレーの日替わり定食、オムライスやジュース。ドリンクを頼めば近くのパティスリーのケーキの持ち込みも可。英語メニュー、現金のみ、日曜定休。',
  });
}

// ================================================================ 峯嵐堂 平安神宮店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024594/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://hourandou.net/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_hourandou_heian_jingu', name: '峯嵐堂 平安神宮店 (Houran Dou Heian Jingu)', category: 'OMNI',
    lat: 35.010867, lng: 135.78249, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Warabi mochi with kinako, matcha or black sesame, parfaits with soft-serve, shaved ice; no ingredient information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Warabi mochi and matcha are not described as vegan; parfaits use ice cream and soft-serve (2025–2026 reviews).',
    hours_raw: '10:00–18:00 daily (Tabelog). Cards, e-money and QR (Tabelog). Small eat-in café with a takeaway and tasting counter; seating a little cramped (October 2025; January 2026). Non-smoking (Tabelog). Very close to the Heian Shrine torii (January 2026). Opened 16 October 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki — by the Heian Shrine torii',
    cuisine: 'Warabi mochi in kinako, matcha and black-sesame flavours, with a tasting corner (October 2025) · matcha and warabi-mochi set ¥770; three-kind warabi mochi and matcha set (October 2025; January and May 2026) · warabi mochi served warm (May 2026) · “Suzaku” parfait with warabi mochi, matcha ice cream and soft-serve; shaved ice with three kinds of warabi mochi (August 2025) · two-colour warabi mochi (October 2026)',
    website: SITE, gmaps: gm('峯嵐堂 平安神宮店'), menu_url: SITE,
    notes: '[Warabi mochi café · by the Heian Shrine torii] A small wagashi café near the great torii of Heian Shrine, specialising in very soft warabi mochi — try kinako, matcha and black sesame at the tasting counter, then sit down to a ¥770 set with matcha, a warabi-mochi parfait or summer shaved ice. Flagged: one of three 峯嵐堂 shops (Arashiyama Togetsukyo main shop, Yasaka).',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'A Tabelog name search shows 峯嵐堂 shops at Togetsukyo (main shop), Yasaka and here, plus a factory. No operator details were found.',
      philosophy: null, specialty: 'Warabi mochi.',
      anecdotes: [
        { text: 'An October 2025 visitor, lured in by the “Warabi Mochi” sign, tasted the black-sesame one at the counter and stayed for a ¥770 set with matcha.', source: R + 'B514804983/' },
      ],
      japanese_sources_summary: '食べログ: 峯嵐堂 平安神宮店、和菓子・甘味処、左京区岡崎円勝寺町140 ポルト・ド岡崎 105、毎日 10:00〜18:00、2014年10月16日オープン、カード・電子マネー・QR可、禁煙。口コミ (2025〜2026年、英語): きな粉・抹茶・黒胡麻のわらび餅、試食コーナー、抹茶とわらび餅のセット770円、3種のわらび餅と抹茶のセット、温かいわらび餅、朱雀パフェ (わらび餅、抹茶アイス、ソフトクリーム)、3種のわらび餅のかき氷、2色のわらび餅、平安神宮の鳥居のすぐ近く、席はやや狭い。食べログの店名検索: 渡月橋本店、八坂店、平安神宮店、本社製造工場。',
      confidence: 'low', sources: [TB, SITE, R + 'B507714534/', R + 'B511069062/', R + 'B511462572/', R + 'B514804983/', R + 'B520106640/', R + 'B528947695/', R + 'B537353883/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tasting counter; small café.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎円勝寺町140 ポルト・ド岡崎 105',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated May 2025 to October 2026.' },
    pin_source: `Tabelog ${TB} (35.010867, 135.78249); cross-checked: GSI 京都府京都市左京区岡崎円勝寺町140番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514804983/'],
    price_note: 'One price from an October 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Matcha and warabi-mochi set', '¥770', 'Sets', 'ask', 'ask', 'October 2025.', 'matcha_set'),
      it('', '', '“Suzaku” parfait with warabi mochi', '', 'Parfaits', 'ask', 'no', 'August 2025.', 'suzaku'),
      it('', '', 'Shaved ice with three kinds of warabi mochi', '', 'Shaved ice', 'ask', 'ask', 'August 2025.', 'kakigori'),
    ] }, {
    cuisine: 'きな粉・抹茶・黒胡麻のわらび餅、試食コーナーあり (2025年10月)・抹茶とわらび餅のセット770円、3種のわらび餅と抹茶のセット (2025年10月、2026年1・5月)・温かいわらび餅 (2026年5月)・わらび餅、抹茶アイス、ソフトクリームの朱雀パフェ、3種のわらび餅のかき氷 (2025年8月)・2色のわらび餅 (2026年10月)',
    neighborhood: '岡崎。平安神宮の大鳥居のそば',
    gf_detail: '要確認。きな粉・抹茶・黒胡麻のわらび餅、ソフトクリームのパフェ、かき氷。原材料の情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。わらび餅や抹茶はヴィーガンとは書かれていない。パフェにはアイスやソフトクリーム (2025〜2026年の口コミ)。',
    notes: '[わらび餅の甘味処・平安神宮の鳥居のそば] 平安神宮の大鳥居近くの小さな和菓子の甘味処。とても柔らかいわらび餅が名物で、きな粉・抹茶・黒胡麻を試食してから、770円の抹茶セット、わらび餅のパフェ、夏はかき氷を。峯嵐堂の3店舗 (嵐山渡月橋の本店、八坂) の一つ (要確認)。',
  });
}

save();
