// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw4 (lane: Tabelog id mod 4 = 3), batch 1.
//   + SUGALABO V (Louis Vuitton Maison Osaka Midosuji 7F; Tabelog Award Bronze 2021–2026; chef changed in 2026)
//   + Bar マスダ Bar Masuda (cocktail bar on Souemoncho since 1958, three floors; Tabelog Bar 100 2022)
//   + アラビヤコーヒー ARABIYA Coffee (kissaten between Ebisubashi-suji and Hozenji since 1951; second generation)
//   + 御堂筋ロッヂ Midosuji Lodge (yoshoku in a Midosuji basement since 2011; Tabelog Yoshoku 100)
//   Chain check: SUGALABO V is the Osaka sister of SUGALABO (Tokyo) and the only Louis Vuitton collaboration restaurant
//   in Japan (Tabelog); two restaurants, not a chain. Bar Masuda: one address since 1958 (Tabelog). ARABIYA: one shop
//   plus its own roastery in Taisho-ku and an online shop (official site). Midosuji Lodge: one of four small shops of
//   the 洋食Katsui family (洋食Katsui and 柳本駅中食堂 ピクトン in Tenri, 喫茶マウンテン in the same basement as the Lodge;
//   katsui1999.com), not a fast-growing chain. None is in data/osaka.json (grep by name and address, 2026-10-30).
//   Tabelog URLs copied from each listing.txt line 1.
//   Bar Masuda's own site (bar-masuda.com) carries injected gambling-spam links in its footer (read 2026-10-30), so it
//   is neither linked nor cited; every Masuda fact below comes from Tabelog and its reviews.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ SUGALABO V
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27116163/'; const R = TB + 'dtlrvwlst/';
  const MCJ = 'https://myconciergejapan.com/restaurants/sugalabo-v/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_sugalabo_v_shinsaibashi', name: 'SUGALABO V', category: 'OMNI',
    lat: 34.671233, lng: 135.500701, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. The single omakase course includes wheat in several dishes (gougères, tartine, a fried fish course, tagliatelle, mille-feuille, madeleines in 2024–2026 menus) and ends with SUGALABO curry. The listing warns that guests with extensive allergies may be turned down.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a single omakase course built on seafood, wagyu, pork, duck, ham and dairy.',
    hours_raw: 'Wed–Sun and holidays 17:00–23:00; closed Monday and Tuesday, and on some other days (Tabelog). Reviews give seatings at 17:00 and 19:00 (May 2026) or 17:00 and 20:30 (February 2024); one diner reports a lunch visit (May 2026). Reservation only: some seats are offered to Tabelog members, the booker must attend, and all guests start together; late arrivals may miss courses (Tabelog). Earlier by invitation only; now bookable through OMAKASE (July 2026 review). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 24 seats, no private room (semi-private seating); non-smoking, smoking on the terrace; guests 12 and older eat the adult course; smart casual, no shorts or sandals (Tabelog). Entrance: not through the Louis Vuitton store but a mirrored door on Yahata-suji (with your back to the store, on the left), then the lift to 7F (Tabelog). Opened 1 February 2020 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-8-16, 7F of Louis Vuitton Maison Osaka Midosuji; separate mirrored door on Yahata-suji — 5 min from Shinsaibashi Stn',
    cuisine: 'One omakase course built on Japanese produce, each producer named on the menu (from ¥50,000, varying to ¥70,000 with the day\'s buying, tax included; Tabelog) · Menu V ¥55,000 and a drinks pairing ¥18,000 (May 2026); ¥48,000 in February 2024 · May 2026 course: Funka Bay baby clams in a Kyoto monaka, sakura-shrimp gougère, Osaka eggplant with Mangalitsa pork, 24-month aged ham with SUGALABO rice, aori squid, white asparagus with caviar, sea bream, Choshu wagyu with morels, SUGALABO curry, citrus and mango desserts, madeleines · an October 2026 diner singled out sanma, the ham and a duck main · the SUGALABO curry closes the savoury courses, in a regular or large serving (September 2026) · wine and sake, with a sommelier (Tabelog) · baked sweets to take home',
    website: null, gmaps: gm('SUGALABO V 心斎橋'), menu_url: null,
    notes: "[French · Shinsaibashi, Louis Vuitton's restaurant floor] The Osaka outpost of Tokyo's SUGALABO sits on the seventh floor of the Louis Vuitton building on Midosuji, reached by its own mirrored door on the side street and a lift, and is the only Louis Vuitton collaboration restaurant in Japan (Tabelog). An open kitchen and Louis Vuitton-designed furniture, cutlery and trunks frame a single omakase course of Japanese produce, each producer named on the menu and each ingredient introduced at the table before its dish; the savoury run ends with the house curry, in a large serving if you still have room. It has won a Tabelog Bronze award every year from 2021 to 2026. Expect ¥55,000 for the food plus a ¥18,000 pairing and 10% service (May 2026). The executive chef Nagahama cooked a farewell dinner in February 2026; diners in July and September 2026 found the cooking still delicious under the new kitchen, and one was asked mid-course whether smaller portions would suit. Book ahead; dress smart casual.",
    chef_bio: { chef_name: null, roles: ['Creative lead: Yosuke Suga of SUGALABO, Tokyo (My Concierge Japan)', 'Executive chef until early 2026: Nagahama ("Ryo Nagahama" per My Concierge Japan; "Chef Ryosuke Nagahama" in a February 2026 review)', 'Current chef unnamed in the sources read (a September 2026 review notes the chef changed)'], origin: null, background: 'Per My Concierge Japan (undated): Yosuke Suga, "a renowned protégé of the legendary Chef Joël Robuchon", founded SUGALABO in Tokyo in 2015 as a "laboratory"; SUGALABO V opened in 2020 as "the world\'s first Louis Vuitton-attached café, bar, and restaurant". Its executive chef Nagahama had been an owner-chef in Chablis, Burgundy, planning to open a restaurant back in Japan at 40, and took the role after an offer from Suga. A February 2026 diner describes a farewell "Last Supper" by Nagahama; a July 2026 diner writes of the first visit "since Chef Nagahama\'s departure". Tabelog Award Bronze 2021–2026; Tabelog French WEST 100 in 2021, 2023 and 2025.', philosophy: 'Producers named on the menu, and each ingredient introduced at the table before its dish is served (July 2026 review).', specialty: 'Omakase course; aged ham with SUGALABO rice; SUGALABO curry.',
      anecdotes: [
        { text: '"Moreover, before each dish is served, they introduce each ingredient right in front of you." — July 2026, a second visit, to celebrate a friend\'s birthday.', source: R + 'B531484968/' },
        { text: '"This was my first visit to SUGALABO V since Chef Nagahama\'s departure. … Once again, the food was delicious." — July 2026, a third visit.', source: R + 'B495527872/' },
        { text: '"The portions are quite generous, and the chef even asked if we wanted smaller servings halfway through" — September 2026, a birthday dinner.', source: R + 'B537072488/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): SUGALABO V (スガラボヴィー)、フレンチ、大阪市中央区心斎橋筋2-8-16 ルイ・ヴィトンメゾン 大阪御堂筋 7F、心斎橋駅から徒歩5分、店の入口はルイ・ヴィトンの店舗とは別、Yahata-suji 沿いの鏡の扉からエレベーターで7階へ、水〜日・祝17:00〜23:00、月・火休み、不定休あり、完全予約制 (食べログ会員向けの席あり、予約者本人の来店、一斉スタート、遅刻や途中退席でコースの一部が出ないことも、アレルギーが多い場合は予約を断ることも)、おまかせコース50,000円〜70,000円 (仕入れによる、税込)、サービス料10%、カード可、電子マネー・QR不可、24席、半個室あり、貸切20〜50名、禁煙 (テラスで喫煙可)、12歳以上は大人と同じコース、スマートカジュアル推奨、短パン・サンダル不可、ソムリエ、2020年2月1日オープン、日本で唯一のルイ・ヴィトンとのコラボレーションレストラン、東京・Kamiyacho のイノベーティブ「SUGALABO」の料理、ルイ・ヴィトンがデザインした家具。The Tabelog Award 2021〜2026 Bronze、フレンチ WEST 百名店 2021・2023・2025。口コミ(2024年2月〜2026年10月): Menu V 55,000円とペアリング18,000円 (2026年5月)、生産者の名前入りのメニュー、料理の前に食材を見せて説明、締めの SUGALABO カレー (普通と大盛り)、持ち帰りの焼き菓子、以前は紹介制で今は OMAKASE で予約、2026年2月に Nagahama シェフの最後の晩餐、シェフ交代後も料理はおいしいという声 (2026年7月・9月)。',
      confidence: 'medium', sources: [TB, MCJ, R + 'B495527872/', R + 'B513996384/', R + 'B515277949/', R + 'B529225320/', R + 'B531449984/', R + 'B531484968/', R + 'B531886046/', R + 'B532793355/', R + 'B536808774/', R + 'B537072488/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set omakase course, booked online in advance; each dish is explained at the table (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog listing: "If you have extensive allergies, we may have to decline your reservation."', 'My Concierge Japan lets guests state allergies, dislikes and religious requirements when booking through it.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-8-16 ルイ・ヴィトンメゾン 大阪御堂筋 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目8番16号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B515277949/', R + 'B537072488/'],
    price_note: 'Course from the Tabelog listing (tax included, varies with the day\'s buying); Menu V and pairing from a May 2026 review; ¥48,000 in February 2024.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (¥50,000–70,000 depending on the day\'s buying)', '¥50,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase_course'),
      it('', '', 'Menu V (omakase course)', '¥55,000', 'Course', 'ask', 'no', 'May 2026 review.', 'menu_v'),
      it('', '', 'Drinks pairing', '¥18,000', 'Drinks', 'ask', 'ask', 'May 2026 review.', 'pairing'),
      it('', '', 'SUGALABO curry (part of the course; regular or large)', '', 'Course', 'ask', 'no', 'May 2026 and September 2026 reviews.', 'sugalabo_curry'),
    ] }, {
    cuisine: '日本の食材のおまかせコースひとつ、メニューには生産者の名前 (50,000円から、仕入れにより70,000円まで、税込、食べログ)・Menu V 55,000円とペアリング18,000円 (2026年5月)、2024年2月は48,000円・2026年5月のコース: Funka Bay の稚貝と Kyoto の最中、桜えびのグジェール、Osaka のなすと Mangalitsa の豚、24か月熟成の生ハムと SUGALABO のご飯、アオリイカ、ホワイトアスパラとキャビア、鯛、Choshu の和牛とモリーユ、SUGALABO カレー、柑橘とマンゴーのデザート、マドレーヌ・2026年10月の口コミではサンマ、生ハム、メインの鴨が好評だった・塩気のコースの締めは SUGALABO カレー、普通か大盛り (2026年9月)・ワインと日本酒、ソムリエあり (食べログ)・持ち帰りの焼き菓子',
    neighborhood: '心斎橋筋2-8-16、ルイ・ヴィトンメゾン 大阪御堂筋の7階。入口は Yahata-suji 沿いの鏡の扉。心斎橋駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。おまかせコースひとつで、小麦を使う皿がいくつもある (2024〜2026年のメニューにグジェール、タルティーヌ、魚のフライ、タリアテッレ、ミルフィーユ、マドレーヌ)。最後は SUGALABO カレー。食べログには、アレルギーが多い場合は予約を断ることもあると書かれている。',
    vegan_detail: 'ヴィーガンではありません。魚介、和牛、豚、鴨、生ハム、乳製品を使うおまかせコースひとつ。',
    notes: '[フレンチ・心斎橋、ルイ・ヴィトンのビルの上のレストラン] 東京の SUGALABO の大阪の店で、御堂筋のルイ・ヴィトンのビルの7階。わき道の専用の鏡の扉からエレベーターで上がる、日本で唯一のルイ・ヴィトンとのコラボレーションレストラン (食べログ)。オープンキッチンと、ルイ・ヴィトンがデザインした家具やカトラリー、トランクに囲まれて、日本の食材のおまかせコースをひとつだけ。メニューには生産者の名前が並び、料理の前に食材を見せてくれる。塩気のコースの最後は名物のカレーで、まだ入るなら大盛りも。The Tabelog Award では2021年から2026年まで毎年 Bronze。2026年5月の口コミでは料理55,000円にペアリング18,000円とサービス料10%。エグゼクティブシェフの Nagahama さんが2026年2月にお別れのディナーを作り、2026年7月と9月の口コミでは新しい厨房でも料理はおいしいとのことで、途中で量を少なめにするか聞いてくれたという人も。予約をして、服装はスマートカジュアルで。',
  });
}

