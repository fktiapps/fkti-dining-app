// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 10.
//   + てしま Teshima (eight-seat one-man counter at the back of 四富会館; omakase of obanzai, sashimi and sushi)
//   + 千登利亭 Chidori Tei (Kyoto-style sushi near Gion: saba sushi, hako-zushi, steamed sushi)
//   + ル・プチメック 今出川店 Le Petit Mec Imadegawa ten (French-style bakery and café on Imadegawa-dori; since 1998)
//   + 夢屋 Yume Ya (okonomiyaki and teppan at Kawabata Nijo; Okonomiyaki Tabelog 100 2018–2024)
//   - amam dacotan 京都 (26042042), 八起庵 丸太町本店 (26001086), Kobe Beef steak モーリヤ 祇園 (26030216),
//     茶寮都路里 祇園本店 (26000408): skipped as chains (reasons below).
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26019770, 26000570);
//   from `next notable 200`, after the four skips: 26000210, 26005094. None is in data/kyoto.json: grep by name (てしま/
//   Teshima, 千登利/Chidori, プチメック/Petit Mec, 夢屋/Yume Ya) and address (四富会館, 六軒町203, 元北小路町159, 孫橋町1)
//   found none.
//   Nearest existing pins: ChIJl0DcvAcJAWARM1y3y1IqwEE (GYUMON) 13 m from Teshima; kyoto_men_kui_kin_ya 21 m from Chidori Tei;
//   mp_sobaya_nikora_nicolas 182 m from Le Petit Mec; kyoto_toriya_hitomi 59 m from Yume Ya. None within 3 m.
//   Group check: Le Petit Mec's site names four shops (今出川店, 御池店, 大丸京都店, 日比谷店), none in data — a small group.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042042', 'amam dacotan 京都: a sub-brand of a chain parent (Greg, 2026-11-05) — WWD Japan (2025-12-05, https://www.wwdjapan.com/articles/2275012) names the operator as PEACE PUT (ピースプット), led by 平子良太, which also runs the I\'m donut? chain; amam dacotan itself has three shops (Ropponmatsu in Fukuoka, Omotesando, Kyoto) per its site. Integrator ruling, 2026-11-05');
skip('26001086', '八起庵 丸太町本店: a chain — the official site (https://www.hachikian.com/, read 2026-11-05) lists six shops (丸太町本店, 京都髙島屋店, 北新地店, 神楽坂店, 横浜髙島屋店, HACHIKI アルデ新大阪店); a chain\'s main shop counts as the chain');
skip('26030216', 'Kobe Beef steak モーリヤ 祇園: a chain — the official site (https://www.mouriya.co.jp/, read 2026-11-05) says the company runs its flagship 本店 plus five shops in Kobe Sannomiya and one in Kyoto Gion');
skip('26000408', '茶寮都路里 祇園本店: a chain — the official site (https://www.giontsujiri.co.jp/, read 2026-11-05) lists 祇園本店, 高台寺店, 京都伊勢丹店, 京都駅八条口店, 大丸心斎橋店, 大丸東京店 and ソラマチ店; a chain\'s flagship counts as the chain');

