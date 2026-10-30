// Osaka sweep (2-mile circle around Dotonbori), batch 193 — name-revisit queue (Greg 2026-10-30: redo the shops
// passed over because the name sounded like a person's), nearest-first.
//   + 片岡篤司 Kataoka Atsushi (reservation-only sushi counter of the former Sushi Shizuku Nagahori head; Higashi-Shinsaibashi)
//   + 料理店オクノ Ryori Ten Okuno (playful Italian with natural wine; Nambanaka) — was skip()ped in b144 for the name
//   + 酒肴哲 Sakana Tetsu (oden and sakana counter, Tabelog Izakaya WEST 100 2024–2026; Nipponbashi)
//   + だいちゃん Daichan (handmade soba and Japanese dishes, one chef; Nipponbashi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 193);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 片岡篤司
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27144398/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_sushi_kataoka_atsushi', name: '片岡篤司 (Kataoka Atsushi)', category: 'MOM_AND_POP',
    lat: 34.67377, lng: 135.504027, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; omakase sushi with soy-marinated tuna, simmered eel, miso soup and an ebi-mayo roll add-on, so ask about soy sauce and glazes when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase sushi course of fish and shellfish.',
    hours_raw: 'Mon, Tue, Thu–Sun 18:00–23:00; closed Wednesday (Tabelog). Reservation only (Tabelog); bookings through the OMAKASE site or by Instagram DM @atushi.sushi, and diners report waits of about six months (September 2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners), Rakuten Edy, iD, QUICPay, PayPay, Rakuten Pay (Tabelog). 9 seats, 8 at the counter; non-smoking (Tabelog). Inside the Quinto Shinsaibashi Bldg, at the back on the left; nothing outside signals a sushi bar (September 2026 reviews). Opened 17 November 2024 per Tabelog; a review says October 2024.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-13-11, Quinto Shinsaibashi Bldg 1F (at the back) — about 5 min from Shinsaibashi Stn, 229 m from Nagahoribashi Stn',
    cuisine: 'Omakase sushi counter (9 seats) · sushi course ¥25,000 (October 2026), mostly nigiri after one or two small dishes · several kinds of shari matched to the toppings, red-vinegar seasoned and firm · examples (September 2026): Akashi sea bream, Awaji squid, Nemuro ikura with kombu dashi, charcoal-grilled Chiba hairtail, Kesennuma bonito, Lake Biwa trout, Otaru saury with matsutake rice, marinated tuna, chu-toro, Kishiwada kintaro sardine, Hokkaido botan shrimp with shrimp miso, simmered anago · add-ons: toro-taku roll, "adult" ebi-mayo roll · sake, wine, highballs',
    website: null, gmaps: gm('片岡篤司 東心斎橋'), menu_url: null,
    notes: "[Sushi · Higashi-Shinsaibashi, the hard-to-book counter of a young former Shizuku head chef] An unmarked counter at the back of an office building, behind a grey Italian-plaster wall with the name in vertical stainless-steel letters. Kataoka Atsushi led the popular Sushi Shizuku Nagahori branch before opening here in late 2024; bookings filled months ahead before the doors opened, and regulars now wait about six months. Diners describe a dedicated perfectionist who keeps experimenting, notably with several kinds of rice matched to different toppings (red vinegar, firm, on the larger side). The course is almost all nigiri — Akashi sea bream, Nemuro ikura, Otaru saury over matsutake rice, a surprisingly rich Kishiwada sardine — and regulars add the toro-taku roll and the 'adult' ebi-mayo. An apprentice, Kanta, works alongside. One first-timer found the rice too salty; most come back.",
    chef_bio: { chef_name: '片岡篤司 (Kataoka Atsushi)', roles: ['Owner-chef'], origin: null, background: 'Previously led the Nagahori branch of Sushi Shizuku in Osaka; went independent in late 2024 (September 2026 review; Tabelog opening date 17 November 2024). Reviewers call the chef young. Works with an apprentice named Kanta (October 2026 review).', philosophy: 'Several kinds of shari matched to different toppings, changed and refined from visit to visit (October 2026 review).', specialty: 'Omakase nigiri; ebi-mayo and toro-taku rolls.',
      anecdotes: [
        { text: '"The use of several types of rice for different toppings is one of the charms of this restaurant. It felt like a new type of rice was served this time that wasn\'t present during my last visit." — October 2026, sushi course ¥25,000, fifth visit.', source: R + 'B499950329/' },
        { text: '"Opened in October 2024, this sushi restaurant \'Kataoka Atsushi\' has gained immense popularity, with reservations fully booked for over three months before its opening." — September 2026.', source: R + 'B500034636/' },
      ],
      japanese_sources_summary: '食べログ: 片岡篤司、大阪市中央区東心斎橋1-13-11 クイント心斎橋ビル 1F、心斎橋駅から350m・長堀橋駅から229m、月火木〜日18:00〜23:00、水曜休み、完全予約制、カード・楽天Edy・iD・QUICPay・PayPay・楽天ペイ可、9席 (カウンター8)、禁煙、オープン日2024年11月17日。口コミ(2025年1月〜2026年10月): Sushi Shizuku Nagahoriを率いた片岡さんが独立、開店前から3か月以上予約が埋まり今は半年待ち、OMAKASEのサイトかインスタのDM (@atushi.sushi) で予約、グレーのイタリアの左官壁にステンレスの縦文字の店名、ネタに合わせて数種類のシャリ、赤酢でしっかりした塩気、固めで大きめ、すしコース25000円、明石の鯛、淡路のイカ、根室のいくら、千葉の太刀魚の炭火焼き、気仙沼の鰹、琵琶鱒、小樽の秋刀魚と松茸ご飯、漬けまぐろ、中トロ、岸和田の金太郎いわし、北海道のボタン海老、煮穴子、追加でトロたく巻き、大人のエビマヨ、弟子の Kanta さん、若い大将、塩が強すぎたという声も。',
      confidence: 'medium', sources: [TB, R + 'B499950329/', R + 'B500034636/', R + 'B500319714/', R + 'B536093203/', R + 'B536605100/', R + 'B537258507/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book months ahead (OMAKASE site or Instagram DM); counter omakase (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-13-11 クイント心斎橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目13番11号 (go) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499950329/', R + 'B536093203/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sushi course (omakase)', '¥25,000', 'Course', 'ask', 'no', 'October 2026.', 'course'),
      it('', '', 'Toro-taku roll (add-on)', '', 'Add-ons', 'ask', 'no', 'September–October 2026.', 'torotaku'),
      it('', '', 'Ebi-mayo roll (add-on)', '', 'Add-ons', 'ask', 'no', 'September–October 2026.', 'ebimayo'),
    ] }, {
    cuisine: 'おまかせのすしのカウンター (9席)・すしコース25000円 (2026年10月)、小皿1〜2品のあとはほぼ握り・ネタに合わせた数種類のシャリ、赤酢でしっかり、固め・例 (2026年9月): 明石の鯛、淡路のイカ、根室のいくらと昆布だし、千葉の太刀魚の炭火焼き、気仙沼の鰹、琵琶鱒、小樽の秋刀魚と松茸ご飯、漬けまぐろ、中トロ、岸和田の金太郎いわし、北海道のボタン海老と海老味噌、煮穴子・追加: トロたく巻き、大人のエビマヨ・日本酒、ワイン、ハイボール',
    neighborhood: '東心斎橋1-13-11 クイント心斎橋ビル 1F (奥)。心斎橋駅から徒歩5分ほど、長堀橋駅から229m',
    gf_detail: '要確認。グルテンの情報なし。おまかせのすしで、漬けまぐろ、煮穴子、味噌汁、追加のエビマヨ巻きもあるので、予約のときに醤油やツメについて確認を。',
    vegan_detail: 'ヴィーガンではありません。魚介のおまかせのすしのコース。',
    notes: '[すし・東心斎橋、元 Sushi Shizuku の若い大将の予約困難なカウンター] オフィスビルの奥にある看板のないカウンター。グレーのイタリアの左官壁に、ステンレスの縦文字で店名。片岡篤司さんは人気のSushi Shizuku Nagahoriを率いたあと、2024年の終わりに独立。開店前から数か月先まで予約が埋まり、今は半年待ちという常連も。ネタに合わせて何種類ものシャリ (赤酢、固め、大きめ) を使い分け、来るたびに進化させる完璧主義の大将という声。コースはほとんど握りで、明石の鯛、根室のいくら、松茸ご飯にのせた小樽の秋刀魚、驚くほど濃い岸和田のいわし。常連はトロたく巻きと「大人のエビマヨ」を追加する。弟子の Kanta さんも一緒に。初めての人には塩が強すぎたという声もあるが、多くはまた来る。',
  });
}

