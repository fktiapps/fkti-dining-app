// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 41.
//   + 京鉄板焼肉 こと乃 Kyo Teppan Yakiniku Kotono (teppan yakiniku and yakisoba on Shijo east of Horikawa)
//   + Artisan TEPPAN RESTAURANT (small-plate teppan course near Shichijo, opened July 2025)
//   + 立ち呑み ツキノコグマ Tachinomi Tsukinokoguma (standing bar in a machiya off Nishikikoji near Karasuma)
//   + アポロプラス Apollo+ (creative izakaya with private rooms on Sanjo-Sakaimachi)
//   - 肉なべ 千葉 (26015888), 廻転鮨 銀座おのでら 京都店 (26039528), グリルキャピタル東洋亭 ポルタ店 (26004938): skipped (below).
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 200`, lane ids 26036102, 26043224; from `next notable
//   200`: 26015888 (skipped), 26038844, 26039528 (skipped), 26004938 (skipped), 26002988. None of the four drafted is in
//   data/kyoto.json by name (こと乃/Kotono, Artisan TEPPAN, ツキノコグマ, アポロ/Apollo) or address (柏屋町7, 材木町454-3,
//   貝屋町561, 桝屋町67).
//   Same-name count (same brand or operator only): こと乃 — invoice holder 株式会社いろはコーポレーション (NTA register); a
//   December 2024 reviewer says it was formerly called Arata and mentions an Arata at Hachijo-guchi; no group list found.
//   Artisan TEPPAN — invoice holder 株式会社ｐａｎｇａｅａ (Minato-ku, Tokyo); no other shop found. ツキノコグマ — no
//   sister found. アポロプラス — invoice holder 有限会社クロスポイント; no other shop found. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: Artisan TEPPAN ※2026年7月11日以降、ご飲食代とは別途
//   サービス料10％; アポロプラス サービス料 390円 (590円 from 29 December to 3 January). Others none listed.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-41');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26015888', '肉なべ 千葉: same operator with five Chiba-named shops (same-name count includes the brand’s other concepts, as with Oagari) — the 千葉グループ site (chiba-group.jp, read 2026-11-06) lists ホルモン千葉 本店 (Kyoto), 渋谷店, 新宿店, 大阪梅田店 and 肉なべ千葉');
skip('26039528', '廻転鮨 銀座おのでら 京都店: a chain — the 銀座おのでら kaiten-sushi chain (31 shops, skipped as a chain in the Osaka sweep, osw2-12)');
skip('26004938', 'グリルキャピタル東洋亭 ポルタ店: a chain — a Tabelog name search (2026-11-06) lists twelve 東洋亭 shops in Kyoto and Osaka (Capital Toyotei Honten, Isetan, Takashimaya, Marutamachi, Umeda, Namba, Abeno Harukas and more; Tabelog English names)');

