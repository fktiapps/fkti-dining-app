// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 85.
//   + 鉄亭 Kurogane Tei (teppan and okonomiyaki house on Sanjo-Karasuma with a choose-two lunch)
//   + 京料理うえの Kyoryori Ueno (Kyoto kaiseki near Kodai-ji, hamo courses and a lunch “ko-kaiseki”)
//   + eperon (natural-wine bar on Niomon-dori, open from 3 pm)
//   - ホリーズカフェ 烏丸六角店, 優十不断, 鮨 やまざき, Hyde&Away 京都御所南店, THE LIBRARY: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26039018 (skipped), 26017340,
//   26041472 (skipped), 26034194, 26027816 (skipped), 26044322 (skipped), 26039222, 26005628 (skipped).
//   queue-status.jsonl grepped for each brand (ホリーズ, 鉄亭, 優十不断/THAN, うえの, やまざき, Hyde&Away, eperon, LIBRARY/モントレ):
//   ホリーズカフェ already ruled a chain (26012977, 26011866).
//   Data check: none of the three drafted is in data/kyoto.json by name or address.
//   Same-name count (same brand or operator only): one shop each. Large-parent and big-chain-hotel lists checked.
//   Service charges, checked against Tabelog’s Japanese original: うえの 無し and eperon サービス料・チャージなし (Tabelog’s
//   English for うえの wrongly says a fee is added); none listed for 鉄亭.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-85');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26039018', 'chain: ホリーズカフェ (same as 26012977)');
skip('26041472', 'large parent: 優十不断 is run by 株式会社THAN (invoice T7011101080106, NTA register), whose press releases list about 40 restaurants across many brands (原価ビストロチーズプラス, 原価酒場けいすけ and others)');
skip('26027816', '鮨 やまざき: no reviews dated 2025–2026 (latest September 2024)');
skip('26044322', 'chain: Hyde&Away — Tabelog lists Hyde&Away shops in Osaka, Kyoto Higashiyama, Kobe Sannomiya, Kyoto Takashimaya, Daimaru Umeda and this one');
skip('26005628', 'large parent: Hotel Monterey hotel — THE LIBRARY is the café-bar of ホテルモントレ京都 (big-chain-hotel rule, Greg 2026-11-08)');

