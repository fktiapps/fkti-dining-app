// Osaka sweep (2-mile circle around Dotonbori), REST phase; worker osw1 (lane: Tabelog id mod 4 = 0), batch 23.
//   + a la mode osaka (pink night café of plated sweets and "oshi-katsu" celebration plates, Soemoncho, 2022)
//   + 日本酒が永遠に飲める店 たまり場PON (self-serve all-you-can-drink of about 150 sakes, bring your own food, 2017)
//   + 韓国肉料理・石鍋イニョン 道頓堀店 Inyon (Korean stone-pot nakkopse on a broth traced back to 1945, Dotonbori, 2021)
//   + 豚のしっぽと鶏のとさか なんば店 (chicken-broth oden, Agu pork shabu-shabu and bone-in chicken, open to 5 a.m.)
//   - skip(): 雪之丞 (one review in 2025–26), 鉄板神社 三津寺笠屋町店 (branch of a chain in data), ザ・セラーズ 南店 (one review).
//   Lane: `queue.mjs osaka next rest 600`, mod-4 = 0, in order: 27157996 六美麻辣湯, 27158476 よいもど and 27098560 パイレーツ
//   オブオオサカ (left undecided; the last is with Greg), 27045536 skip, 27131804 +, 27100924 +, 27122584 +, 27014944 skip,
//   27078528 skip, 27135204 +.
//   Chain check for the four kept: a la mode, たまり場PON and イニョン are each the only shop of the name in shops.jsonl (イニョン
//   names 石鍋KOH as a sister restaurant, a different name); 豚のしっぽと鶏のとさか has two shops (this and 27112749). None is in
//   data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27045536', 'Too thin for a full record: seven Tabelog reviews, only one in 2025–26 (June 2025); the rest from 2010–2024.');
skip('27014944', 'Branch of a chain already in data: 鉄板神社 (osaka_teppan_jinja_dotonbori is in data; shops.jsonl has 総本店, 道頓堀店, なんばグランド花月前店, 三津寺笠屋町店 and more).');
skip('27078528', 'Too thin for a full record: one Tabelog review.');

