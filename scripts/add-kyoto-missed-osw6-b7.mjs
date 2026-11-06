// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 7.
//   + 魚々鶏夜 WOW WOW TONIGHT (straw-grilling and oden izakaya in a townhouse behind Fujii Daimaru)
//   + 窯焼和牛ステーキと京のおばんざい 市場小路 寺町本店 (oven-grilled wagyu and obanzai, Teramachi; 3-shop group)
//   + ボン・ボランテ bonne volonte (one-woman wood-fired bakery at Kawaramachi Kojinguchi; Bread WEST Tabelog 100 2026)
//   + 菓子・茶房 チェカ cheka (Okazaki cake shop with an upstairs tea room and summer kakigori)
//   Taken on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (WOW WOW TONIGHT 26035024, 市場小路 26000650: the
//   first two with id mod 6 = 4 after batch 6) and `next notable 200` (bonne volonte 26002684, cheka 26016994).
//   None is in data/kyoto.json: grep by name (魚々鶏夜/Uotoriya/WOW WOW, 市場小路/Ichiba Koji, ボン・ボランテ/volonte,
//   チェカ/cheka) and address (大寿町400, 円福寺前町283/WITH YOU, 上生洲町229, 法勝寺町25) found none.
//   Group check: 市場小路 has the Teramachi honten, an AEON Mall Kitaoji shop (Gurunavi) and a Katsuragawa shop (August
//   2026 review) — 3 same-concept shops, none in data, so a small group: drafted. No group found for the other three.
//   Greg's 2026-11-05 rulings: cheka forbids photography inside (September 2026 reviews) — a house rule like GOSPEL's,
//   not a request not to post on gourmet sites, so drafted. No remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 魚々鶏夜
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26035024/'; const R = TB + 'dtlrvwlst/';
  const TC = 'https://www.tablecheck.com/wowwow-tonight';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_wow_wow_tonight', name: '魚々鶏夜 (WOW WOW TONIGHT)', category: 'OMNI',
    lat: 35.002942, lng: 135.766195, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Straw-grilled fish, teppanyaki and oden with soy-based seasonings, plus fried dishes (fried oysters, shrimp mayo, fried corn) and hamburg steak; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and grilled vegetables are on the menu, but the oden is in broth and most dishes are fish, chicken or beef (Tabelog; 2026 reviews).',
    hours_raw: '18:00–24:00 daily; last booking for dining 21:00; closed irregularly (Tabelog). Book ahead, especially at weekends; on-the-day bookings and cancellations sometimes free a seat (October 2026). Ground floor: 11 counter seats, 2 tables and one private room for 4–5; upstairs: 20 table seats where you ring a bell for staff, which can be slow (Tabelog; August and October 2026). Non-smoking with a smoking area; cards, e-money and PayPay; wheelchair accessible; free Wi-Fi (Tabelog). In a renovated Kyoto townhouse down a back alley behind Fujii Daimaru, 2 min from Exit 11 of Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Back alley behind Fujii Daimaru, Shijo Teramachi — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Izakaya in a renovated townhouse: fish grilled over straw, teppanyaki, seasonal dishes and seasonal sake, including Kyoto sakes such as Shōtendōji and Hōryō (Tabelog, shop text) · Manzoku course of 7 dishes with straw-grilled seasonal seafood ¥5,000 (Tabelog) · straw-grilled platter, sashimi with seared bonito, sea urchin, grilled squid, grilled hokke, katsuobushi shuto (2026 reviews) · warm potato salad, shrimp mayo with corn, fried corn, fried oysters with homemade tartar, beef carpaccio, hamburg steak, liver with garlic chives, Kujo-negi and chicken neck stir-fry, meat tofu, grilled rice balls · oden from autumn: thick fried tofu, rolled cabbage (2026 reviews)',
    website: TC, gmaps: gm('魚々鶏夜 京都 河原町'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Shijo Teramachi, straw-grilled fish in a townhouse] A renovated Kyoto townhouse at the end of an alley behind Fujii Daimaru, with a busy counter downstairs and tables upstairs. The house specialty is fish seared over burning straw — try the straw-grilled platter or the ¥5,000 seven-dish course — alongside a much-praised warm potato salad, shrimp mayo with corn, fried corn and, in the cold months, oden. Kyoto sakes by the season. Some 2026 diners found service slow, especially upstairs where you ring a bell. Book ahead; open daily 18:00–24:00.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): an adult hideaway renovated from a Kyoto townhouse, with fish grilled over straw and sizzling teppanyaki made from seasonal ingredients, and seasonal sake; the owner wants every guest to try the signature straw-grilled dish in the Manzoku course. An October 2026 reviewer found the counter busy with many international customers; another that month noted a wide age range among the patrons.',
      philosophy: 'Per Tabelog (the shop’s own text): dishes that highlight the natural flavours of the ingredients.',
      specialty: 'Straw-grilled seafood; warm potato salad; oden.',
      anecdotes: [
        { text: 'A May 2026 diner liked the food but found each dish and drink slow to arrive and did not plan to return.', source: R + 'B527871399/' },
        { text: '"Calling the staff is done with a bell, so they don’t come quickly. The first floor is more convenient." — October 2026.', source: R + 'B538082976/' },
        { text: '"The potato salad was prepared in a unique way that I had never experienced before, and it was delicious!" — September 2026.', source: R + 'B535990020/' },
        { text: 'An August 2026 diner found the goya too bitter, while liking the potato salad and shrimp mayo.', source: R + 'B534306997/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・鉄板焼き、下京区大寿町400、阪急京都河原町駅11番出口から徒歩2分、Fujii Daimaru の裏の路地、毎日18:00〜24:00、食事の予約は21:00まで、不定休、予約可、38席 (1階カウンター11、テーブル2、完全個室4〜5名、2階テーブル20)、禁煙 (喫煙所あり)、カード・電子マネー・PayPay 可、車椅子可、ベジタリアンメニューあり、町家を改装した大人の隠れ家、藁焼きの鮮魚と鉄板焼き、季節の日本酒 (Shōtendōji、Hōryō など京都の地酒)、Manzoku コース7品5,000円。TableCheck: 藁焼きの魚介と鉄板焼き。口コミ (2026年5〜10月、英語): 藁焼きの盛り合わせ、温かいポテトサラダ、海老マヨとコーン、とうもろこしの揚げ物、牡蠣フライ、おでん、牛のカルパッチョ、2階は呼び鈴、提供が遅いという声、海外の客も多い。',
      confidence: 'medium', sources: [TB, TC, R + 'B527871399/', R + 'B528584263/', R + 'B532991352/', R + 'B533062272/', R + 'B533075824/', R + 'B533707405/', R + 'B534306997/', R + 'B535056449/', R + 'B535990020/', R + 'B537567087/', R + 'B538082976/', R + 'B538119676/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; sit downstairs if you can; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区大寿町400',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002942, 135.766195); cross-checked: GSI 京都府京都市下京区大寿町400番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course price from Tabelog (November 2026); other dishes from 2026 reviews, unpriced.', last_checked: TODAY, items: [
      it('', '', 'Manzoku course: 7 dishes with straw-grilled seasonal seafood', '¥5,000', 'Course', 'ask', 'no', 'Tabelog.', 'manzoku_course'),
      it('', '', 'Straw-grilled platter', '', 'Grill', 'ask', 'no', 'August 2026.', 'warayaki'),
      it('', '', 'Warm potato salad', '', 'Small dishes', 'ask', 'ask', '2026.', 'potato_salad'),
      it('', '', 'Oden (thick fried tofu, rolled cabbage)', '', 'Oden', 'ask', 'no', 'October 2026.', 'oden'),
    ] }, {
    cuisine: '町家を改装した居酒屋。藁焼きの魚、鉄板焼き、季節の料理と、Shōtendōji や Hōryō など京都の地酒を含む季節の日本酒 (食べログの店の紹介)・藁焼きの旬の魚介を含む7品の Manzoku コース5,000円 (食べログ)・藁焼きの盛り合わせ、かつおのたたきの入った刺身盛り合わせ、雲丹、いか焼き、ほっけ焼き、鰹の酒盗 (2026年の口コミ)・温かいポテトサラダ、コーン入りの海老マヨ、とうもろこしの揚げ物、自家製タルタルの牡蠣フライ、牛のカルパッチョ、ハンバーグ、レバニラ、九条ねぎとせせりの炒め物、肉豆腐、焼きおにぎり・秋からのおでん: 厚揚げ、ロールキャベツ (2026年の口コミ)',
    neighborhood: '四条寺町、Fujii Daimaru の裏の路地。京都河原町駅から徒歩2分',
    gf_detail: '要確認。藁焼きの魚、鉄板焼き、おでんは醤油の味付けで、牡蠣フライ、海老マヨ、とうもろこしの揚げ物、ハンバーグもある。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、焼き野菜もあるが、おでんは出汁で、ほとんどが魚、鶏、牛の料理 (食べログ、2026年の口コミ)。',
    notes: '[居酒屋・四条寺町、町家の藁焼き] Fujii Daimaru の裏の路地の奥、改装した京町家。1階はにぎやかなカウンター、2階はテーブル。名物は藁で炙る魚で、藁焼きの盛り合わせか5,000円の7品のコースで。評判の温かいポテトサラダ、コーン入りの海老マヨ、とうもろこしの揚げ物、寒い時期のおでんも。季節の京都の地酒。2026年の口コミには、特に呼び鈴で呼ぶ2階は提供が遅いという声も。予約がおすすめ。毎日18時〜24時。',
  });
}

