// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 90.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 綴 ainomachi Tsuzuri Ainomachi (Kyoto izakaya near Karasuma-Oike with a long sake list)
//   + 広島鉄板 叶夢 Hiroshima Teppan Kamu (Hiroshima-style okonomiyaki and teppan on Matsubara)
//   - アップリンク京都 — not a restaurant: a cinema (Uplink Kyoto, in Shinpuhkan) whose concession sells popcorn and drinks
//   - 日本文化体験 庵 — not a restaurant: a booked cultural-experience centre (matcha and wagashi workshops) — flagged
//   - ホリーズ・カフェ 四条室町店 — chain: ホリーズカフェ (already ruled a chain, 26012977)
//   + 八百三 Yaosan (historic yuzu-miso shop; take-home, qualifies as a famous old shop with a sourced founding date)
//   + 雑魚や 本店 Zakoya Honten (seafood-bowl lunch and izakaya off Rokkaku; reopened July 2026)
//   - 京都ぷりん堂 — retail food shop (Greg 11-07 ruling): a take-home pudding shop opened May 2024 by a kimono firm; no sourced GF
//     or vegan options
//   Brand checks: none in data or queue-status by name (data has other "zakoya" shops — 雑鼓や, ざこや, 雑小屋, ザコヤ — none of them
//   this 雑魚や, and nothing for its old listing 26023181 夢処 漁師めし 雑魚や); no other 叶夢 found (macaro-ni, byfood); 雑魚や 本店 is the
//   renamed 夢処 漁師めし 雑魚や (PR TIMES, July 2026), one shop. None is a THAN or WILL brand. None is in a hotel.
//   Service charges from Tabelog's Japanese original: 叶夢 「付だし(焼き野菜)400円」; the other three have no section.
//   Pins (checked against main, hidden records included): all four ≥ 16m from every record; no offsets.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-90');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26034569', 'not a restaurant: アップリンク京都 is a cinema (in 新風館 B1F) whose concession sells popcorn and drinks (2025 reviews)');
skip('26027771', 'not a restaurant: 日本文化体験 庵 is a reservation-only cultural-experience centre for matcha and wagashi workshops (2025–26 reviews)');
skip('26003801', 'chain: ホリーズカフェ (already ruled a chain, 26012977 osw8-51: 16 shops in our crawls)');
skip('26041421', 'retail food shop (Greg 11-07 ruling): 京都ぷりん堂 is a take-home pudding shop opened 30 May 2024 by a kimono firm (April 2026 review); no sourced GF or vegan options');

