// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 80.
//   + DUNSTAN COFFEE ROASTERS (church-styled hand-drip coffee stand, open mornings only, Takatsuji) — rest
//   - skip 26044864 鴨ときどき馬 四条烏丸本店 (large parent: DD Holdings)
//   - skip 26005708 タキノ (retail food shop; no 2025–26 review)
//   - skip 26033950 リストランテ ラ・ルーチェ (inside THE HIRAMATSU Kyoto, a hotel chain)
//   + あらちゃん Arachan (okonomiyaki and teppan by Gion Kagetsu, open to 1 am) — rest
//   - skip 26004352 中国料理 翡翠苑 (Hotel Nikko Princess Kyoto)
//   - skip 26007358 津乃吉 (retail food shop)
//   - skip 26013556 フィゲラス 烏丸店 (same brand in data)
//   + 鉄板創作りあん Teppan Sosaku Rian (wagyu teppan omakase near Shijo-Karasuma) — rest
//   + 前田豊三郎商店 Maeda Toyosaburo Shoten (wine and sake shop with a tasting counter, Higashinotoin-Sanjo) — rest
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: the ダニエルズ group skip (26002212)
//   names a ルーチェ, but ラ・ルーチェ here is the Hiramatsu hotel restaurant, unrelated; no rulings for DUNSTAN, 鴨ときどき馬, タキノ,
//   あらちゃん, 翡翠苑, 津乃吉, フィゲラス, りあん or 前田豊三郎商店.
//   Same-name counts first (2026-11-08): DUNSTAN — one. あらちゃん — one. りあん — one. 前田豊三郎商店 — one. フィゲラス 祇園店 is in data.
//   None of the four drafted is in data/kyoto.json.
//   Retail rule (Greg 11-07): 津乃吉's site (tsunokiti.com, read 2026-11-08) gives a company founded about 31 years ago and no GF or
//   vegan claim, so it is skipped; タキノ is sales-only with no review since 2022.
//   Charges per Tabelog's Japanese original: りあん 「無し」; DUNSTAN, あらちゃん and 前田豊三郎商店 none listed. No halal claims; no
//   owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-80');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044864', 'large parent: 鴨ときどき馬 is a DD Holdings brand — its Tabelog page links to dd-holdings.jp (https://www.dd-holdings.jp/shops/kamotokidokiuma/shijokarasuma; https://tabelog.com/en/kyoto/A2601/A260201/26044864/).');
skip('26005708', 'retail food shop (Greg 11-07 ruling): タキノ sells sweets only, with no eating inside, and its latest Tabelog review is from November 2022 (https://tabelog.com/en/kyoto/A2601/A260201/26005708/).');
skip('26033950', 'venue inside a big-chain hotel (Greg 11-08 ruling): リストランテ ラ・ルーチェ is the restaurant of THE HIRAMATSU 京都, one of the Hiramatsu hotels (https://www.hiramatsuhotels.com/kyoto/cuisine/laluce/; https://tabelog.com/en/kyoto/A2601/A260202/26033950/).');
skip('26004352', 'venue inside a big-chain hotel (Greg 11-08 ruling): 中国料理 翡翠苑 is in Hotel Nikko Princess Kyoto (https://tabelog.com/en/kyoto/A2601/A260101/26004352/).');
skip('26007358', 'retail food shop (Greg 11-07 ruling): 津乃吉 sells tsukudani and dashi with four tasting seats; its site gives a company about 31 years old (founded around 1995) and no GF or vegan claim (http://www.tsunokiti.com/; https://tabelog.com/en/kyoto/A2601/A260301/26007358/).');
skip('26013556', 'same-concept branch of a brand already in data: フィゲラス — data has フィゲラス 祇園店 (Figueras, Gion) (https://tabelog.com/en/kyoto/A2601/A260201/26013556/).');

