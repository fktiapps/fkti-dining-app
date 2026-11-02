// Osaka sweep (2-mile circle around Dotonbori), REST phase; worker osw1 (lane: Tabelog id mod 4 = 0), batch 17.
//   + オー・ド・ヴィー Eau-De-Vie (late dining bar: smoked dishes, inventive pasta, champagne hot pot in season, Soemoncho 2012)
//   + お好み オモニ 宗右衛門町店 Okonomi Omoni (the Tsuruhashi okonomiyaki house's branch by the Glico sign, open late)
//   + 鳥魚 宗右衛門町店 Toriuo (chicken sashimi, yakitori and market fish, an izakaya of 15 years)
//   + 燻製バル モトカラ Kunsei Bar Motokara (smoked-food bar with a riverside terrace on Dotonbori)
//   - skip(): Bonue caron (no 2025–26 reviews), マクドナルド 心斎橋南店 (chain).
//   Lane: `queue.mjs osaka next rest 600`, mod-4 = 0, in order: 27157996 六美麻辣湯 (still undecided), 27126288 skip,
//   27084996 +, 27015948 +, 27067528 +, 27094924 +. (27046480 McDonald's, next in line, skipped too.)
//   Chain check for the four kept:
//   - オー・ド・ヴィー: one shop.
//   - オモニ: Tsuruhashi (main), Souemoncho and Grand Front (October 2024 review); shops.jsonl also has 韓国鍋オモニ and 焼肉と
//     オモニ料理 李休, which are other businesses. A group of three; none in data.
//   - 鳥魚: 宗右衛門町店 (the original, 15 years per the listing) and 個室和食 鳥魚 御堂筋店 (27092728) share the izakaya concept;
//     隠 鳥魚 (osaka_kakure_toriuo_higashishinsaibashi, notes "a signless, reservation-only small-plates course in private
//     rooms") is a sister concept. Kept as a small group.
//   - 燻製バル モトカラ: the グリル モトカラ shops (堺筋本町, 西中島, 長堀橋 in shops.jsonl) are a different format (Greg's
//     sister-concept ruling); none in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27126288', 'No reviews in 2025–26: the six Tabelog reviews run from November 2021 to July 2023; basics cannot be confirmed for a full record.');
skip('27046480', 'Chain: マクドナルド (33 shops in shops.jsonl alone).');

