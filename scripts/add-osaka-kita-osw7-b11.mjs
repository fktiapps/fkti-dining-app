// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 11.
//   + 山小屋 Yama Goya (steak and yoshoku counter by Nishinakajima-Minamigata, run by a couple; ¥1,000 daily lunch)
//   + 恩結び -on- Omusubi - on - (made-to-order onigiri, 34 fillings, from 8 am; opened 2024)
//   + 喜蕎麦司 きし元 kixisoba kishimoto (espuma "dashi soba" from ¥690, homemade noodles; reopened May 2026; ramen block)
//   + スタンド ビアとら Stand Beer Tora (Pilsner Urquell poured by a certified tapster, smoked dishes; opened 2023)
//   Lane check: every id above is even. Taken in queue order (nearest first); no skips this batch.
//   Chain check: none of the four names another shop. None is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Shared building: kixisoba kishimoto is at 西中島4-11-24 第1ユーリハイツ 1F, the same building as osaka_chirori_nishinakajima
//   (address_ja "大阪府大阪市淀川区西中島4-11-24 第１ユーリハイツ 1F"); the two Tabelog points are about 4 m apart, each kept.
//   Ramen block: kixisoba kishimoto's dashi soba is described on all six dimensions in October 2026 reviews, so it has one.
//   open_late per Greg's 2026-11-02 ruling (true only when the shop closes after 22:00).
//   Stand Beer Tora: category MOM_AND_POP because a December 2025 review names the owner ("the owner, Daisuke") pouring the beer;
//   mom_and_pop stays false, since no source says the owner runs it alone or as a couple.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 山小屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27052774/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_yama_goya_nishinakajima', name: '山小屋 (Yama Goya)', category: 'OMNI',
    lat: 34.726668, lng: 135.499170, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the daily lunches are often breaded (menchi katsu, filet cutlet) and come with demi-glace sauce, which is usually thickened with flour.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: steak, hamburg steak, chicken and cutlets.',
    hours_raw: 'Mon–Sat 11:30–14:00 and 17:00–22:00; closed Sunday and holidays (Tabelog). Reservations accepted (Tabelog). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). 18 seats at a counter and tables; smoking allowed (Tabelog). Food comes fast at lunch (April 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島3-19-7, ground floor of 第一ユヤマビル — 1 min from Nishinakajima-Minamigata Stn, 3 min from Hankyu Minamikata (Tabelog), in the nightlife streets (October 2025)',
    cuisine: 'Steak and yoshoku at an open-kitchen counter in a wood-panelled room (Tabelog) · daily lunch ¥1,000 with rice and miso soup, the main changing every day: menchi katsu with demi-glace (September 2025, January 2026), a small filet cutlet with meatballs in demi-glace (March and May 2026), chicken steak with garlic or sansho (February and April 2026), hamburg steak simmered in ketchup sauce or with demi-glace (July and September 2026) · steak lunch ¥1,500 with salad, pepper, sauce and lemon herb butter (October 2025) · filet steak with ponzu (September 2025) · curry (April 2026) · a salad with apple and orange (August 2026)',
    website: null, gmaps: gm('山小屋 西中島3-19-7'), menu_url: null,
    notes: "[Yoshoku · Nishinakajima, a couple's steak counter] A wood-panelled steak and yoshoku counter a minute from Nishinakajima-Minamigata, run by an older couple: a bearded master smiling at the grill and the lady of the house taking orders (April, May and August 2026). One diner put it at 50 years old (March 2026). Lunch is a ¥1,000 daily special with rice and miso soup, a different main each day (menchi katsu or a small filet cutlet under rich demi-glace, chicken steak with sansho, ketchup-simmered hamburg steak), quick and filling enough for office workers to make it a habit (2026). The ¥1,500 steak lunch is tender, with lemon herb butter (October 2025). Smoking is allowed. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed): the master at the grill and a partner on the floor'], origin: null, background: 'Per the Tabelog listing: an open-kitchen counter in a calm, wood-themed room serving good steak at fair prices. Reviewers: "It seemed like an elderly couple was running the place" (April 2026); "the master and the lady of the house welcomed me with kindness" (May 2026); "A steakhouse where the master with a beard smiles while grilling. It seems to be run by a couple" (August 2026); "This place has been around for 50 years" (March 2026).', philosophy: null, specialty: 'Daily ¥1,000 lunch with demi-glace; steak lunch.',
      anecdotes: [
        { text: '"So far, I haven\'t had the same menu item twice." — January 2026, a regular at lunch.', source: R + 'B517117310/' },
        { text: '"A steakhouse where the master with a beard smiles while grilling." — August 2026, the JPY 1,000 lunch.', source: R + 'B534189953/' },
        { text: '"I also enjoyed changing the flavor by spreading some herb butter with lemon on the meat." — October 2025, the steak lunch for JPY 1,500.', source: R + 'B515510850/' },
      ],
      japanese_sources_summary: '食べログ: 山小屋、ステーキ・鉄板焼き・ハンバーグ、大阪市淀川区西中島3-19-7 第一ユヤマビル 1F、Midosuji 線 西中島南方駅から徒歩1分、阪急 南方駅から3分、月〜土11:30〜14:00、17:00〜22:00、日・祝休み、予約可、カード (JCB、AMEX、Diners) 可、電子マネー・QR 不可、18席、喫煙可。店の紹介: 木の落ち着いた空間、オープンキッチンのカウンター、上質のステーキを手頃に。口コミ(2025年9月〜2026年9月): 日替わりランチ1,000円 (ごはんとみそ汁つき、メンチカツのデミグラス、小さなヒレカツとミートボール、チキンステーキ、ケチャップで煮込んだハンバーグ)、ステーキランチ1,500円 (サラダ、レモンのハーブバター)、ヒレステーキのポン酢、カレー、りんごとオレンジのサラダ、年配の夫婦で切り盛り、ひげのマスター、50年続く洋食屋という声、出てくるのが早い。',
      confidence: 'medium', sources: [TB, R + 'B514095429/', R + 'B514807096/', R + 'B515510850/', R + 'B517117310/', R + 'B522273382/', R + 'B523734121/', R + 'B527028204/', R + 'B527711019/', R + 'B530990254/', R + 'B534189953/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One daily lunch special plus a short menu; counter seats. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-19-7 第一ユヤマビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目19番7号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523734121/', R + 'B515510850/'],
    price_note: 'Prices from 2025–2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch with rice and miso soup', '¥1,000', 'Lunch', 'ask', 'no', '2025–2026; the main changes daily.', 'higawari'),
      it('', '', 'Steak lunch', '¥1,500', 'Lunch', 'ask', 'no', 'October 2025.', 'steak_lunch'),
      it('', '', 'Hamburg steak with demi-glace (daily lunch)', '¥1,000', 'Lunch', 'no', 'no', 'July 2026.', 'hamburg'),
    ] }, {
    cuisine: '木の内装の店のオープンキッチンのカウンターでステーキと洋食 (食べログ)・日替わりランチ1,000円、ごはんとみそ汁つき、メインは毎日変わる: デミグラスのメンチカツ (2025年9月、2026年1月)、小さなヒレカツとデミグラスのミートボール (2026年3月と5月)、にんにくや山椒のチキンステーキ (2026年2月と4月)、ケチャップで煮込んだハンバーグやデミグラスのハンバーグ (2026年7月と9月)・サラダ、こしょう、ソース、レモンのハーブバターのステーキランチ1,500円 (2025年10月)・ヒレステーキのポン酢 (2025年9月)・カレー (2026年4月)・りんごとオレンジ入りのサラダ (2026年8月)',
    neighborhood: '西中島3-19-7、第一ユヤマビルの1階。西中島南方駅から徒歩1分、阪急 南方駅から3分 (食べログ)、飲み屋街の中 (2025年10月)',
    gf_detail: 'グルテンフリーではありません。日替わりはパン粉の揚げ物 (メンチカツ、ヒレカツ) が多く、ふつう小麦粉でとろみをつけるデミグラスがかかる。',
    vegan_detail: 'ヴィーガンではありません。ステーキ、ハンバーグ、チキン、カツ。',
    notes: '[洋食・西中島、夫婦のステーキのカウンター] 西中島南方駅から1分の、木の内装のステーキと洋食のカウンターで、年配の夫婦が切り盛り: 鉄板の前でにこにこするひげのマスターと、注文をとるおかみさん (2026年4月、5月、8月)。50年続く店だという声も (2026年3月)。昼はごはんとみそ汁つきの1,000円の日替わりで、毎日メインが変わる (濃いデミグラスのメンチカツや小さなヒレカツ、山椒のチキンステーキ、ケチャップで煮込んだハンバーグ)。早くておなかいっぱいになるので、会社員の定番に (2026年)。1,500円のステーキランチはやわらかく、レモンのハーブバターで (2025年10月)。喫煙可。日曜休み。',
  });
}