// ================================================================ DUNSTAN COFFEE ROASTERS
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037538/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://dunstancoffee.jp/';
  const H = day(['09:30', '11:30']);
  put({
    id: 'kyoto_dunstan_coffee_roasters', name: 'DUNSTAN COFFEE ROASTERS', category: 'OMNI',
    lat: 35.000095, lng: 135.761034, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee only — no food or sweets are served (February 2025).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Hand-drip coffee and Americano are served black (2025–26 reviews); lattes use milk. Coffee only, no food (February 2025).',
    hours_raw: 'Mon, Tue, Wed and Sat 9:30–11:30; closed Thursday, Friday and Sunday; may change (Tabelog). Cards, e-money and QR (Tabelog). A counter at the back and benches and tables at the front; takeaway (Tabelog; February 2025). Non-smoking (Tabelog). Ragusa Higashinotoin-Takatsuji 1F, about 6 min from Shijo, Karasuma or Gojo stations (Tabelog). Opened 29 April 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-Takatsuji — Shijo / Gojo',
    cuisine: 'Coffee stand and roaster with a church-like interior; coffee only, no food · hand-drip ¥700 regular (300 ml), ¥900 large (450 ml), nine beans with poetic names and a roast chart (February 2025; February 2026) · café latte and strong latte (March 2025) · fruity "REALLY GOOD LUCK" beans (February 2026) · Americano (August 2026)',
    website: SITE, gmaps: gm('DUNSTAN COFFEE ROASTERS 京都'), menu_url: TB,
    notes: '[Coffee stand · Takatsuji, mornings only] A tiny roaster that looks like a select shop outside and a small church inside, run by a former designer: nine single-origin and blend beans with poetic names, hand-dripped at ¥700–900, plus lattes. Open only 9:30–11:30 on four mornings a week; coffee only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), a former designer (February 2025)'], origin: null,
      background: 'Per Tabelog and reviews: a coffee stand and roaster opened in April 2022 near Bukkoji, with a church-inspired interior designed by its owner, formerly a designer.',
      philosophy: null, specialty: 'Hand-drip coffee.',
      anecdotes: [
        { text: 'A February 2025 visitor chose the DUNSTAN BLEND from nine beans with names like prayers, using a roast chart.', source: R + 'B499008890/' },
        { text: 'A February 2026 visitor picked the fruitiest bean, REALLY GOOD LUCK, in a large cup and called it the fruitiest coffee yet.', source: R + 'B522566863/' },
        { text: 'A March 2025 visitor arriving near closing took two lattes to go.', source: R + 'B503604901/' },
      ],
      japanese_sources_summary: '食べログ: コーヒースタンド・カフェ、下京区燈籠町559-2 Ragusa東洞院高辻 1F、地下鉄四条駅・阪急烏丸駅・地下鉄五条駅から徒歩約6分、月・火・水・土9:30〜11:30、木・金・日休み、カード・電子マネー・QR 可、カウンターとベンチ、テイクアウト、禁煙、2022年4月29日オープン。口コミ (2023年8月〜2026年8月、英語): 教会のような店内、元デザイナーの店主、コーヒーのみで料理や菓子はない、ハンドドリップ700円 (300ml)・900円 (450ml)、詩のような名前の9種の豆、焙煎の表、カフェラテ、アメリカーノ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B449373944/', R + 'B469775596/', R + 'B484902162/', R + 'B488388932/', R + 'B493899007/', R + 'B499008890/', R + 'B501634042/', R + 'B503604901/', R + 'B518317881/', R + 'B521122676/', R + 'B522566863/', R + 'B533007317/'] },
    cultural_comfort: { level: 'none_needed', note: 'Choose a bean from the roast chart and order at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区燈籠町559-2 Ragusa東洞院高辻 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.000095, 135.761034); cross-checked: GSI 京都府京都市下京区燈籠町559番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499008890/', R + 'B522566863/'],
    price_note: 'Prices from February 2025 and February 2026.', last_checked: TODAY, items: [
      it('', '', 'Hand-drip coffee (regular, 300 ml)', '¥700', 'Coffee', 'ask', 'vegan', 'Black; February 2025.', 'drip_regular'),
      it('', '', 'Hand-drip coffee (large, 450 ml)', '¥900', 'Coffee', 'ask', 'vegan', 'Black; February 2026.', 'drip_large'),
      it('', '', 'Café latte', '', 'Coffee', 'ask', 'no', 'Milk; March 2025.', 'latte'),
    ] }, {
    cuisine: '教会のような店内のコーヒースタンドと焙煎所。コーヒーのみで料理はない・ハンドドリップ700円 (300ml)、900円 (450ml)、詩のような名前の9種の豆と焙煎の表 (2025年2月、2026年2月)・カフェラテとストロングラテ (2025年3月)・フルーティーな REALLY GOOD LUCK (2026年2月)・アメリカーノ (2026年8月)',
    neighborhood: '東洞院高辻。四条・五条',
    gf_detail: '要確認。コーヒーのみで、料理や菓子はない (2025年2月)。',
    vegan_detail: 'ハンドドリップやアメリカーノはブラック (2025〜2026年の口コミ)。ラテは牛乳を使う。コーヒーのみで料理はない (2025年2月)。',
    notes: '[コーヒースタンド・高辻、朝だけ] 外はセレクトショップ、中は小さな教会のような焙煎所。元デザイナーの店主が、詩のような名前の9種の豆を700〜900円でハンドドリップ、ラテも。週4日、朝9時半から11時半だけの営業。コーヒーのみ。',
  });
}