// ================================================================ てしま
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019770/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_teshima_yotsutomi', name: 'てしま (Teshima)', category: 'MOM_AND_POP',
    lat: 35.004281, lng: 135.765203, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The omakase runs through obanzai, oden, sashimi with soy sauce, saba sushi and udon; tempura and kushikatsu also appear; no gluten information (Tabelog; 2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden and simmered dishes in dashi, sashimi and sushi make up the omakase (2023–2026 reviews).',
    hours_raw: '17:30–24:00 every day; irregular closures (Tabelog). Reservations by phone (Tabelog); counter fills soon after opening (2023–2024 reviews); one July 2024 booking seemed to have been forgotten. Seating limited to about 90 minutes (July 2024). 8 counter seats; smoking allowed; cash only — no cards, e-money or QR (Tabelog). No drinks price list; large bottles of beer only (July 2024). At the far end of the corridor of 四富会館, an old building of small counter bars on Tominokoji just north of Shijo; 4 min from Kawaramachi Stn (Tabelog; June 2023).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Tominokoji just north of Shijo — 4 min from Kawaramachi Stn',
    cuisine: 'One-man counter of homely Japanese food and sake (2023–2026 reviews) · omakase of five or six dishes: a plate of five seasonal obanzai, oden or simmered cabbage, sashimi, saba sushi, then hot kitsune udon — ¥1,500 in Tabelog\'s introduction, ¥1,800 (2023–2024), ¥2,000 and ¥5,000 (March 2026) · tempura with grated daikon, kushikatsu · sake such as Kikumasa and Tomi no Hozan; Nikaido shochu (Tabelog; 2023–2026 reviews)',
    website: null, gmaps: gm('てしま 四富会館'), menu_url: null,
    notes: '[Izakaya · Shijo, a one-man counter at the back of 四富会館] At the very end of the narrow, red-painted corridor of 四富会館 — an old building of tiny counter bars just north of Shijo — an eight-seat counter where the owner, Takada, a sushi-trained cook from Awaji Island, cooks and serves alone. Order the omakase (¥2,000 in March 2026): five seasonal obanzai, oden, sashimi, saba sushi and a bowl of hot udon, enough for two to share. Strangers end up talking across the counter. Some love the owner\'s banter; a March 2026 visitor found the manner tiring. Cash only, smoking allowed; open to midnight.',
    chef_bio: { chef_name: 'Takada (surname only, from Tabelog\'s introduction)', roles: ['Owner-chef who cooks and serves alone (Tabelog: Takada, the owner, trained at sushi restaurants; July 2024 review: the chef managed the cooking and service for seven diners alone)'], origin: 'Awaji Island (December 2023 review).',
      background: 'Per Tabelog\'s introduction: the owner trained at sushi restaurants, is respected in the trade, and chose a small counter on purpose; food-trade people from Nishiki Market come here. A May 2023 reviewer says the shop has been here more than 20 years and that the owner worked in sushi kappo.',
      philosophy: null, specialty: 'Omakase of obanzai, sashimi, saba sushi and udon.',
      anecdotes: [
        { text: 'A September 2024 visitor who had come on the first day of the trip returned because the chef, with a regular, had given life advice that almost brought tears.', source: R + 'B454991480/' },
        { text: '"The walls were adorned with handwritten menus and various foreign banknotes." — June 2023.', source: R + 'B537332857/' },
        { text: 'A March 2026 visitor found the owner\'s difficult manner tiring and did not see why the place is so popular, though the food and prices were fair.', source: R + 'B525279358/' },
        { text: 'A March 2026 diner on the ¥2,000 omakase was surprised by the quality and quantity, and found strangers chatting by the end of the night.', source: R + 'B525819431/' },
      ],
      japanese_sources_summary: '食べログ: てしま、居酒屋・日本料理・海鮮、中京区富小路四条上ル 四富会館 1F、河原町駅から徒歩4分、毎日17:30〜24:00、不定休、予約可 (電話)、カウンター8席、喫煙可、カード・電子マネー・QR 不可、魚にこだわり。店の紹介 (英訳): 寿司屋で修業した店主の Takada、錦市場の料理人も通う、季節の先付け5品、寿司・串カツ・煮物・刺身などのおまかせ6品1,500円。口コミ (2023〜2026年、英語): Awaji Island 出身の店主が一人で料理と接客、おばんざい、おでん、刺身、鯖寿司、きつねうどん、おまかせ1,800円 (2023〜2024年)、2,000円と5,000円 (2026年3月)、90分ほど、20年以上。',
      confidence: 'medium', sources: [TB, R + 'B416107423/', R + 'B454991480/', R + 'B465776280/', R + 'B474009464/', R + 'B484337723/', R + 'B488016520/', R + 'B492739836/', R + 'B525279358/', R + 'B525819431/', R + 'B537332857/'] },
    cultural_comfort: { level: 'japanese', note: 'Tiny counter; phone booking; cash only; smoking allowed; no drinks price list.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区富小路四条上ル 四富会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.004281, 135.765203); the address (富小路四条上ル 四富会館) has no town or lot and GSI matches only the ward, so the pin rests on the Tabelog point, consistent with "4 minutes on foot from Kawaramachi Station" and "just 1 minute north" of Shijo on Tominokoji; nearest other record ChIJl0DcvAcJAWARM1y3y1IqwEE (GYUMON) is 13 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525819431/', R + 'B416107423/', TB],
    price_note: 'No menu; omakase prices from Tabelog\'s introduction (¥1,500) and 2023–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase (obanzai, oden, sashimi, saba sushi, udon)', '¥2,000', 'Omakase', 'ask', 'no', 'March 2026; ¥1,800 in 2023–2024.', 'omakase_2000'),
      it('', '', 'Larger omakase', '¥5,000', 'Omakase', 'ask', 'no', 'March 2026.', 'omakase_5000'),
    ] }, {
    cuisine: '一人で営む家庭的な和食と日本酒のカウンター (2023〜2026年の口コミ)・5〜6品のおまかせ: 季節のおばんざい5品の皿、おでんかキャベツの煮物、刺身、鯖寿司、締めの熱いきつねうどん。食べログの紹介では1,500円、1,800円 (2023〜2024年)、2,000円と5,000円 (2026年3月)・おろしの天ぷら、串カツ・日本酒 (Kikumasa、Tomi no Hozan)、二階堂の焼酎 (食べログ、2023〜2026年の口コミ)',
    neighborhood: '四条のすぐ北の富小路。河原町駅から徒歩4分',
    gf_detail: '要確認。おまかせはおばんざい、おでん、醤油で食べる刺身、鯖寿司、うどんで、天ぷらや串カツもある。グルテンの情報はない (食べログ、2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。おまかせは出汁のおでんや煮物、刺身、寿司 (2023〜2026年の口コミ)。',
    notes: '[居酒屋・四条、四富会館の奥の一人のカウンター] 四条のすぐ北、小さなカウンターの店が並ぶ古い四富会館の、赤い塗装の細い廊下の突き当たり。寿司屋で修業した Awaji Island 出身の店主 Takada が一人で作り、出す8席のカウンター。おまかせ (2026年3月に2,000円) を頼めば、季節のおばんざい5品、おでん、刺身、鯖寿司、熱いうどんと続き、2人で分けても足りる。隣の客とも自然に話がはずむ。店主の話しぶりが好きな人も多いが、2026年3月には疲れたという声も。現金のみ、喫煙可、24時まで。',
  });
}

