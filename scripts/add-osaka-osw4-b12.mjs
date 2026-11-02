// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 12.
//   + hanako 北堀江 Hanako Kitahorie (soba with Tanba black beans, fish and sake, near Yotsubashi)
//   + 日本酒うなぎだに Nihonshu Unagidani (sake bar with 100+ sakes and eel dishes, in an alley off Shinsaibashi-suji)
//   + Cafe&Bistro For Yu (French-Italian bistro with Rossini, dog-friendly, Kitahorie)
//   + ぎん庵 心斎橋 Gin An Shinsaibashi (kushikatsu eaten with dashi, and kamameshi; Higashi-Shinsaibashi)
//   - 27099475 ディーン&デルーカ カフェクリスタ長堀店: Dean & DeLuca, a national chain of cafés.
//   - 27002807 蓬莱本館: the 551 Horai flagship; 551 Horai has many branches across Kansai (chain flagship = chain).
//   Chain check: hanako one shop found (web search 2026-11-02). Gin An has same-concept shops in Namba and Kyobashi
//   (gurunavi, tabiiro listings); none of those is in data, so drafted under the "skip when chain in data or expanding
//   fast" ruling, flagged for the integrator. None of the four is in data/osaka.json (grep by name, Tabelog id and
//   address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27099475', 'chain: ディーン&デルーカ (Dean & DeLuca) café, many branches nationwide');
skip('27002807', 'chain: 551蓬莱 (551 Horai) flagship 蓬莱本館; many 551 Horai branches across Kansai');

