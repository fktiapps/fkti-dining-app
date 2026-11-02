// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 3.
//   + お好み焼だん Okonomiyaki Dan (third-floor okonomiyaki on Shinsaibashi-suji by Souemoncho, open to 4 a.m.; Tabelog Okonomiyaki 100 2025)
//   + 香港海鮮飲茶樓 心斎橋店 Hong Kong Seafood Yum cha Ro (dim sum and live-tank seafood, Higashi-Shinsaibashi; Chinese WEST 100 2021)
//   + ヴレ ド ヴレ シェ ヒロ vrai de vrai Chez Hiro (French on a Shinmachi corner since 2003; French WEST 100 2021)
//   + 馬肉料理専門店ホース Banikuryori Senmon Ten Horse (horse-meat specialist since 1982, harihari hot pot)
//   - skip 焼肉萬野 心斎橋店 27060372: one of 13 restaurants of 株式会社萬野屋, which also licenses and "produces" shops for others
//     (mannoya.com/company/, read 2026-11-01). The next lane id, 27001532 (Horse), takes its place.
//   Chain check: Hong Kong Seafood Yum cha Ro has two shops (Shinsaibashi main shop, Umeda), run by 會通株式会社, which also runs
//   Ichiraku Onsen Hotel in Shima (honkonkaisen.com); kept. Dan, Chez Hiro and Horse: one shop each (Tabelog). None of the four is
//   in data/osaka.json (grep by name, romaji and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27060372', '焼肉萬野 心斎橋店: one of 13 restaurants of 株式会社萬野屋 (yakiniku, shabu-shabu, meat izakaya), which also runs licensed and produced shops (mannoya.com/company/, read 2026-11-01); chain.');

