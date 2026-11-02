// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 1.
//   + ベアフット カリー リンクス梅田店 barefoot curry Rinkusu umeda ten (Indian/Nepali curry, Links Umeda 8F, since 2023)
//   + 蛸之徹 角田店 Tako no Tetsu Kakuda ten (cook-your-own takoyaki since 1979, behind HEP FIVE)
//   + 北新地 鮨 天ぷら いわい 別邸 Kitashinchi Sushi Tempura Iwai Bettei (sushi and tempura course, Kitashinchi, since 2023)
//   + 鮨 惣五郎 Sushi Sogoro (seven-seat sushi counter, Kitashinchi, since 2013; Tabelog Sushi WEST 100 2021)
//   - 梅の花 梅田店 27111233 skipped: national chain of the listed company 株式会社梅の花.
//   - 産直鮨 一石三鳥 27143111 skipped: one of 18 shops the 一石三鳥 group opened in five years.
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-01): the odd ids in order were 27138591, 27111233,
//   27143111, 27000283, then 27137579 and 27077129 to make four records after the two chain skips.
//   Chain check: barefoot curry is three shops of barefoot LLC (Links Umeda, Minami Senba, Wanowa Cafe in Abeno; barefoot.jp);
//   its Minami Senba shop (Tabelog 27113815) is not in data/osaka.json. Tako no Tetsu is three shops, all in Umeda
//   (Kakuda, Grand Green Osaka, KITTE Osaka; the Marubiru shop closed 25 May 2023; takonotetsu.co.jp). Iwai is a group of
//   five 鮨 天ぷら いわい shops (Kitashinchi, Hiroshima, Gion, Kichijoji, Ginza; iwai-g.com) grown from one Ashiya restaurant;
//   none is in data/*.json. Sushi Sogoro: no other branch found. None of the four is in data/osaka.json (grep by id, name
//   and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27111233', '梅の花 梅田店: branch of the national Ume no Hana chain of 株式会社梅の花 (other branches include 栄店 in Nagoya and 本町店 in Osaka on restaurant.ikyu.com, and 百道店 in Fukuoka on gnavi).');
skip('27143111', '産直鮨 一石三鳥: Isseki Sancho group (株式会社Human Qreate), 18 shops in Tokyo, Osaka, Kyoto and Shizuoka five years after its first shop in October 2020 (press release, 27 November 2025, prdesse.com/posts/download_file/21985); a rapidly expanding chain.');

