// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 107
// (drafted 2026-11-26 against main 78bce4b0; core and notable lists empty in the lane, so rest list nearest-first per the brief).
//   + マンナム (Mannam) (Korean-born owner's tiny karaoke izakaya counter in the Rido dining alley, Kyoto Stn; rest) — romaji from the katakana name
//   + 和家 (Nagomiya) (Chinese hot pots and knife-cut noodles, Gojo-Inokuma; rest) — reading なごみや from the operator's site
//   + KENYA 京都市国際交流会館店 (café in the Kyoto International Community House, Keage; rest)
//   + のんき 京ジェラートgenon (gelato, lunch and breakfast in APA Hotel Kyoto Station East, run by Gion のんき亭; rest)
//   Rest list (mod 6 = 1), nearest-first — skipped:
//   - 結灯 26045611: thin listing (1 review, November 2026).
//   - 居酒屋 面影 26041381: thin listing (1 review).
//   - しみず 26021461: ryokan listing with 1 review.
//   - 鳥貴族 四条大宮店 26016943: chain (鳥貴族).
//   None of the four drafted is in data (main 78bce4b0, hidden records included; grep of Tabelog id, name and address) or in
//   another worker's pending add-kyoto-missed-* script.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-107');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26045611/', 'thin listing: 1 review (November 2026)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26041381/', 'thin listing: 1 review');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26021461/', 'ryokan listing with 1 review — too thin to verify');
skip('https://tabelog.com/en/kyoto/A2601/A260203/26016943/', 'chain: 鳥貴族');