// ================================================================ あらちゃん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017546/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '01:00']);
  put({
    id: 'kyoto_arachan_higashiyama', name: 'あらちゃん (Arachan)', category: 'OMNI',
    lat: 35.005691, lng: 135.777497, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, negiyaki and yakisoba (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, seafood, A5 beef and egg (Tabelog; 2025–26 reviews).',
    hours_raw: 'Mon and Wed–Sun 11:30–1:00 (last order 0:00); closed Tuesday (Tabelog). Lunch set meals (February and October 2025). Tabelog says no cards, but an October 2025 diner paid by card and PayPay. 40 seats incl. a tatami room; whole-shop hire for up to 20 (Tabelog). Smoking allowed (Tabelog). Takeaway (Tabelog). On Higashioji by the Chion-in bus stop, near Gion Kagetsu, 6 min from Gion-Shijo (Tabelog; September and December 2025).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashioji, near Gion Kagetsu — Gion-Shijo / Higashiyama',
    cuisine: 'Okonomiyaki and creative teppanyaki: fluffy okonomiyaki, A5 diced steak, Kyoto tofu and Kujo green-onion dishes, a regulars’ omelette (Tabelog) · quick lunch sets (February 2025) · tongue and ribeye on the teppan (September 2025) · buta-tama okonomiyaki set with rice, miso soup and a side ¥1,150 (October 2025) · banquet course for 15 (November 2025) · pork okonomiyaki, pork negiyaki, yakisoba (December 2025) · seafood okonomiyaki with shrimp, squid and scallops; pork negiyaki with a fried egg (November 2026)',
    website: null, gmaps: gm('あらちゃん 祇園 お好み焼き'), menu_url: TB,
    notes: '[Okonomiyaki · Higashioji, to 1 am] A cheerful okonomiyaki and teppan house by Gion Kagetsu theatre, its walls covered in comedians’ autographs: fluffy okonomiyaki, negiyaki, yakisoba, A5 diced steak and tongue, with good-value lunch sets (buta-tama ¥1,150) and late hours. Smoking allowed; closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: an okonomiyaki shop near the Gion Kagetsu theatre, popular with Yoshimoto comedians, now adding creative teppan dishes.',
      philosophy: null, specialty: 'Okonomiyaki; teppan steak.',
      anecdotes: [
        { text: 'A November 2025 regular brought a work party of 15 for the banquet course and noted it is a favourite of Yoshimoto comedians.', source: R + 'B282291397/' },
        { text: 'A December 2025 solo diner nearly skipped it as a regulars-only place, then came back and found it the best option nearby.', source: R + 'B520691857/' },
        { text: 'A February 2025 lunch guest had food on the table about five minutes after ordering.', source: R + 'B502164160/' },
      ],
      japanese_sources_summary: '食べログ: お好み焼き、東山区大和大路新橋東入ル林下町438、阪急河原町駅から徒歩10分、京阪祇園四条駅から徒歩6分、月・水〜日・祝日11:30〜翌1:00 (L.O. 0:00)、火曜休み、カード不可 (2025年10月の口コミではカードと PayPay 可)、40席、座敷、喫煙可、テイクアウト、ふわふわのお好み焼き、A5 の角切りステーキ、京都の豆腐と Kujo ねぎの料理、常連に人気の卵焼き。口コミ (2022年10月〜2026年11月、英語): 祇園花月の近く、芸人のサインがいっぱい、昼の定食 (豚玉定食1,150円)、タンとリブロース、15名の宴会コース、ねぎ焼き、焼きそば、海鮮のお好み焼き、目玉焼きのせの豚ねぎ焼き。',
      confidence: 'medium', sources: [TB, R + 'B282291397/', R + 'B455381838/', R + 'B456867853/', R + 'B484523646/', R + 'B485687063/', R + 'B502164160/', R + 'B513099141/', R + 'B514567397/', R + 'B515738165/', R + 'B518515668/', R + 'B520691857/', R + 'B538931666/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in for the lunch sets; book for groups. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路新橋東入ル林下町438',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005691, 135.777497); cross-checked: GSI 京都府京都市東山区林下町438番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515738165/'],
    price_note: 'Lunch price from October 2025.', last_checked: TODAY, items: [
      it('', '', 'Buta-tama okonomiyaki lunch set', '¥1,150', 'Lunch', 'no', 'no', 'With rice, miso soup and a side; October 2025.', 'butatama_set'),
      it('', '', 'Seafood okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'November 2026.', 'seafood'),
      it('', '', 'Pork negiyaki', '', 'Negiyaki', 'no', 'no', 'December 2025; November 2026.', 'negiyaki'),
      it('', '', 'A5 diced steak', '', 'Teppan', 'ask', 'no', 'Tabelog.', 'kakugiri'),
    ] }, {
    cuisine: 'お好み焼きと創作鉄板焼き。ふわふわのお好み焼き、A5 の角切りステーキ、京都の豆腐と Kujo ねぎの料理、常連に人気の卵焼き (食べログ)・提供の早い昼の定食 (2025年2月)・鉄板のタンとリブロース (2025年9月)・ご飯、味噌汁、小鉢付きの豚玉定食1,150円 (2025年10月)・15名の宴会コース (2025年11月)・豚玉、豚ねぎ焼き、焼きそば (2025年12月)・えび、いか、ホタテの海鮮のお好み焼き、目玉焼きのせの豚ねぎ焼き (2026年11月)',
    neighborhood: '東大路、祇園花月の近く。祇園四条・東山',
    gf_detail: 'グルテンフリーではない。お好み焼き、ねぎ焼き、焼きそば (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、海鮮、A5 の牛肉、卵 (食べログ、2025〜2026年の口コミ)。',
    notes: '[お好み焼き・東大路、深夜1時まで] 祇園花月の近く、芸人のサインが壁を埋める明るいお好み焼きと鉄板の店。ふわふわのお好み焼き、ねぎ焼き、焼きそば、A5 の角切りステーキやタン。お得な昼の定食 (豚玉1,150円) と深夜までの営業。喫煙可。火曜休み。',
  });
}

// ================================================================ 鉄板創作りあん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26031832/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://lien-kyoto.com/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_teppan_sosaku_rian', name: '鉄板創作りあん (Teppan Sosaku Rian)', category: 'OMNI',
    lat: 35.000866, lng: 135.760377, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan wagyu courses with seasonal vegetables (2025–26 reviews); wagyu fillet katsu sandwiches are also sold (Tabelog); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu teppan restaurant (Tabelog; 2025–26 reviews).',
    hours_raw: 'Mon–Sat 17:30–22:00; closed Sunday (Tabelog). Reservations accepted (Tabelog). No service charge (Tabelog, Japanese text: 「無し」). Cards and PayPay; no e-money (Tabelog). 16 seats: a 10-seat counter and a private room for 6 (Tabelog). Bukkoji-dori east of Karasuma, 1 min from Shijo or Hankyu Karasuma (Tabelog). Opened 18 January 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Bukkoji-dori, east of Karasuma — Shijo / Karasuma',
    cuisine: 'Teppanyaki of Kuroge wagyu and seasonal Kyoto ingredients in kaiseki style, with over 50 wines and sakes; omakase courses such as 100 g Matsusaka strip loin ¥28,600 or 100 g Chateaubriand; wagyu fillet katsu sandwiches to order (Tabelog) · Chateaubriand (March 2025) · meat kaiseki of many small meat dishes (July 2025) · salad of vegetables from Ayabe, Joyo and Ohara, Kaga lotus root, Aomori corn and Kagawa kiwi; 100 g fillet of Ushi no Nakayama wagyu (September 2026)',
    website: SITE, gmaps: gm('鉄板創作りあん 京都'), menu_url: TB,
    notes: '[Wagyu teppan · Shijo-Karasuma, since 2019] A ten-seat teppan counter plus a private room just off Shijo-Karasuma, cooking Kuroge wagyu — Matsusaka strip loin, Chateaubriand, prize-winning Ushi no Nakayama fillet — in kaiseki-style courses with Kyoto vegetables and a 50-strong wine and sake list. Polished service; wagyu katsu sandwiches to order. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed) (Tabelog)'], origin: null,
      background: 'Per Tabelog: a teppanyaki restaurant opened in January 2019, serving Kyoto-cuisine-inspired meat dishes of selected Kuroge wagyu and seasonal Kyoto ingredients; a March 2025 diner notes staff from the Imperial Hotel.',
      philosophy: null, specialty: 'Wagyu teppan omakase.',
      anecdotes: [
        { text: 'A March 2025 diner, served by staff from the Imperial Hotel, was left speechless by the Chateaubriand.', source: R + 'B503737012/' },
        { text: 'A September 2026 diner found the salad of vegetables from across Kyoto and Japan a star in its own right before the fillet.', source: R + 'B536558218/' },
        { text: 'A July 2025 business guest called the course an ultimate meat kaiseki.', source: R + 'B510115138/' },
      ],
      japanese_sources_summary: '食べログ・公式サイト: 鉄板焼き・日本料理・牛肉料理、下京区仏光寺通烏丸東入ル上柳町328、地下鉄四条駅・阪急烏丸駅から徒歩1分、月〜土17:30〜22:00、日曜休み、サービス料なし、カード・PayPay 可、16席 (カウンター10、個室6)、2019年1月18日オープン、厳選した黒毛和牛と京都の旬の食材の京料理風の肉料理、おまかせコース (松阪牛ストリップロイン100g 28,600円、シャトーブリアン100g)、ワインと日本酒50種以上、黒毛和牛ヒレのカツサンド (予約制)。口コミ (2019年9月〜2026年9月、英語): 帝国ホテル出身のスタッフ、シャトーブリアン、肉の会席、綾部・城陽・大原の野菜と加賀れんこんのサラダ、Ushi no Nakayama の黒毛和牛ヒレ100g。',
      confidence: 'medium', sources: [TB, SITE, R + 'B410881330/', R + 'B419687857/', R + 'B422066128/', R + 'B457092847/', R + 'B457352840/', R + 'B457539861/', R + 'B471874835/', R + 'B486315833/', R + 'B503737012/', R + 'B510115138/', R + 'B536558218/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reserve a course; private room for six. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区仏光寺通烏丸東入ル上柳町328',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.000866, 135.760377); cross-checked: GSI 京都府京都市下京区上柳町328番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course price from Tabelog (tax included).', last_checked: TODAY, items: [
      it('', '', 'Dinner course with 100 g Matsusaka strip loin (7 dishes)', '¥28,600', 'Courses', 'ask', 'no', 'Tabelog.', 'matsusaka'),
      it('', '', 'Dinner course with 100 g Chateaubriand (7 dishes)', '', 'Courses', 'ask', 'no', 'Tabelog; March 2025.', 'chateaubriand'),
      it('', '', 'Wagyu fillet katsu sandwich (to order)', '', 'Takeaway', 'no', 'no', 'Tabelog.', 'katsu_sando'),
    ] }, {
    cuisine: '黒毛和牛と京都の旬の食材の会席風の鉄板焼き、ワインと日本酒50種以上。松阪牛ストリップロイン100g 28,600円やシャトーブリアン100gのおまかせコース、予約制の和牛ヒレのカツサンド (食べログ)・シャトーブリアン (2025年3月)・少量ずつ多彩な肉の会席 (2025年7月)・綾部、城陽、大原の野菜、加賀れんこん、青森のとうもろこし、香川のキウイのサラダ、Ushi no Nakayama の和牛ヒレ100g (2026年9月)',
    neighborhood: '仏光寺通、烏丸の東。四条・烏丸',
    gf_detail: '要確認。京野菜を添えた和牛の鉄板焼きのコース (2025〜2026年の口コミ)。和牛ヒレのカツサンドもある (食べログ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。和牛の鉄板焼きの店 (食べログ、2025〜2026年の口コミ)。',
    notes: '[和牛の鉄板焼き・四条烏丸、2019年から] 四条烏丸近くの、鉄板のカウンター10席と個室。松阪牛のストリップロイン、シャトーブリアン、Ushi no Nakayama のヒレなどの黒毛和牛を、京野菜の会席風のコースで。ワインと日本酒は50種以上。丁寧な接客。和牛のカツサンドも予約で。日曜休み。',
  });
}

