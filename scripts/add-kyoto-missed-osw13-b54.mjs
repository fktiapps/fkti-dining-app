// Kyoto priority (kyoto-missed), worker osw13, batch 54 — lane: Tabelog id mod 6 = 0.
// Core: ルバカサブル, 風枝. Notable: 鮨 のぼる, 京・菓る茶cafe.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-54');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26028882', 'brand already in data: 京ラーメン壬生さだかず is a branch of 京ラーメン さだかず, already in kyoto.json as kyr_kyo_ramen_sadakazu (Gion); a brand already in data → skip its other same-concept branches (Greg ruling 2026-11-05)');

// ================================================================ ルバカサブル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024730/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '19:00']);
  put({
    id: 'kyoto_le_bac_a_sable', name: 'ルバカサブル (Le bac a sable)', category: 'OMNI',
    lat: 35.009357, lng: 135.778508, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery — croissants, salt bread, quiche, tarts, baguettes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter croissants, cheese and egg quiches, bacon epi, cream-filled pastries (2026 reviews).',
    hours_raw: 'Tabelog: 8:00–19:00, closed Wednesday; hours may change. A June 2026 diner found it had been closed for a long stretch earlier. 11 seats — 5 at the counter, 6 at tables — for eating in; you can warm bread yourself (June 2026); take-out; no reservations; non-smoking; children welcome. Cash only — no cards, e-money or QR (Tabelog). Opened 11 October 2014 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Sanjo — 1 min walk from Higashiyama Stn exit 2',
    cuisine: 'A small neighbourhood bakery-café with a French owner, per reviewers (June and September 2026) · quiches are the speciality — mushroom and garlic ¥400, four-cheese ¥400, salmon and shiso, tomato and mustard, a dessert quiche (2026 reviews) · croissants, cinnamon rolls, salt bread ¥150–180, a loaf ¥250, bacon epi about ¥300, pastrami and smoked-chicken sandwiches, baguettes (2026 reviews) · pear, apricot and apple tarts ¥400; rocher (coconut) ¥70 (2026 reviews) · blend coffee, red-berry smoothie ¥500, wine (Tabelog; June 2026)',
    website: null, gmaps: gm('ルバカサブル 西海子町'), menu_url: null,
    notes: '[Bakery café · by Higashiyama Station, quiches and croissants] A brick-counter bakery a minute from Higashiyama Station, open from 8 am, with a French owner per reviewers: buttery croissants, a row of ¥400 quiches, fruit tarts and very low prices. Opinions split — some praise the croissants and wheat flavour, others found the quiche bland and the bread dense (June, October 2026). Cash only. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-baker, not named; French per reviewers (June and September 2026)'], origin: null,
      background: 'Opened 11 October 2014 (Tabelog). Reviewers in 2026 describe a European-style room with a brick counter and tiled floor near Higashiyama Station, round "storybook" breads, many quiches, low prices, a French owner baking, and many foreign customers.',
      philosophy: null,
      specialty: 'Quiche; croissant.',
      anecdotes: [
        { text: '"While the prices are very affordable, my overall impression was that the flavors were lacking" — salt bread with no butter taste, a tasteless quiche, but a delicious pear tart (June 2026).', source: R + 'B529966290/' },
        { text: 'A September 2026 diner had read that a French owner bakes here, "however, from the items I purchased this time, I couldn’t really detect a French taste."', source: R + 'B535938199/' },
        { text: 'November 2026: salt bread eaten on a stroll — "The aroma of wheat is incredible."', source: R + 'B538579560/' },
      ],
      japanese_sources_summary: '食べログ: ルバカサブル (Le bac a sable)、パン・カフェ、東山区西海子町51 メゾンドアリス 1F、地下鉄東西線東山駅2番出口から徒歩1分、8:00〜19:00、水曜休み、予約不可、11席 (カウンター5、テーブル6)、テイクアウト、禁煙、子供可、カード・電子マネー・QR不可、2014年10月11日オープン。口コミ (2026年4月〜11月、英語): フランス人の店主が焼く、レンガのカウンターとタイルの床、キッシュが名物 (きのことにんにく400円、4種のチーズ400円、サーモンと大葉、トマトとマスタード)、クロワッサン、シナモンロール、塩パン150〜180円、食パン250円、ベーコンエピ、パストラミのサンド、洋梨・杏・りんごのタルト、Rocher 70円、赤いベリーのスムージー500円、パンは自分で温められる、外国人客が多い、味が物足りない・パンが詰まっているという声も、長く休業していた時期がある。',
      confidence: 'medium', sources: [TB, R + 'B527057855/', R + 'B528754045/', R + 'B529966290/', R + 'B530462164/', R + 'B530908475/', R + 'B530978356/', R + 'B535938199/', R + 'B537194423/', R + 'B537519778/', R + 'B538579560/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick from the counter and pay; many foreign customers (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区西海子町51 メゾンドアリス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.009357, 135.778508); cross-checked: GSI 京都府京都市東山区西海子町51番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529966290/', R + 'B530462164/', R + 'B538579560/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mushroom and garlic quiche', '¥400', 'Bakery', 'no', 'no', 'June and November 2026.', 'quiche'),
      it('', '', 'Four-cheese quiche', '¥400', 'Bakery', 'no', 'no', 'June 2026.', 'quiche'),
      it('', '', 'Salt bread', '¥150–180', 'Bakery', 'no', 'no', 'June and November 2026.', 'shio_pan'),
      it('', '', 'Pear tart', '¥400', 'Bakery', 'no', 'no', 'June 2026.', 'tart'),
    ] }, {
    cuisine: 'フランス人の店主がいるという小さな街のパン屋兼カフェ (2026年6月・9月の口コミ)・名物はキッシュ。きのことにんにく400円、4種のチーズ400円、サーモンと大葉、トマトとマスタード、デザートのキッシュ (2026年の口コミ)・クロワッサン、シナモンロール、塩パン150〜180円、食パン250円、ベーコンエピ300円ほど、パストラミやスモークチキンのサンド、バゲット (2026年の口コミ)・洋梨、杏、りんごのタルト400円、ココナッツの Rocher 70円 (2026年の口コミ)・ブレンドコーヒー、赤いベリーのスムージー500円、ワイン (食べログ、2026年6月)',
    neighborhood: '東山三条。東山駅2番出口から徒歩1分',
    gf_detail: 'グルテンフリーではない: 小麦のパン屋。クロワッサン、塩パン、キッシュ、タルト、バゲット (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: バターのクロワッサン、チーズや卵のキッシュ、ベーコンエピ、クリーム入りの菓子パン (2026年の口コミ)。',
    notes: '[ベーカリーカフェ・東山駅すぐ、キッシュとクロワッサン] 東山駅から1分、レンガのカウンターのパン屋。朝8時から開き、口コミによるとフランス人の店主が焼いている。バターの効いたクロワッサン、400円のキッシュの数々、果物のタルトがとても安い。評価は分かれ、クロワッサンや小麦の香りをほめる声もあれば、キッシュが薄味、パンが詰まっているという声も (2026年6月・10月)。現金のみ。水曜休み。',
  });
}

