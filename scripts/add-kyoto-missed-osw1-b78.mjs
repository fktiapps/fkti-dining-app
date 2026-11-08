// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 78.
//   Recheck of the lane’s retail-only skips under Greg’s 2026-11-07 ruling ("Include particularly historic family owned
//   shops, as well as GF and vegan options"): all eight re-skipped (reasons below) — none is both particularly historic
//   and family-owned with a sourced founding date and succession, and none has sourced GF or vegan options.
//   + エース カフェ Ace cafe (10th-floor dining bar over Kiyamachi-Sanjo, charcoal grill and fresh pasta, night view)
//   + そば処 大鶴 Soba Dokoro Daitsuru (old family soba and udon shop on Sanjo-Sakaimachi, founded 1905 per a review)
//   + Lounge & Bar 1867 (hotel lounge of ダーワ・悠洛 京都 by Sanjo bridge, seasonal afternoon tea)
//   + 祇園 粉もん かみ家 Gion Konamon Kamiya (couple-run okonomiyaki and teppan in Gion, opened July 2026)
//   - たけふさ, ダーワ・悠洛 京都: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26000168, 26029016 (skipped), 26002946,
//   26032412, 26039024 (skipped), 26045450.
//   queue-status.jsonl grepped for each brand (エース カフェ, たけふさ, 大鶴, 1867, ダーワ/悠洛, かみ家): no earlier rulings.
//   Data check: none of the four drafted is in data/kyoto.json by name or address. エース カフェ shares エンパイヤビル
//   (上大阪町521) with 沖縄料理ナンクル食堂 (1F); the Ace Hotel records (KOSA, PIOPIKO) are unrelated.
//   Same-name count (same brand or operator only): エース カフェ — invoice holder 株式会社ａｒｇｈａ ｃｏ. at the same
//   building (NTA register); one shop found. 1867 — the lounge of the hotel ダーワ・悠洛 京都; drafted as a hotel restaurant,
//   flagged (operator not confirmed). 大鶴, かみ家 — one shop each. Large-parent list checked.
//   Service charges, checked against Tabelog’s Japanese original: エース カフェ サービス料・チャージ料なし; 1867 サービス料13%;
//   none listed for 大鶴 and かみ家.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
//   JA text: 祝日 written in full.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-78');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ---- retail-only skips rechecked under Greg 2026-11-07
skip('26022146', 'retail food shop (Greg 11-07 ruling): 老舗･名店弁当コーナー ジェイアール京都伊勢丹店 is a department-store bento counter (JR Kyoto Isetan B2F, a large parent) selling other restaurants’ bento, not a historic family shop of its own, and no GF or vegan options are sourced');
skip('26023148', 'retail food shop (Greg 11-07 ruling): 京のみやげ アスティ京都 is a station souvenir shop in the JR Kyoto Shinkansen concourse; not a historic family shop, and no GF or vegan options are sourced');
skip('26024552', 'retail food shop (Greg 11-07 ruling): 祇園はた源 is a condiment shop (shichimi, ichimi, sansho); its own site (gion-hatagen.com) gives no founding date or family succession and claims no GF or vegan options');
skip('26029910', 'chain, and retail food shop (Greg 11-07 ruling): 治一郎 is a baumkuchen brand with many counters (Tabelog lists 大平台本店, KITTE丸の内, ルミネ新宿, アトレ恵比寿, エキュートエディション渋谷, グランフロント大阪 and more); take-away counter in Daimaru');
skip('26033750', 'retail food shop (Greg 11-07 ruling): 祇園 セレブリテ is a take-out patisserie run by its owner pastry chef; no long family history and no GF or vegan options are sourced (own site gion-celebrite.jp)');
skip('26038754', 'retail food shop (Greg 11-07 ruling): Wafla 京都店 is a take-away sweets counter; no historic family ownership and no GF or vegan options are sourced');
skip('26043098', 'retail food shop (Greg 11-07 ruling): New Bird 烏丸店 is a bakery counter; the brand site says the bakery began in 1977 as “バードチェーン” and became the croissant shop New Bird in 2020, but family succession is not sourced, and no GF or vegan options are listed');
skip('26044148', 'retail food shop (Greg 11-07 ruling): ミルクノキモチ 大丸京都店 is a doughnut counter in Daimaru; no historic family ownership and no GF or vegan options are sourced');
// ---- rest tier
skip('26029016', 'たけふさ: too thin to verify — the only 2025–2026 review (June 2026) does not describe the restaurant');
skip('26039024', 'ダーワ・悠洛 京都: a hotel listing, not a restaurant (Tabelog category Hotel); its lounge is drafted separately as Lounge & Bar 1867');

