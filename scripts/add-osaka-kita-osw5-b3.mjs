// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 3.
//   + absinthe org. Salad & Grill (Mediterranean salads, falafel and grills from 8:00 in KITTE Osaka B1F; vegan plates)
//   + ミュゼウメキタ ワインバー&グリル muse umekita (farm-to-table Italian with a lunch buffet, Grand Front Osaka North 6F, since 2013)
//   + しん家 Shin Ya (teppan-skewer izakaya, Osaka Ekimae Dai-2 Building B1F, since 2013; smoking)
//   + ステーキ ロン Steak Ron (Kobe-beef teppanyaki in Kitashinchi since 1964)
//   Chain check: absinthe org.: invoice T2120001142199 → 株式会社Ｃａｆｅ ＡＢＳＩＮＴＨＥ, Kitahorie (NTA register); an October 2026 diner
//   also knows its Absinthe Cafe in Yotsubashi; a small Osaka company, no chain found. muse umekita: one shop on its own site
//   (muse-umekita.com). Shin Ya: 株式会社しん家 runs two shops, this one and たこ焼酒場 しん家 in 大阪駅前第4ビル (shinya-inc.com).
//   Steak Ron: one shop since 1964 (steakron.com). None is in data/osaka.json (grep by id, name and address, 2026-11-01).
//   Also chain-checked, not drafted (far down the queue at 1,151 m): 焼き鳥 八咫烏 27151766. Its invoice number T4122001023427 is
//   registered to 株式会社三島コーポレーション, Ashiya (NTA register), not to 株式会社Human Qreate of the 一石三鳥 group; the only
//   八咫烏 tied to 一石三鳥 in a source is a course name ("八咫烏コース", makuake.com project 1seki3cho_yatagarasu). Not a chain on this evidence.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ absinthe org. Salad & Grill
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27142742/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '23:00']);
  put({
    id: 'osaka_absinthe_org_kitte_osaka', name: 'absinthe org. Salad & Grill', category: 'OMNI',
    lat: 34.700621, lng: 135.494173, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information beyond Tabelog\'s "allergy information available". Plates and wraps come with pita or baguette, and there are pies and pasta; the falafel salad and grills may suit, but nothing is described as gluten-free and the fryer is not described.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Vegan options: a vegan plate of vegetables and beans and a vegan lunch with a chickpea dip (October 2026 reviews), a vegan wrap on the breakfast menu (September 2026), and falafel with hummus; Tabelog lists vegan and vegetarian options. Ask which dressings are vegan and whether the falafel shares a fryer.',
    hours_raw: 'Daily 8:00–23:00, last order 22:00; closed when KITTE Osaka closes (Tabelog). Breakfast plates in the morning, lunch plates and dinner courses (2026 reviews). Reservations accepted; lunch 90 minutes and dinner 2 hours; 18:00–21:00 one drink and one food item per person (Tabelog). At breakfast you order at the counter and collect with a call bell (September 2026); at dinner you order on your phone (October 2026). Takeaway and an eat-in corner (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay and other QR (Tabelog). 45 table seats, terrace seats in the free space; non-smoking, smoking area in the building (Tabelog). Menu in English, Chinese and Korean, English-speaking staff (Tabelog). Opened 31 July 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda 3-2-2, B1F of KITTE Osaka — directly connected to JR Osaka Stn; 2 min from Nishi-Umeda Stn',
    cuisine: 'Mediterranean salads, falafel, wraps and grills, with absinthe cocktails (Tabelog; 2026 reviews) · breakfast: sausage-and-egg plate, avocado-and-egg plate, falafel, Mexican, protein, Mediterranean and Italian salads, chicken wrap, vegan wrap, açaí bowl (September 2026) · falafel salad, regular ¥1,100: three falafel fried to order, greens, tomato, cucumber, purple cabbage, pickles and hummus, with a choice of dressing such as spicy tahini (July 2026) · falafel sandwich in pita with hummus, to take away (October 2026) · grilled-chicken lunch with pita or baguette, beans, carrot rapé and grilled vegetables ¥1,500 (October 2026) · vegan plate; vegan lunch with a chickpea dip; beef kebab in pita (October 2026) · apple pie of a whole apple in crust (October 2026) · berry shaved ice with condensed milk ¥1,100 (September 2026) · courses with two hours of drinks: Mediterranean party course of tapas and chicken steak ¥5,500, grill course with 150 g of Japanese beef steak and seafood skewers ¥7,500, grill-and-bouillabaisse course ¥8,000 (Tabelog, tax included)',
    website: null, gmaps: gm('absinthe org. Salad & Grill KITTE大阪'), menu_url: null,
    notes: "[Mediterranean · Umeda, falafel and salads under KITTE] An all-day Mediterranean bar and canteen in the basement of KITTE Osaka, straight off the JR station, open from 8:00 for breakfast plates and açaí bowls, through lunch to dinner with absinthe cocktails. The draw is the falafel: fried to order, three to a regular salad bowl with hummus, pickles and a spicy tahini dressing (¥1,100, July 2026), or stuffed into warm pita to take away. Vegans get a plate of vegetables and beans, a vegan lunch with a chickpea dip and a vegan wrap, and one October 2026 diner called vegan food here a rare find in Japan. Meat eaters have grilled chicken or beef kebab in pita, and the apple pie, a whole apple in crust, is the one a diner knew from Absinthe Cafe in Yotsubashi (October 2026). Many take away; the eat-in room was quiet on a weekday noon (August 2026). Dinner courses with drinks start at ¥5,500.",
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: Mediterranean cuisine with wine and cocktails on B1F of KITTE Osaka, opened 31 July 2024; takeout and an eat-in corner. The Tabelog invoice number T2120001142199 is registered to 株式会社Ｃａｆｅ ＡＢＳＩＮＴＨＥ, 北堀江 (NTA invoice register, read 2026-11-01). An October 2026 diner had eaten the same apple pie at "Absinthe Cafe in Yotsubashi". A September 2026 diner notes staff who were international students, "serious and kind".', philosophy: null, specialty: 'Falafel salad; vegan plate; absinthe cocktails.',
      anecdotes: [
        { text: '"Even the regular size is quite generous, featuring three falafels along with a mix of greens, tomatoes, cucumbers, purple cabbage, and several types of pickles." — July 2026, falafel salad regular JPY 1,100 to take away, fried to order.', source: R + 'B532021055/' },
        { text: '"It\'s quite rare to find vegan dishes in Japan, so this place felt very refreshing!" — October 2026, a beef kebab at brunch beside a friend\'s vegan lunch.', source: R + 'B537974505/' },
        { text: '"I had previously enjoyed it at Absinthe Cafe in Yotsubashi, and it\'s great that I can also find it in Umeda." — October 2026, of the apple pie.', source: R + 'B538029599/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): absinthe org. Salad & Grill、ダイニングバー・ビストロ、大阪市北区梅田3-2-2 KITTE大阪 B1F、JR 大阪駅直結、西梅田駅から徒歩2分、毎日8:00〜23:00 (L.O.22:00)、施設の休館日は休み、予約可、ランチ90分、ディナー2時間、18時〜21時はひとり1ドリンク1フード、カード・電子マネー・QR 可、45席、禁煙 (施設の喫煙所)、朝食、アレルギー表示あり、ヴィーガン・ベジタリアンメニューあり、英語・中国語・韓国語のメニュー、英語を話すスタッフ、テイクアウト、2024年7月31日オープン、地中海料理とワインとカクテル、2時間飲み放題つきのコース5,500円・7,500円・8,000円、特製ブイヤベース。インボイス登録は株式会社Ｃａｆｅ ＡＢＳＩＮＴＨＥ (北堀江)。口コミ(2026年7月〜10月): 朝食のプレート、ファラフェルのサラダ (並1,100円、注文後に揚げる3個、フムス、ピクルス、スパイシーなタヒニのドレッシング)、ピタのファラフェルサンド、グリルチキンのランチ1,500円、ヴィーガンのプレート、ひよこ豆のディップのヴィーガンランチ、ビーフケバブ、丸ごとのりんごのアップルパイ (Yotsubashi の Absinthe Cafe と同じ)、ベリーのかき氷1,100円、アブサンのカクテル、留学生のスタッフ、夜はスマホで注文。',
      confidence: 'medium', sources: [TB, R + 'B505184583/', R + 'B532021055/', R + 'B535955271/', R + 'B536653039/', R + 'B536855859/', R + 'B537172505/', R + 'B537911819/', R + 'B537973417/', R + 'B537974505/', R + 'B538029599/'] },
    cultural_comfort: { level: 'english', note: 'Menu in English, Chinese and Korean, and English-speaking staff (Tabelog); order at the counter or on your phone (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田3-2-2 KITTE大阪 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田三丁目2番2号 (go) 58m (KITTE Osaka is a large building); no other record within 80 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532021055/', R + 'B537911819/', R + 'B537973417/', TB],
    price_note: 'Prices from 2026 reviews (falafel salad July 2026, grilled-chicken lunch October 2026) and courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Falafel salad, regular (three falafel, hummus, pickles; choice of dressing)', '¥1,100', 'Salads', 'ask', 'ask', 'July 2026.', 'falafel_salad'),
      it('', '', 'Falafel sandwich in pita with hummus', '', 'Wraps', 'no', 'ask', 'October 2026.', 'falafel_sandwich'),
      it('', '', 'Vegan plate', '', 'Lunch', 'ask', 'vegan', 'October 2026.', 'vegan_plate'),
      it('', '', 'Vegan wrap', '', 'Breakfast', 'no', 'vegan', 'September 2026.', 'vegan_wrap'),
      it('', '', 'Grilled-chicken lunch with pita or baguette', '¥1,500', 'Lunch', 'no', 'no', 'October 2026.', 'grilled_chicken_lunch'),
      it('', '', 'Apple pie (a whole apple in crust)', '', 'Desserts', 'no', 'ask', 'October 2026.', 'apple_pie'),
      it('', '', 'Mediterranean party course with two hours of drinks', '¥5,500', 'Courses', 'ask', 'no', 'Tabelog.', 'party_course'),
    ] }, {
    cuisine: '地中海のサラダ、ファラフェル、ラップ、グリル、アブサンのカクテル (食べログ、2026年の口コミ)・朝食: ソーセージと卵のプレート、アボカドと卵のプレート、ファラフェル、メキシカン、プロテイン、地中海風、イタリアンのサラダ、チキンラップ、ヴィーガンラップ、アサイーボウル (2026年9月)・ファラフェルのサラダ、並1,100円: 注文後に揚げるファラフェル3個、葉物、トマト、きゅうり、紫キャベツ、ピクルス、フムス、スパイシーなタヒニなどから選ぶドレッシング (2026年7月)・ピタにフムスとはさんだファラフェルサンド、テイクアウト (2026年10月)・ピタかバゲットを選ぶグリルチキンのランチ、豆、キャロットラペ、焼き野菜1,500円 (2026年10月)・ヴィーガンのプレート、ひよこ豆のディップのヴィーガンランチ、ピタのビーフケバブ (2026年10月)・丸ごとのりんごを包んだアップルパイ (2026年10月)・練乳のベリーのかき氷1,100円 (2026年9月)・2時間飲み放題つきのコース: タパスとチキンステーキの地中海パーティーコース5,500円、国産牛ステーキ150gと魚介の串のグリルコース7,500円、グリルとブイヤベースのコース8,000円 (食べログ、税込)',
    neighborhood: '梅田3-2-2、KITTE大阪の地下1階。JR 大阪駅直結、西梅田駅から徒歩2分',
    gf_detail: '要確認。食べログに「アレルギー表示あり」とある以外、グルテンの情報なし。プレートやラップにはピタかバゲットがつき、パイやパスタもある。ファラフェルのサラダやグリルは合うかもしれないが、グルテンフリーの説明はなく、揚げ油の説明もない。',
    vegan_detail: 'ヴィーガンの選択肢あり: 野菜と豆のヴィーガンのプレート、ひよこ豆のディップのヴィーガンランチ (2026年10月の口コミ)、朝食のヴィーガンラップ (2026年9月)、ファラフェルとフムス。食べログにもヴィーガン・ベジタリアンメニューありとある。どのドレッシングがヴィーガンか、ファラフェルの揚げ油が共用かは要確認。',
    notes: '[地中海料理・梅田、KITTE の地下のファラフェルとサラダ] JR 大阪駅から直結の KITTE大阪の地下にある、朝から夜まで開いている地中海料理のバー兼食堂。8時から朝食のプレートやアサイーボウル、昼のプレート、夜はアブサンのカクテルとコース。いちばんの人気はファラフェルで、注文後に揚げて、並のサラダには3個、フムス、ピクルス、スパイシーなタヒニのドレッシング (1,100円、2026年7月)。あたたかいピタにはさんでテイクアウトも。ヴィーガンには野菜と豆のプレート、ひよこ豆のディップのヴィーガンランチ、ヴィーガンラップがあり、日本でヴィーガン料理は珍しいと喜ぶ人も (2026年10月)。肉ならグリルチキンやピタのビーフケバブ。丸ごとのりんごのアップルパイは、Yotsubashi の Absinthe Cafe と同じものだそう (2026年10月)。テイクアウトの客が多く、平日の昼はイートインが空いていた日も (2026年8月)。夜の飲み放題つきコースは5,500円から。',
  });
}