// ================================================================ a la mode osaka
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27131804/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.instagram.com/a.la.mode.osaka';
  const H = day(['15:00', '24:00']);
  put({
    id: 'osaka_a_la_mode_osaka_soemoncho', name: 'a la mode osaka', category: 'OMNI',
    lat: 34.669309, lng: 135.503638, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Macarons are usually made with almond flour, but the parfaits, cakes, fondant and cookies are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. The sweets are cream, chocolate and cake based.',
    hours_raw: 'Daily 15:00–24:00; may close early when sweets sell out; open year-round (Tabelog). Reservations accepted and recommended, also seat-only reservations (Tabelog; November 2025). One drink per person (November 2025). Cards; no e-money or QR (Tabelog). 24 seats: counter, sofas, private rooms for 2–6 and a terrace; heated-tobacco smoking area (Tabelog). Orders by QR code (August and December 2025). Down the stairs to the basement of a Soemoncho building (August 2025, January 2026). Opened 16 July 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Soemoncho 4-5 B1F, down the stairs in the night-time heart of Soemoncho — 5 min from Namba and Nippombashi Stns',
    cuisine: 'Night café of handmade sweets by a female pastry chef, with a real bar counter, open until midnight; the shop calls its late tea set Japan\'s first "Midnight Tea" (Tabelog) · parfaits, Mont Blanc, chocolate gâteau, fondant chocolate on celebration plates, petit macarons, pudding (September 2024–February 2026) · "oshi-katsu" plate course by reservation, with a chosen colour and message written on the plate; made-to-order cakes and cookie tins in nine colours with a message (August–September 2025, February 2026) · strawberry milk, iced Ceylon tea, cocktails, shochu with hot water, light meals (2024–2026)',
    website: SITE, gmaps: gm('a la mode osaka 宗右衛門町'), menu_url: null,
    notes: "[Night café · Soemoncho, plated sweets and fan celebrations until midnight] A turquoise-and-pink basement café in the middle of Soemoncho's nightlife, open from 3 p.m. to midnight, where a female pastry chef's parfaits, Mont Blanc and fondant are served alongside a proper bar. It is a favourite for 'oshi-katsu', celebrating a favourite idol or character: book the plate course and your colour and message are drawn on the plate, or order a custom cake or a cookie tin. Order by QR code, one drink each. Seats are few, so book; one diner found service slow. Most guests are women, though there is shochu for anyone.",
    chef_bio: { chef_name: null, roles: ['Pastry chef (unnamed; a woman, per the Tabelog listing) and bar staff'], origin: null, background: 'Shop-maintained Tabelog listing: a night café five minutes from Namba Station, offering what it calls Japan\'s first "Midnight Tea" set until midnight; sweets handmade by a female pastry chef; terrace and private rooms; opened 16 July 2022. Instagram: @a.la.mode.osaka.', philosophy: null, specialty: 'Plated parfaits and celebration plates; custom cakes.',
      anecdotes: [
        { text: '"With this course, you can choose your favorite color and have your desired text written on the plate (with a character limit)." — August 2025, the oshi-katsu plate course.', source: R + 'B512625692/' },
        { text: '"I made a reservation just for the seats, and it turned out that all three of the available seats were reserved." — November 2025.', source: R + 'B517688979/' },
        { text: '"In addition to parfaits and a la mode desserts, there are also light snacks on the menu, as well as options for older gentlemen, like shochu with hot water." — January 2026.', source: R + 'B520311957/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): a la mode osaka、カフェ・スイーツ・バー、大阪市中央区宗右衛門町4-5 B1F、なんば駅・日本橋駅から徒歩5分、毎日15:00〜24:00、スイーツが売り切れると早く閉めることも、年中無休、予約可、カード可、電子マネー・QR 不可、24席、2〜6名の個室、テラス、加熱式たばこの喫煙所、2022年7月16日オープン。店の紹介 (英訳): 深夜0時までの夜カフェ、日本初という「Midnight Tea」、女性のパティシエの手作りのスイーツ、写真映えする店内、推し活向き。口コミ(2024年9月〜2026年2月): ネオンのサイン、ターコイズとピンクの店内、本格的なバー、プチマカロン、アイスのセイロンティー、フォンダンショコラのお祝いのプレート、予約制の推し活プレートのコース (好きな色と文字をプレートに)、9色のクッキー缶、オーダーケーキ、パフェ、いちごミルク、モンブラン、ガトーショコラ、焼酎のお湯割り、軽食、QR コードで注文、1ドリンク制、席は予約で埋まる、提供が遅いという声、客の多くは女性。',
      confidence: 'medium', sources: [TB, SITE, R + 'B460460545/', R + 'B492932523/', R + 'B507128723/', R + 'B512625692/', R + 'B513678974/', R + 'B517688979/', R + 'B519926908/', R + 'B520311957/', R + 'B521039605/', R + 'B522834396/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町4-5 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and Instagram; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町4番5号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512625692/', R + 'B517688979/'],
    price_note: 'No dated prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Oshi-katsu plate course (reservation only)', '', 'Courses', 'ask', 'ask', 'August 2025 review.', 'oshikatsu_plate'),
      it('', '', 'Parfait', '', 'Sweets', 'ask', 'ask', 'November 2025 review.', 'parfait'),
      it('', '', 'Petit macarons', '', 'Sweets', 'ask', 'ask', 'September 2024 review.', 'macarons'),
    ] }, {
    cuisine: '女性のパティシエの手作りのスイーツと本格的なバーのカウンターのある、深夜0時までの夜カフェ。店によると遅い時間のティーセットは日本初の「Midnight Tea」(食べログ)・パフェ、モンブラン、ガトーショコラ、お祝いのプレートのフォンダンショコラ、プチマカロン、プリン (2024年9月〜2026年2月)・予約制の「推し活」プレートのコースは、好きな色と文字をプレートに描いてくれる。オーダーケーキ、9色から選べてメッセージを入れるクッキー缶 (2025年8月〜9月、2026年2月)・いちごミルク、アイスのセイロンティー、カクテル、焼酎のお湯割り、軽食 (2024〜2026年)',
    neighborhood: '宗右衛門町4-5 地下1階、夜の宗右衛門町のまん中の階段を下りて。なんば駅・日本橋駅から5分',
    gf_detail: '要確認。グルテンの情報なし。マカロンは一般にアーモンドの粉だが、パフェ、ケーキ、フォンダン、クッキーの説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。スイーツはクリーム、チョコレート、ケーキが中心。',
    notes: '[夜カフェ・宗右衛門町、深夜0時までのプレートのスイーツと推し活] 夜の宗右衛門町のまん中の、ターコイズとピンクの地下のカフェで、午後3時から深夜0時まで。女性のパティシエのパフェ、モンブラン、フォンダンを、本格的なバーと一緒に出す。推し活の人気の店で、プレートのコースを予約すれば好きな色とメッセージをプレートに描いてくれ、オーダーケーキやクッキー缶も。注文は QR コードで、1人1ドリンク。席が少ないので予約を。提供が遅いと感じた人も。客の多くは女性だが、焼酎もある。',
  });
}

