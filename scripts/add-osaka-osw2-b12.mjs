// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 12 (lane: Tabelog id mod 4 = 1).
//   + 湖陽樹 本町店 Koyoju Honmachi (big basement Sichuan-leaning Chinese, about 40 years; tantanmen with house chili oil)
//   + 谷町 ふる里 Tanimachi Furusato (24-hour udon, soba and sushi; an old Tanimachi 9-chome shop relocated to Kozu in June 2025)
//   + 大衆中華酒場 若林 心斎橋パルコ店 Wakabayashi Shinsaibashi PARCO (Chinese tavern in PARCO's basement Neon Dining Street; sweet and sour pork)
//   + とらふぐ城 Torafugu-jo (domestic tiger-fugu, crab and eel house by Nagahoribashi Stn; private rooms)
//   Skipped (lane order):
//   - 廻転鮨 銀座おのでら 大阪店 27140321 — chain: 銀座おのでら has 31 shops in four countries and keeps opening 廻転鮨 shops (本店 in
//     Omotesando, ハレザ池袋店 opened 23 October 2026; onodera-group.com, read 2026-11-02); the group is in data as
//     osaka_sushi_ginza_onodera_musuko_namba ("鮨 銀座おのでら 息子 なんば店").
//   - トラットリア ピッツェリア アレグロ 難波店 27108977 — chain: one of several アレグロ shops of レストランバンク, whose shop list shows
//     about a dozen shops (トラットリア ピッツェリア, 大衆イタリア食堂 アレグロ, 葡萄酒屋 by Allegro, じんべえ shops …) and which offers
//     franchising (restaurant-bank.jp, read 2026-11-02; Allegro 南森町店 named on its media page).
//   Chain check of the four kept:
//   - Koyoju: two shops, Honmachi and Tanimachi 4-chome (September 2026 review); none in data. Kept; flagged.
//   - Furusato: one shop (Tabelog; reviews).
//   - Wakabayashi: a September 2026 diner saw shops in Links Umeda and Tennoji Mio as well, and another diner had been to the Tennoji
//     one; no operator site found; none in data. Kept as a small group; flagged.
//   - Torafugu-jo: the official site gives one address.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27140321', 'Chain: 廻転鮨 銀座おのでら is one of 31 銀座おのでら shops in four countries, still opening kaiten branches (onodera-group.com); the group is in data (osaka_sushi_ginza_onodera_musuko_namba).');
skip('27108977', 'Chain: アレグロ 難波店 is one of several アレグロ shops of レストランバンク (about a dozen shops, franchising; restaurant-bank.jp).');