// ================================================================ hanako 北堀江
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27119075/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_hanako_kitahorie', name: 'hanako 北堀江 (Hanako Kitahorie)', category: 'OMNI',
    lat: 34.673585, lng: 135.49564, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The soba is made with domestic buckwheat flour and Tanba black beans, and a 100% buckwheat version is +¥300 (August 2026), but the blend of the regular soba is not stated, and the dipping sauce is soy-based (a reviewer found it strong in soy sauce, October 2026). Tempura sets, fried tuna and oyakodon are also on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the soba is served with a dipping broth, and the menu centres on fish, duck and chicken.',
    hours_raw: 'Daily 11:00–15:00 and 17:30–23:00, last order 22:00; closed New Year\'s Day (Tabelog). No reservations at lunch; reservations taken for dinner (Tabelog). Fills up at lunch (September–October 2026). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, iD and PayPay (Tabelog). 22 seats: 4 at the counter, 18 at tables; non-smoking; wheelchair accessible; children and strollers welcome (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 1-11-10 — 2 min from Yotsubashi Stn',
    cuisine: 'Soba shop and fish izakaya: "Kuro Mame Soba" made with domestic buckwheat flour and Tanba black beans, fresh fish and seasonal sake (Tabelog shop text) · courses: omakase of 8 dishes ¥5,500, omakase of 7 dishes ¥4,500, Omi duck hot pot course (duck from Shiga) ¥5,500 (Tabelog) · lunch sets A/B/C change daily: tempura zaru soba with a clay-pot rice of jako and mentaiko ¥1,200 (August 2026); clay-pot rice of tuna and corn, tempura of shrimp, eggplant, pumpkin and shishito (September 2026); yuzu-salt dipping soba with young chicken and red-salmon clay-pot rice (October 2026) · à la carte: Kyotanba black bean zaru soba, large 240 g ¥1,300, tororo ¥300, egg ¥150, nagaimo wasabi pickles ¥600, fried tuna ¥800, soba pudding ¥300 (August 2026); 100% buckwheat +¥300; chicken dipping soba; duck tsukune dipping soba; beef and shimeji dipping soba (August 2026); oyster yuzu-salt dipping soba and oyakodon (November 2026) · dinner: sashimi platter for one, duck meatballs with egg yolk, grilled ayu (September 2026), clay-pot rice of sea bream, sawara or ayu for two or more (July–August 2026) · soba-yu and black-bean tea after the meal',
    website: null, gmaps: gm('hanako 北堀江'), menu_url: null,
    notes: '[Soba · Kitahorie, black-bean soba and fish] A calm soba shop by Yotsubashi Station whose noodles carry the aroma of Tanba black beans. Lunch is a daily-changing set of soba with clay-pot rice for about ¥1,200; at dinner it turns into a fish-and-sake izakaya with sashimi, duck and clay-pot rice for two. Order the black-bean zaru soba (100% buckwheat for +¥300) and the soba pudding. Lunch fills fast and cannot be booked, so come at 11:00; book for dinner.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 1 October 2020; soba of domestic buckwheat flour and Tanba black beans, fish, and sake; courses with Omi duck hot pot.', philosophy: null, specialty: 'Black-bean soba ("Kuro Mame Soba").',
      anecdotes: [
        { text: '"It was my first time eating black bean soba, and it was quite delicious! ... The Soba Pudding for JPY 300 was outstanding." — August 2026, a first visit.', source: R + 'B532864435/' },
        { text: '"I visited right after it opened, and by the time I left, it was almost full!" — October 2026, at lunch.', source: R + 'B537703782/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): hanako 北堀江、そば・魚介・居酒屋、大阪市西区北堀江1-11-10、四ツ橋駅から徒歩2分、毎日11:00〜15:00、17:30〜23:00 (L.O. 22:00)、元日休み、ランチは予約不可、カード・交通系IC・iD・PayPay 可、22席 (カウンター4、テーブル18)、禁煙、2020年10月1日オープン。国産そば粉と Tanba の黒豆のそば、鮮魚と日本酒、おまかせコース8品5,500円、7品4,500円、Omi の鴨鍋コース5,500円。口コミ(2026年7月〜11月): ランチAセットの天ざるそばとじゃこ明太の土鍋ごはん1,200円、黒豆ざるそば大盛り240g 1,300円、とろろ300円、そばプリン300円、十割は+300円、柚子塩のつけそば、鴨つくねのつけそば、牡蠣のつけそば、鯛・さわら・鮎の土鍋ごはん (2人から)、そば湯と黒豆茶、昼は満席に。',
      confidence: 'medium', sources: [TB, R + 'B469124181/', R + 'B505487291/', R + 'B532864435/', R + 'B532941206/', R + 'B532987491/', R + 'B533172415/', R + 'B533307067/', R + 'B533973031/', R + 'B534364227/', R + 'B535046040/', R + 'B535283606/', R + 'B536566748/', R + 'B537703782/', R + 'B537786495/', R + 'B538451712/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats suit solo diners; lunch sets change daily. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-11-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} 34.673548,135.495575; GSI 大阪府大阪市西区北堀江一丁目11番10号 (go) 34.673592,135.495575, 5m. Both points fall about 3 m from GUFO next door at 1-11-9 (osaka_gufo_kitahorie), so the pin is set about 8 m east of GUFO (numbers rise eastward: my bowl 1-11-8 is west of GUFO 1-11-9); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532864435/', R + 'B505487291/', TB],
    price_note: 'Prices from August 2026 reviews; courses from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Kyotanba black bean zaru soba, large (240 g)', '¥1,300', 'Soba', 'ask', 'no', 'August 2026 review.', 'kuromame_zaru_soba'),
      it('', '', '100% buckwheat noodles (upgrade)', '+¥300', 'Soba', 'ask', 'no', 'August 2026 review.', 'juwari_upgrade'),
      it('', '', 'Lunch set A: tempura zaru soba with jako and mentaiko clay-pot rice', '¥1,200', 'Lunch', 'no', 'no', 'August 2026 review; the set changes daily.', 'lunch_set_a'),
      it('', '', 'Soba pudding', '¥300', 'Dessert', 'ask', 'ask', 'August 2026 review.', 'soba_pudding'),
      it('', '', 'Omakase course, 8 dishes', '¥5,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase_8'),
      it('', '', 'Omi duck hot pot course', '¥5,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'kamo_nabe_course'),
    ] }, {
    cuisine: 'そば屋と魚の居酒屋: 国産そば粉と Tanba の黒豆の「黒豆そば」、鮮魚と季節の日本酒 (食べログの店の紹介)・コース: おまかせ8品5,500円、おまかせ7品4,500円、Omi の鴨 (Shiga 産) の鍋コース5,500円 (食べログ)・ランチは日替わりのA/B/Cセット: 天ざるそばとじゃこ明太の土鍋ごはん1,200円 (2026年8月)、まぐろととうもろこしの土鍋ごはん、エビ・なす・かぼちゃ・ししとうの天ぷら (2026年9月)、若鶏の柚子塩つけそばと紅鮭の土鍋ごはん (2026年10月)・単品: Kyotanba の黒豆ざるそば大盛り240g 1,300円、とろろ300円、卵150円、長芋のわさび漬け600円、まぐろの揚げ物800円、そばプリン300円 (2026年8月)、十割は+300円、鶏のつけそば、鴨つくねのつけそば、牛としめじのつけそば (2026年8月)、牡蠣の柚子塩つけそばと親子丼 (2026年11月)・夜: ひとり分からの刺身盛り、卵黄をのせた鴨のつくね、鮎の塩焼き (2026年9月)、鯛・さわら・鮎の土鍋ごはんは2人から (2026年7〜8月)・食後にそば湯と黒豆茶',
    neighborhood: '北堀江1-11-10。四ツ橋駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。国産そば粉と Tanba の黒豆のそばで、十割は+300円 (2026年8月) だが、ふつうのそばの割合は書かれておらず、つけ汁は醤油ベース (醤油が強めという口コミ、2026年10月)。天ぷらのセット、まぐろの揚げ物、親子丼も。',
    vegan_detail: 'ヴィーガンではありません。そばはだしのつけ汁で、料理は魚、鴨、鶏が中心。',
    notes: '[そば・北堀江、黒豆そばと魚] 四ツ橋駅そばの落ち着いたそば屋で、麺に Tanba の黒豆の香り。昼は日替わりのそばと土鍋ごはんのセットが1,200円ほど、夜は刺身、鴨、2人からの土鍋ごはんの魚と酒の居酒屋に。黒豆のざるそば (十割は+300円) とそばプリンを。昼は予約できずすぐ満席になるので11時に、夜は予約を。',
  });
}

