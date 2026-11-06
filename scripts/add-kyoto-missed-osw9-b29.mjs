// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 29.
//   + ぶゞ家 Bubuya (bubu-zuke and pickles set meals at the Gion pickle shop ぎおん川勝, near Yasaka Shrine)     [core]
//   + ボクのスタンド 四条烏丸店 Boku no Stand (big-skewer yakitori standing bar behind Daimaru; opened June 2026) [core]
//   + 鰻屋 瀬がわ Unagiya Segawa (Kansai-style charcoal eel in a machiya off Shinmachi-Nishiki; since 2025)     [notable]
//   + 聖護院 嵐まる Shogoin Ranmaru (fish izakaya of an angling owner near Kumano Shrine; about 30 years)         [notable]
//   Same-name counts first (same brand or operator): ぶゞ家 1; ボクのスタンド — the operator's June 2026 press
//   release (PR TIMES) names 四条大宮店 and 梅田店 before this third shop, and our crawl lists one other ボクのスタンド;
//   none in data, a group of three, so this one drafted; 瀬がわ 1; 嵐まる 1.
//   Taken in queue order on 2026-11-05: core 26000405, 26045045; notable 26043455, 26004653. None is in
//   data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: ボクのスタンド "なし" (its English says 10% is added);
//   the others have no section.
//   Pins: 嵐まる's Tabelog point is 2.7 m from vm_browny_bread_bagels, so moved ~6.7 m north.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-29');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ぶゞ家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000405/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.gion-kawakatsu.com/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_bubuya_gion', name: 'ぶゞ家 (Bubuya)', category: 'OMNI',
    lat: 35.004201, lng: 135.777213, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice, pickles, miso soup and ochazuke with hojicha; pickles and toppings are not described for gluten (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The core is rice, pickles and tea, but miso soup and toppings such as chirimen-jako and eel are not plant-based (2025–26 reviews).',
    hours_raw: '11:00–18:00 (last order 17:30); closed Wednesday (Tabelog). No bookings; the pickle shop ぎおん川勝 in front opens at 10:00 (Tabelog; April 2026). 12 seats at tables; English menu; children welcome, kids\' menu; wheelchair accessible; non-smoking; cards (VISA, JCB), IC cards and PayPay (Tabelog). Inside ぎおん川勝, a stone\'s throw from Yasaka Shrine; 2 min from the Gion bus stop (Tabelog; April 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north of Shijo by Yasaka Shrine — Gion bus stop',
    cuisine: 'Bubu-zuke (Kyoto ochazuke) set meals at a pickle maker: about seven kinds of house pickles with rice served from a wooden ohitsu, miso soup and hot hojicha to pour over — bubu-zuke ¥1,815 (June 2026); chirimen-sansho or grilled-eel chazuke; rice refills ¥200, but not with the chirimen-jako rice (2025–26 reviews) · pickles to take away from ぎおん川勝: celery, mibuna, burdock, umeboshi (2025 reviews)',
    website: SITE, gmaps: gm('ぶゞ家 ぎおん川勝'), menu_url: null,
    notes: "[Ochazuke & pickles · Gion by Yasaka Shrine] The little dining room of the Gion pickle shop ぎおん川勝: a colourful spread of house pickles, glossy rice from a wooden tub and hojicha to make bubu-zuke (Kyoto ochazuke) — about ¥1,815, or with chirimen-sansho or eel. A gentle breakfast-lunch near Yasaka Shrine; buy pickles on the way out. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Restaurant of the pickle shop ぎおん川勝 (no person named)'], origin: null,
      background: 'Per Tabelog: the eat-in room of ぎおん川勝, relocated from 祇園町北側292-2; the pickle shop opens an hour before the dining room (April 2026 review).',
      philosophy: null, specialty: 'Bubu-zuke with house pickles.',
      anecdotes: [
        { text: 'A March 2025 diner found the pickles average but the umeboshi exceptional.', source: R + 'B502810847/' },
        { text: 'Arriving fifteen minutes before opening in June 2026, a couple were invited to wait at a table in the shop and read the menu.', source: R + 'B529941287/' },
        { text: 'A February 2026 regular wished the strong tea were milder for ochazuke.', source: R + 'B493046910/' },
      ],
      japanese_sources_summary: '食べログ: ぶゞ家、お茶漬け・日本料理、東山区祇園町北側297 ぎおん川勝、市バス祇園から徒歩2分、11:00〜18:00 (L.O. 17:30)、水曜休み、予約不可、12席 (テーブル)、英語メニュー、子供可・キッズメニュー、車椅子可、禁煙、カード (VISA・JCB)・電子マネー・PayPay 可、祇園町北側292-2から移転。口コミ (2025年2月〜2026年10月、英語): 7種ほどの漬物、おひつのご飯、味噌汁、ほうじ茶、ぶぶ漬け1,815円、ちりめん山椒、鰻のお茶漬け、ご飯のおかわり200円 (ちりめんご飯は不可)、川勝は10時開店、梅干し、セロリや壬生菜や牛蒡の漬物の持ち帰り。',
      confidence: 'medium', sources: [TB, SITE, R + 'B467264151/', R + 'B493046910/', R + 'B497734614/', R + 'B501226641/', R + 'B502810847/', R + 'B522462275/', R + 'B522736767/', R + 'B526020672/', R + 'B529941287/', R + 'B537898561/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); walk in.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側297 ぎおん川勝',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004201, 135.777213); cross-checked: GSI 京都府京都市東山区祇園町北側297番地 (lot) 7m; 7.7 m from kyoto_hachidaime_gihey_gion; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529941287/'],
    price_note: 'No menu read; price from a June 2026 review (tax included).', last_checked: TODAY, items: [
      it('ぶぶ漬け', 'bubu-zuke', 'Bubu-zuke set (pickles, rice, miso soup, tea)', '¥1,815', 'Set meals', 'ask', 'ask', 'June 2026 review.', 'bubuzuke'),
      it('', '', 'Chirimen-sansho ochazuke', '', 'Set meals', 'ask', 'no', '', 'chirimen_chazuke'),
    ] }, {
    cuisine: '漬物屋のぶぶ漬けの定食: 自家製の漬物7種ほどに、おひつのご飯、味噌汁、注ぐための熱いほうじ茶。ぶぶ漬け1,815円 (2026年6月)、ちりめん山椒や鰻のお茶漬け。ご飯のおかわり200円 (ちりめんご飯は不可) (2025〜26年の口コミ)・ぎおん川勝の漬物の持ち帰り: セロリ、壬生菜、牛蒡、梅干し (2025年の口コミ)',
    neighborhood: '八坂神社そば、四条の北の祇園。祇園バス停から',
    gf_detail: '要確認。ご飯、漬物、味噌汁、ほうじ茶のお茶漬け。漬物や具の小麦は不明 (2025〜26年の口コミ)。',
    vegan_detail: '要確認。中心はご飯、漬物、お茶だが、味噌汁やちりめんじゃこ、鰻の具は植物性ではない (2025〜26年の口コミ)。',
    notes: '[お茶漬けと漬物・八坂神社そばの祇園] 祇園の漬物屋ぎおん川勝の小さな食事処。色とりどりの自家製の漬物、おひつのつやつやのご飯、ほうじ茶でぶぶ漬けに (1,815円ほど、ちりめん山椒や鰻も)。八坂神社近くのやさしい朝昼ごはん。帰りに漬物を。水曜休み。',
  });
}