// ================================================================ Bar マスダ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27064091/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_bar_masuda_soemoncho', name: 'Bar マスダ (Bar Masuda)', category: 'OMNI',
    lat: 34.669548, lng: 135.50214, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. A cocktail and whisky bar; the food is snacks to go with drinks: peanuts, an assortment of prosciutto and cheese, raisin butter. Nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Most cocktails are spirits, fruit and mixers, and peanuts come as the starter; the food otherwise is prosciutto, cheese and raisin butter.',
    hours_raw: 'Daily 17:00–23:00, last order 22:30 (Tabelog). Reservations accepted by phone; give time, party size, name and a mobile number, and a booking is cancelled if you are late without calling (Tabelog). Cover charge ¥1,100 on the 1st and 2nd floors, ¥2,200 on the 3rd floor, karaoke included (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, iD, QUICPay, Alipay and WeChat Pay (Tabelog). 40 seats: 10 at the counter on 1F, 10 in booths on 2F, 20 on 3F, with private rooms for 6 to 20 and whole-floor hire up to 20; non-smoking; English menu; free Wi-Fi (Tabelog). Opened 9 June 1958 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-3-11, a brick front on the Souemoncho street, a short walk from the Glico sign — 7 min from Namba Stn exit 15-B',
    cuisine: 'Cocktail and whisky bar since 1958, on three floors · a cocktail list running to hundreds, classics and house originals ("Masuda Original"; two originals as a set ¥5,500, Tabelog) · originals named in 2026 reviews: Enishi, En, Kurenai Sakura, Sixth Sense, Wave Motion Moscow Mule; the Blue Blazer II poured with fire and the Nitro Fruit March made with liquid nitrogen (October 2026) · fresh-fruit and frozen fruit cocktails, e.g. watermelon with a salt rim (July 2026) · drinks around ¥1,500 each (August 2026) · rare whisky: an Ardbeg Dolce and a Kanosuke tasting set with Madeira (July 2026) · food: Kagoshima black-pork prosciutto (Tabelog), prosciutto and cheese assortment (September 2026), raisin butter (October 2026), peanuts as the starter',
    website: null, gmaps: gm('Bar マスダ 心斎橋'), menu_url: null,
    notes: "[Bar · Souemoncho, a cocktail bar since 1958] A brick-fronted bar on the Souemoncho street, steps from the Dotonbori Glico sign, that has poured drinks since 1958 and was named a Tabelog Bar 100 in 2022. The ground floor is an eight-metre solid-wood counter with about ten seats, where several bartenders work in front of you; there are booths on the second floor and a third floor for groups with karaoke. The cocktail list runs to hundreds: tell the bartender what you like and a drink is made to fit, or try house originals like Enishi, a Wave Motion Moscow Mule, the flaming Blue Blazer II or the liquid-nitrogen Nitro Fruit March, whose show had other tables ordering it too (October 2026). Rare whiskies as well. Food is for drinking: peanuts to start, prosciutto (Kagoshima black pork) with cheese, raisin butter. Diners call the master charming and the staff friendly even to bar novices. Cover ¥1,100; drinks about ¥1,500; English menu.",
    chef_bio: { chef_name: null, roles: ['Master (unnamed) and bartending staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: established in 1958, "we have grown alongside the history of Souemoncho", with an 8-meter solid wood counter, a plaster-finished bar and tables for up to 20 on the third floor; a wide range of cocktails including the signature "Masuda Original" and an extensive range of whiskies. Tabelog Bar 100, 2022. Diners mention the master (July, September and October 2026) and a manager (October 2026) behind the counter.', philosophy: 'Cocktails made to your mood and preferences (Tabelog).', specialty: 'House original cocktails; rare whisky.',
      anecdotes: [
        { text: '"The fire performance of the Blue Blazer II and the liquid nitrogen display of the Nitro Fruit March were so impressive that other customers ended up ordering them as well." — October 2026.', source: R + 'B538273092/' },
        { text: '"I ordered watermelon since it\'s popular here. The fresh watermelon paired perfectly with the salt around the rim of the glass!" — July 2026.', source: R + 'B531789406/' },
        { text: '"Even if you\'re not well-versed in alcohol, the staff will gladly suggest options that suit your preferences" — August 2026.', source: R + 'B534651232/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Bar マスダ、バー、大阪市中央区心斎橋筋2-3-11、なんば駅15-B出口から徒歩7分、毎日17:00〜23:00 (L.O.22:30)、予約可 (時間、人数、名前、携帯番号を伝える、連絡なく遅れると取り消し)、チャージ1・2階1,100円、3階 (カラオケ込み) 2,200円、カード・電子マネー・QR (Alipay、WeChat Pay) 可、40席 (1階カウンター10、2階ボックス10、3階20)、個室6〜20名、貸切20名まで、禁煙、英語メニュー、Wi-Fi、1958年6月9日オープン。店の紹介: 1958年の創業から Souemoncho の歴史とともに歩み、2025年に67周年、8メートルの一枚板のカウンター、漆喰仕上げのバー、3階は20名まで、オリジナルカクテル「Masuda Original」、豊富なウイスキー、Kagoshima の黒豚の生ハムなど酒に合う料理、オリジナルカクテル2杯のセット5,500円。食べログ バー 百名店 2022。口コミ(2026年7月〜10月): お通しのピーナッツ、スイカのカクテル、Ardbeg Dolce、Kanosuke のテイスティングセット、Enishi、Blue Blazer II、Nitro Fruit March、Wave Motion Moscow Mule、生ハムとチーズの盛り合わせ、レーズンバター、1杯1,500円ほど、何百ものカクテルのメニュー、好みに合わせて作ってくれる、マスターとマネージャー。',
      confidence: 'medium', sources: [TB, R + 'B531789406/', R + 'B531904029/', R + 'B533459223/', R + 'B534651232/', R + 'B535051192/', R + 'B535078358/', R + 'B535421653/', R + 'B535451831/', R + 'B536335318/', R + 'B538273092/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); bartenders make drinks to your stated taste (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番11号 (go) 7m. 17map (osaka_17map_shinsaibashi) is about 20 m away at 心斎橋筋2-3-7 ROYAL KITAGAWAビル: a different house number, so both pins stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B533459223/', R + 'B535078358/', R + 'B538273092/'],
    price_note: 'Cover charge and cocktail set from the Tabelog listing; "drinks priced around JPY 1500 each" per an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Two Bar Masuda original cocktails (set)', '¥5,500', 'Cocktails', 'ask', 'ask', 'Tabelog listing.', 'original_cocktail_set'),
      it('', '', 'Enishi (house original cocktail)', '', 'Cocktails', 'ask', 'ask', 'August and October 2026.', 'enishi'),
      it('', '', 'Blue Blazer II (flaming cocktail)', '', 'Cocktails', 'ask', 'ask', 'October 2026.', 'blue_blazer'),
      it('', '', 'Watermelon cocktail with a salt rim', '', 'Cocktails', 'ask', 'ask', 'July 2026.', 'watermelon_cocktail'),
      it('', '', 'Prosciutto and cheese assortment', '', 'Snacks', 'ask', 'no', 'September 2026; Kagoshima black-pork prosciutto per Tabelog.', 'prosciutto_cheese'),
      it('', '', 'Raisin butter', '', 'Snacks', 'ask', 'no', 'October 2026.', 'raisin_butter'),
    ] }, {
    cuisine: '1958年からのカクテルとウイスキーのバー、3フロア・何百ものカクテルのメニュー、定番とオリジナル (「Masuda Original」、オリジナル2杯のセット5,500円、食べログ)・2026年の口コミに出てくるオリジナル: Enishi、En、Kurenai Sakura、Sixth Sense、Wave Motion Moscow Mule、火を使う Blue Blazer II、液体窒素の Nitro Fruit March (2026年10月)・生のフルーツやフローズンフルーツのカクテル、たとえばグラスのふちに塩のスイカ (2026年7月)・1杯1,500円ほど (2026年8月)・珍しいウイスキー: Ardbeg Dolce、マデイラと Kanosuke のテイスティングセット (2026年7月)・料理: Kagoshima の黒豚の生ハム (食べログ)、生ハムとチーズの盛り合わせ (2026年9月)、レーズンバター (2026年10月)、お通しのピーナッツ',
    neighborhood: '心斎橋筋2-3-11、Souemoncho の通りのれんがの店構え、グリコの看板から少し。なんば駅15-B出口から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。カクテルとウイスキーのバーで、料理は酒に合うおつまみ: ピーナッツ、生ハムとチーズの盛り合わせ、レーズンバター。グルテンフリーの説明はない。',
    vegan_detail: '要確認。ヴィーガンの情報なし。カクテルの多くは酒、フルーツ、割り材で、お通しはピーナッツ。それ以外の料理は生ハム、チーズ、レーズンバター。',
    notes: '[バー・Souemoncho、1958年からのカクテルバー] 道頓堀のグリコの看板から歩いてすぐ、Souemoncho の通りのれんがの店構えのバー。1958年から続き、2022年に食べログ バー 百名店に選ばれた。1階は8メートルの一枚板のカウンターに10席ほどで、何人ものバーテンダーが目の前で作る。2階はボックス席、3階はカラオケのあるグループ向け。カクテルのメニューは何百もあり、好みを伝えれば合わせて作ってくれるし、Enishi や Wave Motion Moscow Mule、火を使う Blue Blazer II、液体窒素の Nitro Fruit March などのオリジナルも。Nitro Fruit March は見ていたほかの客まで頼んだそう (2026年10月)。珍しいウイスキーもある。料理は酒のためのもので、お通しのピーナッツ、Kagoshima の黒豚の生ハムとチーズ、レーズンバター。マスターは魅力的で、お酒にくわしくない人にもスタッフが親切という声。チャージ1,100円、1杯1,500円ほど、英語メニューあり。',
  });
}