// ================================================================ barefoot curry Links Umeda
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27138591/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://barefoot.jp/'; const OFFL = 'https://barefoot.jp/links-umeda/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_barefoot_curry_links_umeda', name: 'ベアフット カリー リンクス梅田店 (barefoot curry Rinkusu umeda ten)', category: 'OMNI',
    lat: 34.704123, lng: 135.496333, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Every set comes with naan (wheat), plain or cheese, alongside a mini rice; one diner swapped the naan for rice (May 2026). Ask whether the curries are thickened with flour.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Shop statement (Tabelog): "For vegans and vegetarians, we offer flexible cooking options"; Tabelog lists vegan, vegetarian, halal and Hindu options, and the official page says the shop is popular with vegetarian and vegan guests. The Dal Bhat set is lentil curry, rice, greens and vegetables (official site). Ask which curries suit, and for rice instead of naan, since naan recipes often use dairy.',
    hours_raw: 'Daily 11:00–23:00, last order 22:30, open all year (Tabelog; official site). Official site: lunch 11:00–16:00, café time 15:00–17:00, dinner 16:00–23:00. Reservations accepted (Tabelog); whole-shop hire from 30 people on weekdays after 17:00 (official site). No cover charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, PayPay, Alipay, WeChat Pay and more (Tabelog). 50 seats: 7 at the counter, tables for 2 and for 4–5; non-smoking, smoking room on the same floor; wheelchair accessible; free Wi-Fi; English menu and English-speaking staff; kids menu, strollers welcome (Tabelog). Parking in the Yodobashi Camera car park (Tabelog). Opened 21 June 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Links Umeda 8F (the restaurant floor of Yodobashi Camera Umeda), Ohfuka-cho 1-1 — just past the Midosuji Line Umeda Stn north gate; 5–6 min from JR Osaka Stn',
    cuisine: 'Indian and Nepali curry house (official site) · sets with unlimited freshly baked naan and rice (Tabelog; August 2026) · two curries chosen from nine for the naan set (June 2026); spice level to order · official menu (undated, tax included): BBQ Lunch Set with chicken tikka, cheese naan and mini rice ¥1,298 (one curry) or ¥1,518 (two); Dal Bhat Set ¥2,255; Cheese Nan Set ¥1,870 or ¥2,090; barefoot Dinner Set with chicken kebab and tikka ¥2,420 · reviewers paid ¥1,850 for a two-curry naan set plus ¥200 for mutton curry (July 2026) and ¥1,650 for two curries (August 2026) · butter chicken, spinach, chicken, mutton and vegetable curries; shrimp curry; tandoori shrimp (2 pieces ¥780, May 2026); tandoori chicken; Tukpa, a spicy mutton curry soup (July 2026); mutton BBQ skewers and lamb chops (Tabelog) · sweet naans (anko, chocolate) and carrot halwa in café time (official site) · Pair Set for two ¥5,500 with a drink and dessert; party plans from ¥2,365 for four or more (Tabelog) · Kaku highball ¥480 (July 2026); world beers and wine',
    website: OFFL, gmaps: gm('ベアフット カリー リンクス梅田店'), menu_url: OFFL,
    notes: "[Curry · Umeda, Links Umeda 8F] An Indian and Nepali curry house on the restaurant floor of the Yodobashi Camera building, a few steps from the subway's north gate. The founders write of coming from Nepal and of naming the shop after a grandmother's barefoot strength; the chef trained in India before coming to Japan (official site). Sets bring two curries with unlimited naan and rice: diners name the butter chicken and the spinach curry, and a cheese naan that is \"chewy and delicious\" but filling. Spice levels are chosen when you order; a curry called extra spicy was not very spicy for one diner (May 2026), while the mutton Tukpa soup made another's lips tingle (July 2026). A naan set with two curries ran ¥1,650–1,850 in summer 2026. The shop states that it adapts dishes for vegans and vegetarians, and the Nepali Dal Bhat set is lentils, rice and vegetables. Almost full at lunch on one May 2026 visit, quiet at 12:30 on a July weekday; one May 2026 diner felt awkward when a staff member loudly asked \"Just curry?\"",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), trained in India (official site)', 'Run by barefoot LLC (official site)'], origin: 'The founders write "私たちはインドの北に位置する小さな国ネパールから来ました" (we came from Nepal, a small country north of India); official site.', background: 'Official site (read 2026-11-01): the name comes from the barefoot strength of a grandmother who lived rooted in the land, and from the Buddha\'s words "walk alone like a rhinoceros horn"; "barefoot curryのシェフは、インドで厳しい下積み修行を経て来日しました" (the chef came to Japan after a hard apprenticeship in India). A 50 cm singing bowl from Nepal, engraved with the Buddha\'s footprint, greets guests at the entrance. Links Umeda opened in 2023 (official site); the company also runs a Minami Senba shop and Wanowa Cafe in Abeno Bel-ta. Thirty kinds of curry, biryani and mutton BBQ skewers are the popular dishes (official site).', philosophy: 'In India and Nepal it is a virtue to feed family and friends until full; the staff treat guests as family (official site).', specialty: 'Two-curry sets with unlimited naan; cheese naan; Dal Bhat set.',
      anecdotes: [
        { text: '"The tandoori shrimp were surprisingly large, with two pieces that made me think, \'Is this a case of reverse sample fraud?\'" — May 2026, tandoori shrimp ¥780.', source: R + 'B527515602/' },
        { text: '"I mistakenly thought the Tukpa, which looked like it had a clear broth from the food samples outside, would not be spicy … It was a curry soup. The mutton was delicious, and there were plenty of vegetables." — July 2026, a weekday lunch.', source: R + 'B531692431/' },
        { text: '"I was eager to order a second helping, but I ended up getting too full and couldn\'t do it" — July 2026, after butter chicken and spinach curry with naan.', source: R + 'B532175271/' },
      ],
      japanese_sources_summary: '公式サイト: barefoot LLC の店、ネパールから来た人たちのインド・ネパール料理、店名は祖母の裸足のたくましさから、シェフはインドで修行して来日、リンクス梅田店は2023年オープン、カレー30種類、ビリヤニ、マトンBBQ串が人気、ナン食べ放題、ベジタリアンや VEGAN の人にも好評、ランチ11:00〜16:00、カフェ15:00〜17:00、ディナー16:00〜23:00、ダルバートセット2,255円 (税込)、チーズナンセット1,870円・2,090円、ほかに南船場店とあべのベルタのわのわカフェ。食べログ (店舗会員): 大阪市北区大深町1-1 リンクス梅田 8F、毎日11:00〜23:00 (L.O.22:30)、年中無休、50席、禁煙、英語メニュー、英語を話すスタッフ、ヴィーガン・ベジタリアン・ハラール・ヒンドゥーのオプション、2023年6月21日オープン。口コミ (2026年5〜8月): カレー2種のナンのセット1,650〜1,850円、ナンとご飯はおかわり自由、チーズナン、バターチキン、ほうれん草のカレー、タンドリーシュリンプ780円、辛いマトンの Tukpa、辛さを選べる。',
      confidence: 'medium', sources: [TB, OFF, OFFL, R + 'B527515602/', R + 'B527793655/', R + 'B527880143/', R + 'B529395588/', R + 'B529660670/', R + 'B531668100/', R + 'B531692431/', R + 'B532175271/', R + 'B532197328/', R + 'B533783653/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); order by calling the staff to the table (May 2026); Indian diners and many overseas visitors at lunch and dinner (July 2026 reviews; official site).' },
    safety: { ...SAFETY0, positives: [{ text: 'Shop statement (Tabelog): "For vegans and vegetarians, we offer flexible cooking options to accommodate your needs"; Tabelog lists vegan, vegetarian, halal and Hindu options.', source: TB }, { text: 'Official site: popular with vegetarian and VEGAN guests (ベジタリアン、VEGANの方にも好評).', source: OFFL }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区大深町1-1 リンクス梅田 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026; the official site lists the shop (read 2026-11-01).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区大深町1番1号 (go) 86m (a large building block); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OFFL, TB, R + 'B527515602/', R + 'B532197328/', R + 'B533783653/'],
    price_note: 'Set prices from the official Links Umeda page (undated, tax included); reviewers paid ¥1,850 (July 2026) and ¥1,650 (August 2026) for two-curry naan sets; tandoori shrimp from a May 2026 review; Pair Set from Tabelog.', last_checked: TODAY, items: [
      it('BBQランチセット', '', 'BBQ Lunch Set: one curry, salad, chicken tikka, pickles, cheese naan and mini rice (two curries ¥1,518)', '¥1,298', 'Lunch', 'no', 'no', 'Official site; lunch 11:00–16:00.', 'bbq_lunch_set'),
      it('ダルバートセット', '', 'Dal Bhat Set: lentil curry and one more curry, basmati or jeera rice, greens, vegetable dish, pickles, papad, salad, drink', '¥2,255', 'Lunch', 'ask', 'ask', 'Official site.', 'dal_bhat_set'),
      it('チーズナンセット', '', 'Cheese Nan Set: one curry, salad, pickles, papad, cheese naan and mini rice (two curries ¥2,090)', '¥1,870', 'Dinner', 'no', 'no', 'Official site.', 'cheese_nan_set'),
      it('ベアフットディナーセット', '', 'barefoot Dinner Set: two curries, chicken kebab, chicken tikka, naan and mini rice, pickles, salad, papad, drink', '¥2,420', 'Dinner', 'no', 'no', 'Official site.', 'barefoot_dinner_set'),
      it('', '', 'Naan set with two curries (unlimited naan and rice)', '¥1,650', 'Set', 'no', 'ask', 'August 2026 review; ¥1,850 in July 2026.', 'two_curry_naan_set'),
      it('', '', 'Tandoori shrimp (2 pieces)', '¥780', 'A la carte', 'ask', 'no', 'May 2026 review.', 'tandoori_shrimp'),
      it('', '', 'Pair Set for two (recommended dishes, a drink each and dessert)', '¥5,500', 'Set', 'no', 'ask', 'Tabelog listing.', 'pair_set'),
      it('チョコレートナン', '', 'Chocolate naan (café time)', '¥825', 'Cafe', 'no', 'ask', 'Official site; café time 15:00–17:00.', 'chocolate_naan'),
    ] }, {
    cuisine: 'インド・ネパールのカレーの店 (公式サイト)・焼きたてのナンとご飯はおかわり自由 (食べログ、2026年8月)・ナンのセットのカレーは9種類から2つ (2026年6月)、辛さは注文時に選ぶ・公式メニュー (日付なし、税込): BBQランチセット、チキンティッカ、チーズナンとミニライスつき、カレー1種1,298円、2種1,518円、ダルバートセット2,255円、チーズナンセット1,870円か2,090円、チキンケバブとティッカつきのベアフットディナーセット2,420円・口コミでは2種のナンのセット1,850円とマトンカレー追加200円 (2026年7月)、カレー2種1,650円 (2026年8月)・バターチキン、ほうれん草、チキン、マトン、野菜のカレー、エビのカレー、タンドリーシュリンプ (2尾780円、2026年5月)、タンドリーチキン、辛いマトンのカレースープ Tukpa (2026年7月)、マトンのBBQ串とラムチョップ (食べログ)・カフェタイムにはあんこナン、チョコレートナン、にんじんのハルワ (公式サイト)・2人用の Pair Set 5,500円 (ドリンクとデザートつき)、4人からのパーティープラン2,365円から (食べログ)・角ハイボール480円 (2026年7月)、世界のビールとワイン',
    neighborhood: 'ヨドバシカメラ梅田のレストランフロア、リンクス梅田の8階 (大深町1-1)。御堂筋線梅田駅の北改札からすぐ、JR大阪駅から徒歩5〜6分',
    gf_detail: '要確認。グルテンの情報なし。セットにはどれもナン (小麦) がつき、プレーンかチーズで、ミニライスも。ナンをご飯に替えた人もいる (2026年5月)。カレーに小麦粉でとろみをつけているかも確認を。',
    vegan_detail: '店の説明 (食べログ): ヴィーガンやベジタリアンの人に合わせて柔軟に調理する。食べログにはヴィーガン、ベジタリアン、ハラール、ヒンドゥーのオプションの表示があり、公式サイトにもベジタリアンや VEGAN の人に好評とある。ダルバートセットは豆のカレー、ご飯、青菜、野菜 (公式サイト)。どのカレーが合うか、ナンの代わりにご飯にできるか確認を。ナンには乳製品を使うことが多い。',
    notes: '[カレー・梅田、リンクス梅田8階] ヨドバシカメラのビルのレストランフロアにあるインド・ネパール料理のカレーの店で、地下鉄の北改札からすぐ。公式サイトによると、ネパールから来た人たちの店で、店名は祖母の裸足のたくましさにちなみ、シェフはインドで修行してから来日した。セットはカレー2種にナンとご飯がおかわり自由。口コミではバターチキンとほうれん草のカレー、もちもちでおいしいけれどおなかにたまるチーズナンの名前が挙がる。辛さは注文のときに選び、激辛でもあまり辛くなかったという人 (2026年5月) もいれば、マトンのスープ Tukpa で唇がしびれた人 (2026年7月) も。2026年夏はカレー2種のナンのセットが1,650〜1,850円。ヴィーガンやベジタリアンに合わせて調理すると店が書いていて、ネパールのダルバートセットは豆、ご飯、野菜。2026年5月のランチはほぼ満席、7月の平日12時半はすいていた。カレーだけを頼んだらスタッフに大きな声で聞き返されて気まずかったという2026年5月の声も。',
  });
}

