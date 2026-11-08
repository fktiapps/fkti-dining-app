// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 70.
//   + 末廣 Suehiro (fugu specialist by the Takase river since 1949, third generation)
//   + ぎをん や満文 青木庵 Gion Yamabun Aokian (Kyoto cooking in a machiya south of Ichiriki, courses with sake)
//   + 寿司 沼本 Sushi Numoto (seven-seat Edomae sushi counter in Gion, omakase ¥19,800)
//   - 大起水産 回転寿司, 吟醸マグロ, Bar FLAT, New Bird 烏丸店, GODIVA Bakery ゴディパン, 長谷縁, ザ ロイヤルパークホテル 京都三条,
//     明治屋 京都三條ストアー, 京都・六角 蕪村庵 京都大丸店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26030630 (skipped), 26042396 (skipped),
//   26000888, 26042648 (skipped), 26043098 (skipped), 26005838, 26044076 (skipped), 26032394, 26042078 (skipped),
//   26019188 (skipped), 26024900 (skipped), 26017970 (skipped).
//   queue-status.jsonl grepped for each brand (大起水産, 吟醸マグロ, 末廣, FLAT, New Bird, や満文/青木庵, GODIVA, 沼本, 長谷縁,
//   ロイヤルパーク, 明治屋, 蕪村庵): no earlier rulings.
//   Data check: none of the three drafted is in data/kyoto.json by name or address (材木町430, 祇園町南側570-125,
//   祇園町北側343). 末廣 (kyoto_suehiro_teramachi) on Teramachi Nijo is a different shop; this one’s invoice holder is an
//   individual (NTA register). お茶と晴ル (kyoto_ocha_to_haru) shares the lot 570-125 with 青木庵, 26 m from its pin.
//   Same-name count (same brand or operator only): one shop each. Large-parent list checked.
//   Service charges, checked against Tabelog’s Japanese original: 青木庵 サービス料10%; 末廣 なし (Tabelog’s English wrongly
//   says a charge is added); none listed for 沼本.
//   Other-diner remarks (Greg 2026-11-06): a single February 2026 note that 沼本’s other guests were mostly from abroad is
//   left out.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-70');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26030630', '大起水産 回転寿司 河原町三条店: chain — Tabelog’s name search lists many 大起水産 shops (kaiten sushi, maguro dining, kaisen-don) across Osaka, Nara, Hyogo and Kyoto');
skip('26042396', 'マグロ・日本酒専門 吟醸マグロ 京都四条高倉店: chain — Tabelog’s name search lists 吟醸マグロ shops in Musashikosugi, Shinagawa, Nagoya (two), Toyota, Sendai and Kyoto');
skip('26042648', 'Bar FLAT: no reviews on Tabelog');
skip('26043098', 'New Bird 烏丸店: not a place to eat — a bakery counter with no seats listed on Tabelog; a reviewer notes eat-in is at the main store, not here');
skip('26044076', 'GODIVA Bakery ゴディパン 京都四条店: large parent — a GODIVA bakery brand; Tabelog lists many GODIVA cafés and shops nationwide');
skip('26042078', '長谷縁: no reviews on Tabelog');
skip('26019188', 'ザ ロイヤルパークホテル 京都三条: a hotel listing, not a restaurant (Tabelog category Hotel)');
skip('26024900', '明治屋 京都三條ストアー: not a place to eat — a supermarket');
skip('26017970', '京都・六角 蕪村庵 京都大丸店: not a place to eat and a chain — a senbei and sweets counter in Daimaru; Tabelog lists 蕪村庵 counters in Ikebukuro, Fukuoka, Yokkaichi, Kofu, Nishinomiya, Senboku and elsewhere');