// ================================================================ アラビヤコーヒー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001511/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://arabiyacoffee.com/';
  const W = day(['12:00', '18:00']); const E = day(['10:00', '19:00']);
  put({
    id: 'osaka_arabiya_coffee_namba', name: 'アラビヤコーヒー (ARABIYA Coffee)', category: 'MOM_AND_POP',
    lat: 34.667919, lng: 135.501872, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The food is mostly toast: the Arabiya sandwich of ham and egg on toast, jam or honey toast, French toast, pizza toast, pancakes. Homemade pudding, coffee jelly, vanilla ice cream and a boiled egg are the dishes without bread or batter, but nothing is stated about their ingredients.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the food is built on ham, egg, butter, milk and cream; black coffee, tea and the fresh juices are the plain options.',
    hours_raw: 'Mon–Fri 12:00–18:00; Sat, Sun and holidays 10:00–19:00; closed on some Wednesdays (official site; Tabelog gives the same hours). Reservations accepted (Tabelog); the official site lists a reservable table for up to 8 at the back of 1F. Popular: one person waiting outside on a weekday and a full house on a Sunday morning at opening (October 2026). Cards (VISA, Master, JCB) and PayPay; no e-money (Tabelog). 50 seats: a counter of 7 and tables; 1F has 4 tables of 16 seats, 2F 4 tables of 16–20 seats (official site); non-smoking (Tabelog). Opened 9 February 1951 (Tabelog; official site).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-6-7, on the lane linking Ebisubashi-suji and Hozenji, under a coffee-roaster signboard — 2 min from Namba Stn exit 14',
    cuisine: 'Kissaten since 1951 roasting its own coffee and brewing it by flannel drip (prices from the official site, tax included, read October 2026) · ARABIYA blend ¥650 · single origins ¥860–890 (Brazil, Colombia, Kilimanjaro, Mandheling, Mocha Mattari, Papua New Guinea), Elephant Mountain peaberry ¥1,050 · original iced coffee ¥720, Dutch iced coffee ¥840, coffee float ¥880 · café au lait ¥720 · Arabiya sandwich of ham and egg cooked together and sandwiched in toast ¥1,010 (1.5 times the egg ¥1,210) · toast with jam or butter ¥420, toast with fresh seasonal-fruit jam ¥420, honey toast ¥770 · French toast ¥910 · pizza toast ¥1,010 · pancakes ¥950 · homemade pudding ¥880, homemade coffee jelly ¥880, gâteau chocolat ¥800, cheesecake with caramelised apple ¥830 · boiled egg ¥170 · fresh banana, orange and lemon juices · blend and pudding came to ¥1,530 in October 2026',
    website: SITE, gmaps: gm('アラビヤコーヒー 難波'), menu_url: SITE + 'menu.html',
    notes: "[Kissaten · Namba, a family coffee house since 1951] A coffee house on the short lane between Ebisubashi-suji and Hozenji, marked by a roaster on its signboard, opened in 1951 and now in the hands of the founder's eldest son. Beans are roasted at the company's own roastery in Taisho and brought in daily and brewed through flannel filters made by hand from cloth found in Senba; the house blend is mild and fragrant, made to drink cup after cup. The founder fought customers who called it weak in the age of strong coffee, carved the wooden reliefs on the walls and wrote the slogans; upstairs, the founder's treasures, including the hand-cranked roaster used at the opening, fill a quieter room. Eat the Arabiya sandwich of ham and egg on toast, toast with fresh fruit jam, or the firm, old-style homemade pudding with a blend (¥1,530 together in October 2026). In 2026 diners found it packed, many of them overseas visitors, and were seen off with a friendly \"ookini\" from the owner.",
    chef_bio: { chef_name: '高坂明郎', roles: ['Second-generation owner, representative director of 有限会社アラビヤコーヒー (official site)', 'Founder: 高坂光明 (official site)'], origin: null, background: 'Per the official site ("アラビヤ物語", quoting Meets Regional 1998 and 2001 and the 2000 CAFE BOOK): the founder 高坂光明 left life as an elite officer to start in coffee on 9 February 1951, aged 25, and refused to make the coffee stronger for customers who called it thin. The founder had hoped to play professional baseball but was a little short, loved skiing and golf, carved the wooden reliefs in the shop, wrote its slogans, and chose Namba because a dance hall was nearby. The founder\'s wife was a star player of the women\'s professional baseball league of about 1950–55, a department-store worker at Sogo Shinsaibashi as well as a player, and met the founder there. The second generation, 明郎, helped in the shop from junior high school: "my father never once told me to take it over, but I took it for granted." A 2001 tribute on the site by the actor 坂東三津五郎 (the tenth of the name) recalls being told of the shop\'s coffee and Arabiya sandwich by 中村富十郎, eating breakfast there every day during Osaka performances, and playing early-morning baseball with the eldest son 明朗, the same age. The shop marked its 70th year on 9 February 2021 and aims for 100.', philosophy: '"Work as hard as you can, but enjoy life" (めいっぱい働き、でも人生は愉しく; official site).', specialty: 'Flannel-drip house blend roasted in-house; Arabiya sandwich; homemade pudding.',
      anecdotes: [
        { text: '"The friendly owner\'s \'Okinī\' as I left the shop was a nice touch." — October 2026, blend coffee and pudding for JPY 1,530.', source: R + 'B537045226/' },
        { text: '"The homemade pudding is of the traditional hard type—actually, it has a firmer texture than the usual old-fashioned pudding. It holds its shape even when cut with a spoon." — October 2026.', source: R + 'B537357742/' },
        { text: '"What surprised me first upon entering was that most of the customers were foreigners." — October 2026, over an Elephant Mountain.', source: R + 'B536765569/' },
      ],
      japanese_sources_summary: '公式サイト: アラビヤコーヒー、SINCE 1951、戎橋から南へ二筋目を左、戎橋筋と法善寺を東西に結ぶ中間、焙煎機の看板が目印、1階テーブル4卓16席と奥の予約テーブル最大8名、カウンター7席 (先代がテーブルを改造して作った椅子)、2階には先代からの宝物と開店当時の手回し焙煎機、テーブル4卓16〜20席、毎朝の焙煎、大正区三軒家東の自社の焙煎所から毎日店へ、アラビヤ式熱風焙煎と直火焙煎、月〜金12:00〜18:00、土・日・祝10:00〜19:00、水曜日不定休。アラビヤ物語: 先代の高坂光明がエリート将校から転じて1951年2月9日 (25才) に珈琲の人生を始めた、濃い珈琲の全盛に「薄い」という客とケンカもしばしば、本物至上主義は二代目の明郎へ、ブラジルやコロンビアなど南米の豆を粗めに挽いて船場で探した生地で手作りしたネルでドリップ、プロ野球選手を目指したが背が低めで断念、スキーとゴルフ、店内の木彫りのレリーフは手作りでキャッチコピーも自作、近所のダンスホールが理由で難波に、奥さんは昭和25年〜30年頃の女子プロ野球の花形選手で心斎橋そごうのデパガ兼選手、二代目は中学時代から店でアルバイト、「店を継げなんて親父が言ったことはないけど、継ぐのがあたり前やと思ってた」(Meets Regional 2001年1月号・1998年4月号、2000年 CAFE BOOK)。十代目坂東三津五郎の寄稿 (2001年1月): 中村富十郎からアラビヤのコーヒーとアラビヤサンドを教わり、大阪公演中の朝食は毎日ここ、同い年の長男の明朗さんと早朝野球。2021年2月9日に70周年、100周年を目指す、有限会社アラビヤコーヒー代表取締役 高坂明郎。メニュー (税込): ブレンドコーヒー650円、ストレート860〜890円、エレファントマウンテン・ピーベリー1,050円、アイスコーヒー720円、ダッチコーヒー840円、アラビヤサンド1,010円、トースト390円、ジャムかバターのトースト420円、生ジャムトースト420円、ハニートースト770円、フレンチトースト910円、ピザ風トースト1,010円、ホットケーキ950円、自家製プリン880円、自家製コーヒーゼリー880円、ゆでたまご170円。食べログ: 中央区難波1-6-7、なんば駅14番出口から徒歩2分、予約可、カード・PayPay可、電子マネー不可、50席 (カウンター7、テーブル43)、禁煙、1951年2月9日オープン、食べログ 喫茶店 百名店 2021・2022・2026。口コミ(2025年12月〜2026年10月): ブレンドとプリンで1,530円、固いプリン、香りのよいブレンド、外で待つ人、海外の客が多い、店主の「おおきに」、生ジャムトーストが売り切れの日も、朝食メニューはなくアラカルト。',
      confidence: 'high', sources: [TB, SITE, SITE + 'history.html', SITE + 'menu.html', SITE + 'access.html', R + 'B519237046/', R + 'B536765569/', R + 'B537045226/', R + 'B537121365/', R + 'B537280777/', R + 'B537357742/', R + 'B537499492/', R + 'B537555321/', R + 'B537634670/', R + 'B537942087/'] },
    cultural_comfort: { level: 'english', note: 'The official menu is in Japanese and English; many overseas customers (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-6-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目6番7号 (go) 1m. Neighbours in data at different house numbers: ずんどう屋 (osaka_zundoya_namba_ebisubashi, 難波1-6-8) and Kokopelli (osaka_kokopelli_namba, 難波1-6-5), so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu.html', R + 'B537045226/'],
    price_note: 'Prices from the official menu (tax included; undated, read October 2026); an October 2026 review\'s blend and pudding for ¥1,530 matches.', last_checked: TODAY, items: [
      it('ブレンドコーヒー', '', 'ARABIYA blend coffee', '¥650', 'Coffee', 'ask', 'ask', 'Official menu.', 'blend_coffee'),
      it('エレファントマウンテン・ピーベリー', '', 'Elephant Mountain peaberry coffee', '¥1,050', 'Coffee', 'ask', 'ask', 'Official menu.', 'elephant_mountain'),
      it('アラビヤサンド', '', 'Arabiya sandwich (ham and egg cooked together, in toast)', '¥1,010', 'Food', 'no', 'no', 'Official menu.', 'arabiya_sandwich'),
      it('生ジャムトースト', '', 'Toast with fresh seasonal-fruit jam', '¥420', 'Food', 'no', 'ask', 'Official menu; sold out on an October 2026 visit.', 'fresh_jam_toast'),
      it('フレンチトースト（シュガー）', '', 'French toast, sugar', '¥910', 'Food', 'no', 'no', 'Official menu.', 'french_toast'),
      it('ホットケーキ', '', 'Pancakes', '¥950', 'Food', 'no', 'no', 'Official menu.', 'pancake'),
      it('自家製プリン', '', 'Homemade pudding (firm, old style)', '¥880', 'Desserts', 'ask', 'no', 'Official menu; firm per October 2026 reviews.', 'pudding'),
      it('自家製コーヒーゼリー', '', 'Homemade coffee jelly', '¥880', 'Desserts', 'ask', 'ask', 'Official menu.', 'coffee_jelly'),
    ] }, {
    cuisine: '1951年からの喫茶店、自家焙煎の豆をネルドリップで (値段は公式サイト、税込、2026年10月に確認)・ブレンドコーヒー650円・ストレートは860〜890円 (ブラジル、コロンビア、キリマンジャロ、マンデリン、モカ・マタリ、パプアニューギニア)、エレファントマウンテン・ピーベリー1,050円・アイスコーヒー720円、ダッチコーヒー840円、コーヒーフロート880円・カフェオーレ720円・ハムと卵を焼き上げてトーストではさんだアラビヤサンド1,010円 (卵1.5倍は1,210円)・ジャムかバターのトースト420円、季節の果物の生ジャムトースト420円、ハニートースト770円・フレンチトースト910円・ピザ風トースト1,010円・ホットケーキ950円・自家製プリン880円、自家製コーヒーゼリー880円、ガトーショコラ800円、林檎のキャラメリーゼ添えの自家製チーズケーキ830円・ゆでたまご170円・生搾りのバナナ、オレンジ、レモンのジュース・2026年10月はブレンドとプリンで1,530円',
    neighborhood: '難波1-6-7、戎橋筋と法善寺を結ぶ通りの中ほど、焙煎機の看板が目印。なんば駅14番出口から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。料理はほとんどトースト: ハムと卵をトーストではさんだアラビヤサンド、ジャムやハチミツのトースト、フレンチトースト、ピザ風トースト、ホットケーキ。パンや生地を使わないのは自家製プリン、コーヒーゼリー、バニラアイス、ゆでたまごだが、材料の説明はない。',
    vegan_detail: 'ヴィーガンではありません。料理はハム、卵、バター、牛乳、クリームを使う。ブラックコーヒー、紅茶、生搾りのジュースがシンプルな選択肢。',
    notes: '[喫茶店・難波、1951年からの家族の喫茶店] 戎橋筋と法善寺を結ぶ短い通りで、焙煎機の看板が目印の喫茶店。1951年に開き、今は先代の長男が継いでいる。豆は大正区にある自社の焙煎所で焼いて毎日店へ運び、船場で探した生地で作るネルでドリップする。ブレンドはマイルドで香りがよく、何杯でも飲める味。濃い珈琲の全盛に「薄い」という客とケンカしても譲らなかった先代は、壁の木彫りのレリーフも手作りで、キャッチコピーも自作。2階は先代の宝物と開店当時の手回し焙煎機が並ぶ、少し静かな部屋。ハムと卵をトーストではさんだアラビヤサンド、生ジャムトースト、昔ながらの固い自家製プリンをブレンドと一緒に (2026年10月はプリンとブレンドで1,530円)。2026年の口コミでは満席で、海外の客も多く、帰りには店主が気さくに「おおきに」と送り出してくれたそう。',
  });
}

