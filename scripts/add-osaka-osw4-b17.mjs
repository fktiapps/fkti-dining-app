// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 17.
//   + ときすし 本店 Tokisushi Honten (casual sushi in Ura-Namba, ¥770 lunch bowls, "senbero" set)
//   + 黒毛和牛一頭買い焼肉 道頓堀みつる 総本店 Dotonbori Mitsuru (whole-cow wagyu yakiniku with conveyor delivery)
//   + 海鮮居酒屋 天秤棒 千日前本店 Kaisen Izakaya Tenbinbo (163-seat seafood izakaya open 10:00–3:00)
//   + 生産者直営 海鮮居酒屋 Rikusui (producer-run seafood izakaya with all-you-can-eat sushi, Ebisubashi)
//   Group-size line (brief): ときすし has a Namba Parks shop and a Higashi-Shinsaibashi shop (search results) — small
//   group. みつる runs 3 shops: Dotonbori, Shinsaibashi, Uehommachi (2025 press release) — small group. 天秤棒 and
//   Rikusui: one shop found each (an August 2026 reviewer calls Rikusui "the first branch"). None of the four is in
//   data/osaka.json (grep by name, Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ときすし 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27015959/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_tokisushi_honten_sennichimae', name: 'ときすし 本店 (Tokisushi Honten)', category: 'OMNI',
    lat: 34.66442, lng: 135.504078, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi comes with soy sauce or a brushed wasabi soy (August–September 2026); the "sushi yaki" is grilled with toppings, and lunch bowls come with miso soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish sushi restaurant; the chirashi comes with a white-fish bone soup (June 2026).',
    hours_raw: 'Daily 11:00–15:00 (last order 14:45) and 17:00–22:00 (last order 21:45); no regular holidays, may close at New Year and Obon (Tabelog). Reservations accepted; no seat selection; late arrivals may lose the table (Tabelog). No service charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC, Rakuten Edy, PayPay, Rakuten Pay, Alipay and WeChat Pay (Tabelog). 39 seats: 9 at the counter, 10 at tables, a 2nd-floor tatami room for 20; non-smoking; wheelchair accessible (Tabelog). English and Korean menus with photos, digital menu (Tabelog). The limited lunch chirashi sells out; the first floor fills by about 11:05 (June and September 2026). Pickled ginger was charged extra when requested (July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba Sennichimae 4-21, Ura-Namba, right behind Namba Grand Kagetsu — 8 min from Namba Stn',
    cuisine: 'Casual sushi in Ura-Namba since 2007: fresh, never-frozen tuna and seasonal fish, signature "sushi yaki" finished by grilling, a big fresh-fish platter (romanised on the listing as "Kujukumo Mori" and "Tsukumo Mori"), Kochi sake "Kure" (Tabelog shop text); fish from the central market and Izumisano port (July 2026) · lunch bowls ¥770 with miso soup: limited seafood bara-chirashi of salmon, aji, tuna, amberjack, octopus, cucumber, nagaimo, tamagoyaki and tobiko (June–September 2026); daily sea bream bowl (August 2026); "Toki Toki" set of 8 nigiri (September 2026) · "senbero" set of 2 drinks, 2 pieces of sushi and a side ¥1,000 before tax (June–July 2026; ¥1,100 in one June 2026 review) · sushi yaki ¥1,650, toro tekka maki ¥1,320, sea bream ¥275, sazae ¥550, red miso soup ¥198 (July 2026) · pairs of nigiri before tax: bluefin chutoro ¥400, negitoro ¥200, first bonito ¥350, seared sawara ¥350, salmon nakaochi ¥200; grilled eel ¥500; draft beer ¥490 (June 2026) · omakase mini course ¥3,300 with seared bonito and hamo in plum sauce (July 2026) · chawanmushi, grilled squid (August 2026)',
    website: 'http://www.tokisushi.jp/', gmaps: gm('ときすし 本店'), menu_url: null,
    notes: '[Sushi · Ura-Namba, ¥770 lunch bowls behind NGK] A long-running casual sushi counter just behind the Yoshimoto theatre, busy with tourists and locals. At lunch come at 11:00 for the limited ¥770 seafood chirashi (with soup); at night try the grilled "sushi yaki" and the ¥1,000 senbero set of two drinks, two nigiri and a side. English and Korean menus. Ask before ordering extras like pickled ginger, which was charged in July 2026.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 2 September 2007; never uses frozen tuna; popular with international visitors. Other shops in Namba Parks and Higashi-Shinsaibashi appear in search results (Lmaga, Retty).', philosophy: null, specialty: '"Sushi yaki"; ¥770 lunch bowls.',
      anecdotes: [
        { text: '"The restaurant was already busy with two tables and a counter occupied, but within 5 minutes, the first floor was completely full." — June 2026, just after 11 AM on a weekday.', source: R + 'B530188105/' },
        { text: '"... when I checked the bill, I noticed ... charged me for it." — July 2026, on asking for pickled ginger.', source: R + 'B507752254/' },
        { text: '"The place was bustling with inbound tourists ... I tried the wasabi soy sauce applied with a brush for the first time." — August 2026.', source: R + 'B534609894/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ときすし 本店、寿司・魚介・鍋、大阪市中央区難波千日前4-21、なんば駅から徒歩8分、毎日11:00〜15:00 (L.O. 14:45)、17:00〜22:00 (L.O. 21:45)、定休日なし (年末年始・お盆は休みあり)、予約可 (席は指定不可)、サービス料なし、カード・電子マネー・QR 決済可、39席 (カウンター9、テーブル10、2階座敷20)、禁煙、英語・韓国語のメニュー、2007年9月2日オープン、公式 tokisushi.jp。冷凍しない生のまぐろと旬の魚、名物の「Sushi Yaki」、鮮魚の盛り合わせ、Kochi の酒。口コミ(2026年6月〜9月): 数量限定の海鮮ばらちらし770円 (みそ汁つき)、鯛の丼、にぎり8貫のセット770円、せんべろセット1,000円 (税抜)、Sushi Yaki 1,650円、とろ鉄火巻1,320円、本まぐろ中とろ2貫400円、おまかせのミニコース3,300円、刷毛で塗るわさび醤油、ガリが有料だったという声、観光客が多い、11時すぎに1階が満席。',
      confidence: 'medium', sources: [TB, 'http://www.tokisushi.jp/', R + 'B438263669/', R + 'B445324639/', R + 'B507752254/', R + 'B529968201/', R + 'B530188105/', R + 'B531350335/', R + 'B531436847/', R + 'B531556619/', R + 'B532316961/', R + 'B533368702/', R + 'B533826290/', R + 'B534609894/', R + 'B535299303/', R + 'B535734966/', R + 'B538476581/', 'https://www.lmaga.jp/captionbyhyattnambaosaka/?p=207'] },
    cultural_comfort: { level: 'english', note: 'English and Korean menus with photos (Tabelog); wasabi soy is already mixed on the table, which a September 2026 reviewer saw as a help for foreign guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前4-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and shop website; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前4番21号 (go) 5m. Nearest records: bird's nest and Bird (9-17) 13 m, CAFE ANNON なんば本店 (4-20) 19 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530188105/', R + 'B531350335/', R + 'B529968201/', TB],
    price_note: 'Prices from June–September 2026 reviews; the June 2026 nigiri prices were before tax.', last_checked: TODAY, items: [
      it('', '', 'Seafood bara-chirashi bowl with miso soup (limited, lunch)', '¥770', 'Lunch', 'ask', 'no', 'June–September 2026 reviews.', 'bara_chirashi'),
      it('', '', '"Sushi yaki" (grilled sushi)', '¥1,650', 'Signature', 'ask', 'no', 'July 2026 review.', 'sushi_yaki'),
      it('', '', '"Senbero" set: 2 drinks, 2 nigiri, a side', '¥1,000 + tax', 'Sets', 'ask', 'no', 'June–July 2026 reviews.', 'senbero_set'),
      it('', '', 'Toro tekka maki', '¥1,320', 'Rolls', 'ask', 'no', 'July 2026 review.', 'toro_tekka'),
      it('', '', 'Omakase mini course', '¥3,300', 'Course', 'ask', 'no', 'July 2026 review.', 'omakase_mini'),
    ] }, {
    cuisine: '2007年から裏なんばにある気軽な寿司屋: 冷凍しない生のまぐろと旬の魚、焼いて仕上げる名物の「Sushi Yaki」、鮮魚の大きな盛り合わせ、Kochi の酒 (食べログの店の紹介)。魚は Central Market と Izumisano の漁港から (2026年7月)・昼の丼は770円でみそ汁つき: 数量限定の海鮮ばらちらし (サーモン、あじ、まぐろ、かんぱち、たこ、きゅうり、長芋、玉子焼き、とびこ) (2026年6〜9月)、日替わりの鯛の丼 (2026年8月)、にぎり8貫の「Toki Toki」セット (2026年9月)・飲み物2杯、寿司2貫、小鉢1品の「せんべろ」セット1,000円 (税抜) (2026年6〜7月、6月の口コミには1,100円とも)・Sushi Yaki 1,650円、とろ鉄火巻1,320円、鯛275円、さざえ550円、赤だし198円 (2026年7月)・2貫で税抜: 本まぐろ中とろ400円、ねぎとろ200円、初がつお350円、炙りさわら350円、サーモンの中落ち200円、うなぎの焼き500円、生ビール490円 (2026年6月)・かつおのたたきと鱧の梅肉のおまかせミニコース3,300円 (2026年7月)・茶碗蒸し、いかの焼き物 (2026年8月)',
    neighborhood: '難波千日前4-21、裏なんば、なんばグランド花月のすぐ裏。なんば駅から徒歩8分',
    gf_detail: '要確認。グルテンの情報なし。寿司は醤油か刷毛で塗るわさび醤油で (2026年8〜9月)。「Sushi Yaki」は具をのせて焼き、昼の丼にはみそ汁がつく。',
    vegan_detail: 'ヴィーガンではありません。魚の寿司屋で、ちらしには白身魚のあらの汁がつく (2026年6月)。',
    notes: '[寿司・裏なんば、NGK 裏の770円の昼丼] 吉本の劇場のすぐ裏、観光客にも地元の人にも人気の長く続く気軽な寿司屋。昼は11時に行って数量限定の770円の海鮮ちらし (汁つき) を。夜は焼いた「Sushi Yaki」と、飲み物2杯、にぎり2貫、小鉢の1,000円のせんべろセットを。英語と韓国語のメニューあり。ガリなどの追加は2026年7月に有料だったので先に確認を。',
  });
}