// ================================================================ オー・ド・ヴィー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27084996/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '02:00']); const FS = day(['18:00', '03:00']);
  put({
    id: 'osaka_eau_de_vie_soemoncho', name: 'オー・ド・ヴィー (Eau-De-Vie)', category: 'OMNI',
    lat: 34.66957, lng: 135.501841, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pasta, baguette and quiche are central; smoked dishes may be safer but nothing is stated.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Smoked nuts are the starter; most dishes use meat, seafood, cheese or egg.',
    hours_raw: 'Mon–Thu 18:00–2:00; Fri–Sat 18:00–3:00; closed Sunday, open Sunday when Monday is a holiday (Tabelog). Reservations accepted, also on the day (Tabelog; August 2024). Charge ¥500 with house-smoked nuts, none with a course (Tabelog). Cards, e-money and QR payments including Alipay and WeChat Pay (Tabelog). 37 seats: 11 at the counter, 16 on sofas, 10 at tables; karaoke and darts at the back, with a darts tournament on Thursdays (Tabelog; September 2026). Smoking allowed (Tabelog). Opened 5 June 2012 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: FS, 5: FS }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-3-13, リップル宗右衛門町ビル 3F, a short walk from the Glico sign — 7 min from Namba Stn exit 15-B',
    cuisine: 'Dining bar of Italian and seasonal creative dishes, house-smoked foods and inventive pasta, with over 100 drinks including sommelier-chosen wine and seasonal fruit cocktails (Tabelog) · champagne hot pot of abalone, oysters, clams and fish cooked in a whole bottle, finished as an oyster cream stew, November to May; course ¥6,300 (Tabelog; February 2025, April 2024) · five-kind smoked meat platter, prosciutto with figs, red carbonara, spaghetti aglio e olio with egg, a pasta topped with a hamburg steak, ajillo, shime-saba, quiche (2024–2026 reviews) · 7-dish course with all-you-can-drink ¥4,950 (Tabelog); a course with all-you-can-drink was ¥4,500 in December 2024',
    website: null, gmaps: gm('オー・ド・ヴィー 宗右衛門町'), menu_url: null,
    notes: "[Dining bar · Soemoncho, smoked plates and pasta until 2 a.m.] A calm, wood-toned dining bar on the third floor of a building a short walk from the Glico sign, open until 2 a.m. (3 a.m. at weekends) and good for a late first or second stop. The kitchen is better than the bar setting suggests: house-smoked nuts with the ¥500 charge, a five-kind smoked meat platter, prosciutto with figs and inventive pasta, from a garlicky aglio e olio with egg to one crowned with a hamburg steak. From November to May the draw is a champagne hot pot of abalone, oysters and clams cooked in a whole bottle (course ¥6,300). Karaoke and darts at the back, darts nights on Thursdays. Smoking allowed. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and bar staff (unnamed); a sommelier chooses the wine (Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: dining bar with authentic Italian and seasonal creative dishes, homemade smoked foods and pasta, over 100 drinks including sommelier-selected wine and seasonal fruit cocktails, a signature champagne hot pot; open from 18:00 until late; opened 5 June 2012.', philosophy: null, specialty: 'Champagne hot pot; smoked dishes; pasta.',
      anecdotes: [
        { text: '"This dish is available only from November to May, so be sure to check it out before the season ends." — February 2025, the champagne hot pot.', source: R + 'B504586273/' },
        { text: '"The homemade smoked nuts served as an appetizer were so delicious that I wanted to order more." — February 2026.', source: R + 'B522743212/' },
        { text: '"There\'s a darts and karaoke area in the back" — September 2026; the reviewer adds that a darts tournament is held every Thursday.', source: R + 'B535345175/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): オー・ド・ヴィー、ダイニングバー・イタリアン・バル、大阪市中央区心斎橋筋2-3-13 リップル宗右衛門町ビル 3F、なんば駅15-B出口から徒歩7分、月〜木18:00〜翌2:00、金土18:00〜翌3:00、日曜休み (月曜が祝日なら日曜営業)、予約可、チャージ500円 (自家製の燻製ナッツつき、コースは除く)、カード・電子マネー・QR 可、37席 (カウンター11、ソファー16、テーブル10)、カラオケ、ダーツ、喫煙可、2012年6月5日オープン。店の紹介 (英訳): イタリアンと季節の創作料理のダイニングバー、自家製の燻製、パスタ、ソムリエが選ぶワインなど100種以上の飲み物、名物のシャンパン鍋 (コース6,300円)、飲み放題つきコース4,950円。口コミ(2024年4月〜2026年9月): 1本まるごとのシャンパンで煮るあわび・かき・はまぐりの鍋 (11月〜5月)、締めはかきのクリームシチュー、燻製の盛り合わせ、生ハムといちじく、赤いカルボナーラ、卵入りのペペロンチーノ、ハンバーグがのったパスタ、アヒージョ、しめさば、キッシュ、木曜はダーツの大会。',
      confidence: 'medium', sources: [TB, R + 'B484800813/', R + 'B491566488/', R + 'B491879563/', R + 'B497810628/', R + 'B503427059/', R + 'B503462540/', R + 'B504586273/', R + 'B510885076/', R + 'B522743212/', R + 'B535345175/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bar counter and sofas; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区心斎橋筋2-3-13 リップル宗右衛門町ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番13号 (go) 9m. Same building as お好み オモニ 宗右衛門町店 (osaka_omoni_soemoncho, this batch, 1F; Tabelog points 5 m apart), so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B497810628/'],
    price_note: 'Course prices from the Tabelog listing (2026).', last_checked: TODAY, items: [
      it('', '', 'Champagne hot pot course (seasonal, November–May)', '¥6,300', 'Courses', 'ask', 'no', 'Tabelog listing.', 'champagne_nabe'),
      it('', '', '7-dish course with all-you-can-drink', '¥4,950', 'Courses', 'ask', 'no', 'Tabelog listing.', 'course_nomihodai'),
      it('', '', 'House-smoked nuts (with the ¥500 charge)', '', 'Starter', 'ask', 'ask', 'Tabelog listing; February 2026.', 'smoked_nuts'),
    ] }, {
    cuisine: 'イタリアンと季節の創作料理のダイニングバーで、自家製の燻製と工夫したパスタ、ソムリエが選ぶワインや季節のフルーツのカクテルなど100種以上の飲み物 (食べログ)・1本まるごとのシャンパンであわび、かき、はまぐり、魚を煮て、締めはかきのクリームシチューにするシャンパン鍋、11月〜5月、コース6,300円 (食べログ、2025年2月、2024年4月)・燻製の肉の5種盛り、生ハムといちじく、赤いカルボナーラ、卵入りのペペロンチーノ、ハンバーグがのったパスタ、アヒージョ、しめさば、キッシュ (2024〜2026年の口コミ)・飲み放題つきの7品のコース4,950円 (食べログ)。2024年12月は飲み放題つきのコースが4,500円',
    neighborhood: '心斎橋筋2-3-13、リップル宗右衛門町ビル3階、グリコの看板からすぐ。なんば駅15-B出口から7分',
    gf_detail: '要確認。グルテンの情報なし。パスタ、バゲット、キッシュが中心で、燻製の料理の材料の説明もない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。お通しは燻製ナッツ。多くの料理に肉、魚介、チーズ、卵を使う。',
    notes: '[ダイニングバー・宗右衛門町、深夜2時まで燻製とパスタ] グリコの看板からすぐのビルの3階の、木の落ち着いたダイニングバーで、深夜2時 (週末は3時) まで。1軒目にも2軒目にも。料理はバーの雰囲気以上で、500円のチャージには自家製の燻製ナッツ、燻製の肉の5種盛り、生ハムといちじく、卵入りのペペロンチーノからハンバーグがのったパスタまでの工夫したパスタ。11月〜5月の名物はシャンパン1本であわび、かき、はまぐりを煮る鍋 (コース6,300円)。奥にカラオケとダーツがあり、木曜はダーツの大会。喫煙可。日曜休み。',
  });
}

// ================================================================ お好み オモニ 宗右衛門町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27015948/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '15:00'], ['17:00', '24:00']); const B = day(['11:00', '15:00'], ['17:00', '02:00']);
  put({
    id: 'osaka_omoni_soemoncho', name: 'お好み オモニ 宗右衛門町店 (Okonomi Omoni)', category: 'OMNI',
    lat: 34.669569, lng: 135.501896, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki batter and yakisoba noodles are wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki is made with egg and the toppings run to pork, squid, shrimp and cheese.',
    hours_raw: 'Mon–Wed 11:00–15:00 and 17:00–24:00; Thu–Sun 11:00–15:00 and 17:00–2:00; hours may change (Tabelog). No reservations per Tabelog, though diners in 2025–2026 booked (June 2025; April 2026). Cards (JCB, AMEX) and QR payments; no e-money (Tabelog). Smoking allowed (Tabelog). Full by about 19:00 on a Friday in April 2026; the entrance is set back on the ground floor, look for the sidewalk sign (June 2025).',
    hours: { 0: A, 1: A, 2: A, 3: B, 4: B, 5: B, 6: B }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-3-13, リップル宗右衛門町ビル 1F, near the Glico sign — 5 min from Namba Stn',
    cuisine: 'Okonomiyaki and yakisoba from the Tsuruhashi okonomiyaki house Omoni; this branch is a little pricier than the main shop (2024–2025 reviews) · the signature Omoni-yaki, packed with egg inside and out, fluffy and cabbage-heavy, about 30 toppings including kimchi (October 2025–June 2026) · ABCDE-yaki of pork, shrimp, mochi, egg and cheese ¥1,650 (October 2024) · thick-noodle yakisoba in sauce or squid and salt, small or large; tonpei-yaki; grilled squid; a foil-steamed dish (2024–2026 reviews)',
    website: null, gmaps: gm('お好み オモニ 宗右衛門町店'), menu_url: null,
    notes: "[Okonomiyaki · Soemoncho, the Tsuruhashi favourite near Glico] The Soemoncho branch of Omoni, the Tsuruhashi okonomiyaki house, on the ground floor near the Glico sign, its walls covered with celebrity autographs and open until 2 a.m. late in the week. Order the signature Omoni-yaki, fluffy, cabbage-heavy and wrapped in egg, or build your own from about 30 toppings including kimchi. Regulars rate the yakisoba just as highly, especially the squid-and-salt version. Prices are a little above the main shop, and one long-time regular noted the taste varies with the griller. Fully booked by 7 p.m. on an April 2026 Friday; smoking allowed; cards limited to JCB and AMEX.",
    chef_bio: { chef_name: null, roles: ['Teppan grillers and floor staff (unnamed)'], origin: null, background: 'Tabelog: okonomiyaki and yakisoba in Soemoncho. Reviews: Okonomi Omoni has shops in Tsuruhashi (the main shop), Souemoncho and Grand Front (October 2024); a long-established okonomiyaki house Osaka is proud of (June 2026); celebrity autographs and photos on the walls (2024–2026).', philosophy: null, specialty: 'Omoni-yaki; yakisoba.',
      anecdotes: [
        { text: '"Okonomi Omoni has locations in Tsuruhashi, Souemoncho, and Grand Front." — October 2024, a regular of 28 visits.', source: R + 'B458573598/' },
        { text: '"The Omoni-style okonomiyaki here is delicious. It\'s packed with eggs both inside and out, making it very filling." — January 2026.', source: R + 'B520766793/' },
        { text: '"I especially recommend the squid salt yakisoba." — June 2026.', source: R + 'B529498621/' },
      ],
      japanese_sources_summary: '食べログ: お好み オモニ 宗右衛門町店、お好み焼き・焼きそば、大阪市中央区心斎橋筋2-3-13 リップル宗右衛門町ビル 1F、なんば駅から徒歩5分、月〜水11:00〜15:00・17:00〜24:00、木〜日11:00〜15:00・17:00〜翌2:00、予約不可、カード (JCB、AMEX)・QR 可、電子マネー不可、喫煙可。口コミ(2024年4月〜2026年6月): Tsuruhashi の本店、宗右衛門町、Grand Front に店、宗右衛門町は本店より少し高い、焼き手が変わると味が変わるという常連の声、オモニ焼き、卵たっぷり、キャベツが多くふんわり、キムチなど30種ほどのトッピング、ABCDE焼き1,650円 (豚、えび、もち、卵、チーズ)、太麺の焼きそば (ソースやいか塩、小と大)、とん平焼き、いか焼き、ホイル焼き、有名人のサインと写真、2026年4月の金曜は19時ごろ満席、喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B458573598/', R + 'B483328319/', R + 'B492122200/', R + 'B511849417/', R + 'B520766793/', R + 'B526534394/', R + 'B528071062/', R + 'B529498621/', R + 'B530594302/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular with overseas tourists (January 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区心斎橋筋2-3-13 リップル宗右衛門町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番13号 (go) 9m. Same building as オー・ド・ヴィー (osaka_eau_de_vie_soemoncho, this batch, 3F; Tabelog points 5 m apart), so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B458573598/'],
    price_note: 'One dated price from an October 2024 review.', last_checked: TODAY, items: [
      it('', '', 'ABCDE-yaki (pork, shrimp, mochi, egg, cheese)', '¥1,650', 'Okonomiyaki', 'no', 'no', 'October 2024 review.', 'abcde_yaki'),
      it('', '', 'Omoni-yaki', '', 'Okonomiyaki', 'no', 'no', '2026 reviews.', 'omoni_yaki'),
      it('', '', 'Squid and salt yakisoba', '', 'Yakisoba', 'no', 'no', 'June 2026 review.', 'ika_shio_yakisoba'),
    ] }, {
    cuisine: 'Tsuruhashi のお好み焼きの店オモニのお好み焼きと焼きそばで、この店は本店より少し高め (2024〜2025年の口コミ)・名物のオモニ焼きは中も外も卵たっぷりで、キャベツが多くふんわり。キムチなど30種ほどのトッピング (2025年10月〜2026年6月)・豚、えび、もち、卵、チーズの ABCDE焼き1,650円 (2024年10月)・太麺の焼きそばはソースかいか塩、小か大。とん平焼き、いか焼き、ホイル焼き (2024〜2026年の口コミ)',
    neighborhood: '心斎橋筋2-3-13、リップル宗右衛門町ビル1階、グリコの看板の近く。なんば駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。お好み焼きの生地と焼きそばの麺は小麦。',
    vegan_detail: 'ヴィーガンではありません。お好み焼きには卵を使い、トッピングは豚、いか、えび、チーズなど。',
    notes: '[お好み焼き・宗右衛門町、グリコ近くの Tsuruhashi の人気店] Tsuruhashi のお好み焼きの店オモニの宗右衛門町店で、グリコの看板近くのビルの1階。壁には有名人のサインが並び、週の後半は深夜2時まで。頼むなら名物のオモニ焼きで、ふんわりとキャベツが多く卵で包まれている。キムチなど30種ほどのトッピングから選んでも。常連は焼きそば、とくにいか塩も同じくらい推す。値段は本店より少し高めで、焼き手によって味が変わるという長年の常連の声も。2026年4月の金曜は19時ごろに満席。喫煙可。カードは JCB と AMEX のみ。',
  });
}