// ================================================================ 日本酒うなぎだに
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27085143/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '23:30']);
  put({
    id: 'osaka_nihonshu_unagidani_shinsaibashi', name: '日本酒うなぎだに (Nihonshu Unagidani)', category: 'OMNI',
    lat: 34.67396, lng: 135.501925, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Eel is glazed with a sweet-savoury sauce, and the menu includes squid, maitake and chikuwa tempura, somen and sushi rolls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel, fish and sake bar; the eel omelette is a dashi omelette.',
    hours_raw: 'Daily 12:00–23:30, last order food 22:30, drinks 23:00; open year-round (Tabelog). Reservations for seats; 1.5-hour limit only when crowded (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 40 seats, mainly standing with some chairs and a counter (Tabelog; April and July 2026); non-smoking (Tabelog). Food is ordered by QR code; sake is chosen from the fridge, standard serving 90 cc (June 2026). Hard to find: Google Maps shows the building to the north; go down the alley behind the vending machines next to Ichiran, turn left at the end; dark at night (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-3-28, down an alley behind the vending machines next to Ichiran — 2 min from Shinsaibashi Stn exits 5/6',
    cuisine: 'Sake bar with over 100 sakes in stock, the line-up always changing, and eel dishes; the signature is "U-maki" (eel rolled in omelette), ordered by 90% of guests, and unaju is a newer specialty (Tabelog shop text) · courses: about 60 sakes all-you-can-drink with sushi, 120 min ¥9,900; about 50 sakes plus beer, highball, chuhai, shochu and fruit liqueurs with eel dishes, 120 min ¥6,600 (Tabelog) · sake tasting sets, e.g. daiginjo set ¥1,880 (July 2026); omakase tasting (October 2026); glass of Saku ¥1,400 (October 2026) · daily appetiser ¥440, grilled nagaimo with soy ¥650, unagi tamago ¥900 (June 2026) · uzaku (eel and cucumber) (May 2026) · chicken sashimi, horse yukhoe, squid, maitake and chikuwa tempura, grilled eel, tekka maki, smoked daikon with cream cheese, nameko miso (August 2026) · unaju about ¥3,000 at lunch (September 2026); 2/3 and 3/4 sizes, with somen (October 2026) · duck breast (October 2026) · assorted sushi (July 2026) · draft beer from a Suntory "Master of Divine Foam" shop (July 2026)',
    website: null, gmaps: gm('日本酒うなぎだに 心斎橋'), menu_url: null,
    notes: '[Sake bar · Shinsaibashi, 100+ sakes and eel] A lively, mostly standing sake bar tucked behind the Shinsaibashi-suji arcade, open from noon every day, with over 100 sakes you pick yourself from the fridge in 90 cc pours. Eat the "U-maki" eel omelette, uzaku and some sashimi, or come at lunch for unaju at about ¥3,000. Hard to find: walk down the alley behind the vending machines beside Ichiran and turn left. Book on weekend nights; expect ¥3,000–5,000 a head in 2026.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 24 April 2015; over 100 sakes always in stock; signature "U-maki", newer unaju. A July 2026 reviewer writes that the sakes are selected by the owner (owner not named).', philosophy: null, specialty: '"U-maki" eel omelette; 100+ sakes.',
      anecdotes: [
        { text: '"There were really a lot of foreign visitors here [around Shinsaibashi] ... It\'s nice that a place focused on local sake has fewer inbound visitors, making it a relaxing spot." — June 2026, at 3 PM on a rainy day.', source: R + 'B530373467/' },
        { text: '"At first, I tried to navigate there but got lost and wandered around for a bit before finally finding it!" — September 2026.', source: R + 'B536622676/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 日本酒うなぎだに、居酒屋・うなぎ・日本酒バー、大阪市中央区心斎橋筋1-3-28、心斎橋駅5・6番出口から徒歩2分、Google マップでは北側の建物が出る、一蘭の横の自販機の裏の路地を入って突き当たりを左、夜は暗いので足元に注意。毎日12:00〜23:30 (料理 L.O. 22:30、ドリンク L.O. 23:00)、年中無休、席のみ予約可、混雑時は1.5時間制、カード・PayPay 可、電子マネー不可、40席、立ち飲み中心、禁煙、2015年4月24日オープン。日本酒は常時100種以上、名物「う巻き」は注文率90%、新名物のうな重、日本酒約60種飲み放題と寿司のコース9,900円、約50種の飲み放題と料理のコース6,600円。口コミ(2026年4月〜10月): 冷蔵庫から選ぶ日本酒、90cc、料理は QR コードで注文、飲み比べ、大吟醸セット1,880円、Saku のグラス1,400円、お通し440円、長芋の醤油焼き650円、うなぎ玉子900円、うざく、鶏刺し、馬肉ユッケ、うな重は昼に3,000円ほど、2/3と3/4のサイズ、揖保乃糸のお素麺、鴨ロース、周辺は外国人客が多いが店は落ち着いている。',
      confidence: 'medium', sources: [TB, R + 'B513220867/', R + 'B527822644/', R + 'B528881702/', R + 'B530373467/', R + 'B530672919/', R + 'B530874490/', R + 'B531574340/', R + 'B534126979/', R + 'B534158865/', R + 'B535421296/', R + 'B536622676/', R + 'B536783856/', R + 'B537198248/', R + 'B537200747/', R + 'B538226036/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Food ordered by QR code; sake picked from the fridge and handed to staff (2026). A June 2026 reviewer notes fewer overseas visitors here than in the surrounding streets. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-3-28',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} 34.67396,135.501925 kept. GSI 大阪府大阪市中央区心斎橋筋一丁目3番28号 (go) 34.674286,135.501785 is 38 m north, beside 一蘭 心斎橋店 (osaka_ichiran_shinsaibashi, 1-3-29) — the listing warns that maps show the building on the north side and that the shop is reached down the alley behind the vending machines next to Ichiran, so the Tabelog point inside the block is used. Nearest records: 麓鳴館 (osaka_rokumeikan_shinsaibashi, 1-3-12) 16 m, 大阪 もつ鍋 PLay (1-3-29) 21 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530874490/', R + 'B534126979/', R + 'B535421296/', TB],
    price_note: 'Prices from June–October 2026 reviews; courses from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', '"U-maki" / unagi tamago (eel rolled in dashi omelette)', '¥900', 'Signature', 'ask', 'no', 'June 2026 review; the shop says 90% of guests order it.', 'umaki'),
      it('', '', 'Unaju (grilled eel on rice), lunch', 'about ¥3,000', 'Eel', 'ask', 'no', 'September 2026 review; 2/3 and 3/4 sizes in October 2026.', 'unaju'),
      it('', '', 'Uzaku (eel and cucumber)', '', 'Eel', 'ask', 'no', 'May 2026 review.', 'uzaku'),
      it('', '', 'Grilled nagaimo with soy sauce', '¥650', 'Small plates', 'ask', 'ask', 'June 2026 review.', 'nagaimo_yaki'),
      it('', '', 'Daiginjo sake tasting set', '¥1,880', 'Sake', 'ask', 'ask', 'July 2026 review.', 'daiginjo_set'),
      it('', '', 'About 60 sakes all-you-can-drink + sushi course, 120 min', '¥9,900', 'Course', 'ask', 'no', 'Tabelog listing.', 'nomihodai_sushi'),
    ] }, {
    cuisine: '日本酒は常時100種以上、入れ替わる品ぞろえとうなぎ料理の酒場。名物は注文率90%の「う巻き」、うな重は新名物 (食べログの店の紹介)・コース: 日本酒約60種の120分飲み放題と寿司9,900円、日本酒約50種とビール、ハイボール、チューハイ、焼酎、果実酒の120分飲み放題と料理6,600円 (食べログ)・飲み比べセット、大吟醸セット1,880円 (2026年7月)、おまかせの飲み比べ (2026年10月)、Saku のグラス1,400円 (2026年10月)・お通し440円、長芋の醤油焼き650円、うなぎ玉子900円 (2026年6月)・うざく (2026年5月)・鶏刺し、馬肉ユッケ、イカ・舞茸・ちくわの天ぷら、うなぎの蒲焼き、鉄火巻き、燻製大根のクリームチーズ、なめこの味噌 (2026年8月)・昼のうな重3,000円ほど (2026年9月)、2/3と3/4のサイズ、素麺つき (2026年10月)・鴨ロース (2026年10月)・寿司の盛り合わせ (2026年7月)・Suntory の「Master of Divine Foam」の店の生ビール (2026年7月)',
    neighborhood: '心斎橋筋1-3-28、一蘭の横の自販機の裏の路地の奥。心斎橋駅5・6番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。うなぎは甘辛いタレで、イカ・舞茸・ちくわの天ぷら、素麺、巻き寿司も。',
    vegan_detail: 'ヴィーガンではありません。うなぎと魚と日本酒の店で、うなぎ玉子はだし巻き。',
    notes: '[日本酒バー・心斎橋、100種以上の日本酒とうなぎ] 心斎橋筋のアーケードの裏に隠れた、立ち飲み中心のにぎやかな日本酒の店。毎日昼12時から開いていて、100種以上の日本酒を自分で冷蔵庫から選び、90ccで。う巻き、うざく、刺身を。昼なら3,000円ほどのうな重も。場所がわかりにくく、一蘭の横の自販機の裏の路地を入って左へ。週末の夜は予約を。2026年はひとり3,000〜5,000円ほど。',
  });
}

