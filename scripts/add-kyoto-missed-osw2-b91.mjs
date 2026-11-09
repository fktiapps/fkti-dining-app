// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 91.
//   Queue run from the osw2 worktree, 2026-11-08. Rest tier, nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance).
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   Brands checked against queue-status.jsonl (full names and brand stems), than.co.jp/brands and 株式会社WILL (will-food.com).
//   + 和on -YUGE- Waon (standing bar of steamer-basket dishes by Shijo-Karasuma, opened May 2026; 2026 reviews)
//   + 八十八良葉舎 清水店 Hatoya Ryoyosha (Japanese-tea stand near Kiyomizu; the brand's second stand after Kurumazaki, 2019)
//   + 水色亭 Mizuiro-tei (croquette and menchi-katsu stand near the Yasaka Pagoda, with an upstairs eat-in; 2025–26 reviews)
//   + 丁子屋 Chojiya (Japanese dining bar in Hotel Gimmond's basement; one of two shops of 株式会社j・f・s)
//   + BISTRO BAR A VIN C (late-night wine bistro on Muromachi by Shijo station; 2026 reviews)
//   - 鳥せい 清水店 — chain (鳥せい, as ruled for 26028812 and 26004911)
//   - Daniel's ALBA — chain (株式会社グラマラスフード's ダニエルズ; kyoto_daniels_nishiki is hidden as a chain)
//   - Together&co — big-chain hotel venue (Hilton Kyoto Shijo Karasuma)
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Service charges: none found for the five drafts.
//   Pins: Tabelog /en/ point, cross-checked with GSI; each 9 m+ from every pin on main, hidden records included.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-91');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26007387', '鳥せい 清水店: chain — 鳥せい (as ruled for 26028812 and 26004911)');
skip('26002971', 'Daniel’s ALBA: chain — ダニエルズ アルバ in Hotel Gimmond, run by 株式会社グラマラスフード (daniels.jp lists ダニエルズ 本店, ポルタ, ソーレ, アルバ, ルーチェ, モンド, 桃屋 and a factory); kyoto_daniels_nishiki is hidden as a chain');
skip('26038671', 'Together&co: big-chain hotel venue — the lobby restaurant of Hilton Kyoto Shijo Karasuma (Tabelog reviews; hotel restaurant)');