// ================================================================ 日本酒が永遠に飲める店 たまり場PON
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27100924/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:30']);
  put({
    id: 'osaka_tamariba_pon_namba', name: '日本酒が永遠に飲める店 たまり場PON (Tamariba PON)', category: 'OMNI',
    lat: 34.667373, lng: 135.502168, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The point is the sake; snacks are few, and bringing your own food is common.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Sake is the focus; snacks include clams steamed in sake and rolled omelette.',
    hours_raw: 'Tue–Sun 17:30–23:30 (last order 23:00); closed Monday (Tabelog). Reservations accepted; private hire for 20 or more Sunday to Thursday, 30 or more Friday and Saturday (Tabelog). Pay the drinks plan when seated (Tabelog). Cards and PayPay; no e-money (Tabelog). 56 seats; non-smoking (Tabelog). Bring your own food or order delivery; on weekdays takoyaki makers, hot-pot equipment and games can be borrowed; you may step out and come back (Tabelog; December 2025, July 2026). Opened 2 October 2017 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-4-3, 難波チャンプビル 4F — 2 min from Osaka-Namba Stn',
    cuisine: 'Self-serve sake bar: about 150 sakes from across Japan in the fridges, including rare and seasonal bottles, poured yourself into the vessel you choose (Tabelog; 2025–2026 reviews) · plans: 90 minutes of sake ¥2,750 (Tabelog); unlimited time ¥3,000 (Tabelog) or ¥3,850 (September 2025); beer, shochu, highballs and chūhai also available; single glasses ¥600 (December 2025) · snacks such as clams steamed in sake and rolled omelette; bring your own food (2025–2026 reviews)',
    website: null, gmaps: gm('たまり場PON 難波'), menu_url: null,
    notes: "[Sake bar · Namba, all the sake you can pour] A fourth-floor hideaway two minutes from Osaka-Namba where the fridges hold about 150 sakes from all over Japan and you pour your own. Plans start at ¥2,750 for 90 minutes, and an unlimited-time plan lets you stay all evening (listed at ¥3,000; a September 2025 diner paid ¥3,850 including beer and chūhai). The food menu is short, so do as the regulars do and bring your own dishes or order delivery; on weekdays you can even borrow a takoyaki maker or hot-pot set. One January 2026 diner found restocking slow and the snacks thin. Non-smoking; closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed) who explain the rules'], origin: null, background: 'Shop-maintained Tabelog listing: self-serve all-you-can-drink of about 150 sakes from across the country, including rare limited editions; bring-your-own food and delivery welcome; on weekdays cooking equipment such as takoyaki makers and games to borrow; private hire; opened 2 October 2017.', philosophy: null, specialty: 'Self-serve unlimited sake.',
      anecdotes: [
        { text: '"You can bring your own food, so it’s a good idea to either order delivery or pick up something from another restaurant before coming." — July 2026.', source: R + 'B533288065/' },
        { text: '"I tried 21 different types of sake, but I drank so much that I couldn’t even remember which one I liked best." — December 2025.', source: R + 'B527223944/' },
        { text: '"While the selection of sake is extensive, I felt that the quality wasn\'t quite up to par. It seems like it takes a long time for the sake to be replenished." — January 2026.', source: R + 'B521563973/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 日本酒が永遠に飲める店 たまり場PON、居酒屋・日本酒バー・バル、大阪市中央区難波1-4-3 難波チャンプビル 4F、大阪難波駅から徒歩2分、火〜日17:30〜23:30 (L.O.23:00)、月曜休み、予約可 (貸切は日〜木20名から、金土30名から)、席で先に料金を払う、カード・PayPay 可、電子マネー不可、56席、禁煙、2017年10月2日オープン、日本酒の90分飲み放題2,750円、時間無制限3,000円。店の紹介 (英訳): 全国の約150種の日本酒 (限定の珍しい酒も) をセルフで飲み放題、持ち込みや出前も可、平日はたこ焼き器などの調理器具やゲームの貸し出し。口コミ(2025年9月〜2026年7月): 時間無制限の飲み放題3,850円 (ビール、焼酎、ハイボール、チューハイも)、1杯600円の単品、酒蒸しのあさり、だし巻き、常連は料理を持ち込む、途中で出てまた戻れる、補充が遅い・つまみが少ないという声。',
      confidence: 'medium', sources: [TB, R + 'B514212034/', R + 'B514814244/', R + 'B516445618/', R + 'B518448828/', R + 'B518558538/', R + 'B519144976/', R + 'B521563973/', R + 'B525255344/', R + 'B527223944/', R + 'B533288065/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service rules explained by staff; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-4-3 難波チャンプビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目4番3号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B514212034/', R + 'B519144976/'],
    price_note: 'Plan prices from the Tabelog listing and September and December 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sake all-you-can-drink, 90 minutes', '¥2,750', 'Drinks', 'ask', 'ask', 'Tabelog listing.', 'sake_90'),
      it('', '', 'Unlimited-time all-you-can-drink', '¥3,000', 'Drinks', 'ask', 'ask', 'Tabelog listing; ¥3,850 in a September 2025 review.', 'sake_unlimited'),
      it('', '', 'Single glass of sake', '¥600', 'Drinks', 'ask', 'ask', 'December 2025 review.', 'sake_glass'),
    ] }, {
    cuisine: 'セルフの日本酒のバー: 冷蔵庫には全国の約150種の日本酒 (珍しい限定や季節の酒も) があり、好きな器に自分で注ぐ (食べログ、2025〜2026年の口コミ)・プラン: 日本酒の90分飲み放題2,750円 (食べログ)、時間無制限は3,000円 (食べログ) または3,850円 (2025年9月)。ビール、焼酎、ハイボール、チューハイも。単品は1杯600円 (2025年12月)・あさりの酒蒸しやだし巻きなどのつまみ。料理の持ち込みも可 (2025〜2026年の口コミ)',
    neighborhood: '難波1-4-3、難波チャンプビル4階。大阪難波駅から2分',
    gf_detail: '要確認。グルテンの情報なし。主役は日本酒で、つまみは少なく、料理を持ち込む客が多い。',
    vegan_detail: '要確認。ヴィーガンの情報なし。主役は日本酒で、つまみはあさりの酒蒸しやだし巻きなど。',
    notes: '[日本酒バー・なんば、自分で注ぐ飲み放題] 大阪難波駅から2分のビルの4階の隠れ家で、冷蔵庫には全国の約150種の日本酒があり、自分で注いで飲む。プランは90分2,750円から、時間無制限ならひと晩じゅう (掲載は3,000円、2025年9月の客はビールやチューハイも入って3,850円)。料理は少ないので、常連のように料理を持ち込むか出前を。平日はたこ焼き器や鍋の道具も借りられる。2026年1月には補充が遅くつまみが少ないという声も。禁煙、月曜休み。',
  });
}

