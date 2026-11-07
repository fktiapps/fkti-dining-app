// Kyoto priority (kyoto-missed), worker osw13, batch 75 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// 海鮮居酒屋 祭, WAGYU SUKIYAKI 祇園, 隠れ酒場ともしび3rd, 鉄板居酒屋 双葉.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-75');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 海鮮居酒屋 祭ーMATSURIー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26024076/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '25:30']), F = day(['17:00', '26:00']), S = day(['16:30', '26:00']), U = day(['16:30', '25:30']);
  put({
    id: 'kyoto_kaisen_izakaya_matsuri', name: '海鮮居酒屋 祭ーMATSURIー (Kaisen Izakaya Matsuri)', category: 'OMNI',
    lat: 35.004009, lng: 135.770301, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, chijimi, fried chicken, nama-fu dengaku and soy-based dishes (2022–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya — sashimi, grilled fish, conger eel (2022–2025 reviews).',
    hours_raw: 'Tabelog: Tue–Thu 17:00–1:30 (last orders food 0:30, drinks 1:00); Fri and nights before holidays 17:00–2:00; Sat 16:30–2:00; Sun and holidays 16:30–1:30; closed Monday (Tuesday when Monday is a holiday). Reservations taken. Appetiser charge ¥480 — Tabelog, Japanese original 「お通し480円」. 70 seats with semi-private areas and a sunken-kotatsu room for 6–10; groups over 50. Tabelog lists smoking as allowed (a November 2022 diner found it non-smoking). English menu; BYO drinks allowed. Cards, transit IC and e-money, PayPay. Courses of ¥4,500, ¥5,500 and ¥6,500 with 120-minute all-you-can-drink (Tabelog). On the 2F of the Gurmonde Building, by Hankyu Kawaramachi exit 1-A. Opened 29 May 2014 (Tabelog).',
    hours: { 1: A, 2: A, 3: A, 4: F, 5: S, 6: U }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Kawaramachi / Kiyamachi — by Hankyu Kawaramachi exit 1-A',
    cuisine: 'A large late-night seafood izakaya with Kyoto vegetables (Tabelog; 2022–2025 reviews) · chef\'s sashimi, grilled yellowtail collar, deep-fried conger eel, tekka maki, grilled Thai mackerel, grilled stingray fin (2022–2025) · yuba sashimi, maitake tempura, Kyoto nama-fu dengaku with miso, miso-marinated tofu, grilled mentaiko, fried chicken, chijimi (2023–2025) · courses of sashimi, ankake, tempura, grilled fish and noodles, ¥4,500–6,500 with 120 minutes of drinks (Tabelog; December 2023)',
    website: null, gmaps: gm('海鮮居酒屋 祭 河原町 グルモンドビル'), menu_url: null,
    notes: '[Seafood izakaya · Kawaramachi, open till 2 a.m.] A roomy second-floor seafood izakaya at the Kawaramachi station exit, open into the small hours: sashimi, grilled collar and Thai mackerel, Kyoto nama-fu dengaku and party courses with two hours of drinks from ¥4,500, in semi-private booths. ¥480 appetiser charge; smoking allowed per Tabelog. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 29 May 2014 (Tabelog). Reviewers from 2022 to 2025 describe a spacious stylish room with semi-private seating, prompt staff who remembered a guest\'s booking by name (November 2024), and quick drinks service.',
      philosophy: null,
      specialty: 'Sashimi; nama-fu dengaku.',
      anecdotes: [
        { text: 'November 2024: "when I arrived, the staff warmly welcomed me by name and were completely aware of my booking details."', source: R + 'B495019418/' },
        { text: 'November 2023: "I worried the food might be frozen... but my concerns were unfounded."', source: R + 'B475906118/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮居酒屋 祭ーMATSURIー 〜旬魚と京野菜とお酒のお店〜、居酒屋・海鮮・日本料理、下京区四条通小橋西入る真町95 グルモンドビル 2F、阪急河原町駅1-A出口すぐ、火〜木 17:00〜翌1:30・金・祝前日 17:00〜翌2:00・土 16:30〜翌2:00・日祝 16:30〜翌1:30、月曜休み (祝日なら火曜)、原文で「お通し480円」、70席、半個室・掘りごたつの個室、50名以上可、喫煙可、英語メニュー、持ち込み可、カード・電子マネー・PayPay可、120分飲み放題付きのコース4,500円・5,500円・6,500円、2014年5月29日オープン。口コミ (2020年11月〜2025年5月、英語): おすすめの刺身、ぶりかまの塩焼き、穴子の唐揚げ、鉄火巻、Thai mackerel の塩焼き、エイヒレ、湯葉刺し、舞茸の天ぷら、生麩田楽、豆腐の味噌漬け、焼き明太子、唐揚げ、チヂミ、刺身・あんかけ・天ぷら・焼き魚・締めの麺のコース、名前を覚えていた接客。',
      confidence: 'low', sources: [TB, R + 'B457115552/', R + 'B474722239/', R + 'B475906118/', R + 'B477114370/', R + 'B477373112/', R + 'B495019418/', R + 'B500285372/', R + 'B505976218/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; ¥480 appetiser charge; smoking allowed per Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条通小橋西入る真町95 グルモンドビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through May 2025.' },
    pin_source: `Tabelog ${TB} (35.004009, 135.770301); cross-checked: GSI 京都府京都市下京区真町95番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Course with 120-min all-you-can-drink', '¥4,500 / ¥5,500 / ¥6,500', 'Course', 'no', 'no', 'Tabelog.', 'izakaya_course'),
      it('', '', 'Kyoto nama-fu dengaku', null, 'Small plates', 'no', 'ask', 'November 2022; May 2025.', 'namafu'),
    ] }, {
    cuisine: '京野菜もある、夜遅くまでの大きな海鮮居酒屋 (食べログ、2022〜2025年の口コミ)・おすすめの刺身、ぶりかまの塩焼き、穴子の唐揚げ、鉄火巻、Thai mackerel の塩焼き、エイヒレ (2022〜2025年)・湯葉刺し、舞茸の天ぷら、京生麩の味噌田楽、豆腐の味噌漬け、焼き明太子、若鶏の唐揚げ、チヂミ (2023〜2025年)・刺身、あんかけ、天ぷら、焼き魚、締めの麺のコースは120分飲み放題付きで4,500〜6,500円 (食べログ、2023年12月)',
    neighborhood: '四条河原町・木屋町。阪急河原町駅1-A出口すぐ',
    gf_detail: 'グルテンフリーではない: 天ぷら、チヂミ、唐揚げ、生麩田楽、醤油の料理 (2022〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、焼き魚、穴子の海鮮居酒屋 (2022〜2025年の口コミ)。',
    notes: '[海鮮居酒屋・河原町、深夜2時まで] 河原町駅の出口すぐのビル2階にある広い海鮮居酒屋で、深夜まで営業。刺身、かまや Thai mackerel の塩焼き、京生麩の田楽、4,500円からの2時間飲み放題付きのコースを半個室で。お通し480円、食べログでは喫煙可。月曜休み。',
  });
}

// ================================================================ WAGYU SUKIYAKI 祇園
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045502/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:45', '14:15'], ['17:00', '22:00']);
  put({
    id: 'kyoto_wagyu_sukiyaki_gion_kiyamachi', name: 'WAGYU SUKIYAKI 祇園 (WAGYU SUKIYAKI Gion)', category: 'OMNI',
    lat: 35.00319, lng: 135.770755, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wagyu dipped in sauce and egg (October 2026); sukiyaki sauce is normally soy-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: A5 wagyu sukiyaki with raw egg (2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sat 11:45–14:15 and 17:00–22:00; closed Sunday and Monday. Reservations taken (private hire by phone). 33 seats: 10 at tables, 8 at the counter, plus a 14-seat terrace where dining is not allowed (smoking is allowed there). English picture menu; children, babies and strollers welcome. Cards (incl. UnionPay); no e-money or QR. 4F of the RAKUAS Kiyamachi building on Nishi-Ishigaki, 3 min from Hankyu Kawaramachi exit 2B. Opened 15 July 2026 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Ishigaki by the Kamo River, Shijo — 3 min walk from Hankyu Kawaramachi',
    cuisine: 'A new (July 2026) A5-wagyu sukiyaki restaurant above Kiyamachi (Tabelog; 2026 reviews) · "A5 Rank Wagyu Sukiyaki Set", cooked in front of you, with seasonal vegetables, egg and rice (October 2026) · truffle egg over rice to finish (August 2026) · a bar and rooftop in the same venue (October 2026)',
    website: null, gmaps: gm('WAGYU SUKIYAKI 祇園 斎藤町'), menu_url: null,
    notes: '[Sukiyaki · Kiyamachi-Shijo, a new A5-wagyu room] A sukiyaki restaurant that opened in July 2026 on the fourth floor of a Kiyamachi building by the Kamo River, serving A5 wagyu cooked at the table with egg and seasonal vegetables, and truffle egg over rice to finish; an English picture menu and a terrace for smoking. Only two reviews so far (August, October 2026). Closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 15 July 2026 (Tabelog). Two 2026 reviewers describe A5 wagyu with beautiful marbling cooked in front of the guest, a quiet room in Kiyamachi, and a bar and rooftop in the same venue. It shares the RAKUAS Kiyamachi building (斎藤町123) with 隠れ酒場ともしび3rd (2F) and 京鴨 鴨蔵.',
      philosophy: null,
      specialty: 'A5 wagyu sukiyaki.',
      anecdotes: [
        { text: 'August 2026: "One standout for me was the truffle egg over rice served at the end of the meal."', source: R + 'B535205855/' },
      ],
      japanese_sources_summary: '食べログ: WAGYU SUKIYAKI 祇園、日本料理・肉料理・すき焼き、下京区斎藤町123 RAKUSA木屋町 4F、京阪祇園四条駅3番出口から徒歩5分、阪急河原町駅2B出口から徒歩3分、火〜土 11:45〜14:15・17:00〜22:00、日・月休み、予約可 (貸切は電話)、33席 (テーブル10、カウンター8、テラス14は飲食不可で喫煙可)、英語と写真のメニュー、子供・赤ちゃん・ベビーカー可、カード可、電子マネー・QR不可、2026年7月15日オープン。口コミ (2026年8月・10月、英語): A5ランクの和牛のすき焼き、目の前で焼く、季節の野菜、締めのトリュフの卵かけご飯、同じ建物にバーと屋上。',
      confidence: 'low', sources: [TB, R + 'B535205855/', R + 'B537082185/'] },
    cultural_comfort: { level: 'english', note: 'English picture menu; new restaurant with few reviews.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区斎藤町123 RAKUAS木屋町 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened July 2026) with reviews from August and October 2026.' },
    pin_source: `Tabelog ${TB} (35.003190, 135.770689); cross-checked: GSI 京都府京都市下京区斎藤町123番地 (lot) 20m; offset about 6 m east because the Tabelog point is shared with 隠れ酒場ともしび3rd (same building) and sits 1.5 m from kyoto_kyogamo_kamokura; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537082185/'],
    price_note: 'No prices in the sources; Tabelog\'s budget is ¥5,000–5,999.', last_checked: TODAY, items: [
      it('', '', 'A5 Rank Wagyu Sukiyaki Set', null, 'Sukiyaki', 'no', 'no', 'October 2026.', 'sukiyaki'),
    ] }, {
    cuisine: '木屋町のビル上階に2026年7月にできたA5和牛のすき焼き店 (食べログ、2026年の口コミ)・目の前で焼く「A5ランク和牛すき焼き」のセット、季節の野菜、卵、ご飯 (2026年10月)・締めのトリュフの卵かけご飯 (2026年8月)・同じ店にバーと屋上 (2026年10月)',
    neighborhood: '西石垣、鴨川のそば、四条。阪急河原町駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: たれと卵で食べる和牛 (2026年10月)。すき焼きのたれはふつう醤油が基本。',
    vegan_detail: 'ヴィーガン不可: 生卵で食べるA5和牛のすき焼き (2026年の口コミ)。',
    notes: '[すき焼き・木屋町四条、新しいA5和牛の店] 2026年7月に開店した、鴨川そばの木屋町のビル4階のすき焼き店。A5和牛を卓で焼き、卵と季節の野菜で、締めはトリュフの卵かけご飯。英語の写真メニュー、喫煙はテラスで。口コミはまだ2件 (2026年8月・10月)。日・月休み。',
  });
}

// ================================================================ 隠れ酒場ともしび3rd 海鮮と炭火鶏焼
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042556/'; const R = TB + 'dtlrvwlst/';
  const W = day(['16:30', '24:00']), F = day(['16:30', '25:00']);
  put({
    id: 'kyoto_tomoshibi_3rd_kiyamachi', name: '隠れ酒場ともしび3rd 海鮮と炭火鶏焼 (Kakure Sakaba Tomoshibi 3rd)', category: 'OMNI',
    lat: 35.003233, lng: 135.770703, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: karaage, tartar-sauce dishes, oden, soy-based grills (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and charcoal-grilled chicken izakaya (Tabelog; reviews).',
    hours_raw: 'Tabelog: Sun–Thu and holidays 16:30–24:00 (last orders food 23:15, drinks 23:30); Fri, Sat and nights before holidays 16:30–1:00; closing days vary. Reservations taken. Happy hour until 19:00: highballs ¥100 and draft beer ¥250 with one dish from a set list (November 2025; February 2026; September 2026). All-you-can-drink ¥1,680 (December 2025); all-you-can-eat-and-drink plans. No service charge — Tabelog, Japanese original 「無し」 (the English page says one is added). 50 seats; private rooms for 20 or more. Smoking allowed (Tabelog; September 2026). English menu; tablet ordering. Cards, e-money, QR (incl. Alipay, WeChat Pay). 2F of RAKUAS Kiyamachi, 1 min from Hankyu Kawaramachi. Opened 3 March 2025 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Ishigaki, Shijo-Kawaramachi — 1 min walk from Hankyu Kawaramachi',
    cuisine: 'A lively seafood-and-charcoal-chicken izakaya, the third of the ともしび shops (Tabelog; 2025–2026 reviews) · sashimi platter of three ¥990; seafood yukhoe ¥680; smoked mackerel ¥680; yokowa tuna tataki; grilled nodoguro; butter-steamed clams ¥880; abalone with butter (2025–2026) · charcoal-grilled chicken, neck, tsukune ¥350, "Tomoshibi chicken" tulip wings ¥550, cartilage karaage ¥580 (2025–2026) · Kyoto dashimaki ¥680, thick fried tofu with Kujo leeks ¥580, beef-tendon stew ¥680, oden, potato salad; a free small dish, and red miso soup with the bill (2026 reviews)',
    website: null, gmaps: gm('隠れ酒場ともしび3rd 木屋町'), menu_url: null,
    notes: '[Izakaya · Kiyamachi-Shijo, ¥100 highball happy hour] A busy second-floor izakaya by Hankyu Kawaramachi, opened in 2025: sashimi, charcoal-grilled chicken and cheap snacks, a ¥100-highball happy hour until 19:00, cheerful young staff, free extra dishes and smoking allowed. One diner waited so long that a tsukune order was cancelled (February 2026). No service charge.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 3 March 2025 (Tabelog). The same name runs four shops in the Kyoto crawl — 隠れ酒場 ともしび (Karasuma-Takoyakushi), 肴と海鮮 ともしびセカンド, this 3rd and お酒とまるまる ともしびzero — none yet in this app. Reviewers in 2025–2026 describe energetic young staff who remember regulars, complimentary small dishes, and tablet ordering. It shares the RAKUAS Kiyamachi building with WAGYU SUKIYAKI 祇園 (4F).',
      philosophy: null,
      specialty: 'Sashimi; charcoal-grilled chicken.',
      anecdotes: [
        { text: 'February 2026: "the food takes an incredibly long time to arrive. In the end, I had to cancel my order for the tsukune because it still hadn\'t come."', source: R + 'B523695943/' },
        { text: 'February 2026: "When I asked for the bill, they served a bowl of red miso soup as well."', source: R + 'B522825490/' },
        { text: 'November 2025: "The JPY 100 highball is generously filled to the brim."', source: R + 'B516865219/' },
      ],
      japanese_sources_summary: '食べログ: 隠れ酒場ともしび3rd 海鮮と炭火鶏焼、居酒屋・海鮮・焼鳥、下京区西石垣通四条下る斎藤町123 RAKUAS木屋町 2F、阪急河原町駅から徒歩1分、日〜木・祝 16:30〜24:00・金土・祝前日 16:30〜翌1:00、休みは変動、予約可、原文でサービス料「無し」、50席、20名以上の個室、喫煙可、英語メニュー、カード・電子マネー・QR可、飲み放題・食べ放題、ハッピーアワー、2025年3月3日オープン。口コミ (2025年7月〜2026年9月、英語): 19時までのハッピーアワー (指定の1品でハイボール100円・生ビール250円)、飲み放題1,680円、刺身3種盛り990円、海鮮ユッケ680円、炙りしめ鯖680円、よこわのたたき、のどぐろの塩焼き、あさりのバター蒸し880円、鮑のバター、ともしびチキン550円、つくね350円、軟骨の唐揚げ580円、京風だし巻680円、九条ねぎの厚揚げ580円、牛すじ煮込み680円、おでん、サービスの1品、会計時の赤だし、タブレットで注文、料理が来るのがとても遅かったという声。',
      confidence: 'medium', sources: [TB, R + 'B503109761/', R + 'B509430093/', R + 'B511231355/', R + 'B516865219/', R + 'B518284589/', R + 'B521881000/', R + 'B522825490/', R + 'B523695943/', R + 'B531702333/', R + 'B532589085/', R + 'B532802704/', R + 'B534207116/'] },
    cultural_comfort: { level: 'english', note: 'English menu; tablet ordering; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西石垣通四条下る斎藤町123 RAKUAS木屋町 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003190, 135.770689); cross-checked: GSI 京都府京都市下京区斎藤町123番地 (lot) 20m; offset about 5 m north-northeast because the Tabelog point is shared with WAGYU SUKIYAKI 祇園 (same building) and sits 1.5 m from kyoto_kyogamo_kamokura; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531702333/', R + 'B516865219/'],
    price_note: 'Prices from November 2025–March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter, three kinds', '¥990', 'Fish', 'ask', 'no', 'March 2026.', 'sashimi'),
      it('', '', 'Tomoshibi chicken (tulip wings)', '¥550', 'Grill', 'no', 'no', 'November 2025.', 'karaage'),
      it('', '', 'Happy-hour highball (with one listed dish)', '¥100', 'Drinks', 'ask', 'ask', 'Until 19:00; November 2025.', 'highball'),
    ] }, {
    cuisine: 'ともしびの3店目の、にぎやかな海鮮と炭火の鶏の居酒屋 (食べログ、2025〜2026年の口コミ)・刺身3種盛り990円、海鮮ユッケ680円、炙りしめ鯖680円、よこわのたたき、のどぐろの塩焼き、あさりのバター蒸し880円、鮑のバター (2025〜2026年)・炭火の鶏、せせり、つくね350円、チューリップの「ともしびチキン」550円、軟骨の唐揚げ580円 (2025〜2026年)・京風だし巻680円、九条ねぎの厚揚げ580円、牛すじ煮込み680円、おでん、ポテトサラダ。サービスの1品と会計時の赤だし (2026年の口コミ)',
    neighborhood: '西石垣、四条河原町。阪急河原町駅から徒歩1分',
    gf_detail: 'グルテンフリーではない: 唐揚げ、タルタルの料理、おでん、醤油の焼き物 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 海鮮と炭火の鶏の居酒屋 (食べログ、口コミ)。',
    notes: '[居酒屋・木屋町四条、100円ハイボールのハッピーアワー] 阪急河原町駅すぐのビル2階で2025年に開いたにぎやかな居酒屋。刺身、炭火の鶏、安いつまみ、19時までの100円ハイボール、元気な若いスタッフ、サービスの1品、喫煙可。料理が遅く注文を取り消したという声も (2026年2月)。サービス料なし。',
  });
}