// ================================================================ 京鉄板焼肉 こと乃
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26036102/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '23:00']); const WE = day(['17:00', '23:00']);
  put({
    id: 'kyoto_teppan_yakiniku_kotono', name: '京鉄板焼肉 こと乃 (Kyo Teppan Yakiniku Kotono)', category: 'OMNI',
    lat: 35.003786, lng: 135.752652, cuisine_type: 'okonomiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan dishes with sauces — the house koto-yaki of meat or seafood steamed with cabbage, yakisoba, kimchi fried rice, cabbage omelette, konnyaku dengaku; sauces include a sweet-spicy miso; no gluten information (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the shop stresses vegetables, but most dishes are beef, offal, chicken or seafood and sauces are not described (Tabelog; 2024–2025 reviews).',
    hours_raw: 'Monday–Friday 11:30–23:00; Saturday and Sunday 17:00–23:00; L.O. 22:30 (Tabelog). Weekday lunch with a daily set under ¥1,000 (August 2026). Reservations accepted, including online (Tabelog; August 2026). Cards, IC, iD and QR codes (Tabelog). 58 seats with counter and tatami; private room for 20–50; designated smoking area; wheelchair accessible; free Wi-Fi (Tabelog). English menu; take-out and delivery (Tabelog). On Shijo-dori east of Horikawa, 5 min from Hankyu Omiya Stn (Tabelog). Formerly called Arata, according to a December 2024 reviewer.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-dori east of Horikawa — 5 min from Hankyu Omiya Stn',
    cuisine: 'Teppan yakiniku and teppan dishes (Tabelog) · signature koto-yaki: choose beef, chicken or seafood, steamed on the teppan with lots of cabbage, with a recommended sauce such as a sweet-spicy miso (July 2025) · koto-yaki of beef tendon and tracheal cartilage with rice (December 2024) · outside skirt, ajillo, yakisoba, kimchi fried rice (2024–2025) · cabbage omelette (June 2025) · offal soup, konnyaku dengaku, stir-fries (April 2025) · weekday lunch: yakisoba set with rice and miso soup (September 2025); daily set such as shrimp chilli with miso soup and a side, under ¥1,000; salted fries (August 2026)',
    website: null, gmaps: gm('京鉄板焼肉 こと乃 四条堀川'), menu_url: null,
    notes: '[Teppan yakiniku · Shijo-Horikawa, lively and good value] A big, cheerful teppan room on Shijo-dori where meat, offal or seafood is steamed with mounds of cabbage on the griddle (the house koto-yaki), alongside yakisoba, kimchi fried rice and cabbage omelette. Weekday lunch sets under ¥1,000; dinner about ¥4,000–6,000. Friendly, attentive staff; solo diners welcome; English menu.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Invoice T6130001051569 is registered to 株式会社いろはコーポレーション, of Kita-ku, Kyoto (NTA register). A December 2024 reviewer believed the shop used to be called “Arata” and had eaten at an Arata at Hachijo-guchi. Reviewers praise energetic, friendly staff who notice empty glasses (2025).',
      philosophy: null, specialty: 'Koto-yaki; teppan yakisoba.',
      anecdotes: [
        { text: 'An April 2025 solo diner was surprised to find other solo diners, including foreigners, at the counter after work.', source: R + 'B505314706/' },
        { text: 'A September 2025 visitor came for the yakisoba after watching a TV special on it the day before.', source: R + 'B514329381/' },
      ],
      japanese_sources_summary: '食べログ: 京鉄板焼肉 こと乃、焼肉・鉄板焼き・居酒屋、下京区四条通堀川東入柏屋町7、阪急大宮駅から徒歩5分、月〜金 11:30〜23:00、土・日 17:00〜23:00 (L.O.22:30)、予約可、カード・電子マネー・QR可、58席、20〜50名の個室、分煙、車椅子可、英語メニュー、テイクアウト・デリバリー、ベジタリアン対応、適格請求書 T6130001051569 (株式会社いろはコーポレーション)。口コミ (2024〜2026年、英語): 名物のこと乃焼き (牛・鶏・魚介をキャベツと鉄板で蒸し焼き、甘辛い味噌だれなど)、牛すじとウルテ、ハラミ、アヒージョ、焼きそば、キムチチャーハン、キャベツのオムレツ、平日の昼は1,000円以下の日替わり定食、以前は「Arata」だったとの声、スタッフが元気で気がきく。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=6130001051569', R + 'B496476384/', R + 'B497317213/', R + 'B503227378/', R + 'B505314706/', R + 'B507407907/', R + 'B507584723/', R + 'B508458509/', R + 'B510916068/', R + 'B514329381/', R + 'B533953850/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); solo diners and foreign guests at the counter (April 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通堀川東入柏屋町7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.003786, 135.752652); cross-checked: GSI 京都府京都市下京区柏屋町7番地 (lot) 19m; 29m from kyoto_bungalow_shijo_horikawa (柏屋町15); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533953850/'],
    price_note: 'One price point from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Koto-yaki (meat or seafood steamed with cabbage)', '', 'Teppan', 'ask', 'no', '2024–2025 reviews.', 'kotoyaki'),
      it('', '', 'Yakisoba set (lunch)', '', 'Lunch', 'no', 'no', 'September 2025.', 'yakisoba_set'),
      it('', '', 'Daily lunch set', '¥1,000', 'Lunch', 'ask', 'no', 'August 2026, “under ¥1,000”.', 'higawari'),
    ] }, {
    cuisine: '鉄板の焼肉と鉄板料理 (食べログ)・名物こと乃焼き: 牛、鶏、魚介を選び、たっぷりのキャベツと鉄板で蒸し焼きにし、甘辛い味噌だれなどおすすめのたれで (2025年7月)・牛すじとウルテのこと乃焼きとご飯 (2024年12月)・ハラミ、アヒージョ、焼きそば、キムチチャーハン (2024〜2025年)・キャベツのオムレツ (2025年6月)・ホルモンのスープ、こんにゃく田楽、炒め物 (2025年4月)・平日の昼: ご飯と味噌汁の焼きそば定食 (2025年9月)、海老チリなどの日替わり定食に味噌汁と小鉢で1,000円以下、塩のフライドポテト (2026年8月)',
    neighborhood: '堀川の東の四条通。阪急大宮駅から徒歩5分',
    gf_detail: '要確認。たれを使う鉄板料理。キャベツと蒸し焼きにする名物のこと乃焼き、焼きそば、キムチチャーハン、キャベツのオムレツ、こんにゃく田楽、甘辛い味噌だれなど。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアン対応、野菜にこだわるとあるが、ほとんどは牛、ホルモン、鶏、魚介の料理で、たれの中身は書かれていない (食べログ、2024〜2025年の口コミ)。',
    notes: '[鉄板焼肉・四条堀川、にぎやかでお値打ち] 四条通の広くて元気な鉄板の店。肉、ホルモン、魚介を山盛りのキャベツと鉄板で蒸し焼きにする名物のこと乃焼きに、焼きそば、キムチチャーハン、キャベツのオムレツ。平日の昼は1,000円以下の定食、夜は4,000〜6,000円ほど。気さくで気のきくスタッフ、ひとりでも入りやすく英語メニューあり。',
  });
}

