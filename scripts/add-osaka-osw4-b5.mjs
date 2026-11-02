// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 5.
//   + 千とせ べっかん Chitose Bekkan (the niku-sui family's branch in Namba Grand Kagetsu since 2012)
//   + TABLES CAFE (pancake and cake café at the back of Cross Hotel Osaka 1F)
//   + 麺屋 百福 Menya Momofuku (khao soi days, third week of each month, at Asian kitchen cafe 百福 in Kujo)
//   + たこ梅 本店 Tako Ume Honten (oden and sweet simmered octopus on Dotonbori since 1844; fifth generation)
//   - skip ニュー松坂 難波御堂筋店 27108147: a teppanyaki steak chain (布施本店 since 1956, 梅田32番街店, Roppongi from
//     2022, Shinjuku, 西中洲 in Fukuoka per search results), expanding across cities.
//   - skip なんばグーテ 27013487: one of the エーワンベーカリー group's station bakeries (the group's shop page lists nine
//     エーワンベーカリー shops and several グーテ shops, a-1bakery.co.jp/shop) — chain.
//   Chain check: Chitose Bekkan is the one branch of 千とせ (main shop not in data). TABLES CAFE: the sister TABLES shop in
//   Horie closed at the end of July 2026 (October 2026 review); tables labo in Tenmabashi sells take-out sweets. Momofuku
//   and Asian kitchen cafe 百福 share one address. たこ梅: the main shop of a small group (分店, 北店 on the official
//   site), none in data. None of the four is in data/osaka.json (grep by name, Tabelog id and address, 2026-11-01).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27108147', 'ニュー松坂 難波御堂筋店: teppanyaki chain (Fuse main shop, Umeda, Roppongi 2022, Shinjuku, Fukuoka Nishinakasu) — fast-growing chain');
skip('27013487', 'なんばグーテ: A-1 Bakery group station bakery (nine エーワンベーカリー shops plus several グーテ shops) — chain');

