// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 96.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 牛カツ京都勝牛 清水五条坂店 — chain: 牛カツ京都勝牛, eight or more shops (already ruled at 26027478, 26024913, 26044429)
//   + SUBS サンドイッチストア SUBS sandwich store (American sandwiches in a machiya near Kawaramachi-Nijo)
//   - BONDO — big-chain hotel venue (Greg 11-08 ruling): in ホリデイ・イン京都五条 (Holiday Inn, an IHG brand; Tabelog address)
//   + キャンティ Chianti (old-school kissa with ¥1,000 daily lunches near Karasuma-Oike)
//   + にく処 おおた Niku-dokoro Oota (wagyu yakiniku near Ebisugawa-Fuyacho)
//   + ニューオリエンタル New Oriental (Taiwanese steamed soups and spice dishes near Gojo; the Kyoto shop of Tokyo's SPICE
//     Hanten; since November 2025)
//   + 手打そば処 坂 Teuchi Soba-dokoro Saka (hand-made soba on Gojo-zaka below Kiyomizu)
//   - 天 — no 2025–26 review (latest May 2024)
//   - 伊藤軒/SOU・SOU 清水店 — chain: 伊藤軒, eight shops (already ruled at 26043363); also take-out only
//   Brand checks: none of the drafts is in data or queue-status by name; New Oriental is the second shop of SPICE Hanten
//   (Nishi-Ogikubo, Tokyo; 2025–26 reviews) — two shops, none in data. None is a THAN or WILL brand.
//   Service charges: no Tabelog section for any of the five.
//   Pins (checked against main, hidden records included): SUBS's lot resolves only to the town on GSI (loc_approx 'single');
//   all five ≥ 7.7m from every record; no offsets.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-96');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26026349', 'chain: 牛カツ京都勝牛, eight or more shops (already ruled at 26027478, 26024913 and 26044429)');
skip('26043803', 'big-chain hotel venue (Greg 11-08 ruling): BONDO is in ホリデイ・イン京都五条 (Holiday Inn, an IHG brand; Tabelog address)');
skip('26005451', 'no 2025–26 review (the latest fetched review is from May 2024)');
skip('26036723', 'chain: 伊藤軒, eight shops (already ruled at 26043363 from kyoto-itoken.co.jp); this shop is also take-out only');

