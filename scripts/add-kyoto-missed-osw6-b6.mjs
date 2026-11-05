// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 6.
//   + いそやま Isoyama (8-seat Japanese counter in Pontocho alley 25; course at 18:00, à la carte from 21:00)
//   + 先斗町 鮨いし屋 Pontocho Sushi Ishi Ya (sushi and Kyoto beef at the end of Pontocho alley 24)
//   + ぎをん森幸 Gion Morikou (Kyoto-style Cantonese on the Shirakawa since 1955; Chinese WEST Tabelog 100 2026)
//   + GOSPEL (scones and cakes on the 2nd floor of an ivy-covered Western house near the Philosopher's Path)
//   Taken on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (Isoyama 26041972, Ishiya 26037826: the first two with
//   id mod 6 = 4 after batch 5) and `next notable 200` (Morikou 26000584, GOSPEL 26000296).
//   None is in data/kyoto.json: grep by name (いそやま/Isoyama, いし屋/Ishiya, 森幸/Morikou, GOSPEL) and address
//   (鍋屋町212-3/25番路地, 鍋屋町210/24番路地, 白川筋知恩院橋上ル556, 上南田町36) found none. Pontocho neighbours:
//   kyoto_yuzugen_pontocho (address_ja "…先斗町四条上る鍋屋町212") is 8.6 m from Isoyama; kyoto_shu_shuz is 11 m from it;
//   kyoto_pontocho_asari (address_ja "…鍋屋町213 2F") is 21 m from Ishiya.
//   Greg's 2026-11-05 rulings checked: none of the four is a sub-brand of a large parent or asks diners not to post it
//   (GOSPEL forbids video recording inside, per a September 2026 review — not a posting ban). No group found for any.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ いそやま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041972/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_isoyama_pontocho', name: 'いそやま (Isoyama)', category: 'OMNI',
    lat: 35.004901, lng: 135.770962, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi and soy-based Japanese cooking with fried dishes (kara-age, fried fugu, beef cutlet), udon, crab shumai and a curry; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, eel, fugu, wagyu and chicken dishes built on dashi (2025–26 reviews).',
    hours_raw: 'Course from 18:00 (all guests start together when the noren goes up); à la carte from 21:00, closing time not fixed; closed days not published (Tabelog; 2026 reviews). Book ahead, online (July 2026); a reviewer found it while looking for somewhere open at 22:00 (July 2026). 8 seats at an L-shaped counter; children welcome, strollers allowed (June 2026). Cash only (Tabelog). In Pontocho alley No. 25 (先斗町25番路地), hard to find on a map — look for the alley number; 2 min from Kyoto Kawaramachi Stn, 4 min from Gion-Shijo Stn (Tabelog; June 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Pontocho, alley No. 25 — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Japanese counter cooking by a young owner-chef: a course at 18:00 (¥12,000 in August and October 2026), à la carte after 21:00 (2026 reviews) · course: about 10 seasonal dishes, sashimi eaten without soy sauce, swordfish with sesame, udon in broth, abalone rice porridge (the specialty), clay-pot rice with refills, peanut rice (June–October 2026) · à la carte: umaki of charcoal-grilled dashimaki and eel, eggplant with sesame vinegar, karasumi mochi, squid sashimi with plum jelly, salt-seared yellowtail, mackerel dried with soy, hamo, chicken-wing kara-age, fried aji, jako fried rice (2025) · fried ginkgo, wagyu tataki, crab shumai, fugu sashimi and fried fugu, charcoal-grilled sawara, beef cutlet, white-miso soup, "Iso Curry" on butter rice (October 2026) · rare sakes, wine, Mars whisky highball (2025–26 reviews)',
    website: null, gmaps: gm('いそやま 先斗町'), menu_url: null,
    notes: "[Japanese counter · Pontocho, course early, à la carte late] An 8-seat L-shaped counter down Pontocho's alley No. 25, where a young owner cooks alone in front of you. At 18:00 everyone sits down to a course of about ten dishes (¥12,000 in 2026) — abalone rice porridge is the house specialty, and the clay-pot rice comes back for seconds; from 21:00 it turns à la carte, with umaki grilled over charcoal, karasumi mochi, fugu in season and an 'Iso Curry' to finish. Rare sakes and wine. Look for the alley number, not the map pin. Book ahead; cash only.",
    chef_bio: { chef_name: null, roles: ['Young owner-chef who runs the shop alone (unnamed in the sources)'], origin: null,
      background: 'Per 2026 reviews: a young owner runs the 8-seat counter alone (October 2026), trained at a famous restaurant in Osaka before opening (July 2026), and plays Showa-era pop songs (October 2026); an October 2026 reviewer says the shop was featured in the Michelin Guide a year after opening. A September 2025 reviewer calls the owner young and a wine lover with a wide wine list, and says karasumi is made in a large batch at the end of the year.',
      philosophy: null, specialty: 'Abalone rice porridge; umaki; karasumi mochi.',
      anecdotes: [
        { text: '"They allowed us to bring in the stroller, and they were very accommodating even when my child was crying." — June 2026.', source: R + 'B530523566/' },
        { text: '"It’s a bit tricky to find on Google Maps, so it’s easier to look for it by the alley number." — June 2026.', source: R + 'B530544891/' },
        { text: '"The young owner runs the place by himself, allowing guests to enjoy watching the meticulous cooking right in front of them!" — October 2026.', source: R + 'B537875527/' },
        { text: 'An October 2026 diner found the 2.5-hour course passed quickly, with Showa-era pop songs playing.', source: R + 'B538103475/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区鍋屋町212-3 先斗町25番路地、阪急京都河原町駅から徒歩2分、祇園四条駅から4分、コースは18:00から、21:00からアラカルト (終了時間は未定)、予約可、8席、カード・電子マネー・QR 不可、禁煙。口コミ (2025〜2026年、英語): 若い店主が一人で営む、大阪の名店で修業、開店1年でミシュランに掲載との記述、コース12,000円、鮑の粥、土鍋ご飯のおかわり、ピーナッツご飯、う巻き、胡麻酢、からすみ餅、ふぐ、牛カツ、Iso Curry、珍しい日本酒、子連れ歓迎、路地の番号を目印に。',
      confidence: 'medium', sources: [TB, R + 'B510443513/', R + 'B515180490/', R + 'B518959002/', R + 'B526305011/', R + 'B529748563/', R + 'B530523566/', R + 'B530544891/', R + 'B530846898/', R + 'B533026295/', R + 'B533231854/', R + 'B537875527/', R + 'B538103475/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the 18:00 course online or come after 21:00 for à la carte; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町212-3 先斗町25番路地',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004901, 135.770962); cross-checked: GSI 京都府京都市中京区鍋屋町212番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533231854/', R + 'B537875527/'],
    price_note: 'Course price from August and October 2026 reviews; à la carte prices not read.', last_checked: TODAY, items: [
      it('', '', 'Course (from 18:00)', '¥12,000', 'Course', 'ask', 'no', 'August and October 2026.', 'course'),
      it('', '', 'Abalone rice porridge', '', 'À la carte', 'ask', 'no', '2025–26.', 'awabi_gayu'),
      it('', '', 'Umaki (charcoal-grilled dashimaki with eel)', '', 'À la carte', 'ask', 'no', 'September 2025.', 'umaki'),
      it('', '', 'Karasumi mochi', '', 'À la carte', 'ask', 'no', 'September 2025.', 'karasumi_mochi'),
      it('', '', 'Iso Curry (curry on butter-fried rice)', '', 'À la carte', 'no', 'no', 'October 2026.', 'iso_curry'),
    ] }, {
    cuisine: '若い店主の和食のカウンター。18時からコース (2026年8月・10月は12,000円)、21時以降はアラカルト (2026年の口コミ)・コース: 季節の約10品、醤油なしで食べる刺身、胡麻のかじき、出汁のうどん、名物の鮑の粥、おかわりできる土鍋ご飯、ピーナッツご飯 (2026年6〜10月)・アラカルト: 炭火で焼くだし巻きのう巻き、茄子の胡麻酢、からすみ餅、梅のジュレのいかの刺身、ぶりの塩炙り、鯖の醤油干し、鱧、手羽先の唐揚げ、あじフライ、じゃこ炒飯 (2025年)・銀杏の素揚げ、和牛のたたき、蟹のシュウマイ、ふぐの刺身と唐揚げ、鰆の炭火焼、牛カツ、白味噌汁、バターライスの Iso Curry (2026年10月)・珍しい日本酒、ワイン、Mars のウイスキーのハイボール (2025〜2026年の口コミ)',
    neighborhood: '先斗町25番路地。京都河原町駅から徒歩2分',
    gf_detail: '要確認。出汁と醤油の和食に、唐揚げ、ふぐの唐揚げ、牛カツなどの揚げ物、うどん、蟹のシュウマイ、カレーもある。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁を使う魚、うなぎ、ふぐ、和牛、鶏の料理 (2025〜2026年の口コミ)。',
    notes: '[和食のカウンター・先斗町、早い時間はコース、遅い時間はアラカルト] 先斗町25番路地の奥、L字のカウンター8席。若い店主が一人で目の前で料理する。18時に全員そろってコース約10品 (2026年は12,000円)。名物は鮑の粥で、土鍋ご飯はおかわりできる。21時からはアラカルトで、炭火のう巻き、からすみ餅、季節のふぐ、締めの Iso Curry。珍しい日本酒とワインも。地図より路地の番号を目印に。予約がおすすめ、現金のみ。',
  });
}