// ================================================================ ミュゼウメキタ ワインバー&グリル
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27072620/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://muse-umekita.com/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_muse_umekita_grand_front', name: 'ミュゼウメキタ ワインバー&グリル (muse umekita)', category: 'OMNI',
    lat: 34.705931, lng: 135.494417, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The lunch buffet centres on stone-oven pizza and the mains are pasta, curry and grills with breadcrumbs; salads and grills are the likeliest options, but nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s feature list ticks "vegetarian options" and the buffet has farm-vegetable salads, but no vegan or vegetarian dish is named; pizzas come with cheese and a pumpkin salad had bacon (October 2026).',
    hours_raw: 'Daily 11:00–23:00, last order 22:00; lunch 11:00–14:30; closed 1 January (Tabelog); the official site says irregular holidays. Reservations accepted for dining only, not the café; lunch 90 minutes, dinner 120 minutes; a seat-only booking has no salad buffet or free drinks (Tabelog). At dinner, one drink and one food item each, ordered by QR code (August 2026). A weekday diner who had once waited booked the buffet ahead the next time (August 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay (Tabelog). 50 seats with sofa seats over the night view; private hire for 20 to 50; non-smoking; children and strollers welcome (Tabelog). Takeaway and delivery (Tabelog). Opened 26 April 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '大深町3-1, 6F of Grand Front Osaka North Building (グランフロント大阪北館), UMEKITA FLOOR — 1 min from JR Osaka Stn',
    cuisine: 'Farm-to-table Italian: salads of contract-farm vegetables delivered every morning, seafood carpaccio, ajillo, grills, stone-oven Neapolitan pizza and pasta, organic wine and homemade dolci (official site, read November 2026; tax included) · weekday buffet lunch ¥2,180 with salads, starters and pizza from the buffet, free drinks and a main: weekly pasta (tomato, cream or oil), keema curry of Daisen chicken and vegetables, or grilled swordfish with grapefruit and rosemary crumbs (official site); mains priced the lunch at ¥1,890–2,380 in August 2026, ¥1,700 if seated 11:00–11:30, with wine among the free drinks; dessert pizzas of apple or chocolate towards the end · weekend lunches: casual (drink, salad, main) ¥2,580, standard with dessert ¥2,980, share lunch ¥2,700 (official site; Tabelog lists ¥2,280, ¥2,680 and ¥2,500) · dinner à la carte: farm salad from ¥1,180, prosciutto from ¥780, starters from ¥680, ajillo ¥1,180, fried dishes from ¥880, pizza from ¥1,080, pasta from ¥1,880, grills from ¥1,080, meat mains from ¥2,480 (official site) · August 2026 dinner: cheese platter ¥1,280, caprese of fruit tomato and buffalo mozzarella ¥680, white-peach and Earl Grey jelly tea soda ¥780 · Quattro Formaggi with honey (August and October 2026) · Winter Fair from 1 November 2026',
    website: SITE, gmaps: gm('ミュゼウメキタ グランフロント大阪北館'), menu_url: SITE,
    notes: "[Italian · Umekita, a lunch buffet over the city] A big, bright café-restaurant on the restaurant floor of Grand Front Osaka's North Building, named after a museum and meant as \"a playground for adults\" (official site), with sofa seats facing the Umeda night view. Lunch is the draw: pick a main (weekly pasta, a keema curry or grilled fish) and the price includes a buffet of farm-vegetable salads, starters and thin, crisp stone-oven pizza, plus free drinks that run to red and white wine, with apple and chocolate dessert pizzas brought out late (August–October 2026). Expect ¥1,900–2,400, a little less if seated before 11:30. At night it is a wine bar of pizza, pasta, ajillo and grills, one drink and one dish each. Diners praise the value; one found it noisy and the staff's language casual (September 2026). Book the weekday buffet.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed); sommelier on staff (Tabelog)'], origin: null, background: 'Per the official site (muse-umekita.com, read 2026-11-01): a "restaurant & café as an adult\'s playground", menu built on the theme "Farm to table", with vegetables from contract farms every morning, organic wine at reasonable prices and homemade dolci of seasonal fruit; the name comes from a museum, a space where food and art meet. Opened 26 April 2013 (Tabelog).', philosophy: '"Farm to table" (official site).', specialty: 'Lunch buffet with stone-oven pizza; Quattro Formaggi with honey.',
      anecdotes: [
        { text: '"There was apple pizza and chocolate pizza, which turned into a bit of a competition to grab." — August 2026, of the dessert pizzas brought out late in a weekday buffet lunch.', source: R + 'B533012887/' },
        { text: '"I was pleasantly surprised to find honey available at the buffet (it\'s delicious when you dip it in the crust of the pizza!)." — October 2026.', source: R + 'B537428770/' },
        { text: '"However, the restaurant was a bit noisy, and I noticed some staff members were chatting casually and not using proper language" — September 2026, buffet lunch.', source: R + 'B535631822/' },
      ],
      japanese_sources_summary: '公式サイト: muse umekita (ミュゼ ウメキタ)、気軽に立ち寄れる大人の遊び場的レストラン&カフェ、「Farm to table」がテーマ、契約農家から毎朝届く農園野菜のサラダ、魚介のカルパッチョ、アヒージョ、グリル、石窯ナポリピッツァ、パスタ、オーガニックワイン、旬のフルーツの自家製ドルチェ、自然派イタリアン、グランフロント大阪北館6F UMEKITA FLOOR、11:00〜23:00、不定休、梅田の夜景のソファー席、店名はミュージアムから。平日限定ビュッフェランチ2,180円 (農園野菜サラダ、前菜、石窯ナポリピッツァ、フリードリンク、メインは週替わりパスタ3種、大山鶏と彩り野菜のキーマカレー、メカジキのグリル)、90分。土日祝のプレミアムランチ: カジュアル2,580円、スタンダード2,980円、シェア2,700円。ディナー: 契約農家直送サラダ1,180円〜、生ハム780円〜、前菜680円〜、アヒージョ1,180円、揚げ物880円〜、ピッツァ1,080円〜、パスタ1,880円〜、グリル1,080円〜、肉メイン2,480円〜。11月1日から WINTER FAIR 2026。食べログ (店舗会員): イタリアン・ビュッフェ・ダイニングバー、大阪市北区大深町3-1 グランフロント大阪北館 6F、JR 大阪駅から徒歩1分、11:00〜23:00 (L.O.22:00)、1月1日休み、予約は食事のみ、ランチ90分、ディナー120分、カード・電子マネー・PayPay 可、50席、禁煙、子ども可、ソムリエ、2013年4月26日オープン。口コミ(2026年8月〜10月): メインで値段が決まるビュッフェランチ1,890円〜2,380円、11時〜11時半は1,700円、ワインもフリードリンク、デザートピッツァ、はちみつ、カボチャサラダのベーコン、タコのミートソースパスタ、マルゲリータ、エビのアヒージョ、チーズの盛り合わせ1,280円、カプレーゼ680円、白桃とアールグレイのティーソーダ780円、夜景、ひとり1ドリンク1フード、QR コードで注文、にぎやか、スタッフの言葉づかいが気になったという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B533012887/', R + 'B533092550/', R + 'B534081300/', R + 'B534254182/', R + 'B535111949/', R + 'B535275896/', R + 'B535631822/', R + 'B536141580/', R + 'B537428770/', R + 'B537685765/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buffet lunch with a main chosen from a short list; QR-code ordering at dinner (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区大深町3-1 グランフロント大阪北館 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site (Winter Fair from 1 November 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区大深町3番地 (lot) 13m; no other record within 80 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB, R + 'B533012887/', R + 'B533092550/'],
    price_note: 'Lunch and dinner prices from the official site (tax included; read 1 November 2026); Tabelog\'s weekend plan prices are lower (¥2,280, ¥2,680, ¥2,500); August 2026 diners paid ¥1,890–2,380 for the weekday buffet depending on the main.', last_checked: TODAY, items: [
      it('平日限定ビュッフェランチ', '', 'Weekday buffet lunch: salads, starters and pizza buffet, free drinks, a main', '¥2,180', 'Lunch', 'no', 'ask', 'Official site; ¥1,890–2,380 by main in August 2026.', 'buffet_lunch'),
      it('大山鶏と彩り野菜のキーマカレー', '', 'Keema curry of Daisen chicken and vegetables (lunch main)', '', 'Lunch', 'ask', 'no', 'Official site.', 'keema_curry'),
      it('カジュアルランチ', '', 'Weekend casual lunch: drink, salad, main', '¥2,580', 'Weekend lunch', 'ask', 'ask', 'Official site (¥2,280 on Tabelog).', 'casual_lunch'),
      it('石窯ナポリピッツァ', '', 'Stone-oven Neapolitan pizza', '¥1,080', 'Dinner', 'no', 'no', 'Official site ("from").', 'pizza'),
      it('アヒージョ', '', 'Ajillo', '¥1,180', 'Dinner', 'ask', 'ask', 'Official site.', 'ajillo'),
      it('', '', 'Cheese platter', '¥1,280', 'Dinner', 'ask', 'no', 'August 2026.', 'cheese_platter'),
    ] }, {
    cuisine: 'Farm to table のイタリアン: 契約農家から毎朝届く野菜のサラダ、魚介のカルパッチョ、アヒージョ、グリル、石窯ナポリピッツァ、パスタ、オーガニックワイン、自家製ドルチェ (公式サイト、2026年11月に確認、税込)・平日のビュッフェランチ2,180円: サラダ、前菜、ピッツァのビュッフェとフリードリンクにメイン、週替わりパスタ (トマト、クリーム、オイル)、大山鶏と彩り野菜のキーマカレー、メカジキのグリル (公式サイト)。2026年8月はメインによって1,890〜2,380円、11時〜11時半に入ると1,700円、フリードリンクにはワインも、最後にりんごやチョコのデザートピッツァ・週末のランチ: ドリンク、サラダ、メインのカジュアル2,580円、デザートつきのスタンダード2,980円、シェアランチ2,700円 (公式サイト、食べログでは2,280円、2,680円、2,500円)・夜のアラカルト: 契約農家直送サラダ1,180円〜、生ハム780円〜、前菜680円〜、アヒージョ1,180円、揚げ物880円〜、ピッツァ1,080円〜、パスタ1,880円〜、グリル1,080円〜、肉のメイン2,480円〜 (公式サイト)・2026年8月の夜: チーズの盛り合わせ1,280円、フルーツトマトとバッファローモッツァレラのカプレーゼ680円、白桃のマリネとアールグレイのジュレのティーソーダ780円・はちみつを添えたクワトロフォルマッジ (2026年8月・10月)・2026年11月1日から WINTER FAIR',
    neighborhood: '大深町3-1、グランフロント大阪北館の6階、UMEKITA FLOOR。JR 大阪駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。ランチのビュッフェは石窯ピッツァが中心で、メインはパスタ、カレー、パン粉焼きのグリル。サラダやグリルが候補だが、グルテンフリーの説明はない。',
    vegan_detail: '要確認。食べログの特徴に「ベジタリアンメニューあり」とあり、ビュッフェには農園野菜のサラダもあるが、ヴィーガンやベジタリアンの料理は書かれていない。ピッツァにはチーズ、カボチャのサラダにはベーコンが入っていた (2026年10月)。',
    notes: '[イタリアン・うめきた、街を見下ろすビュッフェランチ] グランフロント大阪北館のレストランフロアにある大きくて明るいカフェレストランで、店名はミュージアムから、「大人の遊び場」がコンセプト (公式サイト)。ソファー席からは梅田の夜景。お目当てはランチで、メイン (週替わりパスタ、キーマカレー、魚のグリルなど) を選ぶと、農園野菜のサラダ、前菜、薄くてパリッとした石窯ピッツァのビュッフェと、赤白のワインまで入ったフリードリンクがつき、終わりごろにはりんごやチョコのデザートピッツァも出てくる (2026年8月〜10月)。1,900〜2,400円ほどで、11時半前に入ると少し安い。夜はピッツァ、パスタ、アヒージョ、グリルのワインバーで、ひとり1ドリンク1フード。コスパをほめる声が多い一方、にぎやかで、スタッフの言葉づかいがくだけていたという声も (2026年9月)。平日のビュッフェは予約がおすすめ。',
  });
}