// ================================================================ 末廣
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000888/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_suehiro_fugu_kiyamachi', name: '末廣 (Suehiro, fugu)', category: 'OMNI',
    lat: 34.998243, lng: 135.768421, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fugu sashimi with house ponzu, fugu kara-age, grilled fugu, hot pot and zosui; no gluten information (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fugu restaurant — sashimi, fried, grilled and hot-pot fugu, shirako (Tabelog).',
    hours_raw: '17:00–22:00 daily (L.O. food 21:00, drinks 21:30); closed on irregular days, and may close over New Year and in summer (Tabelog). Reservations recommended so fish can be bought and prepared to time; give a daytime phone number or the name of your hotel (Tabelog). No service charge (Tabelog, original なし). Cards, e-money and QR (Tabelog). 38 seats, a counter and private rooms; non-smoking, smoking on the balcony (Tabelog; September 2025). On Kiyamachi south of Matsubara by the Takase river, just north of the west end of Gojo bridge, 7 min from Keihan Kiyomizu-Gojo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi south of Matsubara, by the Takase — 7 min from Keihan Kiyomizu-Gojo',
    cuisine: 'Fugu since 1949: the fish is rested for over half a day after preparing; ponzu of fresh-squeezed daidai juice aged over six months (Tabelog) · Suehiro course ¥11,000 — tessa sashimi, kara-age, grilled fugu, tecchiri hot pot (Tabelog) · à la carte: fugu sashimi ¥3,000, hot pot ¥4,200, kara-age ¥3,000, grilled fugu ¥3,600, bone stew ¥3,000, zosui ¥980 (Tabelog) · shirako in winter, as sashimi, grilled or in the pot, at market price (Tabelog) · Ume course of sashimi, grilled fugu and zosui at the counter (September 2025) · hire-zake (November 2026)',
    website: null, gmaps: gm('末廣 ふぐ 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Fugu · Kiyamachi by the Takase, since 1949] A third-generation fugu restaurant on the Takase river near Gojo bridge, with a counter for solo diners and private rooms: tessa sashimi with house daidai ponzu, kara-age, rare grilled fugu and tecchiri hot pot finished as zosui — the full course ¥11,000 — plus shirako in winter and hire-zake. No service charge.',
    chef_bio: { chef_name: '上田 路実 (reading not sourced)', roles: ['Owner (the invoice holder)'], origin: null,
      background: 'Tabelog’s shop text says the restaurant was founded in 1949 and has served fugu for three generations. Tabelog’s invoice number T8810003331402 is registered to an individual, 上田 路実 (NTA register).',
      philosophy: 'Fugu is rested for over half a day after preparing to bring out its taste; reservations let the shop time its buying and preparation (Tabelog).', specialty: 'Grilled fugu; tecchiri.',
      anecdotes: [
        { text: 'A September 2025 visitor who knows the owner finally came, alone, and ate the Ume course of sashimi, grilled fugu and zosui at the counter.', source: R + 'B513794322/' },
        { text: 'A November 2026 visitor is taken here every year by two senior colleagues after an industry event in Kyoto, and praises the hire-zake.', source: R + 'B538847083/' },
      ],
      japanese_sources_summary: '食べログ: 末廣、ふぐ・鍋・海鮮、下京区木屋町通松原下る材木町430、京阪清水五条駅から徒歩7分、毎日 17:00〜22:00 (L.O.料理21:00、飲物21:30)、不定休、年末年始と夏季休業あり、サービス料なし、カード・電子マネー・QR可、38席、個室あり、禁煙 (バルコニーで喫煙可)、高瀬川沿い、五条大橋西詰の北、1949年創業、三代続くふぐ料理、さばいてから半日以上寝かせる、完熟の橙を搾り6か月以上寝かせた自家製ポン酢、末廣コース11,000円 (てっさ、唐揚げ、焼きふぐ、てっちり)、てっさ3,000円、てっちり4,200円、焼きふぐ3,600円、ふぐ雑炊980円、冬季の白子、適格請求書 T8810003331402 (上田 路実)。口コミ (2025〜2026年、英語): 梅コース、カウンターで一人でも、ひれ酒、白子。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=8810003331402', R + 'B504555342/', R + 'B513794322/', R + 'B538847083/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter or private rooms; the shop asks for a daytime phone number or hotel name when booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通松原下る材木町430',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.998243, 135.768421); cross-checked: GSI 京都府京都市下京区材木町430番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', TB],
    price_note: 'Prices from Tabelog, tax included; no service charge.', last_checked: TODAY, items: [
      it('', '', 'Suehiro course (tessa, kara-age, grilled fugu, tecchiri)', '¥11,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'Fugu sashimi (tessa)', '¥3,000', 'À la carte', 'ask', 'no', 'Tabelog.', 'tessa'),
      it('', '', 'Fugu hot pot (tecchiri)', '¥4,200', 'À la carte', 'ask', 'no', 'Tabelog.', 'tecchiri'),
      it('', '', 'Grilled fugu', '¥3,600', 'À la carte', 'ask', 'no', 'Tabelog.', 'yakifugu'),
      it('', '', 'Fugu kara-age', '¥3,000', 'À la carte', 'ask', 'no', 'Tabelog.', 'karaage'),
      it('', '', 'Fugu zosui', '¥980', 'À la carte', 'ask', 'no', 'Tabelog.', 'zosui'),
    ] }, {
    cuisine: '1949年からのふぐ。さばいてから半日以上寝かせ、完熟の橙を搾って6か月以上寝かせた自家製ポン酢で (食べログ)・てっさ、唐揚げ、焼きふぐ、てっちりの末廣コース11,000円 (食べログ)・アラカルト: てっさ3,000円、てっちり4,200円、唐揚げ3,000円、焼きふぐ3,600円、アラ煮3,000円、雑炊980円 (食べログ)・冬は白子を刺身、焼き、鍋で、時価 (食べログ)・カウンターで刺身、焼きふぐ、雑炊の梅コース (2025年9月)・ひれ酒 (2026年11月)',
    neighborhood: '松原下ルの木屋町、高瀬川沿い。京阪清水五条から徒歩7分',
    gf_detail: '要確認。自家製ポン酢のてっさ、唐揚げ、焼きふぐ、鍋、雑炊。グルテンの情報はない (食べログ)。',
    vegan_detail: 'ヴィーガンではない。ふぐの刺身、揚げ物、焼き物、鍋、白子の店 (食べログ)。',
    notes: '[ふぐ・高瀬川沿いの木屋町、1949年創業] 五条大橋近くの高瀬川沿い、三代続くふぐの店。一人でも座れるカウンターと個室。自家製の橙ポン酢のてっさ、唐揚げ、珍しい焼きふぐ、雑炊で締めるてっちりのコースが11,000円。冬は白子、ひれ酒も。サービス料なし。',
  });
}