// ================================================================ 千登利亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000570/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_chidori_tei', name: '千登利亭 (Chidori Tei)', category: 'OMNI',
    lat: 35.001916, lng: 135.772242, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto-style sushi with soy-based sauces on conger eel and simmered ingredients, plus chawanmushi and clear soup; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: mackerel, conger eel, sea bream and other fish sushi, with dashi soups (2026 reviews).',
    hours_raw: '11:00–17:00; closed Thursday; hours may change (Tabelog). Reservations taken (Tabelog). 14 seats (4 counter, tables for 2 and 4); non-smoking; cash only (Tabelog). English menu (Tabelog). Takeaway, with a small container charge (May 2026). On Donguri-dori west of Yamatooji, 2 min from Gion-Shijo Stn exit 1 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Donguri-dori between Gion and the Kamo River — 2 min from Gion-Shijo Stn',
    cuisine: 'Kyoto-style sushi house: saba sushi, hako-zushi and bo-zushi rather than Edo nigiri (2026 reviews) · "Wakasa" Kyoto sushi set — saba sushi, live conger-eel box sushi, Kyoto chirashi (steamed sushi instead in winter, ¥3,200), rolls in oboro kombu, clear soup — ¥2,730 · saba sushi to take away, 6 pieces ¥2,520 · young sea bream (kasugo) sushi 6 pieces ¥1,900; isobe maki 8 pieces ¥1,360 (May 2026) · summer hamo sushi 6 pieces ¥6,000, ayu sushi in bamboo leaf (June 2026) · nigiri, 8 pieces ¥3,600 (January 2026) · lunch gozen around ¥2,000 (September 2026) · chawanmushi · Kirin beer ¥950, Kamotsuru Gold junmai ¥1,650 (May 2026)',
    website: 'http://www7b.biglobe.ne.jp/~chidoritei/index.html', gmaps: gm('千登利亭 京都'), menu_url: null,
    notes: '[Sushi · Gion, Kyoto saba sushi and box sushi] A small, old-fashioned sushi house on Donguri-dori near Gion-Shijo Stn, serving the Kyoto styles: thick, soft saba sushi, conger-eel box sushi, kombu-wrapped rolls and, in winter, piping-hot steamed sushi. The "Wakasa" set (¥2,730) samples most of them with a clear soup; in summer there are hamo and ayu sushi. Saba sushi travels well as a takeaway. The owner is friendly and the chawanmushi has fans of its own. Lunch to 17:00 only; cash only; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'A May 2026 reviewer first came about ten years earlier while touring shops of the Kyoto Sushi Noren Association for saba sushi. An October 2026 reviewer calls it a long-established sushi restaurant.',
      philosophy: null, specialty: 'Saba sushi; "Wakasa" Kyoto sushi set; steamed sushi in winter.',
      anecdotes: [
        { text: 'A February 2026 visitor from Kanto swapped the chirashi for steamed sushi (¥3,200) and found the bowl too hot to hold.', source: R + 'B522527098/' },
        { text: '"I was left speechless by the best chawanmushi (savory egg custard) I\'ve ever had." — June 2026.', source: R + 'B530737794/' },
        { text: 'A May 2026 diner found the tables full of families from abroad, three generations at one table.', source: R + 'B104356570/' },
      ],
      japanese_sources_summary: '食べログ: 千登利亭、寿司・日本料理、東山区団栗通大和大路西入ル六軒町203、京阪祇園四条駅1番出口から徒歩2分、11:00〜17:00、木曜休み、予約可、14席 (カウンター4、2人テーブル3、4人テーブル1)、禁煙、カード・電子マネー・QR 不可、英語メニュー、テイクアウト可。口コミ (2026年、英語): 京寿司セット「Wakasa」2,730円 (鯖寿司、活穴子の箱寿司、京ちらし、巻き寿司、吸い物)、冬は蒸し寿司に変更3,200円、鯖寿司6切れ2,520円、小鯛寿司6切れ1,900円、磯辺巻き1,360円、夏の鱧寿司6切れ6,000円、鮎寿司、にぎり8貫3,600円、茶碗蒸し、Kyoto Sushi Noren Association。',
      confidence: 'medium', sources: [TB, R + 'B104356570/', R + 'B513535759/', R + 'B522527098/', R + 'B525456337/', R + 'B527121339/', R + 'B529587046/', R + 'B530737794/', R + 'B536452732/', R + 'B537134165/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); many families from abroad (May 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区団栗通大和大路西入ル六軒町203',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001916, 135.772242); cross-checked: GSI 京都府京都市東山区六軒町203番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B104356570/', R + 'B522527098/', R + 'B529587046/', R + 'B513535759/'],
    price_note: 'No menu read; prices from January–June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', '"Wakasa" Kyoto sushi set (saba sushi, conger-eel box sushi, chirashi, rolls, soup)', '¥2,730', 'Sets', 'ask', 'no', 'May 2026; steamed-sushi version ¥3,200 in winter.', 'wakasa_set'),
      it('', '', 'Saba sushi, 6 pieces (takeaway)', '¥2,520', 'Sushi', 'ask', 'no', 'May 2026.', 'saba_zushi'),
      it('', '', 'Young sea bream sushi, 6 pieces', '¥1,900', 'Sushi', 'ask', 'no', 'May 2026.', 'kodai_zushi'),
      it('', '', 'Hamo sushi, 6 pieces (summer)', '¥6,000', 'Sushi', 'ask', 'no', 'June 2026.', 'hamo_zushi'),
      it('', '', 'Nigiri, 8 pieces', '¥3,600', 'Sushi', 'ask', 'no', 'January 2026.', 'nigiri_8'),
    ] }, {
    cuisine: '江戸前のにぎりより、鯖寿司、箱寿司、棒寿司の京寿司の店 (2026年の口コミ)・京寿司セット「Wakasa」: 鯖寿司、活穴子の箱寿司、京ちらし (冬は蒸し寿司に変更3,200円)、おぼろ昆布の巻き寿司、吸い物で2,730円・持ち帰りの鯖寿司6切れ2,520円・小鯛の寿司6切れ1,900円、磯辺巻き8切れ1,360円 (2026年5月)・夏の鱧寿司6切れ6,000円、笹の葉で包んだ鮎寿司 (2026年6月)・にぎり8貫3,600円 (2026年1月)・2,000円台の昼の御膳 (2026年9月)・茶碗蒸し・キリンビール950円、Kamo Tsuru Gold 純米1,650円 (2026年5月)',
    neighborhood: '祇園と鴨川の間の団栗通。祇園四条駅から徒歩2分',
    gf_detail: '要確認。穴子や煮物の具に醤油ベースのたれを使う京寿司、茶碗蒸し、吸い物。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鯖、穴子、鯛などの魚の寿司と出汁の吸い物 (2026年の口コミ)。',
    notes: '[寿司・祇園、京の鯖寿司と箱寿司] 祇園四条駅近く、団栗通の昔ながらの小さな寿司屋。京寿司が中心で、厚くやわらかい鯖寿司、穴子の箱寿司、昆布巻き、冬は熱々の蒸し寿司。「Wakasa」(2,730円) でひととおり味わえ、吸い物付き。夏は鱧寿司と鮎寿司。鯖寿司は持ち帰りにも向く。店主は気さくで、茶碗蒸しにもファンがいる。17時までの昼のみ、現金のみ、木曜休み。',
  });
}