// ================================================================ 千とせ べっかん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27064407/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.chitose-nikusui.com/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'osaka_chitose_bekkan_namba_grand_kagetsu', name: '千とせ べっかん (Chitose Bekkan)', category: 'OMNI',
    lat: 34.66487, lng: 135.503776, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: wheat udon in a soy-seasoned dashi, and the niku-sui uses the same broth; no gluten-free option described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dashi is a blend of katsuo and urume sardine, and the bowls carry beef, egg or fried fat (official site; pork fat per an October 2026 review).',
    hours_raw: 'Daily 11:00–20:00, last order 19:30; closes early when the dashi sells out (official site; Tabelog shop text, which gives prices revised on 15 May 2026). No reservations (Tabelog). Buy a meal ticket from the machine by the entrance (October 2026). Cash only: no cards, e-money or QR (Tabelog; October 2026 review). Queues of 10–20 people and 15–30 minutes at lunch in September–October 2026, often shorter than at the main shop. 28 seats, counter seating; non-smoking; children welcome (Tabelog). Opened 8 April 2012 (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Namba Sennichimae 11-6, なんばグランド花月 1F — 227 m from Nankai Namba Stn',
    cuisine: 'Niku-sui, the dish born at 千とせ: meat udon without the udon, a soft-boiled egg added (official site) · prices from the official menu, tax included: niku-sui ¥1,180, with tofu ¥1,280 · meat udon ¥1,180, half-noodle meat udon ¥1,380 · kodama, small rice with a raw egg and the house egg-rice soy sauce ¥400, large ¥500 · raw egg ¥100, soft-boiled egg ¥200, rice ¥300 / ¥400 · kasu udon with crisp fried fat (pork, per an October 2026 review) ¥1,280, meat-and-kasu udon ¥1,580 · curry udon ¥1,480, kasu curry udon ¥1,880 · kitsune udon ¥1,100, tsukimi udon ¥900 · draft beer ¥600, non-alcoholic beer ¥500',
    website: SITE, gmaps: gm('千とせ べっかん なんばグランド花月'), menu_url: SITE,
    notes: '[Udon · Namba, inside the Yoshimoto theatre] The branch of 千とせ, the Sennichimae udon house where niku-sui was born, on the ground floor of the Namba Grand Kagetsu comedy theatre. Per the shop, a hungover Yoshimoto Shinkigeki actor, 花紀京, asked for meat udon without the udon, and the then owner obliged. Order the niku-sui (¥1,180) with a kodama, rice with a raw egg and the house soy sauce, and pour the broth over the rice; the broth of katsuo and urume is light and a little sweet, with plenty of tender beef and a soft egg. The bekkan also does kasu udon and a curry udon of its own. Buy a ticket at the machine; cash only. Queues are usually shorter than at the main shop, though prices run a little higher (2026 reviews).',
    chef_bio: { chef_name: '森井勇貴', roles: ['Fourth generation, keeping the niku-sui at the bekkan (official site)', 'Owner of 千とせ: 森井一光, third generation (official site)'], origin: null, background: 'Per the official site: the 千とせ noren has passed from parent to child, and the third generation 森井一光 is now the owner. 千とせ has stood in Namba Sennichimae for fifty years, first known for its meat udon and loved by Yoshimoto comedians from the nearby Namba Grand Kagetsu. Niku-sui began when the Yoshimoto Shinkigeki actor 花紀京, hungover between shows, ordered "meat udon, without the udon" and the previous owner obliged; word of mouth made it the most popular dish. The branch 千とせべっかん opened in Namba Grand Kagetsu in April 2012, where the fourth generation 森井勇貴 keeps the taste of the niku-sui.', philosophy: null, specialty: 'Niku-sui with kodama; kasu udon.',
      anecdotes: [
        { text: '"Nikusui is a unique dish that originated when a Yoshimoto Shinkigeki comedian ordered \'Niku Udon without the Udon\' while hungover" — October 2026, after giving up on the queue at the main shop.', source: R + 'B537693011/' },
        { text: '"The Nikusui features plenty of beef and a soft-boiled egg in a flavorful katsuobushi broth. … it\'s customary to pour the broth over the rice." — October 2026, with a small tamago kake gohan.', source: R + 'B537046110/' },
        { text: '"Kasu Udon JPY 1280: The fried pork fat is crispy and adds a delightful texture." — October 2026 (the official site describes kasu udon without naming the meat).', source: R + 'B536862241/' },
      ],
      japanese_sources_summary: '公式サイト: 千とせべっかん、大阪の老舗「千とせ」がなんばグランド花月1階に、11:00〜19:30 L.O.、20:00閉店、出汁売切れの際は閉店、無休、千とせの暖簾は代々親から子へ、現在は三代目の森井一光が店主、難波千日前に店を構えて五十年、元々肉うどんのおいしい店で吉本興業の芸人にも愛された、肉吸いは吉本新喜劇の花紀京さんが二日酔いで「肉うどん、うどん抜きで」と注文し先代が応えたことから、平成24年4月に支店の千とせべっかん、四代目の森井勇貴が肉吸いの味を守る、かつおとうるめのブレンドの出汁、少し甘めの牛肉、半熟卵、青ネギ、豆腐入りも、小ごはんに生卵の「小玉」と専用醤油、肉吸い1,180円、肉吸い (豆腐入り) 1,280円、肉うどん1,180円、半玉肉うどん1,380円、小玉400円、かすうどん1,280円、肉かすうどん1,580円、カレーうどん1,480円、かすカレーうどん1,880円、きつねうどん1,100円、月見うどん900円、生ビール600円。食べログ (店舗会員): 2026年5月15日に価格改定、予約不可、カード・電子マネー・QR不可、28席、禁煙、2012年4月8日オープン。口コミ(2026年9月〜10月): 券売機、10〜20人の行列で15〜30分、本店より少し高い、カレーうどんはべっかん限定、肉吸いに小玉をかけて。',
      confidence: 'high', sources: [TB, SITE, R + 'B353438478/', R + 'B536169235/', R + 'B536178451/', R + 'B536806231/', R + 'B536862241/', R + 'B537046110/', R + 'B537311078/', R + 'B537335996/', R + 'B537673413/', R + 'B537693011/', R + 'B537767065/', R + 'B537953243/', R + 'B538056726/', R + 'B538101258/', R + 'B538376354/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buy a meal ticket from the machine by the entrance; a short menu led by niku-sui (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前11-6 なんばグランド花月 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing (price revision of 15 May 2026) and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前11番6号 (go) 25m; the Tabelog point sits in the Namba Grand Kagetsu building. Nearest records are across the street at 難波千日前10-13/10-14 (osaka_coco_ichibanya_namba_sennichimae 27 m, osaka_the_butcher_namba 29 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [SITE, R + 'B537046110/', R + 'B536862241/'],
    price_note: 'Prices from the official site (tax included), matched by October 2026 reviews (niku-sui ¥1,180, kodama ¥400, kasu udon ¥1,280).', last_checked: TODAY, items: [
      it('肉吸い', '', 'Niku-sui (meat udon broth without the udon, soft-boiled egg)', '¥1,180', 'Niku-sui', 'no', 'no', 'Official site.', 'nikusui'),
      it('肉吸い（豆腐入り）', '', 'Niku-sui with tofu', '¥1,280', 'Niku-sui', 'no', 'no', 'Official site.', 'nikusui_tofu'),
      it('小玉', '', 'Kodama: small rice with a raw egg and egg-rice soy sauce', '¥400', 'Rice', 'no', 'no', 'Official site.', 'kodama'),
      it('肉うどん', '', 'Meat udon', '¥1,180', 'Udon', 'no', 'no', 'Official site.', 'niku_udon'),
      it('かすうどん', '', 'Kasu udon (fried fat)', '¥1,280', 'Udon', 'no', 'no', 'Official site.', 'kasu_udon'),
      it('カレーうどん', '', 'Curry udon', '¥1,480', 'Udon', 'no', 'no', 'Official site.', 'curry_udon'),
      it('きつねうどん', '', 'Kitsune udon', '¥1,100', 'Udon', 'no', 'no', 'Official site.', 'kitsune_udon'),
    ] }, {
    cuisine: '千とせで生まれた肉吸い: 肉うどんのうどんのかわりに半熟玉子 (公式サイト)・値段は公式サイト、税込: 肉吸い1,180円、豆腐入り1,280円・肉うどん1,180円、半玉肉うどん1,380円・小ごはんに生卵と専用醤油の小玉400円、大玉500円・生玉子100円、半熟玉子200円、ごはん小300円、大400円・かすうどん1,280円、肉かすうどん1,580円・カレーうどん1,480円、かすカレーうどん1,880円・きつねうどん1,100円、月見うどん900円・生ビール600円、ノンアルコールビール500円',
    neighborhood: '難波千日前11-6 なんばグランド花月 1階。南海難波駅から227m',
    gf_detail: '実質グルテンフリーではありません。小麦のうどんを醤油で味付けした出汁で、肉吸いも同じ出汁。グルテンフリーの選択肢の説明はない。',
    vegan_detail: 'ヴィーガンではありません。出汁はかつおとうるめのブレンドで、牛肉、卵、かすを使う (公式サイト)。',
    notes: '[うどん・難波、吉本の劇場の中] 肉吸いが生まれた千日前のうどん店「千とせ」の支店で、なんばグランド花月の1階。店によれば、二日酔いの吉本新喜劇の花紀京さんが「肉うどん、うどん抜きで」と頼み、先代が応えたのが始まり。肉吸い (1,180円) に、生卵と専用醤油の小玉を頼み、ごはんに汁をかけて。かつおとうるめの出汁は軽く少し甘めで、やわらかい牛肉がたっぷりと半熟卵。べっかんには、かすうどんや独自のカレーうどんも。券売機で食券を買い、現金のみ。行列はたいてい本店より短いが、値段は少し高め (2026年の口コミ)。',
  });
}