// ================================================================ ぎをん や満文 青木庵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005838/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_gion_yamabun_aokian', name: 'ぎをん や満文 青木庵 (Gion Yamabun Aokian)', category: 'OMNI',
    lat: 35.003304, lng: 135.775432, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto courses built on rich dashi, with seasonal vegetables and fish; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the cooking is built on dashi, with fish in the courses (Tabelog).',
    hours_raw: '12:00–14:00 and 17:00–23:00 (L.O. 22:00) daily (Tabelog). Reservations accepted (Tabelog). Service charge 10% (Tabelog, original サービス料10%). Cards: JCB and AMEX only; no e-money (Tabelog). 32 seats in private rooms for 2 to 20 (Tabelog). Designated smoking area (Tabelog). In an old Kyoto townhouse with a small garden just off Hanamikoji, south of Ichiriki, 4 min from Keihan Gion-Shijo (Tabelog; July 2026). One January 2025 diner found the rooms cold in winter.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion south of Ichiriki, off Hanamikoji — 4 min from Keihan Gion-Shijo',
    cuisine: 'Unpretentious Kyoto cooking on rich dashi, with seasonal vegetables and fish and selected sake; chef’s courses from ¥3,000, set to your budget for groups (Tabelog) · ¥7,000 course; online courses of ¥6,000 or ¥7,000 with all-you-can-drink; reasonable lunches (October 2025) · ¥10,500 all-you-can-drink course with a sake list that drew cheers, dishes in small charming vessels (January 2025) · three-tier New Year osechi (January 2026) · refined dishes for a business dinner in a townhouse with a tsubo-niwa (July 2026)',
    website: 'http://yamabun.okoshi-yasu.com/index.html', gmaps: gm('や満文 青木庵'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto cooking · Gion south of Ichiriki, a townhouse with private rooms] A homely Gion townhouse with a small garden and private rooms for 2 to 20, serving dashi-rich Kyoto courses from about ¥3,000 to all-you-can-drink sake courses at ¥6,000–10,500 — a favourite for business dinners and parties. 10% service charge; JCB and AMEX only.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes a relaxed, homely place known for good, reasonably priced Kyoto food. An October 2025 regular, back after six years, was glad to see the same head chef.',
      philosophy: 'Kyoto dishes that bring out the ingredients with plenty of dashi, served without pretension (Tabelog).', specialty: 'Kyoto courses with sake.',
      anecdotes: [
        { text: 'At a January 2025 work New Year party, the sake fans at the table cheered when the drink list arrived.', source: R + 'B498824616/' },
        { text: 'An October 2025 regular back after six years, who had ordered the osechi before, found eating in quite different and was glad the head chef was still there.', source: R + 'B504354526/' },
      ],
      japanese_sources_summary: '食べログ: ぎをん や満文 青木庵、日本料理、東山区祇園町南側570-125 (一力南)、京阪四条駅から4分、12:00〜14:00、17:00〜23:00 (L.O.22:00)、サービス料10%、カードはJCBとAMEX、32席、2〜20名の個室、喫煙所あり、おまかせコース3,000円から、予算に応じて、出汁をきかせた京料理、季節の野菜と魚、厳選した日本酒、町家。口コミ (2025〜2026年、英語): 飲み放題付き10,500円のコース、かわいい器、7,000円のコース、6,000円・7,000円の飲み放題コース、手頃なランチ、変わらぬ料理長、三段のおせち、坪庭のある町家、接待に。',
      confidence: 'medium', sources: [TB, R + 'B498824616/', R + 'B504354526/', R + 'B520002574/', R + 'B524503485/', R + 'B530706779/', R + 'B532634735/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms in a townhouse; 10% service charge; JCB and AMEX only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-125',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.003304, 135.775432); GSI 京都府京都市東山区祇園町南側570番地 is a large lot whose point sits 129 m west; OSM reverse gives 一力亭, 花見小路, 祇園町南側, matching the address note “一力南” — kept the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B504354526/', R + 'B498824616/'],
    price_note: 'Course prices from Tabelog and 2025 reviews; 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Chef’s course', 'from ¥3,000', 'Courses', 'ask', 'no', 'Tabelog.', 'omakase'),
      it('', '', 'Course with all-you-can-drink', '¥6,000–7,000', 'Courses', 'ask', 'no', 'October 2025.', 'nomihodai'),
      it('', '', 'All-you-can-drink sake course', '¥10,500', 'Courses', 'ask', 'no', 'January 2025.', 'sake'),
    ] }, {
    cuisine: '出汁をきかせた気取らない京料理、季節の野菜と魚、厳選した日本酒。おまかせコース3,000円から、団体は予算に応じて (食べログ)・7,000円のコース、飲み放題付きの6,000円・7,000円のコース、手頃なランチ (2025年10月)・日本酒好きが歓声を上げた飲み放題付き10,500円のコース、かわいい器 (2025年1月)・三段のおせち (2026年1月)・坪庭のある町家で接待向きの上品な料理 (2026年7月)',
    neighborhood: '花見小路沿い、一力の南の祇園。京阪祇園四条から徒歩4分',
    gf_detail: '要確認。出汁をきかせた京料理のコース、季節の野菜と魚。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。料理は出汁が基本で、コースに魚 (食べログ)。',
    notes: '[京料理・一力の南の祇園、個室のある町家] 坪庭と2〜20名の個室のある祇園の家庭的な町家。出汁のきいた京料理のコースを、約3,000円から飲み放題付きの6,000〜10,500円まで。接待や宴会に人気。サービス料10%、カードはJCBとAMEXのみ。',
  });
}