// ================================================================ SUBS サンドイッチストア
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26036609/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_subs_sandwich_store', name: 'SUBS サンドイッチストア (SUBS sandwich store)', category: 'OMNI',
    lat: 35.015012, lng: 135.767871, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sandwiches on bread (2025–26 reviews); a salad bowl appeared as a limited item (August 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, homemade bacon and cheese sandwiches (2025–26 reviews).',
    hours_raw: 'Mon, Wed–Sun 11:00–15:00 and 17:00–20:00 (L.O. 19:00); closed Tuesdays; hours may change (Tabelog). 5 high counter seats; takeaway and delivery; non-smoking (Tabelog; August 2026 review). In a large Kyoto machiya shared with a pottery and kimono-dressing shop, near Kawaramachi-Nijo (Tabelog; August 2026 review).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Nijo — 3 min from the Kawaramachi Nijo bus stop',
    cuisine: 'American sandwiches: Philly cheesesteak of BBQ-sautéed beef with peppers, pineapple, tomato and cheddar, clam chowder (May 2025); a beef steak sub grilled on the teppan, fresh-ground coffee (October 2025); homemade bacon and berry jam; a limited salad bowl with two or three proteins (August 2026); about ¥1,000–2,000',
    website: null, gmaps: gm('SUBS サンドイッチストア 京都'), menu_url: null,
    notes: '[Sandwiches · Kawaramachi-Nijo] A five-seat American sandwich counter in a big Kyoto machiya, run by a former Kyoto-vegetable farmer: Philly cheesesteak, a teppan-grilled steak sub, homemade bacon and jam, and good coffee; takeaway too.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The owner used to farm Kyoto vegetables and makes the bacon and berry jam in house (August 2026 review).',
      philosophy: null,
      specialty: 'Philly cheesesteak; beef steak sub.',
      anecdotes: [
        { text: 'An October 2025 diner listened to a large piece of beef sizzling on the teppan in the wooden interior before it was sliced into the sub.', source: R + 'B516642951/' },
        { text: 'An August 2026 visitor noted a local cat sometimes lounging in the machiya\'s tiny courtyard garden, by the restroom.', source: R + 'B534460984/' },
      ],
      japanese_sources_summary: '食べログ: SUBS サンドイッチストア、パン、中京区藤木町38、京都市役所前駅から徒歩5分、河原町二条バス停から徒歩3分、月・水〜日 11:00〜15:00・17:00〜20:00 (L.O. 19:00)、火曜休み、カウンター5席、禁煙。口コミ (2025〜2026年、英語): アメリカのサンドイッチ、フィリーチーズステーキ、クラムチャウダー、鉄板で焼くビーフステーキのサブ、自家製のベーコンとジャム、店主は元京野菜の農家、大きな古い町家、テイクアウトとデリバリー。',
      confidence: 'medium', sources: [TB, R + 'B506838145/', R + 'B516642951/', R + 'B534460984/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'High counter only; takeaway available (August 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区藤木町38',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.015012, 135.767871); GSI resolves 藤木町38 only to the town, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506838145/'],
    price_note: 'No item prices in reviews; reviews give ¥1,000–2,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Philly cheesesteak sandwich', '', 'Sandwiches', 'no', 'no', 'May 2025 review.', 'philly'),
      it('', '', 'Beef steak sub', '', 'Sandwiches', 'no', 'no', 'October 2025 review.', 'steak_sub'),
    ] }, {
    cuisine: 'アメリカのサンドイッチ: BBQ ソースで炒めた牛肉とピーマン、パイナップル、トマト、チェダーのフィリーチーズステーキ、クラムチャウダー (2025年5月)、鉄板で焼くビーフステーキのサブ、挽きたてのコーヒー (2025年10月)、自家製のベーコンとベリーのジャム、肉が2〜3種のる限定のサラダボウル (2026年8月)、1,000〜2,000円ほど',
    neighborhood: '河原町二条。河原町二条バス停から徒歩3分',
    gf_detail: 'グルテンフリー不可。パンのサンドイッチ (2025〜26年の口コミ)。限定のサラダボウルもあった (2026年8月)。',
    vegan_detail: 'ヴィーガン不可。牛肉、自家製ベーコン、チーズのサンドイッチ (2025〜26年の口コミ)。',
    notes: '[サンドイッチ・河原町二条] 大きな京町家の5席のアメリカのサンドイッチのカウンター。店主は元京野菜の農家で、フィリーチーズステーキ、鉄板で焼くステーキのサブ、自家製のベーコンとジャム、おいしいコーヒー。持ち帰りも。',
  });
}