// ================================================================ 和on -YUGE-
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045139/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_waon_yuge_shijo', name: '和on -YUGE- (Waon -YUGE-)', category: 'OMNI',
    lat: 35.00102305040056, lng: 135.75857583665407, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steamed dishes, dumplings, fried spring rolls and chicken, and stir-fries; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dishes such as red-shrimp yukhoe, steamed shellfish, chicken and beef rice (reviews).',
    hours_raw: '17:00–24:00 daily (last order 23:30); closing days may vary (Tabelog). Cards and QR; no e-money (Tabelog). 12 places at the counter — a standing bar, with chairs when it is quiet (Tabelog; October 2026). Non-smoking (Tabelog). In a back alley about 2 minutes from Shijo station’s south exit (Tabelog; September 2026). Opened 6 May 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma',
    cuisine: 'Standing bar built around seiro steamer baskets, from the young team behind an onigiri café (2026 reviews) · five steamed dishes, e.g. shrimp dumplings with squid-ink sauce ¥650, sake-steamed seasonal shellfish with Kujo green onion (July–September 2026) · most small plates ¥350–500: red-shrimp yukhoe ¥450, changja potato salad ¥450, seasonal spring rolls ¥450, deep-fried chicken neck in broth ¥400 (June–October 2026) · beef-and-burdock rice with sansho ¥800 (June 2026) · Sapporo Lager Akaboshi in bottles; drinks ¥600–700 (2026 reviews)',
    website: null, gmaps: gm('和on YUGE 四条'), menu_url: TB,
    notes: "[Standing bar · Shijo-Karasuma back alley, steamer-basket dishes] A cosy twelve-place standing bar, new in May 2026 and run by a young team, where most dishes come out of bamboo steamers: shrimp dumplings, sake-steamed shellfish, plus red-shrimp yukhoe and spring rolls, most at ¥350–500. Open 5 pm to midnight.",
    chef_bio: { chef_name: null, roles: ['Young owners (not named)'], origin: null,
      background: 'Opened in May 2026 (Tabelog). Reviewers describe a standing bar run by university students, from the team behind an onigiri café (June, July and October 2026); a July 2026 reviewer instead describes a young couple. The concept is “a standing bar of steamer baskets and steam” (June 2026 review).',
      philosophy: null,
      specialty: 'Steamer-basket dishes.',
      anecdotes: [
        { text: 'A September 2026 visitor found the creative steamed dishes in a back-alley hideaway for under ¥3,000.', source: R + 'B535029333/' },
        { text: 'An October 2026 guest liked the lighting softened by steamer baskets and toasted with Sapporo Akaboshi.', source: R + 'B538434275/' },
      ],
      japanese_sources_summary: '食べログ: 和on -YUGE-、居酒屋・立ち飲み、京都市下京区釘隠町242、地下鉄四条駅南改札から徒歩2分、毎日17:00〜24:00 (L.O.23:30)、定休日は変わることあり、カード・QR決済可、電子マネー不可、12席、禁煙、2026年5月6日オープン。口コミ (2026年、英語): おにぎりのカフェを営む大学生の立ち飲み、せいろと湯気の立ち飲み、せいろ料理5種、料理はほぼ350〜500円、赤海老のユッケ450円、チャンジャのポテトサラダ450円、季節の春巻き450円、鶏首の唐揚げ400円、海老蒸し餃子イカスミソース650円、牛ごぼうの山椒ご飯800円、旬の貝の酒蒸し九条ねぎ、サッポロラガー赤星の瓶、飲み物600〜700円、路地裏の隠れ家、空いていれば椅子あり。',
      confidence: 'low', sources: [TB, R + 'B529577939/', R + 'B531354924/', R + 'B532214455/', R + 'B532965222/', R + 'B535029333/', R + 'B538434275/', R + 'B538717213/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter; small and busy.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区釘隠町242',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened 6 May 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001023, 135.758576); cross-checked: GSI 京都府京都市下京区釘隠町242番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529577939/', R + 'B535029333/', R + 'B538434275/'],
    price_note: 'Prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Steamed shrimp dumplings with squid-ink sauce', '¥650', 'Steamer', 'ask', 'no', '', 'shumai'),
      it('', '', 'Red-shrimp yukhoe', '¥450', 'Small plates', 'ask', 'no', '', 'yukhoe'),
      it('', '', 'Changja potato salad', '¥450', 'Small plates', 'ask', 'no', '', 'potesala'),
      it('', '', 'Seasonal spring rolls', '¥450', 'Fried', 'no', 'ask', '', 'harumaki'),
      it('', '', 'Beef and burdock rice with sansho', '¥800', 'Rice', 'ask', 'no', '', 'gyugobo'),
    ] }, {
    cuisine: 'おにぎりのカフェを営む若いチームによる、せいろが主役の立ち飲み (2026年の口コミ)・せいろ料理は5種、たとえば海老蒸し餃子のイカスミソース650円、旬の貝の酒蒸し九条ねぎ (2026年7〜9月)・小皿はほぼ350〜500円、赤海老のユッケ450円、チャンジャのポテトサラダ450円、季節の春巻き450円、鶏首の唐揚げ400円 (2026年6〜10月)・牛ごぼうの山椒ご飯800円 (2026年6月)・サッポロラガー赤星の瓶、飲み物600〜700円 (2026年の口コミ)',
    neighborhood: '四条烏丸',
    gf_detail: '要確認。せいろ蒸し、餃子、春巻きや唐揚げ、炒め物。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。赤海老のユッケ、貝の酒蒸し、鶏、牛ごぼうご飯など (口コミ)。',
    notes: '[立ち飲み・四条烏丸の路地裏、せいろ料理] 2026年5月にできた、若いチームの12人ほどの立ち飲み。料理の多くはせいろから。海老蒸し餃子、貝の酒蒸し、赤海老のユッケや春巻きも、ほぼ350〜500円。17時〜24時。',
  });
}

