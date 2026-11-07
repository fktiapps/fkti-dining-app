// Kyoto priority (kyoto-missed), worker osw13, batch 87 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: IL BUCO, UFO, きはる, バー プレジャー.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-87');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ IL BUCO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26021886/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.the-la-mart.com/mimasuya_italiano/index.html';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_il_buco_pontocho', name: 'IL BUCO', category: 'OMNI',
    lat: 35.007042, lng: 135.77111, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta, garlic baguette and arancini in the courses (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prosciutto, roast beef, duck and Bolognese in the courses (2026 reviews).',
    hours_raw: 'Tabelog: daily 17:00–23:00 (last order 22:30); lunch suspended for now; open all year. Reservations taken. Charge ¥300 a person — Tabelog, Japanese original 「お一人様につき300円」; riverside seats on the summer deck (kawayuka) cost ¥1,000 a person more (September 2026). 90 seats: sofas, a terrace over the Kamo River and a second floor used in rain. Non-smoking. English menu; children and strollers welcome; free Wi-Fi. Cards, e-money and PayPay. Pontocho south of Sanjo. Formerly みます屋 イタリアーノ (Tabelog); its listed website is on the same domain as The みます屋 in Pontocho.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho south of Sanjo, on the Kamo River — 5 min walk from Sanjo',
    cuisine: 'A large Pontocho Italian with a summer deck over the Kamo River (Tabelog; 2025–2026 reviews) · courses with all-you-can-drink: five antipasti, garlic baguette, prosciutto salad, arancini with shrimp sauce, roast beef, Bolognese, mango pudding with grapefruit jelly (May 2026) · kawayuka course during Gion Matsuri, antipasto to dolce (July 2026) · duck, pasta and appetizers; a celebration plate on request (October 2026) · a wide wine list; cocktails off the menu on request (May and October 2026)',
    website: SITE, gmaps: gm('IL BUCO 先斗町'), menu_url: TB + 'dtlmenu/',
    notes: '[Italian · Pontocho on the Kamo River, a riverside deck at fair prices] A big, friendly Italian on Pontocho with a summer deck over the river and a covered upstairs for rain: course menus with free-flow drinks, pasta, roast beef and duck. Reviewers call it good value for the location; some found pasta salty or courses served out of order. ¥300 charge, plus ¥1,000 for deck seats. Dinner only, daily.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Formerly みます屋 イタリアーノ (Tabelog), it shares its listed web domain (the-la-mart.com) with The みます屋 in Pontocho, which is already in data. Reviewers in 2025–2026 praise attentive staff and value; criticism covers slow service at Christmas (December 2025), slightly salty spaghetti (February 2026) and a main course served before the pasta "due to kitchen constraints" (July 2026).',
      philosophy: null,
      specialty: 'Italian courses on the riverside deck.',
      anecdotes: [
        { text: 'July 2026: "we encountered a sudden thunderstorm during our meal, but the staff promptly assisted us in moving to a second-floor seating area… they even remade the dishes we had already started eating."', source: R + 'B532393961/' },
        { text: 'October 2026: "I appreciated that the prices were not inflated like many tourist spots."', source: R + 'B537458082/' },
      ],
      japanese_sources_summary: '食べログ: IL BUCO (旧店名 みます屋 イタリアーノ)、イタリアン・日本料理・創作料理、中京区若松町140-2、京阪三条駅から徒歩5分、毎日 17:00〜23:00 (L.O. 22:30)、ランチは当面休み、無休、予約可、原文で「お一人様につき300円」、90席、ソファ、テラス、禁煙、英語メニュー、子供・ベビーカー可、カード・電子マネー・PayPay可、法人会員。口コミ (2025年12月〜2026年10月、英語): 鴨川の納涼床、飲み放題付きのコース、前菜5種、ガーリックバゲット、生ハムのサラダ、アランチーニ、ローストビーフ、ボロネーゼ、マンゴープリン、鴨、ワイン、床席は追加で1人1,000円 (2026年9月)、雨の日は2階へ、パスタが少し塩辛い (2026年2月)、料理の順番違い (2026年7月)、提供が遅い (2025年12月)。',
      confidence: 'medium', sources: [TB, SITE, R + 'B520483683/', R + 'B522764032/', R + 'B524966211/', R + 'B527389527/', R + 'B527944877/', R + 'B529891217/', R + 'B532393961/', R + 'B532791602/', R + 'B535436652/', R + 'B535715029/', R + 'B537458082/', R + 'B537661246/'] },
    cultural_comfort: { level: 'english', note: 'English menu; summer riverside deck.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区若松町140-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007042, 135.771110); cross-checked: GSI 京都府京都市中京区若松町140番地 (lot) 26m; nearest pin kyoto_yoshiya_pontocho 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527389527/'],
    price_note: 'No dish prices in the sources; reviewers spent about ¥4,000–15,000 a head (2025–2026); ¥300 charge, ¥1,000 extra on the deck.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', null, 'Course', 'no', 'no', 'May 2026.', 'course_nomihodai'),
      it('', '', 'Arancini with shrimp sauce', null, 'Antipasti', 'no', 'no', 'May 2026.', 'arancini'),
      it('', '', 'Bolognese', null, 'Pasta', 'no', 'no', 'May 2026.', 'bolognese'),
    ] }, {
    cuisine: '鴨川に夏の床を出す先斗町の大きなイタリアン (食べログ、2025〜2026年の口コミ)・飲み放題付きのコース: 前菜5種、ガーリックバゲット、生ハムのサラダ、海老のソースのアランチーニ、ローストビーフ、ボロネーゼ、マンゴープリンとグレープフルーツのゼリー (2026年5月)・祇園祭のころの床のコース、前菜からドルチェまで (2026年7月)・鴨、パスタ、前菜、頼めばお祝いのプレート (2026年10月)・ワインの品ぞろえ、頼めばメニューにないカクテルも (2026年5月・10月)',
    neighborhood: '先斗町三条下ルの鴨川沿い。三条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: コースにパスタ、ガーリックバゲット、アランチーニ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: コースに生ハム、ローストビーフ、鴨、ボロネーゼ (2026年の口コミ)。',
    notes: '[イタリアン・鴨川沿いの先斗町、手頃な床] 夏は鴨川に床を出し、雨の日は2階に移れる、先斗町の大きく気さくなイタリアン。飲み放題付きのコース、パスタ、ローストビーフ、鴨。場所の割に手頃という声。パスタが塩辛い、料理の順番が違ったという声も。チャージ300円、床席は1,000円増し。夜のみ、毎日。',
  });
}