// ================================================================ 風枝
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004096/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kaze-eda.com/';
  const LD = day(['11:30', '14:30'], ['17:30', '22:30']); const D = day(['17:30', '22:30']);
  put({
    id: 'kyoto_kaze_eda', name: '風枝 (KazeEda)', category: 'OMNI',
    lat: 35.006070, lng: 135.756945, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dim sum wrappers, wonton and ramen noodles, spring rolls and kara-age (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-filled dim sum, chicken-bone and shrimp broths, collagen soup (official site; reviews).',
    hours_raw: 'Tabelog: lunch Tue–Fri 11:30–14:30 (last order 14:00), on about three of those days a week; dinner Tue–Sun and holidays 17:30–22:30 (last orders food 21:30, drinks 22:00); closed Monday. The official site posts the lunch days each month and takes take-out set orders by the day before, for pickup 17:30–20:30. Cards at dinner only; PayPay and Alipay at both (Tabelog). 20 seats — 6 at the counter, three tables for 4, a tatami room; non-smoking; children welcome (say when booking how many children will not eat an adult portion). Service charge: none — Tabelog’s Japanese original says 「なし」 (the English auto-translation wrongly says one is added). Opened 9 September 2006 (Tabelog).',
    hours: { 1: LD, 2: LD, 3: LD, 4: LD, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Shijo-Karasuma — 5 min walk from Karasuma / Shijo Stn exit 22',
    cuisine: 'Gentle Chinese food, dim sum and obanzai (official site) · handmade xiao long bao, shumai, gyoza, spring rolls with Sichuan pepper, a giant dumpling equal to three xiao long bao, sesame balls, almond tofu (2025–2026 reviews) · "Ebi-nyan" ramen in a sweet-shrimp and lobster broth with fried shrimp wontons ¥1,450 (official site); shrimp wonton noodles in salt broth ¥900 with free large rice or noodles (March 2026); chilled collagen ramen in summer (July 2026) · lunch kara-age set with salad and fried vegetables — ¥1,550 with xiao long bao added (June 2026) · aged Shaoxing wines and Belgian beers; homemade chilli oil (December 2025 – October 2026) · take-out sets ¥2,000–3,500 (official site)',
    website: SITE, gmaps: gm('風枝 姥柳町'), menu_url: SITE,
    notes: '[Chinese dim sum & obanzai · near Shijo-Karasuma, gentle flavours] A twenty-seat Chinese dining room in the old kimono-wholesale streets near Shijo-Karasuma, since 2006: handmade xiao long bao, a lobster-and-shrimp "Ebi-nyan" ramen, kara-age lunch sets and a shelf of aged Shaoxing wines. Lunch only on about three weekdays, packed by noon. No service charge. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner, not named'], origin: null,
      background: 'Opened 9 September 2006 (Tabelog). The official site calls it a place for Chinese and yum-cha food and obanzai, gentle on the body, in Kyoto’s kimono district. Reviewers in 2025–2026 praise kind staff, an owner whose care shows in the food, a calm room, help choosing Shaoxing wine, and a willingness to adjust the heat.',
      philosophy: 'Official site: 「体に優しい中華料理」 — Chinese food that is kind to the body.',
      specialty: 'Xiao long bao; Ebi-nyan ramen.',
      anecdotes: [
        { text: 'After the Gion Matsuri in a yukata, a July 2026 regular came for the chilled collagen ramen — "the wobbly collagen jelly paired perfectly with the ramen."', source: R + 'B507090085/' },
        { text: '"At first glance, the portions may seem small, but each item is crafted with care in terms of flavor and aroma." — December 2025.', source: R + 'B519620723/' },
        { text: 'An October 2026 first-timer "knew nothing about Shaoxing wine, but they took the time to explain it."', source: R + 'B538518195/' },
      ],
      japanese_sources_summary: '公式サイト (kaze-eda.com): 風枝、中華・飲茶料理とおばんざいの店、体に優しい中華料理、京都の呉服街の蛸薬師室町、えびにゃんらーめん (甘海老とオマール海老のダブル海老だし) 1,450円、持ち帰りのおかずセットA 3,500円・B 3,000円、コラーゲン鍋セット2,000円・2,300円 (前日までに注文、17時30分〜20時30分にお渡し)、ランチは火〜金の週2〜3日 11:30〜14:30、ディナー火〜日 17:30〜22:30、月曜休み、中京区蛸薬師通室町西入姥柳町189 エチカビル1階、烏丸駅・四条駅22・24番出口から徒歩5分。食べログ: 飲茶・点心、居酒屋、中華料理、20席 (カウンター6、4人テーブル3)、座敷、禁煙、子供可、カードはディナーのみ、PayPay・Alipay可、サービス料は原文で「なし」、2006年9月9日オープン。口コミ (2025年5月〜2026年10月、英語): 小籠包、焼売、餃子、春巻、小籠包3個分の大きな包子、胡麻団子、杏仁豆腐、海老ワンタン麺 (塩) 900円、冷やしコラーゲンラーメン、唐揚げ定食、小籠包付きで1,550円、熟成紹興酒とベルギービール、自家製ラー油、親切なスタッフ、昼は混む。',
      confidence: 'high', sources: [SITE, TB, R + 'B507090085/', R + 'B519620723/', R + 'B519657511/', R + 'B522324716/', R + 'B523308089/', R + 'B524839165/', R + 'B530488807/', R + 'B532723046/', R + 'B536054804/', R + 'B538518195/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff help with Shaoxing wine and spice levels (2026 reviews); lunch fills by noon.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区蛸薬師通室町西入ル姥柳町189 エチカビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026; official site live.' },
    pin_source: `Tabelog ${TB} (35.006070, 135.756945); cross-checked: GSI 京都府京都市中京区姥柳町189番地 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B524839165/', R + 'B530488807/'],
    price_note: 'Official site (undated) and 2026 reviews.', last_checked: TODAY, items: [
      it('えびにゃんらーめん', '', 'Ebi-nyan ramen (sweet shrimp and lobster broth)', '¥1,450', 'Noodles', 'no', 'no', 'Official site; October 2026.', 'ramen'),
      it('', '', 'Shrimp wonton noodles (salt)', '¥900', 'Lunch', 'no', 'no', 'March 2026; free large rice or noodles.', 'wonton_noodles'),
      it('', '', 'Kara-age lunch set with xiao long bao', '¥1,550', 'Lunch', 'no', 'no', 'June 2026.', 'karaage'),
      it('おかずセットA', '', 'Take-out set A (6 dim sum, kara-age, spring rolls, fried vegetables)', '¥3,500', 'Take-out', 'no', 'no', 'Official site; order by the day before.', 'dim_sum'),
    ] }, {
    cuisine: '体に優しい中華料理、飲茶、おばんざい (公式サイト)・手作りの小籠包、焼売、餃子、花椒の効いた春巻、小籠包3個分の大きな包子、胡麻団子、杏仁豆腐 (2025〜2026年の口コミ)・甘海老とオマール海老のスープに揚げ海老ワンタンをのせた「えびにゃんらーめん」1,450円 (公式サイト)、塩の海老ワンタン麺900円でご飯か麺の大盛り無料 (2026年3月)、夏は冷やしコラーゲンラーメン (2026年7月)・ランチの唐揚げ定食はサラダと揚げ野菜付き、小籠包を足して1,550円 (2026年6月)・熟成紹興酒とベルギービール、自家製ラー油 (2025年12月〜2026年10月)・持ち帰りのセット2,000〜3,500円 (公式サイト)',
    neighborhood: '蛸薬師室町、四条烏丸の近く。烏丸駅・四条駅22番出口から徒歩5分',
    gf_detail: 'グルテンフリーではない: 点心の皮、ワンタンやラーメンの麺、春巻、唐揚げ (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 豚の点心、鶏ガラや海老のスープ、コラーゲンスープ (公式サイト、口コミ)。',
    notes: '[中華・飲茶とおばんざい・蛸薬師室町、やさしい味] 四条烏丸近くの呉服街にある、2006年からの20席の中華。手作りの小籠包、オマール海老と甘海老の「えびにゃんらーめん」、唐揚げのランチ、熟成紹興酒の品ぞろえ。ランチは平日の週3日ほどで、昼には満席になる。サービス料なし。月曜休み。',
  });
}

// ================================================================ 鮨 のぼる
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040858/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '21:00']);
  put({
    id: 'kyoto_sushi_noboru', name: '鮨 のぼる (Sushi Noboru)', category: 'OMNI',
    lat: 35.008924, lng: 135.779519, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, fried horse mackerel, a whale cutlet and homemade satsuma-age sit beside sushi seasoned with soy (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter; dobin-mushi, chawanmushi and clam miso soup on dashi (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Fri, Sat, Sun 11:30–21:00 without a break; closed Wednesday and Thursday; hours may change. About 10 counter seats; non-smoking; private hire; cards, e-money and QR (Tabelog; 2025 reviews). Same-day phone bookings taken (October 2026); weekend afternoons nearly full (April 2026). Prices are not on the menu; about ¥10,000–15,000 a head (October 2026; reviews). About 15 chilled sakes (July 2025). Opened 8 March 2024 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'A back alley near Higashiyama-Sanjo — 1 min from Higashiyama Stn',
    cuisine: 'An all-day sushi counter with a long list of sake snacks: sashimi, simmered, grilled, fried and tempura dishes, then nigiri à la carte (2025–2026 reviews) · seen: wild buri, wild Akashi sea bream, sanma, harii squid, bonito, firefly squid in soy, kinmedai simmered sweet, fugu and king crab in winter, shinko in August, hamo and matsutake dobin-mushi, conger eel and matsutake hot pot, homemade satsuma-age, uzaku, chawanmushi, clam miso soup (2025–2026 reviews) · nigiri: lean and medium-fatty tuna, kohada, nodoguro, white shrimp, surf clam, negitoro (2025–2026 reviews) · fish aged overnight for texture (April 2026)',
    website: null, gmaps: gm('鮨 のぼる 八軒町'), menu_url: null,
    notes: '[Sushi · Higashiyama-Sanjo back alley, all-day counter] A ten-seat sushi counter in an alley by Higashiyama Station, open 11:30–21:00 without a break: a long board of sake snacks — wild buri, simmered kinmedai, homemade satsuma-age, seasonal dobin-mushi — then nigiri piece by piece. One regular has been ten times since mid-2025. No prices on the menu; about ¥10,000–15,000. Closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; "friendly young chefs" (August 2025)'], origin: null,
      background: 'Opened 8 March 2024 (Tabelog). A July 2026 diner says it belongs to the Komatsu sushi group and is backed by a tuna wholesaler (not confirmed elsewhere). Reviewers in 2025–2026 describe a clean, bright counter of about ten seats in a back alley near Higashiyama-Sanjo, young chefs, many regulars, warm service to newcomers, and a menu that changes with each season’s catch.',
      philosophy: null,
      specialty: 'Seasonal sake snacks and nigiri; wild buri; homemade satsuma-age.',
      anecdotes: [
        { text: 'A regular logged ten visits from July 2025 to November 2026, from the first sanma and matsutake to fugu and seiko crab "soon" — "I feel like winter has arrived all at once."', source: R + 'B509870963/' },
        { text: 'April 2026: the chef explained that the fish is aged overnight, because it can be too firm when freshly prepared.', source: R + 'B509870963/' },
        { text: '"The prices were not listed on the menu at all. It was JPY 10,000 per person." — October 2026.', source: R + 'B538021066/' },
        { text: '"The attention to detail in the preparation is evident, although the prices might be a bit on the higher side." — October 2025.', source: R + 'B515583029/' },
      ],
      japanese_sources_summary: '食べログ: 鮨 のぼる (Sushi Noboru)、寿司、東山区八軒町450-2、東山駅から62m、月・火・金・土・日 11:30〜21:00、水・木休み、禁煙、貸切可、カード・電子マネー・QR可、2024年3月8日オープン。口コミ (2025年7月〜2026年11月、英語): カウンター約10席、通し営業、裏路地、若い職人、常連が多い、つまみが豊富、天然の鰤、Akashi の天然鯛、秋刀魚、ハリイカ、鰹、ホタルイカの醤油漬け、金目鯛の煮付け、冬はふぐとタラバガニ、8月の新子、鱧と松茸の土瓶蒸し、穴子と松茸の鍋、自家製さつま揚げ、う巻き、茶碗蒸し、しじみの味噌汁、鮪の赤身と中トロ、小肌、のどぐろ、白海老、ほっき貝、ねぎとろ、魚は一晩寝かせる、冷酒約15種、メニューに値段がない、1人1万〜1万5千円ほど、こまつグループで鮪の仲卸が母体という声 (2026年7月)。',
      confidence: 'medium', sources: [TB, R + 'B509870963/', R + 'B511456751/', R + 'B514605761/', R + 'B515200116/', R + 'B515583029/', R + 'B522508350/', R + 'B530245817/', R + 'B533655016/', R + 'B533992847/', R + 'B538021066/'] },
    cultural_comfort: { level: 'japanese', note: 'No prices on the menu; ordering à la carte at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八軒町450-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008924, 135.779519); cross-checked: GSI 京都府京都市東山区八軒町450番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538021066/', R + 'B509870963/'],
    price_note: 'No prices on the menu; about ¥10,000–15,000 a head (reviews).', last_checked: TODAY, items: [
      it('', '', 'Sashimi, sake snacks and nigiri, à la carte', null, 'Sushi', 'ask', 'no', 'About ¥10,000 a head in October 2026.', 'sushi_omakase'),
    ] }, {
    cuisine: '通し営業の寿司カウンターで、酒のつまみが豊富。刺身、煮物、焼き物、揚げ物、天ぷらのあとに握りをお好みで (2025〜2026年の口コミ)・口コミでは天然の鰤、Akashi の天然鯛、秋刀魚、ハリイカ、鰹、ホタルイカの醤油漬け、金目鯛の甘い煮付け、冬はふぐとタラバガニ、8月の新子、鱧と松茸の土瓶蒸し、穴子と松茸の鍋、自家製さつま揚げ、う巻き、茶碗蒸し、しじみの味噌汁 (2025〜2026年)・握りは鮪の赤身と中トロ、小肌、のどぐろ、白海老、ほっき貝、ねぎとろ (2025〜2026年の口コミ)・魚は一晩寝かせて食感を整える (2026年4月)',
    neighborhood: '東山三条近くの裏路地。東山駅から徒歩1分',
    gf_detail: 'グルテンフリーではない: 天ぷら、鯵フライ、鯨カツ、自家製さつま揚げがあり、寿司には醤油 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 寿司カウンター。土瓶蒸し、茶碗蒸し、しじみの味噌汁も出汁 (2025〜2026年の口コミ)。',
    notes: '[寿司・東山三条の路地、通し営業のカウンター] 東山駅近くの路地にある約10席の寿司カウンター。11:30〜21:00の通し営業で、天然の鰤、金目鯛の煮付け、自家製さつま揚げ、季節の土瓶蒸しなどつまみが豊富で、握りは一貫ずつ。2025年夏から10回通った常連も。メニューに値段はなく、1人1万〜1万5千円ほど。水・木休み。',
  });
}

// ================================================================ 京・菓る茶cafe
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038968/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://karucha.jp/';
  const H = day(['10:00', '19:00']);
  put({
    id: 'kyoto_karucha_cafe', name: '京・菓る茶cafe (Kyo Karucha cafe)', category: 'OMNI',
    lat: 35.013720, lng: 135.761806, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cheesecakes, gâteau chocolat, sablés and pasta lunches (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a cheese-sweets shop — every cake is cheesecake (official site).',
    hours_raw: 'Official site: take-out 10:00–19:00; café 10:00–19:00 (last order 18:30); closed Wednesday (Tabelog gives the café as 10:00–18:00, last order 17:00). Eat-in upstairs in a renovated machiya, ordering by QR code on your phone (2026 reviews). Reservations and holds possible (Tabelog; official site). Non-smoking; children welcome; no parking or bicycle parking. Cards (Amex listed), e-money and QR (Tabelog). The shop warns that look-alike cheesecakes are sold online; its own are sold only at the shop, its online shop and department-store events. Opened 20 February 2023 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'A residential street between Karasuma Oike and Marutamachi — about 6 min walk from either station',
    cuisine: 'Cheese-sweets shop and café in a machiya: "storybook" cheesecakes shaped like holey cheese with a chocolate mouse (official site; 2026 reviews) · 口福のチーズケーキ ¥650 eat-in / ¥560 take-out; chocolate ¥670, strawberry ¥650, matcha ¥680, autumn ¥590; baked cheesecake ¥510; gâteau chocolat fromage ¥550 (official site) · lunch pastas ¥1,250–1,350 — cheese carbonara, squid and mentaiko cream cheese, shrimp and tomato cream, shrimp genovese; demi-glace cheese omurice ¥1,350; cake and drink set +¥750 (official site) · Uji teas ¥550–680, coffee from ¥500, matcha and hojicha lattes ¥680 (official site) · sablé ¥600 (August 2026)',
    website: SITE, gmaps: gm('京・菓る茶cafe 松屋町'), menu_url: SITE + '#cb_content_3',
    notes: '[Cheesecake café · between Karasuma Oike and Marutamachi, the cheese-and-mouse cakes] A cheese-sweets café in a renovated machiya: cheesecakes shaped like storybook cheese with a chocolate mouse peeking out, ¥560–680, plus carbonara and omurice at lunch and Uji teas. Order by QR upstairs, overlooking a small garden. One diner missed syrup for the drinks. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 20 February 2023 (Tabelog). The official site describes a cheese-sweets speciality shop with cheesecakes "as if jumped out of a picture book", fluffy yet light, in a café with Showa-era nostalgia and the feel of an old Kyoto house. It sells online and at department-store events (a September 2026 diner found it at Shinjuku Takashimaya). Reviewers in 2026 note cheese-themed decor, shovel-shaped spoons, a garden view upstairs, and polite staff.',
      philosophy: null,
      specialty: '口福のチーズケーキ (the mouse cheesecake).',
      anecdotes: [
        { text: 'September 2026: "as soon as I poured the cream cheese sauce over it, the face melted away."', source: R + 'B535687416/' },
        { text: '"There were no syrups or sugars available, and as someone with a sweet tooth, I wished I could add some syrup to my drink..." — June 2026.', source: R + 'B531059899/' },
        { text: 'A local worker waited until the opening queues died down: "I thought it was just a cake shop, but they also serve as a cafe!" (July 2026).', source: R + 'B531733721/' },
      ],
      japanese_sources_summary: '公式サイト (karucha.jp): 菓る茶 (KARUCHA)、チーズスイーツ専門店、絵本から飛び出したような可愛いチーズケーキ、ふんわりと濃厚ながらさっぱり、京民家の風情と昭和の懐かしさのカフェ、口福のチーズケーキ 650円 (持ち帰り560円)、ショコラ670円、いちご650円、抹茶680円、オトンヌ (秋季限定) 590円、ベイクドチーズケーキ510円、ガトーショコラフロマージュ550円、濃厚チーズカルボナーラなどパスタ1,250〜1,350円、とろとろデミチーズのオムライス1,350円、ケーキ+ドリンクセット+750円、京都宇治の和紅茶・玄米茶・ほうじ茶・抹茶ラテ・ほうじ茶ラテ550〜680円、コーヒー500円〜、模倣品に注意 (公式オンラインショップ・店舗・百貨店催事のみで販売)、中京区松屋町51、水曜休み、テイクアウト10:00〜19:00、カフェ10:00〜19:00 (18:30 L.O.)、烏丸御池駅から徒歩約6分、駐車場・駐輪場なし。食べログ: カフェ、予約可、禁煙、子供可、カード (AMEX)・電子マネー・QR可、2023年2月20日オープン。口コミ (2026年6月〜10月、英語): 2階の町家のイートイン、スマホでQR注文、ネズミのチョコ、スコップ型のスプーン、庭が見える、シロップがない、サブレ600円、新宿高島屋の催事。',
      confidence: 'high', sources: [SITE, TB, R + 'B529999442/', R + 'B530812194/', R + 'B531059899/', R + 'B531733721/', R + 'B533805125/', R + 'B535359122/', R + 'B535687416/', R + 'B536075990/', R + 'B537521629/', R + 'B538165866/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code on your phone upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区松屋町51',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013720, 135.761806); cross-checked: GSI 京都府京都市中京区松屋町51番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official site; eat-in / take-out prices differ.', last_checked: TODAY, items: [
      it('口福のチーズケーキ', '', 'Signature cheesecake (cheese-shaped, chocolate mouse)', '¥650 eat-in / ¥560 take-out', 'Cake', 'no', 'no', 'Official site.', 'cheesecake'),
      it('口福のチーズケーキ(抹茶)', '', 'Signature cheesecake, matcha', '¥680 / ¥580', 'Cake', 'no', 'no', 'Official site; ¥700 at a September 2026 department-store event.', 'cheesecake'),
      it('濃厚チーズカルボナーラ', '', 'Cheese carbonara', '¥1,250', 'Lunch', 'no', 'no', 'Official site.', 'carbonara'),
      it('京都宇治のほうじ茶', '', 'Uji hojicha', '¥550', 'Drink', 'ask', 'ask', 'Official site.', 'hojicha'),
    ] }, {
    cuisine: '町家のチーズスイーツ専門店兼カフェ。穴のあいたチーズの形にチョコのネズミがのぞく「絵本から飛び出した」チーズケーキ (公式サイト、2026年の口コミ)・口福のチーズケーキ イートイン650円・持ち帰り560円、ショコラ670円、いちご650円、抹茶680円、秋季限定590円、ベイクドチーズケーキ510円、ガトーショコラフロマージュ550円 (公式サイト)・ランチはパスタ1,250〜1,350円 (濃厚チーズカルボナーラ、イカと明太子のクリームチーズ、ほうれん草とエビのトマトクリーム、エビとトマトのジェノベーゼ)、とろとろデミチーズのオムライス1,350円、ケーキ+ドリンクセット+750円 (公式サイト)・京都宇治のお茶550〜680円、コーヒー500円〜、抹茶ラテ・ほうじ茶ラテ680円 (公式サイト)・サブレ600円 (2026年8月)',
    neighborhood: '烏丸御池と丸太町の間の住宅街。どちらの駅からも徒歩約6分',
    gf_detail: 'グルテンフリーではない: チーズケーキ、ガトーショコラ、サブレ、ランチのパスタ (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: チーズスイーツの店で、ケーキはすべてチーズケーキ (公式サイト)。',
    notes: '[チーズケーキカフェ・烏丸御池と丸太町の間、チーズとネズミのケーキ] 改装した町家のチーズスイーツのカフェ。絵本のチーズの形にチョコのネズミがのぞくチーズケーキが560〜680円、ランチにはカルボナーラやオムライス、宇治のお茶も。2階でQR注文、小さな庭が見える。ドリンク用のシロップがないのが残念という声も。水曜休み。',
  });
}

save();