// ================================================================ キャンティ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26009603/'; const R = TB + 'dtlrvwlst/';
  const D = day(['09:00', '19:00']);
  put({
    id: 'kyoto_kissa_chianti_anekoji', name: 'キャンティ (Chianti)', category: 'OMNI',
    lat: 35.009742, lng: 135.756908, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lunch plates of fried chicken, croquettes, cutlets and pasta salad (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fried mains with ham and egg sides (2025–26 reviews).',
    hours_raw: 'Mon–Fri 9:00–19:00; closed Saturdays, Sundays and holidays; hours may change (Tabelog). 23 seats; smoking allowed (Tabelog; June 2025 and April 2026 reviews). Manga to read (June 2025 review). On Anekoji east of Shinmachi, near Karasuma-Oike (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Anekoji-Shinmachi — near Karasuma-Oike Stn',
    cuisine: 'Old-style kissa with a big ¥1,000 daily lunch plate: soy kara-age with cream croquette, dried radish, ham, pumpkin and macaroni salad (June 2025); sweet-spicy fried chicken (May 2026); Scotch egg, tenderloin cutlet (June and October 2026); chicken katsu with miso soup ¥1,200 (April 2026); generous rice; hamburg steak and yoshoku (Tabelog category)',
    website: null, gmaps: gm('キャンティ 姉小路 新町'), menu_url: null,
    notes: '[Kissa · Karasuma-Oike] A long-established-feeling kissa with manga and smokers that packs out at lunch for its ¥1,000 daily plate — kara-age, Scotch egg or cutlet with a crowd of homemade sides and plenty of rice. Weekdays only; smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A coffee shop with the feel of a long-established kissa, popular for lunch (May 2026 and June 2025 reviews).',
      philosophy: null,
      specialty: 'Daily lunch plate.',
      anecdotes: [
        { text: 'An October 2026 regular, back after a while, asks for less rice and still finds the ¥1,000 Scotch-egg plate more than enough.', source: R + 'B526517260/' },
        { text: 'A May 2026 walker drawn by a "service lunch ¥1,000" sign got the last counter seat for sweet-spicy fried chicken.', source: R + 'B528169455/' },
      ],
      japanese_sources_summary: '食べログ: キャンティ、喫茶店・ハンバーグ・洋食、中京区町頭町89、烏丸御池駅から278m、月〜金 9:00〜19:00、土日・祝日休み、23席、喫煙可。口コミ (2025〜2026年、英語): 昼の日替わり1,000円 (唐揚げ、スコッチエッグ、ヒレカツ)、チキンカツ1,200円、おかずとご飯がたっぷり、漫画あり、老舗の喫茶店の雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B511427671/', R + 'B525824941/', R + 'B526517260/', R + 'B528169455/'] },
    cultural_comfort: { level: 'japanese', note: 'A local lunch kissa; smoking allowed (2025–26 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区姉小路通新町東入町頭町89',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009742, 135.756908); cross-checked: GSI 京都府京都市中京区町頭町89番地 (lot) 54m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511427671/', R + 'B525824941/'],
    price_note: 'Prices from June 2025 and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch plate', '¥1,000', 'Lunch', 'no', 'no', '2025–26 reviews.', 'daily'),
      it('', '', 'Chicken katsu with miso soup', '¥1,200', 'Lunch', 'no', 'no', 'April 2026 review.', 'chicken_katsu'),
    ] }, {
    cuisine: '昔ながらの喫茶店のボリュームのある1,000円の日替わりランチ: 醤油の唐揚げ、クリームコロッケ、切り干し大根、ハム、かぼちゃ、マカロニサラダ (2025年6月)、甘辛い唐揚げ (2026年5月)、スコッチエッグ、ヒレカツ (2026年6月・10月)、味噌汁つきのチキンカツ1,200円 (2026年4月)、ご飯たっぷり、ハンバーグと洋食 (食べログ)',
    neighborhood: '姉小路新町。烏丸御池駅の近く',
    gf_detail: 'グルテンフリー不可。唐揚げ、コロッケ、カツ、パスタサラダの昼の定食 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉と揚げ物に、ハムや卵のおかず (2025〜26年の口コミ)。',
    notes: '[喫茶・烏丸御池] 漫画があり喫煙もできる老舗の雰囲気の喫茶店。昼は1,000円の日替わり — 唐揚げ、スコッチエッグ、カツに手作りのおかずとたっぷりのご飯 — で満席に。平日のみ、喫煙可。',
  });
}