// ================================================================ UFO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039868/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_ufo_ice_cream_bar_gokomachi', name: 'UFO', category: 'OMNI',
    lat: 35.006829, lng: 135.766205, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: some ice creams contain meringue, cookie or cheesecake pieces; one reviewer saw allergy notes (March 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: milk ice creams and cheesecake (2026 reviews).',
    hours_raw: 'Tabelog: daily 17:00–23:00; hours may change. Reservations advised — often full even on weekdays (March 2026; July 2026); one drink per person (July 2026). Table, counter and standing spots along the wall, plus a terrace (June 2026). Non-smoking. Cards, e-money and QR (PayPay). 5th floor of 御幸町ビル on Gokomachi, between Shijo and Oike; no prominent sign (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gokomachi between Shijo and Oike — 5–6 min walk from Kyoto-Kawaramachi',
    cuisine: 'A night ice-cream bar on a 5th floor, with homemade ice cream, coffee, wine and mead (2026 reviews) · homemade ice cream ¥660, flavours that change — salt and olive-oil vanilla, strawberry rosemary, Sichuan pepper and cream cheese, chai chocolate, caramel baked meringue, brown-sugar banana, pineapple lime, chocolate cardamom (2026) · oolong Basque cheesecake (2026) · celebration plates to order, e.g. chocolate-and-strawberry Eton mess (March 2026) · coffee brewed to order; wine and mead (2026)',
    website: null, gmaps: gm('UFO 御幸町ビル 5F'), menu_url: null,
    notes: '[Ice-cream bar · Gokomachi, homemade scoops till 11 pm] A dim, stylish 5th-floor night café where young crowds book ahead for homemade ice cream in odd flavours — salt and olive oil, strawberry rosemary, Sichuan pepper and cream cheese — with wine, mead or a latte. One drink each. A June 2026 terrace guest found the service hard to flag down. Open daily from 17:00.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Reviewers from February to October 2026 describe a popular ice-cream and drinks bar, almost full by 20:30 even on weekdays, with a changing list of homemade ice creams and coffee made to order. Criticism: the ice cream is "a bit pricey" (July 2026), the oolong cheesecake "a bit dry" (March 2026), and on the windy terrace it was hard to call staff (June 2026).',
      philosophy: null,
      specialty: 'Homemade ice cream.',
      anecdotes: [
        { text: 'October 2026: "Located on the top floor, there\'s a slight chance of being abducted by aliens, but it\'s the 5th floor."', source: R + 'B538047307/' },
        { text: 'June 2026: "The coffee is brewed fresh from the machine after you order, filling the elevator with a wonderful aroma."', source: R + 'B530866699/' },
      ],
      japanese_sources_summary: '食べログ: UFO、カフェ・バー、中京区伊勢屋町346 御幸町ビル 5F、京都河原町から404m、毎日 17:00〜23:00、時間は変わることがある、予約可、禁煙、カード・電子マネー・QR可。口コミ (2026年2月〜10月、英語): 夜のアイスクリームとお酒の店、自家製アイス660円、塩とオリーブオイルのバニラ、いちごとローズマリー、花椒とクリームチーズ、チャイチョコレート、キャラメルの焼きメレンゲ、黒糖バナナ、パイナップルライム、チョコレートとカルダモン、烏龍茶のバスクチーズケーキ、お祝いのプレート、コーヒー、ワイン、ミード、ワンドリンク制、予約がおすすめ、テラス席、アイスはやや高め。',
      confidence: 'medium', sources: [TB, R + 'B523098254/', R + 'B524993893/', R + 'B525065714/', R + 'B526134392/', R + 'B530312608/', R + 'B530866699/', R + 'B534763197/', R + 'B536498460/', R + 'B536678947/', R + 'B536912013/', R + 'B538047307/', R + 'B538159195/'] },
    cultural_comfort: { level: 'japanese', note: 'Book ahead; one drink per person.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区伊勢屋町346 御幸町ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006829, 135.766205); cross-checked: GSI 京都府京都市中京区伊勢屋町346番地 (lot) 7m; nearest pin kyoto_bar_silent_third_gokomachi 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538159195/'],
    price_note: 'Ice cream price from an October 2026 review; one drink per person.', last_checked: TODAY, items: [
      it('', '', 'Homemade ice cream', '¥660', 'Ice cream', 'ask', 'no', 'October 2026; flavours change.', 'ice_cream'),
      it('', '', 'Oolong Basque cheesecake', null, 'Dessert', 'no', 'no', 'March, June and October 2026.', 'cheesecake'),
    ] }, {
    cuisine: 'ビル5階の夜のアイスクリームバーで、自家製アイス、コーヒー、ワイン、ミード (2026年の口コミ)・自家製アイス660円、味は入れ替わる: 塩とオリーブオイルのバニラ、いちごとローズマリー、花椒とクリームチーズ、チャイチョコレート、キャラメルの焼きメレンゲ、黒糖バナナ、パイナップルライム、チョコレートとカルダモン (2026年)・烏龍茶のバスクチーズケーキ (2026年)・予約でお祝いのプレート、チョコといちごのイートンメス (2026年3月)・注文ごとに淹れるコーヒー、ワイン、ミード (2026年)',
    neighborhood: '四条と御池の間の御幸町。京都河原町駅から徒歩5〜6分',
    gf_detail: '要確認: メレンゲ、クッキー、チーズケーキの入るアイスもある。アレルギー表示があったという口コミも (2026年3月)。',
    vegan_detail: 'ヴィーガン不可: 乳を使うアイスとチーズケーキ (2026年の口コミ)。',
    notes: '[アイスクリームバー・御幸町、夜11時までの自家製アイス] ビル5階の薄暗くおしゃれな夜のカフェで、若い客が予約して来る。塩とオリーブオイル、いちごとローズマリー、花椒とクリームチーズなど変わった味の自家製アイスに、ワイン、ミード、ラテ。ワンドリンク制。テラスでは店員を呼びにくかったという声も (2026年6月)。毎日17時から。',
  });
}