// ================================================================ 蛸之徹 角田店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27000283/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://takonotetsu.co.jp/';
  const H = day(['11:30', '23:00']);
  put({
    id: 'osaka_tako_no_tetsu_kakuda', name: '蛸之徹 角田店 (Tako no Tetsu Kakuda ten)', category: 'OMNI',
    lat: 34.704339, lng: 135.501126, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki and okonomiyaki are made from a wheat-flour batter (the official site calls it a "wheat flour-based batter"), and the rest of the menu is yakisoba, yaki-udon and other griddle dishes cooked on the same plates.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the batter is made with dashi (official site), bonito flakes go on top, and most dishes hold octopus, pork, beef or seafood. Tabelog shows a vegetarian-options flag, but no dish is described.',
    hours_raw: 'Daily 11:30–23:00, last order 22:30; weekday lunch menu 11:30–15:00, with the regular menu also served (Tabelog; official site). Closing days not fixed (Tabelog). Reservations accepted, and booked online through Tabelog by one September 2026 diner; a Friday-night wait (August 2026). No cover charge (Tabelog). Cards (VISA, Master, JCB, AMEX) and PayPay; no e-money (Tabelog). 47 seats with tatami and sunken-kotatsu seating, a semi-private room for 6, whole-shop hire 20–50; non-smoking; English menu; children welcome, kids menu; takeout (Tabelog). Opened 1 August 1979 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kakuta-cho 1-10, くろふねビル 1F, just behind HEP FIVE — 3 min from Hankyu Umeda Stn, 8 min from JR Osaka Stn',
    cuisine: 'Cook-your-own takoyaki on the table teppan since 1979; the official site calls it the original shop where you make takoyaki yourself · staff start the batter and octopus and help first-timers (official site; August 2026) · a serving is 12 pieces (September 2026) · takoyaki ¥860, tako-shiso cheese ¥960, Tako no Tetsu-yaki with octopus, beef and shrimp ¥960, Tako no Tetsu sour ¥650 (September 2026) · official menu (undated): tropical-yaki with corn, cheese and pineapple, taiyo-yaki with changja and cheese, buta-tama and other okonomiyaki, modern-yaki, pizza-flavour yaki, yakisoba or yaki-udon with pork and squid, soba-meshi, tonpei-yaki · sauces (six per Tabelog; the official site describes five): the house sauce made with Oliver Sauce, sesame soy made daily by the head chef, thick doro sauce, bonito-dashi tako-tsuyu for Akashi-yaki style dipping, ponzu (official site) · weekday lunch sets with a drink and free refills of rice and miso soup (official site) · courses with 120-minute all-you-can-drink: 7 dishes ¥4,300, 8 dishes ¥5,000, three or more (Tabelog) · house sauce and frozen shiso takoyaki to take home (official site)',
    website: OFF, gmaps: gm('蛸之徹 角田店'), menu_url: OFF,
    notes: "[Takoyaki · Umeda, behind HEP FIVE] A takoyaki shop where you grill your own at the table, as guests have since 1979; the official site calls it the original of the style. Staff pour in the batter and octopus to start you off and help if yours won't come out round; then add pickled ginger and tenkasu, shape, and choose from the house sauce made with Oliver Sauce, a spicy doro sauce, sesame soy, ponzu or a bonito-dashi dip. The smokeless tables were patented by the previous owner, and the griddles have been in use since the shop opened (Tabelog). Walls are covered in celebrity autographs. A serving of 12 is ¥860; okonomiyaki, yakisoba (one diner's highlight was the ponzu yakisoba), soba-meshi and an all-you-can-drink course from ¥4,300 make it a group spot, with tatami and sunken seating. Diners call it fun more than gourmet: one found home-grilled takoyaki short of a professional's (October 2026). Sister shops at KITTE Osaka and Grand Green Osaka.",
    chef_bio: { chef_name: null, roles: ['Head chef (料理長, unnamed), who makes the sesame soy sauce daily (official site)', 'Previous owner (先代, unnamed), who developed the patented smokeless table and the batter recipe (official site; Tabelog)'], origin: 'Opened in 1979 (official site; Tabelog opening date 1 August 1979).', background: 'Per the official site (read 2026-11-01): "1979年の蛸之徹創業以来 楽しく・美味しく・変わらぬ味にこだわり続ける 元祖【自分でたこ焼を焼いて食べるお店】"; the smokeless table developed and patented by the previous owner and the teppan inherited from the founding; the batter recipe the previous owner devised, unchanged since 1979; octopus never frozen, bought fresh daily; Kujo green onions from a contracted Kyoto farm; the house sauce developed with Oliver Sauce. The shop listing says over 2,000 well-known guests have visited (Tabelog). Branches: Grand Green Osaka and KITTE Osaka (opening notice dated 31 July 2024); a closure notice for the Marubiru shop is dated 25 May 2023 (official site news).', philosophy: '"楽しく・美味しく・変わらぬ味" — fun, delicious, an unchanging taste (official site).', specialty: 'Cook-your-own takoyaki; tako-shiso cheese.',
      anecdotes: [
        { text: '"The staff helped by adding the octopus and batter to get us started! I added some pickled ginger and tenkasu, and started shaping them." — August 2026, a lunch before heading home.', source: R + 'B534280227/' },
        { text: '"Feeling frustrated about not grilling it well the first time, I ordered another serving to challenge myself, and I was able to grill it better than the first time" — September 2026, takoyaki ¥860.', source: R + 'B536293562/' },
        { text: '"The walls are adorned with signatures from famous personalities, making the wait for the takoyaki enjoyable." — August 2026.', source: R + 'B534821683/' },
      ],
      japanese_sources_summary: '公式サイト: 1979年創業、元祖「自分でたこ焼を焼いて食べるお店」、先代が開発し特許を取った無煙テーブル、創業からの鉄板、先代が調合した秘伝の生地、冷凍しない生だこを毎日仕入れ、京都の契約農家の九条ネギ、花かつお、オリバーソースと共同開発の特製ソース、料理長が毎日作るゴマ醤油、どろソース、たこつゆ、ポン酢、たこ焼860円、蛸之徹焼960円、たこシソチーズ焼960円、平日のランチはドリンクつき、ご飯とみそ汁のおかわり無料、ほかにグラングリーン大阪店と KITTE大阪店 (2024年7月31日付けのオープンのお知らせ)、マルビル店の閉店のお知らせは2023年5月25日付け。食べログ (店舗会員): 大阪市北区角田町1-10 くろふねビル 1F、毎日11:30〜23:00 (L.O.22:30)、平日ランチ11:30〜15:00、不定休、47席、座敷と掘りごたつ、半個室6名、禁煙、英語メニュー、子ども歓迎、飲み放題つきコース4,300円・5,000円、1979年8月1日オープン。口コミ (2026年8〜10月): スタッフが最初に生地とたこを入れてくれる、1人前12個、有名人のサインの壁、ポン酢の焼きそば、金曜の夜は待ちが出た、自分で焼くとプロの味にはかなわないという声。',
      confidence: 'medium', sources: [TB, OFF, R + 'B533519540/', R + 'B534280227/', R + 'B534821683/', R + 'B535125985/', R + 'B535129605/', R + 'B536002170/', R + 'B536293562/', R + 'B536814623/', R + 'B537149855/', R + 'B537533823/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog) and a bilingual official site; staff help first-time grillers (official site; 2026 reviews). Popular with visitors to Osaka (2026 reviews).' },
    safety: { ...SAFETY0, gf_cross_contamination: [{ text: 'Batter described as wheat flour-based (official site); everything is cooked on shared teppan.', source: OFF }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区角田町1-10 くろふねビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026; listed on the official site (news dated 6 October 2026).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区角田町1番10号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OFF, TB, R + 'B536293562/', R + 'B537533823/'],
    price_note: 'Takoyaki, tako-shiso cheese, Tako no Tetsu-yaki and the sour from a September 2026 review (the first three match the official site); other prices from the official site (undated); course from Tabelog and an October 2026 review.', last_checked: TODAY, items: [
      it('たこ焼', '', 'Takoyaki, cooked yourself (12 pieces)', '¥860', 'Takoyaki', 'no', 'no', 'September 2026 review; official site.', 'takoyaki'),
      it('たこシソチーズ焼', '', 'Tako-shiso cheese (octopus, shiso, cheese)', '¥960', 'Takoyaki', 'no', 'no', 'September 2026 review; official site.', 'tako_shiso_cheese'),
      it('蛸之徹焼', '', 'Tako no Tetsu-yaki (octopus, beef, shrimp)', '¥960', 'Takoyaki', 'no', 'no', 'September 2026 review; official site.', 'tako_no_tetsu_yaki'),
      it('トロピカルたこ焼', '', 'Tropical-yaki (corn, cheese, pineapple)', '¥830', 'Takoyaki', 'no', 'no', 'Official site (undated).', 'tropical_yaki'),
      it('豚玉', '', 'Buta-tama okonomiyaki (pork)', '¥960', 'Okonomiyaki', 'no', 'no', 'Official site (undated).', 'buta_tama'),
      it('イカ豚焼きそば', '', 'Yakisoba or yaki-udon with pork and squid', '¥1,030', 'Teppan', 'no', 'no', 'Official site (undated).', 'yakisoba'),
      it('蛸之徹そばめし', '', 'Tako no Tetsu soba-meshi (rice fried with noodles)', '¥1,150', 'Teppan', 'no', 'no', 'Official site (undated).', 'soba_meshi'),
      it('とん平焼', '', 'Tonpei-yaki (pork omelette)', '¥780', 'Teppan', 'ask', 'no', 'Official site (undated).', 'tonpei_yaki'),
      it('', '', 'Course: 7 dishes with 120-minute all-you-can-drink (three or more)', '¥4,300', 'Course', 'no', 'no', 'Tabelog listing; October 2026 review.', 'course_7'),
      it('', '', 'Tako no Tetsu sour', '¥650', 'Drinks', '', '', 'September 2026 review.', 'tako_sour'),
    ] }, {
    cuisine: '1979年から、テーブルの鉄板で自分で焼くたこ焼。公式サイトでは元祖「自分でたこ焼を焼いて食べるお店」・最初に生地とたこをスタッフが入れてくれて、初めての人は手伝ってもらえる (公式サイト、2026年8月)・1人前12個 (2026年9月)・たこ焼860円、たこシソチーズ焼960円、たこ・牛肉・えび入りの蛸之徹焼960円、蛸之徹サワー650円 (2026年9月)・公式メニュー (日付なし): コーン・チーズ・パインのトロピカルたこ焼、チャンジャとチーズの太陽焼、豚玉などのお好み焼き、モダン、ピザ風味焼、イカ豚焼きそばか焼うどん、そばめし、とん平焼・たれ (食べログでは6種類、公式サイトに載っているのは5種類): オリバーソースと共同開発の特製ソース、料理長が毎日作るゴマ醤油、どろソース、明石焼き風に食べるカツオだしのたこつゆ、ポン酢 (公式サイト)・平日のランチはドリンクつきで、ご飯とみそ汁のおかわり無料 (公式サイト)・120分飲み放題つきのコースは7品4,300円、8品5,000円、3名から (食べログ)・持ち帰りに特製ソースと冷凍しそたこ焼 (公式サイト)',
    neighborhood: '角田町1-10 くろふねビル 1階、HEP FIVE のすぐ裏。阪急梅田駅から徒歩3分、JR大阪駅から徒歩8分',
    gf_detail: 'グルテンフリーではありません。たこ焼とお好み焼きは小麦粉の生地 (公式サイト)。ほかのメニューも焼きそば、焼うどんなど、同じ鉄板で焼くもの。',
    vegan_detail: 'ヴィーガンではありません。生地にはだしを使い (公式サイト)、花かつおをかけ、ほとんどの料理にたこ、豚肉、牛肉、魚介が入る。食べログにはベジタリアンのオプションの表示があるが、どの料理かは書かれていない。',
    notes: '[たこ焼・梅田、HEP FIVE の裏] 1979年からお客さんがテーブルで自分でたこ焼を焼いてきた。公式サイトではこの形の元祖。スタッフが最初に生地とたこを入れてくれて、うまく丸くならないときは手伝ってくれる。紅しょうがと天かすを入れて形を整え、オリバーソースと作った特製ソース、辛口のどろソース、ゴマ醤油、ポン酢、カツオだしのつけだれから選ぶ。煙の出ないテーブルは先代が特許を取ったもので、鉄板は創業から使い続けている (食べログ)。壁は有名人のサインでいっぱい。12個で860円。お好み焼き、焼きそば (ポン酢の焼きそばがいちばんだったという人も)、そばめし、4,300円からの飲み放題つきのコースもあり、座敷と掘りごたつでグループ向き。グルメというより楽しさの店という声が多く、自分で焼くとプロの味にはかなわないという人も (2026年10月)。姉妹店は KITTE大阪とグラングリーン大阪。',
  });
}

// ================================================================ 北新地 鮨 天ぷら いわい 別邸
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27137579/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://iwai-g.com/'; const OFFS = 'https://iwai-g.com/shop/kitashinchi/';
  const WD = day(['11:30', '14:00'], ['17:00', '23:00']); const WE = day(['11:30', '14:00'], ['16:00', '23:00']);
  put({
    id: 'osaka_iwai_bettei_kitashinchi', name: '北新地 鮨 天ぷら いわい 別邸 (Kitashinchi Sushi Tempura Iwai Bettei)', category: 'OMNI',
    lat: 34.697761, lng: 135.498727, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Courses combine sushi with tempura (wheat batter) and side dishes such as a fish katsu sandwich (July 2026); sushi is usually served with soy sauce or a soy glaze, which normally contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses of sushi, seafood and tempura.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–23:00; Sat, Sun and holidays 11:30–14:00 and 16:00–23:00; closing days not fixed (Tabelog; official site). Reservations accepted; phone cancellations are not taken outside business hours (Tabelog). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 seats: counter and private rooms for 2, 4 and 6; whole-shop hire up to 20; non-smoking; children welcome (Tabelog). Opened 10 September 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 曽根崎新地 1-9-11, 1F — 2 min from Kitashinchi Stn',
    cuisine: 'Edo-style sushi and tempura in one course, from the Iwai group that began as a tempura and wine restaurant in Ashiya (official site; Tabelog) · lunch: weekday nigiri set ¥4,990 (13 items), Omakase Upper ¥6,990 (15 items), Premium Omakase with tempura ¥9,990 (18 items) (Tabelog, tax included) · a ¥6,990 course (August 2026); a ¥10,000 course of appetizers, tempura and sushi (July 2026) · an August 2026 dinner: Akashi octopus, sea bream with shuto, fruit-tomato frappé, steamed abalone, amberjack, bonito, grilled cutlassfish, marinated lean tuna, a one-bite ikura bowl, chawanmushi with shirasu, kombu-cured sea bream, seared kinmedai, toro, red miso soup, tamago, toro-taku roll, fruit · a kaiseki course in October 2026: three appetizers, seven nigiri, ikura bowl, seafood chawanmushi, maki, tamago, soup, seasonal-fruit dessert · shrimp tempura and a fish katsu sandwich (summer 2026) · rare sake and beer (August 2026); wine, shochu and cocktails (Tabelog)',
    website: OFFS, gmaps: gm('北新地 鮨 天ぷら いわい 別邸'), menu_url: null,
    notes: "[Sushi · Kitashinchi, sushi and tempura in one course] The Kitashinchi branch of Iwai, a group that grew from a tempura and wine restaurant in Ashiya whose Michelin star two years running made its name (official site); here the tempura shares a course with Edo-style sushi. Weekday lunch starts at a ¥4,990 nigiri set and climbs to a ¥9,990 premium omakase with tempura, which makes it one of the gentler ways into a Kitashinchi counter; at dinner diners report spending ¥10,000–14,999 (Tabelog). Courses open with small seasonal dishes (Akashi octopus, a fruit-tomato frappé, steamed abalone in August 2026), then tempura and nigiri such as kombu-cured sea bream, seared kinmedai and toro. Diners describe a chef who talks diners through each dish and puts nervous first-timers at ease; the tempura is soft rather than crisp, which a June 2026 diner did not care for and a July 2026 diner called a matter of taste. Private rooms for two to six (a December 2025 diner booked one for a business dinner); tell the chef if you are short of time. Service charge 10%.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "very approachable", August 2026 review)', 'Head chef (unnamed), who explains each dish (July 2026 review)'], origin: 'Branch of 鮨 天ぷら いわい, which began in Ashiya, Hyogo as 天ぷら&ワイン いわい (official site).', background: 'Group site (read 2026-11-01): the original Ashiya restaurant earned a Michelin star two years running ("ミシュランガイドで2年連続一つ星を獲得"), then opened in Gion (Kyoto), Ginza (Tokyo), Hiroshima and elsewhere, some shops adding Edo-style sushi; the shops listed now are Kitashinchi, Hiroshima, Gion, Kichijoji and Ginza. The group\'s owner (店主, unnamed) holds wine-sommelier and vegetable-sommelier qualifications, grew up in a family that ran a Japanese restaurant, and has long hotel experience. The Tabelog listing calls this shop the Kitashinchi opening of the Michelin-listed "Ashiya Iwai"; the group site lists the same address as 北新地 鮨 天ぷら いわい. In 2026 reviews the owner is "very approachable" (August) and the head chef explains each dish (July).', philosophy: '"自然の物語を天ぷらに閉じ込める" — sealing nature\'s story into tempura, with seasonal produce (official site).', specialty: 'Sushi and tempura in one course.',
      anecdotes: [
        { text: '"As soon as we were seated, the chef kindly engaged us in conversation, helping my wife, who is usually shy, to relax." — August 2026, a second visit, with family.', source: R + 'B521760188/' },
        { text: '"Given the location, the staff is mindful of time, so if you\'re in a hurry, it might be a good idea to inform the chef in advance!" — July 2026, a family celebration on the ¥10,000 course.', source: R + 'B531952188/' },
        { text: '"Since we were seated at the counter, we could watch the sushi being prepared right in front of us" — October 2026, lunch on the Omakase Premium Course.', source: R + 'B538157233/' },
      ],
      japanese_sources_summary: '公式サイト: 鮨 天ぷら いわい、兵庫県芦屋市の「天ぷら&ワイン いわい」から始まり、ミシュランガイドで2年連続一つ星、その後祇園、銀座、広島などに出店、一部の店では江戸前寿司も、店主はワインソムリエと野菜ソムリエの資格を持ち、日本料理店が生家でホテルでの経験も豊富、店舗は北新地、広島、祇園、吉祥寺、銀座。北新地の店: 大阪市北区曽根崎新地1-9-11 1F、ランチ11:30〜14:00、ディナー17:00〜23:00 (土日祝16:00〜23:00)、不定休、サービス料10%。食べログ (店舗会員): 北新地 鮨 天ぷら いわい 別邸、北新地駅から徒歩2分、平日限定ランチのにぎりのセット4,990円、ランチのおまかせ6,990円、天ぷらつきの Premium Omakase 9,990円、20席、個室2・4・6名、禁煙、子ども可、2023年9月10日オープン。口コミ (2026年1〜10月): 1万円のコース、6,990円のコース、前菜、天ぷら、握り、いくらの小さな丼、茶碗蒸し、大将が料理を説明して緊張をほぐしてくれる、珍しい日本酒とビール、天ぷらはさくさくではなくやわらかめ、急ぐなら先に伝えて。',
      confidence: 'medium', sources: [TB, OFF, OFFS, R + 'B521760188/', R + 'B531455409/', R + 'B531952188/', R + 'B534767843/', R + 'B535494713/', R + 'B535640279/', R + 'B535641274/', R + 'B536948308/', R + 'B537194373/', R + 'B538157233/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses booked in advance; the chef explains each dish (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-9-11 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026; listed on the group site (read 2026-11-01).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番11号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B531952188/', R + 'B535641274/'],
    price_note: 'Lunch courses from the Tabelog listing (tax included; 10% service on top); the ¥10,000 dinner course from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Weekday lunch nigiri set (13 items)', '¥4,990', 'Lunch course', 'ask', 'no', 'Tabelog listing.', 'lunch_nigiri_set'),
      it('', '', 'Lunch Omakase Upper Course (15 items)', '¥6,990', 'Lunch course', 'ask', 'no', 'Tabelog listing; August 2026 review.', 'lunch_omakase_upper'),
      it('', '', 'Lunch Premium Omakase Course with seasonal tempura (18 items)', '¥9,990', 'Lunch course', 'no', 'no', 'Tabelog listing.', 'lunch_premium_omakase'),
      it('', '', 'Course of appetizers, tempura and sushi', '¥10,000', 'Course', 'no', 'no', 'July 2026 review.', 'course_10000'),
    ] }, {
    cuisine: '江戸前の鮨と天ぷらをひとつのコースで。芦屋の天ぷらとワインの店から始まったいわいのグループ (公式サイト、食べログ)・ランチ: 平日限定のにぎりのセット4,990円 (13品)、おまかせのコース6,990円 (15品)、季節の天ぷらつきの Premium Omakase 9,990円 (18品) (食べログ、税込)・6,990円のコース (2026年8月)、前菜、天ぷら、鮨の1万円のコース (2026年7月)・2026年8月の夜: Akashi のたこ、鯛と Shuto、フルーツトマトのフラッペ、蒸しアワビ、カンパチ、カツオ、焼いたタチウオ、赤身の漬け、ひと口のいくら丼、しらすの茶碗蒸し、鯛の Kombu Zuke、炙りの金目鯛、トロ、赤だし、玉子、トロたく巻き、フルーツ・2026年10月の会席のコース: 前菜3品、握り7貫、いくら丼、魚介の茶碗蒸し、巻物、玉子、汁物、季節のフルーツのデザート・えびの天ぷらと魚のカツサンド (2026年夏)・珍しい日本酒とビール (2026年8月)、ワイン、焼酎、カクテル (食べログ)',
    neighborhood: '北新地、曽根崎新地1-9-11 の1階。北新地駅から徒歩2分',
    gf_detail: '予約時に要確認。グルテンの情報なし。コースは鮨に天ぷら (小麦の衣) や魚のカツサンド (2026年7月) などが加わる。鮨には醤油や煮ツメを使うことが多く、ふつうは小麦を含む。',
    vegan_detail: 'ヴィーガンではありません。鮨、魚介、天ぷらのコース。',
    notes: '[鮨・北新地、鮨と天ぷらをひとつのコースで] 芦屋の天ぷらとワインの店から始まり、ミシュランの星を2年続けて取って名が知られたいわいのグループの北新地の店 (公式サイト)。ここでは天ぷらと江戸前の鮨をひとつのコースで出す。平日のランチは4,990円のにぎりのセットから、天ぷらつきの9,990円の Premium Omakase まであり、北新地のカウンターに入りやすい店のひとつ。夜は口コミの平均で10,000〜14,999円 (食べログ)。コースは季節の小皿 (2026年8月は Akashi のたこ、フルーツトマトのフラッペ、蒸しアワビ) から始まり、天ぷらと、鯛の Kombu Zuke、炙りの金目鯛、トロなどの握りへ。大将が料理をひとつずつ説明し、初めてで緊張している人もほぐしてくれるという声。天ぷらはさくさくではなくやわらかめで、2026年6月の人は好みではなかったと書き、7月の人は好みが分かれるところと書いている。2〜6人の個室は接待向き。時間がないときは先に大将に伝えて。サービス料10%。',
  });
}