// ================================================================ エース カフェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000168/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_ace_cafe_kiyamachi', name: 'エース カフェ (Ace cafe)', category: 'OMNI',
    lat: 35.010117, lng: 135.770648, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled meat, fresh pasta, salads, kara-age and fritters; no gluten information (Tabelog menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Salads, marinated olives, nuts and wasabi-pickled yam are listed, but nothing is said about dressings or cheese (Tabelog menu).',
    hours_raw: '17:00–24:00 daily (L.O. food 23:00, drinks 23:30); closed 31 December to 3 January (Tabelog). No service charge or cover (Tabelog, original サービス料・チャージ料なし). Reservations recommended for window seats (August 2026); walk-ins possible late (October 2026). Ordering by QR at the table (July 2026). Cards, e-money and QR (Tabelog). 56 seats incl. 8 at the counter and couple seats by the window (Tabelog; August 2026). Non-smoking (Tabelog). On the 10th floor of エンパイヤビル on Kiyamachi north of Sanjo, 3 min from Keihan Sanjo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Sanjo, 10F — 3 min from Keihan Sanjo',
    cuisine: 'A dining bar with views over the Kamo river, Gion and Higashiyama: charcoal-grilled dishes and fresh pasta, wine, whisky and highballs (Tabelog) · sea-bream carpaccio with dashi ¥1,100; Caesar, caprese, prosciutto-avocado and duck-and-eggplant salads ¥980–1,050; soft-shell crab fritters ¥1,050; salted chicken kara-age ¥750; cheese plate ¥1,200 (Tabelog) · courses with salad and an outside-skirt steak main (August 2026) · eggplant-and-scallop arrabbiata, fried white fish, peperoncino (August 2026) · birthday plates and a couple’s birthday course for two ¥10,000 (July and October 2026) · non-alcoholic cocktails (October 2026)',
    website: null, gmaps: gm('エース カフェ 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Dining bar · Kiyamachi-Sanjo, 10th-floor night view] A stylish top-floor dining bar with window and couple seats looking over the Kamo river to Gion and Higashiyama: charcoal-grilled meat, fresh pasta, salads and fritters, wine and cocktails — a favourite for dates and birthdays. No service charge; open till midnight.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T9130001048471 is registered to 株式会社ａｒｇｈａ ｃｏ. at the same building (NTA register). Tabelog’s shop text describes a hideaway dining bar on the top floor that focuses on good ingredients, charcoal grilling and fresh pasta.',
      philosophy: null, specialty: 'Charcoal-grilled meat; fresh pasta.',
      anecdotes: [
        { text: 'An August 2026 diner who booked the day before got only the counter, and found the sunset view of the Kamo river just right.', source: R + 'B533518099/' },
        { text: 'An October 2026 pair came in at 9 pm without a booking for a second round of cocktails.', source: R + 'B538517757/' },
      ],
      japanese_sources_summary: '食べログ: エース カフェ、カフェ・ダイニングバー・イタリアン、中京区上大阪町521 エンパイヤビル 10F、京阪三条駅から徒歩3分、毎日 17:00〜24:00 (L.O.料理23:00、飲物23:30)、12月31日〜1月3日休み、サービス料・チャージ料なし、カード・電子マネー・QR可、56席 (カウンター8)、禁煙、最上階の夜景、炭火焼きと生パスタ、ワイン、ウイスキー、ハイボール、鯛の出汁カルパッチョ1,100円、サラダ980〜1,050円、ソフトシェルクラブのフリット1,050円、若鶏の塩唐揚げ750円、チーズ盛り合わせ1,200円、適格請求書 T9130001048471 (株式会社ａｒｇｈａ ｃｏ.)。口コミ (2026年、英語): 鴨川、祇園、東山の眺め、カップルシート、ハラミステーキのコース、茄子とホタテのアラビアータ、白身魚のフリット、ペペロンチーノ、誕生日プレート、カップルの誕生日コース (2名) 10,000円、QRで注文。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=9130001048471', R + 'B528470139/', R + 'B528494211/', R + 'B531255625/', R + 'B532930804/', R + 'B533518099/', R + 'B533983457/', R + 'B537660984/', R + 'B538517757/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; no service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区上大阪町521 エンパイヤビル 10F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010117, 135.770648); cross-checked: GSI 京都府京都市中京区上大阪町521番地 (lot) 42m; 沖縄料理ナンクル食堂 (kyoto_nankuru_shokudo), 1F of the same building, is 7.6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu, tax included; no service charge.', last_checked: TODAY, items: [
      it('', '', 'Sea-bream carpaccio with dashi', '¥1,100', 'Starters', 'ask', 'no', 'Tabelog.', 'carpaccio'),
      it('', '', 'Herb and fresh mozzarella tomato salad', '¥980', 'Salads', 'ask', 'no', 'Tabelog.', 'caprese'),
      it('', '', 'Soft-shell crab fritters with salsa', '¥1,050', 'Fried', 'no', 'no', 'Tabelog.', 'softshell'),
      it('', '', 'Salted chicken kara-age', '¥750', 'Fried', 'no', 'no', 'Tabelog.', 'karaage'),
      it('', '', 'Couple’s birthday course (for two)', '¥10,000', 'Courses', 'ask', 'no', 'July 2026.', 'birthday'),
    ] }, {
    cuisine: '鴨川、祇園、東山を見渡すダイニングバー。炭火焼きと生パスタ、ワイン、ウイスキー、ハイボール (食べログ)・鯛の出汁カルパッチョ1,100円、シーザー、カプレーゼ、生ハムとアボカド、鴨と焼き茄子のサラダ980〜1,050円、ソフトシェルクラブのフリット1,050円、若鶏の塩唐揚げ750円、チーズ盛り合わせ1,200円 (食べログ)・サラダとハラミステーキのコース (2026年8月)・茄子とホタテのアラビアータ、白身魚のフリット、ペペロンチーノ (2026年8月)・誕生日プレートとカップルの誕生日コース (2名) 10,000円 (2026年7・10月)・ノンアルコールのカクテル (2026年10月)',
    neighborhood: '三条の北の木屋町、10階。京阪三条から徒歩3分',
    gf_detail: '要確認。炭火焼きの肉、生パスタ、サラダ、唐揚げ、フリット。グルテンの情報はない (食べログのメニュー、2026年の口コミ)。',
    vegan_detail: '要確認。サラダ、オリーブのマリネ、ナッツ、山芋のわさび漬けがあるが、ドレッシングやチーズについては書かれていない (食べログのメニュー)。',
    notes: '[ダイニングバー・木屋町三条、10階の夜景] 鴨川越しに祇園と東山を望む窓際とカップルシートのある最上階のおしゃれなダイニングバー。炭火焼きの肉、生パスタ、サラダ、フリット、ワインとカクテル。デートや誕生日に人気。サービス料なし、深夜0時まで。',
  });
}