// ================================================================ 料理店オクノ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27138293/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:00', '23:30']);
  put({
    id: 'osaka_ryoriten_okuno_nambanaka', name: '料理店オクノ (Ryori Ten Okuno)', category: 'OMNI',
    lat: 34.663292, lng: 135.50011, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; handmade pasta, fried fish and cream sauces are on the courses, but dishes change daily, so ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prosciutto, foie gras, beef, lamb, wild boar, fish and cheese run through the courses.',
    hours_raw: 'Daily 12:00–14:30 and 17:00–23:30; closing days not fixed (Tabelog). Lunch by reservation only: chef\'s omakase of 5 dishes ¥3,500 or 8 dishes ¥5,000 (Tabelog). Dinner courses and à la carte; reservations recommended (Tabelog reviews). Cards and PayPay; no e-money (Tabelog). 17 seats: 5 at the counter, three tables of 4; non-smoking; children and strollers welcome; sommelier on staff (Tabelog). One October 2026 diner reports 20–30 minutes between courses with a single chef cooking. Opened 13 September 2023 (Tabelog); a regular has come since the previous ownership.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 1-16-4 — 3 min from Nankai Namba Stn',
    cuisine: 'Playful Italian from an open kitchen, mixing Italian regional cooking with Japanese, Chinese and ethnic ideas (17 seats) · omakase courses (5, 7 or 8 dishes; lunch 5 dishes ¥3,500, 8 dishes ¥5,000) or à la carte · handmade pasta with seasonal sauces (Ezo deer, porcini, ragù, truffle and pork, fish and pesto) · foie gras omelet · carpaccio · crisp-skinned Spanish mackerel · lamb hamburg · red-wine-braised beef cheek · baked cheese stuffed with mushrooms and wild boar · homemade ricotta with prosciutto · natural wines chosen by sommelier staff, by the decanter',
    website: null, gmaps: gm('料理店オクノ 難波中'), menu_url: null,
    notes: "[Italian · Nambanaka, playful omakase and natural wine] A tucked-away open-kitchen Italian a few minutes from Nankai Namba that blends regional Italian cooking with Japanese, Chinese and ethnic ideas, and changes the menu daily. Choose an omakase (5, 7 or 8 dishes) or go à la carte: regulars return for the foie gras omelet, a lamb hamburg, handmade pasta with seasonal sauces (Ezo deer, porcini, truffle and pork), red-wine-braised beef cheek, and a baked cheese stuffed with mushrooms and wild boar. The staff sommeliers pour natural wine, red and white by the decanter. One chef cooks, so a full course can take close to three hours. Lunch is omakase only and must be reserved (¥3,500 or ¥5,000).",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Italian restaurant that opened on 13 September 2023 (Tabelog); a regular has visited since the previous ownership (June 2025 review). Dishes cooked by one chef (October 2026 review).', philosophy: 'Italian regional cooking combined with Japanese, Chinese and ethnic ideas; a playful, daily-changing menu (Tabelog, shop-provided).', specialty: 'Handmade pasta with seasonal sauces; foie gras omelet; natural wine.',
      anecdotes: [
        { text: '"I was really happy to see the return of the foie gras omelet, and I enjoyed it again today… I also tried the lamb hamburger for the first time, and it was delightful." — October 2026, fourth visit.', source: R + 'B508853323/' },
        { text: '"The highlight was the baked cheese stuffed with mushrooms and wild boar—it was the most impressive dish!" — October 2026, omakase course.', source: R + 'B538010138/' },
      ],
      japanese_sources_summary: '食べログ: 料理店オクノ、大阪市浪速区難波中1-16-4、南海なんば駅から徒歩3分、毎日12:00〜14:30・17:00〜23:30、不定休、ランチは予約のみでおまかせ5品3500円か8品5000円、カード・PayPay可、電子マネー不可、17席 (カウンター5、テーブル4×3)、禁煙、子供・ベビーカー可、ソムリエあり、オープン日2023年9月13日。店の紹介: オープンキッチンの遊び心あるイタリアン、イタリアの郷土料理に和・中・エスニックの発想、季節で変わるソースの手打ちパスタ (Ezo の鹿、ポルチーニ)、ソムリエのスタッフが選ぶ自然派ワイン、日替わり、おまかせコース。口コミ(2025年6月〜2026年10月): フォアグラのオムレツ、カルパッチョ、皮のパリッとした鰆、羊のハンバーグ、牛ほほ肉の赤ワイン煮、きのこと猪を詰めた焼きチーズ、魚とジェノベーゼのパスタ、トリュフと豚のパスタ、自家製リコッタと生ハム、デキャンタのワイン、シェフ一人で料理して皿の間が20〜30分、前のオーナーのころから通う常連。',
      confidence: 'medium', sources: [TB, R + 'B508853323/', R + 'B536119227/', R + 'B536135727/', R + 'B537311600/', R + 'B538006037/', R + 'B538010138/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; lunch is reserved omakase only (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-16-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目16番4号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Lunch prices from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase, 5 dishes (reservation only)', '¥3,500', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'lunch5'),
      it('', '', 'Lunch omakase, 8 dishes (reservation only)', '¥5,000', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'lunch8'),
      it('', '', 'Foie gras omelet', '', 'À la carte', 'ask', 'no', 'October 2026.', 'foiegras'),
      it('', '', 'Lamb hamburg', '', 'À la carte', 'ask', 'no', 'September–October 2026.', 'lamb'),
    ] }, {
    cuisine: 'オープンキッチンの遊び心あるイタリアン、イタリアの郷土料理に和・中・エスニックの発想 (17席)・おまかせコース (5品、7品、8品。ランチは5品3500円、8品5000円) かアラカルト・季節のソースの手打ちパスタ (Ezo の鹿、ポルチーニ、ラグー、トリュフと豚、魚とジェノベーゼ)・フォアグラのオムレツ・カルパッチョ・皮のパリッとした鰆・羊のハンバーグ・牛ほほ肉の赤ワイン煮・きのこと猪を詰めた焼きチーズ・自家製リコッタと生ハム・ソムリエのスタッフが選ぶ自然派ワイン、デキャンタで',
    neighborhood: '難波中1-16-4。南海なんば駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースには手打ちパスタ、魚のフリット、クリームソースがあり、料理は日替わりなので予約のときに確認を。',
    vegan_detail: 'ヴィーガンではありません。生ハム、フォアグラ、牛、羊、猪、魚、チーズがコースの中心。',
    notes: '[イタリアン・難波中、遊び心あるおまかせと自然派ワイン] 南海なんば駅から数分の隠れ家のような、オープンキッチンのイタリアン。イタリアの郷土料理に和・中・エスニックの発想を合わせ、メニューは日替わり。おまかせ (5品、7品、8品) かアラカルトで、常連が通うのはフォアグラのオムレツ、羊のハンバーグ、季節のソースの手打ちパスタ (Ezo の鹿、ポルチーニ、トリュフと豚)、牛ほほ肉の赤ワイン煮、きのこと猪を詰めた焼きチーズ。ソムリエのスタッフが自然派ワインを、赤も白もデキャンタで。料理はシェフ一人なので、コースは3時間近くかかることも。ランチはおまかせのみで要予約 (3500円か5000円)。',
  });
}