// ================================================================ 鮨 惣五郎
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27077129/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_sushi_sogoro_kitashinchi', name: '鮨 惣五郎 (Sushi Sogoro)', category: 'OMNI',
    lat: 34.697527, lng: 135.497003, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Course dishes include spring rolls (wheat wrappers) and a thickened ankake dashi sauce (September 2026); nigiri is usually finished with soy sauce or a glaze, which normally contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase course of fish, shellfish and sushi.',
    hours_raw: 'Daily 11:30–14:00 and 17:00–23:00, holidays included (Tabelog); "Closed: None" (September 2026 review). Reservations needed (December 2024 review); the shop may not answer the phone during service, so book online (Tabelog). A year-end surcharge applies 24–31 December 2026 and 1–11 January 2027 (¥1,000 dinner, ¥500 lunch; Tabelog). Cards (VISA, Master); no e-money or QR (Tabelog). 7 counter seats, all with chairs; non-smoking; no children below junior-high age; go easy on perfume (Tabelog). Opened 28 November 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi main street, 曽根崎新地 1-3-32, Liberty Building 1F — 2 min from Kitashinchi Stn',
    cuisine: 'Seven-seat sushi counter; fish chosen by the chef every morning, rice cooked in a clay pot, red-vinegar rice (Tabelog; reviews) · menu changes monthly (Tabelog) · dinner omakase ¥13,200 tax included (Tabelog; September 2026); lunch courses ¥6,600 and ¥8,800 (Tabelog; an ¥8,800 lunch in September 2026) · a ¥9,900 course in December 2024 and ¥9,000 in June 2024 · September 2026 omakase: butternut-squash potage with crab, tsurumurasaki flowers and pink pepper; seared bonito with corn sauce; ayu spring rolls with Manganji pepper and shiso, served with grapes; sanma sushi with matsutake, chives and a heap of ikura; hamo with fried eggplant in matsutake ankake; then nigiri such as finely scored squid, flounder, sweet shrimp, sawara with yuzu pepper, sea urchin, marinated lean tuna, toro, oyster, kinmedai and lightly simmered anago; aosa red miso soup · October 2026: kensaki squid and steamed sawara with white miso · sake and wine',
    website: null, gmaps: gm('鮨 惣五郎 北新地'), menu_url: null,
    notes: "[Sushi · Kitashinchi main street, seven seats] A seven-seat counter on Kitashinchi's main street that began as a standing sushi bar; the sign still said so in December 2024, but everyone sits now. The chef picks the fish each morning, the rice is cooked in a clay pot and seasoned with red vinegar, and the monthly omakase mixes inventive small plates with small, easy nigiri: in September 2026, a butternut-squash potage with crab, seared bonito with a corn sauce, ayu spring rolls, sanma sushi heaped with ikura, then about ten nigiri including oyster, marinated tuna and fluffy anago. At ¥13,200 for dinner (lunch ¥6,600 or ¥8,800), diners call it remarkably reasonable for Kitashinchi. The chef is friendly and full of jokes, described in a December 2024 review as multilingual. One December 2025 diner felt rushed by sushi piling up; on a return in September 2026 the same diner found the service much improved. Seats are close together. No children below junior-high age; book ahead.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), who chooses the fish each morning (Tabelog; December 2024 review)', 'Owner (unnamed; mentioned in a September 2026 review)'], origin: null, background: 'Opened on 28 November 2013 (Tabelog); first a standing sushi bar, now seated (reviews, December 2024 and September 2026). Tabelog Sushi WEST 100, 2021. The shop text: sushi has become more exclusive over time, and the shop aims to bring back the casualness and joy of sushi\'s origins, travelling the country to choose ingredients (Tabelog). Diners describe a "friendly and skilled chef" who "runs the establishment with charm" (September 2026), a chef "sharing some silly jokes to lighten the mood" (September 2026), and a "multilingual and friendly chef" (December 2024); a June 2024 diner heard that the chef is "quite the eccentric cook".', philosophy: 'To recreate the casualness and joy of sushi\'s origins and show each ingredient at its best (Tabelog).', specialty: 'Monthly omakase of small plates and nigiri on red-vinegar rice.',
      anecdotes: [
        { text: '"Next was the Katsuo no Tataki. I was told to enjoy it with a sauce made from corn paste... I thought it was a bold dish, but it paired perfectly and was delicious!" — September 2026, the ¥13,200 course.', source: R + 'B536575476/' },
        { text: '"Although it mentions standing sushi, you can now enjoy it seated at a leisurely pace." — September 2026, the ¥12,000 omakase (before tax).', source: R + 'B497407395/' },
        { text: '"I visited after 9 months, and it seems there has been some training implemented. The service has significantly improved." — September 2026, a return after a December 2025 visit that felt rushed.', source: R + 'B519607400/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨 惣五郎、大阪市北区曽根崎新地1-3-32 新地リバティービル 1F、北新地駅から徒歩2分、毎日11:30〜14:00、17:00〜23:00、営業中は電話に出られないことがあるのでネット予約を、おまかせ13,200円、ランチ6,600円と8,800円 (税込、月替わり)、年末年始は追加料金、カード (VISA、Master)、カウンター7席 (すべて椅子)、禁煙、中学生未満は不可、香水は控えめに、毎朝仕入れる食材、土鍋で炊くご飯、2013年11月28日オープン、寿司 WEST 百名店 2021。口コミ (2024年6月〜2026年10月): 赤酢のシャリ、小ぶりの握り、かぼちゃのポタージュ、カツオとコーンのソース、鮎の春巻き、いくらをのせたサンマの鮨、はもと茄子の松茸あんかけ、牡蠣の握り、もとは立ち鮨で今は座って食べる、冗談の好きな気さくな大将、2025年12月に急かされたと感じた人が2026年9月にはサービスがよくなったと書いている。',
      confidence: 'medium', sources: [TB, R + 'B486511703/', R + 'B497407395/', R + 'B519607400/', R + 'B535591913/', R + 'B536143896/', R + 'B536575476/', R + 'B536597009/', R + 'B536855385/', R + 'B537851812/', R + 'B538122604/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase course explained at the counter; book online (Tabelog). A December 2024 review calls the chef multilingual and notes many international guests; no English menu listed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-3-32 新地リバティービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with courses priced for December 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目3番32号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535591913/', R + 'B536597009/'],
    price_note: 'Courses from the Tabelog listing (tax included; changing monthly); the ¥13,200 omakase and the ¥8,800 lunch confirmed by September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sogoro omakase course (dinner)', '¥13,200', 'Course', 'ask', 'no', 'Tabelog listing; September 2026 reviews.', 'omakase_course'),
      it('', '', 'Lunch course', '¥6,600', 'Lunch course', 'ask', 'no', 'Tabelog listing.', 'lunch_course_6600'),
      it('', '', 'Lunch course', '¥8,800', 'Lunch course', 'ask', 'no', 'Tabelog listing; September 2026 review.', 'lunch_course_8800'),
    ] }, {
    cuisine: '7席の鮨のカウンター。魚は毎朝大将が選び、ご飯は土鍋で炊き、シャリは赤酢 (食べログ、口コミ)・メニューは月替わり (食べログ)・夜のおまかせ13,200円 (税込、食べログ、2026年9月)、ランチのコースは6,600円と8,800円 (食べログ、2026年9月に8,800円のランチ)・2024年12月は9,900円、2024年6月は9,000円のコース・2026年9月のおまかせ: かにとツルムラサキの花、ピンクペッパーのバターナッツかぼちゃのポタージュ、カツオのたたきのコーンソース、Manganji とうがらしと大葉の鮎の春巻き、ぶどう添え、松茸とニラの入ったサンマの鮨にいくらをたっぷり、はもと揚げ茄子の松茸あんかけ、それから細かく包丁を入れたイカ、ヒラメ、甘エビ、柚子胡椒のサワラ、ウニ、赤身の漬け、トロ、牡蠣、金目鯛、さっと煮た穴子などの握り、あおさの赤だし・2026年10月はケンサキイカ、サワラの白みそ蒸し・日本酒とワイン',
    neighborhood: '北新地の本通り、曽根崎新地1-3-32 新地リバティービル 1階。北新地駅から徒歩2分',
    gf_detail: '予約時に要確認。グルテンの情報なし。コースには春巻き (小麦の皮) やとろみのあるあんかけ (2026年9月) がある。握りはふつう醤油や煮ツメで仕上げ、小麦を含む。',
    vegan_detail: 'ヴィーガンではありません。魚と貝と鮨のおまかせコース。',
    notes: '[鮨・北新地の本通り、7席] 北新地の本通りにある7席のカウンターで、もとは立ち鮨。2024年12月にも看板はそのままだったが、今はみんな座って食べる。魚は毎朝大将が選び、ご飯は土鍋で炊いて赤酢で合わせ、月替わりのおまかせは工夫のある小皿と小ぶりで食べやすい握りの組み合わせ。2026年9月は、かにをのせたバターナッツかぼちゃのポタージュ、コーンソースのカツオのたたき、鮎の春巻き、いくらをたっぷりのせたサンマの鮨、それから牡蠣、赤身の漬け、ふわふわの穴子など握りが10貫ほど。夜13,200円 (ランチ6,600円か8,800円) で、北新地にしてはとても手ごろという声が多い。大将は気さくで冗談好き、2024年12月の口コミでは何か国語も話すという。2025年12月に握りが次々と出て急かされたと感じた人が、2026年9月に再訪してサービスがずっとよくなったと書いている。席の間はせまめ。中学生未満は不可。予約をして。',
  });
}

save();