// ================================================================ 先斗町 鮨いし屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037826/'; const R = TB + 'dtlrvwlst/';
  const TC = 'https://www.tablecheck.com/sushi-ishiya-pontocho';
  const H = day(['11:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_pontocho_sushi_ishiya', name: '先斗町 鮨いし屋 (Pontocho Sushi Ishi Ya)', category: 'OMNI',
    lat: 35.005074, lng: 135.770869, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase courses of sushi with soy sauce, tempura, simmered and grilled dishes and red miso soup; no gluten information (Tabelog; 2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, sashimi, fish and Kyoto beef courses with dashi-based soups (Tabelog; 2023–26 reviews).',
    hours_raw: 'Lunch 11:00–15:00 by reservation only, dinner 17:00–23:00; closed Wednesday, though Wednesday bookings can be discussed (Tabelog); a March 2025 reviewer says lunch needs booking by the day before. 12 seats at the counter, private rooms for 2–8, private hire for up to 20 (Tabelog). Non-smoking; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). At the end of Pontocho alley No. 24 (先斗町24番路地奥), entered from the Pontocho side, not from the Takase River; easy to miss (Tabelog; 2024–26 reviews); 2 min from Kyoto Kawaramachi Stn Exit 1A (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, end of alley No. 24 — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Sushi counter whose owner picks the fish from around Japan, with dishes of the Kyoto brand beef "Kyo no Niku" (Tabelog; TableCheck) · Omakase 12 nigiri: seasonal hassun, 12 pieces, red miso soup and dessert, 15 dishes ¥16,500; Special 16 pieces, 19 dishes ¥22,000 (Tabelog) · a ¥9,900 omakase (lunch, March 2025; also March 2026): hassun of firefly squid, broad beans and bamboo shoot, clam soup, sea bream and tuna sashimi, simmered and grilled dishes, spring-cabbage tempura, 6 nigiri, red miso soup, hojicha ice cream · red-vinegar rice; seasonal sake (Tabelog; 2024–26 reviews)',
    website: TC, gmaps: gm('先斗町 鮨いし屋'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Pontocho, at the end of alley 24] A sushi counter hidden at the end of Pontocho's alley No. 24, with fans bearing geisha names on the walls and private rooms behind. The owner chooses fish from around Japan and adds dishes of Kyoto brand beef; the omakase runs to 15 dishes with 12 nigiri (¥16,500) or 19 with 16 (¥22,000), and lunch (booked by the day before) has offered a ¥9,900 course heavy on seasonal starters. Reviewers found the head chef friendly and good company at the counter. Closed Wednesday; enter from the Pontocho side.",
    chef_bio: { chef_name: null, roles: ['Owner and head chef (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog and TableCheck (the shop’s own text): the owner selects the seafood personally from across Japan, and the meat dishes use the Kyoto brand beef "Kyo no Niku". Reviewers in 2024 describe a friendly, attentive head chef and a counter decorated with fans bearing geiko names; a June 2023 reviewer recognised the premises as a former restaurant run by an elderly couple.',
      philosophy: null, specialty: 'Omakase nigiri; Kyoto beef dishes.',
      anecdotes: [
        { text: '"The interior is decorated with geisha fans, and thinking about how to read their names adds to the enjoyment." — March 2024.', source: R + 'B482474856/' },
        { text: '"The entrance is from the street in Pontocho, so you can’t access it from the Takase River." — July 2024.', source: R + 'B488036234/' },
        { text: 'A July 2024 lunch diner waited a while for the sushi after the many starters, and found the sea urchin a little off.', source: R + 'B489527790/' },
        { text: '"While it may not be overwhelmingly impressive, it was the perfect place to enjoy slightly better sushi in a relaxed setting." — March 2026.', source: R + 'B526864913/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、中京区鍋屋町210 先斗町24番路地奥、京都河原町駅1A出口から徒歩2分、祇園四条駅4番出口から4分、11:00〜15:00 (ランチは予約制)・17:00〜23:00、水曜休み (予約は相談可)、12席、個室2〜8名、貸切20名まで、禁煙、カード可、おまかせ12貫 (全15品) 16,500円、特選16貫 (全19品) 22,000円、店主が全国から選ぶ魚介と「Kyo no Niku」の京都のブランド牛。TableCheck: 先斗町の路地奥の寿司割烹。口コミ (2023〜2026年、英語): 9,900円のおまかせ、八寸、蛤の吸い物、赤酢のシャリ、芸妓の名前の飾り、先斗町側から入る、気さくな大将。',
      confidence: 'medium', sources: [TB, TC, R + 'B461016732/', R + 'B461780068/', R + 'B467309540/', R + 'B482474856/', R + 'B486796209/', R + 'B488036234/', R + 'B489527790/', R + 'B490128370/', R + 'B503742964/', R + 'B526864913/', R + 'B536745122/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course online; sit at the counter to talk with the head chef; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町210 先斗町24番路地奥',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005074, 135.770869); cross-checked: GSI 京都府京都市中京区鍋屋町210番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B503742964/'],
    price_note: 'Dinner course prices from Tabelog (November 2026); the ¥9,900 course from March 2025 and March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase 12 nigiri (15 dishes)', '¥16,500', 'Course', 'ask', 'no', 'Tabelog.', 'omakase_12'),
      it('', '', 'Special 16 pieces (19 dishes)', '¥22,000', 'Course', 'ask', 'no', 'Tabelog.', 'special_16'),
      it('', '', 'Omakase course (lunch)', '¥9,900', 'Course', 'ask', 'no', 'March 2025; March 2026.', 'omakase_9900'),
    ] }, {
    cuisine: '店主が全国から選ぶ魚の寿司カウンター。京都のブランド牛「Kyo no Niku」の料理も (食べログ、TableCheck)・おまかせ12貫: 季節の八寸、12貫、赤だし、デザートの全15品16,500円、特選16貫の全19品22,000円 (食べログ)・9,900円のおまかせ (2025年3月のランチ、2026年3月にも): ホタルイカ、そら豆、筍の八寸、蛤の吸い物、鯛とまぐろの刺身、煮物と焼物、春キャベツの天ぷら、握り6貫、赤だし、ほうじ茶アイス・赤酢のシャリ、季節の日本酒 (食べログ、2024〜2026年の口コミ)',
    neighborhood: '先斗町24番路地の奥。京都河原町駅から徒歩2分',
    gf_detail: '要確認。醤油の寿司、天ぷら、煮物、焼物、赤だしのおまかせ。グルテンの情報はない (食べログ、2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司、刺身、魚と京都の牛肉のコースで、汁物も出汁 (食べログ、2023〜2026年の口コミ)。',
    notes: '[寿司・先斗町、24番路地の奥] 先斗町24番路地の突き当たりの寿司カウンター。壁には芸妓の名前の飾り、奥に個室。店主が全国から選ぶ魚に京都のブランド牛の料理を添え、おまかせは握り12貫の全15品 (16,500円) か16貫の全19品 (22,000円)。ランチ (前日までに予約) では季節の前菜の多い9,900円のコースも。大将は気さくで、カウンターでの話も楽しいと口コミにある。水曜休み、先斗町側から入る。',
  });
}

// ================================================================ ぎをん森幸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000584/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_gion_morikou', name: 'ぎをん森幸 (Gion Morikou)', category: 'OMNI',
    lat: 35.007643, lng: 135.778999, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cantonese dishes with soy and oyster-type sauces, spring rolls, shrimp tempura, dumplings, yakisoba and kara-age; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken, shrimp, crab and beef dishes, with a Japanese-dashi accent in some (2026 reviews).',
    hours_raw: 'Lunch 11:30–14:00 (last order 13:30), dinner 17:00–21:30 (last order 20:30); closed Wednesday and on some other days (Tabelog). Book ahead, especially for lunch: a May 2026 walk-in could not get in, and tables fill within minutes of the 11:30 opening (October 2026); a November 2026 walk-in was given a 45-minute slot. The weekday daily special is weekdays only (October 2026). A 10% charge applies only in the tatami rooms (Tabelog). 37 seats: 20 at tables and rooms with sunken kotatsu; private hire for 20–50 (Tabelog). Non-smoking; cards (VISA, Master) (Tabelog). Bento to take away (Tabelog). On the west bank of the Shirakawa north of Chion-in Bridge; by the Chion-in-mae bus stop, near Higashiyama Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shirakawa north of Chion-in Bridge, Gion — near Higashiyama Stn',
    cuisine: 'Kyoto-style Cantonese cooking, light and without strong spices, since 1955; Shaoxing wine from China and Taiwan (Tabelog, shop text) · signature handmade spring rolls (Tabelog) · lunch: Morikou special bento in a two-tier box ¥1,400 — sweet-and-sour pork, crab omelette, roast pork, spring rolls, shrimp tempura — with mapo tofu as an add-on (May and November 2026); lunch mini course (November 2026) · sweet-and-sour pork of lean tenderloin with black vinegar ¥1,300 (September 2026) · dinner: appetizers of roast pork, ginger steamed chicken and fried gizzards, crab and shark-fin soup, Peking duck, beef with green peppers, chive dumplings, cream-stewed scallops, spicy shrimp, yakisoba, almond tofu, coconut milk with tapioca (2026 reviews)',
    website: null, gmaps: gm('ぎをん森幸 白川'), menu_url: TB + 'dtlmenu/',
    notes: "[Kyoto Chinese · Gion Shirakawa, light Cantonese since 1955] A Cantonese restaurant in a house on the Shirakawa, open since 1955, cooking the light, dashi-tinged Chinese food Kyoto calls its own; inside hangs a large peacock painting by a Kyoto artist. Lunch is the two-tier Morikou bento (¥1,400 in 2026) of spring rolls, shrimp tempura, crab omelette and sweet-and-sour pork; dinner brings shark-fin soup, Peking duck and the handmade spring rolls. Book ahead — lunch fills at opening. One October 2026 diner found the mapo tofu too oily. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Long-established restaurant; no one is named in the sources'], origin: null,
      background: 'Per Tabelog (the shop’s own text): opened in 1955 and cherished by local food lovers for over half a century; Kyoto-style Chinese cooking that is light and avoids strong spices; handmade spring rolls with every ingredient made from scratch; bento to take away. A September 2026 reviewer says its customers range from geiko to tourists; an October 2026 reviewer describes a large peacock painting by a Kyoto artist; a diner of nearly 20 years brought a business guest in October 2026. Tabelog Chinese WEST "Tabelog 100" 2021, 2024, 2026.',
      philosophy: 'Per Tabelog (the shop’s own text): light, flavourful dishes that avoid the strong spices typical of Chinese cooking, for everyone from children to the elderly.',
      specialty: 'Handmade spring rolls; Morikou bento.',
      anecdotes: [
        { text: 'An October 2026 visitor found the cooking elegant but the mapo tofu too oily, and would not return for that reason.', source: R + 'B537305497/' },
        { text: '"I was a bit disappointed that the amount of rice was too much compared to the side dishes." — October 2026.', source: R + 'B536629839/' },
        { text: '"I’ve been visiting this restaurant for nearly 20 years, and it offers surprisingly light Cantonese cuisine." — October 2026.', source: R + 'B538205996/' },
        { text: 'A November 2026 walk-in couple were told a 45-minute stay would be fine and had the lunch mini course.', source: R + 'B538434825/' },
      ],
      japanese_sources_summary: '食べログ: 中華料理・飲茶、東山区白川筋知恩院橋上ル西側556、知恩院前バス停・東山駅、月火木金土日 11:30〜14:00 (L.O. 13:30)・17:00〜21:30 (L.O. 20:30)、水曜休み、不定休あり、予約可、チャージお座敷のみ10％、37席、掘りごたつの個室、貸切20〜50名、禁煙、カード (VISA・Master)、中国料理 WEST 百名店 2021・2024・2026、1955年開店、強い香辛料を控えた京風の広東料理、中国と台湾の紹興酒、手作りの春巻き、お弁当の持ち帰り。口コミ (2026年、英語): 森幸弁当1,400円 (酢豚、かに玉、焼豚、春巻き、海老の天ぷら)、酢豚1,300円、麻婆豆腐、フカヒレスープ、北京ダック、孔雀の絵、昼は開店すぐ満席、油が多いという声。',
      confidence: 'medium', sources: [TB, R + 'B521130095/', R + 'B528903049/', R + 'B535995995/', R + 'B536185731/', R + 'B536629839/', R + 'B536703910/', R + 'B537175590/', R + 'B537305497/', R + 'B537726822/', R + 'B538205996/', R + 'B538434825/', R + 'B538480113/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead by phone; lunch bento is the easy order; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区白川筋知恩院橋上ル西側556',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through November 2026; Chinese WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.007643, 135.778999); GSI found no match for the address (GSI only this round, no OSM); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536703910/', R + 'B536185731/'],
    price_note: 'No price list read; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Morikou special bento (lunch)', '¥1,400', 'Lunch', 'ask', 'no', 'October 2026.', 'morikou_bento'),
      it('', '', 'Sweet-and-sour pork (tenderloin, black vinegar)', '¥1,300', 'Dishes', 'ask', 'no', 'September 2026.', 'subuta'),
      it('', '', 'Handmade spring rolls', '', 'Dishes', 'no', 'no', 'Signature (Tabelog).', 'harumaki'),
      it('', '', 'Crab and shark-fin soup', '', 'Dishes', 'ask', 'no', 'October 2026.', 'fukahire_soup'),
    ] }, {
    cuisine: '1955年からの、強い香辛料を控えたあっさりした京風の広東料理。中国と台湾の紹興酒 (食べログの店の紹介)・名物の手作りの春巻き (食べログ)・ランチ: 二段の箱の森幸特製弁当1,400円 (酢豚、かに玉、焼豚、春巻き、海老の天ぷら)、追加で麻婆豆腐 (2026年5月・11月)、ランチのミニコース (2026年11月)・ヒレ肉と黒酢の酢豚1,300円 (2026年9月)・夜: 焼豚、生姜の蒸し鶏、砂肝の唐揚げの前菜、蟹とフカヒレのスープ、北京ダック、牛肉とピーマンの炒め物、ニラ餃子、帆立のクリーム煮、ピリ辛の海老、焼きそば、杏仁豆腐、タピオカ入りココナッツミルク (2026年の口コミ)',
    neighborhood: '祇園、知恩院橋の北の白川沿い。東山駅から近い',
    gf_detail: '要確認。醤油などのたれの広東料理で、春巻き、海老の天ぷら、餃子、焼きそば、唐揚げもある。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、鶏、海老、蟹、牛の料理で、和の出汁の風味のものも (2026年の口コミ)。',
    notes: '[京風中華・祇園白川、1955年からのあっさり広東料理] 白川沿いの家にある1955年開店の広東料理店。京都らしいあっさりした出汁の風味の中華で、店内には京都の画家の大きな孔雀の絵。昼は二段の森幸弁当 (2026年は1,400円) で春巻き、海老の天ぷら、かに玉、酢豚。夜はフカヒレスープ、北京ダック、手作りの春巻き。昼は開店とともに満席になるので予約を。2026年10月の客は麻婆豆腐の油が多いと書いている。水曜休み。',
  });
}