// ================================================================ TABLES CAFE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27057383/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'osaka_tables_cafe_cross_hotel', name: 'TABLES CAFE', category: 'OMNI',
    lat: 34.669746, lng: 135.50078, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The signature is pancakes, with cream cheese in the batter, and the menu runs to pasta gratins, cakes, parfaits and baked goods; curry, gapao rice and chicken over rice are rice dishes, but nothing is stated about their sauces.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Pancakes, cakes and gratins use dairy and eggs; ask about the curry, gapao rice and drinks.',
    hours_raw: 'Daily 11:00–20:00, last order food 19:00, drinks 19:30; open all year (Tabelog). Reservations accepted; walk-ins usually fine, though weekend afternoons can queue and lunch dishes sold out by 13:00 on an August 2026 day (Tabelog; 2026 reviews). Order by QR code at the table (September–October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC, nanaco, iD, QUICPay, PayPay and Alipay (Tabelog). 80 seats with sofas and a private room; whole-room hire up to 60; non-smoking; free Wi-Fi; wheelchair accessible; children and strollers welcome (Tabelog). Menu in English, Chinese and Korean (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-5-15, at the back of Cross Hotel Osaka 1F, just north of Dotonbori — 3 min from Namba Stn exit 14',
    cuisine: 'Café meals and sweets in a hotel (2026 reviews) · pancakes, thick and fluffy with cream cheese in the batter, with butter and maple syrup; strawberry pancakes; savoury bacon, egg and sausage pancakes, the most popular dish (staff, August 2026); salmon and sausage pancakes · seasonal sweet-potato menu in autumn 2026: Anno imo brûlée parfait with sweet-potato tempura, mille-feuille, sweet-potato pancakes · pasta gratins, e.g. autumn salmon and three mushrooms (October 2026), shrimp-bisque tomato cream (about ¥1,780, January 2026) · curry with a soft-boiled egg, gapao rice, chicken over rice · cakes: black forest, apple pie, cheesecake, short cake, rare cheesecake · iced Viennese coffee, café latte · take-away TABLES caramel sablé tins, cookie tins, frozen Horie butter sand (September 2026)',
    website: null, gmaps: gm('TABLES CAFE クロスホテル大阪'), menu_url: null,
    notes: '[Café · Namba, a hotel lounge for pancakes] A large, quiet, dimly lit café with sofas at the back of Cross Hotel Osaka, a few steps from Dotonbori, that often has a free table when the street outside is queuing. Order the pancakes, thick and fluffy with cream cheese in the batter, sweet with maple or savoury with bacon, egg and sausage, or the seasonal parfait (sweet potato in autumn 2026). Lunch brings gratins, curry and gapao rice; order by QR code; lunch dishes can sell out by 13:00. Expect ¥1,000–3,000 a head. Diners in 2026 found the staff kind; one had the same seat kept on request.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop text: the name is TABLE plus S, for the many new and enjoyable things that happen around a table. An October 2026 diner writes that the sister TABLES shop in Horie closed at the end of July 2026.', philosophy: '"Many things happen at the table, making it a lot of fun" (Tabelog shop text).', specialty: 'Cream-cheese pancakes; seasonal parfaits.',
      anecdotes: [
        { text: '"When I made the reservation, I mentioned in the comments that I hoped to have the same room as last time, and I was truly grateful that they prepared the exact same seat for me" — October 2026, curry with a soft-boiled egg.', source: R + 'B537866974/' },
        { text: '"The Anno Imo parfait came topped with sweet potato tempura, and there were also bite-sized pieces of sweet potato inside the parfait!" — October 2026, ordered by QR code.', source: R + 'B537134546/' },
        { text: '"It\'s located inside a hotel, and the lobby was filled with suitcases, likely because many foreigners use it. However, the cafe was quiet" — September 2026.', source: R + 'B535918541/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): TABLES CAFE、カフェ・パンケーキ・ケーキ、大阪市中央区心斎橋筋2-5-15 クロスホテル大阪 1F の奥、なんば駅14番出口から徒歩3分、毎日11:00〜20:00 (L.O. 料理19:00、ドリンク19:30)、年中無休、予約可、カード・交通系IC・nanaco・iD・QUICPay・PayPay・Alipay 可、80席、個室、貸切60名まで、禁煙、無料 Wi-Fi、車いす可、英語・中国語・韓国語のメニュー、TABLE と S で TABLES。口コミ(2025年11月〜2026年10月): クリームチーズ入りのふわふわのパンケーキ、ベーコンエッグソーセージのパンケーキが一番人気、Anno imo のブリュレパフェ、ミルフィーユ、パスタグラタン、カレー、ガパオライス、チキンオーバーライス、ケーキ、QR コードで注文、13時でランチが売り切れた日も、堀江の TABLES は2026年7月末で閉店、ホテルの中で静か。',
      confidence: 'medium', sources: [TB, R + 'B514256569/', R + 'B523908857/', R + 'B528506616/', R + 'B533844663/', R + 'B534456271/', R + 'B535027609/', R + 'B535426244/', R + 'B535798470/', R + 'B535918541/', R + 'B537134546/', R + 'B537204703/', R + 'B537308088/', R + 'B537708534/', R + 'B537866974/', R + 'B538145650/'] },
    cultural_comfort: { level: 'english', note: 'Menu in English, Chinese and Korean (Tabelog); QR-code ordering (2026); in a hotel used by many overseas guests (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-5-15 クロスホテル大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目5番15号 (go) 20m; the Tabelog point is at the back of the hotel, where the café is. No other record in data within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514256569/', TB],
    price_note: 'Only one dish price seen (shrimp-bisque gratin, about ¥1,780 in January 2026, reviewer unsure); party plans ¥2,000–6,000 on Tabelog; no menu read.', last_checked: TODAY, items: [
      it('', '', 'Pancakes with butter and maple syrup', '', 'Pancakes', 'no', 'no', '2026 reviews.', 'pancakes'),
      it('', '', 'Bacon, egg and sausage pancakes', '', 'Pancakes', 'no', 'no', 'August and October 2026 reviews.', 'bacon_egg_pancakes'),
      it('', '', 'Seasonal sweet-potato brûlée parfait', '', 'Dessert', 'ask', 'no', 'September–October 2026 reviews.', 'sweet_potato_parfait'),
      it('', '', 'Curry with a soft-boiled egg', '', 'Meals', 'ask', 'ask', 'October 2026 review.', 'curry'),
      it('', '', 'Shrimp-bisque tomato cream pasta gratin', 'about ¥1,780', 'Meals', 'no', 'no', 'January 2026 review.', 'bisque_gratin'),
    ] }, {
    cuisine: 'ホテルの中のカフェの食事とスイーツ (2026年の口コミ)・パンケーキ、生地にクリームチーズが入った厚くてふわふわのもの、バターとメープルで。いちごのパンケーキ。一番人気はベーコン、卵、ソーセージの食事パンケーキ (2026年8月、スタッフ)。サーモンとソーセージのパンケーキも・2026年秋のさつまいもメニュー: さつまいもの天ぷらがのった Anno imo のブリュレパフェ、ミルフィーユ、さつまいものパンケーキ・パスタグラタン、たとえば秋鮭と3種のきのこ (2026年10月)、海老のビスク風トマトクリーム (2026年1月、1,780円ほど)・半熟卵のカレー、ガパオライス、チキンオーバーライス・ケーキ: 黒い森、アップルパイ、チーズケーキ、ショートケーキ、レアチーズケーキ・アイスウィンナーコーヒー、カフェラテ・持ち帰りの TABLES キャラメルサブレの缶、クッキー缶、冷凍の Horie butter sand (2026年9月)',
    neighborhood: '心斎橋筋2-5-15、クロスホテル大阪 1階の奥、道頓堀のすぐ北。なんば駅14番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。名物は生地にクリームチーズが入ったパンケーキで、パスタグラタン、ケーキ、パフェ、焼き菓子もある。カレー、ガパオライス、チキンオーバーライスはご飯ものだが、ソースの説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。パンケーキ、ケーキ、グラタンは乳製品と卵を使う。カレー、ガパオライス、飲み物については聞いてみて。',
    notes: '[カフェ・なんば、パンケーキのホテルのラウンジ] 道頓堀からすぐ、クロスホテル大阪の奥にある、広くて静かで少し暗めの、ソファのあるカフェ。外の通りが行列でも空いた席があることが多い。生地にクリームチーズが入った厚くてふわふわのパンケーキを、メープルの甘いものか、ベーコン、卵、ソーセージの食事系で。季節のパフェ (2026年秋はさつまいも) も。ランチはグラタン、カレー、ガパオライス。注文は QR コードで、13時にランチが売り切れることも。ひとり1,000〜3,000円ほど。2026年の口コミではスタッフが親切で、頼んだら前回と同じ席を用意してくれたという人も。',
  });
}

