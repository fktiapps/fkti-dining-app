// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 23.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, lane ids in order):
//   - 京都イタリアン 欧食屋 Kappa (26027685): already in data as kyo_oshokuya_kappa — not redrafted.
//   + 魚師匠 BURISHO (ice-aged yellowtail specialist off Matsubara-dori; since 2022)
//   + Téori (all-day buffet restaurant of Hilton Kyoto; since 2024)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + つくもうどん 塩小路本店 Tsukumo Udon (iriko-dashi udon inside JR Kyoto Station; since 2018)
//   + ryuen (Italian and wine near Karasuma-Oike, over 20 years)
//   None of the four drafted is in data/kyoto.json: grep by id, name (魚師匠/BURISHO, Téori, つくもうどん/Tsukumo, ryuen — 龍園 is a
//   gyoza shop and 柳燕 a Tokyo restaurant) and address (杉屋町283, 下丸屋町416, 東塩小路町901 B2F, 衣棚町39) found none.
//   Same-name counts (same brand or operator): 魚師匠, ryuen — one listing each; つくもうどん — 2 (塩小路本店 and 天神橋店, Osaka);
//   Téori — the hotel’s own restaurant; Hilton Kyoto’s Osteria Italiana Seven Embers is already a separate record and there is no
//   hotel-wide record, so drafted like SCALAE and KIZAHASHI.
//   Service charges checked against Tabelog’s Japanese original: 魚師匠 — the English page says a service charge is added, but the
//   original reads 「なし」; Téori 「表示料金には税金・サービス料が含まれております」 (prices include tax and service); つくもうどん 「なし」;
//   ryuen none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 魚師匠 BURISHO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037225/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.burisho.com/'; const MENU = SITE + 'burisho/menu/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=8130001070410';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_burisho', name: '魚師匠 (BURISHO)', category: 'OMNI',
    lat: 34.998909, lng: 135.763504, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yellowtail sashimi with soy or ponzu, tempura, Western and Chinese-style buri dishes, rolled cabbage and a Chaliapin steak; no gluten information is published (official menu; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yellowtail specialist with A5 wagyu on the courses (official menu).',
    hours_raw: 'Lunch 11:30–14:00 (last order 13:30) and dinner 17:00–23:00 (last order 22:30 per the official site; Tabelog gives food 22:00, drinks 22:30); closed Tuesday (official site; Tabelog). Bookings taken; stays may be limited to 2.5 hours when busy (Tabelog); the premium lunch sets need booking (August 2026). Tabelog’s English page says a service charge is added, but its Japanese original reads 「なし」. 20 seats: a 14-seat counter and one private room (official site; Tabelog). Cards, transit IC and QR including Alipay and WeChat Pay (official site). On the 2nd floor of 松原クラタビル on Matsubara-dori east of Sakaimachi; about 10 min from Shijo, Gojo, Kyoto-Kawaramachi or Kiyomizu-Gojo Stn (official site). Opened 1 March 2022 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Matsubara-dori east of Sakaimachi — 10 min from Shijo or Gojo Stn',
    cuisine: 'Yellowtail specialist using the Kagoshima brand buri 鰤王, ice-aged (氷熟ぶり), cooked whole in many ways (official site) · dinner courses: 比叡 with Kyoto vegetables ¥6,500; 大原 with A5 Kuroge wagyu ¥9,000; 嵯峨 full course ¥12,000 — e.g. buri small plates, a tasting of ice-aged buri sashimi, buri collar soup, Western and Chinese-style buri plates, buri chikuzen-ni, seared buri tasting, A5 wagyu Chaliapin steak, wagyu nigiri and buri otoro sushi, a "mysterious tomato" (official menu) · lunch: daily set ¥1,000 (e.g. buri hamburg, June 2026), buri lunch ¥2,000, buri steak set, BURISHO gozen with five cuts, a premium gozen with grilled belly, collar and tail (2026 reviews)',
    website: SITE, gmaps: gm('魚師匠 BURISHO 松原'), menu_url: MENU,
    notes: "[Seafood · Matsubara, a whole menu of ice-aged yellowtail] A second-floor counter off Matsubara-dori devoted to one fish: Kagoshima's branded 鰤王 yellowtail, ice-aged to deepen its flavour and used nose to tail — sashimi tastings of different cuts, seared buri, buri in Western and Chinese styles, buri otoro sushi. Lunch sets run from ¥1,000 to multi-cut gozen; dinner courses from ¥6,500, the top ones adding A5 wagyu. Some diners find the cuts small for the price; most love the freshness. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Not named; operator 株式会社匠カンパニー (the invoice holder and site copyright)'], origin: null,
      background: 'Per the official site: yellowtail that overturns expectations — Kagoshima’s brand buri 鰤王, ice-aged (氷熟) like meat to increase umami, used whole in many dishes; a 14-seat counter and one private room. The invoice number belongs to 株式会社匠カンパニー, which also holds the site copyright (2022). Opened 1 March 2022 (Tabelog).',
      philosophy: 'Per the official site: "鰤の常識を覆す" — to overturn what people expect of yellowtail.',
      specialty: 'Ice-aged yellowtail sashimi tasting; buri otoro sushi.',
      anecdotes: [
        { text: 'A May 2026 lunch guest found many side dishes pre-made and still partly frozen, with the buri soboro overpowered by sesame.', source: R + 'B529120251/' },
        { text: 'A June 2026 diner was walked through each cut of yellowtail, including one topped with shaved karasumi.', source: R + 'B530068127/' },
        { text: 'An August 2026 diner liked the cuts but wished the slices were thicker, even at extra cost.', source: R + 'B534486629/' },
      ],
      japanese_sources_summary: '公式サイト (burisho.com): 五条 ブリ料理専門店 魚師匠 -BURISHO-、鰤の常識を覆す、鹿児島のブランドぶり「鰤王」、丸ごと一尾、氷温熟成の「氷熟ぶり」、カウンター14席、個室1室、下京区松原通堺町東入ル杉屋町283 松原クラタビル2F、ランチ11:30〜14:00 (L.O. 13:30)、ディナー17:00〜23:00 (L.O. 22:30)、毎週火曜定休、カード・電子マネー・QR 可、コース: 嵯峨12,000円、大原9,000円、比叡6,500円 (氷熟鰤のお造り食べ比べ、ブリカマのおすまし、鰤の洋食・中華、鰤の筑前煮、A5黒毛和牛のシャリアピン風ステーキ、肉寿司、氷熟鰤大トロのお寿司、不思議なトマト)、copyright 2022 匠カンパニー。食べログ: 魚介料理・しゃぶしゃぶ・居酒屋、サービス料なし、20席、混雑時2時間半制、2022年3月1日オープン、インボイス T8130001070410 (株式会社匠カンパニー)。口コミ (2026年5〜8月、英語): 日替わり定食1,000円、鰤ランチ2,000円、鰤ステーキ定食、BURISHO 御膳、冷凍のままの小鉢という声、切り身が小さいという声。',
      confidence: 'medium', sources: [TB, SITE, MENU, CORP, R + 'B514027347/', R + 'B527288452/', R + 'B527626635/', R + 'B528395733/', R + 'B529120251/', R + 'B529258382/', R + 'B530068127/', R + 'B530210170/', R + 'B530403112/', R + 'B533782234/', R + 'B534486629/', R + 'B536061571/'] },
    cultural_comfort: { level: 'english', note: 'English site; book the premium lunch sets ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区松原通堺町東入ル杉屋町283 松原クラタビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news September 2026) and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.998909, 135.763504); cross-checked: GSI 京都府京都市下京区杉屋町283番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B514027347/', R + 'B527626635/'],
    price_note: 'Official course menu (undated); lunch prices from May–June 2026 reviews.', last_checked: TODAY, items: [
      it('比叡', '', 'Ice-aged buri and Kyoto vegetable course', '¥6,500', 'Course', 'ask', 'no', '', 'hiei'),
      it('大原', '', 'Ice-aged buri and A5 Kuroge wagyu course', '¥9,000', 'Course', 'ask', 'no', '', 'ohara'),
      it('嵯峨', '', 'Ice-aged buri full course', '¥12,000', 'Course', 'ask', 'no', '', 'saga'),
      it('', '', 'Daily lunch set', '¥1,000', 'Lunch', 'ask', 'no', 'June 2026.', 'daily_lunch'),
    ] }, {
    cuisine: '鹿児島のブランドぶり「鰤王」を氷温熟成した氷熟ぶりを、丸ごといろいろな料理で出す鰤の専門店 (公式サイト)・夜のコース: 京野菜との比叡6,500円、A5黒毛和牛との大原9,000円、フルコースの嵯峨12,000円。例: 鰤の小鉢、氷熟鰤のお造り食べ比べ、ブリカマのおすまし、鰤の洋食と中華、鰤の筑前煮、鰤の炙り食べ比べ、A5黒毛和牛のシャリアピン風ステーキ、肉寿司と鰤大トロのお寿司、不思議なトマト (公式メニュー)・昼: 日替わり定食1,000円 (2026年6月は鰤のハンバーグ)、鰤ランチ2,000円、鰤ステーキ定食、5種の部位の BURISHO 御膳、腹身・カマ・尾の焼き物の上の御膳 (2026年の口コミ)',
    neighborhood: '堺町の東の松原通。四条駅・五条駅から徒歩10分',
    gf_detail: '要確認。醤油やポン酢の鰤のお造り、天ぷら、洋食や中華の鰤料理、ロールキャベツ、シャリアピンステーキ。グルテンの情報は公開されていない (公式メニュー、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰤の専門店で、コースには A5和牛も (公式メニュー)。',
    notes: '[魚介・松原、氷熟ぶりづくし] 松原通から入るビル2階のカウンター。一つの魚に専念する店で、鹿児島のブランドぶり「鰤王」を氷温熟成させて旨みを深め、頭から尾まで使う: 部位ごとのお造りの食べ比べ、炙り、洋食や中華の鰤料理、鰤大トロのお寿司。昼は1,000円の定食から何種類もの部位の御膳まで、夜のコースは6,500円から、上のコースには A5和牛も。値段のわりに切り身が小さいという声もあるが、鮮度は好評。火曜休み。',
  });
}