// ================================================================ お好み焼だん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27123588/'; const R = TB + 'dtlrvwlst/';
  const L = day(['17:00', '04:00']); const HOL = day(['17:00', '21:00']);
  put({
    id: 'osaka_okonomiyaki_dan_shinsaibashi', name: 'お好み焼だん (Okonomiyaki Dan)', category: 'OMNI',
    lat: 34.669623, lng: 135.502062, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: okonomiyaki, modern-yaki, yakisoba and the yakisoba omelet are wheat batter or wheat noodles finished with sauce; the Western-style grilled squid is seasoned with soy sauce (September 2026). No gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki filled with pork, beef, squid, shrimp or scallops, a batter with a hint of dashi (September 2026), and grilled chicken and seafood on the side.',
    hours_raw: 'Mon–Sat 17:00–04:00 (last order 03:30); holidays 17:00–21:00 (last order 20:30); closed Sunday (Tabelog). Reservations accepted, and recommended: an August 2026 diner found every seat booked (Tabelog; August 2026). Cards accepted; no e-money or QR (Tabelog). 23 seats, no private rooms; non-smoking; takeaway and delivery (Tabelog). On the third floor of a mixed-use building that is easy to miss; one diner warns of street touts outside (October 2026).',
    hours: { 0: L, 1: L, 2: L, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-3-12, 3F of the 喜八ビル, on the Souemoncho street — 5 min from Namba Stn, 8 min from Shinsaibashi',
    cuisine: 'Okonomiyaki and teppan dishes until 4 a.m. (Tabelog) · okonomiyaki fluffy and light, with cabbage that keeps its crunch and a sweetish sauce, served on the teppan in front of you (2026 reviews) · pork okonomiyaki ¥950, ¥400 more for a double (October 2026); squid and pork ¥1,250 (September 2026); mixed ¥1,550, mixed with scallops ¥2,100, onion topping ¥110 (September 2026) · pork modern-yaki ¥1,350 (August 2026), beef and egg modern-yaki ¥1,350 (October 2026) · mixed yakisoba ¥1,550; yakisoba omelet ¥1,070, green onion ¥300 and cheese ¥400 extra (September 2026) · Western-style grilled squid with soy sauce ¥1,070, salt-grilled squid ¥560, grilled shrimp and squid with mayonnaise and mustard, half chicken grilled with salt ¥700 or garlic butter ¥750 (September 2026) · soft drinks ¥250 (August 2026), black oolong tea ¥350 (September 2026)',
    website: null, gmaps: gm('お好み焼だん 心斎橋'), menu_url: null,
    notes: "[Okonomiyaki · Souemoncho, until 4 a.m.] A third-floor okonomiyaki counter in a mixed-use building on the Souemoncho street, easy to miss among the touts below, and open until four in the morning, which makes it a late-night favourite of local drinkers; it was named a Tabelog Okonomiyaki 100 in 2025. The okonomiyaki is fluffy and light, with cabbage that keeps its crunch and a sweetish sauce, and it comes to the teppan in front of you, with room on the counter for a proper plate. Start with grilled squid or plump shrimp with mayonnaise and mustard over a drink, then a pork okonomiyaki (¥950 in October 2026, or ¥1,350 for a double), a beef and egg modern-yaki or the yakisoba omelet one diner rated above everything else. Mains run ¥950–2,100. Book: an August 2026 diner found every seat reserved. Closed Sundays; holidays close at 21:00.",
    chef_bio: { chef_name: null, roles: ['Teppan staff (unnamed)'], origin: null, background: 'Shop-maintained (corporate-member) Tabelog listing; Tabelog Okonomiyaki 100, 2025. Reviewers call it long-established and a favourite of local drinkers (August and September 2026). No owner or chef is named in the sources read.', philosophy: null, specialty: 'Okonomiyaki with crunchy cabbage; modern-yaki; yakisoba omelet.',
      anecdotes: [
        { text: '"I was amazed by the incredible texture of the cabbage packed inside. The fluffy batter held onto the crispness of the cabbage" — September 2026, after grilled squid and shrimp.', source: R + 'B535174517/' },
        { text: '"I was surprised by the reasonable price of JPY 950 for the regular size, but I decided to upgrade to the double size for an additional JPY 400!" — October 2026, pork okonomiyaki.', source: R + 'B537286333/' },
        { text: '"There is plenty of space for large serving plates, making it very easy to eat." — October 2026, beef and egg modern-yaki ¥1,350.', source: R + 'B536598407/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): お好み焼だん、お好み焼き、大阪市中央区心斎橋筋2-3-12 喜八ビル 3F、なんば駅から徒歩5分、心斎橋駅から徒歩8分、月〜土17:00〜翌4:00 (L.O.3:30)、祝日17:00〜21:00 (L.O.20:30)、日曜定休、予約可、カード可、電子マネー・QR不可、23席、個室なし、禁煙、テイクアウト・デリバリー、お好み焼き 百名店 2025。口コミ(2026年8月〜10月): 豚のお好み焼き950円 (倍は400円増し)、イカと豚のお好み焼き1,250円、ミックス1,550円、ホタテ入りミックス2,100円、豚のモダン焼きと牛と卵のモダン焼き各1,350円、ミックス焼きそば1,550円、焼きそばのオムレツ1,070円、醤油味の洋食風のイカ焼き1,070円、イカの塩焼き560円、鶏の塩焼きハーフ700円、ソフトドリンク250円、キャベツの食感、ふわふわの生地、だしの風味、甘めのソース、目の前の鉄板、広いカウンター、予約で満席の日も、朝4時まで、地元の飲み客に人気、客引きに注意。',
      confidence: 'medium', sources: [TB, R + 'B534220347/', R + 'B534631341/', R + 'B535168299/', R + 'B535174517/', R + 'B535593541/', R + 'B536059665/', R + 'B536573416/', R + 'B536598407/', R + 'B537286333/', R + 'B537931486/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seating with okonomiyaki served on the teppan; book by phone (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-12 喜八ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番12号 (go) 16m. Bar マスダ (osaka_bar_masuda_soemoncho) is next door at 心斎橋筋2-3-11, a different house number, so both pins stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537286333/', R + 'B536573416/', R + 'B535593541/', R + 'B536059665/'],
    price_note: 'No menu on Tabelog; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork okonomiyaki (double +¥400)', '¥950', 'Okonomiyaki', 'no', 'no', 'October 2026 review.', 'buta_tama'),
      it('', '', 'Squid and pork okonomiyaki', '¥1,250', 'Okonomiyaki', 'no', 'no', 'September 2026 review.', 'ika_buta_tama'),
      it('', '', 'Mixed okonomiyaki', '¥1,550', 'Okonomiyaki', 'no', 'no', 'September 2026 review.', 'mix_okonomiyaki'),
      it('', '', 'Beef and egg modern-yaki', '¥1,350', 'Okonomiyaki', 'no', 'no', 'October 2026 review.', 'gyu_modern'),
      it('', '', 'Yakisoba omelet', '¥1,070', 'Yakisoba', 'no', 'no', 'September 2026 review.', 'omusoba'),
      it('', '', 'Salt-grilled squid', '¥560', 'Teppan', 'ask', 'no', 'September 2026 review.', 'ika_shioyaki'),
    ] }, {
    cuisine: '朝4時までのお好み焼きと鉄板焼き (食べログ)・お好み焼きはふわふわで軽く、キャベツの食感が残り、甘めのソースで、目の前の鉄板に (2026年の口コミ)・豚のお好み焼き950円、倍は400円増し (2026年10月)。イカと豚1,250円 (2026年9月)。ミックス1,550円、ホタテ入りのミックス2,100円、玉ねぎのトッピング110円 (2026年9月)・豚のモダン焼き1,350円 (2026年8月)、牛と卵のモダン焼き1,350円 (2026年10月)・ミックス焼きそば1,550円。焼きそばのオムレツ1,070円、ねぎ300円、チーズ400円 (2026年9月)・醤油味の洋食風のイカ焼き1,070円、イカの塩焼き560円、マヨネーズとからしで食べるエビとイカの鉄板焼き、鶏ハーフの塩焼き700円かガーリックバター750円 (2026年9月)・ソフトドリンク250円 (2026年8月)、黒ウーロン茶350円 (2026年9月)',
    neighborhood: '心斎橋筋2-3-12、喜八ビルの3階、Souemoncho の通り沿い。なんば駅から徒歩5分、心斎橋駅から徒歩8分',
    gf_detail: 'グルテンフリーではありません。お好み焼き、モダン焼き、焼きそば、焼きそばのオムレツは小麦の生地か小麦の麺にソース。洋食風のイカ焼きは醤油味 (2026年9月)。グルテンフリーの選択肢の説明はない。',
    vegan_detail: 'ヴィーガンではありません。お好み焼きの具は豚、牛、イカ、エビ、ホタテで、生地にはだしの風味 (2026年9月)。サイドも鶏と魚介の鉄板焼き。',
    notes: '[お好み焼き・Souemoncho、朝4時まで] Souemoncho の通りの雑居ビルの3階にあるお好み焼き屋。下の客引きにまぎれて見落としやすいが、朝4時まで開いていて、地元の飲み客の夜遅くの定番。2025年に食べログ お好み焼き 百名店に選ばれた。お好み焼きはふわふわで軽く、キャベツの食感が残り、甘めのソースで、目の前の鉄板に出てくる。カウンターには皿を置く場所も十分ある。まずはイカ焼きやぷりぷりのエビをマヨネーズとからしで一杯やりながら、それから豚のお好み焼き (2026年10月は950円、倍で1,350円)、牛と卵のモダン焼き、ある人がいちばんと言った焼きそばのオムレツを。お好み焼きや焼きそばは950〜2,100円。予約がおすすめで、2026年8月には予約で満席の日も。日曜休み、祝日は21時まで。',
  });
}

// ================================================================ 香港海鮮飲茶樓 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27003248/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.shinsaibashi-yumcha.com/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_hong_kong_kaisen_yumcha_shinsaibashi', name: '香港海鮮飲茶樓 心斎橋店 (Hong Kong Seafood Yum cha Ro)', category: 'OMNI',
    lat: 34.674687, lng: 135.503475, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Dim sum wrappers, spring rolls, buns, noodles and fried dishes use wheat, and many sauces are soy- or oyster-based. The official site says the kitchen will change course dishes as far as it can for allergies or dislikes.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Vegetable dishes exist (stir-fried water spinach, bok choy, eggplant, tomato with egg), but the kitchen is built on seafood, pork and chicken, and vegetable plates may use oyster sauce or bacon.',
    hours_raw: 'Daily 11:00–15:00 and 17:00–22:00; holidays dinner only; open year-round (Tabelog). The official site gives dinner to 23:00 (last order 22:30 on weekdays, 22:00 at weekends and holidays) and occasional closures. Lunch menu and prices are the same at weekends (official site; August 2026). Reservations accepted (Tabelog). Service charge 3% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay and others); no e-money or QR (Tabelog). 110 seats, private rooms for 6, 8 and 10–20, whole-floor hire for 50 or more; non-smoking with a smoking area outside; children welcome with high chairs, strollers welcome (Tabelog). Step-free from the entrance, wheelchairs can reach the tables (official site); the lift opens straight into the restaurant (August 2026). One hour free at the partner car park with ¥5,000 spent (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-12-17, 2F of the ロンスカール高吉ビル, above a 7-Eleven — 6 min from Shinsaibashi Stn, 4 min from Nagahoribashi',
    cuisine: 'Hong Kong dim sum and live-tank seafood (prices from the official site, undated, read November 2026, unless dated) · dim sum by a chef holding China\'s special-grade dim sum master qualification, with over 20 years of cooking (official site); wrappers made in house (October 2026) · weekly lunch sets ¥850–1,300 with free rice and soup refills (official site); a stir-fried pork and vegetable set with egg soup, gyoza, tofu, rice and almond jelly was ¥1,000 in August 2026 · lunch courses for two or more: dim sum course ¥1,950, house dim sum course with xiaolongbao and shark-fin dumplings ¥2,480, healthy course ¥3,590; xiaolongbao set ¥1,480, five-dim-sum set ¥1,750 · live sea bream from ¥5,500 (as Chinese-style sashimi, steamed, sweet-and-sour or braised in a spicy sauce), live abalone from ¥1,540, live kuruma prawns at market price · shrimp mayonnaise ¥1,520, crab and glass noodles with XO sauce in a clay pot ¥1,850, Peking duck ¥660 a roll, sweet-and-sour pork ¥1,680, braised whole shark fin ¥8,800, whole braised abalone ¥5,500 · Kowloon tea, a house beauty-tea blend, poured with a tea-ceremony show · banquet courses with all-you-can-drink: 11 dishes with Peking duck and 90 minutes of drinks ¥6,980 (October 2026); from ¥5,980 (Tabelog)',
    website: SITE, gmaps: gm('香港海鮮飲茶樓 心斎橋'), menu_url: SITE + 'menu/',
    notes: "[Chinese · Higashi-Shinsaibashi, dim sum and a live tank] A large Hong Kong-style dining room up a lift above a 7-Eleven, with a tank of live sea bream, abalone and kuruma prawns at the door and round tables for groups; named a Tabelog Chinese WEST 100 in 2021. The dim sum is made by a chef holding China's special-grade dim sum master qualification, the wrappers in house, and the tank fish is cooked as you choose, including a Chinese-style sashimi dressed with soy, sesame and cashews. Lunch is the bargain: weekly sets from ¥850 with free rice and soup (a ¥1,000 pork and vegetable set came with gyoza, tofu and almond jelly in August 2026), or dim sum courses from ¥1,950 for two. Evenings lean to banquets: about ¥6,000–7,000 for a course with all-you-can-drink. Diners in 2026 praised the gentle spice and the homemade dim sum wrappers, while one found the staff blunt (September 2026) and another was unimpressed in a near-empty room (October 2026). Add 3% service. The company also runs a branch in Umeda and a hotel in Shima.",
    chef_bio: { chef_name: null, roles: ['Dim sum chef (unnamed) holding China\'s 特級点心師 qualification (official site)'], origin: null, background: 'Per the official site: the dim sum is made by a 特級点心師, a Chinese national qualification for cooks with eight grades taken one at a time in exams held every two years, so that it takes at least fifteen years to reach; the chef has more than twenty years of cooking. Seafood bought from the market goes live into the tank and is cooked to order. The shop is the 心斎橋本店 of 會通株式会社, which also runs a branch in Umeda (Breeze Breeze 6F) and the 一楽温泉ホテル in Shima, Mie (honkonkaisen.com); Tabelog says seafood comes direct from that hotel. Tabelog Chinese WEST 100, 2021. An August 2026 diner notes the staff are Chinese.', philosophy: '"Warm human contact" and "handmade" food, not service bound by a manual (company site).', specialty: 'Dim sum; live-tank sea bream and abalone; Chinese-style sashimi.',
      anecdotes: [
        { text: '"Not only was the filling of the dim sum delicious, but the wrappers were also homemade, and the shark fin soup was delightful." — October 2026, a dim sum lunch course.', source: R + 'B537591155/' },
        { text: '"Both rice and soup are refillable. … I was truly impressed that such a meal was available at this price." — August 2026, stir-fried pork and vegetable set ¥1,000.', source: R + 'B537208787/' },
        { text: '"As someone who isn\'t fond of spicy food, I asked, \'Is this dish spicy?\' and was met with a blunt response" — September 2026.', source: R + 'B535814247/' },
      ],
      japanese_sources_summary: '公式サイト: 香港海鮮飲茶樓 心斎橋本店、本格海鮮料理と香港飲茶、大阪市中央区東心斎橋1-12-17 ロンスカール高吉ビル2F、心斎橋駅から徒歩6分、長堀橋駅から徒歩4分、セブンイレブンの二階、ランチ11:00〜15:00、ディナー17:00〜23:00 (平日L.O.22:30、土日祝L.O.22:00)、不定休、入口から段差なしで車いす可、5,000円以上で提携駐車場1時間分。特級点心師 (中国の国家資格、八段階、最低十五年) が作る点心、料理経験二十年以上、市場直送の活魚を店内のいけすへ、中華風特選ソースとゴマ・カシューナッツの中華風刺身、伝統の美容茶「九龍茶」と茶芸のパフォーマンス、アレルギーや苦手な食材には出来る限り料理の変更に対応。ランチ: 週替わり850円〜1,300円、ご飯とスープおかわり自由、本格飲茶コース1,950円、自家製飲茶コース2,480円、ヘルシーコース3,590円、小籠包セット1,480円、五種点心セット1,750円。お品書き: 活魚5,500円〜、活あわび1,540円〜、海老のマヨネーズ1,520円、XO醤入り蟹と春雨の土鍋1,850円、北京ダック (1本) 660円、酢豚1,680円、フカヒレの姿煮8,800円、あわびの姿煮5,500円。運営は會通株式会社 (梅田店、一楽温泉ホテルも)。食べログ (店舗会員): 毎日11:00〜15:00・17:00〜22:00、祝日は夜のみ、年中無休、サービス料3%、110席、個室、禁煙 (店外に喫煙所)、子ども・ベビーカー可、飲み放題つきコース5,980円から、中国料理 WEST 百名店 2021。口コミ(2026年8月〜10月): 1,000円の定食、週末も同じランチ、自家製の皮の点心、フカヒレスープ、マイルドな辛さの麻婆豆腐、海鮮豆腐、小籠包、11品と90分飲み放題で6,980円、エレベーターで店内へ、中国人のスタッフ、そっけない対応という声、昔の百名店の面影はないという声。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'concept/', SITE + 'menu/', SITE + 'lunch/', SITE + 'course/', SITE + 'access/', 'http://www.honkonkaisen.com/', R + 'B534125601/', R + 'B534709931/', R + 'B535258913/', R + 'B535376597/', R + 'B535498183/', R + 'B535814247/', R + 'B537208787/', R + 'B537591155/', R + 'B537944279/', R + 'B538155061/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches and courses; an August 2026 diner notes the staff are Chinese. No English menu evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Official site (course page): "アレルギーや苦手な食材がございましたら、出来る限り料理内容の変更等ご対応させていただきます" (dishes changed as far as possible for allergies or dislikes).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-12-17 ロンスカール高吉ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目12番17号 (go) 2m. 鳥焼酒場 暁 (osaka_toriyaki_sakaba_akatsuki) is about 20 m away at 東心斎橋1-12-19, a different house number, so both pins stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE + 'lunch/', SITE + 'menu/', R + 'B537208787/', R + 'B538155061/'],
    price_note: 'Prices from the official site (undated; read 2026-11-01); a ¥1,000 lunch set (August 2026) sits inside the site\'s ¥850–1,300 range.', last_checked: TODAY, items: [
      it('本格飲茶コース', '', 'Dim sum lunch course (two or more)', '¥1,950', 'Lunch', 'no', 'no', 'Official site.', 'yumcha_course'),
      it('小籠包セット', '', 'Xiaolongbao set with a rice or noodle dish', '¥1,480', 'Lunch', 'no', 'no', 'Official site.', 'xlb_set'),
      it('', '', 'Weekly lunch set (rice and soup refills)', '¥1,000', 'Lunch', 'ask', 'ask', 'August 2026 review; ¥850–1,300 per the official site.', 'weekly_lunch'),
      it('海老のマヨネーズ', '', 'Shrimp mayonnaise', '¥1,520', 'Seafood', 'ask', 'no', 'Official site.', 'ebi_mayo'),
      it('XO醤入り蟹と春雨の土鍋', '', 'Crab and glass noodles with XO sauce in a clay pot', '¥1,850', 'Seafood', 'ask', 'no', 'Official site.', 'crab_harusame'),
      it('北京ダック', '', 'Peking duck (one roll)', '¥660', 'Meat', 'no', 'no', 'Official site.', 'peking_duck'),
      it('活魚', '', 'Live fish from the tank, cooked to choice', '¥5,500', 'Live tank', 'ask', 'no', 'Official site; from ¥5,500.', 'live_fish'),
    ] }, {
    cuisine: '香港の飲茶といけすの海鮮 (値段は公式サイト、日付なし、2026年11月に確認。口コミの値段は日付つき)・点心を作るのは中国の特級点心師の資格を持つ料理経験二十年以上のシェフ (公式サイト)。皮も自家製 (2026年10月)・週替わりランチ850〜1,300円、ご飯とスープおかわり自由 (公式サイト)。2026年8月は細切り豚肉の野菜炒め定食1,000円に玉子スープ、餃子、豆腐、ご飯、杏仁豆腐・2名からのランチコース: 本格飲茶コース1,950円、ショウロンポウとフカヒレ入り揚げ餃子の自家製飲茶コース2,480円、ヘルシーコース3,590円。小籠包セット1,480円、五種点心セット1,750円・活魚5,500円から (中華刺身、蒸し、甘酢掛け、辛子ソース煮)、活あわび1,540円から、活車海老は時価・海老のマヨネーズ1,520円、XO醤入り蟹と春雨の土鍋1,850円、北京ダック1本660円、酢豚1,680円、フカヒレの姿煮8,800円、あわびの姿煮5,500円・美容茶「九龍茶」と茶芸のパフォーマンス・飲み放題つきの宴会コース: 北京ダックを含む11品と90分飲み放題で6,980円 (2026年10月)、5,980円から (食べログ)',
    neighborhood: '東心斎橋1-12-17、ロンスカール高吉ビルの2階、セブンイレブンの上。心斎橋駅から徒歩6分、長堀橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。点心の皮、春巻き、饅頭、麺、揚げ物は小麦を使い、ソースの多くは醤油やオイスターソースがベース。公式サイトには、アレルギーや苦手な食材には出来る限りコースの料理を変更して対応するとある。',
    vegan_detail: '要確認。ヴィーガンの情報なし。空心菜、チンゲン菜、なす、トマトと玉子の炒めなど野菜の料理はあるが、魚介、豚、鶏が中心の店で、野菜の皿にもオイスターソースやベーコンを使うことがある。',
    notes: '[中華・東心斎橋、飲茶といけす] セブンイレブンの上、エレベーターで上がる香港風の大きなダイニング。入口には活きた鯛、あわび、車海老のいけすがあり、グループ向けの円卓も。2021年に食べログ 中国料理 WEST 百名店に選ばれた。点心は中国の特級点心師の資格を持つシェフが作り、皮も自家製。いけすの魚は好きな調理法で、醤油ベースのソースとゴマ、カシューナッツで食べる中華風の刺身も。お得なのはランチで、週替わりの定食はご飯とスープおかわり自由で850円から (2026年8月は1,000円の定食に餃子、豆腐、杏仁豆腐つき)、2名からの飲茶コースは1,950円から。夜は宴会向けで、飲み放題つきのコースが6,000〜7,000円ほど。2026年の口コミでは、やさしい辛さや自家製の皮の点心が好評な一方、スタッフがそっけなかったという人 (2026年9月) や、客の少ない店で心に残る料理がなかったという人も (2026年10月)。サービス料3%。運営会社は梅田にも店があり、Shima ではホテルも営む。',
  });
}