// ================================================================ Artisan TEPPAN RESTAURANT
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26043224/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_artisan_teppan_shichijo', name: 'Artisan TEPPAN RESTAURANT', category: 'OMNI',
    lat: 34.989522, lng: 135.76483, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A small-plate teppan course with Italian technique — gnocchi, tartine, zeppole, capellini, ravioli, puff pastry — so most courses contain wheat; meat and seafood plates may be adaptable (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of seafood, Omi beef and Wagyu consommé (2026 reviews).',
    hours_raw: 'Lunch 12:00–14:30, dinner 17:00–23:00 daily; irregular closures (Tabelog). Reservations accepted; guests with children are asked to book a private room (Tabelog); an August 2026 diner confirmed children are welcome. From 11 July 2026 a 10% service charge is added (Tabelog, original ※2026年7月11日以降、ご飲食代とは別途サービス料10％を頂戴いたします。). Cards, e-money and QR (Tabelog). 22 seats: 10 at the counter and two private rooms (one tatami for 4, one table room for 8); private rooms need a ¥40,000 minimum (Tabelog; August 2026). Non-smoking (Tabelog). Ground floor of The Park Residence Kyoto Ekimae, 5 min from Shichijo Stn and 10 min from Kyoto Station (Tabelog). Opened July 2025 (July 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Shichijo-dori, between Kyoto Station and Shichijo Stn',
    cuisine: 'Teppanyaki served as many small dishes with Italian technique (2026 reviews) · Artisan Course ¥13,000: gnocchi, tartine and zeppole to start; spear squid with capellini; scallops and firefly squid; clams with new onion; shiitake and Kita Akari potatoes; ravioli in Wagyu consommé; puff pastry; a large herb salad; seasonal seafood such as abalone; Omi beef chosen by the chef from the producer (May–July 2026) · anniversary course (July 2026) · garlic rice as an extra (July 2026)',
    website: null, gmaps: gm('Artisan TEPPAN RESTAURANT 京都'), menu_url: null,
    notes: '[Teppan course · near Shichijo, Italian-trained chef] A white, calm teppan counter with two private rooms a short walk from Kyoto Station, where the chef cooks a long run of small plates with Italian technique — gnocchi, capellini, ravioli in Wagyu consommé, abalone, then Omi beef — for about ¥13,000. Good for anniversaries; children in the private rooms. 10% service charge since July 2026.',
    chef_bio: { chef_name: 'Shinohara', roles: ['Chef'], origin: null,
      background: 'A July 2026 reviewer names the chef as Shinohara, who “trained for three years at a Michelin-starred restaurant in Italy”, and says the chef visited Omi beef producers to choose animals by lineage; the same reviewer dates the opening to July 2025. Invoice T3040001120567 is registered to 株式会社ｐａｎｇａｅａ of Minato-ku, Tokyo (NTA register). A July 2026 couple found the chef very kind and talkative.',
      philosophy: 'Italian technique blended with teppan-yaki, one small dish at a time (July 2026 review).', specialty: 'Small-plate teppan course; Omi beef.',
      anecdotes: [
        { text: 'A July 2026 guest celebrating a partner’s birthday on the anniversary course added garlic rice and called it exceptional.', source: R + 'B532654827/' },
        { text: 'A May 2026 family celebrated an anniversary in a private room and praised the timing of the service.', source: R + 'B528355002/' },
      ],
      japanese_sources_summary: '食べログ: Artisan TEPPAN RESTAURANT、鉄板焼き・ステーキ・イタリアン、下京区材木町454-3 ザ・パークレジデンス京都駅前1F、七条駅から徒歩5分、京都駅から徒歩10分、昼12:00〜14:30、夜17:00〜23:00、不定休、予約可、子ども連れは個室で予約を、2026年7月11日以降はサービス料10%、カード・電子マネー・QR可、22席 (カウンター10、個室2)、個室は40,000円以上、禁煙、適格請求書 T3040001120567 (株式会社ｐａｎｇａｅａ)。口コミ (2026年、英語): 小皿の鉄板コース、Artisan コース13,000円、ニョッキ、タルティーヌ、ゼッポレ、ヤリイカとカッペリーニ、帆立とほたるいか、和牛コンソメのラビオリ、近江牛、シェフ Shinohara はイタリアの星付き店で3年修業、2025年7月開店。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3040001120567', R + 'B527667499/', R + 'B528355002/', R + 'B528374950/', R + 'B528502924/', R + 'B528732225/', R + 'B529071959/', R + 'B532357276/', R + 'B532654827/', R + 'B533293749/', R + 'B533795029/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter dining with explanations of each dish (August 2026); children in private rooms; 10% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区材木町454-3 ザ・パークレジデンス京都駅前 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.989522, 135.76483); cross-checked: GSI 京都府京都市下京区材木町454番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528374950/'],
    price_note: 'Course price from May and July 2026 reviews; service charge 10% extra from July 2026.', last_checked: TODAY, items: [
      it('', '', 'Artisan Course', '¥13,000', 'Courses', 'no', 'no', 'May 2026.', 'artisan_course'),
      it('', '', 'Anniversary course', '', 'Courses', 'no', 'no', 'July 2026.', 'anniversary_course'),
      it('', '', 'Garlic rice', '', 'Extras', 'ask', 'no', 'July 2026.', 'garlic_rice'),
    ] }, {
    cuisine: 'イタリアンの技法で小皿にする鉄板焼き (2026年の口コミ)・Artisan コース13,000円: ニョッキ、タルティーヌ、ゼッポレ、ヤリイカとカッペリーニ、帆立とほたるいか、蛤と新玉ねぎ、椎茸とキタアカリ、和牛コンソメのラビオリ、パイ、ハーブのサラダ、鮑などの季節の魚介、シェフが生産者を訪ねて選ぶ近江牛 (2026年5〜7月)・記念日のコース (2026年7月)・追加のガーリックライス (2026年7月)',
    neighborhood: '七条通の近く、京都駅と七条駅の間',
    gf_detail: '要確認。イタリアンの技法の小皿の鉄板コースで、ニョッキ、タルティーヌ、ゼッポレ、カッペリーニ、ラビオリ、パイなど小麦を含む皿が多い。肉や魚介の皿は相談の余地あり (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚介、近江牛、和牛のコンソメのコース (2026年の口コミ)。',
    notes: '[鉄板コース・七条近く、イタリアで修業したシェフ] 京都駅から歩ける、白く落ち着いた鉄板のカウンターと個室2つ。シェフがイタリアンの技法で小皿を次々に焼く (ニョッキ、カッペリーニ、和牛コンソメのラビオリ、鮑、締めに近江牛) コースで約13,000円。記念日向き、子ども連れは個室で。2026年7月からサービス料10%。',
  });
}