// ================================================================ 鉄亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26017340/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:30', '15:00'], ['17:30', '24:00']); const SA = day(['17:30', '24:00']);
  put({
    id: 'kyoto_kurogane_tei_sanjo', name: '鉄亭 (Kurogane Tei)', category: 'OMNI',
    lat: 35.008553, lng: 135.760332, cuisine_type: 'okonomiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Okonomiyaki, teppanyaki and yakisoba; lunch sets of rice, miso soup and two dishes such as chicken katsu or miso stir-fry; no gluten information (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: miso soup in dashi, pork, chicken and fish dishes (May 2025).',
    hours_raw: 'Monday–Friday 11:30–15:00 and 17:30–24:00; Saturday 17:30–24:00; closed Sunday; hours may change (Tabelog). Cards: JCB and AMEX; e-money and QR (Tabelog). Counter and sunken seating (Tabelog). Smoking allowed (Tabelog). On the 2nd floor of 進々堂ビル on Sanjo east of Karasuma, a short walk from exit 5 of Karasuma-Oike (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo east of Karasuma, 2F — near Karasuma-Oike exit 5',
    cuisine: 'Okonomiyaki, teppanyaki and yakisoba in the evening (Tabelog) · a lunch set of rice, miso soup, pickles and two dishes of your choice, about ¥1,100 (May and October 2025) — e.g. stir-fried lotus root and pork with miso, seared bonito with ponzu, boiled-shirasu rice bowl, chicken katsu with ume-shiso tartare (May 2025)',
    website: null, gmaps: gm('鉄亭 三条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Okonomiyaki and teppan · Sanjo-Karasuma, 2nd floor] A calm second-floor teppan restaurant on Sanjo-dori serving okonomiyaki, teppanyaki and yakisoba at night, and a popular weekday lunch where you pick two dishes — miso pork with lotus root, seared bonito, shirasu bowl — with rice and miso soup for about ¥1,100. Smoking allowed; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe a calm place with carefully made Japanese set lunches (May 2025); prices have risen from about ¥800 to over ¥1,000 (October 2025). No operator was found.',
      philosophy: null, specialty: 'Choose-two lunch set; okonomiyaki.',
      anecdotes: [
        { text: 'A May 2025 diner paired stir-fried lotus root and pork in miso with thick-cut seared bonito, both with glossy, fluffy rice.', source: R + 'B507549911/' },
        { text: 'An October 2025 regular noted the lunch has gone from about ¥800 to over ¥1,000.', source: R + 'B515854794/' },
      ],
      japanese_sources_summary: '食べログ: 鉄亭、お好み焼き・鉄板焼き・焼きそば、中京区三条通烏丸東入ル梅忠町16-2 進々堂ビル 2F、地下鉄烏丸御池駅5番出口から三条通を東へ、月〜金 11:30〜15:00、17:30〜24:00、土 17:30〜24:00、日曜定休、カードはJCB・AMEX、電子マネー・QR可、カウンターと掘りごたつ、喫煙可。口コミ (2025年、英語): ご飯、味噌汁、漬物に好きな2品を選ぶ昼の定食 (約1,100円)、蓮根と豚の味噌炒め、鰹のたたき、釜揚げしらす丼、梅しそタルタルのチキンカツ、以前は約800円。',
      confidence: 'low', sources: [TB, R + 'B505993292/', R + 'B507549911/', R + 'B515854794/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and kotatsu seats; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通烏丸東入ル梅忠町16-2 進々堂ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2025.' },
    pin_source: `Tabelog ${TB} (35.008553, 135.760332); cross-checked: GSI 京都府京都市中京区梅忠町16番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507549911/'],
    price_note: 'Lunch price from a May 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: rice, miso soup, pickles and two dishes', 'about ¥1,100', 'Lunch', 'ask', 'no', 'May and October 2025.', 'lunch'),
      it('', '', 'Okonomiyaki', '', 'Teppan', 'no', 'no', 'Tabelog.', 'okonomiyaki'),
    ] }, {
    cuisine: '夜はお好み焼き、鉄板焼き、焼きそば (食べログ)・昼はご飯、味噌汁、漬物に好きな2品を選ぶ定食、約1,100円 (2025年5・10月): 蓮根と豚の味噌炒め、鰹のたたきとポン酢、釜揚げしらす丼、梅しそタルタルのチキンカツなど (2025年5月)',
    neighborhood: '烏丸の東の三条、2階。烏丸御池5番出口の近く',
    gf_detail: '要確認。お好み焼き、鉄板焼き、焼きそば。昼はご飯と味噌汁に2品 (チキンカツや味噌炒めなど)。グルテンの情報はない (2025年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁の味噌汁、豚、鶏、魚の料理 (2025年5月)。',
    notes: '[お好み焼きと鉄板・三条烏丸、2階] 三条通のビル2階の落ち着いた鉄板の店。夜はお好み焼き、鉄板焼き、焼きそば。平日の昼は好きな2品 (蓮根と豚の味噌炒め、鰹のたたき、しらす丼など) をご飯と味噌汁と約1,100円で。喫煙可、日曜定休。',
  });
}

// ================================================================ 京料理うえの
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034194/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '22:00']);
  put({
    id: 'kyoto_kyoryori_ueno', name: '京料理うえの (Kyoryori Ueno)', category: 'OMNI',
    lat: 34.999949, lng: 135.778704, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki of seasonal ingredients and Kyoto vegetables, hamo courses; the menu can be tailored on request when booking (Tabelog; August 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish, especially hamo, on dashi (Tabelog; August 2026).',
    hours_raw: '11:30–22:00 daily; closed over New Year; enquiries welcome outside these hours (Tabelog). No service charge (Tabelog, original 無し; its English wrongly says a fee is added). Cards; no e-money or QR (Tabelog). 35 seats: an 8-seat counter and private rooms; parties up to 30 (Tabelog). Near Kodai-ji, about 10 min from Keihan Gion-Shijo or subway Higashiyama (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama near Kodai-ji — 10 min from Keihan Gion-Shijo',
    cuisine: 'Kyoto kaiseki of seasonal ingredients and Kyoto vegetables; menus can be tailored on request (Tabelog) · “hamo-zukushi” kaiseki; a lunch-only “ko-kaiseki” (Tabelog) · hamo course ¥33,000 in a private room, with dishes that suit drinks (August 2026) · courses on Tabelog from ¥13,000; New Year osechi in one or two tiers (Tabelog)',
    website: null, gmaps: gm('京料理うえの 高台寺'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto kaiseki · near Kodai-ji, hamo courses] A kaiseki restaurant near Kodai-ji with a counter and private rooms, cooking seasonal ingredients and Kyoto vegetables — a hamo-zukushi course in summer, a smaller ko-kaiseki at lunch — and willing to tailor menus when you book. Open all day; no service charge.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes kaiseki of seasonal ingredients and Kyoto vegetables, with menus adjusted on request. No operator was found.',
      philosophy: null, specialty: 'Hamo-zukushi kaiseki.',
      anecdotes: [
        { text: 'An August 2026 party of three took the ¥33,000 hamo course in a private room from 6 pm.', source: R + 'B533405911/' },
      ],
      japanese_sources_summary: '食べログ: 京料理うえの、日本料理、東山区上弁天町427-2、京阪祇園四条駅・地下鉄東山駅から徒歩10分、11:30〜22:00 (時間外も相談可)、年末年始休み、サービス料なし、カード可、35席 (カウンター8と個室)、30名まで、旬の食材と京野菜の会席、「鱧づくし会席」、昼限定の「小会席」、要望に合わせて献立を調整、コース13,000円から、おせち (一段・二段)。口コミ (2026年、英語): 高台寺近く、個室で鱧のコース33,000円。',
      confidence: 'low', sources: [TB, R + 'B528435460/', R + 'B533405911/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and private rooms; no service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区上弁天町427-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated May and August 2026.' },
    pin_source: `Tabelog ${TB} (34.999949, 135.778704); cross-checked: GSI 京都府京都市東山区上弁天町427番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B533405911/'],
    price_note: 'Course prices from Tabelog and an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kaiseki course', 'from ¥13,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'Hamo course', '¥33,000', 'Courses', 'ask', 'no', 'August 2026.', 'hamo'),
    ] }, {
    cuisine: '旬の食材と京野菜の京懐石、要望に合わせて献立を調整 (食べログ)・「鱧づくし会席」、昼限定の「小会席」 (食べログ)・個室で鱧のコース33,000円、酒に合う料理 (2026年8月)・食べログのコースは13,000円から、一段・二段のおせち (食べログ)',
    neighborhood: '高台寺近くの東山。京阪祇園四条から徒歩10分',
    gf_detail: '要確認。旬の食材と京野菜の京懐石、鱧のコース。予約時に献立の相談ができる (食べログ、2026年8月)。',
    vegan_detail: 'ヴィーガンではない。出汁の会席で、魚、特に鱧 (食べログ、2026年8月)。',
    notes: '[京懐石・高台寺近く、鱧のコース] 高台寺近くのカウンターと個室のある会席の店。旬の食材と京野菜で、夏は鱧づくしの会席、昼は小会席。予約時に献立の相談もできる。通し営業、サービス料なし。',
  });
}

