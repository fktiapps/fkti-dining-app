// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 88.
//   + 一休庵 Ikkyu An (dango and warabi-mochi café in Maruyama Park) — coordinator’s lead item: drafted fresh on its own
//     evidence, overriding the batch-86 “already in data” skip. The old record ChIJG60kQMUIAWAR6bBHYQW0VA0 is hidden as
//     wrong-source; 高台寺 一休庵 (26001425) left alone (no 2025–26 review).
//   + 野菜料理 OKI四条 Yasai Ryori OKI Shijo (organic-vegetable restaurant with vegan, GF and allergy dishes, IMU HOTEL KYOTO)
//   + 居酒屋charlie izakayachari (small two-storey izakaya near Karasuma-Oike, opened February 2025)
//   + Comida Latina COSTA (Mexican and Spanish bar-restaurant at Karasuma-Oike, since 2014)
//   + 山梨製餡 Yamanashi Seian (bean-paste maker since 1920, family-run third generation; takeaway shop) — retail ruling (a)
//   - しんぱち食堂 四条烏丸店, BAR LeCoq, 酒菜食房いち: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26044376 (skipped), 26025044,
//   26022542 (skipped), 26037908, 26004068 (skipped), 26042594, 26033252. Next in lane: 26004842 (fetched, not yet worked).
//   queue-status.jsonl grepped for each brand (一休庵, しんぱち, COSTA, LeCoq, OKI, いち, charlie, 山梨製餡): しんぱち食堂 has an
//   earlier ruling (26042842); 一休庵 26011058 had the batch-86 skip now overridden.
//   Data check (current main, hidden included): none of the five drafted is in data/kyoto.json by Tabelog id, name, site or
//   address; the hidden wrong-source Ikkyu-an record sits 9.3 m from this Tabelog point.
//   Same-name count (same brand or operator only): 一休庵 — one café (高台寺 一休庵 is a different business). OKI四条 — the
//   only OKI shop the site shows; IMU HOTEL KYOTO is a single designer hotel (a Lancers client page names 株式会社タナカヤ;
//   not confirmed) — small local hotel, drafted, flagged. COSTA — one shop in a Tabelog name search, operator unknown —
//   drafted, flagged. charlie — one shop. 山梨製餡 — one company (株式会社山梨製餡, own site). Large-parent and big-chain-hotel
//   lists checked.
//   Service charges, checked against the Japanese original: charlie サービス料、チャージ料どちらもなし (Tabelog); none
//   listed for 一休庵, OKI, COSTA or 山梨製餡.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: OKI’s site says it can serve dishes for halal diets; it also serves pork and chicken from one kitchen and is not
//   certified — halal flag left false, flagged in the report.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-88');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044376', '炭火焼干物定食 しんぱち食堂 四条烏丸店: chain — a national grilled-fish set-meal chain (same ruling as 26042842)');
skip('26022542', 'BAR LeCoq: not a place to eat — a cocktail and cognac bar; the only food in reviews is cashew nuts with drinks');
skip('26004068', '酒菜食房いち: no reviews dated 2025–2026 (latest November 2023 to July 2024)');