// ================================================================ 韓国肉料理・石鍋イニョン 道頓堀店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27122584/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ishinabeinyon.com/';
  const WD = day(['17:00', '23:00']); const WE = day(['11:30', '23:00']);
  put({
    id: 'osaka_ishinabe_inyon_dotonbori', name: '韓国肉料理・石鍋イニョン 道頓堀店 (Ishinabe Inyon)', category: 'OMNI',
    lat: 34.668809, lng: 135.499485, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Hot pots finish with udon or a cheese pasta, and jeon and chijimi are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the broth is simmered from beef bones and chicken carcasses.',
    hours_raw: 'Mon, Wed–Fri 17:00–23:00; Sat, Sun and holidays 11:30–23:00; last order 22:30; closed Tuesday unless a holiday (Tabelog; official site). One September 2026 diner found it open from 16:30. Reservations accepted (Tabelog). Cards, e-money and PayPay (Tabelog). 35 seats at a counter and sunken tables; smoking allowed (Tabelog; official site; March 2026). English menu (official site). Interior renovated October 2022 (official site). Opened 12 May 2021 (Tabelog).',
    hours: { 0: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 2-1-8, ゼルコバトレ B1F, just inside the Dotonbori arcade — 2 min from Namba Stn',
    cuisine: 'Korean stone-pot specialist: a broth of beef bones, chicken carcasses and aromatic vegetables simmered over two days, traced to a grandmother\'s offal hot-pot shop, あたりや, by Nishikujo Station in 1945 (official site) · nakkopse stone pot of octopus, shrimp and domestic offal under a mountain of bean sprouts, spice level chosen (level 3 is standard), finished with udon or the shop\'s cheese pasta (Tabelog; April and October 2026) · wagyu bulgogi hot pot, samgyeopsal, yukhoe, bossam, seafood sundubu, chijimi, jeon, japchae, chige (2026 reviews)',
    website: SITE, gmaps: gm('石鍋イニョン 道頓堀'), menu_url: null,
    notes: "[Korean · Dotonbori, nakkopse in a hot stone pot] A basement Korean restaurant just inside the Dotonbori arcade, whose broth, simmered for two days from beef bones and chicken, the shop traces to a grandmother's offal hot-pot shop by Nishikujo Station in 1945. Order the nakkopse: octopus, shrimp and plump offal under a heap of bean sprouts in a bubbling stone pot, spice level of your choice, then finish with udon or the house cheese pasta. Bulgogi hot pot and chijimi are also praised. Side dishes draw complaints: frozen yukhoe and dry bossam in March 2026, and side dishes that seemed frozen in October 2026, when one diner found a single woman from Myanmar running the room. Smoking allowed; English menu; closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; signs the official site) and staff; one October 2026 diner found the shop run by a single woman from Myanmar'], origin: null, background: 'Official site (ishinabeinyon.com): a Korean stone-pot specialist in Dotonbori; the broth goes back to あたりや, an offal hot-pot shop by Nishikujo Station opened in 1945 by a grandmother in the shop\'s story, who cooked "food that is gentle on the body, delicious and gives strength"; beef bones, chicken carcasses and aromatic vegetables simmered over two days; renovated October 2022; English menu; smoking allowed. Tabelog: opened 12 May 2021; sister restaurant 石鍋KOH.', philosophy: '"Gentle on the body, delicious, and gives you strength" (the grandmother\'s motto, official site).', specialty: 'Nakkopse stone pot; cheese-pasta finish.',
      anecdotes: [
        { text: '"A rich and spicy broth made from simmering beef bones and chicken carcasses with plenty of vegetables for over 8 hours, perfected over two days." — April 2026, the stone-pot nakkopse.', source: R + 'B525822281/' },
        { text: '"The yukhoe was clearly frozen, and the bossam was dry." — March 2026.', source: R + 'B524351896/' },
        { text: '"The bulgogi was packed with meat, providing a satisfying sense of fullness!" — October 2026.', source: R + 'B537415047/' },
      ],
      japanese_sources_summary: '公式サイト (ishinabeinyon.com): 韓国肉料理・石鍋 イニョン 道頓堀店、牛骨・鶏ガラ・香味野菜を二日がかりで炊く出汁、昭和20年、西九条駅前で祖母が営んだホルモン鍋の店「あたりや」から80年、「身体にやさしく、美味しく、力がつく料理」、英語のメニュー、喫煙可能店、2022年10月全面改装、月水〜金17:00〜23:00・土日祝11:30〜23:00 (L.O.22:30)、火曜定休。食べログ (店舗会員): 韓国料理・居酒屋・鍋、大阪市中央区道頓堀2-1-8 ゼルコバトレ B1F、なんば駅から徒歩2分、予約可、カード・電子マネー・PayPay 可、35席、喫煙可、2021年5月12日オープン、姉妹店は石鍋KOH、名物の石鍋ナッコプセ (たこ、えび、国産のホルモン)、締めの濃厚なチーズのパスタ。口コミ(2026年3月〜10月): もやしの山の下にえびとたことホルモン、辛さを選べる (3が標準)、締めのうどん、和牛のプルコギ鍋、サムギョプサル、ユッケ、ポッサム、海鮮スンドゥブ、チヂミ、ジョン、チャプチェ、チゲ、ユッケが冷凍でポッサムがかたかったという声、副菜が冷凍のようだったという声、16時半から開いていた日も、ミャンマー出身の女性がひとりで切り盛りしていたという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B524351896/', R + 'B525443003/', R + 'B525822281/', R + 'B528390790/', R + 'B535520532/', R + 'B537415047/', R + 'B537621392/', R + 'B537667007/', R + 'B538251050/', R + 'B538488974/'] },
    cultural_comfort: { level: 'english', note: 'English menu for overseas guests (official site).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀2-1-8 ゼルコバトレ B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀二丁目1番8号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, SITE],
    price_note: 'No dated prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Stone-pot nakkopse (octopus, shrimp, offal)', '', 'Hot pot', 'ask', 'no', 'Tabelog; April and October 2026 reviews.', 'nakkopse'),
      it('', '', 'Cheese pasta to finish the hot pot', '', 'Hot pot', 'no', 'no', 'Tabelog listing.', 'cheese_pasta_shime'),
      it('', '', 'Wagyu bulgogi hot pot', '', 'Hot pot', 'ask', 'no', 'October 2026 review.', 'bulgogi_nabe'),
    ] }, {
    cuisine: '韓国の石鍋の専門店: 牛骨・鶏ガラ・香味野菜を二日がかりで炊いた出汁は、1945年に祖母が西九条駅前で営んだホルモン鍋の店「あたりや」から (公式サイト)・たこ、えび、国産のホルモンにもやしを山盛りにした石鍋のナッコプセは辛さを選べ (3が標準)、締めはうどんか店のチーズのパスタ (食べログ、2026年4月と10月)・和牛のプルコギ鍋、サムギョプサル、ユッケ、ポッサム、海鮮スンドゥブ、チヂミ、ジョン、チャプチェ、チゲ (2026年の口コミ)',
    neighborhood: '道頓堀2-1-8、ゼルコバトレ地下1階、道頓堀のアーケードの入ってすぐ。なんば駅から2分',
    gf_detail: '要確認。グルテンの情報なし。鍋の締めはうどんやチーズのパスタで、チヂミもある。',
    vegan_detail: 'ヴィーガンではありません。出汁は牛骨と鶏ガラ。',
    notes: '[韓国料理・道頓堀、熱々の石鍋のナッコプセ] 道頓堀のアーケードを入ってすぐの地下の韓国料理の店で、牛骨と鶏ガラで二日かけて炊く出汁は、1945年に西九条駅前で祖母が営んだホルモン鍋の店から続くという。頼むならナッコプセ。ぐつぐつ煮える石鍋に、たこ、えび、ぷりぷりのホルモンともやしの山、辛さは好みで、締めはうどんか店のチーズのパスタ。プルコギ鍋やチヂミの評価も高い。不満は副菜で、2026年3月はユッケが冷凍でポッサムがかたかった、10月は副菜が冷凍のようだったという声。10月にはミャンマー出身の女性がひとりで店を回していたそう。喫煙可、英語のメニューあり、火曜休み。',
  });
}