// ================================================================ 御堂筋ロッヂ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27059987/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://katsui1999.com/';
  const WL = ['11:00', '14:30'], ED = ['17:00', '21:30'], SL = ['11:00', '15:00'], SD = ['17:00', '21:00'];
  put({
    id: 'osaka_midosuji_lodge_minamisenba', name: '御堂筋ロッヂ (Midosuji Lodge)', category: 'OMNI',
    lat: 34.676183, lng: 135.499831, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Most of the menu is breaded or sauced: fried shrimp, cream croquettes, cutlets, gratin, hamburg with demi-glace, curry. The grilled black wagyu comes with a soy-based seasoning (October 2026 review), which usually contains wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yoshoku kitchen of beef, pork, seafood, egg and cream sauces.',
    hours_raw: 'Lunch Wed–Fri 11:00–14:30 (last order 14:00), Sat, Sun and holidays 11:00–15:00 (last order 14:30); dinner Wed–Sat 17:00–21:30 (last order 21:00), Sun and holidays 17:00–21:00 (last order 20:30); closed Monday and Tuesday; the site adds that holidays are closed too ("※祝日もお休み頂戴いたします"), while also listing holiday hours, so ask before a holiday visit (official site; Tabelog gives the same hours). Reservations by phone; weekend and holiday lunch is booked in two sittings, from 11:30 and from 13:30 (Tabelog). Weekdays, children of primary-school age and up only; younger children are welcome on Saturdays, Sundays and holidays (official site, since July 2021); no strollers (Tabelog). No charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay (Tabelog). Non-smoking; takeaway (Tabelog). Full by noon on a Saturday; about half full on a weekday at 13:30 (October 2026). Opened 19 September 2011 (Tabelog).',
    hours: { 2: [WL, ED], 3: [WL, ED], 4: [WL, ED], 5: [SL, ED], 6: [SL, SD] }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-3-11, basement of the Osaka Toyota Building (大阪豊田ビル) on Midosuji — 5 min from Shinsaibashi Stn exit 3',
    cuisine: 'Yoshoku with hors d\'oeuvres and wine (prices from the official site, tax included, read October 2026) · lunch set meals only, with rice, salad and pork miso soup: Western-style bento (weekdays, 15 a day) ¥2,000, hamburg steak (weekdays) ¥2,000, fried shrimp 3 for ¥2,000 or 5 for ¥2,800, combination of grilled black wagyu and fried shrimp (weekends and holidays) ¥2,800, grilled black-wagyu loin ¥2,800, fried shrimp and cream croquette ¥2,200, grilled Yamagata pork belly ¥2,000, "power lunch" of salt-grilled wagyu loin ¥4,500 · dinner à la carte: hors d\'oeuvre platter ¥1,600, Tasmanian salmon marinade ¥1,600, black-wagyu fillet cutlet ¥4,000, special omurice ¥1,650; reviews add seafood gratin, scallop cream croquette ¥1,650, escargot-style Sennan octopus ¥1,400, wagyu garlic rice ¥1,800, rice curry ¥500, grilled wagyu fillet ¥3,800 (March 2025) · main-dish courses ¥4,800–10,000, lunch or dinner · desserts: pudding, Yujiro (cold espresso with milk gelato) · takeaway: grilled-wagyu bento ¥2,500, minced-cutlet sandwich ¥2,000, wagyu fillet cutlet sandwich ¥4,500',
    website: SITE, gmaps: gm('御堂筋ロッヂ 南船場'), menu_url: SITE + '#menu_shop_lodge',
    notes: "[Yoshoku · Minami-Senba, a mountain lodge under Midosuji] Down in the basement of an older office building on Midosuji, a wooden mountain-lodge room with a retro, dance-hall feel serves yoshoku that keeps landing on Tabelog's Yoshoku 100 lists. It belongs to the family of 洋食Katsui 山の辺の道, a yoshoku restaurant in Tenri, Nara (katsui1999.com). Lunch is set meals only, with free rice refills, a varied salad and a pork miso soup diners keep praising: head-on fried shrimp with tartare, wagyu grilled with a rich soy seasoning, a sizzling demi-glace hamburg with a poached egg, or the weekday Western-style bento of hamburg, crab cream croquette, shrimp and sashimi. Dinner is à la carte or courses, and one diner, on an eighth visit, came back for the seafood gratin and the Yujiro, cold espresso under milk gelato. Lunch runs ¥2,000–2,800; dinner about ¥6,000–8,000. Book weekend lunches, which fill by noon; weekdays are for children of school age and up.",
    chef_bio: { chef_name: null, roles: ['Kitchen of the 洋食Katsui group (unnamed chef)'], origin: null, background: 'Per katsui1999.com, 御堂筋ロッヂ is one of four shops of the 勝井ファミリー: 洋食Katsui 山の辺の道 and 柳本駅中食堂 ピクトン in Tenri, Nara, and 喫茶マウンテン, a coffee shop in the same basement as the Lodge (all listed on the site, read 2026-10-30). Opened 19 September 2011 (Tabelog). Tabelog Yoshoku 100 in 2020, 2022 and 2023, and Yoshoku WEST 100 in 2025.', philosophy: '"Whether you are hungry or want a drink, we welcome you with plenty of hors d\'oeuvres and yoshoku" (official site).', specialty: 'Fried shrimp with tartare; grilled black wagyu; seafood gratin; hamburg steak.',
      anecdotes: [
        { text: '"The seafood gratin here is absolutely addictive. … the dessert called \'Yūjirō,\' which is a cold espresso coffee topped with milk gelato, is exceptional." — September 2026, an eighth visit.', source: R + 'B138841562/' },
        { text: '"It arrived sizzling on a hot teppan, making a delightful sound. The rich demi-glace sauce was bubbling, and the hamburger steak was fluffy and juicy... and the addition of the poached egg was simply irresistible." — October 2026.', source: R + 'B537845301/' },
        { text: '"I was the first customer, arriving 5 minutes early. It started getting busy around 11:30, and by noon, it was fully booked." — October 2026, a Saturday, combination set meal JPY 2,800.', source: R + 'B537019557/' },
      ],
      japanese_sources_summary: '公式サイト (katsui1999.com): 洋食Katsui 山の辺の道、御堂筋ロッヂ、柳本駅中食堂 ピクトン、喫茶マウンテンの4店、勝井ファミリー、「お腹の空いた方もお酒を飲みたい方もたくさんのオードブルと洋食でおもてなしいたします」。御堂筋ロッヂ: 大阪市中央区南船場4-3-11 大阪豊田ビル B1F、心斎橋駅3番出口 (御堂筋側)、ランチ水〜金11:00〜14:30 (L.O.14:00)、土・日・祝11:00〜15:00 (L.O.14:30)、ディナー水〜土17:00〜21:30 (L.O.21:00)、日・祝17:00〜21:00 (L.O.20:30)、月・火定休 (祝日も休み)、平日は小学生以上、土・日・祝は小学生未満も可 (2021年7月から)。ランチは定食のみ: 洋食弁当 (平日限定15食) 2,000円、ハンバーグステーキ (平日限定) 2,000円、エビフライ3尾2,000円・5尾2,800円、コンビネーション (黒毛和牛網焼きとエビフライ、土日祝限定) 2,800円、黒毛和牛ロース網焼き2,800円、エビフライとクリームコロッケ2,200円、山形豚バラ網焼き2,000円、パワーランチ (黒毛和牛ロース塩焼き) 4,500円。ディナー: 前菜盛り合わせ1,600円、タスマニアサーモンマリネ1,600円、エビフライ2尾1,600円、黒毛和牛ロース網焼き3,000円、黒毛和牛フィレビーフカツレツ4,000円、特製オムライス1,650円、メインディッシュコース4,800円〜10,000円、お土産に黒毛和牛網焼弁当2,500円、ミンチカツサンド2,000円、黒毛和牛フィレカツサンド4,500円、税込。食べログ: 予約可、土日祝のランチは11:30〜と13:30〜の二部制、チャージなし、カード・電子マネー・PayPay可、禁煙、ベビーカー不可、テイクアウト、2011年9月19日オープン、食べログ 洋食 百名店 2020・2022・2023、洋食 WEST 百名店 2025。口コミ(2024年10月〜2026年10月): ご飯のおかわり自由、豚汁、梅干し、頭まで食べられるエビフライとタルタル、山椒の香る黒毛和牛の網焼き、鉄板のハンバーグとデミグラスと落とし卵、シーフードグラタン、Yujiro、プリン、ガーリックライス、山小屋のような店内、土曜は正午に満席。',
      confidence: 'medium', sources: [TB, SITE, R + 'B138841562/', R + 'B535730598/', R + 'B537019557/', R + 'B537666939/', R + 'B537787323/', R + 'B537819038/', R + 'B537845301/', R + 'B537886571/', R + 'B538169568/', R + 'B538325646/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches chosen from a short list; book by phone for weekend lunch (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-3-11 大阪豊田ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and the group\'s official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目3番11号 (go) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B537019557/', R + 'B138841562/'],
    price_note: 'Prices from the official site (tax included; undated, read October 2026); October 2026 reviews match the ¥2,000 hamburg and ¥2,800 combination.', last_checked: TODAY, items: [
      it('洋食弁当', '', 'Western-style bento (weekdays, 15 a day)', '¥2,000', 'Lunch set meals', 'no', 'no', 'Official site; hamburg, crab cream croquette, fried shrimp and sashimi per an October 2026 review.', 'yoshoku_bento'),
      it('ハンバーグステーキ', '', 'Hamburg steak set (weekdays)', '¥2,000', 'Lunch set meals', 'ask', 'no', 'Official site; demi-glace and poached egg per October 2026.', 'hamburg'),
      it('コンビネーション(黒毛和牛網焼きとエビフライ)', '', 'Combination: grilled black wagyu and fried shrimp (weekends and holidays)', '¥2,800', 'Lunch set meals', 'no', 'no', 'Official site; October 2026.', 'combination'),
      it('エビフライ(3尾)', '', 'Fried shrimp, 3', '¥2,000', 'Lunch set meals', 'no', 'no', 'Official site.', 'fried_shrimp'),
      it('黒毛和牛ロース網焼き', '', 'Grilled black-wagyu loin', '¥2,800', 'Lunch set meals', 'ask', 'no', 'Official site (dinner à la carte ¥3,000).', 'wagyu_grill'),
      it('黒毛和牛フィレビーフカツレツ', '', 'Black-wagyu fillet cutlet', '¥4,000', 'Dinner', 'no', 'no', 'Official site.', 'fillet_cutlet'),
      it('特製オムライス', '', 'Special omurice', '¥1,650', 'Dinner', 'ask', 'no', 'Official site.', 'omurice'),
      it('', '', 'Seafood gratin', '', 'Dinner', 'ask', 'no', 'September 2026.', 'seafood_gratin'),
    ] }, {
    cuisine: 'オードブルとワインのある洋食 (値段は公式サイト、税込、2026年10月に確認)・ランチは定食のみ、ご飯、サラダ、豚汁つき: 洋食弁当 (平日限定15食) 2,000円、ハンバーグステーキ (平日限定) 2,000円、エビフライ3尾2,000円・5尾2,800円、黒毛和牛網焼きとエビフライのコンビネーション (土日祝限定) 2,800円、黒毛和牛ロース網焼き2,800円、エビフライとクリームコロッケ2,200円、山形豚バラ網焼き2,000円、黒毛和牛ロース塩焼きのパワーランチ4,500円・ディナーのアラカルト: 前菜盛り合わせ1,600円、タスマニアサーモンマリネ1,600円、黒毛和牛フィレビーフカツレツ4,000円、特製オムライス1,650円。口コミではシーフードグラタン、ホタテのクリームコロッケ1,650円、Sennan のタコのエスカルゴ風1,400円、黒毛和牛のガーリックライス1,800円、ライスカレー500円、黒毛和牛フィレの網焼き3,800円 (2025年3月)・メインディッシュコース4,800円〜10,000円、ランチでもディナーでも・デザート: プリン、Yujiro (冷たいエスプレッソにミルクジェラート)・お土産: 黒毛和牛網焼弁当2,500円、ミンチカツサンド2,000円、黒毛和牛フィレカツサンド4,500円',
    neighborhood: '南船場4-3-11、御堂筋沿いの大阪豊田ビルの地下1階。心斎橋駅3番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。メニューの多くは衣やソースを使う: エビフライ、クリームコロッケ、カツレツ、グラタン、デミグラスのハンバーグ、カレー。黒毛和牛の網焼きは醤油ベースの味つけ (2026年10月の口コミ) で、ふつうは小麦を含む。',
    vegan_detail: 'ヴィーガンではありません。牛肉、豚肉、魚介、卵、クリームソースの洋食の店。',
    notes: '[洋食・南船場、御堂筋の地下の山小屋] 御堂筋沿いの古いオフィスビルの地下に降りると、レトロでダンスホールのような雰囲気の木の山小屋風の店があり、食べログの洋食 百名店にくり返し選ばれている。天理の洋食の店、洋食Katsui 山の辺の道のグループの店。ランチは定食のみで、ご飯はおかわり自由、いろいろな野菜のサラダと、好評の豚汁つき。頭まで食べられるエビフライとタルタル、醤油ベースのしっかりした味の黒毛和牛の網焼き、鉄板でジュージューいうデミグラスのハンバーグと落とし卵、平日はハンバーグ、カニクリームコロッケ、エビフライ、刺身の入った洋食弁当も。夜はアラカルトかコースで、8回目の来店だった人のお目当ては、シーフードグラタンと、冷たいエスプレッソにミルクジェラートをのせた Yujiro。ランチは2,000〜2,800円、夜は6,000〜8,000円ほど。土日のランチは正午には満席になるので予約を。平日は小学生以上。',
  });
}

save();