// ================================================================ ボクのスタンド 四条烏丸店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045045/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://prtimes.jp/main/html/rd/p/000000201.000030735.html';
  const W = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_boku_no_stand_shijo_karasuma', name: 'ボクのスタンド 四条烏丸店 (Boku no Stand Shijo Karasuma)', category: 'OMNI',
    lat: 35.004457, lng: 135.760542, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori with sauce, chicken-katsu curry, ponzu dishes; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori bar (Tabelog; 2026 reviews).',
    hours_raw: 'Mon–Fri 11:30–14:30 and 17:00–23:00; Sat and holidays 12:00–23:00; Sun 12:00–22:00 (last orders an hour before close) (Tabelog). Bookings taken; all-you-can-drink courses from ¥4,000 (Tabelog). Service charge: none — Tabelog\'s Japanese original says "なし" (its English says 10% is added). QR ordering and Wi-Fi (2026 reviews). Standing bar on the ground floor, four tables for four upstairs; non-smoking; cards (VISA, Master, JCB, Diners) (Tabelog; September 2026). In a back alley on the west side of Daimaru Kyoto; 3 min from Karasuma Stn (Tabelog; August 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: day(['12:00', '23:00']), 6: day(['12:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Behind Daimaru near Shijo-Karasuma — 3 min from Karasuma Stn',
    cuisine: 'Popular izakaya and standing bar of "dodeka" (giant) yakitori: the signature giant liver skewer, ¥99 for the first one (2026 reviews), negima, chicken skin and neck with ponzu, garlic chives with liver, steak; chicken-katsu "Boku Suta" curry set at lunch; drinks from a liquor-store-style range, mega mugs of beer (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('ボクのスタンド 四条烏丸店'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori standing bar · behind Daimaru near Shijo-Karasuma] The third shop of a popular Kyoto–Osaka standing-bar brand, opened June 2026: giant yakitori skewers — the first giant liver is ¥99 — chicken skin with ponzu and curry to finish, from lunch to 23:00. About ¥2,000–4,000. QR ordering; no service charge per Tabelog's Japanese text.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 11 June 2026 (Tabelog). Per the operator\'s press release (PR TIMES, 2026): a third shop after 四条大宮店 and 梅田店, standing on the ground floor and tables upstairs, the signature being a giant liver skewer.',
      philosophy: null, specialty: 'Giant liver yakitori.',
      anecdotes: [
        { text: 'An old friend\'s "quick standing drink" turned into a two-hour stay — August 2026.', source: R + 'B533719851/' },
        { text: 'A September 2026 diner found drinks a bit pricey and the skewers slow to arrive.', source: R + 'B536171511/' },
        { text: 'A September 2026 guest praised the thoughtful staff, "especially the manager".', source: R + 'B538569992/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ボクのスタンド 四条烏丸店、居酒屋・焼き鳥、中京区阪東屋町664-29、烏丸駅から徒歩3分、月〜金 11:30〜14:30・17:00〜23:00、土祝 12:00〜23:00、日 12:00〜22:00、サービス料: なし、20席 (4人掛けテーブル4卓と立ち飲み)、禁煙、カード可、2026年6月11日オープン、名物デカ焼鳥、ドデカレバー、酒屋ならではの飲み物、4,000円からの飲み放題コース。PR TIMES (2026年): 四条大宮店、梅田店に続く3店舗目。口コミ (2026年8〜9月、英語): レバー1本目99円、ねぎま、鶏皮とせせりのポン酢、ニラレバ、ステーキ、ランチのチキンカツカレー、QR 注文、大丸の西の路地。',
      confidence: 'medium', sources: [TB, PR, R + 'B533250839/', R + 'B533443367/', R + 'B533505583/', R + 'B533719851/', R + 'B534083464/', R + 'B535282235/', R + 'B535850413/', R + 'B536171511/', R + 'B537732842/', R + 'B538569992/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering; standing downstairs, tables upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区阪東屋町664-29',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the operator\'s press release; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004457, 135.760542); cross-checked: GSI 京都府京都市中京区阪東屋町664番地 (lot) 21m; 6.8 m from kyr_kyoto_kitayama_motomachi; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537732842/', TB],
    price_note: 'No menu read; liver price from 2026 reviews; course floor from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Giant liver skewer (first one)', '¥99', 'Yakitori', 'ask', 'no', 'Price rises from the second; 2026 reviews.', 'dodeka_liver'),
      it('', '', 'All-you-can-drink course', '¥4,000~', 'Courses', 'ask', 'no', 'Tabelog.', 'nomihodai_course'),
    ] }, {
    cuisine: 'デカ焼鳥の人気の居酒屋兼立ち飲み: 名物のドデカレバーは1本目99円 (2026年の口コミ)、ねぎま、鶏皮やせせりのポン酢、ニラレバ、ステーキ。ランチはチキンカツの「ボクスタカレー」の定食。酒屋ならではの飲み物、メガジョッキ (食べログ、2026年の口コミ)',
    neighborhood: '四条烏丸近くの大丸の裏。烏丸駅から徒歩3分',
    gf_detail: '要確認。たれの焼き鳥、チキンカツカレー、ポン酢の皿。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼き鳥の店 (食べログ、2026年の口コミ)。',
    notes: '[焼き鳥の立ち飲み・四条烏丸近くの大丸の裏] 京都と大阪で人気の立ち飲みの3店舗目で、2026年6月開店。デカい焼き鳥 (ドデカレバーは1本目99円)、鶏皮ポン酢、締めのカレーを昼から23時まで。2千〜4千円ほど。QR 注文。食べログの日本語原文ではサービス料なし。',
  });
}