// ================================================================ きはる
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030874/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '15:00'], ['17:30', '22:00']); const D = day(['17:30', '22:00']);
  put({
    id: 'kyoto_kiharu_yanaginobanba', name: 'きはる (Kiharu)', category: 'OMNI',
    lat: 35.002249, lng: 135.764231, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura and fries in every course, homemade hishio (a soy-type sauce) for sashimi and soy-grilled dishes (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led Kyoto cooking with dashi throughout (2021–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Thu, Sat, Sun 11:30–15:00 (last order 14:00) and 17:30–22:00 (last order 21:00); Wed and Fri dinner only; closed Tuesday. Reservations taken; a May 2026 reviewer says all seats are by reservation. 18 seats: 6 at the counter, 3 at a table downstairs and a private room upstairs for 4–8, one group a day. Non-smoking (smoking spot outside). Cards in the evening only; no e-money or QR. Down a long narrow passage off Yanaginobanba below Ayanokoji. Opened 22 May 2018 (Tabelog).',
    hours: { 0: LD, 2: D, 3: LD, 4: D, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yanaginobanba below Ayanokoji — 6–7 min walk from Shijo / Karasuma',
    cuisine: 'A hidden alley restaurant for Kyoto cooking, with a counter of small plates (mamezara) and a private room for kaiseki or hotpot courses (Tabelog; 2021–2026 reviews) · lunch about ¥3,400 (2022), ¥3,800 (May 2024), bento ¥4,300 (May 2026): sashimi, roast beef with white-sesame dressing, simmered dish, tempura, clay-pot rice with refills, homemade ice cream · mamezara course: dozens of bite-size dishes until you say stop — isaki sushi, hamo with bone broth, Akashi squid, ayu salt-grilled after you see it live, soy-grilled eggplant (June 2024; September 2026) · homemade hishio for sashimi; very rich homemade tofu; hamo shabu-shabu; tai chazuke (2022–2026) · sake by omakase, fruit liqueurs, fig soda (2022; 2026)',
    website: null, gmaps: gm('きはる 柳馬場綾小路'), menu_url: null,
    notes: '[Kyoto cooking · Yanaginobanba alley, small plates and homemade hishio] A tucked-away alley restaurant where a chatty counter serves a stream of tiny seasonal plates — hamo, Akashi squid, live-grilled ayu, rich homemade tofu — with house hishio for the sashimi, and good-value lunches with clay-pot rice. Booking needed; cards at night only. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 22 May 2018 (Tabelog). A September 2023 reviewer explains the name: one character from Kikuya in Miyagawa-cho, where the owner had worked, and the welcome "Kiharu" ("come in"). Reviewers since 2021 praise careful seasonal cooking, generous portions for the price and lively talk at the counter; one August 2026 diner found a tough piece in the fish tempura.',
      philosophy: null,
      specialty: 'Mamezara small plates; homemade hishio.',
      anecdotes: [
        { text: 'September 2022: "any leftovers could be made into onigiri (rice balls) to take home as a souvenir."', source: R + 'B454199411/' },
        { text: 'June 2024: "Salt-grilled sweetfish (we were shown live sweetfish before cooking!)."', source: R + 'B486285744/' },
        { text: 'April 2026: friends from Nara "jokingly said, \'Please guide us when we come again; we wouldn\'t be able to find it ourselves.\'"', source: R + 'B518909301/' },
      ],
      japanese_sources_summary: '食べログ: きはる、日本料理、下京区柳馬場綾小路下る永原町147-2、阪急烏丸駅から徒歩6分、月・木・土・日 11:30〜15:00 (L.O. 14:00)・17:30〜22:00 (L.O. 21:00)、水・金は夜のみ、火曜休み、予約可、18席 (カウンター6、テーブル3、2階の個室8)、個室は1日1組、禁煙 (店外に喫煙所)、カードは夜のみ、電子マネー・QR不可、2018年5月22日オープン、カウンターで豆皿料理、2階で会席や鍋のコース、法人会員。口コミ (2021年3月〜2026年9月、英語): 路地の奥の隠れ家、自家製のひしお、土鍋ご飯のおかわりと持ち帰りのおにぎり、昼3,400円 (2022年)・3,800円 (2024年)・弁当4,300円 (2026年5月)、鱧、明石のいか、目の前で見せる鮎の塩焼き、濃い自家製豆腐、鱧しゃぶ、鯛茶漬け、自家製アイス、日本酒のおまかせ、店名は宮川町の Kikuya から一字と「来はる」(2023年9月)、魚の天ぷらに硬い部分 (2026年8月)。',
      confidence: 'medium', sources: [TB, R + 'B436689723/', R + 'B444975625/', R + 'B453106340/', R + 'B454199411/', R + 'B458866185/', R + 'B471716499/', R + 'B484537534/', R + 'B486285744/', R + 'B518909301/', R + 'B528570826/', R + 'B534727739/', R + 'B536305991/'] },
    cultural_comfort: { level: 'japanese', note: 'Hidden alley; book ahead; cards at dinner only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区柳馬場綾小路下る永原町147-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002249, 135.764231); cross-checked: GSI 京都府京都市下京区永原町147番地 (lot) 34m; nearest pin kyoto_yasai_to_sakana_en 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B484537534/', R + 'B528570826/'],
    price_note: 'Lunch prices from 2022–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥3,800', 'Lunch', 'no', 'no', 'May 2024.', 'lunch_course'),
      it('', '', 'Lunch bento', '¥4,300', 'Lunch', 'no', 'no', 'May 2026.', 'lunch_bento'),
      it('', '', 'Mamezara small-plate course', null, 'Course', 'no', 'no', 'June 2024; September 2026.', 'mamezara_course'),
    ] }, {
    cuisine: '路地の奥の京料理の店で、カウンターでは豆皿料理、2階の個室では会席や鍋のコース (食べログ、2021〜2026年の口コミ)・昼は約3,400円 (2022年)、3,800円 (2024年5月)、弁当4,300円 (2026年5月): 刺身、白ごま和えとローストビーフ、炊き合わせ、天ぷら、おかわりできる土鍋ご飯、自家製アイス・豆皿のコース: 満腹まで続く一口の料理、いさきの寿司、鱧と骨のだし、明石のいか、目の前で見せてから焼く鮎の塩焼き、なすの醤油焼き (2024年6月、2026年9月)・刺身に自家製のひしお、濃い自家製豆腐、鱧しゃぶ、鯛茶漬け (2022〜2026年)・日本酒のおまかせ、果実酒、いちじくのソーダ (2022年、2026年)',
    neighborhood: '柳馬場綾小路下ル。四条・烏丸から徒歩6〜7分',
    gf_detail: 'グルテンフリーではない: どのコースにも天ぷらや揚げ物、刺身には自家製のひしお、醤油焼き (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚が中心の京料理で、だしを使う (2021〜2026年の口コミ)。',
    notes: '[京料理・柳馬場の路地、豆皿と自家製ひしお] 路地の奥に隠れた店で、にぎやかなカウンターに旬の小さな豆皿が次々と。鱧、明石のいか、目の前で焼く鮎、濃い自家製豆腐、刺身には自家製のひしお。昼は土鍋ご飯の付くお得なコース。要予約、カードは夜のみ。火曜休み。',
  });
}