// ================================================================ ル・プチメック 今出川店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000210/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.lepetitmec.com/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_le_petit_mec_imadegawa', name: 'ル・プチメック 今出川店 (Le Petit Mec Imadegawa ten)', category: 'OMNI',
    lat: 35.029904, lng: 135.748017, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a French bakery of croissants, Danish, hard breads and pies (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Most pastries are butter-based; a July 2026 reviewer describes the ciabatta as made with olive oil and without butter or milk (2026 reviews).',
    hours_raw: '8:00–18:00 every day (Tabelog). No reservations; takeaway (Tabelog). Eat-in at 18 table seats: breads are warmed and sliced, juice served over ice (May 2026). Cards, e-money and QR payments (Tabelog). Non-smoking (Tabelog). On the north side of Imadegawa-dori between Horikawa and Senbon, behind a red awning; 2 min from the Imadegawa-Omiya bus stop (Tabelog; October 2026). Opened 30 October 1998 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Imadegawa-dori at Omiya, Nishijin — 2 min from the Imadegawa-Omiya bus stop',
    cuisine: 'French-style bakery with a café corner, the first shop of Le Petit Mec, known as "Aka Mec" for its red front (2026 reviews) · croissants: au beurre ¥270, aux amandes ¥430, Earl Grey almond ¥440, à la crème · pain au chocolat ¥330 · Olivier ¥250, ciabatta, lemon-macadamia ¥280 and other hard breads · chestnut pie ¥300, lemon custard pie ¥340, apple Danish, milk France with rum raisins ¥320, edamame and corn bread ¥360 · cakes with fruit (May–October 2026)',
    website: SITE, gmaps: gm('ル・プチメック 今出川店'), menu_url: null,
    notes: '[Bakery · Imadegawa, the red-fronted French bakery] Le Petit Mec\'s first shop, opened in 1998 on Imadegawa-dori in Nishijin and nicknamed "Aka Mec" for its red door and awning. Inside it smells of butter and plays French radio-style music; pick your breads, pay, and eat them at the tables, where they are warmed and sliced for you. The croissants are the stars (au beurre ¥270, almond ¥430, Earl Grey), with hard breads, fruit pies and seasonal specials. Busy from the morning; open daily 8:00–18:00.',
    chef_bio: { chef_name: null, roles: ['Le Petit Mec co., Ltd. (official site); no bakers named'], origin: null,
      background: 'Tabelog gives the opening as 30 October 1998; the official site marks the brand\'s 28th anniversary this autumn and lists 今出川店, 御池店, 大丸京都店 and 日比谷店 (Tokyo). Tabelog Bread "Tabelog 100" 2017–2020 and Bread WEST 2022.',
      philosophy: null, specialty: 'Croissants; hard breads.',
      anecdotes: [
        { text: 'A May 2026 diner eating in was impressed that the breads were warmed and cut into easy pieces, and that a bottled orange juice came with a glass of ice.', source: R + 'B529180262/' },
        { text: '"There are many international customers, and the music playing in the background feels like a French radio broadcast" — May 2026.', source: R + 'B531981024/' },
        { text: 'A July 2026 regular, who usually buys hard breads at the other shops, ordered items here that are best eaten fresh: the croissant à la crème and an apple Danish.', source: R + 'B531472089/' },
      ],
      japanese_sources_summary: '公式サイト (lepetitmec.com): Le Petit Mec、28周年、ル・プチメック今出川店、御池店、大丸京都店 (B1階)、日比谷店 (日比谷シャンテ1F)、Le Petit Mec co. Ltd。食べログ: パン・洋菓子・カフェ、上京区今出川通大宮西入ル元北小路町159 大晋メゾネ西陣今出川 1F、市バス今出川大宮から徒歩2分、毎日8:00〜18:00、予約不可、18席、禁煙、カード・電子マネー・QR 可、テイクアウト可、1998年10月30日オープン、パン百名店 2017〜2020、パン WEST 百名店 2022。口コミ (2026年、英語): 赤い扉の「Aka Mec」、クロワッサン・オ・ブール270円、アマンド430円、アールグレイ440円、パン・オ・ショコラ330円、オリヴィエ250円、チャバタ、栗のパイ、レモンカスタードのパイ、イートインで温めて切ってくれる。',
      confidence: 'medium', sources: [TB, SITE, R + 'B529180262/', R + 'B529235126/', R + 'B531472089/', R + 'B531541006/', R + 'B531602402/', R + 'B531981024/', R + 'B532101843/', R + 'B534389913/', R + 'B535144965/', R + 'B536860841/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose breads and pay at the till; eat-in tables; cards and QR payments.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区今出川通大宮西入ル元北小路町159 大晋メゾネ西陣今出川 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.029904, 135.748017); cross-checked: GSI 京都府京都市上京区元北小路町159番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529235126/', R + 'B535144965/'],
    price_note: 'No price list read; prices from May and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Croissant au beurre', '¥270', 'Viennoiserie', 'no', 'no', 'May, August 2026.', 'croissant'),
      it('', '', 'Croissant aux amandes', '¥430', 'Viennoiserie', 'no', 'no', 'May 2026.', 'croissant_amandes'),
      it('', '', 'Pain au chocolat', '¥330', 'Viennoiserie', 'no', 'no', 'August 2026.', 'pain_chocolat'),
      it('', '', 'Olivier (olive bread)', '¥250', 'Bread', 'no', 'ask', 'May 2026.', 'olivier'),
    ] }, {
    cuisine: 'カフェコーナーのあるフランス風のベーカリー。ル・プチメックの1号店で、赤い店構えから「Aka Mec」と呼ばれる (2026年の口コミ)・クロワッサン: オ・ブール270円、オ・ザマンド430円、アールグレイアーモンド440円、ア・ラ・クレーム・パン・オ・ショコラ330円・オリヴィエ250円、チャバタ、レモンとマカダミア280円などのハード系・栗のパイ300円、レモンカスタードのパイ340円、りんごのデニッシュ、ラムレーズンのミルクフランス320円、枝豆ととうもろこしのパン360円・果物のケーキ (2026年5〜10月)',
    neighborhood: '西陣、今出川大宮。市バス今出川大宮から徒歩2分',
    gf_detail: 'グルテンフリーではない。クロワッサン、デニッシュ、ハード系のパン、パイのフランス風のベーカリー (2026年の口コミ)。',
    vegan_detail: '要確認。ほとんどのパンはバターを使う。2026年7月の口コミはチャバタをオリーブオイルで作りバターも牛乳も使わないとする (2026年の口コミ)。',
    notes: '[ベーカリー・今出川、赤い店構えのフランス風ベーカリー] 1998年に西陣の今出川通に開いたル・プチメックの1号店で、赤い扉とテントから「Aka Mec」の愛称。中はバターの香りとフランスのラジオのような音楽。パンを選んで会計し、テーブルで食べれば温めて切ってくれる。主役はクロワッサン (オ・ブール270円、アーモンド430円、アールグレイ)、ハード系、果物のパイ、季節のパンも。朝からにぎわう。毎日8時〜18時。',
  });
}