// ================================================================ 恩結び -on-
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27140116/'; const R = TB + 'dtlrvwlst/';
  const W = day(['08:00', '20:00']);
  put({
    id: 'osaka_omusubi_on_higashimikuni', name: '恩結び -on- (Omusubi - on -)', category: 'OMNI',
    lat: 34.739903, lng: 135.500999, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog\'s feature list ticks "gluten-free options", and an April 2026 diner had a gluten-free cake set; the onigiri are rice, nori and salt, but many fillings are seasoned (soy-marinated egg yolk, mayonnaise mixes) and the side somen is wheat. Ask which fillings suit.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s feature list ticks "vegan options" and "vegetarian options", and there are plain fillings such as sesame kombu and honey plum (2026), but nothing is labelled vegan; the miso soup is a clam broth (November 2025) and the meat soup is meat.',
    hours_raw: 'Mon, Tue, Thu, Fri and Sat 8:00–20:00; Sun 9:00–15:00; closed Wednesday (Tabelog). Reservations through the shop\'s LINE account until the day before; same-day by phone first, though the phone may go unanswered when staff are busy (Tabelog). No cards or e-money; PayPay accepted (Tabelog). 14 seats plus a terrace where pets may sit; non-smoking; children and strollers welcome; free Wi-Fi; takeaway and delivery (Tabelog). Order at the counter; staff bring the food (February 2026). Opened 11 January 2024 (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: W, 6: day(['09:00', '15:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '東三国1-20-2 — 3 min from Exit 4 of Higashimikuni Stn, 4 min from the west exit of JR Higashiyodogawa (Tabelog), in the shopping street in front of Higashiyodogawa Station (May 2026)',
    cuisine: 'Made-to-order onigiri (Tabelog) · two sizes, omusubi 150 g and komusubi 100 g, ¥100 less (2026); 34 fillings (April 2026), packed inside as well as on top; Shiga Koshihikari rice, Ariake nori and Okinawa salt (April 2026); multigrain rice possible (April 2026) · fillings named in 2026: salmon, sujiko, salmon mayonnaise, minced meat with soy-marinated egg yolk, spicy cod roe with takana, shrimp mayo with cream cheese and shiso, salmon with salmon roe, tuna kakuni, salted cod with cream cheese, green-onion salmon roe, sesame kombu ¥330, honey plum, negi sake toro ¥480 (May 2026) · miso-soup set with clam miso soup, dashimaki and takuan (November 2025, February 2026); meat soup (January and April 2026); somen ¥330 (May 2026) · dashi chazuke, hot or cold, +¥150 (July 2026) · a gluten-free cake set (April 2026) · breakfast from 8:00; alcohol served (May 2026)',
    website: null, gmaps: gm('恩結び -on- 東三国1-20-2'), menu_url: null,
    notes: "[Onigiri · Higashimikuni, rice balls made to order from 8 am] A small onigiri shop in the shopping street by Higashiyodogawa Station, opened in January 2024 by an owner who trained at a popular onigiri shop in Otsuka, Tokyo (Tabelog). Each rice ball is shaped after you order, loose and fluffy with the filling packed right through, in two sizes (150 g or 100 g) and with 34 fillings from salmon and sujiko to minced meat with soy-cured yolk or shrimp mayo with cream cheese (2026). Add a set of clam miso soup, dashimaki and takuan, or the meat soup, or have the onigiri drowned in dashi as chazuke. Open from 8:00 for breakfast; Tabelog marks gluten-free and vegan options, so ask. The owner is warm (May 2026). Book by LINE the day before. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null, background: 'Per the Tabelog listing: "The owner, who trained at a popular restaurant in Otsuka, Tokyo, opened this place in January 2024"; freshly made rice balls after ordering; mostly domestic, additive-free, handmade ingredients; fillings packed from first bite to last. An April 2026 diner lists Shiga Koshihikari rice, first-grade Ariake nori and Okinawa salt. A May 2026 diner praises "the warm hospitality from the owner".', philosophy: null, specialty: 'Made-to-order onigiri with 34 fillings; miso-soup set.',
      anecdotes: [
        { text: '"The fillings were not only on top but generously packed inside as well, providing satisfaction until the very last bite." — February 2026, salmon and sujiko with the miso-soup set.', source: R + 'B523165399/' },
        { text: '"For an additional JPY 150, you can have either hot or cold dashi poured over your omusubi." — July 2026, sesame kombu for JPY 330.', source: R + 'B531885671/' },
        { text: '"The cake set is a delightful gluten-free treat." — April 2026.', source: R + 'B526236831/' },
      ],
      japanese_sources_summary: '食べログ: 恩結び -on-、おにぎり、大阪市淀川区東三国1-20-2、東三国駅4番出口から徒歩3分、JR 東淀川駅西口から4分、月・火・木・金・土8:00〜20:00、日曜9:00〜15:00、水曜休み、予約は前日までに公式 LINE で、当日は電話で、カード・電子マネー不可、PayPay 可、14席、テラス席はペット可、禁煙、子ども可、Wi-Fi、テイクアウトとデリバリー、野菜にこだわり、モーニング、ヴィーガン・ベジタリアン・グルテンフリーのメニューありの表示、2024年1月11日オープン。店の紹介: Tokyo の Otsuka の人気店で修業した店主が2024年1月に開店、注文を受けてからにぎる、ふわっと空気をふくむ大粒のお米、具は最初から最後まで、国産中心で無添加、手作り、トッピングを自由に。口コミ(2025年9月〜2026年10月): おむすび150gとこむすび100g (100円安い)、具は34種、Shiga のコシヒカリ、Ariake ののり、Okinawa の塩、雑穀米も、鮭、すじこ、鮭マヨ、そぼろと卵黄の醤油漬け、明太子と高菜、エビマヨとクリームチーズと大葉、鮭といくら、ツナの角煮、たらこクリームチーズ、ねぎといくら、ごま昆布330円、はちみつ梅、ねぎとろ480円、貝のだしのみそ汁とだし巻きとたくあんのセット、肉のスープ、そうめん330円、だし茶漬けは150円増し、グルテンフリーのケーキのセット、朝8時から、お酒も、店主のあたたかいもてなし。',
      confidence: 'medium', sources: [TB, R + 'B513789180/', R + 'B520228502/', R + 'B522815813/', R + 'B523165399/', R + 'B526236831/', R + 'B529262670/', R + 'B529294693/', R + 'B529842565/', R + 'B531885671/', R + 'B537601375/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose size and fillings at the counter; LINE reservations. No English evidence found.' },
    safety: { ...SAFETY0, positives: ['Tabelog feature list: "Gluten-Free options" and "Vegan options".', 'April 2026 review: "The cake set is a delightful gluten-free treat."'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国1-20-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国一丁目20番2号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531885671/', R + 'B529294693/', R + 'B526236831/'],
    price_note: 'Prices from May and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omusubi (150 g), fillings from a list of 34', '', 'Onigiri', 'ask', 'ask', '2026; komusubi 100 g is ¥100 less.', 'omusubi'),
      it('', '', 'Sesame kombu (100 g)', '¥330', 'Onigiri', 'ask', 'ask', 'July 2026.', 'goma_kombu'),
      it('', '', 'Negi sake toro omusubi', '¥480', 'Onigiri', 'ask', 'no', 'May 2026.', 'negi_toro'),
      it('', '', 'Dashi chazuke (add-on)', '¥150', 'Add-ons', 'ask', 'no', 'July 2026; the dashi is made from the meat soup.', 'chazuke'),
      it('', '', 'Somen', '¥330', 'Sides', 'no', 'no', 'May 2026.', 'somen'),
      it('', '', 'Gluten-free cake set', '', 'Sweets', 'ask', 'ask', 'April 2026.', 'gf_cake'),
    ] }, {
    cuisine: '注文を受けてからにぎるおにぎり (食べログ)・おむすび150g とこむすび100g (100円安い) の2サイズ (2026年)。具は34種 (2026年4月)、上だけでなく中にもたっぷり。Shiga のコシヒカリ、Ariake ののり、Okinawa の塩 (2026年4月)。雑穀米も (2026年4月)・2026年に名前の出た具: 鮭、すじこ、鮭マヨ、そぼろと卵黄の醤油漬け、明太子と高菜、エビマヨとクリームチーズと大葉、鮭といくら、ツナの角煮、たらことクリームチーズ、ねぎといくら、ごま昆布330円、はちみつ梅、ねぎとろ480円 (2026年5月)・貝のだしのみそ汁、だし巻き、たくあんのセット (2025年11月、2026年2月)。肉のスープ (2026年1月と4月)。そうめん330円 (2026年5月)・温かいか冷たいだしの茶漬けは150円増し (2026年7月)・グルテンフリーのケーキのセット (2026年4月)・朝8時から、お酒も (2026年5月)',
    neighborhood: '東三国1-20-2。東三国駅4番出口から徒歩3分、JR 東淀川駅西口から4分 (食べログ)、東淀川駅前の商店街の中 (2026年5月)',
    gf_detail: '要確認。食べログの特徴に「グルテンフリーメニューあり」の表示があり、2026年4月にはグルテンフリーのケーキのセットを食べた人も。おにぎりはお米、のり、塩だが、具には味つけしたもの (卵黄の醤油漬け、マヨネーズあえ) が多く、そうめんは小麦。どの具なら合うか確認を。',
    vegan_detail: '要確認。食べログの特徴に「ヴィーガン」「ベジタリアン」のメニューありの表示があり、ごま昆布やはちみつ梅などのシンプルな具もある (2026年) が、ヴィーガンと書かれたものはない。みそ汁はしじみのだし (2025年11月)、肉のスープは肉。',
    notes: '[おにぎり・東三国、朝8時から注文してにぎるおにぎり] 東淀川駅前の商店街にある小さなおにぎりの店で、Tokyo の Otsuka の人気店で修業した店主が2024年1月に開いた (食べログ)。注文を受けてからにぎり、ふんわりと空気をふくんで、具は中までぎっしり。サイズは150g か100g、具は34種で、鮭やすじこから、そぼろと卵黄の醤油漬け、エビマヨとクリームチーズまで (2026年)。貝のだしのみそ汁、だし巻き、たくあんのセットや肉のスープをつけたり、だしをかけて茶漬けにしたり。朝8時から。食べログにはグルテンフリーやヴィーガンの表示もあるので確認を。店主はあたたかい (2026年5月)。予約は前日までに LINE で。水曜休み。',
  });
}