// ================================================================ 鰻屋 瀬がわ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043455/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_unagiya_segawa', name: '鰻屋 瀬がわ (Unagiya Segawa)', category: 'OMNI',
    lat: 35.005678, lng: 135.756967, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Eel grilled with a soy-based tare, dashi for hitsumabushi, dashimaki; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant (Tabelog).',
    hours_raw: '11:00–14:00 (last order 13:30) and 17:00–21:30 (last order 21:00), daily (Tabelog). Bookings taken (Tabelog). 38 seats incl. sunken-floor seats and a semi-private room for two; English menu with photos; children welcome; non-smoking, smoking area outside; cards incl. UnionPay, PayPay and Alipay (Tabelog). In a machiya down a stone-paved alley on Shinmachi-dori north of Nishiki; 10 min from Karasuma or Shijo Stn (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi-dori north of Nishiki — 10 min from Karasuma or Shijo Stn',
    cuisine: 'Kansai-style eel, prepared and skewered at the shop and grilled crisp over binchotan with a light tare (2026 reviews) · premium unaju (one eel); premium eel rice in a clay pot kept hot on lava stones, finished as ochazuke; hitsumabushi with Kujo negi and dashi; grilled eel with ikura; dashimaki; refillable pickles; freshly ground sansho and a house sansho-shichimi blend (2026 reviews)',
    website: null, gmaps: gm('鰻屋 瀬がわ 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Unagi · machiya off Shinmachi-Nishiki] A calm eel house down a stone-paved alley, opened in 2025, grilling Kansai-style — crisp skin, soft flesh — over binchotan: unaju, hitsumabushi, or eel rice in a clay pot on hot stones. About ¥5,000–8,000. English menu; open daily.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 27 August 2025 (Tabelog). An August 2026 reviewer watched each eel prepared and skewered at the front of the shop and grilled Kansai-style over binchotan; a September 2026 reviewer calls it one of Japan\'s selected restaurants of 2026.',
      philosophy: null, specialty: 'Kansai-style unaju; clay-pot eel rice.',
      anecdotes: [
        { text: 'A September 2026 diner found it upscale yet "quite reasonable" in price, and liked that Kujo negi replaced ordinary leeks in the hitsumabushi.', source: R + 'B536564390/' },
        { text: 'An October 2026 guest, no fan of sweet sauces, ate the eel with sansho instead and asked for the pickles again and again.', source: R + 'B538453819/' },
        { text: 'An October 2026 return visitor came back from the eel with ikura to the premium unaju.', source: R + 'B518292899/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鰻屋 瀬がわ、日本料理・うなぎ・海鮮、中京区新町通錦小路上る百足屋町380、阪急烏丸駅・地下鉄四条駅から徒歩10分、11:00〜14:00 (L.O. 13:30)・17:00〜21:30 (L.O. 21:00)、無休、38席、2名の半個室、掘りごたつ、英語メニュー、子供可、禁煙 (喫煙所は外)、カード・PayPay・Alipay 可、2025年8月27日オープン。口コミ (2026年8〜10月、英語): 店の前で捌いて串打ち、備長炭の関西焼き、上鰻重、土鍋の鰻ご飯を溶岩石で、お茶漬けに、ひつまぶしと九条ねぎ、いくらのせ、だし巻き、漬物のおかわり、挽きたての山椒、2026年の名店に選出との記述。',
      confidence: 'medium', sources: [TB, R + 'B518292899/', R + 'B533354709/', R + 'B533656234/', R + 'B534457282/', R + 'B534942567/', R + 'B535844278/', R + 'B536201661/', R + 'B536564390/', R + 'B538298890/', R + 'B538453819/'] },
    cultural_comfort: { level: 'english', note: 'English menu with photos (Tabelog); book for dinner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新町通錦小路上る百足屋町380',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005678, 135.756967); cross-checked: GSI 京都府京都市中京区百足屋町380番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu or prices read; reviewers report ¥5,000–8,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Premium unaju (one eel)', '', 'Eel', 'ask', 'no', '', 'jo_unaju'),
      it('', '', 'Hitsumabushi', '', 'Eel', 'ask', 'no', '', 'hitsumabushi'),
    ] }, {
    cuisine: '店で捌いて串を打ち、備長炭で皮をパリッと焼く関西風の鰻、たれは軽め (2026年の口コミ)・上鰻重 (一尾)、溶岩石で熱々を保つ土鍋の上鰻ご飯 (締めはお茶漬け)、九条ねぎと出汁のひつまぶし、いくらのせの鰻、だし巻き、おかわりできる漬物、挽きたての山椒と自家製の山椒七味 (2026年の口コミ)',
    neighborhood: '錦小路の北の新町通。烏丸駅や四条駅から徒歩10分',
    gf_detail: '要確認。醤油系のたれの鰻、ひつまぶしの出汁、だし巻き。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰻の店 (食べログ)。',
    notes: '[鰻・新町錦の町家] 石畳の路地の奥の落ち着いた鰻屋で、2025年開店。関西風に備長炭で皮はパリッと身はふっくら。鰻重、ひつまぶし、溶岩石の土鍋の鰻ご飯。5千〜8千円ほど。英語メニューあり、無休。',
  });
}