// ================================================================ しん家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27073950/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.shinya-inc.com/';
  const H = day(['11:00', '23:30']);
  put({
    id: 'osaka_shinya_ekimae_dai2', name: 'しん家 (Shin Ya)', category: 'OMNI',
    lat: 34.698493, lng: 135.49807, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers are grilled on the teppan with salt or sauce; yakisoba, gyoza, garlic fried rice and potato salad with baguette are on the menu, and nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-and-seafood skewer izakaya; even the Okinawa-style yakisoba is topped with bonito flakes (June 2026). Grilled yam and sweet potato skewers exist, but the yam is made with egg and the sweet potato with butter.',
    hours_raw: 'Daily 11:00–23:30 (last order food 22:30, drinks 23:00), open year-round (Tabelog). Diners describe weekends and holidays starting from about 15:00 (September 2026) and a Sunday visit right after a 15:30 opening (Tabelog review preview), so check the time before a daytime visit. Reservations accepted; a table is held 15 minutes (Tabelog). Smoking allowed at every seat (Tabelog; diners noted it, June 2026). Cards (VISA, Master, JCB, AMEX, Diners) and QR payment including Alipay and WeChat Pay; no e-money (Tabelog). 44 seats: 10 at the counter, 34 at tables (Tabelog). Daily specials on a blackboard (August 2026). Opened 29 May 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda 1-2-2, B1F unit 52 of 大阪駅前第2ビル, in the basement restaurant arcade — 1 min from Kitashinchi Stn, 5 min from JR Osaka Stn',
    cuisine: 'Teppan-skewer izakaya in a Showa-retro room, skewers from ¥100 and sake and shochu that change each visit (Tabelog) · seafood skewers of the season, the house specialty (Tabelog) · skewers named in 2026 reviews: beef outside skirt, chicken neck, chicken tail, a fluffy grilled yam made with egg, spam steak, pork-wrapped asparagus, bacon-wrapped quail egg, sea bream carpaccio skewer, sweet potato with maple butter · a five-skewer platter of the day (July 2026) · rare-seared black wagyu shabu with egg yolk, potato salad with fried onions and baguette, avocado salad, chicken sashimi, Okinawa-style yakisoba with bonito flakes and shisa-shaped kamaboko (June 2026) · stir-fried horumon and garlic rice, garlic beef fried rice, horumon yakisoba, gyoza from the specials board (July–August 2026) · courses: omakase of five original skewers ¥1,500, with 90 minutes of drinks ¥3,000; Manpuku course ¥2,300 (Tabelog, tax included) · all-you-can-drink ¥1,000 (June 2026)',
    website: SITE, gmaps: gm('しん家 大阪駅前第2ビル'), menu_url: null,
    notes: "[Izakaya · Umeda, teppan skewers under the station buildings] A loud, Showa-retro skewer bar in the basement arcade of Osaka Ekimae Dai-2 Building, a minute from Kitashinchi Station, open from late morning to 23:30 since 2013, one of two shops of 株式会社しん家 with a takoyaki bar in the Dai-4 Building. Skewers start at ¥100 and are cooked on a flat iron, not a grill: beef skirt, chicken neck and tail, a fluffy yam set with egg, spam steak, and seasonal seafood. Around them go Okinawa-style yakisoba with a shisa-shaped fishcake, rare wagyu shabu under an egg yolk, garlic rice with horumon, and blackboard specials. A regular missed the old staff and the louder calls of \"Oi oi! Yoi yoi!\" (April and July 2026), but found the food as good as ever. All-you-can-drink was ¥1,000 a head (June 2026). Smoking is allowed at every seat.",
    chef_bio: { chef_name: null, roles: ['Grill and floor staff of 株式会社しん家 (unnamed)'], origin: null, background: 'Per the official site (shinya-inc.com, read 2026-11-01): 株式会社しん家 runs two shops in the Osaka Ekimae buildings, 鉄板串酒場 しん家 (Dai-2 Building B1F 52) and たこ焼酒場 しん家 (Dai-4 Building B1F 50), serving skewers and takoyaki with a wide drink list. Per Tabelog: teppan skewers from ¥100 in a Showa-retro room; seasonal "seafood skewers"; opened 29 May 2013. A regular on an eighth visit noted that the staff had completely changed by April 2026.', philosophy: null, specialty: 'Teppan skewers; grilled yam; Okinawa-style yakisoba.',
      anecdotes: [
        { text: '"The unique calls of this restaurant, \'Oi Oi!\', \'Yoi Yoi!\', \'Yoi Yoi Yoi!\'—I don\'t really understand them, but the voices are quieter than before!" — April 2026, a seventh visit.', source: R + 'B500352236/' },
        { text: '"As for the spam steak, I didn\'t realize it was spam until I took a bite, but I instantly recognized the flavor I love" — July 2026, after a concert, at 22:00.', source: R + 'B531075932/' },
        { text: '"The avocado salad, chicken sashimi, and Okinawan-style yakisoba (the shisa-shaped kamaboko was so cute!) were all delicious." — June 2026, a weekday after 21:00.', source: R + 'B530538570/' },
      ],
      japanese_sources_summary: '公式サイト: 株式会社しん家、鉄板串酒場 しん家 (大阪市北区梅田1丁目2-2 大阪駅前第2ビル地下1階52号) と たこ焼酒場 しん家 (梅田1丁目11-4 梅田駅前第4ビル地下1階50号)、串焼きとたこ焼きが中心、種類豊富なドリンク、大きな宴会から小さな宴会まで。食べログ (店舗会員): しん家、串焼き・居酒屋・鉄板焼き、北新地駅から徒歩1分、JR 大阪駅から5分、毎日11:00〜23:30 (L.O.料理22:30、ドリンク23:00)、年中無休、予約は15分まで、全席喫煙可、カード・QR 可、電子マネー不可、44席 (カウンター10、テーブル34)、昭和レトロ、100円からの創作串、旬の魚介の「海鮮串」、日本酒と焼酎、2013年5月29日オープン、おまかせコース1,500円、90分飲み放題つき3,000円、満腹コース2,300円。口コミ(2026年4月〜9月): ハラミ、せせり、ぼんじり、ふわふわの長いも焼き、スパムステーキ、豚巻きアスパラ、うずらのベーコン巻き、鯛のカルパッチョ串、さつまいものメープルバター、牛のレアしゃぶと卵黄、ポテトサラダとバゲット、アボカドサラダ、鶏刺し、Okinawa 風焼きそばと shisa のかまぼこ、ホルモン炒めとガーリックライス、ガーリック牛めし、ホルモン焼きそば、黒板の本日のおすすめ、飲み放題1,000円、スタッフが入れ替わり掛け声が小さくなったという常連、全席喫煙、週末は15時ごろから。',
      confidence: 'medium', sources: [TB, SITE, R + 'B500352236/', R + 'B529754705/', R + 'B530538570/', R + 'B530986789/', R + 'B531075932/', R + 'B533062370/', R + 'B534535016/', R + 'B536417225/', R + 'B536653628/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A busy counter-and-table skewer bar with a photo menu (Tabelog); smoking at every seat. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田1-2-2 大阪駅前第2ビル B1F 52号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the company site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田一丁目2番2号 (go) 33m. Same building as Cafe Stand El Sol (osaka_cafe_stand_el_sol_umeda, address_ja "大阪府大阪市北区梅田1-2-2 大阪駅前第2ビル B1F 43-1"), a different unit whose pin is 50 m away, so the two do not stack and both stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B530986789/', R + 'B531075932/'],
    price_note: 'Course prices and "skewers from ¥100" from the Tabelog listing (tax included); all-you-can-drink ¥1,000 per a June 2026 review; skewer prices otherwise not listed.', last_checked: TODAY, items: [
      it('', '', 'Omakase course of five original skewers', '¥1,500', 'Courses', 'ask', 'no', 'Tabelog.', 'omakase_course'),
      it('', '', 'Omakase course with 90 minutes of drinks', '¥3,000', 'Courses', 'ask', 'no', 'Tabelog.', 'omakase_nomihodai'),
      it('', '', 'Grilled yam skewer (yam and egg)', '', 'Skewers', 'ask', 'no', 'April 2026; July 2026.', 'nagaimo_yaki'),
      it('', '', 'Okinawa-style yakisoba with bonito flakes', '', 'Teppan', 'no', 'no', 'June 2026.', 'okinawa_yakisoba'),
      it('', '', 'Rare black-wagyu shabu with egg yolk', '', 'Teppan', 'ask', 'no', 'June 2026.', 'wagyu_rare_shabu'),
      it('', '', 'Stir-fried horumon and garlic rice', '', 'Teppan', 'ask', 'no', 'July 2026.', 'horumon_garlic_rice'),
    ] }, {
    cuisine: '昭和レトロの鉄板串の居酒屋、串は100円から、行くたびに変わる日本酒と焼酎 (食べログ)・名物は旬の魚介の「海鮮串」(食べログ)・2026年の口コミに出てくる串: ハラミ、せせり、ぼんじり、卵を使ったふわふわの長いも焼き、スパムステーキ、豚巻きアスパラ、うずらのベーコン巻き、鯛のカルパッチョ串、さつまいものメープルバター・その日の串5本盛り (2026年7月)・黒毛和牛のレアしゃぶと卵黄、フライドオニオンとバゲットのポテトサラダ、アボカドサラダ、鶏刺し、かつお節と shisa の形のかまぼこをのせた Okinawa 風焼きそば (2026年6月)・ホルモン炒めとガーリックライス、ガーリック牛めし、ホルモン焼きそば、黒板のおすすめの gyoza (2026年7月〜8月)・コース: オリジナル串5本のおまかせ1,500円、90分飲み放題つき3,000円、満腹コース2,300円 (食べログ、税込)・飲み放題1,000円 (2026年6月)',
    neighborhood: '梅田1-2-2、大阪駅前第2ビルの地下1階52号、地下の飲食街。北新地駅から徒歩1分、JR 大阪駅から5分',
    gf_detail: '要確認。グルテンの情報なし。串は鉄板で塩かタレで焼く。焼きそば、gyoza、ガーリックライス、バゲットつきのポテトサラダもあり、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。肉と魚介の串の居酒屋で、Okinawa 風焼きそばにもかつお節がのる (2026年6月)。長いもやさつまいもの串もあるが、長いもは卵、さつまいもはバターを使う。',
    notes: '[居酒屋・梅田、駅前ビルの地下の鉄板串] 北新地駅から1分、大阪駅前第2ビルの地下の飲食街にある、にぎやかな昭和レトロの串の店で、2013年から昼前から23時半まで。株式会社しん家の2店のひとつで、第4ビルにはたこ焼きの店もある。串は100円からで、網ではなく鉄板で焼く: ハラミ、せせり、ぼんじり、卵でふわふわにした長いも焼き、スパムステーキ、旬の魚介。ほかに shisa の形のかまぼこをのせた Okinawa 風焼きそば、卵黄をのせた和牛のレアしゃぶ、ホルモンとガーリックライス、黒板のおすすめ。常連は、スタッフが入れ替わって「Oi oi! Yoi yoi!」の掛け声が小さくなったのをさびしがっていたが、味は変わらないそう (2026年4月・7月)。飲み放題は1,000円。全席喫煙可。',
  });
}