// ================================================================ そば処 大鶴
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002946/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:00', '20:00']); const SA = day(['11:00', '18:00']); const SU = day(['11:00', '15:00']);
  put({
    id: 'kyoto_soba_daitsuru_sanjo', name: 'そば処 大鶴 (Soba Dokoro Daitsuru)', category: 'OMNI',
    lat: 35.008546, lng: 135.763309, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soba and udon in a katsuobushi-and-kombu dashi, ankake dishes, tempura, rice bowls and inari; whether the soba contains wheat is not stated (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is katsuobushi and kombu dashi (January 2026).',
    hours_raw: 'Monday–Friday 11:00–20:00; Saturday 11:00–18:00; Sunday 11:00–15:00 (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 48 seats incl. tatami; a tsubo-niwa garden at the back (Tabelog; January and July 2026). Non-smoking (Tabelog). On the corner of Sanjo and Sakaimachi, 5 min from Karasuma-Oike (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo-Sakaimachi corner — 5 min from Karasuma-Oike',
    cuisine: 'A traditional Kyoto soba and udon shop with a bold dashi of katsuobushi and kombu (January 2026) · oyakodon with kake udon set (January 2026) · tanuki soba with sweet kitsune; big inari sushi; chilled soba (November 2026) · curry udon with fried tofu and green onions (January 2026) · nabeyaki udon with sweet simmered shiitake (December 2025) · nishin soba (September 2026) · konoha-don set with mini cold soba ¥1,390 (October 2026) · cold inaka soba; cold sweet-kitsune soba (October 2026)',
    website: null, gmaps: gm('そば処 大鶴 三条'), menu_url: TB + 'dtlmenu/',
    notes: '[Soba and udon · Sanjo-Sakaimachi, an old family shop] A long-established family-run soba and udon shop on the Sanjo-Sakaimachi corner with a garden at the back, serving homely Kyoto noodles in a rich bonito-and-kombu dashi — nishin soba, tanuki with sweet kitsune, curry udon, nabeyaki — and rice bowls like oyakodon and konoha-don. Cash only; open all day.',
    chef_bio: { chef_name: null, roles: ['Family (unnamed)'], origin: null,
      background: 'A January 2026 reviewer writes that the shop was founded in 1905; a September 2026 reviewer calls it a cozy family-run restaurant; a December 2025 diner remembers it from childhood.',
      philosophy: null, specialty: 'Kyoto soba and udon in bonito-and-kombu dashi.',
      anecdotes: [
        { text: 'A December 2025 diner who had passed it since childhood finally went in for a nabeyaki udon on a cold day.', source: R + 'B518736990/' },
        { text: 'A September 2026 visitor looking for a late lunch at 3 pm found most places shut and was glad to land here for nishin soba.', source: R + 'B536322901/' },
      ],
      japanese_sources_summary: '食べログ: そば処 大鶴、そば、中京区三条通堺町角、地下鉄烏丸御池駅から徒歩5分、月〜金 11:00〜20:00、土 11:00〜18:00、日 11:00〜15:00、カード・電子マネー・QR不可、48席、座敷あり、禁煙。口コミ (2025〜2026年、英語): 1905年創業の老舗とのこと、家族経営、鰹節と昆布の濃い出汁、親子丼とかけうどんのセット、甘いきつねのたぬきそば、大きないなり寿司、カレーうどん、鍋焼きうどん、にしんそば、木の葉丼とミニざるそばのセット1,390円、田舎そば、奥の坪庭。',
      confidence: 'medium', sources: [TB, R + 'B480764125/', R + 'B509736703/', R + 'B518736990/', R + 'B520304698/', R + 'B527329047/', R + 'B532607527/', R + 'B536322901/', R + 'B537675940/', R + 'B537737374/'] },
    cultural_comfort: { level: 'japanese', note: 'Old-style local noodle shop; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通堺町角',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008546, 135.763309); the address has no lot number, so GSI cannot place it; OSM has a restaurant node 大鶴 on Sanjo-dori (桝屋町) 2 m away — kept the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537675940/', R + 'B520304698/'],
    price_note: 'Konoha-don set price from an October 2026 review; no menu on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Nishin soba', '', 'Soba', 'ask', 'no', 'September 2026.', 'nishin'),
      it('', '', 'Curry udon', '', 'Udon', 'no', 'no', 'January 2026.', 'curryudon'),
      it('', '', 'Konoha-don set with mini cold soba', '¥1,390', 'Sets', 'ask', 'no', 'October 2026.', 'konoha'),
      it('', '', 'Oyakodon and kake udon set', '', 'Sets', 'no', 'no', 'January 2026.', 'oyako'),
    ] }, {
    cuisine: '鰹節と昆布の濃い出汁の京都の昔ながらのそば・うどん屋 (2026年1月)・親子丼とかけうどんのセット (2026年1月)・甘いきつねのたぬきそば、大きないなり寿司、冷たいそば (2026年11月)・油揚げと葱のカレーうどん (2026年1月)・甘辛い椎茸の鍋焼きうどん (2025年12月)・にしんそば (2026年9月)・木の葉丼とミニざるそばのセット1,390円 (2026年10月)・冷たい田舎そば、冷たい甘きつねそば (2026年10月)',
    neighborhood: '三条堺町の角。烏丸御池から徒歩5分',
    gf_detail: '要確認。鰹節と昆布の出汁のそばとうどん、あんかけ、天ぷら、丼、いなり。そばに小麦が入るかは書かれていない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁は鰹節と昆布 (2026年1月)。',
    notes: '[そば・うどん・三条堺町、家族の老舗] 三条堺町の角、奥に坪庭のある家族経営の老舗のそば・うどん屋。鰹と昆布の濃い出汁で、にしんそば、甘きつねのたぬき、カレーうどん、鍋焼き、親子丼や木の葉丼も。現金のみ、通し営業。',
  });
}