// ================================================================ 道頓堀みつる 総本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27006343/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '01:00']);
  put({
    id: 'osaka_dotonbori_mitsuru_sohonten', name: '黒毛和牛一頭買い焼肉 道頓堀みつる 総本店 (Dotonbori Mitsuru Sohonten)', category: 'OMNI',
    lat: 34.668867, lng: 135.503532, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Meat comes with a light tare or salt, liver with sesame oil (October 2026); the menu also has hamburger steak, sausages and a tororo yukke bowl.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a whole-cow wagyu yakiniku restaurant.',
    hours_raw: 'Daily 11:00–01:00; closed irregularly (Tabelog). Reservations accepted; held 10 minutes past the time (Tabelog). Appetiser ¥385 per person; from 22:00 a late-night charge of 15% of the food and drink bill (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC and other e-money, PayPay, au PAY, Alipay and WeChat Pay (Tabelog). 193 seats with counter, booths, tatami and private rooms for 2 to 30+; non-smoking (Tabelog). Ordering by tablet (September–October 2026); meat arrives by conveyor (since the August 2025 renewal, Tabelog). Groups waiting at the door at night (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-5-8, 柴田ビル 2F, on the Dotonbori river, opposite the former Shochiku Kakuza (FamilyMart building) — 5 min from Namba Stn exit 14',
    cuisine: 'Yakiniku of kuroge wagyu bought as whole cows, so rare cuts come cheap; reopened 1 August 2025 as the main shop with conveyor-belt delivery to the table (Tabelog shop text) · courses: Dotonbori course of 12 dishes ¥4,400, manager\'s course of 13 dishes ¥5,500, Mitsuru course of 16 dishes ¥8,250 (Tabelog, discounted) · October 2026 prices: special thick-cut liver ¥1,429, beef-tongue sashimi ¥1,099, special wagyu tongue ¥1,759, outside skirt ¥989, lean ribeye ¥769, top sirloin ¥989, special top sirloin ¥1,209, rice ¥329–384 · negi-maki tongue (tongue rolled around green onion), grilled hon-misuji shabu, sirloin cap, kimchi assortment (September 2026) · rare cuts: kuri, haneshita, kainomi, shinshin, flank (September 2026); grilled meat sushi, tongue yukhoe, steak (September 2026) · tororo yukke bowl at lunch (September 2026) · nakaochi, sausages, hamburger steak (October 2026)',
    website: 'http://www.dotonbori-mitsuru.com/', gmaps: gm('道頓堀みつる 総本店'), menu_url: null,
    notes: '[Yakiniku · Dotonbori, whole-cow wagyu on a conveyor] A big, bright yakiniku on the Dotonbori river that buys kuroge wagyu whole, so cuts like kuri, kainomi and misuji are on the tablet menu at fair prices, and your order rides to the table on a conveyor. Try the negi-maki tongue, thick-cut liver and the skirt; expect about ¥5,000 a head. Open 11:00 to 1:00, but a 15% late charge applies from 22:00. Reviewers in 2026 estimate most guests and staff are from overseas; one August diner found the tongue tough.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): renovated and reopened as the main shop on 1 August 2025; whole-cow kuroge wagyu purchasing. Per a 2025 press release (search result): the first Dotonbori Mitsuru opened in Dotonbori in 2000, with shops in Shinsaibashi and Uehommachi, three in all.', philosophy: null, specialty: 'Rare wagyu cuts; negi-maki tongue.',
      anecdotes: [
        { text: '"About 80% of the customers are foreigners. It\'s clearly a yakiniku spot aimed at inbound tourists." — August 2026.', source: R + 'B535201664/' },
        { text: '"Ordering is done via tablet, so there are no issues there ... When I left, there were three groups waiting." — October 2026, about ¥5,000 a head.', source: R + 'B537594728/' },
        { text: '"The tongue was tough and hard to chew, and the lean cuts weren\'t very tasty either." — August 2026.', source: R + 'B533601777/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 黒毛和牛一頭買い焼肉 道頓堀みつる 総本店、焼肉・ステーキ・居酒屋、大阪市中央区道頓堀1-5-8 柴田ビル 2F、道頓堀川沿い、なんば駅14番出口から徒歩5分、毎日11:00〜翌1:00、不定休、予約可、お通し385円、22時以降の来店は飲食代の15%の深夜料金、カード・電子マネー・QR 決済可、193席、個室 (2〜30名以上)、禁煙、2025年8月1日にリニューアルして総本店に、レーンで肉を席まで運ぶ、黒毛和牛の一頭買い、姉妹店は上本町店。口コミ(2026年8月〜10月): 特上厚切りレバー1,429円、牛タン刺し1,099円、特上和牛タン1,759円、ハラミ989円、ねぎ巻きタン、本ミスジのしゃぶ焼き、クリ、ハネシタ、カイノミ、シンシン、肉寿司、とろろユッケ丼、タブレットで注文、客もスタッフも外国人が多い、タンが硬かったという声も。',
      confidence: 'medium', sources: [TB, 'http://www.dotonbori-mitsuru.com/', R + 'B490764806/', R + 'B533601777/', R + 'B535174964/', R + 'B535201664/', R + 'B535207399/', R + 'B535856517/', R + 'B535984855/', R + 'B535987747/', R + 'B536609728/', R + 'B536716512/', R + 'B537052190/', R + 'B537594728/', R + 'B537995884/', R + 'B538272629/', R + 'B538396831/', 'https://www.prdesse.com/posts/download_file/21710/pdf/pdf_file'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet ordering; most guests from overseas by reviewers\' estimates (August–October 2026). No English-menu evidence on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-5-8 柴田ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and shop website; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目5番8号 (go) 8m. Nearest record: ぼんくら家 道頓堀店 (osaka_bonkuraya_dotonbori, 1-5-9) 14 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538396831/', TB],
    price_note: 'À la carte prices from an October 2026 review; courses from the Tabelog listing (discounted prices). 15% late-night charge from 22:00.', last_checked: TODAY, items: [
      it('', '', 'Special thick-cut liver', '¥1,429', 'Offal', 'ask', 'no', 'October 2026 review.', 'atsugiri_reba'),
      it('', '', 'Special wagyu tongue', '¥1,759', 'Tongue', 'ask', 'no', 'October 2026 review.', 'tokujo_tan'),
      it('', '', 'Negi-maki tongue', '', 'Tongue', 'ask', 'no', 'September 2026 reviews.', 'negimaki_tan'),
      it('', '', 'Outside skirt', '¥989', 'Yakiniku', 'ask', 'no', 'October 2026 review.', 'harami'),
      it('', '', 'Dotonbori course, 12 dishes', '¥4,400', 'Course', 'ask', 'no', 'Tabelog listing (discounted).', 'dotonbori_course'),
    ] }, {
    cuisine: '黒毛和牛を一頭買いするので希少部位も手ごろな焼肉。2025年8月1日に総本店としてリニューアルし、レーンで肉を席まで運ぶ (食べログの店の紹介)・コース: 道頓堀コース12品4,400円、店長おすすめ13品5,500円、みつるコース16品8,250円 (食べログ、割引後)・2026年10月の値段: 特上厚切りレバー1,429円、牛タン刺し1,099円、特上和牛タン1,759円、ハラミ989円、赤身リブロース769円、上ロース989円、特上ロース1,209円、ご飯329〜384円・ねぎ巻きタン、本ミスジのしゃぶ焼き、特上のサーロインキャップ、キムチの盛り合わせ (2026年9月)・希少部位: クリ、ハネシタ、カイノミ、シンシン、フランク (2026年9月)、肉寿司の炙り、タンのユッケ、ステーキ (2026年9月)・昼のとろろユッケ丼 (2026年9月)・中落ち、ソーセージ、ハンバーグ (2026年10月)',
    neighborhood: '道頓堀1-5-8 柴田ビル 2F、道頓堀川沿い、旧 Shochiku Kakuza の向かい (FamilyMart のビル)。なんば駅14番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。肉は軽めのたれか塩で、レバーはごま油で (2026年10月)。ハンバーグ、ソーセージ、とろろユッケ丼もある。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛一頭買いの焼肉店。',
    notes: '[焼肉・道頓堀、レーンで届く一頭買いの和牛] 道頓堀川沿いの大きく明るい焼肉店。黒毛和牛を一頭買いするので、クリ、カイノミ、ミスジなどもタブレットのメニューに手ごろな値段で並び、注文はレーンで席まで届く。ねぎ巻きタン、厚切りレバー、ハラミを。ひとり5,000円ほど。11時から深夜1時まで開いているが、22時以降は15%の深夜料金がかかる。2026年の口コミでは客もスタッフも外国人が多いという。8月にはタンが硬かったという声も。',
  });
}

// ================================================================ 天秤棒 千日前本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27005879/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '03:00']);
  put({
    id: 'osaka_kaisen_izakaya_tenbinbo_sennichimae', name: '海鮮居酒屋 天秤棒 千日前本店 (Kaisen Izakaya Tenbinbo Sennichimae Honten)', category: 'OMNI',
    lat: 34.66539, lng: 135.504353, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The lunch set pairs sashimi with tempura; the menu runs to fried dishes, gyoza, hot pots and soba.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; the lunch miso soup has fish in it (September 2026).',
    hours_raw: 'Daily 10:00–03:00, last order 02:00; closed 1 January (Tabelog). Lunch set meals only for walk-ins; lunch bookings order from the regular menu or a course (Tabelog). Appetiser ¥400, not charged for lunch sets or courses (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC and other e-money, and QR payment (Tabelog). 163 seats in 15 private rooms for 2 to 80, tables, tatami and sunken seating (Tabelog); a maze-like layout (September–October 2026). Smoking allowed, with a smoking room (Tabelog); smoking at the table (June 2026). No English menu (August 2026). Hot inside in July 2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 3-22, near Namba Grand Kagetsu, a fish tank at the door — 3 min from Namba Stn exit 2',
    cuisine: 'Seafood izakaya: fish bought at the market each morning, classic grilled and fried izakaya dishes, five kinds of hot pot including a whole-crab course, sake from Hokkaido to Okinawa (Tabelog shop text) · courses with all-you-can-drink: generous course of 11 dishes, Tenbinbo special ¥6,000, Wakasa course with grilled Wakasa mackerel and Kumamoto beef sashimi ¥7,000 (Tabelog); ¥5,000 course with a 1-litre or 1.8-litre bottle of sake on the table (July and October 2026); a ¥5,000 omakase of sashimi, salad, chawanmushi, mapo tofu, grilled fish, octopus, dashimaki, kara-age, gyoza, grilled nagaimo and soba (August 2026) · lunch: sashimi and tempura set ¥1,080 with eight tempura, three small dishes and fish miso soup (September 2026); rice and miso soup refills (July 2026) · sashimi boat platter (June 2026); live Ise lobster, aji, abalone and shellfish sashimi (September 2026); grilled hokke (September 2026) · shrimp mayo salad, grilled yam (June–September 2026); grilled horumon, gyoza (August 2026); chashu, katsuo tataki, brûlée ice cream (September 2026)',
    website: null, gmaps: gm('海鮮居酒屋 天秤棒 千日前本店'), menu_url: null,
    notes: '[Seafood izakaya · Sennichimae, sashimi from 10 a.m. to 3 a.m.] A sprawling 163-seat seafood izakaya behind NGK with a fish tank at the door, 15 private rooms and hours from 10:00 to 3:00. At lunch the ¥1,080 sashimi and tempura set (refills of rice and soup) is the draw; at night order the sashimi boat and grilled fish, or book a ¥5,000 course where a whole bottle of sake comes to the table. A local crowd, no English menu (August 2026), and smoking is allowed at the tables.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): seafood bought fresh at the market every morning; 15 private rooms for 2 to 80; open from noon to late night.', philosophy: null, specialty: 'Sashimi boat platter; lunch sashimi and tempura set.',
      anecdotes: [
        { text: '"Despite the area being filled with restaurants catering to tourists, this one had no English menu, and the atmosphere inside was fantastic. It was bustling with Japanese customers" — August 2026.', source: R + 'B533153256/' },
        { text: '"An elderly staff member kept bringing us drinks and even entertained us with some magic tricks during the meal." — August 2026, a banquet for 15.', source: R + 'B533217631/' },
        { text: '"The interior of this place is fascinating, with a maze-like layout" — September 2026.', source: R + 'B535952021/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 海鮮居酒屋 天秤棒 千日前本店、居酒屋・魚介・揚げ物、大阪市中央区難波千日前3-22、なんば駅2番出口から徒歩3分、毎日10:00〜翌3:00 (L.O. 2:00)、1月1日休み、予約可 (昼に予約すると定食は不可)、お通し400円 (昼の定食とコースは対象外)、カード・電子マネー・QR 決済可、163席、個室15室 (2〜80名)、喫煙可 (喫煙室あり)。毎朝市場で仕入れる魚、焼き物と揚げ物、カニを丸ごと使う鍋など鍋5種、Hokkaido から Okinawa までの地酒、天秤棒スペシャルコース6,000円、Wakasa の鯖の焼き物と Kumamoto の牛刺しのコース7,000円。口コミ(2026年6月〜10月): 刺身と天ぷらの定食1,080円 (天ぷら8種、小鉢3品、魚のみそ汁、ご飯とみそ汁はおかわり)、刺身の舟盛り、伊勢えびの活け造り、あわび、ほっけの焼き物、エビマヨサラダ、山芋の鉄板焼き、ホルモン焼き、餃子、5,000円のコースで一升瓶の日本酒、英語のメニューなし、日本人客が多い、迷路のような店内、席でたばこが吸える。',
      confidence: 'medium', sources: [TB, R + 'B417763071/', R + 'B500759020/', R + 'B530326256/', R + 'B530512616/', R + 'B533153256/', R + 'B533217631/', R + 'B533378445/', R + 'B535479330/', R + 'B535629106/', R + 'B535637892/', R + 'B535952021/', R + 'B536013601/', R + 'B536656862/', R + 'B537352907/', R + 'B537408173/', 'https://r.gnavi.co.jp/kc6j600/'] },
    cultural_comfort: { level: 'japanese', note: 'No English menu and a mostly Japanese crowd (August 2026); smoking at the tables (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前3-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前3番 (lot level only) 37m. Nearest records: 焼肉ホルモン 坂上 裏なんば (3-21) 12 m, 炭火焼き鳥 鴨尽 (3-19) 14 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536013601/', R + 'B533217631/', TB],
    price_note: 'Lunch price from a September 2026 review; courses from the Tabelog listing and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sashimi and tempura set meal (lunch; rice and miso soup refills)', '¥1,080', 'Lunch', 'no', 'no', 'September 2026 review.', 'sashimi_tempura_teishoku'),
      it('', '', 'Sashimi boat platter', '', 'Sashimi', 'ask', 'no', 'June 2026 review.', 'funamori'),
      it('', '', 'Omakase course with all-you-can-drink', '¥5,000', 'Course', 'ask', 'no', 'July–October 2026 reviews.', 'omakase_course'),
      it('', '', 'Tenbinbo special course with all-you-can-drink, 12 dishes', '¥6,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'tenbinbo_special'),
      it('', '', 'Wakasa course with all-you-can-drink, 12 dishes', '¥7,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'wakasa_course'),
    ] }, {
    cuisine: '海鮮居酒屋: 毎朝市場で仕入れる魚、焼き物や揚げ物の定番、カニを丸ごと使う鍋のコースなど鍋は5種、Hokkaido から Okinawa までの地酒 (食べログの店の紹介)・飲み放題つきのコース: たっぷりのコース11品、天秤棒スペシャル6,000円、Wakasa の鯖の焼き物と Kumamoto の牛刺しの Wakasa コース7,000円 (食べログ)、1リットルや一升瓶の日本酒が卓に置かれる5,000円のコース (2026年7月・10月)、刺身、サラダ、茶碗蒸し、麻婆豆腐、焼き魚、たこ、だし巻き、唐揚げ、餃子、長芋焼き、そばの5,000円のおまかせ (2026年8月)・昼: 天ぷら8種、小鉢3品、魚のみそ汁の刺身と天ぷらの定食1,080円 (2026年9月)、ご飯とみそ汁はおかわり自由 (2026年7月)・刺身の舟盛り (2026年6月)、伊勢えびの活け造り、あじ、あわび、貝の刺身 (2026年9月)、ほっけの焼き物 (2026年9月)・エビマヨサラダ、山芋の鉄板焼き (2026年6〜9月)、ホルモン焼き、餃子 (2026年8月)、チャーシュー、かつおのたたき、ブリュレのアイス (2026年9月)',
    neighborhood: '難波千日前3-22、なんばグランド花月の近く、入口に生け簀。なんば駅2番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。昼の定食は刺身と天ぷら。揚げ物、餃子、鍋、そばも多い。',
    vegan_detail: 'ヴィーガンではありません。海鮮居酒屋で、昼のみそ汁にも魚が入る (2026年9月)。',
    notes: '[海鮮居酒屋・千日前、朝10時から深夜3時まで刺身] NGK の裏、入口に生け簀のある163席の大きな海鮮居酒屋で、個室が15室、10時から翌3時まで開いている。昼は1,080円の刺身と天ぷらの定食 (ご飯とみそ汁はおかわり) がおすすめ。夜は舟盛りと焼き魚を頼むか、日本酒の瓶が卓に置かれる5,000円のコースを予約。地元の客が多く、英語のメニューはない (2026年8月)。席でたばこが吸える。',
  });
}

// ================================================================ Rikusui
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27138743/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'osaka_kaisen_izakaya_rikusui_ebisubashi', name: '生産者直営 海鮮居酒屋 Rikusui (Seisansha Chokuei Kaisen Izakaya Rikusui)', category: 'OMNI',
    lat: 34.669473, lng: 135.501669, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The all-you-can-eat menu mixes sushi, sashimi and tempura with fried fugu and fish nanban.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and sushi izakaya.',
    hours_raw: 'Daily 16:00–23:00, last order 22:30 (Tabelog). Reservations accepted (Tabelog). Early-bird pricing before 18:00: about half price, ¥4,180–4,400 with drinks (August 2026); after 18:00 the premium all-you-can-eat with drinks is ¥7,700 (Tabelog; August 2026). Women ¥1,000 off some courses (June–July 2026); children up to 5 free (Tabelog). Ordering by QR code on your phone (August–September 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC and other e-money, and QR payment (Tabelog). 93 seats with counter, tables, tatami and a semi-private room; non-smoking; English menu with photos (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-3-15, 戎橋NORTHビル 5F, off the Ebisubashi end of the arcade — 5 min from Namba Stn',
    cuisine: 'Producer-run seafood izakaya with all-you-can-eat ordering of sushi, tempura and straw-grilled dishes (Tabelog shop text) · Oshio all-you-can-eat course, 150 minutes, with abalone, bluefin tuna, sushi and tempura ¥6,050; with drinks ¥7,700 (Tabelog) · 3-hour Oshio course with grilled fugu to start; à la carte extra-large eel or anago ¥770, two pieces of ikura, bluefin or uni ¥660 (June 2026) · about 50 kinds of sushi including uni and ikura gunkan, grilled tuna collar (August–September 2026) · snow crab and sushi all-you-can-eat ¥9,000, tecchiri (fugu hot pot) and sushi ¥8,500, premium sushi ¥4,400 (October 2026) · toro-taku roll (July 2026) · welcome-party course of 8 dishes with 120 minutes of drinks ¥5,000: sashimi, potato salad, grilled and simmered fish, tempura, nigiri (July 2026)',
    website: null, gmaps: gm('海鮮居酒屋 Rikusui 心斎橋'), menu_url: null,
    notes: '[Seafood izakaya · Ebisubashi, all-you-can-eat sushi and tempura] A big, bright fifth-floor seafood izakaya at the Ebisubashi end of Shinsaibashi-suji, built around timed all-you-can-eat sushi, sashimi and tempura ordered on your phone. Come before 18:00, when the same spread costs about half. Reviews in 2026 are split: some praise the uni, ikura and value, while others report missing orders, a drinks-billing mix-up, and fish that did not match the photos. English menu.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 14 November 2023; "fresh ingredients directly from producers", sushi by skilled chefs. An August 2026 reviewer calls it the first branch of Rikusui. Company databases (search results) describe a Rikusui land-based aquaculture company founded in 2021 in Sakai, raising tiger puffer and trout; the link to this restaurant is not stated there.', philosophy: null, specialty: 'All-you-can-eat sushi and seafood.',
      anecdotes: [
        { text: '"If you enter before 6 PM, you get half off, making it an unbeatable value! I highly recommend going early." — August 2026.', source: R + 'B533603489/' },
        { text: '"Most concerning was that several items I ordered never arrived." — August 2026, a critical review.', source: R + 'B533429220/' },
        { text: '"After showing ... the reservation confirmation, ... would correct it at the register." — September 2026, on all-you-can-drink missing from the bill.', source: R + 'B535061933/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 生産者直営 海鮮居酒屋 Rikusui、居酒屋・魚介・寿司、大阪市中央区心斎橋筋2-3-15 戎橋NORTHビル 5F、なんば駅から徒歩5分、毎日16:00〜23:00 (L.O. 22:30)、予約可、カード・電子マネー・QR 決済可、93席 (カウンター6、テーブル76、座敷11)、半個室、禁煙、英語のメニュー、2023年11月14日オープン。生産者直送の食材、職人の握る寿司、天ぷらと藁焼き、オーダー式の食べ放題、あわびと本まぐろの食べ放題コース6,050円、飲み放題つき7,700円、5歳以下無料。口コミ(2026年6月〜10月): 18時前は半額ほどの早割、女性は1,000円引き、QR コードで注文、寿司は約50種、ウニといくら、ずわいがにと寿司の食べ放題9,000円、てっちりと寿司8,500円、とろたく巻き、5,000円の宴会コース、注文が届かない・会計の間違い・写真と違うという声もあり評価が分かれる。',
      confidence: 'medium', sources: [TB, R + 'B530872781/', R + 'B532322914/', R + 'B532356583/', R + 'B533429220/', R + 'B533541256/', R + 'B533546823/', R + 'B533603489/', R + 'B533616541/', R + 'B534632423/', R + 'B535061933/', R + 'B535104079/', R + 'B536104611/', R + 'B537631213/', R + 'B537993021/', R + 'B538254917/', 'https://hamoni.jp/shop/JjxppCGiHufOpq3eiemx', 'https://www.cbinsights.com/company/riksui'] },
    cultural_comfort: { level: 'english', note: 'English menu with photos (Tabelog); ordering by QR code on your phone (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-15 戎橋NORTHビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番15号 (go) 1m. Same building as 黒毛和牛焼肉善 難波心斎橋店 (osaka_yakiniku_zen_namba_shinsaibashi, 3F) 9 m away on its own point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530872781/', R + 'B537631213/', TB],
    price_note: 'Courses from the Tabelog listing and June–October 2026 reviews; prices depend on entry time.', last_checked: TODAY, items: [
      it('', '', 'Oshio all-you-can-eat course, 150 min (abalone, bluefin, sushi, tempura)', '¥6,050', 'Course', 'ask', 'no', 'Tabelog listing.', 'oshio_course'),
      it('', '', 'Oshio course with all-you-can-drink', '¥7,700', 'Course', 'ask', 'no', 'Tabelog listing.', 'oshio_nomihodai'),
      it('', '', 'Premium sushi all-you-can-eat', '¥4,400', 'Course', 'ask', 'no', 'October 2026 review; ¥4,400 early-bird in August 2026.', 'sushi_tabehodai'),
      it('', '', 'Snow crab and sushi all-you-can-eat', '¥9,000', 'Course', 'ask', 'no', 'October 2026 review.', 'kani_tabehodai'),
      it('', '', 'Tecchiri (fugu hot pot) and sushi all-you-can-eat', '¥8,500', 'Course', 'ask', 'no', 'October 2026 review.', 'tecchiri_tabehodai'),
    ] }, {
    cuisine: '生産者直営の海鮮居酒屋で、寿司、天ぷら、藁焼きをオーダー式の食べ放題で (食べログの店の紹介)・Oshio の食べ放題コース150分、あわび、本まぐろ、寿司、天ぷら6,050円、飲み放題つき7,700円 (食べログ)・3時間の Oshio コース、最初はふぐの焼き物。単品の特大うなぎか穴子770円、いくら・本まぐろ・ウニ2貫660円 (2026年6月)・ウニやいくらの軍艦、まぐろのかまの焼き物など寿司は約50種 (2026年8〜9月)・ずわいがにと寿司の食べ放題9,000円、てっちりと寿司8,500円、上の寿司4,400円 (2026年10月)・とろたく巻き (2026年7月)・刺身、ポテトサラダ、焼き魚と煮魚、天ぷら、にぎりの8品と120分飲み放題の宴会コース5,000円 (2026年7月)',
    neighborhood: '心斎橋筋2-3-15 戎橋NORTHビル 5F、アーケードの戎橋側。なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。食べ放題は寿司、刺身、天ぷらに、ふぐの唐揚げや魚の南蛮も。',
    vegan_detail: 'ヴィーガンではありません。魚介と寿司の居酒屋。',
    notes: '[海鮮居酒屋・戎橋、寿司と天ぷらの食べ放題] 心斎橋筋の戎橋側、ビルの5階にある大きく明るい海鮮居酒屋で、時間制の寿司、刺身、天ぷらの食べ放題をスマホで注文する。18時前に入れば同じ内容がほぼ半額に。2026年の口コミは分かれていて、ウニ、いくら、お得さをほめる声と、注文が届かない、飲み放題の会計の間違い、写真と違う魚という声がある。英語のメニューあり。',
  });
}

save();