// ================================================================ eperon
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039222/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '22:30']);
  put({
    id: 'kyoto_eperon_niomon', name: 'eperon (éperon)', category: 'OMNI',
    lat: 35.011869, lng: 135.772629, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Natural wine with charcuterie, cheese, olives and vegetable plates; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable appetizers and olives are served, with no ingredients described (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday–Sunday 15:00–22:30 (L.O. 22:00); closed Wednesday (Tabelog). No service charge or cover (Tabelog, original サービス料・チャージなし). Cards; no e-money or QR (Tabelog). 12 seats: 4 at the counter and 8 at tables (Tabelog). On Niomon-dori by Kawabata, 2 min from exit 12 of Keihan Sanjo (Tabelog; April 2025).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Niomon-dori by Kawabata — 2 min from Keihan Sanjo',
    cuisine: 'Natural wines, mainly French, by the glass from mid-afternoon (April and October 2025) · wines picked to your taste, e.g. a Languedoc orange wine (July 2025) · charcuterie, cheese platter, ham, olives and small plates; Kyoto-vegetable appetizers (July and October 2025, May and September 2026)',
    website: null, gmaps: gm('eperon 京都 仁王門'), menu_url: TB + 'dtlmenu/',
    notes: '[Natural-wine bar · Niomon-dori, open from 3 pm] A small wood-lined wine bar on Niomon-dori run by a former Gion French-restaurant sommelier, pouring mainly French natural wines by the glass from mid-afternoon with cheese, charcuterie and vegetable plates. Warm, unhurried service; no cover charge; closed Wednesday.',
    chef_bio: { chef_name: 'Matsuura (owner, per a review; kanji not sourced)', roles: ['Owner-sommelier'], origin: null,
      background: 'An April 2025 reviewer writes that the bar is run by Matsuura, who worked for eight years as a sommelier at a French restaurant in Gion; an October 2025 reviewer also says the owner was a Gion French-restaurant sommelier. The name means “spur” in French, chosen to give small boosts of energy to everyday life (April 2025).',
      philosophy: 'Small moments of vitality in everyday life (April 2025).', specialty: 'French natural wine by the glass.',
      anecdotes: [
        { text: 'A July 2025 pair asked for something with yeastiness and acidity and were poured a Languedoc orange wine that suited perfectly.', source: R + 'B510319256/' },
        { text: 'A November 2025 visitor stopped in at 5 pm on the way back from the Kyoto City Museum of Art after spotting the small sign.', source: R + 'B517285448/' },
      ],
      japanese_sources_summary: '食べログ: eperon、ワインバー、左京区川端通孫橋町18-4、京阪三条駅12番出口から徒歩2分、月・火・木〜日 15:00〜22:30 (L.O.22:00)、水曜定休、サービス料・チャージなし、カード可、12席 (テーブル8、カウンター4)。口コミ (2025〜2026年、英語): 仁王門通の静かなワインバー、祇園のフレンチで8年ソムリエを務めたMatsuuraさんが営む、フランス中心の自然派ワインをグラスで、名前はフランス語で「拍車」、ラングドックのオレンジワイン、シャルキュトリー、チーズ、ハム、オリーブ、京野菜の前菜、15時から、温かい店主。',
      confidence: 'medium', sources: [TB, R + 'B506070007/', R + 'B510319256/', R + 'B514404941/', R + 'B515853347/', R + 'B517105312/', R + 'B517212229/', R + 'B517285448/', R + 'B524458753/', R + 'B528915570/', R + 'B536788138/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Owner explains the wines; no cover charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区川端通孫橋町18-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.011869, 135.772629); cross-checked: GSI 京都府京都市左京区孫橋町18番地 (lot) 89m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517212229/', R + 'B528915570/'],
    price_note: 'No prices found; no cover charge.', last_checked: TODAY, items: [
      it('', '', 'Natural wine by the glass', '', 'Wine', '', '', '2025–2026.', 'glass'),
      it('', '', 'Cheese platter', '', 'Snacks', 'ask', 'no', 'May 2026.', 'cheese'),
      it('', '', 'Charcuterie', '', 'Snacks', 'ask', 'no', 'October 2025.', 'charcuterie'),
    ] }, {
    cuisine: 'フランス中心の自然派ワインを昼下がりからグラスで (2025年4・10月)・好みに合わせて選ぶワイン、例えばラングドックのオレンジワイン (2025年7月)・シャルキュトリー、チーズ盛り合わせ、ハム、オリーブ、小皿、京野菜の前菜 (2025年7・10月、2026年5・9月)',
    neighborhood: '川端近くの仁王門通。京阪三条から徒歩2分',
    gf_detail: '要確認。自然派ワインとシャルキュトリー、チーズ、オリーブ、野菜の小皿。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。野菜の前菜とオリーブがあるが、材料は書かれていない (2025〜2026年の口コミ)。',
    notes: '[自然派ワインバー・仁王門通、15時から] 祇園のフレンチの元ソムリエが営む、木の内装の仁王門通の小さなワインバー。フランス中心の自然派ワインを昼下がりからグラスで、チーズ、シャルキュトリー、野菜の小皿とともに。温かくゆったりした接客、チャージなし、水曜定休。',
  });
}

save();