// ================================================================ バー プレジャー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26025426/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://barpleasure.club/';
  const W = day(['18:00', '23:00']); const F = day(['18:00', '25:00']); const SA = day(['15:00', '25:00']); const SU = day(['15:00', '23:00']);
  put({
    id: 'kyoto_bar_pleasure_aburayacho', name: 'バー プレジャー (Bar Pleasure)', category: 'OMNI',
    lat: 35.00625, lng: 135.765237, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: cocktails and tequila may suit; the cover snacks are not described (Tabelog; 2016–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: cocktails, including non-alcoholic ones made to your taste (February 2025); snacks not described.',
    hours_raw: 'Tabelog: Tue–Thu 18:00–23:00; Fri 18:00–01:00; Sat 15:00–01:00; Sun and holidays 15:00–23:00; closed Monday (Tuesday if Monday is a holiday). Reservations taken; private hire up to 20; event nights sometimes fill it (March 2019). Charge ¥300 with snacks; stays over an hour need another order — Tabelog, Japanese original 「チャージ料￥300（スナック付き） 1時間以上の滞在の場合、追加オーダーを頂戴します。」. 20 seats (12 counter, 8 table) and standing room. Smoking allowed. English menu; projector; free Wi-Fi. Cards; no e-money. 3rd floor of 洋燈館ビル. Opened 19 April 2012 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: F, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Aburaya-cho, Nakagyo — 10 min walk from Kyoto-Kawaramachi',
    cuisine: 'A music bar devoted to B\'z: their songs and live videos play all night and the cocktails are named after their songs (2016–2025 reviews) · song-titled cocktails, e.g. "Giri Giri chop" (white wine and muscat) and "Love Me, I Love You" (gin and muscat), from ¥800 plus 10% service and tax (February 2016) · a HINOTORI cocktail; a fixed-price first drink with retro snacks, about ¥1,500 (March 2019) · original cocktails, alcoholic or not, made to your taste; tequila from a certified tequila maestro (December 2023; February 2025)',
    website: SITE, gmaps: gm('Bar Pleasure 洋燈館ビル 京都'), menu_url: null,
    notes: '[B\'z music bar · Aburaya-cho, songs, videos and cocktails by title] A third-floor bar for fans of the rock duo B\'z — their music and concert videos all night, merchandise on the walls and cocktails named after their songs, mixed by a master who will also make anything (alcohol-free too) to your taste. ¥300 cover with snacks. Smoking allowed. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner-bartender (unnamed)'], origin: null,
      background: 'Opened 19 April 2012 (Tabelog). Reviewers since 2016 describe a "second hometown for B\'z fans" (May 2017) where strangers bond over the band; the master holds a tequila certification (December 2023) and makes original cocktails, including non-alcoholic ones, from a described flavour or mood (February 2025). One February 2016 reviewer found the drinks heavy on ice for the price.',
      philosophy: null,
      specialty: 'B\'z-titled cocktails.',
      anecdotes: [
        { text: 'February 2025: "I left my drink choice to the master and opted for something refreshing… he can create original cocktails (including non-alcoholic options) based on the flavors I describe."', source: R + 'B138098359/' },
        { text: 'May 2017: "This place is like a second hometown for B\'z fans! It\'s the perfect spot to quickly make friends with fellow fans inside the bar."', source: R + 'B267904410/' },
      ],
      japanese_sources_summary: '食べログ: バー プレジャー、バー・ワインバー・ダイニングバー、中京区油屋町145 洋燈館ビル 3F、阪急河原町駅から徒歩10分、火〜木 18:00〜23:00、金 18:00〜翌1:00、土 15:00〜翌1:00、日祝 15:00〜23:00、月曜休み (祝日なら翌日)、予約可、貸切20名まで、原文で「チャージ料￥300（スナック付き） 1時間以上の滞在の場合、追加オーダーを頂戴します。」、20席 (カウンター12、テーブル8)、立ち飲み、喫煙可、英語メニュー、プロジェクター、カード可、電子マネー不可、2012年4月19日オープン、法人会員。口コミ (2016年2月〜2025年11月、英語): B\'z のバー、曲とライブ映像、グッズ、曲名のカクテル (800円から、サービス料10%と税、2016年)、HINOTORI カクテル、1杯目は定額で駄菓子付き (2019年)、テキーラの資格を持つマスター、好みで作るオリジナルカクテルとノンアルコール、氷が多いという声 (2016年)。',
      confidence: 'medium', sources: [TB, SITE, R + 'B138098359/', R + 'B143402408/', R + 'B267904410/', R + 'B413190306/', R + 'B452720006/', R + 'B476571563/'] },
    cultural_comfort: { level: 'english', note: 'English menu; fan bar for B\'z; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区油屋町145 洋燈館ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog corporate-member listing with visits dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.006282, 135.765276), offset 5m south-west because kyoto_cantina_arco (same 洋燈館 building, 1F) sits 4.4m from the Tabelog point — now 6.3m from it; cross-checked: GSI 京都府京都市中京区油屋町145番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B143402408/', R + 'B413190306/'],
    price_note: 'Old prices only (2016; 2019); ¥300 cover with snacks (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Cocktail named after a B\'z song', '¥800+', 'Cocktail', 'ask', 'ask', 'February 2016; plus 10% service and tax then.', 'themed_cocktail'),
      it('', '', 'Original cocktail or non-alcoholic drink to your taste', null, 'Cocktail', 'ask', 'ask', 'February 2025.', 'custom_cocktail'),
    ] }, {
    cuisine: 'B\'z 一色の音楽バーで、一晩中曲とライブ映像が流れ、カクテルは曲名 (2016〜2025年の口コミ)・曲名のカクテル、たとえば「ギリギリchop」(白ワインとマスカット)、「Love Me, I Love You」(ジンとマスカット)、800円から、サービス料10%と税 (2016年2月)・HINOTORI カクテル、1杯目は定額で懐かしい駄菓子付き、約1,500円 (2019年3月)・好みで作るオリジナルカクテル、ノンアルコールも、テキーラの資格を持つマスターのテキーラ (2023年12月、2025年2月)',
    neighborhood: '中京区油屋町。京都河原町駅から徒歩10分',
    gf_detail: '要確認: カクテルやテキーラは合うかもしれないが、チャージのスナックは書かれていない (食べログ、2016〜2025年の口コミ)。',
    vegan_detail: '要確認: カクテル、好みで作るノンアルコールも (2025年2月)。スナックは書かれていない。',
    notes: '[B\'z の音楽バー・油屋町、曲と映像と曲名のカクテル] ロックデュオ B\'z のファンのための3階のバー。一晩中流れる曲とライブ映像、壁のグッズ、曲名のカクテル。マスターは好みに合わせてノンアルコールも作る。チャージ300円 (スナック付き)。喫煙可。月曜休み。',
  });
}

save();