// ================================================================ 麺屋 百福
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27131103/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_menya_momofuku_kujo', name: '麺屋 百福 (Menya Momofuku)', category: 'OMNI',
    lat: 34.675811, lng: 135.477015, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Khao soi comes with two noodles, chewy flat noodles and a topping of crisp fried noodles, in a coconut curry; the cold Yunnan lemon chicken noodles are rice noodles and khao man gai is chicken rice, but no ingredients are stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every dish on the noodle days is built on chicken, beef tendon or shrimp (2026 reviews).',
    hours_raw: 'Open only in the third week of each month: lunch 12:00–14:30 (last order), dinner 18:00–21:00 (last order); hours may change (Tabelog). A May 2026 diner gives lunch on the third weekend, Friday to Sunday; staff post the days on social media (October 2026). Queues of seven or eight groups before the 12:00 opening (February and May 2026); popular dishes sell out late in the day. Self-service (October 2026). No reservations; no cards, but e-money and QR payments accepted; non-smoking (Tabelog). Counter and two-person tables (April 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kujo 1-3-12, inside Asian kitchen cafe 百福 — 315 m from Kujo Stn',
    cuisine: 'Thai noodle days of a Kujo Asian café (2026 reviews) · khao soi, northern-Thai coconut curry noodle soup with flat noodles and crisp fried noodles, red onion, pickled mustard greens and lime: with chicken (khao soi gai ¥1,200, August 2026) or beef tendon (khao soi nua ¥1,300, April 2026; large ¥1,500, May 2026), shrimp on some days (October 2026) · khao man gai, chicken rice cooked in chicken broth, ¥1,100, mini ¥480 · extra cilantro ¥100 · summer: cold rice noodles with Yunnan lemon chicken and a mini rice (July–September 2026)',
    website: null, gmaps: gm('麺屋 百福 九条'), menu_url: null,
    notes: '[Thai noodles · Kujo, one week a month] For one week a month, an Asian café in Kujo turns into a noodle shop serving khao soi, the coconut curry noodle soup of northern Thailand, with chewy flat noodles under a nest of crisp fried ones. Choose chicken or beef tendon (¥1,200–1,500 in 2026), add a squeeze of lime, the red onion and pickled greens, and a mini khao man gai of chicken rice on the side. In summer there are cold Yunnan lemon-chicken rice noodles. Diners queue before the 12:00 opening, so arrive early; it is self-service. Check its social media for the dates, which reviewers give as the third week of the month.',
    chef_bio: { chef_name: null, roles: ['Two women ran the shop on an April 2026 visit; names not given'], origin: null, background: 'Reviewers describe Menya Momofuku as the noodle days of Asian kitchen cafe 百福 at the same address, held in the third week of each month (2026 reviews); an October 2026 diner calls it a self-service version of a renowned Asian restaurant featured in a Tabelog 100 list (not checked). Two very friendly women were running it on an April 2026 visit.', philosophy: null, specialty: 'Khao soi with chicken or beef tendon; khao man gai.',
      anecdotes: [
        { text: '"The noodles offered two textures: the chewy fresh noodles and the crispy fried noodles, both enjoyable." — August 2026, beef tendon khao soi and a mini khao man gai.', source: R + 'B533750736/' },
        { text: '"I arrived a bit early for the 12 PM opening on Sunday, and there were already about seven groups in line." — February 2026.', source: R + 'B523030672/' },
        { text: '"Two very friendly women were running the place." — April 2026, khao soi nua with Tamba beef tendon, JPY 1,300.', source: R + 'B526248481/' },
      ],
      japanese_sources_summary: '食べログ: 麺屋 百福、タイ料理・ラーメン、大阪市西区九条1-3-12 Asian kitchen cafe 百福、九条駅から315m、毎月第3週のみ営業、昼12:00〜14:30 (L.O.)、夜18:00〜21:00 (L.O.)、予約不可、カード不可、電子マネー・QR可、禁煙。口コミ(2026年2月〜10月): khao soi (鶏か牛すじ、エビの日も)、平たい麺と揚げ麺、ココナッツミルクのカレー、ライム、khao man gaiとミニサイズ、パクチー追加、夏はYunnan のレモンチキンの冷たい米麺、開店前から7〜8組の行列、セルフサービス、女性2人で営業していた日も、営業日は SNS で。',
      confidence: 'medium', sources: [TB, R + 'B467047818/', R + 'B510432909/', R + 'B522934779/', R + 'B523030672/', R + 'B524681338/', R + 'B526248481/', R + 'B528332349/', R + 'B532186680/', R + 'B532664459/', R + 'B533750736/', R + 'B535119365/', R + 'B536528674/', R + 'B537605926/', R + 'B538180255/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A short, fixed menu of khao soi and khao man gai; self-service (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区九条1-3-12 Asian kitchen cafe 百福',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through October 2026, monthly opening.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区九条一丁目3番12号 (go) 2m. No other record in data within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B467047818/', R + 'B526248481/', R + 'B528332349/'],
    price_note: 'Prices from 2026 reviews (August, April, May); no menu published.', last_checked: TODAY, items: [
      it('', '', 'Khao soi gai (chicken)', '¥1,200', 'Noodles', 'ask', 'no', 'August 2026 review.', 'khao_soi_gai'),
      it('', '', 'Khao soi nua (beef tendon)', '¥1,300', 'Noodles', 'ask', 'no', 'April 2026 review; large ¥1,500 in May 2026.', 'khao_soi_nua'),
      it('', '', 'Khao man gai', '¥1,100', 'Rice', 'ask', 'no', 'August 2026 review; mini ¥480 (April 2026).', 'khao_man_gai'),
      it('', '', 'Cold rice noodles with Yunnan lemon chicken (summer)', '', 'Noodles', 'ask', 'no', 'July and September 2026 reviews.', 'yunnan_lemon_noodles'),
    ] }, {
    cuisine: '九条のアジアンカフェのタイの麺の日 (2026年の口コミ)・khao soi、北タイのココナッツカレーの麺で、平たい麺と揚げ麺、赤玉ねぎ、高菜の漬物、ライム: 鶏 (khao soi gai1,200円、2026年8月) か牛すじ (khao soi nua1,300円、2026年4月、大盛り1,500円、2026年5月)、エビの日も (2026年10月)・鶏のスープで炊いたご飯のkhao man gai1,100円、ミニ480円・パクチー追加100円・夏はYunnan のレモンチキンの冷たい米麺とミニライス (2026年7〜9月)',
    neighborhood: '九条1-3-12、Asian kitchen cafe 百福 の中。九条駅から315m',
    gf_detail: '要確認。グルテンの情報なし。khao soiはもちもちの平たい麺に揚げ麺をのせたココナッツカレー。Yunnan のレモンチキンの冷たい麺は米麺、khao man gaiは鶏のご飯だが、材料の説明はない。',
    vegan_detail: 'ヴィーガンではありません。麺の日の料理はどれも鶏、牛すじ、エビを使う (2026年の口コミ)。',
    notes: '[タイの麺・九条、月に一週間] 月に一週間だけ、九条のアジアンカフェが麺の店になり、北タイのココナッツカレーの麺、khao soiを出す。もちもちの平たい麺の上にパリパリの揚げ麺。鶏か牛すじを選び (2026年は1,200〜1,500円)、ライム、赤玉ねぎ、漬物を加えて、ミニのkhao man gaiを添えて。夏はYunnan のレモンチキンの冷たい米麺も。12時の開店前から行列ができるので早めに。セルフサービス。営業日は SNS で確認を。口コミでは毎月第3週。',
  });
}