// ================================================================ 豚のしっぽと鶏のとさか なんば店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27135204/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '05:00']);
  put({
    id: 'osaka_buta_no_shippo_namba', name: '豚のしっぽと鶏のとさか なんば店 (Buta no Shippo to Tori no Tosaka)', category: 'OMNI',
    lat: 34.668145, lng: 135.503438, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Chicken nanban and other fried dishes are on the menu; the oden broth is chicken based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-broth oden, pork shabu-shabu and chicken dishes.',
    hours_raw: 'Daily 17:00–5:00 (last order 4:00); closed only at New Year (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master) and PayPay; no e-money (Tabelog). 44 seats: counter, booths, a low-ceilinged loft, tatami and an 8-person semi-private room (Tabelog; December 2025). Smoking allowed; wheelchair accessible (Tabelog). Drinks are strong (March 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-7-11, 上方ビル 1F — 5 min from Nippombashi Stn, 7 min from Namba Stn',
    cuisine: 'Izakaya of chicken and pork: homemade oden in a white chicken-bone broth, charcoal-grilled whole bone-in chicken thigh, Ishigaki Island Agu pork shabu-shabu (Tabelog) · bone-in chicken thigh course with two hours of drinks ¥3,800 (Tabelog) · pork tsukune, chicken sashimi and tataki, chicken nanban in large portions at the same price, grilled pork liver, shungiku salad, potato salad; starters such as yudofu with grated daikon or sake-steamed clams (October 2025–September 2026) · tea-based shochu with house tea leaves including a corn-tea highball; fresh-fruit sours (Tabelog; October 2025)',
    website: null, gmaps: gm('豚のしっぽと鶏のとさか なんば店'), menu_url: null,
    notes: "[Izakaya · Sennichimae, chicken-broth oden until 5 a.m.] A colourful Sennichimae izakaya open until 5 a.m., with counter, booths and a low loft upstairs. The house specialities are oden simmered in a white chicken-bone broth, a whole charcoal-grilled bone-in chicken thigh, and shabu-shabu of Agu pork from Ishigaki Island; the pork tsukune is the reviewers' pick. Portions run large, drinks run strong, and teas brewed in-house go into the shochu, including a corn-tea highball. Courses with two hours of drinks start at ¥3,800. Good for late groups; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: fresh chicken dishes and pork specialities a few steps from Namba Station, open until 5 a.m.; homemade chicken-broth oden, grilled chicken thigh, charcoal-grilled and shabu-shabu Agu pork from Ishigaki Island, tea-based shochu made with house tea leaves, fresh-fruit sours. A second shop, 豚のしっぽと鶏のとさか (27112749), is in shops.jsonl.', philosophy: null, specialty: 'Chicken-broth oden; bone-in chicken thigh; Agu pork shabu-shabu.',
      anecdotes: [
        { text: '"The pork tsukune is especially delicious, so be sure to order it!" — September 2026.', source: R + 'B512699821/' },
        { text: '"I noticed that there was a wide variety of tea-based drinks, including a unique corn tea highball" — October 2025.', source: R + 'B515627152/' },
        { text: '"However, the drinks were exceptionally strong, so be cautious when ordering plain sours." — March 2026.', source: R + 'B524551914/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 豚のしっぽと鶏のとさか なんば店、居酒屋・鶏料理・豚しゃぶ、大阪市中央区千日前1-7-11 上方ビル 1F、日本橋駅から徒歩5分、なんば駅から7分、毎日17:00〜翌5:00 (L.O.4:00)、年末年始のみ休み、予約可、カード (VISA、Master)・PayPay 可、電子マネー不可、44席 (カウンター、ボックス、ロフト、座敷、8名の半個室)、喫煙可、車いす可、骨つきもも焼きのコース2時間飲み放題つき3,800円。店の紹介 (英訳): 自家製の鶏の白湯のおでん、骨つきの鶏もも焼き、Ishigaki 島のアグー豚の炭火焼きとしゃぶしゃぶ、自家製の茶葉の茶割り、生の果物のサワー。口コミ(2025年10月〜2026年9月): 豚つくね、鶏刺しとたたき、大盛りでも同じ値段のチキン南蛮、豚レバーの焼き物、春菊のサラダ、ポテトサラダ、お通しの湯豆腐やあさりの酒蒸し、とうもろこし茶のハイボール、飲み物が濃い、ロフトは天井が低い、カラフルな店内。',
      confidence: 'medium', sources: [TB, R + 'B512699821/', R + 'B515627152/', R + 'B518686136/', R + 'B519128224/', R + 'B519398582/', R + 'B522308473/', R + 'B523270474/', R + 'B524551914/', R + 'B529664899/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night izakaya; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区千日前1-7-11 上方ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目7番11号 (go) 15m. Same building as osaka_matsusakagyu_yakiniku_m_sennichimae (address_ja "千日前1-7-11 上方ビル2F", 10 m) and osaka_okuwo_namba_sennichimae ("千日前1-7-11 上方ビル 1F", 17 m), so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course price from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Bone-in chicken thigh course with two hours of drinks', '¥3,800', 'Courses', 'ask', 'no', 'Tabelog listing.', 'momo_course'),
      it('', '', 'Chicken-broth oden', '', 'Oden', 'ask', 'no', 'Tabelog; October 2025 review.', 'tori_oden'),
      it('', '', 'Agu pork shabu-shabu', '', 'Hot pot', 'ask', 'no', 'Tabelog listing.', 'agu_shabu'),
    ] }, {
    cuisine: '鶏と豚の居酒屋: 鶏ガラの白湯で炊く自家製のおでん、炭火で焼く骨つきの鶏もも、Ishigaki 島のアグー豚のしゃぶしゃぶ (食べログ)・骨つきもも焼きのコースは2時間飲み放題つき3,800円 (食べログ)・豚つくね、鶏刺しとたたき、大盛りでも同じ値段のチキン南蛮、豚レバーの焼き物、春菊のサラダ、ポテトサラダ。お通しは大根おろしの湯豆腐やあさりの酒蒸しなど (2025年10月〜2026年9月)・自家製の茶葉の焼酎の茶割り (とうもろこし茶のハイボールも)、生の果物のサワー (食べログ、2025年10月)',
    neighborhood: '千日前1-7-11、上方ビル1階。日本橋駅から5分、なんば駅から7分',
    gf_detail: '要確認。グルテンの情報なし。チキン南蛮などの揚げ物があり、おでんの出汁は鶏。',
    vegan_detail: 'ヴィーガンではありません。鶏白湯のおでん、豚しゃぶ、鶏料理。',
    notes: '[居酒屋・千日前、朝5時までの鶏白湯のおでん] 朝5時まで開いている千日前のカラフルな居酒屋で、カウンター、ボックス、2階の低いロフト。名物は鶏ガラの白湯で炊くおでん、炭火で丸ごと焼く骨つきの鶏もも、Ishigaki 島のアグー豚のしゃぶしゃぶで、口コミのおすすめは豚つくね。量は多めで飲み物は濃いめ、焼酎は店で淹れたお茶で割り、とうもろこし茶のハイボールも。2時間飲み放題つきのコースは3,800円から。遅い時間のグループに。喫煙可。',
  });
}

save();