// ================================================================ 八十八良葉舎 清水店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041959/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://8108kyoto.myshopify.com/';
  const H = day(['10:00', '17:00']);
  put({
    id: 'kyoto_hatoya_ryoyosha_kiyomizu', name: '八十八良葉舎 清水店 (Hatoya Ryoyosha Kiyomizu)', category: 'OMNI',
    lat: 34.999204485703835, lng: 135.77830624817935, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Matcha and hojicha drinks, matcha dango and shiratama toppings; baked sweets such as financiers are also sold; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Lattes are made with milk and some toppings are ice cream; ask whether plain matcha or a plant milk is possible (reviews).',
    hours_raw: '10:00–17:00 daily; closing days may vary (Tabelog). Cards, e-money and QR (Tabelog). A standing tea stand with two places and three small standing tables; many take drinks away (Tabelog; May and August 2026). About 3 minutes from the Higashiyama-Yasui bus stop (Tabelog). Opened 12 October 2024; the brand’s first stand opened by Kurumazaki Shrine in 2019 (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu, near Higashiyama-Yasui',
    cuisine: 'Japanese-tea stand for Kyoto-grown teas and single-origin matcha (official site) · matcha whisked to order for lattes, with a choice of strength and toppings; original matcha latte ¥700 (2025–2026 reviews) · matcha latte with matcha ice cream and shiratama ¥1,450; matcha dango ¥350–400 (February 2025; June 2026) · hojicha latte; matcha float (2025 reviews)',
    website: SITE, gmaps: gm('八十八良葉舎 清水店'), menu_url: null,
    notes: "[Tea stand · Kiyomizu, single-origin matcha] A tiny standing tea stand where matcha is whisked in front of you for lattes of your chosen strength — topped with matcha ice cream and shiratama if you like — plus matcha dango. Mostly takeaway; 10:00–17:00.",
    chef_bio: { chef_name: null, roles: ['Staff (not named)'], origin: null,
      background: 'The brand opened a two-tsubo Japanese-tea stand beside Kurumazaki Shrine in 2019, selling unusual Kyoto-grown teas and single-origin matcha (official site); this Kiyomizu stand opened in October 2024 (Tabelog).',
      philosophy: null,
      specialty: 'Matcha lattes whisked to order.',
      anecdotes: [
        { text: 'A February 2025 visitor chose a plain matcha latte and dango over the ice-cream version because of the cold.', source: R + 'B525525308/' },
        { text: 'An August 2026 visitor found the staff kind in guiding the choice of strength and toppings.', source: R + 'B535622315/' },
      ],
      japanese_sources_summary: '公式サイト: 車折神社横に2坪の日本茶スタンド「八十八良葉舎」を2019年にオープン、京都府産の面白いお茶やシングルオリジン抹茶を扱う。食べログ: 八十八良葉舎 清水店、カフェ、京都市東山区南町415-6、東山安井から徒歩3分、毎日10:00〜17:00、定休日は変わることあり、カード・電子マネー・QR決済可、立ち飲みカウンター2席、禁煙、2024年10月12日オープン。口コミ (2025〜2026年、英語): 目の前で点てる抹茶、濃さとトッピングを選べる、オリジナル抹茶ラテ700円、抹茶団子350〜400円、白玉と抹茶アイスの抹茶ラテ1,450円、ほうじ茶ラテ、抹茶フロート、フィナンシェ、小さな立ち飲みテーブル3つ、持ち帰りが多い。',
      confidence: 'low', sources: [SITE, TB, R + 'B525525308/', R + 'B529178120/', R + 'B530408725/', R + 'B535622315/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order at the counter; mostly takeaway.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区南町415-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.999204, 135.778306); cross-checked: GSI 京都府京都市東山区南町 (town) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525525308/', R + 'B530408725/'],
    price_note: 'Prices from February 2025 and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Original matcha latte', '¥700', 'Drinks', 'ask', 'ask', 'Choose the strength.', 'latte'),
      it('', '', 'Matcha latte with matcha ice cream and shiratama', '¥1,450', 'Drinks', 'ask', 'no', '', 'lattetop'),
      it('', '', 'Matcha dango', '¥400', 'Sweets', 'ask', 'ask', '', 'dango'),
    ] }, {
    cuisine: '京都府産のお茶やシングルオリジン抹茶の日本茶スタンド (公式サイト)・注文ごとに点てる抹茶のラテ、濃さとトッピングを選べる、オリジナル抹茶ラテ700円 (2025〜2026年の口コミ)・抹茶アイスと白玉の抹茶ラテ1,450円、抹茶団子350〜400円 (2025年2月、2026年6月)・ほうじ茶ラテ、抹茶フロート (2025年の口コミ)',
    neighborhood: '清水、東山安井の近く',
    gf_detail: '要確認。抹茶やほうじ茶の飲み物、抹茶団子、白玉のトッピング。フィナンシェなどの焼き菓子も。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。ラテは牛乳、トッピングにアイスも。抹茶のみや植物性ミルクにできるか確認を (口コミ)。',
    notes: '[日本茶スタンド・清水、シングルオリジン抹茶] 目の前で点てた抹茶で、好みの濃さのラテを。抹茶アイスや白玉のトッピング、抹茶団子も。小さな立ち飲みのスタンドで持ち帰りが中心、10時〜17時。',
  });
}