// ================================================================ 聖護院 嵐まる
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26004653/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_shogoin_ranmaru', name: '聖護院 嵐まる (Shogoin Ranmaru)', category: 'OMNI',
    lat: 35.016527, lng: 135.778592, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Simmered and grilled fish, tempura, sushi, crab pasta and nyumen; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya with wagyu and chicken too (2025–26 reviews).',
    hours_raw: 'Tue–Sun 17:30–23:00 (last order 22:30); closed Monday (Tabelog). Bookings taken, by phone (Tabelog; August 2026); matsutake can be set aside on request when booking (November 2025). The menu shows almost no prices (September 2026). 20 seats: a counter and a small raised tatami area; non-smoking; JCB and AMEX (Tabelog; August 2026). Near Kumano Shrine and Heian Shrine — 2 min from the Kumano-jinja-mae bus stop, 8 min from Jingu-Marutamachi Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shogoin near Kumano Shrine — 8 min from Jingu-Marutamachi Stn',
    cuisine: 'Fish izakaya where much of the fish is caught by the owner: big simmered fish with burdock, grilled flounder head, firefly squid, fish tempura, mozuku with octopus and crab, baby octopus, saba sushi and sushi, crab pasta, a Ranmaru salad, black wagyu steak, grilled Kyoto chicken with Kujo negi, a mini uni and ikura bowl, nyumen; fried matsutake and dobin-mushi in autumn; Sado sake (2025–26 reviews)',
    website: null, gmaps: gm('聖護院 嵐まる'), menu_url: null,
    notes: "[Fish izakaya · Shogoin near Heian Shrine] A neighbourhood fish izakaya of some 30 years where the friendly owner catches much of the fish — simmered fish double the usual size, grilled flounder head, saba sushi — with Sado sake. Few prices on the menu; about ¥6,000–8,000. Open late; handy after a show at the nearby theatre. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; an angler who catches much of the fish, per 2026 reviews)'], origin: null,
      background: 'Per 2026 reviews: a fish izakaya loved by locals for about 30 years (September 2026); many of the fish are caught by the chef (July 2026); the house sake comes from Sado (June–July 2026).',
      philosophy: null, specialty: 'Simmered and grilled fish; saba sushi.',
      anecdotes: [
        { text: 'A November 2025 returnee asked when booking for matsutake to be set aside, and had them fried.', source: R + 'B516447925/' },
        { text: 'A June 2026 diner recognised a rare Sado sake last tasted on Sado ten years before.', source: R + 'B531512896/' },
        { text: 'After a show at a nearby theatre in August 2026, a guest phoned around 9 pm and found the shop full even on a weekday.', source: R + 'B534215694/' },
      ],
      japanese_sources_summary: '食べログ: 聖護院 嵐まる、海鮮・居酒屋、左京区聖護院山王町28-58、京阪神宮丸太町駅2番出口から徒歩8分、熊野神社前バス停から徒歩2分、火〜日 17:30〜23:00 (L.O. 22:30)、月曜休み、20席、カウンターと座敷、禁煙、カード (JCB・AMEX)。口コミ (2025年10月〜2026年9月、英語): 平目の頭の焼き物、ホタルイカ、魚の天ぷら、蛸と蟹のもずく酢、煮付け、飯蛸、鯖寿司、寿司、蟹のパスタ、嵐まるサラダ、黒毛和牛のステーキ、九条ねぎと京都の鶏、雲丹といくらの小丼、にゅうめん、松茸の唐揚げと土瓶蒸し、Sado の酒、店主が釣った魚、約30年、値段のない品書き。',
      confidence: 'medium', sources: [TB, R + 'B510067832/', R + 'B516447925/', R + 'B523953824/', R + 'B525661088/', R + 'B530140784/', R + 'B531143438/', R + 'B531512896/', R + 'B533733579/', R + 'B534215694/', R + 'B535969615/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone; few prices on the menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院山王町28-58',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.016467, 135.778592), moved ~6.7 m north to 35.016527 because vm_browny_bread_bagels is pinned 2.7 m from the Tabelog point; cross-checked: GSI 京都府京都市左京区聖護院山王町28番地 (lot) 65m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices read — the menu lists almost none (September 2026).', last_checked: TODAY, items: [
      it('', '', 'Simmered fish of the day', '', 'Fish', 'ask', 'no', '', 'nitsuke'),
      it('', '', 'Saba sushi', '', 'Rice', 'ask', 'no', '', 'saba_zushi'),
    ] }, {
    cuisine: '魚の多くを店主が釣る魚の居酒屋: 牛蒡を添えた大きな煮付け、平目の頭の焼き物、ホタルイカ、魚の天ぷら、蛸と蟹のもずく酢、飯蛸、鯖寿司と寿司、蟹のパスタ、嵐まるサラダ、黒毛和牛のステーキ、九条ねぎと京都の鶏の焼き物、雲丹といくらの小丼、にゅうめん。秋は松茸の唐揚げと土瓶蒸し。Sado の酒 (2025〜26年の口コミ)',
    neighborhood: '熊野神社近くの聖護院。神宮丸太町駅から徒歩8分',
    gf_detail: '要確認。煮付けや焼き魚、天ぷら、寿司、蟹のパスタ、にゅうめん。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚の居酒屋で、和牛や鶏も (2025〜26年の口コミ)。',
    notes: '[魚の居酒屋・平安神宮近くの聖護院] 30年ほど続く町の魚の居酒屋で、気さくな店主が魚の多くを自ら釣る。普通の倍ほどの煮付け、平目の頭の焼き物、鯖寿司に Sado の酒。品書きに値段はほぼなく、6千〜8千円ほど。夜遅くまで開いていて、近くの劇場の帰りにも。月曜休み。',
  });
}

save();