// ================================================================ 一休庵 (Maruyama Park)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26011058/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://maruyama-ikkyuan.com/'; const MENU = SITE + 'menu';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_ikkyuan_maruyama_park', name: '一休庵 (Ikkyu An)', category: 'OMNI',
    lat: 35.003952, lng: 135.779876, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dango (mitarashi with a soy-sauce glaze), warabi mochi, monaka, shaved ice and soft-serve; no ingredient or gluten information (own site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Dango and warabi mochi with kinako and anko are not described as vegan; several sweets come with soft-serve or ice cream, and the summer matcha latte uses soy milk (own site; 2026 reviews).',
    hours_raw: 'About 10:00–17:00, last orders 16:30; hours change with season and weather, and days off are irregular — check the shop’s site or Instagram (own site; Tabelog). No reservations (own site). Order and pay at the counter, then sit anywhere (July 2026). Cards, IC and e-money, QR incl. PayPay and WeChat Pay (Tabelog). 90 seats inside, on a raised tatami area and outside on red-draped benches under parasols (Tabelog). Non-smoking (Tabelog). Takeaway; English menu (Tabelog). Prices revised from 1 October 2026 (own site). The “華団” set was paused 27 March–5 April 2026 for the cherry-blossom crowds (own site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park — north side of the weeping cherry',
    cuisine: 'Dango and Japanese sweets in Maruyama Park (own site) · “華団”: seven small dango in flavours such as mitarashi, matcha, chestnut, sakura and shichimi, with hot or cold matcha, ¥1,600 (March, July and September 2026) · mitarashi dango, three skewers with kinako on the side and tea, ¥850 (July 2026) · six warabi mochi (wasanbon, matcha, brown sugar, ginger, black sesame, Kyoto shichimi); black-sesame shaved ice with soft-serve and dango (May 2026) · “団子三姉妹” ¥1,100; black-sesame shaved ice ¥1,100; “極ごく蕨” soft matcha warabi mochi with matcha soft-serve, anko and shiratama ¥1,500; sakura monaka you fill with warabi mochi, kinako and anko ¥950 (own site)',
    website: SITE, gmaps: gm('一休庵 円山公園'), menu_url: MENU,
    notes: '[Dango café · Maruyama Park, red parasols] A big, relaxed sweets café on the north side of Maruyama Park’s weeping cherry: chewy dango in many flavours, warabi mochi and shaved ice, eaten indoors, on tatami or on red-draped benches under parasols. Order at the counter; tea comes with the dango. Not a vegetarian restaurant — the fucha restaurant 高台寺 一休庵 by Kodai-ji is a different business.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; signs the site’s notices as 店主)'], origin: null,
      background: 'The café’s site gives its place as the north side of the weeping cherry in Maruyama Park, Gion, and posts notices signed by the owner, such as the October 2026 price revision. No operator or founding date was found.',
      philosophy: null, specialty: 'Dango in many flavours; warabi mochi.',
      anecdotes: [
        { text: 'A May 2026 visitor strolling from Yasaka Shrine took the six-flavour warabi mochi and a black-sesame shaved ice under a red parasol.', source: R + 'B529159355/' },
        { text: 'A July 2026 reviewer, out in 35-degree heat, ordered the “華団” set and found a tomato-flavoured dango among the skewers.', source: R + 'B531855627/' },
      ],
      japanese_sources_summary: '公式サイト: 一休庵、祇園・円山公園しだれ桜北側、10:00頃〜17:00頃 (季節や気象により変動)、不定休 (HP・インスタで確認)、予約不可、荻萩1,100円、黒胡麻氷 (甘納豆入り) 1,100円、団子三姉妹1,100円、桜もなか950円、極ごく蕨 抹茶味1,500円、そいまろまっちゃ (夏季限定の豆乳抹茶ラテ) 880円、2026年10月1日より価格改定 (店主)、2026年3月27日〜4月5日は華団休止、住所は東山区八坂鳥居前東入円山町官有地。食べログ: 一休庵、カフェ、L.O. 16:30、カード・電子マネー・QR可、90席、小上がりと野点傘の屋外席、禁煙、テイクアウト、英語メニュー。口コミ (2026年、英語): 華団1,600円、みたらし団子3本850円、わらび餅6種、黒胡麻のかき氷、カウンターで注文して先払い。',
      confidence: 'medium', sources: [SITE, MENU, SITE + 'about', TB, R + 'B524817038/', R + 'B525399668/', R + 'B527113677/', R + 'B529159355/', R + 'B531367900/', R + 'B531855627/', R + 'B535045933/', R + 'B536142976/', R + 'B538201130/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; order and pay at the counter; no reservations.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区鳥居前東入円山町官有地',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site with notices through October 2026; Tabelog reviews dated March to September 2026.' },
    pin_source: `Tabelog ${TB} (35.003952, 135.779876); cross-checked: OSM reverse gives the cafe node 一休庵 on 知恩院通 9 m away; no lot number (円山町官有地), so GSI not used; the hidden wrong-source record ChIJG60kQMUIAWAR6bBHYQW0VA0 sits 9.3 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B531367900/', R + 'B536142976/'],
    price_note: 'Site prices may predate the 1 October 2026 price revision; set prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '“華団” set: seven small dango with matcha', '¥1,600', 'Dango', 'ask', 'ask', 'March to September 2026.', 'hanadan'),
      it('', '', 'Mitarashi dango, three skewers, with kinako and tea', '¥850', 'Dango', 'ask', 'ask', 'July 2026.', 'mitarashi'),
      it('', '', '“団子三姉妹” (Dango 3 sisters)', '¥1,100', 'Dango', 'ask', 'ask', 'Own site.', 'sanshimai'),
      it('', '', '“極ごく蕨” matcha warabi mochi with matcha soft-serve, anko and shiratama', '¥1,500', 'Warabi mochi', 'ask', 'no', 'Own site.', 'gokugoku'),
      it('', '', 'Sakura monaka with warabi mochi, kinako and anko', '¥950', 'Sweets', 'no', 'ask', 'Own site.', 'monaka'),
      it('', '', 'Black-sesame shaved ice with amanatto', '¥1,100', 'Shaved ice', 'ask', 'ask', 'Own site.', 'kurogoma_kori'),
    ] }, {
    cuisine: '円山公園の団子と甘味 (公式サイト)・「華団」みたらし、抹茶、栗、桜、七味など小さな団子7本に温・冷の抹茶、1,600円 (2026年3・7・9月)・みたらし団子3本、きな粉とお茶付き、850円 (2026年7月)・わらび餅6種 (和三盆、抹茶、黒糖、生姜、黒胡麻、京七味)、ソフトクリームと団子の載った黒胡麻のかき氷 (2026年5月)・「団子三姉妹」1,100円、黒胡麻氷1,100円、「極ごく蕨」抹茶のわらび餅に抹茶ソフト・餡子・白玉1,500円、わらび餅・きな粉・餡子を挟む桜もなか950円 (公式サイト)',
    neighborhood: '円山公園、しだれ桜の北側',
    gf_detail: '要確認。団子 (醤油だれのみたらし)、わらび餅、もなか、かき氷、ソフトクリーム。材料やグルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。きな粉や餡子の団子・わらび餅はヴィーガンとは書かれていない。ソフトクリームやアイスの付く甘味が多く、夏の抹茶ラテは豆乳 (公式サイト、2026年の口コミ)。',
    notes: '[団子カフェ・円山公園、赤い野点傘] 円山公園のしだれ桜の北側にある広くくつろげる甘味処。いろいろな味のもちもちの団子、わらび餅、かき氷を、店内、小上がり、または赤い毛氈の床几と野点傘の下で。注文はカウンターで、団子にはお茶付き。精進料理の店ではない。高台寺近くの普茶料理の高台寺 一休庵とは別の店。',
  });
}

// ================================================================ 野菜料理 OKI四条
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037908/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://shijo.yasai-oki.com/';
  const BMENU = 'https://drive.google.com/file/d/185Bj6n93sicBoaX9fFw4HYlKhgvln3wG/view';
  const H = day(['07:00', '10:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_yasai_ryori_oki_shijo', name: '野菜料理 OKI四条 (Yasai Ryori OKI Shijo)', category: 'OMNI',
    lat: 35.001234, lng: 135.756837, cuisine_type: 'other',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'Some GF options: the shop says it can serve dishes for gluten-free diets and food allergies, and offers allergy-friendly dishes at dinner (own site); Tabelog lists gluten-free options; an October 2025 reviewer confirms GF options. Which dishes are gluten-free is not listed, and all food is prepared in one kitchen (breakfast menu) — tell staff when you order.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: a wide vegan à la carte at dinner and a vegan course on reservation (own site); vegan versions of most breakfast sets with plant-based French toast and vegan egg, plus vegan pancakes and yogurt at the breakfast station (breakfast menu; September 2026); a 2025 reviewer notes vegan dashi and vegan-meat rice bowls. Meat dishes (pork, chicken, beef stew) come from the same kitchen.',
    hours_raw: 'Daily: breakfast 7:00–10:00 (last orders 9:30), dinner 17:00–23:00 (last orders 22:00); days off irregular (own site). Dinner course on reservation only — message the chef on Instagram (own site). Cards, IC and e-money, some QR (Tabelog). 30 seats: an 8-seat counter and tables (Tabelog). Non-smoking, with a smoking area (Tabelog). Wheelchair accessible; English menu (Tabelog). In the lobby of IMU HOTEL KYOTO, a townhouse-style hotel just east of Shinmachi south of Bukkoji (October 2025; September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi south of Bukkoji — 7 min from Shijo / Karasuma',
    cuisine: 'Creative vegetable cooking with organic and naturally farmed produce, shojin techniques; vegan à la carte with meat options and allergy-friendly dishes at dinner (own site) · breakfast sets ¥1,800 (hotel guests ¥1,500) with a free breakfast station of drinks, pancakes, brownies, cereal and yogurt: plant-based French toast, Japanese breakfast with ganmodoki and miso soup, chili beans, burrito (breakfast menu) · 13-dish vegetable course with mock eel and three desserts, no animal fats (September 2026) · tofu and tempeh dishes, vegan dashi soups (February 2025)',
    website: SITE, gmaps: gm('野菜料理 OKI四条'), menu_url: SITE,
    notes: '[Vegetable cooking · Shinmachi-Bukkoji hotel lobby, vegan and GF] A vegetable-led restaurant in a small townhouse-style hotel: organic produce, a long vegan à la carte with meat as an option, gluten-free and allergy-friendly dishes on request, and a vegan course by reservation. Breakfast sets from 7:00 have vegan versions. Chef Taiki Kataoka, formerly in French kitchens, was a Vegetarian Chance Japan 2020 finalist. One kitchen for everything. Flagged: hotel restaurant (small local hotel).',
    chef_bio: { chef_name: '片岡大樹 (Taiki Kataoka)', roles: ['Chef'], origin: null,
      background: 'Worked as a chef in French restaurants before this post (own site). Selected as a finalist at the first Vegetarian Chance Japan 2020 (own site; October 2025 review). Plans the menu, cooks and serves (2025 review).',
      philosophy: 'Moved by the real needs of vegan and vegetarian guests, the chef works to raise the quality of vegetable cooking so that more people can enjoy eating; harmony between people and nature, using shojin techniques (own site).',
      specialty: 'Organic vegetable dishes; vegan courses.',
      anecdotes: [
        { text: 'A September 2026 diner had a 13-dish vegetable course whose main was a mock eel, with three desserts and no animal fat in any sauce or soup.', source: R + 'B536065387/' },
      ],
      japanese_sources_summary: '公式サイト: 野菜料理 OKI四条、IMU HOTEL KYOTO内 (下京区岩戸山町411)、朝食 7:00〜10:00 (L.O. 9:30)、ディナー 17:00〜23:00 (L.O. 22:00)、不定休、厳選した農家のオーガニック野菜や自然農法の野菜のみ使用、VEGANアラカルトを豊富に、お肉のオプションやアレルギー対応メニューも、事前予約制のVEGANコース、グルテンフリーやビーガン、ハラール、食物アレルギーなど様々な食事規定に対応した料理を提供できる。シェフ 片岡大樹、フレンチレストランのシェフを経て現職、精進料理の技法も取り入れる、第一回ベジタリアンチャンスジャパン2020ファイナリスト、予約はシェフのInstagramへDM。朝食メニュー (英語): 全セット1,800円 (宿泊者1,500円)、ドリンクやパンケーキのステーション付き、各セットにヴィーガン版、全ての料理は同じキッチンで調理。食べログ: 30席 (カウンター8席)、禁煙 (喫煙所あり)、車椅子可、英語メニュー、ヴィーガン・ベジタリアン・グルテンフリー・ハラール・コーシャのオプション。口コミ (2025〜2026年、英語): 豆腐やテンペの料理、ヴィーガン出汁のスープ、野菜13品のコースにうなぎもどき。',
      confidence: 'medium', sources: [SITE, BMENU, TB, R + 'B500543276/', R + 'B509869018/', R + 'B516683296/', R + 'B536065387/'] },
    cultural_comfort: { level: 'english', note: 'English menu; caters to vegan, vegetarian, gluten-free and allergy needs.' },
    safety: { dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'All food is prepared in the same kitchen space; tell staff about allergies or dietary needs (breakfast menu).', source: BMENU, verified: TODAY }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Vegan dishes share one kitchen with pork, chicken and beef dishes (breakfast menu).', source: BMENU, verified: TODAY }],
      staff_allergy_handling: [{ text: 'The shop says it can serve dishes for gluten-free, vegan, halal and food-allergy diets, and has allergy-friendly dishes at dinner.', source: SITE, verified: TODAY }],
      positives: [{ text: 'Organic and naturally farmed vegetables; vegan à la carte and a vegan course by reservation.', source: SITE, verified: TODAY }],
      confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区岩戸山町411 IMU HOTEL KYOTO',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site and Tabelog listing; reviews dated February 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.001234, 135.756837); cross-checked: GSI 京都府京都市下京区岩戸山町411番地 (lot) 59m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [BMENU, SITE],
    price_note: 'Breakfast prices from the shop’s breakfast menu; dinner prices not found.', last_checked: TODAY, items: [
      it('', '', 'Breakfast set A: plant-based French toast (vegan version available)', '¥1,800', 'Breakfast', 'ask', 'vegan', 'Breakfast menu; hotel guests ¥1,500.', 'bf_a'),
      it('', '', 'Breakfast set C: Japanese breakfast, rice, miso soup (vegan version with ganmodoki)', '¥1,800', 'Breakfast', 'ask', 'vegan', 'Breakfast menu.', 'bf_c'),
      it('', '', 'Breakfast set D: toast, egg, pork chili beans (vegan version available)', '¥1,800', 'Breakfast', 'ask', 'vegan', 'Breakfast menu.', 'bf_d'),
      it('', '', 'Vegan dinner course (reservation only)', '', 'Dinner', 'ask', 'vegan', 'Own site; September 2026.', 'vegan_course'),
    ] }, {
    cuisine: 'オーガニックや自然農法の野菜を使った創作野菜料理、精進料理の技法も。夜はヴィーガンのアラカルトにお肉のオプション、アレルギー対応メニュー (公式サイト)・朝食セット1,800円 (宿泊者1,500円)、ドリンク・パンケーキ・ブラウニー・シリアル・ヨーグルトのステーション付き。植物性のフレンチトースト、がんもどきと味噌汁の和朝食、チリビーンズ、ブリトー (朝食メニュー)・うなぎもどきとデザート3品の野菜13品のコース、動物性脂肪不使用 (2026年9月)・豆腐やテンペの料理、ヴィーガン出汁のスープ (2025年2月)',
    neighborhood: '仏光寺の南、新町通。四条・烏丸から徒歩7分',
    gf_detail: 'グルテンフリーの選択肢あり。グルテンフリーや食物アレルギーに対応した料理を提供でき、夜はアレルギー対応メニューも (公式サイト)。食べログにもグルテンフリーのオプション、2025年10月の口コミでも確認。どの料理がグルテンフリーかは書かれておらず、全ての料理は同じキッチンで調理 (朝食メニュー)。注文時に伝えること。',
    vegan_detail: 'ヴィーガンの選択肢あり。夜はヴィーガンのアラカルトが豊富で、予約制のヴィーガンコースも (公式サイト)。朝食はほとんどのセットにヴィーガン版があり、植物性のフレンチトーストやヴィーガンエッグ、ステーションにはヴィーガンのパンケーキとヨーグルト (朝食メニュー、2026年9月)。2025年の口コミではヴィーガン出汁やヴィーガンミートの丼。豚、鶏、ビーフシチューも同じキッチン。',
    notes: '[野菜料理・新町仏光寺のホテルのロビー、ヴィーガンとグルテンフリー] 町家風の小さなホテルの中の野菜が主役の店。オーガニック野菜、お肉はオプションのヴィーガンのアラカルトが豊富、グルテンフリーやアレルギー対応も相談でき、予約制のヴィーガンコースも。7時からの朝食セットにもヴィーガン版。シェフの片岡大樹はフランス料理出身で、ベジタリアンチャンスジャパン2020のファイナリスト。キッチンは一つ。ホテル内の店 (地元の小さなホテル、要確認)。',
  });
}

// ================================================================ 居酒屋charlie
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042594/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_izakaya_charlie_karasuma_oike', name: '居酒屋charlie (izakayachari)', category: 'OMNI',
    lat: 35.007124, lng: 135.757281, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hayashi rice, fries, canapés, carpaccio and potato salad; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamachi, salmon roe, tuna, octopus and duck dominate the menu (2026 reviews).',
    hours_raw: '17:00–23:00; days off irregular — check the shop’s Instagram (Tabelog). Opened 16 February 2025 (Tabelog). Reservations by phone only (Tabelog); popular — book ahead (April and August 2026). No service or cover charge (Tabelog, original サービス料、チャージ料どちらもなし). Cash only: no cards, e-money or QR (Tabelog). Two floors with an atrium in an old Kyoto building, about 20–30 seats, plus standing room at the counter (June, July and August 2026). Non-smoking (Tabelog). 7 min on foot from Karasuma-Oike (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Karasuma-Oike — 7 min from the station',
    cuisine: 'A stylish, low-priced izakaya with dishes around ¥800 (April 2026) · “slightly adult” potato salad ¥650; fries with dill cream ¥800; salmon-roe and wasabi-cream canapés ¥800; toro-taku ¥850; Charlie’s hayashi rice ¥800 (April 2026) · hamachi carpaccio; octopus and avocado (April and May 2026) · duck; thick-cut hamachi sashimi (August 2026) · spiced drinks (May 2026)',
    website: null, gmaps: gm('居酒屋charlie 京都'), menu_url: TB,
    notes: '[Izakaya · Karasuma-Oike, opened 2025] A small, stylish izakaya in an old Kyoto building with an atrium, popular with a young crowd: playful plates like salmon-roe canapés with wasabi cream, hamachi carpaccio and hayashi rice, most around ¥800. Friendly staff; cash only; book by phone.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened on 16 February 2025 (Tabelog). Reviewers describe friendly, attentive staff and a mostly twenty-something crowd (April and May 2026). No operator was found.',
      philosophy: null, specialty: 'Small plates: canapés, carpaccio, hayashi rice.',
      anecdotes: [
        { text: 'An April 2026 diner liked the hamachi carpaccio so much as to order it twice.', source: R + 'B527093628/' },
        { text: 'A May 2026 passer-by asked to come in on a whim and was seated just before the place filled up.', source: R + 'B532131598/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋charlie、居酒屋、中京区玉蔵町136、烏丸御池駅から徒歩7分、17:00〜23:00、不定休 (Instagramで告知)、2025年2月16日オープン、電話予約のみ、サービス料・チャージ料なし、カード・電子マネー・QR不可、禁煙。口コミ (2026年、英語): ちょっと大人のポテトサラダ650円、ディルクリームのフライドポテト800円、いくらとわさびクリームのカナッペ800円、トロたく850円、チャーリーのハヤシライス800円、ハマチのカルパッチョ、タコとアボカド、鴨、厚切りのハマチの刺身、吹き抜けのある2階建ての京都の古い建物、立ち飲みのカウンター、予約がおすすめ。',
      confidence: 'low', sources: [TB, R + 'B527093628/', R + 'B527225486/', R + 'B528180371/', R + 'B532131598/', R + 'B532421575/', R + 'B532789794/', R + 'B534400672/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff; cash only; phone reservations.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区玉蔵町136',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened February 2025; reviews dated April to August 2026.' },
    pin_source: `Tabelog ${TB} (35.007124, 135.757281); cross-checked: GSI 京都府京都市中京区玉蔵町136番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527225486/'],
    price_note: 'Prices from an April 2026 review; no service or cover charge.', last_checked: TODAY, items: [
      it('', '', 'Salmon-roe and wasabi-cream canapés (2)', '¥800', 'Small plates', 'no', 'no', 'April and May 2026.', 'canape'),
      it('', '', 'Toro-taku', '¥850', 'Small plates', 'ask', 'no', 'April 2026.', 'torotaku'),
      it('', '', 'Fries with dill cream', '¥800', 'Small plates', 'ask', 'ask', 'April 2026.', 'fries'),
      it('', '', 'Charlie’s hayashi rice', '¥800', 'Rice', 'no', 'no', 'April 2026.', 'hayashi'),
      it('', '', 'Hamachi carpaccio', '', 'Small plates', 'ask', 'no', 'April and May 2026.', 'carpaccio'),
    ] }, {
    cuisine: 'おしゃれで手頃な居酒屋、料理は800円前後 (2026年4月)・ちょっと大人のポテトサラダ650円、ディルクリームのフライドポテト800円、いくらとわさびクリームのカナッペ800円、トロたく850円、チャーリーのハヤシライス800円 (2026年4月)・ハマチのカルパッチョ、タコとアボカド (2026年4・5月)・鴨、厚切りのハマチの刺身 (2026年8月)・スパイスの効いたドリンク (2026年5月)',
    neighborhood: '烏丸御池。駅から徒歩7分',
    gf_detail: '要確認。ハヤシライス、フライドポテト、カナッペ、カルパッチョ、ポテトサラダ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。ハマチ、いくら、マグロ、タコ、鴨が中心 (2026年の口コミ)。',
    notes: '[居酒屋・烏丸御池、2025年開店] 吹き抜けのある京都の古い建物の小さなおしゃれな居酒屋で、若い客が多い。いくらとわさびクリームのカナッペ、ハマチのカルパッチョ、ハヤシライスなど遊び心のある料理がほぼ800円前後。スタッフは気さく。現金のみ、予約は電話で。',
  });
}