// ================================================================ たこ梅 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27013511/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://takoume.jp/';
  const H = day(['16:00', '21:50']);
  put({
    id: 'osaka_tako_ume_honten_dotonbori', name: 'たこ梅 本店 (Tako Ume Honten)', category: 'OMNI',
    lat: 34.668814, lng: 135.505284, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The oden simmers in one shared broth with fish cakes, shumai and tempura-style items alongside daikon, egg and konnyaku, and the octopus is simmered sweet in the house broth; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every oden item is simmered in the house broth, which takes its depth from whale tongue (official site).',
    hours_raw: 'Daily 16:00–21:50, last order 21:30 — shortened since 20 February 2024 for lack of staff; closed 31 December–3 January (Tabelog). Reservations by phone only, after 15:00; fan-club members book a month ahead, LINE members and others a week ahead; a booking for someone else is treated as a walk-in (Tabelog). Seat charge: an appetiser ¥275 a person (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 21 seats: a counter of 12 around the oden pot and tables for 9; non-smoking; English menu; children welcome, with care on the tall counter stools (Tabelog). Founded 1844 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-1-8, on the river near Sakaisuji, by Wins Dotonbori — exits B28/B30 of Nippombashi Stn',
    cuisine: 'Kanto-daki (oden) and tako kanroni, sweet simmered octopus, the house specialities since 1844, with sake warmed in tin and served in tin cups (official site) · prices in August 2026, tax included: tako kanroni ¥495 · whale saezuri (tongue) ¥990, whale suji ¥605 · octopus tempura from a kamaboko maker ¥330 · daikon ¥330, shumai ¥220, egg ¥220 · also potato, thick fried tofu, konnyaku, mochi kinchaku, rolled cabbage, wakame, mugwort fu, mozzarella, grilled eggplant, shiro-na and negima skewers dipped to order (2026 reviews) · seasonal: November 2026 whale harihari pouch ¥550 before tax; shiitake, ginkgo and shiho-chiku bamboo in autumn (official site) · a monthly sake, highballs, ponzu chuhai',
    website: SITE, gmaps: gm('たこ梅 本店 道頓堀'), menu_url: SITE,
    notes: '[Oden · Dotonbori, since 1844] Calling itself the oldest oden shop in Japan, Tako Ume has simmered kanto-daki on Dotonbori since 1844, a counter of twelve around the oden pot and a window at the back onto the river. The broth takes its depth from saezuri, whale tongue, which the founder first used; order it, with the tako kanroni of sweet simmered octopus eaten with mustard, then daikon, potato, egg and the seasonal items, and a cup of sake warmed in tin. Writers from 織田作之助 to 開高健 ate here (official site). Budget ¥3,000–8,000 in 2026, plus a ¥275 appetiser; book by phone after 15:00. Open 16:00–21:50 daily.',
    chef_bio: { chef_name: '岡田哲生', roles: ['Fifth-generation owner (official site)', 'Founder: 岡田梅次郎 (official site)'], origin: null, background: 'Per the official site: an oden and sake house ("上燗屋") open since 1844 on Dotonbori, now in its fifth generation, from the founder 岡田梅次郎 to 岡田哲生, and called the oldest oden shop in Japan. The founder first used saezuri, whale tongue, which gives its kanto-daki a deep flavour; baleen-whale tongue is still bought and prepared in house, and the tako kanroni of madako has been simmered in the traditional broth since the start. Sake is warmed in tin tanpo in hot water and served in tin cups. Writers including 織田作之助, 池波正太郎, 檀一雄, 田辺聖子 and 吉田健一 were customers, and 開高健, a customer from the grandfather\'s day, wrote ten pages on Tako Ume in a novel. The current owner recalls an uncle, the previous owner, saying the shop lasted a hundred years because parents bring their children, who later bring theirs; that memory, on a hard winter night after the Lehman shock, set the aim of keeping the shop for the next hundred years.', philosophy: '"Keep a place where parents bring their children, for the next hundred years" (official site, translated).', specialty: 'Saezuri (whale tongue) oden; tako kanroni.',
      anecdotes: [
        { text: '"The interior hasn\'t changed much at all; it still has the atmosphere of the Taisho era, not just Showa. The copper sake warming stand is the same as well." — June 2026, a first visit in 15 years.', source: R + 'B529550608/' },
        { text: '"When I opened the window at the back, I could see the Dotonbori River flowing by" — June 2026.', source: R + 'B530427439/' },
        { text: '"They were about to flip the sign to closed, but they let us in with the promise that our first order would be our last order." — August 2026, tako kanroni and whale saezuri, JPY 6,105 for two.', source: R + 'B533520407/' },
      ],
      japanese_sources_summary: '公式サイト: 日本一古いおでん屋「たこ梅」、関東煮 (おでん) とたこ甘露煮が名物、弘化元年 (1844年) 創業の上燗屋、初代岡田梅次郎から五代目の岡田哲生、梅次郎が初めて使った鯨の舌「さえずり®」、ヒゲ鯨の舌を独自に仕込む、真蛸を伝統の出汁でたく「たこ甘露煮」、錫のタンポで燗をつけ錫のコップで、織田作之助、池波正太郎、檀一雄、田辺聖子、吉田健一らが愛し、開高健は「新しい天体」で10ページ、先代の叔父の「親が子を連れて来る店やから百年続いとる」という話、リーマンショックの冬の夜に思い出したこと、これからの百年も。お知らせ (2026年10〜11月): 11月限定の「鯨はりはり」550円 (税抜)、四方竹、さらし鯨、銀杏、椎茸、月替わりの酒。食べログ (店舗会員): 大阪市中央区道頓堀1-1-8、毎日16:00〜21:50 (L.O. 21:30)、2024年2月20日から人手不足のため時間短縮、12月31日〜1月3日休み、予約は15時以降に電話のみ、お通し275円、カード可、21席 (カウンター12、テーブル9)、禁煙、英語メニュー。口コミ(2026年6月〜10月): たこ甘露煮495円、鯨さえずり990円、鯨すじ605円、大根330円、シュウマイ220円、玉子220円、ロールキャベツ、じゃがいも、厚揚げ、mochi kinchaku、yomogi fu、モッツァレラ、銅の燗付け器、裏の窓から道頓堀川。',
      confidence: 'high', sources: [TB, SITE, SITE + 'aboutus', R + 'B500016470/', R + 'B529550608/', R + 'B529829128/', R + 'B530043368/', R + 'B530427439/', R + 'B532713696/', R + 'B532858236/', R + 'B533132924/', R + 'B533404870/', R + 'B533520407/', R + 'B535573494/', R + 'B535713016/', R + 'B536329582/', R + 'B537628978/', R + 'B537921463/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); pick oden item by item at the counter (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-1-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site (news dated 1 November 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目1番8号 (go) 2m. 旬肴 料理人 裕 (osaka_shunko_ryoribito_yuu_dotonbori, address_ja "道頓堀1-1-9 豊栄ビル B1F") is next door at the next house number, 7 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533520407/', SITE],
    price_note: 'Prices from an August 2026 review (tax included) and the official site (whale harihari, before tax, November 2026).', last_checked: TODAY, items: [
      it('たこ甘露煮', '', 'Tako kanroni (sweet simmered octopus)', '¥495', 'Signature', 'ask', 'no', 'August 2026 review.', 'tako_kanroni'),
      it('さえずり', '', 'Whale tongue (saezuri) oden', '¥990', 'Oden', 'ask', 'no', 'August 2026 review.', 'saezuri'),
      it('', '', 'Whale suji oden', '¥605', 'Oden', 'ask', 'no', 'August 2026 review.', 'whale_suji'),
      it('', '', 'Daikon oden', '¥330', 'Oden', 'ask', 'no', 'August 2026 review; in the shared broth.', 'daikon'),
      it('', '', 'Egg oden', '¥220', 'Oden', 'ask', 'no', 'August 2026 review.', 'egg'),
      it('鯨はりはり', '', 'Whale harihari pouch (November only)', '¥550 + tax', 'Oden', 'ask', 'no', 'Official site, November 2026.', 'kujira_harihari'),
    ] }, {
    cuisine: '1844年からの名物、関東煮 (おでん) とたこ甘露煮、酒は錫で燗をつけて錫のコップで (公式サイト)・2026年8月の値段、税込: たこ甘露煮495円・鯨さえずり990円、鯨すじ605円・蒲鉾屋のたこ天330円・大根330円、シュウマイ220円、玉子220円・ほかにじゃがいも、厚揚げ、こんにゃく、mochi kinchaku、ロールキャベツ、わかめ、yomogi fu、モッツァレラ、焼きなす、注文を受けてから出汁につける shiro-na と negima の串 (2026年の口コミ)・季節もの: 2026年11月は鯨はりはり550円 (税抜)、秋は椎茸、銀杏、四方竹 (公式サイト)・月替わりの酒、ハイボール、ポン酢チューハイ',
    neighborhood: '道頓堀1-1-8、堺筋近くの川沿い、Wins Dotonbori のそば。日本橋駅 B28・B30 出口から',
    gf_detail: '要確認。グルテンの情報なし。おでんはひとつの出汁で、大根、玉子、こんにゃくと一緒に練り物、シュウマイ、天ぷらの類も煮る。たこは店の出汁で甘く煮る。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。おでんはどれも店の出汁で煮て、その深い味は鯨の舌から (公式サイト)。',
    notes: '[おでん・道頓堀、1844年から] 日本一古いおでん屋を名乗るたこ梅は、1844年から道頓堀で関東煮をたいてきた。おでん鍋を囲むカウンター12席と、奥の窓の向こうに道頓堀川。出汁の深い味は、初代が初めて使った鯨の舌「さえずり」から。それを頼み、からしで食べるたこ甘露煮、大根、じゃがいも、玉子と季節のもの、それに錫で燗をつけた酒を一杯。織田作之助から開高健まで、作家たちも通った (公式サイト)。2026年はひとり3,000〜8,000円ほどに、お通し275円。予約は15時以降に電話で。毎日16時から21時50分まで。',
  });
}

save();