// ================================================================ 綴 ainomachi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007731/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.tsuzuri-ainomachi.com';
  const D = day(['17:30', '22:30']);
  put({
    id: 'kyoto_tsuzuri_ainomachi', name: '綴 ainomachi (Tsuzuri Ainomachi)', category: 'OMNI',
    lat: 35.010333, lng: 135.761571, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese izakaya dishes with dashi and soy; nama-fu and fried dishes are on the menu (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Morokyu, water aubergine and yuba salad (2026 reviews), but dashi is likely.',
    hours_raw: 'Mon–Sat 17:30–22:30 (L.O. 21:45); closed Sundays, holidays and some irregular days — check Google or Instagram (Tabelog). Cards (Tabelog). 30 seats: sunken kotatsu, counter and tables; groups up to 50 (Tabelog; February 2026 review). Smaller portions on request; off-menu dishes (October 2026 review). 2 min from Karasuma-Oike exit 3-2 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ainomachi-Oike — 2 min from Karasuma-Oike Stn',
    cuisine: 'Kyoto izakaya cooking with a long sake list: chawanmushi to start, dashimaki, shrimp and celery salad (September 2026); grilled hamo sashimi, morokyu, water aubergine, duck tsukune hot pot (June 2026); grilled nama-fu, unagi maki, fried octopus, crispy yuba salad (June 2026); oysters with green onion (February 2026); Kyoto and other sake such as Shonai Bijin and Joyo; about ¥4,000–8,000',
    website: WEB, gmaps: gm('綴 ainomachi'), menu_url: null,
    notes: '[Izakaya · Karasuma-Oike] A friendly neighbourhood izakaya near Karasuma-Oike, loved by regulars, with careful Kyoto dishes, a big sake and drinks list, smaller portions on request and summer hamo. About ¥4,000–8,000.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A friendly manager and attentive owner with many regulars (June and October 2026 reviews).',
      philosophy: null,
      specialty: 'Dashimaki; hamo in summer.',
      anecdotes: [
        { text: 'A February 2026 parent visiting a university-student daughter came on the daughter\'s recommendation and planned to return many times.', source: R + 'B522375950/' },
        { text: 'An October 2026 regular asked for smaller portions to try more dishes, and was told to ask about off-menu items.', source: R + 'B538016582/' },
      ],
      japanese_sources_summary: '食べログ: 綴 ainomachi、日本料理・居酒屋、中京区綿屋町528 鳥丸エルビル1F、烏丸御池駅3-2出口から徒歩2分、月〜土 17:30〜22:30 (L.O. 21:45)、日曜・祝日休み、不定休あり、カード可、30席。口コミ (2026年、英語): 掘りごたつ・カウンター・テーブル、豊富な日本酒、茶碗蒸し、だし巻き、海老とセロリのサラダ、もろきゅう、水なす、鴨のつくね鍋、生麩、unagi maki、量の調整も可、常連が多い。',
      confidence: 'medium', sources: [TB, WEB, R + 'B522375950/', R + 'B523253203/', R + 'B529507363/', R + 'B529976463/', R + 'B535823590/', R + 'B538016582/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask about off-menu dishes and portion sizes (October 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区間之町通御池下ル綿屋町528 鳥丸エルビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010333, 135.761571); cross-checked: GSI 京都府京都市中京区綿屋町528番地 (lot) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529976463/', R + 'B535823590/'],
    price_note: 'No item prices; reviews give ¥4,000–8,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Dashimaki', '', 'A la carte', 'ask', 'no', 'September 2026 review.', 'dashimaki'),
      it('', '', 'Duck tsukune hot pot', '', 'A la carte', 'ask', 'no', 'June 2026 review.', 'kamo_nabe'),
    ] }, {
    cuisine: '豊富な日本酒と京都の居酒屋の料理: 先付の茶碗蒸し、だし巻き、海老とセロリのサラダ (2026年9月)、炙った hamo の刺身、もろきゅう、水なす、鴨のつくね鍋 (2026年6月)、焼き生麩、unagi maki、タコの唐揚げ、パリパリの湯葉のサラダ (2026年6月)、牡蠣とねぎ (2026年2月)、京都などの日本酒、4,000〜8,000円ほど',
    neighborhood: '間之町御池。烏丸御池駅から徒歩2分',
    gf_detail: '要確認。出汁と醤油を使う居酒屋の料理。生麩と揚げ物もある (2026年の口コミ)。',
    vegan_detail: '要確認。もろきゅう、水なす、湯葉のサラダ (2026年の口コミ) があるが、出汁を使う可能性が高い。',
    notes: '[居酒屋・烏丸御池] 常連に愛される烏丸御池の気さくな居酒屋。丁寧な京都の料理、豊富な日本酒、量の調整もでき、夏は hamo。4,000〜8,000円ほど。',
  });
}