// ================================================================ Téori (Hilton Kyoto)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041785/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto.hiltonjapan.co.jp/restaurants/teori';
  const WD = day(['07:00', '10:00'], ['11:30', '22:00']); const WE = day(['07:00', '10:30'], ['11:30', '22:00']);
  put({
    id: 'kyoto_teori_hilton', name: 'Téori (Hilton Kyoto)', category: 'OMNI',
    lat: 35.01004, lng: 135.769461, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A buffet of Japanese, Western and Chinese dishes, curries, breads and desserts; no gluten labelling is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The buffet has many dishes, but meat, seafood and dairy dominate; no vegan labelling is published (2026 reviews).',
    hours_raw: 'Breakfast 7:00–10:00 (to 10:30 at weekends and holidays); lunch buffet 11:30–14:30 (last order 14:00); dinner 17:30–21:30 (last order 21:00); à la carte 11:30–22:00 (last order 21:00); sweets buffets in the afternoon (Tabelog; 2026 reviews). Prices include tax and service (Tabelog’s Japanese original: 「表示料金には税金・サービス料が含まれております」). 120 seats, two private rooms free of charge; non-smoking, with a smoking area in the hotel; cards (Tabelog). Hilton members get 10% off (August 2026). On the 1st floor of Hilton Kyoto, with a bonfire visible outside; about 2 min from Kyoto-Shiyakusho-mae Stn (Tabelog; August 2026). Opened 12 September 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hilton Kyoto, Kawaramachi-Sanjo — 2 min from Kyoto-Shiyakusho-mae Stn',
    cuisine: 'All-day buffet restaurant of Hilton Kyoto with Japanese, Western and Chinese dishes (2026 reviews) · lunch buffet weekdays ¥5,800, weekends ¥6,200 (July 2026): herb-roasted beef carved to order, pinchos and tapas on homemade baguette, seafood fried rice, mango chicken curry, yellow curry · seasonal sweets buffets, e.g. summer fruit (mango, melon, peach) and autumn chocolate, ¥5,800 (September 2026) · dinner buffet; breakfast; à la carte (Tabelog)',
    website: SITE, gmaps: gm('Téori ヒルトン京都'), menu_url: SITE,
    notes: "[Buffet · Kawaramachi-Sanjo, Hilton Kyoto's all-day restaurant] The big, bright buffet restaurant on the ground floor of Hilton Kyoto, opened in 2024, with a fire burning outside. Lunch (about ¥5,800–6,200) brings carved herb-roast beef, tapas on house baguette, fried rice and well-liked curries; seasonal sweets buffets of mango, melon or chocolate pack the afternoons. Prices include service; Hilton members get 10% off. Busy with overseas visitors; private rooms free for groups.",
    chef_bio: { chef_name: null, roles: ['Hotel restaurant of Hilton Kyoto; chef not named'], origin: null,
      background: 'The all-day dining restaurant of Hilton Kyoto, opened 12 September 2024 (Tabelog). The hotel’s Osteria Italiana Seven Embers is a separate record.',
      philosophy: null,
      specialty: 'Lunch and sweets buffets.',
      anecdotes: [
        { text: 'A June 2026 sweets-buffet guest who arrived 20 minutes early was invited to wait in the hotel lobby.', source: R + 'B530441378/' },
        { text: 'An August 2026 diner found the cakes are not pre-sliced, so guests slice the cakes, and rated the yellow curry the best dish.', source: R + 'B533575406/' },
      ],
      japanese_sources_summary: '食べログ: Téori、ダイニングバー・ビュッフェ、中京区下丸屋町416 ヒルトン京都、京都市役所前駅から徒歩約2分、朝食7:00〜10:00 (土日祝〜10:30)、ランチ11:30〜14:30 (L.O. 14:00)、ディナー17:30〜21:30 (L.O. 21:00)、アラカルト11:30〜22:00 (L.O. 21:00)、表示料金には税金・サービス料が含まれる、120席、個室2室 (無料)、禁煙 (ホテル内に喫煙所)、カード可、2024年9月12日オープン。口コミ (2026年6〜10月、英語): ランチビュッフェ平日5,800円・週末6,200円、ローストビーフ、ピンチョス、マンゴーチキンカレー、スイーツビュッフェ5,800円、ヒルトン会員10%割引、外の焚き火。',
      confidence: 'medium', sources: [TB, SITE, R + 'B530441378/', R + 'B531851241/', R + 'B532273844/', R + 'B533575406/', R + 'B533579977/', R + 'B534278355/', R + 'B534290555/', R + 'B534402659/', R + 'B535649451/', R + 'B535975279/', R + 'B537126698/', R + 'B537488276/'] },
    cultural_comfort: { level: 'english', note: 'International hotel; service included in prices.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下丸屋町416 ヒルトン京都',
    existence: { status: 'confirmed', checked: TODAY, note: 'Hotel website and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.01004, 135.769461); cross-checked: GSI 京都府京都市中京区下丸屋町416番地 (lot) 6m; 28m from the same hotel’s Seven Embers pin; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531851241/', R + 'B535649451/'],
    price_note: 'Prices from July and September 2026 reviews (tax and service included).', last_checked: TODAY, items: [
      it('', '', 'Lunch buffet (weekdays)', '¥5,800', 'Buffet', 'ask', 'ask', 'Weekends ¥6,200.', 'lunch_buffet'),
      it('', '', 'Sweets buffet', '¥5,800', 'Buffet', 'ask', 'no', 'September 2026.', 'sweets_buffet'),
    ] }, {
    cuisine: '和洋中の料理がそろうヒルトン京都のオールデイのビュッフェレストラン (2026年の口コミ)・ランチビュッフェ平日5,800円、週末6,200円 (2026年7月): その場で切り分けるハーブのローストビーフ、自家製バゲットのピンチョスとタパス、シーフードの炒飯、マンゴーチキンカレー、イエローカレー・季節のスイーツビュッフェ、夏のマンゴー・メロン・桃や秋のチョコレートで5,800円 (2026年9月)・ディナービュッフェ、朝食、アラカルト (食べログ)',
    neighborhood: 'ヒルトン京都、河原町三条。京都市役所前駅から徒歩2分',
    gf_detail: '要確認。和洋中の料理、カレー、パン、デザートのビュッフェ。グルテンの表示は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。料理は多いが、肉、魚介、乳製品が中心で、ヴィーガンの表示は公開されていない (2026年の口コミ)。',
    notes: '[ビュッフェ・河原町三条、ヒルトン京都のオールデイダイニング] ヒルトン京都の1階、2024年開業の明るく大きなビュッフェレストラン。外では焚き火が燃える。昼 (5,800〜6,200円ほど) は切り分けるハーブのローストビーフ、自家製バゲットのタパス、炒飯、評判のカレー。午後はマンゴーやメロン、チョコレートの季節のスイーツビュッフェでにぎわう。料金はサービス料込み、ヒルトン会員は10%引き。海外からの客が多く、グループには無料の個室も。',
  });
}