// ================================================================ 市場小路 寺町本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000650/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://gurunavi.com/ja/k002714/rev/rst';
  const H = day(['11:30', '16:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_ichiba_koji_teramachi', name: '窯焼和牛ステーキと京のおばんざい 市場小路 寺町本店 (Ichiba Koji Teramachi honten)', category: 'OMNI',
    lat: 35.005220, lng: 135.766804, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steaks are grilled on the teppan and in a stone oven, but sauces, obanzai, chicken nanban and tofu toppings use soy and other seasonings; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and the homemade tofu, multigrain rice and some obanzai may suit, but dashi and miso soup are likely and the mains are meat (Tabelog; 2026 reviews).',
    hours_raw: 'Lunch 11:30–16:00 (last order 15:00), dinner 17:00–23:00 (last order 22:15); closed on New Year’s Day (Tabelog). Reservations accepted, seat requests not guaranteed (Tabelog); walk-ins usually fine at lunch, with a short queue at opening (September 2026). Evening starter charge ¥330 for all-you-can-eat homemade tofu (not with lunch or courses) (Tabelog). Order by scanning a code (September 2026). 136 seats at sunken kotatsu, tables and an 8-seat counter facing the open kitchen; private rooms for 20 or more (Tabelog). All seats non-smoking, with a smoking room; wheelchair accessible; cards, IC cards, e-money, PayPay and au PAY (Tabelog). Basement of the WITH YOU building on the west side of Teramachi north of Nishiki — look for the meat-print noren; 3 min from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi-dori north of Nishiki, basement — 3 min from Kyoto Kawaramachi Stn',
    cuisine: 'Large teppan izakaya of black-wagyu steak grilled on the teppan and in a stone oven, served on warming trays, with Kyoto obanzai (Tabelog, shop text) · lunch: a plate of eight obanzai with a main — wagyu steak, ginger pork, beef short rib, chicken nanban — and free refills of homemade steamed tofu, multigrain rice and miso soup; from about ¥1,000, over ¥2,000 with beef short rib (September 2026) · dinner: unlimited homemade tofu as a starter (¥330), lean and top black wagyu steaks, dashimaki, a tall "frozen lemon tower" sour; courses with free-flow drinks (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('市場小路 寺町本店'), menu_url: TB + 'dtlmenu/',
    notes: "[Steak & obanzai · Teramachi, wagyu and all-you-can-eat tofu] A big, lively basement restaurant on Teramachi near Nishiki Market, the main shop of a small Kyoto group, where black wagyu is seared on the teppan and finished in a stone oven. Lunch is the draw: eight small obanzai, a main of steak or ginger pork, and unlimited refills of warm homemade tofu, multigrain rice and miso soup, from about ¥1,000. Evenings bring steak, dashimaki and a tower of frozen-lemon sour, with the tofu as a ¥330 starter. Some 2026 diners found dishes salty or a fried dish served cold. Open daily.",
    chef_bio: { chef_name: null, roles: ['Company-run restaurant (a corporate invoice registrant, Tabelog); no staff named'], origin: null,
      background: 'Per Tabelog (the shop’s own text): steaks grilled on a teppan and in a stone oven, served with warming trays; homemade steamed tofu refilled at lunch and as the dinner starter; Kyoto obanzai lunches; room for banquets of 30 or more. Other 市場小路 shops: AEON Mall Kitaoji (Gurunavi) and Katsuragawa (an August 2026 reviewer who visits all three).',
      philosophy: null, specialty: 'Stone-oven wagyu steak; obanzai lunch with unlimited tofu.',
      anecdotes: [
        { text: 'An August 2026 regular who uses the shop for office parties wishes the course tofu came plain with salt and could be refilled, as it can à la carte.', source: R + 'B535050768/' },
        { text: 'An October 2026 holiday lunch diner found the chicken nanban served cold.', source: R + 'B537280316/' },
        { text: 'An October 2026 diner found the miso soup and obanzai a little too salty, while praising the free refills.', source: R + 'B538097936/' },
        { text: '"I really enjoy being able to watch the cooking in the open kitchen right in front of me." — September 2026.', source: R + 'B538391012/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・ステーキ・日本料理、中京区寺町通錦小路上ル円福寺前町283 WITH YOUビル B1F、京都河原町駅から徒歩3分、寺町通錦上ル西側、肉ののれんが目印、11:30〜16:00 (L.O. 15:00)・17:00〜23:00 (L.O. 22:15)、元日休み、予約可 (席の希望には沿えない場合あり)、お通し食べ放題330円 (ランチ・コースは除く)、136席、個室、喫煙室あり、車椅子可、カード・電子マネー・PayPay・au PAY 可、ベジタリアンメニューあり、鉄板と石窯で焼くステーキ、自家製の蒸し豆腐。ぐるなび: 市場小路 イオンモール北大路店。口コミ (2026年8〜10月、英語): おばんざい8種と和牛ステーキのランチ、豆腐・雑穀ご飯・味噌汁のおかわり自由、桂川にも店、バーコードで注文、オープンキッチン、冷めたチキン南蛮、塩辛いという声。',
      confidence: 'medium', sources: [TB, GN, R + 'B274942471/', R + 'B534830444/', R + 'B535050768/', R + 'B535143933/', R + 'B535839732/', R + 'B535953026/', R + 'B536131643/', R + 'B536434148/', R + 'B537064399/', R + 'B537280316/', R + 'B538097936/', R + 'B538391012/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by scanning the table code; refills of tofu, rice and miso soup are free at lunch; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区寺町通錦小路上ル円福寺前町283 WITH YOUビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005220, 135.766804); cross-checked: GSI 京都府京都市中京区円福寺前町283番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B536434148/'],
    price_note: 'Starter charge from Tabelog; lunch price range from a September 2026 review; other prices not read.', last_checked: TODAY, items: [
      it('', '', 'Obanzai lunch (eight obanzai and a main; tofu, rice, miso soup refills)', 'from about ¥1,000', 'Lunch', 'ask', 'no', 'September 2026; over ¥2,000 with beef short rib.', 'obanzai_lunch'),
      it('', '', 'Wagyu steak and obanzai lunch', '', 'Lunch', 'ask', 'no', 'September–October 2026.', 'steak_lunch'),
      it('', '', 'All-you-can-eat homemade tofu (dinner starter)', '¥330', 'Starters', 'ask', 'ask', 'Tabelog.', 'tofu_otoshi'),
      it('', '', 'Black wagyu steak (lean or top)', '', 'Dinner', 'ask', 'no', 'October 2026.', 'wagyu_steak'),
    ] }, {
    cuisine: '鉄板と石窯で焼く黒毛和牛のステーキを保温の器で出す、京のおばんざいの大きな鉄板居酒屋 (食べログの店の紹介)・ランチ: おばんざい8種と和牛ステーキ、豚の生姜焼き、牛カルビ、チキン南蛮などのメイン、自家製の蒸し豆腐・雑穀ご飯・味噌汁はおかわり自由。約1,000円から、牛カルビで2,000円超 (2026年9月)・夜: お通しに自家製豆腐の食べ放題 (330円)、黒毛和牛の赤身や上のステーキ、だし巻き、背の高い凍結レモンのサワー、飲み放題付きのコース (食べログ、2026年の口コミ)',
    neighborhood: '錦の北の寺町通、地下。京都河原町駅から徒歩3分',
    gf_detail: '要確認。ステーキは鉄板と石窯で焼くが、たれ、おばんざい、チキン南蛮、豆腐の薬味には醤油などの調味料を使う。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、自家製豆腐、雑穀ご飯、一部のおばんざいは合うかもしれないが、出汁や味噌汁を使う可能性が高く、メインは肉 (食べログ、2026年の口コミ)。',
    notes: '[ステーキとおばんざい・寺町、和牛と豆腐の食べ放題] 錦市場近くの寺町の地下にある大きくにぎやかな店で、京都の小さなグループの本店。黒毛和牛を鉄板で焼き、石窯で仕上げる。人気はランチで、おばんざい8種、ステーキや生姜焼きのメイン、温かい自家製豆腐、雑穀ご飯、味噌汁のおかわり自由で約1,000円から。夜はステーキ、だし巻き、凍結レモンのサワーの塔、お通しに330円の豆腐。2026年の口コミには塩辛い、揚げ物が冷めていたという声も。毎日営業。',
  });
}

// ================================================================ ボン・ボランテ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26002684/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'kyoto_bonne_volonte', name: 'ボン・ボランテ (bonne volonte)', category: 'OMNI',
    lat: 35.020165, lng: 135.769629, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery — loaves, croissants, filled buns and rusks (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain loaves and walnut or raisin breads may be simple doughs, but croissants, cream buns and sausage bread are not, and no ingredient lists are published (2026 reviews).',
    hours_raw: 'Tuesday–Saturday 11:00–20:00; closed Sunday, Monday and all of August; times may change with the baking (Tabelog; September 2026). Popular breads, especially the walnut bread, can sell out soon after opening or before it, and the shelves can be nearly empty by 16:00 (June–July 2026). Phone reservations are taken, but with one person baking and serving the line can be hard to get through (Tabelog; June 2026). Takeaway only; the shop fits three or four customers; loaves are sliced to order (September 2026). Cash only (Tabelog). On Kawaramachi-dori south of Kojinguchi, about 8–10 min walk from Exit 1 of Jingu-Marutamachi Stn (Tabelog; September 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-dori south of Kojinguchi — 8–10 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Bakery with a wood-fired clay oven (2026 reviews) · walnut bread ¥90 (June 2026), raisin and orange bread ¥90, whole-wheat sesame chocolate bread ¥160, つぶあんぱん ¥220, hazelnut "Sunrise" ¥250, チョコクロワッサン ¥250 (September 2026), orange croissant ¥250 (April 2026) · yama-shokupan loaves sliced to order, cream buns, bread with Lindenbaum sausage, dried-fruit rusk (2026 reviews)',
    website: null, gmaps: gm('ボン・ボランテ 京都 荒神口'), menu_url: null,
    notes: "[Bakery · Kojinguchi, one baker and a wood-fired oven] A tiny bakery on Kawaramachi-dori where the owner bakes alone in a large clay oven fired with wood, and prices stay low — a walnut bread is ¥90. Come near the 11:00 opening: the walnut bread and the hazelnut 'Sunrise' go fast, and by late afternoon little may be left. Loaves are sliced as you like. Takeaway only, cash only. Tuesday–Saturday; closed all of August.",
    chef_bio: { chef_name: null, roles: ['Owner-baker who runs the shop alone (unnamed in the sources)'], origin: null,
      background: 'Per a July 2026 reviewer: the owner and a friend designed the interior and built a large clay oven fired with thinned wood from the mountains of Kyoto (the same review mentions firewood from Miyama); the name means "goodwill" in French; as the sole baker, the owner’s baking times and quantities vary from day to day. A June 2026 reviewer also notes the single staff member. A November 2026 visitor came on the recommendation of several geiko but found it closed on Sunday. Tabelog Bread WEST "Tabelog 100" 2020, 2022, 2026.',
      philosophy: null, specialty: 'Walnut bread; hazelnut Sunrise; yama-shokupan.',
      anecdotes: [
        { text: '"I was amazed by how delicious the walnut bread was. At just JPY 90, it was incredibly simple yet deeply flavorful." — June 2026.', source: R + 'B530306703/' },
        { text: 'A July 2026 visitor arrived at 16:00 to find only a yama-shokupan left and bought a dried-fruit rusk instead.', source: R + 'B532060471/' },
        { text: '"The bread can be cut into your preferred number of slices inside the shop." — September 2026.', source: R + 'B536315077/' },
        { text: 'A November 2026 visitor came on several geiko’s recommendation, only to find the shop closed on Sunday.', source: R + 'B538584487/' },
      ],
      japanese_sources_summary: '食べログ: パン・スイーツ・ベーグル、上京区河原町通荒神口下ル上生洲町229-1、神宮丸太町駅1番出口から徒歩約10分、火〜土 11:00〜20:00、日・月と8月は休み、予約可、カード・電子マネー・QR 不可、パン WEST 百名店 2020・2022・2026。口コミ (2026年4〜11月、英語): 店主が一人で薪の土窯で焼く、くるみパン90円、レーズンとオレンジのパン90円、全粒粉とごまのチョコパン160円、つぶあんぱん220円、Sunrise 250円、チョコクロワッサン250円、オレンジのクロワッサン250円、山型食パンは好みの枚数に切ってくれる、早い時間に売り切れ、8月は長い休み。',
      confidence: 'medium', sources: [TB, R + 'B526307216/', R + 'B529004214/', R + 'B530306703/', R + 'B531011996/', R + 'B532060471/', R + 'B532693630/', R + 'B536025256/', R + 'B536180919/', R + 'B536315077/', R + 'B536682988/', R + 'B537353771/', R + 'B538584487/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the breads in the case; say how many slices for a loaf; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区河原町通荒神口下ル上生洲町229-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Bread WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.020165, 135.769629); cross-checked: GSI 京都府京都市上京区上生洲町229番地 (lot) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536315077/', R + 'B530306703/', R + 'B526307216/'],
    price_note: 'Prices from April–September 2026 reviews, dated per item.', last_checked: TODAY, items: [
      it('', '', 'Walnut bread', '¥90', 'Breads', 'no', 'ask', 'June 2026.', 'walnut_bread'),
      it('レーズンとオレンジのパン', '', 'Raisin and orange bread', '¥90', 'Breads', 'no', 'ask', 'September 2026.', 'raisin_orange'),
      it('つぶあんぱん', '', 'Red-bean bun', '¥220', 'Breads', 'no', 'ask', 'September 2026.', 'tsubuan_pan'),
      it('', '', 'Hazelnut Sunrise', '¥250', 'Breads', 'no', 'no', 'September 2026.', 'hazelnut_sunrise'),
      it('チョコクロワッサン', '', 'Chocolate croissant', '¥250', 'Viennoiserie', 'no', 'no', 'September 2026.', 'choco_croissant'),
      it('', '', 'Whole-wheat sesame chocolate bread', '¥160', 'Breads', 'no', 'ask', 'September 2026.', 'sesame_choco'),
    ] }, {
    cuisine: '薪の土窯のパン屋 (2026年の口コミ)・くるみパン90円 (2026年6月)、レーズンとオレンジのパン90円、全粒粉とごまのチョコパン160円、つぶあんぱん220円、ヘーゼルナッツの Sunrise 250円、チョコクロワッサン250円 (2026年9月)、オレンジのクロワッサン250円 (2026年4月)・好みの枚数に切ってくれる山型食パン、クリームパン、Lindenbaum のソーセージのパン、ドライフルーツのラスク (2026年の口コミ)',
    neighborhood: '荒神口の南の河原町通。神宮丸太町駅から徒歩8〜10分',
    gf_detail: 'グルテンフリーではない。食パン、クロワッサン、具入りのパン、ラスクの小麦のパン屋 (2026年の口コミ)。',
    vegan_detail: '要確認。食パン、くるみやレーズンのパンは生地だけかもしれないが、クロワッサン、クリームパン、ソーセージのパンは違い、原材料は公開されていない (2026年の口コミ)。',
    notes: '[パン屋・荒神口、一人のパン職人と薪窯] 河原町通の小さなパン屋。店主が一人で薪の大きな土窯で焼き、値段も控えめで、くるみパンは90円。11時の開店近くに行くとよい。くるみパンやヘーゼルナッツの Sunrise はすぐになくなり、夕方には残りわずかなことも。山型食パンは好みの枚数に切ってくれる。持ち帰りのみ、現金のみ。火〜土、8月は休み。',
  });
}

// ================================================================ 菓子・茶房 チェカ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26016994/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_cheka_okazaki', name: '菓子・茶房 チェカ (cheka)', category: 'OMNI',
    lat: 35.013645, lng: 135.787269, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kakigori and pudding are flour-free in principle, but the cakes (cheesecake on a cookie base, tiramisu, Mont Blanc) use wheat, and no ingredient lists are published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fruit and matcha kakigori syrups may be plant-based, but the pudding kakigori, custard and the cakes use milk, cream and eggs; no ingredient lists are published (2026 reviews).',
    hours_raw: 'Wednesday–Sunday 10:00–18:00, until sold out; closed Monday and Tuesday (Tabelog). No reservations; cash only (Tabelog). Order on the ground floor, then sit in the upstairs tea room and pay on leaving (2026 reviews). Kakigori is served upstairs from about May to September, when cakes are takeaway only; outside that season cakes can be eaten upstairs (September 2026). Groups are let in one at a time — wait outside when asked (October 2026); a 15–20 minute wait is common (July and November 2026). Photography inside is not allowed (September 2026). 16 seats: tatami for 6–8 and tables for 8–10 (Tabelog). Near the Kyoto City Zoo and Kyocera Museum of Art; Hosshoji-cho bus stop, 7 min walk from Keage Stn (Tabelog; 2026 reviews).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Okazaki near the Kyoto City Zoo — 7 min walk from Keage Stn',
    cuisine: 'Cake shop with a retro upstairs tea room (2026 reviews) · summer kakigori, served with warm hojicha: pudding kakigori with custard, caramel and a whole pudding inside ¥1,400; matcha and Uji matcha, mango, peach, strawberry (June–September 2026) · cakes: cube-shaped cheesecake on a lemon white-chocolate cookie base, donut-shaped tiramisu with coffee jelly and Japanese chestnut Mont Blanc, about ¥600 each (September–November 2026) · coffee and freshly whisked matcha (November 2026)',
    website: null, gmaps: gm('チェカ 京都 岡崎'), menu_url: null,
    notes: "[Cake shop & tea room · Okazaki, pudding kakigori] A small cake shop near the Kyoto City Zoo with a Showa-retro tea room upstairs. In summer it is all kakigori — the pudding kakigori (¥1,400), with custard, caramel and a whole pudding hidden inside, is the one people queue for; the rest of the year you pick a cake downstairs (donut-shaped tiramisu, chestnut Mont Blanc, cube cheesecake, about ¥600) and eat it upstairs with coffee. Expect to wait outside, one group at a time. No photos inside; cash only. Wednesday–Sunday 10:00–18:00.",
    chef_bio: { chef_name: null, roles: ['Cake shop; no one is named in the sources'], origin: null,
      background: 'Reviewers in 2026 describe a small cake shop near the zoo with a retro, Showa-era feel, a tea room upstairs that serves kakigori from about May to September, careful choice of furniture and decor, and a no-photography rule. Tabelog Cafe "Tabelog 100" 2022 and Cafe WEST 2025.',
      philosophy: null, specialty: 'Pudding kakigori; tiramisu; Mont Blanc.',
      anecdotes: [
        { text: 'An October 2026 visitor found the staff a bit intimidating after being firmly told to wait outside until the previous group had gone in.', source: R + 'B538000317/' },
        { text: 'A September 2026 visitor found the no-photo rule and being told not to move from an assigned seat a little much, while praising the furniture and decor.', source: R + 'B536541025/' },
        { text: '"The fluffy shaved ice contained a whole custard pudding, which was incredibly satisfying!" — July 2026.', source: R + 'B533080992/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ケーキ・かき氷、左京区岡崎法勝寺町25番地、法勝寺町バス停、蹴上駅から徒歩7分、水〜日 10:00〜18:00 (売り切れ次第終了)、月・火休み、予約不可、16席 (座敷6〜8、テーブル8〜10)、カード・電子マネー・QR 不可、禁煙、カフェ百名店 2022、カフェ WEST 百名店 2025。口コミ (2026年6〜11月、英語): 1階で注文し2階の茶房へ、会計は帰り、5〜9月ごろはかき氷のみ店内でケーキは持ち帰り、プリンかき氷1,400円、抹茶、マンゴー、桃、いちご、温かいほうじ茶、ドーナツ形のティラミス、和栗のモンブラン、約600円、店内撮影禁止、1組ずつ入店、外で待つ。',
      confidence: 'medium', sources: [TB, R + 'B530389868/', R + 'B531971762/', R + 'B532081048/', R + 'B533080992/', R + 'B534421109/', R + 'B535082488/', R + 'B535312819/', R + 'B535494100/', R + 'B535582455/', R + 'B536541025/', R + 'B538000317/', R + 'B538469731/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wait outside until called; order downstairs; no photos; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎法勝寺町25番地',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Cafe WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.013645, 135.787269); cross-checked: GSI 京都府京都市左京区岡崎法勝寺町25番地 (lot) 83m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531971762/', R + 'B538000317/'],
    price_note: 'Prices from July and October 2026 reviews.', last_checked: TODAY, items: [
      it('プリンかき氷', '', 'Pudding kakigori (summer)', '¥1,400', 'Kakigori', 'ask', 'no', 'July–September 2026.', 'pudding_kakigori'),
      it('', '', 'Donut-shaped tiramisu', 'about ¥600', 'Cakes', 'no', 'no', 'October 2026.', 'tiramisu'),
      it('', '', 'Japanese chestnut Mont Blanc', 'about ¥600', 'Cakes', 'ask', 'no', 'October 2026.', 'mont_blanc'),
    ] }, {
    cuisine: '昭和レトロな2階の茶房のあるケーキ屋 (2026年の口コミ)・夏のかき氷 (温かいほうじ茶付き): カスタード、カラメル、中にプリンが丸ごと入ったプリンかき氷1,400円、抹茶、Uji の抹茶、マンゴー、桃、いちご (2026年6〜9月)・ケーキ: レモン風味のホワイトチョコのクッキー台のサイコロ形のチーズケーキ、コーヒーゼリー入りのドーナツ形のティラミス、和栗のモンブラン、各約600円 (2026年9〜11月)・コーヒーと点てた抹茶 (2026年11月)',
    neighborhood: '京都市動物園近くの岡崎。蹴上駅から徒歩7分',
    gf_detail: '要確認。かき氷とプリンは基本的に小麦なしだが、ケーキ (クッキー台のチーズケーキ、ティラミス、モンブラン) は小麦を使い、原材料は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。果物や抹茶のかき氷のシロップは植物性かもしれないが、プリンかき氷、カスタード、ケーキは乳、クリーム、卵を使う。原材料は公開されていない (2026年の口コミ)。',
    notes: '[ケーキと茶房・岡崎、プリンかき氷] 京都市動物園近くの小さなケーキ屋で、2階は昭和レトロな茶房。夏はかき氷が中心で、カスタードとカラメルの下にプリンが丸ごと隠れたプリンかき氷 (1,400円) に行列ができる。季節外は1階でケーキ (ドーナツ形のティラミス、栗のモンブラン、サイコロ形のチーズケーキ、約600円) を選び、2階でコーヒーと。外で1組ずつ順番を待つことも。店内撮影禁止、現金のみ。水〜日 10時〜18時。',
  });
}

save();