// ================================================================ にく処 おおた
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26005313/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '23:00']);
  put({
    id: 'kyoto_nikudokoro_oota_ebisugawa', name: 'にく処 おおた (Niku-dokoro Oota)', category: 'OMNI',
    lat: 35.014862, lng: 135.765492, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salted tongue and plain cuts may suit; sauces, cold noodles and bibimbap usually involve soy or wheat (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku and offal restaurant (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sun 17:30–23:00 (L.O. 22:00); closed Wednesdays (Tabelog). Lunch on Thursdays and Fridays only, with steak, outside skirt (limited), stone-pot bibimbap or sundubu sets (May 2025 and March 2026 reviews). Cash only — no cards, e-money or QR (Tabelog). 25 seats with charcoal grills built into the counter; smoking area (Tabelog; November 2025 review). On Ebisugawa west of Fuyacho, 5 min from the Saibansho-mae bus stop (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ebisugawa-Fuyacho — about 520 m from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Black wagyu yakiniku and offal: tongue, the day\'s lean cuts from the whiteboard, tracheal cartilage, tripe and crunchy horumon, an off-menu sashimi platter, steamed oxtail (August and October 2026); cold noodles (May 2026); weekday lunch sets of steak, outside skirt, stone-pot bibimbap or sundubu with seaweed soup, kinpira and salad (2025–26); about ¥8,000–15,000 at dinner',
    website: null, gmaps: gm('にく処 おおた 夷川'), menu_url: null,
    notes: '[Yakiniku · Ebisugawa] A clean, calm yakiniku with charcoal grills in the counter and celebrity signatures on the wall: black wagyu tongue, whiteboard brand cuts, offal and an oxtail steam, plus Thursday–Friday lunches. Cash only; about ¥8,000–15,000.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Many celebrity autographs on the walls (November 2025 review).',
      philosophy: 'Carefully selected black wagyu (July 2025 review).',
      specialty: 'Tongue; steamed oxtail.',
      anecdotes: [
        { text: 'An October 2026 regular says the steamed oxtail here beats every other version tried, alongside the tongue and crunchy horumon.', source: R + 'B537686044/' },
        { text: 'A May 2025 diner caught the Thursday–Friday-only lunch for a stone-pot bibimbap set behind three people already waiting.', source: R + 'B507546641/' },
      ],
      japanese_sources_summary: '食べログ: にく処 おおた、焼肉・韓国料理、中京区木屋町489、バス停から徒歩5分、月・火・木〜日 17:30〜23:00 (L.O. 22:00)、水曜休み、現金のみ、25席。口コミ (2025〜2026年、英語): 黒毛和牛、タン、ホワイトボードの銘柄の牛肉、気管の軟骨、ミノ、ホルモン、テールの蒸し物、冷麺、昼は木曜と金曜だけ (ステーキ、ハラミ、石焼ビビンバ、スンドゥブ)、カウンターに炭火、有名人のサイン。',
      confidence: 'medium', sources: [TB, R + 'B507546641/', R + 'B510400394/', R + 'B517765531/', R + 'B524151448/', R + 'B529100049/', R + 'B537686044/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区夷川通麩屋町西入木屋町489',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014862, 135.765492); cross-checked: GSI 京都府京都市中京区木屋町489番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524151448/'],
    price_note: 'No item prices in reviews; dinner ¥8,000–15,000, lunch ¥1,000–2,000 (reviews).', last_checked: TODAY, items: [
      it('', '', 'Wagyu tongue', '', 'Yakiniku', 'ask', 'no', '2025–26 reviews.', 'tongue'),
      it('', '', 'Stone-pot bibimbap set (Thu–Fri lunch)', '', 'Lunch', 'ask', 'no', 'May 2025 and March 2026 reviews.', 'bibimbap'),
    ] }, {
    cuisine: '黒毛和牛の焼肉とホルモン: タン、ホワイトボードのその日の赤身、気管の軟骨、ミノ、ホルモン、メニューにない刺身の盛り合わせ、テールの蒸し物 (2026年8月・10月)、冷麺 (2026年5月)、平日の昼はステーキ、ハラミ、石焼ビビンバ、スンドゥブの定食にわかめスープ、きんぴら、サラダ (2025〜26年)、夜は8,000〜15,000円ほど',
    neighborhood: '夷川麩屋町。京都市役所前駅から520mほど',
    gf_detail: '要確認。塩タンや素焼きは合う可能性がある。たれ、冷麺、ビビンバはふつう醤油や小麦を含む (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉とホルモンの店 (2025〜26年の口コミ)。',
    notes: '[焼肉・夷川] カウンターに炭火のある清潔で落ち着いた焼肉店。有名人のサインが並ぶ。黒毛和牛のタン、ホワイトボードの銘柄牛、ホルモン、テールの蒸し物、木・金曜の昼も。現金のみ、8,000〜15,000円ほど。',
  });
}

// ================================================================ ニューオリエンタル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26044133/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '18:00']);
  put({
    id: 'kyoto_new_oriental_gojo', name: 'ニューオリエンタル (New Oriental)', category: 'OMNI',
    lat: 34.992945, lng: 135.762429, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Clear steamed soups (jentan) of chicken and pork ribs; spiced small dishes (2025–26 reviews); seasonings not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the soups are based on Kyoto chicken and pork spare ribs (February 2026 review).',
    hours_raw: 'Mon, Thu–Sun 11:00–18:00; closed Tuesdays and Wednesdays, and some irregular days — check Instagram (Tabelog). A February 2026 review gives 10:00–17:00, with drinks from the morning. Cards; no e-money (Tabelog). 20 seats: a 5-seat counter and wall tables (Tabelog; February 2026 review). Down a narrow alley in a wooden house near Takakura-Hanaya-cho, about 370 m from Gojo (Tabelog; 2025–26 reviews).',
    hours: { 0: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takakura-Hanayacho, south of Gojo — about 370 m from Gojo Stn',
    cuisine: 'Taiwanese steamed soups (jentan) slow-cooked in a large steamer — Kyoto chicken and pork spare ribs with lily buds, or with pineapple (2025–26) — with spiced Asian small dishes, spice drinks and natural wine from the morning (2026); about ¥1,000–2,000 at lunch',
    website: null, gmaps: gm('ニューオリエンタル 京都 五条'), menu_url: null,
    notes: '[Taiwanese soups · Gojo] The Kyoto sister of Tokyo\'s SPICE Hanten, down an alley near Gojo: clear, gentle Taiwanese steamed soups with spiced small dishes and natural wine, open from the morning — a soothing stop. About ¥1,000–2,000.',
    chef_bio: { chef_name: null, roles: ['Kyoto shop of SPICE Hanten (Tokyo)'], origin: null,
      background: 'Opened in November 2025 (Tabelog: 21 November 2025) as the second shop of the Nishi-Ogikubo restaurant SPICE Hanten in Tokyo (2025–26 reviews).',
      philosophy: null,
      specialty: 'Jentan (Taiwanese steamed soup).',
      anecdotes: [
        { text: 'A February 2026 late-lunch guest had the jentan of Kyoto chicken and pork ribs with lily buds and found the clear broth gently salted but deep.', source: R + 'B523367668/' },
        { text: 'A December 2025 visitor at 10:45 on a Thursday took the peanut-shaped chopstick rest for ceramic until the staff said it could be eaten too.', source: R + 'B518286606/' },
      ],
      japanese_sources_summary: '食べログ: ニューオリエンタル、台湾料理、下京区若松町425-2、五条駅から368m、月・木〜日 11:00〜18:00、火・水曜休み、ほかに休みの日あり (Instagram で告知)、カード可、電子マネー不可、20席、2025年11月21日オープン。口コミ (2025〜2026年、英語): 東京の SPICE Hanten の2店目、台湾風の蒸しスープ、京都の鶏と豚のスペアリブ、金針菜、パイナップル、スパイスの小皿、朝からお酒と自然派ワイン、路地の奥の木の家。',
      confidence: 'medium', sources: [TB, R + 'B518286606/', R + 'B518864508/', R + 'B520204869/', R + 'B522392001/', R + 'B523262438/', R + 'B523367668/', R + 'B523640390/', R + 'B524659416/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A small new room; bags are left at the foot of the stairs (December 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高倉通花屋町下ル若松町425-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated December 2025–June 2026.' },
    pin_source: `Tabelog ${TB} (34.992945, 135.762429); cross-checked: GSI 京都府京都市下京区若松町425番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523367668/'],
    price_note: 'No item prices in reviews; ¥1,000–2,000 at lunch, ¥6,000–8,000 with drinks (reviews).', last_checked: TODAY, items: [
      it('', '', 'Jentan (Taiwanese steamed soup)', '', 'Soups', 'ask', 'no', '2025–26 reviews.', 'jentan'),
    ] }, {
    cuisine: '大きな蒸し器でじっくり蒸す台湾風の蒸しスープ — 京都の鶏と豚のスペアリブに金針菜、パイナップル入りも (2025〜26年) — にスパイスのアジアの小皿、スパイスのドリンク、朝から自然派ワイン (2026年)、昼は1,000〜2,000円ほど',
    neighborhood: '高倉花屋町、五条の南。五条駅から370mほど',
    gf_detail: '要確認。鶏と豚のスペアリブの澄んだ蒸しスープ、スパイスの小皿 (2025〜26年の口コミ)。調味料は不明。',
    vegan_detail: 'ヴィーガン不可。スープは京都の鶏と豚のスペアリブ (2026年2月の口コミ)。',
    notes: '[台湾のスープ・五条] 五条の近くの路地の奥の、東京の SPICE Hanten の京都の姉妹店。澄んだやさしい台湾風の蒸しスープにスパイスの小皿と自然派ワイン、朝から。ほっとひと息。1,000〜2,000円ほど。',
  });
}

// ================================================================ 手打そば処 坂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017127/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00']);
  put({
    id: 'kyoto_teuchi_soba_saka_gojozaka', name: '手打そば処 坂 (Teuchi Soba-dokoro Saka)', category: 'OMNI',
    lat: 34.995908, lng: 135.780002, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: hand-made soba and udon, tempura (2025–26 reviews) — ask about 100% buckwheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broth, chirimen rice, herring and meat soba (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Wed, Sat, Sun 11:00–15:00; closed Thursdays and Fridays; hours may change (Tabelog). Lunch sets come with a small rice bowl of chirimen jako or yukari/shiso (2025–26 reviews). Cards and QR; no e-money (Tabelog). 22 seats: counter, tables and tatami; non-smoking (Tabelog; 2025–26 reviews). On the right going up Gojo-zaka toward Kiyomizu-dera, about 10 min up the slope (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo-zaka, below Kiyomizu-dera',
    cuisine: 'Hand-made soba and udon with a rice side: tempura soba ¥1,500 with chirimen or shiso rice (June and August 2025), zaru soba ¥900 (October 2025), nishin soba (November 2025), meat soba (March 2026), chilled wild-vegetable soba with chirimen-sansho rice (August 2026), yamakake soba, tempura udon, kitsune udon (January 2025); about ¥1,000–2,000',
    website: null, gmaps: gm('手打そば処 坂 五条坂'), menu_url: null,
    notes: '[Soba · Gojo-zaka] A calm, wood-lined hand-made soba shop on the way up to Kiyomizu-dera, loved by locals and visitors: firm, smooth soba and freshly fried tempura, every set with a little rice bowl. About ¥1,000–2,000; lunch only.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Hand-made noodles; many regulars as well as tourists (May 2025 review).',
      philosophy: null,
      specialty: 'Tempura soba; nishin soba.',
      anecdotes: [
        { text: 'An August 2025 driver stuck in a 2½-hour parking queue below Kiyomizu chose it for the ¥1,500 tempura soba — with rice — and found the vegetable tempura superb.', source: R + 'B511192309/' },
        { text: 'A November 2025 cold-soba fan tried nishin soba for the first time, for the occasion, and was won over by the broth.', source: R + 'B517802750/' },
      ],
      japanese_sources_summary: '食べログ: 手打そば処 坂、そば・うどん、東山区五条橋東6-583、京阪清水五条駅から徒歩20分 (五条坂を清水寺へ10分、右側)、月・火・水・土・日 11:00〜15:00、木・金曜休み、カード・QR 可、電子マネー不可、22席、禁煙。口コミ (2025〜2026年、英語): 手打ちのそばとうどん、昼のセットにちりめんじゃこかゆかりのご飯、天ぷらそば1,500円、ざるそば900円、にしんそば、肉そば、冷たい山菜そば、山かけそば、地元の常連と観光客。',
      confidence: 'medium', sources: [TB, R + 'B506321101/', R + 'B508960822/', R + 'B511192309/', R + 'B514947731/', R + 'B515794548/', R + 'B517802750/', R + 'B528654465/', R + 'B533768304/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas visitors (June 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区五条橋東6-583',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.995908, 135.780002); cross-checked: GSI 京都府京都市東山区五条橋東六丁目583番地 (lot) 136m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511192309/', R + 'B515794548/'],
    price_note: 'Prices from August and October 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tempura soba (with a rice side)', '¥1,500', 'Soba', 'no', 'no', 'August 2025 review.', 'tempura_soba'),
      it('', '', 'Zaru soba (with a rice side)', '¥900', 'Soba', 'no', 'no', 'October 2025 review.', 'zaru'),
    ] }, {
    cuisine: 'ご飯つきの手打ちのそばとうどん: ちりめんかしそのご飯の天ぷらそば1,500円 (2025年6月・8月)、ざるそば900円 (2025年10月)、にしんそば (2025年11月)、肉そば (2026年3月)、ちりめん山椒ご飯の冷たい山菜そば (2026年8月)、山かけそば、天ぷらうどん、きつねうどん (2025年1月)、1,000〜2,000円ほど',
    neighborhood: '五条坂、清水寺の下',
    gf_detail: 'グルテンフリー不可。手打ちのそばとうどん、揚げ物 (2025〜26年の口コミ)。十割そばかは要確認。',
    vegan_detail: 'ヴィーガン不可。出汁、ちりめんご飯、にしんそば、肉そば (2025〜26年の口コミ)。',
    notes: '[そば・五条坂] 清水寺への坂の途中の木のぬくもりのある手打ちそばの店。地元の人にも旅行者にも人気で、コシのあるなめらかなそばと揚げたての天ぷら、どのセットにも小さなご飯。1,000〜2,000円ほど、昼のみ。',
  });
}

save();