// ================================================================ 広島鉄板 叶夢
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020523/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:30'], ['17:30', '23:00']);
  put({
    id: 'kyoto_hiroshima_teppan_kamu', name: '広島鉄板 叶夢 (Hiroshima Teppan Kamu)', category: 'OMNI',
    lat: 34.998924, lng: 135.759266, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Hiroshima-style okonomiyaki is layered on wheat noodles and batter (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with pork, egg and sauce; grilled teppan dishes (2026 reviews).',
    hours_raw: 'Mon–Sat and the days around holidays 11:30–14:30 (L.O. 14:00) and 17:30–23:00 (L.O. food 22:00, drinks 22:30); holidays dinner only; closed Sundays (Tabelog). Cover: grilled vegetables ¥400 (Tabelog Japanese original 「付だし(焼き野菜)400円」). Order by QR code (August 2026 review). 66 seats: counter, sunken-kotatsu seats, private rooms facing a courtyard and a 2nd-floor tatami room for 20–30 (Tabelog; August 2026 review). On Matsubara west of Karasuma, 5 min from Gojo or Shijo (Tabelog; August 2026 review).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: LD, 5: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Matsubara — 5 min from Gojo or Shijo Stn',
    cuisine: 'Hiroshima-style okonomiyaki with noodles from Hiroshima and local vegetables: the okonomiyaki lunch set with rice ¥1,000 (September 2026); Yume-yaki with kone, mochi, pork and cheese (September 2026); yakisoba, teppan dashimaki, teppan edamame, local vegetable salad (October 2026); a ¥5,000 course with all-you-can-drink (October 2026); about ¥1,000 at lunch, ¥2,000–4,000 at dinner',
    website: null, gmaps: gm('広島鉄板 叶夢 京都'), menu_url: null,
    notes: '[Okonomiyaki · Karasuma-Matsubara] A long, retro teppan house south of Shijo-Karasuma for Hiroshima-style okonomiyaki on noodles from Hiroshima, grilled at the counter: a ¥1,000 lunch set with rice, teppan dishes and drinks at night, and private rooms by a courtyard.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Serves Hiroshima-style okonomiyaki and teppan dishes with noodles shipped from Hiroshima and fresh local vegetables (August 2026 review).',
      philosophy: null,
      specialty: 'Hiroshima-style okonomiyaki.',
      anecdotes: [
        { text: 'A September 2026 business traveller dining alone ordered the Yume-yaki with kone, mochi, pork and cheese, and liked the boiled-then-grilled noodles.', source: R + 'B536317033/' },
        { text: 'A September 2026 lunch guest found the okonomiyaki set came with rice, with a bigger portion free.', source: R + 'B537444917/' },
      ],
      japanese_sources_summary: '食べログ: 広島鉄板 叶夢、お好み焼き・居酒屋・鉄板焼き、下京区玉津島町315、地下鉄五条駅から徒歩5分、四条駅から徒歩6分、月〜土 11:30〜14:30・17:30〜23:00、祝日は夜のみ、日曜休み、お通し (焼き野菜) 400円、66席、2階の座敷は20〜30名で貸切、中庭の見える個室。口コミ (2026年、英語): 広島風のお好み焼き、広島から取り寄せる麺、地元の野菜、昼の定食1,000円、焼きそば、鉄板のだし巻き、QR で注文。',
      confidence: 'medium', sources: [TB, R + 'B534474451/', R + 'B534518636/', R + 'B535792688/', R + 'B536317033/', R + 'B536976437/', R + 'B537444917/', R + 'B537670960/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering (August 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区玉津島町315',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB} (34.998924, 135.759266); cross-checked: GSI 京都府京都市下京区玉津島町315番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535792688/', R + 'B536976437/'],
    price_note: 'Prices from September and October 2026 reviews; ¥400 cover.', last_checked: TODAY, items: [
      it('', '', 'Hiroshima-style okonomiyaki set (lunch, with rice)', '¥1,000', 'Lunch', 'no', 'no', 'September 2026 review.', 'lunch_set'),
      it('', '', 'Course with all-you-can-drink', '¥5,000', 'Courses', 'no', 'no', 'October 2026 review.', 'course'),
    ] }, {
    cuisine: '広島から取り寄せる麺と地元の野菜の広島風お好み焼き: ご飯つきのお好み焼きの昼の定食1,000円 (2026年9月)、kone、餅、豚、チーズの Yume-yaki (2026年9月)、焼きそば、鉄板のだし巻き、鉄板の枝豆、地元の野菜のサラダ (2026年10月)、飲み放題つきの5,000円のコース (2026年10月)、昼は1,000円ほど、夜は2,000〜4,000円ほど',
    neighborhood: '烏丸松原。五条駅か四条駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。広島風のお好み焼きは麺と小麦の生地を重ねる (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、卵、ソースのお好み焼き、鉄板焼き (2026年の口コミ)。',
    notes: '[お好み焼き・烏丸松原] 四条烏丸の南のレトロで細長い鉄板の店。広島から取り寄せる麺の広島風お好み焼きをカウンターで焼く。昼はご飯つき1,000円、夜は鉄板焼きとお酒、中庭の見える個室も。',
  });
}