// ================================================================ 酒肴哲
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27050565/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_sakana_tetsu_nipponbashi', name: '酒肴哲 (Sakana Tetsu)', category: 'OMNI',
    lat: 34.664044, lng: 135.505599, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; oden broth and doteyaki are usually soy- and miso-seasoned, and the finish is udon.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden broth is dashi, and the sakana are fish, offal and meat.',
    hours_raw: 'Mon–Sat 17:00–23:00 (last order 22:30, last seating 22:00); closed Sunday, and Sunday–Monday when Monday is a holiday; other irregular closures announced on Instagram (Tabelog). Reservations accepted; stays may be limited to 2 hours when busy; walk-ins possible right at 17:00 on weekdays, reservations essential later (Tabelog; September 2026 review). Cards accepted; no e-money or QR (Tabelog). 15 seats: an L-shaped counter of 10 and one table of 5 (tables for groups of three or more); non-smoking, smoking area outside; wheelchair accessible (Tabelog). Tabelog Izakaya WEST Top 100 in 2024, 2025 and 2026. Opened 27 February 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 2-7-27, in a narrow back alley — about 8 min from Nipponbashi Stn (Kintetsu, Sakaisuji Line)',
    cuisine: 'Oden and sakana (small dishes for drinking) counter (15 seats) · oden served piece by piece, each heated in a small pot of the broth: daikon, potato, egg · doteyaki · potato salad · roast beef with onion and a mild spiced sauce · thick-cut Spanish mackerel sashimi with salt and vinegar · sea bream, pike conger, squid, chicken liver, soft roe, tofu, yuba, octopus, tomato with cheese · udon in the oden broth to finish · beer in thin glasses, sake, shochu, wine',
    website: null, gmaps: gm('酒肴哲 日本橋'), menu_url: null,
    notes: "[Oden izakaya · Nipponbashi, a back-alley counter and a three-time Tabelog Top 100] An inconspicuous counter in a narrow alley behind Nipponbashi Station, filled with the smell of oden, that has made Tabelog's Izakaya WEST Top 100 in 2024, 2025 and 2026. The oden comes almost kaiseki-style: each piece is warmed to order in a little pot of the deep, rich broth and the broth goes back to the main pot, and the meal ends with udon in that broth. Around it, small carefully made plates — the doteyaki one diner calls the best anywhere, potato salad, lightly dressed roast beef, thick slices of salt-and-vinegar Spanish mackerel. The à la carte board carries no prices, so it's easy to run up a bill. One regular noticed the staff pacing each dish to a slow eater without being asked. Walk in right at 5 pm on a weekday; book for later.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Oden and sakana izakaya that opened on 27 February 2010; Tabelog Izakaya WEST Top 100 in 2024, 2025 and 2026 (Tabelog).', philosophy: 'Dishes that put the ingredients and their match with drink ahead of show (July 2026 review).', specialty: 'Oden warmed piece by piece; doteyaki; udon in oden broth.',
      anecdotes: [
        { text: '"The broth was transferred to a small pot for heating, ensuring no waste as it was returned to the main pot after heating." — September 2026, oden.', source: R + 'B535690604/' },
        { text: '"The person I visited with had a very slow eating pace. The staff noticed this without us saying anything and timed the serving of the next dish perfectly to match our eating speed." — October 2026, second visit.', source: R + 'B532956491/' },
      ],
      japanese_sources_summary: '食べログ: 酒肴哲、大阪市中央区日本橋2-7-27、日本橋駅 (近鉄・堺筋線) から徒歩8分ほど、月〜土17:00〜23:00 (L.O. 22:30、最終入店22:00)、日曜休み、月曜祝日なら日月連休、ほかに不定休あり (インスタで告知)、予約可、混雑時は2時間制、カード可、電子マネー・QR不可、15席 (カウンター10、テーブル5×1、テーブルは3名から)、禁煙 (外に喫煙所)、車椅子可、食べログ 居酒屋 WEST 百名店 2024・2025・2026、オープン日2010年2月27日。口コミ(2026年7月〜10月): 日本橋駅裏の細い路地の目立たない店、L字のカウンター、おでんの香り、おでんは小鍋で温めてだしは鍋に戻す、おでん懐石のよう、大根、じゃがいも、玉子、どて焼き、ポテトサラダ、ローストビーフ、厚切りの鰆の刺身、鯛、鱧、イカ、鶏レバー、白子、豆腐、湯葉、タコ、トマトとチーズ、締めはおでんのだしのうどん、薄いグラスのビール、アラカルトに値段の記載なし、食べるのが遅い連れに合わせて料理を出してくれた、平日17時なら予約なしで入れることも。',
      confidence: 'medium', sources: [TB, R + 'B532956491/', R + 'B535529387/', R + 'B535690604/', R + 'B536559782/', R + 'B536697150/', R + 'B538155982/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead after 17:00; à la carte board has no prices (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-7-27',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目7番27号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535529387/', R + 'B538155982/', R + 'B535690604/'],
    price_note: 'No prices on the board (September 2026 review).', last_checked: TODAY, items: [
      it('', '', 'Oden (daikon, potato, egg)', '', 'Oden', 'ask', 'no', 'October 2026.', 'oden'),
      it('', '', 'Doteyaki', '', 'Sakana', 'ask', 'no', 'September–October 2026.', 'doteyaki'),
      it('', '', 'Spanish mackerel sashimi', '', 'Sakana', 'ask', 'no', 'September 2026.', 'sawara'),
      it('', '', 'Udon in oden broth', '', 'To finish', 'no', 'no', 'October 2026.', 'udon'),
    ] }, {
    cuisine: 'おでんと酒肴のカウンター (15席)・おでんは一つずつ小鍋のだしで温めて: 大根、じゃがいも、玉子・どて焼き・ポテトサラダ・玉ねぎとやさしいスパイスのソースのローストビーフ・塩と酢の厚切りの鰆の刺身・鯛、鱧、イカ、鶏レバー、白子、豆腐、湯葉、タコ、トマトとチーズ・締めはおでんのだしのうどん・薄いグラスのビール、日本酒、焼酎、ワイン',
    neighborhood: '日本橋2-7-27、細い裏路地。日本橋駅 (近鉄・堺筋線) から徒歩8分ほど',
    gf_detail: '要確認。グルテンの情報なし。おでんのだしやどて焼きはふつう醤油や味噌で味つけし、締めはうどん。',
    vegan_detail: 'ヴィーガンではありません。おでんのだしは魚介のだしで、酒肴は魚、ホルモン、肉。',
    notes: '[おでんの居酒屋・日本橋、裏路地のカウンター、食べログ百名店3回] 日本橋駅裏の細い路地にある目立たないカウンターで、おでんの香りに包まれる。食べログ 居酒屋 WEST 百名店に2024・2025・2026年と選ばれている。おでんはまるで懐石のように、一つずつ注文を受けてから小鍋の濃い深いだしで温め、だしは鍋に戻す。締めはそのだしのうどん。まわりにはていねいな小皿。どこよりもおいしいという声のどて焼き、ポテトサラダ、あっさりのローストビーフ、塩と酢の厚切りの鰆。アラカルトの札に値段がないので、頼みすぎると高くつく。食べるのが遅い連れに合わせて、言わなくても次の料理を出してくれたという声も。平日17時ちょうどなら予約なしでも。それ以降は予約を。',
  });
}