// ================================================================ 立ち呑み ツキノコグマ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038844/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '23:30']);
  put({
    id: 'kyoto_tachinomi_tsukinokoguma', name: '立ち呑み ツキノコグマ (Tachinomi Tsukinokoguma)', category: 'OMNI',
    lat: 35.0057, lng: 135.762495, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Drinking snacks — grilled white liver, crab-miso pasta salad, meat stew, oden, sashimi, charcoal-grilled chicken thigh with yuzu pepper; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: liver, meat stew, sashimi, crab and oden (2026 reviews).',
    hours_raw: 'Ground-floor standing bar 15:00–23:30 (L.O. 23:00), daily; second-floor tables 17:00–22:30 for banquet courses only, by reservation; open year-round (Tabelog). Standing places cannot be booked (Tabelog). Drinks may be brought when the second floor is reserved (October 2026). No cards or e-money; PayPay accepted (Tabelog). 26 standing places at a U-shaped counter and tables on the ground floor, 8 seats upstairs (Tabelog; September 2026). Non-smoking (Tabelog). In a renovated machiya down an alley, 5 min from Hankyu Karasuma Stn, near Nishiki Market and Daimaru (Tabelog; 2026 reviews). Opened 16 January 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Alley near Nishiki Market, east of Karasuma — 5 min from Hankyu Karasuma Stn',
    cuisine: 'Standing-bar snacks with care and style, and plenty of sake (2026 reviews) · grilled white liver ¥490, the most popular dish (September 2026) · four-appetizer platter for solo drinkers ¥790; solo platter with crab-miso pasta salad, nut salad and hamachi and yokowa sashimi (September 2026) · signature meat stew; luxurious crab-miso salad (September 2026) · charcoal-grilled chicken thigh with yuzu pepper (September 2026) · oden and grilled dishes; a wide range of Japanese sake (October 2026)',
    website: null, gmaps: gm('立ち呑み ツキノコグマ 京都 烏丸'), menu_url: null,
    notes: '[Standing bar · machiya off Nishiki near Karasuma] A popular standing bar in a renovated townhouse down an alley, with a U-shaped counter and young, energetic staff: grilled white liver (¥490), a four-snack solo platter (¥790), crab-miso salad, meat stew, oden and lots of sake. Opens at 15:00 and fills fast; the upstairs room is for booked banquet courses only. PayPay or cash.',
    chef_bio: { chef_name: null, roles: ['Young staff (unnamed)'], origin: null,
      background: 'No owner is named in the sources read. A September 2026 reviewer describes young staff running the bar with lots of energy; another was invited by a neighbouring shopkeeper.',
      philosophy: null, specialty: 'Grilled white liver; meat stew.',
      anecdotes: [
        { text: 'An October 2026 reviewer stopped in after the Omusubi Festival at Yoshida Shrine and a visit to a sake shop.', source: R + 'B537162092/' },
        { text: 'A September 2026 diner was still thinking about the grilled white liver the next day.', source: R + 'B538215516/' },
      ],
      japanese_sources_summary: '食べログ: 立ち呑み ツキノコグマ、立ち飲み、中京区貝屋町561、阪急烏丸駅から徒歩5分、1階の立ち飲みは15:00〜23:30 (L.O.23:00)、2階のテーブルは17:00〜22:30で宴会コースの予約のみ、年中無休、立ち飲みは予約不可、カード・電子マネー不可、PayPay可、1階26・2階8、禁煙、2023年1月16日オープン。口コミ (2026年、英語): 路地の奥の町家を改装した立ち飲み、コの字のカウンター、白レバー焼き490円、ひとり飲み用の前菜4種盛り790円、蟹味噌のパスタサラダ、肉煮込み、もも炭火焼きと柚子胡椒、おでん、日本酒が豊富、若いスタッフが元気、2階を予約すれば持ち込み可。',
      confidence: 'medium', sources: [TB, R + 'B535407888/', R + 'B535712475/', R + 'B536032727/', R + 'B536306358/', R + 'B536463908/', R + 'B536952470/', R + 'B537162092/', R + 'B537555814/', R + 'B537814191/', R + 'B538215516/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter, no bookings downstairs; solo-friendly platters; PayPay or cash.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区貝屋町561',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.0057, 135.762495); cross-checked: GSI 京都府京都市中京区貝屋町561番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536463908/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Grilled white liver', '¥490', 'Grills', 'ask', 'no', 'September 2026.', 'shiro_liver'),
      it('', '', 'Four-appetizer platter for solo drinkers', '¥790', 'Small plates', 'ask', 'no', 'September 2026.', 'solo_platter'),
      it('', '', 'Meat stew', '', 'Small plates', 'ask', 'no', 'September 2026.', 'niku_nikomi'),
    ] }, {
    cuisine: 'ていねいでおしゃれな立ち飲みの肴と豊富な日本酒 (2026年の口コミ)・一番人気の白レバー焼き490円 (2026年9月)・ひとり飲み用の前菜4種盛り790円、蟹味噌のパスタサラダ、ナッツのサラダ、はまちとよこわの刺身のひとり盛り (2026年9月)・名物の肉煮込み、贅沢な蟹味噌のサラダ (2026年9月)・もも肉の炭火焼きと柚子胡椒 (2026年9月)・おでんと焼き物、日本酒の種類が多い (2026年10月)',
    neighborhood: '錦市場の近く、烏丸の東の路地。阪急烏丸駅から徒歩5分',
    gf_detail: '要確認。白レバー焼き、蟹味噌のパスタサラダ、肉煮込み、おでん、刺身、もも炭火焼きと柚子胡椒などの酒の肴。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。レバー、肉煮込み、刺身、蟹、おでん (2026年の口コミ)。',
    notes: '[立ち飲み・錦市場近く、烏丸の路地の町家] 路地の奥、改装した町家の人気の立ち飲み。コの字のカウンターに若く元気なスタッフ。白レバー焼き (490円)、ひとり用の4種盛り (790円)、蟹味噌のサラダ、肉煮込み、おでんと日本酒がたくさん。15時からですぐ満席に。2階は予約の宴会コースのみ。PayPay か現金。',
  });
}