// ================================================================ 八百三
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26023781/'; const R = TB + 'dtlrvwlst/';
  const MP = 'https://www.mapple.net/region/a0502010100_g02060e00/spot/';
  const RR = 'https://rurubu.jp/andmore/article/19862';
  const D = day(['10:00', '17:00']);
  put({
    id: 'kyoto_yaosan_yuzu_miso', name: '八百三 (Yaosan)', category: 'OMNI',
    lat: 35.009965, lng: 135.760864, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yuzu miso and Kyoto white miso; the ingredients are not listed in our sources.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Yuzu miso and white miso; the ingredients are not listed in our sources.',
    hours_raw: 'Mon, Tue, Wed, Fri, Sat 10:00–17:00; closed Thursdays and Sundays; hours may change (Tabelog). A take-home shop selling one product, yuzu miso, in several container sizes, plus Kyoto white miso (2022–25 reviews). QR payments; no e-money (Tabelog). In a traditional machiya on Anekoji west of Higashinotoin, under a sign carved by Kitaoji Rosanjin, 1 min from Karasuma-Oike (Tabelog; rurubu; December 2025 review).',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Anekoji-Higashinotoin — 1 min from Karasuma-Oike Stn',
    cuisine: 'Take-home yuzu miso, made the same way since the 18th century (mapple), sold in one recipe and several sizes; Kyoto white miso (2025–26 reviews); good with yudofu, grilled tofu, aburaage, cucumber or rice (2022 and December 2025 reviews)',
    website: null, gmaps: gm('八百三 柚味噌 姉小路'), menu_url: null,
    notes: '[Yuzu miso · Karasuma-Oike] A machiya shop that has sold a single product — yuzu miso — for about 300 years, under a sign by Rosanjin, who favoured it. A take-home Kyoto classic for yudofu and grilled tofu.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Founded in the Horeki era (1751–1764), making yuzu miso the same way ever since (mapple); about 300 years of selling yuzu miso, one product passed down from parent to one child, under a sign written and carved by Rosanjin (rurubu). A May 2022 reviewer gives the founding as 1727, after a founder who traded in vegetables and dried goods trained in shojin cooking.',
      philosophy: 'One product only, made the same way (mapple; rurubu).',
      specialty: 'Yuzu miso.',
      anecdotes: [
        { text: 'A December 2025 visitor was allowed to photograph the original Rosanjin sign inside — the one outside is a replica, another customer explained.', source: R + 'B519807541/' },
        { text: 'A November 2025 passer-by, unsure what the shop was, was walked through the product and how to eat it by the staff.', source: R + 'B516460889/' },
      ],
      japanese_sources_summary: '食べログ: 八百三、日本料理、中京区、烏丸御池駅から徒歩1分、月・火・水・金・土 10:00〜17:00、木・日曜休み、QR 可、電子マネー不可、禁煙。マップル: 1751〜1764年から変わらぬ製法の柚子味噌の老舗。るるぶ: 約300年の老舗、看板商品ひとつを一子相伝、魯山人の自著・自刻の看板。口コミ (2022〜2025年、英語): 柚味噌だけを売る、京都の白味噌、湯豆腐に。',
      confidence: 'medium', sources: [TB, MP, RR, R + 'B449704304/', R + 'B504814061/', R + 'B516460889/', R + 'B519807541/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the product (November 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区姉小路通東洞院西入ル車屋町270',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through December 2025 in the shop (a 2026 review is of a department-store purchase).' },
    pin_source: `Tabelog ${TB} (35.009965, 135.760864); cross-checked: GSI 京都府京都市中京区車屋町270番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B449704304/', R + 'B504814061/'],
    price_note: 'No prices in our sources; sold in several container sizes (May 2022 review).', last_checked: TODAY, items: [
      it('', '', 'Yuzu miso (take-home)', '', 'Take-home', 'ask', 'ask', '2022–25 reviews.', 'yuzu_miso'),
      it('', '', 'Kyoto white miso (take-home)', '', 'Take-home', 'ask', 'ask', 'April 2025 review.', 'shiro_miso'),
    ] }, {
    cuisine: '持ち帰りの柚子味噌。18世紀から変わらぬ製法 (マップル)、ひとつの味をいくつかの大きさで。京都の白味噌 (2025〜26年の口コミ)。湯豆腐、焼き豆腐、油揚げ、きゅうり、ご飯に (2022年、2025年12月の口コミ)',
    neighborhood: '姉小路東洞院。烏丸御池駅から徒歩1分',
    gf_detail: '要確認。柚子味噌と京都の白味噌。原材料は情報源に記載なし。',
    vegan_detail: '要確認。柚子味噌と白味噌。原材料は情報源に記載なし。',
    notes: '[柚子味噌・烏丸御池] 約300年、柚子味噌ひとつだけを売る町家の店。魯山人の看板が掲げられる。湯豆腐や焼き豆腐に合う持ち帰りの京都の老舗の味。',
  });
}

// ================================================================ 雑魚や 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26045501/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://prtimes.jp/main/html/rd/p/000000037.000161653.html';
  const D = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_zakoya_honten_rokkaku', name: '雑魚や 本店 (Zakoya Honten)', category: 'OMNI',
    lat: 35.007516, lng: 135.758734, cuisine_type: 'donburi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood bowls with a sauce and soy-based obanzai; kara-age and fried fish are wheat (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood bowls and fish plates (2026 reviews).',
    hours_raw: 'Mon–Sat 11:30–15:00 and 18:00–23:00; closed Sundays; hours may change (Tabelog). Lunch at the counter only; queues before opening (August and September 2026 reviews). Cards; no e-money or QR (Tabelog). Private rooms (Tabelog). In a machiya off Rokkaku west of Karasuma, with no Zakoya sign at the door (Tabelog; October and November 2026 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Rokkaku-Karasuma — 5 min from Karasuma-Oike Stn',
    cuisine: 'Seafood-bowl lunch and seafood izakaya: the Ryoshi Meshi seafood bowl ¥1,800 or premium ¥2,500 with Hokkaido sea urchin and live shrimp, finished as sea-bream chazuke; the Zakoya Meshi daily plate of eight items ¥1,200; the ¥2,000 combination; obanzai while waiting (2026); simmered fish and kara-age at dinner (October 2026); about ¥1,200–2,500 at lunch',
    website: PR, gmaps: gm('雑魚や 本店 骨屋町'), menu_url: null,
    notes: '[Seafood bowls · Rokkaku] The renovated and renamed 夢処 漁師めし 雑魚や in a Kyoto machiya: queue-worthy fishermen\'s seafood bowls with sea urchin, finished as sea-bream chazuke, and a daily eight-item fish plate at lunch; izakaya by night.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reopened on 29 July 2026 after renovation as 雑魚や 本店, formerly 夢処 漁師めし 雑魚や, absorbing the seafood-bowl shop Dontsuki from Kiyomizu-Gojo (PR TIMES; August 2026 review). Opening date on Tabelog: 29 July 2026.',
      philosophy: null,
      specialty: 'Ryoshi Meshi seafood bowl.',
      anecdotes: [
        { text: 'A September 2026 regular, back after the renovation, was the first to get the day\'s fresh Hokkaido sea urchin on the bowl.', source: R + 'B535404671/' },
        { text: 'A November 2026 diner\'s bowl came with live shrimp that moved, after a 25-minute wait eased by obanzai.', source: R + 'B538687156/' },
      ],
      japanese_sources_summary: '食べログ: 雑魚や 本店、魚介料理、中京区骨屋町147-3、烏丸御池駅から377m、月〜土 11:30〜15:00・18:00〜23:00、日曜休み、カード可、電子マネー・QR 不可、個室あり、2026年7月29日オープン。PR TIMES: 夢処 漁師めし 雑魚や が改装して雑魚や 本店に。口コミ (2026年、英語): 漁師めし (海鮮丼) 1,800円・プレミアム2,500円、Zakoya Meshi 1,200円、2,000円のセット、北海道の雲丹、鯛茶漬け、町家の店、オープン前から行列。',
      confidence: 'medium', sources: [TB, PR, R + 'B533173949/', R + 'B534570517/', R + 'B535135967/', R + 'B535404671/', R + 'B536329137/', R + 'B536992274/', R + 'B537722823/', R + 'B538687156/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter lunch; queues before opening (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区骨屋町147-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and PR TIMES; reviews dated August–November 2026.' },
    pin_source: `Tabelog ${TB} (35.007516, 135.758734); cross-checked: GSI 京都府京都市中京区骨屋町147番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533173949/'],
    price_note: 'Lunch prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Ryoshi Meshi seafood bowl (regular / premium)', '¥1,800 / ¥2,500', 'Lunch', 'ask', 'no', 'August 2026 review.', 'ryoshi_meshi'),
      it('', '', 'Zakoya Meshi daily plate (8 items)', '¥1,200', 'Lunch', 'ask', 'no', 'August 2026 review.', 'zakoya_meshi'),
      it('', '', 'Deluxe Meshi (both)', '¥2,000', 'Lunch', 'ask', 'no', 'August 2026 review.', 'deluxe'),
    ] }, {
    cuisine: '海鮮丼の昼と魚の居酒屋: 漁師めし (海鮮丼) 1,800円、北海道の雲丹と活き海老の上2,500円、締めは鯛茶漬け。日替わりの8品の Zakoya Meshi 1,200円、両方の2,000円、待つ間におばんざい (2026年)、夜は魚の煮付けと唐揚げ (2026年10月)、昼は1,200〜2,500円ほど',
    neighborhood: '六角烏丸。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。たれのかかった海鮮丼と醤油のおばんざい。唐揚げと魚のフライは小麦 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。海鮮丼と魚の定食 (2026年の口コミ)。',
    notes: '[海鮮丼・六角] 夢処 漁師めし 雑魚や が改装して名前を変えた町家の店。行列のできる雲丹ののった漁師の海鮮丼、締めの鯛茶漬け、昼は日替わりの8品の魚の定食。夜は居酒屋。',
  });
}

save();