// ================================================================ 喜蕎麦司 きし元
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27114438/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '16:00']);
  put({
    id: 'osaka_kixisoba_kishimoto_nishinakajima', name: '喜蕎麦司 きし元 (kixisoba kishimoto)', category: 'OMNI',
    lat: 34.726799, lng: 135.495378, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade wheat noodles; the shoyu tare is soy.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and bonito broth, shrimp in the Awai soba, pork chashu.',
    hours_raw: 'Mon–Thu, Sat and Sun 11:00–16:00; closed Friday, plus temporary closures announced on the shop\'s social media (Tabelog). No reservations; no cards; transport IC cards and PayPay accepted (Tabelog); buy a ticket at the machine by the door (October 2026). 7 counter seats; non-smoking (Tabelog). Full at lunch, often with a short wait (2026). Opened 12 November 2019 (Tabelog); closed for about three years and reopened on 29 May 2026 (June and October 2026 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島4-11-24, ground floor of 第1ユーリハイツ — about 300 m from Nishinakajima-Minamigata Stn (Tabelog), straight from the station (October 2026)',
    cuisine: 'Dashi soba and chuka soba with homemade noodles (2026) · menu, October 2026: Dashi Soba ¥690 (extra noodles +¥150); Awai Soba ¥770 (+¥170); egg-topped noodles ¥380; toppings: premium +¥150, special premium +¥250, special assortment +¥350, seasoned egg +¥100, chashu +¥250 · Dashi Soba: a frothy, creamy "espuma" broth of chicken and honkarebushi bonito with two shoyu from Hozan (Aichi), a little chicken fat and roasted garlic, homemade noodles (1.5 servings), a large slice of smoked chashu, green onion and chopped onion, yuzu kosho on the side (2026) · Awai Soba: shrimp and white tamari, richer and a touch salty (July 2026) · limited bowls: shio (October 2026), tonkotsu about ¥880 (October 2026) · seasoned-egg roast-pork rice bowl with basil sauce (June and October 2026); mini chashu rice bowl (October 2026) · smoked seasoned egg (June and October 2026)',
    website: null, gmaps: gm('喜蕎麦司 きし元 西中島4-11-24'), menu_url: null,
    notes: "[Ramen · Nishinakajima, ¥690 espuma dashi soba] A seven-seat counter in a residential block west of Nishinakajima-Minamigata, opened in 2019 by an owner who trained at the popular Chuka Soba Kuzu, closed for about three years at the height of its fame and reopened on 29 May 2026 to lines (June and October 2026). The Dashi Soba is the bowl: a frothy, creamy chicken and bonito broth with two Hozan soy sauces, homemade noodles in a 1.5-serving portion, smoked chashu and chopped onion at the bottom, for ¥690 at a time when ramen costs ¥1,000 (2026). The Awai Soba adds shrimp and white tamari, and a smoked seasoned egg is ¥100 well spent. Buy a ticket at the door; lunch only, 11:00–16:00, closed Friday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), trained at Chuka Soba Kuzu'], origin: null, background: 'Per a June 2026 review: "The owner trained at the very popular shop \'Chuka Soba Kuzu\' before opening this place. It temporarily closed about three years ago during its peak popularity, but it reopened on May 29th." An October 2026 review gives the broth as chicken and honkarebushi with two soy sauces from Hozan (Aichi) and the noodles as homemade, additive-free. Opened 12 November 2019 (Tabelog).', philosophy: null, specialty: 'Dashi Soba; Awai Soba; smoked seasoned egg.',
      anecdotes: [
        { text: '"Seven years ago, the price was JPY 650, but even after reopening, you can still enjoy this great bowl for JPY 690!" — October 2026, the Dashi Soba.', source: R + 'B421677773/' },
        { text: '"It had a smoky aroma reminiscent of being smoked, which I really enjoyed. Adding it for JPY 100 was definitely a great decision." — October 2026, the seasoned egg on the Dashi Soba.', source: R + 'B537385620/' },
        { text: '"It was great to reunite with the bubbly espuma Dashi Soba!" — October 2026, just before 2 pm, the shop still packed.', source: R + 'B538209461/' },
      ],
      japanese_sources_summary: '食べログ: 喜蕎麦司 きし元、ラーメン、大阪市淀川区西中島4-11-24 第1ユーリハイツ 1F、西中島南方駅から299m、月〜木・土・日11:00〜16:00、金曜休み (臨時休業は公式 SNS で)、予約不可、カード不可、交通系 IC・PayPay 可、7席 (カウンター)、禁煙、2019年11月12日オープン。口コミ(2026年6月〜10月): Chuka Soba Kuzu で修業した店主、約3年の休業のあと2026年5月29日に再開、入口の券売機、Dashi Soba 690円 (麺大盛り150円)、Awai Soba 770円、卵の麺380円、トッピング、鶏と本枯節のスープに Hozan の醤油2種、泡立ったクリーミーな「エスプーマ」、少しの鶏油とローストガーリック、自家製麺は1.5玉、燻製のチャーシュー、ねぎ、刻み玉ねぎ、柚子こしょう、Awai Soba はエビと白たまり、限定の塩、とんこつ約880円、味玉のローストポーク丼 (バジルのソース)、ミニチャーシュー丼、燻製の味玉、昼は満席で少し待つことも。',
      confidence: 'medium', sources: [TB, R + 'B421677773/', R + 'B529278169/', R + 'B529297167/', R + 'B537290070/', R + 'B537385620/', R + 'B537790537/', R + 'B537811200/', R + 'B538010075/', R + 'B538209461/', R + 'B538507100/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine at the door; decide before you reach it. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-11-24 第1ユーリハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reopened 29 May 2026 per reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目11番24号 (go) 6m; same building as osaka_chirori_nishinakajima, whose Tabelog point is about 4 m away; ${TODAY}`,
    ramen: {
      broth_base: ['chicken', 'gyokai'], broth_texture: 'paitan', tare: ['shoyu'], aroma_oil: ['chicken fat', 'garlic'], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: true, notes: 'Homemade noodles, 1.5 servings by default; "medium-thick straight noodles, measuring 3.75mm" with "a chewy texture and a rich wheat flavor" (October 2026); "thin and had a firm texture, suggesting low water content" to another October 2026 diner; "medium-thin ... smooth and chewy" to a third (October 2026).' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'Dashi Soba, chicken and bonito espuma shoyu, ¥690 (October 2026).',
      chashu: 'One large, thin slice of smoked chashu, "moist and flavorful" (October 2026).',
      notable_toppings: ['smoked chashu', 'chopped onion', 'green onion', 'smoked seasoned egg', 'yuzu kosho'],
      gf: { status: 'no', note: 'Homemade wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken and bonito broth; pork chashu.' },
      pantheon: 'Nishinakajima\'s ¥690 espuma dashi soba from a Chuka Soba Kuzu alumnus: frothy chicken and honkarebushi over two Hozan soy sauces, homemade noodles, smoked chashu, back after a three-year break.',
      profile: { richness: 4, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 4, aroma_punch: 3 },
      profile_basis: {
        richness: [R + 'B537385620/', '"The rich creaminess of the chicken broth combined beautifully with the umami of the seafood dashi" (October 2026); "a rich, frothy broth" (October 2026, ' + R + 'B529278169/) — above mid-scale.'],
        oiliness: [R + 'B421677773/', '"with a moderate amount of chicken fat" (October 2026) — mid-scale.'],
        clarity: [R + 'B538209461/', '"the bubbly espuma Dashi Soba" with "a creamy texture" (October 2026) — a frothy, opaque broth.'],
        tare_strength: [R + 'B538010075/', '"a broth made from honkarebushi (dried bonito) and two types of soy sauce, delivering a robust soy flavor" (October 2026) — above mid-scale.'],
        noodle_firmness: [R + 'B538010075/', '"The noodles were thin and had a firm texture, suggesting low water content" (October 2026); "a chewy texture" (' + R + 'B421677773/, October 2026) — firm.'],
        aroma_punch: [R + 'B421677773/', '"a hint of roasted garlic for added aroma" and "a subtle bonito flavor" (October 2026) — mid-scale.'],
      },
    },
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B421677773/', R + 'B537385620/'],
    price_note: 'Menu prices from an October 2026 review listing the main menu.', last_checked: TODAY, items: [
      it('', '', 'Dashi Soba (chicken and bonito espuma shoyu)', '¥690', 'Ramen', 'no', 'no', 'October 2026; extra noodles +¥150.', 'dashi_soba'),
      it('', '', 'Awai Soba (shrimp and white tamari)', '¥770', 'Ramen', 'no', 'no', 'October 2026; extra noodles +¥170.', 'awai_soba'),
      it('', '', 'Egg-topped noodles', '¥380', 'Ramen', 'no', 'no', 'October 2026.', 'tamago_men'),
      it('', '', 'Seasoned egg topping (smoked)', '¥100', 'Toppings', 'ask', 'no', 'October 2026.', 'ajitama'),
      it('', '', 'Chashu topping', '¥250', 'Toppings', 'ask', 'no', 'October 2026.', 'chashu'),
    ] }, {
    cuisine: '自家製麺の Dashi Soba と中華そば (2026年)・2026年10月のメニュー: Dashi Soba 690円 (麺大盛り150円増し)、Awai Soba 770円 (170円増し)、卵の麺380円、トッピングはプレミアム150円、特製プレミアム250円、特盛り350円、味玉100円、チャーシュー250円・Dashi Soba: 鶏と本枯節に Hozan (Aichi) の醤油2種の、泡立ったクリーミーな「エスプーマ」のスープ、少しの鶏油とローストガーリック、自家製麺 (1.5玉)、燻製の大きなチャーシュー、ねぎ、刻み玉ねぎ、柚子こしょうを添えて (2026年)・Awai Soba: エビと白たまりで、もっとうまみが濃く少し塩気がある (2026年7月)・限定: 塩 (2026年10月)、とんこつ約880円 (2026年10月)・バジルのソースの味玉ローストポーク丼 (2026年6月と10月)。ミニチャーシュー丼 (2026年10月)・燻製の味玉 (2026年6月と10月)',
    neighborhood: '西中島4-11-24、第1ユーリハイツの1階。西中島南方駅から約300m (食べログ)、駅からまっすぐ (2026年10月)',
    gf_detail: 'グルテンフリーではありません。自家製の小麦の麺で、醤油のたれ。',
    vegan_detail: 'ヴィーガンではありません。鶏とかつおのスープ、Awai Soba にはエビ、豚のチャーシュー。',
    notes: '[ラーメン・西中島、690円のエスプーマの Dashi Soba] 西中島南方駅の西の住宅地にある7席のカウンターで、Chuka Soba Kuzu で修業した店主が2019年に開き、人気の最中に約3年休業して、2026年5月29日に再開すると行列に (2026年6月と10月)。看板は Dashi Soba: 泡立ったクリーミーな鶏と本枯節のスープに Hozan の醤油2種、1.5玉の自家製麺、燻製のチャーシュー、底に刻み玉ねぎで、ラーメンが1,000円の時代に690円 (2026年)。Awai Soba はエビと白たまりで、燻製の味玉は100円でつける価値あり。入口で食券を。昼だけで11時から16時、金曜休み。',
  });
}