// ================================================================ 夢屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26005094/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '21:00']);
  put({
    id: 'kyoto_yumeya_kawabata_nijo', name: '夢屋 (Yume Ya)', category: 'OMNI',
    lat: 35.013606, lng: 135.772545, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki batter, negiyaki and yakisoba are wheat-based, with sweet sauces (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with pork, beef, squid and egg, topped with fish flakes (2026 reviews).',
    hours_raw: '17:00–21:00, last order 20:30; closed Wednesday; closes when sold out (Tabelog). Reservations taken and advised (Tabelog; May 2026). 45 seats, with sofa and tatami seats; the whole room can be hired for 20–50 people; non-smoking (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Paid parking next door (Tabelog). On Kawabata-dori at Nijo, by the Kamo River, under red lanterns; 3 min from Kyoto Shiyakusho-mae Stn, 5 min from Sanjo Stn (Tabelog; June 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kawabata-dori at Nijo, by the Kamo River — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Okonomiyaki and teppan izakaya (2026 reviews) · Yume-yaki, the signature: a thin batter rich in yam with egg, cabbage and pork layered rather than mixed, ¥1,480 · Super Yume-yaki with potato and cheese · Fukafuka, a fluffy yam-and-egg okonomiyaki with beef, pork and squid, ¥1,480 · Yume negi (soy or sauce) ¥1,300; jaga cheese ¥950; garlic yaki ¥750 · yakisoba with thin noodles, e.g. mixed or salt ¥1,300, kimchi yakisoba · teppan: tonpei, gizzard, chicken neck, squid tentacles, chicken wings, beef intestines, pork kimchi · white "muroaji-bushi" flakes from Iyo, Ehime (2026 reviews)',
    website: null, gmaps: gm('夢屋 お好み焼き 川端二条'), menu_url: null,
    notes: '[Okonomiyaki · Kawabata Nijo, fluffy yam okonomiyaki by the Kamo River] A long-running okonomiyaki and teppan house under red lanterns on Kawabata-dori, its walls signed by many celebrities. The house style is soft and fluffy, thanks to plenty of yam in the batter: the Yume-yaki (¥1,480), layered rather than mixed, and the Fukafuka, piled with beef, pork and squid, both finished with white flakes from Ehime. Add a thin-noodle salt yakisoba and teppan sides such as tonpei or gizzard. Dishes arrive cooked. Cash only; 17:00–21:00, closed Wednesday; it closes when sold out, so book.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Reviewers describe a long-established okonomiyaki shop with many regulars (September 2026) and walls covered with celebrity signatures (July 2026); one February 2026 reviewer has been coming since student days. Tabelog Okonomiyaki "Tabelog 100" 2018, 2019, 2022, 2023 and 2024.',
      philosophy: null, specialty: 'Yume-yaki; Fukafuka; salt yakisoba.',
      anecdotes: [
        { text: 'On 5 January 2026, when few restaurants were open for New Year, a diner found it nearly full and was won over by the sauce\'s distinctive sweetness.', source: R + 'B520322110/' },
        { text: 'A July 2026 diner was amazed by the "muroaji-bushi", white fish flakes from Iyo City in Ehime used in place of ordinary bonito flakes.', source: R + 'B532031623/' },
        { text: 'A July 2026 visitor noted that, although there is a griddle at the table, the yakisoba and yume-yaki came out already cooked.', source: R + 'B531972419/' },
      ],
      japanese_sources_summary: '食べログ: 夢屋、お好み焼き・焼きそば・居酒屋、左京区川端通二条通上ル孫橋町1、市役所前駅から徒歩3分、京阪三条駅から徒歩5分、17:00〜21:00 (L.O. 20:30)、水曜休み、売り切れ次第終了、予約可、45席、ソファ席・座敷、20〜50名で貸切可、禁煙、カード・電子マネー・QR 不可、お好み焼き百名店 2018・2019・2022・2023・2024。口コミ (2026年、英語): 赤提灯、山芋たっぷりの生地の Yume-yaki 1,480円、Super Yume-yaki (じゃがいもとチーズ)、Fukafuka 1,480円、Yume negi 1,300円、じゃがチーズ950円、ガーリック焼き750円、細麺の塩焼きそば、とんぺい、Iyo の「muroaji-bushi」、有名人のサイン、学生時代からの常連。',
      confidence: 'medium', sources: [TB, R + 'B520322110/', R + 'B522468614/', R + 'B524200695/', R + 'B529023432/', R + 'B530815405/', R + 'B531700369/', R + 'B531972419/', R + 'B532031623/', R + 'B535982888/', R + 'B59025454/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; dishes arrive cooked; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区川端通二条通上ル孫橋町1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013606, 135.772545); cross-checked: GSI 京都府京都市左京区孫橋町1番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B59025454/', R + 'B529023432/'],
    price_note: 'No menu read; prices from May and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Yume-yaki (signature okonomiyaki)', '¥1,480', 'Okonomiyaki', 'no', 'no', 'August 2026.', 'yume_yaki'),
      it('', '', 'Fukafuka (fluffy yam okonomiyaki)', '¥1,480', 'Okonomiyaki', 'no', 'no', 'May, August 2026.', 'fukafuka'),
      it('', '', 'Yume negi', '¥1,300', 'Okonomiyaki', 'no', 'no', 'May, August 2026.', 'yume_negi'),
      it('', '', 'Mixed yakisoba', '¥1,300', 'Yakisoba', 'no', 'no', 'August 2026.', 'mix_yakisoba'),
      it('', '', 'Jaga cheese', '¥950', 'Teppan', 'ask', 'no', 'May 2026.', 'jaga_cheese'),
    ] }, {
    cuisine: 'お好み焼きと鉄板焼きの居酒屋 (2026年の口コミ)・看板の Yume-yaki: 山芋の多い薄い生地に卵、キャベツ、豚を混ぜずに重ねる、1,480円・じゃがいもとチーズの Super Yume-yaki・牛、豚、イカの入った山芋と卵のふわふわのお好み焼き「Fukafuka」1,480円・Yume negi (醤油かソース) 1,300円、じゃがチーズ950円、ガーリック焼き750円・細麺の焼きそば、たとえばミックスや塩1,300円、キムチ焼きそば・鉄板: とんぺい、砂ずり、せせり、ゲソ、手羽先、ホルモン、豚キムチ・Iyo の白い「muroaji-bushi」(2026年の口コミ)',
    neighborhood: '鴨川沿いの川端通二条。京都市役所前駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。お好み焼きの生地、ねぎ焼き、焼きそばは小麦で、甘いソース (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。豚、牛、イカ、卵のお好み焼きに魚の削り節 (2026年の口コミ)。',
    notes: '[お好み焼き・川端二条、鴨川沿いのふわふわの山芋のお好み焼き] 川端通の赤提灯の、長く続くお好み焼きと鉄板焼きの店。壁には有名人のサインがたくさん。山芋をたっぷり入れた生地のふんわりした焼き方が持ち味で、混ぜずに重ねる Yume-yaki (1,480円) や、牛、豚、イカの「Fukafuka」に、Ehime の白い削り節。細麺の塩焼きそばや、とんぺい、砂ずりなどの鉄板の一品も。料理は焼いて出てくる。現金のみ、17時〜21時、水曜休み。売り切れ次第終了なので予約を。',
  });
}

save();