// ================================================================ 鉄板居酒屋 双葉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039436/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '25:00']), E = day(['18:00', '26:00']);
  put({
    id: 'kyoto_teppan_izakaya_futaba', name: '鉄板居酒屋 双葉 (Teppan Izakaya Futaba)', category: 'OMNI',
    lat: 35.004637, lng: 135.770312, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki, yakisoba, mackerel toast, karaage and sauces (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef, shrimp and egg teppan dishes (2025–2026 reviews).',
    hours_raw: 'Tabelog: Tue–Fri 18:00–1:00; Sat and Sun 18:00–2:00; closed Monday and the day after a public holiday. Reservations advised — nearly always full late at night (March 2026); seat type may change. No cover charge — Tabelog, Japanese original 「無し」. 40 seats: an 8-seat counter at the open teppan, two tables for 2, a small raised area for 6, and a 20-seat tatami room upstairs. Smoking allowed (Tabelog; April 2026). Cards (Visa, Master, JCB, AMEX, Diners); no e-money or QR. On Nishikiyamachi north of Shijo. Opened 30 April 2023 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikiyamachi, north of Shijo — 5 min walk from Kyoto-Kawaramachi Stn',
    cuisine: 'A late-night creative teppan izakaya with natural wine (Tabelog; 2025–2026 reviews) · fresh-shrimp chili, the house favourite; "Futaba-yaki"; okonomiyaki; spicy Sichuan-style yakisoba; tonpei; grilled beef tendon with egg; mackerel toast; yukhoe sandwich (2025–2026) · appetiser of low-temperature beef tongue; beef carpaccio; gizzard confit; fried hoso and shrimp ajillo; kara-age; potato salad; prosciutto; cheese platter (2025–2026) · natural wines chosen to your taste, including orange wine; weekly specials',
    website: null, gmaps: gm('鉄板居酒屋 双葉 西木屋町'), menu_url: null,
    notes: '[Teppan izakaya · Nishikiyamachi, okonomiyaki and natural wine till 2 a.m.] A stylish, wine-minded teppan izakaya off Shijo-Kiyamachi where the owner pairs natural wines with fresh-shrimp chili, Futaba-yaki okonomiyaki, spicy yakisoba and beef-tendon teppan, open till 1–2 a.m. Diners note a 30-minute wait for the first dish and a cold counter (January 2026), strong flavours (November 2025) and a cramped room (April 2026). Smoking allowed. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner, not named in a source'], origin: null,
      background: 'Opened 30 April 2023 (Tabelog). Reviewers in 2025–2026 describe a modern Japanese room with an open-kitchen counter downstairs and tables upstairs, an owner who loves wine and explains each bottle, weekly changing specials, and a crowd that keeps arriving late at night.',
      philosophy: null,
      specialty: 'Fresh-shrimp chili; Futaba-yaki.',
      anecdotes: [
        { text: 'January 2026: "the service was quite slow; it took about 30 minutes for the first dish to arrive… The back of the counter felt very cold."', source: R + 'B510461635/' },
        { text: 'July 2025: "The owner loves wine and provides detailed explanations."', source: R + 'B510842590/' },
        { text: 'November 2025: "The yakisoba and okonomiyaki were just okay. The flavors were quite strong."', source: R + 'B517835295/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板居酒屋 双葉、居酒屋・お好み焼き・創作料理、中京区紙屋町西木屋町通四条上る373、京都河原町駅から徒歩5分、火〜金 18:00〜翌1:00・土日 18:00〜翌2:00、月曜と祝日の翌日休み、予約可 (席の指定は変わることも)、原文でチャージ「無し」、40席 (カウンター8、2人席2、小上がり6、2階座敷20)、喫煙可、カード可、電子マネー・QR不可、2023年4月30日オープン。口コミ (2025年7月〜2026年5月、英語): 生海老のチリソース、双葉焼き、お好み焼き、四川風の辛い焼きそば、とん平焼き、牛すじと卵の鉄板焼き、さばトースト、ユッケサンド、低温調理の牛タンのお通し、牛のカルパッチョ、砂肝のコンフィ、ホソの揚げ物、海老のアヒージョ、唐揚げ、ポテトサラダ、生ハム、チーズの盛り合わせ、ナチュラルワイン、ワイン好きの店主、毎週変わるおすすめ、深夜も満席に近い、最初の料理まで30分待ったという声、カウンターが寒いという声、味が濃いという声、狭いという声。',
      confidence: 'medium', sources: [TB, R + 'B474106069/', R + 'B510028236/', R + 'B510461635/', R + 'B510842590/', R + 'B516565577/', R + 'B517835295/', R + 'B520757413/', R + 'B522594553/', R + 'B523973387/', R + 'B524705377/', R + 'B527158721/', R + 'B527528686/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night counter; smoking allowed; book late evenings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区紙屋町西木屋町通四条上る373',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004637, 135.770312); cross-checked: GSI 京都府京都市中京区紙屋町373番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510842590/', R + 'B522594553/'],
    price_note: 'No prices in the sources; spend about ¥4,000–6,000 (2025–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Fresh-shrimp chili', null, 'Teppan', 'no', 'no', '2025–2026 reviews.', 'ebi_chili'),
      it('双葉焼き', '', 'Futaba-yaki', null, 'Teppan', 'no', 'no', 'February, March 2026.', 'okonomiyaki'),
    ] }, {
    cuisine: 'ナチュラルワインと合わせる深夜までの創作鉄板居酒屋 (食べログ、2025〜2026年の口コミ)・名物の生海老のチリソース、双葉焼き、お好み焼き、四川風の辛い焼きそば、とん平焼き、牛すじと卵の鉄板焼き、さばトースト、ユッケサンド (2025〜2026年)・お通しの低温調理の牛タン、牛のカルパッチョ、砂肝のコンフィ、ホソの揚げ物と海老のアヒージョ、唐揚げ、ポテトサラダ、生ハム、チーズの盛り合わせ (2025〜2026年)・好みに合わせて選ぶナチュラルワイン、オレンジワインも。毎週のおすすめ',
    neighborhood: '西木屋町、四条の北。京都河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: お好み焼き、焼きそば、さばトースト、唐揚げ、ソース (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 豚、牛、海老、卵の鉄板料理 (2025〜2026年の口コミ)。',
    notes: '[鉄板居酒屋・西木屋町、深夜2時までのお好み焼きとナチュラルワイン] 四条木屋町のそばのおしゃれな鉄板居酒屋で、ワイン好きの店主が生海老のチリソース、双葉焼き、辛い焼きそば、牛すじの鉄板焼きにナチュラルワインを合わせる。深夜1〜2時まで。最初の料理まで30分かかりカウンターが寒かったという声 (2026年1月)、味が濃いという声 (2025年11月)、狭いという声 (2026年4月) も。喫煙可。月曜休み。',
  });
}

save();