// ================================================================ Comida Latina COSTA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025044/'; const R = TB + 'dtlrvwlst/';
  const HW = day(['12:00', '15:00'], ['18:00', '01:00']);
  const HSS = day(['18:00', '01:00']);
  put({
    id: 'kyoto_comida_latina_costa', name: 'コミーダ ラティーナ コスタ (Comida Latina COSTA)', category: 'OMNI',
    lat: 35.008549, lng: 135.758296, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tacos, house-fried tortilla chips, nachos, quesadillas, fried chicken, menchi-katsu and pasta; whether the tortillas are corn or wheat is not stated (Tabelog menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Salsa and guacamole chips, green salad, mushroom ajillo and broccoli aglio e olio may be plant-only, but nothing is described as vegan (Tabelog menu).',
    hours_raw: 'Monday and Wednesday–Friday 12:00–15:00 (last orders 14:00) and 18:00–01:00 (food last orders 24:00); Saturday, Sunday and public holidays 18:00–01:00; closed Tuesday (Tabelog). Cards; no e-money or QR (Tabelog). 40 seats: 8 at the counter, 26 at tables, 3 on a sofa; private hire for 20–50 (Tabelog). Smoking allowed at the counter only (Tabelog). Second floor, 2 min from Karasuma-Oike exit 6 (Tabelog). Open since 23 November 2014 (Tabelog).',
    hours: { 0: HW, 2: HW, 3: HW, 4: HW, 5: HSS, 6: HSS }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Oike — 2 min from exit 6',
    cuisine: 'Mexican and Spanish food with a long list of tequila, rum and wine cocktails (Tabelog; August 2026) · birria tacos with beef broth for dipping ¥1,780; chicken taco ¥630; special nachos ¥1,780; guacamole chips ¥880; jamón sliced to order ¥780 / ¥1,280; mushroom ajillo ¥980; broccoli aglio e olio ¥780; Caesar salad ¥980 (Tabelog menu) · chicken, beef and shrimp tacos; tortilla chips fried in house; quesadillas; beef outside skirt; chicharrón (July–September 2026) · house “Mascaras” hot sauce sold by the bottle (August 2026)',
    website: null, gmaps: gm('Comida Latina COSTA 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Mexican and Spanish · Karasuma-Oike, since 2014] A bright, lively upstairs bar-restaurant two minutes from Karasuma-Oike: tacos, birria, nachos from tortillas fried in house, jamón and ajillo, with plenty of tequila, rum and wine cocktails. Lunch on weekdays except Tuesday; open to 1:00. Smoking at the counter. Flagged: operator unknown.',
    chef_bio: { chef_name: null, roles: ['Manager (unnamed)'], origin: null,
      background: 'Open since 23 November 2014 (Tabelog). An August 2026 reviewer describes the manager guiding a tasting of tequilas. No operator was found.',
      philosophy: null, specialty: 'Tacos and nachos; tequila.',
      anecdotes: [
        { text: 'An August 2026 repeat visitor bought two bottles of the house Mascaras sauce to use at home.', source: R + 'B534516743/' },
        { text: 'An August 2026 diner who had only known Doritos-style nachos was won over by the thick, warm house-fried chips.', source: R + 'B533786661/' },
      ],
      japanese_sources_summary: '食べログ: コミーダ ラティーナ コスタ、メキシコ料理・スペイン料理・タコス、中京区御倉町66-3 NPビル 2F、地下鉄烏丸御池駅6番出口から徒歩2分、月・水〜金 12:00〜15:00 (L.O. 14:00)・18:00〜翌1:00 (料理L.O. 0:00)、土日祝日 18:00〜翌1:00、火曜定休、2014年11月23日オープン、カード可、電子マネー・QR不可、40席 (カウンター8席、テーブル26席、ソファ3席)、カウンターのみ喫煙可。メニュー: ビリアタコス1,780円、チキン630円、スペシャルナチョス1,780円、ワカモレチップス880円、生ハム780円/1,280円、マッシュルームのアヒージョ980円、ブロッコリーのアーリオオーリオ780円、シーザーサラダ980円。口コミ (2026年、英語): 自家製のトルティーヤチップス、ケサディーヤ、ハラミ、チチャロン、テキーラやラムが豊富、マスカラスソースを瓶で購入。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B531160280/', R + 'B532949859/', R + 'B533656246/', R + 'B533786661/', R + 'B534516743/', R + 'B534646688/', R + 'B535656427/', R + 'B535896127/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lively bar atmosphere; smoking at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御倉町66-3 NPビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated July to October 2026.' },
    pin_source: `Tabelog ${TB} (35.008549, 135.758296); cross-checked: GSI 京都府京都市中京区御倉町66番地 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from the Tabelog menu (shop-supplied).', last_checked: TODAY, items: [
      it('', '', 'Birria tacos with beef broth', '¥1,780', 'Tacos', 'ask', 'no', 'Tabelog menu.', 'birria'),
      it('', '', 'Chicken taco', '¥630', 'Tacos', 'ask', 'no', 'Tabelog menu.', 'taco_chicken'),
      it('', '', 'Special nachos', '¥1,780', 'Nachos', 'ask', 'no', 'Tabelog menu; September 2026.', 'nachos'),
      it('', '', 'Guacamole chips', '¥880', 'Starters', 'ask', 'ask', 'Tabelog menu.', 'guac'),
      it('', '', 'Mushroom ajillo', '¥980', 'Ajillo', 'ask', 'ask', 'Tabelog menu.', 'ajillo_mushroom'),
      it('', '', 'Broccoli aglio e olio', '¥780', 'Starters', 'ask', 'ask', 'Tabelog menu.', 'broccoli'),
    ] }, {
    cuisine: 'メキシコ料理とスペイン料理、テキーラ、ラム、ワインカクテルが豊富 (食べログ、2026年8月)・牛のスープに浸すビリアタコス1,780円、チキンのタコス630円、スペシャルナチョス1,780円、ワカモレチップス880円、注文後に切る生ハム780円/1,280円、マッシュルームのアヒージョ980円、ブロッコリーのアーリオオーリオ780円、シーザーサラダ980円 (食べログのメニュー)・チキン・ビーフ・海老のタコス、店で揚げるトルティーヤチップス、ケサディーヤ、ハラミ、チチャロン (2026年7〜9月)・自家製の「マスカラス」ソースを瓶で販売 (2026年8月)',
    neighborhood: '烏丸御池。6番出口から徒歩2分',
    gf_detail: '要確認。タコス、店で揚げるトルティーヤチップス、ナチョス、ケサディーヤ、唐揚げ、メンチカツ、パスタ。トルティーヤがとうもろこしか小麦かは書かれていない (食べログのメニュー、2026年の口コミ)。',
    vegan_detail: '要確認。サルサやワカモレのチップス、グリーンサラダ、マッシュルームのアヒージョ、ブロッコリーのアーリオオーリオは植物性かもしれないが、ヴィーガンと書かれた品はない (食べログのメニュー)。',
    notes: '[メキシコ・スペイン料理・烏丸御池、2014年から] 烏丸御池から2分、明るくにぎやかな2階のバー・レストラン。タコス、ビリア、店で揚げるトルティーヤのナチョス、生ハムやアヒージョに、テキーラ、ラム、ワインカクテルが豊富。ランチは火曜以外の平日、夜は1時まで。カウンターは喫煙可。運営会社は不明 (要確認)。',
  });
}

// ================================================================ 山梨製餡 (retail ruling a)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033252/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yamanashiseian.co.jp/'; const CO = SITE + 'company.html';
  const H = day(['09:00', '16:00']);
  put({
    id: 'kyoto_yamanashi_seian', name: '山梨製餡 (Yamanashi Seian)', category: 'OMNI',
    lat: 35.009897, lng: 135.778603, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bean paste (an), sweetened beans and black-bean glacé; ingredients are not listed in our sources (own site; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean paste and sweetened beans are not described as vegan; ingredients are not listed in our sources (own site; 2025–2026 reviews).',
    hours_raw: 'Takeaway only — a bean-paste maker’s shop counter, no seating (Tabelog). Monday and Wednesday–Friday 9:00–16:00; closed Tuesday, Saturday and Sunday (Tabelog); the company site gives 9:00–16:00 closed Saturdays, Sundays and public holidays — check Tuesdays. Cards (Tabelog). 1 min from Higashiyama station exit 2 (own site).',
    hours: { 0: H, 2: H, 3: H, 4: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Sanjo — east of Higashioji, 1 min from Higashiyama station',
    cuisine: 'Takeaway only: a Kyoto bean-paste maker founded in 1920, making raw and sweetened an, dried an, kanoko beans and simmered beans for confectioners (own site) · Kyoto white smooth bean paste 500 g ¥648; monaka to fill with an (June 2025) · Kyoto black-bean glacé soaked in rum (February 2026)',
    website: SITE, gmaps: gm('山梨製餡 京都'), menu_url: SITE,
    notes: '[Bean-paste maker · Higashiyama-Sanjo, since 1920, takeaway only] A family bean-paste maker on the same spot since 1920, now in its third generation, supplying Kyoto’s confectioners and selling an, sweetened beans and black-bean glacé from its shop counter. Takeaway only — no seating; weekdays only.',
    chef_bio: { chef_name: '山梨彰一 (reading not sourced)', roles: ['Third-generation president (代表取締役)'], origin: 'Kyoto',
      background: 'Founded in 1920 (Taisho 9) on the present site by the first president, 山梨福一 (reading not sourced); closed for two years by wartime order from 1944; incorporated in 1960, when the second-generation 山梨龍一 (reading not sourced) became president; the third generation, 山梨彰一, took over in 1997. The building was remodelled in 1932 and 1950; 16 staff (own site).',
      philosophy: 'Aims for an that people call truly delicious, made from beans grown year after year by farmers in Hokkaido, Tanba and abroad (own site).',
      specialty: 'Bean paste (an) and sweetened beans.',
      anecdotes: [
        { text: 'A June 2025 reviewer, given white bean paste from here, tried it on bread at a friend’s suggestion.', source: R + 'B508849702/' },
        { text: 'A February 2026 reviewer felt a little tipsy from the rum in the black-bean glacé.', source: R + 'B523059859/' },
      ],
      japanese_sources_summary: '公式サイト: 株式会社山梨製餡、創業1920年 京都東山三条、大正9年 (1920年) に初代社長 山梨福一が現在地にて創業、昭和19年 (1944年) 戦時中の強制閉鎖二ヶ年、昭和35年 (1960年) 二代目 山梨龍一が社長に就任、平成9年 (1997年) 三代目 山梨彰一が社長に就任、昭和7年と25年に改築、代表取締役 山梨彰一、社員16名、生餡・加糖餡・乾燥餡・かのこ豆・煮豆の製造・加工・販売、本社・売店、営業時間 9:00〜16:00、土日祝日定休、地下鉄東山駅2番出口徒歩1分。食べログ: 山梨製餡、和菓子、左京区孫橋通東大路東入南門前町538、月・水〜金 9:00〜16:00、火土日定休、テイクアウトのみ、カード可。口コミ (英語): 京白こし餡500g 648円、もなか (2025年6月)、京黒豆グラッセ (2026年2月)。',
      confidence: 'medium', sources: [SITE, CO, TB, R + 'B508849702/', R + 'B523059859/'] },
    cultural_comfort: { level: 'japanese', note: 'A maker’s shop counter for takeaway; no seating.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区孫橋通東大路東入南門前町538',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own company site and Tabelog listing; reviews dated June 2025 and February 2026.' },
    pin_source: `Tabelog ${TB} (35.009897, 135.778603); cross-checked: GSI 京都府京都市左京区南門前町538番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508849702/', CO],
    price_note: 'One price from a June 2025 review. Takeaway only.', last_checked: TODAY, items: [
      it('', '', 'Kyoto white smooth bean paste, 500 g (takeaway)', '¥648', 'Bean paste', 'ask', 'ask', 'June 2025.', 'shiro_koshian'),
      it('', '', 'Kyoto black-bean glacé with rum (takeaway)', '', 'Sweetened beans', 'ask', 'ask', 'February 2026.', 'kuromame_glace'),
    ] }, {
    cuisine: 'テイクアウトのみ。1920年創業の京都の製餡所。生餡、加糖餡、乾燥餡、かのこ豆、煮豆を製造 (公式サイト)・京白こし餡500g 648円、餡を挟むもなか (2025年6月)・ラム酒に漬けた京黒豆グラッセ (2026年2月)',
    neighborhood: '東山三条。東大路の東、東山駅から徒歩1分',
    gf_detail: '要確認。餡、煮豆、黒豆グラッセ。材料は手元の情報源に書かれていない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。餡や煮豆はヴィーガンとは書かれておらず、材料も手元の情報源にない (公式サイト、2025〜2026年の口コミ)。',
    notes: '[製餡所・東山三条、1920年創業、テイクアウトのみ] 1920年から同じ場所で営む家族経営の製餡所で、現在は三代目。京都の和菓子屋に餡を納め、店頭でも餡、煮豆、黒豆グラッセを販売。テイクアウトのみで席はなし。平日のみ営業。',
  });
}

save();
