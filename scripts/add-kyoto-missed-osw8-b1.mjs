// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 1.
//   + イグレック Ygrec (couple-run European-style curry upstairs on Nishi-Kiyamachi; core list)
//   + 高瀬川 槇 Takasegawa Maki (Uwajima-style tai-meshi in a townhouse on the Takase River; core list)
//   + 日本料理 とくを Japanese cuisine Tokuo (Kiyamachi kappo of Shinji Tokuo, Tabelog Bronze 2017–2021; notable list)
//   + 鳥かご Tori Kago (8-seat yakitori counter by Shijo Omiya, run alone by a former Torisaki cook; notable list)
//   Picked 2026-11-05 from `queue.mjs kyoto-missed next core 200` (イグレック 26016205, 高瀬川 槇 26032291: the first two
//   lane-1 ids) and `next notable 200` (日本料理 とくを 26004751, 鳥かご 26039593: the first two lane-1 ids not already taken).
//   None is in data/kyoto.json: grep by name (イグレック/Ygrec, 槇/Maki, 鯛めし/taimeshi, とくを/Tokuo, 鳥かご/Torikago)
//   and address (真町455, 市之町240, 天王町151, 壬生坊城町8-24; 衣笠馬場町 and 東側町534 for Maki's sister shops) found none.
//   Group check (working line): 槇 has four shops on its own site (高瀬川 槇, 鯛めし槇 金閣寺店, 鯛めし槇 松山店, 京都寺町
//   鯛めし槇), none in data — a small group, so drafted.
//   Pins: Ygrec's Tabelog point sits 3 m from kyr_aji_no_tentoku_kyoto_shi (same 真町 block), so it is moved ~3 m west.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ イグレック
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26016205/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['16:30', '23:00']);
  put({
    id: 'kyoto_ygrec', name: 'イグレック (Ygrec)', category: 'OMNI',
    lat: 35.004364, lng: 135.770190, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Three curries (vegetable, beef, small shrimp) in a smooth European-style sauce; some of the vegetables come deep-fried; no ingredient or gluten information is published (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The vegetable curry carries about ten kinds of vegetables, but what goes into the curry sauce is not published (2024–2026 reviews).',
    hours_raw: 'Tuesday to Sunday 11:30–14:00 and 16:30–23:00; closed Monday, but open on Mondays that are public holidays (Tabelog; a July 2026 review gives the same hours). No reservations (Tabelog; July 2026). 12 seats at the counter and tables; non-smoking; cards (JCB, AMEX, Diners) accepted, no e-money or QR (Tabelog). Second floor, up an outside staircase (October 2024). 2 min walk from Kyoto-Kawaramachi Stn (Hankyu) (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Kiyamachi just north of Shijo, by the river — 2 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'European-style curry with three choices — vegetable, beef and small shrimp — plus a few soups and appetisers (July 2026) · vegetable curry ¥1,400 (August 2026): about ten kinds of seasonal vegetables, raw, pickled, grilled, steamed and deep-fried, over the sauce (2024–2026 reviews) · small shrimp curry ¥1,400 and homemade seasonal soup (corn) ¥600 (July 2026) · pickled cabbage and diced raw yam on the side (April 2025) · wine, with a sommelier on hand (Tabelog)',
    website: null, gmaps: gm('イグレック 京都 西木屋町'), menu_url: null,
    notes: "[Curry · Shijo Kiyamachi, a couple's upstairs curry room] A retro curry shop up an outside staircase on the second floor of an old building by the river, run by a couple, with big windows. There are three curries — vegetable, beef and small shrimp — in a smooth, mild European-style sauce whose spice comes through late; the vegetable curry (¥1,400) is the one to order, heaped with about ten kinds of seasonal vegetables cooked several ways. Not fast, but the water is refilled and you are seen off warmly. No reservations; 11:30–14:00 and 16:30–23:00, closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed in the sources)'], origin: null,
      background: 'Reviews from 2024 to 2026 describe the shop as run by a couple; an October 2024 review calls the owners an elderly couple. A December 2024 review says the curry is "prepared by a French chef". A February 2025 review notes a signed photo of the composer Katsuo Ohno, received by the owner, on display. An April 2025 review describes the building as one with tree roots growing out of it.',
      philosophy: null, specialty: 'Vegetable curry.',
      anecdotes: [
        { text: '"The owners are an elderly couple, so you shouldn’t expect a fast service; however, they kindly refill your water and offer warm farewells as you leave" — October 2024.', source: R + 'B493886201/' },
        { text: '"It had been about two years since my last visit. I was glad to see the owner couple looking well." — August 2026.', source: R + 'B483986000/' },
        { text: '"As I passed by the mysterious building with tree roots protruding from it, I was drawn in by the enticing aroma of curry." — April 2025.', source: R + 'B504358404/' },
        { text: '"I also enjoyed chatting with the owner, making it a great recommendation for solo lunches too!" — July 2026.', source: R + 'B534912399/' },
      ],
      japanese_sources_summary: '食べログ: カレー、下京区西木屋町四条上ル真町455、阪急河原町駅から徒歩2分、火〜日 11:30〜14:00・16:30〜23:00、月曜休み (祝日の月曜は営業)、予約不可、12席 (カウンターとテーブル)、カード可 (JCB、AMEX、Diners)、電子マネー・QR 不可、禁煙、ソムリエがいる、ワイン。口コミ (2024年4月〜2026年8月、英語): 夫婦で営む、ビルの2階で外階段から入る、野菜カレー1,400円 (10種ほどの野菜、生・漬け・揚げ)、小海老カレー1,400円、季節のスープ (コーン) 600円、牛肉カレー、欧風カレー、キャベツの漬物と山芋、Katsuo Ohno のサイン写真、木の根が出た建物。',
      confidence: 'medium', sources: [TB, R + 'B483986000/', R + 'B484964806/', R + 'B485693416/', R + 'B493886201/', R + 'B498149474/', R + 'B501924282/', R + 'B504358404/', R + 'B532061196/', R + 'B533149148/', R + 'B534912399/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Three curries to choose from; no reservations; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区西木屋町四条上ル真町455',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004364, 135.770226), moved ~3 m west because kyr_aji_no_tentoku_kyoto_shi (35.004364, 135.770262) sits 3 m from that point; GSI matches only the town 京都府京都市下京区真町 (town) 76 m away (GSI only this round, no OSM); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B483986000/', R + 'B532061196/'],
    price_note: 'No menu read; prices from July–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Vegetable curry', '¥1,400', 'Curry', 'ask', 'ask', 'August 2026.', 'vegetable_curry'),
      it('', '', 'Small shrimp curry', '¥1,400', 'Curry', 'ask', 'no', 'July 2026.', 'shrimp_curry'),
      it('', '', 'Beef curry', '', 'Curry', 'ask', 'no', '', 'beef_curry'),
      it('', '', 'Homemade seasonal soup (corn)', '¥600', 'Soup', 'ask', 'ask', 'July 2026.', 'seasonal_soup'),
    ] }, {
    cuisine: '野菜、牛肉、小海老の3種から選ぶ欧風カレー。スープと前菜も少し (2026年7月)・野菜カレー1,400円 (2026年8月): 季節の野菜10種ほどを生、漬け、焼き、蒸し、揚げでのせる (2024〜2026年の口コミ)・小海老カレー1,400円、自家製の季節のスープ (コーン) 600円 (2026年7月)・付け合わせにキャベツの漬物と刻んだ生の山芋 (2025年4月)・ワイン、ソムリエがいる (食べログ)',
    neighborhood: '四条のすぐ北の西木屋町、川沿い。京都河原町駅から徒歩2分',
    gf_detail: '要確認。野菜、牛肉、小海老の3種のカレーで、なめらかな欧風のルー。野菜の一部は揚げてある。原材料やグルテンの情報は公開されていない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。野菜カレーには10種ほどの野菜がのるが、カレーのルーの中身は公開されていない (2024〜2026年の口コミ)。',
    notes: '[カレー・四条木屋町、夫婦の2階のカレー屋] 川沿いの古いビルの2階、外階段を上がるレトロなカレー屋で、夫婦で営む。大きな窓のある店内。カレーは野菜、牛肉、小海老の3種で、なめらかでまろやかな欧風、あとからスパイスが来る。頼むなら野菜カレー (1,400円)。季節の野菜10種ほどをいろいろな調理でたっぷりのせる。提供は速くないが、水を注ぎ足し、帰りは温かく見送ってくれる。予約不可。11時半〜14時、16時半〜23時、月曜休み。',
  });
}