// ================================================================ ステーキ ロン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27000136/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.steakron.com/';
  const D = ['17:00', '22:00'], L = ['11:30', '14:30'];
  put({
    id: 'osaka_steak_ron_kitashinchi', name: 'ステーキ ロン (Steak Ron)', category: 'OMNI',
    lat: 34.69804, lng: 135.497921, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Teppanyaki steak is seared plainly, but the courses include a house sauce, the signature shrimp in an egg sauce and glaze, red miso soup and a rice dish that may be curry or fried rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kobe-beef and wagyu teppanyaki courses with shrimp, beef appetizers and red miso soup.',
    hours_raw: 'Dinner Mon–Sat 17:00–22:00 (last order 20:30); lunch on some Thursdays to Saturdays 11:30–14:30 (last order 13:30), on days marked "L" in the monthly calendar on the official site; closed Sundays and holidays (Tabelog; official site). Reservations by phone, best 12:00–17:30 or 20:00–21:00; online booking too; groups of five or more by phone only (Tabelog; official site). Prices include tax; 10% service charge at dinner (Tabelog; official site). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 17 seats: an L-shaped counter of 10 around the teppan and a private room for up to 7; non-smoking; BYO drinks allowed (Tabelog). Founded 1964 (official site).',
    hours: { 0: day(D), 1: day(D), 2: day(D), 3: day(L, D), 4: day(L, D), 5: day(L, D) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-10-2, ground floor of 北新地プレイス — 1 min from Kitashinchi Stn (JR Tozai Line), 2 min from Nishi-Umeda Stn',
    cuisine: 'Teppanyaki of Kobe beef from 太田牧場 (Ota Farm), grilled in front of you at the counter (official site; prices tax included, plus 10% service) · Steak Ron since-1964 special dinner course from ¥13,200, priced by the cut and weight: a seasonal dish, Kobe-beef appetizer of the day, the signature golden-grilled wild shrimp, the day\'s recommendation, steak, grilled seasonal vegetables, onion salad with sesame, a rice dish (Kobe-beef shigure-ni with egg over rice, spicy curry, fried rice with beef tendon, or garlic rice), red miso soup and pickles, dessert, coffee or tea · steaks: Kobe sirloin or fillet 100 g ¥19,800, 120 g ¥22,000, 150 g ¥24,750; Kobe chateaubriand 100 g ¥24,200 to 150 g ¥29,700; black-wagyu fillet 100 g ¥13,200 to 150 g ¥16,500; black-wagyu chateaubriand 100 g ¥15,950 to 150 g ¥19,800 · set courses 雪 (Kobe steak 120 g) ¥19,800 and 月 (150 g) ¥22,000 · lunch C course ¥13,200; Christmas course ¥26,400, 23–25 December 2026 (Tabelog) · beef appetizers such as Kobe sirloin sashimi and charcoal-grilled Kobe hiuchi; the shop holds a licence to serve raw meat (official site) · from reviews: oxtail and shark-fin double consommé, sirloin sashimi with yama wasabi, tartare monaka, roast beef, a Kesennuma shark-fin steak added on request, lily-bulb rice (December 2025); vichyssoise (May 2026); corn rice (June 2026) · rice is specially grown Koshihikari from 鳥取県 (official site)',
    website: SITE, gmaps: gm('ステーキ ロン 北新地'), menu_url: SITE,
    notes: "[Steak · Kitashinchi, Kobe-beef teppanyaki since 1964] A Kitashinchi steakhouse that has grilled there for some sixty years, renovated in 2020 with Baccarat lamps and glassware, a ten-seat L-shaped counter and a private room for seven. Every seat faces the iron, where the cook grills Kobe beef from Ota Farm, timing each piece to your pace (official site). The dish diners single out is the golden-grilled wild shrimp, a house signature since the opening, glazed in an egg sauce one August 2026 diner compared to sukiyaki: \"you could come here just for this dish\". Courses run from ¥13,200 for black wagyu to ¥29,700 for 150 g of Kobe chateaubriand, plus 10% service, and end with a choice of rice, from Kobe-beef shigure on rice to garlic rice. One September 2026 diner found the room dark and heavy; others call it a place for birthdays and business dinners.",
    chef_bio: { chef_name: null, roles: ['Teppanyaki cooks (unnamed)'], origin: null, background: 'Per the official site (steakron.com, read 2026-11-01): founded in Kitashinchi in 1964 ("北新地で創業60年"); exterior and interior renewed in 2020; a ten-seat L-shaped counter and a private room for up to seven, with Baccarat lamps and glasses; steaks of Kobe beef from 太田牧場; a licence to serve raw beef; "天然海老の黄金焼き" has been a signature since the founding; steaks are cooked to the temperature and doneness that suit each guest\'s pace. A July 2026 diner noted foreign guests and some foreign staff and believed English-speaking guests can be looked after.', philosophy: '"本物だけがもつ極上の味わいと贅沢な時間" (the finest flavour and luxurious time that only the real thing has; official site).', specialty: 'Kobe-beef steak from Ota Farm; golden-grilled wild shrimp.',
      anecdotes: [
        { text: '"The signature dish, grilled shrimp in golden sauce, is unlike anything I\'ve ever tasted. … Honestly, you could come here just for this dish!" — August 2026, a course with both strip loin and fillet.', source: R + 'B533055671/' },
        { text: '"Kesennuma Shark Fin Steak with Ron Style Sauce. I always request this as an addition when making a reservation." — December 2025, an eighth visit, on the last day of the year.', source: R + 'B126311876/' },
        { text: '"I\'ve always disliked the sharpness of wasabi, so I never ate it before, but the wasabi here was truly delicious!" — June 2026, in the private room.', source: R + 'B530725440/' },
      ],
      japanese_sources_summary: '公式サイト: 北新地 ステーキ ロン、太田牧場産 神戸牛専門の鉄板焼き、北新地駅から徒歩約1分、北新地で創業60年、2020年に外観・内観をリニューアル、10席のL字カウンターと最大7名の個室、バカラのランプやグラス、客席はすべて鉄板に面する、食べるスピードに合わせて温度と焼き加減を調整、神戸牛のサーロインのお刺身や神戸牛ヒウチの炭火焼などのオードブル、生食販売の許可、創業以来の名物「天然海老の黄金焼き」。ステーキロン〜since1964〜スペシャルディナーコース13,200円〜 (肉の種類とグラム数で変わる): 神戸牛サーロインまたはフィレ100g19,800円・120g22,000円・150g24,750円、神戸牛シャトーブリアン100g24,200円〜150g29,700円、特選黒毛和牛フィレ100g13,200円〜150g16,500円、特選黒毛和牛シャトーブリアン100g15,950円〜150g19,800円、季節の焼野菜、色彩胡麻風味のオニオンサラダ、〆のご飯もの (神戸牛のしぐれ煮と赤玉子かけご飯、スパイシーカレー、牛すじ入り焼きめし、ガーリックライス)、赤だし、香の物、特製アシェットデセール、珈琲・紅茶・ハーブティー。コース 雪19,800円 (120g)、月22,000円 (150g)。鳥取県産特別栽培米コシヒカリ。税込、別途サービス料10%。月ごとの定休日とランチ営業日のお知らせ。食べログ (店舗会員): ステーキ・ハンバーグ・鉄板焼き、大阪市北区曽根崎新地1-10-2 北新地プレイス 1F、月〜水17:00〜22:00 (L.O.20:30)、木〜土11:30〜14:30 (L.O.13:30)、17:00〜22:00、日・祝休み、ランチは決まった日のみ、電話は12時〜17時半か20時〜21時に、5名以上は電話のみ、サービス料10% (ディナー)、カード可、電子マネー・QR 不可、17席、禁煙、持ち込み可、雪コース19,800円、ランチ C コース13,200円、クリスマスコース26,400円。口コミ(2025年12月〜2026年10月): テールとフカヒレのダブルコンソメ、サーロインのお刺身と yama wasabi、タルタルの最中、ローストビーフ、天然海老、Kesennuma のフカヒレステーキ、百合根の炊き込みご飯、ヴィシソワーズ、とうもろこしご飯、黄金焼きは卵のソースで、すき焼きのような味、雰囲気が暗いという声、海外の客とスタッフ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B126311876/', R + 'B526655076/', R + 'B530389033/', R + 'B530725440/', R + 'B532712323/', R + 'B533055671/', R + 'B533841797/', R + 'B535061630/', R + 'B535428277/', R + 'B537458332/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppanyaki cooked in front of you; a July 2026 diner saw foreign staff and believed English-speaking guests can be served. Book by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-10-2 北新地プレイス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site with the November 2026 calendar; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目10番2号 (go) 11m; no other record within 80 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB],
    price_note: 'Prices from the official site (tax included, plus 10% service; read 1 November 2026); lunch and Christmas courses from Tabelog.', last_checked: TODAY, items: [
      it('ステーキロン～since1964～スペシャルディナーコース', '', 'Steak Ron since-1964 special dinner course (price set by the cut and weight)', '¥13,200', 'Courses', 'ask', 'no', 'Official site ("from").', 'special_dinner_course'),
      it('雪', '', 'Course 雪: Kobe sirloin or fillet steak 120 g', '¥19,800', 'Courses', 'ask', 'no', 'Official site; Tabelog.', 'course_yuki'),
      it('月', '', 'Course 月: Kobe sirloin or fillet steak 150 g', '¥22,000', 'Courses', 'ask', 'no', 'Official site.', 'course_tsuki'),
      it('神戸牛シャトーブリアン 150ｇ', '', 'Kobe chateaubriand 150 g (in the course)', '¥29,700', 'Steaks', 'ask', 'no', 'Official site.', 'kobe_chateaubriand'),
      it('天然海老の黄金焼き', '', 'Golden-grilled wild shrimp (house signature)', '', 'Courses', 'ask', 'no', 'Official site; August 2026.', 'ogon_yaki'),
      it('', '', 'Lunch C course', '¥13,200', 'Lunch', 'ask', 'no', 'Tabelog.', 'lunch_c'),
    ] }, {
    cuisine: '太田牧場産の神戸牛の鉄板焼き、カウンターで目の前で焼く (公式サイト、税込、別途サービス料10%)・ステーキロン〜since1964〜スペシャルディナーコース13,200円〜、肉の種類とグラム数で値段が変わる: 季節の一品、神戸牛の本日のおすすめ部位のオードブル、名物の天然海老の黄金焼き、本日のおすすめ料理、ステーキ、季節の焼野菜、色彩胡麻風味のオニオンサラダ、〆のご飯もの (神戸牛のしぐれ煮と赤玉子かけご飯、スパイシーカレー、牛すじ入り焼きめし、ガーリックライス)、赤だしと香の物、デザート、珈琲か紅茶・ステーキ: 神戸牛サーロインかフィレ100g19,800円、120g22,000円、150g24,750円。神戸牛シャトーブリアン100g24,200円〜150g29,700円。特選黒毛和牛フィレ100g13,200円〜150g16,500円。特選黒毛和牛シャトーブリアン100g15,950円〜150g19,800円・コース 雪 (神戸牛120g) 19,800円、月 (150g) 22,000円・ランチ C コース13,200円、クリスマスコース26,400円、2026年12月23日〜25日 (食べログ)・神戸牛サーロインのお刺身や神戸牛ヒウチの炭火焼などのオードブル、生食の許可あり (公式サイト)・口コミから: テールとフカヒレのダブルコンソメ、サーロインのお刺身と yama wasabi、タルタルの最中、ローストビーフ、予約時に頼む Kesennuma のフカヒレステーキ、百合根の炊き込みご飯 (2025年12月)、ヴィシソワーズ (2026年5月)、とうもろこしご飯 (2026年6月)・お米は鳥取県産特別栽培米コシヒカリ (公式サイト)',
    neighborhood: '曽根崎新地1-10-2、北新地プレイスの1階。JR 東西線 北新地駅から徒歩1分、西梅田駅から2分',
    gf_detail: '予約時に要確認。グルテンの情報なし。鉄板のステーキはシンプルに焼くが、コースには特製のソース、卵のソースとタレの名物の海老、赤だし、カレーや焼きめしになりうる〆のご飯ものがある。',
    vegan_detail: 'ヴィーガンではありません。神戸牛と和牛の鉄板焼きのコースで、海老、牛肉のオードブル、赤だしがつく。',
    notes: '[ステーキ・北新地、1964年からの神戸牛の鉄板焼き] 北新地で60年ほど鉄板で焼き続けるステーキハウスで、2020年にリニューアルし、バカラのランプとグラス、10席のL字カウンターと7名までの個室。どの席も鉄板に面していて、料理人が太田牧場の神戸牛を、食べるペースに合わせて焼いてくれる (公式サイト)。常連が絶賛するのは創業以来の名物、天然海老の黄金焼きで、卵のソースとタレの味をすき焼きのようだと言う人も (2026年8月)。「この一皿のために来てもいい」。コースは黒毛和牛の13,200円から神戸牛シャトーブリアン150gの29,700円まで、別途サービス料10%で、〆は神戸牛のしぐれ煮のご飯からガーリックライスまで選べる。雰囲気が暗くて重いという声もあるが (2026年9月)、誕生日や接待に使う人が多い。',
  });
}

save();