// ================================================================ 鳥魚 宗右衛門町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27067528/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'osaka_toriuo_soemoncho', name: '鳥魚 宗右衛門町店 (Toriuo)', category: 'OMNI',
    lat: 34.669497, lng: 135.502061, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi comes with soy sauce; yakitori, tempura, kushikatsu and gratin are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken and fish izakaya.',
    hours_raw: 'Daily 18:00–24:00 (food last order 23:00, drinks 23:30); earlier openings by reservation (Tabelog). Reservations accepted (Tabelog). Charge ¥1,000 covering service and a three-kind appetizer, plus 10% from 31 December to 4 January (Tabelog). Cards and PayPay; no e-money (Tabelog). 36 seats: counter, tables, semi-private rooms and sunken seating for up to 12 (Tabelog; April 2026). Smoking allowed at all seats (Tabelog; July 2026). Chicken sashimi may be off when the market is closed (December 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-3-12, 喜八ビル 4F, by the Soemoncho gate — 3 min from Namba Stn, 5 min from Shinsaibashi Stn',
    cuisine: 'Izakaya of chicken and fish: sashimi of morning-slaughtered chicken, binchotan yakitori and creative chicken dishes, with fish bought daily at the market (Tabelog) · chicken sashimi platter, fresh liver sashimi, raw tsukune wrapped in nori, the "bakudan" tsukune, a grilled-chicken platter in a bento box, yakitori rice bowl (2024–2026 reviews) · thick-cut fish sashimi, grilled fish, grilled milt, giant clam, crab-miso gratin, tempura, kushikatsu, takoyaki, potato salad; homemade tofu as the starter; hot pot in winter (2024–2026 reviews) · 7-dish course with 90 minutes of drinks ¥5,000, Sunday to Thursday (Tabelog)',
    website: null, gmaps: gm('鳥魚 宗右衛門町店'), menu_url: null,
    notes: "[Izakaya · Soemoncho, chicken sashimi and fish by the gate] A fourth-floor chicken-and-fish izakaya by the Soemoncho gate, open 15 years, with semi-private rooms and a counter. The menu changes daily: sashimi of chicken slaughtered that morning (liver, a mixed platter, raw tsukune to wrap in nori), binchotan yakitori and the house \"bakudan\" tsukune, beside thick-cut fish from the market, grilled milt and crab-miso gratin. The ¥1,000 charge covers service and a three-dish starter. On weekdays a 7-dish course with 90 minutes of drinks is ¥5,000. Staff are friendly; every seat is smoking. Chicken sashimi depends on market days.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: fifteen years in business; sashimi of carefully selected morning-slaughtered chicken, yakitori over binchotan and creative chicken dishes, fish sourced directly from the market, a wide sake list; sunken seating for up to 12, banquets up to 35–36. Sister shops: 個室和食 鳥魚 御堂筋店 (27092728) and 隠 鳥魚 (osaka_kakure_toriuo_higashishinsaibashi).', philosophy: null, specialty: 'Chicken sashimi; bakudan tsukune; market fish.',
      anecdotes: [
        { text: '"Eating the raw tsukune wrapped in seaweed is pure bliss!" — December 2024, a regular of about ten visits.', source: R + 'B514820396/' },
        { text: '"The signature \'Bakudan Tsukune\' (explosive chicken meatballs) is incredibly delicious every time I have it." — January 2026.', source: R + 'B529389327/' },
        { text: '"Located near the gate in Souemoncho, this restaurant has all smoking seats." — July 2026.', source: R + 'B532255331/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鳥魚 宗右衛門町店、居酒屋・海鮮・焼き鳥、大阪市中央区心斎橋筋2-3-12 喜八ビル 4F、なんば駅から徒歩3分、心斎橋駅から5分、毎日18:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、予約で早い時間も可、予約可、1,000円 (サービス料とお通し3種盛り)、年末年始は別途10%、カード・PayPay 可、電子マネー不可、36席、半個室、掘りごたつ (12名まで)、喫煙可、平日のコース7品と90分飲み放題5,000円。店の紹介 (英訳): 創業15年、朝引きの鶏の刺身、備長炭の焼き鳥、創作の鶏料理、市場から仕入れる日替わりの刺身、日本酒。口コミ(2024年1月〜2026年7月): 鶏刺しの盛り合わせ、レバ刺し、のりで巻く生つくね、Bakudan つくね、焼き鳥の弁当箱盛り、焼き鳥丼、厚切りの刺身、焼き魚、焼き白子、大あさり、かにみそグラタン、天ぷら、串カツ、たこ焼き、ポテトサラダ、自家製の豆腐のお通し、冬は鍋、市場の休みの日は鶏刺しがないことも、全席喫煙、スタッフが気さく。',
      confidence: 'medium', sources: [TB, R + 'B478725996/', R + 'B484991470/', R + 'B490263806/', R + 'B500333740/', R + 'B509562040/', R + 'B514820396/', R + 'B528003804/', R + 'B529303140/', R + 'B529389327/', R + 'B532255331/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Daily-changing menu; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区心斎橋筋2-3-12 喜八ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番12号 (go) 7m. Same building as osaka_okonomiyaki_dan_shinsaibashi (address_ja "大阪府大阪市中央区心斎橋筋2-3-12 喜八ビル 3F"), pinned 14 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course price and charge from the Tabelog listing (2026).', last_checked: TODAY, items: [
      it('', '', 'Weekday 7-dish course with 90 minutes of drinks (Sun–Thu)', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog listing.', 'weekday_course'),
      it('', '', 'Chicken sashimi platter', '', 'Sashimi', 'ask', 'no', 'December 2024 and May 2026 reviews.', 'torisashi'),
      it('', '', 'Bakudan tsukune', '', 'Yakitori', 'ask', 'no', 'January and July 2026 reviews.', 'bakudan_tsukune'),
    ] }, {
    cuisine: '鶏と魚の居酒屋: 朝引きの鶏の刺身、備長炭の焼き鳥、創作の鶏料理、市場で毎日仕入れる魚 (食べログ)・鶏刺しの盛り合わせ、新鮮なレバ刺し、のりで巻く生つくね、「Bakudan」つくね、弁当箱の焼き鳥の盛り合わせ、焼き鳥丼 (2024〜2026年の口コミ)・厚切りの魚の刺身、焼き魚、焼き白子、大あさり、かにみそのグラタン、天ぷら、串カツ、たこ焼き、ポテトサラダ。お通しは自家製の豆腐、冬は鍋も (2024〜2026年の口コミ)・日〜木の7品と90分飲み放題のコース5,000円 (食べログ)',
    neighborhood: '心斎橋筋2-3-12、喜八ビル4階、宗右衛門町の門のそば。なんば駅から3分、心斎橋駅から5分',
    gf_detail: '要確認。グルテンの情報なし。刺身には醤油、焼き鳥、天ぷら、串カツ、グラタンもある。',
    vegan_detail: 'ヴィーガンではありません。鶏と魚の居酒屋。',
    notes: '[居酒屋・宗右衛門町、門のそばの鶏刺しと魚] 宗右衛門町の門のそばのビルの4階、創業15年の鶏と魚の居酒屋で、半個室とカウンター。メニューは日替わりで、朝引きの鶏の刺身 (レバー、盛り合わせ、のりで巻く生つくね)、備長炭の焼き鳥と名物の「Bakudan」つくね、市場の厚切りの魚、焼き白子、かにみそのグラタンが並ぶ。1,000円のチャージはサービス料と3種のお通し。平日は7品と90分飲み放題のコースが5,000円。スタッフは気さくで、全席喫煙。鶏刺しは市場の休みの日はないことも。',
  });
}

// ================================================================ 燻製バル モトカラ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27094924/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kunsei-motokara.com/';
  const WD = day(['16:00', '23:00']); const SA = day(['12:00', '15:00'], ['15:30', '23:00']); const SU = day(['12:00', '18:00']);
  put({
    id: 'osaka_kunsei_bar_motokara_soemoncho', name: '燻製バル モトカラ (Kunsei Bar Motokara)', category: 'OMNI',
    lat: 34.669304, lng: 135.502349, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Smoked meats and grilled meat come with salt and yuzu pepper; there are also pizza, ramen and a pork and cabbage omelette.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a smoked-meat bar; even the smoked egg and cheese plates are animal products.',
    hours_raw: 'Mon–Fri 16:00–23:00; Sat 12:00–15:00 and 15:30–23:00 (food last order 22:00, drinks 22:30); Sun 12:00–18:00 (last orders 17:00 and 17:30); irregular closing days (Tabelog). Reservations accepted; group courses from 12 people (Tabelog). Charge ¥300 except with a course (Tabelog). Cards, e-money and QR payments (Tabelog). 48 seats: 40 at tables and 8 on the terrace; smoking on the terrace only (Tabelog). Entrance on the Dotonbori river side (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Soemoncho 7-11 B1F, entrance on the Dotonbori riverside — a short walk from the Glico sign',
    cuisine: 'Smoked-food bar: dishes, seasonings and drinks given a smoky touch, in a wood-toned room with a terrace (Tabelog) · 12-kind smoked platter ¥850 a serving under a lid that releases the smoke at the table; regular meat platter ¥2,800 (February 2025); whole smoked squid ¥950; pork and cabbage omelette ¥1,150 (February 2025) · smoked duck, sausages, smoked egg, potato salad, a chijimi-style pizza, grilled vegetables with salt and yuzu pepper (2025–2026 reviews) · smoky orange spritzer ¥800, smoked umeshu (2025) · weekday steak lunch of domestic beef, single or double (May 2026); Cremia soft-serve (April 2026); daytime course ¥2,000 with dessert (Tabelog)',
    website: SITE, gmaps: gm('燻製バル モトカラ 宗右衛門町'), menu_url: null,
    notes: "[Smoked food · Soemoncho, a smoky bar on the Dotonbori river] A basement bar with a small riverside terrace on Dotonbori, a few minutes from the Glico sign, where nearly everything is smoked. Start with the 12-kind smoked platter (¥850 a serving in February 2025); the lid comes off at the table in a cloud of smoke. Add smoked duck, sausages and smoked egg, and try a smoky orange spritzer or smoked umeshu. Daytime it serves domestic-beef steak lunches and generous Cremia soft-serve. One February 2025 diner found the meat overcooked, and a 2025 regular felt the menu now leans toward tourists. Smoking on the terrace only.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: a bar specialising in aromatic smoked dishes, seasonings and drinks, with creative items, lunch and café menus, a wood-tone room, private bookings and a well-ventilated terrace. Sister format グリル モトカラ (堺筋本町, 西中島, 長堀橋) is in shops.jsonl.', philosophy: null, specialty: 'Smoked platters; smoked drinks.',
      anecdotes: [
        { text: '"One of the highlights was the performance of opening a lid that traps smoke right in front of you." — September 2025.', source: R + 'B535635734/' },
        { text: '"The smoked umeshu (plum wine) was a unique experience, as I could taste the plum first, followed by the smokiness." — June 2025.', source: R + 'B509159822/' },
        { text: '"The meat was tough... It seemed overcooked..." — February 2025, on the 12-kind smoked platter.', source: R + 'B501081365/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 燻製バル モトカラ、バル・居酒屋・イタリアン、大阪市中央区宗右衛門町7-11 B1F、大阪難波駅から徒歩10分、入口は道頓堀川側、月〜金16:00〜23:00、土12:00〜15:00・15:30〜23:00、日12:00〜18:00、不定休、予約可、コース以外はチャージ300円、カード・電子マネー・QR 可、48席 (テーブル40、テラス8)、テラスのみ喫煙可。店の紹介 (英訳): 香りのよい燻製の料理、調味料、飲み物、創作のメニュー、ランチとカフェ、木の内装、テラス、昼のコース2,000円。口コミ(2025年2月〜2026年5月): 燻製12種盛り850円 (ふたを開けると煙)、肉の盛り合わせ2,800円、いかの丸ごと燻製950円、豚とキャベツのオムレツ1,150円、燻製の鴨、ソーセージ、燻製卵、ポテトサラダ、チヂミ風のピザ、焼き野菜と塩と柚子こしょう、スモーキーなオレンジのスプリッツァー800円、燻製の梅酒、国産牛のステーキのランチ、Cremia のソフトクリーム、肉が固かったという声、海外の客向けになったという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B467372641/', R + 'B500805568/', R + 'B501081365/', R + 'B508425923/', R + 'B509159822/', R + 'B515621802/', R + 'B518645971/', R + 'B527408756/', R + 'B528202002/', R + 'B535635734/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas customers (2025–2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町7-11 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町7番11号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B501081365/'],
    price_note: 'Prices from a February 2025 review.', last_checked: TODAY, items: [
      it('', '', '12-kind smoked platter (per serving)', '¥850', 'Smoked', 'ask', 'no', 'February 2025 review (2 servings ¥1,700).', 'kunsei_12'),
      it('', '', 'Regular meat platter', '¥2,800', 'Grill', 'ask', 'no', 'February 2025 review.', 'meat_platter'),
      it('', '', 'Whole smoked squid', '¥950', 'Smoked', 'ask', 'no', 'February 2025 review.', 'smoked_squid'),
      it('', '', 'Smoky orange spritzer', '¥800', 'Drinks', 'ask', 'ask', 'February 2025 review.', 'smoky_spritzer'),
    ] }, {
    cuisine: '燻製のバル: 料理、調味料、飲み物にスモーキーな香りをつけ、木の内装の店にテラスも (食べログ)・燻製12種盛りは1人前850円で、テーブルでふたを開けると煙が立つ。肉の盛り合わせ2,800円 (2025年2月)。いかの丸ごと燻製950円、豚とキャベツのオムレツ1,150円 (2025年2月)・燻製の鴨、ソーセージ、燻製卵、ポテトサラダ、チヂミ風のピザ、塩と柚子こしょうの焼き野菜 (2025〜2026年の口コミ)・スモーキーなオレンジのスプリッツァー800円、燻製の梅酒 (2025年)・平日の国産牛のステーキのランチ、シングルかダブル (2026年5月)。Cremia のソフトクリーム (2026年4月)。デザートつきの昼のコース2,000円 (食べログ)',
    neighborhood: '宗右衛門町7-11 地下1階、入口は道頓堀川側。グリコの看板から少し',
    gf_detail: '要確認。グルテンの情報なし。燻製や焼いた肉は塩と柚子こしょうで食べるが、ピザ、ラーメン、豚とキャベツのオムレツもある。',
    vegan_detail: 'ヴィーガンではありません。燻製の肉のバルで、燻製の卵やチーズも動物性。',
    notes: '[燻製・宗右衛門町、道頓堀川沿いの煙のバル] グリコの看板から数分、道頓堀川側に小さなテラスのある地下のバルで、ほとんどすべてが燻製。まずは燻製12種盛り (2025年2月は1人前850円) で、テーブルでふたを取ると煙が立ちのぼる。燻製の鴨、ソーセージ、燻製卵を足して、スモーキーなオレンジのスプリッツァーや燻製の梅酒も。昼は国産牛のステーキのランチと大盛りの Cremia のソフトクリーム。2025年2月には肉が固かったという声、2025年の常連はメニューが観光客向けになったと感じたそう。喫煙はテラスのみ。',
  });
}

save();