// ================================================================ つくもうどん 塩小路本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26031063/'; const R = TB + 'dtlrvwlst/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=2120901000811';
  const H = day(['07:00', '22:00']);
  put({
    id: 'kyoto_tsukumo_udon_shiokoji', name: 'つくもうどん 塩小路本店 (Tsukumo Udon)', category: 'OMNI',
    lat: 34.985902, lng: 135.760229, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat-udon shop with free tenkasu and tempura (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is iriko (dried sardine) dashi, and the free topping is fried iriko (Tabelog; 2026 reviews).',
    hours_raw: '7:00–22:00 daily (last order 21:30); open year-round (Tabelog). No bookings; buy a ticket from the machine, order, then find a seat; queues of 7–10 minutes at peak lunch (2026 reviews). No charge (Tabelog’s Japanese original: なし). 35 seats: 21 at counters (some standing) and 14 at tables; non-smoking; English menu; children and strollers welcome; cards, transit IC and QR (Tabelog; October–November 2026). Inside JR Kyoto Station on basement level 2, by the east exit, in front of the JR gates (Tabelog; November 2026). Opened 27 July 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inside JR Kyoto Station, B2 east exit',
    cuisine: 'Station udon of homemade noodles in iriko dashi from anchovies caught around Kujukushima, Nagasaki (Tabelog) · kake udon ¥400 (October 2026; ¥380 in November 2025) · chicken-and-egg curry udon ¥900, the most popular · chicken and egg (kashiwa-tama) udon, kitsune, kamaage, keiran, toriten bukkake ¥720 · chicken tempura, chikuwa tempura, small rice, chicken rice set · free tenkasu and fried iriko at the counter (2026 reviews)',
    website: null, gmaps: gm('つくもうどん 塩小路本店 京都駅'), menu_url: TB,
    notes: "[Udon · Kyoto Station, iriko udon from 7 a.m.] A busy udon counter on the second basement level of JR Kyoto Station, by the east exit, open from 7:00 — handy before a Shinkansen. Homemade noodles come in a clear iriko broth made from Kujukushima anchovies; the hit is the creamy chicken-and-egg curry udon (about ¥900), and kake udon is about ¥400. Help yourself to free tenkasu and crunchy fried iriko. Buy a ticket, order, then grab a seat. Open daily.",
    chef_bio: { chef_name: null, roles: ['Operator 株式会社神戸ゴマルゴ (the invoice holder); a sister shop is in Tenjinbashi, Osaka'], origin: null,
      background: 'Per Tabelog’s official introduction: homemade noodles with an iriko dashi of anchovies caught around Kujukushima, Nagasaki. Opened 27 July 2018 (Tabelog). The invoice number belongs to 株式会社神戸ゴマルゴ (NTA corporate-number site); つくもうどん 天神橋店 in Osaka is the only other branch in the Tabelog crawl.',
      philosophy: null,
      specialty: 'Chicken-and-egg curry udon; kake udon with free fried iriko.',
      anecdotes: [
        { text: 'An October 2026 regular on an 11th visit always orders the kake udon and noted it rose from ¥360 to ¥400.', source: R + 'B483014008/' },
        { text: 'An October 2026 diner warns the spicy sauce of the curry udon sits at the bottom, so mix well.', source: R + 'B526205178/' },
        { text: 'A late-evening October 2026 diner found the chicken tempura smaller than expected and the total over ¥1,000 high for a standing udon shop.', source: R + 'B538479237/' },
      ],
      japanese_sources_summary: '食べログ: つくもうどん 塩小路本店、うどん・居酒屋、下京区烏丸通塩小路下ル東塩小路町901 JR京都駅構内地下2F東口、7:00〜22:00 (L.O. 21:30)、無休、予約不可、チャージなし、35席 (カウンター21、テーブル14)、禁煙、英語メニュー、子ども・ベビーカー可、カード・交通系IC・QR 可、2018年7月27日オープン、インボイス T2120901000811 (株式会社神戸ゴマルゴ)、店の紹介 (英語表示): Nagasaki の Kujukushima のいりこのだし、自家製麺。口コミ (2025年11月〜2026年11月、英語): かけうどん400円 (以前は380円)、鶏卵カレーうどん900円、鶏天ぶっかけ720円、天かすと揚げいりこは取り放題、食券制。',
      confidence: 'medium', sources: [TB, CORP, R + 'B455225035/', R + 'B483014008/', R + 'B522316413/', R + 'B526205178/', R + 'B537469312/', R + 'B538100388/', R + 'B538191272/', R + 'B538254712/', R + 'B538479237/', R + 'B538525271/', R + 'B538537798/', R + 'B538542429/'] },
    cultural_comfort: { level: 'english', note: 'English menu; ticket machine; standing and seated counters.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区烏丸通塩小路下ル東塩小路町901 JR京都駅構内地下2F東口',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.985902, 135.760229); GSI matched 京都府京都市下京区東塩小路町901番地 (lot) 189m away — the station’s single large lot, so loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B483014008/', R + 'B526205178/', R + 'B538100388/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('かけうどん', 'kake udon', 'Kake udon', '¥400', 'Udon', 'no', 'no', 'October 2026.', 'kake'),
      it('', '', 'Chicken-and-egg curry udon', '¥900', 'Udon', 'no', 'no', 'October 2026.', 'curry_udon'),
      it('', '', 'Toriten bukkake udon', '¥720', 'Udon', 'no', 'no', 'October 2026.', 'toriten_bukkake'),
    ] }, {
    cuisine: 'Nagasaki の Kujukushima のいりこのだしと自家製麺の駅のうどん (食べログ)・かけうどん400円 (2026年10月。2025年11月は380円)・いちばん人気の鶏卵カレーうどん900円・かしわ玉子とじうどん、きつね、釜揚げ、けいらん、鶏天ぶっかけ720円・鶏天、ちくわ天、小ライス、かしわご飯のセット・カウンターに天かすと揚げいりこが取り放題 (2026年の口コミ)',
    neighborhood: 'JR京都駅構内、地下2階の東口',
    gf_detail: 'グルテンフリーではない。小麦のうどんの店で、天かすや天ぷらもある (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしはいりこで、取り放題のトッピングも揚げいりこ (食べログ、2026年の口コミ)。',
    notes: '[うどん・京都駅、朝7時からのいりこのうどん] JR京都駅の地下2階、東口にあるにぎやかなうどんのカウンター。朝7時から開き、新幹線の前に便利。自家製麺に Kujukushima のいりこの澄んだだし。人気はクリーミーな鶏卵カレーうどん (900円ほど)、かけうどんは400円ほど。天かすとカリカリの揚げいりこは取り放題。食券を買って注文してから席へ。毎日営業。',
  });
}