// ================================================================ 前田豊三郎商店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26024716/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '21:00']);
  put({
    id: 'kyoto_maeda_toyosaburo_shoten', name: '前田豊三郎商店 (Maeda Toyosaburo Shoten)', category: 'OMNI',
    lat: 35.007634, lng: 135.761305, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wine and sake shop with a tasting counter; drinks only in the sources (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Natural wines, sake and craft beer at the counter (2025–26 reviews); no vegan information.',
    hours_raw: 'Daily 10:00–21:00; may change (Tabelog). Cards (Tabelog). A 6-seat counter (Tabelog). Bottles of over ¥3,000 from the shelves can be opened at the counter with no corkage (November 2025). Yaoichi Honkan 2F, Higashinotoin south of Sanjo (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin, south of Sanjo — Karasuma Oike',
    cuisine: 'Wine and sake shop with a standing-bar counter: natural wines, local sake and craft beer by the glass, or a shop bottle opened at the counter · Champagne bottle with free corkage over ¥3,000; IPA-barrel whisky (November 2025) · lunchtime glass and a bottle to take home; a wide natural-wine range (November 2025) · natural wine, local sake and craft beer at a department-store-basement-style counter (February 2026) · orange wine "Same River Twice Amber" (September 2026)',
    website: null, gmaps: gm('前田豊三郎商店 八百一本館'), menu_url: TB,
    notes: '[Wine and sake counter · Higashinotoin-Sanjo] A liquor shop on the second floor of Yaoichi Honkan with a six-seat counter where you can drink natural wine, local sake or craft beer by the glass from 10:00 to 21:00 — or open a bottle from the shelves (over ¥3,000) with no corkage. A handy stop while shopping.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a wine and sake shop inside Yaoichi Honkan with a tasting counter.',
      philosophy: null, specialty: 'Natural wine; local sake.',
      anecdotes: [
        { text: 'A November 2025 regular opened a Champagne bought in the shop at the counter, free of corkage over ¥3,000.', source: R + 'B115833312/' },
        { text: 'A February 2026 visitor found warmth there on a snowy Kyoto night.', source: R + 'B522194469/' },
        { text: 'A September 2026 shopper had a glass of orange wine while waiting for the day’s deli dish.', source: R + 'B536248603/' },
      ],
      japanese_sources_summary: '食べログ: ワインバー、中京区東洞院三条下る三文字町220 八百一本館 2F、毎日10:00〜21:00、カード可、6席。口コミ (2014年11月〜2026年9月、英語): 自然派ワイン、地酒、クラフトビールをカウンターで、3,000円以上のボトルは持ち込み料なし、昼に一杯とワインの購入、百貨店の地下のようなカウンター、オレンジワイン。',
      confidence: 'low', sources: [TB, R + 'B115833312/', R + 'B487430167/', R + 'B493724861/', R + 'B517784236/', R + 'B522194469/', R + 'B536248603/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order a glass at the counter or pick a bottle from the shelves.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院三条下る三文字町220 八百一本館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007634, 135.761305); cross-checked: GSI 京都府京都市中京区三文字町220番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B115833312/'],
    price_note: 'No glass prices in the sources; free corkage on shop bottles over ¥3,000 (November 2025).', last_checked: TODAY, items: [
      it('', '', 'Natural wine by the glass', '', 'Wine', 'ask', 'ask', '2025–26 reviews.', 'glass_wine'),
      it('', '', 'Local sake', '', 'Sake', 'ask', 'ask', 'February 2026.', 'sake'),
      it('', '', 'Craft beer', '', 'Beer', 'no', 'ask', 'February 2026.', 'craft_beer'),
    ] }, {
    cuisine: '立ち飲みのカウンターのある酒屋。自然派ワイン、地酒、クラフトビールをグラスで、または店のボトルをカウンターで・3,000円以上のシャンパーニュは持ち込み料なし、IPA の樽で熟成したウイスキー (2025年11月)・昼に一杯とボトルの購入、豊富な自然派ワイン (2025年11月)・百貨店の地下のようなカウンターで自然派ワイン、地酒、クラフトビール (2026年2月)・オレンジワイン Same River Twice Amber (2026年9月)',
    neighborhood: '東洞院、三条の南。烏丸御池',
    gf_detail: '要確認。酒屋の試飲カウンターで、飲み物のみ (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。カウンターで自然派ワイン、日本酒、クラフトビール (2025〜2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[ワインと日本酒のカウンター・東洞院三条] 八百一本館の2階の酒屋に、6席のカウンター。10時から21時まで、自然派ワイン、地酒、クラフトビールをグラスで、または棚のボトル (3,000円以上) を持ち込み料なしで開けられる。買い物ついでに便利。',
  });
}

save();