// ================================================================ 寿司 沼本
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26032394/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_sushi_numoto_gion', name: '寿司 沼本 (Sushi Numoto)', category: 'OMNI',
    lat: 35.004338, lng: 135.775545, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase of small dishes and Edomae nigiri; no gluten information (Tabelog; February 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi omakase of fish and seafood (Tabelog; February 2026).',
    hours_raw: 'Monday–Saturday and the days before and after holidays 18:00–22:00 (L.O. 21:30); closed Sunday and holidays (Tabelog). Reservations accepted, one course per person (Tabelog). Cards incl. UnionPay; no e-money or QR (Tabelog). 7 counter seats (Tabelog). Non-smoking (Tabelog). On the 4th floor of 祗園プラザビル near Yasaka Shrine, 5 min from Keihan Gion-Shijo (Tabelog; February 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north of Shijo, near Yasaka Shrine — 5 min from Keihan Gion-Shijo',
    cuisine: 'Edomae sushi of Kyoto rice and seasonal fish the owner picks at Kyoto’s central market, with tuna sent direct from Toyosu (Tabelog) · special omakase of small dishes, sushi of specially sourced fish and seasonal ice cream ¥19,800; a children’s menu of sashimi, nigiri and ice cream ¥4,400 (Tabelog) · seiko crab, shirako, homemade karasumi and ankimo before the nigiri; extra ikura (February 2026) · wine and champagne chosen by a sommelier and sake by a sake-diploma holder (Tabelog)',
    website: null, gmaps: gm('寿司 沼本 祇園'), menu_url: TB + 'dtlmenu/',
    notes: '[Sushi · Gion near Yasaka Shrine, a seven-seat counter] A seven-seat counter on an upper floor of a Gion building, where the owner buys at Kyoto’s market, takes tuna from Toyosu and makes Edomae sushi on Kyoto rice — a ¥19,800 omakase of small dishes, nigiri and seasonal ice cream, with a children’s menu. One course per person; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Tabelog’s shop text says the owner visits Kyoto’s central market to choose seasonal fish and has tuna delivered from Toyosu; wines are picked by a sommelier and sake by a sake-diploma holder. A February 2026 diner saw the chef working solo without a break.',
      philosophy: null, specialty: 'Edomae sushi omakase.',
      anecdotes: [
        { text: 'A February 2026 pair began with seiko crab and shirako on the ¥19,800 course, added ikura, and left with a gift of sesame from a Shijo shop.', source: R + 'B518078669/' },
      ],
      japanese_sources_summary: '食べログ: 寿司 沼本、寿司、東山区祇園町北側343 祗園プラザビル 4F、京阪祇園四条駅から徒歩5分、月〜土・祝前日・祝後日 18:00〜22:00 (L.O.21:30)、日・祝定休、予約は1人1コース、カード可、カウンター7席、禁煙、京都の米と旬の鮮魚の江戸前寿司、店主が京都の中央市場で仕入れ、鮪は豊洲から直送、ソムリエのワインとシャンパン、日本酒ディプロマの日本酒、特別おまかせコース19,800円、お子様メニュー4,400円。口コミ (2026年2月、英語): セイコガニ、白子、自家製からすみ、あん肝、追加のいくら、一人で握る大将。',
      confidence: 'low', sources: [TB, TB + 'party/', R + 'B516791932/', R + 'B518078669/', R + 'B537947885/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; one course per person.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側343 祗園プラザビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004338, 135.775545); cross-checked: GSI 京都府京都市東山区祇園町北側343番地 (lot) 32m; kyoto_fujiishi_gion (ギオンプラザビル 5F) is 8.9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'party/'],
    price_note: 'Course prices from Tabelog, tax included.', last_checked: TODAY, items: [
      it('', '', 'Special omakase (small dishes, sushi, seasonal ice cream)', '¥19,800', 'Courses', 'ask', 'no', 'Tabelog; February 2026.', 'omakase'),
      it('', '', 'Children’s menu (sashimi, nigiri, ice cream)', '¥4,400', 'Courses', 'ask', 'no', 'Tabelog.', 'kids'),
    ] }, {
    cuisine: '京都の米と、店主が京都の中央市場で選ぶ旬の魚、豊洲直送の鮪の江戸前寿司 (食べログ)・一品、厳選したネタの寿司、季節のアイスの特別おまかせ19,800円、刺身、握り、アイスのお子様メニュー4,400円 (食べログ)・握りの前にセイコガニ、白子、自家製からすみ、あん肝。いくらの追加も (2026年2月)・ソムリエが選ぶワインとシャンパン、日本酒ディプロマ保持者が選ぶ日本酒 (食べログ)',
    neighborhood: '四条の北の祇園、八坂神社の近く。京阪祇園四条から徒歩5分',
    gf_detail: '要確認。一品と江戸前の握りのおまかせ。グルテンの情報はない (食べログ、2026年2月)。',
    vegan_detail: 'ヴィーガンではない。魚と魚介の寿司のおまかせ (食べログ、2026年2月)。',
    notes: '[寿司・八坂神社近くの祇園、カウンター7席] 祇園のビルの上階にある7席のカウンター。店主が京都の市場で仕入れ、鮪は豊洲から。京都の米で江戸前寿司を握る。一品、握り、季節のアイスの19,800円のおまかせ、お子様メニューも。1人1コース、日曜定休。',
  });
}

save();