// ================================================================ 高瀬川 槇
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26032291/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://taimeshi-maki.com/';
  const H = day(['11:30', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_takasegawa_maki', name: '高瀬川 槇 (Takasegawa Maki)', category: 'MOM_AND_POP',
    lat: 35.002167, lng: 135.769871, cuisine_type: 'donburi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the sea bream is eaten with the house-made dashi soy sauce (soy sauce is normally brewed with wheat), and the miso soup is made with Ehime barley miso (official site; Tabelog shop text; July 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the menu is built on raw sea bream, dashi and egg yolk; the courses add fish, abalone and shellfish (official site; 2026 reviews).',
    hours_raw: 'Lunch 11:30–14:00, until the sea bream runs out; dinner 18:00–21:00; closed irregularly (official site; Tabelog). Courses, lunch or dinner, must be booked by 18:00 two days before (official site); the lunch course allows 1 hour 30 minutes (official site). Tabelog says reservations are taken for groups of 10 or more, yet also sets rules for lunch bookings, and 2026 reviewers booked lunch for one or two; a May 2026 weekday walk-in was seated at once. Over 10 minutes late and the table may go to those waiting (Tabelog). 14 seats (4 counter, 10 table); non-smoking; cards (VISA, Master, JCB, AMEX, Diners) accepted, no e-money or QR; children welcome (Tabelog). The restroom is outside (July 2026). 3 min walk from Kyoto-Kawaramachi Stn, 4 min from Gion-Shijo Stn (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Back street on the Takase River south of Shijo — 3 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'Uwajima-style tai-meshi from Ehime, made by a couple from Uwajima (official site): raw sea bream sashimi over rice with the house dashi soy sauce and an egg yolk, rather than rice cooked with the fish · lunch gozen: tai-meshi gozen ¥2,200, double sea bream ¥2,860, triple ¥3,520, with salmon roe ¥2,860, with sea urchin ¥3,000, sea urchin and salmon roe ¥3,660, with grated yam ¥2,530; the same as a jubako box from ¥2,200 (official site) · the gozen comes with simmered greens and white miso soup (August 2026) · lunch tai-meshi course in a clay pot ¥6,600 (6 dishes); abalone clay-pot rice and abalone ramen course ¥8,800 (Tabelog); dinner course ¥16,500 (official site) · rice from Kumakogen, Ehime, grown with reduced pesticides at 800 m; Shimanto River water for all cooking; barley miso (official site) · the okami’s brother’s mikan juice from Uwajima, ¥715 (July 2026), also as a chuhai; draft beer and sake (official site; 2026 reviews)',
    website: SITE, gmaps: gm('高瀬川 槇 京都'), menu_url: SITE,
    notes: "[Tai-meshi · Kawaramachi, Uwajima's sea bream rice by the Takase River] A townhouse restaurant down a back street on the Takase River, past a small inner garden, where a couple from Uwajima in Ehime serve their home town's tai-meshi: thin slices of raw sea bream in the house dashi soy sauce, eaten first as sashimi, then over rice, then with an egg yolk on top. Lunch gozen from ¥2,200 (double sea bream ¥2,860), served until the fish runs out; the mikan juice is pressed from the okami's brother's Uwajima orchard. Courses (¥6,600 lunch, ¥16,500 dinner) need booking two days ahead. One August 2026 reviewer found the taste simple, like a basic egg over rice.",
    chef_bio: { chef_name: 'Makino', roles: ['Chef (the shop’s Tabelog text: "Enjoy the culinary world crafted by Chef Makino")'], origin: 'Uwajima, Ehime (Tabelog shop text: "Tai Meshi from Uwajima, made by a chef from Uwajima"; official site: a couple from Uwajima runs the shop)',
      background: 'Per the official site: "宇和島出身の夫婦が手掛ける" (run by a couple from Uwajima); the mikan juice is made only for Maki by the okami’s brother in Uwajima; the group has three shops in Kyoto (高瀬川 槇, 鯛めし槇 金閣寺店, 京都寺町 鯛めし槇) and one in Ehime (鯛めし槇 松山店); TV appearances include Kansai TV "よーいドン！" (June 2023) for this shop. The shop’s Tabelog text: a building with the feel of the Edo period and an inner garden, low-pesticide ingredients and few additives, Uwajima’s local cooking combined with past experience. Opened 23 June 2019 (Tabelog).',
      philosophy: 'Per the shop’s Tabelog text: "food" is made of "people" and "goodness", so the kitchen aims for dishes that are kind to the body.',
      specialty: 'Uwajima tai-meshi; tai-meshi courses with clay-pot rice.',
      anecdotes: [
        { text: '"Upon entering and taking my seat, the owner greeted me by name, which was a lovely touch." The reviewer’s wife does not eat squid, and the course dish was changed to taro at the last minute. — November 2026.', source: R + 'B538630126/' },
        { text: '"The sea bream is served until it runs out, so if you definitely want to try it, I recommend arriving early." The same reviewer found the flavour "quite simple, resembling a basic egg over rice". — August 2026.', source: R + 'B534344775/' },
        { text: '"This rich mikan juice is freshly squeezed from the mikan orchard of the owner\'s brother in Uwajima City, Ehime Prefecture, and is not available for sale anywhere else." — July 2026.', source: R + 'B531645438/' },
        { text: '"You can also add more for an extra JPY 660, so you can place an additional order during your meal." — March 2026.', source: R + 'B523930713/' },
      ],
      japanese_sources_summary: '公式サイト (taimeshi-maki.com): 宇和島出身の夫婦が手掛ける「本場の宇和島鯛めし」、生の鯛のお刺身に自家製だし醤油と卵黄で食べる「真鯛の入った贅沢な玉子かけご飯」、来島海峡の真鯛 (2キロ前後、神経締め、産地は変わる場合あり)、カウンター4席・テーブル10席、昼の鯛めしコース6,600円 (全6品、1時間30分まで)、鯛めし御膳2,200円・倍盛2,860円・3倍盛3,520円・いくら2,860円・雲丹3,000円・雲丹いくら3,660円・とろろ2,530円、鯛めし重2,200円〜、夜の16,500円コース、愛媛県久万高原町産の減農薬米、土鍋、四万十川天然水、麦みそ、女将の兄 (愛媛県宇和島市) が槇の為だけに作る「兄貴のこだわりみかんジュース」(酎ハイも)、昼11:30〜14:00 (鯛が無くなり次第終了)・夜18:00〜、コースは2日前の18時までの予約制、不定休、系列店: 鯛めし槇 金閣寺店、鯛めし槇 松山店、京都寺町 鯛めし槇。食べログ: 日本料理・海鮮・海鮮丼、下京区市之町240-2、毎日11:30〜14:00・18:00〜21:00、不定休、予約は10名以上 (ランチ予約の注意書きあり)、14席、カード可、禁煙、子供可、サービス料なし、2019年6月23日オープン、Chef Makino。口コミ (2026年3〜11月、英語): 鯛めし御膳、刺身・だし茶漬け・卵黄の3通りの食べ方、みかんジュース715円、外のトイレ、名前で迎えてくれた、イカを里芋に替えてくれた。',
      confidence: 'medium', sources: [TB, SITE, R + 'B523930713/', R + 'B530801582/', R + 'B531543068/', R + 'B531645438/', R + 'B532373364/', R + 'B533197518/', R + 'B533753890/', R + 'B534344775/', R + 'B536175673/', R + 'B538630126/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain how to eat the tai-meshi; book courses two days ahead; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区市之町240-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing (staff-maintained); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002167, 135.769871); cross-checked: GSI 京都府京都市下京区市之町240番地 (lot) 9 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB],
    price_note: 'Official site menu (undated, tax included); juice price from a July 2026 review.', last_checked: TODAY, items: [
      it('鯛めし御膳', '', 'Tai-meshi gozen (sea bream sashimi, dashi soy sauce, egg yolk, rice)', '¥2,200', 'Lunch gozen', 'no', 'no', '', 'taimeshi_gozen'),
      it('倍盛鯛めし御膳', '', 'Tai-meshi gozen, double sea bream', '¥2,860', 'Lunch gozen', 'no', 'no', '', 'taimeshi_gozen_double'),
      it('3倍盛鯛めし御膳', '', 'Tai-meshi gozen, triple sea bream', '¥3,520', 'Lunch gozen', 'no', 'no', '', 'taimeshi_gozen_triple'),
      it('雲丹いくら鯛めし御膳', '', 'Tai-meshi gozen with sea urchin and salmon roe', '¥3,660', 'Lunch gozen', 'no', 'no', '', 'taimeshi_gozen_uni_ikura'),
      it('鯛めし重', '', 'Tai-meshi in a jubako box', '¥2,200', 'Lunch box', 'no', 'no', '', 'taimeshi_ju'),
      it('お昼の鯛めしコース', '', 'Lunch tai-meshi course with clay-pot rice (6 dishes)', '¥6,600', 'Course', 'no', 'no', 'Book by 18:00 two days ahead.', 'lunch_course'),
      it('16,500円コース', '', 'Dinner course', '¥16,500', 'Course', 'no', 'no', 'Book by 18:00 two days ahead.', 'dinner_course'),
      it('兄貴のこだわりみかんジュース', '', 'Mikan juice from the okami’s brother’s Uwajima orchard', '¥715', 'Drinks', '', '', 'July 2026 price.', 'mikan_juice'),
    ] }, {
    cuisine: '宇和島出身の夫婦が手掛ける愛媛の宇和島鯛めし (公式サイト): 炊き込みではなく、生の鯛の刺身を自家製だし醤油と卵黄でご飯にのせる・昼の御膳: 鯛めし御膳2,200円、倍盛2,860円、3倍盛3,520円、いくら2,860円、雲丹3,000円、雲丹いくら3,660円、とろろ2,530円、同じく鯛めし重2,200円から (公式サイト)・御膳には青菜の煮浸しと白味噌の味噌汁 (2026年8月)・昼の土鍋の鯛めしコース6,600円 (6品)、鮑の土鍋ご飯と鮑ラーメンのコース8,800円 (食べログ)、夜のコース16,500円 (公式サイト)・米は愛媛県久万高原町の標高800mの減農薬米、料理全般に四万十川天然水、麦みそ (公式サイト)・女将の兄の宇和島のみかんジュース715円 (2026年7月)、酎ハイにも。生ビール、日本酒 (公式サイト、2026年の口コミ)',
    neighborhood: '四条の南、高瀬川沿いの路地。京都河原町駅から徒歩3分',
    gf_detail: '実際にはグルテンフリーではない。鯛は自家製のだし醤油で食べ (醤油はふつう小麦を使って造る)、味噌汁は愛媛の麦みそ (公式サイト、食べログの店舗紹介、2026年7月の口コミ)。',
    vegan_detail: 'ヴィーガン不可。生の鯛、だし、卵黄が中心で、コースには魚、鮑、貝も入る (公式サイト、2026年の口コミ)。',
    notes: '[鯛めし・河原町、高瀬川沿いの宇和島鯛めし] 高瀬川沿いの路地、坪庭の奥の町家で、愛媛の宇和島出身の夫婦が故郷の鯛めしを出す。薄く切った生の鯛を自家製のだし醤油に浸し、まず刺身で、次にご飯にのせて、最後に卵黄をのせて食べる。昼の御膳は2,200円から (倍盛2,860円)、鯛がなくなり次第終了。みかんジュースは女将の兄の宇和島の畑のもの。コース (昼6,600円、夜16,500円) は2日前までに予約。2026年8月の客は、味はシンプルで普通の卵かけご飯に近いと書いている。',
  });
}

// ================================================================ 日本料理 とくを
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26004751/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://tokuwo.com/'; const MENU = SITE + 'menu/index.html'; const ABOUT = SITE + 'aboutus/index.html';
  const STAFF = SITE + 'staff/index.html'; const DRINK = SITE + 'drink/index.html'; const NOTICE = SITE + 'notice/index.html';
  const L = ['12:00', '14:00'], D = ['18:00', '22:00'];
  put({
    id: 'kyoto_nihon_ryori_tokuo', name: '日本料理 とくを (Japanese cuisine Tokuo)', category: 'MOM_AND_POP',
    lat: 35.001294, lng: 135.769664, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase courses of sashimi, dashi soups, soft-shelled turtle chawanmushi, Saikyo-miso grilled fish, tempura and breadcrumbed fries, with soy- and miso-based seasonings throughout; no gluten information (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the courses are built on fish, dashi, soft-shelled turtle and wagyu (official site; 2026 reviews).',
    hours_raw: 'Lunch 12:00–14:00 (last entry 12:30), Wednesday to Saturday; dinner 18:00–22:00 (last entry 20:00), Tuesday to Saturday; no lunch on Tuesday; closed Sunday and Monday (official site; Tabelog). Lunch must be booked by the day before; for dinner, same-day calls are welcome as seats are sometimes free, and solo diners are welcome (official site). Booking through Tabelog is possible (February 2026). A 10% service charge from 1 February 2026 (official site). 16 seats: a 10-seat counter and a private table room for up to 6; non-smoking; cards (VISA, Master, JCB, AMEX, Diners) accepted, no e-money or QR (Tabelog). An April 2026 reviewer wrote that the shop "generally does not accept reservations from inbound tourists". 5 min walk from Kawaramachi Stn (Hankyu) and from Shijo Stn (Keihan) (official site; Tabelog).',
    hours: { 1: [D], 2: [L, D], 3: [L, D], 4: [L, D], 5: [L, D] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-dori north of Bukkoji, by the Takase River — 5 min walk from Kawaramachi Stn',
    cuisine: 'Kappo-style Japanese cooking from ingredients the owner-chef buys every morning, as courses or, at the counter, à la carte (official site; Tabelog) · lunch omakase ¥10,800 with tax and service (11 dishes), lunch short course ¥8,400 (8 dishes); dinner omakase ¥24,000 (13 dishes), dinner short course ¥16,200 (9 dishes) (official site, prices from 1 February 2026) · signature dishes: marunabe (soft-shelled turtle hot pot) and wagyu grilled slowly over charcoal (Tabelog shop text) · a lunch course in August 2026: fish-stock jelly, seasonal ohitashi, hamo, bluefin tuna, chawanmushi, breadcrumbed fries, karasumi daikon, Saikyo-yaki, grilled nama-fu, uzaku, simmered kinmedai, rice with chirimen sansho · homemade karasumi and warabi mochi (2026 reviews) · sake from Kyoto, Fukui, Niigata and beyond; Swiss and Bulgarian wines, Kenzo Estate wines, shochu, fruit liqueurs (official site)',
    website: SITE, gmaps: gm('日本料理 とくを 京都 木屋町'), menu_url: MENU,
    notes: "[Kappo · Kiyamachi, Shinji Tokuo's counter] A Kiyamachi kappo by the Takase River, open since 2005, where Shinji Tokuo buys at the market each morning and cooks without show: \"food you never tire of\", in the shop's words. Sit at the polished zelkova counter for omakase courses — lunch ¥10,800, dinner ¥24,000, tax and service included — of sashimi, soft-shelled turtle chawanmushi, wasabi wagyu steak, homemade karasumi with daikon and Saikyo-miso fish; marunabe turtle hot pot is the house dish. Reviewers praise the warm welcome from the chef, the proprietress and the young staff. Tabelog Bronze 2017–2021. Lunch Wed–Sat, dinner Tue–Sat; book lunch a day ahead. One April 2026 reviewer wrote that the shop generally does not take bookings from inbound tourists.",
    chef_bio: { chef_name: 'Shinji Tokuo (徳尾真次)', roles: ['Owner-chef'], origin: 'Kyoto Prefecture (official staff page)',
      background: 'Per the official site: 日本料理とくを marked its 21st anniversary on 11 February 2026; the staff page lists 徳尾 真次 (born 19 January, from Kyoto Prefecture, hobbies travel and playing in a band) and four more staff, from Fukuoka and Amami Ōshima (Kagoshima); "私も含め、スタッフも若い者ばかりです" (the owner and the staff are all young). Tabelog’s shop text names the chef as Shinji Tokuo and says the owner goes to the market every morning. An April 2026 regular describes the head chef as "sometimes a band member, sometimes a horse owner, and sometimes a loving traveler", says the shop has been run with the proprietress for over 20 years, and that it serves black soybeans and young Tsukahara bamboo shoots year after year. Tabelog Award Bronze 2017–2021; Tabelog Japanese cuisine WEST "Tabelog 100" 2021.',
      philosophy: 'Per the official site: dishes that make the most of the ingredients bought every day, handled lightly — no showy effects, but food you never tire of; Japanese cuisine to be enjoyed more casually.',
      specialty: 'Marunabe (soft-shelled turtle hot pot); charcoal-grilled wagyu; karasumi daikon.',
      anecdotes: [
        { text: 'An April 2026 regular wrote that "Tokuo generally does not accept reservations from inbound tourists", and that the lunch course at ¥10,800 including tax and service has no match nearby.', source: R + 'B27625419/' },
        { text: '"I made a reservation around 9 PM the day before, and they were very kind in their response." — May 2026.', source: R + 'B527744806/' },
        { text: '"Despite the refined Japanese ambiance, the warm welcome from the owner, Shinji Tokuo, and the staff made it feel very comfortable." — August 2026.', source: R + 'B534044637/' },
        { text: '"The warm welcome from the head chef, the proprietress, and the staff creates a cozy, home-like atmosphere" — September 2026 (a 14th visit).', source: R + 'B441023833/' },
      ],
      japanese_sources_summary: '公式サイト (tokuwo.com): 下京区木屋町通り仏光寺上る天王町151、2026年2月11日で21周年、2026年2月1日からサービス料10%、定休日は日曜・月曜、火曜のランチは休み、12:00〜14:00 (最終入店12:30)・18:00〜22:00 (最終入店20:00)、お昼は前日までに予約、当日の電話も可、お一人様歓迎、カウンター10席とテーブル個室 (最大6名)、私が毎日仕入れる食材、派手な演出はないが食べ飽きない料理、お昼のおまかせコース9,000円 (税サ込10,800円、11品)、お昼のショートコース7,000円 (税サ込8,400円、8品)、とくをのおまかせコース20,000円 (税サ込24,000円、13品)、ショートコース13,500円 (税サ込16,200円、9品)、カウンターではアラカルト (約20%値上げ)、スタッフ: 徳尾 真次 (1月19日生まれ、京都府出身、趣味は旅行とバンド) ほか4名、日本酒、焼酎、果実酒、スイスワイン、ブルガリアワイン、ケンゾーエステイト。食べログ: 日本料理、天王町151、Tabelog Award Bronze 2017〜2021、日本料理 WEST 百名店 2021、16席、個室あり、カード可、禁煙、Chef Shinji Tokuo、名物の丸鍋 (すっぽん)、和牛の炭火焼き。口コミ (2026年2〜10月、英語): おまかせコース、すっぽんの茶碗蒸し、カラスミ大根、うざく、西京焼き、わらび餅、欅のカウンター、女将、インバウンドの予約は基本的に受けない (2026年4月の口コミ)。',
      confidence: 'medium', sources: [TB, SITE, MENU, ABOUT, STAFF, DRINK, NOTICE, R + 'B135185849/', R + 'B259258951/', R + 'B27625419/', R + 'B437692846/', R + 'B441023833/', R + 'B522405076/', R + 'B522712777/', R + 'B525359525/', R + 'B525617675/', R + 'B527744806/', R + 'B531021818/', R + 'B531990885/', R + 'B534044637/', R + 'B534767140/', R + 'B537487482/'] },
    cultural_comfort: { level: 'japanese', note: 'Counter kappo with conversation; book by phone or Tabelog (lunch by the day before). An April 2026 review says inbound tourists are generally not booked.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通り仏光寺上る天王町151',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (2026 notices) and Tabelog listing (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001294, 135.769664); cross-checked: GSI 京都府京都市下京区天王町151番地 (lot) 10 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official site menu, prices from 1 February 2026; tax and 10% service included in the prices shown.', last_checked: TODAY, items: [
      it('お昼のおまかせコース', '', 'Lunch omakase course (11 dishes)', '¥10,800', 'Lunch course', 'ask', 'no', '¥9,000 before tax and service.', 'lunch_omakase'),
      it('お昼のショートコース', '', 'Lunch short course (8 dishes)', '¥8,400', 'Lunch course', 'ask', 'no', '¥7,000 before tax and service.', 'lunch_short'),
      it('とくをのおまかせコース', '', 'Tokuo omakase course (13 dishes)', '¥24,000', 'Dinner course', 'ask', 'no', '¥20,000 before tax and service.', 'dinner_omakase'),
      it('とくをのショートコース', '', 'Tokuo short course (9 dishes)', '¥16,200', 'Dinner course', 'ask', 'no', '¥13,500 before tax and service.', 'dinner_short'),
    ] }, {
    cuisine: '店主が毎朝仕入れる食材の割烹料理。コースのほか、カウンターではアラカルトも (公式サイト、食べログ)・お昼のおまかせコース税サ込10,800円 (11品)、お昼のショートコース8,400円 (8品)、夜のおまかせコース24,000円 (13品)、夜のショートコース16,200円 (9品) (公式サイト、2026年2月1日からの価格)・名物はすっぽんの丸鍋と和牛の低温炭火焼き (食べログの店舗紹介)・2026年8月の昼のコース: 煮こごり、季節のおひたし、鱧、本まぐろ、茶碗蒸し、パン粉の揚げ物、カラスミ大根、西京焼き、焼き生麩、うざく、金目鯛の煮付け、ちりめん山椒のご飯・自家製のカラスミとわらび餅 (2026年の口コミ)・京都、福井、新潟などの日本酒、スイスとブルガリアのワイン、ケンゾーエステイトのワイン、焼酎、果実酒 (公式サイト)',
    neighborhood: '仏光寺の北の木屋町通、高瀬川沿い。河原町駅から徒歩5分',
    gf_detail: '要確認。刺身、だしの椀、すっぽんの茶碗蒸し、西京焼き、天ぷら、パン粉の揚げ物のおまかせコースで、醤油や味噌の味付けが多い。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。コースは魚、だし、すっぽん、和牛が中心 (公式サイト、2026年の口コミ)。',
    notes: '[割烹・木屋町、徳尾真次のカウンター] 高瀬川沿いの木屋町で2005年から続く割烹。徳尾真次が毎朝市場で仕入れ、派手な演出なしに、店の言葉で言えば「食べ飽きない料理」を作る。磨かれた欅のカウンターで、おまかせコース (昼10,800円、夜24,000円、税サ込) の刺身、すっぽんの茶碗蒸し、わさびで食べる和牛ステーキ、自家製カラスミ大根、西京焼きなど。店の名物はすっぽんの丸鍋。大将、女将、若いスタッフの温かいもてなしが口コミで評判。Tabelog Award Bronze 2017〜2021。昼は水〜土、夜は火〜土。昼は前日までに予約。2026年4月の客は、インバウンドの客の予約は基本的に受けていないと書いている。',
  });
}

// ================================================================ 鳥かご
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26039593/'; const R = TB + 'dtlrvwlst/';
  const IG = 'https://www.instagram.com/torikago.kyoto/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_torikago', name: '鳥かご (Tori Kago)', category: 'MOM_AND_POP',
    lat: 35.004448, lng: 135.747082, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers come with salt or sauce; the course ends with a rice dish (oyakodon, tsukune rice bowl or takikomi gohan, varying by day); no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an all-chicken skewer course with chicken soup; the few vegetable skewers (shiitake, corn, eggplant) come within it (2026 reviews).',
    hours_raw: '17:00–23:00 every day; closed irregularly (Tabelog). Reservation only (Tabelog), in two seatings, 17:00 and 20:30 (March 2026); hard to book (2026 reviews). Tabelog notes that bookings are open until the end of December and that free seats and extra bookings from cancellations are posted on Instagram (@torikago.kyoto). Course only: 11 skewers ¥15,000 with soft drinks, ¥17,000 with alcohol, tax included, for 1–8 people (Tabelog); drinks are ordered from a QR menu, and all drinks are included except bottles and expensive wines (March 2026). 8 counter seats; non-smoking; cards (VISA, Master, JCB, AMEX, Diners) accepted, no e-money or QR; can be hired for up to 20 (Tabelog). The room can get quite warm (September 2026). Opened 20 August 2023 (Tabelog). 2 min walk from Shijo-Omiya Stn (Hankyu) (Tabelog); in a residential street (July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Mibu, a residential street near Shijo-Omiya — 2 min walk from Shijo-Omiya Stn',
    cuisine: 'Yakitori omakase grilled over strong, direct charcoal heat in the Torishiki style (2026 reviews) · 11 skewers with pickles, chicken soup, a rice dish and dessert, ¥15,000 (soft drinks) or ¥17,000 (all drinks) (Tabelog; July 2026) · Date chicken (two July 2026 reviews) · skewers vary by day: thigh, gizzard, neck, shiitake, maruhatsu (whole heart), outside skirt, wings, tsukune, chōchin, liver, corn, eggplant, atsuage · to finish: oyakodon, tsukune rice bowl with a raw egg (July 2024), kamameshi or takikomi gohan (2024–2026 reviews) · beer and about ten sakes (2026 reviews)',
    website: IG, gmaps: gm('鳥かご 京都 壬生坊城町'), menu_url: TB,
    notes: "[Yakitori · Shijo Omiya, a one-cook charcoal counter] An eight-seat yakitori counter in a quiet street near Shijo-Omiya, opened in 2023 by Kato, who cooked at Kyoto's Torisaki before: skewers of Date chicken grilled over strong, direct charcoal heat in the Torishiki manner, eleven to a course with pickles, chicken soup, a rice bowl and dessert. ¥17,000 covers the food and all the drinks (¥15,000 with soft drinks). Kato grills and serves alone, and reviewers single out the warmth of the welcome; one July 2026 regular calls the gizzard \"undoubtedly the best I've ever had\". Two seatings, 17:00 and 20:30; reservations only, hard to get — watch Instagram for cancellations. Tabelog Yakitori WEST 100 2024, 2025.",
    chef_bio: { chef_name: 'Kato', roles: ['Owner-chef, who grills and serves alone (2026 reviews: "The owner, Mr. Kato")'], origin: null,
      background: 'Per 2026 reviews: Kato previously worked at Torisaki in Kyoto (February, May and September 2026), and the shop grills in the Torishiki style (February and May 2026). A July 2026 reviewer writes that only two places in Kyoto handle Date chicken — the master’s restaurant and Tori Kago, run by one of the master’s apprentices — and that the meat is soaked in baking-soda water to loosen it from the bone and the shiitake sun-dried for half a day. Another July 2026 reviewer has known the chef since the training days. Opened 20 August 2023 (Tabelog). Tabelog Yakitori WEST "Tabelog 100" 2024, 2025.',
      philosophy: null, specialty: 'Charcoal-grilled skewers of Date chicken; gizzard.',
      anecdotes: [
        { text: '"The chef runs the place solo." The reviewer took the 17:00 of two seatings (17:00 and 20:30). — March 2026.', source: R + 'B523858386/' },
        { text: '"On the other hand, since Mr. Kato handles all the cooking himself, the variety of skewers and choices for finishing dishes are somewhat limited." — February 2026.', source: R + 'B527550834/' },
        { text: '"The standout item for me is the sunagimo (gizzard). The balance of cooking, texture, and aroma is exquisite" — July 2026.', source: R + 'B532640935/' },
        { text: '"Although the seating is limited to the counter, the interior can get quite warm, which is a minor downside." — September 2026.', source: R + 'B536967031/' },
      ],
      japanese_sources_summary: '食べログ: 焼き鳥、中京区壬生坊城町8-24、阪急四条大宮駅から徒歩2分、毎日17:00〜23:00、不定休、完全予約制 (12月末まで受付、空席情報は Instagram @torikago.kyoto)、おまかせ11種コース ソフトドリンク込み15,000円・アルコール込み17,000円 (税込、1〜8名)、8席、貸切20名まで、カード可、禁煙、2023年8月20日オープン、焼き鳥 WEST 百名店 2024・2025。口コミ (2026年2〜9月、英語): 店主 Kato は Torisaki 出身、Torishiki スタイルの強火の焼き、Date chicken、一人で営む、17時と20時半の2部制、QR コードのドリンクメニュー、砂肝、せせり、丸ハツ、ちょうちん、つくね、親子丼、炊き込みご飯、店内が暑くなる。',
      confidence: 'medium', sources: [TB, IG, R + 'B469664456/', R + 'B470676256/', R + 'B499035961/', R + 'B523858386/', R + 'B527550834/', R + 'B527640896/', R + 'B531917776/', R + 'B532640935/', R + 'B532760030/', R + 'B536967031/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (Tabelog); fixed course with drinks included; drinks ordered by QR code; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区壬生坊城町8-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (staff-maintained; bookings open to end of December); reviews dated through September 2026; Yakitori WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.004448, 135.747082); cross-checked: GSI 京都府京都市中京区壬生坊城町8番地 (lot) 22 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B532760030/'],
    price_note: 'Tabelog course prices (tax included); course contents from 2026 reviews, varying by day.', last_checked: TODAY, items: [
      it('', '', 'Omakase course, 11 skewers, soft drinks included', '¥15,000', 'Course', 'ask', 'no', '', 'course_soft'),
      it('', '', 'Omakase course, 11 skewers, alcohol included', '¥17,000', 'Course', 'ask', 'no', 'All drinks except bottles and expensive wines (March 2026).', 'course_alcohol'),
    ] }, {
    cuisine: 'Torishiki スタイルの、炭火の強火で直に焼くおまかせの焼き鳥 (2026年の口コミ)・11本に漬物、鶏スープ、ご飯もの、デザートで、ソフトドリンク込み15,000円、飲み放題込み17,000円 (食べログ、2026年7月)・銘柄鶏の Date chicken (2026年7月の口コミ2件)・串は日替わり: もも、砂肝、せせり、椎茸、丸ハツ、ハラミ、手羽、つくね、ちょうちん、レバー、とうもろこし、茄子、厚揚げ・締めは親子丼、生卵のつくね丼、釜飯、炊き込みご飯など (2024〜2026年の口コミ)・ビールと10種ほどの日本酒 (2026年の口コミ)',
    neighborhood: '四条大宮近くの壬生の住宅街。四条大宮駅から徒歩2分',
    gf_detail: '要確認。串は塩かたれで、締めはご飯もの (日によって親子丼、つくね丼、炊き込みご飯)。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の串のコースで鶏スープも付く。野菜の串 (椎茸、とうもろこし、茄子) はコースの中の数本だけ (2026年の口コミ)。',
    notes: '[焼き鳥・四条大宮、一人で焼く炭火のカウンター] 四条大宮近くの静かな通りにある8席の焼き鳥カウンター。京都の Torisaki で働いていた Kato が2023年に開いた。Date chicken を Torishiki 流に炭火の強火で直に焼き、コースは11本に漬物、鶏スープ、ご飯もの、デザート。17,000円で料理も飲み物もすべて込み (ソフトドリンクなら15,000円)。Kato が一人で焼いて給仕し、口コミではもてなしの温かさが評判で、2026年7月の常連は砂肝を一番と書いている。17時と20時半の2部制で、完全予約制。予約は取りにくく、キャンセルは Instagram で。食べログ焼き鳥 WEST 百名店 2024・2025。',
  });
}

save();