// ================================================================ スタンド ビアとら
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27138952/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://stand-beer-tora.foodre.jp/';
  const N = day(['17:30', '23:00']);
  put({
    id: 'osaka_stand_beer_tora_higashimikuni', name: 'スタンド ビアとら (Stand Beer Tora)', category: 'MOM_AND_POP',
    lat: 34.740492, lng: 135.499940, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a beer bar (barley beer), with fried "popper" peppers, schnitzel, bruschetta and yaki udon on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature popper is stuffed with cheese and bacon; smoked fish, sausages and meat dishes.',
    hours_raw: 'Mon, Tue, Fri and Sat 17:30–23:00; Sun 17:30–21:00; closed Wednesday and Thursday (Tabelog). Reservations by phone only, no online booking; with few seats, booking is wise (Tabelog; August 2026). Cards (VISA, Master, JCB, AMEX, Diners), QUICPay and QR payments (Tabelog). No cover charge (August 2026). 16 seats: a counter of six, two tables for four and one for two; non-smoking; children and strollers welcome; free Wi-Fi; sports on screen (Tabelog). Opened 7 November 2023 (Tabelog).',
    hours: { 0: N, 1: N, 4: N, 5: N, 6: day(['17:30', '21:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国1-24-8 — 2 min from Exit 4 of Higashimikuni Stn, 6 min from JR Higashiyodogawa, 10 min from Shin-Osaka (Tabelog), on the east side of Higashimikuni Station (January 2026)',
    cuisine: 'Beer stand: draft Pilsner Urquell poured by a certified tapster in several styles, among them the foam-heavy "Mirko", plus rotating draft beers, craft gin and fermented ginger ale (Tabelog; 2024–2026) · Pilsner Urquell large ¥1,300 (August 2026) · signature "popper": a fried pepper stuffed with jalapeño, cheese and bacon, one per person; "Tacopy", taco mince on fresh pepper (Tabelog; January and August 2026) · smoked dishes: smoked mackerel, smoked fish cake (December 2025, April 2026) · schnitzel, canola-flower ohitashi, hayashi without rice (December 2025); fresh fish with green onion, fried new potatoes, yaki udon (April 2026); five-sausage platter ¥680 (August 2026); grilled tomato and shirasu garlic bruschetta, chashu egg (August 2026); fresh figs with cream cheese (August 2026) · Masahiro Okinawa gin (August 2026)',
    website: SITE, gmaps: gm('スタンド ビアとら 東三国'), menu_url: null,
    notes: "[Beer bar · Higashimikuni, Pilsner Urquell from a certified tapster] A 16-seat beer stand two minutes from Higashimikuni Station, opened in 2023 around draft Pilsner Urquell poured properly by its owner, Daisuke, a certified tapster (December 2025), who told one diner that the pour was learned from the Czech Pavilion staff at the 2025 Expo (August 2026); Expo fans come back for it, and the foam-heavy \"Mirko\" has its regulars. The food is the other draw and changes with the seasons: the signature popper (a fried pepper filled with jalapeño, cheese and bacon, one each), smoked mackerel and fish cake, schnitzel, figs with cream cheese (2025–2026). Busy and small, so phone ahead. Closed Wednesday and Thursday.",
    chef_bio: { chef_name: 'Daisuke (owner, given name only)', roles: ['Owner and certified Pilsner Urquell tapster'], origin: null, background: 'Per the Tabelog listing: draft Pilsner Urquell poured by a certified "Tap Star", craft gin and fermented ginger ale, the "Tacopy" and "Popper" and smoked dishes; opened 7 November 2023. A December 2025 diner had "beer poured by the owner, Daisuke, during an event in Tokyo" before visiting the bar. An August 2026 diner was told by the owner that the staff of the Czech Pavilion had taught the pour.', philosophy: null, specialty: 'Pilsner Urquell poured several ways; popper; smoked dishes.',
      anecdotes: [
        { text: '"It truly tasted just like the beer from the expo! I was so moved!" — August 2026, Pilsner Urquell large for JPY 1,300.', source: R + 'B533782051/' },
        { text: '"The more you grow up, the more you start to love green peppers, and you absolutely have to try their specialties, \'Hopper\' and \'Takopi!\'" — January 2026, drinks and food for JPY 2,780.', source: R + 'B520938139/' },
        { text: '"The pouring technique is simply wonderful and soothing!" — February 2026.', source: R + 'B522680271/' },
      ],
      japanese_sources_summary: '食べログ: スタンド ビアとら、バル・ビアバー・タコス、大阪市淀川区東三国1-24-8、Midosuji 線 東三国駅4番出口から徒歩2分、JR 東淀川駅から6分、新大阪駅から10分、月・火・金・土17:30〜23:00、日曜17:30〜21:00、水・木休み、予約は電話のみ (ネット予約なし)、カード・QUICPay・QR 可、16席 (カウンター6、4人テーブル2、2人テーブル1)、禁煙、子ども可、Wi-Fi、スポーツ観戦、2023年11月7日オープン。店の紹介: 認定タップスターが注ぐPilsner Urquell の生、クラフトジン、発酵ジンジャーエール、ピーマンにタコミートの「Tacopy」、看板の「Popper」、燻製のメニュー。口コミ(2024年6月〜2026年9月): 店主 Daisuke さん、万博のチェコのパビリオンのスタッフから注ぎ方を教わったという話、Mirko、Pilsner Urquell 大1,300円、ハラペーニョとチーズとベーコンの Popper (ひとり1つ)、サバの燻製、燻製のかまぼこ、シュニッツェル、菜の花のおひたし、ライスなしのハヤシ、鮮魚のねぎ、新じゃがの素揚げ、焼きうどん、ソーセージ5種680円、焼きトマトとしらすのガーリックブルスケッタ、チャーシューエッグ、いちじくとクリームチーズ、Masahiro の Okinawa のジン、チャージなし、席が少ないので予約を。',
      confidence: 'medium', sources: [TB, SITE, R + 'B487077972/', R + 'B514120953/', R + 'B520082293/', R + 'B520938139/', R + 'B522680271/', R + 'B526994075/', R + 'B528553841/', R + 'B529102072/', R + 'B533782051/', R + 'B534489955/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A small beer counter; phone to book. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国1-24-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国一丁目24番8号 (go) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533782051/', R + 'B534489955/'],
    price_note: 'Prices from an August 2026 review (tax excluded).', last_checked: TODAY, items: [
      it('', '', 'Pilsner Urquell, large', '¥1,300', 'Beer', 'no', 'ask', 'August 2026.', 'urquell_large'),
      it('', '', 'Popper (jalapeño, cheese and bacon in a fried pepper), one per person', '', 'Snacks', 'no', 'no', 'Tabelog; August 2026.', 'popper'),
      it('', '', 'Assorted sausages, five kinds', '¥680', 'Snacks', 'ask', 'no', 'August 2026.', 'sausages'),
      it('', '', 'Smoked mackerel', '', 'Smoked', 'ask', 'no', 'December 2025.', 'smoked_saba'),
    ] }, {
    cuisine: 'ビアスタンド: 認定タップスターが注ぐPilsner Urquell の生、泡の多い「Mirko」などいくつかの注ぎ方で、ほかに入れかわる生ビール、クラフトジン、発酵ジンジャーエール (食べログ、2024〜2026年)・Pilsner Urquell 大1,300円 (2026年8月)・看板の「Popper」: ハラペーニョ、チーズ、ベーコンを詰めて揚げたピーマン、ひとり1つ。生のピーマンにタコミートの「Tacopy」(食べログ、2026年1月と8月)・燻製: サバ、かまぼこ (2025年12月、2026年4月)・シュニッツェル、菜の花のおひたし、ライスなしのハヤシ (2025年12月)。鮮魚のねぎ、新じゃがの素揚げ、焼きうどん (2026年4月)。ソーセージ5種680円 (2026年8月)。焼きトマトとしらすのガーリックブルスケッタ、チャーシューエッグ (2026年8月)。いちじくとクリームチーズ (2026年8月)・Masahiro の Okinawa のジン (2026年8月)',
    neighborhood: '東三国1-24-8。東三国駅4番出口から徒歩2分、JR 東淀川駅から6分、新大阪から10分 (食べログ)、東三国駅の東側 (2026年1月)',
    gf_detail: 'グルテンフリーではありません。ビールの店 (大麦のビール) で、揚げた Popper、シュニッツェル、ブルスケッタ、焼きうどんがある。',
    vegan_detail: 'ヴィーガンではありません。看板の Popper はチーズとベーコン入り、燻製の魚、ソーセージ、肉料理。',
    notes: '[ビアバー・東三国、認定タップスターのPilsner Urquell ] 東三国駅から2分の16席のビアスタンドで、2023年に開き、店主の Daisuke さんが認定タップスターとしてPilsner Urquell の生をきちんと注ぐ (2025年12月)。2025年の万博のチェコのパビリオンのスタッフから注ぎ方を教わったと話してくれたという (2026年8月)。万博のファンが通い、泡の多い「Mirko」にも常連がいる。料理も目当てで、季節で変わる: 看板の Popper (ハラペーニョ、チーズ、ベーコンを詰めて揚げたピーマン、ひとり1つ)、サバやかまぼこの燻製、シュニッツェル、いちじくとクリームチーズ (2025〜2026年)。小さくてにぎわうので電話で予約を。水曜と木曜休み。',
  });
}

save();