// ================================================================ アポロプラス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002988/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_apollo_plus_sanjo', name: 'アポロプラス (Apollo+)', category: 'OMNI',
    lat: 35.008558, lng: 135.763401, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wide izakaya menu — sashimi, Kyoto vegetable salad, mentaiko pasta, homemade gyoza, fried conger eel, agedashi, Wagyu cutlet and sirloin sandwich; no gluten information (Tabelog shop text; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and meat dishes; the vegetable dishes (caprese, tomato and avocado, agedashi) are not described (2026 reviews).',
    hours_raw: '17:00–24:00 (food L.O. 23:00, drinks 23:30), Tuesday–Sunday; closed Monday, 31 December and 1 January, plus a monthly two-day break (27–28 October and 17–18 November 2026) (Tabelog). Reservations accepted; weekend seat requests may not be met; book private rooms early (Tabelog). Service charge ¥390 per person, ¥590 from 29 December to 3 January (Tabelog, original サービス料 390円 12月29日〜1月3日は590円いただきます。); a reviewer lists the ¥390 as the otoshi (August 2026). Cards and QR (PayPay, Rakuten Pay); no e-money (Tabelog). 55 seats over two floors with counter, sofa, tatami and sunken seating; private rooms for 4–6, up to 20 for parties; the upstairs rooms are reached by stairs only (Tabelog; September 2026). Non-smoking (Tabelog). On the 2nd–3rd floors of NEOD Sanjo on Sanjo east of Sakaimachi, 6 min from Karasuma Oike Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-dori east of Sakaimachi — 6 min from Karasuma Oike Stn',
    cuisine: 'An izakaya going beyond the usual: sashimi platter, Kyoto vegetable salad, mentaiko pasta, homemade gyoza; Kyoto and national sakes including an Ozeki junmai daiginjo namagenshu on keg (Tabelog shop text) · caprese ¥990, agedashi tofu ¥660, Kuroge Wagyu cutlet with cream sauce ¥3,900, homemade fruit sour ¥770, sashimi at market price (August 2026) · fried conger eel with tartar and plum, “The Only Pasta”, agedashi eggplant, tonkatsu, ume onigiri, assorted sweets (August 2026) · grilled conger eel, roast beef (September 2026) · tomato and avocado with breadcrumbs and balsamic (September 2026) · sirloin sandwich (October 2026) · free-drink courses of 120 minutes (September 2026)',
    website: null, gmaps: gm('アポロプラス 京都 三条堺町'), menu_url: null,
    notes: '[Izakaya · Sanjo-Sakaimachi, hideaway rooms] A two-floor creative izakaya with sofa corners and semi-private “hideout” rooms, run by a chef who trained at a high-end restaurant: sashimi, Wagyu cutlet in cream sauce, sirloin sandwich, homemade gyoza, mentaiko pasta, plus Kyoto sakes. About ¥6,000–8,000 a head. ¥390 service charge each; closed Mondays and two days a month.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'An October 2026 regular writes that “the owner and chef, who trained at a high-end restaurant, creates dishes that are simply outstanding.” Invoice T9130002003657 is registered to 有限会社クロスポイント (NTA register). A September 2026 diner found the 120-minute free-drink limit ran out before the food; an October 2026 guest was handed a card slip instead of a receipt.',
      philosophy: '“Uncompromising attention to detail, going beyond the typical izakaya fare” (Tabelog shop text).', specialty: 'Sashimi; Wagyu cutlet; homemade gyoza.',
      anecdotes: [
        { text: 'An August 2026 group of four booked a second-floor private room with sunken kotatsu seating for a night out.', source: R + 'B474881379/' },
        { text: 'A September 2026 diner ordered the grilled conger eel twice.', source: R + 'B535777636/' },
      ],
      japanese_sources_summary: '食べログ: アポロプラス、居酒屋・魚介料理・ステーキ、中京区三条堺町東入ル桝屋町67 NEOD三条 2F・3F、烏丸御池駅から徒歩6分、火〜日 17:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、月曜定休、12月31日・1月1日休み、月に一度の連休 (10月27・28日、11月17・18日)、予約可、サービス料390円 (12月29日〜1月3日は590円)、カード・QR可、55席 (カウンター、ソファ、座敷、掘りごたつ)、個室4〜6名、20名までの宴会、禁煙、適格請求書 T9130002003657 (有限会社クロスポイント)。店の紹介: 刺身の盛り合わせ、京野菜のサラダ、明太子パスタ、自家製餃子、Ozeki の純米大吟醸生原酒の樽、京都と全国の地酒。口コミ (2026年、英語): 高級店で修業した店主兼料理人、黒毛和牛のカツとクリームソース3,900円、カプレーゼ990円、揚げ出し豆腐660円、穴子の唐揚げ、サーロインサンド、半個室が隠れ家のよう、個室へは階段のみ。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=9130002003657', R + 'B117896232/', R + 'B474881379/', R + 'B533842251/', R + 'B534088957/', R + 'B534724572/', R + 'B535124886/', R + 'B535311632/', R + 'B535777636/', R + 'B536784512/', R + 'B537155176/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private and semi-private rooms by stairs only; ¥390 service charge; book ahead at weekends.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条堺町東入ル桝屋町67 ＮＥＯＤ三条 2F・3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with November 2026 closing days; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008558, 135.763401); cross-checked: GSI 京都府京都市中京区桝屋町67番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534088957/'],
    price_note: 'Prices from an August 2026 review; ¥390 service charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Kuroge Wagyu cutlet with cream sauce', '¥3,900', 'Meat', 'no', 'no', 'August 2026.', 'wagyu_katsu'),
      it('', '', 'Caprese salad', '¥990', 'Salads', 'gf', 'no', 'August 2026.', 'caprese'),
      it('', '', 'Agedashi tofu', '¥660', 'Small plates', 'no', 'no', 'August 2026.', 'agedashi'),
      it('', '', 'Homemade fruit sour', '¥770', 'Drinks', '', '', 'August 2026.', 'fruit_sour'),
      it('', '', 'Service charge (per person)', '¥390', 'Charges', '', '', 'Tabelog; ¥590 from 29 December to 3 January.', 'service'),
    ] }, {
    cuisine: 'ありきたりの居酒屋料理を超えて: 刺身の盛り合わせ、京野菜のサラダ、明太子パスタ、自家製餃子。Ozeki の純米大吟醸生原酒の樽など京都と全国の地酒 (食べログの店の紹介)・カプレーゼ990円、揚げ出し豆腐660円、黒毛和牛のカツとクリームソース3,900円、自家製フルーツサワー770円、刺身は時価 (2026年8月)・穴子の唐揚げのタルタルと梅肉、「The Only Pasta」、揚げ出し茄子、とんかつ、梅のおにぎり、甘味の盛り合わせ (2026年8月)・焼き穴子、ローストビーフ (2026年9月)・パン粉とバルサミコのトマトとアボカド (2026年9月)・サーロインサンド (2026年10月)・120分の飲み放題コース (2026年9月)',
    neighborhood: '堺町の東の三条通。烏丸御池駅から徒歩6分',
    gf_detail: '要確認。刺身、京野菜のサラダ、明太子パスタ、自家製餃子、穴子の唐揚げ、揚げ出し、和牛カツ、サーロインサンドなどの幅広い居酒屋料理。グルテンの情報はない (食べログの店の紹介、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚介と肉の料理。野菜の皿 (カプレーゼ、トマトとアボカド、揚げ出し) の中身は書かれていない (2026年の口コミ)。',
    notes: '[居酒屋・三条堺町、隠れ家の個室] ソファ席や隠れ家のような半個室のある2フロアの創作居酒屋。高級店で修業した店主兼料理人が、刺身、クリームソースの和牛カツ、サーロインサンド、自家製餃子、明太子パスタを。京都の地酒も。1人6,000〜8,000円ほど。サービス料1人390円、月曜と月に2日休み。',
  });
}

save();