// ================================================================ Cafe&Bistro For Yu
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27135331/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:00'], ['17:00', '23:00']), SU = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_cafe_bistro_for_yu_kitahorie', name: 'Cafe&Bistro For Yu', category: 'OMNI',
    lat: 34.674137, lng: 135.495804, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The courses centre on fresh pasta, bread with free refills and a Rossini with Périgueux sauce; a September 2026 reviewer\'s request for no raw food (for a pregnancy) was handled at booking, so state needs when reserving.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The menu is French-Italian with wagyu, foie gras, prosciutto and seafood pasta; dietary requests have been taken at booking (September 2026).',
    hours_raw: 'Mon–Sat and holidays 11:30–15:00 and 17:00–23:00; Sun 11:30–15:00 and 17:00–22:00 (Tabelog). Reservations accepted; phone 11:30–23:00; book ahead, few seats (September 2026). Dinner à la carte has a ¥300 amuse charge per person (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR payment (Tabelog). 22 seats: 8 at the counter, 14 at tables; smoking allowed near the entrance; wheelchair accessible; free Wi-Fi; private hire up to 20 (Tabelog). Dogs allowed inside, with a dog menu (Tabelog; October 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kita-Horie 1-9-9, 1F — 1 min from Yotsubashi Stn, 2 min from Nishi-Ohashi Stn',
    cuisine: 'Casual French-Italian bistro by a chef trained at a high-end Tokyo restaurant, with Japanese ingredients (Tabelog shop text) · specialty: Takamori wagyu (raised on Dassai sake lees) and foie gras Rossini · weekday full course of 7 dishes ¥3,500; Rossini and pasta full course of 8 dishes ¥5,980; lunch of 8 dishes from ¥1,800 (Tabelog) · Italian lunch ¥1,800 and French lunch ¥2,800, Basque cheesecake +¥300 (September 2026); lunch of salad, soup, five appetisers, main, dessert and drink (September 2026) · pasta: peppery or sansho Bolognese (free large size, October 2026), squid and okra aglio e olio (September 2026), lobster pasta with flat noodles (October 2026) · cold potage, carrot mousse, prosciutto, bread with refills (October 2026) · Rossini with truffle Périgueux sauce (September 2026) · half portions of à la carte dishes (September 2026) · wine, sparkling wine in the free-drink menu (September 2026) · dog menu and birthday message plates (October 2026)',
    website: null, gmaps: gm('Cafe&Bistro For Yu 北堀江'), menu_url: null,
    notes: '[French-Italian bistro · Kitahorie, Rossini and dogs welcome] A small bistro a minute from Yotsubashi Station serving French-Italian courses at low prices, with a Rossini of Takamori wagyu and foie gras as the signature. Come for the ¥1,800 Italian lunch of appetisers, pasta and dessert, or the weekday 7-dish dinner course at ¥3,500; the bread is refilled. Dogs may come inside, and there is a dog menu. Book: 22 seats, one chef in the kitchen (October 2026), and it is near full at lunch.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 15 April 2023; the chef trained at a high-end Tokyo restaurant (not named) and cooks French-Italian dishes with Japanese ingredients. An October 2026 reviewer saw one chef cooking and two other staff serving.', philosophy: null, specialty: 'Takamori wagyu and foie gras Rossini.',
      anecdotes: [
        { text: '"There was one chef cooking and two other staff members ... the bread served during the meal is unlimited!" — October 2026, a celebration lunch.', source: R + 'B537274807/' },
        { text: '"If I had to nitpick, the beef Rossini was a bit tough." — October 2026, a birthday dinner.', source: R + 'B536889283/' },
        { text: '"We came to celebrate my dog\'s birthday ... a message plate for the final dessert." — October 2026.', source: R + 'B537119063/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Cafe&Bistro For Yu、イタリアン・ビストロ・バル、大阪市西区北堀江1-9-9 1階、四ツ橋駅から徒歩1分、月〜土・祝11:30〜15:00、17:00〜23:00、日11:30〜15:00、17:00〜22:00、予約可、ディナーのアラカルトはアミューズ代ひとり300円、カード・電子マネー・QR 決済可、22席 (カウンター8、テーブル14)、入口付近で喫煙可、ペット可、2023年4月15日オープン。東京の高級店で修業したシェフのフレンチとイタリアン、名物は Dassai の酒粕で育てた Takamori の和牛とフォアグラのロッシーニ、平日限定のフルコース7品3,500円、ランチ8品1,800円から。口コミ(2026年9月〜10月): イタリアンランチ1,800円、フレンチランチ2,800円、バスクチーズケーキ+300円、山椒のボロネーゼ大盛り無料、パンのおかわり、犬と店内で食事、犬のメニュー、メッセージプレート、ロッシーニがやや硬いという声も、シェフ1人とスタッフ2人。',
      confidence: 'medium', sources: [TB, R + 'B535265167/', R + 'B536087587/', R + 'B536337870/', R + 'B536459151/', R + 'B536767694/', R + 'B536846362/', R + 'B536889283/', R + 'B537076410/', R + 'B537119063/', R + 'B537274807/', R + 'B537414631/', R + 'B537490662/', R + 'B537706570/', R + 'B537921397/', R + 'B538437151/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches and courses make ordering simple; staff took a dietary request at booking (September 2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['A request for no raw food (pregnancy) made at booking was accommodated (review, September 2026).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-9-9 1階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `GSI 大阪府大阪市西区北堀江一丁目9番9号 (go) 34.674137,135.495804; Tabelog ${TB} 34.674191,135.495761 is 7 m away. Nearest records: Ramen KURUMU (1-9-11) and PALM Cafe&Creperie (1-9-14), each about 22 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536337870/', TB],
    price_note: 'Lunch prices from a September 2026 review; courses from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Takamori wagyu and foie gras Rossini', '', 'Specialty', 'ask', 'no', 'Tabelog shop text; in the courses.', 'rossini'),
      it('', '', 'Weekday full course, 7 dishes', '¥3,500', 'Course', 'ask', 'no', 'Tabelog listing; weekdays only.', 'weekday_course'),
      it('', '', 'Rossini and pasta full course, 8 dishes', '¥5,980', 'Course', 'ask', 'no', 'Tabelog listing.', 'rossini_course'),
      it('', '', 'Italian lunch', '¥1,800', 'Lunch', 'ask', 'ask', 'September 2026 review.', 'italian_lunch'),
      it('', '', 'French lunch', '¥2,800', 'Lunch', 'ask', 'no', 'September 2026 review.', 'french_lunch'),
      it('', '', 'Basque cheesecake (add-on)', '+¥300', 'Dessert', 'ask', 'no', 'September 2026 review.', 'basque_cheesecake'),
    ] }, {
    cuisine: '東京の高級店で修業したシェフが和の食材も使う、カジュアルなフレンチとイタリアンのビストロ (食べログの店の紹介)・名物: Dassai の酒粕で育てた Takamori の和牛とフォアグラのロッシーニ・平日限定のフルコース7品3,500円、ロッシーニとパスタのフルコース8品5,980円、ランチは8品1,800円から (食べログ)・イタリアンランチ1,800円とフレンチランチ2,800円、バスクチーズケーキ+300円 (2026年9月)、サラダ、スープ、前菜5種、メイン、デザート、ドリンクのランチ (2026年9月)・パスタ: 黒こしょうや山椒のボロネーゼ (大盛り無料、2026年10月)、イカとオクラのアーリオ・オーリオ (2026年9月)、ロブスターの平打ちパスタ (2026年10月)・冷製ポタージュ、にんじんのムース、生ハム、おかわりできるパン (2026年10月)・トリュフのペリグーソースのロッシーニ (2026年9月)・アラカルトはハーフサイズも (2026年9月)・ワイン、フリードリンクにスパークリングワイン (2026年9月)・犬のメニューと誕生日のメッセージプレート (2026年10月)',
    neighborhood: '北堀江1-9-9 1階。四ツ橋駅から徒歩1分、西大橋駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。コースは生パスタ、おかわりできるパン、ペリグーソースのロッシーニが中心。2026年9月には妊娠中のため生ものなしという予約時の希望に対応してくれたので、予約のときに伝えて。',
    vegan_detail: '要確認。ヴィーガンの情報なし。和牛、フォアグラ、生ハム、魚介のパスタのあるフレンチとイタリアン。予約時の食事の希望には対応あり (2026年9月)。',
    notes: '[フレンチ・イタリアンのビストロ・北堀江、ロッシーニと犬同伴] 四ツ橋駅から1分の小さなビストロで、手ごろな値段のフレンチとイタリアンのコース。名物は Takamori の和牛とフォアグラのロッシーニ。前菜、パスタ、デザートの1,800円のイタリアンランチか、平日の夜の7品3,500円のコースを。パンはおかわりできる。犬は店内に入れて、犬用のメニューも。22席でキッチンはシェフ1人 (2026年10月)、昼はほぼ満席なので予約を。',
  });
}

// ================================================================ ぎん庵 心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27101223/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:30']), SA = day(['16:30', '23:30']);
  put({
    id: 'osaka_gin_an_shinsaibashi', name: 'ぎん庵 心斎橋 (Gin An Shinsaibashi)', category: 'OMNI',
    lat: 34.67451, lng: 135.5044, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered, deep-fried kushikatsu (one skewer is raw wheat gluten, October 2026), dipped in a thickened dashi, salt or sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the skewers are eaten with dashi, and the kamameshi is chicken, sea bream, eel or seafood.',
    hours_raw: 'Sun–Fri 17:00–23:30, Sat 16:30–23:30, last order 23:00 (Tabelog). Reservations recommended; walk-ins are often turned away (May 2026); check an online booking is for the Shinsaibashi shop; counter bookings may be moved to a table; two-hour limit when busy (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC and other e-money, PayPay, d Barai, Rakuten Pay, au PAY, Alipay and WeChat Pay (Tabelog). 28 seats: 8 at the counter, 20 at tables; non-smoking, smoking space outside; not suitable for infants (Tabelog). Menu in English, traditional and simplified Chinese and Korean, with photos (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: SA, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-9-13 — 30 m south of Crysta Nagahori exit 5, 3 min from Nagahoribashi Stn, 5 min from Shinsaibashi Stn',
    cuisine: 'Light kushikatsu eaten with dashi, and kamameshi cooked to order in an iron pot; ingredients such as angel shrimp, kuroge wagyu sirloin and Hokkaido scallops (Tabelog shop text) · courses: 12 kushikatsu with salad, fresh yuba, chicken kamameshi and dessert ¥4,500; ladies\' course with sea bream kamameshi ¥4,500; special-ingredient course with wagyu tataki, seafood kamameshi and pickles ¥6,500 (Tabelog) · omakase of about 20 skewers you can stop at any point (August–October 2026): angel shrimp, asparagus wrapped in meat, black wagyu, quail egg, chicken with ume and shiso, lotus root, salmon with ikura, stuffed eggplant, pork tenderloin, octopus in shiso, kazunoko, maitake, stuffed pumpkin, raw wheat gluten, duck with green onion, mochi (October 2026) · seasonal skewers: bamboo shoot and canola flowers (spring 2026), hamo (August 2026) · kamameshi: chicken, sea bream, eel, firefly squid, salmon with ikura, sanma (2026), finished as ochazuke with dashi · dips: dashi, salt or sauce, staff advise which for each skewer (September 2026) · 10 skewers, kamameshi and a drink about ¥5,100 (May 2026)',
    website: 'https://www.antique-dining.com/', gmaps: gm('ぎん庵 心斎橋'), menu_url: null,
    notes: '[Kushikatsu · Higashi-Shinsaibashi, skewers in dashi and kamameshi] A calm kushikatsu restaurant where the skewers are dipped in a thick dashi instead of the usual sauce, and the meal ends with kamameshi cooked in an iron pot. Take the omakase, stopping when full, and order the kamameshi early because it takes time; staff tell you which dip suits each skewer. Book: walk-ins are often turned away. One of three Gin An shops (also Namba and Kyobashi). Expect ¥5,000–8,000 a head in 2026.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 19 December 2017; kushikatsu eaten with dashi and kamameshi; website antique-dining.com. Other Gin An shops in Namba and Kyobashi are listed on gurunavi and tabiiro.', philosophy: null, specialty: 'Kushikatsu with dashi; kamameshi.',
      anecdotes: [
        { text: '"It\'s definitely better to make a reservation at this place." — May 2026, a regular who adds that walk-ins were turned away on every visit.', source: R + 'B473415817/' },
        { text: '"The staff recommends which to use for each freshly fried kushikatsu." — September 2026.', source: R + 'B535163415/' },
        { text: '"The broth had a thick, sauce-like consistency, but personally, I prefer a thinner broth." — August 2026.', source: R + 'B533902460/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): お出汁で食べる串かつと釜めしの専門店 ぎん庵 心斎橋、串揚げ・釜めし・居酒屋、大阪市中央区東心斎橋1-9-13、Crysta Nagahori の南5番出口から南へ30m、長堀橋駅から徒歩3分、日〜金17:00〜23:30、土16:30〜23:30 (L.O. 23:00)、予約可、心斎橋店の予約か確認を、混雑時は2時間制、カード・電子マネー・QR 決済可、28席 (カウンター8、テーブル20)、禁煙 (店外に喫煙所)、英語・中国語・韓国語のメニュー、2017年12月19日オープン。お出汁で食べる串かつと釜めし、Tenshi no Ebi、黒毛和牛サーロイン、Hokkaido のホタテ、串かつ12本のコース4,500円、レディースコース4,500円、特選コース6,500円。口コミ(2026年3月〜10月): 予約なしは断られることが多い、おまかせは20本ほどで好きなところで止められる、だし・塩・ソースを店の人がすすめてくれる、釜めしは鶏、鯛、うなぎ、ホタルイカ、鮭いくら、さんま、だしでお茶漬けに、串10本と釜めしと1杯で5,100円ほど。系列は難波と京橋にも (ぐるなび)。',
      confidence: 'medium', sources: [TB, R + 'B432544890/', R + 'B473415817/', R + 'B490278034/', R + 'B498901273/', R + 'B501537502/', R + 'B519651074/', R + 'B525514673/', R + 'B526418477/', R + 'B528105649/', R + 'B529827234/', R + 'B530318396/', R + 'B533902460/', R + 'B534915968/', R + 'B535163415/', R + 'B537127110/', 'https://gurunavi.com/en/c264604/mn/drink1/rst/', 'https://r.gnavi.co.jp/c264606/', 'https://gurunavi.com/en/c264603/mn/drink1/rst'] },
    cultural_comfort: { level: 'english', note: 'Menu in English, Chinese and Korean with photos (Tabelog); staff explain which dip goes with each skewer (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-9-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} 34.674456,135.50441 and GSI 大阪府大阪市中央区東心斎橋一丁目9番13号 (go) 34.674419,135.504395 both sit within 3 m of 炭火焼肉 大歓 (osaka_sumibi_yakiniku_daikan_higashishinsaibashi, 1-9-12) and 5 m of 炭火焼 鳥清 (osaka_sumibiyaki_torisei_higashishinsaibashi, same building 1-9-13 3F); pin offset to 34.67451,135.5044, about 8 m from each; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B473415817/', R + 'B498901273/'],
    price_note: 'Courses from the Tabelog listing; à la carte total from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Gin An kushikatsu and kamameshi course: 12 skewers, salad, fresh yuba, chicken kamameshi, dessert', '¥4,500', 'Course', 'no', 'no', 'Tabelog listing; 2–12 people.', 'ginan_course'),
      it('', '', 'Ladies\' course: 12 skewers, salad, fresh yuba, sea bream kamameshi, dessert', '¥4,500', 'Course', 'no', 'no', 'Tabelog listing.', 'ladies_course'),
      it('', '', 'Special-ingredient course: 12 skewers, wagyu tataki, fresh yuba, seafood kamameshi, pickles, dessert', '¥6,500', 'Course', 'no', 'no', 'Tabelog listing.', 'special_course'),
      it('', '', 'Omakase skewers (stop when full)', '', 'Kushikatsu', 'no', 'no', 'August–October 2026 reviews.', 'omakase_kushi'),
      it('', '', 'Kamameshi (chicken, sea bream, eel, seasonal)', '', 'Kamameshi', 'ask', 'no', '2026 reviews; cooked to order.', 'kamameshi'),
    ] }, {
    cuisine: 'お出汁で食べる軽い串かつと、注文を受けてから炊く釜めし。Tenshi no Ebi、黒毛和牛のサーロイン、Hokkaido のホタテなど (食べログの店の紹介)・コース: 串かつ12本、サラダ、生湯葉、鶏の釜めし、デザート4,500円、鯛の釜めしのレディースコース4,500円、和牛のたたき、海鮮の釜めし、漬物の特選コース6,500円 (食べログ)・20本ほどのおまかせは好きなところで止められる (2026年8〜10月): Tenshi no Ebi、アスパラの肉巻き、黒毛和牛、うずらの卵、鶏の梅しそ巻き、れんこん、鮭いくら、なすの詰め物、豚ヒレ、タコのしそ巻き、数の子、舞茸、かぼちゃの詰め物、生麩、鴨ねぎ、餅 (2026年10月)・季節の串: たけのこと菜の花 (2026年春)、鱧 (2026年8月)・釜めし: 鶏、鯛、うなぎ、ホタルイカ、鮭いくら、さんま (2026年)、最後はだしでお茶漬けに・つけるのはだし、塩、ソースで、どれが合うか店の人が教えてくれる (2026年9月)・串10本と釜めしと1杯で5,100円ほど (2026年5月)',
    neighborhood: '東心斎橋1-9-13、Crysta Nagahori の南5番出口から南へ30m。長堀橋駅から徒歩3分、心斎橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げた串かつ (生麩の串も、2026年10月) を、とろみのあるだし、塩、ソースで。',
    vegan_detail: 'ヴィーガンではありません。串はだしで食べ、釜めしは鶏、鯛、うなぎ、魚介。',
    notes: '[串かつ・東心斎橋、だしで食べる串と釜めし] 串かつをソースではなくとろみのあるだしにつけて食べる落ち着いた店で、締めは釜で炊く釜めし。おまかせを頼んで、おなかがいっぱいになったら止めて。釜めしは時間がかかるので早めに注文を。どの串に何をつけるか店の人が教えてくれる。予約なしは断られることが多いので予約を。ぎん庵は難波と京橋にもある。2026年はひとり5,000〜8,000円ほど。',
  });
}

save();