// ================================================================ ryuen
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26005215/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_ryuen_italian', name: 'ryuen', category: 'OMNI',
    lat: 35.008529, lng: 135.756806, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, risotto, bread and meat dishes; carpaccio, tartare and prosciutto may suit, but no gluten information is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Kyoto and farm vegetables feature, but most dishes use cheese, cured meat, fish or meat; no vegan dish is named (2026 reviews).',
    hours_raw: '18:00–22:00 (last order 21:00); closed Thursday plus a few irregular days a month (Tabelog). Bookings taken, also through Tabelog; times may be adjusted when busy (Tabelog; August 2026). 21 seats: a counter of 5 and 16 at tables; fully non-smoking; cards; private hire by phone (Tabelog). Portions are large — staff warn solo diners (May 2026). A Japanese-style building on Sanjo-dori west of Muromachi; 5 min from Karasuma-Oike Stn (Tabelog; July 2026). Over 20 years in business (October 2026).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori west of Muromachi — 5 min from Karasuma-Oike Stn',
    cuisine: 'Italian à la carte from a handwritten menu, with Kyoto and farm vegetables and a strong wine list (Tabelog; 2026 reviews) · salmon and nagaimo tartare, sea bream, horse-meat carpaccio, prosciutto sliced in house, burrata with figs, fruit-tomato and fish pairings · Parmigiano cheese risotto mixed in a wheel at the table, shirasu pasta, fresh gorgonzola pasta, cabbage and seafood aglio e olio · duck, pork and other meat mains · panna cotta (2026 reviews)',
    website: null, gmaps: gm('ryuen 三条室町 イタリアン'), menu_url: TB,
    notes: "[Italian · Sanjo-Muromachi, generous plates and good wine] A long-running Italian behind a Japanese-style front on Sanjo-dori, with a handwritten menu built on Kyoto and farm vegetables and an excellent wine list. Regulars return for the salmon and nagaimo tartare, the cheese risotto finished in a Parmigiano wheel and house-sliced prosciutto; portions are large, so share. About ¥8,000–15,000 a head. Dinner only; closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Not named in any source found'], origin: null,
      background: 'An October 2026 reviewer notes over 20 years of history. Tabelog’s introduction highlights meat with Kyoto vegetables, fish with fruit tomatoes, generous starters and an excellent wine selection.',
      philosophy: null,
      specialty: 'Salmon and nagaimo tartare; Parmigiano-wheel risotto.',
      anecdotes: [
        { text: 'A May 2026 solo diner was warned that portions are large, ordered too much anyway, and still found it good value.', source: R + 'B528112298/' },
        { text: 'An April 2026 regular wished the menu changed a little more between visits.', source: R + 'B446499113/' },
      ],
      japanese_sources_summary: '食べログ: ryuen、イタリアン・ダイニングバー・ワインバー、中京区三条通室町西入ル衣棚町39、烏丸御池駅から徒歩5分、18:00〜22:00 (L.O. 21:00)、木曜と月数日の不定休、予約可、21席 (カウンター5、テーブル16)、全面禁煙、カード可、貸切は電話で、店の紹介 (英語表示): 京野菜と肉、フルーツトマトと魚、前菜の量が多い、ワインが豊富。口コミ (2026年3〜10月、英語): サーモンと長芋のタルタル、パルミジャーノのチーズリゾット、生ハム、馬肉のカルパッチョ、ブッラータ、手書きのメニュー、20年以上の歴史、量が多い。',
      confidence: 'medium', sources: [TB, R + 'B446499113/', R + 'B524351285/', R + 'B524754249/', R + 'B527181219/', R + 'B527744476/', R + 'B528112298/', R + 'B531906617/', R + 'B532487326/', R + 'B534454905/', R + 'B534530215/', R + 'B535572648/', R + 'B537420255/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Dinner only; large portions; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区三条通室町西入ル衣棚町39',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008529, 135.756806); GSI matched only the town 京都府京都市中京区衣棚町 (town) 56m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices published; Tabelog budget ¥8,000–9,999.', last_checked: TODAY, items: [
      it('', '', 'Salmon and nagaimo tartare', '', 'Antipasti', 'ask', 'no', '', 'salmon_tartare'),
      it('', '', 'Parmigiano cheese risotto', '', 'Primi', 'ask', 'no', 'Finished in a cheese wheel.', 'cheese_risotto'),
    ] }, {
    cuisine: '京野菜や農家の野菜と充実したワインの、手書きのメニューのアラカルトのイタリアン (食べログ、2026年の口コミ)・サーモンと長芋のタルタル、鯛、馬肉のカルパッチョ、店で切る生ハム、無花果のブッラータ、フルーツトマトと魚・目の前でパルミジャーノのホイールで仕上げるチーズリゾット、しらすのパスタ、フレッシュゴルゴンゾーラのパスタ、キャベツと魚介のアーリオ・オーリオ・鴨や豚などの肉料理・パンナコッタ (2026年の口コミ)',
    neighborhood: '室町の西の三条通。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。パスタ、リゾット、パン、肉料理。カルパッチョ、タルタル、生ハムは合いそうだが、グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。京野菜や農家の野菜を使うが、多くはチーズ、生ハム、魚、肉を使い、ヴィーガンの料理は挙がっていない (2026年の口コミ)。',
    notes: '[イタリアン・三条室町、たっぷりの皿とワイン] 三条通の和風の外観の長く続くイタリアン。京野菜や農家の野菜を使う手書きのメニューと、すばらしいワイン。常連のお目当てはサーモンと長芋のタルタル、パルミジャーノのホイールで仕上げるチーズリゾット、店で切る生ハム。量が多いので分け合って。予算は8,000〜15,000円ほど。夜のみ、木曜休み。',
  });
}

save();