// ================================================================ 水色亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030223/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_mizuirotei_yasaka', name: '水色亭 (Mizuiro-tei)', category: 'OMNI',
    lat: 34.998613547879366, lng: 135.77794669028518, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: breaded and deep-fried menchi-katsu and croquettes (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef menchi-katsu and cheese croquettes (reviews).',
    hours_raw: '10:00–18:00 daily (Tabelog). Order at the counter downstairs and take away or eat in the small upstairs space; no restrooms (Tabelog; December 2025). Cards, e-money and QR (Tabelog). Near the Yasaka Pagoda, on a street off Ninenzaka (April 2023 and October 2025 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yasaka Pagoda',
    cuisine: 'Snack stand of fresh-fried menchi-katsu and croquettes: triple-cheese beef menchi-katsu ¥400; avocado-cheese croquette ¥400; chestnut croquette ¥300 (2024–2025 reviews) · black-wagyu menchi-katsu (October 2023) · matcha options and a bear-shaped iced soda in summer (December 2025; August 2026)',
    website: null, gmaps: gm('水色亭 京都 東山'), menu_url: null,
    notes: "[Street food · by the Yasaka Pagoda, menchi-katsu] A blue-fronted snack stand near Ninenzaka and the Yasaka Pagoda, frying cheese-filled beef menchi-katsu and croquettes to order, about ¥300–400 each; eat on the go or in the small room upstairs. 10:00–18:00.",
    chef_bio: { chef_name: null, roles: ['Staff (not named)'], origin: null,
      background: 'A takeaway stand known for its cheese menchi-katsu, with a blue exterior and an eat-in room upstairs (2023–2026 reviews).',
      philosophy: null,
      specialty: 'Triple-cheese menchi-katsu.',
      anecdotes: [
        { text: 'A March 2024 visitor was called to collect the piping-hot menchi-katsu within about ten minutes of ordering.', source: R + 'B481475211/' },
        { text: 'An October 2025 returnee found the menu much changed after two years: the cheese tsukimi menchi-katsu was gone.', source: R + 'B473176706/' },
      ],
      japanese_sources_summary: '食べログ: 水色亭、ソフトクリーム・コロッケ、京都市東山区上田町84、毎日10:00〜18:00、カード・電子マネー・QR決済可、禁煙。口コミ (2023〜2026年、英語): 二年坂から左に曲がった通り、八坂の塔の近く、青い外観、1階で注文し持ち帰りか2階のイートイン、トイレなし、新トリプルチーズメンチカツ400円、アボカドチーズコロッケ400円、栗のコロッケ300円、黒毛和牛100%のメンチカツ、抹茶のメニュー、くまのソーダ。',
      confidence: 'low', sources: [TB, R + 'B464123800/', R + 'B473176706/', R + 'B481475211/', R + 'B496278241/', R + 'B520082617/', R + 'B533872485/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区上田町84',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026. The website listed on Tabelog (wixsite) returns 404.' },
    pin_source: `Tabelog ${TB} (34.998614, 135.777947); cross-checked: GSI 京都府京都市東山区上田町84番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B473176706/', R + 'B496278241/'],
    price_note: 'Prices from 2024–2025 reviews, tax in.', last_checked: TODAY, items: [
      it('', '', 'Triple-cheese menchi-katsu', '¥400', 'Fried', 'no', 'no', '', 'menchi'),
      it('', '', 'Avocado-cheese croquette', '¥400', 'Fried', 'no', 'no', '', 'avocado'),
      it('', '', 'Chestnut croquette', '¥300', 'Fried', 'no', 'ask', '', 'kuri'),
    ] }, {
    cuisine: '揚げたてのメンチカツとコロッケの店。新トリプルチーズメンチカツ400円、アボカドチーズコロッケ400円、栗のコロッケ300円 (2024〜2025年の口コミ)・黒毛和牛のメンチカツ (2023年10月)・抹茶のメニュー、夏はくまのソーダ (2025年12月、2026年8月)',
    neighborhood: '八坂の塔',
    gf_detail: 'グルテンフリー不可。衣をつけて揚げたメンチカツとコロッケ (口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉のメンチカツやチーズのコロッケ (口コミ)。',
    notes: '[食べ歩き・八坂の塔、メンチカツ] 二年坂や八坂の塔の近くの青い店。チーズ入りの牛肉メンチカツやコロッケを注文ごとに揚げて、1個300〜400円ほど。食べ歩きか2階の小さな部屋で。10時〜18時。',
  });
}

// ================================================================ 丁子屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004105/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://tyoujiya.junfoodservice.com/'; const LUNCH = SITE + 'menu/lunch.php'; const DIN = SITE + 'menu/dinner.php'; const COURSE = SITE + 'menu/course.php';
  const A = day(['11:30', '15:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_chojiya_oike_takakura', name: '丁子屋 (Chojiya)', category: 'OMNI',
    lat: 35.0105189378668, lng: 135.76223958041643, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese dishes with dashi and soy, plus tempura, fried shrimp, karaage and a demi-glace hamburg; no gluten information is published (official menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Japanese dining bar of fish, duck and meat dishes; a few tofu and vegetable plates, likely made with dashi (official menu).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30); dinner 17:30–23:00 (last food order 22:00, drinks 22:30), to 22:00 on holidays and holiday eves; closed Sunday (Tabelog). The official site also lists breakfast 7:00–9:30 and dinner to 24:00 — check. Cards, e-money and PayPay (Tabelog). 50 seats: counter, tables and tatami with sunken seating (Tabelog; 2024–2025 reviews). Smoking allowed (Tabelog; July and November 2025 reviews). Hotel Gimmond B1F on Oike-Takakura, 2 minutes from Karasuma-Oike station (Tabelog; official site).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: A, 5: A }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Oike-Takakura',
    cuisine: 'Japanese food between kappo and izakaya, in a basement furnished in a Middle-Eastern style (official site) · lunch ¥968–1,518 tax in: daily set, grilled fish, demi-glace hamburg, hamburg with a big fried shrimp ¥1,408, sashimi and tempura ¥1,408, simmered duck loin ¥1,518, omurice, yellow chicken curry (official menu) · at night: sashimi platter ¥2,178, Kyoto-tofu agedashi or ajillo ¥748, simmered duck loin ¥1,078, dashimaki ¥968 (official menu) · courses ¥3,850 and ¥6,050 (official menu)',
    website: SITE, gmaps: gm('丁子屋 ホテルギンモンド'), menu_url: DIN,
    notes: "[Japanese dining bar · Oike-Takakura, a hotel basement] A roomy basement under Hotel Gimmond with counter, tables and tatami: ¥968–1,518 set lunches — grilled fish, hamburg, sashimi and tempura — and Kyoto-tofu dishes, sashimi and courses at night. Smoking allowed; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Kitchen team (not named)'], origin: null,
      background: 'Run by 株式会社j・f・s (junfood service), whose site lists two places: this restaurant and a café-restaurant in a botanical park in Uji. It describes 丁子屋 as a new style of Japanese food somewhere between kappo and izakaya, with seasonal ingredients (official site).',
      philosophy: 'To create a familiar sense of the season with seasonal ingredients (official site).',
      specialty: 'Set lunches; Kyoto-tofu dishes.',
      anecdotes: [
        { text: 'A January 2025 diner on a first night in Kyoto booked the ¥3,850 eight-dish course.', source: R + 'B500617956/' },
        { text: 'A July 2025 lunch guest, at ease in the roomy tatami area, lingered about two hours.', source: R + 'B512899149/' },
      ],
      japanese_sources_summary: '公式サイト: 株式会社j・f・s (junfood service)、宇治市の植物公園のカフェ・レストラン ちょうちょと丁子屋。丁子屋は烏丸御池から100m東、御池高倉のホテルギンモンドB1F、日本の良さを中近東風の家具であしらった空間、割烹と居酒屋の間の新しい和食スタイル、旬の素材で身近な季節感、朝ごはん7:00〜9:30、昼ごはん11:30〜15:00 (L.O.14:30)、晩ごはん17:30〜24:00 (L.O.23:30)。お昼ごはん (税込): 日替り定食968円、本日の焼魚膳968円、デミグラスハンバーグ膳1,078円、ハンバーグと大きな海老フライ膳1,408円、鴨ロース御膳1,518円、お造り御膳1,408円、オムライス968円、イエローチキンカレー968円。晩ごはん: お造り四種盛合わせ2,178円、京豆腐の揚げ出し・小鍋・アヒージョ各748円、鴨ロース煮1,078円、京風だし巻き玉子968円など。宴会: おまかせ3,850円と6,050円のコース。食べログ: ダイニングバー・日本料理・居酒屋、京都市中京区御池通高倉西入ル亀甲屋町595 ホテルギンモンドB1F、月〜土 11:30〜15:00・17:30〜23:00、祝日・祝前日は夜22:00まで、日曜定休、カード・電子マネー・PayPay可、50席、座敷あり、喫煙可。口コミ (2024〜2026年、英語): 地下の隠れ家、千円ほどの定食、焼き鯖、掘りごたつと座敷、喫煙可、8品のコース3,850円、チキン南蛮。',
      confidence: 'medium', sources: [SITE, LUNCH, DIN, COURSE, 'http://junfoodservice.com/', TB, R + 'B485238472/', R + 'B489430631/', R + 'B500617956/', R + 'B512899149/', R + 'B517906817/', R + 'B533688712/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed in the dining room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御池通高倉西入ル亀甲屋町595 ホテルギンモンド B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing (corporate member); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.010519, 135.762240); cross-checked: GSI 京都府京都市中京区亀甲屋町595番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH, DIN, COURSE],
    price_note: 'Official menu, tax in.', last_checked: TODAY, items: [
      it('本日の焼魚膳', '', 'Grilled fish of the day set', '¥968', 'Lunch', 'ask', 'no', '', 'yakizakana'),
      it('デミグラスハンバーグと大きな海老フライ膳', '', 'Demi-glace hamburg and big fried shrimp set', '¥1,408', 'Lunch', 'no', 'no', '', 'hamburg'),
      it('お造り御膳', '', 'Sashimi and seasonal tempura set', '¥1,408', 'Lunch', 'no', 'no', '', 'otsukuri'),
      it('京豆腐の揚げ出し', '', 'Kyoto-tofu agedashi', '¥748', 'Dinner', 'ask', 'ask', '', 'agedashi'),
      it('', '', 'Omakase course', '¥3,850', 'Courses', 'ask', 'no', '', 'course'),
    ] }, {
    cuisine: '中近東風の家具の地下で、割烹と居酒屋の間の和食 (公式サイト)・お昼は税込968〜1,518円、日替り、焼魚、デミグラスハンバーグ、ハンバーグと大きな海老フライ1,408円、お造りと天麩羅1,408円、鴨ロース1,518円、オムライス、イエローチキンカレー (公式のお品書き)・夜はお造り四種盛り2,178円、京豆腐の揚げ出しやアヒージョ748円、鴨ロース煮1,078円、だし巻き968円 (公式のお品書き)・コースは3,850円と6,050円 (公式のお品書き)',
    neighborhood: '御池高倉',
    gf_detail: '要確認。出汁と醤油の和食に、天麩羅、海老フライ、唐揚げ、デミグラスハンバーグも。グルテンの情報は公開されていない (公式のお品書き、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、鴨、肉の料理の和食のダイニングバー。豆腐や野菜の皿も出汁を使うとみられる (公式のお品書き)。',
    notes: '[和食ダイニング・御池高倉、ホテルの地下] ホテルギンモンドの下の広い地下に、カウンター、テーブル、座敷。昼は968〜1,518円の焼魚、ハンバーグ、お造りと天麩羅の膳、夜は京豆腐の料理、お造り、コース。喫煙可、日曜休み。',
  });
}

// ================================================================ BISTRO BAR A VIN C
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020347/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '01:00']);
  put({
    id: 'kyoto_bistro_bar_a_vin_c', name: 'BISTRO BAR A VIN C (ビストロ セー)', category: 'OMNI',
    lat: 35.00149217787126, lng: 135.75822884032806, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bistro dishes include steak, confit and ajillo, but also pasta, lasagna and blue cheese on bread; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat, seafood and cheese bistro (reviews).',
    hours_raw: '18:00–01:00; closed Tuesday (Tabelog). Same-day bookings taken (April 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 54 seats over two floors, counter, tables and sofas; private hire up to 20 (Tabelog; January 2026). Smoking allowed only on the first floor (Tabelog). On Muromachi, about a minute from Shijo station Exit 6 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Muromachi, south of Shijo',
    cuisine: 'Late-night wine bistro with a long à-la-carte menu and wine chosen by the staff (2026 reviews) · beef rump or top-sirloin steak; duck confit; gizzard confit (March–August 2026) · shrimp-and-mushroom ajillo; four-cheese omelette; strawberries with cheese (2026 reviews) · tripe in tomato sauce ¥1,320; homemade lasagna ¥1,980 (January 2026) · pastas such as Genovese and bottarga spaghetti; risotto (2026 reviews)',
    website: null, gmaps: gm('BISTRO BAR A VIN C 室町'), menu_url: TB,
    notes: "[Bistro · Muromachi by Shijo station, open till 1 am] A two-floor wine bistro a minute from Shijo station, with a long menu — rump steak, duck confit, shrimp ajillo, bottarga spaghetti — and staff who pick a wine to match. Good for a proper late dinner. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Kitchen and wine staff (not named)'], origin: null,
      background: 'Reviewers (2023–2026) describe a well-known late-night bistro near Shijo-Karasuma, favoured by other restaurant owners after work, with attentive staff who explain the wines.',
      philosophy: null,
      specialty: 'Steak; ajillo; late dinner with wine.',
      anecdotes: [
        { text: 'A January 2026 solo diner came on another restaurant owner’s tip that it was a favourite late-night spot.', source: R + 'B521571210/' },
        { text: 'A March 2026 traveller who always stops by on Kyoto trips was already craving the top sirloin again in the taxi home.', source: R + 'B503229730/' },
      ],
      japanese_sources_summary: '食べログ: BISTRO BAR A VIN C、ビストロ・フレンチ・ワインバー、京都市下京区室町通仏光寺上ル白楽天町529、地下鉄四条駅6番出口から徒歩1分、18:00〜翌1:00、火曜定休、カード可 (VISA、Master、JCB、AMEX、Diners)、電子マネー・QR決済不可、54席、貸切20名まで、喫煙は1階のみ、ソムリエあり。口コミ (2023〜2026年、英語): 2階建て、カウンターとテーブル、深夜でもしっかり食事、飲食店の店主も通う、牛ランプやトップサーロインのステーキ、鴨のコンフィ、砂肝のコンフィ、海老とマッシュルームのアヒージョ、4種のチーズのオムレツ、いちごとチーズ、トリッパのトマト煮1,320円、自家製ラザニア1,980円、ジェノベーゼ、からすみのスパゲッティ、リゾット、スタッフのワイン選び。',
      confidence: 'low', sources: [TB, R + 'B503229730/', R + 'B521571210/', R + 'B523683694/', R + 'B525596075/', R + 'B526065024/', R + 'B526172791/', R + 'B532049346/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking on the ground floor only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区室町通仏光寺上ル白楽天町529',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026. The website listed on Tabelog (citron-kyoto.com/bistro_c) now belongs to an unrelated sweets school.' },
    pin_source: `Tabelog ${TB} (35.001492, 135.758229); cross-checked: GSI 京都府京都市下京区白楽天町529番地 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521571210/'],
    price_note: 'Prices from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tripe and aromatic vegetables in tomato sauce', '¥1,320', 'À la carte', 'ask', 'no', '', 'trippa'),
      it('', '', 'Homemade lasagna', '¥1,980', 'À la carte', 'no', 'no', '', 'lasagna'),
      it('', '', 'Shrimp and mushroom ajillo', '', 'À la carte', 'ask', 'no', '', 'ajillo'),
      it('', '', 'Beef rump steak', '', 'Mains', 'ask', 'no', '', 'steak'),
    ] }, {
    cuisine: 'アラカルトが豊富な深夜までのワインビストロ、スタッフがワインを選ぶ (2026年の口コミ)・牛ランプやトップサーロインのステーキ、鴨のコンフィ、砂肝のコンフィ (2026年3〜8月)・海老とマッシュルームのアヒージョ、4種のチーズのオムレツ、いちごとチーズ (2026年の口コミ)・トリッパのトマト煮1,320円、自家製ラザニア1,980円 (2026年1月)・ジェノベーゼやからすみのスパゲッティ、リゾット (2026年の口コミ)',
    neighborhood: '室町、四条の南',
    gf_detail: '要確認。ステーキ、コンフィ、アヒージョのほか、パスタ、ラザニア、パンにのせたブルーチーズも。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉、魚介、チーズのビストロ (口コミ)。',
    notes: '[ビストロ・四条駅すぐの室町、深夜1時まで] 四条駅から1分、2フロアのワインビストロ。ランプステーキ、鴨のコンフィ、海老のアヒージョ、からすみのスパゲッティなど品数が多く、スタッフが合うワインを選んでくれる。遅い時間にしっかり食べたいときに。火曜休み。',
  });
}

save();