// ================================================================ 湖陽樹 本町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270106/27008161/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const W = day(['11:30', '15:00'], ['17:00', '22:00']); const S = day(['11:30', '15:00']);
  put({
    id: 'osaka_koyoju_honmachi', name: '湖陽樹 本町店 (Koyoju Honmachi ten)', category: 'OMNI',
    lat: 34.682262, lng: 135.50444, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The signature is tantanmen (wheat noodles), with dumplings, spring rolls and sauced stir-fries; mapo tofu and fried rice are not described (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; the tantanmen is topped with minced meat (reviews) and the menu is meat and seafood (Tabelog menu).',
    hours_raw: 'Mon–Fri 11:30–15:00 (last order 14:20) and 17:00–22:00 (last order 21:00); Sat 11:30–15:00 only; closed Sundays and holidays (Tabelog). Reservations taken; day-before and same-day cancellations may be charged. Lunch queues after noon; arrive before 12 (September and October 2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. 163 seats incl. round tables and private rooms for 4 to 60; whole-shop hire for 120 or more; non-smoking, with a smoking space under the stairs (Tabelog). Aprons provided (October 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamihommachi 2-6-5, ファースト船場ビル B1F — 3 min from Sakaisuji-Hommachi Stn exit 8; 7 min from Hommachi Stn exit 9',
    cuisine: 'Chinese with Sichuan dishes, about 40 years in Honmachi (Tabelog) · tantanmen in an original and a newer flavour with house chili oil, thin straight noodles, minced meat, bean sprouts and greens; suan la tang noodles; mapo tofu set lunches (reviews; Tabelog) · bang bang chicken, saliva chicken, shrimp in chili sauce, black-vinegar sweet and sour pork, XO beef, xiao long bao, shumai, crab-and-lettuce fried rice, almond tofu, mango pudding (Tabelog menu, 2021) · banquet courses with 90-minute all-you-can-drink',
    website: TB, gmaps: gm('湖陽樹 本町店'), menu_url: M,
    notes: "[Chinese · Honmachi, tantanmen in a big basement room] A Chinese restaurant down a spiral stair under a Chuo-dori office building, open for about 40 years and known for its tantanmen, made with house chili oil. The small entrance hides a big room with round tables that fills with office workers at lunch; come before noon or expect a short wait. Diners in 2026 praise the original-flavour tantanmen — sesame-rich, spicy but not overwhelming, the broth light enough to drink — and the mapo tofu set, served within minutes. One diner flies back from Tokyo for it. At night it hosts banquets in private rooms for up to 60.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, Koyoju Honmachi has reached its 40th anniversary, keeping its tantanmen and suan la tang noodles while trying new dishes; a Tabelog feature speaks of "homemade chili oil and evolved Dan Dan Noodles: 27 years in the making". The shop says Sichuan food has many flavours beyond heat — spicy, sour, numbing, fruity and bitter. A September 2026 regular notes a second Koyoju in Tanimachi 4-chome.', philosophy: '"Evolving while preserving our traditional flavours" (Tabelog).', specialty: 'Tantanmen with house chili oil.',
      anecdotes: [
        { text: '"I travel back home from Tokyo just to eat the Dan Dan noodles at this restaurant." — May 2026, second visit.', source: R + 'B520010050/' },
        { text: '"The entrance is small, so you might not expect it, but the interior is surprisingly spacious." — September 2026, fourth visit.', source: R + 'B457207098/' },
        { text: '"Koyoju Honmachi is quite popular during lunch hours, often requiring a wait after 12 PM." — September 2026.', source: R + 'B534888119/' },
        { text: '"Surprisingly, the broth was quite light, and I found myself drinking it all." — October 2026, original-flavour tantanmen.', source: R + 'B537333082/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (店舗会員、英語版): 湖陽樹 本町店、南本町2-6-5 ファースト船場ビル B1F、堺筋本町駅8番出口から徒歩3分、40周年、Tantanmen と Suan la tang 麺、自家製ラー油と進化した Tantanmen (27年)、Sichuan 料理は辛さだけでなく酸味・痺れ・果実味・苦味も、月〜金11:30〜15:00・17:00〜22:00、土は昼のみ、日祝休み、163席、個室 (4〜60名)、120名以上で貸切、禁煙 (階段下に喫煙所)、宴会コースは90分飲み放題付き。メニュー (2021年): Tantanmen (元祖の味・新しい味)、Bang bang chicken、よだれ鶏、海老のチリソース、黒酢の酢豚、Xiao long bao、Shumai、蟹とレタスのチャーハン、杏仁豆腐。口コミ (2026年5月〜10月): 本町と谷町四丁目にある、入口は小さいが店内は広い、昼は会社員で満席、12時前がおすすめ、元祖の Tantanmenはごまの風味で辛すぎずスープまで飲める、Mapo tofu 定食1,000円、エプロンあり、東京から食べに帰る客も。',
      confidence: 'medium', sources: [TB, M, R + 'B457207098/', R + 'B520010050/', R + 'B533626210/', R + 'B534663051/', R + 'B534888119/', R + 'B535601537/', R + 'B536488393/', R + 'B536600864/', R + 'B537333082/', R + 'B538361870/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南本町2-6-5 ファースト船場ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026. No official site found.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南本町二丁目6番5号 (go) 13m. Nearest record (osaka_aburasoba_a_minamihonmachi, "…南本町2-6-8", a different building) is about 19 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [M, TB, R + 'B536488393/'],
    price_note: 'Tabelog menu last updated July 2021, so prices may have risen; a mapo tofu set lunch was ¥1,000 in September 2026. Diners report under ¥1,000–1,999 at lunch.', last_checked: TODAY, items: [
      it('', '', 'Tantanmen, original flavour', '', 'Noodles', 'no', 'no', 'Menu 2021: ¥968.', 'tantanmen'),
      it('', '', 'Tantanmen, new flavour', '', 'Noodles', 'no', 'no', 'Menu 2021: ¥1,078.', 'tantanmen_new'),
      it('', '', 'Mapo tofu set lunch', '¥1,000', 'Lunch', 'ask', 'no', 'Rice, soup, pickles, dessert; September 2026.', 'mapo_tofu_set'),
      it('', '', 'Xiao long bao, 3 pieces', '', 'Dim sum', 'no', 'no', 'Menu 2021: ¥528.', 'xiaolongbao'),
    ] }, {
    cuisine: 'Sichuan 料理もある中華、本町で約40年 (食べログ)・自家製ラー油の Tantanmen は元祖の味と新しい味、細いストレート麺にひき肉、もやし、青菜。Suan la tang 麺、Mapo tofu の定食 (口コミ、食べログ)・Bang bang chicken、よだれ鶏、海老のチリソース、黒酢の酢豚、XO ソースの牛肉炒め、Xiao long bao、Shumai、蟹とレタスのチャーハン、杏仁豆腐、マンゴープリン (食べログのメニュー、2021年)・90分飲み放題付きの宴会コース',
    neighborhood: '南本町2-6-5 ファースト船場ビル B1F。堺筋本町駅8番出口から徒歩3分、本町駅9番出口から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。名物は Tantanmen (小麦の麺) で、点心、春巻き、タレの炒め物も。Mapo tofu やチャーハンの説明はない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、Tantanmen にはひき肉がのり (口コミ)、メニューは肉と魚介 (食べログのメニュー)。',
    notes: '[中華・本町、広い地下の店の Tantanmen] Chuo-dori 沿いのビルの地下へらせん階段を下りる中華料理店で、約40年続き、自家製ラー油の Tantanmen で知られる。入口は小さいが中は丸テーブルの並ぶ広い店で、昼は会社員でいっぱいになるので12時前に着くか少し待つ覚悟を。2026年の客は、ごまの風味が濃く、辛すぎず、スープまで飲める元祖の Tantanmenと、数分で出てくるMapo tofu 定食を褒める。東京から食べに帰ってくる客も。夜は60名までの個室で宴会も。',
  });
}

// ================================================================ 谷町 ふる里
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27149425/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const H = day(['00:00', '23:59']);
  put({
    id: 'osaka_tanimachi_furusato_kozu', name: '谷町 ふる里 (Tanimachi Furusato)', category: 'OMNI',
    lat: 34.666664, lng: 135.509613, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an udon shop (wheat noodles) with soba, tempura, kara-age and curry; the dashi is the house pride but its seasoning is not described (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; the noodle dishes come in a dashi that is not described, and the toppings include meat, chicken, egg, tempura and fish (Tabelog menu).',
    hours_raw: 'Open 24 hours, every day; closed 1 January (Tabelog). No reservations. Cards (VISA, Master, JCB, AMEX), transport IC and other e-money, PayPay. 66 seats (50 table, 16 box seats); non-smoking; ¥200 discount voucher for nearby coin parking (Tabelog). Sushi is taken self-serve from a showcase and added up at the till (September 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kozu 3-2-30, ヴァンデュール日本橋City Life1 1F — 3 min from Nippombashi Stn (Kintetsu)',
    cuisine: 'Osaka udon and soba open around the clock, with sushi made in house from market fish (Tabelog) · about 50 udon and soba choices from kake and kitsune to sliced (kizami), keiran, nishin, curry, beef-tendon, nabeyaki and "home run", soba ¥100 more; zaru and chilled noodles; rice bowls (oyako, katsu, egg); tempura and anago bowls with a mini udon (Tabelog menu, May 2025; reviews) · sushi and rolls from the showcase',
    website: TB, gmaps: gm('谷町 ふる里 高津'), menu_url: M,
    notes: "[Udon · Kozu, 24-hour udon and sushi] An old Osaka udon house that ran for decades in Tanimachi 9-chome and moved in June 2025 to a new building near the National Bunraku Theatre, still open 24 hours. Tabelog speaks of about 50 years; an October 2026 diner says it began as a food stall in 1948. The dashi is the house pride, the noodles soft and flat in the old Osaka style, and sushi waits in a showcase for diners to help themselves. It is a classic last stop after a night out in Minami and a breakfast spot by 5 AM. Regulars of 20 and 30 years say the taste survived the move; two September 2026 diners found the noodles softer, or more like dried noodles, than before.",
    chef_bio: { chef_name: null, roles: ['Shop staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, a long-established udon shop of about 50 years that relocated and reopened (opening date of the new shop 8 June 2025); dashi is its specialty, and sushi is made in the shop from fresh market fish every day. An October 2026 review says it was established in 1948, started as a food stall and moved from Tanimachi 9-chome to Nipponbashi, in front of the National Bunraku Theatre.', philosophy: '"Dashi is our specialty" (Tabelog).', specialty: 'Osaka udon in house dashi; sushi rolls with udon.',
      anecdotes: [
        { text: '"I\'ve been coming here for about 30 years, and I\'ve never had a more delicious udon broth anywhere else." — September 2026, chicken udon.', source: R + 'B535978900/' },
        { text: '"This is a must-visit spot to wrap up a night out in Minami." — September 2026.', source: R + 'B536056220/' },
        { text: '"I feel like the noodles have changed a bit; they seemed softer before." — September 2026, sliced udon.', source: R + 'B516652161/' },
        { text: '"The sushi is self-serve, and while I had no idea how much it would cost, it was all accounted for when I paid!" — September 2026.', source: R + 'B535775196/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 谷町 ふる里、高津3-2-30 ヴァンデュール日本橋City Life1 1F、近鉄日本橋駅から徒歩3分、2025年6月8日 (移転オープン)、24時間営業、1月1日休み、予約不可、66席 (テーブル50、ボックス16)、禁煙、創業約50年の老舗のうどん店、出汁が自慢、市場で仕入れた魚で店内で作る寿司、提灯が目印、近くのコインパーキングの200円割引券。メニュー (2025年5月): Kake、きつね、きざみ、Keiran、Nishin、カレー、すじ、Nabeyaki、ホームランなど約50種、そばは100円増し、Zaru、丼 (Oyako、Katsu、玉子)。口コミ (2026年5月〜11月): 1948年に屋台から始まりTanimachi 9-chome から National Bunraku Theatre 前に移転という声、24時間で飲んだ後の締めや朝5時の朝食に、天丼や Anago 丼にミニうどん、寿司はショーケースから自分で取る、30年通う客は出汁を絶賛、移転後も味は同じという声、麺が前より柔らかい・乾麺のようという声も。',
      confidence: 'medium', sources: [TB, M, R + 'B514993397/', R + 'B516652161/', R + 'B520081473/', R + 'B527291225/', R + 'B535775196/', R + 'B535978900/', R + 'B536056220/', R + 'B536350287/', R + 'B537947567/', R + 'B538353642/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sushi is self-serve from a showcase (2026 review). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区高津3-2-30 ヴァンデュール日本橋City Life1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing for the relocated shop (opened June 2025); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区高津三丁目2番30号 (go) 14m. Nearest record (osaka_tora_to_ryu_nipponbashi, "…高津3-2-33", a different building) is about 41 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB, R + 'B527291225/'],
    price_note: 'Tabelog menu last updated May 2025, tax included; soba ¥100 more than udon. Diners report under ¥1,000–2,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Kake udon', '¥730', 'Udon', 'no', 'no', 'Soba ¥100 more.', 'kake_udon'),
      it('', '', 'Kitsune udon', '¥900', 'Udon', 'no', 'no', '', 'kitsune_udon'),
      it('', '', 'Curry udon', '¥1,280', 'Udon', 'no', 'no', '', 'curry_udon'),
      it('', '', 'Beef-tendon udon', '¥1,650', 'Udon', 'no', 'no', '', 'suji_udon'),
      it('', '', 'Anago tempura bowl with mini udon', '¥1,600', 'Rice bowls', 'no', 'no', 'November 2026 review.', 'anago_don_set'),
    ] }, {
    cuisine: '24時間営業の大阪のうどんとそば、市場の魚で店内で作る寿司 (食べログ)・Kake、きつねからきざみ、Keiran、Nishin、カレー、すじ、Nabeyaki、ホームランまで約50種のうどん・そば (そばは100円増し)、Zaru と冷たい麺、丼 (Oyako、Katsu、玉子)、ミニうどん付きの天丼や Anago 丼 (食べログのメニュー、2025年5月、口コミ)・ショーケースの寿司と巻物',
    neighborhood: '高津3-2-30 ヴァンデュール日本橋City Life1 1F。近鉄日本橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。うどん (小麦の麺) の店で、そば、天ぷら、Kara-age、カレーも。自慢の出汁の味付けの説明はない (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、麺の出汁の説明もない。具は肉、鶏、卵、天ぷら、魚 (食べログのメニュー)。',
    notes: '[うどん・高津、24時間のうどんと寿司] Tanimachi 9-chome で長く続いた大阪のうどん店が2025年6月、National Bunraku Theatre 近くの新しいビルに移転し、今も24時間営業。食べログでは創業約50年、2026年10月の客は1948年に屋台から始まったと書く。自慢は出汁、麺は昔ながらの大阪の柔らかく平たいうどんで、寿司はショーケースから自分で取る。ミナミで飲んだ後の締めの定番で、朝5時の朝食にも。20年、30年通う常連は移転後も味は変わらないと言うが、2026年9月の客2人は、麺が前より柔らかい、乾麺のようだと感じた。',
  });
}

// ================================================================ 大衆中華酒場 若林 心斎橋パルコ店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27121689/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const PARCO = 'https://shinsaibashi.parco.jp/shop/detail/?cd=026572';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_wakabayashi_shinsaibashi_parco', name: '大衆中華酒場 若林 心斎橋パルコ店 (Taishu Chuka Sakaba Wakabayashi Shinsaibashi PARCO)', category: 'OMNI',
    lat: 34.673941, lng: 135.500733, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu has gyoza, spring rolls, yakisoba and sauced dishes; the Tianjin rice sauce is soy-based (Tabelog menu); nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; the signature dishes are pork, chicken, shrimp and tofu with meat (Tabelog menu).',
    hours_raw: 'Daily 11:00–23:00 (Tabelog). Reservations taken; often full on holidays (September 2026). Weekday lunch sets until 18:00 (September 2026 review). A service fee may be added (Tabelog). Cards (incl. UnionPay), transport IC and other e-money, QR incl. Alipay and WeChat Pay. 40 seats incl. counter; open to the neighbouring shops of the food street; non-smoking (Tabelog; reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 1-8-3, Shinsaibashi PARCO B2F (Neon Dining Street) — from Shinsaibashi Stn south gate',
    cuisine: 'Chinese tavern with a creative turn on classics (Tabelog) · "seven famous dishes": big lemony sweet and sour pork served with knife and fork, Mao Zedong chicken, mapo tofu with house chili oil and Sichuan pepper, stir-fried water spinach, whole-shrimp spring rolls, fluffy Tianjin rice, pistachio gyuhi ice cream (Tabelog menu, August 2024) · drunken shrimp, gyoza, shrimp mayo, roast duck, black-vinegar pork, chive yakisoba, yurinchi; lunch sets (reviews) · sansho highball, Shaoxing-wine cocktails, fruit-pulp lemon sour',
    website: PARCO, gmaps: gm('大衆中華酒場 若林 心斎橋パルコ'), menu_url: M,
    notes: "[Chinese · Shinsaibashi PARCO, basement Chinese tavern] A busy Chinese tavern in the Neon Dining Street two floors under Shinsaibashi PARCO, open to the neighbouring stalls like a food court and open from 11 AM to 11 PM. The signature is a big chunk of lemony sweet and sour pork eaten with a knife and fork; diners in 2026 also order the drunken shrimp, gyoza, mapo tofu and the pulpy lemon sour, often after a film at the PARCO cinema. Weekday lunch sets run until 6 PM. Diners note shops of the same name in Links Umeda and Tennoji Mio.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, "a creative twist on classic Chinese dishes by skilled chefs", with original drinks such as a homemade sansho highball and Shaoxing-wine cocktails. Two September 2026 diners mention Wakabayashi shops in Links Umeda and Tennoji Mio. Tabelog gives the opening as 18 March 2021.', philosophy: '"Everyday delight" (Tabelog).', specialty: 'Lemony sweet and sour pork with knife and fork.',
      anecdotes: [
        { text: '"The layout of the restaurant is open, with no walls separating it from neighboring shops, creating a lively atmosphere" — September 2026.', source: R + 'B519562452/' },
        { text: '"The lemon sour here is refreshing, packed with fruit pulp and lemon peel, and I couldn\'t help but order it repeatedly." — September 2026.', source: R + 'B536854457/' },
        { text: '"I noticed they also have locations in Links Umeda and Tennoji Mio." — September 2026, group of four on a holiday.', source: R + 'B536880335/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 大衆中華酒場 若林 心斎橋パルコ店、心斎橋パルコ B2F ネオン食堂街、2021年3月18日オープン、毎日11:00〜23:00、40席、禁煙、サービス料がかかる場合あり、職人による定番中華のひと工夫、名物の酢豚はナイフとフォークで、酔っ払い海老、Tenshinhan、自家製Sansho ハイボール、Shaoxing 酒のカクテル。メニュー (2024年8月): 若林の名物7品 (酢豚、Mao Zedong チキン、Mapo tofu、空芯菜炒め、海老春巻き、Tenshinhan、ピスタチオアイス)。口コミ (2026年8月〜10月): いつも混む、隣の店と壁がない屋台のような雰囲気、平日18時までのランチセット、Gyoza、Mapo tofu、レモンサワー、パルコの映画の後に、リンクス梅田と天王寺ミオにも店があるという声。',
      confidence: 'medium', sources: [TB, M, PARCO, R + 'B481301801/', R + 'B511661879/', R + 'B514527909/', R + 'B519562452/', R + 'B533913541/', R + 'B534985431/', R + 'B536459451/', R + 'B536854457/', R + 'B536880335/', R + 'B538458150/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pays with Alipay and WeChat Pay (Tabelog). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-8-3 心斎橋パルコ B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing linking the PARCO shop page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (kept: inside PARCO B2F; GSI 大阪府大阪市中央区心斎橋筋一丁目8番3号 (go) gives the building point 54 m away). Same building as ちいかわらーめん 豚 (osaka_chiikawa_ramen_buta_shinsaibashi, "…心斎橋パルコ B2F"), whose pin is about 8 m away, so the two are not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [M, TB, R + 'B514527909/'],
    price_note: 'Tabelog menu last updated August 2024, tax included; September 2026 diners paid ¥390 for gyoza and ¥990 for mapo tofu. Diners report ¥1,000–5,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Signature sweet and sour pork, large pork-belly chunk with lemon', '¥1,089', 'Famous seven', 'ask', 'no', 'Menu 2024.', 'subuta'),
      it('', '', 'Mapo tofu with house chili oil', '¥990', 'Famous seven', 'ask', 'no', 'September 2026 review; ¥1,089 on the 2024 menu.', 'mapo_tofu'),
      it('', '', 'Pan-fried gyoza', '¥390', 'Dim sum', 'no', 'no', 'September 2026 review.', 'gyoza'),
      it('', '', 'Whole-shrimp spring roll', '¥385', 'Famous seven', 'no', 'no', 'Menu 2024.', 'shrimp_spring_roll'),
      it('', '', 'Drunken shrimp, 1 piece', '¥390', 'Small plates', 'ask', 'no', 'September 2026 review.', 'drunken_shrimp'),
    ] }, {
    cuisine: '定番の中華にひと工夫の中華酒場 (食べログ)・若林の名物7品: ナイフとフォークで食べるレモン風味の大きな酢豚、Mao Zedong チキン、自家製ラー油とSansho の Mapo tofu、空芯菜炒め、海老まるごとの春巻き、ふわふわの Tenshinhan、ピスタチオのGyuhi アイス (食べログのメニュー、2024年8月)・酔っ払い海老、Gyoza、海老マヨ、ローストダック、黒酢の酢豚、ニラの Yakisoba、Yurinchi、ランチセット (口コミ)・Sansho ハイボール、Shaoxing 酒のカクテル、果肉入りのレモンサワー',
    neighborhood: '心斎橋筋1-8-3 心斎橋パルコ B2F (ネオン食堂街)。心斎橋駅南改札から',
    gf_detail: '要確認。グルテンの情報なし。Gyoza、春巻き、Yakisoba、タレの皿があり、Tenshinhan のあんはしょうゆベース (食べログのメニュー)。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、名物は豚、鶏、海老、ひき肉入りの豆腐 (食べログのメニュー)。',
    notes: '[中華・心斎橋パルコ、地下の中華酒場] 心斎橋パルコの地下2階、ネオン食堂街のにぎやかな中華酒場で、隣の店との壁がなくフードコートのよう。朝11時から夜11時まで。名物はナイフとフォークで食べるレモン風味の大きな酢豚。2026年の客は酔っ払い海老、Gyoza、Mapo tofu、果肉入りのレモンサワーも頼み、パルコの映画の後に寄る人も。平日のランチセットは18時まで。リンクス梅田と天王寺ミオにも同じ名前の店があると客が書いている。',
  });
}

// ================================================================ とらふぐ城
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27080705/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://torafugujo.com/';
  const H = day(['16:00', '23:30']);
  put({
    id: 'osaka_torafugu_jo_higashishinsaibashi', name: 'とらふぐ城 (Torafugu Jo)', category: 'OMNI',
    lat: 34.673466, lng: 135.505341, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Tessa and grilled fugu come with ponzu, garlic salt or moromi soy sauce, and the menu has kara-age, eel and zosui (Tabelog menu; reviews); nothing is stated about wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fugu, crab and eel restaurant.',
    hours_raw: 'Winter (October–March) daily 16:00–23:30 (last order 22:00); summer (April–September) 12:00–14:00 (last order 13:45) and 17:00–22:00 (last order 21:00); 24–30 December 15:00–23:30; 31 December–3 January 15:00–21:00 with a 10% service charge; open year-round; no eel in December and January (Tabelog; official site). Reservations: reservation-only courses at least two days ahead; online bookings require a course for every guest; 2-hour limit. Cards (incl. UnionPay), PayPay, Alipay; no e-money. 78 seats: private sunken-kotatsu rooms on the second floor, a tatami room with tables for up to 32 on the third (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-4-24 — 1 min from Nagahoribashi Stn exit 7; 8 min from Shinsaibashi Stn exit 6',
    cuisine: 'Domestic tiger-fugu (torafugu) restaurant: aged tessa sashimi, tecchiri hot pot with the fish cut for each visit, charcoal-grilled fugu with ponzu-garlic, garlic salt or moromi soy, garlic stone-grilled fugu, fried fugu, skin kara-age, shirako in season, zosui; snow crab and eel courses; conger eel in summer (official site; Tabelog menu, August 2026; reviews) · courses such as "Tenshu" ¥7,980; hirezake',
    website: SITE, gmaps: gm('とらふぐ城 東心斎橋'), menu_url: M,
    notes: "[Fugu · Higashi-Shinsaibashi, tiger fugu with private rooms] A three-floor fugu house a minute from Nagahoribashi Station that serves only domestic tiger fugu, aged to bring out the flavour, plus snow crab and eel. Diners in 2026 praise the grilled fugu, the aged tessa and the creamy grilled shirako, and the staff who grill the fugu and tend the hot pot; one August diner saw the cut fugu still twitch in the pot. A six-visit regular calls the range of cooking outstanding. Private rooms and a tatami hall suit celebrations and banquets. Hours change with the season: evenings only from October to March, lunch and dinner from April to September.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed (official site; Tabelog)'], origin: null, background: 'Per the official site, the house ages its tiger fugu to draw out the umami for tessa and prepares the tecchiri fish at each visit "to taste the umami down to the marrow"; good dishes start from good ingredients. Tabelog gives the opening as 11 September 2014 and says all fugu is domestic tiger fugu.', philosophy: '"Good food comes from good ingredients" (official site).', specialty: 'Aged tiger-fugu tessa; charcoal-grilled fugu.',
      anecdotes: [
        { text: '"The staff were incredibly kind, carefully grilling the fugu and preparing the hot pot, which I really appreciated." — June 2026, first fugu.', source: R + 'B530937447/' },
        { text: '"The fugu served in the hot pot was still twitching (it was my first time seeing cut fugu move like that), and the final zosui was rich and delicious." — August 2026.', source: R + 'B533374512/' },
        { text: '"Everything was delicious, but the grilled soft roe was especially amazing—completely free of any fishy taste and so creamy that I ordered it twice!" — June 2026, à la carte.', source: R + 'B531855511/' },
        { text: '"The final dish, the zosui (rice porridge), ended up being quite mild in flavor" — August 2026, private-room course.', source: R + 'B533689886/' },
      ],
      japanese_sources_summary: '公式サイト: とらふぐ城、大阪心斎橋の国産ふぐ料理、ふぐ・かに・うなぎ・季節限定、熟成させて旨味を引き出した透き通るてっさ、来店ごとに捌き骨の髄から旨味を味わうてっちり、ふぐの王様とらふぐ、ずわいがに、旨い料理は良質な食材から、ふぐで忘年会・ひれ酒で乾杯、東心斎橋1-4-24、夏季 (4月〜9月) 12:00〜14:00 (L.O.13:45)・17:00〜22:00 (L.O.21:00)、冬季 (10月〜3月) 16:00〜23:30、長堀橋駅7番出口から徒歩1分。食べログ (店舗会員、英語版): 2014年9月11日オープン、国産とらふぐのみ、78席、2階は掘りごたつの個室、3階は32名までの座敷、年末年始の営業時間とサービス料、12月と1月はうなぎなし。メニュー (2026年8月): てっさ2,180円、炭火焼き、ふぐの石焼き、Kara-age、Shirako、ふぐ鍋。口コミ (2025年12月〜2026年10月): 焼きふぐ、熟成のてっさ、焼き Shirako、スタッフが焼いて鍋を作る、鍋のふぐが動いていた、夏の conger eel、Unaju、Tenshu コース7,980円、Zosui の味が薄めという声も、6回通う客。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B496913512/', R + 'B503406568/', R + 'B530937447/', R + 'B531855511/', R + 'B533004637/', R + 'B533374512/', R + 'B533689886/', R + 'B535601765/', R + 'B535938872/', R + 'B536603532/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff grill the fugu and prepare the hot pot (2026 reviews); pays with Alipay (Tabelog). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-4-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with year-end banquet notice and shop-maintained (corporate-member) Tabelog listing with an August 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目4番24号 (go) 6m. Nearest record (osaka_wagyu_steak_shibaraku, "…東心斎橋1-4-23", a different lot number) is about 6 m away; the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated August 2026, tax included; 10% service charge 31 December–3 January. Courses such as "Tenshu" ¥7,980 (September 2026). Diners report ¥5,000–14,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Tessa (aged tiger-fugu sashimi)', '¥2,180', 'Sashimi', 'ask', 'no', 'With ponzu.', 'tessa'),
      it('', '', 'Charcoal-grilled tiger fugu, on the bone', '¥2,900', 'Grilled', 'ask', 'no', 'Ponzu-garlic, garlic salt or moromi soy.', 'yaki_fugu'),
      it('', '', 'Fried fugu', '¥2,480', 'Fried', 'no', 'no', '', 'fugu_karaage'),
      it('', '', 'Grilled shirako (sauce or salt)', '¥2,580', 'Shirako', 'ask', 'no', 'In season.', 'yaki_shirako'),
      it('', '', 'Fugu hot pot (tecchiri)', '¥2,980', 'Nabe', 'ask', 'no', 'Fish cut for each visit.', 'tecchiri'),
    ] }, {
    cuisine: '国産とらふぐの店: 熟成のてっさ、来店ごとに捌くてっちり、Ponzu にんにく・にんにく塩・Moromi 醤油で食べる炭火焼き、にんにくの石焼き、ふぐの Kara-age、皮の Kara-age、季節の Shirako、Zosui。ずわいがにとうなぎのコース、夏は conger eel (公式サイト、食べログのメニュー、2026年8月、口コミ)・Tenshu コース7,980円などのコース、ひれ酒',
    neighborhood: '東心斎橋1-4-24。長堀橋駅7番出口から徒歩1分、心斎橋駅6番出口から徒歩8分',
    gf_detail: '要確認。グルテンの情報なし。てっさや焼きふぐはPonzu、にんにく塩、Moromi 醤油で食べ、Kara-age、うなぎ、Zosui もある (食べログのメニュー、口コミ)。小麦の説明はない。',
    vegan_detail: 'ヴィーガンではありません。ふぐ、かに、うなぎの店。',
    notes: '[ふぐ・東心斎橋、個室のあるとらふぐの店] 長堀橋駅から1分、3階建てのふぐ料理店で、熟成で旨味を引き出した国産のとらふぐだけを使い、ずわいがにとうなぎも出す。2026年の客は焼きふぐ、熟成のてっさ、とろりとした焼き Shirako、ふぐを焼き鍋を作ってくれるスタッフを褒める。8月の客は鍋のふぐがまだ動いていたと書く。6回通う常連は調理の幅を高く評価する。個室と座敷は記念日や宴会向き。営業時間は季節で変わり、10月〜3月は夜のみ、4月〜9月は昼と夜。',
  });
}

save();