// ================================================================ マンナム (Rido dining alley)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26015143/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '01:00']);
  put({
    id: 'kyoto_mannam_rido', name: 'マンナム (Mannam)', category: 'OMNI',
    lat: 34.989083, lng: 135.758645, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Food comes as the owner’s choice of small dishes — sashimi, grilled fish, stir-fried lotus root, fugu skin with ponzu — with soy sauce and ponzu on the side; no gluten information (2019–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The set appetiser is usually fish or meat (sashimi, hamo, yakitori, fugu skin); persimmon wrapped in shiso leaves (October 2026) and stir-fried lotus root are the only plant dishes reviewers mention.',
    hours_raw: 'Monday–Saturday 18:00–1:00; closed Sunday (Tabelog). Reservations accepted (Tabelog). Cash only: no cards, e-money or QR (Tabelog). A counter of about six seats (December 2025 review); private hire possible; no parking (Tabelog). In the Showa-era Rido dining alley off Shichijo-dori, about 5 min walk from JR Kyoto Station (2021–2026 reviews). Karaoke: unlimited singing ¥1,000 (November 2022 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Rido dining alley, Karasuma Shichijo — 5 min from Kyoto Stn',
    cuisine: 'Tiny counter izakaya and karaoke bar where food arrives without ordering, as the owner chooses (2022 reviews) · the ¥600 appetiser, with drinks ¥500 each (November 2019; October 2021) · appetisers of chilled hamo (October 2021); hamo, medium-fatty tuna, yakitori and stir-fried lotus root (November 2021); fatty tuna, boiled eel and sautéed lotus root with plum sauce, soy sauce and wasabi (January 2022); tuna and sea-bream sashimi, shishamo, matsutake clear soup (November 2022); medium-fatty tuna with lotus root, grilled flatfish (January 2024); fugu skin, chanja, cheese crackers (May 2026); persimmon wrapped in shiso leaves (October 2026); fugu skin with ponzu (November 2026) · teppanyaki and sashimi (January 2025) · fresh sashimi from the market (December 2019) · ginseng soju and a Korean ginseng liquor (2021–2024); a strong shochu highball (November 2021); an unnamed red wine (January 2024); imo shochu (April 2025); a lemon sour (May 2026); sake and fugu skin ¥1,500 tax included (November 2026) · about ¥4,000–5,000 (Tabelog, from reviews)',
    website: null, gmaps: gm('マンナム 京都 東境町 リド飲食街'), menu_url: null,
    notes: '[Izakaya · Rido alley by Kyoto Stn, a Korean-born owner’s karaoke counter] A six-seat counter in the Showa-era Rido alley, run by a friendly owner from Korea (about fifteen years in January 2022): the owner picks the small dishes — fresh sashimi, hamo, fugu skin with ponzu — with ginseng soju and karaoke. Lively and often full. Cash only; 18:00–1:00, closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: 'Korea (January 2022 review)',
      background: 'Per Tabelog and reviewers: a small counter in the Rido dining alley near Kyoto Station, run by one owner. In November 2019 the owner told a diner of 14 years at the shop while still feeling like “a newcomer”; in January 2022 the owner, from Korea, spoke of about 15 years here, a love of Japan and a resolve to keep going in the alley, and the diner noted that the name means “encounter” in Korean. A May 2026 visitor described a karaoke bar run by a friendly mama from Korea, who offered some rare delicacies on the house. Reviewers call the owner friendly, kind and calm (2021–2026), and the room a mix of generations, from those near retirement to young workers (December 2025). A November 2022 diner thought it not the best first stop of a bar crawl, and a December 2025 diner found it more about the mood than the food and drink. Karaoke runs most nights (2022–2026 reviews).',
      philosophy: null, specialty: 'The owner’s choice of small dishes; ginseng liquor; karaoke.',
      anecdotes: [
        { text: 'A January 2022 diner, catching the last express home, was asked “Is it okay if I just choose for you?” and was served fatty tuna, boiled eel and sautéed lotus root.', source: R + 'B445455615/' },
        { text: 'In November 2026 the eighth stop of one diner’s night was packed, with one seat left, and everyone at the counter taking turns at karaoke.', source: R + 'B539605590/' },
        { text: 'A May 2026 visitor heard from a regular that the Rido dining area dates from before the war.', source: R + 'B529166332/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、下京区東境町180、京都駅から430m、月〜土 18:00〜翌1:00、日曜定休、予約可、カード・電子マネー・QR 不可、貸切可、駐車場なし。口コミ (2019年11月〜2026年11月、英語): リド飲食街の小さなカウンター、6席ほど、韓国出身の店主が1人で営む、2022年1月に約15年、店名は韓国語で「出会い」の意味、注文なしで店主のおまかせの料理が出る、お通し600円、ドリンク500円、はも、中トロ、焼き鳥、れんこんの炒め物、まぐろと鯛の刺身、ししゃも、松茸のお吸い物、flatfish の焼き魚、ふぐ皮、チャンジャ、大葉で巻いた柿、ふぐ皮ポン酢、高麗人参の焼酎、レモンサワー、カラオケ (歌い放題1,000円、2022年11月)。',
      confidence: 'medium', sources: [TB, R + 'B422129040/', R + 'B442331244/', R + 'B442847766/', R + 'B445455615/', R + 'B457296179/', R + 'B478152540/', R + 'B500194378/', R + 'B504824573/', R + 'B519653819/', R + 'B529166332/', R + 'B537515536/', R + 'B539605590/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No menu to read: the owner chooses the dishes; cash only. The owner is from Korea.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区東境町180 リド飲食街',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews May, October and November 2026.' },
    pin_source: `Tabelog ${TB} (34.989083, 135.758711) is the shared Rido-alley point, 1.8 m from kyoto_sakenoateya_jijibaba; offset ~6 m west to (34.989083, 135.758645), clear of 新ばし (offset south) and 赤星 so pins do not stack (kyoto_akaboshi_rido and kyoto_jijibaba_dos in the same alley lie further north); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B442331244/', R + 'B539605590/', R + 'B457296179/'],
    price_note: 'No printed menu; the owner chooses the dishes. Prices from reviews, dated.', last_checked: TODAY, items: [
      it('', '', 'Appetiser (chilled hamo that night)', '¥600', 'Appetisers', 'ask', 'no', 'October 2021.', 'otoshi'),
      it('', '', 'Draft beer or highball', '¥500', 'Drinks', '', '', 'October 2021.', 'beer'),
      it('', '', 'Sake with fugu skin and ponzu', '¥1,500', 'Drinks', 'ask', 'no', 'November 2026, tax included.', 'sake_set'),
      it('', '', 'Unlimited karaoke', '¥1,000', 'Other', '', '', 'November 2022.', 'karaoke'),
    ] }, {
    cuisine: '注文しなくても店主のおまかせで料理が出る、小さなカウンターの居酒屋とカラオケの店 (2022年の口コミ)・お通し600円、ドリンクは1杯500円 (2019年11月、2021年10月)・お通しは冷たいはも (2021年10月)、はも、中トロ、焼き鳥、れんこんの炒め物 (2021年11月)、トロ、boiled eel、れんこんの炒め物と梅のたれ、醤油、わさび (2022年1月)、まぐろと鯛の刺身、ししゃも、松茸のお吸い物 (2022年11月)、中トロとれんこん、flatfish の焼き魚 (2024年1月)、ふぐ皮、チャンジャ、チーズクラッカー (2026年5月)、大葉で巻いた柿 (2026年10月)、ふぐ皮ポン酢 (2026年11月)・鉄板焼きと刺身 (2025年1月)・市場の新鮮な刺身 (2019年12月)・高麗人参の焼酎と韓国の人参酒 (2021〜2024年)、濃い焼酎ハイボール (2021年11月)、銘柄を明かさない赤ワイン (2024年1月)、芋焼酎 (2025年4月)、レモンサワー (2026年5月)、日本酒とふぐ皮で税込1,500円 (2026年11月)・4,000〜5,000円ほど (食べログ、口コミから)',
    neighborhood: 'リド飲食街、烏丸七条、京都駅から5分',
    gf_detail: '要確認。刺身、焼き魚、れんこんの炒め物、ふぐ皮ポン酢など店主おまかせの小皿で、醤油やポン酢を添える。グルテンの情報はない (2019〜2026年の口コミ)。',
    vegan_detail: '要確認。お通しはたいてい魚か肉 (刺身、はも、焼き鳥、ふぐ皮)。口コミにある植物性の料理は大葉で巻いた柿 (2026年10月) とれんこんの炒め物だけ。',
    notes: '[居酒屋・京都駅そばのリド飲食街、韓国出身の店主のカラオケのカウンター] 昭和の雰囲気のリド飲食街で、韓国出身の気さくな店主が営む6席ほどのカウンター (2022年1月の時点で15年ほど)。新鮮な刺身、はも、ふぐ皮ポン酢などの小皿を店主が選び、高麗人参の焼酎とカラオケを。にぎやかで満席が多い。現金のみ、18:00〜翌1:00、日曜定休。',
  });
}

// ================================================================ 和家 (Gojo-Inokuma)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26034997/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_nagomiya_gojo', name: '和家 (Nagomiya)', category: 'OMNI',
    lat: 34.99659533706642, lng: 135.7501366791225, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Knife-cut noodles, tantanmen and fried rice sets are wheat or soy-seasoned; the hot pots’ broths and spices are not described (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu centres on lamb, beef, fish and duck blood; no vegetable dish is described apart from a vegetable-topped noodle set (2022–2026 reviews).',
    hours_raw: 'Daily 11:00–14:00 (last order 14:00) and 17:00–22:00 (last order 21:00); closing days not fixed (Tabelog). The operator’s site says open 365 days a year (三多国際, page dated as of 2019). Reservations accepted; groups accepted (Tabelog; operator’s site). No cards; e-money and QR accepted (Tabelog). Order by touch panel, mostly in Japanese; water, tableware and soft drinks are self-service, with drinks taken from the fridge (February 2026 review). No private hire; no parking (Tabelog). On Gojo-dori west of Inokuma, near Tambaguchi and Gojo stations (operator’s site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo-Inokuma, near Tambaguchi Stn',
    cuisine: 'Chinese restaurant of hot pots, spiced skewers and knife-cut noodles, popular with Chinese diners (2022–2026 reviews) · lunch sets: knife-cut noodles, tantanmen and fried rice (Set A) ¥780 tax included (January 2022); stir-fried noodles topped with vegetables in a savoury sauce (October 2022) · lamb skewers, grilled-fish hot pot, spicy hot pot, water-boiled sliced meat, chicken casserole, sauerkraut-and-fish hot pot (May 2022) · spicy bone-in lamb hot pot with cilantro (February 2024) · 夫妻肺片 (Sichuan beef offal salad) ¥1,000; small bottles of strong sorghum baijiu (56°); Shaoxing wine (February 2026) · water-boiled fish with chilli and Sichuan pepper, with duck blood, yuba and glass noodles; lamb spine; spice-coated skewers (October 2026) · about ¥2,000–6,000 per person (2024–2026 reviews)',
    website: 'https://santakokusai.co.jp/restaurant.html', gmaps: gm('和家 京都 五条通猪熊西入 柿本町'), menu_url: null,
    notes: '[Chinese · Gojo-Inokuma, hot pots and knife-cut noodles] A Chinese restaurant where Chinese diners come for the hot pots: numbing water-boiled fish with duck blood, spicy bone-in lamb, lamb skewers and Sichuan offal salad, with knife-cut noodle sets at lunch. Touch-panel ordering, self-service drinks. Open daily.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog, the operator and reviewers: run by 三多国際株式会社 (founded October 2013), which also runs 三多屋 in Kitahama, Osaka and 萬吉 in Fushimi, Kyoto — three shops as of 2019 (operator’s site). Reviewers from 2022 to 2026 describe authentic Chinese food and many Chinese customers; a February 2026 diner found the staff fluent in Japanese, kind and helpful, and watched the apparent manager chatting with Chinese guests, and an October 2026 diner who had lived in China for about ten years came for dishes rarely found in Japan. A January 2022 diner found the tantanmen broth bland and the fried rice tasting of chemical seasoning, and did not plan to return.',
      philosophy: null, specialty: 'Chinese hot pots; knife-cut noodles.',
      anecdotes: [
        { text: 'A February 2024 diner asked the staff for help choosing and was served the spicy lamb hot pot, and sneezed and laughed through its mysterious spices.', source: R + 'B475920784/' },
        { text: 'In February 2026 a solo diner skipped the hot pot as too big for one and had 夫妻肺片 with a small bottle of 56° sorghum baijiu, and was advised to drink plenty of water with it.', source: R + 'B523351378/' },
        { text: 'An October 2026 diner who had lived in China for about ten years found water-boiled fish with duck blood and lamb spine.', source: R + 'B537812575/' },
      ],
      japanese_sources_summary: '食べログ: 中華料理・刀削麺、下京区柿本町592-5、丹波口駅から713m、毎日 11:00〜14:00 (L.O.14:00)、17:00〜22:00 (L.O.21:00)、不定休、予約可、カード不可、電子マネー・QR 可、貸切不可、駐車場なし。運営会社 三多国際株式会社のサイト: 和家 (なごみや)、五条通猪熊西入柿本町592-5、丹波口駅・五条駅からすぐ、年中無休、団体可、ほかに三多屋 (大阪・北浜) と萬吉 (伏見)、2013年10月創業、2019年現在3店舗。口コミ (2022年1月〜2026年10月、英語): 刀削麺と担々麺とチャーハンのAセット780円 (税込、2022年1月)、野菜たっぷりのあんかけの焼きそば、羊肉の串焼き、焼いた魚の鍋、辛い鍋、水煮肉片、鶏の土鍋煮、酸っぱい漬け菜と魚の鍋、骨付き羊肉の辛い鍋とパクチー、夫妻肺片1,000円、56度のコーリャンの白酒の小瓶、紹興酒、鴨の血と湯葉と春雨の水煮魚、羊の背骨の肉、スパイスの串焼き、タッチパネルで注文、飲み物は冷蔵庫からセルフ、中国のお客さんが多い。',
      confidence: 'medium', sources: [TB, 'https://santakokusai.co.jp/index.html', 'https://santakokusai.co.jp/restaurant.html', R + 'B445576703/', R + 'B456475646/', R + 'B462414802/', R + 'B475920784/', R + 'B479289093/', R + 'B523351378/', R + 'B537812575/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Touch-panel menu mostly in Japanese; staff speak Japanese and are helpful (February 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区五条通猪熊西入柿本町592-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews January and February 2026 and October 2026; listed on the operator’s site.' },
    pin_source: `Tabelog ${TB} (34.996595, 135.750137); not pin-checked by the worker (integrator to check); nearest existing record kyoto_kashiwatoku_gojo_omiya 26.4 m (a different shop on Gojo-dori); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B445576703/', R + 'B523351378/'],
    price_note: 'Only two item prices in the sources (January 2022, February 2026).', last_checked: TODAY, items: [
      it('', '', 'Set A: knife-cut noodles, tantanmen and fried rice', '¥780', 'Lunch sets', 'no', 'no', 'January 2022, tax included.', 'set_a'),
      it('夫妻肺片', '', 'Sichuan beef offal salad', '¥1,000', 'Appetisers', 'ask', 'no', 'February 2026; spiciness chosen on the touch panel.', 'fuqi_feipian'),
      it('', '', 'Spicy bone-in lamb hot pot', '', 'Hot pots', 'ask', 'no', 'February 2024.', 'lamb_hotpot'),
      it('', '', 'Water-boiled fish with duck blood, yuba and glass noodles', '', 'Mains', 'ask', 'no', 'October 2026.', 'shuizhuyu'),
    ] }, {
    cuisine: '鍋、スパイスの串焼き、刀削麺の中国料理の店で、中国のお客さんに人気 (2022〜2026年の口コミ)・ランチのセット: 刀削麺と担々麺とチャーハンのAセット税込780円 (2022年1月)、野菜たっぷりのあんかけの焼きそば (2022年10月)・羊肉の串焼き、焼いた魚の鍋、辛い鍋、水煮肉片、鶏の土鍋煮、酸っぱい漬け菜と魚の鍋 (2022年5月)・パクチーをのせた骨付き羊肉の辛い鍋 (2024年2月)・夫妻肺片1,000円、56度のコーリャンの白酒の小瓶、紹興酒 (2026年2月)・唐辛子と花椒の水煮魚に鴨の血、湯葉、春雨、羊の背骨の肉、スパイスをまぶした串焼き (2026年10月)・1人2,000〜6,000円ほど (2024〜2026年の口コミ)',
    neighborhood: '五条猪熊、丹波口駅の近く',
    gf_detail: '要確認。刀削麺、担々麺、チャーハンのセットは小麦や醤油を使う。鍋のスープや辛いたれの説明はない (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。中心は羊肉、牛肉、魚、鴨の血。野菜をのせた麺のセットのほかに野菜の料理の説明はない (2022〜2026年の口コミ)。',
    notes: '[中国料理・五条猪熊、鍋と刀削麺] 中国のお客さんが鍋を目当てに来る中国料理の店。しびれる水煮魚と鴨の血、骨付き羊肉の辛い鍋、羊肉の串焼き、夫妻肺片、昼は刀削麺のセット。タッチパネルで注文、飲み物はセルフ。毎日営業。',
  });
}

// ================================================================ KENYA 京都市国際交流会館店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037049/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_kenya_community_house', name: 'KENYA 京都市国際交流会館店', category: 'OMNI',
    lat: 35.010696007874735, lng: 135.78751094040052, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Food is mostly toast, pilaf, rice balls and lunch boxes; no gluten information (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee, iced tea and orange juice are on the menu; butter toast, milk tea, café au lait and floats are dairy, and no vegan food is described (2022–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 10:00–17:00; closed Monday (the next weekday when Monday is a public holiday) and 28 December–4 January (Tabelog). No QR payment (Tabelog). Order and pay at the counter, take a number and collect when called (April 2024 review). 90 seats, non-smoking (Tabelog): counter seats at the window over the garden, tables and sofas (2022–2024 reviews), and a terrace outside the entrance (May 2025). On the first floor of the Kyoto International Community House (京都市国際交流会館), 6 min walk from Keage Stn on the Tozai line (Tabelog). Opened 8 October 2021 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Keage, near Nanzen-ji',
    cuisine: 'Coffee shop in the lobby of the Kyoto International Community House, from a coffee brand “loved in Kyoto for over 45 years” (official site) · coffee from ¥400 (November 2022); hot and iced coffee, iced tea, café au lait, royal milk tea (2023–2024); herbal teas and juices (November 2022); orange juice ¥490 (November 2025) · butter toast of thick bread ¥320; rice balls ¥550, a popular item the staff recommended; pilaf; daily lunch boxes (November 2022) · seafood pilaf with iced coffee ¥1,200 (August 2025) · shikuwasa soda float ¥580 (August 2024) · cinnamon toast with ice cream (June 2026) · drinks in disposable cups (April 2024) · under ¥1,000 (Tabelog, from reviews)',
    website: 'https://kenya211008.storeinfo.jp/', gmaps: gm('KENYA 京都市国際交流会館店'), menu_url: null,
    notes: '[Café · Keage, a quiet break near Nanzen-ji] A roomy coffee shop in the lobby of the Kyoto International Community House, near Nanzen-ji and Murin-an: coffee, thick butter toast, pilaf and floats, with window counter seats over the garden. Calm even when nearby restaurants have queues. 10:00–17:00; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog, the café’s site and reviewers: opened in October 2021 in the Kyoto International Community House, under a coffee brand the site says has been loved in Kyoto for more than 45 years. Reviewers liken the room to a hotel lobby (2022–2024) and find it calm even in the busy autumn-leaf season, when nearby restaurants had queues (November 2022). It doubles as a lounge for the hall’s visitors (March 2023): reviewers mention many people from other countries, exchange students, people studying or learning Japanese, and locals (2024–2026). A March 2023 diner found the café au lait average, and an April 2024 diner was disappointed by the disposable cups.',
      philosophy: null, specialty: 'Coffee.',
      anecdotes: [
        { text: 'A November 2022 visitor with little time before an event had the ¥320 butter toast — three thick slices.', source: R + 'B457175234/' },
        { text: 'On a hot August 2024 Sunday after the Okazaki Park area, a diner cooled off with a shikuwasa soda float in a room so large it felt almost empty.', source: R + 'B490011770/' },
        { text: 'A November 2025 visitor found the garden open to the public for free in the autumn-leaf season.', source: R + 'B523821498/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、左京区粟田口鳥居町2-1 1F、蹴上駅から徒歩6分、火〜日 10:00〜17:00、月曜定休 (祝日の場合は翌平日)、年末年始 (12月28日〜1月4日) 休み、QR 不可、90席、禁煙、2021年10月8日開店。公式サイト: ケニア 京都市国際交流会館店、京都で45年以上愛され続けている自慢のコーヒー。口コミ (2022年11月〜2026年11月、英語): 京都市国際交流会館のロビーのカフェ、窓際のカウンターから庭が見える、コーヒー400円から、バタートースト320円、おにぎり550円、ピラフ、日替わりの弁当、カフェオレ、ロイヤルミルクティー、シークヮーサーのソーダフロート580円、シーフードピラフとアイスコーヒーで1,200円、オレンジジュース490円、アイスをのせたシナモントースト、カウンターで注文と会計、番号札、使い捨てのカップ、海外からの人や留学生も多い。',
      confidence: 'medium', sources: [TB, 'https://kenya211008.storeinfo.jp/', R + 'B457175234/', R + 'B457251709/', R + 'B462276049/', R + 'B483612120/', R + 'B488797088/', R + 'B490011770/', R + 'B512553466/', R + 'B518719868/', R + 'B523821498/', R + 'B529484717/', R + 'B538673173/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; the hall serves international visitors, and many are around (2024–2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区粟田口鳥居町2-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (no closure notice); reviews June and November 2026; official store page live.' },
    pin_source: `Tabelog ${TB} (35.010696, 135.787511); not pin-checked by the worker (integrator to check); nearest existing record kyoto_murin_an_cafe 116.4 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B457175234/', R + 'B490011770/', R + 'B512553466/', R + 'B523821498/'],
    price_note: 'Prices from reviews, 2022–2025; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Butter toast', '¥320', 'Food', 'no', 'no', 'November 2022; thick bread.', 'butter_toast'),
      it('', '', 'Seafood pilaf with iced coffee', '¥1,200', 'Food', 'ask', 'no', 'August 2025.', 'seafood_pilaf'),
      it('', '', 'Shikuwasa soda float', '¥580', 'Drinks', 'ask', 'no', 'August 2024; ice cream on top.', 'soda_float'),
      it('', '', 'Orange juice', '¥490', 'Drinks', '', '', 'November 2025.', 'orange_juice'),
    ] }, {
    cuisine: '京都市国際交流会館のロビーのコーヒーの店。「京都で45年以上愛され続けている」コーヒーの店 (公式サイト)・コーヒーは400円から (2022年11月)、ホットとアイスのコーヒー、アイスティー、カフェオレ、ロイヤルミルクティー (2023〜2024年)、ハーブティーとジュース (2022年11月)、オレンジジュース490円 (2025年11月)・厚切りのパンのバタートースト320円、スタッフおすすめの人気のおにぎり550円、ピラフ、日替わりの弁当 (2022年11月)・シーフードピラフとアイスコーヒーで1,200円 (2025年8月)・シークヮーサーのソーダフロート580円 (2024年8月)・アイスをのせたシナモントースト (2026年6月)・飲み物は使い捨てのカップ (2024年4月)・1,000円未満 (食べログ、口コミから)',
    neighborhood: '蹴上、南禅寺の近く',
    gf_detail: '要確認。食べ物はトースト、ピラフ、おにぎり、弁当が中心。グルテンの情報はない (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。ブラックのコーヒー、アイスティー、オレンジジュースがある。バタートースト、ミルクティー、カフェオレ、フロートは乳製品で、ヴィーガンの食べ物の説明はない (2022〜2026年の口コミ)。',
    notes: '[カフェ・蹴上、南禅寺の近くで静かにひと休み] 南禅寺と無鄰菴の近く、京都市国際交流会館のロビーの広いコーヒーの店。コーヒー、厚切りのバタートースト、ピラフ、フロートを、庭に面した窓際のカウンターで。近くの店に行列ができる日も落ち着いている。10:00〜17:00、月曜定休。',
  });
}

// ================================================================ のんき 京ジェラートgenon (APA Hotel Kyoto Station East)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26039551/'; const R = TB + 'dtlrvwlst/';
  const H = day(['06:30', '10:00'], ['11:30', '16:00']);
  put({
    id: 'kyoto_nonki_genon_ekimae', name: 'のんき 京ジェラートgenon', category: 'OMNI',
    lat: 34.98785231788088, lng: 135.7612289001882, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Gelato is served with a wafer; lunch plates are breaded cutlets, chicken nanban and hamburg steak with bread or rice; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most gelato is milk-based (Kyoto milk), and mango, peach-almond and coconut flavours are not described further; lunches are meat with a salad bar (2024–2026 reviews).',
    hours_raw: 'Tabelog: Monday–Saturday (and the days before and after public holidays) breakfast 6:30–10:00, café 11:30–16:00, dinner 18:00–22:00; closed Sunday and public holidays; dinner service ended on 30 December 2025, private bookings still taken. The shop’s own site differs: breakfast 6:30–10:00 and café 11:00–16:00 every day, bistro 17:00–22:00 closed Monday (the next day when Monday is a holiday); dinner is not stored here, and Sunday is left out while the two sources disagree. Weekday lunch with salad bar from ¥1,000 (Tabelog; February 2026 review: weekdays only); gelato also on Saturdays (July 2026 review). The breakfast is the hotel’s buffet, ¥2,000 for adults booked ahead (August 2025 review). Reservations accepted; cards (VISA, Master, JCB, AMEX, Diners), iD and QR (PayPay, d Barai, au PAY) (Tabelog). 40 seats; non-smoking; private hire for 20–50; take-out; English menu; wheelchair access; free Wi-Fi (Tabelog). On the first floor of APA Hotel Kyoto Station East, 3 min walk from Kyoto Station (Tabelog). Opened 1 June 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North-east of Kyoto Stn',
    cuisine: 'Gelato workshop and restaurant from Gion のんき亭 (official site; July 2026 review), in a hotel’s ground floor · handmade Kyoto gelato of milk from a Kyoto farm that raises its own cows (August 2024 review) and Kyoto vegetables and fruit, with no colouring or flavouring (Tabelog; 2024–2026 reviews): double ¥550 tax included (August 2024; May and July 2026), triple (medio) ¥650 (July 2026); premium milk, milk, vanilla, matcha, hojicha, brown-sugar kinako, coconut, mango, strawberry milk, crispy chocolate, chocolate, peach almond (2024–2026) · lunch with a salad bar: ginger pork, simmered hamburg steak with a fried egg, daily special, each ¥1,000 with bread or rice (December 2025); chicken nanban with tartar sauce ¥1,000 (February and March 2026); mochi-pork loin cutlet and cheese-filled mille-feuille pork cutlet ¥1,200 (May and October 2026); free large rice; coffee ¥100 with lunch (September 2025); beef cutlet (Tabelog) · breakfast buffet of Japanese and Western dishes, obanzai, pickles, yuba and gelato (2025–2026) · before dinner ended: Italian dishes from ¥600, wine and highballs (Tabelog); a ¥3,980 course with all-you-can-drink — hamburg steak, pasta, ajillo, fries, fried shrimp, gelato (March 2024; November 2025)',
    website: 'https://www.nonki-kyoto.com/nonki/', gmaps: gm('のんき 京ジェラートgenon アパホテル京都駅東'), menu_url: null,
    notes: '[Gelato and lunch · Kyoto Stn, from Gion’s のんき亭] A quiet hotel-floor gelato shop and café a few minutes from the station: two neat scoops of Kyoto-milk gelato (matcha, hojicha, strawberry milk) for ¥550, and weekday ¥1,000 lunches with a salad bar. Dinner ended in December 2025. Cards and QR accepted.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop’s site, Tabelog and reviewers: ひとさら料理 のんき and its gelato brand genon belong to Gion のんき亭 (the site links both shops under ©のんき亭; kyoto_nonki_tei_gion in data), with the gelato made in a workshop inside the shop (official site). It opened in June 2023 on the first floor of APA Hotel Kyoto Station East and serves as the hotel’s breakfast venue; an August 2025 diner quoted the hotel’s website saying the buffet is prepared by the chef of Gion のんき亭. Reviewers find it quiet and uncrowded next to the station (2024–2026) and the young staff friendly (March 2024; July 2026). A July 2025 hotel guest found the breakfast an average business-hotel buffet, and a July 2026 diner found the gelato sweet with the milk scent muddled, wishing it were fresher.',
      philosophy: null, specialty: 'Kyoto gelato; weekday lunch with salad bar.',
      anecdotes: [
        { text: 'An August 2024 guest, waiting out a typhoon before check-in, found the hotel lobby full and took premium milk and matcha gelato here instead, topped with a heart-shaped wafer.', source: R + 'B490911986/' },
        { text: 'A May 2026 visitor, on the way back from painting a fan at a nearby fan shop, was surprised by two perfectly round scoops of the same size.', source: R + 'B531951866/' },
        { text: 'A diner came back four times in 2026 for the ¥1,000–1,200 lunches with the salad bar, calling it the best place for affordable salad near Kyoto Station.', source: R + 'B521891301/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ジェラート、下京区東塩小路町552-1 アパホテル京都駅東 1F、京都駅から357m、月〜土・祝前日・祝後日 6:30〜10:00、11:30〜16:00、18:00〜22:00、日曜・祝日休み、2025年12月30日でディナー営業を終了 (貸切の予約は受付)、予約可、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー (iD)・QR (PayPay・d払い・au PAY) 可、40席、禁煙、20〜50名で貸切可、テイクアウト可、英語メニュー、2023年6月1日開店。公式サイト: ひとさら料理 のんき (アパホテル京都駅東 内1階)、BREAK FAST 6:30〜10:00、CAFE 11:00〜16:00、BISTRO 17:00〜22:00 (月曜休み)、店内の工房で作る京ジェラート genon、祇園のんき亭。口コミ (2024年3月〜2026年10月、英語): ジェラートのダブル550円、トリプル650円、プレミアムミルク、抹茶、ほうじ茶、黒糖きなこ、ココナッツ、マンゴー、いちごミルク、ピーチアーモンド、着色料・香料を使わない、平日のランチはサラダバー付き1,000円 (生姜焼き、煮込みハンバーグ、チキン南蛮)、ロースかつとチーズのミルフィーユかつ1,200円、ホテルの朝食ビュッフェ、飲み放題付きコース3,980円。',
      confidence: 'medium', sources: [TB, 'https://www.nonki-kyoto.com/nonki/', R + 'B481116616/', R + 'B490911986/', R + 'B510647148/', R + 'B512824954/', R + 'B513016769/', R + 'B518705104/', R + 'B521163892/', R + 'B521891301/', R + 'B523491380/', R + 'B531888590/', R + 'B531951866/', R + 'B532607673/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); order gelato at the counter by the entrance; cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町552-1 アパホテル京都駅東 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing fetched 2026-11-26 (dinner ended 30 December 2025; no closure notice); reviews July and October 2026; official site live.' },
    pin_source: `Tabelog ${TB} (34.987852, 135.761229); not pin-checked by the worker (integrator to check); nearest existing record kyoto_marufuku_shiokoji 26.7 m (a different building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531951866/', R + 'B531888590/', R + 'B521891301/', R + 'B518705104/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Gelato, double', '¥550', 'Gelato', 'ask', 'ask', 'July 2026, tax included.', 'gelato_double'),
      it('ジェラート メディオ', '', 'Gelato medio (triple)', '¥650', 'Gelato', 'ask', 'ask', 'July 2026.', 'gelato_medio'),
      it('', '', 'Chicken nanban with tartar sauce, salad bar', '¥1,000', 'Lunch', 'no', 'no', 'February and March 2026, tax included; weekdays.', 'chicken_nanban'),
      it('', '', 'Cheese-filled mille-feuille pork cutlet, salad bar', '¥1,200', 'Lunch', 'no', 'no', 'October 2026, tax included.', 'katsu_lunch'),
    ] }, {
    cuisine: '祇園のんき亭のジェラートの工房とレストラン (公式サイト、2026年7月の口コミ)、ホテルの1階・自家の牛を育てる京都の牧場の牛乳 (2024年8月の口コミ) と京都の野菜や果物の手作りの京ジェラート、着色料・香料なし (食べログ、2024〜2026年の口コミ): ダブル税込550円 (2024年8月、2026年5月・7月)、トリプル (メディオ) 650円 (2026年7月)、プレミアムミルク、ミルク、バニラ、抹茶、ほうじ茶、黒糖きなこ、ココナッツ、マンゴー、いちごミルク、クリスピーチョコ、チョコ、ピーチアーモンド (2024〜2026年)・サラダバー付きのランチ: 生姜焼き、目玉焼きをのせた煮込みハンバーグ、日替わり、どれもパンかご飯で1,000円 (2025年12月)、タルタルソースのチキン南蛮1,000円 (2026年2月・3月)、もち豚のロースかつとチーズ入りのミルフィーユかつ1,200円 (2026年5月・10月)、ご飯の大盛り無料、ランチのコーヒー100円 (2025年9月)、ビフカツ (食べログ)・和洋の朝食ビュッフェ、おばんざい、漬物、湯葉、ジェラート (2025〜2026年)・ディナー終了前: 600円からのイタリアン、ワイン、ハイボール (食べログ)、ハンバーグ、パスタ、アヒージョ、ポテト、えびフライ、ジェラートの飲み放題付きコース3,980円 (2024年3月、2025年11月)',
    neighborhood: '京都駅の北東',
    gf_detail: '要確認。ジェラートにはウエハースを添える。ランチはかつ、チキン南蛮、ハンバーグにパンかご飯。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。ジェラートの多くは京都の牛乳を使う。マンゴー、ピーチアーモンド、ココナッツの材料の説明はない。ランチは肉とサラダバー (2024〜2026年の口コミ)。',
    notes: '[ジェラートとランチ・京都駅、祇園のんき亭から] 駅から数分、ホテルの1階の静かなジェラートの店とカフェ。京都の牛乳のジェラート (抹茶、ほうじ茶、いちごミルク) のダブルが550円、平日はサラダバー付きの1,000円のランチ。ディナーは2025年12月で終了。カードと QR 可。',
  });
}

save();