// ================================================================ ヴレ ド ヴレ シェ ヒロ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000824/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_vrai_de_vrai_chez_hiro_shinmachi', name: 'ヴレ ド ヴレ シェ ヒロ (vrai de vrai Chez Hiro)', category: 'OMNI',
    lat: 34.676043, lng: 135.495364, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. The courses include a baguette with refills, gougères, a pilaf with meat sauce, a mille-feuille and sauces such as américaine; no gluten-free handling described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses built on seafood, lobster, venison, lamb, duck, goose and pork, with butter and cream.',
    hours_raw: 'Tue–Sun 11:30–15:00 (last order 14:00) and 18:00–23:00 (last order 21:30); closed Monday, or Tuesday when Monday is a holiday; hours may change (Tabelog). Reservations accepted; courses are also bookable on Ikyu (April 2026 review). Cards, e-money and QR accepted (Tabelog). 36 seats with counter and sofa seating, two private rooms for 4; non-smoking; takeaway (Tabelog). Moved to Shinmachi in 2003 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-24-8, 1F of the マッセノース四ツ橋ビル, on a quiet back-street corner — 4–5 min west of Yotsubashi Stn exit 2; near Nishi-Ohashi',
    cuisine: 'French set courses with a choice of mains (prices as listed on Ikyu, per an April 2026 review): lunch ¥3,800 and ¥5,300, dinner ¥7,700, ¥11,000 and ¥16,500 · ¥3,800 lunch with a choice of starter, main and dessert, in generous portions (January and March 2026) · the ¥16,500 dinner in April 2026: new-onion bavarois with chilled pea soup, young bluefin (yokowa) tuna tartare with tomato jelly, lobster terrine, seafood sauté in soup (conger eel, shrimp, squid, octopus), sea bream with américaine sauce, a choice of four meats (Ezo venison with red wine sauce, lamb breast roast and others), Ezo venison meat sauce with pilaf, brown-sugar bavarois, coffee; baguette refills · other 2025–26 dishes: gougères, country pâté, Rausu mackerel tartare, Hungarian duckling roast, Iberico pork, roast goose, strawberry mille-feuille · a wine cellar',
    website: null, gmaps: gm('vrai de vrai Chez Hiro 新町'), menu_url: null,
    notes: "[French · Shinmachi, generous courses on a quiet corner] A calm French restaurant on a back-street corner in Shinmachi, a few minutes from Yotsubashi, at this address since 2003 and named a Tabelog French WEST 100 in 2021. Courses come with a choice of mains and portions that diners keep calling generous: three appetisers before the fish, a lobster terrine that more than one diner singles out, then a pick of four meats such as Ezo venison, lamb or duckling, and a small serving of venison meat sauce with pilaf to finish. Lunch at ¥3,800 lets you choose starter, main and dessert; dinner courses run ¥7,700–16,500. Staff pace the courses well, and took a commemorative photo for one birthday table (November 2025); ask for the half-circle sofa at the back. Some diners found the seasoning salty (2025) or the top course short of its price (March 2026). Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources read)'], origin: null, background: 'Tabelog notes the restaurant moved to Shinmachi in 2003; Tabelog French WEST 100, 2021. No chef is named in the listing or the reviews read, and no official site was found.', philosophy: null, specialty: 'Lobster terrine; choice of four meats; meat sauce with pilaf.',
      anecdotes: [
        { text: '"With 8 dishes plus the baguette and drinks, the first courses include the amuse-bouche and three appetizers, each with generous portions. These are definitely not just appetizers!" — April 2026, the ¥16,500 course.', source: R + 'B525360064/' },
        { text: '"It was a dish where you mixed apple puree with the lobster terrine and enjoyed it together, and it was delightful." — November 2025, a birthday dinner on the half-circle sofa.', source: R + 'B518009505/' },
        { text: '"For JPY 3800, you can select from appetizers, main courses, and desserts. The first thing I noticed was the wide variety of choices" — March 2026, lunch.', source: R + 'B524761275/' },
      ],
      japanese_sources_summary: '食べログ: ヴレ ド ヴレ シェ ヒロ (vrai de vrai CHEZ HIRO)、フレンチ、大阪市西区新町1-24-8 マッセノース四ツ橋ビル 1F、四ツ橋駅2番出口から西へ徒歩4〜5分、火〜日11:30〜15:00 (L.O.14:00)・18:00〜23:00 (L.O.21:30)、月曜定休 (祝日なら翌日)、予約可、カード・電子マネー・QR可、36席、4名の個室2つ、禁煙、テイクアウト、2003年に新町へ移転、フレンチ WEST 百名店 2021。口コミ(2025年5月〜2026年10月): 一休に載っているコースはランチ3,800円・5,300円、ディナー7,700円・11,000円・16,500円、ランチは前菜・メイン・デザートを選べる、量が多い、ロブスターのテリーヌ、ヨコワマグロのタルタル、海の幸のソテー・スープ、4種から選べる肉 (Ezo の鹿、仔羊など)、ミートソースとピラフ、いちごのミルフィーユ、バゲットのおかわり、ワインセラー、半円のソファー席、料理を出すタイミングがよい、塩気が強いという声、値段ほどではないという声。',
      confidence: 'medium', sources: [TB, R + 'B507526114/', R + 'B508816506/', R + 'B510965929/', R + 'B518009505/', R + 'B520603815/', R + 'B524280121/', R + 'B524761275/', R + 'B525360064/', R + 'B531313728/', R + 'B538409622/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses with a choice of mains; book ahead (2025–26). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-24-8 マッセノース四ツ橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目24番8号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525360064/', R + 'B524761275/'],
    price_note: 'Course prices as listed on Ikyu per an April 2026 review; ¥3,800 lunch confirmed by January and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (choice of starter, main and dessert)', '¥3,800', 'Lunch', 'ask', 'no', 'January and March 2026 reviews.', 'lunch_3800'),
      it('', '', 'Lunch course', '¥5,300', 'Lunch', 'ask', 'no', 'April 2026 review (Ikyu listing).', 'lunch_5300'),
      it('', '', 'Dinner course', '¥7,700', 'Dinner', 'ask', 'no', 'April 2026 review (Ikyu listing).', 'dinner_7700'),
      it('', '', 'Dinner course (8 dishes, choice of four meats)', '¥16,500', 'Dinner', 'ask', 'no', 'April 2026 review.', 'dinner_16500'),
    ] }, {
    cuisine: 'メインを選べるフレンチのコース (値段は2026年4月の口コミによる一休の掲載): ランチ3,800円と5,300円、ディナー7,700円、11,000円、16,500円・3,800円のランチは前菜、メイン、デザートを選べて量も多い (2026年1月・3月)・2026年4月の16,500円のディナー: 新玉ねぎのババロアと冷たいえんどう豆のスープ、ヨコワマグロのタルタルとトマトジュレ、ロブスターのテリーヌ、海の幸のソテー・スープ (穴子、海老、イカ、タコ)、鯛のソテーとアメリケーヌソース、4種から選ぶ肉 (Ezo の鹿の赤ワインソース、仔羊胸肉のロティなど)、Ezo の鹿のミートソースとピラフ、黒糖のババロア、コーヒー。バゲットはおかわりできる・2025〜26年のほかの料理: グジェール、パテ・ド・カンパーニュ、Rausu のサバのタルタル、Hungary の仔鴨のロースト、イベリコ豚、ガチョウのロースト、いちごのミルフィーユ・ワインセラーあり',
    neighborhood: '新町1-24-8、マッセノース四ツ橋ビルの1階、静かな裏通りの角。四ツ橋駅2番出口から西へ徒歩4〜5分、西大橋駅も近い',
    gf_detail: '予約時に要確認。グルテンの情報なし。コースにはおかわりできるバゲット、グジェール、ミートソースのピラフ、ミルフィーユ、アメリケーヌなどのソースが入る。グルテンフリーの対応の説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚介、ロブスター、鹿、仔羊、鴨、ガチョウ、豚を使い、バターとクリームも使うコース。',
    notes: '[フレンチ・新町、静かな角の量の多いコース] 四ツ橋から数分、新町の裏通りの角にある落ち着いたフレンチ。2003年からこの場所で、2021年に食べログ フレンチ WEST 百名店に選ばれた。コースはメインを選べて、量が多いという声がくり返し出てくる。魚の前に前菜が3品、何人もがほめるロブスターのテリーヌ、それから Ezo の鹿、仔羊、仔鴨など4種から選ぶ肉、最後に少しだけの鹿のミートソースとピラフ。ランチは3,800円で前菜、メイン、デザートを選べて、ディナーのコースは7,700〜16,500円。料理を出すタイミングがよく、記念の写真を撮ってくれたという人も (2025年11月)。奥の半円のソファー席がおすすめ。塩気が強いと感じた人 (2025年) や、いちばん高いコースは値段ほどではないと感じた人も (2026年3月)。月曜休み。',
  });
}