// Lounge & Bar 1867: drafted by the worker; converted to a skip by the integrator (big-chain hotel, Greg 2026-11-08).
skip('26032412', 'large parent: Lounge & Bar 1867 is the lounge of ダーワ・悠洛 京都, a Dhawa hotel of the Banyan Tree Group (jalan.net yad382807; JPX disclosure 2021-12-27) — big-chain hotel venues are skipped (Greg 2026-11-08)');

// ================================================================ 祇園 粉もん かみ家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26045450/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['15:00', '24:00']); const SA = day(['12:00', '24:00']); const SU = day(['12:00', '22:00']);
  put({
    id: 'kyoto_gion_konamon_kamiya', name: '祇園 粉もん かみ家 (Gion Konamon Kamiya)', category: 'OMNI',
    lat: 35.006825, lng: 135.776222, cuisine_type: 'okonomiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Okonomiyaki and yakisoba are wheat; teppan dashimaki and chicken tataki are also served, but no gluten information is given (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with Kyoto pork and abura-kasu, dashimaki, chicken tataki (2026 reviews).',
    hours_raw: 'Tuesday–Friday 15:00–24:00; Saturday 12:00–24:00; Sunday and holidays 12:00–22:00 (L.O. 30 min before close); closed Monday, and Tuesday when Monday is a holiday (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 14 seats: 6 at the counter and two sunken-kotatsu tables for 4; shoes off (Tabelog; July and September 2026). Non-smoking (Tabelog). In Gion (三吉町), 3 min from the Chion-in-mae bus stop (Tabelog; September 2026). Opened 3 July 2026 (Tabelog).',
    hours: { 1: WK, 2: WK, 3: WK, 4: WK, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Gion (三吉町) — 3 min from Chion-in-mae bus stop',
    cuisine: 'Okonomiyaki and teppan dishes with daily specials, drinks from midday (2026 reviews) · butatama with diced Kyoto pork ¥1,100, plus abura-kasu ¥400 (September 2026) · teppan dashimaki with pickled ginger ¥680 (July and September 2026) · Kyoto Akadori chicken tataki with ponzu and sudachi (September 2026) · octopus sashimi with plum sauce or soy (July 2026) · yakisoba (July 2026)',
    website: null, gmaps: gm('祇園 粉もん かみ家'), menu_url: TB + 'dtlmenu/',
    notes: '[Okonomiyaki · Gion, a couple’s teppan] A cosy shoes-off okonomiyaki shop opened in July 2026 by a couple: the wife cooks on the teppan, the husband makes the daily specials — Kyoto-pork butatama with abura-kasu, teppan dashimaki, akadori chicken tataki. Drinks from midday at weekends; cash only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Teppan cook, the owner’s wife (unnamed)'], origin: null,
      background: 'A September 2026 reviewer writes that the owner’s wife, who comes from the okonomiyaki shop “Negiyakana Higashi”, cooks on the teppan while the owner makes the daily specials.',
      philosophy: null, specialty: 'Butatama; teppan dashimaki.',
      anecdotes: [
        { text: 'A July 2026 visitor who found it on a friend’s Instagram was surprised to take off shoes and find comfortable kotatsu seats at an okonomiyaki shop.', source: R + 'B532172674/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 粉もん かみ家、お好み焼き、東山区三吉町329-4 第二創久マンション 1F、京阪三条駅から徒歩5分、火〜金 15:00〜24:00、土 12:00〜24:00、日・祝日 12:00〜22:00、月曜定休 (祝日の場合は火曜)、カード・電子マネー・QR不可、14席 (カウンター6、掘りごたつ8)、禁煙、2026年7月3日オープン。口コミ (2026年、英語): 靴を脱ぐ店、掘りごたつ、奥さんが鉄板、ご主人が日替わり、京都ポークの角切りの豚玉1,100円と油かす400円、紅生姜の鉄板だし巻き680円、Kyoto Akadoriのたたき、蛸の刺身 (梅と醤油)、焼きそば、昼から飲める。',
      confidence: 'low', sources: [TB, R + 'B532172674/', R + 'B535361853/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; small counter and kotatsu tables; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区三吉町329-4 第二創久マンション 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated July to November 2026.' },
    pin_source: `Tabelog ${TB} (35.006825, 135.776222); cross-checked: GSI 京都府京都市東山区三吉町329番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535361853/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Butatama (Kyoto pork okonomiyaki)', '¥1,100', 'Okonomiyaki', 'no', 'no', 'September 2026.', 'butatama'),
      it('', '', 'Abura-kasu topping', '¥400', 'Toppings', '', 'no', 'September 2026.', 'aburakasu'),
      it('', '', 'Teppan dashimaki', '¥680', 'Teppan', 'ask', 'no', 'July and September 2026.', 'dashimaki'),
    ] }, {
    cuisine: 'お好み焼きと鉄板料理、日替わりも。昼から飲める (2026年の口コミ)・角切りの京都ポークの豚玉1,100円と油かす400円 (2026年9月)・紅生姜の鉄板だし巻き680円 (2026年7・9月)・Kyoto Akadoriのたたきにポン酢とすだち (2026年9月)・梅だれか醤油の蛸の刺身 (2026年7月)・焼きそば (2026年7月)',
    neighborhood: '祇園。知恩院前バス停から徒歩3分',
    gf_detail: '要確認。お好み焼きと焼きそばは小麦。鉄板のだし巻きや鶏のたたきもあるが、グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。京都ポークと油かすのお好み焼き、だし巻き、鶏のたたき (2026年の口コミ)。',
    notes: '[お好み焼き・祇園、夫婦の鉄板] 2026年7月に夫婦で開いた、靴を脱いで上がる居心地のよいお好み焼きの店。奥さんが鉄板、ご主人が日替わりを担当: 京都ポークと油かすの豚玉、鉄板だし巻き、Kyoto Akadoriのたたき。週末は昼から飲める。現金のみ、月曜定休。',
  });
}

save();