// ================================================================ GOSPEL
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26000296/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '18:00']);
  put({
    id: 'kyoto_gospel_ginkakuji', name: 'GOSPEL', category: 'OMNI',
    lat: 35.025534, lng: 135.794910, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: scones, tarts and cakes, with lunches of shrimp gratin or hamburg steak with demi-glace (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: scones come with clotted or whipped cream, the cakes use butter and cream, and the lunches are meat or shrimp with dairy (2026 reviews).',
    hours_raw: '12:00–18:00 (last order 17:30); closed Tuesday (Tabelog). No reservations (Tabelog): a 30-minute wait with three groups ahead on a June 2026 Saturday; walk-ins turned away when full (September 2026). Video recording inside is prohibited (September 2026). 35 seats at tables and sofas; cash only (Tabelog). No parking; the city car park about 50 m north is free after 17:00 (Tabelog). Up the wooden stairs to the 2nd floor of an ivy-covered Western-style house, a different business on the ground floor; 3 min from the Jodoji or Ginkakuji-mae bus stops, near the Philosopher’s Path (Tabelog; September 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Jodoji near Ginkakuji and the Philosopher’s Path — 3 min from the Ginkakuji-mae bus stop',
    cuisine: 'Café in an ivy-covered Western-style house (2026 reviews) · scone set ¥1,650: large, soft scones with clotted cream and jam and a pot of tea (September 2026) · cake set ¥1,350: pear tart with almond cream, cherry chocolate cake (September–November 2026) · lunch: shrimp gratin or hamburg steak with demi-glace and rice (August 2026) · tea in generous pots, blend coffee, iced tea; Wedgwood and Royal Copenhagen tableware (2026 reviews)',
    website: null, gmaps: gm('GOSPEL 京都 銀閣寺'), menu_url: null,
    notes: "[Café · Ginkakuji, scones in an ivy-covered house] A tea room up a broad wooden staircase on the 2nd floor of an old ivy-covered Western-style house near the Philosopher's Path: dark wood, antique furniture, shelves of worn records, and jazz from a JBL Paragon speaker. The scone set (¥1,650) brings big, soft scones with clotted cream, jam and a pot of tea; the cake set (¥1,350) a pear tart or cherry chocolate cake; lunch is shrimp gratin or hamburg steak. No bookings — expect a wait at weekends. No video inside. Cash only; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Café; no owner or staff named in the sources'], origin: null,
      background: 'Reviewers in 2026 describe a classic Western-style house covered in ivy; a November 2026 reviewer says it was designed by Vories, while a September 2026 reviewer calls it reminiscent of Vories’ architecture. Inside: antique furniture, shelves of old literature and records, a JBL Paragon playing jazz, and Wedgwood and Royal Copenhagen china (2026 reviews). Instagram @gospel_kyoto (September 2026 review). Tabelog Cafe "Tabelog 100" 2021, 2022 and Cafe WEST 2025.',
      philosophy: null, specialty: 'Scone set; cake set.',
      anecdotes: [
        { text: '"⚠️ Video recording is prohibited." — September 2026.', source: R + 'B536455194/' },
        { text: '"Typically, cakes are perceived as more expensive than scones, but here the cake set is JPY 1350, while the scone set is JPY 1650." — September 2026.', source: R + 'B535402061/' },
        { text: '"It seems like the shelves are bending under the weight of the records." — September 2026.', source: R + 'B535936964/' },
        { text: 'A June 2026 Saturday visitor waited about 30 minutes behind three groups.', source: R + 'B533031035/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・パブ・ケーキ、左京区浄土寺上南田町36 2F、浄土寺・銀閣寺前バス停から徒歩3分、月水木金土日 12:00〜18:00 (L.O. 17:30)、火曜休み、予約不可、35席、カード・電子マネー・QR 不可、禁煙、駐車場なし (北50mの市営駐車場は17時以降無料)、カフェ百名店 2021・2022、カフェ WEST 百名店 2025。口コミ (2026年6〜11月、英語): ツタの洋館の2階、1階は別の店、Vories の設計との記述、スコーンセット1,650円、ケーキセット1,350円 (洋梨のタルト、チェリーのチョコレートケーキ)、ランチはハンバーグか海老グラタン、ポットの紅茶、JBL Paragon のジャズ、レコード棚、Wedgwood と Royal Copenhagen の器、店内の動画撮影は禁止、週末は待ち。',
      confidence: 'medium', sources: [TB, R + 'B532422505/', R + 'B533031035/', R + 'B533345149/', R + 'B533560795/', R + 'B534219067/', R + 'B535402061/', R + 'B535936964/', R + 'B536333288/', R + 'B536455194/', R + 'B536600264/', R + 'B536700635/', R + 'B538472254/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wait to be seated; order verbally; cash only; no video.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区浄土寺上南田町36 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Cafe WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.025534, 135.794910); cross-checked: GSI 京都府京都市左京区浄土寺上南田町36番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535402061/', R + 'B536600264/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Scone set (scones, clotted cream, jam, drink)', '¥1,650', 'Sets', 'no', 'no', 'September 2026.', 'scone_set'),
      it('', '', 'Cake set (cake and drink)', '¥1,350', 'Sets', 'no', 'no', 'September–November 2026.', 'cake_set'),
      it('', '', 'Shrimp gratin lunch', '', 'Lunch', 'no', 'no', 'August 2026.', 'shrimp_gratin'),
      it('', '', 'Hamburg steak with demi-glace', '', 'Lunch', 'no', 'no', 'August 2026.', 'hamburg'),
    ] }, {
    cuisine: 'ツタに覆われた洋館のカフェ (2026年の口コミ)・スコーンセット1,650円: 大きくやわらかいスコーンにクロテッドクリームとジャム、ポットの紅茶 (2026年9月)・ケーキセット1,350円: アーモンドクリームの洋梨のタルト、チェリーのチョコレートケーキ (2026年9〜11月)・ランチ: 海老グラタンか、デミグラスのハンバーグとご飯 (2026年8月)・たっぷりのポットの紅茶、ブレンドコーヒー、アイスティー、Wedgwood と Royal Copenhagen の器 (2026年の口コミ)',
    neighborhood: '銀閣寺と哲学の道に近い浄土寺。銀閣寺前バス停から徒歩3分',
    gf_detail: '実際にはグルテンフリーではない。スコーン、タルト、ケーキと、海老グラタンやデミグラスのハンバーグのランチ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。スコーンにクロテッドクリームや生クリーム、ケーキにバターとクリーム、ランチは肉か海老と乳製品 (2026年の口コミ)。',
    notes: '[カフェ・銀閣寺、ツタの洋館のスコーン] 哲学の道近く、ツタに覆われた古い洋館の2階へ広い木の階段を上がる喫茶室。濃い色の木、アンティークの家具、使い込まれたレコードの棚、JBL Paragon から流れるジャズ。スコーンセット (1,650円) は大きくやわらかいスコーンにクロテッドクリームとジャム、ポットの紅茶。ケーキセット (1,350円) は洋梨のタルトかチェリーのチョコレートケーキ。ランチは海老グラタンかハンバーグ。予約不可で週末は待つことも。店内の動画撮影は禁止。現金のみ、火曜休み。',
  });
}

save();