// ================================================================ 馬肉料理専門店ホース
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001532/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://baniku-horse.com/';
  const H = day(['17:00', '21:30']);
  put({
    id: 'osaka_horse_baniku_higashishinsaibashi', name: '馬肉料理専門店ホース (Banikuryori Senmon Ten Horse)', category: 'OMNI',
    lat: 34.670346, lng: 135.504814, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Horse sashimi, grilled horse meat and steak come with sauces and a dipping sauce whose ingredients are not given; the harihari hot pot broth is made from horse tendon and finishes with Chinese wheat noodles. Nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a horse-meat specialist; the hot pot broth is made from horse tendon.',
    hours_raw: 'Mon–Sat 17:00–21:30; closed Sunday and holidays (Tabelog). The official site gives last order 22:00 and posts holiday closures (Obon, New Year). Reservations accepted; cancel by the day before (Tabelog). Cards (VISA, JCB, AMEX); no e-money (Tabelog). 41 seats: 7 at the counter, tables, a second floor for 9–20 with sunken seating; non-smoking; children welcome; English menu (Tabelog). Since 1982 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-3-12 — 10 min from Shinsaibashi Stn exit 6 or from Nihonbashi Stn',
    cuisine: 'Horse meat only, since 1982 (prices from the official site, undated, read November 2026) · two starters ¥1,000 · raw: 高根, collagen-rich meat from under the mane ¥800; horse sashimi ¥3,800; raw liver ¥3,800; sakura yukke ¥900; sakura natto, winter-only straw-wrapped natto from Kumamoto mixed with horse meat ¥950 · saiboshi, smoked horse ¥1,600 · grilled: korikori, a rare chewy cut ¥3,200; seared sashimi cut ¥3,800; yakiniku set ¥6,300 a person (two or more); horse steak ¥6,500 · harihari hot pot of horse meat and mizuna in a horse-tendon broth, Chinese noodles to finish ¥5,000 · courses for two or more, per person: hot pot course ¥7,500, steak course with takikomi rice ¥8,600, W course of steak and hot pot ¥10,500 · draft beer ¥680, highball ¥660, sake from ¥660 a go; a Biwa Min sour (October 2026)',
    website: SITE, gmaps: gm('馬肉料理専門店ホース 東心斎橋'), menu_url: SITE + 'menu',
    notes: "[Horse meat · Higashi-Shinsaibashi, since 1982] A horse-meat specialist in Higashi-Shinsaibashi, cooking nothing else since 1982. Diners describe the meat as Kumamoto horse, sweet, clean and light, and the menu runs from sashimi through grilling to a hot pot: sashimi of three cuts including 高根, the collagen-rich meat from under the mane; smoked saiboshi with a drink; grilled horse yakiniku or a tender steak; and the harihari nabe of horse meat and mizuna in a broth drawn from horse tendon, finished with Chinese noodles or rice. Most people take a course (¥7,500 for the hot pot, ¥10,500 for steak and hot pot), and staff explain the hot pot to first-timers. A December 2025 diner found the owner kind, and many customers seemed to be regulars; one in March 2026 felt the price outran the experience on a quiet weekend night. English menu. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null, background: 'Shop-maintained (corporate-member) Tabelog listing: "Since 1982, dedicated to horse meat!" A February 2026 diner calls it a horse-meat restaurant with 45 years of history. The official site sources its winter sakura natto from Kumamoto; a December 2025 diner describes the horse meat as from Kumamoto and the owner as very kind and attentive.', philosophy: '"Delicious horse meat for beauty and health" (おいしい馬肉で美容と健康; official site).', specialty: 'Horse sashimi; harihari hot pot; horse steak.',
      anecdotes: [
        { text: '"The Harihari hot pot was light yet packed with flavor … The staff kindly explained how to prepare the hot pot, which made me feel at ease as a first-timer." — December 2025, a first taste of horse meat.', source: R + 'B519466356/' },
        { text: '"The staff provided detailed and clear explanations of the dishes, even asking if I wanted to add garlic." — April 2026, the W course.', source: R + 'B526310431/' },
        { text: '"I added just a bit of pepper to change the flavor. Then I added some shichimi for another twist. The power of the broth is truly impressive." — March 2026, grilled and hot pot course.', source: R + 'B525079348/' },
      ],
      japanese_sources_summary: '公式サイト: 馬肉料理専門店ホース、おいしい馬肉で美容と健康、大阪市中央区東心斎橋2-3-12、地下鉄心斎橋駅6番出口から徒歩10分、ラストオーダー22:00、日曜・祝日定休、カウンター6席・テーブル3・2階10〜20名、禁煙。メニュー: 付出し2品1,000円、高根 (タテガミの下でコラーゲンたっぷり) 800円、馬刺し3,800円、生レバー3,800円、桜なっとう (熊本から取り寄せる冬限定のわらに包まれたなっとうに馬肉) 950円、桜ユッケ900円、サイボシ (馬の燻製) 1,600円、コリコリ3,200円、あみ焼き3,800円、焼肉セット1人前6,300円 (2人前から)、馬ステーキ6,500円、馬のはりはり鍋 (馬スジからダシを取った秘伝のスープ、しめの中華そば) 5,000円、コースは2人前から: 鍋コース7,500円、ステーキコース8,600円、Ｗコース10,500円、生ビール680円。食べログ (店舗会員): 月〜土17:00〜21:30、日・祝休み、予約可 (キャンセルは前日まで)、カード可、41席、2階は9名以上で貸切可、掘りごたつ、禁煙、英語メニュー、子ども可、1982年から馬肉ひとすじ。口コミ(2025年12月〜2026年10月): Kumamoto の馬肉、親切な店主、常連が多い、鍋の食べ方を教えてくれる、三種のお造り、サイボシ、ステーキ、はりはり鍋、炊き込みご飯、しめの麺、桜ユッケ、45年の歴史、値段ほどの満足感はなかったという声。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'menu', SITE + 'about', R + 'B519110432/', R + 'B519466356/', R + 'B520399593/', R + 'B522699325/', R + 'B523579883/', R + 'B524071246/', R + 'B525079348/', R + 'B525826002/', R + 'B526310431/', R + 'B537921451/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); staff explain the hot pot and dishes (2025–26).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-3-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site with 2026 notices; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目3番12号 (go) 1m. 札幌ラーメン 獅子王 (osaka_sapporo_ramen_shishio_shinsaibashi) is about 60 m away at 東心斎橋2-3-21; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu', R + 'B537921451/'],
    price_note: 'Prices from the official site (undated; read 2026-11-01). Course contents match an October 2026 review of the steak course.', last_checked: TODAY, items: [
      it('馬刺し', '', 'Horse sashimi', '¥3,800', 'Raw', 'ask', 'no', 'Official site.', 'basashi'),
      it('高根', '', '高根 (collagen-rich meat from under the mane)', '¥800', 'Raw', 'ask', 'no', 'Official site.', 'mane_cut'),
      it('サイボシ', '', 'Saiboshi (smoked horse meat)', '¥1,600', 'Small dishes', 'ask', 'no', 'Official site.', 'saiboshi'),
      it('馬ステーキ', '', 'Horse steak', '¥6,500', 'Grilled', 'ask', 'no', 'Official site.', 'horse_steak'),
      it('馬のはりはり鍋', '', 'Harihari hot pot (horse-tendon broth, Chinese noodles to finish)', '¥5,000', 'Hot pot', 'no', 'no', 'Official site.', 'harihari_nabe'),
      it('鍋コース', '', 'Hot pot course (per person, two or more)', '¥7,500', 'Courses', 'no', 'no', 'Official site.', 'nabe_course'),
      it('Ｗコース', '', 'W course: steak and hot pot (per person, two or more)', '¥10,500', 'Courses', 'no', 'no', 'Official site.', 'w_course'),
    ] }, {
    cuisine: '1982年から馬肉だけ (値段は公式サイト、日付なし、2026年11月に確認)・付出し2品1,000円・生: タテガミの下のコラーゲンたっぷりの高根800円、馬刺し3,800円、生レバー3,800円、桜ユッケ900円、熊本から取り寄せる冬限定のわらに包まれたなっとうに馬肉を入れた桜なっとう950円・馬の燻製のサイボシ1,600円・焼き物: 希少部位のコリコリ3,200円、馬刺しの部位をあぶるあみ焼き3,800円、焼肉セット1人前6,300円 (2人前から)、馬ステーキ6,500円・馬スジからダシを取ったスープで馬肉と水菜を煮るはりはり鍋、しめは中華そば、5,000円・コースは2人前から、1人前の値段: 鍋コース7,500円、炊き込みご飯つきのステーキコース8,600円、ステーキと鍋のＷコース10,500円・生ビール680円、ハイボール660円、日本酒1合660円から。Biwa Min のサワー (2026年10月)',
    neighborhood: '東心斎橋2-3-12。心斎橋駅6番出口から徒歩10分、日本橋駅からも徒歩10分',
    gf_detail: '要確認。グルテンの情報なし。馬刺し、焼き物、ステーキにはたれやつけだれがつくが、材料の説明はない。はりはり鍋は馬スジのスープで、しめは小麦の中華そば。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。馬肉の専門店で、鍋のスープも馬スジから取る。',
    notes: '[馬肉・東心斎橋、1982年から] 東心斎橋の、1982年から馬肉ひとすじの専門店。口コミでは Kumamoto の馬肉で、甘くてくせがなく軽いという声。メニューは生から焼き、鍋まで: タテガミの下のコラーゲンたっぷりの高根を含む三種のお造り、酒のあてにサイボシ、馬の焼肉かやわらかいステーキ、そして馬スジのスープで馬肉と水菜を煮るはりはり鍋、しめは中華そばかご飯。多くの人はコースで (鍋は7,500円、ステーキと鍋は10,500円)、初めての人にはスタッフが鍋の食べ方を教えてくれる。2025年12月には店主が親切で常連らしい客が多かったという人、2026年3月の静かな週末の夜には値段ほどの満足感はなかったという人も。英語メニューあり。日曜・祝日休み。',
  });
}

save();