// ================================================================ だいちゃん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27079497/'; const R = TB + 'dtlrvwlst/';
  const N = day(['17:00', '23:00']); const L = day(['11:45', '14:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_soba_daichan_nipponbashi', name: 'だいちゃん (Daichan)', category: 'OMNI',
    lat: 34.663599, lng: 135.50536, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Handmade soba from Nagano buckwheat, and a reviewer had juwari (100% buckwheat) soba, but the tsuyu is soy-based and there is tempura; ask which soba is juwari that day.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the soba broth is dashi, and the side dishes include beef, squid, clams and shrimp tempura.',
    hours_raw: 'Mon and Wed 17:00–23:00; Thu–Sun 11:45–14:00 and 17:00–23:00; closed Tuesday and the fourth Monday (Tabelog). Reservations accepted; call ahead if bringing children (Tabelog). Cards and PayPay per Tabelog; a June 2026 diner says lunch is cash only. 9 counter seats; non-smoking (Tabelog). Opened 1 March 2014 (Tabelog).',
    hours: { 0: N, 2: N, 3: L, 4: L, 5: L, 6: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 2-7-20, near NGK — about 5 min from Kintetsu Nipponbashi and Nankai Namba Stns',
    cuisine: 'Handmade soba and Japanese dishes at a 9-seat counter, one chef · thin, white soba from Nagano buckwheat; juwari soba; zaru with wasabi, oroshi hiyakake, curry soba, soba with eggplant and myoga · shrimp tempura, chicken tempura, seasoned egg · night: omakase small dishes and a Japanese course: beef and komatsuna, marinated firefly squid, fried ginkgo, grilled sesame tofu, clams with vinegar miso, salt-grilled mackerel, lotus-root dumplings, chestnut rice, saikyo-yaki, beef shigureni · sake and shochu with sobayu',
    website: null, gmaps: gm('だいちゃん 日本橋 蕎麦'), menu_url: null,
    notes: "[Soba · Nipponbashi near NGK, a one-chef counter for lunch soba and evening sake] A clean, calm counter of nine seats where one chef makes the soba in the shop from Nagano buckwheat — thin, pale and springy, with juwari on offer. Lunch (Thursday to Sunday) is zaru with fresh wasabi, oroshi hiyakake or curry soba, with hot, thin-battered shrimp tempura one diner calls perfect; one diner found portions small. Evenings turn into a sake stop: omakase small plates such as marinated firefly squid, grilled sesame tofu in dashi and clams with vinegar miso, a Japanese course with salt-grilled mackerel and chestnut rice, and soba to finish, with shochu cut with sobayu. Lunch is cash only, per a June 2026 diner.",
    chef_bio: { chef_name: null, roles: ['Chef (runs the counter alone, per January and June 2026 reviews)'], origin: null, background: 'Soba and Japanese restaurant that opened on 1 March 2014 (Tabelog); soba made in-house from Nagano buckwheat (February 2026 review).', philosophy: null, specialty: 'Handmade thin soba; juwari soba; shrimp tempura.',
      anecdotes: [
        { text: '"The handmade soba was thin, had a great texture, and was truly delicious with just the right amount of chewiness… the shrimp tempura was amazing! It was freshly fried, hot, with a thin, crispy batter." — June 2026, Zaru (with wasabi) and Oroshi Hiyakake, large size.', source: R + 'B530120327/' },
        { text: '"The Ju-wari soba was simple yet delightful. I tried two types: the plain soba and the one with eggplant and myoga." — September 2026.', source: R + 'B536162319/' },
      ],
      japanese_sources_summary: '食べログ: だいちゃん、大阪市中央区日本橋2-7-20、近鉄日本橋駅・南海なんば駅から徒歩5分ほど、月・水17:00〜23:00、木〜日11:45〜14:00・17:00〜23:00、火曜と第4月曜休み、予約可、子連れは電話で確認、カード・PayPay可、9席 (カウンターのみ)、禁煙、オープン日2014年3月1日。口コミ(2026年1月〜9月): 長野県産のそば粉の手打ちそば、細くて白い、十割そば、ざる (わさび)、おろし冷かけ、カレーそば、茄子と茗荷のそば、海老天、とり天、味玉、夜はおまかせの酒肴と和食のコース (牛肉と小松菜、ホタルイカの沖漬け、銀杏の素揚げ、焼き胡麻豆腐、あさりのぬた、塩鯖、蓮根まんじゅう、栗ご飯、西京焼き、牛のしぐれ煮)、そば湯割りの焼酎、料理人ひとりで営業、量は少なめという声、昼は現金のみという声、NGKの前。',
      confidence: 'medium', sources: [TB, R + 'B516559198/', R + 'B521371638/', R + 'B523269890/', R + 'B529497644/', R + 'B530120327/', R + 'B536162319/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter only; bring cash for lunch (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-7-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目7番20号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530120327/', R + 'B536162319/'],
    price_note: 'No prices in the reviews read.', last_checked: TODAY, items: [
      it('ざる（わさび）', '', 'Zaru soba with wasabi', '', 'Soba', 'ask', 'no', 'June 2026; large size available.', 'zaru'),
      it('', '', 'Oroshi hiyakake (cold soba with grated daikon)', '', 'Soba', 'ask', 'no', 'June 2026.', 'oroshi'),
      it('', '', 'Juwari soba', '', 'Soba', 'ask', 'no', 'September 2026.', 'juwari'),
      it('', '', 'Shrimp tempura', '', 'Sides', 'no', 'no', 'June 2026.', 'ebiten'),
    ] }, {
    cuisine: '9席のカウンターで料理人ひとりの手打ちそばと和食・長野県産のそば粉の細くて白いそば、十割そば、ざる (わさび)、おろし冷かけ、カレーそば、茄子と茗荷のそば・海老天、とり天、味玉・夜: おまかせの酒肴と和食のコース (牛肉と小松菜、ホタルイカの沖漬け、銀杏の素揚げ、焼き胡麻豆腐、あさりのぬた、塩鯖、蓮根まんじゅう、栗ご飯、西京焼き、牛のしぐれ煮)・日本酒、そば湯割りの焼酎',
    neighborhood: '日本橋2-7-20、NGKの近く。近鉄日本橋駅・南海なんば駅から徒歩5分ほど',
    gf_detail: '要確認。長野県産のそば粉の手打ちそばで、十割そばを食べた人もいるが、つゆは醤油ベースで天ぷらも。その日の十割はどれか確認を。',
    vegan_detail: 'ヴィーガンではありません。そばのつゆはだしで、一品には牛、イカ、あさり、海老天も。',
    notes: '[そば・日本橋、NGKの近く、料理人ひとりのカウンター、昼はそば、夜は日本酒] 9席の清潔で落ち着いたカウンターで、料理人がひとりで長野県産のそば粉を店で打つ。細くて白く、コシのあるそばで、十割も。ランチ (木〜日) はわさびのざる、おろし冷かけ、カレーそばに、薄い衣で熱々の海老天。量が少なめという声も。夜は日本酒の店になり、ホタルイカの沖漬け、だしをはった焼き胡麻豆腐、あさりのぬたなどのおまかせの酒肴、塩鯖や栗ご飯の和食のコース、締めにそば、そば湯割りの焼酎も。2026年6月の口コミによると昼は現金のみ。',
  });
}

save();
